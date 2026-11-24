/* Überblick: The Electric State */
GM_INFO.tftl_es = {
  stil: { acc: "#e3262a" },
  tag: "Roadtrip durch die 90er · Year Zero Engine",
  setting: "Amerika, Ende der 1990er: Nach einem zweiten Bürgerkrieg flüchten fast alle in das neuronische Netzwerk, den **Electric State**. Draußen liegen die Wracks riesiger Kampfdrohnen über das Land verstreut. Durch den abgeschotteten Staat **Pacifica** müssen echte Reisen trotzdem unternommen werden.",
  fakten: [
    ["Ihr spielt", "Reisende mit eigenem Ziel"],
    ["Archetypen", "nach Schlüsselattribut, mit Traum, Schwäche und Lieblingssong der 90er"],
    ["Spielleitung", "die **SL**"],
    ["Stimmung", "Melancholie, Verfall und die Frage: Was tue ich, wenn alles zusammenbricht?"]
  ],
  wurf: { f: "W6-Pool", n: " Attribut + Ausrüstungswürfel", s: [
    ["keine 6", "Misserfolg – forcieren möglich", "bad"],
    ["eine 6", "Erfolg", "good"],
    ["mehr 6en", "Zusätzliche Effekte", "good"]
  ]},
  kern: [
    ["Attribute", "**Stärke**, **Geschick**, **Verstand** und **Empathie**."],
    ["Forcieren", "Würfel neu werfen – jede 1 auf Basiswürfeln kostet **Hoffnung**, auf Ausrüstungswürfeln die Ausrüstung."],
    ["Gesundheit", "Bei null kampfunfähig, dann Todeswürfe."],
    ["Hoffnung", "Sinkt durch Forcieren und traumatische Ereignisse."],
    ["Neuronik", "Der Weg in den Electric State – verlockend und gefährlich."],
    ["Fahrzeug", "Das Auto der Gruppe mit eigenen Werten."]
  ],
  ablauf: { t: "Into the Dust", s: ["Route", "Ziele & Bedrohungen", "Begegnungen", "Engel in der Maschine", "Mord am Straßenrand", "Drohnenschiff-Friedhof"] }
};
