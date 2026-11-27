"""Baut den Hintergrund des Household-Charakterbogens aus dem Original (Character_Sheet_EN.pdf):
- entfernt alle Texte (die deutschen Beschriftungen setzt das Tool darüber),
- entfernt die kurzen Linien hinter den Zustandsnamen (das Tool zieht sie passend zur deutschen Wortlänge),
- verschiebt bei den vier Feld-Überschriften Zierraute, Linie und Farbsymbole passend zur deutschen Wortbreite.
Ausgabe: <aus>.pdf (Vektor, für den PDF-Export) und die Maße der Überschriften als JSON (für das Tool).
Aufruf: python3 tools/household/hintergrund.py <bogen.pdf> <hh-titel.otf> <aus-ohne-endung>"""
import sys, json, pikepdf
from fontTools.ttLib import TTFont

H = 595.276
def mul(a, b): return [a[0]*b[0]+a[1]*b[2], a[0]*b[1]+a[1]*b[3], a[2]*b[0]+a[3]*b[2], a[2]*b[1]+a[3]*b[3], a[4]*b[0]+a[5]*b[2]+b[4], a[4]*b[1]+a[5]*b[3]+b[5]]
def inv(m):
    a, b, c, d, e, f = m; det = a*d - b*c
    return [d/det, -b/det, -c/det, a/det, (c*f - d*e)/det, (b*e - a*f)/det]
def pt(m, x, y): return (m[0]*x + m[2]*y + m[4], m[1]*x + m[3]*y + m[5])

def ohne_text(ops):
    out, t = [], False
    for o in ops:
        n = str(o.operator)
        if n == 'BT': t = True; continue
        if n == 'ET': t = False; continue
        if not t: out.append(o)
    return out

def pfade(ops):
    """Liste gemalter Pfade: (start, ende, ctm, bbox in Seitenkoordinaten, y von oben)."""
    ctm, stack, cur, start, res = [1, 0, 0, 1, 0, 0], [], [], None, []
    for i, o in enumerate(ops):
        n = str(o.operator); a = []
        for x in o.operands:
            try: a.append(float(x))
            except Exception: a.append(x)
        if n == 'q': stack.append(ctm[:])
        elif n == 'Q': ctm = stack.pop()
        elif n == 'cm': ctm = mul(a, ctm)
        elif n in ('m', 'l', 'c', 'v', 'y', 're'):
            if start is None: start = i
            if n == 're': cur += [pt(ctm, a[0], a[1]), pt(ctm, a[0] + a[2], a[1] + a[3])]
            else:
                for k in range(0, len(a), 2): cur.append(pt(ctm, a[k], a[k + 1]))
        elif n in ('S', 's', 'f', 'F', 'f*', 'B', 'B*', 'b', 'b*', 'n'):
            if cur and n != 'n':
                xs = [p[0] for p in cur]; ys = [H - p[1] for p in cur]
                res.append(dict(s=start, e=i, ctm=ctm[:], b=(min(xs), min(ys), max(xs), max(ys))))
            cur, start = [], None
    return res

def drin(b, box): return b[0] >= box[0] and b[1] >= box[1] and b[2] <= box[2] and b[3] <= box[3]

if __name__ == "__main__":
    src, titel, aus = sys.argv[1:4]
    tf = TTFont(titel); cm = tf.getBestCmap(); hm = tf['hmtx']
    breite = lambda txt, sz: sum(hm[cm[ord(c)]][0] for c in txt) * sz / 1000
    pdf = pikepdf.open(src); pg = pdf.pages[0]
    ops = ohne_text(pikepdf.parse_content_stream(pg))
    # Formulare (Zierelemente) ebenfalls ohne Text
    seen = set()
    def walk(res):
        for k, v in res.get('/XObject', {}).items():
            if v.objgen in seen or v.get('/Subtype') != '/Form': continue
            seen.add(v.objgen); v.write(pikepdf.unparse_content_stream(ohne_text(pikepdf.parse_content_stream(v))))
            if '/Resources' in v: walk(v.Resources)
    walk(pg.Resources)
    P = pfade(ops)
    weg, trafo = set(), {}
    # 1) kurze Linien hinter den Zustandsnamen
    for p in P:
        b = p['b']
        if abs(b[1] - b[3]) < .5 and 440 < b[0] and b[2] < 603 and any(abs(b[1] - y) < .6 for y in (205.9, 220.1, 234.2, 248.4)):
            weg.update(range(p['s'], p['e'] + 1))
    # 2) Feld-Überschriften: Text endet im Original bei 94,3; davor sitzt die Zierraute 11,5 pt vor dem Textanfang
    KOPF = [("Gesellschaft", 25, 60), ("Wissenschaft", 138, 165), ("Krieg", 250, 280), ("Strasse", 365, 392)]
    masse = {}
    for wort, y0, y1 in KOPF:
        w = breite(wort, 20)
        start = 94.3 - w; dx = 0
        if start - 11.5 < 6: start = 17.5; dx = start + w - 94.3
        teile = [p for p in P if drin(p['b'], (0, y0, 200, y1))]
        raute = [p for p in teile if p['b'][2] - p['b'][0] < 8 and p['b'][0] < 70]
        linie = [p for p in teile if p['b'][2] - p['b'][0] > 60]
        farbe = [p for p in teile if p['b'][0] >= 99 and p['b'][2] < 128 and p['b'][3] - p['b'][1] > 6]
        r0 = min(p['b'][0] for p in raute); dorn = (start - 11.5) - r0
        L0, L1 = linie[0]['b'][0], linie[0]['b'][2]
        nL0, nL1 = L0 + dorn, L1 + dx
        sx = (nL1 - nL0) / (L1 - L0)
        for p in raute: trafo[p['s']] = (p, [1, 0, 0, 1, dorn, 0])
        for p in farbe: trafo[p['s']] = (p, [1, 0, 0, 1, dx, 0])
        for p in linie: trafo[p['s']] = (p, [sx, 0, 0, 1, nL0 - L0 * sx, 0])
        masse[wort] = dict(x=round(start, 2), dx=round(dx, 2))
        print(wort, round(w, 1), "Start", round(start, 1), "Farben +", round(dx, 1), "Raute", round(dorn, 1))
    out = []
    for i, o in enumerate(ops):
        if i in weg: continue
        if i in trafo:
            p, T = trafo[i]
            M = mul(mul(p['ctm'], T), inv(p['ctm']))
            out.append(pikepdf.ContentStreamInstruction([], pikepdf.Operator('q')))
            out.append(pikepdf.ContentStreamInstruction([round(v, 5) for v in M], pikepdf.Operator('cm')))
        out.append(o)
        for s, (p, T) in trafo.items():
            if p['e'] == i: out.append(pikepdf.ContentStreamInstruction([], pikepdf.Operator('Q')))
    pg.Contents = pdf.make_stream(pikepdf.unparse_content_stream(out))
    # Formularfelder/Anmerkungen gibt es im Original nicht; Metadaten schlank
    pdf.save(aus + ".pdf", compress_streams=True, object_stream_mode=pikepdf.ObjectStreamMode.generate)
    json.dump(masse, open(aus + ".json", "w"))
