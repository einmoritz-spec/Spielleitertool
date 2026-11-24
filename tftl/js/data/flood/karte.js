/* Loop-Karten (E3): Doppelseiten S. 28–29 (Mälarinseln) und S. 42–43 (Boulder City); Pins in Prozent des Bildes.
   l = nur in diesem Loop, sb = Seite im US-Teil. Pins der Landschaftsorte nach der Karte S. 111 (nur Mälarinseln, dort einzige Karte). */
window.FLOOD = window.FLOOD || {};
window.FLOOD.KARTE = {
  titel: "Mystery-Landschaft",
  loops: [["maelar","Mälarinseln"],["boulder","Boulder City"]],
  bild: {maelar: "flood/karte-maelar-voll", boulder: "flood/karte-boulder-voll"},
  orte: [
    {id:"piraten", name:"{{Das Magnetrinschiff der Radiopiraten|Die Wüstenpiraten}}", s:117, sb:119},
    {id:"sunshine", name:"Sunshine Farm", s:121, pin:{maelar:[34.5,61.4]}},
    {id:"littledoe", name:"Little Doe Trailerpark", s:123, pin:{maelar:[39.4,55.1]}},
    {id:"liebe", name:"Die Wissenschaft der Liebe", s:125, pin:{maelar:[43.9,35.0]}},
    {id:"schachclub", name:"Der Serbische Schachclub", s:127, pin:{maelar:[29.2,41.2]}},
    {id:"evak", name:"Die Evakuierungszone", s:31, l:"maelar", pin:{maelar:[61.5,31.8]}},
    {id:"kungsberga", name:"Kungsberga", s:31, l:"maelar", pin:{maelar:[58.2,35.5]}},
    {id:"faerentuna", name:"Färentuna", s:31, l:"maelar", pin:{maelar:[59.3,44.8]}},
    {id:"stenhamra", name:"Stenhamra", s:32, l:"maelar", pin:{maelar:[68.9,69.8]}},
    {id:"sockarby", name:"Der Steinbruch von Sockarby", s:32, l:"maelar", pin:{maelar:[72.5,66.8]}},
    {id:"kuehl", name:"Die Bona-Kühltürme", s:34, l:"maelar", pin:{maelar:[46,42.6]}},
    {id:"bona", name:"Der Loop (Bona-Reaktor)", s:35, l:"maelar", pin:{maelar:[46.7,38.4]}},
    {id:"bcity", name:"Boulder City", s:41, l:"boulder", pin:{boulder:[15.8,77]}},
    {id:"mead", name:"Lake Mead", s:44, l:"boulder", pin:{boulder:[39,24.6]}},
    {id:"hoover", name:"Der Hoover-Damm", s:44, l:"boulder", pin:{boulder:[48,53]}},
    {id:"uloop", name:"Der Loop in den USA", s:45, l:"boulder", pin:{boulder:[26.8,47.3]}},
    {id:"wueste", name:"Die Wüstenzone", s:46, l:"boulder"}
  ]
};
