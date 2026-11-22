"""Spire-Bücher: Illustrationen je Seite als Ausschnitt rendern (nicht roh extrahieren – die Bilder sind im PDF
oft aus mehreren maskierten Teilen zusammengesetzt). Überlappende Bildflächen einer Seite werden zu EINEM Bild
zusammengefasst; wiederkehrende Hintergründe (Papier, Pinselränder) werden übersprungen.
Aufruf: python3 -I extract_images.py <buch-id> <pdf> <zielordner> [dpi=150]
Name: <buch>_S<BUCHSEITE>_<nr>_<b>x<h>.webp  (Buchseite wie im Tool; PDF-Seite = Buchseite + Versatz)"""
import sys, os, collections, pymupdf
bid, pdf, out = sys.argv[1], sys.argv[2], sys.argv[3]
dpi = int(sys.argv[4]) if len(sys.argv) > 4 else 150
OFF = {"cmf": 5, "gm": 0, "qs": 1}[bid]
os.makedirs(out, exist_ok=True)
d = pymupdf.open(pdf)
cnt = collections.Counter()
for p in d:
    for im in p.get_images(full=True): cnt[im[0]] += 1
rep = {x for x, c in cnt.items() if c > 3}
rows = []
for i, p in enumerate(d):
    pr = p.rect; rects = []
    for info in p.get_image_info(xrefs=True):
        if info.get("xref") in rep: continue
        r = pymupdf.Rect(info["bbox"]) & pr
        if r.is_empty or r.width * r.height < 0.02 * pr.width * pr.height: continue
        if r.width < 25 or r.height < 25: continue
        rects.append(r)
    merged = True
    while merged:
        merged = False
        for a in range(len(rects)):
            for b in range(a + 1, len(rects)):
                if (rects[a] + (-4, -4, 4, 4)).intersects(rects[b]):
                    rects[a] = rects[a] | rects[b]; del rects[b]; merged = True; break
            if merged: break
    # Flächen mit viel Text sind Seitenhintergründe oder Textkästen, keine Illustrationen -> überspringen
    keep = []
    for r in rects:
        txt = len(p.get_text("text", clip=r).strip())
        if txt > 150: continue
        keep.append(r)
    rects = keep
    rects.sort(key=lambda r: (r.y0, r.x0))
    for n, r in enumerate(rects, 1):
        pix = p.get_pixmap(clip=r, dpi=dpi)
        name = f"{bid}_S{i+1-OFF:03d}_{n:02d}_{pix.width}x{pix.height}"
        pix.pil_save(os.path.join(out, name + ".webp"), quality=82)
        full = r.width > 0.9 * pr.width and r.height > 0.9 * pr.height
        rows.append(f"{name}\t{i+1}\t{i+1-OFF}\t{round(r.x0)},{round(r.y0)},{round(r.x1)},{round(r.y1)}\t{'ganzseitig' if full else ''}")
open(os.path.join(out, f"inventar-{bid}.tsv"), "w").write("name\tpdf\tbuchseite\tbbox_pt\thinweis\n" + "\n".join(rows) + "\n")
print(bid, len(rows))
