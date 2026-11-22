/* Loop-Karten: Original-Karte aus dem Corebook, Pins nur dort, wo das Buch den Ort auf der Karte benennt.
   l = nur in diesem Loop, b = Buch (sonst Corebook), n = [Datensatz, Überschrift/Abschnitt] für die Ortskarte aus Nachschlagen.
   Taunus: Zusatzband Kap. 2 (Karte S. 22–23), Norfolk Broads: They Grow Up So Fast Kap. 2 (Karte S. 14). Pins in Prozent des Bildes. */
window.KARTE = {
  loops: [["maelar","Mälarinseln"],["boulder","Boulder City"],["taunus","Taunus"],["broads","Norfolk Broads",["grow-broads","easter","bestof","lastsmile","toomuch"]]],
  bild: {maelar: "karte-maelaren-voll", boulder: "karte-boulder-voll", taunus: "taunus-karte", broads: "grow-loop-karte"},
  orte: [
    {id:"bib", l:["maelar","boulder"], name:"Die Schulbibliothek", s:101, pin:{maelar:[66.9,71.4], boulder:[15.5,77]}},
    {id:"traum", l:["maelar","boulder"], name:"Der Traumladen", s:103},
    {id:"natur", l:["maelar","boulder"], name:"Der Naturschutzclub", s:104},
    {id:"kuehl", l:["maelar","boulder"], name:"Die Kühltürme", s:106, pin:{maelar:[45.7,43.5], boulder:[25.4,45.5]}},
    {id:"polizei", l:["maelar","boulder"], name:"Die Polizeiwache {{Stenhamra|Boulder City}}", s:107, pin:{maelar:[66.9,71.4], boulder:[15.5,77]}},
    {id:"naab", l:["maelar","boulder"], name:"NAAB", s:109},

    {id:"t-kron", l:"taunus", b:"tftl_z1", name:"Der Kronreaktor", s:20, n:["taunus","Der Kronreaktor und die Teilchenbeschleuniger-Anlage"], pin:{taunus:[52.5,47.7]}},
    {id:"t-bailiff", l:"taunus", b:"tftl_z1", name:"Camp Bailiff", s:21, n:["taunus","Camp Bailiff"], pin:{taunus:[56.3,60.7]}},
    {id:"t-see", l:"taunus", b:"tftl_z1", name:"Der Königssee", s:24, n:["taunus","Der Königssee"], pin:{taunus:[51.9,53.9]}},
    {id:"t-rod", l:"taunus", b:"tftl_z1", name:"Nieder-Oberrod", s:25, n:["taunus","Nieder-Oberrod"], pin:{taunus:[47.9,55.8]}},
    {id:"t-glas", l:"taunus", b:"tftl_z1", name:"Glashütten", s:25, n:["taunus","Glashütten"], pin:{taunus:[62.2,65.5]}},
    {id:"t-wald", l:"taunus", b:"tftl_z1", name:"Waldems", s:25, n:["taunus","Waldems"], pin:{taunus:[43.8,29.5]}},
    {id:"t-schm", l:"taunus", b:"tftl_z1", name:"Schmitten", s:25, n:["taunus","Schmitten"], pin:{taunus:[73.4,32.6]}},
    {id:"t-cam", l:"taunus", b:"tftl_z1", name:"Bad Camberg", s:26, n:["taunus","Bad Camberg"], pin:{taunus:[32.4,14.9]}},
    {id:"t-id", l:"taunus", b:"tftl_z1", name:"Idstein", s:26, n:["taunus","Idstein"], pin:{taunus:[28.9,65.4]}},
    {id:"t-kb", l:"taunus", b:"tftl_z1", name:"Königstein im Taunus und Kronberg im Taunus", s:26, n:["taunus","Königstein im Taunus und Kronberg im Taunus"], pin:{taunus:[78.4,84.4]}},
    {id:"t-neu", l:"taunus", b:"tftl_z1", name:"Neu-Anspach", s:26, n:["taunus","Neu-Anspach"], pin:{taunus:[91.8,20.1]}},
    {id:"t-spiel", l:"taunus", b:"tftl_z1", name:"Spielwarenladen Schmitz Spiel & Spaß", s:28, n:["taunus","spielwaren"], pin:{taunus:[43.2,25.4]}},
    {id:"t-vox", l:"taunus", b:"tftl_z1", name:"Musik-Club Vox", s:29, n:["taunus","vox"], pin:{taunus:[39.2,47.7]}},
    {id:"t-brief", l:"taunus", b:"tftl_z1", name:"Der tote Briefkasten von Oberreifenberg", s:30, n:["taunus","briefkasten"], pin:{taunus:[70.9,45.1]}},
    {id:"t-bolz", l:"taunus", b:"tftl_z1", name:"Der Bolzplatz von Waldems", s:32, n:["taunus","bolzplatz"], pin:{taunus:[47.2,32.2]}},
    {id:"t-hof", l:"taunus", b:"tftl_z1", name:"Der verlassene Bauernhof nahe Schmitten", s:34, n:["taunus","bauernhof"], pin:{taunus:[71.8,40]}},
    {id:"t-zig", l:"taunus", b:"tftl_z1", name:"Der Zigarettenautomat am Schloßborner Weg", s:34, n:["taunus","zigarettenautomat"], pin:{taunus:[60.2,67.4]}},
    {id:"t-weg", l:"taunus", b:"tftl_z1", name:"Der geheimnisvolle Waldweg", s:36, n:["taunus","waldweg"], pin:{taunus:[57.6,34]}},
    {id:"t-ki", l:"taunus", b:"tftl_z1", name:"Die Kaiser-KI", s:38, n:["taunus","kaiserki"]},
    {id:"t-ass", l:"taunus", b:"tftl_z1", name:"Herr Asselmann", s:40, n:["taunus","asselmann"]},

    {id:"b-yar", l:"broads", b:"tftl_a2", name:"Great Yarmouth", s:10, n:["broads","yarmouth"], pin:{broads:[88.5,53.5]}},
    {id:"b-a47", l:"broads", b:"tftl_a2", name:"Die A47", s:10, n:["broads","achtziger","BMX fahren und erkunden"], pin:{broads:[60.3,44.2]}},
    {id:"b-flux", l:"broads", b:"tftl_a2", name:"Outflux East", s:11, n:["broads","yarmouth","Outflux East"], pin:{broads:[95,50.2]}},
    {id:"b-orm", l:"broads", b:"tftl_a2", name:"Ormesby Farms", s:12, n:["broads","dasbroads","Ormesby Farms"], pin:{broads:[64.8,12.8]}},
    {id:"b-hafen", l:"broads", b:"tftl_a2", name:"Der Magnetrin-Hafen", s:12, n:["broads","dasbroads","Der Magnetrin-Hafen"]},
    {id:"b-haupt", l:"broads", b:"tftl_a2", name:"Die Hauptanlagen", s:12, n:["broads","loop","Die Hauptanlagen"], pin:{broads:[56.5,51.5]}},
    {id:"b-reak", l:"broads", b:"tftl_a2", name:"Der Reaktor", s:13, n:["broads","loop","Der Reaktor"], pin:{broads:[57.5,58.3]}},
    {id:"b-lab", l:"broads", b:"tftl_a2", name:"Die Labore", s:13, n:["broads","loop","Die Labore"]}
  ]
};
