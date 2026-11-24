import asyncio,os,mimetypes,sys
from playwright.async_api import async_playwright
ROOT="/home/claude/spielleitertool"
SRC=ROOT+"/plan/tftl/mockups/src/"
TOP='<div class="top"><img class="logo" src="img/electric-state.webp"><span class="dd">▾</span><div class="sp"></div><span class="ib"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9.5"/><path d="M12 11v6M12 7.2v.4" stroke-linecap="round"/></svg></span><span class="ib"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 5c3-1.5 6-1.5 10 1v14c-4-2.5-7-2.5-10-1zM22 5c-3-1.5-6-1.5-10 1v14c4-2.5 7-2.5 10-1z"/></svg></span><span class="ib bur"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></span></div>'
async def handle(route):
  u=route.request.url.split("tafel.test/",1)[1].split("#")[0].split("?")[0]
  f=os.path.join(ROOT,u)
  if f.endswith(".html") and os.path.isfile(f):
    await route.fulfill(body=open(f).read().replace("<!--TOP-->",TOP),content_type="text/html"); return
  if os.path.isfile(f): await route.fulfill(path=f,content_type=mimetypes.guess_type(f)[0] or "application/octet-stream")
  else: print("404",u); await route.fulfill(status=404,body="")
os.makedirs("/tmp/esplan",exist_ok=True)
async def main():
  async with async_playwright() as p:
    b=await p.chromium.launch(executable_path="/usr/bin/google-chrome")
    for a in sys.argv[1:]:
      name,out=a.split(":")
      for w,h,suf in [(1440,900,""),(1280,800,"-1280")]:
        pg=await (await b.new_context(viewport={"width":w,"height":h})).new_page(); await pg.route("http://tafel.test/**",handle)
        errs=[]; pg.on("pageerror",lambda e:errs.append(str(e)))
        await pg.goto("http://tafel.test/plan/tftl/mockups/src/"+name); await pg.wait_for_timeout(900)
        path=(ROOT+"/plan/tftl/mockups/"+out+".jpg") if not suf else "/tmp/esplan/"+out+suf+".jpg"
        await pg.screenshot(path=path,type="jpeg",quality=82)
        if errs: print(errs)
    await b.close()
asyncio.run(main())
