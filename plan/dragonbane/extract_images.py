#!/usr/bin/env python3
"""Dragonbane – Bilder aus dem Regelbuch ziehen (Buchseite = PDF-Seite − 4).
  python3 -I extract_images.py <pdf> <ziel> inventar                 → bilder-inventar.tsv (nur Illustrationen; Ornamente,
                                                                         die auf mehr als 2 Seiten vorkommen, stehen in ornamente.tsv)
  python3 -I extract_images.py <pdf> <ziel> xref <xref> <name>         → Rohbild mit Transparenz (SMask) als <name>.webp
  python3 -I extract_images.py <pdf> <ziel> clip <pdfseite> x0 y0 x1 y1 <name> [dpi]   → Seitenausschnitt (pt) als webp
  python3 -I extract_images.py <pdf> <ziel> spread <pdfseiteL> <name> [dpi]             → Doppelseite L+R als ein Bild
  python3 -I extract_images.py <pdf> <ziel> orn <xref> <name>          → Ornament als PNG (verlustfrei, für CSS border-image)
  python3 -I extract_images.py - <ziel> trim <datei.webp>              → gleichmäßigen weißen/transparenten Leerraum abschneiden (12 px Rand)
Seitenformat 626×811 pt.
"""
import sys, pymupdf
from collections import Counter
from PIL import Image
pdf, out, cmd = sys.argv[1], sys.argv[2], sys.argv[3]
d = pymupdf.open(pdf) if pdf != '-' else None
OFF = 4
def raw(x):
    px = pymupdf.Pixmap(d, x)
    sm = d.xref_get_key(x, 'SMask')
    if sm[0] == 'xref':
        px = pymupdf.Pixmap(px, pymupdf.Pixmap(d, int(sm[1].split()[0])))
    if px.n - px.alpha > 3: px = pymupdf.Pixmap(pymupdf.csRGB, px)
    return Image.frombytes('RGBA' if px.alpha else 'RGB', (px.width, px.height), px.samples)
def save(img, name, q=86):
    img.save(f'{out}/{name}.webp', 'WEBP', quality=q, method=6); print(name, img.size)
if cmd == 'inventar':
    pages = Counter(); rows = []
    for i, p in enumerate(d):
        for info in p.get_image_info(xrefs=True):
            if info['xref']: pages[info['xref']] += 1
    for i, p in enumerate(d):
        for k, info in enumerate(p.get_image_info(xrefs=True)):
            b = info['bbox']; x = info['xref']
            if not x or (b[2]-b[0])*(b[3]-b[1]) < 3000: continue
            rows.append((i+1, i+1-OFF, x, pages[x], info['width'], info['height'], *map(int, b)))
    head = 'pdfseite\tbuchseite\txref\tanzahl_seiten\tbreite\thoehe\tx0\ty0\tx1\ty1\n'
    open(f'{out}/bilder-inventar.tsv', 'w').write(head + '\n'.join('\t'.join(map(str, r)) for r in rows if r[3] <= 2) + '\n')
    orn = sorted({r[2:6] for r in rows if r[3] > 2}, key=lambda r: -r[1])
    open(f'{out}/ornamente.tsv', 'w').write('xref\tanzahl_seiten\tbreite\thoehe\n' + '\n'.join('\t'.join(map(str, r)) for r in orn) + '\n')
    print(len(rows), 'Einträge,', len(orn), 'Ornamente')
elif cmd == 'xref':
    save(raw(int(sys.argv[4])), sys.argv[5])
elif cmd == 'orn':
    raw(int(sys.argv[4])).save(f'{out}/{sys.argv[5]}.png', optimize=True); print(sys.argv[5])
elif cmd == 'clip':
    s = int(sys.argv[4]); r = pymupdf.Rect(*map(float, sys.argv[5:9])); dpi = int(sys.argv[10]) if len(sys.argv) > 10 else 200
    px = d[s-1].get_pixmap(clip=r, dpi=dpi); save(Image.frombytes('RGB', (px.width, px.height), px.samples), sys.argv[9])
elif cmd == 'spread':
    s = int(sys.argv[4]); dpi = int(sys.argv[6]) if len(sys.argv) > 6 else 160
    a, b = [d[n].get_pixmap(dpi=dpi) for n in (s-1, s)]
    A = Image.frombytes('RGB', (a.width, a.height), a.samples); B = Image.frombytes('RGB', (b.width, b.height), b.samples)
    im = Image.new('RGB', (A.width+B.width, A.height)); im.paste(A, (0, 0)); im.paste(B, (A.width, 0)); save(im, sys.argv[5])
elif cmd == 'trim':
    f = sys.argv[4]; im = Image.open(f)
    if im.mode == 'RGBA':
        bb = im.split()[-1].point(lambda v: 255 if v > 12 else 0).getbbox()
    else:
        bb = im.convert('L').point(lambda v: 255 if v < 238 else 0).getbbox()
    if bb:
        p = 12; bb = (max(0, bb[0]-p), max(0, bb[1]-p), min(im.width, bb[2]+p), min(im.height, bb[3]+p))
        im.crop(bb).save(f, quality=86); print(f, im.size, '->', (bb[2]-bb[0], bb[3]-bb[1]))
