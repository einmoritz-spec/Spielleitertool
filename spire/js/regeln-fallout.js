/* THE SPIRE – Fallout-Liste (Regeln S. 12–16, Bindungs-Fallout S. 15–16): #nach/regeln/fallout.
   Vorläufige Regeln-Ansicht; Schritt 7 baut das Kapitel Regeln vollständig und übernimmt diese Seite als Abschnitt. */
window.SP_NACH_VIEW = window.SP_NACH_VIEW || {};
var FW = "alle";   /* Filter nach Widerstand */
function fwSet(w){ FW = w; render(); }
function fwKarten(L){
  L = L.filter(function(e){ return FW === "alle" || !e.w || e.w.indexOf(FW) >= 0; });
  return '<div class="raster r3">' + L.map(function(e){
    return '<div class="karte"><h4>' + esc(e.t) + (e.w ? '<span class="tag g">' + (e.wtxt || e.w.map(zWidT).join(" / ")) + '</span>' : '') + (e.p ? pgl(e.p) : '') + '</h4><p>' + md(e.x) + '</p></div>';
  }).join("") + '</div>';
}
function fwAnsicht(){
  var F = SP_FALLOUT, R = F.regel, B = F.bindung;
  var abs = function(id, o){ return '<h2 class="ab" id="fw-' + id + '">' + esc(o.t) + pgl(o.p) + '</h2>' + blk(o.b); };
  var filter = '<div class="wch fil">' + [["alle", "Alle"]].concat(SP_WID.map(function(w){ return [w.id, w.t]; })).map(function(w){ return '<span class="' + (FW === w[0] ? 'on' : '') + '" onclick="fwSet(\'' + w[0] + '\')">' + w[1] + '</span>'; }).join("") + '</div>';
  var stufe = function(k){ var S = F.stufen[k]; return '<h2 class="ab" id="fw-' + k + '">' + esc(S.t) + pgl(S.p) + '</h2><p>' + esc(S.intro) + '</p>' + fwKarten(S.x); };
  var bst = function(k){ var S = B.stufen[k]; return '<h3 class="un">' + esc(S.t) + pgl(S.p) + '</h3>' + fwKarten(S.x); };
  var side = '<h5 onclick="scrollTo({top:0,behavior:\'smooth\'})">Fallout</h5>' +
    [["behalten", R.behalten.t], ["plaetze", R.plaetze.t], ["fallout", R.fallout.t], ["toedlich", R.toedlich.t], ["leicht", "Leichter Fallout"], ["mittel", "Mittlerer Fallout"], ["schwer", "Schwerer Fallout"], ["bindung", B.t], ["eigene", R.eigene.t]]
      .map(function(a){ return '<a onclick="jump(\'fw-' + a[0] + '\')">' + esc(a[1]) + '</a>'; }).join("");
  var body = '<h1 class="titel">Fallout' + pgl(12) + '</h1>' + abs("behalten", R.behalten) + abs("plaetze", R.plaetze) + abs("fallout", R.fallout) + abs("toedlich", {t:R.toedlich.t, p:R.toedlich.p, b:[{t:"schwarz", b:R.toedlich.b[0]}]}) +
    filter + stufe("leicht") + stufe("mittel") + stufe("schwer") +
    '<h2 class="ab" id="fw-bindung">' + esc(B.t) + pgl(B.p) + '</h2>' + blk(B.intro) + bst("leicht") + bst("mittel") + bst("schwer") +
    '<p>' + md(B.regel[0]) + pgl(B.regelP) + '</p><p>' + md(B.regel[1]) + '</p>' +
    '<h2 class="ab" id="fw-eigene">' + esc(R.eigene.t) + pgl(R.eigene.p) + '</h2>' + blk([{t:"schwarz", b:R.eigene.b}]);
  return nachTabs("regeln") + lay(side, body, false);
}
SP_NACH_VIEW.regeln = function(teile){
  if(teile[0] === "fallout") return fwAnsicht();
  var B = SP_NACH_BEREICHE.regeln; return nachTabs("regeln") + voll(folgt(B.t, B.p, B.buch));
};
SP_NACH_VIEW.kampf = SP_NACH_VIEW.kampf || function(){ var B = SP_NACH_BEREICHE.kampf; return nachTabs("kampf") + voll(folgt(B.t, B.p, B.buch)); };
/* Suche */
(window.SP_SUCHE = window.SP_SUCHE || []).push(function(add){
  var F = SP_FALLOUT;
  Object.keys(F.stufen).forEach(function(k){ F.stufen[k].x.forEach(function(e){ add(e.t + " (" + e.en + ")", "Fallout · " + F.stufen[k].t, "nach/regeln/fallout", e.p, e.x + " " + e.w.map(zWidT).join(" ")); }); });
  Object.keys(F.bindung.stufen).forEach(function(k){ F.bindung.stufen[k].x.forEach(function(e){ add(e.t + " (" + e.en + ")", "Bindungs-Fallout", "nach/regeln/fallout", e.p, e.x); }); });
  ["behalten", "plaetze", "fallout", "toedlich", "eigene"].forEach(function(k){ add(F.regel[k].t, "Regeln · Fallout", "nach/regeln/fallout", F.regel[k].p, F.regel[k].b); });
  SP_VORGEFERTIGT.forEach(function(v){ add(v.n + " (" + v.klasse + ")", "Vorgefertigte Figur", "zelle", v.p, [v.hinter, v.fae, v.ausr, v.bindtext], "qs"); });
});
