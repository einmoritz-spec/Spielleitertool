/* Kapitel 2 – Dein Spielercharakter (S. 8–29). Abschnitte; Völker und Berufe (fig) stehen in nach-k2-voelker.js / nach-k2-berufe-*.js */
window.DB_NACH = window.DB_NACH || {};
DB_NACH.sc = {id:"sc", n:"2", t:"Dein Spielercharakter", p:8, abs:[
 {id:"einfuehrung", t:"Einführung", p:9, b:[
  "Der Abenteurer, den du in *Dragonbane* spielst, wird dein *Spielercharakter* genannt. Er ist dein Avatar, deine Augen und Ohren in der Spielwelt. Nimm deinen Charakter ernst und stelle ihn dar, als wäre er ein echter Mensch.",
  "Versuche dich wirklich in die Lage des Charakters zu versetzen. Das macht mehr Spaß. Gleichzeitig solltest du nicht versuchen, deinen Charakter vor jeder Gefahr zu bewahren. Der Zweck des Spiels ist es, eine spannende Geschichte zu erschaffen – dafür wirst du Risiken eingehen müssen.",
  "Im Lauf des Spiels verändert und entwickelt sich dein Spielercharakter. Seine Fertigkeiten lassen sich durch Erfahrung verbessern, aber du wirst vielleicht auch erleben, wie sich seine Persönlichkeit auf eine Weise entwickelt, die sich nicht in Zahlen messen lässt. Dann erwacht dein Charakter wirklich zum Leben.",
  "**Charakterbogen:** Um deinen Spielercharakter zu erschaffen, brauchst du einen Charakterbogen. Du kannst den Bogen am Ende dieses Buchs kopieren oder Charakterbögen von der *Dragonbane*-Webseite herunterladen.",
  {karte:{h:"Deinen Charakter erschaffen", p:9, b:[
    "Dieses Kapitel erklärt ausführlich, wie du deinen Spielercharakter erschaffst. Die Zusammenfassung unten gibt dir einen Überblick über den Ablauf. Nimm einen Charakterbogen und einen Bleistift und folge diesen Schritten:",
    {ol:["Wähle oder würfle dein **Volk**.","Notiere dein **Angeborenes Talent**.","Wähle oder würfle deinen **Beruf**.","Wähle oder würfle dein **Alter**.","Wähle oder würfle deinen **Namen**.","Würfle deine **Attribute**.","Berechne deine **abgeleiteten Werte**.","Wähle deine **geübten Fertigkeiten**.","Notiere dein **Heroisches Talent**.","Wähle oder würfle deine **Schwäche** (optional).","Wähle oder würfle deine **Ausrüstung**.","Wähle oder würfle dein **Memento** (optional).","Wähle oder würfle dein **Aussehen**."]}
  ]}},
  {h:"Volk", p:9},
  "Es gibt sechs spielbare Völker in *Dragonbane*: Mensch, Halbling, Zwerg, Elf, Ente und Wolfsmensch. Menschen sind das häufigste Volk, aber es steht dir frei, jedes beliebige zu wählen. Du kannst dein Volk auch mit der Tabelle unten auswürfeln. Alle Völker werden auf den folgenden Seiten kurz beschrieben.",
  "**Angeborenes Talent:** Jedes Volk hat ein *Angeborenes Talent*, das kein anderes Volk erlernen kann (Enten haben zwei). In den meisten Fällen kostet der Einsatz solcher Talente *Willenskraftpunkte* (WP). Notiere dein Angeborenes Talent im Abschnitt Talente & Zauber auf deinem Charakterbogen.",
  {tbl:{head:["W12","Volk"], rows:[["1–4","Mensch"],["5–7","Halbling"],["8–9","Zwerg"],["10","Elf"],["11","Ente"],["12","Wolfsmensch"]]}},
  {h:"Beruf", p:13},
  "Der nächste Schritt ist die Wahl eines Berufs für deinen Charakter.",
  "Alle Spielercharaktere sind Abenteurer, aber du hast vor Spielbeginn schon das eine oder andere gelernt. Die Wahl deines Berufs bestimmt vieles an deinem Charakter, vor allem deine Fertigkeiten – sechs deiner geübten Startfertigkeiten (S. 25) müssen aus denen gewählt werden, die für deinen Beruf aufgeführt sind. Dein Beruf bestimmt außerdem, mit welcher Ausrüstung du startest und welches Heroische Talent du erhältst.",
  "Es gibt zehn Berufe zur Auswahl, die alle auf den folgenden Seiten beschrieben werden. Du kannst einen Beruf frei wählen oder mit der Tabelle unten zufällig auswürfeln.",
  {tbl:{head:["W10","Beruf","W10","Beruf"], rows:[["1","Handwerker","6","Magier"],["2","Barde","7","Seefahrer"],["3","Krieger","8","Händler"],["4","Jäger","9","Gelehrter"],["5","Ritter","10","Dieb"]]}},
  {h:"Vorgefertigte Charaktere"},
  "Im *Dragonbane*-Grundspiel-Set findest du fünf vorgefertigte Spielercharaktere mit ausgefüllten Charakterbögen. Du kannst sie nutzen, um sofort loszulegen, oder einfach als Inspiration für deine eigenen Spielercharaktere.",
  {h:"Sprache"},
  "Alle Spielercharaktere in *Dragonbane* können eine gemeinsame Sprache sprechen, lesen und schreiben, die der Einfachheit halber die Gemeinsprache genannt wird. Die meisten Wesen, denen die Spielercharaktere begegnen, kennen diese Sprache, doch es kann Ausnahmen geben. Nichtmenschliche Völker haben oft eigene Sprachen, die nur wenige Menschen verstehen. Um andere Sprachen zu verstehen, wird die Fertigkeit §Fremdsprachen§ verwendet."
 ]},
 {id:"voelker", t:"Völker", p:9, fig:"voelker", b:[]},
 {id:"berufe", t:"Berufe", p:13, fig:"berufe", b:[]},
 {id:"alter", t:"Alter & Name", p:24, b:[
  {h:"Alter", p:24},
  "Der nächste Schritt ist die Wahl deines Alters. Viele Abenteurer verlassen ihr Dorf in jungen Jahren, manchmal werden aber auch ältere Personen gezwungen, in den Ruinen nach Schätzen zu suchen.",
  "Das Alter ist in drei Kategorien unterteilt: jung, erwachsen und alt. Du wählst dein Alter frei oder lässt den Würfel entscheiden.",
  "Höheres Alter bedeutet, dass du mit niedrigeren Attributen, aber höheren Fertigkeitswerten ins Spiel startest – siehe Tabelle unten. Die Änderungen der Attribute unten sind nicht kumulativ. Dein Alter in Jahren hängt von deinem Volk ab und hat keine spielmechanische Bedeutung.",
  {karte:{h:"Auswirkungen des Alters", p:24, b:[
    {tbl:{head:["W6","Alter","Geübte Fertigkeiten*","Attribute†"], rows:[["1–3","Jung","6+2","GEW und KON +1"],["4–5","Erwachsen","6+4","—"],["6","Alt","6+6","STÄ, GEW und KON –2, INT und WIL +1"]]}},
    "* Sechs geübte Fertigkeiten müssen aus deinem Beruf gewählt werden, die übrigen können frei gewählt werden. † Bis zu einem Maximum von 18."
  ]}},
  {h:"Name", p:24},
  "Sobald du Volk und Beruf gewählt hast, ist es Zeit, deinen Abenteurer zu benennen. Jedes Volk hat eine Liste mit sechs Namen, die für dieses Volk typisch sind. Wähle oder würfle einen dieser Namen oder denk dir selbst einen aus, wenn du das lieber möchtest.",
  "**Beinamen:** Es ist unter Abenteurern üblich, einen Beinamen anzunehmen, oft einen, der etwas über dein Aussehen, deine Persönlichkeit oder deine Vorgeschichte aussagt. Du kannst zu Spielbeginn einen Beinamen wählen oder später einen hinzufügen. Eine Reihe typischer Beinamen ist bei deinem Beruf aufgeführt."
 ]},
 {id:"attribute", t:"Attribute", p:24, b:[
  "Dein Abenteurer hat sechs Grundattribute, die deine grundlegenden körperlichen und geistigen Fähigkeiten auf einer Skala von 3 bis 18 angeben. Je höher der Wert, desto besser.",
  "**Startwerte:** Würfle 4W6 und entferne den schlechtesten Würfel; das ergibt einen Wert zwischen 3 und 18. Weise diesen Wert einem Attribut deiner Wahl zu. Wiederhole das fünfmal, bis jedem Attribut ein Wert zugewiesen ist. Du musst jeden Wert direkt beim Würfeln zuweisen, darfst aber am Ende zwei Werte vertauschen.",
  "Danach passt du deine Attribute entsprechend deinem Alter an.",
  "Beachte, dass kein Attribut unabhängig vom Alter über 18 steigen kann. Einmal zugewiesen, ändern sich deine Attribute im Spiel nur selten.",
  {ul:["**Stärke (STÄ):** Rohe Muskelkraft.","**Konstitution (KON):** Körperliche Fitness und Widerstandskraft.","**Gewandtheit (GEW):** Körperbeherrschung, Schnelligkeit und Feinmotorik.","**Intelligenz (INT):** Geistige Schärfe, Verstand und Denkvermögen.","**Willenskraft (WIL):** Selbstdisziplin und Konzentration.","**Charisma (CHA):** Persönlichkeit und Einfühlungsvermögen."]},
  {karte:{h:"Andere Methoden", p:24, b:["Es gibt viele andere Möglichkeiten, die Attribute der Spielercharaktere zu bestimmen, etwa alle zu würfeln und die Ergebnisse danach zu verteilen oder die Würfe zu einem großen Pool zu addieren und die Punkte frei zu verteilen. Solange sich die Gruppe einig ist, kannst du jede Methode nutzen, die du bevorzugst."]}}
 ]},
 {id:"werte", t:"Abgeleitete Werte", p:25, b:[
  "Aus deinen Attributen ergeben sich einige abgeleitete Werte, die auf verschiedene Weise verwendet werden.",
  {h:"Bewegung"},
  "Dieser Wert bestimmt, wie viele Meter du in einer Kampfrunde rennen kannst (S. 43). Er basiert auf deinem Volk und wird dann durch deine GEW verändert.",
  {h:"Schadensbonus"},
  "Dein Schadensbonus erhöht den Schaden deiner Angriffe. Du hast zwei getrennte Schadensboni – einen für STÄ-basierte und einen für GEW-basierte Waffen.",
  {h:"Trefferpunkte (TP)"},
  "Dieser Wert bestimmt, wie viel Schaden du verkraften kannst. Deine maximalen TP entsprechen deiner KON, können aber durch das Heroische Talent Robust erhöht werden. Mehr zum Schaden findest du in Kapitel 4.",
  {h:"Willenskraftpunkte (WP)"},
  "Willenskraftpunkte werden für Magie sowie für Angeborene und Heroische Talente verwendet. Deine maximalen WP entsprechen deiner WIL, können aber durch das Heroische Talent Konzentriert erhöht werden.",
  {karte:{h:"Bewegung", p:25, b:[{tbl:{head:["Volk","Bewegung"], rows:[["Mensch","10"],["Halbling","8"],["Zwerg","8"],["Elf","10"],["Ente","8"],["Wolfsmensch","12"]]}},{tbl:{head:["GEW","Veränderung"], rows:[["1–6","–4"],["7–9","–2"],["13–15","+2"],["16–18","+4"]]}}]}},
  {karte:{h:"Schadensbonus", p:25, b:[{tbl:{head:["STÄ/GEW","Schadensbonus"], rows:[["≤12","—"],["13–16","+W4"],["17+","+W6"]]}}]}}
 ]},
 {id:"fertigkeiten", t:"Fertigkeiten", p:25, b:[
  "Fertigkeiten stehen für Wissen und Fähigkeiten, die du während (oder vor) deinem Leben als Abenteurer erworben hast. Sie sind wichtig, denn sie bestimmen, wie wirksam du bestimmte Handlungen im Spiel ausführen kannst. Im Grundspiel gibt es dreißig Kernfertigkeiten, die alle im nächsten Kapitel ausführlich beschrieben werden. Deine Fertigkeiten werden durch den *Fertigkeitswert* auf einer Skala von 1 bis 18 gemessen. Je höher, desto besser.",
  "**Grundchance:** Jede Fertigkeit ist mit einem Attribut verbunden, das deine *Grundchance* in dieser Fertigkeit bestimmt. Das ist auf dem Charakterbogen und in Kapitel 3 angegeben. Die Grundchance ist ein „kostenloser“ Fertigkeitswert, den du automatisch erhältst. Siehe die Tabelle unten.",
  "**Startfertigkeitswerte:** Zusätzlich zu den Grundchancen startest du mit einer Anzahl *geübter Fertigkeiten* – acht, zehn oder zwölf, je nach Alter. Zu Spielbeginn entspricht dein Wert in einer geübten Fertigkeit dem *Doppelten* der Grundchance. Sechs deiner geübten Fertigkeiten müssen aus den bei deinem Beruf aufgeführten gewählt werden. Die übrigen (zwei, vier oder sechs, je nach Alter) werden frei gewählt. Du kannst deine Fertigkeitswerte im Spiel steigern.",
  "**Sekundäre Fertigkeiten:** Neben den Kernfertigkeiten gibt es *sekundäre Fertigkeiten*, etwa die Magieschulen. Im Grundspiel erhältst du in sekundären Fertigkeiten keine Grundchance, doch künftige Erweiterungen und Ergänzungen können dies ändern.",
  {karte:{h:"Grundchance", p:25, b:[{tbl:{head:["Attribut","Grundchance"], rows:[["1–5","3"],["6–8","4"],["9–12","5"],["13–15","6"],["16–18","7"]]}}]}}
 ]},
 {id:"talente", t:"Heroische Talente", p:26, b:[
  "Heroische Talente sind besondere Fähigkeiten, die dir im Spiel bestimmte Vorteile verschaffen. Eine Auswahl Heroischer Talente findest du im nächsten Kapitel; weitere können in künftigen Ergänzungen hinzukommen.",
  "Du startest mit einem Heroischen Talent, das dein Beruf bestimmt. Im Spiel kannst du neue Heroische Talente erwerben (S. 29). Beachte, dass einige Heroische Talente einen Mindestfertigkeitswert erfordern. Für dein Start-Talent gelten solche Voraussetzungen nicht.",
  "**Magier:** Spielst du einen Magier, erhältst du zu Spielbeginn kein Heroisches Talent – deine Magie gleicht diesen Nachteil aus! Du kannst im Spiel aber wie die anderen Berufe neue Heroische Talente erwerben.",
  {h:"Magie"},
  "Magie ist in verschiedene Schulen unterteilt, und jede Schule ist eine eigene Fertigkeit. Als frisch erschaffener Magier musst du eine Magieschule wählen, die dann eine deiner geübten Fertigkeiten wird (basierend auf INT).",
  "Du darfst drei Zauber der Kraftstufe 1 und drei Zaubertricks aus deiner Schule oder der Allgemeinen Magie wählen (S. 57).",
  "Im Spiel kannst du weitere Zauber und Magieschulen lernen. Mehr zur Magie findest du in Kapitel 5.",
  {stein:{h:"Schwäche", b:[
    "Dein Charakter ist ein fähiges Individuum, das für Ehre, Gold oder Abenteuer Leib und Leben riskiert.",
    "Doch auch ein Abenteurer hat eine Schwäche, eine Achillesferse, die ihn in Schwierigkeiten bringen kann.",
    "Du kannst würfeln oder aus der Tabelle unten wählen oder deine Schwäche frei festlegen.",
    "Deine Schwäche verleiht deinem Charakter Tiefe und Persönlichkeit und kann von der SL auch genutzt werden, um Herausforderungen für ihn zu schaffen. Spielst du entsprechend deiner Schwäche, erhältst du am Ende der Sitzung eine zusätzliche Steigerungsmarke (S. 29)."
  ]}},
  {tbl:{head:["W20","Schwäche","W20","Schwäche"], rows:[
    ["1","**Leichtgläubig.** Ich glaube alles, was andere mir erzählen.","11","**Eitel.** Ich helfe jedem, der mich lobt oder mir Komplimente macht."],
    ["2","**Gierig.** Ich will einen größeren Anteil an allen Schätzen.","12","**Waghalsig.** Ich gehe immer große Risiken ein, ohne an die Folgen zu denken."],
    ["3","**Dünnhäutig.** Ich lasse mir keine Provokation gefallen.","13","**Magiefurcht.** Magie ist eine böse Macht, und Magiern kann man nicht trauen."],
    ["4","**Tollkühn.** Ich gehe immer als Erster in die Gefahr.","14","**Wissensdurstig.** Die Jagd nach Wissen ist mir wichtiger als meine Freunde."],
    ["5","**Zaghaft.** Ich bleibe immer hinten in der Gruppe.","15","**Kind der Wildnis.** Ich schlafe nie in Gebäuden."],
    ["6","**Monsterjäger.** Alle Monster sind böse und müssen erschlagen werden.","16","**Prahlerisch.** Ich übertreibe meine Leistungen immer."],
    ["7","**Intolerant.** Nachtvölker wie Orks und Goblins sind böse und müssen bekämpft werden.","17","**Gewalttätig.** Ich greife zu Gewalt, um jedes Hindernis zu überwinden."],
    ["8","**Träge.** Ich nutze jede Gelegenheit zum Ausruhen.","18","**Herrisch.** Ich sage anderen immer, was sie tun sollen."],
    ["9","**Gefräßig.** Ich nutze jede Gelegenheit, etwas Leckeres zu essen.","19","**Pessimist.** Ich glaube immer, dass alles schlecht ausgehen wird."],
    ["10","**Kleptomane.** Ich kann nicht anders, als Wertsachen zu stehlen.","20","**Hochnäsig.** Ich blicke auf jeden herab, dem ich begegne."]
  ]}},
  {stein:{h:"Alternative Talente", b:["Hast du das Gefühl, dass das für deinen Beruf aufgeführte Heroische Talent wirklich nicht zu dem Charakter passt, den du erschaffen möchtest, kann die SL dir erlauben, ein anderes Start-Talent zu wählen."]}}
 ]},
 {id:"ausruestung", t:"Ausrüstung", p:27, b:[
  "Wenn du auf Abenteuer ziehst, brauchst du die richtige Ausrüstung. Du musst alle Gegenstände, die du bei dir trägst, auf deinem Charakterbogen notieren. Waffen *in Griffweite* sowie Rüstung, Helm und Schild, die du trägst, werden in den jeweiligen Feldern eingetragen, alle anderen Gegenstände unter Inventar.",
  "Schreibe einen Gegenstand pro Zeile auf. Steht er nicht auf deinem Bogen, hast du ihn nicht dabei. Listen von Waffen und anderer Ausrüstung findest du auf S. 73–81.",
  "**Startausrüstung:** Dein Beruf bestimmt, aus welcher Ausrüstung du zu Spielbeginn wählen kannst. Du kannst eines der drei bei deinem Beruf aufgeführten Gegenstandssets auswürfeln oder auswählen. Wenn du möchtest, darfst du zurückgehen und deine geübten Fertigkeiten an deine Ausrüstung anpassen. Du kannst außerdem ein Memento besitzen (unten). Zusätzlich hast du einfache Kleidung, die nicht notiert werden muss.",
  {karte:{h:"Münzen", p:27, b:["Geldgeschäfte werden im Allgemeinen mit Silbermünzen abgewickelt. Kupfermünzen werden für kleinere Geschäfte verwendet und Gold für größere. Zehn Kupfermünzen entsprechen einem Silber, zehn Silbermünzen einem Gold. Die Münzen, die du bei der Charaktererschaffung erhältst, kannst du zum Kauf zusätzlicher Startausrüstung nutzen."]}},
  {stein:{h:"Memento", b:[
    "Zusätzlich zu deiner übrigen Ausrüstung kannst du ein Memento besitzen – einen Gegenstand von großem sentimentalem Wert, den du immer bei dir trägst. Wähle etwas Passendes oder würfle auf der Tabelle unten.",
    "Ein Memento ist immer ein winziger Gegenstand ohne praktischen Nutzen, doch einmal pro Spielsitzung kannst du dein Memento nutzen, um dich bei einer Kurzen Rast von einem zusätzlichen Zustand zu erholen (S. 52).",
    "Verlierst du dein Memento, darfst du am Ende der Spielsitzung einen auf deinen Abenteuern gefundenen Gegenstand als neues Memento wählen."
  ]}},
  {tbl:{head:["W20","Memento","W20","Memento"], rows:[
    ["1","Deine treuen alten Schuhe","11","Ein Reißzahn, den du als Trophäe von einer Bestie genommen hast"],
    ["2","Ein schlichtes Silbermedaillon","12","Ein paar einfache Würfel aus Knochen"],
    ["3","Ein Brief eines alten Freundes oder Verwandten","13","Ein Medaillon mit einer Haarlocke"],
    ["4","Ein zerlesenes altes Tagebuch","14","Ein verzierter Schlüssel"],
    ["5","Ein Armband, das in deiner Familie weitergegeben wurde","15","Eine handgezeichnete Karte, die du geerbt hast"],
    ["6","Eine Holzfigur aus deiner Kindheit","16","Ein Ring mit einer Inschrift"],
    ["7","Ein seltsam geformter Stein","17","Eine Knochenpfeife"],
    ["8","Eine Kupfermünze aus einem Schatz, den deine Mutter oder dein Vater suchte","18","Der zerschlissene alte Hut deiner Mutter oder deines Vaters"],
    ["9","Ein alter Zinnkrug","19","Eine Greifenfeder"],
    ["10","Ein Horn, das du als Trophäe von einem Monster genommen hast","20","Eine wunderschön geschnitzte Pfeife"]
  ]}}
 ]},
 {id:"traglast", t:"Traglast & Aussehen", p:28, b:[
  {h:"Traglast", p:28},
  "Du kannst ohne Schwierigkeiten so viele Gegenstände in deinem Inventar tragen, wie deine halbe STÄ (aufgerundet) beträgt. Nur die im Inventarfeld notierten Gegenstände zählen zur Traglast.",
  "**Waffen in Griffweite:** Du kannst bis zu drei Waffen *in Griffweite* haben, das heißt, sie hängen am Gürtel oder sind anderweitig im Kampf sofort einsatzbereit. Waffen in Griffweite werden auf dem Charakterbogen unter Waffen notiert und zählen nicht zur Traglast. Schilde zählen als Waffen und werden ebenfalls hier eingetragen.",
  "**Helm & Rüstung:** Helm und Rüstung, die du am Körper trägst, werden im jeweiligen Abschnitt notiert und zählen nicht zur Traglast.",
  "**Essen:** Bis zu vier Essensrationen zählen als ein Gegenstand für die Traglast. Notiere die Zahl deiner verbleibenden Rationen immer in deinem Inventar.",
  "**Fackeln & Laternen:** Eine Fackel, Lampe oder Laterne ist ein Gegenstand. Ihr Feuer kann ausgehen (S. 52). Lampen und Laternen können mit Lampenöl nachgefüllt werden.",
  "**Pfeile & Schleudersteine:** Du musst nicht jeden Pfeil zählen, den du bei dir trägst. Stattdessen zählt jeder Köcher Pfeile als ein einziger Gegenstand. Solange du den Köcher hast, kannst du deine Waffe nutzen. Schleudersteine müssen gar nicht notiert werden – man geht davon aus, dass du genug davon hast.",
  "**Rucksack:** Ein Rucksack erhöht deine Tragekraft um 2. Er zählt nicht zur Traglast, aber du kannst immer nur einen Rucksack gleichzeitig tragen.",
  {h:"Aussehen", p:28},
  "Auf dem Charakterbogen kannst du etwas über das Aussehen deines Spielercharakters notieren. Es muss keine ausführliche Beschreibung sein – ein oder ein paar auffällige Merkmale genügen. Wähle selbst oder würfle ein- oder mehrmals auf der folgenden Tabelle.",
  {tbl:{head:["W20","Aussehen","W20","Aussehen"], rows:[
    ["1","Hässliche Narbe quer über der Wange","11","Übler Körpergeruch"],
    ["2","Seltsame Kopfbedeckung","12","Prächtige Frisur"],
    ["3","Ungewöhnlich blass und teigig","13","Hinkt"],
    ["4","Ein ständiges Lächeln auf den Lippen","14","Schmutzig"],
    ["5","Eisiger, durchdringender Blick","15","Ehrliche blaue Augen"],
    ["6","Ein bisschen Extragewicht um die Mitte","16","Silberzahn"],
    ["7","Dünn und sehnig","17","Stark parfümiert"],
    ["8","Ungewöhnlich viel Körperbehaarung (je nach Volk)","18","Verschiedenfarbige Augen"],
    ["9","Kahlköpfig (je nach Volk)","19","Zischende Stimme"],
    ["10","Auffälliges Tattoo","20","Wettergegerbtes Gesicht"]
  ]}},
  {h:"Schwere Gegenstände"},
  "Wirklich schwere Gegenstände zählen als zwei, drei oder noch mehr normale Gegenstände für die Traglast. Sie sind mit Gewicht 2, 3, 4 und so weiter angegeben. In deinem Inventar belegen schwere Gegenstände so viele Zeilen, wie ihr Gewicht beträgt. Ist kein Gewicht angegeben, beträgt es immer 1.",
  {h:"Kleinkram"},
  "Kleine und leichte Gegenstände, die sich in einer geschlossenen Faust verbergen lassen, heißen *Kleinkram*. Solche Gegenstände wirken sich gar nicht auf deine Traglast aus. Kleinkram wird in einem eigenen Abschnitt des Charakterbogens notiert und belegt keinen Platz in deinem Inventar.",
  "**Münzen:** Einzelne Münzen zählen als Kleinkram und wirken sich nicht auf deine Traglast aus, solange es weniger als 100 sind. 100–199 Münzen zählen als ein Gegenstand, 200–299 als zwei und so weiter.",
  {h:"Überlastet"},
  "Du kannst vorübergehend mehr tragen, als deine normale Traglastgrenze erlaubt. In diesem Fall musst du einen Wurf auf STÄ ablegen, wann immer du dich in einer Kampfrunde bewegen oder einen Tagesabschnitt lang reisen willst. Misslingt der Wurf, musst du entweder fallen lassen, was du trägst, oder stehen bleiben.",
  "**Andere tragen:** Wenn du eine andere Person trägst, giltst du automatisch als überlastet und kannst nicht im Kampf kämpfen.",
  {h:"Reittiere & Fahrzeuge"},
  "Hast du ein Pferd oder ein anderes Reittier, kann das Tier deine Ausrüstung für dich tragen. Wagen und Boote können noch schwerere Lasten befördern. Du findest sie in den Ausrüstungslisten auf S. 81."
 ]},
 {id:"erfahrung", t:"Erfahrung", p:29, b:[
  "Das Leben als Abenteurer bringt viele Herausforderungen mit sich, und wenn du überlebst, wirst du dich sicher verändern und vielleicht sogar das eine oder andere dazulernen.",
  "**Steigerungsmarken:** Hast du beim Einsatz einer Fertigkeit einen Drachen oder Dämon gewürfelt (S. 31), hake das Kästchen neben dieser Fertigkeit ab. Am Ende der Spielsitzung stellt dir die SL die folgenden Fragen zur gerade beendeten Sitzung. Für jede Frage, die du mit „Ja“ beantworten und begründen kannst, darfst du eine weitere Steigerungsmarke neben einer noch nicht markierten Fertigkeit deiner Wahl setzen. Die SL hat das letzte Wort, sollte aber großzügig sein.",
  {ul:["Hast du an der Spielsitzung teilgenommen?","Hast du einen neuen Ort erkundet?","Hast du einen oder mehrere gefährliche Gegner besiegt?","Hast du ein Hindernis ohne Gewalt überwunden?","Hast du deiner Schwäche nachgegeben (optionale Regel)?"]},
  "**Steigerungswürfe:** Nachdem du deine Marken gesetzt hast, würfle für jede einen W20 – *übersteigt* das Ergebnis deinen aktuellen Fertigkeitswert, steigt dieser um eins, bis maximal 18. Nach deinen Steigerungswürfen löschst du die Marken und beginnst in der nächsten Spielsitzung von vorn.",
  "**Lehrer:** Ein Tagesabschnitt intensiven Trainings bei einem Lehrer, dessen Fertigkeitswert 15 oder höher ist und über deinem eigenen liegt, gibt dir einen zusätzlichen Steigerungswurf für die betreffende Fertigkeit. Lege den Wurf sofort ab, ohne auf das Ende der Sitzung zu warten. Ein Lehrer kann einen Fertigkeitswert aber nur um *eins* erhöhen – danach musst du die Fertigkeit durch Erfahrung verbessern, bevor du wieder Hilfe von einem Lehrer erhalten kannst. Lehrer, besonders solche mit hohen Fertigkeitswerten, sind meist sehr teuer.",
  "**Magie:** Eine Magieschule, die du bereits beherrschst, kann wie jede andere Fertigkeit verbessert werden. Neue Zauber und neue Magieschulen zu lernen erfordert jedoch besondere Ausbildung. Mehr dazu findest du in Kapitel 5.",
  "**Heroische Talente:** Du kannst im Spiel auf zwei Arten neue Heroische Talente erwerben:",
  {ul:["Wenn du einen Fertigkeitswert auf 18 steigerst, erhältst du sofort ein neues Heroisches Talent deiner Wahl. Sinkt der Fertigkeitswert aus irgendeinem Grund unter 18, behältst du das Heroische Talent und erhältst sogar ein neues, wenn der Fertigkeitswert wieder auf 18 steigt.","Nach einer großen heldenhaften Tat können die SL oder das Abenteuer dich mit einem Heroischen Talent belohnen. Das sollte ein seltenes Ereignis sein, nie mehr als einmal pro Abenteuer von Standardlänge."]},
  "Um ein neues Heroisches Talent zu erhalten, musst du dessen Fertigkeitsvoraussetzung erfüllen.",
  {stein:{h:"Schwäche überwinden", b:[
    "Hast du dich während der Sitzung eindeutig entgegen deiner Schwäche verhalten, erhältst du zwei Steigerungsmarken (statt einer Marke fürs Nachgeben). Du hast deine Schwäche nun außerdem überwunden und musst sie streichen. Danach musst du eine ganze Sitzung ohne Schwäche spielen.",
    "Danach kannst du eine neue Schwäche wählen, vorzugsweise eine, die auf etwas beruht, das im Spiel geschehen ist."
  ]}}
 ]}
]};
