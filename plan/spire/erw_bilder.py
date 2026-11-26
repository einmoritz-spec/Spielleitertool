#!/usr/bin/env python3
"""Erweiterungsbücher: extrahierte Seitenbilder (extract_images.py -> /tmp/erwimg/<buch>) filtern und nach spire/img/erw/<buch>/ übernehmen.
Textkästen (blauviolette Kästen mit Text), Riss-Bänder und Papier-Streifen werden übersprungen. Schreibt plan/spire/erw/bilder-zuordnung.json
(Seite -> Kapitel nach den Seitenbereichen aus spire/js/data/erw/index.js). Aufruf: python3 -I plan/spire/erw_bilder.py"""
import os, re, json, glob, sys
from PIL import Image
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
TMP = "/tmp/erwimg"
OUT = os.path.join(ROOT, "spire/img/erw")
COVER = {"sin": ("sin_S001_01", "sp_s1"), "str": ("str_S-04_01", "sp_s2"), "cod": ("cod_S-01_01", "sp_z2")}

def stat(im):
    im = im.convert("RGB"); im.thumbnail((120, 120)); px = list(im.getdata()); n = len(px)
    slate = sum(1 for r, g, b in px if abs(r - 60) < 28 and abs(g - 60) < 28 and 70 < b < 125 and b - r > 14)
    pale = sum(1 for r, g, b in px if r > 200 and g > 205 and b > 215)
    white = sum(1 for r, g, b in px if r > 235 and g > 235 and b > 235)
    return slate / n, pale / n, white / n

def main():
    keep = {}
    for b in ["sin", "str", "bm", "cod", "skfs", "sop"]:
        os.makedirs(os.path.join(OUT, b), exist_ok=True)
        for f in sorted(glob.glob("%s/%s/*.webp" % (TMP, b))):
            name = os.path.basename(f)[:-5]
            m = re.match(r"%s_S(-?\d+)_(\d+)_(\d+)x(\d+)" % b, name)
            if not m: continue
            p, w, h = int(m.group(1)), int(m.group(3)), int(m.group(4))
            im = Image.open(f)
            sl, pale, white = stat(im)
            if b in COVER and name.startswith(COVER[b][0]):
                c = im.convert("RGB"); c.thumbnail((620, 900)); c.save(os.path.join(ROOT, "spire/img/cover/%s.webp" % COVER[b][1]), quality=82)
            if sl > 0.22 or pale > 0.45 or white > 0.5: continue
            if h < 300 and w > 900: continue
            if p < 1: continue          # Cover/Titel
            if w < 200 or h < 150: continue
            im = im.convert("RGB"); im.thumbnail((1100, 1500))
            dn = "%s_%03d_%s" % (b, p, m.group(2))
            im.save(os.path.join(OUT, b, dn + ".webp"), quality=80)
            keep.setdefault(b, []).append({"p": p, "src": "erw/%s/%s" % (b, dn), "w": im.width, "h": im.height})
    # Kapitelzuordnung
    idx = open(os.path.join(ROOT, "spire/js/data/erw/index.js"), encoding="utf-8").read()
    B = json.loads(idx[idx.index("["):idx.rindex("]") + 1])
    res = {}
    for bk in B:
        ch = sorted([k for k in bk["kap"] if k.get("p") is not None and not k.get("nur_link")], key=lambda k: k["p"])
        for im in keep.get(bk["id"], []):
            tgt = None
            for k in ch:
                if k["p"] <= im["p"] <= k["pe"]: tgt = k; break
            if not tgt:
                nxt = [k for k in ch if k["p"] > im["p"]]
                prv = [k for k in ch if k["pe"] < im["p"]]
                if nxt and nxt[0]["p"] - im["p"] <= 2: tgt = nxt[0]
                elif prv: tgt = prv[-1]
                elif nxt: tgt = nxt[0]
            if tgt:
                im["kap"] = tgt["id"]; res.setdefault(bk["id"], []).append(im)
    json.dump(res, open(os.path.join(ROOT, "plan/spire/erw/bilder-zuordnung.json"), "w"), ensure_ascii=False, indent=0)
    print({b: len(v) for b, v in res.items()})

main()
