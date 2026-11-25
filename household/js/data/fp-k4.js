/* Saga vom Brüchigen Frieden › Kapitel IIII: Übersicht (Saga-Band S.153) */
(function(){
var K = (window.HH_TEXT = window.HH_TEXT || {})["fp/k4"] = window.HH_TEXT["fp/k4"] || [];
var T = {hundertjahrfeier: "fp-s154-iiii-the-centennial-celebration", duell: "fp-s155-iiii-santiago-vilars-last-duel", zwischenfall: "fp-s156-iiii-diplomatic-incident", urteil: "fp-s157-iiii-jemmas-sentence", spinnenkult1: "fp-s158-iiii-the-spider-cult-i", jahrhundertcoup1: "fp-s159-iiii-the-heist-of-the-century-i",
  spinnenkult2: "fp-s162-iiii-the-spider-cult-ii", protopopolovchen: "fp-s163-iiii-petty-protopopolovs", jahrhundertcoup2: "fp-s164-iiii-the-heist-of-the-century-ii", rost: "fp-s165-iiii-the-way-of-rust", medjay: "fp-s166-iiii-the-medjay-order", monster1: "fp-s167-iiii-the-tuberdam-monster-i",
  sonnenuntergangsteufel: "fp-s170-iiii-the-sunset-devil", monster2: "fp-s171-iiii-the-tuberdam-monster-ii", schlangengrab: "fp-s172-iiii-the-snakes-tomb", elendsviertel: "fp-s173-iiii-slumming-it", richtiges: "fp-s174-iiii-doing-the-right-thing", schuhe: "fp-s175-iiii-the-caliphs-shoes"},
  U = {hundertjahrfeier: "Earnest, Floyd, Litha, Humphrey", duell: "Hannah, Santiago, Pryscilla, Gunther", zwischenfall: "Icarus, Ira, Malaika, Jocelyne", urteil: "Qamar, Dimitri, Jemma, Yuliya", spinnenkult1: "Zehra, Aidan, Tubo, Pierre", jahrhundertcoup1: "Sienna, Siobhan, Gwen, Micah",
  spinnenkult2: "Tubo, Dimitri, Zehra, Yuliya", protopopolovchen: "Hannah, Pierre, Jocelyne, Gunther", jahrhundertcoup2: "Earnest, Sienna, Pryscilla, Micah", rost: "Jemma, Litha, Gwen, Icarus", medjay: "Santiago, Floyd, Qamar, Humphrey", monster1: "Malaika, Siobhan, Aidan, Ira",
  sonnenuntergangsteufel: "Santiago, Floyd, Gwen, Humphrey", monster2: "Malaika, Siobhan, Aidan, Ira", schlangengrab: "Qamar, Icarus, Litha, Yuliya", elendsviertel: "Hannah, Pryscilla, Pierre, Jocelyne", richtiges: "Jemma, Sienna, Earnest, Micah", schuhe: "Tubo, Dimitri, Gunther, Zehra"};
function kach(ids){ return {t: "kacheln", gross: 1, breit: 1, r: "fp/k4/", x: ids.map(function(id){ var a = K.filter(function(e){ return e.id === id; })[0]; return {n: a.t, id: id, s: T[id], u: U[id]}; })}; }
K.unshift({id: "uebersicht", t: "Kapitel IIII", p: 153, b: [
  {t: "h", x: "Paragraph I · Februar bis Juni IX H.C."},
  kach(["hundertjahrfeier", "duell", "zwischenfall", "urteil", "spinnenkult1", "jahrhundertcoup1"]),
  {t: "h", x: "Paragraph II · Juli bis September IX H.C."},
  kach(["spinnenkult2", "protopopolovchen", "jahrhundertcoup2", "rost", "medjay", "monster1"]),
  {t: "h", x: "Paragraph III · Oktober bis November IX H.C."},
  kach(["sonnenuntergangsteufel", "monster2", "schlangengrab", "elendsviertel", "richtiges", "schuhe"])]});
})();
