/* Die Gesprungene Perle (Arkand S. 70–75) – deutsche Fassung. §…§ = Fertigkeit in Kapitälchen. Modell: plan/dragonbane/ABENTEUER_PLAN.md §2 */
window.DB_AB = window.DB_AB || {};
DB_AB["ark-perle"] = {
 id:"ark-perle", mul:1, t:"Die Gesprungene Perle", band:"ark-dung", buch:"db_ark", p:70, img:"abenteuer/ark-perle-titel",
 lage:[
  {h:"Die Lage", p:70},
  "Die Gesprungene Perle ist Arkands berüchtigtste Spielhölle, ein Ort kühner Wetten, an dem Vermögen in einer einzigen Nacht ein Dutzend Mal den Besitzer wechseln können. Reiche und Arme, Hoffnungsvolle und Hoffnungslose kommen hierher, um zu spielen, manchmal mit dem eigenen Leben als Einsatz.",
  "Seit vielen Jahren wird die Gesprungene Perle vom Clan Odrâk geführt, dem größten und einflussreichsten Orkclan in Arkand. Er verließ das Nebeltal, bevor sich der Nebel hob, müde von seinem kärglichen Dasein in der Wildnis. Stattdessen folgte er den Gerüchten nach Arkand und ließ sich rasch in der Stadt nieder. Mit großzügigen Bestechungsgeldern an die richtigen Leute und einem beachtlichen Überzeugungstalent stach er seine Rivalen bald aus.",
  "Heute ist die Gesprungene Perle der Ort, an dem Wagemutige groß wetten, reich werden oder alles verlieren. Es ist keine Seltenheit, dass Leute, die den Richtern des Gerichtstribunals misstrauen, ihre Streitigkeiten stattdessen an den Spieltischen beilegen, unter den wachsamen Blicken der Münzmeisterinnen des Clans Odrâk, deren strenge Aufsicht – zumeist – für einen fairen Ausgang sorgt.",
  "In letzter Zeit jedoch berichten immer mehr Gäste, dass sie nach dem Verlassen der Perle um ihre Gewinne beraubt wurden. Manche beschuldigen sogar den Clan Odrâk, die Diebstähle selbst inszeniert zu haben. Die Lage ist ernst genug, dass Häuptling Kadrak Odrâk im Stillen einen Plan ausarbeitet, um die Schuldigen zu entlarven.",
  "Die Mitglieder des Clans Odrâk nehmen die Sicherheit der anderen sehr ernst und eilen ihren Brüdern und Schwestern zu Hilfe, wenn sie Anzeichen von Ärger hören. In jeder Runde stoßen W3−1 Orkkrieger aus benachbarten Räumen zum Kampf hinzu, bis die Spielercharaktere fliehen oder sich ergeben.",
  {stein:{h:"Abenteueraufhänger", b:[{ul:[
   "*Eine Nacht in der Spielhölle:* Die Spielercharaktere kommen in die Gesprungene Perle, um ihr Glück zu versuchen, vielleicht angelockt vom Gerücht Die Gesprungene Perle (S. 62), der Zufallsbegegnung Clan Odrâks Anreißer (S. 61) oder aus einem anderen Grund. Es verspricht ein ereignisreicher Abend voller neuer Bekanntschaften zu werden.",
   "*Köder:* Die Spielercharaktere werden vom Clan Odrâk in die Gesprungene Perle eingeladen. Dort treffen sie Kadrak Odrâk, der sie als Köder einsetzen will, um die Diebe aus der Reserve zu locken, die seinen Gästen nachstellen. Ein Plan sieht vor, dass sie beim Verlassen der Spielhölle betrunken wirken und dann an einer günstigen Straßenecke einschlafen, doch die Charaktere dürfen sich gern eigene Ideen einfallen lassen. Gelingt es, locken sie die diebischen Räuberratten an, die ihrerseits das Graue Rudel hervorlocken könnten. Das kann ein Vorspiel zur oder ein Teil der Kampagne Der Thron der Diebe (S. 14) sein.",
   "*Raubzug!* Die Spielercharaktere beschließen – aus eigenem Antrieb oder im Auftrag eines anderen –, die Schätze des Clans Odrâk zu stehlen. Mögliche Auftraggeber oder Komplizen sind die Räuberratten, der gierige Zwerg Dorild, das Graue Rudel oder Bodrian Towercleaver. Auch die Zufallsbegegnungen Der verlorene Falschspieler, Ruheloser Geist oder Die Schätze des Clans Odrâk (S. 74) können als Ausgangspunkt dienen. Das passt ebenfalls hervorragend in die Kampagne Der Thron der Diebe."
  ]}]}}
 ],
 bereiche:[
  {id:"erdgeschoss", t:"Erdgeschoss", karte:{img:"abenteuer/ark-perle-erdgeschoss", p:71}, orte:[
   {n:"1", t:"Fassade", p:70, pin:[70.7,91.2], wesen:[],
    vl:"Gleich hinter der moosbewachsenen Brücke, den Hang hinunter zum tiefer gelegenen Kai, steht ein zweistöckiges Gebäude mit rissiger Fassade und geschlossenen Fensterläden. Über einer unscheinbaren, eisenbeschlagenen Tür hängt ein Schild, auf dem eine gesprungene Perle abgebildet ist.",
    st:[
     {k:"Die Fensterläden", x:"Die Läden sind fest verschlossen, lassen sich aber mit einem gelungenen §Fingerfertigkeit§- oder STÄ-Wurf aufstemmen. Dahinter liegen zugemauerte Fenster. Der Clan Odrâk nimmt Sicherheit sehr ernst."},
     {k:"Norden", x:"Eine verschlossene Tür. Nicht jeder darf in die Gesprungene Perle hinein. Zuerst muss man anklopfen. Dann schiebt sich eine Gucklücke in der Tür auf. „Wie viel habt ihr zu verlieren?“, fragt ein Ork von innen. Die Charaktere müssen etwas vorzeigen (z. B. einen großen, klimpernden Geldbeutel), das den Türsteher davon überzeugt, dass sie sich Einsätze leisten können, die hoch genug sind, damit sich ihr Besuch lohnt. Tun sie das, werden sie einzeln in die Eingangshalle (Ort 2) gelassen."}
    ]},
   {n:"2", t:"Eingangshalle", p:71, pin:[70.6,70.5], wesen:["ark-perle-orks"],
    vl:"Der Raum wird von Kandelabern aus gebleichten Knochen unklarer Herkunft erleuchtet. Schwere Tierfelle mit gescheckten Mustern hängen an den Wänden. Schädel von Tieren und Zweibeinern grinsen aus jeder Ecke auf euch herab. Durch ein dickes Metallgitter in einer der Wände könnt ihr in den Nebenraum spähen und seht Regale und Gestelle voller abgenutzter Klingen, Speere und blitzender Helme.",
    st:[
     {k:"Die Orks", x:"Hier stehen stets drei Orkkrieger des Clans Odrâk (Werte siehe Tabelle S. 18), die hoffnungsvolle Spieler empfangen. Sie sind überaus höflich, können aber auch sehr bestimmt sein. Wer Ärger macht, wird überwältigt und in Kadraks Kammer (Ort 7) gebracht."},
     {k:"Kontrolle", x:"Alle Gäste, die die Gesprungene Perle betreten, werden höflich, aber bestimmt gebeten, ihre Waffen, magischen Gegenstände und jede Rüstung schwerer als Leder abzugeben. Diese werden dem diensthabenden Ork in der Waffenkammer (Ort 5) übergeben. Die Orks durchsuchen die Gäste außerdem mit einer Knochenrassel, die mit §Magie spüren§ durchtränkt ist und in der Nähe magischer Gegenstände stark vibriert. Der Clan Odrâk duldet weder Betrug noch Gewalt, und wer Verbotenes oder Waffen einzuschmuggeln versucht, wird abgewiesen. Die Spielercharaktere müssen auch die Wertgegenstände oder Münzen vorzeigen, mit denen sie spielen wollen (Waffen oder Rüstungen können bei Bedarf verpfändet werden). Dieselbe Kontrolle findet beim Verlassen statt."},
     {k:"Die Schädel", x:"Ein gelungener §Tierkunde§-Wurf verrät, dass die Schädel eine breite Auswahl an Geschöpfen aus aller Welt darstellen."},
     {k:"Süden", x:"Schwere, eisenbeschlagene Tür zur Fassade (Ort 1). Die Tür hat eine Gucklücke."},
     {k:"Westen", x:"Gitter mit einer kleinen Klappe zur Waffenkammer (Ort 5)."},
     {k:"Norden", r:1, x:"Tür zur Kassenstube (Ort 3), versteckt hinter zwei großen Bärenfellen. Sie lässt sich mit §Entdecken§ finden oder indem man ausdrücklich die Nordwand absucht. Die Tür ist von der anderen Seite verriegelt (30 TP, Rüstungswert 12, nicht knackbar)."}
    ]},
   {n:"3", t:"Kassenstube", p:71, pin:[70.7,50.0], wesen:["ark-perle-orks"],
    vl:"Pelze hängen von Wänden und Decke und glänzen im Licht mannshoher Knochenkandelaber in jeder Ecke des Raums. Ein hochlehniger Stuhl mit breiten Armlehnen, aus zusammengefügten Knochen und Tierhäuten gefertigt, steht vor einem Gitter, durch das man einen weiteren Raum erspähen kann.",
    st:[
     {k:"Einkauf", x:"Der Einkauf ist unkompliziert. Ein Charakter reicht die Wertgegenstände, die er tauschen möchte, durch das Gitter an die diensthabende Münzmeisterin in der Zählstube (Ort 6). Sie prüft sie sorgfältig, beißt hinein, grunzt und legt sie in die Regale hinter sich. Dann zählt sie eine Menge Chips ab, die sie für angemessen hält, und reicht sie zusammen mit einer nummerierten Marke aus. Diese Marke braucht der Charakter, um seine Sachen vor dem Gehen für die Nacht zurückzufordern."},
     {k:"Die Orks", x:"Zwei Orkkrieger des Clans Odrâk unterstützen die Münzmeisterin in der Zählstube (Ort 6). Sie sind überaus höflich, können aber auch sehr bestimmt sein, zum Beispiel wenn jemand beim Einkauf zu aufdringlich wird. Wer ernsthaft Ärger macht, wird rasch überwältigt und in Kadraks Kammer (Ort 7) gebracht."},
     {k:"Süden", x:"Tür zur Eingangshalle (Ort 2), von dieser Seite mit einem dicken Querbalken verriegelt."},
     {k:"Westen", x:"Gitter zur Zählstube (Ort 6)."},
     {k:"Norden", r:1, x:"Ein Bärenfell an der Wand verbirgt eine Tür zum Wartezimmer (Ort 4)."}
    ]},
   {n:"4", t:"Wartezimmer", p:72, pin:[75.0,19.2], wesen:["ark-perle-orks"],
    vl:"Vier aus Knochen und Tierhaut gefertigte Stühle stehen an jeder Wand. Ein Kronleuchter aus Knochen spendet angenehmes Licht von der Decke. Überlappende Tierpelze säumen die Wände und verleihen dem Raum eher das Gefühl eines Wildniszelts als eines Steingebäudes in Arkand. Eine Treppe führt nach oben.",
    st:[
     {k:"Wartezeit", x:"Neuankömmlinge werden gebeten, auf einem der Knochenstühle Platz zu nehmen. Dort müssen sie geduldig warten, bis ihre Gruppe vollständig ist (keine Gruppen über vier Personen). Sind sie bereit, werden sie nach oben in die Spielhölle (Ort 11) geleitet."},
     {k:"Die Orks", x:"Zwei Orkkrieger des Clans Odrâk begrüßen die Spielercharaktere. Wie ihre Clanmitglieder schätzen sie Ruhe und Frieden und tragen ein breites Lächeln, das nie ganz die Augen erreicht."},
     {k:"Der Betrüger", x:"Wenn die Charaktere zum ersten Mal in der Gesprungenen Perle sind und sich zum Warten setzen, sehen sie, wie zwei Orks eine sich sträubende Gestalt die Treppe herunter und durch die Tür zu Kadraks Kammer (Ort 7) schleifen. Es wird geschrien und gebrüllt. „Häuptling Kadrak freut sich darauf, dir deine Strafe zu erteilen“, sagt einer der Orks, bevor die Tür zuschlägt. Kurz darauf sind gedämpfte Schreie und Schläge zu hören, die ebenso plötzlich verstummen, als die Charaktere in die Spielhölle (Ort 11) geführt werden."},
     {k:"Westen", x:"Treppe nach oben zu einer Tür zur Spielhölle (Ort 11)."},
     {k:"Westen", x:"Tür zu Kadraks Kammer (Ort 7), von zwei Orkkriegern bewacht."}
    ]},
   {n:"5", t:"Waffenkammer", p:72, pin:[27.4,70.5], wesen:[],
    vl:"Kampferprobte Klingen, schartige Schneiden und angedunkelte Spitzen sind an Schwertern, Äxten, Morgensternen, Speeren und Hellebarden zu erkennen, die in einfallsreich gestalteten Waffenständern an den Wänden lagern. Die Teile von etwas, das wie zwei Plattenpanzer aussieht, liegen als Haufen auf dem Boden. Ein Metallgitter mit armdicken Stäben trennt diesen Raum vom nächsten, und ein Kettenhemd wurde über die Lehne eines Knochenstuhls geworfen.",
    st:[
     {k:"Waffen", x:"Suchen die Charaktere neue Waffen, haben sie gute Aussichten (gelungener §Entdecken§-Wurf), das Gewünschte zu finden. Alle Waffen sind mit einer schwarzen Marke gekennzeichnet, die mit einer Lederschnur festgebunden ist."},
     {k:"Rüstung", x:"Das Kettenhemd passt Charakteren mit STÄ 12–15, die Plattenrüstung Charakteren mit STÄ über 16."},
     {k:"Der Waffenmeister", x:"Ein Orkkrieger des Clans Odrâk nimmt herzlich alle Waffen entgegen, die aus der Eingangshalle (Ort 2) abgegeben werden, versieht sie mit einer Marke und gibt eine nummerierte Marke aus weißem Knochen zurück."},
     {k:"Marken", x:"Auf dem Tisch steht ein Kasten mit nummerierten Marken in zwei Farben: Weiß für Spieler, Schwarz zum Kennzeichnen der in der Waffenkammer gelagerten Waffen."},
     {k:"Osten", x:"Gitter zur Eingangshalle (Ort 2)."},
     {k:"Norden", x:"Tür zur Zählstube (Ort 6)."}
    ]},
   {n:"6", t:"Zählstube", p:72, pin:[27.4,50.0], wesen:["ark-perle-orks"],
    vl:"Goldene Pokale, dicke Halsketten, lackierte Schriftrollenbehälter und ein ausgestopfter Vogel sind zusammen mit allerlei anderen Wertsachen auf durchhängenden Regalen zusammengepfercht. Ein Stuhl aus Knochen und Haut steht vor einem schweren Tisch voller Stapel von Spielchips. Ein verbogenes Metallrohr mit trichterförmiger Öffnung ragt aus dem Boden. Durch ein Gitter blickt man in den Nebenraum.",
    st:[
     {k:"Die Münzmeisterinnen", x:"Eine der Schätzerinnen des Clans Odrâk, die Münzmeisterinnen, ist stets hier. Alle haben ein scharfes Auge für Wert und bieten selten mehr als die Hälfte dessen, was etwas wert ist. Die Charaktere können versuchen, einen besseren Preis zu §Feilschen§, doch jedes beharrliche Handeln nach dem ersten Versuch (unabhängig vom Ergebnis) lässt sie das Angebot senken und weitere Verhandlungen verweigern."},
     {k:"Spielchips", x:"Auf dem Tisch liegt eine riesige Menge Spielchips. Sie sind alle mit „Die Gesprungene Perle“ gestempelt und gibt es zu 1, 5, 10 und 100 Gold. Zusammen sind sie zig Tausende Gold wert, außerhalb der Mauern der Gesprungenen Perle jedoch völlig wertlos."},
     {k:"Marken", x:"Auf dem Tisch steht ein Kasten mit nummerierten Marken: Weiß für Spieler, Schwarz zum Kennzeichnen der Gegenstände in der Waffenkammer (Ort 5)."},
     {k:"Das Metallrohr", x:"Das Rohr erlaubt den Münzmeisterinnen, sich mit dem Personal im Tresorraum (Ort 9) zu verständigen, was nötig ist, da in der Zählstube keine echten Münzen aufbewahrt werden."},
     {k:"Wertgegenstände", r:1, x:"Charaktere, die die Regale durchsuchen, dürfen pro Runde eine Schatzkarte ziehen (Karten mit Münzen ignorieren), wenn ihnen ein §Entdecken§-Wurf gelingt. Insgesamt sind hier sechs Gegenstände von echtem Wert zu finden."},
     {k:"Relikte der Drachenreiter", x:"Wenn es zu deiner Kampagne passt, kannst du eines der fehlenden Teile des Reliefs vom Tor der Drachenreiterakademie und/oder ein Drachenreitermedaillon unter die Gegenstände in den Regalen legen."},
     {k:"Der Münzlift", x:"Eine unter dem Tisch verborgene Kurbel erlaubt den Münzmeisterinnen, Münzen zwischen diesem Raum und dem Tresorraum (Ort 9) zu befördern."},
     {k:"Osten", x:"Dickes Gitter zur Kassenstube (Ort 3)."},
     {k:"Süden", x:"Tür zur Waffenkammer (Ort 5)."},
     {k:"Norden", x:"Tür zu Kadraks Kammer (Ort 7)."}
    ]},
   {n:"7", t:"Kadraks Kammer", p:73, pin:[22.9,21.7], wesen:["ark-perle-kadrak","ark-perle-orks"],
    vl:"Ein Thron aus Knochen und Tierpelzen wird von vier gewaltigen, kunstvoll verzierten Stoßzähnen flankiert. Ein weißer Bärenkopf scheint als Fußschemel zu dienen, umgeben von leeren Amphoren und einem halb gegessenen Lammbraten. Von der Decke hängen einfallsreiche Dekorationen aus Hautstreifen, Schädeln, Kiefern und anderen Skelettresten. Die Wände sind mit Schicht um Schicht aus Häuten und Fellen bedeckt.",
    st:[
     {k:"Kadrak Odrâk", x:"Kadrak Odrâk verbringt die meiste Zeit damit, in seiner eigenen Großartigkeit zu schwelgen, indem er einen seltenen, an den Spieltischen verlorenen Gegenstand untersucht, Unmengen Wein trinkt, ganze gebratene Tiere mit bloßen Händen verschlingt oder passende Strafen an Betrügern vollstreckt. Was er tut, wenn die Spielercharaktere eintreffen, hängt vom Zweck ihres Besuchs ab."},
     {k:"Die Orks", x:"Hier sind stets mindestens zwei Orkkrieger zugegen, um die Sicherheit ihres Häuptlings zu gewährleisten."},
     {k:"Strafen", x:"Wenn die Charaktere Ärger mit dem Clan bekommen haben, können sie einer Reihe einfallsreicher Strafen unterzogen werden, die sie demütigen sollen. Beliebt sind etwa, den weißen Bärenkopf als Kadraks Fußschemel zu ersetzen, absurde Mengen an Speis und Trank zu verzehren oder eine gute altmodische Tracht Prügel zu erhalten. Strafen enden fast immer mit einem tiefen Biss von Kadrak, einer Kapuze über dem Kopf und einer Eskorte durch den Kellergang (Ort 8) hinaus in den unterirdischen Kanal (Ort 10). Von dort wird der Übeltäter tief in die Unterwelt gebracht und seinem Schicksal überlassen. So kann der Clan Odrâk Elrita Blutauge und Bodrian Towercleaver versichern, dass er Betrüger gewiss nicht mit dem Tod bestraft (was nach der aktuellen Auslegung von Avador Northings Gesetzen verboten ist). Er wirft sie lediglich aus der Gesprungenen Perle hinaus; was danach geschieht, ist eine Sache zwischen den Betrügern und allem, was in der Unterwelt lauert!"},
     {k:"Die Türklapper", x:"Eines der Gebilde an der Decke ist mit der Tür zur Unterwelt (Ort 10) im Kellergang (Ort 8) verbunden und klappert, wenn jemand versucht, die Tür zu öffnen oder zu beschädigen."},
     {k:"Osten", x:"Tür zum Wartezimmer (Ort 4)."},
     {k:"Osten", r:1, x:"Hinter den Tierhäuten in der Südostecke verborgen liegt eine Treppe hinab in den Kellergang (Ort 8)."},
     {k:"Süden", x:"Tür zur Zählstube (Ort 6)."}
    ]}
  ]},
  {id:"keller", t:"Keller", karte:{img:"abenteuer/ark-perle-keller", p:74}, orte:[
   {n:"8", t:"Kellergang", p:73, pin:[54.2,42.0], wesen:["ark-perle-kadrak"],
    vl:"Feuchtigkeit sickert durch die Steine der moosbewachsenen Wände. Das schwache Fackellicht spiegelt sich in den Pfützen am Boden, reicht aber nicht ganz weit genug, um zu enthüllen, was am Ende des Tunnels wartet.",
    st:[
     {k:"Osten", x:"Treppe hinauf zu Kadraks Kammer (Ort 7)."},
     {k:"Süden", x:"Metalltür zum Tresorraum (Ort 9), stets von beiden Seiten mit einem schweren Querbalken verschlossen (100 TP, Rüstungswert 16, nicht knackbar). Bei Schichtwechseln im Tresorraum (Ort 9) werden die Münzmeisterinnen stets von zwei Orkkriegern eskortiert und von Kadrak durchsucht, damit sie keine Schätze hinausschmuggeln."},
     {k:"Norden", r:1, x:"Versteckte Tür zum unterirdischen Kanal (Ort 10). Das Nordende des Gangs endet an einer Wand. Eine sorgfältige Untersuchung enthüllt winzige Spalten zwischen einigen Steinen und ein leises Geräusch fließenden Wassers (§Wahrnehmung§). Die Tür lässt sich öffnen, indem man gleichzeitig zwei Steine drückt: einen hoch an der Ostwand und den anderen nahe dem Boden an der Westwand. Beide Steine erfordern einen gelungenen §Entdecken§-Wurf, um gefunden zu werden. Sie liegen so weit auseinander, dass zwei Personen zusammenarbeiten müssen, um den Mechanismus auszulösen."}
    ]},
   {n:"9", t:"Tresorraum", p:74, pin:[54.1,69.0], wesen:[],
    vl:"Die gewaltigen Münzhaufen auf dem Tisch in der Mitte des Raums glitzern im Fackelschein wie tausend Sternenhimmel. Es sieht aus wie der Hort eines Drachen!",
    st:[
     {k:"Alles, was glänzt!", x:"Die glitzernden Münzen sind so faszinierend, dass alle Spielercharaktere einen WIL-Wurf (keine Aktion) bestehen müssen oder in der ersten Runde jedes Kampfes in diesem Raum nicht handeln können."},
     {k:"Die Münzmeisterinnen", x:"Hier sind stets zwei Münzmeisterinnen zugegen. Versuchen die Charaktere, sich gewaltsam Zutritt zu verschaffen, rufen die Münzmeisterinnen zuerst um Hilfe und bereiten dann einen Hinterhalt vor (siehe Regelbuch S. 43)."},
     {k:"Der Münzlift", x:"Neben dem Tisch steht eine seltsame kettengetriebene Vorrichtung, mit der die Münzmeisterinnen Münzen zwischen der Zählstube (Ort 6) und dem Tresorraum befördern."},
     {k:"Die Schätze des Clans Odrâk", x:"Der Clan Odrâk hat im Lauf der Jahre ein beträchtliches Vermögen angehäuft. Die Charaktere können pro Runde W10 × 10 Münzen einsammeln. Wirf einen W3, um die Art zu bestimmen. 1: Gold, 2: Silber, 3: Kupfer. Sie können auch nach anderen Wertgegenständen suchen und dürfen dann für jeden gelungenen §Entdecken§-Wurf eine Schatzkarte ziehen. Insgesamt sind hier sechs Schatzkarten zu finden."},
     {k:"Norden", x:"Metalltür (100 TP, Rüstungswert 16) zum Kellergang (Ort 8)."}
    ]},
   {n:"10", t:"Unterirdischer Kanal", p:74, pin:[54.1,19.3], wesen:["ark-perle-kadrak"],
    vl:"Wasser fließt sanft durch die Mitte des gewölbten Tunnels. Die Mauerwerkswände lassen vermuten, dass dies vor langer Zeit Teil des alten Arkand gewesen sein könnte, das damals über der Erde lag. Tropfen fallen von der Decke, und Seegrasstränge wiegen sich träge in der Strömung.",
    st:[
     {k:"Osten", x:"Gang, der in die Unterwelt führt."},
     {k:"Süden", r:1, x:"Die Tür zum Kellergang (Ort 8) ist in der Wand fast perfekt verborgen. Ein gelungener §Entdecken§-Wurf beim Absuchen genau an der richtigen Stelle enthüllt feine Spalten zwischen bestimmten Steinen, die den Umriss einer verborgenen Tür bilden. Die Tür lässt sich von dieser Seite nur auf magischem Weg öffnen. Sie wird jedoch von MAGISCHER SCHILD (Kraftstufe 3) geschützt, gewirkt von Kadrak selbst. Jeder Versuch, an der Tür zu hantieren, löst die Türklapper in Kadraks Kammer (Ort 7) aus und alarmiert den Häuptling. Vier Runden später treffen drei Orkkrieger des Clans Odrâk aus Osten und Westen ein, um die Eindringlinge aufzuhalten."},
     {k:"Westen", x:"Gang, der in die Unterwelt führt."}
    ]}
  ]},
  {id:"obergeschoss", t:"Obergeschoss", karte:{img:"abenteuer/ark-perle-obergeschoss", p:74}, orte:[
   {n:"11", t:"Spielhölle", p:75, pin:[49.9,49.7], wesen:["ark-perle-gideril","ark-perle-orks","fluegel-hoerner"],
    vl:"Hinter einem schweren Vorhang aus Tierhäuten liegt ein Raum mit drei runden Tischen, im selben Stil gestaltet wie der Rest des Gebäudes: Pelze, Schädel und hohe Kandelaber aus gebleichtem Knochen. An den Tischen sitzen die Spieler, tief konzentriert, lauschen den rauen Stimmen der Münzmeisterinnen, die die Einsätze ausrufen, und mustern dann die Chipstapel vor sich. Es ist offensichtlich, dass hier Vermögen auf dem Spiel stehen!",
    st:[
     {k:"Orkkrieger", x:"Hier sind stets so viele Orkkrieger zugegen, wie es Spielercharaktere gibt, die ständig nach Betrügern und Unruhestiftern Ausschau halten."},
     {k:"Münzmeisterinnen", x:"An jedem Tisch beaufsichtigt eine Münzmeisterin das Spiel."},
     {k:"Stammgäste", x:"Viele von Arkands Nervenkitzel- und Abenteuersuchern verkehren regelmäßig in der Gesprungenen Perle. Unter ihnen sind Brigador, Plathyra Breitschnabel, Akelius und Delph Ragel. Manche sagen, selbst Elrita Blutauge sei an den Tischen gesehen worden. Der hingebungsvollste Spieler von allen ist jedoch der Elf Gideril."},
     {k:"Das Spiel spielen", x:"Das beliebteste Spiel in der Gesprungenen Perle ist Flügel und Hörner (Regeln im Kasten)."},
     {k:"Unten", x:"Treppe hinab zum Wartezimmer (Ort 4)."}
    ]}
  ]}
 ],
 figuren:{
  "ark-perle-orks":{typ:"nsc", t:"Orkkrieger des Clans Odrâk", p:71, be:"ork",
   werte:[["Bewegung","10"],["Schadensbonus STÄ","+W4"],["TP","12"]],
   zl:[["Rüstung","Beschlagenes Leder (2)"],["Fertigkeiten","Wahrnehmung 10, Ausweichen 8"],["Waffen","Krummsäbel (Fertigkeitswert 12, Schaden 2W6)"]],
   text:["Eingangshalle (Ort 2): drei, Kassenstube (Ort 3): zwei, Wartezimmer (Ort 4): zwei, Kadraks Kammer (Ort 7): mindestens zwei, Spielhölle (Ort 11): so viele wie Spielercharaktere. Die Werte entsprechen dem Orkkrieger des Bestiariums."]},
  "ark-perle-kadrak":{typ:"nsc", t:"Kadrak Odrâk", p:73, tp:26,
   werte:[["Bewegung","12"],["Schadensbonus STÄ/GEW","+W4"],["TP","26"],["WP","26"]],
   zl:[["Rüstung","Knochen (3)"],["Fertigkeiten","Tierkunde 13, Raufen 16, Fremdsprachen 12, Mentalismus 18, Mythen & Legenden 13, Überzeugen 16"],["Talente","Schlachtruf, Defensiv, Doppelhieb, Furchtlos, Fokussiert × 5, Meisterzauberer, Robust × 4, Wiesel"],["Zauber","§Bannen§, §Magischer Schild§, §Schweben§, §Kraftfaust§, §Steinhaut§, §Geistesschlag§, §Beherrschen§, §Teleportation§"],["Waffen","Knochenstab mit einem enormen Vogelschädel an der Spitze, zählt als großer Holzknüppel (Fertigkeitswert 16, Schaden 2W8)"]],
   text:["Das Oberhaupt des Clans Odrâk ist in jeder Hinsicht massig. Seine Körperfülle kann es mit der eines fettleibigen Braunbären aufnehmen, mit Reißzähnen wie ein uralter Drache und einem Kiefer, um den ihn jede Seeschlange beneiden würde. Kadrak ist außerdem ein mächtiger Magier, auch wenn er sich weigert, mit anderen Magiern zu verkehren, überzeugt, dass man ihnen nicht trauen kann. Seit er sich in Arkand niedergelassen hat, hat er es nie bereut, das Nebeltal hinter sich gelassen zu haben, obwohl er hin und wieder noch von seiner ersten Liebe Maladûk träumt."]},
  "ark-perle-gideril":{typ:"nsc", t:"Gideril", p:75, tp:32,
   werte:[["Bewegung","12"],["Schadensbonus STÄ/GEW","+W6"],["TP","32"],["WP","18"]],
   zl:[["Rüstung","Dämonisch (4)"],["Fertigkeiten","Tierkunde 13, Raufen 16, Wildniskunde 15, Ausweichen 15, Fremdsprachen 12, Mythen & Legenden 16"],["Talente","Defensiv, Pfeile abwehren, Doppelhieb, Drachentöter, Furchtlos, Fokussiert × 2, Wuchtiger Schlag, Robust × 7, Schildblock, Veteran"],["Waffen","Langschwert (Fertigkeitswert 16, Schaden 2W8, Haltbarkeit 18), Langbogen (Fertigkeitswert 16, Schaden W12), Dolch (Fertigkeitswert 13, Schaden W8)"],["Ausrüstung","Das meisterhaft gefertigte Langschwert Ioril (derzeit in der Gesprungenen Perle verpfändet), ein großer Schild, den er mit einem Lederüberzug hat versehen lassen (das Emblem seines alten Ordens in Immer-Drak ist darunter noch vorhanden)."]],
   text:["Der Elf Gideril erlebte seine glorreichen Tage vor etwa vierhundert Jahren. Damals war er ein stolzer Drachenritter, der furchtlos gegen Dämonen und ihre Akolythen jenseits des Meeres kämpfte. Er trug den Kampf sogar in die Reiche der Dämonen und focht dort ein Dutzend Mal, und jedes Mal kehrte er mit einer Trophäe zurück. Doch dann geschah etwas – Gideril erlebte die Skrupellosigkeit der Drachen aus nächster Nähe und verlor in einem einzigen Moment den Glauben an die falschen Ideale, für die er gekämpft hatte. Nach einem gescheiterten Versuch, eine Rebellion anzuzetteln, verließ er seine östliche Heimat in Schande.","Noch heute werden in seiner Heimat Geschichten über Giderils Untergang erzählt. Guendia und ihre Drachenritter kennen sie gut, würden sich aber nie vorstellen, dass er seine Tage nun in einer Spielhölle in Arkand verbringt. Im Exil hat Gideril als wurzelloser Vagabund die Welt durchwandert, bis er im Dung endlich ein Zuhause fand. Sein Hass auf Drachen sitzt tief, und wenn die Spielercharaktere ihn dazu bewegen können, sich aus seinem Elend zu erheben, kann er ein mächtiger Verbündeter für Guendia werden."]}
 },
 kaesten:{
  "fluegel-hoerner":{k:"Flügel und Hörner", p:75, b:[
   "Flügel und Hörner wird mit einem Kartenspiel gespielt, das in zwei Farben und zwei Farbtöne unterteilt ist: Flügel und Hörner, Schwarz und Weiß. Ein Spiel beginnt damit, dass jeder Spieler den zulässigen Mindesteinsatz auf den Tisch legt, und läuft wie folgt ab:",
   {ol:[
    "**Initiative ziehen.** Das funktioniert genauso wie im Kampf.",
    "**Einsätze ansagen.** Das geschieht in Initiativreihenfolge. Jeder Einsatz muss vom nachfolgenden Spieler mitgegangen werden.",
    "**Spielwurf.** Würfle auf §Täuschen§. Der Wurf kann nur strapaziert werden, indem man zu betrügen versucht; dann würfelt der Spieler stattdessen auf §Fingerfertigkeit§. Wird ein Dämon gewürfelt, ist der Betrüger automatisch enttarnt. Der Spieler, der das niedrigste Ergebnis unter seinem Fertigkeitswert würfelt, gewinnt den Pott."
   ]}
  ]}
 }
};
