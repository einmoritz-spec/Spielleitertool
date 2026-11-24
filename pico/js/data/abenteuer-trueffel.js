/* Pico – Eigenes Abenteuer: „Trüffel für die Nacht der Farben“ (Hogwild, S. 272). Für einen Abend, Larven-Käfer (25 Nektar). */
var PI_AB = window.PI_AB || {};
PI_AB.trueffel = {
  id: "trueffel",
  t: "Trüffel für die Nacht der Farben",
  reich: "hogwild",
  c: "#c76f00",
  img: "reich/hogwild",
  kurz: "Heute Nacht ist im Saumwald die Nacht der Farben – aber die Trüffel sind nicht gekommen. Eine Spur führt durch die Schweinischen Tiefen hinab in den Wurzelbau, zu einem Söldner, der eine Regel gebrochen hat, und zu einem alten Eber, der sehr, sehr hungrig ist.",
  eckdaten: [
    ["Spieler", "4 fertige Käfer, bis zu 6"],
    ["Dauer", "ein Abend, 3–4 Stunden"],
    ["Stufe", "Larve, 25 Nektar (S. 102)"],
    ["Reich", "Der Hogwild (S. 272)"],
    ["Spielarten", "5 Szenen, 1 Reise, 1 Montage"],
    ["Gefahren", "Raubpflanzen, Miniatur-Söldner, Erdbrecher-Wildschwein"]
  ],

  /* ---------- Vorbereitung ---------- */
  vorbereitung: [
    {t:"h", x:"Worum es geht"},
    "Einmal die Woche feiern die Zwei-in-Einer im Saumwald die **Nacht der Farben** (S. 279): Feuerwerk, Nusswein, ein alchemistischer Wettstreit um eine neue Farbe – und geröstete Trüffel aus den Schweinischen Tiefen. Wie die Trüffel jede Woche ankommen, hat noch nie jemand gesehen.",
    "Heute ist Festtag, und der Trüffelhügel hinter Sizzlin' Sams ist leer. Cogtooth Carlisle, der älteste Alchemist der Zwei-in-Einer, bittet die Käfer, bis Sonnenuntergang herauszufinden, was passiert ist – und die Trüffel zu holen.",
    {t:"h", x:"Zeitdruck"},
    "Nutzt die tickende Uhr der Reise (S. 85) für den ganzen Tag. Die Käfer brechen bei **Tick 1** (früher Morgen) auf. Die Nacht der Farben beginnt mit **Tick 5** (Sonnenuntergang). Massif kann die Bande nach dem Finale in einem einzigen Tick durch seinen Tunnel zurück zum Saumwald bringen. Kommen die Käfer zu spät, fällt das Fest nicht aus – aber es fängt ohne Trüffel an, und Cogtooth ist sehr enttäuscht (und sehr angesengt).",
    {t:"h", x:"An die Spielerzahl anpassen"},
    {t:"skal"},
    {t:"h", x:"Was wirklich los ist"},
    {t:"tint", b:[
      "**Die Lieferung:** Seit Jahren bringt **Massif**, ein fast blinder Kometennasen-Maulwurf, die Trüffel aus einer Trüffelgrube in den Schweinischen Tiefen durch einen langen Tunnel unter dem Wurzelbau bis zum Trüffelhügel hinter Sizzlin' Sams. Bezahlt wird er mit Goldflitter, den die Zwei-in-Einer bei ihren Versuchen mit dem Philosophenbaum herstellen. Massif liebt goldenen Schatz (S. 283).",
      "**Der Diebstahl:** **Hugo Heaves**, eine Tarantel bei den Klitzekleinen Söldnern (S. 277), hat einen Seitengang gegraben und eine Duftspur aus Trüffelkrümeln gelegt. Massif folgt Gerüchen, nicht Wegweisern – und liefert seit drei Tagen brav in Hugos Versteck, eine Wurzelkammer direkt unter dem Klitzekleinen Käfig. Hugo will die Trüffel in den Käfig schmuggeln und teuer an die Söldner verkaufen. Genau das hat Söldner-Zar Red Morris verboten: Trüffelschmuggel in den Käfig, *besonders über den Geheimeingang zum Wurzelbau*, wird mit Verbannung bestraft (S. 277).",
      "**Die Gefahr:** Der Duft von drei Tagesladungen Trüffel in einer einzigen Kammer hat **Altzahn** angelockt, einen alten Erdbrecher-Eber mit weißen Haarbüscheln um die Lefzen (S. 280, S. 234). Altzahn gräbt sich seit gestern durch die Erde auf das Versteck zu. Die Regenwürmer von Undulate spüren die Erdbewegung (S. 284) und haben Angst, dass der Eber ihre Stadt gleich mit umgräbt."
    ]},
    {t:"h", x:"Ablauf"},
    {t:"ablauf"},
    "Die Reihenfolge der Schauplätze 3 bis 5 ist nicht fest. Wer Massif zuerst trifft, kann direkt durch die Tunnel reisen; wer zuerst nach Undulate gerät, hört dort von Hugo. Das Finale beginnt, sobald die Käfer Hugos Versteck erreicht haben – oder spätestens, wenn die tickende Uhr den Sonnenuntergang erreicht.",
    {t:"h", x:"Optionale Regeln des Hogwild"},
    "Das Reich bietet Sonderregeln (S. 274). Für dieses Abenteuer passen besonders:",
    {t:"ul", x:[
      "**Verirrt oder versteckt?** Wege finden ohne Aussichtspunkt bekommt einen Komplex-Abzug von 1. Verstecken und Tarnen ignorieren ihn. Gilt in Szene 2 und 3.",
      "**Nussfall:** Starker Wind oder Raufereien an einem Baum lösen einen Schauer Hognüsse aus, Gigaschlag-Schaden, Glückswurf, wen es trifft (S. 36). Fallende Nüsse können auch Gefahren treffen – im Finale eine der wenigen Quellen für Gigaschaden gegen Altzahn.",
      "**Gesprenkelt:** Unter dichtem Laub darf jeder Käfer wählen, ob er im Licht oder im Dunkeln steht."
    ]},
    {t:"h", x:"Belohnungen"},
    {t:"ul", x:[
      "**Nektar:** Am Ende des Abends bekommt jeder Käfer **2 Nektar** (S. 103: 1–3 pro Sitzung). Den Augenblick dafür liefert Szene 6: Eine Feuerblüte beim Fest ist so beeindruckt, dass sie Nektar ausspeit.",
      "**Bröckchen & Krimskrams:** aus der Beute-Liste des Hogwild (Reich › Überblick) und aus „Zum Mitnehmen“ der besiegten Gefahren.",
      "**Rätsel:** Jeder fertige Käfer hat ein Rätsel, zu dem dieses Abenteuer Spuren legt (in jeder Szene unter „Rätsel-Spuren“). Drei kleine Entdeckungen erlauben eine große Entdeckung (S. 164)."
    ]},
    {t:"h", x:"Was du brauchst"},
    {t:"ul", x:[
      "Die fertigen Käfer (Tab „Käfer“) – jeder lässt sich als ausgefüllter Charakterbogen öffnen und drucken.",
      "Die Gefahrenkarten: Raubpflanzen (S. 250), Miniatur-Söldner (S. 246), Erdbrecher-Wildschweine (S. 234). Mit „+ Begegnung“ landen sie in der Begegnungsleiste.",
      "Die Reise-Tafel des Hogwild (Reich › Reise) mit Reiseleiste, tickender Uhr und Ausguck.",
      "Viele W6. Pro Käfer etwa sechs."
    ]}
  ],

  /* ---------- Spielerzahl ---------- */
  skal: [
    ["Käfer", "3", "4", "5", "6"],
    ["Raubpflanzen (Szene 3)", "1", "1", "2", "2"],
    ["Söldner neben Hugo (Szene 5)", "Lombrero", "Lombrero + 1", "Lombrero + 2", "Lombrero + 3"],
    ["Leiste „Altzahn weglocken“", "4", "5", "6", "7"],
    ["Reiseleiste in die Tiefen", "4 Schritte", "4 Schritte", "5 Schritte", "5 Schritte"]
  ],

  /* ---------- Schauplätze ---------- */
  szenen: [
  {
    id: "basar", nr: 1, t: "Der Letzte Basar", art: "Szene", ort: "Saumwald", p: 278, tick: "Tick 1",
    kurz: "Auftrag von Cogtooth Carlisle, Gerüchte am Basar, ein ängstlicher Fuchs.",
    b: [
      {t:"lese", x:"Der Saumwald riecht heute nach Schießpulver und gebrannten Nüssen. Zwischen den Ständen des Letzten Basars hängen Girlanden aus bunten Blütenblättern, und auf dem Dach von Sizzlin' Sams probt jemand ein Feuerrad, das immer wieder pfeifend ausgeht. Heute Nacht ist die Nacht der Farben.\n\nNur hinter Sams, wo sonst jeden Festmorgen ein Hügel frischer Erde voller Trüffel liegt, liegt … nichts. Ein kleines, sauberes Loch. Daneben sitzt eine Raupe mit angekokelten Augenbrauen und starrt hinein."},
      {t:"h", x:"Die Szene"},
      {t:"dl", x:[
        ["Wo", "Der Trüffelhügel hinter Sizzlin' Sams (S. 276), am Rand des Letzten Basars (S. 278)."],
        ["Wann", "Früher Morgen am Festtag, Tick 1."],
        ["Wer", "Cogtooth Carlisle, Händler und Festgäste, Cedric Calo, später Tekso Quailheart."],
        ["Was", "Die Trüffel für das Fest sind ausgeblieben – zum ersten Mal seit Jahren."],
        ["Warum", "Ohne Trüffel keine richtige Nacht der Farben. Und Cogtooth zahlt gut."]
      ]},
      {t:"h", x:"Der Auftrag"},
      "Cogtooth Carlisle (S. 276) bittet die Käfer, die Trüffel bis Sonnenuntergang zu besorgen. Er verrät, dass „ein Freund von unten“ sie jede Woche bringt, für ein Säckchen Goldflitter. Den Namen kennt er nicht – nur, dass der Freund groß ist, nach Erde riecht und schlecht sieht. Als Lohn bietet er jedem Käfer ein Fläschchen aus seinem Labor an (ein Krimskrams mit einem Etikett nach Wahl des Webers) und einen Ehrenplatz beim Farbwettstreit.",
      {t:"nsc", ids:["cogtooth", "cedric", "tekso", "mahmah"]},
      {t:"h", x:"Spuren"},
      {t:"spur", x:[
        ["Das Loch im Trüffelhügel", "Stöbern, Spüren", "Der Tunnel ist sauber gegraben, viel zu groß für einen Käfer. Er riecht nach Maulwurf – aber alt, mindestens drei Tage."],
        ["Ins Loch hinein", "Graben, Klettern", "Nach ein paar Käferlängen ist der Tunnel mit Erde verstopft. Wer weitergräbt, merkt: Er führt steil hinab Richtung Wurzelbau. Komplex-Abzug 1, weil es eng und dunkel ist."],
        ["Am Basar herumfragen", "Quasseln, Prahlen", "Niemand hat die Lieferung je gesehen. Aber gestern wurde eine Tarantel mit Augenklappe gesehen, die auffällig viele Trüffelkrümel gekauft hat."],
        ["Tekso zuhören", "Kümmern, Quasseln", "Der Fuchs hat letzte Nacht gespürt, wie der Boden unter seinem Bau gezittert hat – „als würde etwas Riesiges graben, tief in den Schweinischen Tiefen“."]
      ]},
      {t:"h", x:"Kleine Szenen am Rand"},
      {t:"ul", x:[
        "Am Basar läuft eine Wettrunde, wie lange *diese* Truppe im Wald durchhält (S. 278). Wer prahlt, verbessert die Quote.",
        "Cedric Calo will den Käfern ein 100 % garantiertes Wildschwein-Amulett verkaufen. Es hilft nicht. Aber es riecht stark nach Pfefferminz – das könnte im Finale doch noch nützlich werden, wenn die Käfer eine Idee haben.",
        "Mah-Mah schenkt einem Käfer, der ihr beim Aufbau hilft, eine Heilsalbe (ein Bröckchen)."
      ]},
      {t:"h", x:"Montage vor dem Aufbruch (optional)"},
      "Wer einkaufen oder sich vorbereiten will, kann eine kurze Montage am Basar spielen (S. 69). Jeder Käfer hat eine Aufgabe, zum Beispiel Organisieren (S. 72), um Ausrüstung zu besorgen. Kostet einen Tick.",
      {t:"rs", x:[
        ["Funzel", "Warum brennt Feuer?", "Das Feuerrad auf Sams' Dach geht immer wieder aus. Warum?"],
        ["Fips", "Wo ist Norden?", "Die Fahnenstangen an der Straße zeigen Gefahr an, nicht Richtung – aber alle stehen auf der Nordseite der Straße."]
      ]},
      {t:"weiter", x:"Die Spur führt in die Schweinischen Tiefen (Reise) – oder, für sehr grabfreudige Käfer, direkt durch den verstopften Tunnel hinab in den Wurzelbau (weiter mit Szene 4)."}
    ]
  },
  {
    id: "reise", nr: 2, t: "Unterwegs in die Tiefen", art: "Reise", ort: "Saumwald → Schweinische Tiefen", p: 280, tick: "Tick 1–3",
    kurz: "Reiseleiste mit 4 Schritten, Ausguck auf den Tabellen des Hogwild.",
    b: [
      {t:"lese", x:"Hinter dem Letzten Basar wird die Straße zu einem Pfad, der Pfad zu einer Spur und die Spur zu einer Ahnung. Die Fahnen am Wegrand wechseln von Gelb zu Orange zu Rot. Dann schließt sich das Blätterdach über euch, und es wird still. Irgendwo vor euch riecht es nach Erde, Pilzen – und ganz schwach nach Trüffel."},
      {t:"h", x:"Die Reise"},
      {t:"dl", x:[
        ["Reiseleiste", "„In die Schweinischen Tiefen“, 4 Schritte (5 bei 5–6 Käfern)."],
        ["Tickende Uhr", "Beginnt bei Tick 1. Sonnenuntergang ist Tick 5."],
        ["Reiseaktionen", "Bummeln, Marschieren, Warten, Lagern (S. 86). Ausguck mit Paschen (S. 88)."],
        ["Gebiete", "Erster Schritt im Saumwald, danach die Schweinischen Tiefen."]
      ]},
      {t:"reisetafel"},
      {t:"h", x:"Was unterwegs passieren kann"},
      "Nutze die Ausguck-Tabellen des Hogwild (Reise-Tafel: Gebiet wählen, W6 auf Tabelle). Zusätzlich kannst du als besondere Ergebnisse (S. 92) diese vorbereiteten Ereignisse einstreuen:",
      {t:"spur", x:[
        ["Ein alter Hauerpfad", "Kartieren, Spüren", "Ein tief aufgewühlter Pfad (S. 280) führt genau in die richtige Richtung. Wer ihm folgt, kommt schneller voran: Der nächste Schritt zählt doppelt. Aber wer auf dem Pfad geht, ist nicht allein – Ausguck bei der nächsten Reiseaktion mit Überraschung."],
        ["Weiße Borsten", "Spüren, Jagen", "An einem Dornenzweig hängen weiße, dicke Haarbüschel. Ein Eber – ein alter. Die Spur führt in dieselbe Richtung wie ihr."],
        ["Min, der weinende Hundertfüßer", "Kümmern, Kartieren", "Min (S. 282) hat sich verlaufen. Wer ihn tröstet, erfährt, dass er gestern Nacht „eine Spinne mit Augenklappe“ gesehen hat, die einen Sack Trüffel in ein Loch zog."],
        ["Ein Erdstoß", "—", "Der Boden zittert. Erde rieselt von Wurzeln. Etwas gräbt unter euch. Du kannst die Stimmung eines Käfers, der sich erschreckt, ins Negative ziehen (S. 156)."]
      ]},
      {t:"h", x:"Verirrt oder versteckt?"},
      "Ohne einen Aussichtspunkt bekommen Aktionen zum Wegefinden einen Komplex-Abzug von 1 (S. 274). Die Wachtürme der Einheimischen im Farn (S. 280) heben den Abzug auf, machen die Bande aber sehr sichtbar.",
      {t:"rs", x:[
        ["Fips", "Wo ist Norden?", "Unter dem Blätterdach orientieren sich alle am Geruch, nicht an der Sonne (S. 280)."],
        ["Hebe", "Wer hat die Welt zerbrochen?", "Ein verlassener Reifenhaufen, ein Gummiberg mitten im Wald (S. 282)."]
      ]},
      {t:"weiter", x:"Ist die Reiseleiste voll, erreichen die Käfer die Trüffelgrube (Szene 3)."}
    ]
  },
  {
    id: "grube", nr: 3, t: "Die Trüffelgrube", art: "Szene", ort: "Schweinische Tiefen", p: 281, tick: "ca. Tick 3",
    kurz: "Eine Plattform über einer Grube voller Trüffel, eine hungrige Raubpflanze, ein verwirrter Maulwurf.",
    b: [
      {t:"lese", x:"Zwischen zwei Wurzeln, so dick wie Häuser, öffnet sich eine Grube. Über ihr ist eine Plattform aus Zweigen und Schnur gespannt, und darunter liegen Trüffel. Dutzende. Hunderte. Der Duft ist so stark, dass euch die Fühler kribbeln.\n\nAm Rand der Grube glänzen ein paar Tropfen klebrigen Zuckerwassers im Moos. Hübsch. Und sie bewegen sich."},
      {t:"h", x:"Die Szene"},
      {t:"dl", x:[
        ["Wo", "Eine Plattform über einer Grube voller Trüffel (S. 282), am Ende eines Hauerpfads."],
        ["Wer", "Eine Raubpflanze (S. 250), Massif der Maulwurf (kommt dazu, sobald es laut wird)."],
        ["Was", "Die Grube ist voll – hier fehlt nichts. Das Problem liegt also unterwegs."],
        ["Warum", "Hier beginnt Massifs Tunnel."]
      ]},
      {t:"h", x:"Die Raubpflanze"},
      "Die Zuckertropfen sind die Augen eines raschelnden Räubers, der darunter wurzelt (S. 280). Die Pflanze hat gelernt, dass an der Grube Leckeres vorbeikommt. Sie greift an, sobald ein Käfer auf die Plattform steigt oder in die Grube klettert.",
      {t:"gef", id:"raeuberpflanzen", n:"1 (5–6 Käfer: 2)", x:"**Absicht:** Den ersten Käfer packen, der in Reichweite kommt, und schlucken. **Tipps:** Immun gegen Zähmen und Quasseln, schwach gegen Brutzeln und Klettern (unter die Kiefer!). Jede Beißen-Aktion kostet sie selbst ein Herz – lange hält sie nicht durch. Wer Abstand hält, kann einfach vorbei."},
      {t:"h", x:"Massif taucht auf"},
      "Sobald gerauft wird oder ein Käfer laut nach dem Lieferanten ruft, wölbt sich neben der Grube die Erde. Ein riesiger Kometennasen-Maulwurf schiebt seine sternförmige Nase heraus und schnuppert. Massif ist kein Feind – nur sehr kurzsichtig und sehr verwirrt.",
      {t:"nsc", ids:["massif"]},
      {t:"spur", x:[
        ["Mit Massif reden", "Quasseln, Kümmern", "Er liefert wie immer, „dem Duft nach bis zum Ende“. Nur ist der Weg seit drei Tagen kürzer, und niemand bezahlt ihn mehr. Er dachte, die Zwei-in-Einer wären knauserig geworden."],
        ["Den Tunnel untersuchen", "Stöbern, Spüren, Kartieren", "Ein Stück hinter der Grube zweigt ein frischer Gang ab. An den Wänden: Krümel von Trüffeln, als hätte sie jemand absichtlich verstreut. Und Spinnenseide."],
        ["Die Raubpflanze ausnehmen", "Werkeln, Schlitzen", "Im Bauch einer Raubpflanze steckt süßer Sirup (S. 281). Ein Bröckchen – und sehr klebrig."]
      ]},
      {t:"tint", h:"Mitfahren:", x:"Massif lässt die Käfer auf seinem Rücken mitfahren (Kometennasen nehmen Mitfahrer, S. 283). Damit ist der Weg in den Wurzelbau keine eigene Reise: In einem Tick sind sie in Undulate oder – wenn sie der Duftspur folgen wollen – direkt vor Hugos Versteck."},
      {t:"h", x:"Wenn es schiefgeht"},
      {t:"ul", x:[
        "Wird ein Käfer verschluckt: Die Raubpflanze will ihn nicht wieder herauslassen (S. 281). Die anderen haben bis zum nächsten Zug der Pflanze Zeit; dann nimmt der Käfer Schaden.",
        "Wird Massif angegriffen, wehrt er sich mit den Werten der Kometennasen-Maulwürfe (S. 221) und gräbt sich weg. Dann müssen die Käfer den Tunnel zu Fuß gehen: eine Reise mit 3 Schritten im Dunkeln."
      ]},
      {t:"rs", x:[
        ["Summsel", "Woraus besteht Gelée Royale?", "Der Sirup im Bauch der Raubpflanze ist süßer als jeder Honig."],
        ["Knolle", "Was liegt unter den Wurzeln?", "Massifs Tunnel führt genau unter die großen Wurzeln."]
      ]},
      {t:"weiter", x:"Mit Massif durch den Tunnel nach Undulate (Szene 4) – oder der Duftspur direkt zu Hugos Versteck folgen (Szene 5)."}
    ]
  },
  {
    id: "undulate", nr: 4, t: "Undulate", art: "Szene + Montage", ort: "Der Wurzelbau", p: 283, tick: "ca. Tick 4",
    kurz: "Die Stadt der Regenwürmer zittert. Hier erfahren die Käfer von Hugo – und können sich für das Finale vorbereiten.",
    b: [
      {t:"lese", x:"Die Tunnel öffnen sich in eine Höhle, in der leuchtende Pilze wachsen. Mitten darin steht eine Mauer aus aufgesammelten Steinen und verstärktem Holz. Über dem Tor hängt ein Schild: KEINE MAULWÜRFE. Darunter, kleiner, nachträglich: AUSSER MIT TRIBUT.\n\nGerade als ihr näherkommt, bebt die Decke. Erde rieselt herab. Hinter der Mauer schreit jemand: „Es gräbt wieder!“"},
      {t:"h", x:"Die Szene"},
      {t:"dl", x:[
        ["Wo", "Undulate, die Stadt der Würmer im Wurzelbau (S. 283)."],
        ["Wer", "Gleeb am Tor, Betsy die Künstlerin, viele ängstliche Regenwürmer."],
        ["Was", "„Eine große Erdbewegung – in der Nähe gräbt etwas Riesiges, weit größer als ein Maulwurf“ (S. 284). Das ist Altzahn."],
        ["Warum", "Die Würmer wissen, wo Hugo sich versteckt. Und sie brauchen Hilfe."]
      ]},
      {t:"h", x:"Das Tor"},
      "Kommen die Käfer mit Massif, wird es heikel: Kein Maulwurf darf in Rufweite der Stadt (S. 283). Massif bleibt brummend im Tunnel. Gleeb ist misstrauisch – Würmer haben schlechte Augen, und vielleicht ist ja *doch* einer von euch ein verkleideter Maulwurf?",
      {t:"spur", x:[
        ["Gleeb überzeugen", "Quasseln, Blenden (Härte-Abzug 1)", "Neuigkeiten von oben öffnen das Tor (S. 283). Ein Käfer, der wie ein Maulwurf aussieht oder riecht, bekommt einen Härte-Abzug von 1."],
        ["Betsy fragen", "Kümmern, Blenden", "Betsy sucht eine Muse und hat eine gefunden: eine Tarantel mit Augenklappe, die jede Nacht Säcke an der Stadt vorbeischleppt, Richtung Klitzekleiner Käfig. Sie hat sie gemalt. Das Bild ist schlecht, aber eindeutig."],
        ["Das Beben deuten", "Spüren, Denken, Graben", "Was da gräbt, ist kein Maulwurf. Es ist größer, langsamer und folgt einem Geruch. Es gräbt auf genau die Stelle zu, wo die Tarantel ihre Säcke hinbringt."]
      ]},
      {t:"nsc", ids:["gleeb", "betsy"]},
      {t:"h", x:"Montage: Lager in Undulate"},
      "Bevor es weitergeht, können die Käfer in Undulate eine Montage spielen (S. 69). Das kostet 2 Ticks wie Lagern auf einer Reise. Jeder Käfer hat **eine** Aufgabe. Vorschläge, die im Finale helfen:",
      {t:"dl", x:[
        ["Erholen (S. 71)", "Herzen leeren nach der Raubpflanze."],
        ["Kochen (S. 76)", "Ein Gericht aus Trüffelkrümeln und Pilzen. Die Würmer liefern Zutaten gegen eine Portion."],
        ["Herstellen (S. 78)", "Etwas, das einen Eber weglocken kann – eine Duftkugel, ein Trüffelköder an einer Schnur. Das Finale belohnt solche Ideen (siehe „Einseitig besessen“ beim Erdbrecher)."],
        ["Organisieren (S. 72)", "Die Würmer stellen Seile, Leuchtpilze, einen Plan der Tunnel bereit."],
        ["Rätseln (S. 74)", "Über das eigene Rätsel nachdenken – Undulate hallt von Echos."]
      ]},
      {t:"rs", x:[
        ["Zirp", "Wie viele Klänge gibt es?", "In der Höhle hallt jedes Geräusch fünfmal zurück, jedes Mal etwas anders."],
        ["Knolle", "Was liegt unter den Wurzeln?", "Unter Undulate erstrecken sich Tunnel durch den gesamten Bau (S. 283)."],
        ["Funzel", "Warum brennt Feuer?", "Die Wege sind mit brennenden Streichhölzern markiert. Wer hat sich die Mühe gemacht (S. 283)?"]
      ]},
      {t:"weiter", x:"Die Würmer zeigen den Weg zu Hugos Versteck (Szene 5)."}
    ]
  },
  {
    id: "versteck", nr: 5, t: "Hugos Wurzelkammer", art: "Szene", ort: "Unter dem Klitzekleinen Käfig", p: 277, tick: "ca. Tick 4–5",
    kurz: "Ein Söldner, der eine Regel gebrochen hat. Kämpfen, reden, schleichen oder petzen.",
    b: [
      {t:"lese", x:"Die Kammer liegt zwischen den Wurzeln, direkt unter einem rostigen Gitter – dem Boden eines alten Einkaufswagens. Durch die Stäbe fällt Licht, und von oben hört man Söldner lachen und Gewichte klirren.\n\nDie Kammer ist voller Säcke. Trüffelsäcke. Davor sitzt eine Tarantel mit Augenklappe auf einem umgedrehten Fingerhut und zählt. Neben ihr steht etwas, das man mit sehr viel gutem Willen für einen Käfer halten könnte. Es hat einen Schnabel."},
      {t:"h", x:"Die Szene"},
      {t:"dl", x:[
        ["Wo", "Eine Wurzelkammer am Geheimeingang zum Klitzekleinen Käfig (S. 277, S. 282)."],
        ["Wer", "Hugo Heaves, Lombrero und je nach Spielerzahl weitere Söldner."],
        ["Was", "Hugo will die Trüffel heute Nacht hochbringen und im Käfig verkaufen."],
        ["Warum", "Die Säcke hier sind die Trüffel für die Nacht der Farben."]
      ]},
      {t:"nsc", ids:["hugo", "lombrero"]},
      {t:"h", x:"Wege durch die Szene"},
      {t:"spur", x:[
        ["Hugo verpetzen", "Quasseln, Prahlen, Erschrecken", "Die ewigen Regeln von Red Morris verbieten genau das (S. 277). Wer droht, nach oben zu rufen, hat Hugo in der Hand. Lombrero wird blass – er wusste nichts von dem Verbot und will nicht verbannt werden."],
        ["Lombrero umstimmen", "Kümmern, Quasseln", "Lombrero ist ein anständiger Kerl (S. 277). Wer ihn als echten Käfer behandelt, hat einen Verbündeten. Achtung: Wer bezweifelt, dass er ein Käfer ist, macht ihn sofort zum Gegner."],
        ["Mit Hugo handeln", "Prahlen, Quasseln", "Söldner lieben eine gute Show (schwach gegen Prahlen, S. 246). Hugo lässt sich auf einen Wettstreit ein: Wer gewinnt, bekommt die Säcke."],
        ["Kämpfen", "Raufen-Fertigkeiten", "Die Söldner kämpfen – aber sie haben Prinzipien: Kein Söldner kämpft gegen ein wehrloses Ziel (S. 277). Wer sich ergibt, wird verschont."],
        ["Schleichen", "Schleichen (Härte-Abzug 1: das Licht von oben)", "Die Säcke sind schwer. Wer einen wegträgt, macht Lärm."]
      ]},
      {t:"gef", id:"miniatur-soeldner", n:"Hugo + Lombrero (+ 1 je Käfer über 3)", x:"**Hugo Heaves:** Leiste der Miniatur-Söldner mit zwei Herzen mehr (♥♥•♥♥♥♥), Spezialisten-Macke **Hundertfüßler-Boxer** – acht Beine fangen viele Hiebe ab (S. 246). **Lombrero:** normale Leiste, Macke **Herkules-Held**: Härte-Abzug 2 auf alle Anfreunden-Aktionen gegen ihn. Wer ihn ausdrücklich als Käfer anspricht, dem kannst du den Abzug als Belohnung für gutes Rollenspiel verringern (S. 198). **Weitere Söldner:** ohne Macke. **Absicht:** Die Säcke behalten. Niemanden verletzen, der sich ergibt."},
      {t:"h", x:"Mitten in der Szene: Das Beben"},
      "Spätestens wenn die Szene ihren Höhepunkt erreicht – ein Kampf kippt, ein Handel steht kurz vor dem Abschluss –, bebt die Decke. Hugo erstarrt: „Was. War. Das.“ Erde rieselt durch die Wurzeln. Dann bricht eine Hauerspitze, so groß wie ein Haus, durch die Wand. **Weiter mit Szene 6.**",
      {t:"rs", x:[
        ["Hebe", "Wer hat die Welt zerbrochen?", "Der Käfig ist ein alter Einkaufswagen, halb im Schlamm vergraben (S. 277). Wer hat ihn hier gelassen?"],
        ["Summsel", "Woraus besteht Gelée Royale?", "Hugo hat zwischen den Trüffeln ein Glas „Königinnenpaste“ versteckt – gestohlen, natürlich."]
      ]},
      {t:"weiter", x:"Altzahn bricht durch (Szene 6)."}
    ]
  },
  {
    id: "finale", nr: 6, t: "Altzahn bricht durch", art: "Finale", ort: "Hugos Wurzelkammer", p: 234, tick: "",
    kurz: "Ein Titan im Keller. Weglocken, zähmen oder mit Nüssen bewerfen – frontal angreifen ist ein Narrenwerk.",
    b: [
      {t:"lese", x:"Die Wand bricht auf wie ein Kuchen. Durch den Staub schiebt sich ein Kopf, größer als die ganze Kammer: eine Schnauze voller Erde, kleine rote Augen, und um die Lefzen weiße Büschel wie ein Bart. Altzahn schnaubt einmal. Alle Trüffelsäcke fliegen einen Käferschritt auf ihn zu.\n\nDann grunzt er. Es klingt sehr, sehr glücklich."},
      {t:"h", x:"Die Lage"},
      "Altzahn ist ein Erdbrecher-Wildschwein (S. 234), ein Titan. Er will nur eins: TRÜFFEL FINDEN. TRÜFFEL FRESSEN. MEHR TRÜFFEL. Die Käfer sind ihm fast egal – aber er gräbt sich durch alles hindurch, und wenn er die Trüffel gefressen hat, wittert er Undulate und die Grube. Hugo und die Söldner sind starr vor Schreck. Jetzt kann man sie zu Verbündeten machen.",
      {t:"gef", id:"erdbrecher", n:"1 Titan", x:"**Titanenherzen** lassen sich nur durch Gigaschaden markieren, jeder Gigaschaden markiert genau eins (S. 207). **Immun** gegen alles außer Gigaschaden und seine Schwächen. **Schwach gegen Zähmen und Kümmern.** **Einseitig besessen:** Ihn mit Trüffeln zu füttern oder mit einem Rivalen abzulenken, kann einem Käfer erlauben, gelegentlich Gigaschaden zu verursachen."},
      {t:"h", x:"Die Leiste: Altzahn weglocken"},
      "Lege offen eine Leiste aus (S. 32). Ist sie voll, folgt Altzahn der Lockspur aus dem Wurzelbau hinaus, zurück in die Tiefen – zufrieden, satt und weit weg von Undulate. Erfolgreiche Aktionen, die ihn weglocken, beruhigen oder ablenken, markieren sie nach ihrer Wucht (S. 40). Mit einer Kombo-Leiste (3 Kästchen, S. 46) können die Käfer zusammen einen Finisher mit Giga-Wucht landen.",
      {t:"leiste", id:"altzahn", h:"Altzahn weglocken", n:5},
      {t:"leiste", id:"kombo", h:"Kombo", n:3},
      {t:"h", x:"Was die Käfer tun können"},
      {t:"spur", x:[
        ["Mit Trüffeln locken", "Flitzen, Fliegen, Schleichen", "Ein Sack Trüffel als Köder, ein schneller Käfer davor. Jeder Sack, der dafür geopfert wird, fehlt später beim Fest."],
        ["Zähmen und kümmern", "Zähmen, Kümmern", "Altzahns Schwäche. Unter der zotteligen Hülle wartet ein Herz darauf, erwärmt zu werden (S. 234). Das Herstellen aus der Montage zahlt sich hier aus."],
        ["Trüffelsuchwettbewerb", "Spüren, Stöbern", "Fordert ihn heraus – mit einem heimlichen Vorteil (S. 234). Massif kennt jede Trüffelstelle im Umkreis."],
        ["Nussfall auslösen", "Klettern, Hauen, Graben", "Oben steht ein Hognussbaum. Wer die Wurzel erschüttert, löst Nussfall aus: Gigaschlag-Schaden – auch gegen Altzahn (S. 274)."],
        ["Mit Feuer erschrecken", "Brutzeln", "Funktioniert, riskiert aber einen Brand, der mehr zerstört als gedacht (S. 234). Im Wurzelbau: Rauch in allen Tunneln, Undulate gerät in Panik."],
        ["Frontal angreifen", "Raufen-Fertigkeiten", "Ein Narrenwerk (S. 234). Ohne Gigaschaden prallt alles an ihm ab, und Zottel und Borste geben Panzer- und Härte-Abzug von je 1."]
      ]},
      {t:"h", x:"Altzahns Züge"},
      "Altzahn greift nicht gezielt an – er wühlt. Wenn das Rampenlicht zu ihm schwenkt, wähle einen Zug aus seiner Karte: **Hufschmetterer** trifft bis zu drei Käfer, **Hauerschrecken** einen, **Nicht umsonst so genannt** reißt einen neuen Tunnel auf (und vielleicht die Kammerdecke ein). Brüche: Einen neuen Trüffel wittern, quieken und angreifen, mit Tempo tunneln, sich aufbäumen.",
      {t:"h", x:"Ausgänge"},
      {t:"ul", x:[
        "**Leiste voll:** Altzahn trottet davon. Die Söldner jubeln. Hugo ist so erleichtert, dass er die restlichen Säcke herausgibt.",
        "**Alle Titanenherzen markiert:** Altzahn flieht verletzt und wütend. Er kommt wieder – irgendwann. (Zum Mitnehmen: S. 234.)",
        "**Die Käfer fliehen:** Altzahn frisst alle Säcke. Die Nacht der Farben findet ohne Trüffel statt, aber Undulate steht noch.",
        "**Was wird aus Hugo?** Die Käfer entscheiden: Ihn bei Red Morris verpetzen (Verbannung), ihn laufen lassen oder ihn zwingen, Massif drei Wochen Goldflitter nachzuzahlen."
      ]},
      {t:"weiter", x:"Massif bringt alle in einem Tick zurück zum Trüffelhügel hinter Sams (Szene 7)."}
    ]
  },
  {
    id: "fest", nr: 7, t: "Die Nacht der Farben", art: "Ausklang", ort: "Saumwald", p: 279, tick: "ab Tick 5",
    kurz: "Feuerwerk, geröstete Trüffel, der Farbwettstreit und Nektar.",
    b: [
      {t:"lese", x:"Als ihr aus dem Trüffelhügel krabbelt, explodiert über euch der Himmel. Rot, Grün, ein Gelb, das nach Zitrone riecht. Jemand schreit „SIE SIND DA!“, und plötzlich stehen hundert Käfer um euch herum. Cogtooth Carlisle drückt euch so fest, dass seine Augenbrauen endgültig abfallen."},
      {t:"h", x:"Das Fest"},
      {t:"ul", x:[
        "Bringen die Käfer die Trüffel vor Tick 5, ist das Fest perfekt. Später? Es wird trotzdem gefeiert, nur hat Cogtooth schon dreimal geweint.",
        "**Massif** bekommt seinen Goldflitter – und, wenn die Käfer daran denken, einen Ehrenplatz.",
        "**Noch ein Versuch!** (S. 279) macht von jeder Gruppe, die mit Trüffeln zum Teilen aus den Tiefen zurückkommt, ein Bild umsonst. Gemalt, ungenau, sehr niedlich."
      ]},
      {t:"h", x:"Der Farbwettstreit"},
      "Die Hauptattraktion: eine neue Farbe erschaffen, je leuchtender, desto besser (S. 279). Jeder Käfer darf ein Bröckchen oder einen Krimskrams aus dem Abenteuer beisteuern – Raubpflanzensirup, weiße Eberborsten, Spinnenseide, Leuchtpilze. Ein Käfer würfelt mit Werkeln, Brutzeln oder Blenden. Bei einem Triumph gewinnt die Bande und darf die Farbe benennen.",
      {t:"h", x:"Nektar"},
      "Als die neue Farbe am Himmel aufgeht, öffnet sich am Rand des Festplatzes eine Feuerblüte, so beeindruckt, dass sie einen Klecks goldenen Nektar ausspeit (S. 103). **Jeder Käfer bekommt 2 Nektar.**",
      {t:"rs", x:[
        ["Funzel", "Warum brennt Feuer?", "Der Farbwettstreit zeigt, dass jedes Feuer eine andere Farbe hat – je nachdem, was brennt."],
        ["Zirp", "Wie viele Klänge gibt es?", "Jede Rakete pfeift anders."]
      ]},
      {t:"h", x:"Und danach?"},
      {t:"ul", x:[
        "Hugo, falls verbannt, wird ein Problem für ein anderes Abenteuer.",
        "Tekso Quailheart hat sein verlorenes Schwanzstück noch immer nicht wieder (S. 278).",
        "Altzahn weiß jetzt, wo es Trüffel gibt."
      ]}
    ]
  }
  ],

  /* ---------- NSC ---------- */
  nsc: {
    cogtooth: {t:"Cogtooth Carlisle", wer:"Raupe, ältester Alchemist der Zwei-in-Einer", p:276, will:"Die Nacht der Farben retten – ohne zuzugeben, dass er nicht weiß, wer die Trüffel liefert.", weiss:"Der Lieferant ist groß, riecht nach Erde, sieht schlecht und wird mit Goldflitter bezahlt.", art:"Spricht schnell, unterbricht sich selbst, riecht nach verbranntem Haar. Will sich erst verpuppen, wenn er fliegen kann, ohne Flügel zu haben."},
    cedric: {t:"Cedric Calo", wer:"Verkäufer von Wildschwein-Amuletten und Krimskrams", p:278, will:"Amulette verkaufen. Viele.", weiss:"Dass gerade mehr Eberspuren im Wald sind als sonst – gut fürs Geschäft.", art:"Flüstert alles, als wäre es ein Geheimnis. Jedes Amulett ist das letzte."},
    tekso: {t:"Tekso Quailheart", wer:"Fuchs, ein Titan, weder listig noch tapfer", p:278, will:"Geschichten hören. Und sein verlorenes Schwanzstück zurück.", weiss:"Letzte Nacht hat der Boden unter seinem Bau gezittert, als würde etwas Riesiges in den Tiefen graben.", art:"Riesig, schüchtern, flüstert, versteckt sich hinter Bäumen, die viel zu dünn für ihn sind."},
    mahmah: {t:"Mah-Mah", wer:"Marienkäfer-Chemikerin der Zwei-in-Einer", p:276, will:"Ihre Heilsalben aus Fleischfresserpflanzen-Extrakt testen.", weiss:"Raubpflanzen hassen Feuer, und in ihrem Bauch steckt Sirup.", art:"Ruhig, präzise, als Einzige am Basar ohne Brandflecken."},
    massif: {t:"Massif", wer:"Kometennasen-Maulwurf auf der Jagd nach goldenem Schatz", p:283, will:"Bezahlt werden. In Gold.", weiss:"Wie man jede Trüffelstelle im Wald findet – und dass der Weg zum Fest seit drei Tagen „kürzer riecht“.", art:"Riesig, sanft, kurzsichtig. Schnuppert an jedem Käfer. Redet über Gold wie andere über Liebe."},
    gleeb: {t:"Gleeb", wer:"Regenwurm ohne besondere Merkmale, Torwächter von Undulate", p:283, will:"Keine Maulwürfe in der Stadt. Keine Beben mehr.", weiss:"Das Beben kommt jeden Tag näher.", art:"Misstrauisch, kurzsichtig, fragt jeden: „Bist du ein Maulwurf?“"},
    betsy: {t:"Betsy", wer:"Regenwurm-Künstlerin auf der Suche nach einer Muse", p:283, will:"Gesehen werden. Ihre Kunst gelobt.", weiss:"Eine Tarantel mit Augenklappe schleppt jede Nacht Säcke Richtung Käfig. Sie hat sie gemalt.", art:"Dramatisch, malt mit dem eigenen Schwanzende, hält jedes Bild für ihr Meisterwerk."},
    hugo: {t:"Hugo Heaves", wer:"Tarantel, Klitzekleiner Söldner, lässt nie den Beintag aus", p:277, will:"Reich werden mit Trüffeln, die er im Käfig verkauft.", weiss:"Dass Red Morris ihn verbannt, wenn er es erfährt.", art:"Augenklappe (Modetrend, er hat beide Augen), macht beim Reden Beinübungen, zählt alles zweimal."},
    lombrero: {t:"Lombrero", wer:"Söldner. Ein *sehr* kleiner Vogel, der glaubt, alle hielten ihn für einen Käfer", p:277, will:"Dazugehören.", weiss:"Nichts vom Verbot. Er dachte, Hugo hätte die Trüffel gekauft.", art:"Anständiger Kerl. Zwitschert, wenn er nervös ist, und behauptet dann, das sei ein Zirpen."},
    altzahn: {t:"Altzahn", wer:"Alter Erdbrecher-Eber mit weißen Büscheln um die Lefzen", p:234, will:"TRÜFFEL.", weiss:"Wo es nach Trüffel riecht.", art:"Riesig, glücklich, verfressen. Hält Käfer für Staub."}
  }
};
