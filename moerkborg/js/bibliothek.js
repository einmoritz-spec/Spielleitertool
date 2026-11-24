/* MÖRK BORG – Startseite „Bibliothek“: Kopf mit Kalender, Plakate, Abenteuer-Streifen, Zettel-Collage, Hack-Bänder. */
"use strict";
(function(){
 function aktion(b){ return b.status === "bereit" ? "go('" + b.route + "')" : "openBook('" + b.buch + "',1)"; }
 function stempel(b){ return '<span class="bi-st ' + (b.status === "bereit" ? "ok" : "pdf") + '">' + (b.status === "bereit" ? "Spielbereit" : "Nur PDF") + '</span>'; }
 function kopf(n, t){ return '<div class="bi-kopf"><span class="bi-n">' + n + '</span><h2>' + t + '</h2></div>'; }
 function hero(){
  var kk = ST.kal || {}, ein = kk.ein || {}, sg = "";
  for(var p = 1; p <= 6; p++){ var hat = false; for(var q = 1; q <= 6; q++) if(ein[p + ":" + q]) hat = true; sg += '<span class="' + (hat ? "x" : "") + '">' + p + '</span>'; }
  sg += '<span class="e' + (ein["7:7"] ? " x" : "") + '">7:7</span>';
  return '<section class="bi-hero"><img src="' + IMG("start/cover-skelett") + '" alt=""><h1>Mörk<br>Borg</h1><div class="bi-uhr">' + sg + '</div>' +
   '<div class="bi-los" onclick="go(\'spiel\')">Zum Spieltisch →<small>Tag ' + (kk.n || 1) + '</small></div></section>';
 }
 function schriften(){
  function li(l){ return l.map(function(x){ return '<li onclick="event.stopPropagation();go(\'' + x[1] + '\')">' + x[0] + '</li>'; }).join(""); }
  return '<div class="bi-duo"><div class="bi-pl core" onclick="go(\'nach/welt\')"><h3>Das Grund-<br>regelwerk</h3><ul>' +
   li([["Die sterbende Welt","nach/welt"],["Die Regeln & Mächte","nach/regeln"],["Die Verdammten","nach/verdammte"],["Kreaturen","kreaturen"],["Rotblack Sludge","abenteuer"]]) +
   '</ul><span class="bi-st ok">Spielbereit</span></div>' +
   '<div class="bi-pl apo" onclick="go(\'nach/verdammte/sternzeichen\')"><h3>Apokryphen</h3><ul>' +
   li([["Sternzeichen & Krankheiten","nach/verdammte/sternzeichen"],["Monströse Völker","kreaturen"],["Verliese, Etablissements, Auftragstafeln","tabellen/verliese"],["d86 Beschwörungen","tabellen/besch"]]) +
   '</ul><span class="bi-st ok">Spielbereit</span></div></div>';
 }
 function streifen(){
  return '<div class="bi-streif">' + MB_BIB.abenteuer.map(function(b){
   return '<div class="bi-ab" onclick="' + aktion(b) + '">' + (b.bild ? '<img src="' + IMG(b.bild) + '" alt="">' : '<div class="typo">' + esc(b.typo) + '</div>') + stempel(b) + '<div class="tx"><h4>' + esc(b.t) + '</h4>' + (b.sub ? '<div class="art">' + esc(b.sub) + '</div>' : "") + '</div></div>';
  }).join("") + '</div>';
 }
 function collage(){
  var rot = [-1.5, 1.2, -2, .8, -.6, 2, -1, 1.6, 1, -1.4, .5];
  return '<div class="bi-coll">' + MB_BIB.zusatz.map(function(b, i){
   return '<div class="bi-z ' + b.f + ' ' + (b.g || "") + '" style="transform:rotate(' + rot[i % rot.length] + 'deg)" onclick="' + aktion({status:"pdf", buch:b.buch}) + '"><h5>' + esc(b.t) + '</h5>' + (b.sub ? '<div class="art">' + esc(b.sub) + '</div>' : "") + '<span class="bi-st pdf">PDF</span></div>';
  }).join("") + '</div>';
 }
 function hacks(){
  return '<div class="bi-hacks">' + MB_BIB.hacks.map(function(b){ return '<div class="bi-hk ' + b.c + '" onclick="openBook(\'' + b.buch + '\',1)"><b>' + esc(b.t) + '</b><em>PDF</em></div>'; }).join("") + '</div>';
 }
 function fuss(){
  return '<section class="bi-fuss">' + MB_BIB.material.map(function(b){ return '<div class="bi-fz" onclick="openBook(\'' + b.buch + '\',1)"><h5>' + esc(b.t) + '</h5></div>'; }).join("") +
   '<div class="bi-reg"><h5>Nachschlagen</h5><a onclick="go(\'nach/welt\')"><i>I</i>Die sterbende Welt</a><a onclick="go(\'nach/regeln\')"><i>II</i>Die Regeln</a><a onclick="go(\'nach/verdammte\')"><i>III</i>Die Verdammten</a><a onclick="go(\'tabellen\')"><i>IV</i>Tabellen</a><a onclick="go(\'register\')"><i>V</i>Register</a></div></section>';
 }
 window.viewBib = function(){
  return '<div class="bi">' + hero() + '<section class="bi-band">' + kopf("I", "Die Schriften") + schriften() + '</section>' +
   '<section class="bi-band" id="bi-abenteuer">' + kopf("II", "Abenteuer") + streifen() + '</section>' +
   '<section class="bi-band" id="bi-zusatz">' + kopf("III", "Zusatz") + collage() + '</section>' +
   '<section class="bi-band bi-hb" id="bi-hacks">' + kopf("IV", "Hacks") + hacks() + '</section>' + fuss() + '</div>';
 };
})();
