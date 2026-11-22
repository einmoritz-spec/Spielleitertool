/* THE SPIRE – Spielleiter-Tafel. Kern: Routing, Blöcke, Tabs, Seitenleiste, Modal, Startseite, Galerie, Menü, Tasten.
   Hash-Routen (plan/SPIRE_PLAN.md, Abschnitt 4):
   #start · #stadt[/<domaene>/<distrikt>] · #zelle · #gegner[/<id>] · #zufall[/<gruppe>] · #abenteuer/<id>/<tab>
   #nach/<bereich>[/<id>] · #schirm · #galerie
   Weitere Module melden ihre Ansichten in SP_VIEW an: SP_VIEW.stadt = function(teile){ return html; } */
"use strict";
var APP = document.getElementById("app");
window.SP_VIEW = window.SP_VIEW || {};
window.SP_NACH = window.SP_NACH || {};
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
/* Markup im Datentext: **fett**, *kursiv*, Zeilenumbruch */
function md(s){ return esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\*(.+?)\*/g, "<i>$1</i>").replace(/\n/g, "<br>"); }
function IMG(p){ return "img/" + p + ".webp"; }

/* ---------- Spielstand ---------- */
var ST = {};
function load(){ try{ ST = JSON.parse(localStorage.getItem("sp_state_v1") || "{}") || {}; }catch(e){ ST = {}; } }
function save(){ try{ localStorage.setItem("sp_state_v1", JSON.stringify(ST)); }catch(e){} }
load();

/* ---------- Bücher und Seitenangaben ---------- */
var SP_BUCH = {};
SP_BUECHER.forEach(function(g){ g.items.forEach(function(b){ SP_BUCH[b.id] = b; SP_BUCH[b.id.replace(/^sp_/, "")] = b; }); });
function buchId(b){ return SP_BUCH[b || "cmf"] ? SP_BUCH[b || "cmf"].id : "sp_cmf"; }
function openBook(b, p){ try{ BV.open(buchId(b), p == null ? 1 : p); }catch(e){} }
/* Seitenangabe klein und grau: „S. 12“, „MG S. 12“, „QS S. 12“; Klick öffnet die Buchseite */
function pgTxt(p, buch){ var B = SP_BUCH[buch || "cmf"]; return (B && B.pre ? B.pre : "") + "S. " + p; }
function pgl(p, buch, txt){
  var n = parseInt(String(p == null ? "" : p).replace(/[^\d]/g, ""), 10); if(isNaN(n)) return "";
  return '<a class="pg" onclick="event.stopPropagation();openBook(\'' + (buch || "cmf") + '\',' + n + ')">' + esc(txt || pgTxt(p, buch)) + '</a>';
}

/* ---------- Navigation ---------- */
function go(h){ if(location.hash === "#" + h) render(); else location.hash = h; }
window.addEventListener("hashchange", function(){ render(); });
/* Skripte nachladen (für spätere, große Module) */
function needJS(L, cb){ if(!L.length){ (cb || render)(); return; } var sc = document.createElement("script"); sc.src = L[0]; sc.onload = sc.onerror = function(){ needJS(L.slice(1), cb); }; document.body.appendChild(sc); }

/* ---------- Blöcke (Abschnitt 5) ---------- */
function blk(L){
  return (L || []).map(function(b){
    if(typeof b === "string") return "<p>" + md(b) + "</p>";
    switch(b.t){
      case "p": return "<p>" + md(b.x) + "</p>";
      case "h": return '<h2 class="ab">' + esc(b.x) + (b.p ? pgl(b.p, b.buch) : "") + "</h2>";
      case "h3": return '<h3 class="un">' + esc(b.x) + (b.p ? pgl(b.p, b.buch) : "") + "</h3>";
      case "ul": return '<ul class="pkt">' + b.x.map(function(x){ return "<li>" + md(x) + "</li>"; }).join("") + "</ul>";
      case "dl": return '<ul class="pkt">' + b.x.map(function(x){ return "<li><b>" + esc(x[0]) + ":</b> " + md(x[1]) + "</li>"; }).join("") + "</ul>";
      case "schwarz": return '<div class="schwarz">' + (b.h ? "<h4>" + esc(b.h) + "</h4>" : "") + (Array.isArray(b.b) ? blk(b.b) : "<p>" + md(b.b || b.x) + "</p>") + "</div>";
      case "violett": return '<div class="violett">' + (b.h ? "<h4>" + esc(b.h) + "</h4>" : "") + (Array.isArray(b.b) ? blk(b.b) : "<p>" + md(b.b || b.x) + "</p>") + "</div>";
      case "vl": return '<div class="zitat">' + md(b.x) + (b.wer ? '<div class="leise">' + esc(b.wer) + "</div>" : "") + "</div>";
      case "bsp": return '<div class="zitat" style="border-color:var(--blau)">' + md(b.x) + "</div>";
      case "tbl": return tbl(b);
      case "w10": return w10(b);
      case "img": return '<img class="bild" src="' + IMG(b.src) + '" alt="" onclick="zoom(this.src)">';
      case "gegner": return window.gegnerKarte ? gegnerKarte(b.id) : "";
      case "karten": return '<div class="raster r' + (b.n || 3) + '" style="margin:10px 0">' + b.x.map(function(k){ return '<div class="karte"><h4>' + esc(k.t) + (k.tag ? '<span class="tag">' + esc(k.tag) + '</span>' : '') + '</h4>' + (k.f ? '<p><i>' + md(k.f) + '</i></p>' : '') + (Array.isArray(k.x) ? blk(k.x) : '<p>' + md(k.x || "") + '</p>') + '</div>'; }).join("") + "</div>";
    }
    return "";
  }).join("");
}
function tbl(b){
  return '<table class="tbl">' + (b.head ? "<tr>" + b.head.map(function(h){ return "<th>" + esc(h) + "</th>"; }).join("") + "</tr>" : "") +
    b.rows.map(function(r){ return "<tr>" + r.map(function(c){ return "<td>" + md(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</table>";
}
/* W10-Tabelle (Entwurf 9): Würfelknopf im Kopf, Treffer gold; Würfe in ST.zufall */
function w10(b){
  var id = b.id || ("w10_" + String(b.h || "").replace(/[^a-z0-9]/gi, "").slice(0, 30)); ST.zufall = ST.zufall || {}; var hit = ST.zufall[id];
  return '<div class="w10t"><h4>' + esc(b.h || "") + '<span class="wb" onclick="w10roll(\'' + id + '\',' + b.rows.length + ')">W' + b.rows.length + (hit ? " · " + hit : "") + '</span></h4><ol>' +
    b.rows.map(function(r, i){ return '<li class="' + (hit === i + 1 ? 'hit' : '') + '"><b>' + (i + 1) + '</b><span>' + md(r) + '</span></li>'; }).join("") + "</ol></div>";
}
function w10roll(id, n){ ST.zufall = ST.zufall || {}; ST.zufall[id] = 1 + Math.floor(Math.random() * (n || 10)); save(); render(); }

/* ---------- Overlays ---------- */
function zoom(src){ var d = document.createElement("div"); d.className = "gzoom"; d.onclick = function(){ d.remove(); }; d.innerHTML = '<img src="' + src + '" alt="">'; document.body.appendChild(d); }
function modal(html, wide){
  var m = document.createElement("div"); m.className = "modal" + (wide ? " wide" : "");
  m.innerHTML = '<div>' + html + '</div>';
  m.onclick = function(e){ if(e.target === m) m.remove(); };
  document.body.appendChild(m); return m;
}
/* Notizen: nur Stift-Symbol rechts in der Tab-Zeile */
var PEN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/></svg>';
function note(k){
  ST.notes = ST.notes || {};
  var m = modal('<textarea></textarea><div class="act"><button class="knopf">Fertig</button></div>');
  var t = m.querySelector("textarea"); t.value = ST.notes[k] || ""; t.focus();
  var close = function(){ ST.notes[k] = t.value; save(); m.remove(); render(); };
  m.querySelector("button").onclick = close; m.onclick = function(e){ if(e.target === m) close(); };
}
function stift(k){ return '<span class="stift' + (ST.notes && ST.notes[k] ? ' has' : '') + '" onclick="note(\'' + k + '\')" title="Notizen">' + PEN + '</span>'; }

/* ---------- Tab-Leisten ---------- */
/* L = [[route, Name], …]; nur Namen, keine Zahlen */
function tabs(L, cur, noteKey){
  return '<div class="tabs">' + L.map(function(t){ return '<a class="' + (t[0] === cur ? 'on' : '') + '" onclick="go(\'' + t[0] + '\')">' + esc(t[1]) + '</a>'; }).join("") + '<span class="sp"></span>' + (noteKey ? stift(noteKey) : '') + '</div>';
}
/* Haupt-Tabs fürs laufende Spiel: Stadt · Zelle · Gegner · Zufall */
function spielTabs(cur){ return tabs([["stadt","Stadt"],["zelle","Zelle"],["gegner","Gegner"],["zufall","Zufall"]], cur, "spiel:" + cur); }
function nachTabs(id){
  var B = SP_NACH_BEREICHE[id], g = B && B.grp, L = [];
  Object.keys(SP_NACH_BEREICHE).forEach(function(k){ var x = SP_NACH_BEREICHE[k]; if(k === id || (g && x.grp === g)) L.push(["nach/" + k, x.t]); });
  return tabs(L, "nach/" + id, "nach:" + id);
}

/* ---------- Seitenleiste (einklappbar: ‹ und Taste b; bleibt beim Scrollen stehen) ---------- */
function lay(side, body, wirbel){
  return '<div class="wrap' + (ST.fold ? ' zu' : '') + '"><nav class="side"><span class="zu" onclick="foldSide()" title="Leiste einklappen (b)">‹</span>' + side + '</nav>' +
    '<span class="auf" onclick="foldSide()" title="Leiste ausklappen (b)">›</span>' +
    '<div class="main">' + (wirbel === false ? '' : '<img class="wirbel" src="img/deko/wirbel.webp" alt="">') + body + '</div></div>';
}
function voll(body, wirbel){ return '<div class="main voll">' + (wirbel === false ? '' : '<img class="wirbel" src="img/deko/wirbel.webp" alt="">') + body + '</div>'; }
function foldSide(){ ST.fold = !ST.fold; save(); var w = document.querySelector(".wrap"); if(w) w.classList.toggle("zu", !!ST.fold); }
function kurz(t){ return String(t).split(":")[0]; }
function jump(id){ var e = document.getElementById(id); if(!e) return; var y = e.getBoundingClientRect().top + scrollY - (document.body.classList.contains("notop") ? 0 : 56) - 62; scrollTo({top:y, behavior:"smooth"}); }

/* ---------- Startseite (Entwurf 1) ---------- */
function viewStart(){
  var last = ST.last || "";
  var kach = SP_KACHELN.map(function(k){
    return '<button class="k" onclick="go(\'' + k.go + '\')"><div class="im"><img src="' + IMG(k.img) + '" alt="" style="object-position:' + (k.pos || "center 30%") + '"></div><h3>' + esc(k.t) + '</h3><small>' + esc(k.s) + ' <i>·</i>' + pgl(k.p, k.buch).replace('class="pg"', 'class="pg kp"') + '</small></button>';
  }).join("");
  var spiel = SP_SPIEL.map(function(z){ return '<button class="z' + (last === z.id ? ' on' : '') + '" onclick="go(\'' + z.id + '\')"><h4>' + esc(z.t) + '</h4><small>' + esc(z.s) + '</small></button>'; }).join("");
  var ab = Object.keys(SP_ABENTEUER).map(function(id){ var A = SP_ABENTEUER[id];
    return '<div data-pgbook="' + buchId(A.buch) + '" class="abk' + (last === "abenteuer/" + id ? ' on' : '') + '" onclick="go(\'abenteuer/' + id + '\')"><img src="' + IMG(A.img) + '" alt=""><div><h4>' + esc(A.t) + '</h4><p>' + esc(A.k) + '</p><p class="q">' + esc(A.q[0]) + ' · ' + pgl(A.p, A.buch, A.q[1]) + ' · ' + esc(A.q[2]) + '</p></div></div>'; }).join("");
  var bald = []; SP_BUECHER.forEach(function(g){ g.items.forEach(function(b){ if(b.abenteuer) bald.push(b); }); });
  var R = SP_REVOLUTION, rv = ST.rev || 0;
  return '<div class="hero"><div class="verlauf"></div><h1>Spire</h1><p>Spire ist eine meilenhohe, unmögliche Stadt, älter als irgendwer zurückdenken kann.</p></div>' +
    '<div class="start"><div><h2 class="ab" style="margin-top:4px">Vorbereitung</h2><div class="kach">' + kach + '</div>' +
    '<div class="chips"><span onclick="charakterbogen()">Charakterbogen</span><span onclick="go(\'schirm\')">Spielleiterschirm</span><span onclick="wOpen()">Würfel</span><span onclick="go(\'nach/regeln/fallout\')">Fallout-Liste</span><span onclick="go(\'galerie\')">Galerie</span></div></div>' +
    '<div class="los"><h2>Losschlagen</h2><div class="gross">' + spiel + '</div>' + ab +
    (bald.length ? '<div class="bald">Weitere Abenteuer<br>' + bald.map(function(b){ return '<span onclick="openBook(\'' + b.id + '\',1)">' + esc(b.abenteuer) + '</span>'; }).join("") + '</div>' : '') +
    '<div class="rev"><h5 onclick="go(\'nach/spielleitung/revolution\')">Die Revolution' + pgl(R.p) + '</h5><div class="stufen">' + R.stufen.map(function(s, i){ return '<button class="' + (rv === i ? 'on' : '') + '" onclick="setRev(' + i + ')">' + esc(s) + '</button>'; }).join("") + '</div></div>' +
    '</div></div>';
}
function setRev(i){ ST.rev = i; save(); render(); }
function charakterbogen(){ openBook("cmf", 212); }

/* ---------- Platzhalter für Bereiche, die noch übertragen werden ---------- */
function folgt(t, p, buch){ return '<h1 class="titel">' + esc(t) + (p != null ? pgl(p, buch) : '') + '</h1><p class="folgt">Noch nicht übertragen.</p>'; }
function viewNach(teile){
  var id = teile[0] || "welt"; if(!SP_NACH_BEREICHE[id]) id = "welt";
  var B = SP_NACH_BEREICHE[id];
  if(window.SP_NACH_VIEW && SP_NACH_VIEW[id]) return SP_NACH_VIEW[id](teile.slice(1));
  return nachTabs(id) + voll(folgt(B.t, B.p, B.buch));
}
function viewSpielPlatzhalter(id){ var z = SP_SPIEL.filter(function(x){ return x.id === id; })[0]; return spielTabs(id) + voll(folgt(z.t, z.p, z.buch)); }
function viewAbenteuerPlatzhalter(teile){
  var A = SP_ABENTEUER[teile[0]] || SP_ABENTEUER.snuff;
  return tabs([["abenteuer/" + (teile[0] || "snuff"), A.t]], "abenteuer/" + (teile[0] || "snuff"), "ab:" + (teile[0] || "snuff")) + voll(folgt(A.t, A.p, A.buch));
}

/* ---------- Galerie: alle Buchbilder, ungeschnitten ---------- */
function viewGalerie(){
  var G = SP_GALERIE;
  var side = '<h5 onclick="scrollTo({top:0,behavior:\'smooth\'})">Galerie</h5>' + G.map(function(g){ return '<a onclick="jump(\'gal-' + g.id + '\')">' + esc(g.g) + '</a>'; }).join("");
  var body = '<div class="galg">' + G.map(function(g){
    return '<div class="gg"><h2 class="ab" id="gal-' + g.id + '">' + esc(g.g) + '</h2><div class="gal">' + g.x.map(function(x){ return '<figure onclick="zoom(\'' + IMG(x.s) + '\')"><img loading="lazy" src="' + IMG(x.s) + '" alt="' + esc(x.t) + '"><span>' + esc(x.t) + '</span></figure>'; }).join("") + '</div></div>';
  }).join("") + '</div>';
  return tabs([["galerie","Galerie"]], "galerie") + lay(side, body, false);
}

/* ---------- Render ---------- */
var SPIEL_IDS = {stadt:1, zelle:1, gegner:1, zufall:1};
function render(){
  var h = (location.hash || "#start").slice(1).split("/").map(function(x){ try{ return decodeURIComponent(x); }catch(e){ return x; } }), v = h[0] || "start", rest = h.slice(1), out;
  if(SPIEL_IDS[v] || v === "abenteuer"){ var l = v === "abenteuer" ? "abenteuer/" + (rest[0] || "snuff") : v; if(ST.last !== l){ ST.last = l; save(); } }
  if(SP_VIEW[v]) out = SP_VIEW[v](rest);
  else if(v === "start") out = viewStart();
  else if(v === "nach") out = viewNach(rest);
  else if(SPIEL_IDS[v]) out = viewSpielPlatzhalter(v);
  else if(v === "abenteuer") out = viewAbenteuerPlatzhalter(rest);
  else if(v === "schirm") out = tabs([["schirm","Spielleiterschirm"]], "schirm") + voll(folgt("Spielleiterschirm", 9));
  else if(v === "galerie") out = viewGalerie();
  else out = viewStart();
  if(out == null) return;
  var same = window.__lh === location.hash, y = scrollY; window.__lh = location.hash;
  APP.innerHTML = out; scrollTo(0, same ? y : 0);
  document.body.dataset.view = v;
  if(window.afterRender) afterRender();
}

/* ---------- Burger-Menü ---------- */
function mb(fn, txt, kbd, extra){ return '<button onclick="openMenu(false);' + fn + '">' + (extra || '') + '<span>' + txt + '</span>' + (kbd ? '<kbd>' + kbd + '</kbd>' : '') + '</button>'; }
function buildMenu(){
  var N = SP_NACH_BEREICHE;
  var nach = ["kurz","welt","regeln","klassen","spielleitung","mg","goetter","anhang"].map(function(k){ return mb("go('nach/" + k + "')", esc(N[k].t)); }).join("");
  var buecher = SP_BUECHER.map(function(g){ return g.items.map(function(b){
    var c = b.img ? IMG(b.img) : b.cover ? IMG("cover/" + b.id) : "";
    return mb("openBook('" + b.id + "',1)", esc(b.name) + (b.sub ? '<small>' + esc(b.sub) + '</small>' : ''), "", c ? '<img src="' + c + '" alt="">' : '<i class="ph"></i>');
  }).join(""); }).join("");
  document.getElementById("mmP").innerHTML =
    '<h3>Nachschlagen</h3>' + mb("go('start')", "Vorbereitung") + nach +
    '<h3>Werkzeuge</h3>' + mb("go('schirm')", "Spielleiterschirm", "s") + mb("wOpen()", "Würfel", "w") + mb("sOpen()", "Suche", "/") + mb("go('galerie')", "Galerie") + mb("charakterbogen()", "Charakterbogen") +
    '<h3>Bücher</h3>' + buecher + mb("modal(BV.settingsHTML())", "PDF hochladen …");
}
function openMenu(on){ if(on) buildMenu(); document.getElementById("mmB").classList.toggle("on", on); document.getElementById("mmP").classList.toggle("on", on); }

/* ---------- Buch-Knopf: Auswahl der drei Bücher ---------- */
function bookMenu(e){
  if(e) e.stopPropagation();
  var old = document.querySelector(".bdd"); if(old){ old.remove(); return; }
  var d = document.createElement("div"); d.className = "bdd";
  d.innerHTML = SP_BUECHER[0].items.map(function(b){ return '<button onclick="this.parentNode.remove();openBook(\'' + b.id + '\',1)"><b>' + esc(b.name) + '</b><small>' + esc(b.sub || "") + '</small></button>'; }).join("");
  document.body.appendChild(d);
  var r = (e && e.currentTarget ? e.currentTarget : document.querySelector(".topbar .bk")).getBoundingClientRect();
  d.style.top = (r.bottom + 6) + "px"; d.style.left = Math.max(8, Math.min(r.right - d.offsetWidth, innerWidth - d.offsetWidth - 8)) + "px";
}
document.addEventListener("click", function(e){ var d = document.querySelector(".bdd"); if(d && !d.contains(e.target)) d.remove(); });

/* ---------- Tasten ---------- */
document.addEventListener("keydown", function(e){
  if(/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "") || e.ctrlKey || e.metaKey || e.altKey) return;
  if(document.querySelector(".gi-ov")) return;
  if(e.key === "Escape"){ openMenu(false); document.querySelectorAll(".modal,.gzoom,.bdd").forEach(function(m){ m.remove(); }); if(window.wClose) wClose(); }
  else if(e.key === "h") document.body.classList.toggle("notop");
  else if(e.key === "b") foldSide();
  else if(e.key === "w" && window.wOpen) wOpen();
  else if(e.key === "/" && window.sOpen){ e.preventDefault(); sOpen(); }
  else if(e.key === "s") go("schirm");
});
