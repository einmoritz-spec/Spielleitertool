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
function viewStart(){
  var inh = HT_INHALT.map(function(col){
    return "<div>" + col.map(function(k){
      return '<div class="kap"><div class="bn" onclick="go(\'' + k.r + '\')">' + esc(k.t) + " <i>S. " + k.p + "</i></div>" +
        (k.z.length ? "<ul>" + k.z.map(function(z){ return '<li onclick="go(\'' + (z[2] || k.r) + '\')">' + esc(z[0]) + "<i>S. " + z[1] + "</i></li>"; }).join("") + "</ul>" : "") + "</div>";
    }).join("") + "</div>";
  }).join("");
  var kl = HT_KLASSEN.map(function(c){ return '<a onclick="go(\'nach/klassen/' + c[0] + '\')"><img src="' + IMG("klasse/" + c[0]) + '" alt=""><span>' + esc(c[1]) + "</span></a>"; }).join("");
  return '<div class="buehne"><div class="quer"><img src="' + IMG("start/querschnitt") + '" alt="">' +
    '<div class="ab"><button class="go" onclick="go(\'nach/einfuehrung\')"><span class="t">In die Tiefe</span></button>' +
    '<button class="kamp" onclick="go(\'dagger\')"><img src="' + IMG("dagger/cover") + '" alt=""><span><b>Dagger in the Heart</b><small>Kampagne</small></span><span class="pf">→</span></button>' +
    '<button class="kamp" onclick="go(\'blackops\')"><img src="' + IMG("blackops/cover") + '" alt=""><span><b>Vermissian Black Ops</b><small>Einsätze in der Vermissian</small></span><span class="pf">→</span></button>' +
    '<button class="kamp" onclick="go(\'doors\')"><img src="' + IMG("doors/cover") + '" alt=""><span><b>Doors to Elsewhere</b><small>Abenteuer</small></span><span class="pf">→</span></button></div></div>' +
    startRechts(inh, kl) + "</div>";
}
function startRechts(inh, kl){
  var G = HT_GEDICHT, alle = [];
  HT_INHALT.forEach(function(c){ c.forEach(function(k){ alle.push(k); }); });
  var ord = ["Einführung","Spielweise","Charaktere","Regeln im Detail","Spielleitung","Die Welt von Heart","Landmarken","Gegner","Regelübersicht"], L = ord.map(function(t){ return alle.filter(function(k){ return k.t === t; })[0]; }).filter(Boolean);
  alle.forEach(function(k){ if(L.indexOf(k) < 0) L.push(k); });
  var auf = !!ST.gedichtAuf;
  var kopf = '<div class="vckopf' + (auf ? " auf" : "") + '" onclick="ST.gedichtAuf=!ST.gedichtAuf;save();render()"><p class="vczeile">Frag dich, wonach du suchst.</p>' + (auf ? '<div class="vcged">' + G.map(function(p){ return "<p>" + esc(p) + "</p>"; }).join("") + "</div>" : "") + "</div>";
  var band = L.map(function(k, i){
    var t = i / (L.length - 1);
    var z = k.z.map(function(x){ return '<a onclick="event.stopPropagation();go(\'' + (x[2] || k.r) + '\')">' + esc(x[0]) + "<i>" + x[1] + "</i></a>"; }).join("");
    return '<div class="vcr' + (t > 0.4 ? " hell" : "") + '" style="--t:' + t.toFixed(2) + '" onclick="go(\'' + k.r + '\')"><span class="vcn">' + (i < 9 ? "0" : "") + (i + 1) + '</span><span class="vct"><b>' + esc(k.t) + '</b><span class="vcp">S. ' + k.p + '</span></span><div class="vcz">' + z + '</div><span class="vcpf">→</span></div>';
  }).join("");
  return '<div class="rechts vc">' + kopf + '<div class="vcband">' + band + '</div><div class="vcreihe"><div class="reihe">' + kl + "</div></div></div>";
}
VIEWS.start = viewStart;
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
  document.getElementById("mmP").innerHTML = '<h3>Spielbereich</h3>' + [["exp","Expedition"],["karte","Karte"],["lm","Landmarken"],["gegner","Gegner"],["fallout","Fallout"]].map(function(t){ return '<button onclick="openMenu(false);go(\'' + t[0] + '\')">' + t[1] + '</button>'; }).join("") + '<h3>Nachschlagen</h3>' +
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
