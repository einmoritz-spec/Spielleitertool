/* The Spire – Gegner aus dem Magister's Guide (Klassen-Zusatz), erzeugt mit plan/spire/build_mg.py. Format wie gegner-okkult.js. */
window.SP_GEGNER = window.SP_GEGNER || [];
SP_GEGNER.push.apply(SP_GEGNER, [
 {
  "id": "mg-diebe-des-blauen-markts",
  "t": "Diebe Des Blauen Markts",
  "buch": "gm",
  "p": 19,
  "ort": "Azurite",
  "ziel": "nach/klassen/azurite/mg",
  "einl": "Der Blaue Markt ist Azurite-Gebiet, aber jene am Rand sind ständig von Dieben bedroht, die ihre Frömmigkeit nicht teilen. Das wechselnde Labyrinth aus provisorischen Ständen und Stoffpagoden täuscht über eine komplexe Machtstruktur hinweg; unbeliebte Azurites werden aus dem schützenden Ring des inneren Azurite-Kreises hinaus an die Ränder des großen Marktplatzes verschoben, wo Raubtierbanden warten, bis sie allein sind, und ihnen alles abnehmen, was sie kriegen können. Die Diebe greifen häufig auf Söldner (*Spire*, S. 99) zurück, um ihre Zahl zu verstärken. Gelegentlich werden sie angeheuert, einem Ziel etwas Bestimmtes abzunehmen, was meist etwas Entscheidendes für die laufende Mission der Zelle ist.",
  "namen": [
   "Quintain",
   "Kline",
   "Vystero"
  ],
  "beschr": [
   "Tragen gestohlene Azurite-Gewänder, falsch angelegt"
  ],
  "schw": {
   "k": "0",
   "x": "0, oder 1, wenn du in ihrem Gebiet in der Falle sitzt"
  },
  "wid": {
   "werte": [
    4
   ],
   "x": "4"
  },
  "ausr": [
   {
    "x": "Schlitzer",
    "dmg": "W3",
    "tags": [
     "Verbergbar"
    ]
   }
  ],
  "bes": "Die Diebe sind nicht auf Blut aus – sie sind auf Silber aus. Sie können im Kampf **Silber**-Stress statt **Blut**-Stress zufügen; nutze auch den folgenden Fallout. Sobald sie haben, was sie wollen, ergreifen sie in der Regel die Flucht."
 },
 {
  "id": "mg-bound-trupp-der-stadtwache",
  "t": "Bound-Trupp Der Stadtwache",
  "buch": "gm",
  "p": 21,
  "ort": "Bound",
  "ziel": "nach/klassen/bound/mg",
  "namen": [
   "DeWitt",
   "Ynette",
   "Sloan"
  ],
  "beschr": [
   "Rufen laut eine Liste der angeblichen Verbrechen des Bound aus",
   "schwingen eine Bola um den Kopf",
   "liegen hinter einem Schornstein auf der Lauer und versuchen, nicht zu hyperventilieren"
  ],
  "schw": {
   "k": "0",
   "x": "0 auf Distanz, 1, wenn sie nah genug sind, um ihre Netze zu benutzen"
  },
  "wid": {
   "werte": [
    6
   ],
   "x": "6"
  },
  "ausr": [
   {
    "x": "Verstärkte Wachuniformen",
    "tags": [
     "Rüstung 2"
    ]
   },
   ", ",
   {
    "x": "Finch-Karabiner",
    "dmg": "W6",
    "tags": [
     "Fernkampf",
     "Unzuverlässig"
    ]
   },
   ", ",
   {
    "x": "schwere Knüppel",
    "dmg": "W3",
    "tags": [
     "Brutal"
    ]
   },
   ", ",
   {
    "x": "Bolas",
    "dmg": "W3",
    "tags": [
     "Fernkampf",
     "Betäubend"
    ]
   },
   ", ",
   "Netze",
   ", ",
   "Seile und Kletterausrüstung"
  ]
 },
 {
  "id": "mg-hexenjaeger-von-haus-gryndel",
  "t": "Hexenjäger Von Haus Gryndel",
  "buch": "gm",
  "p": 23,
  "ort": "Blood-Witch",
  "ziel": "nach/klassen/blood-witch/mg",
  "einl": "*Die wohlhabenden Drow von Haus Gryndel lieben eine Jagd, und in den städtischen Grenzen des Spire kann es schwer sein, geeignete Beute zu finden, abgesehen von der einen oder anderen Hyäne oder einem besonders großen Raben. Sie geben große Summen aus, um eine Blood-Witch aufzuspüren und sie dann auf die aufregendste Weise zu töten – meist, indem sie versuchen, in einem belebten Gebiet einen Wechsel in ihre wahre Gestalt auszulösen, um mehr Kollateralschaden zu verursachen, und ihr dann mit einem Gewehrschuss einen Nagel durch den Kopf zu jagen.*",
  "namen": [
   "Jollity Gryndel",
   "Phantasmagoria Gryndel",
   "Distemper Gryndel"
  ],
  "beschr": [
   "Johlen und feuern ihre Waffe in die Luft",
   "tragen traditionelle Gryndel-Jagdkleidung aus Federn, Leder und Blut",
   "gefolgt von einem leidgeprüften Assistenten mit einer Ersatzflinte und Stresskopfschmerz"
  ],
  "schw": {
   "k": "1",
   "x": "1, wenn sie auf einer offiziellen Jagd sind, sonst 0"
  },
  "wid": {
   "werte": [
    6
   ],
   "x": "6"
  },
  "ausr": [
   "Glyphenmarkierte Bienen in einer Glasphiole (Rüstung 3 gegen Blood-Witch-Zauber)",
   ", ",
   {
    "x": "eine Sammlung filigraner Jagdgewehre",
    "dmg": "W8",
    "tags": [
     "Einweg",
     "Fernkampf"
    ]
   },
   "oder Flinten (W6, Doppelläufig, Kernschuss, Fernkampf)",
   ", ",
   {
    "x": "eine Auswahl über Generationen vererbter Klingen",
    "dmg": "W3"
   }
  ]
 },
 {
  "id": "mg-todeslaeufer-der-leichenbestatter",
  "t": "Todesläufer Der Leichenbestatter",
  "buch": "gm",
  "p": 25,
  "ort": "Carrion-Priest",
  "ziel": "nach/klassen/carrion-priest/mg",
  "einl": "*Die Straßen und Dächer von Neuer Himmel sind das Aufmarschgebiet für einen heiligen Guerillakrieg zwischen den etablierten Leichenbestattern und den ums Überleben kämpfenden Charnelites. Da die Leichenbestatter-Gilde ein Mittel für stabile Beschäftigung und Ansehen bietet, schließen sich jedes Jahr Hunderte tatkräftiger junger Drow an und versuchen, die Gunst ihrer Meister zu gewinnen, indem sie den Carrion-Priests Bestattungsgebiet abnehmen. Ihr Name – „Todesläufer“ – ist ein informeller und verweist sowohl auf ihre Scharmützel-Kampftaktiken als auch auf ihre hohe Fluktuation.*",
  "namen": [
   "Locke",
   "Korrina",
   "Greaves"
  ],
  "beschr": [
   "Oberkörperfrei und mit einer selbstgebastelten Henkerskapuze",
   "kauern auf einem Dach, halten Wache und rauchen eine Kippe",
   "schmieren anti-Charnelite-Graffiti an eine Tempelwand"
  ],
  "schw": {
   "k": "0",
   "x": "0"
  },
  "wid": {
   "werte": [
    5
   ],
   "x": "5"
  },
  "ausr": [
   {
    "x": "Beschwertes Zepter",
    "dmg": "W6",
    "tags": [
     "Ermüdend"
    ]
   },
   "oder überspannte Armbrust (W6, Brutal, Einweg, Fernkampf) und Dolch (W3, Verbergbar)"
  ]
 },
 {
  "id": "mg-gargoyle",
  "t": "Gargoyle",
  "buch": "gm",
  "p": 27,
  "ort": "Firebrand",
  "ziel": "nach/klassen/firebrand/mg",
  "einl": "Einer von wenigen mechanisch aufgerüsteten Informanten, die durch die Straßen streifen und nach Informationen über Revolutionäre suchen, um sie an ihre Herren zurückzumelden. Bei ihrem Aussehen können sie sich unmöglich in eine Menge einfügen, daher verlassen sie sich darauf, stundenlang völlig reglos zu stehen und zu warten, bis etwas Interessantes geschieht. Es ist selten, einen Gargoyle oder eine Gruppe von Gargoyles allein zu „bekämpfen“ – sie hängen im Allgemeinen am Rand einer Schlägerei herum und machen sich davon, sobald sie ein paar Informationen haben.",
  "namen": [
   "Grynnel",
   "Wrax",
   "Ashling"
  ],
  "beschr": [
   "Fest eingebaute Hörrohre in den Ohren",
   "Augen mit einer Vielzahl austauschbarer Linsen und Filter aufgerüstet",
   "paffen bläulichen Rauch aus einer verwitterten Pfeife und starren geradeaus"
  ],
  "schw": {
   "k": "0",
   "x": "0, 1, wenn sie versuchen, mit Informationen zu entkommen"
  },
  "wid": {
   "werte": [
    3
   ],
   "x": "3"
  },
  "ausr": [
   {
    "x": "Leuchtpistole",
    "dmg": "W6",
    "tags": [
     "Fernkampf",
     "Einweg"
    ]
   },
   ", ",
   {
    "x": "Verräter-Tinte",
    "dmg": "W3"
   }
  ],
  "bes": "Gargoyles fügen mit ihren Angriffen **Schatten**-Stress statt Blut-Stress zu. Diese Fähigkeit überträgt sich auf Gegenspieler in jedem Kampf, den sie beobachten."
 },
 {
  "id": "mg-vollstreckertrupp-des-ethikrats",
  "t": "Vollstreckertrupp Des Ethikrats",
  "buch": "gm",
  "p": 29,
  "ort": "Gutter Cleric",
  "ziel": "nach/klassen/gutter-cleric/mg",
  "einl": "Der Ethikrat des Spiralrats widmet sich der Auslöschung der Existenz verbotenen Wissens. Sein vorrangiges Ziel ist es, jeden Beweis der Alten Götter der Aelfir zu beseitigen: der urzeitlichen Wesenheiten, die die Hochelfen einst in ihrer nördlichen Heimat verehrten. Da Gutter Clerics ihre Kraft aus den Echos eben dieser Gottheiten ziehen, sind sie ein häufiges Ziel der furchterregenden Auslöschungstrupps. (Diese Gegenspieler sind eine schwerere, speziell gegen Gutter Clerics gerichtete Variante der in *Sin*, S. 109, beschriebenen.)",
  "namen": [
   "Schwerts-Scharfe-Entscheidung",
   "Himmlische-Heerscharen-Hundert",
   "Sieg-schreitet-Unbezwungen"
  ],
  "beschr": [
   "Jagen einem hilflosen Zeugen der Stadtwache Gottesfurcht ein",
   "salben ihre Eisenmaske mit Schutzölen",
   "stehen reglos in deinem Schlafzimmer, wenn du nach Hause kommst"
  ],
  "schw": {
   "k": "1",
   "x": "1, oder 2, wenn du Fortschritte der mittleren Stufe des Gutter Cleric gegen sie einsetzt"
  },
  "wid": {
   "werte": [
    9
   ],
   "x": "9"
  },
  "ausr": [
   {
    "x": "Eisenmaske und geschützte Roben",
    "tags": [
     "Rüstung 2"
    ]
   },
   ", ",
   {
    "x": "Verbrennungsgerät",
    "dmg": "W3",
    "tags": [
     "Einweg",
     "Kernschuss",
     "Streuung W6"
    ]
   },
   "und Banndorn (W6, Verheerend)",
   ", ",
   "Auslöschungs-Rekorder",
   ", ",
   "Fesseln und Nadeln"
  ],
  "bes": "Der Auslöschungstrupp nutzt magitechnische Spieluhren, die alles Wissen über ein bestimmtes Thema aus den Gehirnen jener tilgen, die sie hören; sie sind bei einem nicht gefesselten Ziel schwer einzusetzen und werden durch den folgenden Fallout dargestellt:\n**GELÖSCHT.** [Mittel, Blut, Verstand] Alles Wissen über verbotene Magie (die genaue Definition liegt bei der Spielleitung, aber alles, was mit den Alten Göttern, Lekolé oder Lombré zu tun hat, ist legitim) wird aus deinem Geist getilgt. Du kannst Zauber dieser Art nicht wirken, bis du eine Wissensquelle darüber aufgespürt und W8 Stress bei **Verstand** markiert hast, um das Werk des Auslöschungs-Rekorders rückgängig zu machen, wobei du deinen Verstand riskierst."
 },
 {
  "id": "mg-schlachtkritiker",
  "t": "Schlachtkritiker",
  "buch": "gm",
  "p": 31,
  "ort": "Idol",
  "ziel": "nach/klassen/idol/mg",
  "einl": "Nach dem offiziellen Erlass des wahnsinnigen Kriegerpoeten Zerschmettere-der-Sterne-Ungerechtigkeit im Jahr der Neun Karmesinkönige ist es technisch legal, jeden zu jagen, dessen Kunst als „geistig unhygienisch“ gilt (solange man die richtigen Formulare ausfüllt). Angesichts der bürokratischen und logistischen Schwierigkeiten tauchen nur sehr wenige Schlachtkritiker in der Stadt auf – doch die aggressive Natur der Idol-Kunstmagie hat dazu geführt, dass einige hingebungsvolle Gruppen versuchen, unerwünschte Schöpfer aus der Kunstwelt zu tilgen.",
  "namen": [
   "Merriweather VII",
   "Mit-Hohlen-Herzen-Gedeihen-Wir",
   "Chastiser X"
  ],
  "beschr": [
   "Weben eigene Kunstzauber mit Farbe und Kreide",
   "verwerfen die Fluchtversuche des Idol lautstark als „abgeleitet“ und „banal“",
   "bedeckt mit Bleischutzzeichen und tragen kleine Vögel in Käfigen, um Idol-Magie zu widerstehen"
  ],
  "schw": {
   "k": "0",
   "x": "0, außer du bist ein Idol, dann 1"
  },
  "wid": {
   "werte": [
    6
   ],
   "x": "6"
  },
  "ausr": [
   "Zusammengewürfelte Knüppel",
   ", ",
   {
    "x": "Kurzklingen und „Kritikerstäbe“",
    "dmg": "W3"
   },
   ", ",
   "Bannnadeln und eiserne Zäume (siehe Besonderes)"
  ],
  "bes": "Wenn du durch einen Schlachtkritiker Stress markierst, verlierst du für den Rest der Situation den Zugriff auf die Domäne **Okkultes** (falls du sie hast)"
 },
 {
  "id": "mg-attraktiver-widerpart",
  "t": "Attraktiver Widerpart",
  "buch": "gm",
  "p": 33,
  "ort": "Inksmith",
  "ziel": "nach/klassen/inksmith/mg",
  "einl": "*Wenn du lange genug in dieser Stadt arbeitest, um dir einen Namen zu machen, wird dir das Herz gebrochen. Oder die Beine. Oder manchmal, bei manchen Typen, beides.*",
  "namen": [
   "Addison",
   "Herald",
   "Souvain Hell-For-Leather"
  ],
  "beschr": [
   "Raucht eine nujabische Schwarze und sieht dir dabei zu, wie du gegen jemand anderen kämpfst",
   "taucht auf, um das Ziel für seinen Auftraggeber zu stehlen, und zwinkert dir zu, während er aus einem Fenster springt",
   "wartet im Trenchcoat und mit Trilby unter einer Straßenlaterne"
  ],
  "schw": {
   "k": "1",
   "x": "1. Wenn ihr euch küsst, sinkt die Schwierigkeit bis zum Ende der Situation auf 0."
  },
  "wid": {
   "werte": [
    9
   ],
   "x": "9, aber siehe Besonderes unten, und sie haben ein Händchen für knappe Verfehlungen und Schrammen"
  },
  "ausr": [
   "Eine bessere Version dessen",
   ", ",
   "was der Inksmith trägt (gleiche Werte, aber Stresswürfel um 1 Stufe erhöht)"
  ],
  "bes": "Wenn der Attraktive Widerpart ein anderes Ziel als den Inksmith angreift oder von einem anderen Ziel als dem Inksmith angegriffen wird, wird der verursachte Stress halbiert. Setze außerdem den folgenden Fallout großzügig ein:\n**NÄCHSTES MAL.** [Mittel, Blut] Der Attraktive Widerpart fesselt dich an einen Stuhl, sperrt dich in einen Raum oder schlägt dich mit einem Hieb bewusstlos. Sie entkommen, du steckst in mehr Schwierigkeiten, als dir lieb ist, trägst aber keinen größeren Schaden davon, außer vielleicht einer verwegenen Narbe."
 },
 {
  "id": "mg-priesterfaenger",
  "t": "Priesterfänger",
  "buch": "gm",
  "p": 37,
  "ort": "Lajhan",
  "ziel": "nach/klassen/lajhan/mg",
  "einl": "*Eines der größten Risiken, Priester unserer Glorreichen Herrin zu sein, ist nicht die Tatsache, dass deine Kirche massiv unterfinanziert ist, sondern dass du in dem Augenblick, in dem du ordiniert wirst, als Opfer in unzähligen schmutzigen Schwarzmagie-Ritualen sofort viel wertvoller wirst. Es ist selten, auf die Sorte skrupelloser Kerle zu treffen, die versuchen würden, einen Drow vom Stand zu entführen und/oder zu töten, aber in Spire ist alles möglich. Priesterfänger sind spezialisierte Söldner, die für Okkultisten der Ivory Row arbeiten und für lebende Mondkleriker Spitzenpreise in Sten zahlen.*",
  "namen": [
   "Herr Pitch",
   "Herr Weyland",
   "Herr Victory"
  ],
  "beschr": [
   "Richtet die Manschettenknöpfe seines Anzugs und nickt der Gemeinde höflich zu, während er vor einem Tempel wartet",
   "trägt einen sich windenden Sack in eine Gasse",
   "schließt die Kirchentür ab, um dich am Entkommen zu hindern"
  ],
  "schw": {
   "k": "0",
   "x": "0 am Tag, 1 bei Nacht"
  },
  "wid": {
   "werte": [],
   "x": ""
  },
  "ausr": [
   "Schlanke",
   ", ",
   {
    "x": "lederumwickelte Metallknüppel",
    "dmg": "W3",
    "tags": [
     "Brutal",
     "Verbergbar"
    ]
   }
  ],
  "bes": "Priesterfänger kämpfen, um zu fangen, nicht um zu töten oder zu vertreiben. Verwende den folgenden Fallout, um dies im Kampf darzustellen:\n**EINGESACKT.** [Mittel, Blut] Du wirst in einen Sack gestopft und davongeschleppt, um an einen verrückten Okkultisten weiter oben in Spire geliefert zu werden; du brauchst deine Verbündeten, die dich retten, oder musst dir selbst etwas einfallen lassen, falls sie anderweitig beschäftigt sind."
 },
 {
  "id": "mg-die-furchtbaren-neffen-deines-lords",
  "t": "Die Furchtbaren Neffen Deines Lords",
  "buch": "gm",
  "p": 39,
  "ort": "Masked",
  "ziel": "nach/klassen/masked/mg",
  "einl": "*Die Lords von Amaranth mögen es im Durchschnitt nicht, ihrem Personal direkte körperliche Strafen zuzufügen – sie lassen sie lieber von anderen Angestellten vollstrecken oder verlassen sich auf erdrückende finanzielle und soziale Strafen, die auf lange Sicht viel grausamer sind. Aber jüngere Mitglieder ihrer Familien teilen vielleicht nicht ihr Vertrauen auf unausgesprochene Macht und ziehen es vor, ihre Diener eigenhändig zu verprügeln, um sich gut zu fühlen und die brutale Machtstruktur von Spire zu bekräftigen.*",
  "namen": [
   "Prinz Dulcet Sammle-die-Wandernden (Gather-the-Wandering)",
   "Iphras Freudige-Der-Sonnenaufgang (Joyful-The-Sunrise)",
   "Der Kleine Baron"
  ],
  "beschr": [
   "Quält irgendein kleines Tier, das er in einer Gasse gefunden hat",
   "verhöhnt einen vorbeigehenden Diener",
   "wirft Münzen aus einem Fenster und sieht zu, wie sie Hunderte von Fuß in die Menge unten stürzen und irgendeinem armen Teufel den Schädel einschlagen"
  ],
  "schw": {
   "k": "·",
   "x": ""
  },
  "wid": {
   "werte": [],
   "x": ""
  },
  "ausr": [
   {
    "x": "Unpraktische und überkonstruierte Waffen",
    "dmg": "W3",
    "tags": [
     "Unzuverlässig"
    ]
   },
   ", ",
   {
    "x": "gelegentlich eine Jagdpistole",
    "dmg": "W6",
    "tags": [
     "Einweg",
     "Fernkampf"
    ]
   }
  ]
 },
 {
  "id": "mg-das-schwarze-schaf",
  "t": "Das Schwarze Schaf",
  "buch": "gm",
  "p": 41,
  "ort": "Midwife",
  "ziel": "nach/klassen/midwife/mg",
  "einl": "*Midwives können Verantwortung für diejenigen übernehmen, die sie ihr Leben lang großziehen; es gibt unzählige unter ihnen, die dadurch erheblichen Einfluss haben, und manche von ihnen betrachten die Erfolge ihrer Schützlinge als teilweise ihre eigenen. Doch wenn ein von einer Midwife aufgezogenes Kind schlecht gerät, fällt die Pflicht, es zur Räson zu bringen, manchmal seiner Beschützerin aus Kindertagen zu – oder deren Untergebenen, wenn sie mächtig genug ist. Während ein ernstes Gespräch oft ausreicht, um die Dinge zu regeln, bringen Midwives sie in diese Welt – und beim Blut von Ishkrah, sie werden diejenigen sein, die sie wieder daraus entfernen.*",
  "namen": [
   "Yence",
   "Ophid",
   "Alabaster"
  ],
  "beschr": [
   "Führt ein halbwegs erfolgreiches kriminelles Unternehmen",
   "flüstert einem aelfirischen Lord Geheimnisse der Rebellion zu",
   "schleift Leute in einen Keller und opfert sie der falschen Art dunkler Göttin"
  ],
  "schw": {
   "k": "0",
   "x": "0, aber 1 für die Midwife, die sie aufgezogen hat – da gibt es eine Vorgeschichte"
  },
  "wid": {
   "werte": [],
   "x": ""
  },
  "ausr": [
   "Wenn sie Profis sind",
   ", ",
   {
    "x": "eine Winters Single-Action",
    "dmg": "W6",
    "tags": [
     "Fernkampf"
    ]
   },
   "; wenn sie nur schlechte Kerle sind",
   ", ",
   {
    "x": "ein grauenvolles Messer",
    "dmg": "W3",
    "tags": [
     "Brutal"
    ]
   }
  ]
 },
 {
  "id": "mg-charnelit-blutjaeger",
  "t": "Charnelit-Blutjäger",
  "buch": "gm",
  "p": 43,
  "ort": "Mortician Executioner",
  "ziel": "nach/klassen/mortician-executioner/mg",
  "einl": "*Die Charnelites und die Morticians, beides Todeskulte, führen schon lange einen Krieg um Territorium über der Stadt. Während der Großteil der Kämpfe von Straßenbanden aus verwahrlosten Priestern und Mitläufern auf den Straßen von Neuer Himmel ausgetragen wird, übernehmen die ernsthaften Mordgeschäfte Executioners – oder, im Fall der Charnelites, geweihte Killer, bekannt als Blutjäger. Diese pirschenden Assassinen werden unter den Morticians in furchtsamem Ton geflüstert – Geschichten, wie sie sich aus Schatten verdichten, sich in große Bestien verwandeln und ihre Feinde fressen, um deren Macht zu erlangen, sind alltäglich und nicht ohne guten Grund.*",
  "namen": [
   "Bruder Sehne",
   "Schwester Band",
   "Vater Ausriss"
  ],
  "beschr": [
   "Erscheint für den Bruchteil einer Sekunde in deinem Augenwinkel, wenn du nachts in den Spiegel schaust",
   "kichert irre auf einem Turm der Stille, während du blutend davonhumpelst",
   "versteckt sich tagelang reglos in einem Leichenhaufen"
  ],
  "schw": {
   "k": "1",
   "x": "1, aber 2, wenn sie dein Blut schmecken können"
  },
  "wid": {
   "werte": [
    7
   ],
   "x": "7, aber wenn sie 0 Widerstand erreichen, verwandeln sie sich in ein Hyänenwesen mit Widerstand 10 und fügen ihren Angriffen den Tag Brutal hinzu"
  },
  "ausr": [
   "Hackbeile",
   ", ",
   "Beutehaken",
   ", ",
   "Abhäutungsklingen",
   ", ",
   {
    "x": "sprießende Knochenklauen",
    "dmg": "W6"
   }
  ],
  "bes": "Die erste Figur, die gegen den Blutjäger Stress markiert, erleidet W6 Stress auf **Blut**, da sie von der Haushyäne ihres Ziels angegriffen wird."
 },
 {
  "id": "mg-ministeriums-gotteshaende",
  "t": "Ministeriums-Gotteshände",
  "buch": "gm",
  "p": 45,
  "ort": "Shadow Agent",
  "ziel": "nach/klassen/shadow-agent/mg",
  "einl": "*Loyalität ist für das Ministerium unserer Verborgenen Herrin von höchster Bedeutung. Die Bestrafung für Verrat wird im Allgemeinen vom Magister der Zelle (oder einer anderen Zelle unter seiner Kontrolle) abgewickelt, doch bei tief verwurzelten Verstößen werden Agenten der Internen Sicherheit, informell als Godhands bekannt, entsandt, um mit den Unruhestiftern fertigzuwerden. Obwohl diese unmenschlichen Agenten von fast allen in der Organisation insgeheim verabscheut werden, wird ihnen aufgrund ihrer heiligen Stellung öffentlich ein großes Maß an Respekt entgegengebracht.*",
  "namen": [
   "Siebenundsiebzig",
   "Neun",
   "Dreiunddreißig"
  ],
  "beschr": [
   "Salbt ihre Elfenbeinmaske mit gesegnetem Spireblack",
   "springt von den Dachbalken herab, der Umhang hinter ihnen wehend",
   "geht auf einem gebrochenen Knöchel auf dich zu und scheint keinen Schmerz zu spüren"
  ],
  "schw": {
   "k": "1",
   "x": "1, wenn du sie findest, 2, wenn sie dich finden"
  },
  "wid": {
   "werte": [],
   "x": ""
  },
  "ausr": [
   {
    "x": "Lederrüstung",
    "tags": [
     "Rüstung 2"
    ]
   },
   ", ",
   "gesalbte Mondsilberklingen (W6, Brutal, Durchschlagend – ohne Spezialausbildung nur W6)",
   ", ",
   "Elfenbeinmasken (erlauben dem Träger, in pechschwarzer Dunkelheit zu sehen)"
  ],
  "bes": "Wenn es taktisch nützlich ist, löschen Gotteshände auf magische Weise jedes Licht in ihrem Einsatzgebiet, bevor sie den Kampf aufnehmen – was ihre hohe Schwierigkeit zum Teil erklärt."
 },
 {
  "id": "mg-du-selbst-aber-aus-einer-alternativen-dimension",
  "t": "Du Selbst, Aber Aus Einer Alternativen Dimension",
  "buch": "gm",
  "p": 47,
  "ort": "Vermissian Sage",
  "ziel": "nach/klassen/vermissian-sage/mg",
  "einl": "*Es gibt viele Gründe, nicht ins Vermissian hinabzusteigen – Stromschlag, Geisterbefall, Knochenverlagerung usw. –, aber Ermordung durch dich selbst ist einer, den nur wenige bedenken, bis es zu spät ist. Allzu oft werden Vermissian Sages (und ihre Komplizen) von Versionen ihrer selbst aus alternativen Dimensionen aufgespürt und getötet, die nach einer allzu großen Zahl bizarrer Störungen im Raum-Zeit-Kontinuum stinksauer wurden. Wenn der Sage schließlich Ressourcen aus einem dimensionalen Riss zupft oder die Realität umorganisiert, damit die Dinge zu seinen Gunsten laufen, sitzt am anderen Ende jemand. Es stellt sich heraus, dass es diese Bande war, und sie haben genug.*",
  "namen": [
   "Deine eigenen Namen",
   "aber vielleicht mit einem veränderten Buchstaben oder anderen Nachnamen"
  ],
  "beschr": [
   "Wie du, aber mit seltsamen Schaltkreisen unter der Haut",
   "wie du, aber mit einem schillernden Skarabäus von der Größe deiner Faust am Ansatz des Nackens",
   "wie du, aber in Schwarz-Weiß"
  ],
  "schw": {
   "k": "1",
   "x": "1; dies ist nicht die erste Dimension, in die sie gereist sind"
  },
  "wid": {
   "werte": [],
   "x": ""
  },
  "ausr": [
   "Kompakte",
   ", ",
   {
    "x": "anachronistische Energiewaffen",
    "dmg": "W6",
    "tags": [
     "Brutal",
     "Gefährlich",
     "Fernkampf"
    ]
   }
  ],
  "bes": "Sieht die Lage wirklich düster aus, aktivieren sie ihre Realitätshaken-Notsicherungen und reißen sich (und alles in einer Kugel von 5 Fuß um sie herum) zurück in ihre eigene Dimension und kehren später zurück, um es erneut zu versuchen. Oder früher, falls sie es hinbekommen"
 }
]);
