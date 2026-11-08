/* Stadtkarte (Crime Board City Map): Hotspots in Prozent des Kartenbilds (Mittelpunkt x/y, Größe w/h). Links: Fall + Abschnitt. */
window.NIGHTS = window.NIGHTS || { cases: {} };
(function(){
  const S = (label, px, py, links, w, h) => ({ label, x: +(px/1600*100).toFixed(2), y: +(py/1185*100).toFixed(2), w: w||5.2, h: h||2.6, links });
  window.NIGHTS.map = {
    image: "img/stadtkarte.webp", ratio: 2843/2105,
    spots: [
      S("The Washboard", 1040, 437, [{c:1,s:"das-washboard",t:"Fall 1 · Das Washboard"}]),
      S("Bancroft Penthouse", 623, 630, [{c:1,s:"das-bancroft-penthouse",t:"Fall 1 · Das Bancroft-Penthouse"}]),
      S("Green Meadow Funeral Home", 357, 125, [{c:1,s:"bestattungsinstitut-green-meadows",t:"Fall 1 · Bestattungsinstitut Green Meadows"}], 6.5),
      S("The Opera House", 1197, 413, [{c:1,s:"das-opernhaus",t:"Fall 1 · Das Opernhaus"}]),
      S("Harrington Welding & Fabrication", 970, 1040, [{c:1,s:"schweisserei-harrington",t:"Fall 1 · Schweißerei Harrington"}], 6, 3.4),
      S("The Woodworths' Apartment", 1085, 598, [{c:2,s:"die-wohnung-der-woodworths",t:"Fall 2 · Die Wohnung der Woodworths"}]),
      S("David Nguyen's Condo", 967, 613, [{c:2,s:"david-nguyens-wohnung",t:"Fall 2 · David Nguyens Wohnung"}]),
      S("Corner of Pine and 5th", 1040, 643, [{c:2,s:"ecke-pine-und-5th",t:"Fall 2 · Ecke Pine und 5th"}]),
      S("Office of PI Holiday", 1010, 680, [{c:2,s:"detektei-holliday",t:"Fall 2 · Detektei Holliday"}]),
      S("Abandoned Fairground", 1168, 82, [{c:2,s:"verlassener-rummelplatz",t:"Fall 2 · Verlassener Rummelplatz"}], 6),
      S("The Joneses' Apartment", 833, 656, [{c:3,s:"wohnung-der-familie-jones",t:"Fall 3 · Wohnung der Familie Jones"}]),
      S("The Asylum", 193, 627, [{c:3,s:"die-anstalt",t:"Fall 3 · Die Anstalt"}]),
      S("Dept. of the Psyche – Supervision Meeting", 934, 232, [{c:3,s:"supervision",t:"Fall 3 · Supervision"}], 7),
      S("The Historical Society", 668, 274, [{c:3,s:"die-historische-gesellschaft",t:"Fall 3 · Die Historische Gesellschaft"}]),
      S("Aurora Glassworks", 990, 1105, [{c:3,s:"aurora-glas",t:"Fall 3 · Aurora Glas"}]),
      S("Charlie's Little Toy Room", 332, 607, [{c:4,s:"charlies-spielzimmer",t:"Fall 4 · Charlies Spielzimmer"}]),
      S("Will Harris' Apartment", 411, 626, [{c:4,s:"will-harris-wohnung",t:"Fall 4 · Will Harris' Wohnung"}]),
      S("The Leckermaul House", 753, 347, [{c:4,s:"frau-leckermauls-haus",t:"Fall 4 · Frau Leckermauls Haus"}]),
      S("Candy Drug Lab", 176, 520, [{c:4,s:"das-kandis-drogenlabor",t:"Fall 4 · Das Kandis-Drogenlabor"}]),
      S("The Public Swimming Pool", 270, 468, [{c:4,s:"das-schwimmbad",t:"Fall 4 · Das Schwimmbad"}], 6),
      S("Hans' Loft", 880, 1090, [{c:4,s:"hans-loft",t:"Fall 4 · Hans' Loft"}]),
      S("Old Aurora Glassworks Factory", 505, 424, [{c:4,s:"die-alte-aurora-glashuette",t:"Fall 4 · Die alte Aurora-Glashütte"}], 6.5),
      S("Chinatown Festival", 757, 378, [{c:5,s:"chinatown-festival",t:"Fall 5 · Chinatown-Festival"}]),
      S("Valerien's Oddities & Curiosities", 975, 368, [{c:5,s:"val-riens-kuriosa",t:"Fall 5 · Valériens Kuriosa"}], 6.5),
      S("Canseliet Manor", 666, 347, [{c:6,s:"canseliet-manor",t:"Fall 6 · Canseliet Manor"}]),
      S("Precinct 63 (Camelot)", 727, 792, [{c:7,s:"schlacht-um-das-63-revier",t:"Fall 7 · Schlacht um das 63. Revier"},{c:9,s:"camelot",t:"Fall 9 · Camelot"}]),
      S("The Overgrown Ruin", 812, 832, [{c:7,s:"die-ueberwucherte-ruine",t:"Fall 7 · Die überwucherte Ruine"}]),
      S("The Double Dragon", 740, 898, [{c:7,s:"das-double-dragon",t:"Fall 7 · Das Double Dragon"}]),
      S("The Junkyard", 655, 877, [{c:7,s:"der-schrottplatz",t:"Fall 7 · Der Schrottplatz"}]),
      S("The Basketball Court", 908, 825, [{c:7,s:"basketballplatz",t:"Fall 7 · Basketballplatz"}], 6),
      S("Concerned Citizens Council", 880, 903, [{c:7,s:"bewegung-besorgter-buerger-innen",t:"Fall 7 · Bewegung Besorgter Bürger:innen"}], 6.5),
      S("The Stone Altar", 660, 945, [{c:9,s:"der-steinaltar",t:"Fall 9 · Der Steinaltar"}]),
      S("Ray Gibbons' Man Cave", 660, 666, [{c:9,s:"ray-gibbons-junggesellenbude",t:"Fall 9 · Ray Gibbons' Junggesellenbude"}], 6),
      S("Clarke Law", 610, 717, [{c:8,s:"kanzlei-clarke",t:"Fall 8 · Kanzlei Clarke"}]),
      S("Grey Alley", 650, 742, [{c:8,s:"grey-alley",t:"Fall 8 · Grey Alley"}]),
      S("The Navarro Residence", 528, 815, [{c:8,s:"zuhause-der-navarros",t:"Fall 8 · Zuhause der Navarros"}], 6),
      S("The Abandoned Main Street", 600, 797, [{c:8,s:"verlassene-hauptstrasse",t:"Fall 8 · Verlassene Hauptstraße"}], 6.5),
      S("Church of the Sacred Spirit", 550, 715, [{c:8,s:"kirche-des-heiligen-geistes",t:"Fall 8 · Kirche des Heiligen Geistes"}], 6),
      S("Eva's Childhood Home", 638, 122, [{c:8,s:"evas-elternhaus",t:"Fall 8 · Evas Elternhaus"}], 6),
      S("Eva's Luxury Home", 510, 1048, [{c:8,s:"schicht-3",t:"Fall 8 · Evas Luxusvilla (Schicht 3)"}]),
      S("Rice Assets", 835, 590, [{c:8,s:"rice-immobilien",t:"Fall 8 · Rice Immobilien"}]),
      S("Parkside Cafe", 680, 570, [{c:10,s:"parkside-cafe",t:"Fall 10 · Parkside Cafe"}]),
      S("The Salvage Yard", 1493, 52, [{c:10,s:"abwrackwerft",t:"Fall 10 · Abwrackwerft"}])
    ]
  };
})();
