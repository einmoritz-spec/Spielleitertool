/* Deadlands – Abenteuergenerator und Begegnungen (Buch S. 93–103) */
(function(){
var D = window.DLD = window.DLD || {};
var H = ["W20","Spades | Feinde","Hearts | Fremde","Diamonds | Schatz","Clubs | Hindernis"];
var H12 = ["W12","Spades | Feinde","Hearts | Fremde","Diamonds | Schatz","Clubs | Hindernis"];
function reg(cap, h, rows){ return {table:{cap:cap, cols:h, rows:rows}}; }
function rowsCard(rows){ return rows.map(function(r){ return [r[0], "**"+r[1]+":** "+r[2]]; }); }

D["spielleitung/begegnungen"] = {t:"Begegnungen", pg:93, secs:[
 {id:"generator", t:"Abenteuergenerator", pg:93, b:[
  {p:"Der Abenteuergenerator liefert eine Reihe von Aufhängern und Ideen für die Grundlagen eines Abenteuers. Es liegt an dir, sie zu einer vollständigen Geschichte zusammenzufügen. Nutze sie, wie du es für richtig hältst, um das beste und spaßigste Spiel für deine Gruppe zu schaffen. Passe die Ergebnisse an die Charaktere deiner Spieler an, aber auch an das allgemeine Gebiet, in dem sie sich befinden. Die Begegnungstabellen helfen dabei enorm, denn sie geben dir eine gute Vorstellung von den Gefahren und der Umgebung, auf die Forscher in einer bestimmten Region wahrscheinlich treffen."},
  {p:"Um sie zu nutzen, ziehe für jedes Element des Abenteuers eine Karte aus dem Aktionskartenspiel: Ziel, Hindernis und Komplikation. Sowohl die Farbe als auch der Wert spielen eine Rolle bei der Bestimmung des genauen Ergebnisses. Wenn du dich besonders gemein fühlst, kannst du bei Hindernis oder Komplikation mehr als einmal ziehen, um es den Helden schwerer zu machen."},
  {p:"Wir empfehlen, zuerst alle Elemente des Szenarios mit dem Abenteuergenerator zu bestimmen und dann herauszufinden, wie sie zusammenpassen. Anfangs scheinen die Ergebnisse vielleicht nicht viel Sinn zu ergeben. Mit Fantasie und etwas Kopfarbeit werden gerade solche Züge oft zu den denkwürdigsten Abenteuern. Passt ein Zug nicht, ziehe erneut – oder wähle einfach ein anderes Ergebnis. Du kannst die Tabellen auch überfliegen und dir Ideen herauspicken, wie es dir gerade gefällt."}
 ]},
 {id:"ziel", t:"Ziel", pg:94, b:[
  {p:"Die Farbe der Karte bestimmt, wie die Helden in das Abenteuer hineingezogen werden, der Wert der Karte entscheidet über das Ziel des Abenteuers."},
  {cards:[
   {n:"Clubs", s:"Unerwarteter Anfang", b:["Die Abenteurer stolpern in das Geschehen – oder es stolpert in sie."]},
   {n:"Diamonds", s:"Auftragsarbeit", b:["Eine Posse braucht Geld, um ein infernalisches Gerät fahrtüchtig zu halten, die Waffen nachzuladen oder einfach nur zu essen."]},
   {n:"Hearts", s:"Motivation des Charakters", b:["Einer der Handicaps der Posse oder eine frühere Tat zieht die Gruppe in das Abenteuer."]},
   {n:"Spades", s:"Alter Freund oder Feind", b:["Ein alter Bekannter sucht einen Cowpoke auf, aber nicht immer mit besten Absichten für ihn."]}
  ], c:4},
  {table:{cap:"Ziele", cols:["Karte","Ergebnis"], rows:rowsCard([
   ["Zwei","R&R","Die Helden werden bei ihrem Versuch, etwas Ruhe zu haben, rüde unterbrochen – vielleicht sogar tödlich!"],
   ["Drei","MacGuffin-Jagd","Die Mannschaft muss einen Gegenstand, eine Information oder ein anderes Objekt beschaffen. Meistens ist das Ziel ihrer Suche bereits in anderen Händen."],
   ["Vier","Starke rechte Arme","Eine mächtige Person braucht Schutz vor einem möglichen Angriff durch Rail Warriors, Indianer, Outlaws oder eine andere Bedrohung. Das kann an einem Ort geschehen oder die Charaktere auf einer Reise mit ihrem Schützling begleiten."],
   ["Fünf","Da ist Ghost Rock in den Bergen!","Einer der Cowpokes hört ein Gerücht über einen Schatz seltsamer Artefakte, bekommt eine Karte zu einer verlorenen Ghost-Rock-Mine in die Hände oder entdeckt sogar das Versteck einer Outlaw-Bande."],
   ["Sechs","Kopfgeldjäger","Die Posse will ein Kopfgeld kassieren. Es kann sich um Outlaws oder Piraten handeln, aber auch um ein gefährliches Raubtier oder darum, den Bestand einer eingeschleppten Art auszudünnen."],
   ["Sieben","Rettung","Die Helden werden gerufen, um jemanden aus den Händen seiner Entführer zu retten."],
   ["Acht","Belagerung","Die Posse reitet los, um eine von einer Bedrohung festgenagelte Gruppe zu retten. Oder vielleicht sind sie selbst die Festgenagelten."],
   ["Neun","Pony Express","Ein Paket von A nach B zu bringen ist nicht immer so leicht, wie es auf dem Papier aussieht … in Wahrheit ist es das nie."],
   ["Zehn","Wegbereiter","Die Posse bricht in unbekannte Gegenden auf, um eine neue Route zu etablieren, einen geeigneten Platz für eine neue Siedlung zu finden oder Ähnliches."],
   ["Bube","Bücherwissen","Die Gruppe muss entweder wichtige Daten von einem Ort sammeln oder einen Haufen Eierköpfe dabei beschützen."],
   ["Dame","Verhandlung","Die Helden müssen eine Einigung zwischen zwei Parteien aushandeln. Das kann ein Vertrag zwischen Indianern und örtlichen Ranchern sein, ein Handelsvertrag zwischen zwei Eisenbahngesellschaften oder einfach eine Fehde zwischen zwei Banden."],
   ["König","Erkundung","Die Charaktere müssen sich in feindliches Gebiet schleichen, um Informationen zu sammeln, sei es über einen Indianeraufstand, ein Piratennest oder ein anderes Ziel. Erwischt zu werden kann eine Katastrophe bedeuten, nicht nur für sie, sondern auch für andere."],
   ["Ass","Schießerei!","Trotz (oder vielleicht wegen) ihrer besten Bemühungen ist ein Kampf oder eine Schlacht ausgebrochen, und die Abenteurer finden sich mittendrin wieder."],
   ["Schwarzer Joker","Wilde Gänsejagd","Die Mission ist nur ein Täuschungsmanöver, um die Posse abzulenken, während jemand anderes den eigentlichen Coup landet. Ziehe zwei weitere Karten – eine für die Ablenkung und eine für das wahre Ziel. Die Charaktere sollten die Chance haben, das Vorhaben zu entdecken und sogar zu vereiteln."],
   ["Roter Joker","Seltsame Bettgenossen","Hellstromme Industries, ein Rail Baron oder eine andere mächtige Person braucht einen Gefallen, groß genug, um frühere Streitigkeiten beiseitezulegen. Ziehe eine weitere Karte für das Ziel und ignoriere die Farbe."]
  ])}}
 ]},
 {id:"hindernis", t:"Hindernis", pg:95, b:[
  {p:"Die zweite Karte bestimmt, wer oder was sich den Helden entgegenstellt. Sind Gegner oder andere Gefahren gefragt, sieh in der Begegnungstabelle der jeweiligen Region nach (S. 98 ff.)."},
  {p:"Die Farbe bestimmt außerdem, welcher Reckoner einen unterschwelligen Schatten auf die Ereignisse wirft. Wie – und ob überhaupt – sich das zeigt, liegt bei dir, Marshal."},
  {cards:[
   {n:"Clubs", s:"Krieg", b:["Alle Beteiligten sind besonders streitlustig und suchen Ärger. Versuche, einen Konflikt zu vermeiden, werden mit einem Nachteil unternommen."]},
   {n:"Diamonds", s:"Hunger", b:["Versorgungs- und Treibstoffknappheit gehören im Weird West immer zum Leben. Hier sind sie Teil des ursprünglichen Problems oder plagen die Bemühungen der Posse."]},
   {n:"Hearts", s:"Seuche", b:["Krankheit oder Gesundheitsprobleme, etwa Ghost-Rock-Fieber, kommen ins Spiel."]},
   {n:"Spades", s:"Tod", b:["Des Todes bleiche Hand befleckt die ganze Angelegenheit. Die Feinde können untot oder einfach besonders mörderisch sein."]}
  ], c:4},
  {table:{cap:"Hindernisse", cols:["Karte","Ergebnis"], rows:rowsCard([
   ["Zwei","Underdogs","Der Posse steht eine Gruppe im Weg, die schlicht unterlegen ist, etwa ein Rancher und seine Familie, ein einsamer Prospektor oder ein hungernder Indianerstamm. Hoffentlich hat die Posse moralische Bedenken, über sie hinwegzutrampeln."],
   ["Drei","Robber Baron","Die Helden werden von einem reichen und einflussreichen Unternehmer oder einer Firma bekämpft, die ihre Bemühungen als Bedrohung für Profite oder Macht sieht. Der Gegner verlässt sich lieber auf das Gesetz, holt aber, wenn das versagt, gern Schläger."],
   ["Vier","Papierkrieg","Die Posse muss ein bürokratisches Hindernis überwinden, um ihr Ziel zu erreichen, etwa einen bestehenden Vertrag, Kontrakt oder ein anderes rechtliches Problem. Gleich in welcher Form: Es ist ein Problem, das sich nicht mit dem Ende einer Schrotflinte lösen lässt."],
   ["Fünf","Naturphänomen","Mutter Natur hat schlechte Laune, und die Abenteurer leiden darunter. Es kann ein Tornado auf den High Plains sein, ein Blizzard im Pazifischen Nordwesten oder eine Dürre im Wilden Südwesten. Ideen findest du in der Begegnungstabelle der Region."],
   ["Sechs","Angeheuerte Revolverhelden","Jemand hat Söldner angeheuert, um das Team auszubremsen. Diese Leute sind auch besser betucht als der durchschnittliche Schläger."],
   ["Sieben","Konkurrenz","Eine andere Gruppe von Abenteurern wittert Geld, entweder bei der Posse oder bei deren Ziel. Die Posse muss sie bezahlen, bekämpfen oder anderweitig abschrecken. Die rivalisierende Gruppe enthält meist einige Wildcards."],
   ["Acht","Kreaturen","Eine seltsame Abscheulichkeit der Reckoning, etwa ein ’Glom oder ein Chupacabra, bedroht entweder die Helden oder ihr Ziel."],
   ["Neun","Viehzeug","Man weiß nie, wo ein Rudel Kojoten, Klapperschlangen oder ein paar Bären auftaucht. Wähle ein gewöhnliches Tier oder eines aus der Begegnungstabelle der Region."],
   ["Zehn","Lynchmob","Eine Gruppe Bürger ist überzeugt, dass die Helden Ärger bedeuten, und nimmt die Sache selbst in die Hand. Es können Bürgerwehrler oder einfach normale Leute sein, aber in jedem Fall kann ein Schusswechsel mit ihnen zu Komplikationen führen. Nutze die Werte der Stadtbewohner (S. 151) für ein durchschnittliches Mitglied der Gruppe."],
   ["Bube","Outlaws","Eine Bande Revolverhelden oder Maze-Piraten mischt sich in die Pläne der Charaktere."],
   ["Dame","Regierungsvollstrecker","Die Helden müssen mit örtlichen Gesetzeshütern, Rangern, US Marshals oder sogar der Agency zurechtkommen, um ihr Ziel zu erreichen – hoffentlich ohne Schusswechsel."],
   ["König","Großer Ärger!","Eine große Bedrohung steht der Posse im Weg, etwa ein Henkersrichter, Los Diablos oder eine Abteilung der US-Armee."],
   ["Ass","Wahre Gläubige","Das Ziel der Helden ist irgendwie an die ideologischen oder religiösen Überzeugungen einer Gruppe Fanatiker geknüpft – die Church of Lost Angels, Kultisten usw. Wie auch immer: Sie sind nicht für vernünftige Gespräche bekannt."],
   ["Schwarzer Joker","Kein Glück","Wie in „Wenn ich kein Pech hätte …“. Ziehe zwei weitere Karten. Die Helden müssen sich beiden Hindernissen stellen."],
   ["Roter Joker","Seltsame Bettgenossen","Die Posse entdeckt einen unerwarteten Verbündeten. Ziehe zwei weitere Karten; die erste stellt ihr Hindernis dar. Das zweite Ergebnis wirkt tatsächlich zugunsten der Helden!"]
  ])}}
 ]},
 {id:"komplikation", t:"Komplikation", pg:96, b:[
  {p:"Die letzte Karte steht für jede zusätzliche Hürde, die die Posse zur Erfüllung ihrer Mission überwinden muss. Die Farbe der Karte bestimmt die allgemeine Natur oder Herkunft des Ärgers, der Wert nennt das konkrete Problem."},
  {cards:[
   {n:"Clubs", s:"Zäh", b:["Die Komplikation hat keine echten Wendungen, ist aber zäh. Alle Fertigkeitswürfe zu ihrer Überwindung erhalten –2, weil die Dinge ständig schwieriger sind, als sie sein sollten."]},
   {n:"Diamonds", s:"Geld", b:["Der schnellste Weg, das Problem zu lösen, ist, die gute alte Geldbörse zu zücken und ein paar Dollar herzugeben. Als grobe Schätzung multipliziere den Kartenwert mit 100 $; Bildkarten zählen 10."]},
   {n:"Hearts", s:"Gefühle", b:["Die Komplikation betrifft einen oder mehrere Handicaps der Posse-Mitglieder oder eine andere mächtige Quelle emotionalen Konflikts, etwa eine frühere Geliebte, einen alten Freund usw."]},
   {n:"Spades", s:"Erzfeind", b:["Ein alter (oder neuer) Feind arbeitet zumindest anfangs hinter den Kulissen daran, die Bemühungen der Posse zu vereiteln, indem er ihr Hindernisse in den Weg wirft. Die Mannschaft erkennt die Quelle ihres Ärgers bis zum Ende des Abenteuers vielleicht nicht."]}
  ], c:4},
  {table:{cap:"Komplikationen", cols:["Karte","Ergebnis"], rows:rowsCard([
   ["Zwei","Verwechslung","Ein Posse-Mitglied wird mit einer anderen Person verwechselt. Ob Gesetzeshüter, brutaler Outlaw oder Kriegsverbrecher – die Identität bringt reichlich eigenes Gepäck mit."],
   ["Drei","Hört mich jemand?","Vielleicht wurde das Telegramm verstümmelt und eine entscheidende Information ging bei der Übertragung verloren. Oder die Helden können einfach nicht um Hilfe rufen, wenn sie sie am dringendsten brauchen."],
   ["Vier","Planwagen, Ho!","Das Abenteuer erfordert, dass die Posse eine lange Strecke zurücklegt – etwa durch die Badlands oder gar von oder nach Oregon."],
   ["Fünf","Knappheit","Der Posse gehen unerwartet Treibstoff, Vorräte oder Munition aus. Neue Versorgung zu beschaffen wird zur Priorität."],
   ["Sechs","Nicht tödlich","Aus irgendeinem Grund dürfen die Abenteurer keine tödliche Gewalt einsetzen: Ein Kopfgeld muss lebend kassiert werden, sie sind in einer Stadt mit strengen Waffengesetzen usw."],
   ["Sieben","Fehlgeleitet","Ein Führer, Experte oder eine Information, auf die sich die Posse verlässt, erweist sich als völlig falsch."],
   ["Acht","Tick-Tack","Die Zeit ist der Feind der Helden. Innerhalb von 2W4 Tagen tritt ein Ereignis ein, das das Scheitern der gesamten Mission bedeutet, wenn sie dann nicht fertig sind."],
   ["Neun","Fehlfunktion","Ein wichtiges Ausrüstungsstück versagt, geht kaputt oder verschwindet gerade im schlimmstmöglichen Moment."],
   ["Zehn","Ausbruch","Eine bösartige Krankheit plagt die Region – und das Team. Jeden Tag müssen die Charaktere einen Konstitutionswurf machen oder erhalten eine Stufe Erschöpfung. Die Krankheit lässt sich behandeln, aber erst, wenn die Helden ihre Mission abgeschlossen haben."],
   ["Bube","Schockierende Enthüllung","Ereignisse fördern unerwartete Informationen zutage. Es kann etwas bloß Peinliches über einen der Cowpokes sein oder eine mächtige Person oder Organisation bedrohen."],
   ["Dame","Berühmtheit","Eine wichtige Persönlichkeit wird irgendwie in die Angelegenheiten der Helden verwickelt. Es kann ein Held oder ein Schurke sein, aber so oder so ist es eine riesige Ablenkung."],
   ["König","Verrat","Ein vertrauter Verbündeter der Cowpokes entpuppt sich als am Scheitern interessiert – wahrscheinlich im schlimmsten Moment."],
   ["Ass","Plötzlicher Tod","Ein unerwarteter Todesfall wirft Sand ins Getriebe. Hoffentlich war der Verstorbene nicht zu wichtig für die Pläne der Posse!"],
   ["Schwarzer Joker","Nichts als Ärger","Es regnet nie, es sei denn, es gießt. Ziehe zweimal."],
   ["Roter Joker","Schwarze Hüte","Es stellt sich heraus, dass die Gegner der Helden eigentlich die Guten sind. Was sie tun, sobald sie das erkennen, liegt bei ihnen …"]
  ])}}
 ]},
 {id:"beispiel", t:"Abenteuer erstellen", pg:101, b:[
  {p:"Gehen wir ein kurzes Beispiel für das Erstellen eines Abenteuers durch, damit du siehst, wie es geht, Marshal."},
  {box:{t:"Beispiel", b:[
   "Zuerst ziehen wir eine Karte für das Ziel: eine Herz-Sieben. Das bedeutet, die Posse muss jemanden retten, aber auch, dass die verantwortlichen Schurken mit den Handicaps oder früheren Taten der Helden zusammenhängen. Sagen wir, der Hauptfeind eines deiner Cowpokes ist der verantwortliche Schuft.",
   "Als Nächstes ziehen wir für ein Hindernis – eine Karo-Vier. Das bedeutet, die Posse hat es mit Papierkrieg zu tun; vielleicht sollen sie ohne Erlaubnis in Sioux-Land vordringen. Dank der Farbe sind diese Lande wahrscheinlich von Hunger geplagt.",
   "Für die Komplikation ziehen wir eine Kreuz-Sechs. Das bedeutet, die Pistoleros dürfen nicht herumziehen und Leute töten – das könnte den Vertrag der Vereinigten Staaten mit den Sioux gefährden –, und das ganze Unterfangen wird schwerer als üblich.",
   "Also entführt der alte Rivale „Rabid“ Rance Hitchcock den Sohn des Bürgermeisters, um Lösegeld zu kassieren. Er flieht mit seiner Geisel in die Sioux Nations, was bedeutet, dass die Posse behutsam vorgehen, Gewalt vermeiden und dem Hunger trotzen muss, um den Job zu erledigen."
  ]}}
 ]},
 {id:"pruefen", t:"Begegnungen", pg:97, b:[
  {p:"In diesem Abschnitt geben wir dem Marshal eine schnelle Möglichkeit, die Gefahren der wilden Gegenden zwischen den Städten auszuspielen. Mach dir keine Gedanken um Begegnungswürfe, wenn sich die Gruppe in einer Siedlung aufhält. In der Stadt lenken die Spieler meist das Geschehen, der Ort bestimmt weitgehend die Bewohner, und die Helden sind in die Ein und Aus der jeweiligen Savage Tale des Marshals verwickelt."},
  {cards:[
   {n:"Begegnungen prüfen", s:"Eine Karte pro Tag.", pg:97, b:["In einem gefährlichen oder gesetzlosen Gebiet ziehst du einmal pro vergangenem Tag im Spiel eine Karte aus dem Aktionskartenspiel (oder in besonders gefährlichen Gebieten zwei- oder dreimal am Tag). Eine Bildkarte oder höher bedeutet, dass eine Begegnung stattfindet, und die Farbe der Karte bestimmt die Art: Feinde, Fremde, Schatz oder ein Hindernis. Bei einem Joker ziehe zwei weitere Karten und kombiniere die Farbergebnisse – etwa Feinde und ein Hindernis oder Fremde und Schatz.","Nutze die Tabelle Begegnungsort unten, um festzulegen, wo und wann das Ereignis stattfindet. Mach dann eine kurze Pause für Snacks und Gespräche, während du alles planst. Ein wenig Planung ist unerlässlich, bevor du die Helden mit einem schrecklichen Biest oder einer Outlaw-Bande konfrontierst. Sie kann eine gewöhnliche „Zufallsbegegnung“ in etwas weit Aufregenderes und Denkwürdigeres verwandeln."]},
   {n:"Schwierigkeit", s:"Keine automatische Anpassung.", pg:97, b:["Deadlands-Begegnungen sind so gestaltet, dass sie die natürliche – oder in manchen Fällen unnatürliche – Organisation der aufgeführten Charaktere oder Kreaturen widerspiegeln. Deine Gruppe sei also gewarnt: Das hier ist nicht wie bestimmte andere Spiele, die den Schwierigkeitsgrad automatisch auf etwas setzen, mit dem sie fertigwird. Manchmal muss man einer grauenhaften Abscheulichkeit schlicht aus dem Weg gehen, oder es sind clevere Taktiken oder angeheuerte Revolverhelden nötig, um sie zu besiegen.","Wir tun das, weil es natürlicher ist und mehr Herausforderung bietet. Außerdem hätte jedes System, das wir schaffen, Mühe, zur Natur deiner Posse zu passen. Wenn ein Großwildjäger eine Truppe Expertenschützen zu seiner Rückendeckung anheuert, ergibt es keinen Sinn, dass plötzlich jede Klapperschlange vier Kumpel dabeihat. Das bedeutet, wie im echten Leben ist es sicherer, die Welt mit einer größeren Gruppe zu erkunden."]}
  ], c:2},
  {table:{cap:"Begegnungsort", cols:["W20","Ort"], rows:[["1–11","Auf dem Trail."],["12–15","In oder nahe einer Stadt, einem Dorf oder einer Großstadt."],["16–18","Während die Posse hält, um die Pferde zu tränken oder die örtlichen Büsche zu bewässern."],["19–20","Sobald das Lager aufgeschlagen ist. Würfle W8, um zu sehen, wie viele Stunden nach dem Lageraufbau die Begegnung stattfindet."]]}}
 ]},
 {id:"regionen", t:"Regionale Begegnungstabellen", pg:98, b:[
  {p:"Würfle bei einer Begegnung auf der Tabelle der jeweiligen Region in der Spalte, die zur Kartenfarbe passt."},
  reg("Bleeding Kansas", H, [
   ["1–4","2W4 Walkin’ Dead","2W12 US-Kavallerie","Geld","Geisterstadt"],
   ["5–8","1W6+1 Ghouls","Badman","Unterkunft","Epidemie"],
   ["9–10","’Glom","2W4 Büffeljäger","Nahrung","Gute Samariter"],
   ["11","Jackalope","Viehtrieb","Infernalische Geräte","Knifegrass"],
   ["12","Mourning Mist","Posse","Ghost Rock","Umweg"],
   ["13","Ghost","Fremder","Verlorener Schatz","Verseuchtes Wasser"],
   ["14–15","Bloodwire","Agent","Dynamit","Dynamit"],
   ["16–20","2W6 Prairie Ticks","2W6 Rail Warriors","Fahrzeug","Schlachtfeld"]]),
  reg("Great Basin", H, [
   ["1–4","2W10 Razor Roaches","2W6 Cowboys","Nahrung","Dürre"],
   ["5–7","2W8 Kojoten","2W12 US-Kavallerie","Ghost Rock","Verseuchtes Wasser"],
   ["8–12","2W6 Outlaws (Gunman verwenden)","2W6 Indianerkrieger","Unterkunft","Hitze"],
   ["13–14","1W4 Klapperschlangen","2W6 Prospektoren","Dynamit","Dynamit"],
   ["15","Skorpion","Indianischer Shaman","Verlassene Mine","Verlassene Mine"],
   ["16","Rattler","Badman","Verlorener Schatz","Humbug"],
   ["17–19","1W6 Tumblebleeds","Wahrsager","Geld","Knifegrass"],
   ["20","1W4 Dust Devils","Fremder","Fahrzeug","Hitze"]]),
  reg("Great Maze – Land", H, [
   ["1–6","2W6 Outlaws (Gunman verwenden)","1W6 Kampfkünstler","Verlassene Mine","Verlassene Mine"],
   ["7–8","2W4 Guardian Angels","2W6 Rail Warriors","Infernalische Geräte","Geisterstadt"],
   ["9–12","1W6 Wall Crawlers","2W4 US-Kavallerie","Ghost Rock","Dürre"],
   ["13–18","1W4 Dusters","1W4 Prospektoren","Fahrzeug","Gute Samariter"],
   ["19","Gaki","Chi-Meister","Verlorener Schatz","Epidemie"],
   ["20","1W6 Faminites","Territorial Ranger","Unterkunft","Verseuchtes Wasser"]]),
  reg("Great Maze – See", H, [
   ["1–4","2W6 Mudsuckers","1W6 Kampfkünstler","Nahrung","Sturm"],
   ["5–7","Maze Dragon","2W6 Rail Warriors","Dynamit","Hitze"],
   ["8","River Leviathan","1W4 Prospektoren","Ghost Rock","Gute Samariter"],
   ["9","Nibbler Swarm","Kampfkünstler, überlegen","Fahrzeug","Schlachtfeld"],
   ["10–16","1W8 Haie","1W8 Stadtbewohner","Verlorener Schatz","Umweg"],
   ["17–20","Schiff","Schiff","Verlassene Mine","Verlassene Mine"]]),
  reg("Great Northwest", H, [
   ["1–2","Catamount","2W6 Stadtbewohner","Verlorener Schatz","Blizzard"],
   ["3–4","Chinook","Fremder","Nahrung","Verseuchtes Wasser"],
   ["5","Badman","Prospektor","Infernalische Geräte","Geisterstadt"],
   ["6","Wendigo","1W6 Rail Warriors","Geld","Epidemie"],
   ["7–8","1W6 Wolflings","2W4 Trapper","Ghost Rock","Umweg"],
   ["9–14","2W6 Outlaws (Gunman verwenden)","2W20 Siedler","Unterkunft","Gute Samariter"],
   ["15","Werewolf","Territorial Ranger","Verlassene Mine","Verlassene Mine"],
   ["16–20","Sasquatch","2W6 Indianerkrieger","Fahrzeug","Blizzard"]]),
  reg("Great Plains", H, [
   ["1–2","Rattler","1W6 Prospektoren","Verlorener Schatz","Epidemie"],
   ["3–6","1W8 Devil Bats","2W12 US-Kavallerie","Nahrung","Sturm"],
   ["7–8","1W4 Dread Wolves","2W8 Rail Warriors","Fahrzeug","Verseuchtes Wasser"],
   ["9–10","Bloodwire","2W6 Indianerkrieger","Geld","Geisterstadt"],
   ["11–12","2W4 Outlaws (Gunman verwenden)","2W8 Stadtbewohner","Ghost Rock","Knifegrass"],
   ["13–16","1W8 Pit Wasps","2W4 Büffeljäger","Unterkunft","Hitze"],
   ["17–19","2W8 Prairie Ticks","Indianischer Shaman","Verlassene Mine","Verlassene Mine"],
   ["20","2W6 Rattler Young ’Uns","Badman","Infernalische Geräte","Gute Samariter"]]),
  reg("Deseret", H12, [
   ["1–6","1W4 Wall Crawlers","1W4 Prospektoren","Dynamit","Dynamit"],
   ["7","Walkin’ Fossil","2W10 Deseret-Soldaten","Infernalische Geräte","Infernalische Geräte"],
   ["8","Catamount","Agent","Ghost Rock","Ghost Rock"],
   ["9","Rattler","Metal Mage","Nahrung","Umweg"],
   ["10–12","Automatons (1W4)","Mad Scientist","Fahrzeug","Epidemie"]]),
  reg("Sioux Nations", H12, [
   ["1–6","1W4 Devil Bats","2W12 Indianerkrieger","Unterkunft","Sturm"],
   ["7","Pox Walker","Prospektor","Verlorener Schatz","Epidemie"],
   ["8","Uktena","Fremder","Verlassene Mine","Blizzard"],
   ["9","Poison Woman","Badman","Fahrzeug","Geisterstadt"],
   ["10–12","2W6 Walkin’ Dead","2W8 Indianerkrieger (Veteranen)","Nahrung","Knifegrass"]]),
  reg("Coyote Confederation", H12, [
   ["1–6","2W6 Prairie Ticks","2W12 Indianerkrieger","Unterkunft","Sturm"],
   ["7","Pox Walker","Prospektor","Verlorener Schatz","Epidemie"],
   ["8","Skinwalker","Fremder","Verlassene Mine","Verseuchtes Wasser"],
   ["9","Uktena","Badman","Fahrzeug","Knifegrass"],
   ["10–12","Texas Skeeter Swarm","2W8 Indianerkrieger (Veteranen)","Nahrung","Dürre"]]),
  reg("Wild Southwest", H, [
   ["1–4","Bloodwire","2W6 Indianerkrieger","Unterkunft","Hitze"],
   ["5–6","Carcajou","2W12 US-Kavallerie","Nahrung","Verseuchtes Wasser"],
   ["7","Chupacabra","Fremder","Infernalische Geräte","Epidemie"],
   ["8–10","Desert Thing","2W8 Outlaws (Gunman verwenden)","Geld","Geisterstadt"],
   ["11–12","2W6 Prairie Ticks","2W4 Veteranen-Outlaws (Gunman verwenden)","Ghost Rock","Umweg"],
   ["13","Rattler","Hexslinger","Verlorener Schatz","Infernalische Geräte"],
   ["14–17","Große Tarantel","Badman","Verlassene Mine","Verlassene Mine"],
   ["18–20","1W6 Tumblebleeds","Territorial Ranger","Fahrzeug","Dürre"]])
 ]},
 {id:"ergebnisse", t:"Begegnungsergebnisse", pg:101, b:[
  {p:"Wird eine Begegnung angezeigt, würfle auf der passenden regionalen Begegnungstabelle (auf den vorigen Seiten) in der Spalte, die zur Kartenfarbe passt. Hier haben wir die Ergebnisse in einer praktischen Liste zusammengestellt. Monster- oder Charakterergebnisse, die hier nicht aufgeführt sind, finden sich im Abschnitt Gesindel, Viehzeug & Kreaturen ab S. 145."},
  {cards:[
   {n:"Verlassene Mine", b:["Ob Silber, Gold oder Ghost Rock: Alle Bergleute sind fort. Sie sind vielleicht gegangen, weil die Ader erschöpft war, oder was immer jetzt in der Mine lebt, hat sie vertrieben – oder gefressen! Wird sie als Schatz aufgeführt, enthält die Mine auch beträchtliche Reichtümer (nach Ermessen des Marshals)."]},
   {n:"Badman", b:["Die Posse trifft einen ruppigen, aber fähigen Cowpoke (Archetyp nach Wahl des Marshals), der vom Pech verfolgt ist. Freundet sich jemand mit ihm oder ihr an, spielt er oder sie mit, bis sich die Gelegenheit bietet, die Posse auszurauben, zu töten oder anderweitig zu verraten."]},
   {n:"Schlachtfeld", b:["Die verwüsteten, heimgesuchten Überreste eines Konflikts aus dem Bürgerkrieg oder den Great Rail Wars (siehe S. 108) oder ein laufendes Scharmützel zwischen zwei rivalisierenden Fraktionen."]},
   {n:"Blizzard", b:["Wer in einen Blizzard gerät, muss jede Stunde einen Erschöpfungswurf (–2) machen, bis er Unterkunft findet (Überleben mit –4, ein Wurf pro Gruppe). Ein Kritischer Fehlschlag bedeutet, dass der umherirrende Charakter in eine Spalte oder Schlucht stürzt (2W12\" tief). Blizzards verursachen –4 auf Agilitäts-basierte Fertigkeiten wie Fahren, Pilot, Reiten und Schießen. Ein typischer Blizzard dauert 1W20+5 Stunden."]},
   {n:"Büffeljäger", b:["Nutze die Werte der Stadtbewohner (S. 151), aber mit Schießen W8."]},
   {n:"Viehtrieb", b:["Eine Gruppe von 2W6+4 angeheuerten Cowboys unter einem Veteranen-Cowboy als Vormann, alle beritten, treibt eine Herde von 200–400 Rindern zum Markt. Sie werden von einem Koch (Stadtbewohner-Profil) und seinem Wagen begleitet."]},
   {n:"Geld", b:["Eine Satteltasche, ein Jutesack oder ein Eisenbahn-Expressbeutel mit 1W10 × 50 $ in einheimischer oder fremder Währung. Natürlich gehört das Geld jemandem, und der will es wiederhaben."]},
   {n:"Umweg", b:["Eine Brücke ist eingestürzt, ein plötzlicher Wolkenbruch spült die Straße weg, ein Erdrutsch blockiert den Weg oder Wasserlauf. Die Posse braucht 1W4 Tage, um einen Weg darum herum zu finden."]},
   {n:"Dürre", b:["Die Einheimischen bekommen bei Weitem nicht genug Wasser. Sofern die Posse nicht eigenes mitgebracht hat, siehe Durst im Savage-Worlds-Regelwerk."]},
   {n:"Dynamit", b:["Eine Baustelle, Mine oder ein Gleisbautrupp hat eine Kiste TNT zurückgelassen. Sie enthält 3W6+1 Stangen. Wird sie als Hindernis aufgeführt, ist das Dynamit alt und schwitzt bereits reines Nitro (siehe S. 32 für Beschränkungen beim Umgang mit diesem flüchtigen Zeug)."]},
   {n:"Epidemie", b:["Der Aufenthaltsort der Helden oder die Stadt hinter dem nächsten Hügel wird von einer Krankheit heimgesucht. Behandle sie als Schwächende Krankheit (siehe Savage-Worlds-Regelwerk). Medizin ist verfügbar, aber nicht vor Ort."]},
   {n:"Nahrung", b:["Ob reichlich Wild oder Fisch, ein bequemer Apfelhain, ein vom Wagen gefallenes Whiskeyfass oder gute Samariter, die ihr Essen teilen: Die Posse muss heute keinen Überleben-Wurf machen, um sich satt zu essen."]},
   {n:"Wahrsager", b:["Der Wahrsager kann Romani sein, ein Huckster, der Karten austeilt, oder ein Shaman, der die Posse von einem hohen Felsen aus seltsam anstarrt. Sie bittet die Gruppe im Austausch für eine Lesung um einen Gefallen. Ob wahr oder falsch: Die Lesung führt zu einem Abenteuer."]},
   {n:"Ghost Rock", b:["Würfle W6: Bei 1–4 ist es ein Fass (Hogshead) mit 1W6 Pfund unraffinierten Nuggets; bei 5–6 sind es 1W4 geformte Brennstoffkerne. Wer es verloren hat, hält vielleicht danach Ausschau."]},
   {n:"Geisterstadt", b:["Alles vom ausgetrockneten Brunnen über eine verfallene Handelsstation bis zu einer verlassenen Siedlung, einem Fort oder einer Boomtown. „Geist“ kann bloß bedeuten, dass der Ort leer ist, oder dass gruselige Abscheulichkeiten dort Einzug gehalten haben."]},
   {n:"Gute Samariter", b:["Die Posse findet eine Siedlerfamilie oder eine andere relativ wehrlose Gruppe, umringt von Feinden, Banditen oder übernatürlichen Kreaturen. Die Verteidiger können in einer Wagenburg sein, in einer belagerten Heimstatt oder in einem angegriffenen Indianerdorf."]},
   {n:"Hitze", b:["Die Temperatur schnellt für 1W6+1 Tage über 90 Grad (Fahrenheit). Siehe Hitze und Durst im Savage-Worlds-Regelwerk."]},
   {n:"Infernalische Geräte", b:["Eine verlorene, aufgegebene oder fehlgeleitete Lieferkiste von Hellstromme Industries Ltd., Smith & Robards oder einem anderen Hersteller. Sie enthält 1W4 gewählte oder zufällige infernalische Geräte. Als Hindernis sind die Gizmos irgendwie gefährlich, oder ihr rechtmäßiger Besitzer sucht sie."]},
   {n:"Verlorener Schatz", b:["Ein modriges Skelett, das eine zerfledderte Karte, einen Brief oder ein Telegramm zu einem Schatz versteckt – und zu Gefahr. Die Beute kann wertvoll oder Katzengold sein. In jedem Fall bleibt die Gefahr."]},
   {n:"Metal Mage", b:["Siehe Deadlands-Companion oder ersetze durch einen Mad Scientist."]},
   {n:"Posse", b:["Ein Veteranen-Gunman-Marshal mit 1W6 Deputys (je zur Hälfte Gunmen und Stadtbewohner), alle beritten. Sie bitten vielleicht um Hilfe beim Fangen einer Bande Desperados oder halten die Helden für die Gesuchten!"]},
   {n:"Prospektoren", b:["Nutze die Werte der Stadtbewohner (S. 151) mit der Fertigkeit Handel (Bergbau)."]},
   {n:"Rail Warriors", b:["Wähle eine zum Gebiet passende Eisenbahngesellschaft oder würfle W10 (siehe Tabelle unten)."]},
   {n:"Klapperschlangen", b:["Siehe Schlange, giftig im Savage-Worlds-Regelwerk."]},
   {n:"Siedler", b:["Diese Leute reisen im Conestoga-Wagen zu ihrem neuen Zuhause. Nutze die Werte der Stadtbewohner (S. 151)."]},
   {n:"Haie", b:["Siehe Savage-Worlds-Regelwerk."]},
   {n:"Unterkunft", b:["Warme Unterkunft ist ihr eigener Lohn. Die Posse stößt auf eine Höhle, einen Unterstand oder einen fertigen Lagerplatz, passend zur Region und sicher vor den Elementen."]},
   {n:"Schiff", b:["Würfle auf der Tabelle unten, um die Herkunft eines Schiffs zu bestimmen. Bei einem Rail-Baron-Ergebnis würfle auf der Rail-Warriors-Tabelle, um zu bestimmen, welcher Eisenbahngesellschaft es dient."]},
   {n:"Quacksalber", b:["Ein Händler in einem bunt bemalten Wagen, der Elixiere anpreist, die vielleicht magische Eigenschaften haben. Wenn ja, siehe S. 34. Oder erfinde ein Elixier – auf Grundlage einer einzigen Macht –, das dem Trinker ihre Wirkung verleiht. Der Rest der Ware des Schwindlers ist Rizinusöl, Terpentin und dergleichen. Der Verkäufer kann auch eine verdrehte Seele sein, die weit finsterere Tränke verkauft."]},
   {n:"Sturm", b:["Ein Gewitter reduziert die Sicht auf 12\", verhängt einen Malus für Dunkle Beleuchtung (–4) und verwandelt den Boden in einen Morast. Rennende Charaktere müssen einen Agilitätswurf machen oder stürzen und werden Verwundbar. Die meisten Agilitäts-Fertigkeiten erhalten –2, darunter Fahren, Pilot, Reiten und Schießen (wegen glitschigen Bodens, schlechter Sicht und starken Winds). Ist die Aktionskarte eines Charakters ein Schwarzer Joker, wird das Pferd oder Fahrzeug dieses Cowpokes vom Blitz getroffen: 2W10 Schaden (DB 10)."]},
   {n:"Fremder", b:["In dieselbe Richtung reitet ein zäher, aber freundlicher Kerl (Archetyp nach Wahl des Marshals), der vom Pech verfolgt ist. Freundet sich jemand mit dem Fremden an, wird er zu einem treuen Freund der Posse."]},
   {n:"Verseuchtes Wasser", b:["Reisende entdecken ein Wasserloch, dessen Inhalt jedoch mit dem Texas-Bauchzwicker verseucht ist (siehe S. 187)."]},
   {n:"Trapper", b:["Grimmige Bergmänner auf der Suche nach Pelzen. Nutze die Werte der Stadtbewohner (S. 151)."]},
   {n:"US-Kavallerie", b:["Eine Patrouille Soldaten (davon einer Veteran) unter einem Offizier, alle beritten."]},
   {n:"Fahrzeug", b:["Ein liegengebliebenes Fortbewegungsmittel, vom Marshal bestimmt und passend zur Region. Würfle W6: Bei 1–5 ist das Fahrzeug gewöhnlich; bei 6 ist es ein dampfbetriebenes infernalisches Gerät. In jedem Fall braucht es einen erfolgreichen Reparieren- oder Verrückte-Wissenschaft-Wurf und 2W6 Stunden Arbeit, bevor es wieder funktioniert. (Ein gewöhnlicher Wagen oder eine Postkutsche braucht auch Pferde; ein Gizmo braucht Ghost Rock als Treibstoff.)"]}
  ], c:3},
  {table:{cap:"Rail Warriors (W10)", cols:["W10","Rail Warriors"], rows:[["1","Iron Dragon"],["2–4","Wasatch"],["5","Empire Rail"],["6–7","Black River"],["8","Lone Star"],["9–10","Bayou Vermilion"]]}},
  {table:{cap:"Schiffstyp (W12)", cols:["W12","Schiffstyp"], rows:[["1","US-Panzerschiff"],["2–3","US-Kaperschiff"],["4–5","Pirat"],["6–9","Zivil- oder Fischerboot"],["10–11","Rail Baron"],["12","Mexikanische Armada"]]}}
 ]}
]};
})();
