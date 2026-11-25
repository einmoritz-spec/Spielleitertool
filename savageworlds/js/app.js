/* SAVAGE WORLDS – Spielleiter-Tafel. Hash-Routing: #start · #<bereich>[/<unterseite>] · #dl[/<bereich>] */
"use strict";
var APP = document.getElementById("app"), SUB = document.getElementById("sub"), KT = document.getElementById("ktabs");
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
function IMG(p){ return "img/" + p + ".webp"; }
var ST = {}; try{ ST = JSON.parse(localStorage.getItem("sw_state_v1") || "{}") || {}; }catch(e){}
function save(){ try{ localStorage.setItem("sw_state_v1", JSON.stringify(ST)); }catch(e){} }
if(!ST.gen) ST.gen = {fan:1, hor:0, sf:0, sup:0};
function go(h){ if(location.hash === "#" + h) render(); else location.hash = h; }
function openBook(id, p){ try{ BV.open(id || "sw_de", p || 1); }catch(e){} }
window.addEventListener("hashchange", render);

/* Bereiche: Reiter der Kopfzeile + Unterpunkte (Seite im Buch: GRW) */
var TABS = [
 {id:"charaktere", t:"Charaktere", img:"k-charaktere", subs:[["voelker","Völker",9],["handicaps","Handicaps",24],["eigenschaften","Eigenschaften",31],["talente","Talente",34],["aufstiege","Aufstiege",52]]},
 {id:"ausruestung", t:"Ausrüstung", img:"k-ausruestung", subs:[["ruestung","Rüstung",67],["waffen","Waffen",69],["fahrzeuge","Fahrzeuge",83]]},
 {id:"regeln", t:"Regeln", img:"k-regeln", subs:[["kampf","Kampf",87],["heilung","Heilung",94],["situationen","Situationen",97]]},
 {id:"werkzeugkasten", t:"Werkzeugkasten", img:"k-werkzeugkasten", subs:[["aufgaben","Dramatische Aufgaben",111],["furcht","Furcht",120],["gefahren","Gefahren",123],["soziales","Soziale Konflikte",132],["zwischenspiele","Zwischenspiele",145]]},
 {id:"maechte", t:"Mächte", img:"k-maechte", subs:[["hintergruende","Arkane Hintergründe",149],["liste","Machtliste",155]]},
 {id:"bestiarium", t:"Bestiarium", img:"k-bestiarium", subs:[["tiere","Kreaturen",175],["schablonen","Schablonen",205]]},
 {id:"genres", t:"Genres", subs:[["fan","Fantasy"],["hor","Horror"],["sf","Science-Fiction"],["sup","Superkräfte"]]},
 {id:"spielleitung", t:"Spielleitung", img:"k-spielleitung", subs:[["grundlagen","Grundlagen",193],["weltenbau","Weltenbau"]]}
];
var BOOKC = {grw:"GRW", fan:"FAN", hor:"HOR", sf:"SF", sup:"SUP"};
function gen(id){ return id === "grw" || !!ST.gen[id]; }

function route(){ var h = (location.hash || "#start").slice(1).split("/"); return {a:h[0] || "start", b:h[1] || "", c:h[2] || ""}; }
function tabOf(id){ return TABS.filter(function(t){ return t.id === id; })[0]; }

function render(){
  var r = route(), dl = r.a === "dl";
  document.body.classList.toggle("dl-mode", dl);
  var tabs = dl ? [] : TABS, cur = tabOf(r.a);
  KT.innerHTML = tabs.map(function(t){ return '<a class="' + (cur && cur.id === t.id ? "on" : "") + '" onclick="go(\'' + t.id + '\')">' + esc(t.t) + "</a>"; }).join("");
  if(cur){
    var b = r.b || cur.subs[0][0];
    SUB.className = "sub on";
    SUB.innerHTML = cur.subs.map(function(s){ return '<a class="' + (s[0] === b ? "on" : "") + '" onclick="go(\'' + cur.id + "/" + s[0] + '\')">' + esc(s[1]) + "</a>"; }).join("");
  } else { SUB.className = "sub"; SUB.innerHTML = ""; }
  if(r.a === "start") return start();
  if(dl) return dlPage();
  if(cur) return page(cur, r.b || cur.subs[0][0]);
  go("start");
}
function pageHead(){ return ""; }
function page(t, sid){
  var sub = t.subs.filter(function(s){ return s[0] === sid; })[0] || t.subs[0];
  APP.innerHTML = '<div class="lay" id="lay"><main class="ct"><h2>' + esc(sub[1]) + (sub[2] ? '<span class="pg" onclick="openBook(\'sw_de\',' + sub[2] + ')">S. ' + sub[2] + "</span>" : "") + '</h2><div class="soon">Inhalt folgt.</div></main></div>';
}
function dlPage(){ APP.innerHTML = '<div class="st"><div class="soon">Deadlands folgt.</div></div>'; }

/* ---------- Startseite ---------- */
var CHAPT = {
 charaktere:[["Völker","voelker"],["Handicaps","handicaps"],["Eigenschaften","eigenschaften"],["Talente","talente"],["Aufstiege","aufstiege"]],
 ausruestung:[["Rüstung","ruestung"],["Waffen","waffen"],["Fahrzeuge","fahrzeuge"]],
 regeln:[["Kampf","kampf"],["Heilung","heilung"],["Situationen","situationen"]],
 werkzeugkasten:[["Dramatische Aufgaben","aufgaben"],["Furcht","furcht"],["Gefahren","gefahren"],["Soziale Konflikte","soziales"]],
 maechte:[["Arkane Hintergründe","hintergruende"],["Machtliste","liste"]],
 bestiarium:[["Kreaturen","tiere"],["Schablonen","schablonen"]],
 spielleitung:[["Grundlagen","grundlagen"],["Weltenbau","weltenbau"]]
};
function start(){
  var G = SW_GENRES, pan = G.map(function(g, i){
    var im = ["p-grundregeln","p-fantasy","p-horror","p-scifi","p-super"][i];
    return '<a class="' + (gen(g.id) ? "" : "off") + '" style="--gc:' + g.c + '" onclick="' + (g.id === "grw" ? "go('charaktere')" : "go('genres/" + g.id + "')") + '"><img src="' + IMG("start/" + im) + '" alt=""><i></i><h3>' + esc(g.t) + "</h3></a>";
  }).join("");
  var sw = '<div class="gsw"><b>Genres</b>' + G.map(function(g){ return '<button class="' + (gen(g.id) ? "on" : "") + (g.id === "grw" ? " fixed" : "") + '" style="--gc:' + g.c + '" onclick="toggleGen(\'' + g.id + '\')">' + esc(g.t) + "</button>"; }).join("") + "</div>";
  var chs = TABS.filter(function(t){ return t.img; }).map(function(t){
    return '<div class="ch"><div class="im" onclick="go(\'' + t.id + '\')"><img loading="lazy" src="' + IMG("start/" + t.img) + '" alt=""><h3>' + esc(t.t) + "</h3></div><ul>" +
      (CHAPT[t.id] || []).map(function(s){ return '<li><a onclick="go(\'' + t.id + "/" + s[1] + '\')">' + esc(s[0]) + "</a></li>"; }).join("") + "</ul></div>";
  }).join("");
  APP.innerHTML = '<div class="st">' + sw + '<div class="pan">' + pan + '</div><div class="chs">' + chs + '</div>' +
    '<div class="dl" onclick="go(\'dl\')"><img src="' + IMG("start/dl-cover") + '" alt=""><div><h3>Deadlands</h3><p>Der Wilde Westen, in dem die Toten nicht ruhen.</p></div><span class="go">Betreten</span></div></div>';
}
function toggleGen(id){ if(id === "grw") return; ST.gen[id] = ST.gen[id] ? 0 : 1; save(); render(); }

/* ---------- Menü, Info, Bücher ---------- */
function openMenu(on){
  var p = document.getElementById("mmP"); document.getElementById("mmB").classList.toggle("on", !!on); p.classList.toggle("on", !!on);
  if(on) p.innerHTML = '<h3>Bücher</h3>' + SW_BUECHER.map(function(g){ return g.items.map(function(b){ return '<button class="row" onclick="openMenu(false);openBook(\'' + b.id + '\')">' + esc(b.name) + " (" + b.lang + ")</button>"; }).join(""); }).join("");
}
function bookMenu(){ openBook("sw_de"); }
function modal(h){ var m = document.createElement("div"); m.className = "modal"; m.innerHTML = '<div class="box">' + h + "</div>"; m.onclick = function(e){ if(e.target === m) m.remove(); }; document.body.appendChild(m); }
function infoOpen(){ modal('<h3>Savage Worlds</h3><p>Spielleiter-Tafel zu Savage Worlds, Abenteuer-Edition (5. Auflage). Quellen: Grundregelwerk, Deadlands, Genre-Begleiter.</p>'); }
document.addEventListener("keydown", function(e){
  var t = e.target || {}; if(/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName || "") || e.ctrlKey || e.metaKey || e.altKey) return;
  if(e.key === "Escape"){ var m = document.querySelector(".modal"); if(m) m.remove(); else openMenu(false); }
  if(e.key === "h") document.body.classList.toggle("notop");
});
BV.init({ libBase:"../bookviewer/lib/", defaultBook:"sw_de", books:SW_BUECHER.reduce(function(a, g){ return a.concat(g.items.map(function(b){ return {key:b.id, name:b.name + " (" + b.lang + ")"}; })); }, []), openSettings:function(){ openMenu(true); } });
render();
