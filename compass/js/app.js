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
    return '<a class="sl" style="--c:' + a.c + ';--bgi:url(' + IMG + a.img + '.webp);--bp:' + a.pos + ';--bpx:' + String(a.pos).split(" ")[0] + '" href="#a/' + a.id + '">' +
      '<div class="tx"><small>Abschnitt ' + (i + 1) + '</small><b>' + esc(a.t) + '</b><ul>' + a.sub.map(function(x){ return '<li>' + esc(x) + '</li>'; }).join("") + '</ul></div><div class="bar"></div></a>';
  }).join("");
  return '<section class="fan-wrap"><div class="fan">' + fan + '</div></section>' + guide();
}
/* Episodenführer: je Staffel Cover, Kapitel-Links und alle Folgen mit Szenenzahl, Ort und Rivale */
function guide(){
  var F = window.BC_FOLGEN || {}, W = window.BC_WEISS || {};
  var kurz = function(v){ return window.EPI ? EPI.kurz(v) : v; };
  var blocks = [{id: "aj", lab: "Adventure Journal", t: "Pilot", story: "Der Einstieg ins Abenteuer", cover: "cover-aj", c: "#1d2c4d", b: "bc_aj",
    links: [{t: "Schatzsuche", h: "#a/schatzsuche"}],
    eps: [{id: "pilot", nr: "Pilot", s: 214, img: "aj/pilot-titel"}, {id: "quetzalcoatl", nr: "Fertiger Kontext", s: 228, img: "start/pilot-quetzalcoatl"}, {id: "bogen-fertig", nr: "Zum Losspielen", s: 230, img: "aj/pilot-titel"}]}];
  BC_STAFFELN.forEach(function(st){
    var Z = window.BC_BUCH && BC_BUCH[st.id];
    blocks.push({id: st.id, lab: st.lab, t: st.t, story: st.story, cover: st.cover, c: st.c, b: st.b,
      links: ((Z && Z.areas) || []).map(function(a){ return {t: a.t, h: "#a/" + a.id}; }),
      eps: st.eps.map(function(e, i){ return {id: st.id + (i + 1), nr: "Folge " + (i + 1), s: e[1], img: "start/" + e[2], alt: e[0]}; })});
  });
  return '<section class="eguide"><div class="sh2">Staffeln und Folgen</div>' + blocks.map(function(B){
    var sz = 0; B.eps.forEach(function(e){ sz += (F[e.id] && F[e.id].n) || 0; });
    var cards = B.eps.map(function(e){
      var f = F[e.id] || {}, t = f.t || e.alt || e.id, meta = [];
      if(f.n) meta.push(f.n + " Szenen");
      var o = kurz(f.ort); if(o) meta.push(o);
      var r = kurz(f.riv); if(r) meta.push("Rivale: " + r);
      var alt = e.alt && e.alt !== t && /^lt/.test(e.id) ? '<em>Kontext: ' + esc(e.alt) + '</em>' : "";
      return '<a class="egf" onclick="epGo(\'' + e.id + '\',\'' + B.b + '\',' + e.s + ')"><div class="th' + (W[e.id] ? " w" : "") + '" style="background-image:url(img/' + e.img + '.webp)"></div>' +
        '<div class="tx"><small>' + esc(e.nr) + '</small><b>' + esc(t) + '</b>' + alt + (meta.length ? '<span>' + meta.map(esc).join(" · ") + '</span>' : "") + '</div></a>';
    }).join("");
    return '<div class="egs ' + B.id + '" style="--c:' + B.c + '"><a class="cv ' + B.id + '" onclick="' + (B.links[0] ? "location.hash=\'" + B.links[0].h + "\'" : "openBook(\'" + B.b + "\',1)") + '"><img src="' + IMG + B.cover + '.webp" alt=""></a>' +
      '<div class="bd"><header><div><small>' + esc(B.lab) + '</small><h3>' + esc(B.t) + '</h3><i>' + esc(B.story) + '</i></div>' +
      '<div class="mt"><span>' + B.eps.length + ' Folgen' + (sz ? " · " + sz + " Szenen" : "") + '</span>' + (B.links.length ? '<nav>' + B.links.map(function(l){ return '<a href="' + l.h + '">' + esc(l.t) + '</a>'; }).join("") + '</nav>' : "") + '</div></header>' +
      '<div class="egl">' + cards + '</div></div></div>';
  }).join("") + '</section>';
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
/* Zurück (Android-Taste, Wischgeste, Esc): erst offene Fenster schließen, dann eine Seite zurück */
var NAV = 0, LAYER = false, IGN = 0;
try{ history.replaceState({i: 0}, ""); }catch(e){}
function ovOffen(){ return !!document.querySelector(".gs,.gi-ov,.gal,#mmP.on,.tm-dd"); }
function ovZu(){ document.dispatchEvent(new KeyboardEvent("keydown", {key: "Escape", bubbles: true})); openMenu(false); document.body.click(); }
function ovCheck(){
  var o = ovOffen();
  if(o && !LAYER){ try{ history.pushState({cl: 1, i: NAV}, ""); LAYER = true; }catch(e){} }
  else if(!o && LAYER){ LAYER = false; if(history.state && history.state.cl){ IGN++; history.back(); } }
}
new MutationObserver(function(){ requestAnimationFrame(ovCheck); }).observe(document.documentElement, {subtree: true, childList: true, attributes: true, attributeFilter: ["class"]});
window.addEventListener("popstate", function(){
  if(IGN > 0){ IGN--; return; }
  if(LAYER){ LAYER = false; ovZu(); }
});
window.addEventListener("hashchange", function(){
  var s = history.state;
  if(s && s.i != null) NAV = s.i;
  else { NAV++; try{ history.replaceState({i: NAV}, ""); }catch(e){} }
});
document.addEventListener("keydown", function(e){
  if(e.key === "Escape") openMenu(false);
  var t = e.target, tg = t && t.tagName; if(tg === "INPUT" || tg === "TEXTAREA" || tg === "SELECT" || (t && t.isContentEditable) || e.altKey || e.metaKey) return;
  if(document.querySelector(".gs,#mmP.on,.bvx:not([hidden])")) return;
  var inh = document.body.classList.contains("inh");
  if(e.key === "Escape" && inh && !document.querySelector(".tm-dd,.gi-ov,.gal")){ if(NAV > 0) history.back(); else location.hash = "#start"; return; }
  if(e.key === "h" || e.key === "H"){ document.body.classList.toggle("kopfzu"); return; }
  if(!inh) return;
  var k = e.key;
  if(k === "ArrowLeft" || k === "ArrowRight"){
    var L = [].slice.call(document.querySelectorAll(e.ctrlKey ? "#tabs a" : ".sub2 a")), i = L.findIndex(function(a){ return a.classList.contains("on"); });
    if(L.length && i >= 0){ e.preventDefault(); var n = L[i + (k === "ArrowRight" ? 1 : -1)]; if(n) location.hash = n.getAttribute("href"); }
  } else if(k === "ArrowUp" || k === "ArrowDown"){
    var S = [].slice.call(document.querySelectorAll(".side a:not(.u)")), j = S.findIndex(function(a){ return a.classList.contains("on"); });
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
