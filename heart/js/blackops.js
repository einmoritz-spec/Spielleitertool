/* Untersetting „Vermissian Black Ops“: Übersicht mit Netzplan, Linien, Einsätze, Regeln, Fraktionen */
(function(){
"use strict";
var B = function(){ return window.HT_BO || {}; };
var BK = "ht_z1";
function pg(p){ return p ? pgl(p, "S. " + p, BK) : ""; }
function bls(a){ return (a || []).map(function(b){ return blk(b); }).join(""); }
function lin(id){ return (B().linien || []).filter(function(l){ return l.id === id; })[0]; }
var TABS = [["", "Übersicht"], ["linien", "Linien"], ["einsatz", "Einsätze"], ["regeln", "Regeln"], ["fraktionen", "Fraktionen"]];
function nav(cur){
  return '<nav class="tabs bonav">' + TABS.map(function(t){ return '<a class="' + (t[0] === cur ? "on" : "") + '" onclick="go(\'blackops' + (t[0] ? "/" + t[0] : "") + '\')">' + t[1] + "</a>"; }).join("") + '<span class="sp"></span></nav>';
}
/* ---------- Übersicht ---------- */
function netzplan(sel){
  var L = B().linien || [];
  var leg = '<div class="bolegende"><h3>Linien</h3>' + L.map(function(l){ return '<a class="' + (sel === l.id ? "on" : "") + '" onclick="go(\'blackops/linien/' + l.id + '\')"><i style="background:' + l.farbe + '"></i>' + esc(l.t) + "</a>"; }).join("") + "</div>";
  return '<div class="bonetz"><img src="' + IMG("blackops/netzplan-s11") + '" alt="" onclick="boNetzKlick(event,this)"><div class="botitel">Ungefährer Plan des Vermissian-Netzes</div><div class="bokompl">(es ist kompliziert)</div>' + leg + "</div>";
}
window.boNetzKlick = function(e, img){
  try{
    var c = document.createElement("canvas"); c.width = img.naturalWidth; c.height = img.naturalHeight;
    var x = c.getContext("2d"); x.drawImage(img, 0, 0);
    var r = img.getBoundingClientRect(), px = Math.round((e.clientX - r.left) / r.width * c.width), py = Math.round((e.clientY - r.top) / r.height * c.height);
    var best = null, bd = 1e9, L = B().linien || [];
    var d = x.getImageData(Math.max(0, px - 14), Math.max(0, py - 14), 29, 29).data;
    L.forEach(function(l){
      var h = l.farbe.slice(1), R = parseInt(h.slice(0, 2), 16), G = parseInt(h.slice(2, 4), 16), Bl = parseInt(h.slice(4, 6), 16);
      for(var i = 0; i < d.length; i += 4){ var dd = Math.abs(d[i] - R) + Math.abs(d[i + 1] - G) + Math.abs(d[i + 2] - Bl); if(dd < bd){ bd = dd; best = l; } }
    });
    if(best && bd < 90) go("blackops/linien/" + best.id);
  }catch(err){}
};
function uebersicht(){
  var I = B().intro || {}, ib = I.b || [], cut = ib.findIndex(function(x){ return x && x.t === "h"; }); if(cut < 0) cut = ib.length;
  var linien = '<div class="bokarten">' + (B().linien || []).map(function(l){ return '<a class="bok" style="--lf:' + l.farbe + '" onclick="go(\'blackops/linien/' + l.id + '\')">' + (l.bild ? '<img src="' + IMG(l.bild) + '" alt="">' : '<span class="bokleer"></span>') + "<b>" + esc(l.t) + "</b><small>Standard-Stress: " + esc(l.stress) + "</small></a>"; }).join("") + "</div>";
  var rechts = '<div class="bohtx"><h1>Vermissian Black Ops</h1>' + pg(1) + '<div class="flach">' + bls(ib.slice(0, cut)) + "</div>" + linien + "</div>";
  var unten = '<div class="bogrid zwei"><div class="bobuch">' + bls(ib.slice(cut)) + '</div><div class="bobuch"><h3 class="h3">Die Vermissian, nach Linien' + pg(10) + "</h3>" + bls((B().netz || {}).b) + "</div></div>";
  return nav("") + '<div class="bowrap"><div class="boreihe">' + netzplan() + rechts + "</div>" + unten + "</div>";
}
/* ---------- Linie ---------- */
function streifen(l){
  return '<div class="bostreifen" style="--lf:' + l.farbe + '"><div class="bosl"></div>' + l.stationen.map(function(s){ var k = /\*$/.test(s), q = /\?$/.test(s); s = s.replace(/[*?]\s*$/, "").trim(); return '<div class="bost' + (k ? " knoten" : "") + '"><i></i><span>' + esc(s) + (q ? " ?" : "") + "</span></div>"; }).join("") + "</div>";
}
function karte(x){ return '<div class="bokarte"><h3>' + esc(x.t) + pg(x.p) + "</h3>" + String(x.b).split("\n\n").map(function(p){ return "<p>" + md(p) + "</p>"; }).join("") + (x.liste ? '<ul class="lst">' + x.liste.map(function(e){ return "<li>" + (e[1] ? '<a onclick="go(\'lm/' + e[1] + '\')">' + esc(e[0]) + "</a>" : esc(e[0])) + "</li>"; }).join("") + "</ul>" : "") + "</div>"; }
function linie(id){
  var L = B().linien || [], l = lin(id) || L[0];
  var sub = '<div class="unter bounter">' + L.map(function(x){ return '<a class="' + (x === l ? "on" : "") + '" style="--lf:' + x.farbe + '" onclick="go(\'blackops/linien/' + x.id + '\')"><i></i>' + esc(x.t) + "</a>"; }).join("") + "</div>";
  var kopf = '<div class="bolkopf' + (l.bild ? "" : " ohne") + '" style="--lf:' + l.farbe + '">' + (l.bild ? '<img class="bolbild" src="' + IMG(l.bild) + '" alt="" onclick="zoom(this.src)">' : "") +
    '<div class="bolk"><div class="bowill">' + (l.nichtwillkommen ? "Ihr seid nicht willkommen in …" : "Willkommen auf der …") + "</div><h1>" + esc(l.t) + pg(l.p) + '</h1><div class="bostress">Standard-Stress: ' + esc(l.stress) + "</div>" +
    l.einl.split("\n\n").map(function(p){ return '<p class="boeinl">' + md(p) + "</p>"; }).join("") + (l.hinweis ? '<p class="bohin">' + md(l.hinweis) + "</p>" : "") +
    '<div class="boatmo"><h3>Atmosphäre (W10)</h3><ol>' + l.atmo.map(function(a){ return "<li>" + esc(a) + "</li>"; }).join("") + "</ol></div>" + streifen(l) + "</div></div>";
  var ziele = (l.ziele || []).length ? '<h2 class="boh2">Ziele in der Stadt</h2><div class="bogrid">' + l.ziele.map(karte).join("") + "</div>" : "";
  var merk = (l.merkmale || []).length ? '<h2 class="boh2">Herausforderungen und Merkmale</h2><div class="bogrid">' + l.merkmale.map(karte).join("") + "</div>" : "";
  return nav("linien") + sub + '<div class="bowrap">' + kopf + ziele + merk + "</div>";
}
/* ---------- Einsätze ---------- */
function einsatz(){
  var S = B().spiel || [], A = B().ausr || {};
  var abs = '<div class="bogrid zwei">' + S.map(function(s){ return '<div class="bokarte gross' + (s.id === "beispiele" ? " breit" : "") + '"><h3>' + esc(s.t) + pg(s.p) + "</h3>" + (s.id === "stadt" ? '<img class="bobanner" src="' + IMG("blackops/stadt-s7") + '" alt="" onclick="zoom(this.src)">' : "") + bls(s.b) + "</div>"; }).join("") + "</div>";
  var aus = '<h2 class="boh2">Ausrüstung der Throne Division' + pg(A.p) + '</h2><p class="boeinl dunkel">' + md(A.einl || "") + '</p><div class="bogrid">' + (A.x || []).map(function(a){ return '<div class="bokarte aus"><h3>' + esc(a.t) + '<span class="bokost">Kosten: ' + esc(a.k) + '</span></h3><p class="bow">' + md(a.w) + "</p><p>" + md(a.b) + "</p></div>"; }).join("") + "</div>";
  return nav("einsatz") + '<div class="bowrap">' + abs + aus + "</div>";
}
function regeln(){
  var R = B().regeln || [];
  var ord = ["aufstieg","heilung","spire","domains","fallout"], RR = ord.map(function(i){ return R.filter(function(x){ return x.id === i; })[0]; }).filter(Boolean);
  return nav("regeln") + '<div class="bowrap"><div class="bogrid drei">' + RR.map(function(s){ return '<div class="bokarte gross' + (s.id === "domains" || s.id === "fallout" ? " breit" : "") + '"><h3>' + esc(s.t) + pg(s.p) + "</h3>" + (s.id === "spire" ? '<img class="bobanner" src="' + IMG("blackops/regeln-s4") + '" alt="" onclick="zoom(this.src)">' : "") + bls(s.b) + "</div>"; }).join("") + "</div></div>";
}
/* ---------- Fraktionen ---------- */
function w(l, v){ return v ? '<div class="gv"><span class="lbl">' + l + "</span> " + md(v) + "</div>" : ""; }
function stat(g){
  var werte = g.schw || g.res ? '<div class="gv"><span class="lbl">Schwierigkeit:</span> ' + esc(g.schw || "–") + ' · <span class="lbl">Resistenz:</span> ' + esc(g.res || "–") + ' · <span class="lbl">Schutz:</span> ' + esc(g.schutz || "–") + "</div>" : "";
  var vs = w("Namen:", g.namen) + w("Beschreibung:", g.besch) + w("Motivation:", g.motiv) + werte + w("Ressourcen:", g.ressourcen) + w("Ausrüstung:", g.ausr) + w("Domains:", g.dom) + w("Besonderes:", g.besonders);
  return '<div class="bostat"><div class="gh"><span class="platte">' + esc(g.t) + "</span> " + pg(g.p) + "</div>" + (g.text ? "<p>" + md(g.text) + "</p>" : "") + (vs ? '<div class="gvs">' + vs + "</div>" : "") +
    (g.liste ? '<ul class="lst">' + g.liste.map(function(x){ return "<li>" + md(x) + "</li>"; }).join("") + "</ul>" : "") +
    (g.fallout || []).map(function(f){ return '<div class="dfo"><p><b class="dfon">Fallout: ' + esc(f.t) + ".</b> [" + esc(f.s) + "] " + md(f.x) + "</p></div>"; }).join("") + "</div>";
}
function fraktionen(id){
  var G = B().gruppen || [], g = G.filter(function(x){ return x.id === id; })[0] || G[0];
  var sub = '<div class="unter">' + G.map(function(x){ return '<a class="' + (x === g ? "on" : "") + '" onclick="go(\'blackops/fraktionen/' + x.id + '\')">' + esc(x.t) + "</a>"; }).join("") + "</div>";
  var bild = g.id === "ministerium" ? '<img class="bofbild" src="' + IMG("blackops/ministerium-s25") + '" alt="" onclick="zoom(this.src)">' : "";
  var st = (g.stat || []).map(stat).join("");
  return nav("fraktionen") + sub + '<div class="bowrap"><div class="boseitef' + (st ? "" : " eins") + '"><div class="bofl"><h1 class="boh1">' + esc(g.t) + pg(g.p) + '</h1><p class="bozitat">' + esc(g.zitat || "") + "</p>" + bild + '<div class="flach">' + bls(g.b) + '</div></div>' + (st ? '<div class="bofr">' + st + "</div>" : "") + "</div></div>";
}
VIEWS.blackops = function(a){
  var s = a[0] || "";
  if(s === "linien") return linie(a[1]);
  if(s === "einsatz") return einsatz();
  if(s === "regeln") return regeln();
  if(s === "fraktionen") return fraktionen(a[1]);
  return uebersicht();
};
var prev = window.afterRender;
window.afterRender = function(){
  if(prev) prev();
  document.body.classList.toggle("bo", /^#blackops/.test(location.hash));
};
})();
