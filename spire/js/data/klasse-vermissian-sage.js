/* The Spire – Klasse Vermissian Sage (aus quellen/spire/de/cmf, erzeugt mit plan/spire/build_klassen.py) */
(window.SP_KLASSE = window.SP_KLASSE || []).push({
 "id": "vermissian-sage",
 "p": 65,
 "zitat": "„Ich schätze, ich habe genau das Buch, das du brauchst – das Problem ist, dass es acht Stationen runter und fünf rüber liegt, also solltest du vielleicht Proviant mitbringen.“",
 "intro": [
  "Das Vermissian ist ein großes Scheitern – der Versuch eines Massenverkehrsnetzes in der Spire durch überfinanzierte menschliche Retro-Ingenieure –, das die Wände zwischen den Welten verbog und in Trümmer fiel. Nun versucht in den labyrinthartigen Tunneln und Sackgassenkorridoren eine Sekte von Drow-Historikern, den nichteuklidischen Raum zu nutzen, um Informationen und Relikte ihrer Heimatnationen zu lagern. Du bist ein solcher Drow – ein Weiser des Vermissian-Gewölbes."
 ],
 "kern": {
  "wid": "Verstand +3, Schatten +1",
  "auff": "Decke verborgene Informationen auf.",
  "fert": "Ermitteln, Überzeugen",
  "dom": "Akademie, Okkultes, Technik"
 },
 "bind": [
  "Du hast eine Bindung auf Einzelebene zu einem Akademiker, Forscher oder Wächter des Gewölbes. Nenne ihn und seine Spezialität.",
  "Du hast eine Bindung zu einem anderen SC – du kennst ein Geheimnis über ihn. Sag, wer es ist, was das Geheimnis ist und ob er weiß, dass du es weißt, oder nicht."
 ],
 "ausr": [
  {
   "k": "lbl",
   "x": "Entweder:"
  },
  {
   "k": "pkt",
   "x": "Klappbare Armbrust (W6, Fernkampf, Verbergbar, Einweg)"
  },
  {
   "k": "lbl",
   "x": "Oder:"
  },
  {
   "k": "pkt",
   "x": "Dolch (W3, Verbergbar) und gepolsterte Weste (Rüstung 1)"
  }
 ],
 "kfae": [
  {
   "t": "HINTERTÜR",
   "p": 65,
   "fl": "Du reißt eine Tür auf und stürzt dich hindurch in einen verdrehten, metallischen Albtraum: das Zuhause.",
   "x": [
    "Einmal pro Sitzung kannst du einen Eingang zum Gewölbe finden, egal wo in der Spire du dich befindest (ob er schon da war, bevor du zu suchen begannst, bleibt unklar). Drinnen findest du eine Sammlung seltsamer Gegenstände und eigentümlicher Bücher, von denen viele alternative Geschichten betreffen oder daraus stammen und einige die Wahrheit sagen. Jeder Charakter, der kein Sage ist und das Gewölbe betritt, sollte Widerstehen+Okkultes würfeln oder Verstandsstress erleiden."
   ]
  },
  {
   "t": "DAS GEWÖLBE",
   "p": 65,
   "fl": "Du hast Zugang zu den riesigen Informationsquellen der Weisen.",
   "x": [
    "Solange du im Gewölbe bist, egal ob du es durch eine Hintertür oder auf normalem Weg erreicht hast, hast du Zugang zu Ausrüstung, die es dir erlaubt, eine Probe auf Ermitteln zu einem beliebigen Thema abzulegen. Das verleiht keine Meisterschaft, erlaubt dir aber, die Probe abzulegen."
   ]
  },
  {
   "t": "BESESSENER FORSCHER",
   "p": 65,
   "fl": "Du verbringst jeden ruhigen Moment damit, dein Gehirn mit Wissen zu füllen – Wissen, das oft flüchtig ist.",
   "x": [
    "Zu Beginn jeder Sitzung erhältst du einen Kniff deiner Wahl in einer beliebigen Fertigkeit oder Domäne, auch wenn du normalerweise keinen Zugriff auf die Fertigkeit oder Domäne hast. Am Ende der Sitzung verlierst du diesen Kniff. Du kannst nicht zwei Sitzungen hintereinander denselben Kniff haben; du langweilst dich und musst deinen Geist auf andere Weise erweitern."
   ]
  }
 ],
 "fort": {
  "niedrig": [
   {
    "t": "VERBINDUNG FINDEN",
    "p": 65,
    "tag": "Okkult",
    "fl": "Du nutzt die einzigartigen Fähigkeiten des Vermissian-Gewölbes, um Geheimnisse über ein Ziel zu entschlüsseln.",
    "x": [
     "Einmal pro Sitzung erklärst du, dass zwei NSC irgendwie miteinander verbunden sind – frage die Spielleitung, auf welche Weise."
    ]
   },
   {
    "t": "TOTER BRIEFKASTEN",
    "p": 65,
    "fl": "Du hast ein Netz verborgener Verstecke, gefüllt mit nützlicher Ausrüstung.",
    "x": [
     "+1 Silber. Einmal pro Sitzung findest du ein verstecktes Depot mit Ausrüstung, das du, ein anderer Gelehrter oder eine Version von dir aus einer abweichenden Geschichte zur Vorbereitung auf diesen Ernstfall zurückgelassen hat. Der Briefkasten erlaubt es dir, eine kleine Gruppe von Leuten mit allgemeiner Ausrüstung für eine bestimmte Aufgabe auszustatten (z. B. Dietriche, dunkle Umhänge, Streichhölzer und Laternen, Essen usw.). Diese Ausrüstung verleiht nie Meisterschaft."
    ]
   },
   {
    "t": "GEISTIGES VERZEICHNIS",
    "p": 66,
    "tag": "Okkult",
    "fl": "Du kannst Wissen riechen.",
    "x": [
     "+1 Verstand. Würfle Ermitteln+Okkultes und stelle der Spielleitung eine Frage. Bei einem Erfolg muss sie dir die Antwort nicht nennen, aber sie muss dir den einfachsten Weg nennen, eine zu erhalten. (Zum Beispiel: Du kannst die Kombination eines Safes nicht wissen, aber du kannst wissen, dass sie auf einem Zettel steht, der im Tagebuch des Aufsehers steckt.)"
    ]
   },
   {
    "t": "DIE VERSCHLOSSENEN REGALE",
    "p": 66,
    "tag": "Okkult",
    "fl": "Du hast Zugang zu den Verschlossenen Regalen, einem toten und staubigen Ort, an dem Wissen zur ewigen Ruhe bestattet wird.",
    "x": [
     "+1 Verstand. Wenn du die Verschlossenen Regale besuchst, kannst du versuchen, eine einzelne Tatsache oder ein Gerücht zu unterdrücken – würfle Überzeugen+Okkultes. Bei einem Erfolg beginnt die Information aus dem öffentlichen Wissen zu verblassen, es sei denn, jemand bemüht sich gezielt, sie bekannt zu machen."
    ]
   },
   {
    "t": "DORNIGE ZUNGE",
    "p": 66,
    "tag": "Okkult",
    "fl": "Unwahrheiten brennen in deiner Gegenwart wie Glut.",
    "x": [
     "Würfle Überzeugen+Okkultes, um diesen Zauber zu wirken. Bei einem Erfolg kannst du Leute bestrafen, die dich belügen: In der nächsten Situation markiert jeder, der dich belügt (nicht durch Auslassung, sondern indem er aktiv eine Unwahrheit vorbringt), W3 Stress, da sengender Schmerz durch seinen Körper schießt und hinter seinen Augen sticht. Das genügt, um die meisten Leute davon abzubringen, dich je zu belügen, wenn sie wissen, wer du bist."
    ]
   },
   {
    "t": "DAS IST NIE PASSIERT",
    "p": 66,
    "tag": "Okkult",
    "fl": "Die Wirklichkeit ist formbar, in den richtigen Händen: deinen.",
    "x": [
     "Erhalte die Fertigkeit Flicken. Einmal pro Sitzung würfelst du alle Würfel deines Pools neu, indem du enthüllst, dass die gerade geschehenen Ereignisse falsch waren. Du kannst diesen Trick ein zweites Mal versuchen, nimmst dabei aber W6 Stress auf Verstand."
    ]
   }
  ],
  "mittel": [
   {
    "t": "TASCHENFÜHRER",
    "p": 66,
    "tag": "Okkult",
    "fl": "Du bindest die Essenz der einzigen überlebenden genauen Karte des Vermissian in deinen Geist.",
    "x": [
     "Würfle Ermitteln+Okkultes und stelle der Spielleitung eine Frage. Gelingt es, sagt sie dir, wo im Vermissian-Gewölbe die Antwort liegt. Dorthin zu gelangen wird ein langer Prozess sein (mindestens eine halbe Stunde), und die Antwort auf die Frage wird dir wahrscheinlich nicht alles sagen, was du wissen musst, aber die Fragen, die du stellen kannst, sind nicht begrenzt."
    ]
   },
   {
    "t": "UNAUSSPRECHLICH",
    "p": 66,
    "tag": "Okkult",
    "fl": "Du bündelst deinen Geist und fängst die Worte ab, bevor sie ihre Kehle verlassen.",
    "x": [
     "+2 Verstand. Konzentriere dich auf einen NSC und würfle Überzeugen+Okkultes. Gelingt es, kann er nicht mehr über einen Begriff deiner Wahl sprechen – die Worte entgleiten ihm. Das hält bis zum Ende der aktuellen Situation an."
    ]
   },
   {
    "t": "GEDÄCHTNISLÜCKE",
    "p": 66,
    "tag": "Okkult",
    "fl": "Du pflückst unerwünschte Ereignisse aus den Köpfen der Umstehenden.",
    "x": [
     "+1 Verstand. Konzentriere dich auf ein Ziel und würfle Überzeugen+Okkultes. Gelingt es, vergisst es ein bestimmtes, kurzes, kürzliches Ereignis. Es überschreibt es mit Ereignissen eigener Erfindung, die die Lücken in seinem Gedächtnis schließen."
    ]
   },
   {
    "t": "DYNASTISCHES GEDÄCHTNIS",
    "p": 66,
    "tag": "Göttlich",
    "fl": "Du erweckst das Blut der Ahnen in deinen Verbündeten.",
    "x": [
     "+2 Ruf. Markiere W3 Stress auf Verstand, um die Macht der uralten Häuser der Heimatnationen zu kanalisieren und dir und deinen Verbündeten Stärke zu verleihen. Wenn du diese Kraft das erste Mal bei einem Charakter einsetzt, bestimme, aus welchem Haus er stammt, indem du es aus der Liste auf der gegenüberliegenden Seite wählst. Von da an erhält er, wenn du diese Kraft bei ihm einsetzt, für die restliche Situation Zugriff auf die entsprechende Kraft. (Dieser Zauber funktioniert nur, wenn er auf Dunkelelfen gewirkt wird.)",
     {
      "t": "h3",
      "x": "Die Häuser der Drow"
     },
     {
      "t": "tbl",
      "head": [
       "Haus",
       "Wirkung"
      ],
      "rows": [
       [
        "Destera, die Weber",
        "Spinnen verehren dich und führen selbstopfernde Handlungen in deinem Namen aus"
       ],
       [
        "Yssen, die Ruhelosen Klingen",
        "Wenn du keine Rüstung trägst, haben deine Angriffe die Merkmale Brutal und Überraschend"
       ],
       [
        "Malrique, das Lidlose Auge",
        "Du kannst nicht überrascht oder aus dem Hinterhalt angegriffen werden"
       ],
       [
        "Valwa, die Silberblütigen",
        "Wenn dir ein Überzeugen bei einem Ziel gelingt, erhältst du eine vorübergehende Bindung zu ihm"
       ],
       [
        "Gryndel, die Karmesinjäger",
        "Wenn du den vollen Namen eines Ziels laut aussprichst und es ihn hört, würfelst du bei Handlungen auf Kämpfen und Verfolgen gegen es mit Meisterschaft. Das kannst du nur bei einem Ziel gleichzeitig tun"
       ],
       [
        "Starys, die Ertrunkenen Könige",
        "Du musst nicht mehr atmen"
       ],
       [
        "Aliquam, Wiederhersteller der Reputationen",
        "Am Ende der Situation entfernst du allen auf Ruf markierten Stress"
       ],
       [
        "Duval, die Grabeskälte",
        "Indem du dich etwa eine Minute lang konzentrierst, kannst du nicht gesehen werden, solange du regungslos bleibst und die Augen schließt"
       ],
       [
        "Quinn, die Edlen und Allerhöchsten",
        "Du kannst Gold, Silber, Juwelen und andere Wertgegenstände riechen"
       ]
      ]
     }
    ]
   },
   {
    "t": "VERMISSIAN-SCHACHT",
    "p": 66,
    "tag": "Okkult",
    "fl": "Du stürzt ein Ziel in das dunkle Reich des Vermissian, hoffentlich um nie zurückzukehren.",
    "x": [
     "Würfle Flicken+Okkultes, um diesen Zauber zu wirken. Bei einem Erfolg stürzt du sofort ein nahes Ziel durch eine bislang ungesehene Falltür, ein Loch oder eine Lücke in der Wirklichkeit in die Tiefen des Vermissian. Es kann sich danach vielleicht herauskämpfen und dich finden oder drinnen Probleme machen, aber vorerst bist du es los."
    ]
   }
  ],
  "hoch": [
   {
    "t": "UNLESBAR",
    "p": 66,
    "tag": "Okkult",
    "fl": "Du reißt ganze Begriffe aus dem Geist deines Ziels und lässt es grundlegende Wahrheiten nicht mehr begreifen.",
    "x": [
     "Wie UNAUSSPRECHLICH, aber das Ziel kann den Begriff deiner Wahl in keiner Weise mehr wahrnehmen. Je nachdem, was du wählst, kann das dem Ziel gleichgültig sein (wenn es die Fähigkeit verliert, Eindringlinge wahrzunehmen oder auch nur wirklich zu verstehen) oder erschreckend (wenn es mit der Idee des Lichts nicht mehr umgehen kann). Dieser Zauber allein wird ein Ziel nicht töten, da der Körper auf grundlegenderen Ebenen arbeitet als jener, den du anzapfst, aber er kann es viel leichter machen. Das hält bis zum Ende der aktuellen Situation an."
    ]
   },
   {
    "t": "ANASTOMOSE",
    "p": 67,
    "tag": "Okkult",
    "fl": "Du verbindest die Macht des Gewölbes mit der wirklichen Welt und lässt alternative Wahrheiten in die Spire erblühen.",
    "x": [
     "Erhalte Meisterschaft in Täuschen. Du kannst die Energien des Gewölbes kurz in die wirkliche Welt entlassen, um falsche Informationen zu verbreiten. Würfle Täuschen+Okkultes. Bei einem Erfolg erschaffst du die glaubwürdigste Lüge der Welt; die Lüge wird nicht nur von unwiderlegbaren Beweisen gestützt, du kannst sie auch mit solchem Gewicht vortragen, dass selbst die Person, um die es geht, glauben könnte, sie sei wahr. Je dreister die Lüge, desto höher der Stress, den du riskierst.",
     "Die Lüge ist aber eine Lüge, sodass es nicht möglich ist zu sagen, dass es keine Schwerkraft gibt, und alle schweben in den Himmel davon. Aber es ist möglich, die Schwerkraft als eine Theorie darzustellen, die von der akademischen Gemeinschaft weithin widerlegt und durch etwas anderes ersetzt wurde, das du in der Hinterhand hast, falls du das möchtest."
    ]
   },
   {
    "t": "DIE GLASBIBLIOTHEK",
    "p": 67,
    "fl": "Du hast Zugang zur Glasbibliothek, einem seltsamen Ort, der Umgebungsinformationen aus der Spire filtert und zu Büchern, Zeitungen, Informationsfetzen und Kunstwerken destilliert.",
    "x": [
     "Erhalte Meisterschaft in Ermitteln. Solange du in der Glasbibliothek sitzt, kannst du jeden Ort in der Spire untersuchen, als hättest du ungehinderten, ununterbrochenen Zugang dazu.",
     "Die Glasbibliothek wird tagsüber außerdem aufgrund einer seltsamen Eigenart des Informationsfilterprozesses von Sonnenlicht durchflutet. Anders als normales Sonnenlicht verbrennt dieses die Haut von Dunkelelfen nicht, auch wenn viele Weise es als unangenehm hell empfinden."
    ]
   },
   {
    "t": "UMSCHREIBEN",
    "p": 67,
    "tag": "Okkult",
    "fl": "Wer das Gewölbe kontrolliert, kontrolliert die Vergangenheit.",
    "x": [
     "Würfle Überzeugen+Okkultes, um diesen Zauber zu wirken. Du versammelst deine Verbündeten im Gewölbe und nutzt die seltsamen Energien dort, um die Ereignisse der Vergangenheit zu verändern. Du und jeder anwesende Verbündete können ein laufendes Fallout entfernen, unter dem sie gerade leiden, und außerdem W6 Stress von beliebigen ihrer Widerstände auffrischen. Verbleibender Stress kann auf jeden Widerstand bei jedem Mitglied des Rituals neu verteilt werden.",
     "Durch dein Können als Weiser (und sorgfältiges Frisieren von Zeitungsberichten und Zeugenaussagen) veränderst du die Vergangenheit auf subtile Weise – der Zeitstrom verkraftet keine großen Änderungen und neigt dazu, sie glattweg abzulehnen. Daher kann diese Kraft nicht genutzt werden, um die Vergangenheit in eine angenehmere Form zu bringen, außer wenn es darum geht, wer welchen Stress erleidet."
    ]
   }
  ]
 },
 "boxen": [],
 "hinweis": {},
 "fortIntro": {},
 "t": "Vermissian Sage"
});
