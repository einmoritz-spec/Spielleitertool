/* Überblick: MÖRK BORG */
GM_INFO.moerkborg = {
  tag: "Apokalypse, Fraktur, Verdammnis",
  setting: "Die Welt endet. Ihr seid Verdammte in **Galgenbeck** und im Westlichen Königreich, die für ein paar Silberlinge Kreaturen erschlagen, Schriftrollen lesen und die **Heimsuchungen des Nechrubel** überleben, bis die Welt untergeht.",
  fakten: [
    ["Ihr spielt", "Verdammte aus sechs Klassen, mit **Omen**, **Mächten** und schrecklichen Eigenschaften"],
    ["Spielleitung", "der **Spielleiter** (SL)"],
    ["Gewürfelt wird", "mit **W20** ± Fähigkeit gegen einen **SG**; Kreaturen würfeln nicht"],
    ["Abenteuer", "**Rotblack Sludge** (Corebook), weitere später"]
  ],
  wurf: { f: "W20 + Fähigkeit gegen SG (Schwierigkeitsgrad)", n: "Kreaturen würfeln nur einen unveränderten W20", s: [
    ["Krit (20)", "Angriff: doppelter Schaden · Verteidigung: freier Angriff", "good"],
    ["≥ SG", "Erfolg", "mid"],
    ["Patzer (1)", "Waffe bricht · Verteidigung: doppelter Schaden", "bad"]
  ]},
  kern: [
    ["Gewalt", "Initiative W6 (1–3 Feinde zuerst, 4–6 die Gruppe). Nahkampf: Stärke SG 12, Fernkampf: Präsenz SG 12, Verteidigung: Gewandtheit SG 12."],
    ["Gebrochen", "Bei 0 TP: W4 auf der Tabelle Gebrochen – von Bewusstlosigkeit bis zum Tod."],
    ["Moral", "Bei Tod des Anführers, halber Gruppe oder letztem Drittel TP: 2W6 über dem Moralwert – W6 1–3 Flucht, 4–6 Aufgabe."],
    ["Rast", "Verschnaufen: W4 TP · eine Nacht Schlaf: W6 TP."]
  ]
};
