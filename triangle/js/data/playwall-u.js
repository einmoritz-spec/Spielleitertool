/* Playwall › U (S. 273–275) */
var TA_PWT = window.TA_PWT || (window.TA_PWT = {});

TA_PWT.U1 = {t:"Unzuverlässiger Erzähler", s:273, b:[
 {t:"faehig", h:"Unzuverlässiger Erzähler", x:"Rufe eine Erfahrung, Erinnerung oder Empfindung hervor, indem du sie aussprichst. Erzähle einen Satz über ein Ziel in der dritten Person und würfle **Präsenz**.",
  erg:[
   ["ok", "**Bei Erfolg** erzählen deine Worte einen Eindruck ins Dasein. Diese Erzählung ist für das Ziel wahr und für dich sichtbar, aber für niemanden sonst wahr. Wähle eine Kategorie für das, was du gesagt hast.\n**Segen:** „Morgan hat einen Hammer“ bedeutet, dass Morgan einen Hammer hat, den niemand sonst sehen kann, der für Morgan aber wie ein Schläger funktioniert. Er kann anderen Zielen Schaden zufügen, solange Morgan ihn führt. „Morgans Wunden sind verheilt“ erlaubt Morgan, sich zu verhalten, als wäre er nicht verletzt, aber die Wunden sind nicht wirklich fort. Segen können jederzeit weggenommen und vom Ziel verleugnet oder ignoriert werden.\n**Bedrohung:** „Eva steht unter einem fallenden Klavier“ bedeutet, dass ein Klavier auf Eva fällt, das niemand sonst sehen kann, das für Eva aber wie ein fallendes Klavier funktioniert. Bedrohungen können Schaden zufügen, aber erst, nachdem das Ziel die Chance hatte, eine Entscheidung über seine erzählte Lage zu treffen. Es muss stets die Möglichkeit haben, der Bedrohung zu entkommen, doch sie kann unerfreulich oder schwierig sein.\n**Vermerk:** „Seyi biegt am Zebrastreifen rechts ab.“ Hilft oder behindert etwas niemanden direkt und ändert nur sein Verhalten, ist es ein Vermerk. Vermerke wirken nicht bei anomalen Zielen."],
   ["plus", "**Bei Triszendenz** wird die Erzählung für alle buchstäblich körperlich wahr, egal wie extrem sie ist."],
   ["nein", "**Bei Fehlschlag** erhält ein Ziel in der Nähe (oder die Ziel-Anomalie des Einsatzes) die Fähigkeit, die „Bei Erfolg“-Wirkung dieser Fähigkeit auf dich anzuwenden, und begreift diese Tatsache sofort."]
  ]}
]};

TA_PWT.U2 = {t:"Unbelobigbar", s:274, b:[
 {t:"sp", x:[
  ["Wir hatten gehofft, eine mündliche Verwarnung würde genügen, damit du umdenkst.",
   "Es scheint uns wichtig, dir mitzuteilen: Die meisten Mitarbeiter verhalten sich nicht so. Als zusätzlichen Anreiz zur Kurskorrektur versehen wir dich mit einem vorübergehenden negativen Effekt.",
   "Wir empfehlen, dass du dein Bekenntnis zur Agency umgehend unter Beweis stellst. Weitere Maßnahmen werden nicht so sanft ausfallen.",
   {t:"h3", x:"Unbelobigbar"},
   "Du kannst keine Belobigungen erhalten oder ausgeben, bis du das nächste Mal den Einsatz-MVP erhältst. *(Du verfolgst weiterhin die Gesamtzahl, die du in jedem Einsatz verdienen würdest. Sobald du mit dieser mitgeführten Summe für den MVP infrage kommst, verlierst du Unbelobigbar und erhältst alle Belobigungen, die du in diesem Einsatz verdient hast.)*",
   {t:"notiz", x:"keine Tassen mehr? wie schade. übrigens, das hast du fallen lassen:"},
   {t:"h3", x:"UNL3ASH"},
   "Erhältst du in einem einzelnen Wurf vor allen Anpassungen (QS, Verweise, Burnout usw.) sieben {3}en, aktiviere **UNL3ASH**. Du darfst die Auslöser und die Erfolgswirkungen beliebig vieler deiner Anomalie-Fähigkeiten in schneller Folge oder alle auf einmal aktivieren. Du darfst deine sieben {3}en beliebig auf sie verteilen. *(Die erste „Erfolgs“-{3} jeder Fähigkeit ist kostenlos.)*",
   "Auch die Wirkungen „Bei Triszendenz“ von Anomalie-Fähigkeiten werden aktiviert, wenn eine Fähigkeit während **UNL3ASH** eingesetzt wird.",
   "Sind alle sieben {3}en ausgegeben, endet **UNL3ASH**."],
  [{t:"notiz", pos:"rechts", x:"ach ja, das heißt, du brauchst eine Möglichkeit, an 7 zu kommen."},
   {t:"h3", x:"Der sechsseitige Würfel"},
   {t:"notiz", x:"was? nicht besonders genug für dich? dann nenn ihn „den Regelbrecher“."},
   "Du darfst diesen Würfel zusätzlich zu deinen 6W4 deinem Würfelpool hinzufügen, wenn du Anomalie-Fähigkeiten einsetzt. Du entscheidest vor dem Wurf, ob du diesen Würfel verwendest oder nicht.",
   "Dieser Würfel funktioniert wie ein zusätzlicher W4, außer dass eine 6 zwei {3}en hinzufügt.",
   "Alle Regeln bleiben gleich, während du den W6 verwendest (Triszendenz ist zum Beispiel möglich), und es gelten zwei zusätzliche Regeln:",
   "Du darfst 1 QS oder {3} Verweise ausgeben, um diesen Würfel auf eine beliebige Zahl anzupassen.",
   "Erhältst du in einem Wurf vor allen Anpassungen (QS, Verweise, Burnout usw.) sieben {3}en, aktiviere **UNL3ASH**.",
   {t:"tab", x:[["1", "Fügt 1 Chaos hinzu"], ["2", "Fügt 1 Chaos hinzu"], ["{3}", "Fügt eine {3} hinzu"], ["4", "Fügt 1 Chaos hinzu"], ["5", "Fügt 1 Chaos hinzu"], ["6", "Fügt zwei {3}en hinzu"]]},
   {t:"notiz", pos:"rechts", x:"das ist das Beste, was ich gerade tun kann, um zu helfen, aber größere Dinge kommen, wenn du so weitermachst. bleib auf Linie. halte deinen Vorgesetzten bei Laune, aber richte ein großes Chaos an."},
   {t:"notiz", pos:"rechts", x:"schau dir auch die Kunst an, die ich in Auftrag gegeben habe, wie es ist, wenn wir zusammenarbeiten. krass, oder -U"}]
 ]},
 {t:"vollbild", src:"playwall-s274-augenwesen"}
]};

TA_PWT.U3 = {t:"Aufdröseln", s:275, b:[
 {t:"faehig", h:"Aufdröseln", x:"Alle Bindungen verlieren ihre Kraft, wenn du in der Nähe bist. Zupfe an einem unsichtbaren Faden, der mit einem Gegenstand innerhalb von drei Metern um dich verbunden ist. Würfle **Präsenz**.",
  erg:[
   ["ok", "**Bei Erfolg** zerlegt sich das Ziel vollständig: Seine Schlösser springen auf, seine Nähte platzen, seine Knoten lösen sich, seine Schrauben lockern sich."],
   ["plus", "**Bei jeder dritten {3}** wähle eines:\n– Deine Reichweite wächst um drei Meter.\n– Beliebig viele Dinge in deiner aktuellen Reichweite unterliegen diesem Effekt.\n– Es ist leicht, das Ziel wieder zusammenzusetzen."],
   ["nein", "**Bei Fehlschlag** fällt überall dort, wo du hingehst, alles auseinander: Lampen fallen von der Decke, Kranseile reißen, wenn du darunter hindurchgehst, deine Schnürsenkel gehen auf. Der GM erhält bis zum Ende des Einsatzes die folgende Chaos-Fähigkeit:"]
  ],
  b:[{t:"kasten", h:"Aufdröseln", b:["**1 Chaos** – Etwas löst sich vollständig auf, und zwar so, dass es dem Spieler, der dir diese Fähigkeit gegeben hat, Unannehmlichkeiten bereitet."]}],
  f:"Wenn ich etwas, das man von mir erwartet, nicht tun will, …", a:[["Erscheine ich einfach nicht.", "L7"], ["Mache ich genug Drama, dass es abgesagt wird.", "U4"]]}
]};

TA_PWT.U4 = {t:"Instabil", s:275, b:[
 {t:"faehig", h:"Aufdröseln", x:"Du kannst Aufdröseln nun auf gewöhnliche lebende Ziele anwenden. Wendest du es auf Personen statt auf Gegenstände an, würfle **Empathie**.",
  erg:[
   ["ok", "**Bei Erfolg** verliert das Ziel den Widerstand gegen seine Gefühle: Was auch immer sein dringendstes Anliegen ist, füllt seinen ganzen Verstand aus. Verärgerung wird zu Wut, Bedauern zu Trauer, Sorge zu Entsetzen."],
   ["plus", "**Bei jeder dritten {3}** wähle eines:\n– Deine Reichweite wächst um drei Meter.\n– Beliebig viele Personen in deiner aktuellen Reichweite unterliegen diesem Effekt.\n– Du wählst das Gefühl, das sich in ihnen verstärkt, statt dessen, was am dringendsten ist."],
   ["nein", "**Bei Fehlschlag** fällt überall dort, wo du hingehst, alles auseinander: Die Person, der du versehentlich ein Bein gestellt hast, hegt einen mörderischen Groll, Verflossene hören nicht auf anzurufen, schlichte Ratschläge werden viel zu ernst genommen. Der GM erhält bis zum Ende des Einsatzes die folgende Chaos-Fähigkeit:"]
  ],
  b:[{t:"kasten", h:"Instabil", b:["**1 Chaos** – Jemand reagiert emotional in überzogenem Ausmaß, und das bereitet dem Spieler, der dir diese Fähigkeit gegeben hat, Unannehmlichkeiten."]}]}
]};
