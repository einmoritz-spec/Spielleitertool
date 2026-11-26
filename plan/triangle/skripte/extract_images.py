"""Rasterbilder aus einem PDF ziehen (mit Transparenz). Aufruf: extract_images.py <pdf> <zielordner> <kuerzel> [minpx]"""
import sys, os, pypdfium2 as pdfium, pypdfium2.raw as raw
from PIL import Image
pdf_path, out, tag = sys.argv[1], sys.argv[2], sys.argv[3]
minpx = int(sys.argv[4]) if len(sys.argv) > 4 else 220
os.makedirs(out, exist_ok=True)
pdf = pdfium.PdfDocument(pdf_path)
rows = []
for pi in range(len(pdf)):
    page = pdf[pi]; pw, ph = page.get_size(); n = 0
    try: objs = list(page.get_objects(filter=[raw.FPDF_PAGEOBJ_IMAGE], max_depth=4))
    except Exception as e: print('ERR', pi + 1, e); continue
    for o in objs:
        try:
            l, b, r, t = o.get_bounds()
            bm = o.get_bitmap(render=True); im = bm.to_pil()
        except Exception as e:
            print('E',pi+1,repr(e)[:120]); continue
        if im.width < minpx or im.height < minpx: continue
        n += 1
        name = f"{tag}-p{pi+1:03d}-{n:02d}.png"
        if im.mode not in ('RGB', 'RGBA'): im = im.convert('RGBA')
        im.save(os.path.join(out, name))
        rows.append((name, pi + 1, im.width, im.height, im.mode, round(l / pw, 3), round(1 - t / ph, 3), round((r - l) / pw, 3), round((t - b) / ph, 3)))
    page.close()
with open(os.path.join(out, f"{tag}-liste.tsv"), 'w') as f:
    f.write("datei\tpdfseite\tbreite\thoehe\tmodus\tx\ty\tw\th\n")
    for r in rows: f.write("\t".join(map(str, r)) + "\n")
print(tag, len(rows))
