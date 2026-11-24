#!/usr/bin/env python3
"""Welt (cmf S. 1–8), Spielleitung (cmf S. 173–182), Spire in Kürze (qs S. 1–17) -> spire/js/data/{welt,spielleitung,kurz}.js
Aufruf: python3 plan/spire/build_text.py   (aus dem Repo-Stamm)"""
import re, json, os, sys
sys.path.insert(0, os.path.dirname(__file__))
from build_klassen import ROOT, Parser, strip_head

DE = os.path.join(ROOT, "quellen/spire/de")
OUT = os.path.join(ROOT, "spire/js/data")
KLEIN = {"für", "die", "der", "das", "und", "zu", "von", "vs", "ein", "eine", "wie", "man", "sie", "des", "dem", "den", "im", "in", "auf", "mit", "nicht", "ist", "an", "oder", "als", "bei", "zum", "zur"}
BILD = {("welt", 4): "kapitel/welt-S004", ("welt", 6): "kapitel/welt-S006", ("spielleitung", 180): "kapitel/spielleitung-S180"}
# bereich: (Datei, Buch, Seitenbereich, Kapitelteilung[(id, Titel, ab Seite)])
BEREICHE = {
    "welt": ("cmf/k00-willkommen", "cmf", (1, 2), [("willkommen", "Willkommen in Spire", 1)],
             "cmf/k01-welt", (3, 8), [("welt", "Die Welt von Spire", 3)]),
    "spielleitung": ("cmf/k11-spielleitung", "cmf", (173, 182), [("grundlagen", "Das Spiel leiten", 173), ("ratschlaege", "Allgemeine Ratschläge für die SL", 999, "ALLGEMEINE RATSCHL"), ("revolution", "Die Revolution", 999, "DIE REVOLUTION"), ("schwierigkeit", "Schwierigkeit und wie man sie anwendet", 999, "SCHWIERIGKEIT UND WIE"), ("schurke", "Ein guter Schurke", 999, "EIN GUTER SCHURKE"), ("magie", "Andere Fraktionen, Magie und das Ministerium", 999, "ANDERE FRAKTIONEN"), ("schurkerei", "Schurkerei", 999, "SCHURKEREI")], None, None, None),
    "kurz": ("qs/q01-regeln-kurz", "qs", (1, 17), [("worum", "Worum geht es im Spire-Rollenspiel?", 1), ("schnellstart", "Spire-Schnellstart", 4), ("kernmechanik", "Kernmechanik", 6), ("stress", "Stress", 8), ("fallout", "Fallout", 10), ("fertigkeiten", "Fertigkeiten und Domänen", 12), ("ausruestung", "Ausrüstung und Bindungen", 14)], None, None, None),
}


def titel(h):
    h = h.rstrip(":").strip()
    if not h.isupper():
        return h
    w = h.lower().split()
    return " ".join(x if (i and x in KLEIN) else (x.upper() if x == "sl" else x.capitalize()) for i, x in enumerate(w))


def zeilen(datei, rng):
    P = Parser(open(os.path.join(DE, datei + ".md")).read())
    out = []
    for l in P.iter():
        brk = P.after_break; P.after_break = False
        if P.page is None or not (rng[0] <= P.page <= rng[1]):
            continue
        if re.match(r"^[+\d\s]*$", l.strip()):
            continue
        if datei.startswith("qs/") and P.page == 11:
            continue
        out.append((l, P.page, brk))
    return out


def merge_heads(Z):
    """Mehrzeilige Überschriften (##/> ##) zu einer verbinden."""
    out = []
    for l, p, b in Z:
        m = re.match(r"^(> )?(#{2,4}) (.*)$", l)
        if m and out:
            pm = re.match(r"^(> )?(#{2,4}) (.*)$", out[-1][0])
            if pm and pm.group(1) == m.group(1) and pm.group(2) == m.group(2):
                pt = strip_head(pm.group(3))
                if pt.endswith(":") or pt.endswith(" vs") or pt.endswith(" WIE") or m.group(1):
                    out[-1] = ((m.group(1) or "") + m.group(2) + " " + pt + " " + m.group(3), out[-1][1], out[-1][2]); continue
        out.append((l, p, b))
    return out


def addp(B, l, brk):
    if l.startswith("• "):
        x = l[2:].strip()
        if B and isinstance(B[-1], dict) and B[-1].get("t") == "ul": B[-1]["x"].append(x)
        else: B.append({"t": "ul", "x": [x]})
    elif brk and B and isinstance(B[-1], str) and (not re.search(r"[.!?:“”)\]*]\s*$", B[-1]) or l[:1].islower()):
        B[-1] += " " + l
    elif brk and B and isinstance(B[-1], dict) and B[-1].get("t") == "ul" and l[:1].islower():
        B[-1]["x"][-1] += " " + l
    else:
        B.append(l)


def kapitel(bid, Z, kaps, qs):
    K = []; B = None; box = None; sbuch = "qs" if qs else "cmf"
    seite = None
    for l, p, brk in merge_heads(Z):
        mh = re.match(r"^## (.*)$", l)
        if mh:
            hu = strip_head(l).upper()
            for kk in kaps:
                if len(kk) > 3 and hu.startswith(kk[3]) and kk[0] not in [k["id"] for k in K]:
                    K.append({"id": kk[0], "t": kk[1], "p": p, "b": []}); B = K[-1]["b"]; box = None; l = None
                    break
            if l is None: continue
        for kk in kaps:
            i, t, ab = kk[0], kk[1], kk[2]
            if p >= ab and (not K or K[-1]["id"] != i) and i not in [k["id"] for k in K]:
                K.append({"id": i, "t": t, "p": p, "b": []}); B = K[-1]["b"]; box = None
        if l is not None and (bid, p) in BILD and BILD[(bid, p)] and (not seite or seite != p):
            B.append({"t": "img", "src": BILD[(bid, p)]})
        seite = p
        if l.startswith("> "):
            c = l[2:].strip()
            if c.startswith("#"):
                h = titel(strip_head(c)); box = {"t": "schwarz", "h": h, "b": []}; B.append(box)
            elif box is not None:
                addp(box["b"], c, False)
            continue
        box = None
        if l.startswith("####") and qs: continue
        m = re.match(r"^(#{1,4}) (.*)$", l)
        if m:
            h = strip_head(l)
            if m.group(1) == "#":
                continue
            if re.match(r"^(Spire-Schnellstart|Spire in Kürze|Leitfaden des Magisters)$", h, re.I): continue
            if h.upper().startswith("IMPRESSUM"): B.append({"t": "h3", "x": "Impressum", "p": p}); continue
            B.append({"t": "h3" if len(m.group(1)) == 2 else "h4", "x": titel(h), "p": p}); continue
        addp(B, l, brk)
    return K


def main():
    for bid, spec in BEREICHE.items():
        datei, buch, rng, kaps, d2, r2, k2 = spec
        Z = zeilen(datei, rng); K = kapitel(bid, Z, kaps, buch == "qs")
        if d2:
            Z2 = zeilen(d2, r2); K += kapitel(bid, Z2, k2, False)
        for k in K: k["buch"] = buch
        if bid == "kurz":  # QS S. 7 „Regeln in Kürze“ ist eine Grafik: als eigener Baustein nachgebaut (spire/js/regelgrafik.js)
            for k in K:
                ix = [n for n, b in enumerate(k["b"]) if isinstance(b, dict) and b.get("x") == "Regeln in Kürze"]
                if ix: k["b"] = k["b"][:ix[0] + 1] + [{"t": "regelgrafik"}]
        s = "/* The Spire – %s (aus quellen/spire/de, erzeugt mit plan/spire/build_text.py) */\nwindow.SP_TEXT = window.SP_TEXT || {};\nSP_TEXT[%s] = %s;\n" % (bid, json.dumps(bid), json.dumps(K, ensure_ascii=False, indent=1))
        open(os.path.join(OUT, bid + ".js"), "w").write(s)
        for k in K: print(bid, k["id"], k["p"], len(k["b"]), [b["t"] if isinstance(b, dict) else "p" for b in k["b"]][:25])

if __name__ == "__main__":
    main()
