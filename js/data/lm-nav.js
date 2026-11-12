/* Legend in the Mist – Nachschlagewerk (Core Book + Setting Book, deutsche Fassung). Abschnitte → Dateien js/data/lm/*.js (LM_FILES, erzeugt von tools/lm/build-nav.py). */
const LM_NAV = {
  tabs:[
    {id:"regeln", t:"Regeln", src:"Core Book"},
    {id:"welt", t:"Welt", src:"Setting Book: The Dales"}
  ],
  secs:{
    regeln:[
      {id:"einstieg", t:"Einführung", p:54, pe:69},
      {id:"erschaffung", t:"Heldenerschaffung", p:72, pe:91},
      {id:"themenbuecher", t:"Themenbücher", p:92, pe:141},
      {id:"handlung", t:"Handlung & Drama", p:142, pe:185},
      {id:"entwicklung", t:"Heldenentwicklung", p:186, pe:195},
      {id:"magie", t:"Magie", p:196, pe:230}
    ],
    welt:[
      {id:"dales", t:"Die Dales: Land", p:22, pe:66},
      {id:"dales-b", t:"Die Dales: Leben", p:67, pe:115},
      {id:"dales-c", t:"Die Dales: Geschichten", p:116, pe:163},
      {id:"jenseits", t:"Jenseits: Norden", p:164, pe:210},
      {id:"jenseits-b", t:"Jenseits: Mitte", p:211, pe:260},
      {id:"jenseits-c", t:"Jenseits: Süden", p:261, pe:307}
    ]
  }
};
