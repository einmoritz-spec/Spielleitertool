#!/usr/bin/env python3
"""Erzeugt cityofmist/js/rw-files.js (Abschnitt -> Datendateien) und gibt die Dateiliste für sw.js aus."""
import glob, os, re, json
base = os.path.join(os.path.dirname(__file__), '..', '..', 'cityofmist', 'js')
m = {}
def _k(f):
    m = re.search(r'-(\d+)\.js$', f)
    return (re.sub(r'(-\d+)?\.js$', '', f), int(m.group(1)) if m else 1)
for f in sorted(glob.glob(os.path.join(base, 'data', 'regelwerk', '*.js')), key=_k):
    ids = set(re.findall(r'rwAdd\(\s*"([^"]+)"', open(f, encoding='utf-8').read()))
    assert len(ids) == 1, (f, ids)
    m.setdefault(ids.pop(), []).append('data/regelwerk/' + os.path.basename(f))
open(os.path.join(base, 'rw-files.js'), 'w', encoding='utf-8').write('/* erzeugt mit tools/regelwerk/build_manifest.py */\nvar CM_RW_FILES = ' + json.dumps(m, indent=1, ensure_ascii=False) + ';\n')
print('\n'.join('  "cityofmist/js/' + p + '",' for v in m.values() for p in v))
