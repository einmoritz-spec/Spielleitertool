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
    case "h": return '<h3 class="h3">' + esc(b.x) + (b.p ? pgl(b.p, b.bl ? b.bl + " S. " + b.p : null, b.bk) : "") + "</h3>";
    case "ul": return '<ul class="lst">' + b.x.map(function(x){ return x && typeof x === "object" ? '<li style="list-style:none;margin-left:-4px">' + blk(x) + "</li>" : "<li>" + md(x) + "</li>"; }).join("") + "</ul>";
    case "kasten": return '<div class="schwarz">' + (b.h ? '<div class="lbl">' + esc(b.h) + "</div>" : "") + (b.b || [b.x]).map(blk).join("") + "</div>";
    case "werte": return '<div class="werte">' + b.z.map(function(z){ return '<div><span class="lbl">' + esc(z[0]) + "</span> " + md(z[1]) + "</div>"; }).join("") + "</div>";
    case "karten": return '<div class="kkarten' + (b.n ? " n" + b.n : "") + '">' + b.x.map(function(k){ return '<div class="kkarte"><div class="platte">' + esc(k.t) + "</div>" + k.b.map(blk).join("") + "</div>"; }).join("") + "</div>";
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
  if(X.kl){ var kin = '<div class="inh kl"><div class="blatt seite dicht">' + klasseHtml(X) + "</div></div>"; return head + unter + '<div class="bereich' + (side ? (zu ? " zu" : "") : " ohne") + '">' + rk + kin + "</div>"; }
  var inh = '<div class="inh"><div class="blatt seite dicht"><h1 class="h1">' + esc(X.t) + (X.p ? pgl(X.p, X.bl ? X.bl + " S. " + X.p : null, X.bk) : "") + "</h1>" + '<div class="flach">' + X.b.map(blk).join("") + "</div></div></div>";
  return head + unter + '<div class="bereich' + (side ? (zu ? " zu" : "") : " ohne") + '">' + rk + inh + "</div>";
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

/* ---------- Klassenseite: Diagonale (Figur + Name) · Intro · Kerneigenschaften · Fähigkeiten im Raster ---------- */
function fk(a){
  return '<div class="fk"><h4>' + esc(a[0]) + "</h4>" + (a[1] ? '<p class="kurs">' + md(a[1]) + "</p>" : "") + (a[2] ? "<p>" + md(a[2]) + "</p>" : "") +
    (a[3] ? '<ul class="sub">' + a[3].map(function(u){ return "<li><b>" + esc(u[0]) + ".</b> " + md(u[1]) + "</li>"; }).join("") + "</ul>" : "") + "</div>";
}
function klasseHtml(X){
  var K = X.kl, T = K.kern;
  var kt = '<div class="kt">' + T.map(function(r){
    if(r[0] === "h") return '<div><span class="lbl">' + esc(r[1]) + "</span></div>";
    if(r[0] === "w") return '<div><i>' + esc(r[1]) + "</i></div>";
    if(r[0] === "e") return '<div class="eins"><span>' + md(r[1]) + "</span><b>" + esc(r[2]) + "</b></div>";
    return "<div><span>" + (r[0] === "l" ? '<span class="lbl">' + esc(r[1]) + "</span> " : "") + md(r[0] === "l" ? (r[2] || "") : r[1]) + "</span>" + (r[0] === "x" ? "<b>" + esc(r[2]) + "</b>" : (r[0] === "l" && r[3] ? "<b>" + esc(r[3]) + "</b>" : "")) + "</div>";
  }).join("") + "</div>";
  var sec = function(t, L){ return L.length ? '<div class="abschnitt"><h2 class="h2">' + esc(t) + '</h2><div class="raster">' + L.map(fk).join("") + "</div></div>" : ""; };
  return '<div class="klz"><div class="diag"><div class="marmor"></div><img src="' + IMG("klasse/" + X.id) + '" alt=""><div class="name">' + esc(X.t) + '</div></div>' +
    '<div class="ktext"><div class="zeile"><div class="intro">' + K.intro.map(function(p){ return "<p>" + md(p) + "</p>"; }).join("") + "</div>" +
    '<div><h2 class="h2">Kerneigenschaften' + pgl(X.p + 1) + "</h2>" + kt + "</div></div>" +
    sec("Kernfähigkeiten", K.core) + sec("Kleine Fähigkeiten", K.klein) + sec("Große Fähigkeiten", K.gross) + sec("Zenith-Fähigkeiten", K.zenith) + (K.extra ? K.extra.map(function(e){ return '<div class="schwarz" style="margin-top:14px"><div class="lbl">' + esc(e[0]) + "</div><p>" + md(e[1]) + "</p></div>"; }).join("") : "") + "</div></div>";
}
/* ---------- Regelblatt-Overlay (Taste s): Regelübersicht S. 207 überall ---------- */
function regelblatt(){
  var C = HT_NACH.regeluebersicht; if(!C || !C.subs) return;
  var m = modal('<div class="blatt seite dicht regelblatt">' + C.subs.map(function(S){ return S.secs.map(function(x){ return '<h1 class="h1">' + esc(x.t) + '</h1><div class="flach">' + x.b.map(blk).join("") + "</div>"; }).join(""); }).join("") + "</div>");
  m.classList.add("blattmodal");
}
document.addEventListener("keydown", function(e){
  if(/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "") || e.ctrlKey || e.metaKey || e.altKey) return;
  if(e.key === "s"){ var o = document.querySelector(".blattmodal"); if(o){ o.remove(); } else if(!document.querySelector(".modal,.gzoom")) regelblatt(); e.preventDefault(); }
  if(e.key === "Escape"){ var q = document.querySelector(".blattmodal"); if(q) q.remove(); }
});
