#!/usr/bin/env python3
"""Anhänge 3, 6, 7 (Drow-Glossar S. 205, Antagonisten S. 210, Empfohlene Medien S. 211) -> spire/js/data/anhang.js"""
import re, json, os, sys
sys.path.insert(0, os.path.dirname(__file__))
from build_klassen import ROOT, Parser, strip_head

DE = os.path.join(ROOT, "quellen/spire/de/cmf")

def lines(f):
    P = Parser(open(os.path.join(DE, f + ".md")).read()); out = []
    for l in P.iter(): out.append((l, P.page))
    return out

A = []
# Drow-Glossar
G = []; b = []; p0 = None; txt = []
for l, p in lines("a3-drow-glossar"):
    if l.startswith("#"): continue
    m = re.match(r"^\*\*(.+?)\*\*\s*[–-]\s*(.*)$", l)
    m2 = re.match(r"^\*\*(.+?)\*\*\s*(.*)$", l)
    if m and not m.group(1).strip().endswith("–"):
        G.append([m.group(1).strip(), m.group(2).strip()])
    elif m2 and l.startswith("**"):
        G.append([m2.group(1).strip(), re.sub(r"^[–-]\s*", "", m2.group(2)).strip()])
    elif G:
        if p != p0 and p0 is not None and l[:1].isupper() is False or (G and not G[-1][1].endswith((".", "“", "”")) and l[:1].isupper()):
            G[-1][1] += " " + l
        elif p != p0 and not l.startswith("**"):
            G[-1][1] += " " + l
        else:
            txt.append(l)
    else:
        txt.append(l)
    p0 = p
A.append({"id": "glossar", "t": "Drow-Glossar", "p": 205, "b": txt + [{"t": "tbl", "head": ["Begriff", "Bedeutung"], "rows": G}]})
# Antagonisten
Z = lines("a6-antagonisten"); intro = []; tabs = {}; cur = None; rng = None
for l, p in Z:
    if l.startswith("# "): continue
    if l in ("**W100**", "**ERGEBNIS**"): continue
    m = re.match(r"^\*\*(Straßenebene|Stadtebene)\*\*$", l)
    if m: cur = m.group(1); tabs[cur] = []; rng = None; continue
    if re.match(r"^\d\d-\d\d$", l): rng = l; continue
    if cur and rng: tabs[cur].append([rng, l]); rng = None; continue
    if not cur: intro.append(l)
    elif tabs[cur] and not rng: tabs[cur][-1][1] += " " + l
# Fließtext steht im Dokument nach den Tabellen
Z2 = [l for l, p in Z]
i = Z2.index("# ANTAGONISTEN {farbe=#194d71}") if "# ANTAGONISTEN {farbe=#194d71}" in Z2 else None
txtA = [l for l, p in Z if not l.startswith("#") and re.match(r"^[A-ZÄÖÜ].{80,}", l)]
B = txtA[:1] + [{"t": "h3", "x": "Straßenebene", "p": 210}, {"t": "tbl", "head": ["W100", "Ergebnis"], "rows": tabs.get("Straßenebene", [])}, {"t": "h3", "x": "Stadtebene", "p": 210}, {"t": "tbl", "head": ["W100", "Ergebnis"], "rows": tabs.get("Stadtebene", [])}]
A.append({"id": "antagonisten", "t": "Antagonisten", "p": 210, "b": B})
# Medien
M = []; cur = None; first = []
for l, p in lines("a7-medien"):
    if l.startswith("# "): continue
    if l.startswith("## "): cur = {"t": strip_head(l), "x": []}; M.append(cur); continue
    if cur is None: first.append(l); continue
    if cur["x"] and re.match(r"^(of |und )", l): cur["x"][-1] += " " + l
    else: cur["x"].append(l)
B = first[:1]
for m in M:
    B += [{"t": "h3", "x": m["t"], "p": 211}] + ([m["x"][0]] if m["t"] == "Musik" and len(m["x"][0]) > 60 else []) + [{"t": "ul", "x": [x for x in m["x"] if not (m["t"] == "Musik" and len(x) > 60 and x is m["x"][0])]}]
A.append({"id": "medien", "t": "Empfohlene Medien", "p": 211, "b": B})
open(os.path.join(ROOT, "spire/js/data/anhang.js"), "w").write("/* The Spire – Anhänge 3, 6, 7 (erzeugt mit plan/spire/build_anhang.py) */\nwindow.SP_ANHANG = %s;\n" % json.dumps(A, ensure_ascii=False, indent=1))
for a in A: print(a["id"], len(a["b"]), [len(b["rows"]) if isinstance(b, dict) and b["t"] == "tbl" else None for b in a["b"] if isinstance(b, dict)])
