/* Nachschlagen: Tab-Leiste (Kapitel) · Unterleiste (Bereiche) · Seitenleiste (Abschnitte) · Inhalt aus Blöcken.
   Daten: HT_NACH[id] = {t, p, subs:[{id, t, secs:[{id, t, p, b:[Blöcke]}]}]}  (Dateien js/data/nach-*.js) */
"use strict";
var HT_NACH = window.HT_NACH || {};
var HT_TABS = [["einfuehrung","Einführung"],["spielweise","Spielweise"],["charaktere","Charaktere"],["regeln","Regeln im Detail"],["spielleitung","Spielleitung"],["welt","Die Welt"],["regeluebersicht","Regelübersicht"]];
function tabsHtml(cur){
  var pen = !!((ST.notiz || {})[cur] || "").trim();
  return '<nav class="tabs">' + HT_TABS.map(function(t){ return '<a class="' + (t[0] === cur ? "on" : "") + '" onclick="go(\'nach/' + t[0] + '\')">' + t[1] + "</a>"; }).join("") + '<span class="sp"></span>' +
    '<button class="stift' + (pen ? " has" : "") + '" onclick="penOpen(\'' + cur + '\')" aria-label="Notizen" title="Notizen"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke-width="2" stroke-linejoin="round"><path d="M4 20h4L19 9l-4-4L4 16z"/></svg></button></nav>';
}
function penOpen(k){
  var m = modal('<textarea class="pennote" placeholder="Notizen …" oninput="ST.notiz=ST.notiz||{};ST.notiz[\'' + k + '\']=this.value;save()">' + esc((ST.notiz || {})[k] || "") + "</textarea>");
  setTimeout(function(){ var t = m.querySelector("textarea"); if(t) t.focus(); }, 30);
}
/* ---------- Blöcke ---------- */
function blk(b){
  if(typeof b === "string") return "<p>" + md(b) + "</p>";
  switch(b.t){
    case "p": return "<p" + (b.k ? ' class="kurs"' : "") + ">" + md(b.x) + "</p>";
    case "h": return '<h3 class="h3">' + esc(b.x) + (b.p ? pgl(b.p) : "") + "</h3>";
    case "ul": return '<ul class="lst">' + b.x.map(function(x){ return "<li>" + md(x) + "</li>"; }).join("") + "</ul>";
    case "kasten": return '<div class="schwarz">' + (b.h ? '<div class="lbl">' + esc(b.h) + "</div>" : "") + (b.b || [b.x]).map(blk).join("") + "</div>";
    case "werte": return '<div class="werte">' + b.z.map(function(z){ return '<div><span class="lbl">' + esc(z[0]) + "</span> " + md(z[1]) + "</div>"; }).join("") + "</div>";
    case "karten": return '<div class="kkarten">' + b.x.map(function(k){ return '<div class="kkarte"><div class="platte">' + esc(k.t) + "</div>" + k.b.map(blk).join("") + "</div>"; }).join("") + "</div>";
    case "grid": return '<div class="bgrid n' + (b.n || 2) + '">' + b.x.map(function(c){ return "<div>" + c.map(blk).join("") + "</div>"; }).join("") + "</div>";
    case "tab": return (b.h ? '<h3 class="h3">' + esc(b.h) + "</h3>" : "") + '<ol class="tab n' + (b.n || 2) + '">' + b.x.map(function(x){ return "<li>" + md(x) + "</li>"; }).join("") + "</ol>";
    case "img": return '<img class="bimg" src="' + IMG(b.src) + '" alt="" onclick="zoom(this.src)">';
    case "html": return b.x;
  }
  return "";
}
/* ---------- Ansicht ---------- */
VIEWS.nach = function(a){
  var cid = a[0] || "einfuehrung", C = HT_NACH[cid], tab = HT_TABS.filter(function(t){ return t[0] === cid; })[0];
  if(!tab){ return viewStart(); }
  var head = tabsHtml(cid);
  if(!C){ var kk = null; HT_INHALT.forEach(function(c){ c.forEach(function(x){ if(x.r === "nach/" + cid) kk = x; }); }); return head + '<div class="wrap"><div class="seite"><h1 class="h1">' + esc(tab[1]) + (kk ? pgl(kk.p) : "") + "</h1></div></div>"; }
  var sid = a[1] || C.subs[0].id, S = C.subs.filter(function(s){ return s.id === sid; })[0] || C.subs[0];
  var xid = a[2], X = null; S.secs.forEach(function(s){ if(s.id === xid) X = s; }); if(!X) X = S.secs[0];
  var unter = C.subs.length > 1 ? '<div class="unter">' + C.subs.map(function(s){ return '<a class="' + (s === S ? "on" : "") + '" onclick="go(\'nach/' + cid + "/" + s.id + '\')">' + esc(s.t) + "</a>"; }).join("") + "</div>" : "";
  var side = S.secs.length > 1, zu = !!ST.zu;
  var rk = side ? '<aside class="ruecken' + (zu ? " zu" : "") + '"><div class="vert">' + esc(S.t) + '</div><button class="zubtn" onclick="ruecken()" aria-label="Seitenleiste ein-/ausklappen">' + (zu ? "›" : "‹") + "</button><ul>" +
    S.secs.map(function(s){ return '<li class="' + (s === X ? "on" : "") + '" onclick="go(\'nach/' + cid + "/" + S.id + "/" + s.id + '\')">' + esc(kurz(s.t)) + "</li>"; }).join("") + "</ul></aside>" : "";
  var inh = '<div class="inh"><div class="blatt seite dicht"><h1 class="h1">' + esc(X.t) + (X.p ? pgl(X.p) : "") + "</h1>" + '<div class="flach">' + X.b.map(blk).join("") + "</div></div></div>";
  return head + unter + '<div class="bereich' + (side ? "" : " ohne") + (zu ? " zu" : "") + '">' + rk + inh + "</div>";
};
function ruecken(){ ST.zu = !ST.zu; save(); render(); }
document.addEventListener("keydown", function(e){
  if(/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "") || e.ctrlKey || e.metaKey || e.altKey || document.querySelector(".modal,.gzoom")) return;
  var h = (location.hash || "#start").slice(1).split("/"); if(h[0] !== "nach") return;
  var cid = h[1] || "einfuehrung", C = HT_NACH[cid];
  if(e.key === "ArrowLeft" || e.key === "ArrowRight"){
    var ix = -1; HT_TABS.forEach(function(t, i){ if(t[0] === cid) ix = i; });
    var n = HT_TABS[ix + (e.key === "ArrowRight" ? 1 : -1)]; if(n){ go("nach/" + n[0]); e.preventDefault(); }
  }
  if((e.key === "ArrowUp" || e.key === "ArrowDown") && C){
    var S = C.subs.filter(function(s){ return s.id === (h[2] || C.subs[0].id); })[0] || C.subs[0], i2 = 0;
    S.secs.forEach(function(s, i){ if(s.id === h[3]) i2 = i; });
    var m = S.secs[i2 + (e.key === "ArrowDown" ? 1 : -1)]; if(m){ go("nach/" + cid + "/" + S.id + "/" + m.id); e.preventDefault(); }
  }
  if(e.key === "[" ) ruecken();
});
