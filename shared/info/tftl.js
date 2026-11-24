/* Überblick: Tales from the Loop (Grundregelwerk, Abenteuerbände, Deutschland in den 80ern) */
GM_INFO.tftl = {
  stil: { acc: "#ee7113" },
  tag: "Die 80er, die es nie gab · Year Zero Engine",
  setting: "Ende der 1980er-Jahre auf den **Mälarinseln** bei Stockholm, in **Boulder City** in Nevada oder im **Taunus**: Unter der Landschaft liegt der **Loop**, ein gewaltiger Teilchenbeschleuniger. Seitdem fliegen Magnetrin-Schiffe, Roboter streifen durch die Wälder und seltsame Tiere tauchen auf. Die Erwachsenen sehen darüber hinweg – die **Kids** nicht.",
  fakten: [
    ["Ihr spielt", "Kids zwischen 10 und 15 Jahren"],
    ["Typen", "Bücherwurm, Computerfreak, Landei, Sportskanone, Beliebtes Kind, Rocker, Unruhestifter, Sonderling"],
    ["Spielleitung", "die **SL**"],
    ["Stimmung", "Staunen, Freundschaft und Alltagsfrust zwischen Schule und Elternhaus"]
  ],
  wurf: { f: "W6-Pool", n: " Attribut + Fertigkeit", s: [
    ["keine 6", "Misserfolg – forcieren möglich", "bad"],
    ["eine 6", "Ärger überwunden", "good"],
    ["mehr 6en", "Zusätzliche Effekte kaufen", "good"]
  ]},
  kern: [
    ["Attribute", "**Körper**, **Technik**, **Herz** und **Verstand**, je 1 bis 5."],
    ["Forcieren", "Noch einmal würfeln – kostet einen Zustand: Verärgert, Verängstigt, Erschöpft, Verletzt."],
    ["Glück", "Glückspunkte = 15 − Alter. Ein Punkt wirft einen misslungenen Wurf neu."],
    ["Kids sterben nicht", "Wer zu viel einsteckt, wird **Gebrochen** – aber nie getötet."],
    ["Stolz & Anker", "Stolz gibt einmal pro Mysterium einen sicheren Erfolg; beim Anker erholt man sich."],
    ["Problem & Antrieb", "Was das Kid im Alltag belastet und warum es Mysterien löst."]
  ],
  ablauf: { t: "Ein Mysterium", s: ["Kids einführen", "Mysterium einführen", "Lösung", "Showdown", "Nachspiel", "Veränderung"] }
};
