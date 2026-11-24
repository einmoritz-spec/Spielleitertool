#!/usr/bin/env python3
"""Screenshots der Entwürfe: python3 shot.py <html> <png> [breite höhe] [--full] [--erk]
   --erk blendet die Erklär-Kästen (.ann) ein; ohne --erk werden sie ausgeblendet."""
import sys, asyncio
from playwright.async_api import async_playwright
async def main():
    a = [x for x in sys.argv[1:] if not x.startswith('--')]; fl = [x for x in sys.argv[1:] if x.startswith('--')]
    src, out = a[0], a[1]; w, h = (int(a[2]), int(a[3])) if len(a) > 3 else (1440, 900)
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome')
        pg = await b.new_page(viewport={'width': w, 'height': h})
        await pg.goto('file://' + __import__('os').path.abspath(src))
        if '--erk' not in fl:
            await pg.add_style_tag(content='.ann{display:none!important}')
        await pg.evaluate('document.fonts.ready'); await pg.wait_for_timeout(400)
        await pg.screenshot(path=out, full_page='--full' in fl, type='jpeg' if out.endswith('.jpg') else 'png', **({'quality': 88} if out.endswith('.jpg') else {}))
        await b.close()
asyncio.run(main())
