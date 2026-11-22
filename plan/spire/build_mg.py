#!/usr/bin/env python3
"""Magister's Guide, Klassen-Zusatz (MG S. 17–48): quellen/spire/de/gm/g03 -> spire/js/data/mg-<id>.js + gegner-mg.js"""
import re, json, os, sys
sys.path.insert(0, os.path.dirname(__file__))
from build_klassen import Parser, ABIL, split_ability, add_text, strip_head, slug, ROOT, OUT, js

SRC = os.path.join(ROOT, "quellen/spire/de/gm/g03-klassen-zusatz.md")
NAMES = {"AZURITE": "azurite", "BOUND": "bound", "BLOOD-WITCH": "blood-witch", "CARRION-PRIEST": "carrion-priest", "FIREBRAND": "firebrand",
         "GUTTER CLERIC": "gutter-cleric", "IDOL": "idol", "INKSMITH": "inksmith", "KNIGHT": "knight", "LAJHAN": "lajhan", "MASKED": "masked",
         "MIDWIFE": "midwife", "MORTICIAN EXECUTIONER": "mortician-executioner", "SHADOW AGENT": "shadow-agent", "VERMISSIAN SAGE": "vermissian-sage"}
TAGS = set("Präzise|Sturm|Blutgebunden|Gebunden|Brutal|Getarnt|Verbergbar|Leiter|Gefährlich|Defensiv|Verheerend|Doppelläufig|Extreme Reichweite|Schwer|Unerbittlich|Meisterstück|Einweg|Parierend|Durchschlagend|Kernschuss|Fernkampf|Nachladen|Vernarbend|Betäubend|Überraschend|Ermüdend|Unzuverlässig".split("|"))


def tag_ok(p):
    return bool(re.match(r"^(Anhaltend|Streuung) W\d+$", p) or p in TAGS or re.match(r"^Rüstung \d+$", p))


def split_top(s):
    out, d, cur = [], 0, ""
    for i, c in enumerate(s):
        if c == "(": d += 1
        if c == ")": d -= 1
        if c == "," and d == 0 and s[i + 1:i + 2] == " ":
            out.append(cur); cur = ""; continue
        cur += c
    out.append(cur); return [x.strip() for x in out if x.strip()]


def ausr_parse(s):
    res = []
    for i, piece in enumerate(split_top(s)):
        if i: res.append(", ")
        m = re.match(r"^(.*?)\s*\(([^()]*)\)\s*(.*)$", piece)
        ok = False
        if m:
            parts = [x.strip() for x in m.group(2).split(",")]
            dmg = None; tags = []
            ok = True
            for p in parts:
                p2 = p.replace("Schaden ", "")
                if re.match(r"^W\d+$", p2) and dmg is None: dmg = p2
                elif tag_ok(p2): tags.append(p2)
                else: ok = False
            if ok:
                o = {"x": m.group(1)}
                if dmg: o["dmg"] = dmg
                if tags: o["tags"] = tags
                res.append(o)
                if m.group(3): res.append(m.group(3))
        if not ok: res.append(piece)
    return res


def parse():
    P = Parser(open(SRC).read())
    classes = []; C = None; sec = None; cur = None; box = None; geg = None; fld = None
    new = lambda: {"p": None, "intro": [], "faehig": [], "ausr": [], "bes": [], "gegner": [], "fallout": [], "nuetz": []}
    for l in P.iter():
        brk = P.after_break; P.after_break = False
        if l.startswith("> "):
            c = l[2:].strip()
            if c.startswith("## "): box = "nuetz"
            elif box == "nuetz" and C is not None: C["nuetz"].append(c.strip("*").strip())
            continue
        box = None
        if re.match(r"^#{1,4} ", l):
            h = strip_head(l); hl = h.lower().replace("’", "'"); lv = len(l.split(" ")[0])
            if lv == 2 and hl == "magister's guide":
                C = new(); C["p"] = P.page; classes.append(C); sec = "intro"; cur = geg = None; continue
            if lv == 2 and hl in ("zusatzmaterial", "additional material"): continue
            if lv == 1 and h in NAMES:
                if C is None or C.get("id"):
                    C = new(); C["p"] = P.page; classes.append(C)
                C["id"] = NAMES[h]; C["t"] = h.title(); sec = "intro"; cur = geg = None; continue
            if C is None or lv == 1: continue
            if lv <= 3 and sec == "gegner" and hl not in ("fallout",) and lv == 3:
                geg = {"t": h.title(), "ein": [], "p": P.page, "f": {}}; C["gegner"].append(geg); fld = None; continue
            if lv == 4:
                if geg is None or geg["t"] != h.title():
                    geg = {"t": h.title(), "ein": [], "p": P.page, "f": {}}; C["gegner"].append(geg)
                fld = None; continue
            cur = None
            if hl == "fähigkeiten": sec = "faehig"
            elif hl == "ausrüstung": sec = "ausr"
            elif hl in ("besondere ausrüstung", "spezialausrüstung"): sec = "bes"; C["besT"] = h.title()
            elif hl == "gegenspieler": sec = "gegner"; geg = None
            elif hl == "fallout": sec = "fallout"
            else: print("!! Überschrift", h)
            continue
        if C is None: continue
        if sec == "intro": C["intro"].append(l); continue
        if sec == "gegner":
            m = re.match(r"^\*\*(Namen|Beschreibung|Schwierigkeit|Widerstand|Ausrüstung|Besonderes):?\*\*:?\s*(.*)$", l)
            if m and geg is not None:
                fld = m.group(1); geg["f"][fld] = [m.group(2)] if m.group(2) else []
            elif geg is not None and fld: geg["f"][fld].append(l)
            elif geg is not None: geg["ein"].append(l)
            else: print("!! Gegner-Text", C.get("id"), l[:50])
            continue
        if ABIL.match(l) and sec in ("faehig", "ausr", "bes", "fallout"):
            name, tag, fl, rest = split_ability(l)
            cur = {"t": name, "p": P.page}
            if tag: cur["tag"] = tag
            if fl: cur["fl"] = fl
            cur["x"] = [rest] if rest else []
            C[sec].append(cur); continue
        if cur is not None and sec in ("faehig", "ausr", "bes", "fallout"): add_text(cur["x"], l, brk)
        else: print("!! Text ohne Zuordnung", C.get("id"), sec, l[:60])
    return [c for c in classes if c.get("id")]


def gegner_obj(g, C):
    f = g["f"]; j = lambda k: " ".join(f.get(k, [])).strip()
    sch = j("Schwierigkeit"); wid = j("Widerstand")
    mk = re.match(r"^(\d+)", sch); mw = re.match(r"^(\d+)", wid)
    o = {"id": "mg-" + slug(g["t"]), "t": g["t"], "buch": "gm", "p": g["p"], "ort": C["t"], "ziel": "nach/klassen/" + C["id"] + "/mg"}
    if g["ein"]: o["einl"] = "\n".join(g["ein"])
    o["namen"] = [x.strip() for x in j("Namen").split(",") if x.strip()]
    o["beschr"] = [x.strip().rstrip(".") for x in re.split(r";\s*", j("Beschreibung")) if x.strip()]
    o["schw"] = {"k": mk.group(1) if mk else "·", "x": sch}
    o["wid"] = {"werte": [int(mw.group(1))] if mw else [], "x": wid}
    o["ausr"] = ausr_parse(j("Ausrüstung"))
    if j("Besonderes"): o["bes"] = "\n".join(f["Besonderes"])
    return o


def main():
    G = []
    for C in parse():
        gs = [gegner_obj(g, C) for g in C["gegner"]]
        G += gs
        C["gegner"] = [x["id"] for x in gs]
        s = "/* The Spire – Magister's Guide, Zusatz zur Klasse %s (MG S. %s), erzeugt mit plan/spire/build_mg.py */\n(window.SP_MG = window.SP_MG || {})[%s] = %s;\n" % (C["t"], C["p"], json.dumps(C["id"]), js("", C))
        open(os.path.join(OUT, "mg-%s.js" % C["id"]), "w").write(s)
        print(C["id"], C["p"], "fä", len(C["faehig"]), "aus", len(C["ausr"]), "bes", len(C["bes"]), "geg", len(C["gegner"]), "fall", len(C["fallout"]), "nütz", len(C["nuetz"]), "intro", len(C["intro"]))
    s = "/* The Spire – Gegner aus dem Magister's Guide (Klassen-Zusatz), erzeugt mit plan/spire/build_mg.py. Format wie gegner-okkult.js. */\nwindow.SP_GEGNER = window.SP_GEGNER || [];\nSP_GEGNER.push.apply(SP_GEGNER, %s);\n" % js("", G)
    open(os.path.join(OUT, "gegner-mg.js"), "w").write(s)


if __name__ == "__main__":
    main()
