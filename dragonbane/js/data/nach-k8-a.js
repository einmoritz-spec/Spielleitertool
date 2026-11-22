/* Kapitel 8 – Abenteuer, Teil A: Einleitung, Reisen (S. 100–103). Weitere Teile: nach-k8-b (SL, NSC), -c (Abenteuer erschaffen), -d (Kampagnen). */
window.DB_NACH = window.DB_NACH || {};
DB_NACH.ab = {id:"ab", n:"8", t:"Abenteuer", p:100, abs:[
 {id:"reisen", t:"Reisen", p:101, b:[
  "In den vorangegangenen Kapiteln ging es um Spielercharaktere und ihre Fähigkeiten, um Kampf und Magie, Ausrüstung und Monster. Nun ist es Zeit, all diese Bausteine zusammenzufügen und zu erklären, wie sie gemeinsam ein spannendes Abenteuer ergeben!",
  "Dieses Kapitel enthält Regeln und Werkzeuge für Reisen, für den Umgang mit Nichtspielercharakteren und für das Erschaffen eigener Abenteuer. Am Ende des Kapitels findest du ein vollständiges Einführungsabenteuer – *Die Burg des Raubritters*. Das Kapitel ist vor allem für die SL geschrieben, also für dich, wenn hier „du“ steht.",
  "Als Abenteurer in der Welt von *Dragonbane* müssen die Spielercharaktere oft durch dunkle Wälder, zerklüftetes Moor und hohe Berge ziehen. Eine Reise kann weit mehr sein als nur ein Weg von A nach B – sie kann ein kleines Abenteuer für sich sein. Wer weiß, was hinter der nächsten Biegung lauert?",
  "**Reisen:** Reisen verlaufen in Tagesabschnitten. Wie in Kapitel 1 erwähnt, hat ein Tag vier Tagesabschnitte: Morgen, Tag, Abend und Nacht. In der Regel können die Spielercharaktere zu Fuß etwa 15 Kilometer pro Tagesabschnitt zurücklegen, zu Pferd etwa 30 Kilometer. Schwieriges Gelände kann sie verlangsamen. Die Spielercharaktere können normalerweise höchstens zwei Tagesabschnitte pro Tag gehen oder reiten, einschließlich einiger kurzer Pausen. Legen sie unterwegs eine lange Rast ein, verringert sich die zurückgelegte Strecke. Mit gezogenen Waffen können sie nicht marschieren.",
  "**Gewaltmarsch:** Ein Spielercharakter kann im selben Tag einen dritten Tagesabschnitt gehen oder reiten, wird dadurch aber Erschöpft. Ein bereits Erschöpfter Charakter kann keinen dritten Tagesabschnitt reisen, und niemand kann je mehr als drei Tagesabschnitte an einem Tag reisen.",
  {h:"Pfadfinder"},
  "Spielercharaktere, die einer Straße oder einem klaren Pfad folgen, laufen nicht Gefahr, sich zu verirren, doch solche Annehmlichkeiten gibt es selten. In der Wildnis ist die Orientierung schwieriger, und allerlei Missgeschicke können passieren.",
  "Bei der Reise durch weglosses Gelände müssen die Spielercharaktere einen *Pfadfinder* bestimmen, der die Gruppe führt. Diese Person muss in jedem Tagesabschnitt einen Wurf auf §Wildniskunde§ ablegen, um den Weg zu finden. Hat der Pfadfinder keine Karte, erhält der Wurf einen Nachteil. Ein Fernglas gibt einen Vorteil. Misslingt der Wurf, erleidet die Gruppe ein Missgeschick – würfle auf der Tabelle unten. Du kannst das Missgeschick der Gegend anpassen.",
  "**Einen Drachen würfeln:** Ein Pfadfinder, der einen Drachen würfelt, findet eine Abkürzung – die in diesem Tagesabschnitt zurückgelegte Strecke wird verdoppelt.",
  "**Schwieriges Gelände:** Ist das Gelände besonders schwierig, kannst du dem Wurf auf §Wildniskunde§ einen Nachteil geben.",
  {karte:{h:"Reisekarten", p:101, b:["Die meisten offiziellen Abenteuer für Dragonbane enthalten eine Karte der Gegend, in der das Abenteuer spielt. Mit ihr kannst du bestimmen, wie weit die Spielercharaktere reisen müssen, und ihren Fortschritt festhalten. Die Karten sind nicht exakt, daher musst du manchmal nach Ermessen entscheiden."]}},
  {karte:{h:"Lange Reisen", p:101, b:["Die Reiseregeln sind für kurze Märsche innerhalb eines begrenzten Gebiets gedacht. Brechen die Spielercharaktere zu einer langen Reise in einen anderen Teil der Welt auf, muss sie nicht im Einzelnen ausgespielt werden – die SL kann die Geschichte schneiden und bei ihrer Ankunft am Ziel wieder einsetzen."]}}
 ]},
 {id:"missgeschicke", t:"Missgeschicke & Begegnungen", p:102, b:[
  {h:"Missgeschicke", p:102},
  {tbl:{id:"mg", head:["W12","Missgeschick"], rows:[
   ["1","**Nebel.** Die Spielercharaktere werden von dichtem Nebel überrascht. Die in diesem Tagesabschnitt zurückgelegte Strecke halbiert sich."],
   ["2","**Versperrtes Gelände.** Der Weg voraus ist durch Felsen, umgestürzte Bäume, dichtes Gestrüpp oder Hochwasser versperrt. Jeder Spielercharakter muss einen Wurf auf §Akrobatik§ ablegen, um weiterzukommen. Wer Erfolg hat, kann den anderen helfen. Ein Spielercharakter, dem der Wurf misslingt, kommt in diesem Tagesabschnitt nicht voran."],
   ["3","**Zerrissene Kleidung.** Der Pfadfinder führt die Gruppe in ein Dornendickicht, eine felsige Schlucht oder einen sumpfigen Morast. Die Kleidung eines zufälligen Spielercharakters wird beschädigt und zählt nun als Lumpen."],
   ["4","**Verirrt.** Die Spielercharaktere merken, dass sie im Kreis laufen, und kommen in diesem Tagesabschnitt auf der Karte nicht voran. Der Pfadfinder muss außerdem einen Wurf auf §Wildniskunde§ ablegen, um den richtigen Weg wiederzufinden. Andere können nicht helfen."],
   ["5","**Verlorener Gegenstand.** Ein zufälliger Spielercharakter verliert oder zerbricht einen Gegenstand nach deiner Wahl."],
   ["6","**Mückenschwarm.** Ein großer Schwarm Mücken oder Gnitzen fällt über die Gruppe her und macht alle mit Stichen und Gesumm verrückt. Alle Spielercharaktere ohne Umhang werden Wütend."],
   ["7","**Verstauchter Knöchel.** Ein zufälliger Spielercharakter stürzt oder tritt fehl und erleidet W6 Schaden. Rüstung hat keine Wirkung, aber Stiefel verringern den Schaden um zwei."],
   ["8","**Wolkenbruch.** Ein gewaltiger Regenguss oder Schneesturm (je nach Jahreszeit) überrascht die Gruppe. Alle Spielercharaktere ohne Umhang müssen einen Wurf ablegen, um der Kälte standzuhalten (S. 54). Sie müssen außerdem Schutz suchen, bis der Sturm vorüber ist, und kommen in diesem Tagesabschnitt auf der Karte nicht voran."],
   ["9","**Wespen.** Der Pfadfinder tritt mitten in ein Wespennest. Ein Schwarm wütender Wespen greift die ganze Gruppe an. Alle Spielercharaktere müssen einen Wurf auf §Ausweichen§ ablegen, und wem er misslingt, erleidet W6 Schaden und einen Zustand nach Wahl."],
   ["10","**Erdrutsch.** Die Spielercharaktere gehen durch unwegsames Gelände, als der Boden plötzlich unter ihren Füßen nachgibt. Alle müssen einen Wurf auf §Ausweichen§ ablegen – wem er misslingt, erleidet W10 Schaden."],
   ["11","**Wildes Tier.** Ein Wolf, Bär oder anderes wildes Tier fühlt sich bedroht und greift die Abenteurer an. Wähle ein Tier aus der Tabelle auf S. 99."],
   ["12","**Treibsand.** Der Boden bricht ein! Jeder Spielercharakter muss einen Wurf auf §Wildniskunde§ ablegen. Wem er misslingt, erleidet einen Zustand und muss erneut würfeln. Ein Charakter, der bereits alle Zustände hat und dem der Wurf misslingt, wird vom Treibsand verschlungen und verschwindet für immer. Wer frei ist, kann den Festsitzenden helfen."]
  ]}},
  {h:"Zufallsbegegnungen"},
  "Auf einer Reise können die Spielercharaktere den seltsamsten Geschöpfen von nah und fern begegnen. Einmal pro Tagesabschnitt oder wann immer du es für angebracht hältst, kannst du auf einer Tabelle für Zufallsbegegnungen würfeln. Zufallsbegegnungen können je nach Gegend unterschiedlich ausfallen, weshalb sie in der Regel im Abenteuer enthalten sind. Du kannst auch eine passende Begegnung wählen, statt zufällig zu würfeln, oder dir selbst eine ausdenken.",
  "Manche Zufallsbegegnungen können sogar nachts und im Lager auftreten."
 ]},
 {id:"lager", t:"Lager, Nahrung & Kälte", p:103, b:[
  {h:"Lager aufschlagen", p:103},
  "Die Spielercharaktere müssen mindestens einen Tagesabschnitt pro Tag schlafen, um Schlafentzug (S. 54) zu vermeiden. In der Wildnis muss jeder Spielercharakter einen Wurf auf §Wildniskunde§ ablegen, um einen geeigneten Rastplatz zu finden. Wer kein Schlaffell hat, erhält einen Nachteil auf den Wurf. Misslingt er, zählt der Tagesabschnitt nicht als Schlaf und kann auch nicht als Lange Rast (S. 52) genutzt werden.",
  "**Zelt:** Ein Zelt gibt beim Lageraufschlagen einen Vorteil, und bei einem gelungenen Wurf können mehrere Personen im Zelt schlafen, ohne eigene Würfe auf §Wildniskunde§ abzulegen. Ein kleines Zelt bietet Platz für zwei Personen, ein großes für sechs. Misslingt es der Person, die das Zelt aufbaut, können andere Spielercharaktere im selben Tagesabschnitt einzeln würfeln.",
  "**Wache halten:** Da Zufallsbegegnungen jederzeit auftreten können, kann es klug sein, dass die Spielercharaktere in verschiedenen Tagesabschnitten schlafen, damit immer jemand wach ist und Wache hält.",
  "**Gefährliche Orte:** An bestimmten Orten, etwa in einem Verlies voller Feinde, können die Spielercharaktere kein Lager aufschlagen und keine Lange Rast einlegen. Sie müssen zuerst das Gebiet verlassen und einen sichereren Platz finden.",
  {h:"Kälte", p:103},
  "Bei kaltem Wetter, besonders nachts, müssen die Spielercharaktere einen Wurf auf §Wildniskunde§ ablegen, um der Kälte standzuhalten (S. 54). Mit einer Decke vermeidet man einen Nachteil, ein Fell gibt einen Vorteil auf den Wurf.",
  {h:"Nahrung in der Wildnis", p:103},
  "In der Wildnis kann ein Spielercharakter einen Tagesabschnitt damit verbringen, zu jagen, zu fischen oder essbare Pflanzen zu sammeln. Der Charakter kommt in einem solchen Tagesabschnitt auf der Karte nicht voran.",
  "**Jagen:** Zum Jagen braucht man eine Fernkampfwaffe oder eine Jagdfalle. Zuerst legt der Jäger einen Wurf auf §Jagen & Fischen§ ab, um ein Tier aufzuspüren. Gelingt er, wird auf der Tabelle unten gewürfelt, welches Tier es ist. Es zu erlegen erfordert einen zweiten Wurf, diesmal für die Waffe des Jägers oder bei einer Falle wieder auf §Jagen & Fischen§. Beachte, dass manche Tiere nicht mit einer Falle gefangen werden können. Die Tabelle zeigt, wie viele Rationen Nahrung das Tier liefert.",
  {tbl:{id:"jagd", head:["W6","Tier","Voraussetzung","Rationen"], rows:[
   ["1","Eichhörnchen","Waffe oder Falle","1"],["2","Krähe","Waffe","1"],["3","Kaninchen","Waffe oder Falle","W3"],["4","Fuchs","Waffe oder Falle","W4"],["5","Wildschwein*","Waffe","2W6"],["6","Hirsch","Waffe","2W8"]]}},
  "* Wildschweine greifen an, wenn der Wurf aufs Jagen misslingt.",
  "**Fischen:** Zum Fischen braucht man eine Angelausrüstung; es wird mit einem Wurf auf §Jagen & Fischen§ abgehandelt. Gelingt er, fängt der Fischer mit einer Angelrute W4 Rationen Nahrung oder mit einem Fischernetz W6 Rationen.",
  "**Sammeln:** Der Spielercharakter legt einen Wurf auf §Wildniskunde§ ab – mit einem Nachteil im Winter und einem Vorteil im Herbst. Bei einem Erfolg findet er essbare Pilze, Wurzeln und andere Pflanzen im Wert von W3 Rationen Nahrung.",
  "**Kochen:** Wer rohen Fisch oder rohes Fleisch isst, riskiert zu erkranken – würfle gegen Virulenz 10. Pflanzen können ohne Risiko roh gegessen werden, doch es braucht zwei Rationen roher Pflanzen, um den Tagesbedarf an Nahrung zu decken. Bis zu zehn Rationen Nahrung zu kochen dauert einen Tagesabschnitt und erfordert einen gelungenen Wurf auf §Wildniskunde§. Misslingt er, zählt die Nahrung als ungekocht. Eine Feldküche gibt einen Vorteil auf den Wurf. Dasselbe gilt für eine richtige Küche, in der man außerdem beliebig viel Nahrung zubereiten kann. Siehe das Heroische Talent Meisterkoch."
 ]}
]};
