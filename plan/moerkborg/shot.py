import sys, asyncio
from playwright.async_api import async_playwright
# usage: shot.py out.png url [w h] [fullpage]
async def main():
    out,url=sys.argv[1],sys.argv[2]; w=int(sys.argv[3]) if len(sys.argv)>3 else 1440; h=int(sys.argv[4]) if len(sys.argv)>4 else 900
    full=len(sys.argv)>5 and sys.argv[5]=='full'
    async with async_playwright() as p:
        b=await p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--allow-file-access-from-files'])
        pg=await b.new_page(viewport={'width':w,'height':h})
        msgs=[]; pg.on('console',lambda m: msgs.append(m.text)); pg.on('pageerror',lambda e: msgs.append('ERR '+str(e)))
        await pg.goto(url); await pg.wait_for_timeout(700)
        await pg.screenshot(path=out, full_page=full, type='jpeg' if out.endswith('jpg') else 'png', **({'quality':90} if out.endswith('jpg') else {}))
        # overflow check: elements whose content is clipped
        r=await pg.evaluate('''()=>{const o=[];document.querySelectorAll('body *').forEach(e=>{const s=getComputedStyle(e);if(e.closest('.ann'))return;if((s.overflow=='hidden'||s.textOverflow=='ellipsis'||s.overflowY=='hidden')&&(e.scrollHeight>e.clientHeight+2||e.scrollWidth>e.clientWidth+2)&&e.clientHeight>0)o.push((e.className||e.tagName)+' '+e.scrollWidth+'x'+e.scrollHeight+'>'+e.clientWidth+'x'+e.clientHeight)});return o.slice(0,15)}''')
        if r: print('CLIPPED:',r)
        if msgs: print('CONSOLE:',msgs[:10])
        await b.close()
asyncio.run(main())
