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
function viewStart(){
  var f = ST.folge || {}, t = ST.tour || {}, w = t.welt && window.sbWelt ? sbWelt(t.welt) : null, sc = ST.sc || [], c = ST.crew || {};
  var kap = SB_KAP.map(function(k){
    return '<div class="sx-k ' + k.id + '"><div class="sx-kh" onclick="go(\'' + k.go + '\')"><small>' + esc(k.k) + '</small><h2>' + k.t.replace(/<br>/g, " ") + '</h2><em>' + esc(k.s) + '</em></div><ul>' +
      k.z.map(function(z){ return '<li onclick="go(\'' + z[2] + '\')"><span>' + esc(z[0]) + '</span><i onclick="event.stopPropagation();openBook(\'sb_core\',' + z[1] + ')">S. ' + z[1] + '</i></li>'; }).join("") + '</ul></div>';
  }).join("");
  var crew = sc.length ? sc.map(function(p, i){ var P = sbPers(p.pers); return '<a style="--pc:' + P.farbe + '" onclick="go(\'crew/' + i + '\')"><b>' + esc(p.name || "Slugger") + '</b><small>' + esc(P.t.replace(/^The /, "")) + '</small></a>'; }).join("") + '<a class="cr" onclick="go(\'crew/crew\')"><b>' + esc(c.name || "Crew") + '</b><small>Crewbogen</small></a>'
    : '<a class="neu" onclick="go(\'crew\')"><b>+ Crew anlegen</b></a>';
  var pers = SB_PERS.map(function(p){ return '<a class="sx-pf" style="--pc:' + p.farbe + '" onclick="go(\'nach/teenager/pers/' + p.id + '\')"><img src="' + IMG("pers/" + p.id) + '" alt="" loading="lazy"><b>' + esc(p.t.replace(/^The /, "")) + '</b></a>'; }).join("");
  var welten = [["thennis-spar","Thennis Spar","welt-thennis-spar"],["goldener-dschungel","Der Goldene Dschungel","welt-goldener-dschungel"],["calorium","Calorium","welt-calorium"],["erwachende-gruben","Die Erwachenden Gruben","welt-erwachende-gruben"]].map(function(x){
    var id = (window.SB_WELTEN || []).filter(function(v){ return v.t === x[1]; })[0];
    return '<a class="sx-w" onclick="go(\'welten' + (id ? "/" + id.id : "") + '\')"><img src="img/galerie/thumb/' + x[2] + '.webp" alt="" loading="lazy"><b>' + esc(x[1]) + '</b></a>';
  }).join("") + (VIEWS.oolroob ? '<a class="sx-w oo2" onclick="go(\'oolroob\')"><img src="' + IMG("oolroob/cover") + '" alt="" loading="lazy"><b>Oolroob</b></a>' : "");
  return '<div class="sx"><section class="sx-hero"><div class="sx-l">' +
    '<h1>Das ist <span>Slug</span>blaster</h1><p>… ein Rollenspiel über Teenager, Riesenkäfer, Hoverboards mit Schaltkreisen und den Versuch, cool zu sein.</p>' +
    '<div class="sx-act"><button class="sx-go" onclick="go(\'folge\')"><span>Los&shy;blasten!</span><small>' + (f.n ? "Folge " + f.n + (w ? " · " + esc(w.t) : "") : "Erste Folge starten") + '</small><i>→</i></button>' +
    '<div class="sx-crew"><div class="cap">Crew</div><div class="sx-cl">' + crew + '</div></div></div></div>' +
    '<img class="sx-cover" src="' + IMG("start/cover") + '" alt=""></section>' +
    '<section class="sx-kaps">' + kap + '</section>' +
    '<section class="sx-strips"><div><div class="sx-cap">Persönlichkeiten</div><div class="sx-ps">' + pers + '</div></div>' +
    '<div><div class="sx-cap">Multiversum</div><div class="sx-ws">' + welten + '</div></div></section></div>';
}

/* ---------- Render ---------- */
/* Ansichten werden in späteren Schritten ergänzt (window.viewXyz); bis dahin fällt alles Unbekannte auf die Startseite zurück */
var SB_TABS = [["folge","Folge"],["abenteuer","Abenteuer"],["crew","Crew"],["welten","Multiversum"],["heimat","Heimat"],["monster","Monster"],["fraktionen","Fraktionen"]];
function tabList(){ return SB_TABS.filter(function(t){ return VIEWS[t[0]]; }); }
function tabsHtml(cur){
  return '<nav class="tabs">' + tabList().map(function(t){ return '<a class="' + (t[0] === cur ? "on" : "") + '" onclick="go(\'' + t[0] + '\')">' + t[1] + '</a>'; }).join("") + '<span class="sp"></span>' +
    '<button class="pen' + (penHat(cur) ? " has" : "") + '" onclick="penOpen(\'' + cur + '\')" aria-label="Notizen" title="Notizen"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 20h4L19 9l-4-4L4 16z"/></svg></button></nav>';
}
/* Notizen: Stift rechts in der Tab-Zeile; je Folge (Folge-Tafel) bzw. je Ansicht eine Notiz */
function penKey(v){ return v === "folge" ? "folge-" + ((ST.folge && ST.folge.n) || 1) : v; }
function penHat(v){ try{ return !!((ST.notiz || {})[penKey(v)] || "").trim(); }catch(e){ return false; } }
function penOpen(v){
  var k = penKey(v), m = modal('<textarea class="pennote" placeholder="Notizen …" oninput="ST.notiz=ST.notiz||{};ST.notiz[\'' + k + '\']=this.value;save()">' + esc((ST.notiz || {})[k] || "") + '</textarea>');
  setTimeout(function(){ var t = m.querySelector("textarea"); if(t) t.focus(); }, 30);
}
function render(){
  var h = (location.hash || "#start").slice(1).split("/").map(decodeURIComponent), v = h[0] || "start", out;
  document.documentElement.style.setProperty("--c", "var(--lila)");
  if(v !== "start" && VIEWS[v]) out = (VIEWS[v].own ? "" : tabsHtml(v)) + VIEWS[v](h.slice(1));
  else out = viewStart();
  var same = window.__lh === location.hash, y = scrollY; window.__lh = location.hash;
  APP.innerHTML = out; scrollTo(0, same ? y : 0);
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
    if(!offen && (location.hash || "#start") !== "#start") go("start");
  }
  if(e.key === "h") document.body.classList.toggle("notop");
  if((e.key === "ArrowLeft" || e.key === "ArrowRight") && !document.querySelector(".modal,.gzoom")){
    var L = tabList(), cur = (location.hash || "#start").slice(1).split("/")[0], ix = -1; L.forEach(function(t, i){ if(t[0] === cur) ix = i; });
    if(ix >= 0){ var n = L[ix + (e.key === "ArrowRight" ? 1 : -1)]; if(n){ go(n[0]); e.preventDefault(); } }
  }
});
