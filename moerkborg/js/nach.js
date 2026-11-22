/* MÖRK BORG – Nachschlagen (gelbe Leiste). Teil I „Die sterbende Welt“ nach Entwurf 7: Weltkarte links, Ortsleiste, Seitenpaare. Teile II–IV folgen (Bauschritte 3, 5, 7). */
"use strict";
var NACH = {}, NACH_TEILE = {welt:"Die sterbende Welt"};
VIEWS.nach = function(a){
 var teil = a[0] || "welt", key = a[1] || "anfang";
 var bar = '<nav class="reiter gelb">' + Object.keys(NACH_TEILE).map(function(k){ return '<button class="' + (k === teil ? "on" : "") + '" onclick="go(\'nach/' + k + '\')">' + NACH_TEILE[k] + '</button>'; }).join("") + '</nav>';
 var ort = MB_WELT_ORTE.filter(function(o){ return o.id === key; })[0] || MB_WELT_ORTE[0];
 var sel = ort.sel || ort.id;
 var orte = MB_WELT_ORTE.map(function(o){
  var g = o.g === "–" ? '<b></b>' : o.g ? '<b>' + esc(o.g) + '</b>' : "";
  var act = o.aktion ? "NACH.akt('" + o.aktion + "')" : "go('nach/welt/" + o.id + "')";
  return g + '<span class="' + (o.id === ort.id ? "on" : "") + '" onclick="' + act + '">' + esc(o.t) + '</span>';
 }).join("");
 var erst = false;
 var hs = MB_WELT_HS.map(function(h){ var an = h[0] === ort.id && !erst; if(an) erst = true; return '<span class="hs' + (an ? " on" : "") + '" style="left:' + h[1] + '%;top:' + h[2] + '%" onclick="go(\'nach/welt/' + h[0] + '\')"></span>'; }).join("");
 var seite = MB_WELT.filter(function(s){ return s.id === (ort.seite || "anfang"); })[0];
 function sec(s, gross){
  if(s.bild) return '<img class="bild" src="' + IMG(s.bild) + '" alt="" onclick="zoom(this.src)">';
  if(s.link){ var li = MB_WELT_ORTE.filter(function(o){ return o.seite === s.link; })[0]; return '<div class="mehr" onclick="go(\'nach/welt/' + li.id + '\')"><span>' + esc(s.h) + pgl(s.p) + '</span></div>'; }
  var t = s.gross ? "h1" : "h2", h = s.h ? '<' + t + '>' + esc(s.h) + pgl(s.p) + '</' + t + '>' : '<div class="sn">' + pgl(s.p) + '</div>';
  return '<section class="ws' + (s.id && s.id === sel ? " sel" : "") + '">' + h + (s.unter ? '<div class="unter">' + esc(s.unter) + '</div>' : "") +
   (s.img ? '<img class="bild' + (s.hoch ? " hoch" : "") + '" src="' + IMG(s.img) + '" alt="" onclick="zoom(this.src)">' : "") + BLK(s.x) + '</section>';
 }
 var inh = "";
 if(seite) inh = '<div class="zwei"><div class="l">' + seite.l.map(function(s){ return sec(s, 1); }).join("") + '</div><div class="r">' + seite.r.map(function(s){ return sec(s, 0); }).join("") + '</div></div>' +
   (seite.unten ? '<div class="ws unten">' + BLK(seite.unten) + '</div>' : "") + (seite.fries ? '<img class="fries" src="' + IMG(seite.fries) + '" alt="" onclick="zoom(this.src)">' : "");
 return bar + '<div class="leib"><div class="karte"><div class="kb"><img src="' + IMG("welt/weltkarte") + '" alt="" onclick="NACH.akt(\'karte\')">' + hs + '</div></div><div class="text"><div class="orte">' + orte + '</div>' + inh + '</div></div>';
};
NACH.akt = function(a){ if(a === "karte") zoom(IMG("welt/weltkarte")); else if(a === "kalender") SP.verse(); };
NACH.step = function(d){
 var cur = (location.hash || "").split("/")[2] || "anfang", i = 0;
 MB_WELT_ORTE.forEach(function(o, n){ if(o.id === cur) i = n; });
 var n = MB_WELT_ORTE[i + d]; if(n && !n.aktion) go("nach/welt/" + n.id);
};
document.addEventListener("keydown", function(e){
 if(/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "") || e.ctrlKey || e.metaKey || e.altKey || document.querySelector(".modal,.gzoom")) return;
 if((location.hash || "").indexOf("#nach") !== 0) return;
 if(e.key === "ArrowRight"){ NACH.step(1); e.preventDefault(); } if(e.key === "ArrowLeft"){ NACH.step(-1); e.preventDefault(); }
});
