/* Überblick: City of Mist – Nachts in Payne Town */
GM_INFO.nights = {
  tag: "City of Mist · Kampagne",
  setting: "**Corbin Payne** hat die Stadt erbaut – heute ist er ein vergessener Name auf einer Plakette und der siechende **Fischerkönig**, der den Gral hütet, aber sich nicht heilen kann. Er will, dass die Stadt leidet: Seine gebrochenen Gralsritter:innen sind wieder erwacht und tragen Schmerz, Kult und Bandenkrieg nach Payne Town.",
  fakten: [
    ["Ihr spielt", "Risse in zehn Fällen, einzeln oder als ganze Staffel"],
    ["Persönlich", "Dr. Krystal Knight · *die Schneekönigin* · Fall 1–3"],
    ["Mystisch", "Armand Kai · *Fulcanelli* · Fall 4–6"],
    ["Kriminell", "Vince Beaumont · *König Artus* · Fall 7–9"],
    ["Finale", "Parzival · der Fischerkönig · Fall 10"]
  ],
  wurf: { f: "2W6 + Kraft", s: [
    ["6−", "Misserfolg – harte Aktion der SL", "bad"],
    ["7–9", "Schwacher Erfolg, mit Preis", "mid"],
    ["10+", "Starker Erfolg", "good"]
  ]},
  kern: [
    ["Eisberg", "Jeder Fall hat einen Eisberg; alle Fälle hängen am Kampagnen-Eisberg."],
    ["Ein Fall", "Hintergrund, Schauplätze, NSC, Bedrohungen mit Werten und Pläne – 1–4 Sitzungen."],
    ["Bedrohungen", "Gegner mit Spektren und harten Aktionen."],
    ["Der Gral", "Agenda Paynes: die Stadt leiden lassen – und so vielleicht Rettung finden."]
  ],
  ablauf: { t: "Kampagne", s: ["Persönliche Ebene", "Mystische Ebene", "Kriminelle Ebene", "Finale"] }
};
