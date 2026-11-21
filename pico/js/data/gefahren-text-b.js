/* Pico – Winzige Gefahren (Kap. 10), Teil B: Gestalten bis Miniatur-Söldner (deutsch) */
var PI_GTEXT = window.PI_GTEXT || {};
window.PI_GTEXT = PI_GTEXT;
(function(){
var TITAN_HINT = "*Titanen folgen besonderen Schadensregeln, und sie zu besiegen ist für die meisten Käferbanden ohne Planung und Weitsicht eine fast unmögliche Aufgabe.*";
var TITAN_PLAN = "Sich einem Titan frontal zu stellen ist ein Narrenwerk, ohne Plan sogar doppelt. Die Käfer könnten die Begegnung angehen, indem sie …";
var TITAN_ABW = "Immun gegen alles außer Gigaschaden und die unten genannten Schwächen – sollte man das wirklich tun?";
var TRUE_TITAN = "Als Titan hat er wirklich beeindruckende Abwehr: Aktionen mit Giga-Wucht oder solche, die eine seiner Schwächen treffen, markieren ein Herz. Alle anderen Aktionen können erzählerisch trotzdem etwas bewirken, markieren aber nicht die Titanenleiste. Jedes markierte Herz auf der Titanenleiste zählt außerdem als Bruch.";

var TRUE_TITAN = "Als Titan hat er wirklich beeindruckende Abwehr: Aktionen mit Giga-Wucht oder solche, die eine seiner Schwächen treffen, markieren ein Herz. Alle anderen Aktionen können erzählerisch trotzdem etwas bewirken, markieren aber nicht die Titanenleiste. Jedes markierte Herz auf der Titanenleiste zählt außerdem als Bruch.";

PI_GTEXT["gestalten"] = { schluessel:"Groß · Krabbelig · Schleimig · Elite · Schwarm", herzen:[["Gestalten","♥♥♥♥♥♥•♥♥"]], abschnitte:[
 {h:"Überblick", b:[
  "Kleine Kerle haben den Ruf, zusammenzuhalten, und die allerkleinsten halten auf die beeindruckendste Weise zusammen. Gestalten sind die Kleinsten der Kleinen im Großformat – Tausende oder gar Millionen Bakterien, die sich zu einem schleimigen Konstrukt nanobetriebener Zerstörung zusammenklammern."]},
 {h:"Anzeichen", b:[{t:"ul",x:[
  "Seltsame, klebrige Fußabdrücke in verschiedenen Größen.",
  "Schrille Schlachtrufe, so hoch, dass selbst Käfer Mühe haben, sie zu hören.",
  "Der Geruch nach Feuchtigkeit und Schimmel, der stärker wird."]}]},
 {h:"Verhalten", b:[{t:"ul",x:[
  "Sich zusammenballen und eine vielgliedrige Gestalt annehmen, um sich an denen zu rächen, die auf sie treten wollten.",
  "Sich zerstreuen und verstecken, wenn der Widerstand überwältigend ist."]}]},
 {h:"Teile & Züge", b:[{t:"dl",x:[
  ["Tausendhandschlag (Hauen 3)","Die gebündelte Wut unzähliger mikroskopischer Fäuste in einem einzigen, keulenartigen Schwung. Käfer, die von einem hammerartigen Hieb getroffen werden, können zusätzlich zum erlittenen Schaden gegriffen werden, und ein weiter Rückhandschwung kann mehrere Ziele auf einmal zurückstoßen."],
  ["Verschlingen (Schwimmen 5)","Die Gestalt kann einen gegriffenen Käfer verschlingen, ihn in ihren wabernden Bakterienkörper ziehen und dabei hohen Schaden verursachen. Verschlungene Ziele gelten als verschluckt und erleiden jedes Mal, wenn sie im Rampenlicht stehen und noch im brodelnden Körper der Gestalt stecken, 2 Markierungen automatischen Schwimmschaden. *Die Gestalt kann nur einen Käfer gleichzeitig verschlingen.*"],
  ["Komm in meine Arme (Erschrecken 2)","Ein schwerfälliger Ansturm, mit dem die Gestalt einen nahen Käfer automatisch verschlingt, wenn er bei der Reaktion ein Desaster würfelt (dieser Käfer erleidet dabei aber nicht den üblichen Schwimmschaden des Zugs „Verschlingen“)."],
  ["Anpassungsfähige Bewaffnung (Werkeln 3)","Wird die Gestalt mit einem Bröckchen, Krimskrams oder einer Waffe angegriffen, kann sie beim nächsten Mal, wenn sie im Rampenlicht steht, eine Bakterienkopie davon formen. Wird diese Kopie zum Angriff eingesetzt, verursacht sie 3 Markierungen entweder Werkelschaden oder den ursprünglichen Schadenstyp des kopierten Bröckchens, Krimskrams oder der Waffe."],
  ["Nanoadaptiv (–)","Die Fähigkeit, die Form spontan zu ändern, verleiht der Gestalt unberechenbare Abwehr. Steht sie im Rampenlicht, kann der Weber zusätzlich zu jedem anderen Zug einen W6 werfen und ihr nach folgender Tabelle einen Vorteil geben (dieser hält an, bis Nanoadaptiv das nächste Mal eingesetzt wird) …"]]},
  {t:"tbl",head:["W6","Vorteil"],rows:[["1","Ein Härte-Abzug von 1"],["2","Ein Panzer-Abzug von 2"],["3","Ein Tarn-Abzug von 2"],["4","Ein Tempo-Abzug von 2"],["5","Ein Komplex-Abzug von 2"],["6","Kein zusätzlicher Vorteil"]]}]},
 {h:"Abwehr", b:[{t:"ul",x:[
  "Resistent gegen Beißen und Schlitzen. Diese mikroskopischen Bestandteile weichen hervorragend aus!",
  "Immun gegen Hauen. Oder besser gesagt: Ein Hieb kann eine Gestalt zwar komplett auseinanderreißen … nur damit sie sich eine halbe Sekunde später vollständig neu formt.",
  "Schwach gegen Zähmen, Kümmern und Werkeln, aber nur, wenn es leckere, ablenkende Happen zum Verdauen gibt."]}]},
 {h:"Brüche", b:[{t:"ul",x:["Zerstreuen und verstecken! / Noch größer werden / Glühe, Baby, glühe"]}]},
 {h:"Zum Mitnehmen", b:[{t:"ul",x:["Bröckchen: Bakterienschlamm, Nachgeahmte Waffe"]}]}
]};

PI_GTEXT["raetselmeister"] = { schluessel:"Groß · Krabbelig · Elite", herzen:[["Große Rätselmeister","♥♥•♥♥•♥♥"]], abschnitte:[
 {h:"Überblick", b:[
  "Die meisten Käfer werden im Großen und Ganzen über ihre Körperlichkeit definiert: die Gestalt, die Teile, aus denen sie bestehen, die Biologie, die sie sprichwörtlich am Laufen hält. Für Rätselmeister zählt aber, was *im Inneren* steckt – genauer gesagt, was sich in den Hirnteilen eines Käfers abspielt.",
  "Abgesehen von ihrer Haltung haben Rätselmeister selten etwas miteinander gemein. Einer ist vielleicht ein Skorpion, der geduldig auf einer sengenden Düne wartet und den einzigen Schatten bewacht. Ein anderer ein Wasserläufer am Flussufer, bereit, eifrige Käfer wenigstens bis zur Hälfte zu bringen. Wieder ein anderer eine Gottesanbeterin, turmhoch, mit gespreizten Flügeln, vor sich ein grobes Gitter in den Dreck gezeichnet für ein Tic-Tac-Toe mit hohem Einsatz."]},
 {h:"Anzeichen", b:[{t:"ul",x:[
  "Die leeren Hüllen der Übermütigen.",
  "Gekritzel auf Notizpapier und der irgendwie anhaltende Geruch eines Prüfungssaals."]}]},
 {h:"Verhalten", b:[{t:"ul",x:[
  "Käfern die Gelegenheit bieten, ihr Hirn für einen Gewinn anzustrengen – auf die Gefahr von Schmerz oder Verachtung hin.",
  "Getroffene Vereinbarungen einhalten … größtenteils."]}]},
 {h:"Teile & Züge", b:[{t:"dl",x:[
  ["Eine Aufgabe stellen (–)","Nachdem er der Bande *teilweise* geholfen hat, verweigert ein Rätselmeister weitere Hilfe, bis sie eine geistige Herausforderung gelöst hat. Das kann ein Geschicklichkeitsspiel sein, eine Folge logischer Fragen oder die Gelegenheit, wie zu erwarten, ein Rätsel zu lösen. Gelingt das nicht innerhalb einer Frist (dargestellt durch eine vom Weber festgelegte Fortschrittsleiste), werden die Hilfsangebote zurückgezogen oder es droht sogar Gewalt."],
  ["Den Druck erhöhen (Denken/Erschrecken/Kartieren 1–3)","Nur weil es Regeln gibt, muss man nicht fair spielen. Rätselmeister sind Experten darin, Käfer einzuschüchtern oder in die Irre zu führen, wenn sie sich auf die gestellte Aufgabe einlassen, und verursachen der ganzen Bande unvermeidbaren Schaden, während die Fortschrittsleiste markiert wird."],
  ["Zweifel säen (Quasseln W6)","Sobald ein bedeutender Zug gemacht oder eine wichtige Antwort gegeben wurde, gibt der Rätselmeister dem beteiligten Käfer oft die „Chance“, „bessere“ Entscheidungen zu treffen. Selbst freundlich vorgetragen ist das immer eine Methode, einen nervösen Käfer an sich selbst zweifeln zu lassen."],
  ["Die geistige Muskelkraft (–)","Alle Versuche der Käfer, einen Rätselmeister zu verwirren oder zu verblüffen (oder den Spieß mit eigenen Fragen umzudrehen), stoßen auf einen Komplex-Abzug von 2."]]}]},
 {h:"Abwehr", b:[{t:"ul",x:[
  "Resistent gegen Quasseln, Denken und Prahlen. Rätselmeister können besser reden als die, die sie herausfordern.",
  "Schwach gegen alle Rauf-Fertigkeiten, weil sie auf eine sofortige, geradlinige Antwort selten vorbereitet sind."]}]},
 {h:"Brüche", b:[{t:"ul",x:["Die Lage verkomplizieren / „Hilfe“ in Form von Multiple-Choice-Optionen anbieten / Wissend kichern / Zeitverschwender bestrafen / Angesichts überwältigender Selbstgefälligkeit zur Gewalt greifen / Kapitulieren und mehr Hilfe leisten"]}]},
 {h:"Zum Mitnehmen", b:[{t:"ul",x:[
  "Bröckchen: Perle beißenden Schweißes, Eine strichbeschriebene Muschel",
  "Krimskrams: Antworten auf einem versteckten Zettel"]}]}
]};

PI_GTEXT["bodeneulen"] = { schluessel:"Titan · Gefiedert · Boss", herzen:[["Bodeneulen","♥♥♥♥"]], abschnitte:[
 {h:"Überblick", b:[
  "An den Federn, die ein Vogel zeigt, lässt sich viel über ihn ablesen. Krähen neigen zu dunkleren Tönen, sind aber Meister von Pigment und Farbstoff – selten findet man eine ohne modernste Körperkunst zum Vorzeigen. Papageien sind so farbenfroh wie laut und kommen in so vielen Farben wie ihr Wortschatz. Rotkehlchen haben einen Schock von Rot neben ihrem gedeckteren Weiß und Braun, was (angeblich) auf ihre angeborene Blutrünstigkeit hindeutet.",
  "Mit diesem Hintergedanken: Welche Federn zeigt eine Bodeneule der Welt?",
  "Keine, denn sie ist immer mit Moos, Steinen und Dreck bedeckt. Unter all dem Schutt sind durchaus *einige* Federn, aber nur wenige Käfer kommen nah genug heran (und noch weniger Eulen werden sauber genug), um herauszufinden, welche Farbe sie haben könnten.",
  "Diese schlammige Hülle macht die Bodeneule zu einem unfreiwilligen Meister natürlicher Tarnung, ungewöhnlich für ein so titanisch großes Wesen. So nützlich sie ist: Die erdige Fassade ist eher Zufall als Absicht, ein natürliches Nebenprodukt der Jagd auf ihre Lieblingsspeise, den Kometennasen-Maulwurf. Wie meine liebe alte Mutter immer sagte: Einen Maulwurf fängt man schwer, ohne selbst dreckig zu werden!",
  TITAN_HINT]},
 {h:"Anzeichen", b:[{t:"ul",x:[
  "In weicheren Boden gekratzte Tunnel, die schwindelerregend in der Dunkelheit darunter verschwinden.",
  "Schlammige Krallenabdrücke, die neben einem Hügel aus Erde und Stein enden. Vielleicht ist, was sie hinterließ, weggeflogen?"]}]},
 {h:"Verhalten", b:[{t:"ul",x:[
  "Wie eine Art Industriebohrer in den Untergrund tauchen, wenn sie einen Kometennasen-Maulwurf in der Nähe spüren.",
  "Käfer verschlingen oder verscheuchen, deren viele Beine lästig bodenerschütternde Vibrationen verursachen."]}]},
 {h:"Bodeneulenküken", b:[
  "Eine Bodeneule ist nicht gerade das geselligste Geschöpf, macht aber (zum Glück) eine Ausnahme für ihren eigenen Nachwuchs. Bodeneulenküken verbringen einen Großteil ihres jungen Lebens, vom Ei bis zum Schlüpfling, eingebettet im schützenden Schlammpanzer, der sich um die Federn ihres Elternteils bildet, und lugen von Zeit zu Zeit hervor, um die Welt kennenzulernen und unhilfreiche Kommentare zum Geschehen abzugeben.",
  "Wenn du eine Schar Bodeneulenküken ihren Eulenelternteil in einer Begegnung begleiten lassen willst, musst du der Titanenleiste der Gefahr keine zusätzlichen Felder hinzufügen und sie auch nicht als eigene Geschöpfe behandeln. Nutze stattdessen die folgenden zusätzlichen Züge, um die struppigen kleinen Kinder und ihren Beitrag zum Geschehen darzustellen …",
  {t:"dl",x:[
   ["Zum Pöbeln geboren (Quasseln 1 / Prahlen 1)","Stock und Stein, aber ohne den Stock. Wann immer ein Käfer ein Feld verbrennen würde, um die Kombo-Leiste zu füllen, muss er stattdessen zwei Felder verbrennen, außer er nimmt eine Markierung automatischen Quassel- oder Prahlschaden (Wahl des Webers) hin, die eine schrille Beleidigung eines begeisterten Kükens darstellt."],
   ["Immer wachsam (–)","Nichts geht über zusätzliche Augen bei hinterlistigen Käfertypen. Jeder Käfer, der eine heimliche oder verstohlene Handlung versucht, zieht bei einem Konflikt oder Desaster seine Stimmung immer ins äußerst Negative (zusätzlich zu allen sonstigen üblichen Effekten)."]]}]},
 {h:"Gegen eine Bodeneule antreten", b:[
  "Sich einem Titan frontal zu stellen ist ein Narrenwerk, ohne Plan sogar doppelt. Die Käfer könnten die Begegnung angehen, indem sie …",
  {t:"ul",x:[
   "sich mit ein paar verärgerten Kometennasen-Maulwürfen zusammentun, um ihrem Spitzenräuber einen Schlag zu versetzen.",
   "Hat die Bodeneule kreischende Küken in ihrem Schlamm eingebettet, wäre das Angebot, die Kinder für eine Weile zu übernehmen und zu unterhalten, eine ganz *besondere* Herausforderung."]}]},
 {h:"Teile & Züge", b:[{t:"dl",x:[
  ["Halbgrabender Ansturm (Hauen 2 + Graben 2)","Die Eule senkt den Kopf und stürmt vor, schleudert Steine und Schlamm durch die Luft und hinterlässt eine Furche. Würfe, um auf diesen Zug zu reagieren, erleiden einen Tempo-Abzug von 1. *Kann nur auf erdigem Gelände eingesetzt werden.*"],
  ["Steinschütteln (Hauen 1W6)","Ein Zug, der mehrere nahe Käfer auf einmal treffen kann: Die Eule schüttelt einen Hagel von Steinen aus ihrem Tarnmantel. Der Schaden wird für jeden Käfer einzeln gewürfelt."],
  ["Nachteule (Erschrecken 3)","Das Nachtsehen der Eule gleicht ihr unglückliches Blinzeln bei Tageslicht aus. Bei Licht erhält eine Bodeneule zusätzliche Schwächen gegen Schleichen und Blenden. In Dunkelheit erleidet jeder Versuch, sich vor der Bodeneule zu verstecken oder sie optisch zu täuschen, einen Tempo-Abzug von 2."],
  ["Erdgebunden und laut (Graben 2 / Quasseln 2)","Der Schlamm auf den Federn macht die Bodeneule zu schwer zum Fliegen, und sie hegt einen besonderen Hass auf *andere* fliegende Geschöpfe. Wann immer sie in einer Rauferei im Rampenlicht steht, ziehen alle Käfer in der Luft ihre Stimmung ins Negative, während die Eule ihnen Spott entgegenschleudert."],
  ["Schneller als gedacht (Flitzen 1)","Wann immer ein Käfer einen von der Eule verhängten Tempo-Abzug vermeiden würde, sollte der Weber einen W6 werfen. Bei 1, 2 oder 3 erleidet der Käfer den Tempo-Abzug wie gewohnt, von der rohen Beschleunigung der Eule auf dem falschen Fuß erwischt."],
  ["Ein verdächtiger Hügel (–)","Eine Bodeneule ist in Ruhe kaum von einem Haufen aus Schlamm und Steinen zu unterscheiden – eine großartige Gelegenheit für „Überraschung!“, wie auf S. 91 beschrieben."],
  ["Wahrer Titan (–)",TRUE_TITAN.replace("Als Titan hat er","Als Titan hat die Bodeneule")]]}]},
 {h:"Titanen-Abwehr", b:[{t:"ul",x:[
  TITAN_ABW,
  "Schwach gegen Fliegen, Schwimmen und Graben, aus einer Mischung aus Neid und Stolz."]}]},
 {h:"Brüche", b:[{t:"ul",x:["Eingraben und auftauchen / Einen ohrenbetäubenden Schrei ausstoßen / Schlamm und Steine überallhin schleudern / Einen besonders lästigen Käfer herausgreifen / Einen Maulwurf ausgraben (eine glückliche Ablenkung für euch, weniger glücklich für den Maulwurf)"]}]},
 {h:"Zum Mitnehmen", b:[{t:"ul",x:["Bröckchen: Schlammbedeckte Feder, Eulenstein, Verkümmerter Stern, Kralle des Gräbers, Eierschalenstück"]}]}
]};

PI_GTEXT["erdbrecher"] = { schluessel:"Titan · Bestial · Boss", herzen:[["Erdbrecher","♥♥♥♥♥♥"]], abschnitte:[
 {h:"Überblick", b:[
  "Ein watschelnder Berg aus Haut und Haar mit zwei schlammigen Hauern, die aus einem triefenden Maul ragen. Der Erdbrecher ist ein Tier von gewaltiger Größe und unnatürlicher Kraft und würde wohl die Mysteriokalypse beherrschen, wenn er A) sich zu einem gemeinsamen Zweck mit anderen zusammenschließen könnte oder B) irgendeinen anderen Ehrgeiz als das Abendessen hätte.",
  "Zum Glück scheren sich Erdbrecher in der neuen und krabbeligen Welt der Winzlinge um nichts, was nicht trüffelförmig ist. Denk daran, falls du je in die Nähe eines kommst – oder, noch besser, versuche gar nicht erst, dich in diese Lage zu bringen.",
  TITAN_HINT]},
 {h:"Anzeichen", b:[{t:"ul",x:[
  "Aufgebrochener Boden, Hufabdrücke und fehlende Trüffel.",
  "Aufgerissene und zerbrochene Baumrinde, frisch niedergetrampelte Pfade."]}]},
 {h:"Verhalten", b:[{t:"ul",x:[
  "Andere Erdbrecher bekämpfen, die sie herausfordern.",
  "Spuren aufgebrochenen Bodens hinterlassen.",
  "TRÜFFEL FINDEN. TRÜFFEL FRESSEN. MEHR TRÜFFEL."]}]},
 {h:"Teile & Züge", b:[{t:"dl",x:[
  ["Hufschmetterer (Hauen 3)","Stark genug, um mehrere Käfer durch die Luft zu schleudern; der Hufschmetterer verursacht bei bis zu drei Zielen gleichzeitig Schaden."],
  ["Hauerschrecken (Schlitzen 6)","Ein Zug gegen ein einzelnes Ziel, der bei einem Desaster als Reaktion zusätzlich zu allen anderen negativen Effekten ein Bröckchen und einen Krimskrams zerbricht."],
  ["Nicht umsonst so genannt (Graben 4)","Erdbrecher können sich wie ein hauerförmiges Messer durch Butter durch Erde, Holz und Stein schmettern."],
  ["Zottel und Borste (–)","Das Fell des Erdbrechers verhängt auf alle eingehenden körperlichen Aktionen einen Panzer-Abzug von 1 und einen Härte-Abzug von 1."],
  ["Einseitig besessen (–)","Der Erdbrecher ist wegen Trüffeln und Revier da – ihn zu füttern oder mit einem Rivalen abzulenken, kann einem Käfer erlauben, gelegentlich Gigaschaden zu verursachen."],
  ["Auf frischer Tat ertappt (–)","Jeder Käfer, der in der Nähe eines Erdbrechers die Fertigkeit Graben einsetzt oder einen Trüffel stiehlt, gibt das Rampenlicht an das Tier weiter, sobald seine Handlung beendet ist."],
  ["Wahrer Titan (–)",TRUE_TITAN.replace("Als Titan hat er","Als Titan hat der Erdbrecher")]]}]},
 {h:"Titanen-Abwehr", b:[{t:"ul",x:[
  TITAN_ABW,
  "Schwach gegen Zähmen und Kümmern, denn unter dieser zotteligen, gehauerten Hülle wartet ein Herz darauf, erwärmt zu werden."]}]},
 {h:"Brüche", b:[{t:"ul",x:["Einen neuen Trüffel wittern / Quieken und angreifen / Mit Tempo tunneln / Sich aufbäumen und eine klassische Schwachstelle freilegen"]}]},
 {h:"Zum Mitnehmen", b:[{t:"ul",x:["Bröckchen: Halb zerkaute Trüffel, Riesiger Hauersplitter, Eberhaar, Moschus des Hauers"]}]},
 {h:"Gegen einen Erdbrecher antreten", b:[
  TITAN_PLAN,
  {t:"ul",x:[
   "den Eber zu einem Trüffelsuchwettbewerb herausfordern (bei dem sie einen heimlichen Vorteil haben).",
   "versuchen, ihn wie bei einem Schweine-Rodeo einzufangen und von bewohnten Gebieten wegzulenken.",
   "den Eber mit Feuer erschrecken, was allerdings einen größeren Brand riskiert, der mehr zerstören könnte, als sie bedacht haben."]}]}
]};

PI_GTEXT["gubs"] = { schluessel:"Klein · Scheppernd · Elite", herzen:[["Gubs","♥♥•♥"]], abschnitte:[
 {h:"Überblick", b:[
  "Am Krabbeligsein ist etwas Anziehendes – eine gewisse Unbekümmertheit, gepaart mit den unendlichen Möglichkeiten der Insektobiologie und dem Wissen, wie man sich zusammenreißt und ernst wird, wenn die Lage es verlangt. Wer wäre am Ende des Tages nicht gern ein Käfer?",
  "Und vielleicht ist das die Theorie hinter den Gubs, selbstorganisierten Müllkonstrukten, die in ausgesprochen krabbeligen Formen zusammenkommen und ihre Abläufe und Gemeinschaften nach ihrer besten Vermutung darüber organisieren, wie Käfer sein sollten."]},
 {h:"Anzeichen", b:[{t:"ul",x:[
  "Ein ungewöhnlicher Mangel an nützlichen Bröckchen und Krimskrams, als wären sie alle für einen höheren Zweck weggesaugt worden.",
  "Metallische Fühler, die interessiert zittern.",
  "„Bienenstöcke“ aus alten Verpackungschips und gesammeltem Papier."]}]},
 {h:"Verhalten", b:[{t:"ul",x:[
  "Gubs sind von Natur aus Nachahmer, Beobachter und Anwender typisch krabbeligen Verhaltens (auch wenn sie die Feinheiten nicht immer verstehen).",
  "Nach den Hobbys Beobachten und Nachahmen kommt das profanere, aber wesentliche Ziel der Vermehrung: mehr Müll bedeutet mehr Gubs!"]}]},
 {h:"Teile & Züge", b:[{t:"dl",x:[
  ["Zusehen und lernen (Verschiedene 2)","Alles, was ein Käfer kann, kann ein Gub … na ja, zumindest kann er es versuchen. Jeder Gub kann zwei oder drei Fertigkeiten lernen, aber erst, nachdem er sie von einem echten, waschechten Insekt (wie den Spielerfiguren oder einem nahen NSC) hat einsetzen sehen. Einmal gelernt, kann ein Gub diese Fertigkeiten beliebig einsetzen, auch als Mittel, in einer Rauferei Schaden zu verursachen. *Auch wenn es möglich ist, werden die Gubs, denen eine Bande begegnet, wohl kaum völlig unbeschriebene Blätter sein – wenn du gubbische NSC präsentierst, wähle ein oder zwei Fertigkeiten, die sie anhand der örtlichen Tierwelt oder Umgebungsmerkmale schon beherrschen könnten.*"],
  ["Form (Stöbern 2)","Weil sie von Natur aus aus Bröckchen und Krimskrams bestehen, haben Gubs sowohl ein gewisses Maß an eingebauter Widerstandsfähigkeit ALS AUCH die Fähigkeit, ihr Design spontan zu ändern. Ein Gub kann ein Bröckchen oder einen Krimskrams aus der Umgebung (oder einen von einer Spielerfigur angebotenen) verbrauchen, um alle Markierungen auf seiner Herzleiste vollständig zu heilen."],
  ["… und Umform (Werkeln 3)","Sie verhängen außerdem einen Komplex-Abzug von 1 auf alle Angriffe, die ihren physischen Körper treffen sollen – denn was zählt schon als Schwachstelle, wenn man gegen etwas kämpft, das aus Streichhölzern, Schrauben und etwas uraltem Blech besteht?"],
  ["Freundlich bis zum Fehler (Quasseln 1)","Es braucht viel, um einen Gub zu beleidigen oder zu verunsichern. Eher ist es sogar schwer, ihren ständigen freundlichen Redefluss zu unterbrechen."]]}]},
 {h:"Abwehr", b:[{t:"ul",x:[
  "Resistent gegen Stöbern. Zum Glück für sie, denn sie bestehen aus nützlichen Bröckchen und Krimskrams.",
  "Schwach gegen alle Anfreunden-Fertigkeiten, denn jeder will zur Gruppe gehören."]}]},
 {h:"Brüche", b:[{t:"ul",x:["Etwas wenig Beeindruckendes ehrfürchtig anstarren / Ein Teil fällt ab / Eine Beobachtung zu einem Rätsel machen"]}]},
 {h:"Zum Mitnehmen", b:[{t:"ul",x:["Bröckchen und Krimskrams: Alles, was dazu passt, wie ein Gub in einer Szene bildlich beschrieben wurde."]}]},
 {h:"Gedanken zur gubbischen Natur", b:[
  "Gubs sind vielleicht keine Käfer im Körper, aber sie geben ihr Bestes. Sie werden gebremst von den Grenzen ihrer Materialien, von den Gefahren einer Welt, deren Maßstab ihren eigenen weit übersteigt, und von der komplexen, schwer zu fassenden Natur dessen, was ein echter Käfer eigentlich *ist*. Sie kämpfen, scheitern manchmal, aber sie geben immer ihr Bestes.",
  "Und wenn man es genau nimmt: Gibt es etwas Käferhafteres als das?"]}
]};

PI_GTEXT["erbstuecker"] = { schluessel:"Riesig · Blättrig · Krabbelig · Scheppernd · Elite", herzen:[["Erbstücker","♥♥♥•♥♥♥•♥♥♥•♥"]], abschnitte:[
 {h:"Überblick", b:[
  "In einem sehr berühmten Film über Dinosaurier (du weißt sicher, welchen ich meine) gibt es eine Szene, in der ein paar noch nicht gefressene Säugetierchen das Nahen einer anrückenden Echse, einer besonders schlimmen, an den Wellen in einem Wasserglas erkennen.",
  "Verkleinere diese Szene ein bisschen und ersetze den Dinosaurier durch eine ausgehöhlte Tomate, die auf Beinen aus Blatt und Ranke läuft, und du hast genau vor Augen, wie das Auftauchen eines Erbstückers auf eine Bande abenteuernder Käfer wirken könnte.",
  "Erbstücker sind organische Maschinen, wandelnde Früchte und Gemüse, gesteuert von abtrünnigen Käfern mit grünem Daumen und sehr intensiven Anbau-Routinen."]},
 {h:"Anzeichen", b:[{t:"ul",x:[
  "Eine Silhouette, irgendwie zugleich schlaksig und bauchig, die über einen nahen Hügel schreitet.",
  "Ein fehlender Ziegenkäfer.",
  "Das wilde Lachen eines krabbeligen Piloten, dessen pflanzliches Gefährt in den Kampf gegen Raubpflanzen stürmt."]}]},
 {h:"Verhalten", b:[{t:"ul",x:[
  "Jeden Feind herausfordern, der Käfer terrorisieren könnte.",
  "Sich niederlassen, um Samen zu pflanzen und neue Erbstücker zum Wachsen zu bringen (an einem Ort, der sich zum Pflanzen eignet)."]}]},
 {h:"Teile & Züge", b:[
  "Welche Züge ein Erbstücker in einer Rauferei ausführen kann, hängt stark von der Frucht oder dem Gemüse ab, aus dem sein Hauptkörper besteht. Hier ein paar konkrete Beispiele …",
  {t:"dl",x:[
   ["Tomate (Hauen 2 / Schwimmen 1)","Ein Spender klebriger Säfte auf kurze Distanz und steinharter Kerne, die aus der Ferne abgefeuert werden. Tomaten-Erbstücker verhängen dank der verschütteten Flüssigkeit einen Tempo-Abzug von 1 auf nahe Käfer, die Bewegen-Fertigkeiten einsetzen."],
   ["Scharfe Paprika (Brutzeln 3)","Ausgestattet mit scharfen Peitschen, die ein Ziel garantiert zur nächsten Milchquelle rennen lassen. Scharfe-Paprika-Erbstücker verursachen außerdem 1 Markierung automatischen Brutzelschaden bei jedem nahen Käfer, der ins Rampenlicht kommt."],
   ["Kürbis (Erschrecken 2)","Perfekt für Halloween! Der Kürbis-Erbstücker kann jedem Käfer, der ihn sehen kann, Erschrecken-Schaden zufügen und einmal pro Szene 6 Hauschaden verursachen, indem er sein grinsendes Gesicht in ein Ziel rammt (was allerdings die Schnitzerei ruiniert und den Piloten ungeschützt lässt)."],
   ["Alraune (Schlitzen 1 / Quasseln 3)","Die Existenz der Alraune war vor der Mysteriokalypse bloße Spekulation, doch hier ist ein Beweis, der selbst den hartgesottensten Kryptobotaniker zum Sabbern bringt. Diese Erbstücker können Wurzeln peitschen, um mehreren nahen Käfern gleichzeitig Schlitzschaden zuzufügen, oder ein einzelnes Ziel anschreien, für Quasselschaden. Außerdem plappern sie beim Laufen ständig, sodass die Fertigkeit Denken in ihrer Gegenwart unbrauchbar ist."]]}]},
 {h:"Abwehr", b:[{t:"ul",x:[
  "Resistent gegen Hauen, dank gehärteter Platten aus Gemüsepanzer.",
  "Schwach gegen alle Bewegen-Fertigkeiten – diese Dinger wurden gebaut, um Pflanzen zu bekämpfen, ein Gegner, der nicht für sein Tempo bekannt ist."]}]},
 {h:"Brüche", b:[{t:"ul",x:["Neue Blätter entfalten sich / Eine besondere Samenbombe laden / Innehalten und neu kalibrieren / Klebrige Säfte speien / Platzen und aufreißen"]}]},
 {h:"Zum Mitnehmen", b:[{t:"ul",x:["Bröckchen: Samenhüllen, Fruchtfleisch, Matschige Stücke, Seltsamer organischer Mechanismus, Junger Spross, Panzer des Piloten"]}]},
 {h:"Gedanken zur grünen Maschinerie", b:[
  "Die Geheimnisse des Erbstücker-Baus kennt nur ein einziger Käfer, die Art einsamer Genies, die Bitten um Einblick in ihre Baupläne mit tödlichem Entsetzen begegnet. Wegen dieser Geheimhaltung wissen Erbstücker-Piloten selten (wenn überhaupt), wie sie ihre Maschinen bei einem Ausfall tatsächlich *reparieren* sollen, und verlassen sich auf eine Mischung aus gutem Zureden, Gießen und fiebriger Hoffnung. Am besten hofft man, dass sie nie ausfallen."]}
]};

PI_GTEXT["hekatantonopeden"] = { schluessel:"Titan · Krabbelig · Boss", herzen:[["Hekatantonopeden","♥♥♥♥♥♥♥"]], abschnitte:[
 {h:"Überblick", b:[
  "Käfer halten sich gern für die Verantwortlichen der Post-Mysteriokalypse, wenn schon nicht der körperlichen Größe nach, dann wenigstens der Zahl nach – auf jedes einzelne Tier oder jeden Vogel kommen schließlich hundert, tausend krabbelige Wesen. Die Welt war ihnen zumindest zuletzt gewogen. Längst überfällig, wenn du mich fragst.",
  "Doch hin und wieder werden sie daran erinnert, dass es nicht immer so war. Nicht bloß ein Blick auf die Zeit vor der Mysteriokalypse, davon gibt es schließlich fast überall Überreste, sondern auf etwas weit, WEIT Älteres.",
  "Hekatantonopeden sind Käfer, so groß, dass sie eine Katze winzig aussehen lassen, so schwer, dass ihre trippelnden Glieder Erdbeben auslösen, so zäh, dass man ein ganzes Jahr an ihrem Panzer kratzen könnte, ohne eine Delle zu machen. Sie sind selten, sie sind unerklärlich, und sie sind so alt und langsam, dass sie mehrere Minuten brauchen, um einen einzigen Satz zu beenden. Sie sind ziemlich beeindruckend, falls wir das nicht klargemacht haben.",
  TITAN_HINT]},
 {h:"Anzeichen", b:[{t:"ul",x:[
  "Steine, die sich neu ordnen, während der Boden zu beben beginnt.",
  "Ein plötzlicher Exodus aller Geschöpfe, die sich bewegen können, alle in eine Richtung – weg.",
  "Bäume mit riesigen Kiefergrabungen quer über dem unteren Stamm. Ganze Büsche, von Blättern kahlgefressen."]}]},
 {h:"Verhalten", b:[{t:"ul",x:[
  "Jede Vegetation verschlingen, die sie kriegen können.",
  "In Erinnerungen schwelgen, wie früher alles besser war, als der Sprit einen Pfennig die Gallone kostete und es viel mehr Sauerstoff gab."]}]},
 {h:"Gegen einen Hekatantonopeden antreten", b:[
  TITAN_PLAN,
  {t:"ul",x:[
   "Fallen und Schlingen aufstellen, um das Ungetüm zu fesseln, was die ständigen Erdbeben beenden könnte.",
   "Ihm den Weg zu einer ausreichend großen Quelle köstlichen Grünzeugs weisen oder es dorthin führen, sodass es sich überfrisst.",
   "Einen Weg finden, dass es seinen eigenen Schwanz jagt, und so ein grollendes Uroboros weit weg von der krabbeligen Zivilisation erschaffen."]}]},
 {h:"Teile & Züge", b:[{t:"dl",x:[
  ["Krabbel-Schnipser (Hauen 5)","Ein einziges Zucken eines Hekatantonopeden-Beins genügt, um einen Käfer durch die Luft zu schleudern, selbst bei einem Streifschlag. Wer beim Abwehren dieses Zugs einen Konflikt oder ein Desaster würfelt, wird in einen nahen Interessanten Punkt gestoßen (was je nach Punkt zusätzlich Schaden verursachen kann)."],
  ["Reinhauen (Beißen 6)","Obwohl sie süße, saftige Pflanzen bevorzugen, überlegt ein Titan dieser Größe nicht lange, bevor er jedes winzige Ärgernis verschluckt, das seinem Gesichtsloch zu nahe kommt. Vom Hekatantonopeden verschluckte Käfer erleiden jedes Mal, wenn sie im Rampenlicht stehen, 2 Markierungen automatischen Brutzelschaden. *Aus dem Schlund des Monsters wieder herauszuklettern ist möglich, doch entsprechende Aktionen erleiden sowohl einen Härte-Abzug von 1 als auch einen Komplex-Abzug von 1.*"],
  ["Ewiges Beben (Graben 2)","Schon die kleinste Bewegung so vieler Beine lässt den Boden erzittern. Käfer mit Bodenkontakt erleiden 2 Markierungen automatischen Grabenschaden, wann immer der Hekatantonopede für eine bewegungsbezogene Aktion im Rampenlicht steht."],
  ["Nicht gerade in Eile (–)","Eine Aktion mit einer Anfreunden-Fertigkeit, die auf den Hekatantonopeden zielt, verlangt von einem Käfer als zusätzliche Kosten, ein Feld auf einem seiner Aspekte zu verbrennen – die Mühe, Sprache und Gesten auf ein Tempo zu verlangsamen, das das Wesen deuten kann."],
  ["Urzeitlicher Panzer (–)","Angriffe auf das Äußere des Hekatantonopeden erleiden einen Panzer-Abzug von 3, außer sie zielen gezielt auf eine Schwachstelle wie das Maul oder den Unterbauch (die selten lange zu sehen sind)."],
  ["Wahrer Titan (–)",TRUE_TITAN.replace("Als Titan hat er","Als Titan hat der Hekatantonopede")]]},
  {t:"vl",x:"„Franz, Castigo, ihr nehmt die Beine! Swift und ich nehmen die … äh … die anderen Beine, schätze ich. Moment, wie viele Beine hat dieses Ding eigentlich?“",wer:"Pushkini Curvehorn, Nashornkäfer-Dompteur"}]},
 {h:"Titanen-Abwehr", b:[{t:"ul",x:[
  TITAN_ABW,
  "Schwach gegen Schleichen. Hekatantonopeden können sich schwer auf kleine Einzelheiten konzentrieren, und unbemerkt in ihrer Nähe zu bleiben ist leichter als bei den meisten Titanen.",
  "Schwach gegen Kartieren – war es da drüben oder dort drüben? Ich schwöre, sie versetzen heutzutage Bäume, nur um uns Alte zu verwirren …",
  "Immun gegen Erschrecken. Bis das Ungetüm merkt, dass es sich fürchten sollte, ist der Moment mit ziemlicher Sicherheit längst vorbei."]}]},
 {h:"Brüche", b:[{t:"ul",x:["Geräuschvoll auf Baumrinde kauen und Splitter in alle Richtungen schleudern / Eine lange, abschweifende Geschichte von früher erzählen / Durch eine Wand oder einen Zaun poltern und sich dabei ständig entschuldigen / Ein nahes Ärgernis als Strafe für anhaltende Unhöflichkeit verschlucken / Sich ein wenig verdrehen und länger als sonst einen weichen, verlockenden Unterbauch freilegen"]}]},
 {h:"Zum Mitnehmen", b:[{t:"ul",x:["Bröckchen: Durchweichte Splitter, Uralter Panzerscherben, Verdichtete Erde, Fruchtiger Sabber, Geschichte vergessener Länder"]}]}
]};

PI_GTEXT["hex-kabel-hydren"] = { schluessel:"Riesig · Scheppernd · Elite", herzen:[["Hex-Kabel-Hydren","♥♥♥•♥♥♥•♥♥♥•♥♥•♥♥•♥"]], abschnitte:[
 {h:"Überblick", b:[
  "Was ist Elektrizität, wenn nicht eine Form uralter Magie? Um sie ganz zu verstehen, braucht es Kenntnis komplexer Diagramme und geheimnisvoller Siegel, sie springt und knistert in einem Moment und liegt im nächsten gefährlich still, und sie sickert in die Welt, wenn man es am wenigsten erwartet. Magie, zu 100 %.",
  "Vielleicht macht genau das die Hex-Kabel-Hydra zu einem so furchterregenden Feind: ihre Fähigkeit, eine Macht zu führen, die allen außer den batteriehirnigsten Käfern verwehrt ist. Andererseits könnten es auch all die schnappenden Mäuler und sich windenden Kabel sein oder die Fähigkeit, aus einer uralten Wand zu brechen und einen trippelnden Käfer im Handumdrehen zu Asche zu braten.",
  "… Ja, wahrscheinlich ist es der zweite Teil."]},
 {h:"Anzeichen", b:[{t:"ul",x:[
  "Ein unheilvolles Summen, wie von hundert Bienen in Flaschen.",
  "Eine Beule hinter bröckelndem Putz.",
  "Eine gähnende Steckdose, geschmückt mit Chitinpanzern."]}]},
 {h:"Verhalten", b:[{t:"ul",x:["Winden, wiegen und zuschlagen!"]}]},
 {h:"Teile & Züge", b:[
  {t:"dl",x:[["Überspannung und Aussetzer (Verschiedene)","Die Hex-Kabel-Hydra ist so unberechenbar wie der Strom, den sie führt. Wann immer du diesen Zug einsetzt, wirf 6W6 und nutze jedes Ergebnis wie in der folgenden Tabelle gezeigt."]]},
  {t:"ul",x:[
   "**1 (Zapp-Schnapp):** Verursache 2 automatischen Brutzelschaden bei einem nahen Käfer.",
   "**2 (Funkenbogen):** Verursache 1 automatischen Brutzelschaden bei einem fernen Käfer. Trifft dieser Schaden einen Bruch auf der Leiste eines Aspekts, verbrenne alle Felder der Leiste vor diesem Bruch.",
   "**3 (Metallzahn-Biss):** Verursache 3 Beißschaden bei einem nahen Käfer und greife dasselbe Ziel.",
   "**4 (Schockentladung):** Betäube einen nahen Käfer.",
   "**5 (Aufladen):** Leere eine Markierung auf der Herzleiste der Hydra. Leert das ein Herz links von einem Bruch der Hydra, entsteht ein neuer „Kopf“.",
   "**6 (Elektrokinetische Wildheit):** Verursache 3 Brutzel- und 3 Beißschaden bei einem einzelnen nahen Käfer (jede Schadensinstanz kann von einer anderen Aspektleiste aufgenommen werden)."]},
  "Verringere den 6W6-Wurf jedes Mal um 1W6, wenn ein Bruch der Hex-Kabel-Hydra erreicht wird; das stellt dar, wie die Gefahr schwächer wird, je mehr „Köpfe“ sie verliert.",
  {t:"dl",x:[
   ["Der Fluch der Funken (Brutzeln 2/4)","Eine pulsierende Welle elektrischer Energie, die alle nahen Käfer trifft, die nicht durch irgendeine Isolierung geschützt sind. Der Fluch der Funken verursacht 2 Brutzelschaden bei Käfern mit Bodenkontakt (oder mit irgendeinem Gummischutz) und 4 Brutzelschaden bei Käfern in der Luft."],
   ["Kräftiger Kiefer (Beißen 2)","Die Hydra verdoppelt jeden Beißschaden, den sie einem von ihr gegriffenen Käfer zufügen würde. *Brutzelschaden bleibt unberührt.*"],
   ["Wassergefahr (–)","Die Hydra ist technisch gesehen nicht *schwach* gegen Schwimmschaden, aber sie mag Wasser *wirklich* nicht. Jede Aktion oder jeder Angriff, der Schwimmen oder eine Flüssigkeit nutzt, um die Herzleiste der Hydra zu beeinflussen, markiert ein Feld mehr als üblich."],
   ["AUTSCH! (–)","Jeder Käfer, der die Hex-Kabel-Hydra mit einer Metallwaffe angreift, zieht seine Stimmung ins Negative, nachdem er einen scharfen (aber letztlich harmlosen) Schock bekommen hat."]]}]},
 {h:"Abwehr", b:[{t:"ul",x:[
  "Resistent gegen Beißen dank widerstandsfähiger Ummantelung.",
  "Immun gegen Brutzeln. Manche sagen sogar, Brutzelschaden *heile* das Ding, doch solche Gerüchte sind unbestätigt.",
  "Schwach gegen Stöbern und Werkeln: Lasst uns basteln!"]}]},
 {h:"Brüche", b:[{t:"ul",x:["Einen neuen Stecker austreiben / Kurzschluss / Rauchen und glühen"]}]},
 {h:"Zum Mitnehmen", b:[{t:"ul",x:["Krimskrams: Plastikkabel, Kupferfaden, Durchgebrannte Sicherung"]}]}
]};

PI_GTEXT["immorels"] = { schluessel:"Klein · Pilzig · Schwarm", herzen:[["Immorels","♥♥•♥♥•♥♥"]], abschnitte:[
 {h:"Überblick", b:[
  "Was bekommt man, wenn eine Bande Immorels über eine Siedlung herfällt? Die kleinlichste aller Gefahren, das bekommt man. Diese Pilze sind Meister darin, Essensstände umzuwerfen und bärtigen Ältesten harsche Worte entgegenzuschleudern, wobei ihre Lederjacken im Wind flattern, während sie kichernd von einer Tat sozialer Unordnung zur nächsten watscheln."]},
 {h:"Anzeichen", b:[{t:"ul",x:[
  "Eine allgemeine Spur kleinen Unfugs.",
  "Pro-myzelisches Graffiti und absichtlich verschüttete Getränke."]}]},
 {h:"Verhalten", b:[{t:"ul",x:[
  "So lästig wie möglich sein.",
  "Autoritätspersonen beleidigen und ihnen entwischen.",
  "So tun, als wären sie zu Unrecht beschuldigt, wann immer sie tatsächlich erwischt werden, und sich auf jede erdenkliche Weise der Verantwortung entziehen."]}]},
 {h:"Teile & Züge", b:[{t:"dl",x:[
  ["Kleine Drohungen (Erschrecken 1 / Quasseln 1)","Der durchschnittliche Immorel greift einen Käfer selten tatsächlich an, zumindest nicht aus der Nähe – sie schleudern lieber Beleidigungen statt Steine. Kleine Drohungen ziehen außerdem die Stimmung eines Käfers ins Negative, zusätzlich zum verursachten Schaden."],
  ["Abzocke (Stöbern 2)","Wenn sich Immorels doch einmal trauen, tatsächlich anzugreifen, besteht das meist aus viel Rempeln und etwas Taschendiebstahl. Desaster beim Abwehren einer Abzocke führen dazu, dass das Ziel zusätzlich zu allen anderen üblichen Ergebnissen ein Bröckchen oder einen Krimskrams verliert."],
  ["Asoziales Verhalten (–)","Die Anwesenheit eines Immorel-Schwarms in oder um eine Gemeinschaft setzt alle anderen unter Strom. Solange Immorels eine krabbelige Siedlung bedrohen, behandeln alle Aktionen mit Anfreunden-Fertigkeiten Konflikte als Desaster."]]}]},
 {h:"Abwehr", b:[{t:"ul",x:[
  "Schwach gegen Prahlen, Erschrecken und Flitzen. Immorels sind die geborenen Rüpel der Pilzwelt und, wie viele Rüpel, leicht überwältigt, wenn andere ihnen einfach die Stirn bieten.",
  "Immun gegen Kümmern, aber nur in einer Gruppe – ein einzelner Immorel verliert diese Immunität sofort."]}]},
 {h:"Brüche", b:[{t:"ul",x:["Einen beleidigenden Sprechchor über die Gegner anstimmen / Bedrohlich Steine umhertreten / So einschüchternd wie möglich aussehen / Eine leere Drohung aussprechen"]}]},
 {h:"Zum Mitnehmen", b:[{t:"ul",x:[
  "Bröckchen: Moos-Lederjacke, Immorel-Brocken",
  "Krimskrams: Gestohlenes Andenken, Winzige Kette, Brodelnder Klumpen geronnener Zwietracht"]}]},
 {h:"Plusterrüpel-Boss", b:[
  "Während Immorel-Schwärme eher ein Ärgernis als eine existenzielle Bedrohung sind, ändert sich das alles, wenn ein Plusterrüpel in die Stadt kommt. Diese viel größeren Pilze fungieren als Bandenchefs und organisieren die ziellos zerstörerischen Immorels unter ihrem Kommando zu einer Bande, die weit abscheulicherer Taten fähig ist.",
  {t:"dl",x:[
   ["Die falsche Art der Ermutigung (Hauen 3)","Plusterrüpel haben nichts gegen eine Prügelei, auch wenn sie selbst dann die meiste Zeit damit verbringen, Gegner anzurempeln und obskure Drohungen zu grunzen. Die größere Gefahr ist ihre Wirkung auf die Immorels, die sie anführen – in Anwesenheit eines Plusterrüpels verdoppeln alle Immorels den Schaden, den sie sonst mit den Zügen Kleine Drohungen und Abzocke verursachen würden."],
   ["Dunkle Tage (–)","Es wird einfach nicht besser. Jeder Käfer in einer Siedlung, die gerade unter der Wirkung eines Plusterrüpels steht, verliert die Fähigkeit, seine Stimmung auf mehr als neutral zu ziehen, und die gesamte Siedlung gilt zudem jederzeit als in Dunkelheit, unabhängig von der tatsächlichen Helligkeit."]]}]}
]};

PI_GTEXT["laktogeister"] = { schluessel:"Riesig · Geisterhaft · Pilzig · Elite", herzen:[["Laktogeister","♥♥•♥♥•♥♥•♥♥"]], abschnitte:[
 {h:"Überblick", b:[
  "Nichts ist grausamer als geronnene Milch – der unerwartete Klumpen, wo ein Schwall sein sollte, verfolgt selbst die göttlichsten Katzen in ihren Träumen. Vielleicht entstammt der Laktogeist diesen dunklen Gedanken – ein Avatar des Gerinnens, ein flüssiges Gespenst, das aus dem gläsernen Gefängnis seiner Milchflasche steigt, um vage käsig duftendes Unheil über die Reiche zu bringen."]},
 {h:"Anzeichen", b:[{t:"ul",x:[
  "Verdorbene Milch in ektoplasmischen Pfützen.",
  "Eine verschlossene Milchflasche mit leicht grünlichem Schimmer, die geradezu darum bettelt, geöffnet zu werden.",
  "Ein Drang zum Würgen."]}]},
 {h:"Verhalten", b:[{t:"ul",x:[
  "Warten, bis das Glas zerbricht oder der Deckel entfernt wird, dann ins Alltägliche hinaussickern.",
  "Milchige Gefahr über die Gegend spritzen."]}]},
 {h:"Teile & Züge", b:[{t:"dl",x:[
  ["Milchprodukt-Wünsche (Kümmern 3)","Wegen seiner Gestalt (eine geisterhafte Figur, die aus einer Flasche steigt) halten manche Käfer den Laktogeist für eine Art freundlichen Dschinn und stürmen mit unzähligen Wünschen heran. Interessanterweise kann der Geist tatsächlich Wünsche erfüllen (solange sie sich um etwas Milchiges drehen) und gibt sich oft hilfsbereit … bis die Folgen der Wünsche zuschlagen: Laktose-Halbwahrheiten, verdreht zu milchigen Fehlern und sahnigen Konsequenzen. *Der Weber wird ermutigt, „Belohnungen“ zu geben, die sich in schädliche Flüche verwandeln, bevor die Käfer die wahrhaft feindselige Natur des Laktogeists erkannt haben.*"],
  ["Gerinnende Flut (Brutzeln 2)","Ein direkterer Angriff, eine ektoplasmische Welle verdorbener Milch, die mehrere nahe Käfer auf einmal treffen kann. Die gerinnende Flut *stößt* Käfer zurück, zusätzlich zu allen ihren anderen, situationsabhängigeren Effekten."],
  ["Milch-Missgeschicke (Erschrecken 1)","Jeder Käfer, der beim Angriff auf den Laktogeist eine Wendung würfelt, hat Pech – das Ergebnis dieser Wendung, obwohl weiterhin von der Tabelle bestimmt, *muss negativ sein*, und der Käfer erleidet zusätzlich zu allen anderen Ergebnissen des Wurfs eine automatische Markierung Erschrecken-Schaden."],
  ["Flaschenglas-Panzer (–)","Ein Sarg aus Glas umgibt das schimmelige Herz der Gefahr und verhängt einen Panzer-Abzug von 1 auf alle Versuche, die Flasche von außen zu zerbrechen."],
  ["Gefangennehmend (Schlitzen 1)","Schafft es der Laktogeist, ein Ziel zu greifen oder zu ziehen, ist die Milchflasche, in der er lebt, das perfekte Gefängnis. Käfer, die vom Laktogeist verschluckt wurden, erleiden auf alle Aktionen einen Tarn-Abzug von 2, da sie durch die Flüssigkeit um sie herum nichts sehen können. Versuche, sich zu befreien, verursachen eine automatische Markierung Schlitzschaden, ob erfolgreich oder nicht."]]}]},
 {h:"Abwehr", b:[{t:"ul",x:[
  "Resistent gegen Hauen und Schlitzen, denn Geister sind bekanntermaßen nur halb stofflich. Diese Flasche sieht allerdings verdammt zerschmetterbar aus …",
  "Immun gegen Brutzeln – giftiger kann es kaum werden, als es ohnehin schon ist.",
  "Schwach gegen Kümmern und Schwimmen, denn ein ausreichend begabter Koch kann aus allem ein krabbeliges Festmahl machen, und ein starker Schwimmer kann mühelos auf den milchigen Gezeiten reiten."]}]},
 {h:"Brüche", b:[{t:"ul",x:["Keine Wünsche mehr / Geisterflut / Begeisterung zum Gerinnen bringen"]}]},
 {h:"Zum Mitnehmen", b:[{t:"ul",x:[
  "Bröckchen: Tropfen verdorbener Milch, Milchplasma",
  "Krimskrams: Glasscherbe, Silberfolien-Deckel, Schraubverschluss"]}]}
]};

PI_GTEXT["loewenzahnmaehnen"] = { schluessel:"Riesig · Blättrig · Elite", herzen:[["Löwenzahnmähnen","♥♥♥♥♥♥•♥•♥♥♥"]], abschnitte:[
 {h:"Überblick", b:[
  "Es gibt ein altes Sprichwort über Löwen, irgendetwas damit, einen bei den Hörnern zu packen, aber niemand weiß mehr genau, wie es geht. Du könntest es für klug halten, einen echten Löwenzahn danach zu fragen – wer wüsste es schließlich besser? Aber ich würde das an deiner Stelle lassen, besonders wenn du nach dem Gespräch, sobald du dich losgerissen hast, noch dieselbe Zahl an Armen und Beinen haben willst wie zu Beginn.",
  "Die Mähne eines Löwenzahns erkennt man an drei Dingen. Erstens ein Körper aus sich ringelnden Blättern und zähen Stängeln, vage katzenhaft in der Haltung und völlig vom Erdboden gelöst, den Pflanzen sonst so lieben. Zweitens die Mähne – ein Schopf großer, auffallend schwebender Samen, die an einem Sommertag garantiert kindliche Freude wecken. Drittens die Zähne. Und wenn die meisten Käfer eines hassen, dann eine Pflanze mit Zähnen."]},
 {h:"Anzeichen", b:[{t:"ul",x:[
  "Weißgeschwänzte Samen, die im Wind treiben.",
  "Ein rasselndes Brüllen, wie Eicheln in einer Waschmaschine."]}]},
 {h:"Verhalten", b:[{t:"ul",x:[
  "An windigen Tagen eifrig jagen, wenn möglich zu zweit.",
  "Hoch springen, um von oben anzugreifen."]}]},
 {h:"Teile & Züge", b:[{t:"dl",x:[
  ["Schnappi (Beißen X)","Der Biss der Mähne ist ungewöhnlich wild – wirf 2W6 und nimm das höhere Ergebnis als verursachten Schaden."],
  ["Spursamen (Jagen / Spüren 1)","Mähnen-Samen sind ein mächtiges Spürwerkzeug und können in Salven aus der Pflanze abgefeuert werden. Die Mähne des Löwenzahns kann eines ihrer eigenen Herzen markieren, um ein einzelnes Ziel mit Samen zu spicken, sodass dieses Ziel bei Abwehrwürfen gegen die Mähne alle Triumphe als Konflikte behandeln muss, bis die Samen entfernt sind."],
  ["Vividarium (Denken / Spüren 4)","Bei Licht kann die Mähne des Löwenzahns bunte Blütenblätter entfalten, um ein einzelnes Ziel kurz zu hypnotisieren und seinen eigenen Verstand gegen es zu wenden. Das Ziel kann den Schaden dieses Zugs um 1 verringern, indem es seine Stimmung ins Negative zieht, oder um 3, indem es sie ins äußerst Negative zieht."],
  ["Treibender Jäger (Flitzen / Fliegen / Klettern / Tanzen 2)","Die Pflanze nutzt ihre Samen, um sich beim Bewegen länger in der Schwebe zu halten, vollbringt unmögliche Sprünge und erklimmt mühelos steile Flächen, während sie auf alle eingehenden Angriffe einen Tempo-Abzug von 1 verhängt. *Schlägt das Wetter in einen Sturm um, kann sie gut genug springen und treiben, um kurzzeitig im Grunde zu fliegen – erhöhe den Schaden aller Züge der Löwenzahnmähne um 2, solange sie in der Luft ist.*"],
  ["Einseitig besessen (–)","Eine Mähne wird sich *niemals* zurückziehen."]]}]},
 {h:"Abwehr", b:[{t:"ul",x:[
  "Resistent gegen Jagen, Spüren, Fliegen, Flitzen und Tanzen – nichts bewegt sich wie die Mähne eines Löwenzahns.",
  "Schwach gegen Brutzeln und Schlitzen. Sie mögen flink, beweglich und räuberisch sein, aber sie sind trotzdem nur Pflanzen."]}]},
 {h:"Brüche", b:[{t:"ul",x:["Das Gebiet besamen / Ein rasselndes Brüllen ausstoßen / Bunte Blütenblätter schütteln / In die Luft schnappen / Der Wind frischt auf …"]}]},
 {h:"Zum Mitnehmen", b:[{t:"ul",x:[
  "Bröckchen: Mähnensamen-Hülsen, Klettenschneidezahn, Heilsaft, Treibflaum",
  "Krimskrams: Halb verdautes Andenken, Verrostete Nadel"]}]}
]};

PI_GTEXT["miniatur-soeldner"] = { schluessel:"Klein · Krabbelig · Elite", herzen:[["Miniatur-Söldner","♥♥•♥♥"]], abschnitte:[
 {h:"Überblick", b:[
  "Irgendwann auf der Reise eines Käfers fragt er sich unweigerlich, was für ihn das Beste im Leben ist. Ein flinkes Ross? Ein Falke am Handgelenk? Eher nicht, denn das eine ist unmöglich riesig und das andere würde dich fressen, sobald es dich ansieht. Nein, für manche Käfer ist die Antwort beunruhigend simpel – ein bisschen gutes altmodisches Zerquetschen. Am liebsten gegen Bezahlung.",
  "Miniatur-Söldner sind Käfer, die das Kämpfen ernst nehmen und sich zu kleinen Gruppen zusammenschließen, die eine bestimmte Dienstleistung (winzige Gewalt) für den anspruchsvollen Kunden (jeden, der sie sich leisten kann) anbieten."]},
 {h:"Anzeichen", b:[{t:"ul",x:[
  "Eine verdächtige Aura der Kompetenz, selten in der krabbeligen Welt.",
  "Eine Käferbande, die ein bisschen zu schwer mit Waffen beladen ist.",
  "Der Anblick einer wertvollen Ressource, die den Besitzer wechselt, bevor sich viele Augenpaare in deine Richtung drehen."]}]},
 {h:"Verhalten", b:[{t:"ul",x:[
  "Für Geld kämpfen. Warum es beschönigen?",
  "Aufträge mit maximaler Effektivität erledigen.",
  "Zwischen den Jobs zechen und prahlen."]}]},
 {h:"Teile & Züge", b:[{t:"dl",x:[
  ["Derwisch-Angriff (Hauen/Schlitzen/Beißen 2)","So viele winzige Waffen! Wann immer ein vom Derwisch-Angriff getroffener Käfer als Teil seiner Reaktion ein Desaster würfelt, heilt der Söldner, der den Zug macht, ein einzelnes Herz."],
  ["Spott (Prahlen 1)","Söldner sind im Spotten fast so gut ausgebildet wie im Kämpfen. Zusätzlich zum Schaden eines erfolgreichen Spottzugs wird auch die Stimmung des getroffenen Käfers ins Negative gezogen."],
  ["Der Spezialzug (Hauen/Schlitzen/Beißen 4)","Einmal pro Szene kann ein einzelner Miniatur-Söldner „Den Spezialzug“ vollführen, einen Angriff, der über viele, viele Wochen heimlich geübt und verfeinert wurde. Die genaue Art und das Aussehen des Spezialzugs liegen beim Weber, aber der heftige Schaden sollte genügen, damit alle anderen zumindest einen Moment innehalten und starren."],
  ["Taktische Umgruppierung (–)","Wenn ein Söldner gleich von einem Angriff getroffen würde, kann ein anderer Söldner einspringen und seinen Platz einnehmen, indem er eines seiner eigenen Herzen markiert. So nimmt der zweite Söldner stattdessen den eingehenden Schaden. *Übertreibe es nicht damit – es wird die Spieler wahrscheinlich nerven, wenn es mehr als ein paar Mal passiert.*"],
  ["Stückwerk-Rüstung (–)","Das Allerlei, das Miniatur-Söldner sammeln und tragen, verleiht ihnen einen Panzer-Abzug von 1 gegen alle Angriffe mit Hauen, Beißen, Schlitzen und Brutzeln."]]}]},
 {h:"Abwehr", b:[{t:"ul",x:[
  "Resistent gegen Erschrecken und Schlitzen, denn Rüstung hilft, und Bezahlung wiegt meist schwerer als Furcht.",
  "Schwach gegen Prahlen, denn Respekt muss man sich verdienen, aber Söldner *lieben* eine gute Show."]}]},
 {h:"Brüche", b:[{t:"ul",x:["Ein paar Beleidigungen schleudern / Eine winzige Waffe verlieren / Lasst uns hier zu einer neuen Vereinbarung kommen / Mehr Ärger, als es wert ist"]}]},
 {h:"Zum Mitnehmen", b:[{t:"ul",x:[
  "Bröckchen: Vernarbter Panzer, Söldnerehre",
  "Krimskrams: Lohn von einem alten Job, Winzige Axt, Winzige Klinge, Winzige Schleuder, Rüstungsplatte, Skizze einer fernen Liebsten, Zerschlagene Flöte, Geschnitzte Figur"]}]},
 {h:"Spezialisten-Macken", b:[
  "Wenn du deiner Begegnung mit Miniatur-Söldnern etwas Würze geben willst, kannst du jedem Söldner eine zusätzliche Fähigkeit aus der folgenden Liste geben, die jeweils einen anderen Söldnerkäfer-Typ darstellt. Für noch mehr Abwechslung füge den Leisten der Söldner, die eine größere Bedrohung darstellen sollen, ein oder zwei Herzen (oder sogar einen zusätzlichen Bruch) hinzu.",
  {t:"dl",x:[
   ["Gottesanbeterin-Klingenmeister (Schlitzen 3)","Wenn du einen Zug des Gottesanbeterin-Klingenmeisters machst, ziele auf zwei Käfer gleichzeitig und lass jeden einen Reaktionswurf machen. Nimm das schlechtere der beiden Wurfergebnisse und wende es für Schaden und Effekte bei beiden an!"],
   ["Rollassel-Cowboy (Hauen 2)","Wenn du einen Zug des Rollassel-Cowboys machst, ziele auf einen Käfer in beliebiger Entfernung, den der Cowboy sehen kann, und verhänge einen Tempo-Abzug von 2 auf den Reaktionswurf."],
   ["Rauchende Schnecke (Brutzeln 3 / Prahlen 1)","Wenn du einen Zug der Rauchenden Schnecke machst, ziele entweder auf einen einzelnen Käfer mit einem Treffer, der Brutzeln 3 verursacht, oder verursache bei allen nahen Käfern, die atmen können (und nicht die Luft anhalten), 1 automatischen Prahlschaden. *Ein Söldner mit der Macke der Rauchenden Schnecke wäre eine hervorragende Wahl für zusätzliche Herzen und Leistenbrüche.*"],
   ["Hundertfüßler-Boxer (–)","Was ist schlimmer als ein großer Schlag? Hundert winzige Schläge, vermutlich. Alle Angriffe auf einen Hundertfüßler-Boxer oder einen anderen Miniatur-Söldner in seiner Nähe behandeln Triumphe als Konflikte (er fängt alle möglichen eingehenden Hiebe ab und lenkt sie ab)."],
   ["Herkules-Held (–)","Manche Käfer sind zu stolz zum Aufgeben, andere einfach zu dickköpfig. Dieser käferthematische Held verhängt einen Härte-Abzug von 2 auf alle eingehenden Anfreunden-Aktionen, nicht aus geistiger Stärke, sondern aus völligem Unverständnis (sie sind die „orangen Katzen“ der krabbeligen Welt)."]]}]}
]};
})();
