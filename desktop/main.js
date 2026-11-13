/* Erzähler-Tafel – Desktop-Hülle (Electron). Liefert die Web-App aus dem Ordner "www" über einen lokalen Server
   (127.0.0.1, fester Port, damit gespeicherte Daten im Browserspeicher zwischen Starts erhalten bleiben). Kein Internet nötig. */
const { app, BrowserWindow, shell } = require("electron");
const http = require("http"), fs = require("fs"), path = require("path");

const ROOT = path.join(__dirname, "www");
const PORT = 47821;
const MIME = { ".html":"text/html; charset=utf-8", ".js":"text/javascript; charset=utf-8", ".mjs":"text/javascript; charset=utf-8", ".css":"text/css; charset=utf-8",
  ".json":"application/json; charset=utf-8", ".webmanifest":"application/manifest+json", ".svg":"image/svg+xml", ".png":"image/png", ".jpg":"image/jpeg", ".jpeg":"image/jpeg",
  ".webp":"image/webp", ".gif":"image/gif", ".ico":"image/x-icon", ".woff":"font/woff", ".woff2":"font/woff2", ".ttf":"font/ttf", ".otf":"font/otf", ".pdf":"application/pdf",
  ".mp3":"audio/mpeg", ".ogg":"audio/ogg", ".wav":"audio/wav", ".mp4":"video/mp4", ".webm":"video/webm", ".txt":"text/plain; charset=utf-8", ".wasm":"application/wasm", ".map":"application/json" };

function handler(req, res){
  let p;
  try { p = decodeURIComponent((req.url || "/").split("?")[0].split("#")[0]); } catch(e){ res.writeHead(400); return res.end(); }
  let f = path.normalize(path.join(ROOT, p));
  if(!f.startsWith(ROOT)){ res.writeHead(403); return res.end(); }
  fs.stat(f, (err, st) => {
    if(!err && st.isDirectory()){
      if(!p.endsWith("/")){ res.writeHead(301, { Location: p + "/" }); return res.end(); }
      f = path.join(f, "index.html");
    }
    fs.readFile(f, (e, data) => {
      if(e){ res.writeHead(404, {"Content-Type":"text/plain; charset=utf-8"}); return res.end("Nicht gefunden"); }
      res.writeHead(200, { "Content-Type": MIME[path.extname(f).toLowerCase()] || "application/octet-stream", "Cache-Control": "no-cache" });
      res.end(data);
    });
  });
}

function startServer(){
  return new Promise(resolve => {
    const s = http.createServer(handler);
    s.once("error", () => { const s2 = http.createServer(handler); s2.listen(0, "127.0.0.1", () => resolve(s2.address().port)); }); /* Port belegt: freier Port (gespeicherte Daten dann getrennt) */
    s.listen(PORT, "127.0.0.1", () => resolve(PORT));
  });
}

let win = null;
const lock = app.requestSingleInstanceLock();
if(!lock){ app.quit(); }
else {
  app.on("second-instance", () => { if(win){ if(win.isMinimized()) win.restore(); win.focus(); } });
  app.whenReady().then(async () => {
    const port = await startServer(), origin = "http://127.0.0.1:" + port;
    win = new BrowserWindow({ width: 1440, height: 900, minWidth: 420, minHeight: 500, backgroundColor: "#0d1014", title: "Erzähler-Tafel", autoHideMenuBar: true, fullscreen: true,
      icon: path.join(ROOT, "icons", "icon-512.png"), webPreferences: { contextIsolation: true, spellcheck: false } });
    win.webContents.setWindowOpenHandler(({ url }) => {
      if(url.startsWith(origin)) return { action: "allow" };
      if(/^https?:/i.test(url)) shell.openExternal(url);
      return { action: "deny" };
    });
    win.webContents.on("will-navigate", (e, url) => { if(!url.startsWith(origin)){ e.preventDefault(); if(/^https?:/i.test(url)) shell.openExternal(url); } });
    win.webContents.on("before-input-event", (e, input) => {
      if(input.type !== "keyDown") return;
      if(input.key === "F11"){ e.preventDefault(); win.setFullScreen(!win.isFullScreen()); }
      else if(input.key === "Escape" && win.isFullScreen() && !input.control && !input.alt){ /* Esc nur weiterreichen, Vollbild bleibt */ }
    });
    win.on("closed", () => { win = null; });
    win.webContents.on("did-finish-load", () => { win.webContents.insertCSS("::-webkit-scrollbar{width:0!important;height:0!important;display:none!important}"); });
    win.loadURL(origin + "/");
  });
  app.on("window-all-closed", () => app.quit());
}
