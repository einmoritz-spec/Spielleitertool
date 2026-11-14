/* ---------- Adventure 2 : full scene data ---------- */

const A2_SCENES = [

/* 0 ---------------------------------------------------------- INTRO */
{
  key:"intro", kind:"intro", page:"S. 333–336",
  title:"Überblick", en:"An Important Letter",
  summary:"Hintergrund, Schreine, Zusammenfassung & Hooks",
  overview:[],
  readAloud:[
    { page:"S. 333", label:"Eröffnung des Abenteuers — Der Year Walk", text:
      `Der Year Walk ist eine Pilgerfahrt durch die gebirgige Region der Dales, eine Reise von verborgenem Schrein zu heiliger Stätte, unternommen von jenen, die ihre Verbindung zu den Oldways, den dalischen Volkstraditionen, vertiefen wollen.

Nun ist ein Brief von großer Bedeutung eingetroffen, für einen dieser Pilger – einen Pilger, der bereits gut unterwegs ist zu einem der vielen Schreine von Ashstone, einer rauen Gegend aus Hügeln, Schluchten und Steinbrüchen. Die dringende Nachricht, versiegelt mit den Zeichen der Oldways, kann nicht Monate oder Jahre auf seine Rückkehr warten. Und so liegt es an einigen unerschrockenen Seelen, dem Pfad des Pilgers zu folgen und seine Post mitten unter den geheimnisvollen Relikten der Oldways zu überbringen.` },
  ],
  flow:[
    `Als Teil von <em>Wake of the Oldways</em> führt dieses Abenteuer die Helden aus ihrem Heimat-Dale hinaus nach <span class="gloss" onclick="openGloss('ashstone')">Ashstone</span>, um die Menschen dort und ihr Verhältnis zu den Oldways kennenzulernen. Es ist dafür gedacht, ganz natürlich auf <em>A Shadow in the Barley</em> zu folgen, und kann dank der Informationen in den Briefen leicht in mehrere andere Abenteuer überleiten.`,
    `<span class="section-heading">Hintergrund</span>`,
    `Die Zeit wartet auf niemanden – am wenigsten auf <strong><span class="gloss" onclick="openGloss('walric-hywell-ref')">Walric Hywell</span></strong>. Ein Schreiben von großer Tragweite ist in Ravenhome für einen Pilger namens Walric Hywell eingetroffen. Walric hat den <span class="gloss" onclick="openGloss('year-walk')">Year Walk</span> angetreten (S. 61), eine beschwerliche einjährige Pilgerfahrt zu den vielen Oldways-Schreinen in den Dales. Leider ist Walric schon viele Tage von Ravenhome fort. Der Inhalt des Briefes ist wichtig genug, dass Ravenhomes Alderman beschließt, jemanden zu schicken, der Walric einholt.`,
    `Walric ist inzwischen auf dem Weg in das schroffe, felsige Buschland von Ashstone (S. 77). Er ist ein bärtiger Landstreicher von fünfzig Jahren, ein Praktizierender der Oldways, bewandert in nützlichen Beschwörungen und Zaubern.`,
    `<span class="callout"><span class="co-title">Walrics Pilgerfahrt</span>Ursprünglich war Walric ein Bannwirker aus <span class="gloss" onclick="openGloss('upper-hartland')">Upper Hartland</span>. Den strapaziösen Year Walk trat er nach einer persönlichen und beruflichen Tragödie an: Die Oldways-Schutzbanne, die er jahrzehntelang auf dieselbe Weise angebracht hatte, konnten die Familie in einem Haus in Upper Hartland nicht schützen. Etwas (vielleicht eine <span class="gloss" onclick="openGloss('hexia')">Hexia</span>, S. 292) aus dem Witchwood griff sie gewaltsam an. Menschen starben, und ihr Hof wurde zu Asche niedergebrannt – trotz seiner Schutzbanne. Nach einer Zeit tiefer Trauer machte sich Walric auf einen Year Walk, in der Hoffnung, Einblick in die Wurzeln der Oldways zu gewinnen und zu verstehen, warum sie ihn im Stich gelassen haben.</span>`,
    `<span class="section-heading">Die Schreine des Year Walk</span>`,
    `Auf seinem Year Walk begegnet Walric einer Reihe von Oldways-Schreinen – verborgenen Naturorten, an denen ein Steinhügel, ein Altar, eine Inschrift oder eine Statue errichtet wurde. Jeder dieser besonderen Orte wurde im Lauf von Hunderten von Jahren von dalischen Oldways-Praktizierenden angelegt oder gekennzeichnet. Viele von ihnen sind mit einer Lehre oder Tugend der Oldways verbunden (<em>Was die Dalish schätzen</em>, S. 55).`,
    `Jeder Schrein behandelt ein anderes Thema und hat mehrere Bedeutungsebenen: Eine ist leicht und eingängig, andere sind esoterisch und vertrackt. Durch diese Schreine wollten die ersten Praktizierenden der Oldways ihr Wissen über die Zeitalter hinweg an künftige Thaumaturgen weitergeben. Ist ein Schrein erst entschlüsselt, stellt er eine implizite Herausforderung – und wer sie annimmt, dem wird eine Gnade („grace“) zuteil.`,
    `<span class="section-heading">Zusammenfassung</span>`,
    `An einem Frühlingstag trifft in Ravenhome eine Handelskarawane mit einem Brief für einen Pilger ein, der nicht mehr im Dale ist (<em>A Missed Connection</em>). Die Helden werden gebeten, Walric zu finden und ihm den Brief zu überbringen, und machen sich <em>On the Road to Ashstone</em> auf den Weg.`,
    `Bei einer Begegnung am Straßenrand mit <em>A Fellow Traveler in Need</em> haben sie die Gelegenheit, Verdan zu retten, der sich ihnen für eine Weile anschließt.`,
    `Die Gefährten stoßen auf den <em>Winds' Flute Shrine</em> und entdecken Notizen von Walric, die ihnen den Weg weisen. Danach folgen sie seinen Spuren, die er in jedem Schrein seines Year Walk hinterlassen hat.`,
    `Die Gefährten legen einen <em>Stopover in Willow Falls</em> ein, einem abgelegenen Dorf, in dem Fremde kaum willkommen sind. Nachdem sie von Walrics Plänen erfahren haben, besuchen sie den <em>Waterfall Shrine</em> unterhalb des Plateaus, auf dem Willow Falls liegt – nur über einen tückischen Aufstieg zu erreichen.`,
    `Ein Stück weiter östlich wartet der <em>Gwyrwich Quarry Shrine</em>, in dem sich eine eindringende Kreatur des Zwielichts eingenistet hat. Schließlich erreichen die Helden den <em>Cloven Oak Shrine</em>, wo sie Walric treffen, der versucht, seine Suche abzuschließen, aber scheitert; mit ihrer Hilfe werden Wahrheiten offenbart, und alle werden Zeugen einer wundersamen Vision.`,
    `<span class="callout"><span class="co-title">Was steht im Brief?</span>Der Brief – oder das Bündel von Briefen – enthält ein dringendes Gesuch an Walric von einer Person in Not, einer Oldways-Praktizierenden, die vom Zwielicht in ihrer Gegend berichtet. Nutze diese Berichte, um deine Helden zum nächsten Abenteuer zu lenken:<br>• Radmila schreibt über den Einbruch in ihr Teehaus Milkrest (<em>A Fox in the Dales</em>)<br>• Yule der Waldsänger schreibt über seltsame Bestien, die Abnoba Keep aus den Craggy Highlands angreifen (<em>The Painted Beast</em>)<br>• Jaro der Böttcher aus Woodend schreibt über beunruhigende Träume in Millside (<em>The Green Maiden</em>)<br>Der Brief könnte auch von einem Roten Marschall oder einem Hausierer stammen, der alle diese Berichte zusammengetragen hat, um sie Walric zu schicken.</span>`,
  ],
  npcs:[],
  extra:{ heading:"Hooks", type:"list", items:[
    "Die Helden sind mit der Aufgabe betraut oder ihr verpflichtet worden — vielleicht die ganze Gruppe zugleich.",
    "Ein Hero kennt Walric persönlich, etwa als Freund oder Kollege — ein Mann, der altes Wissen und die Oldways-Lehren liebt.",
    "Ein Hero ist Oldways-Praktizierende(r) und sucht ohnehin seit einer Weile Walrics Rat — die Gelegenheit, ihn einzuholen, kommt gerade recht.",
    "Die Familie eines Heros ist mit Walrics Familie verbündet oder steht in ihrer Schuld.",
  ]},
  challenges:[],
  revelations:[],
  tips:["<em>An Important Letter</em> ist ein gemütliches Reiseabenteuer, inspiriert von Journey-Animes. Die Helden reisen durch eine schöne, schroffe Gegend von Schrein zu mystischem Ort, genießen die Ausblicke, helfen anderen Reisenden und lernen über sich selbst, indem sie sich mit den Überresten der Oldways auseinandersetzen. Es ist kampffrei (auch wenn ein Kampf mit der örtlichen Tierwelt ergänzt werden kann) und konzentriert sich auf die Herausforderungen der Straße, soziale Begegnungen und mystische Rätsel."],
},

/* 1 ---------------------------------------------------- MISSED CONNECTION */
{
  key:"missed", kind:"scene", page:"S. 335",
  title:"Eine verpasste Begegnung", en:"A Missed Connection",
  summary:"Die Helden übernehmen die Zustellung des Briefs",
  overview:[],
  readAloud:[
    { page:"S. 335", label:"Aufbruch nach Ashstone", text:
      `Der Frühling ist mit Macht ins Ravensdale eingekehrt. Das Rattern der Wagen kündet von der Ankunft eines Handelszuges, des ersten in dieser Saison, beladen mit Waren und Vorräten aus anderen Teilen der Dales: gutes Holz, feines Werkzeug, Saatgut, breitkrempige Hüte und vielerlei andere Dinge. Ein junger Bursche, vielleicht zwölf oder dreizehn Jahre alt, springt von einem der Wagen, einen kleinen Sack über der Schulter – Briefe, die mit der Karawane mitgeschickt wurden – und hält Ausschau nach dem Dorfältesten.` },
  ],
  flow:[
    `Ein Handelskarawanenjunge bringt den Brief nach Ravenhome — zu spät für Walric, der bereits aufgebrochen ist, Richtung Norden auf der Straße nach <span class="gloss" onclick="openGloss('ashstone')">Ashstone</span>, zu einem Schrein direkt am Wegesrand. <span class="gloss" onclick="openGloss('alderman-beaks-ref')">Alderman Beaks</span> (oder eine vergleichbare Respektsperson) übernimmt den Brief und beauftragt die Helden mit der Zustellung — schließlich zieht die Karawane selbst weiter nach Westen, zurück zur Hochstraße, und niemand sonst ist ohnehin bald auf dem Weg nach Ashstone unterwegs. Das Wachssiegel des Briefs kennzeichnet ihn eindeutig als für eine Weise Eine bestimmt, was die Dringlichkeit unterstreicht.`,
    `<strong>Unklare Reihenfolge:</strong> Niemand weiß genau, in welcher Reihenfolge Walric die Schreine besuchen wird — jede Person auf einem Year Walk ist von ihrer eigenen Route inspiriert.`,
    `<span class="callout"><span class="co-title">Vorbereitung auf die Reise</span>Vor dem Aufbruch können die Helden sich noch ausrüsten — wie lange das dauert, ist offen, aber das raue Ashstone bietet kaum gastliche Unterkünfte, die Gruppe sollte sich also auf Nächte im Freien einstellen. Mitglieder der Handelskarawane sind die Straßen nach Ashstone schon gereist und können nützliche Tipps geben. Optional lässt sich hier eine <span class="gloss" onclick="openJourneyBySlug('provisioning')">Provisioning Journey</span> (Core Book II, S. 196) einschieben, um die Szene zu verlängern und ein paar zusätzliche (hilfreiche wie hinderliche) Tags zu vergeben.</span>`,
    `<span class="callout"><span class="co-title">Den Brief öffnen?</span>Es ist möglich, den Brief vorzeitig zu öffnen, sofern jemand lesen kann — er enthält allerlei wichtige Neuigkeiten aus den Dales. Zeigen sich die Charaktere dabei ehrenhaft, empfinden sie vermutlich guilty-3 dafür, das Siegel gebrochen zu haben; kommt es heraus, drohen ill-repute-2. Eine geheimnisvolle, wachsame Kraft könnte sie zudem mit cursed-1 belegen, bis sie ihr Unrecht wiedergutmachen und den Brief bei Walric abliefern.</span>`,
    `<strong>Wer ist Walric überhaupt?</strong> Ein Hero, der selbst die Oldways praktiziert, hat vermutlich schon von <span class="gloss" onclick="openGloss('walric-hywell-ref')">Walric Hywell</span> gehört. Andere können beim Alderman, den Dorfbewohnern oder den Karawanenleuten nachfragen, um mehr über ihn zu erfahren, bevor die Gruppe aufbricht.<br><br><strong>Alderman Beaks</strong> <em>(Auftraggeber)</em> — Beauftragt die Helden damit, Walric auf seinem Year Walk einzuholen und ihm den Brief zu überbringen.`,
  ],
  npcs:[],
  challenges:[],
  revelations:[],
  tips:[],
},

/* 2 ------------------------------------------------- ROAD TO ASHSTONE */
{
  key:"road", kind:"scene", page:"S. 337",
  title:"Auf dem Weg nach Ashstone", en:"On the Road to Ashstone",
  summary:"Reise-Journey über den Bergpass",
  overview:[],
  readAloud:[
    { page:"S. 337", label:"Auf dem Weg nach Ashstone", text:
      `Ihr erklimmt den Bergpass zwischen dem Ravensdale und Ashstone an einem herrlichen Frühlingsmorgen. Hinter euch lasst ihr die vertrauten Felder, Wälder und Hänge des Ravensdale zurück und erblickt vor euch eine weite Wildnis, felsig und von Gestrüpp überzogen, mit sanften Vorbergen und Mooren, die sich von Greyback dem Wolf herabziehen. Die stille, majestätische, schneebedeckte Bergkette erhebt sich schweigend zu eurer Linken und streift langsam ihr weißes Winterkleid im Wind ab.

Wolken segeln gemächlich über das weite Blau des Himmels. Weit und breit ist keine Menschenseele zu sehen, obwohl ihr in der Ferne meint, das Läuten einer Hirtenglocke zu hören, mit der eine Herde zusammengerufen wird. Ein hoffnungsvolles Gefühl durchflutet eure Brust. Es ist ein guter Tag, um unterwegs zu sein.` },
  ],
  flow:[
    `Diese Reise wird als Journey gespielt: Vor jeder Zwischenstation spielt ihr zwei bis drei Vignetten, gemischt aus den drei passenden Journey-Landschaften für diese Strecke — <span class="gloss" onclick="openJourneyBySlug('travel-on-dalish-roads')">Travel on Dalish Roads</span> (S. 268, solange der Weg noch befestigt ist), <span class="gloss" onclick="openJourneyBySlug('windswept-farmlands')">Windswept Farmlands</span> (Core Book II, S. 128–129, für die offenen Weiden und Äcker von <span class="gloss" onclick="openGloss('ashstone')">Ashstone</span>) und <span class="gloss" onclick="openJourneyBySlug('rambling')">Rambling</span> (S. 276, sobald der Weg von befestigten Pfaden abweicht). Unten findest du für jede Landschaft eigene Vignetten zur Auswahl.`,
    `Der Weg ist zwar vergleichsweise sicher, aber das Gelände anspruchsvoller als die sanften Feldwege des <span class="gloss" onclick="openGloss('ravensdale')">Ravensdale</span> — lose Steine, steile Anstiege, und weiter draußen offene, windgepeitschte Weideflächen ohne schützendes Blätterdach. Besonders wenn die Helden nie zuvor weit von ihrem Heimatdorf fort waren, stellt diese Reise sie erstmals vor die Härten der Welt jenseits der eigenen Schwelle.
<ul>
<li>Ablenkung durch ein ungewöhnliches Tier lässt jemanden auf einem Stein ausrutschen (skinned-knee-1 oder bruised-ego-1).</li>
<li>Es dauert quälend lange, einen passenden Rastplatz für die Mittagspause zu finden (hungry-2).</li>
<li>Der gewundene Pfad zieht sich endlos hin (bored-2).</li>
</ul>`,
    `<span class="callout"><span class="co-title">TIME PASSES — Die Zeit läuft</span>Während die Helden versuchen, Walric einzuholen, ist der Lauf der Zeit spürbar. time-passes-Statuse hindern sie zwar nicht daran, ihn letztlich einzuholen, lassen sich aber später in andere Statuse derselben Stufe übersetzen — Erinnerungen jener, die Walric nur flüchtig bemerkt haben, könnten verblasst sein, oder von ihm hinterlassene Notizen könnten inzwischen verwischt oder unleserlich geworden sein.</span>`,
    `Der vermeintliche „Donnerschlag“ am Ende des Vorlesetexts ist in Wahrheit ein Steinschlag — und der Hilferuf danach führt direkt in die nächste Szene, <strong>Ein Weggefährte in Not</strong>.`,
  ],
  vignettes:[
    { name:"Travel on Dalish Roads — Rast an der Wegkreuzung", flavor:"An einer alten, von Moos überwucherten Wegmarke aus gwyrdolanischem Stein treffen sich mehrere Pfade. Ein paar Reisende haben hier ihr Lager für eine kurze Pause aufgeschlagen.", options:[
      "Ihr tauscht Neuigkeiten und Gerüchte aus den umliegenden Dörfern — nützlich, aber es kostet Zeit (time-passes-1).",
      "Ein Händler bietet euch abgestandene Ware zu überteuerten Preisen an; lehnt ihr höflich ab, wird er reserviert (ignored-1 für ihn) oder ihr lasst euch breitschlagen (short-on-supplies-1).",
      "Die vielen Unebenheiten des alten Pflasters fordern ihren Tribut (stiff-1 oder skinned-knee-1).",
    ]},
    { name:"Travel on Dalish Roads — Das Gasthaus am Scheideweg", flavor:"Ein windschiefes, aber gemütlich wirkendes Gasthaus liegt am Rand des Weges, Rauch kräuselt sich aus dem Schornstein.", options:[
      "Eine warme Mahlzeit und ein Dach über dem Kopf tun gut (well-fed-2), doch die Rast frisst Zeit (time-passes-1).",
      "Ein geschwätziger Gast erzählt euch mehr, als euch lieb ist, über die Gefahren des Weges voraus (worried-1).",
      "Der Wirt verlangt einen unverschämten Preis, und ihr müsst feilschen oder zahlen (short-on-supplies-1 oder frustrated-1).",
    ]},
    { name:"Windswept Farmlands — Sturmböen über den Feldern", flavor:"Kaum verlasst ihr den Schutz der letzten Bäume, packt euch ein unablässiger Wind, der über die weiten, offenen Äcker von Ashstone fegt.", options:[
      "Der Wind reißt an Umhängen und Hüten — etwas Leichtes könnte fortfliegen (scratch ein loses Item-Tag).",
      "Staub und Ährenspreu stechen euch in die Augen (blurred-vision-1).",
      "Ihr müsst euch gegen den Wind stemmen, was Kräfte kostet (tired-1).",
    ]},
    { name:"Windswept Farmlands — Ein einsames Gehöft", flavor:"Zwischen den Feldern steht ein einzelnes Gehöft, die Fensterläden im Wind klappernd. Ob dort noch jemand wohnt, ist auf den ersten Blick nicht zu sagen.", options:[
      "Eine misstrauische Bäuerin beobachtet euch aus der Ferne, bis sie sicher ist, dass ihr weiterzieht (suspected-1).",
      "Ein streunender Hofhund begleitet euch bellend ein Stück des Weges (Exposure, falls ihr euch heimlich nähern wolltet).",
      "Ihr findet Unterstand vor dem Wind in einer offenen Scheune und könnt kurz verschnaufen (reduziert eine Erschöpfungs-Stufe).",
    ]},
    { name:"Rambling — Querfeldein durch Dickicht", flavor:"Der ausgetretene Pfad verliert sich zwischen Farnen und Gestrüpp; von hier an müsst ihr euch den Weg selbst suchen.", options:[
      "Ihr verliert vorübergehend die Orientierung (lost-2).",
      "Dornen und Äste hinterlassen Kratzer (bruised-1) oder reißen an der Kleidung (scratch ein Item-Tag).",
      "Ein unerwartet schöner Ausblick entschädigt für die Mühen und hebt kurz die Stimmung (reduziert einen negativen emotionalen Status um 1 Stufe).",
    ]},
    { name:"Rambling — Ein Bach quert den Weg", flavor:"Ein schmaler, aber überraschend kräftig strömender Bach versperrt den direkten Weg.", options:[
      "Beim Überqueren rutscht ihr aus und werdet nass und durchgefroren (cold-1 und sick-1).",
      "Ein Gepäckstück fällt ins Wasser und treibt ein Stück fort, bevor es geborgen werden kann (time-passes-1).",
      "Ihr findet eine trockene Furt weiter flussauf — kostet Zeit, aber keine weiteren Konsequenzen (time-passes-1).",
    ]},
  ],
  npcs:[],
  challenges:[],
  revelations:[],
  tips:[],
},

/* 3 --------------------------------------------------- FELLOW TRAVELER */
{
  key:"verdan", kind:"scene", page:"S. 337–338",
  title:"Ein Weggefährte in Not", en:"A Fellow Traveler in Need",
  summary:"Verdan wird unter Geröll befreit und begleitet die Gruppe",
  overview:[],
  readAloud:[
    { page:"S. 337", label:"Ein Weggefährte in Not", text:
      `Während ihr den steinigen Pfad am Hang entlangwandert, bemerkt ihr einen Wetterumschwung. Sturmwolken, schwer und lastend, ziehen von Norden heran. Kaum bleibt euch Zeit, über den nahenden Regen nachzudenken, da erschüttert ein rollender Donnerschlag die Stille – seltsamerweise, als käme er aus dem Boden selbst – gefolgt vom Grollen rollender Felsbrocken und einem Schmerzensschrei. Dann kehrt Stille ein, doch bald darauf hört ihr, wie jemand weiter unten am Pfad um Hilfe stöhnt.` },
  ],
  flow:[
    `In diesen beiden Szenen hilft die Gefährtenschaft zunächst <span class="gloss" onclick="openGloss('verdan-ref')">Verdan</span>, einem Weggefährten in Not, der in einem Steinschlag gefangen ist, und hat anschließend Gelegenheit, den trübsinnigen Fremden näher kennenzulernen.`,
    `<span class="section-heading">Ein plötzlicher Erdstoß</span>Nach dem „Donnerschlag" finden die Helden einen dunkelhaarigen jungen Mann, pinned-5 unter herabgestürzten Felsbrocken, der jedoch auffallend gefasst wirkt. Er stellt sich als <strong>Verdan</strong> vor und erzählt mit gequälten Seufzern, er habe töricht einen <strong>Trommelstein</strong> getreten — einen ortstypischen Stein, der beim Anschlagen einen Klang erzeugt — und damit den Erdstoß und den nachfolgenden Steinschlag ausgelöst.`,
    `Reduziert die Gruppe sein pinned, kann das selbst leichte Blessuren nach sich ziehen (tired-2, oder bruised-2 durch nachrutschende Steine) — am Ende kommt Verdan mit nichts als ein paar Prellungen davon (bruised-2). Verdan zeigt sich dankbar (appreciative-1) und bietet den Helden eine Bezahlung in Eisenmünzen an (hefty-purse-1); lehnt die Gruppe ab, wirkt er überrascht.`,
    `<span class="section-heading">Erste Eindrücke</span>Nun frei, verrät Verdan, dass er ein Bergmann aus dem Gwyrwich-Steinbruch sei, der die Gegend nach neuen Adern des resonanten Gesteins absucht. Er zeigt reges Interesse an der Reise der Helden und fragt nach ihrer Herkunft und ihrem Ziel (Exposure). Aufmerksame Helden könnten Folgendes bemerken:
<ul>
<li>Gelegentlich stellt er eine Frage, die grundlegendes dalisches Alltagswissen vermissen lässt.</li>
<li>Er hat einen leichten, möglicherweise helmischen Akzent (aus Stormhelm).</li>
<li>Ein Trommelstein-Bergmann würde eigentlich wissen, dass man keinen Trommelstein in einen Geröllhang tritt.</li>
<li>Unter einer freundlichen Fassade wirkt er seltsam kühl und distanziert.</li>
<li>Dennoch scheint er zu erwägen, sich der Gesellschaft der Helden anzuschließen.</li>
</ul>
Verdan bietet an, mit den Helden nach <span class="gloss" onclick="openGloss('willow-falls-ref')">Willow Falls</span> zu reisen, sofern sie diesen Weg nehmen — er führt ohnehin am Windflöten-Schrein vorbei.`,
    `<span class="section-heading">So kalt am Lagerfeuer</span>Bis die Helden Verdan befreit haben, bricht die Nacht herein — ein guter Zeitpunkt für eine Camping-Szene. Sie könnten seine Blessuren versorgen oder bei Essen und Gespräch am Feuer zusammensitzen. Diese Szene kann grundsätzlich auch zu jedem anderen Zeitpunkt stattfinden, an dem die Helden Zeit mit Verdan verbringen.
<strong>Verdan ist ein anziehender, aber trübsinniger junger Mann.</strong> Etwas an ihm spricht mindestens einen der Helden an — ein stiller Hilferuf, oder der geheimnisvolle Ruf des Schicksals. Die Szene dient nicht dazu, Verdans wahre Identität aufzudecken, sondern nur dazu, ihn ein Stück kennenzulernen. Sein mysterious-4 oder tight-lipped-4 macht es selbst außergewöhnlichen Helden kaum möglich, mehr über seine wahre Identität und Beweggründe herauszufinden. Hier ist, was sich in einem Gespräch mit Verdan herausfinden lässt.`,
    `<span class="section-heading">Verdans Wesen</span>
<ul>
<li>Im Gespräch zeigt sich Verdan mild expressiv und lebhaft — Begeisterung, Abscheu, Belustigung.</li>
<li>Diese Gefühle sind eine Fassade; er empfindet sie nicht wirklich, sondern „trägt" sie wie Masken für den gesellschaftlichen Umgang.</li>
<li>In den Momenten dazwischen, wenn sein Blick lange ins Feuer oder zum Horizont wandert, zeigt sich sein wahres, trübsinniges Wesen: ein Mann, der sich selbst aufgegeben zu haben scheint.</li>
</ul>`,
    `<span class="section-heading">Verdans Weltbild</span>
<ul>
<li>Auch seine Ansichten über Reisen, Abenteuer und das Leben sind gespielt — angepasst an das, was junge Leute seines Alters angeblich denken sollten.</li>
<li>Im Inneren glaubt er, dass Menschen zutiefst fehlerhaft sind — Bindungen wie Liebe und Freundschaft seien nur eine Falle, die Schmerz und Verrat garantiert.</li>
<li>Dieser Glaube wurzelt tief in seiner Vergangenheit und erfüllt sein Herz mit kalter Leere, sodass es ihm schwerfällt, für irgendjemanden etwas zu empfinden.</li>
</ul>`,
    `<span class="section-heading">Verdans Vergangenheit</span>
<ul>
<li>Irgendwann verrät Verdan vielleicht, dass er aus Stormhelm stammt und hierher geflohen ist, um dem Krieg im Norden gegen den Winterkönig zu entkommen, den Herrscher aller Geschöpfe der Dämmerung.</li>
<li>Einen Teil seiner Vergangenheit verbirgt er bewusst (mysterious-4 oder tight-lipped-4).</li>
</ul>
Verdan verfolgt in diesen Gesprächen eine eigene Agenda: Ein Teil von ihm möchte, dass die Helden glauben, was er glaubt, Zweifel säen und sie bitter-2 oder despaired-2 werden lassen — er hört aber auch aufmerksam zu, wenn die Helden von sich erzählen (Exposure). Er ist dabei nicht feindselig und will niemanden zu seiner Sicht zwingen. Insgeheim sehnt sich ein längst vergessener Teil von ihm nach Gesellschaft — ein Wunsch, der selbst ihm verborgen bleibt, begraben unter einer dicken Mauer aus emotionalem Eis.
Verdan reist mit der Gefährtenschaft bis Willow Falls mit, sofern man ihn lässt; lässt man ihn nicht mitkommen, zieht er allein weiter.`,
    `<span class="callout"><span class="co-title">Wer ist Verdan? (Narrator-Geheimnis)</span>Er ist ein Bergmann aus Dunburrow, einer Stadt in der fernen Ostprovinz Stormhelms. Vor allem aber ist er einer der <span class="gloss" onclick="openGloss('cold-hearted-cult')">Cold-Hearted</span>, entsandt, um die Dales im Auftrag des Winterkönigs auszuspionieren, unter dem Deckmantel eines lokalen Bergmanns. Optional ist er der Attentäter aus „A Shadow in the Barley" (S. 315). Für sein Challenge-Profil siehe <span class="gloss" onclick="openGloss('cold-hearted-stabber-ref')">Cold-Hearted Stabber</span> unten.</span>`,
    `<span class="callout"><span class="co-title">Verdans Rolle in der Serie</span>Verdans Arbeit in den Dales ist noch lange nicht beendet — die Helden könnten ihm in „The <span class="gloss" onclick="openGloss('barleytown')">Barleytown</span> Fair" und/oder „The Lost Hermitage" wieder begegnen. Er kann ein erbitterter Feind der Gefährtenschaft sein, eine verlorene Seele, die es zu retten gilt — oder beides.</span>`,
  ],
  npcs:[],
  challenges:[
    { name:"COLD-HEARTED STABBER", difficulty:3, img:"coldHeartedStabber", after:8, type:"Mystery, Aggressor, Watcher",
      optional:true,
      desc:"Der schreckliche Winterkönig, der jenseits der Whitecloak-Berge wohnt, soll viele seltsame Diener haben, doch am überraschendsten sind jene Menschen, die sich seinem Todeskult anschließen und allem, was atmet und wächst, den Rücken kehren. Unter ihnen befinden sich verlassene Jugendliche und enteignete einfache Leute, die darin ausgebildet sind, Gemeinschaften zu infiltrieren und seine Gegner auszuschalten — vergangene, gegenwärtige oder prophezeite. Dieses Profil steht bereit, falls Verdan hier oder später enttarnt wird und es zur Konfrontation kommt — in dieser Szene selbst kommt es normalerweise nicht zum Einsatz.",
      limits:[
        { label:"HARM (Schaden)", max:3 },
        { label:"CATCH / ESCAPE (Fangen / Entkommen)", max:4, note:"Startet zu Beginn der Konfrontation bei 2 von 4 Pips (die ersten beiden manuell markieren)." },
        { label:"SWAY (Beeinflussen)", max:0, note:"—" },
        { label:"WARMED-UP (verborgen)", max:5, note:"Nur relevant, wenn das eisige Gift durch echte Zuneigung oder Magie vorübergehend gelindert wird — siehe Geheimnis „Herz“.", secret:true },
      ],
      tags:["verborgener Dolch oder verborgene Handarmbrust"],
      secrets:[
        { title:"Herz", text:"Das Herz dieser Person ist mit einem hexerischen Gift infiziert, das sie kaltherzig macht (cold-hearted-5). Mit genügend Zuneigung oder der richtigen Magie kann das Gift jedoch vorübergehend entfernt und dann warmed-up (Limit 5) werden, was einen zermürbenden inneren Konflikt auslöst." },
        { title:"Gift", text:"Das als Fondness' End bekannte Gift friert das Herz ein und kann bekanntlich nur von einem Großen Thaumaturgen oder durch ein großes Opfer geheilt werden." },
      ],
      threats:[
        { name:"LURK (Lauern)", flavor:"Ein Nordwind weht sanft hindurch und lässt alle frösteln…", options:["Ein geeignetes Versteck finden (erhält hidden-3) oder sich lautlos bewegen (erhält stealthy-3)","Ihr Ziel aus dem Versteck oder unter falschem Vorwand studieren (Exposure)","Eine falsche Emotion tragen, um Verdacht abzulenken (erhält jovial-3, upset-3 oder calm-3)","Heimlich Saat der Bitterkeit und Verzweiflung säen (gibt bitter-2 oder despaired-2)"] },
        { name:"CHILL (Erkalten)", flavor:"Er flüstert eine hoffnungslose Tirade in einer kryptischen Zunge, während sich Eiskristalle an seinen Fingerspitzen bilden", options:["Einen Raum kalt und düster werden lassen oder mit undurchsichtigem Nebel füllen","Ein magisches Amulett, Werkzeug oder eine Waffe einfrieren, knacken lassen und zerbrechen (Tag streichen)","Jemanden sehr cold-3 machen und cramps-2 verursachen","Weiter springen als natürlich möglich, als würde er vom Nordwind getragen (erhält light-weight-2 oder getting-away-2)"] },
        { name:"ASSAIL (Angreifen)", flavor:"Er schießt aus der Deckung hervor oder verrät seine Verkleidung, um einen tödlichen Schlag auszuführen", options:["Jemanden ins Herz stechen oder schießen (bleeding-5)","Jemanden mit einem hexerischen, eisigen Gift vergiften (cold-hearted-3)","Ein Gerät sabotieren oder einen Wagen umstoßen, um jemanden zu verletzen (crushed-4)","Sein Gleichgewicht bereit von Seite zu Seite verlagern (erhält dodging-2)"] },
      ],
      source:"An Important Letter – Szene 'A Fellow Traveler in Need'. Standardprofil, S. 264 — auch in Abenteuer 1 ('A Murderer From Afar') und Abenteuer 6 ('The Barleytown Fair') verwendet.",
    },
  ],
  revelations:[
    { kind:"Lore", ref:"F", text:"Stormhelm, eine Stadt nördlich der Dales (ebenfalls einst Teil von Gwyrdolin), liegt im Kampf mit dem Winterkönig." },
  ],
  tips:[],
},

/* 4 -------------------------------------------------- WINDS FLUTE SHRINE */
{
  key:"windsflute", kind:"scene", page:"S. 339",
  title:"Der Windflöten-Schrein", en:"Winds' Flute Shrine",
  summary:"Erster Schrein — die Song of the Winds",
  overview:[],
  readAloud:[
    { page:"S. 339", label:"Auf der Suche nach dem Schrein", text:
      `Der Weg schlängelt sich von den Hängen des Greyback immer weiter hinab, tiefer nach Ashstone hinein und bietet unberührte Ausblicke auf das Land im Norden und Osten. Endlich erreicht ihr einen wunderschönen Aussichtspunkt gleich neben dem Weg, wo ein einsamer Weißdornbaum Schatten spendet. Ringsum, so weit ein Stein zu werfen wäre, stehen seltsame Steinhügel, behangen mit flatternden Bannern, die meisten zerfetzt und über die Erkennbarkeit hinaus verblasst. Der Wind erzeugt eine leise Melodie im Vorbeistreichen, ein sanftes Pfeifen zwischen ihnen. Eine geschnitzte Steinstele, mit einem einzelnen Schriftzeichen versehen, kennzeichnet den Ort als den gesuchten Schrein. Doch von Walric fehlt jede Spur.` },
    { page:"S. 339", label:"Walrics Schiefertafel am Windflöten-Schrein (I)", zusatzfund:true, after:1, text:
      `„Solch eine Ruhe habe ich seit Wochen nicht gespürt. Sinnigerweise trägt das alte gwyrdolanische Schriftzeichen auf der Stele, Frall, eine doppelte Bedeutung: ‚öffnen‘, aber auch ‚lauschen‘. Also lausche ich nur – und dieser Ort wird seine Geheimnisse offenbaren. Weiter geht's nach Willow Falls.“` },
    { page:"S. 339", label:"Walrics Schiefertafel am Windflöten-Schrein (II)", zusatzfund:true, after:1, text:
      `„Wenn ich den Wind durch die Steine wehen höre und die Augen schließe, kann ich ihre Gesichter sehen. Sie vertrauten mir, und ich habe sie in ihr Verderben geführt. Diese Last wird mich für immer begleiten. Aber warum? Warum habe ich versagt?“` },
  ],
  flow:[
    `In dieser Szene erreicht die Gefährtenschaft Walrics letztes bekanntes Ziel. Um ihn einzuholen, müssen sie zumindest herausfinden, wohin er als Nächstes aufgebrochen ist.`,
    `Ein Held, der sich in der Gegend umsieht (Simple), findet eine Schiefertafel mit Kreideschrift, signiert von Walric. Sie weist auf Walrics — und der Helden — nächstes Ziel, den Zwischenstopp in <span class="gloss" onclick="openGloss('willow-falls-ref')">Willow Falls</span>, und gibt zugleich einen Hinweis auf das Geheimnis des Schreins.`,
    `Eine gründlichere Suche (Quick) fördert eine zweite, in einem Dornenbusch versteckte Tafel zutage (scratched-1) — Walrics persönliche Gedanken, die seinen Kummer über die Familie offenbaren, die er nicht retten konnte.`,
    `<span class="callout"><span class="co-title">Was, wenn die Helden nicht lesen können?</span>Lesen ist in den Dales keine Selbstverständlichkeit — viele Dalesleute erkennen höchstens eine Handvoll Wörter. Manche alten gwyrdolanischen Schriftzeichen auf Ruinen sind jedoch weithin bekannt, ihre Bedeutung in Geschichten überliefert. Kann niemand in der Gruppe lesen, enthält Walrics Notiz stattdessen eine Skizze, die Klang oder Musik andeutet, sowie ein Symbol, das die Helden als Willow Falls erkennen. Alternativ kann <span class="gloss" onclick="openGloss('verdan-ref')">Verdan</span> oder eine andere anwesende Person die Tafeln vorlesen.</span>`,
    `<span class="callout"><span class="co-title">Reihenfolge der Schreine</span>Gehen die Helden zuerst zum Gwyrwich-Steinbruch, verweist die dortige Schiefertafel sie zum Wasserfall-Schrein, der sie dann zum letzten Schrein an der Gespaltenen Eiche führt.</span>`,
    `<span class="section-heading">Der Schrein der Aufgeschlossenheit</span>Einfach die Aussicht zu genießen oder hier zu meditieren kann aware-2 verleihen — doch der Schrein birgt ein tieferes Geheimnis.
<ul>
<li>Wer der Melodie des Windes lauscht, bemerkt, dass sie leicht verstimmt klingt.</li>
<li>Sucht man nach der Quelle der Musik, findet man kleine Standsteine am Hang in der Nähe.</li>
<li>Genauere Untersuchung zeigt: Sie bestehen aus Trommelstein, einem resonierenden Gestein, und sind hohl, gefüllt mit Regenwasser, das ihre Tonhöhe bestimmt.</li>
<li>Eine Markierung zeigt den vorgesehenen Wasserstand für jeden Stein.</li>
</ul>`,
    `<span class="section-heading">Der Song of the Winds</span>Ist das Prinzip erkannt, lassen sich die Steinhügel durch Befüllen oder Leeren (Simple Action) stimmen. Der Wind spielt dann durch sie hindurch den <strong>Song of the Winds</strong>, den jede musikalische Person durch Zuhören erlernen kann.`,
    `Wenn der Wind das Lied durch die gestimmten Steinhügel spielt, wird die Aufmerksamkeit der Helden unweigerlich nach außen gezogen, zur gewaltigen Weite Ashstones vor ihnen, oder nach innen, zu ihren eigenen tiefsten Gefühlen, die sie zum Zuhören rufen (Complication). Frag die Spielenden, wie ihr Held auf diesen Ruf reagiert: Versuchen sie, ihn zu ignorieren, zu belächeln, beiseitezuschieben? Öffnen sie sich bereitwillig oder zögerlich? Was denken oder fühlen sie beim Klang der unweltlichen Melodie?`,
    `Ein NPC (etwa Verdan) oder ein Begleiter kann dabei einige Fragen aussprechen, die auch in den Herzen der Helden widerhallen könnten: Wer erbaute diesen Schrein? Wofür? Was wussten sie über das Berühren des Ungesehenen, um solche Ruhe zu erzeugen? Und warum bauten sie ihn ausgerechnet hier draußen, wo ihn kaum jemand finden würde?`,
    `Nach dem kontemplativen Moment zieht die Gruppe weiter.`,
  ],
  npcs:[],
  challenges:[],
  revelations:[],
  rewards:[
    "Song of the Winds — eine beruhigende Melodie für ein Windinstrument. Lässt jeden, der sie hört, kurz innehalten und über sich selbst, die eigene Vergangenheit und Zukunft sowie das Ungesehene nachdenken. Verleiht contemplative-2, aware-2 oder remorseful-2 (bei begangenem Unrecht), oder senkt einen Status emotionaler Verwirrung/Aufruhr. Verliert an Kraft bei übermäßigem Gebrauch.",
  ],
  tips:[],
},

/* 5 ------------------------------------------------- WILLOW FALLS */
{
  key:"willowfalls", kind:"scene", page:"S. 340–341",
  title:"Zwischenstopp in Willow Falls", en:"Stopover in Willow Falls",
  summary:"Ein abgeschiedenes Bergdorf — Borum und seine Bitten",
  overview:[],
  readAloud:[
    { page:"S. 340", label:"Zwischenstopp in Willow Falls", text:
      `Auf eurer weiteren Suche nach Walric erhebt sich vor euch ein Hochplateau; ihr nehmt einen serpentinenartigen Pfad die felsigen Hänge hinauf zum Gipfel. Dort, im Schatten der Greyback-Berge im Westen, liegt eine kleine Gemeinschaft, umgeben von Wiesen, die von Bienen umschwirrt sind und von zahlreichen langsam dahinfließenden Bächen durchzogen werden, die von den Schneekuppen darüber gespeist werden. Rauch von Kochstellen und Werkfeuern zieht in den Himmel, doch ansonsten scheint das Dorf recht verschlafen.` },
  ],
  flow:[
    `<span class="gloss" onclick="openGloss('willow-falls-ref')">Willow Falls</span> ist ein <span class="gloss" onclick="openJourneyBySlug('insular-hamlet')">Insular Hamlet</span> (Core Book II, S. 120) — eines von vielen kleinen Gemeinwesen in <span class="gloss" onclick="openGloss('ashstone')">Ashstone</span> und eine übliche Station für Year Walker. Eine schrullige Ansammlung aus Außenseitern, Bergleuten und hexenhaftem Oldways-Volk, isoliert durch seine Höhenlage — die hartgesottenen Bewohner verehren die Praxis des Year Walk und bieten jenen, die ihn unternehmen, kleine Annehmlichkeiten. Auf ihre bescheidene Art schützen sie die Heiligkeit des Year Walk und der Oldways und zeigen sich zurückhaltend darin, ihre Geheimnisse zu teilen oder das Vertrauen eines Pilgers zu verraten — gegenüber jenen, die sich der Sache nicht verschrieben haben.`,
    `Die Ortsansässigen sind nicht sonderlich einladend: Sie haben Arbeit zu erledigen, und schlechtes Wetter ist nie weit entfernt. Abseits von etwas Tauschhandel für Grundbedarf kostet es einige Mühe, in diesem verschlossenen Weiler Hilfe zu bekommen.<br><br><strong>Borum</strong> <em>(Wirt · Gerüchteküche des Dorfes)</em> — Erinnert sich gut an Walric und kennt sein nächstes Ziel, hilft aber nur im Tausch gegen Gefälligkeiten (siehe Challenge) — und drückt dabei gerne noch etwas mehr Arbeit ab, als eigentlich nötig wäre.`,
    `<span class="callout"><span class="co-title">Reihenfolge-Hinweis</span>Gehen die Helden zuerst zum Gwyrwich-Steinbruch, verweist die dortige Schiefertafel sie zum Wasserfall-Schrein, der sie dann zum letzten Schrein an der Gespaltenen Eiche führt.</span>`,
    `<span class="section-heading">Willow Falls Inn</span> <strong>Borum</strong>, der gerüchtekundige Wirt des großen, gepflegten örtlichen Gasthauses, erkennt auf den ersten Blick, wenn jemand händeringend nach Auskünften sucht — <span class="flavor-add">und sieht eine ganze Gefährtenschaft davon vor sich.</span> Er erinnert sich gut an Walric — „ein kurioser Kerl“ — und daran, dass sie ausführlich über die nächsten Stationen seines Year Walk gesprochen haben.`,
    `Um zu verraten, was er weiß, bittet Borum die Helden, ihm zunächst bei ein paar Aufgaben rund ums Gasthaus zu helfen (siehe Challenge unten) — und wird dabei versuchen, so viel wie möglich aus ihnen herauszuholen. Ist genug erledigt, belohnt er sie mit seiner berühmten Honigmilch und verrät, dass Walric nach dem Weg zum nahen Wasserfall-Schrein gefragt hat.`,
    `Im Gasthaus verkehren auch Steinbrucharbeiter aus dem Gwyrwich-Steinbruch, die außerdem Folgendes berichten:
<ul>
<li>Ihre Arbeit ist wegen einer nächtlichen Heimsuchung auf wenige Tagesstunden beschränkt.</li>
<li>Sie haben Walric während ihrer Arbeitszeit dort nicht gesehen, wissen aber von einem alten Schrein in der verlassenen Mine.</li>
<li>Von einem „<span class="gloss" onclick="openGloss('verdan-ref')">Verdan</span>“ wissen sie nichts — niemand dieses Namens hat je bei ihnen im Steinbruch gearbeitet.</li>
</ul>`,
  ],
  npcs:[],
  vignettes:[
    { name:"Sitting on the Porch — Auf der Veranda sitzen", flavor:"Ihr kommt an ein paar Dorfbewohnern vorbei, die einfach auf ihren Veranden sitzen und Geschichten erzählen.", options:[
      "Ihr lasst euch von einer ihrer Räubergeschichten einnehmen (misinformed-2 oder time-passes-1).",
      "Eine ihrer Gruselgeschichten erschreckt euch (scared-2).",
      "Ihr hinterlasst den Eindruck, schwach, gefährlich oder unwichtig zu sein (ill-repute-2).",
    ]},
    { name:"Injured Animal — Verletztes Tier", flavor:"Ihr findet ein verletztes Hoftier, das vor Schmerzen schreit.", options:[
      "Ihr lasst das Tier in seinem gequälten Zustand zurück (guilty-2/schuldig-2) oder erlöst es selbst (shaken-2).",
      "Die Wunden oder die Krankheit des Tieres wirken unnatürlichen Ursprungs (Ill Tidings).",
      "Das Tier reagiert in seiner Not und verletzt euch (bruised-1) oder entkommt (Ill Tidings).",
    ]},
    { name:"Restless Night — Unruhige Nacht", flavor:"Ihr erwacht mitten in der Nacht vom Klang unheilvollen Gesangs. Unheimliche Laternenlichter bewegen sich am Dorfrand.", options:[
      "Ihr fühlt euch unsicher und findet nicht zurück in den Schlaf (Blocked und tired-3 am nächsten Tag).",
      "Ein(e) Dorfbewohner(in) bemerkt, dass ihr sie beobachtet, und verschwindet dann (Exposure, suspected-3, und Blocked) — ihr kennt dieses Gesicht, und es kennt euch.",
    ]},
  ],
  challenges:[
    { name:"DER VERZWEIFELTE BAUER", after:2, type:"Charge, Influence",
      desc:`Die Arbeit auf dem Land wird nie fertig, und manchmal gibt es einfach zu viel Arbeit und zu wenige Hände. In Willow Falls steht Borum, der Wirt, stellvertretend für diese Vorlage — er braucht Hilfe, bevor er Walrics nächstes Ziel preisgibt.<br><br><strong>Mögliche Aufgaben:</strong><br>• Das Feld pflügen oder die Ernte einbringen.<br>• Einen spiteful-3 Hausgeist besänftigen.<br>• Einen lustlosen Hirten in die Spur bringen (siehe Challenge unten).<br>• Vorräte durch eine gesetzlose Straße liefern.<br>• Einen geizigen Alderman überzeugen, eine Forderung fallen zu lassen.<br>• Eine(n) zurückgezogene(n) Oldways-Praktizierende(n) um einen Erntesegen bitten.<br>• Brunnenkröten vertreiben.<br>• Unheilvolle Vorzeichen auf dem Hof untersuchen.<br><br>Wird eine Aufgabe erfüllt, gibt es eine herzhafte Mahlzeit (well-fed-3) und etwas vom Warenbestand (supplies-1).`,
      limits:[
        { label:"AVOID (Meiden)", max:3 },
        { label:"SHIRK (Sich drücken)", max:3 },
        { label:"INFURIATE (Erzürnen)", max:3, note:"Wird erzürnt, verweigert Borum jede weitere Hilfe, und die Kunde verbreitet sich (ill-repute-3 für die beteiligten Helden)." },
      ],
      tags:["leicht frustriert (easily frustrated)","grob und robust (rough and tough)"],
      threats:[
        { name:"SCOWL (Stirnrunzeln)", flavor:"Verschränkt die Arme und blickt missbilligend, erwartet mehr von echten Dalesleuten", options:["Schimpft und wirft vor, es „nicht richtig“ zu machen (embarrassed-2 oder frustrated-2, Borum erhält infuriated-1)","Greift grummelnd ein: „Lass mich dir zeigen, wie's geht!“ — und bringt sich dabei womöglich selbst in Gefahr (Ill Tidings, und erhält infuriated-1)","Weist Drückeberger-Versuche zurück (senkt Statusse auf shirk um 1 Stufe)"] },
      ],
      source:"An Important Letter – Szene 'Stopover in Willow Falls'. Vorlage: Exasperated Farmer, S. 258 — hier als Borums Bitten reflavored.",
    },
    { name:"DER LUSTLOSE HIRTE", after:2, type:"Charge",
      desc:"Ein langer Tag beim Hüten einer Schaf- und Weideviehherde kann für einen jungen Hirten öde sein, besonders wenn er sich nichts sehnlicher wünscht, als mit seinen Freunden zu spielen. Er tut alles, um sich die Zeit zu vertreiben oder etwas Aufregendes zu erleben — doch diese Unbekümmertheit kann Gefahr für ihn selbst oder seine unruhige Herde bedeuten. Eine der möglichen Aufgaben, die der Verzweifelte Bauer (bzw. Borum) den Helden stellen kann.",
      limits:[
        { label:"HARM (Schaden)", max:1 },
        { label:"SCARE (Erschrecken)", max:2 },
      ],
      tags:["unfallanfällig (accident-prone)","umherstreifende Herde (meandering flock)"],
      threats:[
        { name:"WANDER (Umherwandern)", flavor:"Läuft in eine zufällige Richtung, summt sorglos vor sich hin", options:["Wandert unbeabsichtigt in die Wildnis, weil etwas seine Aufmerksamkeit weckt (erhält lost-2)","Stolpert und baumelt an einer steilen Klippe (Complication und erhält panicked-2)","Wird von einem Raubtier überrascht (Neue Challenge: Boar of the Thicket, siehe unten)"] },
        { name:"DAYDREAM (Tagträumen)", flavor:"Versinkt in Gedanken an zuhause, ein neues Lied oder Abenteuer in fernen Landen", options:["Schließt die Augen und gibt sich Fantasien hin (erhält distracted-3)","Singt der Herde laut einen neuen, eingängigen Reim vor (Exposure)","Döst ein, wodurch ein Tier aus seiner Herde verschwindet (Neue Challenge: Runaway Farm Animal, siehe unten)"] },
      ],
      source:"An Important Letter – Szene 'Stopover in Willow Falls'. Eine mögliche Teilaufgabe des Verzweifelten Bauern.",
    },
    { name:"BOAR OF THE THICKET", difficulty:3, after:2, type:"Aggressor, Quarry",
      desc:"Der Sage nach fütterte ein Schweinehirte aus den Wanderlands sein krankes Ferkel mit Wasser aus einem Aquädukt des Alten Königreichs — es wurde gesund, bekam tiefgrünes Fell, aber auch einen wilden, gefährlichen Sinn. Ausgewachsen zieht das Untier plündernd durch die Dales.",
      limits:[
        { label:"HARM (Schaden)", max:4 },
        { label:"TRAP (Fangen)", max:4 },
        { label:"BOND (Vertrauen aufbauen)", max:6 },
      ],
      tags:["klingenartige Hauer","nahezu undurchdringliche Haut","empfindliche Nase","Stärke von zwanzig Jägern"],
      secrets:[
        { title:"Wilde Wut", text:"Wird es verwundet oder gefesselt, erhält es furious-1." },
      ],
      threats:[
        { name:"SIGNS OF PASSING (Spuren)", flavor:"Spürt die Jäger auf", options:["Wittert oder hört sie (erhält alert-1 oder Exposure)","Quiekt laut auf (rattled-1 für alle in Hörweite)"] },
        { name:"CHARGE (Angriff)", flavor:"Stampft den Boden, Dampf steigt aus seiner Schnauze", options:["Durchbohrt jemanden im Weg (mauled-4 und prone-2)","Befreit sich aus Fesseln (senkt trapped um 1 Stufe)","Flüchtet ins dichte Unterholz"] },
        { name:"ASSAULT VILLAGE (Dorf überfallen)", flavor:"Dorfbewohner schreien vor Schreck auf", options:["Durchbricht ein Gebäude (Trümmer und Ill Tidings)","Verwüstet einen bewohnten Bereich (Dorf erhält panicked-2 und Ill Tidings)","Zertrampelt Felder (Dorf erhält short-on-supplies-1)","Entweiht eine heilige Stätte oder stört ein Ritual (Dorf erhält cursed-1)"] },
      ],
      source:"An Important Letter – Szene 'Stopover in Willow Falls'. Eskalation der Threat 'WANDER' des Lustlosen Hirten. Deutlich gefährlicher als die übrigen Spin-off-Challenges dieses Abenteuers.",
    },
    { name:"RUNAWAY FARM ANIMAL", difficulty:1, after:2, type:"Charge, Quarry, Aggressor",
      desc:"Rinder, Schafe und Ziegen geraten oft in Schwierigkeiten — aus dem Pferch entkommen, an einem Hang oder in einem Graben festhängend. Ein entlaufenes Tier einzufangen kann eine ganze Szene füllen.",
      limits:[
        { label:"HARM (Schaden)", max:2 },
        { label:"CALM (Beruhigen)", max:2 },
        { label:"ESCAPE (Entkommen)", max:3 },
        { label:"BOND (Vertrauen aufbauen)", max:2 },
      ],
      tags:["stark oder flink","frightened-2 (ggf. bereits escaping-1)"],
      threats:[
        { name:"FLIGHT (Flucht)", flavor:"Rennt wild davon", options:["Gewinnt Abstand auf der Flucht (escaping-1)","Führt Verfolger durch Dickicht oder über eine Kante (slowed-2 oder bruised-1)","Verkeilt sich in Busch, Grube oder unter einem Felsen (stuck-3)"] },
        { name:"FIGHT (Gegenwehr)", flavor:"Stellt sich mit dem Rücken zur Wand zur Wehr", options:["Stößt einen lauten Schrei aus (gibt tense-1, erhält evasive-2)","Beißt, tritt oder kratzt (bruised-1)"] },
        { name:"SPOIL (Verwüsten)", flavor:"Entdeckt etwas, das es ruinieren kann — einen Garten, ein Fest, frische Wäsche", options:["Richtet Schaden an (Ill Tidings oder erhält ruined-2)"] },
      ],
      source:"An Important Letter – Szene 'Stopover in Willow Falls'. Eskalation der Threat 'DAYDREAM' des Lustlosen Hirten.",
    },
  ],
  revelations:[],
  tips:[],
},

/* 6 --------------------------------------------------- WATERFALL SHRINE */
{
  key:"waterfall", kind:"scene", page:"S. 341–342",
  title:"Der Wasserfall-Schrein", en:"Waterfall Shrine",
  summary:"Muddy Med und die Prüfung des Krabbenapfelbaums",
  overview:[],
  readAloud:[
    { page:"S. 341", label:"Der Wasserfall-Schrein", text:
      `Das Wasser der Willow Falls stürzt die Klippe des Plateaus hinab, als weine es ewig um seine Namensgeberin, jene Heldin, die hier vor langer Zeit den Tod gefunden haben soll. Regenbögen gleiten durch die Gischt, während ihr vorbeigeht, und der tosende Wasserfall übertönt fast jedes Gespräch.

Die Klippenwand selbst besteht aus sechseckigen Steinsäulen, mit vielen weiteren, die aus dem Boden rund um den darunterliegenden Teich ragen. Eine rutschige Treppe aus solchen Säulen führt hinter dem Wasservorhang hinauf, zu einem blühenden, rosa Krabbenapfelbaum, der mitten im Wasserfall aus der Felswand wächst. Früchte und bunte Bänder baumeln von seinen Ästen, doch sein Standort scheint kaum erreichbar. Rund um den Teich sind einige der Säulen mit Schriftzeichen versehen.` },
    { page:"S. 342", label:"Walrics Schiefertafel am Wasserfall-Schrein (I)", zusatzfund:true, after:2, text:
      `„Der Year Walk verheißt Schönheit um Schönheit und lockt die Pilger mit Pracht. Die hier eingeritzten Runen scheinen von ‚Hunger‘ zu sprechen. Ich nehme an, ich werde geprüft. Ich frage mich, ob mich das auf den Schrecken des Steinbruch-Schreins vorbereiten soll.“` },
    { page:"S. 342", label:"Walrics Schiefertafel am Wasserfall-Schrein (II)", zusatzfund:true, after:2, text:
      `„Ich habe schon zu viele Tränen um mich selbst vergossen, um mein eigenes Versagen. Ja, ich habe versagt – doch es gibt noch Arbeit zu tun. Ein Ort wie dieser lässt mich mir das Wohl aller Dalesleute wünschen – jener, die wir verloren haben, und jener, die noch immer schwere Zeiten durchleben. Es scheint, als würden hier, zumindest hier, meine Gebete erhört.“` },
  ],
  flow:[
    `Die Gefährtenschaft erreicht den Schrein von <span class="gloss" onclick="openGloss('willow-falls-ref')">Willow Falls</span>, der am Fuß eines Wasserfalls liegt, der von der Spitze des Plateaus herabstürzt. Wie zuvor müssen sie herausfinden, wohin Walric als Nächstes aufgebrochen ist, und haben die Gelegenheit, das Geheimnis des Schreins sowie etwaige von Walric hinterlassene Hinweise zu entdecken.<br><br><strong>Muddy Med</strong> <em>(Fluchesserin (Curse Eater) am Schrein)</em> — Unhelpful-2, aber wissend — siehe Challenge-Profil unten. Kann, wenn überzeugt, vom Schrein im Gwyrwich-Steinbruch erzählen (siehe Ablauftext).`,
    `Ein kurzes Stück vom Wasserfall entfernt sitzt unter einem bemoosten Steinbogen — gerade groß genug für eine Person — <strong><span class="gloss" onclick="openGloss('muddy-med-ref')">Muddy Med</span></strong>, eine Fluchesserin (Curse Eater), die diesen Platz für sich beansprucht. Auf einer Wolldecke, umgeben von allerlei Nippes und in geschenkte, schlecht sitzende Kleidung gehüllt, ihr Gesicht leicht grünlich von alten Krankheiten und ein Auge ständig tränend, genießt sie es sichtlich, unhelpful-2 zu sein und Fragen auszuweichen. An Walric — oder irgendjemand anderen — erinnert sie sich nicht wirklich, doch den Schrein kennt sie gut, und über Kreaturen der Dämmerung weiß sie mitunter Überraschendes.`,
    `<span class="section-heading">Der Schrein der Selbstbeherrschung</span>Einfach den schönen Teich zu betrachten oder hier zu meditieren kann content-2 verleihen. Am Fuß des Wasserfalls liegt ein tiefer Teich, der gegen nebelverhangene Schieferufer schwappt — hier hat Walric zwei Schiefertafeln hinterlassen: eine sichtbar auf einer Säule (high-2), die andere zwischen den Felsen versteckt, um die Kreideschrift vor dem Wasser zu schützen (hidden-2) — von oben, erklimmt man den Baum, ist die versteckte Tafel gut zu erkennen.`,
    `Muddy Med (sofern sie sich überzeugen lässt zu antworten) oder Borum im Gasthaus wissen von einem Schrein im Gwyrwich-Steinbruch, ein Stück weiter östlich. Die Helden werden gewarnt, diesen besser zu meiden — der Steinbruch soll heimgesucht sein, eine Kreatur der Dämmerung hat sich dort vor Jahren niedergelassen, und niemand, der ihn betrat, ist seither zurückgekehrt — doch nur dort können sie erfahren, wohin Walric als Nächstes ging.`,
    `<span class="section-heading">Geheimnis des Schreins</span>Mehrere Schriftzeichen sind in die Klippenwand geritzt. Oldways-Praktizierende oder andere kundige Personen (auch Muddy Med) lesen sie als „reach“ (verlangen) und „nothing“ (nichts). Ein weiteres, hidden-2 auf einer moosbewachsenen Säule verborgenes Zeichen bedeutet „for“ (nach). Das letzte, höchste Zeichen ist im fließenden Wasser kaum zu erkennen (obscured-2), aber vom Baum aus erreichbar — es bedeutet „hunger“. Zusammen ergeben sie: <strong>„Reach nothing for hunger“</strong> („Verlange nichts aus Gier/Hunger“).`,
    `<span class="section-heading">Der Krabbenapfelbaum</span>Ihn zu erreichen erfordert das Erklimmen eines rutschigen Sims aus sechseckigen Steinsäulen, mitten durch die endlose, mit überraschender Wucht herabstürzende Gischt — eine Quick Action, bei der man ausrutschen und in den Teich stürzen kann (soaked-3 oder bruised-3).`,
    `Die Krabbenapfelfrucht ist der Schrein selbst und stellt eine Prüfung dar. Ein Band anzubinden, ohne eine Frucht zu pflücken, symbolisiert die Charaktereigenschaft, nach der die Oldways-Vorfahren suchten — die Bereitschaft, Gefahr nicht für eine Belohnung auf sich zu nehmen, sondern für das eigene Gefühl der Erfüllung oder für jemand anderen.`,
    `Die Äpfel selbst sind verlockend schön und tempting-1 (Quick Action, um dem Drang zu widerstehen) — doch eine Falle: Wer nach einem Apfel greift, wird von einem plötzlichen Windstoß oder Wasserschwall erfasst und bleibt dangling-4 am Abgrund hängen. Die Krabbenäpfel sind zudem ausnehmend sauer und verursachen bei jedem Verzehr nausea-2.`,
    `Wer stattdessen ein Band bindet, ohne eine Frucht zu berühren, wird von einem Gefühl zentrierter Ruhe erfasst und erhält centered-3, peaceful-3 oder composure. Spricht die Person dabei einen selbstlosen Wunsch für jemand anderen aus, weht ein Windstoß durch die Blätter des Krabbenapfelbaums, und einige Blüten wirbeln prächtig in den Wasserfall — die gewünschte Person erhält guided-toward-[wunsch]-1, sacht in Richtung des ausgesprochenen Wunsches gelenkt, oder erfährt später von einem Glückswandel in ihrem Leben. Dies lässt sich später auch als positiver Zustand widerspiegeln, der die Chancen des Helden bei NPCs wie Walric oder <span class="gloss" onclick="openGloss('verdan-ref')">Verdan</span> verbessert, wenn ihnen hier Gutes gewünscht wurde (siehe auch „<span class="gloss" onclick="openGloss('secret-grace')">The Secret Grace</span>“, CBII 78).`,
  ],
  npcs:[],
  challenges:[
    { name:"CURSE EATER", difficulty:2, after:1, type:"Obstacle, Sapper",
      desc:"Fluchesser sind Vagabunden, die Flüche reinigen, indem sie sie in Nahrung übertragen, die sie dann verzehren. Ihre Körper werden verunstaltet, ihre Haut mit Läsionen bedeckt, und die meisten von ihnen entwickeln aufgrund dieses Schicksals ein missmutiges Gemüt. Die Dalesfolk hegen zu gleichen Teilen Ekel, Respekt und Mitleid für Fluchesser aufgrund ihrer Rolle als Sündenböcke, doch einem auf der Straße oder im eigenen Dorf zu begegnen ist eine Unannehmlichkeit – es ist tabu, sie zu ignorieren, aber ihre befleckte Präsenz droht, alltägliche Angelegenheiten zu infizieren, und sei es nur in der eigenen Vorstellung.",
      limits:[
        { label:"DRIVE AWAY (Vertreiben)", max:3 },
        { label:"EXCUSE YOURSELF (Sich entschuldigen)", max:4 },
        { label:"SATISFY (Zufriedenstellen)", max:4 },
        { label:"CLEANSE (verborgen)", max:6, note:"Kann gereinigt werden, sofern sie zuvor eine Woche lang vom Verzehr von Flüchen fasten.", secret:true },
      ],
      tags:["erbärmlich (pitiful)","hungry-2"],
      secrets:[
        { title:"PARTING WORDS (Abschiedsworte)", text:"Wird ein Fluchesser vertrieben (drive-away), oder verlässt man ihn ohne sich zu entschuldigen (excusing-yourself) oder ihn zu füttern bis er satisfied ist, erhält man guilty-3 und ill-repute-3. Ist er wütend (angry), erhält man zusätzlich cursed-3." },
        { title:"Wahre Natur", text:"Obwohl ihre Praxis wohlwollend erscheinen mag, wurzelt sie in dunklem und verzehrendem Wanecraft." },
      ],
      threats:[
        { name:"INCONVENIENCE (Unannehmlichkeit)", flavor:"Er läuft unsicher, auf seinen Stock gestützt, während er sein Unglück beklagt", options:["Sein erbärmliches Elend bekannt machen (guilty-2/schuldig-2)","Um eine Spende bitten oder Bezahlung für seine Dienste verlangen (short-on-supplies-1 oder Item-Tag streichen)","Wird angry-2, wenn abgelehnt","Die Anwesenheit des Übernatürlichen spüren und ausrufen (Exposure)","Menschen glauben lassen, ihr Pech sei ansteckend (bad-luck-2 oder self-sabotaging-2)"] },
        { name:"EAT CURSES (Flüche essen)", flavor:"Er zerdrückt eine mit dem Fluch verbundene Zutat mit einem Bissen Nahrung in seiner Almosenschale", options:["Eine nahe Bösartigkeit oder einen Fluch in Nahrung übertragen (Nahrung erhält cursed-3)","Beim Essen versehentlich ein Stück verfluchte Nahrung auf jemanden speien (Complication oder cursed-1)","Jeden Zauber brechen, der als Fluch gelten könnte (zwei Tags streichen oder dimmed-4)","Die verfluchte Nahrung verzehren, würgend und krampfend (erhält guilty-3 und gain hungry-3)"] },
      ],
      source:"An Important Letter – Szene 'Waterfall Shrine'. Muddy Med ist eine Fluchesserin, die am Schrein haust und Hinweise zu Walrics Verbleib geben kann.",
    },
  ],
  revelations:[],
  tips:[],
},

/* 7 -------------------------------------------------- QUARRY SHRINE */
{
  key:"quarry", kind:"scene", page:"S. 342–343",
  title:"Der Gwyrwich-Steinbruch-Schrein", en:"Gwyrwich Quarry Shrine",
  summary:"Ein Harrow sucht den verlassenen Steinbruch heim",
  overview:[],
  readAloud:[
    { page:"S. 342", label:"Auf dem Weg zum Steinbruch", text:
      `Unter aschgrauem Himmel wandert ihr auf einem Pfad, glatt getreten von jahrelangem Stein- und Erztransport aus dem Gwyrmarch-Steinbruch. Endlich erhebt sich der Steinbruch vor euch – ein grüner Hang, angenagt von den bescheidenen Spitzhacken der Dalesleute, übersät mit Stapeln behauener Steinblöcke. Ein zweistöckiges, strohgedecktes Gebäude – zweifellos die Unterkunft der Steinarbeiter – ist das einzige weit und breit. Euer Weg endet weiter vorn an einer Mine, deren Öffnung wie ein gähnendes Maul im Hang klafft.

Man erzählt sich bei Willow Falls, dass die Steinbrucharbeiter mittlerweile nur noch tagsüber kommen, wegen einer Kreatur der Dämmerung, die diesen Ort heimsucht. Heute ist es hier unheimlich still, kein Klang von Spitzhacken zu hören.` },
    { page:"S. 343", label:"Walrics Schiefertafel am Schrein der Fragen (I)", zusatzfund:true, after:3, text:
      `„Bei dieser furchteinflößenden Gegenwart prüft mich der Year Walk auf eine Weise, die ich mir nie hätte vorstellen können; es scheint daher passend, dass dieser Schrein mich daran erinnert, zu fragen – stets zu versuchen, das Ungesehene zu erblicken. Es ist Zeit, zu sehen, was ich gelernt habe, und der Lady an der Gespaltenen Eiche entgegenzutreten.“` },
    { page:"S. 343", label:"Walrics Schiefertafel am Schrein der Fragen (II)", zusatzfund:true, after:3, text:
      `„Ich muss mehr wissen. Warum versagten die Schutzbanne, sie zu bewahren? Wie konnte die Bestie eindringen, wenn ihr Heim doch geschützt war? War ich es? Habe ich die alten Riten so erbärmlich schlecht vollzogen? Oder ist es etwas Größeres? Schwinden die Oldways selbst dahin?“` },
    { page:"S. 343", label:"Das Echo des Schreins der Fragen", zusatzfund:true, after:4, text:
      `Ein Held, der eine Frage laut ausspricht – etwa: „Was ist das Geheimnis der Oldways?“ – hört sie durch den porösen Fels und das klingende Trommelgestein hindurch widerhallen, endlos wiederholt, bis einzelne Worte plötzlich anders klingen: „Oldways … ways … ways … Wohin? Wozu?“ So verwandelt sich die Frage in eine neue, ohne je eine Antwort zu geben.` },
  ],
  flow:[
    `Auf Walrics Spuren erreicht die Gefährtenschaft den Gwyrmarch-Steinbruch und findet ihn verlassen vor. Hier müssen sie sich der Kreatur der Dämmerung stellen, die den Ort heimsucht, und Walrics Schiefertafel bergen. Zudem können sie das Geheimnis des Schreins der Fragen lüften.`,
    `<span class="section-heading">Die Steinbrucharbeiter</span>Die kleine, staubige Belegschaft trifft üblicherweise erst am späten Vormittag ein und verlässt den Ort schon am frühen Nachmittag wieder — die Helden können ihr sowohl im Steinbruch als auch auf dem Weg dorthin begegnen. Angeführt wird sie von der untersetzten, strengen Vorarbeiterin <strong><span class="gloss" onclick="openGloss('silverata-ref')">Silverata</span></strong>. Die Belegschaft berichtet:
<ul>
<li>Sie sprechen mit Furcht von einer schattenhaften Kreatur der Dämmerung, die die nahen Tunnel heimsucht.</li>
<li>Früher wurde hier über Generationen Trommelstein abgebaut, und der Schrein im Inneren war eine wichtige Station auf dem Year Walk — seit mehr als einer Generation gilt der Ort jedoch als so gut wie aufgegeben.</li>
<li>Schlimmer noch: In letzter Zeit wurde die Kreatur kühner und hat begonnen, auch das Wohnhaus der Arbeiter anzugreifen — sämtliche Lichter erloschen dabei augenblicklich, und die Leute kamen geprellt und blutend davon. Seither übernachtet dort niemand mehr.</li>
<li>Die meisten Blessuren entstehen dabei nicht durch direkte Angriffe, sondern durch Unfälle im Dunkeln — etwa wenn jemand über sein eigenes Werkzeug stolpert.</li>
</ul>`,
    `<span class="section-heading">Der Harrow in der Mine</span>Die Heimsuchung ist ein <strong>Harrow</strong> (siehe Challenge unten) — relativ neu und daher ohne die zusätzlichen Abenteuer-Ebene-Aspekte, die ein etablierter Harrow sonst hätte.`,
    `Er verschlingt jede Lichtquelle in den dunklen Tunneln, was tödliche Unfälle verursachen kann, und bewegt sich dann durch die furchteinflößende Dunkelheit, die Herzen der Helden mit Schrecken füllend. Die Helden können sich im Dunkeln zum Schrein vortasten, während der Harrow um sie herum gleitet und zischt — sofern sie ihrer Furcht standhalten.`,
    `Wollen sie den Steinbrucharbeitern wirklich helfen, lässt sich das Problem des Harrow auch durch praktisches Vorgehen, Magie oder Kampf lösen — dafür müssen sie die Geheimnisse des Harrow aus seinem Profil aufdecken.`,
    `<span class="section-heading">Der Schrein der Fragen</span>Am Ende eines Tunnels steht ein niedriger Steinaltar, bedeckt mit Kerzen und halb verbranntem Räucherwerk. Darüber ein uraltes Wandbild einer vermummten Lady mit leuchtender Laterne (nur bei Licht sichtbar), in dessen Zentrum das Schriftzeichen für „fragen“ (ask) — die einzige geschnitzte Inschrift, die sich daher auch allein durch Berührung ertasten lässt.`,
    `Walrics Notizen liegen neben dem Schrein und offenbaren seine Absicht, „der Lady an der Gespaltenen Eiche“ gegenüberzutreten sowie seine quälenden Fragen, ob die Schutzbanne wegen ihm selbst versagten oder ob die Oldways insgesamt schwinden.`,
    `Die Steinbrucharbeiter und andere Ortskundige haben zwar nie von einer „gespaltenen Eiche“ gehört, doch es gibt in ganz <span class="gloss" onclick="openGloss('ashstone')">Ashstone</span> nur einen Ort, von dem aus man „der Lady gegenübertritt“ — ein Hügel etwas weiter östlich mit Blick auf den Watchful-Lady-Berg. Das ist zweifellos der Cloven-Oak-Schrein.`,
    `<span class="section-heading">Geheimnis des Schreins</span>Dieser Schrein bietet keine Antworten oder Lehren; man besucht ihn, indem man einfach niederkniet und eine Frage laut ausspricht. Ein Held, der das tut, hört seine Frage durch den porösen Fels und das resonierende Trommelgestein widerhallen, endlos wiederholt, bis einzelne Worte plötzlich anders klingen (siehe ZUSATZFUND-Text zum Echo) — die Frage wird dabei umgeformt, ohne je eine Antwort zu geben.`,
    `Der „Lohn“ des Helden ist die Frage selbst und jede neue Einsicht, die dabei entsteht.`,
  ],
  npcs:[],
  challenges:[
    { name:"HARROW", difficulty:4, after:2, type:"Aggressor, Mystery",
      desc:"Manchmal verschwinden Leute — Reisende, die nie wieder gesehen werden, oder ein abgelegenes Haus, von dem monatelang nichts mehr zu hören ist. Später findet man sie, alle tot, ohne klare Ursache. Es geschieht stets im Dunkeln, nahe einer Höhle oder Schlucht. Zeugen berichten von einer Dunkelheit, die sich ausbreitet und jedes Licht und Feuer erstickt. Was mit jenen geschieht, die von der Dunkelheit verschlungen werden, ist unbekannt — die armen Seelen enden stets tot. Diese Heimsuchung ist in den Dales als Harrow bekannt.",
      limits:[
        { label:"HARM (Schaden)", max:0, note:"— es ist kein Kampf im klassischen Sinn möglich; siehe OVERCOME FEAR / DISPEL DARKNESS." },
        { label:"CONVINCE (Überzeugen)", max:0, note:"—" },
        { label:"OVERCOME FEAR (Furcht überwinden)", max:4, note:"Der Hero, für den dieses Limit gemaxt wird, ist immun gegen IN THE DARK-Konsequenzen." },
        { label:"DISPEL DARKNESS (Dunkelheit vertreiben)", max:3, note:"Alle in der erleuchteten Fläche sind immun gegen IN THE DARK-Konsequenzen." },
      ],
      tags:["übermächtige Dunkelheit (an Blindheit gewöhnt)","gewaltige Größe","lautlos wie ein Schatten"],
      secrets:[
        { title:"Dunkelheit", text:"Es nährt sich von Licht und Feuer. Nur magisches oder gesegnetes Feuer kann seine Dunkelheit in einem Gebiet vertreiben — dem es dann ausweicht." },
        { title:"Wahre Absicht", text:"Es ist nicht bösartig oder gewalttätig; es verhält sich eher wie ein hungriges Tier. Todesfälle entstehen durch Trampeln, dunkelheitsbedingte Unfälle oder vor Schreck versagende Herzen." },
        { title:"Verbannung", text:"Es ist kein „Geist“, sondern eine Kreatur aus Fleisch und Blut. Es kann nicht verbannt werden. Um es zu vertreiben, muss man es drei Nächte lang von Licht und Feuer aushungern." },
        { title:"Wahre Gestalt", text:"Sie kann enthüllt werden, indem man die Dunkelheit direkt um es herum vertreibt (erfordert, es in die Enge zu treiben oder festzuhalten); dann ähnelt es einem Albino-Salamander." },
        { title:"Wahre Natur", text:"Ein Gefallenes Blatt, einst der Stern des Herdfeuers. Während des Krieges fanden heimkehrende Soldaten in Scharen selbst zuhause keinen Frieden mehr, und so fiel der Stern und wurde zu einem Monster, das an dunklen Orten kriecht und nur nachts hervorkommt, um Licht und Feuer zu verschlingen." },
      ],
      threats:[
        { name:"ENDARKEN (Verdunkeln)", flavor:"Flammen flackern und ersticken, das Licht von Mond und Sternen verdunkelt sich", options:["Alle nahen Lichter und Feuer werden ausgelöscht (Tags streichen, nur magisches Feuer kann dies lindern)","Es ist unmöglich, die Ursache zu finden (erhält hidden-3 oder Blocked)","Eine größere Lichtquelle eines Hauses oder einer vorbeiziehenden Karawane erregt seine Aufmerksamkeit (Ill Tidings)"] },
        { name:"IN THE DARK (Im Dunkeln)", flavor:"Formen erscheinen und verschieben sich in der Dunkelheit, ohne Anfang und Ende, sodass unklar wird, wo oben und unten ist", options:["Etwas streift euch, oder die Stille und Dunkelheit spielen eurem Verstand einen Streich (streicht einen Mut-Tag oder terrified-3)","Ihr erleidet einen schrecklichen Unfall durch gefährliche Gegebenheiten der Umgebung (wounded-3, tangled-3, oder Complication, weil ihr irgendwo feststeckt)","Der Harrow erscheint direkt neben euch, seine schwarzen Augen irgendwie sichtbar gegen die tintenschwarze Dunkelheit (terrified-4)","Ihr werdet von gewaltiger, unsichtbarer Kraft brutal niedergeschlagen (crushed-4)"] },
      ],
      source:"An Important Letter – Szene 'Gwyrwich Quarry Shrine'. Der Harrow hat kein eigenes Twilight-Deck-Profil und wird hier aus dem Hearts-of-Ravensdale-Regelteil (S. 291) übernommen.",
    },
  ],
  rewards:[
    "Ein „Frage-Stein“ — ein Trommelstein-Kiesel vom Schrein, den man mitnehmen kann. Er hallt auf dieselbe Weise wider wie der Schrein selbst und kann Grüblern helfen, ihre Gedanken zu ordnen.",
  ],
  revelations:[
    { kind:"Lore", ref:"B", text:"Die Oldways leiten Praktizierende dazu an, die ungesehene Welt und ihre Kräfte wahrzunehmen (Sensing the Unseen)." },
  ],
  tips:[],
},

/* 8 -------------------------------------------------- CLOVEN OAK SHRINE */
{
  key:"clovenoak", kind:"scene", page:"S. 344–345",
  title:"Der Schrein der Gespaltenen Eiche", en:"Cloven Oak Shrine",
  summary:"Walrics Kummer und die Vision der Lady",
  overview:[],
  readAloud:[
    { page:"S. 344", label:"Der Schrein der Gespaltenen Eiche", text:
      `Der Schrein der Gespaltenen Eiche liegt auf einem hohen Hügel, von dem sich eine alte Eiche erhebt, geborsten in zwei Teile – scheinbar von einem Blitzschlag getroffen – und doch noch lebendig und gedeihend. Von dieser Höhe aus, und ohne allzu viel im Weg, lässt sich sogar die Watchful-Lady-Bergspitze erkennen, die sich im Nordosten über Pasture erhebt – und an einem klaren Tag wie diesem ist es ein ergreifender Anblick. Der Berg, so heißt es, gleiche der vermummten Gestalt einer Frau, und keiner von euch könnte dem widersprechen.

Als ihr euch den beiden Zwillingssäulen nähert, die den Ausblick auf den Gipfel rahmen, seht ihr ein aufgeschlagenes Zelt und ein Lager, das schon einige Tage hier zu stehen scheint. Ein alternder Mann, auf den Walrics Beschreibung passt, kniet still weinend vor dem Schrein.` },
    { page:"S. 344", label:"Walrics Verzweiflungsschrei an der Gespaltenen Eiche", zusatzfund:true, after:9, text:
      `„Ich wünsche mir, dass sie zurückkehren! Ich wünsche mir, dass sie leben! Ich weiß, es ist ein törichter Wunsch, aber ich bin ein Tor! Ich muss mehr wissen! Warum versagten die Schutzbanne? War ich es, oder waren es die Oldways selbst?! Welch ein Stolz – doch bei der Lady schwöre ich: Ich habe jene Inschriften mit ganzem Herzen geschaffen!“` },
    { page:"S. 345", label:"Die Vision der Lady", after:10, text:
      `Der Hügel und der Wald verstummen mit einem Mal vollständig. Ihr haltet Ausschau nach den Vögeln, doch sie alle sind still und blicken gebannt in Richtung des Berges im Nordosten. Über den Hügeln und Wäldern hinweg regt sich etwas in Gestalt der Watchful Lady. Sie scheint plötzlich zu erwachen, belebt und voller Farbe, ein schimmerndes Antlitz einer Frau in blaugrünem Gewand. Während sie sich euch zuwendet, heben sich ihre Hände, um die Kapuze zurückzuschlagen, und enthüllen ein warmes, gütiges Gesicht – weder jung noch alt, mit Zügen, auf die sich später keiner von euch einigen könnte, außer auf ihr wallendes Haar. Sie blickt euch liebevoll an, Zuneigung vermischt mit Trauer, doch vor allem, als die Erscheinung verblasst, hinterlässt sie in euch das Gefühl von Glauben: dass, was auch immer kommen mag, die Reise es wert gewesen sein wird.

Walric, im Schlamm kniend, weint, unfähig, den Blick lange vom Horizont zu wenden. Endlich sagt er: „Sie hat zu mir gesprochen, die Lady. Sie hat meinem Leid einen neuen Sinn gegeben und mir aufgetragen, den Grund für das Schwinden der Oldways zu finden.“ Er schnieft, wischt sich das Gesicht und blickt euch dann entschlossen an: „Ich muss den Year Walk vollenden. Danke, danke, meine Freunde.“` },
  ],
  flow:[
    `In dieser Szene, an letzter Stelle dieses Abschnitts des Year Walk, finden die Helden Walric — doch er ist nicht imstande, seine Pilgerfahrt selbst zum Abschluss zu bringen. Während sie ihm helfen, mit seiner tragischen Vergangenheit ins Reine zu kommen, lernen sie zugleich etwas über sich selbst und über die Oldways.<br><br><strong>Walric Hywell</strong> <em>(Pilger auf dem Year Walk)</em> — Ehemaliger Bannwirker aus Upper Hartland. Seine Oldways-Schutzbanne versagten einst dabei, eine Familie zu schützen — Menschen starben, der Hof brannte. Kniet hier weinend und anguished-4 vor dem Schrein.`,
    `<span class="section-heading">Walric treffen</span>Walric ist anguished-4, ringend mit seinen Gefühlen über den Tod der Familie, die er zu schützen suchte und doch nicht schützen konnte. Er weiß, dass der Schrein von ihm verlangt, seine innere Wahrheit laut auszusprechen, doch sein Kummer hindert ihn daran — es ist schlicht zu viel, um es zu ertragen. Aus eigener Kraft dürfte er seinen Kummer kaum überwinden können.`,
    `Den Brief jetzt in seinem Zustand zu überreichen wäre zwecklos. Ein Blick auf das Oldways-Siegel würde seinen Kummer sofort um eine Stufe steigern (anguish-1), da er erkennt, dass der Brief ein Hilferuf an eine Weise Eine ist — genau jene Rolle, in der er sich selbst so bitter versagt glaubt.`,
    `<span class="section-heading">Walric helfen</span>Möchten die Helden Walric helfen, seine Pilgerfahrt zu vollenden, können sie versuchen, ihn zu trösten oder aufzurütteln, um sein anguished zu senken — mit dem Risiko, es schlimmer zu machen (er erhält anguish-1 oder beginnt, ihre Hilfe abzulehnen, rejecting-1) oder selbst emotional hineingezogen zu werden (der Held wird sad-2, disheartened-2, indifferent-2 oder judgmental-2). Alles, was die Gruppe aus Walrics Schiefertafeln an den vorherigen Schreinen über seine Vergangenheit zusammengetragen hat, hilft hier — sie können auch aktiv versuchen, mehr aus ihm herauszubekommen, um ihm besser beizustehen. (Bei Erfolg lies „Walrics Pilgerfahrt“, S. 333.)`,
    `<span class="section-heading">Geheimnis des Schreins</span>Sucht man den Schrein nach einem Schriftzeichen ab (eine Quick-Handlung), findet sich eines an der Wurzel der gespaltenen Eiche — es bedeutet „Wahrheit“ (truth). Eine weise Person erkennt intuitiv: Um das Geheimnis dieses Schreins zu lüften, muss jeder Anwesende der Welt eine unausgesprochene Wahrheit offenbaren — etwa eine geheime Sehnsucht des Herzens oder eine verborgene Scham —, indem er sie laut vor dem Berg ausspricht.`,
    `Wird Walrics Kummer gelindert, bevor die Gruppe das Geheimnis des Schreins durchschaut, erklärt er ihnen dankbar alles selbst.`,
    `<span class="section-heading">Wer spricht zuerst?</span>Für die Helden kann das Aussprechen der eigenen unausgesprochenen Wahrheit so einfach sein wie das laute Formulieren eines Quests, um sich ihm zu stellen: Ist das wirklich noch das Wichtigste für sie? Klammern sie sich an einen Glauben, den sie längst nicht mehr teilen? Welcher ihrer Quests überschattet die anderen? Ist durch die bisherigen Abenteuer vielleicht ein neuer Quest entstanden? Das kann ein guter Moment sein, um Abandon oder Milestone zu markieren.`,
    `Tritt jemand an den Schrein und spricht eine Wahrheit vor Walric aus, senkt jedes aufrichtige Geständnis (frag die Spielenden, ob es ernst gemeint ist) Walrics Kummer um eine Stufe — sei es durch emotionale Entlastung, das Gefühl geteilter Last, oder einen leichten, befreienden Moment.`,
    `Ist sein Kummer vollständig gelindert, tritt Walric zwischen die Säulen des Schreins und ruft mit gebrochener Stimme aus:`,
    `<span class="section-heading">Die Vision der Lady</span>Sobald die letzte anwesende Person ihre unausgesprochene Wahrheit ausgerufen und einen Moment gehabt hat, sie zu verarbeiten, offenbart sich die Vision:`,
    `Die Helden werden alle awed-3 oder inspired-3 von diesem Ereignis berührt. Ein Held, der sich besonders für die Oldways interessiert und von der Vision berührt ist, kann als besondere Belohnung inspirited-3 (S. 225) erhalten oder einen Punkt Promise markieren als Teil seines eigenen Erwachens (S. 233).`,
    `Später beantwortet Walric einige Fragen der Helden zu den Oldways, ihrer Verbindung zur Magie des Alten Königreichs, und zur geheimnisvollen Lady.`,
  ],
  npcs:[],
  challenges:[
    { name:"WALRICS KUMMER", after:3, type:"Charge",
      desc:"Kein klassischer Kampf, sondern ein emotionaler Moment. Jede aufrichtige, laut vor dem Berg ausgesprochene Wahrheit — eine Quest, eine Scham, eine Sehnsucht — senkt Walrics Kummer um eine Stufe. Bei 0 kann er die Vision der Lady erleben. Ein missglückter Trost-Versuch kann seinen Kummer dagegen verschlimmern oder ihn dazu bringen, Hilfe ganz abzulehnen.",
      limits:[
        { label:"ANGUISHED (Kummer)", max:4, note:"Sinkt um 1 Stufe pro aufrichtigem Geständnis. Beginnt bei 4/4 (anguished-4)." },
      ],
      tags:["anguished-4 (Ausgangswert)"],
      threats:[
        { name:"REJECT (Zurückweisen)", flavor:"Ein missglückter Trostversuch trifft ins Leere oder verschlimmert seinen Schmerz", options:["Walrics Kummer verschärft sich (anguish-1)","Er beginnt, weitere Hilfe abzulehnen (erhält rejecting-1)","Ein Held, der sich zu sehr in sein Leid hineinziehen lässt, wird selbst sad-2, disheartened-2, indifferent-2 oder judgmental-2"] },
      ],
      source:"An Important Letter – Szene 'Cloven Oak Shrine'.",
    },
  ],
  revelations:[],
  tips:[],
},

/* 9 --------------------------------------------------------- AFTERMATH */
{
  key:"aftermath", kind:"aftermath", page:"S. 345–347",
  title:"Aftermath", en:"Aftermath",
  summary:"Der Brief, die Belohnung & der Ausblick auf kommende Abenteuer",
  readAloud:[],
  showImprovement:true,
  flow:[
    `Nachdem der wichtige Brief Walric übergeben wurde, öffnet er ihn und liest mehrere Seiten hingekritzelter Notizen. Er dankt den Helden und schlägt vor, in Kontakt zu bleiben, denn er ist von ihrer Zähigkeit beeindruckt. Er sieht eine Zukunft voraus, in der die Antworten, die er findet, rasches und kluges Handeln von Menschen mit Mut und Format verlangen werden. Die Lady selbst hat zu ihnen allen gesprochen – gibt es ein größeres Zeichen als das?`,
    `Die Nachrichten, die Walric im Brief erhält, handeln von allerlei schrecklichen Dingen, die sich überall in den Dales ereignen. Gewalt, Flüche und seltsame Vorkommnisse scheinen sich in den Dales dieser Tage zu häufen, und Walric glaubt, dass sie alle irgendwie zusammenhängen.`,
    `Da er den Year Walk fortsetzen will, kann Walric die Helden bitten, bei der Untersuchung einer oder mehrerer dieser Angelegenheiten zu helfen, was in neue Abenteuer führt: <em>A Fox in the Dales</em>, <em>The Green Maiden</em> oder <em>The <span class="gloss" onclick="openGloss('painted-beast')">Painted Beast</span></em>.`,
    `Der Brief kann auch Revelations enthalten, die verstärkt werden müssen (S. 415).`,
    `Hier sind einige Fragen, um die Taten der Helden während des Abenteuers Revue passieren zu lassen:`,
    `<div class="callout"><span class="co-title">Fragen zur Nachbereitung</span>
<ul>
<li>Wie sind die Helden mit jedem Schrein umgegangen? Welches Wissen oder welche Lehren haben sie aus der Erfahrung mitgenommen?</li>
<li>Wie reagieren die Helden auf die Botschaft der Lady? Sind sie bereit, noch größere Gefahren auf sich zu nehmen, um die Dales zu schützen?</li>
<li>Wie geht es Walric, nachdem alles gesagt und getan ist? Wie hat er sich mit seiner bedrückenden Vergangenheit abgefunden?</li>
</ul></div>`,
  ],
  npcs:[],
  challenges:[],
  rewards:[
    "Als mittelloser Pilger kann Walric den Helden für die Zustellung des Briefes nur etwas Hartbrot und ein wenig Münze anbieten (hefty-purse-1).",
    "Wer sich für die Oldways interessiert, dem kann er beibringen, wie man einen Twilight-Schutzbann oder einen Schließ- und Öffnungszauber wirkt, und er kann etwas von seinem Twilight-Wissen weitergeben.",
    "Haben die Helden zugesagt, sich um die im Brief erwähnten Probleme zu kümmern, stattet er sie schließlich mit einem Twilight-Begone-Talisman (S. 146) aus und ist auch bereit, dessen Bauweise zu teilen.",
  ],
  revelations:[
    { kind:"Core", ref:"3", text:"Die Oldways bewahren die Weisheit, das Wissen und die mystische Lehre Alt-Gwyrdolins." },
    { kind:"Core", ref:"4", text:"Die Oldways verehren die Lady, die geheimnisvolle Schutzherrin der Dales." },
  ],
  tips:[],
},

];

ADVENTURES.find(a=>a.id==="a2").scenes = A2_SCENES;
