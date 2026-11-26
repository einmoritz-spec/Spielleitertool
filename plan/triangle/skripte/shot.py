"""Seiten des Tools rendern. Aufruf: shot.py <zielordner> <route> [<route> ...]  (route mit ! am Ende = ganze Seite)
Beispiel: python3 -I plan/triangle/skripte/shot.py /tmp/ta 'h/agency/was!' ark/anomalie/whisper"""
import sys, os, re
from playwright.sync_api import sync_playwright
out = sys.argv[1]; routes = sys.argv[2:]; os.makedirs(out, exist_ok=True)
REPO = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', '..'))
with sync_playwright() as p:
    b = p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--allow-file-access-from-files', '--no-sandbox'])
    pg = b.new_page(viewport={'width': int(os.environ.get('TA_W', 1280)), 'height': 800})
    errs = []; pg.on('pageerror', lambda e: errs.append('ERR ' + str(e)[:300])); pg.on('requestfailed', lambda r: errs.append('FAIL ' + r.url[-80:]))
    for r in routes:
        full = r.endswith('!'); r = r.rstrip('!')
        pg.goto('file://' + REPO + '/triangle/index.html#' + r); pg.reload(); pg.wait_for_timeout(1800)
        if os.environ.get('TA_FOLD'): pg.evaluate('if(!ST.fold) foldSide()'); pg.wait_for_timeout(300)
        f = os.path.join(out, re.sub(r'[^a-z0-9]+', '_', r) + '.jpg'); pg.screenshot(path=f, full_page=full, type='jpeg', quality=82); print(f)
    pg.evaluate('if(typeof ST!=="undefined"&&ST.fold) foldSide()') if os.environ.get('TA_FOLD') else None
    print(errs or 'ok'); b.close()
