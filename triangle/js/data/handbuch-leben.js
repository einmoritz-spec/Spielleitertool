/* Handbuch › Arbeit und Leben (S. 122–135) */
/* S. 122: Die Anomalie übermalt die Seite in Blau – riesige Buchstaben und Balken, aus denen nur Wortfetzen ragen. Klick auf einen übermalten Absatz deckt ihn auf. */
TA_TEXT["h/leben/balance"] = [
 {t:"html", x:'<div class="hb-anom"><b class="gb g1">ALIE</b><i class="gs"></i><b class="gb g2">ANO</b><b class="gb g3">OM</b><div class="l">'},
 "Nach Abschluss eines Einsatzes steht es Agenten frei, ihre Zeit mit branchenführendem Spielraum zu gestalten – und wer sie zum Arbeiten nutzt, wird großzügig belohnt! Im krassen Gegensatz zu bezahltem Urlaub und anderen veralteten Leistungen unserer Konkurrenz garantiert das **Work-Life-Balance**-Programm, dass jeder Augenblick deines Lebens so berechnet ist, dass er dir die maximale Rendite auf deine Investition liefert!",
 "Agenten sind verpflichtet, ihre Zeit zwischen den Einsätzen mit dem beigefügten **Work-Life-Balance-Bogen** am Ende dieses Buches festzuhalten.",
 {t:"html", x:'<p>Der Work-Life-Balance-Bogen überwacht, wie gut du dich in deiner Einstiegsposition schlägst. Mehr Zeit für deine <b class="ag">Kompetenz</b> bedeutet Beförderungen, ein höheres Qualitätssicherungs-Budget und Zugang zu fortgeschrittenen Anforderungen und Informationen hinter der Playwall. Zeit für deine <b style="color:var(--gelb)">Realität</b> wird nicht empfohlen, soweit wir wissen führt sie aber zu besseren Beziehungen, einem größeren Netzwerk und der Möglichkeit eines bleibenden profanen Vermächtnisses. Schnarch!</p>'},
 {t:"html", x:'<p class="ueb" onclick="this.classList.toggle(\'auf\')">Du kannst mitverfolgen, indem du dir den Work-Life-Balance-Bogen auf den Seiten der Charakterorganisationsbögen am Ende dieses Dokuments ansiehst. Du darfst <u>manchmal </u><em>au</em><u>ch mitlesen, indem du dir den Work-Life-Balance-</u><em>B</em><u>ogen ansiehst, der sich d</u><em>o</em><u>rt befindet</u></p>'},
 {t:"html", x:'</div><div class="r">'},
 "Deine Laufbahn als Außendienst-Agent ist begrenzt. Je mehr Zeit du mit Arbeit verbringst, desto höher ist dein Rang, wenn du die Feldarbeit beiseitelegst und als **Vollzeitmitarbeiter** in die Agency eintrittst. Andere Verwendungen deiner Zeit fühlen sich im Moment vielleicht befriedigend an, aber am Ende zählt allein deine Kompetenz.",
 {t:"html", x:'<p class="ueb" onclick="this.classList.toggle(\'auf\')">Wir warnen nachdrücklich davor, Zeit damit zu verbringen, bei deiner <span class="an">Anomalie</span> zu verweilen, denn sie könnte <u>deiner Familie, deinen Freunden und Bekannten </u><em>ernsthaft</em><u> schaden, sollte man sie stärker werden lassen. Diese </u><em>Regel</em><u>n existieren aus gutem Grund und müssen befolgt werden</u>.</p>'},
 {t:"html", x:'<p style="margin-bottom:0">Außerdem,</p><div class="block"><em style="left:34%;top:26%">BLAU</em><em style="left:18%;top:58%">n Eis</em><em style="left:54%;top:86%">!</em></div></div></div>'}
];
/* S. 123: Der Anomalie-Vorteil liegt im Buch unter der Illustration; nur Wortfetzen ragen hervor. */
TA_TEXT["h/leben/zeit"] = [
 "Jeder Außendienst-Agent erhält **30** abstrakte Einheiten **Zeit**, die er verbringen kann, bevor seine Laufbahn als Außendienst-Agent endet. Du hältst diese Zeit fest, indem du Kästchen auf den Leisten ausfüllst, also „**markierst**“, die zu deinen Entscheidungen gehören.",
 {t:"html", x:'<p>Immer wenn du Zeit verbringst, markiere das erste unmarkierte Kästchen auf einer deiner verfügbaren Leisten. Wähle weise: Deine Zeit ist kostbar und kommt nie wieder. Um darzustellen, was du verloren hast, <b>streichst</b> du anschließend – das heißt, du machst dauerhaft unzugänglich – das letzte unmarkierte Kästchen der anderen <em class="hb-marke">zwei</em></p>'},
 "Jedes Mal, wenn ein Kästchen markiert wird, erhältst du den **Hauptvorteil**, der zu deiner Wahl gehört. Markierst du ein Kästchen mit dem Code eines Dokuments hinter der Playwall, bist du berechtigt, dieses Dokument hinter der Playwall zu finden, es privat zu lesen und alle aufgeführten Vorteile zu erhalten.",
 {t:"h3", x:"Hauptvorteile der verbrachten Zeit"},
 {t:"html", x:'<div class="hb-zeit">'},
 {t:"pikto", x:[
  {z:"pikto-zeit-kompetenz", h:"Kompetenz:", x:"Erhöhe die maximale Qualitätssicherung um eins in einer beliebigen Qualität mit weniger als neun. Erhalte {3} Belobigungen."},
  {z:"pikto-zeit-realitaet", h:"Realität:", x:"Erhöhe die Verbindung zu einer beliebigen Beziehung um eins und erhalte im nächsten Einsatz ihren Verbindungsbonus. Wiederhole diesen Vorteil ein zusätzliches Mal für jede Beziehung, die derzeit auf maximaler Verbindung steht."}]},
 {t:"html", x:'<div class="unten"><svg class="schnur" viewBox="0 0 300 230"><path d="M54 0C54 60 150 30 150 80S-10 70 14 140s120 50 150 20" fill="none" stroke="#2d50a7" stroke-width="4" stroke-linecap="round"/></svg><img class="auge" src="img/zeichen/symbol-auge-blau.png" alt=""><h3 class="an">Anomalie:</h3>' +
   '<i style="left:150px;top:44px">Erhöhe</i><i style="left:128px;top:70px">entsprechend</i><i style="left:520px;top:92px">Fähigkeit</i><i style="left:330px;top:108px">Geübt</i><i style="left:590px;top:124px">Bonus</i><i style="left:292px;top:134px">kostbar</i><i style="left:400px;top:146px">Maximum</i><i style="left:30px;top:160px">um eins mit</i><i style="left:660px;top:150px">wiederhole</i><i style="left:700px;top:196px">zusätzliches Mal</i>' +
   '<img class="art" src="img/regeln/full/work-life-balance-vielarmiger-agent.webp" alt="" onclick="zoom(this.src)"></div></div>'}
];
TA_TEXT["h/leben/erleben"] = [
 {t:"sp", x:[
  ["Wir ermutigen Agenten und General Manager, die auf dem Work-Life-Balance-Bogen verbrachte Zeit als **Szenen** zu erleben. Du kannst diese Szenen ähnlich betrachten wie deine Arbeit im Außendienst: Du tauchst in die <Freude an der Arbeit/das Tabletop-Rollenspiel> ein und erlebst Gespräche in Echtzeit, ruhige Momente und fesselnde Begegnungen.",
   "Szenen können eine unterhaltsame Würze für die Zeit sein, die du für deine Kompetenz eingestempelt hast, aber besonders wichtig sind sie für Agenten, die fälschlicherweise in ihrer Realität verweilen. Gruppen sollten davon ausgehen, dass jedes Mal, wenn ein Agent die Verbindung zu einer seiner Beziehungen verbessert, die dafür aufgewendete Zeit eine Szene ergibt."],
  ["Wenn dir keine aufregende Idee für eine Szene einfällt oder du nicht alle ausspielen möchtest, kannst du kurz beschreiben, was geschah, und weitermachen. Versuche, das auf das absolute Minimum zu beschränken.",
   "Eine Auswahl ohne Details kann die stabile Verbindung zwischen deinem Agenten und deinem Tisch-Ich stören. Diese Lücken können dazu führen, dass dein Agent oder seine Beziehungen dich mit Verweisen auf Ereignisse überraschen, die du nicht erlebt hast und an die du dich nicht erinnerst."]
 ]},
 {t:"h", x:"Zeit für die Zeit finden"},
 "Wenn dir die Spielzeit fehlt oder die Zahl möglicher Szenen direkt nach einem Einsatz überwältigend wirkt, empfehlen wir, die Zeit auf eine dieser Arten zu erleben:",
 {t:"pikto", x:[
  {z:"pikto-zeit-chat", h:"Per E-Mail, Chat oder Post", x:"Die beliebteste Möglichkeit. Euer Leben digital oder asynchron auszuspielen hält in den Pausen alle bei der Stange, lässt mehr Raum für Einsätze am Tisch und verbessert im Büro deine Tippgeschwindigkeit bzw. Handschrift."},
  {z:"pikto-zeit-zwischensitzung", h:"Mit einer Zwischensitzung", x:"Trefft euch einmal ohne Einsatz! Das eignet sich hervorragend für Gruppen, die gelegentlich unstrukturiertes Rollenspiel mögen, wenn der General Manager nichts vorbereiten kann oder wenn im Leben eines Agenten etwas Großes ansteht, das interessant genug ist, um es vollständig auszuspielen."}]},
 {t:"sp", x:[
  [{t:"kasten", h:"Kompetenz-Szene", b:[{t:"dialog", x:[
   ["AGENT 1", "Ich möchte mich bei Direktionsreferentin Mulgrew melden – sie hat doch gesagt, sie sucht Freiwillige für irgendetwas, oder?"],
   ["GM", "Super! Denk dran, der Aufzug bringt dich nicht in ihr Büro. Nimmst du also die Treppe?"],
   ["AGENT 1", "Auf keinen Fall. Ich Kenne Eine Abkürzung!"],
   ["AGENT 2", "Angeber."],
   ["GM", "Du kommst tatsächlich vor ihr an: Ein Praktikant hält vor ihrer geschlossenen Tür Wache."],
   ["AGENT 3", "Warte! Kann das Stewart sein??"],
   ["GM", "Klar. „SEI GEGRÜSST, WINZIGER MENSCH.“"],
   ["AGENT 1", "Hi, Stewart! Ich suche die DR. Kannst du mich bitte zu ihr bringen?"],
   ["GM", "„DU WEISST, DASS ICH AN DEN RITUS DER ZEHNFACHEN HAND GEBUNDEN BIN. ES IST ÜBERFLÜSSIG, ZU FRAGEN, WAS DU BEREITS WEISST. FOLGE MIR.“"],
   ["AGENT 2", "Gott, ich liebe Stewart."],
   ["GM", "Er führt euch aufs Dach, wo Mulgrew vor drei Leichensäcken steht."],
   ["AGENT 1", "Typisch Mulgrew."]]}]}],
  [{t:"kasten", h:"Realitäts-Szene", b:[{t:"dialog", x:[
   ["AGENT 1", "Ich habe eine Verbindung zu Tante Maggie verloren, als wir ihr Boot zu Bruch gefahren haben, also versuche ich, die Dinge wieder einzurenken."],
   ["AGENT 2", "Okay! Sie hat gesagt, sie geht zum See, um für ihr nächstes Porträt Modell zu stehen. Willst du sie dort treffen?"],
   ["AGENT 1", "Ja! „Heeeey, Tantchen Maggie …“ Ich breite die Arme weit aus, für eine dicke Umarmung."],
   ["AGENT 2", "„Lee! Er hat gesagt, ich muss stillstehen, also komm her und umarm mich.“"],
   ["GM", "Der Maler protestiert: „Nicht –“"],
   ["AGENT 2", "Zu spät! Wir umarmen uns."],
   ["AGENT 1", "„Das mit dem Motorboot tut mir so leid.“"],
   ["AGENT 2", "„Ach, Boot ist Boot. Bradley sucht schon nach einem Ersatz. Mehr Sorgen macht mir, dass du dich nicht gemeldet hast! Ich war völlig außer mir, als ich den Unfall in den Nachrichten gesehen habe. Es hieß, es gebe keine Überlebenden!“"],
   ["AGENT 1", "Oh Gott, das hat unsere Presseerklärung gesagt, oder?"]]}]}],
  [{t:"kasten", h:"Szene der Anomalie", b:[{t:"dialog", x:[
   ["AGENT 1", "ich will stärker werden. ich habe so viel potenzial, die welt kann es kaum fassen"],
   ["GM", "Großartig! Denk dran, der Aufzug hält vor dem obersten Stock, weil sie es verlangen. du kannst höher hinaus. du kannst mehr sein"],
   ["AGENT 1", "Auf keinen Fall. natürlich kann ich. es gibt keine Grenze für das, was ich erreichen kann, wenn ich nur zugreife"],
   ["AGENT 2", "Zeig deine Macht. es gibt keine Grenze für das, was du kannst, mit meiner Hilfe"]]}]}]
 ]}
];
TA_TEXT["h/leben/laufbahn"] = [
 "Gemeinsam mit deiner Gruppe müsst ihr entscheiden, wie viel Zeit zwischen den einzelnen Einsätzen zur Verfügung steht. Diese Entscheidung bestimmt die Länge der Laufbahn eines einzelnen Außendienst-Agenten in eurer Zweigstelle. Wir empfehlen **1–{3} verbrachte Zeit** nach jedem Einsatz, also eine Laufbahnlänge von **10–{3}0 Einsätzen**.",
 "Hier sind einige Möglichkeiten, wie eure Gruppe festlegen kann, wie die Zeit verteilt wird:",
 {t:"num", x:[
  {h:"Festgelegt", x:"\n**Nach jedem Einsatz steht dieselbe Menge Zeit zur Verfügung.**\n\nUm zu bestimmen, wie viele Einsätze es dauert, die Laufbahn eines Agenten abzuschließen, teile **{3}0** durch die gewählte Menge Zeit. Das ist verlässlich und beständig.\n\nBedenke, dass alles über {3} eine möglicherweise überwältigende Menge an Veränderung und Entwicklung für einen einzelnen Agenten zwischen den Einsätzen sein kann."},
  {h:"Nach Einsatzdauer", x:"\n**Die Menge an Zeit nach jedem Einsatz richtet sich nach der Zahl der etwa {3}-stündigen Sitzungen, die es gebraucht hat, den Einsatz abzuschließen.**\n\nDiese Methode hält das Wachstum im Einklang mit der Spielzeit gleichmäßig und erlaubt der Gruppe, eine Zahl von Sitzungen für ihre gesamte Kampagne zu planen.\n\nDiese Methode ist besonders nützlich, wenn deine Gruppe im Außendienst eher langsam vorankommt, aber stark von der Entwicklung des <Agenten/der Figur> motiviert ist."},
  {h:"Nach „echter“ Zeit zwischen den Einsätzen", x:"\n**Die Menge an Zeit, die nach jedem Einsatz zur Verfügung steht, entspricht jeder Woche Tisch-Ich-Zeit zwischen den Einsätzen.**\n\nDiese Methode hält das Wachstum zeitlich gleichmäßig und bietet einen spannenden Anlass, mit Gruppen in Kontakt zu bleiben, die weniger regelmäßige Terminpläne haben.\n\nWenn ihr diese Methode nutzt, empfehlen wir, eine Obergrenze bei {3}–5 Zeit zu setzen, bei der zusätzliche Wochen nicht mitgezählt werden.\n\nWenn ihr diese Methode nutzt, erwägt, jede Entscheidung zu treffen, sobald sie verfügbar wird, und jede verbrachte Zeit mit eurer Gruppe in lockerer Form (etwa in einem Chatraum) zu besprechen. Das fördert regelmäßige Kommunikation und motiviert dein Außenteam, wieder an die Arbeit zu gehen!"}]}
];
TA_TEXT["h/leben/ruhestand"] = [
 "Zeit auf deiner Kompetenz-Leiste zu verbringen bedeutet, länger im Büro zu bleiben, an Schulungen teilzunehmen, Vorgesetzten zuzuarbeiten und die Pflichten deiner Kompetenz auch sonst in makelloser Qualität zu erfüllen. Um dieses Verhalten zu belohnen und zu fördern, haben wir den folgenden Hauptvorteil vorbereitet:",
 {t:"kasten", b:["Wenn du ein Kästchen auf deiner Kompetenz-Leiste markierst, erhöht sich deine maximale Qualitätssicherung um eins in einer einzelnen Qualität deiner Wahl. (Keine Qualität kann mehr als 9 maximale Qualitätssicherung haben.) Außerdem erhältst du {3} Belobigungen."]},
 "Diese Qualitätssicherungen stehen für die Menge an Macht, die die Agency bereit ist, mit dir zu teilen, solange du im Außendienst bist. Mehr QS bedeuten mehr Fragen an die Agency, mehr Erfolg und insgesamt einen haltbareren und verlässlicheren Agenten.",
 "Als zusätzlichen Anreiz berechtigt dich jedes dritte Mal, das du auf deiner Kompetenz-Leiste markierst, zu einer **Beförderung**! Genaues Wissen über die Vorteile einer Beförderung liegt hinter der Playwall, aber glaube uns, wenn wir sagen, dass sie äußerst begehrenswert sind! Jedes Mal, wenn du eine Beförderung erhältst, ändere den Titel auf deinem Charakterbogen.",
 "Die Kompetenz-Leiste auf dem Work-Life-Balance-Bogen sieht so aus:",
 {t:"leiste", h:"Trainee → Sachbearbeiter → Senior-Sachbearbeiter → Stellvertretender Direktor → Direktor", c:"var(--rot)", x:["","","A3","","","D4","","","G3","","","J3","","","N3"]},
 {t:"leiste", h:"Vorsitzender ← Exekutiv-VP ← Senior-VP ← Vizepräsident ← Regionaldirektor", c:"var(--rot)", x:["","","","Y2","","","W8","","","T3","","","Q3","",""]},
 {t:"h", x:"Ruhestand"},
 {t:"sp", x:[
  ["Manche Dokumente hinter der Playwall führen Ruhestandsoptionen für deinen Agenten ein. Sobald du eine hast, darfst du jederzeit den Außendienst verlassen, um diesen Ruhestandsplan zu verfolgen. Manche Ruhestandspläne sind nicht freiwillig und müssen sofort angetreten werden.",
   "Am Ende der Laufbahn jedes Agenten entnehmen wir sein inzwischen gut geschultes Tisch-Ich seinem Geist und verwenden es als Grundlage für das Tisch-Ich eines anderen Agenten, sodass neue Rekruten mit einem vertrauteren Verständnis von <der Realität/den Regeln> beginnen können. Das bedeutet, dass künftige Agenten zwar andere Persönlichkeiten, Sichtweisen und Prioritäten haben mögen, aber eine unterbewusste Geschichte mit ihrer Zweigstelle besitzen, auf die sie bei ihren Entscheidungen zurückgreifen können. Fantastisch!"],
  ["Wenn du dich nicht motiviert fühlst, einen weiteren Agenten zu spielen, liegt es entweder daran, dass dir andere Tabletop-Rollenspiele zugewiesen wurden, bis ein neuer Agent verfügbar ist, oder daran, dass du in den Ruhestand versetzt wurdest und nicht mehr existierst. Wir sorgen dafür, dass du glaubst, du lebst den Rest deines Lebens, bevor wir deine Daten verwerfen."]
 ]}
];
TA_TEXT["h/leben/anforderungen"] = [
 {t:"sp", x:[
  ["Immer wenn du in der Agency bist, kannst du Belobigungen für verschiedene Waren und Dienstleistungen ausgeben. Manche davon ähneln vielleicht Dingen, die du schon besitzt, aber unsere sind mit Sicherheit von höherer Qualität als alles, was du bereits hast.",
   "Zu Beginn deiner Laufbahn als Außendienst-Agent hast du nur Zugriff auf die Anforderungen auf den folgenden Seiten. Mit Beförderungen und deinem Aufstieg auf der Karriereleiter erhältst du besondere Vorteile und zusätzliche Waren zum Kauf!"],
  ["Gelegentlich wird dein Außenteam damit beauftragt, Vault-Architekten bei der Entwicklung zusätzlicher Anforderungen zu unterstützen. Behalte dann folgende Richtlinien im Hinterkopf:",
   {t:"liste", x:["Sie sollten leicht anwendbar sein, ohne Lose Enden zu erzeugen.", "Sie sollten für Ermittlungen nützlich sein.", "Ihre Kosten in Belobigungen sollten ungefähr ihrer Machtstufe entsprechen."]}]
 ]},
 {t:"html", x:'<div class="skala breit">' + [["1–9","Einmalige, vorübergehende oder weniger offensichtlich nützliche Effekte."],["10–19","Kleine Verbesserungen der Lebensqualität für den durchschnittlichen Agenten, die womöglich wiederverwendbar sind."],["20–29","Große Verbesserungen der Lebensqualität oder gewaltige Effekte, die bestimmte Situationen erheblich verbessern."],["29+","Sehr große Effekte, die regelmäßig Lösungen für häufige Probleme bieten oder das typische Muster deiner Arbeit verändern."]].map(function(r){ return '<div><b>' + r[0] + ' <img src="img/zeichen/symbol-belobigung.png" alt="" style="height:16px;vertical-align:-2px"></b><span>' + r[1] + '</span></div>'; }).join("") + '</div>'},
 {t:"bild", src:"schliessfaecher", pos:"breit", w:900},
 {t:"h", x:"Jetzt verfügbar!"},
 "Die folgenden Anforderungen können unmittelbar nach deinem ersten Einsatz gekauft werden.",
 {t:"preis", x:[
  {h:"Offizieller Triangle-Agency-Becher", z:"pikto-anf-becher", p:"3 / 18", b:["Dieser stilvolle Keramikbecher fasst jede Flüssigkeit in einem angemessenen Temperaturbereich.", {t:"tab", x:[["12 oz","3 Belobigungen"],["18 oz","18 Belobigungen"]]}]},
  {h:"Praktische Büroklammer", z:"pikto-anf-bueroklammer", p:"1 / 15", b:["Diese zweieinhalb Zentimeter lange Metallbüroklammer erlaubt es Agenten, beliebig viele Dokumente oder digitale Dateien unauffällig aufzubewahren. Befestige Papierdateien mit ihr aneinander, um sie zu verstauen, oder halte ein Ende der Büroklammer an einen beliebigen Datenanschluss, um digitale Daten zu speichern, zu übertragen oder zu kopieren. Die Menge der auf der Büroklammer gespeicherten Daten ist unbegrenzt; eine beliebige Zahl von Papieren sieht aus wie ein unauffälliger Stapel von fünf oder so Blättern. Beachte, dass alle auf einer Büroklammer gespeicherten Informationen Eigentum der Agency werden.", {t:"tab", x:[["Büroklammer – Miete","1 Belobigung"],["Büroklammer – Kauf","15 Belobigungen"]]}]},
  {h:"Seitentaschen-Schließfach zur Miete", p:"1 / 3 / 11 / 33", b:["Dieses Metallschließfach, gewartet von diensthabenden Manifolds, ist jederzeit während eines Einsatzes zugänglich, indem du mit einem Gegenstand in der Hand hinter dich greifst (um den Gegenstand zu verstauen) oder mit leerer Hand hinter dich greifst (um einen Gegenstand zu entnehmen). Gegenstände altern und verfallen im Schließfach normal.", "Das kleine Schließfach hat die Größe eines durchschnittlichen Rucksacks. Das große Schließfach hat die Größe einer durchschnittlichen Garage.", {t:"tab", x:[["Kleines Schließfach – Miete","1 Belobigung"],["Großes Schließfach – Miete","{3} Belobigungen"],["Kleines Schließfach – Kauf","11 Belobigungen"],["Großes Schließfach – Kauf","{3}{3} Belobigungen"]]}]},
  {h:"Betriebsverpflegungsplan der Triangle Agency", z:"pikto-anf-essensplan", p:"1 / 15", b:["Wenn du dir in einem beliebigen Restaurant Essen bestellst, darfst du eine Firmenkarte der Agency verwenden, solange du nur aus dieser genehmigten Speiseliste bestellst: Samosas; Crêpes (gefaltet serviert); Onigiri; Sandwiches (in Dreiecke geschnitten); Pizza oder Kuchen (stückweise); Hamentaschen; Pfeilkrabbe; Schweizer Dreieckschokolade. Zusätzliche Optionen müssen von deinem General Manager genehmigt werden.", {t:"tab", x:[["Ein-Einsatz-Verpflegungsplan","1 Belobigung"],["Dauerhafter Verpflegungsplan","15 Belobigungen"]]}]},
  {h:"Wohltätige Spende", z:"pikto-anf-spende", p:"9", b:["Ein zufällig ausgewähltes bedürftiges Waisenhaus erhält die Finanzierung für ein Jahr.", {t:"tab", x:[["Danke für deine Spende!","9 Belobigungen"]]}]},
  {h:"Dreirad-Fahrservice", z:"pikto-anf-auto", p:"1 / 15", b:["Dir wird ein persönliches Fahrzeug deiner Wahl zugewiesen: ein beliebiges handelsübliches, straßenzugelassenes motorisiertes Objekt, das groß genug ist und über alle nötigen Vorrichtungen für dein gesamtes Außenteam verfügt. Die Rückgabe eines beschädigten Autos führt zu Verweisen.", {t:"tab", x:[["Fahrservice – Gastkarte","1 Belobigung"],["Fahrservice – Lebenslange Mitgliedschaft","15 Belobigungen"]]}]},
  {h:"Offenlegungsvereinbarung", z:"pikto-anf-offenlegung", p:"1 / 15", b:["Von dieser Vereinbarung erfasste Agenten ermächtigen die Agency, ihre Gedanken zu transkribieren und anderen Agenten Gedanken in den Kopf einzupflanzen, wann immer beide es wünschen. Das erleichtert die Kommunikation zwischen Agenten und erlaubt es euch, euch ohne gesprochene Worte und über große Entfernungen zu unterhalten. Alle Agenten müssen ihre eigene Offenlegungsvereinbarung unterzeichnen, um teilzunehmen.", {t:"tab", x:[["Offenlegungsvereinbarung – Gastkarte","1 Belobigung"],["Offenlegungsvereinbarung – Mitgliedschaft","15 Belobigungen"]]}]},
  {h:"Offizielle Trainingsjacke der Triangle Agency", z:"pikto-anf-jacke", p:"15", b:["Diese leichte, atmungsaktive Jacke erlaubt es Agenten, bequem und unbehindert zu bleiben und dabei makellosen Geschmack zu zeigen. Agenten können beantragen, dass ihr Name oder Rufzeichen quer über den Rücken gedruckt wird; auf der rechten Brustseite ist Platz für die aufgestickten Abzeichen, die Agenten mit jeder Beförderung erhalten.", {t:"tab", x:[["Jede Größe","15 Belobigungen"]]}]},
  {h:"Triangle-at-Home-Geschenkkarte", z:"pikto-anf-geschenkkarte", p:"1 / 66", b:["Solange du im Büro bist oder dich während eines Einsatzes in einem Einkaufszentrum aufhältst, kannst du das Guthaben dieser Geschenkkarte ausgeben, um Requisiten, Möbel, Haushaltswaren und alle sonstigen handelsüblichen profanen Gegenstände zu kaufen, die deine Ermittlung erfordern könnte. Waren nicht zum Weiterverkauf.", {t:"tab", x:[["Triangle at Home 1000-$-Geschenkkarte","1 Belobigung"],["Triangle at Home 3.000.000-$-Geschenkkarte","66 Belobigungen"]]}]},
  {h:"Abteilungsversetzungsantrag", z:"pikto-anf-versetzung", p:"15 / 30", b:["Du fühlst dich in deiner jetzigen Abteilung fehl am Platz? Beantrage eine Versetzung von deiner Kompetenz in eine beliebige Kompetenz, die in deinem aktuellen Außenteam nicht vertreten ist. Beachte, dass du ab Beginn deines nächsten Einsatzes nur Zugriff auf die Erstanforderung deiner neuen Kompetenz hast.", {t:"tab", x:[["Erstmals","15 Belobigungen"],["Jedes weitere Mal","30 Belobigungen"]]}]},
  {h:"Antrag auf Geschichtsänderung", z:"pikto-anf-geschichte", p:"99", b:["Nutze das **{3} % Flash-Back**-Programm der Agency, um einen bestimmten profanen Moment aus deiner Vergangenheit umzuschreiben. Das kann alles umfassen, von der Anpassung dessen, was du in einem schicksalhaften Gespräch gesagt hast, bis zur Änderung der Frage, ob du heute Morgen Mayonnaise auf dein Sandwich getan hast.", "Beachte, dass dies vergangene Interaktionen mit anomalen Wesen, einschließlich deiner persönlichen Anomalie, nicht beeinflussen kann.", {t:"tab", x:[["Alle Anträge","99 Belobigungen"]]}]},
  {h:"LMZ „Skybreaker“ Hubschrauber der Archon-Klasse", z:"pikto-anf-hubschrauber", p:"333 / 999", b:["Dieser hochmoderne Hubschrauber im Agency-Design bietet Freiheit von all deinen irdischen Sorgen. Mit hochwertigen Ledersitzen für bis zu **9** Passagiere, einer Reichweite von über **300** Seemeilen, einer Reisegeschwindigkeit von **140** Knoten, einem anpassbaren automatisierten Assistenten und gekühlten Getränkehaltern ist der Skybreaker wahrhaft das höchste Reisevergnügen.", "Pilotenausbildung nicht inbegriffen. Haftungsverzichtserklärung erforderlich.", {t:"tab", x:[["Basismodell","{3}{3}{3} Belobigungen"],["Feuerfest","999 Belobigungen"]]}]}
 ]}
];
TA_TEXT["h/leben/realitaet"] = [
 {t:"sp", x:[
  ["In der Agency wissen wir zu schätzen, dass du vermutlich Menschen, Orte und Institutionen hast, die dir am Herzen liegen. Der Wunsch, sie zu schützen, mag es gewesen sein, der dich überhaupt erst dazu gebracht hat, eine Anstellung bei uns zu suchen! Und so verstehen wir, obwohl es nicht unserer Präferenz entspricht, dass Agenten oft Zeit damit verbringen, sich um ihre **Beziehungen** zu kümmern.",
   "Beziehungen sind Schlüsselattribute deiner Realität. Es sind Figuren aus deiner Vergangenheit und Gegenwart, die zu der runden Persönlichkeit beitragen, die du heute bist. Deine Bindung zu ihnen heißt **Verbindung**.",
   "Zeit in deiner Realität zu verbringen bringt folgenden Hauptvorteil:",
   {t:"kasten", b:["Wenn du ein Kästchen auf deiner Realitäts-Leiste markierst, erhöhst du die Verbindung einer Beziehung um eins. Die Verbindung kann nicht über neun steigen.", "Sobald eine Beziehung neun Verbindung hat, schließt sie sich deinem **Netzwerk** an. Vernetzte Beziehungen helfen dabei, deinen Ruf zu steigern und die Bande deiner Gemeinschaft zu stärken. Wenn du Zeit auf deine Realität verwendest, füge einer anderen Beziehung für jede Person in deinem Netzwerk eine zusätzliche Verbindung hinzu."]}],
  ["In eine Beziehung investierte Zeit kann eine Woche in einem Strandresort oder ein einziges herzliches Gespräch darstellen. Deine Beziehungen haben möglicherweise Vorschläge, wie sie ihre Zeit mit dir am liebsten verbringen.",
   "**Sinkt die Verbindung von eins auf null,** verlierst du diese Beziehung dauerhaft."]
 ]},
 "Die Work-Life-Balance-Leiste der Realität sieht so aus:",
 {t:"leiste", c:"var(--gelb)", x:["C4","","","L11","","","","E2","","O4","","","","T6",""]},
 {t:"leiste", c:"var(--gelb)", x:["","","","","E3","","","","H5","","X3","","","","V2"]},
 {t:"h", x:"Verbindungsboni"},
 "Das erste Mal, wenn du Verbindung zu einer beliebigen Beziehung gewinnst, musst du diese Zeit als Szene erleben. Überlege am Ende dieser Szene sorgfältig, wer diese Person ist, und weise ihr einen **Verbindungsbonus** aus der Liste zu.",
 {t:"liste", x:["Nachdem du oder dein Netzwerk die Verbindung zu einer Beziehung erhöht hat, hast du während deines nächsten Einsatzes Zugriff auf ihren Verbindungsbonus.", "Wenn eine Beziehung sich deinem Netzwerk anschließt, hast du immer Zugriff auf ihren Verbindungsbonus."]},
 "Wenn keiner der vorhandenen Verbindungsboni für eine Beziehung sinnvoll ist oder du einen wiederholen müsstest, bestimme gemeinsam mit deinem GM und dem Spieler, der die Beziehung führt, anhand der Eigenschaften dieser Person einen neuen Bonus.",
 {t:"sp", x:[
  [{t:"h3", x:"Vorausschauend"}, "Diese Person ist immer ein paar Schritte voraus. Bei deinem nächsten Einsatz kannst du sie jederzeit anrufen, um eine Warnung vor Gefahr oder möglichem großem Schaden zu erhalten, bevor er eintritt.",
   {t:"h3", x:"Mitfühlend"}, "Diese Person ist äußerst verständnisvoll und kann gut mit Menschen umgehen. Solange dieser Bonus aktiv ist, kann sie kein Loses Ende werden, und wenn du sie bittest, dir dabei zu helfen, eine kleine Gruppe ruhig zu halten, hat sie gute Erfolgsaussichten.",
   {t:"h3", x:"Vernetzt"}, "Diese Person kennt alle. Wenn du eine Vorstellung bei fast allen außer den zurückgezogensten und verschwiegensten Menschen brauchst, kann sie sie arrangieren. Blamierst du sie dadurch, verlierst du eine Verbindung zu dieser Beziehung.",
   {t:"h3", x:"Verflucht"}, "Nichts läuft richtig, wenn diese Person in der Nähe ist. Einmal während deines Einsatzes kannst du sie bitten, höflich mit jemandem oder etwas in Kontakt zu treten, und der Fluch geht auf sie über und bereitet ihnen Unannehmlichkeiten und Störungen für ihren Tag."],
  [{t:"h3", x:"Frühanwender"}, "Diese Person besitzt allerlei seltsame Geräte. Einmal während deines Einsatzes kannst du ein perfektes Nischengerät enthüllen, das für deine Lage relevant ist und das sie dir schon zum Ausleihen mitgegeben hat. Geht es kaputt oder verloren, verlierst du eine Verbindung zu dieser Beziehung.",
   {t:"h3", x:"Belebend"}, "Indem du während deines Einsatzes einmal zu einem beliebigen Zeitpunkt eines der Rituale deiner Freundschaft mit dieser Person ausführst (*etwas trinken gehen, Pickup-Basketball spielen, einander die Nägel lackieren usw.*), kannst du {3} deiner ausgegebenen Qualitätssicherungen wieder aufladen.",
   {t:"h3", x:"Modebewusst"}, "Diese Person hat alles, was du möglicherweise in ihrem Kleiderschrank brauchen könntest. Wenn du Kleidung zum Wechseln, eine Verkleidung oder ein beeindruckendes Outfit irgendeiner Art brauchst, besorgt sie es dir schnell und einfach. Zerstörst oder verlierst du etwas von ihren Sachen, verlierst du eine Verbindung zu dieser Beziehung.",
   {t:"h3", x:"Einflussreich"}, "Einmal pro Einsatz kannst du dieser Person von einer Idee, einem Trend oder einer Meinung erzählen, und sie verbreitet sie sofort über ihr Netzwerk. Danach kennen alle bis auf die zurückgezogensten Menschen, denen du begegnest, diese Idee und haben sich eine Meinung dazu gebildet."],
  [{t:"h3", x:"Mobil"}, "Diese Person hat Zugang zu einem ungewöhnlichen Fortbewegungsmittel und viel Freizeit. Solange dieser Bonus aktiv ist, fährt sie dich in ihrem Fahrzeug herum oder lässt es dich ausleihen. Geht ihr Fahrzeug kaputt oder verloren, verlierst du eine Verbindung zu dieser Beziehung.",
   {t:"h3", x:"Zäh"}, "Wenn diese Person in der Nähe ist, kann sie Zivilisten oder dich {3}-mal vor dem Tod durch einen einzelnen Schaden bewahren, bevor sie sich selbst zurückziehen und erholen muss.",
   {t:"h3", x:"Ehrwürdig"}, "Einmal während deines Einsatzes kannst du diese Person um Rat in einer beliebigen zwischenmenschlichen Situation bitten. Sie legt die Möglichkeiten oder die beste Option klar dar, und sie hat recht. Zu viele Informationen preiszugeben kann dennoch Lose Enden erzeugen.",
   {t:"h3", x:"Belesen"}, "Wenn du ein Stück historisches Wissen oder die Funktionsweise von etwas Mechanischem wissen musst, kannst du diese Person einmal während deines Einsatzes anrufen, und sie kennt verlässlich die Antwort. Zu viele Informationen preiszugeben kann dennoch Lose Enden erzeugen."]
 ]}
];
TA_TEXT["h/leben/auszeichnungen"] = [
 "Deine Eignung für Beförderungen wird nicht nur durch deine private Arbeit bestimmt; wir beobachten auch, wie gut du mit anderen zusammenarbeitest. Nach jedem Einsatz vergibt dein GM die folgenden Auszeichnungen. Du kannst nicht mehr als eine davon erhalten, und sie werden stets in der Reihenfolge Probezeit, Einsatz-MVP, Teilnehmer vergeben.",
 {t:"sp", x:[
  [{t:"h", z:"symbol-probezeit", x:"Probezeit"},
   "Der Agent, der seit Abschluss des vorherigen Einsatzes die meisten Verweise angesammelt hat, tritt in die **Probezeit** ein. Bei Gleichstand geht sie an den Agenten mit den wenigsten Belobigungen. Gibt es erneut Gleichstand, geht sie an alle im Gleichstand. Die Probezeit hat folgende Auswirkungen:",
   {t:"liste", x:["Du musst die Rote Flagge der Schande tragen. (Die Roten Flaggen der Schande wechseln saisonal. Der General Manager und andere Mitglieder des Außenteams legen das aktuelle Design fest.)"]},
   {t:"html", x:'<p style="color:var(--blau);display:flex;gap:10px;align-items:flex-start"><img src="img/zeichen/symbol-auge-blau.png" alt="" style="height:26px;margin-top:2px"><span>Du darfst ein Kästchen auf der <b>ANOMALIE</b>-Leiste markieren und ihre Vorteile erhalten, ohne Kästchen auf anderen Leisten zu streichen.</span></p>'},
   {t:"bild", src:"socken-dreiecksmuster", pos:"mitte", w:330},
   {t:"h", z:"symbol-teilnehmer", x:"Teilnehmer"},
   "Jeder andere Agent erhält ein Teilnahmeband. Da du außerdem keinen Papierkram ausfüllen und an keiner mit Probezeit oder MVP verbundenen Zeremonie teilnehmen musst, darfst du einer beliebigen Beziehung eine Verbindung hinzufügen."],
  [{t:"bild", src:"auszeichnung-krawattennadeln", pos:"mitte", w:340},
   {t:"h", z:"symbol-mvp", x:"Einsatz-MVP"},
   "Der Agent, der seit Abschluss des vorherigen Einsatzes die meisten Belobigungen erhalten hat, erhält den **Einsatz-MVP**. Bei Gleichstand geht er an den Agenten mit den wenigsten Verweisen. Gibt es erneut Gleichstand, geht er an alle im Gleichstand. Der Einsatz-MVP bringt zwei Auswirkungen mit sich:",
   {t:"liste", x:["Du darfst die Socken des Erfolgs tragen. (Die Socken des Erfolgs wechseln saisonal. Der General Manager und andere Mitglieder des Außenteams legen das aktuelle Design fest.)", "Du darfst ein Kästchen auf der Kompetenz-Leiste markieren und ihre Vorteile erhalten, ohne Kästchen auf anderen Leisten zu streichen."]},
   "Wenn du keine Belobigungen erhalten kannst (oder sie durch Belobigungsschulden verlierst), zählst du trotzdem mit, wann du sie erhalten würdest, und diese Zahl kann dir den MVP einbringen."]
 ]},
 {t:"warn", h:"HALT!", z:"symbol-halt-hand", b:[{t:"lead", x:"Glückwunsch! Du hast nun das Handbuch für Außendienst abgeschlossen."}, "Wenn du nicht als General Manager ausgewählt wurdest, lies nicht weiter. Lies nicht das Werkzeug der Geschäftsleitung und lies Dokumente hinter der Playwall nur, wenn dein Work-Life-Balance-Bogen dich dazu anweist.", "Wenn du Fragen oder Bedenken zu Dingen hast, die in diesem Dokument nicht behandelt werden, richte sie bitte an deinen General Manager. Wenn er keine zufriedenstellende Antwort hat, reiche bitte einen Bericht über sein Versagen zur Prüfung ein.", "Die vor uns liegende Arbeit wird nicht leicht sein, aber sie wird lohnender sein als alles, was du je getan hast. Unsere Zukunft hängt von dem Mitarbeiter ab, der du wirst.", "Wir haben so unendlich lange auf dich gewartet, Agent.", {t:"lead", x:"Willkommen im ersten Job deines restlichen Lebens."}]},
 {t:"bild", src:"agent-rot-gesichtslos-sitzend", pos:"breit", w:420}
];
