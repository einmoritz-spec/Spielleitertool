"""Wildsea-Corebook (EN) -> Markdown je Kapitel, mit Seitenmarken.
Aufruf: python3 -I plan/wildsea/extract_text.py <Corebook.pdf> <Zielordner>
Überschriften (Teko) werden zu #/##/###, Merriweather-Bold zu **…**, Italic zu *…*.
Kursiv = im Buch oft der Spielleiter-Hinweis am Ende eines Eintrags -> im Datenfeld `i` ablegen.
Reihenfolge = Reihenfolge im PDF-Inhaltsstrom (für dieses Buch meist korrekte Lesereihenfolge);
bei Kästen/Tabellen im Zweifel die Seite als Bild ansehen (pdftoppm -r 80 -f N -l N)."""
import sys, os, re, pymupdf
pdf, out = sys.argv[1], sys.argv[2]
os.makedirs(out, exist_ok=True)
d = pymupdf.open(pdf)
CH = [(4,"k01-setting"),(30,"k02-mechanik"),(44,"k03-szenen"),(58,"k04-montagen"),(66,"k05-reisen"),
      (78,"k06-charakter-elemente"),(98,"k07-charaktererstellung"),(162,"k08-schiffe"),(186,"k09-leitfaden"),
      (218,"k10-gefahren"),(274,"k11-reiche"),(336,"k12-tisch"),(362,"k13-boegen")]
def chap(p):
    n = CH[0][1]
    for s, name in CH:
        if p >= s: n = name
    return n
files = {}
for i in range(d.page_count):
    p = i + 1
    if p < 4: continue
    md = [f"\n\n<!-- S. {p} -->\n"]
    for b in d[i].get_text("dict")["blocks"]:
        for l in b.get("lines", []):
            line = ""; head = 0
            for s in l["spans"]:
                t = s["text"]
                if not t.strip(): line += t; continue
                f = s["font"]
                if "Teko" in f:
                    head = max(head, s["size"]); line += t
                elif "Bold" in f and "Italic" in f: line += f"***{t.strip()}*** "
                elif "Bold" in f: line += f"**{t.strip()}** "
                elif "Italic" in f: line += f"*{t.strip()}* "
                else: line += t
            line = line.rstrip()
            if not line.strip(): continue
            if head >= 24: line = "# " + line.strip()
            elif head >= 16: line = "## " + line.strip()
            elif head >= 10.5: line = "### " + line.strip()
            md.append(line)
    files.setdefault(chap(p), []).append("\n".join(md))
for k, v in files.items():
    open(os.path.join(out, k + ".md"), "w").write("".join(v))
    print(k, sum(len(x) for x in v))
