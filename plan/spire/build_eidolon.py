#!/usr/bin/env python3
"""Eidolon Sky: deutsche Markdown-Übersetzung (quellen/spire/de/eid) -> spire/js/data/eid-*.js und gegner-eid.js
Aufruf: python3 -I plan/spire/build_eidolon.py   (aus dem Repo-Wurzelverzeichnis)
Buchseiten: Marke <!-- S. n (PDF m) --> ; Buch-ID sp_a2, PDF-Seite = Buchseite + 2."""
import re, json, os, sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
SRC = os.path.join(ROOT, "quellen/spire/de/eid")
OUT = os.path.join(ROOT, "spire/js/data")
BUCH = "a2"
TERM = tuple('.!?:“”"»«)]*…;')
KLEIN = {"der", "die", "das", "den", "dem", "des", "von", "im", "und", "zu", "um", "mit", "auf", "in", "am", "ein", "eine"}


KLEIN = KLEIN | {"ist", "nie", "nicht", "zum", "zur", "vom", "für", "gegen", "bei", "nach", "über", "oder", "als", "wie", "dein", "mein", "wird", "aus", "vor", "passiert"}


def _cap(w, first):
    lw = w.lower()
    if lw in KLEIN and not first:
        return lw
    for i, ch in enumerate(w):
        if ch.isalpha():
            return w[:i] + ch.upper() + w[i + 1:].lower()
    return w


def pretty(s):
    out = []
    for i, w in enumerate(s.split(" ")):
        if w == "NSC":
            out.append(w); continue
        parts = w.split("-")
        out.append("-".join(_cap(x, i == 0 and j == 0) for j, x in enumerate(parts)))
    return " ".join(out)


def parse(path):
    items = []
    page = None
    pb = False
    last = None
    for raw in open(path, encoding="utf-8"):
        ln = raw.rstrip("\n").strip()
        m = re.match(r"<!-- S\. (-?\d+) \(PDF (\d+)\) -->", ln)
        if m:
            page = int(m.group(1)); pb = True; continue
        if not ln or (pb and re.fullmatch(r"\d+", ln)) or re.fullmatch(r"## \d+( \{.*\})?", ln):
            continue
        h = re.match(r"^(#{1,3}) (.*?)(?: \{farbe=(#\w+)\})?$", ln)
        if h and not ln.startswith("> "):
            items.append({"k": "h", "lvl": len(h.group(1)), "x": h.group(2).strip(), "farbe": h.group(3), "p": page})
            last = None; pb = False; continue
        if ln.startswith("> "):
            t = ln[2:].strip()
            hh = re.match(r"^## (.*)$", t)
            if hh:
                if items and items[-1]["k"] == "qh":
                    items[-1]["x"] += " " + hh.group(1)
                else:
                    items.append({"k": "qh", "x": hh.group(1), "p": page})
                last = None; pb = False; continue
            kind = "q"
        elif ln.startswith("• "):
            t = ln[2:].strip(); kind = "li"
        else:
            t = ln; kind = "p"
        # Absatz über Seitenumbruch fortsetzen
        if pb and last is not None and items and items[-1] is last and last["k"] in ("p", "li", "q") and (kind == "p" or (kind == "q" and last["k"] == "q")):
            lt = last["x"].rstrip()
            if not lt.rstrip("*").endswith(TERM):
                if lt.endswith("-") and not lt.endswith(" -"):
                    last["x"] = lt[:-1] + t
                else:
                    last["x"] = lt + " " + t
                pb = False
                continue
        it = {"k": kind, "x": t, "p": page}
        items.append(it); last = it; pb = False
    return items


def clean_page(items):
    return items


# ---------- Blöcke aus Items ----------
def lead(t):
    m = re.match(r"^\*\*(.+?)\*\*\s*(.*)$", t)
    return m

def stat_id(title):
    s = title.lower()
    for a, b in (("ä", "ae"), ("ö", "oe"), ("ü", "ue"), ("ß", "ss")):
        s = s.replace(a, b)
    return "eid-" + re.sub(r"[^a-z0-9]+", "-", s).strip("-")

GEG = []

def equipment(t):
    """Ausrüstungstext -> Liste aus Text und {x,dmg,tags}"""
    res = []
    pos = 0
    for m in re.finditer(r"([^(),;]+?)\s*\(([^)]*)\)", t):
        pre = t[pos:m.start()]
        name = m.group(1)
        # Präfix vor dem Namen (z. B. ", " oder " oder ")
        mm = re.match(r"^(.*?(?:,\s+| oder | und |; |\.\s+))?(.*)$", name, re.S)
        if mm and mm.group(1):
            res.append(pre + mm.group(1)); name = mm.group(2)
        else:
            if pre: res.append(pre)
        parts = [x.strip() for x in m.group(2).split(",") if x.strip()]
        d = None; tags = []
        for p_ in parts:
            if re.match(r"^W\d+", p_) and d is None: d = p_
            else: tags.append(p_)
        o = {"x": name.strip()}
        if d: o["dmg"] = d
        if tags: o["tags"] = tags
        res.append(o)
        pos = m.end()
    if t[pos:]: res.append(t[pos:])
    # Fließtext-Reste glätten: Adjektive vor dem Gegenstand zum Namen ziehen, Trenner mit Leerzeichen
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

def make_gegner(title, items, i, page):
    fields = {}
    cur = None
    j = i
    while j < len(items) and items[j]["k"] in ("p", "li"):
        t = items[j]["x"]
        m = re.match(r"^\*\*(.+?):\*\*\s*(.*)$", t)
        if m:
            cur = m.group(1).strip().lower(); fields[cur] = m.group(2).strip()
        elif cur:
            fields[cur] = (fields[cur] + " " + t).strip()
        j += 1
    g = {"id": stat_id(title), "t": pretty(title), "buch": BUCH, "p": page, "ort": "Eidolon Sky"}
    if "namen" in fields: g["namen"] = [x.strip() for x in fields["namen"].split(",")]
    if "beschreibung" in fields: g["beschr"] = [x.strip() for x in fields["beschreibung"].split(";")]
    s = fields.get("schwierigkeit", "0")
    mk = re.match(r"^(\d+)", s)
    g["schw"] = {"k": mk.group(1) if mk else s, "x": s}
    w = fields.get("widerstand", "0")
    nums = [int(x) for x in re.findall(r"\d+", w.split("im")[0] if " im " in w else w)]
    g["wid"] = {"werte": nums or [0]}
    if len(w.strip()) > 0 and not re.fullmatch(r"[\d,\s]+", w): g["wid"]["x"] = w
    g["ausr"] = equipment(fields.get("ausrüstung", ""))
    if "besonderes" in fields: g["bes"] = fields["besonderes"]
    return g, j


def build_blocks(items, tabid):
    """Items eines Abschnitts -> Blockliste (Format blk())"""
    blocks = []
    i = 0
    buf_hw, buf_li, buf_q = [], [], []

    def flush():
        nonlocal buf_hw, buf_li
        if buf_hw:
            blocks.append({"t": "hw", "x": buf_hw}); buf_hw = []
        if buf_li:
            blocks.append({"t": "szenen", "x": buf_li}); buf_li = []

    while i < len(items):
        it = items[i]
        k = it["k"]
        if k == "h":
            flush()
            if it["lvl"] == 3:
                g, j = make_gegner(it["x"], items, i + 1, it["p"])
                GEG.append(g)
                blocks.append({"t": "gegner", "id": g["id"]})
                i = j; continue
            txt = it["x"]; i += 1
            while i < len(items) and items[i]["k"] == "h" and items[i]["lvl"] == it["lvl"] and items[i]["farbe"] == it["farbe"]:
                txt += " – " + items[i]["x"]; i += 1
            blocks.append({"t": "h", "x": pretty(txt), "p": it["p"]}); continue
        if k == "qh":
            flush()
            title = it["x"]; i += 1; body = []
            while i < len(items) and items[i]["k"] == "q":
                body.append(items[i]["x"]); i += 1
            blocks.append({"t": "schwarz", "h": pretty(title), "b": body, "p": it["p"]}); continue
        if k == "q":
            flush()
            body = []
            while i < len(items) and items[i]["k"] == "q":
                body.append(items[i]["x"]); i += 1
            blocks.append({"t": "schwarz", "b": body}); continue
        if k == "li":
            if buf_hw:
                blocks.append({"t": "hw", "x": buf_hw}); buf_hw = []
            buf_li.append(it["x"]); i += 1; continue
        if k == "p":
            m = lead(it["x"])
            if m and len(m.group(1)) < 120 and m.group(2) and m.group(1).rstrip().endswith((".", ",", "!", "?")):
                if buf_li:
                    blocks.append({"t": "szenen", "x": buf_li}); buf_li = []
                buf_hw.append({"k": m.group(1).rstrip("."), "x": m.group(2), "p": it["p"]}); i += 1; continue
            q = re.match(r"^\*(Warum|Was|Wer|Wie|Wo)[^*]*\?\*\s*(.*)$", it["x"])
            flush()
            blocks.append(it["x"]); i += 1; continue
        i += 1
    flush()
    # Kasten, der mitten in einen Absatz gerutscht ist, hinter den fortgesetzten Absatz setzen
    n = 0
    while n + 2 < len(blocks):
        a, b2, c = blocks[n], blocks[n + 1], blocks[n + 2]
        if isinstance(a, str) and isinstance(c, str) and isinstance(b2, dict) and b2.get("t") == "schwarz" \
                and not a.rstrip().endswith((".", "!", "?", ":", "\u201c", "\"", ")", "]")):
            blocks[n:n + 3] = [a.rstrip() + " " + c.lstrip(), b2]
        n += 1
    # Frage-Antwort-Absätze der NSC zu einem Block bündeln
    out = []
    for b in blocks:
        if isinstance(b, str):
            m = re.match(r"^\*(.+?\?)\*\s*(.*)$", b)
            if m:
                if out and isinstance(out[-1], dict) and out[-1].get("t") == "qa":
                    out[-1]["x"].append([m.group(1), m.group(2)])
                else:
                    out.append({"t": "qa", "x": [[m.group(1), m.group(2)]]})
                continue
        out.append(b)
    return out


def split_sections(items):
    """Zerlegt in Abschnitte nach roten Überschriften (##, #9c1837) und Kapiteln (#)."""
    secs = []
    cur = None
    for it in items:
        if it["k"] == "h" and it["lvl"] in (1, 2) and it["farbe"] in ("#9c1837",) or (it["k"] == "h" and it["lvl"] == 1):
            if cur and not cur["items"] and it["lvl"] == cur["lvl"] and it["farbe"] == cur["farbe"]:
                cur["t"] += " " + it["x"]; continue
            cur = {"t": it["x"], "lvl": it["lvl"], "farbe": it["farbe"], "p": it["p"], "items": []}
            secs.append(cur)
        elif cur is not None:
            cur["items"].append(it)
        else:
            cur = {"t": "", "lvl": 0, "farbe": None, "p": it.get("p"), "items": [it]}; secs.append(cur)
    return secs


def js(name, var, obj, head):
    path = os.path.join(OUT, name)
    s = "/* " + head + " */\n(window.SP_EID = window.SP_EID || {})[" + json.dumps(var) + "] = " + json.dumps(obj, ensure_ascii=False, indent=1) + ";\n"
    open(path, "w", encoding="utf-8").write(s)
    print(name, len(s))


CUR = {"tab": ""}

def mark(blocks):
    for b in blocks:
        if isinstance(b, dict) and b.get("t") in ("h", "schwarz") and "p" in b:
            b["buch"] = BUCH
    return blocks


def tab_blocks(secs, titles, tab, head_each=False):
    CUR["tab"] = tab
    out = []
    for s in secs:
        out.append({"t": "h", "x": pretty(s["t"]), "p": s["p"]}) if head_each else None
        out += build_blocks(s["items"], tab)
    return mark(out)


def nsc_entry(s):
    t = s["t"]
    en = None
    m = re.search(r"\[\[(.+?)\]\]", t)
    if m:
        en = m.group(1); t = t.replace(m.group(0), "").strip()
    parts = [x.strip() for x in t.split("–")]
    if len(parts) == 2:
        rolle, name = parts
    else:
        rolle, name = "", parts[0]
    name = pretty(name)
    e = {"id": re.sub(r"[^a-z]+", "-", name.lower().replace("ä", "ae").replace("ö", "oe").replace("ü", "ue")).strip("-"), "t": name, "rolle": pretty(rolle) if rolle else "", "p": s["p"]}
    if en: e["en"] = en
    CUR["tab"] = "nsc/" + e["id"]
    e["b"] = mark(build_blocks(s["items"], "nsc"))
    return e


def figuren(items):
    res = []
    cur = None
    mode = None
    stop = False
    for it in items:
        k = it["k"]
        if k == "h" and it["lvl"] == 2 and it["farbe"] == "#9c1837" and "," in it["x"]:
            nm, kl = it["x"].split(",", 1)
            cur = {"id": re.sub(r"[^a-z]+", "-", nm.lower()).strip("-"), "t": pretty(nm.strip()), "klasse": pretty(re.sub(r"^(DER|DIE|DAS) ", "", kl.strip())), "p": it["p"], "intro": [], "bind": [], "ausr": [], "faehig": []}
            res.append(cur); mode = "intro"; stop = False; continue
        if cur is None or stop: continue
        if k == "h":
            if it["lvl"] == 3: stop = True; continue
            x = it["x"]
            mode = {"BINDUNGEN": "bind", "AUSRÜSTUNG": "ausr", "FÄHIGKEITEN": "faehig"}.get(x, mode)
            continue
        t = it["x"]
        m = re.match(r"^\*\*(WIDERSTÄNDE|AUFFRISCHEN|FERTIGKEITEN|DOMÄNEN|DIENSTZEIT):\*\*\s*(.*)$", t)
        if m:
            cur[{"WIDERSTÄNDE": "wid", "AUFFRISCHEN": "auff", "FERTIGKEITEN": "fert", "DOMÄNEN": "dom", "DIENSTZEIT": "dienst"}[m.group(1)]] = m.group(2); mode = "feld"; continue
        if mode == "intro" and t.startswith("*"):
            cur["intro"].append(t.strip("*").strip()); continue
        if mode in ("bind", "ausr") and k in ("li", "p"):
            if k == "li" or not cur[mode]: cur[mode].append(t)
            else: cur[mode][-1] += " " + t
            continue
        if mode == "faehig" and k == "p":
            m = re.match(r"^\*\*(.+?)\*\*\s*(.*)$", t)
            if m:
                rest = m.group(2); tag = None; fl = None
                mt = re.match(r"^\[([^\]]+)\]\s*", rest)
                if mt: tag = mt.group(1); rest = rest[mt.end():]
                mf = re.match(r"^\*(.+?)\*\s*", rest)
                if mf: fl = mf.group(1); rest = rest[mf.end():]
                d = {"t": pretty(m.group(1).rstrip(".:")), "x": rest}
                if tag: d["tag"] = tag
                if fl: d["f"] = fl
                cur["faehig"].append(d)
            elif cur["faehig"]:
                cur["faehig"][-1]["x"] += " " + t
            continue
    for c in res:
        c["intro"] = " ".join(c["intro"]).replace("* *", " ")
    return res


def main():
    e1 = parse(os.path.join(SRC, "e01-kampagne.md"))
    e2 = parse(os.path.join(SRC, "e02-vorgefertigte-charaktere.md"))
    secs = split_sections(e1)
    H = "Eidolon Sky (Kampagnenrahmen, Buch-ID sp_a2, PDF = Buchseite + 2) – deutscher Buchtext aus quellen/spire/de/eid, erzeugt mit plan/spire/build_eidolon.py"
    S = {s["t"]: s for s in secs}
    ue = [S[k] for k in ("EINLEITUNG", "ÜBERBLICK", "WAS GEHT WIRKLICH VOR SICH?", "ABENTEUERAUFBAU", "DIE GESCHICHTE")]
    js("eid-ueberblick.js", "ueberblick", {"p": 1, "b": tab_blocks(ue, None, "ueberblick", True)}, H)
    for key, tit, tab in (("HANDLUNGSSTRANG: DRECK", "Dreck", "dreck"), ("HANDLUNGSSTRANG: DER SCHWAN", "Der Schwan", "schwan"), ("HANDLUNGSSTRANG: DAS EIDOLON LABORE", "Das Eidolon", "eidolon")):
        js("eid-" + tab + ".js", tab, {"p": S[key]["p"], "b": tab_blocks([S[key]], None, tab)}, H)
    nsc = [nsc_entry(s) for s in secs if s["lvl"] == 2 and "–" in s["t"] and s["p"] >= 9 and s["p"] <= 12]
    js("eid-nsc.js", "nsc", {"p": 9, "liste": nsc}, H)
    ende = [S["DAS ENDE DER GESCHICHTE"], S["JUASHA GEGENÜBERTRETEN"]]
    js("eid-ende.js", "ende", {"p": 15, "b": tab_blocks(ende, None, "ende", True)}, H)
    js("eid-figuren.js", "figuren", {"p": 17, "liste": figuren(e2)}, H)
    open(os.path.join(OUT, "gegner-eid.js"), "w", encoding="utf-8").write(
        "/* " + H + "\n   Werteblöcke: Dreck-Süchtige, Der Schwan, Anhänger, Gnolle, Jäger-Wachen (Format wie gegner-qs.js) */\nwindow.SP_GEGNER = window.SP_GEGNER || [];\nSP_GEGNER.push(\n" +
        ",\n".join(" " + json.dumps(g, ensure_ascii=False) for g in GEG) + ");\n")
    print("gegner", len(GEG), [g["id"] for g in GEG])


if __name__ == "__main__":
    main()
