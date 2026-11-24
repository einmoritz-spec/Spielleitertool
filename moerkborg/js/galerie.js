/* MÖRK BORG – Galerie: alle eingebauten Buchbilder, nach Bereich gruppiert; Klick vergrößert. */
"use strict";
(function(){
 var FEST = [
  ["Welt", [["welt/weltkarte","Weltkarte"],["welt/kergues-anthelia","Kergues-Anthelia"],["welt/palast-schattenkoenig","Palast des Schattenkönigs"],["welt/sarkash-wald","Sarkash-Wald"],["welt/westliches-koenigreich-geister","Westliches Königreich"],["start/cover-skelett","Titelbild"],["regeln/basilisken-fordern","Die Basilisken fordern"]]],
  ["Abenteuer: Rotblack Sludge", [["abenteuer/rotblack-karte","Karte"],["abenteuer/raum2-baertiger-mann","Raum 2"],["abenteuer/raum3-skelette","Raum 3"],["abenteuer/raum4-wachen","Raum 4"],["abenteuer/raum5-gefangene","Raum 5"],["abenteuer/raum6-gemaelde","Raum 6"],["abenteuer/raum7-pumpenraum","Raum 7"],["abenteuer/raum9-saeule-geiger","Raum 9"],["abenteuer/raum11-lesdy","Raum 11"],["abenteuer/raum12-statue-koenig-lenard","Raum 12"],["abenteuer/raum15-fletcher","Raum 15"]]],
  ["Verliese", [["orte/verlies-kanaele-karte","Stinkende Kanäle"],["orte/verlies-ketzer-karte","Höhle der Besessenen Ketzer"]]]
 ];
 function gruppen(){
  var kr = [], seen = {};
  (window.MB_KREATUR || []).forEach(function(k){ if(k.img && !seen[k.img]){ seen[k.img] = 1; kr.push([k.img, k.t]); } });
  return FEST.slice(0, 2).concat([["Kreaturen", kr]], FEST.slice(2));
 }
 VIEWS.galerie = function(){
  return '<div class="gal">' + gruppen().map(function(g){
   return '<section><h2>' + esc(g[0]) + '</h2><div class="gg">' + g[1].map(function(b){
    return '<figure onclick="zoom(IMG(\'' + b[0] + '\'))"><img loading="lazy" src="' + IMG(b[0]) + '" alt=""><figcaption>' + esc(b[1]) + '</figcaption></figure>';
   }).join("") + '</div></section>';
  }).join("") + '</div>';
 };
})();
