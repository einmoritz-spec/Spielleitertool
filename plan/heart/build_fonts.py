#!/usr/bin/env python3
"""Heart – Schriften aus den Buch-PDFs ziehen und als woff2 fürs Tool aufbereiten.

Aufruf:  python3 -I build_fonts.py <zielordner> <pdf> [<pdf> …]   (am besten alle Heart-PDFs angeben)

Die Bücher betten die Bartender-Familie als nackte CFF ein. Zwei Arten:
  * VOLL eingebettet (301 Zeichen, inkl. Ä Ö Ü ä ö ü ß):  Bartender-SemiCondensedSerif / -SemiCondensedSans / -BoldSans
  * TEIL-SET (nur die benutzten ~65 Zeichen):           Bartender-SemiCondensedSerifPressed (die abgenutzte
    Letterpress-Fassung der Überschriften)
Ergebnis:
  ht-bartender-serif.woff2     saubere Serif (Ersatz/Fallback, Umlaute vorhanden)
  ht-bartender-pressed.woff2   Überschriften wie im Buch: alle Teil-Sets aus allen PDFs vereinigt; fehlende
                               Zeichen (Umlaute, ß, Ziffern …) werden aus der vollen Serif ergänzt – Umlaute als
                               Pressed-Grundbuchstabe + Serif-Punkte, damit die Textur gleich bleibt
  ht-bartender-sans.woff2      Kapitel-Streifen, Etiketten (SemiCondensedSans)
  ht-bartender-boldsans.woff2  Vermissian-Linien (BoldSans)
Fließtext ist Alegreya (frei, @fontsource/alegreya) – nicht hier erzeugt.
"""
import sys, io, pymupdf
from fontTools.cffLib import CFFFontSet
from fontTools.fontBuilder import FontBuilder
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.pens.cu2quPen import Cu2QuPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.recordingPen import RecordingPen
from fontTools.agl import toUnicode
from fontTools.misc.psCharStrings import T2WidthExtractor


def collect(pdfs, base):
    out = []
    for pdf in pdfs:
        doc = pymupdf.open(pdf); seen = set()
        for p in doc:
            for f in p.get_fonts():
                if f[0] in seen or f[3].split('+')[-1] != base:
                    continue
                seen.add(f[0])
                _, ext, _, buf = doc.extract_font(f[0])
                if buf and ext == 'cff':
                    c = CFFFontSet(); c.decompile(io.BytesIO(buf), None); out.append(c[0])
    return out


class Rec:
    def __init__(self, rp): self.rp = rp
    def draw(self, pen): self.rp.replay(pen)


class Src:
    """Ein Zeichen aus einer CFF-Quelle (gs = Glyphensatz, n = Name)."""
    def __init__(self, cff, n):
        self.cff, self.n = cff, n
        self.cs = cff.CharStrings[n]
        pv = self.cs.private
        ex = T2WidthExtractor(getattr(pv, "Subrs", None) or [], self.cs.globalSubrs, pv.nominalWidthX, pv.defaultWidthX)
        ex.execute(self.cs); self.w = ex.width

    def draw(self, pen):
        self.cs.draw(pen)

    def bounds(self):
        bp = BoundsPen(None); self.cs.draw(bp); return bp.bounds


def build(glyphs, family, out):
    """glyphs: dict name -> list[(Src, transform)] (+ Breite)"""
    order = ['.notdef'] + sorted(n for n in glyphs if n != '.notdef')
    tt = {}; hm = {}; cmap = {}
    for n in order:
        if n not in glyphs:
            p = TTGlyphPen(None); tt[n] = p.glyph(); hm[n] = (500, 0); continue
        parts, w = glyphs[n]
        tp = TTGlyphPen(None); pen = Cu2QuPen(tp, 1.0, reverse_direction=True)
        for src, tr in parts:
            src.draw(TransformPen(pen, tr) if tr else pen)
        g = tp.glyph(); tt[n] = g; hm[n] = (int(round(w)), 0)
        u = toUnicode(n)
        if len(u) == 1:
            cmap[ord(u)] = n
    fb = FontBuilder(1000, isTTF=True)
    fb.setupGlyphOrder(order); fb.setupCharacterMap(cmap); fb.setupGlyf(tt)
    for n in order:
        g = tt[n]
        g.recalcBounds(fb.font['glyf']) if hasattr(g, 'recalcBounds') else None
        hm[n] = (hm[n][0], getattr(g, 'xMin', 0) or 0)
    fb.setupHorizontalMetrics(hm)
    fb.setupHorizontalHeader(ascent=800, descent=-200)
    fb.setupNameTable({'familyName': family, 'styleName': 'Regular'})
    fb.setupOS2(sTypoAscender=800, sTypoDescender=-200, usWinAscent=900, usWinDescent=250)
    fb.setupPost(); fb.font.flavor = 'woff2'; fb.save(out)
    print(out, len(order), 'Zeichen · Umlaute:', all(ord(c) in cmap for c in 'ÄÖÜäöüß'))


def full(cffs, family, out):
    c = max(cffs, key=lambda c: len(c.CharStrings.keys()))
    build({n: ([(Src(c, n), None)], Src(c, n).w) for n in c.CharStrings.keys()}, family, out)


def pressed(press, serif, out):
    g = {}
    for c in press:                     # Vereinigung aller Teil-Sets (größte zuerst)
        for n in c.CharStrings.keys():
            if n not in g:
                s = Src(c, n)
                if s.bounds() or n == 'space':
                    g[n] = ([(s, None)], s.w)
    def accent(n, base):
        # nur die Konturen des Akzents (oberhalb des Grundbuchstabens) aus der Serif holen
        rp = RecordingPen(); Src(serif, n).draw(rp); top = Src(serif, base).bounds()[3]
        cont, cur = [], []
        for op, args in rp.value:
            cur.append((op, args))
            if op in ('closePath', 'endPath'):
                cont.append(cur); cur = []
        keep = RecordingPen()
        for c in cont:
            ys = [pt[1] for op, a in c for pt in a]
            if ys and min(ys) > top - 5:
                keep.value.extend(c)
        return keep
    for n in serif.CharStrings.keys():
        if n in g:
            continue
        base = n.replace('dieresis', '') if n.endswith('dieresis') and len(n) > 8 else None
        if base and base in g:          # Pressed-Grundbuchstabe + Serif-Punkte
            bsrc = g[base][0][0][0]; bb = bsrc.bounds(); sbase = Src(serif, base).bounds()
            acc = accent(n, base); ab = BoundsPen(None); acc.replay(ab); ab = ab.bounds
            cx = (bb[0] + bb[2]) / 2 - (sbase[0] + sbase[2]) / 2       # über die Mitte des Pressed-Buchstabens
            dy = bb[3] - sbase[3]                                      # Abstand zur Oberkante wie in der Serif
            g[n] = ([(bsrc, None), (Rec(acc), (1, 0, 0, 1, cx, dy))], bsrc.w)
        else:
            s = Src(serif, n); g[n] = ([(s, None)], s.w)
    build(g, 'HT Bartender Pressed', out)


if __name__ == '__main__':
    out, pdfs = sys.argv[1], sys.argv[2:]
    serif = collect(pdfs, 'Bartender-SemiCondensedSerif')
    full(serif, 'HT Bartender Serif', f'{out}/ht-bartender-serif.woff2')
    full(collect(pdfs, 'Bartender-SemiCondensedSans'), 'HT Bartender Sans', f'{out}/ht-bartender-sans.woff2')
    full(collect(pdfs, 'Bartender-BoldSans'), 'HT Bartender BoldSans', f'{out}/ht-bartender-boldsans.woff2')
    press = sorted(collect(pdfs, 'Bartender-SemiCondensedSerifPressed'), key=lambda c: -len(c.CharStrings.keys()))
    pressed(press, serif[0], f'{out}/ht-bartender-pressed.woff2')
