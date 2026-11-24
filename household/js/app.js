/* HOUSEHOLD – Spielleiter-Tafel. Hash-Routing:
   #start · #<reiter>[/<unter>[/<umschalter>][/<eintrag>]] · #g[/…] (Der Garten) · #fp|#lw[/<bereich>] (Sagas)
   Umschalter (sw) nur bei Seiten mit Umschalter in der Unterleiste (z. B. Das Haus: Erdgeschoss/Obergeschoss/Keller). */
"use strict";
var APP = document.getElementById("app");
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
var ST = {};
try{ ST = JSON.parse(localStorage.getItem("hh_state_v1") || "{}") || {}; }catch(e){ ST = {}; }
function save(){ try{ localStorage.setItem("hh_state_v1", JSON.stringify(ST)); }catch(e){} }
var NAVN = 0;
function go(h){ if(location.hash === "#" + h) render(); else location.hash = h; }
window.addEventListener("hashchange", function(){ NAVN++; render(); });
function openBook(id, p){ try{ BV.open(id || "hh_r1", p || 1); }catch(e){} }
function pgl(book, p){ return '<span class="pg" onclick="event.stopPropagation();openBook(\'' + book + '\',' + p + ')">S. ' + p + '</span>'; }
/* Inhalte: window.HH_INH["<modus>/<reiter>/<unter>"] = function(ctx) → HTML; bis sie gebaut sind, steht ein Platzhalter */
window.HH_INH = window.HH_INH || {};

/* ---------- Adresse lesen ---------- */
function parse(){
  var h = (location.hash || "#start").slice(1).split("/").map(decodeURIComponent);
  if(h[0] === "fp" || h[0] === "lw") return {m: "saga", s: h[0], sub: h[1] || "", rest: h.slice(2)};
  var g = h[0] === "g"; if(g) h = h.slice(1);
  var mode = g ? "garten" : "haus", NAV = HH_NAV[mode], area = null;
  NAV.forEach(function(a){ if(a.id === h[0]) area = a; });
  if(!area) return {m: g ? "gstart" : "start", mode: mode};
  var unter = area.unter[0]; area.unter.forEach(function(u){ if(u.id === h[1]) unter = u; });
  var rest = h[1] === unter.id ? h.slice(2) : [], sw = null, sel = null;
  if(unter.sw){ sw = unter.sw[0][0]; unter.sw.forEach(function(x){ if(x[0] === rest[0]) sw = x[0]; }); rest = rest[0] === sw ? rest.slice(1) : rest; }
  var seiten = unter.seiten || [];
  if(seiten.length){ sel = seiten[0][0]; seiten.forEach(function(x){ if(x[0] === rest[0]) sel = x[0]; }); }
  return {m: "seite", mode: mode, pre: g ? "g/" : "", area: area, unter: unter, sw: sw, sel: sel};
}
function href(P, a, u, sw, sel){ return P.pre + a + (u ? "/" + u + (sw ? "/" + sw : "") + (sel ? "/" + sel : "") : ""); }

/* ---------- Bausteine ---------- */
function kopfTabs(P, mode){
  var pre = mode === "garten" ? "g/" : "";
  return HH_NAV[mode].map(function(a){ return '<a class="' + (P.area && P.area.id === a.id ? 'on' : '') + '" onclick="go(\'' + pre + a.id + '\')">' + esc(a.t) + '</a>'; }).join("");
}
function unterleiste(P){
  var a = P.area, out = '<div class="unter">';
  a.unter.forEach(function(u){ out += '<a class="' + (u === P.unter ? 'on' : '') + '" onclick="go(\'' + P.pre + a.id + '/' + u.id + '\')">' + esc(u.t) + '</a>'; });
  if(P.unter.sw){ out += '<div class="sw">' + P.unter.sw.map(function(x){ return '<a class="' + (x[0] === P.sw ? 'on' : '') + '" onclick="go(\'' + P.pre + a.id + '/' + P.unter.id + '/' + x[0] + '\')">' + esc(x[1]) + '</a>'; }).join("") + '</div>'; }
  return out + '</div>';
}
function lay(side, body){
  if(!side) return '<div class="lay solo"><div class="ct">' + body + '</div></div>';
  if(ST.fold) return '<div class="lay fold-on"><button class="fold fx" onclick="foldSide()" title="Leiste ausklappen">›</button><div class="ct">' + body + '</div></div>';
  return '<div class="lay"><div class="sidecol"><nav class="side">' + side + '</nav><button class="fold" onclick="foldSide()" title="Leiste einklappen">‹</button></div><div class="ct">' + body + '</div></div>';
}
function foldSide(){ ST.fold = !ST.fold; save(); render(); }
function platzhalter(titel){ return '<div class="sec"><h2>' + esc(titel) + '</h2><p class="leer">Inhalt folgt.</p></div>'; }

/* ---------- Seiten ---------- */
function viewSeite(P){
  var u = P.unter, key = P.mode + "/" + P.area.id + "/" + u.id + (P.sw ? "/" + P.sw : ""), side = "", body;
  var fn = HH_INH[key];
  if(u.seiten && u.seiten.length > 1){
    side = u.seiten.map(function(x){ return '<a class="' + (x[0] === P.sel ? 'on' : '') + '" onclick="go(\'' + href(P, P.area.id, u.id, P.sw, x[0]) + '\')">' + esc(x[1]) + '</a>'; }).join("");
  }
  if(fn) body = fn(P);
  else {
    var cur = (u.seiten || []).filter(function(x){ return x[0] === P.sel; })[0];
    body = '<div class="sec"><h1>' + esc(u.t) + '</h1></div>' + platzhalter(cur ? cur[1] : u.t);
  }
  return lay(side, body);
}
function viewStart(mode){
  var g = mode === "garten", pre = g ? "g/" : "";
  var cards = HH_NAV[mode].map(function(a){ return '<a class="bereich" onclick="go(\'' + pre + a.id + '\')"><h2>' + esc(a.t) + '</h2><p>' + a.unter.map(function(u){ return esc(u.t); }).join(" · ") + '</p></a>'; }).join("");
  var ab = g ? "" : '<div class="ab-reihe">' + Object.keys(HH_SAGAS).map(function(k){ var S = HH_SAGAS[k]; return '<a style="background:' + S.farbe + '" onclick="go(\'' + k + '\')">' + esc(S.t) + '</a>'; }).join("") + '<a style="background:#26391f" onclick="go(\'g\')">Der Garten<small>Household Vol. II</small></a></div>';
  return '<div class="hero"></div><div class="sw-start"><div class="bereiche">' + cards + '</div>' + ab + '</div>';
}
function viewSaga(P){
  var S = HH_SAGAS[P.s], sub = "";
  S.unter.forEach(function(u){ if(u[0] === P.sub) sub = u[0]; });
  var bar = '<div class="sl" style="background:' + S.farbe + '"><a class="nm' + (sub ? '' : ' on') + '" onclick="go(\'' + P.s + '\')">' + esc(S.t) + '</a>' +
    S.unter.map(function(u){ return '<a class="' + (u[0] === sub ? 'on' : '') + '" onclick="go(\'' + P.s + '/' + u[0] + '\')">' + esc(u[1]) + '</a>'; }).join("") + '</div>';
  var name = sub ? S.unter.filter(function(u){ return u[0] === sub; })[0][1] : S.t;
  return {bar: bar, body: lay("", '<div class="sec"><h1>' + esc(name) + '</h1></div>' + platzhalter(sub ? name : "Startseite"))};
}

/* ---------- Rendern ---------- */
function render(){
  var P = parse(), tabs = "", bar = "", out = "", mode = P.mode || "haus";
  document.body.classList.toggle("garten", mode === "garten" || (P.m === "gstart"));
  document.body.classList.toggle("saga", P.m === "saga");
  document.body.classList.toggle("start", P.m === "start" || P.m === "gstart");
  if(P.m === "start") out = viewStart("haus");
  else if(P.m === "gstart"){ tabs = kopfTabs(P, "garten"); out = viewStart("garten"); }
  else if(P.m === "seite"){ tabs = kopfTabs(P, P.mode); bar = unterleiste(P); out = viewSeite(P); }
  else if(P.m === "saga"){ tabs = kopfTabs(P, "haus"); var V = viewSaga(P); bar = V.bar; out = V.body; }
  var kt = document.getElementById("ktabs"); if(kt) kt.innerHTML = tabs;
  var same = window.__lh === location.hash, y = scrollY; window.__lh = location.hash;
  APP.innerHTML = bar + out; scrollTo(0, same ? y : 0);
  document.title = "Household";
}
/* Buch-Knopf: das Buch zum aktuellen Bereich */
window.gmBook = function(){
  var P = parse(), id = "hh_r1", name = "Household Grundbuch";
  if(P.mode === "garten" || P.m === "gstart"){ id = "hh_g2"; name = "Household Vol. II – Der Garten"; }
  else if(P.m === "saga"){ id = P.s === "fp" ? "hh_a2" : "hh_a1"; name = HH_SAGAS[P.s].t; }
  else if(P.area && P.area.id === "welt" && P.unter && /^(voelker|alltag|atlas)$/.test(P.unter.id)) { id = "hh_r2"; name = "A Practical Guide"; }
  return {name: name, open: function(){ BV.open(id, 1); }};
};
/* Karte (Taste „m“): Haus → Hausplan, Garten → Karte des Gartens */
function karte(){ var P = parse(); go(P.mode === "garten" || P.m === "gstart" ? "g/welt/garten/karte" : "welt/haus/erdgeschoss"); }
function modal(html){ var m = document.createElement("div"); m.className = "modal"; m.innerHTML = '<div>' + html + '</div>'; m.onclick = function(e){ if(e.target === m) m.remove(); }; document.body.appendChild(m); return m; }
function buildMenu(){
  var h = '<h3>Werkzeuge</h3><button onclick="openMenu(false);sucheOpen()">Suche</button><button onclick="openMenu(false);karte()">Karte</button><h3>Bücher</h3>';
  SYS.groups.forEach(function(g){ g.items.forEach(function(b){ h += '<button onclick="openMenu(false);openBook(\'' + b.id + '\',1)">' + esc(b.name) + '</button>'; }); });
  h += '<button onclick="openMenu(false);modal(BV.settingsHTML())">PDF hochladen …</button>';
  document.getElementById("mmP").innerHTML = h;
}
function openMenu(on){ if(on) buildMenu(); document.getElementById("mmB").classList.toggle("on", on); document.getElementById("mmP").classList.toggle("on", on); }
document.addEventListener("keydown", function(e){
  if(/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "") || (e.target && e.target.isContentEditable) || e.ctrlKey || e.metaKey || e.altKey) return;
  if(e.key === "Escape"){
    if(document.querySelector(".modal,.mm-panel.on")){ openMenu(false); document.querySelectorAll(".modal").forEach(function(m){ m.remove(); }); return; }
    if(NAVN > 0){ NAVN--; history.back(); }
  }
  else if(e.key === "h") document.body.classList.toggle("notop");
  else if(e.key === "m") karte();
  else if(e.key === "b") foldSide();
});
