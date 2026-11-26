/* Playwall › P (S. 250–254) */
var TA_PWT = window.TA_PWT || (window.TA_PWT = {});
TA_PWT.P1 = {t:"Einfügen", s:250, b:[
 {t:"faehig", h:"Einfügen", x:"Gib aus deinem Körper ein Duplikat eines gespleißten Ziels frei. Würfle **Doppelzüngigkeit**.",
  erg:[
   ["ok", "**Bei Erfolg** erschaffst du ein Duplikat eines Ziels, das du gespleißt hast. Es folgt deinen Befehlen und hält sich für so etwas wie ein Kind von dir. Kopierst du etwas Empfindungsfähiges, besitzt das Duplikat eine Wissensbasis, die der des Kopierten entspricht, aber keine der dazugehörigen Erinnerungen; es ist ein neues Wesen. Du kannst es jederzeit in deinen Körper zurückholen, solange es dich körperlich berührt."],
   ["plus", "**Für jede weitere {3}** kannst du ein weiteres Duplikat desselben oder eines anderen Spleißes erschaffen."],
   ["nein", "**Bei Fehlschlag** erschaffst du ein Duplikat von jedem Spleiß, den du gerade trägst, und keines davon kann in deinen Körper zurückgeholt werden."]
  ]}
]};

TA_PWT.P2 = {t:"Pause-Taste", s:250, b:[
 {t:"faehig", h:"Pause-Taste", x:"Genau das, was du denkst. Drücke eine beliebige Taste und würfle **Initiative**.",
  erg:[
   ["ok", "**Bei Erfolg** hältst du die Zeit für alle außer dir für 10 Sekunden an. Manche Anomalien sind gegen diesen Effekt resistent, aber alle gewöhnlichen Ziele sind ihm unterworfen."],
   ["plus", "**Bei jeder dritten {3}** kannst du die Zeit um 10 Sekunden verlängern oder 1 Ziel hinzufügen, das vom Zeitstopp nicht betroffen ist."],
   ["plus", "**Bei Triszendenz** kannst du diesen Effekt in den nächsten fünf Minuten nicht eingefrorener Zeit beliebig oft ein- und ausschalten."],
   ["nein", "**Bei Fehlschlag** friert die Zeit für alle außer dir ein. Du kannst die Welt in keiner Weise beeinflussen. Du bekommst weder Hunger noch Durst und wirst nicht müde. Du sitzt ein Jahr lang in dieser eingefrorenen Welt fest. In dieser Zeit alterst du körperlich."]
  ]}
]};

TA_PWT.P3 = {t:"Menschen töten Menschen", s:250, b:[
 {t:"faehig", h:"Menschen töten Menschen", x:"Erfülle ein Ziel mit der Kraft deiner Gun. Sage etwas, das sein Selbstvertrauen stärkt, und würfle **Präsenz**.",
  erg:[
   ["ok", "**Bei Erfolg** wird die nächste Person, die dem Ziel körperlich oder seelisch wehtut, sofort Eliminiert. Weiß das Ziel, was du ihm gegeben hast, kann es verhindern, dass der Effekt bei Zielen ausgelöst wird, die es nicht Eliminiert sehen will."],
   ["plus", "**Für jede weitere {3}** wird dieser Effekt ein weiteres Mal für ein Ziel bei der nächsten Person aktiviert, die ihm schadet, oder eine andere Person, die deine Worte der Zuversicht gehört hat, erhält diesen Effekt ebenfalls."],
   ["nein", "**Bei Fehlschlag** erschaffst du ein Gun-Hollow, das davon besessen ist, so viele Ziele wie möglich zu töten. Tötet es dich erfolgreich, stiehlt es deine Resonanz, stabilisiert sich und entkommt als vollwertige Anomalie mit einem neuen Fokus, der sich aus den Umständen ergibt (oft „das Erlebnis des Todes“)."]
  ]}
]};

TA_PWT.P4 = {t:"Perfekter Konter", s:250, b:[
 {t:"faehig", h:"Perfekter Konter", x:"Wenn dich jemand oder etwas mit etwas anvisiert, das dir Schaden zufügen soll, deine Gefühle verletzen will oder etwas tut, das du beenden willst, weißt du genau, was du sagen musst. Sag es und würfle **Professionalität**.",
  erg:[
   ["ok", "**Bei Erfolg** sind deine Worte überzeugend genug, dass das Ziel an sich selbst zweifelt. Wähle eine Wirkung aus den folgenden:\n– **Blamieren:** Es stolpert, verliert das Gleichgewicht und/oder lässt fallen, was es in der Hand hält.\n– **Zur Rede stellen:** Es hält inne und denkt darüber nach, was es an diesen Punkt gebracht hat, und ignoriert vorübergehend seine Umgebung.\n– **Provozieren:** Du schürst seine Wut; was immer es gerade getan hat, es legt noch einmal nach und tut es plump und wahllos.\n– **Flirten:** Du drehst den Spieß um, und seine Verachtung wandelt sich langsam in Bewunderung."],
   ["plus", "**Bei Triszendenz** weißt du genau, wie du es hinhalten kannst. Die nächsten {3} Sätze, die du zu ihm sagst, können einen starken Unterton haben, dem es zu folgen geneigt ist. Du kannst neue Ziele für seinen Zorn wählen, zusätzliche der obigen Wirkungen aktivieren oder es dazu bringen, sich mit etwas ganz anderem zu beschäftigen."],
   ["nein", "**Bei Fehlschlag** hat es erfolgreich gelernt, dich auszublenden. Es ist deinen Whisper-Kräften nie wieder zugänglich."]
  ],
  f:"Mehr Sorgen mache ich mir, …", a:[["Etwas Falsches zu sagen.", "R11"], ["Etwas Wichtiges zu verpassen.", "C5"]]}
]};

TA_PWT.P5 = {t:"Dauerhafte Versetzung", s:251, b:[
 {t:"faehig", h:"Dauerhafte Versetzung", x:"Nachdem du Dein bestes Ich eingesetzt hast, kannst du die alternative Version von dir einladen, auf unbestimmte Zeit in dieser Realität zu bleiben. Mache ihr ein Angebot und würfle **Beharrlichkeit**.",
  erg:[
   ["ok", "**Bei Erfolg** nimmt diese alternative Version von dir das Angebot an und bleibt als neue Beziehung mit 3 Verbindung und einem Verbindungsbonus, der zu der von dir gegebenen Beschreibung passt. Übergib sie einem anderen Spieler zum Spielen. Addiere zu Beginn jedes Einsatzes 1 Loses Ende zur Gesamtzahl, solange sie hier bleibt. Sie kann diese Realität jederzeit verlassen."],
   ["plus", "**Bei jeder dritten {3}** darfst du deine Start-Verbindung um 1 erhöhen (bis maximal 9)."],
   ["nein", "**Bei Fehlschlag** bleibt sie. Du kehrst dorthin zurück, woher sie kam. Dein Spieler spielt nun die neue Version von dir. Je nachdem, wie ähnlich sie dir ist, könntest du: deine Work-Life-Balance-Entscheidungen anpassen; Anomalie-Fähigkeiten gegen jene austauschen, die du bei anderem Verhalten erhalten hättest; Beziehungen entsprechend nach oben und unten verschieben, je nachdem, wie gut diese Version mit den Menschen zurechtkommt; oder alle anderen Einzelheiten anpassen, die du für nötig hältst."]
  ],
  f:"Was hätte ich lieber?", a:[["Eine große Gemeinschaft Gleichgesinnter.", "O5"], ["Eine kleine Gruppe Freunde, die einander wirklich versteht.", "F2"]]}
]};

TA_PWT.P6 = {t:"Persönlicher Freiraum", s:251, b:[
 {t:"faehig", h:"Persönlicher Freiraum", x:"Atme tief ein und halte die Luft an. Atmest du normalerweise nicht, muss stattdessen eine andere bereitwillige Figur, die atmet, für dich die Luft anhalten. Würfle **Professionalität**.",
  erg:[
   ["ok", "**Bei Erfolg** hast du für die Dauer dieses Atemzugs volle Kontrolle über den Zug der Schwerkraft auf deinen eigenen Körper. Du kannst in jede Richtung fallen, schweben und mit perfekter Präzision beschleunigen. Dieser Effekt endet, wenn du den Atem ausstößt oder er dir aus der Lunge geschlagen wird – ob er allmählich oder plötzlich endet, hängt davon ab, wie schnell der Atem entweicht."],
   ["plus", "**Bei jeder dritten {3}** darfst du einen Satz sagen oder einen Atemzug nehmen, ohne diesen Effekt zu beenden."],
   ["nein", "**Bei Fehlschlag** ändert deine Schwerkraft bei jedem Atemzug, den du in den nächsten zehn Minuten nimmst, die Richtung. Dieser Effekt ist äußerst ungewöhnlich anzusehen und erzeugt oft Lose Enden oder verursacht Schaden, bei dir oder anderen."]
  ],
  f:"Am häufigsten baue ich auf …", a:[["Andere.", "I7"], ["Mich selbst.", "I9"]]}
]};

TA_PWT.P7 = {t:"Persönliches Versteck", s:251, b:[
 {t:"sp", x:[
  ["Das könntest du noch mal brauchen! Du erhältst ein **Persönliches Versteck**, in dem du Gegenstände aufbewahren kannst, die deine Anomalie erschaffen hat: Immer wenn eine deiner Anomalie-Fähigkeiten etwas erzeugt, darfst du von dem, was du gemacht hast, ein einzelnes Exemplar in deinem Versteck behalten. Außerdem kannst du darin beliebig viele gewöhnliche, nicht lebendige Gegenstände sicher verstecken.",
   "Nur du darfst dein Versteck benutzen. Wird es dir weggenommen, verliert es seine übernatürlichen Eigenschaften, und du darfst ein neues Versteck erzeugen, mit Zugriff auf alles, was im ursprünglichen gelagert war. Wähle ein Aussehen für dein Versteck oder erfinde ein eigenes:",
   {t:"html", x:pwoKn(["Trolley-Rucksack", "Kuriertasche", "Plüschtiger", "Frischhaltedose", "To-do-Liste", "Spraydose"])}],
  [{t:"faehig", h:"Persönliches Versteck", x:"Du kannst jederzeit etwas aus diesem Raum hervorholen, indem du den Gegenstand benennst und **Aufmerksamkeit** würfelst.",
    erg:[
     ["ok", "**Bei Erfolg** wird der Gegenstand herausgeholt."],
     ["plus", "**Für jede weitere {3}** kannst du einen weiteren Gegenstand herausholen, bevor du erneut würfelst."],
     ["nein", "**Bei Fehlschlag** gib dem GM deine Liste der Gegenstände. Er entscheidet, was den Raum verlässt – es kann nie wieder hineingelegt werden."]
    ]}]
 ]}
]};

TA_PWT.P8 = {t:"Rattenfänger", s:252, b:[
 {t:"faehig", h:"Rattenfänger", x:"Lade eine Figur oder einen Gegenstand aus einem Kunstwerk oder einem Werk der Fiktion, mit dem du dich beschäftigst, nach draußen ein. Würfle **Präsenz**.",
  erg:[
   ["ok", "**Bei Erfolg** tritt das Ziel mit dir in die wirkliche Welt hinaus. Es versteht, was du für es getan hast, und nimmt seinen fiktiven Status meist gelassen. Es handelt gemäß seinen Fähigkeiten und seiner Moral, sieht aber in dir einen Berater und Anführer. Es bleibt eine Stunde lang in der Realität."],
   ["plus", "**Bei jeder dritten {3}** darfst du ein weiteres Ziel aus demselben Kunstwerk oder Werk der Fiktion herausholen oder das Ziel eine weitere Stunde draußen halten."],
   ["plus", "**Bei Triszendenz** muss das Ziel nie wieder zurück."],
   ["nein", "**Bei Fehlschlag** wird irgendwo eine andere Ausgabe dieses Kunstwerks zu einem dauerhaften Portal in seine Welt und aus ihr heraus. Du weißt nicht, welche Ausgabe. Bei Einzelwerken kann es sich um eine Replik handeln. Wenn du oder jemand anderes es nicht zerstört, verursacht es ein Ineinanderfließen beider Welten."]
  ],
  f:"Ich finde, die besten Figuren …", a:[["Gibt es in der wirklichen Welt nicht.", "W1"], ["Wirken wie die Menschen, die ich jeden Tag sehe.", "L1"]]}
]};

TA_PWT.P9 = {t:"Rückwärts abspielen", s:252, b:[
 {t:"faehig", h:"Rückwärts abspielen", x:"Halte ein physisches Exemplar eines beliebigen massenproduzierten Mediums in der Hand und flüstere ihm eine Botschaft zu. Würfle **Doppelzüngigkeit**.",
  erg:[
   ["ok", "**Bei Erfolg** kodierst du die Botschaft in das Medium. Von nun an erlebt eine wachsende Gemeinschaft von Menschen, die dieses Medium erfahren, auch deine Botschaft. Handelt es sich um einen Aufruf zum Handeln oder eine Reihe von Anweisungen, folgt ihnen eine beträchtliche Zahl von Menschen. Jeder Zuschauer, Leser oder Hörer gilt für 24 Stunden nach seiner Erfahrung als unter dem Effekt von Wanze stehend. *(Das zählt nicht auf die übliche Höchstzahl an Wanzen.)*"],
   ["plus", "**Bei Triszendenz** ist diese gemeinsame Erfahrung stark genug, um sofort eine Anomalie zu erschaffen, deren Domäne sich nach dem ursprünglichen Medium und deren Fokus sich nach deiner Botschaft richtet. Sie sieht in dir ihren Anführer und Schöpfer."],
   ["nein", "**Bei Fehlschlag** fügst du versehentlich eine ungeschickte Botschaft ein, die sich leicht zu dir zurückverfolgen lässt. Füge eine Anzahl Lose Enden hinzu, die der Beliebtheit des gewählten Mediums entspricht."]
  ]}
]};

TA_PWT.P10 = {t:"Taschensterne", s:252, b:[
 {t:"faehig", h:"Taschensterne", x:"Jeder ist ein Star; du bist eine wandelnde Galaxie. Du darfst jederzeit eine gewöhnliche Person oder einen Gegenstand beliebiger Größe berühren, um sie zu einer perfekt runden Kugel zusammenfallen zu lassen, die in deine Handfläche passt.\nWährend dieses Vorgangs und solange es in dieser Form ist, fühlt und erlebt das Ziel nichts. Wirfst du die Kugel in eine beliebige Richtung, nimmt es wieder seine ursprüngliche Form an. Setzt du diese Fähigkeit ein, während sechs Ziele unter ihrem Effekt stehen, nimmt das Ziel, das am längsten unter diesem Effekt steht, sofort wieder seine ursprüngliche Form an.\nBei einer Kleinen Anomalie kannst du versuchen, diese Fähigkeit mit einem Wurf auf **Präsenz** einzusetzen.",
  erg:[
   ["ok", "**Bei Erfolg** lässt du das Ziel wie oben beschrieben zu einer Kugel zusammenfallen."],
   ["plus", "**Bei Triszendenz** geht das Ziel sofort eine Bindung mit dir ein und flieht nicht, wenn es freigelassen wird. Füge es als Beziehung mit 1 Verbindung hinzu. Sein Verbindungsbonus ist die Möglichkeit, es einmal während eines Einsatzes mit den Fähigkeiten seiner Art zu Hilfe zu rufen. *(Störende Anomalien erzeugen bei drei Würfen, die du vor ihrem Abgang machst, je eine {3}.)*"],
   ["nein", "**Bei Fehlschlag** fällst du wie oben beschrieben zu einer Kugel zusammen. Du kannst nicht zurückgeholt werden, bis das Ziel tot oder zerstört ist."]
  ]},
 {t:"html", x:'<i class="pwp-fuss"></i>'},
 {t:"notiz", pos:"fuss", x:"ok, ich geb's zu: ich habe mir viele dieser anomalie-fähigkeiten selbst ausgedacht. die agency weiß größtenteils nichts von ihnen, und alles, was ich hier unten tun kann, außer zu spüren, wie mir stück für stück das leben ausgesaugt wird, ist, leuten dabei zuzusehen, wie sie medien ansehen."}
]};

TA_PWT.P11 = {t:"Genau dann, wann ich will", s:253, b:[
 {t:"faehig", h:"Genau dann, wann ich will", x:"Immer wenn du und deine Verbündeten eine größere Entfernung zu einem neuen Ort zurücklegt, darfst du wählen, dass ihr alle morgen oder gestern an diesem Ort ankommt. Die Uhrzeit (zum Beispiel 12:15 Uhr) muss dieselbe sein, zu der ihr normalerweise angekommen wärt. Diese Zeit wird deine neue Gegenwart, bis du diese Fähigkeit erneut einsetzt.\nMöchtest du ein gewöhnliches Ziel mitnehmen, würfle **Initiative**.",
  erg:[
   ["ok", "**Bei Erfolg** darfst du eine Person mitnehmen."],
   ["plus", "**Für jede weitere {3}** kannst du eine weitere Person mitnehmen."],
   ["plus", "**Bei Triszendenz** ist die Nutzung dieser Fähigkeit nicht mehr durch die Uhr begrenzt. Du kannst zu jeder beliebigen Zeit an deinem Ziel ankommen, in Vergangenheit oder Zukunft. Du kannst den Effekt beenden und jederzeit in die Gegenwart zurückkehren."],
   ["nein", "**Bei Fehlschlag** kommt jeder, den du mitnehmen wolltest, zu einer anderen Zeit an als die anderen. Der GM beschreibt, wie weit auseinander."]
  ]},
 "Füge außerdem dem Text von Als es geschrieben wurde Folgendes hinzu:",
 {t:"faehig", h:"Als es geschrieben wurde", x:"",
  erg:[["plus", "**Bei jeder dritten {3}** dürft du und deine Verbündeten jemanden mit zurückbringen, wenn ihr zurückkehrt."]]}
]};

TA_PWT.P12 = {t:"Privater Kanal", s:253, b:[
 {t:"sp", x:[
  [{t:"faehig", h:"Privater Kanal", x:"Öffne einen Briefkasten, drehe am Regler eines Funkgeräts oder wähle eine Telefonnummer und würfle **Initiative**.",
    erg:[
     ["ok", "**Bei Erfolg** verbindest du dich mit jemandem, der in einer Sprache spricht, die du verstehst, und zwei weitere Eigenschaften aus der folgenden Liste hat. Du wählst eine, der GM wählt eine andere. Wer es auch ist und welche Optionen auch gewählt werden: Die Person führt mit dir ein Gespräch, solange du ansprechend bleibst."],
     ["plus", "**Für jede weitere {3}** darfst du eine zusätzliche Eigenschaft aus der Liste wählen oder eine aus der Liste entfernen, bevor der GM wählt."],
     ["plus", "**Bei sechs oder mehr {3}en** ist dein Signal stark, und du kannst sie jederzeit kontaktieren. Füge sie als Beziehung mit 1 Verbindung hinzu und übergib sie einem anderen Spieler, der sie fortan darstellt. Du darfst nach Ende deines Gesprächs QS ausgeben, um diesen Effekt zu erhalten."],
     ["nein", "**Bei Fehlschlag** sendest du dich selbst über den Äther, schickst dich per Post oder übermittelst dich anderweitig an ein unbekanntes Ziel zu einer unbekannten Zeit. Viel Glück!"]
    ]}],
  [{t:"html", x:pwoKn(["Stammt von dem Ort, an dem du gerade stehst, aber {3}0 Jahre in der Vergangenheit", "Erlebt genau das Problem bzw. die Probleme, vor denen du gerade stehst", "Freut sich riesig, von dir zu hören", "Ist Fachexperte auf einem Gebiet deiner Wahl", "Weiß etwas, das für deinen aktuellen Einsatz relevant ist", "Kann dir eine neue Fertigkeit beibringen", "Lügt für sein Leben gern", "Kennt dich persönlich", "Ist sehr beschäftigt", "Hilft nur, wenn es etwas dafür bekommt", "Ist sehr laut", "Hält dich für jemand anderen", "Liebt etwas, das du hasst", "Will eine wichtige Nachricht übermitteln", "Ihm kann man jedes Geheimnis anvertrauen", "Spricht eine Sprache, die du nicht sprichst", "Steht in einer Schlange in einem überfüllten Raum", "Kennt all die Leute, die du auch kennst"])}]
 ]},
 {t:"html", x:'<i class="pwp-fuss"></i>'},
 {t:"notiz", pos:"fuss", x:"bei den zeitmesser-fähigkeiten fand ich es lustig, wenn es meist veraltete anspielungen wären. obwohl sie in der zukunft vermutlich alle veraltet sind. hallo, leser aus der zukunft. tut mir leid. und ja, taschensterne ist ein pokémon-witz."}
]};

TA_PWT.P13 = {t:"Aufschieben", s:254, b:[
 {t:"faehig", h:"Aufschieben", x:"Nachdem ein Spieler (du selbst eingeschlossen) gewürfelt hat, aber bevor er entscheidet, ob er QS ausgibt, darfst du dem Wurf drei {3}en hinzufügen oder abziehen. Tust du das, können Spieler keine QS ausgeben, um den Wurf anzupassen. Damit lässt sich keine Triszendenz erzeugen, selbst wenn der endgültige Wurf drei {3}en hat.",
  erg:[
   ["plus", "**Hast du die Anzahl der {3}en erhöht,** erhält der GM einen einmaligen Chaos-Effekt. Er kann nicht für diesen Wurf, wohl aber für jeden künftigen Wurf eingesetzt werden, bevor QS ausgegeben werden:"],
   ["plus", "**Hast du die Anzahl der {3}en verringert,** kannst du diese Fähigkeit nutzen, um einem späteren Wurf in diesem Einsatz bis zu so viele {3}en hinzuzufügen, ohne dass der GM Frist erhält."],
   ["plus", "**Bei Anwendung auf einen Triszendenz-Wurf** wird der Wurf zum Fehlschlag. In diesem Einsatz darfst du die Ergebnisse von bis zu drei künftigen Würfen, die der Art des ursprünglichen Wurfs entsprechen (Die Agency fragen oder Anomalie-Fähigkeit), in Triszendenz ändern."]
  ]},
 {t:"kasten", cls:"pwp-frist", h:"Frist", b:["Verwandle einen Wurf, unabhängig von der Anzahl der gewürfelten {3}en, in einen Fehlschlag, der nicht angepasst werden kann. Dieser Fehlschlag fügt kein Chaos hinzu."]},
 {t:"klein", x:"*Wenn du die auf der Leiste genannten Kriterien erfüllst, kannst du diese Leiste einmal erhöhen, wenn du für diese Fähigkeit Bekannt werden einsetzt. Du kannst alle {3} Leisten füllen und alle {3} Fähigkeiten erhalten.*"},
 {t:"html", x:pwoLeiste("P13", [["Ich habe Aufschieben genutzt, um {3}en zu erhöhen.", "B4"], ["Ich habe Aufschieben genutzt, um {3}en zu verringern.", "L5"], ["Ich nutze Aufschieben bei einer Triszendenz.", "C8"]])}
]};

TA_PWT.P14 = {t:"Gemeinfrei", s:254, b:[
 {t:"sp", x:[
  ["Wenn du Dramaturg einsetzt, kann deine Maske den Schläfer mit der Persönlichkeit und dem Wissen jeder mythischen oder fiktiven Figur erfüllen, darunter die folgende Liste rechtlich nennbarer Figuren.",
   "Sie erhalten keine übernatürlichen Fähigkeiten dieser Figuren, es sei denn, der Schläfer besaß sie bereits. Wie bei Dramaturg sehen sie dich wohlwollend und sind geneigt, dir zu helfen. Ihre Erinnerungen sind jedoch genauso beständig wie deine: Sie erinnern sich, ob sie gut oder schlecht behandelt wurden, und reagieren bei jeder Beschwörung entsprechend auf dich.",
   "Von nun an gilt: Scheiterst du bei Dramaturg, steht die zuletzt gerufene fiktive Figur ebenfalls nicht mehr zur Verfügung, bis du etwas tust, das sie tun würde, und sie so zurückgewinnst.",
   "Rufst du bei Triszendenz eine fiktive Figur, erhält das Ziel von Dramaturg auch deren übernatürliche oder außergewöhnliche Fähigkeiten."],
  [{t:"html", x:pwoKn(["Sherlock Holmes", "Herkules", "Morgan le Fay", "Steamboat Willie", "Dracula", "Victor Frankenstein", "Dorothy Gale", "Winnie Puuh", "Alice im Wunderland", "Don Quijote", "Betty Boop", "Robin Hood", "Jay Gatsby"])}]
 ]}
]};
