/* The Spire – Stadtkarte S. 0 (img/karte.webp, 1700×2200): unsichtbare Klickflächen.
   poly = Punkte im Anzeigemaß 1545×2000 (viewBox der Karte). t = deutscher Name, x = übersetzter Kartentext (wie auf der Karte gedruckt),
   dom/d = Domäne und Distrikt (Ziel #stadt/<dom>/<d>), p = Seite; chips = Distrikte aus dem Buch, die der Kartentext nennt (mit dom: Klick öffnet die Auswahl);
   hv = weitere Distrikte (dom/d), die beim Überfahren der Domänenliste diese Fläche hervorheben.
   Bezirke ohne eigenes Kapitel zeigen nur den Kartentext. */
window.SP_KARTE = {w:1545, h:2000, flaechen:[
 {id:"himmel", t:"Neuer Himmel", dom:"religion", d:"himmel", p:169, x:"Vogeldruiden und Bienendruiden. Bestatter. Mondsucher. Türme des Schweigens. Scheitelpunkt. Der Himmel.",
  poly:"715,0 1300,0 1255,60 1160,165 1030,248 920,248 850,195 770,105"},
 {id:"basilika", t:"Sonnenbasilika", dom:"religion", d:"basilika", p:165, x:"Neue Kathedrale. Himmelsdocks. Mondbrunnen. Magiekolleg.", chips:[["Die Himmelsdocks","handel","himmelsdocks"],["Hochelfische Universität der Göttlichen Magie","akademie","universitaet"]], hv:["handel/himmelsdocks","akademie/universitaet"],
  poly:"700,90 850,150 905,235 850,350 770,470 650,495 590,455 480,385 480,300 560,230 640,150"},
 {id:"amaranth", t:"Amaranth", dom:"hoch", d:"amaranth", p:107, x:"Vergnügungskuppeln der Hochelfen. Eishöhlen. Ratskammern. Spiralgärten. Straße der Masken.",
  poly:"1000,235 1200,170 1330,300 1365,385 1260,470 1230,560 1090,600 980,550 900,495 850,400 860,340"},
 {id:"silber", t:"Silberviertel", dom:"hoch", d:"silberviertel", p:113, x:"Meerjungfrauenclub. Endloser Kanal. Unmaskierter Bezirk. Vergoldete Auster.",
  poly:"500,590 570,560 680,535 830,485 975,610 965,665 855,780 790,805 685,745 560,785 540,700"},
 {id:"ivory", t:"Ivory Row", dom:"hoch", d:"ivoryrow", p:110, x:"Oberes Perch. Friedhof der Kleinen Götter. Alte Kathedrale. Verstecktes Ministerium?", chips:[["Perch","nieder","perch"]],
  poly:"950,545 1065,545 1200,775 1150,885 1050,990 950,1010 850,985 740,1020 715,1000 800,835 900,725"},
 {id:"perch", t:"Perch", dom:"nieder", d:"perch", p:119, x:"",
  poly:"548,860 680,860 705,905 700,990 625,992 548,950"},
 {id:"mittelstadt", t:"Mittelstadt", x:"Gefängnisstock. Wilde Gassen. Giftpilze. Unteres Perch. Seiler und Knoter.",
  poly:"1085,745 1200,655 1330,625 1420,705 1545,765 1545,1195 1400,1290 1280,1290 1180,1262 1085,1170 1055,1050 1065,900"},
 {id:"egel", t:"Blutegelkanäle", dom:"nieder", d:"garten", p:121, x:"Hängende Gärten. Grubwerke. Irrlichtlichtungen.",
  poly:"872,1042 950,1002 1060,1012 1102,1120 1062,1232 942,1252 882,1162"},
 {id:"algen", t:"Algenfarmen", dom:"nieder", d:"garten", p:121, x:"Heuschreckenhalter. Unkrautwälder. Toter Titan. Karmesinroter Teich.",
  poly:"592,1132 700,1062 790,1052 860,1092 890,1172 842,1252 702,1272 612,1252"},
 {id:"wildzonen", t:"Wilde Zonen", x:"Eichenmutter. Todeslilien. Elfenfallen. Der alte Zoo.",
  poly:"690,1282 780,1262 900,1262 932,1312 902,1442 802,1482 702,1452 682,1362"},
 {id:"werke", t:"Die Werke", dom:"nieder", d:"werke", p:124, x:"Manufakturen. Turbinen. Die Tägliche Fackel. Greymanors Detektivbüro.",
  poly:"945,1440 1125,1180 1315,1390 1090,1580"},
 {id:"pilgerweg", t:"Pilgerweg", dom:"religion", d:"pilgerweg", p:163, x:"Götterstraße. Schreine. Sekten. Vulgata. Paladine.",
  poly:"1085,1625 1300,1505 1470,1495 1545,1545 1545,1790 1450,1850 1255,1935 1200,1875 1112,1765"},
 {id:"perdita", t:"Saint Perdita's Circle", x:"Jennisgate. Moongate. Alph & Zeph. Norddocks. Blauer Markt. Dreadnaught. Zollhaus. Haupttore.", chips:[["Die Norddocks","handel","norddocks"],["Der Blaue Hafen","handel","hafen"]], hv:["handel/norddocks","handel/hafen"],
  poly:"700,1700 830,1585 960,1545 1078,1625 1090,1780 1192,1900 1165,1990 700,1990 690,1790"},
 {id:"herz", t:"Das Herz", dom:"okkult", d:"herz", p:133, x:"Grubenhöhlen. Hexen. Chaos. Fluss. Traum.",
  poly:"25,1812 280,1812 280,1990 25,1990"},
 {id:"unterstadt", t:"Unterstadt", x:"Red Row. L’Enfer. Derelictus. Grist.", chips:[["Red Row","verbrechen","redrow"],["Derelictus","nieder","derelictus"]], hv:["verbrechen/redrow","nieder/derelictus"],
  poly:"285,1812 520,1832 700,1852 700,1990 285,1990"}
]};
