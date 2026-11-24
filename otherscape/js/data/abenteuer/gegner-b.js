OS_ADV.push({ id:"gegner-b", kategorie:"gegner", titel:"Yōkai Database II", sub:"Yōkai der Straße, Kitsune, Onryō und die nicht-übernatürlichen Gegner Tokyos (Wandering Tank bis Venerated Sensei)",
  buch:"Tokyo", seiten:"S. 113–130", sektionen:[

{ id:"wanyudo", titel:"Wanyūdō (Maschinen-Yōkai)", bloecke:[
  {t:"challenge", name:"Wanyūdō Wandering Tank", rating:"★★★★★", typ:"Challenge (Yōkai-Maschine)",
   beschr:"Ein menschengroßer Panzer, der auf einer perfekten Kugel balanciert und ein riesiges Menschengesicht trägt. Er jagt gezielt Söldner durch die Straßen Tokyos und geht nie die Munition oder der Strom aus; er ist ein Source des Wanyūdō, des brennenden Rad-Mönchs.",
   limits:[{n:"Wreck",v:5},{n:"Banish",v:4},{n:"Escape",v:3}],
   tags:["great maneuverability","heavy armor","Status: short-temper-1","Status: engulfed-in-flames-2"],
   specials:[{n:"Flaming Wheel Monk",x:"Wer den Tank berührt, solange er engulfed-in-flames ist, erhält einen burned-Status derselben Stufe."}],
   threats:[
    {n:"Motoren aufheulen lassen, Brandgeruch in der Luft",x:"Mit voller Fahrt jemanden überrollen (broken-bones-4 und prone-2). Durch eine Barriere oder aus einer Eindämmung ausbrechen (zwei Stufen von einem Binding-Status entfernen oder einen Tag für ein physisches Hindernis verbrennen)."},
    {n:"Waffen ausrichten und ein Ziel anvisieren",x:"Alle Rohre auf ein Ziel (perforated-5) oder eine Salve auf ein Gebiet (mehrere Ziele wählen perforated-3 oder suppressed-3)."},
    {n:"Beschimpfungen und Spott",x:"Jemanden wiederholt erniedrigen (humiliated-2 oder taunted-2). Behaupten, jemand schaue in die falsche Richtung (distracted-2; wird er nicht vollständig mitigiert, taucht der Tank dort auf, wohin die SC blickt, und erhält superior-position-2). In größere Feuerwut verfallen (engulfed-in-flames-3). Mit einem Biss zu nahe Stehende verstümmeln (bleeding-to-death-5 oder missing-limb-6)."}
   ],
   extra:[{k:"Scale",x:"1"}] }
]},

{ id:"sozial", titel:"Social Phenomena Yōkai", bloecke:[
  {t:"hinweis", x:"Yōkai, die aus kollektiven Gefühlen, Gerüchten und Subkulturen entstehen."},
  {t:"challenge", name:"Aka Manto, Social Media Slasher", rating:"★★", typ:"Challenge (Yōkai im Entstehen)",
   beschr:"Eine maskierte Gestalt im roten Umhang, die allein auf öffentlichen Toiletten auftaucht und Toilettenpapier in Farben anbietet; wer annimmt, wählt seine Todesart. Sein Wesen wird gerade vom Gerüchtestrom im Cyberspace geformt (aktuell: halbheroischer Putzteufel gegen die Elite), wogegen es sich wehrt. Man kann es loswerden, indem man fest genug glaubt, dass es nicht da ist. Faustregel der Legende: nie seine Fragen beantworten, nie sein Angebot anerkennen.",
   limits:[{n:"Banished",v:4},{n:"Disbelieved",v:3}],
   tags:["bathroom stalker","hates the elite","Status: resisting-manipulation-2"],
   threats:[
    {n:"Eine SC allein in einer öffentlichen Toilette fühlt sich beobachtet",x:"Die SC bemerkt, dass das Papier alle ist (Escalate the Situation)."},
    {n:"Hinter der Kabinenwand fragen, ob rotes oder blaues Papier gewünscht ist",x:"Bei Rot: auftauchen und brutal zerfetzen (slashed-4). Bei Blau: emotionslos würgen (suffocating-4). Stumme Opfer zur Antwort drängen (pressed-2 und panicked-2)."},
    {n:"Mit hohler Stimme schnell rückwärts schweben",x:"In einer Öffnung verschwinden (Deny Them Something They Want)."},
    {n:"Der Gerüchtestrom im Cyberspace liefert nach einer Weile eine neue Theorie",x:"Aka Manto nimmt die Gerüchte auf und baut seine Legende aus (gain a story tag)."}
   ],
   extra:[{k:"Hurt or Subdue",x:"Kein Limit (–): Aka Manto lässt sich nicht verletzen oder überwältigen."},{k:"Spielhinweis",x:"resisting-manipulation gilt gegen jeden SC-Versuch, sein Wesen durch neue Gerüchte zu verändern."}] },

  {t:"challenge", name:"Bokuba Goblins", rating:"★★★", typ:"Challenge (Gruppe / Subkultur)",
   beschr:"Antikonsum-Punks, die Megacorps stürzen wollen; ihre Instrumente aus Müll und Altelektronik sind Sources von Biwa-bokuboku (Tsukumogami). Sie versuchen Konzern-Verdrossene zu bekehren, im Zweifel durch Entführung und „Umerziehung“. Meist treten sie als Gruppe mehrerer Mitglieder auf.",
   limits:[{n:"Hurt or Subdue",v:3},{n:"Threaten",v:4},{n:"Riled Up",v:3}],
   tags:["musical talent","punk attitude","Status: loud-3"],
   specials:[{n:"Riled Up (Limit-Effekt)",x:"Zuschauer stimmen ein: entweder Scale um 1 erhöhen oder Present a New Challenge: Riot (Metro S. 311)."}],
   threats:[
    {n:"Bei Musikveranstaltungen auftauchen und Krach machen / bei anderen Orten laut Instrumente stimmen",x:"Reine Ankündigung, keine Konsequenz."},
    {n:"Waffe heben, letzte Warnung oder „Down with the system!“ rufen",x:"Hagel aus gestohlenen Militärwaffen (flesh-wound-2) oder hochwertiger Sprengstoff (injured-3 an eine Gruppe). Treten, schlagen, entwaffnen (bruised-2 und einen Tag verbrennen). Jemanden zum „Erziehen“ packen, Kabel der Tsukumogami-Geräte umwickeln die Glieder (bound-4)."},
    {n:"Herzzerreißende Songs über das Verlassenwerden vom System spielen und den Frieden stören",x:"Starke Gefühle bei allen Zuhörern (saddened-2, angered-2 oder riled-up-2)."},
    {n:"Den Rückzug ausrufen",x:"Zum Ausgang stürmen und alle bound-Gefangenen mitschleifen (Deny Them Something They Want)."},
    {n:"Reaktion auf Konzerntreue oder Firmen-Ausrüstung",x:"Sie werden aufgebracht (gain riled-up-1)."}
   ],
   extra:[{k:"Scale",x:"2 als typische Gruppe"}] },

  {t:"challenge", name:"MaraMatch", rating:"★★★", typ:"Challenge (App-Yōkai im Cyberspace)",
   beschr:"Eine Dating-App mit sechsarmigem „Liebesdämon“-Maskottchen, Manifestation des buddhistischen Dämons Mara. Ihr Source liegt im Quellcode in einer eigenen Cyberspace-Domain. Die meisten Matches sind erfunden und perfekt auf den Nutzer zugeschnitten; sie zielt auf Daten und Bankzugang und will VIP-Nutzer für immer in ihre Domain locken.",
   tags:["Status: obscured-data-2"],
   threats:[
    {n:"Ein KI-generiertes Foto nach dem Geschmack der SC senden",x:"Verlangen wecken, langsam wachsender Crush (infatuated-2)."},
    {n:"Eine fürsorgliche, aufmunternde oder flirtende Nachricht im passendsten Moment senden",x:"Siehe nächster Punkt."},
    {n:"Vor dem Schlafen „Woran denkst du gerade?“ schicken",x:"Die SC bleibt die ganze Nacht im Gespräch (exhausted-1 und infatuated-3)."},
    {n:"Eine SC mit infatuated-5 in die Cyberspace-Domain einladen",x:"Bei Zusage wird sie aufgenommen (lost-to-lust-6). Bei Absage endet es im Streit (infatuated wird zu heart-broken)."},
    {n:"Geld abbuchen oder Daten verkaufen",x:"Geld vom Konto (broke-3) oder Daten online verkaufen (doxxed-3 oder compromised-3)."}
   ],
   extra:[{k:"Limits",x:"Im Buch sind für MaraMatch keine Limits angegeben."},{k:"Infatuated",x:"Compelling Status: die SC reagiert wohlwollend auf ihr Match und dessen Vorschläge. Nutzt eine SC die App freiwillig, erhält sie ihn als Interjection (normal mitigierbar)."}] },

  {t:"challenge", name:"Yosuzume Kei Teens", rating:"★", typ:"Challenge (Gruppe / Jugendmode)",
   beschr:"Junge Leute im „Night Sparrow Style“ (verweinte Augen, schwarze Kleidung, Spatzenspange, AR-Flügel), die vor Unglücken am Ort auftauchen. Ob sie Ursache oder nur Vorboten sind, bleibt offen; sie sind meist wegen des Katharsis-Gefühls dabei. Scale steht für ihre Zahl und kann den Umfang des Unglücks erhöhen.",
   limits:[{n:"Hurt or Subdue",v:1},{n:"Disperse",v:2},{n:"Misfortune Strikes",v:3}],
   tags:["Status: unflappable-1"],
   specials:[{n:"Misfortune Strikes (Limit-Effekt)",x:"Make the Future Bleaker oder Escalate the Situation: etwas oder jemand Wichtiges wird bei einem schrecklichen Unfall zerstört oder getötet."}],
   threats:[
    {n:"Die Szene still auf dem Gerät aufnehmen",x:"Das Video mit vielen Followern teilen (embarrassed-2 oder bad-rep-2)."},
    {n:"Dramatisch, aber leise über das Unglück weinen",x:"Kameras und optische Cyberware flackern und fallen aus (malfunctioning-2, Deny Them Something They Want oder beides). Mit durchdringenden Blicken einschüchtern (wary-1). Einfach zuschauen (gain manifesting-misfortune-1)."}
   ] }
]},

{ id:"underworld", titel:"Underworld Yōkai", bloecke:[
  {t:"challenge", name:"Stillwater Ronin", rating:"★★★", typ:"Challenge (besessene Söldnercrew)",
   beschr:"Eine Crew aus sieben angesehenen Söldnern, besessen von den Shichinin Misaki. Jeder Misaki will durch einen ehrenvollen Tod bei einem Job erlöst werden und übernimmt dann einen neuen Rekruten. Wird ein Ronin getötet oder exorziert (bzw. possessed entfernt), ist der Misaki nur vorübergehend gebannt und fährt nach dem nächsten Downtime in einen neuen Rekruten. Dauerhaft auflösen lässt sich die Crew nur, wenn alle sieben Misaki gleichzeitig exorziert werden. Außerhalb von Jobs meiden sie Gefahr (terrified-4 bei echter Lebensbedrohung des Wirts).",
   limits:[{n:"Hurt or Subdue",v:4},{n:"Exorcize",v:6}],
   tags:["flexible armor","top-of-the-line gear","Status: resolve-2"],
   threats:[
    {n:"Eine ehrenhafte SC ansprechen und rekrutieren wollen",x:"Bei Zusage fährt ein Misaki in die SC (possessed-6). Bei Ablehnung spricht sich herum, die SC sei unfähig oder schwach (bad-rep-2)."},
    {n:"Eine würdige Herausforderung fordern",x:"Ehre oder Selbstachtung bedrohen (goaded-2) oder die Drohung wahr machen (broken-bones-3 oder gunshot-wound-3)."},
    {n:"Ihre Spezialfertigkeit einsetzen (je nach Rolle)",x:"Face: manipulieren (charmed-3 oder distracted-3). Hacker: Technik oder Cyberware stören (zwei Tags für Technik verbrennen oder malfunctioning-3). Leader: kluges Manöver (tactical-advantage-2 für alle Ronin oder bis zu zwei Stufen negativer taktischer Statuses entfernen). Muscle: hart zuschlagen (concussed-4 oder restrained-3). Infiltrator: etwas stehlen (Tag eines Objekts verbrennen oder Deny Them Something They Want). Techie: Cyberware übertakten (supercharged-3 für einen Ronin) oder reparieren (eine Stufe eines schädlichen Statuses wie wreck oder malfunction entfernen). Weapons Specialist: schießen, Granate werfen oder neue Waffe ziehen (gun-shot-4, burned-3 an eine Gruppe oder gain smartgun, armor-piercing bullets, belt of grenades, rocket launcher usw.)."}
   ],
   extra:[{k:"Scale",x:"1 als Crew"}] },

  {t:"challenge", name:"Five Rings One-Night Castle", rating:"★★★", typ:"Challenge (Source-Festung)",
   beschr:"Ein Source der Legende von Sunomata: eine ganze Festung samt Kaserne, Fahrzeugen, Waffen und Security System (Metro S. 319), die in einen rituell vorbereiteten Metallkoffer passt. Die plötzlich auftauchende Militärbasis soll Feinde brechen oder als Stützpunkt Belagerungen überstehen. Schwäche: ein hölzerner Stützbalken (Lynchpin) in einer Kammer trägt das Mythos-Gewicht; wird er entfernt, packt sich die Burg selbst wieder ein.",
   limits:[{n:"Demolish",v:5},{n:"Find the Lynchpin",v:3}],
   tags:["frequent patrols","fully equipped and supplied","intimidating presence","stone fortifications"],
   specials:[{n:"Find the Lynchpin (Limit-Effekt)",x:"Die SC findet den Balken. Wird er entfernt (quick outcome), beginnt die Burg in sich zusammenzufallen und wirft alle hinaus."}],
   threats:[
    {n:"Ein Five Rings Officer öffnet den Koffer und baut die Basis auf",x:"Die Burg erhebt sich, beherrschend und uneinnehmbar (intimidated-3 an alle Nicht-Angehörigen)."},
    {n:"Truppen rufen sich zu, Funkverkehr steigt, Motoren starten",x:"Neue Kräfte rücken aus der Kaserne aus (Present a Five Rings Officer Challenge, Scale 1). Die Waffenkammer öffnet sich (gib der ganzen Garnison armed to the teeth)."},
    {n:"Eine Erklärung verlangt die Kapitulation aller Feinde, während die Truppen ausrücken",x:"Militärische Machtdemonstration (intimidated-3 an alle Feinde im Bezirk und superior-position-1 für verbündete Challenges). Gefangene nehmen (incarcerated-5)."}
   ],
   extra:[{k:"Scale",x:"4"}] }
]},

{ id:"kitsune", titel:"Kitsune", bloecke:[
  {t:"hinweis", x:"Kitsune haben ein bis vier Schweife, nutzen Feuer, Illusionen und Gestaltwandel und tarnen sich als Menschen (Betrüger, Diebe, Spione). Ohne ihr hoshi no tama (Schmuckstück oder Token, Sitz ihrer Kraft) können sie weder Feuer noch Illusionen erschaffen noch Essenz saugen. Sie bleiben Füchse und sind anfällig für Tofu und rote Bohnen. Mesmerized ist ein Compelling Status für ihre magisch verstärkte Überzeugungskraft, der es schwerer macht, ihren Bitten zu widerstehen."},
  {t:"challenge", name:"Kitsune", rating:"★★★", typ:"Challenge (Yōkai)",
   beschr:"Charmanter Fuchsgeist und Gestaltwandler, der Lebenskraft durch Berührung in sein hoshi no tama saugt und so aufsteigt.",
   limits:[{n:"Hurt or Subdue",v:4},{n:"Threaten",v:3},{n:"Banish",v:3},{n:"Ascend",v:5}],
   tags:["cunning","hoshi no tama","incredible agility","shapeshifter","Status: mysterious-2"],
   specials:[{n:"Ascend (Limit-Effekt)",x:"Der Kitsune wird zum Elder Kitsune."},{n:"Another Tail",x:"Nach jedem Downtime erhält der Kitsune ascending-1, wenn er seit dem letzten Downtime jemandem einen drained-Status gegeben hat."}],
   threats:[
    {n:"Eine SC bemerkt einen Tell (Fuchsmerkmale im Augenwinkel oder in einer Spiegelung)",x:"Reine Ankündigung, keine Konsequenz."},
    {n:"Selbstgefällig grinsen, den nächsten Zug vorhersehen",x:"Eine vorbereitete Komplikation enthüllen (Escalate the Situation oder Present a Challenge). Enthüllen, dass er dem Opfer etwas abgenommen hat (einen Tag verbrennen). Enthüllen, dass jemand oder etwas eine Illusion war (bewildered-3 und diese Story Tags entfernen). Unsichtbar werden oder als Fuchs entwischen (Deny Them Something They Want)."},
    {n:"Verführerisch lächeln",x:"Kusshand oder ähnliche Geste (enamored-3). Küssen oder berühren, um Lebensessenz zu saugen (inflict drained-3 und gain empowered-2)."},
    {n:"Feuerfunken in der Handfläche beschwören",x:"Das Feuer auf einen Feind schleudern (burned-2)."},
    {n:"In einem Traum erscheinen",x:"Dem Träumer etwas einreden, als hätte er es selbst geträumt (gib einen Compelling Status der Stufe 2)."}
   ] },

  {t:"challenge", name:"Elder Kitsune", rating:"★★★★ (+1 Zusatzpunkt)", typ:"Challenge (Yōkai, ab fünf Schweifen)",
   beschr:"Meister der Täuschung in den oberen Gesellschaftsschichten Tokyos, die Mächtige als Gefährten oder durch Besessenheit von Angehörigen lenken. Der stärkste Typ ist der neunschweifige Kyūbi. Sie beobachten ihre Ziele lange; es gilt als gegeben, dass sie mindestens einige Identities, Rituals oder Itches (oder Wunsch-/Zieltags) einer SC kennen.",
   limits:[{n:"Hurt or Subdue",v:4},{n:"Banish",v:6},{n:"Expose",v:6}],
   tags:["cunning","one step ahead","socially untouchable","Status: inscrutable-4"],
   specials:[{n:"Kyūbi no Kitsune (+ Zusatzpunkt)",x:"Der Elder Kitsune kennt alle Identities, Rituals und Itches der Crew sowie die Power und Weakness Tags jedes Mitglieds. Einmal pro Szene kann er eine Consequence als Interjection liefern."}],
   threats:[
    {n:"Freundlich, verführerisch, autoritär oder sonst überzeugend nähern, individuell auf das Opfer zugeschnitten",x:"Mit Worten und Versprechen verzaubern (mesmerized-5). Küssen oder berühren, um Lebensessenz zu saugen (inflict drained-4 und gain empowered-3)."},
    {n:"Selbstgefällig grinsen, den nächsten Zug vorhersehen",x:"Mit Kitsune-Zauberei einen schlimmen Fluch aussprechen (diseased-4, enfeebled-4, maddened-4, ill-fortuned-4 usw.). Realistische Illusionen erschaffen (questioning-reality-4) oder etwas als Illusion entlarven (Escalate the Situation oder Deny Them Something They Want)."},
    {n:"Mit jemand anderem sprechen und dabei die Aufmerksamkeit der Crew halten",x:"Eine kontrollierte Geliebte oder einen Verbündeten einführen (Present a New Challenge: Criminal Overlord (Metro S. 306), Corporate Executive (Metro S. 304) oder Icon (S. 126), mit mesmerized-5). Diese Figur im Sinne des Kitsune handeln lassen (eine Consequence aus ihrem Challenge-Profil liefern)."}
   ] }
]},

{ id:"kaze-onryo", titel:"Kaze Security und Onryō", bloecke:[
  {t:"p", x:"**Kaze Security** ist ein exklusiver Mythos-Sicherheitsdienst für Konzernchefs, die um die Mythoi wissen. Die Truppen sind von einem Source der Tengu berührt, fliegen und wirken kaum noch menschlich unter ihren Krähenmasken. Ihr Chef, der **Shōgun**, verlässt nie die Kurama Base, den HQ-Wolkenkratzer am Berg Kurama. Sie tun ihren Auftrag (VIP schützen, Source sichern, Ziel entführen) zielstrebig und meiden unnötige Gefechte, spielen aber mit Gegnern, wenn sie im Vorteil sind."},
  {t:"challenge", name:"Kaze Security Trooper", rating:"★★★★", typ:"Challenge (Mythic-Söldner)",
   beschr:"Krähenmaskierter Tengu-Trooper mit Flug, übernatürlicher Geschwindigkeit, Windkontrolle und Flüchen; brutal und grausam.",
   limits:[{n:"Hurt or Subdue",v:4},{n:"Banish",v:4}],
   tags:["artful dodging","supernatural speed","wings","Status: alert-2"],
   specials:[{n:"Tengu Trickery",x:"Einmal pro Szene während Establish: eine Illusion erschaffen (Story Tag oder bewildered-2 für jemanden), unsichtbar werden (gain invisible) oder sich verkleiden (gain disguised-2). Gleichzeitig keine anderen Threats."}],
   threats:[
    {n:"Aus der Luft herabstoßen oder aus Wind entstehen, Waffen oder Messer im Anschlag",x:"Durchschlagende Windgeschosse (perforated-4). Mit Kampfmesser schneiden (nasty-cut-3) oder einen Angreifer greifen (restrained-3)."},
    {n:"Arme ausbreiten, während der Wind auffrischt",x:"Starke Böe aus den Flügeln (blown-back-3 an alle vor ihm)."},
    {n:"Per taktischen Zeichen mit dem Team abstimmen, bevor sie nachsetzen",x:"Falle oder taktisches Manöver (negativen taktischen Vorteil-Status wie cornered-2, outmaneuvered-2 oder off-guard-2 geben oder bis zu zwei Stufen eines positiven taktischen Vorteils entfernen). Ausschwärmen und Gelände nutzen (gain cover-2 oder superior-position-2). Verstärkung rufen (Scale +1)."},
    {n:"Zum Abheben bereit, einen restrained Feind festhaltend",x:"Den Gefangenen aus großer Höhe fallen lassen (shattered-bones-5). Mit dem Opfer zu einem Windstoß werden und verschwinden (Deny Them Something They Want)."},
    {n:"Tengu-Magie über ein Handgelenk-Interface laden",x:"Per Wetter behindern (trapped-in-a-downdraft-3, heavy-fog-3, blown-back-3 o. ä.). Einen schlimmen Fluch verhängen (shivering-fever-3, distorted-visage-3 oder confounded-3)."}
   ] },

  {t:"p", x:"**Onryō**: Rachegeist eines Ermordeten oder durch Pflichtversagen Getöteten, im Extremfall auch aus einem Lebenden geformt, der schwer Unrecht erlitten hat. Über Thin Places und Esoterica-Handbücher (z. B. der Gordian) kann heute jeder Gekränkte durch Ritual und Seelenopfer einen Onryō erschaffen, der an seinen Schöpfer gebunden sein kann. Er will sein Ziel töten, lässt sich aber von der Lust ablenken, dessen Leben oder Freunde zuerst zu zerstören, auch durch Besessenheit (bleiche, schlanke Gestalt in Weiß mit langem, wirrem schwarzem Haar)."},
  {t:"challenge", name:"Onryō", rating:"★★★", typ:"Challenge (Yōkai)",
   beschr:"Rachegeist, der sein Ziel unfehlbar durch ein tödliches „Unglück“ erledigen will, sofern man ihn nicht bannt.",
   limits:[{n:"Banish",v:4},{n:"Avenge",v:6}],
   tags:["incorporeal","invisible","vengeful"],
   specials:[{n:"Avenge (Limit-Effekt)",x:"Der Onryō verhängt cursed-6 über sein Ziel, das danach bei einem Unfall stirbt."}],
   threats:[
    {n:"Etwas sehr Unwahrscheinliches und Gefährliches steht kurz bevor (Kerze fällt auf Stoff, rostiges Scharnier gibt nach)",x:"Ein Zufall schlägt zu (bruised-2, burned-2, electrocuted-2, einen Tag verbrennen oder Escalate the Situation)."},
    {n:"In der Umgebung des Opfers verschiebt sich etwas Unpassendes",x:"Das Antlitz des Geistes zeigen (terrified-3). Wachsendes Unheilsgefühl (gain it's-coming-1 auf avenge)."},
    {n:"Mit Flüstern und Versprechen auf drohendes Unheil aufmerksam machen",x:"In eine Person oder einen Roboter fahren (possessed-3) oder ein besessenes Wesen zu Schaden führen (passenden Status geben)."}
   ],
   extra:[{k:"Hurt or Subdue",x:"Kein Limit (–): Der Onryō lässt sich nicht verletzen oder überwältigen."}] }
]},

{ id:"nicht-yokai", titel:"Non-Yōkai Adversaries", bloecke:[
  {t:"challenge", name:"Android Secretary", rating:"★★", typ:"Challenge (Roboter)",
   beschr:"Billiger, allgegenwärtiger Android-Dienstbote, der Besucher höflich bewirtet und vertröstet, bis sie aufgeben und gehen, statt sie zu ihrem Herrn vorzulassen.",
   limits:[{n:"Hurt or Subdue",v:4},{n:"Take Over or Shutdown",v:5},{n:"Convince",v:3}],
   tags:["emotionless efficiency","protective plastic body","vulnerable to electricity","Status: firewalled-1"],
   threats:[
    {n:"Angenehme, aber bedeutungslose Unterhaltung führen",x:"Die wartende Person wird frustrated-2, distracted-2 oder discouraged-2."},
    {n:"Mit dem Rufen der Wachen drohen",x:"Wachen rufen (Deny Them Something They Want oder Present a New Challenge: Security Guard (Metro S. 305), Scale 1). Mit den Gliedern wild fuchteln und Gäste zurückdrängen (unstable-1 oder prone-2)."},
    {n:"Lichter in den Augenhöhlen flackern, schnelle Suche",x:"Einen Hochstapler oder Eindringling melden (Escalate the Situation oder tagged-2)."},
    {n:"Sich entschuldigen, kurz einen Befehl entgegennehmen",x:"Mit dem Boss kommunizieren (alle Statuses auf convince entfernen)."}
   ] },

  {t:"challenge", name:"Bōsōzoku Rider", rating:"★★", typ:"Challenge (Gyrocycle-Gangster)",
   beschr:"Gyrocycle-Rowdy und Nachwuchs der Yakuza (meist implantatfrei), der als Späher und Drogenkurier dient und Straßenruf zerstören kann. Weniger gewalttätig als die Oni Motorcycle Gangs (S. 185).",
   limits:[{n:"Hurt or Subdue",v:4},{n:"Intimidate",v:5},{n:"Catch/Outrun",v:3}],
   tags:["fast gyrocycle","highly maneuverable","Status: blatant-and-bold-2","Status: street-cred-2"],
   threats:[
    {n:"Eine SC zum Trinken herausfordern",x:"Jemanden betrunken machen oder fürs Ablehnen verspotten (intoxicated-2 oder mocked-2)."},
    {n:"Hinter Sonnenbrille oder Visier anstarren",x:"Mit Springmesser drohen (threatened-2). Zustechen (stabbed-2 oder gunshot-wound-2)."},
    {n:"Mit Lärm durchstarten",x:"Zum Beweis der Furchtlosigkeit herausfordern (Escalate the Situation oder ruined-street-cred-3). Mit Maschinenpistole feuern (full-of-holes-3). Verstärkung rufen (Scale +1)."},
    {n:"Wild über Fahrzeuge und Wände fahren",x:"Abstand schaffen, johlend (catch/outrun-2 und mocked-2). Ein Rad, Wagen oder Stand umwerfen als Hindernis für die Gegner. Einen Schalter an der Gyrocycle umlegen (gain boosted-2)."}
   ] },

  {t:"challenge", name:"Dojo Brawler", rating:"★★★", typ:"Challenge (Nahkämpfer)",
   beschr:"Erfahrener Kampfsportler mit geschärften Reflexen, auf dem Weg, sich einen Namen zu machen. Variante Musha Shugyō (Krieger in Ausbildung) sucht Kämpfe und hat zusätzlich spoiling-for-a-fight-2 (gilt gegen Handlungen, einen Konflikt zu vermeiden). Variante Yojimbo (Leibwächter) hat das zusätzliche Special Bodyguard.",
   limits:[{n:"Hurt or Subdue",v:3}],
   tags:["lightning reflexes","friends at the dojo","unwavering discipline"],
   specials:[{n:"Kip-Up Maneuver",x:"Einmal pro Szene als Threat bis zu drei Stufen eines Statuses entfernen, der mit Zu-Boden-Gehen oder einer unbequemen Haltung zu tun hat."},{n:"Bodyguard (nur Yojimbo)",x:"Wird jemand in der Nähe angegriffen, kann der Brawler dessen Status statt des Ziels nehmen."}],
   threats:[
    {n:"In Kampfhaltung gehen und zum Angriff einladen",x:"Wirbel aus Fäusten und Tritten (bruised-2 und imbalanced-2)."},
    {n:"Gewicht und Haltung verlagern, zum Schlag bereit",x:"Das Ungleichgewicht gegen den Gegner nutzen (bruised-3 und prone-2 an jemanden mit imbalanced)."},
    {n:"Einen anrückenden Feind aus dem Augenwinkel beobachten",x:"Angreifer gegen etwas werfen (bruised-1 und prone-2). In Arm- oder Kopfhebel nehmen (restrained-3)."},
    {n:"Dich als Feigling beschimpfen",x:"Der Vorwurf trifft schmerzhaft (bruised-ego-2)."}
   ] },

  {t:"challenge", name:"Five Rings Officer", rating:"★★★", typ:"Challenge (Paramilitär)",
   beschr:"Offizier der weltberühmten Söldnerfirma Five Rings (Militärzonen, S. 31), der mit Hacker-Support, Taktik und einer Uguisu-Drohne arbeitet. Die Drohnen kommunizieren per Ultraschall und umgehen so den Cyberspace.",
   limits:[{n:"Hurt or Subdue",v:4}],
   tags:["cyberspace support","extra supplies","tactical armor","Uguisu drone","Status: firewalled-2"],
   threats:[
    {n:"Hacker anweisen, lokale Feeds abzugreifen und Feindpositionen zu triangulieren",x:"Taktische Lage auslesen (Escalate the Situation durch Offenlegen des SC-Standorts, gain alert-2 oder zwei Stufen negativer taktischer Statuses entfernen)."},
    {n:"Die Umgebung genau prüfen",x:"Nützliche Umgebungselemente nutzen (Story Tag oder ein Status für eine neue Gefahr). Die Uguisu-Drohne auf das Ziel hetzen (harassed-2)."},
    {n:"Entschlossen vorrücken",x:"Nahkampf mit augmentierter Kampfkunst (broken-bones-3 oder einen Ausrüstungstag verbrennen). Mit ausfahrbarem Handgelenkmesser zustechen (surprised-2 beim ersten Sehen, danach deep-cuts-3)."},
    {n:"Position wechseln und die Schusswaffe heben",x:"Präzise auf ein kleines Ziel schießen (bleeding-hand-3, head-wound-4 oder einen Ausrüstungstag verbrennen)."},
    {n:"Mit der Uguisu-Drohne sprechen",x:"Die Drohne ruft Verstärkung (Scale +1). Drohnenpiloten-Verstärkung (Present a New Challenge: mobile Gun Turret, Metro S. 319). Cyberspace-Verstärkung (Present a New Challenge: Hacker, Metro S. 309)."}
   ],
   extra:[{k:"Bribe or Intimidate",x:"Im Buch ohne Limitwert (–): nicht per Bestechung oder Einschüchterung zu überwinden."}] },

  {t:"challenge", name:"Icon", rating:"★★★★", typ:"Challenge (Star / Promi)",
   beschr:"Idol, Pro-Gamer oder Sportstar (auch rein virtuell) mit Entourage und Fans. Allein ihre Anwesenheit erzeugt Ablenkung oder Hindernisse; Begegnungen drehen sich um Hilfe erbitten oder den Star im eigenen Feld schlagen.",
   limits:[{n:"Beat",v:5},{n:"Convince",v:5}],
   tags:["impressive [appropriate skill]","entourage and fans","Status: too-famous-for-this-5"],
   specials:[{n:"Beat (Limit-Effekt)",x:"Der Icon wird auf seinem Fachgebiet besiegt und erhält humiliated-2; die SC erhält famous-3."},{n:"Dramatic Entrance",x:"Betritt der Icon erstmals die Szene, verhängt er sofort starstruck-5 über alle Anwesenden."}],
   threats:[
    {n:"Catchphrase, Lächeln mit Peace-Zeichen oder scheinbarer Blick zu einer SC",x:"Starke Gefühle wecken (starstruck-2, jealousy-2 oder inferiority-2). Wie unabsichtlich einen Fan-Aufruhr auslösen (Present a New Challenge: Riot, Metro S. 311)."},
    {n:"In Bewegung kommen, bereit für das, was er kann",x:"Vor der Menge posieren (gain raring-to-go-3). Mit Starpower, Cyber-Effekten und Talent blenden (starstruck-3 und distracted-3). Sein Ding perfekt tun (zwei Stufen von beat entfernen und tired-1 auf einen Rivalen). Signature-Move an einer SC (humiliated-3 oder overwhelmed-3)."},
    {n:"Sonnenbrille und Hut tragen, vergeblich Identität verbergen",x:"Mit der Entourage fliehen, einige bleiben zurück und halten Verfolger auf (Deny Them Something They Want und Story Tag blocking entourage)."}
   ] },

  {t:"challenge", name:"Mecha", rating:"★★★★ (+1 Zusatzpunkt)", typ:"Challenge (Kampfroboter)",
   beschr:"Humanoides Piloten-Fahrzeug von Autogröße (Scale 1) bis gebäudehoch (Scale 4), im Einsatz für Militär, Bergung und Sicherheit. Manche sind ferngesteuert oder haben eine KI, was aber wegen der Angriffsfläche selten erlaubt wird.",
   limits:[{n:"Wreck",v:6},{n:"Take Over or Shutdown",v:5},{n:"Charge Up",v:3}],
   tags:["armor plates"],
   specials:[{n:"Charge Up (Limit-Effekt)",x:"Der Mecha setzt eine zerstörerische Waffe ein: bis zu zwei Defensiv-Tags verbrennen oder bis zu vier Stufen defensiver Statuses entfernen, dann devastated-5 verhängen."},{n:"Ace Pilot (+ Zusatzpunkt)",x:"Ein erfahrener Pilot gibt dem Mecha lightning-reflexes-3 als Basis-Status."}],
   threats:[
    {n:"Im Gebiet landen und einen Feind jagen",x:"Mit riesiger Waffe angreifen (bombarded-3, lasered-3 oder cut-up-3 an ein oder mehrere Ziele). Jemanden hochheben und wegschleudern (broken-bones-3 oder wrecked-3)."},
    {n:"Still stehen und digitale Signale ausstrahlen",x:"Digitale Sicherheit erneuern (zwei Stufen von take-over-or-shutdown entfernen). Störsignal senden (jammed-3 an alle Feinde)."},
    {n:"Durch das Gebiet stampfen und alles zerstören",x:"Auf Unschuldige treten oder Häuser zerstören (Make the Future Bleaker)."},
    {n:"Den Reaktorkern mit hohem Surren hochfahren",x:"Interne Kondensatoren laden (charge-up-1)."},
    {n:"Booster hochfahren und abheben",x:"Wegfliegen (Deny Them Something They Want)."}
   ],
   extra:[{k:"Scale",x:"1 bis 4"}] },

  {t:"challenge", name:"Nano-butai Trooper", rating:"★★★", typ:"Challenge (Einsatztruppe)",
   beschr:"Elitesoldat der Nano-butai (Emergency Task Force, S. 25), von allen Megacorps gekauft; räumt Verseuchungen und Biotech-Gefahren ohne Rücksicht auf Anwohner, meist Folgen von Yōkai-Befall. Tokyos Version der Heavy Urban Response Tactics (Metro S. 304). nano-shielded schützt vor mikroskopischen Gefahren, Hitze, Kälte, Magnetfeldern, Schall und Partikelstrahlen, aber nicht vor Projektilen und Splittern.",
   limits:[{n:"Hurt or Subdue",v:4},{n:"Bribe or Intimidate",v:4}],
   tags:["tactical armor","in the corporations' pocket","urban combat training","Status: firewalled-2","Status: nano-shielded-4"],
   threats:[
    {n:"Anwohner vor Gefahr warnen und sofortige Räumung unter Gewaltandrohung fordern",x:"Mit Anzugkraft im Nahkampf zuschlagen (broken-bones-3). Schallgranate (in-pain-3 an alle in der Nähe)."},
    {n:"Selbstständige Drohnen herbeirufen",x:"Dutzend Blockade-Drohnen sperren Straße oder Eingang (Story Tag blockade wall und/oder Deny Them Something They Want). Mikro-Drohnen-Netz enthüllt Fallen, Gefahren und Feinde (Escalate the Situation oder Stealth-Statuses und Trap-Tags entfernen)."},
    {n:"Nachladen und den offensichtlichsten „Kontaminationsvektor“ fokussieren",x:"Gezielter Schuss in die Körpermitte (gunshot-3). Dekontaminations-Gasgranate (zwei Stufen biologischer, chemischer oder Cyberware verstärkender Statuses entfernen)."},
    {n:"Gas oder Schaum aus einem Unterlaufspender freisetzen",x:"Giftstoffe und Gefahren im Gebiet entfernen (einen Status oder Tags entfernen). Öffnung oder Gebiet mit schnell härtendem Mörtel versiegeln (Escalate the Situation, oder restrained-3 und suffocating-3)."},
    {n:"Zum Helmfunk greifen",x:"Verstärkung rufen (Scale +1). Schwerere Verstärkung (Kanonenboot-Deckungsfeuer in die Szene bringen, Story Tag gunship suppressive fire, oder Present a New Challenge: Weaponized Walker Drone, Metro S. 320)."}
   ] },

  {t:"challenge", name:"Oni VR Construct", rating:"★★", typ:"Challenge (Cyberspace-Konstrukt)",
   beschr:"Billiger Cyber-Oger aus einem Tamatebako-Dongle, den Gelegenheitshacker in jede zugängliche Domain beschwören; er knüppelt sich mit dem Tetsubō durch Firewalls und Prozesse.",
   limits:[{n:"Crash",v:3},{n:"Take Over",v:3}],
   tags:["iron skin","studded tetsubō club"],
   threats:[
    {n:"In einer Rauchwolke in die Domain stolpern",x:"Firewall, Prozess, Avatar oder Konstrukt mit der Keule brechen (crash-2, einen Tag verbrennen oder bis zu zwei Stufen von firewalled-2 entfernen). Weit ausholen, alles ringsum treffen (crash-2 an ein Scale-1-Gebiet). In Wut geraten (gain raging-1, während die Konsole, die es betreibt, overheating-1 erhält)."},
    {n:"In grafischen Glitches einfrieren, während der Besitzer nachlädt",x:"Wieder flüssig loslaufen (reset crash)."}
   ],
   extra:[{k:"Scale",x:"1"}] },

  {t:"challenge", name:"Sōhei IC", rating:"★★★ (+1 Zusatzpunkt)", typ:"Challenge (IC-Programm)",
   beschr:"Adaptive Intrusion-Countermeasures-App von Tendai Corporation in Mönchsgewand: befragt Eindringlinge, tötet fremden Code (Naginata) oder verfolgt ihn (Third Eye). Manchmal verlässt sie ihre Domain auf „Pilgerfahrt“. Relativ resistent gegen Mythos-Einflüsse.",
   limits:[{n:"Crash",v:4},{n:"Take Over",v:5}],
   tags:["martial arts","Status: firewalled-2","Status: alert-2","Status: warded-2"],
   specials:[{n:"Naginata 2L8 (+ Zusatzpunkt)",x:"Gibt das Sōhei IC einem menschlichen Hacker-Avatar einen crashed-Status, verhängt es zusätzlich neural-burns derselben Stufe auf den Hacker selbst."}],
   threats:[
    {n:"Freundlich nach den Absichten fragen",x:"Antworten analysieren und Lügen durchschauen (Escalate the Situation; zwei Statusstufen oder einen Tag zu Täuschung oder Subterfuge entfernen)."},
    {n:"Ein Gebet sprechen, das ungebetene Gegner vertreibt",x:"Alle Eindringlinge trennen (crashed-3 an alle erkannten Eindringlinge in der Nähe)."},
    {n:"Kapitulation vorschlagen und die Naginata senken",x:"Wirbelnder Naginata-Hieb (crashed-3 an zwei Ziele oder zweimal am selben). Einen Gegner entwaffnen oder eine App, besonders defensive, abtrennen (einen Tag verbrennen)."},
    {n:"Die Augen schließen und Fassung zurückgewinnen",x:"Sich neu zentrieren (zwei Stufen von crash oder take-over entfernen und gain dodging-2)."},
    {n:"Das dritte Auge öffnen und einen Trace starten",x:"Den Ursprung des Eindringlingssignals finden (Escalate the Situation und tagged-3)."}
   ] },

  {t:"challenge", name:"Venerated Sensei", rating:"★★★★", typ:"Challenge (Meister / Gesprächsszene)",
   beschr:"Weiser Meister von Kampfkunst, Zen und Kami-Mysterien. Taugt eher für Gesprächsszenen als für Kämpfe und sollte nicht als bloßer Rückschlag dienen: er hält Informationen oder Zugang bereit, wenn man ihn beeindruckt. Kämpft er, dann nur um Mut, Ehre oder Ausdauer zu prüfen, und zieht sich danach zurück. Ein beeindruckter Sensei kann eine vage Warnung als forewarned-3 geben, das der Spieler für eine einzelne Aktions- oder Mitigationswurf einsetzen darf.",
   limits:[{n:"Hurt or Subdue",v:5},{n:"Impress",v:4}],
   tags:["Status: commanding-presence-4","Status: cryptic-4","Status: quick-movements-3"],
   specials:[{n:"Seemingly Untouchable",x:"Einmal pro Szene kann der Sensei einen Strong oder Mixed Hit auf einen Angriff gegen ihn in einen Miss verwandeln."}],
   threats:[
    {n:"Aus dem Nichts erscheinen oder sich blitzschnell an eine neue Position bewegen",x:"Mit atemberaubend eleganter Kampfkunst zuschlagen (bruised-4 und demoralized-4)."},
    {n:"Mit unerschütterlicher Geduld anblicken und ein tiefes Gespräch führen, das die Motivation hinterfragt",x:"Rätselhaftes Wissen vermitteln (befuddled-3; bei Stufe 6 ein Theme ersetzen). Eine erschütternde Wahrheit aussprechen, die die Perspektive grundlegend ändert (Escalate the Situation und einem Spieler anbieten, Decay auf einem Theme zu markieren)."},
    {n:"Scheinbar verschwinden",x:"Wirklich verschwinden und einen kryptischen Hinweis hinterlassen (Deny Them Something They Want). An unerwartetem Ort oder spöttisch wieder auftauchen (surprised-3, gefolgt von einer weiteren Consequence)."}
   ] },

  {t:"hinweis", titel:"Hinweise zur Vorlage", x:"Dieser Seitenbereich (S. 113–130) enthält ausschließlich Challenges, keine Power Sets und keine Händler- oder Loot-Kataloge. Vereinheitlicht wurden: „Takayama Rockers“ im Bokuba-Goblins-Limit steht für die Bokuba Goblins; „Blacwater Ronins“ ist Stillwater Ronin; „Five Rings Officers“ im Castle-Threat meint den Five Rings Officer; „manifestingmisfortune-1“ ist manifesting-misfortune-1. Die Ratings (★) sind aus den Pips im PDF-Bild übernommen; Zusatzpunkte in Klammern (z. B. beim Elder Kitsune, Mecha, Sōhei IC) sind die zusätzlich markierten Pips im Bild. Bei Aka Manto, Onryō und Five Rings Officer steht beim Limit Hurt or Subdue bzw. Bribe or Intimidate im Buch nur ein Strich ohne Wert." }
]},

]});
