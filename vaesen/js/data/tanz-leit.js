/* Tanz der Träume – Leitstand: Struktur-Daten (Plan, Tabs, Figuren-Zuordnung). Buchtexte kommen aus kapitel-tanz.js. */
window.TANZ = {
 tabs: [["Hintergrund","hg"],["Anreise","an"],["Hexenkatze","hx"],["Konfrontation","kf"],["|"],["Figuren","fg"],["Hinweise","hw"],["Handouts","ho"],["Nachspiel","ns","end"]],
 /* Beschriftungen auf dem Plan: [Text, links %, oben %, Klasse] */
 planLabels: [
  ["<small>Gasthof</small>Zur Hexenkatze", 78, 10.5, "big"],
  ["Schattentheater", 19.5, 20.6], ["Luke", 46, 18.2], ["Luke", 46, 43.9],
  ["Dachboden", 62, 25.6, "fl"], ["Noras Zimmer", 19.3, 33.1], ["Sophias<br>Zimmer", 47.6, 33.1, "c"], ["Samis<br>Zimmer", 16, 47.6, "c"],
  ["Obergeschoss", 64.5, 51.4, "fl"], ["Wurzelkeller", 36.5, 63.6], ["Wintergarten", 79, 59.6], ["Personal", 42, 77.3],
  ["Lager", 39.4, 85.4], ["Lager", 19.3, 85.8], ["Speisesaal", 61.5, 85.4], ["Küche", 39.4, 91.6], ["Stall", 21.3, 92.4],
  ["Erdgeschoss", 85.5, 95.9, "fl"]
 ],
 /* Klickflächen: [Ort, links, oben, Breite, Höhe %, rund?] */
 planHot: [
  ["dachboden", 11, 3.7, 41.9, 22.9], ["nora", 12.2, 30.4, 14.4, 5.4], ["wurzelkeller", 15.2, 54.7, 13.3, 9.6, 1], ["speisesaal", 49.5, 74.8, 25, 22]
 ],
 orte: [["gasthof","Gasthof"],["speisesaal","Speisesaal"],["dachboden","Dachboden"],["nora","Noras Zimmer"]],
 /* Wer ist wo (Figuren-Kürzel) */
 hier: {gasthof:["olaus"], speisesaal:["sami","sophia","ingelie","sven","jonathan","lisa","klarhed"], dachboden:["sophia"], nora:[], wurzelkeller:["oscar","schlaf"]},
 figs: {
  sami:{n:"Samuel „Sami“ Harjula", k:"Sami Harjula", img:"tanz_sami_harjula", i:0},
  sophia:{n:"Sophia Harjula", k:"Sophia Harjula", img:"tanz_sophia_harjula", i:1},
  olaus:{n:"Olaus Klint", k:"Olaus Klint", img:"", i:2, ini:"OK"},
  oscar:{n:"Oscar Hjort", k:"Oscar Hjort", img:"tanz_oscar_hjort", i:3},
  schlaf:{n:"Schlafwandler", k:"Schlafwandler", img:"", i:4, ini:"SW"},
  ingelie:{n:"Ingelie Holm", k:"Ingelie Holm", mini:1, ini:"IH"},
  sven:{n:"Sven Kruse", k:"Sven Kruse", mini:1, ini:"SK"},
  jonathan:{n:"Jonathan Gnejs", k:"Jonathan Gnejs", mini:1, ini:"JG"},
  lisa:{n:"Lisa Finkel", k:"Lisa Finkel", mini:1, ini:"LF"},
  klarhed:{n:"Pater Niels Klarhed", k:"Pater Klarhed", mini:1, ini:"NK"}
 },
 /* Oscars Kräfte laut Abenteuertext (Vaesen-Werte stehen im Kapitel Vaesen) */
 oscar: {verz:["Verzauberter Schlaf","Bannen","Sturm"], fluch:["Bannen","Todeskälte"]},
 /* Beziehungsgrafik (Hintergrund) */
 net: '<svg class="net" viewBox="0 0 1060 400"><text class="band" x="0" y="14">VOR FÜNFZIG JAHREN</text><line x1="0" y1="124" x2="1060" y2="124" stroke="#b5a68f" stroke-dasharray="2 5"/><text class="band" x="0" y="142">HEUTE</text>' +
  '<path class="e" d="M260 57 L700 57"/><text class="el" x="480" y="48" text-anchor="middle">Auftrag: Spuren tilgen</text>' +
  '<path class="e r" d="M200 88 C215 150 380 170 430 190"/><text class="el r" x="262" y="150">ermordete ihn</text>' +
  '<path class="e" d="M120 88 C110 180 250 210 290 290"/><text class="el" x="60" y="206">Großvater von</text>' +
  '<path class="e r" d="M820 88 C780 130 700 165 640 188"/><text class="el r" x="745" y="130">Rache</text>' +
  '<path class="e r" d="M480 228 C440 250 380 270 340 290"/><text class="el r" x="440" y="270" text-anchor="end">hält ihn für Pyri</text>' +
  '<path class="e r" d="M535 228 L500 290"/><text class="el r" x="540" y="262">Träume, Theater</text>' +
  '<path class="e r" d="M600 228 C660 250 700 268 724 290"/><text class="el r" x="640" y="246">hält sie für die Drei</text>' +
  '<path class="e" d="M190 321 L210 321"/><path class="e" d="M380 321 L400 321"/><path class="e" d="M850 321 L810 321"/>' +
  '<g class="nd old"><rect x="60" y="26" width="200" height="62" rx="3"/><text class="nm" x="76" y="50">Pyri Harjula</text><text class="rl" x="76" y="72">damaliger Wirt · Mörder</text></g>' +
  '<g class="nd old"><rect x="700" y="26" width="300" height="62" rx="3"/><text class="nm" x="716" y="50">Albert · Katja · Hilma</text><text class="rl" x="716" y="72">Donnerstagskinder der Gesellschaft</text></g>' +
  '<g class="nd os" onclick="tzFig(\'oscar\')"><rect x="430" y="164" width="210" height="64" rx="3"/><clipPath id="c1"><circle cx="465" cy="196" r="25"/></clipPath><image href="img/full/tanz_oscar_hjort.webp" x="436" y="166" width="58" height="66" clip-path="url(#c1)" style="mix-blend-mode:multiply"/><text class="nm" x="500" y="190" style="fill:#8a1f17">Oscar Hjort</text><text class="rl" x="500" y="212">Wiedergänger</text></g>' +
  '<g class="nd"><rect x="20" y="290" width="170" height="62" rx="3"/><text class="nm" x="34" y="314">Nora Harjula</text><text class="rl" x="34" y="336">Samis Frau · floh, †</text></g>' +
  '<g class="nd" onclick="tzFig(\'sami\')"><rect x="210" y="290" width="170" height="62" rx="3"/><clipPath id="c2"><circle cx="238" cy="321" r="23"/></clipPath><image href="img/full/tanz_sami_harjula.webp" x="212" y="294" width="52" height="56" clip-path="url(#c2)" style="mix-blend-mode:multiply"/><text class="nm" x="270" y="316">Sami</text><text class="rl" x="270" y="337">Wirt heute</text></g>' +
  '<g class="nd" onclick="tzFig(\'sophia\')"><rect x="400" y="290" width="170" height="62" rx="3"/><clipPath id="c3"><circle cx="428" cy="321" r="23"/></clipPath><image href="img/full/tanz_sophia_harjula.webp" x="402" y="294" width="52" height="56" clip-path="url(#c3)" style="mix-blend-mode:multiply"/><text class="nm" x="460" y="316">Sophia</text><text class="rl" x="460" y="337">Tochter, 16</text></g>' +
  '<g class="nd pc"><rect x="640" y="290" width="170" height="62" rx="3"/><text class="nm" x="656" y="316">Die SC</text><text class="rl" x="656" y="337" style="fill:#d9cdb4">Die Gesellschaft</text></g>' +
  '<g class="nd" onclick="tzFig(\'olaus\')"><rect x="850" y="290" width="190" height="62" rx="3"/><text class="nm" x="866" y="314">Olaus Klint</text><text class="rl" x="866" y="336">Rosenberger · lädt ein</text></g></svg>'
};
