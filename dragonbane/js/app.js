/* DRAGONBANE – Spielleiter-Tafel. Hash-Routing:
   #start · #abenteuer · #a/<abenteuer>/<tab>[/<id>] · #n/<kapitel>[/<abschnitt>] · #gruppe[/<id>] · #galerie
   Weitere Ansichten melden sich über DB_VIEWS.<name> = function(h){ return html; } an. */
"use strict";
var APP = document.getElementById("app");
var DB_VIEWS = {};
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
/* einfaches Markup im Datentext: **fett**, *kursiv* */
function md(s){ return esc(s).replace(/§(.+?)§/g, '<span class="fs">$1</span>').replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\*(.+?)\*/g, "<i>$1</i>").replace(/\n/g, "<br>"); }
function IMG(p){ return "img/" + p + ".webp"; }
var ST = {};
function load(){ try{ ST = JSON.parse(localStorage.getItem("db_state_v1") || "{}") || {}; }catch(e){ ST = {}; } }
function save(){ try{ localStorage.setItem("db_state_v1", JSON.stringify(ST)); }catch(e){} }
load();
function go(h){ if(location.hash === "#" + h) render(); else location.hash = h; }
function openBook(id, p){ try{ BV.open(id || "db_rb", p || 1); }catch(e){} }
/* Seitenangabe: klein hinter dem Namen, öffnet das Original */
function pgl(p, txt, bk){ var n = parseInt(String(p || "").replace(/\D/g, ""), 10); return n ? '<span class="pg" onclick="event.stopPropagation();openBook(\'' + (bk || window.__bk || "db_rb") + '\',' + n + ')">' + (txt || "S. " + n) + '</span>' : ""; }
window.addEventListener("hashchange", function(){ render(); });
function slug(s){ return String(s).toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""); }
function kurz(t){ return String(t).split(":")[0]; }

/* ---------- Bausteine ---------- */
function zoom(src){ var d = document.createElement("div"); d.className = "gzoom"; d.onclick = function(){ d.remove(); }; d.innerHTML = '<img src="' + src + '" alt="">'; document.body.appendChild(d); }
function modal(html, wide){
  var m = document.createElement("div"); m.className = "modal" + (wide ? " wide" : "");
  m.innerHTML = "<div>" + html + "</div>";
  m.onclick = function(e){ if(e.target === m) m.remove(); };
  document.body.appendChild(m); return m;
}
var PEN = '<svg class="pen" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20h4L19 9l-4-4L4 16z"/></svg>';
function note(k){
  ST.notes = ST.notes || {};
  var m = modal('<textarea id="nt" style="width:min(640px,80vw);height:46vh;font:17px/1.5 var(--f-text);padding:10px;background:var(--zebra2);border:1px solid var(--linie)"></textarea><div class="fm2" style="margin-top:12px"><div class="act"><span></span><button class="knopf">Fertig</button></div></div>');
  var t = m.querySelector("textarea"); t.value = ST.notes[k] || ""; t.focus();
  var close = function(){ ST.notes[k] = t.value; save(); m.remove(); render(); };
  m.querySelector("button").onclick = close; m.onclick = function(e){ if(e.target === m) close(); };
}
/* Tab-Leiste: list = [[id, Name]], href(id) → Hash; right = HTML rechts (Zeit, Stift …) */
function tabs(list, cur, href, right){
  return '<div class="tabs' + (list.length >= 8 ? ' viel' : '') + '">' + list.map(function(t){ return '<a class="tab' + (t[0] === cur ? ' on' : '') + '" href="#' + href(t[0]) + '">' + esc(t[1]) + '</a>'; }).join("") + '<span class="sp"></span>' + (right || "") + '</div>';
}
function penTab(k){ return '<span class="stift' + (ST.notes && ST.notes[k] ? ' has' : '') + '" onclick="note(\'' + k + '\')" title="Notizen">' + PEN + '</span>'; }
/* Seitenleiste + Inhalt (sticky, einklappbar) */
function lay(side, body){
  return '<div class="lay' + (ST.fold ? ' fold-on' : '') + '">' + side + '<button class="fold" onclick="foldSide()">' + (ST.fold ? '›' : '‹') + '</button><div class="ct">' + body + '</div></div>';
}
function foldSide(){ ST.fold = !ST.fold; save(); render(); }

/* ---------- Startseite ---------- */
function kapHash(k, u){ return "n/" + k.id + (u ? "/" + u : ""); }
function kapKopf(k){ return k.kopf ? k.kopf : "Kapitel " + k.n; }
function viewStart(){
  var t = DB_KAP.filter(function(k){ return k.img; }).map(function(k){
    return '<div class="sk" onclick="go(\'' + kapHash(k) + '\')"><div class="bi"><img src="' + IMG(k.img) + '" alt=""></div>' +
      '<div class="kn">' + kapKopf(k) + pgl(k.p) + '</div><div class="kti">' + esc(k.t) + '</div></div>';
  }).join("");
  var zul = ST.last ? '<div class="zul" onclick="go(ST.last)">Zuletzt: <b>' + esc(ST.lastName || "") + '</b></div>' : "";
  return '<div class="sg"><div class="gk">' + t + '</div><div class="unten"><div class="fluegel" onclick="go(\'abenteuer\')"><div class="fl"></div><div class="fm"><span>Zu den Abenteuern</span></div><div class="fr"></div></div><div class="fluegel" onclick="go(\'arkand\')"><div class="fl"></div><div class="fm"><span>Arkand</span></div><div class="fr"></div></div>' + zul + '</div></div>';
}
/* Die Gruppe (Menü) */
function gruppe(){
  var grp = (ST.gruppe || []).map(function(c){
    var v = (DB_VOELKER.filter(function(x){ return x[0] === c.volk; })[0] || [0, ""])[1], b = (DB_BERUFE.filter(function(x){ return x[0] === c.beruf; })[0] || [0, ""])[1];
    return '<div class="chip" data-id="' + c.id + '">' + (c.beruf ? '<img class="fig" src="' + IMG("beruf/" + c.beruf) + '" alt="">' : '') + '<div><b>' + esc(c.name || "–") + '</b><span>' + esc(v) + (v && b ? " · " : "") + esc(b) + '</span></div></div>';
  }).join("");
  var m = modal('<div class="titel m" style="margin-bottom:14px">Die Gruppe</div><div class="grp">' + grp + '<div class="chip neu" data-id="">+</div></div>');
  m.querySelectorAll(".chip").forEach(function(c){ c.onclick = function(){ m.remove(); figur(c.dataset.id || undefined); }; });
}
/* Charakter der Gruppe anlegen / ändern */
function figur(id){
  ST.gruppe = ST.gruppe || [];
  var c = ST.gruppe.filter(function(x){ return x.id === id; })[0] || {id:"c" + Date.now(), name:"", volk:"mensch", beruf:"krieger", neu:1};
  var opt = function(L, v){ return L.map(function(x){ return '<option value="' + x[0] + '"' + (x[0] === v ? " selected" : "") + '>' + esc(x[1]) + '</option>'; }).join(""); };
  var m = modal('<div class="fm2"><label>Name<input id="cn" value="' + esc(c.name) + '"></label><label>Volk<select id="cv">' + opt(DB_VOELKER, c.volk) + '</select></label><label>Beruf<select id="cb">' + opt(DB_BERUFE, c.beruf) + '</select></label>' +
    '<div class="act">' + (c.neu ? '<span></span>' : '<button class="knopf leise" id="cx">Löschen</button>') + '<button class="knopf" id="co">Fertig</button></div></div>');
  m.querySelector("#cn").focus();
  m.querySelector("#co").onclick = function(){
    c.name = m.querySelector("#cn").value.trim(); c.volk = m.querySelector("#cv").value; c.beruf = m.querySelector("#cb").value;
    if(c.neu){ delete c.neu; ST.gruppe.push(c); } else { ST.gruppe = ST.gruppe.map(function(x){ return x.id === c.id ? c : x; }); }
    save(); m.remove(); render();
  };
  var x = m.querySelector("#cx"); if(x) x.onclick = function(){ ST.gruppe = ST.gruppe.filter(function(y){ return y.id !== c.id; }); save(); m.remove(); render(); };
}

/* ---------- Render ---------- */
function render(){
  var h = (location.hash || "#start").slice(1).split("/").map(decodeURIComponent), v = h[0] || "start", out;
  window.__fk = "einf"; window.__bk = "db_rb";
  var f = DB_VIEWS[v];
  out = f ? f(h) : viewStart();
  var same = window.__lh === location.hash, y = scrollY; window.__lh = location.hash;
  APP.innerHTML = out; scrollTo(0, same ? y : 0);
  if(window.afterRender) afterRender();
}
function buildMenu(){
  document.getElementById("mmP").innerHTML = '<button onclick="openMenu(false);go(\'start\')">Startseite</button>' +
    '<h3>Nachschlagen</h3>' + DB_KAP.map(function(k){ return '<button onclick="openMenu(false);go(\'' + kapHash(k) + '\')">' + esc((k.n ? k.n + ". " : "") + k.t) + '</button>'; }).join("") + '<button onclick="openMenu(false);go(\'abenteuer\')">Abenteuer</button><button onclick="openMenu(false);gruppe()">Die Gruppe</button>' +
    '<h3>Bücher</h3>' + DB_BUECHER.map(function(g){ return g.items.map(function(b){ return '<button onclick="openMenu(false);openBook(\'' + b.id + '\',1)">' + esc(b.name) + ' (' + b.lang + ')</button>'; }).join(""); }).join("") +
    '<button onclick="openMenu(false);modal(BV.settingsHTML())">PDF hochladen …</button>';
}
function openMenu(on){ if(on) buildMenu(); document.getElementById("mmB").classList.toggle("on", on); document.getElementById("mmP").classList.toggle("on", on); }
function overlays(){ return document.querySelectorAll(".modal,.gzoom"); }
/* Tasten: h Kopf aus/ein · b Seitenleiste · ←→ Tabs · ↑↓ Abschnitte · Esc zurück */
document.addEventListener("keydown", function(e){
  if(/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "") || e.ctrlKey || e.metaKey || e.altKey) return;
  if(document.getElementById("mmP").classList.contains("on") && e.key !== "Escape") return;
  if(e.key === "Escape"){
    if(document.getElementById("mmP").classList.contains("on")){ openMenu(false); return; }
    if(overlays().length){ overlays().forEach(function(m){ m.remove(); }); return; }
    if(location.hash && location.hash !== "#start") history.back();
    return;
  }
  if(e.key === "h") document.body.classList.toggle("notop");
  if(e.key === "b" && document.querySelector(".lay")) foldSide();
  if(e.key === "ArrowLeft" || e.key === "ArrowRight"){
    var t = [].slice.call(document.querySelectorAll(".tabs .tab")), i = t.findIndex(function(x){ return x.classList.contains("on"); });
    if(i >= 0){ var n = t[i + (e.key === "ArrowRight" ? 1 : -1)]; if(n){ e.preventDefault(); n.click(); } }
  }
  if(e.key === "ArrowUp" || e.key === "ArrowDown"){
    var s = [].slice.call(document.querySelectorAll(".side a")), j = s.findIndex(function(x){ return x.classList.contains("on"); });
    if(s.length){ var m = s[j + (e.key === "ArrowDown" ? 1 : -1)]; if(m){ e.preventDefault(); m.click(); } }
  }
});
