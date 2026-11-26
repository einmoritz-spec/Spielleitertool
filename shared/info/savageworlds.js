/* Überblick: Savage Worlds Abenteuer-Edition (Grundregelwerk S. 6–7, 88–110) */
GM_INFO.savageworlds = {
  tag: "Schnell, furios, spaßig",
  stil: { acc: "#a51f1a", hf: "Oswald, sans-serif" },
  css: ".gi-facts dt{font-family:Oswald,sans-serif;font-weight:600;letter-spacing:.07em}.gi-card>b{font-family:Oswald,sans-serif;font-weight:600;letter-spacing:.03em}",
  setting: "Savage Worlds ist ein **Universalsystem**: Dieselben Regeln tragen Fantasy, Horror, Science-Fiction, Superhelden oder den **Weird West** von Deadlands. Die **Genre-Begleiter** ergänzen Völker, Talente, Mächte, Ausrüstung und Gegner. Kämpfe laufen auf einem Raster mit Figuren und **Schablonen**, sind aber schnell abgehandelt.",
  fakten: [
    ["Ihr spielt", "**Wildcards** – Helden mit eigenem Wild-Würfel und drei Wunden"],
    ["Eigenschaften", "5 Attribute und Fertigkeiten mit Würfeln von **W4 bis W12**"],
    ["Ränge", "Anfänger, Fortgeschritten, Veteran, Heroisch, Legendär – je 5 Erfahrungspunkte ein **Aufstieg**"],
    ["Bennys", "3 pro Sitzung: Wurf wiederholen, Angeschlagen abschütteln, Wunden wegstecken"],
    ["Maßstab", "1 Zoll auf dem Raster = 2 Meter"]
  ],
  wurf: { f: "Eigenschaftswurf", n: " Eigenschaftswürfel + Wild-Würfel (W6), der höhere zählt – Mindestwurf 4", s: [
    ["1 und 1", "Kritischer Fehlschlag – kein Benny hilft", "bad"],
    ["unter 4", "Fehlschlag", "bad"],
    ["4–7", "Erfolg", "mid"],
    ["8+", "Steigerung – je 4 über dem Mindestwurf eine weitere", "good"]
  ]},
  kern: [
    ["Asse", "Zeigt ein Würfel seine Höchstzahl, wird er erneut geworfen und addiert – beliebig oft."],
    ["Initiative", "Jede Runde bekommt jeder eine Aktionskarte, gehandelt wird von Ass bis Zwei. Ein Joker erlaubt jederzeit zu handeln und gibt +2 auf Würfe und Schaden."],
    ["Schaden", "Erreicht der Schaden die Robustheit: **Angeschlagen**. Je Steigerung darüber eine **Wunde**; jede Wunde gibt –1 auf alle Würfe."],
    ["Mehrfachaktionen", "Bis zu drei Aktionen pro Runde, jede weitere gibt –2 auf alle Würfe dieser Runde."]
  ],
  ablauf: { t: "Eine Kampfrunde", s: ["Aktionskarten austeilen", "Ass bis Zwei handeln", "Bewegung + Aktionen", "Schaden & Wegstecken", "Joker? Neu mischen"] }
};
