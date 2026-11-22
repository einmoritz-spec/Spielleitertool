#!/usr/bin/env python3
"""Wandelt die deutschen Klassentexte (quellen/spire/de/cmf/k06, k07*, k08) in Datendateien für spire/js/data/.
Aufruf: python3 plan/spire/build_klassen.py   (aus dem Repo-Stamm)"""
import re, json, os, sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
DE = os.path.join(ROOT, "quellen/spire/de/cmf")
OUT = os.path.join(ROOT, "spire/js/data")

KLASSEN = [("azurite", "k07a-azurite"), ("bound", "k07b-bound"), ("carrion-priest", "k07c-carrion-priest"),
           ("firebrand", "k07d-firebrand"), ("idol", "k07e-idol"), ("knight", "k07f-knight"), ("lajhan", "k07g-lajhan"),
           ("masked", "k07h-masked"), ("midwife", "k07i-midwife"), ("vermissian-sage", "k07j-vermissian-sage")]

MARK = re.compile(r"^<!-- S\. (\d+) \(PDF (\d+)\) -->$")
ABIL = re.compile(r"^\*\*([^*]+?)\*\*(.*)$")
TERM = re.compile(r"[.!?:“”)\]]\s*$|[.!?:“”)]\*+\s*$")


def slug(s):
    s = s.lower()
    for a, b in (("ä", "ae"), ("ö", "oe"), ("ü", "ue"), ("ß", "ss")):
        s = s.replace(a, b)
    return re.sub(r"[^a-z0-9]+", "-", s).strip("-")


def strip_head(l):
    return re.sub(r"\s*\{farbe=#[0-9a-fA-F]+\}\s*$", "", l.lstrip("#").strip())


def split_ability(l):
    """'**NAME.** [Tag] *Flavour.* Text' -> (name, tag, flavour, rest)"""
    m = ABIL.match(l)
    name = m.group(1).strip().rstrip(".:").strip()
    rest = m.group(2).strip()
    tag = None
    t = re.match(r"^\[([^\]]+)\]\s*(.*)$", rest)
    if t:
        tag, rest = t.group(1), t.group(2)
    fl = None
    f = re.match(r"^\*([^*].*?)\*(?=\s|$)\s*(.*)$", rest)
    if f:
        fl, rest = f.group(1).strip(), f.group(2).strip()
    return name, tag, fl, rest


class Parser:
    """Liest Markdown zeilenweise; verwaltet Seite, Fortsetzungen nach Seitenwechsel, Kästen."""

    def __init__(self, text):
        self.lines = [l.rstrip() for l in text.split("\n")]
        self.page = None
        self.after_break = False

    def iter(self):
        for l in self.lines:
            m = MARK.match(l)
            if m:
                self.page = int(m.group(1)); self.after_break = True; continue
            if l.strip() == "" or re.match(r"^\d+$", l.strip()) or l.startswith("<<"):
                continue
            yield l


def add_text(body, line, brk):
    """Fügt eine Textzeile (Absatz oder Listenpunkt) an den Körper an; verbindet Fortsetzungen nach Seitenwechsel."""
    if line.startswith("• "):
        x = line[2:].strip()
        if body and isinstance(body[-1], dict) and body[-1].get("t") == "ul":
            body[-1]["x"].append(x)
        else:
            body.append({"t": "ul", "x": [x]})
        return
    if brk and body and isinstance(body[-1], str):
        prev = body[-1]
        if not TERM.search(prev) or line[:1].islower():
            body[-1] = prev + " " + line
            return
    if brk and body and isinstance(body[-1], dict) and body[-1].get("t") == "ul" and line[:1].islower():
        body[-1]["x"][-1] += " " + line
        return
    body.append(line)


def parse_group_lines(P, lines_iter, stop):
    pass


def parse_klasse(kid, fname):
    P = Parser(open(os.path.join(DE, fname + ".md")).read())
    K = {"id": kid, "p": None, "zitat": "", "intro": [], "kern": {}, "bind": [], "ausr": [], "kfae": [], "fort": {"niedrig": [], "mittel": [], "hoch": []}, "boxen": [], "hinweis": {}, "fortIntro": {}}
    sec = "kopf"; grp = None; cur = None; box = None
    for l in P.iter():
        brk = P.after_break; P.after_break = False
        if K["p"] is None and P.page: K["p"] = P.page
        if box is not None and not l.startswith(">"):
            box = None
        if l.startswith("> "):
            c = l[2:].strip()
            if c.startswith("## "):
                box = {"h": strip_head(c), "b": [], "nach": grp or sec}
                K["boxen"].append(box)
            elif box is not None:
                box["b"].append(c)
            continue
        if l.startswith("# "):
            K["t"] = strip_head(l).title().replace("Vermissian Sage", "Vermissian Sage"); continue
        if l.startswith("## "):
            h = strip_head(l); hl = h.lower()
            if hl == "kernmerkmale": sec = "kern"
            elif hl == "bindungen": sec = "bind"
            elif hl == "ausrüstung": sec = "ausr"
            elif hl == "kernfähigkeiten": sec = "kfae"; grp = None
            elif hl == "fortschritte": sec = "fort"
            elif hl in ("niedrig", "mittel", "hoch"): sec = "fort"; grp = hl
            elif hl.startswith("die häuser"): pass
            else: print("!! unbekannte Überschrift", kid, h)
            cur = None
            continue
        if sec == "kopf":
            if l.startswith("*") and not K["zitat"]:
                K["zitat"] = l.strip("*").strip()
            else:
                K["intro"].append(l)
        elif sec == "kern":
            m = re.match(r"^\*\*(WIDERSTÄNDE|AUFFRISCHEN|FERTIGKEITEN|KLASSENFERTIGKEITEN|DOMÄNEN):\*\*\s*(.*)$", l)
            if m: K["kern"][{"WIDERSTÄNDE": "wid", "AUFFRISCHEN": "auff", "FERTIGKEITEN": "fert", "KLASSENFERTIGKEITEN": "fert", "DOMÄNEN": "dom"}[m.group(1)]] = m.group(2)
            else: print("!! Kern-Zeile", kid, l[:60])
        elif sec == "bind":
            K["bind"].append(l[2:].strip() if l.startswith("• ") else l)
        elif sec == "ausr":
            if l.startswith("• "): K["ausr"].append({"k": "pkt", "x": l[2:].strip()})
            elif l.startswith("*• "):
                m = re.match(r"^\*• (.+?)\*\s*(.*)$", l)
                K["ausr"].append({"k": "pkt", "x": "**" + m.group(1) + "** " + m.group(2)})
            elif l.endswith(":") and len(l) < 24: K["ausr"].append({"k": "lbl", "x": l})
            else: K["ausr"].append({"k": "txt", "x": l})
        else:  # kfae / fort
            if ABIL.match(l) and not l.startswith("**Haus**") and not l.startswith("**Wirkung**"):
                name, tag, fl, rest = split_ability(l)
                cur = {"t": name, "p": P.page}
                if l.startswith("**") and re.match(r"^\*\*[^*]+:\*\*", l): cur["_c"] = 1
                if tag: cur["tag"] = tag
                if fl: cur["fl"] = fl
                cur["x"] = []
                if rest: cur["x"].append(rest)
                (K["kfae"] if sec == "kfae" else K["fort"][grp]).append(cur)
            elif l.startswith("*") and l.endswith("*") and not l.startswith("**"):
                note = l.strip("*").strip()
                if cur is None: K["fortIntro"][grp] = note
                else: K["hinweis"][grp] = note
            elif cur is not None:
                add_text(cur["x"], l, brk)
            else:
                print("!! Text ohne Fähigkeit", kid, l[:60])
    # Unterpunkte mit Doppelpunkt (ohne Flavour) gehören als Liste zur vorherigen Kernfähigkeit (Carrion-Priest: Hyäne)
    neu = []
    for a in K["kfae"]:
        if a.get("_c") and "fl" not in a and neu:
            vor = neu[-1]
            if not vor["x"] or not (isinstance(vor["x"][-1], dict) and vor["x"][-1].get("t") == "dl"):
                vor["x"].append({"t": "dl", "x": []})
            vor["x"][-1]["x"].append([a["t"].title(), " ".join(a["x"])])
        else:
            neu.append(a)
    K["kfae"] = neu
    for g in K["fort"].values():
        for a in g: a.pop("_c", None)
    for a in K["kfae"]: a.pop("_c", None)
    # Sonderfall Vermissian Sage: Tabelle Häuser der Drow
    if kid == "vermissian-sage":
        hoch = K["fort"]["hoch"]
        for a in hoch:
            if a["t"] == "UNLESBAR":
                pass
        # Zeilen 'Haus'/'Wirkung' und Paare wurden als Text der Fähigkeit UNLESBAR abgelegt
        for a in hoch:
            x = a["x"]
            if "**Haus**" in x:
                i = x.index("**Haus**")
                rest = x[i + 2:]
                # Paare bis zur ersten Zeile, die nicht Paar-Muster ist (Ende = Zeilenanzahl gerade, 10 Häuser)
                rows = [[rest[j], rest[j + 1]] for j in range(0, 18, 2)]
                a["x"] = x[:i] + x[i + 2 + 18:]
                for b in K["fort"]["mittel"]:
                    if b["t"].startswith("DYNASTISCHES"):
                        b["x"] += [{"t": "h3", "x": "Die Häuser der Drow"}, {"t": "tbl", "head": ["Haus", "Wirkung"], "rows": rows}]
    return K


def js(var, obj):
    return json.dumps(obj, ensure_ascii=False, indent=1)


def write_klasse(K):
    s = "/* The Spire – Klasse %s (aus quellen/spire/de/cmf, erzeugt mit plan/spire/build_klassen.py) */\n(window.SP_KLASSE = window.SP_KLASSE || []).push(%s);\n" % (K["t"], js("", K))
    open(os.path.join(OUT, "klasse-%s.js" % K["id"]), "w").write(s)


def parse_extra():
    P = Parser(open(os.path.join(DE, "k08-extra-advances.md")).read())
    E = {"intro": [], "wege": [], "boxen": []}
    sec = None; cur = None; grp = None; ab = None; box = None
    for l in P.iter():
        brk = P.after_break; P.after_break = False
        if box is not None and not l.startswith(">"): box = None
        if l.startswith("> "):
            c = l[2:].strip()
            if c.startswith("## "):
                box = {"h": strip_head(c), "b": [], "nach": cur["id"] if cur else None, "grp": grp}; E["boxen"].append(box)
            elif box is not None: box["b"].append(c)
            continue
        if l.startswith("# "): continue
        if l.startswith("## "):
            h = strip_head(l)
            if h.lower() in ("niedrig", "mittel", "hoch"): grp = h.lower(); ab = None; continue
            cur = {"id": slug(h), "t": h, "p": P.page, "vor": "", "auff": "", "ein": [], "info": [], "fort": {"niedrig": [], "mittel": [], "hoch": []}}
            E["wege"].append(cur); grp = None; ab = None
            continue
        if cur is None: E["intro"].append(l); continue
        m = re.match(r"^\*\*(Voraussetzung|Auffrischen):\*\*\s*(.*)$", l)
        if m and grp is None:
            cur["vor" if m.group(1) == "Voraussetzung" else "auff"] = m.group(2); continue
        if grp is None:
            m = re.match(r"^\*\*(\d+): ([^*]+?)\.\*\*\s*(.*)$", l)
            if m:
                cur.setdefault("tab", []).append("**" + m.group(2) + ".** " + m.group(3)); continue
            (cur["info"] if (cur["vor"] or cur["auff"]) else cur["ein"]).append(l); continue
        if ABIL.match(l):
            name, tag, fl, rest = split_ability(l)
            ab = {"t": name, "p": P.page}
            if tag: ab["tag"] = tag
            if fl: ab["fl"] = fl
            ab["x"] = [rest] if rest else []
            cur["fort"][grp].append(ab)
        elif ab is not None:
            add_text(ab["x"], l, brk)
        else:
            print("!! Extra: Text ohne Fähigkeit", cur["t"], l[:60])
    return E


def write_extra(E):
    w = E["wege"]
    half = 6
    for fn, part in (("extra-a", w[:half]), ("extra-b", w[half:])):
        ids = {x["id"] for x in part}
        boxen = [b for b in E["boxen"] if b["nach"] in ids]
        s = "/* The Spire – Extra-Fortschritte (S. 69–76), erzeugt mit plan/spire/build_klassen.py */\nwindow.SP_EXTRA = window.SP_EXTRA || {wege:[], boxen:[], intro:%s};\nSP_EXTRA.wege = SP_EXTRA.wege.concat(%s);\nSP_EXTRA.boxen = SP_EXTRA.boxen.concat(%s);\n" % (js("", E["intro"] if fn == "extra-a" else []), js("", part), js("", boxen))
        if fn == "extra-b":
            s = s.replace('window.SP_EXTRA = window.SP_EXTRA || {wege:[], boxen:[], intro:[]};\n', 'window.SP_EXTRA = window.SP_EXTRA || {wege:[], boxen:[], intro:[]};\n')
        open(os.path.join(OUT, fn + ".js"), "w").write(s)


def parse_charaktere():
    P = Parser(open(os.path.join(DE, "k06-charaktere.md")).read())
    C = {"t": "", "p": 25, "abschnitte": [], "dienst": {"x": [], "oder": [], "intro": ""}}
    cur = None; box = None
    for l in P.iter():
        brk = P.after_break; P.after_break = False
        if box is not None and not l.startswith(">"): box = None
        if l.startswith("> "):
            c = l[2:].strip()
            if c.startswith("## "):
                box = {"h": strip_head(c), "b": []}; cur["b"].append({"t": "schwarz", "h": box["h"], "b": box["b"]})
            elif box is not None: box["b"].append(c)
            continue
        if l.startswith("# "): C["t"] = strip_head(l); continue
        if l.startswith("## "):
            h = strip_head(l); cur = {"id": slug(h), "t": h, "p": P.page, "b": []}; C["abschnitte"].append(cur); continue
        if cur is None:
            if re.match(r"^[A-ZÄÖÜ ]+$", l): cur = {"id": slug(l), "t": l.title(), "p": P.page, "b": []}; C["abschnitte"].append(cur)
            continue
        if cur["id"] == "dienstzeit" and ABIL.match(l):
            name, tag, fl, rest = split_ability(l)
            m = re.match(r"^((?:\+\d \w+(?:, )?)*[^.]*?)\.\s+(.*)$", rest)
            wert, txt = (m.group(1), m.group(2)) if m else ("", rest)
            C["dienst"]["x"].append({"t": name.title(), "w": wert, "x": txt, "p": P.page}); continue
        if cur["id"] == "dienstzeit" and l.startswith("*•"):
            m = re.match(r"^\*• (.+?):\*\s*(.*)$", l)
            C["dienst"]["oder"].append({"t": m.group(1), "w": m.group(2).rstrip("."), "p": P.page}); continue
        if cur["id"] == "dienstzeit" and l.startswith("Oder du hast"):
            C["dienst"]["oderT"] = l; continue
        if cur["id"] == "dienstzeit" and l.startswith("Wähle bei der"):
            C["dienst"]["intro"] = l; continue
        add_text(cur["b"], l, brk)
    return C


def main():
    os.makedirs(OUT, exist_ok=True)
    for kid, f in KLASSEN:
        K = parse_klasse(kid, f)
        write_klasse(K)
        n = len(K["kfae"]), [len(K["fort"][g]) for g in ("niedrig", "mittel", "hoch")]
        print(kid, K["t"], "p", K["p"], "kern", n[0], "fort", n[1], "kern-keys", sorted(K["kern"]), "boxen", [b["h"] for b in K["boxen"]])
    E = parse_extra()
    write_extra(E)
    for w in E["wege"]:
        print("extra", w["id"], w["p"], [len(w["fort"][g]) for g in ("niedrig", "mittel", "hoch")], "vor" if w["vor"] else "-", "auff" if w["auff"] else "-", len(w["info"]))
    print("extra boxen", [(b["h"], b["nach"]) for b in E["boxen"]], "intro", len(E["intro"]))
    C = parse_charaktere()
    open(os.path.join(OUT, "klassen-charaktere.js"), "w").write("/* The Spire – Charaktere (S. 25–27), erzeugt mit plan/spire/build_klassen.py */\nwindow.SP_CHARAKTERE = %s;\n" % js("", C))
    print("charaktere", [(a["id"], len(a["b"])) for a in C["abschnitte"]], len(C["dienst"]["x"]), len(C["dienst"]["oder"]))


if __name__ == "__main__":
    main()
