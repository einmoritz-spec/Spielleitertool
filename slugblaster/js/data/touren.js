/* SLUGBLASTER – Tour-Planer (Regelbuch S. 28–29, 154) · Spielbegriffe englisch, Fließtext deutsch */
var SB_TOUREN = [
 [11,"Findet einen richtig geilen Spot, um ein neues Hoverboard-Video zu drehen."],
 [12,"Befreit ein paar Ausrüstungsteile aus Rescues berüchtigten Beschlagnahme-Spinden."],
 [13,"Nosegrindet die Realität. Boardslidet eine Traumlandschaft. Lasst euch vom Peelback zurückziehen und surft diese Bombe nach Hause."],
 [14,"Brecht in die Büros des *Slugblaster Magazine* ein und legt euer Tape der Chefredaktion auf den Schreibtisch."],
 [15,"FUST veranstaltet eine große Hoverboard-Demo. Rein in die Halfpipe und stehlt allen die Show."],
 [16,"Hackt die Doorways-Website und ladet euren eigenen Aufklärungsspot (PSA) hoch."],
 [21,"Ladet die Infinite-Pizza-App herunter und liefert für Guthaben bei FUST aus. In dreißig Minuten oder weniger!"],
 [22,"Scram Cat sponsert einen großen Hackathon über die ganze Nacht. Wird bestimmt krass."],
 [23,"Hackt Mipers blitzschnelle Lieferdrohnen und folgt ihnen wie eine Bande Paketdiebe."],
 [24,"Schlüpft in die Lüftungsschächte der Realität und erkundet etwas dimensionale Infrastruktur, bevor die Arboristen euch rauswerfen."],
 [25,"Flickt die ausgefranste Mathematik rund um stark genutzte Portal-Zonen, um jüngere Slugger und die heimische Tierwelt zu schützen."],
 [26,"Öffnet mitten in einem großen Doorways-Meeting ein Portal."],
 [31,"Schmeißt jemandem eine Überraschungsparty!"],
 [32,"Hängt euch (Skitch) an den Miper-Zug und gebt den Pendlern etwas zum Reden.","Skater-Begriff: sich an die Stoßstange eines Autos hängen und mitfahren."],
 [33,"Bergt Bauteile aus dem riesigen Mecha, der unter dem Moos im Goldenen Dschungel schläft."],
 [34,"Besprüht oder plakatiert eine Reihe von Welten, bevor ihr erwischt werdet. Beeilt euch besser!"],
 [35,"Findet heraus, was in Thennis Spar spukt und wie man es beheben kann."],
 [36,"Erschafft durch ein schlecht durchdachtes Zeitschleifen-Experiment eine nie endende Party."],
 [41,"Ein wichtiger Kunde braucht etwas, das gestern geliefert sein sollte. Wirklich gestern. Kriegt ihr das hin?"],
 [42,"Irgendein Kind hat gerade einen brutalen Bail hingelegt. Schafft ihr es ins Krankenhaus, bevor der Peelback zuschlägt?"],
 [43,"Erobert die Spitze der Bestenliste beim berühmten Wilkie’s Speed Run™."],
 [44,"Fordert eine andere Crew öffentlich zu einem Rennen oder einer Runde SLUG heraus."],
 [45,"Macht ein Selfie mit einem Zonenpony aus Empyrean, dem Phasendrachen aus Calorium, eurem alternativen Ich oder einem anderen schwer fassbaren Wesen."],
 [46,"Heute Nacht steigt am anderen Ende des Multiversums eine riesige Party, und ihr sollt die Getränke mitbringen."],
 [51,"Liefert ein unheimliches Paket für Shimmer aus. Wie schlimm kann es schon sein? Bestimmt kein menschlicher Fuß oder so, oder?"],
 [52,"Nehmt ein paar Neulinge auf ihren allerersten Run mit."],
 [53,"Befreit ein paar Kinder aus Rescues berüchtigtem Dekontaminationszentrum."],
 [54,"Stört die Hardecker-Bergbauoperationen in Prismatia."],
 [55,"Verschandelt und/oder korrigiert eine schwer erreichbare Werbetafel."],
 [56,"Findet heraus, wie lange ihr draußen bleiben könnt, bevor euch der Peelback erwischt. Dokumentiert das ganze Experiment."],
 [61,"Legt euch mit diesen Idioten an, die ein paar Welten weiter vom Aussterben bedrohte metaterrestrische Arten wildern."],
 [62,"Schleicht euch irgendwo ein und macht es auf lustige Art besser."],
 [63,"Schleicht euch in den Club. Vielleicht leiht dir deine Schwester ihren Ausweis."],
 [64,"Ergattert Tickets für Multipalooza oder ein anderes großes Festival."],
 [65,"Ein Team hat in Quahalia 4,2 Sekunden ohne seine Logikbinder überlebt. Schafft ihr mehr?"],
 [66,"Zieht einen urkomischen interdimensionalen Streich durch."]
];
var SB_TOUREN_NOTIZ = "Das ist eine d66-Tabelle: Würfle 2W6 und nimm einen Würfel als erste Ziffer, den anderen als zweite.";
/* Preis-Ideen (S. 29) */
var SB_PREISE = [
 {id:"spot", t:"Spot", x:"Ein krasser Spot, an dem Tricks +1 Style bringen."},
 {id:"bonus", t:"Bonus", x:"3–5 Crew-Style für das Erreichen eines bestimmten Ziels."},
 {id:"zeug", t:"Zeug", x:"Bauteile oder Ausrüstung."},
 {id:"gunst", t:"Gunst", x:"Eine bestimmte Fraktion beeindrucken."},
 {id:"zugang", t:"Zugang", x:"Eine bestimmte Portal-Zone freischalten oder eine bestimmte Gelegenheit auslösen."}
];
/* Hindernisse (S. 154) */
var SB_HINDERNISSE = {
 p:154,
 intro:"Hindernisse sind die Dinge auf dem Run, die die Charaktere direkt überwinden müssen, um ihren Preis zu bekommen. Anders als Probleme werden Hindernisse und Bedrohungen schon vorher etabliert, bekannt oder angedeutet, oft noch vor Beginn des Runs.",
 x:[
  "Der genaue Ort des Preises ist versteckt oder geheim.",
  "Der Weg zum Preis ist schwierig, tückisch, versperrt oder gut bewacht.",
  "Um den Preis zu bekommen, müssen schwierige Aufgaben erledigt, eine gefährliche Situation überstanden, ein harter Wettbewerb gewonnen werden usw.",
  "Der Preis muss beansprucht werden, bevor eine Bedrohung auftaucht, sich ein Zeitfenster schließt oder die Zeit abläuft."
 ]
};
/* Aktionen der SL und Bite (S. 145) */
var SB_SLAKTIONEN = {
 p:145,
 jederzeit:[
  "Beschreibe ihre Umgebung.",
  "Stelle Fragen wie „Was tust du?“, „Wer steht am nächsten am Fluss?“, „Macht das deinen Charakter wütend?“, „Wie sieht der Trick aus?“ oder „Hat jemand eine Idee für ein Problem?“",
  "Starte eine drohende Gefahrenleiste (S. 149) oder etabliere ein künftiges Hindernis.",
  "Schneide direkt ins Geschehen, mit den Charakteren am Steuer.",
  "Rufe jederzeit während des Runs ein zusätzliches Auffrischen (S. 13) aus (hilfreich bei längeren Runs!).",
  "Rufe einen Gruppenwurf (S. 148) aus. Das kann eine Szene beschleunigen und vereinfachen."
 ],
 problem:[
  "Verpasse ihnen einen Snag (S. 154).",
  "Verpasse ihnen einen Slam (S. 155).",
  "Oder nimm einfach 1 Bite, den du später einsetzen kannst."
 ],
 bite1:[
  "Ein *überraschendes* Problem (S. 148) einführen.",
  "Ins Geschehen schneiden, mit den Charakteren mitten drin und überfordert.",
  "Eine Bedrohung (und die zugehörige Gefahrenleiste) *plötzlich* voranbringen!"
 ],
 bite2:[
  "Einen sofortigen zusätzlichen Disaster-Wurf gegen einen einzelnen SC erzwingen.",
  "Der Crew eine zufällige Herausforderung bringen (oder etwas mehr zahlen, um eine bestimmte zu wählen)."
 ],
 biteText:"Bite ist eine Ressource, die die SL ausgibt, um Schocks, Überraschungen und andere Herausforderungen einzuführen, die sonst unverdient oder unfair wirken könnten. Nicht jeder Tisch will oder braucht Bite, aber ich finde, er hilft mir, mir weniger Sorgen zu machen und mehr Spaß zu haben.\nBeim Auffrischen (S. 13) sammelt die SL 1 Bite pro Spieler und bekommt zusätzlichen Bite von bestimmten Herausforderungen (S. 27) und Dares (S. 19)."
};
/* Snags, Slams, schlimmere Probleme, Disaster (S. 154–155) */
var SB_GEFAHR = {
 snags:{p:154, t:"Snags", intro:"Snags sind besonders, weil sie mehr Geschichte erzeugen – ein neues Hindernis, eine neue Bedrohung, mehr, das schiefgeht, und mehr Spaß für die Spieler. Anders als Slams werden Snags nicht genopet, denn das würde kommenden Spaß abziehen. Snags eignen sich hervorragend, um spaßige Actionszenen und Begegnungen zu gestalten. Sie können die Action eröffnen, dann weiterentwickeln und ausdehnen. Beispiele:",
  x:["Ein neues, unerwartetes Hindernis oder eine neue Bedrohung wird enthüllt.","Eine Aufgabe wird komplexer oder schwieriger, mit mehr Schritten. Starte oder verlängere eine Fortschrittsleiste.","Eine Situation wird gefährlicher. Alle künftig gewürfelten Probleme sind schlimmer.","Eine große Wendung verändert die Art der Szene und das, was die Charaktere tun müssen.","Ein Besitz geht verloren."]},
 slams:{p:155, t:"Slams", intro:"Slams sind meist einmalige Stiche. Sie sind jederzeit eine starke, einfache Option, funktionieren aber besonders gut, wenn eine Szene enden soll und du sie nicht mit einem weiteren Snag verlängern willst. Slams stehen oft für körperliche Verletzungen, aber vergiss nicht, auch mentale Belastung, Erschöpfung, emotionale Abnutzung, Schäden an der Ausrüstung und Ähnliches einzusetzen.",
  x:["*Angeschlagen, Prellungen, verstauchter Knöchel, zerkratzt, leicht angeröstet, verschleimt, erschöpft.*","*Gestresst, aufgebracht, gedemütigt, abgelenkt, verwirrt.*","*Realitätsschaden, Konzeptverzerrung, zerfallende Logik.*","*Leerer Akku, glitchende Software, gesprungenes Display, kaputte Pistole.*","*Festgenagelt, im Griff, festgesteckt, anvisiert, am Sims hängend.*"],
  n:"Slams wie diese klären sich, wenn sich die Situation ändert."},
 schlimmer:{p:155, t:"Schlimmere Probleme", intro:"In besonders gefährlichen Situationen, etwa wenn jemand einen Trick macht oder nicht vor einem großen, tödlichen Monster wegläuft, liefert ihr schlimmere Probleme. Das kann bedeuten:",
  x:["Zwei normale Probleme.","Alle bekommen einen Slam.","Jemand bekommt einen Super-Slam."],
  nach:"Super-Slams brauchen länger zum Löschen. Der Spieler schreibt den Slam wie gewohnt, aber mit *super* (oder einem anderen verstärkenden Adverb) davor. *Super angeschlagen, super müde, mega wütend* usw. Beim Löschen des Slams wird nur der Verstärker gelöscht. *Super angeschlagen* wird zu *angeschlagen*. Den Rest löscht er beim nächsten Mal.\nSuper-Slams erfordern zusätzliches Noping. Ein Nope vermeidet den Verstärker, zwei Nopes vermeiden alles."},
 disaster:{p:155, t:"Disasters", intro:"Ob ausgelassenes Debakel oder ernüchternder Magenschlag – ein Disaster sollte immer vor künftigem Story-Potenzial strotzen.",
  x:["Andere schwere Ergebnisse wie Herausforderungen oder Super-Slams können manchmal Alternativen zu Doom sein.","Disasters können direkte Folgen der aktuellen Szene sein oder Wendungen aus dem Nichts.","Lass den Spieler seinen eigenen Doom schreiben oder Ideen ablehnen, die für ihn nicht funktionieren. Bring nicht die Eltern um und lass niemanden durch den Peelback vierzig Jahre altern, wenn er nicht darauf steht. Sei bereit, eine Alternative anzubieten."]},
 ideen:[
  ["Verletzung","Du erleidest (oder bemerkst endlich) eine ernste Verletzung. Du musst ins Krankenhaus."],
  ["Verlust","Dein Signatur-Gerät geht verloren, wird beschlagnahmt, gestohlen oder schwer beschädigt."],
  ["Peelback-Schaden","Der Peelback reißt dich gewaltsam nach Hause, belastet Organe, verändert die Physiologie, verwirbelt die Realität oder erschüttert deine Psyche."],
  ["Peelback-Unfall","Der Peelback schleudert dich ins Multiversum, tauscht dich mit einem Alternativ-Ich, verschiebt deine Zeitlinie, öffnet ein Portal in die Hölle genau dort, wo früher dein Zimmer war usw."],
  ["Gefangennahme","Rescue schnappt dich und schleppt dich zur Behandlung, die Arboristen ziehen dich in eine Befragungskammer, du hast Hausarrest bis zur Entrückung usw."],
  ["Persönlich","Die letzte SMS, die du je bekommen wolltest. Du wirst abserviert. Deine Mutter bekommt einen Job im Ausland. Dein Vater findet dein Geheimkonto. Jemand veröffentlicht dieses eine Video."]
 ]
};
/* Disaster-Wurf (S. 21) */
var SB_DISASTERWURF = {
 p:21,
 text:"Würfle 1W6 pro leerem Trouble-Kästchen auf deinem Bogen. Nimm das höchste Ergebnis.",
 e:[
  {k:"6", id:"6", t:"Easy Street.", x:"Vermeide das Disaster und markiere 1 Style."},
  {k:"4–5", id:"45", t:"Close Call!", x:"Vermeide das Disaster, markiere aber 1 Trouble."},
  {k:"1–3", id:"13", t:"Disaster!", x:"Etwas wirklich Schlimmes passiert (S. 155). Markiere Doom."}
 ]
};
