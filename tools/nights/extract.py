#!/usr/bin/env python3
"""Extrahiert eine PDF-Seite in geordnete Blöcke (wörtlicher Text mit Formatierung).
Aufruf als Bibliothek: extract_page(pdf, pageno, png_path) -> dict
Blocktypen: text, readaloud, heading, card (yellow/pink), sidebar, tab, footer-frei.
Inline-Markup im Text: <b> <i> <u> (Link-Unterstreichung) <t> (Zustands-Tag, grün markiert)
"""
import re, html, json, sys
import numpy as np, cv2
S = 250/72.0

def style_of(fontname):
    f = fontname.split('+')[-1]
    return ('Bold' in f, 'Italic' in f or 'Oblique' in f, f)

def detect_cards(png):
    img = cv2.imread(png)
    if img is None: return []
    b, g, r = [img[:, :, i].astype(int) for i in range(3)]
    masks = {
        'yellow': (r > 235) & (g > 222) & (b < 205) & (r - b > 55) & (abs(r-g) < 30),
        'pink':   (r > 225) & (g < 215) & (g > 150) & (b > 150) & (b < 225) & (r - g > 28) & (abs(g-b) < 30),
    }
    out = []
    for kind, m in masks.items():
        m = m.astype(np.uint8)*255
        k = cv2.getStructuringElement(cv2.MORPH_RECT, (int(6*S), int(6*S)))
        m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, k)
        n, lab, stats, _ = cv2.connectedComponentsWithStats(m)
        for i in range(1, n):
            x, y, w, h, a = stats[i]
            if w > 70*S and h > 14*S and a > 0.6*w*h:
                out.append({'kind': kind, 'x0': x/S, 'top': y/S, 'x1': (x+w)/S, 'bottom': (y+h)/S})
    return out

def tag_mask(png):
    img = cv2.imread(png)
    b, g, r = [img[:, :, i].astype(int) for i in range(3)]
    return (abs(r-185) < 25) & (abs(g-207) < 25) & (b < 110)

def lines_of(words):
    """Wörter -> Zeilen: erst nach Mittellinie, dann an Spaltenlücken trennen."""
    for w in words: w['cy'] = (w['top']+w['bottom'])/2
    ws = sorted(words, key=lambda w: w['cy'])
    rows = []
    for w in ws:
        if rows and abs(rows[-1]['cy'] - w['cy']) < 3.2:
            rows[-1]['w'].append(w)
            rows[-1]['cy'] = sum(x['cy'] for x in rows[-1]['w'])/len(rows[-1]['w'])
        else:
            rows.append({'cy': w['cy'], 'w': [w]})
    lines = []
    for r in rows:
        r['w'].sort(key=lambda w: w['x0'])
        seg = [r['w'][0]]
        segs = [seg]
        for w in r['w'][1:]:
            if w['x0'] - seg[-1]['x1'] > 16:
                seg = [w]; segs.append(seg)
            else:
                seg.append(w)
        for sg in segs:
            lines.append({'cy': sum(x['cy'] for x in sg)/len(sg), 'top': min(x['top'] for x in sg), 'bottom': max(x['bottom'] for x in sg),
                          'x0': sg[0]['x0'], 'x1': max(x['x1'] for x in sg), 'words': sg})
    lines.sort(key=lambda l: (round(l['cy']), l['x0']))
    return lines

def runs_markup(words, ulines, tmask):
    """Wörter einer Zeile -> Markup-String."""
    parts = []
    prev_x1 = 0
    for w in words:
        bold, ital, _ = style_of(w['fontname'])
        # Unterstreichung (schwarz) / Tag-Markierung (grün)
        und = False
        for (lx0, lx1, ly) in ulines:
            if abs(ly - w['bottom']) < 3.2 and min(lx1, w['x1']) - max(lx0, w['x0']) > 0.5*(w['x1']-w['x0']):
                und = True; break
        tag = False
        if ital:
            x0, x1 = int(w['x0']*S), int(w['x1']*S)
            y0, y1 = int(w['top']*S), int(w['bottom']*S)
            sub = tmask[max(y0,0):y1, max(x0,0):x1]
            if sub.size and sub.mean() > 0.08: tag = True
        sp = True if not parts else (w['x0'] - prev_x1 > 0.9)
        prev_x1 = w['x1']
        wt = w['text']
        if 'Extras' in w['fontname'] or 'Veneer' in w['fontname']:
            wt = wt.replace('y', '★')
        parts.append((wt, bold, ital, und, tag, sp))
    return parts

def join_parts(parts):
    out = []; cur = None; buf = ''
    for text, b, i, u, t, sp in parts:
        st = (b, i, u, t)
        pre = ' ' if (sp and buf) else ''
        # Satzzeichen/Klammern direkt hinter Auszeichnung: Leerzeichen gehört nicht in die Auszeichnung
        if st != cur:
            if buf: out.append((cur, buf))
            cur = st; buf = text
            out.append(('SP', ' ')) if sp and out else None
        else:
            buf += pre + text
    if buf: out.append((cur, buf))
    return out

def render(runs):
    s = ''
    for st, text in runs:
        if st == 'SP': s += ' '; continue
        b, i, u, t = st
        text = html.escape(text, quote=False)
        if t: text = f'<t>{text}</t>'
        if u: text = f'<u>{text}</u>'
        if i and not t: text = f'<i>{text}</i>'
        if b: text = f'<b>{text}</b>'
        s += text
    return s

def dehyphen(lines_txt):
    """Zeilen (mit Markup) zu Absatztext; Silbentrennung am Zeilenende auflösen."""
    out = ''
    for k, ln in enumerate(lines_txt):
        ln = ln.rstrip()
        if not out:
            out = ln; continue
        m = re.search(r'(\w)-(</[a-z]+>)*$', out)
        nxt = re.sub(r'^(<[a-z]+>)*', '', ln)
        if m and nxt[:1].islower():
            out = re.sub(r'-((?:</[a-z]+>)*)$', r'\1', out)
            # öffnende Tags der Folgezeile entfernen, wenn gleiche Auszeichnung weiterläuft
            out = out + ln
        else:
            out = out + ' ' + ln
    # geschlossene und gleich wieder geöffnete Tags verschmelzen
    for tg in 'biut':
        out = re.sub(rf'</{tg}> <{tg}>', ' ', out)
        out = re.sub(rf'</{tg}><{tg}>', '', out)
    return re.sub(r'\s+', ' ', out).strip()

def classify_font(fonts):
    f = max(set(fonts), key=fonts.count)
    return f

def extract_page(pdfpage, png_path, pageno):
    W, H = pdfpage.width, pdfpage.height
    def straight(c):
        m = c.get('matrix') or (1, 0, 0, 1, 0, 0)
        return abs(m[1]) < 0.01 and abs(m[2]) < 0.01 and m[0] > 0
    tilted = [c for c in pdfpage.chars if not straight(c) and c.get('upright', True) is not None]
    tabch = [c for c in pdfpage.chars if not c.get('upright', True)]
    clean = pdfpage.filter(lambda o: o.get('object_type') != 'char' or (straight(o) and o.get('upright', True)))
    allw = clean.extract_words(extra_attrs=['fontname', 'size', 'upright'], x_tolerance=1.4, y_tolerance=2, keep_blank_chars=False)
    words = []; tabs = []; footers = []
    for w in allw:
        fn = w['fontname'].split('+')[-1]
        if w['size'] < 7 and 'Helvetica' in fn: continue   # Wasserzeichen
        if not w['upright']:
            tabs.append(w); continue
        words.append(w)
    # Fußzeile: unterste Zeile mit Seitenzahl
    foot = [w for w in words if w['top'] > H*0.945]
    words = [w for w in words if w['top'] <= H*0.945]
    cards = detect_cards(png_path)
    tmask = tag_mask(png_path)
    ulines = [(l['x0'], l['x1'], l['top']) for l in pdfpage.lines
              if abs(l['top']-l['bottom']) < 0.5 and (l['x1']-l['x0']) > 6 and (l.get('stroking_color') in ((0.0,0.0,0.0),(0.0,),(0,),0,None) or True)
              and not (l.get('stroking_color') and len(l['stroking_color'])==3 and abs(l['stroking_color'][0]-0.725)<0.05)]
    elements = []
    # Karten
    used = set()
    for c in sorted(cards, key=lambda c: (c['top'], c['x0'])):
        inside = [w for w in words if id(w) not in used and c['x0']-1 <= (w['x0']+w['x1'])/2 <= c['x1']+1 and c['top']-1 <= (w['top']+w['bottom'])/2 <= c['bottom']+1]
        for w in inside: used.add(id(w))
        if not inside: continue
        lns = lines_of(inside)
        txt = dehyphen([join_render(l, ulines, tmask) for l in lns])
        elements.append({'type': 'card', 'kind': c['kind'], 'x0': c['x0'], 'x1': c['x1'], 'top': c['top'], 'bottom': c['bottom'], 'text': txt})
    rest = [w for w in words if id(w) not in used]
    lns = lines_of(rest)
    # Absätze
    paras = []
    cur = None
    def _colof(l): return 0 if l['x0'] < W*0.49 else 1
    lns = sorted(lns, key=lambda l: (_colof(l), l['cy']))
    for ln in lns:
        fonts = [w['fontname'].split('+')[-1] for w in ln['words']]
        sz = round(np.median([w['size'] for w in ln['words']]), 1)
        fam = classify_font(fonts)
        col = 0 if ln['x0'] < W*0.49 else 1
        full = ln['x0'] < W*0.45 and ln['x1'] > W*0.55
        kind = 'text'
        if 'Champion' in fam: kind = 'heading'
        elif 'Courier' in fam: kind = 'readaloud'
        plain = re.sub(r'<[^>]+>', '', join_render(ln, ulines, tmask))
        letters = re.sub(r'[^A-Za-zÄÖÜäöüß]', '', plain)
        if kind == 'text' and len(letters) >= 3 and letters.isupper(): kind = 'subheading'
        newp = cur is None or cur['col'] != col or cur['kind'] != kind or abs(cur['sz'] - sz) > 1.6 \
            or ln['top'] - cur['last_bottom'] > 0.45*sz + 0.2
        if kind == 'heading' and cur is not None and cur['kind'] == 'heading' and ln['top'] - cur['last_bottom'] < 3 and cur['col'] == col:
            newp = False
        if newp:
            cur = {'col': col, 'kind': kind, 'sz': sz, 'fam': fam, 'full': full, 'x0': ln['x0'], 'x1': ln['x1'], 'top': ln['top'], 'bottom': ln['bottom'], 'lines': [], 'last_bottom': ln['bottom']}
            paras.append(cur)
        cur['lines'].append(join_render(ln, ulines, tmask))
        cur['bottom'] = max(cur['bottom'], ln['bottom']); cur['last_bottom'] = ln['bottom']
        cur['x1'] = max(cur['x1'], ln['x1']); cur['x0'] = min(cur['x0'], ln['x0'])
        cur['full'] = cur['full'] or full
    for p in paras:
        txt = dehyphen(p['lines'])
        el = {'type': p['kind'], 'x0': p['x0'], 'x1': p['x1'], 'top': p['top'], 'bottom': p['bottom'], 'text': txt, 'sz': p['sz'], 'font': p['fam'], 'full': p['full']}
        elements.append(el)
    # Reihenfolge: Bänder durch Vollbreiten-Elemente
    for e in elements:
        e['col'] = 0 if (e['x0']+e['x1'])/2 < W*0.5 else 1
        if e.get('full') or (e['x1']-e['x0']) > W*0.6: e['col'] = -1
    fulls = sorted([e for e in elements if e['col'] == -1], key=lambda e: e['top'])
    others = [e for e in elements if e['col'] != -1]
    ordered = []
    edges = [-1] + [f['top'] for f in fulls] + [10**6]
    for bi in range(len(edges)-1):
        lo, hi = edges[bi], edges[bi+1]
        band = [e for e in others if lo <= e['top'] < hi and not (bi > 0 and e['top'] < lo)]
        for col in (0, 1):
            ordered += sorted([e for e in band if e['col'] == col], key=lambda e: e['top'])
        if bi < len(fulls): ordered.append(fulls[bi])
    tabtxt = ''
    tl = [c for c in pdfpage.chars if abs((c.get('matrix') or (1,0,0,1))[1]) > 0.9 and 'Champion' in c['fontname']]
    if tl:
        tl = sorted(tl, key=lambda c: c['top'])
        tabtxt = ''.join(c['text'] for c in tl).strip()
        tabtxt = re.sub(r'\s+', ' ', tabtxt)
    ftxt = ' '.join(w['text'] for w in sorted(foot, key=lambda w: w['x0']))
    return {'page': pageno, 'footer': ftxt, 'tab': tabtxt, 'tilted': tilted_labels(tilted), 'figures': page_figures(pdfpage), 'blocks': [
        {k: (round(v, 1) if isinstance(v, float) else v) for k, v in e.items() if k not in ('col', 'full')} for e in ordered]}

import math
def tilted_labels(chars):
    """Gekippte Zeichen (nicht 90°-Drehung) zu Beschriftungen gruppieren (Eisberg-Polaroids)."""
    cs = [c for c in chars if c['text'].strip() and not (abs((c.get('matrix') or (1,0,0,1))[1]) > 0.9)]
    if not cs: return []
    for c in cs: c['cx'] = (c['x0']+c['x1'])/2; c['cy'] = (c['top']+c['bottom'])/2
    groups = []
    for c in sorted(cs, key=lambda c: (c['cx'], c['cy'])):
        hit = []
        for g in groups:
            if any(math.hypot(c['cx']-d['cx'], c['cy']-d['cy']) < 14 for d in g): hit.append(g)
        if not hit: groups.append([c])
        else:
            hit[0].append(c)
            for g in hit[1:]:
                hit[0].extend(g); groups.remove(g)
    out = []
    for g in groups:
        if len(g) < 3: continue
        ang = sum(math.atan2((c.get('matrix') or (1,0,0,1))[1], (c.get('matrix') or (1,0,0,1))[0]) for c in g)/len(g)
        ca, sa = math.cos(-ang), math.sin(-ang)
        for c in g:
            c['rx'] = c['cx']*ca - c['cy']*sa; c['ry'] = c['cx']*sa + c['cy']*ca
        g.sort(key=lambda c: (round(c['ry']/5), c['rx']))
        lines = []
        for c in g:
            if lines and abs(lines[-1][0]['ry']-c['ry']) < 4: lines[-1].append(c)
            else: lines.append([c])
        txt = ' '.join(''.join(c['text'] for c in sorted(l, key=lambda c: c['rx'])) for l in lines)
        out.append({'text': re.sub(r'\s+', ' ', txt).strip(), 'x0': round(min(c['x0'] for c in g),1), 'x1': round(max(c['x1'] for c in g),1),
                    'top': round(min(c['top'] for c in g),1), 'bottom': round(max(c['bottom'] for c in g),1), 'angle': round(math.degrees(ang),1), 'font': g[0]['fontname'].split('+')[-1]})
    return out

def page_figures(pdfpage):
    W, H = pdfpage.width, pdfpage.height
    figs = []
    for im in pdfpage.images:
        x0, x1 = max(im['x0'], 0), min(im['x1'], W); y0, y1 = max(im['top'], 0), min(im['bottom'], H)
        w, h = x1-x0, y1-y0
        if w < 60 or h < 40: continue
        if w*h > 0.8*W*H: continue
        figs.append({'x0': round(x0,1), 'top': round(y0,1), 'x1': round(x1,1), 'bottom': round(y1,1)})
    return figs

def join_render(ln, ulines, tmask):
    return render(join_parts(runs_markup(ln['words'], ulines, tmask))).strip()

if __name__ == '__main__':
    import pdfplumber
    P = "/mnt/user-data/uploads/City_of_Mist___Abenteuer___Nachts_in_Payne_Town__DE_.pdf"
    pages = [int(a) for a in sys.argv[1:]]
    with pdfplumber.open(P) as pdf:
        for n in pages:
            r = extract_page(pdf.pages[n-1], f'/home/claude/ptwork/png/p{n:03d}.png', n)
            print('=== Seite', n, '| Tab:', r['tab'], '| Fuß:', r['footer'])
            for b in r['blocks']:
                print(f"[{b['type']}{'/'+b['kind'] if 'kind' in b else ''}] ({b['x0']:.0f},{b['top']:.0f}) {b['text'][:300]}")
