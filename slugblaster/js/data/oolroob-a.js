/* SLUGBLASTER · Oolroob (Zusatzheft, M. Alexandria) – Teil A: Überblick, Orte, Probleme & Checkpoints, Megashift.
   Deutsche Übersetzung des Heftes; Seitenzahl = PDF-Seite (Buch „sb_oolroob“). Pins: x/y in Prozent der Karte (S. 7). */
var SB_OO = {
 B: "sb_oolroob",
 /* ---------- Überblick (S. 2–3) ---------- */
 ueber: {
  p: 3,
  intro: [
   "Oolroob (kurz *Roob* für die Einheimischen) liegt in einer Taschendimension namens Karlup, eingeklemmt zwischen Calorium und Empyrean – ein ausufernder, vorstädtischer Irrgarten, der sich trotz seiner gewaltigen Größe irgendwie wie eine Kleinstadt anfühlt.",
   "In jeder Richtung außer im Westen ist Roob von scheinbar endlosen Wüsten umgeben; im Westen liegt ein weiter, gefährlicher Ozean, und der Darkswan-Fluss teilt Roob in Nord und Süd.",
   "Das Wetter ist so heiß, dass es dir die Sohlen deiner brandneuen Kicks wegschmilzt. Der Sonne, die das ganze Jahr brennt, entkommst du nur beim Surfen an einem der vielen Strände, im Schatten oder indem du ein Portal in eine kühlere Dimension aufreißt.",
   "Bis vor Kurzem war Roob fast völlig vom Rest des Multiversums abgeschnitten. Der einzige brauchbare Weg hinein oder hinaus führte übers Meer. Doch vor zehn Jahren entstand das erste Portal zwischen den Welten, und eine neue Ära begann. In der Stadtmitte wurde ein riesiger Portalrahmen gebaut, um eine stabilere Verbindung zwischen Roob und ergiebigeren Dimensionen zu schaffen. Das löste einen gewaltigen Technikboom aus: Hoverboards, Hardlight, Raygun, Phasenverschieber, Gravtech – was du willst, Roob hat es jetzt.",
   "Wegen dieses Booms sind die südlichen Docks verfallen und außer Betrieb. Dadurch sind sie zum Treffpunkt für Slugblaster, Künstler, Kiffer und allerlei Spinner geworden."
  ],
  rand: "Empyrean ist um diese Jahreszeit großartig!",
  merkmale: [
   "Geheimnisvolle Türen tauchen in den südlichen Docks auf, von denen es heißt, sie seien Portale zu seltsamen Orten …",
   "Hier scheint jeder jeden zu kennen. Pass auf, dass du dich nicht beim Ärger erwischen lässt, sonst erfahren es deine Eltern – alle nennen das *Gerooobt-werden*.",
   "Die Hälfte der Büsche und Bäume scheint in einem fast magischen Zustand ewigen Feuers zu stehen. Niemand weiß, wie sie weiterbrennen.",
   "Ein Fluss, in dem es sich beim Schwimmen anfühlt, als würde dir die Haut abgekocht, der aber irgendwie völlig sicher ist."
  ],
  mad: {t: "Mad Metasaur", x: "Irgendwann läuft jeder in Roob Mad Metasaur über. Er taucht überall in der Stadt auf, fährt mit seinem Hoverbike herum und schimpft über eine geheime Einrichtung und irgendeinen „Roob Coob“."},
  slug: {t: "Slugblasting", x: [
   "Weil Oolroob so unglaublich abgeschottet ist, hat es erst vor Kurzem die Technik bekommen, um Portale zwischen Dimensionen aufzureißen, Hardlight-Strukturen zu erschaffen sowie Hoverboards und phasenverschiebende Surfbretter zu bauen.",
   "Obwohl die Technik so neu ist, haben Roobs rebellische Teenager die High-Tech-Zukunft begeistert umarmt. Leider ist das meiste davon extrem teuer. Viele ’Blaster, die es sich nicht leisten können, bauen ihre Ausrüstung selbst, klauen sie aus der örtlichen Fabrik oder arbeiten für die Konzerne, die mit dem Portal in die Stadt gekommen sind.",
   "Bevor es diese Technik gab, hatte Roob eine sehr starke Skate- und Surfkultur. Zusammen mit der Spaltung zwischen Nord und Süd des Flusses führte sie zum „Großen Beef von ’23“. Das war eine gewaltige Rivalität zwischen Northies und Southies, die zwar beigelegt wurde, aber Spannungen über die Teilung hinweg hinterlassen hat."
  ]},
  einl: {t: "Einleitung", p: 2, x: [
   "Seit ich ein Kind war und mit meinem Papa Raumschiff gespielt habe, habe ich in meinem Kopf so viele kleine Welten erschaffen. Roob ist die erste davon, die ich aufgeschrieben habe. Als ich Mikey Hamms Slugblaster zum ersten Mal las, wusste ich, dass ich dafür etwas machen musste, das auf der wilden Stadt basiert, in der ich aufgewachsen bin.",
   "Beim Schreiben von Roob konnte ich so viele der ikonischen Teile von Perth einbauen: die schrägen Statuen, die außerirdischen Wesen, die wunderschönen Strände und die großartigen Gemeinschaften. Fast alles hier basiert auf einem Ort oder einer Person, die für mich oder für Perth als Ganzes bedeutsam ist (wenn du von hier bist, versuch herauszufinden, wo all die Orte sind). Bei dieser Arbeit habe ich mich noch mehr in die fiktive und die echte Stadt Roob verliebt, und ich freue mich riesig, diese Leidenschaft mit euch allen zu teilen!",
   "Oolroob wurde auf dem besetzten Land der Whadjuk Noongar von Boorloo in Westaustralien gemacht und basiert darauf. Ich möchte den Ältesten, den vergangenen, gegenwärtigen und kommenden, meinen Respekt erweisen, die nie ihre Souveränität abgetreten haben.",
   "Danke an alle, die geholfen haben, dieses Herzensprojekt Wirklichkeit werden zu lassen.",
   "– M. Alexandria"
  ], zu: "Oolroob ist für das Rollenspiel Slugblaster entworfen, aber das meiste davon lässt sich in Spielen verwenden, wie du willst!"},
  touch: ["The Never Ending Story", "Slugblaster", "Mad Max", "Round the Twist", "Crocodile Dundee", "Deltora Quest", "Mortified", "Avatar the Last Airbender"]
 },
 /* ---------- Roob: Orte (S. 4–5, Karte S. 7) ---------- */
 gebiete: [
  {id: "nord", t: "Nord-Roob", p: 4, orte: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]},
  {id: "sued", t: "Süd-Roob", p: 5, orte: [12, 13, 14, 15, 16, 17, 18]},
  {id: "hills", t: "Die Östlichen Hügel", p: 5, orte: [19, 20]}
 ],
 orte: [
  [1, "Der Kaktus", "Eine seltsame kaktusartige „Statue“, die eines Tages auftauchte und seitdem endlos weiterwächst; sie ist inzwischen das höchste Ding in Roob. Jeder, der in ihre Nähe kommt, wird von einem fremdartigen Gefühl der Ruhe überflutet, weshalb sie als Treffpunkt für den Waffenstillstand diente, der das Beef von ’23 beendete.", 33.5, 15.0],
  [2, "Auntie A’s Burgers", "Ein Burgerladen am Straßenrand, der Tag und Nacht geöffnet hat, geführt von der mütterlichen Auntie A.", 51.8, 8.6, "Die Erbsen-Schinken-Suppe ist ein tolles Peelback-Heilmittel!"],
  [3, "Atlantis", "Ein uralter, überwucherter Wasserpark rund um die Statue eines lange vergessenen Meeresgottes. Manche sagen, er sei der Grund, warum es in Roob so heiß ist, andere sagen, die Rutschen seien geil zum Runterbomben.", 8.1, 10.2],
  [4, "Der Schlüssel", "Ein riesiger Portalrahmen, der für den interdimensionalen Handel und (wenn du reich genug bist) für Reisen genutzt wird. Er wird ständig von zwielichtigen Konzernwächtern bewacht.", 41.8, 31.3],
  [5, "Altstadt", "Die ursprüngliche Stadt, bevor sich Roob ausbreitete; die Gebäude sind seit Jahrhunderten unverändert. Es gehen Gerüchte um eine geheime hyperdimensionale Forschungseinrichtung darunter.", 25.7, 27.0],
  [6, "Knutsch-Park", "Ein Park, in den alle ihre süßen Dates mitnehmen; von hier hat man eine großartige Aussicht auf den Schlüssel und die Altstadt.", 10.1, 40.9],
  [7, "Das Rollerdrome", "Eine Lagerhalle, in der alle Derby-Girls und Enbies im Kreis skaten und sich gegenseitig verprügeln; die meisten kennen ihren Standort nicht.", 40.7, 12.0],
  [8, "Nord-Roob-Hoverpark", "Der Skatepark, der die nördlichen Crews im Beef beheimatete; seitdem ist er unter Bewachung abgeschlossen.", 80.7, 19.8],
  [9, "Corpotown", "Der modernisierteste Teil von Roob; er entstand, nachdem der Schlüssel geöffnet wurde, und beherbergt alle interdimensionalen Konzerne.", 65.6, 21.2],
  [10, "Endless Square", "Ein Einkaufszentrum, das wächst, je tiefer du hineingehst. Es heißt, Mad Metasaur sei deshalb so, weil er dort fünf Jahre oder irgendeine andere wahnsinnig lange Zeit verloren war.", 21.1, 18.2],
  [11, "Interdimensionales Autokino", "Ein altes Autokino, in dem du die neuesten interdimensionalen Hits sehen kannst – wenn du nur ein Auto hättest …", 74.5, 5.3],
  [12, "Das Alte Kraftwerk", "Jahrzehntelang verlassen nach einem angeblichen Spuk, wird es jetzt von Teenagern für Partys genutzt. Wie sich herausstellt, ist es tatsächlich eine Thin-Zone – frag bloß nicht Ian, wie er das herausgefunden hat.", 45.0, 81.3],
  [13, "FreeRoob-Docks", "Früher das Zentrum von Roobs Seehandel. Jetzt sind sie verfallen und voller Hausbesetzungen, die vor Spinnern vom FreeRoob Collective wimmeln.", 11.6, 65.2],
  [14, "Der Schuppen", "Ein altes Bootshaus, in dem alle coolen, künstlerischen Erwachsenen abhängen. Kinder lassen sie nicht rein, aber sie leihen dir vielleicht etwas Farbe oder helfen dir, dein Board zu modifizieren.", 39.1, 58.6],
  [15, "FreeRoob-Gefängnis", "Ein altes Gefängnis, in dem es angeblich von den früheren Insassen spukt. Nur die mutigsten Kids wagen sich in das weitläufige Tunnellabyrinth darunter.", 24.5, 75.9],
  [16, "Süd-Roob-Hoverpark", "Der Park, der die Seite der Southies im Beef beherbergte, wurde nach einer besonders harten Verletzung beim Drop-in-Wettbewerb von ’23 gesperrt. Es ist nicht allzu schwer, einzubrechen, wenn du die größte Halfpipe des Multiversums testen willst!", 76.4, 35.3],
  [17, "Das Taxidermie-Museum", "Das endgültige Schicksal der meisten seltsamen Wesen, die durch die Dünen von Karlup streifen, ist es, hier zu landen. Niemand weiß, wer die Ausstellungen baut, aber für neue Monster zahlen sie ziemlich gut.", 56.5, 75.7],
  [18, "Lemonblast Grove", "Direkt auf der anderen Seite des Flusses von Corpotown wurde Lemonblast Grove gebaut, um alle reichen Besitzer der örtlichen Niederlassungen der großen interdimensionalen Konzerne unterzubringen.", 72.9, 58.6],
  [19, "St. Wilkinsons Schule für schwierige Kinder", "Dorthin schicken die Eltern alle „schwierigen“ Kids, damit sie mit dem Slugblasting und Feiern aufhören. Irgendwie scheint es sie nur besser darin zu machen …", 84.1, 68.4],
  [20, "Armour-hill-Fabrik", "Hier wird die neueste Technik aller großen multidimensionalen Konzerne gebaut: Scramcat, Miper, Hardecker, B.U.N.N.O.S – wenn es in Roob zu finden ist, wird es hier hergestellt. Sie ist schwer bewacht, aber beim Plündern nach cooler Technik scheint nie jemand erwischt zu werden.", 69.2, 79.7]
 ],
 duenen: {t: "Die Dünen von Karlup", p: 4, x: "Wenn du es schaffst, dich über den Siedlungsrand im Norden oder die Hügel im Osten hinauszuwagen, stößt du auf die endlosen Sanddünen von Karlup, voller zahlreicher Thin-Zonen und anderer Dimensionen, die hineinsickern. Allerlei seltsame Wesen aus anderen Dimensionen streifen durch diese Ebenen, also nimm unbedingt deine HyperNewtonsche Raygun mit!"},
 straende: {t: "Die Wandelstrände", p: 4, x: "Die gesamte Westküste entlang ziehen sich die Wandelstrände. Sie heißen so, weil sie sich in einem ewigen Zustand des Flusses befinden: An einem Morgen kann der Strand wunderschön und ruhig sein, mit goldenen Sanddünen und klarem Wasser, am nächsten Morgen eine felsige Höllenlandschaft mit Lavaströmen und Vulkanhügeln. Es kann unglaublich gefährlich sein, in so einen Wandel zu geraten – also halte dich nur an Strände, die mit gelben und roten Beachguard-Flaggen markiert sind. Geh niemals bei einem Megashift-Sturm raus: Er kann sich von den Stränden ausbreiten und große Teile von Roob vertauschen (sogar mit anderen Dimensionen). Allerdings breiten sie sich irgendwie nie über den Fluss aus …"},
 hills: {t: "Die Östlichen Hügel", p: 5, x: "Östlich von Roob liegt die weite Hügellandschaft, die die Einheimischen „die Östlichen Hügel“ nennen. Diese Hügel sind das Hinterland von Roob. Die Hälfte der Leute, die dort leben, sind Bauern, die glücklich vom Land leben, die andere Hälfte will unbedingt weg. Viele der gewundenen Straßen sind bei den örtlichen Slugblastern super beliebt zum Runterbomben – wenn du schnell genug bist, kannst du Portale in andere Dimensionen aufreißen! Der einzige Grund, warum jemand über die Östlichen Hügel hinausgeht, ist, zu einer der vielen riesigen Minen in den Sanddünen zu gelangen."},
 dogrock: {t: "Dog Rock", p: 5, x: "Es heißt, weit hinter den Östlichen Hügeln, tief in den Ebenen von Karlup, liege ein Fels, der genau wie ein Hund aussieht und sich auch so bewegt. Der Sohn vom Bruder vom Cousin deines Nachbarn behauptet, ihn gesehen zu haben, und dass er einfach wie ein langweiliger, unbeweglicher Fels aussieht. Wer weiß, was die Wahrheit über den geheimnisvollen Fels ist?"},
 /* ---------- Probleme & Checkpoints (S. 8) ---------- */
 probleme: [
  [11, "Deine Nachbarschaft wurde bei einem Megashift-Sturm verschoben"], [12, "Ein riesiger Sharktopus ist an Land gekommen, um ein Nest zu bauen"], [13, "Deine Crew steckt in verschiedenen Teilen des Endless Square fest"], [14, "Eine Rivalen-Crew kassiert bei einer B.U.N.N.O.S-Spendenaktion ab"], [15, "Eine Patrouille der Beachguards"], [16, "Eine geheimnisvolle Tür hat dich in eine andere Dimension gebracht"],
  [21, "Eine Gruppe brennender Mülltonnen liefert sich ein Raygun-Gefecht"], [22, "Der Strand, auf dem du bist, hat gerade eine andere Form angenommen"], [23, "Ein Darkswan hat die Sonne verdunkelt"], [24, "Jemand, der deine Eltern kennt, hat dich gerade entdeckt"], [25, "Du hast dich in den Sanddünen verirrt"], [26, "Eine Rivalen-Crew wurde zu einer Party in Lemonblast Grove eingeladen"],
  [31, "Ein Portalriss hat einen Lavasee in deinen Weg gekippt"], [32, "Der Hügel, den du bomben sollst, ist fast senkrecht"], [33, "Atlantis ist plötzlich überflutet"], [34, "Du glaubst, du hättest im Knutsch-Park deinen Schwarm gesehen"], [35, "Die Aktivierung des Schlüssels hindert dich daran, ein Portal aufzureißen"], [36, "Eines der Wesen im Museum war in Wirklichkeit am Leben"],
  [41, "Ein Tsunami aus einer möglicherweise gefährlichen mysteriösen Flüssigkeit"], [42, "Ein Las-Skate-Derby-Spiel versperrt dir den Weg"], [43, "Der Darkswan-Fluss verändert seine Form"], [44, "Du findest die Party nicht, zu der du eingeladen wurdest"], [45, "Du wurdest beim Rausschleichen aus der Schule erwischt"], [46, "Ein Wesen ist in den Gefängnistunneln ausgebrochen"],
  [51, "Im Autokino läuft ein Film, aber du hast kein Auto"], [52, "Du wurdest im Knutsch-Park mit jemandem erwischt"], [53, "B.U.N.N.O.S hat das Teil, das du brauchst, irgendwie nicht mehr"], [54, "Ein revierbewusstes Portaroo steht dir im Weg"], [55, "Eine ’Burra jagt dich"], [56, "Im Gebäude ist eine Hoopsnake"],
  [61, "Die Fans einer Rivalen-Crew bewachen die Thin-Zone"], [62, "Eine Dimensional Incursion verformt deinen Ort"], [63, "Ein Zoomerang steuert auf dich zu – wirst du verfolgt?"], [64, "Eine verdächtige Nachricht deines Sponsors, der sich treffen will"], [65, "Alle deine Snacks wurden durch Nullie-Imitate ersetzt"], [66, "Ewige Bauarbeiten"]
 ],
 checkpoints: [
  [11, "Ein leerer, glühend heißer Spielplatz"], [12, "Ein brennender Busch"], [13, "Ein Bahnhof im Bau"], [14, "Eine Gruppe Kids beim Sesh"], [15, "Riesige Straßenbauarbeiten"], [16, "Ein riesiges Hoopsnake-Skelett"],
  [21, "Ein Kult, der eine schwebende Flamme anbetet"], [22, "Ein zusammenbrechendes Portal"], [23, "Ein Roadtrain mit tausend Anhängern"], [24, "Eine Kreuzung mit 13 Straßen"], [25, "Eine Pride-Parade voller Leute aus anderen Dimensionen"], [26, "Eine geheimnisvolle Tür ohne Rahmen"],
  [31, "Eine Holzstatue eines Riesen"], [32, "Ein hundert Meter hoher Baum mit einer Hütte obendrauf"], [33, "Ein verlassenes Frachtschiff"], [34, "Ein Teil eines Goldo-Mechs"], [35, "Ein Postbote auf einem Hoverbike"], [36, "Ein Portal zum Noise"],
  [41, "Eine superstreile, gewundene Treppe"], [42, "Ein B.U.N.N.O.S-Würstchengrillen"], [43, "Eine Grube ohne Boden"], [44, "Eine Insel voller seltsamer Nager"], [45, "Ein gewaltiger Stau"], [46, "Ein Sharktopus-Nest"],
  [51, "Feuerwehrautos löschen einen Brand"], [52, "Eine Pipeline von Armour-hill"], [53, "Ein Feld aus brennendem Gras"], [54, "Ein liminales öffentliches Schwimmbad"], [55, "Das größte Straßenschild des Multiversums"], [56, "Ein zerstörtes interdimensionales Raumschiff"],
  [61, "Eine Escher-artige Rolltreppe"], [62, "Ein 420-dimensionaler Foodcourt"], [63, "Ein rekursiver Flur"], [64, "Ein traumhafter Laden"], [65, "Eine perfekte Nachbildung deines Zuhauses"], [66, "Eine Bande gesichtsloser Schaufensterpuppen"]
 ],
 cpNote: "Für das Innere des Endless Square.",
 /* ---------- Megashift (S. 18) ---------- */
 mega: {
  p: 18,
  intro: "Würfle bei einem Megashift-Sturm auf jeder Tabelle zweimal 2W6 und tausche die gewürfelten Orte. Bei einer Dimensional Incursion wähle eine zufällige Dimension, die in den anderen gewürfelten Ort hineinsickert.",
  nord: ["Der Kaktus", "Aunty A’s", "Das Rollerdrome", "Altstadt", "Endless Square", "Atlantis", "Interdimensionales Autokino", "Nord-Roob-Hoverpark", "Knutsch-Park", "Dimensional Incursion", "Corpotown"],
  sued: ["Dimensional Incursion", "Lemonblast Grove", "Der Schuppen", "FreeRoob-Gefängnis", "Das Taxidermie-Museum", "Das Alte Kraftwerk", "Endless Square", "St. Wilkinsons", "Armour-hill-Fabrik", "Süd-Roob-Hoverpark", "Dimensional Incursion"]
 }
};
