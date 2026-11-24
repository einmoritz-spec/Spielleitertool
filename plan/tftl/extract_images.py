"""Alle Illustrationen aus einem Tales-from-the-Loop-PDF ziehen und Doppelseiten zusammensetzen.
Aufruf: python3 -I plan/tftl/extract_images.py <buch.pdf> <kürzel> <Zielordner>
- Kleinkram unter 200 px (Logos, Seitenzahl-Embleme, Spiegelstriche) wird übersprungen.
- Jedes Bild nur einmal (gleiche xref). Name: <kürzel>_S<pdfseite>_<nr>_<b>x<h>.webp
- DOPPELSEITEN: Die Kapitel-Eröffnungsbilder sind im PDF in zwei Bilder zerlegt – linke Hälfte
  ragt über den rechten Rand von Seite N, rechte Hälfte beginnt am linken Rand von Seite N+1,
  gleiche Pixelhöhe. Diese Paare werden zu EINEM Bild <kürzel>_S<N>-<N+1>_<nr>_dbl_<b>x<h>.webp
  zusammengesetzt (die Einzelhälften werden dann nicht gespeichert).
- Querformat-Seiten (z. B. Karte Core S. 3, 1224 pt breit) sind im PDF schon eine Doppelseite.
- Der Beschnitt (Bleed) über den Seitenrand hinaus wird an der Naht abgeschnitten.
- Schreibt zusätzlich <Zielordner>/inventar.tsv (datei, seite, breite, hoehe, art)."""
import sys, os, io, pymupdf
from PIL import Image
pdf, kz, out = sys.argv[1], sys.argv[2], sys.argv[3]
os.makedirs(out, exist_ok=True)
d = pymupdf.open(pdf); rows = []; seen = set()
def load(x, sm=0):
    a = Image.open(io.BytesIO(d.extract_image(x)["image"]))
    if a.mode == "CMYK": a = a.convert("RGB")
    a = a.convert("RGB")
    if sm:
        try:
            m = Image.open(io.BytesIO(d.extract_image(sm)["image"])).convert("L").resize(a.size)
            a.putalpha(m); bb = m.getbbox()
            if bb: a = a.crop(bb)
        except Exception: pass
    return a
def imgs(i):
    p = d[i]; W = p.rect.width; r = []
    for im in p.get_images(full=True):
        x, sm, w, h = im[0], im[1], im[2], im[3]
        if max(w, h) < 200: continue
        for bb in p.get_image_rects(x)[:1]:
            r.append(dict(x=x, sm=sm, w=w, h=h, bb=bb, W=W))
    return r
pages = [imgs(i) for i in range(d.page_count)]
pair = {}
for i in range(d.page_count - 1):
    for a in pages[i]:
        if a["bb"].x1 < a["W"] - 3: continue
        for b in pages[i + 1]:
            if b["bb"].x0 <= 1 and abs(a["h"] - b["h"]) <= 2 and abs(a["bb"].y0 - b["bb"].y0) < 4 and a["x"] != b["x"]:
                pair[a["x"]] = (i, b)
def save(img, name):
    img.thumbnail((2400, 2400)); img.save(os.path.join(out, name + ".webp"), quality=80)
for i in range(d.page_count):
    n = 0
    for a in pages[i]:
        if a["x"] in seen: continue
        seen.add(a["x"]); n += 1
        try:
            if a["x"] in pair:
                b = pair[a["x"]][1]; seen.add(b["x"])
                L, R = load(a["x"]), load(b["x"])
                # Beschnitt (Bleed) abschneiden: nur der sichtbare Teil innerhalb der Seite zählt,
                # sonst wiederholt sich ein Streifen an der Naht.
                ba, bbb = a["bb"], b["bb"]
                L = L.crop((0, 0, round(L.width * (a["W"] - ba.x0) / ba.width), L.height))
                wr = d[i + 1].rect.width
                R = R.crop((round(R.width * (0 - bbb.x0) / bbb.width), 0, round(R.width * (min(bbb.x1, wr) - bbb.x0) / bbb.width), R.height))
                S = Image.new("RGB", (L.width + R.width, max(L.height, R.height)), "white")
                S.paste(L, (0, 0)); S.paste(R, (L.width, 0))
                name = f"{kz}_S{i+1:03d}-{i+2:03d}_{n:02d}_dbl_{S.width}x{S.height}"
                save(S, name); rows.append(f"{name}\t{i+1}-{i+2}\t{S.width}\t{S.height}\tdoppelseite")
            else:
                name = f"{kz}_S{i+1:03d}_{n:02d}_{a['w']}x{a['h']}"
                save(load(a["x"], a["sm"]), name)
                art = "querseite" if a["W"] > 1000 else ("maske" if a["sm"] else "")
                rows.append(f"{name}\t{i+1}\t{a['w']}\t{a['h']}\t{art}")
        except Exception as e:
            print("Fehler", i + 1, e)
open(os.path.join(out, "inventar.tsv"), "w").write("datei\tseite\tbreite\thoehe\tart\n" + "\n".join(rows) + "\n")
print(kz, len(rows), "Bilder,", sum(1 for r in rows if "dbl" in r), "Doppelseiten")
