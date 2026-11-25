/* CAIRN – Spielleiter-Tafel. Hash-Routing: #start · #<bereich>[/<kapitel>] · #hintergruende[/<id>]
   Daten: CN.add(bereich, {id,t,p,b:[Blöcke]}) in js/data/*.js · Hintergründe: CN_HG.push({…}) */
"use strict";
var APP = document.getElementById("app");
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
/* **fett**, *kursiv*, Zeilenumbruch */
function md(s){ return esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\*(.+?)\*/g, "<i>$1</i>").replace(/\n/g, "<br>"); }
var ST = {};
function load(){ try{ ST = JSON.parse(localStorage.getItem("cn_state_v1") || "{}") || {}; }catch(e){ ST = {}; } }
function save(){ try{ localStorage.setItem("cn_state_v1", JSON.stringify(ST)); }catch(e){} }
load();
function go(h){ if(location.hash === "#" + h) render(); else location.hash = h; }
window.addEventListener("hashchange", function(){ render(); });

/* ---------- Bücher / Seitenlinks (Buchseite → PDF-Seite) ---------- */
function bookPdfPage(p){ p = parseInt(p, 10) || 1; return p < 2 ? 1 : Math.floor(p / 2) + 1; }
function openBook(id, p){ try{ BV.open(id || "cn_p", bookPdfPage(p)); }catch(e){} }
function pgl(p, b){ var n = parseInt(String(p || "").replace(/\D/g, ""), 10); return n ? '<span class="pg" onclick="event.stopPropagation();openBook(\'' + (b || curBuch()) + '\',' + n + ')">S. ' + n + '</span>' : ""; }
function curBuch(){ return window.__buch || "cn_p"; }
function bookWahl(){
  var m = modal('<h3>Buch öffnen</h3>' + CN_BUECHER.map(function(b){ return '<button class="bk" onclick="this.closest(\'.modal\').remove();openBook(\'' + b.id + '\',1)">' + esc(b.name) + '</button>'; }).join("") + '<button class="bk o" onclick="this.closest(\'.modal\').remove();modal(BV.settingsHTML())">PDF hochladen …</button>');
  return m;
}
function modal(html, wide){
  var m = document.createElement("div"); m.className = "modal" + (wide ? " wide" : "");
  m.innerHTML = '<div>' + html + '</div>'; m.onclick = function(e){ if(e.target === m) m.remove(); };
  document.body.appendChild(m); return m;
}
function zoom(src){ var d = document.createElement("div"); d.className = "gzoom"; d.onclick = function(){ d.remove(); }; d.innerHTML = '<img src="' + src + '" alt="">'; document.body.appendChild(d); }

/* ---------- Daten ---------- */
var CN = { area:{}, add:function(a, k){ (CN.area[a] = CN.area[a] || []).push(k); }, get:function(a, id){ var L = CN.area[a] || []; for(var i = 0; i < L.length; i++) if(L[i].id === id) return L[i]; return null; } };
var CN_HG = [];
/* Bereiche: [id, Name, Untertitel, Buch, Hover-Bild] – Reihenfolge = Kopfzeile */
var BEREICHE = [
  {id:"charaktere", t:"Charaktere", s:"Erschaffung · Merkmale · Bindungen · Omen · Marktplatz", g:"Spielerhandbuch", b:"cn_p"},
  {id:"hintergruende", t:"Hintergründe", s:"20 Hintergründe mit Ausrüstung und Tabellen", g:"Spielerhandbuch", b:"cn_p"},
  {id:"regeln", t:"Regeln", s:"Rettungswürfe · Kampf · Narben · Magie", g:"Spielerhandbuch", b:"cn_p"},
  {id:"erkundung", t:"Erkundung", s:"Dungeon · Wildnis · Pausenzeit", g:"Spielerhandbuch", b:"cn_p"},
  {id:"vald", t:"Vald", s:"Das Setting: Reich, Wald und Wurzeln", g:"Beide Bücher", b:"cn_p"},
  {id:"weltenbau", t:"Weltenbau", s:"Setting-Samen · Fraktionen · Gelände · Dungeons · Wälder", g:"Spielleitung", b:"cn_w"},
  {id:"werkzeuge", t:"Werkzeuge", s:"Bestiarium · Monster · Namen · Wachstum · Zauber · Relikte", g:"Spielleitung", b:"cn_w"},
  {id:"rat", t:"Rat & FAQ", s:"Hintergründe erschaffen · Pointcrawls · Häufige Fragen", g:"Spielleitung", b:"cn_w"}
];
function bereich(id){ for(var i = 0; i < BEREICHE.length; i++) if(BEREICHE[i].id === id) return BEREICHE[i]; return null; }

/* ---------- Blöcke ---------- */
function blk(L){
  return (L || []).map(function(b){
    if(typeof b === "string") return "<p>" + md(b) + "</p>";
    switch(b.t){
      case "p": return "<p>" + md(b.x) + "</p>";
      case "h": return '<h3 id="h-' + hid(b.x) + '">' + esc(b.x) + (b.p ? pgl(b.p) : "") + "</h3>";
      case "h4": return "<h4>" + esc(b.x) + "</h4>";
      case "ul": return '<ul class="bul">' + b.x.map(function(x){ return "<li>" + md(x) + "</li>"; }).join("") + "</ul>";
      case "dl": return '<ul class="bul">' + b.x.map(function(x){ return "<li><b>" + esc(x[0]) + ":</b> " + md(x[1]) + "</li>"; }).join("") + "</ul>";
      case "box": return '<div class="box"><div class="hd">' + esc(b.h) + (b.p ? pgl(b.p) : "") + '</div><div class="bd2">' + (b.b ? blk(b.b) : md(b.x)) + "</div></div>";
      case "note": return '<div class="note">' + (b.b ? blk(b.b) : md(b.x)) + "</div>";
      case "tbl": return tbl(b);
      case "d": return dtab(b);
      case "grid": return '<div class="grid' + (b.n || 2) + '">' + b.x.map(function(c){ return '<div class="gc">' + blk(c) + "</div>"; }).join("") + "</div>";
      case "stats": return '<div class="stats">' + b.x.map(function(s){ return '<div><b>' + esc(s[0]) + '</b><span>' + esc(s[1]) + '</span><small>' + esc(s[2] || "") + '</small></div>'; }).join("") + '</div>';
      case "cards": return '<div class="cards">' + b.x.map(function(c){ return card(c); }).join("") + "</div>";
      case "deko": return '<div class="deko">' + b.x.map(function(n){ return '<img src="img/deko/' + n + '.webp" alt="" onclick="zoom(this.src)">'; }).join("") + "</div>";
      case "img": return '<img class="bimg" src="img/' + b.src + '" alt="" onclick="zoom(this.src)">';
    }
    return "";
  }).join("");
}
function hid(s){ return String(s).toLowerCase().replace(/[^a-z0-9äöüß]+/g, "-").replace(/^-|-$/g, ""); }
function tbl(b){
  return '<table class="tbl">' + (b.head ? "<tr>" + b.head.map(function(h){ return "<th>" + esc(h) + "</th>"; }).join("") + "</tr>" : "") +
    b.rows.map(function(r){ return "<tr>" + r.map(function(c){ return "<td>" + md(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</table>";
}
/* Würfeltabelle: {h, die, rows:[[nr, text]] | [text], cols:2?} – Klick auf eine Zeile markiert sie (Spielstand) */
var DH = {};
function dtab(b){
  var id = "d_" + hid((b.h || "") + (b.die || "")) + "_" + (b.rows.length);
  var sel = DH[id];
  var rows = b.rows.map(function(r, i){
    var nr = Array.isArray(r) && r.length > 1 && /^[\d–\-+]+$/.test(String(r[0])) ? r[0] : (i + 1), tx = Array.isArray(r) ? r[r.length - 1] : r;
    var nm = Array.isArray(r) && r.length === 3 ? r[1] : (Array.isArray(r) && r.length === 2 && !/^[\d–\-+]+$/.test(String(r[0])) ? r[0] : null);
    return '<tr class="' + (sel === i ? 'hit' : '') + '" onclick="dsel(\'' + id + '\',' + i + ')"><td class="n">' + esc(nr) + '</td><td>' + (nm ? '<b>' + esc(nm) + '</b> ' : '') + md(tx) + '</td></tr>';
  });
  return '<div class="dt' + (b.cols === 2 ? ' c2' : '') + '"><div class="dh"><span class="die">' + esc(b.die || "") + '</span><b>' + esc(b.h || "") + '</b></div><table class="tbl">' +
    (b.cols === 2 ? rows.slice(0, Math.ceil(rows.length / 2)).map(function(r, i){ return r + "" ; }).join("") + "</table><table class=\"tbl\">" + rows.slice(Math.ceil(rows.length / 2)).join("") : rows.join("")) + '</table></div>';
}
function dsel(id, i){ DH[id] = DH[id] === i ? null : i; render(); }
/* Monster-/Karten-Kasten */
function card(c){
  return '<div class="mc"><div class="mh"><b>' + esc(c.t) + '</b>' + (c.p ? pgl(c.p) : "") + '</div>' + (c.w ? '<div class="mw">' + md(c.w) + '</div>' : '') + '<div class="mb">' + (c.img ? '<img class="mi" src="img/' + c.img + '" alt="" onload="if(this.naturalWidth/this.naturalHeight>1.4)this.classList.add(\'wi\')" onclick="zoom(this.src)">' : '') + blk(c.b) + '</div></div>';
}

/* ---------- Notizen (Stift) ---------- */
var PEN = '<svg class="pen" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20h4L19 9l-4-4L4 16z"/></svg>';
function note(k){
  ST.notes = ST.notes || {};
  var m = modal('<textarea id="nt"></textarea><div class="act"><button>Fertig</button></div>');
  var t = m.querySelector("textarea"); t.value = ST.notes[k] || ""; t.focus();
  var close = function(){ ST.notes[k] = t.value; save(); m.remove(); render(); };
  m.querySelector("button").onclick = close; m.onclick = function(e){ if(e.target === m) close(); };
}
function penTab(k){ return '<span class="r' + (ST.notes && ST.notes[k] ? ' has' : '') + '" onclick="note(\'' + k + '\')" title="Notizen">' + PEN + '</span>'; }

/* ---------- Layout ---------- */
function lay(side, body){
  if(!side) return '<div class="lay solo"><div class="ct">' + body + '</div></div>';
  if(ST.fold) return '<div class="lay fold-on"><button class="fold fx" onclick="foldSide()" title="Leiste ausklappen">›</button><div class="ct">' + body + '</div></div>';
  return '<div class="lay">' + side.replace('<nav class="side">', '<nav class="side"><button class="fold" onclick="foldSide()" title="Leiste einklappen">‹</button>') + '<div class="ct">' + body + '</div></div>';
}
function foldSide(){ ST.fold = !ST.fold; save(); render(); }
function jump(id){ var e = document.getElementById(id); if(e) e.scrollIntoView({block:"start", behavior:"smooth"}); }

/* ---------- Startseite ---------- */
var ZAHL = ["I","II","III","IV","V","VI","VII","VIII"];
function viewStart(){
  var cells = BEREICHE.map(function(a, i){
    return '<a class="cell g-' + (a.g === "Spielleitung" ? "sl" : a.g === "Spielerhandbuch" ? "sp" : "bd") + '" onclick="go(\'' + a.id + '\')"><span class="z">' + ZAHL[i] + '</span><b>' + esc(a.t) + '</b><small>' + esc(a.s) + '</small></a>';
  }).join("");
  return '<section class="hero"><div class="hero-img"></div><div class="hero-fade"></div>' +
    '<div class="hero-in"><div class="hero-sub">Zweite Edition</div><div class="hero-k"><span class="kp">Spielerhandbuch</span><span class="kw">Spielleitung</span></div>' +
    '<div class="cells">' + cells + '</div></div></section>';
}

/* ---------- Bereichsansichten ---------- */
function chapters(areaId){ return CN.area[areaId] || []; }
function viewBereich(aid, kid){
  var A = bereich(aid); if(!A) return viewStart();
  window.__buch = A.b;
  if(aid === "hintergruende") return viewHG(kid);
  var L = chapters(aid);
  if(!L.length) return '<div class="pad"><p class="lead">Dieser Bereich ist noch in Arbeit.</p></div>';
  if(GRUPPEN[aid]) return viewGruppe(aid, kid, L, A);
  var cur = L[0]; L.forEach(function(k){ if(k.id === kid) cur = k; });
  window.__pen = aid + ":" + cur.id; window.__sub = L.length > 1 ? L.map(function(k){ return [aid + "/" + k.id, k.t, k.id === cur.id]; }) : null;
  var hs = (cur.b || []).filter(function(x){ return x && x.t === "h"; });
  var side = "";
  if(hs.length >= 4){ side = '<nav class="side">' + hs.map(function(h){ var m = h.x.match(/^(\d+)\s*[–-]\s*(.+)$/); return '<a onclick="jump(\'h-' + hid(h.x) + '\')">' + (m ? '<b class="nr">' + m[1] + '</b>' + esc(m[2]) : esc(h.x.split(":")[0])) + '</a>'; }).join("") + '</nav>'; }
  var body = '<div class="sec"><h2>' + esc(cur.t) + '</h2>' + (cur.p ? pgl(cur.p, cur.buch || A.b) : "") + '</div><div class="txt">' + blk(cur.b) + '</div>';
  window.__buch = cur.buch || A.b;
  return lay(side, body);
}

/* Bereiche mit Gruppen: Unterleiste = Gruppen, Seitenleiste = Kapitel der Gruppe, Inhalt flach untereinander */
function kurz(t){ var i = t.indexOf(": "); return i > 0 ? t.slice(i + 2) : t; }
function viewGruppe(aid, kid, L, A){
  var G = GRUPPEN[aid], cur = G[0];
  G.forEach(function(g){ if(g[0] === kid || g[2].indexOf(kid) >= 0) cur = g; });
  var ch = cur[2].map(function(id){ for(var i = 0; i < L.length; i++) if(L[i].id === id) return L[i]; return null; }).filter(Boolean);
  window.__pen = aid + ":" + cur[0];
  window.__sub = G.length > 1 ? G.map(function(g){ return [aid + "/" + g[0], g[1], g === cur]; }) : null;
  var side = ch.length > 1 ? '<nav class="side">' + ch.map(function(k){ return '<a onclick="jump(\'k-' + k.id + '\')">' + esc(kurz(k.t, cur[1])) + '</a>'; }).join("") + '</nav>' : "";
  var body = ch.map(function(k, i){ return '<div class="sec' + (i ? ' sec2' : '') + '" id="k-' + k.id + '"><h2>' + esc(kurz(k.t, cur[1])) + '</h2>' + (k.p ? pgl(k.p, k.buch || A.b) : "") + '</div><div class="txt">' + blk(k.b) + '</div>'; }).join("");
  window.__buch = (ch[0] && ch[0].buch) || A.b;
  if(kid !== cur[0] && ch.some(function(k){ return k.id === kid; })) setTimeout(function(){ jump("k-" + kid); }, 60);
  return lay(side, body);
}
/* Hintergründe: Kachelübersicht → Detail */
function viewHG(id){
  window.__buch = "cn_p";
  var h = null; CN_HG.forEach(function(x){ if(x.id === id) h = x; });
  if(!h){
    window.__pen = "hg"; window.__sub = null;
    return '<div class="pad"><div class="hgg">' + CN_HG.map(function(x){ return '<a class="hgt" onclick="go(\'hintergruende/' + x.id + '\')"><span class="no">' + x.n + '</span><img src="img/bg/' + x.img + '.webp" alt="" loading="lazy"><b>' + esc(x.t) + '</b></a>'; }).join("") + '</div></div>';
  }
  window.__pen = "hg:" + h.id; window.__sub = null;
  var i = CN_HG.indexOf(h), pv = CN_HG[(i + CN_HG.length - 1) % CN_HG.length], nx = CN_HG[(i + 1) % CN_HG.length];
  return '<div class="pad hgd"><div class="hgl"><div class="hgk">Hintergrund ' + h.n + '</div><h2>' + esc(h.t) + (h.p ? pgl(h.p) : "") + '</h2><p class="intro">' + md(h.intro) + '</p>' +
    '<div class="gear"><h4>Startausrüstung</h4><ul class="bul">' + h.gear.map(function(g){ return "<li>" + md(g) + "</li>"; }).join("") + '</ul></div>' +
    '<div class="names"><b>Namen:</b> ' + esc(h.names) + '</div>' + (h.extra ? '<div class="txt">' + blk(h.extra) + '</div>' : '') +
    '<div class="hgn"><a onclick="go(\'hintergruende/' + pv.id + '\')">‹ ' + esc(pv.t) + '</a><a onclick="go(\'hintergruende/' + nx.id + '\')">' + esc(nx.t) + ' ›</a></div></div>' +
    '<div class="hgm"><img src="img/bg/' + h.img + '.webp" alt="" onclick="zoom(this.src)"></div>' +
    '<div class="hgt2">' + h.tabs.map(function(t){ return dtab(t); }).join("") + '</div></div>';
}

/* ---------- Render ---------- */
function render(){
  var h = (location.hash || "#start").slice(1).split("/").map(decodeURIComponent), v = h[0] || "start", out;
  window.__sub = null; window.__pen = "";
  if(v === "start") out = viewStart(); else out = viewBereich(v, h[1]);
  document.body.classList.toggle("start", v === "start");
  var kt = document.getElementById("ktabs");
  if(kt) kt.innerHTML = v === "start" ? "" : BEREICHE.map(function(a){ return '<a class="' + (a.id === v ? 'on' : '') + '" onclick="go(\'' + a.id + (a.id === "hintergruende" ? "" : "") + '\')">' + esc(a.t) + '</a>'; }).join("");
  var sub = window.__sub ? '<div class="unter">' + window.__sub.map(function(x){ return '<a class="' + (x[2] ? 'on' : '') + '" onclick="go(\'' + x[0] + '\')">' + esc(x[1]) + '</a>'; }).join("") + '<span class="sp"></span>' + (window.__pen ? penTab(window.__pen) : '') + '</div>' : (window.__pen ? '<div class="unter min"><span class="sp"></span>' + penTab(window.__pen) + '</div>' : '');
  document.body.classList.toggle("mitunter", !!sub);
  var same = window.__lh === location.hash, y = scrollY; window.__lh = location.hash;
  APP.innerHTML = sub + out; scrollTo(0, same ? y : 0);
}
function buildMenu(){
  document.getElementById("mmP").innerHTML = '<h3>Bereiche</h3>' + BEREICHE.map(function(a){ return '<button onclick="openMenu(false);go(\'' + a.id + '\')">' + esc(a.t) + '</button>'; }).join("") +
    '<h3>Bücher</h3>' + CN_BUECHER.map(function(b){ return '<button onclick="openMenu(false);openBook(\'' + b.id + '\',1)">' + esc(b.name) + '</button>'; }).join("") +
    '<button onclick="openMenu(false);modal(BV.settingsHTML())">PDF hochladen …</button>';
}
function openMenu(on){ if(on) buildMenu(); document.getElementById("mmB").classList.toggle("on", on); document.getElementById("mmP").classList.toggle("on", on); }
document.addEventListener("keydown", function(e){
  if(/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "") || e.ctrlKey || e.metaKey || e.altKey) return;
  if(e.key === "Escape"){ openMenu(false); var o = document.querySelectorAll(".modal,.gzoom"); if(o.length){ o.forEach(function(m){ m.remove(); }); } else if(location.hash && location.hash !== "#start" && history.length > 1) history.back(); }
  if(e.key === "h") document.body.classList.toggle("notop");
  if(e.key === "ArrowRight" || e.key === "ArrowLeft"){
    var a = [].slice.call(document.querySelectorAll(".unter a")); if(!a.length) return;
    var i = a.findIndex(function(x){ return x.classList.contains("on"); }), n = a[i + (e.key === "ArrowRight" ? 1 : -1)]; if(n) n.click();
  }
  if(e.key === "ArrowDown" || e.key === "ArrowUp"){
    var s = [].slice.call(document.querySelectorAll(".side a")); if(!s.length) return; e.preventDefault();
    var cy = 120, k = -1; s.forEach(function(x, j){ var el = document.getElementById("h-" + (x.getAttribute("onclick") || "").replace(/.*h-([^']+)'.*/, "$1")); if(el && el.getBoundingClientRect().top <= cy + 4) k = j; });
    var t = s[Math.max(0, Math.min(s.length - 1, k + (e.key === "ArrowDown" ? 1 : -1)))]; if(t) t.click();
  }
});
document.addEventListener("keydown", function(e){
  if(!e.ctrlKey || /INPUT|TEXTAREA/.test((e.target || {}).tagName || "")) return;
  if(e.key === "ArrowRight" || e.key === "ArrowLeft"){
    var a = [].slice.call(document.querySelectorAll("#ktabs a")); if(!a.length) return; e.preventDefault();
    var i = a.findIndex(function(x){ return x.classList.contains("on"); }), n = a[i + (e.key === "ArrowRight" ? 1 : -1)]; if(n) n.click();
  }
});
