/* Überblick: Heart – The City Beneath (Grundbuch, Einführung S. 1–3, Regeln in Kürze S. 8) */
GM_INFO.heart = {
  tag: "The City Beneath",
  stil: { bg: "#f6f1e8", fg: "#12120d", acc: "#640000", ff: "Alegreya,Georgia,serif" },
  setting: "Heart spielt in den wahnsinnigen, sich verschiebenden Schluchten und Ruinen, die man **das Herz** nennt. Gruppen verzweifelter Leute reisen hinein und suchen etwas Wichtiges: Geheimnisse, Wahrheit, Vergebung oder Zuflucht. Sie tun sich zum Schutz zusammen und ziehen durch gefährliche, gesetzlose Lande auf der Suche nach **Havens** – Orten der Zuflucht, so vergänglich sie auch sein mögen.",
  fakten: [
    ["Ihr spielt", "**Delver**, die ins Herz hinabsteigen – wer zurückkehrt, ist nicht mehr derselbe"],
    ["Ton", "Staunen, Grauen, Tragik und Menschlichkeit angesichts des Unmenschlichen"],
    ["Reisen", "ein **Delve** ist eine gefährliche Reise zwischen zwei **Landmarken**; Tiefe 0 bis 4, je höher, desto näher am Zentrum des Herzens"],
    ["Resistenzen", "Blood, Mind, Echo, Fortune, Supplies"]
  ],
  wurf: { f: "W10-Pool", n: "1 W10, +1 je Skill, Domain, Knack – der höchste zählt", s: [
    ["1", "Kritischer Fehlschlag – doppelter Stress", "bad"],
    ["2–5", "Fehlschlag – Stress nehmen", "bad"],
    ["6–7", "Erfolg mit Preis – Stress nehmen", "mid"],
    ["8–9", "Erfolg – kein Stress", "good"],
    ["10", "Kritischer Erfolg – Stress-Würfel der Handlung eine Stufe größer", "good"]
  ]},
  kern: [
    ["Schwierigkeit", "Riskant: höchsten Würfel entfernen. Gefährlich: die 2 höchsten Würfel entfernen. Bleibt kein Würfel übrig: 1 W10 – bei einer 10 Erfolg mit Preis, sonst Fehlschlag."],
    ["Stress", "Bei 6 oder mehr fügst du Gegnern oder Delves Stress zu, mit dem Würfel deiner Ausrüstung."],
    ["Fallout", "Bei 7 oder weniger würfelt die Spielleitung einen W12 gegen den Gesamtstress: über dem Stress kein Fallout; höchstens Stress und 6 oder weniger: leichter Fallout, der Stress dieser Resistenz wird gelöscht; höchstens Stress und 7 oder mehr: schwerer Fallout, aller Stress wird gelöscht."],
    ["Beats", "Ziele, Szenen oder Ausgänge deiner Berufung – wer sie erreicht, wächst an Macht."]
  ]
};
