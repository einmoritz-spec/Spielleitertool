/* Metro-Regeln, Teil 2 (Grundbuch S. 277–300): Serien, Jobs, Challenge-Bau, Beispiel. Eigene deutsche Kurzfassung. Hängt sich an OS_REGELN an (nach regelwerk.js laden). */
var OS_METRO_SERIEN = [
 {id:"stil", titel:"Stil: Gritty & Cinematic", seite:277, bloecke:[
  {t:"p", x:"Otherscape ist ein cineastisches Spiel: Szenen laufen wie in Serie oder Film, ohne sich im Kleinkram zu verlieren. Zugleich ist es ein raues Spiel, das fordert, Spannung erzeugt und blutig werden darf. Beides zu verbinden ist möglich, braucht aber Übung."},
  {t:"h", x:"Cinematic"},
  {t:"liste", items:[
   "**Übertrieben, aber cool:** Jobs, Szenen und Story dürfen überdreht sein. Gegner haben coole Waffen und Cyberware, der Hintergrund ist spektakulär. Auch Antihelden dürfen Heldenmomente haben.",
   "**Spielraum:** Wenn Spieler:innen etwas Filmreifes versuchen, hilf ihnen, eine Tag-Kombination zu finden, auch wenn die Chance klein ist. Auch ein Fehlschlag wird cineastisch, weil eine Consequence eintritt.",
   "**Filmlogik:** Wenn die Szene dadurch besser wird, darf ein Tank durch einen gezielten Schuss explodieren. Nicht ständig, sonst wird die Welt beliebig."
  ]},
  {t:"h", x:"Gritty"},
  {t:"liste", items:[
   "**Schwierigkeit:** Schaden und Complications nicht zurückhalten, besonders wenn sie Glück umkehren oder Rückschläge setzen. Herausfordernd, aber nicht unmöglich. Gegner dürfen überraschend auftauchen, nicht bei jeder Tür eine Granate.",
   "**Menschliche Probleme:** Zeige die Folgen von Konzerngier, Behördenversagen und Alltagssorgen. Wichtige NPCs brauchen Namen und Motive. Legt ein Virus die Herzimplantate alter Menschen lahm, sollte die Crew jemanden kennen, den es trifft."
  ]},
  {t:"h", x:"Der erfahrene Profi"},
  {t:"p", x:"Eine Figur, die Profi ist, wird als Profi behandelt. Sie vergisst kein Grundwerkzeug und trifft Basishandlungen ihres Fachs sicher. Gewürfelt wird nur, wenn die Handlung auch dramatisch ist. Ein Fehlschlag entsteht aus der Lage, nicht aus einem peinlichen Versagen. Spieler:innen dürfen Grundfragen zum Vorgehen stellen, und Fauxpas in der Spielwelt werden benannt, damit sie korrigieren können."},
  {t:"h", x:"Gegengewicht: Unvermeidliches Chaos"},
  {t:"p", x:"Auch Profis haben Pech. Consequences sind dafür da. Setze sie nach kritischen Momenten ein, nicht zufällig nach einem Fehlwurf. Zögert die Gruppe zu lange, zeige zuerst eine Threat, dann eine Consequence, wenn sie ignoriert wird. Gegen Überplanung hilft: den Profi-Standard erinnern, mit einer Consequence die Handlung antreiben oder mit Flashback und Prep Sequence (S. 125) die Vorbereitung überspringen."},
  {t:"h", x:"Hacker, Harnessing & Ops-Support"},
  {t:"p", x:"Die Hackerin im Van oder der Mensch am Schreibtisch ist spielbar: Aktionen dürfen sich auf Geschehnisse an anderen Orten richten, und eine entfernte Challenge kann Status verursachen. Beim Harnessing agieren alle Figuren in VR, Brutes schlagen zu, Brains manipulieren die Umgebung. Entscheidend ist, ob es für alle Spaß macht und zur Szene passt."}
 ]},
 {id:"serien", titel:"Serie entwerfen", seite:280, bloecke:[
  {t:"p", x:"Das Spiel ist eine Folge von Jobs und Nebenabenteuern über viele Sessions. Die Crew und die Figuren wachsen, verändern sich, gehen oder sterben. Die SL behält das große Bild und stellt die Figuren in Lagen, die ihre Moral prüfen und ihre Ziele bedrohen."},
  {t:"h", x:"Ideen sammeln"},
  {t:"liste", items:[
   "**Setup mit den Spieler:innen:** Hör auf die Figurenideen. Passt eine Idee nicht zum Crew-Konzept, klärt sie gemeinsam und passt das Konzept mit allen an. Notiere Hooks: Ritual, Identity oder Itch, die man herausfordern oder ausnutzen kann. Pro Figur ein bis zwei Themen wählen.",
   "**Verbündete und Feinde:** Gibt es NPCs, Angehörige oder Mentoren, die in Gefahr geraten können? Haben Figuren schon Feinde? Könnten Feinde verschiedener Figuren zusammenarbeiten?",
   "**Bogen:** Gibt es einen Erzählbogen wie Erlösung, Rache oder Öffnung, den eine Figur naturgemäß geht?"
  ]},
  {t:"h", x:"Paycheck oder Misfits"},
  {t:"liste", items:[
   "**Paycheck-Serie (charakterzentriert):** Eine Folge von Jobs mit steigender Schwierigkeit, die Jobs selbst sind austauschbar. Der rote Faden sind die persönlichen Entwicklungen der Figuren.",
   "**Misfits-Serie (geschichtenzentriert):** Die Crew ist eine Gruppe von Außenseitern, die sich immer wieder derselben Opposition gegenübersieht. Der Fokus liegt auf ihrem Verhältnis zu Autorität, Konzernen und Menschen.",
   "Beides kann sich im Spiel ergeben: Ein wichtiger Job wird zum Misfits-Strang, wenn die Crew einen Gegner entdeckt, der hinter allem steckt."
  ]},
  {t:"h", x:"Mythos-Geschichten"},
  {t:"p", x:"Wer einen Mythos als Quelle nutzt, darf die Legenden dieses Mythos als Vorlage für die eigene Figur nehmen. Ab und zu lohnt eine Wendung: Die Legende wird im Cyberpunk-Gewand neu erzählt oder gebrochen. Die Figur muss der Legende nicht folgen."},
  {t:"h", x:"Key Players"},
  {t:"p", x:"Key Player sind Organisationen wie Regierungen, Graswurzelbewegungen, Kulte oder Konzerne, die in der Serie eine Schlüsselrolle spielen. Die Institution ist die eigentlich schwer fassbare Gegnerin, auch wenn sie einen Anführer hat. Key Player liefern Gegner, Technik, Mythoi, Ziele und Orte. Sie dürfen sich wandeln, etwa durch Übernahme oder Mythos-Infektion."},
  {t:"liste", items:[
   "**Basiskonzept:** Eine Gruppe mit zentralem Gedanken, etwa Gang, Kult, Konzern, Stiftung oder Museum. Es darf auch harmlos wirken.",
   "**Twist:** Mindestens eine überraschende Wendung, meist mit Mythos-Bezug. Realweltliche Mythologie hilft beim Finden.",
   "**Kernmerkmale:** Schlüssel-Figuren (benannte NPCs mit Rolle, Source oder Tech und eigenen Plänen), Ressourcen (Soldaten, Sources, Gear, Hindernisse), Agenda (was sie erreichen wollen) und Motive (Symbole, Farben, Worte für den Look)."
  ]},
  {t:"p", x:"**Beispiel CryoCharm:** Ein Kryotechnik-Konzern, dessen CEO Skye Carlin in Wahrheit die Avatarin der Cailleach ist. Die Agenda: einen Wirbel in der Bucht erzeugen, das Wetter manipulieren und aus der Katastrophe Gewinn ziehen. Die Ressourcen: Winterwölfe und Ökoterroristen im geheimen Auftrag, Schockfrost-Waffen. Das Motiv: Winter und Weissagung."}
 ]},
 {id:"jobs", titel:"Jobs und Job-Typen", seite:284, bloecke:[
  {t:"p", x:"Ein Job gibt der Crew ein Ziel, mit Lohn, neuem Gear und wachsendem Ruf. Er ist mehr als ein Abenteuer im Cyberpunk-Kostüm: Er soll die Ziele und Themen der Figuren treffen. Oft geht es um Entscheidungen, die sich nicht eindeutig lösen lassen."},
  {t:"tabelle", kopf:["Job-Typ","Grundidee","Complications (Beispiele)"], zeilen:[
   ["Abduction / Extraction / Hijacking","Jemanden oder etwas in Transit oder aus einer gesicherten Anlage holen. Erst Planung, dann wird es offen gewalttätig.","Die Crew wird gesehen, Alarmstufe steigt. Das Ziel entkommt, Verfolgung. Die Zielperson ist eine Verkleidung. Das Ziel verrät Neues."],
   ["Acquisition (Stehlen)","Heist oder Con: auskundschaften, eindringen, Beute, raus.","Ein anderes Team oder ein Insider zieht den gleichen Job durch. Die Sicherheit wurde verstärkt. Das Objekt ist eine Attrappe oder existiert noch nicht."],
   ["Assault / Raze / Assassination / Shutdown","Ein Problem mit allen Mitteln lösen. Mehr Raum für Motive und ethische Fragen.","Das Ziel ist ein Profi-Kollege oder Unschuldige sind in der Nähe. Der Ort ist eine Thin Place. Der Auftraggeber verrät die Crew nach dem Job."],
   ["Brokering","Verhandlung unter Drohung. Beide Seiten spionieren und manipulieren, bleiben aber unter der Eskalationsschwelle.","Der Verhandlungsgegenstand wird gestohlen oder übernommen. Eine Partei wird von einer gefährlichen Außenmacht gesteuert. Eine dritte Partei greift mit Waffen ein."],
   ["Corporate Espionage / Disinformation","Konzernintrigen, viel Cyberspace, Social Engineering im Distrikt-Maßstab.","Neue Anti-Intrusion-Software oder ein Harnessed-Wächter geht online. Die Führung ändert sich. Die gefundenen Geheimnisse sind Fallen."],
   ["Exorcism","Schädliche Geister aus Person oder Ort entfernen, meist mit einem magischen Kampf zum Schluss.","Die lokale Bedrohung ist Vorbote von etwas Größerem. Kulte oder Kreaturen eines anderen Mythos tauchen auf. Der Reinigungszauber schlägt zurück."],
   ["Investigation","Ungewöhnliche Ereignisse aufklären, Verbrechen lösen, Konzernbosse und korrupte Politiker befragen.","Ein erwarteter Beweis fehlt (Vertuschung oder Verfall). Der Fall reicht bis zu Mächtigen. Ein Beweis ist selbst gefährlich."],
   ["Ritual Performance","Ein Ritual durchführen, oft als Schutz vor Störungen.","Wetter, Feuerwerk oder ein Bandenkrieg stören. Eine Stufe verlangt ein Opfer (Lunge, Erinnerung, Zukunft). Das Ritual ruft etwas anderes herbei."],
   ["Scouting Urban Wilds","Schrott, Beute oder eine Karte eines Gebiets. Oft ergreifen die Spieler:innen selbst die Initiative.","Rivalisierende Scavenger sind misstrauisch. Die Crew verläuft sich und wird von einer technisch oder magisch veränderten Kreatur angegriffen. Unmarkierte Todeszone."],
   ["Security Detail / Patrol","Etwas bewachen. Beginnt harmlos und wird gefährlich.","Der Feind ist besser vorbereitet, eine Bombe oder ein Verräter taucht auf. Das Bewachte wird gefährlich. Der Bewachte läuft zum Rivalen über."],
   ["Source-Hunting","Eine Source sichern, oft in einer Thin Place mit übernatürlichem Hindernis.","Die Source ruft einen Wächter, der mal hilft, mal Chaos anrichtet. Ein Rivale kommt mit Werkzeug zum Neutralisieren. Die Methode reagiert auf ein Mythos-Thema einer Figur."],
   ["Transport","Wie Security, aber unterwegs. Mal heimlich, mal als Wettlauf.","Verkehr, Pannen oder Polizeikontrollen. Das Transportgut verhält sich seltsam. Auf der Route wartet ein Hinterhalt."]
  ]},
  {t:"liste", items:[
   "**Job-Ketten (Sausage Link):** Füge vor oder nach einem Job einen Job eines anderen Typs ein. So wird aus einem simplen Job eine längere, verschachtelte Lage.",
   "**Umgedrehte Typen (Subverted):** Ein Job-Typ lässt sich drehen, etwa eine Ausbruch-Mission, bei der die Crew selbst herausgeholt werden muss, oder ein Ritual, für das die Quellen der Figuren selbst das Opfer sind."
  ]}
 ]},
 {id:"job-bau", titel:"Job entwerfen", seite:287, bloecke:[
  {t:"p", x:"Ein Job hat Haken, ein konkretes Ziel, eine Reihe von Szenen mit Challenges, einen Höhepunkt und eine Nachbetrachtung (Denouement). Er beginnt mit einem Konzept, einem Job-Typ oder einem Detail. Hat man eins davon, arbeitet man die anderen zwei aus."},
  {t:"h", x:"Schritt 1: Ausgangspunkt wählen"},
  {t:"liste", items:[
   "**Mit einem Detail:** Ein Charakterthema, ein Hook aus einem früheren Job, ein Ort wie eine Seilbrücke, eine Szene wie eine Verfolgungsjagd, ein Mythos, ein Gadget oder eine Challenge. Dazu fragen: Wie sieht es aus? Wo in der Megacity? Wer ist da? Was passiert, wenn eine Figur eingreift? Ein Detail gelegentlich auf den Kopf stellen.",
   "**Mit einem Job-Typ:** Was steht auf dem Spiel? Wer ist beteiligt? Ein Job-Typ muss nicht perfekt passen, er sollte nur in dieselbe Richtung gehen.",
   "**Mit einem Konzept:** Eine große Idee, etwa eine moralisch doppeldeutige Lage. Dafür einen passenden Job-Typ suchen (für das Trolley-Problem etwa Assault)."
  ]},
  {t:"h", x:"Schritt 2: Die Teile verbinden"},
  {t:"liste", items:[
   "**Core Moments:** Ein bis mehrere Momente, die du sehen willst, etwa das Gebäude explodiert oder die Source wird enthüllt. Vorbereitet als bereite Situation: Ort, Atmosphäre, Story-Tags, NPCs mit Zielen, ggf. Challenges. Der Ausgang bleibt offen, Würfel und Spieler:innen entscheiden mit.",
   "**Vektoren:** Jede wichtige Kraft hat ein Gesicht (eine benannte Person), einen Want (was sie will) und einen Push (was sie einsetzen kann). Der Auftraggeber ist immer ein Vektor, die Crew nie. Zeitdruck wie eine Flut, ein Fluch oder ein sich schließendes Portal ist ein Vektor ohne Denken, mit Want und Push.",
   "**Skelett:** Start-Szene, ein bis zwei Folgeszenen, alle Core Moments und ein Finale. Zu jedem Moment fragen: Was passiert davor und danach, und welcher Vektor hat ihn ausgelöst? Vektoren passen sich an, bis alles zusammenpasst. Zu starke oder schwache Vektoren lassen sich eine Ebene in der Hierarchie nach oben oder unten verschieben.",
   "**Start, Recherche, Finale:** Der Start liegt meist im Hauptquartier oder Stammlokal. Recherche wird mit Quick-Würfen, einer Montage oder einem Flashback gespielt. Das Finale steigert die Spannung, oft mit einem Bosskampf oder einer Flucht.",
   "**Set Pieces:** Die Schauplätze der Action vorab wählen, etwa ein Labor für einen Heist, ein U-Boot für eine Entführung oder einen Tatort bei Ermittlungen. Der Ort soll das Konzept zeigen: Konzern-Plaza mit teurer Kunst für Korruption, Hafen und verfallene Blocks für Bandenkrieg."
  ]},
  {t:"h", x:"Schritt 3: Regeln und Challenges"},
  {t:"p", x:"Entscheide, welche Szenen Tags bekommen und was eine Challenge wird. Nicht jeder Gegner braucht ein volles Profil; oft reicht ein Tag oder ein einfaches Limit. Mische Hindernistypen nach den drei Themen Self, Mythic und Noise. Ein Standard-Gegner mit einem Power Set wird zum Anführer. Auch ein Moment, der für die Crew böse enden kann, darf eine Challenge werden."},
  {t:"h", x:"Schritt 4: Abschluss"},
  {t:"liste", items:[
   "**Verrat:** Prüfe, ob jemand jemanden hintergeht. Falls nicht, dann plane einen Verrat ein, wenn es passt.",
   "**Villains:** Auch kleine Jobs brauchen am Höhepunkt einen stärkeren Gegner. Consequences sind seine Signature-Attacken, Threats zeigen seinen Charakter.",
   "**Hooks:** Geh zum Anfang zurück und baue Haken, die Spieler:innen und Figuren gleichermaßen interessieren. Ein Auftrag, ein Gespräch mit dem Kontakt, ein Zufall auf der Straße oder ein Freund in Not. Am stärksten sind Haken, die an die Themen einer Figur anschließen.",
   "**Denouement und Aftermath:** Nach dem Job ein Moment der Rückschau. Dabei prüfen, welche Themen sich verschieben, ob ein Upgrade fällig ist oder ein Story-Tag ausläuft. Danach die großen Folgen im Aftermath festhalten: Rache, neue Chancen, Veränderungen in der Megacity."
  ]},
  {t:"h", x:"Belohnungen"},
  {t:"liste", items:[
   "**Erzählerisch zuerst:** Ein Plan ist vereitelt, ein gehasster Feind ist gefallen, die Crew lebt.",
   "**Geld:** Ein Status für Liquidität, etwa flush, lots-to-spend oder rolling-in-it, je nach Geldbeutel des Auftraggebers.",
   "**Loot-Katalog:** Wertvolle Gegenstände als Tags, bei Schlüsselstücken mit Zusatz-Tags und Schwäche (Weakness). Die SL legt fest, was sofort nutzbar ist und was erst aktiviert werden muss (burnt).",
   "**Information:** Der wahre Name eines verhassten Konzernchefs ist ein großer Gewinn, weil die Crew den nächsten Job selbst planen kann."
  ]},
  {t:"p", x:"**Vorgehen: Stealth oder Guns Blazing.** Ob die Crew schleicht oder mit gezogenen Waffen hineingeht, bestimmt den Ton einer Serie. Eine Figur am Rand darf aus der Reihe tanzen, solange sie den anderen nicht den Spaß verdirbt."}
 ]},
 {id:"challenge-bau", titel:"Challenges erstellen", seite:294, bloecke:[
  {t:"p", x:"Eine Challenge ist eine mechanische Kurzform für die Risiken und Ziele einer Szene. Sie muss kein großer Werteblock sein: Oft reichen ein bis zwei Limits und eine Liste von Status, die sie als Consequence verursacht. Challenges können Gegner, Gefahren, Gegenstände, Cyberspace-Probleme oder Rätsel sein."},
  {t:"h", x:"Aufbau eines Profils"},
  {t:"liste", items:[
   "**Beschreibung:** Aussehen, typisches Verhalten und Rolle im Job. Regeln, die nicht als Hindernis wirken (etwa eine Dealer-Figur, die Drogen als Story-Tags verkauft), stehen hier und nicht im Profil.",
   "**Limits:** Fortschritt zum Ziel, meist das Überwinden der Challenge. Dazu Polar-Limits und Progress-Limits, deren Specials beim Vollwerden greifen.",
   "**Base Tags:** Tags und Status, die die Challenge von Beginn an hat (etwa heavy armor oder firewalled). Weaken kann sie entfernen, meist erholt sie sich nach einer Downtime. Schnellere Erholung steht als Consequence.",
   "**Specials:** Regeln, die nur diese Challenge betreffen. Sie greifen auch in Aktionen und Abschwächungen ein, sobald die Bedingung erfüllt ist. Sparsam einsetzen: Oft tun es ein Limit, eine Consequence oder ein Base-Tag.",
   "**Threats und Consequences:** Eine Threat zeigt an, wie die Challenge das Leben schwerer macht. Wird sie ignoriert, folgt meist die passende Consequence. Freistehende Threats und Consequences sind möglich."
  ]},
  {t:"h", x:"Auf die Schnelle"},
  {t:"p", x:"Eine Challenge kann spontan entstehen. Ein sehr breiter Abgrund bekommt die Angabe very wide, sodass das Überqueren einen Wurf verlangt. Ein Gangster braucht ein Limit hurt-or-subdue:3. Ein Damm bekommt ein Progress-Limit collapse:5. Eine Kreatur verursacht bitten-2. Ein heißer Kern verursacht bei jedem Treffer burned-3, das nicht abzuschwächen ist."},
  {t:"h", x:"Wer darf eine Challenge sein?"},
  {t:"p", x:"Jede NPC oder Entität darf es werden, aber nur, wenn du das Hindernis vorab festlegen willst. Auch freundliche oder unschuldige Figuren können Hindernisse sein. Begleiter der Spieler:innen (Sidekicks, Drohnen) bekommen kein eigenes Profil: Sie werden über die Tags der Figur dargestellt."},
  {t:"h", x:"Sechs Schritte"},
  {t:"liste", items:[
   "**Schritt 1: Rolle und Merkmale.** Rollen: Asset (wird beschützt), Attacker (will verletzen), Barrier oder Hazard (Hindernis), Countdown (läuft ab), Mystery (will man aufdecken), Pursuer (verfolgt), Target (flieht), Watcher (beobachtet), Temptation (lockt). Dazu die Merkmale: Was macht die Challenge aus, was sieht und hört man?",
   "**Schritt 2: Limits.** Mindestens ein Limit: wie man sie überwindet oder welcher Fortschritt gemessen wird. Pro Limit ein Maximum zwischen 2 und 6. Tier 2 heißt leicht zu überwinden, Tier 6 sehr schwer. Immunität heißt Limit „–“. Progress-Limits zeigen eine gefährliche Verwandlung oder ein Ende.",
   "**Schritt 3: Base Tags und Status.** Was gibt der Challenge einen zusätzlichen Kick? Tags wirken auf die Würfe der Spieler:innen, nicht auf die Consequences. Nur Interessantes, keine Inventarlisten.",
   "**Schritt 4: Consequences und Specials.** Wie beeinflusst sie Figuren, wie hilft sie sich selbst, wie verändert sie die Szene? Consequences sind sichtbare Aktionen. Specials sparsam einsetzen und möglichst andeuten, damit eine aufmerksame Crew sie entdecken kann.",
   "**Schritt 5: Threats.** Jede Consequence bekommt eine Threat. Sie muss konkret und sichtbar sein. „Bereitet sich vor“ reicht nicht, besser: Sie zieht eine Waffe oder ruft ein Zauberwort.",
   "**Schritt 6: Abschluss.** Alles noch einmal gegenlesen: fehlt ein Limit, passt ein Limit nicht, braucht es ein weiteres Base-Tag? Dann Name und Beschreibung geben."
  ]},
  {t:"p", x:"Das Ergebnis ist ein neuer Gegner, der der Crew im Weg steht."}
 ]},
 {id:"challenge-beispiel", titel:"Beispiel: Cybernetic K-9 Unit", seite:297, bloecke:[
  {t:"p", x:"**Konzept:** Ein Polizeihund mit Cyberware, der autonom patrouilliert und Befehle aus der Zentrale erhält. Die Limits sind eine Schlägerei (Überwältigen), das Hacken seiner Systeme (Übernahme) und die Spurensuche (Progress)."},
  {t:"challenge", name:"Cybernetic K-9 Unit", typ:"Challenge (Drohne)", beschr:"Ein Polizeihund mit Cyberware, der autonom patrouilliert und Befehle aus der Zentrale erhält. Klein, aber zäh; die Systeme wehren nur Straßen-Hacker ab.", limits:[{n:"Überwältigen (hurt-or-subdue)", v:3},{n:"Übernahme (take-over)", v:3},{n:"Spur (tracked-down, Progress)", v:4}], tags:["subdermal plates (Story-Tag)","olfactory enhancements (Story-Tag)","firewalled-2","programmed-loyalty-3"], threats:[{n:"Knurrt drohend und pirscht langsam vor", x:"Beißt zu und lässt nicht los: wounded-2 und held-by-bite-3"},{n:"Stemmt sich auf die surrenden hydraulischen Hinterbeine", x:"Wirft sich auf jemanden und reißt ihn zu Boden: prone-2"},{n:"Schnüffelt am Boden und aktiviert die Sensorschüsseln am Kopf", x:"Verfolgt eine Person, die kürzlich im Gebiet war: on-the-hunt-2, das die Spur-Limit voranbringt"}]},
  {t:"p", x:"Der Beispielgegner zeigt die Reihenfolge der Schritte: Konzept, Limits, Base Tags, Consequences, Threats, Abschluss. Specials sind bewusst weggelassen, weil ein Gegner dieser Art sie nicht braucht."}
 ]}
];
if(typeof OS_REGELN!=="undefined") OS_REGELN.push(...OS_METRO_SERIEN);
