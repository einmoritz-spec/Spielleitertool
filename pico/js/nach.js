/* Nachschlage-Bereiche (Welt, Regeln, Käfer, Titanen, Weber, Anhang): PI_NACH[bereich] = {t, c, kapitel:[{id,t,p,b:[Blöcke]}]} */
var NTAB = [["welt","Die Welt"],["regeln","Regeln"],["kaefer","Käfer bauen"],["titanen","Picotitanen"],["weber","Der Weber"],["anhang","Anhang"]];
window.PI_NACH = window.PI_NACH || {};
/* Bereiche in der Kopfzeile (wie Heart): je Bereich eine Unterleiste mit den Gruppen */
function nGrp(b){ return (NGRP[b] || []).map(function(g, k){ return ["nach/" + b + "/g" + k, g[0]]; }); }
window.piAreas = function(){ return [
  ["Die Welt", [["nach/welt", "Die Welt"]]],
  ["Regeln", nGrp("regeln")],
  ["Käfer", nGrp("kaefer").concat([["nach/titanen", "Picotitanen"]])],
  ["Spielleitung", nGrp("weber").concat([["gefahren", "Gefahren"], ["nach/anhang", "Anhang"]])]
]; };
window.piNav = function(key){
  var A = piAreas(), ai = -1; A.forEach(function(a, i){ if(a[1].some(function(x){ return x[0] === key; })) ai = i; });
  var tabs = A.map(function(a, i){ return '<a class="' + (i === ai ? 'on' : '') + '" onclick="go(\'' + a[1][0][0] + '\')">' + esc(a[0]) + '</a>'; }).join("");
  var sub = ai >= 0 && A[ai][1].length > 1 ? '<div class="unter">' + A[ai][1].map(function(x){ return '<a class="' + (x[0] === key ? 'on' : '') + '" onclick="go(\'' + x[0] + '\')">' + esc(x[1]) + '</a>'; }).join("") + '<span class="sp"></span>' + (window.__pen ? penTab(window.__pen) : '') + '</div>' : '';
  return {tabs: tabs, sub: sub};
};
function nTabs0(cur){ return '<div class="tabs">' + NTAB.map(function(t){ return '<a class="' + (t[0] === cur ? 'on' : '') + '" onclick="go(\'nach/' + t[0] + '\')">' + t[1] + '</a>'; }).join("") + penTab("n:" + cur) + '</div>'; }
/* Gruppen: [Name, ab Seite, Kachelübersicht?] */
var NGRP = {
  kaefer:[["Käfer bauen",0],["Aspekt-Gruppen",108,1],["Fertigkeiten",144],["Stimmungen, Rätsel & Namen",156]],
  regeln:[["Grundregeln",0],["Szenen",49],["Montagen",69],["Reisen",83]],
  weber:[["Spielleiten",0],["Gefahren leiten",201]]
};
var NIMG = {welt:"kapitel/k01-welt", regeln:"kapitel/k02-grundregeln", kaefer:"kapitel/k06-kaefer-1", titanen:"kapitel/k08-picotitanen", weber:"kapitel/k09-weber", anhang:"kapitel/k12-anhang"};
var N_ASP = "beisser sauger gucker panzer schleim fuehler krabbelbeine greifer fluegel druesen schwaenze statur hirn gefaehrten reittiere werkzeuge waffen faeden".split(" ");
function nLen(L){ try{ return JSON.stringify(L || []).replace(/<[^>]+>/g, "").length; }catch(e){ return 0; } }
function nPrep(N, b){
  if(N._ok) return; var seen = {}, G = NGRP[b];
  N.kapitel.forEach(function(k){
    k.n = parseInt((String(k.p || "").match(/\d+/) || [0])[0], 10) || 0;
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
  if(!N || !N.kapitel.length) return '<div class="pad"><p class="lead">Dieser Bereich ist noch in Arbeit.</p></div>';
  nPrep(N, b); var L = N.kapitel, G = NGRP[b], ix = -1, gi = -1;
  if(/^g\d+$/.test(sel || "")) gi = parseInt(sel.slice(1), 10);
  if(gi >= 0 && G && G[gi] && !G[gi][2]){ var f0 = L.filter(function(x){ return x.g === gi; })[0]; if(f0){ sel = f0.id; gi = -1; } }
  if(gi < 0) L.forEach(function(x, i){ if(x.id === sel) ix = i; });
  if(ix < 0 && gi < 0){ ix = 0; }
  var cur = ix >= 0 ? L[ix] : null, ag = cur ? cur.g : gi;
  window.__nk = G ? 'nach/' + b + '/g' + (ag < 0 ? 0 : ag) : 'nach/' + b; window.__pen = 'n:' + b;
  var side = '<nav class="side">';
  var mine = G ? L.filter(function(x){ return x.g === ag; }) : L;
  /* Kurze Abschnitte zu einem Eintrag zusammenfassen (nicht bei Kachelgruppen wie den Aspekten) */
  var tgr = cur && G && G[cur.g] && G[cur.g][2], packs = [], pk = null, tot = 0;
  mine.forEach(function(x){ var n = nLen(x.b); if(!tgr && pk && tot < 7000 && tot + n <= 15000){ pk.push(x); tot += n; } else { pk = [x]; tot = n; packs.push(pk); } });
  var myPack = packs.filter(function(q){ return q.indexOf(cur) >= 0; })[0] || [cur];
  side += packs.map(function(q){ return '<a class="' + (q === myPack ? 'on' : '') + '" onclick="go(\'nach/' + b + '/' + q[0].id + '\')">' + esc(kurz(q[0].t)) + '</a>' +
    (q === myPack && q.length > 1 ? '<div class="sj">' + q.slice(1).map(function(x){ return '<a onclick="jump(\'nj-' + x.id + '\')">' + esc(kurz(x.t)) + '</a>'; }).join("") + '</div>' : ''); }).join("");
  if(packs.length < 2 || !cur) side = "";
  if(side) side += '</nav>';
  if(!cur){
    var part = L.filter(function(x){ return x.g === gi; });
    return lay(side, '<div class="sec"><h2>' + esc(G[gi][0]) + '</h2></div>' + (part.every(function(x){ return N_ASP.indexOf(x.id) >= 0; }) ? '<div class="kfg">' + part.map(function(x){ return '<a class="kfk" onclick="go(\'nach/' + b + '/' + x.id + '\')"><img src="img/aspekt/' + x.id + '.webp" alt="" loading="lazy"><b>' + esc(kurz(x.t)) + '</b></a>'; }).join("") + '</div>' : '<div class="ggr" style="margin:10px 0 22px">' + part.map(function(x){ return nTile(b, N, x); }).join("") + '</div>'));
  }
  function teil(x, first){ var cb = x.b; if(cb && cb[0] && cb[0].t === "h" && kurz(cb[0].x) === kurz(x.t)) cb = cb.slice(1);
    return (first ? '<div class="sec"><h2>' : '<div class="sec nsub" id="nj-' + x.id + '"><h2>') + esc(x.t) + '</h2>' + (x.p ? pgl(x.p) : "") + '</div><div class="txt nbody">' + blk(cb) + '</div>'; }
  var body = (tgr ? '<div class="nnav"><a onclick="go(\'nach/' + b + '/g' + cur.g + '\')">‹ ' + esc(G[cur.g][0]) + '</a></div>' : '') + myPack.map(function(x, k){ return teil(x, k === 0); }).join("");
  if(cur !== myPack[0]) setTimeout(function(){ var e = document.getElementById("nj-" + cur.id); if(e) e.scrollIntoView({block:"start"}); }, 40);
  return lay(side, body);
}
