#!/usr/bin/env python3
"""Vollständigkeitsprüfung: vergleicht Wörter des Roh-Entwurfs (Buchseiten von..bis) mit dem Klartext der Datendateien.
Aufruf: python3 -I coverage.py <draftordner> <flatten.json> <sectionId> <von> <bis>
Meldet fehlende Wörter (im Buch, nicht in den Daten) und überzählige."""
import sys, re, json, collections
dr, fj, sec, a, b = sys.argv[1], sys.argv[2], sys.argv[3], int(sys.argv[4]), int(sys.argv[5])
def norm(t):
    t = re.sub(r'x\d+ \| ', ' ', t)
    t = re.sub(r'(?m)^(?:[CPRHM]\d+[0-9a-f]{6} )', '', t)
    t = t.replace('*', ' ').replace('†', ' ')
    t = re.sub(r'\.(\s?\.)+', ' ', t)
    return re.findall(r"[a-zäöüßA-ZÄÖÜ0-9]+", t.lower())
draft = []
for p in range(a, b + 1):
    try: draft += norm(open('%s/p%03d.txt' % (dr, p), encoding='utf-8').read().split('\n', 1)[1])
    except FileNotFoundError: pass
data = json.load(open(fj))
mine = []
for e in data.get(sec, []): mine += norm(e['text'])
cd, cm = collections.Counter(draft), collections.Counter(mine)
miss = cd - cm; extra = cm - cd
print('%s S.%d–%d: Buch %d Wörter, Daten %d Wörter, fehlend %d (%.1f%%), überzählig %d' % (sec, a, b, len(draft), len(mine), sum(miss.values()), 100.0 * sum(miss.values()) / max(1, len(draft)), sum(extra.values())))
print('fehlend (häufigste):', ', '.join('%s×%d' % kv for kv in miss.most_common(40)))
print('überzählig (häufigste):', ', '.join('%s×%d' % kv for kv in extra.most_common(25)))
