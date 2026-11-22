/* MÖRK BORG – Abenteuer Rotblack Sludge (c10): Karte mit Klickflächen, Zufallsbegegnungen, 15 Räume. */
"use strict";
(function(){
 var ZB = "***Zufallsbegegnung.***";
 function raumById(id){ return MB_RAUM.filter(function(r){ return String(r.id) === String(id); })[0]; }
 var KEYS = ["karte", "zufall"].concat(MB_RAUM.map(function(r){ return String(r.id); }));
 function nav(cur){
  var z = !!ST.sbzu;
  var b = '<button class="' + (cur === "karte" ? "on" : "") + '" onclick="go(\'abenteuer/karte\')">Einführung<i>74</i></button><button class="' + (cur === "zufall" ? "on" : "") + '" onclick="go(\'abenteuer/zufall\')">Zufallsbegegnungen<i>75</i></button>' +
   MB_RAUM.map(function(r){ return '<button class="' + (String(r.id) === cur ? "on" : "") + (r.zufall ? " zf" : "") + '" onclick="go(\'abenteuer/' + r.id + '\')"><span><u>' + r.id + '</u>' + esc(r.t) + '</span><i>' + r.p + '</i></button>'; }).join("");
  return '<aside class="sb"><button class="sbx" onclick="NACH.sb()" aria-label="Leiste einklappen">‹</button>' + b + '</aside>';
 }
 function rahmen(cur, inhalt){
  return '<div class="rl ab' + (ST.sbzu ? " zu" : "") + '">' + nav(cur) + '<div class="rc"><button class="sbo" onclick="NACH.sb()" aria-label="Leiste ausklappen">›</button>' + inhalt + '</div></div>';
 }
 function karte(){
  var T = MB_ABT;
  var pins = MB_RAUM.map(function(r){ var p = T.pos[r.id]; return '<button class="pin' + (r.zufall ? " zf" : "") + '" style="left:' + p[0] * 100 + '%;top:' + p[1] * 100 + '%" title="' + esc(r.t) + '" onclick="go(\'abenteuer/' + r.id + '\')">' + r.id + '</button>'; }).join("");
  var legende = MB_RAUM.map(function(r){ return '<button onclick="go(\'abenteuer/' + r.id + '\')"><u>' + r.id + '</u>' + esc(r.t) + (r.zufall ? '<em>Zufallsbegegnung</em>' : "") + '</button>'; }).join("");
  var seher = '<ol class="ls zeile" style="--c:1;--r:8">' + T.seher.l.map(function(t, i){ return '<li><span class="nr">' + (i + 1) + '</span><span>' + md(t) + '</span></li>'; }).join("") + '</ol>';
  return '<div class="abk"><div class="abt"><h1>' + esc(T.t) + '</h1><p class="ob">' + esc(T.oder) + '</p><p class="sb2">' + esc(T.sub) + '</p><p class="vor">' + md(T.vor) + '</p></div>' +
   '<div class="abm"><div class="kartebox"><img src="' + IMG("abenteuer/rotblack-karte") + '" alt="">' + pins + '</div><div class="leg">' + legende + '</div></div>' +
   '<div class="abs"><span class="etikett">' + esc(T.seher.h) + '</span>' + pgl(T.seher.p) + '<p class="kl">' + esc(T.seher.x) + '</p>' + seher + '</div></div>';
 }
 function kreatur(k){
  return '<div class="ak">' + (k.bild ? '<img src="' + IMG("abenteuer/" + k.bild) + '" alt="" onclick="zoom(this.src)">' : "") + '<h4>' + esc(k.h) + '</h4>' + (k.t ? '<p class="g">' + md(k.t) + '</p>' : "") + (k.w ? '<p class="w">' + esc(k.w) + '</p>' : "") +
   (k.b ? '<ul>' + k.b.map(function(x){ return '<li>' + md(x) + '</li>'; }).join("") + '</ul>' : "") + '</div>';
 }
 function zufall(){
  var Z = MB_ABT.zufall;
  function karteZ(c, i){ return '<div class="zk"><span class="nr">' + (i + 1) + '</span><h4>' + esc(c.h) + '</h4><p>' + md(c.t) + '</p>' + (c.w ? '<p class="w">' + esc(c.w) + '</p>' : "") + (c.b ? '<ul>' + c.b.map(function(x){ return '<li>' + md(x) + '</li>'; }).join("") + '</ul>' : "") + (c.s ? kreatur(c.s) : "") + '</div>'; }
  var wo = Z.wo.map(function(w){ return '<li>' + esc(w) + '</li>'; }).join("");
  return '<div class="art"><h1>W4 Zufallsbegegnungen' + pgl(Z.p) + '</h1></div><div class="zwo"><div><span class="etikett">Nur würfeln in</span><ul>' + wo + '</ul></div><p>' + esc(Z.wahl) + '</p></div>' +
   '<span class="etikett">Tabelle A</span><div class="zg">' + Z.a.map(karteZ).join("") + '</div><span class="etikett">' + esc(Z.bt) + '</span><div class="zg">' + Z.b.map(karteZ).join("") + '</div>';
 }
 function raum(r){
  var p = MB_ABT.pos[r.id];
  var punkte = '<ul class="pk">' + r.punkte.map(function(x){ return x === ZB ? '<li><button class="zb" onclick="go(\'abenteuer/zufall\')">Zufallsbegegnung</button></li>' : '<li>' + md(x) + '</li>'; }).join("") + '</ul>';
  var abs = (r.abs || []).map(function(a){
   return '<div class="aa"><h5>' + esc(a.h) + (a.l ? "" : ":") + '</h5>' + (a.x ? '<p>' + md(a.x) + '</p>' : "") + (a.l ? '<ol>' + a.l.map(function(x){ return '<li>' + md(x) + '</li>'; }).join("") + '</ol>' : "") + '</div>';
  }).join("");
  var hint = r.wachen ? '<p class="hin">Die Wachen in Raum 4 hören jeden Lärm, der hier gemacht wird.</p>' : "";
  var mini = '<div class="mini"><img src="' + IMG("abenteuer/rotblack-karte") + '" alt=""><b style="left:' + p[0] * 100 + '%;top:' + p[1] * 100 + '%"></b></div>';
  var kr = (r.kr || []).map(kreatur).join("");
  var bild = r.bild ? '<img class="rb" src="' + IMG("abenteuer/" + r.bild) + '" alt="" onclick="zoom(this.src)">' : "";
  return '<div class="ar"><div class="art"><h1>' + r.id + '. ' + esc(r.t) + pgl(r.p) + (r.zufall ? '<span class="zfb">Zufallsbegegnung</span>' : "") + '</h1><p class="st">' + esc(r.stimmung) + '</p>' + punkte + abs + hint + '</div><div class="arr">' + mini + kr + bild + '</div></div>';
 }
 VIEWS.abenteuer = function(a){
  var k = a[0] || "karte", inh;
  if(k === "zufall") inh = zufall(); else if(raumById(k)) inh = raum(raumById(k)); else { k = "karte"; inh = karte(); }
  return rahmen(k, inh);
 };
 window.addEventListener("keydown", function(e){
  var h = (location.hash || "").slice(1).split("/");
  if(h[0] !== "abenteuer" || document.querySelector(".modal,.gzoom") || /INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "") || e.ctrlKey || e.metaKey || e.altKey) return;
  var cur = h[1] || "karte", i = KEYS.indexOf(cur);
  if(e.key === "ArrowDown" || e.key === "ArrowUp"){ var n = KEYS[i + (e.key === "ArrowDown" ? 1 : -1)]; if(n) go("abenteuer/" + n); e.preventDefault(); e.stopPropagation(); }
  if(e.key === "b"){ NACH.sb(); e.stopPropagation(); }
 }, true);
})();
