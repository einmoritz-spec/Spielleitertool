/* Legend in the Mist – Nachschlagewerk (Core Book + Setting Book, deutsche Fassung). Abschnitte → Dateien js/data/lm/*.js (LM_FILES, erzeugt von tools/lm/build-nav.py). */
const LM_NAV = {
  tabs:[
    {id:"regeln", t:"Regeln", src:"Core Book"},
    {id:"narrator", t:"Narrator", src:"Core Book"},
    {id:"orte", t:"Orte", src:"Setting Book: The Dales"},
    {id:"dales", t:"Land und Leute", src:"Setting Book: The Dales"},
    {id:"dales-b", t:"Gruppen und Helden", src:"Setting Book: The Dales"},
    {id:"dales-c", t:"Handwerk und Magie", src:"Setting Book: The Dales"},
    {id:"jenseits", t:"Welt und Mächte", src:"Setting Book: The Dales"},
    {id:"jenseits-c", t:"Wesen", src:"Setting Book: The Dales"}
  ],
  secs:{
    regeln:[
      {id:"tutorial", t:"Tutorial", p:10, pe:53},
      {id:"einstieg", t:"Einführung", p:54, pe:69},
      {id:"erschaffung", t:"Heldenerschaffung", p:72, pe:91},
      {id:"themenbuecher", t:"Themenbücher", p:92, pe:141},
      {id:"handlung", t:"Handlung & Drama", p:142, pe:185},
      {id:"entwicklung", t:"Heldenentwicklung", p:186, pe:195},
      {id:"magie", t:"Magie", p:196, pe:230}
    ],
    narrator:[
      {id:"nr-einstieg", t:"Einführung", p:248, pe:254},
      {id:"nr-sitzung", t:"Eine Sitzung narrieren", p:256, pe:283},
      {id:"nr-abenteuer", t:"Abenteuer und Serien", p:284, pe:320},
      {id:"nr-cauldron", t:"Magic Cauldron", p:321, pe:341},
      {id:"nr-challenges", t:"Beutel der Gefahren", p:342, pe:351},
      {id:"nr-anhang", t:"Anhang", p:466, pe:469}
    ],
    skunk:[
      {id:"nr-skunk", t:"Skunk Glen", p:448, pe:465}
    ],
    welt:[
      {id:"orte", t:"Orte", p:76, pe:107},
      {id:"dales", t:"Land und Leute", p:18, pe:66},
      {id:"dales-b", t:"Gruppen und Helden", p:67, pe:115},
      {id:"dales-c", t:"Handwerk und Magie", p:116, pe:163},
      {id:"jenseits", t:"Welt und Mächte", p:164, pe:210},
      {id:"jenseits-c", t:"Wesen", p:244, pe:307}
    ]
  }
};
