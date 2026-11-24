#!/usr/bin/env python3
"""Baut aus dem Repo EINE einzelne, eigenständige HTML-Datei (CSS, JS und Bilder
eingebettet). Nützlich zum Weitergeben per Mail/USB oder zum Öffnen per
Doppelklick (file://), wo der Browser sonst keine Dateien nachladen darf.

    python3 tools/build-standalone.py            ->  dist/Wake-of-the-Oldways_standalone.html
"""
import base64, mimetypes, os, re, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
read = lambda p: open(os.path.join(ROOT, p), encoding="utf-8").read()

html = read("index.html")
# PWA-Teile brauchen in der Einzeldatei nicht
html = re.sub(r'<link rel="(?:manifest|icon|apple-touch-icon)"[^>]*>\n?', "", html)
html = re.sub(r'<script>\s*// PWA: Service Worker.*?</script>\n?', "", html, flags=re.S)

html = re.sub(r'<link rel="stylesheet" href="([^"]+)">',
              lambda m: "<style>\n" + read(m.group(1)) + "\n</style>", html)
html = re.sub(r'<script src="([^"]+)"></script>',
              lambda m: "<script>\n" + read(m.group(1)) + "\n</script>", html)

def data_uri(m):
    path = m.group(0)
    mime = mimetypes.guess_type(path)[0] or "application/octet-stream"
    with open(os.path.join(ROOT, path), "rb") as f:
        return f"data:{mime};base64," + base64.b64encode(f.read()).decode()
html = re.sub(r'assets/[A-Za-z0-9_\-/.]+\.(?:png|jpe?g|webp|svg|gif)', data_uri, html)

out_dir = os.path.join(ROOT, "dist")
os.makedirs(out_dir, exist_ok=True)
out = os.path.join(out_dir, "Wake-of-the-Oldways_standalone.html")
open(out, "w", encoding="utf-8").write(html)
print(f"{out}  ({os.path.getsize(out)/1e6:.1f} MB)")
