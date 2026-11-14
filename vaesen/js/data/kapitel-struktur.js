/* Gliederung von Konflikt und Mysterium nach Spielsituation (Blockbereiche der vorhandenen Texte). */
(function(){
  function S(src, id, t, p, parts){ var b = []; parts.forEach(function(r){ if(typeof r === "number") b.push(src[r]); else for(var i = r[0]; i < (r[1] == null ? src.length : r[1]); i++) b.push(src[i]); }); if(b[0] && b[0].t === "h" && t.toLowerCase().indexOf(b[0].x.toLowerCase().replace(/^(der|die|das) /, "")) >= 0) b.shift(); return {id:id, t:t, p:p, b:b}; }
  var K = VAE_KONFLIKT_1.concat(VAE_KONFLIKT_2);
  var k = function(id, t, p, parts){ return S(K, id, t, p, parts); };
  VAE_KAP["konflikt"] = {titel:"Konflikt und Verletzungen", p:57, groups:[
    {h:"Kampf", secs:[k("initiative","Initiative und Runden",58,[[0,2],[3,9]]), k("zonen","Zonen und Umstände",58,[[9,15]]), k("aktionen","Aktionen im Kampf",59,[[15,25]]), k("angriffe","Angriffe und Bewegung",60,[[25,39]])]},
    {h:"Verletzungen", secs:[k("verletzungen","Verletzungen und Gebrochen",63,[[39,47]]), k("kritisch","Kritische Verletzungen",64,[[47,55]]), k("makel","Makel und Einsicht",67,[[55,65]]), k("furcht","Furcht",68,[[65,72]])]},
    {h:"Gefahren und Heilung", secs:[k("gefahren","Explosionen, Feuer, Gift, Sturz",69,[[72,84]]), k("heilung","Heilung",71,[[84,91]])]},
    {h:"Ausrüstung", secs:[k("aktivitaeten","Aktivitäten",72,[[91,97]]), k("ausruestung","Ausrüstung und Ressourcen",73,[[97,104]]), k("ruestung","Rüstung und Deckung",73,[[104,109]]), k("liste","Ausrüstungsliste",74,[[109,115]]), k("waffen","Waffen",77,[[115,null]])]}
  ]};
  var M = VAE_KAP["mysterium"].b, m = function(id, t, p, parts){ return S(M, id, t, p, parts); };
  VAE_KAP["mysterium"] = {titel:"Das Mysterium", p:171, tabs:[
    {id:"entwerfen", t:"Entwerfen", secs:[m("ueberblick","Überblick",171,[0,2]), m("vaesen","Das Vaesen",172,[[3,13]]), m("konflikte","Konflikte",173,[[13,24]]), m("untat","Die Untat",175,[[24,29]]), m("schauplatz","Schauplatz und Atmosphäre",175,[[29,35]]), m("hinweise","Hinweise und Requisiten",176,[[35,42]]), m("countdown","Countdown zur Katastrophe",178,[[42,45]])]},
    {id:"ablauf", t:"Ablauf", secs:[m("schritte","Schritt für Schritt",179,[[45,51]]), m("einladung","Prolog und Einladung",179,[[51,57]]), m("reise","Vorbereitungen und Reise",181,[[57,71]]), m("rat","Ratschläge für die Spielleitung",184,[[71,80]]), m("orte","Orte",185,[[80,93]]), m("konfrontation","Konfrontation und Nachspiel",187,[[93,99]])]},
    {id:"tabellen", t:"Tabellen", secs:[m("auftraggeber","Was ist geschehen?",188,[100,[102,106]]), m("grund","Was ist der Grund?",189,[[107,112]]), m("begegnungen","Wen treffen wir?",190,[[113,115]]), m("namen","Namen in Schweden",191,[[116,118]]), m("orte2","Wohin gehen wir?",192,[[120,122]])]},
    {id:"kampagne", t:"Kampagne", secs:[m("kampagne","Kampagne",192,[[122,124]]), m("techniken","Techniken der Spielleitung",193,[[125,141]]), m("traeume","Träume und Übernatürliches",194,[[142,144]]), m("faehrten","Falsche Fährten",195,[[145,null]])]}
  ]};
})();
