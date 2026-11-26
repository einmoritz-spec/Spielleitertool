/* Playwall › F (S. 216–220) */
var TA_PWT = window.TA_PWT || (window.TA_PWT = {});

TA_PWT.F1 = {t:"Ausblenden", s:216, b:[
 {t:"faehig", h:"Ausblenden", x:"Du kannst nun jederzeit eine Sofortbildkamera hervorholen. Immer wenn du damit ein Objekt oder Bauwerk fotografierst, würfle **Subtilität**.",
  erg:[
   ["ok", "**Bei Erfolg** verschwindet das Motiv deines Fotos allmählich, während es auf dem Sofortbildfilm erscheint. Es erlebt keinen Zeitablauf, bis du es an die Stelle zurückbringst, die es verlassen hat, indem du das Bild entzweireißt. Der leere Platz kann auffällig sein und Lose Enden erzeugen."],
   ["plus", "**Bei Triszendenz** darfst du mit dieser Fähigkeit auch ein Lebewesen auf dem Foto anvisieren."],
   ["nein", "**Bei Fehlschlag** bist du stattdessen im Foto gefangen. Anders als andere Ziele kannst du aus dem Bild heraus sprechen, die Welt beobachten und deine Anomalie-Fähigkeiten einsetzen. Am Ende des Einsatzes wirst du mit etwas Unterstützung aus dem Büro aus dem Foto geholt."]
  ]}
]};

TA_PWT.F2 = {t:"Familienunternehmen", s:217, b:[
 "Du hast zwei Versionen von dir gefunden, die dir nahe genug stehen, um praktisch eine telepathische Verbindung zu teilen. Erschaffe zwei Versionen von dir (wie bei Dein bestes Ich), die nun in dieser Realität bleiben können, ähnlich wie bei Dauerhafte Versetzung. Sie erzeugen dadurch, dass sie bleiben, keine Lose Enden, und du behältst die Kontrolle über sie.",
 "Bei jedem Einsatz darfst du als alle drei Versionen handeln. Es kann kleine Unterschiede zwischen euch geben, aber ihr seid euch ähnlich genug, um in der Regel dasselbe zu denken und einander ergänzende Entscheidungen zu treffen. Alle drei Versionen teilen sich deine Qualitätssicherungen.",
 "Jedes Mal, wenn du am Tisch mit dir selbst sprichst, erzeugst du 1 Chaos."
]};

TA_PWT.F3 = {t:"Schon alt?", s:217, b:[
 {t:"faehig", h:"Schon alt?", x:"Die Zeit eines jeden ist begrenzt. Erinnere jemanden an etwas Nostalgisches aus seiner Vergangenheit und würfle **Doppelzüngigkeit**.",
  erg:[
   ["ok", "**Bei Erfolg** fixiert sich das Ziel auf die Zahl der Jahre, die seit dem Angesprochenen vergangen sind. Du nutzt diese Fixierung, um Geist und Körper des Ziels um die gleiche Zahl von Jahren vorzudrehen. Bis dieser Effekt endet, ist es die Person, die es zu jener Zeit sein wird, und kann aus dieser Perspektive kommunizieren und Fragen beantworten. Es hält seine gegenwärtige Lage für eine besonders eindrückliche Erinnerung. Es erinnert sich womöglich an etwas, das du ihm antun wirst. Künftige Erinnerungen an die Welt außerhalb der eigenen Erfahrung sind sehr verschwommen.\nWürde dieser Effekt das Ziel über seine natürliche Lebensspanne hinaus altern lassen, altert er es stattdessen auf die letzte Stunde seiner natürlichen Lebensspanne.\nDieser Effekt endet nach so vielen Minuten, wie Jahre vorgedreht wurden, oder wenn du erneut würfelst, je nachdem, was zuerst eintritt."],
   ["plus", "**Bei Triszendenz** darfst du dem Ziel eine Leidenschaft oder Gewohnheit einpflanzen. Solange es unter diesem Effekt steht, erhält es die Vor- oder Nachteile, die sich daraus ergeben, dass es diese Leidenschaft oder Gewohnheit regelmäßig über die vorgedrehten Jahre ausgeübt hat."],
   ["nein", "**Bei Fehlschlag** hast du den Regler in die falsche Richtung gedreht – Geist und Körper des Ziels werden zurückgespult. Es wird zu der Person, die es war, als es das nostalgische Thema zum ersten Mal erlebte, und braucht so viele Tage, wie Jahre verschoben wurden (mindestens einen), um wieder normal zu werden."]
  ],
  f:"Ich lasse keine Gelegenheit aus, …", a:[["Verbindungen zu knüpfen.", "A4"], ["Zu zeigen, dass es mir wichtig ist.", "T4"]]}
]};

TA_PWT.F4 = {t:"Ende", s:217, b:[
 {t:"faehig", h:"Ende", x:"Jedes Ende ist ein Ausgang, und es gibt kein Tempolimit. Wenn du möchtest, dass etwas zu Ende geht *(ein Gespräch, eine Beziehung, ein Leben)*, würfle **Initiative**.",
  erg:[
   ["ok", "**Bei Erfolg** wähle eine Beschreibung:\n– Happy End\n– Bittersüßes Ende\n– Tragödie\nDas Ziel endet sofort auf die beschriebene Weise, aus Sicht des Ziels. Der GM entscheidet die Einzelheiten."],
   ["plus", "**Bei jeder dritten {3}** wähle ein zusätzliches Detail:\n**Verzögert:** Dieses Ende tritt ein, wenn du fort bist, und wird nicht mit dir in Verbindung gebracht.\n**Überzogen:** Dieses Ende schwelgt in seiner Wahrheit. Tragödien werden qualvoll, Happy Ends wahrhaft ausgelassen. Beides geschieht über einen längeren Zeitraum.\n**Bedeutsam:** Dieses Ende verbiegt sich so, dass es bei den Beteiligten und bei allen, die es sehen, einen bleibenden Eindruck hinterlässt.\n**Cliffhanger:** Dieses Ende weckt die Neugier aller Zeugen und kann eine Legende um sich entstehen lassen."],
   ["nein", "**Bei Fehlschlag** endet stattdessen etwas von dir. Der GM sagt dir, was es ist und wie es endet."]
  ]}
]};

TA_PWT.F5 = {t:"Fleischverdichtung", s:218, b:[
 {t:"faehig", h:"Fleischverdichtung", x:"Dein Körper kann Dichte und Bau verändern, ohne die Form zu wechseln, und so eine Panzerschicht bilden. Wann immer du Ich deck dich! einsetzt, gilt die Wirkung „Bei jeder dritten {3}“ stattdessen als „für jede weitere {3}“.",
  erg:[],
  b:["Außerdem kannst du von Folgendem keinen Schaden nehmen:",
   {t:"liste", x:["Allem, was zunächst 1 Schaden verursachen würde", "Extremer Hitze", "Extremer Kälte", "Unbeweglichen scharfen Gegenständen (wie Bodenstacheln)", "Handgehaltenen stumpfen Gegenständen"]}],
  f:"Wenn ich nicht mehr da bin, …", a:[["Macht mich zu einer Statue.", "M2"], ["Begrabt mich mit meinen Habseligkeiten.", "F6"]]}
]};

TA_PWT.F6 = {t:"Fleischdomäne", s:218, b:[
 {t:"faehig", h:"Fleischdomäne", x:"Du bist ganz und gar du selbst. Zerfließe im Boden und würfle **Subtilität**.",
  erg:[
   ["ok", "**Bei Erfolg** wirst du alles in einem zimmergroßen Raum um dich herum. Du kannst von jeder Stelle in diesem Raum aus sehen, hören, fühlen, sprechen und einen Körper bilden. Du kennst ihn mit allen Einzelheiten auf das Genaueste. Würde irgendwo in diesem Raum körperlicher Schaden zugefügt, kannst du entscheiden, ihn stattdessen zu erhalten. Sofern du nicht selbst Aufmerksamkeit auf dich lenkst, Schaden für jemand anderen aufnimmst oder sie wissen, dass sie nach dem fast unmerklichen Flimmern auf allem suchen müssen, kannst du nicht entdeckt werden."],
   ["plus", "**Bei jeder dritten {3}** erhältst du {3} Chaos, die du in der Chaos-Effekt-Tabelle ausgeben kannst (frag den GM danach), als wärst du eine Anomalie, die etwas innerhalb deines neuen Selbst anvisiert. Wird sie so eingesetzt, ändert sich der Eintrag Ausdehnen auf folgenden Text:\n*Deine Fleischdomäne wächst um etwa die Größe eines weiteren Raumes.*\nAußerdem nimmst du jedes Mal, wenn im Raum Chaos entsteht, 1/{3} davon, abgerundet, bevor es den GM erreicht. Du darfst es wie oben beschrieben für Chaos-Effekte ausgeben."],
   ["plus", "**Bei Triszendenz** wandert deine Fleischdomäne mit dir. Für den Rest des Einsatzes kann sich deine Fleischdomäne mit derselben Geschwindigkeit fortbewegen, mit der du dich normalerweise bewegst. Der Effekt Ausdehnen endet jedoch, wenn du dich bewegst, und muss an einem neuen Ort erneut eingesetzt werden."],
   ["nein", "**Bei Fehlschlag** wächst dein Körper auf groteske und offensichtliche Weise über den Raum hinaus und dehnt dich dabei zu weit und zu schnell. Du stirbst und hinterlässt eine lebende Fleischmasse, die alles in der Umgebung bedeckt."]
  ]}
]};

TA_PWT.F7 = {t:"Fokusgruppe", s:218, b:[
 "Immer wenn du Dein bestes Ich einsetzt, darfst du zusätzlich 1 alternative Version jedes Mitglieds deines Außenteams finden. Kündige deine Absicht dazu vor deinem Wurf an; dieselben Triszendenz- und Fehlschlageffekte gelten für sie. Alle Fähigkeiten, die Dein bestes Ich betreffen, betreffen auch die Ichs deines Außenteams, die mit dieser Fähigkeit geholt wurden. Hat dein Außenteam weniger als {3} Mitglieder, kannst du 2 verschiedene Versionen des anderen Mitglieds oder deiner selbst erschaffen."
]};

TA_PWT.F8 = {t:"Falten", s:218, b:[
 {t:"sp", x:[
  ["Wenn du schon einmal irgendwo warst, ist es immer ganz nah. Wann immer du dich bewegst, kannst du an jedem anderen Ort ankommen, an dem du schon einmal warst, sobald du anhältst. Das schließt alle Arten der Bewegung ein: Laufen, Fallen, Fahren.",
   "Niemand sonst kommt mit. Du hast keine genaue Kontrolle darüber, wo du auftauchst, kommst aber vollständig und für alle Anwesenden offensichtlich an und hast keine Möglichkeit, vorher zu sehen, was dort ist.",
   "Hat sich der Ort dramatisch verändert und du bewegst dich an eine Stelle, die jetzt ein Hindernis enthält, tauchst du innerhalb dieses Hindernisses auf und stirbst womöglich dadurch."],
  ["Außerdem erhältst du folgende Effekte:",
   {t:"liste", x:["Heften kann nun jede Kante anvisieren, an der du jemals in der Nähe warst, sogar durch Hindernisse und über große Entfernungen.", "Die Wirkung „Bei Erfolg“ von Ich kenne eine Abkürzung! wird für dich jederzeit automatisch ausgelöst, ohne dass du würfeln musst. Wenn du würfelst, zählen alle {3}en dafür, weitere Personen mitzunehmen."]}]
 ]}
]};

TA_PWT.F9 = {t:"Erzwungene Perspektive", s:219, b:[
 {t:"faehig", h:"Erzwungene Perspektive", x:"Gegenstände sind näher, als sie erscheinen. Greife einen beliebigen unbelebten Gegenstand, den du sehen kannst, und würfle **Aufmerksamkeit**.",
  erg:[
   ["ok", "**Bei Erfolg** behält der Gegenstand die Größe, in der er aus deiner Perspektive erschien. Alles in ihm und jeder darin behält ebenfalls diese neue Größe. Der Gegenstand behält seine ursprüngliche Dichte, sodass ein Wolkenkratzer, den du auf Taschengröße schrumpfst, nur wenige Pfund wiegen kann.\nPersonen in einem auf diese Weise veränderten Gegenstand erleben die Welt, als wäre der Gegenstand an seinem Platz geblieben. Sie können ihn nicht verlassen, und die Welt um und außerhalb des Gegenstands erscheint ihnen als konturloser Farbschleier. Dieser Effekt hält an, bis du den Gegenstand zurücklegst, er zehn Minuten lang nicht in deinem Besitz war oder du bewusstlos wirst, je nachdem, was zuerst eintritt. Dann kehren der Gegenstand und alle darin an ihren ursprünglichen Ort zurück."],
   ["plus", "**Bei Triszendenz** kannst du die neue Größe des Gegenstands dauerhaft machen; er kehrt nur dann an seinen ursprünglichen Ort und in seine ursprüngliche Größe zurück, wenn du dich dafür entscheidest."],
   ["nein", "**Bei Fehlschlag** erzielst du die Wirkung eines Erfolgs, nur dass der Gegenstand zufällig in seine ursprüngliche Größe zurückkehrt, während er sich bei dir, an deinem Ort, befindet, und seinen ursprünglichen Platz leer zurücklässt."]
  ],
  f:"Wenn ich mit jemandem streite, …", a:[["Ziele ich auf seine Schwachstellen.", "B1"], ["Bemühe ich mich, seinen Standpunkt zu verstehen.", "A10"]]}
]};

TA_PWT.F10 = {t:"Wahrsager", s:219, b:[
 {t:"sp", x:[
  [{t:"faehig", h:"Wahrsager", x:"Die Zukunft ist, was wir uns vorstellen. Erlange die ungeteilte Aufmerksamkeit eines Menschen und würfle **Beharrlichkeit**.",
    erg:[
     ["ok", "**Bei Erfolg** erschaffst du einen bindenden Fluch über das Ziel, der, wie unwahrscheinlich auch immer, eintreten wird. Wähle eine Option aus einer der Listen Vorzeichen, Folgen oder Bedingungen, und der GM wählt Optionen aus jeder der beiden anderen. Du darfst eine davon frei und mit beliebigem Wortlaut erschaffen; tust du das, darf der GM dasselbe für die anderen tun.\nDas Vorzeichen bestimmt, wann die Folge eintritt, ist aber nicht der einzig mögliche Weg zur Folge. Die Bedingung ändert die Einzelheiten deines Fluchs. Je unwahrscheinlicher der Fluch, desto eher erzeugt er Lose Enden."],
     ["plus", "**Bei jeder dritten {3}** darfst du anstelle des GM eine Option aus einer zusätzlichen Spalte wählen."],
     ["plus", "**Bei Triszendenz** darfst du ein völlig eigenes Vorzeichen, eine eigene Folge und eine eigene Bedingung erschaffen und sie auf beliebig viele Personen innerhalb des Gebiets deiner Zweigstelle anwenden."],
     ["nein", "**Bei Fehlschlag** wirst du stattdessen ständig von Anzeichen des Vorzeichens heimgesucht *(die Schritte aller werden verstärkt, der Mond zieht über die Sonne, sobald du aufblickst, Leute bieten dir ständig Sandwiches an usw.)*, sodass du bei allen Würfen unter Burnout leidest, bis das ursprüngliche Ziel eine Folge nach Wahl des GM erlebt."]
    ]}],
  ["**Vorzeichen:**",
   {t:"liste", x:["Wenn du deinen hundertsten Schritt machst", "Wenn der Mond die Sonne kreuzt", "Wenn du ein Sandwich annimmst", "Wenn ich den Satz „[Satz einfügen]“ sage", "Wenn der Schüler zum Lehrer wird", "Wenn Bindungen nicht mehr binden"]},
   "**Folgen:**",
   {t:"liste", x:["Du wirst sterben", "Du wirst zu mir zurückkehren", "Du wirst wieder leben", "Du wirst verraten werden", "Du wirst mir [einen von dir bestimmten Gegenstand] übergeben", "Du wirst die Wahrheit über [ein von dir bestimmtes Thema] gestehen"]},
   "**Bedingungen:**",
   {t:"liste", x:["Die Folge kann erst eintreten, nachdem sich das Vorzeichen erfüllt hat.", "Diese Vorhersage gilt für ein anderes Ziel in der Nähe.", "Das Ziel glaubt deine Vorhersage sofort nicht und ignoriert sie oder tut sie als Scherz ab.", "Das Vorzeichen muss {3}-mal eintreten, bevor sich die Folge erfüllt.", "Niemand, der von dem Fluch weiß, darf offen darüber sprechen, auch du nicht.", "Ein Nomen im Vorzeichen wird durch [ein anderes von dir bestimmtes Nomen] ersetzt."]}]
 ]}
]};

TA_PWT.F11 = {t:"Gratis-Immobilien", s:220, b:[
 {t:"faehig", h:"Gratis-Immobilien", x:"Ist jemand tot, kannst du mit ihm sprechen. Ist etwas abgerissen, kannst du es erkunden. Besuche den letzten Ort, an dem etwas oder jemand existiert hat, und würfle **Empathie**.",
  erg:[
   ["ok", "**Bei Erfolg** wähle eines der Folgenden:\n– Hast du eine Person anvisiert, kannst du sie befragen. Du darfst ihr eine Frage stellen.\n– Du befindest dich an dem Ort oder in dem Gebäude, das einst hier stand. Du kannst dabei Menschen mitnehmen. Die seit der Zerstörung vergangene Zeit spielt keine Rolle. Wurde etwas nur teilweise zerstört, kann nur der zerstörte Teil mit dieser Fähigkeit besucht werden. Nichts kann von diesem Ort mitgenommen oder entfernt werden."],
   ["plus", "**Für jede weitere {3}** darfst du eines wählen:\n– Einer Person eine weitere Frage stellen.\n– Einen Gegenstand vom zerstörten Ort mitnehmen, wenn du gehst."],
   ["nein", "**Bei Fehlschlag** lädst du stattdessen die anvisierte Person oder den anvisierten Gegenstand ein, deinen Platz einzunehmen. Eine zurückkehrende Person übernimmt deinen Körper und formt ihn so um, dass er aussieht wie sie selbst. Ein Gegenstand oder Ort dehnt sich auf seine volle Größe aus, mit dir im Mittelpunkt. So oder so wirst du sofort getötet und musst in der Agency wiederbelebt werden."]
  ]}
]};
