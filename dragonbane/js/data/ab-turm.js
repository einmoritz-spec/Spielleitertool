/* Der versinkende Turm (Turnierabenteuer, Buch „Der versinkende Turm“ S. 26–40) – deutsche Fassung. §…§ = Fertigkeit in Kapitälchen. Modell: plan/dragonbane/ABENTEUER_PLAN.md §2.
   Vorgefertigte Charaktere: ab-turm-sc.js (S. 39–52). */
window.DB_AB = window.DB_AB || {};
DB_AB.turm = {
 id:"turm", t:"Der versinkende Turm", band:"st", buch:"db_st", p:26, img:"abenteuer/turm-titel", kurz:"7 Orte",
 vl:"Der Seewind heult, und der Geruch von Tang und Verwesung beißt euch in die Nasen. Ihr zieht eure Umhänge enger um euch, während das Ruderboot durch die unruhige See auf sein Ziel zuhält. Dann lichtet sich der Nebel und gibt den Blick auf den versinkenden Turm frei, der aus dem Wasser ragt. Dies ist der Augenblick, auf den ihr alle gewartet habt: der Tag, an dem der verzauberte Steinturm, den ein verrückter Magier erbaut haben soll, wieder aus dem Meer aufsteigt. Das geschieht nur alle zwanzig Jahre, wie die Fischer am wärmenden Kamin des Gasthauses erzählten, und der Turm bleibt nur zwei Stunden über Wasser. Dann versinkt er samt seinen Schätzen wieder in der Tiefe. An der Spitze des Turms glimmt ein geisterhaft grünes Licht unheilvoll. Dort soll der Smaragd des Zauberers liegen. Vielleicht seid ihr die Ersten, die ihn finden?",
 lage:[
  "Willkommen bei *Der versinkende Turm*, einem Turnierabenteuer für das Rollenspiel *Dragonbane*! Es stellt selbst die erfahrensten Abenteurer vor schwierige Herausforderungen. Die Spieler müssen zusammenarbeiten, um Rätsel zu lösen, Kämpfe zu gewinnen und wertvolle Schätze zu finden – und das alles in nur zwei Stunden!",
  {h:"Die Lage", p:26},
  "Vor langer Zeit lebten zwei Geschwister am Ufer eines großen Meeres. Kamandur und Magdala standen sich schon als Kinder nahe. Sie erkundeten die Strände, Klippen und Wälder rund um ihr kleines Häuschen am Meer und sahen Muster und Kräfte, wo andere keine sahen. Bald erkannten ihre Eltern, dass die Kinder ein Händchen für das Studium der Magie hatten. Sie schickten die Geschwister zu einem alten Einsiedler im Wald in die Lehre und sahen zu, wie ihre Kräfte wuchsen.",
  "Als die Eltern schließlich starben, waren die Geschwister erwachsen. Sie lebten weiter in dem kleinen Häuschen am Meer und verbrachten ihre Tage mit dem Studium der Magie und arkanen Experimenten. Eines Tages, als Kamandur im Wald Kräuter sammelte, geschah etwas, das alles verändern sollte. Ein Piratenschiff ging vor der Küste vor Anker, um Vorräte aufzunehmen. Da das Haus der Geschwister das einzige in der Gegend war, wurde es geplündert, und Magdala wurde von den brutalen Piraten getötet.",
  "Als er zurückkehrte, fand Kamandur sein Haus niedergebrannt und seine Schwester tot am Strand. Seine ganze Welt brach zusammen – als sei etwas in ihm zerbrochen. Er schwor, seine Schwester tausendfach zu rächen.",
  "Mit der Zeit wurde Kamandur zu einem mächtigen Zauberer, der durch die Welt reiste, doch die Gedanken an seine tote Schwester verfolgten ihn unaufhörlich. Kamandur erinnerte sich an die Legende vom Lindwurm Krakul, der im Meer hausen sollte und dessen Blick jeden, der ihm begegnete, verhexte und in die Irre führte. Kamandur suchte den Lindwurm auf und stahl eines seiner Augen – einen grünen Smaragd mit schrecklichen Kräften.",
  "Der Zauberer baute einen Steinturm am Meer. Er nannte ihn Magdalas Turm, und an dessen Spitze bettete er seine Schwester in einem prächtigen Sarkophag aus schwarzem Stein zur Ruhe. Auf einem Podest daneben legte er das Smaragdauge des Lindwurms nieder. Dann setzte er seinen Plan in die Tat um.",
  "Unzählige Schiffe fanden an scharfen Felsen ihr Ende, nachdem sie das grüne Leuchten von Magdalas Turm gesehen hatten. Piraten- und Handelsschiffe gingen gleichermaßen unter, denn der Zauberer unterschied in seinem Zorn nicht zwischen seinen Opfern. Doch Kamandur genügte das nicht. Nichts konnte ihn den frühen Tod seiner Schwester vergessen lassen. Und so lockte er weiter Schiffe in den Untergang, bis er eines Tages im Bett an Altersschwäche starb. Als Kamandur dahinschied, verlor der Turm den größten Teil seiner magischen Kraft. Er sank unter den Meeresspiegel und verschwand. Doch nicht für immer.",
  "So groß war Kamandurs Trauer, dass Magdalas Turm sein unheiliges Werk auch fortsetzte, nachdem der Zauberer selbst diese Welt verlassen hatte. Seither steigt der Turm alle zwanzig Jahre am Todestag Magdalas vom Meeresgrund auf, aber nur für wenige Stunden, bevor er wieder verschwindet. Viele Abenteurer haben versucht, die Spitze des Turms zu erreichen und den unschätzbaren Smaragd zu stehlen, doch keinem ist es gelungen. Nun ist der Turm erneut aus dem Meer aufgestiegen, und sein geisterhaft grünes Licht scheint wieder über dem Wasser. Werden die Abenteurer der Spieler dort Erfolg haben, wo andere gescheitert sind?",
  {h:"Hinweise fürs Spielen auf Conventions", p:27},
  "*Der versinkende Turm* ist so angelegt, dass man es im Turnier spielen kann. Dabei gilt ein strenges Zeitlimit von zwei Stunden. Sind die zwei Stunden vorbei, versinkt der Turm wieder in den Wellen, und jeder Spielercharakter, der nicht hinausspringt, ertrinkt (S. 37). Außerdem sammelt die Spielgruppe Punkte nach einer Wertungstabelle auf S. 38. Hier ein paar Tipps für die SL:",
  {ul:[
   "**Das Tempo halten.** Vergisst du eine Regel oder ein Detail, triff eine schnelle Einschätzung und spiel weiter.",
   "**Die Spieler entscheiden lassen.** Dieses Abenteuer ist ziemlich geradlinig. Lies oder spiele für jedes Stockwerk die Einleitung vor und beschreibe dann den Inhalt des Stockwerks, während die Spieler es erkunden. Wollen die Spieler sich auf etwas Bestimmtes konzentrieren oder untereinander etwas besprechen, lass sie.",
   "**Die Zeit im Blick behalten.** Stelle einen Timer auf eine Stunde und platziere ihn dort, wo die Spieler ihn sehen können. Ist die Stunde vorbei, halte das Spiel an und lies den Spielern den Kasten *Die Uhr tickt* unten vor. Starte dann den Timer erneut. Nun bleibt noch eine Stunde für das Abenteuer.",
   "**Tote Spielercharaktere ersetzen.** Es ist möglich, dass ein Spielercharakter während des Abenteuers stirbt. Sorge in diesem Fall dafür, dass der Spieler einen neuen Charakter bekommt: den Zwerg Alberic Gleamheart oder die Seefahrerin Betrix Farsail. Sie sind in der Schatzkammer (Ort 4) bzw. im Labor (Ort 5) zu finden.",
   "**Kreative Ideen belohnen.** Haben die Spieler eine kluge Lösung für ein Problem, die Sinn ergibt, lass sie gelingen. Haben sie zum Beispiel das Rätsel des Stockwerks gelöst, können sie einem Kampf aus dem Weg gehen, indem sie ins nächste Stockwerk laufen.",
   "**Spaß haben!** Am Ende des Tages geht es darum, Spaß zu haben. Das Turnier ist eine Verneigung vor den Spielekongressen vergangener Zeiten und sollte nicht zu ernst genommen werden. Steh auf der Seite der Spieler und sorge dafür, dass jeder am Tisch zu Wort kommt."
  ]},
  {stein:{h:"Die Uhr tickt", b:[
   "Lies den folgenden Text vor, wenn genau eine Stunde Spielzeit vergangen ist.",
   {zit:["Plötzlich bebt der Boden unter euren Füßen, und für einen Moment fühlt es sich an, als würde der ganze Turm schwanken. Ihr hört ein fernes Grollen, und ein Gefühl des Sinkens breitet sich in eurer Magengrube aus. Der Turm versinkt im Meer! Doch das Geräusch verstummt so schnell, wie es begann, und der Turm stabilisiert sich wieder. Er kann nur wenige Meter eingesunken sein. Wenn die Legende wahr ist, bleibt euch nur noch eine Stunde, bevor der Rest des Turms unter der Oberfläche verschwindet."]},
   "Starte den Timer neu und spiele weiter."
  ]}},
  {stein:{h:"Schatzkarten", b:[
   "Mehrere Orte im Abenteuer bergen Schätze, die mit einer zufälligen Schatzkarte aus dem *Dragonbane*-Grundset bestimmt werden können. Normalerweise wird der Wert solcher Schätze sofort ausgewürfelt und notiert, doch in diesem Abenteuer sollen die Spieler ihre Schatzkarten behalten, da sie am Ende des Abenteuers bei der Wertung gebraucht werden (S. 38).",
   "Hast du keinen Zugang zu den Schatzkarten, kannst du beliebige Karten oder Marker verwenden – die Wertung hängt nur von der Anzahl der gefundenen Schätze ab, nicht von deren Inhalt. Solche „undefinierten“ Schätze zählen nicht zur Traglast der Spielercharaktere."
  ]}},
  {h:"Der einäugige Mann", p:28},
  "In einem Ruderboot am Fuß des Turms steht ein alter Mann in einer braunen Robe. Sein Gesicht ist verwittert und vom Alter gezeichnet, und eine schwarze Augenklappe bedeckt sein linkes Auge. Er beginnt zu sprechen:",
  {zit:["„Ihr seid nicht die Ersten, die nach dem greifen, was ihnen nicht gehört, aber ich hoffe, ihr seid die Letzten. Wer ich bin, spielt keine Rolle, doch oben im Turm liegt etwas, das mir gehört. Ein grüner Smaragd, der mir vor langer Zeit gestohlen wurde. Bringt mir den Smaragd, und ihr dürft alle übrigen Schätze behalten, die ihr dort drinnen findet. Als Gegenleistung biete ich euch ein Lebenselixier. Wer es trinkt, wird aus dem Reich der Toten zurückgeholt.“"]},
  "Der alte Mann, der in Wahrheit der Lindwurm Krakul in Menschengestalt ist, hält eine Glasflasche mit grüner Flüssigkeit hin. Nimmt einer der Charaktere das Angebot an, erhält er das Elixier, wenn er verspricht, den Smaragd an den alten Mann zurückzugeben. Das spielt später im Abenteuer bei der Konfrontation im Observatorium (Ort 7) eine Rolle. Die Flasche enthält eine Dosis Elixier, durch die ein Spielercharakter mit 0 TP automatisch wieder zu sich kommt und keine Todeswürfe mehr ablegen muss. Das Elixier hat keine Wirkung bei sofort tödlichen Wunden.",
  {stein:{h:"Den Turm erklimmen", b:[
   "Ein Spielercharakter kann die Außenseite des Turms erklettern, doch das ist nicht leicht. Dafür ist für jedes Stockwerk ein gelungener §Akrobatik§-Wurf mit einem Nachteil nötig. Bei einem Fehlschlag verliert der Abenteurer den Halt und stürzt ins Meer. Das Opfer erleidet keinen Schaden, muss aber einen Zustand wählen. Ein erfolgreicher Kletterer kann den Turm durch Fenster im vierten und fünften Stockwerk betreten."
  ]}},
  {h:"Orte", p:28},
  "Hier sind einige Orte, die die Spielercharaktere im und um den versinkenden Turm erkunden können."
 ],
 bereiche:[
  {id:"statuengalerie", t:"Statuengalerie", karte:{img:"abenteuer/turm-karte-statuengalerie", p:29}, orte:[
   {n:"1", t:"Statuengalerie", p:28, wesen:["turm-statue-kamandur","turm-statue-magdala"],
    vl:"Mit einem Knarren öffnet sich die schwere Holztür nach innen. Der Gestank von Seetang schlägt euch aus dem Inneren des Turms entgegen. Eine große Steinhalle, zweifellos einst prächtig, liegt nun wie eine Parodie ihrer selbst vor euch. Der Steinboden steht eine Handbreit unter Wasser. Ein Wandbild an der Nordwand ist von verrottendem Seetang bedeckt. Euch gegenüber, in der Mitte des Raums, stehen zwei hohe Statuen aus Stein. Zwischen ihnen glaubt ihr unter dem flachen Wasser auf dem Boden etwas zu erkennen.",
    st:[
     {k:"Wandbild", x:"Die gegenüberliegende Wand ist mit einem Wandbild einer idyllischen Szene bedeckt: ein Häuschen am Meer, zwei spielende Kinder, Vögel, die über das Wasser gleiten."},
     {k:"Kupferplatten", x:"Sechs runde Platten aus grünem Kupfer von je einem Meter Durchmesser sind zwischen den Statuen in den Boden eingelassen. Wer sie untersucht und einen §Entdecken§-Wurf schafft, erkennt, dass es Druckplatten sind. Drückt jemand fest darauf oder stehen mehrere Platten gleichzeitig unter Druck, ertönt ein lautes Klicken. Was dann geschieht, hängt davon ab, wie viele Platten gedrückt werden.\n– **Eine, drei, vier, fünf oder sechs Platten werden gedrückt:** Ein Blitz schlägt aus der Decke und verursacht bei jedem, der auf dem überfluteten Boden steht, W6 Schaden. Rüstung wirkt nicht.\n– **Zwei Platten werden gedrückt:** Von der Decke ist ein leises Grollen zu hören, und in der südwestlichen Ecke des Raums entfaltet sich auf magische Weise eine Steintreppe. Die Treppe führt zum nächsten Stockwerk. Beachte, dass zwei Platten exakt gleichzeitig gedrückt werden müssen, um die Treppe zu öffnen."},
     {k:"Handsymbol", x:"Genau in der Mitte des Raums ist eine riesige Hand in den Steinboden gemeißelt."},
     {k:"Treppe in die Tiefe", x:"Am anderen Ende der Halle befindet sich eine Öffnung, durch die eine Steintreppe ins Wasser hinabführt. Die Treppe führt zum Keller (Ort 2), der vollständig unter Wasser liegt."}
    ],
    b:[{stein:{h:"Der Turm und die Zahl Zwei", b:[
   "Kamandur war besessen von seiner toten Schwester. Sein ganzes Leben drehte sich um ihr Andenken. Gemeinsam waren sie eine Einheit, weshalb der größte Teil des Turms im Zeichen der Zahl Zwei entworfen wurde. Das müssen die Spieler nicht verstehen (auch wenn es ihnen vieles erleichtern würde), aber als SL solltest du die Gegenwart der Geschwister im Turm betonen. Die beiden sind auf den Wandbildern zu sehen, es gibt zwei Statuen, der Turm steigt zwei Stunden lang auf und so weiter. Die Zahl Zwei ist die Lösung mehrerer Rätsel im Turm, etwa der Kupferplatten im untersten Stockwerk oder der Symbole, mit denen die Rätsel zwei Stockwerke höher gelöst werden."
   ]}}]
   }
  ]},
  {id:"keller", t:"Keller", karte:{img:"abenteuer/turm-karte-keller", p:30}, orte:[
   {n:"2", t:"Keller", p:30, wesen:["turm-aal"],
    vl:"Das kalte Wasser ist dunkel und trüb, doch im Dunkeln lässt sich der Umriss eines ehemaligen Kellers erkennen. Das Bild eines Auges ist in den Steinboden gemeißelt und starrt euch an.",
    st:[
     {k:"Unter Wasser", x:"Der gesamte Keller liegt unter dem Meeresspiegel, sodass die Spielercharaktere schwimmen müssen, um sich fortzubewegen. Wer sich durch den Keller bewegen oder etwas untersuchen will, muss einen §Schwimmen§-Wurf (keine Aktion) schaffen, um sich im schwarzen Wasser zurechtzufinden. Außerdem müssen die Charaktere in jeder Runde einen KON-Wurf schaffen, um unter Wasser die Luft anzuhalten (S. 19)."},
     {k:"Monsteraal", r:1, x:"Ein drei Meter langer Monsteraal hat sein Nest in der südwestlichen Ecke des Kellers. Er überfällt (S. 13) die Spielercharaktere, kurz nachdem einer von ihnen ins Wasser geschwommen ist."},
     {k:"Auge", x:"Ein großes Auge ist in den Boden gemeißelt. Es liegt an derselben Stelle und hat dieselbe Größe wie die Hand in der Statuengalerie. Das Auge ist ein Hinweis auf das Rätsel in der Bibliothek, zwei Stockwerke höher (Ort 3)."},
     {k:"Galionsfiguren", x:"In der nordwestlichen Ecke des Kellers lehnen ein Dutzend verrottete Galionsfiguren an der Wand. Ihre grinsenden Gesichter zwingen jeden, der in ihrer Nähe schwimmt, zu einem WIL-Wurf. Ein Spielercharakter, der scheitert, erhält automatisch Ergebnis 2 auf der Furcht-Tabelle (S. 19) und wird damit Verängstigt."},
     {k:"Fässer", x:"In der südöstlichen Ecke des Kellers sind zwanzig zerbrochene Fässer übereinandergestapelt. Ein Spielercharakter, der die Fässer untersucht und einen §Entdecken§-Wurf schafft, findet einen zufälligen Schatz."},
     {k:"Öffnung", x:"Die südwestliche Ecke des Kellers klafft zum Meer hin offen. Wer sich der Öffnung nähert, kann in kurzer Entfernung vom Turm auf dem Meeresgrund gerade so ein Schiffswrack erkennen."},
     {k:"Schiffswrack", r:1, x:"Das alte Wrack eines Zweimasters ruht auf einem Felsen auf dem Meeresgrund. Es ist in schrecklichem Zustand, und eine große Öffnung erlaubt den Charakteren hineinzuschwimmen. Es braucht zwei gelungene §Schwimmen§-Würfe, um das Wrack zu erreichen und zu betreten. Wer sich nähert, kann den Umriss seines Namens am Rumpf erkennen: Die Blaue Medusa. Im Inneren sind zwei zufällige Schätze zu finden."}
    ]}
  ]},
  {id:"bibliothek", t:"Bibliothek", karte:{img:"abenteuer/turm-karte-bibliothek", p:31}, orte:[
   {n:"3", t:"Bibliothek", p:31, wesen:["turm-geist"],
    vl:"Hohe Bücherregale, die vom Boden bis zur Decke reichen, bilden ein kleines Labyrinth. Die durchhängenden Regale sind vollgestopft mit ledergebundenen Bänden, und der Raum riecht nach Papier und Schimmel. Aus der Mitte des Raums hört ihr ein leises Kratzen.",
    st:[
     {k:"Das Buch", r:1, x:"Spielercharaktere, die sich ein beliebiges Buch ansehen, erkennen, dass es *Das Leben und der frühe Tod der Magdala* heißt und von jemandem namens Kamandur mit Hilfe des Schreibers Arlidus verfasst wurde. Die durchweichten Seiten sind schwer zu entziffern, doch ein gelungener §Fremdsprachen§-Wurf zeigt, dass der Band Huldigungen an die verstorbene Magdala und Flüche auf die Piraten enthält, die sie getötet haben. Sehen sich die Charaktere andere Bücher an, merken sie schnell, dass alle Bücher der Bibliothek identisch sind."},
     {k:"Geist des Bibliothekars", x:"An einem Schreibtisch in der Mitte der Bibliothek sitzt eine Gestalt in einer Robe, über ein Pergament gebeugt, und kratzt mit ihrer Feder darauf herum. Es ist der Geist des Bibliothekars Arlidus, der seinen Dienst auch nach dem Tod getreu fortsetzt und noch leichter zu stören ist als zuvor. Beim kleinsten Geräusch wendet sich der Geist mit einem lauten Pst! der Geräuschquelle zu.\nDie Spielercharaktere müssen in jeder Runde einen §Heimlichkeit§-Wurf schaffen, um etwas anderes zu tun, als reglos dazustehen. Beim ersten Fehlschlag gerät der Geist in Wut und erschreckt die Charaktere: Alle in Sichtweite erleiden einen Furchtangriff. Beim zweiten Fehlschlag greift der Geist an. Sind alle Spielercharaktere in ihrem Zug still und untätig, hört der Geist sofort auf anzugreifen und kehrt zu seiner untoten Arbeit zurück und kritzelt weiter, als wäre nichts geschehen."},
     {k:"Schiffsbild", x:"Das Bild eines Schiffes ist in der Mitte des Raums in den Steinboden gemeißelt. Es ist ein Hinweis auf das Rätsel im Labor, zwei Stockwerke höher (Ort 5)."},
     {k:"Podeste", x:"Vor einem der Bücherregale stehen drei hölzerne Podeste, einen Meter hoch. Auf jedem liegt ein Buch mit einem eingravierten Symbol auf dem Einband. Das linke Buch zeigt ein Schwert, das mittlere ein Kreuz, das rechte ein Auge. Öffnen die Charaktere ein Buch, ertönt ein lautes „Klick“, gefolgt vom Knarren einer sich öffnenden Tür. Das Buch mit dem Schwert öffnet die nördliche Tür (siehe unten), das Buch mit dem Kreuz die südliche – wodurch leider der Geist des Bibliothekars sofort angreift (sofern er nicht bereits besiegt ist). Das rechte Buch (das mit dem Auge) öffnet die östliche Tür, wodurch der Geist nicht alarmiert wird."},
     {k:"Geheimtüren", r:1, x:"Es gibt drei Geheimtüren, die jeweils zu einem geheimen Raum führen. Sie lassen sich von einem Spielercharakter finden, der die Bibliothek sorgfältig durchsucht und einen §Entdecken§-Wurf schafft oder zufällig genau an der richtigen Stelle nachsieht. Am leichtesten lassen sich die Geheimtüren mit den Podesten öffnen, sie können aber auch mit einem §Fingerfertigkeit§-Wurf mit einem Nachteil aufgehebelt werden. In den Räumen hinter der nördlichen und der südlichen Tür liegt je ein zufälliger Schatz. Hinter der östlichen befindet sich eine Treppe hinauf zur Schatzkammer (Ort 4)."}
    ]}
  ]},
  {id:"schatzkammer", t:"Schatzkammer", karte:{img:"abenteuer/turm-karte-schatzkammer", p:33}, orte:[
   {n:"4", t:"Schatzkammer", p:32, wesen:["turm-skelett","turm-alberic"],
    vl:"Zehn Holztruhen stehen fächerförmig in der Halle aufgereiht, fünf auf jeder Seite. Entlang der Wände stehen fünf Plattenrüstungen, mit Dreizacken bewaffnet. Durch die Lücken der Rüstungen erkennt ihr die Umrisse grinsender Skelette. An der Nordwand ist ein verblasstes Wandbild zu sehen.",
    st:[
     {k:"Skelettwächter", r:1, x:"In den uralten, von Wasser und Seetang grün verfärbten Rüstungen stecken fünf Skelette, die zum Leben erwachen und angreifen, wenn jemand sie oder eine der Truhen berührt."},
     {k:"Truhen", x:"Sie sind unterschiedlich lang und ähneln mit etwas Fantasie zwei Händen, deren „Daumen“ die Truhen sind, die der Nordwand am nächsten stehen. Drei der zehn Truhen enthalten Schätze, die übrigen sind Fallen.\nDer Schlüssel zu den richtigen Truhen sind die Hände der Statuen in der Statuengalerie, zwei Stockwerke tiefer (Ort 1). Die Statue des Kamandur steht auf der Westseite und hebt ihren rechten Zeigefinger – das bedeutet, dass auf der Westseite der Schatzkammer die zweite Truhe von Norden die richtige ist. Die Statue der Magdala steht auf der Ostseite und hebt den linken Mittel- und Ringfinger. Auf der Ostseite enthalten also die Truhen drei und vier einen Schatz.\nSind zwei der richtigen Truhen geöffnet, ist ein Grollen zu hören, und aus der Südwand des Raums faltet sich eine Steintreppe heraus. Öffnet ein Spielercharakter eine falsche Truhe, öffnet sich neben ihr eine Falltür im Boden, und der Charakter fällt durch einen Gang zur Außenmauer und stürzt ins Meer (siehe unten). Unmittelbar darauf erwachen die Skelettwächter zum Leben und greifen die übrigen Charaktere in der Schatzkammer an."},
     {k:"Sonnensymbol", x:"In der Mitte des Raums ist ein Symbol in Form einer Sonne in den Steinboden gemeißelt. Es ist ein Hinweis auf die Zaubererkammer, zwei Stockwerke höher (Ort 6)."},
     {k:"Wandbild", x:"Eine gemalte Szene zeigt zwei junge Menschen, die sich an einem Strand an den Händen halten. Sie scheinen von magischer Energie umgeben zu sein und schweben leicht über dem Boden. Sie wirken glücklich."},
     {k:"Das Meer", r:1, x:"Spielercharaktere, die ins Meer stürzen, müssen einen Zustand wählen und einen §Schwimmen§-Wurf schaffen, um in den Turm zurückzukehren. Jeder Versuch zählt als Aktion. Zurück im Turm muss der Charakter pro Stockwerk einmal sprinten – es dauert also zwei Runden, von der Statuengalerie (Ort 1) zur Schatzkammer zu gelangen."},
     {k:"Der Abenteurer", r:1, x:"Besiegen die Spielercharaktere die Skelette, hören sie ein leises, gedämpftes Geräusch unter einer der leeren Truhen, die sie nicht berührt haben. Öffnen sie die Truhe vorsichtig mit einem langen Gegenstand, können sie die Falltür auslösen, ohne selbst hinunterzufallen. Dann hören sie eine tiefe Stimme rufen: „Hallo da! Ich könnte hier unten etwas Hilfe gebrauchen!“ Es ist der Zwerg Alberic Gleamheart (S. 33), der den Turm erkundete und versehentlich in eine Falltür gefallen ist.\nEr konnte sich jedoch am Rand des Schachts festhalten und steckt nun fest. Indem sie ein Seil hinabwerfen oder mit einem gelungenen §Akrobatik§-Wurf hinabklettern, können die Charaktere Alberic heraufhelfen. Aus Dankbarkeit gibt er ihnen einen zufälligen Schatz und sagt dann, er habe genug Abenteuer gehabt, und bittet darum, im Ruderboot der Abenteurer warten zu dürfen.\nBeachte, dass Alberic als Ersatzcharakter dienen soll, falls einer der Abenteurer stirbt. Ein Spieler kann also bei Bedarf seine Rolle übernehmen."}
    ]}
  ]},
  {id:"labor", t:"Labor", karte:{img:"abenteuer/turm-karte-labor", p:34}, orte:[
   {n:"5", t:"Labor", p:33, wesen:["turm-betrix","turm-spinne"],
    vl:"Das gesamte Stockwerk ist von Holzregalen und Werkbänken gesäumt, übersät mit zerbrochenem Glas und dem, was nach Überresten alter Experimente aussieht. In der Mitte des Raums steht ein zwei Meter hoher, gewölbter Eisenkäfig, und in der Dunkelheit darin seht ihr eine Gestalt, die euch beobachtet.",
    st:[
     {k:"Käfig", x:"Der Käfig scheint Teil einer Falle gewesen zu sein, die ausgelöst wurde und herabfiel, um Eindringlinge zu fangen.\nDie Gefangene im Käfig ist Kapitänin Betrix Farsail, die frühere Gefährtin des Zwergs Alberic (siehe Ort 4). Sie will unbedingt befreit werden und dem Turm nicht in die Tiefe folgen. Betrix versucht, die Charaktere durch Drohungen, Schmeicheleien, Einschüchterung und Bestechung dazu zu bringen, sie freizulassen. Den Käfig anzuheben erfordert einen STÄ-Wurf mit einem Nachteil (mehrere Spielercharaktere können gemeinsam anpacken). Betrix kann als Ersatzcharakter dienen, falls einer der Abenteurer stirbt. Andernfalls erkundet sie den Turm auf eigene Faust."},
     {k:"Lindwurmbild", r:1, x:"Das Bild eines Lindwurms ist in der Mitte des Raums in den Steinboden gemeißelt. Vom Eisenkäfig umgeben, ist es nicht zu sehen, bis der Käfig angehoben wird oder Betrix verrät, wie es aussieht. Der Lindwurm ist ein Hinweis auf das Rätsel im Observatorium (Ort 7)."},
     {k:"Elixier", x:"Eine Flasche auf einer der Werkbänke ist völlig unversehrt und enthält eine klare rote Flüssigkeit. Die Flasche enthält ein Elixier, das Kamandur für seine Schrumpfmagie entwickelt hat (ein Magier kann spüren, dass der Inhalt der Flasche magisch ist). Wer das Elixier trinkt, schrumpft sofort auf eine Körpergröße von etwa 10 Zentimetern. Ein geschrumpfter Spielercharakter erhält einen Vorteil auf alle §Heimlichkeit§-Würfe, kann aber niemals mehr als einen Schadenspunkt pro Angriff verursachen. Der Zauber endet, wenn der Spielercharakter mit Wasser in Berührung kommt, und kann auch durch den Zauber §Bannen§ gebrochen werden."},
     {k:"Zaubereirezept", r:1, x:"Ein Spielercharakter, der die Werkbänke sorgfältig untersucht oder im Raum einen §Entdecken§-Wurf schafft, findet ein Pergament, auf dem jemand Teile einer magischen Formel notiert hat. Mit einem gelungenen §Fremdsprachen§-Wurf erkennt der Charakter, dass es ein Rezept zum Schrumpfen von Gegenständen und Wesen ist. Ein Wurf auf §Mythen & Legenden§ oder §Elementarismus§ enthüllt, dass sich die Schrumpfmagie brechen lässt, indem man den Gegenstand mit Wasser in Berührung bringt."},
     {k:"Glasgefäße", x:"Auf einem Regal an der Westwand liegt eine Mischung aus zerbrochenem Glas und einigen unversehrten Gefäßen. Die zerbrochenen Gefäße enthalten etwas, das wie verrottete organische Masse aussieht. Das nördlichste Gefäß ist jedoch völlig intakt und enthält eine schwarze, behaarte Spinne. Die Spinne ist in Wahrheit eine Riesenspinne (S. 35). Wird das Gefäß zerdrückt und kommt die Spinne mit Wasser in Berührung (ein Spritzer genügt), wächst sie gewaltig und greift sofort die nächste Bedrohung an."},
     {k:"Schiff in der Flasche", x:"Auf einem Regal an der Ostwand liegen mehrere zerbrochene Glasgefäße und die Überreste kleiner Modellschiffe. In der Mitte des Regals steht ein unversehrtes Schiff in einer Flasche. Sobald das Schiff vom Regal genommen wird, ist ein Grollen zu hören, und die Treppe zum nächsten Stockwerk faltet sich aus.\nDas Schiff ist erstaunlich detailreich und muss von einem wahren Meister gefertigt worden sein. Tatsächlich ist es ein echtes Schiff, das Kamandur geschrumpft hat. Passiert nichts, wenn die Flasche zerbrochen wird, doch kommt das Miniaturschiff mit Wasser in Berührung, ist der Zauber sofort gebrochen und das Schiff wächst auf seine wahre Größe."}
    ],
    b:[{stein:{h:"Die Experimente", b:[
   "Im Labor gibt es drei potenziell mächtige Artefakte – eine geschrumpfte Riesenspinne, ein geschrumpftes Piratenschiff und ein Elixier, das den Trinkenden schrumpfen lässt. Clevere Spieler können sie auf vielerlei Weise einsetzen:",
   {ul:[
    "Die Spinne kann gegen die Galionsfiguren in der Zaubererkammer (Ort 6) eingesetzt werden. Würfle nicht für die Angriffe der Spinne – stattdessen erledigen die Spinne und eine der Galionsfiguren einander, was den Spielercharakteren die Mühe erspart, sich mit ihnen zu befassen.",
    "Die Spinne kann den Lindwurm im Observatorium (Ort 7) ablenken, sodass die Spielercharaktere fliehen können.",
    "Das Schiff kann dazu dienen, am Ende des Abenteuers aus dem Turm zu fliehen oder den Lindwurm abzulenken.",
    "Das Elixier kann dem Lindwurm ins Maul geschüttet werden (erfordert einen gelungenen Wurf mit einem Nachteil auf eine beliebige GEW-basierte Waffenfertigkeit). Das Biest schrumpft sofort zu einer harmlosen kleinen Schlange, die einen niedlichen Quieklaut von sich gibt. Doch sobald sie mit Wasser in Berührung kommt, ist der Zauber sofort gebrochen, und der Lindwurm hat wieder normale Größe."
   ]}
   ]}}]
   }
  ]},
  {id:"zaubererkammer", t:"Zaubererkammer", karte:{img:"abenteuer/turm-karte-zaubererkammer", p:35}, orte:[
   {n:"6", t:"Zaubererkammer", p:35, wesen:["turm-galionsfiguren","turm-spinne"],
    vl:"Schwere dunkle Vorhänge verhüllen die Fenster und tauchen das ganze Stockwerk in Schatten und Düsternis. An der Nordwand steht ein prächtiges Himmelbett, dessen geschlossene Vorhänge sein Inneres verbergen. An der Südwand ist ein weiteres Wandbild. In den vier Ecken des Raums erkennt ihr die Umrisse riesiger, furchterregender Galionsfiguren in Gestalt von Bestien mit grinsenden Kiefern.",
    st:[
     {k:"Galionsfiguren", x:"Sie sind magisch von Kamandurs Kräften aufgeladen und erwachen zum Leben, sobald jemand sie, einen Vorhang oder das Himmelbett berührt. Geschieht das, greifen sofort alle vier an (siehe S. 36)."},
     {k:"Vorhänge", x:"Schwere Vorhänge bedecken die vier Wände des Raums vom Boden bis zur Decke. Sie lassen sich mühsam mit einem Seil in jeder Ecke zur Seite ziehen (die Vorhänge einer Wand zur Seite zu ziehen zählt als Aktion eines Spielercharakters).\nHinter den Vorhängen liegen große Fenster, durch die Licht in den Raum strömt. Für jeden geöffneten Vorhang erstarrt eine Galionsfigur und wird wieder leblos. Wird der vierte Vorhang zur Seite gezogen, entfaltet sich die Treppe zum Observatorium (Ort 7) aus der Decke."},
     {k:"Wandbild", r:1, x:"Eine gemalte Szene an der Südwand zeigt denselben Strand wie die beiden anderen Wandbilder. Dunkle Wolken umrahmen das Bild, in dem der junge Mann neben etwas kniet, das der Leichnam der jungen Frau zu sein scheint. Das Haus brennt. Im Hintergrund segelt ein Schiff vom Ufer davon."},
     {k:"Himmelbett", x:"Das Himmelbett hat zugezogene Vorhänge, die sein Inneres verbergen. Im Bett liegt der wächserne Leichnam eines bärtigen alten Mannes, die Hände über der Brust gefaltet. Es ist der Leichnam des Zauberers Kamandur selbst. Auf der Leiche ist ein zufälliger Schatz zu finden."}
    ]}
  ]},
  {id:"observatorium", t:"Observatorium", karte:{img:"abenteuer/turm-karte-observatorium", p:36}, orte:[
   {n:"7", t:"Observatorium", p:36, wesen:["turm-krakul"],
    vl:"Die Spitze des Turms besteht aus einer großen Glaskuppel, in ein unnatürliches grünes Licht getaucht. Vor der Kuppel erstreckt sich das Meer in alle Richtungen, und ein Balkon umläuft den Turm. In der Mitte des Raums steht ein steinernes Podest, auf dem zwei hell leuchtende, smaragdartige Steine liegen. Am nördlichen Ende des Stockwerks steht ein schwarzer Steinsarkophag.",
    st:[
     {k:"Der Junge", x:"Auf dem Boden hinter dem Podest mit den Zwillingssteinen sitzt ein schluchzender Junge, den Kopf in den Händen. Es ist der Schiffsjunge Orvild, der als Geist weiterlebt, getrieben von der Trauer darüber, von seinen Schiffskameraden und dem Schiff, auf dem er diente, verloren und verlassen worden zu sein.\nSprechen die Spielercharaktere freundlich mit ihm oder schaffen einen §Überzeugen§-Wurf, erklärt Orvild, dass er nicht weiß, wo er ist, wie er hierhergekommen ist oder wohin sein Schiff, die *Blaue Medusa*, verschwunden ist. Sagen die Charaktere ihm, wo das Wrack der *Blauen Medusa* zu finden ist, ist Orvild dankbar, weiß aber nicht, wie er dorthin kommen soll. Würden die Charaktere ihm vielleicht helfen?\nFühren die Charaktere ihn, brauchen sie einen gelungenen §Schwimmen§-Wurf, um durch die überflutete Galerie und den Keller zu gelangen. Bringen sie Orvild zum Wrack, strahlt er vor Freude und dankt den Abenteurern, dass sie ihm geholfen haben, den Weg nach Hause zu finden. Dann verblasst er für immer."},
     {k:"Sarkophag", x:"Ein Relief auf der Außenseite des Sarkophagdeckels zeigt eine schöne junge Frau in einer knöchellangen Tunika. Die Spielercharaktere erkennen sie von den Wandbildern weiter unten im Turm. Der Deckel lässt sich nur mit einem gelungenen STÄ-Wurf mit einem Nachteil abheben (mehrere Charaktere können gemeinsam anpacken). Heben sie den Deckel ab, sehen sie die Überreste einer Skeletthand zu Boden fallen, als wäre sie zwischen Deckel und Sarg eingeklemmt gewesen. Sie gehörte einem Abenteurer, der vor langer Zeit in der Fesselfalle gefangen wurde und sich in seiner Verzweiflung die eigene Hand abschlug."},
     {k:"Fesselfalle", r:1, x:"Wer das Innere des Sarkophags berührt, löst sofort eine magische Falle aus, bei der sich eine schwere eiserne Fessel um das Handgelenk des Abenteurers schließt. Die Fessel ist am Sarkophag befestigt, kann aber abgehackt werden. Sie hat Rüstungswert 10 und zerbricht, nachdem sie 20 Punkte hauenden oder wuchtigen Schaden erlitten hat."},
     {k:"Magdalas Überreste", r:1, x:"Im Sarkophag liegt Magdala im ewigen Schlaf. Nur ihre Knochen sind geblieben, und ihr Schädel liegt mit offenem Kiefer auf der Seite. Der Sarkophag enthält einen zufälligen Schatz."},
     {k:"Die Zwillingssteine", x:"Die Smaragde auf dem Podest sehen völlig identisch aus. Unter dem westlichen Stein ist das Bild eines Dämons, unter dem östlichen das eines Lindwurms.\n– Entfernen die Spielercharaktere den Stein vom Dämonenbild, klickt etwas, und der Turm beginnt rasch in den Wellen zu versinken (siehe Kasten *Der versinkende Turm*).\n– Entfernen sie den Stein vom Bild des Lindwurms, spüren sie, wie der Turm bebt, und bemerken einen großen Schatten, der draußen vor dem Turm wächst. Es ist der einäugige Lindwurm Krakul (S. 38), der gekommen ist, sein verlorenes Auge – den Smaragd – zurückzufordern. Siehe Kasten *Krakuls Rache*.\n– Nehmen sie beide Steine, geschieht beides gleichzeitig!"},
     {k:"Balkon", x:"Um die Turmspitze läuft ein Balkon mit Blick auf meilenweites graues Wasser. Man kann von hier ins Meer springen, doch es braucht einen gelungenen §Schwimmen§-Wurf, um den Fallschaden von W6 Wuchtschaden zu vermeiden."}
    ],
    b:[{stein:{h:"Der versinkende Turm", b:[
   "Nehmen die Spielercharaktere den Dämonenstein an sich oder lösen die Falle im Sarkophag der Magdala im Observatorium (Ort 7) aus, oder ist der Timer abgelaufen und die zwei Stunden sind vorbei, beginnt der Turm rasch zu versinken. Ein Stockwerk wird sofort vom Meer verschluckt, danach zu Beginn jeder Runde ein weiteres (bevor die Charaktere handeln).",
   "Ist die Statuengalerie (Ort 1) bereits versunken (weil eine Stunde vergangen ist), versinkt die Bibliothek (Ort 3) sofort, die Schatzkammer (Ort 4) zu Beginn der nächsten Runde, das Labor (Ort 5) in der Runde darauf, die Zaubererkammer (Ort 6) in der nächsten Runde, und zu Beginn der vierten Runde, nachdem der Turm rasch zu sinken begonnen hat, verschwindet schließlich das Observatorium (Ort 7) unter den Wellen. Wurde Krakul herbeigerufen, kämpft er weiter, bis er getötet wird oder den Smaragd in seine Gewalt bekommt.",
   "Obwohl die Zeitmessung keine Rolle mehr spielt, sobald der Turm zu sinken beginnt, ist es wichtig, diese letzten Runden zügig zu spielen.",
   "Das ist das Finale des Abenteuers!"
   ]}},
    {stein:{h:"Krakuls Rache", b:[
   "Der Lindwurm Krakul hat lange darauf gewartet, sein gestohlenes Auge zurückzubekommen. Die Magie des Turms hindert ihn daran, ihn zu betreten, doch Krakul setzt List ein, um zurückzuholen, was ihm genommen wurde. Findet ein Spielercharakter den Stein und hat das Angebot des alten Mannes in der Eröffnungsszene angenommen, verlangt der zischende Lindwurm, dass sie ihm den Smaragd aushändigen.",
   "Erhält Krakul den Stein, stößt er einen lauten Seufzer aus, bevor der Smaragd seine leere Augenhöhle füllt. Der Lindwurm brüllt dann mit neu gewonnener Kraft, nickt den Charakteren dankbar zu und taucht ins dunkle Meer.",
   "Haben die Charaktere das Angebot des alten Mannes nicht angenommen, greift Krakul die Abenteurer sofort an. Er ist jedoch bereit, ihr Leben im Austausch gegen den Smaragd zu verschonen."
   ]}}]
   }
  ]}
 ],
 figuren:{
  "turm-statue-kamandur":{typ:"nsc", t:"Kamandur", p:28, img:"abenteuer/turm-statue-kamandur", werte:[], zl:[], text:["Die westliche Statue in der Mitte des Raums zeigt einen verhüllten Mann mit langem Bart, der geradeaus blickt. Der rechte Arm der Statue ist erhoben, der Zeigefinger weist nach oben."]},
  "turm-statue-magdala":{typ:"nsc", t:"Magdala", p:28, img:"abenteuer/turm-statue-magdala", werte:[], zl:[], text:["Die östliche Statue zeigt eine junge Frau in einer Robe, das Gesicht nach unten zum Boden geneigt. Die linke Hand der Statue ruht auf der Brust, Mittel- und Ringfinger sind ausgestreckt."]},
  "turm-aal":{typ:"monster", t:"Monsteraal", p:31, tp:28,
   werte:[["Grimmigkeit","2"],["Größe","Groß"],["Bewegung","14"],["Rüstung","3"],["TP","28"]], zl:[], text:[],
   angriffe:{h:"Monsterangriffe", w:"W6", rows:[
    "**Drohender Satz!** Der Monsteraal schwimmt schnell um sein Opfer herum, fletscht die scharfen Zähne und schnellt drohend auf es zu. Das Opfer muss einen WIL-Wurf machen, um der Furcht zu widerstehen.",
    "**Rammstoß!** Das Biest rammt einen Spielercharakter mit seinem massigen Körper und verursacht W10 Wuchtschaden. Erleidet das Opfer Schaden, wird es außerdem Benommen.",
    "**Schwanzhieb!** Der Aal schlägt mit seinem langen Schwanz nach einem Spielercharakter innerhalb von 4 Metern. Der Angriff verursacht 2W6 Wuchtschaden und macht das Opfer Benommen.",
    "**Wütender Biss!** Der Monsteraal schlägt seine Fänge in einen Spielercharakter und verursacht 2W8 hauenden Schaden.",
    "**Fegender Angriff!** Der Monsteraal wirbelt herum und trifft alle innerhalb von 6 Metern mit seinem schweren Körper und verursacht W8 Wuchtschaden.",
    "**Tödliche Umklammerung!** Das Biest schlingt sich rasch um einen Spielercharakter. Der Angriff verursacht 2W4 Wuchtschaden und weitere 2W4, wenn das Opfer an der Reihe ist. Das Opfer kann sich nicht bewegen und keine Aktionen ausführen, die Bewegung erfordern, außer zu versuchen, sich zu befreien, was einen STÄ-Wurf erfordert. Andere können helfen."
   ]}},
  "turm-geist":{typ:"monster", t:"Geist des Bibliothekars", p:32, be:"geist", tp:30,
   werte:[["Grimmigkeit","2"],["Größe","Normal"],["Bewegung","12"],["Rüstung","–"],["TP","30"]],
   zl:[["Immunität","Immun gegen jeden Schaden außer durch Magie und Feuer."]],
   text:["Der Schreiber und Bibliothekar Arlidus diente Kamandur zu Lebzeiten und kam ums Leben, als der Turm in der Tiefe versank. Kamandurs Turm war so voller magischer Kraft, dass Arlidus zu einem Geist wurde und seitdem seine Arbeit fortführt."],
   angriffe:{h:"Monsterangriffe", w:"W6", rows:[
    "**Umstürzendes Bücherregal!** Mit einem Krachen stürzt ein Bücherregal auf einen Spielercharakter, verursacht 2W8 Wuchtschaden und wirft den Charakter zu Boden. Das Opfer ist eingeklemmt und kann sich nicht bewegen oder Aktionen ausführen, die Bewegung erfordern, außer zu versuchen, sich zu befreien, was einen STÄ-Wurf erfordert. Andere können helfen.",
    "**Hand des Toten!** Der Geist stößt seine durchscheinende Hand in die Brust eines unglücklichen Spielercharakters und drückt dessen Herz zusammen. Der Charakter erleidet 2W10 Schaden und wird Verängstigt. Rüstung wirkt nicht.",
    "**Schmöker-Schlag!** Ein altes Buch fliegt aus einem Regal und schlägt dem lautesten Spielercharakter mit dem Einband um die Ohren. Das Opfer erleidet 2W6 Wuchtschaden und wird Wütend. Rüstung wirkt nicht, außer Helmen.",
    "**Blick des Toten!** Der Geist ragt über einem Spielercharakter auf und starrt mit toten Augen in dessen Seele. Das Opfer sieht sein Leben vor seinem inneren Auge ablaufen, und grotesken Visionen toter Freunde und Feinde überfluten seinen Geist. Das Opfer wird Verängstigt, erleidet einen Furchtangriff (S. 18) und muss einen WIL-Wurf mit einem Nachteil machen.",
    "**Vernichtender Wurf!** Der Geist hebt einen Spielercharakter mit unsichtbarer Kraft empor und schleudert ihn direkt gegen die Steindecke, was 2W10 Wuchtschaden verursacht. Dann lässt er los, und das Opfer erleidet beim Aufprall zusätzliche W8 Wuchtschaden und landet am Boden liegend.",
    "**Büchersturm!** Ein Wirbelwind aus schimmligen Büchern bricht aus den Regalen hervor und trifft jeden Spielercharakter im Raum immer wieder. Alle erleiden 2W6 Wuchtschaden."
   ]}},
  "turm-skelett":{typ:"monster", t:"Skelettwächter", p:33, be:"skelett", tp:8,
   werte:[["Bewegung","8"],["Schadensbonus","–"],["TP","8"]],
   zl:[["Rüstung","Plattenrüstung (6)"],["Fertigkeiten","§Wahrnehmung§ 8, §Ausweichen§ 6"],["Waffe","Dreizack (Fertigkeitswert 12, Schaden W10)"]], text:["Fünf Skelettwächter stehen in den Rüstungen der Schatzkammer."]},
  "turm-alberic":{typ:"nsc", t:"Zwerg Alberic", p:33, tp:14,
   werte:[["Bewegung","10"],["Schadensbonus GEW","+W4"],["TP","14"],["WP","11"]],
   zl:[["Rüstung","–"],["Fertigkeiten","§Wahrnehmung§ 12, §Feilschen§ 14, §Täuschen§ 14, §Mythen & Legenden§ 12, §Überzeugen§ 14, §Heimlichkeit§ 12, §Entdecken§ 12"],["Talente","Nachtragend, Schatzjäger"],["Waffe","Dolch (Fertigkeitswert 12, Schaden W8)"],["Ausrüstung","Seil (Hanf), Laterne, Lampenöl, Feuerstein & Zunder, 10 Silber"]], text:[]},
  "turm-betrix":{typ:"nsc", t:"Betrix Farsail", p:34, tp:12,
   werte:[["Bewegung","12"],["Schadensbonus STÄ/GEW","+W4"],["TP","12"],["WP","16"]],
   zl:[["Rüstung","–"],["Fertigkeiten","§Akrobatik§ 12, §Wahrnehmung§ 10, §Handwerk§ 12, §Ausweichen§ 12, §Fremdsprachen§ 10, §Seefahrt§ 10, §Fingerfertigkeit§ 12, §Entdecken§ 10, §Schwimmen§ 12"],["Talente","Anpassungsfähig, Seebeine"],["Waffe","Krummsäbel (Fertigkeitswert 12, Schaden 2W6)"],["Ausrüstung","Seil (Hanf), Enterhaken, Fernrohr, 10 Silber"]], text:[]},
  "turm-spinne":{typ:"monster", t:"Riesenspinne", p:35, be:"riesenspinne", tp:36,
   werte:[["Grimmigkeit","2"],["Größe","Normal"],["Bewegung","24"],["Rüstung","–"],["TP","36"]], zl:[], text:[],
   angriffe:{h:"Monsterangriffe", w:"W6", rows:[
    "**Kieferklauen!** Die gezackten Kieferklauen der Spinne sausen wie Krummsäbel durch die Luft. Der Angriff verursacht 2W8 hauenden Schaden.",
    "**Reißender Angriff!** Die ausgehungerte Spinne stürzt sich auf die Spielercharaktere und attackiert sie wild mit ihren zahlreichen behaarten, mit Widerhaken besetzten Beinen. Alle Spielercharaktere innerhalb von 2 Metern erleiden je W8 stechenden Schaden.",
    "**Hypnotisierende Augen!** Das monströse Spinnentier starrt die Spielercharaktere mit einer furchterregenden Vielzahl von Augen an. Alle Opfer innerhalb von 10 Metern müssen einen WIL-Wurf machen, um der Furcht zu widerstehen.",
    "**Giftstachel!** Das achtbeinige Grauen reckt sein Hinterteil hoch und greift einen Spielercharakter mit einem Giftstachel an, der aus seinem abscheulichen Körper schießt. Der Angriff verursacht W10 stechenden Schaden, und einem Opfer, das mindestens 1 Schadenspunkt erleidet, wird zusätzlich ein lähmendes Gift der Wirkstärke 16 injiziert. Der Angriff kann pariert werden.",
    "**Netzangriff!** Die Spinne richtet ihre zahlreichen Augen auf den Spielercharakter mit der höchsten STÄ. Im nächsten Moment spuckt sie klebrige Spinnweben auf das Opfer, das einen §Ausweichen§-Wurf (keine Aktion) machen muss. Bei einem Fehlschlag verfängt sich das Opfer im Netz und kann sich nicht bewegen. Um sich zu befreien, ist ein gelungener STÄ-Wurf mit einem Nachteil (Aktion) nötig. Andere können helfen.",
    "**Rammangriff!** Mit einem gewaltigen Satz schleudert sich die Riesenspinne mit ihrem massigen Körper auf einen Spielercharakter. Der Angriff verursacht 2W6 Wuchtschaden und wirft das Opfer zu Boden."
   ]}},
  "turm-galionsfiguren":{typ:"monster", t:"Verzauberte Galionsfiguren", p:36, tp:24,
   werte:[["Grimmigkeit","1"],["Größe","Normal"],["Bewegung","10"],["Rüstung","Hartholz (3)"],["TP","24"]],
   zl:[["Verwundbarkeit","Für jeden Vorhang, der in der Zaubererkammer geöffnet wird, wird eine Galionsfigur wieder zu lebloser Materie. Die Galionsfiguren erleiden außerdem doppelten Schaden durch Feuer."]],
   text:["Diese magischen Holzfiguren stammen von Schiffen, die Kamandurs Magie in den Untergang gelockt hat, und stellen verschiedene Bestien mit aufgerissenen Rachen und wilden Augen dar. Beim Angriff knarren sie unnatürlich."],
   angriffe:{h:"Monsterangriffe", w:"W6", rows:[
    "**Schreckliches Gebrüll!** Die Galionsfigur stößt ein Gebrüll aus, das den Raum erschüttert. Alle Spielercharaktere erleiden einen Furchtangriff (S. 18).",
    "**Knarrender Biss!** Die hölzerne Bestie beißt einen Spielercharakter und verursacht 2W8 hauenden Schaden.",
    "**Hartholz-Kopfstoß!** Mit einem unnatürlichen Knarren stößt die Bestie ihr Opfer mit dem Kopf und verursacht 2W6 Wuchtschaden. Rüstung wirkt nicht, außer Helmen, und das Opfer wird umgeworfen, wenn es Schaden erleidet.",
    "**Meerwasser-Kaskade!** Die Galionsfigur reißt den Rachen weit auf und speit eine Kaskade dunklen Meerwassers über alle Opfer in einem 10 Meter langen Kegel. Die Opfer werden W8 Meter zurückgeschleudert, erleiden in gleicher Höhe Wuchtschaden und landen am Boden liegend.",
    "**Eisiger Wind!** Die Bestie bäumt ihren hässlichen Kopf auf und bläst einen eiskalten Wind durch den ganzen Raum. Alle Spielercharaktere müssen einen §Wildniskunde§-Wurf machen, um nicht auszukühlen (S. 19).",
    "**Umwerfender Wurf!** Die Bestie packt den nächsten Spielercharakter und benutzt ihn als Waffe, indem sie das Opfer mit aller Kraft gegen einen anderen Charakter innerhalb von 6 Metern schleudert. Beide erleiden 2W6 Wuchtschaden und werden umgeworfen."
   ]}},
  "turm-krakul":{typ:"monster", t:"Krakul", p:38, img:"abenteuer/turm-krakul", tp:64,
   werte:[["Grimmigkeit","2"],["Größe","Groß"],["Bewegung","4"],["Rüstung","6"],["TP","64"]],
   zl:[["Vom Smaragd angezogen","Sieht der Lindwurm jemanden, der den Smaragd trägt oder ihn an sich nehmen will, greift er diesen sofort an."]],
   text:["Der Lindwurm Krakul wurde einst auf den weiten Ozeanen gefürchtet. Doch nun ist er alt und verbittert.","Seit der Zauberer Kamandur ihm sein Auge gestohlen hat, führt Krakul ein elendes Dasein, grübelt oft auf dem Meeresgrund, und Rachepläne nagen an seiner Seele."],
   angriffe:{h:"Monsterangriffe", w:"W6", rows:[
    "**Zischendes Brüllen!** Der Lindwurm stößt ein furchterregendes, zischendes Brüllen aus. Alle innerhalb von 10 Metern erleiden einen Furchtangriff.",
    "**Klauenangriff!** Mit seinen Klauen zerfleischt das Biest zwei Gegner, die höchstens 2 Meter voneinander entfernt sind. Jedes Opfer erleidet 2W8 hauenden Schaden.",
    "**Rückenstacheln!** Das Wesen rollt über alle Gegner innerhalb von 6 Metern hinweg. Die Opfer erleiden 2W4 hauenden Schaden durch die Stacheln auf dem Rücken des Monsters und werden umgeworfen.",
    "**Tödliche Umklammerung!** Das Biest schlingt sich um einen Gegner und versucht, ihm das Leben aus dem Leib zu quetschen. Der Angriff verursacht 2W8 Wuchtschaden und denselben Schaden jedes Mal, wenn das Opfer an der Reihe ist. Das Opfer kann sich nicht bewegen oder Aktionen ausführen, die Bewegung erfordern, außer zu versuchen, sich zu befreien, was einen STÄ-Wurf mit einem Nachteil erfordert. Andere können helfen.",
    "**Gieriger Biss!** Der Lindwurm öffnet sein Maul und schnellt auf ein Opfer zu, um kräftig zuzubeißen. Der Angriff verursacht 3W8 hauenden Schaden, kann aber pariert werden.",
    "**Verschlingender Angriff!** Das Biest verschluckt einen Gegner im Ganzen und verursacht 2W6 Wuchtschaden. Das Opfer kann den Lindwurm von innen weiter angreifen, wo er keinen Rüstungswert hat. Doch für jede Runde im Bauch des Biests erleidet das Opfer in seinem Zug W6 Schaden (Rüstung wirkt nicht). Das Opfer kommt frei, sobald der Lindwurm tot ist."
   ]}}
 },
 tabellen:[
  {id:"wertung", h:"Wertung", p:38,
   einl:"Die Spielgruppe erhält Punkte für das, was sie im Abenteuer findet und erreicht. Siehe die Liste unten. **Gleichstand:** Haben zwei oder mehr Gruppen genau dieselbe Punktzahl, gewinnt die Gruppe, deren Charaktere am Ende des Abenteuers die höchste Summe an verbleibenden Trefferpunkten (TP) haben. Ersatzcharaktere zählen nicht.",
   cols:["Punkte","Was"],
   rows:[
    ["1","Gefundene Schätze *(1 pro Schatz)*"],
    ["1","Entdecktes Stockwerk *(1 pro Stockwerk)*"],
    ["−1","Spielercharakter getötet *(−1 pro Charakter)*"],
    ["1","Rätsel der Kupferplatten im ersten Versuch gelöst *(Statuengalerie, Ort 1)*"],
    ["1","Monsteraal besiegt *(Keller, Ort 2)*"],
    ["1","Wrack gefunden *(Keller, Ort 2)*"],
    ["2","Geist ohne Kampf passiert *(Bibliothek, Ort 3)*"],
    ["1","Geist besiegt *(Bibliothek, Ort 3)*"],
    ["1","Rätsel der Bücher im ersten Versuch gelöst *(Bibliothek, Ort 3)*"],
    ["1","Skelette besiegt *(Schatzkammer, Ort 4)*"],
    ["1","Rätsel der Truhen im ersten Versuch gelöst *(Schatzkammer, Ort 4)*"],
    ["1","Alberic Gleamheart gerettet *(Schatzkammer, Ort 4)*"],
    ["1","Betrix Farsail gerettet *(Labor, Ort 5)*"],
    ["1","Galionsfiguren besiegt *(Zaubererkammer, Ort 6; 1 pro Galionsfigur)*"],
    ["2","Orvild zum Wrack geholfen *(Observatorium, Ort 7)*"],
    ["1","Rätsel der Zwillingssteine im ersten Versuch gelöst *(Observatorium, Ort 7)*"],
    ["3","Smaragd an Krakul übergeben *(Observatorium, Ort 7)*"],
    ["4","Krakul besiegt *(Observatorium, Ort 7)*"]
   ]}
 ],
 handouts:[
  {t:"Spielerkarte · Statuengalerie", img:"abenteuer/turm-spielerkarte-statuengalerie", p:53},
  {t:"Spielerkarte · Keller", img:"abenteuer/turm-spielerkarte-keller", p:54},
  {t:"Spielerkarte · Bibliothek", img:"abenteuer/turm-spielerkarte-bibliothek", p:55},
  {t:"Spielerkarte · Schatzkammer", img:"abenteuer/turm-spielerkarte-schatzkammer", p:55},
  {t:"Spielerkarte · Labor", img:"abenteuer/turm-spielerkarte-labor", p:56},
  {t:"Spielerkarte · Zaubererkammer", img:"abenteuer/turm-spielerkarte-zaubererkammer", p:56},
  {t:"Spielerkarte · Observatorium", img:"abenteuer/turm-spielerkarte-observatorium", p:56}
 ]
};
