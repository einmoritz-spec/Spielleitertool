/* Überblick: Vaesen (Grundregelwerk, Settingbücher, Mysterien) */
GM_INFO.vaesen = {
  tag: "Nordischer Horror · Year Zero Engine",
  setting: "Skandinavien im 19. Jahrhundert: Eisenbahn, Fabriken und Städte drängen die alten Wesen zurück – Trolle, Nisser, Wassergeister, die **Vaesen**. Nur wenige mit dem **Zweiten Gesicht** können sie sehen. Die **Gesellschaft** in Upsala sammelt sie, um Menschen und Vaesen voreinander zu schützen.",
  fakten: [
    ["Ihr spielt", "Menschen mit dem Zweiten Gesicht – Mitglieder der Gesellschaft"],
    ["Archetypen", "Akademiker, Arzt, Jäger, Okkultist, Privatdetektiv u. a."],
    ["Spielleitung", "die **SL**"],
    ["Stimmung", "Volkssage, Melancholie und stiller Horror"]
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
    ["Hauptquartier", "Die Burg der Gesellschaft wächst zwischen den Mysterien."]
  ],
  ablauf: { t: "Ein Mysterium", s: ["Prolog", "Einladung", "Vorbereitungen", "Reise", "Ankunft", "Orte & Hinweise", "Konfrontation", "Nachspiel"] }
};
