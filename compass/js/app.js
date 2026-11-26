/* BROKEN COMPASS – Spielleiter-Tafel. Startseite in zwei Ansichten: „Film“ (Kino, Bild-Header schiebt sich beim Scrollen zusammen)
   und „Buch“ (Leder-Einband mit Kapitel-Tafeln). Umschalter in der Kopfzeile. Bereiche und Folgen öffnen bis zum Ausbau das Buch an der passenden Stelle. */
"use strict";
var APP = document.getElementById("app");
var IMG = "img/start/";
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
/* Folgen: Drehbuch-Ansicht, sobald Daten vorhanden (BC_EPOK in start.js), sonst das Original-PDF */
function epGo(id, b, s){ if(window.BC_EPOK && BC_EPOK[id]) location.hash = "#e/" + id; else openBook(b, s); }
function stGo(k, b){ var Z = window.BC_BUCH && BC_BUCH[k], A = Z && Z.areas && Z.areas[0]; if(A) location.hash = "#a/" + A.id; else openBook(b, 1); }
function openBook(id, s){ try{ BV.open(id || "bc_aj", s || 1); }catch(e){} }
function ansicht(){ try{ return localStorage.getItem("bc_startansicht") === "buch" ? "buch" : "film"; }catch(e){ return "film"; } }
function setAnsicht(v){ try{ localStorage.setItem("bc_startansicht", v); }catch(e){} window.scrollTo(0, 0); route(); }

/* ---------- Film ---------- */
function folge(st, e, i){
  var t = esc(e[0]), lab = "Folge " + (i + 1), click = ' onclick="epGo(\'' + st.id + (i + 1) + '\',\'' + st.b + '\',' + e[1] + ')"';
  if(e[2]) return '<a class="fr" style="background-image:url(' + IMG + e[2] + '.webp)"' + click + '><span><b>' + lab + '</b><i>' + t + '</i></span></a>';
  return '<a class="fr tk" style="--c:' + st.c + '"' + click + '><span><b>' + lab + '</b><i>' + t + '</i></span></a>';
}
function viewFilm(){
  var fan = BC_AREAS.map(function(a, i){
    return '<a class="sl" style="--c:' + a.c + ';background-image:url(' + IMG + a.img + '.webp);background-position:' + a.pos + '" href="#a/' + a.id + '">' +
      '<div class="tx"><small>Abschnitt ' + (i + 1) + '</small><b>' + esc(a.t) + '</b><ul>' + a.sub.map(function(x){ return '<li>' + esc(x) + '</li>'; }).join("") + '</ul></div><div class="bar"></div></a>';
  }).join("");
  var rows = '<a class="pil" onclick="epGo(\'pilot\',\'' + BC_PILOT.b + '\',' + BC_PILOT.s + ')"><div class="im" style="background-image:url(' + IMG + BC_PILOT.img + '.webp)"></div><div><b>' + esc(BC_PILOT.lab) + '</b><i>' + esc(BC_PILOT.t) + '</i></div></a>';
  rows += BC_STAFFELN.map(function(st){
    return '<div class="row ' + st.id + '"><a class="post" onclick="stGo(\'' + st.id + '\',\'' + st.b + '\')"><img src="' + IMG + st.cover + '.webp" alt=""><div class="k">' + esc(st.lab) + '</div><div class="t">' + esc(st.t) + '</div></a>' +
      '<div class="strip">' + st.eps.map(function(e, i){ return folge(st, e, i); }).join("") + '</div></div>';
  }).join("");
  return '<section class="fan-wrap"><div class="fan">' + fan + '</div></section><section class="seas"><div class="sh2">Staffeln</div>' + rows + '</section>';
}

/* ---------- Buch ---------- */
function viewBuch(){
  var sp = BC_AREAS.map(function(a, i){
    return '<a class="dp" style="--c:' + a.c + '" href="#a/' + a.id + '"><div class="art" style="background-image:url(' + IMG + a.img + '.webp);background-position:' + a.pos + '"></div>' +
      '<div class="op"><small>Abschnitt ' + (i + 1) + '</small><b>' + esc(a.t) + '</b><span>' + a.sub.map(esc).join(" · ") + '</span></div></a>';
  }).join("");
  function zettel(k, lab, t, bild, c, items){
    return '<div class="zt ' + k + '" style="--f:' + c + '"><div class="cv" style="background-image:url(' + IMG + bild + '.webp)"></div><div class="k">' + esc(lab) + '</div><div class="t">' + esc(t) + '</div><ol>' + items + '</ol></div>';
  }
  var z = zettel("pilot", "Pilot", "Ins Auge des Sturms", BC_PILOT.img, "#1d2c4d", '<li onclick="epGo(\'pilot\',\'' + BC_PILOT.b + '\',' + BC_PILOT.s + ')"><span>P</span>Ins Auge des Sturms</li><li onclick="epGo(\'quetzalcoatl\',\'' + BC_PILOT.b + '\',228)"><span>Z</span>' + esc(BC_PILOT.t) + '</li><li onclick="epGo(\'bogen-fertig\',\'' + BC_PILOT.b + '\',230)"><span>A</span>Fertige Abenteurer</li>');
  z += BC_STAFFELN.map(function(st){
    return zettel(st.id, st.lab, st.t, st.bild, st.c, st.eps.map(function(e, i){ return '<li onclick="epGo(\'' + st.id + (i + 1) + '\',\'' + st.b + '\',' + e[1] + ')"><span>' + (i + 1) + '</span>' + esc(e[0]) + '</li>'; }).join(""));
  }).join("");
  return '<section class="einband"><div class="emb-logo"><div></div></div><div class="emb-kompass"></div></section>' +
    '<div class="tafeln">' + sp + '</div><section class="stf"><h2>Staffeln</h2><div class="zettel">' + z + '</div></section>';
}

/* ---------- Kopf: Bildwechsel und Zusammenschieben (nur Film) ---------- */
var HERO = {i: -1, t: null};
function heroNext(first){
  var bg = document.querySelector(".hdbg"); if(!bg) return;
  var ls = bg.querySelectorAll(".l"), n;
  do { n = Math.floor(Math.random() * BC_HERO.length); } while(n === HERO.i && BC_HERO.length > 1);
  HERO.i = n;
  var on = bg.querySelector(".l.on"), off = on === ls[0] ? ls[1] : ls[0];
  off.style.backgroundImage = "url(" + IMG + BC_HERO[n] + ".webp)";
  if(first){ off.classList.add("on"); if(on) on.classList.remove("on"); return; }
  var im = new Image(); im.onload = function(){ off.classList.add("on"); if(on) on.classList.remove("on"); }; im.src = IMG + BC_HERO[n] + ".webp";
}
var HD = {H: 560, M: 64};
function hdScroll(){
  if(!document.body.classList.contains("film")) return;
  var bar = document.querySelector(".topbar"), y = window.scrollY, h = Math.max(HD.M, HD.H - y), t = (h - HD.M) / (HD.H - HD.M);
  bar.style.height = h + "px";
  bar.style.setProperty("--t", t.toFixed(3));
  bar.style.transform = "translateY(-" + Math.max(0, y - (HD.H - HD.M)) + "px)";
}
window.addEventListener("scroll", function(){ requestAnimationFrame(hdScroll); }, {passive: true});

function renderStart(){
  document.getElementById("tabs").innerHTML = ""; document.body.style.removeProperty("--c");
  var v = ansicht();
  document.body.classList.remove("inh");
  document.body.classList.toggle("film", v === "film");
  document.body.classList.toggle("buch", v === "buch");
  [].forEach.call(document.querySelectorAll(".ansicht button"), function(b){ b.classList.toggle("on", b.dataset.v === v); });
  var bar = document.querySelector(".topbar");
  APP.innerHTML = v === "film" ? viewFilm() : viewBuch();
  clearInterval(HERO.t);
  if(v === "film"){ heroNext(true); HERO.t = setInterval(function(){ heroNext(false); }, 9000); }
  else { bar.style.height = ""; bar.style.transform = ""; bar.style.removeProperty("--t"); }
  hdScroll();
}

/* Menü (Burger) */
function openMenu(on){
  var P = document.getElementById("mmP");
  P.innerHTML = '<h3>Broken Compass</h3><button onclick="openMenu(false);location.hash=\'#bogen\'">Abenteurerbogen ausfüllen</button>' + SYS.groups.map(function(g){ return g.items.map(function(b){ return '<button onclick="openMenu(false);openBook(\'' + b.id + '\',1)">' + esc(b.name) + '</button>'; }).join(""); }).join("");
  P.classList.toggle("on", !!on); document.getElementById("mmB").classList.toggle("on", !!on);
}
document.addEventListener("keydown", function(e){
  if(e.key === "Escape") openMenu(false);
  var t = e.target, tg = t && t.tagName; if(tg === "INPUT" || tg === "TEXTAREA" || tg === "SELECT" || (t && t.isContentEditable) || e.altKey || e.metaKey) return;
  if(document.querySelector(".gs,#mmP.on,.bvx:not([hidden])")) return;
  var inh = document.body.classList.contains("inh");
  if(e.key === "Escape" && inh && !document.querySelector(".tm-dd")){ location.hash = "#start"; return; }
  if(e.key === "h" || e.key === "H"){ document.body.classList.toggle("kopfzu"); return; }
  if(!inh) return;
  var k = e.key;
  if(k === "ArrowLeft" || k === "ArrowRight"){
    var L = [].slice.call(document.querySelectorAll(e.ctrlKey ? "#tabs a" : ".sub2 a")), i = L.findIndex(function(a){ return a.classList.contains("on"); });
    if(L.length && i >= 0){ e.preventDefault(); var n = L[i + (k === "ArrowRight" ? 1 : -1)]; if(n) location.hash = n.getAttribute("href"); }
  } else if(k === "ArrowUp" || k === "ArrowDown"){
    var S = [].slice.call(document.querySelectorAll(".side a")), j = S.findIndex(function(a){ return a.classList.contains("on"); });
    if(S.length){ e.preventDefault(); var m = S[Math.max(0, Math.min(S.length - 1, j + (k === "ArrowDown" ? 1 : -1)))]; if(m) m.click(); }
  }
});

/* Buch-Knopf: Auswahl aller Bücher */
window.gmBook = function(){
  var all = []; SYS.groups.forEach(function(g){ g.items.forEach(function(b){ all.push({name: b.name, sub: g.grp, open: function(){ openBook(b.id, 1); }}); }); });
  return {name: "Adventure Journal", open: function(){ openBook("bc_aj", 1); }, books: all};
};

/* Router: #start (Standard) · #a/<bereich>[/<unterpunkt>] */
function route(){
  var h = location.hash.replace(/^#/, "").split("/");
  if(h[0] === "a" && h[1] && INH.render(h[1], h[2])) return;
  if(h[0] === "e" && h[1]){ EPI.render(h[1]); return; }
  if(h[0] === "bogen"){ BOGEN.render(); return; }
  renderStart();
}
function render(){ route(); }
window.addEventListener("hashchange", route);
