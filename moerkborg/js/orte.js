/* MÖRK BORG – Orte (Verliese, Etablissements, Auftragstafeln) als Gruppen im Tabellen-Bereich. */
"use strict";
(function(){
 var O = MB_ORTE, ORT = {verliese:"verliese", etab:"etab"};
 function blk(b){
  var c = b.c ? " o-" + b.c : "";
  if(b.t === "p") return '<p class="op' + c + '">' + md(b.x) + '</p>';
  if(b.t === "liste") return '<ol class="ol">' + b.x.map(function(x, i){ return '<li class="r" onclick="this.classList.toggle(\'sel\')"><b>' + (i + 1) + '</b><span>' + md(x) + '</span></li>'; }).join("") + '</ol>';
  if(b.t === "kreatur") return '<div class="okr"><h4>' + esc(b.h) + '</h4><p class="ow">' + esc(b.w || "") + '</p>' + (b.b || []).map(function(x){ return '<p>' + md(x) + '</p>'; }).join("") + '</div>';
  if(b.t === "preis") return '<div class="opr">' + b.x.map(function(r){ return '<div><b>' + esc(r[0]) + '</b><i>' + esc(r[1]) + '</i><span>' + esc(r[2]) + '</span></div>'; }).join("") + '</div>';
  if(b.t === "namen") return '<div class="onm">' + b.x.map(function(n, i){ return '<span onclick="this.classList.toggle(\'sel\')"><b>' + (i + 1) + '</b>' + esc(n[0]) + ' ' + esc(n[1]) + '</span>'; }).join("") + '</div>';
  if(b.t === "karten") return (b.h ? '<h4 class="oh4">' + esc(b.h) + '</h4>' : "") + '<div class="okg">' + b.x.map(function(k){ return (k.h ? '<div class="okk" onclick="this.classList.toggle(\'sel\')"><div class="okh"><b class="okn">' + esc(k.n) + '</b><h5>' + esc(k.h) + '</h5>' + (k.pr ? '<i>' + esc(k.pr) + '</i>' : "") + '</div><p>' + md(k.b) + '</p></div>' : '<div class="okk okz" onclick="this.classList.toggle(\'sel\')"><b class="okn">' + esc(k.n) + '</b><p>' + md(k.b) + '</p></div>'); }).join("") + '</div>';
  return "";
 }
 function sek(s){ var v = s.b.some(function(b){ return b.t === "karten" && b.x.length >= 4 && b.x.some(function(k){ return k.h; }); }); return '<section class="osk' + (v ? " osv" : "") + '"><h3>' + esc(s.h) + (s.p ? pgl(s.p, 0, "mb_apo") : "") + '</h3>' + s.b.map(blk).join("") + '</section>'; }
 function ort(g, id){
  var L = O[g], o = L.filter(function(x){ return x.id === id; })[0] || L[0];
  var nav = '<nav class="onav">' + L.map(function(x){ return '<button class="' + (x === o ? "on" : "") + '" onclick="go(\'tabellen/' + g + '/' + x.id + '\')">' + esc(x.t) + '</button>'; }).join("") + '</nav>';
  var bild = o.bild ? '<img class="obild" src="' + IMG("orte/" + o.bild) + '" alt="" onclick="zoom(this.src)">' : "";
  return nav + '<div class="oort' + (o.breit ? ' ow2' : '') + '">' + (bild ? '<div class="ob">' + bild + '</div>' : "") + '<div class="osp">' + o.s.map(sek).join("") + '</div></div>';
 }
 function tafeln(){
  var T = O.tafeln;
  return '<div class="otf">' + T.zettel.map(function(z){
   return '<article class="oz">' + (z.h ? '<h4>' + esc(z.h) + '</h4>' : "") + '<p>' + md(z.x) + '</p>' + (z.v ? '<span class="ov">~ ' + esc(z.v) + '</span>' : "") + '<footer>' + pgl(z.p, 0, "mb_apo") + (z.k ? '<a onclick="go(\'kreaturen/' + z.k + '\')">Kreatur</a>' : "") + '</footer></article>';
  }).join("") + '</div>';
 }
 TB.orte = {
  has: function(g){ return g === "verliese" || g === "etab" || g === "tafeln"; },
  render: function(g, id){ return '<div class="tbw">' + (g === "tafeln" ? tafeln() : ort(g, id)) + '</div>'; }
 };
})();
