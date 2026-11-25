/* Überblick: Mausritter */
GM_INFO.mausritter = {
  tag: "Schwert und Schnurrhaare · Mausritter",
  setting: "Ihr spielt winzige **Mäuse** in einer Welt voller Gefahren: Katzen, Eulen, Ratten und riesige Menschen. Die Mausbaronie wächst mit jedem Abenteuer – und ihr mit ihr.",
  fakten: [
    ["Ihr spielt", "Mäuse mit **STÄ, GES, WIL, TP** und **Kernen**"],
    ["Spielleitung", "führt durch **Hexfelder** und Abenteuerorte"],
    ["Gespielt wird", "Der verbotene Garten · Das Anwesen · Die Außenlande"],
    ["Inventar", "Gegenstände nehmen **Plätze** ein und haben **Anwendungen**"]
  ],
  wurf: { f: "W20 ≤ Wert", n: "Probe: STÄ, GES oder WIL", s: [
    ["Wurf ≤ Wert", "Erfolg", "good"],
    ["Wurf > Wert", "Misserfolg", "bad"]
  ]},
  kern: [
    ["Proben", "Mit W20 gegen **STÄ**, **GES** oder **WIL** – mit Vor- oder Nachteil."],
    ["Kampf", "Schaden trifft erst die **TP**, dann die **STÄ**; kritischer Schaden lähmt."],
    ["Rast", "Heilung braucht Zeit und Pflege; **Zustände** belegen Inventarplätze."],
    ["Zeit", "Jedes Kreuz sind etwa **10 Minuten**; jedes dritte bringt eine Begegnung."]
  ]
};
