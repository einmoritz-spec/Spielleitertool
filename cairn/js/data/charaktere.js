/* Cairn – Charaktere (Spielerhandbuch S. 3–17) */
CN.add("charaktere", {id:"grundsaetze", t:"Grundsätze", p:4, b:[
 "Cairn ist ein Abenteuerspiel über einen dunklen, geheimnisvollen Wald voller seltsamer Wesen, verborgener Schätze und unaussprechlicher Ungeheuer. Charaktere entstehen schnell und per Zufall, Abenteuer sind angespannt und belohnen sorgfältiges Erkunden, Kämpfe sind hektisch und tödlich.",
 {t:"h", x:"Leitgedanken des Spiels"},
 {t:"stats", x:[
  ["Neutralität", "", "Die Spielleitung ist neutrale Schiedsrichterin und stellt Regeln, Situationen, Nichtspielercharaktere (NSC) und Erzählung klar dar."],
  ["Klassenlos", "", "Die Rolle eines Charakters wird nicht durch eine einzige Klasse begrenzt. Ausrüstung und Erfahrungen bestimmen seine Spezialität."],
  ["Tod", "", "Charaktere können mächtig sein, sind aber auf vielerlei Weise verwundbar. Der Tod lauert immer um die Ecke, ist aber nie zufällig oder ohne Vorwarnung."],
  ["Fiktion zuerst", "", "Würfel spiegeln nicht immer Schwierigkeit oder Ausgang eines Hindernisses wider. Erfolg und Misserfolg beruhen auf Elementen der Spielwelt und werden von der Spielleitung im Gespräch mit den Spielenden entschieden."],
  ["Wachstum", "", "Charaktere verändern sich durch Fortschritt in der Spielwelt: Sie gewinnen neue Fertigkeiten und Fähigkeiten, indem sie gefährliche Ereignisse überleben und Hindernisse überwinden."],
  ["Spielerentscheidung", "", "Spielende sollen die Gründe hinter ihren Entscheidungen immer verstehen; Informationen über mögliche Risiken werden frei und häufig gegeben."],
  ["Prinzipien", "", "Spielleitung und Spielende haben je eigene Leitlinien, die ein Spielerlebnis aus kritischem Denken, Erkunden und sich entfaltender Erzählung fördern."],
  ["Gemeinsame Ziele", "", "Die Spielenden vertrauen einander, sich auf die gemeinsame Welt, die Ziele der Charaktere und die Herausforderungen der Gruppe einzulassen. Die Gruppe arbeitet daher in der Regel als Team auf ein gemeinsames Ziel hin."]
 ]},
 {t:"h", x:"Grundsätze für Spielende"},
 {t:"grid", n:2, x:[
  [{t:"h4",x:"Handlungsfreiheit"}, {t:"ul", x:["Eigenschaften und die zugehörigen Rettungswürfe definieren deinen Charakter nicht. Sie sind Werkzeuge.","Frag nicht nur, was dein Charakter tun würde; frag auch, was du tun würdest.","Sei kreativ mit deiner Intuition, deinen Gegenständen und deinen Verbindungen."]},
   {t:"h4",x:"Teamarbeit"}, {t:"ul", x:["Such den Konsens mit den anderen Spielenden, bevor ihr vorprescht.","Bleibt bei Zielen und Grenzen auf einer Linie, respektiert einander und erreicht als Gruppe mehr als allein."]},
   {t:"h4",x:"Erkunden"}, {t:"ul", x:["Fragen zu stellen und auf Details zu hören nützt mehr als alle Werte, Gegenstände oder Fertigkeiten.","Nimm die Beschreibung der Spielleitung ohne Argwohn an, scheu dich aber nicht, mehr Informationen zu suchen.","Es gibt keinen einzig richtigen Weg."]},
   {t:"h4",x:"Reden"}, {t:"ul", x:["Behandle NSC wie echte Menschen und verlass dich auf deine Neugier, um sicher an Informationen zu kommen und Probleme zu lösen.","Du wirst feststellen, dass die meisten Leute interessant sind und die Dinge lieber besprechen wollen, bevor es gewalttätig wird."]}],
  [{t:"h4",x:"Vorsicht"}, {t:"ul", x:["Kämpfen ist eine Entscheidung und selten eine kluge; überlege, ob Gewalt der beste Weg zu deinen Zielen ist.","Versuch, die Chancen zu deinen Gunsten zu verschieben, und zieh dich zurück, wenn es ungünstig aussieht."]},
   {t:"h4",x:"Planung"}, {t:"ul", x:["Denk dir Wege aus, Hindernisse durch Aufklärung, Unauffälligkeit und Recherche zu umgehen.","Recherchiere und frag dich zu deinen Zielen durch."]},
   {t:"h4",x:"Ehrgeiz"}, {t:"ul", x:["Setz dir Ziele und nutze deine bescheidenen Mittel, um voranzukommen.","Erwarte nichts. Verdiene dir deinen Ruf.","Halte die Dinge in Bewegung und spiel, um zu sehen, was passiert."]}]
 ]}
]});

CN.add("charaktere", {id:"erschaffung", t:"Charaktererschaffung", p:8, b:[
 {t:"h", x:"Hintergrund wählen oder würfeln"},
 {t:"ul", x:["Würfle oder wähle zuerst auf der Tabelle der Hintergründe und notiere die Seitenzahl. Auf dieser Seite findest du die nächsten Schritte.","Wähle einen Namen aus der Liste und trage alle Startgegenstände deines Charakters ein. Wie Gegenstände eingetragen werden, steht unter *Inventar und Inventarplätze*.","Würfle auf jeder Tabelle des Hintergrunds. Trage die Gegenstände, Fertigkeiten oder Fähigkeiten aus jedem Ergebnis ein. Manche Hintergründe verweisen auch auf die Tabellen des Marktplatzes."]},
 {t:"d", h:"Hintergründe", die:"W20", cols:2, rows:[["1","Aurifex"],["2","Feldscher"],["3","Tierführer"],["4","Knochenhüter"],["5","Beutelschneider"],["6","Feldwächter"],["7","Fletchwind"],["8","Findelkind"],["9","Pilzsammler"],["10","Grünweiser"],["11","Halbhexe"],["12","Hexenbann"],["13","Jongleur"],["14","Kesselschmied"],["15","Marschwache"],["16","Quacksalber"],["17","Vorreiter"],["18","Pirscher"],["19","Rinnsalläufer"],["20","Schreiber"]]},
 {t:"h", x:"Eigenschaften, Trefferschutz und Merkmale"},
 {t:"ul", x:["Würfle für deinen Charakter den Trefferschutz und die Eigenschaften.","Würfle die übrigen Merkmale (siehe *Merkmale*) und danach auf der Tabelle der Bindungen.","Würfle zuletzt das Alter (2W20+10). Bist du die jüngste Spielfigur, würfle auf der Tabelle der Omen. Das Ergebnis wird den anderen Spielenden vorgelesen. Die Spielleitung baut Omen nach Belieben in die Welt ein."]},
 {t:"h", x:"Eigenschaften"},
 {t:"ul", x:["Spielercharaktere (SC) haben nur drei Eigenschaften: Stärke (STÄ), Geschicklichkeit (GES) und Willenskraft (WIL).","Würfle für jede Eigenschaft 3W6, in dieser Reihenfolge. Danach darfst du zwei beliebige Ergebnisse tauschen.","Eigenschaften sind keine allgemeinen Beschreibungen. Ein Charakter mit niedriger STÄ ist nicht zwangsläufig hoffnungslos schwach; er kann trotzdem versuchen, ein schweres Tor zu heben oder einen tödlichen Kampf zu überleben. Sein Risiko ist nur höher."]},
 {t:"h", x:"Trefferschutz"},
 {t:"ul", x:["Würfle 1W6 für den Start-Trefferschutz (TS) deines SC. Er steht für die Fähigkeit, Schaden im Kampf zu vermeiden. Er sagt nichts über Gesundheit oder Zähigkeit und geht nie lange verloren (siehe *Heilung* in den Grundregeln).","Bringt ein Angriff den TS eines SC genau auf 0, schlägt die Spielerin oder der Spieler auf der Tabelle der *Narben* nach."]},
 {t:"h", x:"Inventar"},
 {t:"ul", x:["Charaktere haben insgesamt zehn Inventarplätze, können aber ohne Taschen, Rucksäcke, Pferde, Karren usw. nur vier Gegenstände bequem tragen.","Jeder SC beginnt mit einem Rucksack, der bis zu sechs Plätze an Gegenständen oder Erschöpfung aufnehmen kann. Karren (müssen mit beiden Händen gezogen werden), Pferde oder Maultiere machen einen großen Unterschied dafür, wie viel ein SC auf ein Abenteuer mitnehmen kann. Auch Gefolge kann dafür bezahlt werden, Ausrüstung zu tragen.","Das Inventar ist abstrakt und hängt nur von der Fiktion ab, wie die Spielleitung sie beurteilt. Wer ein volles Inventar trägt (alle 10 Plätze belegt), wird auf 0 TS reduziert. Ein Charakter kann nicht mehr als zehn Plätze füllen."]},
 {t:"h", x:"Inventarplätze"},
 {t:"ul", x:["Die meisten Gegenstände belegen einen Platz, sofern nichts anderes angegeben ist.","Winzige Gegenstände belegen keinen Platz. Sperrige Gegenstände belegen zwei Plätze.","Ein Beutel Münzen im Wert von unter 100 GM ist winzig und belegt keinen Platz."]}
]});

CN.add("charaktere", {id:"merkmale", t:"Merkmale", p:10, b:[
 "Würfle mit 1W10 für jedes Merkmal, oder wähle eines aus.",
 {t:"grid", n:2, x:[
  [{t:"d", h:"Körperbau", die:"W10", rows:["Athletisch","Bullig","Schwammig","Hager","Rau","Dürr","Klein","Stattlich","Gedrungen","Hochgewachsen"]},
   {t:"d", h:"Haut", die:"W10", rows:["Muttermal","Gezeichnet","Ölig","Rosig","Vernarbt","Weich","Gebräunt","Tätowiert","Wettergegerbt","Schwimmhäute"]},
   {t:"d", h:"Haar", die:"W10", rows:["Kahl","Geflochten","Lockig","Fettig","Kraus","Lang","Üppig","Ölig","Wellig","Dünn"]},
   {t:"d", h:"Gesicht", die:"W10", rows:["Knochig","Gebrochen","Markant","Länglich","Blass","Makellos","Verwegen","Scharf","Eckig","Eingefallen"]}],
  [{t:"d", h:"Kleidung", die:"W10", rows:["Altertümlich","Blutig","Elegant","Schmutzig","Fremdländisch","Ausgefranst","Schlampig","Livree","Ranzig","Verdreckt"]},
   {t:"d", h:"Tugend", die:"W10", rows:["Ehrgeizig","Vorsichtig","Mutig","Diszipliniert","Gesellig","Ehrenhaft","Bescheiden","Barmherzig","Gelassen","Duldsam"]},
   {t:"d", h:"Laster", die:"W10", rows:["Aggressiv","Verbittert","Feige","Hinterhältig","Gierig","Faul","Nervös","Grob","Eitel","Rachsüchtig"]},
   {t:"d", h:"Sprechweise", die:"W10", rows:["Unverblümt","Dröhnend","Rätselhaft","Eintönig","Förmlich","Rau","Präzise","Piepsig","Stotternd","Flüsternd"]}]
 ]}
]});

CN.add("charaktere", {id:"bindungen", t:"Bindungen", p:12, b:[
 {t:"d", h:"Bindungen", die:"W20", rows:[
  "Du hast von einem lange verstorbenen Verwandten einen einzelnen **Edelstein** (500 GM, kalt und spröde) geerbt. Er kam mit einer Warnung: Verprasst du deinen neuen Reichtum, wird eine längst vergessene Schuld eingefordert.",
  "Ein entfernter Cousin hinterließ dir ein kleines Erbe. Nimm 20 GM und einen **Seltsamen Kompass** (winzig), der immer auf etwas tief im Wald zeigt.",
  "Du trägst ein handgezeichnetes **Porträt** (winzig) einer vergangenen Liebe, die vor langer Zeit im Wald verschwand. Irgendwie weißt du, dass sie noch lebt.",
  "Du hast ein **Winziges Kristallprisma** (winzig) im Dreck vergraben gefunden. Gegen das Licht gehalten zeigt es Visionen eines unbekannten Ortes tief im Wald. Manchmal spürst du, dass dich eine Gegenwart zurück ansieht.",
  "Du hast einst eine Najade aus einem verstopften Bach befreit. Als Dank gab sie dir etwas **Silbermoos** (winzig). Schluckst du es in der Nähe von Wasser, kommt das Wesen einmal, um seine Schuld zu begleichen.",
  "Du hast ein altes **Tagebuch** in Baumrinde geerbt. Jeden Abend füllen sich seine Seiten mit den Ereignissen des Tages, derb aus der Sicht des Tagebuchs geschrieben. Die Schrift ist grob, aber genau.",
  "Du hütest ein lange ruhendes Familiengeheimnis. Nimm die eine Hälfte eines **Uralten Schlüssels** (winzig). Man sagt, vereint mit seinem Zwilling öffne er ein Tor durch jede Tür.",
  "Du hast einen **Brief** (winzig) erhalten, der unwiderlegbar beweist, dass du von Feenadel abstammst. Der Brief nennt auch Datum und Ort, an dem du den Verfasser treffen sollst, tief im Wald.",
  "Du stehst tief in der Schuld eines Adligen und trägst seinen **Siegelring** (winzig), der sowohl Beweis seines Schutzes als auch deiner Verpflichtung ist.",
  "Du hast einen **Mutwilligen Geist** verschluckt, der in deinem Inneren Unheil anrichtet und verlangt, nach Hause gebracht zu werden, tief im Wald. Er belegt einen Platz, nimmt dir aber jeden Tag eine Erschöpfung ab. Er will dich am Leben (vorerst).",
  "Ein umherziehender Geschichtenerzähler erzählte dir einst von einem großen Schatz tief im Wald. Du hieltest es für bloße Phantasie, bis er dir eine **Zusammengerollte Karte** (winzig) mit einem X gab.",
  "Auf deinen Reisen trafst du einen sterbenden Jäger, der dich bat, seinen Lieben eine Nachricht zu überbringen. Nimm einen mit Baumharz versiegelten **Brief** (winzig). Er ist nur an den Herrn des Winters adressiert.",
  "Du fandest ein verwundetes Tier im Wald, ignoriertest es aber. Jetzt siehst du es überall, aber nur, wenn du allein bist. Es sieht traurig aus, nicht zornig. Du kannst nicht in Panik geraten, wenn du allein handelst.",
  "Du hast einem Kindheitsfreund versprochen, ihm ein seltenes Geschenk mitzubringen, etwas Einzigartiges auf der Welt. Nimm ein **Armband** (winzig), geflochten aus Zwirn und Wildblumen.",
  "Du hast ein Wesen des Waldes verärgert, und es belegte dich mit einem **Steinherz**. Mit jedem Monat wird das Herz um einen Platz schwerer. Bis deine Schuld beglichen ist, kannst du nicht wirklich sterben.",
  "Du hast aus dem Ast eines Eichenherrn eine **Trillerpfeife** (winzig) geschnitzt. Die Tat blieb nicht unbemerkt. Du wirst die Pfeife auch nicht mehr los.",
  "Die Morgenbrigade erwies deiner Familie einen Dienst und gab dir als Beweis eine getrocknete **Blutrote Blume** (winzig). Wird die Blume weiß, ist die Gefälligkeit fällig.",
  "Ein Gaukler besuchte einst dein Zuhause und erfüllte es mit Geschichte und Gesang. Er ging eines Tages wortlos und ließ nur eine **Miniaturlaute** zurück. Darin klappert etwas.",
  "Eine weiße Krähe erschien dir im Traum, einen Zweig im Schnabel. Am nächsten Morgen erwachtest du mit dem **Zweig** (winzig) in der Hand. Du glaubst, er bringt dir Glück. Er riecht schwach nach Schwefel.",
  "Einer deiner Vorfahren hat einer Moorhexe Unrecht getan, die seine Blutlinie verfluchte. Dein Anblick lässt Spiegel zerspringen. Du hast bemerkt, dass die Scherben manchmal Illusionen enthüllen."
 ]}
]});

CN.add("charaktere", {id:"omen", t:"Omen", p:14, b:[
 "Die jüngste Spielfigur würfelt ein Omen; es wird laut vorgelesen. Die Spielleitung baut es in die Welt ein.",
 {t:"d", h:"Omen", die:"W20", rows:[
  "Die einst reichen Wasser eines lebensspendenden Flusses sind schwarz und faulig geworden und vergiften das Land und jene, die davon trinken. Ein Dorfältester nennt eine jüngste Entweihung als Ursache, doch die meisten hören nicht auf ihn.",
  "Der Winter scheint zu früh gekommen zu sein; Frost und Schnee erscheinen viel früher als erwartet. Man spricht von einem Muster im Frost an Fenstern, Teichen und Erdspalten. Es sieht fast aus wie eine Karte.",
  "Ein dichter, unnatürlicher Nebel dringt in einen uralten, heiligen Hain vor. Es heißt, das Werk eines großen Waldgeistes, den die Abholzung in der Nähe erzürnt hat.",
  "Der Nachthimmel wird jeden Abend dunkler, als verschwänden Sterne einer nach dem anderen. Gerüchte über höllische Kreaturen, die Bauern fangen und in die Wurzeln ziehen, verbreiten sich wie ein Lauffeuer. Die Dorfältesten glauben, beides hänge zusammen.",
  "Die Singvögel des Waldes sind unheimlich still geworden. Jäger behaupten, eine gespenstische Gestalt wandere durch den Wald und blicke sehnsüchtig jeden an, dem sie begegnet.",
  "Im ganzen Gebiet werden seltsame, tränenförmige Steine gefunden und lösen eine Art „Goldrausch“ unter Juwelieren und Dieben aus. Die Einheimischen glauben, es seien die Tränen der Erde selbst, die um eine große, noch bevorstehende Tragödie weint.",
  "Schwärmende Plagegeister nagen an den Rändern der Träume, und Bauern erzählen von einem lauten Summen tief aus dem Wald. Sie sagen auch, das Geräusch komme näher.",
  "Ein Dorf ist weit und breit für seinen eindrucksvollen „Mutterbaum“ bekannt, der angeblich die Geheimnisse der Stadt in seinen Zweigen birgt. Neuerdings blutet er roten Saft, was die Ältesten beunruhigt.",
  "Der Mond färbt sich tiefrot und taucht die Nacht in unheimliches, blutrotes Licht. Manche sagen, er künde eine Zeit des Chaos und Streits an, da die Grenzen zwischen Wald und sterblicher Welt dünn werden.",
  "Seltsame Risse sind am Nachthimmel erschienen und zeigen einen wirbelnden Strudel aus Licht und Farbe. Manche sagen, die Trennung der Reiche sei so schwach wie seit Jahrhunderten nicht und fürchten, was von der anderen Seite kommen mag.",
  "Eine nachtblühende Blume, die man für ausgestorben hielt, sprießt überall im Wald. Ihr Duft ist berauschend, verursacht aber auch lebhafte Albträume.",
  "Das Vieh der Gegend ist zuletzt zunehmend unruhig und unlenksam geworden. Ein alter Schäfer sagt, schuld sei ein beunruhigendes Heulen, das bei jedem Vollmond aus dem Wald dringt.",
  "Insektenschwärme fliehen in Scharen aus dem Wald und zerstören alle Holzbauten, auf die sie stoßen. Das Summen ihrer Flügel klingt vertraut, wie ein vergessener Kinderreim.",
  "Jäger sprechen von einem Fluch, der jeden trifft, der ein Tier mit einem Streifen weißen Fells tötet: Bald darauf findet man ihn tot in seinem Haus. Jeden Tag gibt es weniger Wild zu jagen.",
  "Man sagt, aus Brunnen in der ganzen Stadt sei schwaches Lachen zu hören, und das Echo wechsle nachts zu Schluchzen.",
  "Die Sternbilder haben sich langsam verschoben und bilden unbekannte Muster am Nachthimmel, die Sterngucker und Weise ratlos machen. Sogar die Tiere wirken beunruhigt.",
  "Ein uralter Baum im Herzen eines verschlafenen Dorfes ist plötzlich verdorrt und gestorben, ohne Anzeichen einer Krankheit. Nachdem man den Stamm gefällt hatte, fand man in seinem Kern eine blutige Hand.",
  "Statuen weinen seit Monaten Blut, und seither blieben die Schöße des Dorfes unfruchtbar. Nur ein einzelnes Kind ist die Ausnahme, versteckt von Ältesten, die vor Furcht und Grauen erstarrt sind.",
  "Die Tierwelt verhält sich seltsam, zeigt erhöhte Aggression oder flieht gänzlich aus dem Gebiet. Jäger sprechen von einer schattenhaften Gestalt, die durch den Wald streift und die Tiere ruft.",
  "Grenzstädte sind in den letzten Wochen aufgewühlt, nachdem mehrfach behauptet wurde, eine rotgewandete Gestalt erscheine in den Träumen der Kinder und äußere stets dieselbe Warnung: Ein Feuer kommt, und es wird alles verzehren."
 ]}
]});

CN.add("charaktere", {id:"marktplatz", t:"Marktplatz", p:16, b:[
 "Preise in Goldmünzen (GM).",
 {t:"grid", n:2, x:[
  [{t:"tbl", head:["Rüstung","GM"], rows:[["Schild (+1 Rüstung)","10"],["Helm (+1 Rüstung)","10"],["Gambeson (+1 Rüstung)","15"],["Brigantine (1 Rüstung, sperrig)","20"],["Kettenhemd (2 Rüstung, sperrig)","40"],["Plattenpanzer (3 Rüstung, sperrig)","60"]]},
   {t:"tbl", head:["Waffen","GM"], rows:[["Dolch, Knüppel, Sichel, Stab usw. (W6 Schaden)","5"],["Speer, Schwert, Streitkolben, Axt, Flegel usw. (W8 Schaden)","10"],["Hellebarde, Kriegshammer, Langschwert usw. (W10 Schaden, sperrig)","20"],["Schleuder (W6 Schaden)","5"],["Bogen (W6 Schaden, sperrig)","20"],["Armbrust (W8 Schaden, sperrig)","30"]]},
   {t:"tbl", head:["Transport","GM"], rows:[["Karren (+4 Plätze, sperrig)","30"],["Wagen (+8 Plätze, langsam)","200"],["Pferd (+4 Plätze)","75"],["Maultier (+6 Plätze, langsam)","30"],["Platz in der Kutsche","5"],["Schiffspassage","10"]]},
   {t:"tbl", head:["Unterhalt & Erholung","GM"], rows:[["Unterkunft & Verpflegung (pro Nacht)","10"],["Privatzimmer & Verpflegung (für 4)","35"],["Stall & Futter (pro Nacht)","5"],["Ärztliche Heilung","50"],["Proviant (3 Verwendungen)","10"],["Tierfutter (3 Verwendungen, sperrig)","5"]]},
   {t:"tbl", head:["Gefolge (Tagessatz in GM)",""], rows:[["Alchemist","30"],["Tierpfleger","5"],["Schmied","15"],["Leibwächter","10"],["Ortskundiger Führer","5"],["Schlossknacker","10"],["Navigator","10"],["Matrose","5"],["Gelehrter","20"],["Fährtenleser","5"],["Fallensteller","5"],["Erfahrener Leibwächter","20"]]}],
  [{t:"tbl", head:["Ausrüstung","GM"], rows:[
   ["Luftblase","5"],["Gegengift","20"],["Verbandszeug (3 Verwendungen)","30"],["Badeutensilien (Seife, Parfüm usw.)","5"],["Buch","50"],["Krähenfüße","10"],["Kartenspiel","5"],["Kette (3 m)","10"],["Kreide (winzig)","1"],["Truhe","25"],["Meißel","5"],["Gängige Mittel (Leim, Fett usw.)","10"],["Gängiges Werkzeug (Hammer, Schaufel usw.)","10"],["Kompass","75"],["Komplexe Instrumente (Dudelsack, Fiedel usw.)","50"],["Behälter (Sack, Wasserschlauch usw.)","10"],["Kochgeschirr (Töpfe, Besteck usw.)","10"],["Verkleidung (Schminke, Maskerade)","15"],["Wünschelrute","15"],["Expeditionsausrüstung (Kletterhaken, Flaschenzug usw.)","10"],["Feueröl","10"],["Angelrute","10"],["Spiele (Karten, Würfel usw.)","10"],["Handschuhe (winzig)","20"],["Enterhaken","25"],["Laterne","10"],["Spiegel","5"],["Netz","10"],["Ölkanne (6 Verwendungen)","10"],["Outdoor-Komfort (Decke, Hängematte usw.)","10"],["Pergament (3 Verwendungen)","10"],["Stange (3 m)","5"],["Abwehrmittel (Wolfswurz, Beifuß usw.)","10"],["Seil (7,5 m)","5"],["Beruhigungsmittel","30"],["Nähzeug","20"],["Einfache Instrumente (Flöten, Laute usw.)","10"],["Tabakspfeife (winzig)","15"],["Spezialwerkzeug (Tinte usw.)","20"],["Spikestiefel","15"],["Fernrohr","40"],["Zelt (für 2, sperrig)","20"],["Diebeswerkzeug (Dietrich, Metallfeile usw.)","25"],["Fackel (3 Verwendungen)","5"],["Falle (W6 STÄ-Schaden)","35"],["Pfeife (winzig)","15"],["Wildniskleidung (Poncho, Umhang usw.) (winzig)","15"]]}]
 ]}
]});
