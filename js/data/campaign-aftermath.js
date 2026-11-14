/* ==================================================================
   KAMPAGNEN-ABSCHLUSS — Campaign Aftermath & Revelations Oracle
   Kein reguläres Abenteuer (kein Buch-"Adventure"), sondern die beiden
   campaignweiten Nachschlage-/Abschluss-Abschnitte aus Hearts of
   Ravensdale I: "Campaign Aftermath" (S. 414) und das "Revelations
   Oracle" (S. 415-417). Läuft technisch wie ein ganz normales Abenteuer
   (eigene Pathrail, Szenen-Navigation), damit man nach Adventure 7 nahtlos
   weiterblättern kann, ohne die Szenenansicht zu verlassen.
   ================================================================== */
const CAMPAIGN_AFTERMATH_SCENES = [

/* 0 --------------------------------------------------------- CAMPAIGN AFTERMATH */
{
  key:"personal-journeys", kind:"aftermath", page:"Hearts of Ravensdale I, S. 414",
  title:"Campaign Aftermath", en:"Campaign Aftermath",
  summary:"Persönliche Reisen der Helden & offene Fäden für die nächste Kampagne",
  readAloud:[],
  flow:[
    `Am Ende von <em>Wake of the Oldways</em> sind die Helden gewachsen, haben sich verändert und Gefahren wie Wunder erlebt, die nur wenige Dalesleute je erfahren haben. Ihre Taten werden noch jahrelang durch die Dales widerhallen, auf große wie kleine Weise.`,
    `<span class="section-heading">Persönliche Reisen (Personal Journeys)</span> Nach Abschluss aller Abenteuer von <em>Wake of the Oldways</em> nehmt euch Zeit, um über alles Geschehene nachzudenken.`,
    `<span class="section-heading">Epic Tales</span> <em>Wake of the Oldways</em> endet mit der Wiederentdeckung der Verlorenen Einsiedelei und damit, dass Stormhelm in die nördlichen Dales einfällt, um weitere Soldaten für seinen Krieg gegen den <span class="gloss" onclick="openGloss('winter-king')">Winterkönig</span> zu gewinnen. Das nächste Kapitel der epischen Kampagne <em>Hearts of <span class="gloss" onclick="openGloss('ravensdale')">Ravensdale</span></em> setzt hier an und schickt eure Helden in eine Kampagne auf Abenteuer-Stufe, um die Dales zu retten.`,
    `Der Ausgang der Ereignisse in <em>Wake of the Oldways</em> trägt sich in die nächste Kampagne fort:`,
  ],
  npcs:[],
  challenges:[],
  extra:{ heading:"Reflexionsfragen — Persönliche Reisen", type:"list", items:[
    "Wo begann die Reise jedes Helden? Wo endete sie? Wie sind sie gewachsen und haben sich verändert?",
    "Wen und was haben die Helden gerettet? Wer oder was ging dabei verloren?",
    "Welche Freunde haben die Helden gewonnen? Werden sie ihnen gegen größere Bedrohungen beistehen?",
    "Welche Feinde haben die Helden gewonnen? Werden sie die kommenden Unruhen zu ihrem Vorteil nutzen?",
    "Wie stehen die Helden zu den Dales? Zur Außenwelt? Zur Zukunft?",
    "Können die Helden je wieder nach Hause zurückkehren? Können sie sich je wieder ins langsame, ländliche Leben der Dales einfügen? Wollen sie das überhaupt?",
  ]},
  extra2:{ heading:"Offene Fäden für „Hearts of Ravensdale“", type:"list", items:[
    "Was wurde aus SorrowBalm und ihrer Suche nach verzauberten Edelsteinen?",
    "Was geschah mit Walric, nachdem er seinen Year Walk abgeschlossen hatte?",
    "Was wurde aus Azeria? Wurde sie von den Cloudbornes gefasst? Bleibt sie mit Gajowy in den Dales, oder sind sie in unbekannte Gefilde geflohen?",
    "Konnten die Helden Woodends albtraumhaften Fluch beenden? Erreichten sie eine Übereinkunft mit der Green Maiden, oder erschlugen sie sie? Oder ging Millside an den Aldenweald verloren?",
    "Kam Kerrid sicher nach Hause? Sind der Kawa-Klan und die Dales Freunde geworden? Wie werden die Dales sich gegen andere Klans, die Turnskins, oder gar einen Thaumaturgen wie Thrad Pine-Splitter verteidigen?",
    "Wer gewann den Bänder-Wettstreit bei der Barleytown Fair? Wer hat nun das Sagen?",
    "Was wurde aus den Oldways? Werden sie in den Dales weiterhin auf dieselbe Weise praktiziert? Erkennen Praktizierende nun die Notwendigkeit, weiterzugehen und die Geheimnisse der Thaumaturgie zu erlernen?",
  ]},
  revelations:[], rewards:[], tips:[],
},

/* 1 --------------------------------------------------------- REVELATIONS ORACLE: KERN */
{
  key:"revelations-oracle-core", kind:"scene", page:"Hearts of Ravensdale I, S. 415",
  title:"Revelations Oracle — Kern-Enthüllungen", en:"Revelations Oracle — Core Revelations",
  summary:"Alle 9 Kern-Enthüllungen im Überblick, mit Fundstellen",
  overview:[],
  readAloud:[],
  flow:[
    `Jedes Abenteuer in <em>Wake of the Oldways</em> enthält mehrere Informationsstücke, die dazu gedacht sind, von den Spielenden entdeckt zu werden, um ihnen ein klareres Bild von all dem zu vermitteln, was den Dales droht. Diese Enthüllungen bilden wichtige Handlungsfäden, die sich durch die gesamte Reihe ziehen (und in künftige Reihen hinein, sofern ihr im Bergmodus spielt, S. 310).`,
    `<span class="callout"><span class="co-title">Spoiler-Warnung</span>Diese Enthüllungen sind dafür gedacht, genau dann aufgedeckt zu werden, wenn ihr im Spiel an ihnen ankommt. Sie vorab zu lesen, könnte euch die Entdeckung verderben!</span>`,
    `Jede Szene in jedem Abenteuer listet die für sie vorgesehenen Enthüllungen auf (siehe das 🌰-Symbol in den Szenen-Folien). Hier sind sie zur Übersicht und leichteren Nachverfolgung zusammengefasst.`,
    `<span class="section-heading">Kern-Enthüllungen</span> Diese Enthüllungen sind wichtig für die Haupthandlung von <em>Wake of the Oldways</em> und für die zentrale Gefahr, die den Dales droht.`,
  ],
  npcs:[],
  challenges:[],
  extra2:{ heading:"Die 9 Kern-Enthüllungen (Reihenfolge = Nummerierung)", type:"list", items:[
    "<strong>Einst-ferne oder gar sagenhafte Bedrohungen dringen nun in die Dales vor.</strong><br><em>Gefunden in:</em> Ein Schatten in der Gerste (Der versunkene Wachturm) · Das Bemalte Untier (Kawa, Kerrids Heimat, bekräftigt)",
    "<strong>Etwas, das die Dales seit Jahrhunderten vor äußeren Mächten geschützt hat, schwindet dahin.</strong><br><em>Gefunden in:</em> Ein Schatten in der Gerste (Aftermath) · Ein Fuchs in den Dales (Eine Fuchs-Träne, bekräftigt) · Das Bemalte Untier (Kawa, Kerrids Heimat, bekräftigt) · Der Jahrmarkt von Barleytown (Rat der Oldways, bekräftigt)",
    "<strong>Die Oldways bewahren die Weisheit, das Wissen und die mystische Lehre Alt-Gwyrdolins.</strong><br><em>Gefunden in:</em> Ein wichtiger Brief (Der Schrein der Gespaltenen Eiche)",
    "<strong>Die Oldways verehren die Lady, die geheimnisvolle Schutzherrin der Dales.</strong><br><em>Gefunden in:</em> Ein wichtiger Brief (Der Schrein der Gespaltenen Eiche)",
    "<strong>Es ist die Macht der Lady, die die Dales beschützt hat — doch sie versagt.</strong><br><em>Gefunden in:</em> Die Grüne Maid (Die Grotte) · Der Jahrmarkt von Barleytown (Rat der Oldways, bekräftigt)",
    "<strong>Die Wurzeln der Oldways zu finden könnte ein Weg sein, den Schutz über den Dales wiederherzustellen.</strong><br><em>Gefunden in:</em> Die Grüne Maid (Die Grotte)",
    "<strong>Die Oldways entsprangen einer alten Schule gwyrdolanischer Thaumaturgen in Hartland.</strong><br><em>Gefunden in:</em> Die Verlorene Einsiedelei (Die Lady der Dales)",
    "<strong>Die Lady war eine der Großen Thaumaturgen Gwyrdolins, die sich opferte, um die Dales vor dem Winterkönig zu schützen.</strong><br><em>Gefunden in:</em> Die Verlorene Einsiedelei (Die Lady der Dales)",
    "<strong>(Optional) Ihr Zauber war nie dafür gedacht, länger als 300 Jahre zu währen, und es gibt nichts, was sein Versagen aufhalten könnte.</strong><br><em>Gefunden in:</em> Die Verlorene Einsiedelei (Die Lady der Dales)",
  ]},
  revelations:[], rewards:[], tips:[],
},

/* 2 --------------------------------------------------------- REVELATIONS ORACLE: LORE */
{
  key:"revelations-oracle-lore", kind:"scene", page:"Hearts of Ravensdale I, S. 416–417",
  title:"Revelations Oracle — Lore-Enthüllungen", en:"Revelations Oracle — Lore Revelations",
  summary:"Alle 12 Lore-Enthüllungen (A–L), die Themenfäden, und was bewusst offenbleibt",
  overview:[],
  readAloud:[],
  flow:[
    `<span class="section-heading">Lore-Enthüllungen</span> Diese Enthüllungen vermitteln nützliche Einblicke in die weitere Welt jenseits der Dales. Sie liefern wertvollen Kontext für die Geschichte von <em>Wake of the Oldways</em>, besonders wenn ihr im Bergmodus spielt (S. 310).`,
    `<span class="section-heading">Fäden der Lore-Enthüllungen (Threads of Lore Revelations)</span> Es gibt viele Wege zur Wahrheit. Enthüllt ihr euren Helden Lore, könnt ihr je nach Gesprächsthema und je nachdem, wer oder was die Lore offenbart, einem der folgenden Fäden folgen.`,
    `Immer wenn ein Held ein neues Detail enthüllt, prüft den passenden Themenfaden für die nächste auszugebende Lore-Enthüllung. Ist diese Enthüllung noch nicht angekreuzt, gebt sie aus und hakt sie ab. Ist sie bereits angekreuzt, gebt stattdessen die nächste im Faden aus.`,
  ],
  npcs:[],
  challenges:[],
  extra:{ heading:"Die 8 Themenfäden", type:"list", items:[
    "<strong>General:</strong> A → B → C",
    "<strong>Creatures:</strong> A → E → G → H → J → K",
    "<strong>Magic &amp; Thaumaturges:</strong> A → B → C → D → I → J",
    "<strong>Gwyrdolin:</strong> C → D → J",
    "<strong>War of Thaumaturges:</strong> C → D → F → I → J → K",
    "<strong>Winterkönig &amp; Stormhelm:</strong> C → F → J",
    "<strong>Stars (Children of Twilight):</strong> A → E → H → I → K",
    "<strong>Miasma:</strong> A → G → J → L",
  ]},
  extra2:{ heading:"Die 12 Lore-Enthüllungen A–L", type:"list", items:[
    "<strong>A</strong> — Die Welt außerhalb der Dales ist voller Geschöpfe der Dämmerung und seltsamer Magie. <em>Fäden: General, Creatures, Magic, Stars</em>",
    "<strong>B</strong> — Die Oldways leiten ihre Praktizierenden dazu an, die ungesehene Welt und ihre Kräfte zu erspüren. <em>Fäden: General, Magic</em>",
    "<strong>C</strong> — Die Dales waren einst Teil von Alt-Gwyrdolin, einem Königreich, das von den Großen Thaumaturgen, den Wundertätern, regiert wurde. <em>Fäden: General, Magic, Gwyrdolin, War, Winterkönig</em>",
    "<strong>D</strong> — Gwyrdolin fiel im Krieg der Thaumaturgen. <em>Fäden: Magic, Gwyrdolin, War</em>",
    "<strong>E</strong> — Es gibt viele Arten von Geschöpfen der Dämmerung, manche gefährlich, manche hilfreich. <em>Fäden: Creatures, Stars</em>",
    "<strong>F</strong> — Stormhelm, eine Stadt nördlich der Dales (ehemals ebenfalls Teil Gwyrdolins), liegt im Ringen mit dem Winterkönig. <em>Fäden: War, Winterkönig</em>",
    "<strong>G</strong> — Seit Kurzem entstehen seltsame Kreaturen durch ein verfluchtes Miasma aus den Sümpfen, berührt von einem uralten Hunger. <em>Fäden: Creatures, Miasma</em>",
    "<strong>H</strong> — Himmlische Wesen, die Kinder der Dämmerung, entsenden Boten, um die Menschheit zu führen. <em>Fäden: Creatures, Stars</em>",
    "<strong>I</strong> — Die himmlischen Wesen des Smaragdenen Zweigs lehrten die Menschheit die Thaumaturgie — und lösten damit mittelbar den Krieg der Thaumaturgen aus. <em>Fäden: Magic, War, Stars</em>",
    "<strong>J</strong> — Der Krieg wurde zwischen dem damaligen Herrscher Gwyrdolins, dem letzten Großen Thaumaturgen genannt der Fell Fool, und dem Winterkönig, dem Herrn aller Geschöpfe der Dämmerung, ausgetragen. <em>Fäden: Creatures, Magic, Gwyrdolin, War, Winterkönig, Miasma</em>",
    "<strong>K</strong> — Viele Geschöpfe der Dämmerung waren einst Kinder der Dämmerung — daher ihr Name —, doch sie fielen wegen ihrer Rolle im Krieg in Ungnade und erhielten den Namen „Fallen Leaves“. <em>Fäden: Creatures, War, Stars</em>",
    "<strong>L</strong> — Unter der Herrschaft des Fell Fool überdauerte Gwyrdolin im Krieg der Thaumaturgen mithilfe finsterer Magie, die das Land versauerte. Seine Hauptstadt versank in den Marschen. <em>Fäden: Miasma</em>",
  ]},
  revelations:[], rewards:[], tips:[],
},

];
ADVENTURES.find(a=>a.id==="campaign-aftermath").scenes = CAMPAIGN_AFTERMATH_SCENES;
