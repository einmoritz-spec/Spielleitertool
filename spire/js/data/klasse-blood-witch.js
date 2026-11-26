/* The Spire – Klasse Blood-Witch (aus quellen/spire/de/bm, erzeugt mit plan/spire/build_klassen2.py) */
(window.SP_KLASSE = window.SP_KLASSE || []).push({
 "id": "blood-witch",
 "t": "Blood-Witch",
 "buch": "sp_z4",
 "herk": "Black Magic",
 "p": 3,
 "zitat": "„Ich höre deinen Herzschlag, Aelfir, und ich höre Entsetzen.“",
 "intro": [
  "Du bist eine Ritualmagierin, die ins dunkle Herz von Spire gereist ist und eine seltsame, zehrende Bluterkrankung mitgebracht hat, die es dir erlaubt, die natürliche Welt mit deiner Essenz zu verzerren. Du besitzt Herrschaft über das Blut, und dein unnatürliches Äußeres macht dich zu einer furchterregenden Gestalt, wenn du aufgebracht bist."
 ],
 "kern": {
  "wid": "Blut +3, Schatten +1",
  "auff": "Teile einen Moment der Intimität mit einer anderen Person.",
  "fert": "Täuschen, Widerstehen",
  "dom": "Okkultes, Niedere Gesellschaft"
 },
 "bind": [
  "Du hast eine Kreatur gefangen und ihr dein erkranktes Blut verfüttert, wodurch du sie deinem Willen unterworfen und ihre Intelligenz gesteigert hast. Wähle eine kleine, gewöhnliche Kreatur wie Katze, Kröte, Krähe, Schlange, Spinne oder Rabe und erhalte sie als Bindung auf Einzelebene. Die Kreatur hat ein körperliches Merkmal, das anzeigt, dass sie unter dem Einfluss schwarzer Magie steht, etwa Facettenaugen, zusätzliche Beine, seltsame Zeichnungen oder Hörner.",
  "Du hast das Blut eines anderen Spielercharakters gekostet und ein Geheimnis über seine Vergangenheit (oder Zukunft) erfahren. Was hast du erfahren, und wie oft erinnerst du ihn daran?"
 ],
 "ausr": [
  {
   "k": "pkt",
   "x": "Athame (W3, Blutgebunden)"
  },
  {
   "k": "pkt",
   "x": "Mehrere Garnituren zerlumpter, seltsam aussehender Kleidung"
  },
  {
   "k": "pkt",
   "x": "Eine Sammlung okkulter Kuriositäten"
  }
 ],
 "kfae": [
  {
   "t": "NACHTSCHRECKEN",
   "p": 4,
   "fl": "Du hast eine Geschichte der Furcht in der Stadt Spire.",
   "x": [
    "Einmal pro Sitzung: Wenn du einer NSC zum ersten Mal begegnest, erkläre, dass sie in der Vergangenheit einmal versucht hat, sich in deine Angelegenheiten einzumischen, und gescheitert ist. Sie fürchtet dich nun, mit allen Risiken, die das mit sich bringt."
   ]
  },
  {
   "t": "WIDERHALL",
   "p": 4,
   "tag": "Okkult",
   "fl": "Du kannst die Feinheiten einer Person in ihrem Blut schmecken.",
   "x": [
    "Wenn du das Blut einer Kreatur kostest, erfährst du etwas Interessantes oder Überraschendes über ihre Vergangenheit oder Zukunft. Das Blut muss noch warm sein; je kälter es ist, desto ungenauer und zerstückelter werden die Visionen. Visionen der Zukunft sind bestenfalls ungenau und schlimmstenfalls irreführend, aber sie stellen eine mögliche Zukunft des Ziels dar. (Du kannst keine Informationen aus dem Blut einer wechselwarmen Kreatur gewinnen.)"
   ]
  },
  {
   "t": "WAHRE GESTALT",
   "p": 4,
   "tag": "Okkult",
   "fl": "Du kannst das sich windende Grauen in dir noch so sehr zu halten versuchen, es gelingt dir nicht.",
   "x": [
    "Seit deiner Rückkehr vom Herzen drückt und brodelt dein wahres Selbst unter der Oberfläche deiner Haut. Wenn du jemals mittleren oder schweren Fallout irgendeiner Art erleidest, nimmst du die Gestalt an, die das Herz sich für dich wünscht – ein flackerndes Zoetrop-Grauen. Deine Finger zucken und krümmen sich, und deine Bewegungen sind Stop-Motion und abgehackt; deine Schultern knacken und knarren, wenn sie an den falschen Stellen abknicken, und der Gestank alten Blutes erfüllt die Luft. Du erhältst die Fertigkeiten Überzeugen und Verfolgen, und jeder mit einem Funken Verstand wird höchstwahrscheinlich vor dir davonlaufen. Du kannst versuchen, diese Verwandlung mit einer Probe auf Widerstehen+Okkultes aufzuhalten. Deine wahre Gestalt hält bis zum Ende der Situation an.",
    "Du kannst jederzeit W3 Stress markieren, um in deine wahre Gestalt zu wechseln."
   ]
  }
 ],
 "fort": {
  "niedrig": [
   {
    "t": "BLUTGEBUNDENER BEGLEITER",
    "p": 4,
    "tag": "Okkult",
    "fl": "Du festigst die Bindung zu deinem Vertrauten.",
    "x": [
     "Erhalte zwei der folgenden Fähigkeiten:",
     {
      "t": "ul",
      "x": [
       "+1 Verstand. Dein Vertrauter kann mit anderen Leuten als dir sprechen.",
       "+1 Blut. Dein Vertrauter kann seine Gestalt in jede gleich große, nicht einzigartige Kreatur verwandeln (behält aber das Merkmal).",
       "Erhalte die Fertigkeit Schleichen. Dein Vertrauter kann ganz kurz körperlos werden.",
       "Erhalte die Fertigkeit Kämpfen. Dein Vertrauter kann als Waffe (W6, Fernkampf, Überraschend, Einweg) eingesetzt werden."
      ]
     },
     "Du kannst diesen Fortschritt zweimal nehmen und jedes Mal andere Fähigkeiten wählen."
    ]
   },
   {
    "t": "BLUTBANN",
    "p": 4,
    "tag": "Okkult",
    "fl": "Du schlitzt dir die Handfläche auf und klatschst sie an die Wand, wodurch ein blutiger Handabdruck zurückbleibt, der auf jeden losschlägt, der sich nähert.",
    "x": [
     "Markiere W3 Stress auf Blut, um diesen Zauber zu wirken, der augenblicklich wirkt. Die nächste Person – Freund oder Feind –, die in Reichweite eines Arms an den Bann herankommt, bevor er getrocknet ist, erleidet W6 Stress."
    ]
   },
   {
    "t": "BLUTIGE MASKE",
    "p": 4,
    "tag": "Okkult",
    "fl": "Du mischst dein verderbtes Blut mit dem eines anderen und malst damit Sigillen des Blendwerks auf deine Stirn und deine Lippen.",
    "x": [
     "Erhalte die Fertigkeit Stehlen. Markiere W3 Stress auf Blut, um diesen Zauber zu wirken. Male mit einer Mischung aus deinem Blut und dem einer anderen Person auf dein Gesicht: Bis das Blut vollständig getrocknet ist, erscheinst du Beobachtern, als wärst du die andere Person. Der Zauber verkleidet deine Kleidung jedoch nicht."
    ]
   },
   {
    "t": "ARTERIENFONTÄNE",
    "p": 4,
    "tag": "Okkult",
    "fl": "Du spuckst einen Fluch in einer dreimal toten Sprache, und stinkendes, ätzendes schwarzes Blut sprüht aus einer Wunde oder Körperöffnung.",
    "x": [
     "Markiere 1 Stress auf Blut, um diesen Zauber zu wirken. Er funktioniert als Waffe (W3, Fernkampf, Streuung W3)."
    ]
   },
   {
    "t": "FLUCH DES BLINDEN AUGES",
    "p": 4,
    "tag": "Okkult",
    "fl": "Du beschwörst einen Hexenfluch, der sich als Sigillen zeigt, die unter deiner Haut kriechen und jene täuschen und verwirren, die dich aufhalten wollen.",
    "x": [
     "+1 Schatten. Markiere W3 Stress auf Blut, um leichten Schatten-Fallout zu entfernen; markiere W6 Stress auf Blut, um mittleren Schatten-Fallout zu beseitigen; markiere W8 Stress auf Blut, um schweren Schatten-Fallout zu beseitigen."
    ]
   },
   {
    "t": "BÖSER BLICK",
    "p": 4,
    "tag": "Okkult",
    "fl": "Du spinnst einen Hexenfluch auf ein Ziel und garantierst, dass drei Missgeschicke über es hereinbrechen.",
    "x": [
     "Markiere W6 Stress, um diesen Zauber zu wirken – du musst das Ziel sehen können. Die nächsten drei Male, die du oder ein Verbündeter in irgendeiner Weise gegen das Ziel dieses Zaubers würfelt (angreifen, sich gegen seine Angriffe verteidigen, ermitteln, beschatten usw.), beträgt die Schwierigkeit der Handlung 0, und ihr würfelt mit Meisterschaft."
    ]
   }
  ],
  "mittel": [
   {
    "t": "HERZBLUT-KNECHT",
    "p": 4,
    "tag": "Okkult",
    "fl": "Dein verfluchtes Blut hat den Körper deines Vertrauten bis zur Unkenntlichkeit verzerrt und ihn zu etwas wahrhaft Monströsem gemacht.",
    "x": [
     "Erhalte zwei der folgenden Fähigkeiten:",
     {
      "t": "ul",
      "x": [
       "Dein Vertrauter verleiht dir drei zusätzliche Widerstandsplätze, auf die du Stress verteilen kannst, den du durch das Zaubern markiert hast.",
       "+1 Ruf. Dein Vertrauter kann als Waffe (W6, Fernkampf, Durchschlagend, Unzuverlässig) eingesetzt werden.",
       "Erhalte die Fertigkeit Stehlen. Einmal pro Sitzung kannst du durch die Augen deines Vertrauten sehen und seine Bewegungen für eine Situation steuern.",
       "+1 Verstand. Während du schläfst, flüstert dir dein Vertrauter Geheimnisse über die Leute in deiner Umgebung ins Ohr. Frage am Ende jeder Sitzung die Spielleitung, welche Neuigkeiten dein Vertrauter dir berichtet."
      ]
     }
    ]
   },
   {
    "t": "PUPPENFLUCH",
    "p": 5,
    "tag": "Okkult",
    "fl": "Dein Blut gräbt sich in andere Menschen und zupft an ihren Marionettenfäden.",
    "x": [
     "Bringe einen Tropfen deines Blutes in den Körper des Ziels, und du kannst W3 Stress auf Blut markieren, um es zu zwingen, eine einfache Handlung auszuführen – eine Tür öffnen oder schließen, in eine bestimmte Richtung gehen, ein paar Worte sprechen. Es ist sich völlig bewusst, dass der Impuls für die Handlung von woanders kommt, und die Handlungen sind nicht präzise – es kann keine Waffe laden, zielen und abfeuern, aber es kann durchaus den Abzug einer Waffe betätigen, die es bereits in der Hand hält. Sobald du es mit deinem Blut infiziert hast, bleibt der Zauber bis zur nächsten Morgenröte aktiv."
    ]
   },
   {
    "t": "CORPUS DESAN",
    "p": 5,
    "tag": "Okkult",
    "fl": "Du stellst aus dem Blut deiner Verbündeten ein Gebräu her und bittest sie alle, tief zu trinken. Sobald es wirkt, bewegt ihr euch als ein einziges Wesen.",
    "x": [
     "Markiere W6 Stress, um diesen Zauber zu wirken; alle anderen Teilnehmer markieren 1 Blut. Bis zur nächsten Morgenröte können alle, die ihr Blut gegeben und von der Mischung getrunken haben, augenblicklich die Plätze miteinander tauschen, sofern beide dazu bereit sind; ihre Körper biegen und verformen sich ineinander mit einem Geräusch wie reißendes Fleisch."
    ]
   },
   {
    "t": "WINDENDE KORRIDORE",
    "p": 5,
    "tag": "Okkult",
    "fl": "Du verdrehst die Wahrnehmung von Raum und Zeit deiner Feinde zu einer albtraumhaften Verzerrung.",
    "x": [
     "Markiere W3 Stress auf Blut, um diesen Zauber zu wirken. Für die nächste Situation gelingen dir alle Proben auf Verfolgen, die du unternimmst, automatisch."
    ]
   },
   {
    "t": "WUNDE SCHLIESSEN",
    "p": 5,
    "tag": "Okkult",
    "fl": "Dein Speichel kann die Wunden anderer zusengen.",
    "x": [
     "Spucke auf eine Wunde, um sie fast augenblicklich zu heilen, wobei ein Knoten dunklen Narbengewebes zurückbleibt. Markiere W3 Stress auf Blut, um bei einem anderen Ziel als dir selbst W6 Blut-Stress zu entfernen."
    ]
   },
   {
    "t": "BAU",
    "p": 5,
    "tag": "Okkult",
    "fl": "Das lose Magie aufsaugende Gebiet um dein Zuhause verwandelt sich in ein albtraumhaftes Reich – einen schattigen Bau aus huschenden Kreaturen, aus in wechselndem Blut hingeschmierten Worten, aus Korridoren ins Nirgendwo.",
    "x": [
     "Dein Bau zählt als Bindung auf Straßenebene, die nach deinen Wünschen handeln kann – Eindringlinge in die Falle locken, sich erinnern, was innerhalb seiner Grenzen geschieht, und Gegenstände aus der Nähe finden. Wenn du dieser Bindung Stress zufügst, halbiere die Höhe des zugefügten Stresses. Du kannst 2 Stress von deiner Bau-Bindung entfernen, indem du 1 Stress auf Blut markierst."
    ]
   },
   {
    "t": "STURZFLUT",
    "p": 5,
    "tag": "Okkult",
    "fl": "Du lernst das Geheimnis, das Blut eines anderen zu beleben und gegen ihn zu wenden.",
    "x": [
     "Markiere W6 Stress, um diesen Zauber zu wirken. Für den Rest der aktuellen Situation kannst du das Blut eines lebenden Ziels durch Nase, Augen und Mund herausziehen, einfach indem du in seine Richtung gestikulierst. Diese Geste funktioniert als Waffe (W6, Verheerend, Fernkampf)."
    ]
   }
  ],
  "hoch": [
   {
    "t": "UNTÖTBAR",
    "p": 5,
    "tag": "Okkult",
    "fl": "Der Tod hat keine Macht über dich.",
    "x": [
     "+2 Blut. Wenn du infolge von Fallout sterben würdest, stirbst du nicht. Stattdessen erwachst du am Morgen der nächsten Morgenröte in deinem Bau wieder. Hast du keinen Bau, wirst du im Herzen wiedergeboren, und diese Fähigkeit wird dir entzogen (du kannst sie erneut erwerben)."
    ]
   },
   {
    "t": "EIN DUNKLES UND VERHEERTES LAND",
    "p": 5,
    "tag": "Okkult",
    "fl": "Du verstehst das Geheimnis deines Baus: dass er in dir lebt und nicht du in ihm.",
    "x": [
     "+2 Blut. Wie BAU, aber wenn du W6 Stress ausgibst und eine halbe Stunde lang konzentriert bist, erschafft sich dein Bau dort neu, wo du gerade stehst. Du kannst augenblicklich zwischen diesem neuen Bau und dem ursprünglichen wechseln, aber du kannst nur einen einzigen zusätzlichen Bau gleichzeitig unterhalten. Besuchst du deinen neuen Bau eine volle Woche lang nicht, löst er sich auf, und das Gebiet kehrt zur Normalität zurück."
    ]
   },
   {
    "t": "CHEVAL",
    "p": 5,
    "tag": "Okkult",
    "fl": "Du stürzt dein Bewusstsein in den Körper eines armen Unglücklichen und lenkst ihn wie ein Pferd.",
    "x": [
     "+2 Blut. Wie PUPPENFLUCH, aber: Du erhältst für die Dauer des Zaubers die volle Kontrolle über den Körper des Ziels und musst keinen Stress markieren, damit es Handlungen ausführt. Es hat keine Erinnerung an die Handlungen, die es während der Besessenheit ausgeführt hat. Für die Dauer des Zaubers befindet sich dein ursprünglicher Körper in einer halbbewussten Trance – du nimmst die Geschehnisse um deinen zuckenden, plappernden Körper nur noch kaum wahr."
    ]
   }
  ]
 },
 "boxen": [
  {
   "h": "BLUTHEXEREI",
   "b": [
    "Obwohl Zauber der Bluthexerei den Tag Okkult tragen, muss die Zaubernde keine Probe würfeln, um sie zu wirken. Auf diese Weise funktionieren sie wie göttliche Magie, haben aber keine bestimmte göttliche Quelle – die einzigartige Blutchemie der Hexe erlaubt es ihr, die Restenergien des Herzens in mächtige und stabile Zauberei zu kanalisieren. Aus diesem Grund können sie nicht von einem Charakter gewirkt werden, der die Pilgerreise zum Herzen nicht unternommen hat.",
    "Wirkt eine Blood-Witch als Teil eines Hexenzirkels – traditionell insgesamt drei Hexen –, kann der gesamte dabei entstehende Stress gleichmäßig auf die Mitglieder der Gruppe verteilt werden. (Oder auf die schwächste Hexe abgewälzt werden, wie es häufiger geschieht.)",
    "Außerdem: Die Mehrzahl der Blood-Witches sind Frauen. Die meisten Männer, die sich die Infektion zuziehen, sterben aufgrund einer biologischen Eigenheit, bevor ihre Verwandlung zur Hexe abgeschlossen ist, doch männliche Hexen sind nicht unerhört."
   ],
   "nach": "kfae",
   "p": 3
  }
 ],
 "hinweis": {},
 "fortIntro": {},
 "abschn": [
  {
   "id": "beruechtigte-blood-witches",
   "t": "Berüchtigte Blood-Witches",
   "p": 6,
   "nach": "fort",
   "intro": [],
   "gruppen": [
    {
     "h": "",
     "karten": [
      {
       "t": "GRÄFIN BERYL ALIQUAM DIE DRITTE",
       "p": 6,
       "x": [
        "Beryl war vor mehreren Jahrzehnten ein sicherer Kandidat für den Rat, nachdem sie aus der Nomadennation Aliquam im Jahr der Acht Götter eingewandert und rasch in den Rängen des Spire-Adels aufgestiegen war. Ohne dass ihre Begleiter es wussten, hatte sie das Herz besucht und war zur Blood-Witch geworden, und eine unpassende Bemerkung über ihren Haarschmuck auf einem Ball führte zu einer vollständigen Herzblut-Verwandlung und mehreren vorzeitigen Todesfällen. Sie lebt derzeit in Ivory Row als Gast von Lady Theryn."
       ]
      },
      {
       "t": "SCHWESTER GRISWOLD",
       "p": 6,
       "x": [
        "Sehr aktiv in der Karmesinroten Wacht; wütend, rachsüchtig gegen die Aelfir, genießt es, ganze Adelshäuser in einer einzigen Nacht zu zerstören, indem sie sie in Chaos und Feuer stürzt."
       ]
      },
      {
       "t": "DOKTOR SERRYS DE VIRE",
       "p": 6,
       "x": [
        "Doktor De Vire hatte großen Einfluss auf die medizinische Forschung in Spire, leistete Pionierarbeit bei vielen modernen Methoden der Betäubung und Desinfektion und ist allein verantwortlich für die Hex-Maladi-Seuche im Jahr des Roten Mondes, in dem die Straßen von Little Whitecross von nadelzahnigen, an der Decke kriechenden Mutanten überrannt wurden."
       ]
      },
      {
       "t": "SOMNA",
       "p": 6,
       "x": [
        "Wurde Spires müde und gründete tief in der Nachtstadt ihre eigene Flickenteppich-Version davon, über die sie herrscht."
       ]
      },
      {
       "t": "BLUTZAHN [[Gore-Tooth]]",
       "p": 6,
       "x": [
        "Herrschte einst über Grist, bevor die Ghule kamen und es übernahmen; manche sagen, sie tue es noch immer, mit den Ghulen als Vollstreckern und dem wahnsinnigen Halbgott King Teeth als Marionettenherrscher. Die meisten Blood-Witches essen keine Kinder – Blutzahn tut es."
       ]
      },
      {
       "t": "MAJI-MAL, MUTTER DER MONSTER",
       "p": 6,
       "x": [
        "Der Spinnentier-Schrecken namens Maji-Mal ist das einzige bekannte Individuum, das sowohl Blood-Witch- als auch Midwife-Züge vereint. Ihr Bau (der mit ihr durch den Untergrund wandert) ist durchsetzt mit den Föten zärtlich umsorgter Kreaturen, albtraumhaften Kombinationen aus Drow und Spinne und den namenlosen Monstern, die im Herzen ihr Unwesen treiben, und sie hat große Freude daran, ihre Brut anzukleiden und ihr eine gute Erziehung zu geben."
       ]
      }
     ]
    }
   ]
  }
 ]
});
