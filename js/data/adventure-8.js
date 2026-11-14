/* ---------- Tutorial-Abenteuer (außerhalb der Kampagne): Der Heap-Thing von Skunk Glen ----------
   Core Book, Band II (The Narrator), S. 208–225 (Heft-Zählung) bzw. 448–465 (App-Zählung).
   Challenges und Vignetten kommen aus den Bibliotheken (challenge-library.js, journey-library.js). */

(function(){
const libCh = slug => { const c = CHALLENGE_LIBRARY.flatMap(k=>k.challenges).find(x=>x.slug===slug); return c ? JSON.parse(JSON.stringify(c)) : null; };
const jn = JOURNEY_LIBRARY.flatMap(k=>k.challenges).find(x=>x.slug==="skunk-glen");
const G = (id, t) => `<span class="gloss" onclick="openGloss('${id}')">${t}</span>`;

const SG_SCENES = [

/* 0 ---------------------------------------------------------- ÜBERBLICK */
{
  key:"intro", kind:"intro", page:"S. 448–451",
  title:"Überblick", en:"The Heap-Thing of Skunk Glen",
  summary:"Starter-Abenteuer · Hintergrund · Hooks · Szenenfolge",
  overview:[],
  readAloud:[
    { page:"S. 448–449", label:"Eröffnung des Abenteuers", text:
      `Seit Menschengedenken karren die Dorfbewohner von Ravenhome am Ende des Winters, vor dem Frühlingsfest, ihre alten Kleider, kaputten Werkzeuge und anderen Ausschuss zu einem Felsvorsprung und kippen alles in eine Schlucht namens Skunk Glen. In diesem Jahr überzeugte der Alderman die anderen, den Brauch zu ändern: Müll und kaputte Möbel ließen sich zu einem Haufen türmen und gäben ein prächtiges Lagerfeuer für das Frühlingsfest!

Die Dorfbewohner ahnten nicht, dass in einer Höhle am Grund der Schlucht eine Kreatur wohnt. Als sie hörte, dass sie dieses Jahr keine „neuen“ Kleider bekommt, tobte und schäumte sie und schwor, das neue Frühlingsfest zu ruinieren. Sie ließ die Pasteten verfaulen und die kaputten Werkzeuge lebendig werden und auf die Dörfler einprügeln. Mit verzaubertem Lagerfeuerrauch und Frühlingsmelodien lockte sie die Dorfbewohner in ihre Höhle in Skunk Glen, wo sie ihnen Werkzeuge, Schuhe und sogar ihre Namen stahl (manche sagen: ihre Haut!). Zum Glück gab es im Dorf jemanden, der den Tag rettete …` },
  ],
  flow:[
    `<span class="section-heading">Starter-Abenteuer</span> Der Heap-Thing von Skunk Glen ist ein <strong>eigenständiges Tutorial-Abenteuer</strong> aus dem Core Book, das dich und deine Gruppe durch euer erstes Spiel von Legend in the Mist führen soll. Es gehört <strong>nicht zur Kampagne</strong> Wake of the Oldways, lässt sich aber als Aufwärmen davor oder in jedem anderen Dorf spielen. Lies es vorab durch und schlag die erwähnten Regeln nach.`,
    `<span class="section-heading">Hintergrund</span> Jedes Jahr am Ende des Winters begehen die Dorfbewohner von Ravenhome die Zeremonie der <strong>Frühlingserneuerung</strong>: Jede Person, vom Kind bis zum Ältesten, legt ein paar alte Dinge – zerschlissene Kleider, irreparable Werkzeuge – auf einen besonderen Karren, der feierlich über einen Felsvorsprung in die Schlucht von Skunk Glen geschoben wird. Danach wird auf dem Dorfanger gefeiert, gegessen, gesungen und um ein großes Lagerfeuer getanzt. Das Alte wird verabschiedet, das Neue begrüßt.`,
    `<span class="section-heading">Ein veränderter Brauch</span> In diesem Jahr hat Alderman Beaks die Dörfler überzeugt, Müll und kaputte Möbel stattdessen als Brennstoff für das Festfeuer zu nutzen: Was wäre ein besserer Weg, die letzte Kälte des Winters zu vertreiben? Seine wahren Gründe: Er hat von Händlern und Bekannten gehört, dass sich auf den Straßen immer mehr Banditen und Fremde mit üblen Absichten herumtreiben. Nach Rat bei der Wise One des Dorfes beschloss er, einen Teil der Stämme, die sonst für das Festfeuer vorgesehen sind, für Befestigungen zurückzuhalten – und löste damit unwissentlich eine Fehde mit dem Heap-Thing aus.`,
    `<span class="section-heading">Die verstimmte Kreatur</span> Am Grund der Schlucht lebt seit Urzeiten ein magisches Wesen, das einst einer Person mit knorrigen Gliedern, schuppiger grüner Haut und Augen wie Bernsteinkugeln ähnelte, aus Gier aber zum Teil-Müll wurde: ein <strong>Heap-Thing</strong>. Die ausrangierten Dinge des Dorfes hielt es stets für ein Geschenk und eine indirekte Einladung zum Fest. Glaubt es sich nun ausgeladen, schwört es, die Frühlingserneuerung zu ruinieren – erst mit kleinen Missgeschicken, dann mit völligem Chaos, bis die Dörfler an seinem eigenen verdrehten Fest in seinem Müllhaufen teilnehmen müssen. (Im offiziellen Hearts-of-Ravensdale-Setting ist er eine „Creature of Twilight“.)`,
    `<span class="section-heading">Szenenfolge</span> 1 · <strong>Zeremonievorbereitungen</strong> (Dorfplatz, Aufgaben vom Alderman) → 2 · <strong>Chaos auf dem Dorfanger</strong> (Cursed Bonfire, verzauberte Dörfler, Animated Effigies) → 3 · <strong>Die Wahnhafte Prozession</strong> (Journey den Pfad hinab) → 4 · <strong>Grund von Skunk Glen</strong> (Eintritt in die Domäne) → 5 · <strong>Das Fest des Spotts</strong> (Heap-Thing) → Nachspiel.`,
    `<span class="section-heading">Buchfassung</span> Den vollständigen Text im Buchaufbau findest du unter <a class="gloss" onclick="goBook('skunk','nr-skunk')">Skunk Glen im Erzähler-Buch (S. 448–465)</a>.`,
    `<span class="section-heading">Wo liegt Ravenhome?</span> Ravenhome ist ein pastorales Dorf im Zentrum des Tals von Ravensdale, der Standard-Startort der Kampagne. Du kannst das Abenteuer aber in jedem Dorf deines Settings ansiedeln.`,
  ],
  npcs:[],
  challenges:[],
  extra:{ heading:"Hooks: Wie sind die Heroes beteiligt?", type:"list", items:[
    "Dorfbewohner von Ravenhome (oder dem Dorf, in dem du das Abenteuer ansiedelst).",
    "Besucher aus anderen Gemeinden oder Einsiedler aus der Nähe, die zur jährlichen Zeremonie gekommen sind.",
    "Reisende, Wanderer oder Volkshelden, die das Dorf durchqueren oder dort verweilen.",
    "Monsterjäger oder Zauberer, die von rätselhaften Gerüchten über Skunk Glen gehört haben.",
    "Andere seltsame Wesen auf der Durchreise, die nach ihresgleichen oder einem neuen Unterschlupf suchen.",
    "<strong>Die Wise One spielen:</strong> Ist einer der Heroes die Wise One, lass diese Spielerin oder diesen Spieler die wahren Gründe des Alderman wissen. Es nützt niemandem, kurz vor der Zeremonie Panik zu verbreiten – ab da liegt es bei ihr, ob sie die Information preisgibt.",
    "<strong>Solo-Spiel:</strong> Mit den Oracle-Regeln des Core Books lässt sich das Abenteuer solo oder co-op spielen. Lies dazu keine mit SOLO markierten Abschnitte, bis dich das Oracle dazu auffordert.",
  ]},
  rewards:[],
  revelations:[],
  tips:[
    "Dieses Abenteuer ist als Lernhilfe gebaut: Jede Szene übt einen Teil des Game Loops (Establish → Action → Consequences → Repeat). Die Kästen „Tipps“ pro Szene erklären, worauf du achtest.",
  ],
},

/* 1 --------------------------------------------- ZEREMONIEVORBEREITUNGEN */
{
  key:"prep", kind:"scene", page:"S. 451–455",
  title:"Zeremonievorbereitungen", en:"Opening Scene: Ceremony Preparations",
  summary:"Game Loop · Simple & Quick Actions · Aufgaben vom Alderman",
  overview:["Treffen auf dem Dorfplatz mit Simple Actions, noch ohne Würfeln","Alderman Beaks verteilt Aufgaben (Wick, Reeve, Auntie Elswith, Brücke, Hunn)","Jede Aufgabe ist eine kleine Challenge mit Quick-Ergebnis","Ziel: Rhythmus des Game Loops lernen"],
  readAloud:[
    { page:"S. 451", label:"Vorlesetext: Frühlingserneuerung", text:
      `Obwohl man die letzte Kälte des Winters heute Morgen noch in der Luft spürt, sind die Leute von Ravenhome ungewöhnlich rege. Es liegt eine süße Spannung in der Luft – Vorfreude auf die Frühlingserneuerung. Endlich ist es so weit! Es ist heute Abend!

Die Frühlingserneuerung ist das erste Freiluftereignis nach dem Winter, die Gelegenheit, endlich mit allen Lieben unter offenem Himmel und hellen Sternen fröhlich zu sein. Aber zuvor gibt es Arbeit: Essen vorbereiten, Tische aufstellen, den Dorfanger harken und mehr.

Eine wichtige Aufgabe ist es, die Kleider, die als zu abgetragen gelten, und die Möbel, die als zu kaputt zum Reparieren gelten, zum Discarded Cart zu bringen. Jedes Jahr wird der Inhalt des Karrens über den Rand von Skunk Glen gekippt, als Sinnbild der Erneuerung. Es ist eine Tradition, so alt wie Ravenhome selbst, doch ihr habt Gerüchte gehört, dass sich der Brauch selbst dieses Jahr erneuern könnte.

Ihr zieht euch rasch an, frühstückt zu Ende und macht euch auf den Weg ins Dorfzentrum. Es ist Zeit, bei den Vorbereitungen mitzuhelfen.` },
  ],
  flow:[
    `<span class="section-heading">Treffen auf dem Dorfplatz</span> Der Dorfplatz ist ein schlammiger, von Häusern umgebener Hof gegenüber dem Gemeindehaus. Von hier überblickt man fast das ganze Dorf – deshalb findet man Alderman Beaks oft in der Nähe. Er ist noch nicht da, hat aber Nachricht geschickt, damit sich die Heroes mit ihm treffen. Spielt die Szene mit dem Game Loop (Vol. I, S. 20).`,
    `<strong>Establish:</strong> Beschreibe die Szene und lass die Heroes wissen, dass sie heute Morgen alle zufällig hier sind. Es gibt noch keine Challenges oder Threats.`,
    `<strong>Action:</strong> Wähle einen Hero, der zuerst handelt: Er beschreibt, wie er ankommt, wie er aussieht, was er sagt oder tut und wie er auf die Aufregung reagiert. Das sind alles <strong>Simple Actions</strong> (Vol. I, S. 150) – noch kein Würfeln. <strong>Consequences:</strong> Keine, es ist eine risikoarme Tätigkeit. <strong>Repeat:</strong> Etabliere die Szene nach jedem Zug neu, bis alle ein Gefühl für den Rhythmus haben.`,
    `<span class="section-heading">Aufgaben vom Alderman</span> Beaks erscheint und sucht Hilfe; auch Widerwillige jagt er, um sie um Unterstützung zu bitten. Er teilt Aufgaben für die Vorbereitung der Zeremonie zu – wähle für jeden Hero eine, passend zu seinen Stärken (bei mehr Aufgaben als Heroes: die passendsten nehmen oder einigen Heroes mehr als eine geben): Wick helfen · Reeve bei den Kränzen helfen · Auntie Elswith besuchen · den Stau auf der Brücke klären · mit Hunn über die Banner-Stangen reden.`,
    `<strong>Auf dem Spiel steht</strong>, ob die Heroes dem Dorf bei den Vorbereitungen helfen können, und zwar bis Sonnenuntergang. Alderman Beaks ist eine Challenge mit aktivem Threat: Wer sich drückt, bekommt den Unmut der Gemeinde zu spüren. <strong>Consequence bei Ignorieren:</strong> Andere Dörfler zeigen Missfallen (spurned-2, ignored-2 oder disliked-2 – für den Rest der Woche). Das lässt sich meist nicht abmildern; lass noch nicht auf eine Reaktion würfeln.`,
    `<span class="section-heading">Krempelt die Ärmel hoch!</span> Die Heroes verteilen sich im Dorf und widmen sich ihren Aufgaben (siehe Vignetten unten). Nimm an, dass sie sich sehen oder hören und einander helfen können. Verwende pro Aktion ein <strong>Quick-Ergebnis</strong> (Vol. I, S. 151): Der Hero beschreibt seine Aktion, zählt die Power (Tags/Statuses der Aufgabe helfen oder behindern), würfelt und addiert die Power. <strong>7 oder mehr</strong> ist ein Success und die Aufgabe ist erledigt, <strong>9 oder weniger</strong> bringt Consequences. Ohne Success darf der Hero es erneut versuchen, wenn er im Rampenlicht steht.`,
    `Ignoriert ein Hero den Threat der Aufgabe oder erzeugt seine Aktion Consequences, wähle eine oder mehrere der Consequences der jeweiligen Aufgabe. Hat eine einen Effect, schreibe ihn auf eine Tracking-Karte. Erlaube dem Hero eine Reaction-Probe, um die Effekte abzumildern (Vol. I, S. 162) mit reaktiven Tags (schon in der Aktion benutzte Tags zählen nicht). Sind alle Aufgaben erledigt oder vermasselt, beginnt die Feier: weiter mit <strong>Chaos auf dem Dorfanger</strong>.`,
  ],
  npcs:[
    { name:"Alderman Beaks", role:"Dorfvorsteher von Ravenhome", img:"aldermanBeaks", after:4, text:"Ein charmanter Mann in den Fünfzigern mit Krähenfüßen um die Augen und einem ständigen Lächeln; selbst wenn er ernst ist, bleibt ein Hauch Fröhlichkeit in seinen Augen, und er ist stets kompromissbereit. Die Leute von Ravenhome haben ihn nur dreimal wirklich wütend gesehen – alle drei Male sind Teil der Dorflegende. Auf die Änderung des Brauchs angesprochen, bestätigt er, dass der Müll verbrannt statt weggeworfen wird („Genauso lustig, wenn nicht lustiger. Und vielleicht noch symbolischer, findet ihr nicht?“). Fragen sie weiter nach, vertraut er ihnen seine Sorgen über die kommende Jahreszeit an und bittet sie, die Gerüchte nicht zu verbreiten; er wird angry-3 auf die Heroes, wenn er vermutet, dass sie es doch tun. SOLO: Lies die Gerüchte über Kommendes." },
    { name:"Wick Harrow & Bran", role:"Pastetenbäcker und Lehrling", text:"Wick ist frantic-2, sein ganzes Obst in der Speisekammer ist über Nacht verfault. Sein junger Lehrling Bran flüstert erleichtert: „Den Geistern sei Dank, dass ihr da seid!“" },
    { name:"Reeve", role:"Frau des Alderman", text:"Sorgt sich um ihren Hund Brown Mutt, der den Kranz aus ausrangiertem Kram mitgenommen hat, den sie zum Verbrennen vorbereitet hatte." },
    { name:"Auntie Elswith", role:"Freundliche Alleinlebende", text:"Wohnt in einem halb von Efeu überwucherten Cottage am Dorfrand. Möchte ihre kaputten Blumentöpfe wegwerfen, doch Wespen haben den Schuppen übernommen." },
    { name:"Dalia Furrows, Dalia Miuleska & Promise Furrows-Miuleska", role:"Streitende Gehöftoberhäupter und ihre Tochter / Schwiegertochter", text:"Die beiden Dalias sind fuming-3 und streiten, wessen Tischdecke auf den Haupttisch kommt; Promise steht ratlos dazwischen." },
    { name:"Hunn", role:"Schmied/in", text:"Gentle, lost-2: Wegen minderwertigem Eisen halten die Pfosten für das Hauptbanner vielleicht nicht – und das Aufrichten ist ein Höhepunkt für die Dorfkinder." },
  ],
  vignettes:[
    { name:"Wick, der Pastetenbäcker", flavor:"Das Haus ist ein Chaos – Füllung blubbert in Eisentöpfen, überall ist Mehl. Wick ruft: „Alles Obst in der Speisekammer ist über Nacht verfault! Was soll ich nur tun?“", options:[
      "(Kein Success) Wick verwendet widerwillig das verdorbene Obst; der Gestank der Pasteten übertönt beim Fest den Anger",
      "Wicks Laune kippt und er schreit den Hero an (shaken-1 oder upset-1)",
      "Beeindruckt oder wütend lässt Wick den Hero für den Rest des Tages hart in der Bäckerei schuften (tired-2)",
      "Eine der Früchte platzt auf und Würmer quellen heraus (disgusted-1)",
    ]},
    { name:"Reeve und die Kränze (und der Hund)", flavor:"Reeve trifft euch mit besorgtem Blick im Vorgarten: „Brown Mutt, unser Hund, hat den Kranz mitgenommen, den ich aus ausrangiertem Kram gemacht habe! Bitte findet ihn und bringt den Kranz zurück.“", options:[
      "(Kein Success) Der Kranz wird zerstört (Ill Tidings), und Reeve ist annoyed-2 oder disappointed-2 über den Hero",
      "Beim Versuch, Brown Mutt zu fangen, holt sich der Hero scraped-2 oder macht sich dirty-2",
      "Die lange Suche nach dem Hund erschöpft den Hero (tired-2)",
    ]},
    { name:"Auntie Elswith", flavor:"Auntie Elswith bittet euch, bei einer Tasse Kamille Platz zu nehmen: „Ich möchte ein paar meiner kaputten Blumentöpfe wegwerfen, aber leider haben Wespen den Schuppen übernommen.“", options:[
      "(Kein Success) Auntie Elswith legt ihr Ausrangiertes dieses Jahr nicht auf den Haufen – schlechtes Omen, das auf den Hero abfärben kann (gib einen oder beide expecting-bad-luck-1)",
      "Auntie Elswith ist entsetzt über das Verhalten des Heroes und erzählt es dem ganzen Dorf (spurned-1)",
      "Die Wespen stechen den Hero (stung-2)",
      "Der Schuppen stürzt auf den Hero ein (dirty-2 und bruised-1)",
    ]},
    { name:"Blockierte Brücke", flavor:"Man hört die Dalias streiten, bevor man sie sieht: Beide stehen fuming-3 auf der alten Brücke und lassen niemanden passieren, bis die Frage der Tischdecke gelöst ist. Promise Furrows-Miuleska steht ratlos dazwischen.", options:[
      "(Kein Success) Alle werden aufgehalten, und der Anger ist ein einziges Chaos, als die Feier beginnt",
      "Eine der Dalias beleidigt den Hero vor dem ganzen Dorf (ridiculed-2)",
      "Eine der Dalias schubst den Hero von der Brücke (dirty-2 und soaked-2)",
      "Beim Tragen der Gegenstände über die Brücke ist der Hero erschöpft (tired-2)",
    ]},
    { name:"Hunn und die mickrigen Stangen", flavor:"Hunn steht lost-2 vor der Schmiede: „Mit so mickrigen Stangen kann ich nicht versprechen, dass das Banner hält.“ Das Aufrichten der Pfosten ist ein Höhepunkt für die Dorfkinder.", options:[
      "(Kein Success) Das Banner kann nicht aufgerichtet werden, und alle Kinder sind für den Rest der Nacht disheartened-1",
      "Die Lösung hält, ist aber nicht ganz sicher (wobbly banner posts)",
      "Hunn, der zur Verzweiflung neigt, sieht die eigene Hilflosigkeit als persönliches Versagen (gib Hunn disheartened-2)",
      "Der Hero hat einen Unfall an der Schmiede (burned-1)",
    ]},
  ],
  extra:{ heading:"Szenen-Belohnung", type:"list", items:[
    "War ein Hero besonders hilfreich (auch ohne Success), gib ihm <strong>goodwill-1</strong> oder <strong>appreciated-1</strong> bei dem Dörfler, dem er am meisten geholfen hat.",
  ]},
  rewards:[],
  revelations:[],
  tips:[
    "<strong>Das ist der Game Loop:</strong> Du hast die Szene etabliert und neu etabliert, Aktionen unterstützt, Consequences verhängt und Reactions abgewickelt. Nutze diesen Loop im ganzen Abenteuer.",
    "<strong>Vertraute Gesichter:</strong> Betone Persönlichkeit und Verhalten der Dörfler. Hat ein Hero einen besonderen Moment mit einem von ihnen, gib ihm dafür ein Story-Tag – diese Bindungen werden später wichtig.",
    "<strong>Helfende Hand:</strong> Ein anderer Hero kann helfen und bei der Power ein hilfreiches Tag hinzufügen; hat die Aktion Consequences, erleidet er sie mit (Vol. I, S. 158).",
    "<strong>Misstrauische Gemüter:</strong> Wer ergründen will, warum all diese Missgeschicke passieren, braucht Wissen oder Magie. Ohne das ist es eine Simple Action und wirkt wie Pech. Eine Hexe oder ein Monsterjäger erkennt per Quick Action eine übernatürliche Kraft – als Belohnung alert-2 oder eine Vorbereitungsaktion.",
  ],
},

/* 2 --------------------------------------------- CHAOS AUF DEM DORFANGER */
{
  key:"bedlam", kind:"scene", page:"S. 456–458",
  title:"Chaos auf dem Dorfanger", en:"Bedlam on the Green",
  summary:"Detailed Actions · Limits · Cursed Bonfire · verzauberte Dörfler · Animated Effigies",
  overview:["Das Fest kippt durch den Rauch des Cursed Bonfire ins Chaos","Hauptchallenge: Cursed Bonfire (löschen oder Fluch brechen)","Enchanted Villagers (Charge) gefährden sich selbst, Animated Effigies (Aggressor) setzen alles in Brand","Tags in der Szene: dichte Menge, ohrenbetäubender Lärm"],
  readAloud:[
    { page:"S. 456", label:"Vorlesetext: Der Dorfanger", text:
      `Das Geräusch Dutzender aufgeregter Menschen erfüllt den Dorfanger, als sich alle versammeln, um den Sonnenuntergang zu sehen und das Frühlingsfest zu beginnen. Der Anger ist ein großes offenes Feld hinter dem Gemeindehaus, das sich bis zum Felsvorsprung über der Schlucht von Skunk Glen erstreckt – dem Ort, von dem jeden Frühling der gesammelte Unrat hinabgeworfen wird.

Doch nicht heute Nacht – diesmal wird das Lagerfeuer zum Star der Show. Mitten auf dem Anger, zwischen gedeckten Tischen, einer mit Bändern geschmückten Tanzfläche und der Bühne der Musiker, brennt das Feuer schon hell und hoch, während die vom Dorf ausrangierten Dinge darin verzehrt werden. Binnen Minuten, ohne besondere Ansprachen, wird schon gegessen und geplaudert, und beim Tanzen treten Familien ans Feuer, um weitere ausrangierte Dinge in die Flammen zu werfen.

Doch so groß und fröhlich das Fest bald wird, liegt eine Unruhe in der Luft. Am Rand streiten einige über die neue Tradition. Unter den Tanzenden schreit jemand ein wenig zu laut, ein anderer tanzt zu wild. Die Musik klingt verdreht, als spielte ein Instrument gegen die anderen. Es ist kaum einen Augenblick nach Sonnenuntergang, doch die Feier scheint schon außer Kontrolle zu geraten und auf ein Unglück zuzusteuern.` },
  ],
  flow:[
    `In dieser Szene kippt das Feiern durch die Magie des Heap-Thing langsam ins Chaos. Sie breitet sich im Rauch aus, der vom <strong>Cursed Bonfire</strong> aufsteigt – den zerstörten Dingen, die er für sich haben will –, während seine verhexte Musik unter dem Hügel gespielt wird. Verzauberte Dörfler werden wahnhaft und gefährden sich selbst, und manches Gerümpel erwacht als Gestalten zum Leben, die das Feuer löschen wollen, auf das der Heap-Thing eifersüchtig ist – stattdessen aber alles in Brand setzen.`,
    `<span class="section-heading">Tags in dieser Szene</span> Die dichte Menge macht ohrenbetäubenden Lärm; beides kann Aktionen behindern.`,
    `<span class="section-heading">Der Fluch</span> Jeder, der den Rauch einatmet, wird wahnhaft, erfüllt vom Verlangen der Kreatur, zu tanzen und zu feiern. Das ist ein fortlaufender Threat & Consequence der Szene: Dörfler verfallen weiter, bis die Heroes die Ursache entdecken und ein Ende setzen. Führe zuerst die <strong>Enchanted Villagers</strong> ein (Threat nutzen, bei Nichtverhindern Consequence). Sucht ein Hero die Ursache oder atmet Rauch ein, beginne mit dem <strong>Cursed Bonfire</strong>. Wirf zu einem Zeitpunkt deiner Wahl die schockierenden <strong>Animated Effigies</strong> hinein.`,
    `<span class="section-heading">Detailed Actions</span> Viele Threats lassen sich mit einer Quick Action abwenden, ebenso Aktionen, die das Lagerfeuer als Ursache aufdecken. Die Haupt-Challenge verlangt jedoch <strong>Detailed Actions</strong> (Vol. I, S. 151) und einen quenched-, choked- oder wet-Status gegen das Put-Out-Limit. Erlaube den Heroes, Power für Effects wie das Entfernen von delirious oder ein hilfreiches Tag zu nutzen. <strong>delirious</strong> ist für Heroes ein Compelling Status (Vol. I, S. 170): Er hindert, Tanzen und Trinken zu stören; wird ein Hero davon überwältigt, schließt er sich der Wahnhaften Prozession an.`,
    `<span class="section-heading">Den Fluch entdecken</span> Achtet ein Hero genau auf den Rauch (Simple Action), vielleicht nach dem Einatmen, bemerkt er, dass Leute betroffen werden, wenn der Wind den Rauch in eine neue Richtung trägt. Der Brennpunkt lässt sich auch per Quick Action finden. Dass die Quelle unter dem Anger am Grund von Skunk Glen liegt, erfordert übernatürliche Wachsamkeit, besonderes Wissen oder Magie (Quick Action).`,
    `<span class="section-heading">Uns fehlt jemand …</span> Das Debakel ist vorbei, wenn das Feuer gelöscht ist oder niedergebrannt. Oder? Am Dorfrand verlangt eine neue Entwicklung die Aufmerksamkeit der Heroes: weiter mit <strong>Die Wahnhafte Prozession</strong>.`,
  ],
  npcs:[
    { name:"Opfer des Fluchs", role:"Bekannte Dörfler aus den Vorbereitungen", text:"Jeder Dörfler, mit dem die Heroes zuvor interagiert haben (Beaks, Wick, Bran, Reeve, beide Dalias, Promise, Auntie Elswith, Hunn), sowie geliebte Menschen der Heroes können hier verzaubert oder durch einen Verzauberten in Gefahr sein. <strong>Spare die, an denen den Heroes am meisten liegt, für die Wahnhafte Prozession auf</strong> – sie waren unter den Ersten und sind schon auf dem Weg hinab. Alternativ lassen sich Dörfler mit einer Simple Action (bei Schwierigkeiten Quick) anwerben; ein Success gibt ein Ally-Tag (etwa Hunn). Befreiung hängt von Tags und Statuses aus den Vorbereitungen ab." },
  ],
  challenges:[
    Object.assign(libCh("the-cursed-bonfire"), {after:3}),
    Object.assign(libCh("enchanted-villagers"), {after:3}),
    Object.assign(libCh("animated-effigy"), {after:3}),
  ].filter(Boolean),
  rewards:[],
  revelations:[],
  tips:[
    "<strong>Tempo mit Threats:</strong> Ein Threat pro Hero-Zug gibt etwas Klares zu bewältigen; zwei pro Hero zwingen schon zur Wahl und lassen einen Threat unbeantwortet. Lass Luft für andere Aktionen (Quelle entdecken, Feuer löschen). Meistern sich die Heroes gut: mehr Threats. Willst du die Szene beenden: keine neuen Challenges und langsamere Threats.",
    "Beginne mit beiläufigen Beschreibungen und steigere mit jedem Zug ins Bizarre und Wilde, bis klar ist: Jemand könnte schwer verletzt werden.",
  ],
},

/* 3 --------------------------------------------- WAHNHAFTE PROZESSION */
{
  key:"procession", kind:"scene", page:"S. 459–461",
  title:"Die Wahnhafte Prozession", en:"The Delirious Procession",
  summary:"Journey · Abstieg durch Skunk Glen · verzauberte Dörfler retten",
  overview:["Mehrere Fackeln ziehen den gefährlichen Pfad nach Skunk Glen hinab","Die Heroes gehen als Journey hinab (ca. vier Vignetten)","Verzauberte Dörfler sind delirious-2; Rettung kann Verbündete als Tags bringen"],
  readAloud:[
    { page:"S. 459", label:"Vorlesetext: Fackeln im Dunkeln", text:
      `„Sind alle da?“ „Habt ihr gesehen, wo Yarni hin ist?“ „Was haben sie mit den Bannern gemacht!“ … In all dem Tumult, mit Leuten, die sich sammeln und verstört dreinschauen, ist ein Ruf deutlich über allen anderen zu hören: „Da! Jemand geht den Pfad von Skunk Glen hinunter!“

Es stimmt – mehrere Fackellichter tanzen in der Dunkelheit am Rand der Schlucht und gehen den berüchtigten Pfad hinab, der zu ihrem Grund führt. Der Pfad ist schon bei Tag tückisch, und es gibt kaum einen Grund, ihn hinabzugehen. Rufe um Aufmerksamkeit bleiben unbeantwortet, während die Wanderer weiter nach unten ziehen. Plötzlich fällt eine der Fackeln in die Dunkelheit … Alle, die vom Anger zusehen, keuchen entsetzt auf.` },
  ],
  flow:[
    `Die Heroes gehen gemeinsam mit mehreren früh verzauberten Dörflern, die zur Party des Heap-Thing hinabziehen, den Weg zum <strong>Grund von Skunk Glen</strong>. Der Pfad windet sich in Zickzacklinien den Hang hinab und endet unter dem Felsvorsprung am Eingang zur Höhle der Kreatur: einem riesigen, verrottenden Haufen ausrangierter Dinge aus Jahrzehnten, vielleicht Jahrhunderten Frühlingserneuerung.`,
    `<span class="section-heading">Marsch der verzauberten Dörfler</span> Ein bis zwei Dutzend Dörfler bahnen sich planlos den Pfad hinunter, über die ganze Strecke verteilt, einige am Fuß der Klippe, bevor die Heroes starten. Alle tragen Fackeln. Unter ihnen sind Lieblingsmenschen der Heroes – aber nicht alle: Spare einige für den Grund von Skunk Glen auf. Können die Heroes sie retten, erwäge, diese NPCs als Tags zu vergeben, die als Verbündete zur Fellowship stoßen. Die Dörfler sind <strong>delirious-2</strong>, was jeden Versuch behindert, sie am Abstieg zu hindern (Quick Action): Sie glauben, dort finde die Feier statt.`,
    `<span class="section-heading">Hinab durch Skunk Glen</span> Der Abstieg ist eine <strong>Journey</strong> aus Challenge-Vignetten (Vol. I, S. 108): Jede beschreibt eine gefährliche Situation, die mit <em>einem</em> Quick-Ergebnis gelöst werden soll. Wähle eine Zahl von Vignetten (vier sind ein guter Standard) und suche die dramatischsten aus. Lass sie nicht unmittelbar aufeinanderfolgen; beschreibe die langen Minuten vorsichtiger Bewegung – der Abstieg kann eine Stunde dauern. Nach der gewählten Zahl erreichen die Heroes den Fuß der Klippe: weiter mit <strong>Grund von Skunk Glen</strong>.`,
    `<span class="section-heading">Landschaft</span> Tags: clouded moonlight (Heroes können im Dorf einfach nach einer Fackel fragen). Um eine Vignette schwerer zu machen, kann der Pfad sehr schmal, schlammig oder voller Brennnesseln sein.`,
    `<span class="section-heading">General Consequences</span> Bei jeder Vignette möglich: Ein starker Wind bläst die Fackel aus (Complication oder ein Tag scratchen) · Ein Hero rutscht auf einem moosigen Felsen oder einer Geröllhalde aus (scraped-2 oder ein Tag körperlicher Fähigkeit scratchen) · Das Lachen eines unbekümmerten Dörflers hallt von unten herauf (worried-2 oder der Fluch breitet sich aus, delirious-1).`,
  ],
  npcs:[
    { name:"Giphty the Mumbler", role:"Verzauberter Teenager (15)", text:"Aus einer der zurückgezogenen Försterfamilien. Das aufgeweckte Kind hat einen Sprachfehler, wegen dem es manchmal gehänselt wird, und ist doch vielleicht das geselligste aller Förster." },
    { name:"Laura", role:"Verzauberte Dörflerin", text:"Ihren wenigen Freunden treu ergeben; zog vor ein paar Jahren ins Dorf, nachdem sie ein Land verlassen hatte, von dem nur wenige gehört haben. Manche sagen, sie sei davongelaufen. Beim Abstieg ist sie über einen Fels gestürzt und hat einen geschwollenen Knöchel." },
    { name:"Fahira the Trader", role:"Verzauberte Händlerin", text:"Ihr Haar wurde schon in ihrer Jugend berühmt silbern. Besucht das Dorf vier Mal im Jahr zu den jahreszeitlichen Zeremonien. Als Genussmensch ist sie besonders schwer zu überreden, einer guten Party den Rücken zu kehren." },
  ],
  vignettes: jn ? jn.vignettes : [],
  challenges:[],
  rewards:[],
  revelations:[],
  tips:[
    "Jede Vignette ist ein Einzelmoment mit einem Quick-Ergebnis. Dehne sie nur, wenn Spieleraktionen oder Consequences es verlangen, und halte sie dann kurz.",
  ],
},

/* 4 --------------------------------------------- GRUND VON SKUNK GLEN */
{
  key:"bottom", kind:"scene", page:"S. 462",
  title:"Grund von Skunk Glen", en:"Bottom of Skunk Glen",
  summary:"Der Müllhaufen · Geschenk bringen oder sich durchgraben · Camping-Option",
  overview:["Der Müllhaufen am Fuß der Klippe verschluckt Dörfler","Der Zwang des Heap-Thing zerrt an jedem, der sich nähert (delirious-1 beim Ignorieren)","Zwei Wege hinein: ein Geschenk bringen oder sich durchgraben"],
  readAloud:[
    { page:"S. 462", label:"Vorlesetext: Der Müllhaufen", text:
      `Wie erwartet liegt am Fuß der Klippe ein riesiger Haufen jahrealten Ausrangierten. Skunk Glen ist voller enger Felsspalten, und der Müll sammelt sich hier in engen Räumen zwischen Felswänden, verrottet und überwuchert. Als ihr die letzten Schritte hinabgeht, begrüßt euch der seltsame Anblick, wie mehrere Dörfler den Haufen erklimmen und aus ausrangierten Dingen vergangener Jahre Stücke herauspicken, als wählten sie ein edles Stück Fleisch.

Einer von ihnen findet die Überreste einer Holzpuppe, drückt sie an die Brust … und springt in den Haufen, wo er aus dem Blick verschwindet, als sich der Unrat öffnet und ihn verschluckt. Einen Moment später ist der stinkende Schlund wieder bedeckt.` },
  ],
  flow:[
    `Die Heroes versuchen, in die Domäne des Heap-Thing einzudringen, den letzten Dorfbewohnern folgend, die seinem Zauber verfallen sind.`,
    `<span class="section-heading">Den Haufen betreten</span> Nähern sich die Heroes dem Müllhaufen, zerrt der Zwang des Heap-Thing an ihnen: Sie spüren, dass darunter etwas lauert und auf ein Geschenk der Dörfler wartet. Das ist ein Threat; wird er ignoriert, gibt es <strong>delirious-1</strong> als Consequence. Delirious Heroes sind bei allen Aktionen behindert, die nicht den Wünschen des Heap-Thing dienen. Es gibt zwei Wege hinein.`,
    `<strong>Ein Geschenk bringen:</strong> Der Heap-Thing öffnet die Grube zu seiner Höhle jedem, der ihm ein Geschenk bringt – jeden Gegenstand, egal wie abgenutzt oder kaputt (er muss nicht aus dem Haufen stammen). Die Suche nach einem Gegenstand ist eine Quick Action; der Hero erhält ein <em>Gift</em>-Tag für den Gegenstand.`,
    `<strong>Sich durch den verrottenden Unrat graben:</strong> Eine Aktion (Quick oder Detailed gegen dig 3); der Haufen wehrt sich, und delirious behindert. Als Consequence wird ein Hero von all den Dingen im Haufen <strong>scraped-2</strong>. Sind alle Heroes durch, tauchen sie im Fest des Spotts auf.`,
  ],
  npcs:[],
  challenges:[],
  rewards:[],
  revelations:[],
  tips:[
    "<strong>Bis zum Tageslicht warten?</strong> Der Ort ist stinky-2 und ein wenig scary-1, aber kein schlechter Lagerplatz; die Fellowship kann auch zurück ins Dorf oder sich unter einen Baum kuscheln. Nutze die Camping-Regeln (Vol. I, S. 179). Aber können sie dem Zwang die ganze Nacht widerstehen? Jede Camp-Aktion erzeugt Consequences: Der Hero erhält delirious-1.",
  ],
},

/* 5 --------------------------------------------- FEST DES SPOTTS */
{
  key:"festival", kind:"scene", page:"S. 463–465",
  title:"Das Fest des Spotts", en:"The Festival of Mockery",
  summary:"Quests · Der Heap-Thing · die letzten Dörfler · Auflösung",
  overview:["Die finale Konfrontation in der Domäne des Heap-Thing","Vorab: Quests der Heroes vorlesen lassen und einen Konflikt wählen","Fünf Wege, den Heap-Thing zu überwinden: zerstören, verbannen, überwältigen, überzeugen, befreien","Scheitern heißt: für immer gefangen"],
  readAloud:[
    { page:"S. 463", label:"Vorlesetext: Die Domäne", text:
      `Ihr seid in die Domäne von etwas Unmenschlichem gekommen – etwas im Inneren des Haufens ausrangierter Dinge. Etwas, das der Haufen ist.

Das Reich des Heap-Thing, diese verborgene Höhle, ist in endloses Zwielicht getaucht, voller Haufen ausrangierter Dinge, geformt wie … die Dörfler von Ravenhome. Es gibt „Tische“ und „Banner“, alles geschmückt und bereit für eine Nacht des Feierns, ein falsches Fest in vollem Gange: Wahnhafte Dörfler wandern verzaubert zwischen Festmählern aus verdorbenem Essen, von quakenden toten Vögeln gesungenen Liedern und verrotteten Puppen in zerrissenen Masken, die zum Tanz einladen.

In der Mitte dieses seltsamen Ortes, wo das Lagerfeuer sein sollte, ragt der Heap-Thing über allem auf: ein riesiger, bedrohlicher Haufen alten Unrats, zusammengehalten von verfaultem Schlamm, der sich von selbst bewegt.` },
  ],
  flow:[
    `Die Heroes stehen der Quelle des Problems gegenüber, einer Kreatur, von der niemand wusste, dass sie unter dem Hügel lebt. Der Einsatz ist hoch: Finden sie keinen Weg, den Heap-Thing zu besiegen, zu überlisten oder zu besänftigen, bleiben sie für immer hier gefangen! Tags der Szene: eerie, littered with countless discarded items (unheimlich, übersät mit ausrangierten Dingen).`,
    `<span class="section-heading">Quests: Durchforste deine Gefühle</span> Mach vor der Szene eine Pause und lass jeden Hero seine vier Quests laut vorlesen. Wähle, ohne es zu verraten, <em>eine</em> Quest eines Heroes, die hier in Konflikt geraten kann: Hingabe an Ravenhome, Quests, die einen Ansatz gegen den Heap-Thing vorgeben (Kampf oder List), die Haltung zum Unnatürlichen, oder ein Gegenstand, der sehr wichtig ist (und als Geschenk dienen könnte). Ob ein Hero Abandon oder Milestone markiert, entscheidet er selbst – du kannst helfen, indem du einen Konflikt schaffst: Liebt er einen Dörfler hier, bietet der Heap-Thing an, alle gehen zu lassen, wenn er diese Person behalten darf. Hält er alle unnatürlichen Wesen für Schädlinge, kann er Mitleid bekommen.`,
    `<span class="section-heading">Der Heap-Thing</span> Obwohl ein mächtiges Wesen aus längst vergangener Zeit, ist er selbstsüchtig, ohne Empathie oder Raffinesse und hat kein Verständnis von Menschen – er ist für ihre Gefühle recht empfänglich. Er heißt jeden willkommen, lädt zum Bleiben und Mitfeiern ein und verspottet unablässig die Bemühungen der Heroes, in seiner Domäne für allmächtig haltend. Solange er nicht überwunden ist, kann nur das Brechen seiner Magie jemanden entkommen lassen. <strong>Was will er?</strong> Er war gekränkt, als die Dörfler ihm ihre ausrangierten Dinge nicht mehr zuwarfen; nun, da einige Dörfler hier sind, ist er zufrieden und will sie für immer behalten, anstelle des verweigerten Geschenks.`,
    `<span class="section-heading">Wie der Heap-Thing entstand</span> <em>(SOLO: erst lesen, nachdem eine erfolgreiche Aktion den Ursprung erfasst hat, und erst dann das Free-Limit versuchen.)</em> Vor langer Zeit kam er als fremdartiges, aber schönes Wesen mit knorrigen Gliedern wie Baumwurzeln, grünen Schuppen und Bernsteinaugen nach Skunk Glen. Menschen bewunderten ihn und brachten Geschenke, doch mit jedem Gegenstand lastete die daran haftende Gefühlsbürde schwerer auf ihm; er wurde kleinlich und elend wie viele der Schenkenden, konnte aber nicht aufhören, mehr zu begehren. Er wandte sich von den Sterblichen ab, doch sie sandten weiter Geschenke – und so häufte er über Jahrhunderte einen Haufen um sich auf, bis er nicht mehr wusste, was er einst war.`,
    `<span class="section-heading">Die Kreatur überwinden</span> Alle Wege verlangen, dem Heap-Thing Statuses zuzufügen und eines seiner Limits zu maxen. Schlage den Heroes vor, seine Schwächen zu erkunden (Quick oder Discover-Effect). <strong>Zerstören</strong> des Körperhaufens oder <strong>Verbannen</strong> des Geistes sind schwere Taten (Might: Adventure). <strong>Überzeugen</strong>, ihn gehen zu lassen – durch Besänftigen, Verhandeln oder Austricksen – ist in seiner Domäne ebenfalls schwer (Might: Adventure). Entdecken sie, was er wirklich ist, können sie ihn von seiner Bürde <strong>befreien</strong> oder ihn mit sentimentalen Geschenken <strong>überwältigen</strong>.`,
    `<span class="section-heading">Die Letzten von ihnen</span> Eine Handvoll Dörfler (einige Lieblinge der Heroes) ist vor den Heroes in die Domäne gelangt. Nutze das Profil Enchanted Villagers, aber sie sind <strong>delirious-3</strong>, durch die Magie des Heap-Thing verstärkt (Might: Adventure). Threat: <em>Einladen</em> – mit wächsernen Augen und strahlendem Lächeln auf die Heroes zukommen (in einen endlosen Tanz reißen: grabbed-2). <em>Suhlen</em> – zu den Tischen mit verdorbenem Essen gehen, barfuß auf Unrat tanzen, sich im Schlamm wälzen (krank, verletzt oder schmutzig: Ill Tidings; tiefer in den Zauber fallen: delirious-2).`,
  ],
  npcs:[],
  challenges:[
    Object.assign(libCh("the-heap-thing"), {after:3}),
  ].filter(Boolean),
  rewards:[],
  revelations:[],
  tips:[
    "<strong>Szenen-Belohnung:</strong> Wird der Heap-Thing zerstört, verbannt oder befreit, öffnet sich sein Haufen vielleicht für einen Schatz oder ein Geschenk: ein Ring aus gewobenen Silberfäden, eine uralte Bernsteinmünze, eine seltsam glänzende Speerspitze oder ein unversehrter Foliant. Gib es als Story-Tag, oder als Beginn eines neuen Possessions- oder Relic-Themes.",
    "<strong>Die Domäne verlassen:</strong> Mit dem Sieg bricht seine Domäne zusammen; Heroes und Dörfler liegen im Müllhaufen am Grund von Skunk Glen. Die Sonne geht auf – Zeit für den langen Weg zurück ins Dorf.",
  ],
},

/* 6 --------------------------------------------- NACHSPIEL */
{
  key:"aftermath", kind:"aftermath", page:"S. 465",
  title:"Nachspiel", en:"The Aftermath",
  summary:"Bilanz ziehen · Camping · Quests & Belohnungen",
  readAloud:[],
  showImprovement:true,
  flow:[
    `Nimm dir einen Moment, um das Abenteuer zusammenzufassen und Bilanz zu ziehen. Es ist eine Gelegenheit, im Dorf zu campen (Vol. I, S. 179) und zu überlegen, ob Heroes angesichts ihrer Entscheidungen Abandon oder Milestone bei ihren Quests markieren sollten. War das Abenteuer erfolgreich, kann sich das Dorf mit Geschenken in Form neuer Story-Tags bedanken.`,
  ],
  npcs:[],
  challenges:[],
  extra:{ heading:"Fragen zum Rückblick", type:"list", items:[
    "Wie sind die Heroes aus der Sache hervorgegangen? Wurden sie verletzt? Haben sie ihre Meinung über Kreaturen geändert? Sind einige für immer in der Domäne der Kreatur geblieben?",
    "Wie steht es um das Dorf einen Tag nach dem Vorfall? Muss man nur eine ausgeartete Party aufräumen, oder gibt es schwerere, traurigere Verluste?",
    "Was ist mit den verzauberten Dörflern – wer hat überlebt, und wer wird nie zurückkehren? Wessen Stolz wurde verletzt?",
    "Wo ist der Heap-Thing jetzt? Bleibt er unter dem Hügel, oder ist sein Geist geflohen? Wurde er zerstört oder von seinen Lasten befreit?",
    "Wurde der alte Brauch beibehalten, oder hat sich der neue durchgesetzt? Wird es je wieder ein Frühlingserneuerungsfest geben? Wem geben alle die Schuld für das Debakel?",
  ]},
  rewards:[],
  revelations:[],
  tips:[],
},

];

ADVENTURES.push({ id:"sg", num:"★", title:"Skunk Glen", en:"The Heap-Thing of Skunk Glen", status:"ready", tutorial:true,
  accent:"var(--moss-bright)",
  teaser:"Ein eigenständiges Tutorial-Abenteuer aus dem Core Book für die erste Runde Legend in the Mist – unabhängig von der Kampagne.",
  scenes: SG_SCENES });
})();
