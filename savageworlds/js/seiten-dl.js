/* DEADLANDS: THE WEIRD WEST – eigener Unterbereich (#dl[/<reiter>[/<unterpunkt>]]).
   Daten: js/data/dl-*.js tragen Seiten in DLD["reiter/unterpunkt"] = {t, pg, secs:[{id,t,pg,b:[Blöcke]}]} ein.
   Blöcke: {p} Absatz · {h} Zwischenüberschrift · {ul} Liste · {cards:[{n,s,tag,pg,b,k}],c} Karten · {table:{cols,rows,n}} · {box:{t,b}} Kasten · {html}
   Buch: sw_dl, PDF-Seite = Buchseite + 2. */
"use strict";
var DLD = window.DLD = window.DLD || {};
var DLTABS = [
 {id:"welt", t:"Die Welt", img:"welt", subs:[["ueberblick","Überblick"],["leben","Leben im Weird West"],["orte","Orte"],["organisationen","Organisationen"],["reckoners","Die Reckoners"]]},
 {id:"charaktere", t:"Charaktere", img:"charaktere", subs:[["konzepte","Konzepte & Erschaffung"],["handicaps","Handicaps"],["talente","Talente"]]},
 {id:"maechte", t:"Mächte", img:"maechte", subs:[["blessed","Blessed"],["chi","Chi Master"],["harrowed","Harrowed"],["huckster","Hucksters"],["scientist","Mad Scientists"],["shaman","Shamanen"],["neu","Neue Mächte"]]},
 {id:"ausruestung", t:"Ausrüstung", img:"ausruestung", subs:[["allgemein","Ausrüstung"],["waffen","Waffen"],["geraete","Infernale Gerätschaften"]]},
 {id:"bestiarium", t:"Bestiarium", img:"bestiarium", subs:[["fertigkeit","Monströse Fähigkeiten"],["gesindel","Gesindel"],["viehzeug","Viehzeug"],["kreaturen","Kreaturen"]]},
 {id:"spielleitung", t:"Spielleitung", img:"spielleitung", subs:[["regeln","Setting-Regeln"],["marshal","Marshal-Regeln"],["furcht","Furcht"],["begegnungen","Begegnungen"]]}
];
var DLS = {open:{}};
function dlBk(p){ return "openBook('sw_dl'," + (p + 2) + ")"; }
function dlPg(p){ return p ? '<span class="pg" onclick="event.stopPropagation();' + dlBk(p) + '">S. ' + p + "</span>" : ""; }
function dlN(x){ return esc(x).replace(/ß/g, "ss").replace(/'/g, "’").replace(/\u2212/g, "\u2013"); }
function dlI(t){ /* Text: **fett** */
  return esc(t).replace(/\u2212/g, "\u2013").replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
}
function dlP(t){ return '<p class="dp">' + dlI(t) + "</p>"; }
function dlTbl(T){
  var n = T.n || [];
  return '<div class="dtw"><table class="dt">' + (T.cap ? "<caption>" + dlN(T.cap) + "</caption>" : "") + "<thead><tr>" + T.cols.map(function(c, i){ return "<th" + (n.indexOf(i) > -1 ? ' class="n"' : "") + ">" + esc(c) + "</th>"; }).join("") + "</tr></thead><tbody>" + T.rows.map(function(r){
    if(typeof r === "string") return '<tr class="gr"><td colspan="' + T.cols.length + '">' + esc(r) + "</td></tr>";
    return "<tr>" + r.map(function(c, i){ return "<td" + (n.indexOf(i) > -1 ? ' class="n"' : "") + ">" + dlI(c) + "</td>"; }).join("") + "</tr>";
  }).join("") + "</tbody></table></div>";
}
function dlCards(B, base){
  return '<div class="dcg c' + (B.c || 3) + '">' + B.cards.map(function(c, i){
    var id = base + "." + i;
    var body = (c.k ? '<dl class="dk">' + c.k.map(function(k){ return "<dt>" + esc(k[0]) + "</dt><dd>" + dlI(k[1]) + "</dd>"; }).join("") + "</dl>" : "") + (c.b || []).map(dlP).join("") + (c.t ? dlTbl(c.t) : "");
    return '<div class="dc' + (c.tag ? " tg-" + c.tag[0] : "") + (DLS.open[id] ? " open" : "") + '" onclick="dlTog(this,\'' + id + '\')"><b>' + dlN(c.n) + (c.tag ? '<i class="dq">' + esc(c.tag[1]) + "</i>" : "") + dlPg(c.pg) + "</b>" + (c.s ? "<small>" + dlI(c.s) + "</small>" : "") + '<div class="dcb" onclick="event.stopPropagation()">' + body + "</div></div>";
  }).join("") + "</div>";
}
function dlTog(el, id){ var o = el.classList.toggle("open"); DLS.open[id] = o ? 1 : 0; }
function dlBlock(b, base){
  if(b.p) return dlP(b.p);
  if(b.h) return '<h4 class="dh">' + dlN(b.h) + (b.pg ? dlPg(b.pg) : "") + "</h4>";
  if(b.ul) return '<ul class="dul">' + b.ul.map(function(x){ return "<li>" + dlI(x) + "</li>"; }).join("") + "</ul>";
  if(b.cards) return dlCards(b, base);
  if(b.table) return dlTbl(b.table);
  if(b.box) return '<div class="dbox"><h5>' + dlN(b.box.t) + (b.box.pg ? dlPg(b.box.pg) : "") + "</h5>" + (b.box.b || []).map(dlP).join("") + "</div>";
  if(b.html) return b.html;
  if(b.fn) return b.fn();
  return "";
}
function dlRoute(){ var r = route(); return {tab:r.b, sub:r.c}; }
function dlTab(id){ return DLTABS.filter(function(t){ return t.id === id; })[0]; }
function dlRender(){
  var r = dlRoute(), tab = dlTab(r.tab);
  document.title = "Deadlands – Savage Worlds";
  KT.innerHTML = DLTABS.map(function(t){ return '<a class="' + (tab && tab.id === t.id ? "on" : "") + '" onclick="go(\'dl/' + t.id + '\')">' + dlN(t.t) + "</a>"; }).join("");
  if(!tab){ SUB.className = "sub"; SUB.innerHTML = ""; return dlStart(); }
  var sid = r.sub || tab.subs[0][0];
  SUB.className = "sub on";
  SUB.innerHTML = tab.subs.map(function(s){ return '<a class="' + (s[0] === sid ? "on" : "") + '" onclick="go(\'dl/' + tab.id + "/" + s[0] + '\')">' + dlN(s[1]) + "</a>"; }).join("");
  var key = tab.id + "/" + sid, sub = tab.subs.filter(function(s){ return s[0] === sid; })[0] || tab.subs[0];
  var D = DLD[key];
  if(typeof D === "function") D = D();
  if(!D) D = {secs:[]};
  var secs = (D.secs || []).filter(function(s){ return s.b && s.b.length; });
  var side = "";
  if(secs.length > 1) side = '<aside class="side"><button class="fold" onclick="foldSide()" aria-label="Seitenleiste">‹</button>' + secs.map(function(s, i){
    return '<a data-s="s' + i + '" class="' + (i ? "" : "on") + '" onclick="dlGo(\'s' + i + '\')">' + dlN(s.t) + "</a>";
  }).join("") + "</aside>";
  var body = secs.map(function(s, i){
    return '<section class="dsec" id="s' + i + '"><h3 class="dh1">' + dlN(s.t) + (s.pg ? dlPg(s.pg) : "") + "</h3>" + s.b.map(function(b, j){ return dlBlock(b, key + "." + i + "." + j); }).join("") + "</section>";
  }).join("");
  APP.innerHTML = '<div class="lay dlay' + (side && ST.fold ? " fold-on" : "") + (side ? "" : " noside") + '" id="lay">' + side + '<main class="ct"><h2>' + dlN(D.t || sub[1]) + (D.pg ? dlPg(D.pg) : "") + "</h2>" + (D.intro ? dlP(D.intro) : "") + (body || '<div class="soon">Inhalt folgt.</div>') + "</main></div>";
  window.scrollTo(0, 0);
  dlSpy();
}
function dlGo(id){ var e = document.getElementById(id); if(e) e.scrollIntoView({behavior:"smooth", block:"start"}); }
var dlSpyOn = 0;
function dlSpy(){
  if(dlSpyOn) return; dlSpyOn = 1;
  window.addEventListener("scroll", function(){
    if(!document.body.classList.contains("dl-mode")) return;
    var S = document.querySelectorAll(".dsec"), a = null;
    for(var i = 0; i < S.length; i++){ if(S[i].getBoundingClientRect().top < 160) a = S[i].id; }
    if(!a && S.length) a = S[0].id;
    document.querySelectorAll(".dlay .side a").forEach(function(x){ x.classList.toggle("on", x.getAttribute("data-s") === a); });
  }, {passive:true});
}
function dlStart(){
  var st = DLTABS.map(function(t){
    var D0 = t.subs.map(function(s){ return '<a onclick="event.stopPropagation();go(\'dl/' + t.id + "/" + s[0] + '\')">' + dlN(s[1]) + "</a>"; }).join("");
    return '<div class="dtile" onclick="go(\'dl/' + t.id + '\')"><div class="dim"><img loading="lazy" src="img/dl/' + t.img + '.webp" alt=""></div><h3>' + dlN(t.t) + '</h3><div class="dls">' + D0 + "</div></div>";
  }).join("");
  APP.innerHTML = '<div class="dst"><div class="dhero"><a class="dback" onclick="go(\'start\')">‹ Savage Worlds</a><img class="dlogo" src="img/dl/logo.webp" alt="Deadlands"><p>The Weird West</p><i class="dstar"></i></div><div class="dgrid">' + st + "</div></div>";
  window.scrollTo(0, 0);
}
function dlIn(){ return document.body.classList.contains("dl-mode"); }
function dlStep(d, tabs){
  var r = dlRoute(), tab = dlTab(r.tab); if(!tab) return;
  if(tabs){ var i = DLTABS.indexOf(tab) + d; if(i >= 0 && i < DLTABS.length) go("dl/" + DLTABS[i].id); return; }
  var sid = r.sub || tab.subs[0][0], j = 0; tab.subs.forEach(function(s, k){ if(s[0] === sid) j = k; });
  j += d; if(j >= 0 && j < tab.subs.length) go("dl/" + tab.id + "/" + tab.subs[j][0]);
}
document.addEventListener("keydown", function(e){
  if(!dlIn()) return;
  var t = e.target || {}; if(/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName || "") || e.metaKey || e.altKey || document.querySelector(".modal,.dsr")) return;
  if(e.key === "ArrowLeft" || e.key === "ArrowRight"){ e.preventDefault(); dlStep(e.key === "ArrowLeft" ? -1 : 1, e.ctrlKey); }
  else if(e.key === "Escape"){ var r = dlRoute(); if(r.sub || r.tab && r.sub === "" && 0) go("dl/" + r.tab); else if(r.tab) go("dl"); else go("start"); }
});
/* Suche (f): durchsucht alle Deadlands-Inhalte */
function dlText(x){
  if(x == null) return "";
  if(typeof x === "string") return x;
  if(Array.isArray(x)) return x.map(dlText).join(" ");
  if(typeof x === "object") return Object.keys(x).map(function(k){ return k === "fn" ? "" : dlText(x[k]); }).join(" ");
  return "";
}
function dlSearch(){
  var old = document.querySelector(".dsr"); if(old){ old.remove(); return; }
  var o = document.createElement("div"); o.className = "dsr";
  o.innerHTML = '<div class="dsb"><input id="dsi" placeholder="Suchen …" autocomplete="off"><div id="dso"></div></div>';
  o.onclick = function(e){ if(e.target === o) o.remove(); };
  document.body.appendChild(o);
  var inp = o.querySelector("input"), out = o.querySelector("#dso");
  inp.focus();
  inp.addEventListener("keydown", function(e){ if(e.key === "Escape"){ e.stopPropagation(); o.remove(); } });
  inp.addEventListener("input", function(){
    var q = inp.value.trim().toLowerCase(); if(q.length < 2){ out.innerHTML = ""; return; }
    var res = [];
    DLTABS.forEach(function(t){ t.subs.forEach(function(s){
      var D = DLD[t.id + "/" + s[0]]; if(typeof D === "function") D = D(); if(!D) return;
      (D.secs || []).forEach(function(sec, si){
        var tx = dlText(sec.b), nmx = sec.t || "";
        var all = (nmx + " " + tx), k = all.toLowerCase().indexOf(q);
        if(k > -1){ var st = Math.max(0, k - 40); res.push({h:"dl/" + t.id + "/" + s[0], a:t.t + " › " + s[1] + " › " + nmx, x:all.slice(st, st + 110), i:si, nameHit:nmx.toLowerCase().indexOf(q) > -1}); }
      });
    }); });
    res.sort(function(a, b){ return (b.nameHit ? 1 : 0) - (a.nameHit ? 1 : 0); });
    out.innerHTML = res.slice(0, 40).map(function(r){ return '<a onclick="document.querySelector(\'.dsr\').remove();go(\'' + r.h + '\');setTimeout(function(){dlGo(\'s' + r.i + '\')},60)"><b>' + esc(r.a) + "</b><small>" + esc(r.x) + "</small></a>"; }).join("") || '<div class="soon">Nichts gefunden.</div>';
  });
}
window.sucheOpen = function(){ if(dlIn()) dlSearch(); else { try{ BV.open("sw_de", 1); }catch(e){} } };
document.addEventListener("keydown", function(e){
  var t = e.target || {}; if(!dlIn() || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName || "") || e.ctrlKey || e.metaKey || e.altKey) return;
  if(e.key === "f"){ e.preventDefault(); e.stopImmediatePropagation(); dlSearch(); }
}, true);
(function(){
  var b = document.querySelector(".brand"); if(b) b.onclick = function(){ if(dlIn()) go("dl"); else go("start"); };
})();
window.dlRender = dlRender;
