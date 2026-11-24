#!/usr/bin/env python3
"""Dragonbane – Schriften aus dem Regelbuch-PDF ziehen und für das Tool aufbereiten.

Aufruf:  python3 -I build_fonts.py <Rulebook.pdf> <zielordner>

Das PDF bettet je Schnitt viele Teil-Sets ein (Hideout-Bold z. B. 118×). Das Skript
  1. vereinigt alle Teil-Sets eines Schnitts über die Glyphennamen,
  2. wandelt die CFF-Umrisse in TrueType (cu2qu) und baut eine vollständige Schrift mit cmap,
  3. ergänzt fehlende Umlaute Ä Ö Ü ä ö ü aus dem Grundbuchstaben + den Punkten aus „ä“/„ö“
     (Minion) bzw. aus dem Punkt-Glyph (Hideout) und
  4. speichert alles als WOFF2.
Ergebnis (in <ziel>):  db-hideout-{black,bold,semibold,regular,light}.woff2,
                       db-minion-{regular,it,semibold,semiboldit,medium,bold,semiboldcapt}.woff2
Fehlende Zeichen (v. a. ß, Q, einige Kursiv-Großbuchstaben) kommen per CSS-Ersatzschrift:
  Hideout → nächstschwererer Hideout-Schnitt, ß → 'ss'-Ersatz nur in Versalien (text-transform),
  Minion  → EB Garamond (assets/fonts/eb-garamond-*), siehe db.css.
Benötigt: pymupdf, fonttools, brotli
"""
import sys, io, pymupdf
from fontTools.cffLib import CFFFontSet
from fontTools.misc.psCharStrings import T2WidthExtractor
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.pens.cu2quPen import Cu2QuPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.recordingPen import RecordingPen
from fontTools.fontBuilder import FontBuilder
from fontTools.agl import toUnicode

SCHNITTE = {
    'Hideout-Black': 'db-hideout-black', 'Hideout-Bold': 'db-hideout-bold', 'Hideout-SemiBold': 'db-hideout-semibold',
    'Hideout-Regular': 'db-hideout-regular', 'Hideout-Light': 'db-hideout-light',
    'MinionPro-Regular': 'db-minion-regular', 'MinionPro-It': 'db-minion-it', 'MinionPro-Semibold': 'db-minion-semibold',
    'MinionPro-SemiboldIt': 'db-minion-semiboldit', 'MinionPro-Medium': 'db-minion-medium', 'MinionPro-Bold': 'db-minion-bold',
    'MinionPro-SemiboldCapt': 'db-minion-semiboldcapt',
}


def subsets(doc):
    out = {}
    for p in doc:
        for f in p.get_fonts():
            base = f[3].split('+')[-1]
            if base in SCHNITTE:
                out.setdefault(base, set()).add(f[0])
    return out


def collect(doc, xrefs):
    glyphs = {}   # name -> (RecordingPen, width)
    for x in sorted(xrefs):
        buf = doc.extract_font(x)[3]
        if not buf:
            continue
        cff = CFFFontSet(); cff.decompile(io.BytesIO(buf), None)
        top = cff[cff.fontNames[0]]; pr = top.Private
        nom = getattr(pr, 'nominalWidthX', 0); dfl = getattr(pr, 'defaultWidthX', 0)
        for name in top.CharStrings.keys():
            if name in glyphs:
                continue
            cs = top.CharStrings[name]
            ext = T2WidthExtractor(cs.private.Subrs if hasattr(cs.private, 'Subrs') else [], cs.globalSubrs, nom, dfl)
            ext.execute(cs)
            rp = RecordingPen(); cs.draw(rp)
            glyphs[name] = (rp, ext.width)
    return glyphs


def bounds(rp):
    xs, ys = [], []
    for op, pts in rp.value:
        for p in pts:
            xs.append(p[0]); ys.append(p[1])
    return (min(xs), min(ys), max(xs), max(ys)) if xs else (0, 0, 0, 0)


def contours(rp):
    cur, out = [], []
    for op, pts in rp.value:
        cur.append((op, pts))
        if op in ('closePath', 'endPath'):
            out.append(cur); cur = []
    return out


def add_umlauts(g):
    have = {toUnicode(n) for n in g}
    # Punkte holen: bevorzugt aus ä/ö (Minion), sonst zwei Punkte aus „period“
    dots = None
    for src, base in (('adieresis', 'a'), ('odieresis', 'o')):
        if src in g and base in g:
            bc = contours(g[base][0]); top = bounds(g[base][0])[3]
            cs = [c for c in contours(g[src][0]) if bounds(RecordingPen.__new__(RecordingPen) if False else _rp(c))[1] > top * 0.95]
            if len(cs) >= 2:
                dots = ('dia', cs, top); break
    if dots is None and 'period' in g:
        dots = ('dot', g['period'][0], None)
    if dots is None:
        return
    for base, name, ch in (('A', 'Adieresis', 'Ä'), ('O', 'Odieresis', 'Ö'), ('U', 'Udieresis', 'Ü'),
                           ('a', 'adieresis', 'ä'), ('o', 'odieresis', 'ö'), ('u', 'udieresis', 'ü')):
        if ch in have or base not in g:
            continue
        rp, w = g[base]; b = bounds(rp)
        new = RecordingPen(); rp.replay(new)
        cx = (b[0] + b[2]) / 2
        if dots[0] == 'dia':
            dia = _rp([seg for c in dots[1] for seg in c]); db = bounds(dia)
            dx = cx - (db[0] + db[2]) / 2
            dy = (b[3] - dots[2]) if b[3] > dots[2] * 1.15 else 0
            if dy:  # Versal: Punkte über die Versalhöhe heben, etwas flacher
                dy = b[3] - db[1] + (db[1] - dots[2]) * 0.55
            dia.replay(TransformPen(new, (1, 0, 0, 1, dx, dy)))
        else:
            dot = dots[1]; db = bounds(dot); dw = db[2] - db[0]; dh = db[3] - db[1]
            gap = max(dw * 0.75, (b[2] - b[0]) * 0.14)
            top = b[3] + dh * 0.45
            for x in (cx - gap - dw / 2, cx + gap - dw / 2):
                dot.replay(TransformPen(new, (1, 0, 0, 1, x - db[0], top - db[1])))
        g[name] = (new, w)


def _rp(segs):
    r = RecordingPen(); r.value = list(segs); return r


def build(g, family, style, path):
    order = ['.notdef'] + sorted(n for n in g if n != '.notdef')
    cmap, glyf, hmtx = {}, {}, {}
    for n in order:
        rp, w = g.get(n, (RecordingPen(), 500))
        pen = TTGlyphPen(None); rp.replay(Cu2QuPen(pen, 1.0, reverse_direction=True))
        glyf[n] = pen.glyph(); hmtx[n] = (int(round(w)), int(bounds(rp)[0]))
        u = toUnicode(n)
        if len(u) == 1 and n != '.notdef':
            cmap[ord(u)] = n
    cmap.setdefault(0x20, 'space') if 'space' in g else None
    fb = FontBuilder(1000, isTTF=True)
    fb.setupGlyphOrder(order); fb.setupCharacterMap(cmap); fb.setupGlyf(glyf); fb.setupHorizontalMetrics(hmtx)
    fb.setupHorizontalHeader(ascent=900, descent=-250)
    fb.setupNameTable({'familyName': family, 'styleName': style})
    fb.setupOS2(sTypoAscender=900, sTypoDescender=-250, usWinAscent=950, usWinDescent=280)
    fb.setupPost(); fb.font.flavor = 'woff2'; fb.save(path)
    return sorted(chr(c) for c in cmap)


def main(pdf, out):
    doc = pymupdf.open(pdf)
    for base, xr in subsets(doc).items():
        g = collect(doc, xr)
        add_umlauts(g)
        chars = build(g, 'DB ' + base.split('-')[0], base.split('-')[1], f'{out}/{SCHNITTE[base]}.woff2')
        print(f'{SCHNITTE[base]:26} {len(xr):3} Teil-Sets  {len(chars):3} Zeichen  fehlt: ' +
              ''.join(c for c in 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ÄÖÜäöüß' if c not in chars))


if __name__ == '__main__':
    main(*sys.argv[1:])
