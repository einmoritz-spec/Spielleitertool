/* The Vault – ZBARRO #641 (Buch S. 58–75). Übersetzung aus dem Englischen. */
window.TA_VAULT = window.TA_VAULT || {};
TA_VAULT["zbarro-641"] = {
 cw: "Gore, Körperhorror, Ratten, Zwangsfütterung, Leichen",
 autor: "Logan Dean",
 chaosP: 63,
 reiterNamen: {profil:"Anomalie-Rezept", vor:"Vorbacken", erm:"Ein Stück Rätsel", beg:"Bestellung fertig", nach:"Verdauung"},
 chaos: [
  {k:2, n:"Verderben", en:"Corrupt", x:"Alle Veränderungen müssen auf irgendeine Weise Pizza oder ihre Zutaten betreffen."},
  {k:4, n:"Manifestieren", en:"Manifest", x:"#641 nennt seine **Teigdoppelgänger** (Doughplegangers): Puppen aus Fleisch und Teig, geschaffen aus den Leichen seiner Opfer. #641 kann sie gewöhnliche Aufgaben erledigen oder Informationen sammeln lassen, aber aus der Ferne nur jeweils einen direkt steuern. Meist sind es Täuschende Anomalien, sie können aber ihre realistische Gestalt opfern, um andere Zwecke zu erfüllen. Je mehr gleichzeitig geschaffen werden, desto mutiger werden sie."},
  {k:5, n:"Anziehen", en:"Attract", x:"Der Geruch einer unglaublich leckeren Pizza lockt Menschen in die Nähe eines Eingangs zum Sub-Basement, sodass #641 sie hineinziehen kann. Manchen droht, verschlungen zu werden, andere müssen als „Kunden“-Publikum im vernagelten Zbarro herhalten."},
  {k:6, n:"Ausdehnen", en:"Expand", x:"Wenn #641 sich bedroht fühlt oder genug Zeit hat, kühn zu werden, zieht es womöglich in benachbarte Geschäfte und beginnt, auch dort die Angestellten zu ersetzen. Wenn es den Bau eines neuen Standorts abschließt, wirkt es Ausdehnen und lässt seinen Hauptkörper dorthin umziehen."},
  {k:8, n:"Versetzen", en:"Displace", x:"Wenn ein Agent von der Pizza gegessen hat oder in körperlichen Kontakt mit der Pizza-Schlange kommt, kann #641 dessen Geist kapern und die Kontrolle über den Körper übernehmen. Währenddessen findet sich der Agent in einem brandneuen Zbarro wieder, neben sich ein großes sprudelndes Getränk und eine riesige, triefende Pizza, bereit zum Essen. Die Beziehungen des Agenten sind da (mit schwarzen Löchern als Augen) und singen „Happy Birthday“. Die Luft ist erfüllt von reiner Freude."}
 ],
 ziele: [
  {art:"bel", n:3, x:"wenn sich jeder Agent zum ersten Mal verkehrt herum auf einen Stuhl setzt"},
  {art:"bel", n:1, x:"für jeden historischen Gegenstand, der untersucht wird (Grundrisse, Fotografien, Prospekte usw.)"},
  {art:"bel", n:1, x:"für die ersten 3 Wortspiele mit Pizza, die ein Agent macht"},
  {art:"ver", n:3, x:"für jedes Pizza-Wortspiel nach dem dritten"}
 ],
 sonder: [
  {t:"kasten", cls:"pizza", h:"Sonderregel", b:["Wer eine kleine Menge des von #641 kontrollierten Teigs oder der Pizza isst oder probiert, öffnet seinen Geist für #641. #641 weiß dann immer, wo die Person ist, und kann ihre Gefühle lesen."]}
 ],
 reiter: {
  profil: [
   {t:"Fundstück", p:59, b:[
    {t:"bild", seite:58, x:"Eröffnungsseite: weitergeleitete E-Mail der Geschäftsleitung mit Zeitungsartikel, Titelschriftzug ZBARRO#641, Autor Logan Dean"},
    {t:"handout", art:"brief", h:"WG: sie sind wieder aufgetaucht", x:[
     "**Von:** MANAGEMENT <mgmt@tagency.nul>",
     "**An:** mich",
     "Stellt ein Team zusammen und entsendet es sofort. Jede anomale Aktivität ist unverzüglich direkt an die Geschäftsleitung zu melden. Der Wuhan-Baxter-Konzern darf KEINERLEI anomales Material bergen oder zurückholen.",
     "Zeit ist der entscheidende Faktor. Die Fehlertoleranz liegt bei null",
     "Weitergeleitete Nachricht:"
    ]},
    {t:"handout", art:"zeitung", h:"VERMISSTE ARBEITER NACH SECHS TAGEN ZURÜCK", x:[
     "Ternion City",
     "Berichterstattung des yourTC3-Breaking-News-Teams",
     {t:"bild", src:"04-zbarro-641-hochhaus", pos:"links", w:190},
     "Polizei und Ermittler können heute Nacht aufatmen: Zwei Auftragnehmer und ein Bauinspektor, die bei einer Routineinspektion der Firmenzentrale von Wuhan-Baxter in Midtown verschwunden waren, sind wohlbehalten zurückgekehrt.",
     "Das Gebäude von Wuhan-Baxter ist wegen der rätselhaften Natur des Unternehmens und seiner vielfältigen Projekte seit Langem Gegenstand von Spekulationen. Die Promenade in der Lobby des Gebäudes, Mitte der 1980er als Luxus-Einkaufszentrum erbaut, wurde kürzlich für den Umbau zu einer Mittagshalle und einem Coworking-Zentrum genehmigt. Der Auftrag für dieses Projekt ging an O’Rourke Construction aus Newark, NJ.",
     "Am vergangenen Montagnachmittag traf Bauinspektor Hal Utrecht zu einer Routineinspektion der Untergeschosse und des Fundaments im WB-Gebäude ein. In Begleitung zweier O’Rourke-Mitarbeiter, Jacob Gran und Tilda Lartinez, wagte sich Utrecht in die Tiefen des Gebäudes. Alle drei meldeten sich zum Ende des Arbeitstags nicht zurück.",
     "Die Untersuchungen der Polizei im Gebäude blieben zunächst ergebnislos. Quellen aus dem Umfeld der Ermittlungen sagen, WB habe außerdem seinen internen Notfalldienst, die ARC Division, mit einer unabhängigen Untersuchung beauftragt.",
     "Heute Morgen wurden alle drei Vermissten unversehrt in der Lobby des Gebäudes gefunden. Die Behörden haben sie zur ärztlichen Untersuchung und Befragung in ein nahe gelegenes Krankenhaus gebracht. Zeugen vor Ort sagen, die vermissten Arbeiter hätten ruhig gewirkt, seien aber „sehr blass“ gewesen und hätten sich den eintreffenden Ersthelfern gegenüber nicht verbal verständigen können.",
     "Mehr zu dieser Geschichte, sobald sie sich entwickelt.",
     "VON: LOGAN DEAN"
    ]}
   ]},
   {t:"Überblick", p:60, b:[
    {t:"profil",
     lead:"Zbarro #641 ist ein stillgelegtes Italo-Restaurant für Firmenkunden in der Promenade im Untergeschoss der Wuhan-Baxter-Firmenzentrale, das in den letzten 25 Jahren ein Bewusstsein entwickelt hat. Ursprünglich nahm #641 eine körperliche Gestalt aus abgelaufenem Pizzateig an und hat seither die Kunst perfektioniert, nahezu perfekte Kopien von Menschen aus Leichen und Teig zu erschaffen: Teigdoppelgänger (Doughplegangers). Mit jedem Opfer wachsen #641s Intelligenz und sein Wissen über die Außenwelt. Durch seine jüngsten Opfer hat es etwas namens „Gewerbeimmobilien“ kennengelernt und einen Plan in Gang gesetzt.",
     fokus:"Bewunderung, Respekt und Zufriedenheit, die dem Essen und dem Betrieb von Zbarro #641 gelten.",
     domaene:"#641s Domäne ist das gesamte ehemalige Zbarro-Areal, hinter einer verstärkten Mauer in der Wuhan-Baxter-Promenade versiegelt. Die konzentrierteste anomale Resonanz des Restaurants liegt im begehbaren Kühlraum, wo das rohe Bewusstsein von #641 haust.",
     impuls:"Zbarro #641 als erfolgreiches und befriedigendes Speiselokal wiederzueröffnen und zu betreiben. Bis vor Kurzem bedeutete das, Menschen ins Sub-Basement zu locken, sie in Teig zu ersticken und ihre Körper durch den Boden des Kühlraums zu schleifen bzw. zu quetschen, um sie als Kunden und Personal wieder aufzubauen."},
    {t:"h", x:"Geschichte"},
    "Zbarro #641 wurde im Mai 1985 in der neu gebauten Wuhan-Baxter-Promenade eröffnet, einem High-Tech-Einkaufszentrumskonzept, das das ultimative Einkaufserlebnis des 21. Jahrhunderts sein sollte. Nachdem das Konzept floppte, weil es „nur ein weiteres Einkaufszentrum“ war, gab der Konzern den Raum nach und nach auf und ließ ihn zu einer aufgemotzten Kantine verkommen.",
    "Im Juli 1997 entkam eine Testperson aus dem Versuchslabor von WB auf Ebene sechs. Als sie Zbarro #641 betrat, wurde ihre Notsicherung ausgelöst, eine Detonation mit mehreren Todesopfern. Das Notfall-Eindämmungsprotokoll von Wuhan-Baxter vertuschte den Vorfall; es wurde ein Gasleck gemeldet und das Restaurant hinter einer Mauer versiegelt. In den folgenden Jahren geriet das Restaurant in Vergessenheit. Ein Außenteam der Triangle Agency untersuchte den Vorfall damals und fand keinen Hinweis auf eine Anomalie.",
    "#641 wurde in jener Nacht des Jahres 1997 in diese Welt geboren. Als die entkommene Testperson und die Kunden, die das Pech hatten, in der Nähe zu sein, starben, verschmolzen die gesammelten Gedanken und Gefühle dieser Opfer zu einem brodelnden Bewusstsein. Die Leichen wurden von Wuhan-Baxter in den begehbaren Kühlraum des Restaurants gebracht, um dort auf den Abtransport zu warten; dort ließ sich dieses Bewusstsein nieder und sickerte in das Gebäude ein, wodurch künstlich ein Hollow entstand: eine Anomalie ohne Fokus.",
    "Nach der Säuberung und Versiegelung des Restaurants wagte sich der frisch geprägte Hollow aus seiner Gruft und stocherte an allerlei Krimskrams im hinteren Teil des Restaurants herum. Dabei schaltete er den Strom eines Fernsehers mit Videorekorder ein und startete ein Schulungsvideo für Zbarro #641. Mit gebannter Aufmerksamkeit formte sich dieses wilde, losgelassene Bewusstsein um die Vorstellung, dass es tatsächlich Zbarro #641 sei, und machte sich daran, die Dinge wieder in Ordnung zu bringen, indem es ein funktionierendes Lokal wurde. Diese Verpflichtung wurde sein Fokus.",
    "Um dieses Ziel zu erreichen, entführt und assimiliert #641 seit Jahren Menschen aus dem Gebäude und der Umgebung. #641 assimiliert diese Opfer in sein Bewusstsein, bevor es ihre inneren Organe durch eine gleich große Menge abgelaufenen Pizzateigs ersetzt, den es kontrollieren kann. Diese Doppelgänger können sich bewegen und kurze Sätze sprechen, ohne dass #641 sie direkt steuert, „denken“ aber im technischen Sinn nicht über die einfache Anweisung hinaus, die sie erhalten haben.",
    "Im vergangenen Dezember sicherte die Gebäudeverwaltung die Finanzierung für den Umbau der Promenade im Untergeschoss zu einer eigenen Firmenkantine mit Coworking-Bereich. Die Bauarbeiten begannen Anfang dieses Monats.",
    {t:"h", x:"Erscheinung"},
    "#641 (die Anomalie) hat keine körperliche Gestalt und zeigt sich stattdessen entweder als Masse aus Pizzateig in der groben Form einer großen Schlange oder indem es einen seiner vielen „Kunden“ bewohnt.",
    "Diese Teigdoppelgänger sind die Früchte von #641s grausigem Wiederaufbauprozess, die meisten sitzen an den Tischen oder hängen in der Küche. #641 kann problemlos einen dieser Körper zur selben Zeit bewohnen und kurzzeitig mit etwas Anstrengung alle auf einmal.",
    {t:"h", x:"Aktuelle Lage"},
    "Es ist sechs Tage her, dass #641 den Bauinspektor und die zwei Auftragnehmer genommen hat, und 12 Stunden, seit ihre Teigdoppelgänger zurückgebracht wurden. #641 hat die Teigdoppelgänger der vermissten Arbeiter zurückgeschickt, um die Ermittler davon abzuhalten, seine Höhle zu entdecken.",
    "Die Arbeiten am Umbau wurden angehalten, während Auftragnehmer, Gebäudepersonal und Polizei nach den vermissten Arbeitern suchten, sollen aber in 24 Stunden wieder aufgenommen werden. Das Gelände ist sehr belebt, und #641 achtet darauf, nicht zu viel Aufmerksamkeit auf sich zu ziehen.",
    "Der kürzliche Erwerb des Bauinspektors hat #641 eine Fülle von Informationen über Bauvorschriften und Immobilien beschert. Deshalb hat #641 begonnen, einige seiner Schöpfungen in die Welt hinauszuschicken, um seinen Plan voranzutreiben, das Restaurant im Wege des Unternehmertums wiederzueröffnen."
   ]}
  ],
  vor: [
   {t:"Morgenbesprechung", p:61, b:[
    {t:"morgen", x:[
     "Eine Beziehung, die einem Agenten nahesteht, arbeitet für eine Tochtergesellschaft von Wuhan-Baxter und spricht beim Essen über die vermissten Arbeiter.",
     "Eine Nachrichtenübersicht im Radio berichtet über die „Pizzakriege von Ternion City“, einen informellen Wettbewerb zwischen verschiedenen Restaurants der Stadt, um den typischen Pizzastil der Stadt zu ermitteln.",
     "Die Kabelfernsehsendung „All American Mall Disasters“ hat in einer neueren Folge den Zbarro-Vorfall von 1997 behandelt. Das wurde in der Montagmorgen-Pflichtbesprechung zum Reality-Fernsehen vermerkt."
    ]}
   ]},
   {t:"Einsatzbesprechung", p:62, b:[
    {t:"vorlesen", b:[
     "Vor sechs Tagen verschwanden zwei Auftragnehmer und ein Bauinspektor im Sub-Basement der Wuhan-Baxter-Firmenzentrale, während sie an einem Umbau der öffentlichen Promenade des Gebäudes arbeiteten. Vor zwei Tagen tauchten sie wieder auf. In den Medien wurden sie als „blass“ und „ruhig“, ansonsten aber nicht ansprechbar beschrieben.",
     "Obwohl keine äußeren Verletzungen zu erkennen waren, wurden die Zurückgekehrten zur Beobachtung ins St. Mary’s Hospital gebracht, nachdem Sanitäter festgestellt hatten, dass ihnen trotz ihrer normalen Gestalt sämtliche Knochen fehlten. Die Agency vermutet, dass dies auf eine Anomalie zurückgeht.",
     {t:"sp", x:[
      [{t:"h3", x:"Der Zbarro-Vorfall von 1997"},
       "Ein Unfall in der Promenade im Jahr 1997 könnte mit der aktuellen Lage zusammenhängen.",
       "Der offizielle WB-Vorfallbericht nennt ein Gasleck und eine darauffolgende Explosion als Ursache. Ein Pizzarestaurant wurde offenbar zerstört. Berichte von Polizei und Brandermittlern (Wochen nach dem WB-Bericht datiert) stimmen dieser Einschätzung zu.",
       "14 Todesopfer wurden gemeldet, aber nur 13 identifiziert. Die Triangle Agency untersuchte den Vorfall damals, fand aber keine Anomalie. Möglicherweise hat das damalige Außenteam etwas übersehen.",
       "Die mangelnden Details zu diesem Vorfall sind für die Privatwirtschaft nicht überraschend, deuten aber auf ein gewisses Maß an Fehlverhalten hin."],
      [{t:"h3", x:"Die Geschichte der WB-Promenade"},
       "Die Promenade, früher ein Einkaufszentrum mit Food Court, wird komplett umgebaut, um den Raum in ein Coworking-Zentrum und eine Mittagshalle zu verwandeln.",
       "Das Archiv im Rathaus von Ternion City verwahrt die Unterlagen zu Bau und Umbauten des Gebäudes. Möglicherweise könnte etwas am Gebäude selbst erklären, wie die Anomalie seit 1997 verborgen bleiben konnte."]
     ]},
     {t:"kasten", cls:"wb", h:"Wuhan-Baxter", b:[
      "Wuhan-Baxter ist ein multinationaler Megakonzern mit einer Geschichte, die bis ins 19. Jahrhundert zurückreicht. Heute hat er Tochtergesellschaften in praktisch jeder Branche der Wirtschaft. Im Lauf seiner langen und ruhmreichen Existenz wurde er weltweit in ökologische Gräueltaten, Menschenrechtsverletzungen und Kriegsprofiteurtum verwickelt. Schlimmer noch: Er hat bekanntermaßen bei mindestens zwei jüngeren Gelegenheiten anomales Material erworben. (Es laufen Operationen, um dieses Material zurückzuholen.)",
      "In Ternion City macht sich der Einfluss von Wuhan-Baxter am häufigsten in Angelegenheiten von Bau, Grundstücksrechten und Rohstoffabbau bemerkbar. Selbst Hausbesitzer, die etwas so Harmloses wie einen Aufstellpool anbauen wollen, haben im Verlauf des Verfahrens oft irgendwann mit einem Wuhan-Baxter-Vertreter zu tun. Zuletzt machte das Unternehmen Schlagzeilen, als es ein Gerichtsbeschluss mitten im Bau dazu zwang, den Namen eines geplanten kombinierten Kinderbetreuungs- und Veranstaltungszentrums von „WB Kids“ in „Downtown Ternion City Combination Child Care and Event Center Presented by Wuhan-Baxter Corporation“ zu ändern.",
      "Das Unternehmen zeigt ein reges Interesse an unserer Agency, und unsere eigenen Unterlagen zu seinen Aktivitäten und Absichten sind bestenfalls unvollständig. Es ist daher davon auszugehen, dass es genug weiß, um unseren Betrieb zu gefährden."
     ]}
    ]}
   ]}
  ],
  erm: [
   {t:"Rathaus", p:64, b:[
    "Agenten können die Abteilung für Unterlagen im Rathaus besuchen, um vorläufige Informationen zu sammeln.",
    {t:"h", x:"Sonya Greenberg"},
    "Sonya Greenberg (sie/ihr) ist die Verwalterin der Unterlagen und hilft den Agenten gern, auf Nachfrage die Unterlagen zum Wuhan-Baxter-Gebäude zu finden, auch wenn sie von den Vermisstenfällen weiß und sich nach den Absichten der Agenten erkundigen wird.",
    {t:"hinweis", art:"gew", h:"Das erfahren Agenten von Sonya, wenn sie einen guten Grund dafür haben:", x:[
     "Die Unterlagenabteilung begann 2001 mit der Digitalisierung ihrer Akten, konzentrierte sich aber hauptsächlich auf aktuelle Grundrisse. Alle Akten von 1990 oder früher liegen noch in Aktenschränken.",
     "Das Wuhan-Baxter-Gebäude, 1922 als Firmensitz der Baxter Company erbaut, ist ein Wahrzeichen der Skyline der Stadt. Die Promenade wurde 1985 fertiggestellt.",
     "Der 1984 für die Genehmigung eingereichte Grundriss zeigt deutlich vier zusätzliche Imbissstände, die in der heutigen Promenade nicht vorhanden sind. Der Akte liegen Fotografien bei, die Sandwich Witch, Smoky’s Canadian BBQ, Milk Corner und das Zbarro zeigen, das der Ort des „Gaslecks“ war."
    ]},
    {t:"hinweis", art:"anom", h:"Das erfahren Agenten nur, wenn sie Sonyas Vertrauen gewinnen, mindestens einen Bachelor in Stadtplanung haben oder anomale Methoden einsetzen:", x:[
     "Die Prüfung der Protokolle des Bauinspektors (nicht digitalisiert, in einem großen Band tief in der Unterlagenabteilung) zum Wuhan-Baxter-Gebäude zwischen 1997 und 1998 zeigt eine deutliche Verringerung der gemeldeten Quadratmeterzahl der Promenade, aber keine Veränderung der äußeren Form. Sonya würde so etwas normalerweise als möglichen Steuerbetrug melden, aber die Stadt unternimmt nie etwas, das WB schaden würde.",
     "Seltsamerweise enthalten die Unterlagen nicht den ursprünglichen Grundriss (von 1922). Sonya erklärt, die Unterlagenabteilung habe sich früher im Keller des Rathauses befunden und sei 1971 überflutet worden, wobei viele der ursprünglichen Unterlagen der Stadt zerstört wurden.",
     "Sonya hat am häufigsten mit WB zu tun, weil deren Leute regelmäßig die Unterlagen zu einem Wolkenkratzer in der Innenstadt anfordern, den es ihres Wissens nicht gibt. Das ist der Sitz der Triangle Agency in Ternion."
    ]}
   ]},
   {t:"Wuhan-Baxter-Hauptquartier", p:65, b:[
    "Die Zentrale von Wuhan-Baxter ragt über der Straße auf. Die Lobby aus Glas und Marmor führt zu den Aufzügen, die Angestellte zu den Büros und Laboren darüber bringen, sowie zu einer Rolltreppe hinab zu einer Promenade. Das Gebäude hat 4.500 Angestellte auf seinen 66 Ebenen. Alle Ebenen über der Lobby sind nur mit Schlüsselkarte zugänglich und für Personal, das nicht zu Wuhan-Baxter gehört, tabu.",
    "Die Promenade ist teilweise gesperrt, da Arbeitstrupps sie komplett umbauen und neue Einzelhandelsflächen und Gastronomieangebote hinzufügen, um die Laufkundschaft des Gebäudes zu steigern.",
    "Sofern nicht anders angegeben, werden alle Bereiche des Gebäudes per Videoüberwachung kontrolliert. Zutrittsbeschränkte Türen erfordern elektronische Schlüsselkarten aus dem Sicherheitsbüro.",
    {t:"h", x:"Lobby und Promenade"},
    "In der Mitte der Lobby steht ein umlaufender Empfangstresen aus Marmor, an dem ein Sicherheitsbeamter eine Reihe von Überwachungsmonitoren im Blick hat. In der Lobby befinden sich das Sicherheitsbüro und das Vermietungsbüro, und die einzigen Geschäfte, die in der Promenade im Umbau geöffnet sind, sind CopyTown und Brad’s Chicken and Fish.",
    "Die Empfangsperson (Clea [sie/dey] tagsüber, Markus [er/ihm] nach Feierabend) weist Agenten gern den Weg zur Promenade oder zu jedem Lobbybüro und kennt sich in der unmittelbaren Umgebung des Gebäudes recht gut aus.",
    "Auf die Geschichte des Gebäudes angesprochen, sind dey nicht besonders hilfreich, wissen aber, dass die Lobby-Promenade einst sehr beliebt war und dass der Umbau sie hoffentlich wiederbeleben wird. Kein Angestellter spricht über Geschäfte von Wuhan-Baxter oder darüber, was sich in den oberen Etagen befindet.",
    "**Zu viele Fragen** an einem überwachten Ort erregen die Aufmerksamkeit des WB-Sicherheitsdienstes sowie von Carnby und Laroche (siehe St. Mary’s Hospital), die den Agenten folgen werden.",
    "**Das Betreten unbefugter Bereiche** und das Gesehenwerden oder Gefilmtwerden zieht die Aufmerksamkeit eines bewaffneten Sicherheitsteams, eines sogenannten ARC-Teams, auf sich.",
    {t:"kasten", cls:"wb", h:"ARC-Teams", b:[
     "Wuhan-Baxter ist ein weltweit bekannter Name im privaten Sicherheitssektor. Es dürfte nicht überraschen, dass seine eigenen hauseigenen Sicherheitseinheiten für ihre Wirksamkeit und Brutalität berüchtigt sind. Diese Einheiten sind, trotz unseres laufenden Markenrechtsverfahrens, als **ARC-Teams (Asset Recovery and Containment)** bekannt.",
     "Unsere Wettbewerbsanalyse ergibt, dass ein durchschnittliches Außenteam bei gleichen Voraussetzungen von einem ARC-Team neutralisiert wird, noch bevor das Außenteam überhaupt bemerkt, dass es Kontakt hergestellt hat. Die Taktiken der ARC-Teams sind durch den ständigen Einsatz in einigen der berüchtigtsten Kampfgebiete der Welt tadellos geschliffen und glänzen bei herkömmlichen Taktiken des Stadtkampfs wie Hinterhalten, Zangenbewegungen und dem großzügigen Einsatz von Scharfschützen. Agenten, die die Aufmerksamkeit eines ARC-Teams auf sich ziehen, sollten klugerweise Reisevorkehrungen für mehrere Fahrten vom Pausenraum der Agency zum Einsatzort im Feld treffen.",
     "Agenten sind jedoch nicht völlig hilflos, wenn sie ARC-Teams gegenüberstehen. Wir raten, sich auf indirekte Methoden der psychologischen Kriegsführung zu konzentrieren, wie das Stören der Kommunikation, das Anlegen von Ködern, das Anbieten von Bestechungsgeldern und das Bedrohen der Sicherheit ihrer engsten gewöhnlichen Vertrauten."
    ]}
   ]},
   {t:"Lobby-Orte", p:66, b:[
    {t:"sp", x:[
     [{t:"h3", x:"Sicherheitsbüro"},
      "Das Wartungs- und Verwaltungsbüro liegt bei den Rolltreppen. Hier befinden sich der Aufenthaltsraum der Lobby-Sicherheit und die Büros für gewerbliche Vermietung. Auf Verlangen spricht die Sicherheitschefin Danbury (sie/ihr) mit den Agenten. Ohne Freigabe auf Bundesebene kann sie jedoch nichts Hilfreiches preisgeben.",
      {t:"hinweis", art:"anom", h:"Das erfahren Agenten, wenn sie eine Freigabe auf Bundesebene erhalten (oder vortäuschen) oder anomale Methoden einsetzen:", x:[
       "Die vermissten Angestellten verschwanden, nachdem sie das Sub-Basement über den Treppenhauseingang betreten hatten.",
       "Das Gelände wurde gründlich durchsucht, und es wurde keine Spur von ihnen gefunden. Das einzig Bemerkenswerte waren einige Klumpen frischen Pizzateigs.",
       "Die Videoüberwachung zeigt die vermissten Angestellten, wie sie durch die Tür hinter den Rolltreppen in die Promenade zurückkehren.",
       "Das Sicherheitspersonal des Gebäudes erzählt eine Geschichte, nach der es in der Promenade spukt: Es hat Geräusche in den Wänden gehört."
      ]}],
     [{t:"h3", x:"Vermietungsbüro"},
      "Das Vermietungsbüro wird von Sheryl Bronker (sie/ihr) geleitet, einer freundlichen Frau Mitte 50. Sie trifft sich gern mit jedem, der daran interessiert ist, eine Fläche in der Promenade zu mieten.",
      {t:"hinweis", art:"gew", h:"Das erfahren Agenten leicht, indem sie so tun, als erwögen sie eine Anmietung:", x:[
       "Sie hatte in letzter Zeit einige seltsame Treffen mit Leuten, die versuchten, in der Promenade eine Fläche zu mieten, die es nicht gibt. Zwei Männer haben sich nach einem Stand erkundigt, der nicht im Grundriss verzeichnet ist, den sie den Agenten zeigt. Der Grundriss ist auf Juni 1998 datiert.",
       "Sie deutet auf die Wand, die das Zbarro verdeckt, und sagt den Agenten, dass dort nichts ist und nie etwas war, soweit sie weiß, und das habe sie den Männern auch gesagt.",
       "Der Umbau der Promenade wird von zwei Wuhan-Baxter-Ingenieuren geleitet, Derby (er/ihm) und Folk (sie/ihr), die nur dann auf die Baustelle kommen, wenn ein dringendes Problem vorliegt.",
       "Der Tagesbetrieb der Arbeiten wird von O’Rourke Commercial Contracting abgewickelt, einem Familienbetrieb von der anderen Flussseite."
      ]}]
    ]},
    {t:"h", x:"Pizza-Spion"},
    "Einer der Besucher des Einkaufszentrums steht in der Lobby und starrt unblinzelnd ins Leere. Nach einigen Minuten verlässt er das Gebäude, geht um die Ecke in die Gasse hinter dem Gebäude und kriecht unter einen Müllcontainer, wo Ratten an ihm herumzupfen.",
    "Das ist ein Teigdoppelgänger (eine raffinierte und überzeugende Nachbildung eines Menschen, von #641 aus Pizzateig geschaffen), den #641 zur Überwachung des Büros geschickt hat. **Wenn die Nacht hereinbricht,** ruft #641 einen Teil der Kreatur zurück ins Zbarro und untersucht ihre Erinnerungen.",
    "**Agenten, die der Kreatur folgen und sie untersuchen,** sehen unter dem Müllcontainer, wie sich Teigranken aus ihrem Kopf in Risse im Fundament des Gebäudes schlängeln. Am Morgen kehren diese Teigwürmer zurück, und die Kreatur beginnt ihre Überwachungsschleife von Neuem."
   ]},
   {t:"Orte der Promenade", p:67, b:[
    {t:"sp", x:[
     [{t:"h3", x:"CopyTown"},
      "CopyTown ist ein Kopierzentrum mit vollem Service und von 8:00 bis 18:00 Uhr, Montag bis Freitag, geöffnet. Es wird von drei Anfang-Zwanzigjährigen betrieben, die alle irgendwie gleich aussehen.",
      "Der Hinterraum des Ladens ist mit alten Maschinen vollgestopft und riecht stark nach Nelkenzigaretten und Marihuana. Die Überwachungskamera zeichnet auf einen kleinen Fernseher mit Videorekorder auf, aber das Band läuft nicht.",
      {t:"hinweis", art:"anom", h:"Das erfahren Agenten, indem sie die Angestellten unter Druck setzen oder anomale Fähigkeiten einsetzen:", x:[
       "In diesem Laden gibt es hinter einem uralten Kopierer eine Zugangsluke zum Sub-Basement 1.",
       "Vor einem Jahr schlich sich ein ehemaliger Angestellter ins Sub-Basement, um zu rauchen, und kam einen ganzen Tag lang nicht wieder heraus. Die anderen Angestellten hatten zu viel Angst, ihm nachzugehen, und noch mehr Angst, die Polizei zu rufen. Als der vermisste Angestellte wieder heraufkam, verließ er einfach wortlos den Job und roch stark nach Oregano. Seitdem stellen sie den schwersten Kopierer vor die Luke."
      ]}],
     [{t:"h3", x:"Brad’s Chicken and Fish"},
      "Brad’s Chicken and Fish hat von 11:00 bis 15:00 Uhr, Montag bis Freitag, geöffnet. Zur Mittagszeit ist das Restaurant überfüllt. Brad (er/ihm) und Cynthia Gore (sie/ihr), die Besitzer und Betreiber, sind freundliche Leute. Sie sprechen gern mit Agenten, wenn nicht zu viel los ist.",
      {t:"hinweis", art:"gew", h:"Das erfahren Agenten leicht, indem sie das Hähnchen probieren und mit den Besitzern reden:", x:[
       "In ihrer Küche gibt es eine verschlossene Tür, die zum Sub-Basement 1 führt.",
       "Brad ist ziemlich sicher, dass die Tür eine Wartungsluke zum Sub-Basement ist. Sie haben keine Schlüssel.",
       "Wenn Brad länger bleibt, hört er manchmal, wie sich hinter der Tür etwas bewegt. Cynthia hält es für Ratten. Brad glaubt nicht, dass Ratten so nass klingen würden."
      ]}]
    ]},
    {t:"h", x:"Sub-Basement 1"},
    "Das Sub-Basement 1 ist über die Luken in den Hinterräumen der Geschäfte der Promenade oder über ein Treppenhaus hinter den Rolltreppen zugänglich. Der Zugang zum Treppenhaus ist beschränkt, wird per Videoüberwachung kontrolliert und erfordert eine Schlüsselkarte aus dem Sicherheitsbüro, wenn man hinein will, ohne die Alarmanlage auszulösen.",
    "Das Sub-Basement ist ein einziges Durcheinander: enge Gänge voller Kisten, die bei der Suche nach den vermissten Arbeitern kürzlich umgeworfen wurden; alte Aktenschränke, die unter dem gelben Zischen der Arbeitslampen rosten; abgestandene Luft, die sich bei jeder Bewegung der Agenten in riesigen Mengen Staub regt. Absperrband bedeckt die Türen, die in Seitengänge führen. Hier und da liegen Beweismarker. Im Sub-Basement gibt es keine Videoüberwachung.",
    {t:"hinweis", art:"gew", h:"Das erfahren Agenten leicht, wenn sie sich den Mund zuhalten oder zu laut husten:", x:[
     "Der Staub ist nicht bloß Staub. Es ist ein getrockneter Teig auf Mehlbasis. Größere Flecken dieses Teigs scheinen noch an der Decke des Gangs zu kleben.",
     "Die Teig-Staub-Spur führt zu einer Wartungskreuzung und einer Sackgasse. Die Rohre der Kreuzung sind mit altem Mehl und dunklem, getrocknetem Blut bedeckt.",
     "In der Decke befindet sich ein großes Loch, teilweise von Leitungen und Rohren verdeckt, dessen Rand mit diesem Teig-Blut-Gemisch verkrustet ist.",
     "Kabel wurden hastig in die Stromleitungen eingespleißt und in das Loch in der Decke geführt."
    ]}
   ]},
   {t:"Weitere Anlaufstellen", p:68, b:[
    {t:"sp", x:[
     [{t:"h3", x:"Das „Büro“ der Auftragnehmer"},
      "Die Auftragnehmer, die das Promenadenprojekt leiten, die O’Rourkes, sind alle im „temporären Büro der Auftragnehmer“ auf der Promenadenebene zu finden, einem großen Brett auf zwei Sägeböcken mit drei Laptops und einem Haufen Bauplänen.",
      "Die O’Rourkes sind ehrliche Handwerker, die gute Arbeit leisten. Wegen der Baueinstellung sind nur drei Auftragnehmer vor Ort: Jim O’Rourke (er/ihm), der sichtlich erschöpfte Vorarbeiter mit imposanter Statur, seine Schwester Jill (sie/ihr), die Personalverantwortliche der Firma, die sich kaum zusammenreißen kann und nach einer Brille sucht, die auf ihrem Kopf sitzt, und ihre Cousine Jules (sie/ihr), die firmeneigene Rechtsberaterin, die sichtlich zerzaust ist und beim Telefonieren mit ihrem Handy wild gestikuliert.",
      {t:"hinweis", art:"gew", h:"Während Jim und Jules damit beschäftigt sind, ihr Projekt wieder in Gang zu bringen, gibt Jill den Agenten folgende Informationen:", x:[
       "Die vermissten Angestellten wurden mit einer Art Pulver bedeckt aufgefunden.",
       "Keiner von ihnen konnte sprechen, deshalb wurden sie ins St. Mary’s Hospital gebracht.",
       "Jill hat mitgehört, wie einer der Rettungssanitäter behauptete, die zurückgekehrten Angestellten hätten keinen Puls gehabt."
      ]}],
     [{t:"h3", x:"St. Mary’s Hospital"},
      "Wenn die Agenten ins Krankenhaus gehen, um bei den zurückgekehrten Angestellten nachzufassen, werden sie von Carnby (sie/ihr) und Laroche (er/ihm) konfrontiert, den Polizeidetektiven, die dem Fall zugeteilt sind.",
      "Carnby vermutet, dass die Agenten etwas im Schilde führen, und stellt Fragen zu ihrer Zugehörigkeit und ihrem Anliegen in dem Fall. Laroche schweigt, es sei denn, Carnby bittet ihn um Hilfe. Keiner der Detektive erlaubt Agenten freiwillig, die Angestellten zu befragen, selbst mit einer Freigabe auf Bundesebene: Sie bestehen darauf, das mit ihren Vorgesetzten abklären zu müssen.",
      "Alle drei Angestellten liegen im selben Zimmer. Jeder von ihnen ruht in einem Krankenhausbett, mit offenen Augen, die Decke anstarrend. Sie können keine Fragen beantworten oder auf Ansprache reagieren.",
      {t:"hinweis", art:"anom", h:"Das erfahren Agenten über die Opfer, wenn sie einen Weg an den Detektiven vorbei finden:", x:[
       "Ihnen fehlen sämtliche Knochen.",
       "Sie sind mit einer unbekannten Substanz gefüllt.",
       "**Plötzliches Rütteln oder Bewegen** lässt dickflüssige, rote Flüssigkeit aus ihren Augen und Mundwinkeln austreten. Die Analyse der Flüssigkeit ergibt, dass die unbekannte Substanz Pizzasoße ist."
      ]}]
    ]},
    {t:"h", x:"Durch die Luke"},
    "Abgesehen vom Einreißen der Absperrmauer in der Promenade (wodurch #641 alle seine „Kunden“ in den Rest des Gebäudes entlässt) führt der einzige Weg ins Zbarro durch ein Loch in der Decke des Sub-Basement 1. Dieses Loch war ursprünglich ein Abfluss im begehbaren Kühlraum des Zbarro, den #641 langsam erweitert hat, bis er groß genug war, dass Körper ins Restaurant gelangen konnten. Die Ermittlungsteams sind noch nicht durch das Loch gegangen und ahnen nicht, dass es relevant ist."
   ]},
   {t:"Kulinarischer Korridor", p:69, b:[
    "Das Loch in der Decke öffnet sich in einen weiteren, besser ausgebauten Gang. Alte Notlampen beleuchten den Raum nur schwach. Die Wände sind hier mit noch mehr Mehl und Blut bedeckt. Die Kabel kriechen weiter über den Boden den Gang entlang und um die Ecke. Sobald der letzte Agent in den Gang hinaufgestiegen ist, wird aus dem Gang ein huschendes Geräusch immer lauter.",
    {t:"h", x:"Die Pizzaratten kommen"},
    "Ein Dutzend langsamer Ratten windet sich ins Blickfeld. Die Ratten sind seltsam aufgedunsen, ihre Augen sind von roter Soße verklebt. Den Pizzaratten ist leicht auszuweichen und sie sind leicht zu erledigen, doch wenn es ihnen gelingt, einen Agenten zu beißen, beginnen sie, das gebissene Glied mit #641s Teig zu füllen. Das verursacht 1 Schaden alle 3 Sekunden, solange sie daran hängen.",
    "Nachdem die Ratten beseitigt sind, führt das **Folgen der Kabel** die Agenten um die Ecke. Der Gang erstreckt sich mindestens 150 Meter in die Ferne, ein blutrotes Ausgangsschild durchbricht am Ende des Tunnels die pechschwarze Dunkelheit. Auf der rechten Seite des Gangs liegen zwei Türen und auf der linken eine einzelne (zugeschweißt) neben einem großen Loch in der Wand, in das die Kabel sich schlängeln.",
    "Neben der zugeschweißten Tür auf der linken Seite des Gangs befindet sich ein großes Loch in der Wand, das in den begehbaren Kühlraum von Zbarro #641 führt.",
    {t:"sp", x:[
     [{t:"h3", x:"Pausenraum"},
      "Der erste Raum rechts öffnet sich in einen kleinen Mitarbeiter-Pausenraum voller Knochenhaufen. Beim Betreten des Raums purzeln Knochen von ihren Haufen und rutschen mit schleifendem Klappern über den Boden.",
      {t:"hinweis", art:"anom", h:"Das erfahren Agenten, wenn sie sich genug Zeit nehmen, die Knochen zu untersuchen, sodass drei weitere Pizzaratten sie finden:", x:[
       "Die älteren Haufen im hinteren Teil des Raums, beim Kühlschrank, enthalten mehr zerbrochene und zersplitterte Knochen, während die neueren Haufen rund um den Tischkicker sauberer sind, einige mit noch intakten Sehnenstrukturen.",
       "Eine grobe Zählung der Knochen ergibt 22 erwachsene Menschen, 5 Katzen, 37 Ratten und einen Schimpansen."
      ]}],
     [{t:"h3", x:"Büro des Managers"},
      "Der zweite Raum rechts ist ein kleines Büro, kaum größer als eine Besenkammer. Auf einem engen Schreibtisch stehen ein großer Computermonitor und ein Rechner. Ein Regal darüber enthält große rote Ringbuchordner mit den Aufschriften *„Managementrichtlinien, Schulung, Schließverfahren, Gehaltsabrechnung, Konfliktlösung, Kassenabschluss“*. Jeder trägt den Stempel mit dem Zbarro-Logo.",
      "Hinter der Tür hängt eine Uniform. Auf dem Namensschild steht *„Bran Carlo – General Manager“*."]
    ]}
   ]},
   {t:"Im Zbarro", p:70, b:[
    "Ein längst verlassenes und vergessenes Lokal, das von #641 zurückerobert wurde. Angezapfter Strom lässt die noch heilen Glühbirnen an der Decke das vermoderte Lokal in einem kränklich gelben Dunst erleuchten.",
    {t:"h", x:"Begehbarer Kühlraum"},
    "Dieser enge, feuchte Raum ist von Dunkelheit und dem Gestank der Verwesung erfüllt. Eine leichte Kühle liegt in der Luft, ein kaltes Echo der Vergangenheit des Kühlraums. Auf den Regalen stehen morsche Kartons voller Kochzutaten, die längst abgelaufen sind. Alte und neue Blutlachen sammeln sich und gerinnen rund um das Eingangsloch. Hinter einer Reihe von Regalen liegt die dicke Kühlraumtür, die sich auf olivenölgeschmierten Angeln geschmeidig öffnet.",
    {t:"h", x:"Vorrats- und Vorbereitungsbereich"},
    "Der Austritt aus dem Kühlraum verschafft etwas Erleichterung, da die Luft freier strömt. Der Geruch feuchten Schimmels wabert durch die Atmosphäre. Ein tropfender Wasserhahn gibt einen leisen Takt vor, um die stille Leere zu füllen. Umgestürzte Kartons säumen den Raum und brechen abrupt am Eingang zur Vorbereitungsstraße ab, ebenso an einer Tür mit der Aufschrift EXIT, die zugeschweißt ist. In der Mitte des Raums liegt auf einer groben Werkbank ein schmutziger, in Frischhaltefolie gewickelter Haufen, neben einem Fernseher mit Videorekorder, der blau leuchtet.",
    {t:"hinweis", art:"gew", h:"Das erfahren Agenten leicht, indem sie riskieren, dass der Geruch an ihnen haften bleibt:", x:[
     "Der Haufen sind in Wahrheit die zerbrochenen und wieder zusammengesetzten Überreste eines Menschen, ohne Gehirn und Knochen. Abgetrennte Gliedmaßen wurden mit etwas wieder angebracht, das frischer Teig zu sein scheint.",
     "Auf dem Fernseher mit Videorekorder steht oben links das Wort STOP, was anzeigt, dass das eingelegte Band angehalten wurde. Die Tasten sind mit getrocknetem, bröckeligem Teig und geronnenem Blut bedeckt. Es ist ein Video eingelegt."
    ]},
    {t:"h", x:"Schulungsvideo"},
    "Ein Druck auf Play startet das Zbarro-Schulungsband ab Minute 6:43. Auf der Titelkarte steht „Gäste begrüßen!“, dann folgt ein Schnitt zu einem jungen Mann in Zbarro-Uniform.",
    "*Begrüßen Sie jeden Gast mit einem Lächeln und unserer offiziellen Begrüßung: „Willkommen bei Zbarro! Was dürfen wir Ihnen heute anbieten?“*",
    "Das Band läuft noch 15 weitere Minuten und beschreibt das Kundenerlebnis und die allgemeinen Ordnungserwartungen an Zbarro-Angestellte. Wird das Band zum Anfang zurückgespult, zeigt sich, dass es das erste von vier Schulungsbändern ist, die alle neuen Angestellten jedes Zbarro-Standorts ansehen müssen. Die anderen drei Bänder liegen in staubigen Ordnern über dem Fernseher.",
    {t:"h", x:"Küche"},
    "Die Vorbereitungsstraße der Küche glänzt frisch geputzt. Soße und Gemüse verrotten in ihren Behältern. Die Worte „NUR FRISCHE ZUTATEN“ sind an die Wand gekritzelt. Ein Koch, dessen Gliedmaßen in seltsamen Winkeln knicken und zucken, lehnt sich über die Arbeitsfläche und prüft seine Arbeit (er schrubbt langsam mit einem fadenscheinigen Lappen die Theke) mit von Marinara verklebten Augen.",
    "Dies ist eine weitere Leiche, mit Teig gefüllt und vervollständigt, an die Sprinklerleitung an der Decke gehängt. Diese schaurige Zurschaustellung wiederholt sich die Linie entlang mit einem Beikoch und, jenseits des Tresenfensters, mit der Kassiererin im Speisesaal, kaum zu erkennen. Eine weitere Leiche sitzt in der Ecke zusammengesunken wie Teig, der unter einer gewaltigen Faust zerdrückt wurde. Wer die Körper berührt, stellt fest, dass sie mit Teig gefüllt sind, Knochen entfernt. Sie nehmen die Agenten nicht zur Kenntnis."
   ]},
   {t:"Speisesaal", p:71, b:[
    "Die doppelflügelige Küchentür schwingt auf quietschenden Angeln frei und führt hinter den Tresen im Speisesaal. Die Kassiererin ist nur ein weiteres grimmiges Dekorationsstück. Jenseits des Glasschutzes der Theke stehen ein Dutzend Tische, die Hälfte davon mit Teigdoppelgänger-Kunden besetzt. Wenn die Agenten den Raum betreten, neigen die Kunden die Köpfe in ihre Richtung. „WIEDERERÖFFNUNG BALD“ ist über zersplitterten, angespitzten Knochen in die Wand geritzt."
   ]}
  ],
  beg: [
   {t:"Bestellung fertig", p:71, b:[
    {t:"hinweis", art:"gew", h:"Das erfahren Agenten leicht, wenn sie mutig genug sind, an der grausigen Menge vorbeizugehen:", x:[
     "Am anderen Ende des Raums befindet sich der ursprüngliche Eingang des Restaurants, mit Holzständern und Trockenbau verdeckt und verstärkt, was durch die Fenster zu sehen ist.",
     "Die Mitte des Speisesaals ist ein versengter Krater. Überreste verbrannter Knochen und Kleidung liegen in seiner Mitte, längst erkaltet. Ein Tisch liegt halb geschmolzen an seinem Rand."
    ]},
    "**Während die Agenten den Krater untersuchen,** schlurft einer der Kunden in der Nähe, ein kleiner gebeugter Mann mit Gehstock, von seinem Platz auf. In einem hohen, aufgeregten Ton entweicht seinem Mund die Idee einer Stimme. In perfekter Nachahmung des Bandes aus der Vorratskammer: *„Willkommen bei Zbarro! Was dürfen wir Ihnen heute anbieten?“*",
    {t:"h", x:"Die Soße umrühren"},
    "*Mit #641 reden*",
    "Solange es nicht offen provoziert wird oder keiner der Teigdoppelgänger gestört wird, unternimmt #641 zunächst keinen Versuch, den Agenten zu schaden. Es ist sehr neugierig, da es seit seiner Einkerkerung keine lebenden Gäste gesehen hat. Wenn es das Gefühl hat, hingehalten zu werden, oder wenn die Agenten vorhaben, ihm zu schaden, verliert es die Beherrschung und schlägt um sich. #641 kann nicht lügen, es weiß nicht, wie. #641 weiß nicht, dass Töten falsch ist.",
    {t:"hinweis", art:"gew", h:"Das erfahren Agenten, wenn sie ruhig bleiben und mit #641 reden:", x:[
     "#641s „Stimme“ ist nur Nachahmung des Schulungsvideos in der Vorratskammer. Es spricht abgehackt und zusammenhanglos, als wäre jedes Wort aus der Aufnahme zu einem Satz zusammengeschnitten.",
     "Es will das Restaurant wiedereröffnen und den Schmerz beenden, der von einem unerfüllten Zweck herrührt.",
     "Es nimmt an, dass die Agenten Geschäftsleute sind, die hier sind, um in das Wiedereröffnungsprojekt zu investieren.",
     "Wenn die Agenten scheinbar zum Helfen hier sind, legt #641 mit einem ausführlichen Investitionsvortrag los und erklärt seinen Geschäftsplan und seine Expansionsmöglichkeiten."
    ]}
   ]},
   {t:"Heiß und fertig", p:72, b:[
    {t:"sp", x:[
     [{t:"h3", x:"Heiß und fertig"},
      "*#641 provozieren*",
      "#641 reagiert gewalttätig, wenn klar ist, dass die Agenten der Wiedereröffnung des Restaurants im Weg stehen oder wenn sie plötzlich versuchen, es einzudämmen und fortzuschaffen. #641 gibt Chaos aus, um so viele Teigdoppelgänger wie möglich als Gewalttätige Kleine Anomalien zu aktivieren, die darauf aus sind, die Agenten zu töten. Diese Hüllen sind mit Pizzateig zusammengenähte Leichen, die große Messer schwingen.",
      "**Wenn alle Teigdoppelgänger ausgeschaltet sind,** belebt #641 in der Ecke des Raums einen großen Haufen aus verrottendem Teig, Käse und Körperteilen, um eine röhrenförmige „Pizza-Schlange“ zu erschaffen. Aus der Küche sind laute Geräusche in Richtung des Kühlraums zu hören, während #641 in seiner Pizza-Schlangen-Gestalt durch den Kulinarischen Korridor und ins Gebäude insgesamt schlängelt.",
      "**Die Verfolgung der Pizza-Schlange** führt zu einer Konfrontation in der Promenade, die von vielen beobachtet wird und mindestens 20 Lose Enden schafft."],
     [{t:"h3", x:"Wenn der Mond dein Auge trifft"},
      "*#641 bekämpfen*",
      "Die Pizza-Schlange ist #641s Hauptkörper und kann neutralisiert werden, indem man mit der Ripple Gun auf sie feuert. Wird sie auf diese Weise zerstört, **explodiert** sie und bedeckt alles um sich herum mit Teig, Soße und Körperteilen.",
      "**Direkter Kontakt mit der Pizza-Schlange** lässt sie sich festsetzen und beginnen, Agenten mit Teig zu füllen, was alle 3 Sekunden, die sie haften bleibt, 3 Schaden verursacht. **Eine deutliche Verringerung der Teigmenge,** die der Pizza-Schlange zur Verfügung steht, durch etwa 12 Schaden oder andere Mittel kann sie für die Gefangennahme erschöpfen.",
      "Die Pizza-Schlange ist riesig, achtet aber darauf, das Restaurant oder seine Bausubstanz nicht zu beschädigen."]
    ]}
   ]},
   {t:"Expresslieferung", p:72, b:[
    "*#641 gefangen nehmen*",
    "#641 will sein Zuhause nur ungern verlassen, lässt sich aber vielleicht zum Umzug überreden, wenn die Agenten einen geeigneten Lebensraum bereitstellen. Das erfordert, ein starkes Vertrauensverhältnis zur Anomalie aufzubauen und zu versprechen, im Vault ein Replik-Zbarro zu bauen, einschließlich Personal.",
    "Das ist eine großartige Idee (da die Kantine schon bessere Tage gesehen hat). Der Bau dauert vier Monate, in denen #641 ängstlich ist und in seiner provisorischen Haftzelle wahrscheinlich um sich schlägt. Vault-Barrieren können #641s Ausbrüche eindämmen, aber es tötet jeden, der das Gehege betritt. #641 verlässt in der Zwischenzeit nie seine Pizza-Schlangen-Gestalt."
   ]},
   {t:"Ein Stück vom Kuchen", p:72, b:[
    "*Mit #641 zusammenarbeiten*",
    "**Wenn die Agenten zustimmen, #641 bei der Wiedereröffnung zu helfen,** ist die Anomalie überglücklich, über alle Worte hinaus, und alle Teigdoppelgänger beginnen im Chor zu jubeln. #641 erzählt den Agenten, dass es etwas über gewerbliche Mietverträge gelernt hat.",
    "**Vorausgesetzt, mindestens ein Agent erklärt sich bereit, #641 zu managen,** unterstützt die Agency die Wiedereröffnung des Restaurants (nachdem sie zunächst einen Umzug in den Vault vorgeschlagen hat), um den Wuhan-Baxter-Konzern im Auge zu behalten und vielleicht einen kleinen Gewinn zu erzielen."
   ]},
   {t:"Das Zbarro wiedereröffnen", p:73, b:[
    "Die Wiedereröffnung des Zbarro erfordert eine gut koordinierte Anstrengung an einer Reihe verschiedener beweglicher Teile. Hier eine grobe Checkliste:",
    {t:"zb-check", x:[
     "Die Feinheiten gewerblicher Mietverträge von #641 lernen oder eine Verkleidung beschaffen, mit der #641 direkt mit Sheryl Bronker verhandeln kann.",
     "Einen Kleinunternehmerkredit im Namen des neuen Mieters beschaffen.",
     "Die ursprüngliche Baugenehmigung für die Promenade besorgen (liegt im Rathaus im Büro für Unterlagen, Gewerbe), um den zulässigen Umfang der Bauarbeiten laut Mietvertrag zu ermitteln.",
     "Die Absperrmauer entfernen.",
     "Den Speisesaal renovieren.",
     "Die Küche auf den Stand der heutigen Gesundheitsvorschriften bringen.",
     "Den begehbaren Kühlraum reparieren oder ersetzen.",
     "Putzen. Viel putzen.",
     "Die Prominenten auf den signierten Fotografien an den Wänden recherchieren, um zu klären, ob sie inzwischen für eine politische Botschaft stehen, die man nicht scheinbar unterstützen möchte.",
     "Kochzutaten beschaffen."
    ]},
    "Alle Losen Enden, die während dieses Prozesses entstehen, werden auf die Gesamtzahl des Einsatzes angerechnet.",
    "Während die Agenten renovieren, beginnt #641 mit der Erschaffung perfekter Teigdoppelgänger als Angestellte. Das Restaurant kann auch mit menschlichen Angestellten besetzt werden, doch #641 hat keine formale Managementausbildung und wird sich schwertun, eine wirksame Führungskraft zu sein, solange es keine aufmerksame Betreuung erhält."
   ]}
  ],
  nach: [
   {t:"Ausgänge", p:74, b:[
    {t:"ausgang", x:[
     {h:"Wenn die Agenten das Zbarro wiedereröffnen", b:[
      "Sobald die Promenade fertiggestellt ist, findet eine große Eröffnung statt. Abgesehen davon, dass das Personal der Öffentlichkeit etwas seltsam vorkommt, wird die Eröffnung ein Erfolg. Das Zbarro #641 in der Wuhan-Baxter-Promenade zu besitzen und zu betreiben ist einfach, da keinerlei Personalkosten anfallen. Es wird nach sieben Monaten Gewinn abwerfen. Die Anomalie sorgt für keinerlei Störungen, solange das Restaurant geöffnet bleibt, wobei ihr Führungsstil vom Einfluss der Agenten abhängen wird."]},
     {h:"Wenn #641 entkommt", b:[
      "#641 ist außerhalb des Restaurants stark geschwächt. In der Außenwelt beginnt es, durch die Gassen hinter Restaurants zu streifen und Angestellte zu assimilieren, während sie den Müll hinausbringen. Nach einigen Wochen hat #641 ein Dutzend Restaurants mit Teigdoppelgängern unterwandert und schmiedet Pläne, eine Restaurantgruppe zu übernehmen."]},
     {h:"Wenn der Konflikt überschwappt", b:[
      "Agenten, die es nicht schaffen, die Konfrontation einzudämmen, und zulassen, dass sie in öffentlich zugängliche Bereiche überschwappt, ziehen eine rasche Reaktion eines Wuhan-Baxter-ARC-Teams auf sich. Dieses Team macht kurzen Prozess mit allen Agenten, denen es begegnet, hat aber keine Mittel, die sich zur Bekämpfung von #641 eignen. Es wird das schnell erkennen und versuchen, sich zurückzuziehen; tut es das, steigt die Zahl der Losen Enden nur um eins (ein einzelnes ARC-Team-Mitglied, das bald kündigt), aber Wuhan-Baxter als Ganzes wird seine auf die Agency gerichteten Aktivitäten dramatisch ausweiten und bei künftigen Einsätzen in Ternion City eine wiederkehrende Präsenz werden."]},
     {h:"Wenn #641 eingedämmt oder eliminiert wird", b:[
      "Die Agenten haben nun exklusives Wissen über und Zugang zu einem völlig privaten unterirdischen Raum in der Innenstadt von Ternion City. Sie können den Schritten unter „Das Zbarro wiedereröffnen“ folgen, mit sich selbst oder einem gewählten Bekannten als neuem Inhaber.",
      "Oder sie nutzen den Raum vielleicht für ihre eigenen Zwecke weiter. Die Angestellten von CopyTown und Brad’s Chicken and Fish brauchen nicht viel Überzeugung, um den Agenten wiederholten Zugang zum Sub-Basement zu gewähren. Agenten, die keine überzeugende Tarngeschichte liefern, werden jedoch feststellen, dass Brad und Cynthia Gore hartnäckige Lose Enden sind."]}
    ]}
   ]},
   {t:"Vault-Anforderung", p:75, b:[
    {t:"anforderung", h:"Schulungsvideo", en:"Training Video", preis:21, b:[
     "Diese VHS-Kassette ist mit einem Schulungsvideo bespielt, das beim Kauf zu einem frei gewählten Thema erschöpfende Schulung bietet. Das Thema darf kein verborgenes Wissen enthalten, wie „die Geheimnisse des Universums“ oder „Marians wahre Absichten“.",
     "Nach 15 Sekunden ununterbrochenen Anschauens kann jede Person ein Thema erklären (wie man eine Pizza von Grund auf macht, wie man einen Reifen wechselt); nach 15 Minuten kann sie die Tätigkeit ausführen; nach 15 Stunden kann sie verwandte Fertigkeiten zu diesem Thema einsetzen, um Ergebnisse auf Meisterniveau zu erzielen. Dieser Effekt endet 24 Stunden nach dem Ansehen oder wenn du ein anderes Schulungsvideo benutzt, um eine andere Fertigkeit zu erlernen."
    ]}
   ]},
   {t:"Anomalie-Fähigkeit", p:75, b:[
    {t:"faehig", h:"Teigjunge", en:"Doughboy",
     x:"Du kennst genau die richtige Person für jede Stelle. Studiere jemanden und würfle auf **Doppelzüngigkeit**.",
     erg:[
      ["ok","**Bei einem Erfolg** züchtest du einen Doppelgänger des Ziels: eine Duplikatkopie, die vollständig aus deiner Haut oder einer beliebigen Substanz besteht, von der du genug zur Hand hast. Er kann einfache Befehle ausführen und hält 1 Schaden aus, bevor er zerstört wird, doch schon einfaches Abtasten offenbart seine knochenlose, organlose, unnatürlich biegsame Natur. Nach einer Stunde verliert er seine Form und Funktion."],
      ["plus","**Bei jeder dritten {3}** darfst du eine Eigenschaft für deinen Doppelgänger wählen. Du darfst eine Option mehrmals wählen:\n– Er hat Knochen.\n– Er hält 1 zusätzlichen Schaden aus, bevor er zerstört wird.\n– Er kann die Stimme des Ziels perfekt nachahmen.\n– Er kann einmalig einen komplexen Befehl ausführen (ein Vier-Gänge-Menü kochen, das billigste Handy-Ladegerät in diesem Einkaufszentrum finden, dieses Aktiendepot auf Risiken prüfen usw.)\n– Seine Gesichtszüge verrutschen nicht langsam und müssen nicht von Hand nachjustiert werden."],
      ["nein","**Bei einem Fehlschlag** wirst du zum Doppelgänger: Dein Körper und Geist füllen sich mit Haut, du nimmst die Gestalt des Ziels an und wirst für einfache Befehle höchst empfänglich. Du giltst als tot."]
     ], b:[]}
   ]}
  ]
 }
};
/* GESTALTUNG:
 - Seitenzählung: Dateinummer SNNN = Buchseite laut Brief; die gedruckte Seitenzahl im Buch ist jeweils um 1 höher (z. B. Chaos-Effekte S062 = gedruckt 63).
 - S. 58 Fundstück: weitergeleitete E-Mail der Geschäftsleitung (Betreff „FWD: they showed back up“) mit Zeitungsartikel yourTC3 (Foto des WB-Hochhauses), Titelschriftzug ZBARRO#641 und „BY: LOGAN DEAN“ quer am Rand; als zwei Handouts (brief + zeitung) angelegt.
 - Reiterbezeichnungen im Buch: Anomaly Recipe / Pre-Bake / A Slice of Mystery / Order Up / Digestion -> reiterNamen gesetzt (Anomalie-Rezept, Vorbacken, Ein Stück Rätsel, Bestellung fertig, Verdauung). Die Begegnungs-Abschnitte heißen im Buch Hot and Ready / When Moon Hits Eye / Express Delivery / Pizza the Action (als Unterüberschriften mit kursiven Untertiteln „Provoking / Fighting / Capturing / Working with #641“). „Hot and Ready“ und „When Moon Hits Eye“ stehen als zwei Spalten nebeneinander (sp) im ersten Begegnungsabschnitt auf S. 71.
 - Chaos-Effekte: nur 5 Einträge (2, 4, 5, 6, 8), keine mit ▲ (kein neu:1). Sonderregel als Kasten unter der Tabelle (Pizza-Symbol) -> Feld sonder.
 - Optionale Ziele S. 60 (Kasten neben Morgenbesprechung): 3 Belobigungen, 1, 1, 3 Verweise.
 - S. 61: Einsatzbesprechung mit zwei Spalten (Vorfall 1997 / Promenadengeschichte) und Kasten Wuhan-Baxter mit WB-Logo.
 - S. 64: Kasten „ARC-Teams“ mit WB-Logo. S. 65: Sicherheits-/Vermietungsbüro als zwei Spalten, S. 66: CopyTown / Brad’s als zwei Spalten, S. 67: Auftragnehmer-Büro / St. Mary’s als zwei Spalten, S. 68: Pausenraum / Büro des Managers als zwei Spalten.
 - Hinweiskästen mit Zeitleiste/Punkten; Symbole: violett (gew) und orange (anom) nach Seitenbild.
 - S. 72: Checkliste „Reopening Zbarro“ mit X-Punkten als liste (Kästchen-Optik denkbar). S. 73: vier Ausgänge als zwei Spalten im Buch (Wiedereröffnen / Entkommen / Überschwappen / Eingedämmt).
 - S. 74: Vault-Anforderung „Training Video“ (21 Belobigungen, VHS-Kassette); Anomalie-Fähigkeit „Doughboy“ (Erfolg / jede dritte 3 mit 5 Auswahlpunkten / Fehlschlag).
 - Keine Playwall-Codes, keine Tabellen, keine Figurenwerte; Gegner (Pizzaratten, Teigdoppelgänger, Pizza-Schlange) haben keine Werte-Kästen. */
