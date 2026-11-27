/* Vorlagen für den Charakterbogen: Deadlands – Western-Archetypen (Buch S. 11–17).
   Das Buch nennt keine fertig ausgerechneten Helden, sondern 18 Konzepte; Talente und Handicaps stehen hier nur, wo das Buch sie ausdrücklich vorschlägt. */
(function(){
var K = (window.DLD && DLD["charaktere/konzepte"] && DLD["charaktere/konzepte"].secs[0].b.filter(function(x){ return x.cards; })[0] || {cards: []}).cards;
var X = {
 "Begleiterin": {ta: ["Attraktiv", "Beziehungen"]},
 "Muckraker": {ta: ["Ermittler", "Charismatisch"]},
 "Indianischer Krieger": {ta: ["Naturbursche"]},
 "Gesetzeshüter": {ta: ["Charismatisch"], hi: [["Verpflichtung", "L"]]},
 "Blessed": {ah: "Blessed"},
 "Indianischer Schamane": {ah: "Shaman"},
 "Chi Master": {ah: "Chi Master"},
 "Huckster": {ah: "Huckster"},
 "Mad Scientist": {ah: "Mad Scientist"}
};
window.SW_VORLAGEN = [{kat: "Deadlands – Western-Archetypen", pg: 11, liste: K.map(function(k){
  var x = X[k.n] || {};
  return {n: k.n, s: k.s, b: k.b, ta: x.ta || [], hi: x.hi || [], ah: x.ah || ""};
})}];
})();
