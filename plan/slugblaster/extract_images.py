#!/usr/bin/env python3
"""Slugblaster – Bilder aus dem Regelbuch ziehen.
  python3 -I extract_images.py <pdf> <ziel> inventar        → bilder-inventar.tsv (Seite, Nr, xref, Größe, Lage)
  python3 -I extract_images.py <pdf> <ziel> xref <xref> <name>         → Rohbild (mit Transparenz) als <name>.webp
  python3 -I extract_images.py <pdf> <ziel> clip <seite> x0 y0 x1 y1 <name> [dpi]  → Seitenausschnitt (pt) als webp
  python3 -I extract_images.py <pdf> <ziel> spread <seiteL> <name> [dpi]           → Doppelseite L+R als ein Bild
Seiten = Buchseiten = PDF-Seiten (kein Versatz). Seitenformat 648×648 pt.
"""
import sys, pymupdf
from PIL import Image
pdf, out, cmd = sys.argv[1], sys.argv[2], sys.argv[3]
d = pymupdf.open(pdf)
def save(img, name, q=86):
    img.save(f'{out}/{name}.webp', 'WEBP', quality=q, method=6); print(name, img.size)
def pix2img(px):
    mode = 'RGBA' if px.alpha else 'RGB'
    return Image.frombytes(mode, (px.width, px.height), px.samples)
if cmd == 'inventar':
    rows = []
    for i, p in enumerate(d):
        for k, info in enumerate(p.get_image_info(xrefs=True)):
            b = info['bbox']
            if (b[2]-b[0])*(b[3]-b[1]) < 2000: continue
            rows.append((i+1, k+1, info['xref'], info['width'], info['height'], *map(int, b)))
    open(f'{out}/bilder-inventar.tsv', 'w').write('seite\tnr\txref\tbreite\thoehe\tx0\ty0\tx1\ty1\n' + '\n'.join('\t'.join(map(str, r)) for r in rows) + '\n')
elif cmd == 'xref':
    x = int(sys.argv[4]); px = pymupdf.Pixmap(d, x)
    sm = d.xref_get_key(x, 'SMask')
    if sm[0] == 'xref':
        px = pymupdf.Pixmap(px, pymupdf.Pixmap(d, int(sm[1].split()[0])))
    if px.n - px.alpha > 3: px = pymupdf.Pixmap(pymupdf.csRGB, px)
    save(pix2img(px), sys.argv[5])
elif cmd == 'clip':
    s = int(sys.argv[4]); r = pymupdf.Rect(*map(float, sys.argv[5:9])); dpi = int(sys.argv[10]) if len(sys.argv) > 10 else 200
    save(pix2img(d[s-1].get_pixmap(clip=r, dpi=dpi)), sys.argv[9])
elif cmd == 'spread':
    s = int(sys.argv[4]); dpi = int(sys.argv[6]) if len(sys.argv) > 6 else 160
    a = pix2img(d[s-1].get_pixmap(dpi=dpi)); b = pix2img(d[s].get_pixmap(dpi=dpi))
    im = Image.new('RGB', (a.width+b.width, a.height)); im.paste(a, (0, 0)); im.paste(b, (a.width, 0))
    save(im, sys.argv[5])
