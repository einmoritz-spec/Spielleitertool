/* The Wildsea – Spielleiter-Tafel. Hash-Routing: #start · #reiche · #reich/<id>/<tab> · #nach/<bereich> */
"use strict";
var APP = document.getElementById("app");
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
function IMG(p){ return "img/" + p + ".webp"; }
var ST = {};
function load(){ try{ ST = JSON.parse(localStorage.getItem("ws_state_v1") || "{}"); }catch(e){ ST = {}; } }
function save(){ try{ localStorage.setItem("ws_state_v1", JSON.stringify(ST)); }catch(e){} }
load();
function go(h){ if(location.hash === "#" + h) render(); else location.hash = h; }
function openBook(id, p){ BV.open(id, p); }
function route(){ render(); }
window.addEventListener("hashchange", route);

var KACHELN = [
 {t:"Regeln", k:"Kap. 2–5 · S. 30", img:"kapitel/regeln", go:"nach/regeln"},
 {t:"Charaktere", k:"Kap. 6–7 · S. 78", img:"kapitel/charaktere", go:"nach/charaktere"},
 {t:"Schiffe", k:"Kap. 8 · S. 162", img:"kapitel/schiffe", go:"nach/schiffe"},
 {t:"Die Wildsee", k:"Kap. 1 · S. 4", img:"kapitel/wildsee", go:"nach/wildsee"},
 {t:"Leitfaden", k:"Kap. 9 · S. 186", img:"kapitel/leitfaden", go:"nach/leitfaden"},
 {t:"Am Tisch", k:"Kap. 12 · S. 336", img:"kapitel/tisch", go:"nach/tisch"}
];
var START_EXT = [
 {t:"Fertige Charaktere", k:"Charaktere", img:"kapitel/charaktere", go:"nach/charaktere"},
 {t:"Schiffsgärten", k:"Ship-Gardens", img:"garten/titel-schiffsgaerten", go:"nach/schiffe/sg-ernte-an-deck"},
 {t:"Das Wilde Blau", k:"Storm and Root · S. 7", img:"wildsee/sr-blau-eroeffnung-aeronaut-ueberm-kronendach", go:"nach/wildsee/sr-blau-kernkonzepte"},
 {t:"Die erdrückenden Tiefen", k:"Storm and Root · S. 41", img:"sr/tiefe-kapitelbild-lowport-bernsteinkuppel", go:"nach/wildsee/sr-tiefe-kernkonzepte"}
];
var stN = 0;
function stPanel(img, go, t, k){ return '<a class="st-p" tabindex="0" style="--n:' + (stN++) + '" onclick="go(\'' + go + '\')" onkeydown="if(event.key===\'Enter\')go(\'' + go + '\')"><span class="i" style="background-image:url(' + IMG(img) + ')"></span><span class="t"><b>' + esc(t) + '</b>' + (k ? '<em class="pg">' + esc(k) + '</em>' : '') + '<u></u></span></a>'; }
function stStrip(cls, panels){ stN = 0; return '<div class="st-strip ' + cls + '">' + panels + '</div>'; }
function viewStart(){
  var vor = stStrip("big", KACHELN.map(function(k){ return stPanel(k.img, k.go, k.t, k.k); }).join(""));
  var reichCard = function(r){ return stPanel("reich/" + r.id, "reich/" + r.id, r.t.replace(/^The /, "").replace(/^Weitere /, ""), r.p ? "S. " + r.p : ""); };
  var rc = stStrip("m", WS_REICHE.filter(function(r){ return !r.q; }).map(reichCard).join(""));
  var rsr = stStrip("m", WS_REICHE.filter(function(r){ return r.q === "sr"; }).map(reichCard).join(""));
  var szImg = {"red-right-hand":"szen/rrh/hetterjin-turm-titel", "one-armed-scissor":"szen/oas/titel-hanging-manor"};
  var sc = stStrip("big", WS_SZENARIEN.filter(function(s){ return s.id && szImg[s.id]; }).map(function(s){ return stPanel(szImg[s.id], "szenario/" + s.id, s.t, "Szenario"); }).join(""));
  var ext = stStrip("m", START_EXT.map(function(e){ return stPanel(e.img, e.go, e.t, e.k); }).join(""));
  var tools = '<button onclick="go(\'bogen\')">Charakterbogen</button><button onclick="go(\'schiff\')">Schiffsbogen</button><button onclick="go(\'schirm\')">Spielleiterschirm</button><button onclick="go(\'galerie\')">Galerie</button>' + (typeof viewGarten === "function" ? '<button onclick="go(\'garten\')">Gartenbogen</button>' : '');
  return '<div class="st"><div class="st-hero"><img src="img/hero.webp" alt=""><h1>The Wildsea</h1></div>' +
    '<section class="st-sec"><h2>Vorbereitung</h2>' + vor + '</section>' +
    '<section class="st-sec"><h2>In See stechen</h2><div class="st-sub">Corebook</div>' + rc +
    '<div class="st-sub">Storm and Root</div>' + rsr +
    '<div class="st-sub">Abenteuer</div>' + sc + '</section>' +
    '<section class="st-sec"><h2>Neu: Erweiterungen</h2>' + ext + '</section>' +
    '<section class="st-sec"><h2>Werkzeuge</h2><div class="st-tools">' + tools + '</div></section></div>';
}
function viewReiche(){
  var last = ST.last && (ST.last.split("/")[1] || "");
  var card = function(r){
    var n = 0, h = (ST.reiche && ST.reiche[r.id] && ST.reiche[r.id].hooks) || {}; for(var k in h) if(h[k]) n++;
    var tot = ((window.WS_REICH[r.id] || {}).fraktionen || []).reduce(function(a, f){ return a + (f.haken || []).length; }, 0) || 12;
    return '<a class="rc' + (r.id === last ? ' cur' : '') + '" onclick="go(\'reich/' + r.id + '\')"><div class="im" style="background-image:url(' + IMG("reich/" + r.id) + ')"><h3>' + esc(r.t) + '</h3></div><div class="b"><p>' + esc(r.kurz) + '</p><span class="st"><b>' + n + ' / ' + tot + '</b>Aufhänger</span></div></a>';
  };
  var cards = WS_REICHE.filter(function(r){ return !r.q; }).map(card).join(""), cards2 = WS_REICHE.filter(function(r){ return r.q; }).map(card).join("");
  var sz = WS_SZENARIEN.map(function(s){ return (s.id ? '<a onclick="go(\'szenario/' + s.id + '\')">' : '<div>') + '<b>' + esc(s.t) + '</b><small>' + esc(s.s) + '</small>' + (s.id ? '</a>' : '</div>'); }).join("");
  return '<div class="tabs"><a class="on">Reiche</a></div><div class="pad"><div class="rg">' + cards + '</div>' + (cards2 ? '<h2 class="sec" style="margin-top:22px">Storm and Root</h2><div class="rg">' + cards2 + '</div>' : '') + '<h2 class="sec" style="margin-top:22px">Szenarien</h2><div class="sz">' + sz + '</div></div>';
}
function viewPlatzhalter(t){ return '<div class="tabs"><a class="on">' + esc(t) + '</a></div><div class="pad"><h2 class="sec">' + esc(t) + '</h2></div>'; }
function render(){
  var h = (location.hash || "#start").slice(1).split("/"), v = h[0] || "start", out;
  if(v === "start") out = viewStart();
  else if(v === "reiche") out = viewReiche();
  else if(v === "reich"){ ST.last = h.slice(1).join("/"); save(); out = viewReich(h[1], h[2], h[3]); }
  else if(v === "gefahren") out = viewGefahren(h[1]);
  else if(v === "schirm") out = viewSchirm();
  else if(v === "garten") out = viewGarten();
  else if(v === "galerie") out = viewGalerie();
  else if(v === "bogen") out = viewBogen(h[1]);
  else if(v === "schiff") out = viewSchiff();
  else if(v === "nach") out = viewNach(h[1] || "regeln", h[2]);
  else if(v === "szenario") out = viewNach(h[1] || "red-right-hand", h[2], true);
  else out = viewPlatzhalter(h.slice(1).join(" ") || v);
  var y = scrollY, same = window.__lh === location.hash; window.__lh = location.hash; APP.innerHTML = out; scrollTo(0, same ? y : 0);
}
function buildMenu(){
  document.getElementById("mmP").innerHTML = '<h3>Werkzeuge</h3><button onclick="openMenu(false);sOpen(true)">Suche</button><button onclick="openMenu(false);go(\'schirm\')">Spielleiterschirm &amp; Würfel</button><button onclick="openMenu(false);go(\'gefahren\')">Gefahren</button><button onclick="openMenu(false);go(\'garten\')">Gartenbogen</button><button onclick="openMenu(false);go(\'bogen\')">Charakterbogen</button>' + WS_BUECHER.map(function(g){ return '<h3>' + esc(g.grp) + '</h3>' + g.items.map(function(b){ return '<button onclick="openMenu(false);BV.open(\'' + b.id + '\',1)">' + esc(b.name) + '</button>'; }).join(""); }).join("");
}
function openMenu(on){ if(on) buildMenu(); document.getElementById("mmB").classList.toggle("on", on); document.getElementById("mmP").classList.toggle("on", on); }
document.addEventListener("keydown", function(e){
  if(/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "")) return;
  if(e.key === "Escape") openMenu(false);
  if(e.key === "h"){ var t = document.querySelector(".topbar"); t.style.display = t.style.display === "none" ? "" : "none"; }
});
render();
