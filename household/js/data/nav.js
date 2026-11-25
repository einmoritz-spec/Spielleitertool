/* Household – Navigation: Reiter (Kopfzeile) → Unterleiste → Seitenleiste.
   Aufbau je Modus: HH_NAV.haus / HH_NAV.garten = [ {id, t, unter:[ {id, t, sw?:[[id,Name]], seiten?:[[id,Titel]]} ]} ]
   sw = Umschalter rechts in der Unterleiste, seiten = Einträge der Seitenleiste (fehlt sie, gibt es keine Seitenleiste).
   Inhalte kommen später je Seite aus HH_INH["<modus>/<reiter>/<unter>"]; bis dahin steht ein Platzhalter. */
window.HH_NAV = {
 haus: [
  {id: "welt", t: "Welt", unter: [
   {id: "voelker", t: "Völker & Nationen", seiten: [["ursprung", "Ursprünge"], ["faeries", "Faeries"], ["realm", "Realm"], ["boggarts", "Boggarts"], ["hearth", "Hearth"], ["sprites", "Sprites"], ["dominions", "Free Dominions"], ["sluagh", "Sluagh"], ["horde", "Horde"]]},
   {id: "haus", t: "Das Haus", sw: [["erdgeschoss", "Erdgeschoss"], ["obergeschoss", "Obergeschoss"], ["keller", "Keller"]], seiten: [["eingang", "Entry Hall"], ["inbetweens", "Inbetweens"], ["dining", "Dining Hall"], ["living", "Living Room"], ["upper", "Upper Floor"], ["basement", "Basement"]]},
   {id: "geschichte", t: "Geschichte", seiten: [["meister", "Das Verschwinden des Meisters"], ["jagd", "Die Wilde Jagd"], ["krieg", "Der Erste Household-Krieg"], ["quillwaters", "Die Schlacht von Quillwaters"], ["rat", "Der Hohe Rat"]]},
   {id: "atlas", t: "Atlas", sw: [["astraviya", "Astraviya"], ["staedte", "Städte"]]},
   {id: "alltag", t: "Alltag der Nationen", seiten: [["realm", "Realm"], ["hearth", "Hearth"], ["dominions", "Free Dominions"], ["horde", "Horde"]]}
  ]},
  {id: "regeln", t: "Regeln", unter: [
   {id: "charakter", t: "Charakter", seiten: [["bogen", "Der Charakterbogen"]]},
   {id: "berufe", t: "Berufe", seiten: [["soldiers", "Soldaten"], ["scholars", "Gelehrte"], ["hunters", "Jäger"], ["criminals", "Verbrecher"], ["duelists", "Duellanten"], ["handlers", "Tierführer"], ["beetle", "Beetle"], ["bumblebee", "Bumblebee"], ["gecko", "Gecko"], ["mouse", "Mouse"], ["traits", "Merkmale"]]},
   {id: "spielen", t: "Wie man spielt", seiten: [["wuerfel", "Würfel & Begriffe"], ["action", "Aktionswürfe"], ["reaction", "Reaktionswürfe"], ["stress", "Stress"], ["skills", "Felder & Fertigkeiten"], ["moves", "Manöver"], ["hilfe", "Hilfe & Hindernisse"], ["konflikte", "Konflikte"], ["kampf", "Kampf"], ["schiessen", "Schießen, Rangelei & Duell"], ["zustaende", "Zustände"], ["decorum", "Anstand"]]},
   {id: "vertraege", t: "Verträge", seiten: [["hereditary", "Erbvertrag"], ["starchild", "Starchild"], ["dear-to-the-hearth", "Dear to the Hearth"], ["spark-drain-draft", "Out of the Spark, Drain & Draft"], ["revenant-from-farbeyond", "Revenant from Farbeyond"], ["forces", "Die Mächte des Household"], ["personal", "Persönlicher Vertrag"], ["wallstrider", "Wallstrider"], ["goldthirst", "Goldthirst"], ["neverheard", "Neverheard"], ["vainglory", "Vainglory"], ["ttt", "Schreckliche Schreckliche Dinge"], ["ttt-regeln", "Regeln für TTT"], ["ttt-tabelle", "TTT-Tabelle"], ["welcoming", "Willkommensvertrag"], ["kindled-welcome", "Kindled Welcome & Upside-Down"], ["domain", "The Domain-Vertrag"]]},
   {id: "ausruestung", t: "Ausrüstung", seiten: [["wealth", "Wohlstand"], ["start-wealth", "Startwealth & Veränderung"], ["coins", "Münzen & Kristalle"], ["equipment", "Ausrüstung & Dienste"], ["gadgets", "Gadgets"], ["gadget-liste", "Gadgets: Liste"], ["weapons", "Waffen"], ["melee", "Nahkampfwaffen"], ["ranged", "Fernkampfwaffen"], ["keysket", "Keyskets"], ["dueling", "Duellwaffen"], ["armor", "Rüstung & Accessoires"]]}
  ]},
  {id: "sl", t: "Spielleitung", unter: [
   {id: "saga", t: "Saga", seiten: [["viele", "Wenige oder viele Spieler:innen"], ["ereignisse", "Historische Ereignisse"], ["fortschritt", "Fortschritt"]]},
   {id: "gegner", t: "Gegner", seiten: [["uebersicht", "Übersicht"]]},
   {id: "mysterien", t: "Mysterien"},
   {id: "pride", t: "Pride & Prejudice & Centipedes"},
   {id: "figuren", t: "Neue Figuren"}
  ]}
 ],
 garten: [
  {id: "welt", t: "Welt", unter: [
   {id: "voelker", t: "Völker", seiten: [["barghests", "Barghests"], ["gnomes", "Gnomes"], ["fae", "Fae"], ["shinigami", "Shinigami"], ["inside", "Inside Folk"]]},
   {id: "geschichte", t: "Geschichte", seiten: [["thron", "A Crack in the Throne"], ["winter", "The Long Winter"], ["krieg", "Ein Kalter Krieg"], ["nacht", "The Starless Night"]]},
   {id: "garten", t: "Der Garten", sw: [["karte", "Karte"], ["reisekarte", "Reisekarte"]], seiten: [["frontier", "The Frontier"], ["underground", "The Underground"], ["frontyard", "The Front Yard"], ["brambles", "The Brambles"], ["woodlands", "The Woodlands"], ["barrens", "The Barrens"], ["grasslands", "The Grasslands"], ["backyard", "The Backyard"], ["rushes", "The Rushes"], ["fouroaks", "Four Oaks"]]}
  ]},
  {id: "regeln", t: "Regeln", unter: [
   {id: "berufe", t: "Berufe", seiten: [["soldiers", "Soldaten"], ["scholars", "Gelehrte"], ["hunters", "Jäger"], ["criminals", "Verbrecher"], ["duelists", "Duellanten"], ["wayfarers", "Wayfarers"], ["handlers", "Tierführer"]]},
   {id: "vertraege", t: "Verträge", seiten: [["ttt", "Schreckliche Schreckliche Dinge"], ["hereditary", "Erbvertrag"], ["personal", "Persönlicher Vertrag"], ["welcoming", "Willkommensvertrag"], ["favors", "Favors"]]},
   {id: "ausruestung", t: "Ausrüstung", seiten: [["coins", "Münzen & Barter"], ["goods", "Goods & Services"], ["weapons", "Waffen"], ["concoctions", "Natural Concoctions"], ["mounts", "Mounts"]]},
   {id: "reise", t: "Reise & Jahreszeiten", seiten: [["travel", "Travel"], ["darkness", "Darkness"], ["stress", "Severe Stress"], ["seasons", "Seasons"]]}
  ]},
  {id: "sl", t: "Spielleitung", unter: [
   {id: "saga", t: "Saga"},
   {id: "gegner", t: "Gegner", seiten: [["uebersicht", "Übersicht"]]},
   {id: "colossi", t: "Colossi"}
  ]}
 ]
};

/* Die beiden Sagas: Name = Reiter der Startseite, danach die Bereiche */
window.HH_SAGAS = {
 fp: {t: "Saga vom Brüchigen Frieden", farbe: "#2c2038", unter: [["figuren", "Figuren"], ["k1", "Kapitel I"], ["k2", "Kapitel II"], ["k3", "Kapitel III"], ["k4", "Kapitel IIII"], ["k5", "Kapitel V"], ["epilog", "Epilog"], ["zeit", "Zeitleiste"]]},
 lw: {t: "Saga vom Langen Winter", farbe: "#24364a", unter: [["figuren", "Figuren"], ["k6", "Kapitel VI"], ["k7", "Kapitel VII"], ["epilog", "Epilog"], ["zeit", "Zeitleiste"]]}
};

/* Bereiche der Startseite (Einstiege), Reihenfolge wie die Reiter */
window.HH_START = {
 haus: [["welt", "Welt", "Völker, das Haus, Geschichte, Atlas"], ["regeln", "Regeln", "Charakter, Berufe, Proben, Verträge"], ["sl", "Spielleitung", "Saga, Gegner, Mysterien"]]
};
