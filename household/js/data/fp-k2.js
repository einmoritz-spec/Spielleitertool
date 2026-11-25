/* Saga vom Brüchigen Frieden › Kapitel II: Übersicht (Saga-Band S.121) */
(function(){
var K = (window.HH_TEXT = window.HH_TEXT || {})["fp/k2"] = window.HH_TEXT["fp/k2"] || [];
var T = {banister: "fp-s122-ii-tragedy-on-the-banister", spur: "fp-s123-ii-on-argos-trail", frischertat: "fp-s124-ii-red-handed", aufstieg: "fp-s125-ii-the-great-climb", grenze: "fp-s126-ii-the-umbral-frontier", protopopolov: "fp-s127-ii-traveling-with-protopopolov",
  hallway: "fp-s130-ii-the-long-hallway", protopopolov2: "fp-s131-ii-traveling-with-protopopolov-ii", grab: "fp-s132-ii-argos-tomb", pille: "fp-s133-ii-a-bitter-pill", koenigin: "fp-s134-ii-the-queen-and-the-boggart", rache: "fp-s135-ii-qamars-revenge"},
  U = {banister: "Aidan, Dimitri, Ira, Siobhan", spur: "Gwen, Humphrey, Pryscilla, Santiago", frischertat: "Icarus, Sienna, Micah, Floyd", aufstieg: "Gunther, Litha, Pierre, Tubo", grenze: "Jemma, Malaika, Qamar, Zehra", protopopolov: "Earnest, Hannah, Jocelyne, Yuliya",
  hallway: "Icarus, Jemma, Malaika, Zehra", protopopolov2: "Yuliya, Hannah, Litha, Tubo", grab: "Gwen, Humphrey, Pryscilla, Santiago", pille: "Aidan, Dimitri, Jocelyne, Siobhan", koenigin: "Pierre, Gunther, Ira, Floyd", rache: "Qamar, Earnest, Sienna, Micah"};
function kach(ids){ return {t: "kacheln", gross: 1, breit: 1, r: "fp/k2/", x: ids.map(function(id){ var a = K.filter(function(e){ return e.id === id; })[0]; return {n: a.t, id: id, s: T[id], u: U[id]}; })}; }
K.unshift({id: "uebersicht", t: "Kapitel II", p: 121, b: [
  {t: "h", x: "Paragraph I · Januar bis März VII H.C."},
  kach(["banister", "spur", "frischertat", "aufstieg", "grenze", "protopopolov"]),
  {t: "h", x: "Paragraph II · April VII H.C. bis März VIII H.C."},
  kach(["hallway", "protopopolov2", "grab", "pille", "koenigin", "rache"])]});
})();
