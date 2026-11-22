/* Weltkarte (S. 8, Bild welt/weltkarte): Ortsleiste und Klickflächen. Beschriftungen im Bild bleiben englisch. */
var MB_WELT_ORTE = [
 {g:"", t:"Was geschrieben steht", id:"anfang", seite:"anfang", p:3},
 {g:"", t:"Karte", id:"karte", aktion:"karte", p:8},
 {g:"Tveland", t:"Galgenbeck", id:"galgenbeck", seite:"galgenbeck"},
 {g:"", t:"Sarkash", id:"sarkash", seite:"galgenbeck"},
 {g:"", t:"Palast des Schattenkönigs", id:"palast", seite:"palast"},
 {g:"–", t:"Grift", id:"grift", seite:"grift"},
 {g:"", t:"Kergüs", id:"kerguess", seite:"grift"},
 {g:"Westliches Königreich", t:"Onda-See", id:"onda", seite:"westen", sel:"westen"},
 {g:"", t:"Schleswig", id:"schleswig", seite:"westen", sel:"westen"},
 {g:"", t:"Tal der Unglücklichen Untoten", id:"tal", seite:"westen"},
 {g:"–", t:"Kalender des Nechrubel", id:"kalender", aktion:"kalender", p:16}
];
/* [Ort-Id, links %, oben %] – Mitte der Klickfläche */
var MB_WELT_HS = [
 ["galgenbeck", 54.5, 47.8], ["galgenbeck", 65, 43], ["sarkash", 62, 28.5], ["sarkash", 57, 38], ["grift", 84, 41.6],
 ["kerguess", 40, 22], ["kerguess", 32, 39], ["tal", 34, 52.3], ["schleswig", 46, 62]
];
