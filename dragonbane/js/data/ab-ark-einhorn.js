/* Das Witzlose Einhorn (Arkand S. 63–69) – deutsche Fassung. §…§ = Fertigkeit/Zauber in Kapitälchen. Modell: plan/dragonbane/ABENTEUER_PLAN.md §2 */
window.DB_AB = window.DB_AB || {};
DB_AB["ark-einhorn"] = {
 id:"ark-einhorn", mul:1, t:"Das Witzlose Einhorn", band:"ark-dung", buch:"db_ark", p:63, img:"abenteuer/ark-einhorn-titel", kurz:"9 Orte",
 lage:[
  "Das Witzlose Einhorn – oder einfach das Einhorn, wie die Einheimischen es meist nennen – ist die beliebteste Taverne im Dung, nicht zuletzt dank ihrer Wirtin, der Halblingsfrau Eliza, deren verführerischer Gesang und Tanz die Gäste in ihren Bann schlagen. Ihr Mann Mesk trägt mit Fakirkunststücken zur Unterhaltung bei, die selbst die erfahrensten Abenteurer in Staunen versetzen.",
  {h:"Die Lage", p:63},
  "Eine bunt gemischte Menge von nah und fern versammelt sich im Witzlosen Einhorn, um sich in Elizas Gesang, Mesks wagemutigen Kunststücken und auf dem Grund von Bier- und Weinkrügen zu verlieren. Fast immer ist im Gastraum (Ort 2) irgendein Spektakel im Gange. Wenn das Personal keine Show bietet, versuchen sich die Gäste in wilden Überbietungsspielen gegenseitig zu übertrumpfen.",
  "Doch Eliza und Mesk sind mehr als nur Unterhalter und Gastwirte. Sie sind auch die Anführer der Räuberratten, der berüchtigtsten Bande von Taschendieben und Einbrechern der Stadt. Die Räuberratten bestehen aus Halblingen, die nach Arkand kamen und im Witzlosen Einhorn ein Zuhause fanden, wo sie von ihren Wirten ausgebildet wurden. Eliza brachte ihnen alles bei, was sie über Singen, Tanzen und das Auf-sich-Ziehen der Aufmerksamkeit wissen. Mesk lehrte sie Körperbeherrschung, Ausdauer und Schmerzunempfindlichkeit.",
  "Die Räuberratten folgen regelmäßig betrunkenen Gästen anderer Etablissements im Dung und erleichtern sie auf dem Heimweg lautlos um ihre wertvollsten Besitztümer. In letzter Zeit haben sie die Gesprungene Perle ins Visier genommen. Der Clan Odrâk hat zahlreiche Beschwerden von Gästen erhalten, die mit deutlich leichteren Geldbeuteln aufgewacht sind als erwartet, und die Orks sind darauf aus, dem ein Ende zu setzen.",
  "Die Spielercharaktere könnten aus den verschiedensten Gründen hier landen. Ob sie Gerüchten über die Unterwelt der Stadt nachgehen oder einfach nach erstklassiger Unterhaltung suchen – das Witzlose Einhorn ist ein hervorragender Ausgangspunkt! Vielleicht machen sie es zu ihrem Stammlokal? Vielleicht verfällt einer von ihnen Elizas Reizen?",
  {stein:{h:"Abenteuer-Ideen", b:[
   {ul:[
    "**Den Räuberratten auf der Spur:** Erleben die Spielercharaktere eine der Zufallsbegegnungen *Taschendiebe*, *Einbrecher* oder *Buchdieb*, können sie den flüchtenden Räuberratten womöglich bis zu einem der geheimen Eingänge des Witzlosen Einhorns folgen: der Luke im Rattenloch (Ort 5), der Falltür in der Decke des Schlafsaals (Ort 8) oder den Abortlöchern (Ort 7). Was dann geschieht, liegt ganz bei den Charakteren.",
    "**Elizas Beschützer:** Die Spielercharaktere sind für einen Abend ins Witzlose Einhorn gekommen (vielleicht über die Zufallsbegegnung *Feiernde Jugendliche* oder weil sie das Gerücht *Elizas Gesang* gehört haben), doch die Fröhlichkeit wird jäh unterbrochen, als einige Abenteurer (so viele wie Spielercharaktere) versuchen, Eliza zu entführen! Sie wurden von Adriana vom Theater der Unausweichlichen Schicksale geschickt. Greifen die Charaktere ein, um Eliza zu schützen, erwerben sie sich die Dankbarkeit von ihr und Mesk, die nur zu gern bereit sind, den Gefallen zu erwidern.",
    "**Spinnenchaos:** Eine Gruppe A'thana-Kultisten hat sich in das Witzlose Einhorn geschlichen und lässt eine große Zahl Spinnen in den Gastraum (Ort 2), den Hof (Ort 6) und den Abort (Ort 7) los. Die Charaktere sind den Kultisten womöglich nach der Zufallsbegegnung *Kanalchaos!* hierher gefolgt, oder sie sind einfach zur richtigen Zeit am richtigen Ort."
   ]}
  ]}}
 ],
 bereiche:[
  {id:"erdgeschoss", t:"Erdgeschoss", karte:{img:"abenteuer/ark-einhorn-erdgeschoss", p:67}, orte:[
   {n:"1", t:"Fassade", p:64, pin:[87.8,29.8], wesen:["ark-einhorn-ogerbrueder"],
    vl:"Gelächter, Gesang und lärmender Krach dringen aus dem geteerten Gebäude auf die Straße. War das gerade Glas, das zerbrach? Rechts neben der Eingangstür steht die Statue eines sich aufbäumenden Einhorns, dessen rechter Vorderhuf rot bemalt ist und das euch dümmlich angrinst.",
    st:[
     {k:"Die Statue", x:"Die Einhornstatue ist ein feines Stück Handwerkskunst, wenn auch von der Zeit gezeichnet, ihr Holz an mehreren Stellen gerissen. Sie trägt ein verzerrtes Grinsen."},
     {k:"Die Türsteher", x:"Einer der beiden Ogerbrüder Bogrod und Dogrob steht stets vor der Tür bereit, um die Gäste mit einem breiten, spärlich bezahnten Lächeln auf den dicken Lippen zu begrüßen."},
     {k:"Westen", x:"Tür zum Gastraum (Ort 2). Das Einhorn, wie die Einheimischen es nennen, schließt nie, und die Tür ist nie verriegelt. Man muss sie nur aufdrücken und eintreten!"}
    ]},
   {n:"2", t:"Gastraum", p:64, pin:[71.3,34.6], wesen:["ark-einhorn-eliza","ark-einhorn-kraftproben"],
    vl:"Drei schiefe Stufen führen hinab in einen weiten Raum, vollgestellt mit Tischen, niedrig von der Decke und schwer von einer feuchten, drückenden Hitze, die man fast mit dem Dolch schneiden könnte. Die Wände sind mit derben Gemälden von Festmählern bedeckt, die weit großartiger sind als alles, was in diesem Etablissement realistischerweise stattfinden dürfte. Halblinge schlängeln sich zwischen den Tischen hindurch und balancieren Stapel schäumender Humpen, die gefährlich schwanken, aber nie überschwappen.",
    st:[
     {k:"Gäste", x:"Zu jeder Tageszeit ist der Gastraum fast voll. Morgens, zwischen Sonnenaufgang und Mittag, ist es etwas ruhiger, am lebhaftesten ist es in den Stunden nach Mitternacht. Zu den Stammgästen des Einhorns zählen Tarfet Dougo, Akelius, Lindorion sowie Viviana und Ovilius. Sogar Elrita Blutauge schaut gelegentlich vorbei, um Eliza singen zu hören."},
     {k:"Unterhaltung", x:"Hin und wieder bricht das Gebrüll der Gespräche ab, wenn das Personal oder ein beschwingter Gast in Gesang ausbricht. Der wahre Höhepunkt ist, wenn Eliza selbst auf die Tische steigt und zu singen beginnt, was mehrmals jeden Abend geschieht. Wenn sie auftritt, verstummt die Menge sofort. Neuankömmlinge, die nicht wissen, wann sie den Mund halten müssen, bekommen ihn schnell von einem oder mehreren ihrer vielen Verehrer gestopft. Wird sie hier zur Rede gestellt, stellen sich doppelt so viele Stammgäste wie Spielercharaktere sofort auf ihre Seite (Werte wie Abenteurer, siehe Tabelle auf Regelbuch S. 105)."},
     {k:"Osten", x:"Tür zur Fassade (Ort 1)."},
     {k:"Westen", x:"Kleine Tür zur Küche (Ort 3)."},
     {k:"Westen", x:"Schiefe Tür zum Hof (Ort 6)."}
    ]},
   {n:"3", t:"Küche", p:68, pin:[31.8,65.5], wesen:["ark-einhorn-mesk"],
    vl:"Es ist heiß und eng. Messer, Schneidebretter, Mörser und Stößel drängeln sich auf schrägen Regalen. Bündel getrockneter Kräuter hängen von der Decke. Verbeulte Töpfe brodeln in einem rußigen Herd. Am anderen Ende quillt ein großes Fass mit schmutzigen Schüsseln über. Die Luft duftet köstlich nach Zwiebelsuppe, und es steht ein Topf voller kochender Schweinsfüße da.",
    st:[
     {k:"Mesk", x:"Mesk ist meist hier zu finden und jongliert mit Messern, Karotten, Zwiebeln und allem, was ihm sonst in die Hände fällt. Besucher werden herzlich begrüßt, um über Essen oder Fakirkunststücke zu plaudern, doch wer Feindseligkeit zeigt, bekommt die Messer zu spüren und wird aufgefordert, in den Gastraum (Ort 2) oder den Hof (Ort 6) zurückzukehren."},
     {k:"Räuberratten", x:"Hier sind stets W3 Räuberratten, die Mesk bei der Küchenarbeit helfen."},
     {k:"Rationen", x:"Die Spezialitäten des Hauses köcheln stets in den Töpfen, und wer will, ist willkommen, zum Essen zu bleiben. Mit einem passenden Behälter können die Charaktere mühelos W4 Rationen zum Mitnehmen abschöpfen. Sie müssen innerhalb eines Tages verzehrt werden, sonst verderben sie."},
     {k:"Osten", x:"Kleine Tür zum Gastraum (Ort 2)."},
     {k:"Osten", x:"Schmale, wacklige Treppe zum Schlafsaal (Ort 8)."},
     {k:"Westen", x:"Schlecht schließende Tür zur Vorratskammer (Ort 4)."},
     {k:"Norden", x:"Tür zum Hof (Ort 6)."}
    ]},
   {n:"4", t:"Vorratskammer", p:68, pin:[19.4,70.2], wesen:[],
    vl:"Fässer mit Salzfisch und Pökelfleisch türmen sich hoch. Säcke mit Mehl, Hafer und Gerste bilden einen schiefen Turm an einer der Wände. Würste, Kapaune und ein halbes Schwein hängen von der Decke. Die Luft ist erfüllt von einem nicht zu bestimmenden Geruch nach Salz, Säure und Fäulnis. Aus einer Ecke ist das unverkennbare Kratzen winziger Krallen auf Sackleinen zu hören.",
    st:[
     {k:"Rationen", x:"Hier gibt es reichlich Essen, und die Charaktere können bis zu W6 Rationen zusammenraffen."},
     {k:"Osten", x:"Schlecht schließende Tür zur Küche (Ort 3)."},
     {k:"Osten", x:"Treppe zum Schlafsaal (Ort 8)."},
     {k:"Westen", r:1, x:"Geheimtür. Das größte Fass mit gesalzenen Heringen ist nur zu einem Viertel gefüllt und fest am Boden verankert. Drückt man auf die Augen der gekreuzten Heringe, die in das Fass geschnitzt sind (erfordert einen gelungenen §Entdecken§-Wurf oder die Beschreibung genau dieser Handlung), öffnet sich eine Luke an dessen Vorderseite, hinter der drei schmale Stufen hinab ins Rattenloch (Ort 5) führen. Der Gang ist sehr eng, und normal große Personen müssen einen gelungenen §Akrobatik§-Wurf schaffen, um sich hindurchzuzwängen. Wer STÄ über 15 hat, passt gar nicht hindurch. Würfelt der Charakter einen Dämon, bleibt er stecken und muss aus dem Fass befreit werden (20 TP, Rüstungswert 6)."}
    ]},
   {n:"5", t:"Rattenloch", p:69, pin:[9.1,70.2], wesen:[],
    vl:"Ein enger, schmaler Raum. Die Wände sind mit einer bunten Sammlung von Kostümen behängt – von farbenfrohen Kleidern über schmutzige Lumpen, buschige falsche Bärte und staubige Perücken bis zu großen Tierfellen. Auf einem kleinen Tisch mit einem Spiegel stehen Töpfchen und Pinsel.",
    st:[
     {k:"Verkleidungen", x:"Die Räuberratten nutzen Verkleidungen, um unerkannt durch die Stadt zu ziehen. Ihre Aufmachungen reichen von einfacher Straßenkleidung bis zu aufwendigen Kostümen, die eine Räuberratte in einen streunenden Hund, eine Riesenkrabbe, einen Goblin oder einen Zwerg verwandeln können. Haben die Spielercharaktere zuvor schon Räuberratten begegnet, erkennen sie einige dieser Verkleidungen vielleicht mit einem gelungenen §Entdecken§-Wurf wieder."},
     {k:"Osten", r:1, x:"Geheimtür zur Vorratskammer (Ort 4)."},
     {k:"Unten", r:1, x:"Eine Falltür im Boden öffnet sich zu einem der unterirdischen Tunnel unter den Kais entlang der Kanäle des Dungs. Die Falltür lässt sich nur von innen öffnen. Außen liegt ein schwarzer Stein. Drückt man ihn, läutet in der Küche (Ort 3) eine Glocke. Daraufhin erscheint eine Räuberratte und klopft einmal. Um eingelassen zu werden, muss man mit dem geheimen Klopfzeichen antworten: dreimal kurz, einmal lang, dreimal kurz."}
    ]},
   {n:"6", t:"Hof", p:69, pin:[25.8,39.2], wesen:["ark-einhorn-kraftproben"],
    vl:"Ein großer Hinterhof, umschlossen von einem hohen Holzzaun und steilen Hauswänden. Aus dem Gebäude sind Musik und Gelächter zu hören. In der östlichen Ecke steht ein zweistöckiger Abort, und im Westen steigen Dämpfe vom Misthaufen auf.",
    st:[
     {k:"Kraftproben", x:"Lassen sich die Charaktere im Hof auf eine Kraftprobe ein, kommen W6 + Anzahl der Spielercharaktere Schaulustige heraus, um zuzusehen und anzufeuern."},
     {k:"Osten", x:"Tür zum Gastraum (Ort 2)."},
     {k:"Süden", x:"Tür zur Küche (Ort 3)."},
     {k:"Westen", x:"Tür zum Abort (Ort 7). Hat ein herzförmiges Loch in der Mitte."}
    ]},
   {n:"7", t:"Abort", p:69, pin:[9.1,20.3], wesen:[],
    vl:"Zwei Ebenen großzügig bemessener Löcher mit stabilen Deckeln. Geschickt platzierte herzförmige Aussparungen bieten jedem, der auf der oberen Ebene sitzt, einen guten Blick auf den Hof. In der Luft liegt ein durchdringender, beißender Geruch.",
    st:[
     {k:"Besucher", x:"Hier sind stets W4−1 Personen, die ihrem Bedürfnis nachgehen. Ein hervorragender Ort für die Spielercharaktere, um auf alte Bekannte, Freunde und Feinde zu treffen."},
     {k:"Unerwarteter Zugang", x:"Für Gelenkige kann der Abort als alternativer Ein- oder Ausgang dienen. Das erfordert einen gelungenen §Akrobatik§-Wurf."},
     {k:"Osten", x:"Tür zum Hof (Ort 6)."},
     {k:"Unten", r:1, x:"Durch die Abortlöcher gelangen die Charaktere in einen der vielen Kanäle des Dungs, der in einer Richtung geradewegs in die Unterwelt führt. Diesen Weg zu durchqueren erfordert einen gelungenen KON-Wurf, um nicht Kränkelnd zu werden."}
    ]}
  ]},
  {id:"obergeschoss", t:"Obergeschoss", karte:{img:"abenteuer/ark-einhorn-obergeschoss", p:67}, orte:[
   {n:"8", t:"Schlafsaal", p:69, pin:[58.0,52.1], wesen:[],
    vl:"Unter den Dachsparren stehen drei Reihen niedriger, dreistöckiger Etagenbetten. Vom anderen Ende des Raums ist lautes Schnarchen zu hören.",
    st:[
     {k:"Die Betten", r:1, x:"Jedes Bett hat kleine eingebaute Fächer (zu finden mit einem gelungenen §Entdecken§-Wurf), in denen die kostbarsten persönlichen Gegenstände der Schläfer liegen."},
     {k:"Räuberratten", x:"Hier sind stets W4 Räuberratten, die sich von einem harten Arbeitstag erholen. Die Spielercharaktere sind einer von ihnen womöglich kürzlich begegnet."},
     {k:"Westen", x:"Verschlossene Tür zu Elizas und Mesks Kammer (Ort 9)."},
     {k:"Nordosten", x:"Treppe hinab zur Küche (Ort 3)."},
     {k:"Oben", r:1, x:"Eine Luke in der Decke bietet den Räuberratten einen weiteren Weg, zu kommen und zu gehen. Sie kann von außen mit §Entdecken§ gefunden und mit §Fingerfertigkeit§ geöffnet werden."}
    ]},
   {n:"9", t:"Elizas und Mesks Kammer", p:69, pin:[21.2,52.1], wesen:["ark-einhorn-eliza","ark-einhorn-mesk"],
    vl:"Ein überraschend gemütlicher Raum mit einem breiten Bett, über das eine flauschige burgunderrote Decke gebreitet ist, die sofort ins Auge fällt. Schwere Vorhänge säumen die Wände, und in einer Ecke steht ein großer Schrank aus dunklem Holz.",
    st:[
     {k:"Das Bett", x:"Das Bett ist von höchster Qualität, und die mit Schwanenfedern gefüllte Decke ist ein wahrer Luxusgegenstand. Hier ein Viertel lang zu schlafen zählt wie eine ganze Lange Rast."},
     {k:"Der Schrank", x:"Im Schrank hängen Elizas aufwendig verzierte Kleider. Wären sie für Menschen gemacht, wären sie ein kleines Vermögen wert, doch leider ist die Nachfrage nach Luxusmode in Halblingsgrößen begrenzt. Finden die Spielercharaktere jemanden, der nach edlen Kinderkleidern sucht, zählen die Kleider als Feine Kleidung (zum halben Wert)."},
     {k:"Das versteckte Fach", r:1, x:"Hinter einer falschen Wandplatte im Schrank (§Entdecken§-Wurf, wenn der Schrank ausdrücklich durchsucht wird) liegt ein eingebauter Safe, in dem Eliza und Mesk ihre Schätze aufbewahren. Er hat zwei Schlösser, und Eliza und Mesk tragen jeweils einen Schlüssel. Die Schlösser zu knacken erfordert zwei gelungene §Fingerfertigkeit§-Würfe. Der Safe enthält vier Schatzkarten, W4 Tageseinnahmen des Einhorns (W10 × 30 Kupfer, W10 × 20 Silber und W10 × 4 Gold pro Tag) und einen Anhänger in Form eines Langschwerts, der Lindorion gehört, dem Hauptmann der Garde des Souveräns. Hochwertige Gegenstände, die den Charakteren zuvor gestohlen wurden, können hier ebenfalls gefunden werden."},
     {k:"Osten", x:"Tür zum Schlafsaal (Ort 8). Stets verschlossen."}
    ]}
  ]}
 ],
 figuren:{
  "ark-einhorn-ogerbrueder":{typ:"nsc", t:"Bogrod & Dogrob", p:65, img:"abenteuer/ark-einhorn-ogerbrueder", tp:28,
   werte:[["Bewegung","10"],["Schadensbonus STÄ","+W6"],["TP","28"],["WP","16"]],
   zl:[["Rüstung","–"],["Fertigkeiten","Raufen 16"],["Waffen","Große Holzkeule (Fertigkeitswert 15, Schaden 2W8) (Dogrob), schwerer Kriegshammer (Fertigkeitswert 14, Schaden 2W10) (Bogrod)"],["Talente","Schlachtruf, Beschützer (nur zum Schutz Elizas), Eiserne Faust, Eiserner Griff, Wuchtiger Schlag, Wurfarm, Veteran"]],
   text:["Die Ogerbrüder Bogrod und Dogrob haben sich beide Hals über Kopf in Eliza verliebt, kaum dass sie ihre dreckigen Füße auf den Boden des Einhorns gesetzt und ihre süße Stimme gehört hatten. Seither buhlen sie um ihre Gunst, indem sie ihre Dienste als Türsteher anbieten. Ihr Eifer, widerspenstigen Gästen eine Lektion zu erteilen, kennt keine Grenzen.","Das Volk der Oger ist im Dragonbane-Bestiarium ausführlich beschrieben, doch Bogrod und Dogrob können auch ohne dieses Buch verwendet werden."]},
  "ark-einhorn-eliza":{typ:"nsc", t:"Eliza Flinkfuß", p:66, img:"abenteuer/ark-einhorn-eliza", tp:11,
   werte:[["Bewegung","10"],["Schadensbonus GEW","+W6"],["TP","11"],["WP","14"]],
   zl:[["Rüstung","–"],["Fertigkeiten","Akrobatik 14, Täuschen 14, Ausweichen 15, Darbietung 18, Überzeugen 14, Fingerfertigkeit 15, Entdecken 14"],["Waffen","Schleuder (Fertigkeitswert 12, Schaden W8), Dolch (Fertigkeitswert 13, Schaden W8)"],["Talente","Assassine, Hinterhältiger Stich, Schlachtruf, Verkleidung, Einsicht, Musikant"],["Ausrüstung","Eliza trägt stets extravagante Kleidung (zählt als Feine Kleidung) und ein Diadem, das ihr einen Vorteil auf alle CHA-basierten Fertigkeitswürfe verleiht."]],
   text:["Eliza ist in der ganzen Stadt berühmt für ihren eleganten Tanz und ihre tiefe, satte Singstimme, die bei jemandem so Kleinem unmöglich scheint. Das hat ihr den Spitznamen Dung-Posaune eingebracht. Sie ist außerdem die Anführerin der Räuberratten, der berüchtigtsten Bande von Taschendieben und Einbrechern der Stadt, die sie als ihre Schützlinge betrachtet. Eliza hat es sich zur Ehrensache gemacht, nie außerhalb des Einhorns aufzutreten. Das hat sie in Konflikt mit Adriana vom Theater der Unausweichlichen Schicksale gebracht, die nicht akzeptieren kann, dass die schönste Stimme Arkands sich weigert, ihre Bühne zu zieren."]},
  "ark-einhorn-constadine":{typ:"nsc", t:"Constadine Crookhorn", p:67, img:"abenteuer/ark-einhorn-constadine", tp:12,
   werte:[["Bewegung","10"],["Schadensbonus GEW","+W4"],["TP","12"],["WP","13"]],
   zl:[["Rüstung","–"],["Fertigkeiten","Akrobatik 13, Tierkunde 10, Täuschen 12, Wildniskunde 12, Ausweichen 14, Jagen & Fischen 13, Darbietung 14"],["Waffen","Schleuder (Fertigkeitswert 14, Schaden W8), kurzer Speer (Fertigkeitswert 12, Schaden W10)"],["Ausrüstung","Flöte"]],
   text:["Der Satyr Constadine Crookhorn kam vor einigen Monaten nach Arkand, auf der Suche nach seinem Freund, dem Minotaurus Urfur, der von den Monsterjägern Budorin, Indoril und Agritho entführt wurde. Er hat unermüdlich gesucht, aber weder die Jäger noch Urfur gefunden und beginnt, die Hoffnung zu verlieren. Wie jeder gute Satyr liebt er es zu singen und zu tanzen, und er hat begonnen, im Witzlosen Einhorn zu verkehren, um seine Stimmung aufzuhellen. Constadine erzählt seine Geschichte immer gern und hat sich eine kleine Gruppe treuer Zuhörer erworben, darunter die Ente Valineria.","Satyrn sind im Dragonbane-Bestiarium ausführlich beschrieben. Es ist völlig in Ordnung, wenn du es nicht besitzt – es liefert lediglich zusätzliche Einzelheiten zum Volk."]},
  "ark-einhorn-mortilara":{typ:"nsc", t:"Mortilara & Feroxia Rostrum", p:68, tp:11,
   werte:[["Bewegung","10"],["Schadensbonus GEW","+W6"],["TP","11"],["WP","15"]],
   zl:[["Rüstung","Leder (1)"],["Fertigkeiten","Akrobatik 17, Täuschen 16, Ausweichen 16, Überzeugen 10, Fingerfertigkeit 14, Entdecken 16"],["Waffen","Dolche mit Wellenklinge (Fertigkeitswert 16, Schaden W8), Handarmbrust (Fertigkeitswert 15, Schaden 2W6)"],["Talente","Assassine, Katzengleich, Schlangenmensch, Verkleidung, Beidhändig, Blitzschnell"]],
   text:["Mortilara und Feroxia Rostrum sind zwei der drei Assassinen des Entenordens namens Ank-Tar, die auf Bitten von Plathyra Breitschnabel nach Arkand gekommen sind, um Elrita Blutauge zu ermorden. Ihr erster Versuch, in die Zitadelle der Gebrochenen Flügel einzudringen, schlug fehl, und ihre Gefährtin Krika wurde gefangen genommen. Sie haben ihre Tarnung als einfache Fischersleute aufrechterhalten und verbringen die meiste Zeit rund um den Hafen."]},
  "ark-einhorn-mesk":{typ:"nsc", t:"Mesk", p:68, tp:11,
   werte:[["Bewegung","12"],["Schadensbonus GEW","+W6"],["TP","11"]],
   zl:[["Rüstung","–"],["Fertigkeiten","Akrobatik 14, Täuschen 14, Ausweichen 15, Darbietung 18, Überzeugen 14, Fingerfertigkeit 15, Entdecken 14"],["Waffen","Feuerspeien (Fertigkeitswert 14, Schaden wie der Zauber §Feuerball§ auf Kraftstufe 2), Schleuder (Fertigkeitswert 14, Schaden W8), Dolch (Fertigkeitswert 16, Schaden W8)"],["Talente","Assassine, Hinterhältiger Stich, Katzengleich, Verkleidung, Flinke Füße, Einsicht"],["Ausrüstung","Mesk trägt stets eine Flasche hochentzündlicher Flüssigkeit, eine Fackel sowie Feuerstein und Zunder bei sich."]],
   text:["Mesk ist nicht nur ein geschickter Koch, bekannt für seine herzhaften, wohltuenden Gerichte, sondern auch ein wagemutiger Fakir und Possenreißer. Er wechselt zwischen Gästen, die vor Genuss seufzen, und Gästen, die bei seinen haarsträubenden und gefährlichen Kunststücken den Atem anhalten. Mesk ist Eliza von Herzen zugetan, und wenn jemand zu großes Interesse an ihr zeigt, zögert er nicht, dessen Essen etwas stärker zu würzen (die Person, die es isst, muss einen KON-Wurf mit Nachteil bestehen, sonst braucht sie dringend den Abort) oder „versehentlich“ Feuer in seine Richtung zu speien."]}
 },
 kaesten:{
  "ark-einhorn-kraftproben":{k:"Kraftproben", p:66, b:[
   "Das Witzlose Einhorn ist bekannt als Ort, um die eigene Kraft und den eigenen Mut gegen andere Gäste zu erproben. Die Spielercharaktere können an körperlichen Wettkämpfen wie Armdrücken, Stirnstoßen und Drachenhand teilnehmen. Sobald ein Streit aufkommt, beginnt die Menge oft, den Namen eines der beliebten Wettkämpfe zu skandieren, und bricht in Jubel aus, wann immer eine Herausforderung angenommen wird. Diese Wettkämpfe finden entweder im Gastraum (Ort 2) oder draußen im Hof (Ort 6) statt. Versuche, einen Wettkampf zu unterbrechen, sind nicht gern gesehen.",
   "**Regeln:** Kraftproben sind schmerzhaft, aber nicht tödlich. Sinkt ein Teilnehmer infolge eines Wettkampfs auf 0 TP, wird er für ein Viertel bewusstlos und wacht dann mit W6 TP wieder auf. Es ist auch üblich, dass eine Räuberratte mit einem scheußlich schmeckenden Trank erscheint, der sofort W6 TP wiederherstellt. Das Ziehen von Waffen während eines Wettkampfs ist verpönt und bringt die Menge schnell gegen den Übeltäter auf.",
   {ul:[
    "**Armdrücken:** Die Teilnehmer machen gegeneinander gerichtete STÄ-Würfe. Wer zuerst dreimal Erfolg hat, gewinnt den Wettkampf. Ein Drache bedeutet sofortigen Sieg und fügt dem Gegner W6 Schaden zu.",
    "**Stirnstoßen:** Die Teilnehmer treten zu einem Kopfstoßwettkampf gegeneinander an. Beide würfeln gleichzeitig auf §Raufen§. Ein gelungener Wurf fügt dem Gegner W6 (+ Schadensbonus für STÄ) wuchtigen Schaden zu (nur natürliche Rüstung zählt). Wer zuerst 0 TP erreicht, verliert.",
    "**Drachenhand:** Die Teilnehmer müssen ihre Zähigkeit beweisen, indem sie ihre Hände so lange wie möglich über offene Flammen halten. Jede Runde erleiden sie W4 Schaden und müssen einen WIL-Wurf bestehen, um die Hand an Ort und Stelle zu lassen. NSC haben WIL 10, sofern nichts anderes angegeben ist. Wer zuerst zurückzieht oder 0 TP erreicht, verliert.",
    "**Dolchtanz:** Die Teilnehmer sitzen einander gegenüber und stoßen im Takt des Stampfens der Menge, immer schneller, rhythmisch einen Dolch zwischen ihren eigenen Fingern hindurch. Beide machen einen §Messer§-Wurf. Bei einem Fehlschlag trifft der Dolch die Hand – der Teilnehmer erleidet Schaden und verliert den Wettkampf.",
    "**Der Hof:** Die Teilnehmer gehen in einer guten alten Schlägerei (waffenloser Kampf) aufeinander los. Keine nicht natürliche Rüstung ist erlaubt. Wer zuerst 0 TP erreicht, verliert."
   ]}
  ]}
 },
 tabellen:[
  {id:"ark-einhorn-speisekarte", h:"Speisekarte", p:65, strip:"Speisekarte", cols:["Preis","Gegenstand und Wirkung"], rows:[
   ["1 Kupfer · Häufig","**Humpen dünner Met:** Kann unbegrenzt getrunken werden, doch nach drei Humpen ist ein KON-Wurf nötig, um einen dringenden Gang zum Abort zu vermeiden."],
   ["2 Kupfer · Häufig","**Becher saurer, verwässerter Wein:** Kann unbegrenzt getrunken werden, doch nach drei Bechern ist ein KON-Wurf nötig, um einen verstimmten Magen und einen dringenden Gang zum Abort zu vermeiden."],
   ["2 Silber · Häufig","**Becher starker Wein:** Nach zwei Bechern im selben Tagesabschnitt verursacht jeder weitere Becher einen Zustand nach Wahl des Spielers."],
   ["2 Kupfer · Häufig","**Humpen echter Met:** Nach drei Bechern im selben Tagesabschnitt verursacht jeder weitere Becher einen Zustand nach Wahl des Spielers."],
   ["4 Kupfer · Häufig","**Mesks Eintopf:** Deckt den täglichen Nahrungsbedarf. Enthält, was an diesem Tag gefunden wurde. Sei kreativ bei der Beschreibung der Zutaten!"]
  ]}
 ]
};
