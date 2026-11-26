"""Teil B (Werkzeug, Anomalien bauen): Buchseiten S. 151-157, 160, 161 ohne Text als durchsichtige Gestaltungsebene (Kleckse, Fenster-Rahmen, Fussabdruecke, Totenkoepfe ...).
Aufruf: python3 -I plan/triangle/skripte/zeichen_wkb.py /mnt/user-data/uploads triangle/img/zeichen
Schritt 1: Textbefehle aus den PDF-Seiten entfernen (pikepdf), Schritt 2: mit pdftocairo durchsichtig rendern, Schritt 3: fuer S. 152 zusaetzlich nur die blauen Kleckse (Ebene ueber dem Text)."""
import sys, os, subprocess, tempfile, pikepdf
import numpy as np
from scipy import ndimage
from PIL import Image
Q, OUT = sys.argv[1], sys.argv[2]
SRC = Q + '/Triangle_Agency___Regeln___HTG_Core_Rules__EN_.pdf'
BUCH = [151, 152, 153, 154, 155, 156, 157, 160, 161]
TXT = {'Tj', 'TJ', "'", '"'}
def clean(obj, seen):
    if obj.objgen in seen: return
    seen.add(obj.objgen)
    obj.write(pikepdf.unparse_content_stream([i for i in pikepdf.parse_content_stream(obj) if str(i.operator) not in TXT]))
    res = obj.get('/Resources')
    if res and '/XObject' in res:
        for k, x in res['/XObject'].items():
            if x.get('/Subtype') == '/Form': clean(x, seen)
pdf = pikepdf.open(SRC); neu = pikepdf.Pdf.new()
for b in BUCH:
    pg = pdf.pages[b + 3 - 1]; seen = set()
    pg.Contents = pdf.make_stream(pikepdf.unparse_content_stream([i for i in pikepdf.parse_content_stream(pg) if str(i.operator) not in TXT]))
    res = pg.get('/Resources')
    if res and '/XObject' in res:
        for k, x in res['/XObject'].items():
            if x.get('/Subtype') == '/Form': clean(x, seen)
    neu.pages.append(pg)
tmp = tempfile.mkdtemp(); f = tmp + '/ohne-text.pdf'; neu.save(f)
subprocess.run(['pdftocairo', '-png', '-transp', '-r', '130', f, tmp + '/p'], check=True)
os.makedirs(OUT, exist_ok=True)
for i, b in enumerate(BUCH, 1):
    im = Image.open('%s/p-%d.png' % (tmp, i)).convert('RGBA')
    a = np.array(im); lab, n = ndimage.label(a[..., 3] > 40, structure=np.ones((3, 3)))
    for k, sl in enumerate(ndimage.find_objects(lab), 1):  # Ringketten (schmal, mittellang) entfernen: im Tool als Liste nachgebaut
        h, w = sl[0].stop - sl[0].start, sl[1].stop - sl[1].start
        if w < 40 and 60 < h < 650 and b != 151: a[ndimage.binary_dilation(lab == k, iterations=2)] = 0
    if b in (156, 161):  # kleine Chaos-Wirbel im Text (werden als Zeichen eingesetzt)
        for x0, y0 in ([(553, 627), (312, 916), (153, 936), (184, 936), (220, 936)] if b == 156 else [(427, 593), (428, 656), (428, 719), (428, 763)]): a[int((y0 - 3) * 1.3):int((y0 + 17) * 1.3), int((x0 - 3) * 1.3):int((x0 + 17) * 1.3)] = 0
    if b == 161: a[int(585 * 1.3):int(790 * 1.3), int(393 * 1.3):int(417 * 1.3)] = 0  # Ringkette der Liste (haengt an der Linie)
    im = Image.fromarray(a, 'RGBA'); im.save('%s/wkb-s%d.png' % (OUT, b), optimize=True); print(b, im.size)
    if b == 156:  # die zwei kleinen Kleckse mit Zwischenruf entfernen (im Tool als Textmarken nachgebaut)
        a = np.array(im)
        for x0, y0, x1, y1 in [(180, 305, 275, 375), (240, 380, 455, 440)]: a[int(y0 * 1.3):int(y1 * 1.3), int(x0 * 1.3):int(x1 * 1.3)] = 0
        Image.fromarray(a, 'RGBA').save('%s/wkb-s156.png' % OUT, optimize=True)
    if b == 152:  # nur die blauen Kleckse
        a = np.array(im).astype(int); d = np.abs(a[..., :3] - np.array([52, 76, 166])).sum(axis=2)
        a[..., 3] = np.where(d < 70, a[..., 3], 0); Image.fromarray(a.astype('uint8'), 'RGBA').save('%s/wkb-s152-blau.png' % OUT, optimize=True)
