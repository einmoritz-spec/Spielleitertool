OS_ADV_PART("bridge-too-far", [
  {id:"sl-hilfen", titel:"SL-Hilfen: Übersichten & Verzweigungen", gruppe:"SL-Hilfen", bloecke:[
    {t:"p", x:"Zusammenstellung der spielrelevanten Werte und Verzweigungen aus allen Akten. Das ist eine Ergänzung der Fassung, kein Buchtext."},
    {t:"h", x:"Tracked Outcomes, Hindernisse und Limits"},
    {t:"tabelle", kopf:["Akt","Szene","Wert / Ziel"], zeilen:[
      ["I","Ghost Market finden (Quick Outcome)","Gegenstatus Tier 3, z. B. secretive-3 oder firewalled-3; Consequence z. B. indebted-3"],
      ["I","Chiyos Handel","drained-1 je Antwort; Erkennen der Ursache erschwert durch mysterious-2"],
      ["I","Flucht aus dem Markt (Nezumi, Enforcers)","escape-the-market:4; Nezumi Punks als Kollektiv Scale 2, fliehen nach erstem Status auf hurt-or-subdue"],
      ["II","Hintertür des Parlors","hack-open:3 (Wachen: Taser, stunned-3)"],
      ["II","Hinterräume der Yakuza","crammed-4 (Ablenkung hilft)"],
      ["II","Arenapublikum","wild-3 im Kampf; Verdacht führt zu drugged-unconscious-5"],
      ["II","Labortür ohne Maikubi-Leute","unlock:2 oder batter-down:4; mit Ichiros hanko-Siegel sofort offen"],
      ["II","Erster Kontakt mit Junjō","enlightened-6; Tier 5 = Ohnmacht und enlightened-4; Tier 6 = Theme-Tausch, Status entfällt"],
      ["III","Yatagarasu befragen/lesen","Quick oder Discover, erschwert durch mysterious-3"],
      ["III","Yatagarasu täuschen","Quick, erschwert durch enlightened-4 (plus Status der Figur); Lüge ohne Täuschungswurf scheitert immer"],
      ["III","Takibi überzeugen","convince:4"],
      ["IV","Jede Verfolgung","catch/outrun-Limit nach Einschätzung; Einheiten Scale 2, shikigami/inugami/tsuchigumo Scale 1"],
      ["IV","Portal in den Tokyo Cascade (Alternative)","tracked ritual:6, Schutzzauber stärker nahe der Skybridge"],
      ["V","Finales Ritual","spread/seal:4 (polar)"],
      ["V","Skybridge-Umgebung","spell against teleportation (3 Stockwerke drüber/drunter), Bureau-magical-interference-2, hidden sigils"]
    ], titel:"Wo wird was gewürfelt"},
    {t:"h", x:"Wichtige Statuses"},
    {t:"tabelle", kopf:["Status","Wirkung im Abenteuer"], zeilen:[
      ["enlightened-N","Hilft bei Verständnis und Gespräch mit kami und bei klarem Denken, drängt aber dazu, den Plan der kami zu erfüllen. Mitigierbar mit Mythical Powers (z. B. warded), Tags für mentale oder emotionale Stärke oder Wurf mit Self als Power (Metro S. 122). Hautleuchten verschwindet mit der Senkung, dafür ist ein Mythical-Ansatz nötig."],
      ["seeing-the-light-N","Zwingender Status der Yatagarasu: treibt die Figur an, ihren Plan zu erfüllen, kann Decay markieren. remorseful erschwert das Mitigieren."],
      ["remorseful-N","Reue; wirkt gegen seeing-the-light. Durch Celestial Grace (Disarming Compassion) bekommen Angreifer remorseful-2."],
      ["kami-guarded-N","Schutz der Yatagarasu gegen jeden Schaden: physisch, Mythical, digital."],
      ["drained-1","Chiyo, je Auskunft."],
      ["stunned-3","Taser der Maikubi-Wachen."],
      ["drugged-unconscious-5","Betäubungsnadel oder präpariertes Getränk in der Arena."]
    ], titel:"Statuses im Überblick"},
    {t:"h", x:"Verzweigung nach der Entscheidung (Ende Akt III)"},
    {t:"tabelle", kopf:["Entscheidung der Crew","Unterstützer (Story Tags)","Verfolger (Challenges)","Gegner im Finale"], zeilen:[
      ["Mit der Yatagarasu","Tengu, Shinogi Security, Autogyros, Crow Tengu Murder (je nach Beziehung zu Iribe-gumi auch Iribe-gumi-Hilfe von Takibi)","Bureau (Onmyōji Inspectors, Patrol Vehicles, Shikigami, Yōkai-Tracking Drones), Maikubi-kai","Chief Inspector Ishikawa Rin mit Onmyōji Inspectors (Scale 2). Crew will spread."],
      ["Mit dem Bureau","Onmyōji Inspectors, Shikigami, Drohnen, Patrol Vehicles","Yatagarasu-Kräfte (Crow Tengu Murder, Autogyros, Shinogi Security), Maikubi-kai","Yatagarasu mit Crow Tengu Murder (Scale 2). Crew will seal."],
      ["Keiner Seite / eigene Pläne","Höchstens Iribe-gumi (falls Allianz)","Beide Seiten und der Maikubi-kai","Showdown zwischen Ishikawa mit etwa zwölf Onmyōji und der Yatagarasu mit ebenso vielen tengu; Ende, wenn die Crew mit dem Koffer entkommt"]
    ], titel:"Entscheidungsmatrix"},
    {t:"p", x:"Der Maikubi-kai taucht fast immer als Verfolger auf (Leg Breakers, Bōsōzoku Riders, Inugami), außer die Crew hat sich mit ihm geeinigt. Unterstützer von Iribe-gumi hängen vom Takibi-Treffen ab: Gelingt es, gibt es Helfer, misslingt es, kommen die Iribe-gumi als zusätzliche Jäger."},
    {t:"h", x:"Die Fristen der Yatagarasu und des Bureau"},
    {t:"uhr", name:"Sonnenuntergang der Yatagarasu", segs:4, x:"Gibt die Crew die Zusammenarbeit auf (oder gibt sie ehrlich Zweifel zu), schickt die Yatagarasu bei nächstem Sonnenuntergang einen anderen Kurier, den Koffer abzuholen. Das ist eine Spielhilfe, kein Buchwert: Die Uhr tickt Segmente pro längerer Aktion der Crew.", stufen:["Segment 1: Erste Beobachter tauchen auf (Krähen, Drohnen).","Segment 2: Verfolger identifizieren den Unterschlupf.","Segment 3: Kurier und tengu in Position.","Segment 4: Der Kurier kommt; Akt IV beginnt mit einem Angriff auf den Unterschlupf."]},
    {t:"uhr", name:"Bureau-Ultimatum", segs:4, x:"Ishikawa erwartet bei Bedenkzeit eine Antwort vor ihrem Gehen und rechnet mit einem Amatsukami-Zug bei Einbruch der Nacht (am nächsten Tag, falls es schon Nacht ist). Spielhilfe, kein Buchwert.", stufen:["Segment 1: Drohnen kreisen über dem Viertel.","Segment 2: Ishikawa fordert Antwort per Anruf.","Segment 3: Bureau-Fahrzeuge sperren Routen.","Segment 4: Bureau greift ein, Ishikawa erscheint mit Verstärkung."]},
    {t:"h", x:"Consequence-Ideen nach Akt"},
    {t:"liste", items:[
      "**Akt I:** indebted-3 beim Kontakt, der den Markt verriet; Verdacht der Enforcers (Festhalten durch genin); Nezumi stehlen Ausrüstung (ein Gear-Tag verbrannt); Chiyos drained-Statuses summieren sich.",
      "**Akt II:** Crew in der Menge getrennt; Waffen-Tags verbrannt nach Gefangennahme; Ichiro verliert Kontrolle über inugami in den Gängen; erster PC-Kontakt mit Junjō (enlightened-6).",
      "**Akt III:** Yatagarasu wird enttäuscht (Tier deiner Wahl) oder bricht das Gespräch ab (Deny Them Something They Want); Takibi-Treffen scheitert und Iribe-gumi jagt die Crew mit; seeing-the-light-3 durch Yatagarasus Blick.",
      "**Akt IV:** Bystander in Gefahr (Escalate the Situation); Shinogi Security alarmiert (Present a New Challenge: Iribe-gumi Security Guard, Scale 1); Fahrzeugstatus wie wrecked-3, battered-4.",
      "**Akt V:** Make the Future Bleaker durch Tank-Kollateral; Speer oder Koffer geht verloren (Escalate the Situation); verstärkte Security (gun turrets, foam fire suppressant, wireless jammer)."
    ]},
    {t:"h", x:"Szenen-Checkliste pro Akt"},
    {t:"liste", items:[
      "**Akt I:** Markt finden (Quick Outcome, Einmal-Einladung); Habus Nachricht; Einkauf (Ghost Market Dealer Challenge, Tokyo S. 163; Enforcers Tokyo S. 164); Chiyo; Kushikatsu Odoroki Stall (Tatort, Hinweise, Hungry Dog Pachinko Parlor als Spur); Nezumi-Ausbruch oder Verfolgungsjagd; Schuldfrage klären.",
      "**Akt II:** Parlor betreten (Menge oder Hintertür hack-open:3); Arena (Inugami, Alarm); Kennels (Keycard, Ichiros Optionen); Biolab (Techniker-Zustände, Koffer, enlightened-6).",
      "**Akt III:** Yatagarasu kontaktieren; Recherche (Yatagarasu, Junjō, Hikage-Server mit Intrusion Countermeasure AI); Takibi-Treffen; Ishikawa; Gruppenentscheidung; Downtime und Loading Up.",
      "**Akt IV:** Ein oder zwei Verfolgungsszenen (Unterschlupf, Mittelweg, Hinterhalt vor dem Cascade); Zusammensetzung nach Entscheidungsmatrix.",
      "**Akt V:** Zugang zum Tokyo Cascade (Luft, Boden, Tunnel, Aufzüge, Treppen, Kumo Crawler); Asura-Powered Tank auf der Plaza; Skybridge; finales spread/seal:4; Rückzug der Gegnerin; Aftermath-Variante."
    ]},
    {t:"h", x:"Referenzen auf andere Bücher"},
    {t:"liste", items:[
      "Metro: Security Guard S. 305, Gang Member S. 306, Criminal Overlord S. 306, Syndicate Leg Breaker S. 307, Intrusion Countermeasure AI S. 308, Vehicle Piloting Power Set S. 329, Rolling With Self S. 122, Overcoming Challenges S. 107.",
      "Tokyo: Ghost Market S. 159/161/163/164, Kitsune S. 119, Nezumi Punks S. 110, Kaze Security Trooper S. 121, Bōsōzoku Riders S. 124, Street Fighting Power Set S. 135, Chief Inspector Ishikawa Rin S. 155, Onmyōji Inspectors S. 156, Shikigami und Yōkai-Tracking Drones S. 157, Inugami S. 226, Maikubi-kai Power Set und Iribe-gumi Power Set S. 227, Kumo Crawler S. 234, Zenlike Peace S. 65, Great King Enma S. 168, House of Kami S. 154."
    ]}
  ]}
]);
