/* The Vault – Dead Quiet (Buch S. 24–38). Übersetzung aus dem Englischen. Autorin: Erin Roberts. */
window.TA_VAULT = window.TA_VAULT || {};
TA_VAULT["dead-quiet"] = {
 cw: "Ersticken",
 chaosP: 28,
 chaos: [
  {k:2, n:"Verderben", en:"Corrupt", x:"Ein Dickicht aus Kabeln versperrt alle Ein- und Ausgänge – schon die Berührung eines einzigen Kabels löst entweder einen ohrenbetäubenden, schmerzhaften Lärm oder eine erdrückende Stille aus, die keinen einzigen Herzschlag und Atemzug zulässt, bis sie vorüber ist."},
  {k:2, n:"Echo", en:"Echo", neu:1, x:"Etwas, das ein Ziel gesagt hat, hallt wieder und wieder in seinen Ohren nach und übertönt alle anderen Geräusche, bis jemand anderes genau dieselben Worte sagt."},
  {k:5, n:"Anziehen", en:"Attract", x:"Eine Beziehung erscheint an Kaye Renfields Reihenhaus, um nach dem Treffen der Concerned Citizens zu fragen."},
  {k:6, n:"Ausdehnen", en:"Expand", x:"Stille beginnt sich durch die Straßen von Caddy Corner auszubreiten, mit Kaye Renfields Reihenhaus als Mittelpunkt, und verschlingt entweder The Station, das Laundrocade oder Two Jacks. Wer sich in ihrem Weg befindet, kann weder Geräusche machen noch hören. Sobald die ganze Nachbarschaft überrollt ist, beginnt die Stille, die Herzen der Menschen anzuhalten."},
  {k:8, n:"Versetzen", en:"Displace", x:"Die Agenten betreten eine Traumwelt voller Kakofonie, die jedes Geräusch enthält, das die Anomalie eingefangen hat. So ist die Welt für die Anomalie – eine Flut aus Lärm, die Sprechen unmöglich macht, schmerzhafte Kopfschmerzen verursacht und das Gefühl für die Entfernung zwischen den Dingen verzerrt. Sie stammt aus einer scheinbar endlosen Zahl von Geräten und Menschen, die an Wände und andere Möbelstücke angeschlossen sind. Viele dieser Menschen tragen die Gesichter derer, die die Agenten in Caddy Corner gesehen haben. Ein oder zwei könnten sogar Kopien der Agenten selbst sein. Wer ausgesteckt wird, fällt still und dauerhaft tot um, mindert aber den schmerzhaften Lärm."},
  {k:10, n:"Töten", en:"Kill", x:"Alle Geräusche, die ein Ziel macht, enden, einschließlich seines eigenen Herzschlags. Es stirbt sofort."},
  {k:8, n:"Stille", en:"Silence", neu:1, x:"Alle Geräusche, die ein Ziel macht, werden vollständig verschluckt und können bis zum nächsten Sonnenaufgang von niemandem gehört werden."}
 ],
 ziele: [
  {art:"bel", n:10, x:"für den ersten Agenten, der auf Pindrop die höchstmögliche Punktzahl erreicht"},
  {art:"bel", n:1, x:"für jeden eingesammelten Jack"},
  {art:"ver", n:1, x:"für jede Beschwerde"}
 ],
 sonder: [
  {t:"kasten", h:"Sonderregel", plus:5, b:["Wer in Caddy Corner außerhalb der direkten Gegenwart der Anomalie singt, Musik spielt oder aufführt, verschafft der Anomalie 5 Chaos."]}
 ],
 reiter: {
  profil: [
   {t:"Fundstück", p:25, b:[
    {t:"bild", seite:24, x:"Eröffnungsseite: Titelschriftzug „Dead Quiet“, „von Erin Roberts“, daneben der Foren-Screenshot"},
    {t:"handout", art:"forum", h:"Caddy Corner Community Listserv", x:[
     {von:"Needsleep (vor 17 T., an deine Corner) – Ruhe jetzt", x:"Schon wieder liege ich um 2 Uhr nachts wach und höre, wie der Bass der wöchentlichen Freitagabend-Party im Two Jacks durch meine Wohnung dröhnt. Wie ich bereits beim nächtlichen Metallskulpturen-Debakel erwähnt habe: Es ist ILLEGAL, in einem Wohngebiet so spät noch Lärm zu machen. (☆ 1 · 16 Kommentare)"},
     {von:"Senioritis (vor 17 T.)", x:"Reg dich ab. Schlimm genug, dass ihr Billie vertrieben habt, nur weil sie ihre Kunst eine Sekunde nach Sonnenuntergang gemacht hat. Jetzt willst du eine Party dichtmachen?"},
     {von:"HighScoreSimms (vor 17 T.)", x:"Echt jetzt. Die Freitagabend-Party läuft seit mindestens zehn Jahren. Kämpf nicht dagegen an, genieß sie! So wie ich den Pindrop-Highscore genieße. Es gibt einen neuen Spitzenreiter im Laundrocade, Leute!"},
     {von:"HighScoreManny (vor 17 T.)", x:"Mal sehen, wie lange das hält! Ist mir egal, ob ich Tag und Nacht üben muss – ich komme für deinen Score, Simms!"},
     {von:"Needsleep (vor 17 T.)", x:"Damit das klar ist: Ich kämpfe gegen gar nichts an. Ich bin vollkommen höflich. Ich habe lediglich nach einem berechtigten Anliegen zum Lärm in dieser Nachbarschaft gefragt. Ehrlich, wie können Menschen so leben?"},
     {von:"Twojacks1 (vor 17 T.)", x:"Menschen?? Pass bloß auf …"},
     {von:"Needsleep (vor 3 T.)", x:"Im Two Jacks ist es endlich ruhiger geworden, aber der Lärm vom Waschsalon scheint ihn ersetzt zu haben. Können wir da nicht alle zusammenarbeiten? Hier muss sich etwas ändern."},
     {von:"TwoJacks2 (vor 3 T.)", x:"Hast du denn gar keinen Respekt?? Ein Mann ist tot. RIP Tony."},
     {von:"HighScoreManny (vor 3 T.)", x:"Stimmt es, dass sein Gesicht aussah wie auf dem Gemälde Der Schrei, als man ihn gefunden hat? Mund offen, Augen zusammengekniffen, die Hände ans Gesicht gekrallt? Was für ein Herzinfarkt ist das denn?"},
     {von:"HighScoreSimms (vor 3 T.)", x:"Manny!"},
     {von:"HighScoreManny (vor 3 T.)", x:"Sorry, dachte, ich wäre im privaten Chat. RIP."},
     {von:"TwoJacks2 (vor 3 T.)", x:"Schon okay, Manny. Ich frage mich genau dasselbe. Natürliche Ursachen, von wegen."},
     {von:"Needsleep (vor 3 T.)", x:"Diese Ausdrucksweise ist unnötig. Konzentrieren wir uns auf die anstehende Aufgabe, nämlich eine ruhige und friedliche Umgebung zu schaffen, in der sich alle wohlfühlen. Ich gründe eine Organisation, die dabei helfen soll – bitte melde dich bei mir, wenn du dich eintragen möchtest."},
     {von:"TwoJacks2 (vor 3 T.)", x:"Und melde dich bei mir, wenn du Hilfe dabei willst, herauszufinden, was zur Hölle in dieser Nachbarschaft los ist."},
     {von:"Needsleep (vor 2 T.)", x:"Suche weiterhin Freiwillige für den Rat der Concerned Citizens. Jemand?"},
     {von:"Needsleep (vor 1 T.)", x:"Jemand?"},
     {von:"Needsleep (vor 2 Std.)", x:"Jemand?"}
    ]}
   ]},
   {t:"Überblick", p:26, b:[
    {t:"profil",
     lead:"Als Kaye Renfield (sie/ihr) entdeckte, dass die Gegend um ihre neue Eigentumswohnung nachts „lebendiger“ war, als sie gedacht hatte, versuchte sie, die Nachbarn zur Ruhe zu bringen. Sie schrieb E-Mails. Sie zitierte Gesetze. Sie reichte Beschwerden bei den „zuständigen“ Behörden ein. Aber die Nachbarn hörten nicht zu. Egal, wie sie bat oder forderte oder weinte. Egal, wie viele Nächte sie sich schlaflos hin und her wälzte, fest überzeugt, dass die Geräusche aufhören müssen.\n\nIrgendetwas muss gegen all diesen Lärm getan werden, flüsterte sie jede Nacht in wütendem, inständigem Flehen in die Dunkelheit. Irgendetwas. Und schließlich gehorchte ein Etwas.",
     fokus:"Kaye Renfields Gelassenheit, erreicht durch Kontrolle.",
     domaene:"Der schallgedämmte Keller von Kaye Renfields Eigentumswohnung.",
     impuls:"Die Quelle jedes Geräuschs zu beseitigen, das in Caddy Corner während der Nacht gemacht wird."},
    {t:"h", x:"Geschichte"},
    "Caddy Corner ist eine kleine, eng verbundene Nachbarschaft, die ihren Namen ihrer Lage verdankt – diagonal gegenüber einer gescheiterten Schnellstraße, die einst als Road to Tomorrow angepriesen wurde. Das Autobahnprojekt dauerte gerade lange genug, um die Häuser der halben Nachbarschaft abzureißen, die Preise für den Rest in die Höhe zu treiben und eine Unterführung ins Nirgendwo zu hinterlassen. Eifrige Käufer zogen bald in lukrativere Gegenden weiter und überließen es der Gemeinschaft, die Lücken zu füllen.",
    "Ein ums Überleben kämpfender Waschsalon stellte hinten Spielautomaten auf und nannte sich fortan Laundrocade. Eine Kneipe vor Ort, das Two Jacks, belegte in der Stadt den dritten Platz für freundlichsten Service. Der Laden an einer stillgelegten Tankstelle wurde zum Zuhause eines florierenden Kunsthandwerksmarkts namens The Station. Jemand schrieb sogar einen Artikel über die Nachbarschaft: „A New Road Forward for Caddy Corner“.",
    "Kaye Renfield liebte diesen Artikel, schnappte sich eine erschwingliche Eigentumswohnung mitten in der Nachbarschaft und erzählte all ihren Freunden von ihrer Chance, sich in einem „aufstrebenden Hotspot“ ein Leben aufzubauen. Alles würde dort absolut perfekt sein. Wenn die Einheimischen nur leiser wären. Das Laundrocade war voller Teenager, die zu allen Tages- und Nachtzeiten herumhingen. Im Two Jacks gab es freitagabends eine Tanzparty mit reichlich Bass. The Station veranstaltete endlose Sommer-Straßenfeste. Alle schienen bis tief in die Nacht Zusammenkünfte zu feiern. Alles, was sie wollte, war eine einzige anständige Nacht Schlaf. War das zu viel verlangt?",
    {t:"h", x:"Erscheinung"},
    "Ein Käfig aus Knochen, dünn und schlank, wie die Knochen des Ohrs, die sich als menschliche Gestalt verkleidet haben. Aus der Ferne wirkt die Anomalie vielleicht wie ein langgliedriges Skelett: Ihr weißer, konturloser Kopf sitzt auf einem wabenförmigen Körper, groß genug, um einen Menschen in seinem Kern einzuschließen.",
    "Bei näherem Hinsehen zeigt sich, dass die Arme und Beine der Anomalie keine richtigen Gelenke haben und schlaff wie alte Telefonkabel aus ihrem Kern hängen. Aufrecht scheint sie nicht zu gehen, sondern einfach näher zu erscheinen. Auf allen vieren springt sie wie ein Wolf voran, wobei sich die drahtigen Gliedmaßen strecken und verkürzen, sobald sie auf neuen Boden treffen.",
    {t:"h", x:"Aktuelle Lage"},
    "Die Anomalie begann damit, technische Geräuschquellen zu stören und zum Schweigen zu bringen, und erschuf mithilfe von Chaos aus der Umgebung Kleine Anomalien namens Wirelings aus den Kabeln der Gegenstände, die sie zerstört hatte. Dann ging sie dazu über, den Lärm an seiner Quelle zu stoppen, indem sie die Menschen, die ihn machen, in ihrem Körper einfängt, wo kein Geräusch existieren kann, und jeden Laut aus ihnen herauspresst, auch ihren Herzschlag. Die Opfer sterben schreiend, aber niemand kann sie hören.",
    "Bisher hat sie drei Mitglieder der Gemeinschaft von Caddy Corner getötet – Billie Lee (sie/ihr), die auf ihre Metallinstallation einhämmerte; Tony Jackson (er/ihm), der die Lautsprecheranlage seiner Bar auf voller Lautstärke laufen ließ; und Manny Navarro (er/ihm), der beim Spielen seines liebsten Arcade-Spiels laut vor sich hin sang.",
    "Kaye weiß nichts von den Taten der Anomalie. Sie glaubt, dass die Todesfälle die Folge des „schnellen Lebens“ sind, das die Opfer geführt haben müssen, anstatt auf ihre Bitten um eine ruhigere Nachbarschaft zu hören."
   ]}
  ],
  vor: [
   {t:"Morgenbesprechung", p:27, b:[
    {t:"morgen", x:[
     "Eine Beziehung wollte im Two Jacks Tavern tanzen gehen, aber die Veranstaltung wurde abgesagt. Schon wieder.",
     "Der Fernseher des Agenten schaltet sich mitten in seiner Lieblingssendung wiederholt stumm und zeigt dann den Startbildschirm des obskuren Arcade-Spiels Pindrop.",
     "Ein Agent findet ständig Spielkarten an merkwürdigen Orten. Es sind immer Bildkarten, und die Gesichter darauf scheinen immer zu schreien.",
     "Eine Beziehung hat kurz vor einem wichtigen Termin ihre Stimme verloren.",
     "Ein Agent stolpert beim Verlassen des Hauses über Kabel von seinem Computer oder anderen Geräten, als wären sie aus dem Nichts aufgetaucht."
    ]}
   ]},
   {t:"Einsatzbesprechung", p:27, b:[
    {t:"vorlesen", b:[
     "Vor zwei Wochen wurde in einer Nachbarschaft namens Caddy Corner ein Todesfall gemeldet. Tony Jackson, einer der Besitzer einer Kneipe namens Two Jacks, wurde mit schmerzverzerrtem, erstarrtem Gesicht und wie zum Schrei geöffnetem Mund gefunden – die Todesursache schien jedoch ein plötzlicher Herzstillstand zu sein.",
     "Letzte Woche wurde ein weiterer Todesfall gemeldet – ein junger Mann namens Manny Navarro wurde im selben Zustand in einem örtlichen Geschäft namens Laundrocade gefunden. Dieser Zufall erregte die Aufmerksamkeit der Agency, was zur jüngsten Entdeckung führte:",
     "Von den Bewohnern von Caddy Corner unbemerkt, wurde letzte Nacht außerhalb der Nachbarschaft eine weitere Leiche gefunden – eine Frau Ende zwanzig mit demselben Gesichtsausdruck, neben einer Tasche mit Metallbearbeitungswerkzeug. Die Frau ist seit etwa einem Monat tot und wurde bei einer Begutachtung von Land in der Nähe zur Erschließung gefunden. Die Polizei hat noch keine Ermittlungen zu ihrer Identität aufgenommen, die schwer festzustellen sein wird.",
     "Etwas tötet in dieser Nachbarschaft Menschen, und die Agency würde lieber herausfinden, was, bevor Gerüchte Aufmerksamkeit auf die Aktivitäten der Anomalie lenken."
    ]}
   ]}
  ],
  erm: [
   {t:"Caddy Corner", p:29, b:[
    "Die Menschen von Caddy Corner haben im letzten Monat zwei wichtige Mitglieder ihrer Gemeinschaft verloren. Dazu kommen die ständigen Besuche städtischer Behörden in der Nachbarschaft, die anonymen Lärmbeschwerden nachgehen – sie sind ein wenig angespannt. Um die Anomalie zu untersuchen, müssen die Agenten ihr Vertrauen gewinnen und sie dazu bringen, ihr Wissen zu teilen.",
    {t:"h", x:"Concerned Citizens of Caddy Corner"},
    "Eine Notiz in präziser Handschrift auf hochwertigem Leinenpapier findet sich überall in Caddy Corner. Sie lautet:",
    {t:"handout", art:"brief", h:"Brief von Kaye Renfield", x:[
     "Liebe Nachbarn:",
     "ich weiß, dass viele von Ihnen ebenfalls über die nächtlichen Ruhestörungen in dieser Nachbarschaft besorgt sind. Ich bin sicher, Sie alle sind hart arbeitende Menschen, die nachts ohne ständige Unterbrechungen durch jene schlafen möchten, die den Frieden ihrer Umgebung nicht respektieren können. Wenn Sie mehr über die neu gegründeten Concerned Citizens of Caddy Corner erfahren möchten, melden Sie sich bitte bei mir, indem Sie eine Nachricht in meinen Briefkasten in der 227 Ashran Place einwerfen. Ruhe jetzt!",
     "–Kaye Renfield"
    ]},
    "Der Brief findet sich an der Seite einer der kaputten Waschmaschinen im Laundrocade, in einem Mülleimer neben der Eingangstür des Two Jacks, auf Jackies Schreibtisch im Two Jacks und am Schwarzen Brett im Laundrocade unter den Gedenkzetteln für Manny. Auch Tyran in The Station trägt ein Exemplar bei sich und kann die Agenten darauf ansprechen.",
    {t:"h", x:"Manifestieren/Wirelings"},
    "**Wenn die Anomalie einem Gerät den Ton entzieht,** werden Stücke des Kabels, das diesen Ton erzeugt hat, manchmal zu Kleinen Anomalien, den sogenannten Wirelings. Wirelings sind störende Kleine Anomalien, die von lauten Geräuschquellen oder Erzeugern von Chaos angezogen werden und der Anomalie ständig ihren Aufenthaltsort melden.",
    "**Zu Beginn des Einsatzes** sind 10 Wirelings (störend) in der Nachbarschaft aktiv, folgen den Einheimischen und beobachten sie, ohne ihre Ziele anzugreifen.",
    "**Wenn die Wirelings einen bestimmten Zweck erfüllen sollen,** kann Chaos mit -1 Rabatt pro Wireling ausgegeben werden, um Manifestieren, Verdoppeln oder Verdreifachen auszulösen und so viele Wirelings in Elektro-Wirelings (gewalttätig) zu verwandeln, die Umstehende unter Strom setzen, in Verhedderte Wirelings (einsperrend), die versuchen, jeden in ihrer Reichweite zu umwickeln und festzuhalten, oder in Sirenen-Wirelings (verlockend), die Opfer mit schönen Klängen anlocken, die plötzlich in Schreie umschlagen, laut genug, dass Ohren und Nasen bluten.",
    "Die Anomalie kann kein Chaos ausgeben, um zusätzliche Kleine Anomalien zu erschaffen, ohne ein tonerzeugendes elektronisches Gerät zu zerstören."
   ]},
   {t:"Two Jacks Tavern", p:30, b:[
    "Caddy Corners Nachbarschaftskneipe, das Two Jacks Tavern, steht in einem **gedrungenen Backsteinbau** mit einem schlichten Schild über der Tür. Ein handbemaltes Banner, mit Panzerband daran befestigt, verkündet **„Third Friendliest Bar in the City!“** Draußen führt ein Kreidetafelschild auf einer Seite die Veranstaltungen der Woche auf, darunter Open Mic Monday, Wepa Wednesday (mit der Bachata Basement Band) und Friday Night Grooves mit DJ Teddy G – alle durchgestrichen und mit dem Wort „abgesagt“ überkritzelt. Auf der anderen Seite der Kreidetafel steht „In Erinnerung an Tony Jackson, den einzig wahren Jack of Hearts.“",
    {t:"h", x:"Eingang"},
    "Die Tür zum Two Jacks ist alt und aus Holz, mit einem kleinen Fenster oben, das einst wie eine Spielkarte bemalt war, wovon aber vieles abgeblättert ist. Sie ist mit Schildern übersät.",
    "Eine Anzeige mit einer Gratis-Clipart-Grafik zu viel: **„Verschwitzt? Verstunken? Mit Bier übergossen? Wasch deine Wäsche im Laundrocade und erhalte jeden Monat Arcade-Jetons im Wert von 5 $!“**",
    "Ein alter Flyer für ein Straßenfest: **„Dieses Wochenende geben wir in The Station alles – 6 lokale Händler, Musik von DJ Teddy G und eine neue Metallskulptur von Billie! Feiern bis zur Dämmerung!“**",
    {t:"h", x:"Hauptraum"},
    "Das Two Jacks ist eine Kneipe der alten Schule mit gedämpftem Licht, schattigen Ecken, klebrigem Boden und Holzmöbeln mit abblätterndem Lack. Es ist größer, als es von außen wirkt, und erstreckt sich an der Bar auf der rechten Seite des Raumes vorbei bis zu einer zentralen hölzernen Tanzfläche mit einer kleinen DJ-Kanzel, die bei Bedarf als Bühne dient. Am Ende des Raumes hinter der Tanzfläche liegt eine Toilette, neben einer Tür mit der Aufschrift BÜRO. Außer dem Barpersonal sind nur ein paar Gäste da. Die Stimmung ist schlecht.",
    {t:"h", x:"Hinter der Theke"},
    "Two Jacks-Mitbesitzer Tony Jackson ist hier gestorben. Der Boden ist klebrig und hat rote Flecken, aber das ist Wein, kein Blut. Bei genauerer Untersuchung lässt sich allerdings ein langer, dünner Fußabdruck in einem Rest Limonade entdecken, der nach Root Beer riecht.",
    {t:"h", x:"Sharif, Barkeeper"},
    "Sharif (er/ihm) kann jedes Getränk mixen, das er je probiert hat. Hat sich in seinen Zwanzigern durch so viele Bars getrunken, dass er ein sehr großes Repertoire hat, ist aber stets darauf aus, es zu erweitern. Ist neuerdings zum Teekenner geworden. Hat Todesangst vor Insekten und versucht deshalb, den Laden so sauber zu halten, wie es ohne Verlust des Dive-Bar-Flairs geht. Brennt darauf, endlich hinter der Theke zu putzen, nachdem Tony vor zwei Wochen dort gestorben ist (sobald er Jackies Erlaubnis hat).",
    "**Wenn die Agenten ankommen,** arbeitet er an der Hälfte der Theke, die am weitesten von der Tür entfernt ist. Die andere Hälfte ist abgesperrt; dort ist Tony gestorben.",
    {t:"hinweis", art:"gew", h:"Das erfahren Agenten, wenn sie etwas bestellen und mit Sharif reden:", x:[
     "Tony trank bei Nachtschichten immer Root Beer.",
     "Im Bad bewegt sich etwas, das wie eine Spinne aussieht. Es gibt ihm ein ungutes Gefühl, aber es huscht immer zu schnell davon, um gefangen zu werden."
    ]},
    {t:"h", x:"Tanzfläche"},
    "Hinten auf der Tanzfläche befindet sich eine kleine DJ-Kanzel mit der Stereoanlage. Die Anomalie hat der Stereoanlage den Ton entzogen, bevor sie Tony angriff. Niemand hat versucht, sie zu reparieren. In der Nähe der Stereoanlage bekommen die meisten Menschen eine Gänsehaut.",
    "**Methoden zum Aufspüren Anomaler Resonanz** zeigen eine kleine Spur von der Stereoanlage zur Toilette und eine große Spur zu der Stelle hinter der Theke, wo Tony gestorben ist, und dann hinaus durch die Vordertür, wo sie sich zu stark verflüchtigt, um ihr zu folgen.",
    {t:"h", x:"Toilette"},
    "Um auf die Toilette zu kommen, braucht man einen Toilettenschlüssel von Jackie oder Sharif. Drinnen befinden sich eine einzelne Kabine und etwas Toilettengraffiti der alten Schule. Ein Wireling, der aus den Kabeln der Stereoanlage des Two Jacks entstanden ist, sitzt wie eine langgliedrige Spinne in der Ecke.",
    "**Wenn man sich ihm nähert oder ihn stellt,** flieht er in den Hauptraum (als Elektro-Wireling, wenn genug Chaos vorhanden ist) und greift das Barpersonal und die Gäste an, wodurch wahrscheinlich Lose Enden entstehen.",
    {t:"h", x:"Jackie, Mitbesitzerin"},
    "Jackie Williams (sie/ihr) ist eine ehemalige Jazzsängerin, die ihre rauchige Stimme verloren hat, entweder weil sie mit dem Rauchen angefangen oder aufgehört hat – ihre Geschichte ändert sich jedes Mal. Hat das Two Jacks fast 20 Jahre lang gemeinsam mit ihrem Ex-Mann geführt. Alle denken, die Bar sei nach ihren Namen benannt, aber in Wahrheit hat sie sie den Vorbesitzern in einer Runde Blackjack abgewonnen.",
    "Sie hat Tony vor etwa zwei Wochen tot auf dem Boden hinter der Theke gefunden, den Mund wie zum Schrei geöffnet. Jackie ist überzeugt, dass etwas Tony getötet hat.",
    "**Wenn die Agenten ankommen,** sitzt sie im Büro der Bar (ein kleiner fensterloser Raum hinter den Toiletten, dessen Wände mit Spielkarten tapeziert sind) und geht Papierkram durch, der durch seinen Tod entstanden ist. Gelegentlich kommt sie heraus, um sich bei Sharif einen Eistee zu holen und sich bei ihm zu beschweren, dass niemand den Tod von Tony oder Manny Navarro ernst nimmt.",
    "Jackie wünscht sich eine offizielle städtische Untersuchung aller Beweise, die sie zu Tonys Tod gesammelt hat, und dass sein Lieblingslied „Two Jacks for a Queen“ noch ein letztes Mal aus dem kaputten Lautsprecher zu hören ist.",
    {t:"hinweis", art:"gew", h:"Das erfahren Agenten, wenn sie die Stereoanlage reparieren oder anbieten, bei der Einleitung einer Untersuchung zu helfen:", x:[
     "Das Two Jacks hat kürzlich eine Vorladung wegen zu lauter Musik bei Nacht erhalten, die ihrer Überzeugung nach von „dieser Frau Kaye“ und deren Concerned-Citizens-Gruppe stammt.",
     "In der Nacht, in der er starb, arbeitete Tony spät an der Stereoanlage und versuchte, den Bass so einzustellen, dass die Gäste ihn genießen konnten, ohne dass die Bar weitere Beschwerden auslöste."
    ]}
   ]},
   {t:"Laundrocade", p:32, b:[
    "Das Laundrocade in Caddy Corner ist in einem besonders grellen Türkis gestrichen. Vorne stehen Waschmaschinen, hinten befindet sich ein Arcade-Bereich. Einer der besten Kunden des Laundrocade, **Manny Navarro**, ist hier vor zwei Wochen in diesem hinteren Bereich gestorben. Die Managerin Mia Riley fand ihn mitten im Arcade-Bereich auf dem Boden, umgeben von ausgeschalteten Spielen, bei denen viele Kabel fehlten.",
    "Das Laundrocade ist zwar technisch rund um die Uhr geöffnet, aber nach Ladenschluss wird ein Code zum Hineinkommen benötigt, und Manny war der Letzte, den die Überwachungskameras des Laundrocade beim Betreten erfassten, bevor sie rauschten und ausfielen.",
    {t:"h", x:"Eingang"},
    "Über der Eingangstür hängt eine Kamera neben einem Schild mit der Aufschrift **„Smile, you’re under surveillance!“** Das rote Licht der Kamera flackert in einem scheinbar zufälligen Muster – aber geübte Agenten erkennen, dass es ein sich wiederholender Morsecode (... .. .-.. . -. -.-. .) ist, der das englische Wort „silence“ buchstabiert.",
    {t:"h", x:"Schwarzes Brett"},
    "Ein Schwarzes Brett neben dem Eingang des Laundrocade ist eines von Caddy Corners vielen Gemeinschaftsbrettern. Daran angeheftet sind:",
    {t:"karten", x:[
     {h:"Werbung", b:["Eine Werbung für Veranstaltungen im Two Jacks Tavern. Jemand hat sie durchgestrichen und „Abgesagt“ auf den Flyer geschrieben."]},
     {h:"Abreißzettel", b:["Ein Abreißzettel für 10 % Rabatt bei The Station Convenience Store: **„Probleme mit Ihrer Stereoanlage oder Ihrem Smartphone? Wir haben Kopfhörer, Reparatursets und mehr vorrätig!“**"]},
     {h:"Anmeldebogen", b:["Ein Anmeldebogen für Concerned Citizens of Caddy Corner, eine Neighborhood Betterment Association. Kaye Renfield ist die Erste auf der Liste. Ein paar andere Namen stehen darauf, aber alle sind durchgestrichen. Keines der Opfer steht auf der Liste."]}
    ]},
    "Einzelne Notizen an andere Kunden und Gäste, mit Kugelschreiber auf Karteikarten geschrieben. Die meisten sind kleine Gedenkworte für Manny Navarro, aber eine, in sorgfältig gezeichneter Kalligrafie, die zur Handschrift auf der Concerned-Citizens-Liste passt, lautet: **„Bitte halten Sie Ihre Lautstärke zwischen 22 und 7 Uhr AUF EIN MINIMUM. Manche von uns versuchen zu schlafen. Vielen Dank!!!“**",
    {t:"h", x:"Waschsalon"},
    "Die Maschinen im Waschsalon sehen alle ein bisschen anders aus, nicht zuletzt dank Mias ständigem Herumbasteln. Mehrere haben große gelbe Außer-Betrieb-Schilder. Ein oder zwei Einheimische waschen Wäsche, haben aber wenig Zeit zum Reden – nach den beiden jüngsten Todesfällen sind alle angespannt.",
    "Hinter dem Tresen, der mit kleinen roboterartigen Objekten übersät ist, zeigt ein Überwachungsbild den Eingangsbereich des Waschsalons, aber ab und zu flackert es im selben „zufälligen Muster“ wie das rote Licht an der Kamera.",
    {t:"h", x:"Mia, Besitzerin/Tüftlerin"},
    "Mia Riley (sie/ihr) hat die Leitung des Laundrocade von den Geschwistern ihrer Mutter übernommen, einem Trio, das den Waschsalon nach dem Scheitern des Autobahnprojekts günstig gekauft hatte. Liebt es, an den Waschmaschinen herumzutüfteln; würde wahrscheinlich Roboter bauen, wenn sie das für einen tragfähigen Beruf hielte.",
    "Hat Mannys Leiche letzte Woche gefunden, ist aber überzeugt, dass er vor Aufregung geschrien hat, als er starb, was den Schrei auf seinem Gesicht erkläre.",
    "**Wenn die Agenten eintreten,** zieht sie gerade den Stecker einer kaputten Waschmaschine und hängt ein Außer-Betrieb-Schild daran, während sie sich mit Simms über Manny unterhält.",
    {t:"hinweis", art:"anom", h:"Das erfahren Agenten, wenn sie für Mia einen kaputten Spielautomaten reparieren oder anomale Methoden einsetzen:", x:[
     "Irgendetwas stört den Betrieb vieler Maschinen im Laundrocade. Sie fallen nachts regelmäßig aus, und der Versuch, sie zu reparieren, jagt ihr Gänsehaut über den Rücken. Stattdessen markiert sie sie als außer Betrieb.",
     "Sie sammelt einen Haufen Werkzeug und Schrott zum Tausch mit Billie, einer Metallkünstlerin aus der Gegend, aber seit einem Monat hat niemand sie gesehen, und Mia ist nicht sicher, ob die Frau zurückkommt, nachdem sie wegen ihrer „illegalen“ Metallskulptur vor The Station eine Vorladung von der Stadt bekommen hat. Wer dort arbeitet, weiß vielleicht mehr.",
     "Die Überwachungskameras haben kurz nach Mannys Eintreten ins Laundrocade aufgehört aufzuzeichnen, er sang wie immer laut vor sich hin, aber sie schwört, sie habe in der Ecke des letzten Bildes der Aufnahme etwas wie eine Person aus verdrehten weißen Drähten oder langen Knochen gesehen. Am nächsten Tag war dieses Bild verschwunden."
    ]},
    {t:"h", x:"Simms, Stammgast"},
    "Simms (dey/dem) ist Stammgast im Laundrocade und arbeitet nachts im Two Jacks als Barback. Hat den Highscore bei zwei Spielen im Laundrocade. Manny versuchte in der Nacht, in der er starb, deren Highscore bei Pindrop zu knacken.",
    "Simms will das Spiel reparieren, um die tatsächlichen Highscores zu sehen. Wenn die Agenten eintreten, füllt Simms gerade eine der verbliebenen Waschmaschinen mit Wäsche aus dem Two Jacks (Barhandtücher, Geschirrtücher usw.).",
    {t:"hinweis", art:"anom", h:"Simms redet nicht vor Mia. Agenten erfahren Folgendes, wenn sie dey wegführen oder anomale Methoden einsetzen:", x:[
     "Manny starb vor Pindrop, mit Kabeln des Spielautomaten um die Knöchel gewickelt, die ihn vom Spiel wegzogen. Simms war so verängstigt, dass dey weggerannt ist, statt es zu melden, und Mia die Leiche am nächsten Tag entdecken ließ.",
     "Dey träumt seit Mannys Tod jede Nacht von einer weißen, schlaksigen Kreatur."
    ]},
    {t:"h", x:"Pindrop"},
    "Zum Arcade-Bereich des Laundrocade gehören zwei Flipperautomaten und ein Greifautomat, aber die übrigen sechs Geräte sind allesamt obskure Arcade-Spiele, darunter Pindrop, ein Spiel, in dem man in einer Verfolgungsjagd durch ein Labyrinth im Pac-Man-Stil Kraft sammelt und sie dann einsetzt, um in vom Breakdance inspirierten Kampfszenen gegen Computergegner zu kämpfen.",
    "Das Spiel funktioniert nicht mehr, seit Manny gestorben ist – es wechselt zwischen einem Bildschirm mit den Worten „Congratulations, Manny, on the new high score!“ und einer Liste von Highscores:",
    {t:"pindrop", x:[
     ["SOM","191513"],["EOF","5156"],["USA","21191"],["RET","18520"],["RYI","18259"],["NGT","14720"],["OSL","151912"],["EEP","5516"]
    ]},
    "Das Spiel ist spielbar, aber der am Ende angezeigte Punktestand stimmt nicht mit dem im Spiel erzielten überein. Die Buchstaben ergeben aneinandergereiht den Satz „some of us are trying to sleep“ („Manche von uns versuchen zu schlafen“).",
    "Ein Wireling sitzt in den Kabeln hinter dem Spielautomaten. Er bewegt sich nicht, es sei denn, die Agenten stören ihn; dann versucht er, zu einem Verhedderten Wireling zu werden und sie zu fesseln. Alle Gäste des Waschsalons werden zu möglichen Losen Enden.",
    "**Wenn die Agenten spielen,** werden sie gebeten, ihre Initialen einzugeben – wegen des Fehlers hängen die am Ende angezeigten „Punkte“ vollständig von der Stellung dieser Buchstaben im Alphabet ab. Um zum Beispiel mehr Punkte als die anderen auf dieser Liste zu erreichen, können sie T(20) P(16) N(14) eingeben und erhalten 201614 Punkte. Die höchstmögliche Punktzahl ist 262626, erreicht durch Eingabe der Initialen ZZZ."
   ]},
   {t:"Lost Art", p:35, b:[
    "The Station Convenience Store war einst an eine richtige Tankstelle angeschlossen, die die vielen Lastwagen bediente, die zum Bau des Autobahnprojekts kamen, das Caddy Corner seinen Namen gab. Heute verkauft er einen eklektischen Mix an Waren, je nach örtlicher Nachfrage, veranstaltet einen wöchentlichen Kunsthandwerksmarkt und ist Schauplatz vieler sommerlicher Straßenfeste. Die alten Zapfsäulen sind der Jahreszeit entsprechend dekoriert, was ein festliches Bild ergibt. In der Nähe beginnt eine Ansammlung von Metallteilen, die möglicherweise eine Skulptur sind, zu rosten.",
    "Ohne dass jemand in Caddy Corner es weiß, wurde die Metallinstallationskünstlerin, die für die Skulptur verantwortlich ist, Billie Lee, vor einem Monat am Rand der Nachbarschaft von der Anomalie getötet. Ihre Leiche wurde kürzlich gefunden, aber die Nachricht hat Caddy Corner noch nicht erreicht.",
    {t:"h", x:"Durch die Gänge"},
    "Im Laden kann man sich schwer zurechtfinden, da es dort alles gibt, von Lebensmitteln über Haushaltswaren bis zu ein paar elektronischen Geräten, aber der Verkäufer Tyran kann die Agenten zu allem führen, was sie kaufen möchten, darunter ein seltener scharfer Brennnessel-Rosenblüten-Tee (in einer hinteren Ecke) und das letzte Elektronik-Reparaturset auf Lager – sie waren in letzter Zeit sehr gefragt, wobei Tyran anmerkt, dass sie nach dem Öffnen nicht zurückgenommen werden, auch wenn das Gerät nicht repariert ist. Er scherzt, dass er selbst ein Reparaturset gebrauchen könnte, da der Geldautomat spinnt. Zwei Wirelings lauern dahinter.",
    {t:"h", x:"Tyran, hinter dem Tresen"},
    "Tyran Davies (er/ihm) ist ein Schüler, der sich ein bisschen Geld dazuverdient. Hat ständig eine neue Leidenschaft – war früher in Urban Farming vertieft, ist aber wegen seines Schwarms für Billie, die oft für Material vorbeischaut, zur Kunst gewechselt. Er hat sie seit über einem Monat nicht gesehen und macht sich Sorgen, weiß aber nicht, wie er sie erreichen kann. Sie wohnt in Uptown, verbringt aber die meiste Zeit in und um The Station und hat keine richtige Familie.",
    "Wenn die Agenten ankommen, steht er herum und wartet auf Kundschaft. Wird ihm von Billies Tod erzählt, ist er am Boden zerstört und will sofort dafür sorgen, dass sie würdiger bestattet wird; er konzentriert sich auf die Idee, einen Grabstein aus Metall für sie zu bauen, um seine Trauer zu verarbeiten.",
    {t:"hinweis", art:"gew", h:"Das erfahren Agenten, wenn sie etwas kaufen oder in Tyrans Beisein über Billies Kunstwerk sprechen:", x:[
     "Billie arbeitete an dem Metallkunstwerk draußen, bis ihre Metallschleifmaschine nicht mehr ansprang und sie zurück in ihr Atelier ging, um einen Hammer zu holen. Sie ist nicht zurückgekehrt.",
     "Am Tag vor Billies Verschwinden tauchten städtische Beamte bei The Station auf wegen einer Lärmbeschwerde über ein jüngstes Straßenfest. Dabei gaben sie ihr eine Vorladung wegen der Skulptur. Er befürchtet, dass sie deshalb nicht zurück ist.",
     "Als Minderjähriger hat er kaum Zeit im Two Jacks verbracht, kennt aber den verstorbenen Mitbesitzer Tony, der oft im Laden Root Beer kaufte, wenn er sich auf eine Spätschicht vorbereitete, auch in der Nacht, in der er starb. Tyran sprach nicht lange mit ihm, aber er erwähnte, dass er nach den jüngsten Beschwerden Anpassungen an der Soundanlage vornehmen wolle.",
     "In der Nacht, in der Manny Navarro starb, schloss Tyran gerade ab und sang vor sich hin. Er konnte Manny auch in der Nähe des Laundrocade singen hören, fast wie ein Duett. Dann sah er aus dem Augenwinkel eine schlaksige, knochige Gestalt, die auf The Station zuging. Als aus Richtung des Laundrocade ein Scheppern kam, ging sie auf alle viere und rannte stattdessen in Richtung des Geräuschs davon, wie ein Hund aus langen, drahtigen Knochen. Er befürchtet, dass er sie irgendwie in Mannys Richtung geschickt hat – sie waren zwar keine engen Freunde oder so, aber sie sind im Grunde zusammen aufgewachsen."
    ]}
   ]},
   {t:"227 Ashran Drive", p:36, b:[
    "Kaye Renfields Haus ist still. Zu still. Als wäre der Schall selbst um es herum zum Stillstand gekommen. Je näher man kommt, desto mehr hallt die eigene Stimme in den eigenen Ohren nach, schrill und fremd. Klopfen an der Tür bringt keine Antwort, und das Geräusch des Klopfens selbst wird vom Haus verschluckt. Man spürt das Gefühl, aber der Ton ist einfach nicht da. Je fester man klopft, desto mehr spürt man ein Pochen im Schädel. Eine Türklingel gibt es nicht.",
    {t:"h", x:"Concerned Citizens"},
    "Kaye Renfield hat die Organisation Concerned Citizens of Caddy Corner (CCCC) von ihrer Eigentumswohnung in der Ashran Drive mitten in der Nachbarschaft aus gegründet und neben einer Little Free Library vor ihrem Haus einen kleinen Briefkasten mit Informationsflyern aufgestellt. Die Flyer erklären, dass die CCCC ein Nachbarschaftsverein ist, der Regeln der Nachbarschaftlichkeit und einen Caddy-Corner-Verhaltenskodex aufstellen wird, an den sich hoffentlich alle halten. Die Regeln selbst sind schwer zu lesen, weil ihr Schriftsatz so seltsam ist. Bei genauerem Hinsehen zeigen die Flyer kleine ASCII-Bilder von drei schreienden Gesichtern – einem älteren Mann, einem jungen Mann und einer jungen Frau. Sie entsprechen den Beschreibungen von Tony Jackson, Manny Navarro und Billie.",
    {t:"h", x:"Erdgeschoss"},
    "Die Möbel sind spärlich, als wäre das Haus ein Katalogmodell statt eines Zuhauses. Stapel von Concerned-Citizens-Flyern liegen auf einem Esstisch, zusammen mit einem ordentlichen Stapel ausgehender Post. Das leise Rauschen eines White-Noise-Geräts ist das einzige Geräusch im Haus. Es drückt auf einen wie ein schwerer Nebel, brummt gegen die Zunge und legt sich um den eigenen Herzschlag. Es entspricht auch der Beschreibung des Geräuschs im Hintergrund der Anrufe über Caddy Corner bei den Behörden. Aus einem hinteren Zimmer ruft eine angenehm unauffällige Stimme, man solle es sich **„gemütlich machen – ich bin gleich bei Ihnen!“** Wenn sie spricht, spürt man kurz, wie der Druck des weißen Rauschens nachlässt, aber er kehrt zurück, sobald die Stimme verstummt.",
    {t:"h", x:"Briefe auf dem Tisch"},
    "Die Briefe auf Kayes Esstisch sind alle an lokale Nachrichtenmedien und Politiker adressiert und fordern, etwas gegen den ganzen nächtlichen Lärm in Caddy Corner zu unternehmen. Außerdem liegen mehrere Notizen bereit, die geschrieben wurden und neben einer Rolle Malerkrepp darauf warten, den Nachbarn zugestellt zu werden.",
    {t:"handout", art:"notiz", h:"Notiz an einen Nachbarn", x:["Ich habe gehört, dass Ihr Hund nachts wieder gebellt hat. Wenn Sie ihn unter Kontrolle bringen könnten, wäre ich Ihnen dankbar. Ich versuche zu **ruhen**."]},
    {t:"handout", art:"notiz", h:"Notiz an das Two Jacks", x:["Die städtischen Verordnungen besagen klar, dass übermäßiger Lärm um 22 Uhr enden sollte, und doch beginnt Ihre Freitagabend-Party „Friday Night Grooves“ erst gegen 23 Uhr. Ich kann Ihnen gern eine Kopie der Vorschriften schicken, falls nötig."]},
    {t:"handout", art:"notiz", h:"Notiz an das Laundrocade", x:["Ich verstehe, dass das „Laundrocade“ 24 Stunden geöffnet ist, aber Ihre Kunden machen eine unverhältnismäßige Menge Lärm hin und her. Ist das nötig?"]}
   ]}
  ],
  beg: [
   {t:"Kaye und der Keller", p:38, b:[
    {t:"h", x:"Kaye Renfield"},
    "Kaye Renfield legt gerade letzte Hand an die Snacks für das bevorstehende Treffen der Concerned Citizens of Caddy Corner. Trotz zunehmender Gefühle der Zurückweisung, weil niemand zu ihren Treffen erscheint, glaubt sie, dass die ganze Gemeinschaft irgendwann zu ihrer Denkweise finden wird.",
    "Für Kaye ist die Ankunft der Agenten ein Beweis dafür, dass die Nachbarn anfangen, ihr zuzuhören; sie begrüßt sie herzlich. Sobald sie begreift, dass sie die Todesfälle untersuchen, bekundet sie ihr Mitgefühl für die Verluste der Gemeinschaft, tut sie aber ab – sie glaubt, Billie sei eine Durchreisende gewesen, Tony habe wohl schlechte Ess- und Trinkgewohnheiten gehabt, und Manny sei möglicherweise in Drogen oder Bandenaktivitäten hineingeraten. Kaye schlägt vor, sich stattdessen auf die Lärmverstöße zu konzentrieren, denn derzeit könne sie nur in ihrem Keller Frieden finden, wo die Dinge so sind, wie sie sein sollten.",
    "Sie ist bereit, den Agenten ihren Keller zu zeigen, damit sie den Unterschied hören können.",
    {t:"h", x:"Keller"},
    "Die cremeweißen Wände sind mit schwerer Schalldämmung gepolstert, und die Stufen und der Boden sind mit dickem grauem Teppich bedeckt. Ein Sofa steht an der linken Wand neben einem niedrigen Beistelltisch und einer Lampe. Eine gefaltete Decke und ein Kissen liegen darauf, als schliefe Kaye dort. An der hinteren Wand stehen ein Schreibtisch und ein Drucker, neben einem Haufen von etwas, das wie dünne weiße Kabel aussieht. Der Raum ist still, aber jedes Geräusch in deinem Körper wird verstärkt; du hörst jeden Atemzug und jedes Schlucken, jeden Herzschlag, jede Bewegung eines Gliedes gegen ein anderes.",
    "**Wenn die Agenten nach dem Überschreiten der Kellerschwelle auch nur das geringste Geräusch machen,** entrollt sich der Kabelhaufen zur Anomalie und bildet einen Käfig aus schlankem knochenartigem Draht, der auf zwei langen Beinen wie ein dünn gezogenes Skelett thront. Ihr Kopf ist ein glatter weißer, konturloser Schädel. Ihre Arme hängen zunächst schlaff herab, strecken sich dann aber aus und versuchen, die Quelle des Geräuschs in den Käfig ihres Körpers zu zerren.",
    "**Wenn Kaye im Raum ist,** ist sie überrascht – erkennt aber schnell, dass es auf ihre Wünsche reagiert, und hat keine Mühe, sich mit ihm zu verbünden."
   ]},
   {t:"Die Anomalie", p:39, b:[
    "Die Anomalie ist zu Kayes Beschützerin geworden und sorgt für die absolute Stille, die sie ihrer Meinung nach braucht, indem sie alles in der Nähe aufspürt, was sie ihr nehmen könnte – wie ein übereifriger Wachhund. Kaye fühlt sich nur ruhig, wenn sie sich in Kontrolle fühlt – mit der Zeit hat die Anomalie das verinnerlicht, ist schmerzhaft empfindlich gegenüber allen Geräuschen geworden und reagiert sofort auf ihre Wünsche. Schall zu absorbieren ist zu einer Art geworden, sich selbst zu schützen und gegen jene auszuteilen, die sich Kaye nicht beugen wollen.",
    "**Wenn so viel Schall auf Kaye gerichtet wird,** dass die Anomalie ihn nicht eindämmen kann, beginnt sie, ihre Fähigkeit Ausdehnen zu bevorzugen, um die ganze Gegend zum Schweigen zu bringen. **Wenn man sie gewähren lässt,** wird diese Stille irgendwann anfangen, Menschen zu töten, so wie die Anomalie einzelne Menschen getötet hat. Schon eine kurze Erfahrung dieser Stille macht Menschen in der ganzen Gegend zu Losen Enden.",
    "**Wenn die Agenten sie weiter mit Schall angreifen** und der Anomalie das Chaos ausgegangen ist, wird sie überlastet, was sie genug schwächt, um sie zu fangen.",
    "Es ist möglich, mit der Anomalie zu verhandeln, doch Schall macht sie wütend und provoziert sie zum Angriff, daher müssen andere Methoden eingesetzt werden, um sie von der Sichtweise der Agenten zu überzeugen. Man kann sie davon überzeugen, dass ihre Bemühungen, die Nachbarschaft zu kontrollieren und zum Schweigen zu bringen, mehr Lärm und Aufmerksamkeit in die Nachbarschaft ziehen werden, dass Kayes Ziele aussichtslos sind oder dass Kaye am ruhigsten sein wird, wenn sie nicht mehr lebt.",
    "**Wenn Kaye stirbt und die Anomalie nicht gefangen wird,** verliert sie ihren Fokus und braucht Anleitung zu einem neuen – oder sie beginnt, zum Hollow zu werden, und fängt an, gefährlich und wahllos Dinge zum Schweigen zu bringen."
   ]}
  ],
  nach: [
   {t:"Ausgänge", p:39, b:[
    "Sobald die Anomalie gefangen, zerstört wurde oder die Umgebung von Caddy Corner verlässt, funktionieren alle geräuscherzeugenden Elektrogeräte wieder.",
    "**Wenn sie intakt entkommt,** lässt sie sich in einer neuen Nachbarschaft nieder und findet einen neuen Menschen, den sie verteidigen kann. Ihr Instinkt ist es, jemand anderen zu suchen, der Kontrolle über den Lärm um sich herum will, doch sie könnte sich auch mit jemandem zusammentun, der den physischen Raum oder den emotionalen Zustand der Menschen um sich herum kontrollieren will. Es ist unwahrscheinlich, dass sie sofort wieder tötet, aber sie wird es irgendwann tun, wenn man sie gewähren lässt.",
    {t:"h", x:"In Caddy Corner:"},
    "Das Two Jacks beginnt wieder zu florieren, aber Jackie fühlt sich dort weiterhin unwohl. Sie nimmt Sharif als neuen Mitbesitzer auf und konzentriert sich darauf, ihre Gesangskarriere neu zu starten, mit Tonys Lieblingslied als ihrer Paradenummer. Mit der Zeit verändert Sharif Aussehen und Atmosphäre des Ladens, um etwas mehr Licht und Politur hineinzubringen und die Insekten fernzuhalten. Er bildet Simms zum neuen Barkeeper aus.",
    "Mia führt das Laundrocade weiter, ergänzt aber Roboterkämpfe aus einigen Ersatzteilen der Spielautomaten. Ihren wildesten Roboter nennt sie Manny the Mouth.",
    "Tyran beschließt, in die Kunst einzusteigen, und baut auf den rostigen Metallstücken auf, die Billie hinterlassen hat. Es stellt sich heraus, dass er dafür absolut kein Talent hat, aber er wird schließlich Kunstlehrer an einer Schule und inspiriert seine Schüler.",
    "Kaye Renfield, falls noch am Leben und halbwegs unversehrt, verkriecht sich in ihrem Keller und beginnt, einen Blogbeitrag über ihre Erfahrungen in Caddy Corner zu schreiben. Er ist als vernichtende Anklage gedacht, zieht aber mehr Menschen in die Nachbarschaft und erhöht damit den Lärm um sie herum."
   ]},
   {t:"Vault-Anforderung", p:39, b:[
    {t:"anforderung", img:"02-dead-quiet-zettel-1", h:"Wire Pals", en:"Wire Pals", preis:6, preisNote:"pro 3er-Set", b:[
     "Diese praktischen Automaten, entwickelt per Reverse Engineering aus den Wirelings der Anomalie, lassen sich darauf trainieren, Fälle jeder von dir beschriebenen Tätigkeit aufzuspüren. Um einen Wire Pal zu aktivieren, beschreibe eine Tätigkeit (*Fahrrad fahren, eine Dose Mega Kool öffnen, bei einem Rechtschreibwettbewerb der dritten Klasse Zweiter werden usw.*). Einmal aktiviert, rollt sich der Wire Pal auf und huscht in einem sich ausdehnenden Radius umher, bis er jemanden findet, der die genannte Tätigkeit ausgeübt hat.",
     "Hat er eine solche Person gefunden, kehrt er zu dir zurück und führt dich zu ihr.",
     "Hauchdünn und federleicht werden Wire Pals in Dreierpackungen geliefert und sehen standardmäßig aus wie Kreditkarten einer örtlichen Bank, ausgestellt auf den Namen des Käufers. Gegen eine zusätzliche Belobigung kannst du dein Set individuell bestellen: Sie können dann eine andere Auswahl gewöhnlicher oder unauffälliger Haushaltsgegenstände nachahmen. Wenn sie aktiv sind, stehen sie auf vier bis acht Beinen und bewegen sich insektenartig über Böden, Decken und Wände. Sie können auch starke Winde nutzen, um größere Entfernungen zurückzulegen.",
     "Agenten ab der Stufe Senior Associate können im Triage ein Wire-Pals-Dashboard aufrufen. Dieser kostenlose Service liefert GPS-Koordinaten aller in der Nähe gerade im Einsatz befindlichen Wire Pals, versehen mit der Identität des Agenten, der sie eingesetzt hat. Über das Dashboard kann Wire Pals aufgetragen werden, einem Ziel leise zu folgen, ohne zu dir zurückzukehren."
    ]}
   ]},
   {t:"Anomalie-Fähigkeit", p:39, b:[
    {t:"faehig", h:"Sympathetische Schwingung", en:"Sympathetic Vibration",
     x:"Stimme dich auf eine beliebige Frequenz ein. Berühre etwas und würfle auf **Aufmerksamkeit**.",
     erg:[
      ["ok","Bei Erfolg stimmst du dich auf die Frequenz des berührten Gegenstands oder Stoffes ein und kannst alle Vorkommen davon in einer Entfernung erkennen, in der ein Schrei hörbar wäre (*in einer Stadt einige Blocks, auf dem Land weiter, über stillem Wasser sehr weit usw.*). Du kannst Masse und Ort der anderen sowie ihre Geschwindigkeit und Richtung grob bestimmen. Dieser Effekt hält an, solange du das Ding berührst."],
      ["plus","Bei jeder dritten {3} kannst du eine wählen:\n– Du kannst alle auf diese Weise erkannten Gegenstände als Lautsprecher behandeln und das Ding, das du berührst, als Mikrofon.\n– Du kannst die Bewegung aller Vorkommen des Gegenstands oder Stoffes anhalten, indem du Druck auf das ausübst, das du berührst, und alle zum sofortigen Stillstand bringst. Falls sie Geräusche gemacht haben, hören sie damit auf, bis der Effekt endet.\n– Du kannst alle auf diese Weise erkannten Dinge durchrütteln, indem du das, was du berührst, schnell schüttelst. Der betroffene Gegenstand bewegt sich im Verhältnis zu seiner Größe: Ein Baseball könnte wild herumspringen, während ein Gebäude sich nur unmerklich bewegt."],
      ["nein","Bei Fehlschlag stimmst du dich auf jede Frequenz ein. Der GM wählt einen der Effekte von „Bei jeder dritten {3}“ aus, und alles in Reichweite der Fähigkeit erlebt diesen Effekt, bis du den betroffenen Bereich verlässt."]
     ], b:[]}
   ]}
  ]
 }
};
/* GESTALTUNG:
 - Seitenzählung: S.-Zahlen = Dateinummer SNNN (Beginn Einsatz S024 = Inhaltsverzeichnis); die gedruckten Fußzeilen im Buch stehen eine Zahl höher. S039 ist bereits das Cover des nächsten Einsatzes (ROM Dump) und nicht übernommen.
 - S. 24: Fundstück = Foren-Screenshot „Caddy Corner Community Listserv“ (grüne Kopfleiste, weiße Kommentarkarten, Nutzernamen farbig). Beiträge in drei Zeitblöcken (vor 17 T. / vor 3 T. / vor 2 T.–2 Std.), zwischen den Blöcken im Bild feine Trennlinien. Der erste Beitrag („Tranquility Now“ = „Ruhe jetzt“) ist Hauptbeitrag mit Stern 1 und 16 Kommentaren. Zeitangaben sind in `von` einbegriffen. Titelschriftzug „DEAD QUIET BY: ERIN ROBERTS“ hochkant rechts. Das letzte „Anyone?“ ist am Seitenrand abgeschnitten.
 - S. 25: profil.lead enthält zwei Absätze (durch \n\n getrennt).
 - S. 27: Chaos-Effekte: Echo und Stille mit ▲ (neu). Sonderregel als Kasten `sonder` mit Zusatzfeld plus:5 (großes „+5“-Chaos-Symbol links im Kasten).
 - S. 28: Brief der Concerned Citizens als Handout (Handschrift-Schrift, violett), Einrahmung mit Rundkasten.
 - S. 31: Schwarzes Brett = drei Zettel nebeneinander (der dritte schief), als `karten` mit selbst gewählten Kurzüberschriften (Werbung / Abreißzettel / Anmeldebogen), im Buch ohne Überschrift; Stecknadel oben.
 - S. 32/33: Mia und Simms: orange Wellen-Symbol = art "anom".
 - S. 33: Pindrop-Bildschirm als Tabelle (Initialen/Punkte), im Buch als Arcade-Bildschirm mit weißer Pixelschrift auf Schwarz.
 - S. 35: drei Notizzettel (schief, handschriftlich) als `handout` art "notiz".
 - S. 37: Seitenfüllendes Bild unten (weiße Kopfhörerkabel).
 - S. 38: Vault-Anforderung Wire Pals: Preis 6 Belobigungen „pro 3er-Set“ (Zusatzfeld preisNote). Anomalie-Fähigkeit mit drei Auswahlpunkten bei „jeder dritten 3“.
 - Reiter-Gliederung entspricht dem Standard; Ermittlungs-Abschnitte je Ort (Caddy Corner, Two Jacks Tavern, Laundrocade, Lost Art = The Station, 227 Ashran Drive). Begegnung: „Kaye und der Keller“ + „Die Anomalie“. Nachspiel enthält keine eigenen „Lose Enden“, nur Ausgänge mit „In Caddy Corner:“.
*/
