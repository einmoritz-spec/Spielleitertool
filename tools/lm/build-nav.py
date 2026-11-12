#!/usr/bin/env python3
"""Erzeugt js/data/lm-files.js (Abschnitt -> Dateien) und die sw.js-Dateiliste-Zeilen aus js/data/lm/*.js"""
import os,re,json,glob
root=os.path.join(os.path.dirname(__file__),'..','..')
files={}
for f in sorted(glob.glob(os.path.join(root,'js/data/lm/*.js'))):
    n=os.path.basename(f)[:-3]; m=re.match(r'^(.*?)(?:-(\d+))?$',n); sid=m.group(1)
    # "dales-b" ist eine eigene ID; "-2/-3" sind Teile
    files.setdefault(sid,[]).append('data/lm/'+os.path.basename(f))
open(os.path.join(root,'js/data/lm-files.js'),'w').write('window.LM_FILES='+json.dumps(files,indent=1)+';\n')
print({k:len(v) for k,v in files.items()})
