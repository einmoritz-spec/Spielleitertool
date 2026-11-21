/* Überblick: City of Mist – Local Legends */
GM_INFO.locallegends = {
  tag: "City of Mist · Fall-Akte",
  setting: "Geschichten der ganz normalen Leute: Fern der Mächtigen der Stadt, auf den Straßen der Bezirke, regen sich Mythoi aus ihrem Schlummer. Neun Bezirke mit eigener Stimmung, Orten, Locals und je einem fertigen Fall – von Chinatown und Fortune Row bis The Sunken City und The Undertrash.",
  fakten: [
    ["Ihr spielt", "die Risse eurer Crew, Regeln aus City of Mist"],
    ["Aufbau", "9 Bezirke, je 1 Fall – einzeln oder kombiniert spielbar"],
    ["Ein Fall", "Aufhänger, Eisberg, Depths, Locals und Gefahren"],
    ["Stimmung", "Viertel, Nachbarschaft, kleine Legenden mit großen Folgen"]
  ],
  wurf: { f: "2W6 + Kraft", s: [
    ["6−", "Misserfolg – harte Aktion der SL", "bad"],
    ["7–9", "Schwacher Erfolg, mit Preis", "mid"],
    ["10+", "Starker Erfolg", "good"]
  ]},
  kern: [
    ["Eisberg", "Oben das Sichtbare, darunter die Wahrheit – die Übersicht jedes Falls."],
    ["Depths", "Depth 0 sind die Aufhänger; jede tiefere Ebene bringt Orte, Hinweise und Gefahren."],
    ["Spektren", "Gefahren werden über Spektren besiegt: ist eines maximiert, tritt die Folge ein."],
    ["Locals", "Bewohner:innen und Avatare der Bezirke – Kontakte, Opfer und Gegenspieler."]
  ],
  ablauf: { t: "Ein Fall", s: ["Depth 0 · Aufhänger", "Depth 1", "Depth 2", "Depth 3 · Wahrheit"] }
};
