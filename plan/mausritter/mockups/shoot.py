from playwright.sync_api import sync_playwright
import os, sys
names = sys.argv[1:] or ["start-a","start-b","start-c","garten","maeuse","anwesen"]
with sync_playwright() as p:
    b=p.chromium.launch(executable_path="/usr/bin/google-chrome",args=["--allow-file-access-from-files","--no-sandbox"])
    pg=b.new_page(viewport={"width":1280,"height":800})
    pg.on("pageerror", lambda e: print("ERR", e))
    for n in names:
        if not os.path.exists(n+".html"): continue
        pg.goto("file://"+os.path.abspath(n+".html")); pg.wait_for_timeout(600)
        pg.screenshot(path=n+".png")
        print("ok", n)
