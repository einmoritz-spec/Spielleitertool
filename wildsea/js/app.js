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
 {t:"Die Wildsee", s:"Rauschende Wellen, Schichten der See, Zivilisation, Technik, Spiritualität, Arconautik", k:"Kap. 1 · S. 4", img:"kapitel/wildsee", go:"nach/wildsee"},
 {t:"Regeln", s:"Wild-Words-Engine, Leisten, Aktionen, Szenen, Montagen, Reisen", k:"Kap. 2–5 · S. 30", img:"kapitel/regeln", go:"nach/regeln"},
 {t:"Charaktere", s:"Blutlinien, Herkünfte, Posten, Stärken, Fertigkeiten, Aspekte", k:"Kap. 6–7 · S. 78", img:"kapitel/charaktere", go:"nach/charaktere"},
 {t:"Schiffe", s:"Entwurf, Ausstattung, Unterbesatzung, Schiffswerte", k:"Kap. 8 · S. 162", img:"kapitel/schiffe", go:"nach/schiffe"},
 {t:"Leitfaden", s:"Sitzung Null, Ton, Tempo, Werkzeugkasten, Belohnungen, NSC", k:"Kap. 9 · S. 186", img:"kapitel/leitfaden", go:"nach/leitfaden"},
 {t:"Am Tisch", s:"Namen, alternative Wendungen, Eintagsfliegen-Regeln, Glossar", k:"Kap. 12 · S. 336", img:"kapitel/tisch", go:"nach/tisch"}
];
function viewStart(){
  var tiles = KACHELN.map(function(k){ return '<button class="ti" onclick="go(\'' + k.go + '\')"><div class="im" style="background-image:url(' + IMG(k.img) + ')"></div><div class="b"><h3>' + esc(k.t) + '</h3><p>' + esc(k.s) + '</p><span class="pg">' + esc(k.k) + '</span></div></button>'; }).join("");
  var rs = WS_REICHE.filter(function(r){ return !r.q; }).map(function(r){ return '<a style="background-image:url(' + IMG("reich/" + r.id) + ')" onclick="go(\'reich/' + r.id + '\')"><span>' + esc(r.t.replace(/^The /, "")) + '</span></a>'; }).join("");
  var sc = WS_SZENARIEN.slice(0, 2).map(function(s){ return s.id ? '<a onclick="go(\'szenario/' + s.id + '\')"><b>' + esc(s.t) + '</b>Szenario</a>' : '<div><b>' + esc(s.t) + '</b>Szenario</div>'; }).join("");
  return '<div class="hero"></div><div class="wrap"><div><h2 class="sec">Vorbereitung</h2><div class="tiles">' + tiles + '</div>' +
    '<div class="chips"><button class="chip" onclick="openBook(\'ws_core\',362)">Charakterbogen</button><button class="chip" onclick="openBook(\'ws_core\',363)">Schiffsbogen</button><button class="chip" onclick="go(\'nach/charaktere\')">Fertige Charaktere</button><button class="chip" onclick="go(\'schirm\')">Spielleiterschirm</button><button class="chip" onclick="go(\'galerie\')">Galerie</button></div></div>' +
    '<div class="go"><h3>In See stechen</h3><div class="rs">' + rs + '</div><a class="bt" onclick="go(\'reiche\')">Reiche &amp; Szenarien</a><div class="sc">' + sc + '</div></div></div>';
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
  else if(v === "galerie") out = viewGalerie();
  else if(v === "nach") out = viewNach(h[1] || "regeln", h[2]);
  else if(v === "szenario") out = viewNach(h[1] || "red-right-hand", h[2], true);
  else out = viewPlatzhalter(h.slice(1).join(" ") || v);
  var y = scrollY, same = window.__lh === location.hash; window.__lh = location.hash; APP.innerHTML = out; scrollTo(0, same ? y : 0);
}
function buildMenu(){
  document.getElementById("mmP").innerHTML = '<h3>Werkzeuge</h3><button onclick="openMenu(false);sOpen(true)">Suche</button><button onclick="openMenu(false);go(\'schirm\')">Spielleiterschirm &amp; Würfel</button><button onclick="openMenu(false);go(\'gefahren\')">Gefahren</button>' + WS_BUECHER.map(function(g){ return '<h3>' + esc(g.grp) + '</h3>' + g.items.map(function(b){ return '<button onclick="openMenu(false);BV.open(\'' + b.id + '\',1)">' + esc(b.name) + '</button>'; }).join(""); }).join("");
}
function openMenu(on){ if(on) buildMenu(); document.getElementById("mmB").classList.toggle("on", on); document.getElementById("mmP").classList.toggle("on", on); }
document.addEventListener("keydown", function(e){
  if(/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "")) return;
  if(e.key === "Escape") openMenu(false);
  if(e.key === "h"){ var t = document.querySelector(".topbar"); t.style.display = t.style.display === "none" ? "" : "none"; }
});
render();
