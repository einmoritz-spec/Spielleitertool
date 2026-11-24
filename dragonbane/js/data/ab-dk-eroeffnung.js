/* Das Geheimnis des Drachenkaisers – Einstieg (Eröffnungsszene, Abenteuerband S. 11–13) – deutsche Fassung. §…§ = Fertigkeit. Modell: plan/dragonbane/ABENTEUER_PLAN.md §2 */
window.DB_AB = window.DB_AB || {};
(function(){
 var HINT = [
  "Im nächsten Moment greifen Goblinspäher von Punkt 2 und 3 auf der Karte an. Sie sind so viele wie die Spielercharaktere, gleichmäßig auf die beiden Stellen verteilt. Sie feuern ihre Kurzbögen ab, bevor sie mit erhobenen Nahkampfwaffen auf die Abenteurer zustürmen.",
  "Sehen sich die Spieler aktiv um, kann jeder einen §Wahrnehmung§-Wurf machen, um den Angriff rechtzeitig zu bemerken, und dann wie gewohnt die Initiative ziehen. Alle, die scheitern, bekommen die untersten Karten (von #10 aufwärts), zufällig gezogen. Alle Goblinspäher handeln im selben Zug."
 ];
 DB_AB["dk-eroeffnung"] = {
  id:"dk-eroeffnung", t:"Einstieg", band:"dk", buch:"db_adv", p:11, img:"abenteuer/dk-eroeffnung-titel", kurz:"Drakmar-Pass",
  vl:"Der uralte, schmale Pass zieht sich wie ein Axthieb durch die Berge. Steile, moosbewachsene Hänge steigen zu den schneebedeckten Gipfeln auf, die man hin und wieder durch die Wolkenschleier erahnen kann. Irgendwo vor euch liegt das Nebeltal, der legendäre Ort, an dem die Reiche vergangener Zeiten ihren Reichtum und ihre magischen Artefakte aufbewahrten.\n\nDas Gerücht von diesen Schätzen hat euch hierhergeführt – die ungeheuren Reichtümer und arkanen Geheimnisse, die zwischen den Ruinen auf der anderen Seite der Berge verborgen liegen. Und ihr seid nicht die Ersten, die solche Verlockungen anziehen. Seit die Orks vor etwa einem Jahrzehnt begannen, das Gebiet zu verlassen, macht sich ein wachsender Strom von Siedlern und Abenteurern auf den Weg ins Nebeltal.\n\nAber ihr wisst, dass der Weg tückisch und voller Gefahren ist. Die alten Kaiserstraßen sind zerfallen, und in den Bergen wimmelt es von Gefahren. Der Drakmar-Pass, auf dem ihr euch gerade befindet, ist besonders berüchtigt. Die Zwerge des Kummergebirges haben gewarnt, dass die Rückkehr der Menschen Räuber und gefräßige Bestien in die Gegend gelockt hat.\n\nIhr seid noch nicht lange unterwegs, da hört ihr plötzlich ein beunruhigendes Wimmern. Ihr seht eine Gestalt mitten auf dem steinigen Pfad liegen, nur etwa zwanzig Meter vor euch. Die Gestalt trägt eine schlichte graue Robe und drückt ein dunkles Bündel an die Brust. Als das Wimmern in ein rasselndes Keuchen übergeht, erkennt ihr, dass die Person schwer verwundet ist.",
  lage:[
   "Der Drakmar-Pass ist ein schmaler Durchgang durch das Kummergebirge. Seine uralte, aber noch erkennbare Straße macht ihn zu einer wichtigen Route für Abenteurer, Siedler und andere, die im Nebeltal ihr Glück suchen. Doch der Zustrom von Reisenden hat auch Straßenräuber und gelegentlich eine Bestie auf den Gebirgspass gelockt.",
   {h:"Die Lage", p:11},
   "Drigel Weatherman, einer von Azrahel Koths menschlichen Dienern, sucht schon seit einiger Zeit die Statuette des Drachenkaisers und trägt eine Karte bei sich, die ihm die Suche erleichtert. Wenige Tage vor Beginn des Abenteuers machte er seinen ersten Fund – den Sockel des legendären Artefakts, gefunden in einer verlassenen Mine unter dem Kummergebirge.",
   "Doch Weathermans Glück war nur von kurzer Dauer. Auf dem Weg nach Außenposten und zu Leanara wurde er von Goblins entdeckt, die in der Gegend patrouillierten. Die Goblins wissen nichts von Um-Durman, haben aber vom Häuptling Maladûk den Befehl, nach einer kostbaren Reliquie Ausschau zu halten, die in vier kleinere Teile zerbrochen ist. Man hat ihnen gesagt, dass viele diese Reliquie suchen, Lebende wie Untote, und so erregte das Bündel, das Weatherman mit sich herumschleppte, ihre Aufmerksamkeit.",
   "Weatherman gelang es, sich der ersten Auseinandersetzung zu entziehen, doch er wurde von einem vergifteten Pfeil schwer verwundet. Die Spielercharaktere finden ihn kurz vor dem Tod, und er sieht in ihnen seine letzte Chance, die Reliquie zu Leanara zu bringen. Doch die Goblins kommen näher – gerade als Weatherman sein geheimnisvolles Bündel übergibt, saust der erste Pfeil durch die Luft.",
   {h:"Auf ins Nebeltal", p:11},
   "Zu Beginn des Abenteuers sind die Spielercharaktere seit Tagen durch das hohe, zerklüftete Kummergebirge gewandert und suchen einen Weg hinab ins Nebeltal. Beginne die Sitzung, indem du den folgenden Text vorliest oder nachspielst.",
   {h:"Das Ende des Kampfes", p:13},
   "Die Goblins fliehen, wenn der Wargreiter stirbt. Der Kampf soll eine Einführung in die Kampfregeln von *Dragonbane* sein. Sollte es für die Spielercharaktere schlecht laufen, können Jory oder Hardy aus Außenposten (S. 14) ihnen zu Hilfe kommen.",
   {h:"Die Karte & die Statuette", p:13},
   "Weatherman tut seinen letzten Atemzug, bevor die Spielercharaktere weitere Fragen stellen können. Das Bündel enthält zwei bemerkenswerte Gegenstände: eine Karte und ein Stück einer schwarzen Statuette.",
   {ul:["**Die Karte** zeigt das Nebeltal und liegt dieser Box bei. Gib sie jetzt den Spielern. Beachte, dass die vier Teile der Statuette in den Ecken der Karte abgebildet sind.","**Das Statuettenstück** ist ein Sockel, Unterschenkel und der untere Teil eines Schwertes, wahrscheinlich von einer Basaltstatuette eines humanoiden Kriegers."]},
   {h:"Hinweise", p:13},
   "Bemerken die Spieler die Statuettenteile auf der Karte, kannst du bestätigen, dass dieses Stück genauso aussieht wie das in der linken unteren Ecke der Karte. Die Charaktere haben nun auch die Namen Weatherman und Leanara gehört sowie einen rätselhaften Hinweis auf „das Geheimnis des Drachenkaisers“.",
   "Wenn sie die Leiche durchsuchen, finden sie außerdem das schwarze Symbol Sathmogs auf dem linken Unterarm von Meister Weatherman eingebrannt. Sie können diese Spuren später verfolgen, zum Beispiel indem sie sich unter den Gästen des Gasthauses *Zu den Drei Hirschen* in Außenposten umhören."
  ],
  bereiche:[
   {id:"pass", t:"Drakmar-Pass", karte:{img:"abenteuer/dk-eroeffnung-karte", p:12}, orte:[
    {n:"1", t:"Schwarzer Pfeil in Meister Weatherman", p:12, pin:[39.4,60.0], wesen:["dk-weatherman"],
     b:[
      "Weatherman liegt an Punkt 1 der Karte. Gehen die Spielercharaktere näher heran, sehen sie sein blasses, panisches Gesicht und bemerken, dass einer seiner Oberschenkel von einem dicken, schwarzen Pfeil durchbohrt ist. Untersuchen sie die Wunde, braucht es keinen Fertigkeitswurf, um zu erkennen, dass der Pfeil vergiftet ist. Violettblaue Streifen gehen von der Wunde aus und sind auch in Weathermans Gesicht zu sehen.",
      "Plötzlich setzt er sich aufrecht hin und reicht sein Bündel dem Spielercharakter mit dem höchsten CHA, starrt ihn weit aufgerissenen Auges an und sagt mit atemloser, schwindender Stimme: „*Schnell, nehmt es! Leanara wird verstehen … Botschaft von Meister Weatherman … müsst alle vier Teile finden … das Geheimnis des Drachenkaisers!*“"
     ]},
    {n:"2", t:"Der Hinterhalt", p:12, pin:[40.5,81.5], wesen:["dk-spaeher"], b:HINT},
    {n:"3", t:"Der Hinterhalt", p:12, pin:[35.9,44.5], wesen:["dk-spaeher"], b:HINT},
    {n:"4", t:"Der Wargreiter", p:12, pin:[57.0,40.4], wesen:["dk-wargreiter"],
     b:["In der zweiten Runde greift der wargreitende Anführer der Goblins an, der zuvor hinter dem Felsblock bei Punkt 4 verborgen war. Sein Angriff ist überraschend, und er erhält in dieser Runde automatisch die Initiativkarte #1."]}
   ]}
  ],
  figuren:{
   "dk-weatherman":{typ:"nsc", t:"Weatherman", p:12, img:"abenteuer/dk-eroeffnung-weatherman", text:["Einer von Azrahel Koths menschlichen Dienern. Ein dicker, schwarzer, vergifteter Pfeil steckt in seinem Oberschenkel. Auf seinem linken Unterarm ist das schwarze Symbol Sathmogs eingebrannt."]},
   "dk-spaeher":{typ:"monster", t:"Goblinspäher", p:13, werte:[["Bewegung","10"],["Schadensbonus","–"],["TP","9"]], zl:[["Rüstung","Leder (1)"],["Fertigkeiten","Wahrnehmung 10, Ausweichen 10, Heimlichkeit 12"],["Waffen","Kurzbogen (Fertigkeitswert 12, Schaden W10), Kurzschwert (Fertigkeitswert 10, Schaden W10)"]], text:["Die schnatternden Goblinspäher sind unansehnliche Kreaturen mit stinkendem Atem und schlecht sitzenden Lederrüstungen. Sie alle tragen das schwarze Zeichen Maladûks auf der rechten Schulter. Die Späher handeln im Kampf alle im selben Zug."]},
   "dk-wargreiter":{typ:"monster", t:"Der Wargreiter", p:13, tp:24, werte:[["Grimmigkeit","2"],["Größe","Normal"],["Bewegung","20"],["Rüstung","–"],["TP","24"]],
    text:["Der Goblinanführer ist mit einem Krummsäbel und einem langen Speer bewaffnet und reitet einen blutrünstigen Warg. Der Wargreiter zählt im Kampf als Monster und handelt in einem eigenen Zug."],
    angriffe:{h:"Monsterangriffe", w:"W6", rows:[
     "**Sprung!** Der wilde Warg springt einen Spielercharakter an und schleudert das Opfer heftig zu Boden. Der Angriff verursacht 2W8 Wuchtschaden.",
     "**Hieb von oben!** Der Warg springt über einen gewählten Spielercharakter hinweg, und sein Reiter lässt von oben seinen gezackten Krummsäbel niedersausen, was 3W6 Hiebschaden verursacht.",
     "**Heißhungriges Heulen!** Der Warg hebt den Kopf zum Himmel und stößt ein ausgehungertes Heulen aus. Alle Spielercharaktere im Umkreis von 10 Metern müssen einen WIL-Wurf machen, um der Furcht zu widerstehen.",
     "**Schlachtruf!** Der Wargreiter sammelt seine Untergebenen. Alle übrigen Späher erhalten bis zum nächsten Zug des Wargreiters einen Vorteil auf alle Angriffe.",
     "**Wargbiss!** Der Warg packt ein Opfer mit seinem sabbernden Maul und schüttelt es hin und her. Der Angriff verursacht 2W10 Stichschaden, und das Opfer wird 2W4 Meter weit geschleudert und landet am Boden.",
     "**Speerangriff!** Der Wargreiter versucht, einen Spielercharakter aufzuspießen, indem er direkt auf ihn zustürmt. Der Angriff verursacht 3W8 Stichschaden, kann aber pariert werden."
    ]}}
  }
 };
})();
