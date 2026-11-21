/* Kapitel-Eröffnungen als Hero-Banner: [bereich/abschnitt] → {k:Kicker, t:Titel, s:Untertitel, img:Dateiname relativ zu img/} */
window.WS_HERO = {
 "wildsee/kernkonzepte":{k:"Kapitel 1", t:"Die Wildsea", s:"Rauschende Wellen, Schichten der See, Zivilisation, Technik, Spiritualität, Arconautik", img:"wildsee/eroeffnung-wrack-jolors-hand.webp"},
 "regeln/engine":{k:"Kapitel 2", t:"Mechanik", s:"Die Wild-Words-Engine: Leisten, Aktionen, Würfe", img:"regeln/eroeffnung-kap2-mechanik.webp", w:1400, h:1190},
 "regeln/zeit-zu-handeln":{k:"Kapitel 3", t:"Szenen", s:"Erkundung, Ressourcen, Interaktion und Kampf", img:"regeln/eroeffnung-kap3-seilbruecke.webp"},
 "regeln/ruhe-vorbereitung":{k:"Kapitel 4", t:"Montagen", s:"Ruhe, Erwerb, Herstellung und Projekte", img:"regeln/eroeffnung-kap4-ruinentempel.webp"},
 "regeln/wellen-durchqueren":{k:"Kapitel 5", t:"Reisen", s:"Die Wellen durchqueren, Fortschritt, Entdeckungen, Ankunft", img:"regeln/eroeffnung-kap5-leviathan.webp"},
 "charaktere/hintergrund":{k:"Kapitel 6", t:"Charakter-Elemente", s:"Stärken, Fertigkeiten, Aspekte, Ressourcen, Morast", img:"charaktere/kap6-eroeffnung.webp"},
 "charaktere/erstellung":{k:"Kapitel 7", t:"Erstellung", s:"Blutlinien, Herkünfte und Posten", img:"charaktere/kap7-eroeffnung.webp"},
 "schiffe/einstieg":{k:"Kapitel 8", t:"Schiffe & Schiffsbau", s:"Alles beginnt irgendwo", img:"schiff/kapitel-schiffe.webp"},
 "leitfaden/kapitel":{k:"Kapitel 9", t:"Leitfaden", s:"Sitzung Null, Ton, Tempo, Werkzeugkasten, die Schichten der See", img:"leitfaden/kapitel-leitfaden.webp"},
 "gefahren":{k:"Kapitel 10", t:"Gefahren", s:"Naturgewalten, Bestien, Insekten, Pflanzen, Konstrukte, Plünderer, Krankheiten, Leviathane", img:"gefahr/eroeffnung-kap10-kraehen.webp", w:1400, h:1190},
 "wildsee/sr-blau-kernkonzepte":{k:"Storm and Root · Kapitel 1", t:"Das Wilde Blau", s:"Die Welt über dem Kronendach: Aeronauten, Hochhäfen, Reisen im Himmel", img:"wildsee/sr-blau-eroeffnung-aeronaut-ueberm-kronendach.webp"},
 "wildsee/sr-tiefe-kernkonzepte":{k:"Storm and Root · Kapitel 2", t:"Die erdrückenden Tiefen", s:"Das Leben unter dem Gestrüpp: Tiefhäfen, Tauchboote, Druck", img:"sr/tiefe-kapitelbild-lowport-bernsteinkuppel.webp"},
 "charaktere/sr-optionen":{k:"Storm and Root · Kapitel 3", t:"Charakteroptionen", s:"Itzenko, neue Herkünfte und zwölf neue Posten", img:"sr/kap3-charakteroptionen-werkstatt.webp", w:1255, h:1067},
 "schiffe/sr-schiffsbau":{k:"Storm and Root · Kapitel 4", t:"Erweiterter Schiffsbau", s:"Luftschiffe und Tauchboote", img:"schiff/sr-kapitel-erweiterter-schiffsbau.webp", w:1253, h:1067},
 "leitfaden/sr-rat-kapitel":{k:"Storm and Root · Kapitel 7", t:"Ratschläge & Ressourcen", s:"Schicksalswürfe, Verzögertes An-sich-Reißen, Crezzerblüte", img:"leitfaden/sr-rat-kapitel7-eroeffnung-ruine-mit-maschinen.webp"},
 "tisch/sr-glossar-a-p":{k:"Storm and Root · Kapitel 8", t:"Extras", s:"Glossar", img:"tisch/sr-glossar-kapitel8-eroeffnung-doppelseite.webp"},
 "schiffe/sg-ernte-an-deck":{k:"Schiffsgärten", t:"Schiffsgärten", s:"Beete, Nährböden, Pflanzen und Kreuzung", img:"garten/titel-schiffsgaerten.webp"},
 "one-armed-scissor/ueberblick":{k:"Szenario", t:"One Armed Scissor", s:"Das Hanging Manor, Three Masks und Port Fyzeo", img:"szen/oas/titel-hanging-manor.webp"},
 "red-right-hand/ueberblick":{k:"Szenario", t:"Red Right Hand", s:"Nuskaro, der Hetterjin Tower und die Clockface Council", img:"szen/rrh/hetterjin-turm-titel.webp"},
 "tisch/gebraeuchliche-namen":{k:"Kapitel 12", t:"Am Tisch", s:"Namen, alternative Wendungen, Eintagsfliegen-Regeln, Glossar", img:"tisch/kapitel-tisch.webp"}
};
function nHero(key, dims){
  var H = window.WS_HERO && WS_HERO[key]; if(!H) return "";
  var w = H.w || (dims && dims[1]) || 1400, h = H.h || (dims && dims[2]) || 1190;
  return '<div class="nhero"><div class="bg" style="background-image:url(img/' + H.img + ')"></div><div class="pic" style="--r:' + (w / h).toFixed(3) + '"><img src="img/' + H.img + '" alt="" onclick="nZoom(this.src)"></div><div class="tx"><span class="k">' + esc(H.k) + '</span><h1>' + esc(H.t) + '</h1><p>' + esc(H.s) + '</p></div></div>';
}
