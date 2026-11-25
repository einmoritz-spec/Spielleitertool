/* Eiserne Koralle: Der Gefallene Marsch, Verstecke, Hopesend (S. 92–115) */
var ITO = window.ITO = window.ITO || {};
ITO.marsch = {
 intro:"Ein sumpfiger Ort mit gefährlichem Nebel und abscheulichem Gestank. Jedes Jahr sinkt das Land tiefer und ist von dichter Vegetation überwuchert. Selbst die einheimische Tierwelt ist seltsam geworden.",
 reise:[["Reisen","Die Reise in ein Nachbarfeld dauert den gesamten verbleibenden Morgen, Nachmittag, Abend bzw. die Nacht. Die Gruppe schafft also in der Regel drei Felder pro Tag und schläft im letzten Abschnitt. Wer nicht schläft, ist Entbehrt."],["Wetter","Würfle jeden Morgen, Nachmittag, Abend und jede Nacht W6 für das Wetter. **1–3 Regen:** Feuchte Luft und dicke Tropfen. Regnet es schon, setzt ein Sturm ein, der das Gebiet überflutet, und das Reisen dauert doppelt so lang. **4–5 Grau:** Dunst und Nässe. Ist es schon grau, wird der Nebel so dicht, dass man nicht über das aktuelle Feld hinaussehen kann. **6 Klar:** Die Wolken reißen auf, und die Möwen kreischen."],["Landmarken","Von der Eisernen Koralle sieht die Gruppe Marschland, das sich nach Osten Richtung Hopesend erstreckt, und im Südosten einen Turm mit brennendem Leuchtfeuer (Feld 19)."]],
 zuf:[
  ["Verdrehter Koloss","STÄ 16, 14 hp. Keule W10. Fast menschlich, getrieben von Einsamkeit."],
  ["Tollwütiger Hund","2 hp."],
  ["Verirrter Fischer","5 hp. Speer."],
  ["Affenmensch","STÄ 13, GES 14, WIL 6, 8 hp. Getrieben von Neugier. Verständigt sich mit einer Art Zeichensprache."],
  ["Anemonendrohne","2 hp. Gehirngewaschener Fischer. Keule, W6."],
  ["Zwei Idioten, die erfolglos Monster jagen","mit einem großen Stück Fleisch als Köder."],
  ["Aufbrechender Boden","enthüllt wachsende rote Koralle."],
  ["Verirrte, zornige alte Frau mit Familie","4 hp, Langaxt (W8)."],
  ["Verirrtes Pferd",""],
  ["Ein Flackern","im Augenwinkel, dann nichts."],
  ["Turmhoher Metallmann","STÄ 18, GES 5, WIL 15, 18 hp. Rüstung 3, stampft (W12) oder feuert Todesstrahl (W12). Ihm fehlt eine Hand. Von Macht in den Wahnsinn getrieben."],
  ["Inola Bute, Ermittlerin aus Bastion","WIL 15, 6 hp, Pistole (W6), Dolch (W6). Getrieben davon, Seltsames zu finden."],
  ["Der Bussard","GES 14, 7 hp, Muskete (W8). Getrieben davon, andere zu betrügen. Folgt aus der Ferne, um zu plündern."],
  ["Schwarmgesicht","Spricht kauderwelsches Summsprech. Zeigt auf Nachfrage in die richtige Richtung."],
  ["Wanderndes Erdreich","Meist harmlos."],
  ["Säule aus roter Koralle","steigt aus dem Boden."],
  ["Korallenbrocken","schießen himmelwärts."],
  ["7 Plünderer","4 hp, Rüstung 1, Knüppel (W6), Schilde. Versuchen, jeden zu berauben, fliehen aber bei Gefahr."],
  ["Riesige Metallhand","STÄ 10, GES 7, WIL 15, 10 hp, Rüstung 2, W12 Schaden. Getrieben davon, ihren Körper zu finden."],
  ["Astralklumpen","STÄ 4, GES 4, WIL 18, 13 hp, Rüstung 1. Getrieben davon, den Metallmann zu finden, den er mitsteuern sollte. Kann Arcana aus der Ferne aktivieren."]
 ],
 hex:[
  [1,"Strand",["Sandstrand|Muscheln, tote Fische","Dünen|öde, Fliegen","Eiserne Koralle|ragt aus dem Ozean"]],
  [2,"Säulen",["Kreis hüfthoher Steinpfeiler|Löcher, in die man greifen kann, mit funkelnden Muscheln, mit Kieferfalle für W8 Schaden gesichert","Riesige Weide|Vogelnester, zerstörtes Baumhaus"]],
  [3,"Holzsteg",["Fluss|reißend, scharfe Felsen, Frösche","Steg|Holz, ramponiert, trägt zwei Personen. Bricht er, ist ein GES-Rettungswurf nötig, um nicht ins Wasser zu fallen (W6 Schaden pro Runde, bis man gerettet wird)."]],
  [4,"Seiltunnel",["Enger Tunnel mit Seil|blutig, 20 Fuß lang, am Seil hängen halb gefressene Rinderreste"]],
  [5,"Abgestürzte Kapsel",["Umgestürzte Bäume|verbrannt, nicht gefällt","Buchfetzen|Sternbilder, von denen du noch nie gehört hast","10 Fuß große Metallkuppel|eine lose Platte springt auf, durchscheinender Schleim, harmlos, vier skelettierte, nichtmenschliche Leichen"]],
  [6,"Forschungslabor",["Ruinengebäude|Stein, enthält ein enges Labor, Ausrüstung im Wert von 2g für den Richtigen, Fläschchen mit tödlichem Hundertfüßergift (W6 STÄ-Verlust bei kritischem Schaden)"]],
  [7,"Seerosenteich",["Teich|versunkener Rucksack mit Spiegel (10s), Kinderkleid (5s), Perlmutt-Haarbürste (20s), mit Steinen beschwert","Insekten|Blutsauger, harmlos"]],
  [8,"Felshaufen",["4 Fuß hoher Felshaufen|ekelhafter Geruch, bedeckt eine mit Wachs versiegelte Tierhaut, vollgestopft mit Dutzenden gärenden Seevögeln","Blubbernder Teich|warm, Eiserne Koralle wächst"]],
  [9,"Sinkende Hütte",["Haus|versinkt im Marsch, ausgeräumt, zerbrochenes Geschirr, Möbel zerschlagen und verbrannt","Holzschuppen|versinkt im Marsch, Werkzeug, totes Pferd"]],
  [10,"Ruinierter Platz",["Steingepflasterter Platz|moosig","Brunnen|20s in Münzen","Hundestatue|Hero der Terrier, Plakette: „Bezwinger des Muckbären, ehret seine Ruhe“. Die Öffnung führt eine Treppe hinab in Heros Grabmal, siehe S. 102."]],
  [11,"Tränke",["Würfle hier zwei zufällige Begegnungen, die miteinander interagieren.","Tränke|das Wasser summt leise, am Grund beginnt Eiserne Koralle zu wachsen"]],
  [12,"Goldene Wiese",["Goldene Blumen|ein weggeworfener Saphirring im Wert von 5g","Decke und Korb|schimmeliges Essen, Weinflaschen"]],
  [13,"Hortungshöhle",["Insekten an den Wänden|große, pelzige Hundertfüßer, harmlos","Haufen|zerbrochene Möbel, zerfetzte Kleidung, skelettierte Leichen, Satz Silberbesteck im Wert von 1g, Ziegelsteine. Mit 4 zu 6 Wahrscheinlichkeit wird er von einem Paar Affenmenschen bewacht. Sie verteidigen ihren Hort, fliehen aber, wenn sie schwer verletzt werden, und belästigen jeden weiter, der von ihnen stiehlt."],{n:"Affenmensch",w:[["STÄ",14],["GES",12],["WIL",6],["hp",8]],a:"Neugier",t:"Keule W6. Verständigt sich mit einer Art Zeichensprache und kann einfache Werkzeuge benutzen."}],
  [14,"Leichengrube",["Grube|Massengrab, verbrannte Leichen","Morsche Holzbretter|mit Dutzenden Namen beschriftet"]],
  [15,"Kriegerstatue",["Statue|Krieger mit Axt und Schild, „Felen, Geißel der Sumpfmänner“","Überwucherte Pflanzen|Brennnesseln, lästig, aber harmlos"]],
  [16,"Versteck des Jägers",["Wachturm|alt, aus Holz, blickt über den Sumpf, Truhe mit 6 Bomben","Boden|grüne Decken mit Muster, 3s wert. Mit 2 zu 6 Wahrscheinlichkeit sind zwei Jäger anwesend."],{n:"Jäger",w:[["GES",13],["hp",4]],a:"",t:"Muskete W8, Dolch W6."}],
  [17,"Fleischfalle",["Verbrannte Bäume|in unterschiedlicher Höhe stark verbrannt","Aufgehängtes Stück Fleisch|mit glänzenden Muscheln gespickt, löst einen schwingenden Baumstamm für W10 Schaden aus"]],
  [18,"Kadaver des Leviathans",["Riesiger toter Fisch|verwesend, hat Fliegen und Hundertfüßer angelockt","Hohes Gras|kaputtes Fernglas, Pistole"]],
  [19,"Der Leuchtturm",["Raue Steinwände|moosig, 5 Stockwerke hoch","Brennendes Leuchtfeuer auf dem Dach|brennt hell, chemischer Geruch","Holztüren|von außen verriegelt, mit etwas Mühe aufzubrechen, führen in den Brennenden Turm, siehe S. 104"]],
  [20,"Tödliche Früchte",["Obstbäume|blaue Früchte, schmecken widerlich, harmlos","Kreischende Vögel|Amseln, harmlos"]],
  [21,"Der Bunker",["10 Fuß großer Steinbunker|Metalltür mit rotem X, mehrere Schlösser, innen: dicke Spinnweben, kalte Luft, ein Gebückter Würger in der Ecke","Schornstein|Blutspuren am Rand, leises Atmen von innen"],{n:"Gebückter Würger",w:[["STÄ",12],["GES",15],["WIL",15],["hp",13]],a:"um jeden Preis zu entkommen",t:"Hagerer, 7 Fuß großer Humanoider mit langen Gliedern, ockerfarbener Haut und langem, verzerrtem Gesicht. Schreit im Kampf, ist aber außerhalb des Bunkers nicht zu hören. Schlägt zu für W8. Bei kritischem Schaden bricht er dem Ziel das Genick und renkt dessen Kiefer aus, um den Kopf zu umschließen, ihn abzubeißen und im Ganzen zu verschlucken."}],
  [22,"Dampfendes Wasser",["Dampfender Teich|warm bei Berührung, am Grund wächst rote Koralle, Brocken schwarzer Koralle treiben an der Oberfläche","Natürliche Höhlenöffnung|niedrige Decke, Stalaktiten, führt hinab zu den Grünen Höhlen, siehe S. 106"]],
  [23,"Klippenaufstieg",["Weiße Klippen|Graffiti, Farbe","Vogelnester|Eier, silberne Schnupftabakdose im Wert von 40s","Seil|erlaubt den Aufstieg nach oben mit Blick über den Marsch","Pfad|führt entlang der Klippen nach Norden zum Schild nach Hopesend"]],
  [24,"Dichter Wald",["Hohes Gras|tote Anemonen","Pfad zur Lichtung|führt zum Überwucherten Schrein, siehe S. 108"]]
 ],
 mythen:[
  ["Das Weiße Heiligtum","wurde von einem Ding aus den Tiefen der Nacht genommen. Sie versuchten es mit Feuer, Säure und Gewehren, doch es wuchs immer nach und nahm uns Brüder und Schwestern aus Bosheit. (siehe Feld 24)"],
  ["Der Metallmann","kroch aus dem Ozean. Er schleppte sich an Land und trug den Kadaver eines großen Leviathans, den er als Trophäe seiner Macht zurückließ. (siehe Feld 18 und Begegnung 11)"],
  ["Ein Wahres Monster","wütete einst im Marsch und ist nun im Brennenden Turm gefangen. Mund eines Lügners, Zähne einer Bestie, Körper eines Prassers. (siehe Feld 19)"],
  ["Der Held des Marschs","tötete den Muckbären und ruht nun in seinem Grabmal, wo er seine hart erkämpften Schätze ins nächste Leben mitnimmt. Wer wahre Tugend besitzt, erweist ihm mindestens einmal im Jahr die Ehre. (siehe Feld 10)"],
  ["Der Verdorbene Garten","war ein Paradies, bevor der Marsch kam. Seine Früchte schmecken nun nach Erbrochenem, doch geschickte Brauer und Brenner können daraus einen stark betäubenden Wein machen. (siehe Feld 20)"],
  ["Das Verschluckte Dorf","stand einst am Fuß eines Berges mit Blick aufs Meer, doch der Marsch ertrug keinen so schönen Ort. Eines nach dem anderen wurden die Häuser in den Morast gezerrt. (siehe Feld 18)"],
  ["Das Schwarmgesicht","ist in Wolken aus Mücken und Moskitos zu sehen, für die, die wirklich verirrt sind. Die Insekten wollen uns am Leben und voller Blut halten, also zeigen sie stets in die richtige Richtung. (siehe Begegnung 14)"],
  ["Der Eifersüchtige Affe","fühlte sich immer zwischen Tier und Mensch gefangen. Ein solches Wesen beobachtete ein junges Liebespaar und kochte vor Neid über ihr Glück. Während eines romantischen Stelldicheins zwischen goldenen Blumen wurden sie brutal zerfleischt und weggeschleift, nie wieder gesehen. (siehe Felder 12 und 13)"],
  ["Willows Streiche","waren für ein so junges Mädchen besonders grausam. Sie lachte, wenn Vogelmütter ihre Nester mit Sirup übergossen fanden, neugeborene Rehkitze in Stachelgruben fielen und neugierige Wanderer von Bärenfallen verstümmelt wurden. Niemand weiß, wer sie auf den Grund des Wassers schickte, doch alle waren froh. (siehe Felder 2 und 7)"],
  ["Dunkeldinger","streifen durch die Wälder nahe dem dampfenden Teich. Einst eine Gruppe von Missionaren, leben sie ihre Strafe dafür aus, Falsches verbreitet und Wahrheit verborgen zu haben. Sie hassen unsere Lichter und Stimmen. (siehe Feld 22)"],
  ["Felen und die Ritter der Nessel","ritten über dieses Land, bevor es Marsch war. Als die Feuchtigkeit kam, jagten sie die, die sie für schuldig hielten: die Leichtsinnigen, die Unbedachten und die Üblen. Die Nesseln, die um seine Statue wachsen, ergeben einen Tee, der den Körper belebt, den Geist schärft und Körpergeruch reinigt. (siehe Feld 15)"],
  ["Der Würger im Wald","folgt einsamen Reisenden und wartet, bis sie schlafen, dann legt er leise die Hände um deinen Hals, die Kiefer über deinen Kopf, und dann GRIFF! KNACK! KRUNCH! Er wurde lange nicht gesehen, also besteht Hoffnung, dass ihn endlich jemand erledigt hat. (siehe Feld 21)"]
 ],
 orte:[
  {k:"karte-grab",t:"Heros Grabmal",h:"Feld 10",s:"Ein stilles Mausoleum für einen höchst verehrten Hund.",p:"S. 102",r:[
   [1,"Treppe",["Stufen|einige lose Fliesen, Moosflecken",">Öffnung|zu 2"]],
   [2,"Rast der Pilger",["Ostwand: Verblasstes Gemälde|man erkennt kaum Bilder eines Hundes, verbirgt den Durchgang zu 3","Bänke|leicht verrottetes Holz",">Große Holztüren|öffnen sich zu 5",">Öffnung|zu 1"]],
   [3,"Der Kriechgang",["Enge Stelle|lässt sich nur langsam und ohne große Gegenstände durchqueren",">Öffnung|zu 4",">Öffnung|zu 2"]],
   [4,"Bestrafungsfalle",["Wände|schwach leuchtende blaue Kristalle, jede Berührung zerbricht sie und entlädt einen Blitzschlag für W8 Schaden","Boden: Verzierte Truhe|hörbar summend, in Wahrheit ein massiver, golden bemalter Metallblock, Drähte verbinden ihn mit einigen Wandkristallen, jedes Schütteln oder Schlagen der Truhe zerbricht einen Kristall (siehe oben)"]],
   [5,"Das Grab",["Wände|gemusterte Fliesen (Hunde, Knochen)","Decke|dicke Spinnweben","Sarkophag|eingemeißelt „HERO“, versiegelt, enthält nur Hundeknochen","Ostwand: Lose Ziegel|einige am Boden, weitere lassen sich herausziehen, um 7 zu betreten",">Große Türen|zu 2",">Eisentür|ein großer Eisenhundekopf in der Mitte, offene Kiefer, beißt jeden, der ihn berührt, für W6 Schaden, öffnet sich aber, wenn ein Knochen in sein Maul gelegt wird"]],
   [6,"Falsche Schätze",["Haufen goldener Schätze|Töpfe, Teller, in Wahrheit goldbemaltes Holz","Boden|dicker weißer Staub. Jede schnelle Bewegung wirbelt dieses ätzende Pulver auf und verursacht W6 STÄ-Verlust pro Runde der Aussetzung.","Nord: Eisentür|mit dem weißen Pulver bedeckt, eine lose Tür, sorgfältig in einen falschen Rahmen gelehnt. Jede Störung lässt sie fallen und wirbelt eine riesige Menge Pulver auf, was W8 STÄ-Verlust verursacht."]],
   [7,"Echte Schätze",["Haufen silberüberzogener Knochen|insgesamt 5g wert","Haufen Abfall|Lumpen, einige Tierknochen, kaputter Hundenapf, Lederhalsband","Haufen Papiere|alt und bröselig, Dankesbriefe verschiedener Verehrer an Hero, weil er den schrecklichen Muckbären getötet hat"]]
  ]},
  {k:"karte-turm",t:"Der Brennende Turm",h:"Feld 19",s:"Eine Wendeltreppe führt durch die Mitte des Turms nach oben, mit Türöffnungen für jedes Stockwerk.",p:"S. 104",r:[
   [1,"Stockwerk 1: Eingangshalle",["Nordwand: Kamin|Asche, kalt","Ledersessel|bequem","Westwand: Notiz an die Wand genagelt|lautet: „Ich habe es mit meinem Arcanum in der Zelle gefangen, aber ich ertrage es nicht, in seiner Nähe zu sein. Lasst es sein erbärmliches Leben dort oben führen und uns nicht länger jagen.“"]],
   [2,"Stockwerk 2: Die Kaserne",["Waffenständer|vier Musketen, zwei Hellebarden, zwei Schwerter","Rüstungsständer|zwei Schilde"]],
   [3,"Stockwerk 3: Die Bibliothek",["Bücherregale|meist Biologiebücher","Tisch|Stapel Bücher über Korallen und Tiefseeleben, durchgehend bekritzelte Notizen"]],
   [4,"Stockwerk 4: Die Zellen",["Kein Tageslicht.","Wände|verbrannter Stein (Feuerschaden)","Zelle|verbrannt, Eisengitter, etwas Großes lauert im Schatten, in Wahrheit der Prasser"],{n:"Der Prasser",w:[["STÄ",18],["hp",14],["Rüstung",2]],a:"zu entkommen und sich an hilflosen intelligenten Wesen zu nähren",t:"Monströser, menschenähnlicher Kopf, klaffendes Maul mit stumpfen Zähnen. Sein Körper gleicht etwas zwischen einem massigen Walross und einem Stachelschwein, starrend vor dornigen Stacheln. Spricht unbeholfen, sagt aber alles, um zu entkommen. Kiefer W10 oder Stachelhieb für W6 gegen alle angrenzenden Ziele. Wer kritischen Schaden erleidet, wird weiter gekaut (W6 STÄ-Verlust) und im Ganzen verschluckt, sobald er tot ist."}],
   [5,"Stockwerk 5: Das Leuchtfeuer",["Bietet klare Sicht auf die Umgebung. Hier sieht man, dass das Leuchtfeuer an einen Treibstofftank angeschlossen ist, groß genug, um den ganzen Turm zu zerstören, falls der Tank beschädigt wird."]]
  ]},
  {k:"karte-hoehle",t:"Die Grünen Höhlen",h:"Feld 22",s:"Ein moosiger Abstieg in fast greifbare Dunkelheit.",p:"S. 106",r:[
   [1,"Kriechgang",["Enger Tunnel|wimmelt von 8 bösartigen, giftigen Hundertfüßern",">Tunnel|zu 2"],{n:"Hundertfüßer",w:[["STÄ",3],["hp",1]],a:"",t:"Biss W4. Kritischer Schaden lässt das betroffene Glied anschwellen und unbrauchbar werden, bis zur nächsten Langen Rast."}],
   [2,"Beckenraum",["Wände|grüner, behauener Stein, vage geformte Monsterkreaturen","Becken|unnatürlich dunkel, Licht stört zwei Dunkeldinger",">Linke Öffnung|aufwärts, zu 3",">Rechte Öffnung|zu 4",">Durchgang|abwärts, zu 5",">Tunnel|zu 1"],{n:"Dunkelding",w:[["STÄ",14],["GES",10],["WIL",6],["hp",12]],a:"Dunkelheit und Stille zu schaffen",t:"Bärengroßes, schwebendes Wesen, in unnatürlich schwarzen Rauch gehüllt. Keine erkennbaren Details außer fleischigen Blasen und peitschenden Tentakeln für W6 Schaden. Der Rauch um sie verblasst, wenn sie getötet werden. Ihre Körper sind in eine dicke Kette gewickelt. Sie aufzuheben ist schmerzhaft, denn sie sind eiskalt. Mit Leder oder anderem dicken Material lässt sie sich gefahrlos aufheben, doch mit der Zeit wird das Material steif und rissig. Verursacht W6 STÄ-Verlust pro Zug Hautkontakt. Wer durch diesen Schaden getötet wird, wird zum Dunkelding."}],
   [3,"Aufstieg",["Boden|steile, natürliche Steigung, leicht zu erklimmen, wenn man sich Zeit nimmt","Decke|kleiner Riss, lässt sich aufbrechen und enthüllt eine gesicherte Metallkiste voller Schießpulver. Für den Richtigen 1g wert, genug für 6 Bomben oder eine wirklich große."]],
   [4,"Korallentunnel",["Boden|Splitter, tote Muscheln","Nordwand: Lose Koralle|mehrfarbig. Wer daran herumhantiert, muss einen GES-Rettungswurf bestehen, sonst bricht die Wand und setzt einen Schwall kochenden Wassers für W10 Wucht-Schaden frei."]],
   [5,"Rinnsal",["Wände|natürlicher Stein","Boden|rieselndes Salzwasser, fließt hinab zu 7",">Enger Durchgang|durchzwängen, zu 6",">Öffnung|zu 7"]],
   [6,"Brunnengang",["Wände|grüner, behauener Stein, Hundertfüßer-Verzierung","Nordwand: Steinerner Brunnen|trocken. Ein Arcanum benutzt, beginnt er, schwarzes Wasser auszugeben. Wer es trinkt, zieht alle Gifte und üblen Wirkungen aus jedem in diesem Raum und nimmt sie selbst auf."]],
   [7,"Dunkeldingnest",["Wand|dunkler Naturfels, dünne Schicht schwarzer Schleim","Westwand: Schattige Kugel|vernichtet alles, was hineingelegt wird, und setzt ein Dunkelding frei (siehe Raum 2), wird zerstört, wenn ein ausreichend heller Gegenstand hineingeworfen wird"]]
  ]},
  {k:"karte-schrein",t:"Überwucherter Schrein",h:"Feld 24",s:"Ein einst eindrucksvoller Schrein, in einen Vorsprung aus weißem Fels gehauen, jetzt mit schleimigen Algen und seilartigen Pflanzen überwuchert.",p:"S. 108",r:[
   [1,"Verbrannte Vegetation",["Haufen verbrannter Pflanzen|sieht aus wie Seetang","Wände|Feuerschäden, einige Spuren rosa Algen",">Doppelte Steintüren|zu 3",">Treppe abwärts|zu 2",">Türöffnung|zu 4"]],
   [2,"Die Kapelle",["Wände|keine Vegetation","Boden|gepolsterte Kissen, sauber","Kleiner Altar|eine einzelne brennende Kerze, zwei silberne Statuen gesichtsloser Frauen, je 1g wert"]],
   [3,"Ruinierter Durchgang",["Nord: Eingestürzter Durchgang|mit weißem Stein verschüttet, würde Stunden zum Räumen brauchen und enthüllt einige Skelette im Schutt"]],
   [4,"Drohnen-Ausguck",["Wände|verschmierte Gemälde, selbst die Rahmen sind teilweise aufgelöst","Gepanzerte Frau|in Wahrheit eine Drohne, reagiert in keiner Weise, stößt aber einen wortlosen Laut aus, wenn jemand sie angreift oder an ihr vorbeigehen will, wodurch die Drohnen aus Raum 6 ihr zu Hilfe kommen",">Steintüren|zu 5",">Türöffnung|zu 1"],{n:"Drohnen",w:[["hp",2]],a:"Mutter Anemone und ihre Kinder blind zu beschützen",t:"Handwaffen W6."}],
   [5,"Unkrautkriechgang",["Überwucherter enger Durchgang|dunkle Pflanzen, nur kriechend zu durchqueren, riecht furchtbar",">Steintüren|zu 6",">Steintüren|zu 4"]],
   [6,"Der Kinderraum",["Wände|Flecken rosa Algen","Boden|Salzwasserbecken mit kleinen, klaren Anemonen","6 Männer, die ziellos herumstehen|leere Blicke, in Wahrheit Drohnen, siehe Raum 4",">Steintüren|zu 7",">Steintüren|zu 5"]],
   [7,"Der Schrein",["Statuen|mit seetangartigem Bewuchs bedeckt, gesichtslose gepanzerte Frauen","Südwand: Altar|mit rosa Schleim bedeckt, Überreste eines ledergebundenen Buches, nun unleserlich",">Zerbrochene Türöffnung|zu 8",">Steintüren|zu 6"]],
   [8,"Mutters Kammer",["Alle Oberflächen sind mit blassem Schleim bedeckt, der schnelle Bewegung heikel macht (GES-Rettungswurf, außer man bewegt sich vorsichtig).","Mutter Anemone sitzt in der Mitte dieser Höhle, umgeben von 8 Drohnen (siehe Raum 4)."],{n:"Mutter Anemone",w:[["STÄ",16],["GES",3],["WIL",18],["hp",10],["Rüstung",2]],a:"Drohnen zu erschaffen",t:"Tentakel W8 (greifen bis zu 4 Ziele an). Wer kritischen Schaden erleidet, wird hineingezogen und gelähmt, bis er befreit wird (ein Helfer muss einen STÄ-Rettungswurf bestehen, um nicht selbst hineingezogen zu werden). Wer eine Stunde lang zurückgelassen wird, wird als Drohne freigelassen."}]
  ]}
 ]
};
ITO.hope = {
 intro:"Hopesend – letzter Hafen des Nordens",
 orte:[
  ["Paradiso-Park","Ein halb eingestürzter Pier voller verlassener Vergnügungsparkfahrgeschäfte. In Zelten und Hütten befindet sich heute der Markt der Stadt. Die Stände verkaufen meist schlechte Kleidung, haltbaren Fisch und salzigen Käse."],
  ["Taverne und Herberge „Zur Eingelegten Gans“","Mehr Spielhölle als Taverne. Rosa Bier schmeckt leicht fischig, braune Kabeljaubrötchen sind belebend salzig, und alle Spiele ziehen Pfänder nach sich, bei denen man noch ekligere Dinge essen muss."],
  ["Die Docks","Fallen buchstäblich ins Meer. Kapitäne brüllen Gesuche nach neuer Mannschaft für Fahrten ins Polarmeer. Bastion ist eine Tagesreise per Schiff entfernt und kostet 10s pro Person."],
  ["Handelshaus Schwarzer Flamingo","Darius überwacht den gesamten Handel von und nach Hopesend. Für den richtigen Preis verkauft er die illegalen Gifte, Drogen und Waffen, die er zurückhält. Der einzige Ort in Hopesend, an dem man Gewehre kaufen kann, mit einem Aufpreis."],
  ["Das Schlürfloch","Kaum mehr als ein Loch in der Wand, das kleine Becher eines exotischen Rums namens Feuerbestie für 1s das Glas ausschenkt. Er ist so schlecht, dass er den Verlust von W6 WIL und Halluzinationen verursacht."],
  ["Hintergassen","Schlecht beleuchtete Straßen, die von der Miliz bestreift werden, wenn sie sich aufraffen kann. Ein Kult, der die Meereshexe anbetet, errichtet jede Nacht übel riechende Schreine."]
 ],
 geruechte:["Eine riesige Welle hat die Stadt überspült, was Gerüchte über die Rückkehr der Meereshexe verstärkt.","Jeremiah unternimmt einen ernsthaften Versuch, Darius' Herrschaft über die Docks zu stürzen.","Mönche sammeln Spenden und sagen, ihr Schrein sei von einer fremden Macht überrannt worden (siehe Überwucherter Schrein, S. 108).","Die Union der Menschen predigt von einer Invasion aus den Sternen. Einer von ihnen behauptet, ein Monster aus dem Himmel im Leuchtturm gefangen zu haben (siehe S. 104).","Affenmenschen haben Kinder aus der Stadt gestohlen.","Ein Feuer hat die Docks völlig zerrissen."],
 leute:[
  {n:"Joy, derbe Wirtin",w:[["STÄ",9],["GES",8],["WIL",12],["hp",4]],i:"Dolch (W6), 10s.",t:"Stämmig und rotgesichtig. Getrieben davon, ihre Taverne belebt und laut zu halten. Hasst es, allein zu sein, seit sie glaubte, von leuchtenden Kreaturen entführt worden zu sein. Geht nur betrunken ins Detail."},
  {n:"Darius, Hafenaufseher",w:[["STÄ",9],["GES",10],["WIL",7],["hp",7]],i:"Feine Kleidung, Zeremonienstreitkolben (W6), Hund, 3g.",t:"Fettiges blondes Haar und Bart. Getrieben von Faulheit und Gier. Überwacht allen Verkehr in den und aus dem Hafen. Das weiß jeder, und es gibt regelmäßig Rufe nach seiner Ablösung."},
  {n:"Jeremiah, Milizhauptmann",w:[["STÄ",10],["GES",9],["WIL",6],["hp",15],["Rüstung",1]],i:"Säbel (W8), Pistole (W6), moderne Rüstung, 10s.",t:"Augenklappe und Holzbein. Getrieben vom Wunsch nach Respekt. Spricht von Affenmenschen im Marsch und seinem Beinahetod durch sie. Führt eine Wache von 30 Männern zum Schutz der Stadt und bildet Miliz aus."},
  {n:"Fantastic Yar, Ringerin und Akrobatin",w:[["STÄ",14],["GES",18],["WIL",10],["hp",3]],i:"Stab (W6 Wucht), lächerliches Outfit, Papagei, 2s.",t:"Blass und dürr. Getrieben von Fernweh. Beweglich und schwach telekinetisch (wenn sie einen WIL-Rettungswurf besteht). Versucht, genug Geld zu sammeln, um nach Bastion zu reisen."},
  {n:"Kara, zurückgezogene Künstlerin",w:[["STÄ",6],["GES",12],["WIL",5],["hp",2]],i:"Malutensilien, Sternmedaillon, 10s.",t:"Hochgewachsen und löffelgesichtig. Getrieben vom Wunsch, sich besonders zu fühlen. Malt ihre Träume und glaubt insgeheim, Prophezeiungen von den Sternen zu empfangen. Ahnt nichts von der Macht ihres Medaillons, spürt aber etwas an ihm. Meist am Stadtrand umherwandernd. Sternmedaillon: Erlaubt Einblicke in ferne Reiche in den Träumen des Trägers."},
  {n:"Copper, Waffenschmied",w:[["STÄ",15],["GES",10],["WIL",13],["hp",6],["Rüstung",1]],i:"Edler Säbel (W8), moderne Rüstung, 50s.",t:"Struppiges orangefarbenes Haar. Getrieben vom Wunsch, sein Vermächtnis weiterzugeben. Hasst Jeremiah, beliefert aber widerwillig seine Miliz. Hat einen jungen Lehrling, Pigott, der behauptet, einen Metallriesen im Marsch umherstreifen gesehen zu haben."}
 ],
 schiffe:[
  ["Wellenbrecher","Schwarzer Panzerkreuzer, der einen Ein-Schiff-Krieg gegen das Meer selbst führt. Presst neue Besatzung für seine labyrinthischen Maschinendecks."],
  ["Ewiger Herbst","Wohlhabende, von einer Seuche befallene Touristen genießen eine landschaftliche Fahrt durch die Nördlichen Gewässer. Sie blicken durch versiegelte Fenster, ihre Pfleger suchen Souvenirs an Land."],
  ["Der Regentropfen","Kleine, schnittige Galeone, ihr Rumpf von Meeresungeheuern gezeichnet. Kehrt von einer gescheiterten Polarexpedition zurück und lässt den gebrochenen Kapitän in Hopesend zurück."],
  ["Die Flottille des Volkes","Ein Haufen winziger Marktboote, zusammengebunden, kaum hochseetauglich. Weltgewandte Händler bieten handgemachte Zierstücke und Schmuck an. Man kann nur mitreisen, wenn man etwas Einzigartiges zum Tausch gefertigt hat."],
  ["Königin Silkie","Breitrumpfiger Tiefseebagger, der sein riesiges Netz aus Netzen, Leinen und Haken einzieht. Verkauft fette, hässliche Fische direkt von Deck und seltsamere Ware, wenn man weiß, wen man fragen muss. Jedes Besatzungsmitglied hat eine eigene Geschichte über groteske Dinge aus den tiefsten Gewässern."],
  ["Die Vergoldete Nadel","Prunkvoller Klipper, bedeckt mit psychotropem Seetang, der auf der Fahrt nach Bastion getrocknet wird, wo er medizinische wie Freizeitkunden bedient. Die weitgereiste Kapitänin besteht darauf, ihren Vorrat persönlich zu testen."],
  ["Schnitters Wagen","Hölzernes, mastloses Gefährt, gezogen von einem dressierten Orca namens Reaper. Besatzung und Tier jagen gemeinsam riesige Thunfische und terrorisieren Piraten. Reaper hat in der Nähe seltsame Koralle gefressen und folgt den Befehlen des Kapitäns nicht mehr."],
  ["Die Vigilantine","Dampfbetriebenes Kriegsschiff, stets auf der Suche nach Feinden Bastions. Ihr Zug gepanzerter Vollstrecker wird von einem bürokratischen Inquisitor an Land geführt, was ihre Eile bremst. Die Säuberung hat die Docks noch nicht verlassen."],
  ["Karper Bürgerkreuzer","Ein unregelmäßig verkehrender Passagierfährdienst zwischen hier und Bastion. Angetrieben von zwei riesigen hölzernen Schaufelrädern, die widerwillig von verschwitzten Passagieren handgepumpt werden, meist zu Besuch für Arbeit oder Familie."],
  ["Der Himmelwärts-Sturm","Azurblau gestrichene Galeone mit himmelblauen Segeln. Saphirgekleidete Kultisten suchen Reisende für ihre Fahrt zu den Sternen. Dem Schiff ist der kosmische Sprung noch nicht gelungen, doch die Sternbilder scheinen sich endlich auszurichten."],
  ["Der Ozeanische Flicker","Gedrungenes kleines Schiff, bedeckt mit Seepocken und roten Algen. Zwei muskettenbewaffnete Wächter eskortieren ein Dutzend Gefangene, die ihre Strafe abarbeiten, indem sie Schäden an Gezeitentümpeln, Klippen und Dünen reparieren."],
  ["Sonnenuntergangs-Batterie Nr. 5","Gewaltiger Kreuzer mit zwei titanischen Feldgeschützen. Ihr Befehl lautet, jeden Sonnenuntergang auf ein unbekanntes Ziel jenseits des Horizonts zu feuern. Die Besatzung sucht nach allem, was die Langeweile vertreibt."]
 ]
};
