/* Gemeinsame Volltextsuche (Taste „f“ als Overlay) für alle Systeme.
   Jedes System registriert Quellen und setzt window.sucheOpen = GSuche.open:
     GSuche.add(function(add){ add(titel, bereich, hash, daten); });   // wird beim ersten Öffnen aufgerufen
       titel   – Überschrift des Treffers (z. B. "Kampf › Initiative")
       bereich – Gruppenname im Overlay (z. B. "Regeln", "Abenteuer", "Gegner")
       hash    – Ziel als "#…"-Hash ODER Funktion, die beim Klick aufgerufen wird
       daten   – beliebige Struktur (Strings/Arrays/Objekte); wird zu Text abgeflacht
     GSuche.skip = {img:1, bild:1, …}   // zusätzliche Schlüssel, die nicht durchsucht werden
   Optional: add(…, daten, meta) – meta wird an GSuche.filter(meta) (false = Treffer ausblenden) und GSuche.badge(meta) (HTML hinter dem Titel) gereicht;
             hash-Funktionen erhalten den Suchtext als Argument.
   Treffer müssen alle Suchwörter am Wortanfang enthalten; Umlaute/Groß-/Kleinschreibung egal. Esc schließt, Enter öffnet den ersten Treffer. */
var GSuche = (function(){
  var SRC = [], IDX = null, SKIP = {img:1, bild:1, src:1, id:1, p:1, pin:1, buch:1, go:1, farbe:1, c:1, pos:1, x0:1, y0:1, fig:1, icon:1, thumb:1};
  var PFAD = /^(img|assets)\/|\.(webp|png|jpe?g|svg)$/i, RE = {}, ov = null;
  function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  function norm(s){ return String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ß/g, "ss"); }
  function clean(s){ return String(s).replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, " ").replace(/[*§_`#]/g, "").replace(/&nbsp;/g, " "); }
  function flat(o, out, d){
    if(o == null || (d || 0) > 12) return out;
    if(typeof o === "string"){ if(!PFAD.test(o) && o.charAt(0) !== "#") out.push(clean(o)); return out; }
    if(typeof o !== "object") return out;
    if(Array.isArray(o)){ o.forEach(function(x){ flat(x, out, (d || 0) + 1); }); return out; }
    Object.keys(o).forEach(function(k){ if(SKIP[k] || GSuche.skip[k]) return; if(k === "t" && typeof o[k] === "string" && /^(p|h|ul|ol|kasten|zettel|werte|grid|karten|tab|html|img|notiz|zitat|w)$/.test(o[k])) return; flat(o[k], out, (d || 0) + 1); });
    return out;
  }
  function add(titel, bereich, hash, daten, meta){
    var t = flat(daten, []).join(" ").replace(/\s+/g, " ").trim();
    titel = clean(titel || "");
    IDX.push({t: titel, b: bereich || "Inhalt", h: hash, m: meta, x: t, n: norm(titel + " " + t), nt: norm(titel)});
  }
  function build(){ if(IDX) return; IDX = []; SRC.forEach(function(f){ try{ f(add); }catch(e){ if(window.console) console.warn("GSuche", e); } }); }
  function find(q){
    var w = norm(q).split(/\s+/).filter(function(x){ return x.length > 1 || /\d/.test(x); });
    if(!w.length) return {w: w, r: []};
    var res = [];
    IDX.forEach(function(e){
      var s = 0;
      if(GSuche.filter && e.m && !GSuche.filter(e.m)) return;
      for(var i = 0; i < w.length; i++){
        var re = RE[w[i]] || (RE[w[i]] = new RegExp("(^|[^a-z0-9])" + w[i].replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
        if(!re.test(e.n)) return;
        s += 1 + (re.test(e.nt) ? 12 : 0);
      }
      res.push({e: e, s: s});
    });
    res.sort(function(a, b){ return b.s - a.s; });
    return {w: w, r: res};
  }
  function snip(e, w){
    var nt = norm(e.x), p = -1;
    for(var i = 0; i < w.length && p < 0; i++){ var m = nt.search(new RegExp("(^|[^a-z0-9])" + w[i].replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))); if(m >= 0) p = m; }
    if(p < 0) return esc(e.x.slice(0, 140));
    var a = Math.max(0, p - 55), s = e.x.slice(a, a + 190);
    return (a > 0 ? "… " : "") + esc(s) + (a + 190 < e.x.length ? " …" : "");
  }
  function mark(html, w){
    w.forEach(function(x){
      var re = new RegExp("(^|[^A-Za-zÄÖÜäöüß0-9])(" + x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi");
      html = html.replace(/(<[^>]*>)|([^<]+)/g, function(m, tag, txt){ return tag ? tag : txt.replace(re, "$1<mark>$2</mark>"); });
    });
    return html;
  }
  var CSS = ".gs{position:fixed;inset:0;z-index:100000;background:rgba(10,8,8,.55);backdrop-filter:blur(2px);display:flex;justify-content:center;align-items:flex-start;padding:7vh 3vw 0}" +
    ".gs-in{width:min(1100px,94vw);max-height:84vh;overflow:auto;border-radius:8px;box-shadow:0 24px 70px rgba(0,0,0,.55);padding:18px 22px 26px;border:1px solid rgba(127,127,127,.35)}" +
    ".gs input{width:100%;box-sizing:border-box;font:22px/1.2 inherit;font-family:inherit;padding:12px 16px;border-radius:6px;border:1px solid rgba(127,127,127,.5);background:rgba(127,127,127,.14);color:inherit;outline:none}" +
    ".gs input:focus{border-color:currentColor}" +
    ".gs-z{font:12px/1 sans-serif;letter-spacing:.12em;text-transform:uppercase;opacity:.6;margin:14px 0 2px}" +
    ".gs-g{font:700 14px/1 sans-serif;letter-spacing:.14em;text-transform:uppercase;margin:22px 0 10px;opacity:.85}" +
    ".gs-r{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:10px}" +
    ".gs-k{display:block;padding:10px 14px;border:1px solid rgba(127,127,127,.35);background:rgba(127,127,127,.1);border-radius:5px;text-decoration:none;color:inherit;cursor:pointer}" +
    ".gs-k:hover{border-color:currentColor;background:rgba(127,127,127,.2)}.gs-k b{display:block;font-size:16px;line-height:1.25;margin-bottom:4px}" +
    ".gs-k span{display:block;font-size:14.5px;line-height:1.4;opacity:.85}.gs mark{background:rgba(224,176,40,.55);color:inherit;padding:0 1px;border-radius:2px}.gs-l{padding:28px 0;opacity:.6}";
  function theme(el){
    var bs = getComputedStyle(document.body), bg = bs.backgroundColor, rs = getComputedStyle(document.documentElement);
    if(!bg || /rgba\(.*,\s*0\)$/.test(bg) || bg === "transparent") bg = rs.backgroundColor;
    if(!bg || /rgba\(.*,\s*0\)$/.test(bg) || bg === "transparent") bg = "#1b1816";
    el.style.background = bg; el.style.color = bs.color; el.style.fontFamily = bs.fontFamily;
    var m = bg.match(/\d+/g); if(m && (0.299 * m[0] + 0.587 * m[1] + 0.114 * m[2]) > 140 && (bs.color.match(/\d+/g) || [0])[0] > 150) el.style.color = "#1b1816";
  }
  function close(){ if(ov){ ov.remove(); ov = null; document.removeEventListener("keydown", onKey, true); } }
  function onKey(e){ if(e.key === "Escape"){ e.stopPropagation(); close(); } }
  function run(q){
    var out = ov.querySelector(".gs-e"), R = find(q), gr = {}, order = [];
    if(!R.w.length){ out.innerHTML = ""; return; }
    if(!R.r.length){ out.innerHTML = '<div class="gs-l">Nichts gefunden.</div>'; return; }
    R.r.forEach(function(x){ var b = x.e.b; if(!gr[b]){ gr[b] = []; order.push(b); } if(gr[b].length < 30) gr[b].push(x.e); });
    out.innerHTML = '<div class="gs-z">' + R.r.length + ' Treffer</div>' + order.map(function(b){
      return '<div class="gs-g">' + esc(b) + '</div><div class="gs-r">' + gr[b].map(function(e){
        var i = IDX.indexOf(e);
        return '<a class="gs-k" data-i="' + i + '"' + (typeof e.h === "string" ? ' href="' + esc(e.h.charAt(0) === "#" ? e.h : "#" + e.h) + '"' : '') + '><b>' + mark(esc(e.t), R.w) + (GSuche.badge && e.m ? GSuche.badge(e.m) : "") + '</b><span>' + mark(snip(e, R.w), R.w) + '</span></a>';
      }).join("") + '</div>';
    }).join("");
  }
  function open(q){
    if(ov){ var i0 = ov.querySelector("input"); i0.focus(); i0.select(); return; }
    build();
    if(!document.getElementById("gsCss")){ var st = document.createElement("style"); st.id = "gsCss"; st.textContent = CSS; document.head.appendChild(st); }
    ov = document.createElement("div"); ov.className = "gs";
    ov.innerHTML = '<div class="gs-in"><input type="search" autocomplete="off" placeholder="Suchen …" aria-label="Suchen"><div class="gs-e"></div></div>';
    theme(ov.firstChild);
    document.body.appendChild(ov);
    ov.onclick = function(e){
      var a = e.target.closest && e.target.closest(".gs-k");
      if(a){ var x = IDX[+a.getAttribute("data-i")], qq = ov.querySelector("input").value; close(); if(typeof x.h === "function"){ e.preventDefault(); x.h(qq); } return; }
      if(e.target === ov) close();
    };
    var inp = ov.querySelector("input"); inp.value = typeof q === "string" ? q : ""; inp.focus();
    inp.oninput = function(){ run(inp.value); };
    inp.onkeydown = function(e){ if(e.key === "Enter"){ var a = ov.querySelector(".gs-k"); if(a) a.click(); } };
    document.addEventListener("keydown", onKey, true);
    if(inp.value) run(inp.value);
  }
  return {add: function(f){ SRC.push(f); IDX = null; }, open: open, close: close, skip: {}, filter: null, badge: null};
})();
