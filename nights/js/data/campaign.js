/* Kampagnenübersicht: Ebenen und Fälle (Seitenbereiche des Buchs). Die Falldaten liegen je Fall in case01.js … case10.js. */
window.NIGHTS = window.NIGHTS || { cases: {} };
window.NIGHTS.campaign = {
  title: "Nachts in Payne Town",
  levels: [
    { id:"pers",  name:"Persönliche Ebene", sub:"Antagonistin: Dr. Krystal Knight (Schneekönigin)", pages:[20,83],  tone:"ice",   cases:[1,2,3] },
    { id:"myst",  name:"Mystische Ebene",   sub:"Antagonist: Armand Kai (Fulcanelli)",              pages:[84,175], tone:"amber", cases:[4,5,6] },
    { id:"krim",  name:"Kriminelle Ebene",  sub:"Antagonist: Vince Beaumont (König Artus)",         pages:[176,258],tone:"neon",  cases:[7,8,9] },
    { id:"final", name:"Finale",            sub:"Corbin Payne, der Fischerkönig",                   pages:[259,284],tone:"gold",  cases:[10] }
  ],
  cases: {
    1:  { title:"Der sanfte Tod",            pages:[23,40],  level:"pers" },
    2:  { title:"Kirmes der Maschinen",      pages:[41,60],  level:"pers" },
    3:  { title:"Scherben",                  pages:[61,83],  level:"pers" },
    4:  { title:"Athanor",                   pages:[87,112], level:"myst" },
    5:  { title:"Der Kult des Gottkönigs",   pages:[113,149],level:"myst" },
    6:  { title:"Der Alchemist",             pages:[151,175],level:"myst" },
    7:  { title:"Albion erwache!",           pages:[181,208],level:"krim" },
    8:  { title:"Daheim ist daheim",         pages:[209,232],level:"krim" },
    9:  { title:"Die Straßen bluten Neon",   pages:[233,258],level:"krim" },
    10: { title:"Parzival",                  pages:[259,284],level:"final" }
  },
  appendix: { pages:[285,296] },
  intro: { pages:[1,19] }
};
