#!/usr/bin/env python3
"""Schneidet Bilder aus dem Spieler:innen-Handbuch (PDF) aus -> cityofmist/img/rw/*.webp (nur privat genutzt).
Aufruf: python3 -I make_images.py <buch.pdf>   (Buchseite = PDF-Seite - 2; Koordinaten in pt, A4-Seite 595x842)"""
import subprocess, sys, os, tempfile
from PIL import Image
pdf = sys.argv[1]
out = os.path.join(os.path.dirname(__file__), '..', '..', 'cityofmist', 'img', 'rw')
os.makedirs(out, exist_ok=True)
def trim_edges(im, thr=205):
    """Entfernt helle Rand-Zeilen/-Spalten (Papier, Rissränder)."""
    g = im.convert('L')
    def bright(vals): return sum(vals) / len(vals) > thr
    w, h = g.size; px = g.load()
    l, r, t, b = 0, w, 0, h
    while t < b - 10 and bright([px[x, t] for x in range(l, r, 4)]): t += 1
    while b > t + 10 and bright([px[x, b - 1] for x in range(l, r, 4)]): b -= 1
    while l < r - 10 and bright([px[l, y] for y in range(t, b, 4)]): l += 1
    while r > l + 10 and bright([px[r - 1, y] for y in range(t, b, 4)]): r -= 1
    return im.crop((l + 2, t + 2, r - 2, b - 2))
def crop(book, name, box=None, width=900, dpi=150, q=76, trim=False):
    """box = (x0, y0, x1, y1) in pt oder None für ganze Seite."""
    with tempfile.TemporaryDirectory() as t:
        base = os.path.join(t, 'p')
        args = ['pdftoppm', '-f', str(book + 2), '-l', str(book + 2), '-r', str(dpi), '-png', '-singlefile']
        if box:
            k = dpi / 72.0
            x0, y0, x1, y1 = box
            args += ['-x', str(max(0, int(x0 * k))), '-y', str(max(0, int(y0 * k))), '-W', str(int((x1 - max(0, x0)) * k)), '-H', str(int((y1 - max(0, y0)) * k))]
        subprocess.run(args + [pdf, base], check=True)
        im = Image.open(base + '.png').convert('RGB')
        if trim: im = trim_edges(im)
        if im.width > width:
            im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
        im.save(os.path.join(out, name + '.webp'), 'WEBP', quality=q, method=6)
        print(name, im.size, os.path.getsize(os.path.join(out, name + '.webp')) // 1024, 'KB')
W, H = 595.3, 841.9
# Kapitelbilder (Seitenkopf-Illustration)
for b, n in ((18, 'hero_welt'), (40, 'hero_charakter'), (162, 'hero_regeln'), (240, 'hero_entwicklung')):
    crop(b, n, (0, 0, W, H * 0.93), width=1000)
# Themenbuch-Köpfe (Illustration + Titel)
for b, n in ((82,'adaption'),(86,'bastion'),(90,'erkenntnis'),(94,'manifestation'),(98,'mobilitaet'),(102,'relikt'),(106,'subversion'),
             (110,'besitztuemer'),(114,'mission'),(118,'persoenlichkeit'),(122,'praegende'),(126,'routine'),(130,'schluessel'),(134,'training'),
             (284,'fortbewegung'),(288,'operationsbasis'),(292,'verbuendete')):
    crop(b, 'tb_' + n, (0, 0, W, H * (0.60 if b < 110 else 0.42 if b > 280 else 0.50)), width=1100)
# Druckvorlagen
for b in (298, 299, 300, 301): crop(b, 'doc_%d' % b, None, width=1100, dpi=150, q=80)

# Weitere Illustrationen (Seite: Bruchteile x0,y0,x1,y1 der Seite) -> fig_<Seite>.webp; Text/Papierrand wird entfernt
FIGS = {15:(0,0,1,0.955),16:(0,0,1,0.955),17:(0,0,1,0.955),38:(0,0,1,0.955),39:(0,0,1,0.955),160:(0.025,0.02,0.985,0.945),161:(0.02,0.02,0.985,0.945),238:(0,0,1,0.955),239:(0,0,1,0.955),
        33:(0.09,0,1,0.95),40:(0,0,1,0.955),48:(0,0,1,0.30),49:(0,0,1,0.30),51:(0,0,1,0.38),64:(0,0,1,0.48),138:(0,0,1,0.95),
        211:(0,0,1,0.41),171:(0,0.64,1,0.94),173:(0.43,0,1,0.62),183:(0,0.70,1,0.94),232:(0,0.785,1,0.935),233:(0,0.785,1,0.935),
        253:(0.47,0,1,0.55),262:(0,0,1,0.30),263:(0,0,1,0.40),273:(0.42,0,1,0.96),281:(0.54,0.36,1,0.95)}
for b, (a, c, d, e) in FIGS.items():
    crop(b, 'fig_%d' % b, (a * W, c * H, d * W, e * H), width=900, dpi=130, q=72, trim=True)
