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
function md(s){ return esc(s).replace(/\[\[(.+?)\]\]/g, '<span class="en">($1)</span>').replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\*(.+?)\*/g, "<i>$1</i>").replace(/\n/g, "<br>"); }
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
      case "dialog": return '<div class="dlg">' + b.x.map(function(z){ return z[0] ? '<p><b>' + esc(z[0]) + ':</b> ' + md(z[1]) + '</p>' : '<p class="reg">' + md(z[1]) + '</p>'; }).join("") + '</div>';
      case "bsp": return '<div class="zitat" style="border-color:var(--blau)">' + md(b.x) + "</div>";
      case "hw": return '<div class="hwk">' + b.x.map(function(k){ return edCard("hw", EID_CTX + ":" + edHash(k.x.slice(0, 40)), '<h4>' + esc(k.k) + '</h4><p>' + md(k.x) + '</p>'); }).join("") + '</div>';
      case "szenen": return '<div class="szk">' + b.x.map(function(x){ return edCard("sz", EID_CTX + ":" + edHash(x.slice(0, 40)), '<p>' + md(x) + '</p>'); }).join("") + '</div>';
      case "qa": return '<div class="qak">' + b.x.map(function(q){ return '<div class="qa"><b>' + md(q[0]) + '</b>' + q[1].split("\n\n").map(function(a){ return '<p>' + md(a) + '</p>'; }).join("") + '</div>'; }).join("") + '</div>';
      case "kk": return '<div class="hwk">' + b.x.map(function(k){ return '<div class="hw ort"><h4>' + esc(k.k) + pgl(k.p, "a1") + '</h4>' + k.x.split("\n\n").map(function(a){ return '<p>' + md(a) + '</p>'; }).join("") + '</div>'; }).join("") + '</div>';
      case "w10k": return '<div class="w10k">' + b.x.map(w10).join("") + '</div>';
      case "grp": return '<div class="grpk">' + b.x.map(function(g){ return '<div class="hw ort"><h4>' + esc(g.h) + '</h4><ul class="pkt">' + g.li.map(function(x){ return '<li>' + md(x) + '</li>'; }).join("") + '</ul></div>'; }).join("") + '</div>';
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
  return '<table class="tbl' + (!b.head && b.rows.length && b.rows[0].length === 2 ? ' kv' : '') + '">' + (b.head ? "<tr>" + b.head.map(function(h){ return "<th>" + esc(h) + "</th>"; }).join("") + "</tr>" : "") +
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

/* ---------- Kopfzeile und Unterleiste ---------- */
/* Welcher Kopfzeilen-Reiter und welcher Unterpunkt gehört zur aktuellen Route? (längster passender Präfix) */
function kopfOrt(){
  var h = (location.hash || "#start").slice(1), best = null, bl = -1;
  SP_KOPF.forEach(function(K){ K.sub.forEach(function(s){
    if((h === s[0] || h.indexOf(s[0] + "/") === 0) && s[0].length > bl){ best = {K:K, sub:s[0]}; bl = s[0].length; }
  }); });
  return best;
}
/* Unterleiste des aktiven Bereichs; ein Bereich mit nur einem Unterpunkt bekommt nur die Notiz-Feder */
function unterleiste(noteKey){
  var O = kopfOrt(); if(!O) return noteKey ? '<div class="tabs unter"><span class="sp"></span>' + stift(noteKey) + '</div>' : "";
  var L = O.K.sub.length > 1 ? O.K.sub : [];
  if(!L.length && !noteKey) return "";
  return '<div class="tabs unter">' + L.map(function(t){ return '<a class="' + (t[0] === O.sub ? 'on' : '') + '" onclick="go(\'' + t[0] + '\')">' + esc(t[1]) + '</a>'; }).join("") + '<span class="sp"></span>' + (noteKey ? stift(noteKey) : '') + '</div>';
}
function kopfTabs(){
  var el = document.getElementById("ktabs"); if(!el) return;
  var v = document.body.dataset.view, aus = v === "start" || v === "schirm", O = kopfOrt();
  el.innerHTML = aus ? "" : SP_KOPF.map(function(K){ return '<a class="' + (O && O.K === K ? 'on' : '') + '" onclick="go(\'' + K.sub[0][0] + '\')">' + esc(K.t) + '</a>'; }).join("");
  var u = document.querySelector("#app > .tabs");
  document.body.classList.toggle("mitunter", !!u);
  document.body.classList.toggle("anschluss", !!(u && O && u.classList.contains("unter")));
}
/* Eigene Leisten (Abenteuer, Galerie): L = [[route, Name], …]; nur Namen, keine Zahlen; Abenteuer mit Titel vorn */
var SP_AB_NAME = {snuff:"Snuff Out the Sun", kings:"The Kings of Silver", eidolon:"Eidolon Sky"};
function tabs(L, cur, noteKey){
  if(L.length < 2 && !noteKey) return "";
  var m = /^abenteuer\/([^/]+)/.exec(cur || ""), titel = m && SP_AB_NAME[m[1]] ? '<b class="atl" onclick="go(\'abenteuer/' + m[1] + '\')">' + esc(SP_AB_NAME[m[1]]) + '</b>' : '';
  return '<div class="tabs' + (titel ? ' ab' : '') + '">' + titel + L.map(function(t){ return '<a class="' + (t[0] === cur ? 'on' : '') + '" onclick="go(\'' + t[0] + '\')">' + esc(t[1]) + '</a>'; }).join("") + '<span class="sp"></span>' + (noteKey ? stift(noteKey) : '') + '</div>';
}
function spielTabs(cur){ return unterleiste(cur === "gegner" ? "" : "spiel:" + cur); }
function nachTabs(id){ return unterleiste("nach:" + id); }

/* ---------- Seitenleiste (einklappbar: ‹ und Taste b; bleibt beim Scrollen stehen) ---------- */
function lay(side, body, wirbel){
  return '<div class="wrap' + (ST.fold ? ' zu' : '') + '"><nav class="side"><span class="zu" onclick="foldSide()" title="Leiste einklappen (b)">‹</span>' + side + '</nav>' +
    '<span class="auf" onclick="foldSide()" title="Leiste ausklappen (b)">›</span>' +
    '<div class="main">' + (wirbel === false ? '' : '<img class="wirbel" src="img/deko/wirbel.webp" alt="">') + body + '</div></div>';
}
function voll(body, wirbel){ return '<div class="main voll">' + (wirbel === false ? '' : '<img class="wirbel" src="img/deko/wirbel.webp" alt="">') + body + '</div>'; }
function foldSide(){ ST.fold = !ST.fold; save(); var w = document.querySelector(".wrap"); if(w) w.classList.toggle("zu", !!ST.fold); }
function kurz(t){ return String(t).split(":")[0]; }
function jump(id){ var e = document.getElementById(id); if(!e) return; var y = e.getBoundingClientRect().top + scrollY - (document.body.classList.contains("notop") ? 0 : 56) - 62 - (document.querySelector(".subtabs") ? 38 : 0); scrollTo({top:y, behavior:"smooth"}); }

/* ---------- Startseite: Titelbild mit Revolution, Bereichs-Säulen (= Kopfzeilen-Reiter), Abenteuer, Bücher ---------- */
function spKlick(x){ return x.go ? "go('" + x.go + "')" : "openBook('" + x.buch + "',1)"; }
function viewStart(){
  var R = SP_REVOLUTION, rv = ST.rev || 0, last = ST.last || "";
  var saeulen = SP_KOPF.map(function(K){
    return '<div class="sp-sl"><button class="sp-sb" onclick="go(\'' + K.sub[0][0] + '\')" aria-label="' + esc(K.t) + '"><img src="' + IMG(K.img) + '" alt="" style="object-position:' + (K.pos || "center 30%") + '"></button><div class="sp-txt"><div class="sp-kopf">' + esc(K.t) + '</div>' +
      (K.sub.length > 1 ? '<ul>' + K.sub.map(function(t){ return '<li onclick="go(\'' + t[0] + '\')">' + esc(t[1]) + '</li>'; }).join("") + '</ul>' : '') + '</div></div>';
  }).join("");
  var ab = SP_START_ABENTEUER.map(function(x){
    return '<button class="sp-ab' + (x.go ? '' : ' pdf') + (x.go && last.indexOf(x.go) === 0 ? ' on' : '') + '" onclick="' + spKlick(x) + '"><span class="cv"><img src="' + IMG(x.img) + '" alt="" loading="lazy"></span><b>' + esc(x.t) + '</b><small>' + esc(x.s) + '</small></button>';
  }).join("");
  var bu = SP_START_BUECHER.map(function(x){
    return '<button class="sp-bu' + (x.go ? '' : ' pdf') + '" onclick="' + spKlick(x) + '" title="' + esc(x.t) + '">' +
      (x.img ? '<img src="' + IMG(x.img) + '" alt="" loading="lazy">' : '<span class="ph"><img src="../assets/logos/the-spire.webp" alt=""><i>' + esc(x.t) + '</i></span>') + '<b>' + esc(x.t) + '</b></button>';
  }).join("");
  return '<div class="sp-start">' +
    '<header class="sp-hero"><button class="sp-pult" onclick="puOpen()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><rect x="3.5" y="4.5" width="17" height="15" rx="1.5"/><path d="M9.5 4.5v15M15 4.5v15"/></svg><span>Spielleiter-Pult</span></button></header>' +
    '<section class="sp-saeulen">' + saeulen + '</section>' +
    '<section class="sp-band"><div class="sp-abk"><h2>Abenteuer</h2><div class="sp-abl">' + ab + '</div></div>' +
      '<div class="sp-buk"><h2>Bücher</h2><div class="sp-bul">' + bu + '</div></div></section>' +
  '</div>';
}
(window.SP_SUCHE = window.SP_SUCHE || []).push(function(add){
  SP_KACHELN.forEach(function(k){ add(k.t, "Nachschlagen", k.go, k.p, k.s, k.buch); });
  add("Revolution", "Spielleitung", "nach/spielleitung/revolution", SP_REVOLUTION.p, SP_REVOLUTION.stufen, "cmf");
});
function setRev(i){ ST.rev = i; save(); render(); }
function charakterbogen(){ go("bogen"); }

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
  else if(v === "galerie") out = viewGalerie();
  else out = viewStart();
  if(out == null) return;
  var same = window.__lh === location.hash, y = scrollY; window.__lh = location.hash;
  if(v !== "start" && out.indexOf('class="tabs') < 0 && out.indexOf('class="begl') < 0) out = unterleiste("") + out;
  APP.innerHTML = out; scrollTo(0, same ? y : 0);
  document.body.dataset.view = v;
  kopfTabs();
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
    '<h3>Nachschlagen</h3>' + mb("go('start')", "Startseite") + nach + mb("go('masken')", "Buch der Masken") +
    '<h3>Quellenbücher</h3>' + (window.SP_ERW_BOOKS || []).map(function(b){ return mb("go('buch/" + b.id + "')", esc(b.t) + '<small>' + esc(b.sub) + '</small>', "", '<img src="' + IMG("cover/" + b.bid) + '" alt="">'); }).join("") +
    '<h3>Werkzeuge</h3>' + mb("schirmOpen()", "Spielleiterschirm", "s") + mb("wOpen()", "Würfel", "w") + mb("sOpen()", "Suche", "/") + mb("go('galerie')", "Galerie") + mb("charakterbogen()", "Charakterbogen") +
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
  else if(e.key === "s" && window.schirmOpen) schirmOpen();
});

/* Seitenverweise nur dort, wo sie etwas bringen: Der erste Verweis einer Seite bleibt (meist in der Überschrift).
   Weitere Verweise auf dasselbe Buch entfallen, solange sie höchstens 3 Seiten vom zuletzt gezeigten entfernt sind. */
function pgAufraeumen(){
  var last = {}, ausn = ".side,.tabs,.topbar,.subtabs,.begl,.bfl,.modal,.bvx,.gal";
  Array.prototype.forEach.call(document.querySelectorAll(".pg"), function(a){
    if(a.closest(ausn)) return;
    var m = /openBook\('([^']+)',\s*(\d+)\)/.exec(a.getAttribute("onclick") || ""); if(!m) return;
    var b = m[1], n = +m[2];
    if(last[b] != null && Math.abs(n - last[b]) <= 3) a.remove(); else last[b] = n;
  });
}
window.addEventListener("load", function(){
  var o = window.render; if(!o || o.__pg) return;
  window.render = render = function(){ var r = o.apply(this, arguments); try{ pgAufraeumen(); }catch(e){} return r; };
  window.render.__pg = 1; try{ pgAufraeumen(); }catch(e){}
});
