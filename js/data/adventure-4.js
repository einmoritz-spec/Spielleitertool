/* ---------- Adventure 4 : full scene data ---------- */

const A4_SCENES = [

/* 0 ---------------------------------------------------------- INTRO */
{
  key:"intro", kind:"intro", page:"S. 363",
  title:"Überblick", en:"The Green Maiden",
  summary:"Hintergrund, Hooks & Szenenfolge",
  overview:[],
  readAloud:[
    { page:"S. 363", label:"Eröffnung des Abenteuers: Woodend", text:
      `Etwas Unheilvolles liegt über dem abgelegenen Dorf Woodend. Furchtbare Albträume von einem dunklen, schattigen Wald haben den Schlaf jedes Mannes, jeder Frau und jedes Kindes heimgesucht. Diese nächtlichen Visionen handeln vom benachbarten Aldenweald, einem weiten und dichten Wald, der seit unvordenklichen Zeiten die Lebensgrundlage des Dorfes war, doch zugleich Heimat von Geschöpfen der Dämmerung ist, fremdartig und furchterregend. Solange die Bewohner von Woodend den Aldenweald respektierten, ließen diese Geschöpfe sie in Ruhe – doch nun ist eine Opfergabe an ihrem geheimnisvollen Schrein misslungen, und der einzige Weg, dies wiedergutzumachen, führt tief in den verwunschenen Wald hinein, zu seiner Herrin, der Green Maiden, die nicht eben für ihre Gastfreundschaft bekannt ist…` },
  ],
  flow:[
    `<span class="section-heading">Hintergrund</span> Albträume plagen das Dorf <span class="gloss" onclick="openGloss('woodend')">Woodend</span> (S. 100) — dunkle Träume und noch dunklere Vorzeichen aus dem rätselhaften <span class="gloss" onclick="openGloss('aldenweald')">Aldenweald</span> (S. 36).`,
    `<strong>Unheilvolle Waldträume:</strong> <span class="gloss" onclick="openGloss('woodend')">Woodend</span>, „Das letzte Dale“, liegt am Rand des <span class="gloss" onclick="openGloss('aldenweald')">Aldenweald</span>, eines weiten Waldes voller natürlichen Lebens und andersweltlicher Wesen. Bis vor kurzem pflegten die Bewohner von Woodend eine gedeihliche Beziehung zum Aldenweald: Sie schlugen Holz im Wald und hinterließen im Gegenzug dankbare Opfergaben. Doch nun hat der Wald sich in die Träume der Menschen von <span class="gloss" onclick="openGloss('millside')"><strong>Millside</strong></span> gedrängt, jenem Teil von Woodend, der dem Wald am nächsten liegt (und den manche gar nicht zu den eigentlichen Dales zählen). Man munkelt, dies sei das Werk der Vila, der dämmerungshaften „Waldleute“ — doch niemand weiß, was sie verärgert hat.`,
    `<span class="section-heading">Eine missglückte Opfergabe?</span>Insgeheim fürchtet der Böttcher <strong>Jarko</strong>, er könne die Ursache sein. Seit Jahren legt er bei jedem Mond eine Opfergabe an einem seltsamen Altar im Wald nieder, der eine grüne, blättrige Frau darstellt, um das Wohlwollen der Vila zu erhalten. Einmal hat er sie sogar gesehen, diese grüne Dame. In diesem Sommer nahm er versehentlich Nahrung in die Gabe auf, die er im Aldenweald selbst gesammelt hatte. Er fürchtet, dies sei der Grund, warum der seltsame Waffenstillstand zwischen Dorf und Wald gebrochen wurde.`,
    `<span class="section-heading">Die Green Maiden</span>Doch die Opfergabe war nicht die wahre Ursache der Albträume. Während der <span class="gloss" onclick="openGloss('lady-of-the-dales')">Saum der Lady</span> schwindet (S. 193), mehren sich im Verbrannten Zweig die Stimmen, die glauben, die Menschheit müsse beginnen, sich auf das kommende Unheil vorzubereiten — und dass die beste Aussicht für menschliche Helden in den Dales liegt, dank der Weitsicht der Lady. Einer dieser Sterne ist die <strong>Green Maiden</strong>, die alle Samen im Wald sprießen lässt. Sie schuf eine Dämmerungs-Emissärin, <strong>SeedWaker</strong>, um eine Beziehung zu den Menschen von Woodend zu knüpfen und sie durch den ausfransenden Saum zu beeinflussen. Doch SeedWakers Dringlichkeitsgefühl hat einen dunkleren Zug bekommen: Sie nutzt die Albträume, um zu sehen, wer unter den Dalesleuten als Held ausgesandt wird — und will diese „Helden“ zur Größe treiben, notfalls mit Gewalt.`,
    `Fest entschlossen, dass der Zweig sich nicht erneut in menschliche Angelegenheiten einmischen soll, streift <strong><span class="gloss" onclick="openGloss('ashenepitaph-ref')">AshenEpitaph</span></strong> durch den Wald — eine andere Inkarnation, von einem anderen Stern geschaffen, um die kühnen Eingriffe der Green Maiden zu zügeln — und sabotiert die Helden auf ihrem Weg zu ihr. Die beiden Inkarnationen stoßen nicht direkt zusammen, sondern spielen eine Partie Schach, in der die Helden ihre Figuren sind und in der widerstreitende Absichten innerhalb der himmlischen Ränkespiele des <span class="gloss" onclick="openGloss('you-are-veil')">Verbrannten Zweigs</span> vorangetrieben werden. Auch das Miasma aus den Marschen spielt eine Rolle, denn es zersetzt die östlichen Ausläufer des Aldenweald und infiziert seine Geschöpfe.`,
    `<span class="section-heading">Synopsis</span>Die Gefährtenschaft erreicht Woodend und erfährt von „Eine Heimsuchung in den Hinterwäldern“ — Träume, die der Wald sendet, um die Dorfbewohner zu plagen. Sie entdecken Jarkos missglückte Opfergaben, die zum Altar der Green Maiden führen.`,
    `Die Gefährtenschaft macht sich „In den Aldenweald hinein“ auf den Weg zum Altar, begegnet den seltsamen Manifestationen dieses urzeitlichen Waldes und kreuzt die Wege der Waldeinsiedlerin <span class="gloss" onclick="openGloss('riva-skall-ref')">Riva Skall</span> sowie AshenEpitaphs. Möglicherweise begegnen sie auch der kriechenden Verderbnis aus den Marschen.`,
    `Am Altar versuchen die Helden, die Green Maiden mit „Die zweite Opfergabe“ zu besänftigen, doch es scheint alles nur schlimmer zu machen — sie müssen sie nun im Wald selbst aufsuchen, während die Albträume in Woodend sich verschlimmern.`,
    `Um die Green Maiden zu erreichen, müssen die Helden tiefer in den Aldenweald vordringen, in den „Wald der Träume“, wo alles fremdartig und phantasmagorisch wird.`,
    `In „Die Grotte“ entdecken die Helden, dass die Beziehung zwischen Wald und Menschheit komplizierter ist als eine bloße Altaropfergabe. Sie stellen sich der Maiden, um Woodends Schlaf zu retten, während ihnen zugleich die größere Gefahr bewusst wird, die über den gesamten Dales schwebt.`,
    `<strong>Erzähler-Notiz — Thema dieses Abenteuers:</strong> Dies ist ein Waldhorror-Abenteuer, das die Helden gegen den phantasmagorischen Aldenweald und seine scheinbar allmächtigen, manipulativen und launischen Geister antreten lässt. Der Erzähler mag das wahre Ausmaß und die Beweggründe der wirkenden Kräfte kennen — für die Helden sollten der Aldenweald und seine Bewohner jedoch geheimnisvoll und unheimlich bleiben und mehr verbergen, als sie preisgeben (siehe <span class="gloss" onclick="openGloss('you-are-veil')">You Are The Veil</span>, S. 178).`,
    `<strong>Erzähler-Notiz — Jarkos Altar:</strong> Der Altar, den Jarko fand, war einst ein Treffpunkt unter freiem Himmel, an dem die Green Maiden Bittsteller aus Gwyrdolin empfing.`,
    `<strong>Erzähler-Notiz — SeedWakers Natur:</strong> SeedWaker ist genau genommen eine <span class="gloss" onclick="openGloss('stars-vs-incarnations')">Inkarnation</span>, da sie den Aldenweald nie verlässt — ihre Träume aber schon, was diese zu Emissären macht. Außerhalb des Aldenweald können sie daher mit Oldways-Magie verbannt und abgewehrt werden. Nach deinem Ermessen kann SeedWakers Dringlichkeit an Besessenheit grenzen und einen schmalen Grat beschreiten, der sie vom Sternenbaum fallen lassen könnte, wenn sie nicht auf die Green Maiden hört.`,
  ],
  npcs:[],
  extra:{ heading:"Hooks", type:"list", items:[
    "NSCs aus Woodend, die von den Träumen betroffen sind, laden gezielt einen Oldways-Praktizierenden, den Red Marshal oder einen waldkundigen Helden nach Woodend ein und flehen um Hilfe bei „einer mysteriösen Angelegenheit\".",
    "Jarko, der Böttcher, schreibt an einen Helden oder an Walric (siehe „Ein wichtiger Brief\") über „ein schreckliches Vergehen\", das er begangen hat, und bittet um Hilfe.",
    "Hält die Gefährtenschaft die Ohren offen für Geschichten über Geschöpfe der Dämmerung, hören sie Gerüchte über die Vila des Aldenweald und ihren jüngsten Zwist mit den Bewohnern von Woodend, was sie zu Nachforschungen bewegen kann.",
    "Die Helden wissen bereits (aus früheren Abenteuern), dass die Dales von außen durch dunkle Mächte wie das Miasma bedroht sind. Erfahren sie dann, dass manche in Woodend unnatürliche Träume haben, spornt sie das an, der Sache nachzugehen.",
  ]},
  extra2:{ heading:"Szenenfolge dieses Abenteuers", type:"list", items:[
    "1 · Eine Heimsuchung in den Hinterwäldern — Ankunft in Millside, Albträume untersuchen, Jarko finden",
    "2 · In den Aldenweald hinein — Riva Skall, AshenEpitaph, die kriechende Verderbnis",
    "3 · Die zweite Opfergabe — Jarkos Altar, der Wald erwacht",
    "4 · Der Wald der Träume — Journey durch den tiefen Aldenweald",
    "5 · Die Grotte — Die Green Maiden / SeedWaker",
    "6 · Nachspiel",
  ]},
  challenges:[],
  revelations:[],
  tips:[],
},

/* 1 --------------------------------------------- BACKWOODS HAUNTING */
{
  key:"backwoods", kind:"scene", page:"S. 364–366",
  title:"Eine Heimsuchung in den Hinterwäldern", en:"A Haunting in the Backwoods",
  summary:"Ankunft in Millside · Albträume untersuchen · Jarko finden",
  overview:[],
  readAloud:[
    { page:"S. 364", label:"Der Weilyn-Damm", text:
      `Über die nebelfeuchten Steine des Weilyn-Damms hinweg ragt eine imposante Sägemühle aus dem Nebel, mühend wie ein grollendes Ungetüm. Arbeiter und Holzfäller eilen über die schlammigen Höfe und speisen unermüdlich die Sägen. Dahinter, einen Steinwurf von den wogenden Rändern des Aldenweald entfernt, erwarten euch die gemütlichen Hütten und Herbergen von Millside. Die dunstige Luft ist dick von Kohle und Torfgeruch.

Doch dem Weiler fehlt die Lebendigkeit, für die er in den ganzen Dales bekannt ist. Händler und Reisende kauern um ihre Feuer, blicken leer in die rauchigen Flammen. Ortsansässige Waldbewohner schleichen umher, wie verloren, lassen Dinge fallen, entschuldigen sich, kämpfen mit ihrem Alltag und ihrer Arbeit. Viele klammern sich an bestickte Schärpen und wollene Puppen, murmeln stille Bitten in den schiefergrauen Himmel. Es scheint, als seien die herzlichen Grüße und warmen Willkommen, für die das Dorf bekannt war, verschwunden. Was bleibt, sind nur hohle Blicke und müde Stirnfalten.` },
  ],
  flow:[
    `In dieser Szene treffen die Helden im ungewöhnlich trübsinnigen und gähnenden <span class="gloss" onclick="openGloss('millside')">Millside</span> ein, jenem Teil von <span class="gloss" onclick="openGloss('woodend')">Woodend</span>, der sonst für seine Lebendigkeit und Betriebsamkeit bekannt ist, voller Holzfäller, Jäger und Sammler — nun aber von Albträumen verflucht. Sie treffen Bekannte oder erkundigen sich nach der Lage, erfahren rasch von den plagenden Albträumen — und erleben sie mitunter selbst — während sie den vermeintlichen Schuldigen, Jarko, ausfindig machen. Ein guter Ausgangspunkt für Nachforschungen ist die Sägemühle oder der <strong><span class="gloss" onclick="openGloss('driftwood-inn-ref')">Driftwood Inn</span></strong>, geführt von <strong><span class="gloss" onclick="openGloss('nessie-tarnfolk-res')">Nessie Tarnfolk</span></strong>.`,
    `<span class="section-heading">Das Dorf in Aufruhr</span>Die Menschen von Millside sind <strong>tired, cranky, and curt</strong> (müde, gereizt und schroff), und alle wünschen sich verzweifelt, dass irgendjemand die Ursache der Albträume findet und sie beendet. Manche sind zudem tight-lipped-2, aus Furcht, die Vila durch das Reden über die Albträume zu verärgern. Aktives Nachforschen führt früher oder später zu <strong>Jarko, dem Böttcher</strong>.`,
    `Wichtige Informationen, die sich dabei sammeln lassen:
<ul>
<li>Seit einer Woche haben viele Schlafende in Millside quälende Albträume, in denen sie endlos, verloren und allein durchs Unterholz wandern, beobachtet von wachsamen Augen. Manche sehen schreckliche Katastrophen, die ihr Dorf heimsuchen. Sie erwachen erschöpft, und die dunklen Bilder haften ihnen noch lange nach dem Sonnenaufgang an und trüben ihren Seelenfrieden.</li>
<li>Die meisten Millside-Bewohner glauben, es sei das Werk der Vila, der Geschöpfe der Dämmerung, die im Aldenweald wohnen — doch sie verstehen nicht, was diese so plötzlich und schrecklich gegen Millside aufgebracht hat. Normalerweise sind die Vila still, oder schlimmstenfalls schelmisch und verspielt.</li>
<li>Die örtliche Weise, der mittelalte <strong><span class="gloss" onclick="openGloss('fablo-roots-ref')">Fablo Roots</span></strong>, ist überlastet mit Anfragen für Schutzamulette und -puppen — er hat keine mehr zum Verkauf, tauscht aber gegen den Bauplan; die Amulette scheinen eine Weile zu wirken, doch das ganze Dorf auszustatten ist zu viel, und er ist bereits erschöpft und hatte keine Zeit, selbst nachzuforschen.</li>
<li>Die Leute verweisen auf <span class="gloss" onclick="openGloss('riva-skall-ref')"><strong>Riva Skall</strong></span> („Die drei Schleicher“, S. 101) als Expertin für den Aldenweald, doch sie lebt tief im Wald, und nur geübte Waldläufer finden sie. <strong>Merrick</strong> der Wegführer oder <strong>Fontell</strong> die Jägerin könnten überredet werden zu helfen.</li>
<li>Zurück in Woodend selbst bietet die gewissenhafte Alderwoman <strong>Pomegranate „Pommy“ Carpenter</strong> eine Belohnung für jeden, der Millside helfen könnte — einfache Eisenmünzen, oder eine <span class="gloss" onclick="openGloss('amber-coin')">Bernsteinmünze</span>, die sie für solche Zeiten aufgehoben hat (S. 65).</li>
</ul>`,
    `<span class="section-heading">Ein beunruhigender Traum</span> Bevor die Helden zu ihrem nächsten Ziel aufbrechen — sei es der Altar der Green Maiden oder Riva Skalls sagenumwobene Hütte —, erlebt einer von ihnen einen der heimsuchenden Träume. Das kann geschehen, wenn die Helden sich nachts schlafen legen, oder als Konsequenz einer ihrer Ermittlungshandlungen, wenn einer von ihnen tagsüber kurz eindöst.`,
    `Der Albtraum ist nicht gefährlich, aber beunruhigend, und zeigt den Helden, was Woodend bereits plagt. Er beginnt damit, dass ein Held erwacht — ohne zu wissen, dass er noch träumt — und ein seltsames Wehklagen aus dem Wald hört. Während das Stöhnen und Kratzen anschwillt, befällt eine unsichtbare Präsenz aus dem Wald sie, wo immer sie sich befinden (Challenge Profile „Backwoods Haunting“ ohne das APPEASE-Limit, CBII 123). Der Held kann andere Helden um Hilfe im Traum bitten; ihre Handlungen finden im Traum des Helden statt, der zuerst eingeschlafen ist. Es gibt ein verstecktes Limit zu dieser Szene, <strong>awaken-3</strong>, das erst aufgedeckt werden sollte, wenn ein Held aktiv prüft, ob er träumt, etwa indem er sich kneift.`,
    `Erreicht der Albtraum ein spannungsgeladenes Crescendo, erwacht der Held, in kaltem Schweiß gebadet. Alle im Traum erlangten Status werden entfernt, alle verkratzten Merkmale wiederhergestellt, und der träumende Held erhält harrowed-3.`,
    `<span class="callout"><span class="co-title">Hilfe beim Erwachen</span>Bist du irgendwo eingeschlafen, wo andere Charaktere in der Nähe sind, etwa in einem Gasthaus, kannst du trotzdem um Hilfe rufen. Ein Weggefährte, Bekannter oder freundlicher Fremder kann dich mit sanftem Rütteln aus dem Albtraum reißen.</span>`,
  ],
  npcs:[],
  challenges:[
    { name:"BACKWOODS HAUNTING", difficulty:4, type:"Aggressor, Pursuer", subtitle:"Waldrand-Spuk (Albtraum-Fassung — ohne APPEASE, mit verstecktem awaken)", after:3,
      desc:"Eine ruhelose Präsenz ist an eine Waldlichtung gebunden. Als Opfer eines gewaltsamen, längst vergessenen Todes verletzt der Geist alle, die sich nähern, mit seelendurchdringenden Schreien, die wie Krallen zerreißen. In dieser Traumfassung besänftigt kein reales Wissen um seine Vergangenheit den Spuk — stattdessen erwacht der träumende Held, sobald er aktiv prüft, ob er träumt (z. B. sich kneift).",
      limits:[
        { label:"HARM (Schaden)", max:0, note:"— nicht anwendbar in dieser Traumfassung" },
        { label:"BANISH (Verbannen)", max:3 },
        { label:"OUTRUN (Überholen)", max:4 },
        { label:"AWAKEN (Erwachen)", max:3, note:"Verstecktes Limit — deckt sich erst auf, wenn ein Held aktiv prüft, ob er träumt.", secret:true },
      ],
      tags:["körperlos","obtuse-2","raging-3","Gewaltsamer Geist — Vulnerability: ihn beim alten Namen nennen"],
      threats:[
        { name:"SCREAM (Schreien)", flavor:"Durchdringt die Nacht mit einem entsetzlichen Schrei", options:["Erfüllt die Lebenden mit dem Frost des Todesschreckens (terrified-3 für alle)","Weigert sich, hinter den Schleier zurückgedrängt zu werden (entfernt 2 Stufen von banished, der Verbannende erhält terrified-3)"] },
        { name:"ATTACK (Angreifen)", flavor:"Zerreißt den Schleier zwischen den Welten mit schneidenden Krallen", options:["Schlitzt jemanden oder etwas mit kalten Krallen (wounded-3 oder streiche einen Tag)","Trägt jemanden in die Luft und lässt ihn dann fallen (aches-all-over-3 und prone-1)"] },
        { name:"CHASE (Verfolgen)", flavor:"Bewegt sich unsichtbar, während sein nächstes Opfer seine Nähe spürt", options:["Nähert sich zügig (drawing-closer-1)"] },
        { name:"FLEE (Fliehen)", flavor:"Stößt kurze, zögerliche Schreie aus", options:["Zerstiebt zu einem Krähenschwarm und verschwindet, nur totenstille Stille zurücklassend (Blocked)"] },
      ],
      source:"The Green Maiden – Szene 'Eine Heimsuchung in den Hinterwäldern'. Backwoods-Haunting-Profil (Core Book II, S. 123), hier als beunruhigender, aber ungefährlicher Albtraum eingesetzt: ohne APPEASE-Limit, dafür mit verstecktem AWAKEN-3.",
    },
  ],
  revelations:[],
  rewards:[],
  tips:[],
},

/* 2 ------------------------------------------------ INTO THE ALDENWEALD */
{
  key:"intoforest", kind:"scene", page:"S. 366–369",
  title:"In den Aldenweald hinein", en:"Into the Aldenweald",
  summary:"Vignetten-Journey · Riva Skall · AshenEpitaph · die kriechende Verderbnis",
  overview:[],
  readAloud:[
    { page:"S. 366", label:"Der Weg in den Aldenweald", after:1, text:
      `Zahlreiche Holzfäller- und Jagdpfade führen von Millside hinein in den Aldenweald – die friedlichen Wiesen verwandeln sich mit einem Mal in einen malerischen Wald. Genug Tageslicht dringt durch das Blätterdach, um das dichte Unterholz in leuchtenden Farben erstrahlen zu lassen, doch die Schatten bleiben tief und undurchdringlich. Während ihr weitergeht, flüstert der Wind in den Baumwipfeln, und kleine Tiere zwitschern und huschen umher. Manchmal scheint es, als fügten sich diese Geräusche zu einer kohärenten Stimme zusammen, wie ein fernes Seufzen, oder gar ein Wort, beinahe laut genug, um verständlich zu sein – doch eben nur beinahe.` },
    { page:"S. 366", label:"Ever-Watchful Eyes: die alte Frau am Feuer", after:3, text:
      `Während ihr den gewundenen Pfad entlanggeht, bemerkt ihr eine Regung über euch – Vögel flattern und zwitschern in den Ästen. Es dauert eine Weile, bis ihr das Zentrum der Unruhe erkennt: eine dünne, gebeugte Gestalt, sitzend auf einem glatten Stein, ein kleines Feuer hütend, das kaum Rauch erzeugt. Ihre Kleidung besteht aus Schichten längst reparaturbedürftiger Dorftracht, geflickt mit Zwirn und Rindenstücken und Blättern. Sie rührt in einem Topf, der schwach nach Wurzeln und Äpfeln duftet. Vögel sitzen auf ihren Schultern, Armen und rings um sie am Boden, als warteten sie darauf, an der Mahlzeit teilzuhaben.

Sie bemerkt euch, bevor ihr sie bemerkt. Ihre Augen weiten sich – nicht vor Angst, sondern vor Ärger –, und sie schnappt sich ihren Topf, tritt mit bloßem Fuß das Feuer aus, sodass die Vögel lärmend auffliegen. Unter dem Deckmantel des Lärms schlüpft sie mit erstaunlicher Geschwindigkeit zwischen die Bäume und verschwindet im Unterholz.` },
    { page:"S. 366", label:"Riva Skalls Warnung vor der Vila", zusatzfund:true, after:4, text:
      `»Ich hab's ihnen gesagt – man legt sich niemals mit der Vila an. Das bringt nur Unglück.«` },
    { page:"S. 367", label:"Der Gezeichnete: Gestalt auf dem Hügel", after:5, text:
      `Der gewundene Pfad vor euch führt tiefer in den Wald hinein. Die Bäume werden höher und wirken hier bedrohlicher; weniger Sonnenlicht dringt durch das Blätterdach, und das Unterholz lichtet sich. Die kühle Luft riecht nach aufgewühlter Erde.

Vor euch ragt ein großer, erdiger Hügel auf, hoch wie ein Mann und doppelt so breit. Auf seiner Spitze steht eine Gestalt, die euch mit trauervollem Gesicht ansieht. Sie sieht aus wie ein alter Mann, doch seine Haut ist bleich und aschfahl, durchzogen von Rissen, die schwach von innen glühen wie flackernde Kohlen. Wenn er sich bewegt, gleitet die linke Seite seines Körpers geschmeidig und anmutig, die verbleibenden Fetzen eines königlichen Umhangs mit Würde tragend. Die andere Seite ist verzerrt und verdunkelt, wie geschmolzenes Eisen, das in falscher Form erkaltet ist.

Er blickt auf euch herab. Obwohl seine Lippen sich nicht bewegen, hallt seine Stimme mit dem Klang eines weisen Lehrers durch die Luft. »Ruht euch aus«, sagt er. »Es ist keine Schande, anzunehmen, was nicht mehr wiederhergestellt werden kann.«` },
    { page:"S. 369", label:"Der hungrige Bär und das sterbende Land", after:11, text:
      `Vor euch bewegt sich eine große, schwere Gestalt im Dämmerlicht. Als sie sich erhebt, braucht ihr einen Herzschlag, um zu erkennen: Dies ist ein Bär. Er wirkt ausgezehrt, sein Fell fleckig von Räude, und er knurrt in rasender Gier. Zu seinen Füßen liegen die Überreste dessen, was er zerrissen hat – keine frische Beute, sondern die zersplitterten Knochen und die Rüstung eines längst toten Soldaten, der einem lebenden Wesen keine Nahrung mehr bieten könnte. Und dennoch scheint er schon eine Weile daran genagt und gerissen zu haben, bevor ihr seine Mahlzeit gestört habt. Er hebt seinen ungeheuren Kopf, starrt euch mit hohlen Augen an und stößt ein seltsames Stöhnen aus: »Huuun-griiig.«

Während ihr weitergeht, bemerkt ihr allmählich, wie sich der Wald um euch verändert – das satte Grün des Aldenweald verblasst und wird fahl, die Blätter verlieren ihren Glanz, die Farne werden brüchig und schrumpfen. Der Boden unter euren Stiefeln wird weich und feucht.

Die Luft kühlt ab, und ein dünner, hohler Wind zieht durch die Bäume, einen abgestandenen Geruch mit sich tragend. Wasser sammelt sich in flachen Tümpeln zwischen den Wurzeln. Die Bäume stehen weiter auseinander. Vogelgesang ist in Stille verstummt. Der Aldenweald – wenn ihr überhaupt noch in ihm steht – ist hier tot.` },
  ],
  flow:[
    `<span class="section-heading">Die Aldenweald-Reise</span> Reise mit Vignetten aus der Journey „Aldenweald-Außenbezirke“ (vollständig unten; vor jedem Haltepunkt zwei bis drei Vignetten spielen). Die Helden gewinnen <strong>forest's-attention</strong> (zunächst harmlos, betont das unheilvolle Gefühl und deutet kommende Gefahr an; behindert Heimlichkeit und das Meiden der Geschöpfe und unsichtbaren Kräfte des Waldes; kann die Helden später bei „Die zweite Opfergabe“ zusätzlich verwundbar machen). Es gibt drei mögliche Haltepunkte auf dem Weg: eine Begegnung mit Riva, den korrumpierenden Einfluss der Marschen und eine Begegnung mit <span class="gloss" onclick="openGloss('ashenepitaph-ref')">AshenEpitaph</span>.`,
    `<strong>Immerwachsame Augen:</strong> Wollen die Helden forest's-attention verringern, brauchen sie Merkmale, die sie unmittelbar vor der Aufmerksamkeit der Dämmerung aus unbekannter Quelle verbergen — eine seltene Fähigkeit.`,
    `<span class="section-heading"><span class="gloss" onclick="openGloss('riva-skall-ref')">Riva Skall</span>, die Einsiedlerin</span> Ehemalige Woodenderin, die seit vielen Jahren tief im Wald lebt. Sie wagt sich nie tief in den Aldenweald hinein, da sie dessen Gefahren kennt, und hat sich stattdessen an den Waldrändern eingerichtet, wo sie noch gelegentlich Dorfbewohnern begegnet. Nutze das Challenge-Profil „Lone Tracker“ (CBII 126) mit dem Zusatz „Reclusive“ (S. 305), um das Aufspüren und Überzeugen Rivas darzustellen. Entscheiden sich die Helden, sie zu meiden, können sie das einfach tun und mit der nächsten Vignette fortfahren.<br><br><strong>Riva Skall</strong> <em>(Tiefwald-Einsiedlerin)</em> — Ehemalige Woodenderin, lebt seit vielen Jahren am Rand des tiefen Aldenweald. Kennt den Wald gut genug, um sich nie zu weit hineinzuwagen. Warnt eindringlich davor, sich mit der Vila anzulegen.`,
    `<span class="section-heading">Lässt sie sich überzeugen …</span>
<ul>
<li><strong>Waldaufmerksamkeit:</strong> Sie bemerkt sofort, wenn ein Held forest's-attention trägt — sie nennt es „ihre Aufmerksamkeit“ (bezogen auf die Green Maiden) — und weiß, dass sie tiefer im Wald zunimmt, übernatürliche Gefahren anzieht und verwundbarer macht.</li>
<li><strong>Jarkos Opfergabe:</strong> Sie hat „Jarko, diesen großen Weichling“, am alten Altar beim „Anbiedern“ an die Vila gesehen und kann dessen Standort zeigen. Erwähnen die Helden die Albträume, von denen sie nichts weiß, platzt es aus ihr heraus (siehe Zitat oben).</li>
<li><strong>Schutz:</strong> Ein Rezept aus grauer Rinden-Asche, das auf bloße Haut aufgetragen forest's-attention (oder in späteren Szenen waking-dreams) verringert — sie hat genug für zwei Anwendungen (zwei separate Tags) für die Gefährtenschaft und kann das Rezept auch teilen.</li>
<li><strong>Quelle:</strong> Die Aufmerksamkeit — und wahrscheinlich auch die Albträume — stammen von einem Wesen tiefer im Wald, aus alten Sagen bekannt: die Green Maiden, die es liebt, mit Sterblichen zu spielen. Riva träumte einst selbst davon, sie aufzusuchen, gab diesen Wunsch aber auf, als sie beschloss, der Vila aus dem Weg zu gehen. Sie ist sich sicher, dass die Green Maiden dort draußen lebt, irgendwo verborgen.</li>
</ul>`,
    `<span class="section-heading">AshenEpitaph</span> In dieser Szene stößt die Gefährtenschaft auf AshenEpitaph, ein Geschöpf, das versucht, sie zur Umkehr zu bewegen — oder sie dazu zu bringen, sich ihm zu Füßen niederzulegen und zu sterben, wie schon viele vor ihnen, die tief in den Wald vordringen wollten, um seine Geheimnisse zu suchen. Trotz der Gefahr können die Helden ein vages Gefühl für die zwiespältige Haltung des Aldenweald gegenüber der Menschheit gewinnen.`,
    `AshenEpitaph bewegt sich nicht und trägt seine Worte einseitig vor, statt ein Gespräch zu führen. Versuchen die Helden, an ihm vorbeizukommen (pass-through), untergräbt er ihren Willen und ihre Selbstrechtfertigung mit einer Kombination aus eindringlichen rhetorischen Fragen (in beliebiger Reihenfolge) und verstörenden Visionen seiner Kriegserlebnisse, gezeigt aus seiner eigenen Perspektive (in der unten angegebenen festen Reihenfolge). Forest's-attention erschwert es, an ihm vorbeizuschleichen, ebenso wie sein Potent Spirit und mystically-aware-2.`,
    `<span class="section-heading">Zermürbende Fragen</span>Diese Fragen sollten wörtlich und eindringlich vorgelesen werden — am besten eine nach der anderen, mit Pausen dazwischen.
<ul>
<li>»Wisst ihr, wo ihr seid?«</li>
<li>»Wisst ihr, wer ihr seid?«</li>
<li>»Kennt ihr eure Gefährten wirklich?«</li>
<li>»Wisst ihr, wonach ihr sucht?«</li>
<li>»Was wisst ihr von diesem Wald?«</li>
<li>»Was wisst ihr von der Vergangenheit?«</li>
<li>»Was führt euch wahrhaftig hierher?«</li>
<li>»Was würdet ihr tun, hättet ihr alle Macht der Welt?«</li>
<li>»Was würden eure Gefährten tun, hätten sie alle Macht der Welt?«</li>
<li>»Was lässt euch glauben, dass ihr Erfolg habt, wo schon so viele scheiterten?«</li>
</ul>`,
    `<span class="callout"><span class="co-title">AshenEpitaphs Fragen</span>Würfle, um zu bestimmen, mit welchen Fragen dich AshenEpitaph herausfordert.</span>`,
    `<span class="section-heading">Heimsuchende Visionen</span>In fester Reihenfolge, aus AshenEpitaphs eigener Perspektive:
<ul>
<li>Auf einer weiten, steinernen Plattform im Wald versucht eine kleine Gruppe Schüler – vielleicht der Oldways? – ein Lichtfünkchen heraufzubeschwören; manchen gelingt es, und sie blicken stolz zu euch auf.</li>
<li>Ihr belehrt zwei vielversprechende junge Schüler, die beim Streiten erwischt wurden, und macht ihnen klar, dass ihnen Macht gegeben wird, um andere zu erheben, nicht um sie zu unterwerfen.</li>
<li>Schüler flüstern miteinander, während sie einen Waldpfad von einer Lektion zur nächsten entlanggehen, und reden über Gewalt und Kämpfe „daheim“. Sie senken verlegen die Stimme, als sie an euch vorbeigehen.</li>
<li>Die beiden Schüler reden davon, in den Krieg zu ziehen; der eine wünscht sich, zu kämpfen und seine Feinde zu vernichten, während der andere zögert und euch um Rat blickt. Ihr schweigt, ohne zu wissen, was ihr sagen sollt.</li>
<li>Am Rand des Aldenweald tobt eine Schlacht. Invasoren in Uniformen fallen vor eurer Magie, während hinter ihnen der Wald brennt.</li>
<li>Ein Schüler, nun ein furchteinflößender Magier, kehrt aus dem Krieg zurück. Es ist einer der beiden jungen Schüler, jener, der den Krieg herbeisehnte, nun humpelnd und von Narben gezeichnet. Der andere, sagt er, sei im Kampf gefallen.</li>
<li>Der Fluss stinkt nach Tod. Leichen treiben auf ihm, tot und doch noch zuckend.</li>
<li>Die steinerne Plattform steht leer und vergessen. Ihr und die anderen Lehrenden geht, ohne zurückzublicken, tiefe Verbitterung im Herzen.</li>
</ul>`,
    `<strong>Lore-Enthüllung I:</strong> Die himmlischen Wesen des Smaragdenen Zweigs lehrten die Menschheit die Thaumaturgie — und lösten damit mittelbar den Krieg der Thaumaturgen aus.`,
    `<span class="section-heading">Die kriechende Verderbnis</span> Ein Ausläufer des <span class="gloss" onclick="openGloss('evermire-miasma')">Evermire-Miasmas</span> (S. 200), das tiefer als sonst bis in den Wald reicht — die Gefährtenschaft stolpert in einen Arm der Marschen hinein. Für das Challenge-Profil des Bären: „Protective Bear“ (CBII 142) mit dem Zusatz „Miasmic“ (S. 280). Sein „protectee“ ist die uralte Leiche, die er ausgegraben hat. Untersuchen die Helden sie genauer, ähnelt ihre Ausrüstung der des Waken Sentry aus „A Shadow in the Barley“.<br><br><strong>Svall (verseucht)</strong> <em>(Miasma-verderbter Karhu-Bär)</em> — Einst ein sprechender Bär und Gefährte der Green Maiden, nun durch das Evermire-Miasma zu Aggression und Gewalt getrieben. Gehört zu den <span class="gloss" onclick="openGloss('karhu')">Karhu (Bären-Verwandten)</span>, einer neuen empfindsamen, vom Aldenweald erhobenen Art (S. 187).`,
    `<span class="section-heading">Die Verseuchung reinigen</span> Das Miasma ist hier vermutlich stärker als an jedem anderen Ort, den die Helden bislang besucht haben — verweilen sie, könnten sie auf weitere miasmische Bestien oder zuckende Leichen stoßen. Forest's-attention wächst hier nicht und wirkt distanzierter, als könne die wachsame Präsenz diesen Teil des Waldes nicht durchdringen. Doch gerade weil dieser Miasma-Fleck tiefer im Aldenweald liegt als die meisten anderen, stört er die Green Maiden erheblich. Gelingt es der Gefährtenschaft, den Bären zu reinigen (cleanse), erhalten sie <span class="gloss" onclick="openGloss('green-maiden-favor-info')">green-maiden's-favor-2</span>, wenn sie ihr schließlich begegnen.`,
    `<span class="callout"><span class="co-title">Wer ist der Bär?</span>Dies ist kein gewöhnlicher Bär. Vor seiner Infektion war er Svall, ein sprechender Bär und Gefährte der Green Maiden. Wird er gereinigt, erlangt er seine Sprachfähigkeit zurück, doch sein Wissen über die Green Maiden ist begrenzt — er sieht sie schlicht als wohlwollenden „Geist“ und „Freund“.</span>`,
    `<strong>Lore-Enthüllung G (wiederholt):</strong> Seit Kurzem entstehen seltsame Kreaturen durch ein verfluchtes Miasma aus den Marschen, berührt von einem uralten Hunger.`,
  ],
  npcs:[],
  vignettes:[
    { name:"Talking Hollow (Sprechende Höhlung)", flavor:"Ihr kommt an einen dicken, hohlen Baumstamm, als plötzlich eine Stimme ruft: „Kommt doch herein! Worauf wartet ihr?“", options:[
      "Ihr tretet durch die Höhlung in denselben Wald, nur ist es die entgegengesetzte Jahreszeit (cold-2, sweating-2, wet-2, oder muddy-2)",
      "Euer Verhalten erregt ire-of-the-Aldenweald-2 (Zorn des Aldenweald)",
      "Die Stimme betraut euch unverzüglich mit einer unmöglichen Aufgabe (bound-by-oath-3)",
      "Ein seltsames Wesen lebt darin (Neue Challenge: Local Godling/Lokaler Gottheitsgeist, CBII 140, oder Spriggan)",
      "Ihr entdeckt auf der anderen Seite eine wunderschöne Lichtung, aber niemand ist dort (Neue Challenge: Bewitching Glade/Verzaubernde Lichtung, CBII 138)",
    ]},
    { name:"Forest Recluse (Waldeinsiedlerin)", flavor:"Eine zerzauste Einsiedlerin, gekleidet in Rinde und Wein, ihr Haar durchsetzt mit getrockneten Kräutern, steht auf eurem Weg und schreit, ihr müsst umkehren, da ihr ihren Teil des Waldes betretet", options:[
      "Sie lässt euch passieren, wenn ihr ihr ein nützliches Werkzeug hinterlasst, das sie braucht (streicht einen Tag)",
      "Sie „verbannt“ euch und verbietet euch, je wieder hier durchzukommen (Blocked)",
      "Ohne Vorwarnung oder sichtbare Waffe sticht euch plötzlich ein winziger Pfeil in den Hals (sleepy-3 oder delirious-3)",
      "Ihr tappt in eine Falle, die sie sorgfältig versteckt hat (trapped-3), während sie kichernd davongeht",
    ]},
    { name:"Mysterious Feast (Geheimnisvolles Festmahl)", flavor:"Verlockendes Lachen (enticing-2) und süße Melodien hallen durch den Wald, und glühendes Feuerlicht ist zwischen den Stämmen zu sehen. Ihr wurdet gewarnt, solchen Versammlungen fernzubleiben", options:[
      "Bei eurer Ankunft erlischt das Feuerlicht, und die Musik verstummt (dejected-2)",
      "Ihr verliert euch in einer Nacht deliranter Ausgelassenheit (tired-3 und headache-3)",
      "Ihr stellt fest, dass ihr der Hauptgang des Festmahls seid – und erwacht dann aus dem Albtraum (panicked-3)",
      "Eine seltsame Person in fließendem Gewand und mit einem Kranz begrüßt euch (Neue Challenge: Vila)",
    ]},
    { name:"Buzzing Beehive (Summendes Bienennest)", flavor:"Ein großes, wildes Bienennest, umgeben von einem Bienenschwarm, summt direkt über einem schmalen Pfad. Woodender wissen, dass die Nester in dieser Jahreszeit schwer von heilsamem Honig sind", options:[
      "Die Bienen schwärmen aus und stechen euch oder eure Gefährten (swollen-2)",
      "Ihr geht ungeschickt mit dem Honig um und werdet sticky-2 und fragrant-2",
      "Ein vorbeikommender Woodender sieht euer Ungeschick und erzählt allen von eurer schlechten Waldkunde (mocked-in-Woodend-3)",
      "Euer Verhalten verärgert eine unsichtbare Präsenz, die die Bienen bewacht (verflucht, Insekten anzuziehen, oder immer eine Arbeiterin, nie eine Königin)",
    ]},
    { name:"Shifting Trees (Wandernde Bäume)", flavor:"Ihr seid sicher, dass sich die moosbewachsenen Bäume in diesem Teil des Waldes ein paar Schritte bewegen, sobald ihr nicht hinseht. Ihr werdet die Spur verlieren, wenn das nicht aufhört", options:[
      "Der Wald spielt mit euch und lässt euch eure Schritte wiederholen (lost-2 und time-passes-2)",
      "Dieses nagende Gefühl steigert sich zu echter Frustration (upset-2) oder Angst (spooked-2)",
      "Euer Mittel zur Navigation, weltlich oder okkult, wird völlig nutzlos (streicht einen Gegenstands- oder Fertigkeits-Tag)",
      "Euer Verstand zerfasert Stück für Stück (bewildered-2)",
    ]},
    { name:"Murmuring Ferns (Murmelnde Farne)", flavor:"Unter gewaltigen, aufragenden Bäumen raschelt und flüstert eine fast unendliche Fläche üppiger Farne. Es sollte nicht schwer sein, hindurchzuqueren, doch das Gestrüpp reicht bis zur Hüfte und verdeckt den Boden", options:[
      "Die Farne wiederholen alles, was ihr hier sagt, wodurch möglicherweise Pläne und Geheimnisse verraten werden (Exposure und forest's-attention-1)",
      "Ihr tretet versehentlich in einen Pilzcluster und verbreitet dessen Sporen in der Luft (intoxicated-3)",
      "Etwas bewegt sich unter den Farnen und macht euch anxious-2 (oder Neue Challenge: Puvka, oder Dire Skunk/Furchterregendes Stinktier)",
      "Am fernen Rand der Farne seht ihr die Silhouette eines prächtigen Hirsches (Neue Challenge: Antlered Forest Spirit/Geweihter Waldgeist, CBII 136, oder Tall Tale Game/Sagenhaftes Wild)",
    ]},
  ],
  challenges:[
    { name:"LONE TRACKER", difficulty:2, type:"Watcher, Pursuer", subtitle:"Einsamer Fährtenleser (Riva Skall)", after:3,
      desc:"Wer in der Wildnis lebt, verlässt sich auf seine Fähigkeiten im Spurenlesen, Jagen, Häuten, Handwerk und Fallenstellen. Sie schätzen keine Eindringlinge in ihr Land, besonders solche, die die Geheimnisse ihrer Familie, über Generationen gehütet, aufdecken wollen. Hier: Riva Skall, die sich vor Fremden verbirgt und ihre Ruhe verteidigt.",
      limits:[
        { label:"HARM (Schaden)", max:2 },
        { label:"AVOID (Meiden)", max:3 },
        { label:"CONVINCE (Überzeugen)", max:3 },
        { label:"SCARE (Erschrecken)", max:3 },
        { label:"TRACK (Aufspüren, Zusatz Reclusive+)", max:3 },
      ],
      tags:["Fährtenleser","Jagdbogen","geflochtenes Netz","camouflaged-2","surly-2","ungesellig","evasive-2"],
      special:[
        { title:"Zusatz: RECLUSIVE+ (Zurückgezogen+)", text:"Riva ist eine Einsiedlerin, die vor allem in Ruhe gelassen werden will. USE CHARM (Charme einsetzen): weicht scheu aus, rennt weg und verschwindet aus der Interaktion (Blocked), verwischt ihre Spuren (reduziert tracked um 1) oder meidet das Thema (reduziert convinced um 1), oder verlangt lautstark, in Ruhe gelassen zu werden, was Aufsehen erregt (drawing-attention-3)." },
      ],
      threats:[
        { name:"TRACK (Spuren verfolgen)", flavor:"Ein aufkommendes Gefühl, verfolgt zu werden, überkommt die Helden", options:["Nähert sich den Helden (entfernt zwei Stufen von einem Versteck-Status oder avoid)","Findet die Helden (Exposure) und bringt sich in Position zum Zuschlagen (poised-2)"] },
        { name:"HUNT (Jagen)", flavor:"Duckt sich leicht, bereit zum Zuschlagen", options:["Greift jemanden mit Bogen oder Jagdmesser an (wounded-2)","Fängt jemanden mit einem Netz (restrained-2)","Versteckt sich im Unterholz (camouflaged-2)"] },
        { name:"TRAP (Falle)", flavor:"Ein plötzlicher Luftzug und ein straffes Seil – eine Falle!", options:["Der Held wird von einer Schlinge erfasst (surprised-2 und restrained-3)","Der Held fällt in eine verdeckte Fallgrube (surprised-2, dann bruised-2 und trapped-2)"] },
      ],
      source:"The Green Maiden – Szene 'In den Aldenweald hinein'. Lone-Tracker-Profil (Core Book, Kapitel V) + Add-On Reclusive+ (Hearts of Ravensdale I, Craggen Highlands), hier für Riva Skall genutzt.",
    },
    { name:"ASHENEPITAPH", difficulty:3, type:"Obstacle", after:9,
      desc:"Tief im Aldenweald gibt es ein Wesen der Dämmerung, halb Mensch oder Vila, halb schwelendes Eisen. Sein Kummer und seine Reue sind so gewaltig, dass niemand, der es sprechen hört, jemals den Wald verlässt, so heißt es. Nur jene von außergewöhnlicher geistiger Stärke können seine eindringliche Stimme ertragen und entdecken, was in den Tiefen des Waldes liegt.",
      limits:[
        { label:"HARM (Schaden)", max:6, note:"Der Held, der den tödlichen Schlag führte, ist verflucht, für immer haunted-by-the-War-6 zu sein." },
        { label:"SLOG THROUGH (Sich durchkämpfen)", max:5, note:"AshenEpitaphs Worte verfolgen weiterhin alle, die sie hörten (haunted-by-the-War-2)." },
        { label:"CONVINCED (Überzeugt)", max:0, note:"—" },
      ],
      tags:["überall Glut","mystically-aware-2","warded-against-magic-2","Mächtiger Geist","Schwelend eiserne rechte Körperhälfte — Vulnerability: die linke Hälfte anvisieren"],
      secrets:[
        { title:"Motiv", text:"Er lehrt Demut jenen, die die Geheimnisse des Waldes suchen, und tötet jene, die die Prüfung nicht bestehen. Versucht ein Sterblicher show-humility 4 und zu beweisen, dass er keine Macht sucht, hört er zu (eine Vulnerability seines Potent Spirit bei sozialen Aktionen) und lässt ihn schließlich (wenn gemaxt) passieren." },
        { title:"Wahre Natur", text:"Er ist eine Inkarnation eines Sterns des Smaragdenen Zweigs und kann innerhalb des Aldenweald nicht verbannt werden." },
        { title:"Ferne Vergangenheit", text:"Sein Stern lehrte die Menschheit Thaumaturgie und empfindet unerträglichen Kummer über seinen Anteil an der Zerstörung des Krieges." },
      ],
      threats:[
        { name:"DISHEARTEN (Entmutigen)", flavor:"Betrachtet den Trupp kalt und referiert über die Sinnlosigkeit ihres Heldentums", options:["Stellt die Absichten und das Verständnis des Trupps infrage — oder zeigt ihnen Visionen und warnt, dass die Vergangenheit sich wiederholen wird, setzen sie ihre Suche fort (disheartened-3 oder streicht einen Motivations- oder Willenskraft-Tag)"] },
        { name:"SLOW (Verlangsamen)", flavor:"Lacht mit dem Klang knirschender Glut, wenn die Helden versuchen, an ihm vorbeizukommen", options:["Der Waldboden wird matschig und faulig, erinnert an die Sümpfe (muddy-2)","Bläst heiße Glut in die Luft, blendet alle in der Nähe (blinded-2)","Wendet seine eiserne Seite dem gefährlichsten angreifenden Helden zu (Blocked)"] },
      ],
      source:"The Green Maiden – Szene 'In den Aldenweald hinein'. Kampagnenspezifische Challenge — AshenEpitaph konfrontiert die Helden auf dem Erdhügel mit den zermürbenden Fragen.",
    },
    { name:"PROTECTIVE BEAR", difficulty:4, type:"Obstacle, Aggressor, Support", subtitle:"Beschützender Bär (Svall, miasma-verderbt)", after:11,
      desc:"Sieht eine Bärenmutter jemanden als Bedrohung für ihre nahen Jungen an, greift sie mit wilder, unnachgiebiger Leidenschaft ein. Hier: Svall, ein einst sprechender Karhu-Bär und Gefährte der Green Maiden, nun vom Miasma zu Aggression getrieben — schützt die Überreste eines toten Soldaten als sein „protectee\".",
      limits:[
        { label:"HARM (Schaden)", max:4 },
        { label:"CALM (Beruhigen)", max:3 },
        { label:"BOND (Bindung)", max:4 },
        { label:"CLEANSE (Reinigen, Zusatz Miasmic+)", max:4 },
      ],
      tags:["scharfer Geruchssinn","scharfe Krallen und Zähne","Baumkletterer","gewaltige Stärke","cautious-2","Furchteinflößende Größe","hungry-3"],
      special:[
        { title:"BESCHÜTZER (DEFENDER)", text:"Würde die Schutzperson des Bären körperlich angegriffen oder verletzt, während der Bär sie schützen kann, wird stattdessen der Bär zum Ziel dieser Aktion – bevor Power für die Aktion gezählt wird." },
        { title:"Zusatz: MIASMIC+ (Miasmatisch+)", text:"Die als Miasma bekannte Verderbnis hat den Bären infiziert. Infected stellt den Kontakt mit dem Miasma dar, hungry dessen Symptome. SPREAD MIASMA (Miasma verbreiten): nähert sich einem Opfer (closing-in-1), beißt jemanden (bleeding-2 und infected-2), wird hungriger (hungry-1), oder infiziert abgestandenes Wasser oder stickige Räume (infected-2). Wird der Bär durch CLEANSE gereinigt, erlangt Svall seine Sprachfähigkeit zurück und gewährt green-maiden's-favor-2." },
      ],
      threats:[
        { name:"THREATEN (Drohen)", flavor:"Richtet sich auf, schnuppert in die Luft, um größer zu wirken", options:["Bäumt sich bedrohlich auf (intimidated-3 für alle Umstehenden)","Steigert sich in Raserei (enraged-4)"] },
        { name:"DEFEND (Verteidigen)", flavor:"Blickt mit besorgten Augen", options:["Stürzt sich zwischen die Gefahr und seine Schutzperson (Block)","Schlägt Bedrohungen für seine Schutzperson weg (protected-2)"] },
        { name:"CHARGE (Ansturm)", flavor:"Rennt mit voller Geschwindigkeit auf eine wahrgenommene Gefahr zu", options:["Schlägt jemanden zu Boden (prone-3)","Kratzt mit den Krallen (wounded-3)","Schnüffelt umher (entfernt zwei Stufen von einem Schleich-Status)","Wird aufgebracht (entfernt zwei Stufen von calm)"] },
      ],
      source:"The Green Maiden – Szene 'In den Aldenweald hinein', „Die kriechende Verderbnis\". Protective-Bear-Profil (CBII, S. 142) + Add-On Miasmic (Hearts of Ravensdale I, S. 280).",
    },
  ],
  revelations:[
    { kind:"Lore", ref:"I", text:"Die himmlischen Wesen des Smaragdenen Zweigs lehrten die Menschheit die Thaumaturgie — und lösten damit mittelbar den Krieg der Thaumaturgen aus." },
    { kind:"Lore", ref:"G", text:"Seit Kurzem entstehen seltsame Kreaturen durch ein verfluchtes Miasma aus den Marschen, berührt von einem uralten Hunger. (wiederholt)" },
  ],
  rewards:[],
  tips:[],
},

/* 3 --------------------------------------------- THE SECOND OFFERING */
{
  key:"secondoffering", kind:"scene", page:"S. 369–370",
  title:"Die zweite Opfergabe", en:"The Second Offering",
  summary:"Jarkos Altar · der Wald erwacht · Einladung der Green Maiden",
  overview:[],
  readAloud:[
    { page:"S. 369", label:"Jarkos Opferstätte", text:
      `Während ihr euch der Stätte von Jarkos Opfergaben nähert, scheinen die Baumstämme sich um euch zusammenzuziehen, sanft schwankend, wachsam und flüsternd, und das Dickicht streift eure Kleider. Weiter als bis hierher haben sich die Bewohner von Woodend nie in den Aldenweald hineingewagt.

Bald öffnet sich vor euch eine kleine Lichtung aus weichem, feuchtem Boden, beherrscht von einer weit ausladenden Eibe. Eine flache Höhlung gähnt zwischen den Wurzeln des Baumes; darin verschlingen sich kleinere Wurzeln zu einem hölzernen Altar, geschmückt mit frischen Knospen und Trieben. Ihr blinzelt, als ihr sie sich winden und wie lebendig wachsend windet seht – sie verknoten sich zur Gestalt einer grünen Frau. Die Gegenwart des Aldenweald ist noch spürbar, eine sanfte Brise, gerade stark genug, um euch daran zu erinnern, dass dies ein lebendiger Ort ist. Ansonsten hält der Wald den Atem an, beobachtet euer Handeln und wartet ab, was ihr tun werdet.

Jarkos Anweisungen waren klar: Vollzieht die Riten. Lasst die Opfergabe dort. Verweilt nicht. Sucht nicht nach Zeichen.` },
  ],
  flow:[
    `In dieser Szene bringen die Helden die zweite Opfergabe dar — nur um festzustellen, dass dies nicht genügt, um die Präsenz im Wald zu besänftigen. Die Green Maiden erwacht und bedroht sowohl die Gefährtenschaft als auch <span class="gloss" onclick="openGloss('woodend')">Woodend</span> direkt, während sie die Helden zugleich prüft und die Würdigen mit einer Einladung belohnt, sie tiefer im Wald zu finden. <span class="gloss" onclick="openGloss('aldenweald')">Der Aldenweald</span> liegt hier unnatürlich still, was Nachforschungen und Vorhersagen erschwert; tragen die Helden noch forest's-attention, spüren sie die Aufmerksamkeit nun deutlich — etwas beobachtet sie aus allen Richtungen zugleich.`,
    `<strong>Erzähler-Notiz — Mehr Spannung:</strong> Für mehr Spannung könnt ihr die Helden ein paar Vignetten der „<span class="gloss" onclick="openJourneyBySlug('ritual')">Ritual</span>“-Journey (CBII 198) spielen lassen, während sie die notwendigen Riten vollziehen, um ihre neue Opfergabe vor dem Wald darzubringen.`,
    `<span class="section-heading">Die Antwort des Waldes</span> Das Darbringen der Opfergabe löst beim Aldenweald eine sofortige Reaktion aus: Zuerst erhalten alle Helden <strong>forest's-attention-1</strong> (kann verringert werden, sofern in ihrer Macht). Dann wird jede vorhandene forest's-attention durch <strong>waking-dreams</strong> gleicher Stufe ersetzt, da der Aldenweald beginnt, aktiv die Gedanken der Helden mit lebhaften Visionen heimzusuchen — dies behindert jede Handlung, die Aufmerksamkeit für die Umgebung erfordert (der Status ändert dabei lediglich seinen Tag-Namen und kann nicht mehr verringert werden). Wer von waking-dreams betroffen ist, erhält daraufhin zwei Visionen nacheinander:`,
    `<span class="section-heading"><span class="gloss" onclick="openGloss('millside')">Millside</span>, traumgeplagt</span>Die erste, alarmierende Vision zeigt Millside im gegenwärtigen Moment: Auch die Bewohner sind von den Wachträumen heimgesucht, das Dorf versinkt im Chaos. Menschen greifen nach unsichtbaren Trugbildern, stolpern über Werkzeug und stürzen in Gräben; Tiere brechen aus ihren Gehegen aus und rennen durchs Dorf; Kinder wandern unbeaufsichtigt weit umher.`,
    `<span class="section-heading">Die Einladung der Green Maiden</span>Die nächste Vision zeigt einen unbekannten, verborgenen Ort im Wald, üppig mit smaragdgrünem Wuchs und umgeben von drei mächtigen Bäumen: Eiche, Ahorn und Buche. Ein Bach aus reinem Wasser fließt zwischen den Bäumen hindurch und verschwindet in einer kaum sichtbaren Felsspalte. „Kommt zu mir“, hören sie eine flüsternde Stimme, und sie wissen: Die Green Maiden lädt sie ein, sie zu besuchen — nicht mit Bosheit, sondern mit Neugier und Belustigung.`,
    `<span class="section-heading">Wohin als Nächstes?</span> Beantworten die Helden den Ruf und wagen sich tiefer in den Aldenweald, um die Green Maiden zu finden, folgt als nächste Szene <strong>Der Wald der Träume</strong> — oder, wenn ihr diese überspringt, direkt <strong>Die Grotte</strong> (S. 372).`,
    `Lehnen die Helden ab und kehren stattdessen nach Millside zurück, verstärken sich die waking-dreams weiter (jedes „Zeit-vergeht“ wird durch waking-dreams gleicher Stufe ersetzt); die Visionen von Millside setzen sich fort und zeigen, dass sich die Lage dort ebenfalls verschlimmert.`,
    `In Millside werden die Helden dem ganzen Dorf wahrscheinlich nicht helfen können — die waking-dreams wachsen dort für jeden weiter, und die Dorfbewohner kommen bald zu dem Schluss, dass nur zwei Möglichkeiten bleiben: Entweder wagen sich die Helden erneut in den Wald, um mit der Green Maiden zu verhandeln, oder das ganze Dorf verlässt Millside — und wahrscheinlich ganz Woodend — für immer.`,
    `<strong>Erzähler-Notiz — Der Wald des Wachtraums:</strong> Wachträume behindern die meisten praktischen Handlungen, doch ein cleverer Held kann sie nutzen, um den Wald in Gebilde seiner eigenen Vorstellungskraft zu formen.`,
  ],
  npcs:[],
  challenges:[],
  revelations:[],
  rewards:[],
  tips:[],
},

/* 4 --------------------------------------------------- FOREST OF DREAMS */
{
  key:"forestofdreams", kind:"scene", page:"S. 370–371",
  title:"Der Wald der Träume", en:"The Forest of Dreams",
  summary:"Vignetten-Journey durch den tiefen Aldenweald",
  overview:[],
  readAloud:[
    { page:"S. 370", label:"Das wahre Antlitz des Aldenweald", text:
      `Das wahre Antlitz des Aldenweald entfaltet sich um euch, in all seiner wandelbaren, traumartigen Beschaffenheit. Bäume ächzen und bewegen sich, Tiere nehmen menschliche Gestalt an, die Erde krümmt sich von euren Füßen weg, und selbst die Luft selbst drückt seltsam gegen euch.

Dinge verändern ihre Form – ein Baum sieht aus einem bestimmten Winkel aus wie eine alte Vettel, verwandelt sich aber zurück in einen knorrigen Stamm, sobald ihr erneut hinseht. Immer wenn das Blätterdach einen Blick auf den Himmel freigibt, hat er eine andere Farbe als zuvor. Eure eigenen Worte klingen spöttisch, furchtsam oder verschlafen, ohne dass ihr es beabsichtigt hättet.

Und doch ist hier noch Schönheit zu finden: sattes Grün, Vogelgesang, der Duft lebendiger Erde. So einladend es auch wirkt, es fühlt sich noch immer gefährlich an. Was auch immer für ein unsichtbares, wirbelndes Auge euch bisher aus der Ferne beobachtet hat, ist nun fest auf euch gerichtet.` },
  ],
  flow:[
    `Die Gefährtenschaft sucht nach der Grotte der Maiden — der Quelle der Unruhe in <span class="gloss" onclick="openGloss('millside')">Millside</span> und dem Ort, an dem sich die Macht der Maiden im Wald bündelt. Auf ihrem Weg durch die tiefsten Winkel des Aldenweald erleben sie sein wahres Wesen hautnah.`,
    `Spielt ein paar Vignetten der „Tiefer Aldenweald“-Journey in der angegebenen Reihenfolge (vollständig unten) — die Realität verbiegt sich zusehends (sich verschiebende Bäume, wechselnde Himmelsfarben, doppelte Worte), und waking-dreams verstärkt sich, was die Helden sowohl behindert als auch droht, sie völlig von der wachen Welt zu lösen. Bei manchen Vignetten könnt ihr die Standardbeschreibung durch eine ersetzen, die auf der Quest des jeweiligen Helden basiert. Am Ende der Journey erreichen die Helden <strong>Die Grotte</strong> der Green Maiden (S. 372).`,
    `<span class="section-heading">Tiefer Aldenweald</span>Dieser Teil des Waldes ist reich an magischer Energie, die jegliche Magie verstärkt, selbst einfache Oldways-Praktiken. Allgemeine Konsequenzen: Eure bloße Anwesenheit beleidigt den Aldenweald (waking-dreams-1). Ihr verliert langsam den Bezug zu eurem wahren Selbst (streicht eine Kraft-Eigenschaft).`,
    `<strong>Ein Land der Träumenden:</strong> Waking-dreams behindert die meisten praktischen Handlungen, doch ein cleverer Held kann den Status nutzen, um den Wald in Gebilde seiner eigenen Vorstellungskraft zu formen.`,
  ],
  npcs:[],
  vignettes:[
    { name:"Playful Path (Verspielter Pfad)", flavor:"Der Waldpfad windet und krümmt sich voraus, für jeden Gefährten anders: geradeaus für den einen, rechts abbiegend für einen anderen, links für einen dritten, und so weiter", options:[
      "Ihr werdet von den anderen getrennt (Complication oder lost-2)",
      "Euer Orientierungssinn ist beeinträchtigt (disoriented-2)",
      "Euer Vertrauen in euren Weg wird erschüttert (doubting-2)",
      "Ihr trennt euch und trefft euch wieder, aber ihr seid nicht mehr dieselben (emotionale Distanz oder streicht Beziehungs-Tags)",
    ]},
    { name:"Parting Shadows (Scheidende Schatten)", flavor:"Unter euren Füßen löst sich euer Schatten von eurem Körper und beginnt, in eine andere Richtung fortzugehen. Ihr fühlt, als würde er mit einem Teil von euch fortgehen, aber ihr könnt nicht sagen, welcher", options:[
      "Euer Schatten geht mit eurer Traurigkeit fort (light-hearted-2), eurem Frohsinn (saddened-2), eurer Verantwortlichkeit (carefree-2), usw.",
      "Euer Schatten geht mit einer Fähigkeit, die ihr beherrscht, oder eurem Wissen fort (streicht einen Tag)",
      "Der Schatten grollt euch und spielt euch Streiche (distracted-2)",
      "Ein Schatten, der euch oder euren Gefährten gehört, nimmt die Gestalt seines Besitzers an (Neue Challenge: Changeling/Wechselbalg, CBII 157)",
    ]},
    { name:"We've Been Here Before (Wir waren schon hier)", flavor:"An einer vertrauten Kreuzung seht ihr Phantome von euch selbst in einem vergangenen Moment im Aldenweald, streitend darüber, wo abzubiegen sei", options:[
      "Der Streit wird hitziger, und bittere Worte fallen (streicht einen Fellowship-Beziehungs-Tag pro Held)",
      "Beim Betrachten eurer selbst von außen werdet ihr seltsam befangen (self-conscious-2)",
      "Während ihr die Kreuzung verlasst, fühlt ihr euch, als wärt ihr euer vergangenes Selbst geworden (Blocked; kehrt zu einer zuvor gespielten Vignette zurück und setzt diese Journey von dort fort, bis ihr schließlich wieder zu dieser Vignette gelangt)",
    ]},
    { name:"Unexpected Meeting (Unerwartete Begegnung)", flavor:"Jarko, oder eine andere Gestalt aus eurer Vergangenheit, erscheint auf dem Pfad und drängt und fleht euch an, umzukehren und dem Volk in Millside zu helfen, da sich ihre Träume verstärken", options:[
      "Ihr werdet von Schuld zermürbt (guilty-2/schuldig-2)",
      "Die Gestalt verfolgt euch weiter durch den Wald (waking-dreams-1)",
      "Die Gestalt greift aus Verzweiflung an (Neue Challenge: Brutal Outlaw/Brutaler Gesetzloser, CBII 131, Commoner Militia/Bürgermiliz, CBII 113, oder ihr eigenes Challenge-Profil)",
    ]},
    { name:"Constricting Passage (Sich verengender Durchgang)", flavor:"Die über euch ragenden Bäume wachsen niedriger und niedriger, verengen den Pfad, während ihre Äste scharfe Dornen entwickeln", options:[
      "Ihr seid bleeding-3, bis ihr aus dem engen Pfad herauskriecht",
      "Die Dornen verfangen sich in Ausrüstung oder Wertsachen und ziehen sie ins Dickicht (streicht zwei Tags)",
      "Ihr beginnt euch klaustrophobisch zu fühlen (panicked-2 oder paralyzed-2)",
    ]},
  ],
  challenges:[],
  revelations:[],
  rewards:[],
  tips:[],
},

/* 5 --------------------------------------------------------- THE GROTTO */
{
  key:"grotto", kind:"scene", page:"S. 372–374",
  title:"Die Grotte", en:"The Grotto",
  summary:"Die Green Maiden / SeedWaker · Rede · Opfergaben · Kern-Enthüllungen 5 & 6",
  overview:[],
  readAloud:[
    { page:"S. 372", label:"Die Grotte der Green Maiden", text:
      `Der Pfad, der euch hinab in diese Höhle führte, verblasst rasch aus eurer Erinnerung. Ein Rinnsal aus Wasser sickert von der Decke, über einen steinigen Pfad hinab, in den Teich zu euren Füßen. Von oben hängen zarte Wurzeln wie Fäden herab und schwanken leicht, obwohl kein Wind weht. Die Felsen, die das Wasser sprenkeln, und der Boden, auf dem ihr steht, sind bedeckt mit Moos, das in sanftem grünem Licht schimmert. Die Luft riecht grün und frisch, doch der Duft ist flüchtig, kommt und geht mit jedem Atemzug, als gehöre er zu diesem Ort und nicht zu euch, um ihn mitzunehmen, wenn ihr geht.

Vor euch, im Wasser, ist eine Gegenwart. Auf den ersten Blick erscheint sie wie eine hochgewachsene, majestätische Frau, ruhend auf einer Felsformation in der Mitte des Teichs, als sei die Höhle selbst ein für sie geschaffener Thron. Nach ein paar weiteren Herzschlägen erkennt ihr: Die Felsen, die von der Decke hängenden Ranken und das Wasser selbst sind nicht von ihr getrennt. Statt einer Frau in der Höhle ist sie ein Teil davon, verbunden mit den Wesenszügen dieses Ortes, als sei sie aus ihnen gemacht. Sie erhebt sich, überragt euch und blickt euch mit Augen voller Staunen und belustigter Neugier an.` },
    { page:"S. 372", label:"Die Rede der Green Maiden", after:1, text:
      `„Ihr steht vor der Green Maiden des Smaragdenen Zweigs, dem stillen Ruf, den alle Samen hören, wenn ihre Zeit gekommen ist. Ihr seid so weit gekommen, habt so hart geschuftet. Wollt ihr nicht erwachen? Wollt ihr nicht aus eurem Schlaf aufstehen und euch die Spinnweben aus den Augen wischen? Die Träume, die ich sandte, waren für euch bestimmt, um euch zu finden. Sie ängstigen euch nur, weil ihr euch weigert zu sehen, was vor euch liegt.

Ihr seid schwach und zerbrechlich. Ihr lebt in einem kleinen Winkel eurer Welt, ohne es zu wissen. Ihr habt nur eine Jahreszeit, um zu einem Baum heranzuwachsen, bevor der große Frost kommt.

Eure Lady der Dales hat euch zu lange beschützt. Ihr seid ihre Samen, doch selbst Samen müssen zur rechten Zeit sprießen, oder sie sterben.

Ihr wünscht euch, dass die Träume aufhören, nicht wahr? Dann erwacht. Macht mir eine Opfergabe eurer bequemen, gemütlichen Hülle, all dessen, was ihr zurücklassen müsst, um zu wachsen. Erst dann werdet ihr aufhören, meinen Ruf in eurem Schlaf zu hören …“` },
  ],
  flow:[
    `Die Green Maidens Höhlenzuflucht. Sie erweist sich als Teil der Höhle selbst (Fels, Ranken, Wasser) — tatsächlich <strong>SeedWaker</strong>, ihre Inkarnation (sie unterscheidet gegenüber den Helden nicht zwischen Stern und Inkarnation). Dass die Helden wie erwartet eintreffen, sagt der Green Maiden, dass sie die Helden sind, nach denen sie gesucht hat — Samen, bereit zu sprießen. Mit ihrer Rede verlangt sie eine neue Opfergabe: dass die Helden ihr altes Selbst hinter sich lassen und einen Schritt in eine größere Welt wagen.<br><br><strong>Die Green Maiden / SeedWaker</strong> <em>(Stern der Sprießenden Dinge (Inkarnation))</em> — Erscheint als hochgewachsene, majestätische Frau, untrennbar mit Fels, Ranken und Wasser der Grotte verwoben. Verlangt eine symbolische Opfergabe des „alten Selbst" der Helden, um sie zum Wachsen zu drängen — spielerisch-verspielt statt böswillig, aber gefährlich, wenn sie den Glauben an die Helden verliert.`,
    `Unter all ihren großspurigen Verkündigungen zeigt die Green Lady einen Hauch von Verspieltheit, als spiele sie ihre Kränkung nur vor. Sie wird nicht wirklich zornig, selbst wenn sie angegriffen wird, sondern warnt den Angreifer lediglich, dass die Höhle ein Teil von ihr ist und sie beschützen wird — und erlaubt dann, mit derselben beiläufigen Freundlichkeit, dass ihre Grotte an ihrer Stelle zurückschlägt.`,
    `<strong>Was die Green Maiden verlangt:</strong> SeedWaker wird den Helden den Unterschied zwischen <span class="gloss" onclick="openGloss('stars-vs-incarnations')">Sternen und Inkarnationen</span> nicht erklären (S. 225). Sie tritt als die Green Maiden auf, hört auf diesen Titel und spricht in ihrem Namen.`,
    `<span class="section-heading">Mögliche Opfergaben</span>
<ul>
<li>„Etwas, dem du entwachsen bist.“</li>
<li>„Etwas, das du hoffentlich nicht mehr brauchen wirst.“</li>
<li>„Den Teil von dir, der dir am meisten Angst macht.“</li>
<li>„Den schwächsten Teil von dir.“</li>
<li>„Ein Andenken, das dich zurückhält.“</li>
<li>„Einen Beweis deiner Hingabe.“</li>
<li>„Ein Sinnbild dessen, was du zu werden hoffst.“</li>
</ul>`,
    `Waking-dreams wird hier harmlos (Status läuft aus). Wird sie angegriffen, warnt sie, dass die Höhle selbst sie beschützen und sich rächen wird; ihre untere Hälfte (eine riesige Spinne) kann hervorbrechen, wenn sie zu <strong>DISAPPOINT 4</strong> getrieben wird.`,
    `<span class="section-heading">Viele Enthüllungen</span> Neben der Auseinandersetzung könnt ihr dieses Gespräch auch nutzen, um wichtige Reihen-Enthüllungen zu vermitteln. Gewitzte Helden können aus den Worten der Green Maiden mehr Informationen herauslesen oder sie überzeugen, mehr preiszugeben — sie tut dies gerne, wenn auch mit einer gehörigen Portion rätselhafter Mystik, denn letztlich wünscht sie sich, dass die Helden eine Queste antreten. Sie kann außerdem beliebige noch ausstehende Lore-Enthüllungen ergänzen, die die Helden an diesem Punkt der Reihe kennen sollen.`,
    `Sie weist die Helden zu den „Wurzeln der Oldways“, verborgen unter dem Saum der Lady — sie kann nicht genau sagen, wo, doch mit folgenden Worten:`,
    `<span class="callout"><span class="co-title">Die Wurzeln der Oldways</span><em>„Die Oldways sind das Geschenk eurer Herrin an euch, ein Geschenk, das sie einst von uns erhielt. Wollt ihr euer Volk schützen, müsst ihr die Vergangenheit aufdecken. Findet die Wurzeln der Oldways. Weckt sie. Sie wurden unter ihrem umhüllenden Saum in den Dales verborgen, weshalb ich euch nicht sagen kann, wo ihr suchen sollt — doch folgt eurem Herzen, und es wird euch dorthin führen.“</em></span>`,
    `<span class="section-heading">Mögliche Ausgänge</span> Wird sie besänftigt (Opfergabe dargebracht) oder überwunden, enden die waking-dreams sofort, und <span class="gloss" onclick="openGloss('millside')">Millside</span> ist wieder sicher. Verlassen die Helden den Ort ohne die Zustimmung der Green Maiden, ohne sie aber besiegt zu haben, kehren die waking-dreams zurück, und Millside wird praktisch unbewohnbar — es sei denn, die Helden finden einen anderen Weg, die Träume abzuwenden. Wie die Rückreise durch den Aldenweald verläuft, hängt davon ab, wie die Helden die Dinge mit der Green Maiden zurückgelassen haben: <span class="gloss" onclick="openGloss('aldenweald')">Der Aldenweald</span> kann ihre Rückkehr beschleunigen — oder zu einem feindseligen, albtraumhaften Wald werden.`,
  ],
  npcs:[],
  challenges:[
    { name:"THE GREEN MAIDEN", img:"greenMaiden", difficulty:4, type:"Influence, Mystery", subtitle:"Die Grüne Jungfer", after:2,
      desc:`Ein geheimnisvolles Wesen des Aldenweald-Waldes – die Grüne Jungfer soll eine Frau sein, ganz aus Moos, Efeu und Blättern. Sie wohnt in einer tiefen Waldgrotte, die seit Jahrhunderten kein Sterblicher betreten hat. Als Herrin der Träume und des Wachsens verlangt sie von denen, die sie aufsuchen, freiwillig alles darzubringen, was ihr eigenes Wachstum hemmen könnte. Wer dies unterlässt, beleidigt sie auf eigene Gefahr.<br><br>Macht ein Held ein Opfer (make an offering), ist das eine Quick action. Erfolg gibt offering-1 auf MAKE OFFERING. Die Grüne Jungfer akzeptiert keine anderen Opfergaben.`,
      limits:[
        { label:"HARM (Schaden)", max:5 },
        { label:"INTIMIDATE (Einschüchtern)", max:0, note:"—" },
        { label:"MAKE OFFERING (Opfer darbringen)", max:4 },
        { label:"DISAPPOINT (Enttäuschen)", max:4, note:"Verliert die Grüne Jungfer den Glauben an die Helden, tritt ihre Unterhälfte – die einer riesigen Spinne – aus der Erde hervor und sie greift an (Neue Challenge: Monstrous Spider & Web/Monströse Spinne & Netz, CBII 141, behält aber ihre Limits)." },
      ],
      tags:["gefasste Erhabenheit","amused-curiosity-2","Schwer fassbar und unberührbar — Vulnerability: Angreifer ohne waking-dreams","Mächtiger Geist"],
      secrets:[
        { title:"Was sie ist", text:"Die Green Maiden ist der Stern der Sprießenden Dinge, ein Mitglied des Smaragdenen (Verbrannten) Zweigs. Was die Helden treffen, ist SeedWaker, ihre Inkarnation. Innerhalb des Aldenweald kann sie nicht verbannt werden." },
        { title:"Beweggründe", text:"Sie verspürt eine Dringlichkeit, Helden wachsen zu lassen, damit sie für die kommende Große Gefahr bereit sind — doch das lässt sie zu hart drängen. Sie kann mit 6 beschworen werden (beseeched-6), aufzuhören — durch Handlungen, die ihr zeigen, dass sie ihre „Samen“ verletzt und gefährdet." },
      ],
      threats:[
        { name:"URGE (Drängen)", flavor:"Drängt die Helden, zu wachsen, indem sie ihre „alten Hüllen\" opfern", options:["Tadelt den Helden für unzureichende Opfergabe (ashamed-3)","Zeigt dem Helden Visionen dessen, was sein könnte (inspired-3, worried-3, oder afraid-3)","Stellt den Wert oder die Aufrichtigkeit der Opfergabe infrage, verlangt Beweis (Yes, But…, hält offering-1 zurück, bis sie gegeben wird)","Ermutigt den Helden, sein Wachstum zu beschleunigen (durch Markieren von Abandon oder Milestone) (Complication)","Zeigt Verachtung für die Opfergabe des Helden oder deren Fehlen (disappointed-1)"] },
        { name:"DEFEND (Verteidigen)", flavor:"Warnt herzlich davor, sie zu beleidigen oder anzugreifen", options:["Belebt Felsen und Vegetation, um jemanden festzuhalten (restrained-4) oder zu verwunden (wounded-3), und wird disappointed-1","Strahlt in jenseitiger Schönheit, umgeben vom natürlichen Leuchten der Höhle (awestruck-4)"] },
      ],
      source:"The Green Maiden – Finale Szene 'Die Grotte'. Kampagnenspezifische Challenge (Twilight Deck – Creatures of Twilight).",
    },
  ],
  revelations:[
    { kind:"Core", ref:"5", text:"Es ist die Macht der Lady, die die Dales beschützt hat, aber sie versagt." },
    { kind:"Core", ref:"6", text:"Die Wurzeln der Oldways zu finden könnte ein Weg sein, den Schutz über den Dales wiederherzustellen." },
  ],
  rewards:[
    "Abschiedsgeschenke bei gütlicher Trennung: Segen des Weichen Bodens (Geländenavigation), Segen der Fernen Erinnerung (Fernsicht an einen zuvor besuchten Ort), Segen der Tiefen Wurzeln (körperliche Heilung).",
  ],
  tips:[],
},

/* 6 --------------------------------------------------------- AFTERMATH */
{
  key:"aftermath", kind:"aftermath", page:"S. 374",
  title:"Nachspiel", en:"Aftermath",
  summary:"Rückkehr nach Woodend & Review-Fragen",
  readAloud:[],
  showImprovement:true,
  flow:[
    `Bei der Rückkehr nach <span class="gloss" onclick="openGloss('woodend')">Woodend</span> stellen die Helden fest, dass sie dreimal so lange im Wald waren, wie sie dachten! Wie sie empfangen werden, hängt stark von den Umständen ab. Erwägt folgende Fragen, während ihr die Ereignisse dieses Abenteuers zusammenfasst.`,
    `Die Helden haben ein mächtiges Geschöpf der Dämmerung getroffen und möglicherweise eine Freundschaft mit ihm geschlossen — und das Gerücht davon könnte sich verbreiten, sodass sowohl die Green Maiden als auch die Gefährtenschaft zu einem vielbesprochenen Teil des dalischen Klatsches werden. Waren sie zuvor noch nicht bekannt, könnten sie nun durchaus zu lokalen Legenden in Woodend und den Dales werden.`,
  ],
  npcs:[],
  challenges:[],
  extra:{ heading:"Fragen zum Rückblick", type:"list", items:[
    "Was war das Schicksal von Millside und seinen Albträumen bzw. Wachträumen? Konnten die Helden das Dorf retten, oder mussten seine Bewohner es verlassen oder sich mit einer neuen, fremdartigen Realität abfinden?",
    "Wie sind die Helden aus dem Aldenweald und ihrer Begegnung mit der Green Maiden hervorgegangen? Wer hat was zurückgelassen, und wer hat an welchem Teil seiner selbst festgehalten?",
    "Was haben die Helden über die Welt jenseits der Dales gelernt und über die vielen mystischen Geschöpfe, die sie bewohnen? Wie haben die Maiden, AshenEpitaph oder der verderbte Bär ihre Sicht auf die Welt verändert?",
    "Was gedenken die Helden nun mit all dem anzufangen, was sie gelernt haben?",
  ]},
  rewards:[],
  revelations:[],
  tips:[],
},

];

ADVENTURES.find(a=>a.id==="a4").scenes = A4_SCENES;
