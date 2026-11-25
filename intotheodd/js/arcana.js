/* Bereich Arcana */
var ASUB = [["tabelle","Arcana-Tabelle"],["gross","Große Arcana"],["legend","Legendäre Arcana"]];
var ACOL = ["var(--pink)","var(--orange)","var(--teal)","var(--blue)","#c9a24a","#b9856a"];
function acard(a, c, num, dark){
  return '<div class="ac' + (dark ? " dk" : "") + '" style="--c:' + c + '">' + (num ? '<b class="no">' + num + '</b>' : "") + '<h4>' + esc(a[0]) + '</h4><p>' + md(a[1]) + '</p></div>';
}
function aTab(){
  var A = ITO.arc, h = "";
  A.klein.forEach(function(a){ h += acard([a[1], a[2]], ACOL[Math.floor(a[0] / 10) - 1], a[0]); });
  return '<div class="rp"><div class="split l"><div class="sp-img"><img src="' + IMG("arcana-kugel") + '" alt=""></div><div>' + head("Kapitel 4", "Arcana", "S. 20") +
    '<p class="lead one"><b>Kräfte, die du nicht verstehst.</b> ' + esc(A.intro) + '</p><div class="duo2"><img src="' + IMG("arcana-gesicht") + '" alt=""><img src="' + IMG("arcana-scheibe") + '" alt=""></div></div></div>' +
    '<h3 class="gh">Arcana-Tabelle (d66)' + pgl("S. 20") + '</h3><div class="g3 ag">' + h + '</div></div>';
}
function aList(key, img){
  var L = ITO.arc[key], dark = key === "legend";
  var cards = L.x.map(function(a, i){ return acard(a, dark ? ACOL[i % 4] : ACOL[i % 4], "", dark); }).join("");
  var hd = head(dark ? "Kapitel 4" : "Kapitel 4", dark ? "Legendäre Arcana" : "Große Arcana", L.p) + '<p class="lead one"><b>' + esc(L.sub) + '.</b> ' + esc(L.intro) + '</p>';
  return '<div class="rp">' + (img ? '<div class="split l"><div class="sp-img"><img src="' + IMG(img) + '" alt=""></div><div>' + hd + '</div></div>' : hd) + '<div class="g3 ag">' + cards + '</div></div>';
}
function viewArcana(sub){
  var P = {tabelle:aTab, gross:function(){ return aList("gross", "arcana-elefant"); }, legend:function(){ return aList("legend"); }};
  sub = P[sub] ? sub : "tabelle";
  return subbar(ASUB, sub, "arcana") + P[sub]();
}
