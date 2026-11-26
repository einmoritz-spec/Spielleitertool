#!/usr/bin/env python3
"""The Spire – Erweiterungsbücher (Sin, Strata, Black Magic, Codex, Secrets Kept from the Sun, Shadow Operations)
deutsche Markdown-Übersetzung (quellen/spire/de/<kürzel>) -> spire/js/data/erw/<kapitel>.js, gegner-erw.js, index.js
Aufruf: python3 -I plan/spire/build_erw.py   (aus dem Repo-Wurzelverzeichnis)

Seitenmarken <!-- S. n (PDF m) --> sind gedruckte Buchseiten. Bilder: plan/spire/erw/bilder-zuordnung.json (optional),
von diesem Skript beim Bauen an der passenden Seite in den Textfluss gesetzt."""
import re, json, os, sys, collections

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
SRC = os.path.join(ROOT, "quellen/spire/de")
OUT = os.path.join(ROOT, "spire/js/data/erw")
TERM = tuple('.!?:“”"»«)]*…;')
KLEIN = {"and", "of", "the", "der", "die", "das", "den", "dem", "des", "von", "im", "und", "zu", "um", "mit", "auf", "in", "am", "ein", "eine", "de", "ist",
         "nie", "nicht", "zum", "zur", "vom", "für", "gegen", "bei", "nach", "über", "oder", "als", "wie", "dein", "mein", "wird", "aus",
         "vor", "passiert", "an", "unter", "ohne", "bis", "durch", "was", "wer", "wo", "es", "sie", "er", "man", "so", "da", "dort"}
BEHALTEN = {"ADF", "NSC", "SL", "SC", "ADFS", "KI", "II", "III", "IV", "VII", "XIII"}
RUNNING = {"#3c0052", "#84444e"}  # laufende Seitenköpfe von Sin (## SIN …)

# ---------------------------------------------------------------- Konfiguration
# Buch: kürzel, Buch-ID im Bookviewer, Anzeigename, Untertitel, Kastenfarbe, Kapitel (Datei, id, Titel, Gruppe, Untertitel, Besonderheit)
BOOKS = [
    {"id": "sin", "dir": "sin", "buch": "s1", "bid": "sp_s1", "t": "Sin", "sub": "Setting-Sourcebook", "kasten": "violett", "off": 0,
     "gruppen": [("start", "Einführung"), ("klassen", "Neue Klassen"), ("verbrechen", "Verbrechen"), ("ordnung", "Ordnung"), ("religion", "Religion"), ("kulte", "Kulte"), ("abenteuer", "Abenteuer")],
     "kap": [
         ("s00-einleitung", "einleitung", "Einleitung", "start", "Content Warnings und Aufbau", {"skip_h": ["INHALT"]}),
         ("s01a-neue-klassen", "klassen", "Neue Klassen", "klassen", "Gutter Cleric · Mortician Executioner", {"klassen": ["gutter-cleric", "mortician-executioner"]}),
         ("s02a-verbrechen", "verbrechen", "Verbrechen im Spire", "verbrechen", "Gangs, Märkte, Kontrolle", {}),
         ("s02b-red-row", "red-row", "Red Row", "verbrechen", "Mother Moon · Threadneedle · Mr Winters", {}),
         ("s02c-schreine-des-verbrechens", "schreine", "Schreine des Verbrechens", "verbrechen", "Götter der Gasse", {}),
         ("s02d-norddocks", "norddocks", "Die Norddocks", "verbrechen", "Docks und ihre Herren", {}),
         ("s02e-verbrechen-oben", "up-spire", "Verbrechen Up-Spire", "verbrechen", "Das Verbrechen der Oberschicht", {}),
         ("s02f-verbrechen-extra", "verbrechen-extra", "Verbrechen: Extra-Fortschritte", "verbrechen", "Neue Wege", {}),
         ("s04a-ordnung", "ordnung", "Ordnung", "ordnung", "Stadtwache · Paladine · Ethikrat", {}),
         ("s04b-ordnung-lokal-adf", "lokales-recht", "Lokales Recht und die ADF", "ordnung", "Alliierte Verteidigungsstreitkräfte", {}),
         ("s04c-kolonialherrschaft-extra", "kolonialherrschaft", "Kolonialherrschaft", "ordnung", "Die Aelfir-Herrschaft", {}),
         ("s06a-religion-ministerium-kirche", "ministerium-kirche", "Das Ministerium und die Kirche", "religion", "Verborgene und Glorreiche Herrin", {}),
         ("s06b-karmesinrote-wacht", "karmesinrote-wacht", "Die Karmesinrote Wacht", "religion", "Die Sekte der Wache", {}),
         ("s06c-sonnenkirche-viele", "sonnenkirche-viele", "Die Sonnenkirche und die Vielen", "religion", "Der alte Glaube", {}),
         ("s06d-pilgerweg-extra", "pilgerweg", "Pilgerweg", "religion", "Extra-Fortschritte", {}),
         ("s08-kulte", "kulte", "Persönlichkeitskulte", "kulte", "Wächter · Hundemänner · Finsternis", {}),
         ("s03-second-hand-rain", "second-hand-rain", "Second-Hand Rain", "abenteuer", "Abenteuer", {"abenteuer": True}),
         ("s05-geburt-brother-harvest", "brother-harvest", "Birth of Brother Harvest", "abenteuer", "Abenteuer", {"abenteuer": True}),
         ("s07-in-den-haenden-der-goetter", "hands-of-the-gods", "In the Hands of the Gods", "abenteuer", "Abenteuer", {"abenteuer": True}),
     ]},
    {"id": "str", "dir": "str", "buch": "s2", "bid": "sp_s2", "t": "Strata", "sub": "Setting-Sourcebook", "kasten": "schwarz", "off": 5,
     "gruppen": [("start", "Einführung"), ("klassen", "Neue Klassen"), ("setting", "Setting"), ("kulte", "Kulte"), ("abenteuer", "Szenarien")],
     "kap": [
         ("t00-einleitung", "einleitung", "Einleitung", "start", "Wie dieses Buch funktioniert", {"skip_h": ["INHALT"]}),
         ("t01-neue-klassen", "klassen", "Neue Klassen", "klassen", "Inksmith · Shadow Agent", {"klassen": ["inksmith", "shadow-agent"], "stop_at": ["INKSMITH"]}),
         ("t02a-setting-hohe-gesellschaft", "hohe-gesellschaft", "Hohe Gesellschaft", "setting", "Amaranth · Ivory Row · Silberviertel", {}),
         ("t02b-niedere-gesellschaft", "niedere-gesellschaft", "Niedere Gesellschaft", "setting", "Derelictus · Perch · Gartendistrikt · Die Werke", {}),
         ("t05-kulte", "kulte", "Kulte", "kulte", "Glaubensgemeinschaften des Spire", {}),
         ("t03-szenarien", "szenarien", "Szenarien", "abenteuer", "So funktionieren die Szenarien", {}),
         ("t04a-eye-of-the-beholder", "eye-of-the-beholder", "Eye of the Beholder", "abenteuer", "Szenario", {"abenteuer": True}),
         ("t04b-home-is-where-the-hatred-is", "home-is-where-the-hatred-is", "Home Is Where the Hatred Is", "abenteuer", "Szenario", {"abenteuer": True}),
         ("t04c-bisquiet", "bisquiet", "Bisquiet", "abenteuer", "Szenario", {"abenteuer": True}),
         ("t04d-fall-of-glasshelm", "fall-of-glasshelm", "The Fall of Glasshelm", "abenteuer", "Szenario", {"abenteuer": True}),
         ("t04e-better-the-devil", "better-the-devil", "Better the Devil", "abenteuer", "Szenario", {"abenteuer": True}),
         ("t04f-the-forgotten", "the-forgotten", "The Forgotten", "abenteuer", "Szenario", {"abenteuer": True}),
         ("t04g-ironshrike", "ironshrike", "Ironshrike", "abenteuer", "Szenario", {"abenteuer": True}),
         ("t04h-sulphurous-presses", "sulphurous-presses", "The Sulphurous Presses", "abenteuer", "Szenario", {"abenteuer": True}),
         ("t04i-lines-in-the-dirt", "lines-in-the-dirt", "Lines in the Dirt", "abenteuer", "Szenario", {"abenteuer": True}),
         ("t04j-dark-harvest", "dark-harvest", "Dark Harvest", "abenteuer", "Szenario", {"abenteuer": True}),
     ]},
    {"id": "bm", "dir": "bm", "buch": "z4", "bid": "sp_z4", "t": "Black Magic", "sub": "Sourcebook", "kasten": "schwarz", "off": 2,
     "gruppen": [("start", "Einführung"), ("klassen", "Klasse und Extra-Fortschritte"), ("magie", "Magie")],
     "kap": [
         ("b00-einleitung", "einleitung", "Schwarze Magie", "start", "Einleitung", {"skip_h": ["INHALT"]}),
         ("b01-blood-witch", "blood-witch", "Blood-Witch", "klassen", "Neue Klasse", {"klassen": ["blood-witch"], "nur_link": True}),
         ("b02-grangou", "grangou", "Grangou", "klassen", "Extra-Fortschritt", {"extra": "grangou", "nur_link": True}),
         ("b03-deep-apiarist", "tiefer-imker", "Tiefer Imker", "klassen", "Extra-Fortschritt", {"extra": "tiefer-imker", "nur_link": True}),
         ("b05-daemonologe", "daemonologe", "Dämonologe", "klassen", "Extra-Fortschritt", {"extra": "daemonologe", "nur_link": True}),
         ("b04-daemonen", "daemonen", "Dämonen", "magie", "Dämonen des Spire", {}),
         ("b06-okkulter-fallout", "okkulter-fallout", "Okkulter Fallout", "magie", "Fallout-Liste", {}),
     ]},
    {"id": "bd", "dir": "bd", "buch": "s3", "bid": "sp_s3", "t": "Blood and Dust", "sub": "Kampagnenrahmen", "kasten": "schwarz", "off": 2,
     "gruppen": [("start", "Kampagne"), ("figuren", "Spielercharaktere")],
     "kap": [
         ("d01-kampagne", "kampagne", "Blood and Dust", "start", "Ein Kampagnenrahmen", {"von_seite": 1}),
         ("d02-vorgefertigte-charaktere", "charaktere", "Vorgefertigte Charaktere", "figuren", "Fünf Spielercharaktere", {"ohne_bogen": True, "figuren": True, "von_seite": 9, "bild": "klasse/firebrand"}),
     ]},
    {"id": "cod", "dir": "cod", "buch": "z2", "bid": "sp_z2", "t": "Codex of the Deep Spire", "sub": "Sourcebook", "kasten": "schwarz", "off": 2,
     "gruppen": [("start", "Codex")],
     "kap": [("c01-codex", "codex", "Codex of the Deep Spire", "start", "Die Spiegelwelt und ihre Unholde", {})]},
    {"id": "skfs", "dir": "skfs", "buch": "z5", "bid": "sp_z5", "t": "Secrets Kept from the Sun", "sub": "Sourcebook", "kasten": "schwarz", "off": 2,
     "gruppen": [("start", "Geheimnisse")],
     "kap": [("x01-geheimnisse", "geheimnisse", "Secrets Kept from the Sun", "start", "Das Ministerium im Verborgenen", {})]},
    {"id": "sop", "dir": "sop", "buch": "z3", "bid": "sp_z3", "t": "Shadow Operations", "sub": "One-Shots", "kasten": "schwarz", "off": 2,
     "gruppen": [("start", "Einführung"), ("abenteuer", "One-Shots")],
     "kap": [
         ("o00-einleitung", "einleitung", "Einleitung", "start", "Aufbau der Szenarien", {"skip_h": ["INHALT"]}),
         ("o01-life-and-soul", "life-and-soul", "Life and Soul", "abenteuer", "One-Shot", {"abenteuer": True}),
         ("o02-the-last-train", "the-last-train", "The Last Train", "abenteuer", "One-Shot", {"abenteuer": True}),
         ("o03-shotgun-wedding", "shotgun-wedding", "A Shotgun Wedding", "abenteuer", "One-Shot", {"abenteuer": True}),
         ("o04-powderkeg", "powderkeg", "Powderkeg", "abenteuer", "One-Shot", {"abenteuer": True}),
         ("o05-show-must-go-on", "show-must-go-on", "The Show Must Go On", "abenteuer", "One-Shot", {"abenteuer": True}),
     ]},
]


# ---------------------------------------------------------------- Hilfsfunktionen
def slug(s):
    s = s.lower()
    for a, b in (("ä", "ae"), ("ö", "oe"), ("ü", "ue"), ("ß", "ss"), ("é", "e"), ("è", "e")):
        s = s.replace(a, b)
    return re.sub(r"[^a-z0-9]+", "-", s).strip("-") or "x"


def _cap(w, first):
    lw = w.lower()
    if lw in KLEIN and not first:
        return lw
    for i, ch in enumerate(w):
        if ch.isalpha():
            return w[:i] + ch.upper() + w[i + 1:].lower()
    return w


def pretty(s):
    """VERSALIEN -> Titelschreibweise; gemischte Schreibweise bleibt unverändert."""
    s = re.sub(r"\s+", " ", s).strip()
    if not any(c.isalpha() for c in s) or s != s.upper():
        return s
    out, prev = [], ""
    for i, w in enumerate(s.split(" ")):
        first = (i == 0 or prev.endswith((":", "–", "-")) and prev in ("–", "-")); prev = w
        if w.strip(",:.!?") in BEHALTEN:
            out.append(w); continue
        parts = w.split("-")
        out.append("-".join("’".join(_cap(y, first and j == 0) for y in x.split("’")) for j, x in enumerate(parts)))
    return " ".join(out).replace("Heisst", "Heißt")


WEIN = {"#981a3f", "#9c1837", "#c31637", "#a9090b"}


def _entkasten(lines):
    """Werteblöcke, die im Buch in einem Kasten stehen („> #### TITEL“, „> **Namen:**“ + Wert in der Folgezeile), werden zu normalen
    Werteblock-Zeilen („**TITEL**“, „**Label:** Wert“), damit sie als Gegner erkannt werden."""
    lab = re.compile(r"^> \*\*(Namen|Beschreibung|Schwierigkeit|Widerstand|Ausrüstung|Besonderes|Rüstung):\*\*\s*(.*)$")
    out, i, n = [], 0, len(lines)
    while i < n:
        ln = lines[i]
        qh = re.match(r"^> #{1,6} (.*?)(?: \{farbe=#\w+\})?$", ln)
        # Blockanfang: Titelzeile oder Labelzeile, sofern innerhalb der nächsten Zeilen ein „Widerstand“-Label folgt
        if (qh or lab.match(ln)) and any("**Widerstand:**" in x for x in lines[i:i + 10] if x.startswith("> ")):
            j = i
            blk = []
            while j < n and lines[j].startswith("> ") and not (j > i and re.match(r"^> #{1,6} ", lines[j]) and blk and any(lab.match(b) for b in blk) and any(re.match(r"^> \*\*Widerstand", b) for b in blk)):
                blk.append(lines[j]); j += 1
            res, k = [], 0
            while k < len(blk):
                b = blk[k]; m = lab.match(b); h = re.match(r"^> #{1,6} (.*?)(?: \{farbe=#\w+\})?$", b)
                if h:
                    res.append("**" + h.group(1).strip() + "**")
                elif m:
                    val = m.group(2).strip(); k2 = k + 1
                    while k2 < len(blk) and not lab.match(blk[k2]) and not re.match(r"^> #{1,6} ", blk[k2]):
                        val = (val + " " + blk[k2][2:].strip()).strip(); k2 += 1
                    res.append("**" + m.group(1) + ":** " + val); k = k2; continue
                else:
                    res.append(b[2:])
                k += 1
            out.extend(res); i = j; continue
        out.append(ln); i += 1
    return out


def parse(path, skip_h=(), stop_at=(), ohne_bogen=False, von_seite=None):
    """Markdown -> Items [{k:h|qh|q|p|li|tr, ...}] mit Seitenfortsetzungen."""
    items, page, pb, last = [], None, False, None
    skipping = False; bogen = False
    for raw in _entkasten(open(path, encoding="utf-8").read().split("\n")):
        ln = raw.rstrip("\n").strip()
        m = re.match(r"<!-- S\. (-?\d+) \(PDF (\d+)\) -->", ln)
        if m:
            page = int(m.group(1)); pb = True; bogen = False; continue
        if ohne_bogen and ln.startswith("### Spielername"): bogen = True
        if bogen: continue
        if von_seite is not None and (page is None or page < von_seite): continue
        if not ln or ln.startswith("<<") or ln.startswith("(ausgelassen"):
            continue
        if re.fullmatch(r"\d+|IV|[IVX]{1,4}", ln) and pb:
            continue
        if re.fullmatch(r"(> )?(#{1,3} )?\d+( \{.*\})?", ln):
            continue
        h = re.match(r"^(#{1,6}) (.*?)(?: \{farbe=(#\w+)\})?$", ln)
        if h and not ln.startswith("> "):
            col = h.group(3)
            if len(h.group(1)) == 2 and col in RUNNING:
                continue
            txt = h.group(2).strip()
            if stop_at and len(h.group(1)) == 1 and txt.upper() in stop_at:
                break
            if skip_h:
                if len(h.group(1)) == 1 and txt.upper() in skip_h:
                    skipping = True; continue
                if len(h.group(1)) == 1:
                    skipping = False
            if skipping:
                continue
            if re.match(r"Von [A-ZÄÖÜ]", txt) and len(txt.split()) <= 7 and col in WEIN:
                items.append({"k": "p", "x": "*" + txt + "*", "p": page}); last = None; pb = False; continue
            items.append({"k": "h", "n": len(h.group(1)), "x": txt, "farbe": col, "p": page})
            last = None; pb = False; continue
        if skipping:
            continue
        if ln.startswith("> "):
            t = ln[2:].strip()
            hh = re.match(r"^(#{1,6}) (.*?)(?: \{farbe=#\w+\})?$", t)
            if hh:
                if items and items[-1]["k"] == "qh" and items[-1]["n"] == len(hh.group(1)):
                    items[-1]["x"] += " " + hh.group(2)
                else:
                    items.append({"k": "qh", "n": len(hh.group(1)), "x": hh.group(2), "p": page})
                last = None; pb = False; continue
            if re.fullmatch(r"\d+", t):
                continue
            kind = "q"
        elif ln.startswith("• "):
            t = ln[2:].strip(); kind = "li"
        elif ln.startswith("|"):
            if re.fullmatch(r"\|[\s\-:|]+\|", ln):
                continue
            items.append({"k": "tr", "x": [c.strip() for c in ln.strip("|").split("|")], "p": page}); last = None; pb = False; continue
        else:
            t = ln; kind = "p"
        jj = len(items) - 1
        while jj >= 0 and items[jj]["k"] in ("q", "qh"):
            jj -= 1
        if pb and kind == "p" and t[:1].islower() and 0 <= jj < len(items) - 1 and items[jj]["k"] in ("p", "li") and not items[jj]["x"].rstrip("*").endswith(TERM):
            items[jj]["x"] = items[jj]["x"].rstrip() + " " + t; pb = False; continue
        if pb and last is not None and items and items[-1] is last and last["k"] in ("p", "li", "q") and (kind == "p" or (kind == "q" and last["k"] == "q")):
            lt = last["x"].rstrip()
            if not lt.rstrip("*").endswith(TERM):
                last["x"] = (lt[:-1] + t) if (lt.endswith("-") and not lt.endswith(" -")) else (lt + " " + t)
                pb = False
                continue
        it = {"k": kind, "x": t, "p": page}
        items.append(it); last = it; pb = False
    return items


# ---------------------------------------------------------------- Werteblöcke
LABELS = ("namen", "beschreibung", "schwierigkeit", "widerstand", "ausrüstung", "besonderes", "rüstung")


def equipment(t):
    res, pos = [], 0
    for m in re.finditer(r"([^(),;]+?)\s*\(([^)]*)\)", t):
        pre = t[pos:m.start()]; name = m.group(1)
        mm = re.match(r"^(.*?(?:,\s+| oder | und |; |\.\s+))?(.*)$", name, re.S)
        if mm and mm.group(1):
            res.append(pre + mm.group(1)); name = mm.group(2)
        elif pre:
            res.append(pre)
        parts = [x.strip() for x in m.group(2).split(",") if x.strip()]
        d, tags = None, []
        for p_ in parts:
            if re.match(r"^W\d+", p_) and d is None: d = p_
            else: tags.append(p_)
        o = {"x": name.strip()}
        if d: o["dmg"] = d
        if tags: o["tags"] = tags
        res.append(o); pos = m.end()
    if t[pos:]: res.append(t[pos:])
    out = []
    for i, r in enumerate(res):
        if isinstance(r, str):
            if r.strip() in (",", ";"):
                out.append(r.strip() + " "); continue
            nxt = res[i + 1] if i + 1 < len(res) else None
            if r.rstrip().endswith(",") and isinstance(nxt, dict) and nxt["x"][:1].islower():
                m = re.match(r"^(.*(?:,\s+| oder | und |; ))?([^,;]*?)\s*,\s*$", r, re.S)
                if m:
                    if m.group(1): out.append(m.group(1))
                    nxt["x"] = m.group(2).strip() + ", " + nxt["x"]
                    continue
        out.append(r)
    return out


def stat_start(items, i):
    """Index-Check: ab i beginnt ein Werteblock (Titelzeile fett ohne Doppelpunkt + Labelzeilen)."""
    it = items[i]
    if it["k"] not in ("p", "li"):
        return False
    m = re.match(r"^\*\*(.+?)\*\*$", it["x"])
    if not m or ":" in m.group(1) or len(m.group(1)) > 90:
        return False
    j = i + 1; n = 0
    while j < len(items) and items[j]["k"] in ("p", "li"):
        mm = re.match(r"^\*\*(.+?):\*\*", items[j]["x"])
        if mm and mm.group(1).strip().lower() in LABELS: n += 1; j += 1
        else: break
    return n >= 2


def lab_start(items, i):
    """Block ohne Titelzeile (Namen:/Beschreibung: direkt nach Überschrift)."""
    return items[i]["k"] in ("p", "li") and re.match(r"^\*\*(Namen|Beschreibung|Schwierigkeit):\*\*", items[i]["x"]) is not None


class Ctx:
    def __init__(self, book, kap):
        self.book, self.kap, self.gegner = book, kap, []
        self.ids = collections.Counter()


def stat_id(ctx, title):
    base = "erw-" + ctx.book["id"] + "-" + slug(re.sub(r"\[\[.*?\]\]", "", title))
    ctx.ids[base] += 1
    return base if ctx.ids[base] == 1 else base + "-" + str(ctx.ids[base])


def make_gegner(ctx, title, items, j, page, ort):
    fields, cur, order = {}, None, []
    while j < len(items) and items[j]["k"] in ("p", "li"):
        t = items[j]["x"]
        m = re.match(r"^\*\*(.+?):\*\*\s*(.*)$", t)
        if m and m.group(1).strip().lower() in LABELS:
            cur = m.group(1).strip().lower(); fields[cur] = m.group(2).strip(); order.append(cur)
        else:
            break
        j += 1
    # freie Sonderregeln direkt dahinter (kein Label, keine Titelzeile)
    extra = []
    while j < len(items) and items[j]["k"] == "p" and len(extra) < 3 and not stat_start(items, j) and not re.match(r"^\*\*", items[j]["x"]) and not re.match(r"^\*[^*].*\?\*", items[j]["x"]):
        extra.append(items[j]["x"]); j += 1
    en = re.findall(r"\[\[(.+?)\]\]", title)
    clean = re.sub(r"\s*\[\[.+?\]\]", "", title).strip()
    g = {"id": stat_id(ctx, clean), "t": pretty(clean), "buch": ctx.book["buch"], "p": page, "ort": ort, "ziel": "buch/%s/%s" % (ctx.book["id"], ctx.kap)}
    if en: g["en"] = en[0]
    if "namen" in fields:
        nraw = fields["namen"]
        ns = [x.strip() for x in (nraw.split(";") if ";" in nraw else nraw.split(","))]
        g["namen"] = [re.sub(r"\s*\[\[.+?\]\]", "", x) for x in ns]
        enn = [mm for x in ns for mm in re.findall(r"\[\[(.+?)\]\]", x)]
        if enn: g["namenEn"] = enn
    if "beschreibung" in fields:
        g["beschr"] = [x.strip() for x in fields["beschreibung"].split(";")]
    s = fields.get("schwierigkeit", "0")
    mk = re.match(r"^(\d+)", s)
    g["schw"] = {"k": mk.group(1) if mk else s, "x": s}
    w = fields.get("widerstand", "0")
    nums = [int(x) for x in re.findall(r"\d+", w)] if len(w) < 60 else [int(x) for x in re.findall(r"\d+", w)[:2]]
    g["wid"] = {"werte": nums[:3] or [0]}
    if len(w.strip()) > 0 and not re.fullmatch(r"[\d,\s/]+", w):
        g["wid"]["x"] = w
    g["ausr"] = equipment(fields.get("ausrüstung", "")) if "ausrüstung" in fields else []
    bes = fields.get("besonderes", "")
    r = fields.get("rüstung", "").strip()
    if r and r != "0":
        mr = re.match(r"^(\d+)\s*\((.*)\)\s*$", r)
        if mr and mr.group(1) != "0":
            g["ausr"] = [{"x": mr.group(2).strip(), "tags": ["Rüstung " + mr.group(1)]}] + ([", "] if g["ausr"] else []) + g["ausr"]
        else:
            bes = ("Rüstung: " + r + (". " if not r.endswith(".") else " ") + bes).strip()
    if extra:
        bes = (bes + " " + " ".join(extra)).strip()
    if bes: g["bes"] = bes
    ctx.gegner.append(g)
    return g, j


# ---------------------------------------------------------------- Blöcke
def lead(t):
    return re.match(r"^\*\*(.+?)\*\*\s*(.*)$", t)


def box_lines(lines):
    """Kastenzeilen -> Blockliste (Absätze, Listen)"""
    b = []
    for l in lines:
        if l.startswith("• "):
            if b and isinstance(b[-1], dict) and b[-1].get("t") == "ul": b[-1]["x"].append(l[2:].strip())
            else: b.append({"t": "ul", "x": [l[2:].strip()]})
        else:
            b.append(l)
    return b


def build_blocks(ctx, items, kasten):
    """-> (blocks, pages) parallele Listen"""
    blocks, pages = [], []
    heads = []  # (blockindex, n, farbe)
    cur_h = {"x": ""}
    buf_hw, buf_li, buf_li_p = [], [], None

    def add(b, p):
        blocks.append(b); pages.append(p)

    def flush():
        nonlocal buf_hw, buf_li
        if buf_hw:
            add({"t": "hw", "x": buf_hw}, buf_hw[0].get("p")); buf_hw = []
        if buf_li:
            if cur_h["x"].upper().startswith(("VORGESCHLAGENE SZENEN", "SZENEN", "MÖGLICHE SZENEN")) or len(buf_li) < 0:
                add({"t": "szenen", "x": buf_li}, buf_li_p)
            else:
                add({"t": "ul", "x": buf_li}, buf_li_p)
            buf_li = []

    i = 0
    while i < len(items):
        it = items[i]; k = it["k"]
        if k == "h":
            flush()
            txt, n, farbe, j = it["x"], it["n"], it["farbe"], i + 1
            while j < len(items) and items[j]["k"] == "h" and items[j]["n"] == n and items[j]["farbe"] == farbe:
                txt += " " + items[j]["x"]; j += 1
            if j < len(items) and lab_start(items, j) and n >= 3:
                g, j2 = make_gegner(ctx, txt, items, j, it["p"], cur_h["x"] or ctx.book["t"])
                add({"t": "gegner", "id": g["id"]}, it["p"]); i = j2; continue
            cur_h["x"] = pretty(txt)
            add({"t": "h", "x": pretty(txt), "n": n, "farbe": farbe, "p": it["p"]}, it["p"])
            heads.append(len(blocks) - 1)
            i = j; continue
        if k == "qh":
            flush()
            title, n, p0 = it["x"], it["n"], it["p"]; i += 1; body = []
            while i < len(items) and items[i]["k"] == "q":
                body.append(items[i]["x"]); i += 1
            # große Kastenüberschrift ohne Inhalt = Titelblock des Kapitels (z. B. „> # Titel“)
            add({"t": kasten, "h": pretty(title), "b": box_lines(body), "p": p0}, p0); continue
        if k == "q":
            flush()
            body = []; p0 = it["p"]
            while i < len(items) and items[i]["k"] == "q":
                body.append(items[i]["x"]); i += 1
            add({"t": kasten, "b": box_lines(body), "p": p0}, p0); continue
        if k == "tr":
            flush()
            rows = []; p0 = it["p"]
            while i < len(items) and items[i]["k"] == "tr":
                rows.append(items[i]["x"]); i += 1
            head = [re.sub(r"^\*\*(.*)\*\*$", r"\1", c) for c in rows[0]]
            add({"t": "tbl", "head": head, "rows": rows[1:]}, p0); continue
        if k == "li":
            if buf_hw: flush()
            if not buf_li: buf_li_p = it["p"]
            buf_li.append(it["x"]); i += 1; continue
        if k == "p":
            if stat_start(items, i):
                flush()
                mt = re.match(r"^\*\*(.+?)\*\*$", it["x"])
                g, j2 = make_gegner(ctx, mt.group(1), items, i + 1, it["p"], cur_h["x"] or ctx.book["t"])
                add({"t": "gegner", "id": g["id"]}, it["p"]); i = j2; continue
            if lab_start(items, i):
                flush()
                g, j2 = make_gegner(ctx, cur_h["x"] or "Gegner", items, i, it["p"], cur_h["x"] or ctx.book["t"])
                add({"t": "gegner", "id": g["id"]}, it["p"]); i = j2; continue
            # nummerierte Liste -> W-Tabelle
            if re.match(r"^\d+\. ", it["x"]):
                flush()
                rows, p0 = [], it["p"]
                while i < len(items) and items[i]["k"] == "p" and re.match(r"^\d+\. ", items[i]["x"]):
                    rows.append(re.sub(r"^\d+\. ", "", items[i]["x"])); i += 1
                if 3 <= len(rows) <= 20:
                    add({"t": "w10", "h": cur_h["x"], "rows": rows}, p0)
                else:
                    add({"t": "ul", "x": rows}, p0)
                continue
            m = lead(it["x"])
            if m and len(m.group(1)) < 120 and m.group(2) and m.group(1).rstrip().endswith((".", "!", "?")) and not re.match(r"^\*[^*]", it["x"]):
                if buf_li: flush()
                buf_hw.append({"k": m.group(1).rstrip("."), "x": m.group(2), "p": it["p"]}); i += 1; continue
            flush()
            add(it["x"], it["p"]); i += 1; continue
        i += 1
    flush()
    return blocks, pages


def nachbessern(blocks, pages):
    """Kasten, der mitten in einen Absatz gerutscht ist, hinter den fortgesetzten Absatz setzen; Q&A bündeln."""
    n = 0
    while n + 2 < len(blocks):
        a, b2, c = blocks[n], blocks[n + 1], blocks[n + 2]
        if isinstance(a, str) and isinstance(c, str) and isinstance(b2, dict) and b2.get("t") in ("schwarz", "violett") \
                and not a.rstrip().endswith((".", "!", "?", ":", "“", "\"", ")", "]", "*")) and c[:1].islower():
            blocks[n:n + 3] = [a.rstrip() + " " + c.lstrip(), b2]; pages[n:n + 3] = [pages[n], pages[n + 1]]
        n += 1
    return blocks, pages


# ---------------------------------------------------------------- Kapitel
def ranks(blocks):
    """Überschriften-Ebenen je Kapitel: Titel (Ebene 0), danach 1.. nach Wichtigkeit."""
    kinds = collections.Counter()
    first = True
    for b in blocks:
        if isinstance(b, dict) and b.get("t") == "h":
            kinds[(b["n"], 0 if b["farbe"] in WEIN else 1)] += 1
    ks = sorted(kinds)
    # Titel = erste Überschrift des Kapitels, wenn sie von der obersten Art ist
    return ks


def kapitel(book, row, imgs):
    fid, kid, title, grp, sub, opt = row
    path = os.path.join(SRC, book["dir"], fid + ".md")
    items = parse(path, tuple(opt.get("skip_h", [])), tuple(opt.get("stop_at", [])), opt.get("ohne_bogen", False), opt.get("von_seite"))
    ctx = Ctx(book, kid)
    blocks, pages = build_blocks(ctx, items, book["kasten"])
    blocks, pages = nachbessern(blocks, pages)
    # Titel-Überschriften am Anfang (Ebene #) entfernen, sofern sie dem Kapitel entsprechen
    hs = [(ix, b) for ix, b in enumerate(blocks) if isinstance(b, dict) and b.get("t") == "h"]
    kinds = sorted({(b["n"], 0 if b["farbe"] in WEIN else 1) for _, b in hs})
    # Titelart: Ebene 1 (#) – genau die Überschriften direkt am Kapitelanfang
    drop = []
    ix = 0
    while ix < len(blocks) and (isinstance(blocks[ix], dict) and blocks[ix].get("t") in ("h", "schwarz", "violett") and (blocks[ix].get("n") == 1 or blocks[ix].get("t") != "h")):
        if blocks[ix].get("t") != "h" and not blocks[ix].get("h"): break
        drop.append(ix); ix += 1
    titelblocks = [blocks[d] for d in drop]
    for d in reversed(drop):
        del blocks[d]; del pages[d]
    # Ebenen vergeben
    kinds = collections.Counter()
    for b in blocks:
        if isinstance(b, dict) and b.get("t") == "h":
            kinds[(b["n"], 0 if b["farbe"] in WEIN else 1)] += 1
    lv = {k: i + 1 for i, k in enumerate(sorted(kinds))}
    seen = collections.Counter()
    for b in blocks:
        if isinstance(b, dict) and b.get("t") == "h":
            b["lvl"] = lv[(b["n"], 0 if b["farbe"] in WEIN else 1)]
            if opt.get("figuren"): b["lvl"] = 1 if " – " in b["x"] else 2
            base = slug(b["x"]); seen[base] += 1
            b["id"] = base if seen[base] == 1 else base + "-" + str(seen[base])
            del b["n"]; del b["farbe"]
    ps = [p for p in pages if p is not None]
    # Bilder an passender Seite einsetzen
    for im in imgs.get(book["id"], []):
        if im.get("kap") not in (None, kid):
            continue
        if im.get("kap") is None:
            continue
        # Position: vor dem ersten Block mit Seite >= Bildseite
        pos = None
        for ix, pg in enumerate(pages):
            if pg is not None and pg >= im["p"]:
                pos = ix; break
        if pos is None:
            pos = len(blocks)
        if book["id"] == "str":   # eingebrannte Bildunterschrift (kurzer schwarzer Kasten auf der Bildseite) entfällt
            for q in range(len(blocks) - 1, -1, -1):
                bq = blocks[q]
                if isinstance(bq, dict) and bq.get("t") == "schwarz" and pages[q] == im["p"] and len(bq.get("b", [])) == 1 and isinstance(bq["b"][0], str) and len(bq["b"][0]) < 90:
                    del blocks[q]; del pages[q]
                    if q < pos: pos -= 1
        blocks.insert(pos, {"t": "img", "src": im["src"], "w": im["w"], "h": im["h"], "p": im["p"]})
        pages.insert(pos, im["p"])
    D = {"id": kid, "buch": book["id"], "t": title, "p": min(ps) if ps else None, "pe": max(ps) if ps else None, "b": blocks}
    if opt.get("abenteuer"): D["abenteuer"] = True
    return D, ctx.gegner, titelblocks


def jsw(path, s):
    open(path, "w", encoding="utf-8").write(s)


def main():
    os.makedirs(OUT, exist_ok=True)
    for f in os.listdir(OUT):
        if f.endswith(".js") and f != "galerie.js":
            os.remove(os.path.join(OUT, f))
    imgs = {}
    ip = os.path.join(ROOT, "plan/spire/erw/bilder-zuordnung.json")
    if os.path.exists(ip):
        imgs = json.load(open(ip, encoding="utf-8"))
    INDEX, ALLG, SUCHE = [], [], []
    for book in BOOKS:
        B = {"id": book["id"], "buch": book["buch"], "bid": book["bid"], "t": book["t"], "sub": book["sub"], "off": book["off"],
             "gruppen": [{"id": g, "t": t} for g, t in book["gruppen"]], "kap": []}
        for row in book["kap"]:
            fid, kid, title, grp, sub, opt = row
            D, G, tb = kapitel(book, row, imgs)
            for k in ("klassen", "extra", "nur_link"):
                if k in opt: D[k] = opt[k]
            nh = sum(1 for b in D["b"] if isinstance(b, dict) and b.get("t") == "h")
            chars = len(json.dumps(D["b"], ensure_ascii=False))
            fn = "%s-%s.js" % (book["id"], kid)
            s = "/* The Spire – %s · %s (deutscher Buchtext aus quellen/spire/de/%s/%s.md, erzeugt mit plan/spire/build_erw.py) */\n(window.SP_ERW = window.SP_ERW || {})[%s] = %s;\n" % (
                book["t"], title, book["dir"], fid, json.dumps(book["id"] + "/" + kid), json.dumps(D, ensure_ascii=False, separators=(",", ":")))
            if not opt.get("nur_link"):
                jsw(os.path.join(OUT, fn), s)
            ALLG += G
            hl = [(b, ix) for ix, b in enumerate(D["b"]) if isinstance(b, dict) and b.get("t") == "h"]
            for b, ix in hl:
                nx = D["b"][ix + 1] if ix + 1 < len(D["b"]) else None
                snip = nx if isinstance(nx, str) else ""
                SUCHE.append([book["id"], kid, b["id"], b["x"], b.get("p"), re.sub(r"[*\[\]]", "", snip)[:140]])
            first_img = opt.get("bild") or next((b["src"] for b in D["b"] if isinstance(b, dict) and b.get("t") == "img"), None)
            B["kap"].append({"id": kid, "t": title, "g": grp, "s": sub, "p": D["p"], "pe": D["pe"], "f": None if opt.get("nur_link") else fn, "img": first_img, "n": len(G), "h": nh,
                             **({"klassen": opt["klassen"]} if "klassen" in opt else {}), **({"extra": opt["extra"]} if "extra" in opt else {}),
                             **({"nur_link": True} if opt.get("nur_link") else {}), **({"abenteuer": True} if opt.get("abenteuer") else {})})
            print("%-4s %-28s S.%s–%s  Blöcke %4d  Überschr. %3d  Werteblöcke %3d  %6d Z." % (book["id"], kid, D["p"], D["pe"], len(D["b"]), nh, len(G), chars))
        INDEX.append(B)
    jsw(os.path.join(OUT, "index.js"), "/* The Spire – Erweiterungsbücher: Übersicht (erzeugt mit plan/spire/build_erw.py) */\nwindow.SP_ERW_BOOKS = %s;\n" % json.dumps(INDEX, ensure_ascii=False, indent=1))
    jsw(os.path.join(OUT, "gegner-erw.js"), "/* The Spire – Werteblöcke der Erweiterungsbücher (Format wie gegner-qs.js; erzeugt mit plan/spire/build_erw.py) */\nwindow.SP_GEGNER = window.SP_GEGNER || [];\nSP_GEGNER.push(\n%s\n);\n" % ",\n".join(json.dumps(g, ensure_ascii=False) for g in ALLG))
    jsw(os.path.join(OUT, "suche.js"), "/* The Spire – Suchindex der Erweiterungsbücher (Überschriften + Anfang des Textes; erzeugt mit plan/spire/build_erw.py) */\nwindow.SP_ERW_SUCHE = %s;\n" % json.dumps(SUCHE, ensure_ascii=False, separators=(",", ":")))
    print("Werteblöcke gesamt", len(ALLG), "Suchzeilen", len(SUCHE))


if __name__ == "__main__":
    main()
