/* INTO THE ODD – Spielleiter-Tafel. Hash-Routing: #start · #regeln · #arcana · #sl · #abenteuer · #oddpendium */
"use strict";
var APP = document.getElementById("app");
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
function go(h){ if(location.hash === "#" + h) render(); else location.hash = h; }
function openBook(id, p){ try{ BV.open(id || "ito_core", p || 1); }catch(e){} }
window.addEventListener("hashchange", function(){ render(); });
/* Bereiche = Reiter der Kopfzeile */
var AREAS = [
 {id:"regeln", t:"Regeln", k:"Charakter, Spielablauf, Kampf, nach der Expedition", c:"#f06a9a"},
 {id:"arcana", t:"Arcana", k:"Mächte, die niemand versteht", c:"#e2561e"},
 {id:"sl", t:"Spielleitung", k:"Schätze, Hindernisse, Begegnungen, die Odd-Welt", c:"#0b9a96"},
 {id:"abenteuer", t:"Abenteuer", k:"Die Eiserne Koralle und Fan-Material", c:"#6a6ee8"},
 {id:"oddpendium", t:"Oddpendium", k:"Würfeltabellen für unterwegs", c:"#f5d9c8"}
];
function route(){ var h = (location.hash || "#start").slice(1).split("/"); return h[0] || "start"; }
function sub(){ return (location.hash || "").slice(1).split("/")[1] || ""; }
function ktabs(r){
  document.getElementById("ktabs").innerHTML = r === "start" ? "" : AREAS.map(function(a){ return '<a class="' + (a.id === r ? "on" : "") + '" onclick="go(\'' + a.id + '\')">' + esc(a.t) + '</a>'; }).join("");
}
function viewStart(){
  return '<section class="hero"><div class="bg"></div><div class="shade"></div>' +
    '<div class="mid"><img class="tit" src="../assets/logos/into-the-odd.webp" alt="Into the Odd"><div class="sub">Erforscher, Arcana und der Untergrund von Bastion</div></div>' +
    '<div class="areas">' + AREAS.map(function(a){ return '<a class="area" style="--c:' + a.c + '" onclick="go(\'' + a.id + '\')"><b>' + esc(a.t) + '</b><span>' + esc(a.k) + '</span></a>'; }).join("") + '</div></section>';
}
function viewArea(r){
  var a = AREAS.filter(function(x){ return x.id === r; })[0];
  return '<div class="page"><h2>' + esc(a ? a.t : "") + '</h2></div>';
}
function render(){
  var r = route();
  document.body.classList.toggle("start", r === "start");
  ktabs(r);
  APP.innerHTML = r === "start" ? viewStart() : r === "regeln" ? viewRegeln(sub()) : r === "arcana" ? viewArcana(sub()) : r === "sl" ? viewSl(sub()) : r === "abenteuer" ? viewAb(sub()) : r === "oddpendium" ? viewOdd(sub()) : viewArea(r);
  if(r === "regeln") startHover();
  window.scrollTo(0, 0);
  if(r !== "start") sideBar();
}
/* Menü (Burger) */
function openMenu(on){
  var P = document.getElementById("mmP");
  P.innerHTML = '<h3>Into the Odd</h3><button onclick="openMenu(false);go(\'start\')">Startseite</button>' +
    AREAS.map(function(a){ return '<button onclick="openMenu(false);go(\'' + a.id + '\')">' + esc(a.t) + '</button>'; }).join("") +
    '<button onclick="openMenu(false);openBook(\'ito_core\',1)">Corebook öffnen</button><button onclick="openMenu(false);openBook(\'ito_mat\',1)">Oddditional Materials öffnen</button>';
  P.classList.toggle("on", !!on); document.getElementById("mmB").classList.toggle("on", !!on);
}
/* i-Knopf: Kurzüberblick */
function infoOpen(){
  var m = document.createElement("div"); m.className = "modal";
  m.innerHTML = '<div><h2>Into the Odd</h2><div class="inf">' +
    '<b>Die Welt</b><span>Zu groß zum Kartieren, zu alt zum Aufzeichnen. Ihr seid Erforscher aus Bastion und sucht Reichtum, Wissen und Macht – vor allem Arcana, seltsame Geräte mit unnatürlichen Kräften.</span>' +
    '<b>Charaktere</b><span>Stärke, Geschicklichkeit und Willenskraft mit 3W6 würfeln, dazu W6 Trefferschutz (hp). Das Startpaket ergibt sich aus Trefferschutz und höchstem Wert.</span>' +
    '<b>Rettungswürfe</b><span>W20 gegen den passenden Wert: gleich oder darunter ist ein Erfolg. Die 1 gelingt immer, die 20 misslingt immer.</span>' +
    '<b>Kampf</b><span>Angriffe treffen immer. Schaden = Waffenwurf minus Rüstung. Erst sinkt der Trefferschutz, dann die Stärke; danach droht kritischer Schaden.</span>' +
    '<b>Rasten</b><span>Kurze Rast: alle hp zurück. Volle Rast (eine Woche Ruhe): alle Werte zurück.</span></div></div>';
  m.onclick = function(e){ if(e.target === m) m.remove(); };
  document.addEventListener("keydown", function f(e){ if(e.key === "Escape"){ m.remove(); document.removeEventListener("keydown", f); } });
  document.body.appendChild(m);
}

/* Seitenleiste: Überblick über lange Seiten */
function sbTxt(el){ var c = el.cloneNode(true); [].forEach.call(c.querySelectorAll(".pg,.dd,.rn"), function(x){ x.remove(); }); return c.textContent.replace(/\s+/g, " ").trim().split(":")[0]; }
function sbName(t){ var m = t.split(/\s[–-]\s/); return m.length > 1 ? esc(m[0]) + '<small>' + esc(m.slice(1).join(" ")) + '</small>' : esc(t); }
function sideBar(){
  var rp = APP.querySelector(".rp"); if(!rp) return;
  var els = [].slice.call(rp.querySelectorAll("h3.gh, .tb > h4, .ort-s .ph h2, .rm"));
  var hasTop = els.some(function(e){ return e.matches("h3.gh, .ort-s .ph h2"); });
  var secs = [], cur = null, n = 0;
  var title = rp.querySelector(".ph h2");
  if(title && !title.closest(".ort-s")){ title.id = "sb0"; cur = {id:"sb0", t:sbTxt(title), subs:[], rooms:[]}; secs.push(cur); }
  els.forEach(function(e){
    var id = "sb" + (++n); e.id = id;
    if(e.classList.contains("rm")){ if(cur) cur.rooms.push({id:id, t:sbTxt(e.querySelector(".rn")).replace(/^Echo\s*/, "")}); return; }
    var top = e.matches("h3.gh, .ort-s .ph h2") || !hasTop;
    if(top){ cur = {id:id, t:sbTxt(e), subs:[], rooms:[]}; secs.push(cur); }
    else if(cur) cur.subs.push({id:id, t:sbTxt(e)});
  });
  if(secs.length < 3 && !secs.some(function(x){ return x.rooms.length; })) return;
  var html = secs.map(function(x, i){
    return '<div class="sbs" data-t="' + x.id + '"><a class="sbh" onclick="sbGo(\'' + x.id + '\')">' + sbName(x.t) + '</a>' +
      (i === 0 ? '<button class="sbt" title="Einklappen" onclick="event.stopPropagation();sbTog()">‹</button>' : "") +
      (x.subs.length ? '<div class="sbu">' + x.subs.map(function(u){ return '<a data-u="' + u.id + '" onclick="sbGo(\'' + u.id + '\')">' + esc(u.t) + '</a>'; }).join("") + '</div>' : "") +
      (x.rooms.length ? '<div class="sbr">' + x.rooms.map(function(u){ return '<a data-u="' + u.id + '" onclick="sbGo(\'' + u.id + '\')">' + esc(u.t) + '</a>'; }).join("") + '</div>' : "") + '</div>';
  }).join("");
  var wrap = document.createElement("div"); wrap.className = "sbw" + (localStorage.getItem("ito_sb") === "0" ? " off" : "");
  var as = document.createElement("aside"); as.className = "sb";
  as.innerHTML = '<button class="sbo" title="Ausklappen" onclick="sbTog()">›</button><nav class="sbl">' + html + '</nav>';
  rp.parentNode.insertBefore(wrap, rp); wrap.appendChild(as); wrap.appendChild(rp);
  window.onscroll = sbSpy; sbSpy();
}
function sbGo(id){ var e = document.getElementById(id); if(e) window.scrollTo({top: id === "sb0" ? 0 : e.getBoundingClientRect().top + window.scrollY - 128, behavior:"smooth"}); }
function sbTog(){ var w = document.querySelector(".sbw"); if(!w) return; w.classList.toggle("off"); localStorage.setItem("ito_sb", w.classList.contains("off") ? "0" : "1"); }
function sbSpy(){
  var lim = 170, ss = [].slice.call(document.querySelectorAll(".sbs")), on = ss[0];
  ss.forEach(function(s){ var e = document.getElementById(s.dataset.t); if(e && e.getBoundingClientRect().top < lim) on = s; s.classList.remove("on"); });
  if(!on) return; on.classList.add("on");
  var us = [].slice.call(on.querySelectorAll("[data-u]")), u = null;
  us.forEach(function(a){ var e = document.getElementById(a.dataset.u); if(e && e.getBoundingClientRect().top < lim) u = a; a.classList.remove("on"); });
  if(u) u.classList.add("on");
}
