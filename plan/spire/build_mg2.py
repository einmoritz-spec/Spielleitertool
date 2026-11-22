#!/usr/bin/env python3
"""Magister's Guide, Teil II (g01, g02a-d, g04) -> spire/js/data/mg-system.js
Aufruf: python3 plan/spire/build_mg2.py   (aus dem Repo-Stamm)"""
import re, json, os, sys
sys.path.insert(0, os.path.dirname(__file__))
from build_klassen import ROOT, Parser, ABIL, split_ability, strip_head, add_text, slug, MARK

GM = os.path.join(ROOT, "quellen/spire/de/gm")
OUT = os.path.join(ROOT, "spire/js/data/mg-system.js")
KOPF = re.compile(r"^(Leitfaden des Magisters|Neue Systeme.*|Essays|Essays und Ratschläge|Mehr Spire gibt es.*)$")
KARTE = re.compile(r"^\*\*[^*]+?[.:]\*\*")

# Kapitel: (id, Titel, Gruppe, Datei, Seitenbereich)
KAP = [
    ("einleitung", "Einleitung", "Leitfaden", "g01-einleitung", (4, 4)),
    ("freiheit", "Freiheit", "Neue Systeme", "g02a-freiheit", (5, 7)),
    ("beats", "Fortschritts-Beats", "Neue Systeme", "g02b-fortschritt-beats", (8, 9)),
    ("erwerbungen", "Erwerbungen", "Neue Systeme", "g02c-erwerbungen", (10, 12)),
    ("unterschlupf", "Unterschlupf", "Neue Systeme", "g02d-unterschlupf", (13, 16)),
    ("wesentliches", "Nur das Wesentliche", "Essays und Ratschläge", "g04-essays", (49, 49)),
    ("vorbereitung", "Vorbereitung auf eine Partie Spire", "Essays und Ratschläge", "g04-essays", (50, 52)),
    ("wuerfeln", "Wann würfeln und wann nicht", "Essays und Ratschläge", "g04-essays", (53, 54)),
    ("kreativ", "Kreativer Einsatz von Fertigkeiten", "Essays und Ratschläge", "g04-essays", (55, 55)),
]


def lies(datei, von, bis):
    """Zeilen (Text, Seite, Umbruch) einer Datei für einen Seitenbereich."""
    P = Parser(open(os.path.join(GM, datei + ".md")).read())
    out = []
    for l in P.iter():
        brk = P.after_break; P.after_break = False
        if P.page is None or not (von <= P.page <= bis):
            continue
        out.append((l, P.page, brk))
    return out


def kapitel(kid, titel, grp, datei, rng):
    zeilen = lies(datei, *rng)
    B = []; cards = None; cur = None; vor = kid == "wesentliches"
    sub4 = None
    merk = None
    for l, pg, brk in zeilen:
        if l.startswith("> "):
            continue
        if l.startswith("#"):
            h = strip_head(l)
            if KOPF.match(h) or h.upper() in ("NEUE SYSTEME", "ESSAYS UND RATSCHLÄGE") or h.upper() == titel.upper():
                continue
            if h.upper() in ("FORTSCHRITTS-BEATS", "ERWERBUNGEN", "VORBEREITUNG AUF EINE PARTIE SPIRE", "WANN WÜRFELN UND WANN NICHT", "KREATIVER EINSATZ VON FERTIGKEITEN", "UNTERSCHLUPF", "FREIHEIT", "NUR DAS WESENTLICHE", "EINLEITUNG"):
                continue
            cards = None; cur = None; sub4 = None
            tit = h.rstrip(":")
            nlev = len(l) - len(l.lstrip("#"))
            if tit.upper() == "EIN WICHTIGES KONZEPT":
                merk = "Ein wichtiges Konzept"; continue
            if merk and tit.upper() == "SPIRE VERÄNDERT SICH":
                tit = merk + ": Spire verändert sich"; merk = None
            else:
                tit = tit.capitalize() if tit.isupper() else tit
            tit = tit.replace("Spire", "Spire").replace("Würfeln sie?", "Würfeln Sie?").replace("Ein leitfaden", "Ein Leitfaden")
            if nlev >= 4:
                sub4 = {"t": tit.upper(), "x": [], "p": pg}
                B.append({"t": "kk", "x": [sub4], "n": 1}) if not (B and isinstance(B[-1], dict) and B[-1].get("t") == "kk" and B[-1].get("n") == 1) else B[-1]["x"].append(sub4)
            else:
                B.append({"t": "h3" if nlev <= 2 else "h4", "x": tit, "p": pg})
            continue
        if sub4 is not None:
            sub4["x"].append(l.strip()) if not sub4["x"] or sub4["x"][-1] != l else None
            sub4.setdefault("_ul", True)
            continue
        if KARTE.match(l) and not l.startswith("***"):
            name, tag, fl, rest = split_ability(l)
            cur = {"t": name, "p": pg}
            if tag: cur["tag"] = tag
            if fl: cur["fl"] = fl
            cur["x"] = [rest] if rest else []
            if cards is None or B[-1] is not cards:
                cards = {"t": "kk", "x": []}; B.append(cards)
            cards["x"].append(cur)
            continue
        if cur is not None and brk and cards is not None and B[-1] is cards:
            add_text(cur["x"], l, brk); continue
        cur = None
        if l.startswith("***Beispiel"):
            B.append({"t": "bsp", "x": l.replace("***Beispiel:***", "**Beispiel:**")}); continue
        if l.startswith("*") and not l.startswith("**") and l.endswith("*"):
            if vor:
                if B and isinstance(B[-1], dict) and B[-1].get("t") == "violett": B[-1]["b"].append(l)
                else: B.append({"t": "violett", "b": [l]})
            else:
                B.append({"t": "bsp", "x": l})
            continue
        add_text(B, l, brk) if False else None
        if l.startswith("• "):
            x = l[2:].strip()
            if B and isinstance(B[-1], dict) and B[-1].get("t") == "ul": B[-1]["x"].append(x)
            else: B.append({"t": "ul", "x": [x]})
        elif brk and B and isinstance(B[-1], str) and (not re.search(r"[.!?:“”)\]*]\s*$", B[-1]) or l[:1].islower()):
            B[-1] += " " + l
        elif brk and B and isinstance(B[-1], dict) and B[-1].get("t") == "ul" and l[:1].islower():
            B[-1]["x"][-1] += " " + l
        elif B and isinstance(B[-1], dict) and B[-1].get("t") == "bsp" and brk and l[:1].islower():
            B[-1]["x"] += " " + l
        else:
            B.append(l)
    # #### -Listen (Scheitern interessant machen): Zeilen als Listenpunkte
    for b in B:
        if isinstance(b, dict) and b.get("t") == "kk":
            for c in b["x"]:
                if c.pop("_ul", None): c["x"] = [{"t": "ul", "x": c["x"]}]
    return {"id": kid, "t": titel, "grp": grp, "p": rng[0], "b": B}


def main():
    K = [kapitel(*k) for k in KAP]
    s = "/* The Spire – Magister's Guide: Neue Systeme und Essays (aus quellen/spire/de/gm, erzeugt mit plan/spire/build_mg2.py) */\nwindow.SP_MGS = %s;\n" % json.dumps(K, ensure_ascii=False, indent=1)
    open(OUT, "w").write(s)
    for k in K:
        print(k["id"], len(k["b"]), [b["t"] if isinstance(b, dict) else "p" for b in k["b"]][:40])

if __name__ == "__main__":
    main()
