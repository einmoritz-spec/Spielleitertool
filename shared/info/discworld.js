/* Überblick: Discworld – Abenteuer in Ankh-Morpork (Grundregelwerk, Einführung S. 3–7, Das Spiel S. 9–23) */
GM_INFO.discworld = {
  tag: "Abenteuer in Ankh-Morpork · Narrativium-System",
  stil: { bg: "#f3ead6", fg: "#2b211a", acc: "#7a2417", ff: "Georgia,serif" },
  setting: "Ankh-Morpork an der Wende zum **Jahrhundert der Sardelle**, kurz vor *Ab die Post* und *Klonk!*: Lord Vetinari regiert, die Gilden intrigieren lieber gegeneinander als gegen ihn, und die Wache hält den Frieden. Es gibt **keine Kampfregeln** – im Mittelpunkt stehen Figuren, Welt und Wortspiele. Die Geschichte geht immer vor.",
  fakten: [
    ["Ihr spielt", "eine Gruppe derselben **Organisation**: Wache, Zauberer, Assassinenschüler, Diebe, Bettler, Times, Näherinnen, Narren, besorgte Bürger oder Besucher"],
    ["Figuren", "bestehen nur aus **Merkmalen**: Organisation, Hintergrund, Nische, drei Marotten, später ein Kern"],
    ["Glück", "jede Figur beginnt mit **4 Glück** (zugleich das Maximum)"],
    ["Länge", "ein Abenteuer in 2–3 Sitzungen"]
  ],
  wurf: { f: "Ergebniswürfel gegen Narrativiumwürfel (W8)", n: "W4 · W6 · W10 · W12 je nach Merkmal, Erfahrung und Lage", s: [
    ["Ergebnis höher", "Erfolg", "good"],
    ["Gleichstand", "Erfolg, aber mit Folgen", "mid"],
    ["Narrativium höher", "Misserfolg und Folgen", "bad"]
  ]},
  kern: [
    ["Würfelwahl", "Handlung, Merkmal und Lage passen: W12 · zwei davon: W10 · eins: W6 · nichts davon: W4."],
    ["Helfen", "1 Glück ausgeben, eigenen Würfel werfen – er ersetzt den alten, auch wenn er schlechter ist. Wer hilft, trägt die Folgen mit."],
    ["Glück", "1 Glück vermeidet eine Folge (höchstens 1 pro Probe). Magie kostet Glück vor dem Wurf."],
    ["Magie", "Folgen sind umgekehrt: Sie treten bei **Erfolg** ein und lassen sich nicht vermeiden."]
  ],
  ablauf: { t: "Eine Probe", s: ["Szene setzen", "Handlung + Merkmal", "Würfel festlegen", "Würfeln", "Helfen?", "Folgen vorschlagen", "Glück ausgeben?"] }
};
