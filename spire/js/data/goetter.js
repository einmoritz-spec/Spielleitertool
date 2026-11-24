/* The Spire – Neue Götter, Anhang 1 (erzeugt mit plan/spire/build_goetter.py) */
window.SP_GOETTER = {
 "p": 183,
 "intro": [
  "Jedes Jahr strömen Scharen neuer Religionen durch den Blauen Hafen nach Spire und füllen die Straßen von Pilgerweg und Neuer Himmel mit heiligen Glocken und geheulten Gebeten. Die folgenden acht Götter sind innerhalb des letzten Jahrzehnts eingetroffen und haben sich bereits eine Reihe ergebener Anhänger gesichert."
 ],
 "box": {
  "h": "Schutzheilige",
  "b": [
   "Diese Götter sind unsere Art, einigen Leuten zu danken, die für unsere Kickstarter-Kampagne besonders großzügig gespendet haben. Wir haben ihre Namen in jedem Eintrag aufgeführt, damit man erkennt, welcher welcher ist.",
   "Viele dieser Götter sind Menschen oder zumindest menschlichen Ursprungs, doch Drow können sie dennoch im Austausch gegen Macht anbeten."
  ]
 },
 "goetter": [
  {
   "id": "ishtuk",
   "t": "Ishtuk",
   "sub": "Gott der persönlichen Dämonen",
   "patron": "Alex Howard Whitaker",
   "p": 185,
   "img": "gott/ishtuk",
   "intro": [
    "In der felsigen Wüste weit im Süden beten die Drow von Aliquam – zusätzlich zur Verehrung der drei Göttinnen, wie es von allen frommen Dunkelelfen erwartet wird – eine große Vielfalt von Göttern an, die sie auf den Etappen ihres umherziehenden Wagenzugs gesammelt haben. Ishtuk ist einer von ihnen – der Bruder von Charnel, dessen Carrion-Priest-Kultisten die Straßen von Neuer Himmel säumen – und er ist ein graues Wesen mit müden Augen, dessen Balsam von grimmigen, steinernen Drow gesucht wird. Ihr Leben ist eines der Selbstverleugnung und Beherrschung, der so lange aufgeschobenen Befriedigung, dass sie nie eintrifft.",
    "Der Glaube an Ishtuk war vor einem Zeitalter der vorherrschende Glaube in ganz Aliquam, bis sich ihr Glück wendete und die strenge, konservative Führungselite nach und nach durch Lebemänner und charismatische Scharlatane ersetzt wurde, deren Laissez-faire-Politik heute das stereotype Bild der aliquamischen Politik prägt.",
    "Ishtuk predigt, die eigenen Dämonen anzuketten – hält man sie an der Leine, so das Argument, können sie den Geplagten nützlich sein. Mit einer Dosis magischer Energie lassen sich die Dämonen buchstäblich austreiben und anketten oder losschicken, um deinen Willen auszuführen."
   ],
   "vor": "Schwöre auf dem Altar von Ishtuk, einem kahlwandigen, aber blitzsauber gefegten Tempel in den Tiefen von Neuer Himmel, etwas ab, das du liebst.",
   "auff": "Lass dich in Versuchung führen und widersteh auf eigene Kosten. Meist verlangt das einen Wurf auf Widerstehen irgendeiner Art.",
   "boxen": [],
   "fort": {
    "niedrig": [
     {
      "t": "DER GESTANK DES LASTERS",
      "p": 185,
      "tag": "Göttlich",
      "fl": "Du riechst den Gestank der Begierde, der von deinen Mitmenschen ausgeht.",
      "x": [
       "Markiere W3 Stress auf Verstand, um diesen Zauber zu wirken. Bestimme einen NSC, den du eine Stunde lang beobachtet (oder mit dem du ein paar Minuten geplaudert) hast. Die Spielleitung sagt dir, was sein Laster ist und wie lange es her ist, dass er ihm gefrönt hat."
      ]
     }
    ],
    "mittel": [
     {
      "t": "ÜBLES AUSHUSTEN",
      "p": 185,
      "tag": "Göttlich",
      "fl": "Du kannst Unglück und Sehnsucht aushusten und hochwürgen.",
      "x": [
       "Einmal pro Sitzung kannst du allen angesammelten Stress als Mundvoll giftigen schwarzen Teers aushusten. Dieser Teer funktioniert als Waffe mit einem anderen Profil, je nachdem, wie viel Verstand-Stress du abgebaut hast:",
       {
        "t": "tbl",
        "rows": [
         [
          "1-3",
          "W6, Einweg"
         ],
         [
          "4-7",
          "W6, Durchschlagend, Fernkampf, Einweg"
         ],
         [
          "8+",
          "W8, Durchschlagend, Fernkampf, Streuung W6, Einweg"
         ]
        ]
       },
       "Der Teer kann außerdem die meisten Materialien mühelos durchschmelzen, gibt dabei aber Schwaden stinkenden Dampfes ab. Wenn du diesen Zauber wirkst, erleide den Fallout ERSCHÜTTERT, der die Auswirkungen auf deinen Körper darstellt."
      ]
     },
     {
      "t": "DIE BEGIERIGEN AUSTREIBEN",
      "p": 185,
      "tag": "Göttlich",
      "fl": "Du gebierst einen Homunculus der Begierde.",
      "x": [
       "Markiere W6 Stress auf Blut oder Verstand, um diesen Zauber zu wirken. Im Rahmen eines einstündigen Reinigungsrituals beschwörst du aus deinem Inneren eine grimmige, belebte Verkörperung deiner Begierden. Das Aussehen der Kreatur liegt bei dir, doch sie ist nicht größer als ein Hund.",
       "Solange sich die Kreatur außerhalb von dir befindet, kannst du von deinem Laster nicht in Versuchung geführt werden (du kannst diese Fähigkeit aber nicht nutzen, um deine Auffrischen-Fähigkeit auszulösen). Sie gehorcht deinen Befehlen, so gut sie kann. Sie ist offensichtlich magisch und unangenehm anzusehen und spricht wahrscheinlich mit einer krächzenden, greisen Version deiner eigenen Stimme. Sie ist gut im Schleichen, Beobachten und Stehlen, und ihr teeriger, stechender Griff richtet im Kampf W3 Schaden an.",
       "Vor der nächsten Morgendämmerung musst du die entsetzliche Kreatur wieder in dich aufnehmen oder 1 Stress auf Verstand markieren (bleibst aber immun gegen deine Gelüste). Für jede weitere Morgendämmerung, die vergeht, musst du 1 zusätzlichen Stress auf Verstand markieren."
      ]
     },
     {
      "t": "FLUCH DES VIELFRASSES",
      "p": 185,
      "tag": "Göttlich",
      "fl": "Du enthüllst die wahre Natur deines Ziels – eine zügellose Bestie, getrieben von dunklen Impulsen.",
      "x": [
       "Markiere W6 Stress auf Blut oder Verstand, um diesen Zauber zu wirken. Das Ziel, mit dem du eine Sekunde lang Blickkontakt halten musst, wird bis zur nächsten Morgendämmerung dazu getrieben, seinen niedersten Trieben nachzugehen."
      ]
     }
    ],
    "hoch": []
   },
   "fallout": []
  },
  {
   "id": "luxulyan",
   "t": "Luxulyan",
   "sub": "Der Herzog der Lüfte",
   "patron": "Andy Moore",
   "p": 187,
   "img": "gott/luxulyan",
   "intro": [
    "Die Anhänger des menschlichen Gottes Luxulyan bauen Himmelsschreine: persönliche, angetriebene Flugeinheiten, die es ihnen mit einer Mischung aus technischem Know-how und göttlichem Beistand ermöglichen zu fliegen. Obwohl sich die Entwürfe der Gläubigen unterscheiden – von gefiederten Umhängen, die einklappbare Streben verbergen, über summende Ultraleichtmetall-Flügel, gewoben von Stahlweber-Spinnen, bis zu großen, unhandlichen Konstruktionen aus Holz und straffem Leinen –, sind sie ebenso Andachtsaltäre wie heilige Instrumente und deshalb mit Dutzenden Zierstücken geschmückt, die dem Herzog der Lüfte gewidmet sind. Federn, Material aus den Himmelsschreinen verstorbener Gläubiger, abgefüllte Luft aus besonders seltenen Höhen, Druckanzeiger und heilige barometrische Wahrsagegeräte; ein echter Luxulyit klimpert beim Gehen und nimmt seinen Himmelsschrein nur ab, wenn es absolut nötig ist.",
    "Von den Jüngern von Grimaldi aus Neuer Himmel vertrieben, residiert der Kult von Luxulyan nun in den Himmelsdocks inmitten des Knäuels anderer fremder Tempel im Zentrum des Distrikts und verdient sich ein ordentliches Auskommen nebenbei damit, beim Umladen von Waren von angedockten Himmelswalen in die Stadt zu helfen. Sie sind gastfreundlich, wenn auch ein wenig seltsam, und neue Mitglieder werden mit offenen Armen empfangen – vorausgesetzt, sie haben das Geschick, ihren eigenen Himmelsschrein zu bauen und sich ihren Brüdern und Schwestern in der heiligen Handlung des Fliegens anzuschließen."
   ],
   "vor": "Gewinne das Vertrauen des Kults von Luxulyan, indem du an seinen furchterregenden Initiationszeremonien teilnimmst.",
   "auff": "Füge deinem Himmelsschrein etwas Bedeutsames hinzu und weihe ihn mit einem Flug.",
   "boxen": [],
   "fort": {
    "niedrig": [],
    "mittel": [
     {
      "t": "HIMMELSSCHREIN",
      "p": 187,
      "tag": "Göttlich",
      "fl": "Du baust einen Himmelsschrein: ein Gerät, das die Energie des Göttlichen in glorreichen Flug kanalisiert.",
      "x": [
       "Dein Himmelsschrein funktioniert wie eine NSC-Bindung, auch wenn er Stress nicht auf dieselbe Weise ansammelt wie gewöhnliche Bindungen. Während du deinen Himmelsschrein trägst (oder je nach Größe in ihm sitzt), kannst du Stress auf die Bindung markieren, um die Kraft des Fluges zu nutzen:",
       "Bei allen folgenden Kräften kannst du so viele Personen mitnehmen, wie du festhalten kannst (oder wie sich an dir festhalten können), zum Preis von zusätzlich 1 Stress pro mitgenommener Person.",
       "GLEITEN. [Göttlich] Markiere 1 Stress auf deinem Himmelsschrein, um diesen Zauber zu wirken. Bis zum Ende der aktuellen Situation fällst du aus jeder Höhe langsam und sicher."
      ]
     },
     {
      "t": "SPRUNG",
      "p": 187,
      "tag": "Göttlich",
      "x": [
       "Markiere W3 Stress auf deinem Himmelsschrein, um diesen Zauber zu wirken. Bis zum Ende der aktuellen Situation kannst du solide 30 Fuß senkrecht nach oben und etwa 50 Fuß waagerecht springen und aus jeder Höhe sicher landen."
      ]
     },
     {
      "t": "SCHWEBEN",
      "p": 187,
      "tag": "Göttlich",
      "x": [
       "Markiere W3 Stress auf deinem Himmelsschrein, um diesen Zauber zu wirken. Bis zum Ende der aktuellen Situation kannst du auf deiner aktuellen Höhe schweben, ohne Angst vor dem Fallen. Du kannst deine Höhe mit etwa 3 Fuß pro Sekunde nach oben oder unten anpassen: Das ist nicht besonders schnell."
      ]
     },
     {
      "t": "FLIEGEN",
      "p": 187,
      "tag": "Göttlich",
      "x": [
       "Markiere W6 Stress auf deinem Himmelsschrein, um diesen Zauber zu wirken. Bis zum Ende der aktuellen Situation kannst du mit derselben Geschwindigkeit und Wendigkeit wie ein schwerer Vogel fliegen – etwa eine Gans oder ein Schwan. Wenn du nicht auch SPRUNG wirkst, brauchst du Anlauf oder musst von etwas Hohem abspringen, um genug Geschwindigkeit zum Fliegen zu gewinnen.",
       "Würfle auf Fallout, wenn du Stress auf die Bindung markierst, statt damit bis zum Ende der Sitzung zu warten. Dabei wird die folgende besondere Fallout-Tabelle verwendet:"
      ]
     }
    ],
    "hoch": []
   },
   "fallout": [
    {
     "t": "Leicht",
     "x": [
      {
       "t": "INEFFIZIENT",
       "p": 187,
       "tag": "Himmelsschrein",
       "x": [
        "Etwas Unwesentliches geht kaputt, und es kostet viel mehr Kraft, dich in der Luft zu halten. Bis zum Ende der nächsten Sitzung erhöhe jeden auf den Himmelsschrein markierten Stress um 1."
       ]
      }
     ]
    },
    {
     "t": "Mittel",
     "x": [
      {
       "t": "FUNKTIONSUNFÄHIG",
       "p": 187,
       "tag": "Himmelsschrein",
       "x": [
        "Am Ende der aktuellen Situation hört dein Himmelsschrein auf zu funktionieren, bis du ihn zum Tempel des Kults zurückbringst und mit Hilfe deiner Glaubensgeschwister neu weihst."
       ]
      }
     ]
    },
    {
     "t": "Schwer",
     "x": [
      {
       "t": "ABSTURZ",
       "p": 187,
       "tag": "Himmelsschrein",
       "x": [
        "Wie FUNKTIONSUNFÄHIG, doch er versagt im denkbar schlechtesten Moment, und du fügst dir selbst großen Schaden zu. Wähle: Opfere entweder den Himmelsschrein und markiere W6 Stress auf Blut (und kannst keine Zauber mehr durch ihn wirken, bis du einen weiteren Mittleren Fortschritt ausgibst, um ihn erneut zu kaufen) oder markiere W8, Brutal Stress auf Blut, rettest dabei aber deinen Himmelsschrein."
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "apash",
   "t": "Apash",
   "sub": "Der Märtyrer von Whitecross",
   "patron": "Apostolis Dousias",
   "p": 189,
   "img": "gott/apash",
   "intro": [
    "Apash spielte vor etwa hundertfünfzig Jahren in einem Aufstand eine entscheidende Rolle beim Sturz des tyrannischen Barons Graich, des despotischen Herrschers von Whitecross. Obwohl er beim Sturm auf Graichs letzte Festung tief in der ausgeweideten Arkologie von Whitecross starb, gilt er im Volksmund als Held der Revolution. Menschen mit Gerechtigkeitssinn und antiautoritärer Ader erweisen ihm in einem heruntergekommenen Tempel im Pilgerweg ihre Ehre. Täglich werden Predigten über seine Drei Tage gehalten – die Zeit, die er sich ohne Nachschub oder Hilfe gegen den Baron behauptete und auf das Eintreffen alliierter Truppen wartete –, und die Gläubigen werden ermutigt, ihr eigenes Leben zu prüfen, um zu sehen, welche Opfer sie bringen können, um das Los ihrer Mitmenschen zu verbessern.",
    "Seine Symbole sind: die Taschenuhr, ein Stück menschlicher Technik, das es dem Träger erlaubt, die Zeit mit sich herumzutragen (was sich in Spire nie durchgesetzt hat) und das nach Aussage seiner Anhänger die tickende Uhr des Volkes symbolisiert, das darauf wartet, seine Herren zu stürzen; und der charakteristische grüne gewachste Mantel der Garde von Whitecross, den er beim finalen Sturm berühmterweise trug. Es heißt, sein kugeldurchlöcherter, befleckter, abgewetzter Mantel sei noch irgendwo da draußen, und jeder, der ihn trägt, werde von seinem Eifer und Geist erfüllt."
   ],
   "vor": "Schließe dich dem Kult von Apash im Pilgerweg an und spende etwas Wertvolles für die Sache.",
   "auff": "Spende etwas Nützliches oder Wertvolles für die Sache.",
   "boxen": [],
   "fort": {
    "niedrig": [
     {
      "t": "GEMEINSAMES GEBIET",
      "p": 189,
      "tag": "Göttlich",
      "fl": "Deine Feinde nennen dich einen Aufwiegler; du sagst, du bist ein Held des Volkes.",
      "x": [
       "Wähle einen Niedrigen Fortschritt aus der Klasse Firebrand (wie bei fast allen Fortschritten kannst du diesen Fortschritt nur einmal nehmen)."
      ]
     },
     {
      "t": "SELBSTOPFER",
      "p": 189,
      "tag": "Göttlich",
      "fl": "Apash hat dich gelehrt, dass die Lösung all deiner Probleme in dir selbst zu finden ist.",
      "x": [
       "Einmal pro Situation: Wenn du Stress auf Silber, Ruf oder Schatten erleidest, markiere ihn stattdessen auf Blut oder Verstand."
      ]
     }
    ],
    "mittel": [
     {
      "t": "BIS ZUM LETZTEN ATEMZUG",
      "p": 189,
      "tag": "Göttlich",
      "fl": "Du hörst nicht auf, bis die blutige Arbeit getan ist.",
      "x": [
       "Markiere W6 Stress auf Verstand oder Schatten, um diesen Zauber zu wirken. Dabei bestimmst du ein Gebiet (etwa von der Größe eines Hauses), das du gegen deine Feinde verteidigst. Solange du innerhalb dieses Gebiets stehst, musst du weder essen noch schlafen und brauchst nicht auf Fallout zu würfeln, wenn du Stress auf Blut oder Verstand erleidest. Wenn das Gebiet sicher ist oder wenn drei Tage vergangen sind, würfle auf Fallout."
      ]
     },
     {
      "t": "GERECHTE REDEKUNST",
      "p": 189,
      "fl": "Du hast die Angewohnheit, deinen Verbündeten wütende Predigten zu halten, um sie bei der Stange zu halten, selbst wenn es alles schlimmer machen könnte.",
      "x": [
       "Wenn eine Bindung Fallout erleidet, darfst du einen W6 würfeln; bei 3+ wird der Fallout ignoriert. Bei 1 oder 2 wird er auf die nächste Stufe hochgestuft."
      ]
     }
    ],
    "hoch": [
     {
      "t": "EIN GUTER TOD",
      "p": 189,
      "tag": "Göttlich",
      "fl": "Deine Ideale halten dich aufrecht, wo andere fallen würden.",
      "x": [
       "Wie BIS ZUM LETZTEN ATEMZUG, doch du kannst stattdessen eine Person, eine Gruppe, eine Mission oder eine Idee verteidigen statt eines Gebiets."
      ]
     }
    ]
   },
   "fallout": []
  },
  {
   "id": "carabys",
   "t": "Carabys",
   "sub": "Der Angekettete Gott",
   "patron": "Conan John French",
   "p": 191,
   "img": "gott/carabys",
   "intro": [
    "Tief im Pilgerweg, hinter mehreren verborgenen Türen und fallenbewehrten Portalen, liegt der Gott namens Carabys an die Steinplatten gekettet. Sein Mund ist mit einer angenähten Metallplatte geknebelt, denn wenn er spricht, bringen seine Worte Wahnsinn, Tod und Sünde. Um ihn herum verstärkt eine Schar ergebener Diener die heiligen Schutzzeichen, die seine erdgebundene Gestalt eingesperrt halten, und flüstert ihm Geheimnisse und Versprechen ins Ohr. Unter den wirklich Verzweifelten oder wirklich Neugierigen ist Carabys so etwas wie eine Legende; er besitzt großes Wissen über alle Dinge und kann in die Vergangenheit, die Zukunft und die Herzen derer blicken, die ihr Leben in der Stadt verbringen.",
    "Carabys – oder zumindest sein Avatar in Spire – war einst ein menschlicher Söldner, der Begabung für Dämonologie und angewandte Ätherik zeigte und deshalb rasch von der Abteilung Spezialtaktik der Armee verschleppt und mit einem Aelfir-Lied implantiert wurde, das ihn als Leiter fungieren lassen sollte – ein lebender Magiekreis, durch den man aus sicherer Entfernung Dämonen beschwören kann. Der Söldner jedoch entfesselte nicht die volle Macht der dämonischen Invasion, als sie durch ihn geleitet wurde, und stattdessen fand sie Halt in seinem Kopf. Erfüllt von unvorstellbaren Kräften entkam er seinen Aufsehern und kehrte auf der Suche nach Hilfe nach Spire zurück.",
    "Er fand keine. Ausgebrannt und halb wahnsinnig von dem, was er gesehen und bewirkt hatte, wurde er von einem Kult aus dämonologischen Priestern entführt, die in ihm eine stabile Verbindung zum Göttlichen sahen – dem brodelnden, unergründlichen Meer aus Energie, aus dem Dämonen geboren werden. Seine Hände wurden in Fesseln gelegt, sein Mund zugetackert, und sein Körper wurde als Kanal für Geheimnisse benutzt, die aus dem Äther gepflückt wurden. Carabys – ob Dämon, Gott oder etwas ganz anderes – hat seine Eingeweide inzwischen fast vollständig ersetzt und ist zu einem Wesen verborgener Wahrheiten geworden. Er kann wochenlang von der Kunde einer einzigen Indiskretion überleben; eine Tatsache, die in einem einzigen Buch niedergeschrieben und dann verbrannt wird, ist für ihn ein edler Wein.",
    "Wer sich Carabys nähert, sofern er ihn findet, darf von den flüsternden Dienern eine Frage stellen. Er wird vor ihm auf einen Stuhl gebunden und unter Drogen gesetzt, und er betritt ein traumähnliches Reich in seinem eigenen Geist – oder dem Geist von Carabys, oder beiden –, wo Carabys ihm die Frage nennt, die er ihm gleich stellen wird, denn Carabys weiß alle Dinge. (In dieser Welt erscheint er in ungefesselter Gestalt und spricht höflich, wenn auch etwas streng, mit Besuchern.) Das Treffen dient dazu, einen Preis festzulegen, und seine Kosten sind hoch.",
    "Wer ihn um etwas bittet, kann froh sein, wenn er nur materiellen Reichtum oder vielleicht einen Finger oder ein Ohr opfern oder auf Geheiß von Carabys seltsame, scheinbar willkürliche Aufgaben erfüllen soll. Wer etwas wirklich Besonderes wissen will, wird gebeten, seine Liebsten in Keller zu schleppen und sie im Dienste des gebundenen Gottes zu ermorden oder Gliedmaßen, Augen, Sinne zu verlieren. Doch: Er ist kein Lügner und hält seine Versprechen stets. Es liegt am Bittsteller, ob er den Preis zahlen will.",
    "Ein Teil der Geheimhaltung um den Aufenthaltsort von Carabys dient dazu, seinen Avatar vor der Abteilung Spezialtaktik zu verbergen, die ihn unbedingt wieder einfangen und genau herausfinden will, was geschah, als der Leiter-Prozess schiefging. Sie sind nah dran, aber noch nicht ganz am Ziel. Ob Carabys will, dass sie ihn finden, bleibt abzuwarten; er ist hier versklavt und gezwungen, mit Sterblichen um Brosamen zu feilschen.",
    "Verbrechen."
   ],
   "vor": null,
   "auff": null,
   "boxen": [],
   "fort": {
    "niedrig": [],
    "mittel": [],
    "hoch": []
   },
   "fallout": []
  },
  {
   "id": "the-many",
   "t": "Die Vielen",
   "sub": null,
   "patron": "EviL JoN",
   "p": 193,
   "img": "gott/the-many",
   "intro": [
    "Die Heimatnationen von Ys, der letzten großen Bastion der Drow, befinden sich im Krieg mit sich selbst. Seit einem Jahrhundert wird es von inneren Unruhen heimgesucht, und viele der Drow, die ein Leben in verarmter Knechtschaft in Spire wählen, sind Flüchtlinge, die vor den brennenden Straßen fliehen, die sie einst Heimat nannten.",
    "Sie bringen Bruchstücke ihrer alten Glaubensformen mit:",
    "Schriftfetzen, halb erinnert; eine abgegriffene Elfenbeinstatuette einer namenlosen Göttin; Fetzen heiliger Gewänder, zur Ausbesserung von Schäden in ihre Mäntel eingewebt. Dies sind die alten, uralten Götter der Drow – Götter des Blutes und der Dunkelheit, Götter, die nie den Himmel sahen. Sie sind chthonisch und uralt und verängstigt und zerbrechlich, und gemeinsam schlossen sie in den Slums von Derelictus und auf dem tückischen unterirdischen Pfad von Ys nach Spire einen Pakt. Hier, in dieser fremden, fernen und unheimlichen Welt, würden sie sich zu einem zusammenfinden. Als die Drow, die sie anbeteten, wegstarben und ihre Namen vergessen wurden, wurden sie selbst verschwommen und unscharf.",
    "So wurden sie die Vielen, beherrscht von den Zwei, und sie meiden Namen. Sie stehlen jeden Fetzen Glauben, den sie finden können. Sie vergöttern die Drow, und sie vergöttern Gemeinschaft, und sie wissen, dass sie hier, in der rauen grauen Welt von Spire, in der die Sonne ihre Haut verbrennt, nie zu der Größe aufsteigen können, die sie in den Heimatnationen erreichten. Doch: Sie sind im Geschäft der kleinen Wunder, und sie nehmen, was sie kriegen können."
   ],
   "vor": "Werde von einem der Anhänger der Vielen in eine Gemeinschaft aufgenommen. Am häufigsten werden Drow in eine solche Gemeinschaft aufgenommen, indem sie in sie hineingeboren werden, doch die Anbeter der Vielen sind für jede Unterstützung dankbar.",
   "auff": "Tu etwas Selbstloses zum Wohl deiner Gemeinschaft.",
   "boxen": [],
   "fort": {
    "niedrig": [
     {
      "t": "UNGEHINDERT SCHREITEN",
      "p": 193,
      "tag": "Göttlich",
      "fl": "Die wandelbaren Gestalten deiner Götter bringen Abmachungen und Verträge mit sich, die älter sind als der Stein von Spire selbst.",
      "x": [
       "Erhalte die Domäne Religion. Wenn du auf einen Schutzbann oder ein Verbot triffst, die mit göttlicher Magie gewirkt wurden, markiere 1 Stress auf Verstand oder Silber, um seine Wirkung bis zum Ende der aktuellen Situation zu ignorieren. Du kannst diesen Schutz zum Preis von 1 Stress pro zusätzlich gesegnetem Charakter auf andere ausdehnen."
      ]
     },
     {
      "t": "DER CHOR",
      "p": 193,
      "tag": "Göttlich",
      "fl": "Während du schläfst, füllt sich dein Geist mit dem Flüstern der Vielen, und sie verleihen dir Macht.",
      "x": [
       "Würfle zu Beginn jeder Sitzung auf der folgenden Tabelle; du erhältst die entsprechenden Fähigkeiten bis zum Ende der Sitzung – besitzt du die Fähigkeiten bereits, erhältst du stattdessen einen Kniff darin.",
       {
        "t": "w10",
        "h": "Der Chor",
        "id": "w10_chor",
        "rows": [
         "**Die Spinne.** Erhalte die Fertigkeit Flicken und die Domäne Akademie.",
         "**Der Stein.** Erhalte die Fertigkeit Widerstehen und +1 Blut.",
         "**Der Turm.** Erhalte die Fertigkeit Ermitteln und die Domäne Ordnung.",
         "**Das Biest.** Erhalte die Fertigkeiten Kämpfen und Verfolgen.",
         "**Der Fluss.** Erhalte die Fertigkeit Verfolgen und +1 Verstand.",
         "**Die Erde.** Erhalte die Fertigkeit Flicken und die Domäne Niedere Gesellschaft.",
         "**Der Herd.** Erhalte die Fertigkeit Überzeugen und die Domäne Niedere Gesellschaft.",
         "**Der Schatten.** Erhalte die Fertigkeiten Schleichen und Stehlen.",
         "**Die Schriftrolle.** Erhalte die Domänen Akademie und Hohe Gesellschaft.",
         "**Der Haken.** Erhalte die Fertigkeit Täuschen und die Domäne"
        ]
       }
      ]
     },
     {
      "t": "HELFENDE HAND",
      "p": 193,
      "tag": "Göttlich",
      "fl": "Du bist geschickt darin, anderen bei der Erreichung ihrer Ziele zu helfen.",
      "x": [
       "Wenn du einen anderen Charakter bei einer Aktion unterstützt, erleidest du keinen Stress durch dessen Wurf. Wenn du W6 Stress markierst, kannst du diesen Segen bis zur nächsten Morgendämmerung auf den Rest deiner Gruppe anwenden."
      ]
     }
    ],
    "mittel": [
     {
      "t": "GÖTTLICHE VERTEILUNG",
      "p": 193,
      "tag": "Göttlich",
      "fl": "Deine Götter arbeiten zusammen, um Unglück abzuwehren; je größer deine Gruppe, desto mehr können sie tun.",
      "x": [
       "Wenn du jemals Stress in Höhe der Anzahl der Spielercharaktere in deiner aktuellen Situation erleidest, wird dieser Stress ignoriert."
      ]
     }
    ],
    "hoch": [
     {
      "t": "GÖTTLICHER SCHUTZ",
      "p": 193,
      "tag": "Göttlich",
      "fl": "Deine Götter sind Schatten ihrer früheren Selbst, doch sie vereinen sich für einen glorreichen Moment, und ihre Macht ist furchterregend anzusehen.",
      "x": [
       "Einmal pro Sitzung wirkst du diesen Zauber. Er funktioniert wie GÖTTLICHE VERTEILUNG, doch aller Stress, der gleich der oder niedriger als die Anzahl der Spielercharaktere in deiner Gruppe ist, wird ignoriert.",
       "Diese verstärkte Version hält bis zum Ende deiner aktuellen Situation an."
      ]
     }
    ]
   },
   "fallout": []
  },
  {
   "id": "miah",
   "t": "Miah",
   "sub": "Gott der verlorenen Geheimnisse",
   "patron": "Miah Clayton",
   "p": 195,
   "img": "gott/miah",
   "intro": [
    "Es gibt einen Ort, an den verbrannte Geheimnisse gelangen. Er ist klein und still bis auf das Phantomflüstern von tausendmal tausend Sünden, und über ihn herrscht Miah – gesichtslose Miah, sanfte Miah, die alles weiß und alles sieht. Miah ist eine Hüterin von Wissen, das sonst der Zeit und den Flammen zum Opfer fiele, und ihre Anbeter kennen die Macht, die in Geheimnissen liegt; sie können die potenzielle Wirkung einer verborgenen Wahrheit spüren wie den Luftdruck vor einem Gewitter und sie schmecken wie Nadelstiche auf der Zunge. Ein kostbares Geheimnis wird als Andachtsmantra oder Reliquie gehalten; man sinnt darüber nach, prüft es, schwelgt darin. Der wundersamste von Miahs Segen ist die Fähigkeit, ein Geheimnis zu einem lebenden Wesen zu schmieden – diese potenzielle Energie, dieses Bleigewicht auf dem Gummituch, das das Universum ist, zu nehmen und in eine andere Form zu verdrehen. Diese Menschen wissen nicht, dass sie unwirklich sind, und das ist wahrscheinlich auch gut so: Sollten sie ihren Ursprung entdecken, sind sie zu einer kurzen, elenden Existenz voller Schmerz und einem explosiven Tod verdammt. Doch solange sie leben, kann ihr Geheimnis weder ausgesprochen noch niedergeschrieben werden, und es ist den Akolythen von Miah zu verdanken, dass einige der albtraumhaftesten dämonischen Riten vor sterblichen Augen verschlossen bleiben."
   ],
   "vor": "Übergib Miah im heiligen Feuer ein eigenes Geheimnis.",
   "auff": "Übergib Miah ein wertvolles oder bemerkenswertes Geheimnis.",
   "boxen": [
    {
     "h": "Kann ich ein lebendes Geheimnis spielen?",
     "b": [
      "Ja! Du wirst nicht wissen, wessen Geheimnis du bist, und wahrscheinlich weißt du zu Beginn der Kampagne gar nicht, dass du ein lebendes Geheimnis bist. Wenn du jemals dein Geheimnis entdeckst, erleide zu Beginn jeder Szene W3 Stress auf Verstand (und W6 Stress, wenn du in der Nähe von Dingen bist, die mit deinem Geheimnis zu tun haben); wenn du dein Geheimnis jemals laut aussprichst, explodierst du, wie bei der Kraft LEBENDES GEHEIMNIS BINDEN beschrieben.",
      "Im Austausch für all das erhältst du Zugang zu einer zusätzlichen Fertigkeit und einer zusätzlichen Domäne, die mit deinem Geheimnis zusammenhängen."
     ]
    }
   ],
   "fort": {
    "niedrig": [
     {
      "t": "GEHEIMNIS VERBRENNEN",
      "p": 195,
      "tag": "Göttlich",
      "fl": "Du verwandelst ein Geheimnis in Asche, und es hat weniger Macht über dich.",
      "x": [
       "Übergib ein Geheimnis dem Feuer und markiere W3 Stress, um diesen Zauber zu wirken. Wenn du das erste Mal leichten Fallout erleidest, weil dieses Geheimnis ans Licht kommt, ignoriere ihn; wenn du mittleren oder schweren Stress erleidest, weil das Geheimnis ans Licht kommt, wird er um eine Stufe herabgestuft.",
       "Nur ein Geheimnis zur Zeit kann auf diese Weise gehalten werden; wenn du ein zweites verbrennst, ersetzt es das erste."
      ]
     },
     {
      "t": "GEWICHT DES WISSENS",
      "p": 195,
      "tag": "Göttlich",
      "fl": "Geheimhaltung ist eine schwere Last; man teilt sie besser.",
      "x": [
       "Wenn dir jemand ein Geheimnis anvertraut, erhalte ihn als temporäre Bindung."
      ]
     }
    ],
    "mittel": [
     {
      "t": "DIE WAHRHEIT VERBERGEN",
      "p": 195,
      "tag": "Göttlich",
      "fl": "Miahs Berührung glättet Unglück und Gefahr.",
      "x": [
       "Wenn du oder ein Verbündeter Fallout auf Ruf, Schatten oder Silber erleidet, markiere W6 Stress, um diesen Zauber zu wirken; das Ritual dauert etwa eine Stunde, in der das Subjekt mit Miah kommuniziert und die Ereignisse, die zum Fallout geführt haben, in Kreide um es herum niedergeschrieben und illustriert werden. Am Ende des Rituals wird der Fallout entfernt."
      ]
     },
     {
      "t": "GEHEIMNIS SPÜREN",
      "p": 195,
      "tag": "Göttlich",
      "fl": "Jeder hat ein Geheimnis; mit diesem Ritus kannst du es ihm aus dem Kopf pflücken.",
      "x": [
       "Markiere W6 Stress, um diesen Zauber zu wirken, während du etwa zehn Minuten mit jemandem sprichst; er weiß, dass du den Zauber wirkst, während es geschieht, und muss auf irgendeine Weise festgehalten werden. Nach zehn Minuten wird dir das größte Geheimnis bewusst, das die Person hegt, auch wenn du keine Möglichkeit hast, seine Wahrheit zu beweisen. Wird diese Kraft auf ein Lebendes Geheimnis angewandt, offenbart sie ihm nicht seinen Ursprung, erlaubt dir aber, es bis zum nächsten Sonnenaufgang unfehlbar aufzuspüren."
      ]
     }
    ],
    "hoch": [
     {
      "t": "LEBENDES GEHEIMNIS BINDEN",
      "p": 195,
      "tag": "Göttlich",
      "fl": "Du kannst aus einem Geheimnis ein lebendes Geschöpf verdichten.",
      "x": [
       "Markiere W8 Stress auf Verstand, um diesen Zauber zu wirken, dessen vollständiges Wirken einen Tag dauert. Am Höhepunkt eines dunklen und mächtigen Rituals verdichtest du die Essenz eines Geheimnisses zu einem lebenden Wesen – einem Menschen, Aelfir oder Drow deiner Wahl. Solange diese Person lebt, kann das Geheimnis von niemandem außer dem lebenden Geheimnis ausgesprochen (oder geschrieben oder überhaupt mitgeteilt) werden.",
       "Sollte sie jemals die Natur des Geheimnisses entdecken, das ihr Wesen bildet, wird sie von Schmerz geschüttelt; sollte sie es laut aussprechen, wird sie in einem gewaltsamen Ausbruch aus Energie und Eingeweiden zunichtegemacht und fügt jedem in der Nähe W8 Stress auf Blut oder Verstand zu."
      ]
     }
    ]
   },
   "fallout": []
  },
  {
   "id": "garrack",
   "t": "Garrack",
   "sub": "Der Stahlknochige",
   "patron": "Seph Steel",
   "p": 197,
   "img": "gott/garrack",
   "intro": [
    "Niemand weiß so recht, warum Menschen häufiger zur Göttlichkeit aufsteigen als die anderen Völker. Tatsächlich wandelten alle ihre eigenen Götter einst als Sterbliche unter ihnen – und Garrack bildet keine Ausnahme. Als geschickter Techniker mit einem versagenden Körper nutzte Garrack sein umfangreiches Wissen über Retro-Ingenieurwesen, um sich Ersatzteile aus experimentellen Geräten anzufertigen, die aus Arkologien geborgen oder aus Ersatzteilen zusammengebastelt wurden; erst ein Bein, dann eine Hand, dann eine Lunge, und immer weiter, bis Garracks einst lebende menschliche Teile längst unter Schichten von Maschinen und Scharen von Dienern verrottet waren. (Ob die Maschine, die Garrack ist und war, heute noch existiert oder ob ihre letzte Funktion darin bestand, ihren Aufstieg darzustellen, ist Gegenstand einiger Debatten.)",
    "Garracks Anhänger sehnen sich danach, dem göttlichen Beispiel ihres Meisters näher zu kommen, und versuchen, Maschinen so gut sie können zu verstehen oder sie in ihre Körper einzubauen; in der Komplexität ineinandergreifender Bauteile und im Zusammenspiel der Systeme lässt sich ein Bruchteil des göttlichen Funkens der Schöpfung erblicken.",
    "Doch Ärzte sind in Spire dünn gesät, besonders solche, die bereit sind, jemanden zu behandeln, der versucht hat, sich die eigene Hand abzusägen und durch ein selbstgebautes Gerät zu ersetzen, und so ist das Leben im Kult von Garrack eines aus wunder, aufgedunsener Haut, aus Schorf und Knorpel, aus Blut und durchgesägtem Knochen und Schmerz. Doch, so behaupten die Anhänger, es lohnt sich, den Schmerz zu ertragen, um die heilige Natur der Maschine zu verstehen, und die Chance, die Apotheose zu erlangen und sich Garrack in den Himmeln anzuschließen, ist zu gut, um sie auszuschlagen."
   ],
   "vor": "Verändere deinen Körper auf irgendeine Weise, indem du ihn mit Technik implantierst oder aufrüstest.",
   "auff": "Repariere eine Maschine, die das Leben der Menschen besser macht.",
   "boxen": [],
   "fort": {
    "niedrig": [
     {
      "t": "EISERNE KONSTITUTION",
      "p": 197,
      "tag": "Göttlich",
      "fl": "Der Knochen in deinem Brustkorb wird durch unnachgiebiges Metall ersetzt; deine Organe mit seltsamen silbernen Schienen verstärkt.",
      "x": [
       "+2 Blut, erhalte die Fertigkeit Widerstehen."
      ]
     },
     {
      "t": "STAHLGLIED",
      "p": 197,
      "tag": "Göttlich",
      "fl": "Deine Arme und Beine werden abgetrennt, und kalte Stahlnachbildungen werden an deine Knochen geschraubt.",
      "x": [
       "Der Kauf dieses Fortschritts erlaubt dir, den Fallout Gebrochenes Bein oder Gebrochener Arm sofort zu beseitigen. Für jedes Stahlglied, das du trägst, erhältst du 1 Punkt Rüstung; du kannst dieses Upgrade bis zu viermal kaufen, doch es auf einem gesunden Glied zu tun, zieht mittleren Verstand-Fallout nach sich."
      ]
     },
     {
      "t": "NOTBEHELF",
      "p": 197,
      "tag": "Göttlich",
      "fl": "Du bist geschickt darin, Maschinen zum Laufen zu bringen oder deinen Instrumenten bislang unerwartete Fähigkeiten zu entlocken.",
      "x": [
       "Du kannst etwas in einem Fünftel der Zeit flicken, die ein normaler Techniker dafür bräuchte. Außerdem kannst du jede Waffe, die du trägst, „verbessern“. Wähle eines der Folgenden: • Hat die Waffe das Merkmal Nachladen, ersetze es durch Unzuverlässig • Hat die Waffe das Merkmal Fernkampf, ersetze es durch Extreme Reichweite und Unzuverlässig • Hat die Waffe das Merkmal Durchschlagend, ersetze es durch Verheerend und Gefährlich • Füge der Waffe die Merkmale Streuung W3 und Gefährlich hinzu Das Aufrüsten einer Waffe dauert etwa eine halbe Stunde Herumbasteln und Gebete, und nur du kannst sie benutzen; tut es jemand anderes, funktioniert sie eine Szene lang und verfällt dann zur Nutzlosigkeit und muss weggeworfen werden."
      ]
     },
     {
      "t": "PROZESS AUTOMATISIEREN",
      "p": 197,
      "tag": "Göttlich",
      "fl": "Du trägst ein Bündel vielseitiger Maschinen bei dir, die alles tun können, was du tun kannst, solange sie es nicht schnell tun müssen.",
      "x": [
       "Markiere 1 Stress auf Blut oder Verstand, um diesen Zauber als Teil einer Aktion zu wirken, deren Abschluss mehr als ein paar Minuten dauert (eine Bibliothek durchsuchen, eine Bar observieren usw.). Du musst nicht mehr die ganze Zeit anwesend sein, da deine Maschinen die Arbeit für dich erledigen, doch du musst zurückkehren, wenn sie fertig sind, um das Ergebnis abzuholen."
      ]
     }
    ],
    "mittel": [
     {
      "t": "SCHÖPFER UND ZERSTÖRER",
      "p": 197,
      "tag": "Göttlich",
      "fl": "Deine Haut erzeugt spontan Katakos-Glyphen; Jünger von Garrack glauben, dies seien die Zeichen der Priesterkaste in der Katakos-Gesellschaft gewesen.",
      "x": [
       "Erhalte Meisterschaft auf Kämpfen und Flicken, wenn du mit Maschinen interagierst."
      ]
     },
     {
      "t": "GALVANISCHE SPULEN",
      "p": 197,
      "tag": "Göttlich",
      "fl": "Du implantierst experimentelle Batterien in deinen Körper und verdrahtest sie mit Herz und Gehirn.",
      "x": [
       "Einmal pro Sitzung, wenn du eine Minute oder so erübrigen kannst, entferne W8 Stress von Blut oder Verstand, während du die glorreichen galvanischen Energien durch deinen Körper strömen lässt. Durch das Gewicht und den Lärm der auf deinem Rücken montierten galvanischen Spulen giltst du für den Rest deines Lebens als Träger einer Rüstung mit dem Merkmal Schwer (das Tragen zusätzlicher Rüstung mit dem Merkmal Schwer hat keine weitere Wirkung)."
      ]
     }
    ],
    "hoch": []
   },
   "fallout": []
  },
  {
   "id": "the-masked-god",
   "t": "Der Maskierte Gott",
   "sub": null,
   "patron": "Ty Young",
   "p": 199,
   "img": "gott/the-masked-god",
   "intro": [
    "Wer ist der Maskierte Gott? Diese Frage bildet die zentrale Philosophie des Maskierten Gottes, und für seine Anbeter lautet die Antwort: „Der Maskierte Gott ist der Maskierte Gott.“ Seine Existenz ist in seinen Masken eingebunden: Ohne sie ist er nichts, und mit ihnen ist er alles.",
    "Der Maskierte Gott ist eine erst kürzlich entdeckte Gottheit; erst in den letzten hundert Jahren oder so, seit Drow gezwungen sind, Gesichtsmasken zu tragen und unter ihren Aelfir-Herrschern in Spire zu dienen, werden die Gläubigen vom Gott besucht. Er kommt in Träumen oder, bei den wahrhaft Gesegneten, als Vision in einem Spiegel, wenn sie ihre eigene Maske anlegen, bevor sie das Haus verlassen; er flüstert dir Wahrheiten zu, führt deine Hand, lässt dich deine Anmut darin vervollkommnen, der Außenwelt ein anderes Gesicht als dein eigenes zu zeigen. Geliebt von Schauspielern, Lügnern, Revolutionären und Spionen, bindet er sich an Drow, die berufsmäßig oder um zu überleben vorgeben müssen, etwas zu sein, das sie nicht sind.",
    "Es gibt keine Tempel für den Maskierten Gott, doch seine Anhänger treffen sich unter den Dielenbrettern anderer Kirchen. Sie bedecken fremde Altäre mit Tüchern und schwören ihnen Ergebenheit; sie schmieren Farbe über die Gesichter von Andachtsbildern anderer Götter; sie wiederholen Predigten Wort für Wort, wobei jeder Verweis auf den Namen eines bestimmten Gottes getilgt und durch Schweigen ersetzt wird. Es gibt keine einzelne „wahre Gestalt“ des Maskierten Gottes, in die die Gläubigen eingeweiht wären – alle seine Gestalten sind wahr.",
    "Es scheint, dass der Maskierte Gott in Visionen die Gestalt eines Drow annimmt; doch das ist natürlich eine weitere Maske."
   ],
   "vor": "Lebe mindestens einen Monat lang dein Leben als eine andere Person und lege die Maske niemals ab (auch nicht, wenn du allein bist). Wenn du das getan hast, wirst du zu einem Leuchtfeuer für den Maskierten Gott und musst seine Ankunft abwarten.",
   "auff": "Gib dich erfolgreich als andere Person aus. Je mehr Menschen von der Verkleidung überzeugt sind, desto besser.",
   "boxen": [],
   "fort": {
    "niedrig": [
     {
      "t": "MASKE SEHEN",
      "p": 199,
      "tag": "Göttlich",
      "fl": "Vom Maskierten Gott mit göttlicher Einsicht begabt, siehst du Lügen wie Rauch aus den Mündern der Menschen um dich herum aufsteigen.",
      "x": [
       "Einmal pro Situation: Frage die Spielleitung, wer lügt. Sie muss dir sagen, wer, aber nicht, worüber genau."
      ]
     },
     {
      "t": "FALSCHES GESICHT",
      "p": 199,
      "tag": "Göttlich",
      "fl": "Dein Gesicht ist nur eine Maske, und eine, die sich im Nu ändern lässt.",
      "x": [
       "Markiere W3 Stress, um dein Gesicht für den Rest der Situation dem Gesicht von jedem anzugleichen, den du im letzten Tag (persönlich) gesehen hast."
      ]
     }
    ],
    "mittel": [
     {
      "t": "AUSERWÄHLTER DER MASKE",
      "p": 199,
      "tag": "Göttlich",
      "fl": "Du webst einen Segen über dich oder einen anderen, der Geschick in den Künsten der Täuschung verleiht.",
      "x": [
       "Markiere W3 Stress auf Verstand, um diesen Zauber zu wirken. Für den Rest der Situation erhältst du Meisterschaft auf Schleichen, Täuschen und Stehlen. Du kannst diesen Zauber auf einen anderen Charakter wirken, musst dafür aber W6 statt W3 Stress markieren."
      ]
     },
     {
      "t": "KLEINE NOTLÜGEN",
      "p": 199,
      "tag": "Göttlich",
      "fl": "Du kanalisierst die Macht des Maskierten Gottes, um die Grenzen zwischen Wahrheit und Fiktion zu verwischen und etwas in der Welt zu manifestieren.",
      "x": [
       "Markiere W3 Stress, um diesen Zauber zu wirken. Eine kleine Lüge, die du erzählst, wird bis zur nächsten Morgendämmerung zur Wahrheit: „Du siehst hübsch aus“ macht die Person tatsächlich hübscher, „Ich habe eine Waffe“ bedeutet, dass du eine Waffe hast, und so weiter. Die Lügen müssen glaubhaft sein, damit die Kraft wirkt, und sie können nichts Dauerhaftes begründen."
      ]
     }
    ],
    "hoch": [
     {
      "t": "PERFEKTE KOPIE",
      "p": 199,
      "tag": "Göttlich",
      "fl": "Du hast die Fähigkeit, vollständig eine andere Person zu werden; du hast zwei Selbst und kannst nach Belieben zwischen ihnen wechseln.",
      "x": [
       "Wähle jemanden, dem du begegnet bist und den du studiert hast. Du kannst jederzeit zu einer perfekten Nachbildung dieser Person werden, und alle behandeln dich, als wärst du diese Person. Sobald du diesen Fortschritt genommen hast, kannst du für je einen Mittleren Fortschritt zusätzliche Extra-Identitäten kaufen."
      ]
     },
     {
      "t": "PERFEKTE SELBSTVERLEUGNUNG",
      "p": 199,
      "tag": "Göttlich",
      "fl": "Die Grenze zwischen deinem wahren Selbst und deinen projizierten Identitäten löst sich auf, bis alles Schlimme, das dir widerfährt, jemand anderem zu widerfahren scheint.",
      "x": [
       "Einmal pro Sitzung: Wenn du Fallout erleidest, ignoriere ihn vollständig."
      ]
     },
     {
      "t": "GRÖSSTE LÜGE",
      "p": 199,
      "tag": "Göttlich",
      "fl": "Die größten Lügen werden zur Wahrheit.",
      "x": [
       "Erzähle einmal, und nur einmal, eine Lüge. Sie ist keine Lüge mehr."
      ]
     }
    ]
   },
   "fallout": []
  }
 ]
};
