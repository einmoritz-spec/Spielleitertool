/* Überblick: BROKEN COMPASS (Fortune-System) */
GM_INFO.compass = {
  tag: "Abenteuer-Rollenspiel · Fortune-System",
  setting: "Ihr seid **Abenteurer:innen** auf der Suche nach einem **Schatz** – Menschen der Tat, die mit leichtem Gepäck um die Welt reisen und sich den Herausforderungen von Großstädten und wilden Ländern stellen. Erzählt wird im Stil von Indiana Jones, Mumie und Tomb Raider: übertrieben, filmreif und mit einem hartnäckigen **Rivalen** im Nacken.",
  fakten: [
    ["Ihr spielt", "Abenteurer:innen mit Feldern, Fertigkeiten, Expertisen und Gefühlen"],
    ["Spielleitung", "der **Schicksalsmeister**, der auch Extras und Rivalen spielt"],
    ["Gespielt wird", "in **Episoden** – ein Pilot, eine Staffel oder Folgen auf Abruf"],
    ["Material", "ein Stapel W6, ein Bogen Papier, ein Stift"]
  ],
  wurf: { f: "W6-Pool", n: "Diamanten in Feld und Fertigkeit, 2 bis 9 Würfel", s: [
    ["Paar", "einfacher Erfolg", "mid"],
    ["Drilling", "kritischer Erfolg", "good"],
    ["Vierling", "extremer Erfolg", "good"],
    ["Fünfling", "unmöglicher Erfolg", "twist"]
  ]},
  kern: [
    ["Herausforderung", "Der Schicksalsmeister legt die Schwierigkeit fest: einfach, kritisch, extrem oder unmöglich."],
    ["Risiko", "Alle Würfel ohne Erfolg neu würfeln – ohne neuen Erfolg geht ein früherer verloren."],
    ["Glück", "10 Glückspunkte retten bei Gefahren das Leben; ohne Glück hilft nur eine Glücksmünze."],
    ["Gefühle", "Gute Gefühle geben Vorteile, schlechte Nachteile."]
  ]
};
