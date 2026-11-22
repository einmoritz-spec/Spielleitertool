/* Pfad des Ruhms – Teil 1: Der tote Wald (Pfad des Ruhms S. 40–53), Teil B: Höhlenschlucht, Schatzversteck, Trollhöhle, Hobgoblinhöhle, Tiefmoor, Tore der Macht. Ergänzt DB_AB["pg-wald"] (wird nach ab-pg-wald-a.js geladen). */
(function(){
var A = DB_AB["pg-wald"];
A.bereiche.push(
 /* ---------------- Höhlenschlucht (S. 40–42) ---------------- */
 {id:"schlucht", t:"Höhlenschlucht", karte:{img:"abenteuer/pg-wald-schlucht-karte", p:41}, orte:[
  {n:"", t:"Die Höhlenschlucht", p:40, wesen:["pgw-k-hoehlenkampf","pgw-k-sh-schlucht","pgw-k-hobgoblins","pgw-hob-spaeher","pgw-hob-kaempfer","pgw-hob-leib","pgw-bluthand"], b:[
   {bild:{img:"abenteuer/pg-wald-schlucht-bild"}},
   "Hier endet der Wald abrupt an einer etwa 200 Meter langen Schlucht. Die Schlucht selbst ist etwa zehn Meter tief, und der Hang ist von Höhlen durchlöchert, die von Hobgoblins und Trollen bewohnt werden. Die Spielercharaktere können durch Dregils Auftrag (S. 14) oder durch Hinweise der Dame des Windes (S. 27), dass die schwarze Perle hier sein könnte, hierherfinden.",
   "In der Schlucht gibt es drei verschiedene Höhlensysteme – das Schatzversteck, die Trollhöhle und die Hobgoblinhöhle – sowie ein Lager draußen. Siehe die Übersicht auf S. 41. Das Schatzversteck und die Trollhöhle haben je einen Eingang (mit A bzw. B markiert). Die Hobgoblinhöhle hat vier, markiert mit C1 bis C4 – die ersten drei sind sichtbar, während C4 hinter dichtem Gebüsch verborgen ist und nur von jemandem entdeckt werden kann, der genau an dieser Stelle sucht.",
   "Die Lage in der Höhlenschlucht hängt davon ab, ob es bei der Ankunft der Charaktere Tag oder Nacht ist.",
   {h:"Tagsüber", p:40},
   {zit:["Die Schlucht ist ruhig und still, aus vier Feuerstellen steigen Rauchfäden auf. An zwei aufrecht stehenden Baumstämmen hängen zwei zerschundene Leichen, blutig und von Schnitten übersät. Eine scheint ein Elf zu sein. Die einzigen sichtbaren Bewohner sind drei Hobgoblins (zwei Späher und ein Kämpfer), die an den Feuern sitzen und irgendein schreckliches Geräusch machen, wahrscheinlich ein Trinklied. Sie scheinen völlig damit beschäftigt, aus Weinfässern zu trinken, zu schreien und gelegentlich einen Bissen von einem Stück Braten zu nehmen."]},
   "Die drei Hobgoblins sind betrunken von Dregils Wein und erhalten daher einen Nachteil auf alle Fertigkeitswürfe. Die Spielercharaktere erhalten außerdem einen Vorteil auf Versuche, sich an ihnen vorbeizuschleichen. Ein neuer Wurf ist erforderlich, wenn die Charaktere aus einer Höhle zurückkommen.",
   {h:"Nachts", p:41},
   {zit:["Rund zwanzig Hobgoblins schreien und grölen, während sie gebratenes Fleisch verspeisen und Wein aus Fässern trinken. Einige von ihnen testen ihre Waffen an den beiden zerschundenen Leichen, die an einem Paar aufrechter Baumstämme hängen. Alle scheinen mit sich selbst, dem Wein, dem Braten und dem Lärmmachen beschäftigt."]},
   "Hier gibt es 23 Hobgoblins – zehn Späher, zehn Kämpfer, zwei Leibwächter und Häuptling Bluthand –, sofern die Charaktere nicht schon bei einem Zufallsereignis (S. 20) einige von ihnen getötet haben. Dann verringere ihre Zahl entsprechend.",
   "Nachts sind alle Hobgoblins außer Bluthand betrunken, wie oben beschrieben. Sich an ihnen vorbeizuschleichen erfordert jedoch einen Nachteil auf den Wurf, da Bluthand wachsam ist und die Hobgoblins so zahlreich sind.",
   {h:"Die Gefangenen", p:41},
   "Die an die beiden Baumstämme gefesselten Gefangenen sind Dregils Wachen (S. 14). Sie sind beide tot, aber das zu erkennen erfordert einen genaueren Blick. Drei weitere von Dregils Wachen werden in der Hobgoblinhöhle (Raum 6) gefangen gehalten.",
   {h:"Das Lager betreten", p:42},
   "Die folgenden Raumbeschreibungen gehen davon aus, dass es Tag ist, sofern nicht anders angegeben. In den Höhlen gibt es sowohl wache Wachposten als auch Hobgoblins, die ihren Weinrausch ausschlafen. Kämpfe sind wahrscheinlich von Hobgoblins in nahen Räumen zu hören, die dann in der folgenden Runde ins Gefecht eingreifen. Nachts sind alle bis auf drei Hobgoblins draußen im Lager und feiern.",
   "**Schlafende Hobgoblins:** In Räumen, in denen Hobgoblins schlafen, können die Charaktere einen Wurf auf §Heimlichkeit§ machen, um den Raum zu durchsuchen, ohne sie zu wecken, oder um einen Schleichangriff durchzuführen. Misslingt er, greifen die Hobgoblins an und rufen um Hilfe. Sie sind jedoch nicht sehr mutig und ergeben sich, wenn die Chancen eindeutig gegen sie stehen. An einem Raum mit schlafenden Hobgoblins vorbeizugehen, ohne ihn zu betreten, erfordert keinen Wurf.",
   "**Anzahl:** Insgesamt gibt es 26 Hobgoblins in der Höhlenschlucht, einschließlich Bluthand und seiner beiden Leibwächter (abzüglich der Hobgoblins, die die Spielercharaktere beim Zufallsereignis auf S. 23 getötet haben), sowie zwei Höhlentrolle.",
   "**Rasten:** Die Spielercharaktere können in den Höhlen eine Kurze Rast (Regelbuch S. 52) einlegen, solange sie nicht entdeckt werden. Versuchen sie eine Lange Rast, werden sie automatisch nach ein oder zwei Vierteln entdeckt, wenn noch Hobgoblins in den Höhlen sind."
  ]},
  {n:"A", t:"Eingang zum Schatzversteck", p:40, pin:[16.7,52.2], wesen:[], b:["Das Schatzversteck hat einen Eingang (mit A markiert)."]},
  {n:"B", t:"Eingang zur Trollhöhle", p:40, pin:[33.7,42.8], wesen:[], b:["Die Trollhöhle hat einen Eingang (mit B markiert)."]},
  {n:"C1", t:"Eingang zur Hobgoblinhöhle", p:40, pin:[67.1,51.4], wesen:[], b:["Einer der drei sichtbaren Eingänge der Hobgoblinhöhle."]},
  {n:"C2", t:"Eingang zur Hobgoblinhöhle", p:40, pin:[75.7,48.8], wesen:[], b:["Einer der drei sichtbaren Eingänge der Hobgoblinhöhle."]},
  {n:"C3", t:"Eingang zur Hobgoblinhöhle", p:40, pin:[61.6,46.0], wesen:[], b:["Einer der drei sichtbaren Eingänge der Hobgoblinhöhle."]},
  {n:"C4", t:"Verborgener Eingang zur Hobgoblinhöhle", p:40, pin:[59.4,56.0], wesen:[], b:["Dieser Eingang ist hinter dichtem Gebüsch verborgen und kann nur von jemandem entdeckt werden, der genau an dieser Stelle sucht."]}
 ]},
 /* ---------------- Schatzversteck (S. 43) ---------------- */
 {id:"versteck", t:"Schatzversteck", karte:{img:"abenteuer/pg-wald-versteck-karte", p:43}, orte:[
  {n:"", t:"Das Schatzversteck", p:43, wesen:[], b:[
   "Eine niedrige Öffnung führt in diese Höhle, die ganz aus natürlichen Felsspalten besteht. Die Decken sind niedrig, und die ganze Höhle gilt als beengtes Gelände (Regelbuch S. 44).",
   "Die drei Hobgoblins, die das Lager tagsüber bewachen, nutzen diese Höhle, um Beute und Wertsachen zu verstecken, die sie für sich behalten wollen. Drinnen ist es stockfinster, die Spielercharaktere brauchen also eine Lichtquelle."
  ]},
  {n:"1", t:"Eingang", p:43, pin:[63.6,53.9], wesen:[],
   vl:"Eine längliche Höhlenkammer, an deren einer Wand ein großer Stein lehnt. Die Wände sind kalt und feucht, was Pfützen auf dem Boden bildet. Geradeaus führt ein schmaler Gang weiter in den Berg.",
   st:[
    {k:"Der Stein", x:"Der Stein verbirgt die Öffnung zum Versteck (Raum 4). Ihn beiseitezuschieben erfordert einen STÄ-Wurf."},
    {k:"Der Durchgang", x:"Der Durchgang führt zu den Räumen 2 und 3."}
   ]},
  {n:"2", t:"Untere Höhlenkammer", p:43, pin:[30.4,65.7], wesen:[],
   vl:"Eine runde Kammer, völlig leer bis auf die Skelettreste irgendeines Tieres."},
  {n:"3", t:"Obere Höhlenkammer", p:43, pin:[22.2,44.6], wesen:[],
   vl:"Eine kleine Kammer mit einer Nische in der Wand, in der ein Haufen aus Stroh, Gras und Laub liegt.",
   st:[
    {k:"Der Laubhaufen", x:"Der Laubhaufen ist die Heimat einer Wildkatze und ihrer drei Jungen, die nun einen Monat alt sind. Die Katzenmutter greift an, wenn die Spielercharaktere näher kommen (6 TP, Biss mit Fertigkeitswert 12 und Schaden W6)."}
   ]},
  {n:"4", t:"Das Versteck", p:43, pin:[51.5,40.6], wesen:[],
   vl:"Eine schmale, gebogene Höhlenkammer, an deren einem Ende ein großes und ein kleineres Fass sowie ein kleiner Sack stehen.",
   st:[
    {k:"Die Fässer", x:"Das große Fass ist halb voll mit scheußlich schmeckendem Wein, während das kleinere fast leer ist. Nur ein paar Tropfen Wein sind übrig."},
    {k:"Der Sack", x:"Der Sack enthält Wertgegenstände im Wert von drei Schatzkarten."}
   ]}
 ]},
 /* ---------------- Trollhöhle (S. 44–45) ---------------- */
 {id:"trollhoehle", t:"Trollhöhle", karte:{img:"abenteuer/pg-wald-trollhoehle-karte", p:44}, orte:[
  {n:"", t:"Die Trollhöhle", p:44, wesen:["pgw-trolle"], b:[
   "Eine hohe und breite Öffnung führt in diese Höhle, deren natürliche Spalten an einigen Stellen erweitert wurden, um sie für die Trolle passierbar zu machen. Die Wände sind kalt und feucht, an manchen Stellen sickert Wasser heraus. Es ist stockfinster, die Spielercharaktere brauchen also eine Lichtquelle. In der Luft liegt ein so ekelerregender Gestank, dass die Charaktere einen KON-Wurf schaffen müssen, um nicht Benommen zu werden.",
   "Die Höhle ist die Heimat der beiden Höhlentrolle des Waldes, Obald und Stoka, beide mächtige Kämpfer. Sie leben abseits der Hobgoblins und halten sich meist für sich. Tagsüber schlafen sie in der innersten Kammer, nachts gehen sie auf Beutesuche. Haben die Charaktere Obald bereits bei einem Zufallsereignis (S. 20) getroffen und besiegt, bleibt nur Stoka."
  ]},
  {n:"1", t:"Die Trollfalle", p:44, pin:[34.7,48.7], wesen:["pgw-trolle"],
   vl:"Eine runde Kammer, in deren Mitte sich ein kleiner Wassertümpel gebildet hat, vom Wasser, das von der Decke tropft. An der Westwand lehnt ein großer Fels.",
   st:[
    {k:"Stolperdraht", r:1, x:"*Quer über den Eingang der Kammer ist ein Stolperdraht gespannt. Jeder Spielercharakter muss einen (passiven) Wurf auf* §Wahrnehmung§ *machen, um ihn zu bemerken. Misslingt er, wird die Falle ausgelöst, und mehrere kleinere Felsbrocken stürzen von der Decke. Alle in der Nähe müssen einen Wurf auf* §Ausweichen§ *schaffen, um wegzuspringen; bei einem Fehlschlag erleiden sie 2W8 wuchtigen Schaden. Wird die Falle tagsüber ausgelöst, weckt sie auch die Trolle in ihrem Lager (2). Nachts sind sie auf eigenen Abenteuern unterwegs.*"},
    {k:"Der große Fels", x:"Der große Fels versperrt den Eingang zum Lager der Trolle (2). Ihn beiseitezuschieben erfordert einen STÄ-Wurf."}
   ]},
  {n:"2", t:"Das Lager der Trolle", p:44, pin:[23.3,50.8], wesen:["pgw-trolle"],
   vl:"Eine runde Kammer mit zwei Strohhaufen und zwei Säcken an der Wand. Ein widerlicher Gestank schlägt euch entgegen, als ihr eintretet.",
   st:[
    {k:"Die Säcke", x:"Die beiden Säcke enthalten alle Schätze der Höhlentrolle in Form von Münzen, Schmuck, Edelsteinen und anderem Tand. Vieles davon ist wertlos, aber es gibt Wertgegenstände im Wert von vier Schatzkarten."},
    {k:"Die Trolle", x:"Obald und Stoka schlafen hier tagsüber, ansonsten sind sie auf Raubzug. Sie wachen auf, wenn jemand die Falle im Raum davor (1) auslöst oder versucht, den Fels vor dem Eingang wegzurollen. Die Trolle werden wütend auf Eindringlinge, und ihr erster Instinkt ist, sie zu fressen, aber sie lassen sich mit einem Wurf auf §Überzeugen§ besänftigen, wenn die Eindringlinge Wertsachen herausgeben."}
   ]}
 ]},
 /* ---------------- Hobgoblinhöhle (S. 46–49) ---------------- */
 {id:"hobgoblins", t:"Hobgoblinhöhle", karte:{img:"abenteuer/pg-wald-hobgoblinhoehle-karte", p:46}, orte:[
  {n:"", t:"Die Hobgoblinhöhle", p:46, wesen:["pgw-k-hobgoblins","pgw-hob-spaeher","pgw-hob-kaempfer","pgw-hob-leib","pgw-bluthand"], b:[
   "Das von Bluthands Hobgoblins genutzte Höhlensystem ist eine natürliche Formation, die an einigen Stellen erweitert oder erhöht wurde, um begehbare Gänge zu schaffen. Einige der Wände sind grob zu halbwegs geraden und glatten Flächen behauen, mit brennenden Fackeln hier und da. In der Höhle ist es kühl, und manchmal sieht man Wasser an den Wänden herabrinnen.",
   "Die Decke ist in den meisten Teilen der Höhle niedrig, und das ganze System gilt als beengtes Gelände (Regelbuch S. 44), sofern nicht anders angegeben."
  ]},
  {n:"1", t:"Wachraum", p:47, pin:[56.6,41.0], wesen:["pgw-hob-kaempfer"],
   vl:"Ein quadratischer Raum mit zwei Baumstümpfen in der Mitte und einem Haufen Heu und Stroh an einer Wand.",
   st:[{k:"Wachen", x:"Zwei Kämpfer sitzen auf den Stümpfen Wache, sofern sie nicht abberufen wurden. Es ist unmöglich, sich an ihnen vorbeizuschleichen oder einen Schleichangriff durchzuführen. Sind sie in der Unterzahl, rufen die Wachen um Hilfe, und alle Hobgoblins in Raum 3 greifen in der folgenden Runde in den Kampf ein."}]},
  {n:"2", t:"Höhlenkammer", p:47, pin:[65.1,49.9], wesen:["pgw-hob-spaeher","pgw-hob-kaempfer"],
   vl:"Eine Kammer mit Heu und Stroh an den Wänden. Drei Decken und drei Säcke liegen an der Wand.",
   st:[
    {k:"Die Säcke", x:"Die Säcke enthalten drei Fackeln, Feuerstein & Zunder, eine Handaxt, ein Hanfseil, eine Flasche Wein und Wertgegenstände im Wert von einer Schatzkarte."},
    {k:"Hobgoblins", x:"Nachts schlafen hier die drei Hobgoblins (zwei Späher und ein Kämpfer), die das Lager tagsüber bewachen (S. 40). Tagsüber ist dieser Raum leer."}
   ]},
  {n:"3", t:"Höhlenkammer", p:47, pin:[58.6,14.7], wesen:["pgw-hob-kaempfer"],
   vl:"Ein schmaler Gang führt in eine Kammer mit zwei einfachen Strohbetten. Aus einem Sack auf dem Boden ist ein gackerndes Geräusch zu hören.",
   st:[
    {k:"Hobgoblins", x:"Zwei Kämpfer schlafen auf den Strohbetten ihren Weinrausch aus (S. 43), sofern sie nicht abberufen wurden. Wachen sie auf, rufen sie um Hilfe, und alle Hobgoblins in den Räumen 1 und 4 greifen in der folgenden Runde in den Kampf ein."},
    {k:"Der Sack", x:"Der Sack enthält drei lebende Hühner (zählen als Hühner nach Regelbuch S. 81)."}
   ]},
  {n:"4", t:"Höhlenkammer", p:47, pin:[40.2,26.8], wesen:["pgw-hob-spaeher","pgw-hob-kaempfer"],
   vl:"Ein schmaler Gang öffnet sich in eine runde Kammer mit einem großen Strohhaufen an der hinteren Wand. In einer Nische liegt ein Haufen verschiedener Werkzeuge.",
   st:[
    {k:"Hobgoblins", x:"Zwei Späher und ein Kämpfer schlafen (S. 43) im Strohhaufen, sofern sie nicht abberufen wurden. Wachen sie auf, rufen sie um Hilfe, und alle Hobgoblins in Raum 3 greifen in der folgenden Runde in den Kampf ein. Das alarmiert auch die Wachen in Raum 5, die sich kampfbereit machen und die Hobgoblins in Raum 9 wecken. Beachte, dass die Hobgoblins in diesem Raum dieselben sind, die am Zufallsereignis Bluthands Räuber (S. 23) beteiligt sind; wurden sie dort bereits getötet, ist dieser Raum leer."},
    {k:"Der Haufen", x:"Der Haufen in der Nische enthält einen Hammer, ein Messer, zwei Fackeln, Feuerstein & Zunder, eine Handaxt, drei Schlingen und ein Fischernetz."}
   ]},
  {n:"5", t:"Wachposten", p:47, pin:[43.7,49.1], wesen:["pgw-hob-spaeher","pgw-hob-kaempfer"],
   vl:"Dieser schmale Gang wird von drei bewaffneten Hobgoblins bewacht. Sie heben ihre Waffen und machen sich zum Kampf bereit.",
   st:[
    {k:"Die Wachen", x:"Ein Späher und zwei Kämpfer sind hier postiert und greifen jeden ungebetenen Gast sofort an. Es ist unmöglich, sich an den Wachen vorbeizuschleichen oder einen Schleichangriff gegen sie durchzuführen. Die Kämpfer nutzen die engen Gänge, um die Bewegung der Eindringlinge zu blockieren, während der Späher Pfeile an ihnen vorbeischießt. Bricht ein Kampf aus, rufen die Wachen um Hilfe, und alle Hobgoblins in den Räumen 4, 9 und 13 greifen in der folgenden Runde in den Kampf ein. Auch die Leibwächter in Raum 11 werden alarmiert und machen sich kampfbereit, bleiben aber auf ihren Posten."},
    {k:"Südosten", x:"Eine verriegelte Holztür (20 TP, Rüstungswert 12, kann nicht geknackt werden) führt zu Raum 13."},
    {k:"Süden", x:"Ein Bärenfell an der Wand verdeckt den Durchgang zu Raum 11."}
   ]},
  {n:"6", t:"Gefängniszelle", p:47, pin:[27.2,43.8], wesen:[],
   vl:"Eine vergitterte Eisentür versperrt den Eingang zu dieser Zelle. Zwischen Stroh und Dreck auf dem Boden liegen drei blutige Gestalten in zerlumpten Kleidern. Sie sehen aus wie drei zerschundene Menschen.",
   st:[
    {k:"Die Tür", x:"Die Tür ist verschlossen, kann aber mit einem Vorteil auf den Wurf auf §Fingerfertigkeit§ geknackt oder aufgebrochen werden (20 TP, Rüstungswert 12), wobei Letzteres alle Hobgoblins in den Räumen 5, 8 und 9 alarmiert, die zur Untersuchung herbeieilen."},
    {k:"Die Gefangenen", x:"Aulec, Sigved und Yrvid sind gefesselt und angekettet. Die Fesseln können mit einem Vorteil auf §Fingerfertigkeit§ geknackt oder zerbrochen werden (8 TP, Rüstungswert 6), wobei Letzteres die Hobgoblins in den Räumen 5, 8 und 9 alarmiert.\n\nDie Gefangenen flehen die Spielercharaktere an, sie zu befreien, und drohen zu schreien, falls nicht. Sie können stehen, sind aber schwer verletzt und kampfunfähig. Sie erklären, dass sie als Dregils Wachen dienten und beim Überfall auf seine Karawane von den Hobgoblins gefangen wurden. Sie haben keine Belohnung anzubieten, können ihren Rettern aber sagen, dass in einem anderen Kerker zwei Zwerge sitzen.\n\n*„Die beiden kamen herein und legten uns Fesseln an, wurden aber selbst in Eisen gelegt, und die ganze Zeit standen die Hobgoblins neben ihnen Wache. Sie schienen nicht zu verstehen, was wir sagten, blinzelten uns aber an, als sie die Fesseln um unsere Füße schlossen.“*\n\nDer Grund, warum die Schlösser so leicht zu knacken sind, ist, dass die Zwerge sie absichtlich so gebaut haben, was weder die Hobgoblins noch die Gefangenen selbst bemerkt haben."},
    {k:"Die schwarze Perle", x:"Fragen die Charaktere die Gefangenen nach Dregils schwarzer Perle, sagt Yrvid, sie habe gesehen, wie der Anführer der Hobgoblins, Bluthand, sie in der Hand hielt. Sie wissen nicht, wo sich Bluthand befindet."}
   ]},
  {n:"7", t:"Gefängniszelle", p:48, pin:[37.8,34.2], wesen:[],
   vl:"Eine vergitterte Eisentür versperrt den Eingang zu diesem engen Verlies. Darin essen zwei Zwerge Hühnchen, das auf einem Baumstumpf zwischen ihnen zerlegt liegt. Zwei Decken sind auf einem Strohhaufen zusammengerollt. Um die Knöchel der Zwerge liegen Fesseln, die an Ketten mit zwei großen Eisenkugeln am Ende befestigt sind.",
   st:[
    {k:"Die Tür", x:"Die Tür ist verschlossen, kann aber mit einem Vorteil auf den Wurf auf §Fingerfertigkeit§ geknackt oder aufgebrochen werden (20 TP, Rüstungswert 12), wobei Letzteres alle Hobgoblins in den Räumen 5, 8 und 9 alarmiert, die zur Untersuchung herbeieilen."},
    {k:"Die Zwerge", x:"Baldor und Lordin sind zwei sehr alte Zwerge, die vor langer Zeit von den Hobgoblins gefangen wurden. Sie wurden überwältigt und in Eisen gelegt. Ihnen wurde die Freiheit versprochen, wenn sie ihren Häschern Türschlösser, Fesseln und Waffen liefern. Das haben sie noch nicht erhalten, aber ihre Hoffnung brennt stark.\n\nDie Zwerge sprechen keine andere Sprache als ihre eigene, sodass es, sofern nicht einer der Spielercharaktere ein Zwerg ist, einen Wurf auf §Fremdsprachen§ erfordert, sie zu verstehen.\n\nIhre Fesseln sind zugeschweißt und haben keine Schlösser. Das bedeutet, sie müssen zerbrochen werden, was alle Hobgoblins in den Räumen 5, 8 und 9 alarmiert."},
    {k:"Die Tore der Macht", x:"Die Zwerge sind sehr dankbar, wenn die Charaktere sie befreien, sind aber zu gebrechlich, um im Kampf zu helfen. Auf Nachfrage können sie jedoch sagen, wo die Tore der Macht zu finden sind – *„am Fuß des Berges hinter dem Tiefmoor“*. Sie können sogar das Gedicht aufsagen, das erklärt, wie die Schlüssel zu benutzen sind (S. 12) – aber nur in der Zwergensprache."}
   ]},
  {n:"8", t:"Höhlenkammer", p:48, pin:[26.2,35.9], wesen:["pgw-hob-spaeher","pgw-hob-kaempfer"],
   vl:"Ein schmaler Gang führt in eine Kammer mit Strohbetten und Decken an den Wänden.",
   st:[
    {k:"Hobgoblins", x:"Ein Späher und zwei Kämpfer schlafen (S. 43) hier, sofern sie nicht abberufen wurden. Wachen sie auf, rufen sie um Hilfe, und alle Hobgoblins in Raum 9 kommen in der folgenden Runde herbeigelaufen. Beachte, dass die Hobgoblins in diesem Raum diejenigen sind, die am Zufallsereignis Bluthands Räuber (S. 23) beteiligt sind; wurden sie dort bereits getötet, ist dieser Raum leer."},
    {k:"Die Säcke", x:"Die Säcke enthalten ein Hanfseil, eine Spitzhacke, einen Hammer, zwei Messer, zwei Schlingen, drei Rationen trockenes Brot und Wertgegenstände im Wert von einer Schatzkarte."}
   ]},
  {n:"9", t:"Wachraum", p:48, pin:[23.0,56.5], wesen:["pgw-hob-spaeher","pgw-hob-kaempfer"],
   vl:"Eine längliche Höhle mit Öffnungen in drei Richtungen. An den Wänden stehen zwei Strohbetten und ein Fass, neben dem zwei gebratene Hühner an einem Spieß über einer kleinen Truhe hängen.",
   st:[
    {k:"Hobgoblins", x:"Ein Kämpfer und ein Späher ruhen sich hier aus, sofern sie nicht abberufen wurden. Sie sind wach, und es ist unmöglich, sich in den Raum zu schleichen, ohne entdeckt zu werden. Entdecken die Hobgoblins die Eindringlinge, rufen sie um Hilfe, und alle Hobgoblins in den Räumen 8 und 10 kommen in der folgenden Runde herbeigelaufen."},
    {k:"Die Truhe", x:"Die Truhe ist verschlossen (einer der Hobgoblins trägt den Schlüssel an einer Kette um den Hals). Sie kann geknackt oder aufgebrochen werden (10 TP, Rüstungswert 6) und enthält Wertgegenstände im Wert von zwei Schatzkarten."},
    {k:"Die Hühner", x:"Die Hühner am Spieß zählen als zwei Rationen Nahrung."}
   ]},
  {n:"10", t:"Höhlenkammer", p:48, pin:[25.4,68.6], wesen:["pgw-hob-spaeher"],
   vl:"Eine quadratische Kammer mit zwei Öffnungen. An zwei Wänden stehen Strohbetten mit Decken. Auf einem Baumstumpf liegt ein gebratenes Huhn.",
   st:[
    {k:"Hobgoblins", x:"Zwei Späher schlafen (S. 43) hier, sofern sie nicht abberufen wurden. Wachen sie auf, rufen sie um Hilfe, und alle Hobgoblins in Raum 9 greifen in der folgenden Runde in den Kampf ein."},
    {k:"Das Huhn", x:"Das Huhn zählt als zwei Rationen Nahrung."}
   ]},
  {n:"11", t:"Wachraum", p:48, pin:[38.3,72.9], wesen:["pgw-hob-leib"],
   vl:"Eine längliche Höhlenkammer mit einem Baumstumpf in der Mitte und einem Schlaffell an einer Wand. An der anderen Wand steht ein großes Fass mit zwei Bechern. In einer Ecke hängt ein Bärenfell, in der anderen befindet sich eine eisenbeschlagene Holztür.",
   st:[
    {k:"Hobgoblins", x:"Zwei Leibwächter halten hier Wache, mit strengem Befehl, ihren Posten nie zu verlassen und jeden Eindringling zu töten. Ist in Raum 5, 12 oder 13 ein Kampf ausgebrochen, sind beide Leibwächter wach und kampfbereit. Andernfalls schläft einer und wacht erst nach einer Runde auf und greift nach seinen Waffen. Ein Kampf gegen die Leibwächter alarmiert Bluthand in Raum 12."},
    {k:"Der Baumstumpf", x:"Der Baumstumpf ist hohl und enthält einen Beutel mit Wertgegenständen im Wert von zwei Schatzkarten."},
    {k:"Süden", x:"Die Tür ist verschlossen, kann aber geknackt oder aufgebrochen werden (20 TP, Rüstungswert 12). Letzteres alarmiert Bluthand in Raum 12."}
   ]},
  {n:"12", t:"Bluthands Gemächer", p:49, pin:[48.9,85.7], wesen:["pgw-bluthand","pgw-hob-leib"],
   vl:"Ein großer Raum, in der Mitte durch eine kurze Steintreppe geteilt. In zwei Ecken hängen Bärenfelle. Auf dem Boden liegt ein Schlaffell, an dessen Kopfende ein großes Fass mit einem Zinnbecher steht. Zwei gebratene Hühner hängen an einem Spieß, und im unteren Teil des Raums steht eine große Truhe.",
   st:[
    {k:"Hohe Decke", x:"Dieser Raum ist nicht beengt wie der Rest des Höhlensystems, was bedeutet, dass Nahkampfwaffen normal eingesetzt werden können."},
    {k:"Bluthand", x:"Haben die Spielercharaktere es bis hierher geschafft, ohne in Raum 11 zu kämpfen oder die Tür aufzubrechen, schläft Häuptling Bluthand (S. 43). Wird er geweckt, greift er an und ruft die Leibwächter in Raum 11 zu Hilfe. Wurde Bluthand bereits alarmiert, legt er den Charakteren hinter einem Bärenfell einen Hinterhalt (Regelbuch S. 43). Er ist gut vorbereitet, was ihnen einen Nachteil auf §Wahrnehmung§ gibt.\n\nBluthand ist kein Dummkopf; ist er in der Unterzahl, läuft er auf Raum 15 zu, um die schwarze Perle zu holen und in den Wald zu fliehen. Gelingt das nicht, ergibt er sich und versucht zu verhandeln. Er bietet ihnen vielleicht sogar die Perle an, wird aber versuchen, sie bei der ersten Gelegenheit zurückzuholen und die Charaktere zu töten."},
    {k:"Die Truhe", x:"Die Truhe ist verschlossen, kann aber geknackt oder aufgebrochen werden (12 TP, Rüstungswert 10). Sie enthält feine Kleidung, einen Umhang, ein versilbertes Kurzschwert (meisterhaft), zwei Glasflaschen mit Heiltrank (Regelbuch S. 79) und eine Schatulle mit Wertgegenständen im Wert von drei Schatzkarten."},
    {k:"Osten, Norden", x:"Bärenfelle verbergen Durchgänge zu den Räumen 11 und 15."}
   ]},
  {n:"13", t:"Höhlenkammer", p:49, pin:[51.0,68.2], wesen:["pgw-hob-spaeher"],
   vl:"Eine quadratische Kammer mit zwei Strohbetten und Decken auf dem Boden. An einer Wand steht ein kleines Fass mit zwei Bechern, und der Boden ist mit Hühnerknochen übersät. In der Mitte des Raums liegt ein Sack. An einer der Wände hängt ein Schaffell.",
   st:[
    {k:"Hobgoblins", x:"Zwei Späher schlafen (S. 43) hier, sofern sie nicht abberufen wurden. Einer von ihnen trägt die Schlüssel zu den Verliesen (Räume 6 und 7)."},
    {k:"Der Sack", x:"Der Sack enthält ein Hanfseil, zwei Schlingen, Feuerstein & Zunder und eine Schmuckschatulle mit Wertgegenständen im Wert von einer Schatzkarte."},
    {k:"Das Fass", x:"Das Fass enthält 50 Becher scheußlich schmeckenden Wein."},
    {k:"Osten", x:"Das Schaffell verbirgt den Durchgang zu Raum 14."},
    {k:"Norden", x:"Die Tür zu diesem Raum ist von innen verriegelt (20 TP, Rüstungswert 12), solange die Hobgoblins dort sind. Sie kann nicht geknackt werden."}
   ]},
  {n:"14", t:"Hobgoblin-Versteck", p:49, pin:[57.7,73.1], wesen:[],
   vl:"Eine runde Höhlenkammer, deren eine Seite leicht ansteigt. Am oberen Ende des Anstiegs ist ein großer Steinschlag niedergegangen, und an der gegenüberliegenden Wand hat sich ein kleiner Wassertümpel gebildet. Die Luft ist hier frischer, aber die Höhle ist kalt und unangenehm.",
   st:[
    {k:"Der Steinschlag", x:"Man kann sich durch die Steine graben, um Raum 15 zu erreichen, was aber einen Tagesabschnitt dauert und einen gelungenen STÄ-Wurf erfordert. Passendes Werkzeug gibt einen Vorteil."},
    {k:"Beutel", r:1, x:"*Zwischen den Steinen verborgen liegt ein großer Beutel mit 3W6 Goldmünzen und vier walnussgroßen roten Edelsteinen im Wert von je 2W6 Goldmünzen. Den Beutel zu finden erfordert einen gelungenen Wurf auf* §Entdecken§*, während man in den Steinen herumwühlt.*"}
   ]},
  {n:"15", t:"Bluthands Schatzversteck", p:49, pin:[61.9,79.7], wesen:[],
   vl:"Von dieser beengten runden Kammer aus führen drei schmale Gänge in verschiedene Richtungen. Einer endet an einem Steinschlag. In der Mitte des Raums steht eine kleine eisenbeschlagene Truhe.",
   st:[
    {k:"Die Truhe", x:"Die Truhe ist verschlossen, kann aber geknackt oder aufgebrochen werden (8 TP, Rüstungswert 6) und enthält Bluthands kostbarsten Besitz: die schwarze Perle."},
    {k:"Der Steinschlag", x:"Man kann sich durch die Steine graben, um Raum 14 zu erreichen, was aber einen Tagesabschnitt dauert und einen gelungenen STÄ-Wurf erfordert. Passendes Werkzeug gibt einen Vorteil."}
   ]},
  {n:"16", t:"Geheimer Eingang", p:49, pin:[71.3,66.1], wesen:[],
   vl:"Eine Höhlenkammer mit Stroh auf dem Boden. Es ist feucht und kalt, und schwache Tageslichtstrahlen dringen kaum durch das dichte Gebüsch, das den Eingang der Höhle von außen versperrt.",
   st:[
    {k:"Fallgruben", r:1, x:"*Unter dem Stroh auf dem Boden liegen zwei zwei Meter tiefe Fallgruben mit spitzen Pfählen am Grund. Die Spielercharaktere entdecken sie automatisch, wenn sie das Stroh auf dem Boden untersuchen oder bei einer allgemeinen Untersuchung des Raums einen Wurf auf* §Entdecken§ *schaffen. Andernfalls muss der Charakter, der als Erster an einer Fallgrube vorbeigeht, einen Wurf auf* §Ausweichen§ *schaffen, um nicht hineinzufallen und 2W8 stechenden Schaden zu erleiden.*"}
   ]}
 ]},
 /* ---------------- Tiefmoor (S. 50–52) ---------------- */
 {id:"tiefmoor", t:"Tiefmoor", orte:[
  {n:"", t:"Das Zelt des Einsiedlers", p:51, wesen:["pgw-ulat","pgw-k-gedicht"],
   einl:"Vom Fuß des Himmelsrands bis zum Rand des Toten Waldes erstreckt sich ein schlammiges, wässriges Feuchtgebiet, das wegen seiner unbekannten Tiefe Tiefmoor genannt wird. Es ist ein Gewirr aus Sümpfen mit tückischem Moos, verschlungenen Wurzeln, schwammigen Pflanzen und dem ständigen Summen der unzähligen Insekten, die im Sumpf leben. Durch die Sümpfe führt ein gewundener Pfad, der der einzige Weg zu den Toren der Macht zu sein scheint. Abgesehen vom Einsiedler ist das Tiefmoor völlig unbewohnt und wird nur selten besucht. Wer vom Pfad abkommt, riskiert, von den tiefen Sümpfen verschlungen zu werden.",
   b:[
    {bild:{img:"abenteuer/pg-wald-tiefmoor-bild"}},
    "Ulat-A'ar ist der Name des uralten Einsiedlers, der auf einem kleinen Floß am Rand des Pfades lebt. Auf dem Floß hat er ein Zelt aufgeschlagen, mittlerweile von Rankpflanzen und Moos überwuchert, mit einer Klappe als Tür. Aus der Öffnung oben steigt etwas Rauch auf.",
    "Um das Floß zu erreichen, müssen die Spielercharaktere den Pfad verlassen und über vier moosbedeckte Felsen zur Zeltöffnung gelangen. Das erfordert einen Wurf auf §Akrobatik§ – wer scheitert, fällt in den Sumpf und wird sowohl Verzagt als auch durchgefroren.",
    {h:"Die Begegnung mit Ulat-A'ar", p:51},
    {zit:["Im Zelt befindet sich eine kleine Feuerstelle mit einem köchelnden Kessel darüber. Getrocknete Pflanzen und die Häute von Ratten und Fröschen hängen an Schnüren. Auf dem Boden stehen Schalen und Flaschen voller seltsam riechender Gebräue. Gegenüber dem Eingang kauert eine gebeugte Gestalt über einer Pfeife, die sie stopft. Eine graue Kapuze verhüllt ihr dunkles Gesicht, und nur ihre knorrigen Hände verraten ihr hohes Alter. „Ich habe euch in meinen Träumen gesehen“, krächzt der alte Mann. „Ihr, hah, eure Nase sah viiiel größer aus, aber … nun, man fragt sich, seid ihr würdig, den Pfad des Ruhms zu beschreiten?“"]},
    "Ulat-A'ar ist der Hüter des goldenen Anhängers, der vor vielen Generationen geschmiedet wurde und dessen Inschrift erklärt, wie die drei Schlüssel zu benutzen sind.",
    "Ihm wurde in einem Traum gesagt, dass eines Tages eine oder mehrere Personen zu seinem Zuhause kommen würden, um Rat bei ihrer Suche nach den Toren der Macht zu suchen. Sie dürfen nicht gierig nach Reichtum oder Macht sein. Diesen Personen wird der Einsiedler den goldenen Anhänger überreichen, in der Hoffnung, dass gute Seelen als Erste das uralte Zwergenreich betreten.",
    "Sturmhand kam vor Jahren hierher, erfuhr den Ort der Tore der Macht und lernte die drei Schlüssel kennen, die nötig sind, um sie zu öffnen. Doch Ulat-A'ar schwieg über den elfischen Anhänger, da er an Sturmhands Absichten zweifelte.",
    {h:"Die Entscheidung des Einsiedlers", p:51},
    "Die Begegnung mit Ulat-A'ar sollte ausgespielt werden. Der Einsiedler spricht mit heiserer, fast zischender Stimme. Legen die Spielercharaktere ihr Anliegen gut dar und schaffen einen Wurf auf §Überzeugen§ (mit einem Vorteil, wenn sie besonders überzeugend waren), übergibt ihnen Ulat-A'ar den Anhänger.",
    "Misslingt der Wurf, müssen sie ihre Würdigkeit beweisen, indem sie dem Einsiedler einen Gefallen tun, bevor sie es erneut versuchen können. Ulat-A'ar könnte sie bitten, an seiner Stelle jagen zu gehen – das wird nach den Regeln auf Regelbuch S. 103 abgehandelt, aber mit einem Nachteil, und in den Sümpfen finden sich nur Wühlmäuse und Krähen. Für jeden misslungenen Wurf muss der Charakter außerdem auf der Missgeschicktabelle auf Regelbuch S. 102 würfeln.",
    {h:"Abschluss", p:52},
    "Gewinnen die Charaktere schließlich Ulat-A'ars Vertrauen, übergibt er ihnen den Anhänger. Siehe den Seitenkasten. Er kann ihnen auch sagen, wo sie die Tore der Macht finden, falls sie es noch nicht selbst herausgefunden haben.",
    {h:"Weitere Hilfe", p:52},
    "Ulat-A'ar kann seine Magie einsetzen, um den Spielercharakteren zu helfen, falls sie verletzt sind. In seinem Zelt hat er außerdem drei Flaschen Heiltrank (Regelbuch S. 79), die er den Charakteren als Abschiedsgeschenk gibt. Wollen die Charaktere eine Weile bleiben, kann Ulat-A'ar einen von ihnen als Schüler aufnehmen (Regelbuch S. 61).",
    {h:"Eine Warnung", p:52},
    "Bevor die Spielercharaktere gehen, krächzt Ulat-A'ar eine Warnung: *„Seid gewarnt. Man sagt, das dunkle Herz des abscheulichen Dämons Sathmog sei seit dem Tag, an dem sein Körper aus dieser Welt verbannt wurde, hinter den Toren der Macht verborgen. Das Herz der Finsternis hat die Macht, selbst die reinsten Seelen zu verderben – doch die Legende sagt, dass das Herz auch den Fluch des Toten Waldes aufheben kann. Das Schicksal des Waldes liegt in euren Händen, Abenteurer!“*"
   ]}
 ]},
 /* ---------------- Tore der Macht (S. 52–53) ---------------- */
 {id:"tore", t:"Tore der Macht", karte:{img:"abenteuer/pg-wald-tore-karte", p:53}, orte:[
  {n:"", t:"Die Tore der Macht", p:52, wesen:["pgw-k-gedicht"], b:[
   "Erreichen die Spielercharaktere die Tore der Macht mit den Schlüsseln und dem Gedicht im Besitz, ist dieses Abenteuer zu Ende. Lies oder spiele den Spielern Folgendes vor.",
   {zit:["Der Pfad durch das Tiefmoor führt zu einer fast senkrechten Felswand am Fuß des Himmelsrands. Ein Podest erhebt sich in drei Stufen zu einem massiven Tor, das in die Felswand gehauen ist. Das Doppeltor wird auf beiden Seiten von großen Reliefs aufsteigender Einhörner flankiert. Das Tor selbst ist mit einem Relief aus vier ausgestreckten Händen geschmückt, die sich in der Mitte der Türflügel treffen."]},
   {h:"Ein letzter Showdown?", p:52},
   "Die lange Suche der Spielercharaktere ist vorbei, doch es ist noch Zeit für einen letzten Showdown, bevor dieses Abenteuer endet. Leben Sturmhand, Doriath oder der Ritter in Schwarz noch, taucht einer oder tauchen alle von ihnen hier auf, bevor die Charaktere die Tore der Macht öffnen können. Sturmhand und Doriath wollen die Schlüssel und schlagen ein (vorübergehendes) Bündnis vor, falls die Chancen gegen sie stehen. Der Ritter in Schwarz spricht nicht – er will die Spielercharaktere nur hier und jetzt töten.",
   {h:"An den Toren der Macht", p:52},
   {zit:["Ihr betretet das Podest, bereit, die Tore der Macht zu öffnen, als plötzlich ein Schatten hinter euch aus dem Gebüsch auftaucht. Ihr seid nicht allein …"]},
   "An diesem Punkt ist *Der tote Wald* abgeschlossen, und jeder Spielercharakter wird für das Erreichen dieses Meilensteins mit einem heroischen Talent seiner Wahl belohnt (Kapitel 3 im Regelbuch). Ihre Abenteuer werden in *Tore der Macht* fortgesetzt."
  ]}
 ]}
);
Object.assign(A.figuren, {
 "pgw-hob-spaeher":{typ:"nsc", t:"Hob-Späher", p:42, werte:[["Bewegung","10"],["Schadensbonus","–"],["TP","9"]], zl:[["Rüstung","Leder (1)"],["Fertigkeiten","Wahrnehmung 12, Ausweichen 12, Heimlichkeit 14"],["Waffen","Kurzbogen (Fertigkeitswert 10, Schaden W10), Köcher mit Pfeilen, Dolch (Fertigkeitswert 8, Schaden W8)"]], text:[]},
 "pgw-hob-kaempfer":{typ:"nsc", t:"Hob-Kämpfer", p:42, werte:[["Bewegung","10"],["Schadensbonus","–"],["TP","12"]], zl:[["Rüstung","Leder (1)"],["Fertigkeiten","Wahrnehmung 10, Ausweichen 10, Heimlichkeit 10"],["Waffen","Kurzspeer (Fertigkeitswert 10, Schaden W10), kleiner Schild"]], text:[]},
 "pgw-hob-leib":{typ:"nsc", t:"Hob-Leibwächter", p:42, werte:[["Bewegung","10"],["Schadensbonus STÄ","+W4"],["TP","16"]], zl:[["Rüstung","Beschlagenes Leder (2)"],["Fertigkeiten","Wahrnehmung 10, Ausweichen 12, Heimlichkeit 10"],["Waffen","Langspeer (Fertigkeitswert 13, Schaden 2W8)"]], text:[]},
 "pgw-bluthand":{typ:"nsc", t:"Bluthand", p:42, tp:17, werte:[["Bewegung","12"],["Schadensbonus STÄ","+W4"],["TP","17"],["WP","14"]], zl:[["Rüstung","Beschlagenes Leder (2)"],["Fertigkeiten","Wahrnehmung 14, Ausweichen 15, Heimlichkeit 10"],["Talente","Defensiv, Doppelhieb, Beidhändig, Flinke Füße"],["Ausrüstung","Zwei Krummsäbel (Fertigkeitswert 17, Schaden 2W6), Schlüssel zur Truhe in Raum 15"]], text:["Bluthand ist der Häuptling der Hobgoblins und Besitzer der schwarzen Perle. Sie kam nach einem Überfall auf die Karawane des Händlers Dregil (S. 14) in seinen Besitz. Er weiß nichts über ihre Funktion oder Geschichte, sondern liebt sie nur als kostbaren Schatz."]},
 "pgw-trolle":{typ:"monster", t:"Obald und Stoka", p:45, img:"abenteuer/pg-wald-trolle", werte:[["Grimmigkeit","2"],["Größe","Groß"],["Bewegung","12"],["Rüstung","2"],["TP","42"]],
  zl:[["Empfindlich gegen Sonnenlicht","Bei direktem Sonnenlicht erleiden Höhlentrolle W6 Schaden pro Runde und können nicht regenerieren. Ein Troll, der dadurch 0 TP erreicht, wird zu Stein. Eine dicke Wolkendecke oder Kleidung, die ganz bedeckt, genügen, um den Effekt zu vermeiden."],["Regeneration","Ein Höhlentroll heilt im Kampf automatisch W6 TP pro Runde, sofern er nicht 0 TP erreicht hat."],["Schatzfresser","Nichts schmeckt so gut wie Gold! Höhlentrolle haben einen gewaltigen Appetit auf Goldmünzen und kleine Goldgegenstände. Im Bauch eines Höhlentrolls befinden sich üblicherweise W12 Goldmünzen."]],
  text:["Höhlentrolle leben in unterirdischen Lagern und verlassen sie nie, außer nachts oder wenn dichter Nebel über den Bergtälern liegt. Sie scheinen alles und jeden als potenzielle Mahlzeit zu betrachten, und ihr Hunger ist scheinbar unstillbar, zumindest laut allen Geschichten über einzelne Trolle, die ganze Reisegesellschaften verschlangen, samt Zugtieren. Mehr über Höhlentrolle findest du im *Dragonbane*-Bestiarium."],
  angriffe:{h:"Monsterangriffe", w:"W6", rows:[
   ["1","**Rollangriff!** Der Höhlentroll rollt sich zu einer großen, felsbrockenartigen Masse zusammen und rollt auf einen Feind zu. Der Angriff verursacht 2W8 wuchtigen Schaden, und das Opfer wird zu Boden geworfen."],
   ["2","**Höhlenfledermäuse!** Der Troll schreckt einen Schwarm Fledermäuse in der Höhle auf, der sofort seine Feinde angreift. Werte siehe Regelbuch S. 99. Die Fledermäuse greifen den Feind W3 Runden lang an."],
   ["3","**Kopfstoß!** Der Troll rammt einem Feind den Kopf entgegen. Das Opfer wird Benommen und erleidet 2W6 wuchtigen Schaden. Nur ein Helm kann den erlittenen Schaden verringern."],
   ["4","**Verschlingen!** Der Höhlentroll öffnet das Maul und beißt einen Feind, was 2W8 stechenden Schaden verursacht. Das Opfer steckt dann in seinem Rachen fest und muss jede Runde einen STÄ-Wurf (als Aktion) machen, um sich zu befreien. Bei einem Fehlschlag erleidet das Opfer zusätzlich 2W8 Schaden."],
   ["5","**Goldspucke!** Der Höhlentroll räuspert sich und spuckt einem Gegner innerhalb von 6 Metern mit Wucht eine Goldmünze entgegen. Der Angriff verursacht W10 wuchtigen Schaden, und das Opfer erleidet eine Verfassung seiner Wahl und ist eine Goldmünze reicher."],
   ["6","**Trollwurf!** Der Troll hebt einen Feind über den Kopf und schleudert das Opfer wie eine Puppe 2W8 Meter in eine zufällige Richtung, was ebenso viel wuchtigen Schaden verursacht. Das Opfer landet am Boden liegend."]
  ]}},
 "pgw-ulat":{typ:"nsc", t:"Ulat-A'ar", p:51, img:"abenteuer/pg-wald-ulat-aar", tp:7, werte:[["Bewegung","6"],["Schadensbonus","–"],["TP","7"],["WP","36"]], zl:[["Rüstung","–"],["Fertigkeiten","Animismus 18, Mentalismus 18"],["Zauber","Bannen, Magischer Schild, Übertragung, Wiederherstellung, Auferweckung, Fernsicht, Wahrsagung, Rückschau, Beherrschen"],["Talente","Konzentriert × 10"],["Waffen","–"]], text:["Der graue Umhang des Einsiedlers gibt ihm ein unheimliches Aussehen, und wenn die Kapuze zurückgeschlagen wird und seine schwarzen Augenbrauen, Rabenaugen, die Hakennase und die gelben Zähne enthüllt, ist es leicht anzunehmen, er sei böse. Doch das ist ganz und gar nicht der Fall – Ulat-A'ar ist ein freundlicher Mann, der gern Besucher zu einem Schwätzchen empfängt."]}
});
Object.assign(A.kaesten, {
 "pgw-k-hoehlenkampf":{k:"Kampf in den Höhlen", p:41, b:[
  "Das gesamte Schatzversteck und die gesamte Hobgoblinhöhle (nicht aber die Trollhöhle) gelten als beengtes Gelände (Regelbuch S. 44), sofern nicht anders angegeben. Das verhängt einen Nachteil auf alle Nahkampfwaffen außer stechenden und unauffälligen (wie die Speere und Dolche der Hobgoblins). Es macht es außerdem unmöglich, sich an nicht schlafenden Feinden im selben Raum vorbeizuschleichen.",
  "Der begrenzte Platz kann es Kämpfern auch erschweren, ihre Gegner zu erreichen. Das lässt sich mit Kampfkarten und Pappfiguren (oder Miniaturen) nachspielen. Denk daran, dass ein Spielercharakter (oder Hobgoblin) ein Feld (2×2 Meter) blockieren kann.",
  "Bedenke auch, dass die Hobgoblins ihre Höhlen gut kennen. Sie können zum Beispiel durch einen anderen Tunnel gehen oder ihn umgehen, um die Charaktere im Rücken anzugreifen."
 ]},
 "pgw-k-sh-schlucht":{k:"Sturmhand und Doriath", p:41, b:[
  "Während des Zufallsereignisses Sturmhands Ritual erfährt Sturmhand (S. 35), dass die schwarze Perle „in der Tiefe des Berges im Nordosten“ zu finden ist, und er kommt bald darauf, dass sie in der Höhlenschlucht sein könnte. Bekommt er die Gelegenheit, geht Sturmhand später dorthin, um die Perle zu finden.",
  "Er wagt es nicht, das Lager allein anzugreifen, kann aber die Lage ausnutzen, wenn die Spielercharaktere eintreffen. Er hilft ihnen womöglich sogar, wenn sie in Schwierigkeiten sind – nur um bei der ersten Gelegenheit zu versuchen, die Perle zu stehlen. Ist Doriath (S. 17) auf Sturmhands Spur, kann auch sie auf der Suche nach der Perle hier auftauchen."
 ]},
 "pgw-k-hobgoblins":{k:"Hobgoblins", p:42, b:[
  "Hobgoblins sind eine Art Nachtvolk, das hauptsächlich in Wäldern und Sümpfen lebt, wo sie die meiste Zeit damit verbringen, Beeren zu pflücken, Bäume zu fällen, Sumpferz zu gewinnen und nach in versunkenen Ruinen vergrabenen Schätzen zu suchen. Von einigen Hobgoblin-Häuptlingen ist bekannt, dass sie Gold und Edelsteine über alles schätzen, was dazu führt, dass sie ihre Untertanen aussenden, Siedlungen von Menschen, Zwergen und Elfen zu überfallen. Mehr über Hobgoblins findest du im *Dragonbane*-Bestiarium.",
  "**Nachtaktiv:** Bei direktem Sonnenlicht erhalten Hobgoblins einen Nachteil auf alle Würfe und erleiden W6 Schaden pro Viertel. Aus diesem Grund tragen sie tagsüber Kleidung, die sie ganz bedeckt."
 ]},
 "pgw-k-gedicht":{k:"Das Gedicht auf dem Anhänger", p:52, b:[PG_GEDICHT]}
});
})();
