/* Household – Navigation: Reiter (Kopfzeile) → Unterleiste → Seitenleiste.
   Aufbau je Modus: HH_NAV.haus / HH_NAV.garten = [ {id, t, unter:[ {id, t, sw?:[[id,Name]], seiten?:[[id,Titel]]} ]} ]
   sw = Umschalter rechts in der Unterleiste, seiten = Einträge der Seitenleiste (fehlt sie, gibt es keine Seitenleiste).
   Inhalte kommen später je Seite aus HH_INH["<modus>/<reiter>/<unter>"]; bis dahin steht ein Platzhalter. */
window.HH_NAV = {
 haus: [
  {id: "welt", t: "Welt", unter: [
   {id: "voelker", t: "Völker & Nationen", seiten: [["ursprung", "Ursprünge"], ["faeries", "Faeries"], ["realm", "Realm"], ["boggarts", "Boggarts"], ["hearth", "Hearth"], ["sprites", "Sprites"], ["dominions", "Free Dominions"], ["sluagh", "Sluagh"], ["horde", "Horde"]]},
   {id: "haus", t: "Das Haus", seiten: [["willkommen", "Willkommen im House"], ["eingang", "Entry Hall", ["eingang", "inbetweens"]], ["jahreskreis", "Jahreskreis"], ["dining", "Dining Hall", ["dining", "piano", "astraviya", "window"]], ["living", "Living Room", ["living", "yule", "sofa", "wallford", "fireplace"]], ["upper", "Upper Floor", ["upper", "beddingham", "clock", "vanity", "bathroom"]], ["basement", "Basement", ["basement", "puddle", "blade", "caliph", "rodomonte", "sawdust", "deepdown"]]]},
   {id: "geschichte", t: "Geschichte", seiten: [["meister", "Das Verschwinden des Master"], ["jagd", "Die Wilde Jagd"], ["krieg", "Der Erste Household-Krieg"], ["quillwaters", "Die Schlacht von Quillwaters"], ["rat", "Der Hohe Rat"]]},
   {id: "atlas", t: "Atlas", seiten: [["realm", "Realm"], ["hearth", "Hearth"], ["dominions", "Free Dominions"], ["horde", "Horde"]]},
   {id: "alltag", t: "Alltag der Nationen", seiten: [["realm", "Realm", ["realm-politik", "realm-zlad", "realm-streitkraefte", "realm-cards", "realm-leben", "realm-institutionen", "realm-kitchen"]], ["hearth", "Hearth", ["hearth-politik", "hearth-streitkraefte", "hearth-flame", "hearth-kirche", "hearth-orden", "hearth-herz", "hearth-leben", "hearth-institutionen", "hearth-stadt"]], ["dominions", "Free Dominions", ["free-politik", "free-streitkraefte", "free-bathlantis", "free-institutionen", "free-wunder", "free-leben", "free-argo", "free-spiegel", "free-bedroom"]], ["horde", "Horde", ["horde-politik", "horde-idole", "horde-leben", "horde-vergessene", "horde-streitkraefte", "horde-institutionen", "horde-konvent"]]]}
  ]},
  {id: "regeln", t: "Regeln", unter: [
   {id: "charakter", t: "Charakter", seiten: [["bogen", "Der Charakterbogen"]]},
   {id: "berufe", t: "Berufe", seiten: [["soldiers", "Soldaten"], ["scholars", "Gelehrte"], ["hunters", "Jäger"], ["criminals", "Verbrecher"], ["duelists", "Duellanten"], ["handlers", "Tierführer"], ["beetle", "Beetle"], ["bumblebee", "Bumblebee"], ["gecko", "Gecko"], ["mouse", "Mouse"], ["traits", "Merkmale"]]},
   {id: "spielen", t: "Wie man spielt", seiten: [["wuerfel", "Würfel & Begriffe"], ["action", "Aktionswürfe"], ["reaction", "Reaktionswürfe"], ["stress", "Stress"], ["skills", "Felder & Fertigkeiten"], ["moves", "Manöver"], ["hilfe", "Hilfe & Hindernisse"], ["konflikte", "Konflikte"], ["kampf", "Kampf"], ["schiessen", "Schießen, Rangelei & Duell"], ["zustaende", "Zustände"], ["decorum", "Anstand"]]},
   {id: "vertraege", t: "Verträge", seiten: [["hereditary", "Erbvertrag"], ["starchild", "Starchild"], ["dear-to-the-hearth", "Dear to the Hearth"], ["spark-drain-draft", "Out of the Spark, Drain & Draft"], ["revenant-from-farbeyond", "Revenant from Farbeyond"], ["forces", "Die Mächte des Household"], ["personal", "Persönlicher Vertrag"], ["wallstrider", "Wallstrider"], ["goldthirst", "Goldthirst"], ["neverheard", "Neverheard"], ["vainglory", "Vainglory"], ["ttt", "Schreckliche Schreckliche Dinge"], ["ttt-regeln", "Regeln für TTT"], ["ttt-tabelle", "TTT-Tabelle"], ["welcoming", "Willkommensvertrag"], ["kindled-welcome", "Kindled Welcome & Upside-Down"], ["domain", "The Domain-Vertrag"]]},
   {id: "ausruestung", t: "Ausrüstung", seiten: [["wealth", "Wohlstand"], ["start-wealth", "Startwealth & Veränderung"], ["coins", "Münzen & Kristalle"], ["equipment", "Ausrüstung & Dienste"], ["gadgets", "Gadgets"], ["gadget-liste", "Gadgets: Liste"], ["weapons", "Waffen"], ["melee", "Nahkampfwaffen"], ["ranged", "Fernkampfwaffen"], ["keysket", "Keyskets"], ["dueling", "Duellwaffen"], ["armor", "Rüstung & Accessoires"]]}
  ]},
  {id: "sl", t: "Spielleitung", unter: [
   {id: "saga", t: "Saga", seiten: [["aufbau", "Aufbau", ["s-frieden", "s-struktur", "s-kapitel", "s-perspektive", "s-jahre", "s-epilog", "s-paragraphs"]], ["viele", "Wenige oder viele Spieler:innen"], ["ereignisse", "Historische Ereignisse", ["e-k1", "e-k2", "e-k3", "e-k4", "e-k5", "e-epilog"]], ["fortschritt", "Fortschritt", ["f-erfahrungen", "f-wachstum", "f-memories"]]]},
   {id: "gegner", t: "Gegner", seiten: [["uebersicht", "Übersicht"], ["regeln", "Regeln für Gegner"], ["traits", "Eigenschaften"], ["schwach", "Schwachstellen"], ["littlings", "Littlings", ["g-hooligans", "g-gendarmen", "g-duellanten", "g-spaeher", "g-soldaten", "g-kuerassiere", "g-ehrengarde", "g-meisterduellanten", "g-goldenbacks", "g-janitscharen", "g-cinder", "g-porzellan"]], ["tiere", "Tiere", ["g-schaben", "g-wespen", "g-ohrwuermer", "g-hundertfuesser", "g-spinne", "g-hornissen", "g-kaefer", "g-eidechse", "g-ratte", "g-grossespinne", "g-sporn", "g-orbweaver", "g-netzwerfer", "g-riesenhf-schwanz", "g-riesenhf", "g-jagdspinne-beine", "g-jagdspinne"]], ["spinnen", "Von Spinnen"]]},
   {id: "mysterien", t: "Mysterien", seiten: [["zlad", "Zlad of Wall-lachia", ["realm-zlad"]], ["cards", "The House of Cards", ["realm-cards"]], ["flame", "The Flame of Love", ["hearth-flame"]], ["herz", "A Cold Heart", ["hearth-herz"]], ["stadt", "The City Inbetween", ["hearth-stadt"]], ["bathlantis", "Bathlantis", ["free-bathlantis"]], ["wunder", "The Mechanical Wonder", ["free-wunder"]], ["spiegel", "Through the Looking Glass", ["free-spiegel"]], ["vergessene", "The Forgotten One", ["horde-vergessene"]], ["konvent", "The Spider Convent", ["horde-konvent"]]]},
   {id: "pride", t: "Pride & Prejudice & Centipedes", seiten: [["einstieg", "Einstieg", ["p-vorwort", "p-blaurat"]], ["spur", "Die Spur", ["p-kueche", "p-garnison", "p-tatort", "p-wand", "p-inbetweens"]], ["finale", "Finale", ["p-finale", "p-kampf", "p-epilog"]]]},
   {id: "optionen", t: "Neue Optionen", seiten: [["berufungen", "Neue Berufungen"], ["schnecke", "Snail"]]},
   {id: "figuren", t: "Neue Figuren", seiten: [["uebersicht", "Übersicht"], ["fig-achilles", "Achilles"], ["fig-barron", "Barron Hargrave"], ["fig-mey", "Mey Sòng"], ["fig-alexandrine", "Alexandrine Regret"], ["fig-vega", "Vega Vankhade"], ["fig-petrolio", "Petrolio"]]}
  ]}
 ],
 garten: [
  {id: "welt", t: "Welt", unter: [
   {id: "voelker", t: "Völker", seiten: [["einfuehrung", "Völker des Gartens"], ["barghests", "Barghests", ["barghests", "brambles"]], ["gnomes", "Gnomes", ["gnomes", "citadel"]], ["fae", "Fae", ["fae", "seelie"]], ["shinigami", "Shinigami", ["shinigami", "shogunat"]], ["inside", "Inside Folk"]]},
   {id: "geschichte", t: "Geschichte", seiten: [["stand", "Wo waren wir stehengeblieben?"], ["thron", "Ein Riss im Thron"], ["winter", "Der Lange Winter"], ["krieg", "Ein Kalter Krieg"], ["nacht", "Die Sternlose Nacht"], ["brambles", "Die Brambles-Rebellion"], ["stein", "Der Stehende Stein"], ["klinge", "Die Silberne Klinge"]]},
   {id: "garten", t: "Der Garten", sw: [["karte", "Karte"], ["reisekarte", "Reisekarte"]], seiten: [["outhold", "Das Outhold"], ["frontier", "Die Frontier"], ["underground", "Der Underground"], ["frontyard", "Der Front Yard"], ["brambles", "Die Brambles", ["brambles", "grassgow", "bramble-town", "frondale", "dach"]], ["woodlands", "Die Woodlands", ["woodlands", "rootfald", "underwood", "branches", "twigbridge", "caer-siddi", "druiden", "titania", "dendronaos"]], ["barrens", "Die Barrens"], ["grasslands", "Die Grasslands"], ["backyard", "Der Backyard"], ["rushes", "Die Rushes"], ["fouroaks", "Four Oaks"]]}
  ]},
  {id: "regeln", t: "Regeln", unter: [
   {id: "berufe", t: "Berufe", seiten: [["einfuehrung", "Berufe des Gartens"], ["soldiers", "Soldaten"], ["scholars", "Gelehrte"], ["hunters", "Jäger"], ["criminals", "Verbrecher"], ["duelists", "Duellanten"], ["wayfarers", "Wayfarers"], ["handlers", "Tierführer"], ["frog", "Frosch"], ["ladybug", "Marienkäfer"], ["moth", "Nachtfalter"], ["mole", "Maulwurf"], ["traits", "Merkmale"]]},
   {id: "vertraege", t: "Verträge", seiten: [["ttt", "Schreckliche Schreckliche Dinge"], ["hereditary", "Erbverträge"], ["personal", "Persönliche Verträge"], ["welcoming", "Willkommensverträge"], ["favors", "Favors"]]},
   {id: "ausruestung", t: "Ausrüstung", seiten: [["coins", "Münzen & Barter"], ["goods", "Waren & Dienstleistungen"], ["weapons", "Waffen"], ["concoctions", "Natürliche Mixturen"], ["mounts", "Reittiere"]]},
   {id: "reise", t: "Reise & Jahreszeiten", seiten: [["travel", "Travel"], ["darkness", "Darkness"], ["stress", "Severe Stress"], ["seasons", "Seasons"]]}
  ]},
  {id: "sl", t: "Spielleitung", unter: [
   {id: "saga", t: "Saga", seiten: [["einfuehrung", "Die Saga des Langen Winters"], ["kapitel", "Kapitel & Jahreszeiten"], ["k6", "Kapitel VI"], ["k7", "Kapitel VII"], ["epilog", "Epilog"], ["thron", "Ein leerer Thron"]]},
   {id: "gegner", t: "Gegner", seiten: [["uebersicht", "Übersicht"]]},
   {id: "colossi", t: "Colossi"}
  ]}
 ]
};

/* Die beiden Sagas: Name = Reiter der Startseite, danach die Bereiche */
window.HH_SAGAS = {
 fp: {t: "Saga vom Brüchigen Frieden", farbe: "#2c2038", unter: [["einleitung", "Einleitung"], ["figuren", "Figuren"], ["k1", "Kapitel I"], ["k2", "Kapitel II"], ["k3", "Kapitel III"], ["k4", "Kapitel IV"], ["k5", "Kapitel V"], ["epilog", "Epilog"], ["zeit", "Zeitleiste"]]},
 lw: {t: "Saga vom Langen Winter", farbe: "#24364a", unter: [["figuren", "Figuren"], ["k6", "Kapitel VI"], ["k7", "Kapitel VII"], ["epilog", "Epilog"], ["zeit", "Zeitleiste"]]}
};

/* Bereiche der Startseite (Einstiege), Reihenfolge wie die Reiter */
window.HH_START = {
 haus: [["welt", "Welt", "Völker, das Haus, Geschichte, Atlas"], ["regeln", "Regeln", "Charakter, Berufe, Proben, Verträge"], ["sl", "Spielleitung", "Saga, Gegner, Mysterien"]]
};
