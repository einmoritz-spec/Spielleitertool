/* Vaesen – Spielleiter-Tafel (Year Zero Engine, Free League). Statisch, Hash-Routing: #start · #regeln/<id> · #charaktere/<id> · #vaesen/<id> … */
"use strict";
var APP = document.getElementById("app");
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
function IMG(n, k){ return "img/" + (k || "full") + "/" + n + ".webp"; }
var cur = "start", sub = "", folded = false;
try{ folded = localStorage.getItem("vae_fold") === "1"; }catch(e){}
var BOOK = 4; /* PDF-Seite = Buchseite + 4 */
function inBook(p){ return "BV.open('core'," + (p + BOOK) + ")"; }

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
function crumb(parts){ return '<div class="crumb"><a onclick="go(\'start\')">Vaesen</a>' + parts.map(function(p){ return ' › ' + (p[1] ? '<a onclick="go(\'' + p[1] + '\')">' + esc(p[0]) + '</a>' : esc(p[0])); }).join("") + '</div>'; }
function lay(items, sel, content, group){
  var side = '<nav class="side">' + items.map(function(g){ return (g.h ? '<h4>' + esc(g.h) + '</h4>' : '') + g.i.map(function(i){ return '<a class="' + (i.id === sel ? 'on' : '') + '" onclick="go(\'' + i.go + '\')">' + esc(i.t) + (i.s ? '<small>' + esc(i.s) + '</small>' : '') + '</a>'; }).join(""); }).join("") + '</nav>';
  var mob = '<div class="mob-nav">' + items.reduce(function(a, g){ return a.concat(g.i); }, []).map(function(i){ return '<a class="' + (i.id === sel ? 'on' : '') + '" onclick="go(\'' + i.go + '\')">' + esc(i.t) + '</a>'; }).join("") + '</div>';
  return '<button class="fold-b" onclick="toggleFold()" title="Seitenleiste ein-/ausblenden (b)" aria-label="Seitenleiste">' + (folded ? '›' : '‹') + '</button><div class="lay' + (folded ? ' fold' : '') + '">' + side + '<div>' + mob + content + '</div></div>';
}
function toggleFold(){ folded = !folded; try{ localStorage.setItem("vae_fold", folded ? "1" : "0"); }catch(e){} render(); }
document.addEventListener("keydown", function(e){
  if(/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "")) return;
  if(e.key === "b") toggleFold();
  if(e.key === "h"){ var t = document.querySelector(".topbar"); t.style.display = t.style.display === "none" ? "" : "none"; }
});

/* ---------- Startseite ---------- */
function bookTile(b){
  var cv = b.cover ? 'style="background-image:url(img/' + b.cover + ')"' : '';
  return '<button class="book' + (b.on ? '' : ' ph') + '" onclick="' + (b.on ? "BV.open('core',1)" : "bookInfo('" + b.id + "')") + '"><div class="cv" ' + cv + '>' + (b.cover ? '' : esc(b.name)) + '</div><b>' + esc(b.name) + '</b><small>' + esc(b.sub) + (b.on ? '' : ' · PDF folgt') + '</small></button>';
}
function bookInfo(id){ alert("Dieses Buch ist noch nicht eingebunden – sobald das PDF vorliegt, erscheint hier das Cover und der Inhalt."); }
function viewStart(){
  var tiles = AREAS.map(function(a){ return '<button class="tile" onclick="go(\'' + a.id + '\')"><div class="im" style="background-image:url(' + IMG(a.img, "thumb") + ');background-position:' + a.pos + '"></div><div class="tx"><h3>' + esc(a.t) + '</h3><small>' + esc(a.s) + '</small></div></button>'; }).join("");
  var shelf = '<div class="shelf">' + VAE_BUECHER.map(function(g){ return '<div class="sg"><div class="grp-h">' + esc(g.grp) + '</div><div class="books">' + g.items.map(bookTile).join("") + '</div></div>'; }).join("") + '</div>';
  return '<div class="hero" style="background-image:url(img/hero_naeck.webp)"><div class="ht"><img src="../assets/logos/vaesen-rot.webp" alt="Vaesen"><p>Mythisches Skandinavien im 19. Jahrhundert. Die Gesellschaft jagt Vaesen – Wesen aus Sagen und Aberglauben.</p><div class="go"><button class="btn" onclick="go(\'tanz\')">Abenteuer starten</button></div></div></div>' +
   '<div class="sech"><h2>Spielhilfen</h2></div><div class="tiles">' + tiles + '</div>' +
   '<div class="sech"><h2>Bücher</h2></div>' + shelf;
}

function viewBuecher(){
  var g = VAE_BUECHER[+sub] || VAE_BUECHER[0];
  var rows = VAE_BUECHER.map(function(x, i){ return {id:String(i), go:"buecher/" + i, t:x.grp, s:x.items.length + " Titel"}; });
  var one = g.items.length === 1 && g.items[0].on;
  return lay([{h:"Bücher", i:rows}], sub || "0", crumb([["Bücher"]]) + '<div class="sech" style="margin-top:0"><h2>' + esc(g.grp) + '</h2></div><div class="books">' + g.items.map(bookTile).join("") + '</div>' + (one ? '<p style="margin-top:18px"><button class="btn" onclick="go(\'regeln\')">Zu den Regeln</button> <button class="btn alt" onclick="go(\'charaktere\')">Charaktere</button> <button class="btn alt" onclick="go(\'vaesen\')">Vaesen</button></p>' : '<div class="empty" style="margin-top:16px">Sobald die PDFs dieser Bücher vorliegen, erscheinen hier Cover und Inhalte.</div>'));
}

/* ---------- Blöcke ---------- */
function blk(b){
  switch(b.t){
   case "p": return "<p>" + b.x + "</p>";
   case "h": return "<h4>" + b.x + "</h4>";
   case "ul": return "<ul>" + b.x.map(function(x){ return "<li>" + x + "</li>"; }).join("") + "</ul>";
   case "box": return '<div class="box"><h3>' + b.h + "</h3><p>" + b.x + "</p></div>";
   case "tbl": return '<table class="t"><tr>' + b.head.map(function(h){ return "<th>" + h + "</th>"; }).join("") + "</tr>" + b.rows.map(function(r){ return "<tr>" + r.map(function(c){ return "<td>" + c + "</td>"; }).join("") + "</tr>"; }).join("") + "</table>";
   case "cols": return '<div class="cols">' + b.x.map(function(c){ return '<div class="box"><h3>' + c[0] + "</h3><p>" + c[1] + "</p><p>" + c[2].map(function(x){ return '<span class="chip r">' + x + "</span>"; }).join("") + "</p></div>"; }).join("") + "</div>";
   case "skills": return '<div class="cols">' + VAE_ATTR.map(function(a){ return '<div class="box"><h3>' + a.n + '</h3><p><i>' + a.c + '</i></p>' + a.s.map(function(s){ return "<h4>" + s[0] + ' <span class="pg">' + s[1] + '</span></h4><p>' + s[2] + "</p>"; }).join("") + "</div>"; }).join("") + "</div>";
  }
  return "";
}

/* ---------- Regeln ---------- */
function viewRegeln(){
  var id = sub || VAE_REGELN[0].id, s = VAE_REGELN.filter(function(x){ return x.id === id; })[0] || VAE_REGELN[0];
  var items = [{h:"Regeln (Kap. 3)", i:VAE_REGELN.map(function(x){ return {id:x.id, go:"regeln/" + x.id, t:x.titel, s:"S. " + x.p}; })},
               {h:"Weiter im Buch", i:[{id:"konflikt", go:"kapitel/konflikt", t:"Konflikt & Verletzungen", s:"S. 57"},{id:"talente", go:"kapitel/talente", t:"Talente", s:"S. 49"}]}];
  var c = crumb([["Regeln"]]) + '<div class="sech"><h2>' + esc(s.titel) + '</h2><span class="pg">Buch S. ' + s.p + ' · <a style="color:var(--red);cursor:pointer" onclick="' + inBook(s.p) + '">im Buch öffnen</a></span></div>' + s.b.map(blk).join("");
  return lay(items, s.id, c);
}

/* ---------- Charaktere ---------- */
function archSide(){ return [{h:"Archetypen", i:VAE_ARCH.map(function(a){ return {id:a.id, go:"charaktere/" + a.id, t:a.name, s:a.attr}; })}, {h:"Erstellen", i:[{id:"erstellung", go:"erstellung", t:"Charaktererstellung"}]}]; }
function viewCharaktere(){
  if(sub){ var a = VAE_ARCH.filter(function(x){ return x.id === sub; })[0]; if(a) return lay(archSide(), a.id, archDetail(a)); }
  var cards = VAE_ARCH.map(function(a){ return '<div class="card" onclick="go(\'charaktere/' + a.id + '\')"><div class="im" style="background-image:url(' + IMG(a.img, "thumb") + ')"></div><div class="tx"><h3>' + esc(a.name) + '</h3><small>' + esc(a.attr) + ' · ' + esc(a.skill) + '</small></div></div>'; }).join("");
  var info = '<div class="cols"><div class="box"><h3>Alter</h3><table class="t"><tr><th>Gruppe</th><th>Jahre</th><th>Attribut</th><th>Fertigkeit</th></tr>' + VAE_ALTER.map(function(r){ return "<tr><td>" + r[0] + "</td><td>" + r[1] + "</td><td>" + r[2] + "</td><td>" + r[3] + "</td></tr>"; }).join("") + '</table></div><div class="box"><h3>Schritte</h3><p>1 Archetyp · 2 Alter · 3 Name · 4 Attribute · 5 Fertigkeiten &amp; Ressourcen · 6 Talent · 7 Motivation · 8 Trauma · 9 Dunkles Geheimnis · 10 Beziehungen · 11 Andenken · 12 Ausrüstung</p><button class="btn" onclick="go(\'erstellung\')">Charakter erstellen</button></div></div>';
  return lay(archSide(), "", crumb([["Charaktere"]]) + '<div class="sech"><h2>Archetypen</h2></div><div class="cards">' + cards + '</div><div class="sech"><h2>Charakter erschaffen</h2></div>' + info);
}
function list(a){ return "<ul>" + a.map(function(x){ return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>"; }
function archDetail(a){
  return crumb([["Charaktere", "charaktere"], [a.name]]) + '<div class="detail"><div class="pic"><img src="' + IMG(a.img) + '" alt="' + esc(a.name) + '"></div><div>' +
   '<div class="sech" style="margin-top:0"><h2>' + esc(a.name) + '</h2><span class="pg">' + esc(a.en) + ' · Buch S. ' + a.p + ' · <a style="color:var(--red);cursor:pointer" onclick="' + inBook(a.p) + '">im Buch</a></span></div>' +
   '<div class="stat"><div><b>' + esc(a.attr) + '</b><span>Hauptattribut</span></div><div><b>' + esc(a.skill) + '</b><span>Hauptfertigkeit</span></div><div><b>' + esc(a.res) + '</b><span>Ressourcen</span></div></div>' +
   '<p style="font-style:italic;color:var(--soft)">' + esc(a.desc) + '</p>' +
   '<div class="cols"><div class="box"><h3>Name</h3><p><b>Vornamen:</b> ' + esc(a.vor.join(", ")) + '</p><p><b>Nachnamen:</b> ' + esc(a.nach.join(", ")) + '</p></div><div class="box"><h3>Talente</h3><p>' + a.talente.map(function(t){ return '<span class="chip r">' + esc(t) + '</span>'; }).join("") + '</p><h4>Ausrüstung</h4>' + list(a.ausr) + '</div>' +
   '<div class="box"><h3>Motivation</h3>' + list(a.mot) + '</div><div class="box"><h3>Trauma</h3>' + list(a.trauma) + '</div><div class="box"><h3>Dunkles Geheimnis</h3>' + list(a.geheim) + '</div><div class="box"><h3>Beziehungen</h3>' + list(a.beziehung) + '</div></div>' +
   '<p><button class="btn" onclick="go(\'erstellung/' + a.id + '\')">Mit diesem Archetyp erstellen</button></p></div></div>';
}

/* ---------- Vaesen ---------- */
function vSide(){ return [{h:"Vaesen", i:VAE_WESEN.map(function(v){ return {id:v.id, go:"vaesen/" + v.id, t:v.name, s:"S. " + v.p}; })}]; }
function viewVaesen(){
  if(sub){ var v = VAE_WESEN.filter(function(x){ return x.id === sub; })[0]; if(v) return lay(vSide(), v.id, vDetail(v)); }
  var cards = VAE_WESEN.map(function(v){
    var has = v.img && IMGS[v.img];
    return '<div class="card" onclick="go(\'vaesen/' + v.id + '\')">' + (has ? '<div class="im" style="background-image:url(' + IMG(v.img, "thumb") + ')"></div>' : '<div class="im ph">Bild folgt</div>') + '<div class="tx"><h3>' + esc(v.name) + '</h3><small>' + (v.might != null ? 'Macht ' + v.might + ' · Magie ' + v.magic : 'Magie ' + v.magic) + '</small></div></div>'; }).join("");
  return lay(vSide(), "", crumb([["Vaesen"]]) + '<div class="sech"><h2>Die Vaesen</h2><span class="pg">Buch Kap. 8, S. 111–168</span></div><p>Vaesen sind Wesen aus Sagen und Volksglauben. Jedes hat Werte (Macht, Körperkontrolle, Manipulation, Magie, Furcht), ein Ritual zum Bannen und Beispielkonflikte.</p><div class="cards">' + cards + '</div>');
}
var IMGS = {}; VAE_GAL_NAMES();
function VAE_GAL_NAMES(){ try{ (window.__galNames || []).forEach(function(n){ IMGS[n] = 1; }); }catch(e){} }
function vDetail(v){
  var has = IMGS[v.img];
  function st(l, x){ return '<div><b>' + (x == null ? "–" : x) + '</b><span>' + l + '</span></div>'; }
  return crumb([["Vaesen", "vaesen"], [v.name]]) + '<div class="detail"><div class="pic">' + (has ? '<img src="' + IMG(v.img) + '" alt="' + esc(v.name) + '">' : '<div class="empty">Bild folgt</div>') + '</div><div>' +
   '<div class="sech" style="margin-top:0"><h2>' + esc(v.name) + '</h2><span class="pg">' + esc(v.en) + ' · Buch S. ' + v.p + ' · <a style="color:var(--red);cursor:pointer" onclick="' + inBook(v.p) + '">im Buch</a></span></div>' +
   '<div class="stat">' + st("Macht", v.might) + st("Körperkontrolle", v.body) + st("Manipulation", v.manip) + st("Magie", v.magic) + st("Furcht", v.fear) + '</div>' +
   '<div class="box"><h3>Beschreibung</h3><p>' + esc(v.text) + '</p></div><div class="box"><h3>Ritual · Bannen</h3><p>' + esc(v.ritual) + '</p></div>' +
   '<p class="pg">Magische Kräfte, Zustände, Angriffe und Beispielkonflikte stehen im Buch (Seite ' + v.p + ').</p></div></div>';
}

/* ---------- Kapitelübersicht (Inhalte folgen / im Buch öffnen) ---------- */
function viewKapitel(id){
  var t = toc(id); if(!t) return viewStart();
  var a = area(id), imgs = {norden:["norden_titel_reiter","norden_karte_upsala"], gesellschaft:["mysterium_dame_mit_laterne"], mysterium:["einleitung_naeck"], tanz:["tanz_karte_hexenkater","tanz_sami_harjula","tanz_sophia_harjula","tanz_oscar_hjort"]}[id] || [];
  var secs = t.s.length ? t.s : [[t.t, t.p]];
  var cards = secs.map(function(s){ return '<div class="box"><h3>' + esc(s[0]) + '</h3><p class="pg">Buch S. ' + s[1] + '</p><p><button class="btn alt" onclick="' + inBook(s[1]) + '">Im Buch öffnen</button></p></div>'; }).join("");
  var pics = imgs.length ? '<div class="cards" style="margin-bottom:16px">' + imgs.map(function(n){ return '<div class="card" onclick="Galerie.open(\'vaesen\')"><div class="im" style="background-image:url(' + IMG(n, "thumb") + ')"></div></div>'; }).join("") + '</div>' : "";
  return crumb([[a ? a.t : t.t]]) + '<div class="sech"><h2>' + esc(t.n + ". " + t.t) + '</h2><span class="pg">ab Buch S. ' + t.p + '</span></div>' + pics + '<div class="cols">' + cards + '</div><div class="empty" style="margin-top:16px">Die ausführliche deutsche Aufbereitung dieses Kapitels folgt.</div>';
}

/* ---------- Karten ---------- */
function viewKarten(){
  var maps = [["norden_karte_mythischer_norden","Der Mythische Norden","S. 99"],["norden_karte_upsala","Upsala","S. 106"],["tanz_karte_hexenkater","Gasthaus „Zum Hexenkater“","S. 200"]];
  return crumb([["Karten & Bilder"]]) + '<div class="sech"><h2>Karten</h2></div><div class="tiles">' + maps.map(function(m){ return '<button class="tile" onclick="Galerie.open(\'vaesen\')"><div class="im" style="background-image:url(' + IMG(m[0], "thumb") + ');height:200px"></div><div class="tx"><h3>' + m[1] + '</h3><small>Buch ' + m[2] + '</small></div></button>'; }).join("") + '</div><div class="sech"><h2>Bildergalerie</h2></div><p><button class="btn" onclick="Galerie.open(\'vaesen\')">Alle Bilder des Grundregelwerks</button></p>';
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
  var attrH = ATTRS.map(function(k){ var mx = a.attr === k ? 5 : 4; return '<div style="display:flex;align-items:center;gap:8px;margin:4px 0"><b style="width:100px">' + k + '</b><button class="btn alt" onclick="adj(\'' + k + '\',-1)">−</button><span class="hand" style="width:28px;text-align:center">' + c.attr[k] + '</span><button class="btn alt" onclick="adj(\'' + k + '\',1)">+</button><span class="pg">2–' + mx + (a.attr === k ? " · Haupt" : "") + '</span></div>'; }).join("");
  var skH = SK.map(function(s){ var v = c.skills[s.n] || 0, mx = a.skill === s.n ? 3 : 2; return '<div style="display:flex;align-items:center;gap:6px;margin:2px 0"><span style="width:190px;white-space:nowrap">' + s.n + '<small class="pg"> ' + s.a + '</small></span><button class="btn alt" style="padding:3px 10px" onclick="adjS(\'' + s.n + '\',-1)">−</button><span class="hand" style="width:22px;text-align:center">' + v + '</span><button class="btn alt" style="padding:3px 10px" onclick="adjS(\'' + s.n + '\',1)">+</button><span class="pg">max ' + mx + (a.skill === s.n ? " · Haupt" : "") + '</span></div>'; }).join("");
  var arch = sel("f_arch", VAE_ARCH.map(function(x){ return [x.id, x.name]; }), c.arch, "setF('arch',this.value);render()");
  var alt = sel("f_alter", VAE_ALTER.map(function(x, i){ return [i, x[0] + " (" + x[1] + ")"]; }), c.alter, "setF('alter',+this.value);render()");
  var body = crumb([["Charaktere", "charaktere"], ["Charaktererstellung"]]) + '<div class="sech" style="margin-top:0"><h2>Charaktererstellung</h2><span class="pg">Buch S. 17–25</span></div>' +
   '<div class="cols"><div class="box"><h3>1–3 · Grundlagen</h3><p>Archetyp ' + arch + '</p><p>Alter ' + alt + '</p><p>Name <input class="gloss-search" id="f_name" value="' + esc(c.name) + '" placeholder="' + esc(a.vor[0] + " " + a.nach[0]) + '" oninput="setF(\'name\',this.value,1)"></p><p>Spieler:in <input class="gloss-search" value="' + esc(c.spieler) + '" oninput="setF(\'spieler\',this.value,1)"></p></div>' +
   '<div class="box"><h3>4 · Attribute <span class="pg">übrig: ' + p.ap + '</span></h3>' + attrH + '</div></div>' +
   '<div class="cols"><div class="box"><h3>5 · Fertigkeiten <span class="pg">übrig: ' + p.sp + '</span></h3>' + skH + '</div><div>' + pick("talent", a.talente, "6 · Talent") +
   '<div class="box"><h3>Ressourcen</h3><div style="display:flex;align-items:center;gap:8px"><button class="btn alt" onclick="adjR(-1)">−</button><span class="hand">' + c.res + '</span><button class="btn alt" onclick="adjR(1)">+</button><span class="pg">Archetyp: ' + a.res + '</span></div></div></div></div>' +
   '<div class="cols">' + pick("mot", a.mot, "7 · Motivation") + pick("trauma", a.trauma, "8 · Trauma") + pick("geheim", a.geheim, "9 · Dunkles Geheimnis") + pick("bez", a.beziehung, "10 · Beziehung (Vorschläge)") + '</div>' +
   '<div class="cols"><div class="box"><h3>11 · Andenken <button class="btn alt" style="padding:3px 12px" onclick="rollMem()">W66 würfeln</button></h3><p class="hand" id="memOut">' + esc(c.andenken || "–") + '</p></div><div class="box"><h3>12 · Ausrüstung</h3>' + a.ausr.map(function(x){ return '<label style="display:block"><input type="checkbox" ' + (c.ausr.indexOf(x) > -1 ? "checked" : "") + ' onchange="togA(\'' + esc(x).replace(/'/g, "\\'") + '\',this.checked)"> ' + esc(x) + '</label>'; }).join("") + '</div></div>' +
   '<div class="box"><h3>Beschreibung</h3><textarea class="gloss-search" rows="3" oninput="setF(\'beschr\',this.value,1)">' + esc(c.beschr) + '</textarea></div>' +
   '<p style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn" onclick="saveCur()">Speichern</button><button class="btn alt" onclick="printSheet()">Als PDF / Drucken</button><button class="btn alt" onclick="shareLink()">Spieler-Link kopieren</button><button class="btn alt" onclick="shareFile()">Datei teilen</button></p><p class="pg" id="shMsg"></p>';
  return lay(side, CH.id, body);
}
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
  var attrs = ATTRS.map(function(k){ return '<div><b>' + c.attr[k] + '</b><span>' + k + '</span></div>'; }).join("");
  var sk = VAE_ATTR.map(function(g){ return '<div class="box"><h3>' + g.n + ' ' + c.attr[g.n] + '</h3>' + g.s.map(function(s){ return '<p style="display:flex;justify-content:space-between;margin:2px 0"><span>' + s[0] + '</span><b>' + (c.skills[s[0]] || 0) + '</b></p>'; }).join("") + '</div>'; }).join("");
  return '<div class="sech" style="margin-top:0"><h2>' + esc(c.name || "Unbenannt") + '</h2><span class="pg">' + esc(a.name) + ' · ' + al[0] + (c.spieler ? ' · Spieler:in ' + esc(c.spieler) : '') + '</span></div><div class="stat">' + attrs + '<div><b>' + c.res + '</b><span>Ressourcen</span></div></div><div class="cols">' + sk + '</div>' +
   '<div class="cols"><div class="box"><h3>Talent</h3><p>' + esc(c.talent || "–") + '</p><h3>Ausrüstung</h3><p>' + esc((c.ausr || []).join(", ") || "–") + '</p><h3>Andenken</h3><p>' + esc(c.andenken || "–") + '</p></div><div class="box"><h3>Motivation</h3><p>' + esc(c.mot || "–") + '</p><h3>Trauma</h3><p>' + esc(c.trauma || "–") + '</p><h3>Dunkles Geheimnis</h3><p>' + esc(c.geheim || "–") + '</p><h3>Beziehung</h3><p>' + esc(c.bez || "–") + '</p></div></div><div class="box"><h3>Beschreibung</h3><p>' + esc(c.beschr || "–") + '</p></div>';
}
function printSheet(){ var w = window.open("", "_blank"); if(!w){ msg("Pop-up blockiert."); return; } w.document.write('<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><title>' + esc(CH.name || "Charakter") + '</title><link rel="stylesheet" href="' + location.href.replace(/[^\/]*$/, "") + 'style.css"></head><body><div class="shell">' + sheetHTML(CH) + '</div><script>setTimeout(function(){print()},600)<\/script></body></html>'); w.document.close(); }
function viewSpieler(){
  var c; try{ c = unb64(sub); }catch(e){ return crumb([["Spielercharakter"]]) + '<div class="empty">Der Link ist ungültig.</div>'; }
  return crumb([["Spielercharakter"]]) + sheetHTML(c) + '<p><button class="btn" onclick="importCh()">In meine Charaktere übernehmen</button></p>';
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
   case "kapitel": v = viewKapitel(sub); break;
   case "norden": case "gesellschaft": case "mysterium": case "tanz": v = viewKapitel(cur); break;
   default: v = viewStart();
  }
  APP.innerHTML = v; window.scrollTo(0, 0);
}

/* ---------- Menü & Suche ---------- */
function buildMenu(){
  var p = document.getElementById("mmP");
  p.innerHTML = '<h3>Navigation</h3><button class="mi' + (cur === "start" ? " on" : "") + '" onclick="openMenu(false);go(\'start\')"><b>Startseite</b></button>' +
   AREAS.map(function(a){ return '<button class="mi' + (cur === a.id ? " on" : "") + '" onclick="openMenu(false);go(\'' + a.id + '\')"><b>' + esc(a.t) + '</b></button>'; }).join("") +
   '<h3>Bilder</h3><button class="mi" onclick="openMenu(false);Galerie.open(\'vaesen\')"><b>Galerie</b> · alle Bilder des Grundregelwerks</button>' +
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
  out.innerHTML = hits.slice(0, 40).map(function(h){ var k = h[3].toLowerCase().indexOf(q), sn = k > -1 ? h[3].substr(Math.max(0, k - 40), 120) : ""; return '<button class="sr" onclick="closeSearch();go(\'' + h[0] + '\')"><b>' + esc(h[1]) + '</b><small>' + h[2] + (sn ? ' · …' + esc(sn) + '…' : '') + '</small></button>'; }).join("") || '<p class="pg">Keine Treffer.</p>';
}
(function(){ var g = (window.Galerie && Galerie) || null; })();
route();
