/* HEART – Spielleiter-Tafel. Hash-Routing: #start · #nach/<kapitel> (weitere Routen folgen in den nächsten Schritten) */
"use strict";
var APP = document.getElementById("app");
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
/* einfaches Markup im Datentext: **fett**, *kursiv* */
function md(s){ return esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\*(.+?)\*/g, "<i>$1</i>").replace(/\n/g, "<br>"); }
function IMG(p){ return "img/" + p + ".webp"; }
var ST = {};
function load(){ try{ ST = JSON.parse(localStorage.getItem("ht_state_v1") || "{}") || {}; }catch(e){ ST = {}; } }
function save(){ try{ localStorage.setItem("ht_state_v1", JSON.stringify(ST)); }catch(e){} }
load();
function go(h){ if(location.hash === "#" + h) render(); else location.hash = h; }
function openBook(id, p){ try{ window.HT_BOOK = id || "ht_core"; BV.open(id || "ht_core", p || 1); }catch(e){} }
/* Seitenlink „S. 12“ – unscheinbar direkt hinter dem Namen */
function pgl(p, txt, book){ var n = parseInt(String(p || "").replace(/\D/g, ""), 10); return n ? '<span class="pg" onclick="event.stopPropagation();openBook(\'' + (book || "ht_core") + '\',' + n + ')">' + (txt || "S. " + n) + '</span>' : ""; }
window.addEventListener("hashchange", function(){ render(); });
function zoom(src){ var d = document.createElement("div"); d.className = "gzoom"; d.onclick = function(){ d.remove(); }; d.innerHTML = '<img src="' + src + '" alt="">'; document.body.appendChild(d); }
function modal(html){
  var m = document.createElement("div"); m.className = "modal"; m.innerHTML = "<div>" + html + "</div>";
  m.onclick = function(e){ if(e.target === m) m.remove(); };
  document.body.appendChild(m); return m;
}
function kurz(t){ return String(t).split(":")[0]; }

var VIEWS = {};
/* ---------- Startseite ---------- */
VIEWS.start = function(){
  var inh = HT_INHALT.map(function(col){
    return "<div>" + col.map(function(k){
      return '<div class="kap"><div class="bn" onclick="go(\'' + k.r + '\')">' + esc(k.t) + " <i>S. " + k.p + "</i></div>" +
        (k.z.length ? "<ul>" + k.z.map(function(z){ return '<li onclick="go(\'' + k.r + '\')">' + esc(z[0]) + "<i>S. " + z[1] + "</i></li>"; }).join("") + "</ul>" : "") + "</div>";
    }).join("") + "</div>";
  }).join("");
  var kl = HT_KLASSEN.map(function(c){ return '<a onclick="go(\'nach/klassen/' + c[0] + '\')"><img src="' + IMG("klasse/" + c[0]) + '" alt=""><span>' + esc(c[1]) + "</span></a>"; }).join("");
  return '<div class="buehne"><div class="quer"><img src="' + IMG("start/querschnitt") + '" alt="">' +
    '<div class="ab"><button class="go" onclick="go(\'nach/einfuehrung\')"><span class="t">In die Tiefe</span></button>' +
    '<button class="kamp" onclick="go(\'dagger\')"><img src="' + IMG("dagger/cover") + '" alt=""><span><b>Dagger in the Heart</b><small>Kampagne</small></span><span class="pf">→</span></button></div></div>' +
    '<div class="rechts"><div class="seite"><div class="gedicht">' + HT_GEDICHT.map(function(p){ return "<p>" + esc(p) + "</p>"; }).join("") + "</div>" +
    '<div class="inhalt">' + inh + '</div><div class="reihe">' + kl + "</div></div></div></div>";
};
/* ---------- Nachschlage-Seite (Platzhalter bis Schritt 1) ---------- */
VIEWS.nach = function(a){
  var id = a[0], k = null;
  HT_INHALT.forEach(function(c){ c.forEach(function(x){ if(x.r === "nach/" + id) k = x; }); });
  var t = k ? k.t : (id === "klassen" ? "Klassen" : "");
  return '<div class="wrap"><div class="seite"><h1 class="h1">' + esc(t) + (k ? pgl(k.p) : "") + "</h1></div></div>";
};

/* ---------- Render ---------- */
function render(){
  var h = (location.hash || "#start").slice(1).split("/").map(decodeURIComponent), v = h[0] || "start", out;
  out = VIEWS[v] ? VIEWS[v](h.slice(1)) : VIEWS.start([]);
  var same = window.__lh === location.hash, y = scrollY; window.__lh = location.hash;
  APP.innerHTML = out; scrollTo(0, same ? y : 0);
  if(window.afterRender) afterRender();
}
function buildMenu(){
  var kap = []; HT_INHALT.forEach(function(c){ c.forEach(function(k){ kap.push(k); }); });
  document.getElementById("mmP").innerHTML = '<h3>Nachschlagen</h3>' +
    kap.map(function(k){ return '<button onclick="openMenu(false);go(\'' + k.r + '\')">' + esc(k.t) + '<i>S. ' + k.p + '</i></button>'; }).join("") +
    HT_BUECHER.map(function(g){ return '<h3>' + esc(g.grp) + '</h3>' + g.items.map(function(b){ return '<button onclick="openMenu(false);openBook(\'' + b.id + '\',1)">' + esc(b.name) + '<i>' + b.lang + '</i></button>'; }).join(""); }).join("") +
    '<h3>PDF</h3><button onclick="openMenu(false);modal(BV.settingsHTML())">PDF hochladen …</button>';
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
});
