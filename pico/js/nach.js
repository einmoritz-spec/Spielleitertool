/* Nachschlage-Bereiche (Welt, Regeln, Käfer, Titanen, Weber, Anhang): PI_NACH[bereich] = {t, c, kapitel:[{id,t,p,b:[Blöcke]}]} */
var NTAB = [["welt","Die Welt"],["regeln","Regeln"],["kaefer","Käfer bauen"],["titanen","Picotitanen"],["weber","Der Weber"],["anhang","Anhang"]];
window.PI_NACH = window.PI_NACH || {};
function nTabs(cur){ return '<div class="tabs">' + NTAB.map(function(t){ return '<a class="' + (t[0] === cur ? 'on' : '') + '" onclick="go(\'nach/' + t[0] + '\')">' + t[1] + '</a>'; }).join("") + penTab("n:" + cur) + '</div>'; }
function viewNach(b, sel){
  var N = PI_NACH[b]; setTheme(false, N ? N.c : "var(--teal)");
  if(!N || !N.kapitel.length) return nTabs(b) + '<div class="pad"><p class="lead">Dieser Bereich ist noch in Arbeit.</p></div>';
  var L = N.kapitel, cur = L.filter(function(x){ return x.id === sel; })[0] || L[0];
  var side = '<nav class="side">' + L.map(function(x){ return '<h4 class="' + (x === cur ? 'on' : '') + '" onclick="go(\'nach/' + b + '/' + x.id + '\')" style="color:' + (x === cur ? (x.c || N.c) : '') + '">' + esc(kurz(x.t)) + '</h4>'; }).join("") + '</nav>';
  var body = '<div class="sec"><h2>' + esc(cur.t) + '</h2>' + (cur.p ? pgl(cur.p) : "") + '</div><div class="txt nbody">' + blk(cur.b) + '</div>';
  return nTabs(b) + lay(side, body);
}
