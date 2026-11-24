/* The Spire – Extra-Fortschritte (S. 69–76), erzeugt mit plan/spire/build_klassen.py */
window.SP_EXTRA = window.SP_EXTRA || {wege:[], boxen:[], intro:[
 "Diese Fähigkeiten sind nicht an eine Klasse gebunden. Du schaltest den Zugang zu jeder Gruppe von Fortschritten frei, indem du die jeweils am Anfang des Eintrags genannte Voraussetzung erfüllst, und kannst sie dann genauso kaufen wie Fähigkeiten deiner Klasse.",
 "Wenn du das Spiel mit Zugang zu einer dieser Gruppen von Fortschritten beginnen möchtest, sprich mit deiner Spielleitung darüber. Es kann davon ausgegangen werden, dass jeder Spielercharakter angesichts seiner Zugehörigkeit Zugang zur Minister-Gruppe hat."
]};
SP_EXTRA.wege = SP_EXTRA.wege.concat([
 {
  "id": "stadtwache",
  "t": "STADTWACHE",
  "p": 69,
  "vor": "Diene oder diente in der Stadtwache.",
  "auff": "Nimm eine Verhaftung vor.",
  "ein": [],
  "info": [],
  "fort": {
   "niedrig": [
    {
     "t": "GEWICHT DES GESETZES",
     "p": 69,
     "fl": "Du wedelst mit deiner Marke herum, um zu bekommen, was du brauchst.",
     "x": [
      "Nimm W3 Stress auf Schatten, um bei deiner nächsten passenden sozialen Interaktion mit Meisterschaft zu würfeln, während du Leuten mit Verhaftung drohst."
     ]
    },
    {
     "t": "BEZWINGEN",
     "p": 69,
     "fl": "Du bist es gewohnt, Verbrecher zu verletzen, aber nicht zu töten.",
     "x": [
      "Jede stumpfe Nahkampfwaffe, die du trägst, erhält das Merkmal Betäubend."
     ]
    },
    {
     "t": "DURCH DEN AMTSSCHIMMEL SCHNEIDEN",
     "p": 69,
     "fl": "Du kennst dich bestens mit der drakonischen Gesetzgebung aus, die Spire durchzieht.",
     "x": [
      "+1 Ruf. Wenn du versuchst, dich durch die Bürokratie zu navigieren, tust du das mit Meisterschaft."
     ]
    }
   ],
   "mittel": [
    {
     "t": "JEDER IST EINER SACHE SCHULDIG",
     "p": 69,
     "fl": "Du weißt, dass sie es getan haben, und sie wissen, dass sie es getan haben; jetzt musst du nur noch Druck ausüben.",
     "x": [
      "Wähle einmal pro Sitzung einen NSC. Die Spielleitung sagt dir, welche Verbrechen er begangen hat (und dank dieser Fähigkeit hat er in jüngster Zeit ein Verbrechen begangen); du hast keinen handfesten Beweis, aber eine gute Ahnung."
     ]
    },
    {
     "t": "VERDECKTER ERMITTLER",
     "p": 69,
     "fl": "Du hast so manche Nacht undercover verbracht.",
     "x": [
      "Das erste Mal, dass du in einer Sitzung Schatten-Fallout nimmst, ignoriere ihn."
     ]
    },
    {
     "t": "SCHLIMMERES GESEHEN",
     "p": 69,
     "fl": "Jahre auf den Straßen von Spire haben deinen Verstand abgehärtet.",
     "x": [
      "Das erste Mal, dass du in einer Sitzung Verstand-Fallout nimmst, ignoriere ihn."
     ]
    }
   ],
   "hoch": []
  }
 },
 {
  "id": "auserwaehlte-der-hungrigen-tiefe",
  "t": "AUSERWÄHLTE DER HUNGRIGEN TIEFE",
  "p": 69,
  "vor": "Verliere jemanden oder etwas wirklich Unersetzliches. Besuche regelmäßige Zeremonien für die hungrige Tiefe in der Kirche der Absolution in Derelictus oder tritt mindestens einmal pro Woche auf eigene Weise mit ihr in Verbindung.",
  "auff": "Zerstöre etwas Schönes und gib es der Tiefe als Opfer. Jemand Schönes tut es auch, denn die Tiefe unterscheidet nicht zwischen Menschen und Dingen – für sie ist alles nur Materie.",
  "ein": [],
  "info": [],
  "fort": {
   "niedrig": [
    {
     "t": "VERFALL",
     "p": 69,
     "tag": "Göttlich",
     "fl": "Deine Berührung ist Gift.",
     "x": [
      "Markiere 1 Stress auf Verstand und berühre den Türrahmen eines normal großen Hauses oder einer Wohnung; alle Lebensmittel im Gebäude verderben und werden ungenießbar, und Trinkwasser verwandelt sich in brackige, stinkende Flüssigkeit. Markiere mehr Stress auf Verstand, um ein größeres Gebiet zu betreffen."
     ]
    },
    {
     "t": "ANSTECKUNG",
     "p": 70,
     "tag": "Göttlich",
     "fl": "Du hauchst Seuchen virulentes Leben ein.",
     "x": [
      "Berühre jemanden mit einer Krankheit und markiere W6 Stress auf Blut oder Verstand. Zusätzliche Personen in Höhe des markierten Stresses stecken sich vor Anbruch des nächsten Tages mit dieser Krankheit an."
     ]
    },
    {
     "t": "ZERSTÖRUNG",
     "p": 70,
     "tag": "Göttlich",
     "fl": "Du lässt Gegenstände mit einem Kuss rosten und zerfallen.",
     "x": [
      "Markiere W3 Stress und tritt über einem nicht einzigartigen Gegenstand oder einem Teil eines Gegenstands (etwa dem Schloss einer Tür) mit der Tiefe in Verbindung. Im Laufe der nächsten Minuten zerfällt dieser Gegenstand zu nichts."
     ]
    }
   ],
   "mittel": [
    {
     "t": "FÄULNIS",
     "p": 70,
     "tag": "Göttlich",
     "fl": "Die Welt neigt sich dem Verfall zu, und du bist der Drehpunkt.",
     "x": [
      "Markiere 1 oder mehr Stress auf Blut oder Verstand, bis maximal 6. Durch Zwiesprache und geflüsterte Gebete steigt die Verderbnis der Tiefe um den Zauberer herum auf. Immer wenn für den nächsten Tag ein Charakter in der Nähe Stress nimmt (auch befreundete Charaktere), erhöhe das Ergebnis um 1 für je 2 Stress, die du beim Zauber markiert hast. Außerdem infizieren sich Wunden, Metall rostet, und Feuchtigkeit kriecht die Wände um dich herum empor."
     ]
    },
    {
     "t": "SEGEN",
     "p": 70,
     "tag": "Göttlich",
     "fl": "Waffen vermodern und zerbröckeln, wenn sie gegen dich und deine Verbündeten geführt werden.",
     "x": [
      "Markiere W3 Stress auf Blut oder Verstand und markiere 1 Stress auf Blut oder Verstand bei jedem anderen Teilnehmer des Rituals. Du legst deine Hand auf das Herz jedes Teilnehmers und bittest die Tiefe, ihn bei seinen Unternehmungen zu segnen; werden sie in der nächsten Situation mit Waffen angegriffen, verursachen diese Waffen Stress, als wären sie 1 Würfelgröße kleiner, da sie rosten, versagen und in den Händen der Angreifer auseinanderfallen."
     ]
    },
    {
     "t": "WAHRHEIT",
     "p": 70,
     "tag": "Göttlich",
     "fl": "Du sprichst die Albtraumwahrheit von Spire in dunklen, klappernden Silben.",
     "x": [
      "Markiere W3 Stress auf Verstand und deute auf jemanden in Hörweite, während du in fremden Zungen klapperst; du vermittelst ihm die ganze Erhabenheit des Verfalls, der im Herzen von Spire sitzt. Alle anderen, die dich hören, markieren 1 Verstand-Stress; das Ziel erleidet W6 Stress, oder W8 Stress, wenn du ihm beim Sprechen direkt ins Gesicht gehst."
     ]
    },
    {
     "t": "SCHWARM",
     "p": 70,
     "tag": "Göttlich",
     "fl": "Du gebierst grauenhafte Kreaturen in die Welt.",
     "x": [
      "Markiere W3 Stress auf Blut oder Verstand und würge eine sich windende Masse hervor, etwa so groß wie deine beiden zusammengepressten Hände. Wenn sie auf den Boden trifft, explodiert sie zu einem Schwarm hochgiftiger flatternder Kreaturen, die irgendetwas zwischen Motten, Bremsen und Maden sind und dich umkreisen. Jeder, der sich dir nähert, nimmt selbstverständlich W3 Stress, der sich jedes Mal wiederholt, wenn er in deiner Gegenwart handelt. Die meisten vernünftigen Leute werden einfach davonlaufen."
     ]
    }
   ],
   "hoch": []
  }
 },
 {
  "id": "verpflichtete",
  "t": "VERPFLICHTETE",
  "p": 70,
  "vor": "Diene oder diente als Soldat in den Streitkräften der Alliierten Verteidigung.",
  "auff": "Lass einen anderen Charakter deinen Befehlen folgen, auch wenn er lieber nicht würde.",
  "ein": [],
  "info": [],
  "fort": {
   "niedrig": [
    {
     "t": "WEITER GEHT'S",
     "p": 70,
     "fl": "Es gibt Wichtigeres als Schmerz.",
     "x": [
      "+1 Verstand. Markiere W3 Stress auf Verstand oder Blut; du und alle Verbündeten in der Nähe ignorieren die Auswirkungen leichten Fallouts bis zum Ende der Situation."
     ]
    },
    {
     "t": "GRUPPENFÜHRER",
     "p": 70,
     "fl": "Du warst Feldwebel in den Streitkräften der Alliierten Verteidigung.",
     "x": [
      "+1 Ruf. Erhalte die Fertigkeit Überzeugen und die Domäne Ordnung."
     ]
    },
    {
     "t": "MILITÄRISCHE AUSBILDUNG",
     "p": 70,
     "fl": "Versteckt in deiner Unterkunft hast du eine verbotene Militärwaffe, die du aus der Armee gestohlen hast.",
     "x": [
      "Erhalte die Fertigkeit Kämpfen und Zugang zu deiner Militärwaffe – entweder ein Legrande-Gewehr (W6, Präzise, Fernkampf) oder ein Raven-Langgewehr (W6, Extreme Reichweite, Nachladen, Unzuverlässig). Der Besitz dieser Waffe ist illegal."
     ]
    },
    {
     "t": "DER BLICK",
     "p": 70,
     "fl": "Du hast okkulte Ausbildung erhalten, an die du dich größtenteils nicht erinnern kannst, durch das Sondertaktikkorps.",
     "x": [
      "Erhalte Zugang zur Domäne Okkultes und +1 Verstand. Wenn du einen direkten Befehl eines Vorgesetzten im Korps verweigerst, musst du eine Probe Widerstehen+Ordnung bestehen, um ihm nicht zu gehorchen."
     ]
    }
   ],
   "mittel": [
    {
     "t": "SCHLACHTFÜHRER",
     "p": 70,
     "fl": "Du führst den Sturmangriff an.",
     "x": [
      "Wenn du einem Feind im Kampf Schaden zufügst, erhalten alle Verbündeten, die diesen Feind angreifen, für ihre Angriffe das Merkmal Brutal. Das hält an, bis du das nächste Mal handelst."
     ]
    },
    {
     "t": "BEFLÜGELND",
     "p": 71,
     "fl": "Du hast Leute auf gebrochenen Beinen laufen sehen. Du kommst hier raus.",
     "x": [
      "Wie Weiter geht's, wirkt aber auch für den ersten mittleren Fallout, den Verbündete während der Situation erleiden."
     ]
    },
    {
     "t": "LEITER",
     "p": 71,
     "fl": "Dein Verstand gehört ihnen.",
     "x": [
      "(Erfordert DER BLICK.) +1 Verstand. Du deckst eine verborgene Erinnerung auf – dir wurde vom Sondertaktikkorps ein memetisches Virus eingepflanzt. Es erlaubt Okkultisten, deinen Körper als Ritual-Stellvertreter zu nutzen. Wenn deine Verbündeten etwas von deinem Blut zur Hand haben, können sie okkulte Zauber durch dich wirken und behandeln dich dabei als Ausgangspunkt – und optional als Ziel. Der durch den Zauber erlittene Stress wird zwischen dir und dem Zauberer halbiert."
     ]
    }
   ],
   "hoch": []
  }
 },
 {
  "id": "die-glaeubigen-von-king-teeth",
  "t": "DIE GLÄUBIGEN VON KING TEETH",
  "p": 71,
  "vor": "Bete zu Füßen des albtraumhaften Halbgotts King Teeth in Grist. Zolle ihm Tribut in Form des Fleisches von Elf, Mensch oder Gnoll. Iss selbst vom verbotenen Fleisch.",
  "auff": "Iss das Fleisch von Elf, Mensch oder Gnoll. Je mehr du isst (und je schmackhafter es war), desto größer der Auffrischungswürfel.",
  "ein": [],
  "info": [],
  "fort": {
   "niedrig": [
    {
     "t": "HUSCHEN",
     "p": 71,
     "tag": "Göttlich",
     "fl": "Deine Nägel dehnen sich zu heiligen Klauen.",
     "x": [
      "Markiere W3 Stress auf Verstand oder Blut, um diesen Zauber zu wirken. Deine Finger- und Zehennägel (trage keine Schuhe) wachsen lang, hart und gelblich. Sie zählen nun nicht nur als W3-Waffen, sondern du erhältst Meisterschaft bei allen Proben auf Verfolgen oder Schleichen, bei denen es ums Klettern oder Hängen an Decken geht. Das hält bis zum Ende der aktuellen Situation an, dann werden sie spröde und splittern ab."
     ]
    },
    {
     "t": "VERSCHLINGEN",
     "p": 71,
     "tag": "Göttlich",
     "fl": "Du stopfst noch lebende Menschen in deinen Bauch, wo sie sterben.",
     "x": [
      "Wenn du ein Ziel außer Gefecht setzt oder vollständig festsetzt, kannst du es sofort im Ganzen fressen, indem du deinen Kiefer aushakst und es in deinen Magen zwängst, wo es sich windet und stirbt. Wenn du das tust, entferne W6 Stress, und jeder, der es mit ansieht, nimmt W6 Stress auf Verstand (W8, wenn er den Kerl kannte). Nachdem du sie gefressen hast, taugst du zu nicht viel, bis du sie verdaut hast – ein Vorgang, der etwa 8 Stunden dauert."
     ]
    }
   ],
   "mittel": [
    {
     "t": "WÜRGEN",
     "p": 71,
     "tag": "Göttlich",
     "fl": "Deine Magensäure ist von King Teeth gesegnet und frisst sich durch alles.",
     "x": [
      "Markiere W6 Stress auf Verstand oder Blut, um diesen Zauber zu wirken. Du erbrichst etwa einen Eimer voll entsetzlich starker Magensäure über alles vor dir. Sie schmilzt sich durch so ziemlich alles, und sie kann als W8-Verheerend-Waffe gegen jemanden eingesetzt werden, den du zuvor gepackt hast."
     ]
    }
   ],
   "hoch": []
  }
 },
 {
  "id": "greymanor-ermittler",
  "t": "GREYMANOR-ERMITTLER",
  "p": 71,
  "vor": "Bestehe ein Gespräch mit dem Besitzer von Greymanor, Maxwell Roche.",
  "auff": "Löse einen Fall, der dir vom Büro zugewiesen wurde.",
  "ein": [],
  "info": [],
  "fort": {
   "niedrig": [
    {
     "t": "ÜBER DIE EIGENEN FÜSSE STOLPERN",
     "p": 71,
     "fl": "Manchmal ist Verprügeltwerden der beste Weg, Dinge zu lernen.",
     "x": [
      "Wenn du einen Kampf verlierst, kannst du der Spielleitung drei Fragen zu deiner aktuellen Ermittlung stellen, die irgendwie mit dem Kampf zusammenhängen. Sie sollte dir ehrlich antworten."
     ]
    },
    {
     "t": "EINE NASE FÜR ÄRGER",
     "p": 71,
     "fl": "Die zivilisierte Gesellschaft ist eine schlechte Entscheidung davon entfernt, im Chaos zu versinken. Du triffst diese schlechten Entscheidungen.",
     "x": [
      "Frage einmal pro Situation die Spielleitung, welche Handlung den meisten Ärger verursachen würde. Wenn du diese Handlung ausführst, würfle mit Meisterschaft."
     ]
    },
    {
     "t": "KORRUPTION WITTERN",
     "p": 71,
     "fl": "Du weißt, an welchen Fäden man ziehen muss, um Dinge zu erledigen.",
     "x": [
      "Wähle einmal pro Situation einen NSC. Die Spielleitung nennt dir zwei Arten, auf die er korrupt ist, von denen eine wahr ist."
     ]
    },
    {
     "t": "GRÜNDLICHER ERMITTLER",
     "p": 71,
     "fl": "Du trennst die Spreu vom Weizen.",
     "x": [
      "Erhalte die Fertigkeit Ermitteln. Du weißt instinktiv, welcher Hinweis in einer Szene der wichtigste ist (wenn es mehr als einen Hinweis gibt)."
     ]
    }
   ],
   "mittel": [
    {
     "t": "JEDER HAT EIN GEHEIMNIS",
     "p": 72,
     "fl": "Niemand sagt die ganze Wahrheit.",
     "x": [
      "Wenn du einmal pro Sitzung einige Minuten mit einem NSC interagierst, frage die Spielleitung, was sein Geheimnis ist (hat er keines, denk dir eines aus). Du hast keine harten Beweise für deine Vermutung, aber du weißt in deinem Herzen, dass sie wahr ist."
     ]
    },
    {
     "t": "ZU BETRUNKEN, UM SICH ZU KÜMMERN",
     "p": 72,
     "fl": "Du bist ein abgewrackter, wertloser Säufer, der sich nicht schämt, sich zu erniedrigen, wenn ihn das aus Schwierigkeiten holt.",
     "x": [
      "Wenn du vom Fusel beladen bist und leichten oder mittleren Fallout nimmst, markiere W6 Stress auf Ruf und ignoriere die Folgen des Fallouts."
     ]
    }
   ],
   "hoch": [
    {
     "t": "EINSTECKEN",
     "p": 72,
     "fl": "Du wurdest so oft angeschossen, erstochen und am Kopf geprügelt, dass ein gebrochenes Nasenbein sich anfühlt wie ein verdammter Urlaub.",
     "x": [
      "Erhalte die Fertigkeit Widerstehen. Wenn du Stress auf Blut markieren würdest, in einer Höhe von weniger als der Hälfte deines aktuellen Blut-Stresses, markiere ihn nicht."
     ]
    },
    {
     "t": "EINE DAMNOU SPAZIERTE IN MEIN BÜRO",
     "p": 72,
     "fl": "Ein letzter Auftrag, und dann bist du raus aus dem Spiel.",
     "x": [
      "Innerhalb der Woche wird dich die Dreieinigkeit der Drow-Göttinnen, bekannt als Damnou, bitten, in ihrem Namen deine Dienste zu leisten. Das Risiko und die Belohnungen sind unmöglich groß."
     ]
    }
   ]
  }
 },
 {
  "id": "hellionit",
  "t": "HELLIONIT",
  "p": 72,
  "vor": "Besuche einige Predigten in Brother Hellions Kirche der Waffe in der Kiln Street in Red Row. Besitze eine Schusswaffe, der du einen Namen gegeben hast – Armbrüste und Bögen zählen definitiv nicht.",
  "auff": "Benutze deine Waffe, um zu bekommen, was du willst.",
  "ein": [],
  "info": [],
  "fort": {
   "niedrig": [
    {
     "t": "HEILIGER SCHUSS",
     "p": 72,
     "tag": "Göttlich",
     "fl": "Manchmal braucht es nur eine Kugel.",
     "x": [
      "Ritze die Schriften von Brother Hellion in eine Kugel und markiere 1 Blut- oder Verstand-Stress. Wenn du diese Kugel abfeuerst und triffst, erhält sie das Merkmal Brutal. Außerdem: Wenn die Stresswürfel übereinstimmen, addiere sie und verursache so viel Stress."
     ]
    },
    {
     "t": "SEGEN DER DREHTROMMEL",
     "p": 72,
     "tag": "Göttlich",
     "fl": "Du bindest dein Schicksal an eine gedrehte Trommel.",
     "x": [
      "Markiere W3 Blut-Stress, um diesen Zauber zu wirken, und drehe die Kammern einer Pistole mit Drehmagazin, würfle dann einen W6 und notiere die Zahl. Wenn du in der nächsten Situation Stress in Höhe dieser Zahl nehmen würdest, nimmst du überhaupt keinen Stress."
     ]
    }
   ],
   "mittel": [
    {
     "t": "JUNGFRAUENGEBURT",
     "p": 72,
     "tag": "Göttlich",
     "fl": "Hellions Wunder machen Pulver und Blei überflüssig.",
     "x": [
      "Markiere W3 Stress und weihe deine Waffe im Rahmen eines halbstündigen Rituals mit deinem eigenen oder fremdem Blut. Du rufst einen Engel des Schießpulvers herbei, der deine Waffe segnet, und für die nächste Situation ignorierst du das Merkmal Nachladen der Waffe."
     ]
    },
    {
     "t": "GEBUNDENER TEUFEL",
     "p": 72,
     "tag": "Göttlich",
     "fl": "Du kannst dunkle und schreckliche Geister in Waffen beschwören, mit einem verhüllten Ritus, den Brother Hellion vor seiner Gemeinde zu verbergen sucht.",
     "x": [
      "Markiere W6 Stress, um diesen Zauber über einer Schusswaffe zu wirken; er erhöht ihre Stresswürfel dauerhaft um 1 Stufe, aber sie erhält das Merkmal Gefährlich. (Du kannst diesen Zauber nicht mehr als einmal auf dieselbe Waffe wirken.)"
     ]
    }
   ],
   "hoch": [
    {
     "t": "BALLISTISCHER AVATAR",
     "p": 72,
     "tag": "Göttlich",
     "fl": "In deinen Händen sind Waffen Zerstörung und Wille in Fleisch und Blut.",
     "x": [
      "Markiere W3 Stress. Jede Schusswaffe, die du in der nächsten Situation trägst, in die du eintrittst, verursacht W8 Stress und erhält die Merkmale Durchschlagend und Extreme Reichweite."
     ]
    },
    {
     "t": "DER HEILIGE DER KUGELN",
     "p": 72,
     "tag": "Göttlich",
     "fl": "Jede Kugel in Spire liebt dich wie einen Bruder.",
     "x": [
      "Kugeln oder überhaupt alles, was mit Sprengstoff abgefeuert wird, verursachen bei dir keinen Stress mehr. Jedes Mal, wenn jemand mit Schädigungsabsicht auf dich schießt, frische W3 auf."
     ]
    }
   ]
  }
 }
]);
SP_EXTRA.boxen = SP_EXTRA.boxen.concat([
 {
  "h": "ALLGEMEINE FORTSCHRITTE",
  "b": [
   "Wenn du Zugang zu einer Fertigkeit oder Domäne haben möchtest, kannst du sie mit einem niedrigen Fortschritt kaufen. Du kannst einen niedrigen Fortschritt auch nutzen, um +1 auf einen beliebigen Widerstand zu erhalten. Das ist keine sonderlich aufregende Verwendung des Fortschritts, aber sie kann dir helfen, Fähigkeiten zu nutzen, die du durch Multiklassen oder Extra-Fortschritte erworben hast."
  ],
  "nach": "auserwaehlte-der-hungrigen-tiefe",
  "grp": "niedrig"
 }
]);
