"""PICO-Corebook (EN) -> Markdown je Kapitel, mit Seitenmarken.
Aufruf: python3 -I plan/pico/extract_text.py <Pico-Core.pdf> <Zielordner>
WICHTIG: PDF-Seite = Buchseite + 2. Die Marken <!-- S. n --> enthalten die BUCHSEITE (wie im Buch und im Inhaltsverzeichnis).
Überschriften (Baby-Doll) werden nach Größe zu #/##/###/####; fette Spans **…**, kursive *…*.
Farbige Überschriften bekommen ein {farbe=#xxxxxx} dahinter (zeigt, in welchem Kasten/Farbbereich sie stehen).
Kästen/Tabellen im Zweifel am Seitenbild prüfen: pdftoppm -r 80 -f <S.+2> -l <S.+2> -png."""
import sys, os, pymupdf
pdf, out = sys.argv[1], sys.argv[2]
os.makedirs(out, exist_ok=True)
d = pymupdf.open(pdf)
OFF = 2
# (erste BUCHseite, Dateiname)
CH = [(4,"k00-vorwort"),(6,"k01-welt"),(28,"k02-grundregeln"),(48,"k03-szenen"),(68,"k04-montagen"),(82,"k05-reisen"),
      (98,"k06-kaefer-1-nektar"),(152,"k07-kaefer-2-wahl"),(170,"k08-picotitanen"),(190,"k09-weber"),
      (200,"k10-gefahren"),(268,"k11-orte-allgemein"),(272,"k11a-hogwild"),(286,"k11b-shadow-house"),(300,"k11c-skyglass-dome"),
      (312,"k11d-nekopolis"),(324,"k11e-westgate-mall"),(338,"k12-anhang")]
def chap(p):
    n = CH[0][1]
    for s, name in CH:
        if p >= s: n = name
    return n
files = {}
for i in range(d.page_count):
    p = i + 1 - OFF
    if p < 4: continue
    md = [f"\n\n<!-- S. {p} -->\n"]
    for b in d[i].get_text("dict")["blocks"]:
        for l in b.get("lines", []):
            line = ""; head = 0; hcol = None; bd = 0; tot = 0
            for s in l["spans"]:
                t = s["text"]
                if not t.strip(): line += t; continue
                f = s["font"]; bold = bool(s["flags"] & 16) or "Bold" in f or "Medium" in f
                tot += len(t.strip())
                if "Baby" in f:
                    bd += len(t.strip()); line += t
                    if len(t.strip()) > 1: head = max(head, s["size"])
                    if s["color"] not in (0x1f2427, 0x1f2426, 0xffffff): hcol = "#%06x" % s["color"]
                elif "Italic" in f and bold: line += f"***{t.strip()}*** "
                elif bold: line += f"**{t.strip()}** "
                elif "Italic" in f: line += f"*{t.strip()}* "
                else: line += t
            line = line.rstrip()
            if not line.strip(): continue
            if head and bd * 2 > tot:
                tag = "#" if head >= 30 else "##" if head >= 20 else "###" if head >= 13 else "####"
                line = f"{tag} {line.strip()}" + (f" {{farbe={hcol}}}" if hcol else "")
            md.append(line)
    files.setdefault(chap(p), []).append("\n".join(md))
for k, v in files.items():
    open(os.path.join(out, k + ".md"), "w").write("".join(v))
    print(k, sum(len(x) for x in v))
