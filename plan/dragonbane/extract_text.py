#!/usr/bin/env python3
"""Dragonbane – Buchtext des Regelbuchs (Rulebook v2, EN) als Markdown je Kapitel.

  python3 -I extract_text.py <Rulebook.pdf> <ziel>                       → Regelbuch (Offset 4, feste Kapitelliste KAP)
  python3 -I extract_text.py <pdf> <ziel> <offset> <name>=<von>-<bis>[+<von>-<bis>] …
        → beliebiges Buch: Buchseite = PDF-Seite − offset; je Paket eine Datei <ziel>/<name>.md (PDF-Seiten!)
        Beispiel Abenteuerband:  … 1 b2=34-55 b1a=4-14+29-33

Seitenzählung (Regelbuch): Buchseite = PDF-Seite − 4  (Bookviewer: off:4). Jede Seite beginnt mit
  <!-- S. <Buchseite> · PDF <PDF-Seite> -->
Markierungen (aus Schrift + Farbe des PDFs abgeleitet):
  ## TITEL          Seitentitel  (Hideout Black 34 pt, Teal #237263)
  ### TITEL         Abschnitt    (Hideout Bold 11,5 pt, Versalien)
  #### BANNER       Banner-Titel eines Kastens / einer Tabelle (Hideout Bold 10 pt, Stein-Banner)
  [K] …             Text im GRÜNEN STEINKASTEN (helle Schrift #dae6e2 auf Teal)
  [P] …             Text auf PERGAMENT-KARTE (Hideout, Braun #4b2d1b/#4a2506: Werteblöcke, NSC-Karten, Tabellen)
  > …               Vorlesetext (Minion Semibold Italic)
  - …               Aufzählung mit ✦ (Teal)      - [!] …  Aufzählung mit rotem ✦ (Ereignis/Falle/Geheimnis)
  **Fett:**         Hideout-Bold-Einstieg im Fließtext   *kursiv*   SKILL = Kapitälchen (Fertigkeit/Attribut)
Tabellen und zweispaltige Seiten stehen in Stromreihenfolge – IMMER am Seitenbild prüfen
(pdftoppm -r 80 -f <PDF> -l <PDF> -png <pdf> /tmp/s).
"""
import sys, re, pymupdf

OFF = 4
KAP = [  # (Datei, erste PDF-Seite, letzte PDF-Seite)
    ('k0-vorwort', 7, 7),
    ('k1-in-den-aeltesten-zeiten', 8, 11),
    ('k2-dein-spielercharakter', 12, 33),
    ('k3-fertigkeiten', 34, 43),
    ('k4-kampf-und-schaden', 44, 59),
    ('k5-magie', 60, 75),
    ('k6-ausruestung', 76, 85),
    ('k7-bestiarium', 86, 103),
    ('k8-abenteuer', 104, 116),
    ('k8b-die-burg-des-raubritters', 117, 123),
    ('t-tabellen', 124, 126),
]
LIGHT = {0xdae6e2}
BROWN = {0x4b2d1b, 0x4a2506, 0x603617}
RED = 0xc52535


def fam(s):
    return s['font'].split('+')[-1]


def span_md(s):
    t = s['text']; f = fam(s)
    if not t.strip():
        return t
    if f.startswith('MinionPro') and 'Capt' in f:
        return t.upper()
    if f.startswith('MinionPro') and 'It' in f and 'Semibold' not in f:
        return '*' + t.strip() + '*' + (' ' if t.endswith(' ') else '')
    if f in ('Hideout-Bold', 'MinionPro-Bold') and s['size'] < 10.5:
        return '**' + t.strip() + '** '
    return t


def page_md(pg):
    out = []
    for b in pg.get_text('dict')['blocks']:
        for l in b.get('lines', []):
            sp = [s for s in l['spans'] if s['text'].strip()]
            if not sp:
                continue
            s0 = sp[0]; f0 = fam(s0); col = s0['color']; size = s0['size']
            txt = ''.join(s['text'] for s in l['spans']).strip()
            if f0 == 'Hideout-Bold' and size < 7.5 and txt.upper().startswith('CHAPTER'):
                continue  # Fußzeile
            if txt.isdigit() and len(txt) <= 3 and col in LIGHT and size < 9.5:
                continue  # Seitenzahl im Fuß-Ornament
            red = any(s['color'] == RED for s in sp[:2])
            if f0 == 'Hideout-Black' and size > 20:
                out.append('## ' + txt); continue
            if f0 == 'Hideout-Bold' and size >= 11:
                out.append('### ' + txt); continue
            if f0 == 'Hideout-Bold' and 9.6 <= size < 11 and txt.upper() == txt:
                out.append('#### ' + txt); continue
            md = ''.join(span_md(s) for s in l['spans']).strip()
            md = md.replace('**✦** ', '✦ ').replace('\t', ' ')
            if md.startswith('✦'):
                md = ('- [!] ' if red else '- ') + md.lstrip('✦ ').strip()
            pre = '[K] ' if col in LIGHT else '[P] ' if col in BROWN else ''
            if f0 == 'MinionPro-SemiboldIt':
                pre = '> '
            out.append(pre + md)
    res = []
    for line in out:
        cont = (res and not line.startswith(('#', '- ')) and res[-1] and not res[-1].startswith('#')
                and not res[-1].endswith(('.', ':', '!', '?', '”', '"'))
                and line[:4] == res[-1][:4] if line[:1] in '[>' else
                res and not line.startswith(('#', '- ', '[', '>', '**')) and res[-1] and not res[-1].startswith('#')
                and not res[-1].endswith(('.', ':', '!', '?', '”')))
        if cont:
            body = line[4:] if line[:1] == '[' else line[2:] if line[:1] == '>' else line
            if res[-1].endswith('-') and not res[-1].endswith(' -'):
                res[-1] = res[-1][:-1] + body
            else:
                res[-1] += ' ' + body
        else:
            res.append(line)
    return '\n'.join(res)


def paket(pdf, out, off, args):
    d = pymupdf.open(pdf)
    for arg in args:
        name, rng = arg.split('=')
        parts = []
        for r in rng.split('+'):
            a, b = map(int, r.split('-'))
            parts += [f'<!-- S. {p-off} · PDF {p} -->\n' + page_md(d[p-1]) for p in range(a, b + 1)]
        open(f'{out}/{name}.md', 'w').write(f'# {name}\n\n<!-- Hinweis: Zier-Initialen (große erste Buchstaben am Absatzanfang) fehlen im Textauszug – am Seitenbild ergänzen. -->\n\n' + '\n\n'.join(parts) + '\n')
        print(name, rng, '(Buchseite = PDF −', off, ')')


def main(pdf, out, *rest):
    if rest:
        return paket(pdf, out, int(rest[0]), rest[1:])
    d = pymupdf.open(pdf)
    for name, a, b in KAP:
        parts = [f'<!-- S. {p-OFF} · PDF {p} -->\n' + page_md(d[p-1]) for p in range(a, b + 1)]
        open(f'{out}/{name}.md', 'w').write(f'# {name}\n\n' + '\n\n'.join(parts) + '\n')
        print(name, a - OFF, b - OFF)


if __name__ == '__main__':
    main(*sys.argv[1:])
