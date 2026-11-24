#!/usr/bin/env python3
"""Schneidet Avatar-/Gegner-/Orts-Illustrationen aus Shadows & Showdowns (PDF, EN) -> cityofmist/img/ss_*.webp (privat genutzt).
Aufruf: python3 -I make_ss_images.py <ss.pdf>   (PDF-Seite = Seitenzahl im Tool; Box in Bruchteilen der Seite)"""
import subprocess, sys, os, tempfile
from PIL import Image
sys.path.insert(0, os.path.dirname(__file__))
pdf = sys.argv[1]
out = os.path.join(os.path.dirname(__file__), '..', '..', 'cityofmist', 'img')
def trim_edges(im, thr=205):
    g = im.convert('L'); w, h = g.size; px = g.load(); l, r, t, b = 0, w, 0, h
    br = lambda v: sum(v) / len(v) > thr
    while t < b - 10 and br([px[x, t] for x in range(l, r, 4)]): t += 1
    while b > t + 10 and br([px[x, b - 1] for x in range(l, r, 4)]): b -= 1
    while l < r - 10 and br([px[l, y] for y in range(t, b, 4)]): l += 1
    while r > l + 10 and br([px[r - 1, y] for y in range(t, b, 4)]): r -= 1
    return im.crop((l + 2, t + 2, r - 2, b - 2))
def crop(page, name, f, width=800, dpi=120, q=74):
    with tempfile.TemporaryDirectory() as t:
        base = os.path.join(t, 'p')
        subprocess.run(['pdftoppm', '-f', str(page), '-l', str(page), '-r', str(dpi), '-png', '-singlefile', pdf, base], check=True)
        im = Image.open(base + '.png').convert('RGB'); W, H = im.size
        im = im.crop((int(f[0] * W), int(f[1] * H), int(f[2] * W), int(f[3] * H)))
        im = trim_edges(im)
        if im.width > width: im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
        im.save(os.path.join(out, name + '.webp'), 'WEBP', quality=q, method=6); print(name, im.size)
J = {'ss_chow':(138,(0,0,1,0.68)),'ss_king':(148,(0,0,1,0.68)),'ss_ganesha':(158,(0,0.20,1,0.93)),'ss_leyland':(168,(0,0,1,0.68)),
     'ss_rosaline':(178,(0,0,1,0.68)),'ss_wolfe':(188,(0,0,1,0.68)),
     'ss_g198':(198,(0,0,1,0.97)),'ss_g200':(200,(0,0,1,0.95))}
for n, (p, f) in J.items(): crop(p, n, f)
