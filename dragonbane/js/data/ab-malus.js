/* Fort Malus (Abenteuerband S. 79–85) – deutsche Fassung. §…§ = Fertigkeit in Kapitälchen. Modell: plan/dragonbane/ABENTEUER_PLAN.md §2 */
window.DB_AB = window.DB_AB || {};
DB_AB["malus"] = {
 id:"malus", t:"Fort Malus", band:"dk", buch:"db_adv", p:79, img:"abenteuer/malus-titel", kurz:"10 Orte",
 lage:[
  {"h":"Die Lage","p":79},
  "Die Ruinen von Fort Malus sind seit dem Fall des großen Drachenreichs verborgen. Der Legende nach beherbergen sie einen verzauberten Apfelbaum, der Früchte aus reinstem Gold trägt und vom letzten Baron Stoneoak gepflanzt wurde. Nun haben Drachenritter der Hüter der Makellosen Flamme (S. 8) den Weg nach Fort Malus gefunden, auf der Suche nach seinen kostbaren Schätzen.",
  "Die Drachenritter Tylos, Isadelia und Niklion reisen durch das Nebeltal und versuchen, Ruinen aus der Zeit des Drachenreichs zu finden und sie im Namen Eledains zurückzufordern. Sie werden von einer Gruppe Abenteurer begleitet, die ihnen als Wachen und Handlanger dienen.",
  "Als ihre Gruppe vor Kurzem das legendäre Fort Malus fand, war bereits jemand dort – die Dämonenkultisten Blutuld und Ossiar, die nach Teilen der Drachenstatuette (S. 8) suchten. Die Drachenritter nahmen Blutuld gefangen und legten ihn in Eisen, während Ossiar entkommen konnte.",
  "Fort Malus war eine Enttäuschung für die Drachenritter. Sie fanden zwar den mythischen Apfelbaum im Hof, doch er trug nur eine Handvoll Äpfel. Die Früchte waren goldfarben und köstlich im Geschmack, aber nicht aus echtem Gold, wie die Geschichten behauptet hatten. Unter dem Bergfried lag ein verschlossener Keller – vielleicht wurden dort die wahren Schätze aufbewahrt?",
  "An der Kellertür war ein elfisches Gedicht eingraviert, das die drei Ritter nicht lesen konnten, also verließ Tylos Fort Malus auf der Suche nach einem geeigneten Übersetzer. Im Eisenwald fand er schließlich die Elfe Iliel, und als sie sich weigerte zu kooperieren, zwang Tylos sie, mit ihm nach Fort Malus zu kommen, wo auch sie in Ketten gelegt wurde. Nun suchen ihre beiden Gefährten Aldonil und Orifin nach ihr (siehe Zufallsbegegnung 11 auf S. 30).",
  "Nachdem er verhört worden war und keinen Zweck mehr erfüllte, wurde Blutuld auf dem Scheiterhaufen verbrannt. Da Iliel sich weigerte zu kooperieren, ließen die Drachenritter ihre Handlanger sich durch den Boden nach unten graben, während Tylos Fort Malus erneut verließ, um weitere „Freiwillige“ zu finden (siehe Zufallsbegegnung 9 auf S. 30). Niklion beaufsichtigt das Graben, während Isadelia Iliel bearbeitet. Blutulds Gefährte Ossiar versteckt sich im umliegenden Wald und hofft, seinen Freund zu retten.",
  "Hinter der magisch versiegelten Kellertür (Raum 10) lassen sich tatsächlich einige Schätze finden – darunter eines der vier Teile der Drachenstatuette (S. 8), falls du dich entschieden hast, es hier zu platzieren –, aber auch ein Naturgeist namens Rotlaug, der vom Haus Stoneoak versklavt wurde, um dem magischen Apfelbaum Leben einzuhauchen.",
  "Die Früchte waren nie aus echtem Gold, aber sie sind zahlreich und so sättigend, dass ein einziger Apfel als Nahrung für einen ganzen Tag reicht. Im Lauf der Jahrhunderte im Gewölbe ist Rotlaug zusammen mit dem Apfelbaum verdorrt – hat aber auch seine schreckliche Rache ausgeheckt …",
  {"stein":{"h":"Das Fort verlassen?","b":["Verlassen die Spielercharaktere das Fort, um eine Lange Rast einzulegen, würfelt W6 pro Tagesabschnitt auf der Tabelle auf S. 107 im Regelbuch."]}}
 ],
 bereiche:[
  {id:"fort", t:"Das Fort", karte:{img:"abenteuer/malus-karte", p:81}, orte:[
   {n:"1", t:"Umgebung", p:80, pin:[94.1,52.7], wesen:["ossiar"],
    vl:"Es ist dunkel unter den Sturmwolken, die das Nebeltal bedecken. Regentropfen und Blätter führen im böigen Wind einen raschelnden, platschenden Tanz auf. Mit von der Partie sind auch die Lichtkegel, die von der Mauerkrone in den Wald strahlen – von Laternen, die Wachen tragen, welche nach draußen spähen, sich aber nach drinnen sehnen, in die Wärme des Bergfrieds.",
    st:[
     {"k":"Der Kultist","r":1,"x":"Ossiar ist nach Fort Malus gekommen, um seinen gefangenen Freund zu befreien. Er schleicht sich heran und belauscht das Gespräch der Spielercharaktere und kann dann mit einem (passiven) §Wahrnehmung§-Wurf entdeckt werden. Wird er angesprochen, gibt er sich zu erkennen. Dasselbe geschieht, wenn er nicht entdeckt wird, aber erst, nachdem er genug gehört hat, um zu verstehen, dass die Spielercharaktere nicht mit den Rittern verbündet sind."},
     {"k":"Verhandlung","x":"Ossiar gibt sich als Forscher aus und möchte Hilfe, um seinen Freund Blutuld aus der Gewalt zweier skrupelloser Ritter zu befreien – der Freund ist an einer Narbe zu erkennen, die ihm von der Stirn über die Wange und das linke Auge verläuft. Ossiar kann ein Ablenkungsmanöver arrangieren, das den Spielercharakteren einen Vorteil auf §Heimlichkeit§ beim Eindringen in den Hof verschafft. Mit einem gelungenen §Überzeugen§-Wurf kann er auch dazu gebracht werden, sich an einem gemeinsamen Angriff auf die Festung zu beteiligen."}
    ]},
   {n:"2", t:"Die Mauer", p:82, pin:[15.7,49.6], wesen:["abenteurer","angriff"],
    vl:"Die Mauer um Fort Malus ist so hoch wie drei ausgewachsene Menschen – rissig, verwittert und von Ranken überwuchert, aber noch immer stabil. In der Nord- und der Ostmauer sind zwei große Risse zu erkennen, die wahrscheinlich groß genug zum Hindurchschlüpfen sind.",
    st:[
     {"k":"Heranschleichen","x":"Um die Mauer unbemerkt zu erreichen, ist ein §Heimlichkeit§-Wurf nötig. Im Schutz der Dunkelheit wird der Wurf mit einem Vorteil gemacht. Durch die Risse haben die Spielercharaktere Einblick in den Hof mit dem Feuerplatz und sehen Licht aus den beiden Schuppen (Orte 7 und 8) und dem Bergfried (Ort 9) scheinen. Durch die Risse hineinzukommen ist leicht."},
     {"k":"Wachen","x":"Zwei Abenteurer patrouillieren auf der Mauerkrone. Sie haben den Befehl, jedes Wesen anzugreifen, das sich von außen nähert, und wenn jemand sie anruft, schlagen sie sofort Alarm und erwarten Verstärkung. Sie blicken nur nach außen, sodass Spielercharaktere im Hof nicht entdeckt werden, solange sie keinen Lärm machen."},
     {"k":"Klettern","x":"Um die Mauer zu erklimmen, ist ein §Akrobatik§-Wurf nötig. Oben angekommen, ist ein weiterer §Heimlichkeit§-Wurf nötig, um nicht von den Wachen entdeckt zu werden."}
    ]},
   {n:"3", t:"Torhaus", p:82, pin:[79.8,42.0], wesen:[],
    vl:"Das fünf Meter hohe und ebenso breite Doppeltor aus Bronze muss einst ein beeindruckender Anblick gewesen sein. Jetzt ist seine Oberfläche so grün wie das Moos, das sich an den Rändern festgesetzt hat. Der Umriss eines Wappens – ein Baum mit goldenen Äpfeln – ist kaum noch zu erkennen. Das Tor steht einen Spalt offen.",
    st:[
     {"k":"Tor","x":"Das patinierte Doppeltor steht einen Spalt offen, einfach weil es sich nicht mehr schließen lässt. Es weit genug zu öffnen, um hindurchzuschlüpfen, erfordert einen STÄ-Wurf, löst aber ein schrilles Quietschen aus, das von jedem gehört wird, der sich gerade draußen aufhält."},
     {"k":"Wappen","x":"Ein §Mythen & Legenden§-Wurf enthüllt, dass das Wappen auf dem Tor dem Haus Stoneoak gehört, das zur Zeit des Drachenreichs mächtig war."}
    ]},
   {n:"4", t:"Der Feuerplatz", p:82, pin:[48.8,59.9], wesen:[],
    vl:"Ein Bett aus Glut raucht und schwelt im Hof. Das Feuer muss riesig gewesen sein, ein echtes Freudenfeuer.",
    st:[
     {"k":"Das Glutbett","x":"hat drei Meter Durchmesser und ist noch heiß. Wer in der schwelenden Asche herumwühlt, muss einen §Wildniskunde§-Wurf machen oder erleidet W3 Feuerschaden."},
     {"k":"Der Schädel","r":1,"x":"Wer die Holzkohle durchwühlt, findet einen menschlichen Schädel. Eine Untersuchung des Schädels in Verbindung mit einem gelungenen §Heilkunde§-Wurf enthüllt eine Verletzung am Knochen – einen Spalt, der von der Stirn unter das linke Auge verläuft."},
     {"k":"Zufallsereignis","x":"Würfelt W6 auf der Tabelle auf S. 80 für jedes volle Viertel, das die Spielercharaktere hier verbringen."}
    ]},
   {n:"5", t:"Der Steinbaum", p:82, pin:[61.3,75.2], wesen:[],
    vl:"Ein halbtoter Baum hinter einer meterhohen Steinmauer. Er sieht nach nicht viel aus – eine ausladende, knochentrockene Krone, bedeckt mit runzliger Rinde, kahl bis auf eine Handvoll kleiner gelbroter Früchte. Die umgebende Mauer ist so dicht mit Dornen überwuchert, dass der Marmorring an ihrer Oberkante kaum zu sehen ist.",
    st:[
     {"k":"Der Baum","x":"Wer den Baum aus der Nähe untersucht und einen §Wildniskunde§-Wurf schafft, kann erkennen, dass er verdorrt ist, doch kleine, blassgrüne Knospen an einigen der unteren Äste zeigen, dass er noch lebt."},
     {"k":"Die Früchte","x":"W4 vereinzelte Früchte hängen an den Ästen. Sie sehen aus wie kleine Äpfel, goldfarben und köstlich. Ein goldener Apfel reicht als Nahrung für einen ganzen Tag, zählt aber bei der Traglast als Kleinkram."},
     {"k":"Der Marmorring","x":"In die Marmoroberfläche oben auf der Mauer sind uralte Buchstaben eingemeißelt, die mit §Fremdsprachen§ gelesen werden können: „Der goldene Baum soll auf ewig in der Obhut und im Besitz des Hauses Stoneoak sein; so lautet die Vereinbarung mit dem Hüter und der Seele des Baumes, Rotlaug, der auf immer an diesen Ort gebunden ist.“"},
     {"k":"Zufallsereignis","x":"Würfelt W6 auf der Tabelle auf S. 80 für jedes volle Viertel, das die Spielercharaktere hier verbringen."}
    ]},
   {n:"6A", t:"Lagerschuppen (6A & 6B)", p:83, pin:[34.1,80.4], wesen:[],
    vl:"Dunkelheit und Stille ist alles, was sich in dem baufälligen Schuppen wahrnehmen lässt. Der türlose Eingang klafft wie ein Ungeheuerschlund und wartet auf köstliche Besucher.",
    st:[
     {"k":"Zufallsereignis","x":"Würfelt W6+1 auf der Tabelle auf S. 80 für jedes volle Viertel, das die Spielercharaktere hier verbringen."}
    ]},
   {n:"7", t:"Iliels Zelle", p:83, pin:[22.4,68.3], wesen:["iliel"],
    vl:"Eine Laterne erhellt das Innere des kleinen Schuppens. Licht dringt durch Risse im Mauerwerk und dort, wo die jahrhundertealten Dachziegel eingestürzt sind, nach draußen. Als ihr euch der moosbewachsenen Fassade nähert, hört ihr angespannte, zischende Stimmen – Worte sind nicht zu verstehen, zumindest nicht, bis ihr unmittelbar davorsteht.",
    st:[
     {"k":"Lauschen","x":"Nahe genug heranzukommen, um unentdeckt zu lauschen, erfordert einen §Heimlichkeit§-Wurf. Gelingt er, sind zwei weibliche Stimmen zu hören – eine gereizt und drohend, die andere trotzig. Einige Worte sind zu verstehen:"},
     {"k":"Isadelia","x":"„Warum weigerst du dich? Wenn du [Gemurmel] einfach [Gemurmel] an der Kellertür übersetzt, bist du frei und kannst dein [Gemurmel] hier wegschaffen!“"},
     {"k":"Iliel","x":"„Nein, lass mich gehen [Gemurmel] Wenn du [Gemurmel] nett, würde ich dir vielleicht [Gemurmel]. Aber [Gemurmel] Zwang und Drohungen, niemals!“"},
     {"k":"Isadelia","x":"Kurz nach dem obigen Gespräch dreht sich Isadelia um und reißt die Tür auf. Befinden sich die Spielercharaktere in ihrem Blickfeld, entdeckt sie sie sofort, bleiben sie aber im Schatten, bleiben sie unentdeckt – sie schließt die Tür hinter sich ab und schreitet zielstrebig, ohne zurückzublicken, auf den Bergfried (Ort 9) zu."},
     {"k":"Das Symbol","x":"Isadelia trägt das Symbol Eledains deutlich sichtbar auf ihrem Umhang und der Umhangschnalle. Die Spielercharaktere können es mit einem §Mythen & Legenden§-Wurf erkennen."},
     {"k":"Die Tür","x":"Die Tür des Schuppens ist alt und undicht, aber das schwere Schloss funktioniert, und es zu knacken erfordert einen §Fingerfertigkeit§-Wurf. Die Tür kann aufgebrochen werden (10 TP, Rüstungswert 6), aber nicht, ohne den Feind zu alarmieren."},
     {"k":"Das Dach","x":"Dank der vielen fehlenden Dachziegel ist es auch möglich, über das Dach einzudringen. Um ohne Unfall hinauf- und hineinzukommen, ist ein §Akrobatik§-Wurf nötig; bei einem Fehlschlag erleidet der Kletterer einen Sturz aus vier Metern Höhe. Befindet sich Isadelia noch im Schuppen, ist außerdem ein gelungener §Heimlichkeit§-Wurf nötig, um nicht entdeckt zu werden."},
     {"k":"Iliel","x":"Betreten die Spielercharaktere den Schuppen, erhebt sich eine stolze und imposante Elfenfrau. Ihre Knöchel sind gefesselt, und ihre Hände sind auf dem Rücken gebunden. Sie bietet an, ihnen alles zu erzählen, was sie weiß, wenn sie dafür ihre Freiheit erhält."},
     {"k":"Zufallsereignis","x":"Würfelt W6+1 auf der Tabelle auf S. 80 für jedes volle Viertel, das die Spielercharaktere hier verbringen."}
    ]},
   {n:"8", t:"Blutulds Zelle", p:84, pin:[23.9,58.6], wesen:[],
    vl:"Die Tür des größeren Schuppens steht weit offen, und ein schwacher Lichtschein fällt auf das Gras hinaus. Ansonsten sieht er genauso aus wie das Gebäude daneben, mit seiner moosigen Steinfassade und dem kaputten Dach.",
    st:[
     {"k":"Rucksack","x":"Blutulds Rucksack liegt noch hier, neben den Fesseln, die ihn zuvor festhielten. Er enthält ein Schlaffell, eine Feldküche und eine Schaufel sowie eine Okarina mit neun Löchern in Form eines grinsenden dämonischen Hahns."},
     {"k":"Geheimfach","r":1,"x":"Wer den Rucksack durchsucht und einen §Entdecken§-Wurf schafft, findet in seinem Lederrand ein Geheimfach. Darin versteckt liegt eine kleine Silbermünze mit dem Symbol Sathmogs auf einer Seite."},
     {"k":"Zufallsereignis","x":"Würfelt W6+1 auf der Tabelle auf S. 80 für jedes volle Viertel, das die Spielercharaktere hier verbringen."}
    ]},
   {n:"9", t:"Der Bergfried", p:84, pin:[41.0,38.3], wesen:["ritter","abenteurer","graben","inschrift"],
    vl:"Wie hoch er einst war, lässt sich nicht sagen, doch nun ist nur noch das Erdgeschoss des Bergfrieds übrig. Licht dringt durch hohe, schmale Fensteröffnungen, die teilweise von Kletterranken verdeckt sind, und die patinierte Bronzetür ist geschlossen. Das Geräusch von Spitzhacken, die auf Stein treffen, hallt von drinnen wider, manchmal begleitet von den ungeduldigen Rufen einer rauen Männerstimme.",
    st:[
     {"k":"Die Tür","x":"Die Bronzetür ist von innen verriegelt. Sie ist sehr schwer aufzubrechen (80 TP, Rüstungswert 18), und jeder Versuch wird von allen in der Nähe gehört."},
     {"k":"Hintertür","x":"Die kleinere Tür, die in die andere Richtung zu einem kleinen Hof mit einem trockenen Brunnen führt, schließt nicht ganz. Sie ohne verräterisches Quietschen zu öffnen, erfordert jedoch einen gelungenen §Heimlichkeit§-Wurf."},
     {"k":"Durch das Dach","x":"In der südöstlichen Ecke dessen, was einst der Boden des zweiten Stockwerks war, ist die Treppenöffnung noch vorhanden. Da sich die verwitterte Fassade leicht erklimmen lässt, wird der §Akrobatik§-Wurf mit einem Vorteil gemacht."},
     {"k":"Die Drachenritter","x":"Hat niemand Alarm geschlagen, sind beide Drachenritter meist im großen Saal des Bergfrieds zu finden. Sie sind nicht sehr wachsam, greifen aber jeden Eindringling sofort an. Allerdings verlassen sowohl Isadelia als auch Niklion den Saal von Zeit zu Zeit, was ein guter Moment für die Spielercharaktere zum Zuschlagen sein könnte – gemeinsam stellen sie eine ernste Herausforderung im Kampf dar."},
     {"k":"Die Abenteurer","x":"Der Abenteurer bzw. die Abenteurer, die nicht die Mauer bewachen, graben sich auf Befehl der Drachenritter durch den Boden. Im Raum liegen ein Vorschlaghammer und eine Spitzhacke. Spielercharaktere, die das Rätsel der Tür ebenso unlösbar finden wie die Drachenritter, können weitergraben. Siehe den Kasten „Der Preis des Grabens“."},
     {"k":"Kellertür","x":"Die massive, eisenbeschlagene Kellertür ist patiniert, aber nicht so stark wie die Tür zum Bergfried. Sie hat kein normales Schloss und kann weder geknackt noch mit §Aufschließen§ geöffnet werden. Sie aufzubrechen ist nahezu unmöglich (100 TP, Rüstungswert 25). Am besten öffnet man sie, indem man die Inschrift entziffert und die Kristalle in der richtigen Reihenfolge einsetzt."},
     {"k":"Die Inschrift","x":"Im oberen Teil der Kellertür befindet sich eine Inschrift in einer uralten Sprache, darunter ein Baum mit Blätterkrone. Bei näherem Hinsehen zeigen sich fünf waagerechte Vertiefungen in Brusthöhe, jede rund und etwa so groß wie eine Silbermünze. In der äußersten linken Vertiefung steckt bereits eine leuchtend gelbe Kristalllinse, die sich aber leicht herausnehmen lässt. Den Text zu entziffern erfordert einen §Fremdsprachen§-Wurf – siehe den Kasten oben."}
    ]}
  ]},
  {id:"keller", t:"Der Keller", karte:{img:"abenteuer/malus-keller-karte", p:85}, orte:[
   {n:"10", t:"Keller", p:85, pin:[43.0,50.8], wesen:[],
    vl:"Sobald die Kristallmünzen in der richtigen Reihenfolge eingesetzt sind, flammt die ganze Tür in einem inneren Licht auf, das mit blendender Intensität durch die Linsen scheint. Die Tür gleitet von selbst auf. Der modrige Geruch der Dunkelheit jenseits der Schwelle vermischt sich mit einem scharfen, beißenden Gestank. Eine krächzende, kichernde Stimme sagt: „Rotlaug ist frei! Macht Platz, es ist Zeit, Dinge wachsen zu lassen.“",
    st:[
     {"k":"Rotlaug","x":"Der Naturgeist Rotlaug ist so krumm wie eine Zwergbirke, mit einer Haut, so rau und blass wie die Rinde einer Birke. Sein Gesicht wird von einem breiten, zahnlosen Mund beherrscht. Seine Nase ist wie eine kleine Knospe und seine Augen wie winzige Pfefferkörner. Was seine Ziele im Leben betrifft, so hat er nur zwei: frei zu sein und sich für all seine Jahre in Gefangenschaft zu rächen (siehe unten)."},
     {"k":"Der Keller","x":"Eine Krypta mit Steinboden (etwa 6×6 Meter) und niedriger Decke. Fast alles, was hier unten war, ist zu Staub zerfallen."},
     {"k":"Schätze","x":"Der größte Teil des Vermögens des Hauses Stoneoak wurde von den Konflikten aufgezehrt, die die letzten Jahre des Reiches prägten, doch in einer gesprungenen Urne finden die Spielercharaktere Wertgegenstände im Wert von vier Schatzkarten. Wurde in diesem Abenteuer ein Teil der Drachenstatuette platziert, liegt er ebenfalls hier."}
    ],
    b:[
     {"bild":{"img":"abenteuer/malus-rotlaug","t":"Rotlaug","kl":1}},
     "**Rotlaugs Rache:** Wird Rotlaug befreit, geht er hinaus in den Hof, umgeben von den schwärmenden Hornissen, die auf die Rückkehr ihres Herrn gewartet haben, und entfesselt seine ganze lebensspendende Kraft. Er wird Teil des Apfelbaums, der rasch um ein Vielfaches wächst und Fort Malus angreift – seine Äste und Wurzeln krachen in die Ruinen, während sie sich an Wände und Decken klammern. Währenddessen schießt Gras zwischen wachsenden Rissen in Böden und Fundamenten empor. Wildblumen sprießen, knospen und blühen überall im Hof.",
     "Sind einer oder beide Drachenritter noch da, wenn das geschieht, versuchen sie, Rotlaug aufzuhalten, werden aber bald von rachsüchtigen Wurzeln zermalmt. Die Abenteurer fliehen um ihr Leben. Versucht ein Spielercharakter, Rotlaug aufzuhalten oder ihm zu schaden, wird auch er von wütenden Ästen und Wurzeln angegriffen, was als Monsterangriff zählt, der 3W8 Wuchtschaden verursacht. Rotlaug kann mit keinem den Spielercharakteren zur Verfügung stehenden Mittel im Kampf besiegt werden.",
     "Wenige Minuten später ist Rotlaugs Rache vollendet – Fort Malus hat sich in eine überwucherte Ruine verwandelt, die kaum vom umgebenden Wald zu unterscheiden ist. Sind in den Kellern der Ruine noch Schätze übrig, können die Spielercharaktere weiterhin darauf zugreifen. Im Zentrum der Ruine sitzt der nun gewaltige Apfelbaum, an dem 4W6 goldene Äpfel zum Pflücken bereitstehen. Weitere 4W6 Früchte können jeden Herbst geerntet werden."
    ]}
  ]}
 ],
 figuren:{
  "ossiar":{"typ":"nsc","t":"Ossiar","p":80,"img":"abenteuer/malus-ossiar","tp":12,
   "werte":[["Bewegung","10"],["Schadensbonus","–"],["TP","12"]],
   "zl":[["Rüstung","Leder (1)"],["Fertigkeiten","Wahrnehmung 10, Mythen & Legenden 12"],["Ausrüstung","Kurzschwert (Fertigkeitswert 12, Schaden W10), Schlaffell, zwei Rationen Essen, 7 Silbermünzen"]],
   "text":["Ossiar gibt sich als scheuer Forscher aus, ist aber ein fanatischer Anhänger Sathmogs. Sein einziges Ziel ist es, Blutuld zu befreien, mit oder ohne Hilfe der Spielercharaktere. Ossiar hat das Zeichen Sathmogs auf den Unterarm tätowiert. Werden die Spielercharaktere ihn damit konfrontieren, versucht er davonzulaufen."]},
  "abenteurer":{"typ":"nsc","t":"Die Abenteurer","p":82,"img":"abenteuer/malus-abenteurer","tp":13,
   "werte":[["Bewegung","10"],["Schadensbonus STÄ","+W4"],["TP","13"]],
   "zl":[["Rüstung","Beschlagenes Leder (2)"],["Fertigkeiten","Wahrnehmung 12, Ausweichen 10"],["Ausrüstung Abenteurer 1","Breitschwert (Fertigkeitswert 14, Schaden 2W6), Schwere Armbrust (Fertigkeitswert 13, Schaden 2W8), W8 Silbermünzen"],["Ausrüstung Abenteurer 2","Langspeer (Fertigkeitswert 13, Schaden 2W8), Langbogen (Fertigkeitswert 14, Schaden W12), W8 Silbermünzen"],["Ausrüstung Abenteurer 3","Handaxt (Fertigkeitswert 14, Schaden 2W6), Leichte Armbrust (Fertigkeitswert 13, Schaden 2W6), W8 Silbermünzen"],["Ausrüstung Abenteurer 4","Streitaxt (Fertigkeitswert 14, Schaden 2W8), Kurzbogen (Fertigkeitswert 12, Schaden W10), W8 Silbermünzen"]],
   "text":["Die Drachenritter haben eine Gruppe Abenteurer angeheuert, die bei den Grabungen helfen und die Festung bewachen. Vielleicht wäre es zutreffender, sie Plünderer zu nennen, und zwar kaltblütige. Ihnen wurde ein Fünftel der angeblich reichlichen Beute versprochen, und ohne die gehen sie nicht!","Die Wachen sind so viele wie die Spielercharaktere, aber mindestens zwei und höchstens vier."]},
  "iliel":{"typ":"nsc","t":"Iliel","p":83,"img":"abenteuer/malus-iliel","tp":12,
   "werte":[["Bewegung","12"],["Schadensbonus GEW","+W4"],["TP","12"]],
   "zl":[["Rüstung","–"],["Fertigkeiten","Wahrnehmung 12, Bögen 14, Ausweichen 14, Schwerter 13"],["Waffen","–"]],
   "text":["Befreien die Spielercharaktere sie, erklärt Iliel, dass sie gegen ihren Willen von etwas, das sie für Drachenritter hält, nach Fort Malus gebracht wurde. Sie wollen, dass sie die uralte Schrift auf einer Tür im Bergfried übersetzt. Ein weiterer Gefangener wurde im Nachbargebäude festgehalten – sie weiß nicht, wer es war, aber nach den Geräuschen, Gerüchen und qualvollen Schreien, die vor einigen Stunden zu ihr drangen, nimmt sie an, dass die Person tot ist."]},
  "ritter":{"typ":"nsc","t":"Die Drachenritter","p":84,"img":"abenteuer/malus-ritter","tp":15,
   "werte":[["Bewegung","10"],["Schadensbonus STÄ","+W4"],["TP","15"],["WP","14"]],
   "zl":[["Rüstung","Plattenrüstung (6)"],["Fertigkeiten","Raufen 14, Ausweichen 12"],["Talente Isadelia","Defensiv, Doppelhieb, Veteran"],["Talente Niklion","Blitzschnell, Veteran"],["Ausrüstung Isadelia","Langschwert (Fertigkeitswert 16, Schaden 2W8), Großer Schild, Schlaffell, W8 Goldmünzen"],["Ausrüstung Niklion","Schwerer Kriegshammer (Fertigkeitswert 16, Schaden 2W10), Schlaffell, W8 Goldmünzen"]],
   "text":["Die jungen, ehrgeizigen Ritter Isadelia und Niklion erkunden Fort Malus aus eigener Initiative. Sie wollen Eledains Reich wiedererrichten und hoffen, einen Goldschatz zu finden, den sie den Drachen der Drachenzahn-Gipfel anbieten können. Allein das Ziel zählt – wirken die Spielercharaktere fähiger als ihre derzeitigen Wachen, bietet Isadelia ihnen stattdessen die Stelle an.","**Die Kristalle:** Die Ritter tragen auch vier der Kristalle bei sich, die zum Öffnen der Tür zum Keller des Bergfrieds nötig sind (alle außer dem gelben). Welcher von ihnen die Kristalle hat, liegt bei dir, je nachdem, was am passendsten ist."]}
 },
 kaesten:{
  "angriff":{"k":"Angriff!","p":82,"b":["Wollen die Spielercharaktere die Burg direkt angreifen, steht ihnen ein harter Kampf bevor. Zwei Abenteurer patrouillieren auf der Mauerkrone. Im Fall eines Angriffs schlagen sie sofort Alarm und werden in der nächsten Runde von den anderen Abenteurern und in der Runde danach von den beiden Drachenrittern unterstützt."]},
  "graben":{"k":"Der Preis des Grabens","p":84,"b":[
   "Sich durch den Boden in den Keller zu graben dauert einen Tagesabschnitt und erfordert einen gelungenen §Handwerk§-Wurf. Jeden Tagesabschnitt ist ein neuer Versuch erlaubt, aber der Lärm könnte gefährliche Kreaturen aus dem Eisenwald anlocken. Würfelt einmal pro Tagesabschnitt des Grabens auf der folgenden Tabelle.",
   {"tbl":{"id":"graben","head":["W6","Kreatur"],"rows":[
    ["1–3","**Nichts passiert.**"],
    ["4","**Gierige Goblins**, doppelt so viele wie die Spielercharaktere (Werte wie Goblinspäher, Regelbuch S. 90)."],
    ["5","**Wütende Orks**, so viele wie die Spielercharaktere (Werte wie Krieger, Regelbuch S. 95)."],
    ["6","**Der gefräßige Troll Yx** (Werte wie Regelbuch S. 97)."]
   ]}}
  ]},
  "inschrift":{"k":"Die Inschrift","p":85,"b":[
   "*Der Tropfen liegt östlich des Herzens, aber nicht in der Mitte.*",
   "*Das Herz liegt nicht neben dem Blatt, sondern gleich östlich der Sonne.*",
   "*Die Sonne liegt weder ganz im Westen noch ganz im Osten.*",
   "*Der Mond liegt allein neben dem Tropfen.*",
   "*Das Blatt liegt westlich des Herzens.*",
   "**Die richtige Reihenfolge:** Blatt/Grün, Sonne/Gelb, Herz/Rot, Tropfen/Blau, Mond/Cremeweiß"
  ]}
 },
 tabellen:[
  {"id":"ereig","h":"Zufallsereignisse","p":80,"strip":"Zufallsereignisse · W6","einl":"Für jedes volle Viertel, das die Spielercharaktere an einigen Orten verbringen – etwa um nach etwas zu suchen oder eine Kurze Rast einzulegen –, könnt ihr auf der folgenden Tabelle würfeln oder ein passendes Ereignis auswählen. Die Ortsbeschreibungen geben an, wo Zufallsereignisse eintreten können und welche Würfel ihr werfen sollt.","cols":["Wurf","Ereignis"],"rows":[
   ["1","**Niklion.** Der Drachenritter Niklion späht aus einem der Fenster des Bergfrieds oder macht einen Spaziergang durch den Hof. Die Spielercharaktere müssen einen §Heimlichkeit§-Wurf machen, um nicht entdeckt zu werden."],
   ["2–4","**Nichts passiert.**"],
   ["5","**Hornissen.** Ein Hornissenschwarm, der in der Ruine lebt, greift einen Spielercharakter an. Das Opfer muss einen §Ausweichen§-Wurf machen oder wird schwer gestochen, was 2W6 Schaden verursacht und dem Opfer für einen Tagesabschnitt einen Nachteil auf alle Aktionen gibt."],
   ["6","**Rotlaugs Flehen.** Rotlaug greift mit seinem Geist aus und sendet einem Spielercharakter eine chaotische Folge von Empfindungen: den erdigen Geruch eines Vorratskellers, einen prächtigen Baum mit goldenen Früchten, ein intensives Gefühl von Gefangenschaft und Sehnsucht nach Freiheit, eine zitternde Stimme, die in einer uralten Sprache flüstert (§Fremdsprachen§: „Hilf mir, befreie mich“)."],
   ["7","**Einstürzende Decke.** Die Ruinen von Fort Malus sind in schlechtem Zustand. Ein Spielercharakter muss einen §Ausweichen§-Wurf schaffen oder erleidet W8 Wuchtschaden, wenn ein Felsbrocken von der Decke fällt."]
  ]}
 ]
};
