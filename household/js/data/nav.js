/* Household – Navigation: Reiter (Kopfzeile) → Unterleiste → Seitenleiste.
   Aufbau je Modus: HH_NAV.haus / HH_NAV.garten = [ {id, t, unter:[ {id, t, sw?:[[id,Name]], seiten?:[[id,Titel]]} ]} ]
   sw = Umschalter rechts in der Unterleiste, seiten = Einträge der Seitenleiste (fehlt sie, gibt es keine Seitenleiste).
   Inhalte kommen später je Seite aus HH_INH["<modus>/<reiter>/<unter>"]; bis dahin steht ein Platzhalter. */
window.HH_NAV = {
 haus: [
  {id: "welt", t: "Welt", unter: [
   {id: "voelker", t: "Völker & Nationen", seiten: [["faeries", "Faeries"], ["sprites", "Sprites"], ["dominions", "Free Dominions"], ["sluagh", "Sluagh"], ["horde", "Horde"]]},
   {id: "haus", t: "Das Haus", sw: [["erdgeschoss", "Erdgeschoss"], ["obergeschoss", "Obergeschoss"], ["keller", "Keller"]], seiten: [["eingang", "Entry Hall"], ["inbetweens", "Inbetweens"], ["dining", "Dining Hall"], ["living", "Living Room"], ["upper", "Upper Floor"], ["basement", "Basement"]]},
   {id: "geschichte", t: "Geschichte", seiten: [["meister", "Das Verschwinden des Meisters"], ["jagd", "Die Wilde Jagd"], ["krieg", "Der Erste Household-Krieg"], ["quillwaters", "Die Schlacht von Quillwaters"], ["rat", "Der Hohe Rat"]]},
   {id: "atlas", t: "Atlas", sw: [["astraviya", "Astraviya"], ["staedte", "Städte"]]},
   {id: "alltag", t: "Alltag der Nationen", seiten: [["realm", "Realm"], ["hearth", "Hearth"], ["dominions", "Free Dominions"], ["horde", "Horde"]]}
  ]},
  {id: "regeln", t: "Regeln", unter: [
   {id: "charakter", t: "Charakter", seiten: [["bogen", "Der Charakterbogen"]]},
   {id: "berufe", t: "Berufe", seiten: [["soldiers", "Soldiers"], ["scholars", "Scholars"], ["hunters", "Hunters"], ["criminals", "Criminals"], ["duelists", "Duelists"], ["handlers", "Animal Handlers"], ["traits", "Traits"]]},
   {id: "spielen", t: "Wie man spielt", seiten: [["action", "Action Rolls"], ["reaction", "Reaction Rolls"], ["stress", "Stress"], ["skills", "Fields & Skills"], ["moves", "Moves"], ["conflicts", "Konflikte"], ["combat", "Kampf"], ["zustaende", "Zustände & Decorum"]]},
   {id: "vertraege", t: "Contracts", seiten: [["hereditary", "Hereditary"], ["personal", "Personal"], ["ttt", "Terrible Terrible Things"], ["welcoming", "Welcoming"]]},
   {id: "ausruestung", t: "Ausrüstung", seiten: [["wealth", "Wealth"], ["equipment", "Equipment"], ["gadgets", "Gadgets"], ["weapons", "Weapons"]]}
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
   {id: "geschichte", t: "Geschichte", seiten: [["thron", "A Crack in the Throne"], ["winter", "The Long Winter"], ["krieg", "A Cold War"], ["nacht", "The Starless Night"]]},
   {id: "garten", t: "Der Garten", sw: [["karte", "Karte"], ["reisekarte", "Reisekarte"]], seiten: [["frontier", "The Frontier"], ["underground", "The Underground"], ["frontyard", "The Front Yard"], ["brambles", "The Brambles"], ["woodlands", "The Woodlands"], ["barrens", "The Barrens"], ["grasslands", "The Grasslands"], ["backyard", "The Backyard"], ["rushes", "The Rushes"], ["fouroaks", "Four Oaks"]]}
  ]},
  {id: "regeln", t: "Regeln", unter: [
   {id: "berufe", t: "Berufe", seiten: [["soldiers", "Soldiers"], ["scholars", "Scholars"], ["hunters", "Hunters"], ["criminals", "Criminals"], ["duelists", "Duelists"], ["wayfarers", "Wayfarers"], ["handlers", "Animal Handlers"]]},
   {id: "vertraege", t: "Contracts", seiten: [["ttt", "Terrible Terrible Things"], ["hereditary", "Hereditary"], ["personal", "Personal"], ["welcoming", "Welcoming"], ["favors", "Favors"]]},
   {id: "ausruestung", t: "Ausrüstung", seiten: [["coins", "Coins & Barter"], ["goods", "Goods & Services"], ["weapons", "Weapons"], ["concoctions", "Natural Concoctions"], ["mounts", "Mounts"]]},
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
 haus: [["welt", "Welt", "Völker, das Haus, Geschichte, Atlas"], ["regeln", "Regeln", "Charakter, Berufe, Proben, Contracts"], ["sl", "Spielleitung", "Saga, Gegner, Mysterien"]]
};
