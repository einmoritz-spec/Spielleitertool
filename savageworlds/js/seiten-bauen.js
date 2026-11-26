/* Ausrüstung > Bauen & Basen: Festungen, Lodges, Stützpunkte, Außenposten, Kraftrüstungen, Roboter, Läufer, Raumschiff-/Fahrzeugbau.
   Daten: window.SW_BAU_FAN|HOR|SF|SUP = [{k,s,bk,p,h,b:[Blöcke]}]. Blöcke: {p:Text} {h:Zwischenüberschrift} {k:[[Name,Text]]} {t:[Spalten],r:[[Zellen…,Anmerkung?]]} */
"use strict";
(function(){
var GK = ["FAN", "HOR", "SF", "SUP"], COL = {FAN: "#2f7a4a", HOR: "#7a2230", SF: "#1f6f9a", SUP: "#c2571c"};
function vis(s){ return sqVis([s]); }
function secs(){
  var L = [];
  GK.forEach(function(g){ var d = window["SW_BAU_" + g]; if(d) d.forEach(function(x){ if(vis(x.s)) L.push(x); }); });
  return L;
}
function blk(b, s){
  if(b.h) return '<h5 class="eg">' + nm(b.h) + "</h5>";
  if(b.p) return edP(b.p);
  if(b.k) return '<div class="hg">' + b.k.map(function(c){ return '<div class="hc" style="--rc:' + COL[s] + '"><b>' + nm(c[0]) + "</b><p>" + esc(c[1]) + "</p></div>"; }).join("") + "</div>";
  if(b.t && b.kart){
    return '<div class="hg">' + b.r.map(function(r){
      return '<div class="hc" style="--rc:' + COL[s] + '"><b>' + nm(r[0]) + "</b><p>" + esc(r[r.length - 1]) + '</p><p class="ed" style="font-size:.85em;opacity:.85">' + b.t.slice(1, -1).map(function(t, i){ return "<b>" + esc(t) + ":</b> " + esc(r[i + 1]); }).join(" · ") + "</p></div>";
    }).join("") + "</div>";
  }
  if(b.t){
    var N = b.t.length;
    return '<div class="' + (b.m ? "bm" : "bt") + '">' + eqTable(b.t, b.r.map(function(r){ return {c: r.slice(0, N), n: r.length > N ? r.slice(N).join(" ") : ""}; })) + "</div>";
  }
  return "";
}
window.bauenPage = function(){
  var Z = secs(), cur = Z.length ? ((Z.filter(function(z){ return z.k === ST.bk; })[0] || Z[0]).k) : "";
  var side = '<aside class="side"><button class="fold" onclick="foldSide()" aria-label="Seitenleiste">‹</button>' + Z.map(function(z){
    return '<a class="' + (z.k === cur ? "on" : "") + '" onclick="bKat(' + JSON.stringify(z.k).replace(/"/g, "&quot;") + ')">' + esc(z.k) + sqBadge([z.s]) + "</a>";
  }).join("") + "</aside>";
  var z = Z.filter(function(x){ return x.k === cur; })[0], h = "";
  if(z) h = '<h4 class="rk" style="--rc:#a51f1a"><span>' + nm(z.h) + "</span>" + sqBadge([z.s]) + pgLink(z.bk, z.p) + "</h4>" + z.b.map(function(b){ return blk(b, z.s); }).join("");
  else h = "";
  APP.innerHTML = '<div class="lay' + (ST.fold ? " fold-on" : "") + '" id="lay">' + side + '<main class="ct"><h2>Bauen &amp; Basen</h2>' + h + "</main></div>";
};
window.bKat = function(k){ ST.bk = k; save(); bauenPage(); window.scrollTo(0, 0); };
var T = TABS.filter(function(t){ return t.id === "ausruestung"; })[0];
if(T && !T.subs.some(function(s){ return s[0] === "bauen"; })) T.subs.push(["bauen", "Bauen & Basen", 0]);
if(window.CHAPT && CHAPT.ausruestung && !CHAPT.ausruestung.some(function(s){ return s[1] === "bauen"; })) CHAPT.ausruestung.push(["Bauen & Basen", "bauen"]);
SWP["ausruestung/bauen"] = window.bauenPage;
render();
})();
