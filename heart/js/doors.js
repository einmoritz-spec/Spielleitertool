/* Untersetting „Doors to Elsewhere“: Übersicht, Stadt (Tag/Nacht), Landmarken, Fraktionen, Dimensionen, Beats, Tabellen */
(function(){
"use strict";
var D = function(){ return window.HT_DOORS || {}; };
var BK = "ht_z2";
function pg(p){ return p ? pgl(p, "S. " + p, BK) : ""; }
function bls(a){ return (a || []).map(function(b){ return blk(b); }).join(""); }
function paras(s){ return String(s || "").split("\n\n").map(function(p){ return "<p>" + md(p) + "</p>"; }).join(""); }
var TABS = [["", "Übersicht"], ["stadt", "Die Stadt"], ["landmarken", "Landmarken"], ["fraktionen", "Fraktionen"], ["dimensionen", "Dimensionen"], ["beats", "Beats"], ["tabellen", "Tabellen"]];
function nav(cur){ return '<nav class="tabs donav">' + TABS.map(function(t){ return '<a class="' + (t[0] === cur ? "on" : "") + '" onclick="go(\'doors' + (t[0] ? "/" + t[0] : "") + '\')">' + t[1] + "</a>"; }).join("") + '<span class="sp"></span>' + (cur === "stadt" ? nachtKnopf() : "") + "</nav>"; }
function nacht(){ return !!(ST.doNacht); }
function nachtKnopf(){ return '<button class="donacht" onclick="doNacht()" title="Tag/Nacht"><span class="' + (nacht() ? "" : "on") + '">Tag</span><span class="' + (nacht() ? "on" : "") + '">Nacht</span></button>'; }
window.doNacht = function(){ ST.doNacht = !ST.doNacht; save(); render(); };
function sec(s, cls){ return '<div class="dokarte ' + (cls || "") + '"><h3>' + esc(s.t) + pg(s.p) + "</h3>" + bls(s.b) + "</div>"; }
function stat(g){
  function w(l, v){ return v ? '<div class="gv"><span class="lbl">' + l + "</span> " + md(v) + "</div>" : ""; }
  return '<div class="dostat"><div class="gh"><span class="platte">' + esc(g.t) + "</span> " + pg(g.p) + '</div><div class="gvs">' + w("Namen:", g.namen) + w("Beschreibung:", g.besch) + w("Motivation:", g.motiv) + w("Schwierigkeit:", g.schw) + '<div class="gv"><span class="lbl">Resistenz:</span> ' + esc(g.res) + ' · <span class="lbl">Schutz:</span> ' + esc(g.schutz) + "</div>" + w("Ressourcen:", g.ressourcen) + w("Ausrüstung:", g.ausr) + w("Besonderes:", g.besonders) + w("Domains:", g.dom) + "</div>" +
    (g.fallout || []).map(function(f){ return '<div class="dfo"><p><b class="dfon">Fallout: ' + esc(f.t) + ".</b> [" + esc(f.s) + "] " + md(f.x) + "</p></div>"; }).join("") + "</div>";
}
/* ---------- Übersicht ---------- */
function uebersicht(){
  var A = D().abenteuer || [], by = {}; A.forEach(function(a){ by[a.id] = a; });
  var hero = '<div class="dohero"><img src="' + IMG("doors/cover") + '" alt="" onclick="zoom(this.src)"><div class="dohtx"><h1>Doors to Elsewhere</h1><div class="doverse">' + (D().verse || []).map(function(v){ return "<p>" + esc(v) + "</p>"; }).join("") + "</div>" + (by.einstieg ? '<div class="doein">' + bls(by.einstieg.b) + "</div>" : "") + "</div></div>";
  var reihe = '<div class="dogrid zwei">' + ["wirklich", "ende"].map(function(k){ return by[k] ? sec(by[k]) : ""; }).join("") + "</div>";
  var wo = by.wo ? sec(by.wo, "breit") : "", diebe = by.diebstahl ? sec(by.diebstahl) : "", taeter = by.taeter ? sec(by.taeter, "breit") : "", lt = by.leitung ? sec(by.leitung, "breit") : "";
  return nav("") + '<div class="dowrap">' + hero + reihe + wo + '<div class="dogrid zwei">' + diebe + "</div>" + taeter + lt + "</div>";
}
/* ---------- Stadt ---------- */
function stadt(){
  var S = D().stadt || [], by = {}; S.forEach(function(s){ by[s.id] = s; });
  var n = nacht(), haupt = n ? by.nacht : by.tag;
  var kopf = '<div class="dostadt' + (n ? " nacht" : "") + '"><img class="dostbild" src="' + IMG(n ? "doors/nacht-s6" : "doors/stadt-s7") + '" alt="" onclick="zoom(this.src)"><div class="dosttx"><h1>' + (n ? "Elsewhere bei Nacht" : "Elsewhere bei Tag") + pg(haupt.p) + "</h1>" + bls(haupt.b) + "</div>" + (n && haupt.stat ? '<div class="dostr">' + stat(haupt.stat) + "</div>" : "") + "</div>";
  var rest = '<div class="dogrid drei">' + ["lage", "kristalle", "sprache"].map(function(k){ return by[k] ? sec(by[k]) : ""; }).join("") + "</div>";
  return nav("stadt") + '<div class="dowrap">' + kopf + rest + "</div>";
}
/* ---------- Landmarken ---------- */
function landmarke(l){
  var werte = '<div class="dolw"><div><b>Domains:</b> ' + esc(l.dom) + "</div>" + (l.stress ? "<div><b>Standard-Stress:</b> " + esc(l.stress) + "</div>" : "") + ((l.haunts || []).length ? "<div><b>Haunts:</b> " + l.haunts.map(esc).join("; ") + "</div>" : "") + "</div>";
  var waren = (l.waren || []).length ? '<h4 class="doh4">Interessante Dinge auf dem Crowdswallow-Markt</h4><div class="dowaren">' + l.waren.map(function(w){ return '<div class="doware"><b>' + esc(w.t) + '</b><span class="dokost">Kosten: ' + esc(w.k) + "</span>" + (w.w ? '<i>' + md(w.w) + "</i>" : "") + "<p>" + md(w.b) + "</p></div>"; }).join("") + "</div>" : "";
  var tab = l.tabelle ? '<div class="dotab"><h4>' + esc(l.tabelle.h) + '</h4><ol>' + l.tabelle.x.map(function(x){ return "<li>" + esc(x) + "</li>"; }).join("") + "</ol></div>" : "";
  var res = (l.ressourcen || []).length ? '<div class="dores"><b>Ressourcen:</b> ' + l.ressourcen.map(md).join("; ") + "</div>" : "";
  return '<div class="dolm' + (waren ? " breit" : "") + '"><h3><span class="doplatte">' + esc(l.t) + "</span>" + pg(l.p) + "</h3>" + werte + '<div class="dolmt">' + (tab ? tab : "") + l.text.map(function(p){ return "<p>" + md(p) + "</p>"; }).join("") + res + "</div>" + waren + "</div>";
}
function landmarken(){
  var L = D().lm || [];
  return nav("landmarken") + '<div class="dowrap"><h1 class="doh1">Landmarken in Elsewhere' + pg(8) + '</h1><p class="doeinl">' + md(D().lmEinl || "") + '</p><div class="dogrid zwei">' + L.map(landmarke).join("") + "</div></div>";
}
/* ---------- Fraktionen ---------- */
function fraktionen(id){
  var F = D().fraktionen || [], f = F.filter(function(x){ return x.id === id; })[0] || F[0];
  var sub = '<div class="unter">' + F.map(function(x){ return '<a class="' + (x === f ? "on" : "") + '" onclick="go(\'doors/fraktionen/' + x.id + '\')">' + esc(x.t) + "</a>"; }).join("") + "</div>";
  var pers = (f.personen || []).length ? '<div class="dopers"><h3>Bemerkenswerte Persönlichkeiten</h3>' + f.personen.map(function(p){ return "<p>" + md(p) + "</p>"; }).join("") + "</div>" : "";
  var fliess = bls(f.b.filter(function(b){ return typeof b === "string"; })), kaesten = bls(f.b.filter(function(b){ return typeof b !== "string"; }));
  return nav("fraktionen") + sub + '<div class="dowrap"><div class="dofr"><div><h1 class="doh1">' + esc(f.t) + pg(f.p) + "</h1>" + (f.bild ? '<img class="dofbild" src="' + IMG(f.bild) + '" alt="" onclick="zoom(this.src)">' : "") + '<div class="flach">' + fliess + "</div></div><div>" + pers + kaesten + "</div></div></div>";
}
/* ---------- Dimensionen ---------- */
function dimensionen(){
  var E = D().dimEinl || {}, G = D().dimGross || {}, K = D().dimKlein || {};
  var kart = function(x){ return '<div class="dodim"><h3>' + esc(x.t) + pg(x.p) + "</h3>" + paras(x.b) + "</div>"; };
  var ef = bls((E.b || []).filter(function(b){ return typeof b === "string"; })), ek = bls((E.b || []).filter(function(b){ return typeof b !== "string"; }));
  return nav("dimensionen") + '<div class="dowrap"><div class="dodimkopf"><div><h1 class="doh1">Dimensionstheorie' + pg(E.p) + '</h1><div class="flach">' + ef + '</div><div class="dogrid zwei">' + ek + '</div></div><img src="' + IMG("doors/dimensionen-s18") + '" alt="" onclick="zoom(this.src)"></div>' +
    '<h2 class="doh2">Große dimensionale Verbindungen' + pg(G.p) + '</h2><p class="doeinl">' + md(G.einl || "") + '</p><div class="dogrid drei">' + (G.x || []).map(kart).join("") + "</div>" +
    '<h2 class="doh2">Kleinere dimensionale Verbindungen' + pg(K.p) + '</h2><p class="doeinl">' + md(K.einl || "") + '</p><div class="dogrid drei">' + (K.x || []).map(kart).join("") + "</div></div>";
}
/* ---------- Beats ---------- */
function beats(){
  var B = D().beats || {};
  var li = function(a){ return "<ul class=\"lst\">" + (a || []).map(function(x){ return "<li>" + md(x) + "</li>"; }).join("") + "</ul>"; };
  return nav("beats") + '<div class="dowrap"><h1 class="doh1">Beats und kleine Aufstiege' + pg(B.p) + '</h1><div class="flach doeinl2">' + (B.einl || []).map(function(p){ return "<p>" + md(p) + "</p>"; }).join("") + '</div><div class="dogrid vier">' + (B.aufstiege || []).map(function(a){ return '<div class="dokarte"><h3>' + esc(a.t) + "</h3><p>" + md(a.b) + "</p></div>"; }).join("") + '</div><h2 class="doh2">Beats für Elsewhere</h2><p class="doeinl">' + md(B.beatEinl || "") + '</p><div class="dogrid drei"><div class="dokarte"><h3>Kleine Beats</h3>' + li(B.klein) + '</div><div class="dokarte"><h3>Große Beats</h3>' + li(B.gross) + '</div><div class="dokarte zenit"><h3>Zenit</h3>' + li(B.zenit) + "</div></div></div>";
}
/* ---------- Tabellen ---------- */
function tabellen(){
  var T = D().tabellen || [];
  return nav("tabellen") + '<div class="dowrap"><h1 class="doh1">Zufallstabellen für Elsewhere' + pg(24) + '</h1><div class="dogrid drei">' + T.map(function(t){ return '<div class="dotab"><h4>' + esc(t.w) + " · " + esc(t.t) + "</h4><ol>" + t.x.map(function(x){ return "<li>" + esc(x) + "</li>"; }).join("") + "</ol></div>"; }).join("") + "</div></div>";
}
VIEWS.doors = function(a){
  var s = a[0] || "";
  if(s === "stadt") return stadt();
  if(s === "landmarken") return landmarken();
  if(s === "fraktionen") return fraktionen(a[1]);
  if(s === "dimensionen") return dimensionen();
  if(s === "beats") return beats();
  if(s === "tabellen") return tabellen();
  return uebersicht();
};
var prev = window.afterRender;
window.afterRender = function(){
  if(prev) prev();
  var d = /^#doors/.test(location.hash);
  document.body.classList.toggle("do", d);
  document.body.classList.toggle("donachtmodus", d && nacht());
};
})();
