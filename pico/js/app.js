/* PICO – Spielleiter-Tafel. Hash-Routing:
   #start · #reich/<id>/<tab>[/<sel>] · #gefahren[/<id>] · #nach/<bereich>[/<id>] · #streifzug · #schirm · #galerie */
"use strict";
var APP = document.getElementById("app");
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
/* einfaches Markup im Datentext: *kursiv* → Hinweis an den Weber, **fett** */
function md(s){ return esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\*(.+?)\*/g, '<i class="gm">$1</i>').replace(/\n/g, "<br>"); }
function IMG(p){ return "img/" + p + ".webp"; }
var ST = {};
function load(){ try{ ST = JSON.parse(localStorage.getItem("pi_state_v1") || "{}") || {}; }catch(e){ ST = {}; } }
function save(){ try{ localStorage.setItem("pi_state_v1", JSON.stringify(ST)); }catch(e){} }
load();
function go(h){ if(location.hash === "#" + h) render(); else location.hash = h; }
function openBook(id, p){ try{ BV.open(id || "pi_core", p || 1); }catch(e){} }
function pgl(p, txt){ var n = parseInt(String(p || "").replace(/\D/g, ""), 10); return n ? '<span class="pg" onclick="event.stopPropagation();openBook(\'pi_core\',' + n + ')">' + (txt || "S. " + String(p).replace(/^S\.\s*/, "")) + '</span>' : ""; }
window.addEventListener("hashchange", function(){ render(); });

/* ---------- Blöcke ---------- */
function blk(L){
  return (L || []).map(function(b){
    if(typeof b === "string") return "<p>" + md(b) + "</p>";
    switch(b.t){
      case "p": return "<p>" + md(b.x) + "</p>";
      case "h": return "<h3>" + esc(b.x) + (b.p ? pgl(b.p) : "") + "</h3>";
      case "h4": return "<h4>" + esc(b.x) + "</h4>";
      case "ul": return '<ul class="bul">' + b.x.map(function(x){ return "<li>" + md(x) + "</li>"; }).join("") + "</ul>";
      case "dl": return '<ul class="bul">' + b.x.map(function(x){ return "<li><b>" + esc(x[0]) + ":</b> " + md(x[1]) + "</li>"; }).join("") + "</ul>";
      case "vl": return '<div class="vl"' + (b.c ? ' style="--c:' + b.c + '"' : '') + '>' + md(b.x) + (b.wer ? "<small>" + esc(b.wer) + "</small>" : "") + "</div>";
      case "box": return '<div class="box" style="' + (b.c ? '--c:' + b.c + ';' : '') + 'margin:10px 0"><div class="hd">' + esc(b.h) + (b.p ? pgl(b.p) : "") + '</div><div class="bd2 txt">' + (b.b ? blk(b.b) : md(b.x)) + "</div></div>";
      case "fill": return '<div class="fillbox" style="' + (b.c ? '--c:' + b.c + ';' : '') + 'margin:10px 0">' + (b.h ? "<h3>" + esc(b.h) + "</h3>" : "") + '<div class="txt">' + (b.b ? blk(b.b) : md(b.x)) + "</div></div>";
      case "tint": return '<div class="tint txt" style="margin:10px 0">' + (b.h ? '<b>' + esc(b.h) + '</b> ' : '') + (b.b ? blk(b.b) : md(b.x)) + "</div>";
      case "tbl": return tbl(b);
      case "bsp": return bsp(b);
      case "erg": return erg(b);
      case "d6": return d6tab(b.h, b.rows, b.id);
      case "img": return '<img class="bimg" src="' + IMG(b.src) + '" alt="" onclick="zoom(this.src)">';
      case "cards": return cards(b);
      case "grid": return '<div class="grid' + (b.n || 2) + '" style="margin:10px 0">' + b.x.map(function(c){ return '<div class="txt">' + blk(c) + "</div>"; }).join("") + "</div>";
    }
    return "";
  }).join("");
}
/* Bild-Übersicht: x:[{t,img?,p?,c?,k?(Kurztext),b:[Blöcke]}] – Klick öffnet Detail */
var CARDS = [];
function exc(L, n){
  var t = ""; (L || []).some(function(x){ var v = typeof x === "string" ? x : (x && (x.t === "p" || x.t === "tint" || x.t === "box") && typeof x.x === "string" ? x.x : ""); if(v){ t = v; return true; } });
  t = t.replace(/[*_]+/g, "").replace(/\s+/g, " ").trim(); return t.length > n ? t.slice(0, n).replace(/\s+\S*$/, "") + " …" : t;
}
/* Kachel: mit Bild → Bildkachel, sonst kompakte Textkachel */
function tile(o){
  var st = o.c ? '--c:' + o.c : "";
  return '<div class="gc' + (o.img ? '' : ' nt') + '" style="' + st + '" onclick="' + o.go + '">' + (o.img ? '<div class="im"><img loading="lazy" src="' + IMG(o.img) + '" alt=""></div>' : '') +
    '<h3>' + esc(o.t) + '</h3>' + (o.k ? '<small>' + esc(o.k) + '</small>' : '') + (!o.img && o.x ? '<p class="ex">' + esc(o.x) + '</p>' : '') + '</div>';
}
function cards(b){
  var base = CARDS.length; b.x.forEach(function(c){ CARDS.push(c); });
  return '<div class="ggr" style="margin:10px 0">' + b.x.map(function(c, i){ return tile({t:c.t, c:c.c || b.c, img:c.img, k:c.k || (c.p ? "S. " + c.p : ""), x:exc(c.b, 150), go:"cardOpen(" + (base + i) + ")"}); }).join("") + '</div>';
}
function cardOpen(i){ var c = CARDS[i]; modal('<div class="box"' + (c.c ? ' style="--c:' + c.c + '"' : '') + '><div class="hd">' + esc(c.t) + (c.p ? pgl(c.p) : "") + '</div><div class="bd2 gl txt">' + (c.img ? '<img class="eimg big" src="' + IMG(c.img) + '" alt="" onclick="zoom(this.src)">' : '') + blk(c.b) + '</div></div>', true, c.c); }
function tbl(b){
  return '<table class="tbl" style="margin:8px 0">' + (b.head ? "<tr>" + b.head.map(function(h){ return "<th>" + esc(h) + "</th>"; }).join("") + "</tr>" : "") +
    b.rows.map(function(r){ return "<tr>" + r.map(function(c){ return "<td>" + md(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</table>";
}
/* Beispiel-Dialog „– … EXAMPLE –“ */
function bsp(b){
  return '<div class="bsp"><h4>' + esc(b.h || "Beispiel") + '</h4>' + b.b.map(function(z){ return z[0] ? '<p><b>' + esc(z[0]) + ':</b> ' + md(z[1]) + '</p>' : '<p class="gm">' + md(z[1]) + '</p>'; }).join("") + "</div>";
}
/* Ergebnis-Tabelle (Triumph/Konflikt/Desaster/Wendung) */
function erg(b){
  return '<div class="erg" style="' + (b.c ? '--c:' + b.c : '') + '"><h4>' + esc(b.h) + (b.p ? pgl(b.p) : "") + '</h4>' + b.rows.map(function(r){ return '<div><b>' + esc(r[0]) + '</b><span>' + md(r[1]) + '</span></div>'; }).join("") + "</div>";
}
/* W6-Tabellen (anklickbar) */
var D6 = {};
function d6tab(h, rows, id){
  id = id || ("d6_" + (h || "") + rows[0]).replace(/[^a-z0-9]/gi, "").slice(0, 40);
  var hit = D6[id];
  return '<div class="d6"><h4>' + esc(h || "") + '<span class="dice" onclick="d6roll(\'' + id + '\')">' + (hit || "·") + '</span></h4><table class="tbl">' +
    rows.map(function(r, i){ return '<tr class="' + (hit === i + 1 ? 'hit' : '') + '"><td class="n">' + (i + 1) + '</td><td>' + md(r) + '</td></tr>'; }).join("") + "</table></div>";
}
function d6roll(id){ D6[id] = 1 + Math.floor(Math.random() * 6); render(); }

function zoom(src){ var d = document.createElement("div"); d.className = "gzoom"; d.onclick = function(){ d.remove(); }; d.innerHTML = '<img src="' + src + '" alt="">'; document.body.appendChild(d); }
function modal(html, wide, c){
  var m = document.createElement("div"); m.className = "modal" + (wide ? " wide" : "");
  m.innerHTML = '<div' + (c ? ' style="--c:' + c + '"' : '') + '>' + html + '</div>';
  m.onclick = function(e){ if(e.target === m) m.remove(); };
  document.body.appendChild(m); return m;
}
/* Notizen: nur Stift-Symbol */
var PEN = '<svg class="pen" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20h4L19 9l-4-4L4 16z"/></svg>';
function note(k){
  ST.notes = ST.notes || {};
  var m = modal('<textarea id="nt"></textarea><div class="act"><button>Fertig</button></div>');
  var t = m.querySelector("textarea"); t.value = ST.notes[k] || ""; t.focus();
  var close = function(){ ST.notes[k] = t.value; save(); m.remove(); render(); };
  m.querySelector("button").onclick = close; m.onclick = function(e){ if(e.target === m) close(); };
}
function penTab(k){ return '<span class="r' + (ST.notes && ST.notes[k] ? ' has' : '') + '" onclick="note(\'' + k + '\')" title="Notizen">' + PEN + '</span>'; }
/* Seitenleiste + Inhalt */
function lay(side, body){
  return '<div class="lay' + (ST.fold ? ' fold-on' : '') + '">' + side + '<button class="fold" onclick="foldSide()">' + (ST.fold ? '›' : '‹') + '</button><div class="ct">' + body + '</div></div>';
}
function foldSide(){ ST.fold = !ST.fold; save(); render(); }
function kurz(t){ return String(t).split(":")[0]; }
function jump(id){ var e = document.getElementById(id); if(e) e.scrollIntoView({block:"start", behavior:"smooth"}); }

/* ---------- Herzleisten ----------
   Notation wie im Buch: ♥ = Feld, • = Bruch. Zustand: Array mit 0/1/2 (leer/markiert/verbrannt) */
function hParse(n){ return String(n || "").replace(/[^♥•]/g, ""); }
function hearts(notation, state, onclickFn, cls){
  var n = hParse(notation), i = 0, out = "";
  for(var k = 0; k < n.length; k++){
    if(n[k] === "•"){ out += '<i class="brk"></i>'; continue; }
    var s = state ? (state[i] || 0) : 0;
    out += '<i class="h' + (s === 1 ? ' m' : s === 2 ? ' x' : '') + '"' + (onclickFn ? ' onclick="event.stopPropagation();' + onclickFn + '(' + i + ')"' : '') + '></i>';
    i++;
  }
  return '<span class="hearts' + (cls ? ' ' + cls : '') + (onclickFn ? ' click' : '') + '">' + out + '</span>';
}
function hCount(n){ return hParse(n).replace(/•/g, "").length; }
function hCycle(arr, i){ arr[i] = ((arr[i] || 0) + 1) % 3; }

/* ---------- Startseite ---------- */
var KACHELN = [
 {t:"Die Welt", s:"Kernideen · Die Mysteriokalypse · Käfer! · Größe · Banden · Siedlungen · Nicht-Käfer · Katzen · Picotitanen", k:"Kap. 1 · S. 6", img:"kapitel/k01-welt", go:"nach/welt", c:"var(--teal)"},
 {t:"Regeln", s:"Grundregeln · Szenen · Montagen · Reisen", k:"Kap. 2–5 · S. 28", img:"kapitel/k02-grundregeln", go:"nach/regeln", c:"var(--violet)"},
 {t:"Käfer bauen", s:"Nektar · 18 Aspekt-Gruppen · Fertigkeiten · Stimmungen · Bröckchen & Krimskrams · Rätsel · Namen", k:"Kap. 6–7 · S. 98", img:"kapitel/k06-kaefer-1", go:"nach/kaefer", c:"var(--amber)"},
 {t:"Picotitanen", s:"Streifzugbogen · Gunst · Aura & Gigafertigkeiten · 12 Titanen · Titanenbau", k:"Kap. 8 · S. 170", img:"kapitel/k08-picotitanen", go:"nach/titanen", c:"var(--olive)"},
 {t:"Der Weber", s:"Sitzung Null · Sicherheit · Planen · NSC · Belohnungen & Folgen · Gefahren leiten", k:"Kap. 9 · S. 190", img:"kapitel/k09-weber", go:"nach/weber", c:"var(--blue)"},
 {t:"Anhang", s:"Regelübersicht · Charakterbögen · Streifzugbögen · Nützliche Links", k:"Kap. 12 · S. 338", img:"kapitel/k12-anhang", go:"nach/anhang", c:"var(--plum)"}
];
function viewStart(){
  var last = ST.last ? ST.last.split("/")[0] : "";
  var tiles = KACHELN.map(function(k){ return '<button class="ti" style="--c:' + k.c + '" onclick="go(\'' + k.go + '\')"><div class="im" style="background-image:url(' + IMG(k.img) + ')"></div><div class="tx"><h3>' + esc(k.t) + '</h3><p>' + esc(k.s) + '</p><span class="k">' + esc(k.k) + '</span></div></button>'; }).join("");
  var rl = PI_REICHE.map(function(r){ return '<a class="' + (r.id === last ? 'last' : '') + '" style="background-image:url(' + IMG("reich/" + r.id) + ')" onclick="go(\'reich/' + r.id + '\')"><span>' + esc(r.t) + '</span></a>'; }).join("");
  return '<div class="hero"></div><div class="swrap"><div><div class="sec"><h2 style="font-size:40px">Vorbereitung</h2></div><div class="tiles">' + tiles + '</div>' +
    '<div style="margin-top:14px"><span class="chip ink" onclick="bogen()">Charakterbogen</span><span class="chip ink" onclick="go(\'streifzug\')">Streifzugbogen</span><span class="chip ink" onclick="go(\'schirm\')">Regelübersicht</span><span class="chip ink" onclick="wOpen()">Würfel</span><span class="chip ink o" onclick="go(\'galerie\')">Galerie</span></div></div>' +
    '<div class="go"><h2>Losziehen</h2><div class="sub">Die Reiche · Kap. 11</div><div class="rl">' + rl + '</div><div class="sub absub">Abenteuer</div><div class="rl abrl">' + Object.keys(window.PI_AB || {}).map(function(k){ var A = PI_AB[k]; return '<a style="background-image:url(' + IMG(A.img) + ')" onclick="go(\'abenteuer/' + k + '\')"><span>' + esc(A.t) + '</span></a>'; }).join("") + '</div><button class="gef" onclick="go(\'gefahren\')">Winzige Gefahren</button></div></div>';
}
function bogen(){ go("bogen/picnic"); }

/* ---------- Render ---------- */
function setTheme(dark, c, t){
  document.body.classList.toggle("dark", !!dark);
  document.documentElement.style.setProperty("--c", c || "var(--teal)");
  document.documentElement.style.setProperty("--t", t || "var(--t-teal)");
}
function needJS(L){ if(!L.length){ render(); return; } var sc = document.createElement("script"); sc.src = L[0] + "?v=" + Date.now(); sc.onload = sc.onerror = function(){ needJS(L.slice(1)); }; document.body.appendChild(sc); }
function render(){ CARDS = [];
  var h = (location.hash || "#start").slice(1).split("/").map(decodeURIComponent), v = h[0] || "start", out;
  setTheme(false);
  if(v === "start") out = viewStart();
  else if(v === "reich"){ ST.last = h.slice(1).join("/"); save(); out = viewReich(h[1], h[2], h[3]); }
  else if(v === "gefahren") out = viewGefahren(h[1], h[2]);
  else if(v === "nach") out = window.viewNach ? viewNach(h[1] || "welt", h[2]) : viewStart();
  else if(v === "streifzug") out = viewStreif();
  else if(v === "schirm") out = window.viewSchirm ? viewSchirm(h[1]) : viewStart();
  else if(v === "galerie") out = window.viewGalerie ? viewGalerie() : viewStart();
  else if(v === "bogen") out = viewBogen(h[1], h[2]);
  else if(v === "abenteuer"){ if(!window.viewAbenteuer || !window.PI_AB){ needJS(["js/data/abenteuer-trueffel.js", "js/data/abenteuer-trueffel-kaefer.js", "js/abenteuer.js"]); return; } out = viewAbenteuer(h[1], h[2], h[3]); }
  else out = viewStart();
  var same = window.__lh === location.hash, y = scrollY; window.__lh = location.hash;
  APP.innerHTML = out; scrollTo(0, same ? y : 0);
  if(window.afterRender) afterRender();
}
function buildMenu(){
  document.getElementById("mmP").innerHTML = '<h3>Werkzeuge</h3>' +
    '<button onclick="openMenu(false);sOpen(true)">Suche</button>' +
    '<button onclick="openMenu(false);wOpen()">Würfel</button>' +
    '<button onclick="openMenu(false);go(\'schirm\')">Regelübersicht</button>' +
    '<button onclick="openMenu(false);go(\'gefahren\')">Gefahren</button>' +
    '<button onclick="openMenu(false);go(\'streifzug\')">Streifzugbogen</button>' +
    '<button onclick="openMenu(false);bogen()">Charakterbogen</button>' +
    '<button onclick="openMenu(false);go(\'galerie\')">Galerie</button>' +
    '<h3>Abenteuer</h3>' + Object.keys(window.PI_AB || {}).map(function(k){ return '<button onclick="openMenu(false);go(\'abenteuer/' + k + '\')">' + esc(PI_AB[k].t) + '</button>'; }).join("") +
    '<h3>Nachschlagen</h3>' + KACHELN.map(function(k){ return '<button onclick="openMenu(false);go(\'' + k.go + '\')">' + esc(k.t) + '</button>'; }).join("") +
    '<h3>Bücher</h3>' + PI_BUECHER.map(function(g){ return g.items.map(function(b){ return '<button onclick="openMenu(false);openBook(\'' + b.id + '\',1)">' + esc(b.name) + ' (' + b.lang + ')</button>'; }).join(""); }).join("") +
    '<button onclick="openMenu(false);modal(BV.settingsHTML())">PDF hochladen …</button>';
}
function openMenu(on){ if(on) buildMenu(); document.getElementById("mmB").classList.toggle("on", on); document.getElementById("mmP").classList.toggle("on", on); }
document.addEventListener("keydown", function(e){
  if(/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "") || e.ctrlKey || e.metaKey || e.altKey) return;
  if(e.key === "Escape"){ openMenu(false); document.querySelectorAll(".modal,.gzoom").forEach(function(m){ m.remove(); }); }
  if(e.key === "h") document.body.classList.toggle("notop");
  if(e.key === "b"){ foldSide(); }
  if(e.key === "w" && window.wOpen) wOpen();
  if(e.key === "/" && window.sOpen){ e.preventDefault(); sOpen(); }
  if(e.key === "s" && window.viewSchirm) go("schirm");
});
