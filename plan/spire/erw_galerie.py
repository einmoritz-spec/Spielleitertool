#!/usr/bin/env python3
"""Galerie-Einträge der Quellenbücher: plan/spire/erw/bilder-zuordnung.json + spire/js/data/erw/index.js -> spire/js/data/erw/galerie.js
Aufruf: python3 -I plan/spire/erw_galerie.py (aus dem Repo-Wurzelverzeichnis)"""
import json, os
R = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
z = json.load(open(os.path.join(R, "plan/spire/erw/bilder-zuordnung.json")))
s = open(os.path.join(R, "spire/js/data/erw/index.js")).read()
books = json.loads(s[s.index("["):s.rindex("]") + 1])
out = []
for b in books:
    kap = {k["id"]: k for k in b["kap"]}
    pre = {"sin": "Sin", "str": "Strata", "bm": "BM", "cod": "Codex", "skfs": "SKS", "sop": "SO", "bd": "BD"}[b["id"]]
    x = [{"t": b["t"] + ", Titel", "s": "cover/" + b["bid"]}]
    for im in z.get(b["id"], []):
        k = kap.get(im.get("kap"))
        t = (k["t"] + ", " if k else "") + pre + " S. " + str(im["p"])
        x.append({"t": t, "s": im["src"]})
    out.append({"g": b["t"], "id": "erw-" + b["id"], "x": x})
open(os.path.join(R, "spire/js/data/erw/galerie.js"), "w", encoding="utf-8").write(
    "/* Quellenbücher: Galerie (erzeugt mit plan/spire/erw_galerie.py) */\nwindow.SP_GALERIE = (window.SP_GALERIE || []).concat(" + json.dumps(out, ensure_ascii=False, indent=1) + ");\n")
print(sum(len(g["x"]) for g in out), "Bilder")
