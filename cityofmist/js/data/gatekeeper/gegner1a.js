/* Gatekeeper – Gatekeeper als Gegner: Story-Aufhänger, Fähigkeiten im Spiel, Agenten-Gefahrenprofile (S. 264–271). Ergänzt die Kategorie gk_gegner. */
CM_ORTE.gk_gegner = (CM_ORTE.gk_gegner||[]).concat([
 { id:"gk-adv-seeds", name:"Gatekeeper Story Seeds", teaser:"Story-Aufhänger für Fälle mit den Gatekeepern", p:265,
  text:[
   "## Gatekeeper als Gegner",
   "Die Gatekeeper lassen sich auf viele verschiedene Arten einsetzen, je nachdem, wie tief die Crew in die Organisation und ihre Operationen vordringt. Von Mystery Men, die die Taten der Crew aus der Ferne beobachten, über den schlimmsten Albtraum eines Rifts bis hin zu einer moralisch grauen Organisation, gegen die die SCs manchmal kämpfen und der sie manchmal widerwillig helfen: Die Gatekeeper sind ein vielschichtiger und zerrissener Gegner, der in deiner Serie über viele Staffeln hinweg auftreten kann, bevor er schließlich alle seine Karten aufdeckt.",
   "Hier einige Story-Aufhänger für Fälle mit Gatekeepern."],
  extra:["„Calling all units, calling all units. Breach is an Asian woman in her early twenties, 5 foot 3, wearing a black leather jacket and denim pants, matching the description of Lily Chow. Subject is approaching Fortune Row via the south highway riding a stolen motorcycle. Subject is accompanied by a 15-foot-tall Conjuration matching the description of Iron Hans, considered charmed and dangerous. Proceed with maximum caution. Orders are shoot to kill or Shroud to seal. Watch your backs out there, over.“"],
  listen:[
   {t:"First Encounters (Erste Begegnungen)",pre:"",items:[
    "**Murder Cover Up:** Während die Crew einen Rift untersucht, der als Serienmörder wütet, bemerkt sie, dass Beweise verschwinden, während Zeugen kritische Details vergessen und sogar ihre Aussagen zurücknehmen. Es gibt vage Berichte über Regierungsagenten, die die Nachbarschaft besucht haben, doch wenn die Crew ihnen folgt, wird sie womöglich selbst obliviated.",
    "**Fight Fire With Fire:** Ein Crewmitglied wird von einer zwielichtigen Regierungsbehörde angesprochen, die von ihren Kräften zu wissen scheint, und erhält ein Jobangebot, bei dem ihr besonderes Fähigkeitenprofil gebraucht wird. Sobald der Job erledigt ist, versucht der Agent, ihre Erinnerung auszulöschen – oder Schlimmeres.",
    "**I Spy:** Jemand aus dem Umfeld der SCs, vielleicht ein Mitglied der Nebenfiguren, ist in Wahrheit ein Gatekeeper, der sie überwacht. Als die Crew bemerkt, dass diese Person sie ausspioniert, und tiefer gräbt, entpuppt sie sich als jemand ganz anderes, als sie dachten."]},
   {t:"The Crew as Targets (Die Crew als Zielscheibe)",pre:"",items:[
    "**Destabilizing Elements:** Bei einem Zusammenstoß mit anderen Rifts oder nachdem jemand Stops. Holding. Back., destabilisieren die von der Crew entfesselten Kräfte die Integrität des Mist in der Gegend. Noch während sie sich sammeln, werden die SCs von einer Gatekeeper-Task-Force heimgesucht, die darauf aus ist, sie für immer zu versiegeln. Können sie mit intakter Erinnerung entkommen?",
    "**Clamped:** Eine neue Gatekeeper-Initiative will Rift-Kräfte mit speziellen Wards dämpfen, statt den Rift zu versiegeln. Alle den Gatekeepern bekannten Rifts werden nachts von Gatekeeper-Infiltratoren überfallen und mit einem entkräftenden Ward in Form eines nicht entfernbaren Rings, Ohrrings, Armbands oder einer Halskette versehen. Die Crew muss nun einen Weg finden, ihre Kräfte wiederherzustellen, denn mit jeder Minute verliert sie mehr den Kontakt zu ihrem Mythos.",
    "**Day In The Life:** An einem seltsam dunstigen, hellen Tag versuchen zufällige Personen im Leben der SCs, ihnen Informationen über die Crew und ihre Mitglieder sowie über alle anderen Rifts, denen sie früher begegnet sind, zu entlocken. Die gewitzten SCs begreifen schließlich, dass sie ausgekundschaftet werden, doch als ihre Mythos-Kräfte versagen und die Umgebung selbst gegen sie arbeitet, entdecken sie, dass sie in einer versteckten Gatekeeper-Einrichtung verhört wurden."]},
   {t:"Uncovering Inner Workings (Das Innenleben aufdecken)",pre:"",items:[
    "**Burst Seam:** Die Crew ist am Ort eines großen Risses im Mist anwesend, den kurz darauf ein albtraumhafter, vielarmiger Mythos nutzt, um in die Stadt einzudringen. Der Riss wurde durch den Fehler eines unerfahrenen Mist Technician verursacht, der sein Mist Beacon in den Rift fallen ließ und nun zusammen mit unschuldigen Passanten im Getümmel steckt. Die Kavallerie der Gatekeeper kann Ground Zero nicht erreichen, solange das Mist Beacon nicht aktiviert ist; so müssen die Crew und der Techniker gemeinsam in die Enclave des Monsters vordringen, was der Crew eine goldene Gelegenheit bietet, zu erfahren, wie der Mist funktioniert.",
    "**The Informant:** Ein abtrünniger Agent bietet der Crew an, Gatekeeper-Geheimnisse zu verkaufen, wenn sie verspricht, sie so einzusetzen, wie er es vorgibt. Seine Informationen stimmen und weisen die Crew auf mehrere Gatekeeper-Feldoperationen hin, doch die Wünsche des Informanten nehmen einen düsteren Zug an, etwa die Beseitigung eines bestimmten Feldagenten. Will dieser geheimnisvolle Kontakt den Rifts helfen, sich Rivalen in seiner Abteilung vom Hals schaffen oder der Crew eine Falle stellen?",
    "**Field Trippin’:** Ein unvorsichtiger Fehler eines Agenten oder eine unerwartete Mythos-Manifestation erlaubt es der Crew, ein kleines Gatekeeper-Feldteam zu überwältigen und dessen Platz einzunehmen. Für ein paar kurze Stunden, solange sie die Tarnung aufrechterhalten können, kann die verkleidete Crew so tief hinter die Kulissen des Gatekeepings in der Stadt vordringen, wie sie sich traut (und wie das Clearance Level ihrer Persona es erlaubt). Werden sie wissen, wann sie sich zurückziehen müssen, oder werden sie unvorbereitet im Herzen des Deep Mist erwischt, nur um am nächsten Tag ohne jede Erinnerung daran aufzuwachen?"]},
   {t:"Exposing the Gatekeepers (Die Gatekeeper entlarven)",pre:"",items:[
    "**The DeMistifier:** Nachdem er die Magie und Technik der Gatekeeper erforscht hat, entwickelt ein Rift-Wissenschaftler ein Gerät, das potenziell das Shrouding stören könnte. Um es zu testen und die Gatekeeper bloßzustellen, bittet er die Crew, ihre Kräfte in der Öffentlichkeit einzusetzen und eine Sensation auszulösen. Anfangs funktioniert das Gerät, und Hunderte von Sleepers scheinen den Legendary wahrzunehmen; doch als das volle Gewicht der Gatekeeper auf den Plan der Crew niederkracht und alles aus der Existenz Weaving lässt, beginnen die SCs zu verstehen, womit sie es zu tun haben.",
    "**Good Night, Citizens:** Die Crew erhält Beweise für ein Gatekeeper-F&E-Projekt, das ein Sleep verstärkendes Mittel in Trinkwasser, Luft oder Massenmedien einbringen will – um dauerhaft Rift-Erwachen zu verhindern und den Bürgern zugleich noch mehr das Gefühl von Sinn zu rauben. Während sie hektisch nach einem Gegenmittel oder einer Möglichkeit suchen, diese üble neue Erfindung zu kontern, wird die Crew von Gatekeeper Seals gejagt und immer wieder in Sackgassen Weaved – als Teil des verzweifelten Versuchs der Gatekeeper, die Beweise nicht an die Öffentlichkeit gelangen zu lassen.",
    "**The Great Minds Heist:** Eine charismatische Rift-Politikerin kündigt an, mit den Gatekeepern an die Öffentlichkeit zu gehen und sie als nicht sanktionierte Behörde zu enttarnen, die in der Stadt operiert. Dazu sucht sie Rückendeckung und Schutz bei mächtigen Rifts wie der Crew. In den Tagen vor der Pressekonferenz muss die Crew alles tun, um die Gatekeeper daran zu hindern, ihre Anführerin zu obliviaten, zu ermorden oder ihre Worte aus den Zeitungen zu Weaven. Dafür muss die Crew in Gatekeeper-Einrichtungen eindringen und deren Operation sabotieren.",
    ]},
   {t:"Fighting Back the Mist (Den Mist zurückdrängen)",pre:"",items:[
    "**Attack On The Water Tower:** Die Crew erkennt den Wasserturm des Viertels als dessen wichtigsten Mist erzeugenden Turm. Sie plant, dieses Gerät zu Fall zu bringen und die Bevölkerung vor seinem Einfluss zu befreien, doch dieses uneinnehmbare Ziel wird Tag und Nacht von einem Team Gatekeeper Seals bewacht. Die Crew muss wählen zwischen der Anwerbung eines Rift-Teams, das die Gatekeeper überwältigen könnte, und einem eleganteren Einbruch – oder vielleicht einer Kombination aus beidem.",
    "**Rift Police:** Ein hochrangiger Pragmatist-Gatekeeper-Beamter bietet der Crew einen Waffenstillstand an: Wenn Rifts sich selbst regulieren könnten, ließe sich die Intensität des Mist verringern. Der Beamte will, dass die Crew die neue Rift+Gatekeeper-Behörde anführt, die diese Zusammenarbeit in einem kontrollierten, sorgfältig ausgewählten Viertel testen soll. Wenn das Experiment gelingt, wäre das der Beginn einer neuen Ära in den Rift-Gatekeeper-Beziehungen?",
    "**The Backdoor:** Durch mystische Forschung oder einen kühnen Einbruch erlangt die Crew eine Methode, Rifts ein Clearance Level im Mist zu verleihen, was ihre Kräfte stark verstärkt und sie vom ständigen Kampf gegen Ablenkung befreit. Immer mehr Rifts bekommen Wind davon und versuchen, das Geheimnis für sich zu sichern, wodurch unkontrollierte Kräfte auf die Stadt losgelassen werden und der Crew das Leben zur (im übertragenen oder wörtlichen Sinn) Hölle machen. Wird die Crew ihr kostbares Wissen den Gatekeepern übergeben und ihre Privilegien aufgeben, um eine sicherere Stadt für ihre Mitbürger zu gewährleisten?"]}
  ],
  dangers:[] },

 { id:"gk-adv-dmo", name:"Shrouding: Distract, Mask, Obliviate", teaser:"Gatekeeper-Fähigkeiten im Spiel: die DMO-Taktik", p:268,
  text:[
   "## Gatekeeper Abilities in Play",
   "## Shrouding: Distract, Mask, Obliviate",
   "Wenn die SCs im Begriff sind, etwas zu bezeugen, das die Gatekeeper nicht sehen lassen wollen, sei es ein wichtiges legendäres Ereignis oder Gatekeeper-Aktivität, werden sie der Standardtaktik DMO unterzogen: Distract, Mask, Obliviate.",
   "## Distraction",
   "Distraction sollte überwiegend erzählerisch gespielt werden, indem man die Identities der SCs nutzt, um sie von der Situation wegzulocken, die der Mist oder die Gatekeeper verhüllen. Nutze den Soft Move Complicate Things, um die Ablenkung einzuführen. Je nach Dringlichkeit des Mist kannst du diesen Soft Move als Intrusion einsetzen oder ihn sogar zum Hard Move Complicate Things, Bigtime oder Force Them to Choose hochstufen. Die Ablenkung kann sein:",
   "• Ein Gedanke, ein Gefühl oder ein Wunsch, der den SC von der Szene wegzieht, besonders einer, der mit dem Defining Event-, Personality- oder Training-Theme des SC mitschwingt",
   "• Ein profanes, aber dramatisches und störendes Ereignis, etwa ein geplatztes Rohr, ein Autounfall oder eine Schlägerei auf der Straße",
   "• Ein Anruf eines NSC, idealerweise von jemandem, der mit der Identity des SC zu tun hat, etwa ein wütender Chef (Routine), ein enttäuschter geliebter Mensch (Defining Relationship), jemand in Not oder mit Informationen für den SC (Mission) oder jemand, der dem SC gleich seinen Besitz wegnehmen wird (Possessions)",
   "Wenn du der Ablenkung einen Status geben möchtest, kannst du Status wie distracted-1, scattered-2 oder can’t-focus-3 verwenden. Distraction-Status sind in der Regel vorübergehend und erzählerisch kurzlebig; SCs können Face Danger mit Tags in Bezug auf Fokus, Motivation und Disziplin einsetzen.",
   "## Masking",
   "Masking sollte vollständig erzählerisch gespielt werden, indem man beschreibt, was die SCs wahrnehmen können; vermeide Status, da sie die Anwesenheit eines Maskings verraten und damit den Zweck vereiteln. Sofern die SCs nicht Investigate einsetzen, nimm an, dass sie nur den Shrouding-Effekt wahrnehmen, der die Person, den Gegenstand, den Ort oder das Ereignis maskiert (außer Gatekeeper-SCs, siehe unten). Wenn die SCs Investigate einsetzen, gib Antworten basierend auf ihrer Methode: Wenn die Methode das Gatekeeper-Shrouding nicht durchdringen kann, antworte basierend darauf, was für den SC sichtbar ist, ohne zu enthüllen, was hinter dem Masking liegt.",
   "• Die meisten profanen Fähigkeiten können Shrouding-Effekte nicht durchschauen, schon gar nicht, wenn sie von einem Sleeper eingesetzt werden. Einige scharfsinnige Rift-Detektive können womöglich ableiten, dass etwas nicht so ist, wie es scheint, auch wenn sie das Masking nicht durchdringen können.",
   "• Mythos-Fähigkeiten sowie Looking Beyond the Mist und spezialisierte Anti-Gatekeeper-Fähigkeiten können Shrouding durch Investigate und die richtigen Fragen aufdecken.",
   "• Gatekeeper-Charaktere durchschauen Masking stets entsprechend ihrem Clearance Level. Nach deinem Ermessen kann dies durch die Kompartmentalisierung der Einheiten begrenzt sein, d. h. ein Agent durchschaut womöglich das Masking einer Einheit nicht, deren Arbeit er nicht kennt, selbst wenn sein Clearance Level es erlauben würde.",
   "Ein Shrouder kann als Soft Move sein Aussehen verändern und sich selbst oder einer Situation einen inconspicuous- oder nothing-to-see-here-Status geben, was es schwer macht, ihn per Investigate aufzuspüren oder zu identifizieren."],
  listen:[
   {t:"Optionale Regel: Fight to Stay Awake",pre:"Da die Mist-basierten Kräfte der Gatekeeper darauf ausgelegt sind, Mythos-Kräfte zu unterdrücken, bietet das Erwachtsein an sich keinen besonderen Schutz gegen sie. Ein SC kann Face Danger gegen Distraction- und Obliviating-Status nur mit bestimmten Tags einsetzen, entweder Mythos oder Logos, die dem Charakter helfen würden, dem Mist zu widerstehen, etwa eidetic memory oder resistance to forgetting curses.\n\nDiese optionale Regel ändert diese Annahme und erlaubt es einem Rift, dem Mist allein aufgrund seines erwachten Zustands zu widerstehen. Ähnlich wie die Investigate-Variante Look Beyond the Mist erhält auch der Move Face Danger nun eine Mythos-gestützte Variante, Fight to Stay Awake. Wenn der SC von einem Mist-bezogenen Status betroffen ist, kann er Fight to Stay Awake einsetzen und die Anzahl seiner Mythos-Themes ohne Tags oder Status als seine Power verwenden (roll+Mythos): 1 für Touched, 2 für Borderliners und 3 für Legendaries und Avatars. Anwendung und Ergebnis dieses Moves sind identisch mit Face Danger.\n\nBeachte, dass diese Version des Moves den Mist und die Gatekeeper für Rift-Hauptcharaktere deutlich weniger furchteinflößend macht. Als Mittelweg, der jedem Rift weiterhin eine Chance gibt, Mist-Kräften zu entgehen, kannst du festlegen, dass ein Rift stets Fight to Stay Awake einsetzen darf, selbst wenn er keine relevanten Tags hat, dass er dabei aber immer mit einer Power von null statt roll+Mythos würfelt.",items:[]}
  ],
  dangers:[] },

 { id:"gk-adv-oblivion", name:"Obliviating and Memory Loss", teaser:"Memory-Loss-Status, Heilung, Shrouding & Mending, Depowered Rifts, Sealing, Perching", p:269,
  text:[
   "## Obliviating and Memory Loss",
   "Obliviating wird als letztes Mittel eingesetzt, wenn Distraction und Masking versagt haben. Wenn Rift- und Sleeper-Charaktere (und in manchen Fällen sogar Gatekeeper-Charaktere) obliviated werden, erhalten sie Memory-Loss-Status wie vague-details-1, memory-lapse-2, memory-loss-3, amnesia-4, oblivious-5. Wie üblich können SCs gegen Memory-Loss-Status nicht Face Danger einsetzen, es sei denn, sie haben spezifische Tags, die es ihnen erlauben.",
   "Memory-Loss-Status sind zwingend, und ein Spieler, dessen Charakter obliviated wird, sollte ihn entsprechend ausspielen und alle Informationen, die er besitzt und die der Charakter vergessen hat, beiseitelegen. Ein Charakter mit Gedächtnisverlust handelt weniger wahrscheinlich auf Grundlage der teilweise obliviated Erinnerungen, wegen Verwirrung und mangelnder Klarheit; jede solche Handlung behandelt den Status als impeding. Ist der Charakter oblivious-5, erinnert er sich an nichts von den obliviated Ereignissen und kann keine Handlungen vornehmen, die auf den verlorenen Erinnerungen basieren oder dadurch motiviert sind. Dies gilt auch für Investigate-Versuche auf Grundlage vergessenen Wissens.",
   "Obliviation betrifft in der Regel nicht das Langzeitgedächtnis; wird sie jedoch aggressiv oder wiederholt eingesetzt, kann die SL Power-Tags burnen, um den vorübergehenden Verlust von Wissen oder sogar Gefühlen darzustellen. Obliviation-Status sollten bei Tier 5 gedeckelt sein und nicht zu Tier 6 stapeln, es sei denn, es wird ein spezialisierter Versuch unternommen, den Charakter mit dauerhaftem Gedächtnisverlust, Identitätsverlust, Verlust von Wissen oder Fähigkeiten usw. zu treffen.",
   "## Recovering from Obliviation",
   "Obliviation-Status verblassen nicht mit der Zeit, und Downtime zu verbringen verringert solche Status nicht, es sei denn, der betroffene Charakter wird von jemandem behandelt, der Shrouding-Effekte entfernen kann.",
   "Wenn jemand, der sich an die Ereignisse erinnert, sie dem obliviated Charakter erzählt, ist das so gut wie Hörensagen; der Charakter glaubt vielleicht, dass ihm Erinnerungen fehlen, oder auch nicht, selbst wenn er der erzählenden Person vertraut. Den Charakter zu überzeugen, dass die Ereignisse stattgefunden haben, oder es ihm zu beweisen (z. B. mit Fotos), stellt seine Erinnerungen nicht automatisch wieder her, auch wenn du dies mit einem Status oder Story-Tag darstellen kannst, der den Obliviation-Status ausgleicht.",
   "Jede Handlung, die Erinnerungen eines Charakters durch Entfernen des Status wiederherstellen will, behandelt den Status wegen der mächtigen Wirkung des Mist als impeding. Nur Fähigkeiten, die gezielt die Wirkung des Mist aufheben, oder ein Versuch unter idealen Bedingungen und mit idealen Werkzeugen (z. B. einem geeigneten Gatekeeper-Labor) können diesen Effekt ignorieren.",
   "## Shrouding & Mending Mythos Powers",
   "Shrouding kann eingesetzt werden, um aktive Mythos-Kräfte aufzulösen und ihre Manifestation vorübergehend zu blockieren. Shrouding-Hard-Moves und Danger-Moves können folgende Effekte haben:",
   "• Mythos-Power-Tags und Story-Tags burnen",
   "• Status verringern, die Mythos-Kräfte darstellen, etwa blessed-3",
   "• Bei Dangers ohne solche Tags oder Status einen Shrouded-Status verhängen, der erzählerisch nach wenigen Stunden abläuft",
   "Rift-SCs können verbrannte Story-Tags und Status mit Change the Game neu erschaffen. Verbrannte Power-Tags können sie normal in der Downtime wiederherstellen. Dangers erholen sich innerhalb weniger Stunden bis zu einem Tag von Shrouding-Status. Du kannst der Einfachheit halber Shrouded-Status auch bei SCs einsetzen; dann können diese in der Downtime durch Zeit für die Erholung wiederhergestellt werden.",
   "Mending kann eingesetzt werden, um einen Rift zu „versiegeln“ und seine Kräfte für längere Zeit zu begrenzen. Mending-Hard-Moves und Danger-Moves verhängen einen sealed-Status, dessen Erholung erzählerisch Wochen, Monate oder länger dauert. Ein teilweises Siegel erstickt die Mythos-Kräfte eines Rifts, ein Tier-5-Siegel verhindert, dass er sie überhaupt aktivieren kann. Der aktive Versuch, den Status zu entfernen, sei es mit Change the Game oder während einer Montage (Downtime), erfordert dafür arkanes oder mystisches Wissen, Gatekeepers' Abilities oder Gatekeeper-Technik.",
   "## Depowered Rifts",
   "Ein SC-Rift gilt als vollständig depowered, wenn alle seine Mythos-Power-Tags verbrannt sind (kurzfristig) oder wenn er sealed-5 erleidet (langfristig). Ein NSC-Rift ist depowered, wenn er Shrouded-5 (kurzfristig) oder sealed-5 (langfristig) erleidet. Einige Effekte des Mist, wie die Obliviating-Effekte von Ambient Mist (S. 212), betreffen nur vollständig depowered Rifts.",
   "## Sealing Rifts",
   "Mächtiges Mending kann einem Rift potenziell einen sealed-6-Status zufügen und ihn damit dauerhaft in einen Sleeper verwandeln, wenn er ein Danger ist (sofern nicht anders vermerkt). Ein SC, der sealed-6 erleidet, ersetzt ein Mythos-Theme und verringert den Status dann auf sealed-5; erreicht er erneut sealed-6, ersetzt er sein nächstes Mythos-Theme, und so weiter, bis er zum Sleeper wird. Ein versiegelter SC darf am Ende seiner Sleep-Phase nicht wählen, wieder zu erwachen, solange sein Siegel nicht entfernt wurde.",
   "## Perching",
   "Da die Reichweite der Percher allgegenwärtig ist, kannst du jedes Mal, wenn ein Spieler bei einem Investigate-Move eine 7-9 würfelt und du als SL eine Frage stellen möchtest, davon ausgehen, dass die Gatekeeper die Antwort kennen."],
  dangers:[] },

 { id:"gk-adv-agentmoves", name:"Agent Danger Moves", teaser:"Basis-Moves aller Agenten-Dangers, Gruppen als Einheit", p:270,
  text:[
   "## Agent Danger Moves",
   "## Basic Agent Danger Moves",
   "Alle Agenten-Dangers können die folgenden Moves haben, je nach Bedarf der Erzählung; sie stehen für ihre Grundausbildung und Ausrüstung:",
   "## Agent Danger Profiles: Acting as a Unit",
   "Alle untenstehenden Agent-Danger-Profile stellen einen einzelnen Agenten dar. Um eine Einheit oder einen Trupp desselben Agententyps darzustellen, etwa eine kleine Security Detail oder ein Stockwerk voller Desk Jockeys, gib ihr einen Größenfaktor (siehe Collectives, SL-Toolkit, S. 126)."],
  listen:[
   {t:"Basic Agent Danger Moves",pre:"",items:[
    "**Shrouding Focus:** Der Agent ignoriert 1, 2 oder 3 Tiers von Ambient-Thin-Mist-Status (je nach Clearance Level und Qualität des Fokus). Verliert der Agent seinen Shrouding Focus oder wird er beschädigt, verringere die Wirkung seines Shrouding um 1.",
    "**Explosive Shrouding Ward:** Einmal pro Szene, als Intrusion, erleidet jeder in der Umgebung der Gatekeeper oblivious-5. Nach ihrer Wahl können die Gatekeeper die Szene verlassen.",
    "**Creepy Feeling:** Wann immer du versuchst, per Investigate mehr über [die maskierte Persona des Gatekeepers] herauszufinden, hast du das seltsame Gefühl, dass sie mysterious-2, impenetrable-2 oder boring-2 ist. Dieser Status kann Tier 4 nicht überschreiten.",
    "**Fedora Absentia:** Wenn die Fedora Absentia eines Agenten unter Belastung steht, gib ihr ein watched-by-many:4-Spektrum (erhöhe dieses Maximum für hochrangige Agenten). Wenn das Spektrum voll ist, versagt die Fedora Absentia und enthüllt das Gesicht des Agenten. Um diesem Spektrum Status hinzuzufügen, muss ein SC viele einzelne Blicke bewusster Wesen (meist Menschen) mobilisieren, herbeirufen oder erschaffen können.",
    "**Unbemerkt die Szene verlassen,** indem ein Moment der Ablenkung oder eine plötzliche Sichtbehinderung wie Nebel, Dampf, eine stehende U-Bahn usw. ausgenutzt wird (Deny Them Something They Want)"]},
   {t:"Bodyguards",pre:"Ein mittel- oder hochrangiger Gatekeeper-Agent in Begleitung einer persönlichen Sicherheitseinheit sollte außerdem den Move Bodyguards haben:",items:[
    "**Bodyguards:** Wenn der Gatekeeper einen Status erleidet, vor dem ihre Bodyguards sie schützen können, erleiden stattdessen die Bodyguards den Status."]},
   {t:"Beispiele für Einheiten",pre:"",items:[
    "Die Festnahme eines kleinen kriminellen Rifts könnte von einem Investigator mit einer kleinen (Größenfaktor 1) Security Detail ausgeführt werden",
    "Ein PAC Public Response Team (PAC Veilers, Größenfaktor 3) könnte eingesetzt werden, um eine Graywashing-Barriere um einen Platz zu errichten, auf dem ein dunkles Ritual stattfindet, und die Erinnerungen der Zeugen zu löschen",
    "Ein Maintenance Enclave-Mending Team aus einem Dutzend Mist Technicians (Größenfaktor 2) könnte entsandt werden, um einen von einem anderen Team identifizierten Thin Place zu schließen",
    "Ein ganzes Stockwerk von Perchers (Größenfaktor 4) könnte die ganze Stadt nach einem einzigen hochrangigen Ziel durchkämmen"]}
  ],
  dangers:[] },

 { id:"gk-adv-deskjockey", name:"Desk Jockey", teaser:"Agenten-Danger (2): Analyst, der Ziele über Zeit studiert", p:270,
  text:[
   "Ein Desk Jockey, der einem Ziel zugewiesen ist, studiert es über längere Zeit und in der Tiefe. Er identifiziert persönliche Beziehungen, kartiert Motivationen und erstellt ein taktisches Risikoprofil, wodurch er die Arbeit anderer Gatekeeper-Einheiten verstärken und manchmal sogar anordnen kann."],
  dangers:[
   { name:"Desk Jockey", rating:2, limits:"HURT OR SUBDUE 1 / THROW OFF 3",
     moves:[
      ["Working Overtime","Am Ende jeder Downtime-Phase kann die SL der Crew predictable-1 geben oder einem SC eine Frage stellen, wie bei der 7-9-Option von Investigate."],
      ["Subject of Study","Wenn du Investigate einsetzt und bei einer 7-9 die SL dir eine Gegenfrage stellen will, darf die SL zwei Fragen stellen."]],
     gm:[
      "Überwachungs- und Aufklärungsressourcen auf das Ziel umleiten (predictable-1)",
      "Gatekeeper-Teams anhand der von ihr gesammelten Informationen einsetzen (einen neuen Gatekeeper-Danger erschaffen)",
      "Gatekeeper-Teams wertvolle Informationen über ein Ziel liefern, etwa Fähigkeiten, Schwächen, Grenzen, Verhandlungshebel (wie Mysteries oder Identities) oder Taktiken (bis zu zwei Tags burnen, einen Tier-2-Vorteilsstatus geben oder Complicate Things, Bigtime)",
      "In einem Konflikt Deckung nehmen (cover-2) oder eine Shrouding-Seitenwaffe abfeuern (grazed-1 und einen Mythos-Tag burnen)",
      "Dem Ziel das Gefühl geben, dass seine Handlungen aufgezeichnet und analysiert werden"]}
  ] },

 { id:"gk-adv-percher", name:"Disembodied Intel Percher", teaser:"Agenten-Danger (3): körperloser Beobachter", p:271,
  text:[
   "Percher können nur mit Mythos-Kräften entdeckt werden, die körperloses Bewusstsein aufspüren können, etwa Geister oder Gespenster. Andernfalls berichtet der Percher einfach über sein Ziel, ohne dass dieses es weiß, und informiert damit die Handlungen anderer Gatekeeper. Sobald ein Percher entdeckt wurde, kannst du dieses Danger-Profil verwenden, um ihn als Gegner darzustellen.",
   "Das Ziel eines Perchers kann sich weder vor dem Percher verstecken noch ihn mit falschem Schein täuschen, denn Percher kennen die eigentliche Essenz dessen, was sie Perchen. Der surveilled-Status steht für alles, was der Percher weiß und anderen Gatekeepern meldet. Nur die Fähigkeit, die eigene Essenz zu verändern, kann diesen Status umgehen."],
  dangers:[
   { name:"Disembodied Intel Percher", rating:3, limits:"HURT OR SUBDUE – / SENSORY OVERLOAD 3 / BANISH 3",
     moves:[
      ["Under Surveillance","Wenn der Disembodied Intel Percher erstmals entdeckt wird, gib seinem aktuellen Ziel surveilled-5. Der Percher kann durch die Sinne des Ziels wahrnehmen und kennt dessen körperliche und geistige Verfassung sowie seinen Aufenthaltsort."],
      ["Cognitive Backlash","Wenn das Ziel eines Disembodied Intel Perchers einen schädlichen körperlichen oder emotionalen Status erleidet, gib dem Percher einen sensory-overload-Status desselben Tiers."],
      ["Disembodied","Wenn du per Investigate einen Disembodied Intel Percher aufspüren willst, der keinen menschlichen Wirt reitet, gib dem Percher hidden-3."],
      ["Reinforced Mental Techniques","Wenn der Disembodied Intel Percher einen Status psychischer oder sozialer Natur erleidet, verringere dessen Tier um 2."]],
     gm:[
      "Gatekeeper-Teams anhand der von ihr gesammelten Informationen einsetzen (einen neuen Gatekeeper-Danger erschaffen)",
      "Sich auf ein neues Ziel aufschalten (surveilled-3; ist nur ein Percher anwesend, muss sie ihr vorheriges Ziel verlassen und dessen surveilled-Status entfernen)",
      "Dem Ziel ein seltsames, unheimliches Gefühl geben, beobachtet zu werden"]}
  ] },

 { id:"gk-adv-fieldtech", name:"Field Technician", teaser:"Agenten-Danger (2): Mist-Techniker im Feld", p:271,
  text:[],
  dangers:[
   { name:"Field Technician", rating:2, limits:"HURT OR SUBDUE 2 / SCARE 2",
     moves:[],
     gm:[
      "Ihren Shrouding Focus in der Luft schwenken und den Ambient Mist reparieren (thick-Mist-1)",
      "Ein tragbares Mist Beacon einsetzen (Danger erschaffen: Mist Beacon, S. 277)",
      "Die Mythos-Kräfte einer Enclave shrouden und sie auf das Versiegeln vorbereiten (bis zu zwei Mythos-Tags burnen)",
      "Einen depowered Rift mending und ein langfristiges Siegel anbringen (sealed-2)",
      "Ein defektes Stück Mist-Technik wieder instand setzen (einen Tag neu erschaffen)",
      "Jemanden schlagen (ouch-1) oder mit einem Shrouding-Taser schocken (disoriented-1 und einen Mythos-Tag burnen)",
      "Gewichtig in ihre „Newspaper“ blicken, während sie sie vor eine Mist-Anomalie hält",
      "An einem Wasserturm oder Kabelkasten herumbasteln, aber nicht wie ein Wasser- oder Kabeltechniker",
      "Davor warnen, dass der Mist an einem Ort oder bei einer Person rasch zerreißt"]}
  ] }
]);
