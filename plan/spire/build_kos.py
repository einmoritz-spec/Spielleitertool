#!/usr/bin/env python3
"""The Kings of Silver: deutsche Markdown-Übersetzung (quellen/spire/de/kos) -> spire/js/data/kos-*.js und gegner-kos.js
Aufruf: python3 -I plan/spire/build_kos.py   (aus dem Repo-Wurzelverzeichnis)
Buchseiten: Marke <!-- S. n (PDF m) --> ; Buch-ID sp_a1, PDF-Seite = Buchseite + 2."""
import re, json, os, sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
SRC = os.path.join(ROOT, "quellen/spire/de/kos")
OUT = os.path.join(ROOT, "spire/js/data")
BUCH = "a1"
TERM = tuple('.!?:“”"»«)]*…;')
KLEIN = {"der", "die", "das", "den", "dem", "des", "von", "im", "und", "zu", "um", "mit", "auf", "in", "am", "ein", "eine"}


KLEIN = KLEIN | {"de", "ist", "nie", "nicht", "zum", "zur", "vom", "für", "gegen", "bei", "nach", "über", "oder", "als", "wie", "dein", "mein", "wird", "aus", "vor", "passiert"}


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
    prev = ""
    for i, w in enumerate(s.split(" ")):
        first = (i == 0 or prev == "\u2013"); prev = w
        if "/" in w:
            out.append("/".join(_cap(y, first) for y in w.split("/"))); continue
        if w == "NSC":
            out.append(w); continue
        if w.upper().startswith("NSC-"):
            out.append("NSC-" + _cap(w[4:], False)); continue
        if w.upper().startswith("FUSSSOLDATEN"):
            out.append("Fußsoldaten" + w[12:].lower()); continue
        parts = w.split("-")
        out.append("-".join("\u2019".join(_cap(y, first and j == 0) for y in x.split("\u2019")) for j, x in enumerate(parts)))
    return " ".join(out).replace("Heisst", "Heißt")


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
        # Fortsetzung eines Aufzählungspunkts hinter einem Kasten (Seitenumbruch)
        jj = len(items) - 1
        while jj >= 0 and items[jj]["k"] in ("q", "qh"): jj -= 1
        if pb and kind == "p" and t[:1].islower() and 0 <= jj < len(items) - 1 and items[jj]["k"] in ("p", "li") and not items[jj]["x"].rstrip("*").endswith(TERM):
            items[jj]["x"] = items[jj]["x"].rstrip() + " " + t; pb = False; continue
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
    return "kos-" + re.sub(r"[^a-z0-9]+", "-", s).strip("-")

GEG = []
CUR = {"tab": ""}

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
    g = {"id": stat_id(title), "t": pretty(title), "buch": BUCH, "p": page, "ort": "The Kings of Silver", "ziel": "abenteuer/kings/" + CUR["tab"]}
    if "namen" in fields:
        nraw = fields["namen"]
        ns = [x.strip() for x in (nraw.split(";") if ";" in nraw else nraw.split(","))]
        en = [m for x in ns for m in re.findall(r"\[\[(.+?)\]\]", x)]
        g["namen"] = [re.sub(r"\s*\[\[.+?\]\]", "", x) for x in ns]
        if en: g["namenEn"] = en
    if "beschreibung" in fields: g["beschr"] = [x.strip() for x in fields["beschreibung"].split(";")]
    s = fields.get("schwierigkeit", "0")
    mk = re.match(r"^(\d+)", s)
    g["schw"] = {"k": mk.group(1) if mk else s, "x": s}
    w = fields.get("widerstand", "0")
    nums = [int(x) for x in re.findall(r"\d+", w.split("im")[0] if " im " in w else w)]
    g["wid"] = {"werte": nums or [0]}
    if len(w.strip()) > 0 and not re.fullmatch(r"[\d,\s]+", w): g["wid"]["x"] = w
    g["ausr"] = equipment(fields.get("ausrüstung", ""))
    bes = fields.get("besonderes", "")
    r = fields.get("rüstung", "").strip()
    if r and r != "0":
        mr = re.match(r"^(\d+)\s*\((.*)\)\s*$", r)
        if mr and mr.group(1) != "0":
            g["ausr"] = [{"x": mr.group(2).strip(), "tags": ["Rüstung " + mr.group(1)]}] + ([", "] if g["ausr"] else []) + g["ausr"]
        else:
            bes = ("Rüstung: " + r + (". " if not r.endswith(".") else " ") + bes).strip()
    if bes: g["bes"] = bes
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
            txt = it["x"]; j = i + 1
            while j < len(items) and items[j]["k"] == "h" and items[j]["lvl"] == it["lvl"] and items[j]["farbe"] == it["farbe"]:
                txt += " " + items[j]["x"]; j += 1
            if it["lvl"] == 3 or (j < len(items) and items[j]["k"] == "p" and re.match(r"^\*\*(Namen|Widerstand):\*\*", items[j]["x"])):
                g, j2 = make_gegner(txt, items, j, it["p"])
                GEG.append(g)
                blocks.append({"t": "gegner", "id": g["id"]})
                i = j2; continue
            i = j
            rows = []
            while i < len(items) and items[i]["k"] == "p" and re.match(r"^\d+\. ", items[i]["x"]):
                rows.append(re.sub(r"^\d+\. ", "", items[i]["x"])); i += 1
            if rows:
                blocks.append({"t": "w10", "h": pretty(txt), "rows": rows}); continue
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
    n = 0
    while n + 2 < len(blocks):
        a, b2, c = blocks[n], blocks[n + 1], blocks[n + 2]
        if isinstance(a, dict) and a.get("t") == "szenen" and isinstance(b2, dict) and b2.get("t") == "schwarz" and isinstance(c, dict) and c.get("t") == "szenen":
            blocks[n:n + 3] = [{"t": "szenen", "x": a["x"] + c["x"]}, b2]
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
            if out and isinstance(out[-1], dict) and out[-1].get("t") == "qa" and not re.match(r"^\*(?!\*)", b):
                out[-1]["x"][-1][1] += "\n\n" + b; continue
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
    s = "/* " + head + " */\n(window.SP_KOS = window.SP_KOS || {})[" + json.dumps(var) + "] = " + json.dumps(obj, ensure_ascii=False, indent=1) + ";\n"
    open(path, "w", encoding="utf-8").write(s)
    print(name, len(s))


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


NSC_NAMEN = {  # Anzeigename (Buchschreibweise), englischer Originalname
    "LAIENDIAKON SCHREITET-HARMONISCH-HINAUS": ("Laiendiakon Schreitet-harmonisch-hinaus", "Strides-Out-Harmonious"),
    "HESTRA WANDER-DER-VERLORENE": ("Hestra Wander-der-Verlorene", "Wander-the-Lost"),
    "LOQ WANDELT-AUF-LICHT": ("Loq Wandelt-auf-Licht", "Walks-On-Light"),
    "CAPTAIN NOELLE LACOSTRA": ("Captain Noelle LaCostra", None),
    "MESYE SO": ("Mesye So", None),
}


def slug(x):
    x = x.lower()
    for a, b in (("ä", "ae"), ("ö", "oe"), ("ü", "ue"), ("ß", "ss")):
        x = x.replace(a, b)
    return re.sub(r"[^a-z]+", "-", x).strip("-")


def nsc_kos(s):
    rolle, name = [x.strip() for x in s["t"].split("–", 1)]
    nm, en = NSC_NAMEN[name]
    e = {"id": slug(nm), "t": nm, "rolle": pretty(rolle), "p": s["p"]}
    if en: e["en"] = en
    CUR["tab"] = "personen/" + e["id"]
    items = s["items"]
    neben = None
    for n, it in enumerate(items):
        if it["k"] == "qh" and it["x"].strip().upper() == "NEBENFIGUREN":
            m = n + 1
            while m < len(items) and items[m]["k"] == "q": m += 1
            neben = {"t": "Nebenfiguren", "p": it["p"], "paras": [x["x"] for x in items[n + 2 - 1:m]]}
            items = items[:n] + items[m:]
            break
    e["b"] = mark(build_blocks(items, "personen"))
    return e, neben


def karten_aus(items, kopf_lvl=2):
    """Überschrift + Absätze -> [{k, x, p}] (Orte, Enden)"""
    intro, kk, cur = [], [], None
    i = 0
    while i < len(items):
        it = items[i]
        if it["k"] == "h":
            txt = it["x"]; i += 1
            while i < len(items) and items[i]["k"] == "h" and items[i]["lvl"] == it["lvl"]:
                txt += " " + items[i]["x"]; i += 1
            cur = {"k": pretty(txt), "x": "", "p": it["p"]}; kk.append(cur); continue
        if cur is None: intro.append(it["x"])
        else: cur["x"] = (cur["x"] + "\n\n" + it["x"]).strip() if cur["x"] else it["x"]
        i += 1
    return intro, kk


def gruppen(items):
    """Personal des Manticore: Einleitung + Gruppenkarten (**3x Barpersonal** + • Zeilen)"""
    intro, grp, cur = [], [], None
    for it in items:
        m = re.match(r"^\*\*(\d+x .+?)\*\*\s*(.*)$", it["x"]) if it["k"] == "p" else None
        if m:
            cur = {"h": m.group(1), "li": []}
            if m.group(2): cur["z"] = m.group(2)
            grp.append(cur); continue
        if it["k"] == "li" and cur is not None:
            cur["li"].append(it["x"]); continue
        if cur is None: intro.append(it["x"])
        else: intro.append(it["x"])  # Nachsatz nach den Gruppen
    return intro, grp


def figuren_kos(items):
    res, cur, mode, stop = [], None, None, False
    for it in items:
        k = it["k"]
        if k == "h" and it["lvl"] == 2 and it["farbe"] == "#9c1837" and ("–" in it["x"] or "," in it["x"]):
            x = it["x"]
            if "–" in x: kl, nm = [q.strip() for q in x.split("–", 1)]
            else: nm, kl = [q.strip() for q in x.split(",", 1)]
            kl = re.sub(r"^(DER|DIE|DAS) ", "", kl)
            cur = {"id": slug(nm), "t": pretty(nm), "klasse": pretty(kl), "p": it["p"], "intro": [], "bind": [], "ausr": [], "kern": [], "fort": []}
            res.append(cur); mode = "intro"; stop = False; continue
        if cur is None or stop: continue
        if k == "h":
            if it["lvl"] == 3: stop = True; continue
            mode = {"BINDUNGEN": "bind", "AUSRÜSTUNG": "ausr", "KERNFÄHIGKEITEN": "kern", "FORTSCHRITTE": "fort"}.get(it["x"], mode)
            continue
        t = it["x"]
        m = re.match(r"^\*\*(WIDERSTÄNDE|AUFFRISCHEN|FERTIGKEITEN|DOMÄNEN|KNIFFE|DIENSTZEIT):\*\*\s*(.*)$", t)
        if m:
            cur[{"WIDERSTÄNDE": "wid", "AUFFRISCHEN": "auff", "FERTIGKEITEN": "fert", "DOMÄNEN": "dom", "KNIFFE": "kniffe", "DIENSTZEIT": "dienst"}[m.group(1)]] = m.group(2); mode = "feld"; continue
        if mode == "intro" and t.startswith("*"):
            cur["intro"].append(t.strip("*").strip()); continue
        if mode in ("bind", "ausr") and k in ("li", "p"):
            if k == "li" or not cur[mode]: cur[mode].append(t)
            else: cur[mode][-1] += " " + t
            continue
        if mode in ("kern", "fort") and k == "p":
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
                cur[mode].append(d)
            elif cur[mode]:
                cur[mode][-1]["x"] += " " + t
            continue
    for c in res:
        c["intro"] = " ".join(c["intro"]).replace("* *", " ")
    return res


def w10gruppe(blocks):
    out = []
    for b in blocks:
        if isinstance(b, dict) and b.get("t") == "w10":
            if out and isinstance(out[-1], dict) and out[-1].get("t") == "w10k": out[-1]["x"].append(b)
            else: out.append({"t": "w10k", "x": [b]})
        else: out.append(b)
    return out


def main():
    k1 = parse(os.path.join(SRC, "k01-kampagne.md"))
    k2 = parse(os.path.join(SRC, "k02-vorgefertigte-charaktere.md"))
    secs = split_sections(k1)
    H = "The Kings of Silver (Kampagnenrahmen, Buch-ID sp_a1, PDF = Buchseite + 2) – deutscher Buchtext aus quellen/spire/de/kos, erzeugt mit plan/spire/build_kos.py"
    S = {s["t"]: s for s in secs}
    print([s["t"] for s in secs])
    ue = [S[k] for k in ("EINLEITUNG", "DAS SILBERVIERTEL IM ÜBERBLICK", "SO LEITEST DU DIESES SPIEL")]
    js("kos-ueberblick.js", "ueberblick", {"p": 1, "b": tab_blocks(ue, None, "ueberblick", True)}, H)
    zt = S["NÜTZLICHE ZUFALLSTABELLEN FÜR DAS SILBERVIERTEL"]
    js("kos-tabellen.js", "tabellen", {"p": zt["p"], "b": w10gruppe(tab_blocks([zt], None, "tabellen"))}, H)
    js("kos-dossier.js", "dossier", {"p": 6, "liste": [{"src": "kapitel/kos-dossier-S%03d" % p, "p": p} for p in (6, 7, 8)]}, H)
    CUR["tab"] = "manticore"
    ma = S["DAS MANTICORE"]; pe = S["DAS PERSONAL DES MANTICORE"]
    intro, grp = gruppen(pe["items"])
    js("kos-manticore.js", "manticore", {"p": ma["p"], "b": mark([{"t": "h", "x": "Das Manticore", "p": ma["p"]}] + build_blocks(ma["items"], "manticore") + [{"t": "h", "x": "Das Personal des Manticore", "p": pe["p"]}] + intro + [{"t": "grp", "x": grp}])}, H)
    nsc, neben = [], None
    for s in secs:
        if s["lvl"] == 2 and "–" in s["t"] and s["farbe"] == "#9c1837" and 11 <= s["p"] <= 17:
            e, nb = nsc_kos(s); nsc.append(e)
            if nb: neben = nb
    if neben:
        nsc.append({"id": "nebenfiguren", "t": "Nebenfiguren", "rolle": "Am Rande", "p": neben["p"], "b": neben["paras"]})
    js("kos-personen.js", "personen", {"p": 11, "liste": nsc}, H)
    intro, kk = karten_aus(S["ORTE"]["items"])
    js("kos-orte.js", "orte", {"p": 18, "b": intro[:1] + [{"t": "kk", "x": kk}]}, H)
    intro, kk = karten_aus(S["DAS ENDE"]["items"])
    js("kos-ende.js", "ende", {"p": 19, "b": intro + [{"t": "kk", "x": kk}]}, H)
    js("kos-figuren.js", "figuren", {"p": 21, "liste": figuren_kos(k2)}, H)
    open(os.path.join(OUT, "gegner-kos.js"), "w", encoding="utf-8").write(
        "/* " + H + "\n   Werteblöcke der Kampagne (Format wie gegner-qs.js) */\nwindow.SP_GEGNER = window.SP_GEGNER || [];\nSP_GEGNER.push(\n" +
        ",\n".join(" " + json.dumps(g, ensure_ascii=False) for g in GEG) + ");\n")
    print("gegner", len(GEG), [g["id"] for g in GEG])


if __name__ == "__main__":
    main()
