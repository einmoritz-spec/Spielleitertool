/* Kartenmaterial: Crime Board City Map 2 (Local Legends). Spielerkarte = ohne Fall-Hinweise, SL-Karte = mit lila Markierungen für die Fälle.
   Hotspots der Stadtkarte in Prozent (Mitte x/y, Breite/Höhe) über dem jeweiligen Stadtteil-Namen. */
const LL_MAPS = {
  dir: "img/karten/",
  hot: [
    {id:"happyville",      x:58.9, y:4.8,  w:12, h:5.5},
    {id:"campus",          x:54.9, y:18.3, w:12, h:5.5},
    {id:"fortune_row",     x:81.6, y:17.5, w:12, h:5.5},
    {id:"independence",    x:80.9, y:29.7, w:14, h:5.5},
    {id:"colonia_sombras", x:22.3, y:30.4, w:20, h:5.5},
    {id:"chinatown",       x:37.5, y:32.6, w:12, h:5.5},
    {id:"tourist_trap",    x:70.0, y:53.6, w:12, h:5.5},
    {id:"sunken_city",     x:86.0, y:63.0, w:11, h:4.2, label:"The Sunken City"},
    {id:"undertrash",      x:11.0, y:70.0, w:11, h:4.2, label:"The Undertrash"}
  ],
  notOnMap: {sunken_city:"unter der Bucht", undertrash:"unter der Stadt"}
};

/* Portraits der NSCs (Fotos aus dem Buch), Schlüssel = Name der Karte */
const LL_PORTRAITS = {
  "_chows": "img/portraits/chairman-chow.webp",
  "ISAIAH COLM": "img/portraits/isaiah-colm.webp",
  "DIANA CHANDLER (ONCE IN A BLUE MOON)": "img/portraits/diana-chandler.webp",
  "QUINCY WILLIAM REID": "img/portraits/quincy-william-reid.webp",
  "STELLA ROI": "img/portraits/stella-roi.webp",
  "SEAN MCMANNON": "img/portraits/sean-mcmannon.webp",
  "TY FAIRCHILDE": "img/portraits/ty-fairchilde.webp"
};
