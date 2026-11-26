/* The Vault – Springs Eternal (Buch S. 8–22). Übersetzung aus dem Englischen. */
window.TA_VAULT = window.TA_VAULT || {};
TA_VAULT["springs-eternal"] = {
 cw: "Körperhorror, Gedankenkontrolle, Nadeln, Schönheitsoperationen",
 chaosP: 12,
 chaos: [
  {k:2, n:"Auffrischen", en:"Refresh", neu:1, x:"Das Aussehen eines gewöhnlichen Ziels verändert sich: Es wirkt um Jahre jünger und ein klein wenig mehr wie Serena Evermore."},
  {k:2, n:"Verderben", en:"Corrupt", x:"Pflanzen verdrehen sich zu greifenden Ranken und treiben glänzende runde Früchte, die bei Berührung platzen; die Luft wird plötzlich dicht von Feuchtigkeit, so warm und schwül, dass das Atmen schwerfällt; ein Gegenstand verwandelt sich in das langersehnte Lieblingsspielzeug eines Agenten – unwiederbringlich beschädigt; warmes Wasser sprudelt aus dem Boden."},
  {k:4, n:"Manifestieren", en:"Manifest", x:"Lange, greifende Pflanzen wachsen aus dem Boden, aus Rohren oder Kanalgittern. Sie können verlockende Blüten, stechende Dornen, verstrickende Ranken usw. hervorbringen. Die Anomalie kann außerdem Pfützen manifestieren, in denen sich ein überwucherter Regenwald spiegelt. Es sind einsperrende Anomalien, die bei Berührung auslösen und ihr Ziel in die Spiegelung hineinziehen."},
  {k:4, n:"Ausgleichen", en:"Rebalance", neu:1, x:"Ein gewöhnliches Ziel vergisst etwas Wichtiges: ein Versprechen, das es gegeben hat, den Jahrestag, den Code eines Safes."},
  {k:5, n:"Anziehen", en:"Attract", x:"Ein Rabattdienst startet eine Aktion für einen All-inclusive-Spatag; ein Shuttle vom örtlichen Seniorenheim fährt vor; es ist die Woche der jährlichen International Spa & Sauna Expo in Ternion City; eine beliebte Tagestalkshow sendet einen Beitrag, der FOUNT bewirbt."},
  {k:6, n:"Ausdehnen", en:"Expand", x:"Diese Anomalie dehnt sich überwiegend unter der Erde aus und wächst, bis sie das gesamte Kanalsystem von Ternion City füllt. Statt oberirdische Orte zu überwuchern, erlaubt Ausdehnen der Anomalie, Ranken durch Rohre, Gitter und Filteranlagen nach oben zu strecken und jedes Wasser, das sie berühren, mit ihrem verjüngenden, bewusstseinsverändernden Einfluss zu durchdringen. Das beginnt in den Mineral-Badebecken in FOUNT und reicht über Toiletten, Badewannen und Brunnen bis schließlich zum Reservoir, aus dem ganz Ternion City sein Trinkwasser bezieht."},
  {k:7, n:"Verdoppeln", en:"Double", x:"Statt mit Verdoppeln zwei Kleine Anomalien zu erschaffen, kann die Anomalie einen Influencer erschaffen, eine täuschende/verlockende Kleine Anomalie (Bedrohung 1, Stabilität 4). Sie sehen menschlich aus, aber alle Influencer haben dasselbe unheimlich perfekte Gesicht."},
  {k:8, n:"Erneuern", en:"Renew", neu:1, x:"Ein Ziel erleidet einen heftigen Flashback, der es für mehrere Augenblicke außer Gefecht setzt. Wähle den Inhalt des Flashbacks: Menschen, die vergnügt in einer Quelle planschen; Rufe, das Klirren von Schwertern, Schreie; ein Waldbrand, der durch einen Dschungel tobt."},
  {k:8, n:"Versetzen", en:"Displace", x:"Die Agenten finden sich in einem üppigen Dschungel wieder. In der Mitte liegt ein klarer Wasserteich, den die Anomalie den Agenten anbieten wird. Ein Agent, der das Wasser berührt, wird sofort in den ersten Moment versetzt, in dem er sich irgendwo wirklich zu Hause fühlte. Lehnen sie das Wasser ab, hören sie ferne Rufe und das rhythmische Trommeln von Hufen auf dem Boden. Alles wird verschwommen."},
  {k:12, n:"Rückkehr", en:"Return", neu:1, x:"Ein gewöhnliches Ziel steht vollständig unter dem Einfluss der Anomalie und wird gewaltsam handeln, um ihre Domäne zu schützen. Nachdem es seinen Nutzen erschöpft hat, birst es in einem Schwall aus Blüten und Ranken und stirbt."}
 ],
 ziele: [
  {art:"bel", n:1, x:"wenn du eine Blumenkrone trägst (einmal pro Agent)"},
  {art:"bel", n:3, x:"wenn du ein Experiment durchführst"},
  {art:"bel", n:6, x:"für den Ersten, der einen Rechtsstreit gewinnt"},
  {art:"ver", n:1, x:"jedes Mal, wenn du in Erinnerungen an die Vergangenheit schwelgst"}
 ],
 reiter: {
  profil: [
   {t:"Fundstück", p:9, b:[
    {t:"storyboard", h:"Aquifer by FOUNT, TV-Spot", x:[
     {n:1, s:["*Wir öffnen mit einer Nahaufnahme eines Wasserbeckens von oben, Lichtwellen spielen auf dem glatten, weißen Beckenboden. Mit einem „Plink“ trifft ein einzelner Wassertropfen die Mitte des Beckens und schickt in Zeitlupe Wellen von der Mitte aus.*"], vo:["Stell dir vor … eine Welt ohne Sorgen. Eine Welt ohne Lasten. Ein Leben, losgelöst vom unausweichlichen Verschleiß des Daseins. Ein Entkommen vor den Verheerungen der Zeit."]},
     {n:2, s:["*Ein weiteres „Plink“, und wir schneiden zu einer Seitenansicht des Beckens, glänzendes weißes Porzellan, flankiert von hohen cremefarbenen Kerzen. Eine Hand hält behutsam eine kleine gläserne Pipette und lässt Tröpfchen in das Wasser darunter fallen.*"], vo:["Bei FOUNT gehört diese Welt dir. Und jetzt kannst du diese Welt mit nach Hause nehmen. Wir präsentieren Aquifer, dein neues tägliches Wellness-Ritual."]},
     {n:3, s:["*Gerade als ein Tröpfchen die Wasseroberfläche berühren will, wird es langsamer und kommt zum Stillstand. Nach einem Moment kehrt es die Richtung um und fliegt zur Pipette zurück. Ein weiteres folgt, und noch eins, und noch eins. Der gesamte Inhalt des Beckens beginnt, mitten in der Luft zu kreisen.*"], vo:["Nach drei Jahren gründlicher Tests haben wir aus einer eigenen Mischung natürlicher Extrakte eine komplette Pflegelinie entwickelt, die wiederherstellt, erneuert und verjüngt. Für jeden Hauttyp, in jedem Alter."]},
     {n:4, s:["*Mit einem Platschen schneiden wir zu vier blaugrünen Flaschen aus mattiertem Glas in verschiedenen Größen, eingebettet zwischen Blättern, Ranken und Treibholz. Wassertropfen glitzern auf ihrer Oberfläche.*"], vo:["Aquifer by FOUNT. Return to youth."]},
     {n:5, s:["*Es folgt eine verwirrende Montage: Flüsse, Straßen der Stadt, kriechende Ranken, verschwommene Gesichter, das Aufblitzen einer Rüstung, ein schreiendes Baby, ein Schwall Blüten – dazwischen immer wieder Hände, die jedes Produkt auftragen, während es beschrieben wird. Es gleitet sanft in dein Gehirn. Du kannst nicht wegsehen.*"], vo:["Schritt eins, Aquifer Refresh Cleanser. Mit etwas reinem Wasser aufschäumen und auf das gesamte Gesicht auftragen. Eine Minute einwirken lassen, dann gründlich abspülen. Streife das Alte ab, um Platz für das Neue zu schaffen."]},
     {n:6, s:["*Jedes Mal, wenn du blinzelst, immer wenn du die Augen schließt, siehst du einen Ort. Einen fernen Ort, verschwommen in deiner Erinnerung, üppig und grün und sonnenverwöhnt. Die Hände machen weiter.*"], vo:["Schritt zwei, Aquifer Rebalance Toner. Zwei Pumpstöße auf ein Wattepad geben und auf das saubere, trockene Gesicht tupfen. In die Haut einziehen lassen."]},
     {n:7, s:["*Es füllt jetzt dein Blickfeld. Es ist alles, was du sehen kannst – dieser Ort, wo sich Ranken von Baum zu Baum spannen, wo Blüten in Violett und Rot und Orange von den Ästen herabstürzen.*","*Wo reife Früchte schwer hängen, bunte Vögel singen und die Luft so dicht von Feuchtigkeit ist, dass sie dich wie eine Decke umhüllt und sich im Unterholz sammelt, wo kleine Tiere von Schatten zu Schatten huschen.*","*Hier eingebettet liegt eine Quelle, ihr Wasser kühl und nährend. Du weißt, dass du schon hier warst, kannst aber nicht genau sagen, wann.*","*Trotzdem bist du dir sicher. Es fühlt sich so vertraut an, so tief, schmerzlich, wehmütig vertraut, wie eine Erkenntnis, die entgleitet, bevor du sie zu Papier bringen kannst. Ein schöner Traum.*"], vo:["Schritt drei, Aquifer Renew Serum. Drei Tropfen einmal täglich vor … auf das Gesicht auftragen …"]},
     {n:8, s:["*Die Hände sind deine Hände.*","*Während du die Feuchtigkeitscreme auf deine Stirn tupfst, sie unter deinen Augen einmassierst und auf deinen Wangen verteilst, kommt es zu dir zurück.*","*Dieser Ort ist, wo du geboren wurdest. Es ist dein **Zuhause**. Es ist Zeit, nach Hause zu kommen. **Du musst nach Hause kommen.***","*Du **gehörst** hierher.*","*Lass den Rest hinter dir. Kehre zurück zur Geborgenheit. Zur Schönheit. Zur Wahrheit. Zu dem Einzigen, das zählt.*"], vo:["Schritt vier, Aquifer Return Moisturizer. Zweimal … anwenden …"]}
    ], ende:"Return to youth."}
   ]},
   {t:"Überblick", p:10, b:[
    {t:"profil",
     lead:"FOUNT, ein Luxus-Medispa in der Innenstadt von Ternion City, hat kürzlich Aquifer auf den Markt gebracht, eine neue Linie hochwirksamer, äußerst beliebter Anti-Aging-Hautpflegeprodukte. Sie bringen eine ungewöhnliche Reihe von Nebenwirkungen mit: außerkörperliche Erfahrungen, Flashbacks zu Ereignissen, die nie stattgefunden haben, Wellen überwältigender Melancholie … und das ist erst der Anfang. Der Grund: Diese Produkte werden aus der extrahierten Essenz einer Anomalie hergestellt, die tief unter FOUNT gefangen gehalten wird. Darf sie weitermachen, wird sich der Einfluss dieser pflanzenartigen Anomalie in der ganzen Stadt ausbreiten und immer mehr Menschen in ihrer rasch wachsenden Domäne in den Tod locken.",
     fokus:"Der Wunsch der Menschheit, zu einer Zeit – oder einem Selbst – zurückzukehren, die sie unwiederbringlich verloren hat.",
     domaene:"Ein Regenwald, der im Kanalsystem unter Ternion City sprießt – ein Abbild des allerersten Geburtsortes der Anomalie, bevor eine Gruppe von Entdeckern des 16. Jahrhunderts ihn niederbrannte.",
     impuls:"Ihr Zuhause im Kanalsystem unter Ternion City vollständig nachzubilden. Bleibt sie unbeaufsichtigt, wird sich dieser unterirdische Dschungel bis zur Wasserversorgung der Stadt erstrecken und seine Ranken in alle Einwohner von Ternion City pflanzen. Hat sie genug Kraft gesammelt, wird sie deren Körper bis zum Zerreißen verbiegen und Menschen in einer explosiven Schau aus Blüten und Ranken auseinanderreißen – eine Wachstumswelle, die die gesamte Stadt in ihr lange verlorenes Zuhause verwandelt."},
    {t:"h", x:"Geschichte"},
    "Diese Anomalie existiert in der einen oder anderen Form seit Hunderten von Jahren und hat sich beständig vom Wunsch der Menschheit genährt, den unerbittlichen Marsch der Zeit aufzuhalten. Geboren wurde sie Anfang der 1500er-Jahre aus den Legenden um Juan Ponce de Leons Suche nach dem Jungbrunnen in den Dschungeln des heutigen Florida. Jene Entdecker fanden tatsächlich eine Anomalie mit der gesuchten Kraft – und hatten keine Ahnung. Sie brannten sie samt ihrem Wald nieder, um eine Siedlung zu bauen. Das erste Leben der Anomalie endete in Tragödie, im Verlust ihrer Erinnerung und im Verlust ihres Zuhauses.",
    "Sie fiel in einen Ruhezustand, aber sie starb nicht. Die Menschheit hörte nie auf, sich nach verlorenen Zeiten zu sehnen, und so hielt ihr Fokus sie am Rand des Todes am Leben. Mit dem Aufkommen der sozialen Medien und einer Bevölkerung, deren Angst vor dem Altern nur noch verzweifelter wird, begann die Anomalie wieder zu gedeihen – diesmal sprießte sie aus Rissen im Asphalt, an der Stelle, wo einst ihr Wald stand.",
    "Vor drei Jahren erreichten Gerüchte über eine seltsame neue Pflanze, die auf einem Parkplatz in Florida entdeckt worden war, Olive Huynh (sie/ihr), Direktorin für Finanzen und Vertrieb bei FOUNT. Sie ließ sich keine potenzielle Geschäftsgelegenheit entgehen, nutzte ihr Netzwerk, um sich diese Pflanze zu sichern, und ließ sie zur Entwicklung neuer Produkte nach Ternion City bringen. Sie schickte Serena Evermore (sie/ihr), eine enge Vertraute und Spa-Koordinatorin von FOUNT, damit sie die Pflanze persönlich abhole.",
    "Als Serena den von Ranken überwucherten Parkplatz betrat, auf dem die Anomalie zu Hause war, wusste sie, dass dies keine gewöhnliche Pflanze war. Als eine neugierige Ranke sich um ihren Finger schlang, verstand sie sie, und sie verstand Serena. Sie spürte ihre Traurigkeit, ihre Sehnsucht nach ihrem Heimatort der Vorfahren, und teilte sie. Auch Serena war auf der Suche nach ihren Wurzeln. Die Anomalie hatte das Gefühl, sie zu kennen. Sie konnte sich nur nicht erinnern, woher.",
    "In der Hoffnung, Serena könne ihr helfen, sich an ihre Vergangenheit zu erinnern, kam die Anomalie bereitwillig zu FOUNT, wo das Entwicklungsteam ein spezielles Gehege errichtete, in dem sie gedeihen sollte. Über die Jahre erforschten sie einen nachhaltigen Weg, ihren Saft, ihre Früchte und ihre Blätter zu einem wirkungsvollen Produkt mit starker verjüngender Wirkung zu destillieren – haben aber keinerlei Fortschritte gemacht, ihr ein neues Zuhause zu finden.",
    "Nun wird sie unruhig. Serena hat ihr Versprechen nicht gehalten, ihr Zuhause zu finden. Nach Jahren des Wartens ist die Anomalie bereit zu handeln.",
    {t:"h", x:"Erscheinung"},
    "Die Anomalie zeigt sich als Passionsfruchtranke, die derzeit um ein Rankgitter in einem Glaskäfig bei FOUNT gewickelt ist. Sie trägt runde, glänzende Früchte, breite violette Blüten und gelegentlich Augen, tränenfeucht und ohne zu blinzeln. Ihren Entführern unbekannt ist dies nur ein Teil der Anomalie. Vor einigen Monaten fand sie eine winzige Öffnung in ihrem Bewässerungssystem und streckte einen Ausläufer hinab in die Kanalisation, wo sie ihre Domäne errichtet hat.",
    {t:"h", x:"Aktuelle Lage"},
    "Die Kraft der Anomalie wächst mit jedem Menschen, der Aquifer-Produkte benutzt. Durch sie kann die Anomalie in ihren Köpfen Wurzeln schlagen, ihre Erinnerungen verdrehen und sich von ihrem Verlangen nähren. Die Wirkung konzentriert sich rund um die Mercantile Avenue, den Sitz von FOUNT und seiner Hauptfiliale. Unter der Avenue ist in der Kanalisation ein ganzer Regenwald unter der Kontrolle der Anomalie herangewachsen."
   ]}
  ],
  vor: [
   {t:"Morgenbesprechung", p:11, b:[
    {t:"morgen", x:[
     "Die Beziehung eines Agenten erzählt aufgeregt von ihrem Plan für einen dringend nötigen Spatag.",
     "Ein Agent wird plötzlich von jemand Wichtigem aus seiner fernen Vergangenheit kontaktiert.",
     "Der Schauspieler Jay Hsieh scheint überall zu sein – TV-Spots, soziale Medien, Werbetafeln, Zeitschriften – und wirbt für seine Partnerschaft mit Aquifer by FOUNT.",
     "Eine Gruppe junger Leute geht vorbei, die alle dasselbe Gesicht zu haben scheinen."
    ]}
   ]},
   {t:"Einsatzbesprechung", p:11, b:[
    {t:"vorlesen", b:[
     "Die Agency hat ungewöhnliche Verhaltensmuster registriert, die sich auf das Viertel rund um die Mercantile Avenue in der Innenstadt von Ternion City zu konzentrieren scheinen: erhöhte Raten spontanen Weinens, ständige unerwartete Wiedersehen mit alten Freunden und Überwachungskameraaufnahmen vieler verschiedener Menschen mit unheimlich ähnlichem Aussehen, um nur einiges zu nennen. Beginnt eure Ermittlung hier.",
     "Die Agency wird an einen anomalen Vorfall aus den 1500er-Jahren erinnert, doch Modelle haben eine Wahrscheinlichkeit von 0,02 % ermittelt, dass er mit der vorliegenden Lage zusammenhängt. Jeder Agent sollte ihn ignorieren. Sie sollten jetzt ihre Ahnungslosigkeit anerkennen."
    ]},
    "**Weigern sich die Agenten, ihre Ahnungslosigkeit anzuerkennen,** erhalten sie je 1 Verweis und einen stark geschwärzten Bericht einer Agentin namens Luella McConnell aus dem frühen 20. Jahrhundert. Sie beschreibt, wie sie einer Spur schriftlicher Berichte über ungeklärte (und ähnliche) emotionale und körperliche Auswirkungen unter Entdeckern in dem Gebiet folgte, das später das südliche Florida werden sollte, konnte aber in den dazwischenliegenden Jahrhunderten keinen Hinweis auf ihre Existenz finden. Sie versuchte, sie mit einer Touristenattraktion hervorzulocken, die auf ihrer besten Vermutung zu ihrem Fokus beruhte – ohne Erfolg."
   ]}
  ],
  erm: [
   {t:"Auf der Avenue", p:13, b:[
    "Die Mercantile Avenue ist voll mit trendigen Boutiquen, Salons, Restaurants und Weinbars. Mitten im Trubel ist klar, dass etwas nicht ganz stimmt.",
    "Unter dem grün-goldenen Vordach der Terrasse des Tryptik Café führen Menschen ungewöhnlich laute, intensive Gespräche – drei davon weinen offensichtlich. Eine Frau hockt am Boden und starrt in eine Pfütze mitten auf der Straße. Währenddessen sammelt sich vor FOUNT, dem Luxus-Medispa gegenüber dem Tryptik, eine kleine Menschenmenge, wo ein Mann und eine Frau in der Tür streiten.",
    {t:"sp", x:[
     [
      {t:"h", x:"Maya und die Pfütze"},
      "Ohne sich um den Verkehr zu kümmern, hockt Maya Ng (sie/ihr) auf der Straße, betrachtet ihr Spiegelbild in einer Pfütze und stupst an ihre Wangen und ihren Hals. Sie trägt einen sachlichen beigen Anzug, das Haar zurückgesteckt.",
      "**Sobald die Agenten sie zum ersten Mal bemerken,** verschwindet sie in der Pfütze, die eine einsperrende Kleine Anomalie ist. Sie beginnt, zu der kleinen Menschenmenge zu fließen, die sich auf der anderen Straßenseite vor FOUNT gebildet hat. Halten die Agenten sie nicht auf, wird sie mehr Menschen holen und zu 15 Losen Enden führen.",
      {t:"hinweis", art:"gew", h:"Das erfahren Agenten, wenn sie Maya vor der Kleinen Anomalie retten:", x:[
       "Ihr Gesicht kommt einem seltsam bekannt vor.",
       "Maya benutzt Aquifer-Produkte seit kurz nach der Markteinführung vor einigen Wochen.",
       "Sie ist zurückgekommen, um zu sehen, ob sie einige der gekauften Produkte an FOUNT zurückgeben kann. Obwohl sie großartige Ergebnisse sah, hat eine ihrer Freundinnen kürzlich bemerkt, dass sie nicht mehr ganz wie sie selbst aussieht – was sie nicht gut aufgenommen hat.",
       "Während sie gefangen war, befand sie sich in einem Regenwald voller Leben. Sie ist froh, frei zu sein, vermisst ihn aber ein wenig. Auch dort fühlte sie sich frei."
      ]}
     ],
     [
      {t:"h", x:"Tryptik Café"},
      "Das Tryptik Café, eine modische Mischung aus modern und altmodisch, lockt Menschen für teuren, aber köstlichen Kaffee und frisches Gebäck auf die Mercantile Avenue. Drinnen präsentiert die Karte das heutige Angebot: den Forget-Me-Not, einen leuchtend blauen Latte aus Schmetterlingserbsenblüte (heiß oder eisgekühlt erhältlich). Fast alle trinken ihn.",
      {t:"hinweis", art:"gew", h:"Das erfahren Agenten, wenn sie unbeholfen lauschen oder sich mit einem Barista anfreunden:", x:[
       "An drei verschiedenen Tischen auf der Terrasse des Tryptik entschuldigen sich Menschen unter Tränen für äußerst geringfügige Verfehlungen: ein verlegtes Haargummi, der vergessene Geburtstag eines Haustier-Goldfischs, ein unpassendes Niesen. Allen gemeinsam ist die geäußerte Angst, den anderen dadurch für immer zu verlieren.",
       "Fünf ältere Männer und Frauen breiten einen Stapel Fotografien auf einem Tisch aus und schwelgen liebevoll in ihren Lieblingsbildern. Bei näherem Hinsehen sind es verschwommene Bilder von Staubsaugern, Kühlschränken, Wänden, dem Boden und anderen zufälligen Haushaltsgegenständen.",
       "Eine Gruppe von Freunden drängt sich für ein Selfie zusammen, das sie nach einem Blick auf das Ergebnis löschen und neu aufnehmen – wieder und wieder und wieder.",
       "Der Zusatz aus Erbsenblüte im Forget-Me-Not stammt von FOUNT gegenüber, das einen Überschuss hatte."
      ]}
     ]
    ]}
   ]},
   {t:"Vor FOUNT", p:14, b:[
    "Die Fassade von FOUNT ist unmöglich sauber. Hohe Fenster verschwinden in einer geschwungenen Betonfront, poliert zu weißer-als-weiß, die in ein ausladendes Vordach übergeht, das wie eine Welle auf den Boden trifft. Darunter spielt sich eine chaotische Szene ab.",
    "Jay Hsieh (er/ihm), Superstar und Schwarm der Massen, besucht FOUNT, um für die neue Produktlinie zu werben. Er ist nicht anwesend, aber eine Menschenmenge hat sich versammelt und kämpft um einen Blick auf ihn. Zwei Menschen streiten lautstark vor dem Eingang, und ein Mann steht verlegen in ihrer Nähe und versucht, einen Weg an ihnen vorbei zu finden.",
    "Durch die Menge können die Agenten gerade eben luftige weiße Vorhänge, Pflanzen und eine Reihe schimmernder blaugrüner Flaschen in FOUNT erkennen.",
    {t:"sp", x:[
     [
      {t:"h", x:"Der blockierte Eingang"},
      "Eine aufgebrachte Indigo Jones (sie/ihr) streitet lautstark mit Quinn Wilmar (er/ihm). Als Sehr Beliebte Content-Creatorin besteht Indigo darauf, kostenlose Behandlungen oder Rabatte zu bekommen, wie Jay sie erhält. Quinn ist Leiter von Marketing und Markenkommunikation bei FOUNT und versucht, Indigo aus dem Laden zu bekommen. Er hat dafür keine Zeit.",
      {t:"hinweis", art:"gew", h:"Das erfahren Agenten, wenn sie Indigo zuhören und mit ihr sprechen:", x:[
       "Sie hat endlich einen Termin bei FOUNT ergattert, wurde aber gebeten zu gehen, als man sie beim Filmen von Content in den Mineralbecken erwischte.",
       "Sie ist überzeugt, dass man versucht, sie aus der Branche zu drängen.",
       "Sie weiß es nicht, aber das Video, das sie aufgenommen hat, enthält Beweise für die Anomalie – eine dünne Ranke, die sich aus einem der Abflüsse der Becken schlängelt."
      ]}
     ],
     [
      {t:"h", x:"Verdeckter Ermittler"},
      "Ein Mann fällt hier aus dem Rahmen. Gregory Doppler (er/ihm), verdeckter Ermittler der FDA, hat einen Termin unter dem falschen Namen Jeffrey Fizeau gemacht.",
      "**Helfen die Agenten Gregory nicht,** wird seine plumpe Beweissammlung das Personal von FOUNT in Alarmbereitschaft versetzen. Es wird Wirtschaftsspionage einer Konkurrenzmarke vermuten und den Nachforschungen der Agenten feindselig begegnen.",
      {t:"hinweis", art:"gew", h:"Das erfahren Agenten, wenn sie Gregory dazu bringen, seinen wahren Zweck zuzugeben:", x:[
       "Er hat einen Hinweis auf möglicherweise bedenkliche Inhaltsstoffe in Aquifer-Produkten erhalten.",
       "Seine Kontaktperson ist Poppy Ingler (sie/ihr), eine Kosmetikerin bei FOUNT.",
       "Er ist hier, um selbst Beweise zu sammeln."
      ]}
     ]
    ]},
    {t:"kasten", h:"Weitere Geschäfte", b:[
     {t:"liste", x:[
      "Geographie (Boho-Kleidung und Wohnaccessoires)",
      "Lifestyle by Kindred (eine kuratierte Auswahl an Kleidung, Möbeln und Zeitschriften)",
      "ExploreAdore (Importwaren)",
      "Vango Juice Bar (Kuren aller Art)"
     ]}
    ]}
   ]},
   {t:"In FOUNT", p:15, b:[
    "FOUNT zu betreten ist, als betrete man ein Stockfoto. Der Raum ist von Licht durchflutet, das über weiche weiße Vorhänge und die breiten Blätter von Topfpflanzen tanzt. Sanfte Hintergrundmusik dringt aus unsichtbaren Lautsprechern.",
    "Der erste Raum in FOUNT ist der Shop, der eine Auswahl an Peelings, Cremes, Lotionen und Reinigern führt, dazu eine Auswahl an Duftkerzen und Badeölen. Das neue Aquifer-Set ist wie ein Kunstwerk in einer Glasvitrine in der Mitte des Raums ausgestellt, die blaugrünen Flaschen aus mattiertem Glas funkeln wie Juwelen. Probeflaschen der Linie stehen auf einem runden Tisch um die Vitrine. Hinten liegt der Empfangsbereich.",
    {t:"w4", h:"Aquifer probieren", b:["Ein Agent, der Aquifer probiert, wird von Gefühlen überflutet. Er würfelt mit einem W4:"], x:[
     "Der Agent muss eine Erinnerung teilen, die er zu verdrängen versuchte.",
     "Der Agent muss einer seiner Beziehungen etwas gestehen.",
     "Der Agent sieht Feuer, Rauch, Dunkelheit und dann das Gesicht von Serena Evermore, verbunden mit einem Gefühl von Ungeduld und Verrat.",
     "Der Agent muss einem anderen Agenten sagen, was er wirklich für ihn empfindet."
    ]},
    {t:"h", x:"Empfang"},
    "Serena Evermore (sie/ihr) sitzt mit einem Tablet hinter einem halbkreisförmigen Tresen. Ein ruhiges Rätsel, ihr Unisex-Overall maßgeschneidert, bis auf den letzten Schnitt. Ihr Gesicht kommt einem seltsam bekannt vor. Sie fürchtet, der Tumult draußen könnte potenzielle Gäste stören, und entschuldigt sich. Dennoch lässt sie niemanden ohne Termin am Tresen vorbei.",
    "Sie hat die Eingangstür immer im Blick.",
    "**Eskaliert die Menge draußen weiter,** dringt nach drinnen vor oder betritt ein weiterer Kunde den Laden, wird sie nicht zögern, sich darum zu kümmern. Sie kann auch abgelenkt werden, falls sie im Spa gebraucht wird.",
    {t:"hinweis", art:"anom", h:"Das erfahren Agenten, wenn sie Serenas Tablet untersuchen oder anomale Methoden einsetzen:", x:[
     "Ihre Aufgabe besteht dem Namen nach darin, Gäste zu terminieren und dafür zu sorgen, dass ihr Besuch reibungslos verläuft.",
     "In der Praxis hat sie die Kontrolle über den Großteil des Tagesgeschehens bei FOUNT.",
     "Auf ihrem Tablet sieht Serena sich eine Ahnenforschungs-Website an, bevor sie zum Gästeplan wechselt.",
     "Serena meidet Nachrichten von Dr. Lennox und Dr. Aladejana aus der Produktentwicklung unten und erhält laufend Benachrichtigungen von ihnen. Sie arbeiten mit einer „Quelle“, die früher positiv auf ihre Anwesenheit reagiert hat und sich heute seltsam verhält. Sie hat ein ungutes Gefühl dabei und hat vermieden, ihnen zu antworten oder nach unten zu gehen."
    ]}
   ]},
   {t:"Tiefer hinein", p:16, b:[
    "Hinter dem Empfang verzweigt sich der Flur:",
    {t:"fountplan"},
    {t:"bild", seite:15, src:"01-springs-eternal-werbung-return-to-youth", pos:"heft", x:"Werbeheft „Return to Youth“"},
    "Neben den bemerkenswerten Personen, die in den folgenden Szenen beschrieben werden, gibt es 5 oder 6 weitere Kunden von FOUNT in Behandlung und 3 oder 4 weitere Mitglieder des Personals.",
    {t:"kasten", cls:"leute", h:"Die Leute von FOUNT", b:[
     "Zwölf Personen, denen ihr in FOUNT begegnen könntet:",
     {t:"liste", x:["Harley","Robin","Caitlyn","Gail","Leighann","Itai","Cora","Vincent","Rain","Scott","Aislinn","Zara"]}
    ]},
   ]},
   {t:"Die Klinik", p:17, b:[
    "Ein langer weißer Flur, gesäumt von Türen zu Beratungs- und Behandlungsräumen, am Ende mit einer Lounge. Hier erhalten Besucher unter der Aufsicht von Archer Hadley, Dr. med. (dey/dem), Injektionen, Dermalfiller, Hauterneuerung, Vitamininfusionen und Kryolipolyse. Fünf oder sechs Kunden sind in Behandlung, dazu drei oder vier Mitarbeiter, Dr. Hadley eingeschlossen.",
    "Die abgeschiedenen Behandlungsräume (und die Menschen darin) sind durch die Anomalie gefährdet, die hinter geschlossenen Türen Influencer und andere Kleine Anomalien manifestieren kann.",
    {t:"sp", x:[
     [
      {t:"h", x:"Beratungsraum"},
      "Im Moment ist Dr. Hadley in einer Beratung mit der alternden Nachrichtensprecherin Kira Kinsley (sie/ihr), die bereit ist, sich rückhaltlos auf das einzulassen, was FOUNT zu bieten hat.",
      {t:"hinweis", art:"gew", h:"Das erfahren Agenten, wenn sie durch die angelehnte Tür ihr Gespräch belauschen:", x:[
       "Kira Kinsley sorgt sich, wie sich ihr Aussehen auf ihre künftigen Berufsaussichten auswirken wird, und ist bereit, alle nötigen Schritte zu unternehmen, um zur Jugend zurückzukehren – selbst wenn es sie in den Bankrott treibt.",
       "Dr. Hadley hat ursprünglich Notfallmedizin gelernt, doch nach einem schweren Burnout in der Notaufnahme überredete Dr. Hadleys alter Freund Rowan dey zum Wechsel in die ästhetische Medizin.",
       "Dr. Hadley trägt eine Schlüsselkarte mit Zugang zur Produktentwicklung bei sich."
      ]}
     ],
     [
      {t:"h", x:"Behandlungsraum"},
      "In einem schicken weißen Behandlungsraum bereitet sich Poppy Ingler (sie/ihr) auf ihren nächsten „Gast“ vor. In Wahrheit wartet sie darauf, dass Gregory sie trifft, damit sie gemeinsam einen Weg finden können, das Geheimnis hinter Aquifer aufzudecken.",
      "**Bleiben sie ungestört,** machen sie sich auf den Weg hinunter in den Versorgungsgang unter der Klinik und werden von der Anomalie gefangen.",
      {t:"hinweis", art:"anom", h:"Das erfahren Agenten, wenn sie mit Gregory kommen oder anomale Methoden einsetzen:", x:[
       "Poppy hat ein gutes Auge für die sozialen Dynamiken unter FOUNTs Personal.",
       "Ihr ist aufgefallen, wie verschlossen ihre Kollegen in Bezug auf den Wirkstoff in Aquifer waren, und sie hat Gregory Doppler kontaktiert, damit er ermittelt.",
       "Vorläufige Analysen von Aquifer-Proben zeigten eine hohe Konzentration von Chemikalien mit 93,2 % Ähnlichkeit zu Dopamin und Serotonin sowie eine mögliche Verunreinigung mit einem Halluzinogen.",
       "Die beiden planen, durch das Treppenhaus der Klinik in den Versorgungsgang zu schleichen."
      ]}
     ]
    ]},
    {t:"bild", seite:16, x:"Werbeheft (Fortsetzung)"}
   ]},
   {t:"Das Spa", p:18, b:[
    "Diese Reihe miteinander verbundener Räume ist luftig und labyrinthartig, die Wände mit leuchtenden Lampen und kleinen Pflanzgefäßen bestückt. Es gibt fast keine Türen, nur offene Durchgänge, die von Aromatherapieräumen in Salzräume, in Dampfbäder und in Massageräume übergehen. In der zentralen Halle wölbt sich die Decke, und der Raum öffnet sich zu einer Reihe von Mineralbecken mit unterschiedlichen Temperaturen. Im großen Hauptbecken sind Aubrey (sie/ihr) und Julianna Broughton (sie/ihr) in ein hitziges Gespräch über Juliannas Erbe vertieft.",
    "Rotes Licht fällt aus einem Durchgang weiter hinten im Flur, wo Jay Hsieh (er/ihm) in einem Rotlicht-Therapieraum liegt, die Augen mit einer warmen Kompresse bedeckt.",
    {t:"sp", x:[
     [
      {t:"h", x:"Hauptbecken"},
      "Aubrey und Julianna genießen einen Mutter-Tochter-Tag im Spa, wie sie es häufig tun. Die Ähnlichkeit zwischen den beiden ist unheimlich, und beide kommen einem seltsam bekannt vor. Aubrey hat Julianna gerade gestanden, dass sie ihr gesamtes Vermögen einer entfernten Fremden vererben will, einer Baristin, die sie vor 24 Jahren traf (und seither nicht wiedergesehen hat). Julianna nimmt das nicht gut auf.",
      "**Bleiben sie sich selbst überlassen, eskaliert das Gespräch von Aubrey und Julianna zu einem Streit.** Die Anomalie wird versuchen, den Streit zu beenden, indem sie ihre eigenen Chaos-Effekte Auffrischen, Ausgleichen und/oder Erneuern einsetzt, je nachdem, wie viel Chaos verfügbar ist.",
      "**Setzt die Anomalie Auffrischen ein,** verändert sich das Gesicht des Ziels sichtbar vor den Augen der Agenten und wird unverkennbar identisch mit dem von Serena Evermore vom Empfang.",
      "**Setzt die Anomalie Ausgleichen ein,** vergessen beide Ziele, dass sie miteinander verwandt sind, und der Streit endet abrupt.",
      "**Setzt die Anomalie Erneuern ein,** hören beide Ziele abrupt auf zu streiten, ihre Augen verlieren den Fokus, in ihren Pupillen spiegelt sich ein Flackern von Flammen. Gleichzeitig wenden sie sich den Agenten zu und sagen:",
      "***„Hay nada útil aquí. Destruyelo.“***",
      "Dann sinken sie bewusstlos zurück ins Wasser."
     ],
     [
      {t:"h", x:"Rotlicht-Therapieraum"},
      "Jay ist Schauspieler, Sänger und Model. Er ist überraschend aufrichtig und wirklich sympathisch. Außerdem ist er so schön, dass es fast wehtut, ihn anzusehen, und hat die Herzen einer ganzen Generation erobert.",
      "Er liebt FOUNT, weil es einer der wenigen Orte ist, an denen er sich entspannen kann, ohne sein Sicherheitsgefolge um sich zu haben. Im Moment geht es ihm allerdings nicht gut.",
      "Sein Geist wird von einem Influencer (siehe Chaos-Effekte) manipuliert, der gleich um die Ecke in einem angrenzenden Aromatherapieraum lauert.",
      "**Wird der Influencer erledigt,** verfliegt das Gefühl.",
      "**Bleibt er sich selbst überlassen,** verlässt er womöglich FOUNT auf der Suche nach der Domäne der Anomalie – und die Menge, die draußen wartet, folgt ihm wahrscheinlich.",
      {t:"hinweis", art:"gew", h:"Das erfahren Agenten, wenn sie mit Jay sprechen, ohne wie seltsame Fans zu wirken:", x:[
       "Jedes Mal, wenn er die Augen schließt, sieht er nur verschwommene Visionen von Feuer und Rauch.",
       "Er hat das Gefühl, dass die Visionen nicht aufhören, bis er einen Ort unter der Erde aufsucht, ist sich aber nicht sicher, wo oder wie er dorthin kommt.",
       "Die Visionen und dieses Gefühl begannen vor etwa 20 Minuten, und sie sind so intensiv, dass er sich nicht entspannen kann."
      ]}
     ]
    ]},
    {t:"h", x:"Den Keller betreten"},
    "Unten wird der Glanz von FOUNT durch Betonflure, zischende Rohre, Tanks, Kabel und Abstellkammern ersetzt. Der Versorgungsgang ist ein trostloses, schwüles Labyrinth.",
    "Ranken kriechen an den Wänden entlang und wachsen, genau betrachtet, schnell genug, um sich sehr langsam bewegen zu sehen.",
    "Egal, welche Treppe die Agenten genommen haben, sie gelangen schließlich zu einer großen Metalltür mit der Aufschrift Product Development und einem Schlüsselkarten-Lesegerät als Schloss."
   ]},
   {t:"Produktentwicklung", p:19, b:[
    "Ein kleines Labor zur Gewinnung natürlicher Materialien und zur Entwicklung neuer Kosmetika. Es riecht stark nach Parfüm und Pflanzen. Der zentrale Flur ist von Tiefkühlschränken gesäumt, die alle Hochtemperaturalarm schlagen. Ein panischer Dr. Barley Lennox (er/ihm) schaufelt Stapel von Probengläsern in eine große Kunststoff-Kühlbox voller flüssigem Stickstoff.",
    {t:"h", x:"Gefrierschrank-Fiasko"},
    "Dr. Barley Lennox weiß nicht, warum praktisch über Nacht alles schiefzulaufen begann. Obwohl er schockiert ist, Fremde in diesem geschützten Bereich zu sehen, ist er verzweifelt genug, jeden, der eintritt, um Hilfe zu bitten, seine kostbaren Proben in den einen funktionierenden Gefrierschrank zu schaffen.",
    "**Sind Dr. Lennoxs Proben in Sicherheit,** verstummen die Alarme, und er wird begreifen, dass die Agenten nicht hier sein dürften.",
    "**Überzeugt er sich nicht schnell davon, dass sie nicht gefährlich sind,** aktiviert er das Sicherheitssystem des Labors, versiegelt die Ausgänge und alarmiert die Leitung von FOUNT.",
    {t:"hinweis", art:"anom", h:"Das erfahren Agenten, solange Dr. Lennox abgelenkt ist, wenn sie ihn davon überzeugen, dass sie hierhergehören, oder mit anomalen Methoden:", x:[
     "Dieses Exemplar, das er und Lily Passiflora juviensis genannt haben, wuchs seit der Markteinführung von Aquifer außer Kontrolle. Es verursacht im ganzen Labor alle möglichen technischen Probleme.",
     "Tauen die Proben auf, zersetzen sie sich vollständig, und die unschätzbaren Extrakte aus den Früchten, Blättern und Blüten der Anomalie gehen verloren.",
     "Dr. Lennox hat das Gefühl, eine Art Verbindung zu Passiflora juviensis aufgebaut zu haben. Gelegentlich nennt er sie Flora.",
     "Er und Dr. Aladejana kennen die Nebenwirkungen von Aquifer und arbeiten an einer Möglichkeit, sie zu blockieren oder umzukehren.",
     "Serena, die Passiflora juviensis von ihrem ursprünglichen Fundort geholt hat, kommt regelmäßig herunter, um ihnen zu helfen, weil die Pflanze positiv auf sie reagiert. Heute hat sie ihre Bitten gemieden."
    ]},
    {t:"h", x:"Dr. Aladejanas Labor"},
    "Vom zentralen Flur gehen mehrere Räume mit Computern und Forschungsgeräten ab, darunter ein kleiner Kulturraum, der üblicherweise dazu dient, destillierte Verbindungen an Petrischalen mit menschlichen Hautzellen zu testen. Gerade hat Dr. Lily Aladejana (sie/ihr) eine hauchdünne Scheibe eines der Blätter der Anomalie auf einem Objektträger montiert und untersucht sie unter einem Mikroskop. Hinter ihr sind die Zellkulturbänke und Brutschränke von einem sich ausbreitenden Netz winziger grüner Ranken überzogen.",
    "Dr. Aladejana ist gar nicht erfreut, dass die Agenten ihre Arbeit unterbrechen, und befiehlt ihnen, sofort ihr Labor zu verlassen. Sie hat nur begrenzt Zeit, das Destillationsprotokoll abzuschließen, an dem sie arbeitet, und kann den Agenten keinen Augenblick widmen.",
    "Aktiviert Dr. Lennox das Sicherheitssystem, ist Dr. Aladejana gegenüber den Agenten auf der Hut. Sie zerschlägt einen Erlenmeyerkolben an der Labortheke und führt ihn wie eine Waffe.",
    "Im ungünstigsten Moment geht ein Timer los. Dr. Aladejana rennt los, um sich um eine Zentrifuge in dem Raum zu kümmern, in dem die Anomalie gehalten wird.",
    {t:"hinweis", art:"gew", h:"Das erfahren Agenten, wenn sie erwähnen, die Ausbreitung der Anomalie stoppen zu wollen, oder anomale Methoden einsetzen:", x:[
     "Dass Passiflora juviensis Neurotransmitter-Imitate absondert, ist ein alter Hut, aber kürzlich hat sie in ihren Extrakten Proteine entdeckt, die von einem tollwutähnlichen Virus zu stammen scheinen.",
     "Lily vermutet, dass dies bei Auftragen auf die Haut einen direkten Zugang zum Nervensystem ermöglicht. Sie ist fast fertig damit, einen Blocker auf Basis des Tollwutimpfstoffs zu reinigen.",
     "Sie hat viele Zombiefilme gesehen und glaubt, die letzte Verteidigung gegen die Ausbreitung der Anomalie zu sein.",
     "Dennoch hat sie keine Erklärung für die bizarren Strukturen, die in Gewebeproben von Passiflora juviensis immer wiederkehren: Die Gefäßbündel in ihren Ranken bilden im Querschnitt eine Art Gesicht – ein Gesicht, das, wenn sie blinzelt, Serena sein könnte. Oder es könnte Pareidolie sein."
    ]},
    {t:"h", x:"Gewächshaus"},
    "Im hinteren Teil des Labors liegt ein Raum mit einem gläsernen Kasten von 5 mal 5 Fuß. Darin steht das Rankgitter, an dem eine blühende Passionsfruchtranke wächst, an ihrer Länge in regelmäßigen Abständen kleine Auswüchse. Ein Netz aus Rohren und Schläuchen ist an das Rankgitter angeschlossen, und mehrere Ranken reichen direkt hinab in einen Abfluss am Boden des Geheges. An der hinteren Wand reihen sich Monitore, die zwischen verrauschten Bildern von tropischen Pflanzen, schimmernden Rüstungen, Feuer und Rauch, Händen, die Lotion auftragen, und flackernden, halbverschwommenen Gesichtern hin- und herschneiden.",
    "**Einen Moment nachdem die Agenten eintreten,** lösen sich die Bilder auf den Monitoren in Rauschen auf. Die Auswüchse an der Ranke der Anomalie springen auf und enthüllen weit geöffnete, starre Augen.",
    "Lily keucht auf, als die Zentrifuge mit einem lauten Piepton stehen bleibt. Eine Ranke hat sich um ihr Bein geschlungen und hält sie fest. Sie hält inne, blickt dann zu den Agenten auf, ihr Gesichtsausdruck sanft geworden. In einem Akt der Verzweiflung hat die Anomalie in ihren Geist gegriffen und beginnt, sie als Marionette zu führen, damit sie für sie spricht.",
    "**Sind die Agenten allein eingetreten,** wird sie versuchen, Versetzen einzusetzen, um direkt mit ihnen zu sprechen. Hat sie kein Chaos, bietet sie einem bereitwilligen Agenten eine Ranke an, damit er kurzzeitig ihre Sprecher-Marionette wird.",
    "Die Anomalie wird durch Lily mit den Agenten sprechen. Diese Menschen sollten ihr helfen, Antworten zu finden, aber stattdessen benutzen sie sie. Sie will wissen, was mit ihrem ursprünglichen Zuhause geschehen ist, und sie hat es satt, zu Produkten verarbeitet zu werden. Sie erinnert sich an einen üppigen Regenwald, ein schreckliches Feuer, und sie steht kurz davor, sich an ein bestimmtes Gesicht zu erinnern – jemanden, der ihr wehgetan hat –, kann aber noch nicht alles zusammensetzen. Zunächst will sie in Ruhe gelassen werden, um ihre Ziele zu verfolgen.",
    "**Können die Agenten die Anomalie überzeugen, dass sie auf ihrer Seite stehen,** führt sie sie in ihre Domäne. Stellen sie zu viele Fragen, zieht sie ihre gesamte Pflanze durch den Abfluss in die Kanalisation zurück (und lässt Dr. Aladejana unversehrt zurück).",
    "**Wird das Gehege auf irgendeine Weise aufgebrochen,** zieht sich die Anomalie sofort in die Kanalisation zurück und lässt Kleine Anomalien als Verzögerung zurück, falls sie kann. Hat sie durch Dr. Aladejana mit den Agenten gesprochen, nimmt sie diese mit.",
    {t:"h", x:"In die Kanalisation gelangen"},
    "Sobald die Agenten entdecken, dass die wahre Domäne der Anomalie unter dem Gebäude in der Kanalisation verborgen liegt, gibt es mehrere Wege, die sie einschlagen können. Im Versorgungsgang gibt es eine versteckte Luke, die hinunter ins Kanalsystem führt, oder sie nutzen einen Gullydeckel auf der Mercantile Avenue. Wie auch immer sie vorgehen: **Hat die Anomalie sie nicht in ihre Domäne eingeladen,** wird sie ihre Bemühungen, sie aufzuhalten, verschärfen."
   ]}
  ],
  beg: [
   {t:"Im Dschungel", p:21, b:[
    "Unter Ternion City liegt ein Regenwald, in dem der Kanalgeruch verblasst und vom Duft frischen Regens abgelöst wird. Vögel rufen in der Ferne, und das Wasser fließt klar und frisch. Ranken klettern an den schmutzigen Steinwänden empor und hängen von Gittern und erhöhten Gehwegen.",
    "**Haben sie sie nicht mitgebracht,** folgt Serena Evermore den Agenten heimlich durch den Dschungel, in der Absicht, die Anomalie zu erreichen. Sie weiß, dass ihre Vorfahren für die Zerstörung ihres Zuhauses verantwortlich waren, doch ihr schlechtes Gewissen hielt sie davon ab, ihr die Wahrheit zu sagen. Sie ist bereit, es wiedergutzumachen.",
    {t:"sp", x:[
     [
      {t:"h", x:"Die Domäne betreten"},
      "**Hat die Anomalie zuvor eingewilligt, mit den Agenten in ihrer Domäne zu sprechen,** räumt sie ihnen einen Weg in den Dschungel frei.",
      "Andernfalls versperren dicke Ranken, Wurzeln und dornige Pflanzen den Weg, sodass die Agenten sich selbst einen Pfad schaffen müssen.",
      "Am Rand des Regenwaldes dehnt sich der Raum, hoch aufragende Bäume bilden ein Blätterdach weit über der Stelle, wo einst die Decke der Kanalisation war. Näher an der Domäne liegen fünf Leichen am Boden verstreut. Unter der dicken Schicht aus Ranken und süß duftenden Blüten, die aus ihren Körperhöhlen sprießen, ist kaum etwas von ihnen übrig.",
      "**Durften Gregory und/oder Poppy ihren Plan allein verfolgen,** gehören sie zu diesen Leichen. Im Herzen einer der Leichen liegt eine kleine pulsierende Frucht – eine störende Anomalie.",
      "Das Zentrum der Domäne ist ruhig und still. Eine kleine Quelle speist klares Wasser in die einst schmutzige Kanalisation. Eine dünne, leuchtend grüne Ranke ringelt sich aus dem Wasser empor, an ihrer Spitze erblüht eine riesige violette Passionsblume. Entlang der Ranken, die diese Lichtung säumen, öffnet sich eine Vielzahl tränenfeuchter Augen."
     ],
     [
      {t:"h", x:"Mit der Anomalie sprechen"},
      "Nun fleht die Anomalie ein letztes Mal, sie in Ruhe zu lassen, und bietet an, sie im Gegenzug für ihre Freiheit jünger oder anziehender zu machen. Da ihre Erinnerungen zurückkehren, erträgt sie keinen Augenblick länger in Gefangenschaft – und sie vermutet, dass diese Menschen viele andere Pflanzen und viele andere Leben zerstört haben, um diese Stadt zu bauen.",
      "Sie lässt sich eventuell dazu überlisten, den Normalen Aktenkoffer zu betreten, aber **sie wird gewaltsam reagieren, wenn sie die wahren Absichten der Agency kennt.** Sie will nicht länger zu Produkten verarbeitet werden."
     ]
    ]},
    {t:"h", x:"Geständnis"},
    "**Sobald Serena sieht, dass die Agenten eine Gefahr für die Anomalie darstellen,** stürmt sie aus dem Unterholz und wirft sich vor sie. Schluchzend gesteht sie der Anomalie alles.",
    "Ihre Vorfahren waren für die Zerstörung ihres Zuhauses verantwortlich. Sie hatte zu viel Angst, zu große Schuldgefühle, um ihr die Wahrheit zu sagen. Wo einst ihr Dschungel war, ist jetzt nur eine weitere Betonplatte in einer Vorstadtwüste. Aber sie will es wiedergutmachen.",
    "Das hilft der Anomalie, die letzte Verbindung selbst herzustellen: Das Gesicht, das sie die ganze Zeit sah, und der Grund, warum sie Serena anfangs vertraute, lag nicht daran, dass sie Serena kannte. Sie kannte ihre Vorfahrin, und ihre Vorfahrin zerstörte sie. Das versetzt die Anomalie in einen gesteigerten Zustand von Zorn und Stress, während die Erinnerungen auf sie einstürzen. Sie hat diesem Menschen zweimal vertraut, und zweimal wurde sie verraten.",
    "Die Agenten müssen diesen Konflikt vermitteln oder die Anomalie zerstören. Tun sie es nicht, wird sie Serena töten und sich in der ganzen Stadt auszubreiten versuchen. Serena ist bereit, persönliche Opfer zu bringen, um der Anomalie zu helfen, und wird insbesondere versuchen, die Agenten daran zu hindern, sie zu neutralisieren – selbst wenn sie sich dadurch in Gefahr bringt. Gelingt es ihnen, ihren Konflikt zu überwinden, werden Serena und die Anomalie sich wahrscheinlich verbinden, wodurch Serena eine Resonant wird."
   ]}
  ],
  nach: [
   {t:"Ausgänge", p:22, b:[
    {t:"ausgang", x:[
     {h:"Anomalie gefangen oder neutralisiert", b:[
      "Aquifer-Produkte verlieren spontan sowohl ihre Wirksamkeit als auch ihre Nebenwirkungen – werden aber wegen ihres Limited-Edition-Status sogar noch begehrter. Alte Freunde, die wieder zueinandergefunden haben, verlieren sich wieder aus den Augen, und wer unter dem Einfluss der Anomalie stand, wird sich nicht mehr erinnern, warum ihn diese Erinnerungen, die ihn heimsuchten, so stark berührten. FOUNT wird weiterbetrieben, aber sein hauseigenes Labor schließen."
     ]},
     {h:"Anomalie entkommen", b:[
      "Entkommt die Anomalie und Serena lebt, verbindet sie sich mit ihr. Die beiden gehen auf eine Reise der Selbstfindung, um die Wahrheit ihrer gemeinsamen Geschichte auseinanderzunehmen, bevor sie nach Ternion City zurückkehren und ein Heilzentrum eröffnen, das behauptet, durch eine einzige Berührung zu verjüngen. Das wird der Agency später ernste Probleme bereiten.",
      "Entkommt die Anomalie und Serena ist tot, sucht sie sich ein neues Gewässer, in dem sie sprießen kann, und erholt sich, bis der nächste Anti-Aging-Trend Ternion City erfasst."
     ]}
    ]},
    {t:"h", x:"Lose Enden"},
    "Egal, wie es ausgeht: Überlebende Mitarbeiter von FOUNT, die von der Anomalie wussten, müssen erledigt werden, besonders jene, deren Karrieren am engsten mit den Produkten verbunden sind, die sie nicht mehr herstellen können. Angesichts ihrer Erfahrung bei der Herleitung von Produkten aus einer Anomalie ließe sich die Agency eventuell überzeugen, Barley oder Lily (falls sie überlebt haben) einzustellen, aber nicht beide."
   ]},
   {t:"Vault-Anforderung", p:23, b:[
    {t:"anforderung", h:"Einladung zum Klassentreffen", en:"Reunion RSVP", preis:3, b:[
     "Schreibe ein Datum und einen nahen Ort auf diese Einladung und wirf sie in einen Briefkasten. Alle, die in dem betreffenden Jahr die Highschool (oder ihr örtliches Äquivalent) abgeschlossen haben, erinnern sich plötzlich daran, dass für sie ein Klassentreffen im angegebenen Gebäude stattfindet. Einige Organisatoren tauchen fast sofort auf; innerhalb einer halben Stunde hat sich eine Menschenmenge gebildet und eine spontane Tanzfläche entstanden."
    ]}
   ]},
   {t:"Anomalie-Fähigkeit", p:23, b:[
    {t:"faehig", h:"Erntezeit", en:"Harvest Time",
     x:"Du bist der jüngste Zweig eines Stammbaums. Gieße dir etwas Wasser über den Körper und würfle auf **Beharrlichkeit**.",
     erg:[
      ["ok","**Bei Erfolg** trägst du irgendwo an deinem Körper eine reife, pflaumengroße Frucht: Beschreibe ihr Aussehen und ihren Geschmack. Wer sie ganz verzehrt, hört auf zu altern und wird nie eines natürlichen Todes sterben. Wenn du sie selbst isst, hat sie keine Wirkung."],
      ["plus","**Für jede weitere {3}** kannst du einen der folgenden Effekte wählen, die andauern, bis das Ziel seine nächste Mahlzeit beendet hat:\n– Das Ziel wird überall zum Mittelpunkt der Aufmerksamkeit. Die Leute unterbrechen, was sie tun, um Gespräche mit ihm anzufangen, ihm Gefälligkeiten anzubieten usw.\n– Das Ziel verströmt einen furchtbaren Gestank. Menschen meiden es überall und verabscheuen es, wenn sie nicht entkommen können.\n– Das Ziel vertreibt alle Insekten, gewöhnliche und anomale. Sie können sich dem Ziel nicht nähern.\n– Das Ziel entwickelt unglaubliche Sehkraft. Es kann sein Sehvermögen in einer Sekunde von mikroskopisch bis teleskopisch und alles dazwischen verstellen.\n– Das Ziel ist schmerzunempfindlich."],
      ["plus","**Bei sechs {3}en oder mehr** kannst du wählen, die Eigenschaft zu entfernen, die das Altern deiner Frucht aufhält."],
      ["nein","**Bei Fehlschlag** hört das Ziel auf zu altern, wird aber zugleich sofort von einer schrecklichen und dauerhaften Lebensmittelvergiftung außer Gefecht gesetzt."]
     ], b:[]}
   ]}
  ]
 }
};
/* GESTALTUNG:
 - Seitenzählung: alle „p“ = Dateinummer SNNN (Fußzeile im Buch = p+1). Springs Eternal beginnt S. 8 (Eröffnungsseite), Ende S. 22; S023 ist schon das Bild von Dead Quiet und gehört nicht dazu.
 - S. 8: Eröffnungsseite = TV-Spot-Storyboard „Aquifer by FOUNT“ (8 Panels mit Szenenbeschreibung kursiv + VO), Hintergrund Pastell-Wasser, ab Panel 7 verblasst der Text; als handout art „abschrift“ nachbauen. VO zu Schritt 3 und 4 sind im Bild verdeckt/abgeschnitten (mit „…“ markiert).
 - S. 10: Optionale Ziele (Kasten im Buch) -> ziele. Impuls und Aktuelle Lage stehen auf S. 10 oben; Impuls steckt im profil-Block.
 - S. 12/13/16/17/18/20: zweispaltige Gegenüberstellungen als sp; die Spaltenköpfe sind {t:"h"} innerhalb der Spalten (sollen in der Seitenleiste unter dem Abschnitt erscheinen).
 - S. 13: Kasten „Weitere Geschäfte“ (Ladensymbol) als kasten mit liste.
 - S. 14: „Aquifer probieren“ (Flaschen-Symbol) als w4; die Einträge sind ohne vorangestellte Zahl geschrieben (1–4 werden im Buch als Zahlensymbole gezeigt).
 - S. 15: Schaubild „Flowing Deeper“ (Empfang -> Klinik / Spa -> Treppen -> Produktentwicklung) als kasten mit Liste UND bild-Platzhalter; Kasten „Die Leute von FOUNT“ (Ausweis-Symbol), 12 Vornamen in zwei Spalten. Rechts unten (S. 15) und links unten (S. 16) angeschnittene Fotos des Werbehefts „Return to Youth“ (Aquifer-Flaschen vor Wasserfall).
 - Hinweislisten: violett „gew“ = Maya, Tryptik Café, Indigo, Gregory, Beratungsraum, Jay, Dr. Aladejanas Labor; orange „anom“ = Empfang (Serenas Tablet), Behandlungsraum (Poppy), Freezer Fiasco (Dr. Lennox).
 - S. 18: Abschnitt „Den Keller betreten“ (S. 18 oben) hängt als h am Ende von „Das Spa“; „In die Kanalisation gelangen“ (S. 20) hängt als h am Ende von „Produktentwicklung“. Die Anomalie wird mit „sie“ bezeichnet.
 - Chaos-Effekte S. 11: ▲-Markierung (neu:1) bei Auffrischen, Ausgleichen, Erneuern, Rückkehr. Kein Sonderkasten.
 - Begegnung S. 20/21: Abschnitt „Im Dschungel“ mit sp (Domäne betreten / Mit der Anomalie sprechen), dann h „Geständnis“.
 - Buchreiter heißen wie im Gerüst (keine Abweichung). Der spanische Spruch „Hay nada útil aquí. Destruyelo.“ bleibt im Original.
*/
