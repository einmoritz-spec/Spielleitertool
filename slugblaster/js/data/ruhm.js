/* SLUGBLASTER – Ruhm-Stufen (Regelbuch S. 76–77). kosten = Style, um die Stufe freizuschalten */
var SB_RUHM = [
 {id:0, t:"Niemande", kosten:0, x:"Ihr slugblastet seit einer Weile gelegentlich. Ihr könnt hoverboarden, ihr kommt in ein paar Welten, aber niemand weiß, wer ihr seid."},
 {id:1, t:"Aufsteiger", kosten:5, x:"Ihr habt die Aufmerksamkeit der Leute, und jetzt entscheiden sie, ob es sie interessiert.", v:["+1 auf Gelegenheiten.","+1 auf Herausforderungen.","Rebranden, falls nötig."]},
 {id:2, t:"Etablierte", kosten:7, x:"Die Szene kennt euch jetzt. Ihr habt euch euer Recht, hier zu sein, verdient.", v:["+1 und −1 bei zwei *neutralen* Fraktionen.","1 kostenloses Zwei-Wege-Portal."]},
 {id:3, t:"Aufsteigende Stars", kosten:9, x:"Um euch herrschen Buzz und Aufregung. Alle beobachten euch genau.", v:["+1 auf Gelegenheiten.","+1 auf Herausforderungen.","+1 Hype."]},
 {id:4, t:"Große Nummern", kosten:9, x:"Man erwähnt euch regelmäßig, und jeder hat eine Meinung zu euch.", v:["Vier Fraktionen rücken weiter von *neutral* weg.","Gewinnt eine dritte Marke."]},
 {id:5, t:"Legenden", kosten:11, x:"Ihr habt es geschafft. Ihr seid Slugblasting-Ikonen, und die Szene wird euch nie vergessen."}
];
