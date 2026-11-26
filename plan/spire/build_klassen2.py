#!/usr/bin/env python3
"""Wandelt die Klassentexte der Quellenbücher (Sin, Strata, Black Magic) in Datendateien für spire/js/data/.
Klassen: gutter-cleric, mortician-executioner (Sin, sp_s1), inksmith, shadow-agent (Strata, sp_s2), blood-witch (Black Magic, sp_z4)
Extra-Fortschritte aus Black Magic (Grangou, Tiefer Imker, Dämonologe) und Okkulter Fallout -> extra-c.js
Aufruf: python3 -I plan/spire/build_klassen2.py   (aus dem Repo-Stamm)
Nutzt die Hilfsfunktionen aus build_klassen.py (unverändert)."""
import re, json, os, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import build_klassen as B
from build_klassen import Parser, ABIL, split_ability, add_text, strip_head, slug, js

ROOT = B.ROOT
DE = os.path.join(ROOT, "quellen/spire/de")
OUT = B.OUT

KLASSEN = [
    # seiten: beim Gutter Cleric steht die Gruppenüberschrift im Markdown am Seitenende -> Gruppe nach Seite (laut PDF)
    dict(id="gutter-cleric", f="sin/s01b-gutter-cleric", buch="sp_s1", herk="Sin",
         seiten={8: "niedrig", 9: "mittel", 10: "mittel", 11: "hoch"},
         sub={"niedrig": "Kleine Götter", "mittel": "Die verbotenen Glauben", "hoch": "Die älteren Götter"}),
    dict(id="mortician-executioner", f="sin/s01c-mortician-executioner", buch="sp_s1", herk="Sin"),
    dict(id="inksmith", f="str/t01-neue-klassen", buch="sp_s2", herk="Strata", von="# INKSMITH", bis="# SHADOW AGENT"),
    dict(id="shadow-agent", f="str/t01-neue-klassen", buch="sp_s2", herk="Strata", von="# SHADOW AGENT", bis=None, merge=True),
    dict(id="blood-witch", f="bm/b01-blood-witch", buch="sp_z4", herk="Black Magic"),
]
LABELS = {"WIDERSTÄNDE": "wid", "AUFFRISCHEN": "auff", "FERTIGKEITEN": "fert", "KLASSENFERTIGKEITEN": "fert", "DOMÄNEN": "dom"}
LBL = re.compile(r"^\*\*(WIDERSTÄNDE|AUFFRISCHEN|FERTIGKEITEN|KLASSENFERTIGKEITEN|DOMÄNEN|SC-BINDUNG|NSC-BINDUNG|AUSRÜSTUNG):\*\*\s*(.*)$")
MARKS = re.compile(r"^\*\*(\d\+? Markierungen?):\*\*\s*(.*)$")
GRPNAME = {"niedrig": "niedrig", "mittel": "mittel", "hoch": "hoch", "niedrige fortschritte": "niedrig", "mittlere fortschritte": "mittel", "hohe fortschritte": "hoch"}
ABSCHNITT = {"tarnungen": ("Tarnungen", "kfae"), "tarnungs-fallout": ("Tarnungs-Fallout", "fort"), "berüchtigte blood-witches": ("Berüchtigte Blood-Witches", "fort")}
UNTER = {"klein": "Klein", "groß": "Groß", "gross": "Groß", "leicht": "Leicht", "mittel": "Mittel", "schwer": "Schwer"}


def strip_bold_parens(x):
    """„(**W3, Kernschuss)**“ -> „(W3, Kernschuss)“"""
    x = re.sub(r"\*\*\(([^)]*)\)\*\*", r"(\1)", x)
    x = re.sub(r"\(\*\*([^)*]*)\)\*\*", r"(\1)", x)
    return x


def name_is_xxx(l):
    return l.startswith("**XXX")


def split_xxx(l):
    """Geschwärzte Fähigkeiten: der Flavour-Text ist mit fetten XXX-Teilen durchsetzt (Kursiv, Fett, Kursiv, …)."""
    m = ABIL.match(l)
    name = m.group(1).strip().rstrip(".:").strip()
    rest = m.group(2).strip()
    tag = None
    t = re.match(r"^\[([^\]]+)\]\s*(.*)$", rest)
    if t: tag, rest = t.group(1), t.group(2)
    tok = re.compile(r"\s*(\*\*[^*]+\*\*|\*[^*]+\*)")
    pos = 0
    while True:
        m2 = tok.match(rest, pos)
        if not m2: break
        pos = m2.end()
    fl = rest[:pos].replace("**", "\0").replace("*", "").replace("\0", "**").strip()
    return name, tag, fl, rest[pos:].strip()


def parse_klasse(cfg):
    text = open(os.path.join(DE, cfg["f"] + ".md")).read()
    if cfg.get("von"):
        i = text.index(cfg["von"])
        j = text.index(cfg["bis"]) if cfg.get("bis") else len(text)
        pre = [l for l in text[:i].split("\n") if B.MARK.match(l)]
        text = (pre[-1] + "\n" if pre else "") + text[i:j]
    P = Parser(text)
    K = {"id": cfg["id"], "t": "", "buch": cfg["buch"], "herk": cfg["herk"], "p": None, "zitat": "", "intro": [], "kern": {}, "bind": [], "ausr": [], "kfae": [],
         "fort": {"niedrig": [], "mittel": [], "hoch": []}, "boxen": [], "hinweis": {}, "fortIntro": {}}
    if cfg.get("sub"): K["fortSub"] = cfg["sub"]
    sec = None; grp = None; cur = None; box = None; pend = None; fr = False; ab = None; ug = None
    abschn = []
    K["abschn"] = abschn
    seiten = cfg.get("seiten")
    for l in P.iter():
        brk = P.after_break; P.after_break = False
        if box is not None and not l.startswith(">"): box = None
        if l.startswith(">"):
            c = l[1:].strip()
            if c.startswith("# "): continue
            if c.startswith("## "):
                if seiten and sec in ("fort", "ausr") and P.page in seiten: nach = seiten[P.page]
                elif sec == "fort" and grp: nach = grp
                else: nach = "kfae"
                box = {"h": strip_head(c), "b": [], "nach": nach, "p": P.page}
                K["boxen"].append(box)
            elif box is not None:
                box["b"].append(c)
            continue
        if l.startswith("# "):
            K["t"] = strip_head(l).title()
            if K["p"] is None: K["p"] = P.page
            sec = "kopf"; continue
        if l.startswith("## "):
            h = strip_head(l); hl = h.lower(); base = hl.split(":")[0].strip()
            if re.match(r"^\d+$", hl) or hl == "sin" or hl == K["t"].lower(): continue
            if hl == "kernmerkmale": sec = "kern"; ab = None
            elif hl == "bindungen": sec = "bind"
            elif hl == "ausrüstung": sec = "ausr"
            elif hl == "kernfähigkeiten": sec = "kfae"; grp = None; cur = None
            elif hl == "fortschritte": sec = "fort"; grp = None; cur = None; ab = None
            elif hl in ABSCHNITT:
                t, nach = ABSCHNITT[hl]
                ab = {"id": slug(t), "t": t, "p": P.page, "nach": nach, "intro": [], "gruppen": []}
                abschn.append(ab); sec = "abschn"; cur = None; ug = None
            elif sec == "abschn" and hl in UNTER:
                ug = {"h": UNTER[hl], "karten": []}; ab["gruppen"].append(ug); cur = None
            elif base in GRPNAME:
                sec = "fort"; cur = None
                if not seiten: grp = GRPNAME[base]
            else: print("!! unbekannte Überschrift", cfg["id"], h)
            continue
        m = LBL.match(l)
        if m and sec in ("kopf", "kern", "bind", "ausr"):
            lab, val = m.group(1), m.group(2)
            if lab == "AUSRÜSTUNG": sec = "ausr"; pend = None; continue
            if lab in ("SC-BINDUNG", "NSC-BINDUNG"):
                K["bind"].append("**" + lab.replace("-BINDUNG", "-Bindung") + ":** " + val); pend = None; sec = "bind"; continue
            if val == "": pend = LABELS[lab]
            else: K["kern"][LABELS[lab]] = val; pend = None
            continue
        if pend and re.match(r"^\*\*[^*]+\*\*$", l):
            K["kern"][pend] = l.strip("*"); pend = None; continue
        if sec == "kopf":
            if l.startswith("**Deine Start-Domänen"): K["kern"]["dom"] = l.strip("*"); continue
            if l.startswith("*") and not K["zitat"]: K["zitat"] = l.strip("*").strip()
            else: K["intro"].append(l)
            continue
        if sec == "kern":
            print("!! Kern-Zeile", cfg["id"], l[:60]); continue
        if sec == "bind":
            K["bind"].append(l[2:].strip() if l.startswith("• ") else l); continue
        if sec == "ausr":
            if ABIL.match(l) and not l.startswith("**•"):
                sec = "fort"   # Sin: die Fortschritte folgen direkt auf die Ausrüstung
            else:
                l2 = strip_bold_parens(l)
                if l2.startswith("• "): K["ausr"].append({"k": "pkt", "x": l2[2:].strip()})
                elif re.match(r"^\*[^*]+:\*$", l2): K["ausr"].append({"k": "lbl", "x": l2.strip("*")})
                elif l2.endswith(":") and len(l2) < 24: K["ausr"].append({"k": "lbl", "x": l2})
                else: K["ausr"].append({"k": "pkt", "x": l2})
                continue
        # --- Fähigkeiten, Karten, Texte ---
        if l.strip() == "FALSE ROBERT":
            fr = True; continue
        if fr:
            K["boxen"].append({"h": "False Robert", "b": [l], "nach": grp or "kfae", "p": P.page}); fr = False; continue
        gm = MARKS.match(l)
        if gm and cur is not None:
            if not cur["x"] or not (isinstance(cur["x"][-1], dict) and cur["x"][-1].get("t") == "dl"): cur["x"].append({"t": "dl", "x": []})
            cur["x"][-1]["x"].append([gm.group(1), gm.group(2)]); continue
        if l.startswith("**•**"):
            add_text(cur["x"], "• " + re.sub(r"^\*\*•\*\*\s*", "", l), False); continue
        if ABIL.match(l):
            name, tag, fl, rest = (split_xxx(l) if name_is_xxx(l) else split_ability(l))
            cur = {"t": name, "p": P.page}
            if tag: cur["tag"] = tag
            if fl: cur["fl"] = fl
            cur["x"] = [rest] if rest else []
            if sec == "abschn":
                if ug is None:
                    ug = {"h": "", "karten": []}; ab["gruppen"].append(ug)
                ug["karten"].append(cur)
            elif sec == "kfae" and grp is None and not (seiten and P.page in seiten):
                K["kfae"].append(cur)
            else:
                g = seiten[P.page] if seiten else grp
                K["fort"][g].append(cur)
            continue
        if sec == "abschn" and cur is None:
            ab["intro"].append(l); continue
        if cur is None:
            print("!! Text ohne Fähigkeit", cfg["id"], l[:60]); continue
        if cfg.get("merge") and brk and cur["x"] and isinstance(cur["x"][-1], str):
            cur["x"][-1] += " " + l
        else:
            add_text(cur["x"], l, brk)
    if not K["abschn"]: del K["abschn"]
    return K


def write_klasse(K):
    s = "/* The Spire – Klasse %s (aus quellen/spire/de/%s, erzeugt mit plan/spire/build_klassen2.py) */\n(window.SP_KLASSE = window.SP_KLASSE || []).push(%s);\n" % (K["t"], {"sp_s1": "sin", "sp_s2": "str", "sp_z4": "bm"}[K["buch"]], js("", K))
    open(os.path.join(OUT, "klasse-%s.js" % K["id"]), "w").write(s)


# ---------- Extra-Fortschritte und Okkulter Fallout aus Black Magic ----------
EXTRA = [("bm/b02-grangou", "grangou"), ("bm/b03-deep-apiarist", "tiefer-imker"), ("bm/b05-daemonologe", "daemonologe")]


def card_from(l, page):
    name, tag, fl, rest = split_ability(l)
    c = {"t": name.rstrip(",").strip(), "p": page}
    if tag: c["tag"] = tag
    if fl: c["fl"] = fl
    c["x"] = [rest] if rest else []
    return c


def parse_extra_bm(fname, wid):
    P = Parser(open(os.path.join(DE, fname + ".md")).read())
    W = None; grp = None; ab = None; mode = None; ug = None
    for l in P.iter():
        brk = P.after_break; P.after_break = False
        if l.startswith("# "):
            h = strip_head(l)
            if h.endswith(":"): continue
            W = {"id": wid, "t": h.title(), "p": P.page, "buch": "sp_z4", "vor": "", "auff": "", "ein": [], "info": [], "fort": {"niedrig": [], "mittel": [], "hoch": []}}
            continue
        if W is None: continue
        if l.startswith("## "):
            h = strip_head(l); hl = h.lower()
            if re.match(r"^\d+$", hl): continue
            if hl in ("niedrig", "mittel", "hoch"): grp = hl; ab = None; mode = "fort"
            elif hl == "kernfähigkeit": mode = "kern"; ab = None; W["kern"] = []
            elif hl.startswith("bemerkenswerte"):
                mode = "abschn"; ab = None
                W["abschn"] = [{"id": slug(h), "t": "Bemerkenswerte Königinnen des Ordens", "p": P.page, "intro": [], "gruppen": [{"h": "", "karten": []}]}]
            else: print("!! Extra: Überschrift", wid, h)
            continue
        m = re.match(r"^\*\*(Voraussetzung|Auffrischen):\*\*\s*(.*)$", l)
        if m and mode is None:
            W["vor" if m.group(1) == "Voraussetzung" else "auff"] = m.group(2); continue
        if mode is None:
            (W["info"] if (W["vor"] or W["auff"]) else W["ein"]).append(l); continue
        if mode == "abschn":
            A = W["abschn"][0]
            if ABIL.match(l): ab = card_from(l, P.page); A["gruppen"][0]["karten"].append(ab)
            elif ab is None: A["intro"].append(l)
            else: add_text(ab["x"], l, brk)
            continue
        if ABIL.match(l):
            ab = card_from(l, P.page)
            (W["kern"] if mode == "kern" else W["fort"][grp]).append(ab)
        elif ab is not None:
            add_text(ab["x"], l, brk)
        else:
            print("!! Extra: Text ohne Fähigkeit", wid, l[:60])
    return W


def parse_fallout():
    P = Parser(open(os.path.join(DE, "bm/b06-okkulter-fallout.md")).read())
    F = {"id": "okkulter-fallout", "t": "", "p": None, "buch": "sp_z4", "intro": [], "gruppen": []}
    ug = None; ab = None; pend = None
    for l in P.iter():
        brk = P.after_break; P.after_break = False
        if l.startswith("# "):
            F["t"] = strip_head(l).title(); F["p"] = P.page; continue
        if not F["t"]: continue
        if l.startswith("## "):
            h = strip_head(l).lower()
            if re.match(r"^\d+$", h): continue
            ug = {"h": UNTER[h], "karten": []}; F["gruppen"].append(ug); ab = None; continue
        if ug is None: F["intro"].append(l); continue
        if ABIL.match(l):
            ab = card_from(l, P.page); ug["karten"].append(ab); continue
        if ab is None: print("!! Fallout: Text ohne Karte", l[:60]); continue
        if l in ("Widerstand:", "Schwierigkeit:", "Ausrüstung:"):
            pend = l[:-1]; continue
        if pend:
            if not ab["x"] or not (isinstance(ab["x"][-1], dict) and ab["x"][-1].get("t") == "dl"): ab["x"].append({"t": "dl", "x": []})
            if ab["x"][-1]["x"] and ab["x"][-1]["x"][-1][0] == pend:
                ab["x"][-1]["x"][-1][1] += " " + l
            else:
                ab["x"][-1]["x"].append([pend, l])
            if pend == "Ausrüstung": pass
            pend = "+" + pend if False else None
            continue
        if ab["x"] and isinstance(ab["x"][-1], dict) and ab["x"][-1].get("t") == "dl" and l.startswith("("):
            ab["x"][-1]["x"][-1][1] += " " + l; continue
        add_text(ab["x"], l, brk)
    # Zahlenzeilen ("4", "0") filtert der Parser als Seitenzahlen weg: Profilwerte des Nadelzahn-Kinds aus dem Rohtext holen
    raw = open(os.path.join(DE, "bm/b06-okkulter-fallout.md")).read()
    m = re.search(r"Widerstand:\n(\d+)\nSchwierigkeit:\n(\d+)\n", raw)
    for g in F["gruppen"]:
        for c in g["karten"]:
            if c["t"] == "NADELZAHN-KIND" and m:
                dl = c["x"][-1]["x"]
                dl[:0] = [["Widerstand", m.group(1)], ["Schwierigkeit", m.group(2)]]
    return F


def main():
    for cfg in KLASSEN:
        K = parse_klasse(cfg)
        write_klasse(K)
        print(K["id"], K["t"], "p", K["p"], "kern", len(K["kfae"]), [len(K["fort"][g]) for g in ("niedrig", "mittel", "hoch")], sorted(K["kern"]),
              "bind", len(K["bind"]), "ausr", len(K["ausr"]), "boxen", [(b["h"][:20], b["nach"]) for b in K["boxen"]],
              "abschn", [(a["id"], [len(g["karten"]) for g in a["gruppen"]]) for a in K.get("abschn", [])])
    wege = []
    for f, wid in EXTRA:
        W = parse_extra_bm(f, wid)
        wege.append(W)
        print("extra", wid, W["t"], W["p"], [len(W["fort"][g]) for g in ("niedrig", "mittel", "hoch")], "vor" if W["vor"] else "-", "auff" if W["auff"] else "-", len(W["ein"]), len(W["info"]), "kern" in W, "abschn" in W)
    F = parse_fallout()
    print("fallout", F["t"], F["p"], len(F["intro"]), [(g["h"], len(g["karten"])) for g in F["gruppen"]])
    s = ("/* The Spire – Extra-Fortschritte aus Black Magic (Grangou, Tiefer Imker, Dämonologe) und Okkulter Fallout (BM S. 8–21), erzeugt mit plan/spire/build_klassen2.py */\n"
         "window.SP_EXTRA = window.SP_EXTRA || {wege:[], boxen:[], intro:[]};\nSP_EXTRA.wege = SP_EXTRA.wege.concat(%s);\nSP_EXTRA.fallout = %s;\n" % (js("", wege), js("", F)))
    open(os.path.join(OUT, "extra-c.js"), "w").write(s)


if __name__ == "__main__":
    main()
