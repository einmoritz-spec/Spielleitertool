/* Die Weiße Feder IV (Arkand S. 50–53) – deutsche Fassung. §…§ = Fertigkeit in Kapitälchen. Modell: plan/dragonbane/ABENTEUER_PLAN.md §2 */
window.DB_AB = window.DB_AB || {};
DB_AB["ark-feder4"] = {
 id:"ark-feder4", mul:1, t:"Die Weiße Feder IV", band:"ark-hafen", buch:"db_ark", p:50, img:"abenteuer/ark-feder4-titel", kurz:"11 Orte",
 lage:[
  "Die *Weiße Feder IV* ist die vierte Verkörperung des Schiffes, das Hynchos Breitschnabel zu unzähligen fremden Küsten und Häfen trug. Wenn es nicht auf See ist, liegt es direkt vor den Lagerhallentoren des Handelshauses vor Anker.",
  "Liegt das Schiff im Hafen, wird es ständig von W3 Matrosen bewacht. Auch Dominus Skaup geht ein paarmal am Tag an Bord, um nach dem Rechten zu sehen. Ist das Schiff auf See, ist die Besatzung deutlich größer und weit lebhafter. Wer wann an Bord ist, steht in den Ortsbeschreibungen.",
  "Ein gut gehütetes Geheimnis ist, dass die *Weiße Feder IV* zugleich das berüchtigte Piratenschiff der Blutschnäbel ist – der *Rumpfspalter*! Sobald das Schiff weit genug vom Hafen von Arkand entfernt ist, verwandelt es sich vollständig. Die Galionsfigur wird rasch ausgetauscht, und blutrote Segel werden gesetzt. Hoch oben am Großmast weht die gefürchtete Flagge mit den blutbefleckten Krummsäbeln.",
  {karte:{h:"Abenteuer-Ideen", p:51, b:[{ul:[
   "**Die Fracht bewachen:** Wellenmeister Brigador ist zutiefst verärgert, weil mehrere Schiffe mit wertvoller Fracht von den Blutschnäbel überfallen wurden. Da er nicht weiß, wem in den eigenen Reihen er trauen kann, wendet er sich an die Spielercharaktere und bittet sie, sich in der Fracht an Bord der *Heaving Hog* zu verstecken, eines Handelsschiffs des Handelshauses Drei Monde. Und tatsächlich dauert es nicht lange, bis die Blutschnäbel das Schiff entern.",
   "**Sabotage:** Delph Ragel ist zutiefst gekränkt, weil Plathyra Breitschnabel einen anderen Schneider mit ihren neuesten Gewändern beauftragt hat. Auf Rache aus, wendet er sich an die Charaktere und bittet sie, die *Weiße Feder IV* so zu sabotieren, dass sie auf ihrer nächsten Fahrt sinkt!",
   "**Begehrte Seekarten:** Ein Geschäftsrivale von Plathyra Breitschnabel (hat sich die Zufallsbegegnung Durchgegangene Kutsche ereignet, könnte es Kardolius Trott sein) wendet sich an die Charaktere. Er vermutet, dass ihre Seekarten an Bord der *Weißen Feder IV* versteckt sind, und will, dass sie sie beschaffen. Im Gegenzug bietet er eine großzügige Belohnung und einen Anteil an allen künftigen Gewinnen aus neu entdeckten Handelsplätzen."
  ]}]}}
 ],
 bereiche:[
  {id:"schiff", t:"Das Schiff", karte:{img:"abenteuer/ark-feder4-schiffsplan", p:52}, orte:[
   {n:"1", t:"Rumpf", p:50, pin:[4.4,46.8], wesen:[],
    st:[
     {k:"Wird das Schiff als die Weiße Feder IV gesehen", x:"*Ein Dreimaster mit langem Achterkastell ruht sanft auf den Wellen. Den Bug ziert eine prunkvolle Galionsfigur: eine Meerjungfrau mit dem Oberkörper einer Stockente, deren Brust Muscheln bedecken. Von den Masten wehen schwarze Flaggen, jede mit einem sehr breiten goldenen Entenschnabel über zwei gekreuzten weißen Federn.*"},
     {k:"Wird das Schiff als der Rumpfspalter gesehen", x:"*Die blutroten Segel des Schiffes blähen sich im Wind. Von den Masten wehen Flaggen mit gekreuzten, blutbefleckten, gezackten Krummsäbeln. Über der Reling sind am Bug und am Heck Arbalests zu erkennen. Ein raues Gackern trägt über die Wellen. Unter dem Bugspriet ist eine Galionsfigur befestigt: eine springende Stockente mit einem breiten Messer im Schnabel und einem Krummsäbel in jeder Hand.*"},
     {k:"Backbord & Steuerbord", x:"Reling zum Deck (#3), zum Vorderkastell (#10) und zum Achterkastell (#11)."}
    ]},
   {n:"2", t:"Matrosenquartier", p:51, pin:[21.5,22.4], wesen:[],
    vl:"Der Geruch von nasser Segeltuchplane und feuchten Federn schlägt euch entgegen. Ein Mast ragt vom Boden bis zur Decke, an ihm hängen in chaotischem Geflecht Hängematten.",
    st:[
     {k:"Abort", x:"Ein winziger Abort ragt ein Stück über den Rumpf hinaus, sodass sein Benutzer sich direkt ins Meer erleichtern kann. Ein Spielercharakter mit dem Talent Schlangenmensch und einer hohen Toleranz gegenüber Schmutz kann sich hinein- oder hinauszwängen."},
     {k:"Hängematten", x:"Solange die Hängematten aufgespannt sind, werden alle Nahkampfangriffe mit einem Nachteil gewürfelt und Fernkampfangriffe mit zwei Nachteilen. Stockenten sind nicht betroffen."},
     {k:"Die Galionsfigur", r:1, x:"In einem versteckten Fach (gefunden mit §Entdecken§) neben dem Abort liegt die gerade nicht benutzte Galionsfigur (je nachdem, unter welcher Flagge das Schiff segelt, die Meerjungfrau oder der Pirat). Eine Luke im Bug erlaubt es, die Galionsfiguren leicht auszutauschen."},
     {k:"Achtern", x:"Tür zum Deck (#3)."}
    ]},
   {n:"3", t:"Deck", p:51, pin:[21.5,58.7], wesen:[],
    vl:"Das verwitterte Deck wird vom aufragenden Großmast und einer Luke nach unten beherrscht. Zwei Treppen am Heck flankieren eine Tür, deren obere Hälfte ein prunkvolles, bunt bemaltes Wappen ziert.",
    st:[
     {k:"Krähennest", x:"Oben auf dem Großmast sitzt das Krähennest, das während der Fahrt rund um die Uhr von einem Matrosen besetzt ist. Es zu erreichen erfordert zwei gelungene §Akrobatik§-Würfe."},
     {k:"Arbalests", x:"An jeder Seite des Decks ist eine Arbalest montiert. Eine Arbalest funktioniert wie eine nicht tragbare Schwere Armbrust. Sie verursacht 2W10 Schaden (stechend) und hat eine Reichweite von 100 Metern."},
     {k:"Voraus", x:"Treppe hinauf zum Vorderkastell (#10)."},
     {k:"Voraus", x:"Tür zum Matrosenquartier (#2)."},
     {k:"Achtern", x:"Treppe hinauf zum Achterkastell (#11)."},
     {k:"Achtern", x:"Tür zum Gang (#4). Das Wappen auf der Tür lässt sich entfernen (erfordert einen gelungenen §Entdecken§- und §Fingerfertigkeit§-Wurf). Welches Wappen es ist, hängt von der gesetzten Flagge ab. Unter der Flagge der Blutschnäbel zeigt es ein Paar gekreuzte, blutbefleckte Krummsäbel; unter der Flagge der Weißen Feder zeigt es einen breiten goldenen Entenschnabel über gekreuzten weißen Federn – das Wappen der Familie Breitschnabel."},
     {k:"Hinab", x:"Treppe zum Laderaum (#8)."},
     {k:"Hinab", x:"Luke zum Laderaum (#8). Ist sie offen, ist es möglich, Gegner im Laderaum mit langen Nahkampfwaffen anzugreifen."}
    ]},
   {n:"4", t:"Gang", p:51, pin:[21.5,69.2], wesen:[],
    vl:"Ein schmaler Gang mit lackierten Holztüren in alle Richtungen. Drei Türen tragen kleine Metallschilder.",
    st:[
     {k:"Achtern", x:"Verschlossene Tür zu Plathyras Kajüte (#7). Das Türschild zeigt das Wappen der Weißen Feder."},
     {k:"Backbord", x:"Tür zur Waffenkammer (#6). Das Türschild zeigt eine Arbalest über zwei gekreuzten Entermessern."},
     {k:"Voraus", x:"Tür zum Deck (#3). Es hängt kein Schild daran."},
     {k:"Steuerbord", x:"Verschlossene Tür zu Dominus’ Kajüte (#5). Das Türschild zeigt eine Ruderpinne."}
    ]},
   {n:"5", t:"Dominus’ Kajüte", p:52, pin:[31.9,69.2], wesen:[],
    vl:"Der Raum wird von einem großen Tisch beherrscht, der mit Navigationsgeräten und vergilbten Seekarten bedeckt ist.",
    st:[
     {k:"Navigationsgerät", x:"Gewährt einen Vorteil auf §Seefahrt§-Würfe zur Navigation auf See."},
     {k:"Seekarten", x:"Die Karten zeigen den Spielercharakteren unbekannte Orte wie die Ostlande, Mont Drak, Brinestead und Immer-Drak, enthalten aber keine Anleitung, wie man dorthin gelangt. Das ist Stoff für ein anderes Abenteuer."},
     {k:"Backbord", x:"Tür zum Gang (#4)."}
    ]},
   {n:"6", t:"Waffenkammer", p:52, pin:[11.1,69.2], wesen:[],
    vl:"Ein enger Raum, dessen Wände von Waffenständern gesäumt sind. Die Luft riecht nach Metall, mit einem vertrauten, aber schwer einzuordnenden Unterton.",
    st:[
     {k:"Arbalests", x:"Ist das Schiff gerade nicht für den Kampf gerüstet, lagern hier sechs Arbalests (S. 51), dazu eine große Menge Bolzen in Fässern."},
     {k:"Der Geruch von Blut", x:"Ein gelungener §Wildniskunde§-Wurf erlaubt es den Spielercharakteren, den Unterton als den Geruch von altem, getrocknetem Blut zu erkennen."},
     {k:"Verstecktes Lager", r:1, x:"In der hinteren Wand der Waffenkammer befindet sich ein verborgener Schrank (zu finden mit einem §Entdecken§-Wurf oder durch Suchen an genau der richtigen Stelle), in dem die Waffen der Blutschnäbel lagern. Darunter sind zahlreiche Krummsäbel und Dolche, deren Klingen vom häufigen Gebrauch schwarz verfärbt sind."},
     {k:"Steuerbord", x:"Tür zum Gang (#4)."}
    ]},
   {n:"7", t:"Plathyras Kajüte", p:52, pin:[25.5,81.2], wesen:[],
    vl:"In der Mitte des Raumes steht ein eindrucksvoller Esstisch, und gleich hinter der Tür befindet sich ein Glasschrank voller glänzender Teller und Kelche. An einer Wand hängt ein Gemälde, das ein Schiff voller Stockenten im Kampf mit einem riesigen schwarzen Kraken zeigt. Hinter einem roten Samtvorhang ist ein ungemachtes Bett zu erahnen.",
    st:[
     {k:"Das Gemälde", x:"Ein gelungener §Mythen & Legenden§-Wurf verrät, dass das Gemälde den legendären Kampf des Hynchos Breitschnabel mit dem Riesenkraken zeigt."},
     {k:"Der Trophäenschrank", r:1, x:"Hinter dem Gemälde verborgen steht ein Trophäenschrank, in dem Plathyra Andenken an Schiffe aufbewahrt, die sie geplündert hat. Der Schrank ist mit einem §Entdecken§-Wurf zu finden. Darin liegen unter anderem eine blutbefleckte Flagge des Handelshauses Drei Monde, eine Halskette mit den Initialen S&S, die dem verlorenen Sohn der Schiffbauerfamilie von Soldrian & Söhne abgenommen wurde, und ein zweiteiliges Amulett, dessen Hälften je ein Profilporträt zeigen und das einst von Marima und Ediona getragen wurde (S. 22)."},
     {k:"Die Truhe", r:1, x:"Unter dem Bett steht eine kleine Truhe mit Plathyras liebsten Besitztümern. Ihr Deckel trägt das Wappen der Familie Breitschnabel als Relief. Wer die Truhe öffnen will, ohne auf das Wappen zu drücken (mit einem §Entdecken§-Wurf mit einem Nachteil zu entdecken oder wenn ein Spieler ausdrücklich auf das Wappen drückt), wird von einer winzigen Nadel gestochen, die mit tödlichem Gift bestrichen ist (Wirkstärke 15)."},
     {k:"Voraus", x:"Tür zum Gang (#4)."}
    ]},
   {n:"8", t:"Laderaum", p:53, pin:[54.3,43.2], wesen:[],
    vl:"Der Laderaum erstreckt sich fast über die gesamte Länge des Schiffes, unterbrochen nur von den dicken Masten, die vom Boden bis zur Decke ragen. Der Rumpf knarrt, und es riecht stark nach Teer. Am Heck befindet sich eine kleine Tür, und in der Mitte des Raumes klafft die Ladeluke, offen zum Deck darüber und zur frischen Seeluft.",
    st:[
     {k:"Fracht", x:"Wenn die Spielercharaktere das Schiff zum ersten Mal betreten, haben die Blutschnäbel ihre jüngste Beute noch nicht entladen – Eisenbarren aus den Zwergenminen des Kummergebirges. Haben sie Kapitänin Domidia Treibholz im Tod in der Tiefe (S. 35) getroffen, erkennen sie vielleicht das Siegel auf den Barren: eine Hand, die eine Spitzhacke umklammert."},
     {k:"Langboote", x:"Unter einer Plane liegen drei flache Langboote mit Rudern, die die Blutschnäbel für lautlose Annäherungen benutzen."},
     {k:"Segel", r:1, x:"In einem versteckten Lagerraum hinter der Treppe (mit einem §Entdecken§-Wurf zu finden) bewahrt die Besatzung die gerade nicht benutzten Segel auf. Die Segel der Blutschnäbel sind tiefrot, die der Weißen Feder tragen das ikonische Wappen mit dem goldenen Schnabel und den weißen Federn."},
     {k:"Achtern", x:"Tür zur Kombüse (#9)."},
     {k:"Hinauf", x:"Treppe zum Deck (#3)."},
     {k:"Hinauf", x:"Ladeluke zum Deck (#3). Ist die Luke offen, ist es möglich, Gegner an Deck mit langen Nahkampfwaffen anzugreifen."}
    ]},
   {n:"9", t:"Kombüse", p:53, pin:[54.3,74.6], wesen:[],
    vl:"Teller, gusseiserne Töpfe, Behälter, Kisten und Säcke stapeln sich auf Bänken rund um eine gemauerte Feuerstelle. Ein großer, leicht angebrannter Fisch brät an einem groben Spieß über dem Feuer.",
    st:[
     {k:"Lebensmittelvorräte", x:"Spielercharaktere, die eine Runde damit verbringen, die Vorräte zu durchsuchen, finden eine Ration Essen. Suchen sie einen Tagesabschnitt lang, ergibt das W4 Rationen."},
     {k:"Koch", x:"Haben sich die Charaktere unbemerkt an Bord geschlichen, bereitet ein Matrose in der Kombüse die Mahlzeiten des Tages zu."},
     {k:"Voraus", x:"Tür zum Laderaum (#8)."}
    ]},
   {n:"10", t:"Vorderkastell", p:53, pin:[87.5,24.3], wesen:[],
    vl:"Der Fockmast wird auf beiden Seiten von Halterungen für Arbalests flankiert [samt den Arbalests selbst, wenn das Schiff gerade für den Kampf gerüstet ist]. Das Bugspriet ragt stolz nach vorn und oben. Ganz vorn steht eine große Ankerwinde.",
    st:[
     {k:"Arbalests", x:"Ist das Schiff für den Kampf ausgerüstet, sind innerhalb der Reling zwei Arbalests montiert, neben jeder ein fest verzurrtes Fass mit Bolzen."},
     {k:"Die Ankerwinde", x:"Den Anker zu lichten erfordert einen gelungenen STÄ-Wurf. Andere Charaktere dürfen helfen. Auch der Heckanker im Achterkastell (#11) muss gelichtet werden, bevor das Schiff segeln kann."},
     {k:"Achtern", x:"Treppe hinab zum Deck (#3)."}
    ]},
   {n:"11", t:"Achterkastell", p:53, pin:[87.5,72.7], wesen:[],
    vl:"Eine mächtige Pinne beherrscht das Achterkastell. Die Reling ist mit kleinen, geschnitzten und bemalten Holzfiguren geschmückt, und am Heck ragt der Besanmast auf.",
    st:[
     {k:"Die Figuren", x:"Die geschnitzten Figuren entlang der Reling ändern sich je nach der Flagge, unter der das Schiff segelt. Unter der Flagge der Weißen Feder sind es gekreuzte, weiß bemalte Federn. Unter der Flagge der Blutschnäbel sind es gekreuzte Krummsäbel."},
     {k:"Besanmast", x:"Kann gefällt werden (25 TP, Rüstungswert 6, halbiert bei Verwendung von Äxten)."},
     {k:"Pinne", x:"Ein Spielercharakter mit STÄ 15 oder höher kann die Pinne mit einem gelungenen STÄ-Wurf mit einem Nachteil herausreißen. Ohne Pinne lässt sich das Schiff nicht steuern."},
     {k:"Anker", x:"Den Anker zu lichten erfordert einen gelungenen STÄ-Wurf. Andere Charaktere dürfen helfen. Auch der Bugsanker im Vorderkastell (#10) muss gelichtet werden, bevor das Schiff segeln kann."},
     {k:"Arbalests", x:"In beiden hinteren Ecken des Achterkastells befinden sich Halterungen für Arbalests. Die Arbalests sind montiert, wenn das Schiff für den Kampf gerüstet ist."},
     {k:"Achtern", x:"Treppe hinab zum Deck (#3)."}
    ]}
  ]}
 ]
};
