/* The Spire – Klasse Carrion-Priest (aus quellen/spire/de/cmf, erzeugt mit plan/spire/build_klassen.py) */
(window.SP_KLASSE = window.SP_KLASSE || []).push({
 "id": "carrion-priest",
 "p": 37,
 "zitat": "„Charnel schmaust heute Nacht, Brüder! Wir ebenso.“",
 "intro": [
  "Du gehörst zu den Anhängern von Charnel – einer ketzerischen Sekte von Todesanbetern, die oben auf der Spire in den Türmen und Oubliettes von Neuer Himmel leben – und glaubst, dass die Leichen der Toten von heiligen Hyänen gefressen werden sollten, um ihren Seelen eine sichere Passage ins Jenseits zu gewährleisten."
 ],
 "kern": {
  "wid": "Blut +2, Ruf +2",
  "auff": "Schließe eine Jagd ab und nimm deine Beute.",
  "fert": "Verfolgen, Schleichen",
  "dom": "Religion, Niedere Gesellschaft"
 },
 "bind": [
  "Du hast eine Bindung auf Straßenebene zu den Gläubigen von Charnel – einer Ansammlung von Anbetern des leichenfressenden Gottes, die in Neuer Himmel leben. Nenne drei von ihnen und was an ihnen seltsam ist.",
  "Du hast eine Bindung zu einem anderen SC, dem du geholfen hast, mit einem Todesfall umzugehen – entweder indem du ihn durch den Trauerprozess geleitet oder die Leiche beseitigt hast. Sag, wer es war und wer gestorben ist."
 ],
 "ausr": [
  {
   "k": "pkt",
   "x": "Leder und Roben: Rüstung 2"
  },
  {
   "k": "pkt",
   "x": "Hyäne (siehe S. 38)"
  },
  {
   "k": "lbl",
   "x": "Entweder:"
  },
  {
   "k": "pkt",
   "x": "Schwere Armbrust (W8, Fernkampf, Nachladen, Unzuverlässig) und Messer (W3, Verbergbar)"
  },
  {
   "k": "lbl",
   "x": "Oder:"
  },
  {
   "k": "pkt",
   "x": "Kriegsbeil (W6) und Beutehaken (W3, Fernkampf, Betäubend)"
  }
 ],
 "kfae": [
  {
   "t": "HYÄNE",
   "p": 38,
   "fl": "Du hast eine Hyäne als Gefährtin, die deinen Befehlen gehorcht.",
   "x": [
    "Wähle bei der Charaktererschaffung zwei Befehle, die deine Hyäne versteht. Zu Beginn deines Zuges wählst du einen Befehl aus der Liste der von ihr verstandenen Befehle, den du deiner Hyäne gibst, solange sie dich sprechen hören kann:",
    {
     "t": "dl",
     "x": [
      [
       "Hetz Sie",
       "Wenn du einen Überraschungsangriff im Nahkampf auf ein Ziel startest, erhalten deine Angriffe das Merkmal Brutal."
      ],
      [
       "Kundschaften",
       "Wenn du aus einem Versteck heraus aus der Distanz angreifst, erhalten deine Angriffe das Merkmal Brutal."
      ],
      [
       "Knurren",
       "Wenn du jemanden einschüchterst oder vertreibst, tust du das mit Meisterschaft."
      ],
      [
       "Wache",
       "Wenn du Stress auf Blut nimmst, nimmst du 1 Stress weniger als das gewürfelte Ergebnis, mindestens jedoch 1."
      ],
      [
       "Apport",
       "Wenn du ein Ziel jagst, das du sehen und hören kannst, tust du das mit Meisterschaft."
      ],
      [
       "Witterung",
       "Wenn du einen Schauplatz nach Hinweisen beschnüffelst, tust du das mit Meisterschaft."
      ]
     ]
    }
   ]
  },
  {
   "t": "LAGE DES LANDES",
   "p": 38,
   "fl": "Du bist ein ausgebildeter Jäger, und andere täten gut daran, auf deine Worte zu hören.",
   "x": [
    "Wenn du eine gefährliche Situation betrittst, kannst du bis zu drei Merkmale oder Gelegenheiten nennen, die deine Verbündeten nutzen können. Wenn du oder ein Verbündeter das erste Mal eine Gelegenheit nutzt, würfelt er oder sie mit Meisterschaft (zum Beispiel: Deckung mit guter Sicht auf das Schlachtfeld, ein Ausgang, eine schlecht bewachte Tür, ein Stapel Fässer usw.)."
   ]
  }
 ],
 "fort": {
  "niedrig": [
   {
    "t": "NEUE TRICKS",
    "p": 38,
    "fl": "Deine Hyäne ist ungewöhnlich gut ausgebildet.",
    "x": [
     "Erhalte die Fertigkeit Überzeugen. Wähle zwei weitere Befehle, die deine Hyäne versteht."
    ]
   },
   {
    "t": "KICHERN",
    "p": 38,
    "tag": "Göttlich",
    "fl": "Du bist der Schrecken von Neuer Himmel, und deine Feinde zittern bei deiner Annäherung.",
    "x": [
     "+1 Ruf. Markiere W3 Stress auf Verstand oder Körper, um zusammen mit deiner Hyäne ein albtraumhaftes Kichern zu entfesseln, das deinen Feinden (und allen anderen in Hörweite) Furcht ins Herz treibt. Für etwa die nächste Minute ist die Schwierigkeit deiner Feinde, sofern sie eine haben, um eins niedriger."
    ]
   },
   {
    "t": "MORD VON KRÄHEN",
    "p": 38,
    "fl": "Die heiligen Vögel des Todes kommen auf deinen Ruf.",
    "x": [
     "Markiere W3 Stress auf Verstand oder Blut, um diesen Zauber zu wirken, wofür du Zugang zu einem großen offenen Innenraum oder zum Himmel haben musst. Du beschwörst einen Schwarm aus Krähen, Raben, Dohlen, Elstern und allerlei Rabenvögeln, die bis zum Ende der Situation tun, was du verlangst. Sie sind keine geübten Kämpfer, aber sie können im Notfall für Ablenkung sorgen, und du kannst mit ihnen in einem seltsamen, krächzenden Dialekt sprechen, wenn du sie bitten willst, Informationen zu sammeln oder ein Gebiet zu beobachten."
    ]
   },
   {
    "t": "REISSEN UND ZERFETZEN",
    "p": 38,
    "fl": "Wenn du deine Beute stellst, ist ihr Tod schnell.",
    "x": [
     "Wenn du im Nahkampf Stress verursachst, würfle die Stresswürfel neu, falls sie 1 zeigen. Zeigen sie die Höchstzahl (also 6 auf einem W6, 8 auf einem W8), würfle erneut und addiere beide Ergebnisse."
    ]
   },
   {
    "t": "TOTES FLEISCH",
    "p": 38,
    "tag": "Göttlich",
    "fl": "Du bist in den Slums von Neuer Himmel beliebt, da du verrottendes Essen wieder genießbar machen kannst.",
    "x": [
     "+2 Ruf. Du kannst Charnel anrufen, verrottendes oder verdorbenes Essen zu segnen, die Fäulnis daraus zu vertreiben und es in einem fünfminütigen Ritual sicher essbar zu machen."
    ]
   },
   {
    "t": "CHARNELS MAL",
    "p": 38,
    "tag": "Göttlich",
    "fl": "Du leitest die Energien des Gottes des langsamen Todes durch deinen Körper auf deine Feinde.",
    "x": [
     "Markiere W6 Stress auf Blut oder Verstand, um diesen Zauber auf ein Ziel in Sichtweite zu wirken; eine mit schnell trocknendem Blut aufgemalte Rune erscheint auf seinem Körper. Bis zum Ende der Situation erhalten du und alle Verbündeten das Merkmal Brutal, wenn ihr würfelt, um Stress gegen das Ziel zu verursachen."
    ]
   }
  ],
  "mittel": [
   {
    "t": "GEISTERSPRECHER",
    "p": 38,
    "fl": "Deine Verbindung zur Welt danach ist durch Charnel gestärkt.",
    "x": [
     "+1 Verstand, +1 Ruf. Du hast eine enge Verbindung zu Tod und Jenseits. Nimm W3 Stress auf Verstand oder Blut, um diese Kraft für eine Situation zu aktivieren – du kannst Geister sehen, mit ihnen sprechen und körperlich mit ihnen interagieren, als wären sie körperlich in der Szene anwesend. Außerdem findest du einmal pro Sitzung einen Geist und sprichst mit ihm über die gegenwärtige Situation – frage die Spielleitung, wer es ist."
    ]
   },
   {
    "t": "ROTES FESTMAHL",
    "p": 38,
    "tag": "Göttlich",
    "fl": "Du kannst von den Toten essen als Opfer an den Lachenden Tod, der deine Sorgen lindert.",
    "x": [
     "In Gemeinschaft mit Charnel kannst du das Fleisch fühlender Wesen auf Kosten deiner eigenen Vernunft in dein eigenes verwandeln. Wenn du das Fleisch einer Person isst, frischst du auf. Du kannst diese Handlung nicht nutzen, um Verstandsstress zu entfernen."
    ]
   },
   {
    "t": "MASSAKER",
    "p": 38,
    "tag": "Göttlich",
    "fl": "Du oder ein Verbündeter werdet zum Leiter, durch den Charnel durch Blut und",
    "x": [
     "*Tod in die Welt tritt.* Markiere W3 Blutstress und verbringe eine Stunde damit, dich oder einen anderen im Dienst Charnels zu weihen, um diesen Zauber zu wirken. Jedes Mal, wenn du Stress auf Blut markierst, erhält jede Waffe, die du trägst, das Merkmal Streuung W3, sofern sie nicht das Merkmal Nachladen besitzt. Dieser Effekt ist kumulativ und erhöht den Wert von Streuung jedes Mal, wenn du Stress auf Blut markierst, um eine weitere Würfelgröße. Dieser Effekt hält eine Situation lang an."
    ]
   },
   {
    "t": "ALPHA",
    "p": 39,
    "fl": "Du hast große Macht über dein heiliges Tier.",
    "x": [
     "+1 Ruf. Zu Beginn deines Zuges wählst du zwei Befehle, denen deine Hyäne gehorcht."
    ]
   },
   {
    "t": "GESTALT DES RABENVOGELS",
    "p": 39,
    "fl": "Du kannst deine Gestalt in die eines niederen Aasfressers verwandeln.",
    "x": [
     "+1 Schatten. Markiere W6 Stress, um diesen Zauber zu wirken. Du leitest Charnels Macht in einem einstündigen Ritual durch deinen Körper, während du einen selbstgemachten Umhang aus schwarzen Federn anlegst. Am Höhepunkt des Rituals nimmst du die Gestalt eines etwas größer als normalen Rabenvogels an (die genaue Art liegt bei dir). In Rabenvogelgestalt kannst du deine Fertigkeiten und Domänen wie gewohnt nutzen, aber die Tatsache, dass du ein Vogel bist, schränkt ihre Anwendung etwas ein. Waffen im Kampf kannst du jedenfalls nicht einsetzen.",
     "Du kehrst beim nächsten Sonnenaufgang in deine normale Gestalt zurück oder wenn jemand in Hörweite deinen vollen Namen ausspricht – je nachdem, was zuerst eintritt."
    ]
   },
   {
    "t": "ROT VON SCHNABEL UND KRALLE",
    "p": 39,
    "fl": "Deine Krähendiener sind so wild und mörderisch wie du.",
    "x": [
     "Wie MORD VON KRÄHEN, aber der Schwarm Rabenvögel zählt als (W3-)Waffe mit den Merkmalen Fernkampf und Brutal. (Du musst den Fortschritt MORD VON KRÄHEN nicht erworben haben, um dies zu nehmen.)"
    ]
   }
  ],
  "hoch": [
   {
    "t": "BLUTSPUR",
    "p": 39,
    "tag": "Göttlich",
    "fl": "Hast du erst einmal Blut geschmeckt, bist du kaum noch aufzuhalten.",
    "x": [
     "Um diese Kraft zu aktivieren, koste das Blut eines Ziels und markiere W6 Stress auf Blut. Bis du schläfst oder bis es stirbt, kannst du jederzeit aus den Schatten in seiner Nähe treten. Es kann sich mehr oder weniger schützen, indem es alle Schatten in der Nähe beseitigt."
    ]
   },
   {
    "t": "EIN SCHWARM NACHTSCHWARZER SCHRECKEN",
    "p": 39,
    "fl": "Die Krähen, die du beschwörst, sind Charnels Auserwählte.",
    "x": [
     "Wie ROT VON SCHNABEL UND KRALLE, aber der Schwarm zählt als (W6-)Waffe mit den Merkmalen Extreme Reichweite, Brutal und Blutgebunden. (Du musst die Fortschritte MORD VON KRÄHEN oder ROT VON SCHNABEL UND KRALLE nicht erworben haben, um dies zu nehmen.)"
    ]
   },
   {
    "t": "LEBEN KOSTEN",
    "p": 39,
    "tag": "Göttlich",
    "fl": "Totes Fleisch birgt viele Geheimnisse, und du kannst sie gemeinsam mit deinem Gott entschlüsseln.",
    "x": [
     "+2 Blut. Wenn du das Fleisch eines kürzlich gestorbenen Wesens isst, sendet Charnel dir Visionen über dessen Leben. Du kannst seine Identität erfahren, wie es starb und was es zuletzt getan hat, bis zum Moment seines Todes. Außerdem erhältst du dauerhaft Zugang zu einer Domäne, die es zu Lebzeiten besaß."
    ]
   },
   {
    "t": "GESTALT DES GROSSEN AASFRESSERS",
    "p": 39,
    "tag": "Göttlich",
    "fl": "Du verschmilzt mit deinem heiligen Tier und wirst zu einer göttlichen Monstrosität im Dienst Charnels.",
    "x": [
     "Charnel segnet dich mit der Fähigkeit, deinen Körper in den einer monströsen, sabbernden Hyäne zu verwandeln. Markiere W6 Stress auf Verstand: Dies ist ein ausgedehnter Prozess, der etwa 30 Minuten dauert und das zeremonielle Essen von Fleisch und die Gemeinschaft mit dem Geist deines tierischen Gefährten sowie das Anlegen eines geweihten Hyänenfells umfasst. Während dieses Prozesses verschmilzt du körperlich mit deiner Hyänengefährtin, sodass du ihr bis zum Ende des Zaubers keine Befehle mehr geben kannst.",
     "Du nimmst für einen Tag die Gestalt einer unnatürlich großen, muskulösen Hyäne an, in der du nicht verständlich sprechen kannst, aber bei Proben auf Kämpfen und Verfolgen mit Meisterschaft würfelst. Solange du verwandelt bist, erhältst du zusätzliche 5 Plätze in Blut, und deine Klauen zählen als Waffen mit W8 Schaden, aber du kannst keine Waffen, Rüstung oder andere Ausrüstung benutzen.",
     "Du kannst nicht in deine humanoide Gestalt zurückkehren, bis der Zauber nachlässt – du kannst ihn nicht vorzeitig beenden."
    ]
   }
  ]
 },
 "boxen": [],
 "hinweis": {},
 "fortIntro": {},
 "t": "Carrion-Priest"
});
