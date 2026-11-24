/* Überblick: SLUGBLASTER */
GM_INFO.slugblaster = {
  tag: "Teenager, Hoverboards, Multiversum",
  setting: "Ihr seid Teenager aus **Hillview**, die in ihrer Freizeit heimlich durch Portale in andere Welten **slugblasten**: Mit selbstgebauten Hoverboards und Strahlenpistolen jagt ihr Monster, sammelt Ruhm und versucht dabei, cool auszusehen – während zu Hause Schule, Eltern und Gefühle warten.",
  fakten: [
    ["Ihr spielt", "eine **Crew** Slugblaster mit **Persönlichkeit** und **Signatur**-Gerät"],
    ["Spielleitung", "der **Slugmaster** (SL)"],
    ["Gespielt wird", "in **Folgen** à 2–4 Stunden, 5–10 pro Staffel – keine fertigen Abenteuer"],
    ["Kreislauf", "Pick a Run → Refresh → Run → Disaster?? → Clean-up → Downtime"]
  ],
  wurf: { f: "1d6, mehrere Würfel: der höchste zählt", n: "Boost = +1d6, Kick = mehr Wirkung", s: [
    ["6", "Erfolg", "good"],
    ["4–5", "Erfolg mit Problem", "mid"],
    ["1–3", "Fehlschlag mit Problem", "bad"]
  ]},
  kern: [
    ["Probleme", "Entweder ein **Snag** (Wendung) oder ein **Slam** (Wunde in einem Slam-Kasten). Mit **Nope!** lehnst du einen Slam ab und markierst 2 Trouble."],
    ["Trouble", "Acht Kästchen. Ist das achte markiert, schlägt das **Disaster** zu. Trouble wird in der Downtime auf Beats ausgegeben."],
    ["Disaster-Wurf", "Am Ende des Runs: 1d6 je leerem Trouble-Kästchen. **6**: 1 Style · **4–5**: 1 Trouble · **1–3**: Desaster und 1 Doom."],
    ["Style", "Cool aussehen: Tricks bringen Style, der in der Downtime ausgegeben wird."]
  ]
};
