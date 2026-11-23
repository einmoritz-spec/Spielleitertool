/* Der Tod in der Tiefe (Arkand S. 35–40) – deutsche Fassung. §…§ = Fertigkeit in Kapitälchen. Modell: plan/dragonbane/ABENTEUER_PLAN.md §2 */
window.DB_AB = window.DB_AB || {};
DB_AB["ark-tiefe"] = {
 id:"ark-tiefe", mul:1, t:"Der Tod in der Tiefe", band:"ark-hafen", buch:"db_ark", p:35, img:"abenteuer/ark-tiefe-titel",
 lage:[
  {h:"Die Lage", p:35},
  "Das Gasthaus namens Der Tod in der Tiefe ist eine von Arkands echten Institutionen, und sein Ruf reicht weit über die Stadtmauern hinaus. Reisende aus fernen Ländern kommen manchmal allein deshalb nach Arkand, um den Tod in der Tiefe zu besuchen, und die meisten gehen zufrieden – froh, die Reise gemacht zu haben!",
  "Der Tod in der Tiefe wird vom Grauen Rudel geführt, einer Gruppe von Wolfsmenschen unter der Leitung von Wylda Wildclaw. Niemand erinnert sich, wann das Gasthaus in ihren Besitz kam, ebenso wenig wie jemand weiß, was aus dem früheren Besitzer wurde.",
  "Neben dem Betrieb des Gasthauses ist das Graue Rudel Arkands führende Jagdgilde und verantwortlich für einen Großteil des Wildbrets, das in die Stadt gebracht wird. So ist ein stetiger Nachschub an frischem Fleisch gesichert, das im Gasthaus über offenem Feuer gegrillt und geröstet wird. Für Eingeweihte bietet das Rudel hinter verschlossenen Türen exklusive Köstlichkeiten in der Arkander Gastronomischen Gesellschaft, was es in der städtischen Oberschicht sehr beliebt gemacht hat.",
  "Doch ihr Einfluss endet nicht dort. Das Graue Rudel betreibt außerdem eine Schutzgelderpressung im Hafen und in großen Teilen des Dungs und hat jüngst begonnen, sich auf den Markt auszudehnen. Das bringt es mitunter in Konflikt mit den rechtschaffenen wie auch den korrupten Fraktionen der Stadtwache. Bisher ist es nicht so weit eskaliert, dass es die Aufmerksamkeit der Souveränin Elrita Blutauge erregt hätte.",
  "Der Tod in der Tiefe ist ein ausgezeichnetes erstes Zuhause für Neuankömmlinge in Arkand, da das Waffenverbot des Gasthauses es verhältnismäßig sicher macht.",
  {stein:{h:"Abenteueraufhänger", b:[{ul:[
   "*Eine rechtzeitige Rettung!* Die Spielercharaktere erleben die Zufallsbegegnung Tödlich verwundeter Graupelz im Dung (S. 61). Gelingt es ihnen, den Graupelz zu retten und zurück zum Tod in der Tiefe zu bringen, ist Wylda Wildclaw sehr dankbar und bietet ihnen freie Unterkunft an. Das kann als Einstieg in die Kampagne Der Thron der Diebe (S. 14) dienen.",
   "*Tierlieferung:* Meister Akelius braucht einen toten Mantikor (vielleicht von den Spielercharakteren gefangen), der diskret zu Wylda Wildclaw gebracht werden soll, damit sie ihn zerlegt und in der Gastronomischen Gesellschaft serviert. Die Lieferung muss über den Küchen­eingang erfolgen. Unterwegs werden die Charaktere jedoch von einer Gruppe Erdbrüder verfolgt, die Akelius’ Treiben entschieden missbilligen.",
   "*Ungebetene Gäste:* Die Spielercharaktere schnappen das Gerücht Gäste aus fernen Ländern (S. 24) auf und beschließen zu untersuchen, was Drachenritter in einer Stadt wollen, die die geflügelten Bestien so entschieden abgelehnt hat. Das könnte der Einstieg in die Kampagne Die Rückkehr der Drachenprinzessin (S. 14) sein."
  ]}]}}
 ],
 bereiche:[
  {id:"erdgeschoss", t:"Erdgeschoss", karte:{img:"abenteuer/ark-tiefe-erdgeschoss", p:36}, orte:[
   {n:"1", t:"Fassade", p:36, pin:[45.2,91.0], wesen:[],
    vl:"Ein riesiger Krake aus dunklem Holz blickt von der salzverkrusteten Fassade auf euch herab, seine Tentakel gierig um die eisenbeschlagenen Türen geschlungen. Ein Eisenschild mit abblätternden Goldbuchstaben verkündet, dass ihr den TOD IN DER TIEFE erreicht habt. Unter dem Schild hängt ein großer Eisenring in Form eines zu einem Knäuel gewundenen Tentakels.",
    st:[
     {k:"Haupttür", x:"Die Tür ist zu jeder Stunde verschlossen. Wer mit dem Tentakelring klopft, öffnet eine kleine Klappe, hinter der die Augen eines Graupelzes erscheinen, der die Spielercharaktere nach ihrem Anliegen fragt. Jede vernünftige Antwort wird akzeptiert, und sie dürfen in die Waffenhalle (Ort 2) eintreten."}
    ]},
   {n:"2", t:"Waffenhalle", p:36, pin:[45.2,74.0], wesen:[],
    vl:"Über einer geschlossenen, schweren, eisenbeschlagenen Eichentür hängt ein großes Schild, grob in Rot bemalt mit durchgestrichenen Waffen: Schwerter, Flegel, Äxte, Armbrüste und mehr. Ein graupelziger Wolfsmensch mustert euch genau. „Klingen, Schneiden, Spitzen und Stacheln bleiben hier. Wir möchten nicht, dass ihr euch oder jemand anderen verletzt!“",
    st:[
     {k:"Kontrolle", x:"Die Waffenhalle wird stets von zwei Mitgliedern des Grauen Rudels bewacht, die das Waffenverbot ausnahmslos durchsetzen. Die Spielercharaktere können versuchen, Waffen einzuschmuggeln. Ein erfolgreicher §Täuschen§-Wurf vermeidet die Kontrolle, wenn der Charakter bereits mindestens eine Waffe abgegeben hat. Der Wurf erfolgt mit Nachteil, wenn keine Waffe abgegeben wurde, und mit Vorteil, wenn drei oder mehr Waffen abgegeben wurden."},
     {k:"Eintritt", x:"Sobald die Spielercharaktere als unbewaffnet gelten, klopft einer der Graupelze an die Innentür und verkündet: „Willkommen im Tod in der Tiefe. Hier feiern wir, bis wir den Boden erreichen.“"},
     {k:"Schloss", x:"Die Tür zur Waffenhalle ist mit zwei Schlössern gesichert. Jede Wache trägt einen Schlüssel. Das Knacken erfolgt mit Nachteil."},
     {k:"Waffen", x:"In der Waffenhalle lagert stets eine große Auswahl an Waffen. Lass die Spieler sagen, welche Art von Waffe sie suchen. Mit einem erfolgreichen §Entdecken§-Wurf finden sie genau diese. Der Wurf erfolgt mit Vorteil für gewöhnliche Waffen und mit Nachteil für seltene."},
     {k:"Konflikt", r:1, x:"Wenn die Spielercharaktere einen Kampf zu suchen scheinen, kommen jede Runde zwei Graupelze aus dem Gastraum (Ort 3), bis ihre Zahl der der Charaktere entspricht."},
     {k:"Süden", x:"Verschlossene Tür (12 TP, Rüstungswert 8) zur Fassade (Ort 1)."},
     {k:"Norden", x:"Verschlossene Tür zum Gastraum (Ort 3)."}
    ]},
   {n:"3", t:"Gastraum", p:37, pin:[38.5,45.1], wesen:["ark-tiefe-anemius","ark-tiefe-dorthian","ark-tiefe-domidia"],
    vl:"Eine Wand aus ohrenbetäubendem Lärm schlägt euch entgegen. Eine große, schummrig beleuchtete Halle voller lärmender Zwerge, Menschen, Elfen und Enten, die Humpen schwenken, Fleisch benagen und mit Inbrunst rülpsen. Das Personal schlängelt sich gekonnt zwischen den Tischen hindurch und balanciert große Tabletts mit Speisen und Getränken. Der Raum riecht nach angesengtem Fleisch, und die Luft ist dick von Rauch und Fett. Ihr bereut, eure Waffen zurückgelassen zu haben – man bräuchte ein Messer, um die Luft hier drinnen zu schneiden.",
    st:[
     {k:"Graupelze", r:1, x:"Im Gastraum sind stets so viele Graupelze wie Spielercharaktere – manche mischen sich unauffällig unter die Gäste, andere servieren Getränke und Speisen. Ein erfolgreicher §Wahrnehmung§-Wurf enthüllt die Anwesenheit von W3 Graupelzen."},
     {k:"Drachengeküsst", x:"Erfahrene Besucher bemerken vielleicht, dass einige Gäste ihre Mahlzeiten „drachengeküsst“ bestellen. Dann wird das Fleisch an den Tisch gebracht und mit einer raffinierten Flambiervorrichtung in Form eines Drachenkopfes dramatisch angesengt. Das kostet das Dreifache, löst aber stets begeisterte Rufe der Menge aus!"},
     {k:"Übernachten im Tod in der Tiefe", x:"Die Bezahlung erfolgt im Voraus. Kein Kredit. Preise laut Tabelle auf S. 80 des Regelbuchs."},
     {k:"Süden", x:"Tür zur Waffenhalle (Ort 2)."},
     {k:"Westen", x:"Treppe zur Tür zum Flur (Ort 10)."},
     {k:"Norden", x:"Tür zur Küche (Ort 4)."},
     {k:"Norden", x:"Tür zum Abort (Ort 7)."}
    ]},
   {n:"4", t:"Küche", p:38, pin:[38.2,30.6], wesen:[],
    vl:"Im großen Kamin knistert ein lebhaftes Feuer und wirft warmes, flackerndes Licht durch die Küche. Auf einem soliden Hackklotz liegen Stücke von mindestens drei verschiedenen Tieren. Ein Fleischerbeil, groß genug als Schlachtaxt eines Zwergenkönigs, steckt tief im Hackklotz. Der Raum riecht nach Rauch und gegrilltem Fleisch, vermischt mit dem unverwechselbaren Duft brennender Kräuter.",
    st:[
     {k:"Graupelze in der Küche", r:1, x:"In der Küche sind stets ein oder zwei Graupelze, die Essen zubereiten oder Fleisch zerlegen. Wer kein Wolfsmensch ist oder nicht von einem Graupelz begleitet wird, stößt auf große Feindseligkeit."},
     {k:"Geheimtür zur Gastronomischen Gesellschaft", r:1, x:"An der Ostwand, verborgen hinter einem raumhohen Gewürzregal, liegt der Eingang zur Gastronomischen Gesellschaft."},
     {k:"Osten", r:1, x:"Geheimtür zur Arkander Gastronomischen Gesellschaft (Ort 9)."},
     {k:"Süden", x:"Treppe hinauf zu einer verschlossenen Tür zum Flur (Ort 13)."},
     {k:"Süden", x:"Tür zum Gastraum (Ort 3)."},
     {k:"Westen", x:"Tür zur Vorratskammer (Ort 5)."},
     {k:"Norden", x:"Tür zum Schlachtraum (Ort 6)."},
     {k:"Norden", x:"Tür zum Kai (Ort 8)."}
    ]},
   {n:"5", t:"Vorratskammer", p:38, pin:[13.6,30.6], wesen:[],
    vl:"Säcke, Truhen, Fässer, Krüge und Kisten sind wahllos im ganzen Raum gestapelt. Mehl ist über den Boden verschüttet, und Zwiebelzöpfe hängen von der Decke. Gleich hinter der Tür stehen zwei Körbe mit Karotten.",
    st:[
     {k:"Rationen", x:"Die Spielercharaktere können mühelos W4 Rationen Nahrung für jedes Viertel sammeln, das sie hier verbringen."},
     {k:"Osten", x:"Tür zur Küche (Ort 4)."}
    ]},
   {n:"6", t:"Schlachtraum", p:38, pin:[34.0,16.2], wesen:["ark-tiefe-wylda"],
    vl:"Der Gestank frischen Blutes trifft euch wie eine Flutwelle. Gehäutete Kadaver hängen an Fleischerhaken, die in der Decke befestigt sind. Entlang der Wände stehen dunkle Hackklötze, auf denen grobe Fleischstücke gestapelt sind. Am hinteren Ende des Raumes steht ein dicker Tisch, umgeben von Stühlen.",
    st:[
     {k:"Geschlachtete Tiere", x:"Ein erfolgreicher §Wildniskunde§-Wurf erlaubt den Spielercharakteren, die hängenden Tiere zu erkennen: Hirsche, Wildschweine, Rehböcke, Elche und verschiedene Vögel und Kleinwild."},
     {k:"Wylda Wildclaw", x:"Wylda Wildclaw verbringt viel Zeit im Schlachtraum. Hier führt sie auch ihre Geschäfte. Sind die Charaktere in den Tod in der Tiefe gekommen, um einen Auftrag zu besprechen, werden sie hierher gebracht. Bei einem solchen Treffen sind stets mindestens so viele Graupelze im Raum wie Spielercharaktere."},
     {k:"Goglof", r:1, x:"Spielercharaktere, die den Raum aktiv durchsuchen (sie müssen ansagen, dass sie Kadaver beiseiteschieben) und einen §Entdecken§-Wurf schaffen, entdecken einen nackten Goblin, der eingeklemmt zwischen einem Hirsch und einem Elch hängt. Ein erfolgreicher §Heilkunde§-Wurf zeigt, dass der Goblin noch lebt. Goglof gehört zum Kult der A’thana (siehe den Abenteuerort A’thanas Hort), und die Graupelze haben ihn dabei erwischt, wie er Spinnen in die Kleidung von Kunden stopfte. Retten die Charaktere ihn, bietet er an, sie zu A’thanas Hort zu führen."},
     {k:"Falltür", r:1, x:"Der Boden direkt vor dem Tisch verbirgt eine Falltür, die sehr schwer zu entdecken ist (erfordert einen erfolgreichen §Entdecken§-Wurf, selbst wenn die Spielercharaktere ausdrücklich sagen, dass sie den Boden untersuchen). Die Falltür öffnet sich mit einem einfachen Zug an einem Fleischerhaken, der hinter dem Tisch an der Wand hängt. Wird sie ausgelöst, fällt der Stuhl mit, und der Besucher stürzt in einen wassergefüllten Käfig unter dem Schlachtraum."},
     {k:"Süden", x:"Tür zur Küche (Ort 4)."}
    ]},
   {n:"7", t:"Abort", p:39, pin:[72.5,13.8], wesen:[],
    vl:"Ein geräumiger Abort mit vier großzügig bemessenen Löchern. Ihr hört das sanfte Plätschern von Wasser, und ein leichter Luftzug trägt den salzigen Geruch des Kanals durch die Öffnungen herauf.",
    st:[
     {k:"Absatz", x:"Unter dem Abort liegt ein schmaler Absatz, auf dem ein geduldiger Mensch auf die richtige Person warten kann. Das Graue Rudel nutzt ihn oft, um Gäste zu überfallen, die eine weniger sanfte Behandlung verdient haben."},
     {k:"Süden", x:"Tür zum Gastraum (Ort 3)."},
     {k:"Unten", x:"Der Abort hängt über dem Kanal und kann als Zu- und Ausgang zum Kai (Ort 8) dienen. Wer diesen Weg nimmt, muss einen KON-Wurf schaffen oder wird Kränkelnd."}
    ]},
   {n:"8", t:"Kai", p:39, pin:[54.2,18.5], wesen:[],
    vl:"Dicke, rostige Eisenringe in Form von Tentakeln sind in der schmalen, moosbewachsenen Steinplattform verankert, die den Tod in der Tiefe vom Kanal trennt. Neben euch platscht es im Wasser, gefolgt von einem erleichterten Seufzer: „Endlich!“",
    st:[
     {k:"Süden", x:"Tür zur Küche (Ort 4), von innen verriegelt (12 TP, Rüstungsstufe 6, lässt sich nicht aufbrechen)."},
     {k:"Oben", x:"Latrinenloch, das zum Abort (Ort 7) führt. Wer diesen Weg nimmt, muss einen KON-Wurf schaffen oder wird Kränkelnd."}
    ]},
   {n:"9", t:"Die Arkander Gastronomische Gesellschaft", p:39, pin:[70.1,35.5], wesen:[],
    vl:"Ein langer, stabiler Holztisch mit acht hochlehnigen Stühlen beherrscht diese schummrig beleuchtete Kammer. Die Wände sind mit Tafeln bedeckt, in die Namen geschnitzt sind.",
    st:[
     {k:"Die Arkander Gastronomische Gesellschaft", x:"Der exklusivste Club Arkands, gegründet von Akelius und Wylda Wildclaw, beide getrieben von einem unstillbaren Appetit auf das Fleisch seltener Kreaturen. Hier landen die Bestien, die Akelius in den Spielen kämpfen lässt, wenn sie ihr unvermeidliches Schicksal ereilt hat, doch die Gesellschaft speist auch Wild aus den Jagden der Graupelze. Die Mitgliedschaft erfordert die Empfehlung von mindestens zwei Mitgliedern – und die Mittel, die Gebühr zu zahlen."},
     {k:"Die Legenden der Köstlichkeiten", x:"Nach jedem besonders denkwürdigen Festmahl fertigt Wylda Wildclaw eine Tafel zum Gedenken daran an. Sie schreibt die Namen der anwesenden Gäste darauf, neben einem geschnitzten Bild der verspeisten Bestie, und hängt die Tafel an die Wand."},
     {k:"Westen", x:"Geheimtür zur Küche (Ort 4)."}
    ]}
  ]},
  {id:"obergeschoss", t:"Obergeschoss", karte:{img:"abenteuer/ark-tiefe-obergeschoss", p:40}, orte:[
   {n:"10", t:"Flur", p:40, pin:[42.0,38.5], wesen:[],
    vl:"Ein schlichter Flur mit Türen auf beiden Seiten. Abgenutzte Tierfelle bedecken den Boden. Ein dicker Kaminvorsprung versperrt fast den Weg am Ende, doch der Flur scheint dahinter weiterzugehen.",
    st:[
     {k:"Osten", x:"Verschlossene Türen zu den Gästezimmern (Orte 11B, 11E)."},
     {k:"Süden", x:"Türen zum Gastraum (Ort 3) und zu den Schlafsälen (Orte 12A, 12B)."},
     {k:"Westen", x:"Verschlossene Tür zum Gästezimmer (Ort 11A)."},
     {k:"Norden", x:"Verschlossene Türen zu den Gästezimmern (Orte 11C, 11D)."}
    ]},
   {n:"11A", t:"Gästezimmer A", p:40, pin:[21.0,18.3], wesen:["ark-tiefe-domidia"],
    vl:"Ein bescheidenes Zimmer mit einem niedrigen, breiten Bett. Das einzige Fenster ist mit dicken Eisenstäben gesichert, und der Boden ist mit Tierfellen bedeckt.",
    st:[
     {k:"A", x:"Derzeit von Domidia Treibholz bewohnt, die hier jedoch keine Wertsachen aufbewahrt."}
    ]},
   {n:"11B", t:"Gästezimmer B", p:40, pin:[36.8,18.3], wesen:["ark-tiefe-dorthian"],
    vl:"Ein bescheidenes Zimmer mit einem niedrigen, breiten Bett. Das einzige Fenster ist mit dicken Eisenstäben gesichert, und der Boden ist mit Tierfellen bedeckt.",
    st:[
     {k:"B", x:"Dorthian Tasars Zimmer. Seit Guendias Verschwinden bewahrt er hier nichts von Wert auf."}
    ]},
   {n:"11C", t:"Gästezimmer C", p:40, pin:[47.2,18.3], wesen:[],
    vl:"Ein bescheidenes Zimmer mit einem niedrigen, breiten Bett. Das einzige Fenster ist mit dicken Eisenstäben gesichert, und der Boden ist mit Tierfellen bedeckt.",
    st:[
     {k:"C", x:"Frei. Früher von Drachenprinzessin Guendia bewohnt, seither aber nicht mehr vermietet."},
     {k:"Osten/Süden/Westen", x:"Verschlossene Tür zum Flur (Ort 10)."}
    ]},
   {n:"11D", t:"Gästezimmer D", p:40, pin:[58.0,18.3], wesen:["ark-tiefe-dorthian"],
    vl:"Ein bescheidenes Zimmer mit einem niedrigen, breiten Bett. Das einzige Fenster ist mit dicken Eisenstäben gesichert, und der Boden ist mit Tierfellen bedeckt.",
    st:[
     {k:"D", x:"Derzeit von Tatrios Dosar bewohnt."},
     {k:"Osten/Süden/Westen", x:"Verschlossene Tür zum Flur (Ort 10)."}
    ]},
   {n:"11E", t:"Gästezimmer E", p:40, pin:[73.8,18.3], wesen:[],
    vl:"Ein bescheidenes Zimmer mit einem niedrigen, breiten Bett. Das einzige Fenster ist mit dicken Eisenstäben gesichert, und der Boden ist mit Tierfellen bedeckt.",
    st:[
     {k:"E", x:"Frei."},
     {k:"Osten/Süden/Westen", x:"Verschlossene Tür zum Flur (Ort 10)."}
    ]},
   {n:"12A", t:"Schlafsaal A", p:40, pin:[26.2,69.9], wesen:[],
    vl:"Eine große Halle, in der niedrige Betten mit abgenutzten Strohmatratzen neben Hängematten aus abgewetztem Segeltuch stehen. Fenster mit stabilen Eisenstäben rahmen ein verblasstes Wandbild mit einer dramatischen Meeresszene [ein Schiffswrack in A, ein Riesenkrake in B].",
    st:[
     {k:"Gäste", x:"Dies ist ein perfekter Ort für die Spielercharaktere, um zu übernachten. Wenn sie eine ausreichend große Gruppe sind, bekommen sie vielleicht einen ganzen Schlafsaal für sich."},
     {k:"Norden", x:"Tür zum Flur (Ort 10)."}
    ]},
   {n:"12B", t:"Schlafsaal B", p:40, pin:[47.2,69.9], wesen:[],
    vl:"Eine große Halle, in der niedrige Betten mit abgenutzten Strohmatratzen neben Hängematten aus abgewetztem Segeltuch stehen. Fenster mit stabilen Eisenstäben rahmen ein verblasstes Wandbild mit einer dramatischen Meeresszene [ein Schiffswrack in A, ein Riesenkrake in B].",
    st:[
     {k:"Gäste", x:"Dies ist ein perfekter Ort für die Spielercharaktere, um zu übernachten. Wenn sie eine ausreichend große Gruppe sind, bekommen sie vielleicht einen ganzen Schlafsaal für sich."},
     {k:"Norden", x:"Tür zum Flur (Ort 10)."}
    ]},
   {n:"13", t:"Flur", p:40, pin:[74.0,38.8], wesen:[],
    vl:"Ein kurzer Flur mit Türen in jede Richtung außer nach Norden.",
    st:[
     {k:"Osten", x:"Verschlossene Tür zu Wyldas Kammer (Ort 14)."},
     {k:"Süden", x:"Tür zum Quartier des Grauen Rudels (Ort 15)."}
    ]},
   {n:"14", t:"Wyldas Kammer", p:40, pin:[87.0,26.4], wesen:["ark-tiefe-wylda"],
    vl:"Ein großer Haufen Tierfelle bildet einen pelzigen Hügel in der Nordostecke des Raumes. Von der Decke hängen Hakenketten, an denen Reihe um Reihe verdorrter Hände baumeln.",
    st:[
     {k:"Die verdorrten Hände", x:"Die riesige Sammlung von Händen sind Trophäen von denen, die Wylda oder dem Grauen Rudel in die Quere kamen. Ein erfolgreicher §Tierkunde§-Wurf erlaubt den Spielercharakteren, Hände von jedem Volk zu erkennen."},
     {k:"Wyldas Schätze", r:1, x:"Versteckt unter dem massiven Fellhaufen, der Wyldas Schlafplatz bildet, liegen Wertsachen im Wert von drei Schatzkarten. Sie ist nicht besonders habgierig – sie liebt es nur, das Sagen zu haben."},
     {k:"Westen", x:"Verschlossene Tür zum Flur (Ort 13)."}
    ]},
   {n:"15", t:"Der Bau des Grauen Rudels", p:40, pin:[76.4,69.9], wesen:[],
    vl:"Im Kamin knistert ein Feuer. Bündel von Tierfellen liegen verstreut auf dem Boden. Tische und Hocker sind wie kleine Inseln im Raum gruppiert, während Speere und Bögen lässig an den Wänden lehnen.",
    st:[
     {k:"Graupelze", r:1, x:"Hier sind stets W3 Graupelze – sie ruhen sich aus, würfeln oder vertreiben sich die Zeit auf andere Weise, etwa indem sie eine langsame Melodie heulen."},
     {k:"Norden", x:"Tür zum Flur (Ort 13)."}
    ]}
  ]}
 ],
 figuren:{
  "ark-tiefe-anemius":{typ:"nsc", t:"Anemius", p:37,
   werte:[["Bewegung","10"],["Schadensbonus","–"],["TP","11"]], tp:11,
   zl:[["Rüstung","Grüne Robe (1)"],["Fertigkeiten","Wildniskunde 12, Jagen & Fischen 12, Seefahrt 12, Schwimmen 15"],["Waffen","Stab (Fertigkeitswert 12, Schaden W8)"]],
   text:["Anemius ist ein ehemaliger Akolyth des Bundes der Ertrunkenen Götter. Eines Nachts belauschte er ein Gespräch zwischen Vanador, Umiel und Brakytoth und beschloss, mit dem, was da vor sich ging, nichts zu tun haben zu wollen. Seitdem sitzt er im Tod in der Tiefe und ringt mit der Frage, ob er jemandem erzählen soll, was er gehört hat. Vielleicht sind es die Spielercharaktere, die ihn endlich zum Reden bringen?"]},
  "ark-tiefe-dorthian":{typ:"nsc", t:"Dorthian Tasar & Tatrios Dosar", p:38,
   werte:[["Bewegung","14"],["Schadensbonus STÄ","+W4"],["TP","18"],["WP","13"]], tp:18,
   zl:[["Rüstung","Plattenrüstung (6), gut verborgen unter weiten Umhängen"],["Fertigkeiten","Akrobatik 12, Wahrnehmung 13, Täuschen 15, Fremdsprachen 8, Reiten 14"],["Waffen","Langschwert (Fertigkeitswert 17, Schaden 2W8)"],["Talente","Defensiv (Dorthian), Doppelhieb (Tatrios), Drachentöter, Blitzschnell"]],
   text:["Dorthian und Tatrios kamen als Leibwächter der Drachenprinzessin Guendia nach Arkand, konnten sie aber nicht beschützen, als sie von Elrita Blutauges persönlichen Wachen überfallen wurde. Zutiefst beschämt suchen sie nun Verbündete, die ihnen helfen könnten. Sie reisen unter dem Deckmantel von Gewürz- und Stoffhändlern und stellen vorsichtige Fragen, um herauszufinden, wer bereit sein könnte, sie bei ihrem Vorhaben zu unterstützen, ihre Herrin zu befreien und die Souveränin zu stürzen.",
         "**Fremder Akzent:** Die Spielercharaktere können einen §Fremdsprachen§-Wurf machen, um zu bemerken, dass die beiden Drachenritter mit einem Akzent sprechen. Ein zweiter erfolgreicher Wurf bestimmt den Akzent als aus den Ostlanden stammend (siehe Pfad des Ruhms)."]},
  "ark-tiefe-domidia":{typ:"nsc", t:"Domidia Treibholz", p:38,
   werte:[["Bewegung","10"],["Schadensbonus STÄ","+W4"],["TP","16"],["WP","12"]], tp:16,
   zl:[["Rüstung","Beschlagenes Leder (2)"],["Fertigkeiten","Feilschen 12, Täuschen 15, Wildniskunde 16, Fremdsprachen 8, Seefahrt 16"],["Waffen","Krummsäbel (Fertigkeitswert 13, Schaden 2W6)"],["Talente","Seebeine"],["Ausrüstung","Eine Feder, die sie an sich bringen konnte, als die Piratenkönigin Blutschnabel sie über Bord warf und für tot zurückließ."]],
   text:["Domidia Treibholz ist eine wettergegerbte Seefahrerin mit faltiger, von Sonne und Salz gegerbter Lederhaut. Ihr wildes Haar ist mit Spangen aus Muscheln und Knochen von Meerestieren zu Knoten gebunden. Sie ist nach Arkand gekommen, um ein neues Schiff und eine neue Mannschaft zu finden, nachdem sie beides bei einem Zusammenstoß mit den Blutschnäbel verloren hat – ebenso wie ihre Nase. Sie brennt auch auf Rache, doch dafür muss sie zuerst die verantwortlichen Piraten finden!"]},
  "ark-tiefe-wylda":{typ:"nsc", t:"Wylda Wildclaw", p:39, img:"abenteuer/ark-tiefe-wylda",
   werte:[["Bewegung","16"],["Schadensbonus STÄ","+W4"],["TP","26"],["WP","15"]], tp:26,
   zl:[["Rüstung","Beschlagenes Leder (2)"],["Fertigkeiten","Wahrnehmung 16, Feilschen 15, Täuschen 15, Wildniskunde 13"],["Waffen","Klauen (Fertigkeitswert 16, Schaden W8), Handbeil (Fertigkeitswert 16, Schaden 2W6)"],["Talente","Hinterhalt, Gefährte, Adlerauge, Einsicht, Eiserner Griff, Robust × 4"]],
   text:["Wylda Wildclaw verdankt ihren Spitznamen dem großzügigen Einsatz ihrer ungewöhnlich langen Klauen in Situationen, in denen sie sich Gehör verschaffen muss. Sie ist groß, breitschultrig und in jeder Hinsicht imposant, mit geflecktem grauem Fell und einem großen weißen Fleck um das linke Auge. Wylda ist die unangefochtene Anführerin des Grauen Rudels und führt die Organisation mit eiserner Hand. Ihre größte Leidenschaft im Leben ist es, das Fleisch jeder bekannten Kreatur zu kosten. Sie hat auf dem Weg zu diesem Ziel beachtliche Fortschritte gemacht, hat aber noch einen weiten Weg vor sich."]}
 },
 tabellen:[
  {id:"ark-tiefe-speisekarte", h:"Speisekarte", p:37, strip:"Speisekarte", cols:["Preis","Gegenstand und Wirkung"], rows:[
   ["3 Kupfer · Häufig","**Humpen Met:** Kann unbegrenzt getrunken werden. Nach drei Humpen ist jedoch ein KON-Wurf nötig, um einen dringenden Gang zum Abort zu vermeiden."],
   ["5 Kupfer · Häufig","**Becher Wein:** Kann unbegrenzt getrunken werden. Nach drei Bechern braucht es jedoch einen KON-Wurf, um einen verstimmten Magen und einen dringenden Gang zum Abort zu vermeiden."],
   ["3 Silber · Häufig","**Becher Wyldas Blut:** Jeder Becher, der im selben Tagesabschnitt getrunken wird, verursacht einen Zustand nach Wahl des Spielers. Bei Wolfsmenschen und Nachtvolk heilt jeder Becher stattdessen einen Zustand."],
   ["1 Silber · Häufig","**Gegrilltes Geflügel oder Kleinwild:** Deckt den täglichen Nahrungsbedarf."],
   ["5 Silber · Häufig","**Gegrilltes Wildbret:** Deckt den täglichen Nahrungsbedarf."],
   ["3 Silber · Häufig","**Gegrillter Fisch oder Tintenfisch:** Deckt den täglichen Nahrungsbedarf."],
   ["8 Silber · Selten","**Frisch gekochte Dämonenkrabbe:** Deckt den täglichen Nahrungsbedarf."]
  ]}
 ],
 kaesten:{}
};
