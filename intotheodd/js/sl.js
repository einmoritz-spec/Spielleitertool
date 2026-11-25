/* Bereich Spielleitung */
var SSUB = [["sl","Spielleitung"],["schaetze","Schätze"],["hindernisse","Hindernisse"],["begegnungen","Begegnungen"],["welt","Die Odd-Welt"]];
var SCOL = ["var(--pink)","var(--orange)","var(--teal)","var(--blue)","#c9a24a"];
function cc(L, p){ return L.map(function(x, i){ return def(x[0], x[1], "", SCOL[i % 5]); }).join(""); }
function sSl(){
  var s = ITO.sl;
  return '<div class="rp"><div class="banner" style="background-image:url(' + IMG("sl-lesender") + ')"><div>' + head("Kapitel 8", "Spielleitung", "S. 42") + '</div></div><p class="lead one">' + esc(s.intro) + '</p>' +
    '<div class="g3">' + s.grund.map(function(x, i){ return def(x[0], x[1], "", SCOL[i]); }).join("") + '</div>' +
    '<h3 class="gh">Werte, Würfe und Zeit' + pgl("S. 44") + '</h3><div class="split l"><div class="sp-img"><img src="' + IMG("sl-ruine") + '" alt=""></div><div class="g2">' + s.werte.map(function(x, i){ return def(x[0], x[1], "", SCOL[i]); }).join("") + '</div></div></div>';
}
function sSchatz(){
  var z = ITO.schatz;
  return '<div class="rp"><div class="split l"><div class="sp-img"><img src="' + IMG("schaetze-wesen") + '" alt=""></div><div>' + head("Kapitel 9", "Schätze und Reichtum", "S. 47") + '<p class="lead one">' + esc(z.intro) + '</p>' +
    '<h3 class="gh">Geld</h3><p class="note">' + esc(z.geld) + '</p><div class="g3">' + z.muenzen.map(function(x, i){ return def(x[0], x[1], "", SCOL[i]); }).join("") + '</div></div></div>' +
    '<h3 class="gh">Arcana entdecken' + pgl("S. 48") + '</h3><div class="g3">' + z.arc.map(function(x, i){
      return '<div class="df ex" style="--c:' + SCOL[i % 5] + '"><h4>' + esc(x[0]) + '</h4><p>' + md(x[1]) + '</p>' + (x[2] ? '<div class="exb"><b>' + esc(x[2]) + '</b><p>' + md(x[3]) + '</p></div>' : "") + '</div>';
    }).join("") + '</div></div>';
}
function sHind(){
  var h = ITO.hind;
  return '<div class="rp"><div class="split r"><div>' + head("Kapitel 10", "Hindernisse, Tricks und Gefahren", "S. 50") + '<div class="g2">' + cc(h.regeln) + '</div></div><div class="sp-img"><img src="' + IMG("hindernis-klippe") + '" alt=""></div></div>' +
    '<h3 class="gh">Beispielgefahren' + pgl("S. 53") + '</h3><div class="g3">' + h.gefahren.map(function(x, i){ return def(x[0], x[1], "", SCOL[i % 5]); }).join("") + '</div></div>';
}
function chips(w){ return w.map(function(x){ return '<span class="chip"><i>' + esc(x[0]) + '</i><b>' + x[1] + '</b></span>'; }).join(""); }
function sBegeg(){
  var b = ITO.begeg;
  return '<div class="rp">' + head("Kapitel 11", "Begegnungen", "S. 54") + '<div class="g3">' + cc(b.regeln) + '</div><h3 class="gh">Beispielmonster' + pgl("S. 56") + '</h3><div class="g2">' + b.monster.map(function(m, i){
    return '<div class="mo" style="--c:' + SCOL[i % 5] + '"><h4>' + esc(m.n) + '</h4><div class="chips">' + chips(m.w) + '</div><p class="dr"><i>Angetrieben davon,</i> ' + esc(m.a) + '.</p><p>' + esc(m.t) + '</p>' +
      (m.x ? m.x.map(function(e){ return '<div class="exb"><b>' + esc(e[0]) + '</b><p>' + esc(e[1]) + '</p></div>'; }).join("") : "") + '</div>';
  }).join("") + '</div></div>';
}
function sWelt(){
  return '<div class="rp"><div class="banner" style="background-image:url(' + IMG("hindernis-schau") + ');background-position:center 40%"><div>' + head("Kapitel 12", "Die Odd-Welt", "S. 58") + '</div></div>' +
    ITO.welt.map(function(g, gi){ return '<h3 class="gh" style="--c:' + SCOL[gi] + '">' + esc(g.g) + pgl(g.p) + '</h3><div class="g2">' + g.x.map(function(x){ return def(x[0], x[1], "", SCOL[gi]); }).join("") + '</div>'; }).join("") + '</div>';
}
function viewSl(sub){
  var P = {sl:sSl, schaetze:sSchatz, hindernisse:sHind, begegnungen:sBegeg, welt:sWelt};
  sub = P[sub] ? sub : "sl";
  return subbar(SSUB, sub, "sl") + P[sub]();
}
