/* Völker & Berufe (Kapitel 2): Figurenleiste, Titel zwischen Jade-Schäften, drei Spalten – Text · Figur · Tabellen */
"use strict";
function figList(fig){ return fig === "voelker" ? (window.DB_VOLK || []) : (window.DB_BERUF || []); }
function figTbl(head, rows){
  return '<table class="w6' + (head.length === 4 ? ' q4' : '') + '">' + '<tr>' + head.map(function(c){ return '<th>' + esc(c) + '</th>'; }).join("") + '</tr>' +
    rows.map(function(r){ return '<tr>' + r.map(function(c){ return '<td>' + md(c) + '</td>'; }).join("") + '</tr>'; }).join("") + '</table>';
}
/* Namen/Beinamen: zwei W6-Spalten nebeneinander */
function figW6(titel, namen){
  var r = [0, 1, 2].map(function(i){ return [String(i + 1), namen[i], String(i + 4), namen[i + 3]]; });
  return figTbl(["W6", titel, "W6", titel], r);
}
function figKarte(t){
  return '<div class="karte nkk fk"><div class="name">Angeborenes Talent: ' + esc(t.t) + '</div><div class="zl"><b>Willenskraftpunkte:</b> ' + esc(t.wp) + '</div>' +
    t.x.split("\n").map(function(p){ return '<p>' + md(p) + '</p>'; }).join("") + '</div>';
}
function figBody(cur, sub){
  var L = figList(cur.fig), F = L.filter(function(x){ return x.id === sub; })[0] || L[0];
  if(!F) return '<div class="leer">Dieses Kapitel folgt.</div>';
  var bar = '<div class="fbar">' + L.map(function(x){
    return '<a class="fi' + (x === F ? ' on' : '') + '" href="#n/sc/' + cur.id + '/' + x.id + '"><img class="fig" src="' + IMG(x.img) + '" alt=""><span>' + esc(x.t) + '</span></a>';
  }).join("") + '</div>';
  var tit = '<div class="ft"><i class="a"></i><h1>' + esc(F.t) + pgl(F.p) + '</h1><i class="b"></i></div>';
  var c1 = "", c3 = "";
  if(cur.fig === "voelker"){
    c1 = F.text.map(function(p){ return '<p>' + md(p) + '</p>'; }).join("");
    c3 = figW6("Vorname", F.namen) + F.talente.map(figKarte).join("");
  } else {
    c1 = F.text.map(function(p){ return '<p>' + md(p) + '</p>'; }).join("");
    var st = "";
    if(F.stein) st = '<div class="stein fst"><div class="bh">' + esc(F.stein.h) + '</div>' + F.stein.b.map(function(p){ return '<p>' + md(p) + '</p>'; }).join("") + '</div>';
    c1 = '<div class="fq">' + md(F.zit) + '<div class="qu">– ' + esc(F.q) + '</div></div>' + c1;
    var li = ['<b>Schlüsselattribut:</b> ' + esc(F.attr)];
    if(F.fert) li.push('<b>Fertigkeiten:</b> ' + F.fert.map(esc).join(", "));
    if(F.fertx) F.fertx.forEach(function(x){ li.push('<b>' + esc(x[0]) + ':</b> ' + esc(x[1])); });
    li.push('<b>Heroisches Talent:</b> ' + md(F.talent));
    c1 += '<ul class="st">' + li.map(function(x){ return '<li>' + x + '</li>'; }).join("") + '</ul>';
    c3 = figTbl(["W6", "Ausrüstung"], F.ausr) + figW6("Beiname", F.bein) + st;
  }
  return bar + tit + '<div class="fg3"><div class="f1">' + c1 + '</div><div class="f2"><img class="fig" src="' + IMG(F.img) + '" alt="' + esc(F.t) + '" onclick="zoom(this.src)"></div><div class="f3">' + c3 + '</div></div>';
}
