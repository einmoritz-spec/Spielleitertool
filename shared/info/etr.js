/* Überblick: Eat the Reich (Havoc Engine) */
GM_INFO.etr = {
  tag: "Pulp-Gemetzel · Havoc Engine",
  setting: "1943, das besetzte Paris. Ein Bomber wirft Drop-Särge über der Stadt ab, darin ein Kommando aus Vampiren. Die letzte Mission: Adolf Hitler in seinem Zeppelin auf der Spitze des Eiffelturms töten. Ein einziges Szenario, maßlos übertrieben, voller Action, Blut und okkultem Chaos.",
  fakten: [
    ["Ihr spielt", "fertige Vampir-Charaktere – sofort einsatzbereit"],
    ["Spielleitung", "die **SL**"],
    ["Gespielt wird", "drei Sektoren, von Sektor 3 bis zum Eiffelturm in Sektor 1"],
    ["Stimmung", "albern, eklig, ultragewalttätig – Horror für die Nazis"]
  ],
  wurf: { f: "W6-Pool", n: " Wert + Ausrüstung + Bonuswürfel", s: [
    ["1–3", "abwerfen", "bad"],
    ["4–5", "Erfolg: +1 Schaden, Verteidigung oder Blut", "mid"],
    ["6", "Kritisch: +2 oder SPEZIAL", "good"]
  ]},
  kern: [
    ["Würfel zuteilen", "Jeden Würfel einem Ziel, einer Bedrohung, der Verteidigung oder Blut trinken zuteilen."],
    ["Ziele", "Haben einen Wert; Erfolge senken ihn – bei 0 ist das Ziel erreicht."],
    ["Bedrohungen", "Die SL würfelt ihren Angriffswert; jede 4–6 ist Schaden."],
    ["Blut", "Treibstoff für Fähigkeiten – durch Nazi-Blut trinken wieder auffüllen."]
  ],
  ablauf: { t: "Mission", s: ["Briefing", "Sargsturz · Sektor 3", "Sektor 2", "Sektor 1 · Eiffelturm"] }
};
