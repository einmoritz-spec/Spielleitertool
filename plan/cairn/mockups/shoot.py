from playwright.sync_api import sync_playwright
import os
with sync_playwright() as p:
    b=p.chromium.launch(executable_path="/usr/bin/google-chrome",args=["--allow-file-access-from-files","--no-sandbox"])
    pg=b.new_page(viewport={"width":1280,"height":800})
    for n in "abc":
        pg.goto("file://"+os.path.abspath(n+".html")); pg.wait_for_timeout(500); pg.screenshot(path=f"/tmp/mock-{n}.png")
