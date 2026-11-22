#!/usr/bin/env python3
"""Mörk Borg – Buchtext als Markdown je Kapitel (Arbeitsgrundlage für die Übersetzung).

  python3 -I extract_text.py <Corebook.pdf> <ziel> core
  python3 -I extract_text.py <Rules_Apocrypha.pdf> <ziel> apo

Markierungen:
  <!-- S. n · PDF m -->   Seitenanfang. Corebook: Buchseite = PDF-Seite − 4 (off:4). Apokryphen: Buchseite = PDF-Seite (off:0)
  ## Titel                Überschrift (Fraktur-/Display-Schrift oder ≥ 14 pt)
  **Fett**                fette Stellen
  *kursiv*                Kursiv
  [P] …                   pinker/magenta Text (im Buch: Spielwerte – TP, Moral, SG, Schaden, Würfel)
  [W] …                   weißer Text (steht auf schwarzem Grund oder in einem schwarzen Kasten)
  [G] …                   gelber Text (Würfelnummern/Tabellen auf Schwarz)
Die Bücher sind frei gesetzt (Plakat-Layout): Reihenfolge in Tabellen, Kreaturen-Seiten und
mehrspaltigen Seiten IMMER am Seitenbild prüfen (pdftoppm -r 80 -f m -l m -png …).
"""
import sys, re, pymupdf

CORE = [  # Datei, erste, letzte PDF-Seite
    ('c00-vorsatz-tabellen', 2, 3),
    ('c01-die-sterbende-welt', 6, 19),
    ('c02-kalender-des-nechrubel', 20, 21),
    ('c03-charaktererschaffung-ausruestung', 22, 29),
    ('c04-regeln', 30, 37),
    ('c05-maechte-schriftrollen', 38, 41),
    ('c06-optionale-regeln', 42, 49),
    ('c07-klassen', 50, 61),
    ('c08-kreaturen', 62, 73),
    ('c09-ausgestossene', 74, 75),
    ('c10-rotblack-sludge', 77, 91),
    ('c11-noch-mehr-gruende', 92, 93),
    ('c12-regeluebersicht', 94, 94),
]
APO = [
    ('a01-unheilige-wiederkehr', 4, 5),
    ('a02-sternzeichen', 6, 7),
    ('a03-apokryphen', 8, 9),
    ('a04-krankheiten-heilmittel', 10, 15),
    ('a05-verliese', 16, 19),
    ('a06-monstroese-voelker', 20, 27),
    ('a07-etablissements', 28, 35),
    ('a08-auftragstafeln', 36, 41),
    ('a09-monster', 42, 59),
    ('a10-d86-jenseitige-beschwoerungen', 60, 67),
]
DISPLAY = ('Gotisch', 'Trump', 'Unifraktur', 'Fraktur', 'Gothic', 'Blackletter', 'Textur', 'Deutsch', 'Cantebriggia',
           'Courant', 'Anton', 'Good', 'Titling', 'Adhesive', 'Maximilian', 'Killigrew', 'Gutenberg')
PINK = {0xff41b4, 0xec008c, 0xed0d6c, 0xe70572, 0xd34379}


def tag(col):
    if col in PINK: return '[P] '
    if col == 0xffffff: return '[W] '
    if col in (0xffe800, 0xffdd00): return '[G] '
    return ''


def span_md(s):
    t = s['text'].replace('\u0007', '•').replace('\xa0', ' ')
    f = s['font'].split('+')[-1]
    if not t.strip(): return t
    if 'Italic' in f or f.endswith('It'): return '*' + t.strip() + '* '
    if any(k in f for k in ('Bold', 'Black', 'Heavy', 'ExtraBold', 'Bd', '-Hv')) and s['size'] < 12: return '**' + t.strip() + '** '
    return t


def page_md(pg):
    out = []
    for b in pg.get_text('dict', sort=True)['blocks']:
        for l in b.get('lines', []):
            sp = [s for s in l['spans'] if s['text'].strip()]
            if not sp: continue
            f0 = sp[0]['font'].split('+')[-1]; size = max(s['size'] for s in sp)
            txt = ''.join(s['text'] for s in l['spans']).strip()
            if txt.isdigit() and len(txt) <= 3 and size > 12 and (l['bbox'][1] > pg.rect.height - 50): continue
            pre = tag(sp[0]['color'])
            if size >= 14 or any(k in f0 for k in DISPLAY):
                out.append(pre + '## ' + txt)
            else:
                out.append(pre + ''.join(span_md(s) for s in l['spans']).strip())
    res = []
    for line in out:  # Folgezeilen zusammenführen
        if res and not line.lstrip('[PWG] ').startswith(('#', '•', '-', '1', '2', '3', '4', '5', '6', '7', '8', '9')) \
                and not res[-1].lstrip('[PWG] ').startswith('#') and line[:4] == res[-1][:4] \
                and res[-1] and res[-1][-1] not in '.:!?' and len(res[-1]) > 25:
            body = line[4:] if line[:1] == '[' else line
            res[-1] = (res[-1][:-1] + body) if res[-1].endswith('-') and not res[-1].endswith(' -') else res[-1] + ' ' + body
        else:
            res.append(line)
    return '\n'.join(res)


def main(pdf, out, mode):
    d = pymupdf.open(pdf)
    parts, off = (CORE, 4) if mode == 'core' else (APO, 0)
    for name, a, b in parts:
        txt = [f'<!-- S. {p - off} · PDF {p} -->\n' + page_md(d[p - 1]) for p in range(a, b + 1)]
        open(f'{out}/{name}.md', 'w').write(f'# {name}\n\n' + '\n\n'.join(txt) + '\n')
        print(name, a, b)


if __name__ == '__main__':
    main(*sys.argv[1:4])
