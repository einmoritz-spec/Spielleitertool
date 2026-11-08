#!/usr/bin/env python3
"""build_case.py N  -> nights/js/data/caseNN.js (+ nights/img/caseNN/*.webp)
Liest tools/nights/cases/caseNN.json (Konfiguration) und das PDF."""
import sys, json, re, os, html
sys.path.insert(0, os.path.dirname(__file__))
import pdfplumber, extract as E
from PIL import Image
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
PDF = "/mnt/user-data/uploads/City_of_Mist___Abenteuer___Nachts_in_Payne_Town__DE_.pdf"
PNG = '/home/claude/ptwork/png/p%03d.png'
S = 250/72.0
THEME_HEADS = {'IDENTITÄT', 'STÄRKEN', 'SCHWÄCHEN', 'THEMENVERBESSERUNG', 'MYSTERIUM'}

def plain(t): return html.unescape(re.sub(r'<[^>]+>', '', t)).strip()
def slug(t):
    t = plain(t).lower()
    for a, b in (('ä','ae'),('ö','oe'),('ü','ue'),('ß','ss')): t = t.replace(a, b)
    return re.sub(r'[^a-z0-9]+', '-', t).strip('-')

def simplify(b):
    t = {'text': 'p', 'readaloud': 'ro', 'heading': 'h', 'subheading': 'sh', 'card': 'card'}[b['type']]
    o = {'t': t, 'x': b['text'], 'sz': b.get('sz')}
    if t == 'card': o['k'] = b['kind']
    if t == 'h': o['x'] = re.sub(r'</?u>', '', o['x'])
    o['box'] = [round(b['x0'], 1), round(b['top'], 1), round(b['x1'], 1), round(b['bottom'], 1)]
    return o

def is_stars(x): return re.fullmatch(r'[★+\s]+', plain(x) or 'x') is not None

def merge_threats(blocks):
    out = []; i = 0
    while i < len(blocks):
        b = blocks[i]
        nxt = blocks[i+1] if i+1 < len(blocks) else None
        if b['t'] == 'p' and is_stars(b['x']) and nxt and nxt['t'] in ('h', 'sh') and plain(nxt['x']).isupper():
            th = {'t': 'threat', 'stars': plain(b['x']).replace(' ', ''), 'name': plain(nxt['x']), 'spectra': '', 'items': [], 'box': b['box']}
            i += 2
            if i < len(blocks) and blocks[i]['t'] == 'sh':
                th['spectra'] = plain(blocks[i]['x']); i += 1
            while i < len(blocks) and blocks[i]['t'] == 'p' and (blocks[i]['x'].lstrip().startswith('•') or ' • ' in blocks[i]['x'] or re.match(r'^<b>[^<]+:</b>', blocks[i]['x'])):
                parts = [p.strip() for p in re.split(r'(?:^|\s)•\s', blocks[i]['x']) if p.strip()]
                th['items'] += parts; i += 1
            out.append(th); continue
        # Sterne am Ende der Namenszeile: "<u>GREIFER</u> ★★★"
        if b['t'] == 'sh' and re.search(r'★+$', plain(b['x'])) and plain(b['x']).replace('★', '').strip().isupper():
            m = re.match(r'(.*?)\s*(★+)$', plain(b['x']))
            th = {'t': 'threat', 'stars': m.group(2), 'name': m.group(1), 'spectra': '', 'items': [], 'box': b['box']}
            i += 1
            if i < len(blocks) and blocks[i]['t'] == 'sh':
                th['spectra'] = plain(blocks[i]['x']); i += 1
            while i < len(blocks) and blocks[i]['t'] == 'p' and (blocks[i]['x'].lstrip().startswith('•') or ' • ' in blocks[i]['x']):
                parts = [p.strip() for p in re.split(r'(?:^|\s)•\s', blocks[i]['x']) if p.strip()]
                th['items'] += parts; i += 1
            out.append(th); continue
        out.append(b); i += 1
    return out

def build(nr):
    cfg = json.load(open(os.path.join(os.path.dirname(__file__), 'cases', 'case%02d.json' % nr)))
    p0, p1 = cfg['pages']
    pages = {}
    allblocks = []
    with pdfplumber.open(PDF) as pdf:
        for n in range(p0, p1+1):
            r = E.extract_page(pdf.pages[n-1], PNG % n, n)
            bl = [simplify(b) for b in r['blocks']]
            bl = merge_threats(bl)
            for b in bl: b['p'] = n
            pages[n] = {'tab': r['tab'], 'blocks': bl, 'size': [pdf.pages[n-1].width, pdf.pages[n-1].height]}
            allblocks += bl
    # Abschnitte
    sections = []; layer = None; cur = None
    def newsec(kind, title, b, parent=None):
        sid = slug(title) or 'abschnitt'
        base = sid; k = 2
        while any(s['id'] == sid for s in sections): sid = f'{base}-{k}'; k += 1
        s = {'id': sid, 'kind': kind, 'title': plain(title), 'page': b['p'], 'layer': parent, 'blocks': 0}
        sections.append(s); return s
    for p in range(p0, p1+1):
        for bi, b in enumerate(pages[p]['blocks']):
            b['i'] = bi
    flat = [b for p in range(p0, p1+1) for b in pages[p]['blocks']]
    sec_of = {}  # (page, i) -> section id
    intro = newsec('intro', cfg.get('introTitle', 'Einleitung'), flat[0]) if flat else None
    cur = intro
    k = 0
    while k < len(flat):
        b = flat[k]
        if b['t'] == 'h' and re.fullmatch(r'SCHICHT \d:?|AKT \d:?', plain(b['x'])):
            title = plain(b['x']).rstrip(':')
            if k+1 < len(flat) and flat[k+1]['t'] == 'h' and not THEME_HEADS & {plain(flat[k+1]['x'])}:
                title += ': ' + plain(flat[k+1]['x']); sec_of[(flat[k+1]['p'], flat[k+1]['i'])] = None; k += 1
            layer = newsec('layer', title, b)
            cur = layer; b['skip'] = True
            flat[k]['skip'] = True
        elif b['t'] == 'h' and plain(b['x']).upper() == 'ABSPANN':
            cur = newsec('abspann', 'Abspann', b); layer = None
        elif b['t'] == 'h' and plain(b['x']) not in THEME_HEADS and len(plain(b['x'])) > 2 and 15.4 <= (b.get('sz') or 16) <= 17.5:
            nm = plain(b['x'])
            # Heading-Zeile direkt nach Überschrift desselben Blocks (Zweizeiler) zusammenfassen
            if k+1 < len(flat) and flat[k+1]['t'] == 'h' and flat[k+1]['p'] == b['p'] and flat[k+1]['box'][1] - b['box'][3] < 4 and plain(flat[k+1]['x']) not in THEME_HEADS:
                nm += ' ' + plain(flat[k+1]['x']); flat[k+1]['skip'] = True
            cur = newsec('place', nm, b, layer['id'] if layer else None)
            b['skip'] = True
        b['sec'] = cur['id'] if cur else None
        k += 1
    for b in flat:
        if b.get('sec'):
            for s in sections:
                if s['id'] == b['sec']: s['blocks'] += 1
    # Figuren zuschneiden
    imgdir = os.path.join(ROOT, 'nights', 'img', 'case%02d' % nr); os.makedirs(imgdir, exist_ok=True)
    figs = []
    for f in cfg.get('figures', []):
        im = Image.open(PNG % f['page']).convert('RGB')
        x0, t, x1, bt = [int(v*S) for v in f['box']]
        crop = im.crop((max(x0, 0), max(t, 0), min(x1, im.size[0]), min(bt, im.size[1])))
        fn = f"{f['id']}.webp"
        crop.save(os.path.join(imgdir, fn), 'WEBP', quality=72, method=4)
        figs.append({'id': f['id'], 'page': f['page'], 'kind': f.get('kind', 'bild'), 'title': f.get('title', ''), 'file': f"img/case{nr:02d}/{fn}",
                     'box': f['box'], 'after': f.get('after')})
    # Eisberg
    eis = None
    if cfg.get('eisberg'):
        e = cfg['eisberg']; pw, ph = 595.276, 841.89
        nodes = []
        for n in e['nodes']:
            nodes.append({'label': n['label'], 'layer': n.get('layer'), 'x': n['cx'], 'y': n['cy'], 'w': n.get('w', 11), 'h': n.get('h', 9.5), 'target': n.get('target')})
        eis = {'page': e['page'], 'fig': e['fig'], 'nodes': nodes}
    data = {'nr': nr, 'id': 'case%02d' % nr, 'title': cfg['title'], 'subtitle': cfg.get('subtitle', ''), 'level': cfg.get('level', ''), 'from': p0, 'to': p1,
            'mythen': cfg.get('mythen', []), 'sections': sections, 'pages': {str(n): pages[n] for n in pages}, 'figures': figs, 'eisberg': eis}
    out = os.path.join(ROOT, 'nights', 'js', 'data', 'case%02d.js' % nr)
    with open(out, 'w') as f:
        f.write('window.NIGHTS=window.NIGHTS||{cases:{}};\nwindow.NIGHTS.cases[%d]=' % nr + json.dumps(data, ensure_ascii=False, separators=(',', ':')) + ';\n')
    print('geschrieben', out, os.path.getsize(out)//1024, 'KB;', len(sections), 'Abschnitte;', sum(len(p['blocks']) for p in pages.values()), 'Blöcke')
    for s in sections: print('  ', s['page'], s['kind'], s['title'], s['blocks'])

if __name__ == '__main__':
    build(int(sys.argv[1]))
