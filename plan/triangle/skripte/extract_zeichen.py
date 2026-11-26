"""Vektor-Zeichen (Dreiecke, Symbole) freigestellt aus den PDFs schneiden.
Je Eintrag: name, pdf-kuerzel, pdfseite, grobe Box in Punkt (x0,y0,x1,y1, Ursprung oben links). Rand wird automatisch auf den Inhalt getrimmt."""
import subprocess, sys, os
from PIL import Image
Q = sys.argv[1]; OUT = sys.argv[2]; DPI = 600
PDF = {'co': Q + '/Triangle_Agency___Regeln___HTG_Core_Rules__EN_.pdf',
       'va': Q + '/4784ab6a-Triangle_Agency___Abenteuer___The_Vault_Missions_EN_Singles.pdf',
       'bo': Q + '/ce890e58-Triangle_Agency___Material___Character_Organization_Sheets_EN.pdf',
       'sp': Q + '/41b1db4d-Triangle_Agency___Abenteuer___Youre_in_Space_and_Everythings_Perfectly_Fine_EN.pdf'}
exec(open(os.path.join(os.path.dirname(__file__), 'zeichen_liste.py')).read())
os.makedirs(OUT, exist_ok=True)
for name, k, p, (x0, y0, x1, y1) in ZEICHEN:
    s = DPI / 72; tmp = '/tmp/_z'
    subprocess.run(['pdftocairo', '-png', '-transp', '-r', str(DPI), '-f', str(p), '-l', str(p), '-singlefile',
                    '-x', str(int(x0 * s)), '-y', str(int(y0 * s)), '-W', str(int((x1 - x0) * s)), '-H', str(int((y1 - y0) * s)),
                    PDF[k], tmp], stderr=subprocess.DEVNULL)
    im = Image.open(tmp + '.png').convert('RGBA')
    px = im.load()
    if px[0, 0][3] > 250 and min(px[0, 0][:3]) > 245:  # Seite hat weissen Grund: Weiss -> durchsichtig
        import numpy as np
        a = np.array(im).astype(int); d = 255 - a[..., :3].min(axis=2)
        a[..., 3] = np.clip(d * 6, 0, 255); im = Image.fromarray(a.astype('uint8'), 'RGBA')
    bb = im.getchannel('A').point(lambda a: 255 if a > 8 else 0).getbbox()
    if not bb: print('LEER', name); continue
    im = im.crop(bb); im.save(os.path.join(OUT, name + '.png')); print(name, im.size)
