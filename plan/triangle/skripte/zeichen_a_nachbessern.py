"""Nachbearbeitung der Zeichen aus zeichen_a.py (nach extract_zeichen.py ausführen):
python3 -I plan/triangle/skripte/zeichen_a_nachbessern.py triangle/img/zeichen"""
import sys, os
from PIL import Image, ImageDraw
import numpy as np
from scipy import ndimage
D = sys.argv[1]
def laden(n): return Image.open(os.path.join(D, n + '.png')).convert('RGBA')
def speichern(im, n):
    bb = im.getchannel('A').getbbox(); im.crop(bb).save(os.path.join(D, n + '.png'))
namen = [l.split("'")[1] for l in open(os.path.join(os.path.dirname(__file__), 'zeichen_a.py')) if l.strip().startswith("('")]
for n in namen:  # blasse Zellhintergründe und Rahmenlinien weg
    if n == 'symbol-fangen-verwirrt': continue
    im = laden(n); a = np.array(im); a[..., 3] = np.where(a[..., 3] < 110, 0, a[..., 3]); speichern(Image.fromarray(a), n)
for n in ['pikto-mission-anomalie', 'pikto-mission-geld', 'pikto-mission-ziele']:  # Pfeilreste
    a = np.array(laden(n)); lab, k = ndimage.label(a[..., 3] > 0); sz = ndimage.sum(a[..., 3] > 0, lab, range(1, k + 1))
    keep = [i + 1 for i, s in enumerate(sz) if s > 0.05 * max(sz)]; a[..., 3] = np.where(np.isin(lab, keep), a[..., 3], 0); speichern(Image.fromarray(a), n)
a = np.array(laden('figur-dreieckskopf-daumen')); h, w = a.shape[:2]
a[..., 3] = np.where(a[..., :3].min(axis=2) > 200, 0, a[..., 3])
red = (a[..., 0] > 120) & (a[..., 2] < 100); m = np.zeros_like(red); m[int(h * .4):, :int(w * .3)] = True
a[..., 3] = np.where(red & m, 0, a[..., 3]); a[int(h * .5):, :int(w * .12), 3] = 0; speichern(Image.fromarray(a), 'figur-dreieckskopf-daumen')
a = np.array(laden('symbol-strassenbahn'))
red = (a[..., 0] > 120) & (a[..., 2] < 120); grey = (a[..., 0] > 180) & (abs(a[..., 0].astype(int) - a[..., 2].astype(int)) < 30)
a[..., 3] = np.where(red | grey, 0, a[..., 3]); speichern(Image.fromarray(a), 'symbol-strassenbahn')
a = np.array(laden('symbol-ansehen-10')); a[..., 3] = np.where((a[..., 0] > 150) & (a[..., 1] < 90), a[..., 3], 0); speichern(Image.fromarray(a), 'symbol-ansehen-10')
for n in ['symbol-menschen-schwarz', 'symbol-mensch-rot']:
    a = np.array(laden(n)); a[..., 3] = np.where(a[..., :3].min(axis=2) > 190, 0, a[..., 3]); speichern(Image.fromarray(a), n)
S = 4; N = 186 * S; col = (45, 82, 167, 255)  # „verwirrt“: im Buch von Randgrafik überdeckt, daher nachgezeichnet
im = Image.new('RGBA', (N, N), (0, 0, 0, 0)); d = ImageDraw.Draw(im)
d.ellipse((0, 0, N - 1, N - 1), outline=col, width=int(N * .09))
for cx in (.34, .66): r = N * .065; d.ellipse((cx * N - r, .37 * N - r, cx * N + r, .37 * N + r), fill=col)
d.rounded_rectangle((.3 * N, .62 * N, .7 * N, .62 * N + N * .06), radius=N * .03, fill=col)
im.resize((186, 186), Image.LANCZOS).save(os.path.join(D, 'symbol-fangen-verwirrt.png'))
