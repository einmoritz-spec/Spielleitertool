/* Überblick: Savage Worlds Abenteuer-Edition (Grundregelwerk S. 6–7, 88–110) */
GM_INFO.savageworlds = {
  tag: "Schnell, furios, spaßig",
  stil: { acc: "#a51f1a", hf: "Oswald, sans-serif" },
  css: ".gi-facts dt{font-family:Oswald,sans-serif;font-weight:600;letter-spacing:.07em}.gi-card>b{font-family:Oswald,sans-serif;font-weight:600;letter-spacing:.03em}"
    + ".gi-flow{display:grid;grid-template-columns:repeat(5,1fr);align-items:stretch;gap:0;padding:14px 0 6px;counter-reset:gis}"
    + ".gi-flow .gi-h{grid-column:1/-1;margin:0 0 10px}"
    + ".gi-flow i{display:none}"
    + ".gi-flow span{counter-increment:gis;position:relative;display:flex;flex-direction:column;gap:6px;padding:10px 14px 11px 18px;border:1px solid rgba(127,127,127,.26);border-left:0;border-radius:0;background:#ede5d4;font-size:13.5px;line-height:1.3}"
    + ".gi-flow span:nth-of-type(1){border-left:1px solid rgba(127,127,127,.26);border-radius:9px 0 0 9px}"
    + ".gi-flow span:last-of-type{border-radius:0 9px 9px 0}"
    + ".gi-flow span::before{content:counter(gis);display:grid;place-items:center;width:22px;height:22px;border-radius:50%;background:var(--gi-acc);color:#fff;font:600 12px Oswald,sans-serif}"
    + ".gi-flow span:not(:last-of-type)::after{content:'';position:absolute;right:-7px;top:50%;width:12px;height:12px;margin-top:-6px;transform:rotate(45deg);background:#ede5d4;border-top:1px solid rgba(127,127,127,.26);border-right:1px solid rgba(127,127,127,.26);z-index:1}"
    + "@media (max-width:640px){.gi-flow{grid-template-columns:1fr}.gi-flow span{border-left:1px solid rgba(127,127,127,.26);border-top:0;border-radius:0;flex-direction:row;align-items:center}.gi-flow span:nth-of-type(1){border-top:1px solid rgba(127,127,127,.26);border-radius:9px 9px 0 0}.gi-flow span:last-of-type{border-radius:0 0 9px 9px}.gi-flow span::after{display:none}}",
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
  ablauf: { t: "Eine Kampfrunde", s: ["Aktionskarten austeilen", "Von Ass bis Zwei handeln", "Bewegen und bis zu drei Aktionen", "Schaden, Wegstecken, Angeschlagen", "Joker gezogen: neu mischen"] }
};
