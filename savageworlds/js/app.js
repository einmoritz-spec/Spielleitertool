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
  var tabs = (dl || r.a === "start") ? [] : TABS, cur = tabOf(r.a);
  KT.innerHTML = tabs.map(function(t){ return '<a class="' + (cur && cur.id === t.id ? "on" : "") + '" onclick="go(\'' + t.id + '\')">' + esc(t.t) + "</a>"; }).join("");
  if(cur){
    var b = r.b || cur.subs[0][0];
    SUB.className = "sub on";
    SUB.innerHTML = cur.subs.map(function(s){ return '<a class="' + (s[0] === b ? "on" : "") + '" onclick="go(\'' + cur.id + "/" + s[0] + '\')">' + esc(s[1]) + "</a>"; }).join("");
  } else { SUB.className = "sub"; SUB.innerHTML = ""; }
  if(r.a === "start") return start();
  if(dl) return dlPage();
  if(cur && cur.id === "charaktere" && (r.b || cur.subs[0][0]) === "talente") return talentePage();
  if(cur) return page(cur, r.b || cur.subs[0][0]);
  go("start");
}
function pageHead(){ return ""; }
function page(t, sid){
  var sub = t.subs.filter(function(s){ return s[0] === sid; })[0] || t.subs[0];
  APP.innerHTML = '<div class="lay" id="lay"><main class="ct"><h2>' + esc(sub[1]) + (sub[2] ? '<span class="pg" onclick="openBook(\'sw_de\',' + sub[2] + ')">S. ' + sub[2] + "</span>" : "") + '</h2><div class="soon">Inhalt folgt.</div></main></div>';
}

/* ---------- Talente ---------- */
var TK = ["Hintergrund","Kampf","Anführer","Macht","Experten","Sozial","Übersinnlich","Legendär","Arkane Hintergründe","Harrowed"];
var TKT = {"Arkane Hintergründe":"Arkane Hintergründe","Harrowed":"Harrowed-Talente","Hintergrund":"Hintergrundtalente","Kampf":"Kampftalente","Anführer":"Anführertalente","Macht":"Machttalente","Experten":"Expertentalente","Sozial":"Soziale Talente","Übersinnlich":"Übersinnliche Talente","Legendär":"Legendäre Talente"};
var RN = ["Anfänger","Fortgeschritten","Veteran","Heroisch","Legendär"], RC = ["#7a7067","#c27a1c","#a51f1a","#6a3a8a","#b8902a"];
function talSicht(t){ return t.s.some(function(x){ return x === "GRW" || gen(x.toLowerCase()); }); }
function talBadges(t){ return t.s.map(function(x){ return '<i class="sq sq-' + x.toLowerCase() + '">' + x + "</i>"; }).join(""); }
function talentePage(){
  if(!ST.tk) ST.tk = "Hintergrund";
  var TKV = TK.filter(function(k){ return SW_TALENTE.some(function(t){ return t.k === k && talSicht(t); }); });
  if(TKV.indexOf(ST.tk) < 0) ST.tk = TKV[0];
  var kat = ST.tk, list = SW_TALENTE.filter(function(t){ return t.k === kat && talSicht(t); });
  var side = TKV.map(function(k){ return '<a class="' + (k === kat ? "on" : "") + '" onclick="talKat(\'' + k + '\')">' + esc(k) + "</a>"; }).join("");
  var h = "";
  RN.forEach(function(rn, ri){
    var L = list.filter(function(t){ return t.r === ri; }); if(!L.length) return;
    h += '<h4 class="rk" style="--rc:' + RC[ri] + '"><span>' + rn + '</span></h4><div class="tg3">';
    L.forEach(function(t, i){
      var id = SW_TALENTE.indexOf(t), open = ST.to === id;
      h += '<div class="tc' + (open ? " open" : "") + '" style="--rc:' + RC[ri] + '" onclick="talOpen(' + id + ')"><b>' + esc(t.n) + talBadges(t) + '</b><small>' + esc(t.v || "–") + (t.w ? " · nur Wildcards" : "") + "</small></div>";
      if(open || (i % 3 === 2 || i === L.length - 1) && L.slice(i - i % 3, i + 1).some(function(x){ return SW_TALENTE.indexOf(x) === ST.to; })){
        if(L.slice(i - i % 3, i + 1).some(function(x){ return SW_TALENTE.indexOf(x) === ST.to; }) && (i % 3 === 2 || i === L.length - 1)) h += talDetail(SW_TALENTE[ST.to]);
      }
    });
    h += "</div>";
  });
  APP.innerHTML = '<div class="lay' + (ST.fold ? " fold-on" : "") + '" id="lay"><aside class="side"><button class="fold" onclick="foldSide()" aria-label="Seitenleiste">‹</button>' + side + '</aside><main class="ct"><h2>' + esc(TKT[kat]) + '</h2>' + h + '</main></div>';
}
function talDetail(t){
  var up = SW_TALENTE.filter(function(x){ return talSicht(x) && x.v && x.v.split(/,\s*/).indexOf(t.n) > -1; });
  return '<div class="td" style="--rc:' + RC[t.r] + '"><div class="tdm"><h3>' + esc(t.n) + talBadges(t) + '<span class="pg" onclick="openBook(\'' + t.bk + '\',' + (t.p + t.o) + ')">S. ' + t.p + '</span></h3>' + t.b.map(function(p){ return "<p>" + esc(p) + "</p>"; }).join("") + '</div><div class="tds"><small>Voraussetzungen</small><div>' + RN[t.r] + (t.v ? ", " + esc(t.v) : "") + (t.w ? "<br>nur Wildcards" : "") + "</div>" +
    (up.length ? "<small>Führt zu</small>" + up.map(function(x){ return '<a onclick="event.stopPropagation();talGo(' + SW_TALENTE.indexOf(x) + ')">' + esc(x.n) + "</a>"; }).join("") : "") + "</div></div>";
}
function talKat(k){ ST.tk = k; ST.to = -1; save(); talentePage(); }
function talOpen(id){ ST.to = ST.to === id ? -1 : id; save(); talentePage(); var d = document.querySelector(".td"); if(d && ST.to > -1) d.scrollIntoView({block:"nearest", behavior:"smooth"}); }
function talGo(id){ ST.tk = SW_TALENTE[id].k; ST.to = id; save(); talentePage(); var d = document.querySelector(".td"); if(d) d.scrollIntoView({block:"center"}); }
function foldSide(){ ST.fold = ST.fold ? 0 : 1; save(); var l = document.getElementById("lay"); if(l) l.classList.toggle("fold-on", !!ST.fold); }
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
    var im = ["p-grundregeln","p-fantasy","p-horror","p-scifi","p-super"][i], on = gen(g.id);
    var tg = g.id === "grw" ? '<span class="tg base">Basis</span>' : '<button class="tg' + (on ? " on" : "") + '" onclick="event.stopPropagation();toggleGen(\'' + g.id + '\')" aria-label="' + esc(g.t) + (on ? " ausschalten" : " einschalten") + '"><span class="kn"></span><em>' + (on ? "An" : "Aus") + '</em></button>';
    return '<a class="' + (on ? "" : "off") + '" style="--gc:' + g.c + '" onclick="' + (g.id === "grw" ? "go('charaktere')" : "go('genres/" + g.id + "')") + '"><img src="' + IMG("start/" + im) + '" alt=""><i></i>' + tg + '<h3>' + esc(g.t) + "</h3></a>";
  }).join("");
  var chs = TABS.filter(function(t){ return t.img; }).map(function(t){
    return '<div class="ch"><div class="im" onclick="go(\'' + t.id + '\')"><img loading="lazy" src="' + IMG("start/" + t.img) + '" alt=""><h3>' + esc(t.t) + "</h3></div><ul>" +
      (CHAPT[t.id] || []).map(function(s){ return '<li><a onclick="go(\'' + t.id + "/" + s[1] + '\')">' + esc(s[0]) + "</a></li>"; }).join("") + "</ul></div>";
  }).join("");
  APP.innerHTML = '<div class="st"><div class="pan">' + pan + '</div><div class="chs">' + chs + '</div>' +
    '<div class="dl" onclick="go(\'dl\')"><img src="' + IMG("start/dl-cover") + '" alt=""><div><h3>Deadlands</h3><p>Der Wilde Westen, in dem die Toten nicht ruhen.</p></div><button class="tg dlt' + (gen("dl") ? " on" : "") + '" onclick="event.stopPropagation();toggleGen(\'dl\')" aria-label="Deadlands-Talente"><span class="kn"></span><em>' + (gen("dl") ? "An" : "Aus") + '</em></button><span class="go">Betreten</span></div></div>';
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
