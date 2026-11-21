/* Pico – Käfer bauen (Kap. 6), Teil A: S. 98–119 (Grundlagen, Nektar, Aspekte & Augmente, Schnellstarts, Beißer bis Fühler) */
window.PI_NACH = window.PI_NACH || {};
PI_NACH.kaefer = PI_NACH.kaefer || {t:"Käfer bauen", c:"#c76f00", kapitel:[]};
(function(){
 var V="**Vorteil:** ", N="**Nachteil:** ";
 /* Aspekt-Karte */
 function A(t,herz,typ,fl,v){ return {t:t, k:herz+" · "+typ, b:[fl].concat(v)}; }
 /* Augment-Karte */
 function G(t,herz,fl,v){ return {t:t, k:herz, b:(fl?[fl]:[]).concat(v||[])}; }
 var HT="Möglich: *Krabbelig*, *Bestial*, *Schuppig*, *Schleimig*, *Gefiedert*, *Blättrig*, *Pilzig*, *Scheppernd* oder *Geisterhaft*.";
 var K = PI_NACH.kaefer.kapitel;

 K.push({id:"grundlagen", t:"Grundlagen kaufen", p:99, b:[
  "Dieses Kapitel enthält die erste Hälfte der Anleitung, wie man einen Charakter für die Welt von PICO baut, einen winzigen Käfer mit großen Träumen – den Teil, in dem man Nektar bekommt und ausgibt.",
  "Wenn du zum ersten Mal einen Käfer für eine PICO-Runde baust …",
  {t:"ul", x:[
   "Überfliege dieses Kapitel UND das nächste, damit du den ganzen Ablauf verstehst.",
   "Frag den Weber, wie viel Nektar du ausgeben kannst.",
   "Gib deinen Nektar für Aspekte, Augmente und Fertigkeiten aus diesem Kapitel aus.",
   "Entscheide im nächsten Kapitel ab S. 153 über die übrigen Merkmale deines Käfers (dafür musst du keinen Nektar ausgeben)."]},
  "Wenn du schon einmal Käfer für PICO gebaut hast, nimm dir einfach, was du willst, woher du willst und in beliebiger Reihenfolge – stürz dich auf dieses Charakterbau-Büfett, wie es dir gefällt! Aspekte, Augmente und Fertigkeiten stehen in diesem Kapitel, alles andere beginnt im nächsten Kapitel auf S. 153.",
  {t:"h4", x:"Zwei ganze Kapitel?"},
  "PICOs Charakterbau verlangt eine Mischung aus Nektar-Ausgeben und Entscheidungen. Das ganze Nektar-Ausgeben steht in diesem Kapitel, alle anderen Entscheidungen im nächsten.",
  {t:"h4", x:"Größe"},
  "Alle Käfer sind standardmäßig KLEIN, aber es gibt ein paar Aspekte, mit denen du die Größe deines Käfers verändern kannst (S. 130). Wir empfehlen neuen Spielern nicht, sie zu benutzen, da sie unbeabsichtigte Folgen für die erzählerische Seite des Spiels haben können – aber hey, wir können dich ja ohnehin nicht aufhalten!"
 ]});

 K.push({id:"schritte", t:"Käfer bauen (Teil 1)", p:100, b:[
  {t:"vl", x:"„Das Beinknochen ist verbunden mit dem … Moment, was ist eigentlich ein Knochen? Das haben wir schon vermasselt.“"},
  "Hier darfst du deiner Kreativität freien Lauf lassen – eine Chance, einen völlig einzigartigen Käfer zu bauen, einen nur für dich. Wir können *fast* versprechen, dass kein anderer Spieler auf der Welt einen Käfer haben wird, der genau wie deiner ist, was angesichts der riesigen Zahl seltsamer kleiner Käfer in unserer eigenen Welt und der innewohnenden Seltsamkeit der Welt nach der Mysteriokalypse passend scheint.",
  "Einen Käfer zu bauen geht in acht Schritten, was nach viel klingen mag oder auch nicht, je nachdem, wie gut du im Zählen bist. Dieses Kapitel behandelt die ersten vier Schritte: wo du deinen Nektar herbekommst und wie du ihn für Aspekte, Augmente und Fertigkeiten ausgibst. Um es noch nützlicher aufzuschlüsseln …",
  {t:"box", h:"Schritt eins: Hol dir deinen Nektar", c:"#eba400", b:[
   "Nektar ist im Grunde eine Charakterbau-Ressource, die man im Spiel für die Weiterentwicklung verdienen kann, die aber auch vom Weber in großen Mengen ausgegeben wird, bevor du deinen Käfer baust. Je mehr Nektar du ausgeben kannst, desto mehr Entscheidungen kannst du treffen und desto mächtiger wird dein Käfer vermutlich werden. Larven-Käfer starten mit 25 Nektar, Imago-Käfer starten mit 50 Nektar.",
   "*Deinen Startnektar bekommst du auf S. 102.*"]},
  {t:"box", h:"Schritt zwei: Kaufe deine Aspekte", c:"#eba400", b:[
   "Aspekte sind Teile, Ausrüstung und Kumpel, die deinen Käfer ausmachen und mit Nektar gekauft werden können. Jeder hat einen Namen, eine Leiste und eine besondere Regel, die dich einzigartig macht. Das ist nicht das Einzige, wofür du Nektar ausgeben wirst, also dreh hier nicht durch! Ein einzelner Aspekt kostet 3 Nektar.",
   "*Eine Übersicht über Aspekte findest du auf S. 104, und gruppierte Aspekt-Sets zum Kaufen mit Nektar ab S. 108.*"]},
  {t:"box", h:"Schritt drei: Kaufe deine Augmente", c:"#eba400", b:[
   "Aspekte lassen sich durch Augmente verbessern, zusätzliche kleine Regeln, die sie unverwechselbarer machen. Jede Aspekt-Gruppe kommt mit ein paar empfohlenen Augmenten, aber du kannst sie von überall hinzufügen, solange du es erzählerisch begründen kannst. Es gibt auch besondere Augmente, die deinen Käfer in eine bestimmte Richtung ausprägen! Jeder Aspekt kann höchstens zwei Augmente haben, und jedes Augment kostet 2 Nektar.",
   "*Eine Übersicht über Augmente findest du auf S. 106, und danach eine Auswahl passender Augmente für jede Aspekt-Gruppe ab S. 109.*"]},
  {t:"box", h:"Schritt vier: Kaufe deine Fertigkeiten", c:"#eba400", b:[
   "Als Letztes gibst du Nektar für Fertigkeiten aus; sie geben dir allgemeine Fähigkeiten, mit denen du verschiedene Arten von Aktionen ausführen kannst. Jede deiner Fertigkeiten hat einen Rang, der bei null beginnt und durch Nektar auf Rang eins oder Rang zwei steigen kann. Von Rang 0 auf Rang 1 kostet 1 Nektar, von Rang 1 auf Rang 2 kosten 2 Nektar (von Rang 2 auf Rang 3 kosten es 3 Nektar, aber das ist für Startcharaktere nicht erlaubt).",
   "*Eine Übersicht, wie du Fertigkeiten auswählst und benutzt, findest du auf S. 144, danach eine nach Kategorien gegliederte Liste der Fertigkeiten ab S. 148.*"]}
 ]});

 K.push({id:"nektar", t:"Nektar", p:102, b:[
  {t:"vl", x:"„… Wer den Nektar kontrolliert, kontrolliert das Picoversum. Der Nektar muss fließen.“"},
  "Nektar ist eine köstliche, goldene Flüssigkeit, die Käfer mit genau der richtigen Energie füllt, die sie zur Entwicklung brauchen – um neue Aspekte zu gewinnen, bestehende Aspekte zu augmentieren und ihre Fertigkeiten zu steigern. Im Grunde ist er eine Ressource für Charakterbau und Weiterentwicklung, aber eine, die in der Welt von PICO tatsächlich greifbar ist. Wie man an Nektar kommen kann, schauen wir uns auf der nächsten Seite an, aber jetzt geht es erst einmal um deinen …",
  {t:"h", x:"Startnektar"},
  "Bevor ihr einen Charakter für ein Spiel oder eine Kampagne von PICO baut, verteilt dein Weber eine bestimmte Menge Nektar an jeden Spieler. Mit diesem Startnektar baust du die Grundlagen deines Käfers. Du kannst ihn ausgeben, wie du willst, aber wir empfehlen, etwa 50 % für Fertigkeiten und etwa 50 % für Aspekte und Augmente zu verwenden.",
  "Dieser Startnektar bestimmt auch die Stärkestufe des Spiels – je mehr Nektar ein Käfer ausgeben kann, desto fortgeschrittener ist er, desto mehr coole Sachen kann er und desto mehr von der Welt von PICO hat er vermutlich schon gesehen. Der Weber kann theoretisch jede beliebige Menge Nektar für den Charakterbau ausgeben, aber wir schlagen eine der beiden folgenden Optionen vor …",
  {t:"box", h:"Larva (25 Nektar)", c:"#eba400", b:[
   "Mit 25 Nektar hat ein Käfer vermutlich zwei oder drei Aspekte (mit ein paar Augmenten obendrauf) und eine Auswahl an Fertigkeiten auf Rang 1 und 2. Das ist perfekt für Spieler, die neu in der Welt von PICO sind, und für alle, die längere Spiele planen, denn es hält die Regelkomplexität zu Beginn niedrig (und bietet trotzdem eine gute Menge an Optionen) und lässt viel Raum zum Wachsen. *Käfer, die mit 25 Nektar starten, sind meist neu in der Welt und wissen wahrscheinlich sehr wenig darüber (auch wenn dich nichts davon abhält, einen erfahreneren Reisenden zu spielen, der unterwegs bloß nicht viel Nektar gefunden hat).*"]},
  {t:"box", h:"Imago (50 Nektar)", c:"#eba400", b:[
   "Mit 50 Nektar kannst du ein deutlich fähigeres Individuum bauen, einen rauen, käferigen Abenteurer mit vier oder fünf Aspekten (und ein oder zwei Augmenten auf jedem) und einer breiteren Auswahl an Fertigkeiten, viele davon auf Rang 2 – und vielleicht sogar einige auf Rang 3, wenn Weber und Gruppe einverstanden sind. Das kann Spielern mit Erfahrung passen, die einen stärkeren Start wollen, oder für ein One-Shot-Erlebnis für alle, die schon etliche Stunden PICO hinter sich haben und einfach eine neue Art Käfer ausprobieren wollen. *Käfer, die mit 50 Nektar starten, sind meist schon ein bisschen herumgekommen, haben ein paar Abenteuer erlebt und wissen, wie die Welt von PICO funktioniert (auch wenn dich nichts davon abhält, einen jungen Käfer zu spielen, der einfach richtig, richtig stark geschlüpft ist).*"]},
  {t:"h", x:"Deinen Startnektar ausgeben"},
  "Wir erinnern dich später noch einmal an diese Kosten, aber der Vollständigkeit halber gibst du Nektar aus für …",
  {t:"ul", x:[
   "Aspekte, zu je 3 Nektar.",
   "Augmente, zu je 2 Nektar.",
   "Fertigkeiten: Eine Fertigkeit auf Rang 1 kostet 1 Nektar, ein Aufstieg von Rang 1 auf Rang 2 kostet 2 Nektar und ein Aufstieg von Rang 2 auf Rang 3 kostet 3 Nektar."]}
 ]});

 K.push({id:"nektar-finden", t:"Mehr Nektar finden", p:103, b:[
  {t:"bsp", h:"Nektar-Beispiel", b:[
   ["Weber","Die Klankerkatze hält an, blinzelt und kippt langsam mit einem Krachen zur Seite."],
   ["Bicco","Moment – haben wir das geschafft? Haben wir das wirklich geschafft?"],
   ["Weber","Ihr habt es wirklich geschafft, ja! Schäbig aussehende Gubs quellen aus dem offenen Maul der Maschine, sobald sie auf dem Boden liegt, und die Letzten halten noch inne, um ihr traurig die Nase zu tätscheln, bevor sie davonhuschen."],
   ["Layla","Na toll, jetzt tut sie mir auch noch leid."],
   ["Dunf","Ich weiß nicht, ich glaube nicht, dass ich allzu viele Tränen vergießen werde. Sie wollte uns fressen, schon vergessen?"],
   ["Layla","… Stimmt auch."],
   ["Weber","Dunf hat recht, das ist ganz klar ein Moment zum Feiern. Und ein Geschenk gibt es dazu – eines der Scheinwerfer-Augen der Maschine springt aus seiner Fassung und zerbricht vor euch auf dem Boden, wobei sich eine goldgelbe Substanz aus seinem Inneren ergießt."],
   ["Layla","Ich bin sehr froh, dass das kein echtes Auge ist."],
   ["Dunf","Ich auch, aber noch froher bin ich, dass das Zeug, wenn ich mich nicht irre, …"],
   ["Swift","Nektar! Oh ja, das ist das gute Zeug – wie viel bekommt jeder von uns, Weber?"],
   ["Weber","Nun, ihr habt heute einen mechanischen Titanen erledigt, und das ist eine ziemlich große Sache. Sagen wir, ihr könnt jeder drei Nektar aufschöpfen, bevor der Rest eintrocknet oder durch Ritzen im Boden versickert."],
   ["Bicco","Das reicht für einen neuen Aspekt, wenn ich mich recht erinnere."],
   ["Swift","Allerdings, aber ich glaube, ich hebe mir Aspekte für später auf. Ich habe eine Fertigkeit, die ich zuerst steigern will!"],
   ["Dunf","Ich weiß noch nicht mal, wofür ich meinen ausgeben werde …"],
   ["Weber","Macht euch jetzt nicht zu viele Gedanken, ihr habt alle noch ein wenig Zeit zum Nachdenken, bevor ihr ihn ausgeben könnt. Diese Gubs kommen vielleicht mit Verstärkung zurück, um die Maschine zur Reparatur wegzuschleppen, und ihr wollt wahrscheinlich nicht hier sein, wenn sie wiederkommen."],
   ["Layla","Sehr wahr. Lasst uns einen sicheren Ort für eine Montage suchen, damit wir uns häuten können!"]]},
  {t:"h", x:"Mehr Nektar finden"},
  "Nektar ist die süßeste, köstlichste, gehirnkribbelndste Substanz in der Welt von PICO. Weit jenseits der Süße von Pollen oder sogar Cola ist Nektar eine goldene Flüssigkeit, die Blumen absondern, wenn sie etwas wahrhaft Spektakuläres miterleben. Beeindrucke eine Blume mit einer heldenhaften Tat, und sie speit vielleicht Nektar aus und gibt einen Klecks des Zeugs frei, den nahe Käfer eifrig für später aufschnappen.",
  "Dein Startnektar reicht, um einen Charakter zu bauen, bevor das Spiel beginnt (oder in einer Sitzung Null, siehe S. 192), aber Nektar macht süchtig – Käfer können nicht anders, als ihn zu suchen, sobald sie einmal davon gekostet haben. Wo kann man also mehr finden?",
  "Nektar, der im Spiel gefunden wird, ist im Grunde ein Geschenk des Webers, eine Belohnung dafür, eine Herausforderung gemeistert oder eine Sitzung abgeschlossen zu haben. Man kann ihn nicht einsammeln oder auftreiben – dafür ist er viel zu mächtig –, aber er kann vergeben werden …",
  {t:"ul", x:[
   "nachdem die Käferbande einen schwierigen Gegner besiegt hat",
   "nach dem Abschluss eines wichtigen Handlungsbogens",
   "nachdem ein besonders gewagter oder komplexer Plan aufgeht",
   "nachdem man eine schwierige Lage überstanden hat"]},
  "Wenn Nektar gewonnen wird, bekommen alle Käfer gleich viel. Du *könntest* ein Spiel mit unterschiedlichen Stärkestufen der einzelnen Käfer leiten und Nektar in unterschiedlichen Mengen an verschiedene Charaktere vergeben, aber „nach Regelwerk“ bekommen alle zur selben Zeit dieselbe Menge. 1, 2 oder 3 Klekse Nektar pro Sitzung sind meist perfekt.",
  {t:"h4", x:"Stetiges Wachstum"},
  "Wenn es zu deiner Gruppe passt, kann der Weber am Ende jeder abgeschlossenen Sitzung ebenfalls Nektar ausgeben. So wachsen und verändern sich die Käfer auf ihren Abenteuern ständig (solange sie sich häuten, um davon zu profitieren).",
  "Wenn du das so machst, empfehlen wir, am Ende jeder Sitzung nicht mehr als 1 oder 2 Nektar zu vergeben, falls du ZUSÄTZLICH Belohnungen mitten in der Sitzung gibst, und nicht mehr als 3 oder 4, wenn du Nektar nur am Ende jeder Sitzung gibst.",
  {t:"h4", x:"Häuten"},
  "Sobald ein Spiel läuft, kann Nektar ausgegeben werden, indem man in einer Montage eine Aufgabe aufwendet und sich häutet – man streift die alte käferige Haut ab und kommt stärker hervor. *Genaueres zum Häuten findest du auf S. 80.*"
 ]});

 K.push({id:"aspekte-augmente", t:"Aspekte & Augmente", p:104, b:[
  {t:"vl", x:"„Kürze ist.“"},
  "Aspekte und Augmente zusammen machen deinen Käfer einzigartig. Idealerweise gibst du etwa die Hälfte deines Startnektars für Aspekte und Augmente aus – vielleicht etwas mehr, wenn du deine Fertigkeitenliste eher minimalistisch halten willst. Außerdem gibt es eine feste Obergrenze von sechs Aspekten pro Käfer, aber so weit kommst du noch lange nicht!",
  {t:"h", x:"Aspekte"},
  "Deine Aspekte sind die Körperteile, mitgeführte Ausrüstung und kleinen Begleiter, die dich zu *dir* machen. Aspekte kann man immer wieder benutzen, ohne sie je zu verlieren, aber jeder hat eine Leiste – ist diese Leiste vollständig markiert, hast du die Vorteile des Aspekts erst wieder, wenn mindestens eines der Kästchen geleert wurde.",
  "Aspekte dienen dazu, …",
  {t:"ul", x:[
   "**Schaden aufzufangen:** Ihre Leisten fangen jeden Schaden, den du erleidest, in Form von Markierungen auf, und einige haben sogar Brüche, mit denen sie Giga-Schaden besser auffangen können. Wenn du jemals mehr Schaden erleidest, als eine Leiste auffangen kann, wandle einige dieser Markierungen in Verbrennungen um, bis aller Schaden aufgefangen ist. Die Kästchen der Leiste eines Aspekts haben die Form von Herzen, nur um dich daran zu erinnern, dass sie eine Art Käfergesundheit darstellen.",
   "**Vorteile (und Nachteile) zu erhalten:** Das sind besondere Regeln, die die allgemeinen Spielregeln brechen, oft zu deinen Gunsten (aber nicht immer). Manche Aspekte haben Vorteile und Nachteile, die immer aktiv sind. Andere haben welche, die nur in bestimmten Situationen greifen, bei denen du die Leiste eines Aspekts markieren (oder verbrennen) musst, damit sie ins Spiel kommen, oder bei denen eine bestimmte Bedingung erfüllt sein muss. Solange ein Aspekt nicht ausdrücklich sagt, dass etwas Besonderes geschehen muss, bevor sein Vorteil oder Nachteil genutzt werden kann, gilt: Er gilt immer.",
   "**Bei Würfen zu helfen:** Aspekte haben auch eine erzählerische Komponente, die dir einen Bonus-W6 bringt, wenn du einen Wurf machst, bei dem der Aspekt relevant sein könnte. Ein Wurf, um Schaden abzuwehren, wird zum Beispiel ganz sicher erleichtert, wenn du irgendeine Art Panzer hast, und du kannst sogar beschreiben, wie du ein Stück Ausrüstung oder einen hilfreichen Kumpel benutzt, um einen eintreffenden Schlag aufzufangen. Du kannst bei jedem Wurf aber nur einen Bonus von 1W6 durch Aspekte erhalten, selbst wenn mehr als einer deiner Aspekte helfen könnte.",
   "**Dir einen pseudowissenschaftlichen Namen zu geben:** Manche Aspekte können dir auch helfen, deinen Käfer zu benennen, und geben dir einen Einblick, wie abwesende Gelehrte aus der Zeit vor der Mysteriokalypse über deine winzige Gestalt gesprochen haben könnten. Mehr über Namen erfährst du auf S. 168."]},
  {t:"cards", c:"#494344", x:[
   A("Mandibeln (Maka)","♥♥•♥","Teil","Perfekt zum Knabbern, Kauen und Packen, der häufigste käferige Mundtyp.",[V+"Ignoriere den Härte-Abzug, wenn du mit Beißen angreifst."]),
   A("Zahnradhammer","♥♥","Ausrüstung","Aus den Innereien einer alten Uhr gefertigt, mit Stolz und Errungenschaften verstärkt.",[V+"Der erste Angriff, den du in jeder Szene mit einem Zahnradhammer machst, verursacht Giga-Schaden."]),
   A("Kaulquäppchen (Ribab)","♥♥♥","Kumpel","Der Beweis, dass Natur und Erziehung beide zählen – und dass Froglins früher vielleicht mal ziemlich niedlich waren.",[V+"Ignoriere den Härte-Abzug, den *Lakaien* verursachen."])]},
  {t:"h4", x:"Aspekt-Arten"},
  "Aspekte teilen sich in drei Arten – Teile, Ausrüstung und Kumpel. *Ein Beispiel für jede Art Aspekt siehst du oben.*",
  "Teil-Aspekte sind buchstäblich Teile deines eigenen käferigen Körpers, die besonders auffällig sind – sie beschreiben nicht jede Facette von dir, aber die Stellen, auf die man achten sollte.",
  "Ausrüstungs-Aspekte sind Stücke der Welt, die du dir geschnappt und behalten hast, bis sie so sehr zu dir gehören wie ein Arm oder ein Bein. Bröckchen und Krimskrams werden benutzt, gegessen oder gehen verloren, aber Ausrüstung bleibt für immer.",
  "Kumpel-Aspekte sind kleine Freunde (meist selbst für Käfer-Verhältnisse klein), die mit dir reisen und dir in der Not helfen."
 ]});

 K.push({id:"aspekte-beispiel", t:"Aspekte im Spiel", p:105, b:[
  {t:"bsp", h:"Aspekte-Beispiel", b:[
   ["Weber","Der Froglin quakt laut, um die Aufmerksamkeit aller zu bekommen – er will, dass ihr das seht! Sobald ihr alle hinschaut, zündet er mit großer Geste eines der Streichhölzer an, die er euch gestohlen hat, und wirft es in das Feld, auf dem ihr steht!"],
   ["Dunf","Nein! Die Feldfrüchte!"],
   ["Weber","Die Feldfrüchte, allerdings – das Feuer breitet sich rasch aus, während der Froglin davonflitzt, und die Flammen rasen auf euch zu. Ich beginne eine Leiste, Das Feuer bekämpfen, und gebe ihr drei Kästchen."],
   ["Swift","Okay, okay, das schaffen wir – Bicco, du hast diesen Strohschlauch, den du vor ein paar Sitzungen gehäutet hast, hilft uns der?"],
   ["Bicco","Der ist komplett verbrannt! Wir waren zu lange von Wasser weg!"],
   ["Layla","Wartet, wartet, wir können das trotzdem schaffen – ich habe meine Strahlenden Flügel, die benutze ich, zusammen mit meiner Fertigkeit Fliegen, um die Flammen von den restlichen Feldfrüchten wegzufächern. Das ist … ein Konflikt!"],
   ["Weber","Gute Aktion! Ich markiere die Leiste, denn du hast sie für den Moment am Ausbreiten gehindert, aber du erleidest auch einen Brutzelschaden durch die intensive Hitze."],
   ["Dunf","Ich glaube, ich kann hier auch helfen! Ich habe meinen Kreiselpanzer, also halte ich an, lasse mich fallen und rolle über die sich ausbreitenden Flammen! Ich weiß, dass das wehtun wird, aber es sollte helfen, einen Teil des Feuers zu löschen."],
   ["Weber","Das könnte funktionieren! Würfle, Dunf, sehen wir, wie nützlich dein Panzer sein kann …"]]},
  {t:"h4", x:"Speziell geht vor allgemein"},
  "Viele Aspekte haben Vorteile, die verändern können, wie man das Spiel spielt, und manche verändern sogar, wie grundlegende Teile des Spiels funktionieren. In diesen Fällen haben die Vorteile und Nachteile deines Aspekts immer Vorrang vor den allgemeinen Regeln in diesem Buch.",
  "Die allgemeine Regel zum Heilen von Verbrennungen auf deinen Aspekten lautet zum Beispiel, dass du das in einer Siedlung mit einer Aufgabe tun kannst. Aber der Aspekt Strohschlauch (unten abgebildet) legt fest, dass du Verbrennungen auf seiner Leiste entfernen kannst, indem du eine Aufgabe in der Nähe einer Wasserquelle aufwendest, und dass du in dieser Lage alle Verbrennungen auf einmal entfernst.",
  {t:"cards", c:"#494344", x:[
   A("Strohschlauch","♥♥♥","Ausrüstung","Mit Wasser gefüllt, das tröpfchenweise oder in einem Schwall von extremer Wucht herausgespritzt werden kann.",[V+"Verbrenne, um sofort ein Gebiet zu durchtränken, Feuer zu löschen und Schmutz wegzuspülen. Wann immer du eine Montage in der Nähe einer Wasserquelle (etwa eines Wasserhahns oder eines Teichs) machst, leere alle Verbrennungen auf der Leiste dieses Aspekts."])]},
  "Die Besonderheiten hier setzen die allgemeinen Regeln zu Verbrennungen und dazu, wie viele man auf einmal leeren kann, außer Kraft. Sie verändern auch die Art, wie bestimmte Montagen für den Besitzer dieses Aspekts funktionieren.",
  {t:"h4", x:"Eigenständig"},
  "Kumpel-Aspekte haben weniger Herzen auf ihrer Leiste als die meisten, aber sie alle haben eine ungeschriebene Sonderregel – sie haben einen eigenen Kopf und können oft aus eigenem Antrieb in der Umgebung herumwandern. Am Ende des Tages sind sie trotzdem ein Teil deines Charakters – behalte das nur für Rollenspiel und clevere Aktionen im Hinterkopf."
 ]});

 K.push({id:"augmente", t:"Augmente", p:106, b:[
  {t:"h", x:"Augmente"},
  "Aspekte fangen schon ziemlich gut an, aber wir wollen *fantastisch*. Dafür gibt es Augmente.",
  "Augmente sind besondere Extras, die einem Aspekt hinzugefügt werden können; sie verlängern seine Herzleiste und fügen neue Vorteile (und vielleicht Nachteile) hinzu. *Jedes Augment hat außerdem einen zusätzlichen Teil des pseudowissenschaftlichen Namens für deinen Käfer, aber darum kümmern wir uns später.*",
  "Jeder Aspekt, den du kaufst, kann höchstens zwei Augmente haben, und sind sie einmal angebracht, bleiben sie für immer dran! Die Augmente fügen der Leiste des Aspekts zusätzliche Herzen (und manchmal Brüche) hinzu, und ihr Vorteil wird unter den vorhandenen Vorteil des Aspekts geheftet.",
  {t:"h4", x:"Nach Aspekt gruppiert"},
  "Die Augmente in diesem Buch sind alle nach der Art Aspekt gruppiert, zu der sie am besten passen, du findest also Augmente wie „Giftig“ und „Zermalmend“ im Abschnitt Beißer. Aber lass dich davon nicht einschränken – jedes Augment kann jedem Aspekt hinzugefügt werden, auch wenn es aus einem anderen Abschnitt stammt. Du willst einen giftigen Rucksack? Nur zu.",
  "Hier ist ein Beispiel für ein Augment (links) und dasselbe Augment, hinzugefügt zu einem der Beispiel-Aspekte von der vorigen Seite (rechts).",
  {t:"cards", c:"#494344", x:[
   G("Zermalmend","+♥","Eingebaute Hydraulik, für den Fall, dass ein normaler Biss einfach nicht reicht.",[V+"Verbrenne, um Beißen für eine Aktion als Gigabeißen zu behandeln."]),
   {t:"Zermalmende Mandibeln", k:"♥♥•♥♥ · Teil", b:["Perfekt zum Knabbern, Kauen und Packen, der häufigste käferige Mundtyp.",V+"Ignoriere den Härte-Abzug, wenn du mit Beißen angreifst.",V+"Verbrenne, um Beißen für eine Aktion als Gigabeißen zu behandeln."]}]},
  {t:"h4", x:"Die nächsten 36 Seiten"},
  "… sind Aspekten und Augmenten gewidmet, nach Themen gruppiert: Beißer, Sauger, Gucker, Panzer, Schleim, Fühler, Krabbelbeine, Greifer, Flügel, Drüsen, Schwänze, Statur, Hirn, Gefährten, Reittiere, Werkzeuge, Waffen und Fäden.",
  "Ja, im Nachhinein betrachtet habe ich mich vielleicht ein kleines bisschen hinreißen lassen.",
  "Sobald du etwa die Hälfte deines Startnektars für Aspekte und Augmente aus diesen 36 Seiten ausgegeben hast, geh zu S. 144 und gib den Rest für ein paar Fertigkeitsränge aus! Du kannst ein paar Klekse Nektar zurückhalten, wenn du dich noch nicht entscheiden kannst, aber es bringt keinen mechanischen Vorteil, ihn nicht auszugeben, wenn du ihn bekommst.",
  "Fühlst du dich von der Menge an Auswahl überwältigt? Keine Sorge, genau deshalb haben wir …"
 ]});

 K.push({id:"schnellstarts", t:"Schnellstarts", p:106, b:[
  {t:"h", x:"Aspekt- & Augment-Schnellstarts!", p:106},
  "Wenn du zum ersten Mal PICO spielst, kann es sich lohnen, auf eine bestimmte Art echten Käfer zu zielen. So hast du eine gute Vorstellung davon, wie du aussiehst, und eine feste Grundlage für alle deine weiteren Entscheidungen. Mit diesem Gedanken haben wir die Seite rechts davon einigen Kombinationen aus Aspekten und Augmenten gewidmet, die klassische echte Käfer darstellen, samt den Nektarkosten, die du für ihre Anschaffung zahlen würdest. Du *musst* sie nicht benutzen – blättere gern um und erkunde die angebotenen Aspekte und Augmente auf eigene Faust. Das ist nur eine optionale Abkürzung!",
  "Und denk daran, du zahlst …",
  {t:"ul", x:["3 N für einen Aspekt","2 N für ein Augment"]},
  {t:"cards", c:"#494344", x:[
   {t:"Ameise", k:"11 N", p:107, b:["Bekannt für immense Kraft (zumindest für ihre Größe) und einen geregelten Sinn für Ordnung.",{t:"ul", x:["Megamuskel-Mandibeln (S. 131 und 108)","Sechsfüßer (S. 120)","Infratennen (S. 118)"]}]},
   {t:"Biene", k:"11 N", p:107, b:["Angeblich das Letzte, was dem totalen Zusammenbruch der Umwelt im Weg steht. Haben am Ende die Bienen die Mysteriokalypse herbeigeführt, oder waren sie genauso überrascht wie alle anderen?",{t:"ul", x:["Süßling-Rüssel (S. 111 und 110)","Stachel (S. 128)","Drohnenflügel (S. 124)"]}]},
   {t:"Schmetterling", k:"13 N", p:107, b:["Ein Herrscher der Lüfte, fast unmöglich zu fangen (ohne die Hilfe eines großen Netzes).",{t:"ul", x:["Maskenmuster-Flatterflaps (S. 125 und 124)","Süßling-Rüssel (S. 111 und 110)","Facettenaugen (S. 112)"]}]},
   {t:"Hundertfüßer", k:"9 N", p:107, b:["Eine ausgezeichnete Wahl, wenn man dich fragt „Wie viele Beine hättest du gern?“ und du einfach mit „Ja“ antwortest.",{t:"ul", x:["Hundertfüßer-Beine (S. 120)","Scherenkiefer (S. 108)","Infratennen (S. 118)"]}]},
   {t:"Kakerlake", k:"11 N", p:107, b:["Der Vorteil des reinen Überlebens lässt sich kaum überschätzen – wenn du nie wirklich stirbst, erreichst du auf einer ausreichend langen Zeitachse so ziemlich jedes Ziel, das du dir in den Kopf setzt.",{t:"ul", x:["Chitingeschichteter Hartpanzer (S. 115 und 114)","Besentennen (S. 118)","Sechsfüßer (S. 120)"]}]},
   {t:"Grille", k:"13 N", p:107, b:["Der Herr des Tanzes und der organischen Fiedel.",{t:"ul", x:["Doppelknie-Klangvierfüßer (S. 121, nochmals S. 121 und S. 120)","Mahlwerk (S. 108)","Drohnenflügel (S. 124)"]}]},
   {t:"Libelle", k:"13 N", p:107, b:["Ausgezeichnete Jäger, die sich blitzschnell bewegen.",{t:"ul", x:["Berechnende Holoptik (S. 113 und 112)","Zappelige Vibraflügel (S. 125 und 124)","Aeroschwanz (S. 128)"]}]},
   {t:"Regenwurm", k:"9 N", p:107, b:["Hat den Ruf, viel zu früh zu gesellschaftlichen Anlässen zu erscheinen und trotz aller Mühe gefressen zu werden.",{t:"ul", x:["Nullfüßer (S. 120)","Barrikadenplasma (S. 116)","Gespaltenes Hirn (S. 132)"]}]},
   {t:"Fliege", k:"11 N", p:107, b:["Okay, vielleicht bist du eine Plage. Aber du bist eine *effektive* Plage.",{t:"ul", x:["Facettenaugen (S. 112)","Vibraflügel (S. 124)","Sabbernder Schwamm (S. 111 und 110)"]}]},
   {t:"Wasserläufer", k:"11 N", p:107, b:["Schwimmen? Das ist so letzte Saison.",{t:"ul", x:["Gleitender Vierfüßer (S. 121 und 120)","Geisterpanzer (S. 114)","Differenzmaschine (S. 132)"]}]},
   {t:"Gottesanbeterin", k:"13 N", p:107, b:["Fürchte den Sensenmann.",{t:"ul", x:["Doppelschneidige Mondsicheln (S. 123 und 122)","Vielaugen (S. 112)","Gelassene Hyperdrüse (S. 127 und 126)"]}]},
   {t:"Skorpion", k:"14 N", p:107, b:["Der stachelige kleine Panzer der Natur; ein Skorpion balanciert Angriff und Verteidigung wie ein Profi.",{t:"ul", x:["Giftspitzen-Stachel (S. 129 und 128)","Rammpanzer (S. 114)","Schnappscheren (S. 122)","Spinnenfüßer (S. 120)"]}]},
   {t:"Schnecke", k:"13 N", p:107, b:["Wo auch immer dein Haus ist, da bist du zu Hause. Buchstäblich.",{t:"ul", x:["Gepanzerter Kilotonnenpanzer (S. 115 und 114)","Teleskopische Sternaugen (S. 113 und 112)","Stinkspur (S. 116)"]}]},
   {t:"Spinne", k:"13 N", p:107, b:["Besserwisser werden anmerken, dass du kein Insekt bist. Dann frisst du sie.",{t:"ul", x:["Verstärkter Spinnenfüßer (S. 121 und 120)","Spinndrüse (S. 126)","Giftige Chelifänge (S. 109 und 108)"]}]},
   {t:"Stinkwanze", k:"11 N", p:107, b:["Ein Herrscher der Lüfte, fast unmöglich zu fangen (ohne die Hilfe eines großen Netzes).",{t:"ul", x:["Hartpanzer (S. 114)","Unappetitliche Düsternisspritze (S. 127 und 126)","Breitflügel (S. 124)"]}]}]}
 ]});

 /* Aspekt-Gruppen */
 function GR(id,t,p,c,img,ueb,hinweis,warum,frag,aspekte,augmente,aug_p,schluss){
  K.push({id:id, t:t, p:p, b:[
   {t:"img", src:"aspekt/"+img},
   {t:"h", x:"Überblick"},
   ueb, "*"+hinweis+"*",
   {t:"h4", x:"Warum "+warum[0]+"?"}, {t:"ul", x:warum[1]},
   {t:"h4", x:"Frag dich …"}, {t:"ul", x:frag},
   {t:"h", x:"Aspekte", p:p},
   {t:"cards", c:c, x:aspekte.map(function(a){ a.p=p; return a; })},
   {t:"h", x:"Augmente", p:aug_p},
   {t:"cards", c:c, x:augmente.map(function(a){ a.p=aug_p; return a; })},
   {t:"h", x:"Aspekte & Augmente"}, schluss
  ]});
 }

 GR("beisser","Beißer",108,"#9f2320","beisser",
  "Irgendetwas an deinen Mundwerkzeugen ist besonders – sie ziehen die Blicke an oder verleihen dir Fähigkeiten, die man normalerweise nicht erwarten würde. Wenn du einen Satz Beißer als Aspekt nimmst, signalisierst du dem Rest des Tisches, dass Essen oder Beißen für deinen Charakter eine große Sache sein soll.",
  "Wenn du am Ende keinen Aspekt von dieser Seite wählst, heißt das nicht, dass du keinen Mund hast! Ein Käfer ohne auffällige Beißer kann alles Mögliche haben, von einem kleinen Satz Knabberwerkzeuge bis zu einem großen, albernen Lächeln – aber was auch immer du hast, es gibt dir keine mechanischen Boni, solange es nicht durch einen Aspekt dargestellt wird.",
  ["Beißer",["Weil dir Essen wichtig ist","Weil du etwas Bestimmtes essen willst","Weil Dinge zu beißen Spaß macht","Weil du furchterregend aussehen willst"]],
  ["Gibt es eine bestimmte Art Essen, zu der du dich hingezogen fühlst, oder eine, die du um jeden Preis meidest?","Was ist das Beeindruckendste, das du je gegessen hast, und was hat es so verflixt beeindruckend gemacht?","Du kannst ehrlich sein – hast du jemals etwas gegessen, das du *wirklich* nicht essen solltest?"],
  [A("Mandibeln (Maka)","♥♥•♥","Teil","Perfekt zum Knabbern, Kauen und Packen, der häufigste käferige Mundtyp.",[V+"Ignoriere den Härte-Abzug, wenn du mit Beißen angreifst."]),
   A("Chelifänge (Vixo)","♥♥♥•♥","Teil","Der Gipfel des Grauens; diese bösartig gekrümmten Fänge stellen einen Käfer eindeutig auf die „Raubtier“-Seite der Raubtier-Beute-Trennung.",[V+"Wenn du mit Beißen würfelst, steigert ein Triumph es für diese Aktion zu Gigabeißen."]),
   A("Mahlwerk (Katkata)","♥♥♥♥","Teil","Diese Beißer wurden für die zähesten Mahlzeiten gemacht!",[V+"Du kannst Krimskrams ebenso wie Bröckchen verzehren, wenn du in einer Montage Markierungen auf deinen Teilen heilst."]),
   A("Knirscher (Chicho)","♥•♥♥","Teil","Da drüben, ein guter Platz für ein Picknick!",[V+"Wenn du einen Ausguckwurf machst, ohne einen Pasch zu finden, kannst du ein Bröckchen verzehren, um deine Stimmung ins Positive zu ziehen, wenn du willst."]),
   A("Scherenkiefer (Snapo)","♥•♥♥","Teil","Mit Scharnieren für schnelles, entschlossenes Zuschnappen.",[V+"Wenn du mit einer Rauf-Fertigkeit konterst, erhältst du Giga-Wucht-Schaden statt der üblichen Normal-Wucht."]),
   A("Lästermaul (Yapski)","♥♥•♥","Teil","Die Beleidigungen, die du kennst, würden eine Blattlaus blau anlaufen lassen.",[V+"Ignoriere den Härte-Abzug, wenn du mit Quasseln angreifst."]),
   A("Feinschmecker (Mumu)","♥♥♥","Teil","Du schwelgst im Erlesenen, wann immer du kannst.",[V+"Ziehe deine Stimmung ins Positive, wann immer du aus irgendeinem Grund ein knuspriges Bröckchen oder Krimskrams verzehrst."]),
   A("Megamaul (Gnom)","♥♥","Teil","Das ist ein Biss, der in die käferige Geschichte eingehen wird.",[V+"Einmal pro Szene kannst du verbrennen, um das Rampenlicht an dich zu reißen und sofort eine Beißen-Aktion auszuführen, die allen Abzug ignoriert und deine Fertigkeit Beißen als Gigabeißen behandelt."]),
   A("Stachelspucker (Yoma)","♥•♥","Teil","Wenn sie nicht nah genug für einen schönen, kräftigen Happs herankommen, musst du ihnen die Bisse eben schicken!",[V+"Du kannst entfernte Gefahren mit Beißen oder Brutzeln angreifen, ohne Abzug zu erleiden oder die Wucht zu senken."])],
  [G("Kannibalisch (Chuchu)","+♥♥","Nimm das sofort aus dem Mund!",[V+"Du heilst automatisch ein Herz, wenn du ein käferiges Ziel erfolgreich mit einer Rauf-Fertigkeit triffst."]),
   G("Zermalmend (Chakro)","+♥","Für den Fall, dass ein nicht-hydraulischer Biss einfach nicht reicht.",[V+"Verbrenne, um Beißen für eine Aktion als Gigabeißen zu behandeln."]),
   G("Weissagend (Ohmi)","+•♥♥♥","Ein Orakel der schnappenden Kiefer.",[V+"Wenn du die Leiste einer Gefahr mit einer Rauf-Aktion brichst, erfährst du ein Geheimnis über das Ziel (vom Weber geliefert)."]),
   G("Nebelhorn (Blaa)","+♥","Für maximale Lautstärke ausgestellt.",[V+"Verbrenne, um Quasseln für eine Aktion als Gigaquasseln zu behandeln."]),
   G("Grapschend (Tova)","+♥♥","Lass mich nie los!",[V+"Würfle Ergebnisse von 1 im Würfelpool neu, wenn du versuchst, einen Griff aufrechtzuerhalten oder dich aus einem zu befreien."]),
   G("Schleichstoß (Slisli)","+♥•♥","Beißer? Welche Beißer? Ach, DIE Beißer?",[V+"Einmal pro Szene kannst du jede Fertigkeit, mit der du angreifst, auf ihre Giga-Version steigern, wenn dein Ziel dich nicht bemerkt hat."]),
   G("Schmutzig (Sle)","+•♥","Hat dir nie jemand beigebracht, mit geschlossenem Mund zu kauen, was?",[V+"Wenn du aus irgendeinem Grund ein Bröckchen verzehren würdest, gib ihm stattdessen das Etikett „Angekaut“ und behalte es. Wenn du ein Bröckchen mit dem Etikett „Angekaut“ verzehrst, ist es für immer weg."]),
   G("Bezahnt (Ketake)","+•♥","Käfer können Zähne haben? Na, man lernt jeden Tag etwas Neues.",[V+"Wenn du bei einer Beißen-Aktion eine Wendung würfelst, erhältst du zusätzlich zu allen anderen üblichen Belohnungen ein zur Situation passendes Bröckchen oder Krimskrams."]),
   G("Pinzette (Cligu)","+•♥♥","Extreme Länge und extreme Präzision haben ihren Preis.",[V+"Du ignorierst den Komplex-Abzug, wenn du Beißen benutzt.",N+"Verdopple jeden Panzer-Abzug, wenn du Beißen benutzt."]),
   G("Giftig (Sizo)","+•♥","Manche würden sagen, das sei geschummelt, aber für dich gehört es einfach zur Jagd.",[V+"Wähle eine Gefahrenart: *Krabbelig*, *Bestial*, *Schuppig*, *Schleimig*, *Gefiedert*, *Blättrig*, *Pilzig*, *Scheppernd* oder *Geisterhaft*. Behandle Beißen als Gigabeißen, wenn du Ziele mit dem von dir gewählten Schlüsselwort angreifst."]),
   G("Gefräßig (Chacha)","+♥","Du bist eine Maschine! Natürlich nicht buchstäblich – du bist ein Käfer. Aber diese Mundwerkzeuge arbeiten ganz sicher wie ein Fließband, wenn es ums Essen geht.",[V+"Du kannst in einer Montage ein essbares Bröckchen verzehren, ohne eine Aufgabe aufzuwenden, und heilst dabei ein Herz auf diesem Aspekt."]),
   G("Xenisch (Xeno)","+•♥","Wie das Ding aus diesem berühmten Film!",[V+"Jede Gefahr, die dich stößt, zieht oder greift, erleidet unausweichlichen Beißen-Schaden."])],
  109,
  "Wenn du dich nach wundervollen Mundwerkzeugen umsiehst, kannst du 3 Nektar für einen Aspekt von der Seite links ausgeben. Nach dem Kauf kann ein Beißer mit bis zu zwei der unten stehenden Augmente verstärkt werden, die je 2 Nektar mehr kosten.");

 GR("sauger","Sauger",110,"#c86f00","sauger",
  "Du wärst der Schrecken am Lutscherstand, wenn es solche Dinge noch gäbe (und vielleicht gibt es sie ja, wer sind wir, das zu sagen?). Wenn du einen Sauger als Aspekt nimmst, signalisierst du dem Rest des Tisches, dass Schlürfen und Verdauen für deinen Charakter eine große Sache sein soll.",
  "Wenn du am Ende keinen Aspekt von dieser Seite wählst, heißt das nicht, dass du keine Zunge hast! Ein Käfer ohne Sauger kann trotzdem Bröckchen in alarmierendem Tempo einsaugen und die Welt auf nervige Weise ablecken – aber was auch immer du hast, es gibt dir keine mechanischen Boni, solange es nicht durch einen Aspekt dargestellt wird.",
  ["Sauger",["Weil dir Geschmack wichtig ist","Weil du auf Sachen sabbern willst","Weil Spucken dich wie einen Halbstarken aussehen lässt und es Vorteile hat, gemieden zu werden","Weil du einen guten Vorrat an Taschentüchern hast"]],
  ["Was hältst du von Gobstoppern? Abscheuliche Abscheulichkeit oder lohnende Herausforderung?","Isst du im Stillen oder schlingst du vor allen anderen alles hinunter?","Hast du je etwas ungenießbar gefunden, und warum?"],
  [A("Rüssel (Bulmu)","♥♥","Teil","Ein schlankes Rohr für zarte Esser. Kann pfeilgerade, sorgfältig gebogen oder spiralförmig sein!",[V+"Verringere jeden Abzug um 1, wenn du Bröckchen sammelst."]),
   A("Staubsauger (Shulpa)","♥♥♥•♥","Teil","Eine kleine Mundtrompete, die alles in der Nähe aufsaugt, für maximale Effizienz geweitet.",[V+"Beim Sammeln zieht eine Wendung deine Stimmung ins Positive, zusätzlich zu allen anderen üblichen Wirkungen."]),
   A("Schwamm (Hobla)","♥♥♥","Teil","Der Gipfel käferigen Luxus – warum kauen, wenn man einfach aufsaugen kann?",[V+"Ziehe deine Stimmung ins Positive, wann immer du aus irgendeinem Grund ein weiches Bröckchen oder Krimskrams verzehrst."]),
   A("Wühlwanst (Ghili)","♥♥♥","Teil","Niemand wird dir sagen, was du essen darfst und was nicht!",[V+"Wähle eine Art von normalerweise ungenießbaren Bröckchen oder Krimskrams (etwa Steine, Elektrizität oder Metall). Wenn du ein Bröckchen oder Krimskrams dieser Art verzehrst, ziehe deine Stimmung ins Positive und leere eine Markierung auf einer deiner Leisten."]),
   A("Blutsauger (Blik)","♥•♥","Teil","Über diesen sagt man besser möglichst wenig.",[V+"Behandle Konflikte als Triumphe, wenn du versuchst, einen Griff zu beginnen oder aufrechtzuerhalten."]),
   A("Hirnstiel (Theu)","♥♥•♥","Teil","Niemand hat je gesagt, das Gehirn müsse *im* Körper sein. Lasst uns hier mal einen Klassiker des Horrors bringen!",[V+"Ignoriere den Härte-Abzug, wenn du mit Denken angreifst."]),
   A("Tentakelzunge (Jozi)","♥♥♥","Teil","Eine zappelnde „Zunge“, gemacht, um widerspenstiges Essen aufzuspüren.",[V+"Ignoriere den Tarn-Abzug, wenn du eine Rauf-Fertigkeit benutzt."]),
   A("Weitschuss (Hyaa)","♥♥♥","Teil","Ein federgespannter Schlecker mit beeindruckender Reichweite, eine käferige Nachahmung eines schuppigen Klassikers.",[V+"Ignoriere jeden Abzug, der dafür angesetzt würde, ein entferntes (oder fliegendes) Ziel zu greifen oder zu ziehen."]),
   A("Stecher (Siqu)","♥♥♥","Teil","Es ist das Jucken, das dich kriegt …",[V+"Ignoriere den Panzer-Abzug bei bestialischen Gefahren."])],
  [G("Säuredrüse (Splurk)","+♥","Setzt das „Süß“ in „Sauer“ (zum Glück sind Käfer schlecht in Rechtschreibung).",[V+"Verbrenne, um Brutzeln für eine Aktion als Gigabrutzeln zu behandeln."]),
   G("Bitter (Uru)","+♥","Nimm diese Säure und steck sie in Worte.",[V+"Wähle eine Gefahrenart: *Krabbelig*, *Bestial*, *Schuppig*, *Schleimig*, *Gefiedert*, *Blättrig*, *Pilzig*, *Scheppernd* oder *Geisterhaft*. Behandle Quasseln als Gigaquasseln, wenn du Ziele mit dem von dir gewählten Schlüsselwort angreifst."]),
   G("Feinzüngig (Doshi)","+•♥♥","Der verfeinerte Gaumen eines käferigen Feinschmeckers.",[V+"Behandle Konflikte als Triumphe, wenn du einen Aktionswurf mit einer Finden-Fertigkeit machst.",N+"Du bist schwach gegen jeden Schaden, der durch starke Geschmäcker oder Gerüche verursacht wird."]),
   G("Sabbernd (Raugi)","+♥","Liebenswert eklig.",[V+"Ziehe deine Stimmung ins Negative, um ein Desaster als Konflikt zu behandeln, während du eine Anfreunden-Fertigkeit benutzt."]),
   G("Ausbrechend (Bomi)","+•♥♥","Besser nicht darüber nachdenken, wie dieser aussehen mag.",[V+"Du ignorierst den Tempo-Abzug, wenn du Brutzeln benutzt.",N+"Verdopple jeden Komplex-Abzug, wenn du Brutzeln benutzt."]),
   G("Schleusentor (Jushu)","+•♥","Wie viel stechenden Speichel kann ein Käfer produzieren? Moment, haben Käfer überhaupt Speichel?",[V+"Wenn die Leiste dieses Aspekts bricht, ignoriere für den Rest der Szene den Panzer-Abzug."]),
   G("Sprühnebel (Lo)","+♥","Du niest einen feinen, ätzenden Nebel, der mit Sonnenlicht reagiert – halte besser Taschentücher bereit.",[V+"Im Licht verringerst du jeden Panzer-Abzug, den du und deine Verbündeten erleiden, um 1."]),
   G("Giftüberzug (Soza)","+♥","Ein kleiner Extra-Kick, mit dem sie nicht rechnen.",[V+"Einmal pro Szene kannst du deine Stimmung ins Negative ziehen, um bei einer Aktion mit einer Rauf-Fertigkeit allen Abzug zu ignorieren."]),
   G("Schattenküsst (Pata)","+♥","Manche Dinge sind unter dem Schutz tintiger Dunkelheit beeindruckender.",[V+"Ignoriere den Härte-Abzug bei Anfreunden-Fertigkeiten, wenn du im Dunkeln bist."]),
   G("Süßling (Fwasomi)","+♥♥","Zucker, Pollen, Honig – nichts geht über einen Schuss Adrenalin am Nachmittag wie Süße.",[V+"Heilen mit einem süßen oder zuckrigen Bröckchen leert doppelt so viele Herzen wie üblich."]),
   G("Klebend (Globa)","+♥","Der Notfall-Superkleber der Käferwelt.",[V+"Verbrenne, um Werkeln für eine Aktion als Gigawerkeln zu behandeln."]),
   G("Spritze (Khaso)","+♥♥","Du bist wegen des süßen, süßen Bluts dabei!",[V+"Du heilst automatisch ein Herz, wenn du ein bestialisches Ziel erfolgreich mit einer Rauf-Fertigkeit triffst."]),
   G("Flüsternd (Vefi)","+•♥","Du sprichst leise, aber deine Worte haben Gewicht.",[V+"Behandle Ergebnisse von 1 wie Ergebnisse von 6, wenn du eine Anfreunden-Fertigkeit benutzt."])],
  111,
  "Wenn du dich nach einem großartigen Schlund umsiehst, kannst du 3 Nektar für einen Aspekt von der Seite links ausgeben. Nach dem Kauf kann ein Sauger mit bis zu zwei der unten stehenden Augmente verstärkt werden, die je 2 Nektar mehr kosten.");

 GR("gucker","Gucker",112,"#008bd2","gucker",
  "Du hast vielleicht keine schönen Augen, aber sie sind auf irgendeine Weise ganz sicher auffällig. Wenn du einen Satz Gucker als Aspekt nimmst, signalisierst du dem Rest des Tisches, dass Sehen und Aufmerksamkeit für deinen Charakter eine große Sache sein sollen.",
  "Wenn du am Ende keinen Aspekt von dieser Seite wählst, heißt das nicht, dass du keine Augen hast! Ein Käfer ohne auffällige Gucker kann alles Mögliche haben, von mehreren kleinen Augen bis zu lichtempfindlichen Flecken – aber was auch immer du hast, es gibt dir keine mechanischen Boni, solange es nicht durch einen Aspekt dargestellt wird.",
  ["Gucker",["Weil du künstlerisch sein willst","Weil du alle Einzelheiten aufnehmen willst","Weil Augen (theoretisch) Augenbrauen bedeuten und Augenbrauen ergreifende und bedeutungsvolle Gesichtsausdrücke per Braue bedeuten"]],
  ["Was hast du gesehen, das du nie hättest sehen sollen? Hat dir ein Blick Ärger eingebracht?","Gibt es etwas, das deine Augen besonders gut bemerken, etwa Bewegung oder Farbe?","Welcher Anblick der käferigen Welt steht auf deiner Wunschliste?"],
  [A("Facettenaugen (DiO)","♥♥","Teil","Du siehst die Welt in einem vielfach facettierten Wirbel, einem Strudel unglaublicher Details.",[V+"Markiere, damit der Weber ein Detail der aktuellen Szene nennt, das du und deine Verbündeten übersehen habt."]),
   A("Vielaugen (Lato)","♥•♥","Teil","Fenster zur Seele? Du hast ein ganzes Haus davon!",[V+"Wenn du während einer Reise auf dem Ausguck bist, würfelst du 3W6 statt der üblichen 2W6 und nimmst beliebige zwei der Ergebnisse, die dir lieber sind."]),
   A("Holoptik (Toto)","♥♥♥","Teil","Die größten Augen weit und breit, umso besser, um dich zu sehen …",[V+"Wenn du ahnungslos oder überrascht erwischt würdest, reißt du stattdessen für eine Aktion das Rampenlicht an dich."]),
   A("Winzaugen (Dai)","♥•♥","Teil","Größe ist nicht alles – diese Augen sind ganz auf Präzision ausgelegt.",[V+"Wenn du ein Bröckchen oder Krimskrams erhältst, markiere, um ein positives Etikett deiner Wahl hinzuzufügen."]),
   A("Fehlende Augen (Hada)","♥♥♥•♥","Teil","Okay, du hast vielleicht *keine* Augen. Aber du lässt dich dadurch nicht aufhalten!",[V+"Du bist immun gegen Blenden."]),
   A("Stemmata (Hoble)","♥•♥♥","Teil","Es ist technisch gesehen ein Auge, im gleichen Sinne, wie ein Hund ein Wolf ist.",[V+"Einmal pro Sitzung kannst du, wenn ein anderer Käfer eine kleine Entdeckung macht, *ebenfalls* eine kleine Entdeckung machen (die auf einem völligen Missverständnis der Situation beruht, die sie ausgelöst hat)."]),
   A("Sternaugen (Staastaa)","♥♥","Teil","Eine ungewöhnliche Form, aber wer kann in der Zeit nach der Mysteriokalypse schon sagen, was gewöhnlich ist und was nicht?",[V+"Wähle entweder Licht oder Dunkelheit. Ignoriere den Härte-Abzug bei allen sichtbasierten Würfen während deiner gewählten Zeit."]),
   A("Glitzeraugen (Miku)","♥♥","Teil","Angezogen von glänzenden Dingen wie eine kleine käferige Elster.",[V+"Im Licht erhält jedes Krimskrams, auf das du stößt, ein positives Etikett (vom Weber geliefert), falls es nicht ohnehin schon einen hätte."])],
  [G("Glubschend (Ongo)","+♥","Größer als der Durchschnitt? Du verschiebst den Durchschnitt, Baby!",[V+"Verbrenne, um Stöbern für eine Aktion als Gigastöbern zu behandeln."]),
   G("Berechnend (Psyo)","+♥","Du erkennst die kleinsten Bewegungen und kannst auf Dinge reagieren, fast bevor sie geschehen.",[V+"Einmal pro Szene reißt du das Rampenlicht an dich, wenn eine Gefahr einen Zug auf einen nahen Verbündeten macht."]),
   G("Kartografisch (Mapi)","+♥","Ein Auge für geologische und natürliche Einzelheiten.",[V+"Verbrenne, um Kartieren für eine Aktion als Gigakartieren zu behandeln."]),
   G("Getrübt (Uzi)","+ •♥♥","Der Käfer, der seine Frau mit einem Hut verwechselte.",[V+"Du bist resistent gegen Blenden und Prahlen."]),
   G("Niedlich (Jiko)","+•♥","Manchmal reicht ein Wimpernschlag.",[V+"Verringere den Härte-Abzug um 1, wenn du versuchst, einen Gegner zu becircen oder eine Lage zu entschärfen."]),
   G("Scheinwerfer (Poi)","+♥♥♥","Biologisch sind Augen, die Licht erzeugen, ziemlich nutzlos. Aber verdammt cool!",[V+"Du kannst Licht auf einen nahen Punkt (oder einen nahen Käfer oder ein nahes Ziel) richten."]),
   G("Schwerlidrig (Grawa)","+♥♥","Du bist nicht die ganze Zeit müde … nur, solange du wach bist.",[V+"Leere alle Markierungen auf der Leiste dieses Aspekts, wenn du dich während einer Reise ausruhst."]),
   G("Fernsichtig (dubo)","+♥♥♥","Wer blickt weit voraus? Planer und Jäger, höchstwahrscheinlich.",[V+"Wenn eine Szene beginnt, bitte den Weber, ein einzelnes Bröckchen oder Krimskrams zu nennen, das du erblickst und das sonst niemand bemerkt."]),
   G("Durchdringend (Dola)","+♥","Deine Augen sind zum Funkeln und Starren gemacht.",[V+"Einmal pro Szene kannst du deine Stimmung ins Negative ziehen, um bei einer Aktion mit einer Anfreunden-Fertigkeit allen Abzug zu ignorieren."]),
   G("Empfindlich (Ahi)","+♥","Die Übung im Deuten der vagen Formen der Welt hat deine Augen über den käferigen Durchschnitt hinaus geschult.",[V+"Behandle Ergebnisse von 3, 2 oder 1 als dieselbe Zahl, wenn du beim Einsatz einer Finden-Fertigkeit auf Päsche prüfst."]),
   G("Teleskopisch (Woapa)","+♥♥","Fahr sie aus, wenn du ein Stückchen mehr Reichweite brauchst, und zieh sie ein, wenn du etwas Verdächtiges erblickst.",[V+"Du kannst aus sicheren oder verborgenen Stellen hinausspähen, ohne gesehen zu werden und ohne einen Wurf zu benötigen."]),
   G("Weinend (Buhu)","+♥♥","Irgendwo weit weg schneidet jemand Zwiebeln, du schwörst es.",[V+"Als Aufgabe kannst du deine Stimmung ins Negative ziehen, um ein Bröckchen zu erhalten, entweder „Salzige Träne“ oder „Augenkruste“."]),
   G("Breitspektrum (Ocuro)","+♥","Lichter und Farben? Es gibt so viel mehr davon, als die meisten je erwarten!",[V+"Ignoriere jeden Abzug, der durch biologische Tarnung (wie farbwechselnde Schuppen) verursacht wird."])],
  113,
  "Wenn du dich nach einigen verlockenden Äuglein umsiehst, kannst du 3 Nektar für einen Aspekt von der Seite links ausgeben. Nach dem Kauf können Gucker mit bis zu zwei der unten stehenden Augmente verstärkt werden, die je 2 Nektar mehr kosten.");

 GR("panzer","Panzer",114,"#8a3679","panzer",
  "Das Innere zählt, aber das Äußere zählt auch. Der Panzer, der dich schützt, ist auf irgendeine Weise besonders, ein verlässliches Bollwerk oder eine komplexe Hülle. Wenn du einen Panzer als Aspekt nimmst, signalisierst du dem Rest des Tisches, dass Verteidigung oder Sicherheit für deinen Charakter eine große Sache sein soll.",
  "Wenn du am Ende keinen Aspekt von dieser Seite wählst, heißt das nicht, dass du keinen Panzer hast! Du hast vielleicht eine etwas triste, aber völlig funktionale Hülle, oder du gehörst zu den wurmartigen Typen, die ganz pulsierend und glitschig werden. Aber denk daran: Was auch immer du hast, es gibt dir keine mechanischen Boni, solange es nicht durch einen Aspekt dargestellt wird.",
  ["einen Panzer",["Weil du auf andere beeindruckend wirken willst","Weil Sicherheit dein Anliegen Nummer eins ist","Weil die Welt ein großer, beängstigender Ort ist","Weil du rau und hart aussehen willst"]],
  ["Verzierst du deinen Panzer mit Farbe oder einer anderen Art von Zeichen?","Wovor hat dein Panzer dich in der Vergangenheit gerettet, welchen Feind oder welches katastrophale Ereignis, das einen schwächer gepanzerten Käfer erledigt hätte?","Trägst du auffällige Narben auf deiner Hülle, oder ist sie so frisch wie am Tag deiner Häutung?"],
  [A("Hartpanzer (Athro)","♥•♥♥","Teil","Ein klassischer Panzer, auf den jeder Käfer stolz wäre.",[V+"Wähle zwei aus Hauen, Beißen, Schlitzen oder Brutzeln. Du bist resistent gegen die gewählten Schadensarten."]),
   A("Weichpanzer (Gombu)","♥♥•♥","Teil","Mit dünner Haut aufzuwachsen hilft, die Gefühle anderer etwas besser zu bedenken … vielleicht?",[V+"Wähle zwei aus Quasseln, Prahlen, Blenden oder Kümmern. Du bist resistent gegen die gewählten Schadensarten."]),
   A("Geisterpanzer (Actra)","♥♥♥♥","Teil","Mehr hast du nicht? Was, wenn eine starke Windböe kommt oder du einen leichten Schock erleidest?",[V+"Du bist unsichtbar für jene, die durch das Aufspüren von Erschütterungen jagen, und löst keine druckbasierten Fallen aus."]),
   A("Kilotonnenpanzer (Joro)","♥♥","Teil","Käfer wissen nicht, was eine Kilotonne ist, aber es *klingt* ganz sicher schwer.",[V+"Du kannst gegen deinen Willen nicht gestoßen, gezogen, hochgehoben, geworfen oder verschluckt werden."]),
   A("Rammpanzer (Capra)","♥♥•♥","Teil","Es gibt immer nur eine Antwort – Angriff!",[V+"Ignoriere den Härte-Abzug, wenn du mit Hauen angreifst."]),
   A("Steinpanzer (Doko)","♥♥•♥","Teil","Du bist von Natur aus steinartig, eine uneinnehmbare kleine Festung von einem Käfer, die große Treffer mit Leichtigkeit wegsteckt.",[V+"Ignoriere den Härte-Abzug, wenn du mit Schützen verteidigst."]),
   A("Hornpanzer (Ispro)","♥•♥","Teil","Man sagt, die beste Verteidigung ist ein guter Angriff, und das hast du dir wirklich zu Herzen genommen.",[V+"Ignoriere den Panzer-Abzug, wenn du eine Rauf-Fertigkeit benutzt."]),
   A("Schildpanzer (Govi)","♥♥♥•♥","Teil","Eine beunruhigend bewegliche Kruste.",[V+"Wenn du ein Desaster würfelst, während du dich gegen den Angriff einer Gefahr verteidigst, erleidet diese Gefahr eine unausweichliche Markierung Schützen-Schaden."]),
   A("Hüllpanzer (Guroi)","♥♥♥•♥","Teil","Moment … Das ist kein Panzer, das ist ein Samen!",[V+"Jedes Mal, wenn das Wetter wechselt, ziehe entweder deine Stimmung ins Positive oder leere eine einzelne Markierung auf diesem Aspekt."])],
  [G("Gepanzert (Katra)","+ •♥♥","Knirschen auf Knirschen.",[V+"Du bist resistent gegen Kümmern und Schlitzen."]),
   G("Gebrochen (Isata)","+ •♥♥","Es mag ein Loch in deiner Verteidigung sein, aber es hat dich mit der Zeit ganz sicher abgehärtet.",[V+"Der erste Schaden in jeder Sitzung, der eine deiner Leisten brechen oder vollständig markieren würde, wird stattdessen ignoriert."]),
   G("Chitingeschichtet (Aka)","+ •♥♥","Panzer auf Panzer auf Panzer.",[V+"Du bist resistent gegen Hauen und Erschrecken."]),
   G("Ferrit (Ynda)","+ •♥","Zu viel Zeit mit Videospielen verbracht, würde ich wetten.",[V+"Verbrenne, um deinen Panzer für einen Moment zu magnetisieren. Wenn du das tust, während du mit einer Metallwaffe angegriffen wirst, betäube deinen Angreifer."]),
   G("Verziert (Zala)","+♥•♥♥","Manche Panzer sind einfach … *Küsschen auf die Fingerspitzen*.",[]),
   G("Stückwerk (Cakla)","+♥","Du neigst dazu, unterwegs Dinge aufzulesen.",[V+"Du heilst automatisch ein Herz, wenn du ein scheppernd-klankerndes Ziel erfolgreich mit einer Rauf-Fertigkeit triffst."]),
   G("Gummiert (Boi)","+ •♥♥","Eine antikinetische Beschichtung.",[V+"Du bist resistent gegen Tanzen und Fliegen."]),
   G("Robust (Ko)","+•♥","Strapazierfähig, aber nicht schwer zu tragen.",[V+"Einmal pro Sitzung ignorierst du eine einzelne Schadensinstanz."]),
   G("Segmentiert (Kli)","+♥♥♥","Lang und flexibel, dein Panzer ist eine Reihe von Segmenten, gemacht, um sich zu winden und zu krümmen.",[V+"Markiere ein Herz, um ein nahes Ziel zu *greifen*, ohne dafür im Rahmen einer Aktion würfeln zu müssen."]),
   G("Glänzend (Hin)","+♥","Du wirfst Licht auf ungewöhnliche Weise zurück, dein kaleidoskopischer Panzer ist bis zu einem fast spiegelnden Glanz poliert.",[V+"Im Dunkeln verringerst du jeden Tarn-Abzug, den du und deine Verbündeten erleiden, um 1."]),
   G("Stachelig (Kiri)","+•♥","Autsch!",[V+"Jede Gefahr, die dich stößt, zieht oder greift, erleidet unausweichlichen Schlitzen-Schaden."]),
   G("Durchsichtig (Whi)","+♥","Dein Inneres ist innen – das weißt du sicher, denn du kannst es sehen.",[V+"Verbrenne, um Erschrecken für eine Aktion als Gigaerschrecken zu behandeln."]),
   G("Breit (Gibu)","+•♥","Zum Schutz von Freunden.",[V+"Jeder Verbündete kann einmal pro Szene deine Ränge in Schützen anstelle seiner eigenen benutzen, solange er sich dabei in der Nähe befindet."]),
   G("Wollig (Fwafwa)","+♥","Du fühlst dich weich an, mit einem flaumigen Überzug wie ein Kissen der Träume.",[V+"Wenn andere Käfer sich in deiner Nähe während einer Montage ausruhen, heilen sie ein zusätzliches Herz.",N+"Wann immer du Panzer-Abzug erleiden würdest, erhöhe ihn um 1."]),
   G("Wirbelkugel (Teko)","+♥","Rolle dich zu einer gepanzerten Kugel zusammen, wenn du bedroht wirst!",[V+"Verbrenne, um Schützen für eine Aktion als Gigaschützen zu behandeln."])],
  115,
  "Wenn du dich nach klassischem Chitin umsiehst, kannst du 3 Nektar für einen Aspekt von der Seite links ausgeben. Nach dem Kauf kann ein Panzer mit bis zu zwei der unten stehenden Augmente verstärkt werden, die je 2 Nektar mehr kosten.");

 GR("schleim","Schleim",116,"#185d7e","schleim",
  "Der große Gleichmacher: Wenn man den Gerüchten glaubt, bringt nichts Leute so unerwartet in die Waagerechte wie unerwarteter Schleim. Wenn du Schleim als Aspekt nimmst, signalisierst du dem Rest des Tisches, dass Glitschigkeit oder Klebrigkeit für deinen Charakter eine große Sache sein soll.",
  "Wenn du am Ende keinen Aspekt von dieser Seite wählst, heißt das nicht, dass du nicht schleimig bist! Du hast vielleicht einen dünnen Überzug aus Glibber oder hinterlässt eine Spur, die schnell trocknet. Aber denk daran: Was auch immer du hast, es gibt dir keine mechanischen Boni, solange es nicht durch einen Aspekt dargestellt wird.",
  ["Schleim",["Weil du wurmig sein willst und es dir egal ist, wer es weiß","Weil du als Kind Wasserrutschen mochtest","Weil Planschen nicht auf den Teichrand beschränkt sein sollte","Weil du auf die ekligste Art heimlich sein willst"]],
  ["Machst du hinter dir sauber, nachdem du durchgekommen bist?","Schwelgst du in warmen Umgebungen oder meidest du sie aus Angst auszutrocknen?","Welche Farbe hat dein ganz persönlicher Schleim?"],
  [A("Laichmantel (Hachu)","♥•♥•♥","Teil","Deine Familie als schleimigen Mantel mit dir zu tragen gibt eine Menge moralischer Unterstützung!",[V+"Wenn diese Leiste bricht, wähle einen Verbündeten. Er ignoriert die nächste Schadensinstanz, die er erleiden würde."]),
   A("Stinkspur (Boo)","♥♥♥","Teil","Okay, das ist wirklich ekelhaft.",[V+"Du kannst nicht verschluckt werden und erhältst Resistenz gegen Beißen.",N+"Erhöhe jeden Härte-Abzug, den du beim Benutzen einer Anfreunden-Fertigkeit erleidest, um 1."]),
   A("Halluzino-Glibber (Buh)","♥♥•♥","Teil","Die ganze Furcht einer Vogelscheuche in ein winziges käferiges Paket gepackt.",[V+"Ignoriere den Härte-Abzug, wenn du mit Erschrecken angreifst."]),
   A("Kleptotoxin (Yoiku)","♥•♥","Teil","Du willst Gift benutzen? *Bei mir?*",[V+"Wann immer du Schaden durch ein Gift oder Toxin erleiden würdest, leere entweder eine Markierung auf diesem Aspekt oder reiße das Rampenlicht an dich, um einem nahen Ziel sofort eine Markierung unausweichlichen Brutzeln-Schaden zuzufügen."]),
   A("Kapsuccino (Haca)","♥♥♥","Teil","Ein Schleim aus Schärfe und Bitterkeit.",[V+"Ziehe deine Stimmung ins Positive, wann immer du aus irgendeinem Grund ein scharfes Bröckchen oder Krimskrams verzehrst."]),
   A("Klebpanzer (Splaga)","♥♥♥♥","Teil","Eigentlich kein Panzer, eher ein Überzug aus schleimigem Du-Zeug, der den Rest von dir in sich hält.",["**Vorteil/Nachteil:** Du bist ein glitschiger Kunde – du kannst weder von Freund noch Feind gegriffen oder festgehalten werden!"]),
   A("Giftmantel (Saosa)","♥♥•♥","Teil","Die Säure behält man besser außen, findest du nicht?",[V+"Ignoriere den Härte-Abzug, wenn du mit Brutzeln angreifst."]),
   A("Barrikadenplasma (Enga)","♥♥","Teil","Genau gemischt, um eine bestimmte Bedrohung zu übelkeiterregen.",[V+"Wähle eine Gefahrenart: *Krabbelig*, *Bestial*, *Schuppig*, *Schleimig*, *Gefiedert*, *Blättrig*, *Pilzig*, *Scheppernd* oder *Geisterhaft*. Du bist resistent gegen Schaden von deiner gewählten Gefahrenart (egal, welche Schadensart sie austeilt)."])],
  [G("Beißend (Ghavi)","+♥♥","Man riecht dich schon auf eine Meile.",[V+"Verzehre ein Bröckchen, um die Nasen aller nahen Gefahren zu verwirren."]),
   G("Perlend (Grei)","+♥♥","Ein natürlicher Vorgang der Kügelchenbildung.",[V+"Als Aufgabe kannst du deine Stimmung ins Negative ziehen, um ein Bröckchen zu erhalten, entweder „Verdichteter Glibber“ oder „Schleimperle“."]),
   G("Klamm (Wova)","+♥♥","Das Gefühl, nicht die Muschel.",[V+"Markiere ein Herz, um ein nahes Ziel unfähig zu machen, dich oder Verbündete zu stoßen oder zu ziehen (bis es sich abgetrocknet hat)."]),
   G("Verschmierend (Bleu)","+♥♥","Dein Panzer ist mit einer dicken Schleimschicht überzogen.",[V+"Markiere, um ein nahes Ziel unfähig zu machen, dich oder Verbündete zu greifen (bis es deine glibberigen Schleimreste abgewischt hat)."]),
   G("Griffling (Gere)","+♥♥","Nun, willst du mehr oder weniger Reibung? Ich kann beides!",[V+"Würfle Ergebnisse von 1 im Würfelpool neu, wenn du versuchst zu stoßen oder zu ziehen oder dich dagegen zu wehren, gestoßen oder gezogen zu werden."]),
   G("Vernebelt (Hazu)","+ •♥♥","Worte und Zähne, gleichermaßen verwirrt.",[V+"Du bist resistent gegen Beißen und Quasseln."]),
   G("Vergrößernd (Mushu)","+♥","Wenn dein Schleim das Licht genau richtig einfängt …",[V+"Wenn du bei einer Stöbern-Aktion eine Wendung würfelst, erhältst du zusätzlich zu allen anderen üblichen Belohnungen ein zur Situation passendes Bröckchen oder Krimskrams."]),
   G("Reaktiv (Riri)","+•♥","Warnzeichen gibt es aus gutem Grund.",[V+"Jede Gefahr, die dich stößt, zieht oder greift, erleidet unausweichlichen Brutzeln-Schaden."]),
   G("Lichtbrechend (Glisu)","+ •♥♥","Eine streuende Sorte Schleim.",[V+"Du bist resistent gegen Spüren und Jagen."]),
   G("Glitschig (Xori)","+♥","Tief am Boden, ein Meister darin, unbemerkt vorbeizuschlüpfen.",[V+"Verbrenne, um Schleichen für eine Aktion als Gigaschleichen zu behandeln."]),
   G("Gewürzt (Tibo)","+•♥♥","Zu stark für dich, was?",[V+"Ein Konflikt oder Triumph beim Benutzen von Brutzeln befreit dich sofort aus jedem Griff, zusätzlich zu allen anderen Wirkungen."]),
   G("Matschig (Oo)","+•♥","Du? Du könntest nicht gefährlich sein, schau nur, wie *niedlich* du bist!",[V+"Verringere den Härte-Abzug um 1, wenn du versuchst, die Meinung eines Sturkopfs zu ändern."]),
   G("Stromlinienförmig (Skree)","+♥","Perfekt, um spurlos durchs Wasser zu gleiten.",[V+"Verbrenne, um Schwimmen für eine Aktion als Gigaschwimmen zu behandeln."]),
   G("Toxisch (Zi)","+♥","Es ist genug für alle da.",[V+"Wähle eine Gefahrenart: *Krabbelig*, *Bestial*, *Schuppig*, *Schleimig*, *Gefiedert*, *Blättrig*, *Pilzig*, *Scheppernd* oder *Geisterhaft*. Behandle Brutzeln als Gigabrutzeln, wenn du Ziele mit dem von dir gewählten Schlüsselwort angreifst."])],
  117,
  "Wenn du dich nach befriedigendem Glibber umsiehst, kannst du 3 Nektar für einen Aspekt von der Seite links ausgeben. Nach dem Kauf kann Schleim mit bis zu zwei der unten stehenden Augmente verstärkt werden, die je 2 Nektar mehr kosten.");

 GR("fuehler","Fühler",118,"#b44c25","fuehler",
  "Wenn Augen dir nicht ganz reichen, kannst du dich immer für ausgefallenere Sinnesorgane entscheiden. Wenn du einen Satz Fühler als Aspekt nimmst, signalisierst du dem Rest des Tisches, dass du die Art Käfer sein willst, die Dinge bemerkt, die andere nicht mitbekommen.",
  "Wenn du am Ende keinen Aspekt von dieser Seite wählst, heißt das nicht, dass du gar keine Fühler hast! Antennen sind in der Käferwelt ein häufiger Anblick, deine bringen dir nur vielleicht keinen großen Vorteil – denk daran: Was auch immer du hast, es gibt dir keine mechanischen Boni, solange es nicht durch einen Aspekt dargestellt wird.",
  ["Fühler",["Weil du mit mehr als deinen Augen sehen willst","Weil du vielleicht keine Augen hast, aber die Wunder der Mysteriokalypse nicht verpassen willst","Weil sie irgendwie niedlich aussehen","Weil du es liebst, Leute aus der Ferne zu kitzeln"]],
  ["Welche Bedrohung oder Gelegenheit hast du gespürt, die andere in deiner kleinen Crew übersehen haben?","Nutzt du deine Fühler, um deinen persönlichen Stil zu unterstreichen, durch Haltung oder Schmuck?","Welchen Sinn hast du nicht, wünschst dir aber sehr, du hättest ihn?"],
  [A("Psytennen (Labo)","♥♥","Teil","Vergangenheit, Gegenwart und Zukunft sehen? Harter Job.",[V+"Einmal pro Szene kannst du deine Stimmung ins Negative ziehen, um entweder eine Schwäche, Resistenz oder Immunität einer Gefahr zu erkennen, die du sehen kannst."]),
   A("Schnurrbarttennen (Lega)","♥•♥","Teil","Luxuriös, das Suppensieb eines wahren Gourmets.",[V+"Wenn du ein Bröckchen erhalten würdest, kannst du markieren, um ein negatives Etikett davon zu entfernen (falls es einen hat)."]),
   A("Besentennen (Logi)","♥•♥","Teil","Die zweitälteste Form von Fühlern.",[V+"Wenn du Krimskrams erhalten würdest, kannst du markieren, um ein negatives Etikett davon zu entfernen (falls es einen hat)."]),
   A("Punktgenau-Tennen (Zio)","♥♥•♥","Teil","Es ist nicht so, dass du nie danebenliegst, sondern dass deine Feinde *annehmen*, du lägst nie daneben.",[V+"Ignoriere den Härte-Abzug, wenn du mit Jagen angreifst."]),
   A("Infratennen (Lifo)","♥♥♥♥","Teil","Warum deine Sinne auf die Welt des öden alten augenbasierten Sehens beschränken?",[V+"Du „siehst“ Wärme, so wie andere Farbe sehen.",V+"Verringere jeden von Gefahren verursachten Tarn-Abzug um 1."]),
   A("Schnurrhaare (Ludo)","♥♥♥♥","Teil","Eine Mischung aus Sinnesorgan und Modestatement, wedelnde Schnurrhaare, die danach verlangen, gepflegt zu werden.",[V+"Du „siehst“ durch Vibrationen, solange du Kontakt zum Boden hast.",V+"Markiere diese Leiste, wenn du von einer bodengebundenen Gefahr überrascht würdest, um die Wirkung zu ignorieren."]),
   A("Borstenmähne (Leo)","♥♥♥","Teil","Wolltest du schon immer eine kleine biologische Halskrause tragen? Nun, deine Gebete wurden erhört.",[V+"Du „siehst“ die Welt durch die Bewegung der Luft um dich herum.",V+"Markiere diese Leiste, wenn du von einer Gefahr aus der Luft überrascht würdest, um die Wirkung zu ignorieren."])],
  [G("Tanzend (Abra)","+♥","Es liegt Freude in der Geste.",[V+"Triumphe beim Benutzen von Anfreunden-Fertigkeiten ziehen deine Stimmung entweder ins Positive oder ins Negative (deine Wahl)."]),
   G("Abnehmbar (Oopsi)","+♥","Besser fliehen und einen anderen Tag leben.",[V+"Markiere diese Leiste, um zu verhindern, dass deine Bande während einer Reise überrascht wird."]),
   G("Dunggourmet (Kako)","+♥♥","Es gibt keinen Grund, Abfall verkommen zu lassen …",[V+"Deine Stimmung zieht ins Positive und du leerst eine Markierung auf einer beliebigen Herzleiste, wann immer du in der Wildnis tierischen … „Hinterlassenschaften“ … begegnest (ist das die höflichste Art, das zu sagen?)."]),
   G("Federig (Awa)","+•♥","Mehr weiche Empfindungen für deinen käferigen Gegenwert.",[V+"Behandle Desaster als Konflikte, wenn du auf Fallen und Umweltgefahren reagierst."]),
   G("Haarauslöser (OBERO)","+♥","Selbst die kleinste Störung ist für dich ein Leuchtfeuer.",[V+"Verbrenne, um Spüren für eine Aktion als Gigaspüren zu behandeln."]),
   G("Überhängend (Aba)","+♥♥♥","Eine natürlich entwickelte Schattenquelle.",[V+"Markiere, um dich für den Rest der Szene als im Dunkeln befindlich zu zählen, unabhängig von deiner Umgebung."]),
   G("Zitternd (Jali)","+ •♥♥","Vertrauen ist eine Ware, die schwer zu verdienen ist.",[V+"Du bist resistent gegen Klettern und Zähmen."]),
   G("Strahlend (Rai)","+♥♥♥","Hängt die Lampen auf, Kapitän!",[V+"Markiere, um dich für den Rest der Szene als im Licht befindlich zu zählen, unabhängig von deiner Umgebung."]),
   G("Rasiermesserscharf (Xei)","+♥","Deine Fühler haben dieses gefährliche Gefühl an sich.",[V+"Wähle eine Gefahrenart: *Krabbelig*, *Bestial*, *Schuppig*, *Schleimig*, *Gefiedert*, *Blättrig*, *Pilzig*, *Scheppernd* oder *Geisterhaft*. Behandle Schlitzen als Gigaschlitzen, wenn du Ziele mit dem von dir gewählten Schlüsselwort angreifst."]),
   G("Todsicher (Batra)","+♥♥♥","Sobald du etwas im Visier hast, lässt du es fast nie wieder los.",[V+"Markiere, um ein Desaster beim Angreifen als Konflikt zu behandeln."]),
   G("Zielerfassung (Zizo)","+♥♥","Auf frischer Tat ertappt.",[V+"Markiere, um dich für den Rest der Szene auf eine einzelne Gefahr, die du sehen kannst, aufzuschalten. Solange du aufgeschaltet bist, ignorierst du jeden Tempo-Abzug oder Tarn-Abzug, den diese Gefahr verursacht."]),
   G("Schirmartig (Dryo)","+•♥","Ausgestellt und geleitet, um den Käfer darunter trocken zu halten.",[V+"Du erleidest keinerlei Nachteile durch regnerisches oder stürmisches Wetter und ziehst stattdessen deine Stimmung ins Positive, wann immer diese Art Wetter beginnt."])],
  119,
  "Wenn du dich nach funkelnden Sensoren umsiehst, kannst du 3 Nektar für einen Aspekt von der Seite links ausgeben. Nach dem Kauf können Fühler mit bis zu zwei der unten stehenden Augmente verstärkt werden, die je 2 Nektar mehr kosten.");
})();
