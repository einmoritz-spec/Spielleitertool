/* Saga vom Langen Winter › Kapitel VI: Übersicht (Saga-Band S.78–79) */
(function(){
var K = (window.HH_TEXT = window.HH_TEXT || {})["lw/k6"] = window.HH_TEXT["lw/k6"] || [];
var T = {schrecklich: "lw-s083-vi-winter-kachel-schrecklich", yule: "lw-s089-vi-winter-kachel-yule", schnee: "lw-s095-vi-winter-kachel-schnee", ninja: "lw-s101-vi-winter-kachel-ninja", karawane: "lw-s107-vi-winter-kachel-karawane", krieg: "lw-s113-vi-winter-kachel-krieg",
  stein: "lw-s120-vi-stone-to-stone", tot: "lw-s121-vi-wanted-dead", origami: "lw-s122-vi-lady-origami", ast: "lw-s123-vi-the-broken-branch", funke: "lw-s124-vi-spark-of-war", ronin: "lw-s125-vi-33-ronin",
  feind: "lw-s128-vi-the-enemy-of-my-enemy", fest: "lw-s129-vi-twigbridge-shindig", schmetterling: "lw-s130-vi-arcadia-the-butterfly", rose: "lw-s131-vi-the-rose-and-the-thorn", freund: "lw-s132-vi-old-friend", tee: "lw-s133-vi-the-tea-ceremony",
  furie: "lw-s136-vi-the-avenging-fury", hass: "lw-s137-vi-full-of-hate", schrein: "lw-s138-vi-the-shrine-of-the-pale-coils", abrechnung: "lw-s139-vi-day-of-reckoning", linse: "lw-s140-vi-a-lens-for-a-lens", dieb: "lw-s141-vi-the-masked-thief"},
  U = {schrecklich: "Gunther, Gwen, Shiro, Soya", yule: "Icarus, Pierre, Ronja, Sienna", schnee: "Ajax, Cora, Kaelan, Koko", ninja: "Jiroku, Kurai, Naoko, Rubio", karawane: "Jemma, John, Nadja, Santiago", krieg: "Chaska, Humphrey, Sakari, Yuliya",
  stein: "Chaska, Kaelan, Koko, Ajax", tot: "John, Ronja, Rubio, Santiago", origami: "Jiroku, Kurai, Naoko, Sienna", ast: "Cora, Jemma, Nadja, Pierre", funke: "Humphrey, Icarus, Sakari, Yuliya", ronin: "Gunther, Gwen, Shiro, Soya",
  feind: "Humphrey, Jemma, Nadja, Yuliya", fest: "Ajax, Chaska, Koko, Rubio", schmetterling: "Cora, Icarus, Pierre, Sakari", rose: "John, Kaelan, Ronja, Santiago", freund: "Gwen, Kurai, Shiro, Sienna", tee: "Gunther, Jiroku, Naoko, Soya",
  furie: "Cora, Jemma, Nadja, Yuliya", hass: "Humphrey, John, Pierre, Santiago", schrein: "Gunther, Gwen, Kurai, Naoko", abrechnung: "Jiroku, Shiro, Sienna, Soya", linse: "Icarus, Ronja, Rubio, Sakari", dieb: "Ajax, Chaska, Kaelan, Koko"};
function kach(ids){ return {t: "kacheln", gross: 1, breit: 1, r: "lw/k6/", x: ids.map(function(id){ var a = K.filter(function(e){ return e.id === id; })[0]; return {n: a.t, id: id, s: T[id], u: U[id]}; })}; }
K.unshift({id: "uebersicht", t: "Kapitel VI", p: 78, b: [
  "Dezember XII bis November XIII H.C. Die sechs Abenteuer des Winters sind vollständig ausgearbeitet, alle weiteren sind Erzählanregungen auf je einer Seite.",
  {t: "h", x: "Paragraph I · Winter"},
  kach(["schrecklich", "yule", "schnee", "ninja", "karawane", "krieg"]),
  {t: "h", x: "Paragraph II · Frühling"},
  kach(["stein", "tot", "origami", "ast", "funke", "ronin"]),
  {t: "h", x: "Paragraph III · Sommer"},
  kach(["feind", "fest", "schmetterling", "rose", "freund", "tee"]),
  {t: "h", x: "Paragraph IIII · Herbst"},
  kach(["furie", "hass", "schrein", "abrechnung", "linse", "dieb"])]});
})();
