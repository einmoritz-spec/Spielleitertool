/* Saga vom Brüchigen Frieden › Kapitel III: Übersicht (Saga-Band S.137) */
(function(){
var K = (window.HH_TEXT = window.HH_TEXT || {})["fp/k3"] = window.HH_TEXT["fp/k3"] || [];
var T = {deepdown: "fp-s138-iii-breakout-at-deepdown", kerzenschein: "fp-s139-iii-by-candlelight", protopopolov3: "fp-s140-iii-traveling-with-protopopolov-iii", bookshire: "fp-s141-iii-murder-in-bookshire", zoo: "fp-s142-iii-the-zoological-garden", greenwood: "fp-s143-iii-hunt-in-greenwood",
  rox: "fp-s146-iii-duncan-roxs-gang", code: "fp-s147-iii-argos-code", gesucht: "fp-s148-iii-wanted", protopopolov4: "fp-s149-iii-traveling-with-protopopolov-epilogue", ira: "fp-s150-iii-ira-poole-must-die", rache2: "fp-s151-iii-qamars-revenge-ii"},
  U = {deepdown: "Icarus, Jemma, Tubo, Yuliya", kerzenschein: "Malaika, Gwen, Pryscilla, Ira", protopopolov3: "Hannah, Pierre, Litha, Gunther", bookshire: "Sienna, Aidan, Siobhan, Micah", zoo: "Jocelyne, Dimitri, Zehra, Earnest", greenwood: "Qamar, Floyd, Santiago, Humphrey",
  rox: "Sienna, Floyd, Santiago, Humphrey", code: "Siobhan, Aidan, Gwen, Yuliya", gesucht: "Jemma, Zehra, Litha, Tubo", protopopolov4: "Hannah, Pierre, Gunther, Earnest", ira: "Ira, Pryscilla, Malaika, Micah", rache2: "Icarus, Dimitri, Qamar, Jocelyne"};
function kach(ids){ return {t: "kacheln", gross: 1, breit: 1, r: "fp/k3/", x: ids.map(function(id){ var a = K.filter(function(e){ return e.id === id; })[0]; return {n: a.t, id: id, s: T[id], u: U[id]}; })}; }
K.unshift({id: "uebersicht", t: "Kapitel III", p: 137, b: [
  {t: "h", x: "Paragraph I · April bis Juli VIII H.C."},
  kach(["deepdown", "kerzenschein", "protopopolov3", "bookshire", "zoo", "greenwood"]),
  {t: "h", x: "Paragraph II · August VIII H.C. bis Januar IX H.C."},
  kach(["rox", "code", "gesucht", "protopopolov4", "ira", "rache2"])]});
})();
