#!/usr/bin/env python3
"""Slugblaster – Randnotizen mit ihren Zeigelinien von einer Buchseite holen.

  python3 -I extract_notes.py <pdf> <seite> [<seite> …]   → JSON auf stdout

Je Seite ein Objekt („Bühne“), alle Maße in pt relativ zur Bühne:
  { "p":45, "w":…, "h":…,                      Bühne = Figur + alle Notizen + alle Linien (+ 6 pt Rand)
    "img":{"x":…,"y":…,"w":…,"h":…},           Lage der Figur auf der Bühne
    "notes":[{"x":…,"y":…,"w":…,"h":…,"c":"#008496","t":"Ablatine helmet …","size":9.6}],
    "lines":[{"d":"M … C …","c":"#008395","sw":1.0}] }   SVG-Pfade der Zeigelinien/Pfeile
Im Tool: <div class="stage" style="aspect-ratio:w/h"> mit Figur (absolut, %), Notizen (absolut, %, übersetzt)
und darüber <svg viewBox="0 0 w h"> mit den Linien (vector-effect:non-scaling-stroke, 1.6 px).
Nur Linien in Notizfarbe werden übernommen (keine Seitenornamente).
"""
import sys, json, pymupdf

NOTE_FONT = 'HateYourWriting'


def hexc(c):
    return '#%02x%02x%02x' % tuple(int(v * 255 + .5) for v in c)


def near(a, b, tol=40):
    return not (a.x1 + tol < b.x0 or b.x1 + tol < a.x0 or a.y1 + tol < b.y0 or b.y1 + tol < a.y0)


def stage(doc, p):
    pg = doc[p - 1]
    infos = [i for i in pg.get_image_info() if (i['bbox'][2] - i['bbox'][0]) * (i['bbox'][3] - i['bbox'][1]) > 40000]
    img = pymupdf.Rect(max(infos, key=lambda i: (i['bbox'][2] - i['bbox'][0]) * (i['bbox'][3] - i['bbox'][1]))['bbox']) if infos else None
    # Notizen: Zeilen in Handschrift zu Blöcken zusammenfassen
    notes = []
    for b in pg.get_text('dict')['blocks']:
        lines = [l for l in b.get('lines', []) if l['spans'] and NOTE_FONT in l['spans'][0]['font']]
        if not lines:
            continue
        r = pymupdf.Rect()
        for l in lines:
            r |= pymupdf.Rect(l['bbox'])
        t = ' '.join(''.join(s['text'] for s in l['spans']).strip() for l in lines)
        notes.append({'r': r, 'c': hexc(pymupdf.sRGB_to_pdf(lines[0]['spans'][0]['color'])), 't': t,
                      'size': round(lines[0]['spans'][0]['size'], 1)})
    note_cols = {n['c'] for n in notes}
    # Linien: Striche in (fast) Notizfarbe, die nahe einer Notiz liegen
    lines = []
    for dr in pg.get_drawings():
        c = dr.get('color')
        if dr.get('fill') or not c:
            continue
        hc = hexc(c)
        if not any(sum(abs(int(hc[i:i + 2], 16) - int(nc[i:i + 2], 16)) for i in (1, 3, 5)) < 30 for nc in note_cols):
            continue
        if not any(near(dr['rect'], n['r']) for n in notes):
            continue
        d = []
        for it in dr['items']:
            if it[0] == 'l':
                d.append(('M', it[1]) if not d or d[-1][-1] != it[1] else None)
                d.append(('L', it[2]))
            elif it[0] == 'c':
                d.append(('M', it[1]) if not d or d[-1][-1] != it[1] else None)
                d.append(('C', it[2], it[3], it[4]))
        lines.append({'cmds': [x for x in d if x], 'r': dr['rect'], 'c': hc, 'sw': round(dr.get('width') or 1, 2)})
    box = pymupdf.Rect(img) if img else pymupdf.Rect()
    for n in notes:
        box |= n['r']
    for l in lines:
        box |= l['r']
    box = pymupdf.Rect(box.x0 - 6, box.y0 - 6, box.x1 + 6, box.y1 + 6)
    ox, oy = box.x0, box.y0

    def pt(q):
        return f'{q.x - ox:.1f} {q.y - oy:.1f}'
    out = {'p': p, 'w': round(box.width, 1), 'h': round(box.height, 1),
           'img': img and {'x': round(img.x0 - ox, 1), 'y': round(img.y0 - oy, 1), 'w': round(img.width, 1), 'h': round(img.height, 1)},
           'notes': [{'x': round(n['r'].x0 - ox, 1), 'y': round(n['r'].y0 - oy, 1), 'w': round(n['r'].width, 1),
                      'h': round(n['r'].height, 1), 'c': n['c'], 't': n['t'], 'size': n['size']} for n in notes],
           'lines': []}
    for l in lines:
        d = ' '.join(k + ' ' + ' '.join(pt(q) for q in rest) for k, *rest in l['cmds'])
        out['lines'].append({'d': d, 'c': l['c'], 'sw': l['sw']})
    return out


if __name__ == '__main__':
    doc = pymupdf.open(sys.argv[1])
    print(json.dumps([stage(doc, int(p)) for p in sys.argv[2:]], ensure_ascii=False, indent=1))
