/* Überblick: City of Mist (Grundregelwerk, Shadows & Showdowns) */
GM_INFO.cityofmist = {
  tag: "Modern Noir · Mist Engine",
  setting: "Eine namenlose, moderne Großstadt im Noir-Stil, in der alte Legenden in gewöhnlichen Menschen erwachen. Der **Nebel** verschleiert alles Übernatürliche: Schläfer:innen sehen nur Alltägliches, selbst wenn neben ihnen Götter kämpfen. Wer seinen Mythos erweckt, wird zum **Riss** – zerrissen zwischen Legende und eigenem Leben.",
  fakten: [
    ["Ihr spielt", "Risse – Menschen mit erwachtem Mythos, gemeinsam als Team"],
    ["Spielleitung", "die **SL** (im Original MC)"],
    ["Gespielt wird", "Fälle: ermitteln, Hinweise sammeln, konfrontieren"],
    ["Stimmung", "Film noir, Superheld:innen und urbane Mythen"]
  ],
  wurf: { f: "2W6 + Kraft", s: [
    ["6−", "Misserfolg – die SL macht eine harte Aktion", "bad"],
    ["7–9", "Schwacher Erfolg, mit Preis", "mid"],
    ["10+", "Starker Erfolg", "good"]
  ]},
  kern: [
    ["Themen", "4 Themen je Riss: **Mythos** (die Legende) und **Logos** (das Leben), mit Mysterium bzw. Identität."],
    ["Kraft", "Jede passende Stärke +1, jede genutzte Schwäche −1 (und 1 Aufmerksamkeit); Zustände zählen mit."],
    ["Zustände", "Schaden, Angst oder Vorteile mit Stufe, z. B. *verletzt-2* – die Stufe zählt beim Wurf."],
    ["Entwicklung", "Aufmerksamkeit bringt neue Stärken; drei Verblassen bzw. Bruch – das Thema geht verloren."]
  ]
};
