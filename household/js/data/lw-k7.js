/* Saga vom Langen Winter › Kapitel VII: Übersicht (Saga-Band S.142–143) */
(function(){
var K = (window.HH_TEXT = window.HH_TEXT || {})["lw/k7"] = window.HH_TEXT["lw/k7"] || [];
var T = {whiteout: "lw-s144-vii-the-white-out", eule: "lw-s145-vii-the-last-owl", abendessen: "lw-s146-vii-the-honorable-dinner", mondtuer: "lw-s147-vii-the-moon-door", rox: "lw-s148-vii-is-it-you-duncan-rox", frosch: "lw-s149-vii-the-viscount-and-the-frog",
  ferne: "lw-s152-vii-from-faraway", flossen: "lw-s153-vii-fins", turnier: "lw-s154-vii-the-moon-tournament", yojimbo: "lw-s155-vii-yojimbos-trials", brauchst: "lw-s156-vii-what-you-need", vertrag: "lw-s157-vii-the-bloodied-contract",
  redcap: "lw-s160-vii-once-a-redcap", salz: "lw-s161-vii-salt-and-pepper", erbe: "lw-s162-vii-evanders-legacy", grab: "lw-s163-vii-the-tomb-of-barleduc", karasu: "lw-s164-vii-mount-karasu", ueberbord: "lw-s165-vii-overboard",
  feuer: "lw-s168-vii-the-brambles-fire", faeriyev: "lw-s169-vii-return-to-faeriyev", stab: "lw-s170-vii-the-staff-of-the-covenant", rache: "lw-s171-vii-oberons-revenge", konzert: "lw-s172-vii-the-concert", geist: "lw-s173-vii-the-ghost-of-the-blooming-meadow"},
  U = {whiteout: "Icarus, Kaelan, Nadja, Sakari", eule: "Ajax, Cora, Koko, Santiago", abendessen: "Jiroku, Pierre, Shiro, Soya", mondtuer: "Gunther, Gwen, Kurai, Naoko", rox: "Chaska, Humphrey, Jemma, John", frosch: "Ronja, Rubio, Sienna, Yuliya",
  ferne: "Icarus, Kaelan, Nadja, Ronja", flossen: "John, Rubio, Sakari, Sienna", turnier: "Gunther, Pierre, Soya, Yuliya", yojimbo: "Jemma, Jiroku, Kurai, Shiro", brauchst: "Chaska, Gwen, Humphrey, Naoko", vertrag: "Ajax, Cora, Koko, Santiago",
  redcap: "Chaska, Kaelan, Naoko, Sakari", salz: "Icarus, Jemma, John, Yuliya", erbe: "Ajax, Koko, Nadja, Ronja", grab: "Cora, Gwen, Humphrey, Santiago", karasu: "Jiroku, Kurai, Shiro, Soya", ueberbord: "Gunther, Pierre, Rubio, Sienna",
  feuer: "Jemma, John, Sakari, Yuliya", faeriyev: "Icarus, Kaelan, Nadja, Ronja", stab: "Cora, Gwen, Humphrey, Santiago", rache: "Gunther, Pierre, Rubio, Sienna", konzert: "Ajax, Chaska, Koko, Naoko", geist: "Jiroku, Kurai, Shiro, Soya"};
function kach(ids){ return {t: "kacheln", gross: 1, breit: 1, r: "lw/k7/", x: ids.map(function(id){ var a = K.filter(function(e){ return e.id === id; })[0]; return {n: a.t, id: id, s: T[id], u: U[id]}; })}; }
K.unshift({id: "uebersicht", t: "Kapitel VII", p: 142, b: [
  "Dezember XIII H.C. bis November XIV H.C. Alle Abenteuer dieses Kapitels sind Erzählanregungen auf je einer Seite.",
  {t: "h", x: "Paragraph I · Winter"},
  kach(["whiteout", "eule", "abendessen", "mondtuer", "rox", "frosch"]),
  {t: "h", x: "Paragraph II · Frühling"},
  kach(["ferne", "flossen", "turnier", "yojimbo", "brauchst", "vertrag"]),
  {t: "h", x: "Paragraph III · Sommer"},
  kach(["redcap", "salz", "erbe", "grab", "karasu", "ueberbord"]),
  {t: "h", x: "Paragraph IIII · Herbst"},
  kach(["feuer", "faeriyev", "stab", "rache", "konzert", "geist"])]});
})();
