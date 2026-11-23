/* The Spire – Neue Götter (Anhang 1, S. 183–199) und Anhänge 3, 6, 7 (S. 205, 210, 211) */
function goById(id){ return ((window.SP_GOETTER || {}).goetter || []).filter(function(g){ return g.id === id; })[0]; }
function goSubtabs(cur){
  return '<div class="subtabs kl-st">' + SP_GOETTER.goetter.map(function(g){ return '<a class="' + (g.id === cur ? 'on' : '') + '" onclick="go(\'nach/goetter/' + g.id + '\')">' + esc(g.t) + '</a>'; }).join("") + '</div>';
}
function goKachel(g){
  return '<div class="kl-t" onclick="go(\'nach/goetter/' + g.id + '\')"><span class="im"><img src="' + IMG(g.img) + '" alt="" loading="lazy"></span><span class="tx"><b>' + esc(g.t) + '</b><small>' + esc(g.sub || "") + '</small>' + pgl(g.p) + '</span></div>';
}
function goUebersicht(){
  var O = SP_GOETTER;
  return nachTabs("goetter") + voll('<div class="kp mgv" data-pgbook="sp_cmf"><h1 class="titel">Die neuen Götter' + pgl(O.p) + '</h1>' + O.intro.map(function(x){ return '<p class="einl">' + md(x) + '</p>'; }).join("") +
    '<div class="kl-grid go-grid">' + O.goetter.map(goKachel).join("") + '</div>' + blk([{t:"schwarz", h:O.box.h, b:O.box.b}]) + '</div>');
}
function goSeite(g){
  var ck = function(l, v){ return v ? '<div class="kk"><h5>' + l + '</h5><p>' + md(v) + '</p></div>' : ''; };
  var fo = g.fallout.length ? '<h2 class="ab">Besonderer Fallout</h2>' + g.fallout.map(function(f){ return '<h3 class="un mgs-h4">' + esc(f.t) + '</h3><div class="kfs">' + f.x.map(function(a){ return klKarte(a, "cmf", "calc(33.333% - 10px)"); }).join("") + '</div>'; }).join("") : '';
  var kopf = '<div class="kp-kopf"><img class="kp-bild" src="' + IMG(g.img) + '" alt="" onclick="zoom(this.src)"><div class="kp-tx"><h1 class="titel">' + esc(g.t) + pgl(g.p) + '</h1>' +
    (g.sub ? '<p class="kp-zitat">' + esc(g.sub) + (g.patron ? ' · in Auftrag gegeben von ' + esc(g.patron) : '') + '</p>' : (g.patron ? '<p class="kp-zitat">In Auftrag gegeben von ' + esc(g.patron) + '</p>' : '')) +
    g.intro.map(function(x){ return '<p class="kp-intro">' + md(x) + '</p>'; }).join("") + '</div></div>';
  var kern = (g.vor || g.auff) ? '<div class="kp-kern kp-ex">' + ck("Voraussetzung", g.vor) + ck("Auffrischen", g.auff) + '</div>' : '';
  var kasten = g.boxen.map(function(b){ return blk([{t:"schwarz", h:b.h, b:b.b}]); }).join("");
  var hatFort = ["niedrig", "mittel", "hoch"].some(function(k){ return g.fort[k].length; });
  return nachTabs("goetter") + goSubtabs(g.id) + voll('<div class="kp" data-pgbook="sp_cmf">' + kopf + kern + (hatFort ? '<h2 class="ab">Fortschritte</h2>' + klFort(g.fort, null, null, null, "cmf") : '') + fo + kasten + '</div>');
}
SP_NACH_VIEW.goetter = function(teile){
  if(!window.SP_GOETTER) return "";
  var g = teile[0] && goById(teile[0]);
  return g ? goSeite(g) : goUebersicht();
};
SP_NACH_VIEW.anhang = function(teile){
  var L = window.SP_ANHANG || []; nAnker("anhang", teile, L[0] && L[0].id);
  var side = '<h5 onclick="scrollTo({top:0,behavior:\'smooth\'})">Anhänge</h5>' + L.map(function(k, i){ return nLink({id:k.id, t:k.t}, i); }).join("");
  var body = '<div class="kp mgv txt"><h1 class="titel">Anhänge' + pgl(205) + '</h1>' + L.map(function(k){
    return '<section id="ab-' + k.id + '"><h2 class="ab">' + esc(k.t) + pgl(k.p) + '</h2>' + mgsBlk(k.b, "cmf") + '</section>';
  }).join("") + '</div>';
  var A = SP_NACH_ANKER.anhang; SP_NACH_ANKER.anhang = null; if(A) ST_ANKER = A;
  return nachTabs("anhang") + lay(side, '<div class="dbody" data-pgbook="sp_cmf">' + body + '</div>');
};
(window.SP_SUCHE = window.SP_SUCHE || []).push(function(add){
  var O = window.SP_GOETTER; if(O){
    add("Die neuen Götter", "Neue Götter", "nach/goetter", O.p, [O.intro, O.box]);
    O.goetter.forEach(function(g){
      add(g.t, "Neuer Gott", "nach/goetter/" + g.id, g.p, [g.sub, g.patron, g.intro, g.vor, g.auff, g.boxen]);
      ["niedrig", "mittel", "hoch"].forEach(function(s){ g.fort[s].forEach(function(a){ add(a.t, "Gott-Fortschritt · " + g.t, "nach/goetter/" + g.id, a.p, [a.fl, a.x]); }); });
      g.fallout.forEach(function(f){ f.x.forEach(function(a){ add(a.t, "Gott-Fallout · " + g.t, "nach/goetter/" + g.id, a.p, [a.x]); }); });
    });
  }
  (window.SP_ANHANG || []).forEach(function(k){ add(k.t, "Anhang", "nach/anhang/" + k.id, k.p, [k.b]); });
});
