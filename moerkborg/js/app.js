/* MÖRK BORG – Spielleiter-Tafel. Hash-Routing: #start · weitere Ansichten (Spieltisch, Abenteuer, Kreaturen, Tabellen, #nach/…) kommen in den Bauschritten 1–9 */
"use strict";
var APP = document.getElementById("app");
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
/* einfaches Markup im Datentext: **fett**, *kursiv* */
function md(s){ return esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\*(.+?)\*/g, "<i>$1</i>").replace(/\n/g, "<br>"); }
function IMG(p){ return "img/" + p + ".webp"; }
var ST = {};
function load(){ try{ ST = JSON.parse(localStorage.getItem("mb_state_v1") || "{}") || {}; }catch(e){ ST = {}; } }
function save(){ try{ localStorage.setItem("mb_state_v1", JSON.stringify(ST)); }catch(e){} }
load();
function go(h){ if(location.hash === "#" + h) render(); else location.hash = h; }
function openBook(id, p){ try{ window.MB_BOOK = id || "mb_core"; BV.open(id || "mb_core", p || 1); }catch(e){} }
/* Seitenlink „S. 12“ – unscheinbar direkt hinter dem Namen */
function pgl(p, txt, book){ var n = parseInt(String(p || "").replace(/\D/g, ""), 10); return n ? '<span class="pg" onclick="event.stopPropagation();openBook(\'' + (book || "mb_core") + '\',' + n + ')">' + (txt || "S. " + n) + '</span>' : ""; }
function zoom(src){ var d = document.createElement("div"); d.className = "gzoom"; d.onclick = function(){ d.remove(); }; d.innerHTML = '<img src="' + src + '" alt="">'; document.body.appendChild(d); }
function modal(html){ var m = document.createElement("div"); m.className = "modal"; m.innerHTML = '<div>' + html + '</div>'; m.onclick = function(e){ if(e.target === m) m.remove(); }; document.body.appendChild(m); return m; }
function kurz(t){ return String(t).split(":")[0]; }
window.addEventListener("hashchange", function(){ render(); });

var VIEWS = {};   /* window-Ansichten der späteren Schritte: VIEWS.spiel = function(args){ … } */
var MB_TABS = [["spiel","Spieltisch"],["abenteuer","Abenteuer"],["kreaturen","Kreaturen"],["tabellen","Tabellen"]];
function tabList(){ return MB_TABS.filter(function(t){ return VIEWS[t[0]]; }); }
function tabsHtml(cur){
  return '<nav class="reiter">' + tabList().map(function(t){ return '<button class="' + (t[0] === cur ? "on" : "") + '" onclick="go(\'' + t[0] + '\')">' + t[1] + '</button>'; }).join("") + '<span class="sp"></span>' +
    '<button class="stift' + (penHat(cur) ? " has" : "") + '" onclick="penOpen(\'' + cur + '\')" aria-label="Notizen" title="Notizen"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 20h4L19 9l-4-4L4 16z"/></svg></button></nav>';
}
function penHat(v){ try{ return !!((ST.notiz || {})[v] || "").trim(); }catch(e){ return false; } }
function penOpen(v){ var m = modal('<textarea class="pennote" oninput="ST.notiz=ST.notiz||{};ST.notiz[\'' + v + '\']=this.value;save()">' + esc((ST.notiz || {})[v] || "") + '</textarea>'); setTimeout(function(){ var t = m.querySelector("textarea"); if(t) t.focus(); }, 30); }

/* ---------- Startseite = Register ---------- */
function teilGo(t){ return t.nr === "I" && VIEWS.nach ? "go('nach/welt')" : "openBook('" + t.z[0][1] + "'," + t.z[0][2] + ")"; }
function viewRegister(){
  var zeilen = MB_TEILE.map(function(t){
    return '<div class="zeile"><div class="nr">' + t.nr + '</div><div><h2 onclick="' + teilGo(t) + '">' + esc(t.t) + '</h2><p>' +
      t.z.map(function(z){ var go2 = z[3] && VIEWS.nach ? "go(\'nach/welt/" + z[3] + "\')" : "openBook(\'" + z[1] + "\'," + z[2] + ")"; return '<span onclick="' + go2 + '">' + esc(z[0]) + '<i onclick="event.stopPropagation();openBook(\'' + z[1] + '\',' + z[2] + ')">S. ' + z[2] + '</i></span>'; }).join(" ") + '</p></div></div>';
  }).join("");
  var kk = ST.kal || {}, ein = kk.ein || {}, sg = "";
  for(var p = 1; p <= 6; p++){ var hat = false; for(var q = 1; q <= 6; q++) if(ein[p + ":" + q]) hat = true; sg += '<b' + (hat ? ' class="x"' : "") + '>' + p + '</b>'; }
  sg += '<b class="end' + (ein["7:7"] ? " x" : "") + '">7:7</b>';
  var los = VIEWS.spiel ? '<div class="los" onclick="go(\'spiel\')"><div class="t">Zum Spieltisch<span>→</span></div><div class="stand"><div class="siegel">' + sg + '</div><div class="z">Tag ' + (kk.n || 1) + '</div></div></div>' : "";
  return '<div class="buehne"><div class="titel"><img src="' + IMG("start/cover-skelett") + '" alt=""></div><div class="reg"><div class="kopfz"><h1>Register</h1></div>' + zeilen + los + '</div></div>';
}

VIEWS.register = function(){ return tabsHtml('register') + viewRegister(); };
function render(){
  var h = (location.hash || "#start").slice(1).split("/").map(decodeURIComponent), v = h[0] || "start", out;
  var kt0 = document.getElementById("ktabs"); if(kt0) kt0.innerHTML = "";
  if(v !== "start" && VIEWS[v]) out = (v === "nach" ? "" : tabsHtml(v)) + VIEWS[v](h.slice(1)); else out = (window.viewBib || viewRegister)();
  var same = window.__lh === location.hash, y = scrollY; window.__lh = location.hash;
  APP.innerHTML = out; scrollTo(0, same ? y : 0);
  if(window.afterRender) afterRender();
}
function buildMenu(){
  document.getElementById("mmP").innerHTML = '<h3>Register</h3>' +
    MB_TEILE.map(function(t){ return '<button onclick="openMenu(false);' + teilGo(t) + '">' + esc(t.t) + '</button>'; }).join("") +
    '<h3>Werkzeuge</h3><button class="k" onclick="openMenu(false);sOpen()">Suche</button><button class="k" onclick="openMenu(false);go(\'galerie\')">Galerie</button><h3>Bücher</h3>' + MB_BUECHER.map(function(g){ return g.items.map(function(b){ return '<button class="k" onclick="openMenu(false);openBook(\'' + b.id + '\',1)">' + esc(b.name) + ' (' + b.lang + ')</button>'; }).join(""); }).join("") +
    '<button class="k" onclick="openMenu(false);modal(BV.settingsHTML())">PDF hochladen …</button>';
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
