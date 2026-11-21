/* Nachschlage-Bereiche (Welt, Regeln, Käfer, Titanen, Weber, Anhang): PI_NACH[bereich] = {t, c, kapitel:[{id,t,p,b:[Blöcke]}]} */
var NTAB = [["welt","Die Welt"],["regeln","Regeln"],["kaefer","Käfer bauen"],["titanen","Picotitanen"],["weber","Der Weber"],["anhang","Anhang"]];
window.PI_NACH = window.PI_NACH || {};
function nTabs(cur){ return '<div class="tabs">' + NTAB.map(function(t){ return '<a class="' + (t[0] === cur ? 'on' : '') + '" onclick="go(\'nach/' + t[0] + '\')">' + t[1] + '</a>'; }).join("") + penTab("n:" + cur) + '</div>'; }
/* Gruppen: [Name, ab Seite, Kachelübersicht?] */
var NGRP = {
  kaefer:[["Käfer bauen",0],["Aspekt-Gruppen",108,1],["Fertigkeiten",144],["Stimmungen, Rätsel & Namen",156]],
  regeln:[["Grundregeln",0],["Szenen",49],["Montagen",69],["Reisen",83]],
  weber:[["Spielleiten",0],["Gefahren leiten",201]]
};
var NIMG = {welt:"kapitel/k01-welt", regeln:"kapitel/k02-grundregeln", kaefer:"kapitel/k06-kaefer-1", titanen:"kapitel/k08-picotitanen", weber:"kapitel/k09-weber", anhang:"kapitel/k12-anhang"};
var N_ASP = "beisser sauger gucker panzer schleim fuehler krabbelbeine greifer fluegel druesen schwaenze statur hirn gefaehrten reittiere werkzeuge waffen faeden".split(" ");
function nPrep(N, b){
  if(N._ok) return; var seen = {}, G = NGRP[b];
  N.kapitel.forEach(function(k){
    k.n = parseInt(String(k.p || "").replace(/\D/g, ""), 10) || 0;
    if(seen[k.id]){ k.id = k.id + "-" + (++seen[k.id]); } else seen[k.id] = 1;
    k.g = 0; if(G) G.forEach(function(g, gi){ if(k.n >= g[1]) k.g = gi; });
  });
  N._ok = 1;
}
function nTile(b, N, x){
  var img = N_ASP.indexOf(x.id) >= 0 ? "aspekt/" + x.id : (x.img || null);
  return tile({t:kurz(x.t), c:x.c || N.c, img:img, k:x.n ? "S. " + x.n : "", x:exc(x.b, 140), go:"go('nach/" + b + "/" + x.id + "')"});
}
function viewNach(b, sel){
  var N = PI_NACH[b]; setTheme(false, N ? N.c : "var(--teal)");
  if(!N || !N.kapitel.length) return nTabs(b) + '<div class="pad"><p class="lead">Dieser Bereich ist noch in Arbeit.</p></div>';
  nPrep(N, b); var L = N.kapitel, G = NGRP[b], ix = -1, gi = -1;
  if(/^g\d+$/.test(sel || "")) gi = parseInt(sel.slice(1), 10);
  else L.forEach(function(x, i){ if(x.id === sel) ix = i; });
  if(ix < 0 && gi < 0){ ix = 0; }
  var cur = ix >= 0 ? L[ix] : null, ag = cur ? cur.g : gi;
  var side = '<nav class="side">';
  if(G){
    G.forEach(function(g, k){
      var on = k === ag, first = L.filter(function(x){ return x.g === k; })[0]; if(!first) return;
      side += '<h4 class="' + (on ? 'on' : '') + '" onclick="go(\'nach/' + b + '/' + (g[2] ? 'g' + k : first.id) + '\')" style="color:' + (on ? N.c : '') + '">' + esc(g[0]) + '</h4>';
      if(on && !g[2]) side += L.filter(function(x){ return x.g === k; }).map(function(x){ return '<a class="' + (x === cur ? 'on' : '') + '" onclick="go(\'nach/' + b + '/' + x.id + '\')">' + esc(kurz(x.t)) + '</a>'; }).join("");
    });
  } else side += L.map(function(x){ return '<h4 class="' + (x === cur ? 'on' : '') + '" onclick="go(\'nach/' + b + '/' + x.id + '\')" style="color:' + (x === cur ? (x.c || N.c) : '') + '">' + esc(kurz(x.t)) + '</h4>'; }).join("");
  side += '</nav>';
  if(!cur){
    var part = L.filter(function(x){ return x.g === gi; });
    return nTabs(b) + lay(side, '<div class="sec"><h2>' + esc(G[gi][0]) + '</h2></div><div class="ggr" style="margin:10px 0 22px">' + part.map(function(x){ return nTile(b, N, x); }).join("") + '</div>');
  }
  var tg = G && G[cur.g][2], grp = tg ? L.filter(function(x){ return x.g === cur.g; }) : L, gx = grp.indexOf(cur);
  var pv = grp[gx - 1], nx = grp[gx + 1];
  var nav = '<div class="nnav">' + (tg ? '<a onclick="go(\'nach/' + b + '/g' + cur.g + '\')">‹ ' + esc(G[cur.g][0]) + '</a>' : '<span></span>') +
    '<span>' + (pv ? '<a onclick="go(\'nach/' + b + '/' + pv.id + '\')">‹ ' + esc(kurz(pv.t)) + '</a>' : '') + (nx ? '<a onclick="go(\'nach/' + b + '/' + nx.id + '\')">' + esc(kurz(nx.t)) + ' ›</a>' : '') + '</span></div>';
  var body = (tg ? nav : '') + '<div class="sec"><h2>' + esc(cur.t) + '</h2>' + (cur.p ? pgl(cur.p) : "") + '</div><div class="txt nbody">' + blk(cur.b) + '</div>' +
    '<div class="nnav end">' + (pv ? '<a onclick="go(\'nach/' + b + '/' + pv.id + '\')">‹ ' + esc(kurz(pv.t)) + '</a>' : '<span></span>') + (nx ? '<a onclick="go(\'nach/' + b + '/' + nx.id + '\')">' + esc(kurz(nx.t)) + ' ›</a>' : '') + '</div>';
  return nTabs(b) + lay(side, body);
}
