import sys,asyncio
from playwright.async_api import async_playwright
SRC='/home/claude/spielleitertool/plan/household/mockups/src/'
async def main(names):
    async with async_playwright() as p:
        b=await p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--allow-file-access-from-files'])
        pg=await b.new_page(viewport={'width':1280,'height':800})
        pg.on('pageerror',lambda e:print('JS',e))
        for n in names:
            for q,suf in (('?clean',''),('','-erklaert')):
                await pg.goto('file://'+SRC+n+'.html'+q); await pg.wait_for_timeout(900)
                await pg.screenshot(path=f'/home/claude/spielleitertool/plan/household/mockups/{n}{suf}.jpg',full_page=True,type='jpeg',quality=82)
        await b.close()
asyncio.run(main(sys.argv[1:]))
