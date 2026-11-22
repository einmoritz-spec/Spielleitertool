/* Überblick: DRAGONBANE (Free League) – nur Angaben aus dem Regelbuch */
GM_INFO.dragonbane = {
  tag: "Fantasy · Free League",
  setting: "Ein Fantasy-Rollenspiel voller Magie, Geheimnisse und Abenteuer, gemacht für schnelles, wildes Spiel mit wenig Vorbereitung. In den ältesten Zeiten herrschten **Drachen** und **Dämonen** über die Welt – Ordnung gegen Chaos. Ihre Überreste ruhen noch in der Erde. Der Spielstil des Buchs: **Frohsinn und Chaos** – Raum für Lacher am Tisch und trotzdem brutale Herausforderungen.",
  fakten: [
    ["Ihr spielt", "Abenteurer – Spielercharaktere, am besten **drei bis fünf**"],
    ["Spielleitung", "die **SL**"],
    ["Völker", "Mensch, Halbling, Zwerg, Elf, Ente, Wolfsmensch"],
    ["Berufe", "Handwerker, Händler, Barde, Gelehrter, Jäger, Krieger, Magier, Ritter, Seefahrer, Dieb"]
  ],
  wurf: { f: "W20", n: "gewürfelt wird **unter oder gleich** dem Fertigkeitswert", s: [
    ["1", "Drache – besonders gut", "good"],
    ["bis Wert", "Erfolg", "mid"],
    ["über Wert", "Fehlschlag", "bad"],
    ["20", "Dämon – immer ein Fehlschlag", "bad"]
  ]},
  kern: [
    ["Vorteil / Nachteil", "Zwei W20 werfen: bei Vorteil zählt der niedrigste, bei Nachteil der höchste."],
    ["Wurf strapazieren", "Nach einem Fehlwurf noch einmal werfen – dafür bekommt man einen Zustand."],
    ["Zustände", "Erschöpft, Kränkelnd, Benommen, Wütend, Verängstigt, Verzagt – je ein Nachteil auf ein Attribut."],
    ["Heroische Talente", "Außergewöhnliche Fähigkeiten, die gewöhnliche Leute nicht haben."]
  ]
};
