"""Spire-Bücher (EN) -> Markdown je Kapitel, mit Seitenmarken <!-- S. n --> (= gedruckte BUCHSEITE).
Aufruf: python3 -I extract_text.py <buch-id> <pdf> <zielordner>
   buch-id: cmf (The City Must Fall, PDF-Seite = S. + 5) | gm (Magister's Guide, PDF = S.) | qs (Quickstart, PDF-Seite = S. + 1)
Überschriften (Geared Slab) -> #/##/###/#### nach Größe; {farbe=#xxxxxx} = Farbe der Überschrift
(#194d71 blau = Kapitel/Bereich, #981a3f weinrot = Abschnitt; #3c3b57 = Schiefer im GM Guide/Quickstart).
Weißer Text (Kasten auf schwarzem/dunklem Grund) wird als Zeile mit '> ' markiert = Kasten.
Fett **…**, kursiv *…*. Zweispaltiges im Zweifel am Seitenbild prüfen: pdftoppm -r 80 -f <PDF-Seite> -l <PDF-Seite> -png."""
import sys, os, pymupdf
bid, pdf, out = sys.argv[1], sys.argv[2], sys.argv[3]
os.makedirs(out, exist_ok=True)
d = pymupdf.open(pdf)
OFF = {"cmf": 5, "gm": 0, "qs": 1}[bid]
CH = {
 "cmf": [(1,"k00-willkommen"),(3,"k01-welt"),(9,"k02-regeln"),(17,"k03-fertigkeiten-domaenen"),(19,"k04-ausruestung"),
         (23,"k05-bindungen"),(25,"k06-charaktere"),(29,"k07a-azurite"),(33,"k07b-bound"),(37,"k07c-carrion-priest"),
         (41,"k07d-firebrand"),(45,"k07e-idol"),(49,"k07f-knight"),(53,"k07g-lajhan"),(57,"k07h-masked"),(61,"k07i-midwife"),
         (65,"k07j-vermissian-sage"),(69,"k08-extra-advances"),(77,"k09-kampf"),
         (81,"k10a-akademie"),(89,"k10b-handel"),(101,"k10c-verbrechen"),(107,"k10d-hohe-gesellschaft"),
         (117,"k10e-niedere-gesellschaft"),(129,"k10f-okkult"),(147,"k10g-ordnung"),(155,"k10h-religion"),
         (173,"k11-spielleitung"),(183,"a1-neue-goetter"),(200,"a2-zufall"),(205,"a3-drow-glossar"),(207,"a4-ziegen"),
         (208,"a5-arkologien"),(210,"a6-antagonisten"),(211,"a7-medien"),(212,"zz-charakterbogen-index")],
 "gm": [(1,"g00-titel"),(4,"g01-einleitung"),(5,"g02a-freiheit"),(8,"g02b-fortschritt-beats"),(10,"g02c-erwerbungen"),
        (13,"g02d-unterschlupf"),(17,"g03-klassen-zusatz"),(49,"g04-essays")],
 "qs": [(0,"q00-titel"),(1,"q01-regeln-kurz"),(18,"q02-snuff-out-the-sun"),(25,"q03-vorgefertigte-charaktere")],
}[bid]
def chap(p):
    n = CH[0][1]
    for s, name in CH:
        if p >= s: n = name
    return n
files = {}
for i in range(d.page_count):
    p = i + 1 - OFF
    md = [f"\n\n<!-- S. {p} (PDF {i+1}) -->\n"]
    for b in d[i].get_text("dict")["blocks"]:
        for l in b.get("lines", []):
            line = ""; head = 0; hcol = None; gs = 0; tot = 0; white = 0
            for s in l["spans"]:
                t = s["text"]
                if not t.strip(): line += t; continue
                f = s["font"]; tot += len(t.strip())
                if s["color"] in (0xffffff, 0xe2e2e6): white += len(t.strip())
                bold = "Bold" in f or "Semibold" in f or "Extrabold" in f
                if "Geared" in f or "Desdemona" in f or "BuiltTitling" in f or "buick" in f:
                    gs += len(t.strip()); line += t
                    if len(t.strip()) > 1: head = max(head, s["size"])
                    if s["color"] not in (0, 0x12120c, 0xffffff): hcol = "#%06x" % s["color"]
                elif "Italic" in f or "It" in f.split("-")[-1]:
                    line += f"*{t.strip()}* " if not bold else f"***{t.strip()}*** "
                elif bold: line += f"**{t.strip()}** "
                else: line += t
            line = line.rstrip()
            if not line.strip(): continue
            if head and gs * 2 > tot:
                tag = "#" if head >= 34 else "##" if head >= 19 else "###" if head >= 14 else "####"
                line = f"{tag} {line.strip()}" + (f" {{farbe={hcol}}}" if hcol else "")
            if white * 2 > tot: line = "> " + line
            md.append(line)
    files.setdefault(chap(p), []).append("\n".join(md))
for k, v in files.items():
    open(os.path.join(out, k + ".md"), "w").write("".join(v))
    print(k, sum(len(x) for x in v))
