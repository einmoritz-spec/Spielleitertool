/* SLUGBLASTER · Oolroob – Teil B: Fraktionen (S. 9–13). Gruppen: Cliquen (Crowds), Crews, Obrigkeiten, Sponsoren. */
var SB_OO_FRAK = {
 gruppen: [
  {id: "cliquen", t: "Cliquen", p: 9, f: [
   {id: "goldenes-dreieck", t: "Das Goldene Dreieck", p: 9,
    x: "Die reichen Kids, die dank Papas Treuhandfonds das neueste Gear gekauft haben. Von Sell-outs gecoacht, bekommen sie über ihre Mipage immer die besten Markendeals. Null Street Cred.",
    npc: "**Wallace Wilkinson** (Erbe des Wilkies-Throns, immer im Dreiteiler, hat die neuesten experimentellen Süßigkeiten aus dem Wilkies-Labor zum Teilen dabei) · **X** (geheimnisvoll und grüblerisch, verrät niemandem seinen echten Namen, teilt ständig sein High-Tech-Gear von „irgendwoher, von dem du nichts weißt“) · Eine Gruppe, die in makelloser Top-Ausrüstung herumsteht und hofft, dass jemand sie bemerkt und zum Mitmachen einlädt · Eine Party nur auf Einladung, mit Goodie-Bags voller neuester Technik."},
   {id: "freeroob", t: "Das FreeRoob Collective", p: 9,
    x: "Die Spinner, Künstler, Musos und Nerds. Meistens im Schuppen verschanzt, wo sie an verrückten Projekten arbeiten. Sie schmeißen ständig Partys mit den wildesten selbstgemachten Getränken.",
    npc: "**Nervous Nate** (dürr und ängstlich, der beste Bassist, den du je gehört hast) · **Jenny A** (wildes, freies Hippie-Kid, rennt barfuß durch den Dreck und rezitiert aus dem Kopf obskure Gedichte) · Das erste Konzert einer Punkband, bei dem alle ihre Freunde dabei sind · Ein Haufen Kunst-Kids im Kreis, die Cones ziehen und sich gegenseitig die Gesichter mit Fingerfarben bemalen."},
   {id: "derby-girls", t: "Die Derby Girls", p: 9,
    x: "Der Club der coolen Mädels, voller Queers und Rockerinnen. Sie treffen sich täglich, um den Kampf auf Laserquads zu üben, und treten manchmal Monstern quer durchs ’Verse in den Hintern. Nur eine Regel: KEINE JUNGS!",
    npc: "**Nutcracker** (klein und furchteinflößend, starrt dich mit einem Blick nieder, der Stein schmelzen lässt) · **Scram Kate** (flink und nervös, immer bereit wegzurennen, skatet schneller als jeder, den du kennst) · Ein Team, das auf irgendeiner Straße Crossover und Whips übt · Eine Gruppe in voller Kriegsbemalung, die in Formation skatet, um einen Großen Roten Sharktopus zu erledigen."},
   {id: "sluggaz", t: "Die Sluggaz", p: 9,
    x: "Sie schöpfen aus der Skaterkultur der Zeit vor dem Schlüssel; die Sluggaz sind voll mit coolen Kids und Strebern, vereint durch die Liebe zum Slugblasting. Erwähne bloß nicht das Große Beef von ’23.",
    npc: "**Scott T. Slammer** (immer im selben rot-gelben Shirt, steckt Slams wie ein Champ weg, steht sofort wieder auf und versucht es nochmal) · **Mona & Lisa** (Butch/Femme-Lesbenpaar, ständig auf der Suche nach immer größeren Rampen zum Droppen) · Eine Crew, die versucht, in den Skatepark einzubrechen, um für einen anstehenden Wettbewerb zu üben · Die Raiders, die losziehen, um Dünen zu shredden und Dog Rock zu jagen."},
   {id: "sharkerz", t: "Die Sharkerz", p: 9,
    x: "Surfer-Bros und Kiffer. Einige der chillsten Typen und Mädels, die du je treffen wirst. Immer auf der Suche nach den besten Wellen an den Wandelstränden.",
    npc: "**Shazza** (niemand kann herausfinden, welches Geschlecht, alles, was sie tun, ist surfen) · **Moonie** (groß und gutaussehend, super freundlich und bereit, jedem das Surfen an den Wandelstränden beizubringen) · Eine Gruppe, die in einen Van steigt, weil sie gehört hat, dass an den Stränden eine neue Sorte Panic™-Energydrink fließt · Ein paar Surfer, die durch das Quantenfass carven und sehen wollen, wer länger durchhält, ohne in das halbkochende Flusswasser abzustürzen."}
  ]},
  {id: "crews", t: "Crews", p: 10, f: [
   {id: "red-raiderz", t: "The Red Raiderz", p: 10, bild: "dog", rand: "Der Schädel verstärkt Rustys Coolness-Faktor um das Hundertfache.",
    x: "Bedeckt mit selbstgebautem Gear aus gestohlenen Teilen von Armour-hill und zufälligem Müll, den sie herumliegen fanden. Die Red Raiderz carven durch die Dünen auf der Suche nach Dog Rock. Außer ihren treuesten Fans glaubt niemand, dass sie ihn finden werden.",
    npc: "**Insane Ian** (völlig verrückt und bereit, Dog Rock um jeden Preis zu finden) · **Kazza** (Ians chillige Zwillingsschwester, skatet auf einem modifizierten Umleitungsschild) · **Rusty Raygun** (Kazzas Haustierhund, der bei einer Begegnung mit einem psychischen Metasaur Telepathie erlangte und einen Helm aus dem Schädel einer Hoopsnake trägt).",
    assets: "Ein geheimes Versteck in der Armour-hill-Fabrik, das ältere Geschwister von jemandem hat Zugang zum Schuppen und all seinen Ressourcen, ein Sponsoring von B.U.N.N.O.S, eine kleine, aber treue Fangruppe im FreeRoob Collective.",
    likes: "Die Dünen, selbstgebautes Gear, Quantenrisse, den Kampf gegen verrückte Monster.",
    dislikes: "Das Goldene Dreieck, Poser, Northies und Dog-Rock-Skeptiker."},
   {id: "tame-impeller", t: "Tame Impeller", p: 10, bild: "tame-impeller",
    x: "Experten im Reiten der Wellen der Wandelstrände auf ihren Quantum-Shift-Surfbrettern. Tame Impeller schwänzen die Schule, um am Strand zu chillen, Cones zu ziehen und Wellen zu carven. Ihr Signaturstil entspannter Stunts hat ihnen eine riesige Mipage-Gefolgschaft beschert, die sie wie Familie behandeln.",
    npc: "**Ranga Ray** (Rotschopf, behauptet, er sei blond gewesen, bevor er gegen einen Sharktopus kämpfte) · **Zog-Zog** (chilliger Kiffer, hat nur ein Bein, benutzt einen modifizierten Hardlight-Projektor als Prothese) · **Cait-Tee** (extrem charismatisch, versucht immer, sich selbst zu übertreffen).",
    assets: "Eine riesige Gruppe von Sharkerz-Fans, ein Weg zu den Void-Küsten, ein Haufen hitzebeständiger Neoprenanzüge, ein Informant in der Überwachungsstation der Beachguards.",
    likes: "Chillige Partys, Schule schwänzen, Wellen mit Röhre, wenn die Meere zur Abwechslung mal wirklich Wasser sind.",
    dislikes: "Tryhards, Sponsoren, die Red Raiderz, die Beachguards."},
   {id: "wheeliebins", t: "The Flaming Wheeliebins", p: 11, bild: "wheeliebins",
    x: "Sie fahren auf ihren aufgemotzten Lowrider-Lasbikes herum und tragen Jacken mit ihrem ikonischen Logo auf dem Rücken. Die Flaming Wheeliebins halten sich für die coolsten, härtesten Kids der Stadt. Trotz dieser harten Schale gilt: Wenn du das ganze Hazing durchstehst, ist es „Ride or Die“, und du gehörst zur Familie.",
    npc: "**Gunzo** (dürr, rattenhaft, behauptet, den stärksten Menschen des Multiversums im Armdrücken geschlagen zu haben) · **Chops** (Schnauzbart, sieht zu alt für die Highschool aus, fährt ein Hover-Eski) · **Cross** (trägt seine Herzchen-Boxershorts außen, macht allen Frühstückspizza).",
    assets: "Ein FUST-Sponsoring, eine Tonne Lowrider-Mods für Lasbikes, ein stabiles Portal zu ihrem geheimen HQ in Calorium, enge Verbindungen zu Shimmer.",
    likes: "The Wicks, Calorium, geile Hügel, zwielichtige Gear-Deals hinter dem Schulschuppen.",
    dislikes: "Die Red Raiderz, Autorität, Southos."},
   {id: "smashin-swans", t: "The Smashin Swans", p: 11,
    x: "Bedeckt mit High-Tech-Kriegsbemalung und der neuesten Zerfetzte-Kampftuch-Technologie, sind die Smashin Swans fast immer im Rollerdrome zu finden, wo sie üben, all die furchterregenden Wesen zu erledigen, die durch Roobs Straßen streifen. Sie veranstalten häufig Las-Skate-Derby-Kämpfe, um stärkere Krieger für den Kampf zu trainieren.",
    npc: "**Mel-One** (trägt eine undurchlässige Wassermelone als Helm, Kriegsbemalung wie Blutstränen, Mama-Freundin) · **Barb** (fast 2,10 Meter groß, reine Muskeln, Kriegsbemalung lässt ihre Augen wie Leeren aussehen, charismatische Anführerin) · **Dante** (nonbinär, adonische Schönheit, Kriegsbemalung wie ein lodernder Feuersturm, ruhig und grüblerisch).",
    assets: "Absurd viel Einfluss bei den Derby Girls, ein Arsenal voller mächtiger Ausrüstung, fast exklusiver Zugang zum Rollerdrome, ein Bestiarium aller Wesen des lokalen Multiversums und ihrer Schwächen.",
    likes: "Starke Krieger, Kämpfen, Las-Skate-Derby, die Red Raiderz.",
    dislikes: "Dimensional Incursions, das Taxidermie-Museum, Dog Rock, die Wüste."}
  ], situation: "Seit das Große Beef von ’23 beigelegt wurde, hält ein zerbrechlicher Frieden – doch mit der zweiten Generation von Slugblastern, die heranwächst, bauen sich die Spannungen wieder auf, alte Fehden werden weitergegeben, und es nähert sich dem Bruchpunkt. Wird das Drama wieder explodieren, oder findet jemand einen Weg, den Frieden zu halten?"},
  {id: "obrigkeiten", t: "Obrigkeiten", p: 12, f: [
   {id: "beachguards", t: "Die Beachguards", p: 12,
    x: "Die Beachguards sind eine Gruppe erwachsener Freiwilliger (und jugendlicher Auszubildender), die das Chaos der Wandelstrände im Auge behalten. Im besten Fall sind sie Mentoren und Helden, die dich aus der Klemme retten, wenn die Strände sich gegen dich wandeln. Im schlimmsten Fall sind sie überbehütend und verpetzen dich bei deinen Eltern.",
    npc: "**Richie Head**, leitender Beachguard-Offizier (riesig, immer ernst, hasst Kids, die sich an den Strand schleichen wollen) · **Davy Jones**, leitender Fluxlock-Forscher (krauses Haar, immer riesige Augenringe, hat sein Haustier-Dropbear bei einem Megashift-Sturm verloren) · **Eddie A** (Chill-ältere-Bruder-Energie, zieht dich aus einem Megashift-Sturm und hilft dir, es beim nächsten Mal sicherer zu machen).",
    assets: "Eine Reihe von Schrödinger-Fluxlock-Stationen, die einen Strandabschnitt vorübergehend stabilisieren, shift-sichere Hyperanzüge, Hardlight-Rettungsboards, eine Armee von Petz-Kids in Ausbildung, die zu ihnen stoßen wollen, ein beliebter Mipage-Account.",
    likes: "Sicheres Surfen und Schwimmen, Steve den Sicherheits-Sharktopus, „verantwortungsbewusste“ Kids.",
    dislikes: "Tame Impeller und die Sharkerz, nervenkitzelsuchende Teenager an Stränden bei hoher Gefahrenstufe, Megashift-Stürme.",
    rand: "Nicht die coole Art von tödlich!",
    situation: "Eine jüngste Welle von Slugblastern, die sich während gefährlicher Wandel an die Strände schleichen, hat die Aufmerksamkeit von Elterngruppen erregt, die nun Druck auf die Beachguards ausüben, wachsamer darin zu sein, Kids fernzuhalten. Deshalb haben die Beachguards begonnen, die Strände öfter zu bestreifen und die Fluxlock-Stationen zu sichern."}
  ], megashift: {t: "Megashift-Stürme", p: 12, x: [
   "Wenn die Wandelstrände am chaotischsten sind, brauen sie einen Megashift-Sturm zusammen, der sich über Roob ausbreitet und Orte spontan die Plätze tauschen lässt.",
   "Selten kann ein Megashift-Sturm eine Dimensional Incursion auslösen, bei der eine andere Dimension in Orte in Roob hineinsickert und die Grenze zwischen Roob und der anderen Dimension verschwimmen lässt. Die Megashift-Tabellen stehen auf S. 18."
  ], rand: "Manche Orte verschieben sich seltsamerweise nie, und über den Fluss verschiebt sich auch nie etwas – komisch."}},
  {id: "sponsoren", t: "Sponsoren", p: 13, f: [
   {id: "bunnos", t: "B.U.N.N.O.S Build-n-Blast", p: 13, rand: "Wofür steht der Name? Cousine Alise sagt, das S steht für Stuff.",
    x: "Es fing als Ein-Stopp-Genossenschaft für all deine Werkzeuge und Hardware an. Als der Schlüssel geöffnet wurde, sprangen sie vor allen anderen auf den Slugblasting-Trend auf. Heute verkaufen sie alles von photonischem Stoff bis zu Nth-Gear-Hovercores. Wenn du etwas bauen musst, haben sie die Teile dafür – alles hier in Roob hergestellt!",
    npc: "**Der Gründer, Eyebrows** (klein und zwergenhaft, Gerüchten zufolge in Wahrheit eine Marionette, die von seinen buschigen Augenbrauen und seinem prächtigen Bart gesteuert wird) · **Dein örtlicher Rep, Pirate Pete** (alt und ergraut mit goldenem Herzen, kleidet sich wie ein Pirat, macht das schon länger, als du lebst) · **Slugblasting-Berater, Big K** (freundlich und immer erschöpft, einer der Ersten, die in Roob ein Modboard gebaut haben).",
    assets: "Ein fast unendlicher Vorrat an Teilen zu seltsam niedrigen Preisen, der größte Laden im Endless Square, der Großteil der Fertigungsanlagen in Armour-hill, Hardecker-Imitate, die so gut sind wie die Originale. Wöchentliche Würstchengrill-Spendenaktionen für lokale Nachwuchstalente.",
    likes: "Circuit-Bending, die örtliche Slugblasting-Szene, das Ende des Großen Beefs, Tüftler, die Red Raiderz.",
    dislikes: "Interdimensionale Konzerne (besonders Miper), Profit, Geschäftsgeheimnisse.",
    rands: ["Niemand weiß, wie sie alles so billig hinkriegen!", "Streben aus hyperdimensionalem Stahl, abgebaut in den Dünen von Karlup.", "Die Kabinen sind gebaut, um ihre Insassen selbst vor den gefährlichsten Wandeln zu schützen.", "Fluxlock-Feld beginnt sich zu stabilisieren."]}
  ]}
 ]
};
