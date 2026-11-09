OS_ADV_PART("strings-attached", [

{ id:"akt2-vorbereitung", gruppe:"Akt II", titel:"Akt II: Downtime & Loading Up", bloecke:[
  {t:"p", x:"Akt II bringt die Crew Richtung Skeiron: Sie weicht den Gefahren des Wegs aus oder stellt sich ihnen."},
  {t:"p", x:"Haben die PCs in Akt I Treffer eingesteckt oder wollen sie sich vorbereiten, rufe eine **Downtime** aus (Rapid Download #12, Metro S. 124). Wenn die Crew bereit ist, folgt ein **Loading Up**: Jeder wählt die wichtigste Ausrüstung für den Einsatz (Rapid Download #9: Loadout, S. 114)."}
]},

{ id:"akt2-sludge", gruppe:"Akt II", titel:"Sludge Zone Run", bloecke:[
  {t:"vorlesen_ref", seite:344, x:"Der halb versunkene Gefängniskomplex liegt hinter rostenden Lagerhallen, bemoosten Schiffsrümpfen und kippeligen Schloten in der giftigen Brühe; warme Winde tragen Säuregeruch und das Ächzen von Metall."},
  {t:"p", x:"Die Sludge Zone sind die tiefsten Reste eines Uferstreifens, vor etwa zehn Jahren vom Klimawasser verschluckt. Überflutung brachte Verseuchung, Rost und Erosion; alle Sanierungsversuche scheiterten. Heute ist das Gebiet eine gefährliche Brache mit brutalen Gangs, monströser Tierwelt und versteckten Conjurations. Man entsorgt hier gern Leichen, denn Schlamm oder Monster lassen nichts übrig, und das Gesetz kommt nie."},
  {t:"p", x:"Um Skeiron zu erreichen, muss die Crew die Challenge **Sludge Zone Run** bewältigen, indem sie Aktionen macht, die das Limit **traverse** per Advance hochtreiben (siehe Tracked Conflict, S. 340). Wie sie anreisen, ist offen: eigenes oder erbeutetes Fahrzeug, trockene Pfade zwischen den Wracks, ein mythisches Transportmittel oder tauchend im Umweltanzug. Wer fliegt, kann die Challenge theoretisch überspringen, wird aber vom **Skeiron Guard Tower** bemerkt und löst **High Alert** aus (S. 346)."},
  {t:"challenge", name:"Sludge Zone Run", typ:"Challenge (Reise)", beschr:"Die Durchquerung der Sludge Zone bis nach Skeiron.",
    limits:[{n:"Traverse",v:4}],
    tags:["derelict buildings","heavy toxic clouds","sludge waters"],
    specials:[{n:"Endless Smog and Ruins", x:"Sobald die Crocodilians in der Szene erscheinen, gilt die Crew als surrounded-3; sobald die Prismatic Jellies erscheinen, als surprised-3. Beide Statuses sind mitigierbar."}],
    threats:[
      {n:"Ein Lichtblitz in einem Fenster oder auf einem Dach", x:"Consequence: löst ein Threadwelle-Sensornetz aus (tagged-1, evtl. für die ganze Crew)."},
      {n:"Dichter Giftnebel oder ein unerwarteter Schlammausbruch", x:"Consequence: wer mit Sludge in Kontakt kam, wird nauseated-2."},
      {n:"Ein mutierter Egel fällt von einer Ruine oder springt aus dem Wasser", x:"Consequence: saugt sich fest und vergiftet (injured-2 und, falls nicht voll mitigiert, poisoned-2)."},
      {n:"Die Crocodilians kommen oder die Quallen werden aufmerksam", x:"Consequence: Present a New Challenge: Crocodilians bzw. Prismatic Jelly."}
    ]}
]},

{ id:"akt2-crocodilians", gruppe:"Akt II", titel:"The Crocodilians", bloecke:[
  {t:"p", x:"Die Crocodilians erscheinen als Consequence im Sludge Zone Run oder als neue Challenge, wann immer du die Szene neu herstellst. Sie sind eine ständige Gefahr: Fanatiker, die eine **Source des Sobek** verehren (krokodilköpfiger ägyptischer Gott der Pharaonenmacht und Kriegsstärke). Sie kontrollieren die halbe Zone und verteidigen sie mit Zeloteneifer und aus Mangel geborener Wildheit; sie fressen die Leichen ihrer Feinde."},
  {t:"p", x:"Ihre Source, eine Bronzestatue, die echte Krokodilhaut wachsen lässt, liegt in einem Unterwasserversteck. Die Gangmitglieder pfropfen sich Hautflicken auf, sodass Schuppen über ihren Körper wachsen, was Zähigkeit und Krokodil-Atemanhalten gibt. Mit Inbrunstgebeten rufen sie Conjured-Krokodile herbei. Sie nutzen wasserangepasste MPs und patrouillieren auf getarnten Airboats."},
  {t:"vorlesen_ref", seite:345, x:"Propellergeräusch, dann umzingeln Airboats die Crew aus dem Smog: Leute in groben Neoprenanzügen mit echten Krokodilhautflecken, gelbäugig und fanatisch hungrig; eine Frau feuert eine MP-Salve."},
  {t:"p", x:"Es erscheinen zwei Airboats mit je zwei oder drei Crocodilians. Behandle jedes Boot als eigenes **Scale-1-Kollektiv** (Rapid Download #10: Scale, S. 118). Die Crocodilians wissen, dass Skeiron wieder besetzt ist, aber es kümmert sie nicht; sie meiden den Ort wegen der Prismatic Jellies."},
  {t:"challenge", name:"Crocodilian Boat Crew", typ:"Challenge (Kollektiv, Scale 1)", beschr:"Gangmitglieder eines Airboats, je Boot ein eigenes Kollektiv.",
    limits:[{n:"Hurt or Subdue",v:2},{n:"Wreck Boat",v:2},{n:"Outrun",v:3},{n:"Drown",v:0}],
    tags:["airboat","tough skin","zealous-rage-1","Scale 1"],
    threats:[
      {n:"Steuern das Airboat näher", x:"Consequence: springen jemanden an, schubsen ihn ins Wasser und halten ihn unten (grappled-3 oder drowning-3); holen die Beute ein (entfernen zwei Tiers von outrun)."},
      {n:"Heben die Waffen und brüllen", x:"Consequence: MP-Feuer (gunshot-wound-3 auf bis zu zwei Ziele)."},
      {n:"Rufen flehend zum Himmel", x:"Consequence: beschwören ein Krokodil (füge Story Tag Sobek's crocodile hinzu, mit boshafter Schläue und überirdischer Kraft)."}
    ],
    extra:[{k:"Hinweis zu Drown", x:"Im Buch steht für das Limit Drown kein Tier („–“): Es ist kein normal erreichbares Limit, sondern ein Ziel der Crew-Seite (Gegner ertränken geht nicht über Tier)."}]}
]},

{ id:"akt2-jellies", gruppe:"Akt II", titel:"The Prismatic Jellies", bloecke:[
  {t:"p", x:"Auch die Prismatic Jellies können als Consequence im Sludge Zone Run auftauchen oder von dir als neue Challenge eingeführt werden. Es sind drei; sie greifen alles an, was im oder auf dem Wasser oder nah am Ufer ist."},
  {t:"vorlesen_ref", seite:345, x:"Das Sludge-Wasser ist unheimlich still, dann pulsiert plötzlich eine riesige leuchtende Qualle voraus, dann zwei weitere, und die Tentakel sind schon in Reichweite."},
  {t:"p", x:"Die Gewässer wimmeln von gefährlichen Meerestieren, am tödlichsten die Prismatic Jellies: mannsgroße, biotechnisch erzeugte Quallen, die zur Flutzeit aus einem Aqualabor von CryoCharm entkamen. Sie haben sich vermehrt, das Ökosystem um Skeiron durcheinandergebracht und bedrohen Mensch und Tier. Ihre biolumineszenten Körper blitzen in hypnotischen oder Anfälle auslösenden Mustern und senden im Funkbereich, was Elektronik stört und sogar Flugzeuge abstürzen lassen kann. Die Tentakel sind im Wasser fast unsichtbar und stechen mit giftigen Nesselfäden."},
  {t:"challenge", name:"Prismatic Jelly", typ:"Challenge (Monster)", beschr:"Mannsgroße biotechnische Qualle. Drei davon lauern um Skeiron.",
    limits:[{n:"Hurt or Subdue",v:4},{n:"Scare Away",v:3}],
    tags:["electronic interference","marine animal","paralytic toxin"],
    threats:[
      {n:"Treibt auf Beute zu", x:"Consequence: umwickelt sie mit Tentakeln (entangled-2 und, falls nicht voll mitigiert, paralyzed-2); verschlingt wehrloses Opfer (acid-burn-3)."},
      {n:"Leuchtet in immer schnelleren Mustern", x:"Consequence: hypnotisiert (mesmerized-2) oder blitzt Krampfanfälle aus (stunned-2)."},
      {n:"Sendet ein störendes Funksignal", x:"Consequence: jammed-3."}
    ]}
]},

{ id:"akt3-ueberblick", gruppe:"Akt III", titel:"Akt III: Der versunkene Komplex und High Alert", bloecke:[
  {t:"p", x:"Die Crew ist am Ziel und beginnt, Threadwelles neue Operation zu durchschauen, im direkten Konflikt mit der technologischen und mythischen Macht des Konzerns. Die Einsätze steigen, die Spieler brauchen mehr Mittel: Zeit für **Rapid Download #11: Power Options** (Metro S. 121) mit Burning Tags für Power und Going Out In A Blaze."},
  {t:"h", x:"The Submerged Complex"},
  {t:"p", x:"Der Komplex ist größtenteils zerstört, die unteren Ebenen und der Hof stehen unter Wasser. Zwei Bereiche ragen aus dem Wasser: der **Skeiron Guard Tower** und das Dach von **Cell Block Alpha**, überspannt von einer grau getarnten aufblasbaren Kuppel. Aus beiden dringt schwaches Licht, im Nearspace läuft lokale digitale Aktivität (die Skeiron Domain)."},
  {t:"p", x:"Wasser, Ruinen und Komplex werden vom Turm beobachtet und von **Atropos-203**, Threadwelles Attentäter und Fallensteller, einem der drei Leiter der Skeiron-Operation. Er patrouilliert ständig und huscht anmutig über Felsen und gebrochene Mauern."},
  {t:"h", x:"High Alert"},
  {t:"p", x:"Verfolge die Alarmbereitschaft der Sicherheitskräfte mit einem **alarm:3**-Limit, ohne den Maximalwert zu verraten. Bemerkt ein Wachposten als Consequence etwas Ungewöhnliches, gewinnt das Team alarm-1. Sieht ein Wachposten die Crew, kann er (Threat) zum Funkgerät greifen und sofort alarm-3 auslösen."},
  {t:"p", x:"Gesenkt wird der Alarm durch Hacken der Skeiron Domain oder dadurch, dass man die Wachen anderweitig zur Unachtsamkeit bringt (*Set Back*). Bei vollem Limit schlägt der Alarm: Alles Personal wird **alert-3**, was Schleichen sehr erschwert. Jeder Ort unten nennt, welche Vorbereitungen die Gegner treffen, wenn sie einen Angriff erwarten."},
  {t:"p", x:"Zur Alpha-Kuppel zu kommen, ohne die Wachen zu alarmieren, braucht Täuschung oder Ablenkung: ein kurzer Wurf pro PC. Alternativ schalten die PCs die Wachen zuerst aus oder suchen Cyberspace-Lösungen."},
  {t:"hinweis", titel:"Tagged by Threadwelle", x:"Threadwelle rechnet mit Interessenten, will aber die Operation in der Sludge Zone geheim halten und setzt daher nur leise Verteidigung ein. Elektronische Sensornetze an strategischen Punkten haben die Crew womöglich schon mit **tagged-1** markiert (im Sludge Zone Run); Operatives im Wachturm tun es bei Sichtkontakt ebenfalls. Markierte PCs haben es schwerer, in Skeiron unbemerkt zu bleiben, solange die virtuelle Domain läuft: Die Sicherheitsnetze erkennen Aussehen, Bewegungsmuster, IR-Abdruck, Geräusche usw. Zusätzlich kann der Oddsmaker diesen Status zu **predictable** hochstufen, was Operatives jede PC-Aktion leicht vereiteln lässt, erst recht beim Schießen. Das hält nur wenige Sekunden an, weil die Vorhersage nur kurz in die Zukunft reicht; danach fällt der Status auf tagged zurück, und die gesammelten Daten bleiben für weitere Nutzung."}
]},

{ id:"akt3-turm", gruppe:"Akt III", titel:"Skeiron Guard Tower", bloecke:[
  {t:"vorlesen_ref", seite:346, x:"Der einzige noch hoch aufragende Teil: ein grauer, klobiger Wachturm zur Sludge Zone hin, mit Rundgang oben und schwachem Licht hinter dunklen Fenstern."},
  {t:"p", x:"Der Turm ist mit **drei Threadwelle Operatives** (Scale 1) besetzt, die von der erhöhten Position profitieren. Er ist drei Stockwerke hoch und vom Seenebel glitschig. Eine Consequence bei einer Kletteraktion (Quick Action) kann Verdacht wecken (alarm-1), einen gefährlichen Sturz auf die Felsen bringen (broken-bones-3) oder den Verlust wichtiger Ausrüstung (einen Gear Tag burnen)."},
  {t:"p", x:"Bei Alarm steigen zwei Operatives die Innentreppe hinab zu einem Gang, der direkt nach Cell Block Alpha führt; der dritte bleibt als Scharfschütze oben."},
  {t:"challenge", name:"Threadwelle Operative", rating:"◆◆", typ:"Challenge (Henchman)", beschr:"Gut ausgebildete Paramilitärs, im Nah- wie im Fernkampf fähig, ursprünglich ein Pilotprogramm für Elite-Wärter. Sie unterstehen nur Clotho, Lachesis und Atropos. Gefangen verweigern sie jede Befragung und verlangen, von Threadwelle ausgelöst zu werden. Alle tragen AR-Oddsmaker-Brillen mit sekundengenauen Vorhersagen.",
    limits:[{n:"Hurt or Subdue",v:3},{n:"Turn or Bribe",v:0}],
    tags:["Oddsmaker goggles"],
    threats:[
      {n:"Ziehen und laden eine Waffe", x:"Consequence: Scharfschützengewehr (gunshot-wound-3) oder taktische SMG (flesh-wound-2 auf bis zu zwei Ziele); Stich mit Taser-Schlagstock (stunned-2)."},
      {n:"Bewegen sich in eine sichere Position", x:"Consequence: gehen in Deckung (dug-in-2)."},
      {n:"Gestikulieren vor der Oddsmaker-Brille und bedienen AR-Steuerungen", x:"Consequence: markieren jemanden als Bedrohung (gib einem PC tagged-1) oder holen präzise Vorhersagen zu einem markierten Ziel (ein tagged des PCs wird zu predictable mit gleichem Tier)."}
    ]},
  {t:"challenge", name:"Atropos-203", rating:"◆◆◆◆", typ:"Challenge (Threadwelle-Teamleiter)", beschr:"Schlanker, mittelgroßer Thai mit kurzgeschorenem schwarzem Haar und scharfen Zügen, unter dunkler Kapuze mit hohlem Blick, sonst taktisch für Marineeinsätze gekleidet. Als angeworbener Berufskiller mit Persönlichkeitsregulator operiert er allein und ist besessen davon, Schicksalsfäden mit uralten Scheren zu durchschneiden. Am besten arbeitet er mit Platz für Fallen und aus dem Nichts beschworenen Scheren. Über einen straffen ätherischen Faden am Handgelenk ist er direkt mit dem fernen Oddsmaker verbunden (wirkt wie die Oddsmaker-Brillen, aber mythisch). Zum Kappen braucht es mythische Mittel; die Verbindung besteht auch bei Abschaltung der Skeiron Domain weiter.",
    limits:[{n:"Hurt or Subdue",v:4},{n:"Turn or Bribe",v:0}],
    tags:["ethereal thread","sharp scissors","evasive-2","hidden-2"],
    threats:[
      {n:"Wirbelt gekonnt ein Scherenpaar", x:"Consequence: schneidet eine Arterie (arterial-bleeding-4); lenkt Scheren telekinetisch zum Durchtrennen von Gurten, Seilen usw. (burn einen Ausrüstungs-Tag oder entferne bis zu 3 Tiers Restraint-Statuses); schneidet die magische Aura (magically-drained-2) oder Verbindung (disconnected-2)."},
      {n:"Gleitet in Schatten und hinter Deckung", x:"Consequence: verschwindet aus dem Blick (hidden-3)."},
      {n:"Sitzt still, lässt das Schicksal führen und starrt auf einen markierten PC", x:"Consequence: präzise Vorhersage (tagged wird zu predictable, gleiches Tier); ein PC läuft in eine von Atropos vorbereitete Falle (wounded-3, burned-3 oder hobbled-3); er beschwört ein neues Scherenpaar (Tag sharp scissors); markiert jemanden als Bedrohung (tagged-1)."}
    ]}
]},

{ id:"akt3-alpha", gruppe:"Akt III", titel:"Cell Block Alpha Staging Area", bloecke:[
  {t:"vorlesen_ref", seite:348, x:"Aus dem bröckelnden Gebäude wölbt sich eine grau getarnte Kuppel; darunter ein improvisiertes Lager aus Analysten und Operatives, ein Briefing, ein holografisches Labyrinth-Display, ein Versorgungsturm in der Mitte und am anderen Ende eine verstärkte Stahl-Doppeltür unter Bewachung."},
  {t:"p", x:"Das Obergeschoss des Zellenblocks ist zum Aufmarschgebiet umgebaut: Schlafbereich und Feldküche an einer Seite, in der Mitte ein Aufbau mit Generator, Luftreiniger, Wassertank und Ähnlichem. Hinter der Doppeltür (und einem Sensorraster, das **tagged-2** vergibt, wenn man es quert) liegt der Eingang zu Cell Block Bravo mit dem Threadwelle Command Post."},
  {t:"p", x:"Hier sind etwa **sechs Operatives** und rund zehn Analysten ohne Kampfauftrag. Ein direkter Angriff ist selbstmörderisch. Mit Schleichen oder Ablenkung geht es leichter: Alle sind **inattentive-1**, weil sie keine Gefahr erwarten und dem Turm trauen. Das Durchqueren verlangt einen Wurf pro PC."},
  {t:"p", x:"Bei direktem Angriff oder Alarm haben die Operatives Heimvorteil, die Analysten setzen mehrere **Puppeteer-Hand**-Drohnen ein (S. 340), und Atropos-203 samt seinen Fallen kann auftauchen."},
  {t:"h", x:"What Threadwelle Personnel Know"},
  {t:"p", x:"Operatives sagen nichts, auch unter Druck. Analysten sind redseliger; ein Quick Outcome oder Discover enthüllt:"},
  {t:"liste", items:[
    "Anzahl der Operatives im Gefängnis: drei im Turm, sechs in Alpha, zwei in Bravo.",
    "Aussehen, Fähigkeiten und Aufenthalt von Atropos-203, Clotho-203 und Lachesis-203; mehr wissen die Analysten über diese drei nicht, einige haben aber mit ähnlichen Leitern gearbeitet.",
    "Die gut finanzierte Operation will eine Source namens **Ariadne Thread** „farmen“, die ihrem Träger vollen Zugang zu und aus gesicherten Orten gibt. In Cell Block Bravo stimmt etwas nicht, niemand weiß was; Lachesis sucht dort drinnen etwas.",
    "Gefangene werden nach Bravo gebracht, weil nach aktueller Vermutung „ihre Angst den Faden erzeugen kann“.",
    "Drinnen sind Monster, die die Operatives alle paar Stunden zurückschießen, wenn sie sich dem Eingang nähern. Alle fürchten einen Ausbruch.",
    "Niemand kennt Namen der Versuchsgefangenen, den Namen Karl Masaryk oder „The Gemcutter“. Sie stehen vermutlich in den Akten der Skeiron Domain."
  ]}
]},

{ id:"akt3-domain", gruppe:"Akt III", titel:"Skeiron Domain", bloecke:[
  {t:"p", x:"Eine aktive Domain läuft hier und wird von Threadwelle betrieben. Direktes Hacken aus dem Nearspace ist praktisch unmöglich wegen der wahrscheinlichkeitsbasierten Verschlüsselung des Oddsmaker-Zentralrechners. Ein Paar **Oddsmaker-Brillen** gibt einem Hacker den nötigen Zugang per Quick-Outcome-Erfolg. Eine Firewall gibt es nicht: Der Systemadmin Clotho-203 vertraut auf Anti-Intrusion-Programme, die Eindringlinge jagen."},
  {t:"vorlesen_ref", seite:348, x:"Graue, schwach beleuchtete Korridore in alle Richtungen, eine seelenlose Konzern-Nachbildung des Gefängnisses, überspannt von schimmernden Netzen, durch die Drohnen-Feeds als feine Fäden ziehen. Die simulierte Physik ist falsch: Gänge schließen sich zu Schleifen, Türen öffnen sich ins Unmögliche, und der Raum scheint sich unbemerkt zu verändern."},
  {t:"p", x:"Das alte Gefängnisnetz wurde von der neuen Operation reaktiviert und dient jetzt als lokale Nearspace-Domain, die alle Sensornetze verbindet und die Oddsmaker-Brillen mit Daten füttert. Die Nähe des Labyrinth-Thin-Place hat sie in ein **virtuelles Labyrinth** verwandelt. Wegen der mythischen Störung bleibt Clotho im Kern des Systems, der abgeschottet und nur per Hardwarezugang im Command Post erreichbar ist. Der Rest hält sich selbst am Laufen (Kommunikation, Alarme)."},
  {t:"p", x:"Mögliche Hacking-Aktionen in der Domain:"},
  {t:"liste", items:[
    "Nach alten Aufzeichnungen suchen (schwebende Kisten).",
    "Eine Sicherheitsmaßnahme (z. B. Sensornetz) übernehmen und abschalten oder mit falschen Daten füttern.",
    "Ein Paar Oddsmaker-Brillen übernehmen, abschalten oder täuschen.",
    "Verhindern, dass neue Sensordaten zum Oddsmaker gehen (mitigiert tagged). Sind Musterdaten einer Person einmal übertragen, lassen sie sich nur mit Direktzugriff auf den Oddsmaker entfernen (*Restore*)."
  ]},
  {t:"p", x:"Wegen der verschiebenden Wände und der verdrehten Physik ist Navigation (Alarm abschalten, Sicherheit abschalten, Akten finden) schwierig. Gute Consequences: disoriented-1 oder der Lauf in eine Netzbarriere, woraufhin die **Cyberspace Spyders** auftauchen."},
  {t:"h", x:"What's in the Old Records"},
  {t:"p", x:"Die Aufzeichnungen (schwebende Kisten) zu finden verlangt einen Navigationswurf. Dann gibt es alles aus „What Threadwelle Personnel Know“ plus:"},
  {t:"liste", items:[
    "Karl Masaryks Name taucht in älteren Akten auf und verschwindet dann spurlos. Am selben Datum wurde Lachesis-203 in die Organisation eingeführt.",
    "Lachesis-203 leitet das Experiment mit den menschlichen Versuchspersonen in Bravo. Er arbeitet mit Insiderwissen und kennt die Anlage am besten.",
    "Das seltsame Verschieben ist kein Programmfehler. Etwas Überirdisches verdreht den Raum und erschwert aktiv die Navigation."
  ]},
  {t:"h", x:"Domain Security"},
  {t:"p", x:"Der Domain-Server steht im Threadwelle Command Post und ist über den Systemadmin und Missionsleiterin Clotho-203 mythisch mit dem Oddsmaker verbunden. **Drei Cyberspace Spyders** lauern hinter Ecken auf Eindringlinge, die in eine der vielen Netzbarrieren im Labyrinth laufen."},
  {t:"challenge", name:"Cyberspace Spyder", typ:"Challenge (Domain-KI)", beschr:"Elegante, langbeinige schwarze Spinnen aus Drahtgerüst (ähnlich den Puppeteer-Hands, ähnliche Größe), augenlos, die ständig leuchtende Digitalfäden weben. Berührt etwas ihr Netz, tropft Schadcode von den Beißwerkzeugen. Es gibt drei im System.",
    limits:[{n:"Crash",v:3}],
    tags:["creepy spider","silent movement"],
    specials:[{n:"Strand-sense", x:"Die Spyders sehen und spüren jeden User, der tagged ist; zähle den Status negativ, wenn ein PC ihre Angriffe mitigieren will."}],
    threats:[
      {n:"Huscht ohne Rücksicht auf simulierte Schwerkraft über jede Fläche", x:"Consequence: beißt und vergiftet (glitched-3 und slowed-1)."},
      {n:"Webt digitale Spinnseide", x:"Consequence: wickelt jemanden oder etwas in Digitalgespinst (impeded-2 oder einen Tag burnen, außerdem tagged-1); spannt ein Netz (Netzbarriere)."},
      {n:"Ein User läuft in ein Netz", x:"Consequence: tagged-1."}
    ]}
]},

{ id:"akt4-command-post", gruppe:"Akt IV", titel:"Akt IV: Threadwelle Command Post", bloecke:[
  {t:"p", x:"Durch den Einfluss des Labyrinth-Thin-Place ist Cell Block Bravo **nur durch die Haupt-Doppeltür** betretbar: Ein Labyrinth hat nur einen Eingang. Der ganze Block ist ein ständig wandelndes Labyrinth mit wenigen stabilen Inseln. Eine davon ist der Eingang, ein kurzer Flur mit Wachposten hinter den verstärkten Türen von Alpha. Dort richtete **Clotho-203** den Command Post ein, um den Gemcutter im Auge zu behalten, dem sie nicht traut."},
  {t:"vorlesen_ref", seite:350, x:"Im alten Wachposten flackern Monitore mit Bildern von Skeirons Rändern, der Sludge Zone und vor allem eines dunklen Teils der Tiefe; Angestellte führen Protokoll, zwei Bewaffnete stehen bereit, und eine Frau in Robe voller Cyberware hängt über Glasfaserkabel aus ihrem Kopf am System. Gegenüber liegt eine vergitterte Transferzelle mit aktiven Sensoren."},
  {t:"p", x:"Der Posten ist das Zentrum der Operation. Die Zelle gegenüber hält die aus anderen Anstalten herangeschafften Gefangenen für die Ariadne-Thread-Versuche und als Schutzschilde gegen die Minotauren. Derzeit ist sie leer: Der Gemcutter hat sie gerade ins Labyrinth geführt. Wer ins Labyrinth will, muss hier durch."},
  {t:"p", x:"Standardmäßig sind die **zwei Operatives** (S. 347) **inattentive-1**, weil sie nicht von Alpha her mit Gefahr rechnen. Die Techniker sind nicht kampfgeschult und halten sich meist raus, sind aber loyal und mutig und versuchen vielleicht **grapple-1** oder **block-1** gegen Eindringlinge. Bei Alarm sind die Operatives **alert-3**, und alle Techs haben Waffen und schießen auf Befehl; so können sie eine eigene Threat machen und **gunshot-wound-2** als Consequence verteilen."},
  {t:"challenge", name:"Clotho-203", rating:"◆◆◆", typ:"Challenge (Threadwelle-Teamleiterin)", beschr:"Cyborg für Überwachung und Bedrohungsanalyse, rekrutiert aus Threadwelles eigenen gläubigen Führungskräften. Dunkle Robe, blasses Roboter-Gesicht, Mähne aus Glasfaser-„Haar“. Über ein ätherisches Glasfaserkabel mythisch mit dem Oddsmaker verbunden und zugleich Systemadmin und Verbindungsglied zwischen Skeiron Domain und Oddsmaker: Trennt sie eine der Verbindungen, liefern alle Oddsmaker-Brillen im Komplex keine Vorhersagen mehr. Sie kennt Lachesis-203s wahre Identität (Gemcutter/Karl Masaryk), das Intaglio und seine Suche nicht, erwartet aber, dass er Threadwelle verrät (sein Neuralinterface „nahm nicht“). Im Kampf bleibt sie an ihrer Station, verlässt sich auf Oddsmaker und Operatives und sucht Schwächen. Ihr Leben opfert sie nicht: Sie flieht, wenn alles verloren scheint. Gefangen oder bedroht tauscht sie Informationen oder einen Ariadne Thread (siehe Loot) gegen Leben und Freiheit und verrät Threadwelles „tiefe Verbindung“ zum Moirai-Mythos und den Plan, Ariadne Threads durch Verfüttern von Gefangenen an das Labyrinth zu ernten.",
    limits:[{n:"Hurt or Subdue",v:3},{n:"Threaten",v:4}],
    tags:["ethereal fiber-optic cable"],
    specials:[
      {n:"Bodyguards", x:"Nimmt Clotho einen Status, vor dem Operatives sie schützen können, nehmen stattdessen sie ihn."},
      {n:"Read the Threads of Fate", x:"Während Establish kann Clotho Identities, Rituals und Itches eines markierten (tagged) PCs erfahren."}
    ],
    threats:[
      {n:"Tempo und Farbe der Lichtimpulse in ihren Glasfasern ändern sich", x:"Consequence: würgt jemanden mit zähen Glasfaserkabeln (suffocating-3); markiert jemanden als Bedrohung (tagged-1); präzise Vorhersage (tagged wird zu predictable, gleiches Tier); stört Elektronik, Cyberware oder App (glitched-3 oder einen Tag burnen)."},
      {n:"Spricht einen PC mit Namen an", x:"Consequence: sagt voraus, dass eine bestimmte Identity, ein Ritual oder Itch scheitert oder jemanden ruiniert (terrified-3, apprehensive-3 oder doubting-3)."},
      {n:"Löst ihre Kabel von den Maschinen", x:"Consequence: flieht zum Ausgang zu einem versteckten Einmann-U-Boot (Deny Them Something They Want)."}
    ]},
  {t:"h", x:"Loot: Clotho-203's Cybernetic Compartment"},
  {t:"p", x:"Im linken unteren Torso hat Clotho ein verstecktes Fach mit Notfall-Gegenständen und dem Ariadne Thread, den sie bei Threadwelle gestohlen hat."},
  {t:"p", x:"**Tags:** adrenaline shot, compact sidearm, mono-edge knife, nanite cyberwar repair injection"},
  {t:"tabelle", titel:"Loot-Katalog", kopf:["Item","Beschreibung","Feature Tags","Weakness"], zeilen:[
    ["Ariadne Thread","Ein Faden, der den Träger zu geheimen Ein- und Ausgängen führt und hilft, Alarme und Fallen zu umgehen, in realer wie virtueller Welt.","Ariadne Thread, never lost, reveal hidden passages, avoid traps and alarms","thin and delicate"]
  ]}
]},

{ id:"akt4-labyrinth", gruppe:"Akt IV", titel:"The Labyrinth", bloecke:[
  {t:"vorlesen_ref", seite:352, x:"Cell Block Bravo sollte ein einfacher, halb gefluteter zweistöckiger Zellenblock sein, doch beim Eintreten drehen sich Wände, bewegt sich der Boden, der Rückweg ist verschwunden. Verwinkelte Gänge, teils unter Wasser, rostige Gitterstäbe wie kauende Zähne, die klare Gewissheit: ihr seid verloren."},
  {t:"p", x:"Das Labyrinth Intaglio hat den Block in ein riesiges Labyrinth voller Minotauren verwandelt, ehemaliger Insassen, die nun eingeworfene Gefangene als Tribut jagen. Hier ist **Karl Masaryk, der Gemcutter, alias Lachesis-203**, und sucht mit Hilfe eines Ariadne Threads das Intaglio. Ihn schützen einige ihm unterstellte Puppeteer-Hand-Drohnen (Scale 1), und er hat vier Gefangene mitgebracht. Sie sollen in die „Wildnis“ freigelassen werden, damit ihre Angst neue Ariadne Threads hervorbringt, aber der Gemcutter bringt es nicht über sich und rechtfertigt es vor seinem Lachesis-Persönlichkeitsanteil damit, dass er sie als Schutz vor den Minotauren braucht."},
  {t:"p", x:"Führe die Challenge **Into the Labyrinth** ein. Wann du willst (nachdem sie eine Weile herumirren und in Schwierigkeiten geraten), begegnen sie einer Puppeteer-Hand-Drohne, die Lachesis steuert. Sie greift nicht an, sondern sendet eine Sprachnachricht und eröffnet ein Gespräch."},
  {t:"challenge", name:"Into the Labyrinth", rating:"◆◆◆◆", typ:"Challenge (Thin Place)", beschr:"Das wandelnde Labyrinth von Cell Block Bravo, der Thin Place des geschnittenen Karneols, des Labyrinth Intaglio. Innenwände können beschädigt werden, aber Durchbrüche führen nur zu weiteren Gängen und nie hinaus. Es gibt keine Methode im Wahnsinn: Ohne Ariadne Thread ist es unmöglich, den Weg zu finden, doch das merkt die Crew vielleicht erst nach einer Weile.",
    limits:[{n:"Navigate",v:6}],
    tags:["flickering lights","shifting walls"],
    specials:[
      {n:"Navigate", x:"Hat der Reisende einen Ariadne Thread, kommt er an. Sonst verirrt er sich erneut: Würfle einen Würfel und senke das Tier des navigating-Status um das Ergebnis."},
      {n:"Ariadne Threads", x:"Gerät jemand im Labyrinth in einen gesteigerten Notzustand (ein Status von Tier 4 oder höher), erscheint ihm ein Ariadne Thread, der ihn hinausführt. Entkommt er, bleibt der Faden; stirbt er im Labyrinth, verschwindet er."}
    ],
    threats:[
      {n:"Wände und Gänge verdrehen und verwandeln sich", x:"Consequence: confused-2; eine Zellentür schließt sich oder ein Raum wird zur Zelle (trennt Personen mit prison bars); Hochwasser steigt (füge floodwater hinzu); jemand wird zwischen Wänden zerquetscht (crushed-4) oder in einen gefluteten Raum gedrängt (drowning-3)."},
      {n:"Wassergeräusche, Schreie, rostige Scharniere und Hufe auf Stein hallen durch den Block", x:"Consequence: unnerved-2; ein Minotaur erscheint (Present a Challenge: Minotaur)."},
      {n:"Ein verängstigter Gefangener stolpert aus einem Gang", x:"Consequence: der Verirrte stirbt auf grausame Weise (Make the Future Bleaker)."}
    ]}
]},

{ id:"akt4-lachesis", gruppe:"Akt IV", titel:"Lachesis, Minotaur und das Intaglio", bloecke:[
  {t:"h", x:"Gespräch mit Lachesis"},
  {t:"p", x:"Lachesis sieht in der Crew die Chance, Threadwelle zu entkommen und vielleicht das Neuralimplantat loszuwerden. Er schließt sich aber nicht einfach an, denn er muss noch „etwas Wichtiges finden“. Davon spricht er nicht mehr, aus Furcht, die Crew wolle das Intaglio für sich."},
  {t:"p", x:"Er merkt sofort, dass die Crew nicht zu Threadwelle gehört, und fragt, was sie hier tut. Hören sie auf Erklärung ihres Auftrags, ist er euphorisch. Er sagt nicht direkt, dass er Karl Masaryk ist, denn die Lachesis-Persönlichkeit würde dagegen toben, aber es sollte aus seinem Verhalten klar werden, falls die Crew es nicht schon ahnt."},
  {t:"p", x:"Nennt die Crew **Kallikantzaros & Partners**, wird Lachesis ängstlich: K&P versuchte ihn früher anzuwerben und setzte ihn unter Druck, indem es seine illegalen Taten an die Behörden durchsickern ließ, damit er die Kanzlei zur Rettung braucht und in ihrer Schuld steht. Er kommt dennoch mit, sucht aber schon nach Fluchtwegen, bevor die Crew ihn an ihre Auftraggeber übergibt."},
  {t:"h", x:"Enter the Minotaur"},
  {t:"p", x:"Im Lauf des Gesprächs (besonders als Consequence oder wenn die Crew dem Lachesis-Signal zur Quelle folgt) bricht die Verbindung mit Schrei und Gebrüll ab: Ein Minotaur greift Lachesis an. Er ruft die Drohne zurück, der die Crew folgen kann, und sie finden ihn von **drei Minotauren** bedrängt; seine Drohnen liegen zerstört neben toten und verwundeten Gefangenen. Überleben alle den Kampf, erklärt Lachesis dankbar, was er sucht: die Source des tödlichen Labyrinths, die nie in Threadwelles Hände fallen darf."},
  {t:"p", x:"Vermutet Lachesis, die Crew wolle ihn töten, ist der Minotaurenangriff nur eine Finte, eine Audiodatei. Lachesis und drei Puppeteer-Hand-Drohnen lauern dann der Crew auf, die der vierten Drohne zu ihm folgt. Wird er besiegt, verrät er die Existenz des Labyrinth Intaglio, um sein Leben zu verhandeln."},
  {t:"challenge", name:"Minotaur", rating:"◆◆◆◆", typ:"Challenge (Monster)", beschr:"Verschwundene Insassen der Flut, zu halb Mensch, halb Stier verwandelt und im Labyrinth am Leben gehalten. Sie können Cell Block Bravo nicht verlassen und wollen nicht, dass es jemand anderes tut.",
    limits:[{n:"Hurt or Subdue",v:4},{n:"Frighten",v:5},{n:"Tire Out or Outrun",v:0}],
    tags:["thick hide","furious-2"],
    threats:[
      {n:"Stürmt auf ein Ziel los", x:"Consequence: spießt jemanden auf (gored-3; nach Mitigation zusätzlich prone mit einem Tier gleich gored)."},
      {n:"Brüllt und schwingt eine doppelklingige Labrys-Axt durch die Luft", x:"Consequence: spaltet eine Gruppe (gaping-wound-3 auf mehrere PCs)."},
      {n:"Tritt behutsam genau rechtzeitig vor, als sich die Wände bewegen", x:"Consequence: nutzt das wandelnde Labyrinth (jemand wird cornered-3, oder eine Consequence aus Into the Labyrinth)."}
    ]},
  {t:"h", x:"Finding the Intaglio"},
  {t:"p", x:"Jeder PC mit einem Mythos-Theme erkennt: Das Intaglio im Thin Place zu finden hat nichts mit seinem Ort zu tun, sondern mit seiner **thematischen Bedeutung**. Es liegt im **Herzen des Labyrinths**."},
  {t:"p", x:"Das ist ein Moment für kreative, abstrakte Spielerideen, was das Herz des Labyrinths ist und wie man es findet: in der Brust eines Minotauren, in Lachesis' Kopf oder in einem Raum, der wie ein Herzschlag pocht und dem Pochen nach gefunden werden kann. Lass sie würfeln, um die Idee umzusetzen. Verwirrt-, verunsichert- und ähnliche Statuses wirken als Hindernisse. Bei einem Miss finden sie es trotzdem, erleiden aber Consequences (vielleicht wachsen Minotaurenhörner!)."},
  {t:"p", x:"Wird das Intaglio zerstört oder aus dem Labyrinth gebracht, zerfällt der Thin Place, und Cell Block Bravo wird wieder zum gewöhnlichen, wenn auch durchnässten Gebäude."}
]},

{ id:"aftermath", titel:"Aftermath", bloecke:[
  {t:"challenge", name:"Lachesis-203 (The Gemcutter)", rating:"◆◆◆◆", typ:"NPC (Threadwelle-Teamleiter)", beschr:"Nervöser, kleiner Osteuropäer mittleren Alters mit ergrauendem Haar und Kapuzenrobe. Karl wurde angeworben, weil er versprach, sein Labyrinth Intaglio zu finden. Zuerst genoss er Freiheit und Ressourcen (Kranial-Drohnenimplantate), bis ihm mit dem Erstarken der Lachesis-Persona klar wurde, dass er nur ein Werkzeug ist und kaputte Werkzeuge entsorgt werden. Lachesis verlangt Treue zu Threadwelle und bestraft Gedanken an Verrat, ist aber noch nicht voll ausgeprägt, und der Gemcutter behält viel von sich. Karl ahnt, dass sein Implantat mythisch über einen ätherischen Draht entlang der Wirbelsäule mit Threadwelles Schicksalsbesessenheit und dem Oddsmaker verbunden ist, weiß aber wenig über die Organisation. Gegen markierte Ziele nutzt er die Oddsmaker-Vorhersagen.",
    limits:[{n:"Hurt or Subdue",v:4},{n:"Threaten or Bribe",v:5}],
    tags:["ethereal wire"],
    threats:[
      {n:"Lässt leuchtende Drähte zwischen seinen Händen erscheinen", x:"Consequence: ruft eine Puppeteer-Hand-Drohne (Present a Challenge: Puppeteer-Hand Drone); schneidet jemanden mit diamantenem Nanofilamentdraht (sliced-4)."},
      {n:"Misst mit einem Blick jemandes Schicksal und verdreht den Draht in den Fingern", x:"Consequence: dreht jemandes Schicksal zu Gebrechlichkeit und Tod (frail-5); befreit einen Verbündeten aus den Fesseln des Schicksals (entfernt einen schädlichen Status bis Tier 5)."},
      {n:"Packt seinen Kopf mit beiden Händen und streitet mit sich selbst", x:"Consequence: schreit auf, Funken sprühen vom Kopfimplantat (brain-fry-2); richtet sich auf und spricht in Konzernsprache (loyal-2)."},
      {n:"Bereitet sich auf Ausweichen vor", x:"Consequence: dodging-2."},
      {n:"Markiert jemanden als Bedrohung oder holt eine präzise Vorhersage", x:"Consequence: gib einem PC tagged-1 oder wandle ein tagged in predictable (gleiches Tier)."}
    ]},
  {t:"p", x:"Nach dem Labyrinth muss sich die Crew durch übrige Threadwelle-Kräfte schlagen und in Sicherheit kommen. Entscheide nach Dramaturgie, ob du diese Szenen voll spielst, als Quick Outcomes abkürzt oder direkt zum Abspann springst. Jetzt ist es Zeit, aus der Action herauszuzoomen, **Load Off** zu machen (alle Loadout Tags burnen) und sich auf die Downtime vorzubereiten. Hatte die Crew noch keinen **Credit Roll** (Metro S. 125), ist jetzt ein guter Zeitpunkt."},
  {t:"h", x:"Fragen zum Abschluss des Jobs"},
  {t:"liste", items:[
    "Hat die Crew Karl geholt, freiwillig oder nicht? Übergibt sie ihn an Kallikantzaros & Partners oder hört sie sein Flehen und hilft ihm, allen Verfolgern zu entkommen? Wie erklärt sie das Solid?",
    "Was geschieht mit den Neuralimplantaten, die Karl an Threadwelle binden? K&P könnte die Crew über Frank Solid für einen Folgejob anheuern, um die nötigen Kryptoschlüssel oder einen geeigneten Chirurgen zu finden, vielleicht bei Threadwelle selbst. So lässt sich tiefer in Korruption und Gefahr des schicksalsbesessenen Konzerns einsteigen.",
    "Was wurde aus dem Labyrinth? Ist es ganz verschwunden oder bleibt ein Rest des Thin Place? Wollen die PCs es kontrollieren, eventuell mit dem Intaglio, falls sie es behielten? Wohl müssen sie mit den Crocodilians einen dauerhafteren Durchgang aushandeln.",
    "Wo landet das Labyrinth Intaglio? Wer nutzt es und wofür? Lässt sich das einmalige Wunder wiederholen, wenn Karl es erneut versucht? Vielleicht braucht er einen echten Anreiz oder einen bestimmten Gefühlszustand, oder etwas anderes war damals für die Kraft verantwortlich.",
    "Hat jemand der Crew seine Upgrade- oder Decay-Tracks gefüllt? Dann gibt es ein neues Special oder einen Theme-Wechsel; siehe Character & Crew Evolutions (Metro S. 131)."
  ]},
  {t:"hinweis", titel:"Schreibweisen im Original", x:"Schreibweise im Original uneinheitlich: „Threadwelle“ / „Threadwell“ / „Theradwelle“ (hier einheitlich Threadwelle); „Vineyard“ / „Vinyard“ (hier The Vineyard); „Basil Sideris“ (so im Hintergrund, K&P-Absatz im Briefing nennt ihn „Basil Raptis“; hier einheitlich Sideris). Die Wertigkeit der Limits „Drown“, „Turn or Bribe“ und „Tire Out or Outrun“ ist im Buch mit „–“ angegeben (kein Tier). Die Challenge-Ratings (◆) wurden nur dort eingetragen, wo sie im PDF-Statblock erkennbar waren und geprüft wurden (Puppeteer-Hand, Operative, Atropos, Clotho, Minotaur, Into the Labyrinth, Lachesis); bei Bede, Vineyard, Sludge Run, Crocodilians, Jellies und Spyders wurde kein Rating eingetragen."}
]}

]);
