"""Alle Illustrationen aus dem PICO-Corebook ziehen (mit Freistellmaske), als webp.
Aufruf: python3 -I plan/pico/extract_images.py <Corebook.pdf> <Zielordner> [--inventar]
- Überspringt die Hintergrund-Kritzelei (2476x1576, xref 2225, kommt nur einmal als img/kritzel.webp ins Tool)
  und Kleinkram unter 120 px.
- Jedes Bild wird nur einmal gespeichert (gleiche xref) – Dateiname: S<seite>_<nr>_<b>x<h>.webp
- Bilder mit SMask bekommen Alpha; danach auf die sichtbare Fläche zugeschnitten.
- Danach JEDES Bild ansehen und nach Plan-Abschnitt 6 umbenennen (Bereich/Name), Doppelseiten prüfen.
Mit --inventar wird nur plan/pico/bilder-inventar.tsv geschrieben."""
import sys, os, io, pymupdf
from PIL import Image
pdf, out = sys.argv[1], sys.argv[2]
inv = "--inventar" in sys.argv
d = pymupdf.open(pdf); seen = set(); rows = []
os.makedirs(out, exist_ok=True)
def load(x):
    info = d.extract_image(x)
    return Image.open(io.BytesIO(info["image"]))
for i in range(d.page_count):
    n = 0
    for im in d[i].get_images(full=True):
        x, sm, w, h = im[0], im[1], im[2], im[3]
        if x in seen or (w, h) == (2476, 1576) or max(w, h) < 120: continue
        seen.add(x); n += 1
        name = f"S{i+1-2:03d}_{n:02d}_{w}x{h}"   # Buchseite (PDF-Seite minus 2)
        rows.append(f"{name}\t{i+1-2}\t{w}\t{h}\t{'maske' if sm else ''}")
        if inv: continue
        try:
            a = load(x).convert("RGB")
            if sm:
                m = load(sm).convert("L").resize(a.size); a.putalpha(m)
                bb = m.getbbox()
                if bb: a = a.crop(bb)
            a.thumbnail((1600, 1600)); a.save(os.path.join(out, name + ".webp"), quality=82)
        except Exception as e:
            print("Fehler", name, e)
open(os.path.join(os.path.dirname(__file__), "bilder-inventar.tsv"), "w").write("datei\tseite\tbreite\thoehe\tmaske\n" + "\n".join(rows) + "\n")
print(len(rows), "Bilder")
