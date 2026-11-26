/* Playwall › C (S. 207–210) */
var TA_PWT = window.TA_PWT || (window.TA_PWT = {});

TA_PWT.C1 = {t:"Darf ich mal?", s:207, b:[
 {t:"faehig", h:"Darf ich mal?", x:"Fragen schadet nie. Geh auf jemanden zu, der gerade etwas tut oder tun will, und frag: „Darf ich mal?“ Würfle **Initiative**.",
  erg:[
   ["ok", "**Bei Erfolg** hört die Person auf, was sie gerade tat (oder tun wollte oder bewachte), und lässt dich es stattdessen tun *(sich im Bus hinsetzen, den Feuerlöscher nehmen, den Hebel ziehen, der über Leben und Tod entscheidet usw.)*. Sie tritt gern beiseite."],
   ["plus", "**Bei jeder dritten {3}** wähle eines:\nEin Verbündeter von dir darf ebenfalls mitmachen oder vor dem Ziel an die Reihe kommen.\nDu darfst eine weitere Tätigkeit ausüben, die es dir normalerweise nicht erlauben würde.\nDu kannst dem Ziel in der Zwischenzeit etwas zu tun geben."],
   ["plus", "**Bei Triszendenz** kannst du sagen: „Probier du das mal!“ und einen beliebigen Vorschlag machen, was die Person tun soll, während du ihre Sache ausprobierst. Sie wird es tun."],
   ["nein", "**Bei Fehlschlag** lassen sie dich nicht – und wenn du an die Tätigkeit denkst, die du ausüben wolltest, wirst du so müde. Zu müde, um diese Tätigkeit für den Rest des Einsatzes auch nur in Betracht zu ziehen."]
  ],
  f:"Wenn ich keine haben kann …", a:[["Soll auch niemand welche haben.", "T1"], ["Muss ein Irrtum vorliegen. Ich kann welche haben.", "I1"]]}
]};

TA_PWT.C2 = {t:"Gefesseltes Publikum", s:208, b:[
 {t:"faehig", h:"Gefesseltes Publikum", x:"Wenn du redest, bleibt ihnen nichts anderes übrig, als zuzuhören. Beginne, zu einem Ziel zu sprechen, und würfle **Präsenz**.",
    erg:[
     ["ok", "**Bei Erfolg** kann sich das Ziel, solange du sprichst, nicht bewegen, nicht sprechen und dich nicht ignorieren. Berührst du oder jemand anderes es körperlich oder fügt ihm in irgendeiner Weise Schaden zu, endet der Effekt."],
     ["plus", "**Für jede weitere {3}** darfst du diesem Effekt ein Ziel hinzufügen, das ebenfalls gefesselt ist, solange du sprichst."],
     ["plus", "**Bei Triszendenz** darfst du allen von dieser Fähigkeit betroffenen Zielen einen einfachen Befehl erteilen *(„Setz dich.“, „Schreib dein Passwort auf.“, „Gib mir das Messer.“ usw.)*, und sie befolgen ihn nach besten Kräften.\nAußerdem darfst du beim Sprechen bis zu dreißig Sekunden zwischen Wörtern oder Wendungen pausieren, ohne diesen Effekt zu beenden."],
     ["nein", "**Bei Fehlschlag** sind alle in Hörweite für den Rest des Einsatzes immun gegen deine Whisper-Kräfte."]
    ]}
]};

TA_PWT.C3 = {t:"Behutsames Amalgam", s:208, b:[
 {t:"faehig", h:"Behutsames Amalgam", x:"Wähle zwei deiner Spleiße und stell dir vor, was sie gemeinsam sein könnten. Wähle ein Körperteil, aus dem sie austreten, und würfle **Subtilität**.",
    erg:[
     ["ok", "**Bei Erfolg** verlierst du sie als Spleiße und setzt sie als vereinigtes **Amalgam** frei. Das Amalgam folgt deinen Befehlen und hält sich für so etwas wie dein Kind. Es kann nicht in deinen Körper zurückgeführt werden.\nDie Eigenschaften des Amalgams müssen im Spielraum der Spleiße liegen, nicht in ihrer Summe. Hast du etwa aus einer Ameise und einem Elefanten ein Amalgam erschaffen, kann es irgendwo zwischen der Größe einer Ameise und der eines Elefanten liegen, aber nicht größer als der ursprüngliche Elefant oder kleiner als die Ameise.\nEin Amalgam aus Mensch und Tiger könnte kein, etwas oder ganz gestreiftes Fell haben. Ein Amalgam aus zwei Menschen könnte nicht die zusammengerechnete Größe zweier Menschen haben."],
     ["plus", "**Für jede weitere {3}** kannst du dem Amalgam einen weiteren Spleiß hinzufügen."],
     ["plus", "**Bei Triszendenz** verlierst du die Spleiße bei Anwendung dieser Fähigkeit nicht als Spleiße."],
     ["nein", "**Bei Fehlschlag** ist es dir nicht gelungen, die Geister zu beherrschen, die du in dir gehalten hast. Ihre Triebe, Ängste und Wünsche verschmelzen zu einem Anomalie-Amalgam mit einem Fokus und einer Domäne, die einzigartig für die Kombination der Spleiße sind, die du gerade in dir trägst. Es mag dich nicht."]
    ]}
]};

TA_PWT.C4 = {t:"Neue Freunde", s:208, b:[
 {t:"sp", x:[
  ["**Verständliche Entscheidung, Agent.**",
   "In der Laufbahn jedes Außendienst-Agenten kommt eine Zeit, in der er sich daran erinnern muss, wofür er arbeitet. Du hast diesen Punkt vermutlich nach deinem fünften oder sechsten erfolgreichen Einsatz erreicht, und vor diesem Hintergrund ist das völlig nachvollziehbar!",
   "Unsere Arbeit besteht darin, die Realität zu schützen, da kann es helfen, sich zu erinnern, was Realität für dich bedeutet! Vor allem können die Menschen in deinem Leben deiner Arbeit nützlich sein. Zu diesem Zweck haben wir ein verschlanktes System zum Hinzufügen neuer Beziehungen entwickelt, das die Spielmechanik beschleunigt und einen sonst unübersichtlichen und komplizierten Vorgang vereinfacht.",
   "Wir hoffen, dass dich das Wissen, dies tun zu können, schon für sich genommen zufriedenstellt – und freuen uns darauf, dich in fünf oder sechs erfolgreichen Einsätzen wieder hier zu sehen!"],
  [{t:"h3", x:"Neue Freunde"},
   "Wenn du Zeit auf deine Realität verwendest, kannst du stattdessen deine Verbindung zu jemandem hinzufügen, der keine Beziehung ist, und so einen **Neuen Freund** erschaffen.",
   "Benenne zunächst eine Person, mit der du in einem früheren Einsatz zu tun hattest, als neue Beziehung für dich. Diese Person entscheidet dann, ob sie bereit ist, weiter mit dir als Freund, Rivale, Schwarm, Verantwortung oder etwas anderem zu verkehren. Ist sie es, füge sie als Beziehung mit einer Verbindung hinzu. Weise ihr einen Verbindungsbonus zu, der dir in deinem nächsten Einsatz zur Verfügung steht.",
   "Die meisten auf diese Weise hinzugefügten Neuen Freunde stehen bei der ersten Begegnung unter der Kontrolle des GM, doch sobald sie zu einer Beziehung werden, empfehlen wir, die Steuerung dieser Figur einem anderen Spieler am Tisch zu übertragen.",
   "Ist diese Person nach Ansicht des GM oder des steuernden Spielers nicht willens oder nicht verfügbar, verlierst du die Verbindung nicht und kannst deine Zeit anders verwenden.",
   "Dein Netzwerk fügt bei Nutzung dieser Funktion ganz normal Verbindung hinzu."]
 ]}
]};

TA_PWT.C5 = {t:"Leitspruch", s:209, b:[
 {t:"sp", x:[
  ["Schreibe jederzeit zu Beginn eines jeden Einsatzes, vor dem Ende der Einsatzbesprechung, heimlich bis zu sechs verschiedene Dreiwortsätze irgendwo auf. *(„Da sagte ich“, „mein Erdferkel lacht“, „bis zum letzten“ usw.)* Keiner der Sätze darf ein Wort mit einem anderen gemeinsam haben, und sie sollten an einem öffentlich sichtbaren Ort verborgen werden, damit sie nach der Einsatzbesprechung nicht mehr geändert werden können.",
   "Sagt zu irgendeinem Zeitpunkt während der Ermittlung dieses Einsatzes dein GM oder ein anderer Spieler wortwörtlich einen dieser Sätze, zeige der Gruppe diesen Satz."],
  ["Danach erreicht dein nächster Wurf automatisch Triszendenz. Ist ein Satz auf diese Weise verwendet worden, kann er mit dieser Fähigkeit nie wieder verwendet werden.",
   "Verrätst du versehentlich Hinweise oder Einzelheiten zu deiner Auswahl, bevor sie enthüllt werden, kannst du den Effekt in diesem Einsatz nicht mehr erhalten. Enthülle sofort alle gewählten Sätze vor deiner Gruppe. Jedes Mal, wenn ein anderer Spieler einen der Sätze sagt, füge dem Chaos-Pool 10 Chaos hinzu."]
 ]}
]};

TA_PWT.C6 = {t:"Kreideumriss", s:209, b:[
 {t:"faehig", h:"Kreideumriss", x:"Du kannst einen Raum, in dem du dich befindest, bestimmen und einen bleibenden Eindruck hinterlassen. Breite dich auf dem Boden aus und würfle **Aufmerksamkeit**.",
  erg:[
   ["ok", "**Bei Erfolg** erhält für den Rest des laufenden Einsatzes jeder, der diesen Raum betritt, durchquert oder sonst mit ihm in Berührung kommt, eine starke Eingebung. Wähle einen der folgenden Eindrücke:\n– Die Identität einer relevanten Person\n– Das Gefühl, an einem bestimmten Ort zu sein (den du zuvor erlebt hast)\n– Dein aktueller Gemütszustand (bei Anwendung dieser Fähigkeit)\n– Ein Befehl aus drei Wörtern\n– Was du in diesem Raum getan hast\n– Ein berühmtes Zitat (beliebiger Länge)"],
   ["plus", "**Bei jeder dritten {3}** darfst du einen weiteren Eindruck wählen."],
   ["plus", "**Bei Triszendenz** bleibt deine Gegenwart für immer im Raum haften: Jeder, der je hindurchgeht, erhält deinen Eindruck."],
   ["nein", "**Bei Fehlschlag** erhält jeder, der mit diesem Raum in Berührung kommt, eine starke Eingebung über deine Identität und anomale Natur. Man wird dich für gefährlich, nicht vertrauenswürdig und unmenschlich halten, sollte man dir künftig begegnen."]
  ],
  f:"Wenn ich wählen müsste, nähme ich …", a:[["Das Schloss.", "V1"], ["Den Schlüssel.", "F11"]]}
]};

TA_PWT.C7 = {t:"Wechselbalg", s:209, b:[
 {t:"faehig", h:"Wechselbalg", x:"Sie haben sich ohnehin kaum selbst benutzt. Schiebe ein gewöhnliches Ziel über eine Schwelle und würfle **Doppelzüngigkeit**.",
    erg:[
     ["ok", "**Bei Erfolg** wird das Ziel Anderswo hingeschickt. Du erhältst die Fähigkeit, dich jederzeit in diese Person zu verwandeln und dir ihr Aussehen und ihre körperlichen Attribute zunutze zu machen."],
     ["plus", "**Bei sechs oder mehr {3}en** stehen dir die Attribute dieses Ziels als einzelne Teile zur Verfügung. Wenn du diese Fähigkeit künftig nutzt, um dich in ein anderes Ziel zu verwandeln, darfst du auch Teile der körperlichen Attribute dieses Ziels hinzufügen und so nach deinen Vorgaben ein Amalgam aus beiden Zielen werden."],
     ["nein", "**Bei Fehlschlag** kann das Ziel nie zurückkehren. Die Version von ihm, in die du dich verwandeln kannst, hat etwas beunruhigend Falsches an sich."],
     ["txt", "Möchtest du ein Ziel nach einem Erfolg zurückbringen, würfle **Doppelzüngigkeit**."], ["ok", "**Bei Erfolg** kehrt es genau dorthin zurück, wo du es hingebracht hast, und du verlierst die Fähigkeit, dich in es zu verwandeln. Es ist gealtert. Es war Anderswo. Du hast keine Kontrolle darüber, wo das war."],
     ["plus", "**Bei sechs oder mehr {3}en** hast du vollständige Kontrolle darüber, wo das war."],
     ["nein", "**Bei Fehlschlag** kehrt stattdessen etwas anderes von Anderswo zurück."]
    ]}
]};

TA_PWT.C8 = {t:"Zifferblatt", s:210, b:[
 {t:"faehig", h:"Zifferblatt", x:"Du erschaffst ein mächtiges Artefakt und kannst es nun führen: das **Zifferblatt**. Das Zifferblatt ist ein großer, runder Schild, der sich bequem an einer Gliedmaße festschnallen lässt. Wehrst du mit dem Zifferblatt einen Angriff ab, würfle **Beharrlichkeit**.",
  erg:[
   ["ok", "**Bei Erfolg** wird der Angriff auf den Angreifer zurückgeworfen, und sein ursprüngliches Ziel bleibt unversehrt."],
   ["plus", "**Bei jeder dritten {3}** darfst du eines der Folgenden wählen:\n**Schreibblockade:** Es ist {3} Uhr morgens, und der Angreifer verliert den Faden des Plans, der ihn überhaupt erst zu dem Angriff geführt hat.\n**Morgenkaffee:** Es ist 7:45 Uhr, und beliebig viele nahe Ziele deiner Wahl sind voller Energie und Konzentration und können mit relativ wenig Übung komplexe, koordinierte Manöver ausführen.\n**12 Uhr mittags:** Es ist 12 Uhr. Jeder in der Nähe, der nicht du oder der Angreifer ist, hält inne und sieht euch beim Duell zu, bis einer als Sieger hervorgeht.\n**Hier ist es fünf Uhr:** Es ist 17 Uhr. Deinen Angreifer erfasst eine Welle aus Trägheit und Ruhe. Selbst wenn er weiterhin zum Kampf entschlossen ist, schwächt und verlangsamt ihn die Trägheit."],
   ["plus", "**Bei Triszendenz** nimmst du dem Ziel Zeit: Es altert um ein Jahr, und du wirst ein Jahr jünger."],
   ["nein", "**Bei Fehlschlag** gelingt es dir nicht, den Angriff aufzuhalten. Statt die normalen Wirkungen dieses Schadens zu erleiden, hörst du für jeden vom Angriff verursachten Schaden eine Stunde lang auf zu existieren. Wenn du zurückkehrst, bist du an derselben Stelle."]
  ],
  b:["Besitzt du [[B4]], [[L5]] und [[C8]], erhältst du [[R15]]."]}
]};

TA_PWT.C9 = {t:"Kollateralschaden", s:210, b:[
 {t:"faehig", h:"Kollateralschaden", x:"Würde ein Effekt ein Ziel Eliminieren, kann er stattdessen eine Raumkugel Eliminieren, die am Einschlagpunkt zentriert ist und deren Durchmesser in Metern gemessen wird. Der Durchmesser beträgt zwei Meter pro gewürfelter {3}.",
  erg:[],
  f:"*Nur du beantwortest diese Frage. Sei auf ernste Folgen gefasst, wenn du es tust.*\nBereust du es?", a:[["Ja.", "W2", 1], ["Nein."]]}
]};

TA_PWT.C10 = {t:"Crashkurs", s:210, b:[
 {t:"faehig", h:"Crashkurs", x:"Wirst du von einem Feind angegriffen, nimm den Treffer hin und würfle **Dynamik**.",
    erg:[
     ["ok", "**Bei Erfolg** erschaffst du einen Raum außerhalb der Zeit, um den Angriff vollständig zu studieren und die perfekte Gegenwehr dagegen zu üben. Verdreifache den Schaden, der dir zugefügt wird, aber schreibe auf, auf welche Weise du verletzt wurdest. *(Schwerthieb, Blitzschlag, einstürzendes Gebäude usw.)*"],
     ["plus", "**Bei Triszendenz** offenbart dein Studium die Schwächen des Ziels. Jederzeit, wenn du körperlichen Zugang zum feindlichen Ziel hast, darfst du jeden Schaden verhindern, den es dir zufügen würde, und ihm mit nahezu keiner Mühe tödlichen Schaden zufügen."],
     ["nein", "**Bei Fehlschlag** friert die Zeit für alle außer dir und dem, der dir Schaden zugefügt hat, ein. Ihr kehrt beide erst zum normalen Lauf der Zeit zurück, wenn einer von euch tot oder zerstört ist."],
     ["txt", "Immer wenn dir von irgendjemandem auf genau dieselbe Weise Schaden zugefügt wird wie bei einem Schaden, den du aufgeschrieben hast, aktiviere diese Fähigkeit mit dem folgenden angepassten Text: Versucht es jemand erneut, würfle **Dynamik**."], ["ok", "**Bei Erfolg** verringere den Schaden um eins für jede gewürfelte {3}. Sinkt der Schaden dadurch ins Negative, kannst du ihren Angriff auf sie zurückwerfen und entsprechend viel Schaden als Antwort zufügen."],
     ["nein", "**Bei Fehlschlag** friert die Zeit für alle außer dir und dem, der dir Schaden zugefügt hat, ein. Ihr kehrt beide erst zum normalen Lauf der Zeit zurück, wenn einer von euch tot oder zerstört ist."]
    ],
    f:"Wenn ich ins Hintertreffen gerate, …", a:[["Lasse ich andere auf mich warten.", "R5"], ["Treibe ich mich an die Grenze.", "P2"]]}
]};
