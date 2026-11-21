/* Vaesen – Spielleiter-Tafel (Year Zero Engine, Free League). Statisch, Hash-Routing: #start · #regeln/<id> · #charaktere/<id> · #vaesen/<id> … */
"use strict";
var APP = document.getElementById("app");
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
function IMG(n, k){ return "img/" + (k || "full") + "/" + n + ".webp"; }
var cur = "start", sub = "", folded = false;
try{ folded = localStorage.getItem("vae_fold") === "1"; }catch(e){}
var BOOK = 4; /* PDF-Seite = Buchseite + 4 */
function inBook(p){ return "BV.open('vae_core'," + p + ")"; }

/* ---------- Bereiche ---------- */
var AREAS = [
 {id:"regeln", t:"Regeln", s:"Probe, Zustände, Fertigkeiten", img:"charaktere_kapitelbild_fenster", pos:"50% 20%"},
 {id:"charaktere", t:"Charaktere", s:"10 Archetypen", img:"charaktere_archetyp_priester", pos:"50% 18%"},
 {id:"vaesen", t:"Vaesen", s:"20 Wesen des Nordens", img:"vaesen_titel_hirsch", pos:"50% 40%"},
 {id:"norden", t:"Mythischer Norden", s:"Upsala und das Land", img:"norden_titel_reiter", pos:"50% 55%"},
 {id:"gesellschaft", t:"Die Gesellschaft", s:"Hauptquartier, Kampagne", img:"mysterium_dame_mit_laterne", pos:"50% 25%"},
 {id:"mysterium", t:"Das Mysterium", s:"Aufbau und Technik", img:"einleitung_naeck", pos:"60% 40%"},
 {id:"tanz", t:"Der Tanz der Träume", s:"Einführungsabenteuer", img:"tanz_karte_hexenkater", pos:"50% 30%"},
 {id:"karten", t:"Karten & Bilder", s:"Karten, Galerie", img:"norden_karte_upsala", pos:"50% 30%"},
 {id:"erstellung", t:"Charaktererstellung", s:"Neue Spielercharaktere", img:"charaktere_archetyp_vagabund", pos:"50% 20%"}
];
var TOC = [
 {id:"einleitung", n:1, t:"Einleitung", p:5, s:[["Einführung in Vaesen",6],["Dieses Buch",7],["Vaesen in Kürze",10]]},
 {id:"charaktere", n:2, t:"Dein Spielercharakter", p:17, s:[["Persönlichkeit",18],["Eigenschaften",20],["Verschiedenes",21],["Archetypen",25]]},
 {id:"regeln", n:3, t:"Fertigkeiten", p:37, s:[["Fertigkeitsproben",38],["Die Fertigkeiten",44]]},
 {id:"talente", n:4, t:"Talente", p:49, s:[]},
 {id:"konflikt", n:5, t:"Konflikt und Verletzungen", p:57, s:[["Kampf",58],["Verletzungen",63],["Heilung",71],["Ausrüstung",73]]},
 {id:"gesellschaft", n:6, t:"Die Gesellschaft und das Hauptquartier", p:79, s:[["Geschichte der Gesellschaft",80],["Kampagnenregeln",86]]},
 {id:"norden", n:7, t:"Der Mythische Norden und Upsala", p:97, s:[["Dein Mythischer Norden",98],["Upsala",105]]},
 {id:"vaesen", n:8, t:"Vaesen", p:111, s:[["Vaesen und Menschen",112],["Magische Kräfte",115],["Regeln für Vaesen",121],["Tiere",168]]},
 {id:"mysterium", n:9, t:"Das Mysterium", p:171, s:[["Bestandteile",172],["Struktur",179],["Kampagne",192],["Spielleiter-Techniken",193]]},
 {id:"tanz", n:10, t:"Der Tanz der Träume", p:196, s:[["Prolog",196],["Orte",202],["Konfrontation",209],["Nachspiel",211]]}
];
function area(id){ return AREAS.filter(function(a){ return a.id === id; })[0]; }
function toc(id){ return TOC.filter(function(a){ return a.id === id; })[0]; }

/* ---------- Routing ---------- */
function go(id){ if(location.hash === "#" + id) render(); else location.hash = id; }
function route(){ var h = (location.hash || "#start").slice(1).split("/"); cur = h[0] || "start"; sub = decodeURIComponent(h.slice(1).join("/") || ""); render(); }
window.addEventListener("hashchange", route);
function tabsBar(list, on){ return '<div class="tabs">' + list.map(function(t){ return '<a class="' + (t[0] === on ? 'on' : '') + '" onclick="go(\'' + t[1] + '\')">' + esc(t[0]) + '</a>'; }).join("") + '</div>'; }
function main(items, sel, content){
  var side = '<nav class="side">' + items.map(function(g){ return (g.h ? '<h4>' + esc(g.h) + '</h4>' : '') + g.i.map(function(i){ return '<a class="' + (i.id === sel ? 'on' : '') + '" onclick="go(\'' + i.go + '\')"><span>' + esc(i.t) + '</span>' + (i.s ? '<small>' + esc(i.s) + '</small>' : '') + '</a>'; }).join(""); }).join("") + '</nav>';
  var mob = '<div class="mob-nav">' + items.reduce(function(a, g){ return a.concat(g.i); }, []).map(function(i){ return '<a class="' + (i.id === sel ? 'on' : '') + '" onclick="go(\'' + i.go + '\')">' + esc(i.t) + '</a>'; }).join("") + '</div>';
  return '<div class="main' + (folded ? ' fold' : '') + '">' + side + '<div class="content">' + mob + content + '</div></div><button class="fold-b' + (folded ? ' f' : '') + '" onclick="toggleFold()" title="Seitenleiste ein-/ausblenden (b)" aria-label="Seitenleiste">' + (folded ? '›' : '‹') + '</button>';
}
function toggleFold(){ folded = !folded; try{ localStorage.setItem("vae_fold", folded ? "1" : "0"); }catch(e){} render(); }
document.addEventListener("keydown", function(e){
  if(/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "")) return;
  if(e.key === "b") toggleFold();
  if(e.key === "h"){ var t = document.querySelector(".topbar"); t.style.display = t.style.display === "none" ? "" : "none"; document.documentElement.style.setProperty("--hd", t.style.display === "none" ? "0px" : "54px"); }
});
function bookLink(p){ return '<span class="pg">S. ' + p + ' · <a onclick="' + inBook(p) + '">im Buch</a></span>'; }
function box(inner, st){ return '<div class="box"' + (st ? ' style="' + st + '"' : '') + '>' + inner + '<i></i><b></b></div>'; }

/* ---------- Startseite ---------- */
function bookTile(b){
  var cv = b.cover ? 'style="background-image:url(img/' + b.cover + ')"' : '';
  return '<button class="book' + (b.cover ? '' : ' ph') + '" onclick="BV.open(\'' + b.id + '\',1)"><div class="cv" ' + cv + '>' + (b.titel ? '<img class="tt" src="img/' + b.titel + '" alt="">' : (b.cover ? '' : esc(b.name))) + '</div><b>' + esc(b.name) + '</b><small>' + esc(b.sub) + '</small></button>';
}
function bookInfo(id){ alert("Dieses Buch ist noch nicht eingebunden – sobald das PDF vorliegt, erscheinen hier Cover und Inhalt."); }
function viewStart(){ return uiStart(); }
function viewBuecher(){
  var h = VAE_BUECHER.map(function(g, i){ return '<div id="grp' + i + '" style="margin-bottom:26px"><h2 style="color:var(--red);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">' + esc(g.grp) + '</h2><div class="sg"><div class="books">' + g.items.map(bookTile).join("") + '</div></div></div>'; }).join("");
  if(sub !== "" && sub != null) setTimeout(function(){ var e = document.getElementById("grp" + sub); if(e) e.scrollIntoView(); }, 30);
  return '<div class="page">' + h + '</div>';
}

/* ---------- Blöcke ---------- */
function blk(b){
  switch(b.t){
   case "p": return "<p>" + b.x + "</p>";
   case "h": return "<h3>" + b.x + "</h3>";
   case "ul": return "<ul>" + b.x.map(function(x){ return "<li>" + x + "</li>"; }).join("") + "</ul>";
   case "box": return box("<h3>" + b.h + "</h3><p>" + b.x + "</p>", "margin:8px 0 14px");
   case "tbl": return '<table class="t"><tr>' + b.head.map(function(h){ return "<th>" + h + "</th>"; }).join("") + "</tr>" + b.rows.map(function(r){ return "<tr>" + r.map(function(c){ return "<td>" + c + "</td>"; }).join("") + "</tr>"; }).join("") + "</table>";
   case "cols": return '<div class="cols" style="margin:8px 0">' + b.x.map(function(c){ return box("<h3>" + c[0] + "</h3><p>" + c[1] + "</p><p>" + c[2].map(function(x){ return '<span class="chip r">' + x + "</span>"; }).join("") + "</p>"); }).join("") + "</div>";
   case "skills": return '<div class="cols">' + VAE_ATTR.map(function(a){ return box('<h3>' + a.n + '</h3><p class="quote">' + a.c + '</p>' + a.s.map(function(s){ return '<p style="margin:0 0 .5em"><b>' + s[0] + '</b> <span class="pg">S. ' + s[1] + '</span><br>' + s[2] + '</p>'; }).join("")); }).join("") + "</div>";
  }
  return "";
}
function twoCol(blocks){ /* Fließtext in zwei Spalten, Boxen über die volle Breite */ return '<div style="column-width:420px;column-gap:40px">' + blocks.filter(function(b){ return b.t === "p" || b.t === "h" || b.t === "ul"; }).map(blk).join("") + '</div>' + blocks.filter(function(b){ return b.t !== "p" && b.t !== "h" && b.t !== "ul"; }).map(blk).join(""); }

function flow(blocks, fl, cards){
  fl = (fl || []).slice();
  var out = "", txt = [], bx = [], tb = [];
  function ftb(){ if(tb.length){ out += '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(360px,1fr));gap:0 28px;align-items:start">' + tb.map(blk).join("") + '</div>'; tb = []; } }
  function ft(){ if(txt.length){ var len = JSON.stringify(txt).length; out += '<div style="' + (len > 900 ? 'column-width:420px;column-gap:40px;' : '') + 'margin:6px 0">' + (fl.length ? fl.shift() : '') + txt.map(blk).join("") + '</div>'; txt = []; } }
  function fb(){ if(bx.length && cards){ out += uiCards(bx); bx = []; } else if(bx.length){ out += '<div class="cols" style="margin:10px 0">' + bx.map(function(b){ return box("<h3>" + b.h + "</h3><p>" + b.x + "</p>"); }).join("") + '</div>'; bx = []; } }
  blocks.forEach(function(b){
    if(b.t !== "tbl") ftb();
    if(b.t === "box"){ ft(); bx.push(b); }
    else if(b.t === "tbl"){ ft(); fb(); if(b.head && b.head.length <= 2){ tb.push(b); } else { ftb(); out += blk(b); } }
    else { fb(); txt.push(b); }
  });
  ft(); fb(); ftb(); return out + (fl.length ? '<div class="fimgs">' + fl.join("") + '</div>' : '');
}
/* Bilder eines Abschnitts: breite als Kopfbild, übrige klein im Text (Text läuft außen herum). */
function secImgs(id, sec, secs){
  if(!window.Galerie) return {head:"", fl:[]};
  var pre = {konflikt:"konflikt", mysterium:"mysterium", tanz:"tanz", gesellschaft:"gesellschaft", norden:"norden", talente:"talente"}[id], head = "", fl = [];
  if(!pre || !sec.p) return {head:"", fl:[]};
  Galerie.items("vaesen").forEach(function(it){
    var m = it[0].match(/^(\w+)_s(\d+)$/); if(!m || m[1] !== pre) return;
    var pg = +m[2], mine = null; secs.forEach(function(x){ if(x.p && x.p <= pg) mine = x; });
    if(mine !== sec) return;
    var w = it[1], h = it[2], r = w / h, tag = '<img src="' + IMG(it[0], "full") + '" alt="" loading="lazy">';
    var on = 'onclick="Galerie.image(\'vaesen\',\'' + it[0] + '\')"';
    if(r >= 1.45) head += '<div class="simg wide" ' + on + '>' + tag + '</div>';
    else fl.push('<div class="simg fr ' + (h > 1300 ? 'xl' : r < 0.75 ? 'tall' : 'sq') + '" ' + on + '>' + tag + '</div>');
  });
  return {head:head, fl:fl};
}

/* ---------- Regeln ---------- */
function viewRegeln(){
  var tabs = VAE_REGELN.map(function(x){ return [x.titel, "regeln/" + x.id]; }).concat([["Konflikt und Verletzungen", "kapitel/konflikt"], ["Talente", "kapitel/talente"]]);
  var id = sub || VAE_REGELN[0].id, s = VAE_REGELN.filter(function(x){ return x.id === id; })[0] || VAE_REGELN[0];
  return tabsBar(tabs, s.titel) + '<div class="page"><div style="display:flex;align-items:baseline;gap:6px 14px;flex-wrap:wrap"><h1>' + esc(s.titel) + '</h1>' + bookLink(s.p) + '</div><div style="margin-top:12px">' + twoCol(s.b) + '</div></div>';
}

/* ---------- Charaktere ---------- */
var CTABS = [["Archetypen","charaktere"],["Persönlichkeit","charaktere/persoenlichkeit"],["Eigenschaften","charaktere/eigenschaften"],["Fertigkeiten","charaktere/fertigkeiten"],["Talente","charaktere/talente"],["Ausrüstung und Ressourcen","charaktere/ausruestung"]];
var RES = [["1","Mittellos","Du bist völlig auf andere angewiesen. Jeder Tag ist ein Kampf ums Essen."],["2","Arm","Du lebst sehr einfach. Meist gibt es etwas zu essen, aber zu wenig."],["3","Zurechtkommend","Bescheidenes Heim, festes Einkommen, aber keine Ersparnisse."],["4","Gesichert","Eigenes Heim und stetiges Einkommen; vermutlich etwas zurückgelegt."],["5","Mittelstand","Haus und Geschäft, vielleicht Angestellte; Ersparnisse und Kredit."],["6","Wohlhabend","Großes Haus, mehrere Einkommensquellen; Geld ist kein knappes Gut."],["7","Reich","Viel geerbtes Geld und Immobilien, Diener, Verbindungen zur Elite."],["8","Steinreich","Du gehörst zu den Reichsten des Landes und kennst die Herrscher persönlich."]];
function archSide(){ return [{i:VAE_ARCH.map(function(a){ return {id:a.id, go:"charaktere/" + a.id, t:a.name}; })}]; }
function viewCharaktere(){
  var a = VAE_ARCH.filter(function(x){ return x.id === sub; })[0];
  if(a) return tabsBar(CTABS, "Archetypen") + main(archSide(), a.id, archDetail(a));
  var tab = {persoenlichkeit:"Persönlichkeit", eigenschaften:"Eigenschaften", fertigkeiten:"Fertigkeiten", talente:"Talente", ausruestung:"Ausrüstung und Ressourcen"}[sub];
  if(tab) return tabsBar(CTABS, tab) + '<div class="page">' + charTab(sub) + '</div>';
  var cards = VAE_ARCH.map(function(a){ return '<div class="box card" onclick="go(\'charaktere/' + a.id + '\')"><div class="im"><img src="' + IMG(a.img, "thumb") + '" alt="' + esc(a.name) + '"></div><div class="tx"><h3>' + esc(a.name) + '</h3><small>' + esc(a.attr) + ' · ' + esc(a.skill) + '</small></div><i></i><b></b></div>'; }).join("");
  return tabsBar(CTABS, "Archetypen") + '<div class="page"><div class="cards a">' + cards + '</div></div>';
}
function charTab(k){
  if(k === "persoenlichkeit") return '<div style="display:flex;align-items:baseline;gap:6px 14px;flex-wrap:wrap"><h1>Persönlichkeit</h1>' + bookLink(18) + '</div><div class="cols" style="margin-top:12px">' +
   box('<h3>Alter</h3><table class="t"><tr><th>Gruppe</th><th>Jahre</th><th>Attribute</th><th>Fertigkeiten</th></tr>' + VAE_ALTER.map(function(r){ return "<tr><td>" + r[0] + "</td><td>" + r[1] + "</td><td>" + r[2] + "</td><td>" + r[3] + "</td></tr>"; }).join("") + '</table><p>In der Gruppe soll es nicht zwei Charaktere desselben Archetyps geben.</p>') +
   box('<h3>Motivation</h3><p>Warum du bereit bist, dein Leben zu riskieren, um Vaesen aufzuspüren und zu bekämpfen. Wähle aus den Vorschlägen deines Archetyps oder erfinde eine eigene.</p><h3>Trauma</h3><p>Das Ereignis, das dir das Zweite Gesicht gab – körperlich oder seelisch, oft mit Bezug zum Übernatürlichen.</p>') +
   box('<h3>Dunkles Geheimnis</h3><p>Ein Problem, für das du dich schämst und das du vor den anderen verbirgst. Es erschwert dir das Leben in Upsala und auf Reisen. Die Spielleitung sorgt dafür, dass es in den Geschichten eine Rolle spielt; ist es gelöst, tauschst du es aus.</p>') +
   box('<h3>Die zwölf Schritte</h3><p>1 Archetyp · 2 Alter · 3 Name · 4 Attribute · 5 Fertigkeiten und Ressourcen · 6 Talent · 7 Motivation · 8 Trauma · 9 Dunkles Geheimnis · 10 Beziehungen · 11 Andenken · 12 Ausrüstung</p><p><button class="btn fill" onclick="go(\'erstellung\')">Charakter erstellen</button></p>') + '</div>';
  if(k === "eigenschaften") return '<div style="display:flex;align-items:baseline;gap:6px 14px;flex-wrap:wrap"><h1>Eigenschaften</h1>' + bookLink(20) + '</div><p style="margin-top:10px">Vier Attribute mit Werten von 2 bis 5 bestimmen die Würfelzahl; Minimum 2, Maximum 4 – nur das Hauptattribut des Archetyps darf 5 erreichen.</p>' + blk({t:"skills"});
  if(k === "fertigkeiten") return '<div style="display:flex;align-items:baseline;gap:6px 14px;flex-wrap:wrap"><h1>Fertigkeiten</h1>' + bookLink(21) + '</div><p style="margin-top:10px">Zwölf Fertigkeiten mit Wert 0–5. Zu Spielbeginn höchstens 2 in jeder Fertigkeit – außer der Hauptfertigkeit des Archetyps (3).</p>' + blk({t:"skills"});
  if(k === "talente") return '<div style="display:flex;align-items:baseline;gap:6px 14px;flex-wrap:wrap"><h1>Talente</h1>' + bookLink(49) + '</div><div style="margin-top:12px">' + flow(VAE_KAP.talente.b) + '</div>';
  return '<div style="display:flex;align-items:baseline;gap:6px 14px;flex-wrap:wrap"><h1>Ausrüstung und Ressourcen</h1>' + bookLink(22) + '</div><div class="cols" style="margin-top:12px">' + box('<h3>Ressourcen</h3><table class="t"><tr><th>Wert</th><th>Lebensstandard</th></tr>' + RES.map(function(r){ return "<tr><td>" + r[0] + "</td><td><b>" + r[1] + ".</b> " + r[2] + "</td></tr>"; }).join("") + '</table>') + box('<h3>Andenken</h3><p>Würfle mit zwei W6 (W66) – der erste Würfel zählt die Zehner. Oder wirf in der Charaktererstellung.</p><p><button class="btn alt" onclick="go(\'erstellung\')">Zur Charaktererstellung</button></p>') + '</div>';
}
function list(a){ return "<ul>" + a.map(function(x){ return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>"; }
function lab(t){ return '<span class="hd" style="font-size:14px;letter-spacing:.1em;text-transform:uppercase">' + t + '</span> '; }
function archDetail(a){
  var info = box(lab("Hauptattribut") + esc(a.attr) + ' &nbsp;·&nbsp; ' + lab("Hauptfertigkeit") + esc(a.skill) + '<br>' + lab("Talente") + esc(a.talente.join(", ")) + ' &nbsp;·&nbsp; ' + lab("Ressourcen") + esc(a.res) + '<br>' + lab("Ausrüstung") + esc(a.ausr.join(", ")), "margin-top:16px;font-size:16px;line-height:1.55");
  return '<div class="dt"><div class="pic"><img src="' + IMG(a.img) + '" alt="' + esc(a.name) + '"></div><div class="tx">' +
   '<div style="display:flex;align-items:baseline;gap:6px 14px;flex-wrap:wrap"><h1>' + esc(a.name) + '</h1>' + bookLink(a.p) + '</div>' +
   '<p class="quote" style="margin-top:10px">' + esc(a.quote) + '</p>' + info +
   '<p style="margin-top:14px"><button class="btn fill" onclick="go(\'erstellung/' + a.id + '\')">Mit diesem Archetyp erstellen</button></p></div>' +
   '<div class="gx"><div><h3>Name</h3><ul><li>Vorname: ' + esc(a.vor.join(", ")) + '</li><li>Nachname: ' + esc(a.nach.join(", ")) + '</li></ul></div><div><h3>Motivation</h3>' + list(a.mot) + '</div><div><h3>Trauma</h3>' + list(a.trauma) + '</div><div><h3>Dunkles Geheimnis</h3>' + list(a.geheim) + '</div><div><h3>Beziehungen</h3>' + list(a.beziehung) + '</div></div></div>';
}

/* ---------- Vaesen ---------- */
var VTABS = [["Vaesen","vaesen"],["Vaesen und Menschen","vaesen/t-menschen"],["Magische Kräfte","vaesen/t-magie"],["Regeln für Vaesen","vaesen/t-regeln"],["Nichtspielercharaktere","vaesen/t-nsc"],["Tiere","vaesen/t-tiere"]];
var VBOOK = {"t-menschen":[112,"Vaesen und Menschen"],"t-magie":[115,"Magische Kräfte"],"t-regeln":[121,"Regeln für Vaesen"],"t-nsc":[166,"Nichtspielercharaktere"],"t-tiere":[168,"Tiere"]};
var IMGS = {}; (window.__galNames || []).forEach(function(n){ IMGS[n] = 1; });
function vSide(){ return [{i:VAE_WESEN.map(function(v){ return {id:v.id, go:"vaesen/" + v.id, t:v.name}; })}]; }
function viewVaesen(){
  if(window.VAE_KAP && VAE_KAP[sub]){ var k = VAE_KAP[sub]; return tabsBar(VTABS, k.titel) + '<div class="page"><div style="display:flex;align-items:baseline;gap:6px 14px;flex-wrap:wrap"><h1>' + esc(k.titel) + '</h1>' + bookLink(k.p) + '</div><div style="margin-top:12px">' + flow(k.b) + '</div></div>'; }
  if(VBOOK[sub]){ var b = VBOOK[sub]; return tabsBar(VTABS, b[1]) + '<div class="page"><div style="display:flex;align-items:baseline;gap:6px 14px;flex-wrap:wrap"><h1>' + b[1] + '</h1>' + bookLink(b[0]) + '</div><div class="cols" style="margin-top:14px">' + box('<h3>Im Buch</h3><p>Dieser Abschnitt steht im Grundregelwerk ab S. ' + b[0] + '. Die deutsche Aufbereitung folgt.</p><p><button class="btn alt" onclick="' + inBook(b[0]) + '">Im Buch öffnen</button></p>') + '</div></div>'; }
  var v = VAE_WESEN.filter(function(x){ return x.id === sub; })[0];
  if(v) return tabsBar(VTABS, "Vaesen") + main(vSide(), v.id, vDetail(v));
  var cards = VAE_WESEN.map(function(v){ var has = IMGS[v.img];
    return '<div class="box card" onclick="go(\'vaesen/' + v.id + '\')"><div class="im' + (has ? '' : ' ph') + '">' + (has ? '<img src="' + IMG(v.img, "thumb") + '" alt="' + esc(v.name) + '">' : 'Bild folgt') + '</div><div class="tx"><h3>' + esc(v.name) + '</h3></div><i></i><b></b></div>'; }).join("");
  return tabsBar(VTABS, "Vaesen") + '<div class="page"><div class="cards v">' + cards + '</div></div>';
}
function vDetail(v){
  var d = (window.VAE_DETAIL || {})[v.id] || {}, has = IMGS[v.img];
  function st(l, x){ return '<div><span>' + l + '</span><b>' + (x == null ? "–" : x) + '</b></div>'; }
  function li(a){ return "<ul>" + a.map(function(x){ return "<li>" + x + "</li>"; }).join("") + "</ul>"; }
  var quote = d.q ? '<p class="hand" style="margin:6px 0 0;max-width:90ch">„' + esc(d.q) + '“ <span style="font-size:17px">– Carl Linnaeus, ' + esc(d.qd) + '</span></p>' : '';
  var head = '<div style="grid-column:1/3"><div style="display:flex;align-items:baseline;gap:6px 14px;flex-wrap:wrap"><h1>' + esc(v.name) + '</h1>' + bookLink(v.p) + '</div>' + quote + '</div>';
  var left = '<div class="ph" style="margin-top:0">' + (has ? '<img src="' + IMG(v.img) + '" alt="' + esc(v.name) + '">' : '') + '<div><p style="font-size:17.5px">' + esc(d.text || v.text) + '</p></div></div>' +
   (d.powers || d.cond ? '<div class="g2" style="margin-top:6px">' + (d.powers ? '<div><h3>Magische Kräfte</h3>' + li(d.powers) + '</div>' : '') + (d.cond ? '<div><h3>Zustände</h3>' + li(d.cond) + '</div>' : '') + '</div>' : '<p class="pg" style="margin-top:12px">Magische Kräfte, Zustände und Angriffe stehen im Buch auf S. ' + v.p + '.</p>');
  var right = box('<div class="hd" style="text-align:center;letter-spacing:.14em;color:var(--red);font-size:15px">EIGENSCHAFTEN</div><div class="stat" style="margin-top:6px">' + st("Macht", v.might) + st("Körperkontr.", v.body) + st("Magie", v.magic) + st("Manipul.", v.manip) + st("Furcht", v.fear) + '</div>', "font-size:15.5px") +
   (d.att && d.att.length ? '<h3>Angriffe</h3><table class="t"><tr><th>Angriff</th><th>Schaden</th><th>Reichweite</th></tr>' + d.att.map(function(r){ return "<tr><td>" + r[0] + "</td><td>" + r[1] + "</td><td>" + r[2] + "</td></tr>"; }).join("") + '</table>' + (d.note ? '<p class="pg" style="white-space:normal">' + esc(d.note) + '</p>' : '') : '') +
   '<h3>Ritual</h3>' + box('<p style="margin:0">' + esc(d.ritual || v.ritual) + '</p>', "font-size:16px");
  var ex = d.ex ? '<div style="grid-column:1/3"><h3 style="margin-top:0">Beispiele für Konflikte</h3><div class="exg">' + d.ex.map(function(t){ return box(t); }).join("") + '</div></div>' : '';
  return '<div class="vd">' + head + '<div>' + left + '</div><div style="font-size:17px">' + right + '</div>' + ex + '</div>';
}

/* ---------- Kapitelübersicht ---------- */
function viewTabbed(id){
  var k = VAE_KAP[id], base = cur === id ? id : "kapitel/" + id, p = (cur === id ? sub : sub.split("/").slice(1).join("/")).split("/");
  var bar = "", tab = null, secs, selId, side;
  function sidePic(sec){ return sec.img ? '<div class="box card" style="max-width:360px;margin:0 0 16px" onclick="Galerie.image(\'vaesen\',\'' + sec.img + '\')"><div class="im" style="height:220px"><img src="' + IMG(sec.img, "thumb") + '"></div><i></i><b></b></div>' : ''; }
  if(k.tabs){
    var T = k.tabs; tab = T.filter(function(t){ return t.id === p[0]; })[0] || T[0];
    bar = tabsBar(T.map(function(t){ return [t.t, base + "/" + t.id + (t.secs ? "/" + t.secs[0].id : "")]; }), tab.t);
    if(tab.figs) return bar + '<div class="page"><div class="fgrid">' + tab.figs.map(function(f){
      return '<details class="box fc"><summary>' + (f.img ? '<img src="' + IMG(f.img, "thumb") + '" alt="">' : '') + '<span><h3>' + esc(f.n) + '</h3><small>' + esc(f.s) + '</small></span></summary>' +
       (f.q ? '<p class="quote">' + f.q + '</p>' : '') + '<p>' + f.x + '</p>' + (f.st ? '<p class="st">' + f.st + '</p>' : '') + '<i></i><b></b></details>'; }).join("") + '</div></div>';
    if(!tab.secs) return bar + '<div class="page">' + flow(tab.b) + '</div>';
    secs = tab.secs; selId = p[1];
    side = [{i:secs.map(function(x){ return {id:x.id, go:base + "/" + tab.id + "/" + x.id, t:x.t}; })}];
  } else {
    var all = []; k.groups.forEach(function(g){ all = all.concat(g.secs); });
    secs = all; selId = p[0];
    bar = (id === "konflikt" || id === "talente") ? tabsBar(VAE_REGELN.map(function(x){ return [x.titel, "regeln/" + x.id]; }).concat([["Konflikt und Verletzungen", "kapitel/konflikt"], ["Talente", "kapitel/talente"]]), k.titel) : "";
    side = k.groups.map(function(g){ return {h:g.h, i:g.secs.map(function(x){ return {id:x.id, go:base + "/" + x.id, t:x.t}; })}; });
  }
  var sec = secs.filter(function(x){ return x.id === selId; })[0] || secs[0];
  var cards = (id === "norden" || id === "gesellschaft");
  function secBody(){ var q = secImgs(id, sec, secs); return q.head + flow(sec.b, q.fl, cards); }
  if(id === "norden"){
    var sh = function(t){ return t.split(" – ")[0]; }, map = {staedte:"norden_karte_mythischer_norden", upsala:"norden_karte_upsala"}[sec.id];
    bar = tabsBar(secs.map(function(x){ return [sh(x.t), base + "/" + x.id]; }), sh(sec.t));
    var pgl = '<div style="display:flex;justify-content:flex-end;margin:0 0 6px">' + (sec.p ? bookLink(sec.p) : '') + '</div>';
    return bar + (map ? '<div class="vu-m4"><div><div class="vu-map" onclick="Galerie.image(\'vaesen\',\'' + map + '\')"><img src="' + IMG(map) + '" alt=""></div></div><div>' + pgl + secBody() + '</div></div>' : '<div class="page">' + pgl + secBody() + '</div>');
  }
  return bar + main(side, sec.id, '<div class="page"><div style="display:flex;align-items:baseline;gap:6px 14px;flex-wrap:wrap"><h1>' + esc(sec.t) + '</h1>' + (sec.p ? bookLink(sec.p) : '') + '</div><div style="margin-top:12px">' + sidePic(sec) + secBody() + '</div></div>');
}
function viewKapitel(id){
  if(window.VAE_KAP && VAE_KAP[id] && (VAE_KAP[id].tabs || VAE_KAP[id].groups)) return viewTabbed(id);
  if(window.VAE_KAP && VAE_KAP[id]){ var k = VAE_KAP[id]; var tabs0 = (id === "talente" || id === "konflikt") ? tabsBar(VAE_REGELN.map(function(x){ return [x.titel, "regeln/" + x.id]; }).concat([["Konflikt und Verletzungen", "kapitel/konflikt"], ["Talente", "kapitel/talente"]]), k.titel) : ""; return tabs0 + '<div class="page"><div style="display:flex;align-items:baseline;gap:6px 14px;flex-wrap:wrap"><h1>' + esc(k.titel) + '</h1>' + bookLink(k.p) + '</div><div style="margin-top:12px">' + flow(k.b) + '</div></div>'; }
  var t = toc(id); if(!t) return viewStart();
  var imgs = {norden:["norden_titel_reiter","norden_karte_upsala"], gesellschaft:["mysterium_dame_mit_laterne"], mysterium:["einleitung_naeck"], tanz:["tanz_karte_hexenkater","tanz_sami_harjula","tanz_sophia_harjula","tanz_oscar_hjort"], konflikt:[], talente:[]}[id] || [];
  var secs = t.s.length ? t.s : [[t.t, t.p]];
  var tabs = t.s.length ? tabsBar(t.s.map(function(s){ return [s[0], "kapitel/" + id]; }), "") : "";
  var pics = imgs.length ? '<div class="cards" style="grid-template-columns:repeat(auto-fill,minmax(220px,1fr));margin-bottom:18px">' + imgs.map(function(n){ return '<div class="box card" onclick="Galerie.image(\'vaesen\',\'' + n + '\')"><div class="im" style="height:200px"><img src="' + IMG(n, "thumb") + '"></div><i></i><b></b></div>'; }).join("") + '</div>' : "";
  return '<div class="page"><div style="display:flex;align-items:baseline;gap:6px 14px;flex-wrap:wrap"><h1>' + esc(t.t) + '</h1>' + bookLink(t.p) + '</div><div style="margin-top:14px">' + pics + '</div><div class="cols">' + secs.map(function(s){ return box('<h3>' + esc(s[0]) + '</h3><p><span class="pg">S. ' + s[1] + '</span></p><p><button class="btn alt" onclick="' + inBook(s[1]) + '">Im Buch öffnen</button></p>'); }).join("") + '</div></div>';
}

/* ---------- Karten ---------- */
function viewKarten(){
  var maps = [["norden_karte_mythischer_norden","Der Mythische Norden",99],["norden_karte_upsala","Upsala",106],["tanz_karte_hexenkater","Gasthaus „Zum Hexenkater“",200]];
  return '<div class="page"><div style="display:flex;align-items:baseline;gap:6px 14px;flex-wrap:wrap"><h1>Karten und Bilder</h1></div><div class="cards" style="grid-template-columns:repeat(auto-fill,minmax(300px,1fr));margin-top:14px">' + maps.map(function(m){ return '<div class="box card" onclick="Galerie.image(\'vaesen\',\'' + m[0] + '\')"><div class="im" style="height:260px"><img src="' + IMG(m[0], "thumb") + '"></div><div class="tx"><h3>' + m[1] + '</h3><small>S. ' + m[2] + '</small></div><i></i><b></b></div>'; }).join("") + '</div><p style="margin-top:18px"><button class="btn fill" onclick="Galerie.open(\'vaesen\')">Galerie</button></p></div>';
}

/* ---------- Charaktererstellung ---------- */
var CK = "vae_chars_v1", CH = null;
var ATTRS = ["Physis", "Präzision", "Logik", "Empathie"], SK = [];
VAE_ATTR.forEach(function(a){ a.s.forEach(function(s){ SK.push({n:s[0], a:a.n}); }); });
var MEM = ["Getrocknete rote Rose","Foto einer nahestehenden Person","Siegelring mit Geheimfach","Der Stock deines Vaters","Hut mit Geheimfach","Buch in fremder Sprache","Flachmann mit Gravur","Alter Liebesbrief","Eine zerzauste Katze","Ein Affenschädel","Blutbefleckter Schuldschein","Goldschmuck deiner Mutter","Silberkreuz an einer Kette","Schöne Fiedel aus Familienbesitz","Tagebuch (deins oder das eines anderen)","Zeitung von einem bedeutsamen Datum","Zerschlissene Puppe","Zahme Taube","Zerlesener Roman mit Widmung","Pläne für eine Familiengruft","Karte mit Randnotizen","Seltsames Tier im Einmachglas","Spieluhr aus der Kindheit","Sonnenstein (geschliffenes Mineral)","Fläschchen mit Parfüm, das an jemanden erinnert","Gesangbuch aus Familienbesitz","Taschenuhr mit Foto","Ein ungezeichnetes Testament","Goldene Schatulle aus fernem Land","Noten eines vergessenen Meisters","Puderdose mit Schlaftabletten","Kunstvoll verzierte Pfeife","Hasenpfote oder anderer Glücksbringer","Spritze mit Nadel im Etui","Abgenutzte Knochenwürfel","Ein weitergegebenes Manuskript"];
var ALL_TAL = [];
function loadChars(){ try{ return JSON.parse(localStorage.getItem(CK) || "[]"); }catch(e){ return []; } }
function saveChars(a){ try{ localStorage.setItem(CK, JSON.stringify(a)); }catch(e){} }
function newChar(archId){
  var a = VAE_ARCH.filter(function(x){ return x.id === archId; })[0] || VAE_ARCH[0];
  var at = {Physis:2, Präzision:2, Logik:2, Empathie:2}, sk = {};
  return {id:"c" + Date.now(), arch:a.id, alter:0, name:"", attr:at, skills:sk, talent:"", res:parseInt(a.res, 10) || 3, mot:"", trauma:"", geheim:"", bez:"", andenken:"", ausr:[], beschr:"", spieler:""};
}
function pts(c){
  var al = VAE_ALTER[c.alter], ua = 0, us = 0; ATTRS.forEach(function(k){ ua += c.attr[k] - 2; });
  Object.keys(c.skills).forEach(function(k){ us += c.skills[k]; });
  return {ap:al[2] - ua, sp:al[3] - us, al:al};
}
function viewErstellung(){
  var chars = loadChars();
  if(!CH || (sub && sub !== CH.arch && !CH.name && !/^c\d/.test(sub))){ CH = newChar(sub || CH && CH.arch); }
  if(/^c\d/.test(sub)){ var f = chars.filter(function(x){ return x.id === sub; })[0]; if(f) CH = f; }
  var c = CH, a = VAE_ARCH.filter(function(x){ return x.id === c.arch; })[0], p = pts(c);
  var side = [{h:"Gespeicherte Charaktere", i:chars.map(function(x){ var ar = VAE_ARCH.filter(function(y){ return y.id === x.arch; })[0]; return {id:x.id, go:"erstellung/" + x.id, t:x.name || "(ohne Name)", s:ar ? ar.name : ""}; }).concat([{id:"neu", go:"erstellung/neu", t:"+ Neuer Charakter"}])}];
  if(sub === "neu"){ CH = newChar(); c = CH; a = VAE_ARCH[0]; p = pts(c); }
  function sel(id, opts, val, fn){ return '<select id="' + id + '" onchange="' + fn + '">' + opts.map(function(o){ return '<option value="' + esc(o[0]) + '"' + (String(o[0]) === String(val) ? " selected" : "") + ">" + esc(o[1]) + "</option>"; }).join("") + "</select>"; }
  function pick(field, arr, label){ return '<div class="box"><h3>' + label + '</h3>' + sel("f_" + field, [["", "— wählen —"]].concat(arr.map(function(x){ return [x, x]; })), c[field], "setF('" + field + "',this.value)") + '<input class="gloss-search" style="margin-top:8px" placeholder="…oder eigenes" value="' + (arr.indexOf(c[field]) < 0 ? esc(c[field]) : "") + '" oninput="setF(\'' + field + '\',this.value,1)"></div>'; }
  function srow(l, sm, n, mx, fnA, hint){ return '<div class="srow"><span class="sl">' + l + (sm ? ' <small class="pg">' + sm + '</small>' : '') + ' <small class="pg">· ' + hint + '</small></span><button class="btn alt" onclick="' + fnA + ',-1)">−</button><span class="hand sv">' + n + '</span><button class="btn alt" onclick="' + fnA + ',1)">+</button></div>'; }
  var attrH = ATTRS.map(function(k){ var mx = a.attr === k ? 5 : 4; return srow('<b>' + k + '</b>', "", c.attr[k], mx, "adj('" + k + "'", "2–" + mx + (a.attr === k ? " · Haupt" : "")); }).join("");
  var skH = SK.map(function(sk){ var v = c.skills[sk.n] || 0, mx = a.skill === sk.n ? 3 : 2; return srow(sk.n, sk.a, v, mx, "adjS('" + sk.n + "'", "max " + mx + (a.skill === sk.n ? " · Haupt" : "")); }).join("");
  var arch = sel("f_arch", VAE_ARCH.map(function(x){ return [x.id, x.name]; }), c.arch, "setF('arch',this.value);render()");
  var alt = sel("f_alter", VAE_ALTER.map(function(x, i){ return [i, x[0] + " (" + x[1] + ")"]; }), c.alter, "setF('alter',+this.value);render()");
  var body = '<div style="display:flex;align-items:baseline;gap:6px 14px;flex-wrap:wrap"><h1>Charaktererstellung</h1>' + bookLink(17) + '</div>' +
   '<div class="cols2"><div><div class="box"><h3>1–3 · Grundlagen</h3><p>Archetyp ' + arch + '</p><p>Alter ' + alt + '</p><p><label style="cursor:pointer"><input type="checkbox" ' + (c.spielt ? 'checked' : '') + ' onchange="setSpielt(this.checked)"> Spielt in der Gruppe <small class="pg">(zeigt ihn in der Gruppen-Leiste)</small></label></p><p>Name <input class="gloss-search" id="f_name" value="' + esc(c.name) + '" placeholder="' + esc(a.vor[0] + " " + a.nach[0]) + '" oninput="setF(\'name\',this.value,1)"></p><p>Spieler:in <input class="gloss-search" value="' + esc(c.spieler) + '" oninput="setF(\'spieler\',this.value,1)"></p></div>' + '<div class="box"><h3>5 · Fertigkeiten <span class="pg">übrig: ' + p.sp + '</span></h3>' + skH + '</div>' + '</div><div>' + '<div class="box"><h3>4 · Attribute <span class="pg">übrig: ' + p.ap + '</span></h3>' + attrH + '</div>' + '<div class="box"><h3>Ressourcen</h3><div style="display:flex;align-items:center;gap:8px"><button class="btn alt" onclick="adjR(-1)">−</button><span class="hand">' + c.res + '</span><button class="btn alt" onclick="adjR(1)">+</button><span class="pg">Archetyp: ' + a.res + '</span></div></div>' + pick("talent", a.talente, "6 · Talent") + pick("mot", a.mot, "7 · Motivation") + pick("trauma", a.trauma, "8 · Trauma") + pick("geheim", a.geheim, "9 · Dunkles Geheimnis") + '</div></div>' +
   '<div class="cols" style="margin-top:18px">' + pick("bez", a.beziehung, "10 · Beziehung (Vorschläge)") + '<div class="box"><h3>11 · Andenken <button class="btn alt" style="padding:3px 12px" onclick="rollMem()">W66 würfeln</button></h3><p class="hand" id="memOut">' + esc(c.andenken || "–") + '</p></div><div class="box"><h3>12 · Ausrüstung</h3>' + a.ausr.map(function(x){ return '<label style="display:block"><input type="checkbox" ' + (c.ausr.indexOf(x) > -1 ? "checked" : "") + ' onchange="togA(\'' + esc(x).replace(/'/g, "\\'") + '\',this.checked)"> ' + esc(x) + '</label>'; }).join("") + '</div></div>' +
   '<div class="box"><h3>Beschreibung</h3><textarea class="gloss-search" rows="3" oninput="setF(\'beschr\',this.value,1)">' + esc(c.beschr) + '</textarea></div>' +
   '<p style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn" onclick="saveCur()">Speichern</button><button class="btn alt" onclick="printSheet()">Als PDF / Drucken</button><button class="btn alt" onclick="shareLink()">Spieler-Link kopieren</button><button class="btn alt" onclick="shareFile()">Datei teilen</button></p><p class="pg" id="shMsg"></p>';
  var chipsH = '<div class="chips">' + side[0].i.map(function(i){ return '<a class="' + (i.id === CH.id ? "on" : "") + '" onclick="go(\'' + i.go + '\')">' + esc(i.t) + '</a>'; }).join("") + '</div>';
  return tabsBar(CTABS, "") + '<div class="page">' + chipsH + body + '</div>';
}
function setSpielt(on){ CH.spielt = on; var all = loadChars(), f = all.filter(function(x){ return x.id === CH.id; })[0]; if(f){ f.spielt = on; saveChars(all); } if(window.grpAfter) grpAfter(); }
function setF(k, v, quiet){ CH[k] = v; if(k === "arch"){ var a = VAE_ARCH.filter(function(x){ return x.id === v; })[0]; CH.skills = {}; CH.attr = {Physis:2, Präzision:2, Logik:2, Empathie:2}; CH.talent = CH.mot = CH.trauma = CH.geheim = CH.bez = ""; CH.ausr = []; CH.res = parseInt(a.res, 10) || 3; } if(!quiet && k !== "arch" && k !== "alter"){ } }
function adj(k, d){ var a = VAE_ARCH.filter(function(x){ return x.id === CH.arch; })[0], mx = a.attr === k ? 5 : 4, n = CH.attr[k] + d; if(n < 2 || n > mx) return; if(d > 0 && pts(CH).ap <= 0) return; CH.attr[k] = n; render(); }
function adjS(k, d){ var a = VAE_ARCH.filter(function(x){ return x.id === CH.arch; })[0], mx = a.skill === k ? 3 : 2, n = (CH.skills[k] || 0) + d; if(n < 0 || n > mx) return; if(d > 0 && pts(CH).sp <= 0) return; CH.skills[k] = n; render(); }
function adjR(d){ CH.res = Math.max(1, Math.min(8, CH.res + d)); render(); }
function togA(x, on){ var i = CH.ausr.indexOf(x); if(on && i < 0) CH.ausr.push(x); if(!on && i > -1) CH.ausr.splice(i, 1); }
function rollMem(){ CH.andenken = MEM[Math.floor(Math.random() * MEM.length)]; document.getElementById("memOut").textContent = CH.andenken; }
function saveCur(){ var a = loadChars(), i = a.map(function(x){ return x.id; }).indexOf(CH.id); if(i > -1) a[i] = CH; else a.push(CH); saveChars(a); msg("Gespeichert."); }
function msg(t){ var m = document.getElementById("shMsg"); if(m) m.textContent = t; }
function b64(o){ var s = unescape(encodeURIComponent(JSON.stringify(o))); return btoa(s); }
function unb64(s){ return JSON.parse(decodeURIComponent(escape(atob(s)))); }
function shareLink(){ var u = location.href.split("#")[0] + "#spieler/" + b64(CH); (navigator.clipboard ? navigator.clipboard.writeText(u) : Promise.reject()).then(function(){ msg("Spieler-Link in die Zwischenablage kopiert."); }, function(){ prompt("Spieler-Link:", u); }); }
function shareFile(){ var f = new File([JSON.stringify(CH, null, 1)], (CH.name || "vaesen-charakter") + ".json", {type:"application/json"}); if(navigator.canShare && navigator.canShare({files:[f]})){ navigator.share({files:[f], title:"Vaesen: " + (CH.name || "Charakter")}).catch(function(){}); } else { var a = document.createElement("a"); a.href = URL.createObjectURL(f); a.download = f.name; a.click(); } }
function sheetHTML(c){
  var a = VAE_ARCH.filter(function(x){ return x.id === c.arch; })[0], al = VAE_ALTER[c.alter] || VAE_ALTER[0];
  var attrs = ATTRS.map(function(k){ return '<div><span>' + k + '</span><b>' + c.attr[k] + '</b></div>'; }).join("");
  var sk = VAE_ATTR.map(function(g){ return '<div class="box"><h3>' + g.n + ' ' + c.attr[g.n] + '</h3>' + g.s.map(function(s){ return '<p style="display:flex;justify-content:space-between;margin:2px 0"><span>' + s[0] + '</span><b>' + (c.skills[s[0]] || 0) + '</b></p>'; }).join("") + '</div>'; }).join("");
  return '<div style="display:flex;align-items:baseline;gap:6px 14px;flex-wrap:wrap"><h1>' + esc(c.name || "Unbenannt") + '</h1><span class="pg">' + esc(a.name) + ' · ' + al[0] + (c.spieler ? ' · Spieler:in ' + esc(c.spieler) : '') + '</span></div>' + box('<div class="stat">' + attrs + '<div><b>' + c.res + '</b><span>Ressourcen</span></div></div>') + '<div class="cols">' + sk + '</div>' +
   '<div class="cols"><div class="box"><h3>Talent</h3><p>' + esc(c.talent || "–") + '</p><h3>Ausrüstung</h3><p>' + esc((c.ausr || []).join(", ") || "–") + '</p><h3>Andenken</h3><p>' + esc(c.andenken || "–") + '</p></div><div class="box"><h3>Motivation</h3><p>' + esc(c.mot || "–") + '</p><h3>Trauma</h3><p>' + esc(c.trauma || "–") + '</p><h3>Dunkles Geheimnis</h3><p>' + esc(c.geheim || "–") + '</p><h3>Beziehung</h3><p>' + esc(c.bez || "–") + '</p></div></div><div class="box"><h3>Beschreibung</h3><p>' + esc(c.beschr || "–") + '</p></div>';
}
function printSheet(){ var w = window.open("", "_blank"); if(!w){ msg("Pop-up blockiert."); return; } w.document.write('<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><title>' + esc(CH.name || "Charakter") + '</title><link rel="stylesheet" href="' + location.href.replace(/[^\/]*$/, "") + 'style.css"></head><body><div class="shell">' + sheetHTML(CH) + '</div><script>setTimeout(function(){print()},600)<\/script></body></html>'); w.document.close(); }
function viewSpieler(){
  var c; try{ c = unb64(sub); }catch(e){ return '<div class="page"><div class="empty">Der Link ist ungültig.</div></div>'; }
  return '<div class="page">' + sheetHTML(c) + '</div>' + '<p><button class="btn" onclick="importCh()">In meine Charaktere übernehmen</button></p>';
}
function importCh(){ var c = unb64(sub), a = loadChars(); c.id = "c" + Date.now(); a.push(c); saveChars(a); CH = c; go("erstellung/" + c.id); }

/* ---------- Render ---------- */
function render(){
  document.title = "Vaesen";
  var v;
  switch(cur){
   case "regeln": v = viewRegeln(); break;
   case "charaktere": v = viewCharaktere(); break;
   case "vaesen": v = viewVaesen(); break;
   case "karten": v = viewKarten(); break;
   case "buecher": v = viewBuecher(); break;
   case "erstellung": v = viewErstellung(); break;
   case "spieler": v = viewSpieler(); break;
   case "kapitel": v = viewKapitel(sub.split("/")[0]); break;
   case "tanz": v = viewTanz(); break;
   case "som": v = viewMys(); break;
   case "norden": case "gesellschaft": case "mysterium": v = viewKapitel(cur); break;
   default: v = viewStart();
  }
  APP.innerHTML = v; window.scrollTo(0, 0); if(window.tzAfter) tzAfter(); if(window.mysAfter) mysAfter(); if(window.grpAfter) grpAfter();
}

/* ---------- Menü & Suche ---------- */
function buildMenu(){
  var p = document.getElementById("mmP");
  p.innerHTML = '<h3>Navigation</h3><button class="mi' + (cur === "start" ? " on" : "") + '" onclick="openMenu(false);go(\'start\')"><b>Startseite</b></button>' +
   AREAS.map(function(a){ return '<button class="mi' + (cur === a.id ? " on" : "") + '" onclick="openMenu(false);go(\'' + a.id + '\')"><b>' + esc(a.t) + '</b></button>'; }).join("") +
   '<button class="mi" onclick="openMenu(false);openSearch()"><b>Suche</b></button><button class="mi" onclick="openMenu(false);schOpen()"><b>Spielleiterschirm</b> · Taste S</button><button class="mi" onclick="openMenu(false);go(\'kapitel/tanz\')"><b>Tanz der Träume</b> · Buchansicht</button><h3>Bilder</h3><button class="mi" onclick="openMenu(false);Galerie.open(\'vaesen\')"><b>Galerie</b> · alle Bilder des Grundregelwerks</button>' +
   '<h3>Buch-PDF</h3><div id="bvSettingsHost"></div>';
  if(window.BV){ document.getElementById("bvSettingsHost").innerHTML = BV.settingsHTML(); BV.refresh(); }
}
function openMenu(on){ if(on) buildMenu(); document.getElementById("mmB").classList.toggle("on", on); document.getElementById("mmP").classList.toggle("on", on); }
function openSearch(){ document.getElementById("searchModal").classList.add("on"); document.getElementById("searchInput").focus(); }
function closeSearch(){ document.getElementById("searchModal").classList.remove("on"); }
function strip(h){ return String(h).replace(/<[^>]+>/g, " "); }
function runSearch(q){
  q = (q || "").trim().toLowerCase(); var out = document.getElementById("searchResults"); if(q.length < 2){ out.innerHTML = ""; return; }
  var hits = [];
  VAE_REGELN.forEach(function(s){ var t = strip(s.b.map(blk).join(" ")); if((s.titel + " " + t).toLowerCase().indexOf(q) > -1) hits.push(["regeln/" + s.id, s.titel, "Regeln", t]); });
  VAE_ARCH.forEach(function(a){ var t = [a.desc, a.vor, a.nach, a.mot, a.trauma, a.geheim, a.talente, a.ausr].join(" "); if((a.name + " " + a.en + " " + t).toLowerCase().indexOf(q) > -1) hits.push(["charaktere/" + a.id, a.name, "Archetyp", t]); });
  VAE_WESEN.forEach(function(v){ var t = v.text + " " + v.ritual; if((v.name + " " + v.en + " " + t).toLowerCase().indexOf(q) > -1) hits.push(["vaesen/" + v.id, v.name, "Vaesen", t]); });
  if(window.VAE_MYS) Object.keys(VAE_MYS).forEach(function(id){ var M = VAE_MYS[id], T = strip(JSON.stringify(M)).replace(/\\"/g, '"'), tab = {orte:"orte", figs:"fg", ho:"ho", kf:"kf", an:"an", ns:"ns"};
    if((M.titel + " " + T).toLowerCase().indexOf(q) > -1) hits.push(["som/" + id + "/hg", M.titel, "Mysterium", T]); });
  out.innerHTML = hits.slice(0, 40).map(function(h){ var k = h[3].toLowerCase().indexOf(q), sn = k > -1 ? h[3].substr(Math.max(0, k - 40), 120) : ""; return '<button class="sr" onclick="closeSearch();go(\'' + h[0] + '\')"><b>' + esc(h[1]) + '</b><small>' + h[2] + (sn ? ' · …' + esc(sn) + '…' : '') + '</small></button>'; }).join("") || '<p class="pg">Keine Treffer.</p>';
}
(function(){ var g = (window.Galerie && Galerie) || null; })();
route();
