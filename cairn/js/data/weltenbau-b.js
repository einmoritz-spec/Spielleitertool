/* Cairn – Weltenbau B: Dungeon-Samen und Wald-Samen (Wardenhandbuch S. 34–79) */
(function(){
/* Hilfsfunktion: mehrspaltige W20-Tabelle aus Spaltenlisten */
function T(head, cols){
  var n = cols[0].length, rows = [];
  cols.forEach(function(c){ if(c.length !== n) throw new Error("Spaltenlänge " + c.length + " statt " + n + " bei " + head.join("/")); });
  for(var i = 0; i < n; i++) rows.push([String(i + 1)].concat(cols.map(function(c){ return c[i]; })));
  return {t:"tbl", head:head, rows:rows};
}

CN.add("weltenbau", {id:"dungeon-erschaffen", t:"Dungeon-Samen: Einen Dungeon erschaffen", p:34, buch:"cn_w", b:[
 {t:"h", x:"Einen Dungeon erschaffen"},
 {t:"h4", x:"Benötigtes Material"},
 {t:"ul", x:["Ein Blatt Papier und ein Notizbuch. Letter/A4 reicht.","Bleistifte und Radiergummis.","Mindestens ein W6 und ein W20, ideal sind jedoch 6 W6 und 2 W20."]},
 "Im Folgenden nennen wir das Blatt Papier die Dungeon-Karte. Wie bei jeder anderen Regel gilt: Wenn dir ein Tabellenergebnis nicht gefällt, würfle neu oder passe es nach Belieben an!",
 "Folge diesem Ablauf für jeden Dungeon-Interessenpunkt (POI) in deinem Setting. Sieh dir die Ergebnisse der Dungeon-Typ-Tabelle von früher an und lies sie von deiner Karte ab. Welches Bild drängt sich sofort auf? Wo liegt der Dungeon? Wie sieht sein Eingang aus? Mach dir keine Sorgen, wenn du diese Fragen noch nicht beantworten kannst. Am Ende dieses Vorgehens wirst du es können.",
 {t:"h4", x:"Überblick"},
 {t:"ul", x:["Beschreibe den ursprünglichen Zweck des Dungeons, seinen Bau und schließlich seinen Verfall.","Beschreibe die NSC und Fraktionen des Dungeons, einschließlich ihrer besonderen Eigenheiten und Absichten.","Lege das Dungeon-Thema fest.","Erstelle die Karte.","Bestücke die Räume des Dungeons."]},
 {t:"h", x:"Geschichte"},
 "Wer hat den Dungeon erbaut? Wofür wurde er ursprünglich genutzt? Vielleicht war er einst eine gewaltige Schmiede, in der die mächtigste Waffe der Welt gefertigt werden konnte. Oder eine Grabstätte uralter Könige, die ihre Seelen an die Länder band, über die sie einst herrschten. Würfle auf den folgenden Tabellen und halte die Ergebnisse in deinem Notizbuch fest. Behalte dabei diese Fragen im Kopf: „Was für ein Dungeon ist das, und was macht ihn ungewöhnlich?“ und „Warum wurde dieser Dungeon gebaut, wie wurde er gebaut, und was führte zu seinem Untergang?“",
 {t:"h4", x:"Zweck"},
 "Würfle mit 1W20 für jede Spalte und kombiniere die Ergebnisse.",
 T(["W20","Ursprüngliche Nutzung","Erbaut von"],[
  ["Ahnenriten","Arkane Bibliothek","Astraler Handelsknoten","Tierische Schöpfungen","Zuchtstätte","Begräbnisstätte","Himmelsbeobachtung","Geheime Experimente","Verbotene Liebschaften","Schmiede einer großen Waffe","Versteck","Undurchdringliches Gewölbe","Eindringen in Träume","Abgeschiedene Zuflucht","Militärischer Außenposten","Observatorium","Pilgerstätte","Schutz seltener Artefakte","Geheimer Treffpunkt","Schatzhort"],
  ["Ein gefallener Held","Ein fanatischer Kult","Ein vergessenes Imperium","Ein lange toter Dichter","Ein militanter Orden","Ein berühmter Alchemist","Eine königliche Dynastie","Eine Geheimgesellschaft","Ein tyrannischer Herrscher","Ein Kriegerstamm","Ein wohlhabender Einsiedler","Verzweifelte Rebellen","Ketzerische Alchemisten","Ketzerische Mönche","Unmoralische Zauberer","Umgekehrte Astrologen","Verbrecherfamilien","Prunkvolle Händler","Pilger eines toten Gottes","Abtrünnige Gelehrte"]])
]});

CN.add("weltenbau", {id:"dungeon-bau", t:"Dungeon-Samen: Bau und Verfall", p:36, buch:"cn_w", b:[
 {t:"h", x:"Konstruktion"},
 "Würfle mit 1W20 für jede Spalte und kombiniere die Ergebnisse.",
 T(["W20","Eingang","Baumaterial"],[
  ["Der Bau einer Kreatur","Ein Traum","Ein gewaltiger Baum","Ein Brunnen","Ein riesiges Grab","Hinter einem Wasserfall","Zwischen Menhiren","Höhle","Mitte eines Labyrinths","Felsentür","Hohle Statue","Illusionäre Wand","Minenschacht","Treibsand","Himmelwärts gerichteter Lichtstrahl","Sternenlichtpfad","Durch ein Gemälde","Unter einer Brücke","Unterwassertunnel","Nebelschleier"],
  ["Knochen","Koralle","Kristall","Erde","Ätherisches Gewebe","Fleisch","Schwebende Plattformen","Pilze","Glas","Eis","Lebende Pflanzen","Marmor","Metall","Obsidian","Versteinertes Holz","Sand","Schattenmaterie","Stein","Gespinste","Holz"]]),
 {t:"h", x:"Ruinierung"},
 "Würfle mit 1W20 für jede Spalte und kombiniere die Ergebnisse.",
 T(["W20","Zustand","Ursache"],[
  ["Kadaver","Zerfallend","Verflucht","Entweiht","Verschlungen","Versetzt","Geteilt","Gefroren","Heimgesucht","Verseucht","Überwuchert","Überbevölkert","Versteinert","Geplündert","Vergiftet","Versengt","Nebelverhangen","Überflutet","Endlos","Verzerrt"],
  ["Alchemistischer Unfall","Uralter Fluch","Verheerende Flut","Bürgerkrieg","Konkurrierende Rituale","Von einer Bestie verschlungen","Seuche","Hedonismus","Invasion","Langzeitige Verlassenheit","Außer Kontrolle geratene Magie","Magisches Siegel","Naturkatastrophe","Natürliche Erosion","Verschleierung","Von Monstern überrannt","Plötzlicher Klimawandel","In eine andere Welt teleportiert","Zu Stein erstarrt","Ungelöste Geister"]])
]});

CN.add("weltenbau", {id:"dungeon-bewohner", t:"Dungeon-Samen: Bewohner und Fraktionen", p:38, buch:"cn_w", b:[
 {t:"h", x:"Dungeon-Bewohner"},
 "In den meisten Dungeons leben Kreaturen, die ihn zu ihrem Zuhause gemacht haben. Mit der folgenden Tabelle kannst du die allgemeine Haltung aller oder einzelner intelligenter Kreaturen im Dungeon beschreiben. Würfle auf der Eigenschaften-Tabelle und halte die Ergebnisse in deinem Notizbuch fest. Das beschreibt die allgemeine Haltung der Kreaturen, die im Dungeon zu finden sind.",
 "Außerdem sollte jeder Dungeon mindestens einen NSC haben, der aus der Masse heraussticht. Solche Figuren ziehen das Dungeonleben jedem anderen vor, verhalten sich aber trotzdem anders als ihre Artgenossen. Es sollten NSC sein, mit denen die Gruppe sprechen, handeln, die sie anheuern, denen sie helfen kann und so weiter. Diese seltsamen Kreaturen können tief in die anderen Bewohner und Fraktionen des Dungeons verstrickt oder ihnen gegenüber völlig neutral sein. Würfle noch einmal auf der Eigenschaften-Tabelle, halte die Ergebnisse in deinem Notizbuch fest und behalte dabei diese Fragen im Kopf:",
 {t:"ul", x:["„Was wissen wir über die Kreaturen und Fraktionen, die den Dungeon bewohnen?“","„Was versucht jede Fraktion zu erreichen, und was steht ihr im Weg?“"]},
 {t:"h4", x:"Eigenschaften der Bewohner"},
 "Würfle mit 1W20 für jede Spalte und kombiniere die Ergebnisse.",
 T(["W20","Tugenden","Laster"],[
  ["Mitfühlend","Mutig","Kreativ","Folgerichtig denkend","Ehrlich","Scharfsinnig","Unbestechlich","Individualistisch","Loyal","Methodisch","Höflich","Praktisch","Widerstandsfähig","Gelehrt","Selbstgenügsam","Bodenständig","Lernbeflissen","Weltgewandt","Unerschütterlich","Witzig"],
  ["Zerstreut","Distanziert","Kritisch","Zynisch","Gierig","Impulsiv","Unflexibel","Naiv","Starrköpfig","Passiv","Pedantisch","Perfektionistisch","Sarkastisch","Selbstsüchtig","Skeptisch","Stur","Oberflächlich","Unkonzentriert","Fantasielos","Eitel"]]),
 {t:"h", x:"Dungeon-Fraktionen"},
 "Jeder Dungeon sollte eine oder mehrere Fraktionen mit eigener Absicht, eigenen Hindernissen, Anführern und einer eigenen Rangordnung haben.",
 {t:"h4", x:"Absichten"},
 "Würfle mit 1W20 für jede Spalte und kombiniere die Ergebnisse.",
 T(["W20","Ziel","Hindernis"],[
  ["Aufstieg","Schöpfung","Zerstörung","Herrschaft","Erleuchtung","Erkundung","Wachstum","Neuerung","Gerechtigkeit","Wissen","Befreiung","Frieden","Macht","Bewahrung","Schutz","Erlösung","Rache","Überleben","Verwandlung","Reichtum"],
  ["Konflikt","Verderbnis","Kosten","Gefahr","Verfall","Zwietracht","Spaltung","Dogma","Bloßstellung","Grabenkämpfe","Furcht","Unwissenheit","Unfähigkeit","Ungerechtigkeit","Isolation","Widerstand","Opfer","Stillstand","Tradition","Schwäche"]])
]});

CN.add("weltenbau", {id:"dungeon-karte", t:"Dungeon-Samen: Einen Dungeon bauen", p:40, buch:"cn_w", b:[
 {t:"h", x:"Die Karte erstellen"},
 {t:"ul", x:["**1.** Wirf 6–20 W6 auf die Dungeon-Karte und ignoriere alle Würfel, die vom Blatt fallen. Das sind die Räume des Dungeons (Abb. 1).","**2.** Schreibe die oben liegenden Ergebnisse mit Hilfe der Dungeon-Würfelwurf-Tabelle auf das Blatt. Eine 4 steht zum Beispiel für einen Besonderen Raum, den du auf dem Blatt mit dem Buchstaben „B“ kennzeichnen kannst.","**3.** Wähle den Raum, der dem Blattrand am nächsten liegt. Das ist der Eingang zum Dungeon (Abb. 2).","**4.** Nummeriere, beginnend beim Eingang, jeden Raum auf der Dungeon-Karte (Abb. 2). Wenn dir ein Raum „zu weit“ vom Rest entfernt scheint, wirf einen weiteren Würfel und folge dem bisherigen Vorgehen, um einen neuen Raum hinzuzufügen."]},
 {t:"d", h:"Dungeon-Würfelwurf-Tabelle", die:"W6", rows:[["1","Monster (S. 44)"],["2–3","Wissen (S. 45)"],["4","Besonders (S. 46)"],["5–6","Falle (S. 47)"]]},
 {t:"h", x:"Wege zeichnen"},
 {t:"ul", x:["**5.** Zeichne, beginnend beim Eingang, 1–4 Wege zwischen den einzelnen Räumen (Abb. 2).","Erschaffe Schleifen, verzweigte Gänge, Sackgassen und Abkürzungen zwischen den Räumen.","Manche Wege sind **bedingt**, dargestellt durch eine durchkreuzte Linie.","Manche Wege sind **verborgen**, dargestellt durch eine gestrichelte Linie.","**6.** Erschaffe mindestens zwei Kreuzungen (sich kreuzende Linien) ohne Raum dazwischen."]},
 {t:"h", x:"Die Räume bestücken"},
 {t:"ul", x:["**7.** Würfle für jeden Raum auf den passenden Tabellen und halte die Ergebnisse in deinem Notizbuch fest.","**8.** Filtere für jeden Raum die Tabellenergebnisse durch das Thema, das du zuvor in diesem Vorgang erzeugt hast."]},
 {t:"note", x:"Abb. 2 (Beispiel): Raum 1 (Wissen) Speisesaal + Geruch · Raum 2 (Besonders) Möbel + Fällt · Raum 3 (Monster) Echse + Erholt sich · Raum 4 (Falle) Gifte + Darauftreten · Raum 5 (Wissen) Studierzimmer + Einrichtung · Raum 6 (Besonders) Rauch + Illusion · Raum 7 (Falle) Zerquetscht + Interagieren · Raum 8 (Monster) Insektoid + Verstecken · Raum 9 (Besonders) Spiegel + Öffnet. Der Spalt (Fracture) trennt die Karte."}
]});

CN.add("weltenbau", {id:"dungeon-raeume", t:"Dungeon-Samen: Monster- und Wissensräume", p:44, buch:"cn_w", b:[
 {t:"h", x:"Monsterräume"},
 "Monster sind alle gefährlichen Kreaturen, die in einem Dungeon leben. Das heißt nicht, dass sie Eindringlinge automatisch angreifen! Monster „warten“ nicht einfach darauf, dass die Charaktere sie finden, sondern haben ihre eigenen Wünsche und Ziele, und sei es nur die Suche nach der nächsten Mahlzeit. Manche Monster können sprechen, denken und sogar um Gnade betteln. Auch Menschen können Monster sein.",
 "Würfle mit 1W20 für jede Spalte und kombiniere die Ergebnisse.",
 T(["W20","Gruppe","Tätigkeit"],[
  ["Vogelartig","Bestie","Koloss","Konstrukt","Dämon","Außerweltlich","Fee","Riese","Goblinartig","Humanoid","Hybridwesen","Körperlos","Insektoid","Echse","Magisch","Mythisch","Pflanze","Gestaltwandler","Untot","Ungewöhnlich"],
  ["Bauen","Verschlingen","Sterben","Kämpfen","Wachsen","Spuken","Verstecken","Töten","Paaren","Trauern","Patrouillieren","Beten","Beschützen","Sich erholen","Intrigieren","Schlafen","Auflauern","Foltern","Trainieren","Gefangen sein"]]),
 {t:"h", x:"Wissensräume"},
 "Wissensräume sollten auf dem Thema des Dungeons aufbauen, eine wertvolle Lehre vermitteln oder die Charaktere mit einem NSC oder einer Fraktion in Verbindung bringen. Sie können ein Dilemma erzeugen, das die Gruppe eint oder sie in Konflikt mit ihrer Mission bringt. Mindestens sind diese Räume eine Kuriosität, die dem Erlebnis jenseits von Gefahr und Rätselraten etwas Einprägsames hinzufügt. Natürlich sollten die Charaktere nicht wissen, dass diese Räume weder Gefahren noch Herausforderungen enthalten. Das erhöht die Spannung im Dungeon und bietet zugleich eine mögliche Atempause und die Gelegenheit, die Erzählung wachsen zu lassen.",
 "Würfle mit 1W20 für jede Spalte und kombiniere die Ergebnisse.",
 T(["W20","Raumtyp","Hinweis"],[
  ["Waffenkammer","Kaserne","Badehaus","Zisterne","Hof","Krypta","Höhle","Speisesaal","Wachposten","Krankenstation","Küche","Latrine","Bibliothek","Schrein","Schmiede","Stall","Lagerraum","Studierzimmer","Gewölbe","Werkstatt"],
  ["Verfall","Einrichtung","Luftzug","Echos","Fußspuren","Hinterlassenschaften","Licht","Markierungen","Feuchtigkeit","Lärm","Gerätschaften","Rückstände","Huschen","Zeichen","Geruch","Flecken","Klopfen","Temperatur","Vibrationen","Schrift"]])
]});

CN.add("weltenbau", {id:"dungeon-spezial", t:"Dungeon-Samen: Besondere Räume und Fallen", p:46, buch:"cn_w", b:[
 {t:"h", x:"Besondere Räume"},
 "Besondere Räume sind seltene Bereiche mit einem verborgenen oder interaktiven Element. Dieses Element kann eine Herausforderung, ein Hindernis, ein Rätsel oder alles zugleich sein. Diese Räume sollten schwierige Entscheidungen mit langfristigen Folgen bieten. Sie können die Erkundung des Dungeons erleichtern, aber zu einem hohen Preis.",
 "Würfle mit 1W20 für jede Spalte und kombiniere die Ergebnisse.",
 T(["W20","Besonderheit","Eigenschaft"],[
  ["Bücher","Brücke","Apparatur","Kreatur","Tür","Flammen","Möbel","Loch","Flüssigkeit","Spiegel","Wandgemälde","Becken","Schatten","Rauch","Statue","Oberfläche","Schatz","Stimmen","Rad","Schrift"],
  ["Altert","Alarmiert","Belebt","Zieht an","Greift an","Schließt","Fällt","Glüht","Wächst","Illusion","Lässt schweben","Verriegelt","Öffnet","Spiegelt","Stößt ab","Enthüllt","Verschiebt","Bringt zum Schweigen","Teleportiert","Verwandelt"]]),
 {t:"h", x:"Fallenräume"},
 "Eine Falle ist ein gefährlicher, verborgener Gegenstand, der meist durch die Interaktion eines Charakters ausgelöst wird. Fallen sind von Natur aus nicht offensichtlich, aber eine gute Falle sollte Hinweise auf ihr Vorhandensein oder den wahren Zweck des Raums enthalten.",
 "Würfle mit 1W20 für jede Spalte und kombiniere die Ergebnisse.",
 T(["W20","Falle","Auslöser"],[
  ["Lässt altern","Verbrennt","Fängt ein","Trägt fort","Verwirrt","Zerquetscht","Verflucht","Schneidet","Macht taub","Lässt fallen","Ertränkt","Lässt gefrieren","Verklebt","Hypnotisiert","Durchbohrt","Infiziert","Hebt","Vergiftet","Schockt","Beschießt"],
  ["Aktivieren","Zerbrechen","Überqueren","Stören","Betreten","Löschen","Fokussieren","Interagieren","Anzünden","Bewegen","Öffnen","Ziehen","Schieben","Lesen","Sprechen","Darauftreten","Nehmen","Reden","Berühren","Stolpern"]])
]});

CN.add("weltenbau", {id:"dungeon-beispiel", t:"Beispiel-Dungeon: Der zerbrochene Tempel", p:48, buch:"cn_w", b:[
 "Nehmen wir für dieses Beispiel an, wir betrachten einen POI, der mit den Methoden aus dem Kapitel Setting-Samen erzeugt wurde. Unsere relevanten Ergebnisse waren:",
 {t:"ul", x:["Gelände: Wald","Typ: Tempel","Merkmal: Abgeschieden"]},
 {t:"h", x:"Geschichte"},
 "**Was für ein Dungeon ist das, und was macht ihn ungewöhnlich?**",
 "Ein abgelegener Waldtempel, von der Welt abgeschnitten durch ein gewaltiges Meer aus Bäumen und Gestrüpp.",
 "Dann würfeln wir auf den Tabellen für Zweck, Konstruktion und Ruinierung und erhalten folgende Ergebnisse:",
 {t:"ul", x:["Zweck: Der Schutz seltener Artefakte. Erbaut von einem fanatischen Kult.","Konstruktion: Der Eingang liegt in einem Kreis aus Menhiren, und das Fundament besteht aus demselben versteinerten Holz, das ihn umgibt.","Ruinierung: Geteilt (buchstäblich) durch konkurrierende Rituale."]},
 "**Warum wurde dieser Dungeon gebaut, und was führte zu seinem Untergang?**",
 "Er wurde von einem extremistischen Kult von Waldmagiern errichtet, um ein wirklichkeitsveränderndes Relikt zu beherbergen. Sein Eingang liegt unter einem falschen Stein in einem Menhirkreis tief im Wald. Wände und Decke des Dungeons bestehen aus versteinertem Holz, denn das uralte Artefakt wirkt auf lebende Pflanzen und verformt sie nach seinem Willen. Eine Spaltung innerhalb des Kults führte zum Streit um die Kontrolle über das Relikt, doch beide Seiten wurden Opfer ihrer eigenen Hybris und löschten einander beinahe aus. Als zwei gegensätzliche Rituale aufeinanderprallten, wurde der Tempel entzweigerissen, geteilt entlang der Fraktionsgrenzen. Das Relikt ging in der Folge verloren.",
 {t:"h", x:"Bewohner und Fraktionen"},
 "Weiter zu den derzeitigen Bewohnern unseres Dungeons. Wir erhalten folgende Ergebnisse (für zwei Fraktionen gewürfelt):",
 {t:"ul", x:["Bewohner: Die hier lebenden Kreaturen sind praktisch, aber fantasielos.","Fraktion A: Ziel: Zerstörung. Hindernis: Widerstand.","Fraktion B: Ziel: Erlösung. Hindernis: Tradition."]},
 "**Was wissen wir über die Kreaturen und Fraktionen, die den Dungeon bewohnen?**",
 "Die heutigen Bewohner dieses Dungeons sind die Nachkommen der ursprünglichen Fraktionen. Sie sind meist pragmatisch, was ihren endlosen Krieg angeht, und können sich keinen Ausweg vorstellen.",
 "**Was versucht jede Fraktion zu erreichen, und was steht ihr im Weg?**",
 "Der Purpurne Pfad möchte seine früheren Brüder, die Azurne Legion vernichten, wird aber von der Kampfkraft seines Gegners eingeschüchtert. Die Azurne Legion empfindet tiefe Scham über die Taten ihrer Vorfahren und glaubt, ihre Erlösung nur erlangen zu können, indem sie das verborgene Artefakt des Tempels findet und zerstört. Unglücklicherweise verbietet ein uralter Brauch jedem, der azurblaues Tuch trägt, nach dem verlorenen Relikt zu suchen.",
 {t:"h", x:"Dungeon-Thema"},
 "Mit einer Vorstellung von Geschichte, Zweck und Bewohnern des Dungeons haben wir endlich unser Thema. Fügen wir alles zusammen:",
 {t:"box", h:"Thema", b:[
  "Eingebettet in einen dichten, verhangenen Wald liegt ein Tempel, der vollständig aus versteinertem Holz besteht. Erbaut von einem fanatischen Kult, den Kindern von Eolith, sollte der Tempel das Woodturn (Holzwandler) schützen, ein uraltes Relikt, das jede Pflanze zu Stein verwandeln konnte. Der Kult spaltete sich schließlich in zwei gegnerische Fraktionen, und als ihre widerstreitenden Rituale aufeinanderprallten, wurde der Tempel zerschmettert, wobei jede Fraktion eine Hälfte an sich nahm. Heute ringen die Nachkommen dieser Fraktionen weiter um Kontrolle, Zerstörung und Erlösung, werden aber durch Machtungleichgewichte und uralte Tradition gehemmt.",
  "Der Purpurne Pfad glaubt, dass er das ursprüngliche Relikt, wenn er es zurückholte, zur endgültigen Vernichtung der Azurnen Legion einsetzen könnte. Doch jeder Versuch, die Tiefen des Tempels zu ergründen, wurde von den früheren Brüdern vereitelt. Ein jüngster Angriff hat viele von ihnen das Leben gekostet, und die übrigen Mitglieder sind seither aus dem Tempel geflohen, um sich neu zu sammeln.",
  "Die Azurne Legion empfindet große Scham über die Taten ihrer Vorfahren und glaubt, dass der Tempel wieder heilen und ihre Scham getilgt würde, wenn das ursprüngliche Relikt zerstört wäre. Unglücklicherweise verbietet eine althergebrachte Tradition allen Mitgliedern, nach dem Relikt zu suchen, um die Fehler der Vergangenheit nicht zu wiederholen.",
  "In der Mitte des Tempels (zwischen 3 und 4) teilt ein gewaltiger Riss (der Spalt) den Dungeon in zwei Hälften und dient als eine Art entmilitarisierte Zone. Beide Fraktionen wissen, dass jenseits seiner Schwelle nur der Tod wartet.",
  "Tief im Dungeon verborgen liegt ein Relikt namens Woodturn. Schon durch bloße Berührung kann es Bäume, Holz und andere Pflanzen versteinern. Wird es nicht richtig eingedämmt, könnte es einen ganzen Wald in eine Wüstenei verwandeln!"]},
 {t:"h", x:"Aufhänger"},
 {t:"ul", x:["Der Purpurne Pfad hat ein öffentliches Angebot von je 300 GM für die sichere Bergung eines „uralten Relikts“ tief im Tempel gemacht. Mit jedem „Widerstand“ müssen die Charaktere allein fertigwerden.","Ein Agent der Azurnen Legion, der im Geheimen handelt, tritt an die Gruppe heran. Sie soll das Woodturn finden und zerstören, einen Gegenstand von großer Macht, der irgendwo im Tempel verloren ging. Der Auftrag soll geheim bleiben, und Mitglieder jeder Fraktion werden sich ihnen wahrscheinlich entgegenstellen. Die Charaktere sollen (insgesamt) 1000 GM erhalten."]}
]});

CN.add("weltenbau", {id:"dungeon-beispiel-tempel", t:"Beispiel-Dungeon: Der zerbrochene Tempel (Räume)", p:50, buch:"cn_w", b:[
 {t:"h", x:"Eingang: Menhirkreis"},
 "Ein kleiner Kreis aus 3 m hohen Steinen steht auf einem grasbewachsenen Hügel. Weiße Bäume umgeben die Lichtung von allen Seiten.",
 {t:"ul", x:["**Steine:** Moosbedeckt, mit dünner, verwitterter Schrift in einem uralten Alphabet.","» Ein Experte auf dem Gebiet kann dennoch erkennen, dass die Steine viele Jahrhunderte alt sind.","**Gras:** Eine Stelle in der Mitte des Kreises ist brauner als der Rest.","» Darunter verborgen liegt eine Falltür. Versteinerte Holzstufen führen hinab zu 1.","**Bäume:** Versteinert. Weiß wie Schnee."]},
 {t:"h", x:"Überall im Tempel"},
 {t:"ul", x:["**Licht:** In jedem Raum sind Wandleuchter in die Wände eingelassen. Keiner brennt.","**Geruch:** Feucht, Erde und eine Spur Schwefel.","**Lärm:** Fernes Geschrei, dazu gelegentliches Grollen und Knarren.","**Bauweise:** Wände und Böden bestehen aus weißem, versteinertem Holz."]},
 {t:"h", x:"1 – Speisesaal"},
 "*Wissen: Speisesaal. Geruch.*",
 "Lange, rustikale Tische sind in waagerechten Reihen aufgestellt. Der Geruch von Wurzelgemüse und Nelken hängt in der Luft.",
 {t:"ul", x:["**Tische:** Groß genug für 80 Personen, vom Kult vor der Spaltung genutzt.","**Geruch:** Am stärksten beim nördlichen Durchgang (Richtung 4)."]},
 {t:"h", x:"2 – Sitzzimmer"},
 "*Besonders: Möbel. Fällt.*",
 "Plüschige, staubbedeckte Stühle und Sofas stehen im Halbkreis um einen schwarzen Holzstuhl. Die Luft schmeckt abgestanden.",
 {t:"ul", x:["**Staub:** Die meisten Möbel wirken seit Langem verlassen, aber der schwarze Stuhl ist staubfrei.","**Stuhl:** Sauber und glänzend, wie neu. An der Unterseite sind Fußfesseln befestigt, und der Stuhl ist im Boden verschraubt.","» Rund um den Stuhl ist eine dünne, kaum sichtbare quadratische Linie in den Boden geschnitten.","» Setzt sich jemand auf den Stuhl und legt die Fesseln an, senkt sich der Boden unter dem Stuhl und fährt hinab nach 3."]},
 {t:"h", x:"3 – Basiliskenlager"},
 "*Monster: Echse. Erholt sich.*",
 "Ein Basilisk schläft auf einem Nest, das auf einer Wandplatte an der Ostseite des Raums errichtet wurde. In der Mitte des Raums verläuft ein hoher Glaskäfig vom Boden bis zur Decke. An der Südwand hängt eine lange, zerbrochene Kette.",
 {t:"ul", x:["**Basilisk:** Erholt sich, nachdem sie gerade ein neues Gelege aus drei Eiern gelegt hat.","» Sie wärmt ihre Eier, indem sie auf ihnen sitzt, und verlässt sie nicht für lange.","» Die Eier sind je 1000 GM wert. Sie sind sperrig und extrem zerbrechlich.","**Wand:** Der Durchgang nach Osten ist trotz Einsturz noch zugänglich. Der Basilisk ist zu groß, um über das Geröll zu kommen.","**Käfig:** Dient als Beobachtungsschacht von 2 aus, durch den neue Akolythen in die Kammer hinabgelassen wurden, um den Basilisken zu beobachten.","**Kette:** Diente einst dazu, den Basilisken hier festzuhalten."]},
 {t:"cards", x:[{t:"Basilisk", w:"TS 10, Rüstung 1, STÄ 12, GES 13, WIL 13, Biss (W10)", b:[
  {t:"ul", x:["Lange, schlangenartige Echsen, die tief unter der Erde oder in Dornengestrüpp dicht unter den Füßen nisten.","Gegen einen Basilisken zu kämpfen, ohne seinem Blick zu begegnen, ist schwierig (Angriffe, die ihm zugewandt erfolgen, sind geschwächt).","**Blick:** Ein Ziel, das dem Basilisken zugewandt ist, wird langsam von unten nach oben versteinert und ist nach drei Runden vollständig erstarrt. Aus dem Muskelmagen des Basilisken lässt sich ein Gegengift brauen. Das Spiegelbild der Kreatur ist harmlos."]}]}]},
 {t:"h", x:"4 – Küche"},
 "*Falle: Gifte. Darauftreten.*",
 "Der ausgezehrte Leichnam eines Mannes liegt ausgestreckt auf einem großen Hackklotz. Ein Wandleuchter an der Westwand über dem westlichen Ausgang brennt mit zwei blauen Flammen. An der Nordwand stehen kniehohe offene Schränke.",
 {t:"ul", x:["**Leichnam:** Gekleidet in die roten Roben des Purpurnen Pfades. Sieht aus, als wäre er mindestens zwei Wochen tot.","» Keine offensichtlichen Wunden oder Zeichen, abgesehen von einer grünen Kruste an der Lippe des Mannes.","» Er trägt einen weißen Dolch aus versteinertem Holz (W8).","**Wandleuchter:** Wer unter den Flammen hindurchgeht, löst einen Giftgasstoß in den Raum aus, der allen in der Nähe W4 STÄ-Schaden zufügt (Rettungswurf, um nicht das Bewusstsein zu verlieren).","**Schränke:** Leer. Die Anordnung von Schränken und Klotz lässt vermuten, dass dies einst eine Gemeinschaftsküche war.","» Einer der Schränke hat eine falsche Rückwand, die sich eindrücken lässt und die Giftgasfalle für eine Minute abschaltet."]},
 {t:"h", x:"5 – Studierzimmer"},
 "*Wissen: Studierzimmer. Einrichtung.*",
 "Bücherregale umschließen jeden Fingerbreit der Wand, ihre staubigen Fächer sind mit Bücherhaufen vollgestapelt. Ein nicht entzündeter Kerzenleuchter hängt von der Decke.",
 {t:"ul", x:["**Regale:** Trotz fehlender Möbel sieht der Raum aus, als wäre er einst ein rege genutztes Studierzimmer gewesen.","**Bücher:** Seit Jahrzehnten unberührt. Wischt man den Staub von den Rücken, kommen Bücher zu allen möglichen Themen zum Vorschein.","» Fast jedes Wort in jedem Buch wurde tiefschwarz geschwärzt.","**Kerzenleuchter:** Ungewöhnliche Machart, 500 GM wert (vier Inventarplätze, zerbrechlich).","» Die Kerzen (5 Verwendungen) sind noch brauchbar (sofern man sie erreichen kann). Angezündet erzeugen sie etwa 6 m Dunkelheit, die von nichtmagischem Licht nicht durchdrungen werden kann. Sie wurden als letzte Beleidigung für das alte Studierzimmer hier angebracht."]},
 {t:"h", x:"6 – Die zerbrochene Halle"},
 "*Besonders: Rauch. Illusion.*",
 "Wirbelnder Rauch erfüllt die Luft in einem unaufhörlichen Taifun aus Asche und Glut und verdeckt die Ausgänge. Schwache Bewegungen sind im Rauch zu erkennen, dazu gelegentliches Geschrei von der Westseite des Raums. Der Boden ist uneben, die Ostseite liegt einen vollen Fuß höher als die Westseite.",
 {t:"ul", x:["**Rauch:** Magisch, er verursacht weder Geräusch noch Geruch und lässt sich mit normalen Mitteln nicht auflösen. Die Ausgänge dieses Raums sind verdeckt.","» Im Durchgang nahe dem Südwestgang steht die zerbrochene Statue einer Gestalt in Robe (siehe Basilisk, 3).","**Bewegung:** Soldaten in Roben im Nahkampf mit unsichtbaren Gegnern.","» Hier sind immer mindestens 3 Mitglieder einer der Fraktionen in Scharmützel verwickelt. Sie greifen im Allgemeinen alle Gestalten an, die den Raum durchqueren wollen, lassen sich aber vom Rauch leicht verwirren.","» Wegen des Rauchs sind alle Angriffe im Raum geschwächt.","**Boden:** Beim Zerbrechen des Tempels gespalten. Zusammen mit dem Rauch ist die Orientierung in diesem Raum äußerst schwierig."]},
 {t:"cards", x:[{t:"Druidenkultist", w:"TS 5, STÄ 11, GES 12, WIL 8, versteinertes Kurzschwert (W8)", b:[
  {t:"ul", x:["Trägt eine rote oder blaue Robe, die die Zugehörigkeit zur Fraktion anzeigt. Ansonsten nicht zu unterscheiden."]}]}]},
 {t:"h", x:"7 – Falsches Relikt"},
 "*Falle: Zerquetscht. Interagieren.*",
 "Vier Säulen sind im Quadrat um einen weißen Stab angeordnet, der in der Luft schwebt.",
 {t:"ul", x:["**Säulen:** Vom Boden bis zur Decke gebaut und aus versteinertem Holz.","» Der Raum zwischen den Säulen ist durch eine magische, undurchdringliche Barriere geschützt. Mindestens zwei Säulen müssen zerstört werden, damit die Barriere sich auflöst.","» Werden zwei benachbarte Säulen zerstört, stürzt der Raum über den Anwesenden ein (GES-Rettungswurf oder 12 STÄ-Schaden).","**Stab:** Eine Nachbildung des Woodturn aus 9, aber ohne echte Kraft."]},
 {t:"h", x:"8 – Nest"},
 "*Monster: Insektoid. Verstecken.*",
 "Der Boden ist stark zerbrochen, gegliedert durch aufragende Platten versteinerten Bodens. Große Löcher sind über die niedrige Decke verteilt. Es gibt keine offensichtlichen Ausgänge.",
 {t:"ul", x:["**Platten:** Ein Labyrinth aus zerbrochenen Splittern. Der Ausgang nach Westen ist von den Platten vollständig verdeckt.","**Löcher:** Von einem Grabenden Schrecken geschaffen.","» Ignoriert die Gruppe die Decke, greift sie den ersten SC an, der unter einem Loch hindurchgeht (ignoriert TS).","» Ein Loch auf der Westseite ist in Wahrheit ein 9 m langer Tunnel, der hinauf zu 9 führt. Kleine Rillen entlang des Tunnels erleichtern das Klettern, sofern man sie erreichen kann."]},
 {t:"cards", x:[{t:"Grabender Schrecken", w:"TS 6, Rüstung 1, STÄ 16, GES 11, WIL 4, Biss (W10), Säurespritzer (W8, Streuschaden)", b:[
  {t:"ul", x:["Riesige Insektoide mit vielen Beinen und glänzenden schwarzen Augen. Ernähren sich von Erde, Wurzeln und Fleisch.","Graben dicht unter der Oberfläche, um ahnungslose Kreaturen aus dem Hinterhalt zu überfallen.","**Kritischer Schaden:** Das Ziel verliert ein Körperteil. Würfle 1W6. 1: Kopf, 2–4: Bein, 5–6: Arm."]}]}]},
 {t:"h", x:"9 – Spiegelraum"},
 "*Besonders: Spiegel. Öffnet.*",
 "An der Westwand hängt ein Spiegel an einer Schiene. Auf der Ostseite ist ein großes Loch in den Boden gegraben.",
 {t:"ul", x:["**Schiene:** Verläuft in einem vollen Kreis um den Raum und erlaubt es, den Spiegel entlang der Schiene zu bewegen.","**Spiegel:** Wird er an die Nordwand bewegt, enthüllt das Spiegelbild eine kleine, unsichtbare Nische auf der Südseite.","» Die Nische liegt hinter einem ansonsten illusorischen Wandstück. Darin verborgen liegt das Woodturn.","» Wird der Spiegel beschädigt, explodiert er (W6 STÄ-Schaden für alle in der Nähe). Das Opfer ist im Mangel, und seine Schnitte heilen nicht, bis es den Tempel verlassen hat.","**Loch:** Tunnel nach 8 (9 m)."]},
 {t:"cards", x:[{t:"Woodturn", w:"Relikt", b:[
  "Ein weißer Stab aus poliertem Holz. Berührt man damit eine lebende Pflanze, versteinert sie. 3 Ladungen.",
  {t:"ul", x:["**Aufladen:** Verbrenne den Stab einen Tag und eine Nacht lang in starkem Feuer. Schütte die Asche in reines Quellwasser. Der Stab bildet sich neu."]}]}]}
]});

CN.add("weltenbau", {id:"wald-erschaffen", t:"Wald-Samen: Einen Wald erschaffen", p:56, buch:"cn_w", b:[
 {t:"h", x:"Waldcrawls"},
 "Ein Waldcrawl ist eine einfache Methode, ein großes bewaldetes Gebiet zu erkunden. Er besteht in der Regel aus sich verzweigenden Pfaden, die verstreute Interessenpunkte verbinden. Ein Waldcrawl hat zwar einige Eigenschaften mit einem klassischen Dungeon-Streifzug gemein, ersetzt aber Steinwände und Decken durch die dichte, nichtlineare Gestalt eines dicht bewaldeten Gebiets. Statt Räumen werden Interessenpunkte als Lichtungen oder größere Veränderungen der Waldlandschaft festgelegt. Anders als bei der Dungeon-Erkundung können die Charaktere jedoch Abkürzungen nehmen, „querwaldein“ gehen oder auf Bäume klettern, um sich besser umzusehen (natürlich nicht umsonst).",
 {t:"h", x:"Den Wald erkunden"},
 {t:"ul", x:["Folge den Dungeon-Erkundungsregeln aus dem Spielerhandbuch, würfle aber statt auf der Tabelle der Dungeon-Ereignisse auf der Tabelle der Wildnis-Ereignisse.","Versucht die Gruppe, den Pfad zu verlassen und durch den Wald zu schneiden, sollte die Spielleitung die damit verbundenen Kosten klarmachen: zusätzliche Reisezeit, Anstrengung, eventuell nötiges Spezialwerkzeug und offensichtliche Gefahren. Abseits des Pfades zu gehen löst außerdem automatisch einen Wurf auf der Tabelle der Wildnis-Ereignisse aus.","Die Punkte eines Waldcrawls liegen nah beieinander. Auf klar markierten Pfaden lässt sich ein kleiner Wald (10–15 POIs) in einer einzigen Wache erkunden.","Stütze dich auf die Fiktion und den gesunden Menschenverstand, um zu bestimmen, wie viel Tageslicht vorhanden ist, ob ein geeigneter Rastplatz zur Verfügung steht und welche Kosten oder Gefahren der Wald im Dunkeln bergen mag."]},
 {t:"h", x:"Einen Wald erschaffen"},
 "Folge diesem Ablauf für jedes bewaldete Gelände in einer Region. Wenn ein Widerspruch oder ein interessantes Muster auftaucht, sei offen dafür, frühere Ergebnisse neu zu formulieren oder zu ändern!",
 "Im Folgenden nennen wir das Blatt Papier die Karte. Wie bei jeder anderen Regel gilt: Wenn dir ein Tabellenergebnis nicht gefällt, würfle neu oder passe es nach Belieben an!",
 {t:"h4", x:"Benötigtes Material"},
 {t:"ul", x:["Ein Blatt Papier und ein Notizbuch. Letter/A4 reicht.","Bleistifte und Radiergummis. Buntstifte oder Wachsmalstifte sind ebenfalls gut.","Mindestens ein W6 und ein W20, ideal sind jedoch 6 W6 und 2 W20."]},
 {t:"h4", x:"Überblick"},
 {t:"ul", x:["**1.** Beschreibe den Wald.","**2.** Beschreibe den Geist des Waldes.","**3.** Erschaffe die POIs des Waldes.","**4.** Erschaffe die Pfade des Waldes.","**5.** Erschaffe Begegnungen im Wald.","**6.** Benenne den Wald."]},
 {t:"h", x:"Waldbeschreibung"},
 "Würfle auf der Waldbeschreibung und halte die Ergebnisse in deinem Notizbuch fest. Diese Tabelle zeigt sowohl, wie Außenstehende den Wald wahrnehmen, als auch seine besonderen natürlichen Merkmale. Wurde das bewaldete Gelände mit den Methoden aus dem Kapitel Setting-Samen erzeugt, überlege, wie sich das zugehörige Wahrzeichen darauf auswirkt.",
 "Wahrzeichen helfen Reisenden, sich im dichten Blattwerk zurechtzufinden, und dienen als geografische Orientierungspunkte: ungewöhnlich hohe Bäume, Wachtürme und so weiter. Die meisten Wahrzeichen im Wald sind nur sichtbar, wenn man auf einen Baum klettert, einige sind aber groß genug, um sich vom Grün abzuheben. Manche Wahrzeichen werden eher gehört als gesehen.",
 "Würfle mit 1W20 für jede Spalte und kombiniere die Ergebnisse.",
 T(["W20","Beschreibung","Beschreibung"],[
  ["Karg","Kristallin","Krank","Sterbend","Blühend","Leuchtend","Geweiht","Moosbedeckt","Trüb","Gefährlich","Versteinert","Verschmutzt","Urwüchsig","Versengt","Abgeschieden","Erstickend","Zeitlos","Unkartiert","Unberührt","Gewunden"],
  ["Uralt","Erwachend","Summend","Verfallend","Überflutet","Neblig","Eiskalt","Gefroren","Von Pilzen durchzogen","Verborgen","Befallen","Dunstig","Moosbedeckt","Überwuchert","Heilig","Abgeschieden","Still","Schwelend","Sonnendurchflutet","Wild"]])
]});

CN.add("weltenbau", {id:"wald-geist", t:"Wald-Samen: Geist, POIs und Pfade", p:58, buch:"cn_w", b:[
 {t:"h", x:"Der Geist des Waldes"},
 "In gewisser Weise ist der Wald ein einziges Wesen, dessen Gehirn in jedem Baum und jeder Pflanze lebt, verbunden durch ein Netz aus Dorn und Ast. Die Tiere und Pflanzen sind seine Glieder und lenken seine Wünsche, Begierden, Ängste und Bedürfnisse. Die Kreaturen, die innerhalb seiner Grenzen leben, sind sein Blut: Sie folgen seinem Ruf, indem sie dringend benötigte Verteidigung liefern und Eindringlinge zurückweisen. Der Wald wird sich selbst und seine Kinder stets beschützen. Würfle auf den Tabellen für Eigenschaften und Waldabsicht und halte die Ergebnisse in deinem Notizbuch fest. Das beschreibt die allgemeine Haltung der im Wald lebenden Kreaturen sowie das, was der Wald als Ganzes will.",
 {t:"h4", x:"Eigenschaften"},
 "Würfle mit 1W20 für jede Spalte und kombiniere die Ergebnisse.",
 T(["W20","Tugenden","Laster"],[
  ["Anpassungsfähig","Ausgeglichen","Tapfer","Klug","Hegend","Einfühlsam","Ausdauernd","Anmutig","Zäh","Harmonisch","Unabhängig","Gelehrt","Fürsorglich","Aufmerksam","Reinigend","Entschlossen","Vernünftig","Scharfsinnig","Stabil","Vertrauensvoll"],
  ["Aggressiv","Distanziert","Begehrlich","Losgelöst","Beherrschend","Zweifelnd","Wuchernd","Verurteilend","Naiv","Verschleiernd","Übereifrig","Parasitär","Passiv","Verschmutzend","Räuberisch","Stolz","Starr","Zerstreut","Selbstsüchtig","Territorial"]]),
 {t:"h4", x:"Waldabsicht"},
 "Würfle mit 1W20 für jede Spalte und kombiniere die Ergebnisse.",
 T(["W20","Ziel","Hindernis"],[
  ["Überfluss","Erwachen","Gleichgewicht","Läuterung","Bewahrung","Verteidigung","Entdeckung","Emanzipation","Bereicherung","Evolution","Ausbreitung","Harmonie","Heilung","Integration","Gerechtigkeit","Metamorphose","Reinigung","Wiedergeburt","Ruhe","Einheit"],
  ["Abmachungen","Glaube","Verunreinigung","Krankheit","Ausbeutung","Zersplitterung","Gebrechlichkeit","Gier","Unwissenheit","Befall","Invasion","Isolation","Führung","Unterdrückung","Verschmutzung","Knappheit","Stillstand","Aufruhr","Verwundbarkeit","Schwäche"]]),
 {t:"h", x:"Interessenpunkte erschaffen"},
 {t:"ul", x:["**1.** Wirf 8–12 W6 auf die Karte und ignoriere alle Würfel, die vom Blatt fallen. Das sind die Interessenpunkte (POIs) im Wald.","**2.** Schreibe die oben liegenden Ergebnisse mit Hilfe der Wald-Würfelwurf-Tabelle auf das Blatt. Eine 4 steht zum Beispiel für einen Unterschlupf, den du mit dem Buchstaben „U“ kennzeichnen kannst.","**3.** Wähle zwei gegenüberliegende Punkte, möglichst nahe am Blattrand. Das sind Eingang und Ausgang des Waldes.","**4.** Nummeriere, beginnend beim Eingang und endend beim Ausgang, jeden POI auf der Karte.","**5.** Würfle für jeden Punkt auf den passenden Tabellen und halte die Ergebnisse in deinem Notizbuch fest.","**6.** Filtere die Tabellenergebnisse durch die Ergebnisse, die du zuvor in diesem Vorgang erzeugt hast."]},
 {t:"d", h:"Wald-Würfelwurf-Tabelle", die:"W6", rows:[["1","Monster"],["2–3","Ruinen"],["4","Unterschlupf"],["5–6","Gefahr"]]},
 {t:"note", x:"Abb. 2 (Beispiel): Punkt 1 (Eingang) Versteinertes Lager + Überwuchert von seltsamer Flora · Punkt 2 Harzfalle + Geist in Kristall gefangen · Punkt 3 Einsiedlerhütte + Bietet eine fertige Mahlzeit · Punkt 4 Hütte auf Beinen + Jagen ist verboten · Punkt 5 Grizzly + Umherstreifen · Punkt 6 Gefrorener Troll + Ein misslungener Zauber · Punkt 7 Überflutetes Kloster + Verstecktes Lager · Punkt 8 Riesenspinnennest + Verletzte Kreatur · Punkt 9 (Ausgang) Fischerhütte + Von Armeedeserteuren besetzt."},
 {t:"h", x:"Pfade"},
 {t:"h4", x:"Pfadarten"},
 {t:"ul", x:["**Normale** Pfade sind offensichtliche oder viel begangene Routen zwischen zwei Punkten. Dargestellt durch eine dicke Linie.","**Verborgene** Pfade stehen auf keiner bekannten Karte. Sie zu entdecken erfordert immer irgendeinen Preis. Dargestellt durch eine gestrichelte Linie.","**Bedingte** Pfade können versperrt sein oder erfordern Spezialwerkzeug (Boote, Kletterausrüstung usw.) zum Überqueren. Andere sind ohne Karte oder Führer womöglich gar nicht begehbar. Dargestellt durch eine durchkreuzte Linie."]},
 {t:"h4", x:"Pfade zeichnen"},
 {t:"ul", x:["Zeichne, beginnend beim Eingang, 1–4 Wege zwischen den einzelnen Punkten.","» Erschaffe Schleifen, verzweigte Pfade, Sackgassen und Abkürzungen zwischen den Punkten.","» Manche Wege sind **bedingt**, dargestellt durch eine durchkreuzte Linie.","» Manche Wege sind **verborgen**, dargestellt durch eine gestrichelte Linie.","» Erschaffe nach Möglichkeit Kreuzungen (sich kreuzende Linien) ohne Punkt dazwischen.","Erschaffe Pfade, indem du über Wege zeichnest, die 3–4 Punkte auf offensichtliche, stimmige oder interessante Weise verbinden.","» Verborgene Wege und kurze, isolierte Strecken gehören üblicherweise nicht zu einem Pfad.","» Benutze Buntstifte oder Wachsmalstifte, um verschiedene Pfade zu unterscheiden.","Würfle für jeden Pfad auf der Tabelle der Pfadarten und halte die Ergebnisse in deinem Notizbuch fest. Wirken manche Ergebnisse unstimmig, ist das in Ordnung! Verwandle solche Gegensätze in Fragen wie „Warum führt eine alte Holzfällerstraße zum Versteck der Banditen?“ Scheu dich allerdings nicht, ein passenderes Ergebnis zu wählen, wenn du Mühe hast, es zum Laufen zu bringen!"]},
 {t:"h4", x:"Pfadtypen"},
 "Würfle 2W20 und kombiniere die Ergebnisse.",
 T(["W20","Typ","Markierung"],[
  ["Tierpfad","Banditenpfad","Felsbrockenweg","Abgeschiedener Hain","Wildwechsel","Trockenes Flussbett","Feenpassage","Bauernpfad","Sammlerpfad","Jägerspur","Königsmarsch","Händlerstraße","Alte Holzfällerstraße","Obstgartenpfad","Pilgerpfad","Sporengesättigter Pfad","Klebriger Harzpfad","Wegbaum","Höhen an der Baumgrenze","Kriegsroute"],
  ["Bärenscheuerspuren","Gebogene Bäume","Kratzspuren","Beschädigte Pflanzen","Hirschspuren","Ferner Gesang","Leises Lachen","Fuchsspuren","Frische Spinnweben","Riesige Federn","Leuchtende Pilze","Gedämpfte Glocken","Schemen im Augenwinkel","Hasenköttel","Schlangenspuren","Rauch","Stille","Steinhaufen","Schwankende Pflanzen","Baumschnitzereien"]])
]});

CN.add("weltenbau", {id:"wald-poi", t:"Wald-Samen: Monster, Ruinen, Unterschlupf, Gefahr", p:62, buch:"cn_w", b:[
 {t:"h", x:"Monster"},
 "Monster sind alle gefährlichen Kreaturen, denen man im Wald begegnen kann. Das heißt nicht, dass sie Eindringlinge automatisch angreifen! Monster „warten“ nicht darauf, dass Charaktere über sie stolpern, sondern haben ihre eigenen Wünsche und Ziele. Manche Monster können sprechen, denken und sogar um Gnade betteln. Auch Menschen können Monster sein.",
 "Würfle mit 1W20 für jede Spalte und kombiniere die Ergebnisse.",
 T(["W20","Monster","Tätigkeit"],[
  ["Bandit","Blinzelhund","Blutelch","Zentaur","Dryade","Ettin","Gargyl","Grüner Drache","Grizzlybär","Killerbienen","Naga","Nachtkatze","Eulenbär","Pixie","Skelett","Baumhirte","Einhorn","Irrlicht","Wolf","Waldtroll"],
  ["Graben","Vergraben","Zerstören","Verschlingen","Sterben","Kämpfen","Nahrung suchen","Bewachen","Verstecken","Jagen","Töten","Paaren","Trauern","Patrouillieren","Umherstreifen","Sich erholen","Auskundschaften","Auflauern","Foltern","Gefangen sein"]]),
 {t:"h", x:"Ruinen"},
 "Wälder sind wilde Orte, aber das heißt nicht, dass Menschen nicht versucht hätten, sie zu zähmen. Die Überreste dieser Versuche tauchen hin und wieder auf und deuten auf die Torheit derer hin, die sich dem Wald entgegenstellen wollen.",
 "Würfle mit 1W20 für jede Spalte und kombiniere die Ergebnisse.",
 T(["W20","Ruine","Merkmal"],[
  ["Verlassenes Herrenhaus","Zerbrochene Sonnenuhr","Angeschlagener Glockenturm","Eingestürzter Megalith","Zerfallener Wachturm","Verrottete Kanus","Verwucherter Pavillon","Freigelegte Werkstatt","Überflutetes Kloster","Modriges Bauernhaus","Vernachlässigter Schrein","Überwuchertes Anwesen","Versteinertes Lager","Verrottete Mühle","Zerfallener Kreuzgang","Verrosteter Markt","Zerborstene Brücke","Gesplitterter Obelisk","Versunkene Gartenlaube","Umgestürzte Statue"],
  ["Ein Waldgeist, bereit zu sterben","Eine Hexe, die Zutaten sammelt","Ein Spiegelbild seiner selbst","Ein selbstverliebter Sprite","Ein stilles Geisterkonzert","Ein winziges Ruinendorf","Durch einen unbrechbaren Fluch gebunden","Gebundene Kreatur","Zerbrochenes Portal","Frische Leichen","Verstecktes Lager","Vermummte Männer, die ein Ritual vollenden","Unhörbares Flüstern aus allen Richtungen","Gezeichnet von Schlachten vergangener Tage","Überwuchert von seltsamer Flora","Lebensechte Spielzeugsoldaten","Überreste eines gescheiterten Rituals","Der Schleier zwischen den Welten ist dünn","Visionen der Vergangenheit","Gebanntes Gelände"]]),
 {t:"h", x:"Unterschlupf"},
 "Trotz seiner wilden und unberechenbaren Natur gab es stets Mutige, Geschickte oder Tollkühne, die versuchten, sich im Wald ein Leben aufzubauen. Und manche haben Erfolg und hinterlassen ihre Spuren in Form eines schwelenden Lagerfeuers oder eines grauen Turms, die müden Reisenden eine willkommene Rast bieten.",
 "Würfle mit 1W20 für jede Spalte und kombiniere die Ergebnisse.",
 T(["W20","Unterschlupf","Merkmal"],[
  ["Banditenversteck","Falknerturm","Fischerhütte","Vergessene Ruinen","Einsiedlerhütte","Verstecktes Dorf","Höhle am Hang","Hohler Baum","Jagdhütte","Hütte auf Beinen","Efeuumrankter Turm","Unterstand","Holzfällerplatz","Klösterlicher Rückzugsort","Moosiger Tümpel","Nachtmarkt","Stall des Bleichen Volkes","Außenposten eines Waldläufers","Verrauchte Hütte","Zerfetzte Windmühle"],
  ["Vorerst verlassen","Zieht wilde Tiere an","Gegen alle Bräuche erbaut","In einem Riesenbaum errichtet","Ein Waldritter fordert zur Prüfung heraus","Von abgerichteten Tieren bewacht","Von wenig hilfreichen Geistern heimgesucht","Verbirgt ein mächtiges Artefakt","Jagen ist verboten","Von einem übernatürlichen Wesen bewohnt","Von Armeedeserteuren besetzt","Von Kultisten überrannt","Speiseort des Bleichen Volkes","Parasitäres Blattwerk","Jagdgrund des Schweinevolkes","Beliebt bei Schmugglern","Bietet eine fertige Mahlzeit","Von einem verspielten Geist beschützt","Schauplatz eines uralten Mordes","Diebeslager"]]),
 {t:"h", x:"Gefahr"},
 "Der Wald ist ein gefährlicher Ort, mit dem man nicht spaßen sollte. Der Wald und seine Bewohner tun, was sie zum Überleben tun müssen, und selbst gesättigt bereiten sie sich schon auf die nächste Mahlzeit vor. Die Bäume, die Pflanzen und die Erde selbst legen tödliche Fallen und Gefahren aus, um jene auszusortieren, die es nicht verdienen, unter den Zweigen hindurchzugehen.",
 "Würfle mit 1W20 für jede Spalte und kombiniere die Ergebnisse.",
 T(["W20","Gefahr","Merkmal"],[
  ["Tierfalle","Moorschatten","Knochenobstgarten","Dornentunnel","Gefrorener Troll","Riesenspinnennest","Insektenschwarm","Wandernde Dickichte","Giftpflanzen","Psychischer Nebel","Harzfalle","Schlafender Riese","Rutschiges Moos","Langsamer Treibsand","Spitzgrube","Brennnesseln","Dornendickichte","Giftsporen","Trollhöhle","Instabiler Boden"],
  ["Ein Haustier-Basilisk","Ein misslungener Zauber","Belebte Rüstung","Vogelspione","Blutende Bäume","Geister in Kristall gefangen","Futterplatz riesiger Nager","Kleinräumiges Wetter","Heulende Steine","Verletzte Kreatur","Unsichtbare Netze","Lebende Vogelscheuchen","Gedächtnisdiebe","Nachahmende Ranken","Pfade, die sich zufällig verändern","Aasfresser, die abwarten","Wachsame Tote","Von Nebel verwischte Spuren","Bäume, die aus Knochen wachsen","Irrlichter versammeln sich"]])
]});

CN.add("weltenbau", {id:"wald-beispiel", t:"Beispiel-Wald: Überblick und Pfade", p:68, buch:"cn_w", b:[
 {t:"h", x:"Waldthema"},
 "Jahrzehntelang wurden Ordnung und Stabilität des Waldes durch eine Abmachung zwischen der Waldhexe Anglwyst und Sweeney, dem Champion des Waldes, aufrechterhalten. Die Hexe hielt mit ihrer Magie Bäume und Tiere gesund, während der Champion dafür sorgte, dass Jäger niemals Kreaturen töteten, die als wesentlich für den Wald galten (erkennbar an einem weißen Fleck im Fell). Ihr Pakt war dauerhaft und unabänderlich, und der Wald war aufgeteilt, sodass weder Hexe noch Champion die Grenze überschreiten durften.",
 "Nach dem Tod der alten Hexe wurde einer ihrer Zauber wild, dann gefährlich. Nun hat eine magische Krankheit begonnen, Bäume und Kreaturen zu befallen, und droht, den ganzen Wald zu verzehren. Jäger nennen sie das Siechen (Withering), weil sie allem, was sie berührt, das Leben entzieht.",
 {t:"h", x:"Der Wald"},
 {t:"dl", x:[["Beschreibung","Krank, Gefroren. Ein dichter Wald, von Seuche und Fäulnis befallen. Teile davon sind fest gefroren."],["Bewohner","Eigenschaften: Stabil, Territorial. Sie wünschen sich die Stabilität zurück, die sie einst kannten, werden aber von uralten Waldgrenzen bedroht."],["Waldabsicht","Eigenschaften: Reinigung, Befall. Der Geist des Waldes wünscht sich nichts mehr, als sich von der Krankheit zu reinigen, die ihn ergriffen hat. Ein Befall durch Riesenspinnen (9) hat überall Netze gespannt, viel zu viele Kreaturen getötet und das Ökosystem untergraben."]]},
 {t:"note", x:"Karte des Beispielwalds: 1 Kranker Lagerplatz (Eingang) · 2 Bernsteingrab · 3 Sweeneys Hütte · 4 Anglwysts Hühnerhütte · 5 Baum an der Kreuzung · 6 Graues Heiligtum · 7 Überflutete Abtei · 8 Schwarze Masse · 9 Fischerhütte. Pfade: Alte Holzfällerstraße, Höhen an der Baumgrenze, Trockenes Flussbett, Sammlerpfad, Jägerspur (verborgen)."},
 {t:"h", x:"Pfade"},
 {t:"h4", x:"Alte Holzfällerstraße, Baumschnitzereien"},
 "Der Pfad zwischen 1 und 5 wird von einer breiten Felswand versperrt, die Kletterausrüstung zum Erklimmen erfordert. Schnitzereien der ursprünglichen Holzfäller dieses Waldes verunstalten noch immer die Oberfläche einiger Bäume.",
 {t:"h4", x:"Höhen an der Baumgrenze, Steinhaufen"},
 "Die Mönche in 7 haben entlang des Pfades für jedes verstorbene Mitglied einen Steinhaufen hinterlassen.",
 {t:"h4", x:"Sammlerpfad, Ferner Gesang"},
 "Anglwyst lebte größtenteils von den reichlich vorhandenen Früchten an diesem Pfad. Ihre Magie war so mächtig, dass Echos ihrer Anwesenheit den Pfad noch immer prägen: Wer ihn entlanggeht, kann noch immer ihren leisen, munteren Gesang hören.",
 {t:"h4", x:"Trockenes Flussbett, Frische Spinnweben"},
 "Ein Fluss verlief einst durch das Westende des Waldes, trocknete aber nach einer Dürre aus. Riesenspinnen wandern auf dem Pfad nach 8 und spinnen ihre Netze entlang des Weges.",
 {t:"h4", x:"Jägerspur, Beschädigte Pflanzen"},
 "Sweeney erlaubt Außenstehenden, auf diesem Pfad und keinem anderen ihr Wild zu jagen, solange sie niemals eine Kreatur mit Weiß im Fell töten."
]});

CN.add("weltenbau", {id:"wald-beispiel-1-4", t:"Beispiel-Wald: POIs 1–4", p:70, buch:"cn_w", b:[
 {t:"h", x:"1 – Kranker Lagerplatz [Eingang]"},
 "*Ruine: Versteinertes Lager, Überwuchert von seltsamer Flora.*",
 "Am Waldrand liegt ein erloschenes Lagerfeuer, daneben sind Bettlager aus dunkelgrauem Stoff ausgebreitet. Pflanzen, Blumen und anderes Grün wachsen dicht über den Lagerplatz. Ein Pfad im Norden führt in den Wald.",
 {t:"ul", x:["**Lagerfeuer:** Das übrige Holz ist tiefgrau verfärbt, eiskalt und hart wie Eisen.","**Bettlager:** Graue Holzsplitter stecken im Stoff.","» Eiskalt. Der Bereich unter dem Stoff ist teils blau und rot, aber aus den Holzsplittern wachsen graue Kreise.","**Flora:** Seltene und einzigartige Arten, die in dieser Gegend nicht üblich sind.","» Geschicktes Beschneiden und ein paar Minuten sorgfältiger Arbeit ergeben eine Heilsalbe (stellt 1W4 STÄ wieder her, 1 Verwendung).","**Pfad:** Lange Rillen in etwa in Form eines Baumstamms sind in den Boden gezogen.","» Feine Spinnweben versperren den Waldeingang, als wäre schon lange niemand mehr hindurchgegangen."]},
 {t:"h", x:"2 – Bernsteingrab"},
 "*Gefahr: Harzfalle, Geist in Kristall gefangen.*",
 "Ein runder Hain aus zinnoberroten Bäumen umgibt eine breite Pfütze aus blubberndem Harz. Ein spitzer grüner Gegenstand ist mitten im Becken gerade noch zu sehen.",
 {t:"ul", x:["**Bäume:** Am Fuß jedes Baumes blutet goldenes Harz, das in die Pfütze darunter fließt. Sie wirken nicht krank.","**Pfütze:** 3,5 m klebriges Harz.","» Knöcheltief und extrem klebrig. Reizt die Haut.","**Gegenstand:** Wirkt kristallin.","» Sehr rutschig. Ohne geeignetes Werkzeug (Handschuhe, eine Stange usw.) schwierig und zeitaufwendig herauszuholen.","» Im Kristall ist der Geist eines Vertrauten namens Gundersnatch gefangen.","» Zerbricht man ihn, erhebt sich der Schatten eines großen Vogels über die Gruppe und verschwindet dann. Alle Charaktere im Zustand Mangel werden davon befreit."]},
 {t:"cards", x:[{t:"Gundersnatch", w:"Geist eines Vertrauten", b:[
  {t:"ul", x:["Kann telepathisch mit jedem kommunizieren, der den Kristall hält.","Wird jeden anflehen, den Kristall zu zerstören. (Ein kräftiger Schlag mit etwas Hartem genügt.)","Im Austausch für seine Freiheit gibt er der Gruppe eine schwarze Feder und sagt, mit ihr könne sie Anglwysts Hühnerhütte in 4 betreten."]}]}]},
 {t:"h", x:"3 – Sweeneys Hütte"},
 "*Unterschlupf: Einsiedlerhütte, Bietet eine fertige Mahlzeit.*",
 "Auf einem kleinen Hügel steht eine Holzhütte. An der Westseite des Gebäudes sind kleine Holzscheite in Reihen aufgestapelt, an der Ostwand ist ein hohes Gestell aufgestellt.",
 {t:"ul", x:["**Hütte:** Mit 3 zu 6 ist Sweeney hier. Andernfalls ist er auf der Jagd. Ein Ring aus weißem Staub ist über die Türschwelle gestreut.","» Wird der Staub aufgewirbelt, bemerkt Sweeney es und macht sich auf den Weg zur Hütte.","**Scheite:** In Reihen zu vier mal vier angeordnet.","» Auf jedem ist die Umrisszeichnung eines Tieres (Bär, Kaninchen, Biber usw.) eingefärbt. Auf dem Kaninchen ist ein weißer Tropfen gemalt. Er sieht neu aus.","**Gestell:** Verschiedene Tierfelle sind straff aufgespannt und trocknen.","» Zusammengenäht ergeben die Felle zwei Sets Schutzkleidung (1 Rüstung) und sind sehr widerstandsfähig gegen Umweltschäden."]},
 {t:"h4", x:"Im Inneren der Hütte"},
 "Sehr schlicht, nur mit einer einfachen Pritsche und einem kleinen Esstisch.",
 {t:"ul", x:["**Pritsche:** Gesprenkelt mit grünem Moos und Zweigen. Riecht leicht nach Regen.","» Der Boden unter der Pritsche ist dick mit grünem Moos bedeckt. Legt Sweeney seine Hände auf das Moos, fällt es ab und gibt einen unterirdischen Tunnel nach 4 frei. Nur Sweeney kann diesen Durchgang aktivieren.","**Tisch:** Auf dem Tisch steht eine fertig zubereitete Mahlzeit aus Entenbraten und Wurzelgemüse, so viel wie eine volle Mahlzeit für 2.","» Ein Geschenk von Anglwyst. Wird sie gegessen, bildet sich die Mahlzeit auf dem Tisch in W12 Stunden neu."]},
 {t:"cards", x:[{t:"Sweeney", w:"TS 12, Rüstung 2, STÄ 13, GES 15, WIL 17, Eibenbogen (W8)", b:[
  {t:"ul", x:["Ein mürrischer, bemooster alter Mann.","Wird er verletzt, schützt und heilt ihn sogar der Wald. Jedes Mal, wenn er stirbt, kehrt er grüner als zuvor zurück.","Würde das Siechen gern aufhalten, kann aber wegen seines Paktes mit Anglwyst 6 nicht betreten. Als Prüfung ihrer Ehre und Geschicklichkeit bittet er die Gruppe, ihm beim Vertreiben der Riesenspinnen in 8 zu helfen.","» Schließt die Gruppe die erste Aufgabe erfolgreich ab, gibt er ihr einen Anhänger des Karnon sowie das Versprechen weiterer Reichtümer, wenn sie die Magie rückgängig machen kann, die den Wald in 6 verheert.","» Kann die Gruppe das Siechen stören, öffnet er den geheimen Pfad nach 4 und sagt ihr, dass sie dort die Hütte betreten darf."]}]},
  {t:"Anhänger des Karnon", w:"Gegenstand", b:["Ein hölzernes Amulett eines bärtigen, gehörnten Mannes. Im Wald kannst du eine Erschöpfung hinzufügen, um die Sinne einer nahen Kreatur zu leihen. Winzig."]}]},
 {t:"h", x:"4 – Anglwysts Hühnerhütte"},
 "*Unterschlupf: Hütte auf Beinen, Jagen ist verboten.*",
 "Eine zylindrische Hütte mit Schornstein, dicht von Blattwerk bedeckt, steht am Rand einer kleinen Lichtung. Am westlichen Eingang steckt ein Holzschild im Boden. An der Nordseite ist eine lange Rolle Hühnerdraht angebracht.",
 {t:"ul", x:["**Hütte:** Die Fenster an der Vorderseite sind dunkel, und aus dem Inneren dringen weder Licht noch Rauch.","» Die Tür hat kein Schlüsselloch und öffnet sich nur für Freunde von Anglwyst, Sweeney oder Gundersnatch.","» Wird die Tür aufgebrochen oder die Hütte bedroht, wachsen von unten zwei Beine, und die Hütte zieht sich rasch in den Wald zurück.","**Blattwerk:** Sowohl Dach als auch Fenster sind von dichten, belaubten Ranken bedeckt.","» Keine der Ranken berührt den Boden, da sie sonst zerrissen würden, wenn die Hütte aufsteht.","**Schild:** Von Ranken bedeckt. In roten Buchstaben steht darauf: „Hier wird nicht gejagt. Harte Strafen.“","» Die Hexe sprach einen Schutzzauber über diesen Ort. Wird hier ein Tier von jemandem getötet, der sprechen kann, erstarrt der Täter sofort zu Stein (kein Rettungswurf).","» Nichts Gefährliches folgt der Gruppe in diesen Teil des Waldes.","**Draht:** Umgibt einen kleinen, verdorrten Garten. In der Mitte steht die rankenbewachsene Steinstatue eines jungen Jägers.","» Der schockiert wirkende Jäger (ein Opfer des Zaubers der Lichtung) hält ein schlaffes Kaninchen kopfüber, ein Messer an dessen Kehle."]},
 {t:"h4", x:"Im Inneren der Hütte"},
 "Üppig ausgestattet. Ein hohes Holzfass steht nahe dem nördlichen Kamin, ein langer Besen ragt heraus. An der Ostwand steht ein großer Ofen. Von der Decke hängt eine Schnur mit Kräutern und Wurzelgemüse.",
 {t:"ul", x:["**Fass:** Mit dickem Mörtel verbunden. Staubfrei und leer bis auf den Besen.","» Im Fass hat bis zu eine Person Platz, und es kann fliegen. (Benutze den Besen, um in der Luft zu „paddeln“.)","**Ofen:** Warm und groß genug, um darauf zu schlafen. An einem der Eisengriffe ist ein roter Schal festgebunden.","» Der Schal, den Sweeney Anglwyst geschenkt hat, ist ansonsten gewöhnlich. Sweeney hätte ihn sehr gern zurück.","**Schnur:** Waren von seltener und ausgestorbener Qualität. Für den richtigen Käufer 500 GM wert.","» An der Schnur hängt eine Alraunenwurzel. Wird sie täglich mit Wasser gefüttert, zeigt sie eine Lüge an, wenn sie eine hört. Schreit laut, wenn man sie schneidet."]}
]});

CN.add("weltenbau", {id:"wald-beispiel-5-9", t:"Beispiel-Wald: POIs 5–9", p:72, buch:"cn_w", b:[
 {t:"h", x:"5 – Baum an der Kreuzung"},
 "*Monster: Grizzly, Bewachen.*",
 "Ein langer Baum liegt quer über einer kleinen Lichtung an der Kreuzung zweier Pfade. Eine steile Felswand im Süden bietet einen steilen Aufstieg vom Fuß aus.",
 {t:"ul", x:["**Baum:** Gewaltig und zumindest teilweise ausgehöhlt. Bärenspuren markieren den Ostzugang.","» Eine Grizzlybärin und ihre drei Jungen haben diesen Baum zu ihrer Höhle gemacht. Im Winter halten sie Winterschlaf, zu jeder anderen Zeit sind sie wach. Die Mutter greift jeden an, der den Baum betritt (Reaktionswurf überspringen).","**Pfade:** Abgebrochene Blätter und Rindenabrieb am Pfad sind ein deutlicher Beweis für die Behausung der Bären.","**Felswand:** In die Felswand sind Metallringe geschlagen.","» Eingebaut, als der Wald noch abgeholzt wurde, aber noch immer stabil. Ideal für Seile."]},
 {t:"cards", x:[{t:"Grizzlybär", w:"TS 6, STÄ 15, GES 13, WIL 5, Klauen (W8+W8)", b:[
  {t:"ul", x:["Rotbraune Bären, die häufig in Gebirgen, Wäldern und Prärien vorkommen.","Fressen am liebsten Fisch und Fleisch und greifen die seltenen Unglücklichen an, die ihren Weg kreuzen.","**Kritischer Schaden:** Beißt das Opfer für zusätzliche W6 STÄ-Schaden. Es blutet sehr schnell aus."]}]}]},
 {t:"h", x:"6 – Graues Heiligtum"},
 "*Gefahr: Gefrorener Troll, Ein misslungener Zauber.*",
 "Ein graues Waldheiligtum steht an der Kreuzung von vier Pfaden. In seiner Mitte scheinen zwei riesige Statuen miteinander zu ringen.",
 {t:"ul", x:["**Heiligtum:** Alles Pflanzenleben in der Nähe ist leblos und matt, als wäre jede Farbe herausgesaugt worden.","» Die Luft flimmert vor Magie, am stärksten über den beiden Statuen.","» Die Wirkung des Siechens ist schon vor dem Betreten der Lichtung sichtbar, da das Siechen begonnen hat, sich in alle Richtungen auszubreiten.","» Pflanzenmaterial, das in die Lichtung gebracht wird, beginnt bald zu versteinern, auch ohne direkten Kontakt.","**Statuen:** Zwei Waldtrolle ringen um einen glänzenden Gegenstand, den der größere von ihnen hoch in die Luft hält.","» Der Gegenstand ist ein Yore Glass (Spiegel der Vergangenheit), ein Spiegel-Relikt, dessen Magie den empfindlichen Zauber gestört hat, der diesen Ort einst zu einer grünen Zuflucht für das Waldleben machte.","» Der Zauber der Hexe lässt sich nur beenden, indem man den Spiegel aus dem Gebiet entfernt oder vollständig zerstört. Die Statue hält ihn fest, doch mit Fett oder dem Brechen des Trollarms lässt er sich lösen.","» Wird der Zauber gebrochen, endet die magische Wirkung, und die Trolle erwachen langsam. Sie versuchen sofort, den Spiegel zurückzuholen."]},
 {t:"cards", x:[{t:"Yore Glass", w:"Relikt", b:[{t:"ul", x:["Einmal pro Tag kann der Besitzer 5 Minuten seines Lebens aus der Sicht der dritten Person noch einmal abspielen. Langfristige Nutzung kann süchtig machen. Wer ihn nicht regelmäßig benutzt, leidet unter Mangel.","**Aufladen:** Fange das Spiegelbild eines anderen im Glas ein, ohne dass er es bemerkt."]}]},
  {t:"Waldtroll", w:"TS 10, STÄ 15, GES 12, WIL 7, Biss (W8), Keule (W10)", b:[{t:"ul", x:["Große Humanoide mit langgestreckten Armen aus Rinde oder Wurzeln. Sie leben in Wäldern und teilen eine tiefe Verbindung mit der Vegetation um sie herum.","Wenn sie getötet werden, regenerieren sie langsam, es sei denn, ihr Leichnam wird aus dem Wald gebracht oder mit Feuer verbrannt.","**Kritischer Schaden:** Moos und Zweige beginnen aus den Wunden des Ziels zu wachsen."]}]}]},
 {t:"h", x:"7 – Überflutete Abtei"},
 "*Ruinen: Überflutetes Kloster, Verstecktes Lager.*",
 "Drei überflutete Gebäude ragen aus der Mitte eines kleinen Teichs, ihre kegelförmigen Dächer lugen unter dem Wasser hervor. Im Norden mündet ein trockenes Flussbett direkt in den Teich. Der östliche Pfad ist von Dutzenden aufgeschichteter Steine gesäumt.",
 {t:"ul", x:["**Gebäude:** Altertümlich, mit subtil schöner religiöser Ikonografie. Offensichtlich eine Abtei.","» Überflutet, nachdem der Damm in 8 zerstört wurde.","**Dächer:** Das höchste der drei Gebäude hat hoch über dem Wasser ein Glasfenster.","» Das Fenster ist festgerostet, lässt sich aber aufstemmen oder aufbrechen, um in das Kapitelhaus der Abtei zu gelangen.","**Steine:** An der Südseite des östlichen Pfades aufgeschichtet. Auf den meisten sind Namen eingraviert.","» Die Mönche haben entlang des Pfades für jedes verstorbene Mitglied Steine aufgeschichtet."]},
 {t:"h4", x:"Kapitelhaus"},
 "Wandteppiche säumen die Wände dieses runden Raums, sein Holzboden ist durch Wasserschäden fast ganz verrottet. Ein eingestürztes Geländer auf der Südwestseite ist alles, was vom überfluteten Treppenhaus hinab in den Rest des Gebäudes übrig ist.",
 {t:"ul", x:["**Wandteppiche:** Schimmelig und nicht zu retten.","» Zeigten ursprünglich die Abtei in ihrer einstigen Pracht und die Mönche, die hier lebten.","**Boden:** Eines der Holzbretter ist weniger verwittert als die anderen. Es riecht schwach nach etwas Blumigem.","» Unter dem Brett liegt ein verstecktes Zauberbuch, Sehnsuchtspfad.","**Treppenhaus:** Vollständig unter Wasser. Die Räume darunter enthalten nur treibende Leichen und ruinierte Bücher."]},
 {t:"cards", x:[{t:"Sehnsuchtspfad", w:"Zauberbuch", b:["Zeigt den kürzesten Weg zu dem Objekt der wahren Herzenssehnsucht. Riecht nach Lavendel. Fügt eine zusätzliche Erschöpfung hinzu, wenn es mehr als einmal pro Tag gelesen wird. Der Vorgang ist kumulativ."]}]},
 {t:"h", x:"8 – Schwarze Masse"},
 "*Gefahr: Riesenspinnennest, Verletzte Kreatur.*",
 "Ein schwarzer Eber humpelt geräuschvoll nahe einer großen Masse aus schwarzem Faden und Bäumen. Fette, ausgetrocknete Kadaver hängen in gesponnener Seide in den Baumkronen. Ein trockenes Flussbett im Süden ist voller Holzhaufen.",
 {t:"ul", x:["**Eber:** Halb in dicke schwarze Seide gehüllt, er miaut klagend.","» Vergiftet durch den Spinnenbiss in der Hinterhand. Kommt die Gruppe ihm zu Hilfe, wird der Wald sich daran erinnern.","**Masse:** Fäden aus dicker schwarzer Seide halten einen 3 m hohen Holzhaufen zusammen.","» Im Nest leben 3 Schwarzseidenspinnen. Sie greifen jeden an, der ihre Nahrung berührt oder ihrem Nest zu nahe kommt.","» Schwarze Seide im Wert von 200 GM lässt sich vorsichtig sammeln. Sie ergibt ein feines Seil (etwa 18 m), das außerdem unglaublich stark ist und wegen seiner wasserabweisenden Eigenschaften begehrt ist.","**Kadaver:** Überwiegend Tierleichen. Durch das schwarze Netz ist eine menschliche Gestalt zu erkennen.","» Der Mensch war ein Jäger, der Sweeneys Warnungen ignorierte und nördlich der Jägerspur jagte. Bei der Leiche finden sich Rationen (2 Verwendungen übrig), 33 GM und ein Hüftmesser (W6).","**Flussbett:** Große Holzhaufen liegen verstreut umher. Stücke schwarzer Seide sind um die längeren Stücke gebunden.","» Ein ehemaliger Biberdamm, der das Wasser auf ein Rinnsal beschränkte. Die Spinnen brachten den Damm zum Einsturz, um ihr Nest zu bauen. Die folgende Flut zerstörte das Kloster in 7, aber der Fluss trocknete erst nach einer Dürre Anfang dieses Jahres aus."]},
 {t:"cards", x:[{t:"Eber", w:"TS 4, STÄ 12, GES 5, WIL 6, Hauer (W6+W6)", b:[]},
  {t:"Schwarzseidenspinne", w:"TS 4, STÄ 4, GES 13, WIL 5, Biss (W8)", b:[{t:"ul", x:["**Kritischer Schaden:** Gift lähmt das Opfer und fügt zusätzlich W4 GES-Schaden zu. Das Opfer wird dann zum Nest der Spinne geschleift, um gefressen zu werden."]}]}]},
 {t:"h", x:"9 – Fischerhütte [Ausgang]"},
 "*Unterschlupf: Fischerhütte, Von Armeedeserteuren besetzt.*",
 "Eine baufällige Hütte am Ufer eines kleinen Sees im Norden. Rauch steigt von einem Kochgestell an der Westseite auf, und laute Stimmen hallen durch das nach Süden gerichtete Fenster.",
 {t:"ul", x:["**Hütte:** Aus einfachen Baumstämmen gebaut, die mit Seil zusammengebunden sind, das frisch aussieht. Fischerdraht führt aus der Nordseite hinaus in den See.","**See:** Ruhig, aber voller Insekten. Ein Pfad auf der Westseite führt vom Wald weg.","» Der See wurde lange nicht befischt und ist überbevölkert. Fischen ist leichte Beute.","**Rauch:** Quillt aus einem hölzernen Kochgestell neben einem Haufen gebratenen Fischs (4 × Rationen, je 3 Verwendungen). Hier wachsen wilde Beeren in Fülle.","**Stimmen:** Lachen und gedämpftes Gespräch. Im Inneren sind mindestens zwei Stimmen zu hören.","» Drei Ex-Soldaten hausen in dieser Hütte. Sie sind Pazifisten, die zwangsweise zum Militärdienst eingezogen wurden. Sie suchen Zuflucht in der Abtei in 7, haben es aber noch nicht so weit geschafft. Sie sind fröhlich und gutherzig, aber absolute Feiglinge.","» Sie wissen wenig über den Wald, außer dass früher ein Fluss vom See nach Süden verlief und irgendwo bei einer Abtei endete."]},
 {t:"h", x:"Begegnungen"},
 {t:"d", h:"Begegnungen", die:"W6", rows:[
  "Ein winziger bärtiger Mann streitet mit einem krächzenden Raben. Der hält etwas Glänzendes im Schnabel.",
  "Eine Dryade sitzt auf einem Stein, ihre Arme von lila Pilzen überzogen. In ihren Augen liegt Gewalt.",
  "Eine Stelle Treibsand ist als weicher Boden getarnt. Eine zerbrochene Seilspule liegt in der Nähe.",
  "Ein knurrendes Wolfsrudel umringt einen frischen Riss. Sie sind nicht erpicht darauf zu teilen.",
  "Wilde Beeren wachsen hier in Fülle. Keine wurde gegessen, nicht einmal von Vögeln.",
  "Eine hastig gestellte, schlecht getarnte Falle. Sie riecht stark nach Urin."]}
]});
})();
