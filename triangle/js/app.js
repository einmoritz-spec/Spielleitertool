/* TRIANGLE AGENCY – Spielleiter-Tafel. Hash-Routing:
   #start · #h/<unterpunkt>/<abschnitt> · #ark/<anomalie|realitaet|kompetenz|fragebogen>/<id> · #w/<unterpunkt>/<abschnitt>
   · #pw/<code> · #e/<einsatz>/<reiter>  (Plan: plan/TRIANGLE_PLAN.md) */
"use strict";
var APP = document.getElementById("app");
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
function go(h){ if(location.hash === "#" + h) render(); else location.hash = h; }
function openBook(id, p){ try{ BV.open(id || "ta_core", p || 1); }catch(e){} }
function pgl(p, buch){ return p ? '<a class="pg" onclick="event.stopPropagation();openBook(\'' + (buch || "ta_core") + '\',' + p + ')">S. ' + p + '</a>' : ""; }
function IMG(p){ return "img/" + p + ".webp"; }
function Z(n){ return "img/zeichen/" + n + ".png"; }
var FARBE = {rot:"#c8202f", blau:"#2d50a7", gelb:"#eaa91c", tinte:"#2a1b45"};
var ST = {};
try{ ST = JSON.parse(localStorage.getItem("ta_state_v1") || "{}") || {}; }catch(e){ ST = {}; }
function save(){ try{ localStorage.setItem("ta_state_v1", JSON.stringify(ST)); }catch(e){} }
window.addEventListener("hashchange", function(){ render(); });
function area(id){ return TA_NAV.filter(function(a){ return a.id === id; })[0]; }
function einsatz(id){ return id === "space" ? TA_SPACE : TA_EINSATZ.filter(function(e){ return e.id === id; })[0]; }

/* ---------- Kopfzeile, Unterleiste ---------- */
function ktabs(r){
  document.getElementById("ktabs").innerHTML = (r === "start" || r === "e") ? "" : TA_NAV.map(function(a){
    return '<a class="' + (a.id === r ? "on" : "") + '" onclick="go(\'' + a.id + '\')">' + esc(a.t) + '</a>'; }).join("");
}
function unter(a, cur){
  if(!a || !a.sub.length) return "";
  return '<nav class="unter" data-unterleiste>' + a.sub.map(function(s){ return '<a class="' + (s.id === cur ? "on" : "") + '" onclick="go(\'' + a.id + '/' + s.id + '\')">' + esc(s.t) + '</a>'; }).join("") + '</nav>';
}
/* Seitenleiste: eine Ebene, ‹ am ersten Eintrag */
function lay(items, body){
  var side = "";
  if(items && items.length > 1){
    side = ST.fold ? '<button class="fold fx" onclick="foldSide()" title="Leiste ausklappen">›</button>' :
      '<nav class="side">' + items.map(function(x, i){ return '<a class="' + (x.on ? "on" : "") + '" onclick="go(\'' + x.go + '\')">' + (i === 0 ? '<button class="fold" onclick="event.stopPropagation();foldSide()" title="Leiste einklappen">‹</button>' : '') + esc(x.t) + '</a>'; }).join("") + '</nav>';
  }
  return '<div class="lay' + (side ? (ST.fold ? " zu" : "") : " solo") + '">' + side + '<div class="ct">' + body + '</div>' + '</div>';
}
function foldSide(){ ST.fold = !ST.fold; save(); render(); }

/* ---------- Startseite ---------- */
function viewStart(){
  var akten = TA_NAV.filter(function(a){ return a.lang; }).map(function(a){
    var liste = a.id === "pw" ? [["pw","Code eingeben"],["pw/A1","Einsatzbericht A1"]] :
      a.sub.map(function(s){ return [a.id + "/" + s.id, s.t]; });
    var deko = a.id === "h" ? '<img src="' + Z("symbol-handbuch") + '" alt="">' : a.id === "w" ? '<em>Sehr gut, Idiot.</em><u></u>' : '<i class="g"></i><i class="b"></i><i class="r"></i>';
    return '<section class="akte a-' + a.id + '" style="--c:' + FARBE[a.c] + '"><a class="bild" onclick="go(\'' + a.id + '\')">' + deko + '<h2>' + esc(a.lang).replace("\n", "<br>") + '</h2></a>' +
      '<nav>' + liste.map(function(x){ return '<a onclick="go(\'' + x[0] + '\')">' + esc(x[1]) + '</a>'; }).join("") + '</nav></section>';
  }).join("");
  var ark = ["anomalie","realitaet","kompetenz"].map(function(k){ var A = TA_ARK[k];
    return '<section style="--c:' + FARBE[A.c] + '"><h3 onclick="go(\'ark/' + k + '\')"><u>' + A.t.charAt(0) + '</u>' + esc(A.t.slice(1).toUpperCase()) + '</h3><div class="g9">' +
      A.x.map(function(x){ return '<a onclick="go(\'ark/' + k + '/' + x[0] + '\')"><i style="background-image:url(img/regeln/thumb/' + A.bild + '-' + x[0] + '.webp)"></i><span>' + esc(x[1]) + '</span></a>'; }).join("") + '</div></section>';
  }).join("");
  var strip = TA_EINSATZ.map(function(e){
    return '<a style="--c:' + e.c + ';background-image:url(' + IMG(e.img) + ')" onclick="go(\'e/' + e.id + '\')"><em>' + ("0" + e.n).slice(-2) + '</em><span><b>' + esc(e.t) + '</b>' + (e.de !== e.t ? '<small>' + esc(e.de) + '</small>' : '') + '</span></a>'; }).join("");
  return '<div class="hero"><img class="wort" src="' + Z("logo-triangle-agency") + '" alt="Triangle Agency"></div>' +
    '<div class="akten">' + akten + '</div><div class="arc">' + ark + '</div>' +
    '<div class="vault"><header><img src="' + Z("logo-the-vault") + '" alt="The Vault" onclick="go(\'e/vault\')" style="cursor:pointer"></header><div class="strip">' + strip + '</div>' +
    '<a class="space" onclick="go(\'e/space\')"><span><b>You’re in Space<br>and Everything’s</b><mark>perfectly fine.</mark></span><small>' + esc(TA_SPACE.de) + '</small></a></div>';
}

/* ---------- Handbuch und Werkzeug: Leseseiten ---------- */
window.TA_TEXT = window.TA_TEXT || {};
function viewLesen(a, subId, secId){
  var s = a.sub.filter(function(x){ return x.id === subId; })[0] || a.sub[0];
  var sec = s.s.filter(function(x){ return x[0] === secId; })[0] || s.s[0];
  var items = s.s.map(function(x){ return {t:x[1].split(":")[0], go:a.id + "/" + s.id + "/" + x[0], on:x === sec}; });
  var T = TA_TEXT[a.id + "/" + s.id + "/" + sec[0]];
  var body = '<article class="lesen' + (a.id === "w" ? " werk" : "") + '"><h1>' + esc(sec[1]) + pgl(sec[2]) + '</h1>' + (T ? (typeof T === "string" ? T : taB(T)) : '<div class="leer" onclick="openBook(\'ta_core\',' + sec[2] + ')"><img src="' + Z(a.id === "w" ? "symbol-zahnrad-toolkit" : "symbol-handbuch") + '" alt=""></div>') + '</article>';
  return unter(a, s.id) + lay(items, body);
}

/* ---------- ARK ---------- */
/* Vorspann der ARK-Teile (S. 56–59, 78–79, 98–99): unter den Kacheln */
function taVor(kat){
  var v = TA_TEXT["ark/vor/" + kat], arc = kat === "anomalie" ? TA_TEXT["ark/vor/arc"] : null;
  return (v || arc) ? '<article class="lesen arkvor">' + (v ? taB(v) : '') + (arc ? taB(arc) : '') + '</article>' : '';
}
function viewArk(kat, id){
  var a = area("ark"); kat = kat || "anomalie";
  if(kat === "fragebogen") return viewLesen(a, "fragebogen");
  var A = TA_ARK[kat] || TA_ARK.anomalie, x = A.x.filter(function(q){ return q[0] === id; })[0];
  if(!x) return unter(a, kat) + '<div class="ct arkwahl" style="--c:' + FARBE[A.c] + '"><div class="g9 gross">' + A.x.map(function(q){
    return '<a onclick="go(\'ark/' + kat + '/' + q[0] + '\')"><i style="background-image:url(' + IMG("regeln/full/" + A.bild + "-" + q[0]) + ')"></i><span>' + esc(q[1]) + '</span></a>'; }).join("") + '</div>' + taVor(kat) + '</div>';
  var items = A.x.map(function(q){ return {t:q[1], go:"ark/" + kat + "/" + q[0], on:q === x}; });
  var T = TA_TEXT["ark/" + kat + "/" + x[0]] || {};
  var body = '<article class="arkd lesen k-' + kat + '"><div class="links"><h1 style="font-size:min(112px,7.6vw,' + (60 / x[1].length).toFixed(1) + 'vw)">' + esc(x[1]) + '</h1><div class="wm"><u>' + A.t.charAt(0) + '</u>' + esc(A.t.slice(1).toUpperCase()) + pgl(x[2]) + '</div>' +
    '<img class="art" src="' + IMG("regeln/full/" + A.bild + "-" + x[0]) + '" alt="" onclick="zoom(this.src)">' + (T.motto ? '<h2 class="motto">' + tx(T.motto) + '</h2>' : '') + (T.l ? '<div class="besch' + (T.blass ? ' blass" onclick="this.classList.toggle(\'da\')' : '') + '">' + taB(T.l) + '</div>' : '') + '</div>' +
    '<div class="rechts">' + (T.r ? taB(T.r) : '') + '</div></article>';
  return unter(a, kat) + lay(items, body);
}

/* ---------- Playwall: Codefeld (Dokumente folgen), öffnet bis dahin die Buchseite ---------- */
function pwSel(code){ ST.pwBuch = code.charAt(0); ST.pw = ST.pw || {}; ST.pw[code] = 1; save(); go("pw/" + code); }
function viewPw(code){
  var B = (code || "").charAt(0) || ST.pwBuch || "A", nr = (code || "").slice(1);
  var ks = Object.keys(TA_PW), buch = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var nums = ks.filter(function(k){ return k.charAt(0) === B; }).map(function(k){ return k.slice(1); }).sort(function(a, b){ return (a === "?" ? 1.5 : +a) - (b === "?" ? 1.5 : +b); });
  var frei = Object.keys(ST.pw || {}).sort(function(a, b){ return a.charAt(0) === b.charAt(0) ? a.slice(1) - b.slice(1) : a < b ? -1 : 1; });
  var p = TA_PW[code];
  var links = '<div class="term"><button class="pwauge' + (ST.pwOffen ? " on" : "") + '" onclick="ST.pwOffen=ST.pwOffen?0:1;save();render()" title="' + (ST.pwOffen ? "Alles offen – zurück zu „Wie im Buch“" : "Wie im Buch – alles offen zeigen") + '">' + (ST.pwOffen ? '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 12S5.5 5 12 5s10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12z"/><circle cx="12" cy="12" r="3"/></svg>' : '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 12S5.5 5 12 5s10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12z"/><circle cx="12" cy="12" r="3"/><path d="M3 3l18 18"/></svg>') + '</button><button class="fold" onclick="foldSide()" title="' + (ST.fold ? "Leiste ausklappen" : "Leiste einklappen") + '">' + (ST.fold ? "›" : "‹") + '</button><div class="halt"><img src="' + Z("symbol-halt-hand") + '" alt="">WARTE!</div>' +
    '<div class="code"><b>' + B + '</b><b>' + (nr || "") + '</b></div>' +
    '<div class="bu">' + buch.map(function(c){ return '<a class="' + (c === B ? "on" : "") + '" onclick="ST.pwBuch=\'' + c + '\';save();go(\'pw/' + c + '\')">' + c + '</a>'; }).join("") + '</div>' +
    '<div class="nu' + (ST.pwOffen ? " liste" : "") + '">' + nums.map(function(n){ var d = (window.TA_PWT || {})[B + n]; return '<a class="' + (String(n) === nr ? "on" : (ST.pw || {})[B + n] ? "frei" : "") + '" onclick="pwSel(\'' + B + n + '\')"><b>' + n + '</b>' + (ST.pwOffen ? '<span>' + esc(d && d.t || "") + '</span>' : '') + '</a>'; }).join("") + '</div>' +
    (frei.length && !ST.pwOffen ? '<div class="fr"><h4>Freigegeben</h4>' + frei.map(function(c){ return '<a onclick="go(\'pw/' + c + '\')">' + c + '</a>'; }).join("") + '</div>' : '') + '</div>';
  var dok = pwDok(code, p);
  return '<div class="pwrap' + (ST.fold ? " zu" : "") + '">' + links + dok + '</div>';
}

/* ---------- Einsätze: Kopf (Leitstand folgt je Einsatz) ---------- */
function viewEinsatz(id){
  var E = einsatz(id); if(!E) return viewStart();
  var buch = id === "space" ? "ta_space" : "ta_vault";
  var bild = E.img ? '<img class="tb" src="' + IMG(E.img) + '" alt="" onclick="zoom(this.src)">' : '<div class="tb sp"></div>';
  return '<div class="ekopf" style="--c:' + E.c + '">' + bild + '<div><h1>' + esc(E.t) + '</h1>' + (E.de !== E.t ? '<p class="de">' + esc(E.de) + '</p>' : '') +
    '<p class="von">' + esc(E.von) + pgl(E.p, buch) + '</p></div></div>';
}

/* ---------- Render ---------- */
function zoom(src){ var d = document.createElement("div"); d.className = "gzoom"; d.onclick = function(){ d.remove(); }; d.innerHTML = '<img src="' + src + '" alt="">'; document.body.appendChild(d); }
function akz(c){ document.documentElement.style.setProperty("--akz", c); var m = document.querySelector('meta[name="theme-color"]'); if(m) m.content = c; }
function render(){
  var h = (location.hash || "#start").slice(1).split("/").map(decodeURIComponent), r = h[0] || "start", out;
  var a = area(r);
  document.body.className = document.body.className.replace(/\b(start|b-\w+|vault-e|ve-[\w-]+)\b/g, "").trim(); window.VCTX = null;
  document.body.classList.add(r === "start" ? "start" : "b-" + r);
  if(r === "h" || r === "w"){ akz(FARBE[a.c]); out = viewLesen(a, h[1], h[2]); }
  else if(r === "ark"){ var k = TA_ARK[h[1]] ? h[1] : (h[1] === "fragebogen" ? "fragebogen" : "anomalie"); akz(FARBE[k === "fragebogen" ? "rot" : TA_ARK[k].c]); out = viewArk(k, h[2]); }
  else if(r === "pw"){ akz(FARBE.tinte); out = viewPw(h[1]); }
  else if(r === "e"){ var E = einsatz(h[1]); akz(E ? E.c : h[1] === "vault" ? "#17111f" : FARBE.rot); out = h[1] === "vault" ? viewVaultIntro() : (h[1] !== "space" && window.viewVault) ? viewVault(h[1], h[2], h[3]) : viewEinsatz(h[1]); }
  else { r = "start"; document.body.classList.add("start"); akz(FARBE.rot); out = viewStart(); }
  ktabs(r);
  var same = window.__lh === location.hash, y = window.scrollY; window.__lh = location.hash;
  APP.innerHTML = out; window.scrollTo(0, same ? y : 0);
}
window.gmBook = function(){
  var r = (location.hash || "").slice(1).split("/"), e = r[0] === "e";
  var B = [{name:"Triangle Agency", sub:"Regelbuch", open:function(){ openBook("ta_core", 1); }}, {name:"The Vault", sub:"12 Einsätze", open:function(){ openBook("ta_vault", 1); }}, {name:"You’re in Space", sub:"Einsatz", open:function(){ openBook("ta_space", 1); }}];
  return {name:e ? (r[1] === "space" ? "You’re in Space" : "The Vault") : "Triangle Agency", books:B};
};

/* ---------- Menü ---------- */
function openMenu(on){
  var P = document.getElementById("mmP");
  if(on) P.innerHTML = '<button onclick="openMenu(false);go(\'start\')">Startseite</button>' +
    TA_NAV.map(function(a){ return '<button onclick="openMenu(false);go(\'' + a.id + '\')">' + esc(a.t) + '</button>'; }).join("") +
    '<h3>Einsätze</h3>' + TA_EINSATZ.concat([TA_SPACE]).map(function(e){ return '<button onclick="openMenu(false);go(\'e/' + e.id + '\')">' + esc(e.t) + '</button>'; }).join("") +
    '<h3>Bücher</h3>' + TA_BUECHER.map(function(g){ return g.items.map(function(b){ return '<button onclick="openMenu(false);openBook(\'' + b.id + '\',1)">' + esc(b.name) + '</button>'; }).join(""); }).join("") +
    '<button onclick="openMenu(false);pdfs()">PDF hochladen …</button>';
  P.classList.toggle("on", !!on); document.getElementById("mmB").classList.toggle("on", !!on);
}
function pdfs(){ var m = document.createElement("div"); m.className = "modal"; m.innerHTML = '<div>' + BV.settingsHTML() + '</div>'; m.onclick = function(e){ if(e.target === m) m.remove(); }; document.body.appendChild(m); }
document.addEventListener("keydown", function(e){
  var t = e.target || {}; if(/INPUT|TEXTAREA|SELECT/.test(t.tagName || "") || e.ctrlKey || e.metaKey || e.altKey) return;
  if(e.key === "Escape"){
    var offen = document.querySelectorAll(".modal,.gzoom,.mm-panel.on,.gi-ov,.gal,.gs-ov,.bv-open,.tm-dd");
    openMenu(false); document.querySelectorAll(".modal,.gzoom").forEach(function(m){ m.remove(); });
    /* nichts offen: eine Ebene zurück (Abschnitt → Bereich → Startseite) */
    if(!offen.length && !e.defaultPrevented){ var q = (location.hash || "#start").slice(1).split("/"); if(q[0] !== "start"){ q.pop(); go(q.length && (q.length > 1 || q[0] === "pw" || q[0] === "ark") && q.join("/") !== (location.hash || "").slice(1) ? q.join("/") : "start"); } }
  }
  if(e.key === "h" && !document.querySelector(".gs-ov,.gal,.bv-open,.modal")){ document.body.classList.toggle("notop"); return; }
  /* Playwall: Code tippen (Buchstabe, dann Zahl) */
  if(/^#pw/.test(location.hash) && !document.querySelector(".gs-ov,.gal,.bv-open")){
    var c = (location.hash.split("/")[1] || ST.pwBuch || "A");
    if(/^[a-zA-Z]$/.test(e.key) && !/^[fhm]$/.test(e.key)){ ST.pwBuch = e.key.toUpperCase(); save(); go("pw/" + ST.pwBuch); }
    else if(/^\d$/.test(e.key)){ var n = c.slice(1) + e.key; if(!TA_PW[c.charAt(0) + n]) n = e.key; if(TA_PW[c.charAt(0) + n]) pwSel(c.charAt(0) + n); }
  }
});
