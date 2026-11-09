OS_ADV.push({ id:"strings-attached", titel:"Strings Attached", sub:"Starter Job: Ein Gefangener, ein überflutetes Gefängnis und ein Faden, der aus dem Labyrinth führt",
  buch:"Metro", seiten:"S. 334–354", sektionen:[

{ id:"briefing", titel:"Job-Briefing", bloecke:[
  {t:"p", x:"Einsteiger-Job für jede Crew. Die Regeln lernt die Gruppe unterwegs über die Rapid Downloads aus Kapitel 2, auf die der Job an den passenden Stellen verweist. Lies als SL den Job vorab; die Spieler lesen ihn nicht."},
  {t:"h", x:"Auftrag in drei Sätzen"},
  {t:"p", x:"Die Fixerin **Frank Solid** vermittelt für die Kanzlei **Kallikantzaros & Partners (K&P)**: Die Crew soll das Gefängnis **Skeiron** in der verseuchten **Sludge Zone** auskundschaften und den Häftling **Karl „The Gemcutter“ Masaryk** herausholen. Skeiron gilt als aufgegeben, zeigt aber neuerdings Aktivität. Der Haken: Masaryk ist kein Opfer, sondern inzwischen selbst ein Anführer von Threadwelle."},
  {t:"h", x:"Ablauf im Überblick"},
  {t:"szenen", items:[
    {n:"Akt 0: Meeting the Crew", x:"Briefing auf einem Kran, ohne Würfe."},
    {n:"Akt I: Common Threads", x:"Dead Dock, Attentäter-Drohnen, Bede's Boxing Club, The Vineyard."},
    {n:"Akt II: Through the Sludge Zone", x:"Downtime, Loading Up, Anreise durch den Sludge."},
    {n:"Akt III: Skeiron Correctional Complex", x:"Wachturm, Cell Block Alpha, Skeiron Domain."},
    {n:"Akt IV: Cell Block Bravo", x:"Command Post, Clotho-203, Labyrinth, Lachesis-203, Intaglio."},
    {n:"Aftermath", x:"Offene Fäden und Fragen für die Downtime."}
  ]}
]},

{ id:"hintergrund", titel:"Hintergrund (nur für die SL)", bloecke:[
  {t:"h", x:"Threadwelle"},
  {t:"p", x:"Ein internationaler Dienstleister für Staaten (Gefängnisse, Kliniken, Einwanderungsbehörden, samt Personal). Heimlich beherrscht ihn der Mythos der **Moirai**: Die Chefetage besitzt eine Source der Fates und will Schicksal für Auslastungsziele manipulieren. Inzwischen ist das Management ein Schicksalskult. Jedes Außenteam hat drei Leiter, **Clotho**, **Lachesis**, **Atropos**, deren Persönlichkeit ein Hirnimplantat zugunsten der jeweiligen Göttin zurückdrängt. Das Implantat verbindet sie mit dem Rechner **Oddsmaker**, der Kampfbewegungen vorhersagt."},
  {t:"h", x:"Skeiron und das Intaglio"},
  {t:"liste", items:[
    "Vor rund zehn Jahren überflutete eine Klimakatastrophe den Hafenbezirk (die spätere **Sludge Zone**) und Skeiron; Threadwelle räumte es.",
    "Der Fälscher **Karl Masaryk** schnitt im Knast aus Karneol das **Labyrinth Intaglio**, versteckte es in **Cell Block Bravo** und verlor es bei der Verlegung. Nur sein Zellengenosse **Basil Sideris** (heute **Saint Bede**) wusste davon.",
    "Um das Intaglio entstand ein **Thin Place**. Beim Flutaufstand nährte er sich an der Gewalt, verschluckte mehrere Insassen und machte sie zu **Minotauren**.",
    "Threadwelle fand über Befragungen den Gemcutter. Er überzeugte den Konzern, das Intaglio replizieren zu können, und ist nun **Lachesis-203**. **Clotho-203** und **Atropos-203** überwachen ihn.",
    "Das Labyrinth ist selbst mit einem **Ariadne Thread** kaum zu durchqueren. Der Konzern lässt Gefangene hinein, um aus ihrer Angst weitere Threads zu züchten. Das Skeiron-Domain-Netz ist vom Labyrinth bereits verzerrt."
  ]},
  {t:"h", x:"Wer will was"},
  {t:"liste", items:[
    "**K&P:** wollte Masaryk früher legal befreien, weil sie sein Gem-Know-how nutzen will, und hat ihn zuvor erpresst. Nach seinem Verschwinden schicken sie die Crew.",
    "**Lachesis/Masaryk:** will das Intaglio, hasst das Implantat, hat vor K&P Angst. Bede ist für ihn ein loses Ende; deshalb schickte er Attentäter-Drohnen.",
    "**Threadwelle (Clotho, Atropos):** will Ariadne Threads, rechnet mit Verrat durch Lachesis und hält die Operation leise."
  ]}
]},

{ id:"akt0", gruppe:"Akt 0", titel:"Akt 0: Meeting the Crew", bloecke:[
  {t:"p", x:"Eine einzige Szene als Einstieg und Trainingsraum für den Zyklus Establish > Action > Consequence."},
  {t:"liste", items:[
    "Vorab vorlesen: **Rapid Download #1** (Metro S. 68) und **#2** Characters & Crew (S. 70); danach Charaktere und Crew bauen.",
    "Vor der Szene klären, **warum** die Crew den Job annimmt und was für sie auf dem Spiel steht."
  ]},
  {t:"h", x:"Hook-Ideen nach Crew-Typ"},
  {t:"tabelle", kopf:["Crew-Typ","Mögliche Motivation"], zeilen:[
    ["Community Protectors, Rebellious Street Gang","Ein Bekannter oder Angehöriger wurde nach Skeiron verlegt."],
    ["Wanted, Source Cabal","Ein Häftling dort kennt ein Geheimnis, das sie betrifft."],
    ["All-Around Fixers, Source Cabal, Source-Hunting Privateers","Gerüchte über einen neuen Thin Place in Skeiron; das Honorar ist Nebensache, neue Sources sind der Anreiz."],
    ["All-Around Fixers, Elite Specialists, Found Family","Franks Kontaktliste: Sie handelt für Crews statt Geld lieber **Favors** von K&P aus (legal wie illegal)."],
    ["Community Protectors, Elite Specialists mit Patron","Druckmittel: K&P lässt etwas sein (z. B. Agenda im Viertel) oder der Patron schickt die Crew als Teil eines Deals."]
  ]},
  {t:"h", x:"Eröffnung: Der Kran"},
  {t:"vorlesen_ref", seite:336, x:"Mühsamer, windumtoster Aufstieg auf einen alten Werftkran über der verseuchten Marsch, mit Blick auf Bucht, gebrochene Brücke und die Gefängnisinsel."},
  {t:"p", x:"Lass die Spieler ihre Charaktere beschreiben und beim Klettern miteinander reden. Trage **Rapid Download #3** (S. 76) vor und führe sie zu Frank Solid."},
  {t:"vorlesen_ref", seite:336, x:"Frank Solid wartet oben wie eine Sturmgöttin; eine Drohne aus ihrer Schulterbuchse prüft die Gesichter. Ihre Stimme ist heiser, der Atem bläulich, und sie lobt, dass keiner gekniffen hat."},
  {t:"vorlesen_ref", seite:337, x:"Solids Briefing: K&P sucht Karl Masaryk, der bei der Flut aus Skeiron evakuiert wurde. Threadwelle ist zurück, vermutlich mit ihm, und der offiziell geschlossene Ort wird bewaffnet bewacht. Das Honorar gibt es für den Gemcutter lebend, sonst ist er nur „eine teure Leiche“."},
  {t:"p", x:"Frage dann „Was tut ihr?“. Würfle hier noch nicht und verteile keine Consequences: Vernünftige Aktionen gelingen, Risikoreiches erzähle als riskant, aber harmlos. Erst wenn der Rhythmus sitzt und jemand etwas Dramatisches versucht (z. B. prüft, ob Solid etwas verschweigt), zieh **Rapid Download #4** (S. 84) heran. Mögliche Consequences bleiben narrativ (Solid merkt sich den PC unangenehm)."},
  {t:"h", x:"Was Solid weiß"},
  {t:"liste", items:[
    "**Threadwelle:** staatlicher Dienstleister für Gesundheit, Haft und Einwanderung mit gutem Ruf für sichere, „erfolgreiche“ Anstalten.",
    "**Skeiron:** vor etwa zehn Jahren durch Flut und Verseuchung geräumt; unklar, warum der Konzern zurückkehrt.",
    "**Masaryk:** Experte für Kunst-Edelsteine, arbeitete für Kartelle, baute im Knast ein Behelfslabor. Nur als Techniker ist er schwach.",
    "**Fast entlassen:** K&P hat ihn wohl vorzeitig freigekauft, dann zog Threadwelle ihn per Verwaltungstrick zurück nach Skeiron.",
    "**Spur:** Sein Zellengenosse Basil Sideris floh und lebt unter falscher Identität als **Saint Bede**."
  ]},
  {t:"p", x:"Solid empfiehlt Recherche und schickt die Crew zum **Dead Dock**, dem nächsten Schwarzmarkt. Besprecht den Weg als Gespräch beim Abstieg und geh zu Akt I."}
]},

{ id:"akt1-dead-dock", gruppe:"Akt I", titel:"Akt I: The Dead Dock", bloecke:[
  {t:"p", x:"Ziel des Akts: Hinweise sammeln, Consequences einüben, merken, dass Threadwelle zurückschlägt. Starte am Dead Dock; danach sind die anderen drei Szenen frei kombinierbar."},
  {t:"p", x:"**Der Ort:** Ein Slum auf einem ruinierten Werftpier, seit über einem Jahrzehnt ohne Behördenpräsenz. Rund um uralte Schiffswracks, die als Unterkünfte dienen, gibt es Strom- und Netzanzapfer, Händler und Hütten. Hier kauft und hört man alles für die Sludge Zone, auch Waffen."},
  {t:"vorlesen_ref", seite:338, x:"Unter einem großen Blechdach, das (fast) vor dem Säureregen schützt, leben die Ausgestoßenen eigenständig, heißen Fremde willkommen und haben etwas zu verkaufen oder zu erzählen."},
  {t:"p", x:"Stelle klar: Die PCs kennen den Auftrag, ahnen Threadwelles Heimlichkeit und haben nur den Namen Basil Sideris/Saint Bede, aber keine Adresse. Dann reihum: „Was tust du?“, ggf. würfeln, Consequence, Szene neu herstellen. Ende, wenn die Szene erschöpft ist oder eine Spur steht."},
  {t:"h", x:"Informationen sammeln (Quick Outcome)"},
  {t:"p", x:"Mittel: Online-Recherche und Kontakte, Handel mit Händlern und Kriminellen, Beobachtung Skeirons aus der Ferne. Beim ersten Miss (6-) oder Mixed Hit (7-9) lies **Rapid Download #6** (S. 98) und verteile eine Consequence (verweist auf Statuses S. 103 und Story Tags S. 110). Jeder Hit liefert eine dieser Informationen:"},
  {t:"tabelle", kopf:["Thema","Basis-Hit","Great Success zusätzlich"], zeilen:[
    ["Basil Sideris","Hat sich operieren lassen und Fingerabdrücke entfernt, aber Spuren bleiben. Heute **Saint Bede**, Besitzer von **Bede's Venerable Boxing Club** in einem anderen Viertel.","Bede ist bestechlich."],
    ["Skeiron","Ein alter Server wurde zur Vergnügungs-Domain **The Vineyard** (an eine Threadwelle-Tochter verpachtet). Unter dem Gerüst könnten alte Gefängnisdaten liegen; die Sicherheit ist streng.","Der Alarmzustand zeigt sich als digitale **Raben**."],
    ["Gefahren der Zone","Die Gang **Crocodilians** beansprucht weite Teile.","Es gibt riesige Unterwasserwesen nahe Skeiron: **Prismatic Jellies**."],
    ["Neue Gefangene","Ein schwarzes VTOL landete in den letzten Tagen zwei-, dreimal in Skeiron. Hacker sehen in Threadwelles Logs rund ein Dutzend „verschwundene“ Häftlinge; Namen getilgt, Akten unter der Autorität eines **Clotho-203**.","–"]
  ]},
  {t:"p", x:"**Consequences:** Mixed Hit: ein seltsamer Blick oder widerwillige Antwort. Miss: Der Kontakt blockt aus Angst vor denen, die das verheimlichen (*Deny Them Something They Want*)."},
  {t:"h", x:"Einkaufen (Tracked Outcome)"},
  {t:"p", x:"Kauft ein PC etwas, nutze **Rapid Download #5: Effects** (S. 90) und **#8: Story Tags** (S. 110). Bei einem Hit kauft er per **Create** für 2 Power einen Story Tag. Viele Street-Catalog-Items (Metro S. 252) sind hier zu haben, besonders sumpftaugliche oder illegale."},
  {t:"liste", items:[
    "**Typische Angebote:** protective rubber suit, makeshift trident, Pillen gegen Sludge-Krankheit, Dingi, lokaler Führer, säurefestes Dichtmittel, automatische Flechette-Speergun.",
    "**Zu wenig Power?** Alternativ **Enhance** (positiver Status wie solvent-1) oder **Influence** (Verkäufer friendly-1).",
    "**Consequence-Beispiele:** short-on-cash-2, ignored-1 oder Verkäufer annoyed-1; der Spieler darf mitigaten (#6, S. 98)."
  ]},
  {t:"hinweis", titel:"Consequence-Ideen für Akt I", x:"**Escalate the Situation:** Assassin-Drohnen-Szene starten. **Present a New Challenge:** Ein Scavenger (Metro S. 314) heftet sich an die Crew. **Deny Them Something They Want:** Der Vineyard-Alarm wirft alle raus; Bede entkommt in die Gassen. **Make the Future Bleaker:** Ein Querschläger tötet einen Passanten; im Dead Dock stürzt eine Hütte ein. **Mit Effects:** Adware im HUD (annoying-buzz-2); Einheimische sind abweisend (cowed-1 oder Einheimische distant-2); Ablenkung (distracted-1 oder Self Tag burnen); Source-Kraft geschwächt (drained-1 oder Myhos Tag burnen); Funk- oder Säurestörung (jammed-1 oder Noise Tag burnen); defekte Ausrüstung (Loadout Tag burnen)."},
  {t:"p", x:"**Abschluss:** Die Crew sollte mindestens eine Spur zu Bede oder zum Vineyard haben. Trödelt sie, löse die Drohnen aus."}
]},

{ id:"akt1-tracked", gruppe:"Akt I", titel:"Tracked Conflict und Assassin Drones", bloecke:[
  {t:"h", x:"Tracked Conflict in Kürze"},
  {t:"p", x:"Konflikte mit Challenges kannst du als Quick Outcome kürzen, meist laufen sie aber Aktion für Aktion. Zwei Unterschiede zum bisherigen Zyklus:"},
  {t:"liste", items:[
    "**Challenges greifen über Threats an.** In der Establish-Phase kündigst du eine gefährliche Handlung der Challenge an. Geht die PC-Aktion nicht darauf ein, kannst du die zugehörige Consequence verteilen, egal wie der Wurf ausfällt.",
    "**PCs greifen über Effects** (Attack, Advance) an: Sie geben Challenges Statuses, bis ein Limit erreicht ist."
  ]},
  {t:"p", x:"Zum ersten Tracked Conflict lies **Rapid Download #5: Effects** (S. 90) und **#7: Statuses** (S. 103)."},
  {t:"h", x:"Assassin Drones, Incoming"},
  {t:"p", x:"Sobald Threadwelle merkt, dass die Crew sich für Skeiron interessiert, schickt sie **Puppeteer-Hand**-Drohnen. Der Angriff passt an jeder Stelle von Akt I: wenn du Druck aufbauen willst oder als *Present a New Challenge*. Bei Bede's Club zielen sie auf Saint Bede; rettet die Crew ihn, gewinnt sie sein Vertrauen."},
  {t:"liste", items:[
    "Es gibt **so viele Drohnen wie PCs**; sah die Crew sie nicht kommen, starten sie mit **ambushing-2**.",
    "Die Drohnen sind ohne Kennzeichen, haben keine KI und fallen ohne Steuersignal aus. Wer das Signal analysiert, erkennt: Es kommt aus Richtung **Skeiron**.",
    "Ein Operator steuert oft zwei, Geübte mehr."
  ]},
  {t:"challenge", name:"Puppeteer-Hand Drone", rating:"◆◆", typ:"Challenge (Drohne)", beschr:"Zwei Meter hohe Hand aus schwarzem Drahtgerüst, ferngesteuert. Klettert mit Gecko-Haftung leise über Wände und Decken, feuert Drahtpfeile aus den Fingern und leitet Strom durch Draht oder Rahmen.",
    limits:[{n:"Wreck",v:3},{n:"Take Over",v:3},{n:"Shut Down",v:3}],
    tags:["metallic wireframe","silent movement"],
    threats:[
      {n:"Klettert mit Gecko-Haftung über jede Fläche oder zieht sich per Draht-Enterhaken weg", x:"Consequence: wechselt auf die andere Raumseite oder Decke (gewinnt superior-position-2 oder entfernt 2 Tiers Restriction-Statuses)."},
      {n:"Richtet die Finger auf ein Ziel, bereit zu schießen", x:"Consequence: schießt Drahtpfeile aus den Fingerspitzen (pierced-2)."},
      {n:"Schließt die Finger um einen Gegner", x:"Consequence: hält das Ziel fest (grabbed-3) oder zerquetscht ein gegriffenes Ziel (crushed-2)."},
      {n:"Beginnt sanft zu summen", x:"Consequence: elektrisiert ein gegriffenes oder durchbohrtes Ziel (electrocuted-3) oder burnt einen Tag, der ein von Strom überlastbares Item oder Cyberware darstellt."}
    ]}
]},

{ id:"akt1-bede", gruppe:"Akt I", titel:"Bede's Venerable Boxing Club", bloecke:[
  {t:"p", x:"Lege den Club in ein armes Viertel deiner Wahl. Er ist tagsüber Trainingshalle, nachts Wettlokal für Bare-Knuckle-Kämpfe im Keller. Tagsüber und früh abends ist der Kampf unten freundschaftlich, gegen Mitternacht beginnen die ernsten Kämpfe und das Wetten."},
  {t:"vorlesen_ref", seite:341, x:"Schweiß- und Energydrink-Geruch, Fäuste auf Kunstleder, Hologramm-Displays mit alten Kämpfen und Werbung; Mitglieder trainieren, einige sichtlich auf Nitro. Hinten führt eine Tür mit Publikumslärm zum Keller und Boxring."},
  {t:"p", x:"Untersucht ein PC die Stimmung, löse es als Quick Outcome und gib je nach Erfolg mehr preis:"},
  {t:"liste", items:[
    "Keine Konzernlogos, ungewöhnlich für den Ort: Der Besitzer arbeitet entweder mit einem Syndikat oder meidet alle aus Paranoia.",
    "Sein Trick: Er versorgt seine Boxer mit **Nitro-Sunspot-Cocktail** (Enhancers, Metro S. 263) und kauft so die Loyalität einer kleinen Muskelarmee."
  ]},
  {t:"h", x:"Den Saint zum Reden bringen"},
  {t:"p", x:"Bede streitet zunächst ab, Basil Sideris zu sein, und kommt nur auf Nachfrage oder bei Ärger nach oben. Er ist meist im Keller und boxt bei freundlichen Kämpfen vielleicht selbst. Wege zum Gespräch:"},
  {t:"liste", items:[
    "**Bribe** oder **Threaten** maxen.",
    "**Ringwette:** Landet ein PC Treffer (Hurt or Subdue maxen), redet er.",
    "**Rettung** vor den Drohnen (siehe unten): Er schuldet der Crew etwas."
  ]},
  {t:"p", x:"**Zuspitzung:** Bei ernster Consequence rotten sich Clubmitglieder zusammen (nutze **Gang Members**, Metro S. 306). Noch besser: Die **Puppeteer-Hands** (S. 340) fallen aus Deckenverstecken über Bede und alle im Weg her. Threadwelle will ihn zum Schweigen bringen."},
  {t:"challenge", name:"Saint Bede (Basil Sideris)", typ:"NPC", beschr:"Gedrungener Grieche um die fünfzig, Boxer und früherer Mob-Enforcer, nach Gesichts-OP unter falschem Namen. Seine Gürtelschnalle aus Riesenfaultier-Knochen ist eine Source des **Mapinguari**: Körperkraft und Fähigkeit, Verfolger abzuhängen.",
    limits:[{n:"Hurt or Subdue",v:3},{n:"Bribe",v:3},{n:"Threaten",v:4}],
    tags:["strength of the Mapinguari","Status: suspicious-2"],
    threats:[
      {n:"Redet laut darüber, wie wenig er es mag, nach seiner Vergangenheit gefragt zu werden", x:"Consequence: mehrere Clubmitglieder kommen drohend näher (gewinnt crowd support oder Escalate the Situation)."},
      {n:"Geht in Boxhaltung", x:"Consequence: boxt jemanden wiederholt (bruised-2); weicht einem misslungenen Angriff aus (unbalanced-2); lenkt einen Angriff um, sodass er jemand anderen trifft (der beabsichtigte Status geht an das neue Ziel)."},
      {n:"Stürmt zu einem der Ausgänge", x:"Consequence: verschwindet in den Gassen (Deny Them Something They Want)."}
    ]},
  {t:"h", x:"Was Bede weiß"},
  {t:"liste", items:[
    "**Gefängnisplan** aus dem Gedächtnis (lückenhaft wegen möglicher Einstürze): Die Crew erhält den Story Tag **basic prison layout**.",
    "**Zelle 12**, Erdgeschoss von **Cell Block Bravo**, teilte er mit Karl (Bede oben, Karl unten); sie liegt wohl unter Wasser. Der Block war schon vor der Flut unheimlich, nach den Toten dort spukt es wohl.",
    "Sie waren enge Freunde und flohen beim Aufstand fast gemeinsam. Hört Bede, dass Karl zurück in Skeiron ist, vermutet er, dass er ein **graviertes Juwel** (Intaglio) sucht, das ihm viel bedeutet."
  ]}
]},

{ id:"akt1-vineyard", gruppe:"Akt I", titel:"The Vineyard", bloecke:[
  {t:"p", x:"Eine abgesicherte VR-Domain im Stil eines französischen Weinguts mit Château. Ein Hacker bringt die Crew per **Harness** hinein; ihre Fähigkeiten gehen auf die Avatare über. Die PCs wollen nicht ins Château, sondern an die **Schattendaten im Boden**: Reste der gelöschten Gefängnisserver, in der Metapher unter den Reben."},
  {t:"vorlesen_ref", seite:343, x:"Die Avatare erscheinen zwischen endlosen Rebzeilen vor einem Herrenhaus mit Café: Vogelzwitschern, ewiger Sonnenschein, Premium-Pass-Werbung, aber kein Geruch (angeblich ein kleiner Netzausfall). Unter dem Idyll liegen vergrabene Skeiron-Daten."},
  {t:"p", x:"**Ablauf:** Mit **Advance** vergeben die Spieler Statuses wie digging-1 oder interfacing-2 auf das Limit **find-treasure**. Jedes Mal, wenn es voll ist, erhält die Crew eine Information und das Limit wird zurückgesetzt. Parallel steigt **alarm** durch Threats; die PCs können per Aktionen den Alarmstand erkunden und mit passenden Tags senken."},
  {t:"challenge", name:"The Vineyard", typ:"Challenge (Domain)", beschr:"Eleganter Château-Hügel über perfekten grünen Rebzeilen. Das Wetter ist angenehm, wird aber turbulent, je höher die Bedrohung steigt.",
    limits:[{n:"Alarm",v:3},{n:"Find Treasure",v:3}],
    tags:["endless identical rows","pleasant vineyard"],
    specials:[
      {n:"Alarm", x:"Erreicht: The Vineyard fährt sich herunter, als Sturm, der alle trennt (Deny Them Something They Want)."},
      {n:"Find Treasure", x:"Erreicht: Die Crew findet eine Information aus der Liste unten. Danach das Limit zurücksetzen."}
    ],
    threats:[
      {n:"Weinblätter rascheln im Wind", x:"Consequence: Raben landen auf einem Pfosten und beobachten auf irreguläres Verhalten (füge vigilant ravens hinzu); Raben krächzen (The Vineyard gewinnt alarm-1); wer mit dem System interagiert, wird nervös (nervous-2)."},
      {n:"Dunkle Wolken ziehen auf, der Wind frischt auf", x:"Consequence: eine plötzliche Böe reißt ein Ausrüstungsstück fort (einen Tag burnen)."}
    ]},
  {t:"h", x:"Mögliche Funde"},
  {t:"liste", items:[
    "**Basic prison layout schematics** von Skeiron. Hat die Crew schon den Tag von Bede, lassen sich beide Pläne kombinieren und verfeinern (Story Tag Sets, Metro S. 112).",
    "Datenreste: In Cell Block Bravo verschwanden schon **vor der Flut** mehrere gewalttätige Häftlinge (Namen nicht rekonstruierbar); interne Ermittlungen verliefen im Sand.",
    "Das **Wachpasswort** des ehemaligen Wächters **Ian Lyman**, noch gültig."
  ]}
]}

]});
