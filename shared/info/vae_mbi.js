/* Überblick: Vaesen – Mythic Britain & Ireland (Settingbuch und Mysterien) */
GM_INFO.vae_mbi = {
  tag: "Mythic Britain & Ireland · Year Zero Engine",
  setting: "Britannien und Irland unter Königin Victoria: **London** ist das Herz eines blühenden Empires, Eisenbahnlinien verbinden die Städte, und zwischen ihnen bleibt das Land von **Tradition** und **Aberglaube** beherrscht. Die Gesellschaft hat ihren Sitz im **Rose House** in London; die vier Nationen sind England, Wales, Schottland und Irland.",
  fakten: [
    ["Ihr spielt", "Mitglieder der Gesellschaft in London"],
    ["Neue Archetypen", "Athlet, Unterhaltungskünstler, Gesellschaftsmensch"],
    ["Wesen", "Banshee, Glaistig, Pixie, Selkie, Vettel, Klopfer u. a."],
    ["Mysterien", "Die alte Meg, Der Vorfall von Llantywyll, Die Hampstead-Gruppe"]
  ],
  wurf: { f: "W6-Pool", n: " Attribut + Fertigkeit", s: [
    ["keine 6", "Fehlschlag – forcieren möglich", "bad"],
    ["eine 6", "Erfolg", "good"],
    ["mehr 6en", "Zusätzliche Effekte", "good"]
  ]},
  kern: [
    ["Forcieren", "Einmal alle Würfel außer den Sechsen neu werfen – kostet einen Zustand."],
    ["Zustände", "Körperlich und geistig; zu viele, und man ist **Gebrochen**."],
    ["Furcht", "Furchtproben mit Logik oder Empathie, wenn Vaesen oder Grauen auftauchen."],
    ["Hauptquartier", "Rose House in Aldermanbury, nicht weit von London Wall."]
  ],
  ablauf: { t: "Ein Mysterium", s: ["Vorgeschichte", "Einladung", "Vorbereitungen", "Reise", "Ankunft", "Orte & Hinweise", "Konfrontation", "Nachspiel"] }
};
