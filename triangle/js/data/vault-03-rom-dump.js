/* The Vault – ROM Dump (Buch S. 40–57). Übersetzung aus dem Englischen. */
window.TA_VAULT = window.TA_VAULT || {};
TA_VAULT["rom-dump"] = {
 cw: "Gedächtnisverlust",
 chaosP: 44,
 chaos: [
  {k:2, n:"Verderben", en:"Corrupt", x:"Ein Gegenstand, ein kleines Tier oder ein Geräusch ruckelt und verpixelt kurz, bevor es sich in einen ähnlichen Gegenstand aus der Videospielwelt der Anomalie verwandelt (etwa eine Limodose, die sich in einen großen Humpen Met verwandelt)."},
  {k:4, n:"Manifestieren", en:"Manifest", x:"**Barbipede** – Gewalttätig. Ein großer Tausendfüßler mit knochigen Widerhaken, hundert dornigen Beinen, einem comichaften Grinsen und einer langen, schlangenartigen Zunge. Schneller, als man denkt.\n\n**Shimmersquirrel** – Verlockend. Ein bezauberndes zweischwänziges Eichhörnchen, das im göttlichen Licht leuchtet, quiekt und Menschen in der Nähe zum nächsten Voyager oder zum Farmhaus lockt.\n\n**Bandit** – Diebisch. Eine kindgroße Gestalt, von Kopf bis Fuß in schwarze Lederrüstung gekleidet, mit schwerer Kapuze und einem übers Gesicht gezogenen Tuch. Schlägt zu, um alles zu stehlen, was der Anomalie oder ihren Anomalien nützlich ist."},
  {k:4, n:"Zufallsbegegnung", en:"Random Encounter", neu:1, x:"Wenn du dies beim Einsatz von Manifestieren, Verdoppeln oder Verdreifachen ausgibst, kannst du einen abgetrennten surrealen Raum erschaffen, in dem die Agenten gefangen sind, bis sie alle Kleinen Anomalien besiegt haben. Dieser Raum ist etwa so groß wie ein Boxring. Die Wände sind eine flache Kulisse, die dem Ort ähnelt, an dem die Agenten zuvor waren."},
  {k:5, n:"Anziehen", en:"Attract", x:"Ein ortsansässiger NPC wie die Deputys, ein Nachbar, ein Motelgast oder eine Beziehung erscheint unter der Kontrolle der Anomalie auf dem Grundstück und kommt auf die Agenten zu. Er bietet eine einfache Nebenquest an: „Bitte, meine Familie muss im kommenden Winter warm bleiben. Wenn du mir 5 Shimmersquirrel-Felle bringst, soll dein Schaden nicht sein!“ Wenn die Agenten die Quest nicht erfüllen, rufen sie weiter, wiederholen die Questinformationen und flehen um Hilfe."},
  {k:6, n:"Ausdehnen", en:"Expand", x:"Die Domäne der Anomalie wächst weiter und dehnt sich über den Dachboden des Farmhauses hinaus aus. Sie breitet sich Stockwerk für Stockwerk im Farmhaus nach unten aus und dann weiter in benachbarte Gebäude auf dem Grundstück, wobei sie auch Boden und Pflanzen verändert. Hat die Begegnung bereits begonnen, kann dies trotzdem eingesetzt werden, um das Überlaufen ihrer Welt noch über das meilenweite Schlachtfeld hinaus auszudehnen; sie nimmt dann mehr von der Umgebung ein, den Polizeikontrollpunkt, die Landstraße, andere benachbarte Höfe usw."},
  {k:8, n:"Schnellladen", en:"Quickload", neu:1, x:"Die Anomalie lädt einen Spielstand des Einsatzes von vor 5 Minuten und versetzt die Agenten augenblicklich dorthin zurück, wo sie zu diesem Zeitpunkt waren, und setzt Voyagers, Gegenstände usw. zurück. Chaos wurde trotzdem erzeugt, und die von den Agenten verbrauchten Ressourcen bleiben verbraucht."}
 ],
 ziele: [
  {art:"bel", n:1, x:"für das Führen einer spielgerechten Waffe wie Schwert, Keule, Bogen oder Gunblade"},
  {art:"bel", n:3, x:"für das Erreichen von 100 % Kartenerkundung (jeden Bereich im und um das Farmhaus vollständig erkunden)"},
  {art:"ver", n:1, x:"für das Fliehen aus einem Kampf"},
  {art:"ver", n:3, x:"für die folgende Bewegungsfolge im Bereich des Farmhauses: Norden, Süden, Westen, Osten, dann mindestens 5 Sekunden ducken. — Das Abschließen dieses Cheat-Codes fügt der „Gruppe“ der Agenten NULL hinzu, eine glitchige, verpixelte, vage menschenähnliche Ansammlung von Kästchen, die eine leuchtende Keule schwingt. NULL folgt ihnen für den Rest des Einsatzes. Als unfertige Figur, die früh in der Spielentwicklung gestrichen wurde, spricht NULL mit digital verzerrter Stimme und sagt nur zwei kaputte Kampfsprüche: „4 K1NG AND GL_rY!!1“ und „H4vE @ uu!“"}
 ],
 sonder: [
  {t:"kasten", h:"Sonderregel", b:[
   "Die Anomalie reagiert abwehrend auf jeden, der versucht, Heroia als realen Ort herunterzuspielen. Immer wenn jemand „Das ist doch nur ein Spiel“ oder Ähnliches sagt, manifestiert sich kostenlos eine Kleine Anomalie in Gestalt eines beliebigen klassischen Heroia-Monsters: Schleime, lachende Kobolde, Schlammgolems und mehr."
  ]}
 ],
 reiter: {
  profil: [
   {t:"Fundstück", p:41, b:[
    {t:"handout", art:"chat", h:"Dialog aus Voyagers of Heroia", x:[
     {von:"KÖNIG ORMODIA", x:"Ist es wirklich so weit gekommen?"},
     {von:"SENTINEL", x:"Es gibt keinen anderen Weg. **Heroia** stirbt, und wir alle mit ihm, wenn wir nicht handeln."},
     {von:"KÖNIG ORMODIA", x:"Und wenn du dich irrst? Wenn unsere größten **Voyagers** verloren sind?"},
     {von:"SENTINEL", x:"Dann sind sie uns lediglich im Tod vorausgegangen, aber nur knapp."},
     {von:"KÖNIG ORMODIA", x:"Wie funktioniert diese dunkle Kunst von dir genau?"},
     {von:"SENTINEL", x:"Vor langer Zeit trachtete ich danach, nicht nur Herrscher dieser Welt zu werden, sondern aller Welten, auch der des **Großen Helden**. Ich lernte einen Zauber, der Menschen, Dinge und Orte aus unserer Welt hinaus und in andere hinein senden kann. Ich habe ihn nie gewirkt. Bis jetzt."},
     {von:"KÖNIG ORMODIA", x:"So sollen die **Voyagers** in diese neue Welt reisen und sich allen Gefahren stellen, die sie bergen mag, auf der Suche nach dem **Großen Helden**. Was, wenn sie ihn nicht finden? Was, wenn sie mehr brauchen?"},
     {von:"SENTINEL", x:"Dann senden wir, was immer sie brauchen mögen. Wir haben keine Zeit zu verlieren. Und wenn sie den **Großen Helden** nicht finden, dann senden wir ganz **Heroia** in die neue Welt!"},
     {von:"KÖNIG ORMODIA", x:"Das ist absurd! Wir können unsere Heimat nicht aufgeben. Selbst wenn es meinen Tod bedeutet, werde ich diese Welt bis zum bitteren Ende verteidigen."},
     {von:"SENTINEL", x:"Mein Herr, Ihr müsst Euch unsere Welt als einen Behälter vorstellen. Der Zauber nennt diesen Behälter ein „**ROM**“. Das astrale Gefüge von allem in unserem Land besteht aus einem „**Code**“. Indem wir den Code aus unserem **ROM** in diese neue Welt verschieben, bewahren wir ihn an einem Ort jenseits der Reichweite der Gefahren, die uns bedrohen."},
     {von:"SENTINEL", x:"Es wird sein, als schüttete man den Inhalt eines Korbes in einen anderen. Hängt nicht mehr am Korb als an dem, was er enthält. **Heroia** wird wieder stark stehen."},
     {von:"KÖNIG ORMODIA", x:"Ihr sprecht davon, die Gestalt der Schöpfung selbst zu verändern. Was, wenn etwas schiefgeht?"},
     {von:"SENTINEL", x:"Die ganze Schöpfung wird bald dahin sein! Das wissen wir mit Gewissheit. Ich wollte, sie nähme lieber eine andere Gestalt an, als völlig zerstört zu werden. Stimmt Ihr nicht zu?"},
     {von:"KÖNIG ORMODIA", x:"Natürlich stimme ich zu … Macht es so."}
    ]},
    {t:"bild", seite:40, x:"Eröffnungsseite: Dialogfenster im 16-Bit-Stil mit König Ormodia und Sentinel, Pixelstrand mit Wellen"}
   ]},
   {t:"Überblick", p:42, b:[
    {t:"profil",
     lead:"Die graue Plastikkassette des 16-Bit-Fantasy-Rollenspiels „Voyagers of Heroia: Quest for the Primordial Starseller“ liegt auf dem Dachboden von Markus Hiles Elternhaus. Angesichts des nahenden Todes ihrer internen Batterie dehnt eine schlummernde Anomalie, geboren aus Markus’ kindlicher Liebe zum Spiel, ihre digitale Welt in unsere aus. Die NPC-Helden des Spiels sind in die Realität eingetreten, um den Großen Helden zu suchen – das Kind, das ihre Welt gerettet hat und heute ein Mann mittleren Alters ist. Die Kassette selbst gibt starke elektrische Störungen ab, sodass die Musik und das Bild des Spiels bis zu eine Meile entfernt aus Lautsprechern und Bildschirmen projiziert werden. Findet die Anomalie Markus, wächst ihre Macht, und die Videospielwelt breitet sich weiter in die Realität aus.",
     fokus:"Der Glaube oder Wunsch, dass Heroia ein realer Ort sein könnte.",
     domaene:"Das gesamte Hile-Farmhaus.",
     impuls:"Das Farmhaus als Bollwerk für ihr Volk zu beanspruchen und zu verteidigen. Tapfere Krieger in die Reiche Jenseits zu senden und den Großen Helden zu finden."},
    {t:"h", x:"Geschichte"},
    "Vor 25 Jahren bekam Markus Hile zu Weihnachten von seiner Großmutter eine Kopie des Videospiels Voyagers of Heroia: Quest for the Primordial Starseller geschenkt. Vom Moment des Auspackens an war er hingerissen. Die Welt war reich und fantastisch. Die Figuren waren anders als alles, was er bisher kannte. Die Geschichte war dramatisch und tragisch. Sie behandelte ihn nicht wie ein Kind; sie behandelte ihn wie einen Helden. Das ganze folgende Jahr war er besessen. Er trug die Anleitung überallhin mit sich. Er gab all seinen Freunden Tipps und Tricks. Er schrieb Fanfiktion (noch bevor er wusste, dass es so heißt) über seine Gruppe von Voyagers.",
    "Markus wandte sich anderen Spielen und neuen Konsolen zu, blickte aber stets liebevoll auf Voyagers of Heroia zurück. Schließlich bekam das Spiel einen Ehrenplatz in der Unterhaltungselektronik-Ecke seines Zimmers, wurde aber nie wieder gespielt. Markus zog fürs Studium aus, und seine Eltern ließen sein Zimmer weitgehend unberührt. Während alles andere alterte, blieb die Kassette makellos, wurde weder gelb noch staubig.",
    "Die Anomalie blieb jahrelang schlummernd, ihr Fokus gesättigt von Markus’ starken Kindheitsgefühlen und liebevoller Nostalgie, selbst aus der Ferne. In den letzten Monaten hat Markus aufgehört, an das Spiel zu denken, und die Kassettenbatterie hat einen kritisch niedrigen Stand erreicht. Die Anomalie hat erkannt, dass Markus wirklich fort ist – und fürchtet, dass er nie zurückkehrt. Sie unternimmt Schritte, um ihn zurückzuholen.",
    {t:"h", x:"Erscheinung"},
    "Eine „Voyagers of Heroia: Quest for the Primordial Starseller“-Videospielkassette, makellos eingebettet im Staub des untersten Regalbretts einer alten Unterhaltungselektronik-Ecke mit einem kleinen Röhrenfernseher. Oben auf der Kassette steht in Kinderschrift mit Permanentmarker „MARKUS“.",
    {t:"h", x:"Aktuelle Lage"},
    "Vor Kurzem sind Helden und Kreaturen aus der Spielwelt in unsere hinein manifestiert, was zu seltsamen Sichtungen an den Farmhausfenstern und durch Passanten führte, die nachts in die Felder blickten. Die NPC-Helden, im Spiel Voyagers genannt, sind die mächtigsten dieser Manifestationen: Lorelei die Elvorc, Raymond der Höllenmuskel (Hellmuscle), Kirbash die Ewigklinge (Everblade) und Sentinel der wiedergeborene Schurke.",
    "Vor Tagen kam es zu einer Konfrontation zwischen einem Voyager und den Eltern des Großen Helden, die noch im Farmhaus leben. Weil er glaubte, einem echten Dämon gegenüberzustehen, griff der Vater zu einer Waffe und schoss auf Raymond den Höllenmuskel, den gehörnten Kleriker der Voyagers, nachdem dieser mitten im Wohnzimmer des Paares erschienen war. Nach einem kurzen Gerangel nahm Raymond das Paar gefangen und schickte es ins Spiel, wo es nun im Kerker des Königs festgehalten wird.",
    "Nachdem Markus’ Eltern gefangen waren, übernahmen die Voyagers mühelos die Kontrolle über das Farmhaus und begannen, sich auf der Suche nach dem Großen Helden über das Hile-Grundstück hinaus auszubreiten.",
    "Die Agency begann, die Gegend zu erkunden, als Einheimische eine große Gestalt in den Maisfeldern meldeten, die eine seltsame Metallstange hielt, dazu dicke Schleimklumpen, die über die Straße glitten, und 16-Bit-Musik, laut genug, um von mehreren Feldern entfernt gehört zu werden. Nun, da die Nachricht vom Verschwinden des Paares die Runde gemacht hat, schickt die Agency ein Außenteam."
   ]}
  ],
  vor: [
   {t:"Morgenbesprechung", p:43, b:[
    {t:"morgen", x:[
     "Ein Agent sieht einen Nachrichtenbeitrag über einen Anstieg von Wildtiertoden in Blackford County, einer Gegend knapp außerhalb der Stadt. Von Jägern vor Ort wurden Kadaver von Rehen und kleinen Tieren gefunden, getötet, aber nicht gefressen. Die Behörden sind knapp mit Details und sagen nur, die Todesfälle schienen nicht natürlich zu sein. Sie bitten die Leute, ihre Haustiere für die nächsten zwei Wochen im Haus zu halten, während sie weiter ermitteln.",
     "Die Beziehung eines Agenten empfiehlt einen langen Videoessay namens Voyagers of Heroia - 25 Years Later. Das Video ist sechs Stunden lang.",
     "Die Beziehung eines Agenten plant ein Wochenende zum Abschalten auf dem Land und mietet ein Haus in der ländlichen Kleinstadt Marion.",
     "Die Beziehung eines Agenten bittet um Hilfe bei der Suche nach einer Kopie von Wanderer, einem Spiel über raumfahrende Luftschiffe auf einem Dutzend Fantasy-Planeten, das seit zwei Jahrzehnten vergriffen ist. Sie hat es als Kind geliebt, findet aber nirgendwo ein Exemplar."
    ]}
   ]},
   {t:"Einsatzbesprechung", p:43, b:[
    {t:"vorlesen", b:[
     "Vor zwei Tagen wurde in der Kleinstadt Marion im nahen ländlichen Blackford County ein Ehepaar als vermisst gemeldet und gilt inzwischen als tot.",
     "Die Agency hat mehrere Berichte abgefangen über leuchtende Gestalten auf den Feldern bei Nacht, laute elektronische Musik, die bis zu eine Meile weit zu hören ist, zerfleischte Kadaver einheimischer Wildtiere und antikes Handwerkszeug in makellosem Zustand (*Schmiedeambosse, Webstühle, metallbeschlagene Truhen*), das in den letzten Monaten am Straßenrand und in Gräben auf oder nahe dem Farmhaus des Paares zurückgelassen wurde.",
     "Das Sheriff-Department hat öffentlich erklärt, es habe Haus und Grundstück geräumt und Anzeichen eines Schusses, möglicherweise eines Gerangels und sonst wenig gefunden. Man hat das FBI zu Hilfe gerufen, also müssen wir handeln, bevor das auf nationaler Ebene Lose Enden erzeugt.",
     "Markus Hile, der erwachsene Sohn des vermissten Paares, wohnt im Hart Motel in Marion. Er wurde als Verdächtiger ausgeschlossen, weil er zur Tatzeit in Ternion war, und unterstützt nun die Behörden bei der Suche nach seinen Eltern. Als einziges verbliebenes Familienmitglied, das im Haus gelebt hat, sollte er den Agenten zufolge befragt werden."
    ]}
   ]}
  ],
  erm: [
   {t:"Anreise nach Blackford County", p:45, b:[
    "Aufgrund der jüngsten Budgetumstrukturierung und von Personalkürzungen fallen die Geschäfte in Blackford County nun in die Zuständigkeit der Niederlassung Ternion City. Es werden den Agenten keine örtlichen Ressourcen bereitgestellt, und die Agenten sind (wie immer) selbst dafür verantwortlich, ihre Anreise zum Ermittlungsort zu organisieren – einschließlich aller zusätzlichen Fahrten, die sie machen müssen, nachdem sie ihre Lebensversicherungspolice aktiviert haben und im Pausenraum wiederbelebt wurden.",
    "Die Beziehungen der Agenten besuchen vielleicht den Verdant Hills Country Club, die größte Raststätte für Lkw des Bundesstaats oder nehmen an einer der örtlich berühmten Geistertouren teil.",
    {t:"kasten", h:"Anreise nach Blackford County", b:[
     "Blackford County ist von Ternion City aus mit Auto, Bus oder Helikopter erreichbar. Keines dieser Verkehrsmittel wird den Agenten von der Agency für diesen Einsatz gestellt.",
     "**Agenten, die ein eigenes Auto besitzen** oder sich eines von einer mobilen Beziehung leihen können, dürfen die eine Stunde und zwanzig Minuten selbst fahren, wovon die Hälfte darauf entfällt, aus dem allgegenwärtigen Verkehr der Innenstadt herauszukommen.",
     "**Agenten dürfen Tickets kaufen** für den Shuttlebus des Verdant Hills Country Club, der jede Stunde von einem Parkplatz drei Blocks vom Hauptquartier der Agency entfernt abfährt. Er hält am Hart Motel, und seine Höchstkapazität beträgt 15 Fahrgäste.",
     "**Agenten, die einen Helikopter besitzen,** dürfen damit direkt nach Marion fliegen. Von der Agency gestellte Helikopter sind mit gültigen Genehmigungen ausgestattet, die ihnen erlauben, auf jeder öffentlichen Freifläche oder jedem öffentlichen Parkplatz im Großraum Ternion City zu landen."
    ]}
   ]},
   {t:"Das Hart Motel", p:46, b:[
    "Das Hart Motel besteht aus acht Zimmern mit Schlackenstein-Wänden und einem kleinen, schlaglochübersäten Parkplatz und wird online mit 1,5/5 Sternen bewertet. Die Farbe außen blättert ab, und das meiste freiliegende Metall hat eine geschlossene Rostschicht angesetzt. Schlechte Graffiti bedecken jede freie Wand.",
    "Das Motelgelände liegt auf einer großen Kiesfläche direkt an einer Landesstraße. Es gibt reichlich Platz zum Parken oder zum Landen eines Helikopters. Der Shuttlebus setzt die Fahrgäste direkt vor der Tür ab.",
    "Tinn Granite (er/ihm), der alternde Besitzer, hält die Stellung am Empfang im kleinen Vorderbüro. Er hat eine unangezündete Zigarette im Mundwinkel, die er sich für vor dem Mittag- oder Abendessen aufhebt, um sie draußen zu rauchen. Er ist alt genug, dass ihm alles ein Graus ist. Der Fernseher am Ende des Tresens plärrt Wiederholungen klassischer Spielshows.",
    "Markus Hile sitzt auf einer Bank vor seinem Motelzimmer, fummelt mit einer Hand an seinem Handy herum und zieht mit der anderen lange, entnervte Züge an einer Vape.",
    {t:"h", x:"Markus Hile"},
    "Markus (er/ihm), der Sohn des vermissten Paares, ist unter normalen Umständen ein zerstreuter und lockerer Mann. Jetzt wippt er nervös mit dem Fuß, murmelt gelegentlich leise vor sich hin, während er sein Handy checkt, und ist ansonsten still. Ein großer Mann Mitte dreißig mit dickrandiger Brille und zotteligem dunklem Haar, gekleidet in Business-Casual-Arbeitskleidung – zerknittert vom zu langen Sitzen und Liegen, ohne sich umzuziehen. Er ist müde, aber froh, alles zu wiederholen, was er den Behörden erzählt hat.",
    {t:"hinweis", art:"gew", h:"Das erfahren Agenten von Markus, wenn Tinn Granite sie nicht wegen Herumlungerns rauswirft:", x:[
     "Er kann sich niemanden vorstellen, der seinen Eltern etwas antun würde. Er kann sich nicht vorstellen, dass einer von ihnen dem anderen etwas antut.",
     "Er hat letzte Woche mit ihnen gesprochen, und es ging ihnen gut.",
     "Sein Vater hatte Waffen als Hobby und putzte sie oft, benutzte aber nur ein paar davon tatsächlich zur Jagd.",
     "Sie hatten erwähnt, in den letzten Wochen auf den Feldern seltsame Dinge, Leute und Tiere gesehen zu haben, die sie nicht kannten, aber nie wurde etwas daraus. Markus nahm an, dass sie einfach mit dem Alter paranoider und ängstlicher wurden.",
     "Er wünscht, er könnte das Haus selbst untersuchen, aber die Polizei hat einen Kontrollpunkt errichtet, der jeden am Betreten hindert."
    ]},
    {t:"hinweis", art:"gew", h:"Das erfahren Agenten, wenn sie Markus gegenüber Videospiele erwähnen:", x:[
     "Markus liebte Voyagers of Heroia als Kind, hat aber schon länger nicht mehr daran gedacht. Er hatte alle Lösungsbücher, las die Anleitung hundertmal wieder und hört sich ab und zu noch die Musik an (besonders Lo-Fi-Remixe).",
     "Seine Lieblingsaufstellung war Lorelei, Kirbash und Raymond. Wenn man das geheime Ende schaffte, bekam man den großen bösen Kerl, den buchstäblichen Todesgott, für den zweiten Durchgang in die Gruppe (was ihm damals den Verstand raubte).",
     "Seine alte Kassette liegt wahrscheinlich noch in seinem Jugendzimmer auf dem Dachboden des Farmhauses.",
     "Sein Name in allen Spielen damals war MARKY, da die meisten Spiele eine Grenze von 5 Zeichen hatten."
    ]}
   ]},
   {t:"Die Polizeisperre", p:47, b:[
    "Das Motel ist über eine leere zweispurige Landstraße mit dem Ackerland der Hiles verbunden. Zwei Streifenwagen des Blackford County Sheriff’s Department und eine gelbe Tatortabsperrung versperren die Zufahrt zur Farmhaus-Einfahrt. Gelb-schwarzes Absperrband ist überall gespannt und läuft an beiden Seiten der Absperrung entlang. Zwei Cops lehnen an den geparkten Wagen.",
    "Ein Übertragungswagen eines Nachrichtensenders steht ein paar Dutzend Meter weiter die Straße hinunter. Beim Wagen telefoniert jemand.",
    {t:"h", x:"Mit den Cops reden"},
    "Die Deputys Vandevender (sie/ihr) und Willmann (er/ihm) lehnen in der Mittagssonne an den Motorhauben ihrer Wagen und beschweren sich, schon wieder zur Tatortbewachung abkommandiert worden zu sein, nachdem sie beide das schon bei der Meth-Labor-Explosion letzten Frühling machen mussten. Vandevender ist eine kleine, stämmige junge Frau in einer gewöhnlichen Deputy-Uniform. Höflich, aber nicht hilfreich. Sie hat eine Aufgabe, und die will sie gut erledigen. Willmann ist ein Mann mittleren Alters, schmächtiger als erwartet, mit einer Mischung aus dienstlich gestelltem und selbst gekauftem Werkzeug am Gürtel. Hört auf Deputy Vandevender. Trifft keine eigenen Entscheidungen.",
    {t:"hinweis", art:"gew", h:"Das erfahren Agenten leicht, indem sie selbstbewusst mit den Cops reden:", x:[
     "Vandevender sagt, sie sei nicht überrascht, die Agenten zu sehen, wenn diese auf sie zugehen. Man habe ihr gesagt, eine andere Behörde könnte den Fall bald übernehmen, aber sie müsse trotzdem offizielle Papiere sehen oder es vom Sheriff persönlich hören, bevor sie jemanden aufs Grundstück lässt.",
     "Keiner der beiden Deputys war beim ersten Notruf und der anschließenden Durchsuchung des Grundstücks vor Ort. Beide hatten an dem Tag frei, und Überstunden wurden nicht angeboten.",
     "Vandevender bleibt auf Linie, wenn man sie nach Einzelheiten fragt. Das Department habe kürzlich seine offizielle Pressemitteilung herausgegeben, und die Agenten sollten die lesen, wenn sie mehr wissen wollen (sie sagt ihnen nichts, was sie nicht schon wissen).",
     "Vandevender erklärt den Agenten genau den Grundstücksverlauf und zeigt, wo das Hile-Grundstück beginnt und endet. Wenn sie sie in irgendeinem anderen Teil dieser Gegend erwischt, gibt es die Hölle (es sei denn, sie haben sich ihr gegenüber zuvor ausgewiesen)."
    ]},
    {t:"hinweis", art:"anom", h:"Das erfahren Agenten, wenn sie die Cops täuschen oder mit Anomalie-Fähigkeiten tiefer in deren Gedanken eindringen:", x:[
     "Die Polizei hatte auf dem Grundstück große Probleme mit Funkstörungen, speziell auf der Frequenz 140,15 MHz. Musik, wie alte Videospielmusik, spielte von irgendwoher – es muss ein Sender in der Nähe sein. Das Lied wechselte je nachdem, wo sie auf dem Grundstück waren.",
     "Die erste Untersuchung fand oben im Farmhaus eine seltsame Tür, die sie mit keiner Gewalt aufbrechen konnten. Sie konnten nicht einmal einen Kratzer hinterlassen. Sie wussten nicht, wie sie bei etwas vorgehen sollten, das offenbar „wie Magie wirkte“, und wandten sich deshalb ans FBI.",
     "Bilder der ersten Untersuchung zeigen, dass das Äußere des Hauses im Geheimen einen wilden Umbau durchgemacht hat – es sieht heutzutage eher wie ein Miniaturschloss aus als wie ein Farmhaus."
    ]}
   ]},
   {t:"Das Hile-Anwesen", p:48, b:[
    "Hinter dem Polizeikontrollpunkt führt eine lange Schotterauffahrt, gesäumt von alternden Zierapfelbäumen, von der vorbeiführenden Straße bis zur Haustür des Farmhauses. Der Wind weht hier ruhig durch die Bäume, und faulige Zieräpfel liegen auf dem Boden. Maisfelder erstrecken sich zu beiden Seiten der Einfahrt, wogen im Wind und reichen bis an die Ränder des Grundstücks.",
    "Wer sich hineinschleichen will, muss die Zäune am Feldrand überklettern oder durchschneiden. Hat man die Felder durchquert, liegen Farmhaus, Scheune und Getreidesilo um einen Schotterhof in der Mitte.",
    {t:"bild", seite:47, x:"Kartenansicht im Pixelstil: Hof mit Scheune, Farmhaus und Getreidesilo, Zaun, Einfahrt und Kompassrose"},
    {t:"h", x:"Die Maisfelder"},
    "Mais, in alle Richtungen hunderte Meter weit. Der Boden zwischen den Reihen ist klumpig und trocken, und man stolpert leicht, wenn man nicht auf seine Schritte achtet. Die Sicht ist selbst tagsüber begrenzt. Es ist schwer, irgendetwas zu sehen, das nicht in derselben Reihe ist. Einer der Voyagers der Anomalie ist hier und pirscht sich an alle heran, die die Maisfelder betreten.",
    "Hinter dem Farmhaus liegen auf der einen Seite ein breites Stahlsilo und auf der anderen eine rote Scheune.",
    "**Wenn die Agenten verweilen,** bemerken sie leuchtende Augen und Kratzgeräusche im Schatten zwischen den Maisreihen, mal da, mal weg. Ein glänzender silberner Speer ragt über den Mais. Wenn Agenten laut etwas über den Speer sagen, hört Lorelei es und zieht ihn hastig außer Sicht.",
    {t:"h", x:"Lorelei"},
    "**Lorelei (sie/ihr)** ist eine schlanke, hochgewachsene Frau mit hellgrüner Haut, weißblondem, zu einem langen Pferdeschwanz zurückgebundenem Haar, rosa Lederrüstung und einem zusammenklappbaren, glänzenden silbernen Speer an der Seite. In Heroia ist sie als Elvorc bekannt, eine Mischung aus klassischer Fantasy-Elfe und -Orkin mit spitzen Ohren und ebenso spitzen Zähnen. Sie ist eine Expertin-Waldläuferin, die mühelos jedes Tier in Heroia aufspüren und jagen kann. Sie trägt das Waldwappen (Forest Crest). Lorelei funktioniert wie eine starke Kleine Anomalie mit Bedrohung: 4, Stabilität: 2.",
    "Lorelei pirscht sich an jeden heran, der das Gelände um das Farmhaus betritt. Sie versucht, unbemerkt zu folgen und zu erfahren, was sie kann von den Agenten: sowohl, was diese über den Großen Helden wissen, als auch, was immer sie über die echte Welt in Erfahrung bringen kann.",
    "**Wenn Lorelei die Agenten über Markus, die Voyagers oder Respektlosigkeit gegenüber der Natur reden hört,** gibt sie sich zu erkennen.",
    "**Wenn die Agenten ihr Informationen über Markus’ aktuellen Aufenthaltsort geben,** macht Lorelei sich sofort dorthin auf. Wenn die Agenten anbieten, Markus hierherzubringen, geleitet sie sie hinaus und wartet auf ihre Rückkehr.",
    "**Wenn die Agenten sich mit Lorelei anfreunden oder sie besiegen,** gibt sie ihnen das grüne, rautenförmige Waldwappen („*Nimm dies. Beweise damit dem König deinen Wert.*“), mit dem sich die Dachbodentür im Farmhaus teilweise entsperren lässt.",
    "**Wenn sie allein gelassen wird oder die Begegnung ergebnislos bleibt,** verschwindet sie im Maisfeld, um sich ihren Mit-Voyagers in allen künftigen Kämpfen gegen die Agenten anzuschließen.",
    {t:"kasten", h:"Lorelei kann, wie alle Voyagers, nur vorgefertigte Sprachzeilen sprechen:", b:[
     {t:"liste", x:[
      "„Ich bin Lorelei, Elvorc-Prinzessin des Waldwegs. Ich will euch nichts antun, es sei denn, ich muss.“",
      "„Ich durchsuche diesen Ort nach dem Großen Helden. Kennt ihr den Weg zu ihm?“",
      "„Mein Land – unsere ganze Welt – stirbt. Anfangs war es langsam, kleine Veränderungen. Vergessene Legenden, falsch erinnerte Namen und falsch gezähltes Gold. Doch nun zerfällt das Werk des Großen Helden, und immer mehr von der Welt vergisst, was getan wurde, und fällt zurück in den Zustand von früher.“",
      "„Der wahre Name des Großen Helden ist MARKY. Kennt ihr ihn?“",
      "„Ich werde nicht zulassen, dass meine Welt … mein Volk stirbt. Nicht, wenn eure so viel Leben zu geben hat.“",
      "„Möge der Waldweg euch führen!“ – Diese Zeile wiederholt sich, nachdem die anderen gesprochen wurden.",
      "Sie kann ihre Zeilen zu neuen Wendungen zusammensetzen („Wahr … Volk … geben … Lorelei … mehr … führen.“), aber das ist für sie ein mühsamer und schwieriger Vorgang."
     ]}
    ]},
    {t:"bild", seite:48, x:"Pixelbild des grünen Waldwappens (Forest Crest)"}
   ]},
   {t:"Die Scheune", p:50, b:[
    "Eine große rote Scheune voller alter Heuhaufen, morschen Holzes und Dutzender streunender Katzen. Eine schiefe Treppe führt hinauf zu einem Heuboden. Die Katzen sitzen mit leuchtenden Augen im Halbdunkel auf Stapeln von Heuballen und Kisten mit altem Gerät. Ein muskelbepackter Voyager liegt hier schlafend im Heu, schmiegt sich an seinen riesigen Streitkolben und ist von schlafenden Katzen bedeckt.",
    {t:"h", x:"Raymond"},
    "**Raymond (er/ihm)** ist ein bulliger, gehörnter Schlachtkleriker in voller Plattenrüstung mit einem gewaltigen Streitkolben (Maul) – in Heroia ist er als Höllenmuskel (Hellmuscle) bekannt, ein hünenhafter Dämon aus wogenden Muskeln und wenig Verstand, der jedes Mal zur Belustigung dient, wenn man ihm im Spiel begegnet. Wenn er geweckt wird, ist er begeistert kampflustig. Für ihn ist Kämpfen Spaß. An seinem Gürtel steckt ein rotes, rautenförmiges Wappen mit Bergen darauf.",
    "Raymond funktioniert wie eine starke Kleine Anomalie mit Bedrohung: 2, Stabilität: 4.",
    "**Wenn die Agenten ihn wecken,** springt er auf, schnappt sich seinen Streitkolben und baut sich stolz vor ihnen auf. Wie die anderen Voyagers kann Raymond nur in vorgefertigten Dialogzeilen sprechen: „Ihr weckt mich für einen guten Kampf, hoffe ich!“",
    "Er mustert die Agenten, hält dabei einen defensiven Abstand und sagt: „*Bring mich zum Großen Helden – oder koste meinen Streitkolben!*“",
    "Er gibt der Gruppe eine Gelegenheit, ihm günstig zu antworten, bevor er sich kopfüber in den Kampf gegen sie stürzt.",
    "**Wenn sie anbieten, ihn zum Großen Helden zu bringen,** streichelt er den Katzen ein paarmal kurz über den Kopf, bevor er sich den Agenten anschließt, bereit zum Aufbruch.",
    "**Wenn sie ihn offenbar in die Irre führen wollen,** greift er die Gruppe an.",
    "**Wenn er im Kampf besiegt wird oder dem Großen Helden persönlich begegnet,** übergibt er sein Bergwappen (Mountain Crest).",
    "**Wenn es den Agenten gelingt, das Bergwappen zu bekommen, ohne ihn zu wecken,** schläft er friedlich zwischen den Katzen weiter bis zur Begegnung.",
    {t:"kasten", h:"Raymond kann, wie alle Voyagers, nur vorgefertigte Sprachzeilen sprechen:", b:[
     {t:"liste", x:[
      "„Keine Sorge, dein Untergang dient einem guten Zweck. Nimm ihn an!“",
      "„Stell dich nicht zwischen mich und den Großen Helden!“",
      "„Ha-HA! Du bist ein feiner Partner in diesem gefährlichen Tanz!“",
      "„Was für eine Stärke! Du musst mir deine Trainingsroutine zeigen, nachdem ich DICH ZERQUETSCHT HABE!“",
      "„Es gibt keinen Konflikt, den ich nicht überwunden hätte! Dieser ist nicht anders!“ – Diese Zeile wiederholt sich, nachdem die anderen gesprochen wurden.",
      "Er kann seine Zeilen zu neuen Wendungen zusammensetzen („Nimm … Partner … nein … Untergang … ha-HA!“), aber das ist für ihn ein mühsamer und schwieriger Vorgang."
     ]}
    ]},
    {t:"bild", seite:49, x:"Pixelbild des roten Bergwappens (Mountain Crest)"}
   ]},
   {t:"Das Getreidesilo", p:51, b:[
    "Ein alterndes Stahlsilo, fast leer. Auf Bodenhöhe steht eine Tür einen Spalt offen und führt ins Innere. Eine dünne Schicht getrockneten Maises bedeckt den Boden, doch das Silo wurde für die neue Ernte geleert. Innen ist es dunkel, Licht fällt nur durch die Türöffnung.",
    {t:"h", x:"Kirbash"},
    "**Kirbash (sie/ihr)** ist eine treue und stolze Kriegerin in grünem Bänderpanzer, kunstvoll verziert mit allerlei weidenden Tieren, und führt eine feine Krummklinge. Sie trägt an ihrer Halskette ein gelbes, rautenförmiges Wappen mit Bildern wogender Felder. Kirbash funktioniert wie eine starke Kleine Anomalie mit Bedrohung: 3, Stabilität: 3.",
    "Anders als die anderen Voyagers hat Kirbash ihre Aufgabe und sich selbst fast völlig vergessen.",
    "**Wenn die Agenten ihr nicht feindselig begegnen** und ihr irgendeine Information über ihre Aufgabe, den Großen Helden oder auch nur sie selbst geben, besonders etwas Konkretes (etwa ein Bild des Großen Helden oder ein Stück einer Videospielanleitung mit ihrem Bild und Namen), steckt sie ihre Klinge ein und verneigt sich vor ihnen, überreicht ihnen das Ebenenwappen (Plains Crest) und sagt: „*Findet die anderen. Ich erinnere mich, dass es andere wie mich gab.*“",
    "**Wenn sie innerhalb einiger Minuten keine Informationen liefern** oder feindselig wirken, greift sie aus Frust und fehlgeleiteter Wut an und spricht dabei weiter rätselhaft ihre Sprachzeilen.",
    {t:"kasten", h:"Kirbash kann, wie alle Voyagers, nur vorgefertigte Sprachzeilen sprechen:", b:[
     {t:"liste", x:[
      "„Hallo, NAME. Ich bin Kirbash. Wir müssen uns beeilen zu ORT DER QUEST.“",
      "„Wir vergessen, wisst ihr. Die ganze Welt vergisst. Ich kann nicht zulassen, dass meine Welt zurück in die Dunkle Zeit fällt. Der Rat der Magier hatte recht, uns zu senden.“",
      "„Es ist wichtig, dass wir AKTIVE QUEST. Ich warte nicht länger auf FIGUR.“",
      "„Wir mussten gehen. Mussten hierherkommen. Die Zukunft der Welt hängt von SPIELERNAME ab.“"
     ]}
    ]},
    {t:"bild", seite:50, x:"Pixelbild des gelben Ebenenwappens (Plains Crest)"}
   ]},
   {t:"Das Farmhaus", p:52, b:[
    "Ein zweistöckiges weiß getünchtes Farmhaus mit einer großen Veranda, die zur Straße hinausschaut. Auf der Rückseite knarrt im Wind eine rostige Windmühle über einem alten Betonbrunnen.",
    "Bei näherem Hinsehen stimmen viele Details am Gebäude nicht. Das Dachgeschoss besteht aus großen, behauenen Steinen, die passend zum Rest des Hauses weiß gestrichen wurden. Etwa alle ein Dutzend Fuß ziehen sich dünne Öffnungen durch den Stein, wie Schießscharten einer alten Burg. Ein rot-gelber mittelalterlicher Wimpel hängt an der Rückseite der Windmühle.",
    "Jemand hat Dreck auf die Veranda und ins Haus getragen. Zerrissenes Polizeiabsperrband flattert im Wind vor der leicht offenen Haustür. Hier gibt es keine Anzeichen eines Kampfes. Ein grober Metallhumpen liegt im Hof zur Seite geworfen. Statt einer Verandalampe hängen eiserne Wandleuchter zu beiden Seiten der Haustür. Das ist nun die Domäne der Anomalie, und alles, was anomale Energie aufspüren kann, sieht, dass dieser Umbau nicht von Menschen vorgenommen wurde.",
    "Knirschende elektronische Musik ist durch die Tür zu hören, und hinter den Vorhängen im obersten Stockwerk des Hauses bewegen sich Lichter.",
    {t:"h", x:"Erdgeschoss"},
    "Dieser Ort ist verwüstet. Wohnzimmer, Küche und Esszimmer sind durchwühlt. Die Blutflecken im Wohnzimmer, versteckt zwischen der Zerstörung, sind mit Warnband abgesperrt. Es ist nicht genug Blut hier, als dass jemand daran verblutet sein könnte.",
    "Die Vitrine ist von einem massiven Einschlag in ihrer Mitte eingeschlagen. Auf der gegenüberliegenden Seite des Raums haben Dutzende kleine Löcher Tapete und Trockenbau aufgerissen, Zeugnisse eines Schrotschusses. Ein weiterer Krater ähnlicher Größe markiert die Wand nahe der Küche.",
    "Mehrere Glasflaschen stehen leer in einer Ecke, ihre Korken über den ganzen Raum verstreut – manche haben noch ein paar Tropfen leuchtend bunter Flüssigkeit darin, rot, blau oder grün. Ein feiner handgewebter Wandteppich mit zwei kämpfenden Drachen hängt schief an einem Dolch, der in die Wand gestoßen ist.",
    "Bei näherer Betrachtung folgen kleine Blutflecken einer Schneise im Chaos, die in den Flur und die Treppe hinaufführt.",
    {t:"h", x:"Obergeschoss"},
    "Das Obergeschoss wird durch ein unsichtbares, undurchdringliches und unzerstörbares Kraftfeld geschützt. Es ist immun gegen alle Einwirkungen, auch anomale. Wenn Agenten versuchen, mit einer Anomalie-Fähigkeit etwas im Obergeschoss zu erreichen oder zu zerstören, erscheint vor ihnen ein 2D-Menü. In pixeliger Schrift steht dort:",
    {t:"handout", art:"schild", h:"Menü", x:["ES FUNKTIONIERT NICHT. DU ERINNERST DICH AN DIE WORTE DES ALTEN MANNES: DAS TOR VON HEROIA ÖFFNET SICH NUR, WENN DIE DREI WAPPEN VEREINT SIND."]},
    "Chaos, das für auf diese Weise abgebrochene Würfe erzeugt wird, wird so bald wie möglich nur für die Chaos-Effekte Verderben oder Ausdehnen verwendet.",
    "Ein breiter Flur verbindet zwei kleine Schlafzimmer links (beide von den älteren Hiles als Büros genutzt), ein Elternschlafzimmer rechts und am Ende ein kleines Bad. Wie im Erdgeschoss ist alles durchwühlt oder zeigt Spuren nistender Wildtiere, die alle unirdisch wirken – lose regenbogenfarbene Federn, Tropfen silbernen Schleims, Haufen perfekt spiralförmiger Losung. Die Blutspuren ziehen sich durch die Verwüstung, über den Boden und den Flur entlang.",
    "An der Decke in der Mitte des Flurs versperrt eine massive Holzluke den Zugang zum Dachboden."
   ]},
   {t:"Der verschlossene Dachboden", p:53, b:[
    "Die Luke hat in der Mitte eine Fuge, wird aber von einem glänzenden Metallsiegel mit drei rautenförmigen Vertiefungen in der Mitte verschlossen gehalten. Es gibt keinen anderen Weg auf den Dachboden – weder Anomalie-Fähigkeiten noch gewöhnliche Werkzeuge können hier durchbrechen. Wenn Agenten versuchen, etwas anderes als die Wappen in die Vertiefungen zu legen, erscheint über der Tür ein 2D-Menü. In pixeliger Schrift steht dort:",
    {t:"handout", art:"schild", h:"Menü", x:["ES FUNKTIONIERT NICHT. DU ERINNERST DICH AN DIE WORTE DES ALTEN MANNES: DAS TOR VON HEROIA ÖFFNET SICH NUR, WENN DIE DREI WAPPEN VEREINT SIND."]},
    "**Wenn alle drei Heroia-Wappen (das Waldwappen, das Bergwappen und das Ebenenwappen) in das Siegel eingesetzt werden,** fällt es ab, und die Luke lässt sich öffnen. Eine vergoldete Wendeltreppe senkt sich auf magische Weise von oben herab. Haben die Agenten nicht alle Wappen, müssen sie auf dem Grundstück danach suchen. Ist das Siegel gebrochen, sind Anomalie-Fähigkeiten hier wieder einsetzbar.",
    {t:"h", x:"Markus’ Zimmer"},
    "Die Agenten können die Wendeltreppe hinaufsteigen und den Dachboden des Hile-Farmhauses betreten, das das Kinderzimmer von Markus Hile war. Der Raum ist staubig, sieht aber sonst genau so aus wie vor 20 Jahren.",
    "Die Anomalie steht am Fuß einer hölzernen Unterhaltungselektronik-Ecke unter einem alternden Röhrenfernseher und einer vergilbenden Spielkonsole, gegenüber vom Bett. Ein großes, vierflügeliges Fenster blickt hinaus auf eine pixelige Fantasy-Landschaft. In der Mitte des Raums schwebt Sentinel.",
    {t:"h", x:"Sentinel"},
    "**Sentinel (es/sein)** ist ein ätherischer Schatten in Gestalt eines hoch aufragenden Sensenmanns. Es schwebt bedrohlich mit bereitgehaltener langer Sense zwischen der Treppe und der Kassette, die hinter ihm vom untersten Regalbrett der Unterhaltungselektronik-Ecke leuchtet. Eine Schriftrollenhülle hängt an seinem Gürtel, durch die halbdurchsichtigen Gewänder teilweise sichtbar.",
    "Diese Schriftrolle ist das Dekret des Königs (King’s Decree), eine Schriftrolle, die jeden, der sie trägt, ermächtigt, zu tun, was immer er für das Überleben Heroias für das Beste hält. Alle Bürger des Landes (einschließlich der Voyagers) müssen diesen Befehlen des Trägers gehorchen.",
    "Sentinel verhält sich ganz wie sein Name nahelegt, als Wächter, der die Anomalie selbst bewacht. Es ist nur daran interessiert, Außenstehende fernzuhalten, die Anomalie zu schützen und den Großen Helden zurück in die digitale Welt zu bringen. Selbst mit allen Heroia-Wappen müssen die Agenten Markus hierherbringen oder sich direkt mit allen anderen Voyagers verbündet haben, um Sentinel zu überzeugen, sie passieren und zur Anomalie vordringen zu lassen.",
    "Die Anomalie selbst ist durch eine Runenbarriere, die aus der Spielwelt in unsere gezogen wurde, vor physischem Schaden und Manipulation geschützt. Sie kann mit herkömmlichen Mitteln weder beschädigt noch bewegt werden, solange Sentinel sie beschützt.",
    "**Berührt man die Anomalie,** wird man in die Spielwelt und direkt in die letzte Begegnung gezogen.",
    "**Wenn Sentinel angreift,** wirkt es zuerst einen mächtigen Zauber, um die Begegnung zu beginnen. Sentinel funktioniert wie eine starke Kleine Anomalie mit Bedrohung: 3, Stabilität: 10.",
    "Sentinel kann freier sprechen als die anderen Voyagers, ist aber weniger zu langen Gesprächen geneigt."
   ]}
  ],
  beg: [
   {t:"Begegnung", p:54, b:[
    "**Wenn sich jemand nähert,** löst die Kassette einen anomalen Effekt aus, der die Spielwelt stärker als je zuvor in unsere auszudehnen scheint und die Agenten, alle Figuren in der Nähe und alle verbliebenen Voyagers in die Welt des Spiels versetzt.",
    {t:"sp", x:[
     [
      {t:"h3", x:"Ausbruch (Jailbreak)"},
      "Das oberste Stockwerk des Farmhauses explodiert nach außen, während magische Energie hervorquillt und das gesamte Hile-Grundstück zu einer meilenweiten Fantasy-Landschaft streckt und verwandelt. Der Boden unter den Agenten glitcht, wenn sie ihn betreten, und jeder wird in eine eigene Zelle im Kerker fallen gelassen. Eine einzige Steintreppe führt hinauf zur Oberfläche. In jeder Zelle bei den Agenten sind verpixelte Versionen ihrer selbst in Schwarz und Grau. Jede trägt einen glänzenden silbernen Schlüssel zur Zelle. Sie spiegeln die Fähigkeiten und Waffen jedes Agenten wider und können nur besiegt werden, indem der Agent eine Schwäche an sich selbst erkennt, die er ausnutzen kann.",
      "In der einzigen anderen Zelle sitzen Markus’ Eltern weinend und verwirrt. Anders als die meisten Figuren im Spiel sprechen die beiden normal. Die silbernen Schlüssel sind alle identisch, und jeder kann auch ihre Zelle öffnen.",
      "Die Treppe hinaufzugehen führt zurück an die Oberfläche, durch Flügeltüren, die sich hinter einem Schloss mitten in einer gewaltigen Schlacht öffnen."
     ],
     [
      {t:"h3", x:"Boss Rush"},
      "Das Schloss, viel zu massiv, um unter normalen Umständen auf das Hile-Grundstück zu passen, ragt hinter dem Farmhaus auf. Glitchige, verpixelte Dunkelheit hängt am Horizont, während alle Bestien und Kreaturen des äußeren Heroia das Schloss umringen, da die Spielwelt jenseits dieses zentralen Bereichs langsam mit der Batterie stirbt.",
      "Hunderte Krieger in glänzender Rüstung halten eine wachsende Flut von Kreaturen zurück (riesige violette Würmer, Wyvern, Oger, eine Horde Schleime und mehr), die das Schloss umgeben. Auf einer Lichtung direkt hinter dieser Front stürmen alle überlebenden Voyagers (einschließlich Sentinel) auf die Agenten zu, bereit anzugreifen!",
      "**Wenn Sentinel den Agenten Zugang zur digitalen Welt gewährt hat,** ist die Prüfung dieselbe. Sentinel sagt den Agenten genau das: „*Der König muss wissen, dass ihr mächtig genug seid, Heroia wirklich zu beschützen und den Mantel der Retter des Reiches zu übernehmen. Wir müssen wissen, dass wir unseren Großen Helden wiedergefunden haben.*“"
     ]
    ]},
    {t:"h", x:"Endspiele"},
    "**Wenn es den Agenten gelingt, die Voyagers zu besiegen,** erstarrt die Spielwelt mit allen Bewohnern. Die Anomalie in Gestalt des Spielkönigs verlässt das Schloss und tritt auf die Agenten zu. Sie fragt, ob einer von ihnen (Markus hat Vorrang, falls er bei der Gruppe ist) bleiben will, um die Welt am Leben zu halten, da sie den Geist eines Menschen braucht, um wirklich zu existieren.",
    "**Wenn jemand in der Spielwelt bleibt,** ist die Anomalie erfreut, und die Welt beginnt zurückzukehren – die Kassette bleibt als beständiges Portal in die alternative Welt Heroia bestehen. Wenn niemand bleibt, fragt die Anomalie, ob den Voyagers erlaubt werden könnte, in der Welt weiterzuleben und ihr eigenes Volk zu werden, an einem Ort, der nicht dazu verdammt ist zu verblassen. **Wenn die Agenten zustimmen,** beginnen die Voyagers, sich an die moderne Welt anzupassen und zu versuchen, darin Anschluss zu finden – doch die Anomalie überträgt ihre gesamte Energie auf sie, und die Agency betrachtet dies als entkommene Anomalie.",
    "Die Anomalie hat keine weiteren Verhandlungsmasse-Trümpfe mehr und kann die Agenten nicht davon abhalten, sie zu fangen oder zu zerstören. Sie will den Hiles nichts Böses, und solange sie nicht vorzeitig zerstört wird, gibt sie Markus’ Eltern frei.",
    "**Wenn die Agenten besiegt werden,** entkommt die Anomalie, indem sie ihre gesamte Energie darauf verwendet, die Voyagers vollständig real zu machen und in die Welt hinauszuschicken."
   ]},
   {t:"Die Voyagers", p:55, b:[
    {t:"werte", h:"Sentinel", x:[["Bedrohung",3],["Stabilität",10]], b:[]},
    {t:"werte", h:"Lorelei", x:[["Bedrohung",4],["Stabilität",2]], b:[]},
    {t:"werte", h:"Raymond", x:[["Bedrohung",2],["Stabilität",4]], b:[]},
    {t:"werte", h:"Kirbash", x:[["Bedrohung",3],["Stabilität",3]], b:[]},
    {t:"kasten", h:"Rundenbasierter Kampf", b:[
     "Während der Begegnung „Boss Rush“ kann die Anomalie den Voyagers und Agenten gleichermaßen die Beschränkungen des rundenbasierten Teamkampfs auferlegen, wie er in Voyagers of Heroia verwendet wird.",
     "Die Agenten und die Voyagers handeln abwechselnd gegeneinander, jeweils als Einheiten. Die Voyagers handeln zuerst und greifen als eine Einheit an; die Agenten müssen dann eine gemeinsame Strategie abstimmen, um Fähigkeiten oder Anträge auf Realitätsanpassung zur Verteidigung einzusetzen. Danach dürfen die Agenten als eine Einheit handeln und sich auf einen Plan einigen, der eine einzige Realitätsanpassung oder Anomalie-Fähigkeit verwendet.",
     "Während dieser Konfrontation haben die Voyagers Zugriff auf ihre Spezialtechniken. Dazu gehören **Beschwörungen (Summons)**, die als einmalige Elementarangriffe wirken, etwa ein Regen aus Feuerbällen oder riesige Stacheln, die aus dem Boden darunter hervorbrechen; **Taktiken (Tactics)**, bei denen Paare von Voyagers ihre Fähigkeiten oder Waffen gemeinsam einsetzen; und **Gegenstände (Items)**, die sie von andauernden Effekten heilen können, die durch die Fähigkeiten der Agenten verursacht wurden. Die Voyagers haben außerdem 3 Alleheil-Tränke (Heal-All), die bei Verwendung allen Voyagers 1 Stabilität zurückgeben."
    ]}
   ]}
  ],
  nach: [
   {t:"Ausgänge", p:56, b:[
    {t:"ausgang", x:[
     {h:"Anomalie gefangen", b:[
      "Die Agency nutzt sie, um eine Abteilung für Weaponized Nostalgia in R&D anzuführen, was durch eine Übernahme von DayJump Studios durch die Agency zur Veröffentlichung von „Voyagers of Heroia: Quest for the Primordial Starseller | REMASTER - 30th Anniversary Edition“ führt."
     ]},
     {h:"Anomalie neutralisiert", b:[
      "Im folgenden Monat hört jeder im Umkreis einer Meile um das Hile-Farmhaus, der Elektronik benutzt, ferne Schreie aus Lautsprechern oder Kopfhörern und sieht beim Hochfahren auf den Bildschirmen verpixelte Lichtgestalten, die verblassen."
     ]},
     {h:"Anomalie entkommen", b:[
      "Die Voyagers werden in den letzten Augenblicken ihrer Welt vollständig real und werden zu echten körperlichen Wesen. Zum ersten Mal können sie die Kassette mit sich tragen und in die nahen Felder und Wälder entkommen.",
      "**Wenn die Agenten sich entschieden haben, sie ziehen zu lassen,** ist ihre Zukunft durch die Agenten, die eine Beziehung zu ihnen pflegen, stark beeinflussbar.",
      "**Wenn sie entkamen, indem sie die Agenten besiegten,** nehmen die Voyagers eine neue Quest auf: ihre gefallene Welt wieder auferstehen zu lassen. In der Gegend gibt es regelmäßige Sichtungen seltsamer Kreaturen und zwielichtiger Gestalten, die nachts auf der Landstraße umherstreifen, aber es gibt keine Vermissten und keine ungewöhnlichen Tötungen mehr."
     ]}
    ]},
    {t:"h", x:"Lose Enden"},
    "**Die Eltern:** Beide sind im Ruhestand und wollen den Rest ihres Lebens in Ruhe verbringen, nicht als seltsame Verschwörungstheoretiker auftreten, denen wohl niemand glauben wird. Sie sind Lose Enden, aber wenn man sie bedrängt, werden sie die ganze Situation so weit in sich verschließen, dass sie ihr Wissen nie verbreiten. Wird die Anomalie zerstört, bevor sie gerettet sind, werden die Eltern als Bewohner ihrer digitalen Welt mit ihr zerstört.",
    "**Markus, der Große Held:** Wenn Markus hinzugezogen wurde, um bei der Bewältigung der Anomalie zu helfen, wird er ein kniffliges Loses Ende, das es zu bereinigen gilt. Wird die Anomalie gefangen, ist er für die Agency von besonderem Interesse für ihr bevorstehendes Weaponized-Nostalgia-Projekt in R&D und würde eingeladen, eine feste Stelle in der Agency anzutreten."
   ]},
   {t:"Vault-Anforderung", p:57, b:[
    {t:"anforderung", h:"Das Dekret des Königs", en:"King’s Decree", preis:9, b:[
     "Diese Schriftrolle trägt das Siegel des Königs von Heroia und enthält drei Befehle. Indem du einem Ziel die königliche Inschrift und eine beliebige Anzahl der Befehle vorliest, wird es gebunden zu gehorchen:",
     {t:"liste", x:[
      "Das Ziel muss sich dir im Zweikampf stellen, bis zur Aufgabe.",
      "Das Ziel muss dich für eine lange und gefahrvolle Reise ausstatten.",
      "Für die nächste Woche muss das Ziel für eine gewöhnliche Tätigkeit deiner Wahl eine Steuer auf sich selbst erheben (*das erste Ei jedes Huhns, einen Dollar jedes Mal, wenn du fluchst usw.*) und alle auf diese Weise eingenommenen Güter an dich abtreten."
     ]},
     "Nachdem du ein Ziel gezwungen hast, einem der Befehle zu folgen, markiere ihn als verbraucht. Sind alle Befehle verbraucht, zerfällt die Schriftrolle zu Asche."
    ]}
   ]},
   {t:"Anomalie-Fähigkeit", p:57, b:[
    {t:"faehig", h:"Nebenquest", en:"Side Quest", x:"Bitte einen Passanten um einen Gegenstand, den du suchst. Sage zu jemandem: „Heil und wohlbegegnet. Wisst Ihr, wo ich … finden kann“ und nenne dann einen Gegenstand, den du suchst. Würfle auf **Beharrlichkeit**.", erg:[
      ["ok","**Bei Erfolg** weiß das Ziel etwas über den gesuchten Gegenstand, hat Zugang dazu oder besitzt ihn – du wählst. Das Ziel tauscht ihn dir gegen 9 von etwas ein, das du derzeit nicht hast, aber früher am Tag gesehen hast (*Bustickets, Schokoladencupcakes, Fotos von Männern namens Charles usw.*). Dein GM wählt."],
      ["plus","Für jede weitere {3} verlangt das Ziel eins weniger von dem, was du nicht hast, bis zu einem Minimum von null."],
      ["nein","**Bei Fehlschlag** weiß das Ziel nichts über den gesuchten Gegenstand, hat keinen Zugang dazu und besitzt ihn nicht. Es weigert sich lautstark, von deiner Seite zu weichen, bis du 100 von etwas gesammelt hast, das du derzeit nicht hast, aber früher am Tag gesehen hast. Dein GM wählt."]
     ], b:[]}
   ]}
  ]
 }
};
/* GESTALTUNG:
 - Seitenzahlen = Dateinummer SNNN (Eröffnungsseite S. 40); die gedruckten Fußzeilen im Buch stehen jeweils eins höher.
 - S. 40: Eröffnungsseite ist ein Chat-Dialog im Pixel-Stil (König Ormodia links/lila Krone, Sentinel rechts/orange Kapuze), auf Sand-/Pixel-Wellen-Hintergrund; handout art:"chat". Hochaufgelöstes Bild S040-hd.jpg.
 - Optionale Ziele S. 44: das Buch hängt per Pfeil an das letzte Ziel (+3 Verweise, Bewegungsmuster) einen gelb-orange umrandeten Pixel-Kasten „NULL“ (Cheat-Code). Der Text steht hier im x des letzten Ziels nach dem Gedankenstrich; ggf. als eigene Karte daneben gestalten.
 - Chaos-Effekte: „Manifestieren“ enthält drei Kleine Anomalien (Barbipede, Shimmersquirrel, Bandit) im x, getrennt durch \n\n (Absätze). Neu (▲): Zufallsbegegnung, Schnellladen. Sonderregel als Kasten (Tropfen-Symbol) in sonder.
 - S. 44 „Anreise nach Blackford County“ steht im Buch als Kasten unter den Einleitungsabsätzen von ERMITTLUNG.
 - S. 47: Hofkarte im Pixelstil (Bild-Platzhalter). Ortsüberschriften im Buch gelb mit rotem Rand (Pixelstil).
 - S. 48–50: je Voyager ein Pixel-Porträt (Lorelei, Raymond, Kirbash) neben der Sprachzeilen-Liste (als Kasten mit Liste umgesetzt) und unten ein großes Pixel-Wappen (grün/rot/gelb) – als bild-Blöcke mit seite 48/49/50 vermerkt.
 - Sentinel-Porträt und Bedrohung/Stabilität: S. 54 „DIE VOYAGERS“ zeigt vier Pixelporträts (Sentinel 3/10, Lorelei 4/2, Raymond 2/4, Kirbash 3/3) mit Lebensbalken; als vier werte-Blöcke ohne Text.
 - Menü-Texte (S. 51, 52) als handout art:"schild" in rotorangener Pixelschrift.
 - S. 53 Begegnung: Ausbruch/Boss Rush als zwei Spalten (sp); Endspiele darunter über volle Breite.
 - S. 55 Ausgänge: drei Einträge (gefangen, neutralisiert, entkommen); „entkommen“ hat zwei Unterfälle (fett).
 - Vault-Anforderung und Anomalie-Fähigkeit stehen beide auf S. 56 (Dateinummer). S. 57 ist bereits die Eröffnungsillustration des nächsten Einsatzes (Pizzeria) und gehört nicht zu diesem Einsatz.
*/
