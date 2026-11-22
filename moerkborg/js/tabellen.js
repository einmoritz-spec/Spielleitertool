/* MÖRK BORG – Tabellen: Gruppen als Unterreiter, Tabellen als Karten, Zeile anklickbar (markiert). */
"use strict";
var TB = {gruppe:"unterwegs"};
(function(){
 var V = MB_VORSATZ;
 function num(l){ return l.map(function(t, i){ return [String(i + 1), t]; }); }
 var ALLE = [
  {id:"wetter", gruppe:"unterwegs", t:V.wetter.t, w:V.wetter.w, rows:num(V.wetter.rows), cols:3},
  {id:"fallen", gruppe:"unterwegs", t:V.fallen.t, w:V.fallen.w, rows:num(V.fallen.rows), cols:3, breit:1},
  {id:"leichen", gruppe:"unterwegs", t:V.leichen.t, w:V.leichen.w, rows:V.leichen.rows, cols:2, breit:1},
  {id:"schaetze", gruppe:"unterwegs", t:V.schaetze.t, w:V.schaetze.w, rows:num(V.schaetze.rows), cols:1, breit:1},
  {id:"namen", gruppe:"unterwegs", t:V.namen.t, w:V.namen.w, x:V.namen.u, namen:V.namen.spalten}
 ].concat(MB_TAB);
 var GRUPPEN = [["unterwegs","Unterwegs"],["anfang","Anfang"],["verlies","Verlies"],["psalme","Psalmen"]];
 TB.gruppen = GRUPPEN;
 function kopf(t){ return '<header><h3>' + esc(t.t) + '</h3><span class="w">' + esc(t.w || "") + '</span>' + (t.p ? pgl(t.p, 0, t.buch) : "") + '</header>' + (t.x ? '<p class="hx">' + md(t.x) + '</p>' : ""); }
 function zeilen(t){ return '<div class="tr" style="--c:' + (t.cols || 1) + '">' + t.rows.map(function(r){ return '<div class="r" onclick="this.classList.toggle(\'sel\')"><b>' + esc(r[0]) + '</b><span>' + md(r[1]) + '</span></div>'; }).join("") + '</div>'; }
 function karte(t){
  var cls = "tt" + (t.breit || t.cols > 2 ? " breit" : "");
  if(t.namen){
   var N = t.namen, kp = "<tr><th>W6</th>" + [1,2,3,4,5,6].map(function(i){ return "<th>" + i + "</th>"; }).join("") + "</tr>";
   var body = N[0].map(function(_, r){ return "<tr><th>" + (r + 1) + "</th>" + N.map(function(c){ return "<td onclick=\"this.classList.toggle('sel')\">" + esc(c[r]) + "</td>"; }).join("") + "</tr>"; }).join("");
   return '<section class="tt breit">' + kopf(t) + '<table class="nm">' + kp + body + '</table></section>';
  }
  if(t.kopf){
   return '<section class="' + cls + '">' + kopf(t) + '<table class="nm vs"><tr>' + t.kopf.map(function(k){ return "<th>" + esc(k) + "</th>"; }).join("") + '</tr>' + t.rows.map(function(r){ return "<tr onclick=\"this.classList.toggle('sel')\"><th>" + r[0] + "</th><td>" + esc(r[1]) + "</td><td>" + esc(r[2]) + "</td></tr>"; }).join("") + '</table></section>';
  }
  if(t.gruppen){
   return '<section class="tt breit">' + kopf(t) + '<div class="rg4">' + t.gruppen.map(function(g, i){ return '<div class="tg"><b class="d4">W4 ' + (i + 1) + '</b>' + zeilen({rows:g.map(function(x, j){ return [String(j + 1), x]; })}) + '</div>'; }).join("") + '</div></section>';
  }
  return '<section class="' + cls + '">' + kopf(t) + zeilen(t) + '</section>';
 }
 function psalmen(){
  var P = MB_PSALMEN;
  return '<div class="yps"><div class="ypk"><h2>' + esc(P.t) + pgl(P.p, 0, "mb_apo") + '</h2><p class="ysub">' + esc(P.sub) + '</p><p class="ypw">' + esc(P.w) + '</p></div><div class="ypg">' +
   P.psalmen.map(function(s){ return '<section class="ypsm"><h3>' + esc(s.h) + '</h3><p class="yu">' + esc(s.u) + '</p>' + s.v.map(function(v){ return '<div class="r" onclick="this.classList.toggle(\'sel\')"><b>' + v[0] + '</b><span>' + esc(v[1]) + '</span></div>'; }).join("") + '</section>'; }).join("") +
   '</div><p class="ysl">' + esc(P.schluss) + '</p><p class="yfu">' + esc(P.fuss) + '</p></div>';
 }
 VIEWS.tabellen = function(a){
  var g = a[0] || TB.gruppe; TB.gruppe = g;
  var sub = '<nav class="sub">' + GRUPPEN.map(function(x){ return '<button class="' + (x[0] === g ? "on" : "") + '" onclick="go(\'tabellen/' + x[0] + '\')">' + x[1] + '</button>'; }).join("") + '</nav>';
  if(g === "psalme") return sub + '<div class="tbw">' + psalmen() + '</div>';
  var L = ALLE.filter(function(t){ return t.gruppe === g; });
  var titel = g === "anfang" ? '<h2 class="tbh">Noch mehr Gründe, sein Leben zu riskieren</h2>' : g === "verlies" ? '<h2 class="tbh">Eines der vielen verteufelten Verliese</h2>' : "";
  return sub + '<div class="tbw">' + titel + '<div class="tgrid">' + L.map(karte).join("") + '</div></div>';
 };
 window.addEventListener("keydown", function(e){
  var h = (location.hash || "").slice(1).split("/");
  if(h[0] !== "tabellen" || document.querySelector(".modal,.gzoom") || /INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "") || e.ctrlKey || e.metaKey || e.altKey) return;
  if(e.key === "ArrowDown" || e.key === "ArrowUp"){
   var ids = GRUPPEN.map(function(x){ return x[0]; }), i = ids.indexOf(h[1] || "unterwegs"), n = ids[i + (e.key === "ArrowDown" ? 1 : -1)];
   if(n) go("tabellen/" + n); e.preventDefault(); e.stopPropagation();
  }
 }, true);
})();
