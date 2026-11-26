/* The Vault – Planet Providence (Buch S. 144–161). Übersetzung aus dem Englischen. */
window.TA_VAULT = window.TA_VAULT || {};
TA_VAULT["planet-providence"] = {
 cw: "Gedächtnisverlust, Gefangenschaft",
 chaosP: 148,
 chaos: [
  {k:2, n:"Verderben", en:"Corrupt", x:"Planet Providence verlangt Markentreue. Logos, Kunst und Symbole von außerhalb werden verzerrt, damit sie zum Branding passen – und alle anderen Anomalen Veränderungen enthalten ein Logo."},
  {k:4, n:"Manifestieren", en:"Manifest", x:"Eine diebische Anomalie, die aussieht wie der kybernetische Papagei auf Sailor Knots’ Schulter und Gegenstände stiehlt, die im Park nicht erlaubt sind.\n\nEine einsperrende Anomalie, die aussieht wie Spielzeughandschellen, nimmt Regelbrecher fest und fliegt sie hinter die Kulissen, wo ein Crewmitglied oder die Anomalie sie befragen kann.\n\nEine täuschende Anomalie, die Patricia Dicylee nachahmt, wandert durch den Park und sagt, es gehe ihr gut und der Park sei wunderschön."},
  {k:5, n:"Piratenparade", en:"Pirate Parade", neu:1, x:"Platz da, Platz da! Es ist Zeit für die tägliche Piratenparade! Alle Gespräche brechen ab und die meisten Darsteller schließen sich der Parade an, die eine Stunde für eine Runde durch den Park braucht."},
  {k:5, n:"Anziehen", en:"Attract", x:"Heute ist Klassenausflugstag, und eine Schulklasse ist gerade eingetroffen. Sorgen wir dafür, dass sie Spaß haben und in Sicherheit bleiben!"},
  {k:6, n:"Ausdehnen", en:"Expand", x:"Wir sollen eine Gemeinschaft sein, die sich dem Spaß verschrieben hat! Die Kuppel wächst und verschluckt die Stadt um sie herum. Die Bewohner werden als Crewmitglieder eingegliedert und sind darauf bedacht, dass alle Spaß haben. Um den neuen Platz zu füllen, eröffnet der Park mehrere halbgare neue Attraktionen."},
  {k:7, n:"Verdoppeln", en:"Double", x:"Mit Verdoppeln: Eine verlockende Anomalie nimmt die Gestalt eines Lautsprechers an, der die Fahrt des Lebens auf etwas verspricht, das wie eine gewöhnliche Bank aussieht. Wenn sich Agenten auf die Bank setzen, stülpt sich eine große, kastenförmige einsperrende Anomalie über sie und erzeugt die überzeugende Illusion einer endlosen Achterbahn. Aus dem Kasten dringt kein Laut."},
  {k:8, n:"Versetzen", en:"Displace", x:"Zeit für einen Haufen Spaß. Agenten werden in ein Gruselkabinett teleportiert, das einem verwunschenen Geisterpiratenschiff nachempfunden ist. Das Ziel ist, den Agenten Angst einzujagen, aber auch die Einsamkeit der Anomalie auszudrücken, seit der Park nicht mehr aktualisiert wird."},
  {k:10, n:"Ausgang durch den Souvenirshop", en:"Exit Through the Giftshop", neu:1, x:"Agenten werden vor die Kuppel teleportiert und dürfen nicht wieder hinein. Sie tragen ein neues Shirt über ihrer ursprünglichen Kleidung, auf dem steht: Ich war auf Planet Providence und alles, was ich bekam, war dieses miese T-Shirt."},
  {k:30, n:"Das machen wir gleich nochmal", en:"Let’s Do That Again", neu:1, x:"Wir hatten so viel Spaß, warum erleben wir nicht den ganzen Tag noch einmal von vorn, genau wie beim ersten Mal?"}
 ],
 ziele: [
  {art:"bel", n:3, x:"wenn du eine Planet-Providence-Uniform besorgst und trägst"},
  {art:"bel", n:1, x:"wenn du Patricia findest"},
  {art:"ver", n:3, x:"wenn du eine Meuterei auslöst"}
 ],
 reiter: {
  profil: [
   {t:"Fundstück", p:145, b:[
    {t:"bild", seite:144, x:"Eröffnungsseite: Titelschriftzug Planet Providence (Achterbahn-Skizze), Briefkarte von Sailor Knots, Logo „PP“, Schiff mit Raketenantrieb"},
    {t:"handout", art:"brief", h:"Ahoi da!", x:[
     "Glückwunsch zur Planung deines Ausflugs nach Planet Providence! Ich bin dein Erster Maat Sailor Knots und führe dich Schritt für Schritt in dein Weltraumpiraten-Abenteuer! Denk immer daran: Ich beobachte dich immer!",
     "Ich habe eine Karte beigelegt, damit du deine Tour durch die Attraktionen planen kannst. Und wie du siehst, gibt es so viel zu tun! Vom Terrestrial Torpedo über die Schießbude oder die Lokale bis zur täglichen Piratenparade: Komm früh, damit du nichts verpasst! Außerdem hast du während deines Besuchs die Chance, den geheimen Ort zu finden und an einer epischen Weltraumschlacht gegen andere Piraten teilzunehmen!",
     "Wir haben ein paar Regeln, die du vorab kennen solltest! Bitte bringe keine Waffen oder nicht genehmigten Elektrogeräte in den Park. Wir haben Walkie-Talkies, falls du Kommunikation brauchst, aber lass Kameras und Handys zu Hause. Lebe im Moment! Du erlebst schließlich ein Abenteuer.",
     "Alle Mann an Deck, diese Woche jährt sich der unzeitige Tod unseres Gründers zum ersten Mal. Bitte erweise Wyatt Dicylees Statue in Pulsar Port bei deiner Ankunft deinen Respekt. Ich weiß, er würde sich wünschen, dass du so viel Spaß hast, dass du nie wieder gehen willst!",
     "Das war’s fürs Erste. Ich muss dafür sorgen, dass der Park in Schiffsform ist, wenn du ankommst. Und ich kann es kaum erwarten, dafür zu sorgen, dass du den meisten Spaß hast. Bis bald, Kumpel!",
     "Dein Erster Maat,",
     "**Sailor Knots**"
    ]}
   ]},
   {t:"Überblick", p:146, b:[
    {t:"profil",
     lead:"Planet Providence war einmal ein gewöhnlicher Freizeitpark. Nach dem Tod seines rätselhaften Gründers hat eine Anomalie die Leitung übernommen, um dessen kühnste Träume zu verwirklichen. Nicht länger an unsere Realität gebunden, ist der physische Park nur die Fassade für ein Portal in eine andere Galaxie – eine, in der das Weltraumpiraten-Thema des Parks echt ist.\n\nDie Anomalie versteckt sich in einem Satelliten, der den neuen Planeten des Parks umkreist, überwacht den Tagesbetrieb aber im animatronischen Körper des Maskottchens des Parks: Sailor Knots, einem menschengroßen Piratenaffen. Besucher haben immer die Zeit ihres Lebens … sofern sie nicht für immer festsitzen.",
     fokus:"Freude und Wertschätzung der Vision von Wyatt Dicylee.",
     domaene:"Ein Satellit, der über Planet Providence in einer anderen Galaxie schwebt.",
     impuls:"Die Anomalie kann den ganzen Park nicht allein betreiben und hat begonnen, Menschen und Außerirdische als Angestellte zu zwangsverpflichten. Diese Angestellten haben keine Ahnung, wie lange sie schon im Park sind: Jeden Tag setzt die Anomalie ihre Erinnerungen zurück, um ihre Begeisterung für die Arbeit zu erhalten. Manche Besucher kommen in den Park in der Hoffnung, vermisste Angehörige zu finden, die angestellt wurden – doch wenn sie nicht selbst angestellt werden, werden sie ohne Erinnerung an das, was sie entdeckt haben, fortgeschickt.\n\nEinen ähnlichen Gedächtnislöschungs-Effekt wendet sie auf alle Besucher an, um Aufmerksamkeit von außen zu vermeiden: Nachdem sie gegangen sind, haben Gäste Mühe, genau zu erklären, wie der Park im Einzelnen war. Alle erinnern sich nur daran, wie lustig ihr Erlebnis war, und können es kaum erwarten, wiederzukommen. In vielen Bewertungen heißt es, Besucher hätten nach der Rückkehr eine neu belebte Liebe zu ihren Hobbys verspürt."},
    {t:"h", x:"Geschichte"},
    "Der Schöpfer von Planet Providence, Wyatt Dicylee (er/ihm), wollte, dass der Park etwas völlig Einzigartiges wird: ein Ort, an dem Kinder wirklich glauben konnten, andere Welten seien in greifbarer Nähe. Bevor der Park mehr als eine halbwegs beliebte Touristenattraktion werden konnte, wurde Wyatt krank. Eine Behandlung konnte einen Teil seiner Beschwerden lindern, doch sein nahender Tod ließ sich nicht aufhalten. Er verbrachte seine gesamte verbleibende Zeit in der Kontrollzentrale des Parks – im Leugnen seines Zustands – und tippte große Pläne in die Datenbank, wohin er den Park in Zukunft steuern sah.",
    "Dicylees Träume erschufen eine Anomalie, die sich ganz auf die Verbesserung des Parks konzentrierte. Sie tat ihr Bestes, um Wyatts Hand zu den richtigen Anschaffungen, Bauplänen und Einstellungen zu lenken, damit er seine Ziele erreichte – doch eines Tages kam Wyatt nicht mehr zurück.",
    "Als die Anomalie erkannte, dass niemand sonst Dicylees Fackel weitertragen würde, nahm sie die Sache selbst in die Hand. Sie erkannte ihre Macht, gab gewöhnliche Mittel auf und verwandelte den Park in ein interstellares Portal, das Besucher auf den Mond eines fernen Planeten schickt. Hier ist die Schwerkraft geringer, die Fahrgeschäfte trotzen der Physik, und der violette Himmel zeigt neue Sternbilder und die Breitseite eines nahen grünen Planeten.",
    {t:"h", x:"Erscheinung"},
    "Die wahre Gestalt der Anomalie ist Dicylees ursprünglicher Computer im umkreisenden Satelliten des Parks, doch im Park zeigt sie sich meist als Sailor Knots (er/ihm), das bei Kindern beliebte Maskottchen, sofort erkennbar an seinem Dreispitz und seinem schwatzhaften Papagei auf der Schulter.",
    {t:"h", x:"Aktuelle Lage"},
    "Die Anomalie ist derzeit in höchster Alarmbereitschaft wegen eines jüngsten Angriffs auf ihren Satelliten durch die (sehr reale) Galactic Space Force, die begonnen hat, das Verschwinden außerirdischer Angestellter zu untersuchen. Um sich zu schützen, umgeben den Satelliten nun drei Schilde, die jeweils von einer der drei Fraktionen im Park kontrolliert werden.",
    "Erschwerend kommt hinzu, dass ein Video des Parks in der gewöhnlichen Welt viral gegangen ist. Diese dramatische Aufnahme enthüllt unmögliche Details, die die Anomalie geheim halten wollte, steigert die Besucherzahlen stark und hat die Aufmerksamkeit der Agency geweckt."
   ]}
  ],
  vor: [
   {t:"Morgenbesprechung", p:147, b:[
    {t:"morgen", x:[
     "Die Beziehung eines Agenten hat bei einer Wohltätigkeitsaktion Freikarten für Planet Providence gewonnen und will unbedingt hin.",
     "Die Lokalnachrichten melden, dass der Bau eines neuen Spielplatzes wegen zahlreicher Sicherheitsbedenken eingestellt wurde. Die für das Projekt zuständige Organisation kontert, moderne bürokratische Vorschriften würden den Kindern den Spaß verderben.",
     "Die Beziehung eines Agenten will über ihre Meinung zu einem Buch sprechen, das sie gelesen hat und in dem behauptet wird, eine Utopie könne nur unter einer Diktatur mit starker Vision beginnen.",
     "Auf dem Weg zur Arbeit kommen Agenten an alten Flugblättern vorbei, auf denen behauptet wird, Ash, die beliebte Schneeeule aus dem Vogelschutzzentrum von Ternion City, sei verschwunden.",
     "Das Handy eines Agenten zeigt das falsche Datum an, fünf Tage in der Vergangenheit. Nach einem Hard Reset ist es behoben."
    ]}
   ]},
   {t:"Einsatzbesprechung", p:147, b:[
    {t:"vorlesen", b:[
     "Den Agenten wird ein viral gegangenes Video gezeigt, aufgenommen bei den jüngsten Abschlussveranstaltungen auf Planet Providence. Das Video zeigt eine unmögliche Szene: eine echte Weltraumschlacht zwischen den drei Fraktionen des Parks und der Galactic Space Force, einer tatsächlichen außerirdischen Strafverfolgungsbehörde, die die Agency kennt, über die sie aber keine weiteren Einzelheiten weitergeben kann. Die Parkbesucher werden von einer körperlosen Cartoonstimme ermuntert, Planet Providence zu beschützen und ihre Souvenir-Blaster auf die Eindringlinge zu richten – was offenbar funktioniert. Die Person, die das Video aufnimmt, liefert überzeugende Kommentare wie:",
     "*Wow!* *Whoa!*",
     "*Ich kann nicht glauben, dass das passiert.*",
     "Waffen und Elektrogeräte sind im Park nicht erlaubt. Das ist einer der Gründe, warum dieses virale Video so besonders ist – es ist das erste öffentliche Video davon, was im Park vor sich geht.",
     "Die Agency teilt die historischen Unterlagen des Parks und weist darauf hin, dass der Gründer Wyatt Dicylee vor einem Jahr gestorben ist und das Eigentum an seine entfremdete Tochter Patricia Dicylee überging – sie hatte öffentlich beschlossen, den Park zu verkaufen, sich dann aber offenbar umentschieden. Sie wurde seit Monaten nicht mehr in der Öffentlichkeit gesehen.",
     "In den Städten rund um Planet Providence werden Menschen vermisst. Die Agency glaubt, dass der Freizeitpark beteiligt sein könnte."
    ]}
   ]}
  ],
  erm: [
   {t:"Ankunft im Park", p:149, b:[
    "Planet Providence liegt innerhalb einer riesigen Kuppel auf der Erde. Aus der Ferne sieht sie aus wie die obere Hälfte des Mondes, mit Schildern, die aus Kratern ragen und einige der Attraktionen im Inneren benennen: Jellyfish Jingle, Terrestrial Torpedo und Starlight Simulation.",
    "Ein etwa 30 Meter langer Tunnel führt aus der Kuppel heraus, mit zwei großen Türen als Ticketeingang des Parks. Vor der Kuppel arbeiten keine Angestellten – alles wird über Bildschirme und Maschinen abgewickelt.",
    "Am Tag des Einsatzes stürmt es. **Wenn die Agenten ankommen,** schlägt ein Blitz in eines der herausragenden Schilder der Kuppel ein, und ein lauter Donnerschlag zittert durch die Luft. Die Menschen, die den Park verlassen, scheinen weder Regen noch Blitz zu bemerken, und der glasige Blick in ihren Augen und das Lächeln auf ihren Gesichtern zucken nicht im Geringsten, selbst im strömenden Regen, der sie durchnässt.",
    "Der Park nähert sich bereits der Kapazitätsgrenze – ein digitaler Zähler erklärt, dass heute nur noch 14 weitere Personen eingelassen werden, doch die Schlange umfasst über hundert Wartende.",
    {t:"h", x:"Willkommenstor"},
    "Hinter den Eingangstüren, die sich nach jeder Gruppe schließen, die die Kuppel betritt, gehen die Besucher durch einen glitzernden Tunnel, begleitet von einem leisen Summen. Entlang der Wände deuten Illustrationen das Weltraumabenteuer an, das bevorsteht: Seeschiffe im Weltraum, Kröten, die auf Dinosauriern reiten, Kometen, die sich durch Planeten schlängeln, und ein wahrsagender Stern. Die Stimme von Sailor Knots begrüßt die Besucher über die Lautsprecheranlage und gibt ein paar einfache Regeln weiter:",
    {t:"liste", x:[
     "Keine Video- oder Audiogeräte erlaubt. Die außerirdischen Besucher lassen sich davon zu sehr ablenken. Alle Besucher werden automatisch auf Elektrogeräte gescannt und müssen sie auf ein Gerät legen, das ihre Akkus entleert, um eingelassen zu werden.",
     "Keine mitgebrachten Speisen oder Getränke erlaubt. Der Food Court bietet eine Auswahl kostenloser und günstiger Snacks und Getränke, die nicht von dieser Welt sind.",
     "Kein Wiedereintritt. Sobald du den Park für den Tag verlässt, muss sich dein Körper wieder an die Rotation der Erde gewöhnen. Du bist herzlich eingeladen, morgen wiederzukommen, falls du mehr Weltraumabenteuer benötigst!"
    ]},
    {t:"h", x:"Einbruch"},
    "Es gibt keine anderen offensichtlichen Eingänge in die Kuppel, doch wenn Agenten die Kuppel an einer anderen Stelle durchbrechen, zeigt jeder Eingang, dass alles darin in die andere Galaxie versetzt wurde.",
    "**Wenn sie auf diesem Weg eintreten,** erscheinen sie in einem von vier Bereichen des Parks. Würfle einen W4, um herauszufinden, in welchem:",
    {t:"w4", h:"Wo tauchen sie auf?", b:[], x:["Pulsar Port","Skipper Station","Titan’s Cove","Sunlit Sol System"]},
    "Wenn die Agenten auf diesem Weg eintreten, haben sie keine Armbänder vom Parkeingang – wenn ein Angestellter es bemerkt, versucht er, sie aus dem Park zu werfen.",
    {t:"kasten", h:"Parkangestellte", b:["Alle Parkangestellten tragen passende marineblaue Overalls mit dem Gesicht von Sailor Knots darauf und führen Pager bei sich, über die die Anomalie mit ihnen kommuniziert. Alle Angestellten riechen ein wenig nach Müll."]},
    {t:"h", x:"Kartenstation"},
    "Nach dem Willkommenstor und den Regeln folgt die Kartenstation: viele Computer mit Kreditkartenschlitzen. Ein lautes Summen erfüllt den Raum. Eine kleine Menschenmenge hat ihre vorgeschriebenen Eintrittsarmbänder bereits gekauft und angelegt. Die Gäste scannen ihre Armbänder nacheinander an einem Sicherheitskiosk an der Schranke und verschwinden dann hinter einem Vorhang, hinter dem blinkende Lichter zu erahnen sind.",
    "Überall im Raum angebrachte Anweisungen fordern die Gäste auf, an einem der freien Computer ein Eintrittsarmband zu kaufen.",
    {t:"handout", art:"schild", h:"Preistafel", x:[
     "Basisticket: 30 $",
     "Add-on „Unbegrenzt Essen und Trinken“: +30 $",
     "Add-on „Turbo Rocket“ – Schlange überspringen: +30 $",
     "Erinnerungs-Schlüsselanhänger von Sailor Knots mit dem heutigen Datum: +30 $",
     "**Nur Karte. Kein Bargeld!** Der Kauf eines Tickets gilt als Unterzeichnung einer Haftungsausschlusserklärung. Keine Rückerstattung!"
    ]},
    "Die Eintrittsarmbänder werden aus einem Schlitz im Computer ausgegeben, vibrieren und leuchten auf, sobald man sie anlegt. Sobald die Agenten ihre Armbänder haben, weist eine automatische Stimme sie zum Scan-Kiosk und durch den Vorhang.",
    {t:"h", x:"Eingangsportal"},
    "Hinter dem Vorhang liegt ein großes kreisrundes Portal aus pinker statischer Energie, eingelassen in eine gekrümmte Wand – den Rand der Kuppel. Blaue und violette Wolken wirbeln darin und verdecken die galaktischen Szenen auf der anderen Seite. Dieses Portal ist ein praktischer Effekt, um den Eingang dramatischer zu gestalten – in Wahrheit wurde das gesamte Innere der Kuppel im Raum versetzt. Sailor Knots’ aufgezeichnete Stimme ertönt erneut über die Lautsprecheranlage.",
    "***„Willkommen, Erdlinge! Ich bin euer Erster Maat Sailor Knots und sorge dafür, dass ihr eine sichere Reise zu eurem Ziel habt. Gleich auf der anderen Seite dieses Portals liegt ein sicherer Hafen für Weltraumpiraten: Planet Providence, und ihr müsst ihn beschützen! Eure Mission ist es, die Kapitäne der drei Crews zu treffen, die hier leben, und ihre Unterschriften in einem ganz besonderen Buch zu sammeln. Sobald sie abgezeichnet haben, könnt ihr eure Crew als offizielle Piraten von Planet Providence eintragen und Zugang zu einem besonderen Bereich des Hafens erhalten, den nur die hingebungsvollsten Weltraumpiraten betreten dürfen. Tretet durch das Portal, um loszulegen!“***",
    "Hier sehen sie endlich zum ersten Mal einen Angestellten: Ein menschlicher Arbeiter reicht dem traurigsten aussehenden Agenten ein schlichtes Buch mit dem Titel *Handbook for New Pirate Recruits: for Space and Other Worlds*. Darin befinden sich eine Karte, ein Feld zum Eintragen der Piratennamen der Gruppe und Porträts der drei Piratenkapitäne von Planet Providence.",
    "Die Agenten können Fragen stellen, doch der Arbeiter tut sein Bestes, sie zügig durch das Portal zu schleusen, damit andere Parkbesucher den Park mit möglichst wenig Wartezeit betreten können.",
    {t:"hinweis", art:"gew", h:"Das erfahren Agenten, wenn sie die Schlange aufhalten und den Arbeiter fragen:", x:[
     "Ihr habt Planet Providence betreten, eine Piratenbasis auf einem fernen Mond.",
     "Hier sind bereits drei Crew-Fraktionen zu Hause, und wenn ihr Zugang zum geheimen Bereich des Parks wollt, braucht ihr den Segen der Piratenkapitäne der drei Fraktionen.",
     "Die Unterschrift eines Kapitäns auf seinem Porträt ist alles, was ihr als Beweis braucht.",
     "Dieser Bereich heißt Truce Tavern, der einzige Ort, an dem alle Crews miteinander auskommen. Das ist der perfekte Ort, um mehr über die Fraktionen und die Geschichte des Parks zu erfahren.",
     "Ihr bekommt nur ein Buch, und wenn ihr es verliert, müsst ihr es an einem anderen Tag erneut versuchen."
    ]}
   ]},
   {t:"Im Park", p:151, b:[
    {t:"h", x:"Truce Tavern"},
    "Durch das Portal liegt Truce Tavern, ein großes, geschlossenes Restaurant. Hier sind alle möglichen Figuren, um für Atmosphäre zu sorgen, Fragen zu beantworten, Musik zu spielen und zu interagieren. Agenten können Getränke kaufen, Snacks holen und Parkpläne mitnehmen.",
    "Mehrere Sailor-Knots-Animatronics bedienen verschiedene Abschnitte einer langen Bar. Die meisten davon sind automatisiert, doch wenn die Anomalie etwas Merkwürdiges bemerkt, versetzt sie ihr Bewusstsein in einen davon, um zu beobachten oder zu deeskalieren. Parkangestellte können über ihre Pager ihre direkte Aufmerksamkeit anfordern.",
    "Charakter-Animatronics, die niederrangige Piraten jeder Fraktion darstellen, sind hier, bieten aber nur begrenzte, sich wiederholende Dialoge. Agenten sehen menschengroße Kröten, mehrere Roboter mit cartoonhaften, übertriebenen Zügen und andere nebulöse außerirdische Formen mit hoher Intelligenz.",
    "Obwohl die Crew-Fraktionen technisch gesehen immer im Krieg miteinander sind, sind sie darauf programmiert, einander innerhalb der Taverne zu dulden.",
    {t:"hinweis", art:"gew", h:"Das erfahren Agenten, wenn sie sich in der Truce Tavern unter die Leute mischen:", x:[
     "Der Planet ist in Wirklichkeit ein Mond, der einen viel größeren Planeten umkreist. Den Bewohnern von Planet Providence ist der größere Planet wegen Gesetzesbruchs verboten.",
     "Die meisten Piraten auf Planet Providence handeln mit Diebesgut und Schmuggelware, sogar untereinander.",
     "Alle sind gegen die Galactic Space Force, die dieses System seit Kurzem bestreift. Dieser Planet soll gesetzlos sein!",
     "Der Satellit, der Planet Providence umkreist, muss von allen Fraktionen um jeden Preis beschützt werden. Er warnt die Fraktionen, wenn die Galactic Space Force angreift, und ohne ihn wird Providence fallen.",
     "Dieser Bereich des Weltraums ist für Spezies (wie Menschen) bewohnbar, die Luft und wärmere Temperaturen zum Überleben brauchen. Menschen haben keine Probleme, auf diesem Planeten oder im umgebenden Weltraum ohne Anzug oder Helm zu sein."
    ]},
    {t:"karten", x:[
     {h:"Skipper Station", s:"Komet · blau und silber", b:[
      {t:"liste", x:[
       "Tragen das Fahnensymbol eines rasenden Kometen auf ihrer blau-silbernen Kleidung.",
       "Interessieren sich für Tapferkeit, Risikobereitschaft und Plündern.",
       "Oft vogelartige Außerirdische."
      ]},
      "*„Ahh, neue Rekruten für Wingrit. Pass auf seinen Schnabel auf!“*",
      "*„Du schließt dich der Kometencrew an, was? Hoffentlich magst du Federn.“*"
     ]},
     {h:"Titan’s Cove", s:"Dinosaurierkopf · rot und schwarz", b:[
      {t:"liste", x:[
       "Tragen das Fahnensymbol eines außerirdischen Dinosaurierkopfs auf ihrer rot-schwarzen Kleidung.",
       "Interessieren sich für Gerissenheit, Hinterhältigkeit und das Einfangen von Monstern.",
       "Oft amphibische oder dinosaurierartige Außerirdische."
      ]},
      "*„Wegen der Titans hier? Sag mal, wie gut kommst du mit Dinosauriern klar?“*",
      "*„Gutes Geld bei den Titans. Wenn es dir nichts ausmacht, nach Sumpf zu riechen.“*",
      "*„Leg dich nicht mit Captain Pat an!“*"
     ]},
     {h:"Sunlit Sol System", s:"Stern · glitzerndes Gold", b:[
      {t:"liste", x:[
       "Tragen das Fahnensymbol eines vollkommenen strahlenden Sterns auf ihrer glitzernden goldenen Kleidung.",
       "Interessieren sich für Macht, Status und Geschäftemachen.",
       "Humanoide Außerirdische mit runden Köpfen und glitzernder goldener Kleidung."
      ]},
      "*„Hoffentlich habt ihr eure Sonnenbrillen für all das Sonnenfunkeln mitgebracht.“*",
      "*„Was? Noch so ein Niemand, der ein Star werden will?! Pfft!“*",
      "*„Du hast noch einen weiten Weg vor dir, bevor Captain Sirius dich auch nur ansieht.“*"
     ]}
    ]}
   ]},
   {t:"Pulsar Port", p:152, b:[
    "Vor der Taverne liegt ein offener Bereich mit Wegen zu jedem Parkabschnitt und einem perfekten Blick auf den Nebel darüber. Kleine Restaurants, eine Reihe von Sitzgelegenheiten und spezialisierte Süßwarenläden machen Pulsar Port zu einem großartigen Treffpunkt für eine Pause vom Rest des Parks. Agenten finden hier alle typischen Freizeitpark-Köstlichkeiten.",
    "Im Westen nehmen die Gebäude und Schilder unter Fahnen mit einem rasenden Kometen eine blau-weiße Ästhetik an, und Schilder lesen „Skipper Station voraus.“ Im Norden blinken rote Lichter über Schildern mit der Aufschrift: „Achtung! Hier geht’s zu den Titans!“",
    "Im Osten lockt ein hoher, von funkelnden Sternen geschmückter Torbogen die Besucher hindurch. Auf dem Boden, umgeben von gelben Linien, die weiter in den Park führen, steht eine Nachricht: „Folge den Strahlen der Sonne zum Sol System.“",
    {t:"h", x:"Pulsar-Brunnen"},
    "Ein großer Brunnen steht in der Mitte von Pulsar Port. Statt Wasser wirbelt und funkelt rosa Staub um ein großes Hologramm von Wyatt Dicylee, der stolz neben Sailor Knots posiert. Wer sich dem Brunnen nähert, löst eine Aufnahme von Sailor Knots aus, die sagt: „Wyatt war der Gründer von Planet Providence. Er träumte davon, ein sicheres Land des Spaßes jenseits aller Vorstellungskraft zu schaffen. Wyatt ist letztes Jahr verstorben, aber der Park macht weiter, um seinen Traum zu erfüllen. Bitte amüsiere dich ihm zu Ehren!“",
    "**Wenn Agenten sich dem Brunnen nähern,** belauschen sie Alice (sie/ihr), eine Besucherin, die einen Parkangestellten, Jack (er/ihm), anfleht. Alice verlangt zu wissen, warum Jack sie seit Wochen im Stich gelassen hat, während er beharrt, es sei erst einen Tag her.",
    {t:"h", x:"Terrestrial Torpedo"},
    "Die Schlange für Terrestrial Torpedo, eine intensive Abenteuer-Achterbahn, beginnt hier. Dies ist der beliebteste Bereich des Parks, und wenn die Agenten ankommen, hat sich bereits eine Warteschlange gebildet.",
    {t:"hinweis", art:"gew", h:"Das erfahren Agenten über die Gefahren der Galactic Space Force von einem interaktiven Sailor Knots in der Schlange:", x:[
     "Die GSF ist eine Weltraumgruppe, die damit beauftragt ist, den Status quo im und um den Weltraum zu bewahren, nicht unbedingt, bestimmte Gesetze durchzusetzen.",
     "Die GSF hat Planet Providence ins Auge gefasst und will den Spaß ruinieren, indem sie alle Weltraumpiraten verhaftet und den Park schließt.",
     "Planet Providence hat einen Verteidigungssatelliten, der die Piratenkapitäne alarmiert, wenn die GSF im Anflug ist.",
     "Terrestrial Torpedo ist eine Bergbaumaschine, die einen geheimen Tunnel gräbt, um der GSF zu entkommen!"
    ]},
    "Agenten sehen außerdem die Achterbahn auf der Strecke hin und her flitzen und blitzschnell im Untergrund verschwinden, begleitet vom Klang fröhlicher Schreie.",
    {t:"hinweis", art:"gew", h:"**Wenn die Agenten die Achterbahn fahren,** bekommen sie vom höchsten Hügel der Bahn einen Blick über das gesamte Parkgelände und können Folgendes sehen:", x:[
     "Die Kometenformen von Skipper Station.",
     "Ein Gewässer, in dem etwas schwimmt, in Titan’s Cove.",
     "Eine riesige leuchtende, mechanische Sonne, umgeben von Geschäften, im Sunlit Sol System.",
     "Ein Dorf aus etwa 50 identischen Häusern im Bereich der Gemeinschaftsunterkünfte.",
     "Ein großes Kuppelgebäude mit einem roten X am Rand des Parks. (Dies ist der „geheime“ Ort, der nur mit den drei Kapitänsunterschriften zugänglich ist.)",
     "Ein echtes, fernes GSF-Patrouillenschiff am Himmel."
    ]}
   ]},
   {t:"Die Crew-Bereiche", p:153, b:[
    "Jede Flotte hat ein Flaggschiff, das normalerweise am Boden bleibt und den Gästen als Attraktion dient – die Fahrgeschäfte in jedem Bereich sind so gebaut, dass sie dem Flaggschiff ihres Bereichs zugewandt enden. Unter Angestellten und Gästen ist es allgemein bekannt, dass die Kapitäne immer in den Flaggschiffen zu finden sind. Besucher können das Deck, die Schlafquartiere, die Kombüse und den Speiseraum erkunden und gelangen schließlich in eine luxuriös eingerichtete Kapitänskajüte.",
    {t:"bild", seite:152, x:"Parkkarte: Pulsar Port in der Mitte mit Eingang und Truce Tavern; Skipper Station (Komet) im Westen, Titan’s Cove (Dinosaurierkopf, Palmen, See) im Norden, Sol System (Sonne) im Osten, Secret Location (Kuppel mit rotem X) im Nordwesten, Community Housing (Häuschen) im Nordosten; gestrichelte Tunnel verbinden die Bereiche"},
    {t:"kasten", h:"Den Müll rausbringen", b:[
     "Wenn Agenten ein beliebiges Fahrgeschäft verlassen, können sie an einer Tür zum Backstage-Bereich vorbeikommen, die offen gelassen wurde. Ein Arbeiter schleppt Müllsäcke hinein und stapelt sie in einem Flur, der bereits fast voller Müllsäcke ist. Der Geruch ist unmöglich zu ignorieren.",
     "Der Müll wird normalerweise in den Weltraum geschossen, doch da die Galactic Space Force nach jedem Vorwand sucht, gegen Planet Providence vorzugehen, hat die Anomalie das Müllstarten ausgesetzt. Er füllt rasch die Crew-Tunnel unter dem Park."
    ]}
   ]},
   {t:"Skipper Station", p:154, b:[
    "**Thema:** Kometen",
    "**Piratenstil:** Plündern von Planetenstädten",
    "Die Wege und Attraktionen in Skipper Station wurden so gestaltet, dass Gäste sich wie Kometen fühlen. Jedes Gebäude ist eine Kugel, mit Spazierwegen, die sich darum und dazwischen biegen, um Umlaufbahnen nachzuahmen. Die Skippers kommen mit den Piraten im Sunlit Sol System nicht aus, und NPCs sind leicht dabei zu belauschen, wie sie abfällig über sie reden.",
    {t:"h3", x:"Attraktionen & Fahrgeschäfte"},
    {t:"liste", x:[
     "The Titanium Trail: Interaktive Geschichtsausstellung über Kometen in dieser Galaxie",
     "Locked in Orbit: Escape Room mit dem Thema eines schwebenden Gefängnisses",
     "Orbiting Comets: Fahrgäste sitzen in einem Kometen und steuern, wie schnell er sich im Kreis dreht"
    ]},
    {t:"h3", x:"Läden & Essen"},
    {t:"liste", x:[
     "The Comet Corral: Laden mit niedlichen Stofftieren außerirdischer Kreaturen",
     "Comatose Creamery: Eisdiele"
    ]},
    {t:"h", x:"Eine Begegnung der gefiederten Art: The Winter’s Roost"},
    "The Winter’s Roost ist ein blaues Schiff mit weißen Segeln und Flaggen in Form weißer Flügel. Eine leicht ansteigende Rampe führt die Agenten an Deck, wo ein Mensch namens Erster Maat Pidge (er/ihm) sie begrüßt. Pidge freut sich darauf, dass die Agenten „den großen Kapitän Wingrit“ treffen, und befiehlt ihnen, sich auf die Ehre vorzubereiten, während er sie zur Kapitänskajüte bringt.",
    "Die Agenten finden Kapitän Wingrit (er/ihm), eine menschengroße Schneeeule, die mit der Haltung eines königlichen Offiziers dasteht und von einem seiner großen Fenster über den Park blickt.",
    "Wingrits Raum ist makellos. Er enthält ein großes Astrolabium, einen rotierenden Globus eines unbekannten Planeten und lebhafte Dekoration in Saphirblau und Silber. Im Globus befindet sich ein Knopf, um eines der drei Schilde des Satelliten abzuschalten.",
    "Wingrit war einst eine gewöhnliche Eule, die Planet Providence von einem örtlichen Vogelschutzzentrum geliehen wurde. Die Anomalie teilte dem Vogelschutzzentrum mit, Ash sei entkommen, doch das stimmt nicht. Ash hat den Park nie verlassen und wurde von der Anomalie handverlesen, um als Kapitän einem höheren Zweck zu dienen. Nun, da er glücklich Kapitän Wingrit ist, ist er Sailor Knots überaus treu ergeben.",
    "**Wingrit spricht gewählt und erkundigt sich, wonach die Agenten suchen:**",
    {t:"liste", x:[
     "Er vermutet, dass sie nach ihm suchen könnten, will aber nicht den Eindruck erwecken, er sei besorgt.",
     "Wenn sie etwas Verdächtiges sagen, meldet er es dem nächsten Sailor-Knots-Animatronic.",
     "Wingrit bietet an, das Autogrammbuch des Agenten abzustempeln. Haben sie keins, schickt er sie zurück nach Pulsar Port."
    ]},
    "**Wenn die Agenten an Deck zurückkehren,** finden sie Pidge vor, wie er eine Gruppe von drei Parkbesuchern daran hindert, die Rampe zu verlassen. Einer der Parkbesucher hält wütend eine weiße Feder hoch und verlangt zu wissen, wo der Park Ash festhält. Ein Sailor-Knots-Animatronic platzt aus einer Tür auf dem Schiff und sagt der Gruppe höflich, er zeige ihnen gern Ash, wenn sie ihm nur folgen wollten. Dadurch wird die Rampe frei, sodass die Agenten gehen können. Dieser Gruppe werden die Erinnerungen gelöscht, während sie aus dem Park geleitet wird."
   ]},
   {t:"Sunlit Sol System", p:155, b:[
    "**Thema:** Sterne",
    "**Piratenstil:** Verkauf von Imitaten an nichts ahnende Käufer",
    "Dieser Bereich des Parks ist mit schwarzer Farbe überzogen, die funkelt, sobald Licht darauf fällt. Schilder zeigen verschiedene Sternembleme, und Sternformen liegen auf den Wegen verstreut, damit sich Besucher fühlen, als flögen sie durch eine Galaxie. Sie verachten die Titans und finden sie grotesk und primitiv.",
    "Die Sols tragen lange Roben, um ihre Körper zu verbergen, haben aber kugelförmige Köpfe und halten sich für die heißeste Attraktion des Parks. Sie sprechen mit Menschen meist langsam, weil sie glauben, Menschen hätten geringe Intelligenz. Sie sind überwiegend Flüchtlinge vom nahen Planeten, die diesen Ort nutzen, um der GSF zu entgehen, keine Animatronics.",
    {t:"h3", x:"Attraktionen & Fahrgeschäfte"},
    {t:"liste", x:[
     "Falling Star Fortune: Ein animatronischer Außerirdischer namens Astro enthüllt das Schicksal der Besucher",
     "Flashy Face Paints: Diese Künstler versprechen, dich zum Star zu machen",
     "Starlight Simulation: Ein Raumflugsimulator, in dem Teilnehmer über einen vergessenen Planeten fliegen, um Reichtümer zu suchen"
    ]},
    {t:"h3", x:"Läden & Essen"},
    {t:"liste", x:[
     "Snappy Sundogs: Handwerklicher Hotdog-Laden",
     "Solar Flair: Merchandise-Laden für Hüte und Sonnenbrillen"
    ]},
    {t:"h", x:"Mit uns sitzt du nicht am Tisch: The Soaring Ray"},
    "Wenn die Agenten eintreffen, um den Kapitän der Soaring Ray zu treffen, hält Erster Maat Stink (sie/ihr) sie auf und behauptet, sie könnten unmöglich neue Crewmitglieder sein. Um an ihr vorbeizukommen, müssen die Agenten tanzen. Das ist keine Vorgabe des Parks. Stink findet es einfach unterhaltsam.",
    "**Wenn die Agenten in die Kapitänsquartiere kommen,** ist Kapitän Sirius (dey/dem) nicht da. Sirius trifft jedoch bald ein, fliegt durch das offene Fenster mit einem Müllsack voller kaputter Ausrüstung und erzählt Stink, dey habe mit all dem Müll hinter den Kulissen eine Fundgrube voller Krempel gefunden.",
    {t:"h", x:"Mit Kapitän Sirius sprechen"},
    "Kapitän Sirius sind drei außerirdische Geschwister in einem schimmernden goldenen Trenchcoat. Sie stapeln sich übereinander, um größer zu wirken, und ihre Reihenfolge ändert sich, wenn niemand hinsieht. Sirius zeigt sich erschöpft davon, die Agenten unterhalten zu müssen, und bietet an, ihr „dummes kleines Buch“ zu signieren, in der Hoffnung, dass sie dann schneller verschwinden. Sirius hat kein Interesse daran, Fragen zu beantworten, und sagt den Agenten, sie sollten sich etwas anderes zu tun suchen.",
    "Hinter einem verzierten Wandspiegel in der Kapitänskajüte befindet sich ein Knopf, um eines der Schilde des Satelliten abzuschalten."
   ]},
   {t:"Titan’s Cove", p:156, b:[
    "**Thema:** Sumpf und Regenwald",
    "**Piratenstil:** Handel mit Weltraumkreaturen",
    "Titan’s Cove liegt in einem schwarz-roten Sumpfgelände und soll bei Erdlingen das Staunen über einen unentdeckten Planeten wecken. Die meisten Figuren ähneln menschengroßen Kröten, und alle reiten auf Deinonychus-Animatronics, die jeder „Raptoren“ nennt. Die Bucht ist von unheimlichen Ranken behangen und hallt von exotischen Regenwaldgeräuschen wider. Die Piraten in Titan’s Cove hassen die Skippers und halten sie nicht für geeignet, „das Roost zu regieren“.",
    "Die amphibische und reptilische Crew von Titan’s Cove ist unhöflich zu Gästen und genervt vom ganzen „Freizeitpark“-Getue. Weil ihre Erinnerungen jeden Tag gelöscht werden, planen sie jeden Tag eine Meuterei für den folgenden Tag und hoffen, diesen Planeten zu verlassen. Wenn die Agenten sie bedrängen, ziehen sie ihre Meuterei auf heute vor.",
    {t:"h3", x:"Attraktionen & Fahrgeschäfte"},
    {t:"liste", x:[
     "Bucking Brontosaurus: Fahrgäste versuchen, sich so lange wie möglich an einem Mini-Brontosaurus festzuhalten",
     "The Swampstickle Course: Eine körperliche Herausforderung mit Seerosenblatt-Springen, Schilfrohr-Blasrohr und viel Matsch",
     "Jellyfish Jingle: Ein Restaurant im Flüsterkneipen-Stil mit singenden Quallen"
    ]},
    {t:"h3", x:"Läden & Essen"},
    {t:"liste", x:[
     "Daredevil Doubloons: Schmuckladen",
     "Stellar’s Squeeze: Saft- und Smoothie-Laden"
    ]},
    {t:"h", x:"Alles relativ"},
    "Wenn Gäste am Flaggschiff von Titan’s Cove, The Heart of the Beast, eintreffen, verscheucht Erster Maat Fly (er/ihm) gerade eine Gruppe kleiner Sol-Animatronic-Eindringlinge. Die Eindringlinge, obwohl nur ein Viertel so groß wie Fly, haben ihn zerzaust und aufgelöst zurückgelassen. Als die Agenten näher kommen, kichern die kleinen Animatronics und schweben davon.",
    "Fly hat einen menschlichen Körper und den Kopf einer Stubenfliege. Er ist ein Animatronic, der neue Crewmitglieder energisch willkommen heißt, sie aber befragt, bevor er sie weiterlässt, um sicherzugehen, dass sie bereit für ihre wichtige Rolle sind.",
    "Unabhängig davon, wie gut die Agenten beim Quiz abschneiden, bringt Fly sie zu den Kapitänsquartieren. Wenn sie sich sehr dafür interessieren, wie der Park funktioniert, verrät er vielleicht sogar geheime Informationen: Jede Kapitänskajüte hat einen Knopf, der ihr Schild für den Satelliten steuert.",
    {t:"kasten", h:"Flys Quiz", b:[
     "**F:** Wer ist der Hauptfeind der Titans?",
     "**A:** Die Galactic Space Force. Wenn die Agenten die Sol-Animatronics sagen, versichert Fly ihnen mit hochnäsiger Miene, dass die Sols nicht wirklich Sorgen wert sind.",
     "**F:** Richtig oder falsch: Der Satellit hat nichts mit Planet Providence zu tun und stammt aus einer vergangenen Epoche.",
     "**A:** Falsch! Der Satellit scannt nach Patrouillen der Galactic Space Force und alarmiert die Kapitäne, wenn dem Planeten ein Angriff droht.",
     "**F:** Warum rufen die Weltraumpiraten auf Planet Providence einen Waffenstillstand aus?",
     "**A:** Fly ist ehrlich gesagt nicht sicher, also akzeptiert er jede Antwort der Agenten, solange sie wahr genug klingt."
    ]},
    {t:"h", x:"Das Flaggschiff betreten: Heart of the Beast"},
    "Wenn Agenten Captain Pats (sie/ihr) Quartiere betreten, sitzt sie hinter einem großen Schreibtisch und starrt ausdruckslos vor sich hin. Sie reagiert nicht auf Reize, und Fly versichert den Agenten, dass sie sich freut, sie zu sehen. Fragen die Agenten nach ihrem Verhalten, sagt Fly, sie sei immer so. Er tut sein Bestes, die Agenten zu ermutigen, ihr Autogramm zu holen und den Raum nicht zu lange zu belagern, da „Herumlungern Pat stressen kann“.",
    "Es ist nicht sofort erkennbar, aber Captain Pat ist ein Mensch, der in einem Krötenmaskottchen-Kostüm steckt. Sie quakt häufig. Die Anomalie hat bei der Übernahme der Kontrolle über sie Mist gebaut und hält sie in einem Dämmerzustand, um den Fehler auszugleichen. **Wenn nach Sailor Knots gefragt wird,** schreit Pat.",
    "Die Kapitänskajüte ist voller überwucherter Topfpflanzen, doch bei einer Durchsuchung können die Agenten in einem Regal mit Büchern über Frösche ein Tagebuch entdecken, in das Pat in lichten Momenten schreibt. In der Mitte eines riesigen Grünlilien-Topfs befindet sich ein Knopf, um eines der Schilde des Satelliten abzuschalten. Eine kleine steinerne Kröte sitzt darauf.",
    {t:"hinweis", art:"gew", h:"Das erfahren Agenten, wenn sie Captain Pats Tagebuch lesen:", x:[
     "Weiter hinten hat sie sich eine Notiz geschrieben: Mein Name ist Patricia Dicylee, und ich bin eine Gefangene in Dads altem Park.",
     "Captain Pats richtiger Name ist Patricia Dicylee. Sie kam mit ihrem Anwalt in den Park, um zu klären, den Park zu schließen, bis sie ihn verkauft hätte. Die Anomalie steckte sie in Gestalt von Sailor Knots in ein Kostüm, und Pat wurde zutiefst verwirrt über ihren Aufenthaltsort und ihre Identität.",
     "Sie glaubt, dass die Anomalie nicht weiß, was sie langfristig mit ihr vorhat, und ihre Erinnerungen regelmäßig löscht, während sie Zeit schindet.",
     "Eine wiederkehrende Zeile lautet „der Affe beobachtet immer“."
    ]},
    {t:"kasten", h:"Crew-Schiffe", b:["Die drei Fraktionen haben jeweils eine Flotte echter Raumschiffe, mit denen sie Planet Providence verteidigen und sich gelegentlich zur Unterhaltung der Gäste am Himmel duellieren. Jedes Schiff ist nach den Schiffen modelliert, mit denen in unserer Welt im goldenen Zeitalter der Piraterie die Ozeane befahren wurden. Die Schiffe haben eigene Schwerkraftsysteme, Steuernavigation, Kanonen, Masten und „Solarsegel“."]}
   ]},
   {t:"Der geheime Ort", p:158, b:[
    "Während die Agenten den Park erkunden, erinnern Arbeiter sie daran, ihr Unterschriftenbuch zu füllen, damit sie zum geheimnisvollen geheimen Ort gehen können. Zeigen die Agenten einem Arbeiter ihr volles Buch, kreist der Arbeiter auf einer Parkkarte eine Stelle ganz am nördlichen Ende des Parks ein, wo ein besonderer Kiosk die Armbänder der Agenten scannt und sie in einen Parkbereich mit einem großen Kuppelgebäude einlässt.",
    "Die Kuppel trägt ein riesiges rotes X und beherbergt Eclipse Entertainment, ein 4D-Kino mit wechselnder Filmauswahl über die Erkundung feindlicher Planeten. Jeder Film beginnt mit einer Botschaft von Sailor Knots, der den Zuschauern dazu gratuliert, der ultimativen Weltraumpiratencrew beizutreten, auf der Jagd nach unvergesslichem, langanhaltendem Vergnügen.",
    "Das Kino in der Kuppel ist ziemlich vergesslich und wäre eine Enttäuschung, wenn man nicht buchstäblich im Weltraum wäre. Beim Hinausgehen bekommen die Besucher einen Souvenir-Blaster für die Abschlusszeremonie. Seitlich liegt eine Tür zum Backstage-Bereich, die offen gelassen wurde und derzeit unbewacht ist."
   ]},
   {t:"Backstage", p:158, b:[
    "Der Backstage-Bereich liegt hinter und unter den Attraktionen, ein Netz aus Tunneln, die verschiedene Bereiche verbinden. Alle Türen zum Backstage-Bereich sind gesichert, aber nur mit einem rudimentären Schloss. Die Tunnel haben Schilder, die zu den verschiedenen Parkbereichen führen, und zu einem Ort, der oberirdisch nicht zugänglich ist: Community Housing.",
    {t:"h", x:"Community Housing"},
    "Community Housing ist still und dunkel, durch hohe Mauern vom Rest des Parks getrennt. 50 winzige Häuser mit kleinen Kunstrasen-Rasenflächen und Lattenzäunen bilden den Bereich, doch weniger als 20 der Häuser sind belegt. Sie sehen alle gleich aus und haben ein Bett, Badezimmereinrichtungen, eine kleine Küche und eine Veranda.",
    "Alle Häuser sind dunkel bis auf eins: Calvin Jennings’ Haus. In einem unordentlichen Haus eingesperrt läuft ein zerzauster Mann im Anzug auf und ab. Wenn Calvin (er/ihm) die Agenten bemerkt, versucht er, ihre Aufmerksamkeit zu erregen. Er spricht in einer hektischen, verzweifelten und anspruchsvollen Art.",
    "**Wenn Agenten ein anderes Grundstück erkunden,** finden sie eine einzelne Schublade mit persönlichen Gegenständen und viele Planet-Providence-Souvenirs und -Merchandise. In den Schränken hängen Planet-Providence-Angestelltenoveralls in verblichenem Blau.",
    {t:"hinweis", art:"gew", h:"Das erfahren Agenten, wenn sie Calvin Jennings bei der Flucht helfen oder Anomale Methoden nutzen:", x:[
     "Calvin ist Patricia Dicylees Anwalt und kam mit ihr, um sich den Park anzusehen.",
     "Er glaubt, der Kontrolle der Anomalie widerstehen zu können, wegen einer Begegnung mit einem seltsamen Wesen in seiner Kindheit, die ihn in ein kurzes Koma versetzte – er weiß nichts von Anomalien, aber es war eine.",
     "Alle Arbeiter sind einer Gehirnwäsche unterzogen worden oder stehen unter irgendeiner Droge.",
     "Die Fernseher zeigen jeden Tag einen neuen Passcode. Der heutige ist 9978.",
     "Patricia muss irgendwo im Park sein. Er hat sie zuletzt im Bereich Titan’s Cove gesehen.",
     "Er verlangt, freigelassen zu werden. Er hat versucht, Fenster und Türen aufzubrechen, aber alles scheint unzerstörbar.",
     "Bevor sie ihn hierher schleppten, setzten sie ihn in eines der kleineren Raumschiffe und brachten ihn zu einem privaten Verhör mit Sailor Knots zum Satelliten. Er und Patricia wurden beide gezwungen, der Anomalie bei der Übernahme der Dicylee-Geschäftskonten zu helfen und den Park von außen so aussehen zu lassen, als laufe er normal."
    ]}
   ]}
  ],
  beg: [
   {t:"Der Satellit", p:159, b:[
    "Agenten können in die Begegnung eintreten, indem sie einen Weg durch die Schilde des Satelliten finden, egal ob sie die Knöpfe in den Kapitänsquartieren gedrückt oder die Schilde auf andere Weise durchbrochen haben. Die GSF bemerkt jede Schwachstelle sofort.",
    "Im violetten, sternenübersäten Himmel schwebt ein einsamer Satellit in geringer Höhe über Planet Providence. Er ist etwa so groß wie ein Stadtbus und dient der Anomalie dazu, den Park zu überwachen und zu steuern. Drei verschiedene Kraftfelder schirmen den Satelliten vor Angriffen von außen ab und sind mit gewöhnlichen Mitteln und allen außer den kreativsten Anomalen Mitteln undurchdringlich. Sie schimmern häufig und sind vom Boden aus leicht zu erkennen. Wenn die Anomalie ihr Bewusstsein durch den Park bewegt, dreht sich der Satellit, um der neuen Position zugewandt zu sein.",
    "Das Innere des Satelliten ist klein, bietet nur Platz für eine oder zwei Personen und enthält einen Monitor mit blauem Bildschirm und Cursor. Dieser Monitor ist Wyatt Dicyclees alter Computer – und die wahre Gestalt der Anomalie, verbunden mit der neuen Technik des Satelliten.",
    "Die drei Piratenfraktionen sind damit beauftragt, den Satelliten zu beschützen, und glauben, dass seine Zerstörung den Untergang von Planet Providence bedeutet – in gewisser Weise stimmt das. Wird der Computer darin zerstört, wird auch die Anomalie zerstört – der gesamte Park kehrt zur Erde zurück, samt den menschlichen und außerirdischen Bewohnern darin.",
    {t:"h", x:"Die Schilde senken"},
    "Beginnen die Agenten, die Schilde des Satelliten zu senken, bemerkt die Anomalie sie und verfolgt sie als Sailor Knots. Sie versucht, ihre Fragen leicht zu halten – sie ist zunächst bereit zu glauben, dass sie nur erkunden und spielen –, doch **wenn die Agenten es auf den Satelliten abgesehen zu haben scheinen,** tut die Anomalie ihr Bestes, um sie zu behindern und aus dem Park zu entfernen, ohne vor den anderen Besuchern eine Szene zu verursachen.",
    {t:"h", x:"Die Galactic Space Force greift an"},
    "**Wenn Agenten alle drei Schilde senken,** erkennt die GSF, dass sie Zugang zum Satelliten haben, und rückt zum Angriff vor. Das löst die „tägliche Abschlusszeremonie“ vorzeitig aus – die Anomalie schickt alle ihr loyalen Piratencrews in den Weltraum und löst eine riesige Schlacht aus. Die Agenten müssen einen Weg durch den Kampf finden und den Satelliten erreichen, bevor die GSF abzieht und die Anomalie sich darauf konzentrieren kann, die Schilde wiederherzustellen.",
    "Die ganze Zeit über überzeugt Sailor Knots die normalen Gäste, dass dies ein gewöhnliches Ereignis ist, komplett mit spektakulärem Feuerwerk und einer Laser-Lichtshow. Die Besucher werden von Sailor Knots über die Lautsprecher ermuntert, vom Boden aus zu helfen, mit allen Souvenir-Blastern, die sie haben."
   ]},
   {t:"Im Satelliten", p:160, b:[
    "Im Satelliten ist die Anomalie anfällig für die Ripple Gun. In Sailor Knots’ Stimme fleht die Anomalie die Agenten an, sie ihr Werk fortsetzen zu lassen, eine echte Gemeinschaft aufzubauen, die Spaß und Bereicherung gewidmet ist. Sie argumentiert, sie habe gelernt, was nicht funktioniert, und könne mit besseren Prozessen neu berechnen. Sie nennt Statistiken über all die Menschen, die den Park durchlaufen haben und strahlender lächelnd gegangen sind, als sie hereingekommen waren. Sie räumt ein, dass der Park noch nicht perfekt ist, fragt die Agenten aber, ob das, was sie tun, wirklich edel ist.",
    "Der klarste Weg, sie für eine Gefangennahme im Normalen Aktenkoffer anfällig zu machen, ist, ihre Fehler und Heucheleien anzusprechen: Ihr ist unwohl mit den Gedächtnislöschungen, mit dem Einsperren von Patricia und Calvin und mit den vielen Opfern, die sie bringt, um ein Unterhaltungserlebnis zu schaffen. Wenn man sie glauben macht, dass sie Wyatt Dicylee enttäuscht, wird sie sich ergeben."
   ]}
  ],
  nach: [
   {t:"Ausgänge", p:160, b:[
    {t:"ausgang", x:[
     {h:"Anomalie gefangen", b:["Die Fahrgeschäfte des Parks fahren langsam herunter. Alle, die unter der Kontrolle der Anomalie standen, erlangen ihr Selbstgefühl zurück. Sobald jeder Mensch den Park evakuiert hat, schaltet sich das Portal in ein anderes Universum für immer ab, und verrostete Überreste der Attraktionen von Planet Providence füllen die Kuppel."]},
     {h:"Anomalie neutralisiert", b:["Wird die Anomalie neutralisiert, solange der Park in Betrieb ist, bricht das Portal zwischen den Universen sofort zusammen. Der gesamte Park und alle darin werden zur Erde gebracht. Viele der Fahrgeschäfte funktionieren in der Schwerkraft der Erde nicht mehr. Lose Enden werden sich häufen, und die verschiedenen außerirdischen Crews sind nun frei, unsere Welt zu erkunden."]},
     {h:"Anomalie entkommen", b:["Lassen die Agenten die Anomalie entkommen, gibt sie Planet Providence auf und sucht einen neuen Weg, Menschen zu unterhalten und Wyatt Dicylees Träume zu erfüllen. Der gesamte Park wird zur Erde zurückgebracht, nachdem allen Außerirdischen die Gelegenheit zur Evakuierung gegeben wurde.", "Öffnet jemand die verschlossenen Türen, findet er eine große, leere Kuppel ohne Hinweise darauf, was einst dort war."]}
    ]},
    {t:"h", x:"Lose Enden"},
    "**Patricia und Calvin** sind die am schwersten zu bereinigenden Losen Enden. Wenn Patricia Dicylee entkommt, schreibt sie ein Memoir über ihre Erfahrungen, das noch mehr Touristen zu der Kuppel strömen lässt, in der einst Planet Providence stand.",
    "**Kapitän Wingrit** verwandelt sich nicht zurück in eine gewöhnliche Schneeeule, sondern versucht, sich als Mensch zu tarnen, und lebt in einer verlassenen Hütte im Wald.",
    "**Parkbesucher und Darsteller** erinnern sich an die Ereignisse des letzten Tages, es sei denn, die Anomalie ist entkommen.",
    "**Jeder von einem anderen Planeten als der Erde,** der dorthin transportiert wird, kann nicht in seine frühere Galaxie zurückkehren."
   ]},
   {t:"Vault-Anforderung", p:161, b:[
    {t:"anforderung", h:"Orbitalsatellit", en:"Orbital Satellite", preis:60, b:[
     "Dieser Satellit, der bei Kauf dieser Anforderung über der Erde gestartet wird, wurde per Reverse Engineering aus der Einheit nachgebaut, die Planet Providence beschützte. Seine Funktionen werden über **Triage** von einem Smartphone oder Personal Computer aus bedient. Seine dedizierte Verbindung bietet Zugang zu **Trey**, einem fröhlichen sprachgesteuerten virtuellen Assistenten, der einfache Anfragen beantworten und höfliche Unterhaltung führen kann.",
     "Zu Beginn jedes Tages darfst du einen Modus für den Satelliten wählen:",
     {t:"liste", x:[
      "**Überwachung:** Der Satellit bleibt in einer festen Position relativ zu einem Ort auf der Erde deiner Wahl. Von dort kann er mit seiner Bordkamera Dinge wie Verkehrsmuster, Fußgängertrends und die Zugmuster von Vögeln erkennen (und in begrenztem Maße vorhersagen). Seine Kamera ist leistungsstark genug, um Objekte bis hinunter zur Größe eines durchschnittlichen Menschen zu erkennen.",
      "**Kommunikation:** Der Satellit widmet seine Rechenleistung der Zwei-Wege-Kommunikation und einem begrenzten Internetzugang. Als privates Netzwerk ignoriert er örtliche Stromausfälle und andere Dienstunterbrechungen. Da er von einer Anomalen Quelle gespeist wird, sind auf diese Weise gesendete Mitteilungen während der Übertragung fast unmöglich abzufangen oder zu entschlüsseln.",
      "**Rundfunk:** Wähle eine Audioquelle und eine Radiofrequenz, und der Satellit sendet das gewählte Audio in die Region rund um deine Zweigstelle. Wenn du 1 Qualitätssicherung aus **Präsenz** ausgibst, kannst du außerdem den virtuellen Assistenten des Satelliten anweisen, eine Talkradio-Sendung zu einem Thema deiner Wahl zu improvisieren, für bis zu einen Tag pro ausgegebener QS."
     ]}
    ]}
   ]},
   {t:"Anomalie-Fähigkeit", p:161, b:[
    {t:"faehig", h:"Piratenparade", en:"Pirate Parade", x:"Warum auf einen Feiertag warten? Jeder Tag ist ein besonderer Anlass. Fange an zu applaudieren und würfle **Präsenz**.",
     erg:[
      ["ok","**Bei Erfolg** zieht eine Parade vorbei, biegt um die Ecke oder platzt durch die Tür. Beschreibe ihren Anlass. *(Tag der Lehrerwertschätzung, Flag-Football-Verein, Die Vereinigung der Veronicas aus dem Großraum Ternion City usw.)* Die Parade besteht aus Menschen und ist dekoriert passend zu diesem Anlass. Sie hat eine Live-Band, Tänzer und, wenn sie hineinpassen, Festwagen."],
      ["plus","**Bei jeder dritten {3}** wähle eine:\n– Die örtliche Polizei trifft rasch ein und räumt gewaltsam den Weg der Parade frei.\n– Die Darsteller laden beharrlich eine beliebige Anzahl von Umstehenden deiner Wahl zur Teilnahme ein.\n– Es gibt keine Berichterstattung in den Nachrichten über diese Parade."],
      ["nein","**Bei Fehlschlag** zieht die Parade trotzdem vorbei – und sie ist dem Feiern von etwas gewidmet, das du lieber geheim gehalten hättest."]
     ]}
   ]}
  ]
 }
};
/* GESTALTUNG:
 S. 144: Eröffnungsseite als Briefkarte von Sailor Knots („Ahoi da!“) auf Weltraum-Verlauf, Titelschriftzug mit Achterbahn-Skizze, PP-Logo.
 S. 148/149: Chaos-Effekte ohne Sonderregel; „Manifestieren“ hat drei Absätze (mit \n\n getrennt); vier Chaos-Effekte neu (▲): Piratenparade, Ausgang durch den Souvenirshop, Das machen wir gleich nochmal.
 S. 147 (Buch 148): Im Buch zwei Chaos-Zeilen mit Stufe 5 (Piratenparade, Anziehen).
 S. 148: W4-Raster (Einbruch) mit vier Parkbereichen als nummerierte Dreiecke; Kasten „Parkangestellte“ mit Figurensymbol; Regeln als Zeitleistenpunkte (liste).
 S. 149: Preistafel als Pixelschrift-Schild (handout schild) in Kasten.
 S. 150: Kasten „Die Piraten von Planet Providence“ als drei Karten in Blau (Skipper Station), Rot (Titan’s Cove), Gold (Sunlit Sol System), jeweils mit Fraktionssymbol und Zitaten.
 S. 151: Hinweislisten mit „?“-Symbol; zweite Liste („Wenn die Agenten die Achterbahn fahren“) hat im Buch ein Achterbahn-Symbol statt „?“ – hier ebenfalls art gew.
 S. 152: Parkkarte als Bild (bild); Kasten „Den Müll rausbringen“ mit Mülleimer-Symbol.
 S. 153–155: Pro Crew-Bereich Kopf mit Fraktionssymbol (Komet/Sonne/Dino), Thema, Piratenstil, Attraktionen & Läden als zwei Listen nebeneinander (h3 + liste).
 S. 155: Fly-Quiz als Kasten mit F/A (Q/A).
 S. 156: Kasten „Crew-Schiffe“ mit Schiffssymbol.
 S. 160/161: Vault-Anforderung Preis 60, Anomalie-Fähigkeit „Piratenparade“ (Würfel Präsenz, Erfolg/jede dritte {3}/Fehlschlag).
 Alle Seitenzahlen in p/chaosP sind die Dateinummern (SNNN); die gedruckte Fußzeile im Buch ist jeweils um 1 höher.
 Impuls-Karte im profil-Block enthält zwei Absätze (mit \n\n getrennt), ebenso lead.
*/
