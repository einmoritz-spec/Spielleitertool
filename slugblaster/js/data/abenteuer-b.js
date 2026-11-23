/* Slugblaster – Abenteuer „Saubere Sache“: Szenen. Jede Szene hat Unterszenen (u) mit Bausteinen (b):
   vor = Vorlesetext · p = SL-Text · h = Zwischenüberschrift · ul = Liste · info = Kasten · frage = Fragen an die Spieler
   wege = Wenn … → … · prob = Problem-Ideen (abhakbar) · wp = Wegpunkte · leiste = Leiste aus SB_AB.leisten · nsc = Figuren-Chips
   links = Chips zu Tool-Seiten · res = Ergebnis-Tabelle · trick = Trick-Gelegenheiten */
var SB_AB_SZ = [
 {id: "hillview", t: "Hillview", kurz: "Freitag, 16:12 Uhr. Null ist so langweilig wie immer – bis die Handys vibrieren.", u: [
  {id: "gastop", t: "Gas Top", b: [
   {t: "vor", x: [
    "Freitagnachmittag im Gas Top. Die Slush-Maschine macht seit zwanzig Minuten ein Geräusch wie ein sterbender Staubsauger, und Gary hinter der Theke tut so, als würde er es nicht hören. Draußen weht ein Plastikbeutel über den Parkplatz. Er ist das Aufregendste, was heute in Hillview passiert ist.",
    "Dann vibrieren eure Handys. Alle gleichzeitig.",
    "Eine Story vom *Slugblaster Magazine*. Corey, der Chefredakteur, sitzt auf einem Rettungsschwimmer-Hochstuhl, hinter ihm glitzert das Meer von Popularia. Er hält die Kamera viel zu nah an sein Gesicht."
   ]},
   {t: "vor", x: [
    "„Okay. Hört zu. Morgen gehört Scram Cat offiziell Miper. Zwanzig Jahre, Leute. Deshalb: heute, letzter Scram Cat Jam. Die Hubba. Die Zwölf Stufen. Sechzig Sekunden Video, abgegeben bei mir, bis die Sonne im Meer versinkt. Bester Clip kommt aufs Cover der Abschiedsausgabe. Bändchen gibt’s bei Ken und Esther im Laden, solange der Vorrat reicht. Und der reicht nicht lange. – Nee, keine Fragen. Tschüss.“"
   ]},
   {t: "p", x: "Lass die Crew kurz reagieren. Dann: Wer war schon mal in Popularia? Wer hat die 12-Stufen-Hubba bisher nur auf Postern gesehen?"},
   {t: "frage", x: [
    "Wer von euch müsste heute Abend eigentlich woanders sein – und wo? (Omas 80., Schicht im Lebensmittelkeller, Hausaufgaben, Babysitten …)",
    "Was müsstest du zu Hause erklären, wenn du nach 22 Uhr heimkommst?",
    "Welchen Trick wolltest du schon immer an einer echten, berühmten Hubba landen?",
    "Wer kennt jemanden bei BRB – und warum ist das peinlich?"
   ]},
   {t: "info", h: "Der Run", x: ["**Ziel:** Clip an der 12-Stufen-Hubba drehen und bis Sonnenuntergang bei Corey abgeben.", "**Preis:** Cover (5 Crew-Style + Gunst The Old Guard) und ein Scram-Cat-Abschiedsboard.", "**Hindernisse:** Weg raus aus Hillview · Jam-Bändchen · die Zeit · BRB."]},
   {t: "leiste", id: "sonne"},
   {t: "leiste", id: "clip"}
  ]},
  {id: "kiesgrube", t: "Die Kiesgrube", b: [
   {t: "p", x: "Die übliche Dünnzone der Crew liegt hinter dem kaputten Maschendrahtzaun der Kiesgrube. Heute ist dort ein Volksfest der schlechten Laune."},
   {t: "vor", x: [
    "Vor der Kiesgrube stehen zwei DARA-Streifenwagen schräg auf dem Bürgersteig. Zwischen den Schotterhaufen summen vier Pfosten mit blauen Lichtern – eine Art Zaun aus Brummen. Officer Koop liest etwas von einer Karteikarte vor. Officer Penner isst Sonnenblumenkerne.",
    "Auf der anderen Straßenseite: ein Klapptisch mit Flugblättern, ein Banner „DOORWAYS – Weil Kinder EINE Welt brauchen“ und Stacys Mom Karen, die alles hochkant filmt. Daneben macht Jason, der Jugendleiter, Fingerpistolen in eure Richtung."
   ]},
   {t: "bild", x: "galerie/thumb/werbung-s15", c: "Eins von Karens Flugblättern (S. 15)."},
   {t: "nsc", x: ["dara", "doorways"]},
   {t: "info", h: "Die Zonensperre", x: ["Die experimentelle Sperre macht die Raumzeit an der Kiesgrube **zu dick zum Burnen** – ein Burn durch die Sperre ist nur mit Kick und einem echten Trick-Wurf möglich (Problem: *schlimmer*, S. 155).", "Sie läuft über ein Kabel zu einem Generator auf der Ladefläche von Koops Streifenwagen. Penner hat den Schlüssel in der Brusttasche.", "Laut Karteikarte ist die Sperre „bis auf Weiteres. Oder bis 18 Uhr“ aktiv."]},
   {t: "wege", x: [
    ["Reden", "Jason ist leicht zu gewinnen (er will nur, dass ihr ein Peelback-Kit nehmt und „redet“). Er lenkt Karen ab. Koop glaubt jeder offiziell klingenden Ausrede, wenn sie auf einer Karteikarte steht."],
    ["Schleichen", "Gruppenwurf (S. 148) durch die Schotterhaufen. Problem: Karen filmt euch – das Video taucht später in der Downtime auf (Familien-Beat-Futter!)."],
    ["Sabotieren", "Generator aus, Kabel durch, Penner ablenken. Die Officers rennen hinterher – mit rutschenden Hosen. Kurze Verfolgung (2 Wegpunkte)."],
    ["Woanders burnen", "Der **Wasserturm** (metanavigatorischer Orientierungspunkt) oder die Rutschen der **Getreidesilos**: freie Dünnzonen, aber jeweils ein eigenes Problem (Teenager klettern gerade drauf; der Silo-Hausmeister). Umweg = 1 Feld *Sonnenuntergang*."]
   ]},
   {t: "prob", key: "hv", h: "Hillview-Probleme", x: [
    "Mehrere Nachbarn bieten euch gleichzeitig eine Mitfahrt an.",
    "Ein Elternteil ruft an – Lautsprecher an, alle hören zu.",
    "Dein petzender kleiner Bruder fährt auf dem Fahrrad vorbei und *sieht* euch.",
    "Jemand aus dem Buchclub deiner Mutter hält am Doorways-Stand.",
    "Unangekündigte Übung der DARA-Rescue-Abteilung: Sirenen, Leute in Kraftanzügen.",
    "Dein Schwarm ist hier. Ausgerechnet heute."
   ]},
   {t: "links", x: [["fraktionen/obrig", "DARA & Doorways"], ["heimat", "Hillview-Karte"]]}
  ]},
  {id: "burn", t: "Der Burn", b: [
   {t: "p", x: "Kurze Montage: Akkus checken, Rucksäcke packen, eine Ausrede per Nachricht verschicken. Dann der Burn (S. 91): Aktionswurf mit Hoverboard oder Ersatz-Portalgerät, genug Tempo und eine Dünnzone."},
   {t: "vor", x: [
    "Die Boards heulen auf. Der Nth-Gang greift, die Luft vor euch wird dick wie Pudding und dann – reißt sie. Ein perfektes, tiefschwarzes Loch im Nachmittag von Hillview. Kein Ton. Kein Licht. Nur das Gefühl, dass eure Fingerspitzen kurz nicht mehr zu euch gehören.",
    "Und dann: rosa Sand. Überall rosa Sand."
   ]},
   {t: "trick", x: ["Durch das Portal mit einem Grab oder Kickflip = erster Clip-Moment (1 Feld *Der Clip*)."]},
   {t: "p", x: "Bei einem Fehlschlag kommen sie trotzdem durch – nur falsch: mitten in einer Düne, verkehrt herum, oder Vastiche spuckt sie fünf Meter über dem Boden aus."}
  ]}
 ]},

 {id: "line", t: "Die Line", kurz: "Null → Vastiche → Prismatia → Popularia. Drei Burns, eine Uhr, die tickt.", u: [
  {id: "route", t: "Die Route", b: [
   {t: "p", x: "Von Null gibt es keinen direkten Weg nach Popularia. Die Standard-Line führt über [[welten/vastiche|Vastiche]] nach [[welten/prismatia|Prismatia]] und von dort nach Popularia – ein **Triple**. Zeig die [[welten|Multiversum-Karte]], lass die Crew die Route kurz fachsimpeln und schneide dann hinein (S. 148)."},
   {t: "info", h: "Tempo", x: ["Die Line ist kein eigener Run, sondern der Weg dorthin. Spiel pro Welt **ein bis zwei Wegpunkte** und eine Begegnung, dann den nächsten Burn.", "Jeder Umweg oder langsame Abschnitt: 1 Feld *Sonnenuntergang*."]}
  ]},
  {id: "vastiche", t: "Vastiche", b: [
   {t: "vor", x: [
    "Grünliche Wolken verschmieren einen blassgelben Himmel. Vor euch zieht sich die alte Hochstraße durch die Dünen: eine Meile Autos, Stoßstange an Stoßstange, verrostet, mit offenen Türen wie Münder. Weiter hinten ragen die Werbetafeln eines Einkaufszentrums aus dem Sand. Auf einer steht noch: „ALLES MUSS RAUS“.",
    "Hinter euch schließt sich das Portal mit einem leisen *pop*."
   ]},
   {t: "wp", x: [
    ["Die Überführung", "Windschutzscheiben, Auffahrten, Mittelstreifen: eine einzige lange Line. Darunter pochen Hunderte Eisäcke."],
    ["Einstürzende Werbetafeln", "„ALLES MUSS RAUS“ kippt genau in dem Moment, in dem ihr darunter seid."],
    ["Ein riesiges Betonrohr", "Perfekte Quarterpipe. Die Ausgangszone nach Prismatia liegt am anderen Ende."]
   ]},
   {t: "trick", x: ["Grind über die Autodächer der Überführung.", "Durch das Betonrohr in einem Loop."]},
   {t: "h", x: "BRB zieht vorbei"},
   {t: "vor", x: [
    "Ein Schatten über euch. Drei Laserblader schießen in perfekter Formation über die Autodächer, Rucksäcke mit Stoppuhr-Displays. Die Erste dreht sich im Vorbeifahren um. „Linke Spur ist schneller! Ihr fahrt die Grom-Line!“ Dann sind sie weg. Auf dem Rücken der Letzten: ein Patch mit einem grinsenden Comic-Maskottchen und den Buchstaben BRB."
   ]},
   {t: "p", x: "Etabliert die Rivalen. Wollen sie hinterher? Ein Rennen gegen BRB bis zum Rohr (Verfolgung, S. 158, als Rennen) – gewinnen sie, gibt es Respekt (und ein Feld *Der Clip*), verlieren sie, lacht Whiplash später darüber."},
   {t: "nsc", x: ["brb"]},
   {t: "prob", key: "va", h: "Vastiche-Probleme", x: [
    "Eine Schwadron schwer bewaffneter Bergungskrabben (S. 120) will eure Boards.",
    "Ein ätzender Sturm der Kategorie 5 braut sich in der Ferne zusammen.",
    "Euer Heimweg wird von wandernden Dünen verdeckt – merkt euch das für später.",
    "Eine Dreadfly.",
    "Rescue macht eine Routine-Säuberung."
   ]}
  ]},
  {id: "prismatia", t: "Prismatia", b: [
   {t: "vor", x: [
    "Kein Himmel. Kein Boden. Kein Oben, kein Unten. Rosa Wolken treiben zwischen Kristall-Asteroiden, die das Licht ferner Sterne in tausend Farben zerlegen. Ihr fahrt auf der Unterseite eines Felsens, und eure Haare zeigen nach oben. Oder unten. Schwer zu sagen.",
    "Dann riecht ihr es: Lavendel. Sehr viel Lavendel."
   ]},
   {t: "h", x: "Sudsys Spur"},
   {t: "vor", x: [
    "Ein ganzer Asteroid ist … sauber. Blitzsauber. Die Kristalle glänzen, als hätte sie jemand mit der Zahnbürste geschrubbt. Überall kleben Schaumflocken, die langsam in der Schwerelosigkeit treiben und platzen. Zwischen ihnen hängt ein zerrissenes Netz aus Hartlicht, daneben eine Drohne, der jemand – oder etwas – die Hälfte weggeätzt hat.",
    "Auf dem Rest der Drohne steht: **EIGENTUM VON MIPER® · PROJEKT SAUBER**."
   ]},
   {t: "p", x: "Das ist der Fangplatz, an dem Miper Sudsy eingefangen hat. Wer genauer hinschaut (Aktionswurf), findet: einen Lieferschein „1× Exemplar, lebend, an: Popularia, Jam-Bühne, Ankunft vor Sonnenuntergang“ – und angeätzte Schuhabdrücke, die in einem Kreis laufen, als hätte jemand panisch gesucht."},
   {t: "wege", x: [
    ["Die Miper-Bahn", "Ein halbfertiges Netz aus Hartlicht-Röhren führt Richtung Popularia-Ausgang. Skitchen an einem Testzug spart Zeit (**1 Feld *Sonnenuntergang* löschen**), aber ein [[monster|Surveillance Orb]] filmt euch dabei."],
    ["Die Wanda-Kurve", "Ein uralter Glasring, der summt. Die ganze Innenkante entlangskaten = legendärer Clip-Moment (**+1 *Der Clip***, mit Kick +2), kostet aber 1 Feld *Sonnenuntergang*."],
    ["Direkt zum Ausgang", "Der Ausgang ist in ständiger Bewegung – ein Gruppenwurf, um ihn zu erwischen."]
   ]},
   {t: "wp", x: [
    ["Zwei Kristall-Asteroiden kollidieren", "Durch den Spalt, bevor er sich schließt."],
    ["Ein Stück verworfener Miper-Gleisweg", "Grindbar. Endet im Nichts."],
    ["Eine riesige rotierende Scheibe mit kleinem Loch in der Mitte", "Das Loch ist der Ausgang nach Popularia."]
   ]},
   {t: "prob", key: "pr", h: "Prismatia-Probleme", x: [
    "Magenumdrehendes Planetesimal-Hopscotch.",
    "Riesige Glasheuschrecken mit Laseraugen.",
    "Ein psionischer Sturm kracht in die Gedankenlandschaft.",
    "Ein Schaumflocken-Feld: alles wird *glitschig*.",
    "Hardecker-Bergbaudrohnen halten euch für Schrott."
   ]},
   {t: "links", x: [["welten/prismatia", "Prismatia"], ["monster", "Sudsy & Monster"]]}
  ]}
 ]},

 {id: "popularia", t: "Popularia", kurz: "Strand, Promenade, Scram Cat – und ein Laster, der nach Lavendel riecht.", u: [
  {id: "ankunft", t: "Ankunft", b: [
   {t: "vor", x: [
    "Wärme. Salzluft. Musik aus drei Richtungen gleichzeitig. Ihr rollt aus dem Portal auf die berühmte Promenade von Popularia, und niemand dreht sich auch nur um – hier kommen ständig Leute aus dem Nichts.",
    "Links der Strand, voller schöner Menschen mit bunter Haut und noch bunteren Haaren. Rechts Läden: Infinite Pizza, FUST, ein glänzender Miper®-Store. Und dazwischen, klein, schief, wunderschön: der erste Scram-Cat-Laden des Multiversums. Über der Tür ein handgemaltes Banner: **DANKE FÜR ALLES – 20 JAHRE**. Daneben hängt schon ein zweites, sehr glattes Banner: **Bald: Scram Cat by Miper®**.",
    "Am Ende der Promenade, wo die Treppen zum Strand hinabführen, steht eine Menschenmenge um zwölf Stufen und ein Geländer. Die Hubba."
   ]},
   {t: "p", x: "Die Sonne steht schon tief. Zeig auf die Leiste *Sonnenuntergang* – und frag, wohin sie zuerst wollen."},
   {t: "links", x: [["welten/popularia", "Popularia"], ["fraktionen/spons", "Sponsoren"]]}
  ]},
  {id: "scramcat", t: "Scram Cat", b: [
   {t: "vor", x: [
    "Der Laden riecht nach Bremsenreiniger und Räucherstäbchen. An den Wänden hängen zwanzig Jahre Boards, von ganz alten Holz-Decks mit dem ersten Nth-Gang bis zu Prototypen, die ein bisschen schweben, obwohl sie niemand anschaltet. Ken umarmt euch, bevor ihr Hallo sagen könnt. Esther sitzt hinter der Kasse und schaut euch an, als wärt ihr eine Steuererklärung.",
    "Auf dem Tresen liegt ein Gummiband mit drei Stoffbändchen. Mehr nicht."
   ]},
   {t: "bild", x: "galerie/thumb/werbung-s57", c: "Scram-Cat-Werbung an der Ladentür (S. 57)."},
   {t: "nsc", x: ["ken-esther"]},
   {t: "p", x: "Drei Bändchen – reicht das für die Crew? Wenn nicht, wird es interessant. Esther gibt sie nicht einfach her: Sie will wissen, was in dem **brummenden Laster** hinter ihrem Laden ist. Er steht da seit heute Morgen, riecht nach Lavendel, und ein Miper-Kind sitzt davor und starrt ins Leere."},
   {t: "wege", x: [
    ["Esthers Deal", "Findet raus, was im Laster ist → Bändchen für alle. (→ *Der Laster*)"],
    ["Bändchen-Battle", "Ken hat einen Kicker im Hinterhof: Wer ihn mit einem Trick abräumt, bekommt ein Bändchen (Trick-Wurf, +1 *Der Clip* bei 6)."],
    ["Kaufen oder tauschen", "Ein Bauteil, ein seltenes Ding aus Vastiche oder eine wirklich gute Geschichte über Scram Cat."],
    ["Fälschen", "Möglich (Aktionswurf), aber wenn es auffliegt, hasst euch The Old Guard."],
    ["Imani fragen", "Sie hat VIP-Bändchen. (→ *Imani*)"]
   ]},
   {t: "trick", x: ["Kicker im Hinterhof über Kens Mülltonnen.", "Manual über die gesamte Ladentheke (Esther: „Raus.“)."]}
  ]},
  {id: "laster", t: "Der Laster", b: [
   {t: "vor", x: [
    "Hinter dem Laden, zwischen Pizzakartons und einer Möwe, die euch feindselig anstarrt: ein weißer Miper-Laster, glatt wie ein Seifenstück. Er brummt. Unter der Hecktür quillt ein bisschen Schaum hervor und platzt leise.",
    "Auf der Laderampe sitzt eine junge Person in einem Miper-Poloshirt, eine Gießkanne auf dem Schoß, und starrt ins Nichts. Auf ihrem Namensschild steht ROBIN – PRAKTIKANTIN. Darunter hat jemand mit Kuli „unbezahlt“ geschrieben."
   ]},
   {t: "nsc", x: ["robin"]},
   {t: "leiste", id: "tank"},
   {t: "p", x: "Robin ist eine Goldgrube, wenn man nett ist, und ein Nervenbündel, wenn man Druck macht. Sie verrät (je nach Ansatz): Im Laster ist ein Monster aus Prismatia. Es heißt *Exemplar 1*, aber sie nennt es Sudsy. Bei Sonnenuntergang soll es auf die Bühne, in den neuen Miper-Sauber®-Käfig. „Das ist total sicher. Glaube ich. Die Drohnen haben das schon zweimal geschafft. Von fünf Mal.“"},
   {t: "vor", x: [
    "Durch das kleine Fenster in der Hecktür seht ihr es: ein Tank, so groß wie ein Whirlpool, voller schillernder Blasen. Darin bewegt sich etwas. Zwei Augen, die aussehen wie Seifenblasen, drehen sich zu euch. Es blubbert. Es klingt fast … zufrieden.",
    "Dann seht ihr euch selbst in der Scheibe: verschwitzt, voller Vastiche-Staub, Schaumflocken aus Prismatia im Haar. Das Blubbern wird schneller."
   ]},
   {t: "info", h: "Sudsy mag Dreck", x: ["Jeder Schritt Richtung Tank mit dreckigen Klamotten: 1 Feld *Sudsys Tank*.", "Lavendelseife beruhigt es (Robin hat eine Kiste davon). Damit kann man 1 Feld löschen.", "Wenn die Leiste voll ist, bricht Sudsy aus – hier, hinter dem Laden, mitten am Nachmittag. Dann beginnt das Finale früher, ohne Voss’ Show."]},
   {t: "wege", x: [
    ["Beweise sichern", "Foto oder Video vom Tank, vom Lieferschein, von Robin → Esther gibt Bändchen, Imani wird zur Verbündeten."],
    ["Robin helfen", "Sie will eigentlich nur, dass niemand verletzt wird. Wer ihr verspricht, bei der Show aufzupassen, hat später eine Insiderin."],
    ["Sudsy befreien", "Ganz schlechte Idee. Ganz großartige Szene. Sofort *Schaumalarm*."],
    ["Ignorieren", "Kein Problem. Der Laster brummt weiter. Die Leiste tickt weiter."]
   ]},
   {t: "links", x: [["monster", "Sudsy (S. 124)"]]}
  ]},
  {id: "imani", t: "Imani", b: [
   {t: "vor", x: [
    "Vor dem Miper-Store, im einzigen Schatten der Promenade, steht eine Frau in einem perfekt gebügelten Hosenanzug und tippt auf einem Tablet. Sie schaut nicht hoch, als ihr näherkommt. „Ihr habt Staub an den Schuhen“, sagt sie. „Aus drei verschiedenen Welten. Interessant.“"
   ]},
   {t: "nsc", x: ["imani"]},
   {t: "p", x: "Imani prüft die Übernahme. Sie hat gehört, dass Voss „eine Überraschung“ plant, und sie hasst Überraschungen. Bringt die Crew ihr Beweise (Lieferschein, Fotos vom Tank, Robins Aussage), ist sie entsetzt – leise, aber gründlich."},
   {t: "wege", x: [
    ["Mit Beweisen", "VIP-Bändchen für alle (die besten Slots!) und eine Verbündete bei Miper. Sie versucht, die Show zu stoppen – und scheitert, aber das ist eine Geschichte für die Downtime."],
    ["Ohne Beweise", "„Interessant.“ Sie notiert sich eure Gesichter. Kein Bändchen."],
    ["Frech", "Wer Imani beleidigt oder anlügt, landet in ihrem Bericht. Miper: ein Feld Richtung *verärgert*."]
   ]}
  ]},
  {id: "probleme", t: "Probleme", b: [
   {t: "prob", key: "po", h: "Popularia-Probleme", x: [
    "Niemand sonst ist so angezogen wie ihr.",
    "Ihr hört eine Party, findet sie aber nicht.",
    "Ein Rivale verbreitet Lügen (Whiplash erzählt herum, ihr hättet den Clip aus dem Internet).",
    "Peelback-Countdown für eine Banane (Leiste *Peelback*).",
    "Miper-Sicherheitsdrohnen.",
    "Die Alte Garde beobachtet und bewertet euch.",
    "Leute grinsen, und ihr wisst nicht, warum (Schaumflocke auf dem Kopf).",
    "Die dichte Menge lässt euch nicht durch."
   ]},
   {t: "leiste", id: "peel"}
  ]}
 ]},

 {id: "jam", t: "Der Jam", kurz: "Zwölf Stufen, ein Geländer, die halbe Szene schaut zu.", u: [
  {id: "hubba", t: "Die Hubba", b: [
   {t: "vor", x: [
    "Die 12-Stufen-Hubba ist kleiner, als ihr dachtet. Und größer. Zwölf ausgetretene Betonstufen, ein Absatz aus abgewetztem Granit, Kanten, die von zwanzig Jahren Grinds glänzen wie Kerzenwachs. Ringsum: Leute auf Mauern, auf Laternen, auf den Schultern anderer Leute.",
    "Corey thront auf einem Rettungsschwimmer-Hochstuhl, Camcorder in der einen Hand, Megafon in der anderen. Neben ihm, auf einer kleinen Bühne mit Miper-Logo, bauen Techniker etwas auf, das aussieht wie ein Käfig aus Licht."
   ]},
   {t: "nsc", x: ["corey"]},
   {t: "info", h: "Coreys Regeln", x: ["Jede Crew ein Slot an der Hubba. Gefilmt werden darf aber überall auf dem Weg – „ein Clip ist eine Geschichte, kein Trick“.", "Er bewertet **Spot**, **Trick** und **Seele**. Werbung, Logos in die Kamera und Gimmicks: sofort Minuspunkte.", "Abgabe: bis die Sonne das Meer berührt."]},
   {t: "p", x: "Ohne Bändchen: kein Slot. Corey zuckt mit den Schultern. „Regeln.“ (Man kann ihn trotzdem überzeugen – mit Seele.)"}
  ]},
  {id: "brb", t: "BRB", b: [
   {t: "vor", x: [
    "Am Fuß der Treppe steht BRB mit einem Klemmbrett. K-jump hakt Namen ab, Bez hat die Augen geschlossen und bewegt die Füße, als würde er im Kopf Tricks durchgehen. Whiplash entdeckt euch und grinst. „Die Grom-Line-Crew! Ihr habt’s echt geschafft.“ Er tippt auf das Klemmbrett. „Die Slots im Abendlicht sind leider vergeben. An uns.“"
   ]},
   {t: "nsc", x: ["brb"]},
   {t: "p", x: "Whiplash ist ein schlechter Verlierer und kann keiner Herausforderung widerstehen. Wer die Abendlicht-Slots will, muss sie ihm abnehmen: **Game of HUBBA**."},
   {t: "info", h: "Game of HUBBA", x: ["Wie Game of SKATE: Eine Seite legt einen Trick vor, die andere muss ihn nachmachen.", "Crew verpatzt (1–3): 1 Buchstabe auf *HUBBA – Crew*. BRB verpatzt einen Trick der Crew: 1 Buchstabe auf *HUBBA – BRB* (SL würfelt für BRB; je verrückter der vorgelegte Trick, desto eher scheitern sie).", "Wer zuerst HUBBA hat, verliert. Gewinnt die Crew: Abendlicht-Slots und Respekt (BRB: ein Feld Richtung *freundlich*). Verliert sie: Whiplash erzählt es überall."]},
   {t: "leiste", id: "hubbaC"},
   {t: "leiste", id: "hubbaB"},
   {t: "links", x: [["fraktionen/crews", "BRB & andere Crews"]]}
  ]},
  {id: "clip", t: "Der Clip", b: [
   {t: "p", x: "Jetzt wird gefilmt. Jeder gelandete Trick an einem guten Spot markiert *Der Clip* – Kick bringt mehr (S. 19). Tricks sind gefährlich: Probleme werden schlimmer (S. 23)."},
   {t: "leiste", id: "clip"},
   {t: "trick", x: [
    "Boardslide das ganze Geländer runter, über die Köpfe der Menge.",
    "Gap über alle zwölf Stufen – Corey steht auf seinem Hochstuhl auf.",
    "Mitten durch Wilkie’s Promo-Dreh mit einer anderen Crew und einer Menge Models.",
    "Über einen Metasaurier, den jemand erstaunlich Extravagantes Gassi führt.",
    "Die legendären Banks hinunter zum Strand und rauf auf die perfekte Riff-Welle."
   ]},
   {t: "info", h: "Was Corey mag", x: ["Hommage an die Geschichte (ein Trick, den die Scram-Cat-Gründer berühmt gemacht haben).", "Echte Freundschaft im Bild (die Crew feiert sich gegenseitig).", "Etwas, das er noch nie gesehen hat. Zum Beispiel ein Seifenmonster."]},
   {t: "prob", key: "ja", h: "Probleme am Jam", x: [
    "Jemand drückt euch das Mikro in die Hand – Live-Interview, jetzt.",
    "Ein Fan läuft euch beim Landen direkt ins Bild.",
    "Akku leer, Speicherkarte voll, Linse voller Sand.",
    "BRB „leiht“ sich euren Slot, weil ihr zu spät seid.",
    "Miper-Techniker testen den Lichtkäfig, und eure Boards spinnen kurz.",
    "Robin taucht auf, kreidebleich: „Habt ihr Sudsy gesehen?“ (nur, wenn *Sudsys Tank* fast voll ist)"
   ]}
  ]}
 ]},

 {id: "finale", t: "Schaumalarm!", kurz: "Sonnenuntergang. Voss betritt die Bühne. Was soll schon schiefgehen?", u: [
  {id: "show", t: "Voss’ Show", b: [
   {t: "p", x: "Das Finale beginnt, wenn *Sonnenuntergang* oder *Sudsys Tank* voll ist – oder wenn die Crew Sudsy selbst befreit. Ist der Tank zuerst voll, überspring die Show und schneide direkt zum Ausbruch."},
   {t: "nsc", x: ["voss"]},
   {t: "vor", x: [
    "Die Sonne berührt das Meer. Die Musik bricht ab. Auf der kleinen Bühne steht plötzlich ein Mann in einem schwarzen Rollkragenpullover, mit Headset und einem Lächeln, das bestimmt teuer war.",
    "„Popularia.“ Pause für Applaus. Es gibt keinen. „Slugblasting ist Freiheit. Slugblasting ist Mut. Aber Slugblasting ist auch …“ – er zeigt auf die Menge – „… *gefährlich*. Deshalb präsentiere ich euch heute die Zukunft.“",
    "Hinter ihm fährt der weiße Laster rückwärts an die Bühne. Die Hecktür öffnet sich. „Miper Sauber®. Slugblasting. Aber sauber.“"
   ]},
   {t: "vor", x: [
    "Der Tank kippt. Eine Welle aus schillerndem Schaum rollt in den Lichtkäfig, und darin richtet sich etwas auf – zwei Meter, drei, vier. Zwei Seifenblasen-Augen drehen sich über die Menge. Über tausend verschwitzte Teenager. Über Infinite Pizza. Über euch.",
    "Sudsy blubbert. Dann quietscht es wie hundert nasse Turnschuhe. Der Lichtkäfig flackert. Und platzt."
   ]},
   {t: "links", x: [["monster", "Sudsy (S. 124)"]]}
  ]},
  {id: "sudsy", t: "Sudsy", b: [
   {t: "nsc", x: ["sudsy"]},
   {t: "leiste", id: "sudsy"},
   {t: "info", h: "Wie man Sudsy stoppt", x: ["**Viel Wasser:** das Meer, die Riff-Welle, der Pool der heißen Leute, die Sprinkleranlage des Miper-Stores.", "**Öl:** Die Fritteusen von Infinite Pizza. Marley (Old Guard) hat drei Fässer Altöl im Hinterhof.", "**Mipers Drohnen:** Ein Hack (Smarts!) dreht sie um – statt Sudsy zu fangen, drängen sie es Richtung Meer.", "**Lavendel:** Robins Kiste beruhigt es für einen Moment.", "**Nicht:** kleine Mengen Wasser (Wasserpistolen, Getränke) – die machen es größer. Normale Laser zerplatzen nur Blasen."]},
   {t: "prob", key: "su", h: "Sudsy greift an", x: [
    "Durchnässt dich mit Reinigungsmittel: *glitschig*, *geblendet*, *ätzende Ausrüstung*.",
    "Schwillt zu wütendem Schaum an und verdoppelt seine Größe.",
    "Tropft durch Risse im Boden und taucht hinter euch wieder auf.",
    "Treibt die Menge in wachsende Schaumhaufen – jemand muss gerettet werden.",
    "Entdeckt Infinite Pizza. Das Fett! Es wird *riesig*.",
    "Umhüllt jemanden komplett und will mit ihm irgendwohin, wo es in Ruhe schrubben kann."
   ]},
   {t: "p", x: "Nutze zu Beginn Probleme, um die Lage zu verschärfen (Snags), danach für Slams (S. 158). Sudsy ist zu groß für einen Kampf – die Crew muss es irgendwohin bringen."}
  ]},
  {id: "jagd", t: "Die Verfolgung", b: [
   {t: "p", x: "Sobald die Crew einen Plan hat (oder Sudsy sie als dreckigste Menschen am Strand auswählt): „Es jagt euch! Wohin fahrt ihr?“ – Verfolgung (S. 158). **Ziel:** das Meer. **Einsatz:** Wer verliert, wird von Sudsy eingehüllt und abgeschrubbt (zwei Slams, und der Clip ist nass)."},
   {t: "leiste", id: "schaum"},
   {t: "wp", x: [
    ["Die schlängelnde Promenade", "Schaum quillt aus den Gullys. Die Menge rennt in alle Richtungen."],
    ["Die summende Schlange vor dem Sneaker-Laden", "Hundert Leute, die ihren Platz nicht aufgeben wollen. Nicht mal jetzt."],
    ["Heiße Leute am Pool", "Ein ganzer Pool voller Wasser – Sudsy ins Becken = 2 Felder *Sudsy bändigen*. Aber die heißen Leute sind sauer."],
    ["Wilkie’s Promo-Dreh", "Kameras, Models, eine Rampe aus Pappe. Perfekt für einen Trick. Wilkie’s filmt alles mit."],
    ["Die legendären Banks zum Strand", "Vollgas runter. Unten wartet die perfekte Riff-Welle."]
   ]},
   {t: "trick", x: ["Jeder Trick während der Verfolgung, den jemand filmt: **+1 *Der Clip*** (mit Kick +2). Das ist der Clip des Jahres.", "Robin oder Corey können filmen, wenn die Crew keine Hand frei hat."]},
   {t: "res", x: [
    ["Sudsy im Meer", "Es löst sich in einer riesigen, schillernden Welle auf. Der Strand schimmert noch tagelang. Jubel. Corey hat alles drauf."],
    ["Sudsy gebändigt", "Mit Öl, Lavendel oder Drohnen eingefangen. Robin weint vor Erleichterung. Was passiert jetzt mit Sudsy?"],
    ["Sudsy entkommt", "Es tropft in einen Gully und ist weg. Irgendwohin. Wer weiß, wohin. (Haken für später!)"]
   ]}
  ]}
 ]},

 {id: "heimweg", t: "Heimweg", kurz: "Popularia spuckt euch aus. Hillview wartet – und eure Eltern.", u: [
  {id: "zurueck", t: "Zurück nach Null", b: [
   {t: "p", x: "Die Portale waren einseitig (S. 92). Entweder findet die Crew eine Rückweg-Zone nach Null (eine eigene kleine Line), oder sie lässt sich vom **Peelback** (S. 93) zurückreißen – unerträglich intensiv, aber schnell."},
   {t: "vor", x: [
    "Das Ziehen beginnt hinter dem Bauchnabel. Popularia wird blass, dann durchsichtig, dann ist es, als würde euch jemand rückwärts durch einen Strohhalm saugen. Farben, die es nicht gibt. Ein Geräusch wie ein Dial-up-Modem in eurem Kopf.",
    "Dann: Gras. Feuchtes, langweiliges Gras. Der Wasserturm von Hillview. Es ist dunkel. Irgendwo bellt ein Hund. Euer Handy vibriert. Siebzehn verpasste Anrufe."
   ]},
   {t: "h", x: "Disaster-Würfe"},
   {t: "p", x: "Jetzt (oder schon auf dem Heimweg) macht jeder einen Disaster-Wurf (S. 21): 1W6 pro leerem Trouble-Kästchen, höchstes Ergebnis zählt."},
   {t: "res", x: [
    ["6", "Easy Street. Markiere 1 Style."],
    ["4–5", "Close Call! Markiere 1 Trouble."],
    ["1–3", "Disaster! Etwas wirklich Schlimmes passiert (S. 155). Markiere Doom."]
   ]},
   {t: "prob", key: "hw", h: "Disaster-Ideen für heute", x: [
    "Karen von Doorways hat euer Video von der Kiesgrube in die Eltern-WhatsApp-Gruppe gestellt.",
    "Ein Schaumflocken-Sudsy-Ableger ist mit euch nach Null gekommen. Er wohnt jetzt im Hillview Aquatic Centre.",
    "Officer Koop wartet am Wasserturm. Mit Karteikarte.",
    "Dein Board hat Sudsys Reinigungsmittel abbekommen und ist blitzsauber. Und tot.",
    "Omas 80. ist vorbei. Alle haben nach dir gefragt.",
    "Imanis Bericht nennt euch beim Namen."
   ]}
  ]},
  {id: "aufraeumen", t: "Aufräumen", b: [
   {t: "p", x: "Slams löschen, Style verteilen, Fraktionen anpassen (S. 13)."},
   {t: "res", x: [
    ["Scram Cat", "Sudsy gestoppt oder Esthers Deal erfüllt: ein Feld Richtung *freundlich*. Laden beschädigt: Esther seufzt sehr laut."],
    ["Miper", "Show sabotiert oder Beweise an die Öffentlichkeit: ein Feld Richtung *verärgert*. Imani geholfen: Imani persönlich ist euch etwas schuldig."],
    ["BRB", "Game of HUBBA gewonnen: *freundlich* (Respekt). Verloren und gemeckert: *Rivalen*."],
    ["The Old Guard", "Coreys Urteil (siehe Downtime)."],
    ["DARA / Doorways", "Je nachdem, wie ihr an der Kiesgrube aufgetreten seid."]
   ]}
  ]}
 ]},

 {id: "downtime", t: "Downtime", kurz: "Die Woche danach. Das Cover. Die Folgen. Die Beats.", u: [
  {id: "urteil", t: "Coreys Urteil", b: [
   {t: "vor", x: [
    "Montag, 7:43 Uhr, Gas Top. Die Slush-Maschine ist repariert. Gary schiebt euch kommentarlos die neue Ausgabe des *Slugblaster Magazine* über die Theke. Die letzte mit dem Scram-Cat-Logo.",
    "Ihr schlagt sie auf."
   ]},
   {t: "res", x: [
    ["Clip 0–3", "Eine Zeile im Kleingedruckten: „Auch dabei: eine Crew aus Null. Mutig.“ Nichts weiter."],
    ["Clip 4–5", "Namentlich erwähnt (S. 26): **+5 Crew-Style**. Ein Standbild, ein Satz von Corey: „Da geht noch was.“"],
    ["Clip 6 (voll)", "**Das Cover.** Mega-Preis: 5 Crew-Style, Gunst von The Old Guard, das Scram-Cat-Abschiedsboard. Corey schreibt: „Die erste Crew, die ich lachen gesehen habe, während ein Seifenmonster sie jagt.“"],
    ["Sudsy im Clip", "Egal, wie voll die Leiste ist: Wer Sudsy im Bild hat, landet mindestens auf Seite 3 – mit der Überschrift „SAUBERE SACHE“."]
   ]}
  ]},
  {id: "beats", t: "Beats", b: [
   {t: "p", x: "Jetzt geben alle Trouble und Style für Beats aus (S. 24). Ideen, die direkt aus dieser Folge kommen:"},
   {t: "ul", x: [
    "**Familien-Bogen:** Die Eltern-WhatsApp-Gruppe hat Karens Video. Oder deine Mutter hat das Magazin-Cover gesehen – und ist heimlich stolz.",
    "**Angst-Bogen:** Du warst einen Moment lang komplett in Schaum eingehüllt. Du riechst seitdem überall Lavendel.",
    "**Crew-Beat:** Das Bild vom Cover hängt jetzt in eurem Hangout. Wer steht vorne, wer ist nur halb drauf?",
    "**In der Werkstatt:** Aus dem Hartlicht-Käfig ist ein Teil abgefallen. Was kann man daraus bauen?",
    "**Portal-Entdeckung:** Ihr kennt jetzt die Miper-Bahn durch Prismatia."
   ]}
  ]},
  {id: "haken", t: "Haken", b: [
   {t: "p", x: "Ideen für die nächsten Folgen – nimm, was zur Crew passt:"},
   {t: "ul", x: [
    "**Robin** steht vor eurer Tür: gefeuert. Und sie hat einen Schuhkarton dabei, aus dem es blubbert.",
    "**Imani** bietet einer oder einem von euch das Miper-Young-Genius-Stipendium an. Kleingedruckt: „exklusive Testfahrerrechte“.",
    "**BRB** will Revanche. Ein Speedrun durch fünf Welten, Verlierer trägt eine Woche lang das Logo der anderen Crew.",
    "**Die Übernahme** ist geplatzt – vorerst. Ken und Esther brauchen Geld, schnell. Vielleicht ein Benefiz-Jam in Hillview?",
    "**Das Hillview Aquatic Centre** wird für die halbjährliche Reinigung geschlossen. Diesmal früher als geplant. Irgendwas schrubbt dort nachts die Fliesen."
   ]}
  ]}
 ]}
];
