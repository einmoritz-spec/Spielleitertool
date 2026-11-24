/* ============================================================
   EINFÜHRUNG & GUIDE TO THE CITY (Buchseiten 4–12)
   „City of Mist – Local Legends“ — deutsche Fassung.
   Felder: siehe /home/claude/ref/ll/gap_extras.md
   HTML im Text: <b>, <i>, <br> (wie in den Bezirksdateien).
   ============================================================ */
const GUIDE = {
  title:"Einführung & Guide to the City",
  pages:"S. 4–12",

  /* ---------- Introduction (S. 4) ---------- */
  introduction:{
    title:"Introduction",
    page:4,
    lead:"Es sind die Menschen auf der Straße, die ganz normalen Janes und Joes, die der Stadt ihr Leben geben.",
    paragraphs:[
      "Während die Mächtigen der Stadt — allmächtige Avatare und Sleeper-Politiker*innen — in ihren Elfenbeintürmen planen und intrigieren, schlurfen ihre Bewohner*innen Tag für Tag durch ihr Leben: Sie verdienen ihren Lebensunterhalt, bauen Beziehungen auf, suchen nach ihrem nächsten großen Durchbruch und erleiden, leider, die Folgen der Machenschaften größerer Kräfte.",
      "Doch die lokale Bevölkerung der unzähligen Stadtbezirke und Viertel ist mehr als bloße Spielfiguren in den Händen der größeren Akteure. Hier unten, auf den Straßen, werden die wahren Geschichten gelebt: von Schlaf und Erwachen, von Bosheit und Heldentum, von Liebe und Verzweiflung. Eltern hetzen mit ihren Kindern auf dem Weg zur Schule, Arbeiter*innen üben ihr Handwerk aus oder schieben den Tag über Papier, Liebende nehmen unter Tränen ein letztes Mal Abschied, und Ganoven schließen unter Autobahnbrücken und in dunklen Gassen zwielichtige Deals.",
      "Dort, in diesem Stimmengewirr aus Leben, regen sich Mythoi aus ihrem Schlummer und verleihen den ältesten legendären Archetypen und Motiven Macht.",
      "Bei euren Abenteuern in der Stadt wart ihr vermutlich schon im Blue-Collar Residential und habt die Industrial Zone durchstreift, doch die Straßen dieser Stadt bieten so viele weitere Anblicke, lebendig, farbenfroh, bedrohlich und seltsam. Dieses Buch widmet sich der Aufdeckung der Geheimnisse — mythischer wie weltlicher — der vielen Bezirke der Stadt. Jenseits der vertrauten Downtown-Skyline liegen viele Vororte und Gemeinschaften, jede ein eigener Schmelztiegel aus Kulturen und Ideen, aus Vergangenheit und Gegenwart, die ihre Geschichten vermischen und völlig neue Erzählungen hervorbringen. Und in jeder von ihnen wartet ein abscheuliches Verbrechen darauf, aufgeklärt zu werden, und ein bösartiger Gauner darauf, der Gerechtigkeit zugeführt zu werden."
    ]
  },

  /* ---------- What's in this book (S. 4) ---------- */
  whatsInBook:{
    title:"What's in this Book",
    page:4,
    intro:"Dieses Buch bietet neun Bezirke, die die Ins und Outs der obskureren und interessanteren Nachbarschaften der Stadt offenlegen. Jeder Bezirk enthält:",
    items:[
      {term:"How To Use This District", text:"Ein Abschnitt, der die Hauptthemen des Bezirks vorstellt und konkrete Vorschläge macht, wie er in eurer Serie vorkommen kann."},
      {term:"Lore", text:"Hintergrund zum Bezirk und dazu, was ihn einzigartig macht — einschließlich eines Blicks auf die Magie und Metaphysik, die jenseits des Nebels (Beyond the Mist) am Werk ist."},
      {term:"Custom Moves", text:"Eigene Moves oder optionale Regeln, die beim Erkunden des Bezirks gelten können."},
      {term:"Player Options", text:"Optionen für Spielfiguren aus dem Bezirk oder solche, die dort genug Zeit verbracht haben, um von seinen Eigenheiten beeinflusst zu sein — in Form neuer Theme Kits für Charaktererschaffung und -entwicklung."},
      {term:"Places of Interest", text:"Orte von Interesse im Bezirk: Wahrzeichen, die zu seinem urbanen Gesamtbild und Flair passen und als Kulissen für Fälle und Szenen im Bezirk dienen können."},
      {term:"Locals", text:"NPCs, die hier zu Hause sind, darunter mögliche Verbündete, Rivalen und Schurk*innen — ob Rifts oder Sleeper —, sowie Unbeteiligte, die sich und die Crew in Schwierigkeiten bringen können."},
      {term:"Chance Encounters", text:"Zufallsbegegnungen, die im Bezirk vorkommen können: Danger-Profile verschiedener Bedrohungsstufen für gewöhnliche legendäre oder weltliche Gegner auf den Straßen des Bezirks, etwa verirrte Monster oder alltägliches Drama."},
      {term:"District One-Shot Case", text:"Ein Ein-Sitzungs-Fall (One-Shot Case), der die einzigartigen Orte, Handlungsstränge und Widersacher des Bezirks vorstellt. Jeder Fall enthält Background, Iceberg-Diagramm, Hooks, Orte, Hinweise und Danger-Profile, die du brauchst, um ihn für deine Spielenden zu leiten. Die meisten Fälle sind darauf ausgelegt, in einer Sitzung gespielt zu werden — mit Ausnahme von <b>Amnesia Town</b> (Happyville), einem Fall in voller Länge, der mehrere Sitzungen dauern kann."}
    ]
  },

  /* ---------- Pin-Hinweis zur Crime Board Map (S. 5) ---------- */
  crimeBoardMap:{
    title:"Local Legends Crime Board Map",
    page:5,
    text:"Wenn du die <b>Local Legends Crime Board Map</b> verwendest, sind einige Dutzend Hinweise (und mehrere andere wichtige Story-Elemente) als gedruckte Ausschnitte dargestellt, die deine Spielenden an die Crime Board Map pinnen oder heften können. Immer wenn das <b>Pin-Symbol</b> neben einem Hinweiskasten oder Absatz erscheint, such den entsprechenden Ausschnitt im Umschlag, der der Crime Board Map beiliegt.",
    exampleBox:"Fragt man Rifts in Chinatown oder einen relevanten Kontakt nach Lü Dongbin, offenbart sich: Der Unsterbliche war stets offen über seine Mythos-Identität und betreibt einen Congee-Stand auf dem Night Market.",
    exampleNote:"Beispiel-Hinweiskasten aus dem Buch (mit Pin-Symbol; stammt aus dem Chinatown-Fall „An Antidote Foretold“)."
  },

  /* ---------- Bonusinhalte (S. 5) ---------- */
  bonusContent:{
    title:"Bonusinhalte",
    page:5,
    intro:"Neben den Bezirken enthält dieses Buch die folgenden Bonusinhalte:",
    items:[
      {term:"Forged & Framed", page:314, text:"Ein Fall in voller Länge in Fortune Row, der als <b>Backwards Mystery</b> (rückwärts erzähltes Rätsel) funktioniert: Statt einem Verbrecher nachzujagen, wird die Crew selbst als Verbrecher gejagt."},
      {term:"Four Small-Time Villains", page:292, text:"Ausarbeitungen von Schurken-Operationen, die du in jedem beliebigen Bezirk platzieren kannst. Es sind <b>Walter Stephenson</b>, der mörderische Rift des Geppetto; <b>Madeline Moretti</b>, der rachsüchtige Rift der Medusa; <b>Laura Cowle</b>, der rachegetriebene Rift des Robin Hood; und <b>Farida Jalal</b>, der Piraten-Rift des Sinbad the Sailor.", villainIds:["puppet_show","stone_cold_beauty","one_thousand_and_one_crimes","outlawed"]},
      {term:"Appendices", page:330, text:"Zum Schluss findest du in den Anhängen Indizes, die alle in diesem Buch verwendeten Mythoi sowie alle enthaltenen Danger-Profile und Theme Kits auflisten."}
    ],
  },

  /* ---------- How to use this book (S. 5) ---------- */
  howToUseBook:{
    title:"How to Use this Book",
    page:5,
    intro:"Du kannst Local Legends auf verschiedene Weise in deine Serie einbauen:",
    items:[
      {term:"Biete deinen Spielenden an, Charaktere aus dem Bezirk zu erschaffen.", text:"Wenn du eine neue Serie beginnst oder wenn eine*r deiner Spielenden einen neuen Charakter erschafft, kannst du Lore zum Bezirk anbieten, die sie in ihre Hintergrundgeschichten einbauen können — zusammen mit bezirksspezifischen Theme Kits für ihre Charakter-Builds."},
      {term:"Spiele spontane Szenen in einem Bezirk,", text:"wenn deine Crew unerwartet dort ankommt. Habe immer eine Begegnung parat, falls deine Spielenden plötzlich beschließen, zum Beispiel zum Tourist Trap oder in die Undertrash zu reisen. Sieh im Abschnitt Chance Encounters des Bezirks nach einsatzbereiten Dangers, oder lass sie mit einem der Locals aneinandergeraten oder interagieren."},
      {term:"Setze eine Szene, einen Fall oder sogar einen Story-Arc in den Bezirk.", text:"Du kannst Places of Interest oder Locals des Bezirks in deine eigenen City-of-Mist-Inhalte einbauen — mit einsatzbereiten Danger-Profilen und einzigartigen bezirksspezifischen Custom Moves."},
      {term:"Spiele einen der One-Shot-Fälle als Einstieg in den Bezirk.", text:"Wenn ein Bezirk die Neugier deiner Crew weckt, kannst du eine Sitzung dem lokalen Drama mit dem One-Shot-Fall des Bezirks widmen; danach kannst du entscheiden, ob ihr im selben Bezirk weitermacht oder weiterzieht."},
      {term:"Verbringe ein paar Sitzungen mit dem eingebauten Arc des Bezirks.", text:"Jeder Bezirk hat ein zentrales Problem oder eine brodelnde Spannung zwischen Fraktionen und Locals, bei deren Lösung die Crew helfen oder in die sie sich verwickeln lassen kann."},
      {term:"Unternimm eine stadtweite Tour der lokalen Legenden.", text:"Mach eine Pause vom Kampf gegen Avatare und Bedrohungen auf Stadtebene und führe deine Crew von Bezirk zu Bezirk, deckt ihre Geheimnisse auf und begegnet den Einzelnen und Gemeinschaften, die ihn einzigartig machen — während deine Crew dazu beiträgt, die Stadt zu einem besseren (oder zumindest interessanteren) Ort zu machen."}
    ],
    outro:"Auf welche Weise du Local Legends auch in dein Spiel einbaust: Dich erwarten wilde Begegnungen mit den faszinierendsten Rifts der Stadt. <b>Play to find out!</b>"
  },

  /* ---------- Inhaltsverzeichnis des Buches (S. 6–7) ---------- */
  tableOfContents:{
    title:"Inhaltsverzeichnis (Buchseiten)",
    pages:"S. 6–7",
    note:"Seitenzahlen der englischen Ausgabe. Nützlich, um Querverweise im Buch (z. B. „Seite 146“) zuzuordnen.",
    entries:[
      {title:"Introduction", page:4},
      {title:"Guide to the City", page:8},
      {title:"Chinatown", page:13, id:"chinatown", sub:[["Player Options",17],["Places of Interest",18],["Locals",26],["Chance Encounters",31],["Power Sets",33],["Tradition Themebook",34]]},
      {title:"An Antidote Foretold", page:38, id:"chinatown", isCase:true, sub:[["Background",38],["The Iceberg",39],["Depth 0: The Hooks",39],["Depth 1: Destined to Die",40],["Depth 2: Scavenger Hunt",41],["Depth 3: Deaths Await",45],["Aftermath",46]]},
      {title:"Fortune Row", page:47, id:"fortune_row", sub:[["Player Options",50],["Places of Interest",52],["Locals",59],["Heists in the City",67],["Chance Encounters",72],["Power Sets",73]]},
      {title:"All About the Mani", page:74, id:"fortune_row", isCase:true, sub:[["Background",74],["The Iceberg",76],["Depth 0: The Hooks",77],["Prep Sequence Locations",77],["Depth 1: The Approach",78],["Depth 2: Facing Justice",79],["Depth 3: Spinning Wheels",80],["Aftermath",82]]},
      {title:"Happyville", page:83, id:"happyville", sub:[["Player Options",87],["Places of Interest",89],["Locals",98],["Chance Encounters",102],["Power Sets",103]]},
      {title:"Amnesia Town", page:104, id:"happyville", isCase:true, sub:[["Background",104],["The Iceberg",106],["Depth 0: The Hooks",107],["Depth 1: Welcome to Happyville",108],["Depth 2: The Real Happyville",114],["Depth 3: Gatekeepers vs. Mara",117],["Depth 4: The Dement Scheme",120],["Aftermath",122]]},
      {title:"Independence", page:123, id:"independence", sub:[["Player Options",126],["Places of Interest",126],["Locals",129],["Chance Encounters",137],["Power Sets",137]]},
      {title:"The Unwanted Guest", page:138, id:"independence", isCase:true, sub:[["Background",138],["The Iceberg",139],["Depth 0: The Hooks",139],["Depth 1: The Dry Body",140],["Depth 2: Feeling for the Pulse",141],["Depth 3: Breathless",143],["Aftermath",144]]},
      {title:"La Colonia de Sombras", page:145, id:"colonia_sombras", sub:[["Player Options",148],["Places of Interest",149],["Locals",152],["Chance Encounters",158],["Power Sets",159]]},
      {title:"The Black Butterfly Murders", page:160, id:"colonia_sombras", isCase:true, sub:[["Background",160],["The Iceberg",161],["Depth 0: The Hooks",162],["Depth 1: Night Moves",162],["Depth 2: Fools or Foes?",165],["Depth 3: Tamoanchan",166],["Aftermath",168]]},
      {title:"The Campus", page:169, id:"campus", sub:[["Player Options",173],["Places of Interest",174],["Locals",179],["Chance Encounters",184],["Power Sets",185],["Esoterica Themebook",186]]},
      {title:"Words Fail", page:190, id:"campus", isCase:true, sub:[["Background",190],["The Iceberg",191],["Depth 0: The Hooks",192],["Depth 1: Judge a Book",192],["Depth 2: Passing Notes",194],["Depth 3: Fighting Ignorance",196],["Aftermath",198]]},
      {title:"The Sunken City", page:199, id:"sunken_city", sub:[["No Mist to Speak of (Almost)",202],["Orichalcum",202],["Reaching the Sunken City",203],["Player Options",205],["Places of Interest",206],["Locals",213],["Chance Encounters",223],["Power Sets",224]]},
      {title:"Leviathan's Sorrow", page:225, id:"sunken_city", isCase:true, sub:[["Background",225],["The Iceberg",226],["Depth 0: The Hooks",226],["Depth 1: Blood in the Water",227],["Depth 2: Into the Deeps",230],["Depth 3: The Belly of the Leviathan",232],["Aftermath",234]]},
      {title:"The Undertrash", page:235, id:"undertrash", sub:[["Player Options",238],["Places of Interest",240],["Locals",245],["Chance Encounters",251],["Power Sets",252]]},
      {title:"Where Light Fears to Tread", page:253, id:"undertrash", isCase:true, sub:[["Background",253],["The Iceberg",254],["Depth 0: The Hooks",255],["Depth 1: Bloodstain Pattern Analysis",255],["Depth 2: The Trail Grows Cold",257],["Depth 3: Into the Belly of the Beast",261],["Aftermath",262]]},
      {title:"Tourist Trap", page:263, id:"tourist_trap", sub:[["Player Options",266],["Places of Interest",267],["Locals",270],["Chance Encounters",279],["Power Sets",281]]},
      {title:"The Maestro of Chalk", page:282, id:"tourist_trap", isCase:true, sub:[["Background",283],["The Iceberg",284],["Depth 0: The Hooks",284],["Depth 1: The First Labor",284],["Depth 2: The Second Labor",287],["Depth 3: The Third Labor",289],["Aftermath",291]]},
      {title:"Puppet Show", page:292, id:"puppet_show", isVillain:true},
      {title:"Stone-Cold Beauty", page:298, id:"stone_cold_beauty", isVillain:true},
      {title:"One Thousand and One Crimes", page:304, id:"one_thousand_and_one_crimes", isVillain:true},
      {title:"Outlawed", page:309, id:"outlawed", isVillain:true},
      {title:"Forged and Framed", page:314, id:"forged_framed", isCase:true, sub:[["Background",315],["The Iceberg",316],["Depth 0: The Hooks",317],["Depth 1: Falsely Blamed",318],["Depth 2: Breach Before the Flood",322],["Depth 3: Follow the Clay Crumbs",325],["Depth 4: Standing on a Tower of Clay",327],["Aftermath",329]]},
      {title:"Appendices", page:330, sub:[["Mythoi in this Book",331],["Dangers in this Book",337],["Theme Kits in this Book",340],["Backers List",341]]}
    ]
  },

  /* ---------- GUIDE TO THE CITY (S. 8–12) ---------- */
  cityGuide:{
    title:"Guide to the City",
    pages:"S. 8–12",
    narrator:"Lance Sullivan",
    narratorNote:"Der Stadtführer ist im Buch in der Ich-Form von Lance Sullivan geschrieben, investigativer Reporter beim <i>City Herald</i> — mit seinem alten Mustang „Ross“ und seinem Fotografen Sánchez. Sein Ton: sarkastisch, kämpferisch, selbstironisch. Gut als Vorlese-Text oder als „Zeitungskolumne“ für die Spielenden geeignet.",
    quote:"Die Stadt ist riesig, und sie scheint von allem ein bisschen etwas zu haben. Jede Kultur der Welt hat hier einen Fuß in der Tür, alle begraben unter einem Nebel, der sich nie zu lichten scheint. Jedes Viertel und jede Zone scheint eine eigene, abgekapselte kleine Welt zu sein, jeder Bezirk eine Enklave mit eigenen Kämpfen, Schurken und, hin und wieder, Helden.",
    intro:[
      "Mein Name ist Lance Sullivan, und ich bin investigativer Reporter beim <i>City Herald</i>. Ich bin in meinem alten Mustang, den ich „Ross“ getauft habe, durch jeden Winkel dieses Ortes gefahren, habe an jeder Straßenecke Hotdogs gegessen und in jeder Spelunke meinen Kummer ertränkt. Ross, ich und mein treuer Fotograf Sánchez sind eure fachkundigen Führer durch diese verrückte Stadt, die wir lieben zu hassen. Ein Ort, an dem Träume buchstäblich wahr werden können und Albträume durch die Gassen schleichen und in den Vorstandsetagen umgehen. Graben wir uns also hinein, ja?"
    ],

    /* Allgemeine Stadtteile: „Was ihr vielleicht schon wisst“ */
    alreadyKnow:{
      title:"What You May Already Know",
      subtitle:"Was ihr vielleicht schon wisst",
      intro:"Vieles an der Stadt ist selbst Außenstehenden und Neuankömmlingen wohlbekannt.",
      areas:[
        {id:"downtown", name:"Downtown", text:[
          "Da sind die geschäftigen Straßen und Hochhäuser von Downtown, wo jede*r irgendeine Quest für irgendeinen Lehnsherrn oder Gott übernommen zu haben scheint. Zu Fuß oder im Auto durch das Gewühl zu fahren kann einen lebendig fühlen lassen, aber es kann sich auch anfühlen, als sei man der oder die Einzige, die nicht weiß, wohin es geht. Selbst ich, ein Mann, der ständig in irgendein episches Unterfangen verwickelt ist, kann mich unter den Massen verloren fühlen, geblendet von den Lichtern. Andererseits heißt es, Downtown schlafe nie — mit einer reichen Nachtleben-Kultur von Weltruf."
        ]},
        {id:"blue_collar", name:"Blue-Collar Residential", text:[
          "Dann gibt es die Blue-Collar-Wohngebiete. Weite Flächen mit günstigeren Mietwohnungen, schlecht gepflegten Familienhäusern und kämpfenden kleinen Geschäften. Kein Wunder, dass hier das Verbrechen gedeiht. Bei so wenigen Jobs haben angehende Kriminelle nichts anderes zu tun. Das organisierte Verbrechen hat in diesen Bezirken oft seine Krallen drin, und die Polizei steckt so tief in seiner Tasche, dass ihr wahrscheinlich die Luft ausgeht. Und doch leben hier viele von uns, und wann immer ich auf der Suche nach Einblicken in einen Fall von uns „Unterschichtsleuten“ bin, gehe ich hierher.",
          "Einige benannte Beispiele sind <b>Miller's Square</b>, <b>Whitecliff</b>, <b>Little Italy</b> und <b>Wildknock</b>. Jedes hat seinen eigenen Charakter. Miller's Square zum Beispiel ist bekannt für seine unterfinanzierten und ignorierten Dienste. Die Polizei kann dort keines der Verbrechen stoppen, und die Straßengangster rücken nach. Seltsame Straßengangster, um ehrlich zu sein. Aber das Viertel hat immer noch einen Gemeinschaftssinn, ganz zu schweigen von großartiger Pizza. Ein Diamant im Rohzustand.",
          "Für manche Leute wird es noch schlimmer. Wohnsiedlungen in den Vororten wie <b>Cross End</b>, bequem weit weg vom Stadtkern und hinter sanften Hügeln versteckt, sind beinahe Betondschungel, in denen verwilderte Gangs die Straßen beherrschen und die Polizei sich kaum hineinwagt. Vor langer Zeit von Missionaren besiedelt, ist dort nichts Heiliges mehr übrig — außer vielleicht dem Wunsch dieser armen Seelen zu überleben. Auf der anderen Seite könnte man in <b>Ocean Heights</b> wohnen, einer für alle Absichten und Zwecke toten Nachbarschaft. Einst als aufstrebender Standort für Strandimmobilien vermarktet, ist sie nie richtig in Gang gekommen, und Bauträger versenkten Milliarden in das, was heute heruntergekommene, veraltete Apartmenthäuser sind — die Art von Immobilienchance, die die schlimmsten Unterwelt-Geldgrapscher anzieht. Von dem Ort würde ich mich fernhalten."
        ], examples:["Miller's Square","Whitecliff","Little Italy","Wildknock","Cross End","Ocean Heights"]},
        {id:"wealthy", name:"Wo die Reichen wohnen", text:[
          "Wo wohnen also die Reichen, richtig? Manche haben Villen auf den Hügeln mit Blick über die Stadt, andere schicke Penthäuser in Downtown. <b>Parkside</b> ist ein schöner, grüner und gut bewachter Stadtteil — dort würdest du wohnen wollen, wenn du könntest, neben all den wohlhabenden „aufrechten“ Bürger*innen der Stadt. <b>Lakeside Drive</b> und <b>Fritzberg</b> sind mittelklassiger, aber im Vergleich zur Lebensqualität der meisten Menschen in der Stadt immer noch ziemlich traumhaft."
        ], examples:["Parkside","Lakeside Drive","Fritzberg"]},
        {id:"old_quarter", name:"Old Quarter", text:[
          "Aber das alte Geld sitzt, passenderweise, im <b>Old Quarter</b>. Das war einst die Downtown der Stadt, in den alten Tagen. Es trägt noch immer die emotionalen Narben der Gründung dieser Metropole, mit Echos älterer Legenden, die immer wieder in den Schatten hervorkriechen. Wenn du nach vergrabenen Informationen suchst, wem was gehört oder wer zu welcher Geheimgesellschaft gehört, ist das Old Quarter der Ort, an dem du zu graben beginnst. Historische Gesellschaften, wohlhabende Kunstmäzene und blaublütige Eliten gehen durch diese Straßen. Selbst ein so antiquiertes Auto wie mein alter Mustang wirkt hier fehl am Platz. Der Ort ist ein Überbleibsel einer früheren Ära."
        ]},
        {id:"industrial", name:"Industrial Zone", text:[
          "Ich schätze, damit bleibt die Industrial Zone, das mechanische Herz der Stadt. Erstickt von Verschmutzung, Dreck und Korruption — ich habe hier viele Nächte auf der Jagd nach Spuren für Storys verbracht. Alles gehört den Konzernen. Alles ist Brennstoff für die Fabriken. Aber der Ort hat eine noch zwielichtigere Seite, wenn du es glauben kannst. Nach Sonnenuntergang sprenkeln Fight Clubs, Underground-Raves und Fetisch-Dungeons die Landschaft. Du musst nur wissen, wo du suchen musst."
        ]}
      ]
    },

    /* Places worth seeing: Überleitung zu den Bezirken */
    placesWorthSeeing:{
      title:"Places Worth Seeing",
      subtitle:"Sehenswerte Orte",
      text:[
        "Unsere Stadt ist die Heimat vieler, vieler Gruppen von Menschen. Ihre Bezirke bilden kulturell zentrierte Gebiete, die Gemeinschaften von Einwander*innen, Ahnungslosen, Verlassenen und, in einem Fall, Risikofreudigen fördern. Es gibt Orte von immenser intellektueller und spiritueller Bedeutung. Orte, an denen Menschen sich seit Jahrhunderten bemühen, eine Heimat zu schaffen. Verdammt, es gibt sogar Orte, die nicht einmal auf der Karte stehen. Eine Stadt unter der Stadt. Eine verlorene Zivilisation auf dem Grund der Bucht. Ja, diese Art seltsames Zeug. Das ist es, worin ich mit euch wirklich eintauchen will."
      ]
    },

    /* Die neun Bezirke. districtId passt zu DISTRICTS[].id in core.js */
    districts:[
      {districtId:"chinatown", name:"Chinatown", page:9, text:[
        "Westlich vom Old Quarter, am Nordufer des Flusses entlang, erstreckt sich das, was die Leute allgemein Chinatown nennen. Es beginnt am <b>Chinatown Gate</b>, einem Markierungstor, wie man es aus vielen anderen Städten kennt — doch hier scheint es eine kraftvolle übernatürliche Präsenz zu haben. Andere, empfindsamere Ermittler*innen haben mir erzählt, das Tor schütze Chinatown vor dem rastlosen Einfluss der Stadt und mache es zu einem Ort, an dem seltsame Magie umhergeworfen werden kann und Leute auf Luft gehen können, wenn sie es zu lernen wissen. Alle hier, selbst jene, die noch nicht sehen können, was vor sich geht, haben ein Gefühl dafür, dass das Übernatürliche überall ist. Und doch scheinen sie nicht in Panik zu geraten. Tatsächlich halten manche an den Geschichten ihrer Kulturen fest, um Orientierung im Umgang mit Dämonen, Drachen und anderen gefährlichen Wesen zu finden.",
        "Mein Rat wäre wohl: Tritt in Chinatown vorsichtig auf. Außenstehende finden sich allzu leicht mitten in einer Situation zwischen den lokalen <b>Tongs</b>, den Verbrecherfamilien, wieder. Und bei dem dünnen Schleier an diesem Ort können Menschen die magischen Dinge, die du tust, sehen, darauf reagieren und sich sogar daran erinnern. Ein erschreckender Gedanke, wenn man tatsächlich dort ist und einer fliehenden Spur nachjagen muss. Man fühlt sich verwundbar, bloßgestellt, als laufe man in eine Falle. Ich empfehle, sich mit einer der großen Familien einzulassen, die den Bezirk leiten, wenn du dort häufiger operieren willst. Die traditionsverbundenen <b>Lin</b> und die kriminell vernetzten <b>Jing</b> sind die Hauptakteure in diesem Teil der Stadt, auch wenn die wohlhabenden <b>Chows</b> ihre Finger in einer Reihe teurer Kuchen haben. Manche sagen, die Chows seien mit den Mächtigen der Stadt im Bunde, aber die gruseligen Trenchcoat-Brigaden scheinen in Chinatown — soweit ich gesehen habe — keine Präsenz zu haben."
      ], keywords:["Chinatown Gate","Tongs","Lin","Jing","Chows"]},

      {districtId:"fortune_row", name:"Fortune Row", page:9, text:[
        "Direkt die Küste hinauf, noch innerhalb der Stadtgrenzen, liegt ein Ort, der dazu gebaut wurde, dich zu verführen, deinen Schuss zu wagen, die Würfel rollen zu lassen und zu sehen, was passiert. Ein Ort, an dem jedem, der groß genug träumt, sein Glück zu versuchen, das Geld abgesaugt wird. In Fortune Row scheint Glück selbst eine wirkende Kraft zu sein, die sich entlang ihrer berühmten Hauptstraße, der Row, durch den Bezirk windet, welche sich wie eine Schlange krümmt; die Hauptstraße heißt tatsächlich <b>die Snake</b>, und sie hat Biss und Gift, die dazu passen. Geschmückt mit grellen, glitzernden Casinos ist die Snake eine Kloake des Lasters. All diese Versuchung kann für manche Menschen zu viel sein — ich habe mit Spieler*innen gesprochen, die so vom großen Coup angezogen waren, dass sie bereit sind, alles zu tun, um ihn nach Hause zu holen, und sogar auf wirklich verbotene Dinge zu wetten. Und die, die nicht dafür spielen können? Stehlen es. Von Heists bis Einbrüchen, von Kartenhaien bis Trickbetrügern: Kriminalität strömt aus jeder getönten Glastür der Casinos.",
        "Bei all ihrem unzivilisierten Laster und den Abwärtsspiralen der Verelendung gehe ich trotzdem immer wieder nach Fortune Row zurück. Vielleicht träume ich hier einen unmöglichen Traum, aber ich habe dieses Gefühl, ich könnte sie reparieren. Wie ein „John“ mit seiner Lieblings-Sexarbeiterin fühle ich mich irgendwie besonders. Ich bin derjenige, der die Fehler der Row richten und helfen könnte, sie in einen einfacheren, gesünderen Ort des Vergnügens zu verwandeln, an dem man am Ende der Woche seinen Gehaltsscheck verbrennt. Und ich muss zugeben: Die Spiele machen Spaß, selbst wenn ich verliere."
      ], keywords:["die Snake","Casinos","Heists"]},

      {districtId:"happyville", name:"Happyville", page:10, text:[
        "Hattest du je einen Traum oder Albtraum, den du nicht abschütteln konntest? Ein Gefühl von Furcht in der Magengrube, dass etwas nicht stimmt? Ich war an dem Ort, aus dem diese Gefühle kommen — einem kleinen Vorort nördlich der Stadt namens Happyville, wenn man es glauben kann. Eine Stadt mit ihrem eigenen kleinen Bürgermeister und ihrer eigenen Gemeinschaft, und ich sage dir, sie verbergen dort etwas. Etwas Schreckliches, wenn mein journalistischer Instinkt stimmt. Ich weiß nur noch nicht, was es ist. Wenn du hingehst — und pass auf dich auf, es fühlt sich an wie eine Falle —, wirst du es selbst erfahren. Alles wirkt unecht. Gepflegt, fabriziert, damit es glaubhaft erscheint. Das Leben der Leute wirkt wie aus einer gruseligen Fernsehserie, die mitten in der Nacht weiterläuft. Und sobald du anfängst, an dieser unwirklichen Wirklichkeit zu stochern und zu bohren, legst du einen Ort frei, an dem nichts ist, wie es scheint.",
        "Schau, ich kann dir nicht sagen, was in Happyville wirklich vor sich geht. Nur dass die Regierung dort besonders aktiv zu sein scheint und dass die Kraft, die dich vergessen lässt, unglaublich stark ist. Ich habe in Happyville sogar Legenden wie mich getroffen, die ihre übernatürliche Natur völlig verleugneten, ganz verloren für die Welt. Seltsam ist, dass ich das Gefühl habe, irgendeine Kraft versuche, die Menschen aus dem Vorstadttraum zu wecken, den die Regierung durchzusetzen versucht. Ich habe Augen in Dreiecken an Wände gesprüht gesehen, neben Parolen, die die Leute anflehen aufzuwachen. Andeutungen, dass alles ein Traum ist. Ich habe dort mehr als einmal die Natur meiner eigenen Wirklichkeit in Frage gestellt."
      ], keywords:["Vorort","Regierung","Vergessen","Augen in Dreiecken"]},

      {districtId:"independence", name:"Independence", page:10, text:[
        "Independence grenzt entlang der Küste an Fortune Row, von wo aus Ausläufer der Kriminalität in diese schwarze Gemeinschaft greifen, die in der Gegend seit nahezu so langer Zeit gedeiht, wie es überhaupt eine Stadt gibt. Doch die wahren Bedrohungen für Independence sind die Regierungsoperationen, die damit experimentieren, den Bezirk auf vielfältige Weise zu unterdrücken. Unterdrückung zieht mich an wie die Motte das Licht, und ich sage dir: Wenn du dich gegen jene in Autorität werfen willst, die Menschen unten halten, ist Independence der Ort dafür. Sie stehen dort am Rand einer Revolution.",
        "Und doch sind die lokalen Politiken nicht so einseitig wie ein simpler Kampf zwischen der Gemeinschaft und den Leuten oben. Manche arbeiten mit der Regierung. Manche leiten kriminelle Syndikate. Manche können sich schlicht nicht aufraffen zu handeln. Es liegt etwas Finsteres in der Luft oder im Wasser, etwas, das sie vom Handeln abzuhalten scheint. Ich vermute, würden die Locals sich zusammentun, könnten sie den metaphorischen Riesen erschlagen — aber vielleicht kämpfe ich hier gegen Windmühlen."
      ], keywords:["Regierungsoperationen","Revolution","Windmühlen"]},

      {districtId:"colonia_sombras", name:"La Colonia de Sombras", page:10, text:[
        "Sie nennen es La Colonia de Sombras, die „Gemeinschaft der Schatten“. Ein poetischer Name für einen lebendigen Bezirk, der den Großteil der lateinamerikanischen Bevölkerung der Stadt beherbergt. Sánchez ist hier aufgewachsen und erzählt mir, dass hinter den Kulissen viel los ist, wie man es erwarten würde. Die Gemeinschaft findet sich unter dem Daumen eines gewissen <b>Uncle Tez</b> wieder, einem der bestetablierten Verbrecherbosse der Stadt. Alles läuft auf Tez hinaus, der seinen Daumen auf fast jeder Waagschale hat. Schutzgeldzahlungen sind die Norm, sein Wort ist Gesetz, und doch lieben ihn manche und schreiben ihm zu, ihnen ein Leben ermöglicht zu haben, das in der Stadt lebenswert ist. Man stelle sich das vor.",
        "Trotz Tez' furchterregendem Ruf hat La Colonia eine Retterin auf den Straßen. Eine einsame Heldin bekämpft das Verbrechen und arbeitet sich als Vigilantin zu Uncle Tez hoch. Ich habe nur Blicke auf die Frau mit der Luchador-Maske erhascht, die sie <b>La Águila</b> nennen. Sánchez sagt mir, sie sei bloß ein Mythos, an den die Locals gern glauben würden, aber ich habe über die Jahre mehr als ein paar von denen getroffen, und ich weiß, was ich gesehen habe. Eine muskulöse Frau auf einem Dach, die einem Kriminellen Antworten aus dem Leib prügelt. Ein inspirierender Anblick, um ehrlich zu sein. Vielleicht reicht sie nicht, um Uncle Tez zu stürzen, aber vielleicht kann sie andere inspirieren, sich zu versammeln und es mit ihm aufzunehmen."
      ], keywords:["Uncle Tez","La Águila","Luchador-Maske"]},

      {districtId:"campus", name:"The Campus", page:11, text:[
        "Das Old Quarter schmiegt in sich den <b>Campus</b> ein, eine ganz andere Welt, abgetrennt vom Alltagstrott der Stadt. Als Universität, an deren Namen sich niemand zu erinnern scheint, ist er ein Nexus aus Wissen, Weisheit und vor allem Geheimnissen. Verbotenes Wissen gedeiht hier und breitet sich aus und vervielfacht sich wie ein Virus. Manche sagen, der Campus bewirke das, weil das Land selbst an eine alte Geschichte gebunden sei. Da bin ich mir nicht so sicher. Ich glaube, all der Standesdünkel im Old Quarter hat die Leute verschlossen und seltsam gemacht.",
        "Wie auch immer: Hier findet man intellektuelle Expertise, geschliffen wie eine Klinge, die sich hinter dem Elfenbeinturm des modernen Bildungssystems versteckt. Und doch spielen sie alle weit ältere Spiele. Ich habe Grund zu der Annahme, dass viele Mitglieder von Lehrkörper und Personal der Universität in Geheimgesellschaften verwickelt sind. Und nicht nur in einer. Dutzende Geheimorden scheinen in der Gegend aktiv zu sein, von scheinbar weltlichen Studentenverbindungen bis zu wahrhaft uralten Mysterienkulten. Was sie vorhaben, weiß ich nicht. Vielleicht nichts, vielleicht alles. Vielleicht wissen sie es selbst nicht. Vielleicht üben sie ihre esoterischen Rituale aus Gründen aus, die längst in der Zeit verloren gegangen sind. Alles, was ich weiß: Wenn ich eine kluge Person brauche, die sich ein altes Buch oder eine Keilschrifttafel ansieht, ist dies der Ort, an dem solche Dinge Gewicht haben."
      ], keywords:["Old Quarter","Geheimgesellschaften","Verbotenes Wissen"]},

      {districtId:"sunken_city", name:"The Sunken City", page:11, text:[
        "Ich sagte ja, es gibt einen Stadtbezirk auf dem Grund der Bucht, richtig? Er heißt die <b>Sunken City</b>, und das ist wahrscheinlich das erste Mal, dass du davon hörst. Schwer zu erreichen (du musst bei dieser wirklich deine Recherche machen) ist es ein Ort, den die graue Trostlosigkeit der Stadt nicht erreichen kann. Manche sagen, es sei Atlantis, aber das klingt weit hergeholt. Doch wenn man zu den unmöglich konstruierten Türmen unter einer Glaskuppel auf dem Meeresgrund hinaufblickt, fängt man an, sich zu fragen. Die Sunken City ist ein Ort, der aus einem Menschen alle möglichen wilden und seltsamen Ideen hervorlockt und ihn wagen lässt, über seine Grenzen hinaus zu träumen. Normalerweise bin ich williger als die meisten, jeden Drachen zu erschlagen, der des Weges kommt, aber als ich einmal in der Sunken City war, hatte ich das Gefühl, ich könnte einen Drachen zähmen, und machte mich beinahe auf die Suche nach einem. Ich konnte nicht aufhören, an all die großartigen Dinge zu denken, die ich vollbringen könnte.",
        "Und vielleicht ist das die Gefahr. Ich bin anfälliger für Hybris als die meisten, aber lass dich jetzt warnen: Dort draußen zu sein, fern der Stadt und ihren erdrückenden, aber letztlich erdenden Lasten, völlig losgelöst — das ist etwas anderes. Unter den Kuppeln ist alles möglich, auch wirklich schreckliche Dinge. Es gibt dort Bedrohungen, die so gewaltig scheinen, dass ich sie fast lieber vergessen würde, als wirklich zu versuchen, sie aufzuhalten. Es gibt Monster, Weltuntergangsmaschinen und furchterregende Prophezeiungen. Alles ist möglich, und alles könnte schlicht zu viel sein."
      ], keywords:["Atlantis","Glaskuppel","Hybris"]},

      {districtId:"tourist_trap", name:"Tourist Trap", page:12, text:[
        "Oh, du dachtest, Fortune Row sei der Teil der Stadt, der dazu entworfen wurde, dir in Rekordtempo Geld und Würde abzuluchsen? Dann warst du wohl noch nie im Tourist Trap, oder? Das hier ist es. Das hier ist die Prüfung deines Willens. Hier verlierst du dich in einer endlosen Spirale aus Wahnsinn und Zügellosigkeit, geboren aus ungebundenen Begierden und fabrizierter Freude. Doch zuerst wirst du fast alles tun, wozu du dich nie herablassen wolltest. Tourist Trap ist genau das — eine Falle. Eine Falle für deine Seele, und es gibt nicht einmal einen übernatürlichen Grund dafür. Es ist einfach die menschliche Natur.",
        "Wie Fortune Row zieht sich Tourist Trap an der Küste entlang, diesmal auf der Südseite des Flusses. Es hat ein echtes Ozean-Flair, mit einer Surfer-Gemeinschaft und einem Wasserpark. Manche würden sogar sagen, seine Promenade sei familienfreundlich und einfach ein spaßiger Ort, um am Wochenende mit den Kindern hinzugehen. Klar, geh hin. Hör nicht auf mich. Teste dich an seinen Versuchungen, seinen Betrüger*innen und seinen gefälschten Schatzsuchen. Du wirst sonnenverbrannt zurückkehren, mit leeren Taschen und mit Erinnerungen an einige schreckliche Dinge, die du nie hättest tun sollen — aber mit einem schwachen Lächeln im Gesicht, belügst du dich selbst, indem du immer wieder sagst, es sei es wert gewesen, nur um dir nicht eingestehen zu müssen, was für ein schrecklicher Fehler das war."
      ], keywords:["Promenade","Surfen","Wasserpark","Schatzsuchen","Betrüger*innen"]},

      {districtId:"undertrash", name:"The Undertrash", page:12, text:[
        "Der buchstäbliche Unterleib jeder Metropole wie der Stadt ist ein unmöglich komplexes Netz aus U-Bahn- und Kanalisationstunneln, stillgelegten Wartungsschächten und provisorischen Behausungen für Obdachlose. Die <b>Undertrash</b> ist die Quintessenz dieser verflochtenen Infrastruktur und der chthonischen Legenden, die davon angezogen werden. Sie ist zu einem unterirdischen Reich aus kriegführenden Stämmen, Möchtegern-Königen und huschenden Monstern in der Dunkelheit geworden.",
        "Ich bin ein paar Mal dort hinuntergegangen, auf der Jagd nach einer Story, und habe mich nie wirklich daran gewöhnt. Dennoch sind die Menschen, die die Undertrash zu ihrem Zuhause machen, oft mit Kräften verbunden, die alt sind. Uralt. Weise. Sie haben ein tieferes Verständnis unserer Ursprünge und vielleicht sogar unserer Zukunft, als wir ihnen zutrauen. Wenn du nach den Geschichten suchst, die der frühen Menschheit Hoffnung und Furcht brachten, ist die Undertrash der Ort, wo du suchen solltest. Sie ist auch der Ort, an den du gehst, wenn du eine Unterwelt, ein Jenseits oder irgendeine Art Hölle suchst. Alles Dunkle, Düstere und Unterirdische findet in der Undertrash sein Zuhause."
      ], keywords:["U-Bahn","Kanalisation","Stämme","Unterwelt"]}
    ],

    /* Schlussabsatz nach dem Strich „—“ (S. 12) */
    closing:{
      text:"Das ist alles, was ich im Moment für euch habe. Es gibt da draußen gute Leute und unglaubliche Dinge zu sehen, aber ich werde nicht lügen: Diese Stadt bietet für Leute wie uns mehr Gefahren als Annehmlichkeiten. Doch für mich liegt der Trost darin zu wissen, dass ich die Wahrheit ausgegraben und das Schmutzige und Widerwärtige ans Licht gezerrt habe. Sonnenlicht ist das beste Desinfektionsmittel, heißt es. Wenn wir jetzt nur noch diesen gottverdammten Nebel loswerden könnten …",
      signature:"— Lance Sullivan, <i>City Herald</i>"
    }
  },

  /* ---------- Hinweise für die Darstellung / Quelle ---------- */
  sourceNote:"Quelle: City of Mist – Local Legends, Introduction (S. 4–5) und Guide to the City (S. 8–12). Abschnitt „Table of Contents“ (S. 6–7) als Seitenverzeichnis übernommen. Keine Handouts; Seitenhintergründe sind Dekoration."
};
