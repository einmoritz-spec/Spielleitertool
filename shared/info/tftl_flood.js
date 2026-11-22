/* Überblick: Things from the Flood */
GM_INFO.tftl_flood = {
  stil: { acc: "#8f2c48" },
  tag: "Die 90er nach der Flut · Year Zero Engine",
  setting: "Die 1990er-Jahre: Der Loop ist überflutet und an den Konzern **Krafta** verkauft, die Felder sind voller rostender Roboter, der **Maschinenkrebs** lässt Technik versagen. Auf den **Mälarinseln** und in **Boulder City** nach der Hoover-Damm-Katastrophe zerfällt alles – und die Mysterien sind gefährlicher als früher.",
  fakten: [
    ["Ihr spielt", "Teens zwischen 14 und 19 Jahren"],
    ["Spielleitung", "die **SL**"],
    ["Stimmung", "Zerfall, Erwachsenwerden, Konflikte – düsterer als Tales from the Loop"],
    ["Prinzip", "Ihr seid weder Kinder noch Erwachsene"]
  ],
  wurf: { f: "W6-Pool", n: " Attribut + Fertigkeit", s: [
    ["keine 6", "Misserfolg – forcieren möglich", "bad"],
    ["eine 6", "Ärger überwunden", "good"],
    ["mehr 6en", "Zusätzliche Effekte kaufen", "good"]
  ]},
  kern: [
    ["Attribute", "**Körper**, **Technik**, **Herz** und **Verstand** – 14 Punkte, je 1 bis 5."],
    ["Forcieren", "Noch einmal würfeln – kostet einen Zustand."],
    ["Gebrochen & Narben", "Wer Gebrochen wird, trägt eine **Narbe** davon."],
    ["Scham", "Etwas, wofür sich der Teen schämt – statt Stolz."],
    ["Problem & Antrieb", "Was den Teen im Alltag belastet und warum er Mysterien löst."],
    ["Anker", "Ein Mensch, bei dem sich der Teen erholt."]
  ],
  ablauf: { t: "Ein Mysterium", s: ["Teens einführen", "Mysterium einführen", "Ermittlung", "Konfrontation", "Nachspiel"] }
};
