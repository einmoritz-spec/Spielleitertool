OS_ADV_PART("kenko-ruins", [
{ id:"datacenter", titel:"Das Data Center", gruppe:"Die Ruine erkunden", bloecke:[
  {t:"vorlesen_ref", v:"Das Datenzentrum liegt am Fuß des Berges, einen halben Kilometer von der Mauer entfernt. Es ist ein trauriges Beispiel für den Baustil, der vor einigen Jahrzehnten üblich war und Autarkie und Zurückhaltung betonte: eine Anlage aus fensterlosen grauen Betonbauten, ringförmig durch Korridore verbunden. Beim Näherkommen erkennt ihr hinter den zerbrochenen Eingangstüren eine gespenstische Weite aus Servern und Großrechnern unter schwarzem Staub.", seite:280, x:"Am Bergfuß, einen halben Kilometer von der Mauer, liegt ein Ring aus fensterlosen grauen Betonbauten; hinter den zerbrochenen Eingangstüren stehen Server und Großrechner unter schwarzem Staub."},
  {t:"p", x:"Das Data Center war die Informationszentrale von Kenkos multinationalem Projekt: Alle wirtschaftlichen und wissenschaftlichen Daten der Firma und ihrer Partner liefen hier zusammen. Solarpaneele halten Licht und einen Teil der Server am Laufen, eine Verbindung nach draußen gibt es nicht."},
  {t:"p", x:"Zunächst wirkt alles menschenleer, nur persönliche Habseligkeiten erinnern an die damalige Arbeitskultur. Unter der schwarzen Nanite-Asche liegen jedoch Kleider voller Asche: die Überreste von Arbeitern, die von ihren eigenen Nanites aufgezehrt wurden. Das Gebäude wurde offenbar praktisch ohne Vorwarnung evakuiert. Die Roamers meiden es, es bedeutet ihnen wenig."},
  {t:"p", x:"Wer sich ins System hackt und die **firewalled-3**-Sperre umgeht, kann wertvolle Daten laden. Wer einfach Speichermedien einsackt, bekommt **encrypted-3**-Daten und riskiert, dass genau dieses Medium nichts Interessantes enthält."},
  {t:"h", x:"Daten aus dem Center"},
  {t:"liste", items:[
    "**Geheime Bioengineering-Forschungsdaten von Kenko.** Viele Konzerne, besonders aus Medizin und Pharma (etwa Soma Medical, S. 192), würden für einen größeren Teil davon töten.",
    "**Belastende Berichte**, nach denen die Regierung über das Geoengineering-Projekt und seine erheblichen Risiken voll informiert war.",
    "**Eine letzte Systemabfrage** vor dem Shutdown nach Ort und Status der vier Zylinder mit rohem, unprogrammiertem Nano Gel. Die ungelesene Antwort: Drei wurden am Unglückstag geleert, der vierte ging an die Führungsetage im Boardroom im Spire."
  ]}
]},
{ id:"domes", titel:"Die Domes", gruppe:"Die Ruine erkunden", bloecke:[
  {t:"vorlesen_ref", v:"Vier miteinander verbundene Kuppeln bedecken den Hang des Berges wie Pilzkappen. Mit modernsten Systemen der Agrarinformatik, 3D-Fertigung und automatisierten Hydroponik konnten die Kuppeln angeblich jede Umgebung der Erde nachbilden, um Nanotech-Lösungen zu erforschen und zu entwickeln, die zum jeweiligen Klima passten.", seite:280, x:"Vier verbundene Kuppeln überziehen den Hang wie Pilzhüte; modernste Agrarinformatik, 3D-Fabrikation und Hydroponik konnten angeblich jede Umwelt der Erde nachbilden, um klimapassende Nanotech zu entwickeln."},
  {t:"p", x:"Seit dem Unglück sind die Umgebungen im Inneren wild geworden: Die ungebremste Kraft der Nanites und die konservierenden Umweltalgorithmen haben gefährliche neue Ökosysteme erzeugt. Pflanzen sprühen Verdauungsenzym-Wolken, die Gewebe auflösen; Insekten sind zu groß oder vermischen Merkmale mehrerer Arten; chitinartige Grashalme folgen vorbeigehenden Tieren. Jeder Dome hat eigene Gefahren. Roamers trifft man hier gelegentlich, sie nutzen die Domes zur Selbstprüfung, zur Materialernte und zur Meditation."},
  {t:"h", x:"Dome One: Tropischer Regenwald"},
  {t:"p", x:"Das Dach ist gebrochen, die schwüle Luft entweicht als Nebelschwaden. Sterbende Tropenbäume sind mit exotischen Vögeln verschmolzen, tragen bunte Federn und kreischen entsetzt. Der Boden ist gefährlich: Die erstaunlich kräftigen, klauenartigen Wurzeln greifen nach Eindringlingen (**rooted-3**) und versuchen, den Körper zu Dünger zu zerquetschen (**squished-3**)."},
  {t:"h", x:"Dome Two: Die Höhle"},
  {t:"p", x:"Eine künstliche Höhle aus lasergeschnittenem Stein, nasse Wände mit phosphoreszierenden Pilzen in blaugrünem Licht. Es stinkt furchtbar, ist aber entgegen dem Anschein nicht giftig. Wer mehr als ein paar Minuten die Luft atmet, erhält **glowing-organs-3**, der Körper wird selbst zur Lichtquelle. Wird der Status nicht binnen eines Tages entfernt, wird er dauerhaft und ersetzt sich durch den Story Tag **glowing organs**."},
  {t:"h", x:"Dome Three: Die Panda-Reservate"},
  {t:"p", x:"Aus Stein, Erde, Gras und Bambus ist ein undurchdringliches Dickicht geworden. Im Gras lauern knurrende rothaarige **Mutant Red Pandas**: hundegroß, tödlich, mit langen Stechklauen, giftigen Stachelschwänzen und unheimlicher Intelligenz an der Spitze der neuen Nahrungskette."},
  {t:"challenge", name:"Mutant Red Panda", typ:"Challenge", beschr:"Süßes Äußeres, tödliche Rudeltaktiker.",
    limits:[{n:"hurt or subdue", v:3}],
    tags:["cunning","cute"],
    threats:[
      {n:"Heben den Schwanz drohend", x:"Giftige Stachelsalve (necrosis-3 für alle im Bereich)."},
      {n:"Flitzen einen Baum hinauf", x:"Sprung ins Gesicht eines Ziels, festkrallen (clawed-2 und red-panda-on-face-3)."},
      {n:"Bellen und quieken niedlich", x:"Weitere Pandas tauchen aus einer versteckten Grotte auf (Scale um 1 erhöhen)."},
      {n:"(Konsequenz-Option)", x:"Rudeltaktik: Sie schließen ihre Beute ein (cornered-3) oder gewinnen superior-position-2."}
    ]},
  {t:"h", x:"Dome Four: Der See"},
  {t:"p", x:"Ein verseuchter See füllt den Großteil der Kuppel, trüb von der Asche zerstörter Nanites. Etwas schwimmt darunter: Wer den See untersucht oder lange nahe am Ufer steht, provoziert den mutierten **Giant Koi Fish**, schön, aber riesig genug, um einen Menschen zu verschlucken."},
  {t:"challenge", name:"Giant Koi Fish", typ:"Challenge", beschr:"Gigantischer mutierter Koi im Seedome.",
    limits:[{n:"hurt or subdue", v:5}],
    tags:["murky water","Status: lucky-1","Scale 2"],
    threats:[
      {n:"Ein Schatten nähert sich im trüben Wasser", x:"Schwanzschlag schleudert ein Ziel am Ufer ins Wasser (knocked-back-4; bleibt ein Tier übrig, fällt das Ziel ins Wasser)."},
      {n:"Springt dramatisch hoch aus dem Wasser", x:"Landet auf einem Ziel und verschluckt es (swallowed-3)."},
      {n:"Schnellt auf jemanden mit großer Waffe zu", x:"Verschluckt die Waffe (zwei Tags burnen)."}
    ]},
  {t:"h", x:"Die Control Chamber"},
  {t:"p", x:"Im Seedome steckt hinten eine versteckte Kammer mit den Umweltkontrollen aller Domes. Sie zu finden und die versiegelte Tür zu öffnen, erfordert eine Aktion. Von hier lässt sich alles über ein unabhängiges Domes-Netz überwachen. Wer das System hackt (**firewalled-2**), erfährt: Das Nanotech-Desaster begann in Dome One. Ein genehmigtes Experiment programmierte das Nano Gel und setzte es in die Umwelt, um zu testen, ob es ein Ökosystem umschreiben kann. Als die Nanites außer Kontrolle gerieten, versuchten die Wissenschaftler, sie mit den Dome-Systemen zu stoppen, was sie nur weiter verbreitete. Das setzte den zweiten und dritten Zylinder frei, nicht aber den vierten, der irgendwo in den Spire geschickt worden war."}
]},
{ id:"spire", titel:"Der Spire", gruppe:"Die Ruine erkunden", bloecke:[
  {t:"vorlesen_ref", v:"Dieser Turm aus Glas und Stahl neben dem Gipfel des Berges war einst die globale Zentrale von Kenko, ein Symbol für Macht und Reichweite des Konzerns. Heute steht er für das Gegenteil: für Torheit, Hybris und den Schmutz der Menschheit. Seine jetzigen Bewohner, Nanites wie Menschen, haben das Innere so verändert, dass es nur noch oberflächlich an Kenkos Glanzzeit erinnert. Die Wände sind teils zerbrochen, teils verdaut, rostige Möbel liegen in Haufen, schmutzige Netze voller Beute hängen überall, und Hügel aus Nano-Abfallasche bedecken den Boden. Und doch haben die Roamers dem Ort das Gefühl eines echten Tempels gegeben: Sie haben den Turm in ein Kloster für ihre dunklen Kami verwandelt.", seite:281, x:"Der gläserne Stahlturm neben dem Gipfel, einst Konzernzentrale und Machtsymbol, steht heute für Torheit, Hybris und Schmutz der Menschheit: Wände halb zerbrochen, halb verdaut, rostige Möbel in Haufen, Netze voller Beute, Aschehaufen auf dem Boden, und doch von den Roamers zum Kloster ihrer dunklen Kami gemacht."},
  {t:"p", x:"Der Spire ist die frühere Kenko-Zentrale, nun der **zentrale Tempel der Roamers**: Büros wurden Isolationszellen, Konferenzräume Trainings-Dojos oder Baracken, die Hallen sind voller Vorräte aus der ganzen Wüstenei."},
  {t:"p", x:"Greift die Crew den Spire an, braucht sie die Challenge **Up the Spire**, um weiterzukommen. Die Threats taugen auch als Inspiration, wenn die Crew eingeladen wurde, aber an verbotenen Orten stöbert."},
  {t:"challenge", name:"Up the Spire", typ:"Challenge (Traverse)", beschr:"Der Aufstieg durch den von Roamers und Nanites veränderten Turm.",
    limits:[{n:"traverse", v:4}],
    tags:["it's like a maze in here","rundown headquarters","Status: warded-2","Status: shadowy-1"],
    threats:[
      {n:"Kleine Luftbewegungen fangen sich in einem einzelnen Sonnenstrahl, oder in der Ecke liegt eine tote Ratte", x:"Die PCs atmen die Krankheit im Raum ein (sickened-3 für alle; kann als Nanite Exposure behandelt werden, siehe oben)."},
      {n:"Eine drückende Bosheit liegt spürbar über allen im Raum", x:"Eine überirdische Kraft attackiert, was den PC vor Nanites schützt (passenden Gear-, Tech- oder Mythic-Tag burnen)."},
      {n:"Zarte Kalligrafie bedeckt Wände und Boden des Gangs", x:"Die Wards löschen Magie und verursachen Magenbeschwerden (Mythic-Tags burnen, zwei Tiers nützlicher Mythic-Statuses entfernen, queasy-1)."},
      {n:"Der Weg ist durch teils eingestürzten, zerfallenen Schutt blockiert", x:"Die Crew muss einen anderen Weg finden (ein Tier von traverse entfernen)."},
      {n:"(Konsequenz-Option)", x:"Eine Gruppe Roamers stellt die Crew und verlangt zu wissen, was sie hier will (Present A New Challenge: Roamers)."}
    ]},
  {t:"h", x:"Loot: The Spire"},
  {t:"p", x:"Beim Plündern oder als Geschenk der Roamers findet die Crew diese Loot-Katalog-Einträge."},
  {t:"p", x:"**General Tags:** abandoned biotech equipment, makeshift net gun, rations and water, reagent vats, Roamer infected staff, stolen Meido Relics, winch"},
  {t:"tabelle", titel:"Loot-Katalog (Item / Beschreibung / Feature Tags / Weakness)", kopf:["Item","Beschreibung","Feature Tags","Weakness"], zeilen:[
    ["Kenko Security Service Armor","Rüstung der Kenko-Sicherheitsabteilung mit Biogel-Innenschicht, die an der Verletzung sofort Erste Hilfe leistet, Heilung beschleunigt und Schmerz betäubt.","biogel armor, pain numbing, burn treatment, chemically enhanced endurance","chemical fatigue"],
    ["Scavenger Grapple-Ladder Launcher","Aus Fundstücken gebaut, breit, aber leicht: schießt eine düsengetriebene Greifdrohne, die sich fast überall festhakt und eine Klappleiter ausrollt.","scavenger grapple-ladder launcher, slippery or uneven surfaces, easy to climb ladder, made for creative usage","wide and unwieldy"],
    ["Kenko “Learned Sage” Nano-Sensitive Scanner","Handgerät mit modernster Nanite-Erkennung und -Analyse aus der Zeit vor den Anti-Nano-Gesetzen. Schwarzmarkt-Vermögen, aber technisch keine Nanotech und damit nicht per se illegal.","nano-sensitive scanner, identify nanite spec, read nano signatures & comms, extrapolate current programming","coveted tech"],
    ["Curse of Pestilence","Passende Esoterica-Praktiker können diesen Fluch von einem Roamer oder den Yakubyō Gami selbst lernen. Er beschwört einen verseuchten Nanite-Schwarm, der das Ziel infiziert und zu grausigem Tod führen kann.","curse of pestilence, corrode protective gear, debilitating sickness, rapid tissue breakdown","purification wards"]
  ]}
]},
{ id:"boardroom", titel:"Das Boardroom", gruppe:"Finale", bloecke:[
  {t:"vorlesen_ref", v:"Oben im Spire findet ihr einen spitz zulaufenden Raum, auf allen Seiten von zerborstenen Glasfenstern umgeben, mit einem Ausblick, der jener würdig ist, die die Welt beherrschen wollten, oder das dachten sie zumindest. In dieser Höhe müssten kräftige Böen am Boardroom zerren, doch stattdessen ist die Luft hier still und trüb, schwer von der Aussicht auf leeres, von der Katastrophe verwüstetes Land. Auf dem einst edlen steinernen Konferenztisch, jetzt schmutzig und voller gestohlener, entweihter Reliquien aus ganz Meido, wirft sich eine Priesterin der Roamers im Gebet vor ihren üblen Göttern nieder. Etwas Bösartiges bewegt sich durch die abgestandene Luft. Plötzlich verspürt ihr den Drang, euch zu übergeben.", seite:283, x:"Hoch oben im Spire ein spitz zulaufender Raum mit zerborstenen Panoramafenstern; die Luft steht still und drückt, und auf dem verdreckten Steintisch voller geraubter, entweihter Reliquien liegt eine Roamer-Priesterin im Gebet. Etwas Bösartiges liegt in der Luft, und Übelkeit steigt auf."},
  {t:"p", x:"Auf dem langen Steintisch kniet **Nozawa Emiko**, die Anführerin der Roamers, in zerschlissener Wüstenkleidung, Staubbrille um den Hals. Sie bleibt knien, wenn die Crew eintritt."},
  {t:"p", x:"Die Roamers haben Kunst und Technik der Konzernzeit entfernt und den Raum zum Gebetsort für die Yakubyō Gami umgestaltet: Seidenbehänge und Schreinschätze schmücken den Hauptschrein. Kundige erkennen darunter kulturell bedeutende Objekte anderer Kami-Kulte; die Roamers plündern offensichtlich heilige Stätten der Wüste für ihre Geistermeister. Hinter dem Tisch steht ein schwerer, mit Warnungen übersäter Behälter mit dem einzigen verbliebenen Gefäß unprogrammierter Nanites aus Kenkos Anfangszeit."},
  {t:"p", x:"In der Raummitte flimmert ein Dunst, ein kalter Bergwind weht: Er kommt aus den **shima** (Kami-Inseln, S. 33), in denen die Yakubyō Gami hausen, durch kleine Risse in der Realität. In einigen Jahren wird das eine echte Thin Place. Die Kami selbst sind nicht da, ihre mystische Präsenz schon, sodass Roamers und Crew mit ihnen interagieren können."},
  {t:"h", x:"Je nach Ziel der Crew"},
  {t:"liste", items:[
    "**Die Crew will das Nano Gel von Nozawa:** Sie ist argwöhnisch, denn sie weiß, was für ein Verhandlungstrumpf das ist. Überzeugt die Crew sie von ihrer Verlässlichkeit und Tatkraft, verlangt Nozawa einen Auftrag: ein schwer erreichbares Ziel infizieren (eine wichtige Figur, die in die Megacity entkam) oder die Abwehr einer Wüstensiedlung deaktivieren, die sich gegen die Roamers verschanzt hat. Danach übergibt sie das Gel und lädt die Crew eventuell ein, den Roamers beizutreten.",
    "**Die Crew ist mit Teshima da oder will den Roamers nicht helfen:** Sie muss sich zum Behälter durchkämpfen oder ihn den Yakubyō Gami unter der Nase stehlen. Die Kami-Präsenz durchdringt den Raum, ihre Aufmerksamkeit ist aber begrenzt: Eine große Ablenkung gibt jemandem die Chance, den Behälter zu schnappen."
  ]},
  {t:"hinweis", titel:"Die letzte Nano-Gel-Kartusche", x:"Eine Nanite-Suspension in programmierbarem Gel, ein Super-Agent für unglaubliche Verwandlungen, in fähigen Händen für Wunder (oder Gräuel) gut. Statt sie mit Effects darzustellen, behandle sie als **Plot Device**: Sie kann direkt eine große Transformation antreiben oder gegen praktisch alles eingetauscht werden, ein goldenes Ticket für ein einzelnes Ding, eine Person oder einen Dienst, aber nicht ohne Komplikationen. Wie die Megacity schmerzhaft lernte, schlägt der Nanite-Einsatz oft fehl. Willst Du würfeln, nimm **Going Out In A Blaze**; ist die Nanotech-Threat im Job deutlich geworden, kannst Du die Consequences auch direkt liefern, wenn die PCs das Gel nutzen, um **Make The Future Bleaker** oder Schlimmeres."},
  {t:"hinweis", titel:"Folgen für die Crew", x:"Hat die Crew je einem anderen etwas angetan (bei Söldnern so gut wie sicher), werden die Yakubyō Gami **restless-2** und fordern von Nozawa, die Crew aus ihrer Gegenwart zu verbannen. Das gilt selbst in Mōjins Begleitung und nach einem Reinigungsritual, denn die Kami dulden kein Übel in ihrer Nähe. Außerdem jagen die Nano-butai jeden, der die Kartusche besitzt oder je angefasst hat: Diesmal nicht Teshimas müdes Außenteam, sondern die Nano-butai der Megacity, denen Machterhalt wichtiger ist als die Eindämmung gefährlicher Nanotech. Nutze Challenges wie den Nano-butai Trooper (S. 128) sowie Panzer, Drohnen, Waffenplattformen und alles, was Regierungsgeld kaufen kann."}
]},
{ id:"yakubyo-gami", titel:"Die Yakubyō Gami", gruppe:"Finale", bloecke:[
  {t:"p", x:"Die Yakubyō Gami sind Geister von Seuche und Krankheit in vielerlei Gestalt. Normalerweise reisen sie umher und bestrafen jeden, der gegen soziale Normen verstößt. Derzeit sind die meisten in einer Kami-Insel, die das Boardroom **berührt**. Traditionell sind sie Richter, die aber als unmenschliche Kami keinerlei Sinn für Umstände oder die Fairness-Obsession der Sterblichen haben. Nach dem Nanotech-Desaster zog sie der Spire mit Tod und Verderbnis an. Der Roamer-Schrein hat ihren Halt in der Welt gestärkt, doch sie bleiben lieber drüben und lassen die Roamers als Agenten wirken."},
  {t:"p", x:"Die Challenge steht für die mystische Präsenz der Kami im Boardroom, die in der Nanotech der Luft wohnt. Technologien gegen Nanotech wirken daher gegen sie und zählen auf dasselbe Limit wie **banish**. Sich den Kami ganz zu stellen, würde verlangen, in ihre shima einzudringen oder sie herauszulocken und gegen einige der meistgefürchteten Kami der japanischen Geschichte zu kämpfen. Das ist nicht nur gesundheitsschädlich, sondern sprengt auch den Rahmen dieses Jobs."},
  {t:"challenge", name:"Yakubyō Gami", typ:"Challenge (Kami)", beschr:"Mystische Präsenz der Pestkami im Boardroom, in der Nanotech der Luft verkörpert.",
    limits:[{n:"banish", v:5}],
    tags:["kami of pestilence","Status: mystically-entrenched-3","Scale 1"],
    threats:[
      {n:"Eisiger Nebel aus der Geisterwelt zieht auf", x:"Gefühle von Schuld für vergangene Taten (guilt-ridden-3), oder Visionen des Ziels, wie es an der Krankheit leidet, die es am meisten fürchtet (terrified-4)."},
      {n:"Funkeln in der Luft zeigt, dass Nanites in Bewegung sind", x:"Sie infizieren eine Gliedmaße (rotting-limb-4), oder fallen über ein Ausrüstungsstück mit Carbon- oder Bio-Teilen her und ruinieren es (einen Tag burnen)."},
      {n:"Nozawa Emiko sinkt mit weiten Augen auf die Knie", x:"Die Nanites verlassen sie, weil die Yakubyō Gami ihre Lebenskraft zur Verstärkung ihrer Präsenz nehmen (drei Tiers von banish entfernen und drained-2 gegen Emiko)."}
    ]},
  {t:"h", x:"Nozawa Emiko"},
  {t:"p", x:"Eine knallharte Überlebende, der ihr Volk viel bedeutet. Sie hielt sich einst für zynisch, doch nachdem sie die Roamers aus Verzweiflung und Opportunismus den Yakubyō Gami verschrieb, akzeptierte sie ihre Rolle als Gesetzesbringerin und lernte, die Führung der Krankheitsgeister zu schätzen, ja zu verehren. Sie sieht sich als ergebene Dienerin der Gerechtigkeit, hat in der Rolle als Richterin im Namen der Pestkami Würde und Sinn gefunden und strahlt Autorität aus. Sie verhandelt, wenn die Crew etwas bietet, das sie will. Für sie sind die Roamers der moralische Kern, auf dem ganz Meido ruht: Die Kami irren zwar mitunter, aber ihre Forderungen zu befolgen ist besser als die Alternative, endloses Chaos. Mit ihrem Behelfsspeer, getaucht in Giftmüll, bringt sie schnellen, schrecklichen Tod."},
  {t:"challenge", name:"Nozawa Emiko", typ:"NPC (Anführerin der Yakubyō Gami Roamers)", beschr:"Hardcore-Überlebende und Richterin im Namen der Pestkami.",
    limits:[{n:"hurt or subdue", v:4},{n:"persuade", v:4}],
    tags:["makeshift Roamer armor","grim","Status: shielded-by-nanites-2","Status: true-believer-4","Status: warded-2"],
    specials:[{n:"HARBINGER OF DISEASE", x:"Wer Nozawa im Nahkampf berührt oder angreift, erleidet coughing-2, fever-2 oder shaking-2."}],
    threats:[
      {n:"Packt ihren Behelfsspeer fest", x:"Gekonnter Stich (cut-up-3 und septic-wound-2)."},
      {n:"Furcht die Stirn in grimmiger Entschlossenheit", x:"Eine letzte, erschütternde Todeswarnung (intimidated-3). Oder sie überzeugt jemanden, dass die Yakubyō Gami Meido zusammenhalten oder der einzige Weg sind, Nanotech wirklich zu kontrollieren (hesitant-2 oder listening-2)."},
      {n:"Ruft die Pestgeister zu Hilfe", x:"Plage auf ein Ziel (sickness-3). Oder ein Gebet, dass die Nanite-Wolke sich repariert (gain shielded-by-nanites-2) oder die Roamers heilt (bis zu 3 Tiers von Harm-Statuses entfernen)."}
    ]}
]},
{ id:"aftermath", titel:"Aftermath", gruppe:"Finale", bloecke:[
  {t:"p", x:"**Yakubyō Gami gebannt oder Nozawa tot:** Die Roamers zerstreuen sich und verlieren Nano-Immunität und die Macht, Nanite-Plagen zu entfesseln. Ohne yōkai, die die Plage aufrechterhalten, kann Teshima Osamu das Gelände endlich von den restlichen Nanobots säubern und vielleicht sogar einen Zufluchtsort für die Wüstenbewohner daraus machen. Binnen Wochen und Monaten sichert er die nötige Unterstützung und macht die Anlage zur Festung der Nano-butai."},
  {t:"p", x:"Überlebende Roamers hegen sicher einen Groll. Sie könnten verzweifelte Wege suchen, die Yakubyō Gami erneut zu beschwören oder eine andere yōkai-Source zu finden, im heiligen Auftrag, die Gotteslästerer zu töten, die ihren Tempel zerstörten."},
  {t:"p", x:"Ohne die Roamers wird Reisen in der Wüste schwieriger: Das schon gesetzlose Land wimmelt noch mehr von Banditen, und Key Players, die aus Angst vor den Roamers die Megacity mieden, wagen sich nun hinaus. Die Crew gilt wahrscheinlich als Retterin der Wüste und findet leicht Führer und Gastfreundschaft."},
  {t:"p", x:"**Zusammenarbeit mit Nozawa:** Gewinnt die Crew das Vertrauen der Roamers, leidet ihr Ruf bei den anderen Wüstengemeinschaften schwer. Ähnlich ergeht es der Crew, die die Yakubyō Gami vertreibt und mit Nozawa verhandelt: Die Roamers erwecken ihre Pestgötter unweigerlich neu, und wenn die Wüste erneut angegriffen wird, geben viele der Crew die Schuld."},
  {t:"h", x:"Offene Fragen"},
  {t:"p", x:"Was wurde aus der letzten Kartusche unprogrammierten Nano Gels, einem Artefakt, das die Zukunft der Megacity verändern könnte? Behielt die Crew sie oder zerstörte sie? Gab sie sie Teshima und der DU? Wenn ja: Können die hochrangigen Beamten der Nano-butai der Versuchung solcher Macht widerstehen?"},
  {t:"hinweis", titel:"Hinweise zur Vorlage", x:"Schreibweise im Original uneinheitlich: »nanties« (Tippfehler für nanites), »Nano Butai« und »Nano-butai« (hier einheitlich Nano-butai), »itchyskin-1« (hier itchy-skin-1), »truebeliever-4« (hier true-believer-4), »redpanda-on-face-3« (hier red-panda-on-face-3)."}
]}
]);
