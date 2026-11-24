/* Außenposten (Abenteuerband S. 14–27) – deutsche Fassung, Teil a: Lage, Bereiche, Orte. §…§ = Fertigkeit. Figuren/Kästen/Tabellen: ab-aussenposten-b.js */
window.DB_AB = window.DB_AB || {};
DB_AB["aussenposten"] = {
 id:"aussenposten", t:"Außenposten", band:"dk", buch:"db_adv", p:14, img:"abenteuer/aussenposten-karte", kurz:"10 Orte",
 vl:"Die Wagenspuren gehen in eine gepflasterte Straße über, die sich durch hohe Getreidefelder zieht. Unzählige Gerüche dringen auf eure Sinne ein: Mist, Rauch und faulendes Gemüse, aber auch frisch gebackenes Brot und gegrilltes Fleisch.\n\nDie Straße führt zu einer Siedlung, die von einer Palisade umgeben ist; hinter den angespitzten Stämmen sieht man viele kleine Häuser mit rauchenden Schornsteinen.\n\nDas Dorftor ist geschlossen und wird von zwei niedrigen, aber stabilen Steintürmen mit Zinnen und spitzen Holzdächern flankiert. Als ihr näher kommt, hört ihr die strenge Stimme eines Mannes, der von einem der Türme zu euch herunterbellt:\n\n„Halt, Fremde! Nennt eure Namen und euer Anliegen, oder kehrt um in den Wald – dies ist ein Ort des Friedens und der Anständigkeit.“",
 lage:[
  "Das Dorf Außenposten ist rund um eine verfallene Tempelruine aus dem Goldenen Zeitalter der Drachenkaiser entstanden. Die meisten Gebäude sind einfache Blockhütten oder grobe Fachwerkhäuser, die im letzten Jahrzehnt von Abenteurern, Siedlern und Glücksrittern errichtet wurden.",
  "Außenposten ist ein Ort weitab von Ehre und Redlichkeit, voller Träume und Abenteuer, wo jedes Gerücht und jedes freundliche Lächeln zu Ruhm, Reichtum und unvergänglichem Ruf führen kann – oder zu einem jähen, qualvollen Tod.",
  {"h":"Ankunft","p":14},
  "Nach der Eröffnungsszene werden die Spielercharaktere wahrscheinlich direkt nach Außenposten aufbrechen. Der Marsch dorthin dauert etwa einen Tag. Auch wenn sie zuerst woandershin gehen, landen sie früher oder später in Außenposten.",
  "Die Vegetation verdichtet sich zu dichtem Wald, während die Spielercharaktere ins Nebeltal hinabsteigen. Zum Glück können sie einfach den Resten desselben alten Pfades folgen, der sich durch die Berge und hinab in den Wald windet – für den Weg nach Außenposten ist also kein §Wildniskunde§-Wurf nötig.",
  "Hier und da ragen verwitterte Meilensteine aus dem Gelände, manche davon mit stilisierten, altertümlichen Kronen verziert. Einige Kilometer vor Außenposten lichtet sich der Wald und geht in bestellte Felder über. Bald stapfen die Spielercharaktere über schlammige Wagenspuren.",
  "Der Turm ist Ort 2A, und der Mann im Turm ist Hardy (S. 19). Er will wissen, wie sie heißen und warum sie nach Außenposten gekommen sind. Beantworten sie seine Fragen und versichern sie ihm, dass sie in friedlicher Absicht kommen, öffnet sich knarrend das Tor. Stellen die Spielercharaktere Fragen, verweist Hardy sie bestimmt an Vagnhild im Gasthaus *Zu den Drei Hirschen*.",
  {"h":"Die Lage","p":15},
  "Außenposten ist der Dreh- und Angelpunkt der Abenteuer, aus denen *Das Geheimnis des Drachenkaisers* besteht. Hier können die Spielercharaktere ihre Ausrüstung verbessern und neue Waffen kaufen, ihre Fertigkeiten schärfen und sich zwischen den Ausflügen erholen.",
  "Es ist aber auch ein Ort, an dem du Hinweise platzieren kannst, die die Spielercharaktere finden müssen, um in der Geschichte voranzukommen.",
  "Wenn die Charaktere in Außenposten ankommen, ist es wichtig, dass sie schnell von der Legende der Statuette des Drachenkaisers und dem Schwert Um-Durman (S. 8) erfahren, damit sie in das Abenteuer hineingezogen werden. Haben sie in der Eröffnungsszene Hinweise erhalten, werden sie sich vermutlich im Dorf umhören, und es gibt mehrere Personen, die ihnen den Mythos erzählen können. Zum Beispiel:",
  {"ul":["**Leanara/Annabella:** Geheime Sathmog-Kultistin im Gasthaus *Zu den Drei Hirschen* (S. 21).","**Alfilia Shadowleaf:** Eledain-Ritterin im Gasthaus *Zu den Drei Hirschen* (S. 22).","**Dranath:** Mystiker in der Kapelle des Eledain (S. 26)."]},
  {"h":"Der Drachentempel"},
  "Außenposten ist rund um einen uralten Tempel gebaut, in dem der Drachenkaiser Eledain und seine Nachkommen begraben liegen.",
  "Vom Gebäude ist heute nur noch wenig übrig, doch in einer Krypta unter den zerfallenen Mauern ruht Um-Durman – das magische Schwert, nach dem Eledains Erzfeind Sathmog trachtet. Um den Eingang zu der legendären Waffe zu öffnen, braucht man die vollständig zusammengesetzte Statuette des Eledain, die in eine bestimmte Nische gestellt werden muss. Mehr dazu unter Ort 8.",
  {"h":"Die Dämonenkultistin"},
  "In Außenposten begegnen sie Leanara, der Sathmog verehrenden Dämonenkultistin, die Meister Weatherman in der Eröffnungsszene erwähnt hat. Sie hat von Azrahel Koth zwei Befehle erhalten: die Tempelruine zu überwachen und Abenteurer im Auge zu behalten, die Außenposten besuchen.",
  "Leanara findet man meist im Gasthaus *Zu den Drei Hirschen* (Ort 4), wo sie unter dem Namen Annabella als Magd arbeitet.",
  "Sie verständigt sich mit Azrahel Koth durch Nachrichten, die dämonische Fledermäuse auf die Nebelinsel bringen. Sie befehligt eine Handvoll niederer Kultisten unter der Führung des verbitterten Entenkriegers Quasimund.",
  "Die Spielercharaktere werden von Leanara sofort beobachtet. Sie erkennt in ihnen fähige Abenteurer und einen möglichen Weg zu Um-Durman. Beginnen die Spielercharaktere, Fragen über „Leanara“ oder „das Geheimnis des Drachenkaisers“ zu stellen, gibt sie sich schnell zu erkennen. Auch wenn sie untätig bleiben, wird Leanara sie unter einem passenden Vorwand ansprechen.",
  "Leanaras Plan ist es, die Spielercharaktere die Statuettenteile und den Eingang zu Um-Durman finden zu lassen, um ihnen dann das Schwert abzunehmen und zu Azrahel Koth zu bringen. Sie verrät nicht, dass sie mit Sathmog in Verbindung steht, sondern versucht, die Spielercharaktere zu täuschen, indem sie ihnen wichtige Informationen vermischt mit Lügen und Halbwahrheiten gibt. Sie erzählt ihnen die Legende von Um-Durman und fährt dann fort:",
  {"zit":["„Ich gehöre einer heiligen Organisation an, der Gesellschaft der Wahrheit, die danach strebt, uralte Artefakte und verlorenes Wissen der Menschheit zurückzubringen. Ihr macht auf mich den Eindruck fähiger Abenteurer. Würdet ihr mir helfen, die verlorenen Statuettenteile zu finden und die Krypta des Eledain zu öffnen? Unser Orden ist nicht reich, aber wir können euch 50 Goldmünzen pro Teil bieten – und die Ehre, für eine gute Sache zu kämpfen.","Doch seid gewarnt – ein Orden drachenverehrender Ritter sucht ebenfalls nach Um-Durman. Sie wollen das alte Drachenreich wiedererrichten und alle versklaven, die im Nebeltal leben.“"]},
  "Nehmen die Spielercharaktere diesen Auftrag an, erzählt Leanara ihnen von einem oder mehreren Abenteuerorten, an denen sich Teile der Statuette finden lassen könnten (S. 17).",
  "Entlarven und besiegen die Spielercharaktere Leanara, bevor sie Um-Durman gefunden haben, arrangiert stattdessen Quasimund den Hinterhalt im Tempelbereich. Mehr dazu auf S. 27.",
  {"stein":{"h":"Hartnäckige Spieler","b":["Lehnen die Spieler Leanaras Auftrag ab und wollen nur im Nebeltal auf Schatzsuche gehen, lass sie eine Weile gewähren. Es ist eine lange Kampagne, und es gibt etliche NSC, die sie auf die richtige Spur bringen können, darunter der Orkhäuptling Maladûk (S. 46) und die Spinnenfrau Saak’shal (S. 65).","Zunehmende dämonische Vorzeichen (S. 10) sollten sie ebenfalls motivieren."]}},
  {"h":"Mehr über das Dorf","p":16},
  "Außer dem Gasthaus *Zu den Drei Hirschen* und etwa fünfzig Holzwohnhäusern besteht Außenposten aus einem Laden, einer Mühle und einer Schmiede.",
  "Das alte Tempelgelände ist die Heimat eines Mystikers geworden, der seinen Lebensunterhalt damit verdient, Heilmagie zu spenden und die Zukunft vorherzusagen.",
  "Außenposten hat keinen Dorfrat, doch die Wirtin Vagnhild fungiert als inoffizielle Anführerin der Siedlung. In ihrem Gasthaus versammeln sich die Dorfbewohner zu Besprechungen und Beratungen, und Vagnhild koordiniert die Wachen an der Palisade.",
  {"h":"Gerüchte in Außenposten"},
  "Die Gerüchte (Tabelle „Gerüchte“) können Informationen über die Abenteuerorte liefern, an denen die Spielercharaktere Teile der Drachenkaiser-Statuette finden können.",
  "Viele NSC in Außenposten können diese Gerüchte als Tipps für lohnende Ziele weitergeben. Die Gerüchte können ausgewählt oder zufällig bestimmt werden. In der Schachtel findest du sie auch auf Spielkarten, die du den Spielern aushändigen kannst."
 ],
 bereiche:[
  {id:"dorf", t:"Das Dorf", karte:{img:"abenteuer/aussenposten-karte", p:18}, orte:[
   {n:"1", t:"Palisade", p:19, pin:[24.5,32.9], wesen:["dorfwache"],
    vl:"Eine grobe Palisade aus angespitzten Baumstämmen windet sich um die Siedlung. Sie ist nicht sehr hoch, vielleicht eineinhalb Mannslängen. Zwischen den Stämmen sind mehrere große Lücken zu sehen.",
    st:[
     {"k":"Wachen","x":"Der Palisadenbereich wird rund um die Uhr von drei Dorfbewohnern bewacht, zusätzlich zum Wachhauptmann am Südtor (Ort 2A). Einer von ihnen steht immer in einem der Türme am Nordtor (Ort 2B), während die anderen an der Palisade auf und ab gehen."},
     {"k":"Zufallsereignis","x":"Nr. 1 und 5 können hier eintreten."}
    ]},
   {n:"2A", t:"Südtor", p:19, pin:[86.5,66.0], wesen:["hardy","dorfwache"],
    vl:"Ein niedriger, zweiflügeliger Eingang wird von zwei runden Steintürmen flankiert. Eine gepflasterte Straße führt nach Süden.",
    st:[
     {"k":"Hauptmann Hardy","x":"Der Wachhauptmann wohnt in einem Turm; der andere dient als Besprechungsraum und Treffpunkt für die Wachpatrouillen. Hardy ist meist in einem der Türme anzutreffen."},
     {"k":"Zufallsereignis","x":"Nr. 1 und 5 können hier eintreten."}
    ]},
   {n:"2B", t:"Nordtor", p:20, pin:[63.3,22.0], wesen:[],
    vl:"Ein niedriger Torbogen wird von zwei runden Steintürmen mit spitzen Holzdächern flankiert. Ein ausgetretener Pfad führt durch das Tor hinaus und schlängelt sich durchs Gelände.",
    st:[
     {"k":"Ausguck","x":"In einem der Türme steht immer ein Dorfbewohner Wache. Er oder sie beobachtet die Umgebung und hat stets ein großes Horn dabei. Beim ersten Anzeichen von Gefahr bläst die Wache das örtliche Warnsignal: drei kurze Hornstöße, gefolgt von einem langen. In Notfällen wird die Zahl der Wachen auf vier erhöht, zwei in jedem Turm."},
     {"k":"Zufallsereignis","x":"Nr. 1 und 5 können hier eintreten."}
    ]},
   {n:"3", t:"Der Dorfplatz", p:20, pin:[52.1,28.1], wesen:[],
    vl:"Das Gasthaus, die Schmiede und der Laden liegen an einem freien Platz, auf dem sich eine verwitterte Statue aus der Erde erhebt. Es ist ein seltsames Relikt aus vergangener Zeit, das offenbar einen Krieger in altertümlicher Rüstung darstellt.",
    st:[
     {"k":"Der Drachenkaiser","x":"Die Zeit war nicht gnädig zur Statue. Beide Arme sind abgefallen, doch man erkennt noch einen Helm mit einer hornartigen Krone. Mit einem gelungenen §Mythen & Legenden§-Wurf erkennen die Spielercharaktere in der Statue den Drachenkaiser Eledain, der vor vielen Jahrhunderten über diesen Teil der Welt geherrscht haben soll. Sie bemerken auch große Ähnlichkeiten zwischen der Statue und der vierteiligen Statuette auf Weathermans Karte."},
     {"k":"Zufallsereignis","x":"Alle Zufallsereignisse (Tabelle „Zufallsereignisse“) können hier eintreten."}
    ]},
   {n:"4", t:"Zu den Drei Hirschen", p:20, pin:[50.1,36.8], wesen:["vagnhild","leanara","quasimund","bande","alfilia","wissen","fledermaeuse"],
    vl:"Ein beeindruckendes zweistöckiges Gebäude mit mächtigem Strohdach und Fachwerkwänden. Über der Tür hängt ein rotes Schild mit der Aufschrift „Zu den Drei Hirschen – Bier, Bett und Essen zu himmlischen Preisen“. Fröhliche Stimmen dringen auf die Straße, zusammen mit dem Duft von gebratenem Wildschwein.",
    st:[
     {"k":"Schankstube","x":"Die *Drei Hirschen* sind die Dorfkneipe. Von frühmorgens bis weit nach Mitternacht sitzen W12+1 Dorfbewohner und Besucher in der Schankstube – sie essen, trinken, tratschen und wärmen ihre Gelenke am großen Kamin. Köstliche Fleischeintöpfe und selbstgebrautes Bier oder Met werden zu normalen Gasthauspreisen serviert (Regelbuch S. 80)."},
     {"k":"Vagnhild","x":"Beim Eintreten werden die Spielercharaktere von Vagnhild begrüßt. Obwohl sie herrisch brummt, ist sie recht fröhlich und freundlich und spendiert jedem einen Krug Met aufs Haus. Sie bietet an, Fragen zur Gegend zu beantworten, und kann Gerüchte über Abenteuerorte im Nebeltal weitergeben (S. 17). Außerdem erzählt sie ihnen Folgendes:\n– In letzter Zeit wurden große Fledermäuse über den Dächern gesehen. Hardy hat versucht, mehrere von ihnen abzuschießen, bisher ohne Erfolg.\n– Ein Mystiker namens Dranath hat sich im Tempelbereich niedergelassen. Er ist eine unerschöpfliche Quelle des Wissens über die Vergangenheit und ein geschickter Heiler."},
     {"k":"Unterkunft","x":"Im Obergeschoss gibt es zehn Betten, verteilt auf zwei Doppelzimmer und einen Schlafsaal. Die Preise entsprechen denen im Regelbuch."},
     {"k":"Nachforschungen","x":"Man kann sich kaum einen besseren Ort vorstellen, um Informationen über das Nebeltal zu sammeln. Hinweise, die die Spielercharaktere an anderen Orten verpasst haben, lassen sich hier leicht unterbringen, etwa in Form eines Gerüchts oder eines fröhlichen Liedes."},
     {"k":"Leanara","x":"Die Sathmog-Kultistin Leanara verbringt die meiste Zeit in den *Drei Hirschen*, wo sie die Rolle einer munteren, scheinbar vertrauenswürdigen Magd namens Annabella angenommen hat. Sie wird nicht lange warten, bis sie Kontakt zu den Spielercharakteren aufnimmt, wie auf S. 15 beschrieben."},
     {"k":"Quasimunds Gesindel","x":"Unter den Gästen der Schankstube sind oft die betrunkene Ente Quasimund und seine Schlägerbande (so viele wie Spielercharaktere). Sie trinken Met und tauschen Seemannsgarn aus, während sie die anderen Gäste argwöhnisch anfunkeln. Sie alle haben ihre Seele an Sathmog verkauft und gehorchen Leanaras jedem Befehl."},
     {"k":"Alfilia Shadowleaf","x":"Ebenfalls im Gasthaus ist eine Ritterin der Hüter der Makellosen Flamme, Alfilia Shadowleaf – eine geschworene Feindin Sathmogs und seiner Spießgesellen, die aber wie sie nach Um-Durman sucht. Sie ist still und mürrisch und wirft Quasimund und seinen Schlägern misstrauische Blicke zu. Mehr dazu auf S. 22."},
     {"k":"Fledermäuse","r":1,"x":"Spielercharaktere, die das Gasthaus durchsuchen und einen §Entdecken§-Wurf schaffen, finden einen Käfig mit W3 schlafenden Fledermäusen, der vor einem Fenster im zweiten Stock hängt. Verstecken sie sich und beobachten das Fenster, sehen sie, wie Leanara innerhalb eines Tagesabschnitts eine der Fledermäuse holt. Mit einem gelungenen §Heimlichkeit§-Wurf können die Spielercharaktere ihr zum Tempelbereich folgen, wo sie die Fledermaus freilässt, nachdem sie ihr einen kleinen Zettel ans Bein gebunden hat."}
    ]},
   {n:"5", t:"Meister Ulvars Laden", p:22, pin:[47.8,21.6], wesen:["ulvar","jory"],
    vl:"Ein lang gestrecktes, fensterloses Blockhaus. Auf dem Dach grasen Ziegen am ungepflegten Gras. Über dem Eingang hängt ein maserig-hölzernes Schild, auf dem in geschwungenen Buchstaben „Meister Ulvars“ steht.",
    st:[
     {"k":"Meister und Sohn","x":"Der Laden wird vom stolzen Meister Ulvar geführt, unterstützt von seinem trägen und desinteressierten Sohn Jory."},
     {"k":"Waren","x":"Der Laden verkauft keine Waffen, Schilde oder Rüstungen, doch die meisten anderen Gewöhnlichen Gegenstände aus Kapitel 6 des Regelbuchs kann man bei Meister Ulvar kaufen."}
    ]},
   {n:"6", t:"Schmiede", p:24, pin:[40.3,26.7], wesen:["okald","badinor"],
    vl:"Ein großes Blockhaus mit offener Front. Durch den Rauch sieht man den Schein einer Esse, und an Haken an der Decke hängen allerlei Waffen und Rüstungsteile. Schwere Hammerschläge und ein melodisches Zwergenbrummen dringen auf den Dorfplatz hinaus.",
    st:[
     {"k":"Die Zwillinge","x":"Die Schmiede wird von Okald und Badinor geführt, Zwergenzwillingen aus den Kummerbergen, die sich nach einem schwierigen Erbstreit entschlossen, sich unter den Abenteurern in Außenposten niederzulassen. Der extravertierte Okald kümmert sich um die Kunden, während Badinor lieber in der Schmiede schuftet, mit dem Hammer als einziger Gesellschaft."},
     {"k":"Waffen","x":"Alle Gewöhnlichen und Ungewöhnlichen Waffen, Schilde und Rüstungen aus Kapitel 6 des Regelbuchs können bei Badinor und Okald gekauft werden. Seltene Gegenstände können bestellt werden und sind in einer Woche fertig. Die Zwillinge können auch beschädigte Waffen und Rüstungen reparieren, meist für den halben ursprünglichen Kaufpreis."}
    ]},
   {n:"7", t:"Die Mühle", p:24, pin:[51.0,77.6], wesen:["semolina","baryton"],
    vl:"Am Dorfrand steht eine kleine Windmühle, deren Flügel sich langsam im Wind drehen. Die Mühle ist mit einem Blockhaus verbunden, in dessen eingezäuntem Hof Ferkel, Hühner und unbekümmerte Kleinkinder herumlaufen. Ein fast unwiderstehlicher Duft frisch gebackenen Brotes umgibt den idyllischen Ort.",
    st:[
     {"k":"Herr und Frau Pausbacke (Chubbycheeks)","x":"Die Eheleute Semolina und Baryton Chubbycheeks führen die Dorfmühle. Sie sind Halblinge und wohnen im angrenzenden Häuschen mit ihren neun Kindern und unzähligen Haustieren."},
     {"k":"Feldrationen","x":"Die Eheleute betreiben auch eine bescheidene Bäckerei, in der die Spielercharaktere frisch gebackenes Brot für nur 3 Silbermünzen pro Tagesration kaufen können."}
    ]},
   {n:"8", t:"Der Tempelbereich", p:25, pin:[64.7,40.7], wesen:[],
    vl:"Ein Hügel mitten im Dorf mit verwitterten Säulen und den Resten einer Ringmauer. Auf dem Gipfel steht ein prächtiger, aber verfallener Tempel. Es ist ein friedlicher Ort, der den Eindruck vergangener Größe und uralter Geheimnisse ausstrahlt.",
    st:[
     {"k":"Der Tempel","x":"Das kreisrunde Hauptgebäude ist baufällig, doch die Decke ist von einem riesigen Symbol bedeckt. Ein gelungener §Mythen & Legenden§-Wurf offenbart, dass es eine stilisierte Krone derselben Art ist wie die auf den Meilensteinen im Nebeltal."},
     {"k":"Eingang zur Krypta","r":1,"x":"In einem der Mauerabschnitte rund um den Tempel ist eine kleine Nische eingemeißelt. Die Spielercharaktere finden sie, wenn sie genau an der richtigen Stelle suchen oder einen §Entdecken§-Wurf schaffen. In die Nische sind archaische Runen eingeritzt, die man mit einem gelungenen §Fremdsprachen§-Wurf lesen kann: „Eledain – Kaiser der Welt – Meister der Drachen – Hüter von Um-Durman.“ Am Boden der Nische befindet sich eine Vertiefung. Wird die vollständig zusammengesetzte Statuette in diese Vertiefung gestellt, öffnet sich der Eingang zur verborgenen Kapelle (Ort 10). Dabei bricht der Boden vor der Nische mit lautem Krachen ein und gibt eine grob behauene Steintreppe frei, die ins Dunkel hinabführt. Ein Spielercharakter, der an der Nische steht, muss einen §Ausweichen§-Wurf schaffen, sonst stürzt er vier Meter tief und erleidet Schaden nach den Regeln auf S. 53 im Regelbuch."},
     {"k":"Nächtliche Besuche","x":"Besuchen die Spielercharaktere den Tempel bei Nacht, sehen sie in der ersten Nacht Leanara. Sie schleicht sich in den Tempelbereich und lässt eine ihrer Fledermäuse frei, die mit einem unangenehmen Quieken über die Dächer davonflattert. Danach durchsucht sie etwa eine Stunde lang die Gegend, scheinbar ohne Erfolg, bevor sie in die *Drei Hirschen* zurückkehrt."},
     {"k":"Zufallsereignis","x":"Alle Zufallsereignisse (Tabelle „Zufallsereignisse“) können hier eintreten."}
    ]},
   {n:"9", t:"Dranaths Hütte", p:26, pin:[45.6,46.0], wesen:["dranath"],
    vl:"Eine schlichte Behausung mit Grasdach und Wänden aus gestapeltem Granit. Ein angrenzender Garten ist von einem niedrigen Zaun umgeben. Kräuterduftender Rauch quillt aus einer Öffnung im Dach.",
    st:[
     {"k":"Dranath","x":"In der verrauchten Hütte lebt der Mystiker Dranath. Er dient einigen örtlichen Göttern, die mit Feuer, Erde und Pflanzenwuchs verbunden sind. Die meiste Zeit verbringt er meditierend, verdient seinen Lebensunterhalt aber als Heiler."},
     {"k":"Heilmagie","x":"Dranath kann die Verletzungen der Spielercharaktere mit WUNDE HEILEN behandeln, zum Preis von 5 Goldmünzen pro Kraftstufe."},
     {"k":"Hinweise","x":"Stellen die Spielercharaktere die richtigen Fragen und schaffen einen §Überzeugen§-Wurf oder bieten ihm Met oder Süßigkeiten an, kann Dranath ihnen Folgendes erzählen:\n– Die Legende von Um-Durman (S. 9).\n– Vor tausend Jahren wurde das Nebeltal von einem Hexenmeister namens Azrahel Koth beherrscht, der dem Dämonenprinzen Sathmog diente. Azrahel Koth residierte in einer unheiligen Festung auf der nebelverhangenen Insel im Spiegelsee. Seine Überreste sollen in einer labyrinthischen Grabkammer unter der Insel ruhen.\n– Azrahel Koth wurde vom Helden Eledain mit Hilfe uralter Drachen besiegt. Eledain erklärte sich daraufhin zum Kaiser eines drachenverehrenden Reiches, das die gesamte bekannte Welt beherrschen sollte. Die Tempelruine in Außenposten stammt aus diesem Reich.\n– Eine geheimnisvolle Frau schleicht nachts im Tempelbereich herum, scheinbar auf der Suche nach etwas Verlorenem. Dranath hat sie in einer uralten Sprache mit einem anderen Wesen sprechen hören, das mit einem Quieken antwortete und davonflog."},
     {"k":"Lehrer","x":"Für eine Gebühr von 3 Goldmünzen pro Tagesabschnitt kann Dranath den Spielercharakteren seine Fertigkeiten und Zauber beibringen (S. 29 im Regelbuch)."}
    ]}
  ]},
  {id:"krypta", t:"Krypta", karte:{img:"abenteuer/aussenposten-krypta", p:27}, orte:[
   {n:"10", t:"Die Krypta von Um-Durman", p:26, wesen:["um-durman","heroisch"],
    vl:"Ein grabähnlicher Schrein mit leeren Fackelhaltern an den Wänden. Die Dunkelheit ist dicht, doch auf einem Steinaltar in der Mitte des Raums erkennt man ein juwelenbesetztes Großschwert, einen goldenen Kelch und ein aufgeschlagenes Buch. Wasser aus einem Brunnen in der Wand strömt in ein kleines Becken. In den Ecken stehen bedrohliche Statuen von Rittern in gehörnten Topfhelmen.",
    st:[
     {"k":"Dunkelheit","x":"Hier unten ist es stockfinster, die Abenteurer brauchen also eine Lichtquelle."},
     {"k":"Magische Falle","r":1,"x":"Wer das Schwert berührt, ohne zuvor das Gebet aus Eledains Gebetbuch zu sprechen und einen Schluck Wasser aus Eledains Kelch zu trinken, löst einen BLITZSCHLAG mit Kraftstufe 1 aus. Für jede Runde fortgesetzten Kontakts wird ein weiterer BLITZSCHLAG ausgelöst, bis die LADUNG der Falle von 20 WP erschöpft ist (jeder BLITZSCHLAG verbraucht 4 WP, da man sich in einem Gebäude befindet)."},
     {"k":"Eledains Gebetbuch","x":"Der dicke Wälzer ist auf einer Seite mit uralten, aber klaren Buchstaben aufgeschlagen. Sie zu lesen erfordert einen gelungenen §Fremdsprachen§-Wurf: „Heil dir, Kaiser der Welt – Herr des Lichts – Bestrafer der Unreinheit – Eledain für immer, in den Tiefen unserer reinen Herzen.“"},
     {"k":"Eledains Kelch","x":"Der goldene Kelch ist mit einer stilisierten Krone verziert, wie man sie hier und da im Nebeltal sieht."},
     {"k":"Um-Durman","x":"Das Schwert auf dem Altar ist natürlich die heiß begehrte Klinge Um-Durman, eine meisterlich gefertigte Waffe mit schönen Verzierungen und einem juwelenbesetzten Heft. Um-Durman ist ein Großschwert mit STÄ-Anforderung 13, Haltbarkeit 18 und einer besonderen Version von WAFFE VERZAUBERN mit DAUERHAFTIGKEIT – jedes Mal, wenn das Schwert einen Drachen oder Dämon trifft, zählt der Angriff automatisch als Drachenwurf."}
    ],
    nach:"**Leanaras Verrat:** Handeln die Spielercharaktere in Leanaras Auftrag – oder haben sie Informationen aus ihren Nachforschungen mit ihr geteilt –, arrangiert sie einen Hinterhalt vor dem Eingang und greift in dem Moment an, in dem sie aus der Kapelle auftauchen. Sie schickt einen Schwarm ihrer dämonischen Fledermäuse auf die Gruppe, während Quasimund mit seinen Schlägern herbeistürmt. Leanara wirft sich mit ihrem vergifteten Messer auf den Spielercharakter, der Um-Durman trägt."}
  ]}
 ],
 figuren:{}, kaesten:{}, tabellen:[]
};
