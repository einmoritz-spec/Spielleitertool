#!/usr/bin/env python3
"""Rohtext-Entwurf pro Buchseite aus dem City-of-Mist-Spieler:innen-Handbuch (DE).

Aufruf:  python3 -I extract.py <all.xml> <ausgabeordner>
all.xml entsteht mit:  pdftohtml -xml -i -nodrm -f 10 -l 309 <buch.pdf> all
(PDF-Seite 10 = gedruckte Buchseite 8, Offset +2.)

Pro Buchseite eine Datei pNNN.txt. Jede Zeile: Stilcode | Text.
Stilcode = Familie(C=Champion-Überschrift, P=PT Serif, R=Roboto, H=Helvetica) + Größe + Farbe(hex ohne #)
Fett = **…**, Kursiv = *…*. Zeilen­umbruch-Trennstriche werden – wo eindeutig – zusammengezogen.
Das Wasserzeichen („Order #…“) und die Fußzeile werden entfernt.
"""
import re, sys, os, html
import xml.etree.ElementTree as ET

def main(xml_path, out):
    os.makedirs(out, exist_ok=True)
    root = ET.parse(xml_path).getroot()
    allfonts = {f.get('id'): f for f in root.iter('fontspec')}
    for page in root.iter('page'):
        pdfno = int(page.get('number')); book = pdfno - 2
        fonts = allfonts
        lines = []
        for t in page.iter('text'):
            f = fonts.get(t.get('font'))
            fam = (f.get('family') or '') if f is not None else ''
            size = int(float(f.get('size'))) if f is not None else 0
            col = (f.get('color') or '#000000').lstrip('#') if f is not None else '000000'
            txt = ''.join(
                ('**%s**' % (c.text or '') if c.tag == 'b' else '*%s*' % (c.text or '') if c.tag == 'i' else (c.text or ''))
                if c.tag in ('b', 'i') else (c.text or '')
                for c in [type('X', (), {'tag': 'raw', 'text': t.text})()] + list(t))
            # verschachtelte <b><i>: einfach flach auslesen
            raw = ''.join(t.itertext())
            if '<b>' in ET.tostring(t, encoding='unicode') or '<i>' in ET.tostring(t, encoding='unicode'):
                s = ET.tostring(t, encoding='unicode')
                s = re.sub(r'^<text[^>]*>', '', s); s = re.sub(r'</text>\s*$', '', s)
                s = re.sub(r'</?b>', '**', s); s = re.sub(r'</?i>', '*', s)
                s = re.sub(r'<[^>]+>', '', s)
                txt = html.unescape(s)
            else:
                txt = raw
            txt = txt.replace('\xa0', ' ')
            if not txt.strip():
                continue
            if 'Order #' in txt or 'Müller' in txt and 'Order' in txt:
                continue
            if re.match(r'^\s*\d+\s*\|?\s*C\s*I\s*T\s*Y', txt) or re.search(r'SPIELER:INNEN-HANDBUCH\s*$', txt) and 'CITY' in txt.upper().replace(' ', '')[:20]:
                continue
            fk = 'C' if 'Champion' in fam else 'R' if 'Roboto' in fam else 'H' if 'Helvetica' in fam else 'M' if 'Courier' in fam else 'P'
            left = int(t.get('left')); top = int(t.get('top'))
            lines.append([fk, size, col, left, txt.rstrip(), top])
        # Fußzeile: letzte Zeilen mit Helvetica und kleiner Größe entfernen
        lines = [l for l in lines if not (l[0] == 'H' and l[1] <= 10)]
        # Fragmente derselben Zeile (gleiches top, gleicher Stil-Block) zusammenführen
        fused = []
        for l in lines:
            if fused and abs(fused[-1][5] - l[5]) <= 3 and l[3] > fused[-1][3] and (l[0], l[1], l[2]) != ('C', 0, 'x'):
                p = fused[-1]
                joiner = '' if (p[4].endswith(' ') or l[4].startswith(' ') or l[4][:1] in ').,;:!?“”«»' ) else ' '
                # Eigene Stilwechsel (Überschrift) nicht verschmelzen
                if p[0] == 'C' or l[0] == 'C':
                    fused.append(l); continue
                p[4] = p[4] + joiner + l[4]; continue
            fused.append(l)
        lines = fused
        outl = []
        for fk, size, col, left, txt, top in lines:
            txt = re.sub(r'\*\*\s*\*\*', '', txt) if False else txt
            txt = re.sub(r'\*\*\*\*', '', txt)
            txt = re.sub(r'(?<!\*)\*\* \*\*(?!\*)', ' ', txt)
            if not txt.strip(): continue
            st = '' if (fk == 'P' and col in ('000000','ffffff') and 9 <= size <= 14) else '%s%d%s ' % (fk, size, col)
            outl.append('%sx%d | %s' % (st, left, txt.strip()))
        # Silbentrennung zusammenziehen: Zeile endet auf "-" (ohne Leerzeichen) und nächste Zeile beginnt klein, gleicher Stil
        merged = []
        for ln in outl:
            if merged:
                pm = re.match(r'^(.*?)x\d+ \| (.*)$', merged[-1]); cm = re.match(r'^(.*?)x\d+ \| (.*)$', ln)
                if pm and cm and pm.group(1) == cm.group(1) and re.search(r'[a-zäöüß]-\**$', pm.group(2)) and re.match(r'^\**[a-zäöüß]', cm.group(2)):
                    head = re.sub(r'-(\**)$', r'\1', pm.group(2))
                    merged[-1] = merged[-1][:merged[-1].index('| ') + 2] + head + cm.group(2).lstrip('*') if False else merged[-1][:merged[-1].index('| ') + 2] + head + cm.group(2)
                    continue
            merged.append(ln)
        with open(os.path.join(out, 'p%03d.txt' % book), 'w', encoding='utf-8') as fh:
            fh.write('=== BUCHSEITE %d (PDF-Seite %d)\n' % (book, pdfno))
            fh.write('\n'.join(merged) + '\n')

if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
