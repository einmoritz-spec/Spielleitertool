#!/usr/bin/env python3
"""Neue Götter (cmf Anhang 1, S. 183–199) -> spire/js/data/goetter.js"""
import re, json, os, sys
sys.path.insert(0, os.path.dirname(__file__))
from build_klassen import ROOT, Parser, strip_head, split_ability

DE = os.path.join(ROOT, "quellen/spire/de/cmf/a1-neue-goetter.md")
GODS = [("ishtuk", "Ishtuk", "# Ishtuk"), ("luxulyan", "Luxulyan", "# Luxulyan"), ("apash", "Apash", "# Apash"), ("carabys", "Carabys", "# Carabys"),
        ("the-many", "Die Vielen", "# DIE VIELEN"), ("miah", "Miah", "# MIAH"), ("garrack", "Garrack", "# GARRACK"), ("the-masked-god", "Der Maskierte Gott", "# DER MASKIERTE GOTT")]
TERM = re.compile(r"[.!?:“”)\]*]\s*$")


def zeilen():
    P = Parser(open(DE).read()); out = []
    for l in P.iter(): out.append((l, P.page))
    return out


def vorab(Z):
    """Tabellenzeilen, die im Extrakt vor der Überschrift stehen, herausziehen."""
    rest = []; ish = []; w10 = []; i = 0
    while i < len(Z):
        l, p = Z[i]
        if re.match(r"^\d+(-\d+)?\+?$", l) and i + 1 < len(Z):
            row = [l, Z[i + 1][0]]; i += 2
            while i < len(Z) and not re.match(r"^\d+(-\d+)?\+?$", Z[i][0]) and not Z[i][0].startswith(("#", "*", ">")) and len(ish) < 3 and Z[i][0][:1] in "E":
                row[1] += " " + Z[i][0]; i += 1
            ish.append(row); continue
        if l == "**W10**":
            i += 1
            while i < len(Z) and re.match(r"^\*\d+\.", Z[i][0]) or (i < len(Z) and w10 and not Z[i][0].startswith(("#", "*", ">")) and len(w10) < 10 and Z[i][0][:1].isupper() and Z[i - 1][0] != ""):
                t = Z[i][0]
                m = re.match(r"^\*(\d+)\.\s*(.*?)\.\*\s*(.*)$", t)
                if m: w10.append([m.group(1), "**" + m.group(2) + ".** " + m.group(3)])
                else: w10[-1][1] += " " + t
                i += 1
            continue
        rest.append((l, p)); i += 1
    return rest, ish, w10


def absaetze(ls):
    """Hart umbrochene Zeilen zu Absätzen verbinden. ls = [(text, seite)] -> [(absatz, seite)]"""
    out = []
    for t, p in ls:
        if out:
            prev = out[-1][0]
            neu = bool(TERM.search(prev)) and len(prev_last(prev)) < 56 and t[:1].isupper()
            if t.startswith("**"): neu = True
            if not neu:
                out[-1] = (prev + " " + t, out[-1][1]); continue
        out.append((t, p))
    return [(re.sub(r"(?<!\*)\*\s+\*(?!\*)", " ", a), p) for a, p in out]

LAST = {}
def prev_last(prev): return prev  # Länge der zuletzt angehängten Zeile wird unten über Marker bestimmt


def main():
    Z, ish, w10 = vorab(zeilen())
    # Absatzbildung: Zeilenlänge der letzten Zeile pro Absatz verfolgen
    def bauen(ls):
        out = []; lastlen = 0
        for t, p in ls:
            if out:
                prev = out[-1][0]
                neu = bool(TERM.search(prev)) and lastlen < 56 and (t[:1].isupper() or t.startswith("**"))
                if t.startswith("**"): neu = True
                if not neu:
                    out[-1] = (prev + " " + t, out[-1][1]); lastlen = len(t); continue
            out.append((t, p)); lastlen = len(t)
        return [(re.sub(r"(?<!\*)\*\s+\*(?!\*)", " ", a), p) for a, p in out]
    # Kapitel finden
    idx = []
    for gid, name, pre in GODS:
        for i, (l, p) in enumerate(Z):
            if l.startswith(pre): idx.append(i); break
    intro_Z = Z[:idx[0]]
    G = []
    for n, (gid, name, pre) in enumerate(GODS):
        ch = Z[idx[n]: idx[n + 1] if n + 1 < len(idx) else len(Z)]
        head = ch[0][0]; sub = None
        m = re.match(r"^# [^,]*,\s*(.*?)\s*\{", head)
        if m: sub = m.group(1)[:1].upper() + m.group(1)[1:]
        patron = None
        for l, p in ch:
            mm = re.search(r"in Auftrag gegeben von ([^)]*)\)", l)
            if mm: patron = mm.group(1); break
        g = {"id": gid, "t": name, "sub": sub, "patron": patron, "p": ch[0][1], "img": "gott/" + gid, "intro": [], "vor": None, "auff": None, "boxen": [], "fort": {"niedrig": [], "mittel": [], "hoch": []}, "fallout": []}
        body = []
        for l, p in ch[1:]:
            if l.startswith("## (in Auftrag") or "in Auftrag gegeben" in l and l.startswith("#"): continue
            body.append((l, p))
        # Segmente
        seg = []; cur = None; mode = "intro"; grp = None; fo = None; box = None
        i = 0
        def flush():
            pass
        pend = []  # zeilen des aktuellen Segments
        segs = []  # (kind, meta, lines)
        for l, p in body:
            if l.startswith("> "):
                c = l[2:].strip()
                if c.startswith("## "):
                    segs.append(("box", strip_head(c), [])); continue
                if segs and segs[-1][0] == "box": segs[-1][2].append((c, p)); continue
            if l.startswith("## "):
                h = strip_head(l)
                if h.upper() == "FORTSCHRITTE": segs.append(("fort", None, [])); continue
                if h.lower() in ("niedrig", "mittel", "hoch"): segs.append(("grp", h.lower(), [])); continue
            if l.startswith("### "):
                segs.append(("fo", strip_head(l).capitalize(), [])); continue
            if l.startswith("# "): continue
            if not segs: segs.append(("text", None, []))
            if segs[-1][0] in ("fort", "grp", "fo", "text"):
                segs[-1][2].append((l, p))
            elif segs[-1][0] == "box":
                segs.append(("text", None, [(l, p)]))
        mode = "intro"; grp = None; fo = None
        for kind, meta, ls in segs:
            if kind == "box":
                g["boxen"].append({"h": meta, "b": [a for a, _ in bauen(ls)]}); continue
            if kind == "fort": mode = "fort"; continue
            if kind == "grp": grp = meta; fo = None; mode = "fort"
            if kind == "fo": fo = {"t": meta, "x": []}; g["fallout"].append(fo)
            for a, p in bauen(ls):
                if a.startswith("**Voraussetzung:**"): g["vor"] = a.split("**", 2)[2].strip(); continue
                if a.startswith("**Auffrischen:**"): g["auff"] = a.split("**", 2)[2].strip(); continue
                if a.startswith("**") and mode == "fort":
                    if not re.match(r"^\*\*[^*]+\*\*", a): print("!!", gid, a[:80]); g["intro"].append(a); continue
                    nm, tag, fl, rest = split_ability(a)
                    c = {"t": nm, "p": p}
                    if tag: c["tag"] = tag
                    if fl: c["fl"] = fl
                    c["x"] = [rest] if rest else []
                    if gid == "ishtuk" and rest.endswith("abgebaut hast:"): c["x"].append({"t": "tbl", "rows": ish})
                    (fo["x"] if fo else g["fort"][grp]).append(c); continue
                if mode == "fort":
                    tgt = (fo["x"][-1] if fo and fo["x"] else (g["fort"][grp][-1] if g["fort"][grp] else None))
                    if tgt is not None:
                        tgt["x"].append(a)
                        if gid == "ishtuk" and a.endswith("abgebaut hast:"): tgt["x"].append({"t": "tbl", "rows": ish})
                        continue
                g["intro"].append(a)
        if gid == "the-many":
            for c in g["fort"]["niedrig"]:
                if c["t"].startswith("DER CHOR"): c["x"].append({"t": "w10", "h": "Der Chor", "id": "w10_chor", "rows": [r[1] for r in w10]})
        G.append(g)
    # Einleitung
    ib = bauen([(l, p) for l, p in intro_Z if not l.startswith(("#", ">"))])
    box = [(l[2:].strip(), p) for l, p in intro_Z if l.startswith("> ") and not l.startswith("> ##")]
    O = {"p": 183, "intro": [a for a, _ in ib], "box": {"h": "Schutzheilige", "b": [a for a, _ in bauen(box)]}, "goetter": G}
    open(os.path.join(ROOT, "spire/js/data/goetter.js"), "w").write("/* The Spire – Neue Götter, Anhang 1 (erzeugt mit plan/spire/build_goetter.py) */\nwindow.SP_GOETTER = %s;\n" % json.dumps(O, ensure_ascii=False, indent=1))
    print(len(ib), len(box))
    for g in G: print(g["id"], g["sub"], "|", g["patron"], "| intro", len(g["intro"]), "vor", bool(g["vor"]), "auff", bool(g["auff"]), {k: [c["t"] for c in v] for k, v in g["fort"].items()}, [f["t"] for f in g["fallout"]], len(g["boxen"]))

if __name__ == "__main__":
    main()
