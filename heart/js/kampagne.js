/* HEART – Beispielkampagne „Hinab ins Herz“ (#kampagne): Stationen nach Tiefe, Delves mit Resistenz,
   Buchstellen zu jeder Verbindung und die Aufträge der Landmarken. „Auf die Karte“ legt alles auf die Sechseckkarte. */
(function(){
var B = window.HT_BSP, STRESS = {0:"W4", 1:"W4", 2:"W6", 3:"W6"};
function lm(id){ return (window.HT_LM || []).filter(function(l){ return l.id === id; })[0]; }
function buch(l){ return l && l.q === "bb" ? "ht_z3" : "ht_core"; }
function absatz(ref){
  if(ref.t) return md(ref.t) + (ref.s ? " " + pgl(ref.s, "S. " + ref.s) : "") + (ref.r ? ' <span class="bspz" onclick="go(\'' + ref.r + '\')">Ganzes Beispiel öffnen</span>' : "");
  var l = lm(ref.lm); if(!l) return "";
  var L = [].concat(l[ref.feld] || []).map(function(x){ return typeof x === "string" ? x : (x && (x.x || x.t)) || ""; });
  var a = L.filter(function(x){ return x.indexOf(ref.such) >= 0; })[0];
  return a ? md(a) + " <i class=\"bspq\">– " + esc(l.t) + "</i> " + pgl(l.p, "S. " + l.p, buch(l)) : "";
}
window.bspLaden = function(){
  ST.karte = ST.karte || {f:{}, l:[]};
  if(Object.keys(ST.karte.f).length && !confirm("Die Karte enthält schon Landmarken. Durch die Beispielkampagne ersetzen?")) return;
  var f = {}; Object.keys(B.felder).forEach(function(k){ f[k] = {id:B.felder[k]}; });
  ST.karte = {f:f, l:B.delves.map(function(d){ return [d[0], d[1], String(d[2])]; })};
  save(); go("karte");
};
function karte(key){
  var id = B.felder[key], l = lm(id);
  var wege = {}, verb = B.delves.filter(function(d){ return d[0] === key || d[1] === key; }).map(function(d){
    wege[d[3]] = 1;
    var ander = lm(B.felder[d[0] === key ? d[1] : d[0]]); if(!ander) return "";
    var r = ander.tiefe > l.tiefe ? "hinab" : ander.tiefe < l.tiefe ? "hinauf" : "";
    var q = d[4] ? absatz(d[4]) : "";
    return '<li><span class="bspz" onclick="go(\'lm/' + ander.id + '\')">' + (r === "hinauf" ? "↑ " : r === "hinab" ? "↓ " : "→ ") + esc(ander.t) + "</span>" +
      '<b class="bspr" title="Resistenz des Delves">' + d[2] + "</b>" + (q ? '<details class="bspd"><summary>Aus dem Buch</summary><p>' + q + "</p></details>" : "") + "</li>";
  }).join("");
  var plots = (l.plots || []).filter(Boolean);
  return '<div class="bspk' + (wege.linie ? " linie" : "") + (wege.auftrag ? " auftrag" : "") + '">' +
    '<div class="bspkk"><span class="platte" onclick="go(\'lm/' + l.id + '\')">' + esc(l.t) + "</span> " + pgl(l.p, "S. " + l.p, buch(l)) + "</div>" +
    '<div class="bspkw">' + esc((l.dom || []).join(", ")) + " · Stress " + esc(String(l.stress || "").split(/[,;]/)[0]) + "</div>" +
    '<ul class="bspv">' + verb + "</ul>" +
    (plots.length ? '<details class="bspa"><summary>Aufträge (' + plots.length + ")</summary><ul>" + plots.map(function(p){ return "<li>" + md(typeof p === "string" ? p : p.x || "") + "</li>"; }).join("") + "</ul></details>" : "") +
    "</div>";
}
function view(){
  var keys = Object.keys(B.felder), tiefen = [0, 1, 2, 3];
  var teile = tiefen.map(function(t){
    var K = keys.filter(function(k){ var l = lm(B.felder[k]); return l && l.tiefe === t; });
    if(!K.length) return "";
    return '<section class="bsps"><h2 class="bsph">Tiefe ' + t + " <small>Standard-Stress " + STRESS[t] + "</small></h2>" +
      '<div class="bspg">' + K.map(karte).join("") + "</div></section>";
  }).join("");
  return window.spielNav("karte") + '<div class="bspw"><div class="bspkopf"><h1>' + esc(B.t) + "</h1>" +
    '<span class="bspl linie">' + esc(B.wege.linie) + '</span><span class="bspl auftrag">' + esc(B.wege.auftrag) + "</span>" +
    '<span class="sp"></span><button onclick="bspLaden()">Auf die Karte</button></div>' + teile + "</div>";
}
VIEWS.kampagne = view;
})();
