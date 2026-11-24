/* The Spire – Gegner der Domäne Handel (Core, Buch-ID sp_cmf, Seitenversatz +5). Format wie gegner-qs.js / gegner-religion.js. */
window.SP_GEGNER = window.SP_GEGNER || [];
SP_GEGNER.push(
 {id:"ritter", t:"Ritter", en:"Knights", buch:"cmf", p:89, ort:"Die Norddocks", ziel:"stadt/handel/norddocks",
  namen:["Lookshy", "Quince", "Junkett"],
  beschr:["Schwankt vom Rum auf den Füßen", "Mehr Lücken als Zähne, wenn sie grinsen", "Sammelt Trophäen von Soldaten, die sie verprügelt haben, und stellt sie stolz zur Schau"],
  schw:{k:"0 (1)", x:"0 auf der Straße, 1, wenn man sie nach ein paar Drinks in ihrer Kneipe angeht"}, wid:{werte:[5]},
  ausr:[{x:"Ritter-Viertelharnisch", tags:["Rüstung 3"]}, ", eine Sammlung von ", {x:"Schwertern, Lanzen, Morgensternen usw.", dmg:"W6", tags:["Brutal"]}, ", gelegentlich eine billige ", {x:"Dunnock-Pistole", dmg:"W6", tags:["Fernkampf", "Einweg"]}, " oder abgesägte ", {x:"Sparrowhawk-Schrotflinte", dmg:"W6", tags:["Fernkampf", "Einweg"]}]},
 {id:"haufen-bewohner", t:"Bewohner des Haufens", en:"Heap Denizens", buch:"cmf", p:92, ort:"Die Norddocks", ziel:"stadt/handel/norddocks",
  namen:["Wazim", "Ruchol", "Fingers"],
  beschr:["Ein Goblin mit sichtbaren Trepanationsnarben", "Ein verwundeter Soldat mit angelaufenen Medaillen", "Ein schorfiger Halbgnoll in Lumpen"],
  schw:{k:"0", x:"0"}, wid:{werte:[3]},
  ausr:[{x:"Rostige, schmutzige Messer", dmg:"W3", tags:["Anhaltend W3"]}]},
 {id:"soeldner", t:"Söldner", en:"Mercenaries", buch:"cmf", p:99, ort:"Der Blaue Hafen", ziel:"stadt/handel/hafen",
  namen:["Steryn", "Bastillo", "Xenomos"],
  beschr:["Ein narbenübersätes Gesicht mit borstigem dunklem Haar", "Frisch verbundene Wunden", "Behängt mit protzigem Schmuck"],
  schw:{k:"0 (1)", x:"0 auf Patrouille, 1, wenn sie aufgebracht sind und auf Blut aus"}, wid:{werte:[6]},
  ausr:[{x:"Halbwegs anständiges Kettenhemd und Leder", tags:["Rüstung 3"]}, ", ", {x:"Jackdaw-Pistolen", dmg:"W6", tags:["Durchschlagend", "Fernkampf", "Nachladen"]}, " und gut gepflegte ", {x:"Schwerter", dmg:"W6"}]}
);
