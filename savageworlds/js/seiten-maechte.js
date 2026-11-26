/* Mächte: Arkane Hintergründe + Machtliste. Daten: SW_AH, SW_MACHTE, SW_MREGELN, SW_MMODS, SW_MINTRO (js/data/maechte*.js) */
"use strict";
window.SWP = window.SWP || {};
(function(){
var RNm = ["Anfänger","Fortgeschritten","Veteran","Heroisch","Legendär"], RCm = ["#7a7067","#c27a1c","#a51f1a","#6a3a8a","#b8902a"];
function vis(x){ return (x.s || ["GRW"]).some(function(g){ return g === "GRW" || gen(g.toLowerCase()); }); }
function badges(x){ return (x.s || []).filter(function(g){ return g !== "GRW"; }).map(function(g){ return '<i class="sq sq-' + g.toLowerCase() + '">' + g + "</i>"; }).join(""); }
var BKM = {GRW:["sw_de",1], FAN:["sw_fan",2], HOR:["sw_hor",2], SF:["sw_sf",2], SUP:["sw_sup",2], DL:["sw_dl",2]};
function pgl(x){ var g = (x.s && x.s[x.s.length - 1]) || "GRW", b = x.bk ? [x.bk, x.o == null ? 2 : x.o] : BKM[x.s && x.s[0] || "GRW"]; if(!x.p) return ""; return '<span class="pg" onclick="event.stopPropagation();openBook(\'' + b[0] + "'," + (x.p + b[1]) + ')">S. ' + x.p + "</span>"; }
function P(t){
  t = String(t).replace(/\bSeiten? (\d+)/g, "S. $1");
  if(t.indexOf("• ") === 0){ var m = t.slice(2).match(/^([^.:]{2,40}): (.*)$/); return '<p class="ed bl">' + (m ? "<b>" + esc(m[1]) + ":</b> " + esc(m[2]) : esc(t.slice(2))) + "</p>"; }
  var m2 = t.match(/^([A-ZÄÖÜ][^.:]{2,40}): (.*)$/);
  return '<p class="ed">' + (m2 ? "<b>" + esc(m2[1]) + ":</b> " + esc(m2[2]) : esc(t)) + "</p>";
}
function PS(a){ return (a || []).map(P).join(""); }
function mtext(t){ return String(t).split("\n").map(P).join(""); }
function modCards(L){
  return '<div class="hg mg">' + L.map(function(m){ return '<div class="hc" style="--rc:#a51f1a"><b>' + nm(m[0]) + (m[1] && m[1] !== " " ? '<i class="sg">' + esc(m[1]) + "</i>" : "") + (m[3] ? badges({s:m[3]}) : "") + "</b>" + mtext(m[2]) + "</div>"; }).join("") + "</div>";
}
function cardGrid(L){ return '<div class="hg mg">' + L.map(function(c){ return '<div class="hc" style="--rc:#7a7067"><b>' + nm(c[0]) + "</b>" + mtext(c[1]) + "</div>"; }).join("") + "</div>"; }
function mrTable(t){
  return '<div class="etw"><table class="et"><thead><tr>' + t.c.map(function(c, i){ return "<th>" + esc(c) + "</th>"; }).join("") + "</tr></thead><tbody>" + t.r.map(function(r){ return "<tr>" + r.map(function(c){ return "<td>" + esc(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>" + (t.fn ? '<p class="ed fn">' + esc(t.fn) + "</p>" : "");
}
function kasten(k){ if(k.s && !vis(k)) return ""; return '<div class="kc"><h5>' + nm(k.h) + badges(k) + "</h5>" + (k.tab ? mrTable(k.tab) : "") + PS(k.b) + (k.dom ? '<div class="avl">' + k.dom.map(function(n){ var ok = SW_MACHTE.some(function(m){ return m.n === n && vis(m); }); return ok ? '<a onclick="event.stopPropagation();mGo(\'' + n.replace(/'/g, "\\'") + '\')">' + nm(n) + "</a>" : "<span>" + nm(n) + "</span>"; }).join("") + "</div>" : "") + "</div>"; }
var SX = 0;
function nm(x){ return window.nm(x).replace(/\//g, '<span class="sl">/</span>'); }
function mpt(v){ return /^\d+\+?$/.test(v) ? v + " MP" : "MP: " + v; }
function sid(t){ return "ms-" + String(t).toLowerCase().replace(/[^a-zäöü0-9]+/g, "-"); }

/* ---------- Arkane Hintergründe ---------- */
function ahList(){ return SW_AH.filter(vis); }
function ahTile(a, i, open){
  var sm = a.sm ? a.sm + (a.sm === "1" ? " Macht" : " Mächte") : "";
  return '<div class="tc' + (open ? " open" : "") + '" style="--rc:#a51f1a" onclick="ahOpen(' + i + ')"><b>' + nm(a.n) + badges(a) + "</b><small>" + esc([a.f, sm, a.mp ? a.mp + " MP" : ""].filter(Boolean).join(" · ")) + "</small></div>";
}
function ahDetail(a){
  var rows = [["Arkane Fertigkeit", a.f], ["Startmächte", a.sm], ["Machtpunkte", a.mp]];
  if(a.req) rows.unshift(["Voraussetzungen", a.req]);
  var side = '<div class="tds">' + rows.filter(function(r){ return r[1]; }).map(function(r){ return "<small>" + r[0] + "</small><div>" + esc(r[1]) + "</div>"; }).join("") + "</div>";
  var av = a.av && a.av.length ? '<h4 class="rk" style="--rc:#7a7067"><span>Verfügbare Mächte</span></h4><div class="avl">' + a.av.map(function(n){ var ok = SW_MACHTE.some(function(m){ return m.n === n && vis(m); }); return ok ? '<a onclick="event.stopPropagation();mGo(\'' + n.replace(/'/g, "\\'") + '\')">' + nm(n) + "</a>" : "<span>" + nm(n) + "</span>"; }).join("") + "</div>" : "";
  var sp = (a.sp || []).map(function(s){ return '<p class="ed"><b>' + esc(s[0]) + ":</b> " + esc(s[1]) + "</p>"; }).join("");
  return '<div class="td" style="--rc:#a51f1a"><div class="tdm"><h3>' + nm(a.n) + badges(a) + pgl(a) + "</h3>" + PS(a.b) + sp + av + "</div>" + side + "</div>";
}
function ahBlock(){
  var L = ahList(), h = '<div class="tg3">';
  L.forEach(function(a, i){
    var id = SW_AH.indexOf(a), open = ST.ao === id;
    h += ahTile(a, id, open);
    var rowEnd = i % 3 === 2 || i === L.length - 1;
    if(rowEnd){ var row = L.slice(i - i % 3, i + 1); if(row.some(function(x){ return SW_AH.indexOf(x) === ST.ao; })) h += ahDetail(SW_AH[ST.ao]); }
  });
  return h + "</div>";
}
function secBlocks(sec){
  var h = "", ks = "";
  function flush(){ if(ks){ h += '<div class="kcs">' + ks + "</div>"; ks = ""; } }
  sec.bl.forEach(function(b){
    if(b.s && !vis(b)) return;
    if(b.k){ ks += kasten(b); return; }
    flush();
    if(b.ahcards){ h += ahBlock(); return; }
    if(b.mods){ h += modCards(SW_MMODS.concat((window.SW_MMODS_X || []).filter(vis))); return; }
    if(b.h) h += '<h4 class="rk" id="' + sid(b.h) + '" style="--rc:#a51f1a"><span>' + nm(b.h) + "</span></h4>";
    h += PS(b.b);
    if(b.cards) h += cardGrid(b.cards);
  });
  flush();
  return h;
}
function ksort(sec){ /* Kästen nebeneinander */ return sec; }
function secVisible(s){ return !s.s || vis(s); }
function secSubs(sec){ return sec.bl.filter(function(b){ return b.h && !b.k && (!b.s || vis(b)); }).map(function(b){ return b.h; }); }
function hintergruendePage(){
  var secs = SW_MREGELN.filter(secVisible);
  if(!ST.mh || !secs.some(function(s){ return s.id === ST.mh; })) ST.mh = secs[0].id;
  var cur = secs.filter(function(s){ return s.id === ST.mh; })[0];
  var side = secs.map(function(s){
    var on = s.id === ST.mh, subs = on ? secSubs(s) : [];
    return '<a class="' + (on ? "on" : "") + '" onclick="mhSec(\'' + s.id + '\')">' + nm(s.t) + "</a>" + (on ? subs.map(function(x){ return '<a class="sb" onclick="mScroll(\'' + sid(x) + '\')">' + nm(x) + "</a>"; }).join("") : "");
  }).join("");
  var body = secBlocks(cur);
  /* Kästen in Zweierraster */
  APP.innerHTML = '<div class="lay' + (ST.fold ? " fold-on" : "") + '" id="lay"><aside class="side"><button class="fold" onclick="foldSide()" aria-label="Seitenleiste">‹</button>' + side + '</aside><main class="ct mct"><h2>' + nm(cur.t) + '<span class="pg" onclick="openBook(\'sw_de\',' + (cur.p + 1) + ')">S. ' + cur.p + "</span></h2>" + body + "</main></div>";
}
window.mhSec = function(id){ ST.mh = id; save(); hintergruendePage(); window.scrollTo(0, 0); };
window.ahOpen = function(i){ ST.ao = ST.ao === i ? -1 : i; save(); hintergruendePage(); var d = document.querySelector(".td"); if(d && ST.ao > -1) d.scrollIntoView({block:"nearest", behavior:"smooth"}); };
window.mScroll = function(id){ var e = document.getElementById(id); if(e) e.scrollIntoView({behavior:"smooth", block:"start"}); };
SWP["maechte/hintergruende"] = hintergruendePage;

/* ---------- Machtliste ---------- */
function mList(){
  return SW_MACHTE.filter(function(m){
    if(!vis(m)) return false;
    if(ST.mr > -1 && m.r !== ST.mr) return false;
    if(ST.ma){ var a = SW_AH[ST.ma - 1]; if(!a || !a.av || a.av.indexOf(m.n) < 0) return false; }
    return true;
  }).sort(function(a, b){ return a.r - b.r || a.n.localeCompare(b.n, "de"); });
}
function mTile(m, id, open){
  return '<div class="tc' + (open ? " open" : "") + '" style="--rc:' + RCm[m.r] + '" onclick="mOpen(' + id + ')"><b>' + nm(m.n) + badges(m) + "</b><small>" + esc([mpt(m.mp), m.rw, m.wd].filter(Boolean).join(" · ")) + "</small></div>";
}
function mDetail(m){
  var mods = (m.m || []).filter(function(x){ return !x[3] || vis({s:x[3]}); });
  var side = '<div class="tds"><small>Rang</small><div>' + RNm[m.r] + "</div><small>Machtpunkte</small><div>" + esc(m.mp) + "</div><small>Reichweite</small><div>" + esc(m.rw) + "</div><small>Wirkungsdauer</small><div>" + esc(m.wd) + "</div>" + (m.au ? "<small>Ausprägungen</small><div>" + esc(m.au) + "</div>" : "") + "</div>";
  var body = "", nach = m.tab ? m.tab.nach : -1;
  m.b.forEach(function(t, i){ body += P(t); if(m.tab && i + 1 === nach) body += mrTable(m.tab); });
  if(m.tab && nach >= m.b.length) body += mrTable(m.tab);
  var k = (m.k || []).map(kasten).join("");
  return '<div class="td md" style="--rc:' + RCm[m.r] + '"><div class="tdm"><h3>' + nm(m.n) + badges(m) + pgl(m) + "</h3>" + body + (mods.length ? '<h4 class="rk" style="--rc:' + RCm[m.r] + '"><span>Modifikatoren</span></h4>' + modCards(mods) : "") + (k ? '<div class="kcs">' + k + "</div>" : "") + "</div>" + side + "</div>";
}
function chip(on, js, t){ return '<a class="' + (on ? "on" : "") + '" onclick="' + js + '">' + t + "</a>"; }
function listePage(){
  if(ST.mr == null) ST.mr = -1; if(ST.ma == null) ST.ma = 0; if(ST.mo == null) ST.mo = -1;
  var ahv = SW_AH.filter(function(a){ return a.av && a.av.length && vis(a); });
  if(ST.ma && !ahv.some(function(a){ return SW_AH.indexOf(a) + 1 === ST.ma; })) ST.ma = 0;
  var all = SW_MACHTE.filter(vis), L = mList();
  var rkc = chip(ST.mr === -1, "mRang(-1)", "Alle Ränge") + RNm.map(function(r, i){ return all.some(function(m){ return m.r === i; }) ? chip(ST.mr === i, "mRang(" + i + ")", r) : ""; }).join("");
  var ahc = ahv.length ? chip(!ST.ma, "mAh(0)", "Alle Hintergründe") + ahv.map(function(a){ return chip(SW_AH.indexOf(a) + 1 === ST.ma, "mAh(" + (SW_AH.indexOf(a) + 1) + ")", nm(a.n)); }).join("") : "";
  var h = "", intro = "";
  if(ST.mr === -1 && !ST.ma){
    var I = SW_MINTRO;
    intro = '<div class="mi" id="ms-einleitung">' + PS(I.b) + (I.k || []).map(kasten).join("") + "</div>";
  }
  var side = (intro ? '<a onclick="mScroll(\'ms-einleitung\')">Einleitung</a>' : "");
  for(var r = 0; r < 5; r++){
    var G = L.filter(function(m){ return m.r === r; }); if(!G.length) continue;
    side += '<a onclick="mScroll(\'ms-rang-' + r + '\')">' + RNm[r] + " <em>" + G.length + "</em></a>";
    h += '<h4 class="rk" id="ms-rang-' + r + '" style="--rc:' + RCm[r] + '"><span>' + RNm[r] + '</span></h4><div class="tg3">';
    G.forEach(function(m, i){
      var id = SW_MACHTE.indexOf(m), open = ST.mo === id;
      h += mTile(m, id, open);
      var end = i % 3 === 2 || i === G.length - 1;
      if(end && G.slice(i - i % 3, i + 1).some(function(x){ return SW_MACHTE.indexOf(x) === ST.mo; })) h += mDetail(SW_MACHTE[ST.mo]);
    });
    h += "</div>";
  }
  if(!L.length) h = '<div class="soon">Keine Mächte.</div>';
  APP.innerHTML = '<div class="lay' + (ST.fold ? " fold-on" : "") + '" id="lay"><aside class="side"><button class="fold" onclick="foldSide()" aria-label="Seitenleiste">‹</button>' + side + '</aside><main class="ct mct"><h2>Machtliste<span class="pg" onclick="openBook(\'sw_de\',155)">S. 154</span></h2><div class="hf">' + rkc + "</div>" + (ahc ? '<div class="hf">' + ahc + "</div>" : "") + intro + h + "</main></div>";
}
window.mRang = function(r){ ST.mr = r; ST.mo = -1; save(); listePage(); window.scrollTo(0, 0); };
window.mAh = function(a){ ST.ma = a; ST.mo = -1; save(); listePage(); window.scrollTo(0, 0); };
window.mOpen = function(i){ ST.mo = ST.mo === i ? -1 : i; save(); listePage(); var d = document.querySelector(".td"); if(d && ST.mo > -1) d.scrollIntoView({block:"nearest", behavior:"smooth"}); };
window.mGo = function(n){ var i = -1; SW_MACHTE.forEach(function(m, k){ if(m.n === n && vis(m) && i < 0) i = k; }); ST.mr = -1; ST.ma = 0; ST.mo = i; save(); if(location.hash === "#maechte/liste") listePage(); else location.hash = "maechte/liste"; setTimeout(function(){ var d = document.querySelector(".td"); if(d) d.scrollIntoView({block:"center"}); }, 50); };
SWP["maechte/liste"] = listePage;
})();
