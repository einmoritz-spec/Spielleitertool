"""Erzeugt household/js/data/bogen-layout.js: alle Felder des Household-Bogens in pt (aus dem ausfüllbaren
Original-Bogen) samt Umriss der Kästchen/Symbole als SVG-Pfad (aus dem Hintergrund-PDF), nach Bedeutung geordnet.
Aufruf: python3 tools/household/layout.py <fillable.pdf> <hintergrund.pdf> <hintergrund.json> <ausgabe.js>"""
import sys, json, pikepdf
sys.path.insert(0, __file__.rsplit("/", 1)[0])
from hintergrund import mul, pt, H

def felder(pfad):
    pdf = pikepdf.open(pfad); pg = pdf.pages[0]; out = []
    def voll(a):
        n = []
        while a is not None:
            if '/T' in a: n.append(str(a.T))
            a = a.get('/Parent')
        return '.'.join(reversed(n))
    for a in pg.Annots:
        if a.get('/Subtype') != '/Widget': continue
        r = [float(x) for x in a.Rect]
        ft = a.get('/FT') or (a.Parent.get('/FT') if '/Parent' in a else None)
        out.append(dict(n=voll(a), tx=str(ft) == '/Tx', x0=r[0], y0=H - r[3], x1=r[2], y1=H - r[1]))
    return out

def pfade_d(pfad):
    """Alle gemalten Pfade der Seite mit SVG-Daten in Seitenkoordinaten (y nach unten)."""
    pdf = pikepdf.open(pfad); pg = pdf.pages[0]
    ops = pikepdf.parse_content_stream(pg)
    ctm, stack, d, pts, res = [1, 0, 0, 1, 0, 0], [], [], [], []
    f = lambda v: ("%.2f" % v).rstrip("0").rstrip(".")
    def P(x, y):
        X, Y = pt(ctm, x, y); pts.append((X, H - Y)); return f(X) + " " + f(H - Y)
    cur = None
    for o in ops:
        n = str(o.operator); a = []
        for x in o.operands:
            try: a.append(float(x))
            except Exception: a.append(x)
        if n == 'q': stack.append(ctm[:])
        elif n == 'Q': ctm = stack.pop()
        elif n == 'cm': ctm = mul(a, ctm)
        elif n == 'm': d.append("M" + P(a[0], a[1])); cur = (a[0], a[1])
        elif n == 'l': d.append("L" + P(a[0], a[1])); cur = (a[0], a[1])
        elif n == 'c': d.append("C" + P(a[0], a[1]) + " " + P(a[2], a[3]) + " " + P(a[4], a[5])); cur = (a[4], a[5])
        elif n == 'v': d.append("C" + P(*cur) + " " + P(a[0], a[1]) + " " + P(a[2], a[3])); cur = (a[2], a[3])
        elif n == 'y': d.append("C" + P(a[0], a[1]) + " " + P(a[2], a[3]) + " " + P(a[2], a[3])); cur = (a[2], a[3])
        elif n == 'h': d.append("Z")
        elif n == 're':
            x, y, w, h = a; d.append("M" + P(x, y) + "L" + P(x + w, y) + "L" + P(x + w, y + h) + "L" + P(x, y + h) + "Z")
        elif n in ('S', 's', 'f', 'F', 'f*', 'B', 'B*', 'b', 'b*', 'n'):
            if d and n != 'n':
                xs = [p[0] for p in pts]; ys = [p[1] for p in pts]
                res.append(dict(d="".join(d), b=(min(xs), min(ys), max(xs), max(ys)), op=n))
            d, pts = [], []
    return res

def umriss(P, r, rand=1.6):
    """Größter Pfad innerhalb des Feldes (etwas Rand), bevorzugt gefüllte Flächen."""
    k = [p for p in P if p['b'][0] >= r[0] - rand and p['b'][1] >= r[1] - rand and p['b'][2] <= r[2] + rand and p['b'][3] <= r[3] + rand
         and (p['b'][2] - p['b'][0]) > (r[2] - r[0]) * .35]
    if not k: return None
    k.sort(key=lambda p: -((p['b'][2] - p['b'][0]) * (p['b'][3] - p['b'][1])))
    return k[0]['d']

if __name__ == "__main__":
    fill, bg, bgj, aus = sys.argv[1:5]
    F = felder(fill); P = pfade_d(bg); kopf = json.load(open(bgj))
    rr = lambda f: [round(f['x0'], 2), round(f['y0'], 2), round(f['x1'], 2), round(f['y1'], 2)]
    cb = [f for f in F if not f['tx']]; tx = [f for f in F if f['tx']]
    def box(f, dx=0):
        r = rr(f); r = [r[0] + dx, r[1], r[2] + dx, r[3]]
        return dict(r=r, d=umriss(P, r))
    def bereich(x0, y0, x1, y1, liste): return [f for f in liste if x0 <= f['x0'] and f['x1'] <= x1 and y0 <= f['y0'] and f['y1'] <= y1]
    L = {"W": 841.89, "H": 595.276, "kopf": kopf}
    # Felder (Zusatzpunkt neben der Überschrift) und Fertigkeiten (3 Punkte je Zeile)
    FELD = [("g", "Gesellschaft", 25, 120), ("w", "Wissenschaft", 138, 232), ("k", "Krieg", 250, 345), ("s", "Strasse", 365, 460)]
    L["felder"] = {}
    for key, wort, y0, y1 in FELD:
        dx = kopf[wort]["dx"]
        fp = [f for f in bereich(110, y0, 130, y1, cb) if f['y1'] - f['y0'] > 10][0]
        reihen = {}
        for f in bereich(135, y0, 172, y1, cb): reihen.setdefault(round(f['y0']), []).append(f)
        L["felder"][key] = {"feld": box(fp, dx), "fert": [[box(f) for f in sorted(v, key=lambda f: f['x0'])] for k, v in sorted(reihen.items())]}
    L["asse"] = [box(f) for f in sorted(bereich(240, 55, 360, 95, cb), key=lambda f: f['x0'])]
    L["anstand"] = [box(f) for f in sorted(bereich(460, 50, 600, 80, cb), key=lambda f: f['x0'])]
    L["stress"] = [box(f) for f in sorted(bereich(440, 125, 615, 150, cb), key=lambda f: f['x0'])]
    L["zfarbe"] = [box(f) for f in sorted(bereich(512, 190, 530, 255, cb), key=lambda f: f['y0'])]
    L["zkasten"] = [box(f) for f in sorted(bereich(600, 190, 620, 285, cb), key=lambda f: f['y0'])]
    L["zeilen_z"] = [rr(f) for f in sorted(bereich(440, 248, 605, 280, tx), key=lambda f: f['y0'])]
    L["manoever"] = []
    for y0, y1 in ((310, 356), (360, 406), (410, 456)):
        L["manoever"].append({"z": [rr(f) for f in sorted(bereich(195, y0, 400, y1, tx), key=lambda f: f['y0'])],
                              "kreis": box(bereich(386, y0, 410, y1, cb)[0]),
                              "farben": [box(f) for f in sorted(bereich(350, y0, 397, y1, cb), key=lambda f: f['x0'])]})
    L["merkmale"] = [rr(f) for f in sorted(bereich(195, 130, 400, 280, tx), key=lambda f: f['y0'])]
    L["ausr_n"] = [rr(f) for f in sorted(bereich(20, 495, 136, 570, tx), key=lambda f: f['y0'])]
    L["ausr_t"] = [rr(f) for f in sorted(bereich(136, 495, 400, 570, tx), key=lambda f: f['y0'])]
    L["wohlstand"] = [box(f) for f in sorted(bereich(225, 465, 312, 495, cb), key=lambda f: (f['x0'] > 260, f['y0']))]
    L["muenzen"] = rr([f for f in tx if f['n'] == 'Coin'][0])
    L["portraet"] = rr([f for f in cb if 'Immagine' in f['n']][0])
    L["person"] = [rr(f) for f in sorted(bereich(675, 220, 820, 306, tx), key=lambda f: f['y0'])]
    L["vertrag1"] = [rr(f) for f in sorted(bereich(440, 310, 616, 426, tx), key=lambda f: f['y0'])]
    L["vertrag2"] = [rr(f) for f in sorted(bereich(440, 452, 616, 568, tx), key=lambda f: f['y0'])]
    L["vkreis"] = [box(f) for f in sorted(bereich(430, 355, 455, 520, cb), key=lambda f: f['y0'])]
    L["ttt"] = [box(f) for f in sorted(bereich(485, 428, 590, 450, cb), key=lambda f: f['x0'])]
    L["erinnerungen"] = [rr(f) for f in sorted(bereich(645, 350, 815, 470, tx), key=lambda f: f['y0'])]
    L["erfahrungen"] = [rr(f) for f in sorted(bereich(635, 505, 818, 570, tx), key=lambda f: f['y0'])]
    fehlt = [k for k, v in L.items() if isinstance(v, list) and any(isinstance(x, dict) and not x.get('d') for x in v)]
    print("ohne Umriss:", fehlt)
    for k, v in L.items():
        if isinstance(v, list): print(k, len(v))
    open(aus, "w").write("/* Erzeugt von tools/household/layout.py – nicht von Hand ändern. Maße in pt (A4 quer), y von oben. */\nwindow.HH_BOGEN_LAYOUT = " + json.dumps(L, separators=(",", ":")) + ";\n")
