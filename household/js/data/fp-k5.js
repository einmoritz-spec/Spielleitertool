/* Saga vom Brüchigen Frieden › Kapitel V: Übersicht (Saga-Band S.177) */
(function(){
var K = (window.HH_TEXT = window.HH_TEXT || {})["fp/k5"] = window.HH_TEXT["fp/k5"] || [];
var T = {julball: "fp-s178-v-the-great-yule-ball", jagd: "fp-s179-v-hunting-the-tristarred", rodeo: "fp-s180-v-the-centennial-rodeo", seiten: "fp-s181-v-the-stolen-pages", hochzeit: "fp-s182-v-zehras-wedding", verdeckt: "fp-s183-v-undercover",
  grau: "fp-s186-v-protect-and-conquer", turnier: "fp-s187-v-the-viletia-tournament", aufstand: "fp-s188-v-the-tournoire-uprising", mausefalle: "fp-s189-v-mouse-trap", gauner: "fp-s190-v-the-hard-life-of-a-criminal", fluch: "fp-s191-v-the-cursed-inbetweens",
  wagnis: "fp-s194-v-nothing-ventured", steinfluegel: "fp-s195-v-stone-wings", sterben: "fp-s196-v-time-to-die", asche: "fp-s197-v-ashes-to-ashes", domaene: "fp-s198-v-the-domain-contract", tafel: "fp-s199-v-attack-on-the-table"},
  U = {julball: "Santiago, Gunther, Pierre, Malaika", jagd: "Earnest, Icarus, Hannah, Yuliya", rodeo: "Floyd, Jemma, Litha, Sienna", seiten: "Gwen, Aidan, Humphrey, Siobhan", hochzeit: "Zehra, Tubo, Qamar, Micah", verdeckt: "Dimitri, Ira, Jocelyne, Pryscilla",
  grau: "Yuliya, Dimitri, Santiago, Icarus", turnier: "Siobhan, Aidan, Micah, Qamar", aufstand: "Ira, Malaika, Zehra, Tubo", mausefalle: "Floyd, Earnest, Hannah, Sienna", gauner: "Gunther, Pryscilla, Pierre, Jocelyne", fluch: "Gwen, Humphrey, Jemma, Litha",
  wagnis: "Gunther, Jocelyne, Pierre, Pryscilla", steinfluegel: "Hannah, Malaika, Ira, Icarus", sterben: "Aidan, Siobhan, Micah, Qamar", asche: "Floyd, Earnest, Sienna, Santiago", domaene: "Gwen, Humphrey, Jemma, Litha", tafel: "Yuliya, Dimitri, Tubo, Zehra"};
function kach(ids){ return {t: "kacheln", gross: 1, breit: 1, r: "fp/k5/", x: ids.map(function(id){ var a = K.filter(function(e){ return e.id === id; })[0]; return {n: a.t, id: id, s: T[id], u: U[id]}; })}; }
K.unshift({id: "uebersicht", t: "Kapitel V", p: 177, b: [
  {t: "h", x: "Paragraph I · Dezember IX bis Februar X H.C."},
  kach(["julball", "jagd", "rodeo", "seiten", "hochzeit", "verdeckt"]),
  {t: "h", x: "Paragraph II · März bis September X H.C."},
  kach(["grau", "turnier", "aufstand", "mausefalle", "gauner", "fluch"]),
  {t: "h", x: "Paragraph III · Oktober X H.C."},
  kach(["wagnis", "steinfluegel", "sterben", "asche", "domaene", "tafel"])]});
})();
