#!/usr/bin/env python3
"""Slugblaster – Schriften aus dem Regelbuch-PDF ziehen und für das Tool aufbereiten.

Aufruf:  python3 -I build_fonts.py <Regelbuch.pdf> <zielordner>

Ergebnis:
  sb-onedirection.woff2    Marker-Überschriften (OneDirection) – im Teil-Set sind Ziffern, Umlaute, ß und
                           einige Zeichen leer: leere Zeichen werden entfernt (Ziffern kommen dann aus
                           der Ersatzschrift „Permanent Marker“, siehe CSS), Umlaute/ß werden ergänzt
  sb-hateyourwriting.woff2 Handschrift der Randnotizen (HateYourWriting) – Umlaute und ß werden
                           hier als zusammengesetzte Glyphen ergänzt (Grundbuchstabe + zwei Punkte
                           aus dem Punkt-Glyph, ß = „ss“)
Benötigt: pymupdf, fonttools, brotli  (pip install --break-system-packages pymupdf fonttools brotli)
"""
import sys, io, pymupdf
from fontTools.ttLib import TTFont
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.pens.transformPen import TransformPen


def largest(doc, base):
    best = None
    for p in doc:
        for f in p.get_fonts():
            if f[3].split('+')[-1] == base:
                _, ext, _, buf = doc.extract_font(f[0])
                if best is None or len(buf) > len(best):
                    best = buf
    return best


def drop_empty(tt):
    """Das PDF-Teil-Set enthält Zeichen ohne Umriss (z. B. Ziffern bei OneDirection).
    Diese aus der cmap entfernen, damit der Browser auf die Ersatzschrift ausweicht."""
    g = tt['glyf']
    for t in tt['cmap'].tables:
        for cp in list(t.cmap):
            if cp > 32 and g[t.cmap[cp]].numberOfContours == 0:
                del t.cmap[cp]


def add_umlauts(tt):
    cmap = tt.getBestCmap()
    gs = tt.getGlyphSet()
    glyf = tt['glyf']; hmtx = tt['hmtx']
    dot = cmap.get(ord('.'))
    if dot is None:
        return
    dbox = glyf[dot]; dbox.recalcBounds(glyf)
    dw, dh = dbox.xMax - dbox.xMin, dbox.yMax - dbox.yMin
    order = tt.getGlyphOrder()
    new = {}
    for base, ch in (('A', 'Ä'), ('O', 'Ö'), ('U', 'Ü'), ('a', 'ä'), ('o', 'ö'), ('u', 'ü')):
        if ord(ch) in cmap or ord(base) not in cmap:
            continue
        bn = cmap[ord(base)]; g = glyf[bn]; g.recalcBounds(glyf)
        adv = hmtx[bn][0]
        pen = TTGlyphPen(gs)
        gs[bn].draw(pen)
        top = g.yMax + dh * 0.45
        cx = (g.xMin + g.xMax) / 2
        gap = max(dw * 0.9, (g.xMax - g.xMin) * 0.16)
        for x in (cx - gap - dw / 2, cx + gap - dw / 2):
            gs[dot].draw(TransformPen(pen, (1, 0, 0, 1, x - dbox.xMin, top - dbox.yMin)))
        name = 'sbadd%04X' % ord(ch)
        new[name] = (pen.glyph(), adv, ord(ch))
    if ord('ß') not in cmap and ord('s') in cmap:
        sn = cmap[ord('s')]; adv = hmtx[sn][0]
        pen = TTGlyphPen(gs)
        gs[sn].draw(pen)
        gs[sn].draw(TransformPen(pen, (1, 0, 0, 1, adv, 0)))
        new['sbadd00DF'] = (pen.glyph(), adv * 2, ord('ß'))
    for name, (g, adv, cp) in new.items():
        order.append(name); glyf.glyphOrder = order; glyf[name] = g
        g.recalcBounds(glyf); hmtx[name] = (adv, getattr(g, 'xMin', 0))
        for t in tt['cmap'].tables:
            if t.isUnicode():
                t.cmap[cp] = name
    tt.setGlyphOrder(order)
    tt['maxp'].numGlyphs = len(order)


def main(pdf, out):
    doc = pymupdf.open(pdf)
    for base, fn, fix in (('OneDirection', 'sb-onedirection.woff2', False),
                          ('HateYourWriting', 'sb-hateyourwriting.woff2', True)):
        buf = largest(doc, base)
        tt = TTFont(io.BytesIO(buf))
        drop_empty(tt)
        add_umlauts(tt)
        tt.flavor = 'woff2'
        tt.save(f'{out}/{fn}')
        cm = tt.getBestCmap()
        print(fn, 'Umlaute:', all(ord(c) in cm for c in 'ÄÖÜäöüß'))


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
