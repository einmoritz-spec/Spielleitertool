/* Charaktere · Posten Dredger, Hacker (Corebook S. 136–139) */
(function(L){ var H = WSH, K = "Posten", A = H.asp;
L.push({id:"dredger", k:K, t:"Dredger", p:136, b:[
 {a:"Mutige Entdecker mit einem Auge für Wert.\nDie Kunst des Ausbaggerns ist schwer und schmerzhaft zu erlernen, aber die Vorteile sind den Kampf wert. Dredger verdienen ihren Lebensunterhalt, indem sie auf der Suche nach wertvollen Proben und Bergegut in die Wellen tauchen, gefährliche Wracks durchkämmen und uralte Ruinen als Teil ihres Alltags erkunden.\nDredger kleiden sich traditionell so leicht wie möglich, um so viel Platz wie möglich frei zu haben, um ihre Funde zu ihren Schiffen zurückzutragen. Die meisten Dredger sind leicht an der gefleckten, versengten Haut ihrer Hände und Füße zu erkennen – die Wirkungen langfristiger Crezzerin-Belastung sind schwer zu verbergen."},
 {c:"Uralte Gefahren", x:"Die Wahrheit über die vorverdante Ära ist der großen Mehrheit ein Rätsel, dem Dredger aber etwas weniger. Selbst die unerfahrensten ihres Berufs stoßen von Zeit zu Zeit auf Artefakte und Absonderlichkeiten jener alten Tage und schnappen sie sich für Trophäenschränke, Angebereien oder die Dienste des Rattlehands eines Schiffs."},
 {c:"Was ist überhaupt Schatz?", x:"Verschiedene Leute spezialisieren sich auf das Bergen verschiedener Dinge, wenn sie unter die Oberfläche gehen. Manche suchen ausschließlich das gewaltig Wertvolle, die Ruinen der alten Welt und die Geheimnisse, die sie bergen. Andere, nicht weniger wichtig, zielen etwas niedriger – auf Bergegutstücke und zerstörte Rumpfbeplankung, das alte Entermesser eines Kapitäns oder einen Schrank voller Seekarten. Die See gibt solche Dinge ungern her, oder zumindest fühlt es sich so an, aber Bergegut ist – wie oft gesagt wird – das Lebenselixier der Zivilisation."},
 H.fragen("des Dredgers",["Was ist das Wertvollste, das du je gefunden hast, und was hast du damit gemacht, als du die Oberfläche erreichtest?","Es gibt Anblicke unter dem Blätterdach, die wenige sehen und noch weniger darüber sprechen. Wie haben sie dich geprägt?","Niemand kommt durch eine Laufbahn in so feindlichem Gebiet, ohne ab und zu einen Fehler zu machen – welche Narben hat dein Beruf bei dir hinterlassen? Welchen großen Schatz hast du erblickt, aber nicht erworben?"]),
 {c:"Alternative Darstellungen", x:"Dredger können gut als allgemeinere Plünderer und Aasjäger funktionieren, aber du kannst das Konzept auch in eine weit heimlichere Richtung drehen, indem du sie zu einer Kombination aus Fassadenkletterer und klassischem Dungeon-Forscher machst (die sich auf ihre Aspekte für das Arbeiten bei Dunkelheit und das Betreten von Orten verlassen, wo sie nicht sein sollten)."}
 ].concat(H.aspHead(),[
 A("Versengte Haut",4,"Eigenschaft","Widerstehe den gefährlichen Wirkungen der Crezzerin-Belastung (Versengen, Halluzinationen, Mutation)."),
 A("Meisterbergung",1,"Eigenschaft","Füge jedem Bergegut, das du aus Wracks, Riffen und Ruinen erwirbst, einen positiven Marker deiner Wahl hinzu."),
 A("Gedankenkatalog",4,"Eigenschaft","Markiere, um Nutzen oder Geschichte von etwas Uraltem zu erkennen."),
 A("Grelle Kartografie",3,"Eigenschaft","Du kannst Seekarten nutzen, um Schiffswracks und Katastrophen zu finden, zusätzlich zu den üblichen Inseln und Absonderlichkeiten."),
 A("Leck mich doch",3,"Eigenschaft","Konflikte zählen als Triumphe, wenn du Fallen und Umweltgefahren ausweichst."),
 A("Arborofathometer",3,"Ausrüstung","Ein komplexes Tiefenmessgerät, um deinen genauen Abstand zur Finsternis-Unter-Eaves zu messen. Erhöhe die Neigung deines Schiffs um eins, solange du an Bord bist."),
 A("Auftreiben",3,"Eigenschaft","Wann immer deine Crew ein Frachtstück erhält, erhalte eine damit verbundene Ressource (wahrscheinlich Bergegut, vielleicht aber eine Probe oder ein Flüstern) für dich."),
 A("Enges Training",3,"Eigenschaft","Ignoriere Abzug, der für Aktionen in geschlossenen oder architektonisch instabilen Räumen verhängt würde."),
 A("Seidendraht-Spule",5,"Ausrüstung","Eine nahezu unzerbrechliche Spule dicken Drahts, die sich irgendwie weich anfühlt. Kann nach dem Abwickeln mit einem einfachen Schnippen wieder aufgespult werden."),
 A("Bernsteinlinsen",4,"Ausrüstung","Eine Schutzbrille, mit der du perfekt durch Rauch, Nebel und Sporenwolken sehen kannst."),
 A("Mottenlaterne",4,"Ausrüstung","Nutzt leuchtende Motten, um einen kleinen Bereich um dich zu erhellen."),
 A("Federhacken-Stiefel",4,"Ausrüstung","Markiere, um einen gewaltigen Sprung zu machen und sicher zu landen, ohne würfeln zu müssen."),
 A("Grabhammer",2,"Ausrüstung","Ebenso Werkzeug wie Waffe. Verursacht NK-Stumpf-Schaden. Erhöhe die Wucht beim Zerschmettern von Mauerwerk und Bauwerken."),
 A("Dietrichschwanz-Skorpion",2,"Gefährte","Ein neugieriges kleines Tier mit einem Dietrich-Stachel. Einmal pro Szene kannst du ein beliebiges gewöhnliches Schloss öffnen."),
 A("Sanktipede",3,"Gefährte","Von Geschichte und vergessenen Dingen angezogen. Verbrauche eine Seekarte, um ein Stück uraltes, wertvolles Bergegut in deiner Nähe zu erkennen und zu bergen, wenn möglich."),
 A("Tickerklick",4,"Gefährte","Eine Lochkartenintelligenz in einem lauten Konstruktkörper; das Surren und Klappern dieses mausähnlichen Gefährten ist nützlich, um die Aufmerksamkeit von deiner Position abzulenken.")
 ],H.kit("Dredger als Posten",[
  ["Stärke (wähle 1)","Schärfe, Gezeiten, Schleier"],
  ["Fertigkeiten & Sprachen (wähle 5) – Fertigkeiten","Zerschlagen, Schürfen, Überlisten, Rasseln, Bergen, Studieren, Springen"],
  ["Fertigkeiten & Sprachen – Sprachen","Brasstongue, Highvin"],
  ["Ressourcen (wähle 2) – Bergegut","Kupferringe, Uralter Motor"],
  ["Ressourcen – Proben","Schlafbringender Saft, Leviathanklaue"],
  ["Ressourcen – Flüstern","Ein aufgestiegenes Wrack"],
  ["Ressourcen – Seekarten","Ein uraltes Frachtmanifest"],
  ["Antrieb (wähle 1)","Eine unberührte vorverdante Ruine entdecken · Eine funktionierende Maschine aus einem uralten Wrack bergen"],
  ["Morast (wähle 1)","Türen und Siegel bleiben dir hartnäckig verschlossen · Deine Bewegungen lassen Wracks sich verschieben und knarren"]]),
 [H.q("Das Zeug zu finden ist der leichte Teil, es zum Schiff zurückzubringen, dafür braucht es ein paar zusätzliche Hände.","Zotse Xeker, Tzelicrae-Dredger")])});
L.push({id:"hacker", k:K, t:"Hacker", p:138, b:[
 {a:"Die Zeichen und Narben deines Berufs sind groß auf deine Haut geschrieben.\nDie Aufgabe eines Hackers ist es, Siedlungen, Schiffen und Erkundung den Weg freizumachen und in die Wildnis zu stürzen, um Pfade und Lichtungen aufzureißen.\nDie frühesten Hacker nutzten Feuer, bis sie schnell merkten, dass die Eisenholz-Äste schneller nachwuchsen, als sie brannten. Jetzt wissen sie wie alle anderen Überlebenden, dass Feuer mehr Ärger macht, als es wert ist. Für die moderneren ihrer Art herrschen geschärftes Metall, Chemikalien und ehrlicher Schweiß; und der Wert wird in geknickten Ästen und grob gehauenen Routen gemessen."},
 {c:"Axtköpfe und Sägezähne", x:"Die Arbeit eines Hackers ist eine der gefährlichsten auf der Wildsea, die Natur ihres Berufs verlangt von ihnen, jederzeit in die Wellen zu stürzen. Und obwohl der Kern ihrer Arbeit darin besteht, sichere Pfade, weiche Stellen und die Art von Gefahren zu prüfen, die auf keiner Karte erscheinen, werden sie bei Bedarf auch gerufen, ihre Schiffe vor beweglicheren Gefahren zu verteidigen.\nZum Glück für einen Hacker ist sein wildnisräumendes Arsenal zugleich eine ziemlich wirksame Waffensammlung. Kein anderer Posten kann mit pflanzenbasierten Bedrohungen mit demselben Können umgehen, und diese Fähigkeiten erlauben ihnen auch, eine solide Verteidigung gegen Insekten- und Säugetier-Aggressoren aufzubauen."},
 {c:"Crezzerin-Wellen", x:"Eine Gefahr für den durchschnittlichen Seemann, aber eine ständige Bedrohung für einen Hacker. Crezzerins versengende, mutative Flüssigkeit ist nicht allgegenwärtig, aber sie könnte in jedem Blatt oder jeder Astspitze sein, die er zu schneiden gedenkt. Selbst mit Schutzausrüstung in Bestform erleiden sie die Wirkungen früher oder später – Crews mit einem eigenen Hacker finden sich fast immer auch bald in Bedarf eines eigenen Schiffsarztes."},
 H.fragen("des Hackers",["Von wo aus beobachtest du die Wellen auf deinem Schiff? Vom Bug, bereit zum Sprung, oder von höher für einen beherrschenderen Ausblick?","Was ist die größte Raubpflanze, die du je bezwungen hast, und welche Zeichen hat sie im Gegenzug bei dir hinterlassen?","Nicht jeder Pfad kann geräumt werden – was war dein größtes Scheitern, und wie hast du es wiedergutgemacht, als der Stich verblasst war?"]),
 {c:"Alternative Darstellungen", x:"Obwohl die übliche Darstellung eines Hackers die von Wegfindung und Bedrohungserkennung ist, kann auch ein weniger martialischer Ansatz funktionieren – Hacker sind hervorragende Erntehelfer und Gärtner, die den Wellen lange genug standhalten, um ausgewählte Pflanzenproben einzubringen, um einen Schiffsarzt, Alchemisten oder Char zu versorgen."}
 ].concat(H.aspHead(),[
 A("Narben erinnern",5,"Eigenschaft","Die Wildsea lehrt harte, aber nützliche Lektionen."),
 A("Wegbereiter",3,"Eigenschaft","Erhöhe die Wucht beim Finden von Routen und Räumen von Pfaden durch Pflanzenwuchs."),
 A("Lebendes Gegengift",3,"Eigenschaft","Nutze eine Aufgabe, um eine seltene Ressource zu erschaffen: „Reine Spucke“ oder „Reiner Schweiß“."),
 A("Wilde Ernte",3,"Eigenschaft","Konflikte zählen als Triumphe, wenn du pflanzenartige Gefahren angreifst oder dich dagegen verteidigst."),
 A("Crezzertarnung",3,"Eigenschaft","Markiere, um für die Dauer einer Szene für pflanzenartige Gefahren und Geschöpfe unauffindbar zu werden."),
 A("Hart erkämpfte Instinkte",3,"Eigenschaft","Du erkennst auf einen Blick, welche Äste brechen und welche halten. Erhöhe den Sägen-Wert deines Schiffs um eins, solange du an Bord bist."),
 A("Blütenzerquetscher",3,"Eigenschaft","Du ignorierst Morast durch pflanzenbasierte Gefahren und Schrecken und bist widerstandsfähig gegen Säuren, Gifte und halluzinogene Effekte von Raubpflanzen."),
 A("Rostblatt-Ale",2,"Ausrüstung","Wird geschmackvoller, je mehr es durchgeschüttelt wird. Wann immer du einen Vorteil aus einem Gebräu oder einer Mahlzeit erhältst, erhöhe seine Leiste um zwei Kästchen."),
 A("Enterkette",2,"Ausrüstung","Entworfen, um schnell Halt in Rinde und Ästen zu finden. Konflikte zählen als Triumphe beim Durchqueren der See."),
 A("Chemisches Räuchergefäß",3,"Ausrüstung","Markiere, um einen kleinen Rauchbereich zu erzeugen, der Insekten abwehrt und die Sicht senkt."),
 A("Wellenläufer-Jacke",2,"Ausrüstung","Widerstehe den gefährlichen Wirkungen der Crezzerin-Belastung, Insektenbissen und Giften."),
 A("Jagserry",3,"Ausrüstung","Die Urwaffe der Hacker, ein Sägezahnsäbel, der NK-Hieb- oder Säge-Schaden verursacht."),
 A("Sägezahn-Chakram",3,"Ausrüstung","Ein Satz geschärfter runder Klingen zum Werfen, die FK-Scharf- oder Säge-Schaden verursachen."),
 A("Entlaubungsgranaten",3,"Ausrüstung","Sprengpakete, die beim kräftigen Werfen platzen. Verursachen FK-Säure- oder Salz-Schaden."),
 A("Kreiselflügel-Motten",5,"Gefährte","Ein abgerichteter Schwarm zerlumpter Insekten. Brenne, um die Wirkungen schlechter Luft und Sporen in der Luft für deine Crew für den Rest einer Szene zu neutralisieren."),
 A("Bugnasen-Stachelschwein",2,"Gefährte","Nicht das einfachste Tier zum Streicheln, aber man lernt, damit zu leben. Ignoriere Abzug durch Schmerz oder Unbehagen.")
 ],H.kit("Hacker als Posten",[
  ["Stärke (wähle 1)","Eisen, Instinkt, Zähne"],
  ["Fertigkeiten & Sprachen (wähle 5) – Fertigkeiten","Zusammenbrauen, Hacken, Ernten, Jagen, Überlisten, Spüren, Wellenlauf"],
  ["Fertigkeiten & Sprachen – Sprachen","Knock, Signalgebung"],
  ["Ressourcen (wähle 2) – Bergegut","Wrackeisen-Beplankung, Verlassener Schrott"],
  ["Ressourcen – Proben","Wilde Aprikosen, Skorpione im Glas"],
  ["Ressourcen – Flüstern","Eine gefallene Eisenwurzel"],
  ["Ressourcen – Seekarten","Ein Baum-Diagramm"],
  ["Antrieb (wähle 1)","Ein Mawship zur Ruhe betten · Eine Begegnung mit einer Leviathan-Pflanze überleben"],
  ["Morast (wähle 1)","Insekten suchen deine Haut · Die Wellen rufen dich, tiefer als nötig zu reisen"]]),
 [H.q("Die Wellen werden dich lehren, ob du zuhören willst oder nicht. Zum Glück für alle Beteiligten wollte ich.","Motsje Morencja, Ardent-Hacker")])});
})(WS_NACH.charaktere);
