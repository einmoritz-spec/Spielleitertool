/* Pfad des Ruhms – Teil 3: Herz der Finsternis, Teil B: Otag, Is-Hel, Hügel von Kalin (Buch S. 115–136). Ergänzt DB_AB["pg-herz"]; wird nach ab-pg-herz-a.js geladen. */
(function(){
var A = DB_AB["pg-herz"];
A.bereiche.push(
 {id:"otag", t:"Otag", karte:{img:"abenteuer/pg-herz-karte-otag", p:117}, orte:[
  {n:"A", t:"Otag", p:115, wesen:["ankh-otag"], b:[
   {bild:{img:"abenteuer/pg-herz-otag-bild"}},
   "Nordöstlich von Steinmund erhebt sich ein Felsen, gekrönt vom befestigten Bergtempel Otag, der Hauptfestung der Hüter der Makellosen Flamme in den Ostlanden. Otag wurde von den untoten Truppen des Nekromanten Dakoth erobert, was die Spielercharaktere von Ankh-Tah-Leh in Steinmund erfahren haben könnten – falls nicht, wird es eine unangenehme Überraschung.",
   "Meister Godvindel, den die Charaktere suchen, ist in Otag gefangen und noch am Leben, aber nicht in der Zelle, in der Ankh-Tah-Leh ihn zuletzt sah. Finden sie ihn, kann er ihnen wesentliche Wahrheiten über den Fluch auf dem Toten Wald offenbaren und Hinweise auf den Ort des Herzens der Finsternis geben.",
   {h:"Geschichte"},
   "Der Tempelturm von Otag stammt aus der Zeit vor den Dämonenkriegen, als drachenanbetende Menschen erstmals Kontakt zu den Objekten ihrer Gebete aufnahmen. Nach Angaben der örtlichen Eledain-Ritter wurde hier das Bündnis gegen die Dämoneninvasion geschmiedet – sie behaupten, Eledain selbst habe ihren Turm für Treffen und Verhandlungen mit dem Urdrachen Arknarath genutzt.",
   "Die anderen Gebäude wurden Hunderte von Jahren später errichtet, als sich der Staub der Schlachten gelegt hatte und die Hüter der Makellosen Flamme sich über die Welt ausbreiteten, als einer der Orte, an denen Ritter ausgebildet wurden. Schwerpunkt und Umfang ihrer Tätigkeiten haben sich im Lauf der Jahrhunderte gewandelt, doch ihre Hauptaufgabe war es stets, die Region gegen die Rückkehr der Dämonen zu bewachen – eine Aufgabe, die Erzpriester Godvindel graue Haare bescherte, bis Dakoth kam und alles noch schlimmer machte.",
   {h:"Aktuelle Lage"},
   "Nur wenige Tage bevor die Spielercharaktere aus dem Berg hervorkamen, wurde Otag von Skelettkriegern unter der Führung der Todeswiedergängerin Mirlefth erobert. Es war ein Massaker, bei dem jeder anwesende Ritter-Mönch erschlagen wurde – wer nicht den Schwertern und Speeren der Angreifer zum Opfer fiel, wurde von der Klippe gestoßen. Der Einzige, der am Leben bleiben durfte, war Godvindel, teils weil Dakoth sein Wissen will, teils in der Hoffnung, die abwesenden Ritter in den Tod zu locken, wenn sie kommen, um den Gefangenen zu befreien.",
   "Der Erzpriester wurde lange in einer der Zellen unter der Kaserne festgehalten, ist aber vor Kurzem in einen Eisenkäfig im Tempel verlegt worden, wo er auf Dakoths Ankunft wartet – die sich allerdings durch die Fahnenflucht des Großteils seines westlichen Orkregiments verzögert hat. Mirlefth wurde mit einer beträchtlichen Schar Untoter nach Steinmund geschickt, um den Überläufern eine tödliche Lehre zu erteilen. In Otag ist nur eine kleine Gruppe Skelettkrieger geblieben, die den Gefangenen bewachen sollen.",
   "**Mogdath:** Ist Mogdath nicht in Tefalas’ Dolch gefangen, war er es, der den Angriff auf Steinmund anführte, und Mirlefth ist noch in Otag. Mehr dazu auf S. 113.",
   {h:"Orte", p:116},
   "Otag liegt auf der Spitze eines Felsens, der sich aus der welligen Landschaft östlich des Himmelsrands erhebt. Die nördliche Steilwand des Felsens fällt fast hundert Meter senkrecht ab, und auch seine anderen Seiten sind recht steil. Im Westen windet sich eine schmale Treppe den Berg hinauf zu einem prächtigen Eingang (Ort 1).",
   "**Wege hinein:** Der Aufstieg über die Treppe ist mühsam, aber nicht so schlimm wie der Versuch, durch das Gemisch aus natürlichen Spalten und gehauenen Tunneln nach oben zu gelangen, das im Fall einer Belagerung als Fluchtweg dient – oder als Weg hinein für jene, die vom Geheimgang (19) wissen und unbemerkt eindringen wollen."
  ]},
  {n:"1", t:"Eingang", p:116, pin:[20.8,47.5], wesen:["ankh-otag","herz-otag-skelettkrieger","herz-otag-skelettbogen"],
   vl:"Ein massiver Granitblock, der auf acht schlanken Säulen ruht und auf einem weiteren Granitblock steht. Die eisenbeschlagene Tür hat einen Türklopfer in Form eines grinsenden Drachengesichts und wird von vier speertragenden Skelettkriegern flankiert, je zwei auf jeder Seite. Alles ist still bis auf das Pfeifen des Windes.",
   st:[
    {k:"Wachen", x:"Vier Skelettkrieger. Sie greifen jeden an, der sich dem Tor nähert. Charaktere, die die Treppe heraufkommen, werden automatisch entdeckt. Werte siehe den Kasten links."},
    {k:"Osten", x:"Die Tür ist weder abgeschlossen noch verriegelt."}
   ]},
  {n:"2", t:"Vorhalle", p:117, pin:[27.5,47.5], wesen:["herz-otag-skelettkrieger"],
   vl:"Der Gestank in dieser Steinhalle ist erstickend. In der Nordwestecke ist ein Bodenmosaik eines Sturzflug machenden Drachen unter einem Dutzend verwesender Leichen verborgen, die unordentlich übereinandergehäuft liegen.",
   st:[
    {k:"Das Mosaik", x:"Ein gelungener Wurf auf §Mythen & Legenden§ liefert folgende Information: Nach den kupferfarbenen Schuppen, den beschädigten Flügelspitzen und der Tatsache, dass das rechte Horn gebrochen zu sein scheint, stellt das Mosaik wahrscheinlich den legendären Arknarath dar, den Vater aller Drachen."},
    {k:"Leichenhaufen", x:"Ein Haufen aus dreizehn Rittern, die seit Tagen verwesen. Charaktere, die ihre Kleidung und Gürteltaschen durchsuchen und einen Wurf auf §Entdecken§ schaffen, finden Wertsachen im Wert einer Schatzkarte. Insgesamt können drei Karten gefunden werden."},
    {k:"Osten", x:"Unverschlossene, eisenbeschlagene Tür zum Rittersaal (5). Wer sich der Tür nähert, kann einen Wurf auf §Wahrnehmung§ machen. Bei Erfolg hört der Charakter von der anderen Seite ein schlurfendes, rasselndes Geräusch."},
    {k:"Süden", x:"Unverschlossene Holztür zur Küche (3)."},
    {k:"Westen", x:"Eisenbeschlagene Doppeltüren zum Eingang (1)."},
    {k:"Norden", x:"Unverschlossene Holztür zum Empfangsraum (4)."}
   ]},
  {n:"3", t:"Küche", p:118, pin:[30.5,57.0], wesen:[],
   vl:"Von den Arbeitsflächen voller schimmeligen, grünen Fleisches und gekeimter Rüben steigt ein modriger Geruch auf. Die Vorbereitungen für die Mahlzeit müssen in vollem Gange gewesen sein, als der Angriff erfolgte.",
   st:[
    {k:"Vorräte", x:"Wer die Schränke durchsucht, findet einen Topf Kekse und einen Korb knuspriger Zwieback, was 2W6 Rationen Essen entspricht."},
    {k:"Osten", x:"Kurzer Gang, der an einer Küchentür zum Hinterhof endet. Sie ist unverschlossen und lässt sich leicht öffnen, quietscht aber, wenn die Angeln nicht zuvor mit Öl oder (ranziger) Butter geschmiert werden. Das kann man vorher mit einem gelungenen Wurf auf §Wahrnehmung§ erkennen. Das Geräusch wird von den Untoten im Rittersaal (5) automatisch gehört, die dann nachsehen kommen."},
    {k:"Norden", x:"Unverschlossene Holztür zur Vorhalle (2)."},
    {k:"Norden", x:"Unverschlossene Holztür zum Rittersaal (5). Wer sich der Tür nähert, kann einen Wurf auf §Wahrnehmung§ machen. Bei Erfolg hört der Charakter von der anderen Seite ein schlurfendes, rasselndes Geräusch."}
   ]},
  {n:"4", t:"Empfangsraum", p:118, pin:[30.5,37.1], wesen:[],
   vl:"Überall ist getrocknetes Blut – an den Wänden und am Boden, ebenso auf den zerbrochenen Möbeln. In diesem Raum hat eindeutig ein erbitterter Kampf stattgefunden, und eine Seite scheint aus Skelettkriegern bestanden zu haben. Entlang der Wand führt eine rissige Treppe ins obere Stockwerk.",
   st:[
    {k:"Funde", r:1, x:"*Ein Charakter, der ein Viertel mit der Durchsuchung des Raums verbringt und einen Wurf auf* §Entdecken§ *schafft, findet unter zertrümmerten Tischen, zerbrochenen Sesseln und blutigen Textilien ein meisterhaft gefertigtes Kurzschwert mit juwelenbesetztem, blutbeflecktem Heft und ein silbernes Teeservice (Teekanne und acht Tassen mit Untertassen, 12 Gold wert).*"},
    {k:"Osten", x:"Hölzerne Außentür, die im Wind schlägt."},
    {k:"Süden", x:"Unverschlossene Holztür zur Vorhalle (2)."},
    {k:"Süden", x:"Unverschlossene, eisenbeschlagene Tür zum Rittersaal (5). Wer sich der Tür nähert, kann einen Wurf auf §Wahrnehmung§ machen. Bei Erfolg hört der Charakter von der anderen Seite ein schlurfendes, rasselndes Geräusch."},
    {k:"Oben", x:"Treppe zur Bibliothek (6)."}
   ]},
  {n:"5", t:"Rittersaal", p:118, pin:[33.6,47.5], wesen:["herz-balozar","herz-otag-skelettkrieger","herz-otag-skelettbogen"],
   vl:"Abgesehen davon, dass der mosaikverzierte Marmorboden mit getrockneten Blutlachen bedeckt ist, befindet sich dieser Raum in gutem Zustand. Zwei schwere Kronleuchter hängen über einem massiven, U-förmigen Eichentisch mit etwa zwanzig Stühlen, und auf einem Podest in der Mitte steht eine goldene Statuette eines schreienden Drachen, der sich auf die Hinterbeine erhebt.",
   st:[
    {k:"Untote", x:"Mirlefth hat den Champion Balozar mit dem Kommando über Otag betraut. Haben die Spielercharaktere ihn nicht schon in einem anderen Raum getroffen, sitzt der hoch aufragende Skelettkrieger hier, wenn sie eintreten, umgeben von seinen Schergen. Sie greifen alle sofort an."},
    {k:"Schergen", x:"Eine Anzahl Skelette, zwei mehr als Spielercharaktere, je zur Hälfte Krieger und Bogenschützen, schreiten im Rittersaal umher (sofern die Charaktere ihnen nicht schon begegnet sind)."},
    {k:"Die Drachenstatuette", x:"ist ganze 100 Gold wert, hat aber Gewicht 6."},
    {k:"Süden", x:"Unverschlossene Holztür zur Küche (3)."},
    {k:"Westen", x:"Unverschlossene, eisenbeschlagene Tür zur Vorhalle (2)."},
    {k:"Norden", x:"Unverschlossene, eisenbeschlagene Tür zum Empfangsraum (4)."}
   ]},
  {n:"6", t:"Bibliothek", p:118, pin:[38.9,15.5], wesen:[],
   vl:"Leere, dunkel geölte Bücherregale säumen die Wände, und in der Mitte des Raums liegt ein Haufen verbrannter Bücher und Möbel.",
   st:[
    {k:"Zauberbuch", r:1, x:"*Wer ein Viertel lang in den verbrannten Überresten wühlt und einen Wurf auf* §Entdecken§ *schafft, findet ein Buch, das das Feuer teilweise überstanden hat. Seine unversehrten Seiten enthalten die Zauber* §FEUERVOGEL§*,* §FEUERSTURM§ *und* §SALAMANDER§*.*"},
    {k:"Westen", x:"Unverschlossene Holztür zum Skriptorium (7)."},
    {k:"Westen", x:"Unverschlossene Holztür zum Arbeitszimmer des Erzpriesters (8)."},
    {k:"Unten", x:"Treppe zum Empfangsraum (4)."}
   ]},
  {n:"7", t:"Skriptorium", p:118, pin:[29.3,10.7], wesen:[],
   vl:"Eine Handvoll Schreibpulte und ein paar schwere Eichenbücherregale sind umgeworfen worden, und überall liegen lose Papierblätter. Zwei zerschlagene Skelettkrieger liegen reglos am Boden.",
   st:[
    {k:"Der Schlüssel", r:1, x:"*Einer der Mönche, die hier starben, hatte den Schlüssel zu den Gefängniszellen in Raum 23. Er ist in einer Ecke zu finden, wenn man den Raum ein Viertel lang durchsucht und einen Wurf auf* §Entdecken§ *schafft.*"},
    {k:"Osten", x:"Unverschlossene Holztür zur Bibliothek (6)."},
    {k:"Süden", x:"Unverschlossene Holztür zum Arbeitszimmer des Erzpriesters (8)."}
   ]},
  {n:"8", t:"Das Arbeitszimmer des Erzpriesters", p:119, pin:[30.5,20.9], wesen:[],
   vl:"Jemand hat die Möbel des Raums mit Fäusten und stumpfen Waffen zertrümmert, als hätte er etwas gesucht und vergessen, wie man Schubladen und Schränke öffnet.",
   st:[
    {k:"Karte", r:1, x:"*Es braucht ein Viertel Suche und einen gelungenen Wurf auf* §Entdecken§*, um eine zerknitterte, aber intakte Karte der Ostlande zu finden, ähnlich der, die diesem Buch beiliegt.*"},
    {k:"Osten", x:"Unverschlossene Holztür zur Kammer des Erzpriesters (9)."}
   ]},
  {n:"9", t:"Die Kammer des Erzpriesters", p:119, pin:[40.0,24.3], wesen:[],
   vl:"Ein asketisch eingerichtetes Schlafzimmer, schlicht möbliert mit einem Bett, einem Kleiderschrank und einer Kommode. Das Einzige, was heraussticht, ist die Leseecke an der Südwand mit einem riesigen schwarzen Ledersessel, dessen Sitz stark abgenutzt ist. Auf einem Tisch daneben liegen drei Bücher.",
   st:[
    {k:"Die Bücher", x:"Zwei sind spekulative Abhandlungen über den Kosmos, das dritte ist ein Tagebuch voller Kritzeleien und Ideen für ein Buch über die Geschichte Otags, das Godvindel in hohem Alter zu schreiben plante. Wer es liest und einen Wurf auf §Fremdsprachen§ schafft, versteht den Kern davon (siehe Geschichte auf S. 115)."},
    {k:"Geheimfach", r:1, x:"*Unter dem Bett liegt ein loses Bodenbrett mit einem versteckten Fach. Es zu finden erfordert einen gelungenen Wurf auf* §Entdecken§*. In dem Fach liegen eine Lederkette mit vier Reißzähnen (*§Tierkunde§ *zeigt, dass sie von einem Drachenjungen stammen) sowie Gegenstände im Wert von drei Schatzkarten (aber keine Kupfermünzen, Waffen oder Rüstungen).*"}
   ]},
  {n:"10", t:"Kasernenhalle", p:119, pin:[58.1,38.5], wesen:["patrouille","herz-otag-skelettkrieger","herz-otag-skelettbogen","herz-balozar"],
   vl:"Weißgekalkte Wände treffen auf einen abgetretenen Steinboden, der alle Geräusche in dieser leeren Halle zu verstärken scheint. Es gibt mehrere Türen und eine steinerne Wendeltreppe, die sowohl nach oben als auch nach unten führt.",
   st:[
    {k:"Wachen", x:"Wenn die Spielercharaktere diesen Raum betreten, hören sie die Wachpatrouille (siehe den Kasten nebenan) die Wendeltreppe von oben herunterrasseln – es sei denn, die Charaktere haben sie bereits besiegt, dann sind es Balozar und seine Schergen, die gleich durch die westliche Tür kommen. So oder so müssen die Charaktere schnell handeln – es gibt kein Versteck, sie müssen sich also schnell hinaus§Heimlichkeit§, wenn sie einem Kampf entgehen wollen. Die Türen zur Balustrade (11) stehen einen Spalt offen, was einen Vorteil auf den Wurf gibt. Bei Misserfolg werden die Charaktere entdeckt und von den Untoten angegriffen."},
    {k:"Osten", x:"Holztür zum Innenhof (18)."},
    {k:"Süden", x:"Holztür zur Meisterkammer (12)."},
    {k:"Süden", x:"Holztür zum Speisesaal (13)."},
    {k:"Westen", x:"Hölzerne Außentür."},
    {k:"Norden", x:"Zwei offene Holztüren zur Balustrade (11)."},
    {k:"Oben", x:"Wendeltreppe zur Versammlungshalle (14)."},
    {k:"Unten", x:"Wendeltreppe zum Keller (24)."}
   ]},
  {n:"11", t:"Balustrade", p:119, pin:[58.1,33.3], wesen:["patrouille","herz-otag-skelettkrieger","herz-otag-skelettbogen"],
   vl:"Eine böige Windstimme zerrt an euren Haaren, und ein atemberaubender Schwindel zieht euch den Magen zusammen, als ihr auf diese schmale Holzbalustrade hinaustretet, die direkt über der senkrechten Klippe an Otags Nordseite hängt, hundert Meter über dem Boden.",
   st:[
    {k:"Wachen", x:"Werden die Spielercharaktere von den Untoten hierher gejagt, teilen sich diese und greifen durch die Türen an beiden Enden an, im Osten und im Westen. Schaffen es die Charaktere, sich hierher zu §Heimlichkeit§, verfolgen die Untoten sie trotzdem, aber alle durch dieselbe Tür (die östliche), und die Charaktere müssen einen Wurf auf §Wahrnehmung§ machen, um sie kommen zu hören und die Chance zu bekommen, wieder wegzuschleichen. Auf der Balustrade kann ein Spielercharakter, dem es gelingt, einen Gegner umzuwerfen (Regelbuch S. 48), ihn über den Rand stoßen – in einen sicheren Tod."},
    {k:"Süden", x:"Zwei offene Holztüren zur Kasernenhalle (10)."}
   ]},
  {n:"12", t:"Die Kammer des Meisters", p:120, pin:[53.5,47.1], wesen:[],
   vl:"Ein großer Raum mit schlichten, zweckmäßigen Möbeln – ein Bett, eine Kommode, ein Kleiderschrank und ein Waffenständer mit einem Schwert darauf. Der Gestank verwesender Leichen ist deutlich wahrnehmbar. Die Wolldecke wurde vom Bett gezogen und enthüllt einen Toten in Nachthemd und Schlafmütze.",
   st:[
    {k:"Die Leiche", x:"Der greise Ausbilder Elinard war zu schwach und gebrechlich, um aus dem Bett zu kommen, als Mirlefth angriff. Er starb an einem Herzinfarkt, bevor die Untoten ihn fanden, und liegt seither dort. Die beiden juwelenbesetzten Ringe, die er noch trägt, lassen sich leicht von seinen verwesenden Fingern ziehen. Sie sind je 6 Gold wert, doch jeder Eledain-Ritter, der sie sieht, erkennt, woher sie stammen, und wird sofort feindselig."},
    {k:"Das Schwert", x:"Elinards Langschwert ruht noch auf dem Ständer an der Wand – ein vom Zahn der Zeit gezeichnetes Erbstück, das auf dem Knauf ein Symbol trägt: ein sich aufbäumendes geflügeltes Pferd. Ein gelungener Wurf auf §Mythen & Legenden§ zeigt, dass es das Wappen des Hauses Hartenstahl ist, dessen Gründer Telvin der Waffenbruder Eledains selbst gewesen sein soll."}
   ]},
  {n:"13", t:"Speisesaal", p:120, pin:[61.0,47.1], wesen:[],
   vl:"Ein schlichter Speisesaal, der Schauplatz heftiger Kämpfe gewesen zu sein scheint. Drei Skelettkrieger liegen am Boden, der rustikale Langtisch ist entzweigebrochen, und die Tischplatte ist mit getrocknetem Blut befleckt, aber es sind keine toten Ritter zu sehen. Die Doppeltüren zum Hinterhof sind halb offen und schief und lassen den Wind und die Kälte der Berge herein.",
   st:[
    {k:"Speisekammer", x:"Die verderblichen Waren in der Speisekammer neben dem Speisesaal sind längst verdorben, doch zwei versiegelte Gläser mit eingelegten Rüben und zwei getrocknete Ziegenkeulen, die von der Decke hängen, sind völlig genießbar und zählen jeweils als zwei Rationen Essen. Außerdem gibt es einige Glasflaschen, mit denen man die Ziegen im Innenhof (18) melken kann."},
    {k:"Osten", x:"Doppeltüren zum Innenhof (18)."},
    {k:"Norden", x:"Holztür zur Kasernenhalle (10)."}
   ]},
  {n:"14", t:"Versammlungshalle", p:120, pin:[58.1,7.2], wesen:[],
   vl:"Eine schmucklose Halle mit niedrigen Holzbänken vor einem Podium mit einem Lesepult. Auf dem Pult liegt ein aufgeschlagenes Buch.",
   st:[
    {k:"Das Buch", x:"Diese Halle wurde für die Vorträge des Eledain-Kultes genutzt, ist jetzt aber verlassen und leer. Das Buch auf dem Podium gibt einen Vorteil auf Würfe auf §Tierkunde§ in Fragen zu Drachen."},
    {k:"Süden", x:"Breite Holztür zum Schlafsaal (15)."},
    {k:"Oben", x:"Wendeltreppe zum Übungsraum (16)."},
    {k:"Unten", x:"Wendeltreppe zur Kasernenhalle (10)."}
   ]},
  {n:"15", t:"Schlafsaal", p:120, pin:[57.4,15.0], wesen:[],
   vl:"Zwanzig einfache Betten mit Wolldecken stehen mit dem Kopfende an der Wand in diesem großen Raum. Am Fußende jedes Bettes steht eine schlichte Holztruhe.",
   st:[
    {k:"Ersparnisse", x:"Wer alle Truhen ein Viertel lang durchsucht, kann aus Beuteln und Börsen in den Truhen, die auch Kleidung und verschiedene persönliche Gegenstände enthalten, Wertsachen (keine Waffen oder Rüstungen) im Wert von drei Schatzkarten aufsammeln."},
    {k:"Die Künstlerin", x:"Die Truhe in der Südwestecke gehört der Ritterin Ulthara Barschild, der die Charaktere später im Abenteuer begegnen können (S. 139). Sie enthält ihr Skizzenbuch voller exquisiter Tuschezeichnungen von Drachen in verschiedenen Stilen. Ihr Name steht im vorderen Einband, und sie hätte das Buch gern zurück."}
   ]},
  {n:"16", t:"Übungsraum", p:120, pin:[78.0,14.1], wesen:[],
   vl:"Eine große, offene Fläche mit einem abgetretenen Steinboden und einer Handvoll stark ramponierter Übungspuppen aus massiven Baumstämmen, die an einer der Seiten aufgereiht stehen. An einem Ende des Raums stehen vier Schießscheiben aus fest gewickeltem Seil.",
   st:[
    {k:"Waffentraining", x:"Ein Charakter, der ein Viertel mit Üben an den Zielscheiben verbringt, erhält eine zusätzliche Erfahrungsmarkierung auf einer Waffenfertigkeit seiner Wahl. Auf diese Weise kann nur eine Markierung erworben werden."},
    {k:"Norden", x:"Breite Holztür zur Waffenkammer (17)."},
    {k:"Unten", x:"Wendeltreppe zur Versammlungshalle (14)."}
   ]},
  {n:"17", t:"Waffenkammer", p:120, pin:[78.1,5.9], wesen:[],
   vl:"Der Geruch von Stahl, Leder und Ölen hängt schwer in dieser Kammer. Es gibt genug Waffen und Rüstungen für eine ganze Kompanie, die an den Wänden, auf Holzständern oder auf wackeligen Holzregalen hängen oder liegen.",
   st:[
    {k:"Waffen", x:"Es gibt je 2W6 gewöhnliche Dolche, Kurzschwerter, Breitschwerter, Langschwerter und Leichte Armbrüste sowie je eine meisterhafte Ausführung jeder Art. Es braucht einen Wurf auf §Handwerk§, um die meisterhaften Waffen zu erkennen."},
    {k:"Rüstung", x:"Der Raum enthält je 2W6 Beschlagenes Leder, Kettenhemden und Offene Helme. Auf einem Holzständer ausgestellt ist das, was die Mönche Telvins Ringpanzer nennen – mit den Werten von Beschlagenem Leder, aber mit +2 Rüstungswert gegen hauenden Schaden."}
   ]},
  {n:"18", t:"Innenhof", p:121, pin:[51.7,60.8], wesen:[],
   vl:"Vor den Tempelgebäuden liegt ein weiter, windgepeitschter Hang mit üppigem, kurzem Gras. Ein paar Ziegen grasen hinter einem überdachten Brunnen. Zwischen Büschen und Gestrüpp stehen ein Dutzend kleiner Holzpodeste, unregelmäßig im Abstand von einigen Metern verteilt.",
   st:[
    {k:"Die Holzpodeste", x:"dienen der Meditation und Entspannung in der frischen Bergluft. Wer hier ein Viertel in Gedanken versunken verbringt, heilt automatisch einen Zustand seiner Wahl. Die Wirkung kann mit einer Kurzen Rast kombiniert werden."},
    {k:"Der Brunnen", x:"Am Grund des Brunnens liegt eine natürliche Höhle, die mit dem Kasernenkeller (20) verbunden ist. Lassen die Charaktere einen Eimer hinab, können sie mit einem Wurf auf §Akrobatik§ hinunterklettern."},
    {k:"Ziegen", x:"Sechs der Ziegen geben Milch und wurden lange nicht gemolken. Im Speisesaal der Kaserne (13) liegen sechs Flaschen mit Klemmdeckeln, die jemand mit einem gelungenen Wurf auf §Tierkunde§ in einem Viertel füllen kann. Jede Flasche zählt als eine Ration Essen, sollte aber innerhalb von drei Tagen verbraucht werden."}
   ]},
  {n:"19", t:"Geheimgang", p:121, pin:[86.2,89.7], wesen:[],
   vl:"Der Geheimgang ist kalt, feucht und eng. Er ist abschüssig steil, windet sich im Zickzack und ist stellenweise so niedrig, dass man hindurchkriechen muss. An manchen Stellen wurden Spitzhacken eingesetzt, um besonders enge Abschnitte zu erweitern, doch größtenteils zwängt man sich zwischen scharfen Felsen voran.",
   st:[
    {k:"Lose Felsen", x:"Nach einem Viertel Kriechen darf, wer vorangeht, einen Wurf auf §Wahrnehmung§ machen. Bei Erfolg bemerkt der Charakter, dass das Gestein rissig und instabil aussieht, und kann einen Einsturz vermeiden, indem er vorsichtig weitergeht – andernfalls wird der Einsturz ausgelöst und verursacht 2W6 wuchtigen Schaden bei dem betreffenden Charakter. Man kann dem Einsturz §Ausweichen§, doch dann wird möglicherweise stattdessen der Charakter dahinter getroffen."},
    {k:"Der Abgrund", x:"Nach einem weiteren Viertel müssen sich die Charaktere durch einen rauen, feuchten und steilen Spalt nach oben kämpfen. Wer zuerst klettert, muss einen Wurf auf §Akrobatik§ machen oder fällt zurück und erleidet W8 wuchtigen Schaden. Mehrere Versuche sind erlaubt. Schafft es eine Person nach oben und lässt ein Seil herab, erhalten die anderen einen Vorteil auf ihre Würfe auf §Akrobatik§."}
   ]},
  {n:"20", t:"Höhle", p:121, pin:[76.2,80.4], wesen:[],
   vl:"Eine natürliche Höhle, kalt und feucht. Das Geräusch tropfenden Wassers ist aus der Dunkelheit deutlich zu hören.",
   st:[
    {k:"Der Teich", x:"Der größte Teil der Höhle wird von einem Wasserbecken eingenommen, das von Regenwasser gespeist wird, das langsam durch den Fels sickert. Das Wasser ist sehr erfrischend."},
    {k:"Der Brunnen", x:"In der Höhlendecke über dem Teich befindet sich eine Öffnung zum Brunnen im Innenhof (18). Das Tageslicht draußen ist deutlich zu sehen. Der Eimer hängt normalerweise oben, doch mit einem Enterhaken und einem gelungenen Wurf auf §Akrobatik§ ist es möglich, ihn zu fassen und zum Wasser herunterzuziehen. Dadurch kann man wiederum zum Innenhof hinaufklettern."},
    {k:"Norden", x:"Holztür zur Vorratskammer (21)."},
    {k:"Westen", x:"Holztür zur Verhörkammer (22)."}
   ]},
  {n:"21", t:"Vorratskammer", p:121, pin:[72.8,71.2], wesen:[],
   vl:"Kisten, Säcke, Fässer, Körbe und Krüge säumen die Regale des Raums und enthalten Wurzelgemüse, Beeren, Wein, Brot, Honig und andere Notwendigkeiten. Der Ort stinkt nach Schimmel und Fäulnis.",
   st:[
    {k:"Essen", x:"Alle verderblichen Waren sind schlecht geworden, doch wer sich ein Viertel lang umsieht, findet 2W8 Rationen Essen in Form von Trockenobst, Trockenfleisch, Salzfisch und keimenden Rüben."},
    {k:"Süden", x:"Holztür zur Höhle (20)."},
    {k:"Westen", x:"Holztür zum Treppenhaus (24)."}
   ]},
  {n:"22", t:"Verhörkammer", p:121, pin:[68.6,84.6], wesen:["herz-maragander"],
   vl:"Ein Schauer läuft euch über den Rücken, während euer Blick durch die Kammer wandert und sich weigert, lange auf der Streckbank, der Eisernen Jungfrau, den Scheren und Zangen oder den anderen Geräten zu verweilen, von denen ihr nicht einmal wisst, wie sie benutzt werden, obwohl ihr Zweck eindeutig darin besteht, Schmerz zuzufügen.",
   st:[
    {k:"Der Geist", x:"Betritt ein Lebewesen die Folterkammer, erscheint der Geist von Maragander als schwach schimmernder Schatten, der sich von der Streckbank erhebt. Mehr dazu im Kasten nebenan."},
    {k:"Osten", x:"Holztür zur Höhle (20)."},
    {k:"Norden", x:"Dicke Holztür zu den Verliesen (23)."}
   ]},
  {n:"23", t:"Verliese", p:122, pin:[68.7,78.0], wesen:["herz-bunkh"],
   vl:"Acht kleine Zellen, vier auf jeder Seite eines Korridors, getrennt durch rostige Eisengitter. Die Tür einer der Eckzellen steht weit offen, die anderen sind geschlossen. Aus einer von ihnen hört ihr ein krächzendes Schnarchen …",
   st:[
    {k:"Godvindels Zelle", x:"Die Tür der südöstlichen Zelle steht offen, und es scheint, dass dort bis vor Kurzem jemand festgehalten wurde. Auf dem Boden liegen mehrere leere Becher und Schüsseln mit Essensresten. In die Wand ist das Drachensymbol Eledains geritzt (lass einen Wurf auf §Mythen & Legenden§ zu, wenn die Spieler es nicht erkennen)."},
    {k:"Der Gefangene", x:"Ein Ork namens Bunkh schläft in der Zelle in der Nordwestecke. Diese Zellentür ist abgeschlossen, kann aber geknackt oder aufgebrochen werden (12 TP, Rüstungswert 12). Wer das Schloss knackt, muss außerdem einen Wurf auf §Heimlichkeit§ schaffen, um den schlafenden Ork nicht zu wecken (siehe den Kasten nebenan). Er wacht automatisch auf, wenn die Tür aufgebrochen wird."},
    {k:"Die anderen Zellen", x:"sind unverschlossen, enthalten aber nichts von Interesse."},
    {k:"Süden", x:"Dicke Holztür zur Verhörkammer (22)."},
    {k:"Norden", x:"Stabile Holztür zum Treppenhaus (24)."}
   ]},
  {n:"24", t:"Treppenhaus", p:123, pin:[68.2,71.2], wesen:[],
   vl:"Eine massive Wendeltreppe aus Stein führt nach oben.",
   st:[
    {k:"Osten", x:"Holztür zur Vorratskammer (21)."},
    {k:"Süden", x:"Stabile Holztür zu den Verliesen (23)."},
    {k:"Oben", x:"Die Treppe führt zur Kasernenhalle (10)."}
   ]},
  {n:"25", t:"Tempelhalle", p:123, pin:[40.2,75.0], wesen:["herz-balozar","herz-otag-skelettkrieger","zweite-chance"],
   vl:"Eine riesige Tempelhalle mit hoher Gewölbedecke. Leitern an den Wänden führen hinauf zu einer breiten Balustrade nahe der Decke. Auf dem Boden vor euch stehen Reihen einfacher Steinbänke, dahinter ein roher Steinaltar. Auf dem Altar steht ein Eisenkäfig, umgeben von Skelettwachen. Ein sehr dünner, uralt wirkender Mann im Käfig hebt die Augen, bemerkt euch und sackt sofort leblos in sich zusammen. An der Wand hinter dem Käfig hängt ein großer Gong.",
   st:[
    {k:"Wachen", x:"Es sind so viele Skelettkrieger wie Spielercharaktere. Dringen Eindringlinge in den Tempel ein, versucht einer der Wächter, Alarm zu schlagen, indem er in seinem Zug in der Runde den Gong schlägt – ziehe für diesen Wächter eine eigene Initiativkarte. Wird der Wächter ausgeschaltet, bevor er Alarm schlagen kann, versucht es ein anderer in den folgenden Runden erneut."},
    {k:"Verstärkung", x:"Gelingt es einem Wächter, den Gong zu schlagen, erscheinen in der folgenden Runde die vier Skelette vom Eingang (1), und nach drei Runden kommen Balozar und seine Schergen aus dem Rittersaal (5)."},
    {k:"Der Todeswiedergänger", x:"Haben die Spielercharaktere Mogdath während *Tore der Macht* nicht in Tefalas’ Dolch gefangen und hat Mogdath folglich den Angriff auf Steinmund geführt, ist sein Mit-Todeswiedergänger Mirlefth noch in Otag und befindet sich in der Tempelhalle, wenn die Charaktere eintreffen. In diesem Fall steht ihnen ein weit härterer Kampf bevor – aber auch eine weitere Chance, einen Todeswiedergänger im Dolch zu fangen. Mirlefth hat dieselben Werte wie Mogdath (S. 59), trägt aber einen gewöhnlichen Morgenstern."},
    {k:"Godvindel", x:"Der Käfig ist abgeschlossen, und haben die Charaktere den Schlüssel nicht von Balozar (oder Mirlefth) genommen, kann er geknackt oder aufgebrochen werden (20 TP, Rüstungswert 8). Darin liegt der sterbende Erzpriester Godvindel. Die Charaktere können sein Leben nicht retten, haben aber Zeit, ein paar Worte mit ihm zu wechseln, bevor er stirbt. Mehr dazu unten."},
    {k:"Der Drachenbalkon", x:"Die Balustrade nahe der Decke wurde früher für Riten und Treffen mit den Drachen genutzt, mit denen der Eledain-Kult verbündet war. Die gesamte Decke lässt sich mithilfe uralter Winden zwergischer Bauart öffnen, doch der Mechanismus wurde seit Jahrhunderten nicht benutzt. Der Boden des Balkons ist glasiert und zerkratzt – ein Charakter, der einen Wurf auf §Tierkunde§ schafft, kann schließen, dass der Schaden von den Klauen und dem Feuer von Drachen stammt."}
   ],
   b:[
    {bild:{img:"abenteuer/pg-herz-godvindel", kl:1}},
    {h:"Godvindels letzte Worte", p:123},
    "Godvindel ist seit fast siebzig Jahren Erzpriester seines Ordens und nun weit über neunzig. Er sieht geradezu erbärmlich aus. Das Alter hat ihm nicht nur einen weißen Haarkranz aus wattigem Haar und einen mageren, gebeugten Körper beschert – er ist nun auch von Blutergüssen übersät, geschwächt von Unterernährung und hohläugig vor Angst und Schlafmangel.",
    "Das Leben des Erzpriesters ist nicht mehr zu retten, auch nicht durch Magie. Er weiß das, will aber nicht in Gefangenschaft sterben. Und er braucht Hilfe!",
    "Befreien die Spielercharaktere ihn, bittet er sie, ihn zum Meditationshain im Innenhof (18) zu tragen. Erzählen die Charaktere ihm, dass sie von Tefalas geschickt wurden, atmet er tief durch, voller Erleichterung und Hoffnung, und flüstert Folgendes:",
    {zit:["„Wenn ihr Tefalas’ Vertrauen gewonnen habt, muss er etwas Gutes in euch gesehen haben. Ich sterbe, unwiderruflich, also bleibt mir keine andere Wahl, als Bruder Tefalas’ Urteil zu vertrauen. Die Ostlande … nein, die Welt braucht Hilfe. Doch zuerst eine Frage: Wo ist Tefalas? Ich muss wissen, dass er seine Mission erfüllt hat.“"]},
    "Godvindel wird unterschiedlich reagieren, je nachdem, was bei den Abenteuern der Charaktere im Zwergenreich hinter den Toren der Macht geschehen ist. Die Nachricht von Tefalas’ Tod lässt eine einzelne Träne über seine ausgetrocknete Wange rollen.",
    "Erwähnen die Charaktere außerdem, dass sie den Dolch bei sich tragen, der die Seele eines Todeswiedergängers enthält (siehe den Kasten Eine zweite Chance, falls das nicht der Fall ist), stößt der Priester ein weiteres erleichtertes Stöhnen aus und sagt:",
    {zit:["„Armer alter Tefalas, es tut mir leid, dass ich ihn getäuscht habe. Was immer er euch erzählt hat, beruhte auf der Lüge, die ich ihm aufgetischt habe, damit er nicht Gefahr läuft, meine Pläne zu verraten. Dank des Dolches, den ihr tragt, gibt es noch Hoffnung – Hoffnung, dieses Land vom verderblichen Einfluss des Dämonenfürsten zu befreien, den Fluch aufzuheben, der den Toten Wald plagt und droht, die ganze Welt zu verschlingen. Der Fluch verbreitet sein dämonisches Gift immer schneller, und bald wird sich der Riss zwischen den Welten erneut öffnen. Sathmog wird diese Welt betreten, und seine Anhänger werden in diesem neuen dämonischen Reich ein fanatisches Heer bilden. Hört mir zu, hört genau zu. Die Legende sagt, dass Sathmogs Herz, das Herz der Finsternis, nur von ‚einem, der tot ist und doch nicht sterben kann‘ zerstört werden kann. Es muss an dem Ort geschehen, ‚wo der Fluch gesprochen wurde und wirkte‘. Diese Aufgabe fällt euch zu – ihr müsst das Herz der Finsternis finden, es zum Altarstein des Tempels der Winde mitten im Toten Wald bringen und es dort mit Tefalas’ Dolch durchbohren. So, und nur so, kann die Welt von dem rachsüchtigen Übel Sathmogs befreit werden. Doch auch der böse Nekromant Dakoth sucht das Herz des Dämons, um dessen Macht für seinen eigenen Vorteil zu nutzen. Ihr müsst das Herz der Finsternis finden, bevor Dakoth es tut.“"]},
    "Die Spielercharaktere haben wahrscheinlich Anschlussfragen, doch die Einzigen, die er noch beantworten kann, betreffen die Frage, wo sie nach dem Herz der Finsternis suchen sollen:",
    {zit:["„Ich habe gesucht, in meiner Erinnerung, in unzähligen Folianten und alten Archiven. Es gibt Hinweise, die auf drei Orte in den Ostlanden deuten: das Monument auf den Hügeln von Kalin bei Ankvarn, den Hügelfelsen auf der Insel Is-Hel im See Is-Anor und einen Tempelturm nahe den Wolfsgipfeln im Wald von Fang-Forren. Sucht … Findet … Rettet …“"]},
    "Dann erlischt das ohnehin flackernde Licht in Godvindels Augen. Er ist tot.",
    {h:"Wohin als Nächstes?", p:124},
    "Nach ihrer Begegnung mit Godvindel haben die Spielercharaktere drei mögliche Orte, an denen sie nach dem Herz der Finsternis suchen können: die Hügel von Kalin bei Ankvarn, die Insel Is-Hel im See Is-Anor und den Tempelturm in Fang-Forren. Der letzte Ort ist der richtige, doch die anderen beiden können nützliche Informationen und Artefakte liefern. Lass die Spieler ihren Weg wählen."
   ]}
 ]},
 {id:"ishel", t:"Is-Hel", karte:{img:"abenteuer/pg-herz-karte-is-hel", p:128}, orte:[
  {n:"A", t:"Is-Hel", p:124, wesen:["herz-otis-voley"], b:[
   "Mitten im See Is-Anor, südöstlich von Otag, liegt die felsige Insel, die als Is-Hel bekannt ist – einer der Orte, an denen Godvindel das Herz der Finsternis vermutet. Das stimmt nicht, aber die Spielercharaktere wissen das nicht. Es ist ziemlich wahrscheinlich, dass sie die Insel besuchen werden, da sie auf dem Weg zu den anderen von dem Priester genannten Orten liegt: den Hügeln von Kalin und dem Wald von Fang-Forren.",
   "Um nach Is-Hel zu gelangen, brauchen die Charaktere ein Boot. Sie können eines in einem kleinen Dorf namens Hechtwasser am Nordufer des Is-Anor finden, direkt östlich von Otag. Gehen die Charaktere nicht selbst dorthin, kann ein NSC es ihnen erzählen. Wollen die Spieler lieber ein Floß bauen oder sich eine andere Lösung einfallen lassen, sollten kreative Ideen belohnt werden.",
   {h:"Geschichte", p:125},
   "Als Sathmogs Horden vor tausend Jahren in die Welt einfielen, waren die Elfen von Fang-Forren unter König Ilvariel eines ihrer ersten Ziele und ihre eifrigsten Gegner. Nach schweren Kämpfen, in denen die Schildmaid Iskolde und die Animistin Muriel halfen, das Kriegsglück auszugleichen, manipulierte Sathmog Ilvariels Bruder Fangiel dazu, seinem Geschwister in den Rücken zu fallen. Daraufhin ging das gesamte Elfenreich unter, und der Wald wurde von dämonischen Energien verseucht.",
   "Ilvariel hatte seinen eigenen Tod und den Untergang seines Volkes bereits vorausgesehen und das Leben nach dem Tod für sich und seine Familie vorbereitet. Als die Horden des Dämonenprinzen zu neuen Ländern weiterzogen, bestatteten die wenigen überlebenden Elfen ihren König und seine Lieben im Felsen der Insel Is-Hel. Dank Gerüchten über tödliche Fallen, Geister und rachsüchtige magische Mechanismen ist das Grab über Jahrhunderte fast unberührt geblieben.",
   {h:"Hechtwasser"},
   "Das Dorf Hechtwasser war lange eine geschäftige Gemeinde, deren Einwohner vom Fischfang und vom Handel mit den Mönchen von Otag und anderen Dörfern lebten. Doch als Dakoths Untote ihren Angriff starteten, hatte das Dorf keine Chance, und die meisten Überlebenden flohen.",
   "Die Einzigen, die geblieben sind, sind die betagten Fischer Otis und Voley, beide Froschmenschen, der eine fast taub und der andere ebenso kurzsichtig. Wegen eines Streits in der Jugend um ein Froschmädchen, das schließlich einen dritten Verehrer heiratete, herrscht zwischen ihnen tiefer Hass. Beide konnten den Untoten entkommen, indem sie sich in den See flüchteten.",
   "Otis hat den westlichen Steg des Dorfes und die beiden dort vertäuten Ruderboote (Regelbuch S. 81) für sich beansprucht. Voley hat den östlichen Steg und dessen zwei Segelboote beansprucht. Sie verbringen viel Zeit auf diesen getrennten Stegen und flicken mit dem Rücken zueinander Fischernetze. Beide brauchen dringend Münzen und Vorräte.",
   "**Feilschen:** Die Charaktere treffen zuerst auf Otis, der eine unverschämte Summe von 100 Gold für ein Ruderboot und Informationen über die Lage von Is-Hel verlangt. Voley hört, worüber sie sprechen, und ruft von seinem Steg ein paar Dutzend Meter entfernt, er könne einen viel besseren „Kahn“ anbieten – mit Segeln!",
   "Lass die Charaktere die Verhandlung führen. Der Preis beginnt bei 100 Gold für beide Optionen. Ein gelungener Wurf auf §Feilschen§ bei Otis oder Voley senkt den Preis dieser Person um 20 Gold. Die Charaktere können dann beim anderen Froschmann feilschen, um den Preis um weitere 20 Gold zu senken. Das kann so weitergehen, bis der Preis auf 20 Gold gesunken ist. Versuchen die Charaktere danach noch einmal zu §Feilschen§, geraten Otis und Voley in Streit und beginnen, aufeinander einzuschlagen, und die Charaktere müssen dazwischengehen, um zu verhindern, dass sie sich windelweich prügeln.",
   "Froschmenschen sind im *Dragonbane*-Bestiarium genauer beschrieben."
  ]},
  {n:"B", t:"Über den See", p:126, wesen:["hungernebel","herz-seeschlange"], b:[
   "Die Insel Is-Hel liegt weit südlich von Hechtwasser, und der schöne See ist voller tückischer Felsen, Sandbänke und heftiger Windböen. Die Reise dauert mindestens zwei Tagesabschnitte.",
   "In jedem Tagesabschnitt muss die Person, die das Boot steuert, einen Wurf auf §Seefahrt§ machen. Bei Misserfolg kommen die Charaktere in diesem Tagesabschnitt auf ihrer Reise nicht voran. Die Reise im Ruderboot gibt den Spielercharakteren einen Vorteil auf den Wurf, doch ein weiterer Charakter muss pro Tagesabschnitt einen STÄ-Wurf machen, damit das Boot vorankommt. Charaktere, die weder rudern noch das Boot steuern, können während der Fahrt rasten oder fischen (Regelbuch S. 103).",
   "**Zufallsereignisse:** Die Reise über die kalten Wasser des Is-Anor kann auch gefährlich sein. Würfle einmal pro Tagesabschnitt, den die Charaktere auf den Wellen verbringen, auf der nebenstehenden Tabelle oder wähle einfach ein Ereignis, das du spannend findest.",
   herzTbl("isanor")
  ]},
  {n:"C", t:"Die Insel", p:128, wesen:["einsturz"], b:[
   "Karg, windgepeitscht, sturmumtost und von feuchtem Nebel umgeben erhebt sich die Grabinsel Is-Hel wie ein Berg über fünfzig Meter hoch aus den Wellen. Wenn sich die Spielercharaktere nähern, sehen sie einen grau-gelben Strandstreifen an der West- und Nordseite der Insel. Ein rissiger Steinsteg führt zum Fuß einer breiten Treppe in der Felswand (Ort 1).",
   "**Versteckter Spalt:** Umsegeln die Spielercharaktere die Insel und suchen mindestens ein Viertel lang aktiv nach anderen Öffnungen und schaffen einen Wurf auf §Entdecken§, finden sie einen Spalt in der südlichen Felswand. Der Spalt führt direkt in Muriels Halle (10)."
  ]},
  {n:"1", t:"Die Kristalltür", p:128, pin:[23.9,51.9], wesen:[],
   vl:"Eine sich verengende Treppe führt zu einer Doppeltür aus klarstem Kristall, vier Meter hoch und fast ebenso breit. Es ist unmöglich zu wissen, was dahinter liegt – der Kristall ist so dick und die Dunkelheit dahinter so dicht, dass man nur seine eigenen Spiegelbilder sieht. Die Oberfläche der Tür ist mit fein eingravierter Schrift bedeckt.",
   st:[
    {k:"Die Inschriften", x:"lauten wie folgt:"},
    {k:"Osten", x:"Die Tür führt zur Vorhalle (2). Damit sich die Tür öffnet, muss ein Spielercharakter auf ein Knie sinken, den Nacken entblößen und seine linke Faust zum Himmel erheben. Wird dieser Akt der Ehrerbietung korrekt vollzogen, beginnt die Insel zu beben, und die gesamte Kristalltür versinkt im Fels. Kommen die Spieler nicht auf die Lösung, kannst du sie einen Wurf auf §Mythen & Legenden§ machen lassen."}
   ],
   b:[{zit:["*Ihr, die ihr Einlass begehrt,*","*um im Staub vor König Ilvariel zu kriechen,*","*Zeigt eure tiefste Ehrerbietung*","*Entblößt euch den Kiefern des Wolfs*","*Erhebt die Faust eures Herzens zum Reich der Iris*"]}]},
  {n:"2", t:"Vorhalle", p:129, pin:[30.0,51.9], wesen:["einsturz"],
   vl:"Ein breiter Korridor führt in dichte Dunkelheit. Die Decke ist fünf Meter hoch, und der staubige Boden ist mit Steinfliesen in Weiß, Grün und Schwarz gepflastert. Wenn ihr nur wenige Schritte drinnen seid, fängt das Licht eurer Lichtquelle mehrere glänzende Gegenstände ein, die in Nischen stehen, eine rechts und eine links. Und einen Atemzug später enthüllt der Schein etwas, das am Boden liegt. Oder jemanden …",
   st:[
    {k:"Überreste", x:"Auf dem Boden liegen zwei Skelette, ihre Kleidung verrottet und ihre Ausrüstung verrostet, mit wenigen Ausnahmen – sie haben jeweils einen unversehrten Dolch und eine Halskette in Form des Symbols Sathmogs. Diese Sathmog-Kultisten wurden vor vielen Jahrhunderten von Kalin hierher geschickt, wurden aber beide von der Falle unten getötet. Ein gelungener Wurf auf §Heilkunde§ zeigt, dass die Skelette schwere Quetschverletzungen von Kopf bis Fuß haben."},
    {k:"Der Baum", x:"In der Nische an der Nordseite des Korridors steht die Skulptur eines drei Meter hohen Kirschbaums. Der Baum trägt Früchte in Form von einem Dutzend glänzender Kirschen, geformt aus feinsten Rubinen."},
    {k:"Der Himmel", x:"Von der Decke der südlichen Nische hängen funkelnde Edelsteine und Metallstücke, die verschiedene Himmelskörper darstellen, verbunden durch dünne Fäden – Sterne aus Silber, eine Mondsichel aus reinem Gold, eine blaugrüne Jadekugel, die alle einen gelben Diamanten von der Größe einer Faust umkreisen. Mit einem Wurf auf §Mythen & Legenden§ kann ein Charakter sich an uralte elfische Erzählungen von ganzen Welten erinnern, die einander im leeren Raum umkreisen."},
    {k:"Falle", r:1, x:"*Die Artefakte in den Nischen symbolisieren nicht nur wichtige Aspekte der uralten elfischen Mythologie – sie sind auch als fast unwiderstehliche Falle gedacht, was ein Charakter mit einem Wurf auf* §Wahrnehmung§ *erkennen kann. Sobald jemand eine der Installationen berührt, wird eine magische Falle ausgelöst. Ihre Wirkung ähnelt dem Zauber* §SÄULE§ *– der Boden der gesamten Vorhalle, von der Schwelle im Westen bis zur Halle im Osten, schnellt mit großer Geschwindigkeit zur Decke hoch. Es gibt keinen Ausweg, sodass alle in der Vorhalle 4W6 wuchtigen Schaden erleiden. Die einzige Möglichkeit, das zu vermeiden, ist, der Versuchung zu widerstehen.*"},
    {k:"Osten", x:"Öffnung zur Grabkammer des falschen Königs (3)."},
    {k:"Westen", x:"Kristalltür zum Strand (1)."}
   ]},
  {n:"3", t:"Die Grabkammer des falschen Königs", p:130, pin:[37.6,51.9], wesen:["sarkophag-falle"],
   vl:"Eine große Kammer mit einer acht Meter hohen Gewölbedecke, bestreut mit schwach leuchtenden Punkten. Eine kurze Kolonnade führt zu einer Treppe hinauf zu einem Podium. Darauf steht ein großer Sarkophag mit einem geschnitzten Deckel, der einen schlafenden Elfenkönig mit autoritärer Ausstrahlung darstellt. An einem Ende des Sarges ist eine Inschrift eingemeißelt.",
   st:[
    {k:"Der Sarkophag", x:"Der Deckel besteht aus massivem Stein und ist sehr schwer. Ihn beiseitezuschieben dauert ein Viertel und erfordert einen gelungenen STÄ-Wurf mit einem Nachteil. Die Charaktere können einander helfen. Der Sarkophag ist leer bis auf eine golden glänzende Krone. Heben die Charaktere sie auf, merken sie schnell, dass die Krone nur vergoldet und in Wirklichkeit aus Kupfer ist (20 Kupfermünzen wert)."},
    {k:"Kratzspuren", r:1, x:"*Spielercharaktere, die in oder um den Sarkophag aktiv suchen, können einen Wurf auf* §Entdecken§ *machen. Wem er gelingt, bemerkt Kratzspuren im Stein des Podiums in Richtung der Treppe – als ließe sich der Sarg beiseiteschieben. Doch der Sarg bewegt sich nicht.*"},
    {k:"Die Inschrift", x:"Der Text am Ende des Sarkophags ist so uralt, dass es ein Viertel dauert, ihn zu übersetzen, und selbst Elfen müssen einen Wurf auf §Fremdsprachen§ machen (Nicht-Elfen erhalten einen Nachteil). Je nach Ergebnis (siehe die nebenstehende Tabelle) wird ein magischer Effekt ausgelöst, wenn der Text laut vorgelesen wird. Dieser Wurf wird geheim von der SL gemacht und kann nicht strapaziert werden."},
    {k:"Osten", r:1, x:"*Öffnet sich der Sarkophag, enthüllt er eine steile Treppe hinab zu einem dunklen und feuchten Korridor, der zur Grabkammer des wahren Königs (8) führt.*"},
    {k:"Süden", x:"Öffnung zur Kammer der Gemahlin (6)."},
    {k:"Westen", x:"Öffnung zur Vorhalle (2)."},
    {k:"Norden", x:"Öffnung zur Kammer der Mutter (4)."}
   ]},
  {n:"4", t:"Die Kammer der Mutter", p:130, pin:[41.4,40.8], wesen:[],
   vl:"Eine kleine Kammer mit hoher Decke und einem Steinsarkophag in der Mitte. Das exquisite Mosaik an den Wänden stellt einen üppigen Laubwald aus sonnenbeschienenen Bäumen dar. Die Gewölbedeckenmalerei eines wolkenlosen Himmels und das Waldmuster am Boden verschmelzen mit dem Mosaik, sodass es sich anfühlt, als stünde der Sarkophag zwischen den Bäumen.",
   st:[
    {k:"Der Sarkophag", x:"aus weißgrauem Marmor hat einen geschnitzten Deckel, der eine alte Elfenfrau mit königlicher Miene darstellt. Der Deckel ist sehr schwer, und ihn zu entfernen erfordert einen gelungenen STÄ-Wurf mit einem Nachteil. Andere Charaktere können helfen."},
    {k:"Die Mutter", x:"Unter dem Deckel liegen die Überreste einer Elfenfrau in zerfallenden weißen Gewändern. Alles, was sie mit ins Grab genommen hat, ist ein juwelenbesetztes Diadem aus Weißgold (18 Gold wert)."},
    {k:"Osten", x:"Öffnung zum Nordkorridor (5)."},
    {k:"Süden", x:"Öffnung zur Grabkammer des falschen Königs (3)."}
   ]},
  {n:"5", t:"Der Nordkorridor", p:130, pin:[48.3,42.3], wesen:[],
   vl:"Ein Korridor mit Wandmosaiken eines belaubten, grünen Waldes führt in die Dunkelheit. Auf halber Strecke wird der Boden von einem scheinbar bodenlosen Abgrund unterbrochen, bevor er sechs Meter weiter fortgesetzt wird. Vor dem Abgrund ist ein kurzer Text in den Boden eingemeißelt.",
   st:[
    {k:"Der Text", x:"auf dem Boden ist in altem Elfisch verfasst, und ihn zu lesen erfordert einen Wurf auf §Fremdsprachen§ (Nicht-Elfen erhalten einen Nachteil auf den Wurf). Er lautet: „Der Gläubige darf passieren.“"},
    {k:"Der Abgrund", x:"kann von Charakteren mit Bewegung 12 oder höher mit einem Wurf auf §Akrobatik§ übersprungen werden (Regelbuch S. 43). Er kann auch mit magischen Mitteln überquert werden. Aber das ist eigentlich nicht nötig – der Abgrund ist eine magische Illusion. Spielercharaktere, die einen Schritt in den Abgrund machen (oder ihre Sprünge verpatzen), stehen auf einem unsichtbaren, völlig sicheren Steinboden. Einen unbelebten Gegenstand in den Abgrund zu werfen, enthüllt die Illusion jedoch nicht – er wird Teil der Illusion und scheint in die Tiefe zu stürzen."},
    {k:"Osten", x:"Öffnung zur Grabkammer des wahren Königs (8)."},
    {k:"Westen", x:"Öffnung zur Kammer der Mutter (4)."}
   ]},
  {n:"6", t:"Die Kammer der Gemahlin", p:131, pin:[41.4,63.3], wesen:[],
   vl:"Das Mosaik an den Wänden, der Decke und dem Boden dieser kleinen Kammer stellt den Thronsaal eines Palastes dar, mit gemeißelten Säulen, die zu einem Podium mit zwei kunstvollen Thronen unter einer mit Blumenmotiven bemalten Gewölbedecke führen. Vor den Thronen im Mosaik steht ein großer Steinsarkophag.",
   st:[
    {k:"Der Sarkophag", x:"aus weißgrauem Marmor hat einen geschnitzten Deckel, der eine junge Elfenfrau mit edlen Zügen darstellt. Der Deckel ist sehr schwer, und ihn zu entfernen erfordert einen gelungenen STÄ-Wurf mit einem Nachteil. Andere Charaktere können helfen."},
    {k:"Die Gemahlin", x:"Sobald zwischen Deckel und Sarg ein Spalt entsteht, ertönt ein herzzerreißender Schrei, und ein eisiger Windstoß fährt aus dem Sarkophag – es ist der Geist der Gemahlin, der entweicht. Jeder im Raum muss einen WIL-Wurf machen, um der Furcht zu widerstehen. Im Sarg liegt eine knochentrockene Mumie, umgeben von Wertsachen im Wert von zwei Schatzkarten. Zudem hält sie die Hände an der Brust um das Heft eines Dolches gefaltet, den die Spielercharaktere wahrscheinlich erkennen werden …"},
    {k:"Der Dolch", x:"in der Hand der Gemahlin ist genau wie der, den die Charaktere vom Mönch Tefalas erhielten (S. 56), und ebenso in der Lage, einen Todeswiedergänger zu fangen."},
    {k:"Osten", x:"Öffnung zum Südkorridor (7)."},
    {k:"Norden", x:"Öffnung zur Grabkammer des falschen Königs (3)."}
   ]},
  {n:"7", t:"Der Südkorridor", p:131, pin:[48.3,62.2], wesen:[],
   vl:"Ein Korridor mit Wandmosaiken, die einen wunderschönen Elfenpalast darstellen, führt in die Dunkelheit. Ein Stück weiter endet der Korridor abrupt an einer Wand. Davor ist ein Text in den Boden eingemeißelt.",
   st:[
    {k:"Der Text", x:"auf dem Boden ist in altem Elfisch verfasst, und ihn zu lesen erfordert einen Wurf auf §Fremdsprachen§ (Nicht-Elfen erhalten einen Nachteil auf den Wurf). Er lautet: „Der Demütige darf passieren.“"},
    {k:"Osten", r:1, x:"*Der untere Teil der Ostwand lässt sich nach innen drücken. Die ganze Wand dreht sich dann um eine Querachse und öffnet einen niedrigen Durchgang zur Grabkammer des wahren Königs (8). Um ihn zu finden, müssen die Charaktere aktiv den unteren Teil der Wand nach innen drücken und einen* STÄ*-Wurf schaffen.*"},
    {k:"Westen", x:"Öffnung zur Kammer der Gemahlin (6)."}
   ]},
  {n:"8", t:"Die Grabkammer des wahren Königs", p:131, pin:[55.9,57.7], wesen:[],
   vl:"Das Licht eurer Lichtquelle reicht nicht bis zur Decke dieser riesigen Halle. An den Seiten befinden sich Öffnungen zu Nischen, jede mit einem Steinsarg. Silberne Namensschilder sind über den Öffnungen angebracht. In der Mitte der Halle steht ein großer Sarkophag mit einem geschnitzten Deckel, der einen schlafenden Elfenkönig mit autoritärer Ausstrahlung darstellt.",
   st:[
    {k:"Der Sarkophag des Königs", x:"Der Sarkophag gehört König Ilvariel selbst, und sein Name ist in den schweren Deckel eingemeißelt. Ihn zu entfernen erfordert einen STÄ-Wurf mit einem Nachteil. Andere Charaktere können helfen. Im Sarg liegt ein ausgetrockneter Leichnam in zerfallender Kleidung auf einem ebenso zerfallenden Samtbett, geschmückt mit Ringen, Armreifen und Halsketten im Wert von 59 Gold."},
    {k:"Nischen", x:"Es gibt insgesamt 14 Nischen – vier in jeder Wand, außer der westlichen, die zwei hat. Alle bis auf eine enthalten einen Steinsarg. Es dauert ein Viertel, eine Nische zu durchsuchen, doch die Charaktere können die Arbeit untereinander aufteilen. In jeder Nische außer den drei auf der Karte mit Buchstaben markierten kann der Charakter einen Wurf auf §Entdecken§ machen und (bei Erfolg) eine Schatzkarte finden. Jeder Charakter darf pro Nische nur einmal würfeln, und pro Nische kann nur eine Karte gefunden werden. Achte darauf, die Zeit im Auge zu behalten (siehe den Kasten Der Einsturz der Insel auf S. 129). Die mit A, B und C markierten Nischen haben besonderen Inhalt und Namen wie folgt:"},
    {k:"A. Nianive", x:"In dieser Nische gibt es keinen Sarg und keine Wertsachen. An der Rückwand befindet sich eine schöne Kupfertafel mit elfischer Gravur, die mit einem gelungenen Wurf auf §Fremdsprachen§ gelesen werden kann (Nicht-Elfen erhalten einen Nachteil auf den Wurf): „Geliebte Nianive, im Geiste bei uns, im Fleisch gefangen, im Dämonenturm Sathmogs in Fang-Forren.“"},
    {k:"B. Gloriman", x:"König Ilvariels Lieblingssohn ist hier mit seinem Langbogen Mithrindel begraben (WAFFE VERZAUBERN Kraftstufe 1, DAUERHAFTIGKEIT)."},
    {k:"C. Glorial", x:"König Ilvariels Lieblingstochter ist hier mit ihrem Flegel Eloril begraben (WAFFE VERZAUBERN Kraftstufe 1, DAUERHAFTIGKEIT)."},
    {k:"Osten", x:"Öffnung zur Halle der Nachkommen (11)."},
    {k:"Süden", x:"Öffnung zu Muriels Halle (10)."},
    {k:"Westen", r:1, x:"*Ein kurzer Korridor endet an einer Wand, deren unterer Teil sich nach innen drücken lässt. Dann dreht sich die ganze Wand um eine Querachse und öffnet einen niedrigen Durchgang zum Südkorridor (7). Um ihn zu finden, müssen die Charaktere aktiv den unteren Teil der Wand nach innen drücken und einen* STÄ*-Wurf schaffen.*"},
    {k:"Westen", x:"Öffnung zur Grabkammer des falschen Königs (3)."},
    {k:"Westen", x:"Öffnung zum Nordkorridor (5)."},
    {k:"Norden", x:"Öffnung zu Iskoldes Halle (9)."}
   ]},
  {n:"9", t:"Iskoldes Halle", p:132, pin:[60.1,33.5], wesen:["herz-iskolde"],
   vl:"Ein paar Meter hinter der Öffnung fällt der Schein eurer Lichtquelle auf eine vier Meter hohe, glänzend weiße Statue. Sie stellt eine elfische Kriegerin mit Speer und einem großen, verzierten Schild dar, den sie zur Verteidigung erhoben hält. Am Sockel der Statue steht eine Inschrift. Hinter ihr, weiter hinten in der Halle, führt eine Treppe hinauf zu einem Podium, gekrönt von einem großen Sarkophag. Er besteht wie der Boden aus blutrotem Marmor, während Treppe, Podium und Wände schwarz sind.",
   st:[
    {k:"Die Inschrift", x:"auf der Statue ist in altem Elfisch geschrieben, und ihr Lesen erfordert einen Wurf auf §Fremdsprachen§ (Nicht-Elfen erhalten einen Nachteil auf den Wurf). Sie lautet: „Schildmaid Iskolde, unsere Beschützerin.“"},
    {k:"Der Sarkophag", x:"Den Deckel des Sarkophags zu entfernen erfordert einen STÄ-Wurf. Andere Charaktere können helfen. Im Sarkophag liegt die mumifizierte Schildmaid Iskolde mit einem großen Schild auf der Brust."},
    {k:"Die Mumie", x:"wurde anders behandelt als die anderen Toten in der Grabstätte – die gelbliche Haut deutet darauf hin, dass sie einbalsamiert wurde, und bis auf das Gesicht ist ihr ganzer Körper fest eingewickelt. Berührt jemand ihren Schild, erwacht Iskolde in Wut und greift an."}
   ],
   b:[{bild:{img:"abenteuer/pg-herz-iskolde-halle"}}]},
  {n:"10", t:"Muriels Halle", p:132, pin:[60.1,70.6], wesen:["gestohlene-waffen"],
   vl:"Eine vier Meter hohe Statue aus schimmerndem weißem Stein begrüßt euch in der Halle. Sie stellt eine verschleierte Frau mit ausgestreckten Armen dar, deren Körper von blühenden Ranken überzogen ist. Weiter hinten steht ein Sarkophag auf einem Podium. Das Podium, die Stufen davor und die Wände der Halle bestehen aus goldenem Stein, während der Boden und der Sarkophag selbst dunkelgrün sind. Eine leichte Brise lässt den Saum eures Umhangs wehen, und ihr hört den Wind blasen …",
   st:[
    {k:"Der Sarkophag", x:"Den Deckel des Sarkophags zu entfernen erfordert einen STÄ-Wurf. Andere Charaktere können helfen. Unter dem Deckel liegt die Animistin Muriel."},
    {k:"Muriel", x:"war zu Lebzeiten als rachsüchtig und eitel bekannt, Eigenschaften, die sie mit in den Tod nahm. Wer auf ihre Überreste hinabblickt, erlebt einen Schock – dank besonderer Vorbereitungen und Tinkturen scheinen ihr Körper und ihre Kleidung von der Zeit unberührt. Im Sarg liegt eine wunderschöne Elfenfrau in Weiß, mit zusammengepressten Lippen und einer sorgenvoll gefurchten Stirn – sie scheint zu schlafen. Ihre Hände ruhen auf einem Buch auf ihrer Brust. Wer die Frau untersucht und einen Wurf auf §Heilkunde§ schafft, erkennt, dass sie tot ist."},
    {k:"Das Buch", x:"ist Muriels Zauberbuch, das besonders präpariert ist. Wer in dem abgegriffenen, ledergebundenen Buch blättert, ist einem Gift ausgesetzt, das über die Poren der Finger aufgenommen wird. Das Gift ist tödlich und hat Wirkstärke 15. Nur mit Hilfsmitteln wie Pinzetten kann das Buch gelesen werden, ohne sein Leben zu riskieren. Das Zauberbuch enthält die Zauber §REINIGEN§, §WUNDE HEILEN§, §VERSCHLINGENDER WALD§ und §SCHLAF§."},
    {k:"Norden", x:"Öffnung zur Grabkammer des wahren Königs (8)."},
    {k:"Süden", r:1, x:"*Ein schmaler, unregelmäßiger Spalt in der Wand hinter dem Sarkophag führt nach draußen, zur südöstlichen Seite von Is-Hel. Die Charaktere können ihn entdecken, indem sie aktiv dem Wind folgen oder beim allgemeinen Durchsuchen der Halle einen Wurf auf* §Entdecken§ *schaffen.*"}
   ]},
  {n:"11", t:"Die Halle der Nachkommen", p:134, pin:[75.5,51.9], wesen:["wo-ist-das-herz"],
   vl:"Diese hallende Halle ist völlig rund. Nach ein paar Schritten auf dem polierten Steinboden fällt der Schein eurer Lichtquelle auf einen Haufen Schädel. Nein, nicht einen Haufen – einen regelrechten Berg, gegen die gegenüberliegende Wand gestapelt.",
   st:[
    {k:"Schätze", x:"Einige der Schädel wurden von Grabbeigaben verschiedener Art begleitet, die mit ihren früheren Besitzern beigesetzt wurden, aber wegen Absackungen im Haufen versunken sind. Jeder Spielercharakter kann pro Viertel, das er mit dem Wühlen unter den Schädeln verbringt, einen Wurf auf §Entdecken§ machen. Wem er gelingt, darf eine Schatzkarte ziehen, bis insgesamt fünf Karten gefunden wurden."}
   ]}
 ]},
 {id:"kalin", t:"Hügel von Kalin", karte:{img:"abenteuer/pg-herz-karte-kalin", p:135}, orte:[
  {n:"A", t:"Die Hügel von Kalin", p:134, wesen:[], b:[
   "Das Herz der Finsternis ist nicht in den Hügeln von Kalin vergraben, wie die Spielercharaktere herausfinden können, wenn sie dorthin gehen. Was dort ist, ist jedoch ein Heer von Hunderten von Orks und Untoten. Auch Dakoth ist dort, leibhaftig, unerreichbar und in schlechtester Laune.",
   "Die Charaktere werden kaum an den Nekromanten herankommen, da er von einer bewaffneten Horde umgeben ist. Aber sie haben eine Chance, nahe genug heranzukommen, um sein Gespräch mit dem narbigen Orkhäuptling Uhulu-Uhurm (dem Vater des Verräters Uhuluk) zu belauschen, was wichtige Informationen liefern kann.",
   "Kommen die Charaktere auf dem Weg zu den Hügeln durch Ankvarn, finden sie das kleine Städtchen völlig niedergebrannt vor. Eine Handvoll Verwundeter, größtenteils Enten, bewegt sich zwischen den Trümmern und legt Dutzende von Toten in Reihen auf dem Stadtplatz ab. Sprechen die Charaktere sie an, haben sie wenig mehr zu sagen, als dass es Dakoth und seine Armee waren, die die Stadt und ihre Bevölkerung ausgelöscht haben.",
   {h:"Geschichte"},
   "Der Steinkreis auf dem Grabhügel in den Hügeln von Kalin wurde tatsächlich zu Ehren von Prinz Kalin errichtet, doch die Geschichte, er sei dort begraben, ist ein Seemannsgarn, das örtliche Händler erfunden haben, um Pilger in die Gegend zu locken. Unter dem Hügel gibt es nicht einmal ein Königsgrab – nur erbärmliche Katakomben für örtliche Sathmog-Anhänger.",
   {h:"Aktuelle Lage"},
   "Seit er den Kontakt zu seinen Schergen in den Zwergenminen verloren hat, interessiert sich Dakoth für andere Orte, an denen das Herz der Finsternis verborgen sein könnte. Obwohl sein Eroberungskrieg gegen die Menschen der Ostlande noch beendet werden muss, hat er persönlich das Kommando über eine große Streitmacht übernommen, um einige Orte zu untersuchen, die wahrscheinlich erscheinen, während die Armee überall, wohin sie kommt, die Einheimischen unterwirft.",
   "Dakoth traf ein paar Tage vor den Spielercharakteren an den Hügeln von Kalin ein, und die Ergebnisse seiner Ausgrabungen haben ihn zutiefst enttäuscht. Obwohl er zögert, den dämonischen Wald von Fang-Forren zu betreten, will er als Nächstes dorthin.",
   {h:"Orte", p:135},
   "Die Ausgrabung des Grabhügels in den Hügeln von Kalin ist fast abgeschlossen, als die Spielercharaktere eintreffen. Zeige ihnen die untenstehende Karte, wenn sie näher kommen. Sie sehen in der Ferne mehrere Personen, darunter einen Mann mit langem schwarzem Haar und einem Stab, auf der Kuppe eines hohen Hügels, gekrönt von einem Ring aus Standsteinen (1). Um den Hügel und südlich des sich schlängelnden Bachs (3), der sich an seinem Fuß entlangwindet, liegt ein riesiges Lager (2) mit vielen Hundert Orks und Untoten. Im Nordosten liegt ein Hain (4). Die Charaktere können an dieser Stelle umkehren oder sich über den Bach oder den Hain näher an den Grabhügel heranschleichen."
  ]},
  {n:"1", t:"Grabhügel", p:135, pin:[51.3,31.9], wesen:[],
   vl:"Der Hügel erhebt sich zehn Meter über die umliegende Landschaft, gekrönt von einem Ring aus sechs mannshohen Steinen. Neben einem klaffenden Loch in der Mitte des Rings liegt ein großer Erdhaufen, aufgeschüttet von Orks und Untoten mit Schaufeln und Eimern. Einige größere Untote haben einen nach außen gerichteten Kreis gebildet – ein Dutzend Krieger in voller Rüstung, ihre riesigen Zweihandschwerter auf den Boden gestützt.",
   st:[
    {k:"Ein Blick auf Dakoth", x:"Gerade als die Spielercharaktere in der Gegend eintreffen, macht sich Dakoth bereit, in die Katakomben hinabzusteigen. Aus der Ferne sind Einzelheiten nicht leicht zu erkennen, doch wer ein Fernglas hat oder einen Wurf auf §Wahrnehmung§ schafft, kann einen Mann sehen, der den anderen Befehle erteilt. Er hat langes schwarzes Haar und trägt einen weiten schwarzen Umhang über einer ebenso schwarzen Tunika. Sein schwarzer Stab wird von mehreren Schädeln gekrönt. Zeige den Spielern das Bild auf S. 6. Dann verschwindet er im Loch."}
   ]},
  {n:"2", t:"Heerlager", p:136, pin:[40.7,73.2], wesen:["entdeckt"],
   vl:"Reihe um Reihe von Skelettkriegern steht in perfekter Formation am Rand des Lagers und wartet unermüdlich auf neue Befehle. Weiter innen haben die Orks ihre geflickten Zelte aufgeschlagen und Feuerstellen angelegt. Es ist ein riesiges Heer – vier- bis fünfhundert Mann stark, beaufsichtigt von Rittern in zerlumpten Umhängen auf untoten Streitrössern.",
   st:[
    {k:"Eine unüberwindliche Bedrohung", x:"Wer das Heer beobachtet und einen Wurf auf §Mythen & Legenden§ schafft, kann sich an nur eine Handvoll ebenso gewaltiger Heere erinnern, die seit den Tagen der Dämonenkriege ins Feld geführt wurden. Charaktere, die sich dem Heerlager von irgendeiner anderen Seite als dem Bach oder dem Hain nähern, werden sofort entdeckt (siehe den Kasten unten)."}
   ]},
  {n:"3", t:"Talgbach", p:136, pin:[58.1,48.4], wesen:["gespraech","entdeckt"],
   vl:"Der Bach glitzert dunkel, während er am Fuß des Grabhügels entlangfließt. Sein Ufer fällt fast einen Meter steil ab, und die Innenseite der Biegung ist üppig mit Schilf bewachsen.",
   st:[
    {k:"Im Bach kriechen", x:"Der beste Weg, sich dem Grabhügel zu nähern, könnte sein, sich entlang des Bachbetts zu §Heimlichkeit§. Da die Orks direkt neben dem Bach sind, erhält der schleichende Charakter zunächst einen Nachteil auf den Wurf. Doch mit gründlicher Vorbereitung und der Wahl des richtigen Ansatzes lässt sich das durch einen oder mehrere Vorteile ausgleichen, etwa indem man ein Schilfrohr zum Atmen unter der Oberfläche benutzt, sich im Schilf versteckt und sich an das steile Ufer presst. Gelingt der Versuch, siehe den nebenstehenden Kasten Gespräch. Misslingt er, siehe den Kasten Entdeckt!."}
   ]},
  {n:"4", t:"Hain", p:136, pin:[63.8,20.9], wesen:["gespraech"],
   vl:"Nur einen Steinwurf vom Grabhügel entfernt liegt eine Baumgruppe – dicht genug, um als Versteck zu dienen, nah genug, um einen guten Blick auf das Geschehen auf dem Hügel zu haben.",
   st:[
    {k:"Aussichtspunkt", x:"Der Hain ist weiter vom Grabhügel entfernt als der Fluss, und die Spielercharaktere können ihn erreichen, ohne Würfe machen zu müssen. Dort angekommen, können sie sehen, was geschieht, wie im Kasten Gespräch beschrieben, doch um das Gespräch zwischen Dakoth und dem Orkhäuptling zu hören, muss mindestens ein Charakter einen Wurf auf §Wahrnehmung§ machen."}
   ]}
 ]}
);

Object.assign(A.figuren, {
 "herz-otag-skelettkrieger":{typ:"monster", t:"Skelettkrieger (Otag)", p:116,
  werte:[["Bewegung","8"],["Schadensbonus","–"],["TP","8"]],
  zl:[["Fertigkeiten","Wahrnehmung 8, Ausweichen 6"],["Rüstung","Beschlagenes Leder (2)"],["Waffen","Kurzspeer (Fertigkeitswert 14, Schaden W10), Kleiner Schild"],["Widerstand","Jeder stechende Schaden wird halbiert (aufgerundet)."],["Immunität","Skelette sind immun gegen Furcht und §Überzeugen§."]], be:"skelett"},
 "herz-otag-skelettbogen":{typ:"monster", t:"Skelettbogenschütze (Otag)", p:116,
  werte:[["Bewegung","8"],["Schadensbonus","–"],["TP","8"]],
  zl:[["Fertigkeiten","Wahrnehmung 8, Ausweichen 6"],["Rüstung","Leder (1)"],["Waffen","Armbrust (Fertigkeitswert 14, Schaden 2W6), Dolch (Fertigkeitswert 10, Schaden W8), Köcher"],["Widerstand","Jeder stechende Schaden wird halbiert (aufgerundet)."],["Immunität","Skelette sind immun gegen Furcht und §Überzeugen§."]], be:"skelett"},
 "herz-balozar":{typ:"monster", t:"Balozar", p:118, tp:36,
  werte:[["Bewegung","10"],["Schadensbonus STÄ","+W6"],["TP","36"],["WP","15"]],
  zl:[["Rüstung","Plattenrüstung (6)"],["Fertigkeiten","Wahrnehmung 6, Ausweichen 8"],["Talente","Berserker, Defensiv, Doppelhieb, Wuchtschlag, Robust × 10"],["Ausrüstung","Großschwert (Fertigkeitswert 16, Schaden 2W10), Schlüssel zum Käfig in Raum 25"]],
  text:["Ein Skelettkrieger, der Dakoths Krieg von allem Anfang an gedient hat. Er hat kaum mehr als Staub zwischen den Ohrlöchern, aber kämpfen kann er. Und zerschmettern. Und vernichten."], be:"skelett"},
 "herz-maragander":{typ:"monster", t:"Der Geist von Maragander", p:122,
  werte:[], zl:[],
  text:["Der Sathmog-Anhänger Maragander aus Steinmund ist einer der Letzten, die hier einem intensiven Verhör unterzogen wurden. Schwer verletzt starb er, nachdem Dakoth Otag erobert hatte, und wurde von den unheiligen Energien der Todeswiedergängerin Mirlefth wieder erweckt.","Maragander erinnert sich nur an die Qual, die seinem Tod vorausging. Er zittert vor verhaltener Wut, als er sich den Eindringlingen nähert, ist aber bereit, ihnen eine Chance zu geben, besonders wenn sie sich als gläubige Anbeter des einen wahren Gottes Sathmog erweisen. Er beginnt mit einer einfachen Frage:","„Ihr, die ihr meine Ruhe stört, liebt ihr Sathmog?“","Antworten die Spielercharaktere mit einem eindeutigen „Nein“, greift er sofort an, verlässt aber den Keller nicht. Fällt ihre Antwort bejahend oder differenzierter aus, folgt er mit einer weiteren Frage, nur um sicherzugehen: „Nennt mir den Namen des ersten Hohepriesters von Steinmund, der dem Propheten Kalin nachfolgte?“","Nun können die Charaktere wählen, ob sie versuchen, Maragander zu §Überzeugen§ (mit einem Nachteil), dass sie die Frage nicht wirklich beantworten müssen. Die richtige Antwort lautet Gultrub, was die Charaktere nach ihrer Zeit in Steinmund wahrscheinlich wissen. Antworten sie falsch, greift der Geist an (Werte nach Regelbuch S. 96).","Ein gelungener Überzeugungsversuch oder die richtige Antwort lässt Maragander zustimmend nicken. Er kann eine Frage über den Sathmog-Kult in den Ostlanden oder darüber beantworten, was ihm in Otag geschehen ist, bevor er mit einem Abschiedsgruß verblasst:","„Möge Sathmog mit euch sein, möge seine Finsternis euren Weg leiten.“"], be:"geist"},
 "herz-bunkh":{typ:"nsc", t:"Bunkh", p:122, img:"abenteuer/pg-herz-bunkh", tp:12,
  werte:[["Bewegung","10"],["Schadensbonus STÄ","+W4"],["TP","12"]],
  zl:[["Rüstung","–"],["Fertigkeiten","Wahrnehmung 10, Ausweichen 8"],["Waffen","Fäuste (Fertigkeitswert 14, Schaden W6)"]],
  text:["Bevor Uhuluk in Steinmund revoltierte, schickte er Späher zu Orten, von denen er wusste, dass Dakoths Streitkräfte dort stationiert waren. Einer davon war Bunkh, der nach Otag geschickt wurde, aber nicht viel ausspionieren konnte, bevor er entdeckt und gefangen genommen wurde. Er erzählte ihnen alles, was er über die Pläne seines Häuptlings wusste, und gab vor, Dakoth gegenüber fanatisch loyal zu sein. Er will nicht befreit werden, sondern eine weitere Chance bekommen, sich Dakoths Reihen anzuschließen.","Wecken die Spielercharaktere ihn auf, ruft Bunkh sofort um Hilfe. Die Wachpatrouille aus der Kaserne (S. 119) trifft dann nach drei Runden aus dem Treppenhaus ein. Kommt es im Keller zu einem Kampf, wird er von den Skeletten im Tempel oder im Hauptgebäude nicht bemerkt.","Gelingt es den Charakteren, die Zelle zu betreten, ohne Bunkh zu wecken, können sie ihn mit Drohungen zum Schweigen bringen und ihn dann §Überzeugen§ oder §Täuschen§, ihnen von dem Gefangenen zu erzählen, der kürzlich von hier weggebracht wurde:","„Uhhh, weiß nich. So ’n Priester. Faltig wie ’ne alte Rübe, blass wie Knochen. Die haben ihn weggebracht, die Untoten. Der Wiedergänger hat was geflüstert von ‚dem Meister treffen‘ und was von ’nem Käfig. Das war vor drei Nächten.“"]},
 "herz-otis-voley":{typ:"nsc", t:"Otis und Voley", p:125, img:"abenteuer/pg-herz-otis-voley", tp:8,
  werte:[["Bewegung","10"],["Schadensbonus","–"],["TP","8"]],
  zl:[["Rüstung","–"],["Fertigkeiten","Akrobatik 12, Wahrnehmung 8, Seefahrt 14, Heimlichkeit 10"],["Waffen","Kurzspeer (Otis, Fertigkeitswert 10, Schaden W10), Messer (Voley, Fertigkeitswert 10, Schaden W8)"],["Springen","Froschmenschen können diese Fähigkeit aktivieren, um horizontal so weit zu springen wie ihre Bewegungsrate oder vertikal bis zur Hälfte ihrer Bewegungsrate."]]},
 "herz-seeschlange":{typ:"monster", t:"Seeschlange", p:127, img:"abenteuer/pg-herz-seeschlange", tp:56,
  werte:[["Grimmigkeit","2"],["Größe","Groß"],["Bewegung","18"],["Rüstung","3"],["TP","56"]],
  zl:[["Geschmack von Blut","Zieht ein Angriff auf den Schwanz einer Seeschlange (mit einem Nachteil gewürfelt) Blut (verursacht mindestens einen Punkt hauenden oder stechenden Schaden), würfle W6, sobald die Seeschlange angreift. Bei 4–6 greift das Biest sich selbst an statt einen Feind. Die Spielercharaktere können diese Schwäche mit einem gelungenen Wurf auf §Tierkunde§ erkennen."]],
  angriffe:{h:"Monsterangriffe", w:"W6", rows:[
   ["1","**Schwanzhieb!** Die Seeschlange schlägt mit dem Schwanz nach einem Gegner innerhalb von 10 Metern. Der Angriff verursacht 2W8 wuchtigen Schaden und wirft das Opfer zu Boden."],
   ["2","**Verschlingen!** Das Biest verschlingt den Gegner mit der höchsten STÄ und verursacht 2W6 Schaden (Rüstung wirkt nicht). Der Spielercharakter kann die Seeschlange von innen weiter angreifen, wo sie keine Rüstung hat. Doch für jede Runde im Bauch des Biests erleidet das Opfer in seinem Zug W6 Schaden (Rüstung wirkt nicht). Das Opfer kommt frei, sobald das Monster tot ist."],
   ["3","**Wilder Biss!** Die Seeschlange beißt einen Spielercharakter mit ihren rasiermesserscharfen Zähnen. Der Angriff verursacht 2W8 hauenden Schaden."],
   ["4","**Ertränken!** Die Seeschlange zieht einen Gegner in die Tiefe, und das Opfer beginnt sofort zu ertrinken, nach Regelbuch S. 53. Der Spielercharakter kann sich nicht bewegen oder Aktionen ausführen, die Bewegung erfordern, außer zu versuchen, sich zu befreien, was einen STÄ-Wurf mit einem Nachteil erfordert. Andere können helfen."],
   ["5","**Vernichtender Schlag!** Das Biest erhebt sich hoch über das Wasser und lässt seinen schweren Körper auf bis zu zwei Spielercharaktere innerhalb von 4 Metern zueinander fallen. Beide Opfer erleiden 2W6 wuchtigen Schaden und werden zu Boden geworfen."],
   ["6","**Umschlingen!** Das Biest schlingt seinen Schwanz um einen Gegner innerhalb von 10 Metern und versucht, ihm das Leben auszupressen. Der Angriff verursacht 2W6 wuchtigen Schaden und ebenso viel, wann immer das Opfer an der Reihe ist. Das Opfer kann sich nicht bewegen oder Aktionen ausführen, die Bewegung erfordern, außer zu versuchen, sich zu befreien, was einen STÄ-Wurf mit einem Nachteil erfordert. Andere können helfen."]
  ]}},
 "herz-iskolde":{typ:"monster", t:"Die Mumie der Iskolde", p:133, tp:48,
  werte:[["Grimmigkeit","2"],["Größe","Normal"],["Bewegung","6"],["Rüstung","–"],["TP","48"]],
  zl:[["Widerstand","Die Mumie hat keine inneren Organe und erleidet daher nur halben Schaden durch stechende Waffen."],["Entflammbar","Mumien sind trocken wie Zunder und erleiden doppelten Schaden durch Feuer."],["Der Kampfschild Iskolde","Ein meisterhaft gefertigter Großer Schild (Haltbarkeit 18), durchdrungen von einer Version des Zaubers §MAGISCHER SCHILD§. Anders als bei anderen magischen Gegenständen muss der Träger einen eingehenden Zauber erfolgreich parieren (Wurf auf eine beliebige Waffenfertigkeit), um den §MAGISCHEN SCHILD§ zu aktivieren. Das kostet keine WP – stattdessen wird der Zauber des Angreifers vollständig abgeblockt, und der Träger des Schildes erhält WP in Höhe der Kraftstufe. Iskolde nutzt den Schild, um sich gegen Zauberangriffe zu verteidigen, wenn sie Aktionen dafür übrig hat. Besiegen die Spielercharaktere Iskolde, können sie ihren Schild nehmen und selbst benutzen, müssen aber zuerst verstehen, wie seine Magie funktioniert, indem sie seine magischen Inschriften lesen (Regelbuch S. 59)."]],
  text:[],
  angriffe:{h:"Monsterangriffe", w:"W6", rows:[
   ["1","**Fluch!** Iskolde zischt einen mächtigen Fluch gegen alle Spielercharaktere innerhalb von 10 Metern, die einen WIL-Wurf machen müssen, um der Furcht zu widerstehen."],
   ["2","**Schildhieb!** Iskolde schwingt ihren Schild gegen einen Spielercharakter und verursacht 3W6 wuchtigen Schaden und wirft ihn zu Boden."],
   ["3","**Schildwurf!** Iskolde schleudert ihren Schild nach dem Spielercharakter mit der niedrigsten STÄ innerhalb von 10 Metern und verursacht 2W8 wuchtigen Schaden. Iskolde geht dann zum Opfer und hebt ihren Schild auf."],
   ["4","**Schildschlag!** Iskolde schmettert ihren Schild mit solcher Wucht auf den Boden, dass alle Spielercharaktere innerhalb von 10 Metern Benommen werden und einen Wurf auf §Ausweichen§ machen müssen (keine Aktion) oder ihren Zug in der Runde verlieren (sofern er nicht schon vorbei ist). Dem Angriff kann nicht ausgewichen werden."],
   ["5","**Tödlicher Wurf!** Iskolde packt einen Spielercharakter und schleudert ihn mit ihren unnatürlich starken Armen. Das Opfer landet 2W6 Meter entfernt am Boden und erleidet ebenso viel wuchtigen Schaden."],
   ["6","**Würgen!** Iskolde packt einen Spielercharakter fest an der Kehle. Das Opfer erleidet W10 wuchtigen Schaden (Rüstung wirkt nicht) und zusätzlich W10, wann immer Iskolde an der Reihe ist. Das Opfer kann sich nicht bewegen oder Aktionen ausführen, die Bewegung erfordern, außer zu versuchen, sich zu befreien, was einen STÄ-Wurf mit einem Nachteil erfordert. Andere können helfen. Iskolde führt keine anderen Monsterangriffe aus, bis das Opfer bei null TP ist oder sich befreit."]
  ]}}
});

Object.assign(A.kaesten, {
 "ankh-otag":{k:"Ankh-Tah-Leh", p:116, b:[
  "Haben die Spielercharaktere die Enten-Assassine Ankh-Tah-Leh in Steinmund befreit, hat sie sie wahrscheinlich nach Otag begleitet. Sie wird jedoch ihre Federn nicht für sie riskieren, sondern lediglich auf die Höhle am Ostfuß des Felsens zeigen, die einen Geheimgang (Ort 19) zu einem Verlies unter den Tempelgebäuden verbirgt.",
  "Die Ente behauptet, dort sei ein alter Eledain-Mönch gefangen. Dann erklärt sie ihren Teil der Abmachung für erfüllt und macht sich in Richtung Horizont davon. Sie wird jedoch später im Abenteuer zurückkehren (S. 150)."]},
 "patrouille":{k:"Wachpatrouille in der Kaserne", p:119, b:[
  "Eine Gruppe Skelette (zwei mehr als Spielercharaktere, zur Hälfte Krieger und zur Hälfte Bogenschützen) patrouilliert unermüdlich durch die Kaserne (Räume 10 bis 17), bereit, Eindringlinge anzugreifen. Die Charaktere können ihnen in der Kasernenhalle (10) oder unten in den Verliesen (23) begegnen – ansonsten würfle W6, wann immer die Charaktere einen neuen Raum betreten oder ein Viertel in einem der Kasernenräume verbringen. Bei 1–2 kommt die Patrouille hereingeschlurft – lass die Charaktere einen Wurf auf §Wahrnehmung§ machen, um ihre rasselnden Schritte zu hören. Gelingt er, können sie einen Wurf auf §Heimlichkeit§ machen, um zu entkommen, sich im Raum zu verstecken oder einen Hinterhalt vorzubereiten."]},
 "zweite-chance":{k:"Eine zweite Chance", p:124, b:[
  "Haben die Spielercharaktere Tefalas’ Dolch mit dem Geist des Todeswiedergängers Mogdath (S. 56) nicht mitgebracht, ist Godvindel zutiefst besorgt. Aber noch ist nicht alles verloren. Die Grabinsel Is-Hel ist nicht nur einer der Orte, an denen das Herz der Finsternis zu finden sein könnte – dort sind auch die Herrscher der Elfen begraben, die den Dolch geschaffen haben, was bedeutet, dass es weitere Dolche derselben Art geben könnte. Dann ist da natürlich noch die Kleinigkeit, einen Todeswiedergänger zum Fangen zu finden …"]},
 "hungernebel":{k:"Der Hungernebel", p:126, b:[
  "Der Nebel, der aus den kalten Wassern des Is-Anor aufsteigt, ist in Wahrheit ein uralter Schemen, der die Körperwärme lebender Wesen sucht.",
  "Um zu entkommen, muss der Charakter, der das Boot steuert, einen Wurf auf §Seefahrt§ machen. Nach der ersten Runde kann pro Runde ein Versuch unternommen werden. Bei Erfolg entkommt das Gefährt dem Nebel.",
  "In der ersten Runde im Nebel müssen alle Spielercharaktere einen WIL-Wurf machen, um der Furcht zu widerstehen. In der zweiten Runde müssen sie alle einen Wurf auf KON machen, um den Auswirkungen der Kälte zu widerstehen (Regelbuch S. 54). In der dritten Runde erleiden alle Charaktere im Nebel W4 Schaden (Rüstung wirkt nicht), in der vierten W6 und in der fünften Runde W8. Danach hat sich der Nebel satt gefressen und zieht sich ins Wasser zurück."]},
 "einsturz":{k:"Der Einsturz der Insel", p:129, b:[
  "Die Insel und die elfischen Verzauberungen um ihre Gräber sind in letzter Zeit instabil geworden – manchmal beginnt sie unkontrolliert zu beben. Betreten die Spielercharaktere die Hallen, verschärft sich das Phänomen. Die Insel bebt in jedem Viertel, beginnend gleich nachdem die Charaktere an Land gegangen sind. Würfle W12 auf der folgenden Tabelle, um die Wirkung zu bestimmen, und zähle jedes Mal +1 zum Wurf dazu. Du kannst die gewünschte Wirkung auch auswählen, doch früher oder später wird die Insel gemäß Ergebnis 21+ einstürzen.",
  herzTbl("einsturz")]},
 "sarkophag-falle":{k:"Die Sarkophagfalle", p:130, b:[
  "Wir empfehlen, drei Zettel mit den drei verschiedenen Deutungen des Textes auf dem Sarkophag vorzubereiten. Gib den Zettel, der zum Ergebnis des Wurfs passt, und lass den Spieler ihn laut vorlesen. Die Falle wird jedes Mal ausgelöst, wenn die Spieler den falschen Text laut vorlesen. Ersetzen sie die falschen Worte durch passendere, solltest du zulassen, dass es funktioniert, wenn sie einigermaßen nah dran sind, auch wenn sie nicht exakt das richtige Wort wählen.",
  herzTbl("sarkophag")]},
 "gestohlene-waffen":{k:"Gestohlene Waffen", p:132, b:[
  "Die magischen Waffen, die in den Särgen der Lieblingskinder des Königs gefunden werden, haben ein unverwechselbares Aussehen, und ihre Namen sind in altem Elfisch in den Bogen und den Griff eingraviert. Sieht ein Elf eine dieser Waffen, wird er dem Träger bestimmt Fragen stellen und ihre Rückgabe verlangen, wenn sich herausstellt, dass sie aus uralten Elfengräbern genommen wurden."]},
 "wo-ist-das-herz":{k:"Wo ist das Herz?", p:134, b:[
  "Die Spieler haben wahrscheinlich erkannt, dass das Herz der Finsternis nicht auf Is-Hel ist und sie ihre Suche anderswo fortsetzen müssen. Es besteht die Gefahr, dass die Insel einstürzt, bevor sie Zeit hatten, alle Räume zu durchsuchen, doch sie haben kaum eine andere Wahl, als nach Fang-Forren oder zu den Hügeln von Kalin weiterzuziehen. Haben die Spieler das nicht erkannt, ist es völlig in Ordnung, wenn die SL sie in diese Richtung lenkt."]},
 "entdeckt":{k:"Entdeckt!", p:136, b:[
  "Wird ein Spielercharakter von Dakoths Armee entdeckt, wird er rasch von zahlreichen Orks umringt. Der Charakter wird zweifellos gefangen genommen und in Ketten gelegt, doch läuft alles glatt, ist seine Gefangenschaft nur vorübergehend – Dakoth hat weder Zeit noch Lust, sich um „irgendeinen neugierigen Bauern, der im Bach planscht“ zu kümmern. Solange die Person ihre orkischen Häscher nicht zu sehr verärgert, wird sie freigelassen, wenn die Armee etwa einen Tag später nach Norden zieht."]},
 "gespraech":{k:"Gespräch", p:136, b:[
  "Aus einer Position etwa 30 Meter vom Hügel entfernt sieht der Spielercharakter den Mann in Schwarz aus dem Loch an der Spitze auftauchen, gefolgt von einem riesigen Ork in voller Kampfausrüstung, der grunzt und ächzt. Der junge Mann zerrt den Ork buchstäblich vom Loch weg in Richtung Bach und knurrt:",
  "„Also, das Herz der Finsternis ist nicht hier, und Prinz Kalins Grab auch nicht.“",
  "„Meister Dakoth, seid Ihr sicher?!“",
  "„Absolut sicher. Ich hätte das Artefakt inzwischen gespürt.“",
  "„Verstehe. Und jetzt?“",
  "„Es scheint, ich habe keine Wahl, als durch Fang-Forren zu gehen …“",
  "„Der Tempelturm?“",
  "„Ja, der Turm. Dorthin muss Kalin gegangen sein, mit dem Herz. Es MUSS dort sein. Es MUSS!“",
  "„Also marschieren wir …“",
  "„Nein, nicht wir! Du eskortierst mich bis zum Waldrand, dann übernimmst du das Kommando über die Armee und brennst jedes Dorf in der Gegend nieder. Ich nehme die Toten, sie können Tag und Nacht marschieren – wir sollten den Wald in 24 Stunden durchqueren.“",
  "„Brechen wir jetzt auf?“",
  "„Nein, zuerst bekommen die Dörfer hier dieselbe Behandlung wie Ankvarn. Aber bald, sehr bald …“",
  "Dann trennen sich ihre Wege, und Dakoth verschwindet in einem Armeezelt innerhalb des eisernen Rings mächtiger Skelettkrieger.",
  "**Dakoth angreifen?** Ein Spielercharakter, dem es gelingt, sich an Dakoth heranzuschleichen, kann einen Fernangriff gegen ihn ausführen, bevor er verschwindet, wird dann aber automatisch entdeckt und höchstwahrscheinlich getötet. Ein einzelner Angriff wird den Nekromanten auch kaum töten (Werte siehe S. 148)."]}
});
})();
