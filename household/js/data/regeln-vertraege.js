/* Regeln › Verträge (Grundbuch S. 129–150): Erbverträge, Persönliche Verträge, Schreckliche Schreckliche Dinge, Willkommensverträge. Deutsche Übersetzung.
   Spielbegriffe englisch: Zugeständnis, Gegenleistung, Schreckliche Schreckliche Dinge (TTT), Erb-/Persönliche/Willkommensverträge, Sitzung, Hilfe, Erschwernis, Freier Neuwurf, Aussteigen, Kritisches Kästchen. Die Verse der Argo-Zitate sind nicht übernommen. */
(function(){
var H = window.HH_TEXT = window.HH_TEXT || {};
function bild(n, w){ return {t: "bild", s: "grundbuch-" + n, w: w}; }
function K(h, b){ return {t: "box", h: h, b: b}; }

/* ---------- Erbverträge ---------- */
var A1 = [
 {id: "hereditary", t: "Erbverträge", p: 131, b: [
  "Zuerst müssen wir über die verschiedenen Arten von Verträgen sprechen:",
  {t: "ul", x: [
   "*Erbverträge* sind uralte Verträge, die die Household-Völker vor langer Zeit abgeschlossen haben.",
   "*Persönliche Verträge* werden zwischen einer einzelnen Figur und einer Macht geschlossen.",
   "*Willkommensverträge* sind nötig, um Zutritt zu bestimmten Orten zu erhalten."]},
  "Erbverträge binden jeden Little Folk an eine große oder uralte Macht. Jede Figur kann sich je nach Herkunftsvolk auf einen solchen Vertrag stützen. Deshalb können Boggarts von Geburt an auf *Dear to the Hearth* zählen, und alle Undines wissen, dass sie *Out of the Drain* stammen.",
  "Der Volksglaube sagt, Erbverträge würden immer von der Mutter vererbt. Das Kind eines Sluagh-Vaters und einer Fairy-Mutter kommt demnach mit dem Starchild-Vertrag zur Welt und gilt als Fairy. Das ist jedoch nur eine Verallgemeinerung mit bekannten Ausnahmen.",
  "*Persönliche Verträge* sind persönliche Abmachungen mit einer Macht. Sie sind äußerst selten und verleihen übernatürliche Kräfte. Wer einen solchen Vertrag eingehen will, braucht eine gewisse *vertragliche Macht*: Er muss etwas besitzen, das die Macht begehrt, oder mutig genug sein, um ihre Aufmerksamkeit zu erregen.",
  "*Willkommensverträge* öffnen Orte, die man ohne die Gunst einer Macht nicht betreten oder überleben könnte. Ein Beispiel ist die Fireplace Hollow, wo eine Figur ohne *Kindled-Welcome-Vertrag* sofort in Flammen aufginge. Dafür braucht man die Erlaubnis des Besitzers und muss eine lange Liste von Verhaltensregeln befolgen.",
  {t: "h", x: "Die Erbverträge"},
  {t: "ul", x: [
   "*Starchild*: Vertrag der Faeries",
   "*Dear to the Hearth*: Vertrag der Boggarts",
   "*Out of the Draft*, *Out of the Drain* oder *Out of the Spark*: Vertrag der Sprites",
   "*Revenant from Farbeyond*: Vertrag der Sluagh"]},
  {t: "h", x: "Commitment"},
  "Jedes Littling ist an seine Zusagen gebunden, solange sie frei gegeben wurden. Eine Zusage ist nichtig, wenn sie durch Täuschung oder Gewalt zustande kam. Eine Fairy, die zur Unterschrift gezwungen wurde, muss sie nicht halten und riskiert dafür keine TTT.",
  "Druck und List können eine Figur dennoch in unangenehme Lagen bringen. Ein Boggart, der unter Druck sein Wort gibt, oder ein Sprite, der Geld dafür annimmt, ein „Insekt“ zu transportieren, das sich später als Spurred Centipede entpuppt, müssen ihre Zusage halten, wenn sie TTT vermeiden wollen.",
  "Es gilt außerdem als schwer unhöflich, jemanden immer wieder zu einer Unterschrift oder einem Versprechen zu drängen. Das tut man einfach nicht!"
 ]},
 {id: "starchild", t: "Starchild", p: 132, b: [
  "Die Faeries bildeten einst eines der vier Folk, als der Master das House zu bauen begann. Sie suchten Zuflucht in einem großen Baum im Garten, den sie Dendronaos nannten, den Tempelbaum. Darin errichteten sie eine weitläufige Stadt und zeigten dem grünen Gastgeber stets Respekt.",
  "Getrennt von anderen Littlings wurden die Faeries oft Opfer wilder Insekten und Eichhörnchen und leichte Beute für Greifvögel. Ohne jemanden, an den sie sich wenden konnten, schlossen sie einen Vertrag mit den Sternen. Die Faeries erhielten ein Paar schneller Flügel, mit denen sie ihren Feinden entkommen und sich wehren konnten. Im Gegenzug sollte jede von ihnen ihren Namen aussprechen, damit er am Firmament eingemeißelt werde.",
  bild("s133-iiii-conditions-decorum", 240),
  K("Fairy Wings", [
   "Gelb wie der Sonnenuntergang, blau wie das Wasser oder violett wie die Blüten: Fairy-Flügel sind immer schön und immer elegant. Ihre durchsichtige Chitinmembran ist von Adern durchzogen, die die Geschichte der Familie erzählen. Diese Muster werden von Eltern an Kinder weitergegeben, und manche Experten erkennen die Abstammung einer Fairy allein an den Flügeln.",
   "Verletzte Flügel heilen in wenigen Tagen. Vollständig abgetrennte Flügel wachsen jedoch nicht von selbst nach. Der Gelehrte Auguste Fabergé fand eine Lösung: In seinen Kliniken auf dem Mount Guignol und in Glasburg verwendet er Kokons aus Kristallfäden. Darin fallen Faeries für zwei bis drei Tage in einen Starrezustand, danach sind die Flügel vollständig regeneriert. Die einzige Nebenwirkung: Die Flügel verändern manchmal ihre Farbe, aus unbekannten Gründen."]),
  K("Zugeständnis: Wings", [
   "Faeries können dank ihrer Flügel mühelos in die Luft steigen und Orte erreichen, die sonst unerreichbar wären. Beim Aufstieg bewegen sie sich so schnell wie zu Fuß, beim waagerechten Flug schneller, sogar so schnell wie beim Laufen.",
   "In der Luft erleiden sie −1 auf Würfe, um Kugeln oder anderen Geschossen auszuweichen. Das Summen ihrer Flügel erschwert ihnen allerdings jedes Schleichen (Erschwernis)."]),
  K("Gegenleistung: Name", [
   "Alle Faeries halten die Vereinbarungen, die sie mit ihrem Namen unterschreiben. Scheitern sie daran, folgen unweigerlich Schreckliche Schreckliche Dinge."])
 ]},
 {id: "dear-to-the-hearth", t: "Dear to the Hearth", p: 134, b: [
  "Als der Master das House zu bauen begann, teilten sich die Littlings in vier Folk. Die Boggarts sahen, wie groß der Master war, und beschlossen, nach dem Bau bei ihm zu wohnen. Um für seine Gastfreundschaft zu danken, arbeiteten diese gutmütigen Littlings treu für die Familie.",
  "Die Boggarts waren aber nicht stark genug, um die großen Spinnen fernzuhalten, die sich in den Wänden verbargen. Ihre Nächte verbrachten sie in Angst. Ohne jemanden, an den sie sich wenden konnten, wandten sie sich an das Hausfeuer, das in der Fireplace Hollow kräftig brannte, und schlossen einen uralten Pakt. Die Boggarts erhielten die Gabe des Wachsens und die Stärke von hundert Littlings. Im Gegenzug mussten sie allen Niedertracht und Unehrlichkeit abschwören, die einer Familie unwürdig wäre, die sie an ihrem Herd aufgenommen hatte.",
  bild("s135-v-hereditary-contracts", 240),
  K("Judd in the Jug", [
   "Die Fähigkeit der Boggarts, für kurze Zeit Größe und Muskelmasse zu verdoppeln, heißt im Volksmund „going juggernaut“. Rätsel gibt der Begriff den Gelehrten bis heute auf. Die mündliche Überlieferung erzählt dazu eine Geschichte aus der Zeit vor dem Verschwinden des Masters.",
   "Damals lebte ein neugieriger Sprite, vielleicht sogar ein richtiger Wissenschaftler, der Littlings und ihre Verträge erforschte. Um einen Boggart aus der Nähe zu untersuchen, lockte er ihn mit einem Vorwand in die Kitchen und fing ihn unter einem großen Glaskrug ein. Der arme Gefangene war ein guter Littling namens Judd. Überwältigt von der Lage rief er die Kraft seines Erbvertrags an und „ging juggernaut“. Er stieß den Krug an den Rand, sodass er krachend zu Boden fiel. (Der pflichtbewusste Boggart räumte danach alle Scherben auf.)",
   "So entstand die Legende von Judd, der in der Jug juggernaut ging!"]),
  K("Zugeständnis: Juggernaut", [
   "Einmal pro Sitzung können Boggarts juggernaut gehen und dabei ihre Größe, Stärke und Widerstandskraft drastisch steigern. Sie können bis auf doppelte Größe anwachsen, und ihr Körper zeigt Muskeln, so hart wie Münzmetall.",
   "Juggernaut ist hilfreich (Hilfe) für alle Würfe im Feld Krieg, aber hinderlich (Erschwernis) für jede andere Handlung. Im Kampf haben juggernaut-Boggarts immer +1 auf alle Aktions- und Reaktionswürfe und ignorieren alle Zustände.",
   "Beim Juggernaut verlieren Boggarts automatisch eine Stufe Anstand, weil sie kostbare Kleidung und Rüstung zerreißen. Sie bleiben höchstens fünf Turns im Juggernaut, können den Zustand aber jederzeit freiwillig beenden. Danach erhalten sie den Zustand Erschöpft, falls sie ihn nicht schon haben."]),
  K("Gegenleistung: Word of Honor", [
   "Boggarts halten immer ihr Ehrenwort. Brechen sie ein ausdrücklich gegebenes Versprechen, fallen sie unweigerlich Schreckliche Schreckliche Dinge zum Opfer."])
 ]},
 {id: "spark-drain-draft", t: "Out of the Spark, Drain & Draft", p: 136, b: [
  "Die Sprites beschlossen, im Schatten des großen Masters zu leben, versteckt in den Wänden des Hauses. Gezwungen, aus der Speisekammer zu stehlen und sich ständig zu bewegen, um zu überleben, wandten sie sich an das House selbst und seine Mächte.",
  "Manche gingen zum Feuer in der Fireplace Hollow, erhielten die Launenhaftigkeit des Spark und die Gabe der Erleuchtung. Sie wurden zu den *Salamanders*. Andere gingen zum Wasser in den tiefen Rohren, erhielten die Schwere des Drain und die Gabe, Wasser zu speichern. Sie wurden zu den *Undines*. Wieder andere gingen zur Luft im Great Window, erhielten die Leichtigkeit des Draft und die Gabe des Aufblähens. Sie wurden zu den *Sylphs*. Alle mussten dafür das Herumpfuschen aufgeben.",
  bild("s137-v-hereditary-contracts", 240),
  K("Gegenleistung: Münze (alle Sprites)", [
   "Sprites, ob Salamander, Undine oder Sylph, halten alles, was sie nach einer freien, ordentlichen Verhandlung mit Bezahlung zusagen. Scheitern sie daran, folgen unweigerlich Schreckliche Schreckliche Dinge. Alle drei teilen also denselben Gegenleistung, besitzen aber unterschiedliche Zugeständnisse."]),
  K("Out of the Spark: Enlightenment (Salamander)", [
   "Salamander wissen, dass sie *Out of the Spark* stammen, dank des Vertrags mit dem Feuer. Ihre Hände, Füße und Nasen leuchten von innen. Solange sie nicht Gebrochen sind, können sie diese Körperteile wie kalte, nicht verlöschende Fackeln einsetzen.",
   "Gelegentlich kommt ihnen eine plötzliche Eingebung, die ihnen eine instinktive Ahnung von bevorstehenden Ereignissen gibt. Deshalb können Salamander einmal pro Sitzung ihre Erleuchtung anrufen und einen beliebigen Aktionswurf mit +1 wiederholen."]),
  K("Out of the Drain: Water Retention (Undine)", [
   "Undines wissen, dass sie *Out of the Drain* stammen, und fühlen sich dem Wasser verbunden. Ihre glänzenden, geschwollenen Körper geben ihnen eine natürliche Widerstandskraft, die hilfreich (Hilfe) ist, wenn sie stürzen.",
   "Außerdem können Undines Wasser speichern, sodass sie fast wie ein Schwamm große Mengen Flüssigkeit im Körper halten. Deshalb können sie einmal pro Sitzung, sobald das Kritische Kästchen gefüllt ist, überschüssigen Stress aufnehmen, ohne weitere Kästchen zu füllen. Dabei schwitzen sie stark und verlieren eine Stufe Anstand.",
   "Ein Beispiel: Eine Undine, die normalerweise 9 Stress erleiden würde, kann sich entscheiden, nur 8 zu erleiden, bis das Kritische Kästchen gefüllt ist."]),
  K("Out of the Draft: Bloating (Sylph)", [
   "Sylphs kamen *Out of the Draft* und teilen seine sagenhafte Leichtigkeit. Ihre Knochen sind hohl und lang. Sie sind so leicht, dass sie keine Fußspuren hinterlassen, nicht einmal im Staub. Nur wenn eine Sylph eine schwere Last trägt, drückt es sie zu Boden.",
   "Außerdem können Sylphs ihr Gabe des Aufblähens nutzen und so viel Luft schlucken, dass sie wie ein Ballon anschwellen. Einmal pro Sitzung können sie sich aufblähen und erhalten dann Hilfe bei allen Würfen auf Heimlichkeit, Feingefühl oder Gleichgewicht. Das Aufblähen hält bis zu fünf aufeinanderfolgende Turns. Um aufgebläht zu bleiben, müssen sie die Luft anhalten und können dabei nicht sprechen."])
 ]},
 {id: "revenant-from-farbeyond", t: "Revenant from Farbeyond", p: 138, b: [
  "Die Sluagh verließen einst ihre angestammte Heimat und machten sich auf eine lange Pilgerreise zu einem fernen, geheimnisvollen Ort namens Farbeyond. Dort wurden sie von allerlei Leiden und Krankheiten geplagt und begannen langsam zu verrotten, wie eine Pflanze, die ihre Wurzeln verloren hat. Ohne jemanden, an den sie sich wenden konnten, riefen sie laut die Mächte von Farbeyond an, deren Namen und Gestalt im House niemandem bekannt sind.",
  "Wer nach Dasewer im Basement reist, stößt früher oder später auf ein berühmtes Getränk, das die Aufmerksamkeit unvorsichtiger Touristen weckt: XXX, blassgrün und abschreckend genug, dass selbst der leichtsinnigste Littling die Finger davon lässt. Für fast jedes Littling ist es praktisch Gift. Außer für die Sluagh, die dank ihrer besonderen Heilkraft unendlich viel davon trinken können.",
  "Als Geschenk erhielten alle Sluagh neues Blut in den Adern, dunkel und dicht wie Melasse, langsam und zäh wie eine sternlose Nacht. Dafür mussten sie alle unerledigten Angelegenheiten aufgeben. Es gibt sogar eine „konzentrierte“ Version des Getränks, eine dunkelpurpurne Flüssigkeit namens XXXXX. Sie ist im wörtlichsten Sinne Gift.",
  bild("s139-v-hereditary-contracts", 240),
  "Die Gelehrten des House zerbrechen sich bis heute den Kopf, wie die Sluagh das trinken können, ohne sofort tot umzufallen. Die Sluagh antworten darauf meist mit einem Toast!",
  K("Zugeständnis: Unbleeding", [
   "Das dunkle, dichte Blut der Sluagh hat erstaunliche Heilkräfte und macht sie fähig, selbst tödliche Wunden mit Leichtigkeit abzuschütteln. Deshalb haben Sluagh immer Hilfe, wenn sie Krankheit oder Betrunkenheit widerstehen müssen.",
   "Außerdem können Sluagh einmal pro Sitzung ihre extrem schnelle Regeneration nutzen, um den Zustand Verletzt, Vergiftet, Krank oder Betrunken zu vermeiden oder um Stress zu vermeiden, der aus einem Angriff oder einer anderen körperlichen Gefahr entsteht, etwa einem Sturz aus der Höhe oder einem heftigen Aufprall."]),
  K("Gegenleistung: Debt", [
   "Nimmt ein Sluagh eine Wette an und verliert, muss er die Schuld begleichen. Scheitert er daran, folgen unweigerlich Schreckliche Schreckliche Dinge."])
 ]},
 {id: "forces", t: "Die Mächte des Household", p: 140, b: [
  "Air, Water und Fire beherrschen das House, seit der Master verschwunden ist. Wer von ihnen der älteste und damit mächtigste ist, werden wir wohl nie sicher wissen. Es gibt aber einige Theorien.",
  {t: "h", x: "Die Theorie des Feuers"},
  "Nach einigen brannte das Feuer im Kamin, als der Master verschwand. Seine Flammen waren stark, seine Glut hungrig, und es herrschte drei Tage und drei Nächte ungestört. Dann begann es zu ersticken. Ohne die Familie, die Türen und Fenster öffnete, fehlte der Sauerstoff. Am vierten Tag hustete das Feuer dunklen, wabernden Rauch. Da schickte es Soot, seinen Diener, den Kamin hinauf. Der schwarze Gesandte suchte die Air auf, die einen Vertrag mit dem Feuer schloss und ins House zurückkehrte.",
  "Doch die Air wurde krank. Sie ging zum Glutbett, in dem das Feuer ruhte, und bat es, seinen Hunger zu zügeln. Die Air war rau, trocken und fast erschöpft, und das Feuer fürchtete um sein Leben. Schließlich musste es einen Vertrag mit dem Water schließen, damit es die Air heilen konnte. Man sagt, es habe es zuerst mit Öl, Tinte und sogar Wein versucht, bevor es sich dazu herabließ.",
  {t: "h", x: "Die Theorie des Wassers"},
  "Anderen zufolge blieb das Water standhaft und geduldig in den Rohren und Abflüssen, und es hielt das House mit feuchten Fingern. Doch das Water war Herrscher und Gefangener zugleich, eingeschlossen im kalten Metall und in den Wänden seines Reiches. Es schickte den Schimmel, seinen Diener, um das Feuer zu suchen, und schloss einen Vertrag mit ihm. Die Hitze des Feuers machte das Water leicht und verwandelte es in einen dünnen Nebel, feiner als jeder Tautropfen, der in die Freiheit schweben konnte.",
  "Doch das Water liebt alles, was tief und niedrig ist, alles, was niederdrückt. In seiner Dampfform klebte es an der Decke und rief die Air. Die Air ließ es ein und kühlte dafür das House, damit das Water wieder fließen konnte und sich dem Feuer widersetzte, das es oben gefangen halten wollte.",
  {t: "h", x: "Die Theorie der Luft"},
  "Manche sagen, die Air sei der erste wahre Bewohner und Herr des House gewesen. Der Master hatte das House für Water und Feuer geschaffen, doch zu seinen Bedingungen. Ihre Anwesenheit war willkommen, aber nur begrenzt und nach seinen Launen. Die Air war dagegen kein Gast, sondern eine Bewohnerin. Keine Zeit, kein Ort und kein Geheimnis blieben ihr verborgen.",
  "Als das House leer stand, übernahm die Air es als neue Herrin. Sie strich sanft über jede Erinnerung in den Zimmern und Fluren und fegte sie im Herbst mit warmen Blättern hinweg. Man erzählt auch, sie habe Water und Feuer Verträge und Unterkunft gewährt, vielleicht aus Erinnerung an die alten Zeiten, vielleicht aus Bequemlichkeit.",
  {t: "h", x: "Die Theorie des Staubs"},
  "Wer lange genug lebt, hört alle drei Geschichten, und irgendwann fragt man die richtigen Leute nach mehr. Vielleicht die falschen? Vielleicht einfach seltsamere Leute. Man hat mir einmal erzählt, Water, Air und Fire seien alle gleich alte Mächte und alle durch einen Vertrag an eine übergeordnete Macht gebunden.",
  "Als der Master verschwand, so sagt man, blieb das House leer. Der Kamin war verascht, die Rohre trocken, die Fenster verschlossen. Keine Macht konnte die verlassenen Räume betreten, und das Leben selbst hatte sie verlassen. Dann kam er: der Staub. Aus dem Nichts, unfassbar. Zuerst fein und zart, dann dicht. Die Elfenbeintasten, die Kristallgläser, die Standspiegel und das verlassene Silber, alles, was einst glänzte, wurde trüb und bedeckt von der grauen Umarmung der neuen Herrin des House.",
  "Man kann mich fragen, was ich glaube. Meine Antwort: Wenn niemand die Wahrheit kennen kann, ist jede Geschichte so gut wie die nächste, und vier Geschichten sind besser als eine. Wer alles glaubt, irrt vielleicht. Wer gar nichts glaubt, kann unmöglich recht haben."
 ]}
];

/* ---------- Persönliche Verträge ---------- */
var A2 = [
 {id: "personal", t: "Persönliche Verträge", p: 143, b: [
  "Ein Persönlicher Vertrag ist eine Abmachung, die direkt mit einer Macht des Household oder einem ihrer Stellvertreter geschlossen wird. Diese wundersamen Vereinbarungen, die übernatürliche Zugeständnisse verleihen, sind so selten, dass die meisten Littlings ihr ganzes Leben lang nie davon hören.",
  "Persönliche Verträge hinterlassen einen unauslöschlichen Eindruck. Sie erlegen äußerst harte Gegenleistungen auf und können außerdem das Verhalten, ja sogar den Geist eines Littling verändern und seine Natur umformen. Wer einen *Neverheard Vertrag* eingeht, erhält größtmögliche Verschwiegenheit, verliert aber die Fähigkeit zu singen und zu schreien. Wer einen *Vainglory Vertrag* eingeht, wirkt stets unerklärlich elegant, wird aber zugleich grob und wettbewerbsorientiert.",
  bild("s142-v-hereditary-contracts", 300),
  {t: "h", x: "Einen Persönlichen Vertrag abschließen"},
  "Hat man das, was man *vertragliche Macht* nennt, also etwas, das eine Macht oder einer ihrer Stellvertreter begehrt, kann man für einen Persönlichen Vertrag auserwählt werden. Jeder dieser Verträge kommt unter anderen Umständen zustande. Vielleicht spricht einen ein geheimnisvoller Fremder an, vielleicht hört man eine tiefe Stimme im Wind oder im Echo der Rohre. Manche behaupten sogar, sie hätten in einem Traum einen Vertrag geschlossen. Die meisten sind sich jedoch einig, dass sich die Mächte nur in den verzweifeltsten Situationen zeigen.",
  "Eine andere Möglichkeit ist die Begegnung mit einem der sagenhaften Wesen, die in den entlegensten Ecken des House hausen, wie der Sunset Devil oder Bismilla, die Riesenhundertfüßerin. Diese einzigartigen Exemplare verdanken ihre Größe einer oder mehreren Mächten und handeln zugleich als deren Stellvertreter. Wurden sie besiegt oder gerettet, sprechen sie mit tiefer, zärtlicher Stimme zum Herzen der Littlings und bieten jedem von ihnen einen Vertrag an, im Austausch für sein Leben. In seltenen, fast unbekannten Fällen verschenken sie einen Vertrag auch als Zeichen der Dankbarkeit.",
  "Schließlich gibt es im ganzen House verborgen die *Argo's Verträge*, kostbare legendäre Artefakte, in denen die Macht eines Vertrags gebannt ist.",
  {t: "h", x: "Argos legendäre Verträge"},
  "Argo der Bürokrat war der beste und größte Gelehrte des Household, der sich je mit Verträgen beschäftigte. Manche sagen, der Sprite habe vor seinem geheimnisvollen Verschwinden die Macht der Verträge beherrscht und sie auf Papier gebannt.",
  "So absurd es klingt: Diese Verträge sollen noch heute im ganzen House zu finden sein, sorgfältig gefaltet in staubigen Büchern oder aufgerollt wie alte Schriftrollen. Sie erscheinen dem Leser in seiner Muttersprache und reden manchmal in seinem Kopf wie lockende Echos eines Versprechens.",
  "Um diese stellvertretenden Verträge zu unterzeichnen, muss ein Littling sie vielleicht zerreißen oder sogar essen. Meist passen sie sich jedoch dem Erbvertrag des Littling an, das sie in den Händen hält. Ist der Leser eine Fairy, bekommen sie vielleicht eine gepunktete Linie zum Unterschreiben. Für einen Sprite verstecken sie einen Kristall im Umschlag. Einen Boggart bitten sie um sein Ehrenwort, und einen Sluagh fragen sie, ob er sein Leben verwetten würde. Dann zerfallen sie zu Asche.",
  "Wer glaubt, ein Stück Papier könne einem Littling den Reichtum eines *Goldthirst Vertrag* oder die Heimlichkeit eines *Neverheard Vertrag* verleihen, sollte bedenken, dass derjenige, der sie abschrieb, kein gewöhnlicher Littling war. Argo hörte den Geschichten des Spark zu, tauchte in die Tiefen des Drain hinab, flüsterte mit dem Draft und speiste an der grimmigen Tafel des Spinnenhofs. Und schließlich blickte er in die sengende Dunkelheit des False Fire.",
  "Das sollte genügen, um zu akzeptieren, dass es Geheimnisse gibt, die wir noch nicht verstehen."
 ]},
 {id: "wallstrider", t: "Wallstrider", p: 144, b: [
  "Der Wallstrider Vertrag ist eine Abmachung zwischen einem Littling und den Wänden. Angeboten werden kann er vom Sunset Devil, einer furchterregenden Jagdspinne, oder von anderen Stellvertretern der Wand.",
  K("Zugeständnis: Spider-step", [
   "Du kannst auf jeder senkrechten Fläche gehen und laufen, als wäre sie ein Boden. Du kannst außerdem auf Käfern und Schnecken reiten, die an einer Wand hochklettern, ohne aus dem Sattel geworfen zu werden.",
   "Du läufst zwar nie Gefahr zu fallen, das gilt aber nicht für deine Kleidung oder deine Besitztümer. Pass auf deinen Hut auf!"]),
  K("Gegenleistung: Left-footed", [
   "Du verlierst den richtigen Blick auf deine Umgebung und hast Mühe, den Boden unter den Füßen zu behalten.",
   "Beim Treppensteigen musst du immer mit dem linken Fuß beginnen. Sagst du es nicht ausdrücklich, würfelt die Spielleitung mit einem Zahlenwürfel, welcher Fuß benutzt wurde. Scheiterst du daran, folgen unweigerlich Schreckliche Schreckliche Dinge.",
   "Um diese TTT zu beenden, musst du dieselbe Treppe rückwärts wieder hinuntergehen und die letzte Stufe zerbrechen."])
 ]},
 {id: "goldthirst", t: "Goldthirst", p: 144, b: [
  "Der Goldthirst Vertrag ist eine Abmachung zwischen einem Littling und dem Geld. Angeboten werden kann er von Mammon, der Weberin des goldenen Netzes in Rosevault, oder von anderen Stellvertretern des Geldes.",
  K("Zugeständnis: Profit", [
   "Du beginnst unerklärlicherweise, Geld und Reichtum anzuhäufen. Immer wenn du Münzen erhältst, geschieht zugleich ein unerwartetes, glückliches Ereignis, und du erhältst die doppelte Menge.",
   "Das gilt für alle Münzen, die du findest, verdienst, stiehlst oder zu Beginn eines Kapitel erhältst, nicht aber für geliehenes Geld."]),
  K("Gegenleistung: Expensive Taste", [
   "Du bist verschwenderisch und gibst dein Vermögen aus, um jede Laune zu befriedigen. Zugleich bist du gierig und geizig, wenn es um andere geht. Keine Macht im House könnte dich dazu bringen, Geld zu verleihen, geschweige denn zu verschenken.",
   "Du musst jede Nacht einen Münze hinunterschlucken. Scheiterst du daran, folgen unweigerlich Schreckliche Schreckliche Dinge.",
   "Um diese TTT zu beenden, musst du 33 Münzen in einer einzigen Mahlzeit essen."])
 ]},
 {id: "neverheard", t: "Neverheard", p: 145, b: [
  "Der Neverheard Vertrag ist eine Abmachung zwischen einem Littling und der Stille. Angeboten werden kann er vom Fog Giant, der netzwerfenden Spinne, die im Dreadwood umgeht, oder von anderen Stellvertretern der Stille.",
  K("Zugeständnis: Quiet", [
   "Deine Schritte und Bewegungen sind ungewöhnlich leise. Deine Kleidung raschelt nicht, und deine Stiefel klappern nicht, selbst wenn du auf Holz trittst.",
   "Du erhältst großes Hilfe, wenn du dich versteckst oder dich unbemerkt bewegst, ebenso bei Überraschungsangriffen auf ahnungslose Gegner."]),
  K("Gegenleistung: Muffled", [
   "Du kannst nicht mehr schreien oder singen. Deine Stimme klingt immer wie ein leises Murmeln oder Flüstern. Du musst dir alle Mühe geben, keinen Lärm zu machen, etwa beim Spielen eines Instruments, beim Schießen oder beim Zerbrechen von Glas. Scheiterst du daran, folgen unweigerlich Schreckliche Schreckliche Dinge.",
   "Um diese TTT zu beenden, musst du zwei Tage und zwei Nächte völlig schweigen."])
 ]},
 {id: "vainglory", t: "Vainglory", p: 145, b: [
  "Der Vainglory Vertrag ist eine Abmachung zwischen einem Littling und dem Spiegel. Angeboten werden kann er von Bismilla, der Riesenhundertfüßerin, die durch die Inbetweens des Realm kriecht, oder von anderen Stellvertretern des Spiegels.",
  K("Zugeständnis: Sophistication", [
   "Du bist stets das Bild verfeinerter Eleganz. Du hast einen natürlichen Sinn für Stil und Anmut, den niemand übertrifft.",
   "Dein Anstand fällt nie unter Ordentlich, und es ist nie hinderlich (Erschwernis). Du wirst automatisch Elegant, wenn du elegante Kleidung trägst, und Pompös bei Galakleidung. Außerdem verlierst du nie Anstand als Folge eines Misserfolgs, du wirst nie schmutzig und erhältst nie den Zustand Lächerlich."]),
  K("Gegenleistung: Perfection", [
   "Du musst immer der Beste sein und vergleichst dich in allen Lebensbereichen mit anderen. Du hörst nie auf die Vorschläge oder Meinungen anderer und glaubst immer, es besser zu wissen.",
   "Du gibst dir alle Mühe, nie um Hilfe zu bitten, und benutzt stets neue, verfeinerte Waffen und Gegenstände. Scheiterst du daran, folgen unweigerlich Schreckliche Schreckliche Dinge.",
   "Um diese TTT zu beenden, musst du eine Nacht mit einem Littling von hoher Geburt verbringen."])
 ]}
];

/* ---------- Schreckliche Schreckliche Dinge ---------- */
var A3 = [
 {id: "ttt", t: "Schreckliche Schreckliche Dinge", p: 130, b: [
  "Jedes Littling kann sich auf die Macht mindestens eines Vertrags verlassen, der es an eine der Mächte des Household oder des Outhold bindet. Durch diesen Vertrag erhält es ein Zugeständnis, eine erstaunliche, fast übernatürliche Fähigkeit. Im Gegenzug verpflichtet es sich, immer eine Gegenleistung einzuhalten, ein kleines Zeichen, das es für den Wohlwillen der großen Mächte gibt.",
  "Verletzt ein Littling eine Gegenleistung, verliert es sofort das Zugeständnis des Vertrags, und zusätzlich beginnen bizarre und unglaubliche Ereignisse über es hereinzubrechen, die wir *Schreckliche Schreckliche Dinge* nennen.",
  "Jeder, der seine Seite eines Vertrags nicht hält, muss früher oder später eine Reihe von Schreckliche Schreckliche Dinge über sich ergehen lassen, die ich nicht einmal meinem schlimmsten Feind wünschen würde. Manche wurden auf einem großen Galaball von einer Jagdspinne angegriffen. Anderen zerfielen Waffe und Rüstung mitten im Kampf. Wieder andere verstummten mitten in einer wichtigen Rede oder wurden auf der Flucht gelähmt. Wer weiß, welche absurden Absurditäten ich mir noch nicht einmal vorstellen kann.",
  {t: "h", x: "Warum sie so heißen"},
  "Wenn Kinder in der Schule zum ersten Mal von Verträgen und Gegenleistungen hören, fragen sie ausnahmslos einen armen Lehrer: „Aber was passiert, wenn ich es nicht tue?“. Eltern und Pädagogen antworten dann meist knapp: „Schreckliche Schreckliche Dinge!“, und der Ausdruck wurde bald Teil der Alltagssprache. Dazu trug auch bei, dass Argo der Bürokrat den deutlich schwerer zu merkenden Begriff „Extreme repercussions for failing to uphold contractual obligations“ vorschlug.",
  {t: "h", x: "Gesetze der Verträge"},
  {t: "ul", x: [
   "Ein Vertrag ist nur gültig, wenn er frei geschlossen wurde. Wurde er durch Täuschung oder Gewalt erzwungen, ist er nichtig und löst keine TTT aus.",
   "Jedes Littling ist an seine Zusagen gebunden, die es nach seinem Erbvertrag einhalten muss."]}
 ]},
 {id: "ttt-regeln", t: "Regeln für TTT", p: 146, b: [
  "Wer eine Gegenleistung nicht einhält, erleidet sofort eine Stufe Schreckliche Schreckliche Dinge, die seither liebevoll TTT genannt wird. Ab dann kann man sich nicht mehr auf das Zugeständnis des verletzten Vertrags verlassen, und zwar so lange, bis man es wiedergutmacht.",
  "Außerdem riskiert man in jeder Sitzung, einem lästigen oder gefährlichen Unfall zum Opfer zu fallen. So sagt das House, dass es unzufrieden mit einem ist! Es gibt fünf Stufen von TTT, jede mit einer Tabelle von Missgeschicken, und jede Stufe ist schlimmer als die vorige.",
  "Nur die Spielleitung weiß, ob und welche Schreckliche Schreckliche Dinge einem in der Sitzung widerfahren, und sie sorgt dafür, dass diese katastrophalen oder lästigen Ereignisse zu den schlimmsten Momenten der Geschichte passieren.",
  K("Beispiel: Lazarus", [
   "Lazarus hat zwei Stufen TTT. Zu Beginn der Sitzung würfelt die Spielleitung heimlich eine 1 und wählt nach Tabelle I mit einem weiteren Wurf eines der sechs Missgeschicke. Sie erhält eine 3: „Ein Pechschlag ruiniert deine Kleidung. Senke deine Stufe Anstand.“",
   "Ohne den Spielern etwas zu sagen, notiert die Spielleitung das und beginnt die Sitzung. Sobald sie den richtigen Moment für gekommen hält, beschreibt sie etwas Unerwartetes, das Lazarus' Kleidung sofort ruiniert."]),
  {t: "h", x: "TTT verschlimmern"},
  "Hast du mindestens eine Stufe TTT und erleidest in der Sitzung keine Schreckliche Schreckliche Dinge, steigt deine Stufe am Ende des Spiels um 1. Dem Trick des House zu erliegen wird immer leichter. Außerdem steigt deine Stufe TTT jedes Mal, wenn du einen Vertrag erneut verletzt, auch wenn es derselbe ist, den du schon einmal verletzt hast.",
  {t: "h", x: "TTT erleiden"},
  "Wenn du Schreckliche Schreckliche Dinge hast, würfelt die Spielleitung zu Beginn der Sitzung geheim mit einem Zahlenwürfel, um festzulegen, welche Missgeschicke dich im Spiel heimsuchen. Ist das Ergebnis höher als deine Stufe TTT, passiert nichts. Ist es gleich oder niedriger, schlägt die Spielleitung die Tabelle mit der gewürfelten Stufe auf und wählt mit einem weiteren Wurf zufällig eines der sechs Missgeschicke.",
  {t: "h", x: "TTT beenden"},
  "Die einzige Möglichkeit, Schreckliche Schreckliche Dinge zu beenden, ist die Wiedergutmachung der letzten Verletzung eines Vertrags, indem du die Verpflichtung erfüllst, die du ignoriert hast. Oder du erhältst eine Begnadigung für das, was du getan hast, oder für den Schaden, den du direkt oder indirekt angerichtet hast. Persönliche Verträge bieten außerdem kleine abergläubische Rituale, mit denen sich der Strom der TTT stoppen lässt.",
  "Hast du nur einen Vertrag verletzt, verlierst du alle angesammelten Stufen TTT, sobald du die Begnadigung des House erhältst und alles wiedergutmachst. Hast du mehr als einen Vertrag verletzt, reduziert die Wiedergutmachung eines Verstoßes deine Stufe TTT nur auf die Hälfte, abgerundet."
 ]},
 {id: "ttt-tabelle", t: "TTT-Tabelle", p: 147, b: [
  "Die fünf Stufen der Tabelle. Die Spielleitung würfelt einen der sechs Einträge aus, wenn die gewürfelte Stufe der eigenen Stufe TTT entspricht oder darunterliegt.",
  {t: "tbl", head: ["Wurf", "Stufe I"], rows: [
   ["1", "Du wirst bestohlen. Du verlierst 2 Münzen. Hast du keine, senke dein Wohlstand."],
   ["2", "Eine Gruppe lästiger Schaben greift dich im Schlaf an."],
   ["3", "Ein Pechschlag ruiniert deine Kleidung. Senke deine Stufe Anstand."],
   ["4", "Alles geht schief. Nach so vielen Rückschlägen wirst du Erschöpft."],
   ["5", "Du bist ständig gereizt. Jedes Mal, wenn du Stress abbaust, erleidest du sofort 3 Stress."],
   ["6", "Du triffst jemanden, den du früher kanntest. Er verschwendet viel deiner Zeit."]]},
  {t: "tbl", head: ["Wurf", "Stufe II"], rows: [
   ["1", "Du hast deine Schuhe oder Stiefel falsch gebunden. −1 auf einen Wurf, der mit Bewegung zu tun hat."],
   ["2", "Du hast dich erkältet oder bist verdorben. Du bist Krank."],
   ["3", "Deine Waffe steckt in der Scheide fest oder klemmt. −1 auf den ersten Wurf im Kampf."],
   ["4", "Du ziehst die feindliche Aufmerksamkeit eines Schwarms Wespen auf dich."],
   ["5", "Der Staub lässt dich im ungünstigsten Moment niesen. −1 auf einen Wurf, der mit Heimlichkeit zu tun hat."],
   ["6", "Ein missgünstiges Kind hat es auf dich abgesehen. Es lässt dich einen ganzen Tag lang nicht in Ruhe."]]},
  {t: "tbl", head: ["Wurf", "Stufe III"], rows: [
   ["1", "Eine Waffe oder ein Gegenstand rutscht dir im ungünstigsten Moment aus der Hand."],
   ["2", "Ein Missverständnis: Gendarmen oder eine Verbrecherbande verwechseln dich mit jemand anderem."],
   ["3", "Du verschluckst aus Versehen Gift oder verdorbenes Essen. Du wirst Vergiftet."],
   ["4", "Du nimmst eine falsche Abzweigung oder wirst von deinen Freunden getrennt und stehst allein einer Gefahr gegenüber."],
   ["5", "Du tappst in die Falle einer gewöhnlichen Spinne oder wirst von einem Spinnentier Verängstigt."],
   ["6", "Du zahlst für deine Frechheit. Deine Schreckliche Schreckliche Dinge steigen auf Stufe V."]]},
  {t: "tbl", head: ["Wurf", "Stufe IIII"], rows: [
   ["1", "Ein Karren oder ein scheuendes Tier überfährt dich, oder du gerätst unter Trümmer. Du wirst Verletzt."],
   ["2", "Deine Waffe zerbricht oder platzt. Du erleidest 3 Stress und verlierst die Waffe."],
   ["3", "Eine bewehrte Hundertfüßerin lauert dir aus der Ferne auf. Sie greift zu, wenn du es am wenigsten erwartest."],
   ["4", "Hast du einen Jackpot! gewürfelt, verwirfst du ihn und wiederholst den Wurf mit −1. So ein Pech!"],
   ["5", "Du wirst von Bildern deiner Vergangenheit gequält. Deine Memories können nur noch hinderlich (Erschwernis) sein."],
   ["6", "Du machst einen schrecklichen Fehler. Nachdem du ein Ass ausgespielt hast, verlierst du es und erhältst keinen Nutzen."]]},
  {t: "tbl", head: ["Wurf", "Stufe V"], rows: [
   ["1", "Dein erbittertster Feind gewinnt einen Vorteil oder eine große Überlegenheit."],
   ["2", "Dich verfolgt Pech. Alles kann und wird dir hinderlich sein. Nichts kann dir helfen."],
   ["3", "Ein Unglück kommt selten allein. Jedes Mal, wenn du einen Zustand erleidest, erleidest du sofort einen weiteren."],
   ["4", "Du bist unerklärlicherweise handlungsunfähig. Du scheiterst automatisch an einem sehr wichtigen Wurf."],
   ["5", "Du bist unruhig, deine Hände zittern. Du kannst keine Freie Neuwürfe verwenden."],
   ["6", "Eine riesige Jagdspinne stürmt in einem Moment großer Spannung herein und richtet Chaos an."]]}
 ]}
];

/* ---------- Willkommensverträge ---------- */
var A4 = [
 {id: "welcoming", t: "Willkommensverträge", p: 148, b: [
  "Die Stadt Samaraknid erreicht man nur, indem man die Silk Road überquert, eine senkrechte Brücke aus kostbarer und zarter Spinnenseide, mit Hilfe einer freundlichen Wolfsspinne. Doch du fällst trotzdem in die Leere und zerschellst am Great Blade, sobald du die Stadt erreichst. Samaraknid hängt nämlich an der Decke und ist komplett auf dem Kopf gebaut.",
  "Der wichtigste Willkommensvertrag von allen ist der *Domain-Vertrag*. Er ist der älteste Vertrag, der jedes Littling an das House bindet, in dem es lebt. Durch diese geheimnisvolle Macht, die Argo der Bürokrat und der weise Paracelsus jahrelang erforschten, wächst jeder Gegenstand und jeder Ort im House mit seiner Bedeutung. Einst bestimmte die Macht des Masters die richtige Größe seines Heims, passend für die Familie, die darin wohnte. Heute, in seiner Abwesenheit, bestimmt das House selbst den Raum, gemäß der vertraglichen Macht jedes Littling und jedes Ortes und gemäß seiner unergründlichen Launen.",
  "Das Herz von Cinderhall liegt hinter den Cast Iron Gates, in der Fireplace Hollow. Heimlich hineinzukommen ist fast unmöglich, und wer es dennoch schafft, wird in wenigen Minuten von der Hitze des Hausfeuers verbrannt. Er hat nur noch Zeit, seine Dummheit zu bereuen. Der einzige sichere Weg hinein, und in die vielen anderen unerreichbaren und unbewohnbaren Orte des House, ist ein besonderer vertraglicher Zusatz: ein Willkommensvertrag.",
  {t: "h", x: "Einen Willkommensvertrag abschließen"},
  "Um einen Willkommensvertrag abzuschließen, musst du den Besitzer oder Hüter des Ortes treffen, den du betreten willst, und sein förmliches „Welcome“ erhalten. Diese Littlings gewähren ihre Gunst nicht jedem, im Gegenteil, sie sind äußerst wählerisch. Laio der Schöne gewährt zum Beispiel nur seinen verehrtesten Gästen und Littlings mit großer Klugheit und Leidenschaft den Zutritt nach Samaraknid. Sir Edward Ashworth lässt dagegen nur Mitglieder und Ritter des Cinder Order und Littlings nach Cinderhall, die er persönlich für würdig hält, dem Hausfeuer nahezukommen.",
  "Ein Willkommensvertrag gilt für die Dauer deines Aufenthalts und wird beim Verlassen automatisch aufgehoben.",
  {t: "h", x: "Einen Willkommensvertrag verletzen"},
  "Verletzt du die Gegenleistung eines Willkommensvertrags, erleidest du keine Schreckliche Schreckliche Dinge und erhöhst deine Stufe TTT nicht. Du verlierst lediglich alle Vorteile des Zugeständnisses. Das ist Strafe genug!",
  K("Das House wächst mit dir", [
   "Es sollte uns nicht wundern, wenn eine ganze Stadt in eine Schublade passt und dabei viel größer ist als der Behälter. Das ist die Macht des Domain-Vertrag!"])
 ]},
 {id: "kindled-welcome", t: "Kindled Welcome & Upside-Down", p: 149, b: [
  "Der Skullrider und Kalif von Al Sehir, Laio der Schöne, kann allen Gästen, die er für würdig hält, Samaraknid zu besuchen, einen *Upside-Down Welcome Vertrag* anbieten. In seiner Abwesenheit können treue Beamte diesen Vertrag an seiner statt anbieten.",
  "Für den Zutritt zur Fireplace Hollow braucht man die Erlaubnis des Grim Knight, Edward Ashworth, oder eines Cinder Knight, den er bestimmt hat. Nur die wichtigsten Mitglieder des Ordens dürfen diesen Vertrag an würdige Littlings vergeben.",
  K("Upside-Down Welcome: Zugang zu Samaraknid", [
   "Sobald deine Füße in Samaraknid den Boden berühren, steht die Welt auf dem Kopf. Oben wird unten und umgekehrt. Wenn du hinaufblickst, könntest du glauben, Al Sehir hänge an der Decke.",
   "Solange du in der Stadt bist, kannst du kopfüber gehen, ohne zu fallen. Das gilt nicht für deine Kleidung und deine Accessoires, die du mit Spinnweben-Gurten, die am Eingang bereitliegen, an dir festbinden kannst.",
   "Gegenleistung: Rules of Samaraknid. Während deines Aufenthalts darfst du niemals eine Spinne verletzen, auch nicht zur Selbstverteidigung. Du darfst außerdem keine Dinge nehmen, die dir nicht gehören. Scheiterst du daran, verlierst du sofort die Fähigkeit, kopfüber zu gehen, und beginnst höchstwahrscheinlich deinen letzten, langen Sturz, der mit einem Aufprall auf den Dächern der Hauptstadt endet."]),
  K("Kindled Welcome: Zugang zu Cinderhall", [
   "Beim Betreten von Cinderhall empfängt dich ein Stoß feurig heißer Luft, der deinen Körper erhitzt.",
   "Solange du in der Cast Iron City bist, fügt dir das Feuer keinen Schaden zu, und du darfst selbst die heißesten Oberflächen berühren, ohne dich zu verbrennen. Empfohlen wird, ausreichend zu trinken und sich damit abzufinden, dass manche Haarsträhnen verbrennen und du einige Wäschen brauchst, um den dicken Ruß aus der Kleidung zu bekommen.",
   "Gegenleistung: Rules of Cinderhall. Während deines Aufenthalts in Cinderhall darfst du nicht stehlen und niemals dieselbe Frage zweimal stellen. Außerdem darfst du das Hausfeuer nicht allein treffen. Scheiterst du daran, wirst du sofort von Flammen umhüllt, Überlastet und erleidest den Zustand Gebrochen.",
   "Hast du das getan, bleibt dir noch die Möglichkeit, es wiedergutzumachen und deine Schritte zurückzuverfolgen. Wenn nicht, wirst du von den Flammen verzehrt und Aussteigen. Dem frühen Tod entgehst du nur durch die sehr unwahrscheinliche Gnade eines Cinder Knight."])
 ]},
 {id: "domain", t: "The Domain-Vertrag", p: 150, b: [
  "Wie groß ist das House? Viele Gelehrte haben sich in der Suche nach einer Antwort auf diese uralte Frage an den Rand des Wahnsinns gebracht. Jedes Mal, wenn sie einen Raum vermaßen, kamen andere Zahlen heraus als zuvor oder danach. Manchmal hatten die beiden Seiten desselben Flurs unterschiedliche Längen, und manchmal ziemlich deutlich. Ein Architekt aus dem Realm hat in einem interessanten Aufsatz gezeigt, dass die Tischplatte im Dining Hall bis zu zehnmal größer sein kann als die Bodenfläche zwischen ihren breiten Beinen. Die Diskussion war lang, wurde aber schließlich als Rechenfehler verworfen.",
  "Die glaubwürdigste Hypothese stammt vom weisen Paracelsus. Er glaubt fest an einen außergewöhnlichen Willkommensvertrag, der alle Littlings an das House bindet: den *Domain-Vertrag*.",
  "Paracelsus erklärt, die Größe des House sei stabil geblieben, solange die größere Macht des Masters sie so gehalten habe. Ohne ihn gibt es niemanden, der mächtig oder wichtig genug ist, das House nach seinem Willen zu biegen. Nach dieser Hypothese bestimmt die vertragliche Macht jedes Littling oder Ortes die Größe oder die wahrgenommene Größe des Raums. Orte mit größerer Bedeutung, etwa eine dicht bevölkerte Stadt, werden deshalb größer oder erscheinen so.",
  "Denk an deine Kindheit: Dein Zuhause schien riesig, ebenso seine Tische, Betten und Stühle. Das lag daran, dass du nicht der Besitzer warst und kein Recht hattest, Möbel zu verschieben oder Wände einzureißen. Kehrst du als Erwachsener in dasselbe Zuhause zurück, wirkt alles viel kleiner. Man könnte meinen, das liege daran, dass man gewachsen ist. Das stimmt aber nicht. Mit dem Alter gewinnen wir mehr Macht über die Dinge um uns herum. Wir können alte Stühle ersetzen oder den Boden eines Zimmers ändern. Mit dieser Macht wächst unsere eigene Größe durch den Domain-Vertrag, oder die Welt schrumpft, je nachdem, welcher Theorie man folgt.",
  "Zum weiteren Beleg: Ein Adelspalast oder sogar der kaiserliche Palast erscheint dir sicher riesig, und du fragst dich vielleicht, wozu man so große Räume braucht. Für die Bewohner wirkt ihr Haus jedoch nicht groß. Oft hört man sie sagen, es sei zu klein, und manchmal beneiden sie das größere Anwesen eines Freundes. Das liegt daran, dass sie mehr Bedeutung und damit mehr vertragliche Macht besitzen.",
  "Eine weitere Veranschaulichung der Theorie: Das House wird von Bestien von gigantischen Ausmaßen bewohnt. Denk an Reginella, die Mutter aller Spinnen. Sie passt nicht mehr in die Inbetweens, und manche sagen sogar, sie sei Dutzende winziger Meter hoch! Laut dem weisen Paracelsus liegt das daran, dass eine so bedeutende Spinne enorme vertragliche Macht besitzt und deshalb alles für sie winzig erscheinen muss, so wie sie uns riesig erscheint.",
  "Nachdem er diese erstaunliche Entdeckung gemacht hatte, konnte der Pulvid außerdem den ersten Kompass des Household bauen: eine außergewöhnliche Vorrichtung, die die Energie des Domain-Vertrag aufnimmt und immer auf das Zentrum des House zeigt. Ohne diese unglaubliche Erfindung wären die langen, unberechenbaren Reisen durch diese wunderbare Welt viel schwieriger."
 ]}
];
H["haus/regeln/vertraege"] = [].concat(A1, A2, A3, A4);
})();
