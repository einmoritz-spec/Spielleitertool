#!/usr/bin/env python3
"""Slugblaster – Buchtext als Markdown je Kapitel (Arbeitsgrundlage für die Übersetzung).

  python3 -I extract_text.py <Regelbuch.pdf> <ziel>            → k1-…md … k4-…md
  python3 -I extract_text.py <Oolroob.pdf> <ziel> oolroob      → oolroob.md

Markierungen:
  <!-- S. n -->          Seitenanfang (Buchseite = PDF-Seite, kein Versatz)
  ## Titel               Marker-Überschrift (OneDirection)
  ### TITEL              Kasten-/Zwischenüberschrift (Proxima Black/Extrabold, Versalien)
  **Fett.**              fette Einstiege (Proxima Extrabold/Semibold in schwarzem Text)
  *kursiv*               Kursiv
  [K] …                  weißer Text = steht im Buch in einem Farbkasten (Kastenfarbe am Seitenbild prüfen).
                         Ausnahme: auf den dunklen Nachtseiten (Andere Welten, S. 94–117) ist weiß der normale Text
  [N] …                  Randnotiz in Handschrift (HateYourWriting) – im Tool als Notiz in Handschrift
  - …                    Aufzählung (● im Buch)
Reihenfolge in zweispaltigen Seiten und in Tabellen IMMER am Seitenbild prüfen
(pdftoppm -r 80 -f n -l n -png …).
"""
import sys, re, pymupdf

KAP = [  # (Datei, erste Seite, letzte Seite)
    ('k1-das-ist-slugblaster', 1, 37),
    ('k2-teenager-sein', 38, 77),
    ('k3a-heimat', 78, 89),
    ('k3b-andere-welten', 90, 117),
    ('k3c-monster', 118, 125),
    ('k3d-fraktionen', 126, 142),
    ('k4a-spielleitung', 143, 163),
    ('k4b-spiel-veraendern-solo', 164, 173),
]


def span_md(s):
    t = s['text']
    f = s['font'].split('+')[-1]
    if not t.strip():
        return t
    if 'It' in f:
        return '*' + t.strip() + '* ' if t.strip() else t
    if any(k in f for k in ('Extrabld', 'Black', 'Bold')) and s['size'] < 10.6:
        return '**' + t.strip() + '** '
    return t


def page_md(pg):
    out = []
    blocks = pg.get_text('dict')['blocks']  # Reihenfolge des Inhaltsstroms (meist die Lesereihenfolge aus InDesign)
    for b in blocks:
        for l in b.get('lines', []):
            sp = [s for s in l['spans'] if s['text'].strip()]
            if not sp:
                continue
            f0 = sp[0]['font'].split('+')[-1]
            col = sp[0]['color']
            txt = ''.join(s['text'] for s in l['spans']).strip()
            if txt.isdigit() and len(txt) <= 3 and sp[0]['size'] < 9:
                continue  # Seitenzahl
            if 'HateYourWriting' in f0:
                out.append('[N] ' + txt)
            elif 'OneDirection' in f0:
                out.append('## ' + txt)
            elif any(k in f0 for k in ('Black', 'Extrabld')) and txt.isupper() and len(txt) > 2:
                out.append(('[K] ' if col == 0xffffff else '') + '### ' + txt)
            else:
                md = ''.join(span_md(s) for s in l['spans']).strip()
                md = re.sub(r'\*\*[●•]\*\*\s*', '● ', md)
                md = re.sub(r'\s*●\s*', '\n- ', md).lstrip('\n') if '●' in md else md
                md = re.sub(r'^[•]\s*', '- ', md)
                md = md.replace('​', '')
                out.append(('[K] ' if col == 0xffffff else '') + md)
    # Zeilen zusammenführen (Silbentrennung, Fortsetzungen)
    res = []
    for line in out:
        if res and line.startswith('[N] ') and res[-1].startswith('[N] '):
            res[-1] += ' ' + line[4:]
            continue
        if res and line.startswith('[K] ') and not line.startswith(('[K] #', '[K] - ')) and res[-1].startswith('[K] ') \
                and not res[-1].startswith('[K] #') and not res[-1].endswith(('.', ':', '!', '?')):
            res[-1] = (res[-1][:-1] if res[-1].endswith('-') else res[-1] + ' ') + line[4:]
            continue
        if res and not line.startswith(('#', '- ', '[', '**')) and res[-1] and not res[-1].startswith('#') \
                and not res[-1].endswith(('.', ':', '!', '?')):
            if res[-1].endswith('-') and not res[-1].endswith(' -'):
                res[-1] = res[-1][:-1] + line
            else:
                res[-1] += ' ' + line
        else:
            res.append(line)
    return '\n'.join(res)


def main(pdf, out, mode=None):
    d = pymupdf.open(pdf)
    if mode == 'oolroob':
        parts = [f'<!-- S. {i+1} -->\n' + page_md(d[i]) for i in range(len(d))]
        open(f'{out}/oolroob.md', 'w').write('\n\n'.join(parts) + '\n')
        return
    for name, a, b in KAP:
        parts = [f'<!-- S. {p} -->\n' + page_md(d[p-1]) for p in range(a, b + 1)]
        open(f'{out}/{name}.md', 'w').write(f'# {name}\n\n' + '\n\n'.join(parts) + '\n')
        print(name, a, b)


if __name__ == '__main__':
    main(*sys.argv[1:])
