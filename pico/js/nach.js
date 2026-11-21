/* Nachschlage-Bereiche (Welt, Regeln, Käfer, Titanen, Weber, Anhang): PI_NACH[bereich] = {t, c, kapitel:[{id,t,p,b:[Blöcke]}]} */
var NTAB = [["welt","Die Welt"],["regeln","Regeln"],["kaefer","Käfer bauen"],["titanen","Picotitanen"],["weber","Der Weber"],["anhang","Anhang"]];
window.PI_NACH = window.PI_NACH || {};
function nTabs(cur){ return '<div class="tabs">' + NTAB.map(function(t){ return '<a class="' + (t[0] === cur ? 'on' : '') + '" onclick="go(\'nach/' + t[0] + '\')">' + t[1] + '</a>'; }).join("") + penTab("n:" + cur) + '</div>'; }
var NGRP = {
  kaefer:[[0,"Käfer bauen"],[108,"Aspekt-Gruppen"],[144,"Fertigkeiten"],[156,"Stimmungen, Rätsel & Namen"]],
  regeln:[[0,"Grundregeln & Szenen"],[69,"Montagen"],[83,"Reisen"]],
  weber:[[0,"Spielleiten"],[201,"Gefahren leiten"]]
};
var NIMG = {welt:"kapitel/k01-welt", regeln:"kapitel/k02-grundregeln", kaefer:"kapitel/k06-kaefer-1", titanen:"kapitel/k08-picotitanen", weber:"kapitel/k09-weber", anhang:"kapitel/k12-anhang"};
var N_ASP = "beisser sauger gucker panzer schleim fuehler krabbelbeine greifer fluegel druesen schwaenze statur hirn gefaehrten reittiere werkzeuge waffen faeden".split(" ");
function nPrep(N){
  if(N._ok) return; var seen = {};
  N.kapitel.forEach(function(k){ k.n = parseInt(String(k.p || "").replace(/\D/g, ""), 10) || 0; if(seen[k.id]){ k.id = k.id + "-" + (++seen[k.id]); } else seen[k.id] = 1; });
  N._ok = 1;
}
function viewNach(b, sel){
  var N = PI_NACH[b]; setTheme(false, N ? N.c : "var(--teal)");
  if(!N || !N.kapitel.length) return nTabs(b) + '<div class="pad"><p class="lead">Dieser Bereich ist noch in Arbeit.</p></div>';
  nPrep(N); var L = N.kapitel, ix = -1;
  L.forEach(function(x, i){ if(x.id === sel) ix = i; });
  if(ix < 0){
    var G = NGRP[b] || [[0, ""]], out = "";
    G.forEach(function(g, gi){
      var lo = g[0], hi = gi + 1 < G.length ? G[gi + 1][0] : 1e9;
      var part = L.filter(function(x){ return x.n >= lo && x.n < hi; }); if(!part.length) return;
      out += (g[1] ? '<div class="sec"><h2>' + esc(g[1]) + '</h2></div>' : "") + '<div class="ggr" style="margin:10px 0 22px">' + part.map(function(x){
        var img = N_ASP.indexOf(x.id) >= 0 ? "aspekt/" + x.id : (x.img || null);
        return tile({t:kurz(x.t), c:x.c || N.c, img:img, k:x.n ? "S. " + x.n : "", x:exc(x.b, 140), go:"go('nach/" + b + "/" + x.id + "')"});
      }).join("") + '</div>';
    });
    return nTabs(b) + '<div class="pad">' + out + '</div>';
  }
  var cur = L[ix], pv = L[ix - 1], nx = L[ix + 1], c = cur.c || N.c;
  var nav = '<div class="nnav"><a onclick="go(\'nach/' + b + '\')">‹ ' + esc(NTAB.filter(function(t){ return t[0] === b; })[0][1]) + '</a>' +
    '<span>' + (pv ? '<a onclick="go(\'nach/' + b + '/' + pv.id + '\')">‹ ' + esc(kurz(pv.t)) + '</a>' : '') + (nx ? '<a onclick="go(\'nach/' + b + '/' + nx.id + '\')">' + esc(kurz(nx.t)) + ' ›</a>' : '') + '</span></div>';
  var body = nav + '<div class="sec"><h2>' + esc(cur.t) + '</h2>' + (cur.p ? pgl(cur.p) : "") + '</div><div class="txt nbody">' + blk(cur.b) + '</div>' +
    '<div class="nnav end">' + (pv ? '<a onclick="go(\'nach/' + b + '/' + pv.id + '\')">‹ ' + esc(kurz(pv.t)) + '</a>' : '<span></span>') + (nx ? '<a onclick="go(\'nach/' + b + '/' + nx.id + '\')">' + esc(kurz(nx.t)) + ' ›</a>' : '') + '</div>';
  return nTabs(b) + '<div class="pad">' + body + '</div>';
}
