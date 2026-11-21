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
 "one-armed-scissor/ueberblick":{k:"Szenario", t:"One Armed Scissor", s:"Das Hanging Manor, Three Masks und Port Fyzeo", img:"szen/oas/titel-hanging-manor.webp"},
 "red-right-hand/ueberblick":{k:"Szenario", t:"Red Right Hand", s:"Nuskaro, der Hetterjin Tower und die Clockface Council", img:"szen/rrh/hetterjin-turm-titel.webp"},
 "tisch/gebraeuchliche-namen":{k:"Kapitel 12", t:"Am Tisch", s:"Namen, alternative Wendungen, Eintagsfliegen-Regeln, Glossar", img:"tisch/kapitel-tisch.webp"}
};
function nHero(key, dims){
  var H = window.WS_HERO && WS_HERO[key]; if(!H) return "";
  var w = H.w || (dims && dims[1]) || 1400, h = H.h || (dims && dims[2]) || 1190;
  return '<div class="nhero"><div class="bg" style="background-image:url(img/' + H.img + ')"></div><div class="pic" style="--r:' + (w / h).toFixed(3) + '"><img src="img/' + H.img + '" alt="" onclick="nZoom(this.src)"></div><div class="tx"><span class="k">' + esc(H.k) + '</span><h1>' + esc(H.t) + '</h1><p>' + esc(H.s) + '</p></div></div>';
}
