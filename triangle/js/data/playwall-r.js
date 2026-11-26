/* Playwall › R (S. 259–263) */
var TA_PWT = window.TA_PWT || (window.TA_PWT = {});

TA_PWT.R1 = {t:"Ins Messer gelaufen", s:259, b:[
 {t:"faehig", h:"Ins Messer gelaufen", x:"Wenn jemand weder auf dich noch auf seine Umgebung achtet, kannst du „Warte! Halt!“ sagen und **Initiative** würfeln.",
  erg:[
   ["ok", "**Bei Erfolg** beschreibe, wie das Ziel in eine Gefahr hineingetreten ist (ein Messer, ein aufgesperrter Rachen, ein fahrender Zug), die bereits dort war. Sie kann dem Ziel bis zu 1 Schaden zufügen."],
   ["ok", "**Stirbt das Ziel durch diesen Effekt,** stärkt dich der Verlust. Markiere ein Kästchen auf der folgenden Leiste. Du kannst jederzeit eine Markierung löschen, um dem Schaden, den du mit dieser Fähigkeit verursachst, 1 Schaden hinzuzufügen. Lösche volle 10 Markierungen, um UNL3ASH (Dokument hinter der Playwall [[U2]]) zu aktivieren."],
   ["plus", "**Bei jeder dritten {3}** darfst du beschreiben, wie die Gefahr dem Ziel oder seiner Umgebung außerdem eine Katastrophe bereitet, die nichts mit Schaden zu tun hat."],
   ["nein", "**Bei Fehlschlag** macht dich dein Selbstvertrauen angreifbar. Das Ziel war auf das vorbereitet, was du versucht hast, und fügt stattdessen dir Schaden zu."]
  ],
  b:[{t:"spur", h:"Leiste", x:["1","2","3","4","5","6","7","8","9","10"]}]}
]};

TA_PWT.R2 = {t:"Arbeitsspeicher", s:259, b:[
 {t:"faehig", h:"Arbeitsspeicher", x:"Beschreibt jemand eine Erinnerung, speichere sie in einem Ordner. Berühre ihn mit einem beliebigen Gerät mit Datenspeicher *(Kamera, Handy, CD usw.)* und würfle **Empathie**.",
  erg:[
   ["ok", "**Bei Erfolg** verliert das Ziel die gesamte Erinnerung, und du erhältst sie als Datei auf diesem Gerät. Tippst du mit dem Gerät eine andere Person an (auch dich selbst), erhält diese Person die Erinnerung unversehrt, als wäre sie das Ziel. Ihr Geist glättet Unstimmigkeiten im Detail. Auf diese Weise verwendet, verschwindet die Datei und kann nicht erneut genutzt werden."],
   ["plus", "**Bei Triszendenz** darfst du die verlorene Erinnerung des Ziels durch eine von dir gewählte ersetzen."],
   ["plus", "**Bei jeder dritten {3}** wähle eines:\n– Speichere eine zusätzliche Kopie derselben Erinnerung, verfügbar, bis das Laufwerk verschwindet.\n– Entferne eine weitere Erinnerung, die emotional mit der ersten verbunden ist und die das Ziel nicht beschrieben hat.\n– Lege eine Sicherungskopie an, die nur an das ursprüngliche Ziel zurückgegeben werden kann, und zwar jederzeit."],
   ["nein", "**Bei Fehlschlag** enthält die Kopie, die du erzeugst, stattdessen eine eigene Erinnerung von dir, die eine gefährliche Schwachstelle oder eine schwierige Wahrheit beschreibt. Das Ziel verliert seine Erinnerung ebenfalls, aber diese Kopie entsteht an einem anderen Ort; jemand hat sie, irgendwo … aber es ist weder das Ziel noch du."]
  ]}
]};

TA_PWT.R3 = {t:"Vorgelesen", s:259, b:[
 {t:"faehig", h:"Vorgelesen", x:"Niemand hat es verdient, im Verborgenen zu versauern. Reiche jemandem Material zum Schaffen von Kunst und würfle **Aufmerksamkeit**.",
  erg:[
   ["ok", "**Bei Erfolg** schafft die Person in Sekunden ein vollendetes Kunstwerk *(eine Statue, ein Gemälde, ein Buch, ein Lied usw.)*, das ihren inneren Charakter unaussprechlich, vollständig und unleugbar in einem detaillierten Eindruck vermittelt. Jeder, der das Werk erlebt, gewinnt sofort ein belastbares Verständnis des Ziels: Die zwielichtigen Geschäfte eines korrupten Wachmanns werden deutlich, aber auch seine Schulden; die lauteren Absichten eines selbstlosen Teenagers liegen offen zutage; die Untreue eines betrügerischen Partners ist unleugbar. Am nächsten Morgen, falls das Werk noch existiert, geht dieser mächtige Eindruck nicht mehr von ihm aus."],
   ["plus", "**Für jede weitere {3}** wähle eines:\n– Das Werk geht einem Ziel über den Kopf: Es setzt sich mit dem fertigen Kunstwerk rein oberflächlich auseinander.\n– Das Werk wird zum Phänomen, und das Ziel gewinnt sofort eine kleine, aber leidenschaftliche Fangemeinde.\n– Alles andere, was das Ziel je erschafft, vermittelt denselben Eindruck wie das Werk."],
   ["plus", "Das Werk vermittelt außerdem die selbstsüchtigste Tat des Ziels, seine selbstloseste Tat, seine größte Scham, seinen stolzesten Moment, seinen größten Feind oder seinen engsten Freund. Du hast die Wahl."],
   ["nein", "**Bei Fehlschlag** vermittelt das Werk stattdessen deine selbstsüchtigste Tat und deine größte Scham. Es kann nicht zerstört werden."]
  ]}
]};

TA_PWT.R4 = {t:"Rückstoß", s:260, b:[
 {t:"faehig", h:"Rückstoß", x:"Gib deine Gun einer anderen Person und sag ihr, sie solle irgendwohin schießen. Würfle **Empathie**.",
  erg:[
   ["ok", "**Bei Erfolg** wird das größte oder ernsteste Problem des Ziels – aus seiner Sicht – aus seinem Leben entfernt. Dieses Problem kann körperlicher, psychischer, sozialer oder jeder anderen Art sein. Das größte Problem wird unbewusst von der Person bestimmt, die schießt."],
   ["plus", "**Bei Triszendenz** resoniert es auch mit deiner Gun. Es erhält seine eigene Gun-Anomalie."],
   ["nein", "**Bei Fehlschlag** ist dem Schützen ein Fehlschlag wie bei Schnell gezogen unterlaufen – aber du kannst nicht das unbeabsichtigte Ziel sein. Er trägt die Last seines Verbrechens und weiß, dass du ihn hereingelegt hast."]
  ]}
]};

TA_PWT.R5 = {t:"Rotes Licht", s:260, b:[
 {t:"faehig", h:"Rotes Licht", x:"Alles läuft ständig. Sag „Rotes Licht!“ zu einem Gegenstand oder einer Person und würfle **Präsenz**.",
  erg:[
   ["ok", "**Bei Erfolg** wird das Ziel in einen perfekten Zustand der Schwebe versetzt. In diesem Zustand ist es immun gegen Schaden, Chaos-Effekte und Alterung. Dieser Effekt tritt sofort ein: Du kannst ihn auf einen Gegenstand anwenden, der gerade zerbricht, verbrennt oder explodiert, um seine Zerstörung zu verhindern oder seinen Inhalt zu bewahren. Der Effekt hält eine Woche an oder bis du „Grünes Licht“ sagst."],
   ["plus", "**Für jede weitere {3}** wähle eines:\n– Diese Fähigkeit wirkt auf ein weiteres Ziel.\n– Dieser Effekt hält eine weitere Woche an.\n– Der Übergang des Ziels in diesen Zustand erfolgt allmählich und ist abgeschlossen, wenn es nicht beobachtet wird.\n– Du kannst diesen Effekt einmal vorübergehend aussetzen und wieder aufnehmen (zum Beispiel für ein kurzes Gespräch), ohne ihn zu beenden.\n– Das Ziel nimmt seine Umgebung wahr, solange es unter diesem Effekt steht."],
   ["nein", "**Bei Fehlschlag** verdirbt der Gegenstand samt allem, was ihn gerade berührt, rasch: Er verrottet, zerfällt zu Staub, trocknet aus und stirbt."]
  ]}
]};

TA_PWT.R6 = {t:"Schwärzen", s:260, b:[
 {t:"faehig", h:"Schwärzen", x:"Manche Wörter sterben, andere werden ermordet. Sprich eines zum letzten Mal aus und würfle **Dynamik**.",
  erg:[
   ["ok", "**Bei Erfolg** wird das Wort aus dem Wortschatz jedes Menschen entfernt. Schriftliche und aufgezeichnete Verwendungen davon gelten als Eigenheit, und die Leute reimen sich sein Auftauchen jeweils selbst zurecht, wenn sie darauf stoßen. Es wird nie wieder seine ursprüngliche Bedeutung haben."],
   ["plus", "**Bei Triszendenz** darfst du das entfernte Wort durch ein selbstgeschaffenes ersetzen oder die ursprüngliche Bedeutung des Wortes als zusätzliche Definition einem bestehenden Wort hinzufügen."],
   ["nein", "**Bei Fehlschlag** wird das Wort nur aus deinem Wortschatz entfernt, und du kannst es nie wieder lernen."]
  ]}
]};

TA_PWT.R7 = {t:"Geschärfte Sinne", s:260, b:[
 {t:"faehig", h:"Geschärfte Sinne", x:"Falte dein Gehirn und forme deine Sinnesorgane auf Millionen winziger Arten um, sodass sie auf bestimmte Zwecke geschärft sind. Würfle **Aufmerksamkeit**.",
  erg:[
   ["ok", "**Bei Erfolg** steigerst du deine eigene Beobachtungsgabe dramatisch. Wähle eines und beschreibe, was sich am zugehörigen Körperteil auf ungewöhnliche Weise verändert, um die Steigerung zu ermöglichen. Der Effekt hält eine Stunde an oder bis du ihn beendest.\n– **Augen:** Du weißt sofort, ob man dir eine Lüge oder Halbwahrheit erzählt.\n– **Gehirn:** Du weißt, ob man mit etwas vernünftig reden kann, und wenn ja, wie du verhinderst, dass es dich und deine Verbündeten angreift.\n– **Ohren und Nase:** Du kannst Gerüche oder Geräusche wahrnehmen und verfolgen, die für normale Menschen nicht wahrnehmbar sind.\n– **Zunge:** Wenn du etwas schmeckst, erkennst du, wie alt es ist und woraus es besteht.\n– **Haut:** Wenn du etwas berührst, spürst du Schwingungen, Pulse und Veränderungen überall, wo es damit verbunden ist."],
   ["plus", "**Für jede weitere {3}** darfst du einen weiteren Effekt aus der Liste wählen."],
   ["nein", "**Bei Fehlschlag** verändern sich deine Sinne schneller, als du sie verstehen kannst, und eine fremdartige Kraft überwältigt dich. Du wirst zu einem **Vorboten des Endes**. Für den Rest des Einsatzes darf der GM beschreiben, wie dir oder jemandem in deiner Nähe schlimme Dinge widerfahren. Du weißt nicht, ob sie real sind, bis du auf sie reagierst."]
  ],
  b:[{t:"klein", x:"Nur du beantwortest diese Frage."}],
  f:"Bist du zu einem Vorboten des Endes geworden?", a:[["Nein. Dafür bin ich zu gefasst.", "M8", 1], ["Ja. Ich spüre, wie ich mich verändere. Etwas ruft nach mir. Es gibt mir ein Muster oder einen Bauplan. Etwas, das ich … werden kann. Ich weiß, dass es gefährlich ist, aber ich bin bereit, mein Leben zu riskieren, um die Wahrheit herauszufinden.", "E1", 1]]}
]};

TA_PWT.R8 = {t:"Nachladen", s:261, b:[
 {t:"sp", x:[
  ["Führe auf der folgenden Leiste Buch über jedes lebende oder anomale Ziel, das du mit einer beliebigen Methode tötest oder eliminierst:",
   {t:"spur", h:"Leiste", x:["1","2","3","4","5","6","7"]},
   "Ist die Leiste voll, fülle die von Sechsschüsser gelieferten {3}en auf ihr Maximum auf und setze die Leiste zurück."],
  [{t:"faehig", h:"", x:"", b:[{t:"klein", x:"Nur du kannst diese Frage beantworten. Sei auf ernste Folgen gefasst, wenn du es tust."}],
    f:"Bereust du es?", a:[["Ja.", "W2"], ["Nein.", ""]]}]
 ]}
]};

TA_PWT.R9 = {t:"Ersetzen", s:261, b:[
 {t:"faehig", h:"Ersetzen", x:"Eine Beziehung aufzubauen ist schwer, also nimm eine, die schon aufgebaut ist. Denk an jemanden im Leben des Ziels (Graces Mutter, Diegos Ehemann), auch wenn du die Person kaum kennst. Sag etwas, das sie zum Ziel sagen könnte, und würfle **Präsenz**.",
  erg:[
   ["ok", "**Bei Erfolg** bist du schon immer diese Person gewesen, und alle Erinnerungen, die das Ziel mit dieser Person hatte, enthalten nun stattdessen dich. Dieser Effekt hält bis zum Ende des laufenden Einsatzes an oder bis du ihn beendest, je nachdem, was zuerst eintritt. Begegnet das Ziel in dieser Zeit der Person, die du ersetzt hast, behandelt es sie wie eine völlig Fremde."],
   ["plus", "**Bei jeder dritten {3}** wähle eines:\n– Du kannst für die Dauer des Ersetzens auch auf die Erinnerungen des Ziels an dich zugreifen.\n– Am Ende des Effekts erinnert sich das Ziel an alle Begegnungen mit dir, als wäre es die Person gewesen, die du ersetzt hast.\n– Du kannst ein Merkmal der Person übernehmen, die du ersetzt, wie bei Ausleihen."],
   ["nein", "**Bei Fehlschlag** ist dieses Ersetzen dauerhaft, und du verlierst im Gegenzug jemanden. Du musst sofort eine deiner Beziehungen durch die Person ersetzen, die du ersetzt hast. Die Person, die du ersetzt hast, erinnert sich nun anstelle ihrer eigenen an deine alte Beziehung."]
  ],
  f:"Wenn meine Freunde in den Urlaub fahren, …", a:[["Hüte ich ihr Haus.", "C7"], ["Erstelle ich den perfekten Reiseplan für sie.", "S11"]]}
]};

TA_PWT.R10 = {t:"Wiederholung", s:261, b:[
 {t:"faehig", h:"Wiederholung", x:"Das wird nie langweilig. Tut jemand oder etwas etwas, das sehenswert genug für eine Wiederholung ist, applaudiere und würfle **Beharrlichkeit**.",
  erg:[
   ["ok", "**Bei Erfolg** gerät das Ziel in eine Schleife und wiederholt 20 Minuten lang exakt sein Verhalten der letzten fünf bis sechzig Sekunden. Ist das Ziel bei Bewusstsein, erinnert es sich nicht daran, in der Schleife zu sein: Jedes Mal, wenn die Schleife neu beginnt, wird sein Gedächtnis auf den Stand zu Beginn der Schleife zurückgesetzt.\nObwohl das Gedächtnis des Ziels zurückgesetzt wird, schreitet die Welt um es herum normal voran. (Wurde es zum Beispiel kurz vor dem Zeitpunkt in die Schleife gesetzt, an dem es ein Dokument tackern wollte, steckt bald ein Dutzend Heftklammern in diesem Dokument.)"],
   ["plus", "**Für jede weitere {3}** wähle eines:\n– Bis zu drei weitere Personen oder Gegenstände schließen sich der Schleife an.\n– Die Schleife umfasst eine weitere Minute.\n– Die Schleife wiederholt sich weitere 20 Minuten."],
   ["nein", "**Bei Fehlschlag** verschwindet das Ziel stattdessen: Du hast es von der Zeitleiste getrennt. Es taucht sporadisch auf und kehrt in scheinbar zufälligen Abständen für bis zu eine Minute in die Zeitleiste zurück. In der Zwischenzeit versteht es, was du getan hast, und lernt womöglich irgendwann, diesen Zustand zu seinem Vorteil zu nutzen."]
  ]}
]};

TA_PWT.R11 = {t:"Zurücknehmen", s:262, b:[
 {t:"sp", x:[
  ["Jeder macht Fehler, außer dir. Innerhalb von 24 Stunden nach einer Äußerung kannst du entscheiden, dass du sie nie getan hast. Tust du das, ist das Gesagte zurückgenommen: Du hast es nie gesagt, niemand erinnert sich daran, und die unmittelbaren Folgen sind rückgängig gemacht. Die Zeit wird nicht zurückgespult, und alles, was in der Zwischenzeit geschehen ist, ist trotzdem geschehen. Anomale Wesen (wie andere Agenten) erinnern sich weiterhin daran, was du gesagt hast, und an die Folgen."],
  ["Das gilt für deine Anomalie-Fähigkeiten, die mit Sprechen zu tun haben. Beispiel: Du setzt Perfekter Konter ein, um jemanden zu blamieren, der daraufhin stolpert und eine Mappe mit wichtigen Dokumenten fallen lässt. Eine Stunde später nimmst du den Satz zurück, mit dem du Perfekter Konter ausgelöst hast. Die Person wurde in Wirklichkeit nie blamiert und hat die Mappe noch, aber du konntest in dieser Stunde die wichtigen Dokumente durchsehen."]
 ]}
]};

TA_PWT.R12 = {t:"Cowboy reiten", s:262, b:[
 {t:"faehig", h:"Cowboy reiten", x:"Tötet dich etwas, darfst du es sofort besitzen. Würfle **Beharrlichkeit**.",
  erg:[
   ["ok", "**Bei Erfolg** wechselt dein Bewusstsein, während dein Körper stirbt, für bis zu 1 Stunde in den Körper des Ziels. Solange du in seinem Körper bist, kannst du deine Gun aufnehmen und Anomalie-Fähigkeiten einsetzen. Das Ziel erlangt die Kontrolle über seinen eigenen Körper nach einer Stunde zurück oder wenn sein Körper zu irgendeinem Zeitpunkt in Lebensgefahr gerät. Tut es das, endet dieser Effekt, und du bist tot."],
   ["plus", "**Für jede weitere {3}** darfst du die Dauer dieses Effekts um eine Stunde verlängern."],
   ["plus", "**Bei Triszendenz** wird, wenn der Effekt endet, dein Körper zu ihrem Körper; sie sind an dem Effekt oder Angriff gestorben, der dich getötet hat. Ihr Körper (der, den du kontrolliert hast) wird zu deinem Körper, der unverletzt ist."],
   ["nein", "**Bei Fehlschlag** ist dein Griff um die Zügel des Todes zu locker. Während du stirbst, reißt du einen vom GM gewählten Verbündeten mit in den Tod."]
  ]}
]};

TA_PWT.R13 = {t:"Direkt hinter dir", s:262, b:[
 {t:"sp", x:[
  ["Setzt du Albtraum ein, kann deine Trugbildgestalt stattdessen ein eigenständiges, greifbares Trugbild sein, das an einem nahen Schatten haftet. Es handelt unabhängig von dir, aber du steuerst jede seiner Handlungen. Obwohl greifbar, ist es schwach: stark genug, um Bücher aus einem Regal zu stoßen, aber nicht stark genug, um eine Tür zuzuhalten. Du kannst den Raum um es herum wahrnehmen, als wärst du dort, und wenn du sprichst, kannst du wählen, durch es statt durch deinen eigenen Körper zu sprechen. Währenddessen bleibt dein eigener Körper unverändert."],
  ["Auf diese Weise erschaffene Trugbilder können sich im Zielschatten verstecken und beliebig oft wieder daraus hervorkommen. Sie halten an, bis du Albtraum erneut einsetzt oder sie entlässt, je nachdem, was zuerst eintritt.",
   {t:"faehig", h:"", x:"", f:"Was ist in meinem Schrank?", a:[["Kristalle.", "F10"], ["Skelette.", "I6"]]}]
 ]}
]};

TA_PWT.R14 = {t:"Riss", s:262, b:[
 {t:"faehig", h:"Riss", x:"Greife nach dem Gewebe der Realität. Reiß es auf und würfle **Dynamik**.",
  erg:[
   ["ok", "**Bei Erfolg** erzeugst du einen Riss in der Realität, der in einen Paralleltraum führt, den die Agency die Lobby nennt. Dabei wird ein kleiner Schwarm Ripples freigesetzt, verdichtete Gedanken, die sich noch nicht mit genug anderen verbunden haben, um in die Realität durchzubrechen. Sie sind klein, chaotisch und gefährlich. Meist erscheinen sie als einfache Kombinationen aus den Dingen, über die die Menschen in der Gegend nachdenken *(Krabben + Bierflaschen, Börsenticker + Ratten, Radios + Maultaschen usw.)*.\nRipples sind äußerst beeinflussbar und beginnen schnell, stabile Geister fressen zu wollen. Sie sind sehr wirksame Ablenkungen und können rasch viel Zerstörung anrichten, lösen sich aber nach einigen Minuten von selbst auf. Auch der Riss heilt innerhalb einer Stunde von selbst.\nDinge in den Riss zu stecken wird nicht empfohlen, hat aber voraussichtlich keine unmittelbaren Folgen, außer dass das Ding nicht mehr zurückzuholen ist."],
   ["plus", "**Bei jeder dritten {3}** kannst du dem Ripple-Schwarm einen einfachen Ein-Wort-Befehl geben (kämpfen, zerstreuen, spielen usw.), den sie auszuführen versuchen, bevor sie sich auflösen."],
   ["nein", "**Bei Fehlschlag** erzeugst du einen Riss, der sich von selbst offen hält. Ripples strömen aus dem Loch, außerhalb deiner Kontrolle, und haben es zuallererst auf Resonanten und Anomalien abgesehen.\nDieser Riss kann nur geschlossen werden, indem man eine Kleine Anomalie in seine Öffnung zwingt."]
  ]}
]};

TA_PWT.R15 = {t:"Raketenuhr", s:263, b:[
 {t:"sp", x:[
  ["Großer Zeiger, Kleiner Zeiger und Zifferblatt vereinen sich zur **Raketenuhr**, einer Waffe von unglaublicher Macht, geführt am Ende einer langen, stabilen Kette.",
   "Die Raketenuhr kann als Großer Zeiger, Kleiner Zeiger oder Zifferblatt fungieren. So eingesetzt, wirkt sie wie in diesen Fähigkeiten beschrieben.",
   "Greifst du jemanden mit ihrer vollen Macht an, würfle **Dynamik**, **Subtilität** und **Beharrlichkeit** zusammen. Diese Würfe können weder mit QS angepasst noch mit Übertakten kopiert werden, unterliegen aber Burnout und erzeugen wie üblich Chaos. Triszendenz bei einem einzelnen Wurf trägt höchstens sechs {3}en zur Summe bei und aktiviert nur den Triszendenz-Effekt des zu dieser Waffe gehörigen Wurfs.",
   {t:"faehig", h:"", x:"",
    erg:[
     ["ok", "**Bei allen Erfolgen** addiere deine {3}en aus allen Würfen. Du darfst diese {3}en für eine beliebige Kombination der folgenden Effekte sowie aller Effekte von Großer Zeiger, Kleiner Zeiger oder Zifferblatt ausgeben. Du darfst eine Option mehrfach wählen."],
     ["nein", "**Bei Fehlschlag eines Wurfs** erhältst du 1 Schaden und stehst unter der Drohung des Schicksalsschlosses. Wirst du getötet, bevor die Uhr das nächste Mal 12 schlägt, durchlebst du die Wirkungen des Schicksalsschlosses."]
    ]}],
  ["Drei {3}en: **Schicksalsschloss.** Füge dem Ziel 1 Schaden zu. Wird das Ziel durch diesen Schaden getötet oder destabilisiert, ist es für immer getötet oder destabilisiert, rückwärts und vorwärts in der Zeit. Es kann auf keine Weise wiederbelebt werden, auch nicht mit deinen Kräften, weil es über diesen Moment hinaus nicht existiert.",
   "Sechs {3}en: **Auf nächste Woche.** Das Ziel wird 7 Tage in die Zukunft geschleudert und erscheint genau 168 Stunden ab jetzt an derselben Stelle.",
   "Neun {3}en: **Zehn Jahre zurückgesetzt.** Das Ziel wird 10 Jahre in die Vergangenheit geschleudert und erscheint genau 87.600 Stunden zuvor an derselben Stelle.",
   "Zwölf {3}en: **Ende der Fahnenstange.** Füge 3 Schaden zu. Wird das Ziel durch diesen Schaden getötet oder destabilisiert, erlebt es das Schicksalsschloss für alle Ichs in allen Möglichkeiten über jede Zeitleiste und Realität hinweg. Alle Versionen von ihm sterben und können nie zurückgeholt werden."]
 ]}
]};
