#!/usr/bin/env python3
"""Schneidet Bilder aus dem Spieler:innen-Handbuch (PDF) aus -> cityofmist/img/rw/*.webp (nur privat genutzt).
Aufruf: python3 -I make_images.py <buch.pdf>   (Buchseite = PDF-Seite - 2; Koordinaten in pt, A4-Seite 595x842)"""
import subprocess, sys, os, tempfile
from PIL import Image
pdf = sys.argv[1]
out = os.path.join(os.path.dirname(__file__), '..', '..', 'cityofmist', 'img', 'rw')
os.makedirs(out, exist_ok=True)
def crop(book, name, box=None, width=900, dpi=150, q=76):
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
