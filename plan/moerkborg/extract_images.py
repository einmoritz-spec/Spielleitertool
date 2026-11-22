#!/usr/bin/env python3
"""Mörk Borg – Bilder aus den Buch-PDFs.

  python3 -I extract_images.py <pdf> inventar <ziel.tsv>          Bild-Inventar (PDF-Seite, xref, Pixel, Lage in pt, Maske)
  python3 -I extract_images.py <pdf> xref <xref> <ziel.webp>      Rohbild (mit Transparenz aus SMask, falls vorhanden)
  python3 -I extract_images.py <pdf> clip <seite> x0 y0 x1 y1 <ziel.webp> [dpi]   Seitenausschnitt in pt (Vektor + Bild)
  python3 -I extract_images.py <pdf> spread <linke Seite> <ziel.webp> [dpi]       Doppelseite als EIN Bild (ohne Lücke)
  python3 -I extract_images.py <pdf> page <seite> <ziel.webp> [dpi]                ganze Seite
Alles als .webp, sprechend benannt (z. B. kreatur-goblin.webp, welt-karte.webp).
"""
import sys, pymupdf
from PIL import Image
import io


def save(img, path):
    img.save(path, 'WEBP', quality=86, method=6)


def pix2pil(pix):
    return Image.frombytes({1:'L',2:'LA',3:'RGB',4:'RGBA'}[pix.n], (pix.width, pix.height), pix.samples)


def main():
    pdf, cmd = sys.argv[1], sys.argv[2]
    d = pymupdf.open(pdf)
    if cmd == 'inventar':
        rows = ['seite\txref\tbreite\thoehe\tx0\ty0\tx1\ty1\tsmask']
        for i, p in enumerate(d, 1):
            for im in p.get_images(full=True):
                xref, smask, w, h = im[0], im[1], im[2], im[3]
                if w * h < 40000: continue
                for r in p.get_image_rects(xref):
                    rows.append(f'{i}\t{xref}\t{w}\t{h}\t{r.x0:.0f}\t{r.y0:.0f}\t{r.x1:.0f}\t{r.y1:.0f}\t{smask}')
        open(sys.argv[3], 'w').write('\n'.join(rows) + '\n'); print(len(rows) - 1, 'Bilder')
    elif cmd == 'xref':
        xref = int(sys.argv[3]); pix = pymupdf.Pixmap(d, xref)
        sm = [im[1] for p in d for im in p.get_images(full=True) if im[0] == xref]
        if pix.n - pix.alpha >= 4 or pix.colorspace is None or pix.colorspace.n not in (1, 3):
            pix = pymupdf.Pixmap(pymupdf.csRGB, pix)
        if sm and sm[0]:
            mask = pymupdf.Pixmap(d, sm[0])
            if (mask.width, mask.height) != (pix.width, pix.height):
                img = pix2pil(pix).convert('RGB'); m = pix2pil(mask).convert('L').resize(img.size); img.putalpha(m)
            else:
                if pix.alpha: pix = pymupdf.Pixmap(pix, 0)
                img = pix2pil(pymupdf.Pixmap(pix, mask)).convert('RGBA')
        else:
            img = pix2pil(pix).convert('RGB')
        save(img, sys.argv[4])
    elif cmd in ('clip', 'page', 'spread'):
        dpi = 200
        if cmd == 'clip':
            pg = d[int(sys.argv[3]) - 1]; x0, y0, x1, y1 = map(float, sys.argv[4:8]); out = sys.argv[8]
            dpi = int(sys.argv[9]) if len(sys.argv) > 9 else dpi
            pix = pg.get_pixmap(clip=pymupdf.Rect(x0, y0, x1, y1), dpi=dpi); save(pix2pil(pix), out)
        elif cmd == 'page':
            out = sys.argv[4]; dpi = int(sys.argv[5]) if len(sys.argv) > 5 else dpi
            save(pix2pil(d[int(sys.argv[3]) - 1].get_pixmap(dpi=dpi)), out)
        else:
            n = int(sys.argv[3]); out = sys.argv[4]; dpi = int(sys.argv[5]) if len(sys.argv) > 5 else dpi
            a = pix2pil(d[n - 1].get_pixmap(dpi=dpi)); b = pix2pil(d[n].get_pixmap(dpi=dpi))
            s = Image.new('RGB', (a.width + b.width, max(a.height, b.height))); s.paste(a, (0, 0)); s.paste(b, (a.width, 0))
            save(s, out)


if __name__ == '__main__':
    main()
