/* Loop-Karten: Original-Karte aus dem Corebook, Pins nur dort, wo das Buch den Ort auf der Karte benennt */
window.KARTE = {
  loops: [["maelar","Mälarinseln"],["boulder","Boulder City"]],
  bild: {maelar: "karte-maelaren-voll", boulder: "karte-boulder-voll"},
  orte: [
    {id:"bib", name:"Die Schulbibliothek", s:101, pin:{maelar:[66.9,71.4], boulder:[15.5,77]}},
    {id:"traum", name:"Der Traumladen", s:103},
    {id:"natur", name:"Der Naturschutzclub", s:104},
    {id:"kuehl", name:"Die Kühltürme", s:106, pin:{maelar:[45.7,43.5], boulder:[25.4,45.5]}},
    {id:"polizei", name:"Die Polizeiwache {{Stenhamra|Boulder City}}", s:107, pin:{maelar:[66.9,71.4], boulder:[15.5,77]}},
    {id:"naab", name:"NAAB", s:109}
  ]
};
