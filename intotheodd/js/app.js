/* INTO THE ODD – Spielleiter-Tafel. Hash-Routing: #start · #regeln · #arcana · #sl · #abenteuer · #oddpendium */
"use strict";
var APP = document.getElementById("app");
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
function go(h){ if(location.hash === "#" + h) render(); else location.hash = h; }
function openBook(id, p){ try{ BV.open(id || "ito_core", p || 1); }catch(e){} }
window.addEventListener("hashchange", function(){ render(); });
/* Bereiche = Reiter der Kopfzeile */
var AREAS = [
 {id:"regeln", t:"Regeln", k:"Charakter, Spielablauf, Kampf, nach der Expedition", c:"#f06a9a"},
 {id:"arcana", t:"Arcana", k:"Mächte, die niemand versteht", c:"#e2561e"},
 {id:"sl", t:"Spielleitung", k:"Schätze, Hindernisse, Begegnungen, die Odd-Welt", c:"#0b9a96"},
 {id:"abenteuer", t:"Abenteuer", k:"Die Eiserne Koralle und Fan-Material", c:"#6a6ee8"},
 {id:"oddpendium", t:"Oddpendium", k:"Würfeltabellen für unterwegs", c:"#f5d9c8"}
];
function route(){ var h = (location.hash || "#start").slice(1).split("/"); return h[0] || "start"; }
function sub(){ return (location.hash || "").slice(1).split("/")[1] || ""; }
function ktabs(r){
  document.getElementById("ktabs").innerHTML = r === "start" ? "" : AREAS.map(function(a){ return '<a class="' + (a.id === r ? "on" : "") + '" onclick="go(\'' + a.id + '\')">' + esc(a.t) + '</a>'; }).join("");
}
function viewStart(){
  return '<section class="hero"><div class="bg"></div><div class="shade"></div>' +
    '<div class="mid"><img class="tit" src="../assets/logos/into-the-odd.webp" alt="Into the Odd"><div class="sub">Erforscher, Arcana und der Untergrund von Bastion</div></div>' +
    '<div class="areas">' + AREAS.map(function(a){ return '<a class="area" style="--c:' + a.c + '" onclick="go(\'' + a.id + '\')"><b>' + esc(a.t) + '</b><span>' + esc(a.k) + '</span></a>'; }).join("") + '</div></section>';
}
function viewArea(r){
  var a = AREAS.filter(function(x){ return x.id === r; })[0];
  return '<div class="page"><h2>' + esc(a ? a.t : "") + '</h2></div>';
}
function render(){
  var r = route();
  document.body.classList.toggle("start", r === "start");
  ktabs(r);
  APP.innerHTML = r === "start" ? viewStart() : r === "regeln" ? viewRegeln(sub()) : r === "arcana" ? viewArcana(sub()) : viewArea(r);
  if(r === "regeln") startHover();
  window.scrollTo(0, 0);
}
/* Menü (Burger) */
function openMenu(on){
  var P = document.getElementById("mmP");
  P.innerHTML = '<h3>Into the Odd</h3><button onclick="openMenu(false);go(\'start\')">Startseite</button>' +
    AREAS.map(function(a){ return '<button onclick="openMenu(false);go(\'' + a.id + '\')">' + esc(a.t) + '</button>'; }).join("") +
    '<button onclick="openMenu(false);openBook(\'ito_core\',1)">Corebook öffnen</button><button onclick="openMenu(false);openBook(\'ito_mat\',1)">Oddditional Materials öffnen</button>';
  P.classList.toggle("on", !!on); document.getElementById("mmB").classList.toggle("on", !!on);
}
/* i-Knopf: Kurzüberblick */
function infoOpen(){
  var m = document.createElement("div"); m.className = "modal";
  m.innerHTML = '<div><h2>Into the Odd</h2><div class="inf">' +
    '<b>Die Welt</b><span>Zu groß zum Kartieren, zu alt zum Aufzeichnen. Ihr seid Erforscher aus Bastion und sucht Reichtum, Wissen und Macht – vor allem Arcana, seltsame Geräte mit unnatürlichen Kräften.</span>' +
    '<b>Charaktere</b><span>Stärke, Geschicklichkeit und Willenskraft mit 3W6 würfeln, dazu W6 Trefferschutz (hp). Das Startpaket ergibt sich aus Trefferschutz und höchstem Wert.</span>' +
    '<b>Rettungswürfe</b><span>W20 gegen den passenden Wert: gleich oder darunter ist ein Erfolg. Die 1 gelingt immer, die 20 misslingt immer.</span>' +
    '<b>Kampf</b><span>Angriffe treffen immer. Schaden = Waffenwurf minus Rüstung. Erst sinkt der Trefferschutz, dann die Stärke; danach droht kritischer Schaden.</span>' +
    '<b>Rasten</b><span>Kurze Rast: alle hp zurück. Volle Rast (eine Woche Ruhe): alle Werte zurück.</span></div></div>';
  m.onclick = function(e){ if(e.target === m) m.remove(); };
  document.addEventListener("keydown", function f(e){ if(e.key === "Escape"){ m.remove(); document.removeEventListener("keydown", f); } });
  document.body.appendChild(m);
}
