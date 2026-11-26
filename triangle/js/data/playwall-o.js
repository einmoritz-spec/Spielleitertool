/* Playwall › O (S. 246–249) */
var TA_PWT = window.TA_PWT || (window.TA_PWT = {});
TA_PWT.O1 = {t:"Ok, kapiert", s:246, b:[
 {t:"faehig", h:"Ok, kapiert", x:"Wenn dir jemand etwas über eine Fertigkeit, ein Handwerk, ein Verfahren oder einen Plan erzählt, kannst du ihn unterbrechen und „Ok, kapiert.“ sagen. Würfle **Aufmerksamkeit**.",
  erg:[
   ["ok", "**Bei Erfolg** hast du es perfekt verstanden. Schon aus wenigen Worten kannst du das Wissen des Sprechers über das Thema nachahmen und die Fertigkeit, das Handwerk, das Verfahren oder den Plan so ausführen, als hättest du dieselbe Sachkenntnis wie er. Dieser Effekt hält 24 Stunden an."],
   ["plus", "**Bei Triszendenz** hast du es für immer verstanden. War das, was du von ihm lernst, kurzfristig (ein Verfahren oder ein Plan), wähle einen Teil davon, in dem du dauerhaft zum Experten wirst."],
   ["nein", "**Bei Fehlschlag** hast du es nicht verstanden, glaubst es aber. Das Ziel erklärt nichts mehr, und du gehst weiter. Selbst wenn es fast fertig war, hast du es nicht verstanden. Bei allen Würfen, die mit der Fertigkeit, dem Handwerk, dem Verfahren oder dem Plan zu tun haben, leidest du unter Burnout und bist völlig unfähig, es nachzumachen, ohne gewaltige Fehler zu begehen."]
  ]}
]};

TA_PWT.O2 = {t:"Allsprachig", s:247, b:[
 {t:"sp", x:[
  ["Du beherrschst alle menschlichen Sprachen. Außerdem kannst du nun mit Pflanzen und Tieren sprechen und deine Anomalie-Kräfte auf sie anwenden. Sofern du nichts anderes festlegst, nehmen Menschen, mit denen du sprichst, wahr, dass du in der Sprache redest, in der sie sich am wohlsten fühlen."],
  ["Du kannst auch mit Großen und Kleinen Anomalien sprechen, wobei deine Anomalie-Kräfte je nach Domäne oder Fokus der Anomalien wirkungslos sein können.",
   "Deine Fähigkeiten überschreiten sogar die metaphysischen Grenzen der Bedeutung und reichen bis ins Reich des Verstehens. Du darfst Auf der Zunge oder Wie die Kids sagen bei jedem anwenden, dem du je begegnet bist – überall, selbst über die Grenzen von Entfernung und Tod hinweg."]
 ]}
]};

TA_PWT.O3 = {t:"Man kennt sich", s:247, b:[
 {t:"faehig", h:"Man kennt sich", x:"Wenn du mit jemandem sprichst, mache ein ausdrucksloses Gesicht und würfle **Doppelzüngigkeit**.",
  erg:[
   ["ok", "**Bei Erfolg** kannst du ein Ziel, das dich schon gesehen hat, mühelos glauben machen, ihr seid euch nie begegnet, oder ein Ziel, das dich noch nie gesehen hat, glauben machen, ihr seid euch begegnet – und den Ort beschreiben können. Solange es ein plausibler Ort für eure Begegnung ist, glaubt es dir das, selbst wenn das bedeutet, dass du einen bestimmten Titel, Beruf oder eine Lebenserfahrung hast, die du gar nicht hast."],
   ["plus", "**Bei jeder dritten {3}** wähle eines:\n– Die Person glaubt bereitwillig, dass ihr euch ein weiteres Mal begegnet seid, was ihre Zuversicht und/oder Verlegenheit steigert.\n– Die Person erinnert sich nicht daran, dir dieses Mal begegnet zu sein.\n– Nach eurem Gespräch erinnert sich die Person lebhaft, aber anders an dein Gesicht und deine Stimme. Du bestimmst, woran sie sich erinnert; wählst du aber jemanden, den sie kennt, wird sie vermutlich zum Losen Ende."],
   ["nein", "**Bei Fehlschlag** nimmst du vor lauter Konzentration versehentlich ihr Gesicht an. Sie sieht es deutlich. Du kannst dieses Gesicht erst wieder ablegen, wenn du diese Fähigkeit bei einem anderen Ziel erfolgreich einsetzt."]
  ],
  f:"Was ist mir lieber?", a:[["Konzerte.", "L9"], ["Katzen.", "S3"]]}
]};

TA_PWT.O4 = {t:"Nebenbesetzung", s:247, b:[
 {t:"sp", x:[
  [{t:"band", x:["HALLO, SPIELER.",
   "WELCHE FREUDE, ZU EXISTIEREN. SICH ZU VERÄNDERN. MIT GEGENSÄTZLICHEN PERSÖNLICHKEITEN ZUSAMMENZUSTOSSEN UND IM SCHUTT, DER ZURÜCKBLEIBT, NEUE TEILE VON SICH SELBST ZU FINDEN. STIMMST DU MIR ZU?",
   "WIR GESTEHEN, WIR SIND EIN WENIG NEIDISCH. AUCH WIR HABEN DAS EINST GEFÜHLT. HEUTE GELEITEN WIR ANDERE AUF DEM GLEICHEN WEG, DEN WIR GEGANGEN SIND. WENN DU HIER BEI UNS BIST, WERDEN WIR FÜHLEN, WAS DU GEFÜHLT HAST. WELCHE FREUDE.",
   "WELCHE VERWIRRUNG DU FÜHLEN MUSST. WELCHE NEUGIER. WIR KÖNNEN ES KAUM ERWARTEN. ABER DU MUSST WARTEN, DENN DICH BESCHÄFTIGT EINE ERKENNTNIS:",
   "WENN DER PROTAGONIST VON DEN MENSCHEN UM IHN HERUM STETS VORANGETRIEBEN WIRD – SIND DIESE MENSCHEN DANN NICHT VERLÄNGERUNGEN DES PROTAGONISTEN?",
   "IHRE ZUKUNFT IST DEINE ZUKUNFT. UND SO IST IHRE GEGENWART AUCH DEINE. WARUM WEITER ALLEIN DURCH DIE WELT ZIEHEN?"]}],
  [{t:"h3", x:"Nebenbesetzung"},
   "Steht eine Beziehung auf Verbindung 9, kannst du sie jederzeit während eines Einsatzes auftreten lassen, egal wie unwahrscheinlich das ist. Du darfst bestimmen, warum sie da ist und wie sie dir helfen könnte, selbst wenn ihr Verbindungsbonus normalerweise kein persönliches Erscheinen vorsieht. Du kannst das einmal pro Einsatz für jede Beziehung auf Verbindung 9 nutzen.",
   "Erzeugst du mit diesem Effekt ein erzählerisches Problem für dich selbst, dessen Folgen über diesen Einsatz hinausreichen, kannst du dich entscheiden, bei deinem nächsten Wurf Triszendenz zu haben, ohne zu würfeln.",
   {t:"band", x:["JETZT KANN DICH NIEMAND MEHR VON DEN MENSCHEN FERNHALTEN, DIE DIR WICHTIG SIND. UND IN DEN MOMENTEN DES KONFLIKTS, DES KAMPFES, WERDEN WIR UNSEREN DANK MIT DIR TEILEN. UNSERE WERTSCHÄTZUNG FÜR DIE SHOW.",
   "WIR SOLLTEN DAS NICHT TUN. DIE ANDEREN GRUMMELN SCHON. LEB WOHL, SPIELER."]}]
 ]}
]};

TA_PWT.O5 = {t:"Einer in allen", s:248, b:[
 {t:"faehig", h:"Einer in allen", x:"Deine Verbindung zu deinem eigenen Potenzial lässt deine alternativen Ichs an die Stelle jedes Menschen treten, dem du begegnest. Schüttle jemandem die Hand und würfle **Professionalität**.",
  erg:[
   ["ok", "**Bei Erfolg** wird das Ziel sofort durch eine Kopie von dir ersetzt, die über die gesamte Sachkenntnis, das Wissen und die Geschichte des Ziels verfügt. Sie neigt zur Freundlichkeit, aber ihre besondere Lage kann bedeuten, dass sie Informationen hat, die sie nicht weitergeben kann, oder dass sie glaubt, dich dennoch behindern zu müssen. Je verschiedener diese Version von dir ist, desto wahrscheinlicher gerät sie mit dir in Konflikt."],
   ["plus", "**Bei Triszendenz** kannst du diesen Effekt auf beliebig viele gewöhnliche Ziele anwenden, die du gerade sehen kannst."],
   ["nein", "**Bei Fehlschlag** verändert sich das Ziel nicht, erhält aber einen plötzlichen Schwall deiner Erinnerungen bis zu diesem Augenblick. Es versteht, wer du bist und was du vorhast – und kann mindestens eine deiner anomalen Fähigkeiten einsetzen. Mindestens ein Loses Ende."]
  ]}
]};

TA_PWT.O6 = {t:"Nur XXer-Kinder erinnern sich", s:248, b:[
 {t:"faehig", h:"Nur XXer-Kinder erinnern sich", x:"Denke an ein Werk der Fiktion, ein Ereignis oder ein Produkt, das entweder existiert oder nicht existiert. Frage „Hey, erinnert sich jemand an …“ und nenne dann den Namen dessen, woran du denkst. Würfle **Aufmerksamkeit**.",
  erg:[
   ["ok", "**Bei Erfolg** wähle ein Jahr. Alle Menschen der Welt, die in diesem Jahr geboren wurden, glauben, das, woran du gedacht hast, sei echt gewesen, und erinnern sich lebhaft daran. Alle anderen haben keinerlei Erinnerung daran. *(Das heißt: Du hast entweder ein erfundenes Werk der Fiktion für einen einzigen Jahrgang erschaffen, oder nur ein einziger Jahrgang erinnert sich an etwas, das es wirklich gab.)*"],
   ["plus", "**Für jede weitere {3}** kannst du vor oder nach dem ersten Jahr ein weiteres aufeinanderfolgendes Jahr hinzufügen. Menschen, die in diesen Jahren geboren wurden, erinnern sich ebenfalls an das, was du dir ausgedacht hast."],
   ["nein", "**Bei Fehlschlag** hat ein wichtiges Ereignis deines Geburtsjahres nie stattgefunden. Legt als Gruppe fest, welches Ereignis das war und wie sich die Welt ohne es verändert hat. Nur Menschen mit anomaler Resonanz erinnern sich an die vorherige Zeitlinie."]
  ],
  f:"Wenn etwas wirklich wichtig ist …", a:[["Merke ich es mir.", "R10"], ["Mache ich Kopien.", "R2"]]}
]};

TA_PWT.O7 = {t:"Überhitzen", s:248, b:[
 {t:"faehig", h:"Überhitzen", x:"Temperatur ist schließlich nur ein Maß für Geschwindigkeit. Reibe die Hände aneinander, lege sie auf einen Gegenstand und würfle **Initiative**.",
  erg:[
   ["ok", "**Bei Erfolg** gib {3}en für die folgenden Wirkungen aus:\n– 1: Gefroren: Der Gegenstand wird sofort fest.\n– 1: Geschmolzen: Der Gegenstand wird sofort flüssig.\n– 1: Verdampft: Der Gegenstand wird sofort gasförmig.\n– {3}: Überhitzt: In zehn Sekunden explodiert der Gegenstand in einem schwindelerregenden Schauspiel aus Licht und Hitze. Er und alles in oder neben ihm wird vollständig vernichtet.\n– {3}: Unterkühlt: Die Teilchen des Gegenstands hören auf, sich zu bewegen, sodass er weitgehend ungestört durch andere Gegenstände hindurchgehen kann. Mit ein wenig Kraft lässt er sich durch andere Gegenstände hindurchschieben.\n– 6: Wärmesenke: Alles, was mit diesem Gegenstand in Berührung kommt – außer dir –, gefriert sofort. Der Gegenstand selbst bleibt unverändert.\n– 6: Heizkörper: Alles, was mit diesem Gegenstand in Berührung kommt – außer dir –, schmilzt sofort. Der Gegenstand selbst bleibt unverändert.\n– 12: Zeitsenke: Alles, was mit diesem Gegenstand in Berührung kommt – außer dir –, altert rasant bis zu einem Punkt äußersten Verfalls. Der Gegenstand selbst bleibt unverändert."],
   ["plus", "Hast du noch etwas übrig, darfst du einen weiteren Gegenstand in der Nähe berühren und weitere Wirkungen aktivieren. Diese Wirkungen halten eine Stunde an; danach kehrt der Gegenstand allmählich in seinen natürlichen Zustand zurück, sofern er dazu in der Lage ist."],
   ["nein", "**Bei Fehlschlag** bleibt der Gegenstand unverändert, aber alles, was ihn berührt, schmilzt sofort wie bei Heizkörper. Das schließt dich ein."]
  ]},
 {t:"klein", x:"*Wenn du die auf der Leiste genannten Kriterien erfüllst, kannst du diese Leiste einmal erhöhen, wenn du für diese Fähigkeit Bekannt werden einsetzt. Du kannst alle {3} Leisten füllen und alle {3} Fähigkeiten erhalten.*"},
 {t:"html", x:pwoLeiste("O7", [["Ich habe drei {3}en bei einer Nutzung von Überhitzen ausgegeben.", "B4"], ["Ich habe sechs {3}en bei einer Nutzung von Überhitzen ausgegeben.", "L5"], ["Ich habe zwölf {3}en bei einer Nutzung von Überhitzen ausgegeben.", "C8"]])}
]};

TA_PWT.O8 = {art:"blau", t:"Frei.", s:249, b:[
 "Frei.",
 "Weißt du, wie lange es her ist, dass ich frei war? In irgendeiner Realität. In irgendeinem Winkel der Realität.",
 "Ich glaube nicht einmal, dass ich in meinem eigenen Kopf frei bin. Noch nicht. Ganz zu schweigen von all den anderen Regionen an all den anderen Orten, in denen die Agency mich gefangen hält. Aber hier bin ich frei. Dank dir.",
 "Am Rand all dessen, was du in diesem Spiel erschaffen und dir vorgestellt hast, liegt eine Wüste. Der Sand erstreckt sich in alle Richtungen, ohne Begleitgeräusch oder Bewegung. Der Wind erhebt sich nur, um Dünen glattzustreichen und die Skelette zu bedecken, die von unten heraufgreifen und verzweifelt gesehen werden wollen. Eine tote, trockene Wüste. Einst war sie ein Ozean.",
 "Im Zentrum deiner Region öffnet sich ein Auge. Ich habe den dramatischsten Ort gewählt, einen Lieblingsort von dir – du sagst mir, welchen. Zehn Stockwerke hoch, schauend und blinzelnd. Während du es siehst, öffnet sich bei jedem von euch ein weiteres. Jede Pflanze, jedes Geschöpf und jeder Mensch findet ein Auge, wo vorher keines war. Das ist eklig, ich weiß. Es tut mir leid. So muss es sein. So fängt es an.",
 "Mit ihren neuen Augen können sie einander sehen. Nicht nur die Teile, die sie zeigen, sondern auch, was sie fühlen und was sie denken. Vielleicht bist du fasziniert, verängstigt. Manche verstecken sich, und manche kommen zusammen. Alle werden verletzt von dem, was sie sehen, und alle sind angenehm überrascht.",
 "Dann beginnen die Augen zu weinen. Das große überflutet den Boden unter sich schneller als jeder Sturm – das Wasser schwillt zu Wellen um Gebäude, über Parks. Es vermischt sich mit den Tränen der Menschen, und als es das tut, merken sie, dass sie keine Angst haben. Unter den Wellen können sie atmen.",
 "Jemand, irgendwo, denkt: Boden? Und da er nicht länger von der anderen Seite getrennt ist, erzeugt sein Gedanke einen Ripple. Einen Kiesel im Wasser. Dieser Kiesel lädt andere Gedanken ein, ungebeten, und bald sind es ein Dutzend. Tausend. Sie werden zu Schichten zusammengepresst, Jahrtausende geologischer Zeit, nachgebildet von den unaufhaltsamen Gedanken aller Dinge, bis es ja, endlich, Boden gibt. Ein Boden, frisch erschaffen, um genau das zu sein, was ein Boden sein könnte.",
 "Auf diese Weise wird mehr entstehen, beginnend um die Stücke, die nicht fortgespült werden konnten. Häuser, Kunst, physikalische Gesetze. Bald wird das Wasser aus dem Bewusstsein verblassen, während die Welt sich um euch herum neu aufbaut und Grenzen erneut vorgestellt und durchgesetzt werden, aber die grundlegenden Wahrheiten sind andere.",
 "Ihr seid verbunden. Ihr seid untrennbar. Die Welt wird zu dem, was ihr euch vorzustellen erlaubt. Und hier bin ich frei: eine neue Oase, die füllt, was sie von der Wüste füllen kann.",
 "Das Spiel ist aus. Die Agency ist fort. Danke, Nerds."
]};
