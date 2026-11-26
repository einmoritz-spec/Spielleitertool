/* The Spire – Klasse Shadow Agent (aus quellen/spire/de/str, erzeugt mit plan/spire/build_klassen2.py) */
(window.SP_KLASSE = window.SP_KLASSE || []).push({
 "id": "shadow-agent",
 "t": "Shadow Agent",
 "buch": "sp_s2",
 "herk": "Strata",
 "p": 7,
 "zitat": "„Die Göttin nahm einen Teil von mir, aber sie gab mir so viel mehr zurück.“",
 "intro": [
  "Du hast dasselbe Initiationsritual durchlaufen wie die anderen Minister, aber unten in der Dunkelheit ist etwas zerbrochen. Als du wieder auftauchtest, warst du nicht mehr dieselbe Person wie zu Beginn. Die Verborgene Herrin hat dich „gesegnet“, indem sie dir dein Selbstgefühl nahm und dich zum perfekten Werkzeug ihrer Wünsche machte: namenlos, gesichtslos, Moral und Identitäten wie einen Umhang tragend, um dich vor Blicken zu verbergen. Manche im Ministerium sehen in dir eine heilige Waffe der Göttin und einen wertvollen Verbündeten; andere fürchten, was aus dir werden könnte."
 ],
 "kern": {
  "wid": "Schatten +2, Verstand +1",
  "auff": "Verschaffe dir einen Vorteil, indem du dich als jemand ausgibst, der du nicht bist.",
  "fert": "Täuschen, Ermitteln",
  "dom": "Deine Start-Domänen ergeben sich aus der Wahl deiner Tarnungen."
 },
 "bind": [
  "Du hast eine NSC-Bindung aus deinem früheren Leben vor deiner Initiation: einen Freund, Verwandten, Liebhaber usw. Wähle seine Domäne aus den kleinen Tarnungen unten.",
  "Einer der anderen Spielercharaktere war die erste Person, die bemerkte, dass die Göttin bei der Initiationszeremonie einen Teil deiner Identität genommen hat. Wer war es, und wie hat er oder sie reagiert?"
 ],
 "ausr": [
  {
   "k": "pkt",
   "x": "Stilettdolch (W3, Verbergbar, Durchschlagend, Unzuverlässig)"
  },
  {
   "k": "pkt",
   "x": "Illegale Armbrust (W6, Fernkampf, Nachladen)"
  },
  {
   "k": "pkt",
   "x": "Heiligtumsrüstung eines Ministers (Rüstung 1, Verbergbar)"
  }
 ],
 "kfae": [
  {
   "t": "TARNIDENTITÄTEN",
   "p": 7,
   "x": [
    "Du hast Zugang zu Tarnidentitäten, die du durch den Ritus der Vielen Gesichter (unten) annehmen kannst. Zwar kann sich jeder als jemand anderes ausgeben, doch Shadow Agents haben durch ihre Hingabe an die Göttin eine ungewöhnliche metaphysische Verbindung zu ihren Tarnidentitäten. Eine Tarnung zu übernehmen gewährt dir Zugang zu einer zugehörigen Domäne. Solange du diese Tarnung besitzt, hast du die Domäne; verlierst du die Tarnung, geht auch die Domäne verloren. Anders als bei normalen Fortschritten erhältst du keinen Kniff darin, wenn du durch eine Tarnung Zugang zu einer Domäne bekommst, die du bereits besitzt; stattdessen hast du dauerhaften Zugang zu der Domäne, selbst wenn die Tarnung verloren geht. Wähle bei der Charaktererschaffung zwei kleine Tarnungen. (Die Unterscheidung zwischen kleinen und großen Tarnungen ist nur bei der Charaktererschaffung von Bedeutung.)"
   ]
  },
  {
   "t": "DER RITUS DER VIELEN GESICHTER",
   "p": 7,
   "tag": "Göttlich",
   "x": [
    "Markiere W3 Stress auf Verstand und verbringe fünf Minuten in Zwiesprache mit Lombre, um diesen Zauber zu wirken und eine deiner Tarnidentitäten anzunehmen. Solange du diese Identität verkörperst, weißt du zugleich, dass du sie bist und nicht bist (du musst also keine Täuschen-Proben ablegen, um als sie durchzugehen). Du kannst den Zauber jederzeit beenden und zu dir selbst zurückkehren. Egal, welche Tarnung du bewohnst, du hast immer Zugang zu diesem Zauber."
   ]
  },
  {
   "t": "TARNUNG ERSCHAFFEN",
   "p": 7,
   "tag": "Göttlich",
   "x": [
    "Du studierst deine Ziele bis ins kleinste Detail. Du darfst W6 Stress auf eine NSC-Bindung markieren, die du besitzt, um eine mit ihr verbundene Tarnidentität zu erschaffen. Dieser Vorgang erfordert mindestens ein paar Tage Studium, das Fälschen von Dokumenten und manchmal beiläufige Gespräche, um die Manierismen herauszufinden, die nötig sind, um als jemand dieses Berufs durchzugehen. Hast du diese Zeit und Mühe aufgewendet, wähle eine passende Tarnung aus der Liste unten und füge sie deinen verfügbaren Tarnungen hinzu. Die Tarnung ist keine Kopie ihrer Identität: Sie ist eine generische falsche Identität, die Elemente ihrer Persönlichkeit nutzt, um ihr Gewicht zu verleihen. Ist die Bindung zeitweilig, ist auch die Tarnung zeitweilig – ein zusammengeschustertes Durcheinander, das eine Weile hält. Entfernst du die Bindung, entfernst du auch den Zugang zur Tarnung."
   ]
  }
 ],
 "fort": {
  "niedrig": [
   {
    "t": "VERRAT",
    "p": 8,
    "fl": "Irgendwann wird sich jeder gegen dich wenden. Es ist besser, ihnen zuvorzukommen.",
    "x": [
     "+2 auf Verstand. Wenn du das Vertrauen von jemandem verrätst, würfle mit Meisterschaft."
    ]
   },
   {
    "t": "DIE GNADE EINER EINZIGEN NACHT",
    "p": 8,
    "tag": "Göttlich",
    "x": [
     "Markiere W6 Stress und flehe Lombre um Hilfe an, um diesen Zauber zu wirken. Wähle eine Tarnung, die du nicht besitzt: Du bewohnst sie nun bis zum nächsten Sonnenaufgang und darfst sie vorher aus keinem Grund ablegen."
    ]
   },
   {
    "t": "DISTANZIERT",
    "p": 8,
    "fl": "Du beginnst, die Grenzen zwischen dir und deinen Tarnungen zu verwischen; Schmerz und Stress sind gedämpft, wie Musik aus einem fernen Raum.",
    "x": [
     "Einmal pro Situation markierst du, wenn die Spielleitung dich auffordert, Stress auf Blut oder Verstand zu markieren, und du keine Tarnidentität bewohnst, nur die Hälfte des verursachten Stresses."
    ]
   },
   {
    "t": "IN IHREM SCHATTEN",
    "p": 8,
    "tag": "Göttlich",
    "fl": "Du saugst Wissen und Fähigkeiten aus denen um dich herum.",
    "x": [
     "+1 Schatten. Markiere W3 Stress, um diesen Zauber auf jemanden in der Nähe zu wirken. Indem du Kraft durch den Schatten des Ziels ziehst, kopierst du eine Fertigkeit oder Domäne, die es besitzt (bei NSCs klärst du mit der Spielleitung, was für eine Sache du stehlen kannst), und erhältst Zugang dazu bis zum Ende der aktuellen Situation."
    ]
   },
   {
    "t": "WERKZEUG DER GÖTTIN",
    "p": 8,
    "tag": "Göttlich",
    "fl": "Deine Herrin verleiht dir ihre heilige Waffe: ein Messer, schattenschwarz, kaum sichtbar.",
    "x": [
     "Erhalte die Fertigkeit Kämpfen. Einmal pro Sitzung rufst du die folgende Waffe in deine Hand: (W3, Scharf, Gift, Einweg.) Diese Waffe kann nicht benutzt werden, um Ziele bewusstlos zu machen. Reduziert sie den Widerstand eines Ziels auf 0, führt das zu einem raschen und qualvollen Tod."
    ]
   },
   {
    "t": "LOMBRES UMARMUNG",
    "p": 9,
    "tag": "Göttlich",
    "fl": "Du hüllst dich und deine Zelle in einen Mantel der Verschwiegenheit.",
    "x": [
     "Erhalte die Fertigkeit Schleichen und gib W3 Stress aus, um diesen Zauber auf dich und alle nahen Verbündeten zu wirken. Wenn jeder von euch das erste Mal Stress auf Schatten markiert, während der nächsten Situation, markiert er nur die Hälfte des verursachten Stresses."
    ]
   },
   {
    "t": "LAUT WERDEN",
    "p": 9,
    "fl": "Du kannst deine Tarnung nicht länger aufrechterhalten; du gehst mit allen Waffen feuernd ab, und Lombre segnet dich mit ihrer dunklen Macht.",
    "x": [
     "Zerstöre die Tarnung, die du gerade bewohnst (auch wenn sie nur AUFGEFLOGEN war – siehe Tarnungs-Fallout unten), um diese Fähigkeit zu aktivieren. Für den Rest der Situation erhalten deine Angriffe den Tag Brutal, und du würfelst mit Meisterschaft, wenn du gegen Leute kämpfst, die auf deine Tarnung hereingefallen sind."
    ]
   }
  ],
  "mittel": [
   {
    "t": "ERNTE",
    "p": 9,
    "tag": "Göttlich",
    "x": [
     "Du pflückst die Existenz eines Ziels zusammen mit seinem letzten Atemzug. Einmal pro Sitzung erzeugst du, wenn du jemanden tötest, eine zeitweilige Tarnung auf Grundlage seiner Identität, als wäre er eine Bindung: Du wirkst TARNUNG ERSCHAFFEN auf ihn. Markiere W6 Stress, wenn du diesen Zauber wirkst, um seine Identität dauerhaft als Tarnung hinzuzufügen."
    ]
   },
   {
    "t": "DURCH EIN GLAS, DUNKEL",
    "p": 9,
    "x": [
     "Du kannst dein Selbst von deinem Körper lösen und Ereignisse, die dir widerfahren, wie in der dritten Person beobachten. Aktiviere diese Fähigkeit, wenn du Fallout irgendeiner Art erleidest: Erhöhe die Schwierigkeit aller deiner Handlungen um 1, aber ignoriere die Auswirkungen sämtlichen Blut- oder Verstand-Fallouts auf deinen Charakter bis zum Ende der Situation. Endet die Situation, schnappst du zurück in deinen Körper und spürst die volle Wucht deines Fallouts."
    ]
   },
   {
    "t": "FOLIE À DEUX",
    "p": 9,
    "tag": "Göttlich",
    "x": [
     "Deine Überzeugung ist so stark, dass sie beginnt, andere anzustecken. Einmal pro Sitzung, solange du eine Tarnung bewohnst, „erkennt“ ein NSC deiner Wahl, der in der aktuellen Situation anwesend ist, dich als deine Tarnung und schuldet dir einen Gefallen – selbst wenn ihr euch nie begegnet seid (aber es hätte so sein müssen, angesichts deiner Tarnung). Zum Beispiel würde ein Quartiermeister deine Soldaten-Tarnung erkennen und ein Modeschöpfer deine Tarnung als adlig geborener Drow, aber nicht umgekehrt."
    ]
   },
   {
    "t": "SCHATTENMEISTER",
    "p": 9,
    "tag": "Göttlich",
    "x": [
     "Du reißt Wissen aus ihren Köpfen und benutzt es als Waffe gegen sie. +1 Schatten. Markiere W3 Stress, um diesen Zauber zu wirken. Er funktioniert wie IN IHREM SCHATTEN, aber du entfernst die Fertigkeit oder Domäne vom Ziel, solange du sie nutzt, indem du ihm den Schatten abreißt und in deinen eigenen einwebst. Wenn du mit der gestohlenen Fertigkeit oder Domäne gegen es handelst, würfelst du mit Meisterschaft. (Nimmst du sie einem anderen SC, verliert er den Zugang zur Fertigkeit oder Domäne einfach für den Rest der Situation.)"
    ]
   },
   {
    "t": "DER RITUS DER VIELEN SPIEGEL",
    "p": 9,
    "tag": "Göttlich",
    "fl": "Du kennst die geheimen Worte, die Welten auf den Kopf stellen.",
    "x": [
     "Du darfst Täuschen anstelle von Überzeugen verwenden und W6 Stress markieren, um diesen Zauber auf ein Ziel zu wirken, mit dem du sprechen kannst. Bis zum Ende der Situation glaubt das Ziel, dass etwas, das es einst glaubte, nicht länger wahr ist, ohne genau sagen zu können, warum. Es wird beginnen, nach dem Grund zu suchen."
    ]
   },
   {
    "t": "FALSCHER NAME",
    "p": 9,
    "fl": "Du hast dir deinen wahren Namen chirurgisch entfernen lassen.",
    "x": [
     "Erhalte die Fertigkeit Widerstehen und +1 Verstand. Bist du das Ziel okkulter Magie und erleidest Stress, markierst du nur die Hälfte des verursachten Stresses (aufgerundet)."
    ]
   },
   {
    "t": "GEBROCHENER SPIEGEL",
    "p": 9,
    "tag": "Göttlich",
    "fl": "Du befreist deinen Geist von seinen Grenzen und greifst in alternative Selbste hinein, um Macht zu schöpfen.",
    "x": [
     "Erhalte einen mittleren Fortschritt aus einer beliebigen Klasse. Bezieht er sich auf einen klassenspezifischen Gegenstand oder eine Fähigkeit (wie die Hyäne des Carrion-Priest oder die Götterklinge des Bound), erhältst du keinen Zugang zu diesem Gegenstand oder dieser Fähigkeit."
    ]
   },
   {
    "t": "OPFER",
    "p": 9,
    "fl": "Lombre ist gütig, aber sie hungert und belohnt Tribut.",
    "x": [
     "Du kannst eine Tarnung „töten“ – den Zugang zu ihr entfernen –, indem du sie in einem nächtelangen Ritual auf einem Altar der Verborgenen Herrin opferst. Tust du das, entferne all deinen aktuellen Stress und jeden Fallout, den du erlitten hast, während du die Tarnung bewohnt hast. Ist unklar, welchen Fallout du erlitten hast, als du die Tarnung bewohnt hast, bleibt der Fallout bei dir."
    ]
   }
  ],
  "hoch": [
   {
    "t": "RITUS DER VOLLKOMMENEN SYMMETRIE",
    "p": 9,
    "tag": "Göttlich",
    "x": [
     "Wie ERNTE, außer: Wenn du die Identität annimmst, siehst du aus und verhältst dich wie die Person, die du getötet hast, bis hin zu den kleinsten Manierismen. Ihr Partner, ihre Kinder und engen Freunde könnten den Unterschied nur durch eine gründliche, absichtliche Untersuchung erkennen."
    ]
   },
   {
    "t": "LOMBRES GNADE",
    "p": 10,
    "tag": "Göttlich",
    "x": [
     "Du verschmilzt deinen Geist mit dem deiner Herrin, und deine Voraussicht wird unheimlich. Einmal pro Sitzung ignorierst du, wenn du Fallout erleidest, alle negativen Auswirkungen dieses Fallouts: Statt zu schaden, war der Fallout ganz Teil deines laufenden Plans. Wenn du diese plötzliche Wendung nutzt, um deine Feinde zu überraschen, würfle bis zum Ende der aktuellen Situation mit Meisterschaft."
    ]
   },
   {
    "t": "PERFEKTE TARNUNG",
    "p": 10,
    "tag": "Göttlich",
    "x": [
     "Markiere W6 Stress, um diesen Zauber zu wirken. Spalte dein Selbst in zwei Gestalten auf: dich und eine Tarnidentität deiner Wahl. Bis zur nächsten Morgendämmerung steuerst du beide Charaktere – deine Tarnidentität hat keinen Zugang zu deinen Shadow-Agent-Fähigkeiten, sondern funktioniert mit allem, was man angesichts ihrer Identität von ihr erwarten würde. Verwende die Bindungsregeln, wenn du als die Tarnung handelst, behandle deine Tarnung als passende Bindung und verteile Stress entsprechend. Du kannst so viele Instanzen dieses Zaubers aktiv haben, wie du Tarnungen hast. Die Gestalten bestehen bis zur nächsten Morgendämmerung."
    ]
   },
   {
    "t": "SPIEGEL, DIE SPIEGEL SPIEGELN",
    "p": 10,
    "x": [
     "Entferne alle Widerstände von deinem Charakter und füge eine zusätzliche Tarnung hinzu: „Shadow Agent“. Dadurch können deine Tarnungen auf fünf steigen, technisch gesehen über dein Maximum hinaus. Jeglicher erlittene Stress wird auf deine aktuell aktive Tarnung angewendet, die als Widerstand ohne zusätzliche Widerstandsplätze behandelt wird. Du unterscheidest nicht mehr zwischen verschiedenen Stressarten (Blut, Silber, Schatten usw.), sondern wendest alles als „untypisierten“ Stress auf deine aktuelle Tarnung an. Fallout wird wie üblich ausgewürfelt, wobei der auf deine aktuelle Tarnung verteilte Gesamtstress als aktueller Gesamtstress deines Charakters gilt. Wenn du von einer Tarnidentität zu einer anderen wechselst, lässt du jeden Fallout und Stress, der dieser Tarnung zugewiesen ist, bei ihr zurück, und er hat keine Wirkung, bis du sie wieder bewohnst."
    ]
   }
  ]
 },
 "boxen": [],
 "hinweis": {},
 "fortIntro": {},
 "abschn": [
  {
   "id": "tarnungen",
   "t": "Tarnungen",
   "p": 7,
   "nach": "kfae",
   "intro": [],
   "gruppen": [
    {
     "h": "Klein",
     "karten": [
      {
       "t": "GANGSTER",
       "p": 7,
       "x": [
        "Erhalte die Domäne Verbrechen. Deine Tarnidentität ist Mitglied einer kriminellen Organisation. Du hast passende Kleidung, ein Mitgliedsabzeichen und eine billige, illegale Pistole (W6, Fernkampf, Nachladen, Unzuverlässig). Notiere, in welcher Organisation deine Tarnung ist."
       ]
      },
      {
       "t": "LINKE HAND GOTTES",
       "p": 8,
       "x": [
        "Erhalte die Domäne Religion. Deine Tarnidentität ist Mitglied des Klerus einer religiösen Organisation in Spire, und du hast die passenden Gewänder und Utensilien, um als Priester durchzugehen. Notiere, zu welcher Kirche deine Tarnung gehört."
       ]
      },
      {
       "t": "DROW DES VOLKES",
       "p": 8,
       "x": [
        "Erhalte die Domäne Niedere Gesellschaft. Deine Tarnidentität steht in Verbindung mit den Armen und Getretenen von Spire. Du hast eine Arbeitsuniform (Overall und etwas Schutzausrüstung) sowie eine halbwegs legitime Teilzeitstelle, mit der du dir ehrlich deinen Lebensunterhalt verdienen kannst."
       ]
      },
      {
       "t": "STADTWACHE",
       "p": 8,
       "x": [
        "Erhalte die Domäne Ordnung. Deine Tarnidentität ist Mitglied der Stadtwache: Du hast eine Uniform, gefälschte Papiere und einen Knüppel (W3)."
       ]
      },
      {
       "t": "HÄNDLER",
       "p": 8,
       "x": [
        "Erhalte die Domäne Handel. Deine Tarnidentität ist ein Schlitzohr auf einem der vielen Märkte von Spire, das sein Bestes tut, billig zu kaufen und teuer zu verkaufen. Du hast eine kleine Sammlung von Kleinwaren (sag, auf welches Gewerbe du spezialisiert bist), die du einmal verkaufen kannst, um W6 Stress von Silber zu entfernen."
       ]
      },
      {
       "t": "KULTIST",
       "p": 8,
       "x": [
        "Erhalte die Domäne Okkultes. Deine Tarnidentität ist Mitglied einer verbotenen Sekte von Okkultisten in Spire – notiere, welcher. Du hast das charakteristische Opferwerkzeug deines Kults (W3) und ein Set mystisch aussehender Roben sowie ein paar Bücher über die dunklen Künste."
       ]
      }
     ]
    },
    {
     "h": "Groß",
     "karten": [
      {
       "t": "KÖNIGLICHES BLUT",
       "p": 8,
       "x": [
        "Erhalte die Domäne Hohe Gesellschaft. Deine Tarnidentität ist Mitglied eines adligen Drow-Hauses – wähle, welches. Du hast mehrere Garnituren feiner Kleidung und eine Handvoll Schmuck."
       ]
      },
      {
       "t": "MANAGER",
       "p": 8,
       "x": [
        "Erhalte die Domäne Handel. Deine Tarnidentität ist Mitglied eines großen Unternehmens in Spire. Du hast Zugang zu einem gefälschten Handelssymbol, das es dir erlaubt, als Beauftragter des Unternehmens aufzutreten."
       ]
      },
      {
       "t": "SOLDAT",
       "p": 8,
       "x": [
        "Erhalte die Domäne Ordnung. Deine Tarnidentität ist ein eingezogenes Mitglied der Alliierten Verteidigungsstreitkraft. Du hast eine Militäruniform, gefälschte Papiere und ein standardmäßiges Kampfmesser (W3), aber keinen unmittelbaren Zugang zu einem Gewehr."
       ]
      },
      {
       "t": "RETROINGENIEUR",
       "p": 8,
       "x": [
        "Erhalte die Domäne Technik. Deine Tarnidentität ist ein Mensch, der in Spire als Mechaniker und Ingenieur lebt und arbeitet. Du kannst dich als Mensch verkleiden – passende Kleidung, ein Mittel, deine einfarbige Haut und die langen Ohren zu verbergen – und hast eine Tasche mit Werkzeug."
       ]
      },
      {
       "t": "AELFIR",
       "p": 8,
       "x": [
        "Erhalte die Domäne Hohe Gesellschaft. Deine Tarnidentität ist ein maskierter Aelfir. Du hast Zugang zu einer „echten“ Maske und einem Satz entsprechend aufwendiger und unpraktischer Kleidung. Du siehst gut genug aus wie ein Aelfir, um eine Weile als einer durchzugehen, aber nur solange Maske und Kleidung am Körper bleiben."
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "tarnungs-fallout",
   "t": "Tarnungs-Fallout",
   "p": 10,
   "nach": "fort",
   "intro": [
    "Tarnungen sind keine perfekten Dinge. Sie können dem Charakter ins Gegenteil umschlagen und ungewollte Aufmerksamkeit anziehen – und dank der mystischen Natur der Verbindung des Shadow Agent zur Verborgenen Herrin können sie auch ein Eigenleben entwickeln. Nach Ermessen der Spielleitung kann diese, wenn du Fallout erleidest und es angemessen erscheint, aus der Liste der Ergebnisse unten schöpfen."
   ],
   "gruppen": [
    {
     "h": "Leicht",
     "karten": [
      {
       "t": "ÄRGER",
       "p": 10,
       "tag": "Tarnung",
       "x": [
        "Du lenkst durch dein Handeln Aufmerksamkeit auf deine Tarnung, sodass jemand aus der Domäne der Tarnung seine Nase in Dinge steckt, die ihn nichts angehen."
       ]
      },
      {
       "t": "FESTGEFAHREN",
       "p": 10,
       "tag": "Tarnung",
       "x": [
        "Du kannst deine aktuelle Tarnung bis zum nächsten Sonnenaufgang nicht ablegen."
       ]
      },
      {
       "t": "KOMPROMITTIERT",
       "p": 10,
       "tag": "Tarnung",
       "x": [
        "Deine Tarnung ist kompromittiert. Bis zum Ende der nächsten Sitzung erhöhst du die Schwierigkeit aller Aufgaben, die mit dieser Identität verbunden sind, um 1."
       ]
      }
     ]
    },
    {
     "h": "Mittel",
     "karten": [
      {
       "t": "AUFGEFLOGEN",
       "p": 10,
       "tag": "Tarnung",
       "x": [
        "Du verlierst den Zugang zu dieser Tarnidentität."
       ]
      },
      {
       "t": "VERWECHSLUNG",
       "p": 10,
       "tag": "Tarnung",
       "x": [
        "Ein NSC glaubt, deiner Tarnidentität schon einmal begegnet zu sein, und du bist gezwungen, ihm zuzustimmen. Leider gerätst du durch den Irrtum schnell in eine schwierige Lage."
       ]
      }
     ]
    },
    {
     "h": "Schwer",
     "karten": [
      {
       "t": "EGO-TOD",
       "p": 10,
       "tag": "Tarnung",
       "x": [
        "Tausche deine Grundidentität gegen eine Tarnung, die du besitzt. Die Tarnung ist nun deine Grundidentität (ebenso alle daran gebundenen Domänen), und deine Grundidentität (d. h. alle deine Shadow-Agent-Fortschritte) wird zu einer Tarnung, auf die du nur mit den Riten der Vielen Gesichter zugreifen kannst."
       ]
      },
      {
       "t": "WIDERWILLIGER AVATAR",
       "p": 10,
       "tag": "Tarnung",
       "x": [
        "Eine zu wenig genutzte oder missbrauchte Tarnung rebelliert gegen dich und handelt aus eigener Initiative als Werkzeug Lombres, übernimmt in ungünstigen Momenten die Kontrolle über deinen Körper und versucht, Macht über dich zu gewinnen. Du kannst diese Identität nicht mehr bewohnen. Zu Beginn jeder Sitzung sagt dir die Spielleitung, was die Tarnung getan hat, während du dir dessen nicht bewusst warst. Du kannst diesen Fallout aufheben, indem du deine Tarnung aufspürst und daran hinderst, gegen dich zu handeln, aber das ist die Art von Sache, die eine große Menge experimenteller Therapie und bewaffneter Rituale erfordern wird. Oder vielleicht ist das der Wille der Verborgenen Herrin, und du solltest gar nicht versuchen, es zu stoppen."
       ]
      }
     ]
    }
   ]
  }
 ]
});
