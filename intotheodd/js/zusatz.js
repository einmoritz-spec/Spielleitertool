/* Bereich Zusatzheft: Oddditional Materials (Fan-Abenteuer, Hacks, Maze Rats) */
var ZSUB = [["ueber","Überblick"],["samson","Samson Aubrey"],["arcana","Vier Arcana"],["dungeons","Odd Dungeons"],["fraktionen","Fraktionen"],["zirkus","Nachtlicht-Zirkus"],["cyber","Cyber:London"],["oddbits","Oddbits"],["maze","Maze Rats"]];
var ZCOL = ["var(--pink)","var(--orange)","var(--teal)","var(--blue)","#c9a24a"];
function pgm(p){ var n = parseInt(String(p || "").replace(/\D/g, ""), 10); return n ? '<a class="pg" onclick="event.stopPropagation();openBook(\'ito_mat\',' + n + ')">' + esc(p) + '</a>' : ""; }
function zhead(lbl, t, p){ return '<header class="ph"><i>' + esc(lbl) + '</i><h2>' + esc(t) + (p ? pgm(p) : "") + '</h2></header>'; }
function zt(t, i){
  var n = t.r[0].split("|").length, h = t.h.slice();
  if (h.length < n) h = [String(t.w || "W").split(" ")[0]].concat(h);
  var c = {}; for (var k in t) c[k] = t[k]; c.h = h;
  return tbl(c, i || 0);
}
function zts(L, off){ return '<div class="tbs">' + L.map(function(t, i){ return zt(t, i + (off || 0)); }).join("") + '</div>'; }
function zroom(r, i){ return room(r, i, ""); }
function zrooms(L){ return '<div class="rooms">' + L.map(zroom).join("") + '</div>'; }
function zlist(t, i){
  var a = t.l.split("|");
  return '<div class="tb" style="--c:' + ZCOL[i % 5] + '"><h4>' + esc(t.t) + ' <i class="dd">W100</i></h4><div class="wl">' + a.map(function(x, k){ return '<span><b>' + (k + 1) + '</b>' + esc(x) + '</span>'; }).join("") + '</div></div>';
}
function zUeber(){
  var u = ITO.mat.ueber;
  return '<div class="rp">' + zhead("Oddditional Materials", u.t, "S. 2") + '<div class="zban"><img src="' + IMG("zusatz-karte") + '" alt=""></div>' +
    '<div class="lead">' + u.x.map(function(x, i){ return '<p class="' + (i === 0 ? "first" : "") + '">' + esc(x) + '</p>'; }).join("") + '<p class="note">' + esc(u.von) + ' · ' + esc(u.lizenz) + '</p></div>' +
    '<h3 class="gh">Inhalt</h3><div class="g3">' + u.inh.map(function(x, i){ return '<a class="ort" style="--c:' + x[4] + '" onclick="go(\'zusatz/' + x[3] + '\')"><i>' + esc(x[0]) + '</i><b>' + esc(x[1]) + '</b><span>' + esc(x[2]) + '</span></a>'; }).join("") +
    '<a class="ort" style="--c:var(--blue)" onclick="go(\'zusatz/maze\')"><i>Maze Rats</i><b>Maze Rats</b><span>Ben Milton · Ein eigenes kleines Spiel mit Zufallstabellen</span></a></div></div>';
}
function zSamson(){
  var s = ITO.mat.samson;
  return '<div class="rp">' + zhead("Abenteuer · Kamil Węgrzynowicz", s.t, s.p) + '<p class="lead one">' + esc(s.s) + '</p>' +
    '<div class="msplit"><div class="sp-img map"><img src="' + IMG("samson-karte1") + '" alt=""></div><div>' + zts(s.tafeln.slice(0, 1)) + '</div></div>' +
    '<h3 class="gh">Räume</h3>' + zrooms(s.r) + '<h3 class="gh">Zufallstabellen</h3>' + zts(s.tafeln.slice(1), 1) + '</div>';
}
function zArcana(){
  var a = ITO.mat.arc4;
  return '<div class="rp">' + zhead("Neue Arcana · Brian Wille", a.t, a.p) + '<p class="lead one">' + esc(a.s) + '</p>' +
    '<div class="g2">' + a.l.map(function(x){ return '<div class="df" style="--c:' + x.c + '"><h4>' + esc(x.n) + '</h4><p class="dr"><b>' + esc(x.w) + '</b></p><p>' + esc(x.x) + '</p></div>'; }).join("") + '</div></div>';
}
function zDung(){
  var d = ITO.mat.dung;
  return '<div class="rp">' + zhead("Hack · Eric Nieudan", d.t, d.p) + '<p class="lead one">' + esc(d.s) + '</p>' +
    '<h3 class="gh">Charaktererschaffung</h3><p class="note">' + esc(d.chargen) + '</p>' +
    '<div class="g2">' + d.regeln.map(function(x, i){ return def(x[0], x[1], "", ZCOL[i % 5]); }).join("") + '</div>' +
    '<h3 class="gh">Erfahrung</h3><p class="note">' + esc(d.erf.x) + '</p><div class="tbs">' + zt({t:"Stufen", h:d.erf.h, r:d.erf.r, k:110}, 2) + '</div><p class="note">' + esc(d.erf.y) + '</p>' +
    '<h3 class="gh">Startpakete</h3><div class="tbs">' + d.start.map(function(t, i){ return zt(t, i); }).join("") + '</div>' +
    '<h3 class="gh">Tabellen</h3>' + zts([d.zuspaet, d.vorrat], 2) + '</div>';
}
function zFakt(){
  var f = ITO.mat.fakt;
  return '<div class="rp">' + zhead("Hack · Eric Nieudan", f.t, f.p) + '<p class="lead one">' + esc(f.s) + '</p>' +
    '<h3 class="gh">Fraktion auswürfeln</h3><div class="tbs">' + zt({t:"5W6 – Herkunft, Status, Mittel, Ziel", h:f.h, r:f.r, k:50}, 0) + zt({t:"Eigenheiten der Fraktion", w:"W20", h:["Eigenheit"], r:f.pec.map(function(x, i){ return (i + 1) + "|" + x; })}, 1) + '</div></div>';
}
function zZirkus(){
  var z = ITO.mat.zirkus;
  return '<div class="rp">' + zhead("Abenteuer · Eric Nieudan", z.t, z.p) + '<p class="lead one">' + esc(z.s) + '</p><p class="note">' + esc(z.x) + '</p>' +
    '<div class="msplit"><div class="sp-img map"><img src="' + IMG("nacht-karte1") + '" alt=""></div><div>' + zts([z.ger, z.wan]) + '</div></div>' +
    '<h3 class="gh">Räume</h3>' + zrooms(z.r) + '</div>';
}
function zMonK(m, i){ return '<div class="mo" style="--c:' + ZCOL[i % 5] + '"><h4>' + esc(m.n) + '</h4><div class="chips">' + chips(m.w) + '</div>' + (m.a ? '<p class="dr"><i>Angetrieben davon,</i> ' + esc(m.a) + '.</p>' : "") + '<p>' + esc(m.t) + '</p></div>'; }
function zCyber(){
  var c = ITO.mat.cyber, k = c.crim, m = c.met;
  function ws(L){ return '<div class="g3">' + L.map(function(x, i){ return def(x[0], x[1], "", ZCOL[i]); }).join("") + '</div>'; }
  return '<div class="rp">' + zhead("Hack · Sean Smith", c.t, c.p) + '<p class="lead one">' + esc(c.s) + '</p>' +
    '<h3 class="gh">Wähle deine Seite</h3><div class="g3">' + c.seiten.map(function(x){ return def(x[0], x[1] + (x[2] ? " " + x[2] : ""), "", x[3]); }).join("") + '</div>' +
    '<h3 class="gh">' + esc(k.t) + pgm("S. 25") + '</h3><p class="note">' + esc(k.x) + '</p>' + ws(k.w) +
    '<div class="tbs">' + zt({t:"Startpaket", h:k.tab.h, r:k.tab.r}, 0) + zt(k.tak, 1) + zt(k.kos, 2) + zt(k.mis, 3) + '</div>' +
    '<h3 class="gh">' + esc(m.t) + pgm("S. 27") + '</h3><p class="note">' + esc(m.x) + '</p>' + ws(m.w) +
    '<div class="g2">' + def(m.sp.t, m.sp.x, "", ZCOL[0]) + '<div class="df" style="--c:var(--orange)"><h4>Zur Wahl</h4>' + m.sp.l.map(function(x){ return '<p><b>' + esc(x[0]) + '</b> ' + esc(x[1]) + '</p>'; }).join("") + '</div>' +
    def("Psychische Fähigkeiten", m.sp.y, "", ZCOL[2]) + '<div class="df" style="--c:var(--blue)"><h4>Psychisch zur Wahl</h4>' + m.sp.p.map(function(x){ return '<p><b>' + esc(x[0]) + '</b> ' + esc(x[1]) + '</p>'; }).join("") + '</div></div>' +
    '<h3 class="gh">' + esc(m.ausr.t) + '</h3><p class="note">' + esc(m.ausr.x) + '</p><div class="g3">' + m.ausr.l.map(function(x, i){ return def(String(i + 1), x, "", ZCOL[i % 5]); }).join("") + '</div>' +
    '<div class="tbs">' + zt({t:m.mun.t, h:m.mun.h, r:m.mun.r, k:150}, 1) + zt({t:m.befoer.t, h:m.befoer.h, r:m.befoer.r, k:130, note:m.befoer.x}, 2) + '</div>' +
    '<h3 class="gh">Spielleitung</h3><div class="g3">' + m.sl.x.map(function(x, i){ return def(i === 0 ? "Verhaftungen" : i === 1 ? "Rettungswürfe" : "Einfluss", x, "", ZCOL[i]); }).join("") + '</div>' +
    '<h3 class="gh">' + esc(m.gauner.t) + '</h3><p class="note">' + esc(m.gauner.x) + '</p><div class="g2">' + m.gauner.l.map(zMonK).join("") + '</div></div>';
}
function zOdd(){
  var o = ITO.mat.oddbits;
  return '<div class="rp">' + zhead("Wesen und Orte · Kamil Węgrzynowicz", o.t, o.p) + '<h3 class="gh">Wesen</h3><div class="g2">' + o.wesen.map(function(m, i){ return zMonK(m, i) + (m.x ? '<div class="df" style="--c:' + ZCOL[i % 5] + '"><h4>' + esc(m.n.split(" (")[0]) + '</h4><p>' + esc(m.x) + '</p></div>' : ""); }).join("") + '</div>' +
    '<h3 class="gh">Orte und Gegenstände</h3><div class="g3">' + o.orte.map(function(x, i){ return def(x[0], x[1], "", ZCOL[i]); }).join("") + '</div></div>';
}
function zMaze(){
  var m = ITO.mat.maze, L = m.listen, i = 0;
  return '<div class="rp">' + zhead("Ein Spiel von Ben Milton", m.t, m.p) + '<p class="lead one">' + esc(m.s) + '</p>' +
    '<h3 class="gh">Charaktererschaffung</h3><p class="note">' + esc(m.cc) + '</p><div class="tbs">' + zts(m.namen.slice(0, 2)) + zts(m.namen.slice(2, 4), 2) + zts(m.namen.slice(4), 4) + '</div>' +
    '<h3 class="gh">Spielerregeln</h3><div class="g3">' + m.regeln.map(function(x, k){ return def(x[0], x[1], "", ZCOL[k % 5]); }).join("") + '</div>' +
    '<h3 class="gh">Erfahrung und Weiterentwicklung</h3><p class="note">' + esc(m.xp.x) + '</p><div class="tbs">' + zt({t:"Stufen", h:m.xp.h, r:m.xp.r, k:90}, 3) + '</div><p class="note">' + esc(m.adv.x) + '</p><div class="g3">' + m.adv.l.map(function(x, k){ return def(x[0] + " · " + x[1], x[2], "", ZCOL[k % 5]); }).join("") + '</div>' +
    '<h3 class="gh">Ausrüstung</h3><p class="note">' + esc(m.ausr.waf) + '</p><div class="g3">' + m.ausr.l.map(function(x, k){ return def(x[0], x[1], "", ZCOL[k % 5]); }).join("") + '</div>' +
    '<h3 class="gh">Gefolge</h3><div class="g4">' + m.ausr.hirelings.map(function(x, k){ return def(x[0], x[1], "", ZCOL[k % 5]); }).join("") + '</div>' +
    '<h3 class="gh">Das Spiel leiten</h3><div class="g3">' + m.sl.map(function(x, k){ return def(x[0], x[1], "", ZCOL[k % 5]); }).join("") + '</div>' +
    '<h3 class="gh">Magie</h3><p class="note">' + esc(m.mag.x) + '</p><div class="g3">' + m.mag.grad.map(function(x, k){ return def(x[0], x[1], "", ZCOL[k % 5]); }).join("") + '</div><div class="tbs">' + zt(m.mag.fz, 2) + '</div><p class="note">' + esc(m.mag.y) + '</p>' +
    '<h3 class="gh">Würfeltabellen</h3>' + ["wirk", "elem", "form", "kreat", "ding", "beein", "trank"].map(function(k, q){ return zlist(L[k], q); }).join("") + '</div>';
}
function viewZusatz(sub){
  var P = {ueber:zUeber, samson:zSamson, arcana:zArcana, dungeons:zDung, fraktionen:zFakt, zirkus:zZirkus, cyber:zCyber, oddbits:zOdd, maze:zMaze};
  sub = P[sub] ? sub : "ueber";
  return subbar(ZSUB, sub, "zusatz") + P[sub]();
}
