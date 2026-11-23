/* THE SPIRE – Zufall (Entwurf 9). Route #zufall[/<gruppe>|<liste>]. W10-Tabellen aus Anhang 2 (S. 200–204) als Karten im 2er-Raster,
   dazu Ziegen (Anhang 4, S. 207) und Arkologien (Anhang 5, S. 208) als Listen mit Zufallswahl. Würfe stehen in ST.zufall (gespeichert).
   Daten: SP_ZUFALL (zufall-a.js), SP_ZUFALL_LISTEN (zufall-b.js); die Tabellen selbst zeichnet w10() in app.js. */
function zfGruppe(id){ return SP_ZUFALL.gruppen.filter(function(g){ return g.id === id; })[0]; }
function zfListe(id){ return SP_ZUFALL_LISTEN.filter(function(g){ return g.id === id; })[0]; }
function zfAlle(gid){
  var g = zfGruppe(gid); if(!g) return; ST.zufall = ST.zufall || {};
  g.tabellen.forEach(function(t){ ST.zufall["z-" + t.id] = 1 + Math.floor(Math.random() * t.rows.length); });
  save(); render();
}
function zfWahl(id){ var L = zfListe(id); if(!L) return; ST.zufall = ST.zufall || {}; ST.zufall["l-" + id] = 1 + Math.floor(Math.random() * L.x.length); save(); render(); }
function zfSide(cur){
  var Z = SP_ZUFALL;
  return '<h5 onclick="go(\'zufall\')">Zufällige Dinge und Ereignisse</h5>' +
    Z.gruppen.map(function(g){ return '<a class="' + (g.id === cur ? 'on' : '') + '" onclick="go(\'zufall/' + g.id + '\')">' + esc(g.t) + '</a>'; }).join("") +
    '<h5>Weitere Tabellen</h5>' +
    SP_ZUFALL_LISTEN.map(function(l){ return '<a class="' + (l.id === cur ? 'on' : '') + '" onclick="go(\'zufall/' + l.id + '\')">' + esc(l.k) + '<span class="pg">' + pgTxt(l.p) + '</span></a>'; }).join("");
}
function zfGruppeAnsicht(g){
  var Z = SP_ZUFALL, ps = []; g.tabellen.forEach(function(t){ if(ps.indexOf(t.p) < 0) ps.push(t.p); });
  var cards = g.tabellen.map(function(t){
    return w10({h:t.t, id:"z-" + t.id, rows:t.rows}).replace('<div class="w10t">', '<div class="w10t" id="zt-' + t.id + '">');
  }).join("");
  return '<h1 class="titel">' + esc(Z.t) + pgl(Z.p) + '</h1>' +
    '<div class="zfk"><h2 class="ab">' + esc(g.t) + ps.map(function(p){ return pgl(p); }).join("") + '</h2><span class="alle" onclick="zfAlle(\'' + g.id + '\')">Alle würfeln</span></div>' +
    '<div class="raster ' + (g.tabellen.length === 3 ? 'r3' : 'r2') + ' zfr">' + cards + '</div>';
}
function zfListeAnsicht(L){
  var hit = (ST.zufall || {})["l-" + L.id];
  return '<h1 class="titel">' + esc(L.t) + pgl(L.p) + '</h1>' +
    '<div class="zfk">' + (L.einl ? '<p class="einl" style="margin:0">' + md(L.einl) + '</p>' : '') + '<span class="alle" onclick="zfWahl(\'' + L.id + '\')">' + esc(L.wahl) + (hit ? ' · ' + hit : '') + '</span></div>' +
    '<div class="raster r2 zll">' + L.x.map(function(x, i){ return '<div class="karte' + (hit === i + 1 ? ' hit' : '') + '"><h4>' + esc(x.t) + (x.p ? pgl(x.p) : '') + '</h4><p>' + md(x.x) + '</p></div>'; }).join("") + '</div>';
}
SP_VIEW.zufall = function(teile){
  var id = teile[0] || SP_ZUFALL.gruppen[0].id, g = zfGruppe(id), L = !g && zfListe(id);
  if(!g && !L){ g = SP_ZUFALL.gruppen[0]; id = g.id; }
  var body = g ? zfGruppeAnsicht(g) : zfListeAnsicht(L);
  return spielTabs("zufall") + lay(zfSide(id), '<div class="dbody zf" data-pgbook="sp_cmf">' + body + '</div>');
};
(window.SP_SUCHE = window.SP_SUCHE || []).push(function(add){
  add(SP_ZUFALL.t, "Zufall", "zufall", SP_ZUFALL.p, [SP_ZUFALL.einl, SP_ZUFALL.gruppen.map(function(g){ return g.t; })]);
  SP_ZUFALL.gruppen.forEach(function(g){ add(g.t, "Zufall", "zufall/" + g.id, null, g.tabellen.map(function(t){ return t.t; })); g.tabellen.forEach(function(t){ add(t.t, "Zufall · " + g.t, "zufall/" + g.id, t.p, t.rows); }); });
  SP_ZUFALL_LISTEN.forEach(function(L){ add(L.t, L.k, "zufall/" + L.id, L.p, [L.einl, L.wahl]); L.x.forEach(function(x){ add(x.t, L.k, "zufall/" + L.id, x.p, x.x); }); });
});
