#!/usr/bin/env python3
"""Schneidet die Themebook-Illustrationen (linker Bildstreifen der Themebook-Eröffnungsseiten) aus dem Legend-in-the-Mist-Core-Book -> assets/tb/<key>.webp (privat genutzt).
Aufruf: python3 -I make_lm_images.py <core_book.pdf>"""
import subprocess, sys, os, tempfile
from PIL import Image
pdf = sys.argv[1]; out = os.path.join(os.path.dirname(__file__), '..', 'assets', 'tb'); os.makedirs(out, exist_ok=True)
PAGES = {'circumstance':92,'devotion':94,'past':96,'people':98,'personality':100,'trait':104,'duty':106,'influence':108,'knowledge':110,'prodigious':112,
         'relic':114,'uncanny':116,'destiny':118,'dominion':120,'mastery':122,'monstrosity':124,'companion':126,'magic':128,'possessions':130}
for key, pg in PAGES.items():
    with tempfile.TemporaryDirectory() as t:
        subprocess.run(['pdftoppm','-f',str(pg),'-l',str(pg),'-r','110','-png','-singlefile',pdf,os.path.join(t,'p')],check=True)
        im = Image.open(os.path.join(t,'p.png')).convert('RGB'); W, H = im.size
        im = im.crop((0, 0, int(W * 0.235), int(H * 0.945)))
        im.thumbnail((420, 1200)); im.save(os.path.join(out, key + '.webp'), 'WEBP', quality=74, method=6); print(key, im.size)
