#!/usr/bin/env python3
"""Heart – Entwürfe fotografieren: je Entwurf eine saubere Fassung und eine mit Erklärungen (1440×900).
  python3 shoot.py [m1-start m2-… ]   (ohne Angabe: alle m*.html in mockups/src)
Benötigt playwright + /usr/bin/google-chrome."""
import sys, glob, os, asyncio
from playwright.async_api import async_playwright
HERE = os.path.dirname(os.path.abspath(__file__)); SRC = f'{HERE}/mockups/src'; OUT = f'{HERE}/mockups'
names = sys.argv[1:] or sorted(os.path.basename(f)[:-5] for f in glob.glob(f'{SRC}/m*.html'))
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--allow-file-access-from-files'])
        for n in names:
            for w, h, suf in ((1440, 900, ''),):
                pg = await b.new_page(viewport={'width': w, 'height': h})
                await pg.goto(f'file://{SRC}/{n}.html'); await pg.wait_for_timeout(600)
                await pg.evaluate("document.body.classList.add('sauber')")
                await pg.screenshot(path=f'{OUT}/{n}{suf}.jpg', type='jpeg', quality=88)
                await pg.evaluate("document.body.classList.remove('sauber')")
                await pg.screenshot(path=f'{OUT}/{n}{suf}-erklaert.jpg', type='jpeg', quality=88)
                await pg.close()
            print(n)
        await b.close()
asyncio.run(main())
