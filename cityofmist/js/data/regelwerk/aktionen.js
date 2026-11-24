rwAdd("aktionen", [
  { name:"Mehr Informationen einholen", p:172, body:[
    "Als Spieler:in kannst du jederzeit mehr Informationen über eine Szene erfragen, um sie dir besser vorstellen zu können. Je nachdem, was die SL vorbereitet hat oder was sie in diesem Augenblick improvisiert, teilt sie dir Dinge mit, die für deinen Charakter leicht zu erkennen sind, oder die er bereits in Erfahrung gebracht hat.",
    {dlg:[
      ["Spieler:in","Regnet es?"],
      ["SL","Ja."],
      ["Spieler:in","Wie lang ist diese Gasse?"],
      ["SL","Ungefähr hundert Meter."],
      ["Spieler:in","Was weiß mein Charakter über diese Gang?"],
      ["SL","Naja, da du in der Unterwelt verkehrst, wirst du sicherlich schon mal von ihnen gehört haben. Sie treten häufig als Vollstrecker für Kredithaie in Erscheinung."]
    ]},
    "Wenn du nach Informationen fragst, die nicht so leicht zu verfügbar sind, wird dich die SL dazu auffordern, eine Aktion durchzuführen (höchstwahrscheinlich **Nachforschungen**).",
    {dlg:[
      ["Spieler:in","Machen diese Leute den Bürgermeister nervös?"],
      ["SL","Wenn ja, versteckt er es gut. Du wirst ihn eine Weile beobachten müssen, um das mit Sicherheit sagen zu können. Möchtest du Nachforschungen anstellen?"]
    ]},
    "Es liegt im Ermessen der SL, auf welche Informationen dein Charakter Zugriff hat. Um mehr Details über eine Szene zu erfahren, musst du nicht im Rampenlicht stehen. Als Spieler:innen solltet ihr aber darauf achten, dass ihr die Konversation nicht mit zu vielen Fragen überfrachtet und euch darauf konzentriert, was in der Szene wichtig ist."
  ]},
  { name:"Aktionen: Zeit zum Handeln", p:172, pe:178, body:[
    "Wenn du ins Rampenlicht gerückt wirst, kannst du die Handlungen deines Charakters beschreiben. Je nach Art der Szene, kann dein Charakter beobachten, herumlaufen, mit Leuten sprechen und alltägliche Handlungen unternehmen, ohne dass Regeln zum Zug kommen. Handlungen, die ohne die Einbeziehung von Regeln ablaufen, geschehen in dem Moment, in dem du sie erzählst: Dein Charakter sagt, was du ihm in den Mund legst, er bewegt sich, wenn du es beschreibst, und so weiter.",
    {dlg:[
      ["Oliver (als Det. Enkidu)","Enkidu geht zu dem verwahrlosten Kind auf dem Schrottplatz und sagt, „Ist schon spät, Kleiner. Im Dunkeln solltest du nicht an Orten wie diesem abhängen. Komm, ich fahr dich nach Hause.“ Während sie das sagt, muss sie die ganze Zeit an ihre eigene Vergangenheit denken, als man sie auf einem Schrottplatz fand."]
    ]},
    "In vielen Fällen werden die Handlungen deines Charakters dramaturgisch wichtig sein und Regeln auslösen. Wenn Regeln ins Spiel kommen, beschreibst du wie gewohnt die Handlungen deines Charakters, aber deren Ausgang und Konsequenzen hängen von bestimmten Faktoren ab. Die Regeln entscheiden darüber, wie gut oder stümperhaft du dich anstellst, welche unerwarteten Nebeneffekte eintreten und wie sich deine Handlungen auf andere Elemente der Szene auswirken. Regel, die das Ergebnis deiner Handlungen beeinflussen, heißen **Aktionen**.",
    {dlg:[
      ["SL","Das Kind lächelt nur. Ehe du dich versiehst, hörst du etwas in rasender Geschwindigkeit heranrauschen. Es ist der Hebemagnet des Schrottplatzes, er stürzt in freiem Fall auf euch hinab! Du wirst dich noch rechtzeitig retten können, aber das Kind rührt sich nicht. Was tust du?"],
      ["Oliver","Das kann ich nicht zulassen. Ich hechte auf ihn zu und schubse ihn aus dem Weg!"],
      ["SL","Cool, du hechtest auf ihn zu, schauen wir mal, wie das läuft. Du nutzt **Ein Risiko eingehen**."]
    ]},
    "Die Grundlegenden Aktionen bestehen aus drei Teilen: Einsatzmöglichkeit, Wurf und Ergebnis. Zum Beispiel:",
    {box:{t:"Ein Risiko eingehen", k:"regel", b:[
      "Wenn du ein **waghalsiges, riskantes oder schlichtweg hirnrissiges Manöver abziehst**, würfle + Kraft. Bei 10+ schaffst du es irgendwie. Bei 7–9 wird die Spielleitung dich vor eine schwere Wahl stellen.",
      {kv:[
        ["Einsatzmöglichkeit:","Wenn du ein **waghalsiges, riskantes oder schlichtweg hirnrissiges Manöver abziehst**."],
        ["Wurf:","2W6 +Kraft."],
        ["Ergebnis:","Bei 10+ schaffst du es, irgendwie. Bei 7–9 wird die Spielleitung dich vor eine schwere Wahl stellen."]
      ]}
    ]}},
    "Die Einsatzmöglichkeit beschreibt die Umstände oder die Art der Aktion. **Wann immer du eine Handlung deines Charakters beschreibst, die zu einer Einsatzmöglichkeit passt, löst du die entsprechende Aktion aus.** Dann würfelst du, addierst eventuelle Modifikatoren hinzu (für gewöhnlich Kraft, siehe unten) und vergleichst das Ergebnis mit der Beschreibung der Aktion, um herauszufinden, wie die Sache ausgeht. Dieser gesamte Vorgang heißt **Aktion**.",
    "## 1. Handlung und Aktion in Einklang bringen",
    "Wenn du eine Handlung beschreibst, die eine Aktion auslöst, musst du diese auch benennen. Wenn du nicht weißt, welche du nutzen sollst, entscheidet die SL. Die Handlung und die Einsatzmöglichkeit der Aktion müssen zusammenpassen. Zum Beispiel:",
    {dlg:[
      ["Spieler:in","Ich verstecke mich hinter der Hecke und warte, bis der Besitzer das Haus verlässt. Ich nutze **Heimlichkeit**."]
    ]},
    "Oder:",
    {dlg:[
      ["Spieler:in","Ich flirte mit der Kantinenangestellten und versuche dabei herauszufinden, wann sie Rektor Boyd das letzte Mal gesehen hat. Ich stelle **Nachforschungen** an."]
    ]},
    "Oder:",
    {dlg:[
      ["Spieler:in","Wenn wir nicht aus diesem Wassertank rauskommen, bevor er sich füllt, sind wir verloren! Ich versuche, ein Loch in seinen Boden zu brennen, aber ich habe meine Mythos-Feuerkräfte noch nie unter Wasser benutzt, ich schätze, das ist ein Fall von **Jetzt reicht’s**."]
    ]},
    "Dein Charakter kann keine Handlung ausführen, die der Einsatzmöglichkeit einer Aktion entspricht, ohne diese auch auszulösen. Wenn du die Geschichte mit einer Handlung beeinflussen möchtest, musst du es komplett durchziehen. Wann immer du eine Handlung beschreibst, ohne auf eine Aktion einzugehen, wird die SL dir eine vorschlagen. Zum Beispiel:",
    {dlg:[
      ["Spieler:in","Das Ding hat Marcy getötet! Das kann was erleben. Ich hebe die Brechstange auf, nutze den Vorteil, dass es nicht in meine Richtung schaut und schlage ihm mit voller Wucht in sein schuppiges Gesicht."],
      ["SL","In Ordnung – du agierst also **Mit aller Gewalt**?"],
      ["Spieler:in","Auf jeden Fall! Lass mich darauf würfeln ..."]
    ]},
    "Der Umkehrschluss ist ebenfalls richtig: Du kannst keine Aktion unternehmen, ohne dabei eine Handlung zu beschreiben, die zur Einsatzmöglichkeit der betreffenden Aktion passt. Wann immer du eine Aktion auslöst, ohne die passende Handlung zu beschreiben, wird dich die SL dazu auffordern, die Vorgänge zu erzählen, indem sie fragt:",
    {box:{t:"?   Was sehen wir?", k:"hinweis", b:[]}},
    "Zum Beispiel:",
    {dlg:[
      ["Spieler:in","Argh, ich baumle also an der Brücke, klammere mich mit einer Hand am Seil fest und kralle mich mit der anderen in die Tasche? Ich kann die Juwelen ja schlecht in den Fluss fallen lassen. Ich werde **Ein Risiko eingehen**."],
      ["SL","In Ordnung, aber **was sehen wir**?"]
    ]},
    {box:{t:"Handlungssequenzen", k:"hinweis", b:[
      "Wenn du mehrere Dinge nacheinander tun willst, unterteilst du die Sequenz in einzelne Handlungen und führst nur für die erste eine Aktion aus. Je nachdem wie die erste Handlung ausgeht, entscheidet die SL darüber, ob du weitermachen und für die nächste Handlung in der Reihe eine Aktion ausführen darfst, und so fort. Zum Beispiel:",
      {dlg:[
        ["Spieler:in","Ich drifte mit dem Auto um die Straßenecke, dass das Gummi der Reifen nur so qualmt, dann ziehe ich meine Maschinenpistole und verpasse der rivalisierenden Bande einen flammenden Kugelhagel. Anschließend halte ich direkt vor dem Blutbad an und sage „Valtierra hat eine Botschaft für euch: Schließt euch ihm an, oder ihr seid tot!“"],
        ["SL","Okay. Das ist krass! Fangen wir mit dem Driften an, du **gehst ein Risiko ein**. Wenn dir das gelingt, kannst du das Feuer eröffnen."]
      ]},
      "Ein Misserfolg bedeutet in den meisten Fällen, dass etwas deine Handlungen unterbrochen hat, aber es können auch andere Effekte zum Tragen kommen. Die SL kann beispielsweise eine SL-Aktion auslösen, um deinem Charakter einen Zustand zu verleihen, dir aber anschließend erlauben, deine Handlungssequenz weiterzuführen.",
      "Eine Handlungssequenz muss nicht zwingend abgeschlossen sein, bevor ein anderer Charakter ins Rampenlicht gerückt wird. Wenn du sie bis dahin noch nicht vollendet hast, kannst du damit fortfahren, sobald du wieder im Rampenlicht stehst, vorausgesetzt die Handlungen der anderen Charaktere oder deren Auswirkungen lassen das zu."
    ]}},
    {dlg:[
      ["Spieler:in","Oh, stimmt. Mein Charakter stößt sich mit aller Kraft vom Brückenpfeiler ab und versucht, sich auf einen der Balken zu schwingen."],
      ["SL","Mutig. Dann führe mal die Aktion aus."]
    ]},
    "## 2. Kraft ermitteln",
    "Kraft steht für die Befähigung deines Charakters, eine bestimmte Handlung zu vollziehen und berücksichtigt die Fertigkeiten und Ressourcen deines Charakters, die Schwächen und Voraussetzungen, sowie eventuelle Zustände. Der Wert bemisst, wie sehr dein Charakter bei einer Handlung in seinem Element ist. Kraft fängt bei jeder neuen Handlung bei null an. Die Kraft früherer Würfe beeinflusst neue Würfe nicht.",
    "**Wenn die SL oder die anderen Spieler:innen Regeln auslösen wollen, um deine Aktion zu beeinflussen, müssen sie dies an diesem Punkt tun.** Solche Eingriffe werden in den meisten Fällen dazu genutzt, neue Geschichten-Marker und Zustände zu kreieren, die deine Kraft erhöhen oder verringern.",
    "Kraft wird folgendermaßen ermittelt:",
    "### A. Stärken zählen",
    "Benenne die Stärken (und/oder Geschichten-Marker), die dir bei deiner Handlung unmittelbar helfen (zum Beispiel *Aufmerksam* beim Sichten eines Tatorts). Du kannst dich auf sämtliche Stärken deines Charakters berufen, auch auf solche aus unterschiedlichen Themen, solange du glaubhaft machen kannst, dass sie für die Handlung nützlich sind. Mehr über Stärken findest du auf S. 205.",
    "**Die Anzahl der Stärken, die du nutzt, ist deine Anfangskraft.** Wenn du keine passenden Stärken hast, dein Charakter aber durchaus befähigt ist, die gewünschte Handlung durchzuführen (zum Beispiel mit einem Report zu sprechen, über einen Maschendrahtzaun zu klettern), ist deine Anfangskraft null. Wenn du möchtest, kannst du kurz beschreiben, wie deine Stärken dir bei deiner Handlung helfen.",
    "### B. Schwächen abziehen",
    "Du, die SL und jede Spieler:in, die zum unfreiwilligen Ziel deiner Aktion wird, kann sich eine deiner Schwächen zunutze machen (und/oder Geschichten-Marker), wenn sie die Aktion plausibel erschwert (zum Beispiel *Nicht fit*, wenn dein Charakter einen Verdächtigen zu Fuß verfolgen will). Mehr über die Schwächen findest du auf S. 207.",
    "**Reduziere deine Kraft um eins für jede genutzte Schwäche und markiere 1 Aufmerksamkeit bei dem zugehörigen Thema.** Deine Kraft kann unter null fallen und einen negativen Wert haben. Beschreibe nach Belieben, wie jede Schwäche deinen Charakter dabei behindert, die geplante Aktion durchzuführen.",
    "### C. Andere Faktoren addieren oder subtrahieren",
    "Zustände beschreiben zeitlich begrenzte Umstände, die sich in unterschiedliche Stufen einteilen lassen (siehe S. 218). Deine Zustände können eine Aktion beeinflussen. In manchen Fällen kann die SL entscheiden, dass die Zustände *des Ziels deiner Aktion* diese ebenfalls beeinflussen.",
    "Wenn dein Charakter (oder das Ziel deiner Aktion) Zustände besitzt, die dir bei der Aktion *helfen*, addiere die Stufe des *höchsten* Zustands zu deiner Kraft. Wenn dein Charakter (oder das Ziel deiner Aktion) Zustände besitzt, die deine Handlung *erschweren*, ziehe die Stufe des *höchsten* Zustands von deiner Kraft ab. Deine Kraft kann unter null fallen und einen negativen Wert haben.",
    {box:{t:"Beispiel 1: Kraft ermitteln", k:"beispiel", b:[
      "Jan spielt seinen Charakter, Sullivan, der die Wohnung einer flüchtigen Zeug:in in einem Arbeiterviertel in Augenschein nimmt, in der absolutes Chaos herrscht. Laut Julia, der SL, scheint es, als wäre es dort zu einem Kampf gekommen.",
      {dlg:[
        ["Jan (als Sullivan)","Sullivan sieht sich in der Wohnung um und versucht Hinweise darauf zu finden, was hier passiert ist. Ich stelle **Nachforschungen** an. Ich habe eine relevante Stärke, nämlich *Investigativreporter*, also habe ich zunächst eine Kraft von 1."],
        ["SL","Prima, würfle mit einer Kraft von 1."]
      ]},
      "Julia könnte auch sagen:",
      {dlg:[
        ["SL","Hmmm, du bist ganz allein in einer völlig verwüsteten Wohnung. Ich glaube, das ist ein guter Zeitpunkt, um deine Schwäche *Wahnvorstellungen* ins Spiel zu bringen. Dadurch sinkt deine Kraft auf 0. Würfle mit einer Kraft von 0. Oh, und markiere 1 Aufmerksamkeit auf deinem Thema Imaginärer Ritter."]
      ]},
      "Besäße Sullivan irgendwelche relevanten Zustände, könnte Jan diese für die Aktion nutzen.",
      {dlg:[
        ["Jan","Sullivan hat den Zustand *Verfolgungsjagd 2*, ich glaube, das lässt sich hier anwenden, da ich schon einige Hinweise auf die Zeug:in gefunden habe. Das ist der einzige und damit auch höchste positive Zustand, also addiere ich seine Stufe zu meiner Kraft von 0 und habe somit eine Kraft von 2. Zum Glück habe ich keine negativen Zustände, die hier greifen würden."]
      ]},
      "Anderen Spieler:innen steht es frei, sich in die Aktion einzumischen und ihre Kraft zu beeinflussen, indem sie Sullivan einen Zustand verleihen:",
      {dlg:[
        ["Mel","Mein listiger Feenschelm Gutfreund ist für das Chaos verantwortlich. Er bewundert Sullivan und möchte deswegen unbedingt verhindern, dass der Reporter herausfindet, dass er die Finger im Spiel hatte. Ich nutze einen Feindpunkt, um Sullivan den Zustand *von Gutfreund ausgetrickst 1* zu verleihen und seine Kraft um 1 zu senken."],
        ["Jan","Das ist ja mies! Aber auch irgendwie putzig. Mir bleibt also noch eine Kraft von 1."]
      ]}
    ]}},
    {box:{t:"Beispiel 2: Kraft ermitteln", k:"beispiel", b:[
      "Det. Enkidu versucht, den Riss von Thor, dem nordischen Donnergott, zu überwältigen und zu bändigen. Sie wählt Direkte Konfrontation und nutzt drei Stärken: *Athletik der Wildnis*, *Dornige Tentakel* und *Die Bestie entfesseln*. Diese verleihen ihr eine Kraft von 3. Sie hat keine nützlichen Zustände, ist aber noch *benommen 1* von einem Treffer, den Thor vor kurzer Zeit landen konnte. Der Riss von Thor besitzt zudem den relevanten Zustand *rasend 2*, was ihm zugutekommt, für Enkidu aber definitiv abträglich ist. Die SL entscheidet, dass dieser Zustand bei der Handlung miteinbezogen werden muss. Von den beiden Zuständen wird aber nur *rasend 2* berücksichtigt, da es der höchste negative Zustand ist. Enkidus Kraft von 3 reduziert sich um 2, was eine finale Kraft von 1 ergibt."
    ]}},
    "## Zusatzregel: Hard Mode",
    "Der Hard Mode ist ein optionaler Spielmodus, der die Schwierigkeit von Handlungen für die Spieler:innen erhöht, was den Charakteren das Leben erschwert. Im Hard Mode ist es schwerer, eine Kraft von 3 oder höher zu erreichen, wenn man eine Aktion durchführt. Folglich erzielen die Spieler:innen niedrigere Ergebnisse und ihre Handlungen ziehen eher neutrale oder negative Auswirkungen nach sich.",
    "Ihr solltet im Hard Mode spielen, wenn:",
    "a) ihr euer Runde einen düsteren Anstrich verpassen wollt und sich die Dinge in eurer Stadt für gewöhnlich zum Schlechten entwickeln; oder",
    "b) eure Charaktere zu mächtig geworden sind und ihr das Schwierigkeitslevel des Spiels erhöhen wollt; oder",
    "c) ihr die normalen Kriterien für die Kraft von Charakteren (Schwächen, negative Zustände und die Obergrenze für Stärken) schwierig anzuwenden findet und die Kraft strenger limitieren wollt.",
    "Wenn ihr im Hard Mode spielt, würfelt ihr 2W6 +Hard Mode statt 2W6 +Kraft bei allen Grundlegenden Aktionen. Den Wert des Hard Modes findet ihr heraus, indem ihr wie gewohnt die Kraft ermittelt und sie mit der untenstehenden Tabelle abgleicht oder die Zustandsleiste verwendet: fangt links auf der Zustandsleiste an und zählt für jeden Punkt Kraft ein Kästchen weiter. Die letzte Zahl ist der Wert des Hard Modes.",
    "Ein Charakter mit einer Kraft von 5 zählt beispielsweise fünf Kästchen weit von links nach rechts: das Kästchen mit der 1, das Kästchen mit der 2, das leere Kästchen, das Kästchen mit der 3 und noch ein leeres Kästchen. Da 3 bei diesem Vorgang die letzte angehakte Zahl ist, ist der Wert für den Hard Mode 3. Negative Werte für Kraft werden ebenso in den Hard Mode Wert übersetzt, der dann folglich auch negativ ist.",
    "Der Wert des Hard Modes ersetzt nicht nur den Wert der Kraft beim Würfelwurf, sondern kommt auch immer dann zum Einsatz, wenn Kraft in der Beschreibung einer Aktion vorkommt. Wenn dich eine Aktion beispielsweise anweist, deinem Ziel einen Zustand zu verleihen, dessen Stufe deiner Kraft entspricht, nutzt du nun den Hard Mode Wert.",
    {tbl:{t:"", h:["Kraft","0","1","2","3","4","5","6","7+"], r:[["HMode","0","1","2","2","3","3","3","4"]]}},
    "## 3. Würfeln",
    "Nun, da du deine Kraft ermittelt hast, würfle zwei sechsseitige Würfel (auch 2W6 genannt), addiere das Ergebnis und füge deine Kraft hinzu. Das ist mit 2W6 +Kraft gemeint. Das Endergebnis ist dein Wert für diese Aktion. Nachdem du gewürfelt hast, kann die Kraft für diese Aktion nicht mehr durch zusätzliche Stärken, Zustände oder andere Elemente des Spiels verändert werden.",
    "Wenn du z. B. eine Kraft von 3 hast und eine 2 und eine 5 würfelst, ermittelst du das Endergebnis, indem du 3+2+5 rechnest und damit auf 10 kommst. Wenn deine Kraft -1 ist und du eine 4 und eine 1 würfelst, rechnest du -1+4+1=4.",
    "Bei Aktionen, die andere Modifikatoren nutzen als Kraft, ersetzt du Kraft durch den genannten Modifikator (zum Beispiel 2W6+Mythos, 2W6+Logos, usw.).",
    "## 4. Das Ergebnis",
    "### Ergebniskategorien",
    "Das Endergebnis deines Wurfs wird bei allen Aktionen anhand derselben allgemeinen Kategorien interpretiert:",
    "**Ein Endergebnis von 6 oder weniger ist ein MISSERFOLG.** Wenn du einen Misserfolg erleidest, bekommt die SL die Gelegenheit, die Folgen der Aktion zu beschreiben. Sie kann eine ihrer SL-Aktionen durchführen, was die Situation für dich und dein Team für gewöhnlich verkompliziert. Ein Misserfolg bedeutet nicht zwangsläufig, dass die Aktion gescheitert ist, aber er zieht unweigerlich eine Komplikation nach sich, entweder aufgrund der Aktion oder in Verbindung damit.",
    "**Ein Endergebnis von 7 oder mehr ist ein ERFOLG. Ein Ergebnis von 7 bis 9 gilt als schwacher Erfolg.** Die Aktion gelingt zwar einigermaßen, aber nicht ohne negative Konsequenzen. **Ein Ergebnis von 10 oder mehr gilt als starker Erfolg.** Die Aktion gelingt mit weniger oder gar keinen Komplikationen.",
    "Manche Spielmechanismen eröffnen dir eine weitere Ergebniskategorie, die dann zum Tragen kommt, wenn du ein Endergebnis von **12 oder mehr** erreichst, was als außerordentlicher Erfolg mit besonderen Vorteilen zu werten ist. Solange die Kategorie nicht ausdrücklich ins Spiel kommt, gilt ein Endergebnis von 12 oder mehr als starker Erfolg.",
    "Die Aktionen beziehen diese Kategorien wie folgt mit ein:",
    {kv:[
      ["Bei einem Misserfolg, ...","(Ergebnis 6 oder weniger)"],
      ["Bei einem Erfolg, ...","(Ergebnis 7 oder mehr)"],
      ["Bei einer 7-9, ...","(Ergebnis 7, 8 oder 9)"],
      ["Bei einer 10+, ...","(Ergebnis 10 oder mehr)"],
      ["Bei einer 12+, ...","(Ergebnis 12 oder mehr)"]
    ]},
    "### Ergebnisbeschreibungen",
    "Jede Aktion hat mehrere verschiedene Ergebnisbeschreibungen für 7-9 und 10+. Manche Aktionen definieren auch, was bei einem Misserfolg passiert (Endergebnis von 6 oder weniger), und zwar zusätzlich zur oder anstelle einer SL-Aktion. Die Ergebnisse von Grundlegenden Aktionen werden weiter unten in diesem Kapitel beschrieben.",
    "Sobald das Endergebnis eines Würfelwurfs feststeht, greift die entsprechende Ergebnisbeschreibung. Diese kann sich sowohl auf die Geschichte als auch auf die Regeln beziehen. Eine Aktion kann beispielsweise eine Gefahr für deinen Charakter nach sich ziehen oder sie verleiht dir einen Zustand.",
    "### Wahlmöglichkeiten bei Ergebnissen",
    "Manche Aktionen lassen der aktiven Spieler:in, der SL oder einer anderen Spieler:in in ihrer Beschreibung die Wahl zwischen mehreren Optionen. Bei einer 7-9 bei **Heimlichkeit** kann die SL zum Beispiel die Auswirkungen auf den Charakter, der die Aktion durchgeführt hat, aus einer Liste wählen:",
    {box:{t:"", k:"regel", b:[
      "Bei 7-9 wählt die SL eine Option aus:",
      "- Eine unwichtige Person ist auf dich aufmerksam geworden, aber das macht sie irgendwie doch wichtig, oder?",
      "- Jemand bekommt eine Ahnung davon, dass etwas nicht ganz stimmt (jemand riecht deinen Duft, während du ihm nachstellst; jemand beobachtet, wie du eine Botschaft flüsterst, ohne sie zu hören).",
      "- Du musst etwas dir Wichtiges aufgeben – sonst wirst du entdeckt."
    ]}},
    "**Mit aller Gewalt** lässt dich bei einem Erfolg deinem Ziel einen Zustand verleihen. Du selbst musst den Zustand beschreiben und festlegen.",
    {box:{t:"", k:"regel", b:[
      "Bei einem Erfolg verleihst du dem Ziel einen passenden Zustand deiner Wahl mit einer Stufe=Kraft."
    ]}},
    "**Wann immer du bei einer Aktion, egal ob einer eigenen oder der einer anderen Spieler:in, eine Wahl triffst, beschreibst du, wie sich deine Entscheidung auf die Geschichte auswirkt.** Anders gesagt, übersetzt du die Regeln in die Geschichte. Zum Beispiel:",
    {dlg:[
      ["Matze (als Kitsune)","Ich erklimme im Parkour-Lauf das Dach der Metallfabrik und versuche, die Schergen im Inneren auf kaltem Fuß zu erwischen. Ich nutze also **Heimlichkeit**. Meine Kraft ist 2, ich habe eine 3 und noch eine 3 gewürfelt, das macht zusammen 8. Mist, 7-9! Das kann nicht gut sein."],
      ["SL","Alles klar, bei **Heimlichkeit** 7-9 steht, dass ich eine Wahl treffe. Ich entscheide mich für „Eine unwichtige Person ist auf dich aufmerksam geworden, aber das macht sie irgendwie doch wichtig, oder?“. Lass mich nachdenken … Die Leute im Inneren kannst du definitiv überrumpeln. Aber plötzlich huscht ein weißer Lichtschimmer über deine Jacke und deinen Pulli, als der Wachmann am Eingangstor die Taschenlampe auf dich richtet. Dann rennt er zu seinem Wärterhäuschen. Sieht so aus, als würde er die Polizei rufen."]
    ]},
    "Oder:",
    {dlg:[
      ["Oliver (als Det. Enkidu)","Diese gewalttätigen Teenager aus dem Infection Club gehen mir auf die Nerven. Wird Zeit, sie mit meinen dornigen Tentakeln in die Flucht zu schlagen. Es ist ein Handgemenge, also nutze ich wohl **Direkte Konfrontation**? Meine Kraft ist 3, ich würfle eine 4 und eine 6, wow! Mein Endergebnis ist 13, fällt also in die Kategorie 10+."],
      ["SL","**Direkte Konfrontation** mit einem Endergebnis von 10+ lässt dich eine von zwei Optionen wählen."],
      ["Oliver (sieht sich die Optionen an)","Ich entscheide mich dafür, mein Ziel zu erreichen, also lasse ich als erstes die dornenartigen Tentakel herausschnellen, die sie von mir wegstoßen. Außerdem entscheide ich mich dafür, ihnen einen Zustand zu verleihen, nennen wir ihn *eingeschnürt 3*! Nun, da sie fixiert in der Luft hängen und von meinen Tentakeln umschlossen sind …"]
    ]}
  ], aside:[
    {box:{t:"Spieler:innen-Aktionen vs. SL-Aktionen", k:"hinweis", b:[
      "Dieser Abschnitt bezieht sich auf Aktionen von Spieler:innen, die einen der Protagonist:innen verkörpern. Die SL, die alle anderen NSC spielt, nutzt andere Regeln für Handlungen mit diesen Charaktere. Ein Teil davon ergibt sich aus den Aktionen der Spieler:innen und ist dort als Reaktion beschrieben. Erweiterte SL-Aktionen finden sich in **Spielleitung 1x1**."
    ]}}
  ]},
  { name:"Mehr zu Aktionen", p:178, pe:179, body:[
    "## Eine Aktion wiederholen",
    "Du kannst eine Handlung nicht mit denselben Stärken oder auch anderen Merkmalen wiederholen, solange die Umstände dieselben sind. Das gilt unabhängig davon, ob du Erfolg hattest oder einen Misserfolg erlitten hast. Du kannst keine identischen Handlungen hintereinander ausführen, zum Beispiel zweimal dasselbe Ziel auf dieselbe Weise angreifen oder über dasselbe Thema Nachforschungen auf demselben Weg anstellen. Du kannst eine Handlung erneut versuchen, wenn sich die Umstände geändert haben und die SL es dir gestattet. Das kann innerhalb weniger Momente geschehen, zum Beispiel während eines rasanten Kampfes, oder Tage in Anspruch nehmen, wenn eine bestimmte Art der Gesprächsführung einer Zeug:in keine neuen Informationen mehr entlockt und erst etwas Zeit verstreichen muss, ehe du es wieder versuchen kannst. Du darfst es aber mit einer neuen Herangehensweise probieren und andere Stärken nutzen.",
    "**Sich der Gefahr stellen** ist eine Ausnahme von dieser Regel. Solange du dich selbst schützen kannst, kannst du dich immer und immer wieder mit denselben Stärken **der Gefahr stellen**.",
    "## Verknüpfte Aktionen",
    "Aktionen folgen häufig aufeinander, weil sie sich gegenseitig auslösen oder weil Regeln oder die SL dich dazu auffordern, eine zu absolvieren, bevor du die andere durchführen kannst. Meistens folgt auf gescheiterte Aktionen **Sich der Gefahr stellen**, um den Schaden zu mindern oder zu vermeiden. Auf **Das Blatt wenden** folgt die Aktion, die dadurch verstärkt wird. Solche Aktionen nennt man **verknüpfte Aktionen**.",
    "Bei verknüpften Aktionen kann ein Merkmal nur *einmal* verwendet werden, also nur in einer der beiden Aktionen. Das trifft auch dann zu, wenn es für beide Aktionen relevant wäre. Zum Beispiel:",
    {dlg:[
      ["Jan (als Sullivan)","„Ich nutze *Passender Schild*, um dem Goblin-Söldner eine überzuziehen und ihn vom Schiff zu stoßen. Dafür setze ich **Mit aller Gewalt** mit einer Kraft von 1 ein. Ich würfle … oje. Eine 2 und noch eine 2, was ein Endergebnis von 5 ergibt. Das ist ein Misserfolg.“"],
      ["SL","„Oje. Als du dich auf den Söldner stürzt und ihn an die Reling drückst, zieht er ein Kampfmesser und sticht auf dich ein. Das hinterlässt einen *hässlichen Stich 2*. Sullivan muss **Sich der Gefahr stellen**, aber dafür kannst du den *Passenden Schild* nicht einsetzen, weil du es bereits bei der letzten Aktion genutzt hast und diese damit gekoppelt ist. Sagen wir, du kannst dich nicht mit dem Schild verteidigen, weil es zwischen euch eingeklemmt ist.“"],
      ["Jan","„Das ergibt Sinn. Zum Glück habe ich noch meine *Geisterhafte Rüstung* …“"]
    ]},
    "Aktionen, die demselben Zweck dienen, gelten als verknüpft, selbst wenn sie nicht unmittelbar aufeinanderfolgen. Wenn du beispielsweise *Fromme Anhänger:in* nutzt, um dich gegen die Gehirnwäsche eines Kults zu wehren, und **Das Blatt wenden** einsetzt, um dir den Zustand *im Glauben gestärkt 2* zu verleihen, kannst du Fromme Anhänger:in nicht noch einmal verwenden, wenn du **Dich der Gefahr stellst**, der Gehirnwäsche zu widerstehen, da beide Aktionen dem Zweck dienen, dich zu schützen.",
    "## Verzögerte Aktionen",
    "Zugunsten der Dramaturgie kann sich die SL dafür entscheiden, die Durchführung einer Aktion zu verzögern. Wenn das Ergebnis einer Aktion deines Charakters erst zu einem späteren Zeitpunkt in der Geschichte bedeutsam würde, kann dich die SL dazu auffordern, die Aktion zu verzögern. Dann wird allgemein davon ausgegangen, dass dein Charakter die dazugehörige Handlung vollzogen hat, das Ergebnis bleibt jedoch noch unbekannt und das Spiel geht wie gewohnt weiter. Sobald die Auswirkungen der Handlung relevant werden, wird dich die SL dazu auffordern, die Aktion für die in der Vergangenheit liegende Handlung auszuwürfeln, um das Ergebnis an diesem Punkt in die Geschichte einzubringen.",
    "Eine Spieler:in spielt beispielsweise ein kriminelles Superhirn, das die Fluchtwagenfahrer:in des Teams einschüchtern will, um sicherzustellen, dass sie rechtzeitig vor Ort ist, um das Team rauszuholen. Die SL kann die Aktion in diesem Fall bis zu dem Punkt verzögern, an dem das Team vom Tatort flieht. In der Geschichte findet der Einschüchterungsversuch Stunden vor dem schicksalhaften Moment statt, an dem ihr abgeholt werden sollt. Die Regeln werden aber erst dann angewandt, wenn ihr das Ergebnis des Gesprächs herausfinden wollt, in diesem Fall unmittelbar nach dem Überfall auf die Zentralbank der Stadt, als ihr seht, ob die Fluchtwagenfahrer:in euch abholt – oder eben nicht."
  ]},
  { name:"Aktionen ohne Würfel", p:179, body:[
    "Aktionen ohne Würfel sind Aktionen, bei denen nicht gewürfelt wird. Stattdessen erfolgt die Aktion immer dann, wenn dein Charakter eine Handlung in der Geschichte unternimmt, die der Einsatzmöglichkeit entspricht. Ihr befolgt dann die Ergebnisbeschreibung der Aktion. Zum Beispiel:",
    {kv:[
      ["Einsatzmöglichkeit:","Wenn du **etwas opferst, an dem deine Identität hängt**,"],
      ["Ergebnis:","Markiere 1 Aufmerksamkeit beim zugehörigen Thema."]
    ]},
    "Bei dieser Aktion weist dich das Ergebnis an, 1 Aufmerksamkeit auf dem entsprechenden Thema zu markieren. Wann immer die Einsatzmöglichkeit der Aktion eintritt, befolgst du diese Anweisung.",
    "Aktionen ohne Würfel werden während des Spiels dafür genutzt, um Regeln zu etablieren, die in bestimmten Situationen zum Tragen kommen, unabhängig von der Kraft oder den Würfen deines Charakters, etwa für Aktionen rund um deine Charakterentwicklung. Diese findest du in Kapitel 4: Augenblicke der Wahrheit."
  ]},
  { name:"Grundlegende Aktionen", p:180, pe:181, body:[
    "Die acht **Grundlegenden Aktionen** decken die meisten Handlungen in *City of Mist* ab. Die folgenden Abschnitte veranschaulichen die Aktionen, zeigen ihre Einsatzmöglichkeiten und beschreiben mögliche Ergebnisse.",
    "Im Kontext der Grundlegenden Aktionen werden Begriffe wie Merkmale, Zustände, Hinweise und Momentum verwendet, die auf den Seiten 164-165 zusammengefasst sind und im Kapitel Spielressourcen ab S. 204 ausführlich erklärt werden.",
    "## Die Mindestens-1-Regel",
    "Grundlegende Aktionen bemessen geschaffene Vorteile, wie Hinweise, Momentum oder Zustände, oft in Kraft. Bei einem Erfolg in **Nachforschungen** erhältst du beispielsweise Hinweise in Höhe deiner Kraft. Wenn deine Kraft bei einer Aktion 0 oder weniger beträgt und du einen Erfolg erzielst, **erhältst du immer mindestens 1 Punkt:** 1 Hinweis, 1 Momentum oder 1 Zustand der Stufe 1.",
    "## Mega!",
    "Mehrere Charakterverbesserungen können eine Grundlegende Aktion *Mega!* machen. Meistens gewähren dir diese Verbesserungen Zugriff auf die *Mega!*-Option, wann immer du eine bestimmte Grundlegende Aktion mit Stärken oder Schwächen eines bestimmten Themas durchführst.",
    "Ein Würfelergebnis von 12 oder mehr wird als 10+ abgehandelt. Ist eine Aktion *Mega!,* öffnet ein Ergebnis von 12 oder mehr eine neue Kategorie für einen außerordentlichen Erfolg mit besonderen Vorteilen. Sie sind bei der entsprechenden Aktion beschrieben.",
    "## Unterstützen oder Stören",
    "Mitglieder des Teams können einander bei Aktionen unterstützen oder sie stören, indem sie Momentum, Freundpunkte oder Feindpunkte ausgeben, um Zustände zu verleihen oder die Umgebung zugunsten oder entgegen der Aktion zu verändern, usw. Wenn ein Teammitglied eine Aktion durchführt, kannst du kurzzeitig das Rampenlicht einfordern, um es bei der Aktion zu unterstützen oder zu stören.",
    "**Der einfachste Weg, sich in eine Aktion einzumischen, ist das Ausgeben eines Freundpunktes oder Feindpunktes, um dem aktiven Charakter einen temporären Zustand zu verleihen.** Beschreibe, wie du dich in die Aktion deines Teammitglieds einmischst und welchen Zustand du ihr verleihst. Man kann den Zustand nicht mithilfe von **Sich der Gefahr stellen** loswerden.",
    "Eine andere Möglichkeit, ein Teammitglied bei seiner Handlung zu unterstützen oder zu stören, besteht darin, Momentum auszugeben. Wenn du über genügend aufgespartes Momentum verfügst, darfst du es ausgeben. Wenn das nicht der Fall ist, dein Charakter aber die Initiative ergreifen kann, ehe das Teammitglied handelt, kannst du **Das Blatt wenden**, um dafür Momentum zu verdienen. Du kannst eine Stärke verbrennen, um den Erfolg von **Das Blatt wenden** zu garantieren.",
    "**Für gewöhnlich ist es nicht möglich, einen temporären, von einem Teammitglied verliehenen Zustand mittels Sich der Gefahr stellen zu reduzieren.** Die SL kann eine Ausnahme machen, wenn der Charakter die Einmischung mit Leichtigkeit abblockt.",
    "Zu guter Letzt kannst du eine Schwäche deines Teammitglieds nutzen, wenn du das unfreiwillige Ziel einer Aktion dieses Teammitglieds wirst.",
    "### Mehrfaches Unterstützen oder Stören",
    "Jedes Teammitglied kann um das Rampenlicht bitten, wenn es ein anderes bei einer Aktion unterstützen oder stören will, solange der Charakter in der Lage ist, das zu tun. Hilfreiche oder störende Zustände, die von verschiedenen Teammitgliedern verliehen werden, müssen auf demselben Spektrum liegen, um aufaddiert werden zu können. Andernfalls zählt jeder Zustand nur für sich und nur der Zustand mit der jeweils höchsten Stufe kommt zum Tragen."
  ]}
]);
