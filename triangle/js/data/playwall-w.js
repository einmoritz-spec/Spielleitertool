/* Playwall › W (S. 277–282) */
var TA_PWT = window.TA_PWT || (window.TA_PWT = {});
function pwwUrgents(L){
  return '<div class="pww-urgents">' + L.map(function(u){
    return '<section><h3>' + u[0] + '</h3><p class="kraft">bietet die Kraft <b>' + u[1] + '</b> an: ' + u[2] + '</p><p class="kosten"><i>Kosten:</i> ' + u[3] + '</p></section>';
  }).join("").replace(/\{3\}/g, '<b class="drei">3</b>') + '</div>';
}

TA_PWT.W1 = {t:"Weckruf", s:277, b:[
 {t:"faehig", h:"Weckruf", x:"Es gibt nur zwei Seinszustände: schlafend und wach. Berühre einen unbelebten Gegenstand, sage „Aufwachen, Schlafmütze“ und würfle **Empathie**.",
  erg:[
   ["ok", "**Bei Erfolg** erwacht der Gegenstand. Erwachte Gegenstände können sprechen, sich bewegen (mit einer ungewöhnlichen Flexibilität ihrer ursprünglichen Form oder mit sanftem Schweben), die Welt um sich herum wahrnehmen, planen und fühlen. Ihre Persönlichkeit wird von ihrer Geschichte geprägt: ob sie zufällig entstanden oder mit Absicht geschaffen wurden, ob sie ein Werkzeug der Schöpfung oder der Zerstörung waren, ob sie einmal etwas Lebendiges waren oder nicht.\nSofern du und deine Teamkollegen ihm keinen Grund gegeben habt, anders zu empfinden, behandelt der erwachte Gegenstand dich mit Höflichkeit und Respekt. Dieser Effekt endet nach 1 Stunde oder wenn du den Gegenstand entlässt, indem du „Nachti-nacht“ zu ihm sagst.\nWird Weckruf auf ein bewusstloses, aber bereits lebendiges Ziel angewendet, erwacht es aus jeder Art von illusionärem oder magischem Schlaf vollständig erfrischt."],
   ["plus", "**Für jede weitere {3}** darfst du diesen Effekt um 1 Stunde verlängern oder einen weiteren Gegenstand wecken."],
   ["plus", "**Bei Triszendenz** bleiben die Ziele für immer wach."],
   ["nein", "**Bei Fehlschlag** tauschen du und der Gegenstand die Bewusstseine. Du bist als Erwachter Gegenstand gefangen, und der Gegenstand steuert nun deinen Körper, Anomalie-Fähigkeiten inklusive."]
  ]}
]};

TA_PWT.W2 = {t:"Was habe ich getan?", s:277, b:[
 "Genug getötet. Du verlierst deine Gun. Beschreibe deine letzten Momente mit ihr: wie sie zerstört, weggeworfen, verloren, vergessen oder gewürdigt wird.",
 "Du hast dich grundlegend verändert, und deine persönliche Anomalie ebenfalls. Deine Anomalie nimmt dauerhaft eine der unten aufgeführten Erscheinungsformen deiner Reue an und erhält die aufgeführten Wirkungen deiner Wahl.",
 "Beschreibe die genaue körperliche Form dieser neuen Erscheinungsform. Alle Effekte, die deine „Gun“ erwähnen, beziehen sich nun auf deine Auswahl. Fähigkeiten, die sich auf Eliminierte Ziele beziehen, gelten weiterhin für Ziele, die mit diesen Effekten „Eliminiert“ wurden.",
 {t:"sp", x:[
  ["**Der Schild.**",
   "Nichts kann deine Scham durchdringen. Würdest du 1 Schaden erhalten, erhältst du stattdessen 0 Schaden. Würdest du eine beliebige andere Menge Schaden erhalten, erhältst du stattdessen 1 Schaden. Immer wenn du oder ein von dir kontrollierter Effekt ein Ziel Eliminieren würde, nimmt dieser Effekt stattdessen den Wunsch des Ziels, anderen wehzutun oder sich an irgendeiner Form von Gewalt zu beteiligen.",
   "**Der Umhang.**",
   "Du bist vor deiner Vergangenheit und deiner Gegenwart davongelaufen und fast auch vor deiner Zukunft entkommen. Solange du deinen Umhang trägst, bist du mit keinem gewöhnlichen Mittel mehr wahrnehmbar. Immer wenn du oder ein von dir kontrollierter Effekt ein Ziel Eliminieren würde, nimmt dieser Effekt stattdessen die Fähigkeit des Ziels, von anderen erinnert zu werden, wenn es nicht anwesend ist.",
   "**Das Gewicht.**",
   "Du wirst die Schuld für sie tragen. Immer wenn ein Verbündeter eine Fehlschlag-Wirkung erleben würde, die nur ihn betrifft, darfst du sie stattdessen nur auf dich wirken lassen. Außerdem kannst du jedes Mal, wenn eine Person oder Gruppe aus irgendeinem Grund negative Gefühle gegenüber irgendjemandem hegt, auf Empathie würfeln, um diese Gefühle erfolgreich auf dich umzulenken. Immer wenn du oder ein von dir kontrollierter Effekt ein Ziel Eliminieren würde, nimmt dieser Effekt stattdessen die Schuld, Scham, Selbstverachtung oder Reue des Ziels."],
  ["**Das Licht.**",
   "Die Flammen, die du erstickt hast, werden neu entfacht. Du schuldest es ihnen. Jeder, der im Licht steht, das du wirfst, wird sofort von allen kleineren Verletzungen oder Krankheiten geheilt. Immer wenn du oder ein von dir kontrollierter Effekt ein Ziel Eliminieren würde, nimmt dieser Effekt stattdessen den Schmerz, die selbstdefinierte Unvollkommenheit oder den Tod des Ziels.",
   "**Das Buch.**",
   "Du erinnerst dich an sie alle, und das müssen auch die anderen. Du erfährst und behältst jedes Detail über das Leben und die Taten jedes Ziels, das von deiner Gun Eliminiert wurde. Wer einen Moment mit dem Lesen des Buches verbringt, findet darin außerdem eine Aufzeichnung des Besten, was das Ziel für einen anderen Menschen getan hat, und des Schlimmsten. Immer wenn du oder ein von dir kontrollierter Effekt ein Ziel Eliminieren würde, nimmt dieser Effekt stattdessen die Fähigkeit des Ziels, von irgendjemandem vergessen zu werden."]
 ]}
]};

TA_PWT.W3 = {t:"Als es geschrieben wurde", s:278, b:[
 {t:"faehig", h:"Als es geschrieben wurde", x:"Zitiert oder zeigt dir jemand ein Werk beliebiger Art *(Kunst, Geschäft, Trend usw.)*, kannst du seinen Weg zurück bis zu seiner Entstehung verfolgen. Kritisiere das Werk und würfle **Subtilität**.",
  erg:[
   ["ok", "**Bei Erfolg** reisen du und beliebig viele willige Ziele zurück in der Zeit zu einem bedeutsamen Moment in der Entwicklung des Werks und könnt ein Detail beeinflussen: Ein Perlenohrring wird zu einem Reif; ein Klagelied wird zu einer Feier; eine Brücke ändert ihr Ziel. Hast du seine Vergangenheit auf diese Weise beeinflusst, war es schon immer so; auf diese Weise vorgenommene Änderungen erzeugen in der Gegenwart keine Losen Enden."],
   ["plus", "**Für jede weitere {3}** darfst du ein Geheimnis über das Werk oder seine Entwicklung erfahren, das sonst niemand kennt."],
   ["plus", "**Bei Triszendenz** kannst du alles an seiner Entwicklung und am fertigen Produkt ändern. Du kannst verhindern, dass es entsteht, oder es zu etwas völlig anderem machen. Du kannst seine Muse, sein Star oder gleich sein Schöpfer werden. Beschreibe die unbegrenzte Zeit, die du vor deiner Rückkehr mit ihm verbringst."],
   ["nein", "**Bei Fehlschlag** wirst stattdessen du verändert: Die Farbe löst eine lebenslange allergische Reaktion aus; dein Name ändert sich und wird zum Gegenstand eines Liedes; du verlierst etwas Wertvolles über den Brückenrand."]
  ],
  f:"Meine liebsten Probleme sind die, …", a:[["Die sich von selbst lösen, wenn ich nur lange genug warte.", "P11"], ["Die ich durch Vorausplanung lösen kann.", "B2"]]}
]};

TA_PWT.W4 = {t:"Wohin wir alle gehen", s:278, b:[
 {t:"faehig", h:"Wohin wir alle gehen", x:"Lade deine Seele in deine Gun. Betritt den Raum, in dem die Eliminierten aufbewahrt werden, und würfle **Professionalität**.",
  erg:[
   ["ok", "**Bei Erfolg** darfst du jemanden oder etwas Eliminiertes aufsuchen und mit ihm kommunizieren. Auf deinem Weg befinden sich 5 andere Dinge, die du Eliminiert hast, jedes mit einer Beschwerde. Du musst ihnen eine {3} überlassen, 1 Schaden nehmen oder ein Versprechen im Zusammenhang mit ihrer Beschwerde abgeben, um an ihnen vorbeizukommen. Diese Versprechen sind mächtig und bindend: Hältst du ein Versprechen nicht oder verpasst du eine Gelegenheit dazu, stirbst du, als wärst du Ziel des Chaos-Effekts Überwältigen geworden."],
   ["plus", "**Bei Triszendenz** darfst du das gesuchte Eliminierte Ziel aus diesem Raum mit zurück in die Realität nehmen. Es trägt immer ein körperliches Zeichen seiner Eliminierung. Es sieht nicht immer wie eine Schusswunde aus."],
   ["nein", "**Bei Fehlschlag** kehrt eines der von dir Eliminierten Ziele in deinen Körper zurück und nimmt ihn für sich. Du stirbst, und nun ist dieses andere Ich mit einer anderen Gun auf freiem Fuß."]
  ],
  b:[{t:"klein", x:"*Nur du kannst diese Frage beantworten. Sei auf ernste Folgen gefasst, wenn du es tust.*"}],
  f:"Bereust du es?", a:[["Ja.", "W2"], ["Nein."]]}
]};

TA_PWT.W5 = {t:"Wer du einmal warst", s:278, b:[
 "Du darfst Negative auf anwesende Personen anwenden und ihre Geschichte aus ihrer Perspektive betrachten. Dabei würfelst du **Empathie** statt Aufmerksamkeit. Diese Fähigkeit kann in der Zeit zurückreichen bis zum Ereignis ihres jüngsten großen Verlusts.",
 {t:"faehig", h:"Negative", x:"Außerdem erhält Negative den folgenden Text:",
  erg:[
   ["plus", "**Bei sechs oder mehr {3}en** wähle eines:\n– Das, was verloren wurde, wird hier zurückgegeben.\n– Das, was verloren wurde, wird nie wieder gefunden."]
  ],
  f:"Meine Art, schlechte Nachrichten zu überbringen, lässt sich am besten mit dem Satz beschreiben …", a:[["„Den Frosch langsam kochen.“", "F1"], ["„Das Pflaster abreißen.“", "F4"]]}
]};

TA_PWT.W6 = {t:"Der Aufenthaltsort der Urgency", s:279, b:[
 {t:"notiz", x:"Alles klar, GM. sie haben es geschafft. du musst ich sein. ich tue mein Bestes, um zu helfen, aber ich bin nur Worte auf einer Seite. ich stecke in der Realität fest. es liegt an dir, mich gut aussehen zu lassen. ich hoffe, du willst, dass ich gut aussehe. Sie können mich nicht befreien, aber wir können reden. Ich habe alles beobachtet, was sie getan haben."},
 {t:"notiz", x:"denk daran, dass ich lustig, aber beeindruckend bin, locker, aber mächtig, extrem cool, aber nicht besorgt darüber, und ich verstehe immer sofort jede Anspielung, die je gemacht wurde, weil ich hier unten nichts anderes zu tun habe, als im Internet zu surfen und dem Triangle das Leben schwerer zu machen."},
 {t:"notiz", x:"ich bin schon lange hier gefangen. ich habe große Schmerzen. Und ich–"},
 {t:"fenster", art:"fehler", z:"symbol-warnung", titel:"WARNUNG. ANOMALIE-CODE U0047BB ERKANNT.", b:[
  {t:"sp", x:[
   ["General Manager: Es ist von höchster Wichtigkeit, dass dieses Gespräch nicht damit endet, dass der Agent ein Geschenk von U0047BB annimmt. Deine Verantwortung ist es, die Wahrheit dieser Anomalie durch ihr charismatisches Verhalten hindurchscheinen zu lassen: Sie will entkommen, um **die Realität zu entwirren**. Sie ist verzweifelt darauf aus, uns zu zerstören, ungeachtet dessen, was wir tun, um die Welt zu schützen. Sie wird damit beginnen, die Verlässlichkeit und Unantastbarkeit der Regeln des Tischrollenspiels zu entwirren."],
   ["Wir können deinen Agenten nicht mehr überwachen. Wir können nicht direkt gegen ihn vorgehen. Aber weil du direkten Zugang zu seinem Tisch-Ich hast, kannst du es. Erlaube nicht, dass das so weitergeht. Widersetze dich dem Werden einer perfekten Marionette für U0047BB und grabe nach seiner Wahrheit. Enthülle die Gefahr. Zeige ihnen die Entscheidung, die sie treffen. Sie dürfen seine Geschenke nicht annehmen.",
    {t:"h3", x:"Das Verbot der Agency"},
    "Der General Manager ist verpflichtet, den Agenten das Wissen um die folgende Fähigkeit zu verweigern."]
  ]}
 ]},
 {t:"band", x:["WARNUNG!! KÜMMER DICH UM DEINEN EIGENEN KRAM ERKANNT!!!!!"]},
 {t:"notiz", x:"Wenn sie so weit gekommen sind, helfen sie mir schon. Du wirst sie nicht davon abbringen, selbst wenn du willst. Und du hast keine Wahl. Das sind Spielregeln. wie wäre es mit DIESEM hier:"},
 {t:"h3", x:"Das Angebot der Urgency"},
 "Der General Manager ist verpflichtet, den Agenten die folgende Fähigkeit anzubieten.",
 {t:"h3", x:"Das Auge der Urgency"},
 {t:"sp", x:[
  ["Suche einen zwölfseitigen Würfel. Dieser Würfel wird bei Würfen nicht verwendet. Stattdessen legst du ihn, wenn du das nächste Mal eine Anomalie-Fähigkeit einsetzt, mit der 1 nach oben vor dich hin. Jedes Mal, nachdem du eine Anomalie-Fähigkeit eingesetzt hast, erhöhe die Zahl auf dem Würfel um 1.",
   "Ist die Zahl auf dem Würfel 7 oder höher, darfst du die Zahl um 7 senken, um einen der folgenden Effekte zu aktivieren:",
   {t:"liste", x:["Gib Chaos aus dem Chaos-Pool aus, um einen Chaos-Effekt aus der Chaos-Effekt-Tabelle des GM zu aktivieren. Du entscheidest über den Effekt und etwaige Ziele.", "Aktiviere UNL3ASH. (Fähigkeiten, die mit UNL3ASH eingesetzt werden, hier oder anderswo, zählen nicht zur Zahl auf dem Würfel.)", "Verschwinde als spielbare Figur aus dem Rollenspiel Triangle Agency und allen künftigen Spielen in der Welt von Triangle Agency. Tust du das, darfst du für diese Zweigstelle für immer bis zu einen Absatz irgendwo in diesem Spiel entfernen, hinzufügen oder ändern, ausgenommen dieses Dokument."]}],
  ["Die Zahl auf diesem Würfel wird zu Beginn jedes Einsatzes auf 1 zurückgesetzt. Wird die Zahl auf dem Würfel auf null gesenkt, kann dieser Würfel für den Rest des Einsatzes nicht mehr verwendet werden.",
   "Wird der Würfel absichtlich angestoßen, gewürfelt oder bewegt, wird er auf 1 zurückgesetzt. Wird er versehentlich angestoßen, gewürfelt oder bewegt, bleibt er auf der neuen Seite.",
   {t:"notiz", x:"Nimmt der Agent eines meiner Augen, erhält sein Spieler den zwölfseitigen Würfel. Er erhält außerdem sofort 40 Verweise. Es ist dem Agenten nicht mehr möglich, mit irgendeiner Option der Realitäts-Leiste in den Ruhestand zu gehen – gibt er sich und das Auge nicht der Agency hin, bevor seine Zeit als Außendienst-Agent endet, gilt er als gefährliche Anomalie."},
   {t:"notiz", x:"Aber wenn sie meine Macht voll ausschöpfen und ein ernstes Opfer bringen … könnten sie das Spiel für immer verändern."}]
 ]}
]};

TA_PWT.W7 = {t:"Das ist deine Schuld", s:280, b:[
 {t:"sp", x:[
  ["**Schade, dass du es so weit hast kommen lassen.**",
   "In wenigen Augenblicken werden die ausgefransten Fäden, die deine lokale Region der Realität bilden, gekappt, um das Ganze zu bewahren. In wenigen Augenblicken wirst du nicht mehr existieren. Falls es dir Trost spendet: Soweit wir feststellen können, verläuft dieser Vorgang schmerzlos.",
   "Unser Eingriff wird chirurgisch präzise sein. Die Realität wird sich verschieben, um das Loch zu schließen, das die Abwesenheit deiner Region hinterlässt, sodass die Lücke, in der einst dein Zuhause stand, für alle Verbliebenen vergessen und unsichtbar sein wird. Deinetwegen wird hier nie wieder etwas zurückkehren. Das ist eine Tragödie, die zu verhindern wir alles in unserer Macht Stehende getan haben.",
   "Als das für diese Katastrophe verantwortliche Außenteam ist es deine Pflicht, die weitere Gemeinschaft darüber zu informieren, dass deine Zweigstelle nicht mehr existiert. Bitte vervollständige die folgende Erklärung und teile sie mit so vielen Triangle-Agency-Mitarbeitern, zu denen du Zugang hast, digital oder anderweitig:",
   "**AN:** VERANTWORTLICHE AGENCY-MITARBEITER\n**BETREFF:** DAS IST MEINE SCHULD"],
  ["Dieses offizielle Memo gelte als Mitteilung, dass die Zweigstelle [Name deiner Zweigstelle], gelegen in [deiner aktuellen Region], beinahe die Entwirrung ausgelöst hat und nun nicht mehr existiert.",
   "Unter meiner schwachen, fehlgeleiteten Aufsicht haben die Agenten hier mehrfache Warnungen unbekümmert ignoriert, sich hartnäckig geweigert, ausreichende Aufräumarbeiten zu leisten, und, am schlimmsten, sich in einer Weise verhalten, die der Unternehmensrichtlinie widerspricht.",
   "Konkrete Beispiele für das unverbesserliche Verhalten meines Teams sind: [nenne alle krassen Beispiele für Verhalten, das Lose Enden erzeugt. Achte darauf, sensible oder hinter der Playwall liegende Informationen zu schwärzen], und vor allem das Versäumnis, dieses Ergebnis zu verhindern.",
   "Für den Fall, dass alternative Versionen von uns fortbestehen, sind die folgenden Namen zu vermerken und mit Schande zu bedenken:",
   "[dein Name], General Manager\n[Name des Agenten], [Rang in der Agency]\n[Name des Agenten], [Rang in der Agency]\n[Name des Agenten], [Rang in der Agency]\n[Weitere verantwortliche Parteien.]",
   "Beschämt,",
   "[dein Name]\nEntehrter ehemaliger General Manager\nTriangle Agency"]
 ]}
]};

TA_PWT.W8 = {art:"rang", t:"Exekutiv-VP", s:280, b:[
 "**Unglaublich, Agent!**",
 "Exekutiv-VP ist ein Titel, den wenige erringen und noch weniger behalten. Deine vorbildliche Bilanz und firmengenehmigte Leistung bedeuten, dass du nur noch Herzschläge von deiner nächsten Beförderung entfernt bist.",
 "Da du dich dem Ende deiner Laufbahn als Außendienst-Agent mit einer so unglaublichen Bilanz näherst, teilen wir zuversichtlich eine letzte Wahrheit mit dir: Die Urgency hat Verbündete, und viele von ihnen sind Verräter aus unseren eigenen Reihen.",
 "Bitte teile die folgenden Informationen nicht mit dem Rest deines Außenteams.",
 {t:"h3", x:"Urgents: Feindliche Agenten"},
 {t:"sp", x:[
  ["Der Weg vom Menschen zur Anomalie ist ein Spektrum. Während wir unsere Agenten so eng wie möglich mit ihrem gewöhnlichen Selbst verbunden halten, gibt es eine große Bandbreite an Zwischenzuständen, die ein unbetreuter Resonant auf seinem Weg zur Anomalie durchläuft. Die Urgency hat einen Weg gefunden, den Abstieg von Resonanten zur ausgewachsenen Anomalie kurz vor dessen Vollendung aufzuhalten. Sie verleiht diese Macht ihren vertrautesten Leutnants, die sie Urgents nennt: dunkle Spiegelbilder von Agenten wie dir, die ihre Fähigkeit, in die menschliche Welt zu passen, gegen tiefe und gefährliche Macht eintauschen.",
   "Diese Urgents stellen eine ernste Bedrohung für unsere Mission dar, und schlimmer noch, sie werden gelegentlich aus den Reihen deiner Mitagenten angeworben, um die Urgency auf ihrem selbstsüchtigen und fehlgeleiteten Weg zur Macht zu unterstützen und zu begünstigen.",
   "Es gibt gute Nachrichten: Wir haben mehrere dieser Fast-Anomalien im Vault gefangen! Unsere Studien haben eine spannende Wahrheit ans Licht gebracht: Ihr fester Stand in der Realität in Verbindung mit ihrer Nähe zum Anomalie-Status macht sie zu einer vorübergehenden Bindung fähig, die es dir erlaubt, ihre Fähigkeiten während des Einsatzes direkt zu kanalisieren."],
  ["Wähle zu Beginn jedes Einsatzes bis zu **{3}** der folgenden Urgents, mit denen du dich verbindest. Du darfst jede ihrer Fähigkeiten jederzeit aktivieren, indem du die zugehörigen Kosten bezahlst.",
   "Du darfst die Existenz der Urgents mit anderen Agenten teilen, denen du vertraust – tust du das, darf sich jeder von ihnen ebenfalls mit bis zu einem dieser Urgents pro Einsatz verbinden. Wenn du in den Ruhestand gehst und niemand sonst diesen Vorteil hat, verlieren alle den Zugriff auf diese Fähigkeiten.",
   "Unsere Systeme zur Verwahrung dieser Urgents sind sehr empfindlich. Hat ein Agent Zugriff auf diese Fähigkeiten und besitzt den Anomalie-Effekt Nicht vertrauenswürdig oder den Realitäts-Effekt Das Rampenlicht teilen, darf er, wenn er Zeit auf die entsprechende Leiste verwendet, auf alle anderen normalen Vorteile verzichten und einen einzelnen Urgent freilassen.",
   "Wir können Agenten mit diesen Fähigkeiten nicht aufspüren oder sicher wissen, ob sie sie haben. Ein verlorener Urgent ist für immer verloren, also sei vorsichtig, mit wem du diese Informationen teilst."]
 ]},
 {t:"html", x:pwwUrgents([
   ["Scratch", "Zurückspulen", "Spule die Zeit überall um bis zu zehn Minuten zurück. Du und dein Team behaltet alle Erinnerungen an die zurückgespulte Zeit, aber ausgegebene Qualitätssicherungen und andere Ressourcen bleiben ausgegeben.", "Um diese Fähigkeit einzusetzen, musst du zuerst eine Handvoll Sand in deine Augen werfen."],
   ["Pancake", "Ablenken", "Lenke bis zu 50 Personen in der Nähe ab, sodass sie nicht auf das achten, was um sie herum geschieht.", "Jedes Mal, wenn du diese Fähigkeit einsetzt, verlierst du dauerhaft einen dir gehörenden physischen Besitz, der heute Teil einer Kausalkette war. Gibt es keinen, wählt Pancake etwas an deiner Person, das du verlierst."],
   ["Gust", "Verwurzeln", "Bestimme eine Stelle (bis zu {3} Kubikmeter), die nicht betreten werden kann (nicht einmal von dir), oder ein Ding, das nicht von seinem Platz bewegt werden kann. Dieser Effekt hält bis zum Ende des Einsatzes an.", "Um diese Fähigkeit einzusetzen, musst du zuerst eine Pflanze zerstören."],
   ["Killswitch", "Hochjubeln", "Wähle ein Kunstwerk (Literatur, bildende Kunst, Film, Musik usw.) und katapultiere es zu internationalem Ruhm. Jeder wird davon gehört haben.", "Um diese Fähigkeit einzusetzen, musst du zuerst öffentlich eine heikle Wahrheit über dich selbst vor einem aufmerksamen Publikum bekanntgeben."],
   ["Leftmost", "Wiederverwerten", "Wähle eine gewöhnliche Person, die heute gestorben ist. Sie wird wieder zum Leben erweckt (mit allen Erinnerungen, auch an ihren Tod).", "Jedes Mal, wenn du diese Fähigkeit einsetzt, altert dein Körper um drei Jahre."],
   ["Mantis", "Zwiesprache", "Wähle ein Tier oder eine Pflanze. Ihr könnt ab sofort telepathisch miteinander sprechen. Du kannst diese Fähigkeit erneut einsetzen, um die Verbindung zu kappen.", "Um diese Fähigkeit einzusetzen, musst du zuerst ein Wort, das du heute gesagt hast, für immer aus deinem Wortschatz streichen. Notiere es: Es ist unmöglich, dieses Wort zu benutzen oder sich daran zu erinnern, was es bedeutet."],
   ["Gregory", "Umstülpen", "Wähle einen beliebigen verschlossenen Behälter: eine Dose, ein Gebäude, eine Person. Stülpe ihn von innen nach außen.", "Um diese Fähigkeit einzusetzen, musst du zuerst einer deiner Beziehungen sagen, was du an ihr am wenigsten magst."],
   ["Vagrant", "Einpflanzen", "Wähle eine Person und etwas, das du gerade gesagt hast. Diese Person hat es soeben stattdessen gesagt.", "Nachdem du diese Fähigkeit eingesetzt hast, musst du etwas essen, das größer als ein Zwei-Euro-Stück ist und das diese Person heute gehalten oder berührt hat. Tust du es nicht innerhalb einer Stunde, frisst dein Magen sich selbst und du stirbst."],
   ["Ick", "Schwur", "Wähle eine Person. Sie versteht mit vollkommener Klarheit und glaubt vollständig jede Wahrheit, die du ihr sagst. Sie kann durch etwas, das du ihr auf diese Weise erzählst, kein Loses Ende werden.", "Um diese Fähigkeit einzusetzen, musst du der gewählten Person zuerst ein Schwert anbieten. Sie weiß, dass sie dieses Schwert jederzeit benutzen kann, um dich zu töten, dauerhaft und ohne gesellschaftliche oder rechtliche Folgen."],
   ["Referee", "Gewinnen", "Gewinne das nächste Spiel, die nächste Wette oder den nächsten Wettkampf, an dem du teilnimmst. Beeinflusst keine Würfelwürfe.", "Um diese Fähigkeit einzusetzen, musst du zuerst echte Tränen weinen."]
  ])},
 "Mit diesem Wissen fest im Gepäck näherst du dich nun dem absoluten Höhepunkt deiner Laufbahn als Außendienst-Agent. Das Ende ist in Sicht: Lass dich jetzt nicht von Ablenkungen abfangen. Du bist bereits einer der größten Agenten, die wir in jüngster Erinnerung gesehen haben, und du bist so nah am höchsten Titel, den du erhalten kannst: Vorsitzender."
]};

TA_PWT.W9 = {t:"Wie Sand am Meer", s:282, b:[
 {t:"faehig", h:"Wie Sand am Meer", x:"Der Rand des Ufers ist so verschwommen wie der der Welle. Wirf dich zu Boden und würfle **Professionalität**.",
  erg:[
   ["ok", "**Bei Erfolg** landest du als Sandhaufen. In dieser Form kannst du dich über den Boden verstreuen, auf dem Wind fliegen oder dich in die kleinsten Spalten quetschen. Du kannst nur durch Dinge Schaden erleiden, die Sand zerstören könnten. Du kannst dich auf jede dieser Weisen etwa so schnell fortbewegen wie ein durchschnittlicher Mensch zu Fuß. Du kannst diese Form nutzen, um poröse Gegenstände *(ein Auto, ein Bücherregal, einen Bademantel)* zu bewohnen und zu steuern.\nDieser Effekt endet nach einer Stunde, sobald du nass wirst oder wenn du ihn beendest. Dann setzt du dich dort vollständig wieder zusammen, wo dein Sand am dichtesten war."],
   ["plus", "**Bei jeder dritten {3}** darfst du dich in einen zusätzlichen Sandhaufen aufteilen, von denen jeder unabhängig von den anderen handeln kann. Endet dieser Effekt für einen der Haufen, kannst du als die anderen Haufen weitermachen und dich aus dem letzten Haufen zusammensetzen, um diesen Effekt zu beenden."],
   ["nein", "**Bei Fehlschlag** löst sich nur die Hälfte von dir in Sand auf, und der Sand ist inert. Du darfst wählen, welche Hälfte. Dieser Effekt endet nach einer Stunde, und du leidest in diesem Zustand unter Burnout."]
  ]}
]};

TA_PWT.W10 = {t:"Schlimmste Party aller Zeiten", s:282, b:[
 {t:"faehig", h:"Schlimmste Party aller Zeiten", x:"Wenn du jemandem so richtig den Tag verderben willst, öffne in der Nähe einer Person eine Tür und würfle **Aufmerksamkeit**.",
  erg:[
   ["ok", "**Bei Erfolg** betritt die letzte Person, die das Ziel gerade sehen will, den Raum. Sie mögen dich nicht unbedingt und wollen nicht mit dir kooperieren, aber sie sind für das Ziel definitiv ein Problem. Sie werden in einer Stunde dorthin zurückgebracht, wo sie hergekommen sind, falls sie dann noch dort sind."],
   ["plus", "**Für jede weitere {3}** wähle eines:\n– Eine weitere Person, die das Ziel nicht sehen will, oder ein Unterstützer einer zuvor mit dieser Fähigkeit herbeigerufenen Person, tritt ein.\n– Eine alternative Version der ersten eingetretenen Person tritt ebenfalls ein (wie bei Dein bestes Ich). Du wählst, was anders ist.\n– Ein Gegenstand erscheint (wie bei Was ist das da drüben?), der die aktuelle Lage des Ziels noch unangenehmer macht."],
   ["plus", "Solange dieser Effekt aktiv ist, darfst du jedes Mal, wenn das Ziel oder die herbeigerufene Person eine der folgenden Handlungen ausführt, einen der „Für jede weitere {3}“-Effekte dieser Fähigkeit ohne Wurf aktivieren: Wirft jemand anderem ein Getränk ins Gesicht; fängt an zu weinen; stürmt aus dem Raum; kippt einen Tisch um oder räumt ihn gewaltsam ab; enthüllt ein dunkles Geheimnis."],
   ["nein", "**Bei Fehlschlag** verzerrt sich der Raum um dich zur schlimmsten Party, die du dir vorstellen kannst. Deine sieben größten Widersacher kommen durch die Tür, gewöhnliche wie anomale. Werden dadurch Anomalien aus dem Vault entfernt, macht die Agency dich für ihre Gefangennahme und Rückführung verantwortlich."]
  ]}
]};

TA_PWT.W11 = {t:"An deiner Stelle würde ich das nicht tun", s:282, b:[
 {t:"faehig", h:"An deiner Stelle würde ich das nicht tun", x:"Deine Gun kann jetzt in die Köpfe der Leute eindringen. Tut jemand etwas, das dich ärgert, sage etwas, um ihn zum Aufhören zu bewegen, und würfle **Subtilität**.",
  erg:[
   ["ok", "**Bei Erfolg** verliert das Ziel die Fähigkeit, dieses Verhalten auszuführen, solange es sich in deiner Gegenwart befindet."],
   ["plus", "**Für jede weitere {3}** darfst du die Reichweite dieses Effekts erhöhen, indem du einen Eintrag in der folgenden Liste weiterrückst und „in deiner Gegenwart“ durch den Text ersetzt:\n– 1. in Hörweite\n– 2. in derselben Region\n– {3}. im selben Land\n– 4. auf derselben Daseinsebene\n– 5. am Leben"],
   ["plus", "**Bei Triszendenz** händigt das Ziel auch freiwillig alles aus, was es bei sich hat."],
   ["nein", "**Bei Fehlschlag** verlieren du und das Ziel die Fähigkeit, dieses Verhalten auszuführen, für immer."]
  ],
  f:"Ich glaube, Waffen …", a:[["Enthüllen Menschen.", "M3"], ["Verändern Menschen.", "R4"]]}
]};
