"""Teil D: Rasterbilder (Kumpel S. 172, Stifte) mit Transparenz aus dem PDF. Aufruf: extract_wkd_raster.py <uploads> <zielordner>"""
import subprocess, sys, os, glob, tempfile
from PIL import Image
Q, OUT = sys.argv[1], sys.argv[2]
PDF = Q + '/Triangle_Agency___Regeln___HTG_Core_Rules__EN_.pdf'
T = tempfile.mkdtemp()
subprocess.run(['pdfimages', '-png', '-f', '175', '-l', '176', PDF, T + '/i'], check=True)
def lade(n):
    im = Image.open('%s/i-%03d.png' % (T, n)).convert('RGBA'); m = Image.open('%s/i-%03d.png' % (T, n + 1)).convert('L'); im.putalpha(m)
    return im.crop(im.getchannel('A').point(lambda a: 255 if a > 8 else 0).getbbox())
for n, name in [(2, 'wkd-kumpel-s172'), (0, 'wkd-stift-1'), (8, 'wkd-stift-2')]:
    lade(n).save(os.path.join(OUT, name + '.png')); print(name)
# S. 176 (PDF 179): zweiter Kumpel (Hacker)
T = tempfile.mkdtemp()
subprocess.run(['pdfimages', '-png', '-f', '179', '-l', '179', PDF, T + '/i'], check=True)
lade(5).save(os.path.join(OUT, 'wkd-kumpel-s176-hack.png')); print('wkd-kumpel-s176-hack')
