#!/usr/bin/env python3
"""Heart – Buchtext als Markdown je Kapitel (Arbeitsgrundlage für die Übersetzung).

  python3 -I extract_text.py <pdf> <zielordner> <kürzel>
     kürzel: core | dagger | bb (Burned and Broken) | doors | sanctum | blackops
  → je Kapitel (oberste Ebene des PDF-Lesezeichenbaums) eine Datei <kürzel>-NN-<titel>.md

Markierungen:
  <!-- S. n -->   Seitenanfang (BUCHSEITE = PDF-Seite − Versatz, siehe VERSATZ)
  ## Titel        große Überschrift (Bartender ≥ 20 pt)
  ### Titel       Zwischenüberschrift (Bartender 13–19 pt, rot)
  #### NAME       weißer Bartender-Text auf rotem/teal Balken = Name einer Landmarke, eines Gegners,
                  einer Delve-Karte, einer Klasse … (Balkenfarbe am Seitenbild prüfen: rot = Landmarke/Gegner,
                  teal #7ba09e = Delve/Verbindung im Kampagnenband)
  **Etikett:**    rote Etiketten (DOMAINS:, TIER:, RESISTANCE: …)
  [K] …           weißer Fließtext = steht im Buch in einem SCHWARZEN Kasten (Fallout-Kästen, Seitenkästen)
  [N] …           Handschrift (Caveat, Allura, ieatcrayons …) = Zettel/Notiz des Autors oder Handout
  - …             Aufzählung
  *kursiv*        Kursiv
Zweispaltige Seiten, Tabellen und Statblöcke IMMER am Seitenbild prüfen (Reihenfolge des Inhaltsstroms).
Weggelassen werden (Moritz' Regel): Inhaltsverzeichnis, Credits/Danksagung, Index – die Dateien entstehen
trotzdem, damit nichts verloren geht; sie werden nur nicht übersetzt.
"""
import sys, re, pymupdf

VERSATZ = {'core': 5, 'dagger': 5, 'bb': 2, 'doors': 2, 'sanctum': 2, 'blackops': 3}
HAND = ('Caveat', 'Allura', 'ieatcrayons', 'Allison', 'AnnieUseYourTelescope', 'BradleyHand', 'Trattatello',
        'Diogenes', 'AmericanTypewriter', 'Paperwork', 'OCRA', 'P22Franklin')
RED = {0x640000, 0x67000c, 0x5b0a0a, 0x690909, 0x5b0909}


def slug(t):
    t = t.lower().replace('’', '').replace("'", '')
    return re.sub(r'[^a-z0-9]+', '-', t).strip('-')[:40]


def span_md(s):
    t = s['text']; f = s['font'].split('+')[-1]
    if ('Ornaments' in f or 'Leviathan' in f) and t.strip() == 'E':   # Aufzählungszeichen im Kampagnenband („E“ in Leviathan)
        return '\n- '
    if not t.strip():
        return t
    lead = ' ' if t[:1] == ' ' else ''; tail = ' ' if t[-1:] == ' ' else ''
    if 'Italic' in f:
        return lead + '*' + t.strip() + '*' + tail
    if 'Bold' in f or 'Black' in f:
        return lead + '**' + t.strip() + '**' + tail
    return t


def fix_spaces(pg):
    """Blocksatz: das PDF setzt Wortabstände oft als Verschiebung statt als Leerzeichen → aus den Zeichenlagen
    wieder Leerzeichen einsetzen: Lücke (Vorschub − Zeichenbreite) liegt > 0,09 × Schriftgröße über dem
    Median der Zeile (der Median ist die Laufweite/Sperrung der Zeile)."""
    raw = pg.get_text('rawdict')['blocks']
    for b in raw:
        for l in b.get('lines', []):
            cs = [c for s in l['spans'] for c in s['chars']]
            gaps = [cs[i + 1]['origin'][0] - c['origin'][0] - (c['bbox'][2] - c['bbox'][0]) for i, c in enumerate(cs[:-1])]
            med = sorted(gaps)[len(gaps) // 2] if gaps else 0
            prev = None; k = 0
            for s in l['spans']:
                t = []
                for c in s['chars']:
                    if prev is not None and c['c'] != ' ' and prev['c'] != ' ' and \
                            c['origin'][0] - prev['origin'][0] - (prev['bbox'][2] - prev['bbox'][0]) - med > 0.09 * s['size']:
                        t.append(' ')
                    t.append(c['c']); prev = c
                s['text'] = ''.join(t)
    return raw


def page_md(pg, H):
    out = []
    for b in fix_spaces(pg):
        out.append('')                                      # Blockgrenze = Absatzgrenze
        for l in b.get('lines', []):
            sp = [s for s in l['spans'] if s['text'].strip()]
            if not sp:
                continue
            f0 = sp[0]['font'].split('+')[-1]; col = sp[0]['color']; size = sp[0]['size']
            txt = ''.join(s['text'] for s in l['spans']).strip()
            if re.fullmatch(r'\d{1,3}', txt) and l['bbox'][1] > H - 60:
                continue                                    # Seitenzahl
            if 'Wingdings' in f0 or txt[:1] in '•◦':
                rest = ''.join(span_md(s) for s in l['spans'][1:]).strip() if 'Wingdings' in f0 else txt[1:].strip()
                out.append('- ' + rest); continue
            if 'Bartender' in f0 or 'Phosphate' in f0:
                out.append(('#### ' if col == 0xffffff and size < 20 else '## ' if size >= 20 else '### ') + txt)
                continue
            if any(h in f0 for h in HAND):
                out.append('[N] ' + txt); continue
            line = ''.join(span_md(s) for s in l['spans']).strip()
            if col in RED and ('Bold' in f0 or 'Medium' in f0) and ':' in txt[:30]:
                k = txt.index(':') + 1
                line = '**' + txt[:k].strip() + '** ' + txt[k:].strip()
            if col == 0xffffff:
                line = '[K] ' + line
            out.append(line)
    return out


def join(lines):
    """Zeilen eines Absatzes zusammenführen, Silbentrennung (‐ am Zeilenende) auflösen."""
    out = []
    for ln in lines:
        special = (not ln) or re.match(r'(#|<!--|- |\[N\]|\*\*[^*]{1,30}:\*\*)', ln)
        prev = out[-1] if out else ''
        cont = prev and not re.match(r'(#|<!--)', prev)
        if not special and cont and (ln.startswith('[K]') == prev.startswith('[K]')):
            body = ln[4:] if ln.startswith('[K]') else ln
            if re.search(r'[‐­]$', prev) or (prev.endswith('-') and not prev.endswith(' -')):
                out[-1] = prev[:-1] + body
            else:
                out[-1] = prev + ' ' + body
        else:
            out.append(ln)
    txt = re.sub(r'\n{3,}', '\n\n', '\n'.join(out))
    # über Blockgrenzen getrennte Sätze wieder verbinden (Zeile endet ohne Satzzeichen, nächste beginnt klein)
    txt = re.sub(r'([^\n.!?:\])”"])[‐­]\n\n([a-z])', r'\1\2', txt)
    txt = re.sub(r'([^\n.!?:\])”"#>])\n\n([a-z(])', r'\1 \2', txt)
    return txt.split('\n')


def main(pdf, ziel, kz):
    d = pymupdf.open(pdf); off = VERSATZ[kz]
    toc = [t for t in d.get_toc() if t[0] == 1 and t[2] > 0]
    if not toc:
        toc = [[1, kz, 1]]
    starts = [(t[2], t[1]) for t in toc]
    starts.sort()
    if starts[0][0] > 1:
        starts.insert(0, (1, 'Vorspann'))
    for i, (s, title) in enumerate(starts):
        e = starts[i + 1][0] - 1 if i + 1 < len(starts) else d.page_count
        if e < s:
            continue
        lines = [f'# {title}', f'<!-- {kz}: PDF-Seiten {s}–{e}, Buchseiten {s - off}–{e - off} -->', '']
        for n in range(s, e + 1):
            pg = d[n - 1]
            lines += ['', f'<!-- S. {n - off} -->'] + page_md(pg, pg.rect.height)
        lines = join(lines)
        fn = f'{ziel}/{kz}-{i:02d}-{slug(title)}.md'
        open(fn, 'w').write('\n'.join(lines) + '\n')
        print(fn, e - s + 1, 'Seiten')


if __name__ == '__main__':
    main(*sys.argv[1:4])
