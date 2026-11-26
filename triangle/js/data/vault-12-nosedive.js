/* The Vault – Nosedive (Buch S. 198–214). Übersetzung aus dem Englischen. */
window.TA_VAULT = window.TA_VAULT || {};
TA_VAULT["nosedive"] = {
 cw: "Überdosis, Körperverwandlungen, Stromschläge, obdachlose Jugendliche",
 chaosP: 202,
 chaos: [],
 ziele: [
  {art:"bel", n:1, x:"wenn du erkennst, ob etwas, das glitzert, Gold ist (höchstens 3 pro Agent)"},
  {art:"bel", n:6, x:"wenn du an einem choreografierten Tanz teilnimmst (einmal pro Agent)"},
  {art:"ver", n:1, x:"für jeden Satz, der selbstironisch abwertende Sprache verwendet"}
 ],
 sonder: [
  {t:"h", x:"Sonderregeln"},
  "Hosts außer Leyden nutzen als instabile Resonants ein eigenes System für ihre Kräfte. Jedes Mal, wenn sie ihre Fähigkeiten einsetzen, um Menschen glücklich zu machen und das Nosedive zu erschaffen, geht das kostenlos und kostet kein Chaos. Setzen sie ihre Fähigkeiten aus einem anderen Grund ein – vor allem in einem Kampf –, geben sie Chaos auf ihrer eigenen Leiste aus und verwenden dafür die aufgeführten Kosten.",
  "**Für jedes Chaos, das sie ausgeben,** markiere ein weiteres Feld auf der Leiste des Hosts. Ist eine Leiste voll, überwältigt die Anomalie des Hosts ihn oder sie – er bzw. sie durchläuft sofort eine Verwandlung, fügt dem Pool 21 Chaos hinzu und handelt fortan als äußerst mächtige Anomalie mit dem Fokus Sicherheit des Nosedive.",
  "Es gibt eine Ausnahme: **Wenn Feast anwesend ist,** kann sie sich opfern (und wird es wahrscheinlich tun), indem sie einem sich verwandelnden Host die überschüssige anomale Energie abzieht. Ihre Münder dehnen sich aus und verschlingen sie, ohne dass irgendetwas von ihr zurückbleibt. Die Leiste des betroffenen Hosts wird vollständig geleert.",
  {t:"leiste", h:"Feast", x:["1","2","3","4","5","6","7","8","9"]},
  {t:"leiste", h:"Venice", x:["1","2","3","4","5","6","7","8","9"]},
  {t:"leiste", h:"Wodge", x:["1","2","3","4","5","6","7","8","9"]},
  {t:"leiste", h:"Mimi", x:["1","2","3","4","5","6","7","8","9"]},
  {t:"tab", kopf:["Chaos","Wirkung"], x:[
   ["1","Kleiner Effekt, der fast automatisch geschieht. Kann 1 Schaden verursachen und wird ausgegeben, um bis zu 3 Schaden für sich selbst oder andere zu überstehen/abzuwenden."],
   ["2","Großer Effekt, der Konzentration erfordert. Kann 3 Schaden verursachen."],
   ["3","Extremer Effekt, der den Körper an seine Grenzen bringt. Kann 5 Schaden verursachen."]
  ]}
 ],
 reiter: {
  profil: [
   {t:"Fundstück", p:199, b:[
    {t:"bild", seite:198, x:"Eröffnungsseite: Gruppenchat der Hosts, Titelschriftzug „Nosedive“ – von Caleb Zane Huett"},
    {t:"handout", art:"chat", h:"Nosedive – von Caleb Zane Huett", x:[
     {von:"Venice", x:"Ich Habe Eine Ankündigung"},
     {von:"Mimi", x:"ENDLICH ist jemand wach!!!"},
     {von:"Mimi", x:"mir war so langweilig!!!!!"},
     {von:"Feast", x:"Was gibt's, V?"},
     {von:"Wodge", x:"morgen"},
     {von:"Wodge", x:"will jemand snacks? die speisekammer von dem typen ist rappelvoll"},
     {von:"Wodge", x:"Anhang: vollespeisekammer.jpg"},
     {von:"Wodge", x:"falls ihr proteinriegel mögt"},
     {von:"Mimi", x:"ja, ich nehm 10"},
     {von:"Wodge", x:"du hast 100 verdient imo. soll ich sie einfach in die steckdose stopfen oder was"},
     {von:"Feast", x:"Klau nicht bei deinem Hookup, Wodge. Wir haben genug Geld. Und er wirkte nett."},
     {von:"Mimi", x:"wie KANNST du es wagen, Feast? ich VERHUNGERE!!! das glaub ich jetzt nicht!"},
     {von:"Feast", x:"Ha, ha."},
     {von:"Leyden", x:"Venice, wolltest du noch etwas sagen?"},
     {von:"Venice", x:"Danke Mimi"},
     {von:"Mimi", x:"Anhang: cartoonhasewartetgeduldig.gif"},
     {von:"Venice", x:"Heute Nacht Treffen Wir Uns . . ."},
     {von:"Venice", x:"Im La Cave"},
     {von:"Wodge", x:"WAS\n*Nachricht mit Emotionstext gesendet*"},
     {von:"Mimi", x:"JA\n*Nachricht mit Emotionstext gesendet*"},
     {von:"Feast", x:"Auf keinen Fall. Die lassen uns nie rein.\n*Nachricht von einer Spaßbremse gesendet*"},
     {von:"Venice", x:"Das ist erledigt. Und Ich Hätte Gern Einen Proteinriegel. 👍"}
    ]}
   ]},
   {t:"Überblick", p:200, b:[
    {t:"profil",
     lead:"Fünf junge Resonants, die unter der Wahrnehmungsschwelle der Agency geblieben sind, unterhalten im Partyviertel von Ternion City eine nomadische Party namens Nosedive. Die Partygänger nennen sie die Hosts; alle fünf haben sich dem Ziel verschrieben, der queeren Szene von Ternion City einen bedeutsamen und aufregenden Ort zu bieten. Nosedive leistet seiner Gemeinschaft einen unglaublichen Dienst – auf Kosten der Lebensdauer der Hosts: Durch den übermäßigen Einsatz anomaler Fähigkeiten hat sich kürzlich eine von ihnen, Leyden, vollständig in eine Anomalie verwandelt. Ihre Elektrizitätsfähigkeiten geben ihr die völlige Kontrolle über die Technik in Ternion City – doch ihre wachsende Verengung auf ein einziges Ziel gefährdet die Sicherheit der Party und die Zukunft der Hosts.",
     fokus:"Leydens Fokus ist die Sicherheit des Nosedive. Die anderen haben keinen Fokus, da sie noch Resonants sind.",
     domaene:"Wo auch immer die Party gerade stattfindet. Heute Nacht ist es das La Cave, eine mondäne Weinbar, die Venice mit veirn Glitzer-Illusionen aufgekauft hat.",
     impuls:"Alle Hosts haben mächtige Anomalien, haben aber bisher darauf geachtet, sie nicht außerhalb des Nosedive einzusetzen. Leyden ist die Einzige, die Chaos führen kann, und sie nutzt ihre Elektrizitätskraft, um das Nosedive überall in Ternion City gegen jede Bedrohung zu verteidigen, selbst gegen kleine."},
    {t:"h", x:"Geschichte"},
    "Der Anführer der Gruppe, Venice (ve/vem/veirs), war der oder die Erste, der oder die sich mit einer Anomalie verband. Ve war in der queeren Nachtszene für unglaubliche Ausstrahlung und die extreme Hingabe bekannt, von Kopf bis Fuß in Glitzer gehüllt zu sein. Tatsächlich war veir Value-Anomalie sowohl für veir Anziehungskraft als auch für veir Aussehen verantwortlich – veir Haut ist vollständig durch Glitzer ersetzt.",
    "Wodge (er/ihm), dessen Körper sich bis auf die atomare Ebene in vollständig kontrollierbare Teile aufspalten kann, und Mimi (dey/dem), das jedes Fleisch mit einer Berührung umformen kann, waren Mitbewohner an der Ternion City University und verbanden sich mit derselben Growth-Anomalie. Sie wagten es, Venice anzusprechen, als sie merkten, dass ve vielleicht ebenfalls anomal war – und die drei wurden schnell eine Clique.",
    "Feast (sie/ihr), deren Leben von einer Drain-Anomalie gerettet wurde, kam ursprünglich auf der Suche nach Mimis Hilfe, um ihre vielen anomalen Münder loszuwerden, überlegte es sich aber anders, als die Gruppe sie so willkommen hieß, wie sie war.",
    "Leyden (sie/ihr) hielt sich für die Glücklichste von allen – ihre Electricity-Anomalie ließ sie sich nach Belieben in Elektrizität verwandeln und in Elektronik übergehen –, doch der übermäßige Einsatz ihrer Kraft ließ sie plötzlich als Elektrizität festsitzen. Seit mehreren Monaten lebt sie größtenteils in Venices Handy.",
    "Zusammen sind sie die anonymen Hosts von Nosedive, einer übernatürlich ermächtigenden Wanderparty für Menschen am Rand der Gesellschaft.",
    {t:"h", x:"Erscheinung"},
    "**Venice:** Eine 2,01 m große Gestalt (6'7\"), deren Haut vollständig durch Schichten hochreflektierenden Glitzers in verschiedenen Formen und Größen ersetzt ist. Venice trägt über der Glitzerschicht oft auffällige Outfits in satten Farben – meist mit aufwendiger Konstruktion – und auffällige Kopfbedeckungen über einem kahlen Kopf.",
    "**Wodge:** Ein 1,73 m großer (5'8\"), „extrem normaler Junge“, wie Mimi ihn manchmal scherzhaft nennt; in einer normalen Menge würde Wodge unterhalb jeder Wahrnehmung bleiben. Beim Nosedive ist er meist buchstäblich kopflos und landet schnell in nichts als einem Lederharness und Slips.",
    "**Mimi:** Ständig im Wandel – ist Mimi entspannt und kümmert sich nicht um das Aussehen, wirkt dey ein bisschen wie eine Wachsfigur, die gerade schmilzt, oder wie ein Haufen ungebrannten Tons. Wenn nötig, kann dey aussehen wie jeder, den dey je gesehen hat.",
    "**Feast:** Bedeckt mit Mündern. Das fällt allen als Erstes auf. Sie hat lange rote Haare, eine athletische Figur und eine Toga – aber wenn deine Augen durch Münder ersetzt sind und es Münder in den Handflächen gibt, am Hals, an den Seiten und an den Beinen –, ist es das, was jedem auffällt.",
    "**Leyden:** Leyden existiert als große Menge empfindungsfähiger Elektrizität. Gelegentlich projiziert sie ihr ursprüngliches Aussehen auf Bildschirme, um Gespräche zu führen – dann hat sie dickes, langes schwarzes Haar, das mit der Dunkelheit des Bildschirms verschmilzt. Anders als die anderen ist sie eine Anomalie.",
    {t:"h", x:"Aktuelle Lage"},
    "Eine Serie von Stromschlägen unter jungen Menschen in Ternion City hat die Agency auf die Spur des Nosedive gebracht – und offenbart, dass Leydens Zustand sich verschlimmert. Den Hosts des Nosedive dämmert, dass ihr Paradies vielleicht nicht ewig währen wird."
   ]}
  ],
  vor: [
   {t:"Morgenbesprechung", p:201, b:[
    {t:"morgen", x:[
     "Jemand im Leben eines Agenten hat eine radikale körperliche Verwandlung hinter sich, mit der er oder sie glücklich ist und die absichtlich herbeigeführt wurde. Vielleicht eine neue Nase, ein paar Zentimeter größer oder kleiner, oder eine dramatische Ganzkörperveränderung, die völlig anders aussehen lässt.",
     "Jemand im Leben eines Agenten hat für viel Geld ein Stück Müll gekauft, das mit Glitzer bedeckt, sonst aber wertlos ist. (Vielleicht mit dem Geld des Agenten?) Alle gewöhnlichen Menschen halten es für äußerst wertvoll, aber der Effekt wirkt bei dem Agenten nicht.",
     "Ein Geschäft oder eine Bank in der Innenstadt, die ein Agent besucht, hat es mit einem schweren Hack zu tun, der die Konten leergeräumt hat; das sorgt für leichte Unannehmlichkeiten oder legt den Laden ganz lahm.",
     "Politiker in Ternion City schreiben sich einen steilen Rückgang bei Überdosierungen und drogenbedingten Krankenhausaufenthalten im vergangenen Jahr zu. Das taucht in den Nachrichten auf, bei einer öffentlichen Kundgebung, an der ein Agent vorbeikommt, oder betrifft eine politisch interessierte Beziehung.",
     "Ein Agent sieht, wie eine Gruppe junger queerer Menschen in einem Café an den Barista herantritt – keiner sagt ein Wort, aber der Barista macht ihre jeweiligen Getränke jeweils anders. Sie kannten einander nicht, doch der Barista wusste, was sie wollten, und sie wussten, was es kostet. Kein Ding."
    ]},
    {t:"kasten", h:"Resonants allein", b:[
     "Resonants ohne Zugang zu einer stabilisierenden Kraft ermächtigen ihre Anomalien jedes Mal, wenn sie sie einsetzen. Die Agency und die Urgency können beide ihre Verbündeten stabilisieren und Resonants an ihr ursprüngliches Selbst gebunden halten. Ohne sie wird jeder, der mit einer Anomalie verbunden ist, irgendwann vollständig zur Anomalie.",
     "Das bedeutet nicht, dass Persönlichkeit oder Ego völlig verloren gehen. Es bedeutet vielmehr, dass Leyden nur überleben kann, indem sie die Aufmerksamkeit auf ihren Fokus lenkt. Das Nosedive unsicher zu machen ist eine direkte Bedrohung ihres Lebens.",
     "In verzweifelten Lagen kann ein Resonant stabil bleiben, indem er Stabilität von einer anderen Anomalie oder einem gewöhnlichen Menschen abzieht, wobei das Ziel stirbt, er selbst aber eine kurze Verlängerung seiner Menschlichkeit gewinnt."
    ]}
   ]},
   {t:"Einsatzbesprechung", p:202, b:[
    {t:"vorlesen", b:[
     "Die Agency hat Meldungen über eine Reihe bizarrer Elektroverletzungen in mehreren Krankenhäusern von Ternion City erhalten. Sie vermutet, dass dies das Werk einer Anomalie ist.",
     "Agenten können Adressen zu jedem Opfer erhalten und eingeladen werden, eine oder alle dieser Personen zu befragen:",
     {t:"karten", x:[
      {h:"Cass Gilmore", s:"sie/ihr · Foxglove Apartments", b:["Eine 27-jährige Texterin. Keine erkennbaren Verletzungen, aber seit sie von „einer Autotür“ einen Schlag bekam, kann sie kein leitfähiges Material mehr berühren, ohne einen schmerzhaften Schlag zu spüren."]},
      {h:"Gabriel „Gabe“ Knox", s:"er/ihm · Downtown Apartments", b:["Ein 22-jähriger Pizzabote. Erholt sich von perfekt symmetrischen Verbrennungen an den Armen durch einen kräftigen Stromschlag. Hat außerdem ein blaues Auge und einige weitere Prellungen, die zu einer Schlägerei passen."]},
      {h:"Julie Bennett", s:"sie/ihr · Ternion General Hospital", b:["Eine 21-jährige Influencerin, deren Handy dramatisch überhitzte, ihr die Hände verbrannte und sie danach auch noch schockte. Online bekannt als „Julie Bean“."]}
     ]}
    ]}
   ]}
  ],
  erm: [
   {t:"Cass Gilmore", p:203, b:[
    "**Die Ermittlung beginnt mit dem Besuch eines von drei Opfern in ganz Ternion City. Cass Gilmores Wohnanlage liegt der HQ am nächsten.**",
    {t:"h", x:"Cass Gilmore befragen"},
    "Cass Gilmore (sie/ihr) wohnt in einer Zweizimmerwohnung in den Foxglove Apartments im fünften Stock. Sie lebt hier mit ihrer Frau Lisa, die nicht zu Hause ist.",
    "**Wenn die Agenten ankommen,** ruft sie „Komm rein“, weil sie denkt, es seien ihre Freunde, die zum gemeinsamen Homeoffice vorbeikommen.",
    "Sie hat hellbraune, zurückgebundene Haare und einen Pony, der sich zwischendurch von selbst hebt, als würde sie eine Tesla-Spule berühren. Zu Hause trägt sie knallgelbe Gummihandschuhe.",
    "Sie lektoriert für einen Kunden auf ihrem Laptop, der mit Aufklebern übersät ist: am auffälligsten eine Transgender-Flagge, ACAB in gotischer Schrift und Fanart des Neopets Kougra.",
    "**Wenn sie die Agenten für polizeinah hält,** sagt sie kein Wort.",
    {t:"hinweis", art:"gew", h:"Das erfahren Agenten leicht im Gespräch mit Cass:", x:[
     "Sie sagt, sie habe den Schlag durch die Berührung einer Autotür bekommen und keine negativen Folgen außer den anhaltenden statischen Schlägen, wenn sie Dinge direkt berührt. Sie sei nur ins Krankenhaus gegangen, weil Lisa übervorsichtig war. Sie lügt.",
     "Der statische Effekt hält seit zwei Wochen an, aber sie kann mit Sicherheit sagen, dass er mit der Zeit schwächer wird. Das stimmt.",
     "Am Tag des Schlags hat sie von zu Hause gearbeitet, sich zum Ausgehen angezogen und ist auf eine Party gegangen. Die Autotür schockte sie, als sie die Party verließ. Sie gibt sehr ungern irgendjemandem Informationen über die Party."
    ]},
    {t:"hinweis", art:"anom", h:"Das erfahren Agenten nur, wenn sie bereits vorhandenes Wissen über Nosedive oder Mimi zeigen, Cass überzeugen, dass sie vertrauenswürdig sind, oder anomale Methoden nutzen:", x:[
     "Ihre Freundin Mimi ist eine der Hosts einer Party namens Nosedive. Die beiden haben Kurse in einem örtlichen, queer geführten Töpferstudio besucht und blieben danach befreundet.",
     "Mimi ist für eine der Hauptattraktionen von Nosedive verantwortlich: Wer darum bittet, dass sein Aussehen oder Körper in irgendeiner Weise verändert wird, bekommt den Wunsch kostenlos und ohne Nebenwirkungen erfüllt.",
     "Sie hält sich nicht für eine Partygängerin, aber sie besucht und unterstützt Nosedive, weil sie es für ein unkompliziertes Gut für die queere Gemeinschaft von Ternion City hält, das sogar noch größer werden könnte.",
     "Cass gehörte zu den Ersten, denen Mimi von ihren neuen Fähigkeiten erzählte. Cass meldete sich freiwillig als eine der Ersten, die Mimi mit ihren Kräften verändern durfte. Das war vor fast einem Jahr, und es gab keine schlimmen Folgen. Cass ist sehr glücklich mit den Veränderungen, möchte sie aber nicht im Einzelnen beschreiben. Im Allgemeinen waren die Veränderungen nicht groß – nicht viele Leute haben überhaupt bemerkt, dass Mimi etwas getan hat.",
     "Sie wurde tatsächlich geschockt, weil sie mit Mimi über deren Kräfte in Streit geriet. Cass glaubt, Mimi könnte mehr Menschen helfen als nur denen, die zu einem Nosedive kommen – doch die anderen Hosts dachten, sie drohe damit, sie der Öffentlichkeit preiszugeben, was sie niemals tun würde. Ein anderer Host, den sie nicht kennt, hat sie als Warnung geschockt. Anfangs tat es nicht sehr weh, aber sie glaubt, dass die anhaltende Statik Absicht war."
    ]}
   ]},
   {t:"Gabe Knox", p:204, b:[
    {t:"h", x:"Gabe Knox befragen"},
    "Gabriel „Gabe“ Knox (er/ihm) wohnt in einer Wohnung in einem Gebäude in der Nähe von Cass, das mit acht weiteren Mitbewohnern überfüllt ist. Die Wohnung ist unordentlich und laut, und Gabe ist kaum da.",
    "**Wenn die Agenten bei seiner Wohnung ankommen,** sagen die Mitbewohner, er sei arbeiten – offiziell als Pizzabote für Big Cheesy ein Stück die Straße runter, aber zwischen den Schichten fährt er gleichzeitig für ein paar verschiedene Apps aus. Die Agenten finden ihn, wenn er eine Schicht bei Big Cheesy beendet und in seinem geparkten Auto raucht.",
    "Gabe hat dunkelbraune Locken über kurz geschorenen Seiten. Er hat ein blaues Auge, überall Prellungen und trägt lange Ärmel über den Verbänden, die seine symmetrischen Verbrennungen bedecken.",
    "**Wenn die Agenten bei Big Cheesy ankommen,** versucht er, seinen Joint zu verstecken; wirken sie aber so, als würde es sie nicht stören, bietet er an, ihn zu teilen.",
    {t:"hinweis", art:"gew", h:"Das erfahren Agenten leicht im Gespräch mit Gabe:", x:[
     "Gabes Verletzungen stammen von einer Schlägerei wegen „jemandem“, auf den er „stand“, und er bereut, auf der Party zu betrunken gewesen zu sein. Das war vor zwei Nächten.",
     "Die Party, auf der er war, hieß Nosedive und zieht jede Nacht um – zum ersten Mal begegnete er ihr in einer Dive-Bar, in die seine Freunde für billige Shots gehen. Die Party ist nicht sein übliches Publikum – „keine Probleme mit Schwulen“, es sei einfach „nicht er“. Er gibt zu, dass er immer wieder hingegangen ist, lügt aber und behauptet, er wisse nicht, warum.",
     "Gabes Dealer, ein Typ namens Cody, sagt ihm, wo sich das Nosedive trifft. Er stellt gern den Kontakt her, warnt aber, dass Cody den ganzen Tag schläft und eine Antwort deshalb dauern kann."
    ]},
    {t:"kasten", h:"Gabe unterstützen", b:["Verlässt er das Gespräch mit dem Gefühl, genug unterstützt zu werden, um in sich zu gehen, taucht er später wieder beim Nosedive auf und sucht seinen Platz in der Gemeinschaft, ohne sich ganz auf Venice zu fixieren."]},
    {t:"hinweis", art:"anom", h:"Das erfahren Agenten, wenn sie Gabe ein gutes Gefühl geben, weise wirken oder anomale Methoden nutzen:", x:[
     "Eine der Hosts von Nosedive, Venice, ist in der Öffentlichkeit nie anders als vollständig in Glitzer gehüllt. Ve ist etwa 2,01 m (6'7\") groß, und Gabe hat noch nie jemanden gesehen, der gelassener und stilvoller war.",
     "Venice verwendet die Neopronomen ve/vem/veir, und wenn Gabe das versehentlich vergisst oder einer der Agenten andere Pronomen nutzt, korrigiert Gabe so, wie es ihm beigebracht wurde: kein großes Ding, kurze Korrektur, weiter. Er will, dass Venice weiß, dass er vem respektiert.",
     "Venice stellt allen beim Nosedive Glitzer zur Verfügung, und der verändert irgendwie die Outfits der Leute, sodass sie wild, dramatisch und eleganter aussehen, als sich jemand normalerweise leisten könnte. Als Gabe das erste Mal da war, fing er zufällig veirn Blick auf – und Venice ließ ihn unglaublich aussehen. Kleidung, die er nie gewählt hätte, die ihm aber das Gefühl gab, ein Star zu sein.",
     "Er ging weiter zum Nosedive, weil er ziemlich sicher ist, in Venice verliebt zu sein. Venice gab ihm vor zwei Nächten wieder eine Sonderbehandlung mit dem Glitzer, und ein anderer Typ wurde eifersüchtig und fing an, Gabe zu belästigen. Gabe schlug den Typen und der schlug zurück.",
     "Die Schlägerei endete, weil eine Blitzschlinge wie eine Schlange aus einem Lautsprecher kam, sichtbar und langsam. Sie verbrannte ihm beide Arme und schlug den anderen Typen bewusstlos. Kurz darauf wurden sie von der Party geworfen.",
     "Gabe ist nach der Tortur frustriert. Seine Anziehung zu Venice – das die Geschlechterkategorien sprengt, die Gabe gewohnt ist – hat ihn unsicher gemacht, ob er überhaupt hetero ist. Verständnisvollen Agenten gegenüber gibt er das zu, sagt aber, er „habe keine Zeit, bei allem anderen auch noch queer zu sein“."
    ]}
   ]},
   {t:"Julie Bennett", p:205, b:[
    {t:"h", x:"Julie Bennett befragen"},
    "Julie Bennett (sie/ihr) liegt noch in ihrem Zimmer im Ternion General. Fragen die Agenten am Empfang, wird ihnen gesagt, sie seien keine zugelassenen Besucher – aber sobald sie ins Krankenhaus hineinspazieren, haben alle so viel zu tun, dass das Personal die Agenten für Besucher hält.",
    "**Wenn die Agenten ihr Zimmer (Zimmer 84) finden,** hängt an der Tür ein hastig gezeichnetes „Keine Handys“-Schild mit einem Smiley daneben. Sie liegt in ihrem Krankenbett, sieht sich Folgen von The Office an, die sie schon eine Million Mal gesehen hat, und döst vor sich hin. Verbände bedecken ihre Hände, und ihre Haare sind ein Chaos – ein blond-silberner Ombré-Look wurde im Hinblick auf perfektes Styling gefärbt, und sie hat sich nicht darum gekümmert.",
    "Julie hat kein Problem damit, alles zu erzählen, was sie weiß, selbst wenn sie denkt, die Agenten seien von der Strafverfolgung. Sehen sie wirklich wie Cops aus, warnt sie sie, sich umzuziehen, bevor sie das Nosedive untersuchen, weil sie sonst viel Aufmerksamkeit erregen würden.",
    {t:"h", x:"The Office: gehackt"},
    "Leyden überwacht Julie weiterhin. Wirken die Agenten wie Bedrohungen und gibt Julie zu viele Informationen preis, dringt Leyden in den Fernseher ein, in dem The Office läuft. Jim aus The Office beginnt, sie anzuschreien, sie solle die Klappe halten und die Agenten sollten sich fernhalten.",
    "Julie drückt den Knopf, um die Pflegekräfte zu rufen, die die Agenten wegen Ruhestörung hinausbegleiten – aber bis sie eintreffen, läuft die Serie wieder ganz normal.",
    {t:"hinweis", art:"gew", h:"Das erfahren Agenten leicht im Gespräch mit Julie:", x:[
     "Julie ist eine bekannte Content-Creatorin, bekannt als Julie Bean. Sie ist vor allem Indie-Musikerin und veröffentlicht kurze, eingängige Songs zu niedlichen und albernen Themen.",
     "Ihr erster großer Hit war ein kurzes Video namens Snail Margarita („*snail margarita / slime on the rim / wish he'd move off of my cup / I'm afraid to ask him*“). Sie postet außerdem über lokale Kultur und gelegentlich gesponserte Videos.",
     "Sie ist guter Laune, weil der Arzt ihr gesagt hat, dass die Verbrennungen nicht schlimm genug sind, um Nervenschäden oder Hauttransplantationen zu verursachen. Sie hofft, bald wieder Gitarre spielen und Videos machen zu können.",
     "Sie ging gestern Abend auf eine Party namens Nosedive, weil einer ihrer Fans sie gefragt hatte, ob sie davon gehört habe, und fasziniert war. Eine queerfreundliche Party, die jede Nacht den Ort wechselt und von der die Leute sagen, es sei die beste Party ihres Lebens? Sie ist nicht queer, hat aber jede Menge queere Follower, von denen sie weiß, dass sie sich für Nosedive interessieren würden. Und natürlich wäre sie die Erste gewesen, die ein echtes Video postet.",
     "Als Julie zu filmen begann, erschien das Gesicht einer jungen Frau auf ihrem Bildschirm, die KEINE HANDYS schrie, und dann spielte ihr Handy verrückt – es verbrannte und schockte ihre Hände. Sie floh und ließ ihr Handy zurück. Sie hat das Gefühl, einen Geist gesehen zu haben, und glaubt, er könnte ihr immer noch folgen."
    ]},
    {t:"kasten", h:"Leyden nimmt Notiz", b:["Sind die Agenten nicht verkleidet, merkt sich Leyden sie. Ihr Verhalten und die Fragen, die sie stellen, können den Ton von Leydens Verhör beim Nosedive dramatisch verändern."]}
   ]},
   {t:"Das Nosedive finden", p:206, b:[
    {t:"h", x:"Das Nosedive aufspüren"},
    "Heute Nacht übernimmt das Nosedive eine gehobene Bar in der Innenstadt namens La Cave. Es gibt mehrere Wege, wie Agenten den geplanten Ort herausfinden können:",
    {t:"liste", x:[
     "Den Ort von Gabes Dealer, von Julies Online-Publikum bekommen oder indem Cass Mimi direkt anschreibt. Jede befragte Person ist zuversichtlich, dass das klappt, aber sie rechnen erst gegen Mitternacht mit einer Antwort.",
     "Eine Beziehung kontaktieren, die queer oder mit der Partyszene von Ternion verbunden ist. Jeder, den sie fragen, plant ohnehin hinzugehen, wartet aber auf einen Freund, der Bescheid gibt, wenn die Party losgeht.",
     "Die Innenstadt von Ternion City erkunden. Das La Cave soll eine ruhige, „gehobene“ Bar sein; die ältere, wohlhabendere Kundschaft beschwert sich missmutig auf der Straße und in anderen Bars über „diese Party“, die ihnen den Abend ruiniert.",
     "Einsatz anomaler Fähigkeiten."
    ]},
    "Es gibt keine Möglichkeit, das Nosedive aufzuspüren, solange es ruhig ist. Die Menge schlägt wie eine Welle ein, und das La Cave ist innerhalb von Minuten überfüllt.",
    {t:"h", x:"Die Regeln des Nosedive"},
    {t:"liste", x:[
     "Keine Handys. Leyden, eine der Hosts und die DJ des Nosedive, hat dafür gesorgt, dass es genug zu sehen gibt. Du darfst dein Handy dabeihaben, aber ausgeschaltet und weggesteckt. Keine Fotos von irgendjemandem oder irgendetwas auf der Party – auf eigene Gefahr.",
     "Wenn du Mimis Hilfe suchst, sag es einfach Wodge auf der Tanzfläche. Er gibt es an Mimi weiter. Wenn die Agenten nichts von Mimi wissen, erklärt Charlie nicht mehr dazu.",
     "Eine der Hosts, Feast, hat einen Trick, damit niemand zu weit geht. Wenn jemand beim Nüchternwerden Hilfe braucht oder jemanden sieht, der sie braucht, kann er nach Feast rufen.",
     "Keine Gewalt, keine schlechte Stimmung. Alle sind beim Nosedive willkommen, und wer Probleme macht, wird sofort hinausgeworfen."
    ]},
    {t:"h", x:"Die Stimmung"},
    "Als Inspiration für Outfits und Ästhetik der Besucher des Nosedive: Sieh dir die Club-Kids-Bewegung und die moderne Mode an, die von ihr inspiriert ist. Die Outfits sind unpraktisch, bunt und mehr auf Thema, Neuheit und Schock aus als auf klassische Schönheit."
   ]},
   {t:"La Cave", p:207, b:[
    "Nosedive ist eine überfüllte, wilde Party voller queerer Menschen, die tanzen, trinken, Drogen nehmen und die anomalen Fähigkeiten der Hosts genießen. Das La Cave ist eine mondäne dreistöckige Cocktailbar für kleine, intime Runden und wohlhabende Gäste. Die beiden Seiten sind bereits aneinandergeraten – und Nosedive hat gewonnen.",
    {t:"h", x:"Schlange vor der Tür"},
    "Zwei Personen regeln die Menge an der Tür: Charles (er/ihm), ein Mann, der für das La Cave arbeitet, und Charlie (dey/dem), ein Freund von Feast, der zu jedem Nosedive geht.",
    "Charles ist sehr besorgt, dass die Menge laut ist, trinkt, was sie will, und weit über der Kapazität liegt – doch sein Chef hat ihm gesagt, Nosedive dürfe tun, was es wolle. Venice hat dem Besitzer eine lächerliche Summe Geld gegeben, damit niemand versucht, das Nosedive hinauszuwerfen.",
    "Charlie versucht, Charles zu beruhigen.",
    "Als die Agenten näher kommen, wird ihr Gespräch von drei Freunden unterbrochen, von denen zwei sehr betrunken sind. Die nüchterne Freundin fragt gestresst, ob es in Ordnung ist, dass sie sich am Eingang an der Menge vorbeidrängen, und Charlie lässt alle aus dem Weg gehen, damit sie hineinkönnen.",
    "Als die Agenten den Eingang erreichen, erklärt Charlie die Regeln des Nosedive. Mitten drin wird Charlie von genau diesen drei Freunden unterbrochen, die schon wieder herauskommen, lachend und nüchtern und darüber redend, wohin sie als Nächstes gehen. Nach den Regeln können die Agenten hinein.",
    {t:"h", x:"Das Nosedive betreten"},
    "Das La Cave erstreckt sich hoch und schmal wie ein Turm nach oben; polierte Holztreppen schwingen sich an den Wänden zu Absätzen auf den beiden oberen Stockwerken, die vom Eingang aus sichtbar sind.",
    "Eine kuppelförmige, von außen beleuchtete Buntglasdecke wirft farbige Formen auf die Partygänger darunter. Weiße Marmortische und zierliche goldene Stühle sind rund um den Eingang aufeinandergestapelt, damit das ganze Erdgeschoss für eine riesige tanzende Menge frei ist.",
    "Bildschirme und Lautsprecher wurden hastig an goldene Geländer montiert und zerschneiden mit dröhnendem Bass und Neonfarben die vorgesehene Atmosphäre. Die Visuals wechseln passend zum Song, aber eine junge Frau mit dickem schwarzem Haar tanzt immer in den Bildern und wandert von Bildschirm zu Bildschirm.",
    {t:"h", x:"Eintauchen"},
    "Im ersten Stock klettert eine kleinere Menge über die Bar, um sich selbst Getränke einzuschenken, zu tratschen und zu lachen. Im dritten – lehnt etwas Helles über dem Geländer. Etwas, bei dessen direktem Anblick es wehtut. Eine ebenso helle Hand streckt sich daraus hervor, und ein Sternenregen fällt bis ganz hinunter ins Erdgeschoss, direkt in die Glitzerschale.",
    {t:"h", x:"Die Glitzerschale"},
    "Eine große Glasschale steht auf einem Hocker. Die Schale ist randvoll mit Glitzer – insgesamt sieht es silbern aus, aus der Nähe sind aber viele Farben und Formen darin gemischt. Ein Mann in lässiger Arbeitskleidung drängt sich an den Agenten vorbei, greift eine Handvoll und streut sie sich über den Kopf – einen Moment später verwandelt sich sein ganzes Outfit. Lila Haare; scharfe, glänzende Stacheln an einer riesigen Lederjacke; 15-cm-Plateaustiefel; und das Weiße seiner Augen ist durch einen grünen Zuckerstrudel ersetzt.",
    "Der Rest der Party ist genauso – unmögliche Outfits an jeder Person, ohne Rücksicht auf Materialkosten, Schwierigkeit der Konstruktion oder Materialien – ein anomaler Effekt, aber rein visuell. Die Outfits reißen nicht, werden nicht fleckig und nicht berührt. Agenten fallen auf, wenn sie nicht mitmachen, und der Glitzer reagiert auf ihre Wünsche. Sie können aussehen, wie sie wollen – also, was wählen sie?"
   ]},
   {t:"Die Party erkunden", p:208, b:[
    "Agenten können das Nosedive erkunden oder genießen, wie sie wollen, und allen Spuren folgen, die sie bei den Befragungen gefunden haben. Ab hier führt jedes aggressive oder störende Verhalten die Agenten in die Begegnung.",
    {t:"karten", x:[
     {h:"Die Tanzfläche mit Wodge", b:["Eine große Menge Tanzender bewegt sich in perfekter Koordination im Erdgeschoss."]},
     {h:"Hinauf in Venices Hof", b:["Jemand hat den Glitzer aus dem dritten Stock fallen lassen … wer?"]},
     {h:"Mimis Verwandlungen", b:["Wodge zu fragen ist der direkteste Weg, dey zu finden, aber nicht der einzige."]},
     {h:"Unterbrechung: Feast", b:["Zwischen dem ersten und zweiten Stock tritt Feast auf und rettet jemandem die Nacht."]},
     {h:"Leydens Verhör", b:["Zwischen dem zweiten und dritten Stock hat Leyden einige Fragen an die Agenten."]}
    ]},
    {t:"h", x:"Mimis Verwandlungen"},
    "**Wenn die Agenten gedanklich um eine Veränderung ihres Körpers bitten,** kommt Mimi dem nach. Dey kann aussehen wie jeder, es braucht also einen Plan oder genaue Aufmerksamkeit, um dey zu bemerken, wenn dey ihre Fähigkeiten einsetzt.",
    "Mimi hat die volle Kontrolle über Fleisch und kann alles am Körper eines Menschen verändern, indem dey irgendeinen Teil davon berührt. Dey kann Agenten so umformen, wie sie es sich vorstellen.",
    {t:"h3", x:"Mimi"},
    "Wie Leyden hat Mimis ständiger Einsatz ihrer Kräfte dey an den Rand gebracht, zur Anomalie zu werden. Entspannt sieht Mimi von Natur aus ein bisschen aus wie eine Wachsfigur, die gerade schmilzt, oder ein bewegter Haufen ungebrannten Tons. Konzentriert kann dey aussehen wie jeder, den dey je gesehen hat.",
    "**Wird dey direkt angesprochen,** zerfließt Mimi zu einer Pfütze und verliert sich in der Menge. Wird dey trotzdem gefunden, bittet dey darum, in den ersten Stock zu gehen, bevor dey redet, um sich in ruhigerer Umgebung entspannen zu können. Dey würde zunächst vor jedem davonlaufen, der direkt mit dey zu reden versuchen würde – dey ist schüchtern.",
    {t:"hinweis", art:"anom", h:"Das erfahren Agenten, wenn sie nach Mimis Verwandlungen rufen und dann mit Wodges Hilfe oder anomalen Methoden ihre Aufmerksamkeit halten:", x:[
     "Dey liebt es, Fleisch um seiner selbst willen umzuformen, und dass es Menschen glücklich macht, ist ein netter Bonus.",
     "Mimi hat Schwierigkeiten, sehr lange zu reden oder Gesprächen zuzuhören.",
     "Mimi kann dey eigenes Fleisch oder das Fleisch anderer mit einer einfachen Berührung umformen. Dey ist sehr neugierig, ob einer der Agenten das möchte. Dey liebt es wirklich, Fleisch zu formen, und stellt Suggestivfragen, die es dey erlauben, doch dey hört auf, wenn man es sagt, und nutzt die Kräfte niemals, ohne ausdrücklich darum gebeten zu werden.",
     "Wollen die Agenten wirklich weiterreden, sollten sie nach Venice suchen."
    ]}
   ]},
   {t:"Die Tanzfläche", p:209, b:[
    {t:"h3", x:"Die Tanzfläche"},
    "Wenn die Agenten in die Party hineingehen, zieht die Tanzfläche an ihrem Geist. Der Beat ist als etwas jenseits von Vibration spürbar: Verbindung. Betreten sie ihn, spüren sie eine Präsenz in ihren Köpfen. Eine sanfte Anregung, mitzutanzen. Agenten können sie wegschieben oder sich in das Gefühl entspannen.",
    "**Lassen sie es zu,** spüren sie den Beat der Musik und den Fluss der Menge, als wäre es die Bewegung ihres eigenen Körpers – und wissen mit Sicherheit, dass sie nie einen Schritt verpassen werden.",
    "Die Bewegungen der Tanzfläche sind synchronisiert. Etwas dirigiert ihre Bewegungen, zwingt sie aber nicht.",
    "Agenten können die Verbindung jederzeit wegschieben – es gibt keine Nebenwirkungen, wenn man mitmacht oder aufhört.",
    "In diesem Zustand fühlen sie sich tief mit den anderen Menschen im Nosedive verbunden. Etwas ist in ihnen allen.",
    "**Verfolgen sie die Quelle irgendwie zurück** oder achten sie genau darauf, finden sie einen kopflosen Mann in einem Lederharness und Slips, der mitten in der Menge hart tanzt.",
    {t:"h", x:"Wodge"},
    "Wodge ist der vertrauensseligste, albernste und entspannteste der Hosts. Er versucht schnell, es wiedergutzumachen, wenn jemand ihn nicht mögen könnte.",
    "Er macht kein Geheimnis aus seiner Kraft – er tanzt schließlich ohne Kopf – und erklärt sie gern, wenn man fragt. Er spricht telepathisch über die Verbindung der Tanzfläche.",
    {t:"handout", art:"chat", h:"Wodges Gedanken (Handybildschirm)", x:[
     {von:"Mimi", x:"ich dachte, ich hätte mit dem typ da drüben gevibt, aber er hat nicht mal versucht, mich zu küssen …"},
     {von:"Leyden", x:"Könnte es daran liegen, dass du keinen Mund hast gerade …"},
     {von:"Wodge", x:"OH MEIN GOTT ICH BIN SO DUMM ICH HAB GERADE KEINEN MUND BIN GLEICH WIEDER DA"}
    ]},
    {t:"hinweis", art:"gew", h:"Das erfahren Agenten leicht im Gespräch mit Wodge:", x:[
     "Es ist Wodges Geburtstag! Er ist gerade 21 geworden.",
     "Venice ist das, was dem Nosedive am nächsten an einen Anführer kommt. Haben die Agenten ernsthafte Fragen, sagt er ihnen, sie sollen sich im dritten Stock an Venice wenden.",
     "Leyden, die Frau, die in den Bildschirmen tanzt, hat versprochen, niemanden mehr zu verletzen, es gibt also nichts zu befürchten.",
     "Wodge kann seinen Körper in Teile aufspalten, ohne die Kontrolle über diese Teile zu verlieren – in jedem Maßstab.",
     "Er kann seine Hand abtrennen und zur Bar fliegen lassen, um ihm ein Getränk zu holen, aber es bedeutet auch, dass er seinen Kopf in Milliarden Atome aufspalten und wie ein unsichtbares Gas in andere beim Nosedive schicken kann.",
     "Das erzeugt einen leichten Schwarmbewusstseins-Effekt, der alle, die ihn zulassen, empathisch und verbunden fühlen lässt, ähnlich wie bei Drogen wie MDMA. Er hat nicht viel Arglist und erklärt nervösen Partygängern gern, wie seine Kraft funktioniert."
    ]},
    {t:"hinweis", art:"anom", h:"Das erfahren Agenten nur, wenn sie sich auf der Tanzfläche verbinden und Wodge für sich gewinnen oder anomale Methoden nutzen:", x:[
     "Mimi ist da, um allen zu helfen, die Veränderungen an ihrem Körper wollen. Sie müssen nur in Richtung Wodge daran denken, weitertanzen, und er schickt ihre Gedanken an Mimi. Mimis Identität ist ein Geheimnis, du merkst also erst, dass du verändert wurdest, wenn dir irgendwann im Laufe der Nacht der Unterschied auffällt.",
     "Wodge und Mimi waren im College Mitbewohner und bekamen ihre Fähigkeiten durch eine Begegnung mit einer seltsamen Kreatur in ihrem Wohnheim. Alle Hosts sind Menschen mit anomalen Fähigkeiten. Sie kennen das Wort Resonant nicht, aber das sind sie."
    ]}
   ]},
   {t:"Unterbrechung: Feast", p:210, b:[
    "**Als die Agenten die Treppe zum ersten Stock hinaufgehen,** schreit jemand „HILFE!“",
    "Eine Frau hat einen bewusstlosen Mann unter den Armen aufgefangen, der in einen Krampfanfall gefallen ist. Die Musik bricht ab, und alle Bildschirme wechseln zu Leydens Gesicht, das den Leuten sagt, sie sollen aus dem Weg gehen.",
    "Die Menge teilt sich, als eine Frau im ersten Stock über das Geländer springt. Wo auch immer dey ist, wächst Mimi rasant, um sie aufzufangen und sanft abzusetzen.",
    "Von der Menge getrennt sieht diese Person bizarr aus – ihre Augen sind durch Münder ersetzt, und mehrere große Münder sind rund um ihren Körper sichtbar, kaum von dem lockeren togaartigen Gewand verdeckt, das sie trägt. Das ist Feast.",
    "Sie legt dem Mann eine Hand auf, und er beruhigt und entspannt sich innerhalb weniger Sekunden. Bald wird er aufwachen und mit Freunden nach draußen gehen. Das Nosedive applaudiert und kehrt zur Normalität zurück.",
    {t:"h", x:"Feast"},
    "Feast ist mit 32 die Älteste der Hosts und die größte Sorgenmacherin. Leydens Probleme sind ihr ständig im Kopf, und sie will unbedingt einen Weg finden, ihre Freunde zu schützen. Wenn sie die Gelegenheit bekommt, opfert sie bereitwillig ihr eigenes Wohlergehen für das der anderen Hosts.",
    "Wie Wodge macht Feast kein Geheimnis aus sich oder ihren Kräften.",
    {t:"hinweis", art:"gew", h:"Das erfahren Agenten leicht im Gespräch mit Feast:", x:[
     "Der Mann hatte eine Ketamin-Überdosis. Er sollte jetzt in Ordnung sein.",
     "Feast kann Chemikalien und Substanzen aus allem entfernen, was einen ihrer Münder berührt. Sie verschwinden, statt sie zu beeinflussen.",
     "Vor zwei Jahren wäre Feast beinahe an einer versehentlichen Alkoholvergiftung gestorben. Eine Frau, mit der sie sich getroffen hatte (eine exzentrische, wohlhabende ältere Frau namens Drea), gab sich als verkleidete Anomalie zu erkennen. Die Anomalie rettete ihr das Leben, indem sie sich mit ihr verband, opferte dabei aber ihre Individualität.",
     "Feast suchte Mimi auf, nachdem sie von dey Kräften gehört hatte, entschied sich aber nach dem Treffen mit den anderen Hosts dagegen, die Münder entfernen zu lassen.",
     "Jetzt nüchtern widmet Feast ihre Zeit dem Ziel, die Gemeinschaft sicher zu halten. *Jeder* kann mit einer möglichen Überdosis, einer Krankheit oder einfach einem Drink zu viel zu einem Nosedive kommen, und Feast zieht es ihm ab. Sie sieht diese Fehler als unvermeidlichen und natürlichen Teil des Lebens.",
     "Nosedive ist auf ihr Drängen immer kostenlos, und sie sorgt dafür, dass niemand abgewiesen wird, solange er nicht die anderen dort verletzt.",
     "Feast trifft eigentlich keine Entscheidungen – bei ernsten Angelegenheiten müssen sie mit Venice reden."
    ]},
    {t:"kasten", h:"Der Elefant im Raum", b:[
     "Die ganze Gruppe weiß, dass der übermäßige Einsatz ihrer Fähigkeiten die Geschwindigkeit ihrer Veränderungen erhöht. Sie wollen nicht kämpfen. Jede und jeder von ihnen fürchtet, wie die eigene Version von Leydens Lage aussehen würde.",
     "Feast macht sich darüber die meisten Sorgen, um alle, und zögert nicht, ihre Sorgen um die übrigen Hosts mit jedem zu besprechen, der ebenfalls ehrlich um sie besorgt zu sein scheint."
    ]}
   ]},
   {t:"Leydens Verhör", p:211, b:[
    "**Wenn die Agenten gerade in Richtung dritten Stock gehen wollen,** ruft ein Fernsehbildschirm im ersten Stock sie an, nach Aussehen oder mit Namen, falls sie ihn genannt haben. Leyden, die Frau auf den Bildschirmen, ist misstrauisch, wie sie sich bewegt haben, und hat einige Fragen an sie.",
    {t:"liste", x:[
     "Warum geht ihr nach oben?",
     "Seid ihr hier, um zu feiern, oder wegen etwas anderem?",
     "Wie habt ihr von Nosedive erfahren?",
     "Habt ihr nicht mit diesem Jelly-Bean-Mädchen herumgeschnüffelt?"
    ]},
    "**Wenn die Gruppe einen der anderen Hosts für sich gewonnen hat,** lassen sie nicht zu, dass Leyden eines dieser Themen vertieft, und achten darauf, Leyden ruhig zu halten. Wenn nicht, teilt Leyden ihnen mit, dass niemand nach oben geht, es sei denn, Venice hat ihn eingeladen oder ein anderer Host begleitet ihn. Wenn die Agenten sie bedrängen, eskaliert sie in die Begegnung.",
    {t:"h", x:"Leyden"},
    "Jetzt eine Anomalie, die als große Menge empfindungsfähiger Elektrizität erscheint. Sie projiziert ihr menschliches Aussehen für Gespräche auf Bildschirme und hat dickes, langes schwarzes Haar, das mit der Dunkelheit des Bildschirms verschmilzt.",
    "Sie schiebt die Agenten in Richtung Venice, wenn sie auch nur leicht verdächtig wirken, und eskaliert in die Begegnung, wenn sie die Agenten für Cops hält oder die Gruppe versucht, sie zu fangen.",
    {t:"hinweis", art:"anom", h:"Das erfahren Agenten im Gespräch mit den anderen Hosts, wenn sie Leyden für sich gewinnen oder anomale Mittel nutzen. Leyden wird ihnen kaum von sich aus helfen:", x:[
     "Leyden konnte ursprünglich zwischen menschlicher und elektrischer Gestalt wechseln und tat das ohne Scheu. Sie kann Technik „besetzen“ und frei manipulieren. Sie kann durch Leitungen reisen, aber auch in elektrischen Lichtbögen von Gerät zu Gerät springen. Sie kann Ton aus Lautsprechern erzeugen, Bilder auf Bildschirmen, Passwörter entschlüsseln und Firewalls ignorieren.",
     "Ihr Verständnis ist, dass sie ihre Kraft zu oft eingesetzt hat. Sie kann nicht mehr in die menschliche Gestalt zurückkehren und handelt nur, um das Nosedive sicher und geschützt wirken zu lassen. Alle verstehen, dass Leyden jetzt *anders* ist, aber sie kennen den Begriff „Anomalie“ nicht.",
     "Sie bekam ihre Kräfte, als sie von einem Blitz getroffen wurde – von einer Anomalie, die der Gefangennahme entkommen war. Sie sah die Agenten, wie sie sie jagten, und fürchtet, dass sie sie eines Tages finden.",
     "Sie ist sehr mutig, wenn sie Menschen anspricht, die sie attraktiv findet, und scheint auch ohne menschlichen Körper keine Probleme zu haben, Kontakte zu knüpfen."
    ]},
    {t:"kasten", h:"Der entscheidende Unterschied", b:["Leyden ist bereits eine Anomalie – sie braucht weder Nahrung, Wasser noch eine andere Energiequelle und könnte zu diesem Zeitpunkt kein Agent mehr werden. Die anderen hingegen könnten von der Agency oder der Urgency stabilisiert werden und im Gegenzug für ihr Bekenntnis zu diesen Sachen einen Teil ihrer Menschlichkeit behalten."]}
   ]},
   {t:"Venices Hof", p:212, b:[
    {t:"h", x:"Und ganz oben: Venice"},
    "Im dritten Stock, wo ve mit einer Gruppe von Bewunderern Hof hält und auf einer langen Ledercouch lümmelt, ist Venice.",
    "Ve ist schwer direkt anzusehen und schwer ganz wegzusehen – veir Körper ist mit hochreflektierendem Glitzer in verschiedenen Formen und Größen bedeckt. Veir Hals ist ungewöhnlich lang und biegsam, aber der gesamte Effekt vermittelt den Eindruck extremer Schönheit. Anomal extrem sogar – veir Value-Anomalie erlaubt vem, beiläufig und ständig Aufmerksamkeit zu beherrschen.",
    "**Wenn die Agenten ankommen,** dreht sich ein junger Mann langsam, während sich sein Outfit alle paar Sekunden dramatisch ändert: ein gotisches Kleid, bedeckt mit schwarzen Federn, dann ein opalisierender Körperfarben-Nacktlook, dann ein „Anzug“ aus zwei Oberteilen: Die untere Hälfte des Kleidungsstücks ist ein auf den Kopf gestelltes Sakko, Hemd und Krawatte.",
    "**Hat mindestens ein Agent sich die Zeit genommen, den Glitzer kreativ und durchdacht zu nutzen,** bemerkt Venice das und winkt das Model weg, um die Entscheidungen des Agenten zu besprechen.",
    "**Wenn nicht,** ignoriert ve sie, bis sie um Aufmerksamkeit bitten, und wirkt wahrscheinlich gelangweilt.",
    {t:"h3", x:"Venice"},
    "Venice ist der unangefochtene Anführer des Nosedive. Ve hat einen scharfen Witz, eine charismatische Präsenz und einen tiefen Quell an Respekt in der ganzen Gemeinschaft. Obwohl ve viel eher in einem VIP-Bereich sitzt, als auf die Tanzfläche zu treten, lebt Venice von Aufmerksamkeit und hält zu Beginn, in der Mitte und am Ende jeder Nacht oft kurze Reden.",
    "Wenn die Agenten Venice treffen, haben sie wahrscheinlich alle Hosts gesehen. Die Agenten haben eine Wahl: Sie können offen sagen, warum sie hier sind, oder sie können versuchen, Leyden – oder alle – heimlich zu fangen. So oder so beginnt damit die Begegnung.",
    {t:"hinweis", art:"anom", h:"Das erfahren Agenten, wenn sie stilvoll aussehen, die anderen Hosts fragen, etwas für das Nosedive tun oder anomale Mittel nutzen:", x:[
     "Venice ist 25 und wird größer, seit ve sich vor vier Jahren mit veir Anomalie verbunden hat.",
     "Veir Glitzer lässt sich schmerzlos von veirm Körper lösen und auf Gegenstände und Kleidung auftragen. So glitzernde Gegenstände nehmen für den Betrachter ein illusorisches Aussehen und hohen Wert an – wenn ve sich konzentriert, bestimmt ve, wie es aussieht. Andernfalls verändert sich das Aussehen zu dem, was der Halter/Träger sich wünscht.",
     "Vor Nosedive war Venice auf Sofas von Freunden untergekommen und hat im Gegenzug Make-up gemacht, gestylt und Kleidung für Freunde und Dragperformer genäht.",
     "Ve liegt Nosedive mehr am Herzen als alles andere – sogar mehr als veir eigener Stolz. Ve hält die Hosts für das Herz von Nosedive und will nicht, dass einer von ihnen geht oder verletzt wird."
    ]}
   ]}
  ],
  beg: [
   {t:"Begegnung", p:213, b:[
    "Die Begegnung kann beginnen, wenn alle Hosts zu einem Treffen zusammengebracht werden oder wenn etwas das Nosedive zur Gewalt eskalieren lässt.",
    "**Handeln die Agenten aggressiv** oder versuchen sie, Leyden zu fangen, ohne sich mit den Hosts zu einigen, springe direkt zum Abschnitt „Kampf“.",
    {t:"h", x:"Reden"},
    "**Wenn Venice einen guten Eindruck von den Agenten bekommt,** wenn es ernst wird, verspricht ve, dass niemand weglaufen wird, falls das Team den Rest der Nacht genießen möchte. Sie können sich am Ende der Party in der Gasse hinterm Haus treffen, wenn sie möchten.",
    "**Wenn die Lage angespannt ist** oder die Agenten verdächtig, aber nicht gewalttätig wirken, ruft Venice alle Hosts in den dritten Stock und schickt alle anderen weg, um die Lage zu besprechen.",
    {t:"h", x:"Wer will was?"},
    "Alle, auch Leyden, wissen, dass Leyden Hilfe braucht. Sie sind uneins darüber, was der beste Weg ist.",
    "Feast und Wodge lassen sich davon überzeugen, dass die Agency/der Vault vernünftig klingt als Ort, an den Leyden gehen kann, um sicher zu bleiben – aber nur, wenn sie die Einzelheiten der Forschung des Vault nicht kennen (oder dass sie dort möglicherweise für immer sein wird). Wird der Vault als Ort angepriesen, an dem Leyden sicher aufgehoben ist – oder lügen die Agenten und sagen, sie könnten ihr vielleicht helfen, sich zurückzuverwandeln –, sind sie die Ersten, die zustimmen.",
    "Venice und Leyden stimmen nicht zu und wollen nicht getrennt werden. Venice wittert sofort Ärger, selbst wenn die Agenten lügen – ve mag den Gedanken nicht, dass Leute an Leyden experimentieren oder sie von den anderen trennen.",
    "Mimi erzählt ihnen, dass dey ähnliche Effekte wie bei Leyden auch an sich selbst zu spüren beginnt. Es ist schwerer, in einer Gestalt zu bleiben, es ist schwerer, mit dem Umformen von Fleisch aufzuhören, und dey weiß nicht, wie lange es dey genügt, zu sitzen und zu warten, dass Leute beim Nosedive um Hilfe bitten.",
    {t:"h", x:"Was sind die Optionen?"},
    "Alle lassen sich irgendwann überzeugen, Leyden in einen Normalen Aktenkoffer gehen zu lassen, aber Venice ist am härtesten. Venice wird die Agenten für immer hassen, wenn das geschieht. Leyden tut es nur freiwillig, wenn jeder Host findet, dass sie es tun sollte.",
    "Alle lassen sich überzeugen, den Urgents beizutreten, aber Wodge geht nur, wenn alle anderen gehen.",
    "Feast und Wodge ließen sich überzeugen, Agenten zu werden. Venice und Mimi niemals.",
    {t:"h", x:"Kampf"},
    "Wenn die Agenten das Nosedive stören oder die Verhandlungen schlecht laufen, mobilisieren alle Hosts, um die Agenten zu vertreiben. Der aggressive Einsatz ihrer Kräfte treibt sie weiter in Richtung Verwandlung zu Anomalien. Leyden, Venice und Feast halten die Stellung und versuchen, die beiden Jüngeren zur Flucht zu überreden.",
    "Hosts außer Leyden verwenden für ihre Kräfte das System aus den Sonderregeln."
   ]}
  ],
  nach: [
   {t:"Ausgänge", p:214, b:[
    "Wird mindestens einer dieser Resonants gefangen, entweder im Aktenkoffer oder als neue Angestellte, oder eliminiert, gilt dieser als die Ziel-Anomalie.",
    "**Wenn keine Anomalie gefangen oder eliminiert wurde,** gilt die Ziel-Anomalie als entkommen.",
    "Melden die Agenten die Existenz der anderen Hosts, erhalten sie Abzüge für jeden, der entkommen ist. Bringen sie zusätzliche gefangene oder angeworbene Hosts ein, erhalten sie für jeden den Bonus für „gefangen“.",
    "Jeder Agent, der entkommene Anomalien als Freunde gewinnen, neue Anforderungen erstellen oder von eliminierten Anomalien profitieren kann, darf jeden Host als eigene Anomalie behandeln.",
    {t:"h", x:"Lose Enden"},
    "Mit Unterstützung und Schutz von Außenstehenden kann das Nosedive noch lange weiterbestehen, selbst mit Leydens Zustand.",
    "**Wenn die Hosts sich nicht entscheiden, Agenten oder Urgents zu werden,** wird jedoch die Bedrohung, zu vollständigen Anomalien zu werden, immer über ihnen schweben.",
    "**Wenn das Nosedive bestehen bleibt,** kann es zu einer Fraktion mit eigenen Idealen und Interessen werden – vielleicht wollen Venice und die anderen über eine einzelne Party hinaus expandieren? Vielleicht nehmen sie andere Anomalien und Resonants auf, die kein Interesse daran haben, sich auf das Duell zwischen der Agency und der Urgency festzulegen?"
   ]},
   {t:"Vault-Anforderung", p:215, b:[
    {t:"anforderung", h:"Zusätzliche „Urgents“", en:"Additional \"Urgents\"", preis:"n. v.", b:[
     "Werden die Hosts von Nosedive in die Agency überführt, werden sie nicht zu Anforderungen. Stattdessen werden sie der Liste der „Urgents“ hinzugefügt, deren Kräfte nur Agenten zur Verfügung stehen, die das Playwall-Dokument W8 erreicht haben. Für sie gelten alle dort aufgeführten Regeln zu den Urgents, die bereits im Vault enthalten sind.",
     "**Venice** bietet die Kraft *Costume* (Kostüm): Verwandle deine aktuelle Kleidung ohne Einschränkungen so, dass sie wie alles aussieht, was du willst. Endet nach 24 Stunden.",
     "*Kosten:* Um diese Fähigkeit zu nutzen, musst du zuerst jemandem das Gefühl geben, wertgeschätzt zu werden.",
     "**Wodge** bietet die Kraft *Connect* (Verbinden): Erhalte vollständigen Zugang zu den Gedanken aller Personen im Umkreis von etwa 30 Metern, undifferenziert: Du kannst sie alle hören, weißt aber nicht, von wem sie kommen, es sei denn, der Gedanke verrät es.",
     "*Kosten:* Um diese Fähigkeit zu nutzen, musst du zuerst zwei Menschen etwas zeigen, das sie gemeinsam haben.",
     "**Mimi** bietet die Kraft *Sculpt* (Formen): Forme jedes Fleisch, das du berührst, in jede beliebige Form.",
     "*Kosten:* Um diese Fähigkeit zu nutzen, musst du zuerst etwas erschaffen, auf das du stolz bist.",
     "**Feast** bietet die Kraft *Sacrifice* (Opfer): Du darfst jeden Schaden, der für andere bestimmt ist, auf dich nehmen, Chaos-Effekte, die auf andere zielen, stattdessen auf dich zielen lassen oder ein Leiden oder eine Verletzung eines anderen auf dich nehmen.",
     "*Kosten:* Um diese Fähigkeit zu nutzen, musst du jemandem ein Versprechen geben, das du halten willst.",
     "**Leyden** bietet die Kraft *Overload* (Überlastung): Berühre ein beliebiges elektronisches Gerät und lass es eine seiner Hauptfunktionen dauerhaft ausführen, bis ihm der Strom ausgeht oder es zerstört wird. (Geldautomat spuckt Dollarscheine aus, Handy empfängt Benachrichtigungen, Computer verschickt E-Mails usw.)",
     "*Kosten:* Um diese Fähigkeit zu nutzen, musst du zuerst jemanden, der dir am Herzen liegt, vor Schaden verteidigen."
    ]}
   ]},
   {t:"Anomalie-Fähigkeit", p:215, b:[
    {t:"faehig", h:"Nosedive VIP", en:"Nosedive VIP", x:"Statt einer Anomalie-Fähigkeit gewährt dir das Erreichen der maximalen Verbindung mit einem Nosedive-Host mithilfe von Seek einige Vorteile:", erg:[], b:[
     "Einmal pro Einsatz kannst du diesen Host bitten, seine Kräfte zu deiner Hilfe einzusetzen, sofern er verfügbar ist. Du musst 3 QS in beliebiger Kombination von Qualitäten für ihn ausgeben, aber er kann alles tun, was im allgemeinen Rahmen seiner Fähigkeiten liegt.",
     "Einmal pro Einsatz kannst du darum bitten, dass das Nosedive an diesem Tag an einem Ort deiner Wahl erscheint. Es lehnt ab, wenn es sich um einen Ort handelt, der die Partygänger des Nosedive offensichtlich in Gefahr bringt.",
     "Hast du die maximale Verbindung mit mindestens drei Mitgliedern des Nosedive erreicht, fungiert die Party für dich als Domäne und folgt allen Regeln unter „Domänenerschaffung“ im Playwall-Dokument X2."
    ]}
   ]}
  ]
 }
};
/* GESTALTUNG:
 - Buch hat KEINE Chaos-Effekte-Tabelle; stattdessen „Unique Rules“ (S. 201, Buchzählung 202) – als `sonder` abgebildet (Heading im Buch „Unique Rules“, hier „Sonderregeln“, so auch im Verweis in der Begegnung). chaos:[] ist absichtlich leer.
 - Sonder: vier Leisten mit je 9 Feldern (Feast, Venice, Wodge, Mimi); im Buch sind als Beispiel Venice 1, Wodge 3, Mimi 6 Felder gefüllt, Feast 0 (hier ungefüllt) – ggf. Startwerte der Leisten. Dazu Kostentabelle 1/2/3 Chaos (Wirbel-Symbol im Buch). Am Ende die Hosts-Leiste Feast mit Kreis statt Feld.
 - Dateinummern = Buchzählung minus 1 (Datei S201 zeigt gedruckte S. 202 usw.); p-Angaben folgen den Dateinummern.
 - S. 198: Eröffnungsseite = Gruppenchat der Hosts (Handout chat, Farben: Venice lila, Mimi gelb, Feast pink, Wodge blau, Leyden grün; zwei Nachrichten mit „emotive text“ (WAS/JA, groß) und eine „von einer Spaßbremse“). Titel „NOSEDIVE – BY: CALEB ZANE HUETT“ quer als Schriftzug auf gelbem Blitz.
 - S. 201: Einsatzbesprechung enthält drei Opfer-Kästen mit Symbol (Handschuh grün, Pizza lila, Pflaster/Bohne orange); Farben passen zu Cass grün, Gabe lila, Julie orange.
 - S. 207: Übersicht als Verzweigungs-Diagramm (drei Orte oben, Feast und Leyden darunter, Klammer unter Venice + Mimi) – hier als fünf Karten.
 - S. 208: Handout (Handybildschirm mit Wodges Telepathie-Chat) als Bild mit Textnachbau.
 - S. 213: Begegnung zweispaltig (links Reden / Wer will was?, rechts Optionen / Kampf).
 - S. 214: Vault-Anforderung mit Preis „N/A“ (preis:"n. v."); Anomalie-Fähigkeit hat statt Ergebnissen nur drei Absätze (erg leer).
*/
