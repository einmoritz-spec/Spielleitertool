#!/usr/bin/env python3
"""Heart – Bilder aus den Buch-PDFs ziehen.
  python3 -I extract_images.py <pdf> <ziel> inventar <kürzel>          → bilder-<kürzel>.tsv (PDF-Seite, Buchseite, Nr, xref, Größe, Lage)
  python3 -I extract_images.py <pdf> <ziel> xref <xref> <name>         → Rohbild (mit SMask-Transparenz) als <name>.webp
  python3 -I extract_images.py <pdf> <ziel> clip <pdfseite> x0 y0 x1 y1 <name> [dpi]   → Seitenausschnitt (pt) als webp
  python3 -I extract_images.py <pdf> <ziel> spread <pdfseiteL> <name> [dpi]            → Doppelseite L+R als EIN Bild
  python3 -I extract_images.py <pdf> <ziel> trim <name>                → weißen/hellen Rand eines fertigen Bildes abschneiden
WICHTIG: Hier immer PDF-Seiten (nicht Buchseiten). Versatz: core 5 · dagger 5 · bb 2 · doors 2 · sanctum 2 · blackops 3.
Hintergrund-Texturen (Papier 850×1100, Seitenstreifen 72×1100, Kapitelbanner 745×157) werden im Inventar markiert.
"""
import sys, pymupdf
from PIL import Image, ImageChops
VERSATZ = {'core': 5, 'dagger': 5, 'bb': 2, 'doors': 2, 'sanctum': 2, 'blackops': 3}
pdf, out, cmd = sys.argv[1], sys.argv[2], sys.argv[3]
d = pymupdf.open(pdf)
def save(img, name, q=86):
    img.save(f'{out}/{name}.webp', 'WEBP', quality=q, method=6); print(name, img.size)
def pix2img(px):
    return Image.frombytes('RGBA' if px.alpha else 'RGB', (px.width, px.height), px.samples)
def kind(w, h):
    if (w, h) in ((850, 1100), (851, 1101), (802, 1101)) or (w <= 3): return 'papier'
    if w == 72 and h == 1100: return 'streifen'
    if (w, h) == (745, 157): return 'kapitelbanner'
    return ''
if cmd == 'inventar':
    off = VERSATZ[sys.argv[4]]; rows = []
    for i, p in enumerate(d):
        for k, info in enumerate(p.get_image_info(xrefs=True)):
            b = info['bbox']
            if (b[2]-b[0])*(b[3]-b[1]) < 1500: continue
            rows.append((i+1, i+1-off, k+1, info['xref'], info['width'], info['height'], *map(int, b), kind(info['width'], info['height'])))
    open(f'{out}/bilder-{sys.argv[4]}.tsv', 'w').write('pdfseite\tbuchseite\tnr\txref\tbreite\thoehe\tx0\ty0\tx1\ty1\tart\n' + '\n'.join('\t'.join(map(str, r)) for r in rows) + '\n')
    print(len(rows), 'Bilder')
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
