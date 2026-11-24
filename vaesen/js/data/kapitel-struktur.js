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
  (function(){
    var G = VAE_KAP["gesellschaft"].b, g = function(id, t, p, parts){ return S(G, id, t, p, parts); };
    VAE_KAP["gesellschaft"] = {titel:"Die Gesellschaft und das Hauptquartier", p:79, groups:[
      {h:"Die Gesellschaft", secs:[g("geschichte","Geschichte der Gesellschaft",80,[[0,18]]), g("wer","Wer sind wir?",83,[[18,25]]), g("struktur","Struktur und Titel",84,[[25,32]])]},
      {h:"Das Hauptquartier", secs:[g("schloss","Schloss Gyllencreutz",85,[[32,41]]), g("hq","Dein Hauptquartier",86,[[41,44]]), g("bedrohungen","Bedrohungen",87,[[44,53]]), g("verbesserungen","Ausrüstung und Verbesserungen",88,[[53,59]]), g("einrichtungen","Einrichtungen",89,[[59,79]]), g("entdeckt","Entdeckte Einrichtungen",91,[[79,92]])]},
      {h:"Verbesserungen", secs:[g("texte","Berühmte Texte",93,[[92,102]]), g("kontakte","Kontakte",93,[[102,111]]), g("personal","Personal",94,[[111,null]])]}
    ]};
    var N = VAE_KAP["norden"].b, n = function(id, t, p, parts){ return S(N, id, t, p, parts); };
    VAE_KAP["norden"] = {titel:"Mythischer Norden und Upsala", p:97, groups:[{secs:[n("norden","Dein Mythischer Norden",97,[[0,8]]), n("stadt","Das Leben in der Stadt",100,[[8,11]]), n("staedte","Wichtige Städte",101,[[11,17]]), n("land","Land und Technik",102,[[17,24]]), n("reisen","Reisen und Namen",104,[[24,29]]), n("upsala","Upsala – Wissenschaft und Märchen",105,[[29,null]])]}]};
    var T = VAE_KAP["talente"].b, t = function(id, tt, p, parts){ return S(T, id, tt, p, parts); };
    VAE_KAP["talente"] = {titel:"Talente", p:49, groups:[
      {h:"Archetypen", secs:[t("einleitung","Einleitung",49,[[0,1]]), t("akademiker","Akademiker",50,[[1,5]]), t("arzt","Arzt",50,[[5,9]]), t("jaeger","Jäger",50,[[9,13]]), t("okkultist","Okkultist",51,[[13,17]]), t("offizier","Offizier",52,[[17,21]]), t("priester","Priester",52,[[21,25]]), t("detektiv","Privatdetektiv",53,[[25,29]]), t("dienstbote","Dienstbote",53,[[29,33]]), t("vagabund","Vagabund",53,[[33,37]]), t("schriftsteller","Schriftsteller",53,[[37,41]])]},
      {h:"Allgemein", secs:[t("allgemein","Allgemeine Talente",54,[[41,null]])]}
    ]};
  })();
})();
