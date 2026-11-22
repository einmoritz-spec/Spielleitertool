/* Things from the Flood – Mysterien-Übersicht. Eintrag: [id, Titel, Zusatz, Bild, Fähnchen, Art, Ziel]; Art "l" = Link auf Ziel (Hash ohne Bereichs-Präfix), ohne Bild = Karteikarte */
window.FLOOD.MYSTERIEN = [
  {t:"Die Propheten von Pandora", tag:"Kampagne", sub:"Grundregelwerk · Kap. 8–12", items:[
    ["pandora","Hintergrund der Kampagne","Kap. 8 · S. 130","flood/k-pandora"],
    ["flesh","Aus Fleisch und Stahl","Kap. 9 · S. 134","flood/m-flesh","1"],
    ["ugliness","Die Hässlichkeit","Kap. 10 · S. 152","flood/m-ugliness","2"],
    ["traveler","Reisender","Kap. 11 · S. 168","flood/m-traveler","3"],
    ["ash","Asche zur Ewigkeit","Kap. 12 · S. 186","flood/m-ash","4"]]},
  {t:"Mystery-Landschaft", tag:"Offenes Spiel", dark:1, sub:"Kap. 7 · S. 108", items:[
    ["radio","Das Magnetrinschiff der Radiopiraten","S. 117","flood/landschaft-radio-kopf","","l","nach/landschaft/radio"],
    ["sunshine","Sunshine Farm","S. 121","","","l","nach/landschaft/sunshine"],
    ["littledoe","Little Doe Trailerpark","S. 123","flood/landschaft-littledoe-bild","","l","nach/landschaft/littledoe"],
    ["liebe","Die Wissenschaft der Liebe","S. 125","","","l","nach/landschaft/liebe"],
    ["schach","Der Serbische Schachclub","S. 127","flood/landschaft-schach-kopf","","l","nach/landschaft/schach"]]}
];
