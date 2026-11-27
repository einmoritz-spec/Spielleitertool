/* Überblick: Vaesen – Mythic Carpathia (Settingbuch und Mysterien) */
GM_INFO.vae_car = {
  tag: "Mythic Carpathia · Year Zero Engine",
  setting: "Das mythische **Karpathien** im 19. Jahrhundert: Böhmen, die Karpaten und die Städte der Region. Die **Pravda-Gesellschaft** – der örtliche Zweig der Gesellschaft – hat ihren Sitz im **Pulverturm** in Prag; von dort reisen die Mitglieder in ferne Gegenden, um den Menschen zu helfen.",
  fakten: [
    ["Ihr spielt", "Mitglieder der Pravda-Gesellschaft in Prag"],
    ["Neuer Archetyp", "Vampirjäger"],
    ["Wesen", "Baba Yaga, Golem, Strigoi, Vampir, Vykhrovyk, Rusalka u. a. (16)"],
    ["Mysterien", "Ein Pakt aus Blut, Der aufziehende Sturm, Das Geheimnis des Maharal"]
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
    ["Hauptquartier", "Pulverturm in Prag."]
  ],
  ablauf: { t: "Ein Mysterium", s: ["Vorgeschichte", "Einladung", "Vorbereitungen", "Reise", "Ankunft", "Orte & Hinweise", "Konfrontation", "Nachspiel"] }
};
