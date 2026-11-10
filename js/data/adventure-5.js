/* ---------- Adventure 5 : full scene data ---------- */

const A5_SCENES = [
/* 0 ---------------------------------------------------------- INTRO */
{
  key:"intro", kind:"intro", page:"S. 375–376",
  title:"Überblick", en:"The Painted Beast",
  summary:"Hintergrund, Hooks & Szenenfolge",
  overview:[],
  readAloud:[
    { page:"S. 375", label:"Eröffnung des Abenteuers: Die Craggen Highlands", text:
      `Die westlichen Dales fallen ab in ein dicht bewaldetes Tal: Cedargate, das Land im Schatten der wilden Craggen Highlands. Jahr für Jahr halten die Woodwards von ihren Türmen und Mauern aus Wache, geschworen, Angreifer aus den Highlands zurückzuschlagen – seien es rücksichtslose Räuber oder wütende Bestien.

Dieses Jahr ist es schwer gewesen. Die Überfälle kamen häufiger, in größeren Trupps. Selbst willensstarke Woodwards zweifeln inzwischen daran, ob Cedargate diesem Sturm standhalten kann. Für manche fühlt es sich an, als müsse Cedargate fallen.

Während bereitwillige Dalesleute nach Cedargate reisen, um zu den Waffen zu greifen, naht eine neue Bedrohung: eine erschreckende Bestie, wie man sie in den Dales noch nie gesehen hat. Das Erscheinen dieses Ungeheuers ist erst der Anfang einer verzweifelten Reise in die Highlands – eine Reise, die sowohl neue Freunde als auch neue Feinde offenbaren könnte.` },
  ],
  flow:[
    `<span class="section-heading">Hintergrund</span> Die <span class="gloss" onclick="openGloss('craggen-highlands')">Craggen Highlands</span> sind seit jeher angespannte Nachbarn der Dales.`,
    `Die sturmgepeitschten Hänge, öden Hochebenen und von monströsem, gefährlichem Leben wimmelnden Schluchten schüchtern alle bis auf die wagemutigsten Dalesleute ein und härten die Menschen der Highlands zu beeindruckenden Überlebenskünstlern — bereit, sich bei Bedarf von den Dales zu nehmen, was sie brauchen.`,
    `<span class="gloss" onclick="openGloss('cedargate')">Cedargate</span> (S. 82), ein Dale aus Tälern und dichtem Wald, liegt unmittelbar unterhalb der Highlands. Die <span class="gloss" onclick="openGloss('cedargate')">Woodwards</span> von Cedargate (S. 69) halten Ausschau nach Räubern, die zum Plündern herabsteigen, sowie nach wilden Bestien, die in die Dales abirren könnten. Wie so vieles in den Dales ist dieses Jahr besonders schwierig gewesen, und die Woodwards haben Boten zu nahegelegenen Dörfern geschickt, um fähige Hände um Hilfe zu bitten.`,
    `<span class="section-heading">Die Menschen der Highlands</span>Die <span class="gloss" onclick="openGloss('craggen-highlanders')">Craggen Highlander</span> stammen von jenen ab, die aus den nördlichen Ödlanden — und vielleicht über das westliche Meer — in die Highlands kamen. In den Generationen seither haben sich zahlreiche Klans gebildet und über die Highlands verteilt. Diese Stämme teilen gewisse gemeinsame Traditionen und Bündnisse, können sich aber ansonsten in ihrem Wesen stark unterscheiden. Die meisten sind nomadische Jäger und Räuber, manche machen sogar Jagd auf Dalesleute, die den Highlands zu nahekommen.`,
    `<strong>Das Missgeschick der Räuber:</strong> Räubertrupps, die über die Jahre in die Dales hinabstiegen, traf oft Unglück, noch bevor sie die Highlands verließen. Craggen-Anführer versuchten es mit anderen Routen, größeren Zahlen und neuen Taktiken — mit wenig Erfolg. Bis die Räuber die Dales erreichten, war ihre Kraft aufgezehrt und ihre Zahl stark dezimiert. In den letzten Jahren jedoch, da die Macht der Oldways zu schwinden scheint, gelangen Räuber in weit größerer Stärke in die Dales.`,
    `<strong>Die Abrichtung der <span class="gloss" onclick="openGloss('painted-beast')">Painted Beast</span>:</strong> In der Hoffnung, die Verteidigung der Dales endlich zu überwinden, begann eine Verschwörung von Craggen-Gestaltwandlern, sogenannte <strong>Turnskins</strong>, aggressive Kreaturen näher an die Grenzen der Dales zu treiben. Ihre Methoden sind eine Mischung aus gewöhnlicher Tierabrichtung und Volksmagie. Ein ehrgeiziger Turnskin namens <strong>Maol</strong> nahm sich vor, die Painted Beast zu zähmen — eine Kreatur der Craggen-Legenden — und sie auf die hölzernen Mauern von Cedargate zu hetzen.`,
    `<span class="section-heading">Synopsis</span>In „Cedargate vorbereiten“ erreichen die Helden <span class="gloss" onclick="openGloss('abnoba-keep-ref')">Abnoba Keep</span>, um den Woodwards bei der Vorbereitung auf einen bevorstehenden Angriff aus den Craggen zu helfen.`,
    `Die „Verteidigung von Cedargate“ beginnt, als die Painted Beast, ein Monster aus den Highlands, die Verteidiger von Abnoba Keep angreift. Im Kampf wird eine einzelne Craggen-Highlanderin, Kerrid, verletzt, als sie versucht, die Bestie zu erlegen. Sie bittet um Hilfe bei der Heimreise. Kerrid versichert den Helden, dass dies den Dales und Kerrids Volk helfen könnte, Verbündete zu werden.`,
    `Die Gefährtenschaft reist „Durch die Highlands“ und begegnet den vielfältigen Härten und Gefahren der Region — schwieriges Gelände, furchtbares Wetter und feindselige Räuber. Unterwegs können sie mit Fremden „Lagerfeuergeschichten“ austauschen und mehr über deren Welt erfahren.`,
    `Die Reise fordert ihren Tribut von Kerrid, und sie erlebt „Eine Wendung zum Schlechteren“, die von den Helden verlangt, ihre Verletzungen weiter zu versorgen.`,
    `Erreichen sie „Kawa, Kerrids Heimat“, treffen die Helden Kerrids Sippe und versuchen, sich mit ihr anzufreunden. Die Anführer des Klans teilen ihr Wissen über die Painted Beast sowie über den Zauber, der die Dales beschützt.`,
    `Um das Bündnis zwischen den Kawa und den Dales zu besiegeln, helfen die Helden dabei, „Maols Höhle“ aufzuspüren und ihn samt seiner Painted Beast zu besiegen.`,
  ],
  npcs:[],
  extra:{ heading:"Hooks", type:"list", items:[
    "Reisende, die von den Red Marshals angeworben wurden, um Cedargates Verteidigung zu verstärken.",
    "Suchende, die durch Vorzeichen des schwindenden Oldways nach Cedargate geführt wurden.",
    "Gefolgsleute eines NSC, der nach Cedargate gerufen wurde.",
    "Freunde/Verwandte eines Bewohners von Cedargate.",
    "Der Brief der Waldflüsterin Yule (aus „An Important Letter“) — hat die Gruppe „Ein wichtiger Brief“ gespielt, könnte einer der Briefe an Walric von Yule stammen, der Waldflüsterin von Abnoba Keep, die dringend Hilfe braucht.",
  ]},
  extra2:{ heading:"Szenenfolge dieses Abenteuers", type:"list", items:[
    "1 · Cedargate vorbereiten — Ankunft bei Abnoba Keep, die Verteidigung stärken",
    "2 · Verteidigung von Cedargate — Kampf gegen die Painted Beast, Kerrid",
    "3 · Durch die Highlands — Mehrwege-Reise, Kerrids Wunde verschlimmert sich",
    "4 · Lagerfeuergeschichten — optionale Wildnis-Sozialszene",
    "5 · Eine Wendung zum Schlechteren — Kerrids Kampf auf Leben und Tod",
    "6 · Kawa, Kerrids Heimat — die drei Anführer, Vertrauen gewinnen",
    "7 · Die Spur der Bestie / Maols Höhle — letzte Konfrontation mit Maol",
    "8 · Nachspiel",
  ]},
  challenges:[],
  revelations:[],
  tips:[
    "Dies ist das erste Abenteuer, das die Helden aus den Dales hinausführt — spielt den Kulturschock ruhig aus: fremde Bräuche, raueres Klima, eine Highlander-Gefährtin, deren Ehrgeiz die Gruppe in Gefahr bringen kann. Kerrid ist keine reine Questgeberin, sondern eine eigenständige, sture Figur.",
  ],
},

/* 1 --------------------------------------------------- PREPARING CEDARGATE */
{
  key:"cedargate", kind:"scene", page:"S. 377",
  title:"Cedargate vorbereiten", en:"Preparing Cedargate",
  summary:"Ankunft bei Abnoba Keep · Zustand der Burg · Vorbereitungshandlungen",
  overview:["Ankunft bei Abnoba Keep, dem Herzstück der Woodwards, geschwächt nach mehreren Überfällen", "Mauern und Verteidiger tragen erste Schäden — mindestens ein Ungeheuer naht", "Jeder Held kann eine Handlung nutzen, um die Burg auf die Schlacht vorzubereiten", "Fleece Oakenfoot und Yule bieten auf Nachfrage Anleitung und Hilfe an", "Bei Bedarf: Vignetten aus der „Common Weal“-Journey für zusätzliche Spannung"],
  readAloud:[
    { page:"S. 377", label:"Auf dem Weg nach Cedargate", text:
      `Der Broken-Tooth-Pfad zu begehen ist eine Übung in kunstvollem Stolpern und dem Losschütteln von Steinchen aus den Schuhen. Die Bewohner von Cedargate wandern diesen Pfad täglich, gemeinsam mit dem plätschernden Milken Rush, und mehrere von ihnen schließen sich euch auf eurem Weg an, Äxte und Holzschilde tragend. Hier wird der Fluss seicht; eine Palisade aus Baumstämmen und Steinen, an manchen Stellen eingestürzt, säumt den oberen Rand des vom Flussufer aufsteigenden Hangs. Ein hölzerner Wachturm steht am höchsten Punkt mit Blick auf die Flussbiegung, seine unteren Balken angespannt und gesplittert. Weitere Gebäude, allesamt neu errichtet, stehen in der Nähe – eine wachsende Wehrsiedlung, die rasche Antwort der Gaters auf eine sich schnell verschärfende Bedrohung. Dies ist euer Ziel: Abnoba Keep, das die nahegelegene Abnoba-Furt bewacht. Die Furt selbst liegt nicht weit hinter dem großen Zedern-Tor, eine breite, flache Stelle, an der man den Fluss zu Fuß, zu Pferd oder mit dem Wagen überqueren kann. Die Woodwards brauchen eure Hilfe, und ihr seid hier, um zu helfen.` },
  ],
  flow:[
    `In dieser Szene treffen die Helden bei <span class="gloss" onclick="openGloss('abnoba-keep-ref')">Abnoba Keep</span> ein, dem Herzstück der Woodwards. Die Woodwards haben in den letzten Wochen mehrere Überfälle überstanden. Manche sind verletzt oder schlecht ausgerüstet, Wachturm und Mauer sind beide beschädigt, und die Moral sinkt. Kundschafter haben gesehen, wie eine Art Ungeheuer von den Highlands herab in Richtung Cedargate zieht, getrieben von einem Craggen-Räuber. Kommt es jetzt zu einem Angriff, könnte die Verteidigung vollständig zusammenbrechen.`,
    `<span class="section-heading">Der Zustand von Abnoba Keep</span> Schon auf den ersten Blick erkennen die Helden, dass die jüngsten Überfälle der Highlander-Räuber die Mauern splintered-2 und die Verteidiger unnerved-2 zurückgelassen haben. Woodward-Kundschafter haben inzwischen gemeldet, dass mindestens ein Highlander und eine Art Ungeheuer geradewegs auf Cedargate zuhalten.`,
    `Jeder Held darf eine Handlung nutzen, um Abnoba Keep auf die kommende Schlacht vorzubereiten — sei es, indem er bestehende Status-Werte senkt, oder indem er neue Tags wie <strong>well-supplied</strong> (gut versorgt) einführt. Handlungen, die die Burg und ihre Bewohner betreffen, sind Handlungen auf Abenteuer-Stufe.`,
    `<span class="section-heading"><span class="gloss" onclick="openGloss('fleece-oakenfoot-ref')">Fleece Oakenfoot</span> & Yule</span> <strong>Fleece Oakenfoot</strong>, Anführerin der Woodwards, ist mit der Vorbereitung ihrer Truppen beschäftigt, nimmt sich aber auf Nachfrage einen Moment Zeit, um die Helden anzuleiten. <strong>Yule</strong>, die einzige Waldflüsterin der Burg, könnte die Hilfe eines handwerklich begabten Helden oder eines Oldways-Kundigen gebrauchen, um Palisade, Schilde, Speere und Pfeile mit Ritualen zu verstärken.`,
    `Sind sich die Helden nicht sicher, wie sie helfen können (oder möchtet ihr zusätzliche Spannung erzeugen), nutzt Vignetten aus der „Common Weal“-Journey (S. 254; 📎 vollständig in der Challenge-Bibliothek).`,
    `<strong>Erzähler-Notiz — Die Sicht der Woodwards auf die Highlander:</strong> <span class="gloss" onclick="openGloss('craggen-highlanders')">Die Craggen Highlander</span> sind nicht die einzige Bedrohung, gegen die die Woodwards Wache halten, aber sie gehören zu den hartnäckigsten. Manche Woodwards, die sich an allzu viele Überfälle oder gefallene Freunde erinnern, sprechen bereitwillig schlecht über die Aggressivität und Grausamkeit der Highlander. Andere haben eine differenziertere Sicht und erkennen an, dass es — wie bei den Dalesleuten — gute und schlechte Einzelne gibt.`,
  ],
  npcs:[
    { name:"Fleece Oakenfoot", role:"Anführerin der Woodwards", text:"Mit der Vorbereitung ihrer Truppen beschäftigt, nimmt sich aber auf Nachfrage einen Moment Zeit, um die Helden anzuleiten. Später bietet sie an, Kerrid aus eigener Tasche für ihre Hilfe zu bezahlen." },
    { name:"Yule", role:"Waldflüsterin von Abnoba Keep", text:"Die einzige Waldflüsterin der Burg — könnte die Hilfe eines handwerklich begabten Helden oder eines Oldways-Kundigen gebrauchen, um Palisade, Schilde, Speere und Pfeile mit Ritualen zu verstärken. Falls „Ein wichtiger Brief“ gespielt wurde: Sie war Absenderin eines der Briefe an Walric." },
  ],
  challenges:[],
  revelations:[],
  rewards:[],
  tips:[
    "Diese Szene ist bewusst eine kurze Vorbereitungsphase ohne eigene Challenge-Karte — der Kampf folgt erst in der nächsten Szene. Nutzt sie, um Stimmung, NPCs und den Zustand der Burg zu etablieren, bevor die Painted Beast erscheint.",
  ],
},

/* 2 ----------------------------------------------------- DEFENSE OF CEDARGATE */
{
  key:"defense", kind:"scene", page:"S. 378–380",
  title:"Verteidigung von Cedargate", en:"Defense of Cedargate",
  summary:"Die Painted Beast greift an · Kerrid · Kennenlernen im Heilerzelt",
  overview:["Die Painted Beast stürmt auf Abnoba Keep zu, angetrieben von der Highlanderin Kerrid", "Erreichen Mauern oder Verteidiger ihren Grenzwert, bricht die Bestie durch oder wütet ungehindert", "Nach der Schlacht bricht die schwer verletzte Kerrid zusammen", "Rabb bringt sie in sein Zelt — Kerrid erzählt von ihrem Volk und ihrem Auftrag gegen Maol", "Kerrid wird als Story-Thema für die Reise durch die Highlands gewonnen"],
  readAloud:[
    { page:"S. 378", label:"Angriff auf Cedargate", text:
      `Der Stoß eines Horns lässt das rasende Herz Cedargates schlagen wie eine Trommel; die Schlacht ist da! Die Woodwards, die noch nicht auf den Mauern stehen, eilen an ihre Posten, mit Speer oder Bogen bewaffnet. Selbst erschöpft, selbst furchtsam, bewegen sie sich mit geübter Entschlossenheit.

Durch die Palisade hindurch, über die Furt, seht ihr eine Gestalt den Hang herabkommen. Sie glitzert im Morgenlicht und wirft Farben ab wie Funken. Aus der Ferne betrachtet, sieht sie fast aus wie ein bunt gefärbter, herabrollender Fels – doch die Einzelheiten werden rasch deutlicher: kein Stein, sondern eine Bestie, wuchtig, zäh, ganz aus Muskeln so dick wie Felsblöcke. Gewaltige Hauer ragen ihr voraus. Sie sieht aus wie eine Art Wildschwein, gewachsen zur Größe eines Häuschens, und beinahe unbehaart. Mehrere Farbstreifen zieren ihre borstige Schnauze. Noch bevor sie durch die Furt platscht, glänzt bereits ihre feuchte Haut.

Eine einsame Highländerin, rau von langen Tagen auf dem Pfad, läuft hinter der Bestie her. Sie muss diejenige sein, die die Kundschafter für die Treiberin des Untiers hielten … doch während ihr zuseht, stürzt sie sich verzweifelt vor, versucht, die Bestie mit ihrem Speer zu treffen. Mit einem heftigen Ruck ihres baumstammdicken Beins schleudert die Bestie sie zurück. Dann senkt sie den Kopf und rennt auf die Mauer zu.` },
    { page:"S. 379", label:"Beschreibung: Die Painted Beast", zusatzfund:true, after:2, text:
      `So groß wie ein kleines Haus, mit glatter, zäher Haut, einer langen, schweinsartigen Schnauze und mächtigen Hauern – die Painted Beast ist eine Kreatur der Craggen-Legenden. Zu Hause sowohl an Land als auch im Wasser, wurde ihre Haut von ihren Herren mit bunten, verwirrenden Mustern bemalt.` },
  ],
  flow:[
    `Die <strong><span class="gloss" onclick="openGloss('painted-beast')">Painted Beast</span></strong> — ein riesiges, unbehaartes, gehauertes, bunt pigmentiertes Eberwesen — stürmt auf <span class="gloss" onclick="openGloss('abnoba-keep-ref')">Abnoba Keep</span> zu, getrieben von einer einzelnen Highlander-Seekerin (<strong>Kerrid</strong>), die versucht, sie eigenhändig zu stoppen; sie wird zur Seite geschleudert. In dieser Szene beteiligen sich die Helden an der Verteidigung Cedargates gegen die Painted Beast. Die Bestie ist darauf aus, während ihres Wütens so viel Zerstörung wie möglich anzurichten. Angesichts ihrer Größe und Kraft könnte sie die Mauern durchbrechen und über die dahinterliegenden Gebäude hinwegwalzen, was Zerstörung und Verluste an Leben nach sich zöge.`,
    `Die Painted Beast durchbricht die Mauern Cedargates, sobald diese ihren Grenzwert <strong>splinter-5</strong> (gesplittert-5) erreichen; die Verteidiger selbst haben einen Grenzwert von <strong>unnerve-4</strong> (verunsichert-4). Sind beide Grenzwerte überwunden, ist die Painted Beast frei, ungehindert zu wüten. Nach ein paar Heldenhandlungen erholt sich die Craggen-Seekerin Kerrid genug, um im Kampf gegen die Painted Beast zu helfen.`,
    `<span class="section-heading">Nach der Schlacht</span> Wurde die Painted Beast erschlagen oder zurückgeschlagen, bricht die einsame Highländer-Seekerin zusammen und sinkt zu Boden, schlammbraun und blutrot. <strong><span class="gloss" onclick="openGloss('rabb-ref')">Rabb</span></strong>, der fern-verwandte Heiler der Woodwards, ruft, man solle sie in sein Zelt bringen. Die Highländerin lebt noch, aber kaum — Rabb vermutet schwere innere Verletzungen; sie könnte sterben. Sie zu versorgen dauert etwa eine Stunde — lang genug für die Helden, um im Nachgang der Schlacht Handlungen auszuführen, etwa die eigenen Wunden zu versorgen. Dann lässt Rabb sie holen; die Seekerin ist erwacht.`,
    `In Rabbs Zelt stellt der Heiler den Helden diese unerwartete Verbündete vor. Ihr Name ist <strong>Kerrid</strong>, eine „Seekerin“ (Kundschafterin) des Kawa-Klans. Mit ihrem starken Highland-Akzent erzählt sie den Helden, was sie bereits Rabb erzählt hat: Verzweifelt entschlossen, sich ein für alle Mal vor ihrem Klan zu beweisen, verfolgte sie die Painted Beast tagelang, um sie zu erlegen und als Heldin zu ihrem Klan zurückzukehren. Die Kreatur ist jedoch nur die Marionette eines gemeinsamen Feindes: eines abtrünnigen Turnskin, eines im Chaos schwelgenden Frevlers namens <strong>Maol</strong>. Sie muss diese Nachricht zu ihrem Klan zurückbringen, doch der Weg durch die Highlands ist schwierig, und Rabb ist sich sicher, dass sie die Reise nicht allein bewältigen kann. Kerrid bittet die Helden inständig, ihr zu helfen, nach Hause zurückzukehren.`,
    `<span class="section-heading">Zögerliche Helden</span>Die Helden mögen verständlicherweise zögern, mit Kerrid in die Craggen Highlands aufzubrechen, ganz gleich, welchen Heldenmut sie gezeigt hat. <span class="gloss" onclick="openGloss('craggen-highlands')">Die Craggen Highlands</span> gelten als wild und gefährlich, die Highlander selbst sind den Dales gegenüber mitunter feindselig gesinnt, und Helden auf Origin-Stufe waren wahrscheinlich noch nie so weit von zu Hause fort. Falls nötig, können Kerrid, Rabb oder ein anderer NSC zusätzliche Anreize bieten:
<ul>
<li><strong>Cedargates Fall verhindern:</strong> Abnoba Keep kann keinen weiteren Angriff überstehen, und fällt die Burg, liegen Cedargate und die Dales offen da. Wird Maol nicht gestoppt — und ganz besonders, wenn die Painted Beast nicht erschlagen wurde —, wird genau das mit Sicherheit geschehen.</li>
<li><strong>Freundschaft der Kawa:</strong> Kerrid versichert den Helden, dass ihr Klan den Dales nichts Böses will, und dass es als große Geste der Freundschaft gälte, ihr bei der Heimkehr zu helfen — das könnte den Dales in den kommenden schwierigen Zeiten einen wertvollen Verbündeten verschaffen.</li>
<li><strong>Wissen jenseits der Dales:</strong> Rabb, der nun seit einigen Jahren in den Dales lebt, weiß, dass von allen Seiten Unheil aufzieht. Die Highlander könnten etwas über manche der Bedrohungen wissen, die sich nun an den Rändern der Dales zusammenbrauen.</li>
<li><strong>Bezahlung durch den Marshal:</strong> <span class="gloss" onclick="openGloss('fleece-oakenfoot-ref')">Fleece Oakenfoot</span> hat bemerkt, dass sich viele in Cedargate unwohl fühlen, solange Kerrid hier ist, und wäre bereit, die Helden aus ihrer eigenen Kasse für ihre Hilfe zu bezahlen.</li>
</ul>`,
    `<span class="section-heading">Kerrid als Story-Theme</span> Während der Reise gewinnt die Gefährtenschaft Kerrid als Story-Thema, um die Highlands zu durchqueren. Ihre Erfahrung mit dem, oft alleinigen, Reisen durch die Craggen Highlands kann während der Reise sehr hilfreich sein, wobei die Gefährtenschaft jedoch auch auf ihre Gesundheit achten muss.`,
    `<span class="callout"><span class="co-title">Nur ein Held anwesend</span>Ist nur ein Held anwesend, bietet Rabb an, ebenfalls mitzukommen. Nutzt dann auch sein Story-Theme.</span>`,
  ],
  npcs:[
    { name:"Kerrid, die Seekerin", img:"kerrid", role:"Verwundete Highlander-Kundschafterin (Kawa-Klan)", after:5, text:"Schlank, athletisch, wenig mehr als zwanzig Jahre alt, aber schon vom Leben in den Highlands gezeichnet. Eine geschickte Jägerin und Kämpferin, doch ihr tollkühner Ehrgeiz hat ihre Fähigkeiten oft untergraben. Trotz ihrer Verletzungen drängt es sie, wieder auf die Beine zu kommen — jugendliche Ungeduld und Highlander-Zähigkeit mischen sich zu einem dauerhaften Stirnrunzeln und einem schroffen Wesen." },
    { name:"Rabb", role:"Fern-verwandter Heiler der Woodwards", after:3, text:"Ruft nach dem Kampf, man solle die zusammengebrochene Highländerin in sein Zelt bringen, und schickt einige Woodwards dafür, falls die Helden es nicht selbst tun. Vermutet schwere innere Verletzungen bei Kerrid — sie könnte sterben." },
  ],
  challenges:[
    { name:"THE PAINTED BEAST", img:"paintedBeast", difficulty:3, type:"Aggressor",
      subtitle:"Die Bemalte Bestie", after:2,
      desc:`So groß wie ein kleines Haus, mit glatter, zäher Haut, einer langen schweinsartigen Schnauze und sturdy tusks (kräftigen Stoßzähnen) – die Bemalte Bestie ist ein Wesen der Craggen-Legende. Zu Hause an Land und im Wasser, wurde ihre Haut von ihren Herren mit farbenfrohen, verwirrenden Mustern gezeichnet.<br><br>Kann die Bestie beruhigt oder verwirrt werden (rampaging/tobend ist ein polarer Status), wird sie schließlich bewildered-4 darüber, wo sie ist, was sie tut und warum. Sie überquert die Furt zurück in Richtung Highlands und ihrer Heimat.`,
      limits:[
        { label:"BEWILDER (Verwirren)", max:4 },
        { label:"HARM", max:5 },
      ],
      tags:["dazzled by flame (von Flammen geblendet)","sturdy tusks (kräftige Stoßzähne)","trampling hooves (trampelnde Hufe)","rampaging-3","Great size and strength (Große Größe und Stärke)","Incredibly thick hide (Unglaublich dicke Haut) — Vulnerability: Unterbauch"],
      secrets:[
        { title:"Verzierungen", text:`Der Duft der Pigmente in ihrem chaotischen Schmuck treibt die Bemalte Bestie in Raserei; werden sie smeared-3, endet ihr Amoklauf und sie zieht ab.` },
        { title:"Magie", text:`Die Pigmente auf ihrer Schnauze sind ein Gebräu Craggen-Volksmagie, das Blut enthält.` },
        { title:"Wahre Natur", text:`Diese Kreatur ist ein Fallen Leaf (Gefallenes Blatt). Sie kann nicht banished (verbannt) werden. Einst war sie der Star of Water Buffalos (Stern der Wasserbüffel).` },
      ],
      threats:[
        { name:"CHARGE (Ansturm)", flavor:`Kracht gegen die Mauern, die unter der Spannung ächzen`, options:[
          `Lässt die Mauern erzittern (splintered-1 und Verteidiger erhalten unnerved-1/verstört-1)`,
          `Durchbricht eine geschwächte Palisade (splintered-2)`,
        ]},
        { name:"BELLOW (Brüllen)", flavor:`Stößt einen herausfordernden Ruf aus`, options:[
          `Erschreckt alle Hörenden (entfernt 2 Stufen oder streiche einen Tag emotionaler Stärke, oder gibt unnerved-2/verstört-2)`,
        ]},
        { name:"RAMPAGE (Toben)", flavor:`Wütet über Heim und Herd`, options:[
          `Trampelt Angreifer mit schweren Hufen oder verletzt sie mit den Stoßzähnen (wounded-3)`,
          `Lässt ein Haus oder einen Wachturm einstürzen (Ill Tidings/Schlechte Nachrichten)`,
          `Zertrümmert ein Zelt, einen Karren, Zaun oder Schuppen, während ihre Kraft langsam schwindet (Ill Tidings/Schlechte Nachrichten, erhält bewildered-1)`,
        ]},
      ],
      source:"Twilight Deck – Creatures of Twilight. Kampagnen-Auftakt-Challenge, identisch mit dem Eintrag in der Challenge-Bibliothek.",
    },
  ],
  vignettes:[],
  extra:{ heading:"Erzähler-Notiz — Zutaten von der Painted Beast", type:"list", items:[
    "Gefärbtes Horn, bunt und bemerkenswert stabil",
    "Wasserabweisende Haut, zudem unglaublich zäh",
    "Eine beträchtliche Menge wildbretartiges, aber gehaltvolles Fleisch",
    "Für jene, die wissen, wonach sie suchen und wie man es erntet: Die Leber der Kreatur birgt eine magische, feuerlöschende Galle, aus der sich ein Balsam herstellen lässt, der die Haut feuerfest macht, Verbrennungen heilt oder Werkzeuge erschafft, die Feuer weder erhitzen noch schmelzen kann.",
  ]},
  extra2:{ heading:"Begleiter:innen", type:"companions", items:[
    { name:"Seekerin Kerrid", img:"kerrid", role:"Kenntnis der Pfade · geschätztes Jagdmesser · übermäßig ehrgeizig · Story-Theme", text:"Willigt die Gefährtenschaft ein, sie nach Kawa zu begleiten, gewinnen sie Kerrid als Story-Theme für die gesamte Reise durch die Highlands (Szenen „Durch die Highlands“ bis „Kawa, Kerrids Heimat“)." },
    { name:"Rabb (nur bei einem Helden)", role:"Von der Wildnis gezeichnet · Heiler · nicht mehr in Bestform · Story-Theme", text:"Ist nur ein Held anwesend, bietet Rabb an, ebenfalls mitzukommen — nutzt dann auch sein Story-Theme für die Reise durch die Highlands." },
  ]},
  revelations:[],
  rewards:[
    "Wird die Painted Beast im Kampf erschlagen, können die Helden die oben genannten seltenen Zutaten von ihr gewinnen (siehe Erzähler-Notiz).",
  ],
  tips:[
    "Kerrid greift erst nach ein paar Heldenhandlungen aktiv mit ein — lass die Helden die ersten ein bis zwei Runden allein bestehen, bevor sie als Verstärkung dazustößt.",
    "Kerrid ist keine reine Questgeberin, sondern eine eigenständige, sture Figur — ihr Ehrgeiz und ihre Ungeduld sollten während der ganzen Reise durchscheinen, nicht nur hier.",
  ],
},

/* 3 --------------------------------------------------- THROUGH THE HIGHLANDS */
{
  key:"highlands", kind:"scene", page:"S. 381\u2013382",
  title:"Durch die Highlands", en:"Through the Highlands",
  summary:"Mehrwege-Reise \u00fcber vier Routen \u00b7 zwei Havens \u00b7 Kerrids Zustand verschlechtert sich",
  overview:["Reise mit Kerrid in ihrer Obhut als Abfolge von Journeys durch die Craggen Highlands", "Ein harter Weg: steilere Hügel, aggressivere Tiere, raueres Wetter als in den Dales", "Vier wählbare Routen ab der ersten Kreuzung, jede mit eigener Zusatz-Journey", "Zwei Havens („Die Burg“, „Die Drei Stehenden“) als optionale Kreuzungs-Szenen", "Kerrids worsening-1 pro Konsequenz — bei worsen-4: „Eine Wendung zum Schlechteren“"],
  readAloud:[
    { page:"S. 381", label:"\u00dcber den Milken Rush", text:
      `F\u00fcr viele Dalesleute mag eine Reise in die Craggen Highlands ebenso gut ein Spaziergang in den Wandteppich sein, der in der Dorfhalle h\u00e4ngt. Warnende Geschichten leben in den Highlands \u2013 Erz\u00e4hlungen von Ungeheuern und Gefahren, wie Eltern sie erz\u00e4hlen, um ihre Kinder nicht zu weit vom sicheren Abendessen fortstreifen zu lassen. Und doch setzt ihr nun eure ersten Schritte \u00fcber die Furt des Milken Rush, hinaus aus den Dales, hinein in die Welt jener Geschichten.

Ihr blickt den ansteigenden Hang der Berge vor euch entlang. Kerrid, \u00fcber ihre eigene eingeschr\u00e4nkte Beweglichkeit brummelnd, weist den Weg zu einem leichten Aufstieg, versichert euch jedoch, dass die Reise nur schwerer werden wird \u2013 ihr solltet euch also nicht daran gew\u00f6hnen.` },
  ],
  flow:[
    `In dieser Szene reist die Gefährtenschaft mit Kerrid in ihrer Obhut in die Craggen Highlands. Über mehrere Tage hinweg müssen sie sich schwierigem Gelände stellen, das erschöpfen oder Missgeschicke verursachen kann, sowie gefährlichen Kreaturen, die unvorsichtige Reisende belästigen und angreifen. Kerrids Verletzungen machen sie besonders anfällig für die Strapazen des Weges.`,
    `Diese Szene verläuft als Abfolge von Journeys, die die Helden quer durch die Craggen Highlands zu Kerrids Heimat, Kawa, führen. Kerrid kennt mehrere Pfade zwischen Cedargate und Kawa sowie bestimmte Kreuzungen entlang dieser Pfade, wie auf der Karte (S. 382) dargestellt.`,
    `<strong>Ein harter Weg:</strong> Das Reisen durch die Craggen Highlands ist im Vergleich zu den Dales schwierig und gefährlich. Die Hügel sind steiler, die Klippen schärfer, die Tiere aggressiver und das Wetter rauer. Kerrids Pfade sind zwar an manchen Stellen recht ausgetreten, doch meist handelt es sich um Wildwechsel und Fußpfade, die kaum Erleichterung in der fordernden Landschaft der Highlands bieten.`,
    `<span class="section-heading">Routen</span> Die Reise zur ersten Kreuzung besteht aus 2–3 Vignetten der „Across the Highlands“-Journey (S. 306, siehe unten, Gruppe „Basis“). Wenn die Helden diese erste Wegkreuzung von <span class="gloss" onclick="openGloss('abnoba-keep-ref')">Abnoba Keep</span> aus erreichen, führt der Pfad auf einen Grat hoch in den Highlands, von dem aus sie zurückblicken und die Dales vor sich ausgebreitet sehen können. Dieser Anblick — eine <span class="gloss" onclick="openGloss('poignant-moments')">Inspiring Vista</span> (CBII 204) — erinnert sie an alles, wofür sie kämpfen.`,
    `<span class="section-heading">Die vier Routen</span> Ab der ersten Kreuzung können die Helden zwischen verschiedenen Routen wählen. Jede führt durch einen anderen Teil der Craggen Highlands, mit eigenen Risiken und Belohnungen, und nutzt weiterhin Vignetten aus „Across the Highlands“ sowie einer thematischen Zusatz-Journey (alle vollständig unten als Karten):
<ul>
<li><strong>Graue Route</strong> — Der Aufstieg in die Berge ist bitterkalt, bietet aber häufig Unterschlupf vor den Elementen. Zusatz-Journey: <strong>Mountain Pass</strong> (Gebirgspass, CBII 148).</li>
<li><strong>Orange Route</strong> — Beim Durchqueren des struppigen Hochlands sind die Helden im Freien exponiert, sowohl dem Wetter als auch feindseligen Reisenden gegenüber.</li>
<li><strong>Grüne Route</strong> — Beim Abstieg in ein tiefes Flusstal finden die Helden dichten Bewuchs und schlammige Pfade entlang des fließenden Wassers. Zusatz-Journey: <strong>Morose Mire</strong> (Trübseliges Moor, CBII 150).</li>
<li><strong>Blaue Route</strong> — Das Bootfahren auf dem Fluss bietet reichlich frisches Wasser, doch die starke Strömung droht, Boote oder Schwimmende abwärts mitzureißen. Zusatz-Journey: <strong>Treacherous Waters</strong> (Tückische Gewässer, CBII 154).</li>
</ul>`,
    `<span class="section-heading">Kann Kerrid die Reise überstehen?</span> Nutzt während der Journeys in dieser Szene folgende Allgemeine Konsequenz, um Kerrids sich verschlechternden Zustand zu betonen: Kerrid stolpert, flucht und krallt sich an ihre Wunde (erhält worsening-1). Erreicht sie worsen-4, erleidet sie <strong>Eine Wendung zum Schlechteren</strong> (S. 383).`,
    `<span class="section-heading">Kreuzungen</span>Immer wenn die Helden eine Kreuzung erreichen, endet eine Journey. Gebt ihnen die Gelegenheit, für die Nacht zu rasten. Die letzte Vignette vor dem Halt sollte ein <span class="gloss" onclick="openGloss('poignant-moments')">Bedeutsamer Moment</span> sein, z. B. ein tiefgründiges Gespräch mit Kerrid oder die Entdeckung eines überwucherten Schreins. Kreuzungen eignen sich hervorragend zum Lagern, doch nicht bei jedem nächtlichen Halt sollte es eine Lagerszene geben — hebt das Lagern für die Momente auf, in denen es am nötigsten ist. An einem Punkt eurer Wahl kann ein Halt in <strong>Lagerfeuergeschichten</strong> (S. 383) münden. Wenn die Helden eine Kreuzung verlassen, stehen ihnen mindestens zwei Routen zur Wahl — gebt ihnen einen Hinweis darauf, was sie auf diesem Pfad erwarten könnte.`,
    `<strong>Erzähler-Notiz — Raues Wetter:</strong> Der Himmel der Highlands ist genauso rau wie das Land. Zieht Wetter-Vignetten wie „Starkregen“ und „Donnernder Sturm“ in Betracht (CBII 201; siehe auch die zusätzlichen Wetter-Vignetten in der „Across the Highlands“-Journey unten: Blizzard, Heavy Rain, Obscuring Fog, Thunderous Storm).`,
    `<span class="section-heading">Zwischenstationen — <span class="gloss" onclick="openGloss('havens')">Havens</span></span>Zwei der Kreuzungen, <strong>Die Burg</strong> und <strong>Die Drei Stehenden</strong>, sind Havens (S. 202) — Orte der Macht, die von den Highlandern als solche anerkannt werden. Erreichen die Helden eine dieser Kreuzungen, könnt ihr dort eine Szene mit den folgenden Challenges spielen.`,
    `<span class="callout"><span class="co-title">Die Burg</span>Eine sturmzerzauste Festungsruine klammert sich an den Rand einer Klippe nahe dem Gipfel eines kahlen Berges. Frühere Reisende haben Löcher in den Mauern mit Stein, Holz oder Segeltuch geflickt. Eisige Winde rütteln an diesen alten Flickwerken; das Wetter verschlechtert sich. Kein Klan lagert derzeit hier, doch Wanderer scheinen sich stets hier aufzuhalten. Challenges: Unseasonable Hail, Sidurg The Crafty, Spriggan (siehe unten).</span>`,
    `<span class="callout"><span class="co-title">Die Drei Stehenden</span>Drei gewaltige Dolmen, zu groß für Menschenhand, ragen wie unermüdliche Wächter auf. Sie sind von Tragödien gezeichnet und von Kampfspuren übersät — längst vergangene Gewalt, die sich einst über diesen uralten Gräbern abspielte. Challenges: Megalith, Rampaging Giant (siehe unten).</span>`,
    `Wenn die letzte Journey endet, erreicht die Gefährtenschaft <strong>Kawa, Kerrids Heimat</strong>.`,
  ],
  npcs:[],
  challenges:[
    { name:"UNSEASONABLE HAIL", difficulty:2, type:"Aggressor, Sapper", subtitle:"Unzeitgemäßer Hagel", after:10,
      desc:`Unerwartet, sogar während der Trockenzeit, weht ein Graupelsturm herein und verwandelt sich plötzlich in tödlichen Hagel. Er könnte von den eisigen Winden der Upper Dales gebracht oder von einem Wesen der Dämmerung beschworen werden. Einem solchen Sturm zu entkommen erfordert Wetterkenntnis und ein schnelles Ross, sowie die Zähigkeit, einem schmerzhaften Hagelschlag standzuhalten.`,
      limits:[ { label:"HARM", max:6 }, { label:"SCARE (Erschrecken)", max:3, note:`Der Sturm zieht vorüber.` } ],
      tags:[ "fist-sized hail (faustgroßer Hagel)", "strong gales (starke Böen)" ],
      special:[ { title:"ES KANN NICHT EWIG DAUERN (IT CAN'T GO ON FOREVER)", text:`Ist eine Runde abgeschlossen (alle Helden haben gehandelt), erhält der Hagel time-passes-1 auf endure (aushalten).` } ],
      threats:[ { name:"PELT (Bewerfen)", flavor:`Der Hagel wächst stetig an Größe`, options:[ `Ein großer Hagelkorn trifft den Kopf eines ungeschützten Opfers (bleeding-2 und staggering-2)`, `Ein Dorfbewohner wird im Freien überrascht (Ill Tidings/Schlechte Nachrichten)`, `Ernten werden zerstört (Ill Tidings/Schlechte Nachrichten und short-on-supplies-2 für das Dorf)` ] }, { name:"DESTROY (Zerstören)", flavor:`Das Dach knirscht unter dem einschlagenden Eis`, options:[ `Beschädigt ein Bauwerk schwer (demolished-1 für ein Gebäude)`, `Zerschmettert Deckung oder Verstärkungen (streiche einen Tag)` ] } ],
      source:`Hearts of Ravensdale I, Themenbereich Dalish Village`
    },
    { name:"SIDURG THE CRAFTY", difficulty:3, type:"Influence, Pursuer", subtitle:"Sidurg der Gerissene", after:10,
      desc:`Dieser eigenartige, verhüllte Magier ist in Wirtshäusern über die ganze Dales verteilt anzutreffen. Er nähert sich den Leuten wie ein alter Bekannter und bietet Münzen und Vorräte für scheinbar nutzlose Trödelstücke an. Ein gerissener Händler, ist er ungewöhnlich beharrlich darauf, ein Geschäft abzuschließen. Manchmal handelt er sogar mit einer Bernsteinmünze aus dem Alten Königreich.<br><br>Leute, die seine Geschäfte ablehnen und sich von ihm verabschieden, finden ihn bald wieder auf ihrem Weg, doch nun in übler Laune. Man sagt, er reise auf dem Wind, und wen sein Auge einmal erfasst hat, entkommt ihm nie – hat Sidurg einmal ein begehrtes Trödelstück identifiziert, lässt er nicht mehr locker.`,
      limits:[ { label:"HARM", max:4 }, { label:"ESCAPE (Entkommen)", max:4 }, { label:"CONVINCE (Überzeugen)", max:4 } ],
      tags:[ "beguiling (betörend)", "fast-talker (Schnellredner)", "insightful-2", "mysterious-3", "Fetch magic (Doppelgänger-Magie)", "Potent spirit (Mächtiger Geist)" ],
      secrets:[ { title:"Stolz", text:`Wird er ausreichend provoziert, nennt sich Sidurg bei seinem vollen Titel „Imbiber of the Brazen Chalice" (Trinker des Ehernen Kelchs), was seine Zugehörigkeit verrät.` }, { title:"Überall sein", text:`Sidurg reitet nicht auf dem Wind; er ist ein Meister der Art of Fetching („Klonen"). Während er scheinbar in eine Richtung reist, schickt er einen seiner kunstvollen Fetches (Doppelgänger) einem Trödelstück hinterher, was den Eindruck erweckt, er sei überall. Der Fetch nutzt dasselbe Profil und kann nur mit Magie von ihm unterschieden werden.` }, { title:"Fetch", text:`Jeder Fetch ist ein Teil von Sidurgs Geist (Spryd), eingebettet in eine grobe Materialmasse, die mit einer Aufgabe ausgesandt wird. Er kann banished:3 (verbannt:3) werden, und auch dimmed:4 (gedämpft:4), wobei er dann zu seiner Ursprungsform zurückkehrt. Er teilt die Verwundbarkeit des Ausgangsmaterials: Feuer für einen Holz-Fetch, Wasser für einen Schlamm-Fetch, etc. Sidurg sieht, hört, und weiß alles, was sein Netzwerk von Fetches weiß.` } ],
      threats:[ { name:"TRADE (Handeln)", flavor:`Deutet auf ein Trinket, das jemand bei sich trägt, und äußert den Wunsch, es zu besitzen`, options:[ `Erschließt mehr über den Gegenstand und wie er erworben wurde (Exposure/Enthüllung)`, `Bietet einen Handel weit über dem Wert des Gegenstands an (tempted-3/versucht-3; wird angenommen, streiche den Gegenstands-Tag und abundant-supplies-2 oder hefty-purse-2/pralle-geldbörse-2)`, `Bietet eine Gwyrdolin-Bernsteinmünze an (wird angenommen, streiche den Gegenstands-Tag; wird abgelehnt, ashamed-4 oder ill-repute-4 wegen Tabubruch)`, `Gibt eine verschleierte Drohung über den Besuch eines fernen geliebten Menschen des Helden ab, den er namentlich nennt (coerced-3)` ] }, { name:"HOUND (Bedrängen)", flavor:`Erscheint an einem unwahrscheinlichen Ort in einer Zeit der Anspannung und stellt ein Ultimatum`, options:[ `Nimmt sich, wofür er kam (streiche Tag und Complication/Komplikation)`, `Deutet auf jemanden, um ihn paralyzed-3 oder sleepy-3 zu machen`, `Bewegt seinen Stab, um Angriffe oder Zauberei abzuwehren (erhält warded-from-harm-3 oder warded-from-magic-3)`, `Beschwört eine Schar kleinerer, ihm ähnelnder Fetches aus Erde, Blättern, oder Schnee (can't-tell-which-one-4)`, `Lässt seine Fetches ihm etwas bringen, block-3 einen Pfad, oder restrain-3 jemanden (oder Blocked/Blockiert)` ] } ],
      source:`Hearts of Ravensdale I, Themenbereich Dalish Village`
    },
    { name:"SPRIGGAN", difficulty:3, type:"Aggressor, Watcher", after:10,
      desc:`Klein und verhutzelt, bewacht dieses Wesen der Dämmerung überwucherte Ruinen, um einen kostbaren Schatz zu schützen, geheimes Wissen zu bewahren, oder weil ein Eid es dazu verpflichtet. Lass dich nicht von seiner Größe täuschen, denn ein Spriggan besitzt die körperliche Kraft eines Riesen und magische Fähigkeiten, um Eindringlinge zu verhexen. Dennoch schreckt das Diebe nicht davon ab, töricht in sein Reich einzudringen.`,
      limits:[ { label:"HARM", max:4 }, { label:"OUTWIT (Überlisten)", max:3 }, { label:"PARLEY (Verhandeln)", max:5 } ],
      tags:[ "knee-high (kniehoch)", "cantankerous (mürrisch)", "alert-2", "territorial-3", "home-advantage-2", "Giant's strength (Riesenkraft)", "Command of nature (Befehl über die Natur) — Vulnerability: Oldways-Gesang" ],
      secrets:[ { title:"Saft", text:`Der Saft eines Spriggans ist ein Entheogen.` }, { title:"Wahre Natur", text:`Ein Fallen Leaf, einer von vielen, die im Krieg zu Titanen wurden, um an der Seite des Winterkönigs zu kämpfen, und später zu einer winzigen Form verkalkten. Es bereut nun die Vergangenheit, obwohl es sich kaum daran erinnern kann.` } ],
      threats:[ { name:"PATROL (Patrouillieren)", flavor:`Murrt, während es eine Störung in seinem Bau untersucht`, options:[ `Entdeckt Spuren eines Eindringlings (Exposure/Enthüllung oder reduziert hidden/versteckt oder stealthy/verstohlen um 2)`, `Verschmilzt mit der Natur durch seine moosbewachsene Haut und rindenartige Oberfläche (erhält hidden-2)`, `Lässt giftige Dornranken wachsen, um einen Eingang, Ausgang, oder Schatz zu bewachen` ] }, { name:"DRIVE OUT (Vertreiben)", flavor:`Stampft auf einen Eindringling zu, brüllt in alter Sprache`, options:[ `Verspricht „Fürchterlichste Vergeltung!" (scared-2)`, `Schlägt mit erstaunlicher Kraft zu (crushed-3 und knocked-back-3)`, `Wächst größer (ersetzt kniehoch mit riesiger Größe)` ] }, { name:"CAST A SPELL (Einen Zauber wirken)", flavor:`Blickt boshaft, murmelt uralte Worte, und schnippt mit einem knorrigen Finger, während Blätter plötzlich rascheln und wirbeln`, options:[ `Belebt einen getragenen Gegenstand, sodass er zu ihm fliegt (streiche einen Gegenstands-Tag)`, `Befiehlt einer Windböe, jemanden fortzuwehen (knocked-back-3)`, `Legt einen boshaften Hexenspruch auf einen Dieb (unlucky-2/pechhabend-2, itchy-2, oder starving-2)`, `Bricht eine Verzauberung oder kontert einen Zauber (streiche einen magischen Tag)` ] } ],
      source:`Hearts of Ravensdale I, Themenbereich Ruins of Gwyrdolin`
    },
    { name:"MEGALITH", difficulty:4, type:"Countdown, Charge, Mystery",
      subtitle:"Megalith", after:11,
      desc:`Ein gewaltiger Obelisk trotzt dem Himmel, umhüllt von einer beunruhigenden Atmosphäre. Dieses Bauwerk fühlt sich fremd und vor allem gefährlich an. Legenden ranken sich um ihn, doch seine wahre Bedeutung ist im Lauf der Zeit verloren gegangen. An manchen megalithischen Stätten finden sich Spuren von Verehrung — manchmal umgeben Anbeter wie <span class="gloss" onclick="openChallengeByName('HEDGE WITCH')">Heckenhexen</span> (S. 125) oder <span class="gloss" onclick="openChallengeByName('OBSESSIVE CULTIST')">Besessene Kultisten</span> (S. 163) den Steinpfeiler.`,
      limits:[
        { label:"BIND (Binden)", max:5, note:"Wer sich bindet, steigert seine magische Macht (Might) um eine Stufe (bis maximal Greatness). Jede Handlung unter dieser Bindung gibt dem Megalithen worn-down-1 auf destroy (zerstören) — dies kann repariert werden." },
        { label:"DESTROY (Zerstören)", max:6, note:"Der Obelisk explodiert in einem Ausbruch magischer Kraft, der Pfeiler zerbirst und fügt allen in unmittelbarer Nähe magical-fire-3 oder transformed-3 zu." },
      ],
      tags:[ "glatter Stein (smooth stone)", "massiver Stein (solid stone)", "beunruhigende Aura (unsettling aura)", "cryptic-2", "Tiefe, fremde Magie — liest laut Inschriften in einer verlorenen Sprache (Deep strange magic)" ],
      threats:[
        { name:"UNNERVE (Verunsichern)", flavor:`Ein Gefühl der Beklemmung umgibt das megalithische Bauwerk`, options:[
          `Alle werden von Furcht erfüllt (frightened-3 für alle)`,
        ]},
        { name:"CURSE (Verfluchen)", flavor:`Ein Donnerschlag hallt aus dem Inneren der Steinsäule`, options:[
          `Zeichnet jemanden mit einer Narbe (erkennbare Narbe und cursed-3)`,
          `Verzerrt jemandes Gestalt (transformed-3 oder markiert Abandon auf ein Thema des eigenen Körpers)`,
          `Kehrt die Natur eines Zaubers, Gegenstands oder Effekts um (entfernt einen magischen Status oder Tag und erschafft einen mit gegenteiligem Effekt)`,
        ]},
      ],
      source:`Core Book Vol. II, Kapitel V – Challenges, S. 141. In der Quelldatei irrtümlich „Meaglith" geschrieben — korrekter Name laut Core Book ist „Megalith".`,
    },

    { name:"RAMPAGING GIANT", difficulty:5, type:"Aggressor", subtitle:"Tobender Riese", after:11,
      desc:`Durch die Landschaft stampfend, terrorisiert der Tobende Riese die Bevölkerung mit seiner Größe und zerstörerischen Kraft. Nicht der Intelligenteste, doch er zerstört die Welt aus Spaß, Unwissenheit oder primitiver Wut. Ein Weg, einen Riesen niederzuringen, ist ihn gut zu füttern, obwohl das Sättigen seines Mighty-Appetits keine Kleinigkeit ist!`,
      limits:[ { label:"HARM", max:5 }, { label:"OUTSMART (Überlisten)", max:3 }, { label:"OVERFEED (Überfüttern)", max:4, note:`Der Riese setzt sich hin, um zu verdauen oder zu dösen, und erholt etwa jede Stunde eine Stufe des feeding-Status (Fütterung).` } ],
      tags:[ "bellowing voice (brüllende Stimme)", "big and strong (groß und stark)", "destructively-rampant-3", "Cyclopean size and strength (Zyklopische Größe und Stärke) — Vulnerability: overfeed/überfüttern" ],
      threats:[ { name:"DESTROY (Zerstören)", flavor:`Geht auf Amoklauf, stürmt auf Bauten los`, options:[ `Reißt etwas Großes nieder (razed-4 und Ill Tidings/Schlechte Nachrichten, falls Unschuldige darin sind)` ] }, { name:"THROW (Werfen)", flavor:`Packt einen Karren, ein Pferd oder Ähnliches`, options:[ `Wirft es nach jemandem (wounded-4 für alle Beteiligten)` ] }, { name:"FIGHT (Kampf)", flavor:`Grapscht nach den nervigen Leuten`, options:[ `Packt jemanden (grappled-4, und falls nicht vollständig gelindert, auch intimidated-2)`, `Zerquetscht einen Gepackten (crushed-4) oder wirft ihn (wounded-4 und prone-2)`, `Findet heraus, wo sich jemand versteckt (Exposure/Enthüllung)`, `Findet heraus, was jemand tut, der sich an ihm festhält (Exposure/Enthüllung)` ] } ],
      source:`Core Book, Kapitel V – In the Wilds`
    },
  ],
  vignettes:[
    { name:"🧭 Basis (alle Routen) — Blistering Winds (Sengende Winde)", flavor:`Unerbittliche Winde heulen und wirbeln um euch, doch die Highlands bieten keinen Schutz`, options:[ `Ihr kommt gegen den Wind nicht voran (time-passes-2)`, `Wenn der Wind endlich nachlässt, seid ihr aching-2, tired-2, partially-blinded-2 oder frostbitten-2`, `Einige Bündel, Vorräte oder Wertsachen werden über den Rand einer Klippe geweht (short-on-supplies-2 oder streiche einen Tag)`, `Der Wind selbst nimmt eine vage, turbulente menschliche Form an, um euch anzugreifen (Neue Challenge: Otherworldly Assailant/Jenseitiger Angreifer, CBII 159, oder Thrad Pine-Splitter/Kiefernspalter Thrad, S. 305)` ] },
    { name:"🧭 Basis (alle Routen) — Wasted Meat (Verschwendetes Fleisch)", flavor:`Abseits des Pfades findet ihr einen mit Pfeilen durchbohrten Hirschkadaver. Wer würde solch eine Beute hier einfach liegen lassen? Sind sie in der Nähe?`, options:[ `Ihr braucht Zeit, um zu entscheiden, was zu tun ist, während das Gefühl der Gefahr lauert (uneasy-2)`, `Ihr merkt zu spät, dass der Kadaver verfault oder vergiftet ist (sick-3 für jeden, der das Fleisch isst)`, `Es ist eine Falle! Der Boden gibt unter euren Füßen nach, und ihr stürzt in eine Dornengrube (bleeding-3 und trapped-3)`, `Der Hirsch wurde hier zurückgelassen, um ein Monster anzulocken (Neue Challenge: Fabled Bird of Prey/Sagenhafter Raubvogel, CBII 139)` ] },
    { name:"🧭 Basis (alle Routen) — Craggen Haven (Craggen-Zufluchtsort)", flavor:`Zusammengedrängt unter der aufragenden Mauer einer alten Ruine liegt eine Ansammlung Dutzender Tierfell-Zelte und behelfsmäßiger Unterkünfte, ein Craggen-Zufluchtsort. Sie werden es nicht mögen, wenn ihr herumschleicht, also stellt euch besser vor`, options:[ `Ihre Kundschafter sind überall (Neue Challenge: Craggen Seeker/Craggen-Kundschafter)`, `Ihnen missfällt eure Haltung, und sie weisen euch mit leeren Händen ab (Blocked/Blockiert)`, `Um euch einzulassen, verlangen sie einen hohen Preis an Vorräten und Wertsachen (short-on-supplies-2, short-on-materials-2, oder short-on-coin-2)`, `Ihr gewinnt dieses zähe Volk richtig lieb (friendly-to-Craggen-2)`, `Am knisternden Feuer sagt ein Craggen-Druide unerwartet euer Schicksal voraus (fated-3)` ] },
    { name:"🧭 Basis (alle Routen) — Lightless Night (Lichtlose Nacht)", flavor:`Was auch immer ihr tut, ihr könnt euer Feuer oder eure Laterne nicht am Brennen halten. Es sieht aus, als würde dies eine cold-2/kalte-2 und dark-3 Nacht werden, die ihr irgendwie überstehen müsst`, options:[ `Ihr streitet darüber, wie das Feuer am Brennen zu halten ist (rising-tensions-2)`, `Raubtiere beginnen, das Lager nach Gelegenheiten umkreisend abzusuchen (deprived-of-sleep-2 oder Neue Challenge: Big Cat/Großkatze, CBII 138)`, `Ihr merkt, dass ihr in der Nähe eines alten, vermodernden Schreins gelagert habt, was die Ursache eures Unglücks sein könnte (streiche Feuermach-Werkzeug- oder Essens-Tags, short-on-supplies-2, oder Neue Challenge: Shrine/Schrein, S. 275, oder Dolmen, S. 278)` ] },
    { name:"🧭 Basis (alle Routen) — Craggen Raiding Party (Craggen-Überfalltrupp)", flavor:`Eine gewaltige Schar Highland-Krieger bewegt sich über das Buschland, ihre Vorreiter und Kundschafter wachsam und vigilant-2. Es ist vielleicht am besten, ihnen nicht über den Weg zu laufen`, options:[ `Es gibt kein Durchqueren dieses Landes, bis sie fort sind (Blocked/Blockiert)`, `Sie berauben euch all eurer Nahrung, Reiseausrüstung, Waffen und Wertsachen, bevor sie abziehen (short-on-supplies-5 und/oder streiche Tags)`, `Ihr isoliert ihren Kundschafter, müsst aber verhindern, dass er die anderen ruft (Neue Challenge: Craggen Seeker/Craggen-Kundschafter, S. 302)`, `Sie greifen eure Fellowship an (Neue Challenge: Craggen Raider/Craggen-Plünderer, S. 301, und Craggen Banner-Bearer/Craggen-Bannerträger, S. 301)` ] },
    { name:"🧭 Basis (alle Routen) — Grotto Shortcut (Grotten-Abkürzung)", flavor:`Ihr kommt an einen zerklüfteten, windgepeitschten Hügel mit einer Höhle an seinem Fuß. Durch die Dunkelheit seht ihr ein Licht auf der anderen Seite, eine mögliche Abkürzung unter dem Hügel`, options:[ `Die felsigen Wände der Höhle erweisen sich als gefährlicher als erwartet (bruised-2 oder verstauchter Knöchel)`, `Ihr stolpert unerwartet durch einen tiefen, kalten Bach beim Durchqueren der Höhle (wet-2 und cold-2)`, `Die Höhle wimmelt von Fledermäusen, deren Kreischen an euren Nerven zerrt (on-edge-2) und deren Gestank nauseating-2 ist`, `Etwas anderes lebt in dieser Höhle (Neue Challenge: Rampaging Giant/Tobender Riese, CBII 142, Albino Salamander, S. 284, Harrow, S. 291, oder Spriggan, S. 280)` ] },
    { name:"🧭 Basis (alle Routen) — A View of the Sea (Ein Blick auf das Meer)", flavor:`Oben auf diesem hohen Vorgebirge wird euch bewusst, dass ihr in eine unendliche Ebene aschblauen Wassers blickt, die sich bis zum Horizont erstreckt. Sturmwolken gleiten unheilvoll, aber lautlos über die gespiegelte Oberfläche, ein Vorzeichen von Unheil und Erhabenheit. Wie inspiriert es euch?`, options:[ `Ihr fühlt euch unbedeutend oder unzulänglich gegenüber einer so gewaltigen Welt (self-doubting-3 oder insecure-3)`, `Euch überkommt wanderlust-3 oder unerklärliche inexplicable-longing-3 nach dem, was jenseits dieser Erde liegt`, `Ihr fühlt euch gedrängt, dies irgendwie festzuhalten, doch es führt nur zu Frustration (frustrated-3)`, `Ihr spürt eine tiefe, nachhallende Gewissheit, dass nichts mehr je wieder so sein wird wie zuvor (contemplative-3, oder ersetzt ein Thema)` ] },
    { name:"⛰️ Graue Route — Mountain Pass — Avalanche (Lawine)", flavor:`Ein leises Grollen beginnt, und ihr merkt, dass die Schneedecke bricht und eine Lawine im Anmarsch ist!`, options:[ `Ihr seid unter dem Schnee gefangen (cold-4 und trapped-4)`, `Ihr verliert bei der Flucht etwas Wertvolles (streiche einen Tag)`, `Der Weg voraus ist für den Rest des Winters blockiert (Blocked/Blockiert)` ] },
    { name:"⛰️ Graue Route — Mountain Pass — Difficult Hike (Schwieriger Aufstieg)", flavor:`Euer Pfad windet sich mühsam bergauf, über Felsbrocken, in stetigem, steilem Anstieg. Ein Bein nach dem anderen`, options:[ `Ihr seid tired-2 vom Aufstieg, oder werdet winded-2 oder thirsty-2`, `Einige von euch verlangsamen die anderen (time-passes-1)`, `Ihr oder ein Begleiter werdet sour-2 wegen der Verteilung des Traggewichts`, `Ihr lasst etwas von euch fallen; entweder geht ihr zurück, um es zu suchen (time-passes-1), oder lasst es zurück (streiche einen Tag oder short-on-supplies-1)` ] },
    { name:"⛰️ Graue Route — Mountain Pass — Sheer Cliff (Senkrechte Klippe)", flavor:`Eine fast senkrechte Felswand ragt vor euch auf. Euer Weg setzt sich oben fort`, options:[ `Eure Kletterausrüstung reißt oder löst sich (streiche einen Tag)`, `Eure Finger schwitzen, bluten oder brennen vom Festhalten an der Klippe oder dem Seil (slipping-2)`, `Während ihr einen Weg drumherum ausgehandelt habt, hat es länger gedauert, als ihr dachtet (time-passes-1)`, `Etwas Übles zeigt sich oben auf der Klippe (Neue Challenge)` ] },
    { name:"⛰️ Graue Route — Mountain Pass — Breathtaking Mountain Top View (Atemberaubender Gipfelblick)", flavor:`Ihr erreicht einen hohen Aussichtspunkt mit Blick über das gesamte Land, eine Gelegenheit, die Landschaft in euch aufzunehmen`, options:[ `Ihr werdet vom Anblick begeistert und gebt die Vorsicht auf (elated-2 und streiche einen Vorsichts-Tag oder entfernt zwei Stufen von alert/wachsam)`, `Ihr seht euer ganzes Leben wie von oben vor euch, und es bringt euch zum Nachdenken (contemplative-3)`, `Ihr seht etwas Besorgniserregendes über das Land, das ihr verlassen habt (z.B. ein brennendes Dorf) oder das vor euch liegt (z.B. ein bedrohliches Schloss) (worried-3 oder Ill Tidings/Schlechte Nachrichten)`, `Ihr werdet gerufen, hier mit einer größeren Macht oder Gottheit zu kommunizieren (time-passes-1 oder ihr seid disfavored-3 bei ihr)` ] },
    { name:"⛰️ Graue Route — Mountain Pass — Hidden Shrine (Verborgener Schrein)", flavor:`Ihr findet einen verlassenen Schrein, in den Berghang gehauen. Es gibt keine Opfergaben in der Schale, und die Statue ist mit Moos bedeckt – Respekt könnte belohnt werden`, options:[ `Das Standbild scheint euch urteilend anzustarren (guilt-2/schuldgefühl-2)`, `Euer Umgang mit dem Schrein zieht den Zorn einer übernatürlichen Entität auf sich (Ungnade [der Entität])`, `Wenn ihr das nächste Mal schlaft, habt ihr Albträume vom Sturz den Berghang hinab (tired-3 oder Todeswunsch)` ] },
    { name:"⛰️ Graue Route — Mountain Pass — Mountain Cat Ambush (Hinterhalt der Bergkatze)", flavor:`Spuren verraten, dass ein Berglöwe in der Gegend umherschleicht – vielleicht verfolgt er euch gerade in diesem Moment. Es wäre am besten, ihm auszuweichen`, options:[ `Die Katze folgt weiterhin aus der Ferne (Reittiere oder Begleiter werden nervous-2)`, `Wegen der Anwesenheit der Katze ist Jagen in diesem Gebiet schwierig (kein Wild)`, `Die Katze plündert eure Vorräte während der Nacht (short-on-supplies-2)`, `Die Katze greift weiter an (Neue Challenge: Big Cat/Großkatze, S. 138)` ] },
    { name:"⛰️ Graue Route — Mountain Pass — Precious Minerals (Kostbare Mineralien)", flavor:`Die Wasser eines vorbeifließenden Baches oder eine Ader in einem felsigen Sims glitzern mit verlockenden Goldflecken. Selbst ein kleiner Klumpen könnte die Zeit zum Sieben wert sein`, options:[ `Einer von euch beginnt von Reichtum zu träumen (gold-sick-2 oder greedy-2)`, `Nach langen Stunden findet ihr nichts (frustrated-2 und time-passes-1)`, `Das Erz, das ihr findet, ist unnatürlich (poisoned-3 oder drained-of-magic-3)`, `Andere Schürfer kommen und beanspruchen, was ihr gefunden habt (Neue Challenge: Brutal Outlaw/Brutaler Gesetzloser, S. 131)` ] },
    { name:"⛰️ Graue Route — Mountain Pass — Giant's Hollow (Riesenhöhle)", flavor:`Der Pfad führt an einer von Hand gehauenen Höhle vorbei, voller riesengroßer Möbel und anderer Habseligkeiten. Da ist ein Käfig ganz hinten – oder ist es eine Schatztruhe?`, options:[ `Eine Falle wird ausgelöst (caught-3)`, `Das Durchqueren des Territoriums eines Riesen ist nervenaufreibend (worried-2)`, `Die Ziege des Riesen bricht plötzlich aus ihrem Gehege aus! Sie muss gefangen werden, bevor sie ihre Besitzer alarmiert (Neue Challenge: Runaway Farm Animal/Ausgebüxtes Nutztier, S. 127, mit Large/Groß)`, `Der Riese kehrt zurück und findet euch in seinem Zuhause vor (Neue Challenge: Rampaging Giant/Tobender Riese, S. 142)` ] },
    { name:"🌿 Grüne Route — Morose Mire — Negotiate a Path (Einen Weg aushandeln)", flavor:`Das Feuchtgebiet erstreckt sich vor euch, matschige Böden abwechselnd mit schulterhohen Tümpeln stehenden Wassers. Ihr schreckt vor der Aufgabe zurück, dieses Labyrinth zu durchqueren`, options:[ `Ihr watet stundenlang durch den Sumpf und fallt wiederholt ins Wasser (cold-2 und sick-1)`, `Ihr testet mühsam den Boden vor euch, bleibt dabei trocken, verlangsamt aber euren Fortschritt (time-passes-1)`, `Einer von euch widerspricht dem Führer, Kundschafter oder Anführer hartnäckig und wird irritated-2` ] },
    { name:"🌿 Grüne Route — Morose Mire — Mossy Stone Carving (Bemooste Steinschnitzerei)", flavor:`Ihr kommt an einen sich neigenden, halb versunkenen Steinpfeiler mit einer unmenschlichen Darstellung. Auf seinem Kopf liegt ein frischer Blumenkranz. Ihr müsst euch anstrengen, um daraus schlau zu werden, aber es muss von Bedeutung sein`, options:[ `Das monströse Gesicht erweckt etwas Dunkles in euch (sinister-streak-2)`, `Ihr verlasst den Ort, ohne diese Sumpfgottheit zu ehren, und der Sumpf erinnert sich (cursed-to-sink-2, oder marked-2 durch die Sumpfbewohner)`, `Ihr wartet lange genug, bis der Kranzbinder auftaucht (Neue Challenge: Drowning Beauty/Ertrinkende Schönheit, S. 152)` ] },
    { name:"🌿 Grüne Route — Morose Mire — Unending Marshes (Endlose Sümpfe)", flavor:`Es scheint kein Ende dieser Sumpfländer in Sicht zu sein. Ihr spürt, wie ihr der Verzweiflung anheimfallt`, options:[ `Ihr verliert den Willen weiterzumachen (despaired-3)`, `Ihr verliert das Gefühl für euer Selbst (streiche einen Tag für einen Persönlichkeitszug)`, `Der Marsch ist ermüdend, und es gibt keinen guten Lagerplatz zu finden (tired-3)` ] },
    { name:"🌿 Grüne Route — Morose Mire — Lone Hut (Einsame Hütte)", flavor:`Inmitten des hohen Schilfs entdeckt ihr ein einzelnes behelfsmäßiges Bauwerk aus Lehm und Schilf. Es gibt Licht im Fenster und eine Gestalt darin; ihr riecht einen köstlichen Eintopf`, options:[ `Euer Magen knurrt (hungry-2)`, `Der Einsiedler weigert sich, euch hereinzulassen (Blocked/Blockiert)`, `Der Einsiedler ist eine Hexe, die keine Besucher schätzt (Neue Challenge: Hedge Witch/Heckenhexe, S. 125)` ] },
    { name:"🌿 Grüne Route — Morose Mire — Eerie Boneyard (Unheimlicher Knochenacker)", flavor:`Euer Weg führt euch durch eine weite Fläche Morast, gespickt mit den scharfen Knochen tausender riesiger Schlangen, die hierher gekommen zu sein scheinen, um zu sterben`, options:[ `Ihr findet den Knochenacker verstörend (disturbed-2)`, `Ihr werdet von riesigen Rippenknochen und Fangzähnen zerkratzt und geschnitten, jeder von der Länge eines Breitschwertes (bleeding-2, und falls nicht vollständig gelindert, poisoned-2)`, `Ihr zieht euch die Feindschaft von Drachen und Schlangen zu, die diesen Ort für heilig halten (Zeichen des Schlangenlästerers)` ] },
    { name:"🌿 Grüne Route — Morose Mire — Sinking Quagmire (Versinkender Morast)", flavor:`Euer Stiefel, Reittier oder Transportmittel steckt wieder im Schlamm fest, doch diesmal wird es unerbittlich hinabgesogen. Ihr solltet besser schnell herausfinden, wie ihr es befreit`, options:[ `Ihr überlasst es dem Sumpf (streiche einen Tag oder werdet barfuß und upset-3)`, `Es herauszuziehen erfordert unglaubliche Anstrengung (tired-2) oder Ziehen an Seil oder Schilf (grazed-1)`, `Eine Blase giftigen Gases wird von unten freigesetzt (sick-3)` ] },
    { name:"🌿 Grüne Route — Morose Mire — Lights in the Night (Lichter in der Nacht)", flavor:`Während eine neblige Nacht hereinbricht, seht ihr Lichter in der Ferne. Wer weiß, ob es Gefahr bedeutet – oder Hoffnung`, options:[ `Ihr seid von eurer Entscheidung geplagt (doubting-2)`, `Als ihr euch den Lichtern nähert, entdeckt ihr, dass es Nester seltsamer Glühwürmchen sind (Neue Challenge: Swarm of Insects/Insektenschwarm, S. 183)`, `Das Licht führt euch weiter und weiter in den Sumpf, als würde es euch irgendwohin lenken (Neue Challenge: Will-o'-the-Wisp/Irrlicht, S. 143)` ] },
    { name:"🌊 Blaue Route — Treacherous Waters — Rocky Outcrops (Felsvorsprünge)", flavor:`Das Boot gerät in ein Gebiet mit Stromschnellen oder Untiefen voller scharfer Felsen, das notorisch schwer zu durchqueren ist`, options:[ `Euer Schiff ist stuck-3 oder runs aground-3`, `Euer Schiff nimmt Wasser! (damaged-2 und taking-on-water-1)`, `Ihr hört eine schöne Stimme von den Felsen rufen (Neue Challenge: Drowning Beauty/Ertrinkende Schönheit, S. 152)` ] },
    { name:"🌊 Blaue Route — Treacherous Waters — Fishing Village (Fischerdorf)", flavor:`Ihr kommt an ein Dorf von Fischern, die diese fischreichen Gewässer bewirtschaften. Ein großartiger Ort, um Vorräte aufzustocken, zu rasten und mehr über die Gegend zu erfahren`, options:[ `Ihr beleidigt oder verletzt einen lokalen Aberglauben (ill-repute-2 oder Blocked/Blockiert)`, `Der geräucherte Fisch, den ihr gekauft habt, war nicht ausreichend geräuchert (short-on-supplies-1 und riecht nach verdorbenem Fisch)`, `Die Kunde von eurer Anwesenheit verbreitet sich im Klatsch der Seeleute (Exposure/Enthüllung)` ] },
    { name:"🌊 Blaue Route — Treacherous Waters — Watery Meditations (Wässrige Meditationen)", flavor:`Jeder Tag gleicht dem letzten, Wasser so weit das Auge reicht. Es ist allzu leicht, apathisch zu werden, wenn nichts unternommen wird`, options:[ `Ihr denkt an zu Hause oder verliert euch in Gedanken an die Zukunft (homesick-2 oder worried-2)`, `Ihr entwickelt ein Verlangen nach etwas, das ihr lange nicht hattet oder getan habt (wants [Verlangen])`, `Das Eingesperrtsein auf engem Raum fordert seinen Tribut von euren Beziehungen (verändert einen Fellowship-Beziehungs-Tag zum Schlechteren)` ] },
    { name:"🌊 Blaue Route — Treacherous Waters — Lazy Waterway (Träger Wasserweg)", flavor:`Das Wasser hier bewegt sich nicht, und der fehlende Wind hilft auch nicht. Ihr verschwendet Trinkwasser Tag für Tag, und seid ein sitzendes Ziel für Piraten`, options:[ `Ihr seid gestrandet, unfähig euch schneller als in treibendem Kriechtempo zu bewegen (time-passes-1 und/oder short-on-supplies-1)`, `Aus der Ferne erscheint ein Ruderboot (Neue Challenge: Raiding Longboat/Plünderndes Langboot, S. 153)` ] },
    { name:"🌊 Blaue Route — Treacherous Waters — Stormy Seas (Stürmische See)", flavor:`Ein Sturm braut sich voraus zusammen, Wolken wirbeln mit plötzlichen Lichtblitzen`, options:[ `Blitz schlägt in euren Mast, Segel oder Deck (Schiff wird damaged-3, burning-3, slowed-3, oder streiche Tags) oder trifft eines der Crewmitglieder (burnt-6 oder Ill Tidings/Schlechte Nachrichten)`, `Ihr werdet in eine unbekannte Richtung verschlagen (lost-3)`, `Euer Schiff landet auf einer Sandbank (marooned-5)` ] },
    { name:"🌊 Blaue Route — Treacherous Waters — Whirlpool (Strudel)", flavor:`Euer Schiff beginnt in einem weiten Kreis zu treiben`, options:[ `Euer Schiff wird heftig herumgeschleudert (damaged-3)`, `Euer Schiff ist sunk-5 und damaged-5, und ihr alle seid drowning-3`, `Euer Schiff taucht an einem völlig anderen Ort wieder auf (Complication/Komplikation)`, `Gewaltige Tentakel steigen aus dem Wasser auf und offenbaren den Schrecken jedes Seefahrers (Neue Challenge: Kraken, S. 153)` ] },
    { name:"🌊 Blaue Route — Treacherous Waters — Ominous Promontory (Unheilvolles Vorgebirge)", flavor:`Ihr segelt nahe an ein hohes Kap heran, wo eine dunkle, unheilvolle Ruine sich gegen den stürmischen Himmel erhebt`, options:[ `Die Bewohner der Ruine lassen eine Salve brennender Pfeile und flammender Tonkugeln voller Öl los (burning-3 für Crew und/oder Schiff)`, `Eine wahnsinnige Gestalt oben auf dem Turm heult im Wind und verflucht euch zur Hölle (cursed-3 für die gesamte Crew) oder lässt euer Essen verrotten (short-on-supplies-4)`, `Euer Schiff wird wie durch magische Fesseln zum Ufer gezogen (marooned-5)`, `Ein schreckliches geflügeltes Wesen erhebt sich aus den Ruinen (Neue Challenge: Fabled Bird of Prey/Sagenhafter Raubvogel, S. 139, oder Greedy Dragon/Gieriger Drache, S. 184)` ] }
  ],
  revelations:[],
  rewards:[],
  tips:[
    "Kartenhinweis: Im Originalbuch (S. 382) findet sich eine Karte der Craggen Highlands mit den Orten Die Burg, Mountains, Maols H\u00f6hle, Milkrest, struppiges Hochland, der Rush, Kawa, Die Drei Stehenden, Cedargate, Sumpfland sowie Abnoba-Furt und -Burg \u2014 reines Grafikelement zur r\u00e4umlichen Orientierung; \u201eMilkrest\u201c wird im Flie\u00dftext nicht weiter erl\u00e4utert.",
    "Die 29 Vignetten unten sind nach Route gruppiert (Basis/Grau/Gr\u00fcn/Blau) \u2014 w\u00e4hlt situativ 2\u20134 pro Kreuzungsabschnitt, nicht alle auf einmal, um die Szene nicht zu \u00fcberladen.",
  ],
},

/* 4 --------------------------------------------------------- CAMPFIRE STORIES */
{
  key:"campfire", kind:"scene", page:"S. 383", optional:true,
  title:"Lagerfeuergeschichten", en:"Campfire Stories",
  summary:"Optionale Wildnis-Sozialszene · Reisende am geteilten Lagerfeuer",
  overview:["Lagerplatz wird mit fremden Reisenden geteilt", "1–3 Reisende auswählen: Geschichten & Neuigkeiten gegen kleine Güter tauschen", "Überleitung: Kerrid bricht zusammen → Eine Wendung zum Schlechteren"],
  readAloud:[
    { page:"S. 383", label:"Am fremden Lagerfeuer", text:
      `Während eure Gefährtenschaft nach Stunden des Wanderns zunehmend ermüdet, stolpert ihr auf eine große, offene Höhle inmitten der Felsen und werdet von der Wärme eines Feuers und den Gesichtern mehrerer Fremder begrüßt. Diese Reisenden haben sich um das Lagerfeuer versammelt und lauschen der leidenschaftlichen Erzählung eines unter ihnen, der gerade eine bezaubernde Geschichte darüber webt, wie er nur knapp dem Toben eines »sprechenden Sturms« entkommen ist. Manche der Reisenden verdrehen die Augen ob dieser abenteuerlichen Geschichte, doch andere haben sich neugierig eurer Gruppe zugewandt.` },
  ],
  flow:[
    `Beginnt diese Szene bei einer der Gelegenheiten, an denen die Gefährtenschaft sich zum Lagern entscheidet. Der Lagerplatz wird mit anderen Reisenden geteilt, die einen Platz an ihrem einladenden Lagerfeuer anbieten. Diese Reisenden bieten den Helden auch Neuigkeiten über den Zustand des Weges voraus, aufziehendes Wetter, zu meidende Gefahren und dergleichen an — sofern die Helden im Gegenzug ebensolche Neuigkeiten teilen.`,
    `Wählt 1–3 interessante Reisende aus der folgenden Liste. Die Helden können mit ihnen Geschichten austauschen und für nützliche Güter für den weiteren Weg handeln:<ul>
      <li><strong>Ein Bergkräuterkundiger</strong> fingert an einigen Samen herum und stampft ständig mit der Ferse auf den Boden, nervös und in Bedarf von etwas, das seine Nerven beruhigt. → schmerzlindernde Salbe</li>
      <li><strong>Ein rauer Craggen-Jäger</strong> verlangt lautstark, dass man ihm eine Geschichte über den gefährlichsten Gegner erzählt, den man je bekämpft hat. → Karte der Wildwechsel</li>
      <li><strong>Ein Highlands-Händler</strong> fragt, ob man gute Dalish-Gerichte kenne. → grundlegende Highland-Sprache</li>
      <li><strong>Ein wandernder Druide</strong> stellt eine rätselhafte Bitte: eine Geschichte über die größte Furcht der Helden. → forewarned-2 über den weiteren Weg</li>
      <li><strong>Ein betagter Craggen-Geschichtenerzähler</strong> schnaubt verächtlich, während man vor dem Feuer steht. Er hat schon alles gehört und ist nicht leicht zu beeindrucken. → fesselnder Sprecher</li>
      <li><strong>Ein furchteinflößender Spriggan</strong> (Geschöpf der Dämmerung, S. 280) sitzt am Feuer und brummt vor sich hin. Er hat einen grausamen Zug und lacht über das Unglück anderer. → eine Lore-Enthüllung aus dem Kreaturen-Themenfaden (S. 416)</li>
    </ul>`,
    `<span class="section-heading">Erzählhandlungen</span> Geschichten auszutauschen ist unter Reisenden in der Wildnis ein gängiger Zeitvertreib. Bietet sich ein Held an, eine Geschichte zu erzählen, deutet die jeweilige Geschichten-Vorliebe des Reisenden an und lasst den Helden eine Schnelle Handlung ausführen. Ein Erfolg bedeutet, dass die Geschichte beim Publikum gut ankommt, das den Helden mit einem kleinen Zeichen der Wertschätzung belohnt (siehe Liste); zudem wird der Held dadurch confident-1. Misserfolg riskiert unimpressed-1 unter den Reisenden, was weitere Erzählversuche und das Handeln erschwert.`,
    `<strong>Erzähler-Notiz — Geschichten in Geschichten:</strong> Eine Spielerin muss das Erzählen der Geschichte ihres Helden nicht ausspielen, wenn sie es nicht möchte. Die Würfel können für sie sprechen. Manche Spielenden möchten vielleicht zuerst den Erfolg ihrer Handlung ermitteln, um daraus ihre Darstellung abzuleiten.`,
    `Auf einmal hustet Kerrid, stolpert und sinkt auf ein Knie. Sie fängt sich, schwer auf ihren Speer gestützt, und ringt darum, wieder auf die Beine zu kommen. Blut hat ihren Reiseumhang durchtränkt, und sie kann nicht länger gegen ihren bedrohlichen Zustand ankämpfen. Die Gefährtenschaft ist noch tief in der Wildnis, fern jeder bekannten Hilfe — es folgt <strong>Eine Wendung zum Schlechteren</strong>.`,
  ],
  npcs:[],
  challenges:[],
  revelations:[],
  rewards:[],
  tips:[
    "Diese Szene ist optional und kann übersprungen werden, wenn die Gruppe bereits genug Wildnis-Begegnungen hatte — sie eignet sich aber hervorragend, um Kerrid vor ihrer Krise noch etwas mehr Persönlichkeit und Wärme zu geben.",
    "Die letzte Zeile des Vorlesetexts hier ist bewusst identisch mit der Eröffnung der nächsten Folie — nutzt sie als nahtlosen Übergang, egal ob ihr diese Szene spielt oder direkt zu „Eine Wendung zum Schlechteren“ springt.",
  ],
},

/* 5 --------------------------------------------------- A TURN FOR THE WORSE */
{
  key:"turnforworse", kind:"scene", page:"S. 384",
  title:"Eine Wendung zum Schlechteren", en:"A Turn for the Worse",
  summary:"Kerrids Wettlauf um ihr Leben \u2014 STABILIZE 4 gegen SUCCUMB 5",
  overview:["Kerrid bricht zusammen \u2014 Wettlauf um ihr Leben", "Stabilisiert: erholt sich, kann Reise fortsetzen", "Erliegt sie: die Helden m\u00fcssen die Nachricht selbst nach Kawa bringen"],
  readAloud:[
    { page:"S. 384", label:"Kerrid bricht zusammen", text:
      `Plötzlich hustet Kerrid, stolpert und sinkt auf ein Knie. Sie fängt sich, schwer auf ihren Speer gestützt, und ringt darum, wieder auf die Beine zu kommen. Blut hat ihren Reiseumhang durchtränkt, und sie kann sich nicht länger gegen ihren bedrohlichen Zustand stemmen. Ihr seid noch immer tief in der Wildnis, fern jeder bekannten Hilfe; ihr werdet hier und jetzt tun müssen, was in eurer Macht steht, um ihr zu helfen.` },
  ],
  flow:[
    `In dieser unerwarteten Szene haben die Strapazen des Weges Kerrid ihren Tribut abverlangt, und sie steht nun am Rande des Todes. Kann ihr Zustand nicht stabilisiert werden, überlebt sie die Nacht nicht. Stirbt Kerrid, obliegt es den Helden, ihrem Klan die Nachricht von ihrem Tod zu überbringen und zu vollenden, was sie sich vorgenommen hatte.`,
  ],
  npcs:[],
  challenges:[
    { name:"KERRID, DYING", difficulty:2, img:"kerrid", type:"Varies", subtitle:"Kerrid, Sterbend", after:1,
      desc:`**Kerrids Schicksal:** Die Challenge wird als Wettlauf um Kerrids Leben gespielt. Gelingt es den Helden, sie zuerst zu stabilize 4 (stabilisieren 4), übersteht sie eine unruhige Nacht der Genesung, ist aber am nächsten Morgen wieder bei klarem Verstand. Sie braucht einen kundigen Heiler, wird aber den Rest der Reise nach Kawa bewältigen können.<br><br>Erliegt Kerrid succumb 5 (erliegen 5) ihren Verletzungen, überlebt sie die Nacht nicht. Frage jeden Helden, wie er Kerrids Tod auf seine eigene Weise erlebt, besonders wenn er während der Reise eine Bindung zu ihr aufgebaut hat oder zuvor noch nicht den Tod eines Gefährten verarbeiten musste.`,
      limits:[ { label:"STABILIZE (Stabilisieren)", max:4 }, { label:"SUCCUMB (Erliegen)", max:5 } ],
      tags:[ "succumbing-1", "delirious-2" ],
      threats:[ { name:"SICKEN (Erkranken)", flavor:`Wird bleicher, während ihr Atem an den Rändern ausfranst`, options:[ `Blut befleckt den Boden unter ihr (erhält succumbing-1)`, `Murmelt unverständlich, spricht mit ungesehenen Präsenzen (erhält delirious-1)` ] }, { name:"THRASH (Um sich schlagen)", flavor:`Schlägt in Verwirrung nach allem in Reichweite, verschlimmert dabei ihren Zustand`, options:[ `Tritt gegen etwas, das in ihre Reichweite gebracht wird (erhält succumbing-1 und streiche einen Gegenstands-Tag)`, `Schlägt mit ihrem geschätzten Jagdmesser nach allem, was sie als Bedrohung wahrnimmt (erhält succumbing-1 und gibt wounded-2)` ] }, { name:"SWEAR (Schwören)", flavor:`Ergreift jemandes Hand mit ihren blutverschmierten Fingern, blickt sie entschlossen an, verlangt einen Eid`, options:[ `Rezitiert einen Eid der Erinnerung in ihrer Sprache (erhält succumbing-1 und gibt solemn oath/feierlicher-eid)`, `Gibt dem Helden mit dem feierlichen Eid ihr geschätztes Jagdmesser als Zeichen ihrer Bindung` ] } ],
      source:`Wake of the Oldways – Kampagnenspezifische Challenge`
    },
  ],
  revelations:[],
  rewards:[],
  tips:[
    "Gelingt es den Helden, Kerrid zuerst zu stabilisieren, \u00fcbersteht sie eine unruhige Nacht der Genesung und ist am folgenden Morgen wieder bei klarem Verstand \u2014 sie braucht einen kundigen Heiler, kann aber den Rest der Reise nach Kawa bewältigen. Erliegt sie ihren Verletzungen, \u00fcberlebt sie die Nacht nicht \u2014 fragt jeden Helden, wie er Kerrids Tod auf seine eigene Weise wahrnimmt, besonders wenn er w\u00e4hrend der Reise eine Bindung zu ihr aufgebaut hat.",
  ],
},

/* 6 --------------------------------------------------------- KAWA, KERRID'S HOME */
{
  key:"kawa", kind:"scene", page:"S. 384–386",
  title:"Kawa, Kerrids Heimat", en:"Kawa, Kerrid's Home",
  summary:"Ankunft im Klanlager · Vertrauen der drei Anführer gewinnen · Treffen der Drei",
  overview:["Ankunft am Hochlandsee, Kerrids Heimkehr (lebend oder als Verlust)", "Vertrauens-Mechanik: friend-of-warriors/druids/laborers-3 bei Riyori, Nochika, Gild", "Treffen der Drei: Lore über Issenhord, Turnskins, Maol", "Bündnis besiegelt: Die Drei unterstützen die Helden gegen Maol — Story-Thema „Riyoris Kriegerschar“ gewonnen"],
  readAloud:[
    { page:"S. 384", label:"Ankunft am Hochlandsee", text:
      `Zuerst seht ihr eine Rauchsäule aufsteigen: einladenden Kochfeuerrauch, dann trägt der Wind den Duft von gebratenem Fisch heran. Um die nächste Flussbiegung säumen tierhäutene Zelte einen gewundenen Hügelhang neben einem glitzernden See. Ihr hört auf zu zählen, nachdem ihr mehrere Dutzend gezählt habt. Manche Zelte sind groß genug für kleine Familien, andere sind gemütliche Halbkreise mit überhängender Plane für Schatten oder als Arbeitsplatz. Es ist die geschäftigste Zeit ihres Tages: Sie flicken ihre langen, geschwungenen Boote und versorgen den morgendlichen Fang; wer nicht gerade fischt, scheint sich zum Aufbruch bereitzumachen.

Einige der Highländer bemerken eure Annäherung. Ein halbes Dutzend Krieger mit Speeren und Häuteschilden treten vor, doch sie alle tragen verbundene Wunden und bewegen sich steif. Ihr erinnert euch an Kerrids Warnung vor den Turnskins, Feinden sowohl der Dales als auch ihres eigenen Volkes.` },
  ],
  flow:[
    `Kawa ist sowohl der Name von Kerrids Klan als auch die Bezeichnung für ihr Lager, das den größten Teil des Jahres an ihrem Hochlandsee bleibt. Die Kawa sind vor allem Fischer, Jäger, Bootsbauer und Händler, die entlang des Flusses mit den weiter westlich lebenden Menschen Handel treiben. Die Helden können eine Menge über das Leben der Highlander erfahren, wenn sie sich Zeit für Kerrids Volk nehmen.`,
    `In dieser Szene erreichen die Helden das aktuelle Lager des Kawa-Klans, Kerrids Volk, und bitten dessen Anführer um Hilfe gegen Maol. Der Klan hat eine schwierige Saison hinter sich. Die Zahl seiner Krieger hat abgenommen, seit Kerrid zuletzt hier war, und sie könnten einem Angriff nur eine dürftige Verteidigung entgegensetzen. Kawa könnte, wie Cedargate, fallen, sollte ein weiterer Feind wie die <span class="gloss" onclick="openGloss('painted-beast')">Painted Beast</span> auftauchen. Die beste Chance für beide Seiten besteht darin, zusammenzuarbeiten — Dalisch und Highlander.`,
    `<span class="section-heading">Kerrids Heimkehr</span> Die Wächter des Lagers rufen einen der drei Klananführer herbei, <strong><span class="gloss" onclick="openGloss('riyori-ref')">Riyori</span></strong>, um Kerrid zu empfangen — oder zumindest die Nachricht von ihrem Tod. Riyori ist eine Frau mittleren Alters, eine Kriegerin von beträchtlicher Erfahrung mit ebenso vielen Narben, wettergegerbt, muskulös, in Bärenfell-Rüstung.<ul>
      <li>Lebt Kerrid, begrüßt Riyori sie mit einem strengen Lächeln, das ihre Freude kaum verbirgt, und sorgt dafür, dass sie zu einem Heiler gebracht wird.</li>
      <li>Bringen die Helden Kerrids Leichnam, verkrampft sich Riyoris Gesicht und wird aschfahl. Sie dankt den Helden mit einer tiefen Verbeugung und veranlasst, dass ihre Seekerin zu <strong><span class="gloss" onclick="openGloss('nochika-ref')">Nochika</span></strong>, der Druidin, gebracht wird, um ihre Bestattungsriten vorzubereiten.</li>
    </ul>In jedem Fall versichert Riyori den Helden zum Dank, dass sie Unterkunft für die Nacht sowie genug Vorräte für die Rückreise in die Dales erhalten werden (well-supplied-3, größtenteils getrockneter Fisch), zudem ein <span class="gloss" onclick="openGloss('owl-skull-charm')">Eulenschädel-Amulett</span>, das ihnen hilft, sollten sie Turnskins oder anderen Praktizierenden der Volksmagie in die Quere kommen.`,
    `<span class="section-heading">Die nächsten Schritte der Helden</span> Werden sie nach den Turnskins gefragt, verrät Riyori den Helden, wo sie deren Versteck vermutet, macht ihnen aber deutlich, dass sie es für unklug hält, dass die Helden allein einen Angriff wagen. Die Kawa sind es leid, gegen diesen wilden Kreis von Turnskins zu kämpfen, und bereiten sich darauf vor, noch binnen eines Tages nach Westen aufzubrechen — was bedeuten würde, dass die Turnskins Cedargate wohl mit umso größerer Wucht angreifen werden. Riyori empfindet Mitgefühl für die Helden und sagt, sie glaube persönlich, dass man die Turnskins aufhalten müsse — doch die anderen Anführer sind anderer Meinung. Die Helden haben die Chance, die Meinung der Anführerschaft zu ändern, doch dafür müssen sie dem gesamten Klan beweisen, dass ihr Wort und ihre Meinung etwas zählen; die Anführer dürfen nicht den Eindruck erwecken, den Launen von Fremden zu folgen — diese Fremden müssen also zuerst zu Freunden werden. Gebt den Helden etwas Zeit, ihre nächsten Schritte zu planen.`,
    `<strong>Gemeinsamer Boden:</strong> Alle Merkmale, die die Helden von Kerrid erworben haben, können helfen, das Vertrauen der Kawa zu gewinnen. Auch andere Erfahrungen von der Reise können nützlich sein — die Highlander reagieren gut auf geteilte Geschichten von unterwegs, auf Interesse an ihrer Kultur, auf den Tausch mit gesammelten Pflanzen und erlegtem Wild sowie auf die Erwähnung gemeinsamer Freunde.`,
    `<strong>Das Vertrauen des Kawa-Klans gewinnen:</strong> Die Kawa haben drei Anführer: <strong>Riyori</strong>, die Kriegerin, <strong>Nochika</strong>, die Druidin, und <strong><span class="gloss" onclick="openGloss('gild-ref')">Gild</span></strong>, der Verwalter. Damit ihr Wort im Klan Gewicht hat, müssen die Helden jeden der Anführer beeindrucken, indem sie sich als <strong>friend-of-warriors-3</strong>, <strong>friend-of-druids-3</strong> und <strong>friend-of-laborers-3</strong> erweisen. Hat Riyori einen guten Eindruck von ihnen, spricht sich das bald herum, und sie erhalten friend-of-warriors-1. Hat Kerrid überlebt, erzählt sie ihrem Volk, dass die Helden ihre Freunde sind und somit auch Freunde des Kawa-Klans — das verleiht den Helden eine Stufe in jedem der Freund-Status-Werte. Ist Kerrid gestorben, müssen die Helden das Reden selbst übernehmen; sowohl das Rezitieren des feierlichen Schwurs als auch das Vorzeigen von Kerrids geschätztem Jagdmesser können jedoch zu Handlungen im Umgang mit den Kawa beitragen — dies birgt allerdings das Risiko, ihre Verwandten zu beleidigen oder gar den Vorwurf zu provozieren, die Helden hätten das Messer gestohlen oder von ihrer Leiche geplündert (Complication).`,
    `Die Helden könnten beispielsweise:<ul>
      <li><strong>Friend-of-warriors:</strong> kriegerisches Können demonstrieren, verwundete Krieger versorgen, Ausrüstung herstellen oder reparieren und so die geschwächten Kämpfer der Kawa auf andere Weise unterstützen.</li>
      <li><strong>Friend-of-druids:</strong> Zutaten sammeln, die Oldways oder eine Verbindung zum Unsichtbaren demonstrieren und freundlich nach Craggen-Volksmagie fragen.</li>
      <li><strong>Friend-of-laborers:</strong> Werkzeuge, Boote und Zelte anfertigen oder reparieren, fair mit den Handwerkern der Kawa handeln, fischen und bei körperlicher Arbeit mit anpacken.</li>
    </ul>`,
    `Sofern nicht provoziert, verhalten sich die Kawa den Helden gegenüber eher kühl, stellen aber kaum Threats. Um in solchen Momenten etwas Druck aufzubauen, könnt ihr Vignetten aus der „Insular Hamlet“-Journey (CBII 120, 📎 vollständig in der Challenge-Bibliothek) nutzen, leicht umthematisiert für ein Craggen-Highlander-Lager.`,
    `Haben die Helden alle drei Grenzwerte erreicht, haben sie genug Wohlwollen gesammelt, um zu den Drei gerufen zu werden.`,
    `<span class="section-heading">Die Drei treffen</span> Die Helden werden zu einem Zelt gebracht, um sich mit Riyori, Nochika und Gild, den drei Anführern von Kawa, zu treffen. Riyori ist dankbar für die Bemühungen der Helden, Kerrid nach Kawa zurückzubringen. Ihre Hauptsorge gilt ihrem Volk, doch sie erkennt in den Dalesleuten ungewöhnliche Verbündete, da sie einen gemeinsamen Feind haben. Zusammen mit den beiden anderen Anführern teilt sie das Folgende mit:<ul>
      <li>Die Highlands sind in den letzten Jahreszeiten gefährlicher geworden. Gefährliche Kreaturen, gewalttätige Klans und unbekannte Agenten fremder Mächte werden von Tag zu Tag zahlreicher. Manche sagen, diese Agenten seien von „<span class="gloss" onclick="openGloss('craggen-highlanders')">Issenhord</span>“ (Iceheart) entsandt — dem schrecklichen Geist, der die Craggen vor vielen, vielen Jahren aus ihrer ursprünglichen Heimat im Norden vertrieb.</li>
      <li>Die Highlander glauben seit Langem, dass die Dales unter mystischem Schutz stehen, der alle Überfallversuche vereitelt. Manche Klans, aggressiver als die Kawa, sagen, sie spürten, wie dieser Schutz schwindet. (Lies „Das Missgeschick der Räuber“.)</li>
      <li>Die Kawa werden von einem Kult aus Turnskins geplagt, chaos-anbetenden Hexern, die sich die Häute von Tieren überziehen können, um deren Gestalt anzunehmen — Fähigkeiten, die sie entwickeln, indem sie unter den Tieren leben und ihnen immer ähnlicher werden.</li>
      <li>Angeführt wird der Kult von <strong>Maol</strong>, der eine vielfarbige Kreatur der örtlichen Legenden erweckt hat, die Painted Beast. Riyori hat es in den Fingern gejuckt, mit ihren Kriegern deren Versteck anzugreifen, doch die anderen Anführer waren dagegen — bis jetzt. (Lies „Die Abrichtung der Painted Beast“.)</li>
      <li>Maol ist eine ernste Bedrohung; selbst wenn die Painted Beast bei Cedargate getötet wurde, muss er zur Rechenschaft gezogen werden. Die Kawa glauben, dass mit Maol nicht mehr vernünftig zu reden ist — sein Kult ist inzwischen eher wild als menschlich. Tatsächlich wissen sie, dass er bereits plant, ein noch größeres legendäres Ungeheuer zu zähmen.</li>
    </ul>`,
    `Bieten die Helden ihre Hilfe gegen die Painted Beast an, nehmen die Drei ihre Unterstützung dankbar an. Haben die Helden durch ihr Auftreten in Kawa den Eindruck hinterlassen, fähige Kämpfer oder gewiefte Tricksterinnen zu sein, bittet Riyori sie direkt um Hilfe. Willigen sie ein, gewinnen die Helden das Story-Thema <strong>„Riyoris Kriegerschar“</strong>.`,
  ],
  npcs:[
    { name:"Riyori", role:"Kriegerin · eine der drei Kawa-Anführer", after:3, text:"Frau mittleren Alters, Kriegerin von beträchtlicher Erfahrung mit ebenso vielen Narben — wettergegerbt, muskulös, Bärenfell-Rüstung. Dankbar für die Rückführung Kerrids; glaubt persönlich, dass Maol gestoppt werden muss, während die anderen Anführer zunächst zögern." },
    { name:"Nochika", role:"Druidin · eine der drei Kawa-Anführer", text:"Oberdruidin von Kawa. Bereitet bei Kerrids Tod deren Bestattungsriten vor; führt bei einem guten Ausgang eine Gruppe von Fashionern an, um das Banner der Eintracht zu weben. Könnte später in „The Barleytown Fair“ wieder auftauchen." },
    { name:"Gild", role:"Verwalter · einer der drei Kawa-Anführer", text:"Der Verwalter der Kawa — kümmert sich um die praktischen Belange des Klans. Muss wie Riyori und Nochika durch friend-of-laborers-3 überzeugt werden, bevor sein Wort für die Helden zählt." },
  ],
  challenges:[],
  extra:{ heading:"Begleiterin", type:"companions", items:[
    { name:"Riyoris Kriegerschar", role:"Kawa-Jäger · Seile und Harpunen · kriegsmüde", text:"Bieten die Helden ihre Hilfe gegen die Painted Beast/Maol an und haben in Kawa einen guten Eindruck hinterlassen, bittet Riyori sie direkt um Hilfe. Willigen sie ein, gewinnen die Helden dieses Story-Thema für die letzte Konfrontation in Maols Höhle." },
  ]},
  vignettes:[],
  revelations:[
    { kind:"Core", ref:"1", text:"Einst ferne oder gar sagenhafte Bedrohungen dringen nun in die Dales vor." },
    { kind:"Core", ref:"2", text:"Etwas, das die Dales seit Jahrhunderten vor äußeren Mächten geschützt hat, schwindet." },
  ],
  rewards:[
    "well-supplied-3 (größtenteils getrockneter Fisch) sowie ein Eulenschädel-Amulett von Riyori, unabhängig davon, ob Kerrid überlebt hat.",
    "Mit erfolgreicher Bündnisbildung führt Nochika eine Gruppe von Fashionern (Craggen-Bannermagie) an, um ein Banner zu weben, das die Zusammenarbeit zwischen den Kawa und den Dales symbolisiert. Überlebte Kerrid die Reise nach Hause nicht, wird das Banner zu ihrem Andenken gewoben, zu Ehren des Opfers, das dieses Bündnis erst ermöglichte. Die Helden, besonders jene mit Talent für die Oldways oder Volksmagie, sind eingeladen, an der Herstellung mitzuwirken.",
    "Banner der Eintracht — gewoben aus Stoffen oder Fellen beider Länder, mit einem weitgereisten Schaft aus Birke, Horn oder Knochen. Das fließende Flickwerk-Banner ist mit Zeichen bestickt, die sowohl den Kawa als auch den Dales bedeutsam sind. Verleiht resolute (entschlossen), wenn an der Seite eines fernen Freundes gekämpft wird.",
  ],
  tips:[
    "Die drei Vertrauens-Grenzwerte (friend-of-warriors/druids/laborers-3) sind unabhängig voneinander — lasst die Gruppe ruhig unterschiedliche Helden auf unterschiedliche Anführer fokussieren, statt alles über eine einzige Aktion zu lösen.",
  ],
},

/* 7 --------------------------------------------------- MAOL'S LAIR */
{
  key:"maolslair", kind:"scene", page:"S. 386\u2013387",
  title:"Die Spur der Bestie / Maols H\u00f6hle", en:"Maol's Lair",
  summary:"Letzte Konfrontation mit Maol und seinen Turnskins in der gefluteten H\u00f6hle",
  overview:["Hufabdr\u00fccke f\u00fchren zu einer gefluteten H\u00f6hle", "Maol of the Boar (fanatic-3) \u2014 Eberhaut-Umhang als Schw\u00e4chung", "Painted Beast \u00fcberlebt \u2192 erholt sich hier / get\u00f6tet \u2192 Ferika of the Vulture & Ethain of the Bear schlie\u00dfen sich an"],
  readAloud:[
    { page:"S. 386", label:"Die Spur der Bestie", text:
      `Ihr wisst, dass ihr auf dem richtigen Weg seid, sobald ihr die Hufabdr\u00fccke seht. Nichts au\u00dfer der Painted Beast, dem Ungeheuer, das Cedargate angriff, k\u00f6nnte solch gewaltige Spuren hinterlassen haben. Sie f\u00fchren zu einer gefluteten H\u00f6hle, wo das Wasser mancherorts kniehoch steht. Mit Riyori und den anderen Kawa-J\u00e4gern in Reichweite schleicht ihr hinein, um euer Ziel zu finden.` },
  ],
  flow:[
    `In dieser Szene helfen die Helden <span class="gloss" onclick="openGloss('riyori-ref')">Riyori</span> und ihrer Gruppe von Kawa-Jägern, sich Maol zu stellen. Eine geflutete Höhle. <strong><span class="gloss" onclick="openGloss('maol-ref')">Maol of the Boar</span></strong> (Craggen Turnskin, S. 303) glaubt, dass verzweifelte Zeiten eine stärkere Welt schmieden, und widmet sich der Aufgabe, solche verzweifelten Zeiten zu erschaffen. Entsprechend ist er nur schwer zu vernünftigem Handeln zu bewegen (fanatic-3). Wird er nicht abgebracht, gefangen genommen, getötet oder aus seinem Versteck vertrieben, werden sowohl die Kawa als auch die Dales aller Wahrscheinlichkeit nach weiteres Unheil durch sein Wirken erleiden. Nimmt man ihm seinen Eberhaut-Umhang, behindert ihn das ebenfalls stark — ohne seine „zweite Haut“ kann ein Turnskin sich nicht verwandeln.`,
    `Hat die <span class="gloss" onclick="openGloss('painted-beast')">Painted Beast</span> die Verteidigung von Cedargate (S. 378) überlebt, ist sie hierher zurückgekehrt, um sich in den tiefen Wasserbecken zu suhlen und von ihren Verletzungen zu erholen; wurde sie erschlagen, gesellen sich stattdessen zwei weitere Turnskins zu Maol: <strong>Ferika of the Vulture</strong> und <strong>Ethain of the Bear</strong> — beide nutzen dasselbe Craggen-Turnskin-Profil unten, nur mit einem anderen Tier-Bezug (siehe Quellenhinweis der Karte).`,
    `<div class="callout"><span class="co-title">Reflavoring — Maol, Ferika, Ethain</span>Das Quellbuch gibt für alle Turnskins nur <em>ein</em> Basisprofil (unten) plus die Anweisung, TURN mit einem passenden Tierprofil zu kombinieren. Praktisch bedeutet das:
<ul>
<li><strong>Maol of the Boar</strong> — sein Eberhaut-Umhang passt zur Painted Beast selbst; nutzt bei TURN deren Stampfen/Hauer-Flavor oder ein generisches Eber-Profil.</li>
<li><strong>Ethain of the Bear</strong> — nutzt bei TURN das Profil „Protective Bear“ (Adventure 4, Challenge-Bibliothek) für Kraft und Wucht.</li>
<li><strong>Ferika of the Vulture</strong> — nutzt bei TURN das Profil „Fabled Bird of Prey“ (Challenge-Bibliothek) für Sturzflug und Krallenhiebe.</li>
</ul>Alle drei teilen ansonsten HARM/SCARE/TURN, Tags und die SPY/FIGHT-Threats des Basisprofils — nur Name, Tier-Flavor und ggf. das bei TURN aufgerufene Zusatzprofil unterscheiden sich.</div>`,
  ],
  npcs:[
    { name:"Maol of the Boar", role:"Anf\u00fchrer des Turnskin-Kults", after:1, text:"Ehrgeiziger Craggen-Turnskin, glaubt, dass verzweifelte Zeiten eine st\u00e4rkere Welt schmieden \u2014 fanatic-3, kaum zu \u00fcberzeugen. Hat die Painted Beast abgerichtet und plant bereits, ein noch gr\u00f6\u00dferes legend\u00e4res Ungeheuer zu z\u00e4hmen." },
  ],
  challenges:[
    { name:"CRAGGEN TURNSKIN", difficulty:3, type:"Aggressor, Watcher",
      subtitle:"Craggen-Gestaltwandler", after:1,
      desc:`Turnskins sind seltsame, zurückgezogene Highland-Krieger, die mit wilden Tieren zusammenleben und ihre Wege lernen, bis sie sich als eines der ihren fühlen und deren Gestalt annehmen können. Sowohl bei den Craggen als auch bei den Tieren werden sie für ihre Kampfkunst verehrt, doch wegen ihrer gespaltenen Loyalität misstrauisch beäugt — tragen sie doch jeweils einen Umhang aus dem Fell des Tieres, das sie ihr Kin nennen. Sie reisen, kämpfen und jagen allein, ohne von Menschenhand gefertigte Werkzeuge, und verlassen sich auf ihre Wildheit und die enge Verbundenheit mit Tieren, um sich zu schützen. In einem Kriegstrupp dienen sie je nach Art ihres Tieres als Kundschafter, Spione, Vorhut oder Hinterhalt-Kämpfer, die die hinteren Reihen angreifen.`,
      limits:[
        { label:"HARM", max:3 },
        { label:"SCARE (Erschrecken)", max:5 },
        { label:"TURN (Wandeln)", max:2, note:"Neue Challenge: passendes Tierprofil verwenden (siehe Quellenhinweis unten)." },
      ],
      tags:[ "Adlerfeder-Kapuze, Wolfsfell-Umhang oder Waranhaut (eagle feather hood, wolf hide cloak or monitor lizard skin)", "tierische Instinkte (animal instincts)", "feral-3" ],
      special:[
        { title:"VERBUNDENES TIER (BEAST BOND)", text:"Wird ein vom Turnskin kontrolliertes Tier verletzt, erhält der Turnskin painful-recoil (schmerzhafter-rückschlag) derselben Stufe." },
      ],
      threats:[
        { name:"SPY (Spionieren)", flavor:`Ein einzelnes Tier folgt der Gefährtenschaft aus der Ferne`, options:[
          `Der nahe Turnskin erfährt, wo die Gefährtenschaft ist, was sie tut und wohin sie unterwegs ist (Exposure/Enthüllung oder tracking-3)`,
          `Das Tier ergreift die Flucht (outrun-2 oder Blocked/Blockiert)`,
        ]},
        { name:"FIGHT (Kampf)", flavor:`Stößt mit krallenartigen Nägeln und gewetzten Fängen zu, sein tierischer Verwandter kämpft an seiner Seite`, options:[
          `Springt, rammt oder tritt jemanden zu Boden (prone-3 oder pinned-down-3)`,
          `Beißt, kratzt oder sticht eine verwundbare Stelle (wounded-3 oder mauled-3)`,
        ]},
        { name:"TURN (Wandeln)", flavor:`Zieht sein Tierfell über und schließt die Augen`, options:[
          `Zittert und schäumt, während er in wilde Raserei verfällt (erhält frenzy-2)`,
          `Verbreitet Schrecken unter allen, die ihn erblicken (scared-2)`,
          `Das Fell umhüllt ihn, während er zunehmend Tiergestalt annimmt (erhält turning-1)`,
        ]},
      ],
      source:`Hearts of Ravensdale I, Themenbereich Challenges, S. 303. Basisprofil für Craggen-Turnskins — Maol of the Boar, Ferika of the Vulture und Ethain of the Bear (siehe Kern-Enthüllung unten) sind reflavorte Instanzen mit unterschiedlichem Tier-Bezug (Eber/Geier/Bär); TURN sollte dann mit einem passenden Tierprofil kombiniert werden (z. B. Ethain mit „Protective Bear", Adventure 4, oder Ferika mit „Fabled Bird of Prey").`,
    },

  ],
  revelations:[],
  rewards:[],
  tips:[
    "Maol muss nicht zwingend get\u00f6tet werden \u2014 Vertreibung, Gefangennahme oder das Rauben seines Eberhaut-Umhangs sind gleichwertige Wege, die Bedrohung fürs Erste zu beenden. Halte fest, wie die Gruppe entscheidet: Das prägt die Review-Frage im Nachspiel.",
  ],
},

/* 8 --------------------------------------------------------- AFTERMATH */
{
  key:"aftermath", kind:"aftermath", page:"S. 387",
  title:"Nachspiel", en:"Aftermath",
  summary:"Rückkehr nach Kawa & in die Dales · Review-Fragen",
  readAloud:[],
  showImprovement:true,
  flow:[
    `Wird Maol getötet oder in die Flucht geschlagen, kehren die Helden nach Kawa zurück, um ihre Rückreise in die Dales vorzubereiten. Je nach ihrem Verhalten haben sie sich hier draußen in den Highlands vielleicht enge Freunde gemacht. Ist die unmittelbare Bedrohung durch die Turnskins gebannt, bietet <strong><span class="gloss" onclick="openGloss('nochika-ref')">Nochika</span></strong>, die Oberdruidin von Kawa, an, die Dales zu besuchen und ihr Wissen zur Bewahrung des Dalesfriedens beizusteuern — das heißt, sie kann in „The <span class="gloss" onclick="openGloss('barleytown')">Barleytown</span> Fair“ wieder auftauchen.`,
    `Nun, da ihre Reise nach Kawa abgeschlossen ist, müssen die Helden heimkehren. Sind sie besonders begeistert davon, die Highlands weiter zu erkunden, kannst du die Rückreise als weitere Reihe von Journeys spielen, nach denselben Regeln wie in „Durch die Highlands“ dargelegt. Andernfalls sollte diese Rückkehr erzählerisch abgehandelt werden und weitgehend ereignislos verlaufen.`,
    `Nehmt euch einen Moment Zeit, um das Abenteuer zusammenzufassen und Bilanz über alles Geschehene zu ziehen.`,
  ],
  npcs:[],
  challenges:[],
  extra:{ heading:"Fragen zum Rückblick", type:"list", items:[
    "Wie haben die Helden ihr Abenteuer in den Highlands gemeistert? Hat die Gefahr der Welt außerhalb der Dales sie verändert?",
    "Wie steht es um Cedargate? Hat die Painted Beast bleibenden Schaden an Abnoba Keep angerichtet? Werden sie weitere Angriffe aus den Highlands abwehren können?",
    "Hat Kerrid überlebt? Falls nicht, wie hat ihr Tod die Helden beeinflusst?",
    "Wie ist die Beziehung zwischen den Helden und den Kawa? Ist es ihnen gelungen, Freundschaften in den Highlands zu schließen?",
    "Was ist aus Maol geworden? Ist er geflohen, und falls ja, wohin, und was wird er als Nächstes tun?",
  ]},
  revelations:[],
  rewards:[],
  tips:[
    "Core Revelations 1 & 2 sollten spätestens jetzt bei der Gruppe angekommen sein — falls nicht, ist das Nachspiel ein guter letzter Moment, sie über Nochikas oder Riyoris Abschiedsworte noch einmal anklingen zu lassen.",
  ],
},

];

ADVENTURES.find(a=>a.id==="a5").scenes = A5_SCENES;
