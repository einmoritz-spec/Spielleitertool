/* Überblick: CAIRN (Zweite Edition) */
GM_INFO.cairn = {
  tag: "Wald-Rollenspiel · Old-School",
  setting: "Ein dunkler, geheimnisvoller **Wald** voller seltsamer Wesen, verborgener Schätze und unaussprechlicher Ungeheuer. Das Reich **Vald** endet an seinen Rändern, unter ihm liegen die **Wurzeln** mit ihren Toren. Charaktere entstehen schnell und zufällig, Abenteuer belohnen sorgfältiges Erkunden, Kämpfe sind hektisch und tödlich.",
  fakten: [
    ["Ihr spielt", "Abenteurer:innen ohne Klasse – Ausrüstung und Erlebtes machen sie aus"],
    ["Spielleitung", "die **Spielleitung** als neutrale Schiedsrichterin"],
    ["Werte", "**STÄ, GES, WIL** (3W6) und **Trefferschutz** (W6)"],
    ["Inventar", "10 Plätze – ein volles Inventar setzt den Trefferschutz auf 0"]
  ],
  wurf: { f: "Rettungswurf mit W20", n: "gleich oder unter der Eigenschaft", s: [
    ["1", "immer Erfolg", "good"],
    ["≤ Wert", "Erfolg", "good"],
    ["> Wert", "Misserfolg", "bad"],
    ["20", "immer Misserfolg", "bad"]
  ]},
  kern: [
    ["Kampf", "Angriffe treffen automatisch: Waffenwürfel minus Rüstung; Überschuss geht von der STÄ ab."],
    ["Narben", "Bringt ein Treffer den TS genau auf 0, würfelst du auf der Tabelle der Narben."],
    ["Erschöpfung", "Zauber, Mangel und Strapazen belegen Inventarplätze, bis man rastet."],
    ["Erkundung", "Dungeon in Zügen, Wildnis in Wachen – Ereignistabellen halten die Spannung."]
  ]
};
