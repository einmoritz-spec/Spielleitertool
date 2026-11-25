/* Bereich Abenteuer: Die Eiserne Koralle */
var BSUB = [["ueber","Überblick"],["e1","Ebene 1"],["e2","Ebene 2"],["e3","Ebene 3"],["echos","Echos"],["marsch","Marsch"],["orte","Verstecke"],["hopesend","Hopesend"]];
var BCOL = ["var(--pink)","var(--orange)","var(--teal)","var(--blue)","#c9a24a"];
function rline(s){
  if (s.charAt(0) === ">") { var a = s.slice(1).split("|"); return '<li class="ex"><b>' + esc(a[0]) + '</b>' + (a[1] ? ' <em>' + esc(a[1]) + '</em>' : "") + '</li>'; }
  var b = s.split("|"); if (b.length < 2) return '<li class="nt">' + md(s) + '</li>';
  return '<li><b>' + esc(b[0]) + '</b> <em>' + esc(b[1]) + '</em></li>';
}
function mon(m){
  return '<div class="exb"><b>' + esc(m.n) + '</b><div class="chips">' + chips(m.w) + '</div>' + (m.a ? '<p class="dr"><i>Angetrieben davon,</i> ' + esc(m.a) + '.</p>' : "") + '<p>' + esc(m.t) + '</p></div>';
}
function room(r, i, pre){
  return '<div class="rm" style="--c:' + BCOL[i % 5] + '"><h4><span class="rn">' + (pre || "") + r[0] + '</span>' + esc(r[1]) + '</h4><ul>' + r[2].map(rline).join("") + '</ul>' + (r[3] ? mon(r[3]) : "") + '</div>';
}
function wbTab(L){
  return '<div class="wb"><h4>Umherziehende Begegnungen <i>W6</i></h4><ol>' + L.map(function(x){ return '<li><b>' + esc(x[0]) + '</b> ' + esc(x[1]) + '</li>'; }).join("") + '</ol></div>';
}
function bEbene(e){
  return '<div class="rp">' + head(e.nr, e.t, e.p) + '<p class="lead one">' + esc(e.s) + '</p>' +
    '<div class="msplit"><div class="sp-img map"><img src="' + IMG(e.karte) + '" alt=""></div>' + wbTab(e.wb) + '</div>' +
    '<h3 class="gh">Räume</h3><div class="rooms">' + e.r.map(function(r, i){ return room(r, i); }).join("") + '</div></div>';
}
function bUeber(){
  var k = ITO.kor;
  return '<div class="rp"><div class="split l"><div class="sp-img"><img src="' + IMG("unternehmen-glocke") + '" alt=""></div><div>' + head("Einführungsabenteuer", "Die Eiserne Koralle", "S. 62") + '<p class="lead one">' + esc(k.intro) + '</p>' +
    '<div class="g2">' + def("Der Beginn", k.start, "", "var(--pink)") + def("Umherziehende Begegnungen", k.wander, "", "var(--orange)") + '</div></div></div>' +
    '<h3 class="gh">Orte</h3><div class="g3">' + [["Ebene 1","Die Eiserne Koralle","e1"],["Ebene 2","Unterirdischer Einbruch","e2"],["Ebene 3","Hallen aus Glas und Gold","e3"],["Echos","Echos der Eisernen Koralle","echos"],["Marsch","Der Gefallene Marsch","marsch"],["Hopesend","Letzter Hafen des Nordens","hopesend"]].map(function(x, i){
      return '<a class="ort" style="--c:' + BCOL[i % 5] + '" onclick="go(\'abenteuer/' + x[2] + '\')"><i>' + x[0] + '</i><b>' + esc(x[1]) + '</b></a>'; }).join("") + '</div></div>';
}
function bEchos(){
  var e = ITO.kor3.echo;
  return '<div class="rp">' + head("Wiederkehrend", e.t, e.p) + '<p class="lead one">' + esc(e.x) + '</p><div class="rooms">' + e.l.map(function(r, i){ return room([i + 1, r[0], r[1]], i, "Echo "); }).join("") + '</div></div>';
}
function bMarsch(){
  var m = ITO.marsch;
  return '<div class="rp">' + head("Gelände", "Der Gefallene Marsch", "S. 92") + '<p class="lead one">' + esc(m.intro) + '</p><div class="g3">' + m.reise.map(function(x, i){ return def(x[0], x[1], "", BCOL[i]); }).join("") + '</div>' +
    '<div class="msplit"><div class="sp-img map"><img src="' + IMG("karte-marsch") + '" alt=""></div><div class="wb"><h4>Zufällige Begegnung je Feld <i>W20</i></h4><ol class="two">' + m.zuf.map(function(x){ return '<li><b>' + esc(x[0]) + '</b> ' + esc(x[1]) + '</li>'; }).join("") + '</ol></div></div>' +
    '<h3 class="gh">Felder' + pgl("S. 95") + '</h3><div class="rooms">' + m.hex.map(function(r, i){ return room(r, i, ""); }).join("") + '</div>' +
    '<h3 class="gh">Mythen des Marschs' + pgl("S. 100") + '</h3><p class="note">Jeder, den du im Gefallenen Marsch triffst, kennt mindestens ein paar Mythen und erzählt sie, wenn er dich mag oder dir Angst machen will. Sie sprechen in Bruchstücken und Rätseln, doch alles ist wahr, und sie zeigen dir sogar die richtige Richtung. Würfle W12 für jede Person.</p><div class="g3">' + m.mythen.map(function(x, i){ return def((i + 1) + ". " + x[0], x[1], "", BCOL[i % 5]); }).join("") + '</div></div>';
}
function bOrte(){
  return '<div class="rp">' + ITO.marsch.orte.map(function(o, oi){
    return '<section class="ort-s">' + head(o.h, o.t, o.p) + '<p class="lead one">' + esc(o.s) + '</p><div class="msplit"><div class="sp-img map"><img src="' + IMG(o.k) + '" alt=""></div><div class="rooms two">' + o.r.map(function(r, i){ return room(r, i); }).join("") + '</div></div></section>';
  }).join("") + '</div>';
}
function bHope(){
  var h = ITO.hope;
  return '<div class="rp">' + head("Stadt", "Hopesend", "S. 110") + '<p class="lead one">Letzter Hafen des Nordens.</p>' +
    '<h3 class="gh">Orte</h3><div class="g3">' + h.orte.map(function(x, i){ return def(x[0], x[1], "", BCOL[i % 5]); }).join("") + '</div>' +
    '<h3 class="gh">Zufällige Ereignisse und Gerüchte <i class="dd">W6</i></h3><div class="g3">' + h.geruechte.map(function(x, i){ return def(String(i + 1), x, "", BCOL[i % 5]); }).join("") + '</div>' +
    '<h3 class="gh">Personen' + pgl("S. 112") + '</h3><div class="g2">' + h.leute.map(function(m, i){ return '<div class="mo" style="--c:' + BCOL[i % 5] + '"><h4>' + esc(m.n) + '</h4><div class="chips">' + chips(m.w) + '</div><p class="dr">' + esc(m.i) + '</p><p>' + esc(m.t) + '</p></div>'; }).join("") + '</div>' +
    '<h3 class="gh">Ankünfte aus Bastion' + pgl("S. 114") + ' <i class="dd">W12</i></h3><p class="note">Zu jeder Zeit liegen mindestens zwei Schiffe aus Bastion hier vor Anker. Sie bleiben nicht lange.</p><div class="g3">' + h.schiffe.map(function(x, i){ return def((i + 1) + ". " + x[0], x[1], "", BCOL[i % 5]); }).join("") + '</div></div>';
}
function viewAb(sub){
  var P = {ueber:bUeber, e1:function(){ return bEbene(ITO.kor.e1); }, e2:function(){ return bEbene(ITO.kor.e2); }, e3:function(){ return bEbene(ITO.kor3.e3); }, echos:bEchos, marsch:bMarsch, orte:bOrte, hopesend:bHope};
  sub = P[sub] ? sub : "ueber";
  return subbar(BSUB, sub, "abenteuer") + P[sub]();
}
