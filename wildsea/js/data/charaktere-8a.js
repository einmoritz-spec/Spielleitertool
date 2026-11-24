/* Charaktere · Posten Alchemist, Char (Corebook S. 128–131) */
(function(L){ var H = WSH, K = "Posten", A = H.asp;
L.push({id:"alchemist", k:K, t:"Alchemist", p:128, b:[
 {a:"Ein Experte für die Eingeweide der See selbst, ein Student chemischen Rauchs und der Spritzer von Reaktionen, des brodelnden Chaos neu gedachter Elemente.\nAlchemisten sind Meister des Zusammenbrauens und der Reaktion, die Chemikalien und arkonautisches Wissen mit unerwarteten (und gelegentlich instabilen) Ergebnissen kombinieren können. Manche Alchemisten konzentrieren sich auf die Heilkunst, manche auf Verwandlung und Verständnis, andere auf … explosivere Bestrebungen.\nAlchemisten kleiden sich meist in dicke Hüllen, um sich beim Umgang mit unberechenbaren Zutaten zu schützen, aber selbst die Besten von ihnen sind von den Gefahren ihrer Berufung mit Narben und Verbrennungen gezeichnet."},
 {c:"Ein tieferes Verständnis", x:"Der Kern der Fähigkeiten des Alchemisten ist Verständnis, ein tieferes Wissen über die Fülle der See und darüber, wozu man sie verdrehen kann, damit sie es freigibt. Ein Char mag das Fleisch eines Pinwolfs als Basis einer Mahlzeit nehmen, ein Rattlehand seine Knochen zu einer Klinge formen, aber ein Alchemist kann alle übrigen Teile nehmen und etwas von dieser rohen, abgehackten, hungrigen Essenz herausziehen und zu etwas Nützlichem destillieren."},
 {c:"Probleme und Lösungen", x:"Das mächtigste Werkzeug im Arsenal eines Alchemisten ist die Fähigkeit, mit Crezzerin vorbereitete Lösungen zusammenzubrauen, Tränke, die etwas von der schnellwachsenden Seltsamkeit enthalten, die den Wellen innewohnt. Diese Gebräue können frisch getrunken, für späteres Basteln gelagert oder an die Crew verteilt werden, wenn der richtige Moment kommt. Obwohl sie selten ohne Nebenwirkungen daherkommen, ist der Reiz der Macht – auch begleitet von Schmerz, Unbehagen oder dem Unerwarteten – berauschend."},
 H.fragen("des Alchemisten",["Spezialisierst du dich auf bestimmte Zutaten, oder nimmst du, was du findest, und tust dein Bestes?","Was war die schlimmste unerwartete Nebenwirkung, die du (oder ein unglücklicher Crewkamerad) je von einer deiner alchemistischen Schöpfungen erlebt hast?","Was zieht dich zu einem so spezialisierten Studienfeld? Der Reiz von Wissen und Verständnis oder die Macht, die Welt nach deinem Entwurf zu verändern?"]),
 {c:"Alternative Darstellungen", x:"Der Alchemist enthält bereits Elemente der Idee des abtrünnigen Wissenschaftlers oder chemischen Forschers, aber diese könnten verstärkt werden, um den Schwerpunkt des Postens von der Praxis zur Theorie zu verlagern – etwa ein Wandergelehrter aufstrebender Wissenschaft. Alternativ könnten die Insignien von Disziplin und Logik fallengelassen werden, um etwas näher an einer Kräuterhexe oder einem Kesselwächter zu schaffen, mit Fokus auf der Manipulation arkonautischer Essenzen statt der traditionelleren Chemikalien."}
 ].concat(H.aspHead(),[
 A("Komponenten-Sammler",3,"Eigenschaft","Wenn einer deiner Crewkameraden eine alchemistisch nützliche Probe erwirbt, erhalte eine Kopie dieser Probe für dich (einmal pro Szene)."),
 A("Alchemistisches Ausgraben",3,"Eigenschaft","Wann immer du einen neuen Ort entdeckst, wähle eine einzigartige Eigenschaft (dargestellt durch einen Marker), die dort leicht auf Proben oder Bergegut zu finden ist."),
 A("Geschwüriger Alembik",4,"Eigenschaft","Du kannst zwei alchemistische Komponenten schlucken und sicher in deinem Magen halten. Du kannst sie nach Wahl innerlich zusammenbrauen und sofort von den Ergebnissen profitieren oder die entstandene Lösung ausspucken."),
 A("Die alten Wege",2,"Eigenschaft","Erhöhe die Wucht beim Zusammenbrauen, wenn du nur Knochen, Organe oder Insektenteile als Komponenten nutzt."),
 A("Stößelschlag",3,"Eigenschaft","Nutze eine Aufgabe, um eine Probe zu einem Pulver zu mahlen, ihre Form in Staub oder Salz zu ändern und ihr den Marker „Rein“ zu geben."),
 A("Grundlinie",3,"Eigenschaft","Markiere, um kurz alle positiven oder negativen Effekte eines temporären Vorteils oder einer Verletzung zu ignorieren. Du bist immer immun gegen die negativen Wirkungen von Crezzerin."),
 A("Benebelnde Dämpfe",2,"Eigenschaft","Markiere, um über eine Frage nachzusinnen und eine verwirrende, aber zutreffende Antwort zu erhalten. Brenne stattdessen, um sofortige Klarheit über diese Antwort zu erhalten."),
 A("Chemikinese",3,"Eigenschaft","Markiere, um unreine Flüssigkeiten schweben zu lassen und zu steuern."),
 A("Verstoffwechseln",2,"Eigenschaft","Verbrauche eine Probe, um einen kurzen Schwall Sinnesinformationen zur verbrauchten Probe zu erhalten (etwa Erschütterungssinn durch den Verzehr eines Spinnennetzes)."),
 A("Katalysatorgürtel",3,"Ausrüstung","Ein schwerer Arbeitsgurt mit erprobten Reagenzien und Katalysatoren. Markiere, um beim Zusammenbrauen eine Chemikalie aus dem Gürtel anstelle einer Probe zu nutzen."),
 A("Sprengfläschchen",3,"Ausrüstung","Kein endloser Vorrat, aber wirkungsvoll und desorientierend. Markiere, um mehreren nahen Feinden FK-Explosions-, Salz-, Säure- oder Gift-Schaden zuzufügen."),
 A("Verdünnungsmittel",2,"Ausrüstung","Wenn du ein Gebräu herstellst, kann die gesamte Crew dessen Vorteil als temporären Aspekt mit 1er-Leiste erhalten."),
 A("Druckversiegelte Verbindung",2,"Ausrüstung","Konflikte zählen als Triumphe, wenn du mindestens eine Flüssigkeit als Ressource für ein Gebräu nutzt."),
 A("Beschleunigerfläschchen",3,"Ausrüstung","Einmal pro Reise kannst du während einer Montage ein Gebräu herstellen, ohne dafür deine übliche Aufgabe zu verwenden (du musst aber weiterhin wie üblich würfeln, um das Gebräu herzustellen)."),
 A("Lebende Flüssigkeit",2,"Gefährte","Windet sich um deine Gestalt, gespickt mit zerbrochenem Glas. Verursacht NK-Säure- oder Scharf-Schaden."),
 A("Syringiomücke",4,"Gefährte","Ein winziges alchemistisches Konstrukt, entworfen, um unbemerkt Flüssigkeiten aufzunehmen und abzusaugen.")
 ],H.kit("Alchemist als Posten",[
  ["Stärke (wähle 1)","Anmut, Schärfe, Gezeiten"],
  ["Fertigkeiten & Sprachen (wähle 5) – Fertigkeiten","Abfangen, Zerschlagen, Zusammenbrauen, Ernten, Bergen, Studieren, Pflegen"],
  ["Fertigkeiten & Sprachen – Sprachen","Highvin, Brasstongue"],
  ["Ressourcen (wähle 2) – Bergegut","Beutel Fläschchen, Rostextrakt"],
  ["Ressourcen – Proben","Getrocknete Heuschrecken, Drachenzungenwurzel, Bestienblut, Giftdrüsen"],
  ["Ressourcen – Flüstern","Ein befleckter Snapograph"],
  ["Ressourcen – Seekarten","Eine Geschichte erstickender Nebel"],
  ["Antrieb (wähle 1)","Eine bislang unbekannte alchemistische Wirkung entdecken · Galle eines uralten Leviathans sammeln"],
  ["Morast (wähle 1)","Du bist das perfekte Testobjekt für dein eigenes Werk · Sprengstoffe sind in deiner Nähe instabil"]]),
 [H.q("Kunst oder Wissenschaft, Lernen oder Eingebung, arkonautische Macht oder natürliche Kraft … das sind die Gegensätze, von denen du dich lösen musst, um die Grundlagen der Alchemie wirklich zu schätzen.","Ix Jaspero, Ardent-Alchemist")])});
L.push({id:"char", k:K, t:"Char", p:130, b:[
 {a:"Für einen Char ist die Wildsea eine endlose neue Grenze voller Aufregung und Entdeckung … zumindest in kulinarischer Hinsicht.\nWann immer du etwas Köstliches riechst, steckt mit guter Wahrscheinlichkeit ein Char dahinter. Chars sind irgendwo zwischen Koch und Überlebenskünstler, mit einem Schuss Heiler und Weinbauer obendrauf.\nViele Chars haben keine formale Ausbildung, sondern probieren jahrelang, bis sie eine Reihe von Geschmackskombinationen gefunden haben, die ihren eigenen Vorlieben entsprechen. Ein kostbares Häuflein schafft es, bei einem der alten Kochmeister zu lernen und seine patentierten Rezepte über die See zu verbreiten."},
 {c:"Der Wert der Vorbereitung", x:"Manche würden argumentieren, dass die Wildsea genug Essbares in ausreichender Vielfalt bietet, dass ein geschickter Koch bei der Anheuerung eines Schiffs kaum mehr als ein Nachgedanke wäre. Weit gefehlt – abgesehen von den offensichtlichen Vorteilen für Geschmack und Darbietung, die ein Char bringt, wirken seine grundlegendsten Techniken und Gewürzmischungen den niedrigen Crezzerin-Werten in den meisten Wildsea-Fleisch- und Pflanzenprodukten entgegen. Das führt zu besserer Gesundheit, besserem Schlaf, glücklicheren Crews und produktiveren Schiffen."},
 {c:"Essen ohne Flamme", x:"Kochfeuer sind, wie zu erwarten, auf den rauschenden Wellen eine Seltenheit … aber Fleisch muss braten und Tee muss ziehen, also haben Chars verschiedene Wege um diese Einschränkung gefunden. Manche meiden Hitze ganz und konzentrieren sich auf Salze und Einlegen, Gewürzrubs und Sonnentrocknung. Andere behandeln den Maschinenraum als Erweiterung der Kombüse und nutzen Motorwärme und -druck anstelle echter Flamme. Die Abenteuerlustigsten experimentieren mit abgerichteten Glühkäfern, chemischen Kochplatten und destilliertem Sonnenlicht."},
 H.fragen("des Chars",["Hast du ein Signaturgericht, und wenn ja, wie wird es zubereitet?","Keine Kombüse läuft zu 100 % reibungslos – was geschah, als du zuletzt die falsche kulinarische Entscheidung getroffen hast?","Hattest du je den Luxus, über offenem Feuer zu kochen? Wenn ja, wie fühlte es sich an? Wog der entstandene Geschmack die Gefahr auf?"]),
 {c:"Alternative Darstellungen", x:"Es gibt viele Wege, die ein Char gehen könnte und die deutlich vom „Schiffskoch“ abweichen. Ein Char könnte ein besessener Feinschmecker sein, ein reisender Metzger oder Zerlegestationen-Arbeiter oder sogar eine Art Wildsea-Konditor, der sich mehr auf Geschmack und Darbietung als auf den Nutzen seiner Schöpfungen konzentriert."}
 ].concat(H.aspHead(),[
 A("Nur das Beste",2,"Eigenschaft","Markiere beim Sammeln einer Probe, um ihr den Marker „Rein“ zu geben."),
 A("Zutaten-Sammler",3,"Eigenschaft","Wenn einer deiner Crewkameraden eine möglicherweise köstliche Probe erwirbt, erhalte eine Kopie dieser Probe für dich (einmal pro Szene)."),
 A("Goldene Nase",4,"Eigenschaft","Markiere, um allein am Geruch eine seltene Zutat in deiner Nähe zu erkennen."),
 A("Reiche Entdeckung",3,"Eigenschaft","Wann immer du einen neuen Ort entdeckst, wähle eine einzelne Probenart, die dort leicht zu finden ist."),
 A("Tief im Fass",3,"Eigenschaft","Erhöhe die Wucht beim Kochen mit verfaulten oder anderweitig verdorbenen Zutaten. Mahlzeiten aus diesen Zutaten machen deine Crew nicht krank."),
 A("Genug für alle",2,"Eigenschaft","Selbst eine kleine Mahlzeit kann ihren Vorteil als temporären Aspekt mit 1er-Leiste für die gesamte Crew bieten."),
 A("Geschmackstest",4,"Eigenschaft","Du bist immun gegen Gifte und kannst ihre Anwesenheit und Eigenschaften allein am Geschmack bestimmen."),
 A("Geschmacksingenieur",3,"Eigenschaft","Du kannst beim Zubereiten von Mahlzeiten Bergegut als Proben behandeln. Die Ergebnisse sind seltsamerweise trotzdem essbar."),
 A("Säuregeätzter Kochtopf",5,"Ausrüstung","Ein gewichtiger Topf nahezu unzerbrechlicher Bauart, genutzt zum Zubereiten und Lagern von Essen oder um sich in einer angespannten Situation darunter zu verstecken."),
 A("Mechanische Mühle",3,"Ausrüstung","Verbrauche eine zusätzliche Probe, um eine haltbare Mahlzeit als Aktion (statt der üblichen Aufgabe) herzustellen."),
 A("Gewürzbandelier",3,"Ausrüstung","Ein Bandelier mit deiner eigenen geheimen Gewürzmischung, die nie auszugehen scheint. Markiere, um eine seltene Ressource zu erschaffen: entweder Wildnispfeffer, Henkersmischung oder Glimmgrütze."),
 A("Markenzeichen-Kräuter",4,"Eigenschaft","Die richtige Würzung kann alles gut schmecken lassen. Markiere, um Konflikt-Ergebnisse beim Kochen als Triumphe zu behandeln."),
 A("Gewürztes Hackbeil",2,"Ausrüstung","Auf dem Schlachtfeld so nützlich wie in der Kombüse. Verursacht NK-Hieb-Schaden. Erhöhe die Wucht beim Erwerben gefährlicher oder störender Proben."),
 A("Riffeisen-Pfanne",4,"Ausrüstung","Ein kolossales Gerät. Verursacht NK-Stumpf-Schaden."),
 A("Hülsenleder-Schürze",3,"Ausrüstung","Du bist widerstandsfähig gegen drei Schadensarten, gewählt aus dieser Liste: Gift, Säure, Explosion, Salz, Flamme."),
 A("Sous-Eichhörnchen",2,"Gefährte","Ein rotpelziges Bündel Betriebsamkeit. Erhalte einmal pro Montage eine gewöhnliche, für die Region passende Insektenprobe (zusätzlich zu deiner üblichen Aufgabe).")
 ],H.kit("Char als Posten",[
  ["Stärke (wähle 1)","Instinkt, Zähne, Gezeiten"],
  ["Fertigkeiten & Sprachen (wähle 5) – Fertigkeiten","Zusammenbrauen, Kochen, Glänzen, Ernten, Jagen, Beeinflussen, Pflegen"],
  ["Fertigkeiten & Sprachen – Sprachen","Brasstongue, Raka Spit"],
  ["Ressourcen (wähle 2) – Bergegut","Kochfässer, Heizelement"],
  ["Ressourcen – Proben","Heilkräuter, Ferne Meeresgewürze"],
  ["Ressourcen – Flüstern","Dieser zarte Geschmack, Verbotenes Essen"],
  ["Ressourcen – Seekarten","Ein kommentiertes Kochbuch, Eine gewürzbefleckte Karte"],
  ["Antrieb (wähle 1)","Ein Bankett für die Würdigen bereiten · Eine wirklich einzigartige Zutat ernten"],
  ["Morast (wähle 1)","Früchte, die du sammelst, verrotten und versauern in ihren Gläsern · Dein Geschmackssinn wird unwürdig"]]),
 [H.q("Meine Rezepte teilen? Ohne Zögern – nicht was in den Topf kommt, macht die Mahlzeit, sondern wer es hineintut.","Clattershot, Ironbound-Char")])});
})(WS_NACH.charaktere);
