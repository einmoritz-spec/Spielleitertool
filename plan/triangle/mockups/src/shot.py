import sys
from playwright.sync_api import sync_playwright
names = sys.argv[1:]
with sync_playwright() as p:
    b = p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--allow-file-access-from-files', '--no-sandbox'])
    pg = b.new_page(viewport={'width': 1280, 'height': 800}, device_scale_factor=1.5)
    errs = []; pg.on('pageerror', lambda e: errs.append(str(e))); pg.on('requestfailed', lambda r: errs.append('FAIL ' + r.url[-60:]))
    for n in names:
        pg.goto(f'file:///home/claude/ta/mock/{n}.html'); pg.wait_for_timeout(700)
        pg.screenshot(path=f'/home/claude/ta/mock/out/{n}.png', full_page=True)
    print(errs or 'ok'); b.close()
