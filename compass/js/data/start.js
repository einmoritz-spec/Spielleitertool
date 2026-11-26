/* Broken Compass – Inhalte der Startseite: die sechs Abschnitte des Adventure Journal und die Staffeln.
   b = Buch-ID (sys.js), s = Buchseite. Bilder unter img/start/. */
var BC_HERO = ["hero-hoehle", "hero-tempel", "hero-seeschlacht"];

var BC_AREAS = [
 {id: "grundlagen", t: "Grundlagen", k: "Der Geist des Abenteuers", c: "#1d2c4d", img: "ab1-grundlagen", pos: "30% 40%", s: 6,
  sub: ["Broken Compass", "Wo und wann", "Grundpfeiler des Abenteuers", "Wie man spielt", "Gemeinsam spielen", "Wie im Kino", "Folge dem zerbrochenen Kompass"]},
 {id: "abenteurer", t: "Abenteurer", k: "Wie Abenteurer entstehen", c: "#a8701f", img: "ab2-abenteurer", pos: "8% 30%", s: 24,
  sub: ["Wer bist du?", "Abenteurerbogen", "Wie Abenteurer entstehen", "Expertise", "Gegenstände, Waffen, Ausrüstung", "Jung, alt, echt", "Der Zufallsabenteurer"]},
 {id: "herausforderungen", t: "Herausforderungen", k: "Stell dich der Herausforderung", c: "#1f3d2b", img: "ab3-herausforderungen", pos: "35% 30%", s: 58,
  sub: ["Schwierigkeit", "Sich stellen", "Erfolge", "Scheitern", "Wie fühlst du dich?"]},
 {id: "gefahren", t: "Gefahren", k: "Fallen und Kugeln", c: "#a3211b", img: "ab4-gefahren", pos: "20% 30%", s: 92,
  sub: ["Glück", "Glücksmünzen", "Fallen", "Feinde", "Prügelei", "Schießerei", "Das Ende eines Abenteurers"]},
 {id: "schatzsuche", t: "Schatzsuche", k: "Die Reise beginnt", c: "#6b3416", img: "ab5-schatzsuche", pos: "68% 40%", s: 138,
  sub: ["Episoden", "Pilot", "Staffel", "Der Schatz", "Dein Rivale", "Weltuntergangsuhr", "Fahrzeuge", "Hardmode"]},
 {id: "1999", t: "1999", k: "Die Welt im Jahr 1999", c: "#2a3d66", img: "ab6-1999", pos: "62% 30%", s: 190,
  sub: ["Technologie", "Übernatürliches", "Schätze", "Extras"]}
];

/* Pilot im Adventure Journal */
var BC_PILOT = {lab: "Pilot · Ins Auge des Sturms", t: "Der Zorn des Quetzalcoatl", img: "pilot-quetzalcoatl", b: "bc_aj", s: 214};

/* Staffeln: Folgen mit eigenem Bild im Buch haben img, die anderen erscheinen als Titelkarte */
var BC_STAFFELN = [
 {id: "jr", lab: "Staffel 2", t: "Jolly Roger", story: "Der Fluch von El Dorado", cover: "cover-jr", bild: "staffel-jr", c: "#6e1414", b: "bc_a1",
  eps: [["Alles in Flammen", 154, "jr-f1"], ["Eine zwielichtige Spelunke", 164, "jr-f2"], ["Sturm auf die Festung", 174, "jr-f3"],
        ["Auf hoher See", 186, "jr-f4"], ["Die Schatzinsel", 196, "jr-f5"], ["Die Entscheidung", 208, "jr-f6"]]},
 {id: "ve", lab: "Staffel 3", t: "Voyages Extraordinaires", story: "Die verschollene Expedition", cover: "cover-ve", bild: "staffel-ve", c: "#1f4a2c", b: "bc_a2",
  eps: [["Das fehlende Stück", 128, "ve-f1"], ["An einen außergewöhnlichen Ort", 140, "ve-f2"], ["Der gefährliche Übergang", 152, "ve-f3"],
        ["Was übrig bleibt", 164, "ve-f4"], ["Frei von Ketten", 176, "ve-f5"], ["Kettenreaktion", 186, "ve-f6"]]},
 {id: "lt", lab: "Spin-off", t: "LuckTales", story: "Episoden auf Abruf", cover: "cover-lt", bild: "staffel-lt", c: "#7a1b2a", b: "bc_z1",
  eps: [["Letzte Reise zum Toplitzsee", 80, "lt-f1"], ["Das Erbe des Herkules", 94, "lt-f2"], ["Auf der Suche nach Atlantis", 104, "lt-f3"],
        ["Yaoqins himmlische Welle", 114, "lt-f4"], ["Das Auge des Ra", 124, "lt-f5"], ["Gjallarhorns Ruf", 134, "lt-f6"],
        ["Das Ungeheuer in seinem Labyrinth", 146, "lt-f7"], ["Flucht von North Sentinel", 156, "lt-f8"], ["Der größte Schatz", 170, "lt-f9"],
        ["Mission: Unsterbliche Beute", 182, "lt-f10"], ["Grenzenlos", 192, "lt-f11"]]}
];
var BC_EPOK = {"bogen-fertig": 1, "jr1": 1, "jr2": 1, "jr3": 1, "jr4": 1, "jr5": 1, "jr6": 1, "lt1": 1, "lt10": 1, "lt11": 1, "lt2": 1, "lt3": 1, "lt4": 1, "lt5": 1, "lt6": 1, "lt7": 1, "lt8": 1, "lt9": 1, "pilot": 1, "quetzalcoatl": 1, "ve1": 1, "ve2": 1, "ve3": 1, "ve4": 1, "ve5": 1, "ve6": 1};
/* Folgenbilder auf weißem Grund (freigestellte Illustrationen): ungeschnitten zeigen */
var BC_WEISS = {"jr1": 1, "jr4": 1, "jr5": 1, "ve2": 1, "ve5": 1};
