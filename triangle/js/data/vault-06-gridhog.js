/* The Vault – GRIDHOG (Buch S. 94–111). Übersetzung aus dem Englischen. */
window.TA_VAULT = window.TA_VAULT || {};
TA_VAULT["gridhog"] = {
 cw: "Körperhorror, Gefangenschaft, Menschenversuche, Autounfälle, extreme Höhen",   // Im Inhaltsverzeichnis (S005/S006) nachtragen, falls dort Inhaltswarnungen stehen
 chaosP: 99,
 chaos: [],   // Der Einsatz hat keine Tabelle „Chaos-Effekte“; stattdessen den Abschnitt „Loops und Chaos“ (S. 98, siehe reiter.vor)
 zieleEinleitung: "Die Anomalie einzufangen hat zwar oberste Priorität, doch die Agency möchte die Gelegenheit außerdem nutzen, Miros’ Ruf in Ternion City zu beschädigen.",
 ziele: [
  {art:"bel", n:3, x:"jedes Mal, wenn du Miros Industries etwas wegnimmst"},
  {art:"bel", n:1, x:"jedes Mal, wenn du die Infrastruktur der Stadt stärkst"},
  {art:"ver", n:1, x:"jedes Mal, wenn du tiefer als 10 Fuß fällst"}
 ],
 reiter: {
  profil: [
   {t:"Fundstück", p:95, b:[
    {t:"handout", art:"schild", h:"GRIDHOG", x:[
     "NÄCHSTE AUSFAHRT",
     "IN 2 MEILEN",
     "43 MINUTEN",
     "NICHT ZU FUSS GEHEN",
     "RUHIG BLEIBEN",
     "VERLASSEN SIE NICHT",
     "IHR FAHRZEUG",
     "2 MEILEN",
     "VERLASSEN SIE NICHT",
     "DIE HOFFNUNG",
     "47 MINUTEN",
     "BITTE",
     "NÄCHSTE",
     "ICH VERSUCHE ES",
     "AUSFAHRT",
     "ICH WERDE IHNEN HELFEN",
     "59 MINUTEN",
     "SIE SIND SO VIELE",
     "NÄCHSTE",
     "ICH WERDE",
     "AUSFAHRT",
     "HILFE"
    ]},
    {t:"bild", seite:94, x:"Titelbild: orangefarbene LED-Anzeige einer Verkehrsleittafel mit dem Titel GRIDHOG"}
   ]},
   {t:"Überblick", p:96, b:[
    {t:"profil",
     lead:"Der berüchtigt verstopfte Victory Circle in Ternion City hat ein neues Verkehrsleitsystem: GRIDHOG, ein Sensorturm samt Begleit-App, der die herkömmlichen Stoppschilder und Ampeln des Viertels ersetzt hat. Von der Öffentlichkeit unbemerkt wird dieses System vollständig von der Anomalie gesteuert, die an einen gefangenen Resonanten namens Andrew Wynn (er/ihm) gebunden ist. Wynn wurde von Miros Industries gefangen genommen, einem multinationalen Tech-Konzern und wirtschaftlichen Rivalen von Triangle Agency, und im GRIDHOG-Turm selbst eingekerkert.",
     fokus:"Miros’ Team hat den Fokus der Anomalie erfolgreich auf „Make Traffic Disappear“ umgelenkt – zugleich der Slogan der Marketingkampagne, mit der Miros diesen neuen Dienst bewirbt. In dieser Kampagne tritt ein cooles Cartoon-Schwein namens GRIDHOG (er/ihm) auf; in animierten Werbespots entwirrt er mit Hilfe seiner großen Schnauze und seiner Hauer verknotete Verkehrsströme.",
     domaene:"Andrews Anomalie übt ihren Einfluss in der Kreuzung rund um den GRIDHOG-Sensorturm aus sowie überall im Umkreis von zehn Fuß um ein Smartphone, auf dem die GRIDHOG-App läuft.",
     impuls:"Seit der Verkehr zum Notfall geworden ist, ist die Herangehensweise der Anomalie an „Make Traffic Disappear“ plump geworden: Sie schickt jeden Pendler, den sie für störend hält, in Loops – private Räume, die hunderte Meter über der Stadt schweben. Zu Beginn des Einsatzes hält GRIDHOG jeden neuen Reisenden, der versucht, in den Verkehrsfluss der Innenstadt einzufahren, für störend."},
    "Die Anomalie von Wynn, die sich ihrer Aufgabe, den morgendlichen Berufsverkehr von Ternion City zu automatisieren, völlig unvorbereitet gegenübersieht, hat zu einer schrecklichen Abkürzung gegriffen: Sie teleportiert problematische Fahrer hunderte Meter hoch in die Luft, in geschlossene „Loops“, wo sie Ternions Straßen nicht mehr verstopfen.",
    {t:"h", x:"Geschichte"},
    "Miros Industries entdeckte unter seinen Angestellten einen Resonanten mit Absence-Kräften, von dem die Agency nichts wusste und der ohne Eingreifen zu einer Anomalie geworden wäre. In der Annahme, dass die endgültige Gestalt der Anomalie von Andrews Geisteszustand zum Zeitpunkt der Verwandlung abhängen würde, sorgte Miros mit experimentellen Therapien dafür, dass der Fokus der Anomalie „Make Traffic Disappear“ werden würde. Als seine Verwandlung weit genug fortgeschritten war, brachten sie Andrew in der GRIDHOG-Haltevorrichtung unter.",
    "Miros-CEO Eric Monaghan (er/ihm) schloss mit Gouverneurin Diana Alvarez (sie/ihr) einen Deal, um das GRIDHOG-Verkehrsmanagement im berüchtigt staugeplagten Geschäftsviertel von Ternion City einzusetzen – trotz öffentlicher Proteste, ein smartphonebasiertes System schließe Leute aus und lade zum Scheitern ein. Da die Gouverneurin die Vorstadtwähler, die am stärksten unter dem Verkehr leiden, für sich gewinnen wollte und Monaghan den wirtschaftlichen Würgegriff von Triangle Agency auf Ternion City herausfordern wollte, kam das Projekt rasch voran.",
    "Mangelhafte Kommunikation und weitverbreitetes Unverständnis darüber, wie man mitmacht, haben den Verkehr in der Gegend deutlich verschlimmert. Die letzten Tage waren ein absoluter Albtraum für Autofahrer: Ohne Ampeln und Schilder werden diejenigen, die die oft kryptischen Anweisungen der App nicht entschlüsseln können, in ein Hasenfußspiel mit zehntausend Teilnehmern gezwungen. Die Anomalie selbst trägt zum Chaos bei: In manchen Fällen wurden Fahrer angewiesen, über Fußwege und durch Gebäudelobbys zu fahren.",
    {t:"h", x:"Erscheinung"},
    "Der GRIDHOG-Sensorturm sieht aus wie ein großer, perlweißer, zigarrenförmiger Turm mit einer aufblühenden Pilzkappe. Seine Kappe ist mattschwarz und mit glänzendem Kunststoff überzogen, sodass der Eindruck einer riesigen Überwachungskamera entsteht. Zahlreiche Kabel und Leitungen verbinden ihn mit einer Reihe von Signalverstärkern und Stützträgern rund um die Kreuzung.",
    "Im Inneren des Turms befindet sich die wahre Gestalt der Anomalie: Andrew Wynn, in Flüssigkeit schwebend, sein Unterkörper in fortgeschrittenen Stadien der anomalen Verwandlung. Fleischbänder spalten sich ab, versteinern und krümmen sich zurück, um sich mit sich selbst zu verbinden – seine gesamte untere Hälfte wird zu einem Knäuel aus Straßen und funkelnden Ampeln.",
    "Sollte die Anomalie Andrews Persönlichkeit vollständig überwältigen, wird sie sein Fleisch umformen und als elegante Gestalt aus Stein und dreifarbigem Licht erscheinen, irgendwo zwischen Engel und Wasserspeier. Sie hat Andrews Gesicht mit der Nase und den Hauern eines Schweins.",
    {t:"h", x:"Aktuelle Lage"},
    "GRIDHOGs erste zwei Tage waren ein Desaster: Der Verkehr in der Innenstadt ist völlig zum Erliegen gekommen. Heute sind etliche wichtige Persönlichkeiten auf dem Weg zu einer Pressekonferenz, die GRIDHOGs Erfolg verkünden sollte, verschwunden. Die Polizei hat neue Autos an der Einfahrt in das gesamte Geschäftsviertel der Innenstadt gehindert, was den Verkehr noch verschlimmert, da die Fahrer auf Nebenstraßen ausweichen. Fahrer verlassen ihre Autos in Scharen und gehen lieber zu Fuß oder nehmen die U-Bahn, um durch die Stadt zu kommen.",
    "Und obwohl gewöhnliche Menschen sie nicht sehen können, wächst die Zahl der Loops, die über der Stadt schweben, stetig weiter und übersät den Himmel mit Dutzenden schwebender Steinkugeln."
   ]}
  ],
  vor: [
   {t:"Morgenbesprechung", p:97, b:[
    {t:"morgen", x:[
     "Ein Agent bekommt einen Anruf auf seinem Smartphone, kann ihn aber erst entgegennehmen, nachdem er die vorgeschriebene GRIDHOG-App der Stadt heruntergeladen hat.",
     "Den Agenten fallen seltsame Gebilde auf, die über der Stadt in der Luft schweben, ihren gewöhnlichen Beziehungen jedoch nicht.",
     "Ein streikender Arbeiter auf einer Streikpostenlinie, der sich mit seinem Smartphone filmt, verschwindet plötzlich.",
     "Eine verwirrte Pendlerin unterbricht die Morgenroutine eines Agenten, weil die GRIDHOG-App sie angewiesen hat, auf dem Weg zur Arbeit durch die Wohnung des Agenten zu gehen."
    ]}
   ]},
   {t:"Einsatzbesprechung", p:98, b:[
    {t:"vorlesen", b:[
     "In der Innenstadt, in und um den Victory Circle, wurde ein starker Anstieg anomaler Aktivität festgestellt. Dasselbe Viertel steht im Zentrum der anhaltenden Verkehrskrise, die sich mit der Installation von GRIDHOG, dem appbasierten Verkehrsmanagementsystem des wirtschaftlichen Konkurrenten der Agency, Miros Industries, dramatisch verschärft hat. Die Agency wurde außerdem auf die Existenz riesiger, mysteriöser Kugeln aufmerksam gemacht, die über der Skyline von Ternion City schweben.",
     "Die Agency vermutet, dass entweder die kollektive Frustration der Fahrer oder die aufwendige Marketingkampagne rund um Miros’ neue App genug Aufmerksamkeit angesammelt hat, um eine Anomalie zu erschaffen, und dass diese Anomalie sowohl für den Verkehr als auch für diese riesigen schwebenden Kugeln verantwortlich ist.",
     "Die Agenten müssen die Quelle der anomalen Aktivität und die Natur dieser Kugeln ermitteln und dabei verhindern, dass die Panik die Stadt weiter erfasst. Katastrophenschutzeinheiten versammeln sich in der Nähe einer Pressekonferenz der Verkehrsbehörde, die in Kürze unmittelbar außerhalb des Victory Circle stattfinden soll. Die Agency empfiehlt den Agenten, dort anzufangen.",
     "Zur Unterstützung beim Einfangen der Anomalie erhalten die Agenten außerdem eine kostenlose Spezial-Anforderung: **The Highway**, die nach Abschluss dieses Einsatzes zurückzugeben ist."
    ]},
    {t:"kasten", h:"Spezial-Anforderung: The Highway", b:[
     "Dieses einzigartige Werkzeug sieht aus wie ein großes Lenkrad eines modernen Autos. Um es zu aktivieren, muss ein Agent den vollständigen Namen eines Ziels sagen, das sich im Umkreis von einer Meile oder einem Kilometer befindet (je nachdem, welche Einheit das nächste Tempolimit-Schild verwendet), und dann die Hupe des Lenkrads betätigen. Es funktioniert nur, wenn der Benutzer einen gültigen Führerschein für das Gebiet besitzt, in dem er sich befindet.",
     "Bei Aktivierung rollt sich von der Benutzerin bis zum Ziel in perfekt gerader Linie ein schmaler begehbarer Straßenabschnitt aus. Er führt mitten durch alles hindurch, was ihm im Weg steht, ohne es zu zerstören. Liegt das Ziel auf deutlich anderer Höhe, windet sich die Straße, um eine angenehme Steigung zu bilden. Hinter dem letzten Mitglied einer Gruppe, die auf ihr entlanggeht, zerfällt sie zu nichts.",
     "The Highway hat fünf Ladungen, bevor es inaktiv wird; Agenten können eine Ladung wieder auffüllen, indem sie pro Agent eine Qualitätssicherung investieren, in beliebiger Kombination von Qualitäten und beliebiger Kombination von Agenten."
    ]}
   ]},
   {t:"Loops und Chaos", p:99, b:[
    "Die großen Steinkugeln, die über der Stadt schweben, heißen Loops, und sie sind von unten nur für diejenigen sichtbar, die direkt anomaler Resonanz ausgesetzt waren. Diese Anomalie schickt Agenten und Menschen, die Verkehr verursachen, mit einer stark ausgeprägten, physischen Version des Effekts Versetzen in Loops.",
    "Innerhalb dieser Loops sind Pendler von anomaler Energie umgeben, die sie davon ablenken will, jemals wieder in den Verkehrsstrom zurückzukehren. Werden mehrere Menschen gemeinsam in einen Loop geschickt, prägt sich der Loop auf die erste Person ein, die dorthin geschickt wurde. Er reagiert in Echtzeit auf ihre Gedanken und versucht, das zu erfüllen, was er als den Fokus dieser Person versteht.",
    "Da sich die Bedürfnisse gewöhnlicher Köpfe öfter ändern als die von Anomalien, folgen Loops einer Traumlogik: Die Tür eines normalen Vorstadthauses kann zum Beispiel direkt in einen Konzertsaal führen.",
    "Das ursprüngliche Ziel wird durch einen laufbandartigen Effekt in der Mitte der Kugel gehalten. Jeder, der in einem Loop gefangen ist und nicht dessen ursprüngliches Ziel ist, bleibt unbeeinträchtigt und kann sich frei bewegen und in jeder Richtung etwa 30 Meter von der Mitte entfernt den Rand des Loops finden. An dieser Stelle trifft der „Boden“ des Loops auf die senkrechte „Wand“ der Kugel.",
    "**Wenn das Ziel des Loops aufgebracht wird,** kann sich die Umgebung erheben, um alles zu bedrohen oder anzugreifen, was es aufbringt. Wird der Bewohner des Loops dazu angeleitet, diesen Effekt zu verstehen, oder kennt er sich mit Anomalien aus, kann er Chaos ausgeben, um den Loop wie in einem Klartraum zu kontrollieren, mit Verderben, Verzerren oder Manifestieren.",
    "**Jedes Mal, wenn Agenten einen Loop betreten,** werden zehn Chaos zum Chaos-Pool hinzugefügt, die nur innerhalb dieses Loops verwendet werden können.",
    "**Wenn das gesamte Chaos innerhalb eines Loops jemals auf null fällt,** wird dieser Loop instabil, fällt auseinander und stürzt zur Erde hinab.",
    {t:"kasten", h:"Miros vs. Agency", b:[
     "Miros Industries ist ein relativer Neuankömmling in Ternion City. Nach explosivem Wachstum in den Bereichen Automatisierung, appbasierte Gig-Arbeit und Elektrofahrzeuge ist es vor Kurzem nach Ternion City umgezogen, um näher an der Macht und dem Prestige seiner etablierteren Konzernkollegen zu sein. Miros’ Konzernzentrale residiert nun im ikonischen Fedgely Tower, der Ternions Skyline dominiert.",
     "Miros’ Gründerin, Christina Miros (sie/ihr), fand ein tragisches Ende, nachdem Experimente mit anomalem Material zu einem dramatischen und vorhersehbaren Tod geführt hatten, der der Öffentlichkeit als „Rückzug aus dem Privatleben, um sich auf ihre Philanthropie zu konzentrieren“ erklärt wurde. Nun scheint es, dass ihr Nachfolger Eric Monaghan die Wahrheit über Anomalien erfahren hat und dasselbe Schicksal heraufbeschwört.",
     "Obwohl Miros intern eher als Ärgernis denn als Bedrohung gilt, hat es sich dennoch als fähig erwiesen, Ärger zu verursachen. Wir erwarten von den Agenten, dass sie Miros’ Bemühungen überall durchkreuzen."
    ]},
    {t:"h", x:"GRIDHOG"},
    "Die Haltevorrichtung in GRIDHOG ist mit Material ausgekleidet, das Miros Industries aus einem gestohlenen Normalen Aktenkoffer nachgebaut hat. Sie verhindert, dass Andrews anomale Kraft dem Käfig entkommt, außer über die GRIDHOG-App oder die rund um die Kreuzung angeordneten Sensortürme.",
    "Die Ripple Gun und andere anomale Fähigkeiten können GRIDHOG nicht durchdringen. Konventionelle Gewalt kann es.",
    "Agenten mit einem Smartphone, auf dem die GRIDHOG-App installiert ist, können Anomalie-Fähigkeiten auf Andrew einsetzen, indem sie die App-Oberfläche anvisieren – und umgekehrt."
   ]}
  ],
  erm: [
   {t:"Geschäftsviertel", p:100, b:[
    "Die Agenten werden sich wahrscheinlich dazu getrieben fühlen, ins Zentrum des Verkehrs in der Innenstadt vorzustoßen. Auf dem Weg dorthin gibt es einige Orte, auf die sie treffen können.",
    "Das glitzernde Geschäftsviertel beherbergt glänzende Reihen von Bürogebäuden und die Fast-Casual-Lokale, die sie versorgen. Dazwischen finden sich außerdem verschiedene Touristenattraktionen und öffentlich ausgestellte Kunstwerke. Alles ist im Gewirr der neuen GRIDHOG-Sensortürme verfangen.",
    {t:"sp", x:[
     [
      {t:"h3", x:"Polizeiabsperrung"},
      "Es gibt eine hastig errichtete Polizeiabsperrung, die den Zugang zum Zentrum des Geschäftsviertels und von dort heraus blockiert. Niemand versteht so recht, was vor sich geht, oder auch nur, auf wen man wütend sein soll. Donna Massoni (sie/ihr), Journalistin bei Channel Three News, bombardiert nervöse Polizisten und wütende Pendler gleichermaßen mit Fragen. Sie arbeitet allein; sie filmt sich selbst mit einer Kameradrohne mit Gesichtserkennung.",
      "Wenn die Agenten bei einem früheren Einsatz große Lose Enden hinterlassen haben oder verdächtig aufgefallen sind, wird sie auch bohrende, gezielte Fragen zu ihrer Geschichte und zur Agency selbst stellen.",
      {t:"hinweis", art:"gew", h:"Agenten können Folgendes erfahren, indem sie ein paar von Donnas Fragen beantworten:", x:[
       "Der gesamte Konvoi der Gouverneurin ist verschwunden, einschließlich Gouverneurin Diana Alvarez und Vizegouverneur Aaron Lee (er/ihm), was zu einer möglichen Nachfolgekrise führt.",
       "Miros-CEO Eric Monaghan wurde seit Beginn des Verkehrsalbtraums nicht mehr gesehen. Gerüchten zufolge ist er nach dem desaströsen Start von GRIDHOG untergetaucht."
      ]}
     ],
     [
      {t:"h3", x:"Pressekonferenz"},
      "Diese Pressekonferenz, die für die Gouverneurin angesetzt wurde, um den Erfolg von GRIDHOG zu feiern, ist nun ein Katastrophenschutzgebiet. Als die Agenten eintreffen, hat niemand das Podium betreten; die Bürgermeisterin von Ternion City, Regina Smythe-Callum (sie/ihr), und Miros’ VP of Public Relations Monica deWitt (sie/ihr) streiten hinter der Bühne darüber, welche Geschichte der Presse erzählt werden soll:",
      "Bürgermeisterin Smythe-Callum findet, es sei an der Zeit, den Notstand auszurufen und das GRIDHOG-Programm sofort auszusetzen, notfalls durch gewaltsame Deinstallation.",
      "Monica kennt die wahre Natur von GRIDHOG und der Anomalie darin nicht, versteht aber genug, um zu wissen, dass unerwartete Störungen – insbesondere eine militärische Reaktion – GRIDHOG aufbringen und unerwartete Folgen haben könnten. Sie plädiert dafür, Miros’ Team mehr Zeit zu geben, um herauszufinden, wie man die Lage beheben kann."
     ]
    ]},
    {t:"sp", x:[
     [
      {t:"h3", x:"Hinter der Bühne"},
      "Ebenfalls hinter der Bühne anwesend ist Cameron Ortenzo (er/ihm), Executive Assistant von Eric Monaghan. Er hält in einer Hand ein firmeneigenes Miros-Tablet und tippt mit der anderen auf einem Laptop.",
      "Cameron nimmt die Rivalität zwischen Miros und der Agency sehr ernst und behandelt jeden, der mit Triangle Agency in Verbindung steht, mit offener Feindseligkeit.",
      "**Wenn er die wahre Zugehörigkeit der Agenten erfährt,** unterbricht er jedes Gespräch, um jedes in der Nähe befindliche Miros-Sicherheitspersonal anzuweisen, die Agenten so weit wie möglich wegzubegleiten.",
      {t:"hinweis", art:"anom", h:"Agenten können Folgendes erfahren, indem sie Camerons Geräte stehlen oder anomale Methoden einsetzen:", x:[
       "Miros, oder zumindest Cameron, weiß von Anomalien – das Tablet zeigt einen Kamera-Feed der Kreuzung, der den Effekt Anomalie-Verfolgung des Growth-Zugs Augen nachahmt.",
       "Mit dieser Ansicht können die Agenten die Umrisse von Andrew in GRIDHOG erkennen, sein Körper bereits mitten in der Metamorphose.",
       "Miros hat versucht, GRIDHOG mit einem gewöhnlichen „Notausschalter“ zu neutralisieren, was nicht funktioniert hat – sie sind überzeugt, dass die Anomalie ein lebendes Wesen war, es aber nicht mehr ist.",
       "Ein Qualitätskontrollteam, das GRIDHOG „manuell deaktivieren“ sollte, ist verschwunden."
      ]}
     ],
     [
      {t:"h3", x:"Victory Circle"},
      "Agenten, die an der Polizeiabsperrung vorbeischlüpfen, können sich der zentralen Kreuzung des Victory Circle zu Fuß nähern. Wenn sie das Geschäftsviertel in Richtung Victory Circle durch schmale, sich häufig kreuzende Straßen durchqueren, sehen sie, dass die Stadt alle Ampeln und Schilder entfernt und durch Sensortürme und Signalverstärker für GRIDHOG ersetzt hat.",
      "**Wenn bei Agenten die GRIDHOG-App auf dem Telefon installiert ist,** wenn sie in den eigentlichen Victory Circle gelangen, werden sie und alle, die mit ihnen reisen, von der Anomalie in einen Loop versetzt.",
      "**Wenn bei keinem Agenten die App installiert ist** oder sie ihre Smartphones zurücklassen, wartet die Anomalie, bis sie jemandem in einem Auto nahekommen, bei dem das der Fall ist, und schickt sie zusammen mit diesem Auto in einen Loop.",
      "**Andernfalls** schickt die Anomalie die Agenten sofort in einen Loop, wenn sie sich physisch nah genug befinden, dass sie ihre Anwesenheit wahrnehmen kann."
     ]
    ]}
   ]},
   {t:"Diana Alvarez’ Loop", p:102, b:[
    "Gouverneurin Alvarez’ Loop hat die Form eines unscheinbar wirkenden Hausboots (namens Sea Caucus) und des umliegenden Jachthafens im wohlhabenden Stadtbezirk Ashford von Ternion City. Ob mit The Highway oder von GRIDHOG geschickt: Die Agenten kommen in diesem Loop am Ende des Stegs an, an dem das Boot liegt.",
    {t:"h", x:"Steg"},
    "Dieser Privatpier dient als Anlegestelle für einige der wohlhabendsten und mächtigsten Bewohner Ternions. Wenn die Agenten eintreffen, sind als einzige Personen drei Mitglieder des Gefolges der Gouverneurin zu sehen, die dastehen und streiten.",
    "Lieutenant Brad Kremmer (er/ihm) ist zum nächsten Polizeirevier aufgebrochen, um Verstärkung zu holen und herauszufinden, warum ihre Funkgeräte nicht mehr funktionieren. In ein paar Minuten wird er atemlos zurückkehren, nachdem er ein paar Straßenzüge entfernt auf den Rand des Loops gestoßen ist. Wenn man ihn seinen Bericht abliefern lässt, macht er die ganze Gruppe zu Losen Enden.",
    "Pressesprecher Mitch Rhodes (er/ihm) will keine Aufzeichnung dieses Besuchs. Er versucht, seine Begleiter ruhig und diskret zu halten, und scheitert dabei.",
    "Vizegouverneur Aaron Lee (er/ihm) will meutern, die Gouverneurin ausbooten und direkt in das Verkehrsproblem eingreifen. Er ist überzeugt, dass Miros-CEO Eric Monaghan den Verkehr absichtlich verursacht hat, und will ihn aufspüren und bedrohen, um ihn zu stoppen.",
    "Polizistin Karen Mason (sie/dey) hindert Vizegouverneur Lee daran, das Boot zu betreten. Sie will, dass alle an Ort und Stelle bleiben, bis Lieutenant Brad Kremmer mit weiteren Informationen und Verstärkung zurückgekehrt ist.",
    "**Wenn die Agenten nach dem Verbleib der Gouverneurin fragen,** übernimmt Mitch die Gesprächsführung und weicht der Frage aus, indem er den Agenten mitteilt, der Terminkalender der Gouverneurin sei online einsehbar (ist er nicht).",
    "**Wenn die Agenten das Gefolge davon überzeugen, dass sie bei Gouverneurin Alvarez etwas zu erledigen haben,** betätigt Mitch eine Türklingel am Steg, und Diana empfängt die Agenten an Deck des Bootes. Wenn sie entscheidet, dass sie es wert sind, mit ihnen zu sprechen, lädt sie sie nach drinnen ein.",
    {t:"hinweis", art:"gew", h:"Agenten können Folgendes erfahren, trotz Mitch Rhodes’ besten Bemühungen:", x:[
     "Gouverneurin Alvarez und Miros haben eine Geschichte privater Deals und Gegengeschäfte.",
     "Die Gouverneurin telefoniert mit ihrem GRIDHOG-Notfallkontakt, und das schon seit geraumer Zeit.",
     "Lieutenant Brad Kremmer ist zum nächsten Polizeirevier aufgebrochen, um Verstärkung zu holen und herauszufinden, warum ihre Funkgeräte nicht mehr funktionieren. In ein paar Minuten wird er atemlos zurückkehren, nachdem er ein paar Straßenzüge entfernt auf den Rand des Loops gestoßen ist. Er macht die ganze Gruppe zu Losen Enden."
    ]},
    {t:"h", x:"Sea Caucus"},
    "Das gedeckte Äußere des Hausboots täuscht über seine reiche und kunstvoll gearbeitete Einrichtung hinweg. Große getönte Fenster bieten Rundumblick aufs Wasser, während eine Hartholzbar nahe dem Heck einer Reihe schicker, bequem aussehender Sessel gegenüber aufragt.",
    "**Wenn die Agenten ohne Einladung eintreten,** brüllt sie in ihr Telefon:",
    "*„Warum funktioniert das Sicherheitswort nicht? Andrew Brent Andrew Brent Andrew Brent! NICHTS!“*",
    "In ihrer Aufregung hat sie sich Andrew Wynns Namen falsch gemerkt. The Highway tut nichts, wenn „Andrew Brent“ als Ziel angegeben wird. Am anderen Ende ihres Anrufs ist niemand, aber wenn die Agenten nachsehen, können sie erkennen, dass sie versucht hat, Indira Roy zu erreichen.",
    {t:"h", x:"Diana Alvarez ansprechen"},
    "Wenn die Agenten sie überraschen, gibt sie unwissentlich Chaos aus, um pro Agent eine einsperrende Kleine Anomalie zu manifestieren. Diese Kleinen Anomalien nehmen die Gestalt von animierten Seilen, Stromkabeln, ausziehbaren Sofas und anderen Gegenständen in der Nähe an. Sie bemerkt nur dann, dass das ungewöhnlich ist, wenn man sie darauf hinweist.",
    "Wenn ein offener Konflikt ausbricht, stürmt das Gefolge von draußen herein, um die Gouverneurin zu schützen. Polizistin Karen versucht, die Agenten festzuhalten, und eröffnet das Feuer, wenn sie vermutet, dass die Gouverneurin in unmittelbarer Gefahr ist. Mitch und Aaron folgen, aus Angst, draußen allein gelassen zu werden, ziehen sich aber zurück, wenn sie Gewalt sehen.",
    "Diana will die Verkehrskrise so schnell wie möglich beenden. Sie wird eifrig mit den Agenten zusammenarbeiten, verlangt aber, bevor sie Informationen preisgibt, die ihrer Karriere schaden könnten, dass jeder Agent ihr Schmutziges über sich selbst oder die Agency liefert.",
    "**Diana akzeptiert nur die folgenden Informationen als Pfand:**",
    {t:"liste", x:[
     "Das Geständnis eines Verbrechens",
     "Die Offenlegung illegaler oder unmoralischer Aktivitäten, an denen die Agency beteiligt ist",
     "Alle Informationen, die den Agenten diskreditieren könnten",
     "Alle Informationen, die einen ihrer politischen Rivalen diskreditieren könnten, darunter Vizegouverneur Aaron Lee."
    ]},
    {t:"hinweis", art:"anom", h:"Agenten können diese Informationen erfahren, indem sie Diana gegenüber gestehen oder anomale Methoden einsetzen:", x:[
     "Diana hat keine Ahnung, dass übernatürliche Aktivitäten im Gange sind. Sie hält das ganze Problem für ein desaströses Technikproblem – und gibt den Forschern des GRIDHOG-Projekts die Schuld, insbesondere Indira Roy, statt Eric Monaghan.",
     "Das „Sicherheitswort“ soll GRIDHOG deaktivieren. Sie erkennt, dass es ein Name ist, hat aber keine Ahnung, wessen.",
     "Alle letzten Anrufe auf Dianas Telefon gingen an „Eric Monaghan“ und „Indira Roy“.",
     "Die Installation von GRIDHOG war der Höhepunkt einer Absprache unter der Hand: Miros stellt der Stadt eine kostenlose und wirksame Verkehrslösung bereit, und im Gegenzug teilt der Staat Baupläne, Baugenehmigungen und Gehaltsinformationen von Triangle Agency mit Miros. Diana war überrascht, von Triangle Agency zu erfahren, und die Dokumente wurden nur gefunden, weil Miros wusste, wo man suchen muss.",
     "Ein früherer Deal im Rahmen dieser Absprache beinhaltete die Übergabe eines Normalen Aktenkoffers aus einem staatlichen Asservatenraum an Miros. Die Strafverfolgungsbehörden des Staates hatten den Aktenkoffer zufällig nach einem gescheiterten Einsatz von Triangle Agency erlangt."
    ]}
   ]},
   {t:"Eric Monaghan’s Loop", p:104, b:[
    "Erics Loop hat die Form seines Penthouse-Büros in der Miros-Zentrale im One Victory Plaza in der Innenstadt von Ternion City. The Highway setzt die Agenten direkt im Wartezimmer vor seinem Privatbüro ab.",
    {t:"sp", x:[
     [
      {t:"h3", x:"Wartezimmer"},
      "Gerahmte Titelseiten von Wirtschaftsmagazinen säumen die Wände des Wartezimmers: Dutzende davon zeigen eine schief lächelnde Christina Miros (sie/ihr), die Gründerin von Miros Industries. Nur eine davon, ganz aktuell, zeigt Eric mit der Schlagzeile *„ERIC MONAGHAN: GROSSE FÜSSE FÜR GROSSE SCHUHE BEI MIROS!“*",
      "An einem Schreibtisch neben Erics Tür sitzt Secretary (dey/dem), ein gesichtsloser, ordentlich gekleideter Diener, der aufmerksam auf den Schreibtisch starrt, bis Eric nach dey ruft oder die Agenten dey etwas fragen.",
      "In seinem Büro ist Eric damit beschäftigt, die im Fernsehen übertragene Erklärung vorzubereiten, die er bei der Pressekonferenz abgeben will. Die Agenten können mithören:",
      "*„Nach heute können wir sagen: Verkehr ist eine Entscheidung. Mit GRIDHOG, installiert in jeder größeren Stadt der Welt, können wir den Verkehr verschwinden lassen – Make Traffic Disappear.“*",
      "Nachdem er seinen Satz zu Ende geprobt hat, verlangt er von Secretary Neuigkeiten.",
      "**Wenn die Agenten Secretary nicht verärgert oder das Büro nicht verwüstet haben,** meldet Secretary Eric, dass Besucher da sind; Eric lädt sie neugierig herein.",
      "**Wenn die Agenten bereits Ärger gemacht haben,** drückt Secretary einen Alarmknopf, damit Eric den „Normalen Aktenkoffer“ bereithält."
     ],
     [
      {t:"h3", x:"Penthouse-Büro"},
      "Erics Büro überblickt den Victory Circle und den GRIDHOG Tower. Agenten, die durch die fest verschlossenen Fenster spähen, sehen, dass der gesamte Platz mit Plakaten, Werbetafeln und digitalen Anzeigen zum großen Start zugekleistert wurde. Sie zeigen ein Cartoon-Warzenschwein mit Sonnenbrille, das aus dem Fenster eines rasenden Autos den Daumen hochhält, daneben das Logo in großer Schrift: „GRIDHOG: Make Traffic Disappear!“ Auf seinem Schreibtisch liegt der Ausdruck eines Artikelentwurfs mit dem Titel „Leiterin des Captive Passenger Project erhält Nobelpreis, teilt ihn mit visionärem CEO Eric Monaghan“, dicht mit handschriftlichen Notizen von Eric versehen.",
      "Eric nimmt an, dass die Agenten Mitglieder des Forschungsteams seiner Kollegin Indira Roy (sie/ihr) sind, die gekommen sind, um am Moment des gemeinsamen Sieges teilzuhaben. Es überrascht ihn nicht, dass sie nicht mit ihnen da ist:",
      "*„Indy ist nicht bei Ihnen? Sie will nicht mal ein Stück vom Ruhm? Ich werde euch MINT-Typen nie verstehen. Ihr verbringt eure ganze Zeit damit, die Welt zu studieren, und begreift nie, wie sie funktioniert.“*"
     ]
    ]},
    {t:"h", x:"Ein Toast"},
    "Eric ist nicht in Fragelaune: Wenn die Agenten ihm keinen Grund geben, zu vermuten, dass sie nicht zu Indiras Forschungsteam gehören, lädt er sie zu einem Champagner-Toast ein. Er beginnt: „Ein Toast auf meinen bisher größten Sieg!“ und blickt dann erwartungsvoll zu Secretary, das das erste Beispiel liefert:",
    "*„Auf Eric, einen Disruptor unter Disruptoren!“*",
    "Dann blicken beide zum nächsten Agenten im Kreis. Jeder Agent muss einen Toast ausbringen, und Eric wird gereizt, wenn der Toast eines Agenten weniger schmeichelhaft ist als der vorherige.",
    "**Wenn er am Ende der Toasts unzufrieden ist,** wird er ihnen gegenüber misstrauisch und vermutet, dass sie gekommen sind, um ihn zu sabotieren oder auszuspionieren. Er wird sie wegschicken und den Chaos-Effekt Manifestieren einsetzen, um einen Sicherheitsbeamten herbeizuzaubern, der alle unkooperativen Agenten aus seinem Büro begleitet.",
    {t:"h", x:"„Normaler Aktenkoffer“"},
    "**Wenn er erfährt, dass die Agenten von der Agency sind,** greift er sie mit einem herbeigezauberten Normalen Aktenkoffer an! Er führt ihn defensiv und droht, ihn zu öffnen und die Agenten einzusperren, wenn sie ihm zu nahe kommen. Da er jedoch eine Herbeizauberung des Loops ist, verhält er sich nicht so, wie sich ein Normaler Aktenkoffer normalerweise verhalten würde – er funktioniert so, wie Eric es glaubt. Öffnet er ihn, schießen lange, schlampige Tentakel aus dem Inneren hervor, um nach seinem Ziel zu greifen und es mit übermenschlicher Kraft hineinzuzwingen. Ist genug Chaos vorhanden, lässt sich das mit dem Chaos-Effekt Überwältigen darstellen. Andernfalls richtet er 3 Schaden an.",
    "**Wenn er von den Agenten besiegt wird,** erzählt er ihnen alles, was sie fragen, im Austausch für ihre Gnade. Er kennt jedoch keine konkreten Einzelheiten zu Indiras Arbeit im Captive Passenger Program. Dafür müssten sie, so beharrt er, mit ihr sprechen.",
    {t:"hinweis", art:"anom", h:"Agenten können Folgendes erfahren, nachdem sie die Begegnung mit dem falschen Aktenkoffer überlebt haben:", x:[
     "Indira Roy ist eine von Erics Angestellten und einer Initiative zugeteilt, die als Captive Passenger Project bekannt ist. Eric weiß wenig über dieses Projekt, versteht aber, dass es mit „den Geistergeschichten, von denen Christina besessen war“ zusammenhängt, und hält es aus diesem Grund für lebenswichtig.",
     "Als Indira ihre ersten Erkenntnisse zum Captive Passenger Project berichtete, wusste Eric, dass es der Retter seines kriselnden GRIDHOG-Projekts sein würde, und bestand darauf, dass Indira sich auf den Slogan „Make Traffic Disappear“ ausrichtet. Indira versuchte, es zu verhindern, wurde aber vor die Wahl gestellt, ersetzt zu werden und Andrew in Ruhe zu lassen oder Erics Plan zu folgen."
    ]}
   ]},
   {t:"Indira Roy’s Loop", p:106, b:[
    "Indiras Loop hat die Form eines endlosen Flurs in einem sanft beleuchteten amerikanischen Vorstadthaus der Mittelschicht, gesäumt von geschlossenen Türen. The Highway oder GRIDHOG setzt die Agenten neben Indira ab, während sie den Flur entlanggeht.",
    {t:"h", x:"Indiras Gedächtnispalast"},
    "Dieser Flur ist eine lebendige Manifestation von Indiras Gedächtnispalast: Jeder Raum in diesem Abschnitt enthält eine ihrer Erinnerungen an ihre Zeit bei der Arbeit am GRIDHOG-Projekt und mit Andrew. Abgesehen von den Hauptakteuren einer Erinnerung sind die Details unscharf, die räumliche Anordnung ist chaotisch. Beim Hineinspähen in jeden Raum entsteht deutlich der Eindruck, Schauspielern in einem Blackbox-Theater zuzusehen.",
    "Jedes Mal, wenn sie in eine Tür späht, um eine Erinnerung zu überprüfen, setzt sie unbewusst Verderben ein, um eine Szene zu erzeugen, die die gesuchte Erinnerung darstellt.",
    "Ihr ist bewusst, dass sie sich in einer paranormalen Situation befindet, und sie späht systematisch in das Beobachtungsfenster jeder Tür und notiert auf ihrem Klemmbrett, was sie sieht, während sie nach Hinweisen sucht, die zu ihrer Flucht führen könnten. Bislang hat sie nichts Nützliches gefunden.",
    "Sie betrachtet die Ankunft der Agenten als wichtige neue Variable:",
    "*„Interessant! Ich erkenne euch nicht, und ich habe euch nicht herbeigewünscht, also müsst ihr echt sein. Wisst ihr noch, wie ihr hierhergekommen seid? Wisst ihr irgendetwas darüber, was ‚hier‘ ist? Erzählt mir alles.“*",
    "**Wenn die Agenten Indira angreifen oder verletzen,** springt eine herbeigezauberte Version von Andrew zu ihrer Verteidigung herbei, als Absence-Anomalie mit dem Fokus „Protect Indira“. Sie erscheint aus dem Nichts und kann mit gleicher Leichtigkeit durch Wände, Gegenstände und Menschen hindurchgreifen. Sie behandelt diesen Loop als ihre Domäne.",
    {t:"hinweis", art:"gew", h:"Agenten können Folgendes erfahren, indem sie durch Indiras Gedächtnispalast blicken:", x:[
     "Indira ist die Gründerin und Leiterin der Forschung des Captive Passenger Project, einer Abteilung, für die sie persönlich von Eric angeworben wurde.",
     "Ihr Interesse an Anomalien (sie nennt sie „Passagiere“) begann, als sie als Teenager eine eigene übernatürliche Begegnung hatte – sie sah ihre beste Freundin mit ihrem Verstand ein Feuer entzünden. Kurz darauf wurde diese Freundin von Leuten in Anzügen in ein „privates Internat“ gebracht. Sie hat sie nie wiedergefunden.",
     "Die Anomalie ist ein Mann namens Andrew Wynn (nicht Brent), früher Systemanalytiker bei Miros.",
     "Andrew ist ein Resonanter, der an eine Absence-Anomalie gebunden ist. In ihren Worten wurde er mit einem übernatürlichen Wesen namens „Passagier“ „infiziert“, das ihm unglaubliche Kräfte verleiht, wie durch Wände zu gehen und unglaubliche Entfernungen im Nu zurückzulegen.",
     "Andrews „Passagier“ schien ihn bei lebendigem Leib aufzufressen und um die Kontrolle über seine Persönlichkeit zu kämpfen.",
     "Als der Passagier stärker wurde, beobachteten Indira und ihr Team, dass seine Kräfte mit dem zusammenzuhängen schienen, worauf Andrew sich am intensivsten konzentrierte. Daraus folgerten sie, dass sich die endgültige Gestalt des Passagiers beeinflussen ließe, indem man Andrew dazu bringt, sich auf eine bestimmte Botschaft, ein Ideal oder ein Ergebnis zu konzentrieren.",
     "Als Indira Eric davon berichtete, wurde er aufgeregt über die Möglichkeit, dass Andrews Kräfte sein kriselndes GRIDHOG-Projekt retten könnten, und bestand darauf, dass Indira versucht, Andrew auf dessen Slogan „Make Traffic Disappear“ zu prägen. Indira versuchte, es zu verhindern, wurde aber vor die Wahl gestellt, ersetzt zu werden und Andrew in Ruhe zu lassen oder Erics Plan zu folgen.",
     "Die GRIDHOG-Vorrichtung, in der Andrew untergebracht ist, wurde durch Nachbau eines gestohlenen Normalen Aktenkoffers gefertigt, in dessen Besitz Miros gelangt war."
    ]}
   ]},
   {t:"Der Loop der Agenten", p:107, b:[
    "Wenn die Agenten von GRIDHOG in ihren eigenen Loop geschickt werden, nimmt der Loop eine Form an, die für einen dieser Agenten spezifisch ist. Wähle zufällig einen aus, der das Ziel des Loops ist. **Wenn der gewählte Agent eine bemerkenswerte andauernde Beschäftigung oder ungelöste Spannung hat,** spiegelt sein Loop diese Spannung direkt wider. Andernfalls nimmt sein Loop eine andere Form an, abhängig vom aktuellen Stand seiner Work-Life-Balance.",
    {t:"karten", x:[
     {h:"Anomalie", b:["Wenn der Agent die meiste Zeit in seiner Anomalie verbracht hat, kann der Loop die Form des Ortes annehmen, an dem er seiner persönlichen Anomalie begegnet ist, des Ortes, an dem er seine Kräfte übt, oder des Schauplatzes der am meisten bereuten Folge der Nutzung seiner Anomalie. Diese Interaktion kann zeigen, was die von diesem Agenten zurückgelassene Anomalie sein könnte oder was der Agent fürchtet, dass seine Anomalie werden könnte."]},
     {h:"Realität", b:["Wenn der Agent die meiste Zeit in seiner Realität verbracht hat, erscheint der Loop als der Ort, den der Agent am stärksten mit seiner Beziehung mit der höchsten Verbindung assoziiert. Diese Beziehung ist in Gefahr. Der Loop setzt den Chaos-Effekt Verdreifachen ein, um drei Kleine Anomalien zu manifestieren, die die herbeigezauberte Version der Beziehung des Agenten angreifen. Diese Kleinen Anomalien sind um den Stress des Agenten in Bezug auf diese Beziehung herum aufgebaut."]},
     {h:"Kompetenz", b:["Wenn der Agent die meiste Zeit in seiner Kompetenz verbracht hat, erscheint der Loop als das Büro seines GM, und er ist zu einer Halbquartalsbewertung (Mid-Quarter Evaluation) erschienen. Der herbeigezauberte GM nimmt ihn und sein Team wegen aller Fehler ins Gebet, die sie bei früheren Einsätzen gemacht haben – auch bei jenen, bei denen der echte GM nicht anwesend war. Er setzt den Chaos-Effekt Verderben ein, um belastende Beweise für das kündigungswürdige Verhalten des Agenten zu erzeugen."]}
    ]},
    "Welche Form der Loop auch annimmt: Die Agenten sollten nicht auf ihre Möglichkeit hingewiesen werden, im Loop Chaos auszugeben, bis sie aktiv versuchen, es zu tun.",
    "**Agenten, die in einem Loop gefangen sind, haben einige Möglichkeiten zur Flucht:**",
    {t:"liste", x:[
     "The Highway benutzen, falls sie es besitzen,",
     "Ich kenne eine Abkürzung! oder andere anomaliegetriebene Fortbewegungsmittel,",
     "Die letzten der 10 Chaos benutzen, die bei ihrer Ankunft zum Chaos-Pool hinzugefügt wurden (siehe „Loops und Chaos“ {S.99} für mehr)"
    ]},
    {t:"kasten", h:"Loops anderer Figuren", b:[
     "Im Laufe der Vorbereitung oder des Spiels kann es nützlich sein, einen Loop für eine Figur vorzubereiten, die eine Geschichte mit deinen Agenten hat. Vielleicht erwischt ein tollpatschiger Nachbar eine Pechsträhne und landet eine Meile hoch am Himmel, oder die Schülerdetektive, die einem der Agenten gefolgt sind, folgen ihm in einen eigenen Loop. Vielleicht sind die Agenten neugierig auf das Schicksal des Miros-Qualitätskontrolltrupps."
    ]},
    "Wenn du diese Loops vorbereitest, bedenke, dass Andrew die Loops als Mittel einsetzt, um Menschen aus dem Verkehrsfluss herauszuhalten. Die winzigen Welten innerhalb von Loops verhalten sich mit diesem Zweck im Sinn: Sie dienen dazu, Reisende von ihrer Reise abzulenken, sie davon zu überzeugen, dass sie an ihrem Ziel angekommen sind, oder sie davon abzubringen, überhaupt erst wieder abzufahren. Und wenn das Ziel eines Loops besonders mit etwas beschäftigt ist oder erwartet, dass etwas geschieht, ist es wahrscheinlich, dass der Loop diese Erwartung füttert und sich von ihr nährt."
   ]}
  ],
  beg: [
   {t:"Gridhog Tower", p:108, b:[
    "Agenten können die Domäne der Anomalie auf mehrere Arten betreten, etwa mit The Highway (Ziel: Andrew Wynn), indem sie die GRIDHOG-App bitten, sie zum Ziel „GRIDHOG“ zu navigieren, oder mit ihren Anomalie-Fähigkeiten. Wenn die Anomalie die Agenten zuvor bereits in ihren eigenen Loop geschickt hat, zögert sie, es erneut zu tun, und schickt sie nur dann wieder in einen Loop, wenn die Agenten offen feindselig oder unkooperativ werden.",
    "Agenten, die sich dem GRIDHOG-Turm nähern, tun dies inmitten einer unheimlich apokalyptischen Szenerie: Die Straßen sind voller leerer Autos, deren Besitzer sie entweder verlassen haben oder von der Verkehrs-Anomalie anderswohin geschickt wurden. Zu tief hängende Kabel und Sensoren baumeln über ihnen und drohen, größere Agenten in ihrem wetterfesten Netz zu verheddern. Und auf Video- und Printwerbung ringsum ermuntert das grinsende Cartoon-Warzenschwein sie, weiterzufahren.",
    "**Wenn die GRIDHOG-Vorrichtung von den Agenten beschädigt oder geöffnet wird,** versagt das Eindämmungsfeld der Verkehrs-Anomalie, und sie hebt ab.",
    "**Wenn die Agenten versuchen, mit der Verkehrs-Anomalie zu sprechen, solange sie sich in der Vorrichtung befindet,** setzt sie den Chaos-Effekt Verzerren ein, um das Cartoon-Warzenschwein in einer nahen GRIDHOG-Werbung zu animieren und ihm ihre Stimme zu geben. Wenn die Agenten fragen, erklärt sie ihren Wunsch, die Verkehrskrise direkter und freier anzugehen, ohne Bedarf an einer App, indem sie die Menschen einfach dorthin schickt, wohin sie wollen.",
    "**Wenn sie nicht bereit sind, sie zu befreien,** erschafft die Anomalie einen neuen Loop für sie und ist, bis sie zurückkehren, von allein ausgebrochen und entkommen.",
    "**Wenn die Agenten Indira zu GRIDHOG bringen,** hört die Anomalie ihr zu. Obwohl sie niemandem wehtun will, ist sie über Eric Monaghans Behandlung von Andrew verbittert und wird stark versucht sein, die Verkehrs-Anomalie freizulassen.",
    {t:"h", x:"Reden"},
    "Wenn die Agenten die GRIDHOG-Haltevorrichtung selbst betreten oder wenn die Anomalie die Agenten mit dem Chaos-Effekt Versetzen empfängt, werden sie in das Innere der GRIDHOG-Vorrichtung transportiert.",
    "Agenten, die hoffen, mit Andrew zu sprechen, bevor seine Verwandlung abgeschlossen ist, stellen fest, dass sie zu spät sind. Die Anomalie darin hat ihre neue Gestalt vollständig ausgebildet: eine elegante Gestalt aus Stein und dreifarbigem Licht, irgendwo zwischen Engel und Wasserspeier, mit weißen und gelben Streifen gemustert. Sie trägt Andrews Gesicht.",
    "Das Innere der Vorrichtung ist eine dunkle, beengte Haltevorrichtung aus Kohlefaser. Bildschirme in alle Richtungen zeigen den Status von hunderten GRIDHOG-App-Nutzern in der ganzen Stadt (alle blinken rot), und über ihr zeigt eine LED-Anzeige „MAKE TRAFFIC DISAPPEAR“.",
    "Die Anomalie ist an ein dichtes Netz aus Drähten und Halsbändern angeschlossen, die jedes Mal, wenn sie von ihrer Arbeit an den Bildschirmen wegblickt, einen sichtbaren Schock austeilen.",
    {t:"hinweis", art:"anom", h:"Agenten, die erfolgreich mit der Verkehrs-Anomalie verhandeln, können Folgendes erfahren:", x:[
     "Die Anomalie erinnert sich dunkel, aber liebevoll an ihre Zeit als Andrew Wynn.",
     "Die Anomalie begegnete Andrew erstmals und verband sich anschließend mit ihm, als er in einem verlassenen unterirdischen Amphitheater Urban Exploring betrieb.",
     "Andrew war früher ein begeisterter Freikletterer und Fotograf.",
     "Sie fühlt eine tiefe Verbindung zu Indira Roy und sieht in ihr eine vertrauenswürdige Mentorin."
    ]}
   ]},
   {t:"Die Anomalie hebt ab", p:109, b:[
    "Sobald die Verkehrs-Anomalie aus der GRIDHOG-Haltevorrichtung befreit ist, wächst ihre Domäne dramatisch: Sie erhält nun alle Domänen-Vorteile, wenn sie jemanden auf oder direkt über einer Straße beeinflusst.",
    "Sie wird versuchen, in Sicherheit und Anonymität zu entkommen; wenn die Agenten sich auf irgendeine Weise einmischen, unternimmt sie einen letzten, verzweifelten und dramatisch wörtlichen Versuch, ihrem Fokus „Make Traffic Disappear“ zu folgen: Sie heftet sich an den nahen Asphalt und hebt ab, wobei sie den Rest der Straße hinter sich hochzieht. Während sie aufsteigt, erhebt sich die Straße in einem langen Stück und bildet eine gewaltige Verkehrsschlange (Traffic Snake), die sich den Himmel hinaufwindet.",
    "Die Anomalie setzt den Chaos-Effekt Manifestieren ein, um Fahrzeuge zu erschaffen, die die Agenten bei der Verfolgung behindern. Gewalttätige Autos, die versuchen, Agenten zu rammen oder von der Straße in die Tiefe zu stoßen; einsperrende Taxis, die Agenten im Inneren einschließen und mit ihnen den Verkehr hinabfahren; und diebische Verkehrshütchen, die sich untereinander abstimmen, um die Agenten mit einer Hochrisiko-Version des Hütchenspiels zu verwirren. Sie setzt außerdem den Chaos-Effekt Verderben ein, um bestehende Autos zu manipulieren, Hindernisse zu schaffen und den Boden zu verschieben, um das Vorankommen der Agenten aufzuhalten.",
    "Agenten, die die Anomalie fassen wollen, müssen herausfinden, wie sie bergauf zur Anomalie an der Spitze der Verkehrsschlange gelangen, während sie dem Gegenverkehr ausweichen.",
    {t:"h", x:"Einfangen"},
    "**Die Anomalie kann gefangen werden, wenn die Agenten eines der Folgenden erreichen:**",
    {t:"liste", x:[
     "Sie festsetzen, während sie sich mit Indira verbindet.",
     "Eine große Menge körperlicher Gewalt (10+ Schaden) ausüben, um sie zu zermürben und sie, alle Loops und die gesamte angehobene Straße zu Boden stürzen zu lassen.",
     "Die Anomalie aufhalten, einsperren oder verzögern – besonders in Situationen mit Verkehrsthema –, damit sie sich machtlos und niedergeschlagen fühlt.",
     "Sie zufriedenstellen, indem man sie absolute Freiheit vom Verkehr erleben lässt."
    ]},
    "**Wenn die Anomalie beruhigt wird,** senken sich ihre Loops sanft zu Boden und verschwinden dann gefahrlos.",
    {t:"h", x:"Zerstören"},
    "Die Anomalie kann mit der Ripple Gun anvisiert werden, wenn man sie erfolgreich an ihrem Aussichtspunkt am Ende des erhöhten Straßenabschnitts erreicht. Im Flug manipuliert sie die Kleinen Anomalien und den Asphalt, um zu verhindern, dass die Agenten freie Schussbahn bekommen.",
    "**Wenn die Anomalie zerstört wird,** verschwinden die Loops abrupt und lassen die Menschen und Trümmer in ihnen alle zu Boden stürzen."
   ]}
  ],
  nach: [
   {t:"Ausgänge", p:110, b:[
    {t:"h", x:"Entkommen"},
    "**Wenn die Agenten die Anomalie überwältigen, sie aber entkommen lassen,** flieht sie aus Ternion City in die weniger dicht besiedelten Vororte und ernährt sich davon, in der Abgeschiedenheit der Wälder kleine Verkehrsrangeleien zu lösen. Die Bürger erleben eine spürbare, aber nicht berichtenswerte Verringerung des Verkehrs.",
    "**Wenn Indira Roy bei der Anomalie war, als sie befreit wurde,** lädt sie sie ein, sich ihr anzuschließen. Indira wird spüren, wie die Anomalie sich mit ihr verbindet. Sie kann eine Resonante werden, wenn sie die Möglichkeit erkennt oder die Agenten sie in diese Richtung drängen.",
    {t:"h", x:"Lose Enden"},
    "Eric Monaghan wird davon besessen sein, das kolossale öffentliche Scheitern von GRIDHOG zu überwinden, und sich darauf konzentrieren, Anomalien als Abkürzung zum Erfolg zu nutzen. Miros wird seine Anstrengungen verstärken, die Geschäfte der Agency zu stören; bei folgenden Einsätzen zur Anomalie-Bergung kann der Einsatz des Chaos-Effekts Realitäts-Auslöser stattdessen eine Miros-Asset-Recovery-Einheit herbeirufen, einen Trupp schwer bewaffneter, aber schlecht ausgebildeter Agenten, die sich darauf verschrieben haben, einen lebenden Agenten oder eine Anomalie einzubringen.",
    "Die Schuld an der Verkehrskrise und dem von GRIDHOG verursachten Chaos wird auf Gouverneurin Diana Alvarez’ Schreibtisch landen, und sie wird bis zum nächsten Zusammentreffen der Agenten von ihrem Amt zurücktreten. Ihr Nachfolger, Vizegouverneur Aaron Lee, wird den Agenten persönlich freundlich begegnen (es sei denn, sie haben ihm Anlass gegeben, einen Groll zu hegen), aber die Sicherheit und die Aufsicht über Miros- wie Agency-Aktivitäten verschärfen. Die Strafverfolgung wird bei den nächsten Einsätzen deiner Zweigstelle voraussichtlich schneller und in größerer Zahl auftauchen.",
    "**Wenn Indira Roy sich nicht mit der Verkehrs-Anomalie verbindet und in die Wildnis aufbricht,** wird sie zu einem hartnäckigen, allgegenwärtigen und mächtigen Losen Ende. Die Agenten bei der Arbeit zu sehen und das volle Ausmaß von Andrews Kräften mitzuerleben, wird sie zu weiterer und gefährlicherer Erforschung von Anomalien antreiben, mit weniger Aufsicht und mehr Geldmitteln von Eric. Wenn sie sich jedoch mit der Verkehrs-Anomalie verbunden hat und nicht überzeugt wird, zur Agency zurückzukehren, ist sie clever darin, im Verborgenen zu bleiben und sich selbst zu erforschen, während sie sich langsam verwandelt.",
    "Von den Agenten wird erwartet, dass sie die Anforderung The Highway nach Abschluss dieses Einsatzes zurückgeben, sie können aber erneut eine für 15 Belobigungen (wenn sie das Original zurückgeben) oder 45 Belobigungen (wenn nicht) erwerben."
   ]},
   {t:"Vault-Anforderung", p:111, b:[
    {t:"anforderung", h:"Route Rooter", en:"Route Rooter", preis:21, b:[
     "Dieses münzgroße Gadget, gestaltet wie eine Schweineschnauze, lässt sich mit einer Sicherheitsklammer an der Kleidung anstecken. Es wird aktiviert, indem man darauf tippt und den Namen eines Ziels spricht; der Route Rooter liefert dann Schritt-für-Schritt-Anweisungen, die den schnellsten Weg zu diesem Ziel beschreiben. Er gibt diese Anweisungen gesprochen über einen eingebauten Lautsprecher wieder.",
     "Agenten können beim Aktivieren des Route Rooter eine Qualitätssicherung aus einer beliebigen Qualität ausgeben, um sicherzustellen, dass die gewählte Route eine der folgenden Vorgaben erfüllt:",
     {t:"liste", x:[
      "„Bring mich zu [Name einer Person].“",
      "„Sorg dafür, dass ich unterwegs an [Art von Ort, etwa Tankstelle, Spätkauf oder aktivem Vulkan] vorbeikomme.“",
      "„Schick mir die Anweisungen als Text, statt sie laut vorzulesen.“",
      "„Hilf mir, der Polizei auszuweichen.“"
     ]}
    ]}
   ]},
   {t:"Anomalie-Fähigkeit", p:111, b:[
    {t:"faehig", h:"Rastplatz", en:"Rest Stop",
     x:"Du bist noch nicht da, aber du brauchst einen Moment Pause. Während du auf der Straße bist, nimm die nächste Ausfahrt und würfle auf **Subtilität**.",
     erg:[
      ["ok","**Bei Erfolg** führt dich die Straße zu einem Rastplatz: einem privaten Raum, abgetrennt von der Umgebung. Er ist nicht bemannt, aber mit Komfortstationen, Verkaufsautomaten, Picknicktischen im Freien und einer hohen Karte mit Wissenswertem über die Umgebung ausgestattet. Hier kann man dir nicht folgen. Der Rastplatz verschwindet, nachdem du ihn verlassen hast; alles, was darin zurückgelassen wird, wird dort abgelegt, wohin die Straße normalerweise geführt hätte."],
      ["plus","**Für jede weitere {3}** kannst du eine Person mit zum Rastplatz nehmen."],
      ["plus","**Bei Triszendenz** wird der Rastplatz dauerhaft und ist ohne Wurf erreichbar, sooft du diese Ausfahrt nimmst."],
      ["nein","**Bei Fehlschlag** führt dich die Straße von der Kante eines Piers in einen tiefen, abgelegenen See, weit weg von deinem Ziel und weit weg von Hilfe."]
     ]}
   ]}
  ]
 }
};
/* GESTALTUNG:
 - Seitenzählung: Es sind Dateinummern (S094 = Eröffnungsseite); die gedruckte Seitenzahl im Buch ist jeweils um 1 höher (S095 zeigt „96“).
 - S. 94: Eröffnungsseite = LED-Verkehrsanzeige mit dem Titel GRIDHOG (Handout art "schild", 22 Zeilen; Autor Sean Ireland steht nur im Bild, nicht übernommen).
 - Der Einsatz hat KEINE Tabelle „Chaos-Effekte“ und keine neuen Effekte (chaos:[]). Stattdessen S. 98 der Abschnitt „Loops und Chaos“ (Sonderregel: 10 Chaos je Loop, nur dort nutzbar; Loop stürzt ab bei 0). Liegt als Abschnitt in reiter.vor; ggf. als Sonderregel-Kasten neben dem Chaos-Bereich anzeigen (dann sonder: nutzen). chaosP daher 98.
 - Optionale Ziele haben einen Einleitungssatz: Feld zieleEinleitung.
 - S. 97: Spezial-Anforderung „The Highway“ als roter Kasten (kasten) unter der Einsatzbesprechung, kein Teil des Vorlesetexts.
 - S. 98: Kasten „Miros vs. Agency“ mit Icon; danach Zwischenüberschrift GRIDHOG.
 - S. 99/100: Zwei sp-Blöcke mit h3-Spaltenüberschriften (Polizeiabsperrung | Pressekonferenz, Hinter der Bühne | Victory Circle); die Hinweislisten stehen innerhalb der Spalten (Donna = gew, Cameron = anom).
 - S. 103: sp Wartezimmer | Penthouse-Büro. Gesprochene Zitate/Schlagzeilen (orange kursiv im Buch) sind übersetzt; nur der Slogan „Make Traffic Disappear“ und Projektnamen bleiben englisch.
 - S. 106: Drei Spalten Anomalie/Realität/Kompetenz als karten (Farben im Buch Blau/Gelb/Rot); Kasten „Loops anderer Figuren“; Fluchtmöglichkeiten als liste mit h.
 - S. 108: Hinweisliste „Agenten, die erfolgreich verhandeln“ (anom); „Einfangen“-Liste im Buch mit Ampel-Symbol (kein gew/anom), hier als Absatz + liste.
 - S. 110: Route Rooter (Preis 21), Anomalie-Fähigkeit Rastplatz (Subtilität; Triszendenz-Zeile als „plus“-Eintrag).
*/
