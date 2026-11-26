/* Playwall › D (S. 211–215) */
var TA_PWT = window.TA_PWT || (window.TA_PWT = {});

TA_PWT.D1 = {t:"Tagtraum", s:211, b:[
 {t:"faehig", h:"Tagtraum", x:"Verbinde große Gefühle mit verirrten Gedanken. Bitte ein beliebiges Ziel, etwas zu deuten *(„Wonach sieht diese Wolke für dich aus?“, „Was bedeutet dieses Lied deiner Meinung nach?“, „Was passiert im dritten Akt dieses Stücks?“ usw.)*. Höre dir seine Antwort an und würfle **Subtilität**.",
  erg:[
   ["ok", "**Bei Erfolg** darfst du die Antwort des Ziels zu seiner schlimmsten Angst, seinem größten Ziel oder seinem geheimsten Wunsch machen. *(Seine schlimmste Angst wird zu „eine Katze, die eine Palme frisst“, sein größtes Ziel zu „eine Trennung zu viel“, sein geheimster Wunsch zu „so, ein HAUFEN Morde“ usw.)* Dieser Effekt hält an, bis es das nächste Mal schläft."],
   ["plus", "**Bei Triszendenz** darfst du eine beliebige Facette der Persönlichkeit des Ziels dauerhaft durch seine Antwort ersetzen."],
   ["nein", "**Bei Fehlschlag** erfährt es sofort die wahre Antwort auf die nächste Frage, die es dir stellt, und wird sich dieser Tatsache bewusst."]
  ],
  f:"Ich denke, ein guter Freund zu sein bedeutet, …", a:[["Ihnen beizubringen, sich selbst zu helfen.", "Y3"], ["Zu dem zu werden, was sie brauchen.", "D2"]]}
]};

TA_PWT.D2 = {t:"Tagmacher", s:211, b:[
 {t:"faehig", h:"Tagmacher", x:"Zeig dich von deiner besten Seite. Ändere etwas an deinem Outfit und würfle **Professionalität**.",
  erg:[
   ["ok", "**Bei Erfolg** erscheinst du, wenn du das nächste Mal einen Raum betrittst, allen darin als die Person, die sie gerade am liebsten sehen würden, und zwar als Gruppe. Es kann eine bestimmte Person sein oder ein Typ Mensch *(Klempner, Bassist, Umweltschützer, Präsident usw.)*. Du erhältst kein übernatürliches Gespür für dein Aussehen und musst es aus Hinweisen im Zusammenhang zusammensetzen. Dieser Effekt hält an, bis du den Raum verlässt."],
   ["plus", "**Für jede weitere {3}** darfst du jederzeit, solange dieser Effekt aktiv ist, eines wählen:\nStelle dem GM (oder dem steuernden Spieler) eine direkte Frage, was jemand in der Nähe von dir will, und erhalte eine ehrliche Antwort.\nHabe plötzlich das perfekte Werkzeug, um einen Wunsch zu erfüllen, den die Anwesenden an dich richten.\nBetritt einen weiteren Raum, ohne den Effekt aufzugeben."],
   ["plus", "**Bei Triszendenz** wirst du buchstäblich zu der Person, nach der sie suchen. Du fühlst dich wie ein Beobachter oder Pilot in ihrem Geist, der ihr Verhalten anstoßen kann, aber ohne jede Eingabe handelst du genau wie sie."],
   ["nein", "**Bei Fehlschlag** wirst du zu der Person, die sie am liebsten sehen würden, und der Effekt hält an, bis du das nächste Mal schläfst. Alle werden glauben, du seist diese Person oder dieser Typ Mensch, und du weißt womöglich nicht einmal, wer oder was das ist. Wahrscheinlich entstehen Lose Enden, wenn du eine Kopie einer bestimmten Person bist oder dir die Fertigkeiten für den Typ Mensch fehlen, zu dem du geworden bist."]
  ]}
]};

TA_PWT.D3 = {t:"Der Tod persönlich", s:211, b:[
 {t:"faehig", h:"Der Tod persönlich", x:"Wirst du Zeuge eines Todes, darfst du die verstorbene Person unversehrt ins Leben zurückholen, indem du die Todesursache auf irgendein Stück Papier schreibst und **Professionalität** würfelst.",
  erg:[
   ["ok", "**Bei Erfolg** kehrt das Ziel ins Leben zurück, doch die Schuld muss beglichen werden: Innerhalb von 24 Stunden musst du den Namen von jemandem aufschreiben, mit dem du heute zu tun hattest, sonst stirbt das ursprüngliche Ziel erneut. Die Person, deren Namen du aufgeschrieben hast, stirbt dann innerhalb der folgenden 24 Stunden."],
   ["plus", "**Für jede weitere {3}** darfst du weitere 24 Stunden warten, bevor du den neuen Namen aufschreibst."],
   ["plus", "**Bei Triszendenz** darfst du einen Aufsatz darüber schreiben, was dir das Ziel bedeutet, statt den unter „Bei Erfolg“ genannten Preis zu zahlen."],
   ["nein", "**Bei Fehlschlag** löst du eine plötzliche Todesepidemie auf die beschriebene Weise aus. GMs müssen für den Rest des Einsatzes kein Chaos ausgeben, um den Chaos-Effekt „Töten“ zu nutzen, solange die Person auf die von dir aufgeschriebene Weise stirbt."]
  ]}
]};

TA_PWT.D4 = {art:"rang", t:"Senior-Sachbearbeiter", s:212, b:[
 {t:"sp", x:[
  ["**Glückwunsch zu deiner akzeptablen Leistung, Senior-Sachbearbeiter!**",
   "Nachdem du deine Kompetenz und dein Engagement unter Beweis gestellt hast, freuen wir uns, dir deine private Einladung zu unserer hauseigenen Triangle-Agency-App sowie weitere Informationen über die von uns erforschten Anomalien zu übermitteln.",
   {t:"h3", x:"Triage"},
   "Diese Social-Media-Plattform mit Nachrichtendienst erlaubt es dir, überall dort die Zentrale der Agency zu kontaktieren, wo du Mobilfunkempfang hast – das heißt, du kannst nun jederzeit Anforderungen kaufen, und sie erscheinen an einem bequemen, unauffälligen Ort in der Nähe.",
   "**Triage bietet die folgenden Werkzeuge, nutzbar auf jedem Smartphone:**",
   {t:"liste", x:["**OPUS** liefert eine rasche Zusammenfassung dessen, worüber die Menschen in deiner Stadt heute online sprechen und nachdenken.", "**GRETA** erlaubt es dir, die IP-Adresse, E-Mail-Adresse oder den vollständigen Namen eines Nutzers einzugeben und rasch eine Kurzbiografie samt Notizen zu seiner jüngsten Internetaktivität zu erhalten.", "**BIX** ist ein einfach zu bedienender, aber funktionsreicher Fotoeditor."]}],
  [{t:"h3", x:"Ripples: Die erste Stufe"},
   "Die Anomalien, mit denen du und deine Mitagenten bisher zu tun hatten, sind nicht die erste Form, in der sich anomale Energie zeigt.",
   "Für fast jeden zusammenhängenden Gedanken eines denkenden Geistes entsteht ein unterwirkliches Wesen, ein sogenanntes **Ripple**. Ripples werden nicht direkt in die Realität geboren; sie existieren in einem Parallelraum, den wir die **Lobby** nennen.",
   "Stärkere Ripples fressen solche, die aus schwächeren, ähnlichen Gedanken entstanden sind. Gewinnt ein Ripple genug Kraft, um von allein in die Realität durchzubrechen, wird es zur Anomalie. Dort besitzt die Anomalie eine Art Schwerkraft: Sie fängt Gedanken und Gefühle in der Nähe ab, bevor sie zu Ripples werden. Gedanken, die zum Fokus der Anomalie passen, nähren sie unmittelbar und halten sie am Leben, ganz so, wie Nahrung es bei Lebewesen tut.",
   "Allein sind junge Ripples nicht besonders gefährlich. Indem wir sie aus der Lobby ziehen, bevor sie die Chance haben zu wachsen, können wir sie nutzen, um viele einfache Anforderungen anzutreiben, etwa die Ripple Gun, die du bereits führst.",
   "Du bist nun eingeladen, die folgenden Ripple-betriebenen Anforderungen zu kaufen. Der Hunger der Ripples nach Resonanz bedeutet, dass sie eine mächtige Wirkung im Austausch für Qualitätssicherungen bestimmter Geschmacksrichtungen liefern."]
 ]},
 {t:"bild", src:"playwall-d4-anforderungen-haufen", pos:"mitte", w:520},
 {t:"preis", x:[
  {h:"iPond", p:"9", bild:"playwall-d4-ipond", b:["Dieses unbeschriebene Ripple sieht aus wie ein Goldfisch in einem Wasserbeutel. Gibst du eine Qualitätssicherung aus Subtilität oder Empathie aus, kannst du eine rasche Aufzeichnung aller Sinne von bis zu fünf Minuten Länge von einer jüngeren Erinnerung eines Menschen erstellen, der den Beutel berührt. Das Ripple verändert sein Aussehen leicht, um das Erlebnis widerzuspiegeln. Jeder kann eine im iPond gesammelte Erinnerung vollständig abspielen, indem er über an das Ripple angeschlossene Kopfhörer zuhört. Das Aufzeichnen einer Erinnerung überschreibt die vorherige."]},
  {h:"Gripples", p:"15", b:["Gibst du eine Qualitätssicherung aus Dynamik oder Initiative aus, können diese klebrigen Zehenschuhe dich so ausrichten, dass du die nächste ebene und stabile Fläche als „unten“ behandelst, und dich dort fest verankern. So kannst du selbstbewusst an Gebäudewänden, Decken oder auf fahrenden Fahrzeugen gehen. Lassen sich bei Nichtgebrauch unter anderen Schuhen tragen. Auch erhältlich als Reifenprofile für Rollstühle oder als Aufsätze für andere persönliche Mobilitätshilfen."]},
   {h:"Li'l Rebels – Sprechende Puppen", p:"9", b:["Diese Reihe von Kinderpuppen bietet ein vollständig anpassbares Aussehen und Outfit. Wird die Puppe durch Ausgeben einer Qualitätssicherung aus einer beliebigen Qualität aktiviert, beteiligt sie sich an jedem an sie gerichteten Gespräch mit einer Persönlichkeit, die dieser Qualität entspricht. Zusätzlich darfst du beim Aktivieren der Puppe eine zweite Qualitätssicherung aus Professionalität ausgeben, um sie mit deiner eigenen Sprechstimme, deinen Eigenarten und Erinnerungen zu erfüllen. Dieser Effekt hält bis zu 8 Stunden an."]},
  {h:"Der Türsteher", p:"6", b:["Diese ungewöhnlich weiche Actionfigur steckt Schaden mühelos weg. Du darfst eine Qualitätssicherung aus Präsenz oder Beharrlichkeit ausgeben und die Actionfigur in einen Türrahmen stellen, um den Raum dahinter zum Sperrbereich zu erklären. Die Actionfigur wächst zu einem glaubwürdig muskulösen Menschen in Anzug und Sonnenbrille heran, der gerade groß genug ist, um den Türrahmen auszufüllen. Er ist unverrückbar und reagiert auf keinerlei Gesprächsversuche. Alle auf ihn abgefeuerten Geschosse prallen mit identischer Geschwindigkeit in die Richtung zurück, aus der sie abgefeuert wurden. Dieser Effekt hält bis zu eine Stunde an, kann aber jederzeit aufgehoben werden."]},
  {h:"AnglerVision", p:"6", bild:"playwall-d4-anglervision", b:["Dieses anglerfischartige Wesen trägt an einem Fortsatz auf der Stirn einen kleinen Projektor. Gibst du eine Qualitätssicherung aus Doppelzüngigkeit oder Aufmerksamkeit aus, kannst du bis zu neun deutliche, klare Bilder auf eine beliebige Fläche in beliebiger freier Entfernung projizieren. Diese Bilder können Vorgaben sein *(„etwas Gruseliges“)*, bestimmte Bilder aus den Erinnerungen des Nutzers, oder man stellt auf „automatisch“, dann wechselt es am Ende der nächsten neun selbstbewusst gesprochenen Sätze zu etwas Passendem."]}
 ]}
]};

TA_PWT.D5 = {t:"Zeitzünder", s:214, b:[
 {t:"faehig", h:"Zeitzünder", x:"Eliminierst oder tötest du ein Ziel, darfst du eine perfekte Kopie dieses Ziels als Trophäe freisetzen und **Doppelzüngigkeit** würfeln.",
    erg:[
     ["ok", "**Bei Erfolg** verhält sich die Trophäe genau so, wie das Ziel es normalerweise täte, mit unveränderter Persönlichkeit und Erinnerung, als wärst du ihm nie begegnet, bis zu einem von dir festgelegten Zeitpunkt innerhalb von 24 Stunden. Dieser Zeitpunkt kann durch Bedingungen statt durch genaue Augenblicke bestimmt werden *(„wenn die Fracht ankommt“, „sobald der Raum sich leert“, „nachdem du drei Katzen gesehen hast“)*. Wenn dieser Zeitpunkt eintritt, wird sie plötzlich und gewaltsam so getötet oder eliminiert, wie es das Ziel wurde."],
     ["plus", "**Für jede weitere {3}** darfst du ein zusätzliches Ziel in der Nähe der Trophäe zum Zeitpunkt ihrer Detonation wählen, das ebenfalls getötet oder eliminiert wird. Diese zusätzlichen Ziele gelten für die Zwecke deiner anderen Anomalie-Fähigkeiten als von deiner Gun getötet oder eliminiert."],
     ["nein", "**Bei Fehlschlag** verhält sich das Ziel normal und detoniert zu einem Zeitpunkt, den du nicht bestimmt hast und der jederzeit zwischen jetzt und einem Jahr ab jetzt liegen kann. Es ist gegen alle künftigen Wirkungen deiner Gun immun."]
    ],
    f:"*Nur du beantwortest diese Frage. Sei auf ernste Folgen gefasst, wenn du es tust.*\nBereust du es?", a:[["Ja.", "W2", 1], ["Nein."]]}
]};

TA_PWT.D6 = {t:"Vereidigen", s:214, b:[
 {t:"faehig", h:"Vereidigen", x:"Wenn du Offen getragen einsetzt, darfst du die aufgeführten Folgen durch die folgenden ersetzen. Wählst du eine dieser Folgen, hält ihre Wirkung an, bis du das nächste Mal eine dieser Folgen wählst.",
  erg:[],
  b:[{t:"liste", x:["Das Ziel (die Ziele) wird (werden) Verbündete für deine Sache sammeln.", "Das Ziel (die Ziele) wird (werden) alles tun, um deine Spuren zu verwischen.", "Das Ziel wird sofort zu einer Beziehung mit 1 Verbindung und verleiht für den Rest dieses Einsatzes einen Beziehungsbonus, den der GM anhand seiner Talente und seiner Persönlichkeit wählt. *(Wenn dieser Effekt endet, verliert es 1 Verbindung. Sinkt sie dadurch auf 0, verlierst du es als Beziehung.)*", "Das Ziel wird dich um einen langfristigen Auftrag bitten, den es zu deiner Unterstützung übernehmen kann, und sein Leben der Erfüllung dieses Auftrags widmen."]}],
  f:"Ich helfe meinen Freunden, indem ich …", a:[["Meine Fähigkeiten teile.", "P3"], ["Ihre Fehler ausbügle.", "B10"]]}
]};

TA_PWT.D7 = {t:"Fußabtreter", s:214, b:[
 {t:"faehig", h:"Fußabtreter", x:"Hast du eine deiner Drain-Fähigkeiten erfolgreich auf ein gewöhnliches Ziel angewandt, kannst du es zu deinem neuen Fußabtreter erklären. Würfle je nach Art eurer Beziehung **Empathie**, **Präsenz** oder **Dynamik**.",
    erg:[
     ["ok", "**Bei Erfolg** wird das Ziel dein Fußabtreter oder ersetzt deinen bisherigen. Dein Fußabtreter widmet sich ganz deinen Bedürfnissen, schafft Situationen, in denen du dich wohlfühlst, und unterstützt dich schon bei den kleinsten nötigen Anweisungen. Wird er nicht gebraucht, tritt er in den Hintergrund und hört nicht zu, es sei denn, es wird von ihm erwartet. Solange er dein Fußabtreter bleibt, erzeugt er kein Loses Ende."],
     ["plus", "**Bei Triszendenz** kannst du diese Fähigkeit auf beliebig viele gewöhnliche Personen anwenden, die dich sehen können. Sie alle werden zu Fußabtretern. Wählst du das nächste Mal einen Fußabtreter, werden alle verbliebenen Fußabtreter dieser Gruppe freigegeben.\nEin mit **Empathie** gewonnener Fußabtreter glaubt, dass du ihm mit dieser Abmachung hilfst. Behandelst du ihn grausam oder zerstörst offensichtlich diese Illusion, endet der Effekt.\nEin mit **Präsenz** gewonnener Fußabtreter hält dich für eine Führungsperson mit gebieterischer Ausstrahlung oder einem Maß an Fachwissen oder Genialität, dem er gern folgt. Führst du ihn in eine tollkühne oder dumme Lage, endet der Effekt.\nEin mit **Dynamik** gewonnener Fußabtreter fürchtet sich vor dir und davor, was geschieht, wenn er nicht in deinem Dienst handelt. Bist du nachsichtig mit ihm, endet der Effekt.\nWerden sie ersetzt und lag die Situation weit außerhalb ihrer typischen Persönlichkeit oder Komfortzone, werden sie zu Losen Enden."],
     ["nein", "**Bei Fehlschlag** wird es dir äußerst verlockend, die Wünsche des Ziels zu erfüllen. Für den Rest des Tages leidest du jedes Mal unter einem Burnout, wenn du auf eine Weise handelst, die nicht unmittelbar den Wünschen des Ziels dient."]
    ]}
]};

TA_PWT.D8 = {t:"Dramaturg", s:215, b:[
 {t:"faehig", h:"Dramaturg", x:"Träume und Geschichten kommen vom selben Ort. Die Figuren, die sie heimsuchen, leben ebenfalls dort. Du erhältst Zugriff auf **Masken**, die den Figuren, die in Träumen leben, als Anker dienen, um mit unserer Welt zu interagieren. Setze einem schlafenden Ziel eine Maske auf und würfle **Empathie**.",
    erg:[
     ["ok", "**Bei Erfolg** haftet die Maske am Gesicht des Schlafenden. Er wird mit einer der folgenden Persönlichkeiten erfüllt, die den Körper des schlafenden Ziels steuern:\n**Arlecchino** ist kreativ und neugierig, aber unernst. Arlecchino ist hervorragend darin, für Ablenkung zu sorgen, aber furchtbar im Multitasking und völlig ohne Selbsterkenntnis.\n**Capitano** ist störrisch, herzhaft und einschüchternd, aber leicht beleidigt und lässt sich bei Provokation oft ablenken.\n**Die Innamorati** sind zwei Masken, die ineinander verliebt sind. Allein sind sie charmant und einnehmend, aber sehr wählerisch, mit wem und was sie sich abgeben, und machen sich ungern die Hände schmutzig. Werden beide auf verschiedene Schlafende gesetzt, beginnen sie, alle in der Nähe anzuwerben, damit sie ihnen helfen, die perfekte Hochzeitszeremonie zu gestalten – ein endloser Prozess.\n**Dottore** kann über eine Vielzahl von Themen sachkundig und glaubwürdig klingen, selbst wenn er Unsinn redet, ist aber schwer abzuwimmeln, sobald er sich für etwas interessiert.\nDie Persönlichkeiten der Masken begegnen dir warmherzig und sind geneigt, dir zu helfen. Ihre Erinnerungen sind jedoch genauso beständig wie deine: Sie merken sich, ob sie gut oder schlecht behandelt werden, und antworten dir jedes Mal, wenn sie gerufen werden, in gleicher Weise.\nDieser Effekt endet, und das Ziel erwacht, wenn die Maske abgenommen wird oder du ihn beendest."],
     ["plus", "**Bei Triszendenz** darfst du beliebig viele Masken an beliebigen Personen in der Nähe anbringen, schlafend oder nicht, und sie schlafen ein und werden mit einer der Persönlichkeiten erfüllt."],
     ["nein", "**Bei Fehlschlag** erwacht das Ziel. Deine Masken zerbrechen, und die Persönlichkeiten stehen dir erst wieder zur Verfügung, wenn du etwas getan hast, um sie wieder auf deine Seite zu holen:\n**Arlecchino:** Spiele jemandem mit Macht über dich einen Streich.\n**Capitano:** Lass dich für etwas loben, das du nicht getan hast, oder für eine Eigenschaft, die du nicht besitzt.\n**Die Innamorati:** Geh auf ein Date.\n**Dottore:** Beteilige dich an einem kleinlichen Streit."]
    ]},
 {t:"faehig", h:"Schläfchenzeit", x:"Füge außerdem Schläfchenzeit den folgenden Text hinzu:",
    erg:[["plus", "**Bei jeder dritten {3}** darfst du einem schlafenden Ziel eine Maske aufsetzen. Sie bleibt auf ihm bis zum Ende der Schläfchenzeit."]],
    f:"Ich glaube, tief im Innern sind Menschen meist gleich.", a:[["Wahr.", "P14"], ["Falsch.", "M5"]]}
]};
