/* Überblick: Triangle Agency */
GM_INFO.triangle = {
  stil: { bg: "#ffffff", fg: "#2a1b45", acc: "#c8202f", ff: "Fig,system-ui,sans-serif", hf: "Spartan,sans-serif" },
  tag: "Büro-Horror · vierseitige Würfel",
  setting: "Die **Triangle Agency** ist ein Konzern, der paranormale Phänomene aufspürt und einfängt: **Anomalien**. Ihr seid Außendienst-Agenten mit eigenen Anomalie-Fähigkeiten, einem gewöhnlichen Leben neben der Arbeit und einer Stelle im Büro. Die Agency meint es gut mit euch. Das steht so im Handbuch.",
  fakten: [
    ["Ihr spielt", "ein Außenteam der Agency"],
    ["Spielleitung", "der **General Manager** (GM)"],
    ["Ein Einsatz", "Morgenbesprechung → Ermittlung → Begegnung"],
    ["Am Ende", "Anomalie gefangen, neutralisiert oder entkommen – dazu der Einsatzbericht"]
  ],
  wurf: { f: "6W4", n: "nur die 3 zählt", s: [
    ["keine 3", "Fehlschlag", "bad"],
    ["mindestens eine 3", "Erfolg", "good"],
    ["genau drei 3en", "Triszendenz – kein Chaos, dazu ein Zusatzeffekt", "twist"]
  ]},
  kern: [
    ["Chaos", "Jeder Würfel, der keine 3 zeigt, legt 1 Chaos in den Pool. Der GM gibt es für die Anomalie aus."],
    ["Qualitätssicherung", "Eine ausgeben macht aus einem Würfel eine 3. Zwischen Einsätzen füllen sie sich wieder auf."],
    ["Burnout", "Eine Qualität ohne Qualitätssicherung verbrennt bei jedem Wurf eine 3 und bringt 1 Chaos."],
    ["ARK", "Jeder Agent besteht aus **Anomalie**, **Realität** und **Kompetenz**."]
  ]
};
