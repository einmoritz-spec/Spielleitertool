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
  var kap = SB_KAP.map(function(k, i){
    return '<div class="kc ' + k.id + '"><div class="bl"><b>' + esc(k.k) + '</b></div>' +
      '<h2 class="h2" onclick="go(\'' + k.go + '\')">' + k.t + '</h2><p class="kn">' + esc(k.s) + '</p><ul>' +
      k.z.map(function(z){ return '<li onclick="openBook(\'sb_core\',' + z[1] + ')"><span>' + esc(z[0]) + '</span><i>S. ' + z[1] + '</i></li>'; }).join("") + '</ul></div>';
  }).join("");
  var side = (VIEWS.folge ? '<button class="go" onclick="go(\'folge\')"><div class="t">Los-<br>blasten!</div><div class="s">Folge, Crew &amp; Multiversum</div><span class="arr">→</span></button>' : "") +
    chipsHtml([["bogen","Charakterbogen","bogen"],["bogen","Crewbogen","bogen/crew"],["schirm","Spielleiterschirm","schirm"],["galerie","Galerie","galerie"]]) +
    (VIEWS.oolroob ? '<button class="oo" onclick="go(\'oolroob\')"><img src="' + IMG("oolroob/cover") + '" alt=""><div><b>Oolroob</b><small>Zusatzheft</small></div></button>' : "");
  return '<div class="hero"><div class="l"><h1 class="big">Das ist<br><span>Slug</span>blaster</h1>' +
    '<p class="pitch">… ein Rollenspiel über Teenager, Riesenkäfer, Hoverboards mit Schaltkreisen und den Versuch, cool zu sein.</p>' +
    '<div class="pinkblob"></div><div class="wtg">Was dieses Spiel ist<br>und wie man es spielt</div></div>' +
    '<div class="r"><img src="' + IMG("start/cover") + '" alt=""></div></div>' +
    '<div class="wrap' + (side ? '' : ' n4') + '">' + kap + (side ? '<div class="side">' + side + '</div>' : '') + '</div>';
}

/* ---------- Render ---------- */
/* Ansichten werden in späteren Schritten ergänzt (window.viewXyz); bis dahin fällt alles Unbekannte auf die Startseite zurück */
function render(){
  var h = (location.hash || "#start").slice(1).split("/").map(decodeURIComponent), v = h[0] || "start", out;
  document.documentElement.style.setProperty("--c", "var(--lila)");
  if(v !== "start" && VIEWS[v]) out = VIEWS[v](h.slice(1));
  else out = viewStart();
  var same = window.__lh === location.hash, y = scrollY; window.__lh = location.hash;
  APP.innerHTML = out; scrollTo(0, same ? y : 0);
  if(window.afterRender) afterRender();
}
function buildMenu(){
  document.getElementById("mmP").innerHTML = '<h3>Kapitel</h3>' +
    SB_KAP.map(function(k){ return '<button onclick="openMenu(false);openBook(\'sb_core\',' + k.z[0][1] + ')">' + esc(k.k + " · " + k.t.replace(/<br>/g, " ")) + '</button>'; }).join("") +
    '<h3>Bücher</h3>' + SB_BUECHER.map(function(g){ return g.items.map(function(b){ return '<button onclick="openMenu(false);openBook(\'' + b.id + '\',1)">' + esc(b.name) + ' (' + b.lang + ')</button>'; }).join(""); }).join("") +
    '<button onclick="openMenu(false);modal(BV.settingsHTML())">PDF hochladen …</button>';
}
function openMenu(on){ if(on) buildMenu(); document.getElementById("mmB").classList.toggle("on", on); document.getElementById("mmP").classList.toggle("on", on); }
document.addEventListener("keydown", function(e){
  if(/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "") || e.ctrlKey || e.metaKey || e.altKey) return;
  if(e.key === "Escape"){ openMenu(false); document.querySelectorAll(".modal,.gzoom").forEach(function(m){ m.remove(); }); }
  if(e.key === "h") document.body.classList.toggle("notop");
});
