/* ---------- Adventure 1 : full scene data ---------- */

const A1_SCENES = [

/* 0 ---------------------------------------------------------- INTRO */
{
  key:"intro", kind:"intro", page:"S. 315–317",
  title:"Überblick", en:"A Shadow in the Barley",
  summary:"Hintergrund, Hooks & Szenenfolge",
  overview:[],
  readAloud:[
    { page:"S. 315", label:"Eröffnung des Abenteuers", text:
      `An diesem trüben Nachmittag scheint das behäbige, gewöhnliche Leben im Dorf Ravenhome weiterzugehen wie eh und je. So ist es, seit Menschengedenken: Die Feldarbeiter mühen sich in den Obstgärten, die Hausfrauen kochen das Abendbrot, die Alten schaukeln in ihren Stühlen, während der Dorfälteste bedächtig um den Folkhearth schreitet und die Kinder im hohen Gerstenfeld spielen.

Doch die Dinge sind nicht, wie sie scheinen. An diesem trüben Nachmittag, draußen auf den Feldern, weht ein kalter Wind. Etwas bewegt sich in der Gerste, uralt und schwerfällig. Sein schwerer, stampfender Gang ist so bedeutungsschwer wie die Schritte des Schicksals selbst – seine bloße Erscheinung dazu bestimmt, den Lauf des Lebens im Ravensdale unwiderruflich zu verändern, und mit ihm das Schicksal einer Handvoll Herzen im Besonderen.` },
  ],
  flow:[
    `Im Herzen des Tals von <span class="gloss" onclick="openGloss('ravensdale')">Ravensdale</span> (S. 94) liegt das stille Dorf Ravenhome. Wie der Rest der Dales genoss auch Ravenhome jahrhundertelang ein friedliches Dasein, fern der Gefahren der Außenwelt. Gerstenfelder und Apfelgärten überziehen das Land, bewacht von den allgegenwärtigen dalischen Raben. Die Leute leben hier zufrieden ein ruhiges Leben – auch wenn es im Schatten der vielen Ruinen des Alten Königreichs vergangener Generationen geschieht.`,
    `<strong>Die schleichende Gefahr:</strong> Ein uraltes, schwärendes Miasma aus den Shiverwash-Marschen ist in das Wasser unter den Dales gesickert. In der versunkenen Ruine eines Wachturms aus den Tagen <span class="gloss" onclick="openGloss('gwyrdolin')">Alt-Gwyrdolins</span> (S. 39) schlug es Wurzeln und erweckte den Moorleichnam eines Wächters, der auf dem Grund des wassergefüllten Bauwerks gelegen hatte. Es trieb ihn dazu, aus der Ruine hervorzukommen, menschliches Leben zu suchen – und auszulöschen. Dieser <strong>Waken Sentry</strong> hat den Weg zum nahen, beschaulichen Dorf Ravenhome gefunden, wo er die kleine Welt der Helden auf den Kopf zu stellen droht.`,
    `Oldways-Praktizierende glauben, das Miasma – eine Wanecraft-Schöpfung, die die Marschen durchdringt – sei durch einen Oldways-Schrein in den Bounds in Schach gehalten worden, die sogenannte <strong><span class="gloss" onclick="openGloss('dolorous-lady')">Dolorous Lady</span></strong>, mittels eines Rituals, bei dem das <strong>Lied der Tränen</strong> gesungen wird. Doch das Ritual wurde seit Jahren nicht mehr vollzogen, und die Schutzbanne scheinen versagt zu haben. In Wahrheit ist es ein anderer, verwandter Schutz, der versagt – das wird erst viel später enthüllt (Core Revelation 5, S. 415).`,
    `Nun müssen sich die Helden der üblen Kraft von jenseits der Dales stellen, die sich seit Jahrhunderten nicht gezeigt hat, und aufbrechen, um die Quelle dieser bösartigen Einflüsse aufzudecken und ihre Heimat zu schützen.`,
    `<span class="callout"><span class="co-title">Ablauf</span>Nach dem optionalen Auftakt (oder als eigener Beginn) ziehen die Helden durch die Gerstenfelder und begegnen Willow, die vom Waken Sentry bedroht wird. Nachdem die Gefahr gebannt ist, kann die Gefährtenschaft entweder zurück nach Ravenhome, um das Dorf zu warnen, oder der Spur der Kreatur zum versunkenen Wachturm folgen. Sobald sie die Verderbnis entdecken, die ins Ravensdale sickert, reisen die Helden zur einsamen Hütte der Weisen Einen und beraten sich mit Rosamund. Schließlich müssen sie die Schutzbanne der Dolorous Lady wieder erwecken, um den Einbruch aus den Marschen zu verlangsamen. Nach dem Abschluss in den Marschen erhebt sich eine neue Bedrohung, wenn „Ein Mörder aus der Ferne" einen Anschlag auf das Leben der Weisen Einen oder eines Helden verübt.</span>`,
  ],
  npcs:[],
  extra:{ heading:"Aufhänger", type:"list", items:[
    "Die Helden sind Einheimische oder Besucher, die beim alljährlichen Kochen der Sapsauce helfen und den Sirup anschließend über die Gerstenfelder ins Dorf bringen sollen.",
    "Die Helden sind Einheimische des Ravensdale und gehen im Rahmen ihres Alltags den Weg am Feld entlang.",
    "Ein Held besucht Willow und wurde angewiesen, sie auf den Feldern zu suchen.",
    "Einer oder mehrere Helden sind Red Marshals, die zum Schutz Ravenhomes abgestellt sind und beiläufig die Felder abgehen.",
    "Ein Held könnte ein zu Besuch weilender Oldways-Praktizierender oder die oberste Weise Eine des Ravensdale sein, unterwegs zum Dorf.",
  ]},
  extra2:{ heading:"Szenenfolge dieses Abenteuers", type:"list", items:[
    "1 · Cooking the Sapsauce — optionaler, empfohlener Auftakt (Journey)",
    "2 · The Barley Fields — Willow wird vom Waken Sentry bedroht",
    "3 · Back at Ravenhome — Dorfversammlung (Countdown Challenge)",
    "4 · The Sunken Watchtower — SorrowBalm, Tauchgang, die Truhe",
    "5 · The Wise One's Lonesome Cabin — Rosamund",
    "6 · The Dolorous Lady — Ritual im Grenzgebiete-Marschland, Mirelings",
    "7 · A Murderer From Afar — optionaler Abschluss (Attentat)",
    "8 · Aftermath",
  ]},
  challenges:[],
  revelations:[],
  tips:[],
},

/* 1 ---------------------------------------------------- SAPSAUCE */
{
  key:"sapsauce", kind:"scene", page:"S. 317–318",
  title:"Cooking the Sapsauce", en:"Cooking the Sapsauce",
  quick:[
    "<b>Worum es geht:</b> Optionaler Auftakt. Die Gruppe hilft Lance Tubroot und seinen 12 Kindern, Sapsauce zu brauen.",
    "<b>Ablauf:</b> Journey über mehrere Tage aus fünf Vignetten: Saft sammeln · Die Störenfriede · Sapsauce kochen · Trinkgelage · Hastiges Abfüllen. Lance entscheidet, wer was macht. Weitere Vignetten bei Bedarf aus der „Common Weal“-Journey (S. 254).",
    "<b>Gilt die ganze Szene:</b> dizzy-2 durch die Dämpfe, kann zu nauseated oder Kopfschmerzen gleicher Stufe werden.",
    "<b>Mögliche Challenges:</b> Swarm of Insects (aus „Saft sammeln“) · Masked Rascals (aus „Die Störenfriede“).",
    "<b>Figuren:</b> Lance Tubroot: jovial, aber kritisch bei Fehlern, weich bei seinen Kindern. Ivy, Ollo & Jurard: die Streichespieler.",
    "<b>Belohnung:</b> Ist Lance zufrieden: eine Tonflasche Sapsauce pro Hero + supplies-1. Bei außergewöhnlichem Talent teilt er das Familienrezept (tempted-1).",
    "<b>Weiter:</b> Sapsauce nach Ravenhome liefern, das führt in „Die Gerstenfelder“."
  ],
  summary:"Optionaler Auftakt · Journey im Tubroot-Obstgarten",
  overview:["Die Fellowschaft erreicht den Tubroot-Obstgarten, Lance bittet um Hilfe beim Sapsauce-Brauen", "Die Tubroots: Familienrezept und Kessel sind ein Oldways-Erbstück", "Die Herstellung läuft als mehrtägige Journey — dizzy-2 als Dauerkonsequenz durch die Dämpfe", "Die Lieferung des fertigen Sirups nach Ravenhome führt direkt in die Gerstenfelder"],
  readAloud:[
    { page:"S. 317", label:"Der Tubroot-Obstgarten", text:
      `Unter dem Blätterdach saftig-grüner Apfelbäume könnte man den Tubroot-Obstgarten am Rande von Ravensdale leicht für einen natürlich gewachsenen Hain halten, verstreut zwischen den alten Wurzeln des Hügels. In die größten der Bäume sind Zapfhähne getrieben, und der Duft des goldenen Safts steigt euch aus den aufgestellten Eimern in die Nase. Der Weg schlängelt sich in schwindelerregenden Kurven, bis er schließlich auf eine Lichtung mündet, wo eine orange gestrichene Scheune steht. Ringsum bereiten junge Landarbeiter den Saft zur Ernte und Verarbeitung vor – zu einer der begehrtesten Köstlichkeiten des Ravensdale: dem Sapsauce-Sirup.

Ein großer, bärtiger Mann tritt euch entgegen, während ein paar seiner Kinder ihn necken und johlend um ihn herumlaufen.` },
  ],
  flow:[
    `In dieser Szene erreicht die Gefährtenschaft den <strong>Tubroot-Obstgarten</strong>, der von <strong><span class="gloss" onclick="openGloss('lance-tubroot-ref')">Lance Tubroot</span></strong> bewirtschaftet wird, der den Obstgarten mit seinen 12 Kindern als Farmhands betreut. Die Helden werden gebeten, der Familie beim Brauen von Sapsauce zu helfen, einem köstlichen Sirup aus dem Saft eines besonderen Baums, bekannt als Sapsauce-Baum. Der Herstellungsprozess kann für unerfahrene Brauer jedoch heikel sein und führt zu Unfug in der Brennerei sowie zu unfreiwillig komischer Schwindeligkeit durch das Einatmen der Saftdämpfe.`,
    `<span class="section-heading">Die Tubroots</span>Die Familie Tubroot bewirtschaftet diesen Obstgarten schon seit ein paar Generationen. <strong>Lance Tubroot</strong> betreut den Obstgarten mit seinen 12 Kindern als Farmhands. Die Qualität des Sapsauce beruht auf dem Familienrezept und einem generationenalten, gusseisernen Kessel – einem Oldways-Erbstück (siehe <span class="gloss" onclick="openGloss('cooking-magic')">Cooking Magic</span>, S. 152).`,
    `Die Herstellung ist eine Journey aus den unten stehenden Vignetten (weitere lassen sich bei Bedarf aus der <span class="gloss" onclick="openJourneyBySlug('common-weal')">„Common Weal“-Journey</span>, S. 254, ergänzen) — über mehrere Tage: Saft sammeln, kochen, mit den richtigen Zutaten verarbeiten. <strong>Lance hat das letzte Wort darüber, wer was macht.</strong> Allgemeine Konsequenz während der gesamten Szene: <strong>dizzy-2</strong> durch die Dämpfe des süßen Safts und der besonderen Oldways-Wurzeln im Kochfeuer — kann sich zu nauseated oder Kopfschmerzen gleicher Stufe weiterentwickeln.`,
    `Ist der Sirup fertig, werden die Helden gebeten, etwas Sapsauce nach Ravenhome zu liefern — das führt direkt in <strong>Die Gerstenfelder</strong>.`,
  ],
  npcs:[
    { name:"Lance Tubroot", after:2, role:"Obstgärtner", text:"Stämmiger, bärtiger Mann, gebaut wie ein Fass. Zeigt gern ein jovial-freundliches Lächeln, nimmt die Arbeit auf dem Hof aber ernst und ist <span class=\"flavor-add\">kritisch bei Fehlern</span>. Er hat jedoch <span class=\"flavor-add\">einen weichen Punkt für seine Familie</span>, er lässt einige seiner Kinder Unfug treiben, selbst wenn das die Arbeit stört. Hofft insgeheim, dass eines seiner Kinder das Familienerbe eines Tages fortführt." },
    { name:"Ivy, Ollo & Jurard", role:"Die Störenfriede", text:"Die notorischsten Streichespieler unter Lances zwölf Kindern. Immer auf der Suche nach einer Gelegenheit für einen Prank." },
  ],
  vignettes:[
    { name:"Collecting the Sap — Den Saft sammeln", flavor:"Es gibt viele Bäume ringsum, doch nur die gesündesten liefern den besten Saft. Auch das Einschlagen der Zapfhähne ist nicht so einfach.", options:[
      "Der geerntete Sirup ist von minderer Qualität.",
      "Die Muskeln schmerzen vom vielen Hämmern (stiff-1).",
      "Das Hämmern stört ein Bienennest (Neue Challenge: Swarm of Insects, siehe unten).",
    ]},
    { name:"Meddlesome Kids — Die Störenfriede", flavor:"Ivy, Ollo und Jurard blitzen euch mit diebischem Grinsen an. Bestenfalls entgeht ihr ihren Streichen.", options:[
      "Sie schütten euch klebrigen Saft oder verarbeiteten Sirup über (sticky-2 oder dizzy-2).",
      "Sie petzen bei ihrem Vater, ihr würdet den Sirup falsch kochen (Complication).",
      "Sie legen richtig los mit ihrem Streich (Neue Challenge: Masked Rascals, siehe unten).",
    ]},
    { name:"Cooking the Sapsauce — Den Sapsauce kochen", flavor:"Lance trägt euch auf, die Bottiche sanft … ganz sanft! … über kontrollierter Flamme zu rühren, befeuert mit einer seltsamen grünen Wurzel. Es verlangt volle Konzentration.", options:[
      "Ihr macht einen Fehler, und Lance hält mit seiner Kritik nicht hinterm Berg (shamed-2).",
      "Ihr seid allergisch gegen eine der Zutaten (itching-2 oder sick-2).",
      "Die Hitze macht euch müde und verschwitzt (dizzy-2 oder tired-2).",
      "Ihr befolgt das Rezept falsch, das Feuer beginnt stark zu qualmen — verschwommene Sicht, verlangsamtes Denken oder verwaschene Sprache.",
    ]},
    { name:"Drinking Party! — Trinkgelage!", flavor:"Die ganze Familie genießt einen feierlichen Umtrunk mit süßem Snack, wenn die harte Arbeit getan ist. Immerhin gibt es nur eine Möglichkeit, sicherzugehen, dass der Sirup perfekt gelungen ist.", options:[
      "Ihr werdet zu einem Naschwettessen gedrängt (sugar-rush-3 oder embarrassed-2).",
      "Ihr werdet mitgerissen, zu tanzen und zu singen (tired-1).",
      "Ihr werdet beschwipst und plaudert ein peinliches Geheimnis aus (inebriated-2 und Exposed).",
    ]},
    { name:"Rushed Bottling — Hastiges Abfüllen", flavor:"Der Sapsauce muss schnell abgefüllt werden, bevor er abkühlt — Flaschen, Krüge und Fläschchen stapeln sich prekär. Schafft ihr es, ohne etwas zu zerbrechen?", options:[
      "Allein die Nähe zu den dampfenden Bottichen macht euch dizzy-2.",
      "Der süße Duft des Produkts ist zu verlockend, um nicht zu kosten (sugar-rush-1).",
      "Eine Flasche fällt vom Stapel und reißt den Rest mit sich (sticky-3, Lance erhält angry-2).",
    ]},
  ],
  challenges:[
    { name:"SWARM OF INSECTS", difficulty:2, type:"Sapper, Aggressor",
      desc:"Ein Insektenschwarm, gestört beim Hämmern der Zapfhähne oder generell von Nahrung angezogen — im Obstgarten zunächst noch als kleine Eskalation gedacht, kann aber überall auftauchen, wo etwas Süßes oder Faulendes lockt.",
      limits:[
        { label:"DESTROY (Vernichten)", max:3 },
        { label:"DISPERSE (Verscheuchen)", max:3 },
      ],
      tags:["von Nahrung angezogen","überwältigend","(wählbar: Mückenwolke / feldverschlingender Schwarm / Landplage)"],
      threats:[
        { name:"SWARM (Schwärmen)", flavor:"Summt und krabbelt heran, um sich über die Nahrungsquelle herzumachen", options:["Widerlich für Zartbesaitete (repulsed-2 oder queasy-2/übel-2)","Beißt und sticht (in-pain-2 oder itchy-2)","Verschlingt Vorräte, Ernte oder gar Gebäude (streicht Tags, short-on-supplies-2, oder Ill Tidings)"] },
      ],
      source:"A Shadow in the Barley – Szene 'Cooking the Sapsauce'. Eskalation der Vignette 'Collecting the Sap', falls ein Bienennest gestört wird.",
    },
    { name:"MASKED RASCALS", difficulty:2, type:"Quarry, Sapper",
      desc:"Auch in braven dalischen Familien treiben manche Jugendliche unter Masken ihr Unwesen und spielen nächtens Streiche. In manchen Dales gilt das als Mutprobe oder Teil eines Festes — ertappt oder verdächtigt, eilen die Eltern trotzdem stets zur Verteidigung ihrer „kleinen Engel“.",
      limits:[
        { label:"SCARE (Erschrecken)", max:3 },
        { label:"CONVINCE (Überzeugen)", max:3 },
        { label:"CATCH OR ESCAPE (Fangen/Entkommen)", max:3 },
      ],
      tags:["verwöhnte Kinder","maskierte Gesichter","geübte Lügner","Klebefalle, Furzkissen, Juckpulver oder Ei-Schleuder","mischievous-2"],
      threats:[
        { name:"PRANK (Streich)", flavor:"Kichert über den nächsten Streich", options:["Ärgert jemanden mit einem harmlosen, aber lästigen Streich (annoyed-2, embarrassed-2, tripped-2, stinky-2, oder spooked-2)","Stiehlt etwas, das ihre Aufmerksamkeit erregt hat (streicht ein Item-Tag)"] },
        { name:"LIE (Lügen)", flavor:"Schiebt den Helden die Schuld für einen eigenen Streich zu", options:["Man glaubt ihnen (Complication)","Behauptet dreist etwas, das nie geschah (senkt convince auf einer anderen Challenge um 1 Stufe)"] },
        { name:"SCATTER (Zerstreuen)", flavor:"Flieht in mehrere Richtungen auseinander", options:["Rennt vertraute Pfade entlang (erhält escaping-1, Umgebung erhält Hindernis)","Entkommt ins eigene Haus oder durch eine zu enge Lücke (Blocked)","Die Eltern eilen zur Verteidigung herbei (Neue Challenge: Commoner oder Respected Elder)"] },
      ],
      source:"A Shadow in the Barley – Szene 'Cooking the Sapsauce'. Eskalation der Vignette 'Meddlesome Kids', falls Ivy, Ollo und Jurard richtig loslegen.",
    },
  ],
  revelations:[],
  tips:[],
  rewards:[
    "Ist Lance mit der Arbeit zufrieden (und ist nicht allzu viel schiefgegangen): eine Tonflasche Sapsauce pro Hero + supplies-1 für die Gruppe als Dank.",
    "Zeigt jemand außergewöhnliches Talent zum Sirupmacher, teilt Lance sogar das Familienrezept (süßer Saft, kontrolliertes Feuer, gusseiserner Kessel — gibt tempted-1).",
  ],
},

/* 2 ------------------------------------------------- BARLEY FIELDS */
{
  key:"barley", kind:"scene", page:"S. 319–320",
  title:"Die Gerstenfelder", en:"The Barley Fields",
  summary:"Willow wird vom Waken Sentry bedroht",
  overview:["Auf dem Weg vor Ravenhome treffen sich die Helden, im Hintergrund spielt Willow im Feld", "Willow schreit auf — eine schlurfende, tropfnasse Gestalt erhebt sich aus der Gerste und greift an", "Untersuchung von Leiche und Rüstung gibt erste Hinweise auf Alt-Gwyrdolin", "Die Spur führt zum Versunkenen Wachturm — oder zurück zur Warnung in Ravenhome", "Bei zu langer Untersuchung: ein Ominous Raven spricht ein Omen"],
  readAloud:[
    { page:"S. 319", label:"Die Gerstenfelder", text:
      `Die Frühlingssonne blinzelt durch die Wolkendecke des trüben Morgens und taucht die goldenen Gerstenfelder in graues Licht. Die Vögel drängen sich, ihr Gezwitscher erfüllend, in ihren Nestern zusammen, während die Bauern unermüdlich schuften. Vor euch breitet sich das Ravensdale aus – ein kleines, doch fruchtbares Tal, in dem Gerstenfelder sich den Hügeln entlangziehen und Apfelgärten die Landschaft sprenkeln, bis hinauf zu den schneebedeckten Gipfeln des Greyback-Bergs. Ob Einheimische oder Reisende aus fernen Weilern oder von jenseits der Dales – hier sind alle willkommen.

Auf dem Weg ins Dorf Ravenhome erreicht euch Lachen von den frisch geernteten Halmen. Ein junges Mädchen tollt am Rand des hohen Gerstenfelds umher und spielt – Willow, die ihr für ihr freundliches, altkluges Wesen kennt. Wie sie gewachsen ist!` },
  ],
  flow:[
    `Die Geschichte beginnt (oder setzt sich fort) auf den Feldern vor dem Dorf Ravenhome. An einem scheinbar unaufregenden, bewölkten Morgen befinden sich die Helden zufällig gemeinsam auf dem Weg an den Feldern entlang. Doch dieser harmlose Moment nimmt eine erschreckende Wendung, als der längst tote Wächter des Alten Königreichs auf das Feld stolpert.`,
    `Beginnt die Szene damit, dass die Helden einander auf dem Weg treffen oder sich auf dem Weg nach Ravenhome unterhalten. Stellt Fragen zu ihren Reisen, aktuellen Ereignissen in ihrem Leben, Gerüchten aus ihren Dörfern und anderen Themen für Small Talk, die sie aufbringen könnten.`,
    `Im Hintergrund spielt <strong>Willow</strong>, ein Kind aus Ravenhome, in den Gerstenfeldern. Einheimische Helden kennen sie bereits; Helden von auswärts werden sie bald kennenlernen.`,
    `<span class="callout"><span class="co-title">Gefahr in der Gerste</span>Willow stößt plötzlich einen markerschütternden Schrei aus – und zeigt wie erstarrt auf das Feld. Ermutigt man sie, sagt sie: „Etwas bewegt sich, zwischen der Gerste …“ Aus den hohen Halmen direkt neben ihr erhebt sich eine schlurfende, tropfnasse Gestalt. <span class="flavor-add">Ihr Gesicht ist mumifiziert und von Fäulnis geschwärzt; sie trägt die rostigen Reste einer einst prächtigen Rüstung aus vergangener Zeit. Ihre hohlen Augen richten sich unverwandt auf Willow — oder wer immer ihr am nächsten steht — und schwingen eine korrodierte Klinge in ihre Richtung, während mit jedem Schritt fauliges Wasser tropft.</span> Haltet die Identität als Mysterium zurück — nennt das Wesen nicht beim Namen (<span class="gloss" onclick="openGloss('you-are-veil')">You Are the Veil</span>, S. 178).</span>`,
    `Das Wesen versucht, jede lebende Seele auf seinem Weg niederzustrecken – eine unheimliche Synergie aus alten Pflichten und dem lebensverzehrenden Miasma, das seinen toten Körper durchdringt. Es ernährt sich nicht von Fleisch, sondern folgt einem seltsamen Ruf, alles Gute zu verschlingen und zu verderben. Willows Schrei und ihre unbeschwerte Jugend ziehen es an. Ist ein Waken Sentry nicht Herausforderung genug, kann ein zweiter auftauchen.`,
    `<strong>Was hat den Waken Sentry erweckt?</strong> Im kollektiven Wissen der Dalesleute findet sich wenig, das erklärt, woher dieser wandelnde Leichnam stammt. Ein Hero kann dennoch eine Aktion aufwenden, um herauszufinden:`,
    `<ul><li>Wer die Leiche untersucht, bemerkt die dunkle Ölschicht, die von ihr tropft.</li><li>Die Ausrüstung weckt Erinnerungen an Geschichten vom Alten Königreich Gwyrdolin – einer uralten Zivilisation, deren Ruinen bis heute bestehen.</li><li>Ein(e) Oldways-Praktizierende(r) mit den richtigen Mitteln kann eine bösartige, verzehrende Unseen-Präsenz über dieser Twilight-Kreatur wahrnehmen, doch es braucht weitere Studien, um ihre Natur zu bestimmen.</li></ul>`,
    `<strong>Das Feld, das sich für immer verändert hat:</strong> Während oder nach dem Kampf wird den Helden klar, dass diese Gefahr in den Dales beispiellos ist. Ihre Spur führt zurück zum <strong>Versunkenen Wachturm</strong> — dort befindet sich auch das nächstgelegene Gewässer, wie Einheimische wissen. Alternativ können die Helden Willow sicher zu ihrer Familie eskortieren und die Dorfbewohner <strong>Zurück in Ravenhome</strong> warnen. Willow könnte darauf drängen: Wenn noch mehr Ungeheuer in den Feldern lauern, müssen die Bewohner gewarnt werden!`,
    `<span class="callout"><span class="co-title">Ein böses Omen</span>Als Konsequenz bei zu langer Untersuchung des Waken Sentry kann sich ein <span class="gloss" onclick="openGloss('ominous-raven')">Ominous Raven</span> auf dessen Kopf niederlassen (Core Book II, S. 127) und ein Omen überbringen — passend zum kollektiven Rabenmotiv der Dalesleute. Vollständiges Profil als dritte Challenge unten.</span>`,
  ],
  npcs:[
    { name:"Willow", img:"willow", after:3, role:"Kind aus Ravenhome", text:"Freundlich, altklug, spielt gern im hohen Gerstenfeld. Ortsansässigen Helden bereits bekannt. Siehe auch die Challenge unten." },
  ],
  challenges:[
    { name:"WAKEN SENTRY", img:"wakenSentry", after:4, difficulty:2, type:"Aggressor",
      desc:"Dieser willenlose, schlurfende Moorleichnam eines uralten Wächters wurde in seiner wassergetränkten Ruhestätte konserviert. In den verrotteten Überresten seiner alten Rüstung streift er nun durch das Ravensdale, um allem Lebendigen ein Ende zu setzen. Es ist unpraktisch, diese Kreatur in Brand zu setzen, es sei denn, sie wurde vorher irgendwie getrocknet.",
      limits:[
        { label:"HARM (Schaden)", max:2 },
        { label:"BANISH (Verbannen)", max:2 },
        { label:"BURN (Verbrennen)", max:0, note:"— nicht ohne Weiteres möglich, solange die Leiche nass ist" },
      ],
      tags:["totes Fleisch (dead flesh)","schlurfend (shambling)"],
      secrets:[
        { title:"Wahre Natur", text:"Es ist eine Moorleiche, die durch das dunkle Öl belebt wird, das sie durchdringt und selbst mit einem bösartigen Miasma durchtränkt ist, das verbannt werden kann; alternativ kann die Leiche über die Nutzungsschwelle hinaus zerhackt werden." },
      ],
      threats:[
        { name:"SHAMBLE (Schlurfen)", flavor:"Es quietscht und tropft faulendes Wasser während es sich bewegt", options:["Umstehende in Schrecken versetzen (terrified-3 oder nauseated-3)","Jemanden mit dem verfluchten Miasma infizieren (poisoned-1)"] },
        { name:"LUNGE (Angriff)", flavor:"Es stapft bedrohlich vorwärts und schwingt ein rostiges Schwert", options:["Die nächste Person treffen (wounded-2)"] },
        { name:"REMINISCE (Erinnern)", flavor:"Es hält plötzlich inne und starrt auf sein Schwert, als würde es sich an alte Tage erinnern", options:["Sich an ein Kampfmanöver erinnern (erhält parry oder feign)"] },
      ],
      source:"A Shadow in the Barley – Szene 'The Barley Fields'. Der Waken Sentry überfällt Willow auf dem Gerstenfeld und markiert den Beginn der Kampagne.",
    },
    { name:"WILLOW", img:"willow", after:4, difficulty:1, type:"Charge",
      warning:"Inhaltswarnung: Gefährdung eines Kindes. Bitte vorab mit der Gruppe absprechen, ob diese Herausforderung so gespielt werden soll.",
      desc:"Dieses Kind aus Ravenhome spielt im Gerstenfeld, als der Waken Sentry vorbeikommt. Zunächst ist sie vor Angst wie erstarrt, doch wenn sie aus ihrer Starre gerissen wird, dreht sie sich um und flieht. Sollte ihr etwas zustoßen, wäre das eine Tragödie, die die Gruppe für den Rest ihres Lebens belasten würde.",
      limits:[
        { label:"HARM (Schaden)", max:1 },
      ],
      tags:["petrified-2"],
      threats:[
        { name:"UNDER PERIL (In Gefahr)", flavor:"Gerät unter Angriff", options:["Wird verletzt oder Schlimmeres (Ill Tidings; alle Held:innen erhalten guilty-4)"] },
        { name:"RUN (Fliehen)", flavor:"Stolpert beim Fliehen über Steine", options:["Stürzt und fällt (erhält prone-1)"] },
      ],
      source:"A Shadow in the Barley – Szene 'The Barley Fields'.",
    },
    { name:"OMINOUS RAVEN", difficulty:2, after:8, type:"Sapper",
      optional:true,
      desc:"Das krächzende Rufen eines Raben kann ein Omen kommenden Unheils sein. Anders als die meisten Vögel kann der Ominous Raven sprechen. Wenn er die Zukunft vorhersagt, sind seine Worte klar und eindringlich — vielleicht später am Lagerfeuer erinnert, oder Ursache von Albträumen. Indem er ein zukünftiges Ereignis vorhersagt, spricht der Rabe unheilvolle Threats aus, die wie ein Schwert über einem Hero hängen. Trägt der Hero den Story-Tag später noch immer, kann die unbeachtete langfristige Bedrohung zu Consequences werden, in Form einer Complication oder Schlimmerem.",
      limits:[
        { label:"SLAY (Töten)", max:1 },
        { label:"SCARE AWAY (Verscheuchen)", max:1, note:"Der Ominous Raven spricht eine Bedrohung aus, kurz bevor er davonfliegt." },
      ],
      tags:["schwarz wie die Nacht (black as night)","kleines Tier (small animal)"],
      threats:[
        { name:"LOSS (Verlust)", flavor:"Der Rabe krächzt: „Du bist dazu verdammt, das zu verlieren, was du am meisten liebst.“", options:["Einen Hero um das fürchten lassen, was ihm gehört (possessive-1 und prophesied loss; manifestiert sich später als 2 Stufen Richtung Abandon)"] },
        { name:"HARDSHIP (Mühsal)", flavor:"Der Rabe krächzt: „Die Widrigkeiten vor dir werden zu groß sein für dein Maß.“", options:["Einen Hero fürchten lassen, seine Prinzipien zu verraten (worried-1 und prophesied hardship; manifestiert sich später als disheartened-3 nach einem Rückschlag)"] },
        { name:"DEMISE (Untergang)", flavor:"Der Rabe kreischt: „Du wirst ein grausames Ende finden, ehe deine Zeit gekommen ist!“", options:["Einen Hero um sein Leben fürchten lassen (cautious-1 und prophesied demise; manifestiert sich später als death-knell-3 vor einer großen Schlacht oder einem gefährlichen Unterfangen)"] },
      ],
      source:"A Shadow in the Barley – Szene 'The Barley Fields'. Optionale Konsequenz bei zu langer Untersuchung des Waken Sentry: Der Rabe landet auf dessen Kopf und spricht ein Omen. Profil: Core Book II (Legend in the Mist — The Narrator), S. 127.",
    },
  ],
  revelations:[],
  tips:[],
},

/* 3 --------------------------------------------------- RAVENHOME */
{
  key:"ravenhome", kind:"scene", page:"S. 321–322",
  title:"Zurück in Ravenhome", en:"Back at Ravenhome",
  summary:"Dorfversammlung — Countdown Challenge unter drei Fraktionen",
  overview:["Ankunft in Ravenhome, die Dorfbewohner sind ahnungslos über die Gefahr auf den Feldern", "Eine Dorfversammlung am Folkhearth debattiert das weitere Vorgehen", "Drei Stimmen dominieren die aufgebrachte Menge (siehe Profile/Challenge unten)", "Ein trauriger Abschied — guter Zeitpunkt für eine Camping-Szene", "Weiter zum Versunkenen Wachturm oder direkt zur Hütte der Weisen Einen"],
  readAloud:[
    { page:"S. 321", label:"Zurück in Ravenhome", text:
      `Das Dorf Ravenhome liegt im Herzen des Tals; alle Wege dieser Gegend führen früher oder später wieder hierher zurück. Ihr geht den Pfad entlang, bis die Sonne hell am trüben Nachmittagshimmel steht. Dann endlich erblickt ihr die schindelgedeckten Dächer der Häuser, und der Geruch von Holzfeuer tanzt in der Luft. Überall hört man fröhliche Gespräche zwischen Nachbarn. Doch so vertraut dieser Anblick auch ist – er reicht nicht aus, um euch nach solch erschütternden Erlebnissen zu beruhigen: Ihr fragt euch, wie lange dieser Frieden wohl anhalten mag, wenn solche Schrecken nun im Ravensdale umgehen.

Ihr geht an warmen Lächeln und herzlichen Grüßen vorbei, doch diesen Leuten entgeht nicht, dass in euch etwas vorgeht – sie bemerken, dass ihr vielleicht etwas zu sagen habt.` },
  ],
  flow:[
    `Die Fellowship erreicht Ravenhome, während die Dorfbewohner völlig ahnungslos sind, welche Monster nun die Felder heimsuchen. Teilen die Helden ihre Beobachtungen mit, oder lassen sie Willow zurückkehren und warnen, versammelt sich das ganze Dorf bald am <strong>Folkhearth</strong> (Versammlungshaus).`,
    `<strong>Was ist zu tun?</strong> Das gesamte Dorf hält eine Versammlung ab; eine aufgewühlte Diskussion über dieses verabscheute, gefährliche „Geschöpf der Dämmerung“ entbrennt – so nennen die Dalesleute alle fremdartigen Wesen – und über das weitere Vorgehen. Die Gefährtenschaft könnte von den Dorfbewohnern zur Teilnahme gedrängt werden, die alles über den Vorfall auf den Feldern erfahren wollen. Versucht die Gruppe, die Diskussion zu meiden oder sich davonzuschleichen, gelten die Helden womöglich als untrustworthy-1.`,
    `Drei Stimmen dominieren die aufgebrachte Menge (siehe Charakterprofile unten und Challenge weiter unten):`,
    `<span class="callout"><span class="co-title">Ein trauriger Abschied</span>Wie auch immer die Versammlung endet — ein schweres Gefühl drohenden Unheils liegt in der frischen Abendluft. Guter Zeitpunkt für eine Camping-Szene, während sich die Gruppe darauf vorbereitet, tiefer in das Mysterium vorzudringen.</span>`,
    `Danach können die Helden entweder der Spur des Waken Sentry folgen oder im Dorf nach einem nahen Moor oder einer Ruine fragen — das weist zum <strong>Versunkenen Wachturm</strong>. Suchen sie fachkundigen Rat oder haben sie die Wahrheit bereits entdeckt, führt ihr Weg zur <strong>Hütte der Weisen Einen</strong>.`,
  ],
  npcs:[
    { name:"Alderman Beaks", img:"aldermanBeaks", after:3, role:"Dorfoberhaupt · REASSURE-Fraktion", text:"Das offizielle Dorfoberhaupt, redegewandt, mit einem Faible für Ruhe und Ordnung. Er will die Menschen beruhigen, versichern, es bestehe keine Gefahr, und die Sache privat regeln. Er verlangt Beweise." },
    { name:"Aleonora", img:"aleonora", after:3, role:"Pensionierte Red Marshal · RALLY-Fraktion", text:"Eine pensionierte Red Marshal. Die Aussicht, einem Geschöpf der Dämmerung im Kampf gegenüberzustehen, begeistert sie, auch wenn ihre großen Tage vorbei sind. Sie will eine Schar Dorfbewohner mit Mistgabeln bewaffnen und aufbrechen. Ihr geht es weniger um Ruhm als um Gefahr und Nervenkitzel — vielleicht sogar ein rasches, glorreiches Lebensende." },
    { name:"Liafail Mackross", img:"mackross", after:3, role:"Alarmist · PANIC-Fraktion", text:"Ein notorischer Schwarzseher, seit je verspottet. Da nun tatsächlich eine „Katastrophe“ eingetreten ist, fühlt er sich bestätigt und treibt die Bewohner weiter in Panik, ruft zur Flucht nach Barleytown auf." },
  ],
  challenges:[
    { name:"CONCERNED VILLAGERS", difficulty:2, img:"concernedVillagers", after:3, type:"Countdown",
      desc:"Das Dorf wird von einer Twilight-Kreatur bedroht, und die Dorfbewohner sind uneins, was zu tun ist. Die Helden können eine der führenden Stimmen unterstützen oder einen eigenen Vorschlag machen (ein neues Limit erschaffen, falls die Herangehensweise nicht durch bestehende Limits abgedeckt ist). Nutzt Konsequenzen, um einflussreiche Figuren ihre Limits vorantreiben zu lassen, wobei ihre Tags unterstützende Aktionen begünstigen und direkt entgegengesetzte Aktionen behindern. Das zuerst erreichte Limit bestimmt den Kurs, den die Versammlung wählt.",
      limits:[
        { label:"REASSURE (Beruhigen)", max:3, note:"Alle bleiben in ihren Häusern hinter verrammelten Türen und fürchten, was auch immer über die Felder streift." },
        { label:"RALLY (Aufwiegeln)", max:3, note:"Bald zieht eine von Aleonora angeführte Gruppe von Dorfbewohnern mit Fackeln und Mistgabeln inbrünstig in die Nacht, um einer Gefahr nachzujagen, die sie nicht vollständig verstehen." },
        { label:"PANIC (Panik)", max:3, note:"Bald brechen die Bewohner von Ravenhome in einer laternenbeleuchteten Wagenkarawane auf und fliehen die Westroute entlang." },
      ],
      tags:["Alderman Beaks","Aleonora","Mackross","panicked-1"],
      threats:[
        { name:"DEFLECT (Ablenken)", flavor:"Nachdem ein Held eine Behauptung vorbringt, werfen die Dorfbewohner ihm einen misstrauischen Blick zu", options:["Jemand zeigt anklagend mit dem Finger, die Menge stimmt ein (suspected-1, hushed-2 oder ignored-3)"] },
        { name:"DISCUSS (Diskutieren)", flavor:"Die Menge murmelt untereinander", options:["Alderman Beaks nutzt den Moment, um die Menge zu beruhigen (erhält reassured-1)","Aleonora schlägt ihr Schwert gegen ihren Schild und ruft zur Tat auf (erhält rallied-1)","Mackross verbreitet furchtsame Worte in der Menge (erhält panicked-1)"] },
        { name:"BRAWL (Handgemenge)", flavor:"Unter den streitenden Dorfbewohnern liegt eine angespannte Energie", options:["Ein Kampf bricht aus und jemand wird verletzt (bruised-1)"] },
      ],
      source:"A Shadow in the Barley – Szene 'Back at Ravenhome'. Die Dorfversammlung entscheidet, wie auf die Bedrohung reagiert wird.",
    },
  ],
  revelations:[
    { kind:"Lore", ref:"A", text:"Die Welt jenseits der Dales ist voller Geschöpfe der Dämmerung (Creatures of Twilight) und fremder Magie." },
  ],
  tips:[],
},

/* 4 -------------------------------------------------- WATCHTOWER */
{
  key:"watchtower", kind:"scene", page:"S. 323–326",
  title:"Der versunkene Wachturm", en:"The Sunken Watchtower",
  summary:"SorrowBalm, der Tauchgang und die verrottete Truhe",
  overview:["Ankunft am versunkenen Wachturm, angestachelt von der geheimnisvollen SorrowBalm", "Erzähler-Notiz: die vergessene Geschichte der Ruine aus Alt-Gwyrdolin", "SorrowBalm bittet um Bergung einer Truhe vom Grund des Teichs, gegen Belohnung", "SorrowBalm kann nicht verletzt werden — sie verschwindet bei Gefahr wie Morgentau", "Tauchgang durch trübes, miasma-durchsetztes Wasser zum Grund des Teichs", "Am Grund: eine ölige Flüssigkeit und eine verrottete Truhe mit drei bedeutsamen Gegenständen", "SorrowBalm verlangt den Opal — doch die wahre Quelle des Miasmas liegt tiefer"],
  readAloud:[
    { page:"S. 323", label:"Der versunkene Wachturm", text:
      `Ihr steigt die Hügelkette hinauf, die das Ravensdale umschließt, den Zeichen folgend. Während ihr euren Weg über den bewaldeten Bergpfad fortsetzt, lasst ihr die goldenen Gerstenfelder und Apfelgärten hinter euch, die sich unter dem drohenden, sich zusammenziehenden Gewölk in die Ferne erstrecken. Eine Stunde vergeht, die Rundung der Hügel wird sanfter, und die Bäume rücken enger zusammen.

Raben sitzen auf nahen Ästen. Ein seltsames Gespür liegt über der Tiefe dieser Wälder; etwas Ungesehenes, ein Flüstern. Und das Flüstern ist lauter denn je.

Endlich erreicht ihr euer Ziel. Im dichten Wald erheben sich, aus der Erde ragend, die verfallenen Steinmauern eines runden Gebäudes, nunmehr eine Ruine. Es gibt keine Türen, nur ein Fenster oder zwei. Der Teil des Gebäudes, der jetzt über der Erde steht, war einst sein drittes Stockwerk; die Fundamente des Turms sind im Laufe der Zeitalter im schlammigen Boden versunken. Ein trüber Teich füllt den Fuß des Turms.

Fußspuren und mit dem Schwert gehauene Astwerk-Reste verraten, dass hier der Ursprung des wandelnden Leichnams liegt. Der faulige Geruch des Teichs bestätigt es. Ihr blickt in das undurchdringliche, trübe Wasser und wisst: Die Antworten liegen auf dem Grund.` },
  ],
  flow:[
    `In dieser Szene erkunden die Helden die Ruine, aus der der Waken Sentry stammt, angestachelt von einer Fremden mit Interesse an ihren Schätzen. Unter dem versunkenen Turm liegt ein von üblem Miasma verseuchter Teich, der die gesuchten Antworten birgt: woher der Waken Sentry kam und warum er erwachte.`,
    `<span class="callout"><span class="co-title">Erzähler-Notiz — Vergrabene Geschichte</span>Es lebt heute kein Dalesbewohner mehr, der sich an den Zweck dieser alten Ruine erinnert – die wenigsten wissen überhaupt, dass sie existiert. Zwar mögen manche einen vagen Hinweis zusammenkratzen, dass sie in den Tagen der Großen Thaumaturgen errichtet wurde, doch mehr wissen die Leute nicht darüber, und selbst das ist den meisten entfallen.</span>`,
    `<strong>Der Wunsch der Fremden:</strong> Während sich die Helden dem Teich nähern, tritt <strong>SorrowBalm</strong> an sie heran — ohne sich vorzustellen, in fast schelmischem Ton. Sie bietet an, den Helden eine Belohnung oder Wissen zukommen zu lassen, wenn sie die Truhe vom Grund des Teichs bergen. Sie behauptet, darin befinde sich ein Familienerbstück, und sie sei „nur eine einfache Pilgerin, die durch die <span class="gloss" onclick="openGloss('wanderlands')">Wanderlands</span> reist, nicht gemacht für solch gefährliche Unternehmungen.“`,
    `SorrowBalm ist bereit zuzugeben, dass sie Relikte des alten Königreichs Gwyrdolin sammelt und den Opal sucht, der sich in einer Truhe am Grund des Teichs befindet. Sie ist entweder nicht in der Lage oder nicht gewillt, selbst danach zu tauchen, und versucht daher, die Helden dafür zu gewinnen.`,
    `<strong>Man kann sie täuschen, aber SorrowBalm kann nicht verletzt werden:</strong> Noch bevor eine Klinge ihre Haut berührt, verschwindet sie wie Morgentau im Sonnenlicht. Später könnte sie zurückkehren, um den Opal aus den Händen der Helden zu locken oder ihnen zu drohen, von ihrem Volk „gejagt“ zu werden. Sie ist nicht zum Kämpfen gemacht und wird daher niemandem Schaden zufügen — doch verletzen sich die Helden durch ihr eigenes Handeln, ist das ihr gleichgültig.`,
    `<strong>SorrowBalms Lohn:</strong> Sie versucht abzuschätzen, was die Helden sich am meisten wünschen, und bietet es ihnen an, sofern es in ihrer Macht steht: einen Gegenstand oder Hinweis, der einer Quest dient, supplies-1, oder sogar eine <span class="gloss" onclick="openGloss('amber-coin')">Bernsteinmünze</span> (in den Dales praktisch nutzlos, doch begehrt — sie gibt sie erstaunlich unbekümmert her). Zudem verrät sie geheimes Wissen über die Flüssigkeit im Teich und den Waken Sentry — jedoch erst, wenn sie den Opal in Händen hält. <span class="flavor-add">Aufgrund ihrer geheimnisvollen Natur ist SorrowBalm schwer zu durchschauen. Selbst wenn die Helden herausfinden, was sie will oder was sie ist, verstehen sie es nur in ihren eigenen dalischen Begriffen — benennt die Magie dahinter niemals beim Namen, auch nicht die Wahrheit hinter einem solchen Wesen.</span>`,
    `<span class="section-heading">Tauchgang (Diving In)</span>Diese Ruine des uralten Turms ist tief in den Boden gesunken und hat sich mit Wasser und Pflanzen gefüllt. Was einst das Erdgeschoss des Turms war, bildet nun den Grund eines trüben Teichs, in den ein seltsames Miasma eingedrungen ist. Er ist die Heimat eines monströsen <strong>Poisoned Wurm</strong> sowie einiger gepanzerter Moorleichen, die dem Waken Sentry ähneln.`,
    `Abtauchen zum Grund des Teichs kostet eine Aktion, ebenso das Wiederauftauchen — sofern die tauchende Person problemlos wieder hochkommt. Durch das trübe Wasser und die verhedderten Pflanzen ist die Sicht schlecht; ein Hero könnte <strong>entangled-1</strong> werden oder beginnen zu <strong>drown-1</strong>.`,
    `Am Grund angekommen, kann ein Hero mit einer Aktion Folgendes entdecken:<ul><li>Eine dunkle, ölige Flüssigkeit sickert aus einem Riss im Boden. Sie ähnelt dem Gift, das den Körper des Waken Sentry durchtränkte. Sie kann für spätere Studien abgefüllt werden.</li><li>Eine schwere, verfaulte Holztruhe, verziert mit denselben Schnitzereien und Metallarbeiten, die auch die Rüstung des Waken Sentry zierten, liegt im Schutt.</li></ul>`,
    `<span class="section-heading">Die verrottete Truhe</span>Wird die Truhe an Land gebracht, wo ein Hero besser daran arbeiten kann, lässt sich ihr morsches Holz leicht aufbrechen, um ihren Inhalt freizulegen. Im Inneren ist über die Jahre alles vermodert — außer drei Gegenständen:<ul><li>Ein <strong>makelloses Schwert</strong>, unberührt von Rost und Verfall, mit einem uralten Emblem (<span class="gloss" onclick="openGloss('gwyrdolan-steel')">Gwyrdolan-Stahl</span>, S. 222).</li><li>Ein <strong>seltsames Fläschchen</strong> mit einer wirbelnden, bläulichen Flüssigkeit (<span class="gloss" onclick="openGloss('mandragora')">Dekoktion aus Mandragora</span>, ein Entheogen, S. 222).</li><li>Ein <strong>verzauberter Opal</strong>, groß wie eine Handfläche. Der Blick hinein weckt seltsame Gedanken, Gefühle und Empfindungen — tatsächlich ein <span class="gloss" onclick="openGloss('memory-stone')">Erinnerungsstein</span> (S. 238).</li></ul>`,
    `SorrowBalm verlangt umgehend, dass die Helden ihr den Opal aushändigen. Willigen die Helden ein, erfüllt sie jede getroffene Abmachung und offenbart die Geschichte des Turms. Andernfalls ist es nicht leicht herauszufinden, was diese Gegenstände sind, da es tieferes Wissen über die Welt erfordert, als die meisten Dalesleute besitzen (Handlung auf Abenteuer-Ebene). Nur SorrowBalm kennt die vollständige Geschichte des Turms — sie erklärt nicht, wie sie an diese Information gelangte:<ul><li>In alten Tagen war dies ein Wachturm Alt-Gwyrdolins, eines Königreichs, das von Thaumaturgen geführt wurde. Die Wachleute — zumindest die höherrangigen Offiziere — waren Praktizierende der Thaumaturgie.</li><li>Die Wachleute lernten die Thaumaturgie von heiligen Steinen, die Wissen enthielten, das ihnen von SorrowBalms Sippschaft geschenkt wurde — und der verzauberte Opal ist einer dieser <span class="gloss" onclick="openGloss('memory-stone')">Erinnerungssteine</span> (S. 238). Die Person, die kürzlich als Leichnam erwachte, war einst einer dieser Thaumaturgen-Offiziere, der seine geschätzten Besitztümer in der Truhe verstaute.</li><li>Die Thaumaturgen schufen mit ihrer Kunst Waffen und schmiedeten eine Klinge, die Verderbnis und Zauberei widerstehen konnte (<span class="gloss" onclick="openGloss('gwyrdolan-steel')">Gwyrdolanischer Stahl</span>, S. 222).</li><li>Die Thaumaturgen verfeinerten gewisse Essenzen, die ihr Bewusstsein und ihre Macht vertieften. Die Flüssigkeit in der Phiole ist eine solche Substanz — ein Entheogen (<span class="gloss" onclick="openGloss('mandragora')">Dekokt der Mandragora</span>, S. 222).</li></ul>`,
    `<strong>Die Wahrheit, die darunter lag:</strong> Den Helden sollte nun klar werden, dass ein übles Miasma in den Teich sickert. Der Riss im Teich verrät, dass seine wahre Quelle woanders liegt, und wird es nicht gestoppt, ist es nur eine Frage der Zeit, bis das Miasma seinen Weg in andere Teile findet. Die Helden mögen sogar, durch eigene Nachforschungen, durch SorrowBalm oder den Weisen Einen, verstehen, dass sich dieses Miasma durch die tiefen Gewässer, die unter den gesamten Dales fließen, viel weiter ausbreiten könnte. Die Helden wissen, dass nur Praktizierende der Oldways die Natur des dunklen Öls verstehen können — besonders jetzt, da sie eine klare Probe davon haben könnten. Rosamund, der Weise Eine, die in den Hügeln lebt, kann helfen, seine Natur, seine Quelle und einen Weg zu enthüllen, ihn davon abzuhalten, den Rest der Dales zu infizieren. Sie kennt sich zudem am ehesten mit dem Wappen auf dem Schwert und der Geschichte der Thaumaturgen und des Alten Königreichs aus. Der nächste Halt: die <strong>Hütte der Weisen Einen</strong>.`,
  ],
  npcs:[
    { name:"SorrowBalm (Nomia Sorrowbalm)", img:"sorrowbalm", after:2, role:"Geheimnisvolle Wanderin", text:"Siehe Challenge-Profil unten — hier als handelnde NPC in Verhandlung mit der Gruppe." },
  ],
  challenges:[
    { name:"SORROWBALM", img:"sorrowbalm", after:2, difficulty:3, type:"Sapper, Influence",
      desc:"Eine eigenartige, schlanke Wanderin in ausgefallener Kleidung, diese junge Frau, die sich Nomia Sorrowbalm nennt, ist eine selbsternannte Erkunderin von Ruinen und Sammlerin von Schätzen. „Sprössling einer gefallenen Familie aus den Tagen des Alten Gwyrdolin“, behauptet sie, die Erbstücke ihrer Dynastie zurückzuerlangen, mit denen sie hofft, eines Tages ihre Cousins auszulösen, die in Not geraten sind. Ihrer eigenen Aussage nach war sie jedoch „nicht für Abenteuer gemacht“ und sucht daher Hilfe bei der Bergung dieser Gegenstände.",
      limits:[
        { label:"HARM (Schaden)", max:0, note:"— kann nicht verletzt werden, siehe Special Feature VANISH" },
        { label:"BANISH (verborgen)", max:4, note:"Nur nutzbar, wenn ihre wahre Natur als Emissärin des Emerald Branch aufgedeckt wurde.", secret:true },
      ],
      tags:["aufrichtig (sincere)","alert-3","fleeting-3","mysterious-2","Mächtiger Geist (Potent spirit)"],
      secrets:[
        { title:"VANISH (Verschwinden)", text:"Wenn SorrowBalm Schaden nehmen würde, verschwindet sie stattdessen (Blocked)." },
        { title:"Wahre Mission", text:"Sie spürt magische Geschenke auf und sammelt sie ein, die die Kinder der Twilight den Gwyrdolanischen Thaumaturgen in der Blütezeit des Alten Königreichs gaben, einschließlich Wissen, das in Erinnerungssteinen gespeichert ist." },
        { title:"Cousins", text:"Ihre „Cousins“ sind Kreaturen und Monster, gefallene himmlische Wesen, die sie wiederherstellen könnte, wenn sie genug „Magie“ sammelt." },
        { title:"Wahre Natur", text:"Sie ist eine Emissärin des Smaragdenen (Verbrannten) Zweigs (ihre „gefallene Familie“). Sie wurde erschaffen, um Gegenstände von Macht zu finden und deren Magie zu nutzen, um Gefallene Blätter wiederherzustellen. Sie kann verbannt werden (Limit 4)." },
      ],
      threats:[
        { name:"MAKE AN OFFER (Ein Angebot machen)", flavor:"Mit einem unheimlichen Lächeln bittet sie die Helden, die Truhe für sie zu bergen", options:["Jemanden mit dem Versprechen von etwas Gewünschtem verführen (tempted-1, oder bound-2, falls ein Handel geschlossen wurde)"] },
        { name:"OPEN HER PALM (Ihre Handfläche öffnen)", flavor:"(Falls der Opal gefunden wurde) Fleht die Helden an, ihr den Opal zu geben", options:["Die Helden seltsam anstarren, während ihre Sicht zu verblassen beginnt (sleepy-4 für alle Helden)","(Falls der Opal offen liegt) Flüchtig vorbeigehen und den Opal aus ihren Händen fegen, dann verschwinden (Tag streichen, dann Blocked)"] },
        { name:"DELIVER AN OMEN (Ein Omen überbringen)", flavor:"(Falls ihr der Opal verweigert wird) Warnt die Helden, dass sie ihr den Opal geben müssen", options:["Prophezeit, dass die Helden gejagt werden (marked-3), und verschwindet dann spurlos (Blocked)"] },
      ],
      source:"A Shadow in the Barley – Szene 'The Sunken Watchtower'. SorrowBalm trifft die Helden am versunkenen Wachturm und bittet um Bergung einer Truhe.",
    },
    { name:"POISONED WURM", difficulty:2, img:"poisonedWurm", after:6, type:"Aggressor",
      desc:"Einst nur eine Wasserschlange in ihrem kleinen Teich, wurde diese monströse Kreatur über die Jahre durch das aus den Sümpfen sickernde Miasma verzerrt und vergrößert. Nun ist sie blutgierig geworden und wird jeden verschlingen, der in ihr wässriges Zuhause taucht. Sollten die Helden die Kreatur vom Miasma reinigen können, wendet sich die geschwächte, verängstigte Schlange ab und flieht in ein unterirdisches Loch.",
      limits:[
        { label:"HARM (Schaden)", max:3 },
        { label:"CLEANSE (Reinigen)", max:3 },
      ],
      tags:["fester Griff (strong grip)","Schwimmer (swimmer)"],
      threats:[
        { name:"COIL (Umwinden)", flavor:"Es gleitet vorwärts und umkreist seine Beute", options:["Seine Beute umwinden (constricted-2)"] },
        { name:"SQUEEZE (Zusammendrücken)", flavor:"Es kräuselt seine Windungen um seine umschlungene Beute", options:["Fester zudrücken, Knochen knirschen (crushed-2)"] },
        { name:"ASSAIL (Angreifen)", flavor:"Es windet und dreht sich, um erneut zuzuschlagen", options:["Zubeißt mit Kiefer und Fangzähnen in die Gliedmaße eines Tauchers (wounded-2 und poisoned-1)"] },
      ],
      source:"A Shadow in the Barley – Szene 'Diving In' (Teil von The Sunken Watchtower). Der Poisoned Wurm haust am Grund des überfluteten Wachturms.",
    },
  ],
  revelations:[
    { kind:"Lore", ref:"C", text:"Die Dales waren einst Teil von Alt-Gwyrdolin, einem Königreich, das von den Großen Thaumaturgen — Wundertätern — regiert wurde." },
    { kind:"Core", ref:"1", text:"Einst ferne oder gar sagenhafte Bedrohungen dringen nun in die Dales ein." },
  ],
  tips:[],
},

/* 5 ------------------------------------------------- WISE ONE CABIN */
{
  key:"cabin", kind:"scene", page:"S. 327–328",
  title:"Die Hütte der Weisen Einen", en:"The Wise One's Lonesome Cabin",
  summary:"Rosamund erklärt Miasma, Quelle und die Dolorous Lady",
  overview:["Ein widerwilliger Empfang bei Rosamund, der Weisen Einen von Ravenhome", "Rosamund hört zu und untersucht die Miasma-Probe bzw. die Funde aus dem Turm", "Am Feuer: Gespräch über das Miasma und was es bedeutet", "Rosamund besteht auf einer Pilgerfahrt zur Dolorous Lady und schließt sich als Begleiterin an", "Auf Nachfrage: weiteres Wissen über Alt-Gwyrdolin und den versunkenen Wachturm"],
  readAloud:[
    { page:"S. 327", label:"Die Hütte des Weisen Einen", text:
      `Mit dem wachsenden Bedürfnis, mehr über die Verderbnis zu erfahren, die ihr gesehen habt, sucht ihr den Rat des Weisen Einen. Mit jedem Schritt entfernt ihr euch weiter von zuhause und tiefer in den bewaldeten Hügel hinein. Die Sonne beginnt zu sinken, der Himmel färbt sich orange und violett, während die Decke der Dämmerung naht.

Mit müden Füßen wandert ihr weiter, bis ihr eine Rauchsäule in der Ferne aufsteigen seht. Neben einem plätschernden Bach liegt, eingebettet, eine kleine, gemütliche Hütte mit einem ansehnlichen Garten. Eine alte Frau sitzt auf einem Baumstumpf und rührt in einem kochenden Topf. Der süße Duft lässt euch der Magen knurren – ihr habt seit einer Weile nichts mehr gegessen.

Eure Anwesenheit bleibt unbemerkt, bis ihr endlich nah genug seid, dass die alte Frau euch sieht. Sie wirft euch einen missbilligenden Blick zu. »Noch mehr Besuch? Hmpf, na gut – wenn euch etwas plagt, dann setzt euch ans Feuer. Ich habe das Abendessen nicht für so viele vorbereitet, also packt gefälligst mit an!«` },
  ],
  flow:[
    `<span class="section-heading">Ein widerwilliger Empfang</span><span class="gloss" onclick="openGloss('rosamund-ref')">Rosamund, die Weise Eine</span> von Ravenhome, ist keine Fremde für Besucher, meidet sie aber nach Möglichkeit. Dennoch suchen die Dorfbewohner in Zeiten der Angst, des Unglücks oder der Krankheit ihren Rat. Jäger bringen ihr manchmal Wildbret, und manche Dorfbewohner besuchen sie aus Dankbarkeit für ihre Arbeit. Einheimische Helden kennen sie vermutlich. Alt und griesgrämig, ist sie im Grunde gütig und ihrer Aufgabe verpflichtet. Sie ist zudem eine begabte Apothekerin, die Heilsalben und Gegengifte verabreichen kann. <span class="flavor-add">Ihre strohgedeckte Hütte ist voller hängender getrockneter Kräuter, und über einem großen brennenden Herdfeuer hängt ein Kessel. Sie hat außerdem einen Gemüsegarten und einen Vorratsschuppen.</span>`,
    `Rosamund hört den Gefährten aufmerksam zu, während sie von ihren Erlebnissen berichten, und untersucht die mitgebrachte Miasma-Probe oder die Gegenstände aus dem Turm. Anschließend besteht sie darauf, dass alle sich ausruhen — sie teilt ihr Essen und Dach mit ihnen, was Gelegenheit für eine gemütliche Szene (und einen Camping-Moment) bietet.`,
    `<span class="section-heading">Am Feuer versammelt</span>Zur rechten Zeit, spät in der Nacht oder bei einem Frühstück aus warmem Brei, versammelt sich die Gruppe am Feuer, um mit Rosamund alles zu besprechen. Ein kalter Wind weht durch die offenen Fenster, eine unheimliche Stimmung erfüllt den Raum:
<ul>
<li><strong>Das Miasma:</strong> Die üble Substanz ist mit finsterer Zauberei aus Alt-Gwyrdolin verflucht. Sie kann Fleisch und Seele zersetzen und einen bösartigen Hunger nach Verschlingen und Verrottung entfachen — stark genug, sogar die Toten zu erwecken.</li>
<li><strong>Seine Quelle:</strong> Das Miasma entspringt irgendwo in den Shiverwash-Sümpfen, südlich der Dales. Aus irgendeinem Grund streckt es nun seine faulenden Fühler ins Wasser aus, das unter den Dales fließt.</li>
<li><strong>Die versagenden Schutzwarden:</strong> Es gibt einen alten Standstein bei den Sümpfen, an dem Oldways-Praktizierende seit Jahrhunderten gebetet haben. Doch heute sind nur noch wenige übrig; Rosamund selbst war seit Jahren — vielleicht einem Jahrzehnt — nicht mehr dort.</li>
</ul>`,
    `Rosamund besteht darauf, dass eine Pilgerfahrt zum Standstein namens <strong><span class="gloss" onclick="openGloss('dolorous-lady')">Dolorous Lady</span></strong> unternommen und ein Ritual durchgeführt werden muss. Sie bittet die Helden, sie zu begleiten, da sie inzwischen recht alt ist; willigen sie ein, erhalten sie sie als <strong>Story-Theme (Begleiterin)</strong>.`,
    `<span class="section-heading">Expertin für uraltes Wissen</span>Mit weiteren Fragen können die Helden von Rosamund noch mehr über die Vergangenheit und den versunkenen Wachturm in Erfahrung bringen:
<ul>
<li><strong>Das Alte Königreich:</strong> Der versunkene Wachturm, und mit ihm alle Dales, gehörte einst zu Alt-Gwyrdolin, einem uralten Königreich aus unvordenklichen Zeiten, in dem die Thaumaturgen unglaubliche Wunder vollbringen konnten.</li>
<li><strong>Der Krieg:</strong> Jenes Reich zerbrach, als die Thaumaturgen in einem gewaltigen Konflikt gegeneinander kämpften, der als der <strong>Krieg der Thaumaturgen</strong> bekannt wurde. Alt-Gwyrdolin zerfiel, doch ein Großteil seiner Magie blieb bestehen.</li>
<li><strong>Das Wappen:</strong> Zeigt man ihr das Emblem auf dem Schwert aus dem Turm, erkennt Rosamund es als Insignie Alt-Gwyrdolins.</li>
</ul>`,
    `<span class="callout"><span class="co-title">Reihenfolge-Hinweis</span>Kommen die Helden vor dem Besuch des Versunkenen Wachturms zu Rosamund, bittet sie sie, den Turm aufzusuchen. Ist Rosamund nicht anwesend (z. B. weil sie selbst ein Hero ist), sucht die Gruppe zunächst allein in den Bounds nach dem Standstein — wählt ein bis zwei Vignetten aus <span class="gloss" onclick="openJourneyBySlug('morose-mire')">„Morose Mire“</span>, CBII 150.</span>`,
  ],
  npcs:[],
  extra:{ heading:"Begleiterin", type:"companions", items:[
    { name:"Rosamund, die Weise Eine", img:"rosamund", role:"Apothekerin · Schutzzauber & Warden · Story-Theme", text:"Wards und Schutzzauber, alte Knochen. Stimmen die Helden zu, sie zu begleiten und ihr zu helfen, gewinnen sie Rosamund als Story-Theme für den Rest der Kampagne." },
  ]},
  challenges:[],
  revelations:[
    { kind:"Lore", ref:"G", text:"In jüngster Zeit werden seltsame Kreaturen durch ein verfluchtes Miasma aus den Sümpfen erschaffen, berührt von einem uralten Hunger." },
    { kind:"Lore", ref:"D", text:"Gwyrdolin fiel im Krieg der Thaumaturgen (War of the Thaumaturges)." },
  ],
  tips:[],
},

/* 6 --------------------------------------------------- DOLOROUS LADY */
{
  key:"shrine", kind:"scene", page:"S. 328–330",
  title:"Die Trauernde Dame", en:"The Dolorous Lady",
  summary:"Ritual im Grenzgebiete-Marschland, Mirelings greifen an",
  overview:["Reise südwärts in die Grenzgebiete als Rambling Journey", "Ankunft am überwucherten Schrein der Trauernden Dame im Sumpf", "Rosamund bereitet das Ritual vor — der Song of Tears verlangt aufrichtigen Kummer", "Der Sumpf regt sich: zwei oder drei Mirelings stören das Ritual", "Gelingt das Ritual, fliehen die Mirelings; wird der Schrein zerstört, ziehen sie sich lachend zurück", "Nach dem Ritual lassen sich Helm und seltene Sumpfkräuter bergen"],
  readAloud:[
    { page:"S. 328", label:"Aufbruch von Rosamunds Hütte", text:
      `Ihr brecht bei erstem Licht von Rosamunds Hütte auf, fort von den sanften Hügeln und den goldenen Feldern des Ravensdale, südwärts einen alten Pfad hinab, der zu den Grenzgebieten führt. Noch bevor der Tag vergangen ist, weichen die vertrauten Ackerländer und klaren Horizonte des Ravensdale zerklüfteten Steinen, morastigem Boden und neblig verhangener Umgebung. Der Pfad verliert sich zuweilen, was das Vorankommen im Moorland erschwert. Warme Winde heulen und tragen den bitteren Gestank der südlichen Marschen mit sich. Am nächsten Tag der Reise dringt nur noch dünnes Tageslicht durch den grauen Nebel, während ihr euch tiefer in die dalischen Randgebiete vorwagt – mit toten Bäumen und dem Rufen der Frösche als eurer einzigen Gesellschaft.` },
  ],
  flow:[
    `<span class="section-heading">Reise zum Stein</span>Die Helden reisen von Ravenhome aus einige Tage südwärts über ein niedriges Gebirge in die Grenzgebiete. Dies lässt sich als <span class="gloss" onclick="openJourneyBySlug('rambling')">Rambling Journey</span> spielen (S. 276) — wählt drei bis fünf Vignetten, je nach gewünschtem Tempo. Ob die Gruppe zwischendurch eine Rastszene erhält, liegt bei euch. Schließlich erreicht die Gefährtenschaft die südlichen Grenzen der Dales, mit Blick auf die Shiverwash-Sümpfe: eine scheinbar endlose Weite aus fauligem Wasser, verdrehten Bäumen, stinkendem Gestrüpp und dichtem Nebel.`,
    `<span class="section-heading">Der Schrein der Trauernden Dame</span>Auf dem Gipfel eines gewundenen Hügels, den Shiverwash-Sümpfen zugewandt, als würde er die Grenze bewachen, trägt der überwucherte Stein das Bild einer weinenden Frau, die ihr Gesicht mit den Händen bedeckt. Ein giftiger Nebel überwältigt die Umgebung.`,
    `Rosamund bereitet das Ritual vor, entzündet Kerzen und bringt Opfergaben dar; sie bittet die Gefährtenschaft, sich ihr beim <strong>Song of Tears</strong> anzuschließen — ihrer Art, den Schrein zu pflegen. Der Song of Tears wird durch aufrichtigen Kummer gespeist, und jeder teilnehmende Hero sollte eine traurige Geschichte aus seinem Leben teilen. Oldways-praktizierende Helden können alternativ ihr eigenes Ritual beisteuern.`,
    `<span class="callout"><span class="co-title">Unwillkommenes Publikum</span>Sobald die Helden versuchen, die Magie des Steins neu zu entfachen, beginnt sich der Sumpf auf unheimliche Weise zu regen. Der Nebel wallt und braut sich zusammen, das Wasser blubbert. Zwei oder drei Mirelings kriechen aus dem getrockneten Torf, um das Ritual zu stören, und krallen nach den Helden, Rosamund und dem Steinmal. Sie erscheinen zunächst far-away-2 vom Stein entfernt; nähern sie sich unaufgehalten, sinkt dieser Wert um jeweils 1. Wird ein Mireling überwunden, rückt ein weiteres nach — wieder bei far-away-2 — bis der Schrein wiederhergestellt oder zerstört ist.</span>`,
    `<strong>Den Schrein neu entfachen:</strong> Ist der Standstein gepflegt, fliehen alle Mirelings zurück in die Sümpfe. Den Helden ist, als falle ihnen eine Last von den Schultern. Wird der Schrein stattdessen zerstört, ziehen sich die Mirelings mit tiefem, gluckerndem Lachen ins Moor zurück — dieses Fleckchen Land wird künftig nicht mehr sicher sein.`,
    `<strong>Schätze aus dem Sumpf:</strong> Gelingt das Ritual, wird die Umgebung des Standsteins weniger feindselig und kann durchsucht werden:<div class="reward-box"><ul style="margin:0; padding-left:18px;"><li style="margin-bottom:6px; line-height:1.55;">Ein angelaufener, aber noch stabiler <strong>Helm</strong>.</li><li style="margin-bottom:6px; line-height:1.55;"><strong>Seltene Sumpfkräuter</strong>, nützlich für Heilung oder Trankbrauerei.</li></ul></div>`,
  ],
  npcs:[],
  challenges:[
    { name:"THE DOLOROUS LADY", difficulty:3, after:4, type:"Charge",
      desc:"Dieser Oldways-Schrein hat schon bessere Tage gesehen. Auf dem Gipfel eines gewundenen Hügels stehend, den Shiverwash-Sümpfen zugewandt, als würde er die Grenzen bewachen, trägt der überwucherte Stein das eingemeißelte Bild einer weinenden Frau, die ihr Gesicht mit den Händen bedeckt. Ein giftiger Nebel überwältigt die Umgebung – ein weiteres Zeichen dafür, dass sich das Miasma der Sümpfe ausbreitet. Die Pflege dieses Schreins kann durch Reinigen, Läutern, ein Ritual oder ein Gebet zur Dame erfolgen. Tainted (Befleckt) ist sein Gegenstatus.",
      limits:[
        { label:"TEND (Pflegen)", max:5 },
        { label:"DESTROY (Zerstören)", max:4 },
      ],
      tags:["verlorene Aura (forlorn aura)","giftiger Nebel (noxious mist)","tainted-2"],
      threats:[
        { name:"DESPAIR (Verzweiflung)", flavor:"Neben dem Stein stehend lässt ein spürbares Gefühl der Traurigkeit das Herz sinken", options:["Jemandes Gedanken mit trüben Erinnerungen erfüllen (disheartened-2)"] },
        { name:"DESPOIL (Verwüsten)", flavor:"Die Erde um die Statue brodelt und blubbert mit dem Gestank der Sümpfe", options:["Jemandes Lungen mit Gift füllen (coughing-1, dizzy-1 oder poisoned-1)","Die Umgebung wird unwirtlicher (Szene erhält deep muck, rotting stink, thick fog oder sticky splashes)","Das Miasma durchdringt den Standstein (erhält tainted-1)","Die Statue sinkt ein Stück weiter in den weichen Boden (destroyed-1)"] },
      ],
      source:"A Shadow in the Barley – Szene 'The Shrine of the Dolorous Lady'. Rosamund und die Helden versuchen, die Schutzwirkung des Schreins wiederherzustellen.",
    },
    { name:"MIRELING 1", img:["mireling1","mireling2","mireling3"], after:4, difficulty:2, type:"Aggressor, Sapper",
      desc:"Verspielte und boshafte Geister von Torffeuern, Mirelings gleichen schlurfenden Haufen aus getrocknetem Torf und faulendem Schilf mit den Schädeln konservierter Tier- oder Menschenleichen. Ein schwelendes Feuer glimmt in diesen Kreaturen aufgrund der brennbaren Erde und verströmt einen beißenden Gestank. Mirelings tragen manchmal harten Schutt oder rostige Speere in sich, Relikte eines uralten, längst begrabenen Königreichs.",
      limits:[
        { label:"HARM (Schaden)", max:3 },
        { label:"BANISH (Verbannen)", max:2 },
        { label:"BURN (Verbrennen)", max:0, note:"—" },
        { label:"FAR AWAY (Weit entfernt)", max:4, start:2 },
      ],
      tags:["harter Schutt oder rostige Speere","spiteful-1"],
      secrets:[
        { title:"Belebende Kraft", text:"Sie werden von Wanehunger belebt, der nagenden, verschlingenden Kraft hinter dem Miasma der Sümpfe." },
      ],
      threats:[
        { name:"PLAGUE (Plagen)", flavor:"Es kichert, während es seine Beute wie ein Spielzeug behandelt, springend und rollend", options:["Seinen widerlichen Gestank in die Luft strömen lassen (sickened-2 oder choking-2)","Sein Opfer in eine Ecke drängen (cornered-1)"] },
        { name:"SCORCH (Versengen)", flavor:"Glut leuchtet aus seinem verrotteten Kern", options:["Beißen, Schlagen oder Kratzen (bruised-1 und singed-2)","Aus der Entfernung einen brennenden Torfklumpen spucken (singed-2)","Umgebende trockene Vegetation entzünden (burning-2 oder Ill Tidings)"] },
        { name:"MELD (Verschmelzen)", flavor:"Sie kreischen und zischen, während sie sich einander nähern, oder beginnen sich zu teilen", options:["Sich zu einem schwerfälligen Klumpen zusammentun oder sich zu zweit teilen (erhält large festering mass, oder bei vielen, gain size oder numbers)"] },
      ],
      special:[
        { title:"Gain Size / Numbers (Für dich als Spielleiter)", text:"Kein eigener Status, sondern ein zusätzlicher Macht-Tag: Das Mireling wird entweder größer (size/Größe, vgl. „Oversized\" bei anderen Kreaturen) oder tritt in Überzahl auf (numbers/Überzahl, vgl. Corrupted Rats). Der Tag darf danach wie jeder andere Macht-Tag für seine Aktionen invoked werden — er macht das Mireling schlicht bedrohlicher, ohne ein separates Limit zu benötigen. Genauer Wortlaut aus dem Regelwerk nicht im Projektwissen hinterlegt — bei Bedarf Kernregelwerk hochladen, dann wird dies präzisiert." },
      ],
      source:"A Shadow in the Barley – Szene 'The Shrine of the Dolorous Lady'. Mirelings greifen an, während Rosamund und die Helden den Schrein wiederbeleben. Bis zu drei Mirelings können gleichzeitig auftreten — siehe die zwei weiteren Profile unten.",
    },
    { name:"MIRELING 2", img:["mireling1","mireling2","mireling3"], after:4, difficulty:2, type:"Aggressor, Sapper",
      desc:"Verspielte und boshafte Geister von Torffeuern, Mirelings gleichen schlurfenden Haufen aus getrocknetem Torf und faulendem Schilf mit den Schädeln konservierter Tier- oder Menschenleichen. Ein schwelendes Feuer glimmt in diesen Kreaturen aufgrund der brennbaren Erde und verströmt einen beißenden Gestank. Mirelings tragen manchmal harten Schutt oder rostige Speere in sich, Relikte eines uralten, längst begrabenen Königreichs.",
      limits:[
        { label:"HARM (Schaden)", max:3 },
        { label:"BANISH (Verbannen)", max:2 },
        { label:"BURN (Verbrennen)", max:0, note:"—" },
        { label:"FAR AWAY (Weit entfernt)", max:4, start:2 },
      ],
      tags:["harter Schutt oder rostige Speere","spiteful-1"],
      secrets:[
        { title:"Belebende Kraft", text:"Sie werden von Wanehunger belebt, der nagenden, verschlingenden Kraft hinter dem Miasma der Sümpfe." },
      ],
      threats:[
        { name:"PLAGUE (Plagen)", flavor:"Es kichert, während es seine Beute wie ein Spielzeug behandelt, springend und rollend", options:["Seinen widerlichen Gestank in die Luft strömen lassen (sickened-2 oder choking-2)","Sein Opfer in eine Ecke drängen (cornered-1)"] },
        { name:"SCORCH (Versengen)", flavor:"Glut leuchtet aus seinem verrotteten Kern", options:["Beißen, Schlagen oder Kratzen (bruised-1 und singed-2)","Aus der Entfernung einen brennenden Torfklumpen spucken (singed-2)","Umgebende trockene Vegetation entzünden (burning-2 oder Ill Tidings)"] },
        { name:"MELD (Verschmelzen)", flavor:"Sie kreischen und zischen, während sie sich einander nähern, oder beginnen sich zu teilen", options:["Sich zu einem schwerfälligen Klumpen zusammentun oder sich zu zweit teilen (erhält large festering mass, oder bei vielen, gain size oder numbers)"] },
      ],
      source:"A Shadow in the Barley – Szene 'The Shrine of the Dolorous Lady'. Zweites von bis zu drei möglichen Mirelings.",
    },
    { name:"MIRELING 3", img:["mireling1","mireling2","mireling3"], after:4, difficulty:2, type:"Aggressor, Sapper",
      desc:"Verspielte und boshafte Geister von Torffeuern, Mirelings gleichen schlurfenden Haufen aus getrocknetem Torf und faulendem Schilf mit den Schädeln konservierter Tier- oder Menschenleichen. Ein schwelendes Feuer glimmt in diesen Kreaturen aufgrund der brennbaren Erde und verströmt einen beißenden Gestank. Mirelings tragen manchmal harten Schutt oder rostige Speere in sich, Relikte eines uralten, längst begrabenen Königreichs.",
      limits:[
        { label:"HARM (Schaden)", max:3 },
        { label:"BANISH (Verbannen)", max:2 },
        { label:"BURN (Verbrennen)", max:0, note:"—" },
        { label:"FAR AWAY (Weit entfernt)", max:4, start:2 },
      ],
      tags:["harter Schutt oder rostige Speere","spiteful-1"],
      secrets:[
        { title:"Belebende Kraft", text:"Sie werden von Wanehunger belebt, der nagenden, verschlingenden Kraft hinter dem Miasma der Sümpfe." },
      ],
      threats:[
        { name:"PLAGUE (Plagen)", flavor:"Es kichert, während es seine Beute wie ein Spielzeug behandelt, springend und rollend", options:["Seinen widerlichen Gestank in die Luft strömen lassen (sickened-2 oder choking-2)","Sein Opfer in eine Ecke drängen (cornered-1)"] },
        { name:"SCORCH (Versengen)", flavor:"Glut leuchtet aus seinem verrotteten Kern", options:["Beißen, Schlagen oder Kratzen (bruised-1 und singed-2)","Aus der Entfernung einen brennenden Torfklumpen spucken (singed-2)","Umgebende trockene Vegetation entzünden (burning-2 oder Ill Tidings)"] },
        { name:"MELD (Verschmelzen)", flavor:"Sie kreischen und zischen, während sie sich einander nähern, oder beginnen sich zu teilen", options:["Sich zu einem schwerfälligen Klumpen zusammentun oder sich zu zweit teilen (erhält large festering mass, oder bei vielen, gain size oder numbers)"] },
      ],
      source:"A Shadow in the Barley – Szene 'The Shrine of the Dolorous Lady'. Drittes von bis zu drei möglichen Mirelings.",
    },
  ],
  revelations:[],
  tips:[],
},

/* 7 -------------------------------------------------- MURDERER FROM AFAR */
{
  key:"murder", kind:"scene", page:"S. 331–332",
  title:"Ein Mörder aus der Ferne", en:"A Murderer From Afar", optional:true,
  summary:"Optionaler Abschluss — Hausbrand & Attentat",
  overview:["Optionaler Abschluss: ein Brandstifter legt Feuer an Rosamunds Hütte", "Ein gemeinsames Abendessen wird durch die Flammen unterbrochen", "Das Strohdach brennt — die Helden müssen löschen, bevor die Ritualwerkzeuge verloren gehen", "Ein vergifteter Blasrohrpfeil trifft das eigentliche Ziel des Attentats (meist Rosamund)", "Der Attentäter ist meist ein Cold-Hearted Stabber — möglicherweise Verdan", "Verfolgung des flüchtenden Attentäters über die Baumkronen"],
  readAloud:[
    { page:"S. 331", label:"Rückkehr zu Rosamund", after:2, text:
      `Bei eurer Rückkehr ins Ravensdale bittet Rosamund euch inständig, über Nacht zu bleiben und mit ihr zu speisen. An einem schlichten Eichentisch, reich beladen mit Köstlichkeiten des Ravensdale, besprecht ihr die jüngsten Ereignisse und überlegt, welche Schritte als Nächstes zu tun sind.` },
    { page:"S. 331", label:"Der Rauch", after:3, text:
      `Eure Nasen haben sich noch nicht an den dichten Duft der vielen getrockneten Kräuter und Gewürze gewöhnt, die von Rosamunds Dachbalken hängen. Und doch – ein bestimmter Geruch übertönt plötzlich alle anderen, ein unwillkommener: Rauch. »Das Dach!«, ruft Rosamund erschrocken und springt auf.` },
  ],
  hideFlowLabel:true,
  flow:[
    `In diesem optionalen Abschluss des Abenteuers legt ein mysteriöser Brandstifter Feuer an der Hütte der Weisen Einen und versucht, Rosamund oder einen der Helden zu vergiften. Beendet das Abenteuer mit dieser Szene, um das Gefühl zu festigen, dass die eskalierende Gefahr sehr real ist und aus verschiedenen Richtungen und Quellen kommen kann. Die Dales werden vielleicht nie wieder einen friedlichen Tag erleben — es sei denn, die Helden unternehmen etwas dagegen.`,
    `<span class="section-heading">Ein Haus in Flammen</span>`,
    `Beginnt damit, die Szene eines Abendessens in der Hütte des Weisen Einen zu setzen. Lasst die Helden eine Weile plaudern und die jüngsten Ereignisse besprechen, und beschreibt dann die Bedrohung durch das Feuer.`,
    `Das Strohdach von Rosamunds Haus fängt plötzlich Feuer — nutzt dafür das Challenge-Profil <strong>Local Disaster</strong> ohne dessen Aspekt (siehe unten). Die Helden müssen versuchen, die Flammen rasch zu löschen und ihr Heim zu retten — andernfalls könnten die Flammen die für ihr Handwerk bedeutsamen Ritualwerkzeuge, Rezepte und Opfergaben vernichten, oder Rosamund gar tödlich verletzen.`,
    `<span class="section-heading">Der vergiftete Pfeil</span>Das Feuer ist nur Teil der List; ein Attentäter lauert versteckt in den Bäumen vor der Hütte und wartet darauf, dass sein Opfer aus dem brennenden Haus flieht, um den Job zu Ende zu bringen. Er/sie schießt sein Opfer mit einem vergifteten Blasrohrpfeil und flieht dann. Das Gift kann tödlich sein (poisoned-3) oder das Herz einfrieren lassen (cold-hearted-3, <span class="gloss" onclick="openGloss('fondness-end')">Fondness' End</span>, S. 196). Wird es nicht gelindert, breitet es sich von selbst weiter aus (siehe „<span class="gloss" onclick="openGloss('conditions-also-challenges')">Conditions That Are Also Challenges</span>“, CBII 105).`,
    `<span class="callout"><span class="co-title">Wer ist das Ziel des Attentats?</span>Standardmäßig gilt Rosamund als Ziel, doch ihr könnt das Ziel auch auf einen Hero von besonderem Interesse verlegen. Es kann auch sein, dass eine andere Person getroffen wird — lasst notfalls die Würfel entscheiden. Flieht der Attentäter, haben die Helden womöglich keine Möglichkeit zu erfahren, wer das beabsichtigte Ziel eigentlich war.</span>`,
    `<span class="callout"><span class="co-title">Wer ist der Attentäter?</span>Standardmäßig ein <span class="gloss" onclick="openGloss('cold-hearted-stabber-ref')">Cold-Hearted Stabber</span> (siehe Challenge unten), entsandt von den Anhängern des <span class="gloss" onclick="openGloss('winter-king')">Winterkönigs</span>, um die Verteidigungslinien der Oldways in den Dales zu sabotieren. Möglicher Kandidat: <strong><span class="gloss" onclick="openGloss('verdan-ref')">Verdan</span></strong> (siehe Abenteuer 2 & 6).</span>`,
    `<strong>Der fliehende Attentäter:</strong> Die Verfolgung könnte sich als schwierig erweisen, da er/sie sich mit übernatürlicher Leichtigkeit bewegt und von Ast zu Ast springt, als würde ihn/sie der Wind tragen (beginnt mit getting-away-2 auf catch/escape 4). Auch bei erfolgreicher Flucht kann ein Hero eine Aktion aufwenden, um ein allgemeines Merkmal zu erkennen — Statur, Kleidung, ein besonderes Utensil wie das Blasrohr —, das später bei der Identifizierung hilfreich sein könnte. Ein verfolgender Hero kann dabei ebenfalls von einem Giftpfeil getroffen werden.`,
  ],
  npcs:[],
  challenges:[
    { name:"LOCAL DISASTER", difficulty:3, after:3, type:"Aggressor, Countdown",
      desc:"Eine seltene Störung des sonst friedlichen Alltags der Dales — eine Local Disaster ist eine Naturgewalt, die eine ganze Gemeinschaft bedroht. Sie kann als Feuer, Flut, Erdrutsch oder Sturm auftreten. Diese Katastrophen lassen sich nicht vollständig aufhalten, aber mit Hilfe der Gemeinschaft überstehen. In dieser Szene: ein Hausbrand — passt AVERT ggf. zu extinguish (löschen) an. Wird ohne eigenen Aspekt (S. 248) eingesetzt.",
      limits:[
        { label:"AVERT (Abwenden)", max:4 },
        { label:"ESCAPE (Entkommen)", max:3 },
        { label:"DEVASTATE (Verwüsten)", max:4, note:"Die Katastrophe überwältigt die gesamte Siedlung und legt sie vollständig in Schutt und Asche (Ill Tidings). AVERT geben oder DEVASTATE senken sind Aktionen auf Abenteuer-Ebene." },
      ],
      tags:["loderndes Inferno (Hausbrand)","panicked-2 (die Gemeinschaft)","Naturgewalt (Force of nature)"],
      threats:[
        { name:"LAY WASTE (Verwüsten)", flavor:"Die Katastrophe wütet durch das Dorf", options:["Wird stärker oder breitet sich aus, zerstört kleine Gebäude (devastated-1 oder Ill Tidings)","Zerstört Barrikaden oder durchbricht Eindämmungsversuche (streicht den Barrikaden-Tag oder senkt avert um 1 Stufe)","Ein fallender Balken oder Trümmer versperren den Weg (Blocked oder senkt escape um 1 Stufe) oder trifft jemanden (crushed-3 und/oder trapped-3)"] },
        { name:"ENDANGER (Gefährden)", flavor:"Irgendwo ertönt ein Schrei, verzweifelt um Hilfe rufend", options:["Ein hilfloser Bewohner sitzt fest (Complication) oder ein geliebtes Haustier rennt ahnungslos in Gefahr (Neue Challenge: Runaway Farm Animal, siehe unten)","Jemand gerät direkt in die Katastrophe (burned-4, drowning-4, crushed-4 oder battered-4)","Chaos bricht aus, alle Anwesenden werden auseinandergetrieben (erhalten panicked-2)"] },
      ],
      source:"A Shadow in the Barley – Szene 'A Murderer From Afar'. Rosamunds Strohdach fängt Feuer, als Ablenkung für den Attentäter.",
    },
    { name:"COLD-HEARTED STABBER", difficulty:3, img:"coldHeartedStabber", after:8, type:"Mystery, Aggressor, Watcher",
      desc:"Der schreckliche Winterkönig, der jenseits der Whitecloak-Berge wohnt, soll viele seltsame Diener haben, doch am überraschendsten sind jene Menschen, die sich seinem Todeskult anschließen und allem, was atmet und wächst, den Rücken kehren. Unter ihnen befinden sich verlassene Jugendliche und enteignete einfache Leute, die darin ausgebildet sind, Gemeinschaften zu infiltrieren und seine Gegner auszuschalten — vergangene, gegenwärtige oder prophezeite.",
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
      source:"A Shadow in the Barley – Szene 'A Murderer From Afar'. Standardprofil des Attentäters, S. 264. Vollständiger Auftritt später in The Barleytown Fair als Verdan.",
    },
    { name:"RUNAWAY FARM ANIMAL", difficulty:1, after:3, type:"Charge, Quarry, Aggressor",
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
      source:"A Shadow in the Barley – Szene 'A Murderer From Afar'. Eskalation der Local-Disaster-Threat 'ENDANGER', falls ein Haustier in Gefahr gerät.",
    },
  ],
  revelations:[
    { kind:"Core", ref:"2", text:"Etwas, das die Dales seit Jahrhunderten vor äußeren Mächten geschützt hat, schwindet." },
  ],
  tips:[
    "Der Ton dieser Szene: kurz, scharf und schockierend — sogar ein schmerzhafter Wendepunkt, der zügig behandelt wird, aber eine bleibende Narbe hinterlässt.",
  ],
},

/* 8 --------------------------------------------------------- AFTERMATH */
{
  key:"aftermath", kind:"aftermath", page:"S. 332",
  title:"Aftermath", en:"Aftermath",
  summary:"Heldenempfang, Belohnung & Review-Fragen",
  readAloud:[],
  showImprovement:true,
  flow:[
    `Kehren die Helden nach Ravenhome zurück (falls sie zurückkehren), bereiten ihnen die Bewohner (falls noch dort) einen wahren Heldenempfang, gebannt von den Erzählungen ihrer schaurigen Begegnungen mit den Schrecken der Sümpfe.`,
    `Wird dies als Teil von Wake of the Oldways gespielt, erkennen die Helden — oder Rosamund teilt diese Erkenntnis mit ihnen —, dass die <span class="gloss" onclick="openGloss('dolorous-lady')">Dolorous Lady</span> die Korruption nicht umkehren und die Fäulnis auch nicht mehr lange zurückhalten kann. Die Magie des Standsteins schwindet weiterhin, und das Ritual hat sie nur vorübergehend neu belebt. Schwächelt die Dolorous Lady, könnten auch andere Schutzwarden betroffen sein. Ravenhome mag sicher sein — aber wie lange noch?`,
  ],
  npcs:[],
  challenges:[],
  revelations:[],
  rewards:[
    "Ein <span class=\"gloss\" onclick=\"openStore()\">wertvoller Gegenstands-Tag</span> — Auswahl im Allgemeinen Laden (CBI 132, CBII 39, oder aus dem General Store der Dales, S. 126).",
  ],
  extra:{ heading:"Review-Fragen für die Gruppe", type:"list", items:[
    "Wie hat sich das Dorf Ravenhome angesichts der wachsenden Gefahr entschieden? Haben nur einige oder alle ihr Zuhause verlassen? Griffen sie zu den Waffen — wurde dabei jemand verletzt? Leben sie fortan in Angst, wird Ravenhome weniger gastfreundlich?",
    "Wurde Willow vom Waken Sentry verletzt? Ist sie nach diesem Erlebnis noch genauso fröhlich wie zuvor?",
    "Hat die Gefährtenschaft SorrowBalm den verzauberten Opal gegeben? Wie steht sie nun zu ihnen? Jagen andere ihrer Art sie (<span class=\"gloss\" onclick=\"openGloss('eglerion')\">Eglerion</span>, S. 294), oder hält sie die Helden für künftig nützlich?",
    "Was geschah mit Rosamund? Wurde sie verletzt — wie wird das Dorf (oder was von ihm übrig ist) ohne eine Weise Eine zurechtkommen?",
    "Gelang es der Gefährtenschaft, die Schutzwirkung der Dolorous Lady neu zu entfachen? Was denken die Helden angesichts der Gefahr, die nun direkt vor ihrer Haustür lauert?",
  ]},
  tips:[],
},

];

ADVENTURES.find(a=>a.id==="a1").scenes = A1_SCENES;
