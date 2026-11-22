/* MÖRK BORG – Kreaturen (Entwurf 4, nach Buchseiten gestaltet): Bildraster, Detailseite je Kreatur, „Auf den Spieltisch“. */
"use strict";
var KR = {gruppe:"grund"};
(function(){
 MB_KREATUR.forEach(function(k){
  k.werte = [k.rue && k.rue[0] ? k.rue[0] + (k.rue[1] ? " " + k.rue[1] : "") : ""].concat((k.angr || []).map(function(a){ return a[0] + " " + a[1]; })).filter(Boolean).join(" · ");
  k.spezial = k.bes || "";
 });
 /* Seitengestaltung wie im Buch: Hintergrund, Schrift, Akzent, Namensschrift */
 var LOOK = {
  seth:["#fff","#111","pink","anton"], bent:["#0d0d0d","#f2f2f2","gelb","anton"], zukuma:["#fff","#111","schwarz","anton"],
  wrat:["#0d0d0d","#fff","pink","anton"], belze:["#ffe600","#111","rot","anton"], lich:["#0d0d0d","#f2f2f2","gelb","fraktur"],
  troll:["#cfcfcf","#111","rot","anton"], nodh:["#0d0d0d","#f2f2f2","pink","anton"], "lady-porcelain":["#f6f6f4","#111","schwarz","antiqua"],
  thinx:["#fbf7f4","#111","rot","anton"], aland:["#ffe600","#111","rot","anton"], ewlotha:["#0d0d0d","#f2f2f2","pink","anton"], streuner:["#fff","#111","pink","fraktur"]
 };
 var APO = [["#ffdd00","#231f20","rot","anton"],["#231f20","#f4f1ea","gelb","anton"],["#ec008c","#231f20","weiss","anton"],["#f4f1ea","#231f20","rot","anton"],["#df0024","#f4f1ea","gelb","anton"]];
 function look(k){ if(LOOK[k.id]) return LOOK[k.id]; if(k.buch === "mb_apo"){ var L = liste0(k.gruppe), i = L.indexOf(k); return APO[i % APO.length]; } return ["#ff3eb5","#111","weiss","fraktur"]; }
 function liste0(g){ return MB_KREATUR.filter(function(k){ return k.gruppe === g; }); }
 var GRUPPEN = [["grund","Grundbuch"],["aus","Ausgestoßene"],["apo","Apokryphen"],["voelker","Monströse Völker"]];
 function liste(){ return MB_KREATUR.filter(function(k){ return k.gruppe === KR.gruppe; }); }
 function minus(s){ return String(s).replace("-", "−"); }
 function stil(k){ var l = look(k); return 'style="--kbg:' + l[0] + ';--kfg:' + l[1] + '" data-akz="' + l[2] + '" data-nf="' + l[3] + '"'; }
 function werte(k){
  var r = k.rue && k.rue[0] ? '<div><b>' + esc(k.rue[0]) + '</b> ' + (k.rue[1] ? '<em>' + minus(k.rue[1]) + '</em>' : "") + '</div>' : "";
  return '<div class="tm">TP <em>' + k.tp + '</em> · Moral <em>' + k.moral + '</em></div>' + r +
   (k.angr || []).map(function(a){ return '<div><b>' + esc(a[0]) + '</b> <em>' + esc(a[1]) + '</em></div>'; }).join("");
 }
 function kachel(k){
  var bild = k.img ? '<div class="kbild"><img src="' + IMG(k.img) + '" alt=""></div>' : '<div class="kbild leer"><span>' + esc(k.z || k.nr || "") + '</span></div>';
  return '<article class="kk" ' + stil(k) + ' onclick="go(\'kreaturen/' + k.id + '\')">' + bild +
   '<div class="kn"><h3>' + esc(k.t) + pgl(k.p, 0, k.buch) + '</h3><div class="typ">' + esc(k.typ) + '</div><div class="tm">TP <em>' + k.tp + '</em> · Moral <em>' + k.moral + '</em></div></div></article>';
 }
 function detail(k){
  var L = liste(), i = L.indexOf(k), vor = L[i - 1], nach = L[i + 1];
  var txt = (k.text || "").split("\n\n").filter(Boolean).map(function(p){ return '<p>' + md(p) + '</p>'; }).join("");
  var tab = (k.tab || []).map(function(t){ return '<div class="rt' + (t.w ? "" : " frei") + '"><h4>' + esc(t.h) + (t.w ? ' (' + t.w + ')' : "") + '</h4><ol>' + t.l.map(function(x, j){ return '<li>' + (t.w ? '<b>' + (j + 1) + '.</b> ' : "") + md(x) + '</li>'; }).join("") + '</ol></div>'; }).join("");
  var beute = k.beute ? '<div class="kbeute">' + k.beute.map(function(b){ return '<div><span>' + esc(b[0]) + '</span><b>' + esc(b[1]) + '</b></div>'; }).join("") + (k.beuteFn ? '<i>' + esc(k.beuteFn) + '</i>' : "") + '</div>' : "";
  var navi = '<div class="knav">' + (vor ? '<button onclick="go(\'kreaturen/' + vor.id + '\')">‹ ' + esc(vor.t) + '</button>' : '<span></span>') +
   (nach ? '<button onclick="go(\'kreaturen/' + nach.id + '\')">' + esc(nach.t) + ' ›</button>' : '<span></span>') + '</div>';
  return '<section class="kd" ' + stil(k) + '>' +
   (k.img ? '<div class="kdb"><img src="' + IMG(k.img) + '" alt="" onclick="zoom(this.src)"></div>' : '<div class="kdb glyph"><span>' + esc(k.z || "") + '</span></div>') +
   '<div class="kdt">' + beute + '<h1>' + (k.nr ? '<small>' + k.nr + '.</small>' : "") + esc(k.t) + '</h1>' +
   '<div class="ktyp">' + esc(k.typ) + pgl(k.p, 0, k.buch) + '</div>' +
   '<div class="kw">' + werte(k) + (k.bes ? '<div class="kbes"><b>Besonders</b> ' + esc(k.bes) + '</div>' : "") + '</div>' +
   (txt ? '<div class="ktx">' + txt + (k.fn ? '<p class="kl">' + esc(k.fn) + '</p>' : "") + '</div>' : "") +
   (tab ? '<div class="rts">' + tab + '</div>' : "") +
   '<button class="ktisch" onclick="SP.kreaturDazu(\'' + k.id + '\',1);go(\'spiel\')">Auf den Spieltisch</button>' + navi + '</div></section>';
 }
 VIEWS.kreaturen = function(a){
  var f = a[0] ? MB_KREATUR.filter(function(k){ return k.id === a[0]; })[0] : null;
  if(f) KR.gruppe = f.gruppe;
  var sub = GRUPPEN.map(function(g){ var n = MB_KREATUR.filter(function(k){ return k.gruppe === g[0]; }).length; return '<button class="' + (g[0] === KR.gruppe ? "on" : "") + '" onclick="KR.gr(\'' + g[0] + '\')">' + g[1] + '<i>' + n + '</i></button>'; }).join("");
  if(f) return '<nav class="sub">' + sub + '</nav>' + detail(f);
  var kopfz = KR.gruppe === "aus" ? '<div class="aint"><p>' + esc(MB_AUSGEST.intro) + '</p><p>' + md(MB_AUSGEST.folge) + pgl(MB_AUSGEST.p) + '</p></div>' : "";
  return '<nav class="sub">' + sub + '</nav>' + kopfz + '<div class="kgrid">' + liste().map(kachel).join("") + '</div>';
 };
 KR.gr = function(g){ KR.gruppe = g; if(location.hash !== "#kreaturen") go("kreaturen"); else render(); };
 window.addEventListener("keydown", function(e){
  var h = (location.hash || "").slice(1).split("/");
  if(h[0] !== "kreaturen" || !h[1] || document.querySelector(".modal,.gzoom") || /INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "")) return;
  if(e.key === "Escape"){ e.stopPropagation(); go("kreaturen"); return; }
  if(e.key === "ArrowUp" || e.key === "ArrowDown"){
   var L = liste(), i = L.map(function(k){ return k.id; }).indexOf(h[1]), n = L[i + (e.key === "ArrowDown" ? 1 : -1)];
   if(n){ go("kreaturen/" + n.id); } e.preventDefault(); e.stopPropagation();
  }
 }, true);
})();
