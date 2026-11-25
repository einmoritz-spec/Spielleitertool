/* SLUGBLASTER – Spielleiter-Tafel. Hash-Routing:
   #start · #folge · #crew · #welten · #heimat · #monster · #fraktionen · #nach/<bereich> · #schirm · #galerie · #oolroob */
"use strict";
var APP = document.getElementById("app");
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
/* einfaches Markup im Datentext: **fett**, *kursiv* */
function md(s){ return esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\*(.+?)\*/g, "<i>$1</i>").replace(/\n/g, "<br>"); }
function IMG(p){ return "img/" + p + ".webp"; }
var ST = {};
function load(){ try{ ST = JSON.parse(localStorage.getItem("sb_state_v1") || "{}") || {}; }catch(e){ ST = {}; } }
function save(){ try{ localStorage.setItem("sb_state_v1", JSON.stringify(ST)); }catch(e){} }
load();
function go(h){ if(location.hash === "#" + h) render(); else location.hash = h; }
function openBook(id, p){ try{ window.SB_BOOK = id || "sb_core"; BV.open(id || "sb_core", p || 1); }catch(e){} }
/* Seitenlink „S. 12“ – unscheinbar direkt hinter dem Namen */
function pgl(p, txt, book){ var n = parseInt(String(p || "").replace(/\D/g, ""), 10); return n ? '<span class="pg" onclick="event.stopPropagation();openBook(\'' + (book || "sb_core") + '\',' + n + ')">' + (txt || "S. " + n) + '</span>' : ""; }
window.addEventListener("hashchange", function(){ render(); });

function zoom(src){ var d = document.createElement("div"); d.className = "gzoom"; d.onclick = function(){ d.remove(); }; d.innerHTML = '<img src="' + src + '" alt="">'; document.body.appendChild(d); }
function modal(html, c){
  var m = document.createElement("div"); m.className = "modal";
  m.innerHTML = '<div' + (c ? ' style="--c:' + c + '"' : '') + '>' + html + '</div>';
  m.onclick = function(e){ if(e.target === m) m.remove(); };
  document.body.appendChild(m); return m;
}
function kurz(t){ return String(t).split(":")[0]; }

/* ---------- Startseite ---------- */
var VIEWS = {};
function chipsHtml(L){ var h = L.filter(function(c){ return VIEWS[c[0]]; }).map(function(c){ return '<span class="chip" onclick="go(\'' + c[2] + '\')">' + c[1] + '</span>'; }).join(""); return h ? '<div class="chips">' + h + '</div>' : ""; }
/* Abenteuer-Leiste der Startseite: jedes weitere Abenteuer = ein Eintrag in SB_ABL (id, Titel, Zeile, Dauer, Route) */
function abHtml(){
  var L = (window.SB_AB && VIEWS.abenteuer) ? [{t: SB_AB.t, z: SB_AB.zeile, d: SB_AB.dauer, go: "abenteuer"}] : [];
  if(!L.length) return "";
  return '<section class="sx-ab"><div class="sx-cap">Abenteuer</div><div class="sx-abl">' + L.map(function(a){
    return '<a class="sx-abc" onclick="go(\'' + a.go + '\')"><span class="n">' + esc(a.t) + '</span><span class="z">' + esc(a.z) + '</span><span class="d">' + esc(a.d) + '</span><i>→</i></a>';
  }).join("") + '</div></section>';
}
/* Startseite: Zine-Cover oben, darunter die Bereiche der Kopfzeile als Bild-Kacheln – nur Titel, keine Listen */
function viewStart(){
  var f = ST.folge || {}, t = ST.tour || {}, w = t.welt && window.sbWelt ? sbWelt(t.welt) : null;
  function kachel(cls, go_, kick, titel, inner){
    return '<a class="sbs-k ' + cls + '" onclick="go(\'' + go_ + '\')">' + inner + '<span class="sbs-lab"><small>' + kick + '</small><b>' + titel + '</b></span></a>';
  }
  function bild(src, c){ return '<img class="' + (c || "") + '" src="' + src + '" alt="" loading="lazy">'; }
  var pers = '<div class="sbs-pers">' + SB_PERS.map(function(p){ return '<span style="--pc:' + p.farbe + '" onclick="event.stopPropagation();go(\'nach/teenager/pers/' + p.id + '\')"><img src="' + IMG("pers/" + p.id) + '" alt="" loading="lazy"><b>' + esc(p.t.replace(/^The /, "")) + '</b></span>'; }).join("") + '</div>';
  return '<div class="sbs">' +
    '<section class="sbs-hero"><div class="sbs-l"><h1>Das ist <span>Slug</span>blaster</h1>' +
      '<p>Teenager, Riesenkäfer, Hoverboards mit Schaltkreisen – und der Versuch, cool zu sein.</p>' +
      '<button class="sbs-go" onclick="go(\'folge\')"><b>Losblasten!</b><small>' + (f.n ? "Folge " + f.n + (w ? " · " + esc(w.t) : "") : "Erste Folge") + '</small></button></div>' +
      '<img class="sbs-cover" src="' + IMG("start/cover") + '" alt=""></section>' +
    '<section class="sbs-g">' +
      kachel("k-regeln", "nach/regeln", "Kapitel 1", "Regeln", bild(IMG("start/kap1"))) +
      kachel("k-teen", "nach/teenager", "Kapitel 2", "Teenager", pers) +
      kachel("k-multi", "welten", "Kapitel 3", "Multiversum", bild(IMG("start/kap3"))) +
      kachel("k-hill", "heimat", "Eure Welt", "Hillview", bild("img/heimat/hillview-karte.jpg")) +
      kachel("k-mon", "monster", "Kapitel 3", "Monster", bild("img/galerie/full/buch-s121-1261.webp", "frei")) +
      kachel("k-frak", "fraktionen", "Kapitel 3", "Fraktionen", bild("img/galerie/full/buch-s138-1554.webp", "frei")) +
      kachel("k-sl", "folge", "Kapitel 4", "Spielleitung", bild(IMG("start/kap4"))) +
      (window.SB_AB && VIEWS.abenteuer ? kachel("k-ab", "abenteuer", "Abenteuer", esc(SB_AB.t), bild("img/galerie/full/buch-s128-1351.webp", "frei")) : "") +
      (VIEWS.oolroob ? kachel("k-oo", "oolroob", "Erweiterung", "Oolroob", bild(IMG("oolroob/cover"))) : "") +
    '</section></div>';
}

/* ---------- Navigation: Kopfzeile (Bereiche) · Unterleiste (Unterpunkte) ---------- */
/* Jeder Bereich hat seine Kapitelfarbe; der aktive Reiter geht nahtlos in die Unterleiste über */
var SB_BER = [
  {id:"regeln", t:"Regeln", c:"var(--lila2)", go:"nach/regeln"},
  {id:"teenager", t:"Teenager", c:"var(--pink)", go:"nach/teenager"},
  {id:"welten", t:"Multiversum", c:"var(--gelb)", ink:1, go:"welten"},
  {id:"heimat", t:"Hillview", c:"var(--gelb)", ink:1, go:"heimat"},
  {id:"monster", t:"Monster", c:"var(--gelb)", ink:1, go:"monster"},
  {id:"fraktionen", t:"Fraktionen", c:"var(--gelb)", ink:1, go:"fraktionen"},
  {id:"spielleitung", t:"Spielleitung", c:"var(--mint)", go:"folge"},
  {id:"abenteuer", t:"Abenteuer", c:"var(--mag)", go:"abenteuer"}
];
var SB_UNTER = {
  regeln: [["nach/regeln", "Spielablauf"], ["nach/demo", "Demo"]],
  teenager: [["nach/teenager/mach", "Mach dich selbst"], ["nach/teenager/pers", "Persönlichkeiten"], ["nach/teenager/sig", "Signaturen"], ["nach/teenager/ausr", "Ausrüstung"], ["nach/teenager/stk", "Sticker & Co."], ["nach/teenager/crew", "Crew"], ["nach/teenager/ruhm", "Ruhm"], ["crew", "Charakterbögen"]],
  spielleitung: [["folge", "Folge-Tafel"], ["schirm", "Spielleiterschirm"], ["nach/spielleitung", "Spielleitung"], ["nach/veraendern", "Spiel verändern"]]
};
function berVon(h){
  var v = h[0];
  if(v === "nach") return {regeln:"regeln", demo:"regeln", teenager:"teenager", spielleitung:"spielleitung", veraendern:"spielleitung"}[h[1] || "regeln"] || "regeln";
  if(v === "crew") return "teenager";
  if(v === "folge" || v === "schirm") return "spielleitung";
  return v;
}
/* Unterleiste: items = [[route, Text, aktiv]]; extra = dritte Ebene (z. B. die fünf Persönlichkeiten) hinter einem Trenner */
function SBU(items, extra){
  var v = (location.hash || "#start").slice(1).split("/")[0];
  return '<nav class="sbu">' + items.map(function(x){ return '<a class="' + (x[2] ? "on" : "") + '" onclick="go(\'' + x[0] + '\')">' + esc(x[1]) + '</a>'; }).join("") +
    (extra ? '<i class="vr"></i>' + extra : "") + '<span class="sp"></span>' +
    '<button class="pen' + (penHat(v) ? " has" : "") + '" onclick="penOpen(\'' + v + '\')" aria-label="Notizen" title="Notizen"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 20h4L19 9l-4-4L4 16z"/></svg></button></nav>';
}
/* Unterleiste eines Bereichs aus SB_UNTER; cur = Route des aktiven Punkts */
function SBUber(ber, cur, extra){
  return SBU((SB_UNTER[ber] || []).map(function(x){ return [x[0], x[1], cur === x[0] || cur.indexOf(x[0] + "/") === 0]; }), extra);
}
/* Lange Unterleisten (Welten, Heimatorte): dritte Ebene stufenweise enger setzen, bis alles in eine Zeile passt */
function sbuFit(){
  document.querySelectorAll(".sbu").forEach(function(n){
    n.classList.remove("eng", "eng2", "eng3");
    ["eng", "eng2", "eng3"].some(function(c){ if(n.scrollWidth <= n.clientWidth + 1) return true; n.classList.add(c); return false; });
  });
}
window.addEventListener("resize", sbuFit);
function kopfTabs(h){
  var el = document.getElementById("ktabs"); if(!el) return;
  var v = h[0] || "start", ber = berVon(h), B = null;
  SB_BER.forEach(function(b){ if(b.id === ber) B = b; });
  if(v === "oolroob" && window.SBO){
    el.innerHTML = SBO.TABS.map(function(t){ return '<a class="' + (t[0] === (h[1] || "ueber") ? "on" : "") + '" onclick="go(\'oolroob/' + t[0] + '\')">' + t[1] + '</a>'; }).join("");
  } else el.innerHTML = v === "start" ? "" : SB_BER.filter(function(b){ return VIEWS[b.go.split("/")[0]]; }).map(function(b){ return '<a class="' + (b === B ? "on" : "") + '" style="--bc:' + b.c + '" onclick="go(\'' + b.go + '\')">' + b.t + '</a>'; }).join("");
  var R = document.documentElement.style;
  R.setProperty("--bc", v === "oolroob" ? "#d37e2a" : B ? B.c : "var(--lila2)");
  document.body.classList.toggle("bink", v === "oolroob" || !!(B && B.ink));
}
/* Notizen: Stift rechts in der Unterleiste; je Folge (Folge-Tafel) bzw. je Ansicht eine Notiz */
function penKey(v){ return v === "folge" ? "folge-" + ((ST.folge && ST.folge.n) || 1) : v; }
function penHat(v){ try{ return !!((ST.notiz || {})[penKey(v)] || "").trim(); }catch(e){ return false; } }
function penOpen(v){
  var k = penKey(v), m = modal('<textarea class="pennote" placeholder="Notizen …" oninput="ST.notiz=ST.notiz||{};ST.notiz[\'' + k + '\']=this.value;save()">' + esc((ST.notiz || {})[k] || "") + '</textarea>');
  setTimeout(function(){ var t = m.querySelector("textarea"); if(t) t.focus(); }, 30);
}
function render(){
  var h = (location.hash || "#start").slice(1).split("/").map(decodeURIComponent), v = h[0] || "start", out;
  document.documentElement.style.setProperty("--c", "var(--lila)");
  if(v !== "start" && VIEWS[v]) out = (v === "folge" || v === "crew" ? SBUber(berVon(h), v) : "") + VIEWS[v](h.slice(1));
  else { out = viewStart(); h = ["start"]; }
  document.body.classList.toggle("istart", h[0] === "start");
  kopfTabs(h);
  var same = window.__lh === location.hash, y = scrollY; window.__lh = location.hash;
  APP.innerHTML = out; scrollTo(0, same ? y : 0);
  sbuFit();
  if(window.afterRender) afterRender();
}
function buildMenu(){
  document.getElementById("mmP").innerHTML = '<h3>Nachschlagen</h3>' +
    [["regeln","Spielablauf"],["teenager","Teenager"],["spielleitung","Spielleitung"],["veraendern","Spiel verändern"],["demo","Demo"]].map(function(b){ return '<button onclick="openMenu(false);go(\'nach/' + b[0] + '\')">' + b[1] + '</button>'; }).join("") +
    '<button onclick="openMenu(false);go(\'schirm\')">Spielleiterschirm</button>' +
    '<button onclick="openMenu(false);go(\'crew\')">Charakterbögen</button><button onclick="openMenu(false);Galerie.open(\'slugblaster\')">Galerie</button><button onclick="openMenu(false);SBS.open()">Suche <small style="opacity:.5">( / )</small></button><h3>Kapitel</h3>' +
    SB_KAP.map(function(k){ return '<button onclick="openMenu(false);openBook(\'sb_core\',' + k.z[0][1] + ')">' + esc(k.k + " · " + k.t.replace(/<br>/g, " ")) + '</button>'; }).join("") +
    '<h3>Bücher</h3>' + SB_BUECHER.map(function(g){ return g.items.map(function(b){ return '<button onclick="openMenu(false);openBook(\'' + b.id + '\',1)">' + esc(b.name) + ' (' + b.lang + ')</button>'; }).join(""); }).join("") +
    '<button onclick="openMenu(false);modal(BV.settingsHTML())">PDF hochladen …</button>';
}
function openMenu(on){ if(on) buildMenu(); document.getElementById("mmB").classList.toggle("on", on); document.getElementById("mmP").classList.toggle("on", on); }
document.addEventListener("keydown", function(e){
  if(/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "") || e.ctrlKey || e.metaKey || e.altKey) return;
  if(e.key === "Escape"){
    var offen = document.querySelector(".modal,.gzoom") || document.getElementById("mmP").classList.contains("on");
    openMenu(false); document.querySelectorAll(".modal,.gzoom").forEach(function(m){ m.remove(); });
    if(!offen && (location.hash || "#start") !== "#start"){ var hp = location.hash.slice(1).split("/"); hp.pop(); go(hp.length && !(hp.length === 1 && hp[0] === "nach") ? hp.join("/") : "start"); }
  }
  if(e.key === "h") document.body.classList.toggle("notop");

});
