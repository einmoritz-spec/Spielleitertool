#!/usr/bin/env python3
"""Signatur-Skizze freistellen und in Buch-Hellblau einfärben.
  python3 -I tint_sketch.py <pdf> <xref> <ziel.webp> [farbe=#7ed3f7]     aus einem Bogen-PDF
  python3 -I tint_sketch.py <bild.png|jpg> - <ziel.webp> [farbe]          aus einem Bild (z. B. Gemini-Ergebnis)
Deckkraft = (SMask, falls vorhanden) × (1 − Helligkeit). Weiß → transparent, Schwarz → Farbe."""
import sys, pymupdf
from PIL import Image, ImageOps, ImageChops
src, out = sys.argv[1], sys.argv[3]
col = sys.argv[4] if len(sys.argv) > 4 else '#7ed3f7'
rgb = tuple(int(col[i:i+2], 16) for i in (1, 3, 5))
def finish(a, size):
    a = a.point(lambda v: 0 if v < 35 else min(255, int((v - 35) * 1.5)))
    im = Image.new('RGBA', size, rgb + (0,)); im.putalpha(a)
    bb = im.getbbox()
    if bb: im = im.crop(bb)
    im.save(out, 'WEBP', quality=88); print(out, im.size); sys.exit()
if not src.lower().endswith('.pdf'):
    g = Image.open(src).convert('L')
    finish(ImageOps.invert(g), g.size)
x = int(sys.argv[2])
d = pymupdf.open(src)
px = pymupdf.Pixmap(d, x)
if px.alpha: px = pymupdf.Pixmap(px, 0)
if px.n - px.alpha > 3 or px.colorspace and px.colorspace.n not in (1, 3): px = pymupdf.Pixmap(pymupdf.csRGB, px)
base = Image.frombytes('L' if px.n == 1 else 'RGB', (px.width, px.height), px.samples).convert('L')
a = ImageOps.invert(base)
sm = d.xref_get_key(x, 'SMask')
if sm[0] == 'xref':
    m = pymupdf.Pixmap(d, int(sm[1].split()[0]))
    mask = Image.frombytes('L', (m.width, m.height), m.samples).resize(base.size)
    a = ImageChops.multiply(a, mask)
finish(a, base.size)
