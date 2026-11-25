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
  var anker = null;
  if(seiten.length){ sel = seiten[0][0]; seiten.forEach(function(x){ if(x[0] === rest[0]) sel = x[0]; else if(x[2] && x[2].indexOf(rest[0]) > -1){ sel = x[0]; anker = rest[0]; } }); }
  return {m: "seite", mode: mode, pre: g ? "g/" : "", area: area, unter: unter, sw: sw, sel: sel, anker: anker};
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
  var fn = HH_INH[key], tx = HH_TEXT[key];
  if(!fn && tx) fn = function(P){ return textSeite(P, tx, "hh_r1"); };
  if(u.seiten && u.seiten.length > 1){
    side = u.seiten.map(function(x){
      var a = '<a class="' + (x[0] === P.sel ? 'on' : '') + '" onclick="go(\'' + href(P, P.area.id, u.id, P.sw, x[0]) + '\')">' + esc(x[1]) + '</a>';
      if(x[0] !== P.sel || !x[2] || !tx) return a;
      return a + '<div class="subs">' + x[2].map(function(id){ var e = tx.filter(function(t){ return t.id === id; })[0]; return e ? '<a onclick="zuAbschnitt(\'' + id + '\')">' + esc(e.t) + '</a>' : ''; }).join("") + '</div>';
    }).join("");
  }
  if(fn) body = fn(P);
  else {
    var cur = (u.seiten || []).filter(function(x){ return x[0] === P.sel; })[0];
    body = '<div class="sec"><h1>' + esc(u.t) + '</h1></div>' + platzhalter(cur ? cur[1] : u.t);
  }
  return lay(side, body);
}
function zuAbschnitt(id, sofort){ var el = document.getElementById("ab-" + id); if(el) el.scrollIntoView({behavior: sofort ? "auto" : "smooth", block: "start"}); }
function IMGP(n, t){ return "img/" + n.split("-")[0] + "/" + (t ? "thumb" : "full") + "/" + n + ".webp"; }
var STOCK = [
 {id:"s1", bild:"grundbuch-s258-259-ix-upper-floor", etage:"Obergeschoss", t:"Free Dominions", k:"Sprites · Bedroom, Bathlantis", em:"guide-s096-iii-free-dominions-einleitung", go:"welt/alltag/dominions"},
 {id:"s2a", bild:"grundbuch-s230-231-ix-dining-hall", etage:"Erdgeschoss", t:"Realm", k:"Faeries · Dining Hall", em:"guide-s010-i-realm-einleitung", go:"welt/alltag/realm"},
 {id:"s2b", bild:"grundbuch-s244-245-ix-living-room", t:"Hearth", k:"Boggarts · Living Room", em:"guide-s054-ii-hearth-einleitung", go:"welt/alltag/hearth"},
 {id:"s3", bild:"grundbuch-s262-ix-basement", etage:"Keller", t:"Horde", k:"Sluagh · Basement", em:"guide-s140-iiii-horde-einleitung", go:"welt/alltag/horde"}
];
function stk(s){ return '<div class="st" style="background-image:url(' + IMGP(s.bild) + ')" onclick="go(\'' + s.go + '\')">' + (s.etage ? '<span class="etage">' + s.etage + '</span>' : '') +
  '<div class="lab"><img src="' + IMGP(s.em, 1) + '" alt=""><div><b>' + s.t + '</b><i>' + s.k + '</i></div></div></div>'; }
var BAND = {welt: "tapete-s19-273", regeln: "tapete-s84-1391", sl: "tapete-s31-493"};
function viewStart(mode){
  if(mode === "garten"){
    var gc = HH_NAV.garten.map(function(a){ return '<a class="bereich" onclick="go(\'g/' + a.id + '\')"><h2>' + esc(a.t) + '</h2><p>' + a.unter.map(function(u){ return esc(u.t); }).join(" · ") + '</p></a>'; }).join("");
    return '<div class="hero"></div><div class="sw-start"><div class="bereiche nomas">' + gc + '</div></div>';
  }
  var bk = HH_NAV.haus.map(function(a){
    return '<div class="bk"><div class="band" style="background-image:url(img/deko/' + BAND[a.id] + '.jpg)"></div><div class="schild"><h2>' + esc(a.t) + '</h2></div><ul>' +
      a.unter.map(function(u){ return '<li onclick="go(\'' + a.id + '/' + u.id + '\')">' + esc(u.t) + '</li>'; }).join("") + '</ul></div>';
  }).join("");
  var sg = Object.keys(HH_SAGAS).map(function(k, i){
    var S = HH_SAGAS[k], chips = S.unter.filter(function(u){ return u[0] !== "zeit"; }).map(function(u){ return '<span onclick="event.stopPropagation();go(\'' + k + '/' + u[0] + '\')">' + esc(u[1].replace("Kapitel ", "")) + '</span>'; }).join("");
    return '<div class="sg' + (i === 0 ? ' auf' : '') + '" style="background-image:url(' + IMGP(k === "fp" ? "fp-s-01-umschlag-vorspann-b" : "lw-s-01-umschlag-vorspann") + ');background-position:center ' + (k === "fp" ? "30%" : "center") + '" onclick="go(\'' + k + '\')" onmouseenter="sagaAuf(this)"><div class="t"><b>' + esc(S.t) + '</b><i>' + (k === "fp" ? "Kapitel I–V · 24 Figuren" : "Kapitel VI–VII · 30 Figuren") + '</i><div class="ks">' + chips + '</div></div></div>';
  }).join("");
  return '<div class="hero2" style="background-image:url(' + IMGP("grundbuch-s212-213-ix-wheel-of-the-year") + ')"><img class="lg" src="' + IMGP("grundbuch-s-01-umschlag-vorspann-c") + '" alt="Household"></div>' +
    '<div class="sek"><h2 class="zt">Das Haus</h2><div class="haus nomas"><div class="stw" id="w1">' + stk(STOCK[0]) + '</div><div class="stw halb" id="w2">' + stk(STOCK[1]) + stk(STOCK[2]) + '</div><div class="stw" id="w3">' + stk(STOCK[3]) + '</div>' +
    '<div class="gt" style="background-image:url(' + IMGP("garten-s-01-umschlag-vorspann") + ')" onclick="go(\'g\')"><div class="lab"><div><b>Der Garten</b><i>The Outhold · Vol. II</i></div></div></div></div></div>' +
    '<div class="sek"><div class="ber nomas">' + bk + '</div></div><div class="sek" style="padding-bottom:50px"><h2 class="zt">Sagas</h2><div class="sagas">' + sg + '</div></div>';
}
function sagaAuf(el){ document.querySelectorAll(".sg").forEach(function(x){ x.classList.toggle("auf", x === el); }); }
/* Saga-Startseite: Hero, Einleitung, Fakten, Wege, Empfehlung, Saga-Plan */
var NC = {common: "#7b4f9c", realm: "#3f7a3a", hearth: "#2b4f8e", dominions: "#b8262f", horde: "#a8601f"};
var SZ = {"Winter": "#6f93b5", "Frühling": "#6f9a4a", "Sommer": "#c9a13a", "Herbst": "#a85a2a"};
var KAP = {"Kapitel I": "k1", "Kapitel II": "k2", "Kapitel III": "k3", "Kapitel IIII": "k4", "Kapitel V": "k5", "Kapitel VI": "k6", "Kapitel VII": "k7", "Epilog": "epilog"};
function sagaStart(k){
  var S = HH_SAGASTART[k], D = HH_SAGADATEN[k];
  var h = '<div class="ss" style="--sc:' + S.sc + '"><div class="hero" style="background-image:url(' + IMGP(S.bild) + ');background-position:' + S.pos + '"><div class="t"><h1>' + esc(S.ti) + '</h1><div>' + esc(S.ut) + '</div></div></div><div class="wrapS"><div class="oben"><div>';
  h += '<div class="intro">' + S.intro.map(function(p){ return "<p>" + esc(p) + "</p>"; }).join("") + '</div><h2 class="ab" style="margin-top:18px">Wege in die Saga</h2><div class="wege">' + S.wege.map(function(w){ return '<div class="weg"><b>' + esc(w[0]) + '</b>' + esc(w[1]) + '</div>'; }).join("") + '</div>';
  h += '<div class="zus">' + S.zus.map(function(z){ return '<div><b>' + esc(z[0]) + '</b>' + (z[1].indexOf("<u>") >= 0 ? z[1] : esc(z[1])) + '</div>'; }).join("") + '</div></div><div>';
  h += '<div class="fakten">' + S.fakten.map(function(f){ return '<div><b>' + esc(f[0]) + '</b><span>' + esc(f[1]) + '</span></div>'; }).join("") + '</div>';
  h += '<div class="tipp" style="margin-top:16px"><b>' + esc(S.tipp[0]) + '</b>' + esc(S.tipp[1]) + '<div class="pp">' + S.tipp[2].map(function(n){ return '<span><img src="' + IMGP(D.P[n], 1) + '" alt="">' + esc(n) + '</span>'; }).join("") + '</div></div></div></div>';
  h += '<h2 class="ab">Saga-Plan</h2><div class="plan">' + D.plan.map(function(p, pi){
    var szn = Object.keys(SZ).filter(function(z){ return p[0].indexOf(z) >= 0; })[0], kap = KAP[p[0].split(" · ")[0]];
    return '<div class="par"><div class="lb" style="' + (szn ? 'box-shadow:inset 4px 0 0 ' + SZ[szn] + ';padding-left:12px' : '') + '"><b>' + esc(p[0]).replace(" · ", "<br>") + '</b><i>' + esc(p[1]) + '</i>' + (pi === 0 ? '<br><em>ausgearbeitet</em>' : '') + '</div><div class="reihe6">' +
      p[2].map(function(a){ return '<a class="abt" onclick="go(\'' + k + '/' + kap + '\')" style="' + (a[2] ? 'border-bottom-color:' + NC[a[2]] : '') + '">' + (a[1].length ? '<div class="q">' + a[1].map(function(f){ return '<img src="' + IMGP(f, 1) + '" alt="">'; }).join("") + '</div>' : '') + '<span>' + esc(a[0]) + '</span></a>'; }).join("") + '</div></div>'; }).join("") + '</div>';
  h += '<div class="leg">' + S.leg.map(function(l){ return '<span><i style="background:' + (NC[l[0]] || l[1]) + '"></i>' + esc(l[1] && l[1][0] !== "#" ? l[1] : l[0]) + '</span>'; }).join("") + '</div></div></div>';
  return h;
}

function viewSaga(P){
  var S = HH_SAGAS[P.s], sub = "";
  S.unter.forEach(function(u){ if(u[0] === P.sub) sub = u[0]; });
  var bar = '<div class="sl" style="background:' + S.farbe + '"><a class="nm' + (sub ? '' : ' on') + '" onclick="go(\'' + P.s + '\')">' + esc(S.t) + '</a>' +
    S.unter.map(function(u){ return '<a class="' + (u[0] === sub ? 'on' : '') + '" onclick="go(\'' + P.s + '/' + u[0] + '\')">' + esc(u[1]) + '</a>'; }).join("") + '</div>';
  var name = sub ? S.unter.filter(function(u){ return u[0] === sub; })[0][1] : S.t;
  var tx = HH_TEXT[P.s + "/" + sub], book = P.s === "fp" ? "hh_a2" : "hh_a1";
  if(!sub) return {bar: bar, body: sagaStart(P.s)};
  if(tx && P.rest && P.rest[0]){ var one = tx.filter(function(e){ return e.id === P.rest[0]; }); if(one.length) tx = one; }
  else if(tx && tx[0].id === "uebersicht") tx = [tx[0]];
  if(tx) return {bar: bar, body: lay("", (tx.length > 1 ? '<div class="sec"><h1>' + esc(name) + '</h1></div>' : '') + tx.map(function(e){ return '<div class="sec txt" id="ab-' + e.id + '"><h2>' + esc(e.t) + (e.p ? pgl(book, e.p) : "") + '</h2>' + blk(e.b, book) + '<div style="clear:both"></div></div>'; }).join(""))};
  return {bar: bar, body: lay("", '<div class="sec"><h1>' + esc(name) + '</h1></div>' + platzhalter(name))};
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
  else if(P.area && P.area.id === "sl" && P.unter && /^(mysterien|optionen|figuren)$/.test(P.unter.id)) { id = "hh_r2"; name = "A Practical Guide"; }
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
