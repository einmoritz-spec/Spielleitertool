/* Überblick: Household (Grundbuch Vol. I, Kapitel „How to Play“, Kapitel VIII „Saga“) */
GM_INFO.household = {
  tag: "Tierische Abenteuer",
  stil: { bg: "#f4eee2", fg: "#2d2530", acc: "#6e4b8c", ff: "Georgia,serif" },
  setting: "In **Household** spielt ihr **Littlings**, winzige Wesen, die im Inneren eines großen Hauses leben: Faeries, Sprites, Sluagh und andere Völker, verteilt auf die Nationen **Realm, Hearth, Free Dominions** und **Horde**. Es ist eine romantische, aufregende Vergangenheit, und ihr erzählt gemeinsam die Geschichte von Littlings, deren Namen es nie in die Geschichtsbücher geschafft haben.",
  fakten: [
    ["Ihr spielt", "**Littlings** – Charaktere mit einem Beruf, Traits, Aces und Contracts"],
    ["Spielleitung", "führt die Geschichte, spielt Nebenfiguren und Gegner"],
    ["Fields", "**Society** ♥ · **Academia** ♦ · **War** ♣ · **Street** ♠, je mit fünf Skills"],
    ["Aufbau", "Sitzung → Szene → **Paragraph** (ein Abenteuer) → **Chapter** (ein Jahr)"],
    ["Zustände", "Verletzt, Erschöpft, Gebrochen, Überlastet, Verängstigt … – mit **Decorum** und **Stress** als eigene Leisten"]
  ],
  wurf: { f: "Dice Pool aus Field + Skill", n: "2 bis 9 Würfel; ein Erfolg sind zwei oder mehr gleiche Seiten – die Farbe ist egal", s: [
    ["Kein Paar", "Misserfolg – die Spielleitung wählt eine Konsequenz", "bad"],
    ["2 Gleiche", "Basic Success", "mid"],
    ["3 Gleiche", "Critical Success", "good"],
    ["4 Gleiche", "Extreme Success", "good"],
    ["5 Gleiche", "Impossible Success", "good"],
    ["6 und mehr", "Jackpot! – du darfst die Szene frei beschreiben", "good"]
  ]},
  kern: [
    ["Schwierigkeit", "Basic, Critical, Extreme oder Impossible – die Spielleitung muss sie nicht offenlegen. 1 Erfolg einer höheren Stufe zählt wie 3 der niedrigeren."],
    ["Re-roll", "Mit mindestens einem Basic Success darfst du alle Würfel neu werfen, die nicht Teil eines Erfolgs sind – gelingt nichts Besseres, verlierst du einen Erfolg. Free Re-rolls verlieren nie etwas."],
    ["All In", "Nach einem besseren Ergebnis darfst du noch einmal neu werfen; ohne Verbesserung verlierst du alle Erfolge."],
    ["Zusatzaktionen", "Überzählige Erfolge können für weitere Aktionen ausgegeben oder an Freunde abgegeben werden."],
    ["Misserfolg", "Negative Konsequenzen, Erfolg mit Preis, ein anderer Weg oder Stress – nie ein Stillstand der Geschichte."]
  ]
};
