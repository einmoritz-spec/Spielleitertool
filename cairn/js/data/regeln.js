/* Cairn – Regeln (Spielerhandbuch S. 62–67) */
CN.add("regeln", {id:"grundregeln", t:"Grundregeln", p:62, b:[
 {t:"h", x:"Eigenschaften"},
 "Jede der drei Eigenschaften wird in unterschiedlichen Situationen genutzt (siehe Rettungswürfe).",
 {t:"stats", x:[
  ["Stärke (STÄ)", "", "Für Rettungswürfe, die körperliche Kraft erfordern: Tore heben, Gitter verbiegen, Gift widerstehen usw."],
  ["Geschicklichkeit (GES)", "", "Für Rettungswürfe, die Gleichgewicht, Tempo, Reflexe, Ausweichen, Klettern, Schleichen, Balancieren usw. erfordern."],
  ["Willenskraft (WIL)", "", "Für Rettungswürfe, um zu überzeugen, zu täuschen, zu verhören, einzuschüchtern, zu bezaubern, zu provozieren, zu manipulieren, Zauber zu handhaben usw."]
 ]},
 {t:"h", x:"Rettungswürfe"},
 {t:"ul", x:["Ein Rettungswurf ist ein Wurf, um negative Folgen riskanter Entscheidungen zu vermeiden. Charaktere würfeln einen W20 und vergleichen das Ergebnis mit der passenden Eigenschaft. Ein Wurf **gleich oder unter** der Eigenschaft ist ein Erfolg, sonst ein Misserfolg. Eine 1 ist immer ein Erfolg, eine 20 immer ein Misserfolg.","Wollen zwei Gegner einander überwinden, würfelt, wer am stärksten gefährdet ist.","Müssen zwei Charaktere gemeinsam handeln, würfelt, wer am stärksten gefährdet ist (meist der Charakter mit dem niedrigsten relevanten Wert)."]},
 {t:"h", x:"Heilung & Erholung"},
 {t:"ul", x:["Ein paar Augenblicke Ruhe und ein Schluck Wasser stellen verlorene TS wieder her, können die Gruppe aber ungeschützt lassen. Verbandszeug kann einen Charakter nach kritischem Schaden stabilisieren.","Eigenschaftsverlust (siehe Kritischer Schaden) lässt sich meist mit einer Woche Ruhe wiederherstellen, unterstützt von einem Heiler oder einer anderen geeigneten Quelle.","Manche Heilleistungen sind kostenlos, während magische oder schnellere Mittel der Erholung etwas kosten können."]},
 {t:"h", x:"Mangel & Erschöpfung"},
 {t:"ul", x:["Ein SC, dem ein entscheidendes Bedürfnis fehlt (wie Nahrung oder Schlaf), ist **im Mangel**. Wer länger als einen Tag im Mangel ist, fügt seinem Inventar Erschöpfung hinzu, eine für jeden Tag. Ein SC im Mangel kann keine TS, Eigenschaften oder Inventarplätze von Erschöpfung zurückgewinnen.","Ein SC kann auch gezwungen sein, nach dem Zaubern oder durch Ereignisse in der Fiktion Erschöpfung hinzuzufügen. Jede Erschöpfung belegt einen Platz und hält an, bis sich der SC erholen kann (etwa mit einer vollen Nacht Ruhe an einem sicheren Ort).","Muss ein Charakter Erschöpfung hinzufügen, hat aber keinen freien Platz, muss er einen Gegenstand aus dem Inventar ablegen."]},
 {t:"h", x:"Rüstung"},
 {t:"ul", x:["Ziehe vor der Berechnung des Schadens an den TS den Rüstungswert des Ziels vom Ergebnis der Schadenswürfe ab.","Schilde und ähnliche Rüstung gewähren einen Verteidigungsbonus (z. B. +1 Rüstung), aber nur, solange der Gegenstand gehalten oder getragen wird. Manche haben je nach Fiktion zusätzliche Vorteile.","Ein SC, NSC oder Monster kann nicht mehr als 3 Rüstung haben."]},
 {t:"h", x:"Reaktionen"},
 "Trifft die Gruppe auf einen NSC, dessen Reaktion nicht offensichtlich ist, kann die Spielleitung 2W6 würfeln und diese Tabelle befragen:",
 {t:"tbl", head:["2","3–5","6–8","9–11","12"], rows:[["Feindselig","Argwöhnisch","Neugierig","Freundlich","Hilfsbereit"]]},
 {t:"h", x:"Moral"},
 {t:"ul", x:["Gegner müssen einen WIL-Rettungswurf bestehen, um nicht zu fliehen, wenn sie ihr erstes Opfer erleiden und erneut, wenn sie die Hälfte ihrer Zahl verlieren.","Manche Gruppen benutzen die WIL ihres Anführers statt ihrer eigenen. Einzelne Gegner müssen würfeln, wenn sie auf 0 TS reduziert werden.","Moral betrifft SC nicht."]},
 {t:"h", x:"Gefolge"},
 {t:"ul", x:["Abenteuergruppen können Gefolge anwerben und sich auf deren besondere Fertigkeiten, Kenntnisse und Ausbildung bei Expeditionen verlassen.","Um einen Gefolgsmann zu erschaffen, wähle eine passende Rolle aus der Gefolge-Tabelle im Marktplatz (S. 17–18). Würfle 3W6 für jede Eigenschaft und 1W6 für den TS. Gib ihm der Stellung entsprechende Ausrüstung und würfle dann auf den Merkmals-Tabellen, um ihn weiter auszugestalten.","Alternativ wähle einen passenden Hintergrund und Namen aus der Charaktererschaffung. Würfle (oder wähle) auf den Tabellen für diesen Hintergrund. Würfle dann für Proviant, Goldmünzen, Eigenschaften, TS und Alter."]},
 {t:"h", x:"Schicksalswürfel"},
 {t:"ul", x:["Optional: Würfle 1W6, wann immer der Ausgang eines Ereignisses ungewiss ist oder um ein Element von Zufall und Glück zu simulieren.","Eine 4 oder mehr begünstigt in der Regel die SC, während eine 3 oder weniger meist Pech für die SC bedeutet."]}
]});

CN.add("regeln", {id:"kampf", t:"Kampf", p:64, b:[
 {t:"h", x:"Runden"},
 {t:"ul", x:["Eine Runde dauert etwa zehn Sekunden Spielzeit; die Seiten sind abwechselnd am Zug. Jede Runde beginnt mit allen SC, die handeln können, gefolgt von ihren Gegnern. Die Ergebnisse der Aktionen jeder Seite treten gleichzeitig ein.","In der ersten Kampfrunde muss jeder SC einen GES-Rettungswurf bestehen, um zu handeln. Besondere Umstände, Fähigkeiten, Gegenstände oder Fertigkeiten können diese Anforderung aufheben. SC, die ihren Wurf nicht bestehen, verlieren ihren Zug in dieser Runde.","Danach sind die Gegner am Zug, und die erste Runde endet. Die nächste Runde beginnt mit den SC, gefolgt von den Gegnern usw., bis der Kampf mit der Niederlage oder Flucht einer Seite endet."]},
 {t:"h", x:"Aktionen"},
 "Am Zug darf ein Charakter sich bis zu 12 m bewegen und bis zu eine Aktion ausführen. Das kann Zaubern, Angreifen, eine zweite Bewegung oder eine andere vernünftige Aktion sein. In jeder Runde erklären die SC, was sie tun, bevor gewürfelt wird. Versucht ein Charakter etwas Riskantes, verlangt die Spielleitung einen Rettungswurf von den passenden Spielenden oder NSC.",
 {t:"h", x:"Angreifen & Schaden"},
 {t:"ul", x:["Der Angreifer würfelt seinen Waffenwürfel, zieht die Rüstung des Ziels ab und fügt den Rest den TS des Gegners zu. Angriffe im Kampf treffen automatisch.","Greifen mehrere Angreifer dasselbe Ziel an, würfle alle Schadenswürfel und behalte nur das höchste Ergebnis. Alle Aktionen werden vor der Auflösung erklärt.","Würde ein Angriff die TS eines SC genau auf 0 bringen, schlage auf der Tabelle der *Narben* (S. 66) nach, wie er einzigartig betroffen ist."]},
 {t:"h", x:"Angriffsmodifikatoren"},
 {t:"ul", x:["Wird aus einer Position der Schwäche gekämpft (etwa durch Deckung oder mit gefesselten Händen), ist der Angriff **geschwächt**, und der Angreifer würfelt unabhängig vom Schadenswürfel der Waffe 1W4 Schaden. Unbewaffnete Angriffe verursachen immer 1W4 Schaden.","Wird aus einer Position des Vorteils gekämpft (etwa gegen einen hilflosen Gegner oder durch ein kühnes Manöver), ist der Angriff **verstärkt** und erlaubt dem Angreifer, 1W12 Schaden statt seines normalen Würfels zu würfeln.","Angriffe mit der Eigenschaft **Streuschaden** treffen alle Ziele im genannten Bereich, wobei für jeden betroffenen Charakter einzeln gewürfelt wird. Das kann alles sein, von Explosionen über den Atem eines Drachen bis zum Einschlag eines Meteoriten. Ist unklar, wie viele Ziele betroffen sein können, würfle den zugehörigen Schadenswürfel für ein Ergebnis.","Wird mit zwei Waffen gleichzeitig angegriffen, würfle beide Schadenswürfel und behalte nur das höchste Ergebnis (geschrieben mit Pluszeichen, z. B. W8+W8)."]},
 {t:"h", x:"Kritischer Schaden"},
 {t:"ul", x:["Schaden, der die TS eines Ziels unter null senkt, wird in Höhe des Restschadens von seiner STÄ abgezogen. Das Ziel muss dann sofort einen STÄ-Rettungswurf mit seiner neuen STÄ bestehen, um kritischen Schaden zu vermeiden. Bei Erfolg bleibt das Ziel (wenn auch mit niedrigerer STÄ) im Kampf und muss bei weiterem Schaden weitere Rettungswürfe auf kritischen Schaden machen.","Jeder SC, der kritischen Schaden erleidet, kann nur noch schwach kriechen und nach Leben greifen. Mit Hilfe (etwa Verbandszeug) stabilisiert er sich. Unbehandelt stirbt er innerhalb der Stunde. NSC und Monster, die einen Rettungswurf auf kritischen Schaden nicht bestehen, gelten nach Ermessen der Spielleitung als tot. Zudem haben manche Gegner besondere Fähigkeiten oder Effekte, die ausgelöst werden, wenn ihr Ziel einen Rettungswurf auf kritischen Schaden nicht besteht."]},
 {t:"h", x:"Eigenschaftsverlust"},
 {t:"ul", x:["Wird die STÄ eines SC auf 0 gesenkt, stirbt er. Wird die GES auf 0 gesenkt, ist er gelähmt. Wird die WIL auf 0 gesenkt, ist er benommen. Vollständiger GES- und WIL-Verlust macht den Charakter handlungsunfähig, bis er durch längere Ruhe oder außergewöhnliche Mittel wiederhergestellt wird.","Erleidet ein SC Schaden außerhalb des Kampfes, erhält er stattdessen Schaden an einer Eigenschaft, in der Regel der STÄ."]},
 {t:"h", x:"Tod eines Charakters"},
 "Stirbt ein Charakter, sollte die spielende Person einen neuen Charakter erschaffen oder einen Gefolgsmann übernehmen. Er stößt sofort zur Gruppe, um Ausfallzeit zu verringern.",
 {t:"h", x:"Abteilungen"},
 {t:"ul", x:["Große Gruppen ähnlicher Kämpfer, die gemeinsam kämpfen, werden als eine einzelne **Abteilung** behandelt. Erleidet eine Abteilung kritischen Schaden, wird sie zerstreut oder deutlich geschwächt. Bei 0 STÄ ist sie vernichtet.","Angriffe von Einzelnen gegen Abteilungen sind geschwächt (ausgenommen Streuschaden).","Angriffe von Abteilungen gegen Einzelne sind verstärkt und verursachen Streuschaden."]},
 {t:"h", x:"Rückzug"},
 "Vor einer bedrohlichen Lage zu fliehen erfordert stets einen erfolgreichen GES-Rettungswurf sowie ein sicheres Ziel, zu dem man rennen kann.",
 {t:"h", x:"Fernangriffe"},
 {t:"ul", x:["Fernwaffen können jeden Feind angreifen, der nahe genug ist, um das Weiße in seinen Augen zu sehen. Angriffe gegen besonders weit entfernte Ziele sind geschwächt.","Munition wird nicht gezählt, sofern nichts anderes angegeben ist."]}
]});

CN.add("regeln", {id:"narben", t:"Narben", p:66, b:[
 "Würde Schaden die TS eines SC auf genau 0 senken, schlage das Ergebnis in der folgenden Tabelle nach, anhand der im Angriff verlorenen TS. Ging ein SC zum Beispiel von 3 TS auf 0 TS, schaut er auf Eintrag 3 (Gerädert).",
 {t:"d", h:"Wie viele TS hast du verloren?", die:"TS", rows:[
  ["1","Bleibende Narbe","Würfle 1W6 | 1: Hals, 2: Hände, 3: Auge, 4: Brust, 5: Beine, 6: Ohr. Würfle 1W6. Ist die Summe höher als deine maximalen TS, nimm das neue Ergebnis."],
  ["2","Erschütternder Schlag","Du bist verwirrt und durchgeschüttelt. Beschreibe, wie du dich wieder sammelst. Würfle 1W6. Ist die Summe höher als deine maximalen TS, nimm das neue Ergebnis."],
  ["3","Gerädert","Du wirst durch die Luft geschleudert und landest atemlos auf dem Gesicht. Du bist im Mangel, bis du ein paar Stunden geruht hast. Würfle dann 1W6 und addiere diesen Betrag zu deinen maximalen TS."],
  ["4","Gebrochenes Glied","Würfle 1W6 | 1–2: Bein, 3–4: Arm, 5: Rippe, 6: Schädel. Würfle nach der Heilung 2W6. Ist die Summe höher als deine maximalen TS, nimm das neue Ergebnis."],
  ["5","Krank","Du bist von einer ekligen, unangenehmen Infektion befallen. Wenn du sie überstanden hast, würfle 2W6. Ist die Summe höher als deine maximalen TS, nimm das neue Ergebnis."],
  ["6","Neuordnende Kopfwunde","Würfle 1W6 | 1–2: STÄ, 3–4: GES, 5–6: WIL. Würfle 3W6. Ist die Summe höher als deine aktuelle Eigenschaft, nimm das neue Ergebnis."],
  ["7","Gelähmte Sehnen","Du kannst dich kaum bewegen, bis du ernsthafte Hilfe und Ruhe bekommst. Würfle nach der Erholung 3W6. Ist die Summe höher als deine maximale GES, nimm das neue Ergebnis."],
  ["8","Taub","Du kannst nichts hören, bis du außergewöhnliche Hilfe findest. Mache trotzdem einen WIL-Rettungswurf. Bei Erfolg steigt deine maximale WIL um 1W4."],
  ["9","Umgehirnt","Ein verborgener Teil deiner Psyche wird freigeschlagen. Würfle 3W6. Ist die Summe höher als deine maximale WIL, nimm das neue Ergebnis."],
  ["10","Zerschlagen","Ein Körperteil wird abgerissen, verkrüppelt oder nutzlos (die Spielleitung sagt dir, welcher). Mache dann einen WIL-Rettungswurf. Bei Erfolg steigt deine maximale WIL um 1W6."],
  ["11","Tödliche Wunde","Du bist im Mangel und außer Gefecht. Du stirbst in einer Stunde, wenn du nicht geheilt wirst. Würfle nach der Genesung 2W6. Nimm das neue Ergebnis als deine maximalen TS."],
  ["12","Verdammt","Der Tod schien so nah, doch irgendwie hast du überlebt. Misslingt dein nächster Rettungswurf gegen kritischen Schaden, stirbst du einen grässlichen Tod. Bestehst du ihn, würfle 3W6. Ist die Summe höher als deine maximalen TS, nimm das neue Ergebnis."]
 ]}
]});

CN.add("regeln", {id:"magie", t:"Magie", p:67, b:[
 {t:"h", x:"Zauberbücher"},
 {t:"ul", x:["Zauberbücher enthalten einen einzigen Zauber und belegen einen Platz. Sie lassen sich nicht leicht abschreiben oder herstellen; stattdessen findet man sie an Orten wie Gräbern, Dungeons und Herrenhäusern.","Zauberbücher zeigen manchmal ungewöhnliche Eigenschaften oder Einschränkungen: etwa einen üblen oder überirdischen Geruch beim Öffnen, eine angeborene Intelligenz oder dass sie nur im Mondlicht lesbar sind.","Zauberbücher ziehen die Aufmerksamkeit jener auf sich, die die darin liegende arkane Macht suchen, und es gilt als gefährlich, sie offen zu zeigen."]},
 {t:"h", x:"Zauber wirken"},
 {t:"ul", x:["Jeder kann einen Zauber wirken, indem er ein Zauberbuch mit beiden Händen hält und seinen Inhalt laut liest. Danach muss er seinem Inventar eine Erschöpfung hinzufügen.","Mit Zeit und Sicherheit können SC die Wirkung eines Zaubers ohne zusätzliche Kosten verstärken (z. B. mehrere Ziele betreffen, Kraft erhöhen usw.).","Ist der SC im Mangel oder in Gefahr (etwa im Kampf), kann die Spielleitung einen WIL-Rettungswurf verlangen, um schädliche Nebenwirkungen des Zaubers zu vermeiden. Die Folgen eines Fehlschlags stehen im Verhältnis zur beabsichtigten Wirkung und können zusätzliche Erschöpfung, die Zerstörung des Zauberbuchs, Verletzung und sogar den Tod umfassen."]},
 {t:"h", x:"Schriftrollen"},
 "Schriftrollen ähneln Zauberbüchern, jedoch:",
 {t:"ul", x:["sind sie winzig.","verursachen sie keine Erschöpfung.","verschwinden sie nach einmaliger Verwendung."]},
 {t:"h", x:"Relikte"},
 "Relikte sind Gegenstände, die mit einem magischen Zauber oder einer Macht erfüllt sind. Sie verursachen keine Erschöpfung. Relikte haben meist begrenzte Verwendungen sowie eine Aufladebedingung."
]});
