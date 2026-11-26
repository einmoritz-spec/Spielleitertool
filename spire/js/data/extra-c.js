/* The Spire – Extra-Fortschritte aus Black Magic (Grangou, Tiefer Imker, Dämonologe) und Okkulter Fallout (BM S. 8–21), erzeugt mit plan/spire/build_klassen2.py */
window.SP_EXTRA = window.SP_EXTRA || {wege:[], boxen:[], intro:[]};
SP_EXTRA.wege = SP_EXTRA.wege.concat([
 {
  "id": "grangou",
  "t": "Grangou",
  "p": 8,
  "buch": "sp_z4",
  "vor": "Gelte als wichtige Figur innerhalb deiner Gemeinschaft. Erlerne die Geheimnisse der Grangou von einer bestehenden Praktizierenden.",
  "auff": "Löse ein Problem in deiner Gemeinschaft oder ersticke eines im Keim, bevor es außer Kontrolle gerät.",
  "ein": [
   "Weit älter als die Emporkömmlings-Glauben unserer Glorreichen Herrin und des Sonnenpantheons ist die Grangou-Magie eine uralte, mündliche Tradition, die seit Urzeiten von der Mutter zum Sohn, vom Vater zur Tochter weitergegeben wird. Ein zusammengeflicktes Gemisch aus Heckenmagie, Gebeten an schlummernde Götter und gutem altem Kochhandwerk war die Grangou-Magie schon vor dem Fluch ein Grundpfeiler der Drow-Gemeinschaften. Eine Grangou ist oft die zentrale Figur in verarmten Drow-Gemeinschaften, besonders wenn die Lajhan keine Wirkung erzielt haben; ihre Magie sorgt dafür, dass alle satt werden oder zumindest keinen Hunger spüren, und ihr Herd markiert einen Ort, an den man nach einem langen Tagwerk zurückkehren kann."
  ],
  "info": [
   "Wenn du zur Grangou wirst, markiere eine deiner Bindungen auf Straßenebene als deine Gemeinschaft. Verlierst du den Zugang zu dieser Bindung, kannst du deine Grangou-Fähigkeiten nicht nutzen, bis du dein Ansehen zurückgewinnst oder die Gemeinschaft wieder aufbaust."
  ],
  "fort": {
   "niedrig": [
    {
     "t": "GENIUS LOCI",
     "p": 8,
     "tag": "Okkult",
     "fl": "Beim tiefen Blick in die Flammen deines Herdes verbindest du dich mit der Seele deiner Gemeinschaft.",
     "x": [
      "Erhalte die Fertigkeit Ermitteln. Würfle Ermitteln+Okkultes, um diesen Zauber zu wirken. Bei einem Erfolg sprichst du mit dem Geist deiner Gemeinschaft – einem Zeitgeist aus den Gedanken, Ängsten und dem Bewusstsein aller darin. Durch Konzentration kannst du alles erfahren, was innerhalb der Grenzen deiner Gemeinschaft in der letzten Woche geschehen ist, als wärst du dabei gewesen."
     ]
    },
    {
     "t": "BROT BRECHEN",
     "p": 8,
     "fl": "Nicht alles, was die Grangou tun, ist Magie; vieles davon ist einfach gutes Essen und gute Unterhaltung.",
     "x": [
      "+1 Ruf. Wenn du Essen oder Trinken, das du zubereitet hast, mit jemandem teilst, erhältst du bei allen sozialen Proben gegen diese Person Meisterschaft, bis die Mahlzeit vorbei ist."
     ]
    },
    {
     "t": "STEINSUPPE",
     "p": 8,
     "tag": "Okkult",
     "fl": "Du ziehst Nahrung aus Hoffnung, nicht aus Essen.",
     "x": [
      "+1 Verstand, +1 Blut. Du musst nicht mehr essen oder trinken und erleidest keinen Stress, wenn du es nicht tust. Du kannst diese Wirkung für etwa eine Woche auf deine Gemeinschaft (und alle innerhalb ihrer Grenzen) ausdehnen, indem du einen Topf Steinsuppe zubereitest; würfle Flicken+Okkultes, um genug zu kochen, um alle zu sättigen."
     ]
    },
    {
     "t": "HUNGERFLUCH",
     "p": 8,
     "tag": "Okkult",
     "fl": "Du erfüllst dein Ziel mit wahrem Hunger und siehst zu, wie es dahinsiecht.",
     "x": [
      "Würfle Täuschen+Okkultes, um diesen Zauber zu wirken. Bei einem Erfolg wird ein Ziel, das dich sehen und hören kann, von deinem Hungerfluch getroffen; es erleidet W3 Stress, und seine Schwierigkeit sinkt um 1, bis es isst."
     ]
    },
    {
     "t": "BOUYON KABRIT",
     "p": 8,
     "tag": "Okkult",
     "x": [
      "*Dein Ziegeneintopf, ohnehin ein traditionelles Drow-Trostessen, ist mit magischer Kraft durchdrungen, die jenen Stärke verleiht, die ihn essen.* +1 Ruf. Würfle Flicken+Okkultes, um diesen Zauber zu wirken. Bei einem Erfolg können du und bis zu fünf weitere bis zur nächsten Morgenröte 1 zusätzlichen Blutplatz erhalten."
     ]
    }
   ],
   "mittel": [
    {
     "t": "ANSTECKUNG BREITET SICH AUS",
     "p": 9,
     "tag": "Okkult",
     "fl": "Eine dunkle Kunst, aber: Du kannst Verletzung und Wahnsinn von dir weg und in deine Gemeinschaft lenken.",
     "x": [
      "+1 Verstand. Wenn du Stress auf Verstand oder Blut nimmst, kannst du wählen, diesen Stress stattdessen auf deine Gemeinschafts-Bindung anzuwenden statt auf deine eigenen Widerstände."
     ]
    },
    {
     "t": "DAS BILD DER GESUNDHEIT",
     "p": 9,
     "tag": "Okkult",
     "fl": "Egal wie schmutzig und widerlich dein Gebiet ist, du legst ein Blendwerk darüber, damit es vollkommen behaglich wirkt.",
     "x": [
      "Würfle Täuschen+Okkultes, um diesen Zauber zu wirken. Bei einem Erfolg legst du eine Illusion über ein Gebiet, das nicht größer als ein Haus ist; alle negativen Elemente des Gebiets (Schmutz, Gefahr, hässliche Kunst usw.) werden unterdrückt und durch etwas ersetzt, das stattdessen einen Eindringling anlockt und ihn beruhigt. Dieser Effekt hält etwa eine Woche an oder bis jemand auf den Boden des Gebiets blutet – je nachdem, was zuerst eintritt."
     ]
    },
    {
     "t": "BOUYON KON",
     "p": 9,
     "tag": "Okkult",
     "fl": "Du kennst den alten Trick, Horn und Hufe in deinen Ziegeneintopf zu geben, um den Geschmack zu verstärken und die magische Wirkung zu bündeln.",
     "x": [
      "Wie BOUYON KABRIT, aber du kannst 6 zusätzliche Blutplätze nach Belieben auf bis zu sechs Personen verteilen. Diese zusätzlichen Plätze halten bis zur nächsten Morgenröte an, und du kannst diesen Zauber nur einmal pro Tag wirken."
     ]
    }
   ],
   "hoch": [
    {
     "t": "BOUYON KABRIT SAN KON",
     "p": 9,
     "tag": "Okkult",
     "fl": "Dein Kessel birgt uralte Geheimnisse in seinem geschwärzten Eisen, und du kannst Menschen aus dem Land der Toten zurückholen.",
     "x": [
      "+2 Ruf. Würfle Flicken+Okkultes, um diesen Zauber zu wirken. Du legst den Leichnam einer Person aus deiner Gemeinschaft in deinen Kessel und erschaffst eine Suppe, die mit den übrigen Mitgliedern geteilt wird. Vorausgesetzt, sie verzehren sie alle, wird die verstorbene Person im Kessel am Morgengrauen des nächsten Tages neu geboren.",
      "Der zurückkehrende Charakter verliert alle zusätzlichen Plätze in Blut und Verstand bis auf einen, sofern er überhaupt welche zu verlieren hat, und es funktioniert nur einmal bei jeder Person; wird zum zweiten Mal Suppe aus jemandem gemacht, entsteht eine widerliche, bittere Brühe, die die Gemeinschaft verflucht."
     ]
    },
    {
     "t": "HEILIGE FLAMME",
     "p": 9,
     "tag": "Okkult",
     "fl": "Du verstärkst die ewig brennende Flamme unter deinem Kochtopf, die das Herz deiner Gemeinschaft bildet, und lässt ihre Bewohner mit glühender Wut zu ihrer Verteidigung kämpfen.",
     "x": [
      "Erhalte die Fertigkeit Kämpfen. Wenn du und deine Verbündeten zur Verteidigung eurer Gemeinschaft kämpfen, verursachen alle eure Angriffe W8 Stress, und ihr erhaltet die Tags Brutal und Durchschlagend."
     ]
    }
   ]
  }
 },
 {
  "id": "tiefer-imker",
  "t": "Tiefer Imker",
  "p": 11,
  "buch": "sp_z4",
  "vor": "Werde in die Sekte der Tiefen Imker aufgenommen, die geschworen haben, die Stadt mit allen notwendigen Mitteln gegen das Herz zu verteidigen, und nimm den Bienenstock in dich auf.",
  "auff": "Zerstöre einen okkulten Magier, einen Agenten des Herzens oder ein Artefakt, das die überirdischen Kräfte jenes Ortes birgt.",
  "ein": [
   "Die Tiefen Imker sind eine Okkultisten-Sekte, zu deren Reihen Drow, Menschen und Aelfir zählen. Sie behaupten, allein die Wahrheit hinter dem Herzen zu kennen: dass es aktiv bösartig ist, eine Urkraft, älter als jeder Gott, und dass es eingedämmt und kontrolliert werden muss, damit es nicht aus Spire ausbricht und die ganze Welt verschlingt.",
   "Dies wollen sie durch den Bienenstock erreichen; eine jenseitige Intelligenz, die sich als glyphenmarkierte Bienen manifestiert. Diese Bienen werden in Stöcken gehalten, die rund um das Herz aufgestellt sind und die spirituellen und arkanen Schutzbanne verstärken, die das Herz in Schach halten – oder so behaupten sie zumindest.",
   "Das wahre Zeichen der Aufnahme bei den Imkern ist, zu einem lebenden Bienenstock zu werden – ein langwieriger und höllischer Prozess, bei dem die Organe des Imkers durch wächserne Nachbildungen ersetzt werden und der ihn als einen Agenten kennzeichnet, der der Eindämmung und möglichen Zerstörung des Herzens verschrieben ist."
  ],
  "info": [],
  "fort": {
   "niedrig": [
    {
     "t": "AUSBESSERUNG",
     "p": 11,
     "tag": "Okkult",
     "fl": "Die Bienen, die in dir leben, flicken deine Wunden mit Wachs.",
     "x": [
      "Zu Beginn jeder Situation, in der du anwesend bist, entfernst du 1 Stress von Blut."
     ]
    },
    {
     "t": "BERUHIGENDES FLÜSTERN",
     "p": 11,
     "tag": "Okkult",
     "fl": "Deine Bienen flüstern dir direkt ins Trommelfell und sagen dir, dass alles gut werden wird.",
     "x": [
      "Einmal pro Sitzung: Wenn du dir eine Minute Zeit nimmst, um mit dem Schwarm Zwiesprache zu halten, entfernst du W6 Stress von Verstand."
     ]
    },
    {
     "t": "DEN BIENENSTOCK FREILASSEN",
     "p": 11,
     "tag": "Okkult",
     "fl": "Du überflutest die Umgebung mit Bienen.",
     "x": [
      "+1 Verstand. Würfle Überzeugen+Okkultes, um diesen Zauber zu wirken. Bei einem Erfolg ergießt sich ein Bienenschwarm aus deiner Kleidung; diese Bienen verursachen bei jedem, der in deiner Nähe steht, W3 Stress, und die meisten vernünftigen Leute werden fliehen, sobald der Schwarm aufsteigt."
     ]
    },
    {
     "t": "CHAOS EINSCHÄTZEN",
     "p": 11,
     "fl": "Du entwickelst ein Auge für das Unvorhersehbare.",
     "x": [
      "Erhalte die Fertigkeit Ermitteln und die Domäne Okkultes. Einmal pro Sitzung kannst du die Spielleitung fragen, welches chaotische, unvorhersehbare Ereignis in deiner Nähe bevorsteht; du kannst versuchen, es aufzuhalten, wenn du möchtest."
     ]
    },
    {
     "t": "DAS HERZ SPÜREN",
     "p": 11,
     "tag": "Okkult",
     "fl": "Deine Augen ordnen sich zu seltsamen, jenseitigen Mustern neu an und erlauben dir, die Fäulnis im Herzen der Stadt zu spüren.",
     "x": [
      "Würfle Ermitteln+Okkultes, um diese Kraft zu wirken. Deine Augen verwandeln sich in tiefschwarze Facettenlinsen, die es dir erlauben, das heimtückische Wirken des Herzens zu erkennen; du kannst alles wahrnehmen, was vom Herzen ist (also Kultisten der Hungrigen Tiefe, Blood-Witches, nadelzahnige Kinder usw.), innerhalb eines Straßenradius um dich herum."
     ]
    }
   ],
   "mittel": [
    {
     "t": "DER SEGEN DES BIENENSTOCKS",
     "p": 12,
     "tag": "Okkult",
     "fl": "Dein Schwarm zeichnet uralte Glyphen und Sigillen in die Luft, die jene bestrafen, die versuchen, die Wirklichkeit aufzulösen.",
     "x": [
      "Würfle Flicken+Okkultes, um diesen Zauber zu wirken. Bei einem Erfolg projizierst du für den Rest der Situation eine Aura der Stabilität und Un-Chaos um dich herum – alle okkulten Zauber, die in deiner unmittelbaren Nähe gewirkt werden, einschließlich deiner eigenen, verursachen beim Zaubernden zusätzliche W6 Stress durch Rückkopplung."
     ]
    },
    {
     "t": "DIE WEISHEIT DER KÖNIGIN",
     "p": 12,
     "tag": "Okkult",
     "fl": "Die Königinnen der Tiefen Bienen sind die weisesten ihrer uralten Rasse, und deine flüstert dir sanfte Geheimnisse direkt ins Gehirn.",
     "x": [
      "+1 Verstand. Wähle zu Beginn jeder Sitzung eine Domäne – du erhältst Zugang zu dieser Domäne. Besitzt du die Domäne bereits, erhältst du einen Kniff darin."
     ]
    },
    {
     "t": "MUSTERTHEORIE",
     "p": 12,
     "tag": "Okkult",
     "fl": "Du analysierst die Bewegungen von Menschenmengen, den Puls galvanischer Energie in Gehirnen, den Rhythmus von Herzschlägen; alles ist Teil eines vollkommenen Systems.",
     "x": [
      "Einmal pro Sitzung: Wenn die Spielleitung dich auffordert, als Teil einer Probe Stress zu markieren, erkläre, dass du diese Kraft einsetzt. Statt Stress zu markieren, spulst du die Zeit zu dem Punkt unmittelbar vor deinem Würfeln zurück – alles, was geschah, spielte sich in deinem Kopf ab, als du die Situation aus bekannten Parametern hochgerechnet hast. Du kannst dann nicht dieselbe Probe wiederholen, die du gerade gemacht hast."
     ]
    }
   ],
   "hoch": [
    {
     "t": "STRAFE",
     "p": 12,
     "tag": "Okkult",
     "fl": "Dein Körper, der sich vor unergründlichen Kräften windet, wird zum Gräuel für Agenten des Herzens.",
     "x": [
      "Würfle Kämpfen+Okkultes, um diesen Zauber zu wirken, und berühre etwas, das vom Herzen ist. Gelingt dir das, wird die berührte Kreatur von einem Schwarm glyphenmarkierter Bienen in Kristall gehüllt und stirbt (oder, falls es ein Gegenstand ist, wird er unwirksam gemacht). Manche Hüter umgeben ihre Stöcke gern mit den Kristallstatuen derer, die sie eingeschlossen haben, als Warnung für andere; die Leichen verwesen nicht, und einige Imker glauben, dass ihre Opfer für immer in vollkommener Starre gefangen sind."
     ]
    },
    {
     "t": "DER SCHWARMGEIST",
     "p": 12,
     "tag": "Okkult",
     "fl": "Du breitest deinen Geist über den Schwarm aus und von ihm aus auf andere.",
     "x": [
      "Immer wenn du Stress auf Verstand markierst, teilst du ihn so gleichmäßig wie möglich zwischen dir und allen Charakteren auf, die in der Nähe stehen. Du darfst wählen, wie der Rest des Stresses verteilt wird, wenn er sich nicht gleichmäßig teilen lässt, und du musst keinen Stress auf deinen eigenen Verstandswiderstand markieren, wenn mehr Charaktere in der Nähe sind, als Stress entstanden ist."
     ]
    }
   ]
  },
  "kern": [
   {
    "t": "LEBENDIGER BIENENSTOCK",
    "p": 11,
    "tag": "Okkult",
    "fl": "Du nimmst den Schwarm in dich auf und wirst zu einem lebenden Bienenstock.",
    "x": [
     "Dies hat keine Spielwirkung, außer dass es enorm beunruhigend ist, wenn es entdeckt wird, aber es erlaubt dir, die übrigen Magien der Imker zu praktizieren."
    ]
   }
  ],
  "abschn": [
   {
    "id": "bemerkenswerte-koeniginnen-des-ordens",
    "t": "Bemerkenswerte Königinnen des Ordens",
    "p": 12,
    "intro": [
     "Die Königinnen des Bienenstocks tragen Namen, die für die Zunge von Elfen oder Menschen unaussprechlich sind; ihre Sprache ist die des summenden Flügels, des Pheromons, kunstvoller und anmutiger Tänze. In ihrem eigenen Stock ist jede Königin schlicht als „Königin“ bekannt; bei den seltenen Gelegenheiten, bei denen Bienen eines Volkes mit einem anderen sprechen und sich auf ihre Herrscherinnen beziehen müssen, werden ihre vollen Namen verwendet. Der Vorgang, den Namen einer Königin vollständig auszusprechen, kann über eine Stunde dauern und Dutzende, wenn nicht Hunderte von Bienen erfordern, weshalb die Imker unter sich eigene Namen für die Königinnen verwenden."
    ],
    "gruppen": [
     {
      "h": "",
      "karten": [
       {
        "t": "GELBE KERZE [[Yellow-Candle]], KÖNIGIN DES HERZBLÜTEN-STOCKS [[Hearts-Bloom Hive]]",
        "p": 12,
        "x": [
         "die über den größten Hain von Herzblumen in Spire gebietet und mit anderen Völkern Nektar gegen Söldnerunterstützung tauscht."
        ]
       },
       {
        "t": "FÜNF BEINE [[Five-Legs]], KÖNIGIN DES DUNKELMOOR-STOCKS [[Darkfen Hive]]",
        "p": 12,
        "x": [
         "die vor zwei Jahrzehnten in einer Schlacht gegen die Schergen des Herzens verletzt wurde und ein fein gearbeitetes silbernes Bein trägt, das das verlorene ersetzt."
        ]
       },
       {
        "t": "FRAGENDE [[Querent]], KÖNIGIN DES STOCKS VOM SONNENLOSEN STRAND [[Sunless Shore Hive]]",
        "p": 12,
        "x": [
         "die liebevoll nach der gegenwärtigen Herzogin von Aliquam benannt ist und mit den metallwebenden Spinnen der Werke einen unsicheren Waffenstillstand aushandelte, um ihren monströsen Stock zu verstärken."
        ]
       },
       {
        "t": "ASHE, KÖNIGIN DES HERRENHAUS-STOCKS [[Mansion Hive]]",
        "p": 12,
        "x": [
         "die das Geheimnis des Feuers gemeistert hat und große Freude daran hat, es gegen Hornissen oder Wespen einzusetzen, die sie in ihrem Reich entdeckt."
        ]
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "daemonologe",
  "t": "Dämonologe",
  "p": 18,
  "buch": "sp_z4",
  "vor": "Finde eine Wissensquelle, die es dir erlaubt, die Kunst der Dämonologie zu erlernen, wie den Greshkin-Kodex oder das Werk des ketzerischen Kriegerpoeten Tränen-bei-Sonnenaufgang [[Tears-At-Sunrise]].",
  "auff": "Vollbringe eine Tat, die dir von einem Dämon, mit dem du Umgang hattest, mitgeteilt wurde. Das sind wahrlich seltsame Bitten, und alle sind finster und gefährlich. Du kannst damit nicht deine eigenen Widerstände auffrischen, sondern entfernst stattdessen Stress, der gegen die Bindung markiert wurde, die du mit einem Eidolon teilst.",
  "ein": [
   "Du hast dich zu tief in die schwarzen Künste vertieft und deine Seele mit der dunkelsten aller Magien befleckt – der Dämonologie. Das Praktizieren der Dämonologie wird mit dem Tod bestraft oder mit umfassender Umerziehung und Wiedereingliederung durch geschickte Aelfir-Magi; die meisten, die bei dämonischen Riten ertappt werden, sieht man nie wieder, und wenn doch, ähneln sie kaum noch der Person, die sie zuvor waren.",
   "Das vorrangige Ziel der Dämonologie ist Schadensbegrenzung; jene, die sich der in der Kunst liegenden Kräfte bewusst sind, trainieren sich darin, der Verderbnis zu widerstehen und die Nebenwirkungen zu begrenzen. Weitere Einzelheiten über Dämonen und was sie können, finden sich auf S. 15, und über Eidolons – physische Werkzeuge für den Umgang mit jenen von jenseits – auf S. 14."
  ],
  "info": [],
  "fort": {
   "niedrig": [
    {
     "t": "DÄMON ANFLEHEN",
     "p": 18,
     "tag": "Okkult",
     "fl": "Du kennst die geheimen Künste, Pakte mit Dämonen zu schließen.",
     "x": [
      "Würfle Überzeugen+Okkultes, um dämonische Energie in ein Eidolon zu beschwören und es zu aktivieren. Das erfolgreiche Wirken dieses Zaubers erlaubt es dir, den Dämon auf dieselbe Weise um Gefallen zu bitten wie bei einer normalen NSC-Bindung; er ist unerlässlich, um als Dämonologe zu funktionieren."
     ]
    },
    {
     "t": "DÄMONISCHE RESONANZ",
     "p": 18,
     "tag": "Okkult",
     "fl": "Du hast deinen Geist darauf trainiert, sich vielen verschiedenen Formen dämonischer Energie anzupassen.",
     "x": [
      "Wenn du zum ersten Mal ein Eidolon berührst, markierst du keinen Stress wie andere – stattdessen frischst du W6 auf."
     ]
    }
   ],
   "mittel": [
    {
     "t": "KLEINES EIDOLON ERSCHAFFEN",
     "p": 18,
     "tag": "Okkult",
     "fl": "Mit Hinterhof-Okkultismus und improvisierten Materialien fertigst du ein neues Eidolon – ein Gefäß für dämonische Energie.",
     "x": [
      "Würfle Flicken+Okkultes, um ein Eidolon für einen Dämon zu bauen, dessen Namen du kennst. Bei einem Erfolg erschaffst du das Eidolon; aller gegen es markierte Stress wird verdoppelt."
     ]
    },
    {
     "t": "GEISTIGE BARRIERE",
     "p": 18,
     "fl": "Du hast deinen Geist darauf trainiert, zu einer Festung zu werden, und okkulter Rückschlag findet dort keinen leichten Halt.",
     "x": [
      "Wenn du Stress durch das Wirken eines okkulten Zaubers markierst, würfle einen W3; verringere den Stress, den du erleidest, um diesen Betrag."
     ]
    },
    {
     "t": "KLEINER EINBRUCH",
     "p": 18,
     "tag": "Okkult",
     "fl": "Du kennst einen geheimen, verbotenen Ritus: wie man rohe dämonische Macht in die Welt kanalisiert.",
     "x": [
      "Würfle Überzeugen+Okkultes, während du ein Eidolon berührst, um diesen Zauber zu wirken. Bei einem Erfolg wird ein Gebiet von der Größe eines Hauses um den Zaubernden für etwa die nächste Minute mit sengender Unwirklichkeit erfüllt und tötet alle und alles, was sie nicht unwiderruflich in den Wahnsinn treibt. Das schließt dich ein."
     ]
    }
   ],
   "hoch": [
    {
     "t": "LEITER BRANDMARKEN",
     "p": 19,
     "tag": "Okkult",
     "fl": "Du hast die dunkle Kunst erlernt, einen anderen mit deiner Resonanz zu brandmarken, auf welchem Weg auch immer, und er wird als dein Stellvertreter handeln.",
     "x": [
      "Würfle Flicken+Okkultes, um diesen Zauber auf jemanden zu wirken, den du hilflos gefesselt vor dir hast. Bei einem Erfolg hast du ihn an deine okkulte Resonanz gebunden. Indem du dich konzentrierst, kannst du durch seine Augen sehen, und du kannst okkulte Zauber durch ihn wirken, wobei er als Ausgangspunkt gilt. Dadurch kannst du den unmittelbaren Auswirkungen eines Einbruchs entgehen."
     ]
    },
    {
     "t": "GROSSER EINBRUCH",
     "p": 19,
     "tag": "Okkult",
     "fl": "Du bist im Besitz einer der zerstörerischsten Waffen der bekannten Welt. Wie wirst du sie einsetzen?",
     "x": [
      "Wie KLEINER EINBRUCH, aber er betrifft ein Gebiet von der Größe eines Distrikts."
     ]
    },
    {
     "t": "GROSSES EIDOLON ERSCHAFFEN",
     "p": 19,
     "tag": "Okkult",
     "fl": "Mit uralten Techniken und moderner Raffinesse besitzt du die fast einzigartige Fähigkeit, ein originales, funktionierendes Eidolon zu fertigen.",
     "x": [
      "Dies funktioniert wie KLEINES EIDOLON ERSCHAFFEN, aber das erschaffene Eidolon erleidet Stress normal."
     ]
    }
   ]
  }
 }
]);
SP_EXTRA.fallout = {
 "id": "okkulter-fallout",
 "t": "Okkulter Fallout",
 "p": 20,
 "buch": "sp_z4",
 "intro": [
  "Wenn du Fallout infolge des Wirkens eines okkulten Zaubers erleidest, Ziel eines okkulten Zaubers wirst oder Umgebungen trotzt, die von magischer Umgebungsenergie durchzogen sind (das Herz, das Vermissian, der Bau einer Blood-Witch usw.), kannst du okkulten Fallout erleiden. Die Spielleitung darf bei Bedarf gern Ergebnisse aus der Tabelle unten ziehen.",
  "Einige der Ergebnisse unten sind als [Hex-Maladi] markiert; dies sind ansteckende Zauber oder Flüche, die sich in deinem Geist festsetzen und warten, bis die richtigen Bedingungen erfüllt sind, bevor sie sich spontan selbst wirken. Jedes Mal, wenn du den Zauber wirkst, sollte die Spielleitung einen W6 würfeln – bei einer 6 hat sich jemand anderes infolge deiner Handlungen mit der Krankheit angesteckt.",
  "Okkulten Fallout zu entfernen erfordert besondere Ausbildung und wahrscheinlich einen schmerzhaften Prozess des Segnens und der Läuterung in einem Tempel."
 ],
 "gruppen": [
  {
   "h": "Leicht",
   "karten": [
    {
     "t": "FLÜCHTIGES MAL",
     "p": 20,
     "tag": "Okkult",
     "x": [
      "Bis zur nächsten Morgenröte trägst du ein Merkmal oder Mal, das die Zauberei in deinem Blut verrät – Hörner, leuchtende Augen, Glyphen, die über deine Haut wimmeln, Motten, die deine Kehle hinaufkriechen, und so weiter. Wenn du willst, dass dir jemand vertraut oder dich freundlich behandelt, während du das Mal trägst, erhöhe die Schwierigkeit der Probe um 1."
     ]
    },
    {
     "t": "HERZ AUF DER ZUNGE",
     "p": 20,
     "tag": "Okkult",
     "x": [
      "Bis zum Ende der nächsten Sitzung lassen alle Lügen, die du erzählst, die Wahrheit als Tätowierung auf deiner Haut oder als Muster auf deiner Kleidung erscheinen. Diese verblassen mit der Zeit."
     ]
    },
    {
     "t": "UNGLÜCKSFLUCH",
     "p": 20,
     "tag": "Okkult, Hex-Maladi",
     "x": [
      "Einmal pro Sitzung, wenn du bei einem Würfelwurf mindestens eine 10 würfelst, darf die Spielleitung diesen Fluch aktivieren; dein höchster Würfel zählt stattdessen als 1, und ein magisches Merkmal erscheint auf deinem Körper, um dir zu zeigen, dass es der Hex-Maladi war."
     ]
    }
   ]
  },
  {
   "h": "Mittel",
   "karten": [
    {
     "t": "KNOCHENFLUCH",
     "p": 20,
     "tag": "Okkult, Hex-Maladi",
     "x": [
      "Wenn du jemals 3 oder mehr Stress auf Ruf markierst, wirkst du diesen Zauber auf die Person, die deiner Ansicht nach (laut Spielleitung) dafür verantwortlich ist, dass du das Gesicht verloren hast; ihr Knochenmark verwandelt sich kurz in sich windende Hundertfüßer und stechende Ameisen, verursacht W8 Stress und erfüllt sie mit qualvollem Schmerz."
     ]
    },
    {
     "t": "FEENFLUCH",
     "p": 20,
     "tag": "Okkult",
     "x": [
      "Wenn du jemals ungeschmiedetes Eisen berührst oder fließendes Wasser überquerst, markiere W6 Stress. Wenn du geschmiedetes Eisen berührst oder stehendes Wasser überquerst, markiere W3 Stress."
     ]
    },
    {
     "t": "HEXENMAL",
     "p": 20,
     "tag": "Okkult",
     "x": [
      "Wie FLÜCHTIGES MAL, aber die Veränderung ist dauerhaft."
     ]
    },
    {
     "t": "ZAUBERMAGNET",
     "p": 20,
     "tag": "Okkult",
     "x": [
      "Die Resonanz deiner Seele schwingt im Takt mit Magie und wird von ihr angezogen. Markiert ein Ziel in der Nähe Stress, weil es Gegenstand eines Zaubers ist, wird der Stress zwischen dir und ihm halbiert."
     ]
    },
    {
     "t": "NADELZAHN-KIND",
     "p": 20,
     "tag": "Okkult, Hex-Maladi",
     "x": [
      "Wenn du schläfst, wirkst du diesen Zauber. Eine langgliedrige, knochige Kreatur mit Nadelzähnen entfaltet sich aus deinem Mund und kriecht hinaus auf die Straßen, um Unheil anzurichten, und kehrt zurück, um wieder in dich hineinzukriechen, bevor du erwachst. Anfangs wird sie nur kleinen Unfug treiben (Katzen ausweiden, Altäre schänden usw.), doch bald wird sie zu Überfall, Diebstahl und Mord übergehen. Sie hat dein Gesicht. Sie zu töten wird die Infektion nicht stoppen; sie kriecht das nächste Mal wieder aus dir hervor, wenn du einschläfst. Du kannst das Ding möglicherweise einfangen – aber es ist gerissen und kann mit der Zeit aus den meisten Käfigen entkommen oder sich einfach zu Tode hungern. Wird sie in die Enge getrieben, hat die Kreatur folgendes Profil:",
      {
       "t": "dl",
       "x": [
        [
         "Widerstand",
         "4"
        ],
        [
         "Schwierigkeit",
         "0"
        ],
        [
         "Ausrüstung",
         "Nadelzähne und schmutzige Klauen (W3, Anhaltend W3)"
        ]
       ]
      }
     ]
    }
   ]
  },
  {
   "h": "Schwer",
   "karten": [
    {
     "t": "FETCH",
     "p": 21,
     "tag": "Okkult",
     "x": [
      "Eine Kopie von dir, die einige, aber nicht alle deiner Erinnerungen und Eigenheiten trägt, versucht, sich in dein Leben zu schleichen und dich zu ersetzen. Sie besteht aus gebrochenen Federn, Tierknochen und alter Kleidung, die mit einem Blendwerk so verzaubert sind, dass sie wie du aussehen, und ohne spezielle Ausbildung und Magie werden nur wenige den Unterschied zwischen dir und ihr erkennen können. Sie wird vor nichts zurückschrecken, um dich dauerhaft zu ersetzen."
     ]
    },
    {
     "t": "ALBTRÄUME",
     "p": 21,
     "tag": "Okkult",
     "x": [
      "Eine mächtige Blood-Witch hat deine Kräfte bemerkt und möchte dich für ihren Hexenzirkel anwerben. Weigerst du dich oder arbeitest nicht hart genug darauf hin, eine Blood-Witch in ihrem Bann zu werden, hockt sie sich jede Nacht auf deine Brust und sieht dir beim Schlafen zu, oder beim Versuch zu schlafen, und du wirst dich bis zum Morgen nicht bewegen können. Solange du dich in diesem wahnsinnigen, schlaflosen Zustand befindest, wird aller Stress, der durch Auffrischen oder andere Methoden entfernt wird, halbiert."
     ]
    }
   ]
  }
 ]
};
