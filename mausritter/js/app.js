/* MAUSRITTER – Spielleiter-Tafel. Hash-Routing:
   #start · #regeln/<abschnitt> · #sl/<abschnitt> · #maeuse/<teil>/<maus> · #garten/<tab>/<ort> · #anwesen/<tab>/<ort> · #aussen/<tab>/<feld> */
"use strict";
var APP = document.getElementById("app");
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
function go(h){ if(location.hash === "#" + h) render(); else location.hash = h; }
function parts(){ return (location.hash || "#start").slice(1).split("/"); }
function route(){ return parts()[0] || "start"; }
function IMG(n){ return "img/" + n + ".webp"; }
function store(k, v){ try{ if(v === undefined) return JSON.parse(localStorage.getItem("mr_" + k) || "null"); localStorage.setItem("mr_" + k, JSON.stringify(v)); }catch(e){ return null; } }
window.addEventListener("hashchange", function(){ render(); });

/* Bücher */
function openBook(id, p){ try{ BV.open(id || "mr_schnell", p || 1); }catch(e){} }
function pg(p, buch){ var n = parseInt(String(p || "").replace(/\D/g, ""), 10); return n ? '<a class="pg" onclick="event.stopPropagation();openBook(\'' + (buch || "mr_schnell") + '\',' + n + ')">' + esc(p) + '</a>' : ""; }
window.gmBook = function(){
  return {name:"Mausritter", books:[
    {name:"Schnellstarter", sub:"Regeln und Der verbotene Garten · DE", open:function(){ openBook("mr_schnell", 1); }},
    {name:"The Estate", sub:"Kampagnenführer · EN", open:function(){ openBook("mr_estate", 1); }},
    {name:"HexMap for Tiny Adventurers", sub:"Die Außenlande · EN", open:function(){ openBook("mr_hex", 1); }}
  ]};
};

/* Textauszeichnung: **fett**, *kursiv*, Proben/Würfel/Zustände als Chips, [[Verweis]] als Pop-up */
var ZST = {"Erschöpft":1,"Ängstlich":1,"Entkräftet":1,"Verletzt":1,"Hungrig":1,"Verätzt":1};
function md(s){
  return esc(s)
    .replace(/\*\*(STÄ|GES|WIL)(-Probe)?\*\*/g, function(m, a, b){ return '<span class="chip">' + a + (b || "") + '</span>'; })
    .replace(/\*\*(W\d+(?:\+\d)?)\*\*/g, '<span class="chip w">$1</span>')
    .replace(/\*\*(Erschöpft|Ängstlich|Entkräftet|Verletzt|Hungrig|Verätzt)\*\*/g, '<span class="chip z">$1</span>')
    .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\*(.+?)\*/g, "<i>$1</i>")
    .replace(/\[\[(.+?)\]\]/g, function(m, t){ return '<a class="xr" onclick="xref(\'' + t.replace(/'/g, "") + '\')">' + (t === "rast" ? "Seite 8" : t) + '</a>'; });
}

/* Kopfzeile */
var AREAS = [["regeln","Regeln"],["sl","Spielleitung"],["maeuse","Mäuse"]];
var ABENTEUER = [
  {id:"garten", t:"Der verbotene Garten der Katzenmagierin", k:"Der verbotene Garten", s:"Einstiegsabenteuer", img:"ab/garten-karte", pos:"40% 60%"},
  {id:"anwesen", t:"Das Anwesen", k:"Das Anwesen", s:"Kampagne um Klinkerhafen", img:"ab/anwesen-karte", pos:"center 40%"},
  {id:"aussen", t:"Die Außenlande", k:"Die Außenlande", s:"Hexkarte · 19 Felder", img:"ab/aussenlande-karte", pos:"center"}
];
function ktabs(r){
  document.getElementById("ktabs").innerHTML = r === "start" ? "" : AREAS.map(function(a){ return '<a class="' + (a[0] === r ? "on" : "") + '" onclick="go(\'' + a[0] + '\')">' + a[1] + '</a>'; }).join("");
}

/* Startseite „Nachtwald“ */
function viewStart(){
  var B = [["regeln","Regeln","Proben, Kampf, Rast, Inventar, Zustände, Magie"],["sl","Spielleitung","Leiten, Proben verlangen, Folgen, Vorbereitung"],["maeuse","Mäuse","Fünf Spielmäuse, Gegenstände, Zustände, Mausbogen"]];
  return '<section class="hero"><div class="bg"></div><div class="links"><div class="lbl">SCHNELLSTARTER</div><div class="ber">' +
    B.map(function(b){ return '<a onclick="go(\'' + b[0] + '\')"><b>' + b[1] + '</b><em>›</em><span>' + b[2] + '</span></a>'; }).join("") + '</div></div>' +
    '<div class="abk">' + ABENTEUER.map(function(a){ return '<a onclick="go(\'' + a.id + '\')"><div class="m" style="background-image:url(' + IMG(a.img) + ');background-position:' + a.pos + '"></div><div><b>' + esc(a.t) + '</b><i>' + esc(a.s) + '</i></div></a>'; }).join("") + '</div></section>';
}

/* Unterleiste */
function subbar(items, cur, area){ return '<div class="sub">' + items.map(function(s){ return '<a class="' + (s[0] === cur ? "on" : "") + '" onclick="go(\'' + area + '/' + s[0] + '\')">' + esc(s[1]) + '</a>'; }).join("") + '</div>'; }

/* Seitenleiste */
function sbOff(){ return store("sb") === 0; }
function sbTog(){ store("sb", sbOff() ? 1 : 0); var l = document.querySelector(".lay"); if(l) l.classList.toggle("off", sbOff()); }
function side(entries, cur, area, subs){
  return '<aside class="side"><button class="auf" onclick="sbTog()" title="Ausklappen">›</button>' + entries.map(function(e, i){
    var on = e[0] === cur;
    return '<a class="e' + (on ? " on" : "") + (e[2] ? " bild" : "") + '" onclick="go(\'' + area + '/' + e[0] + '\')">' + (e[2] ? '<img src="' + e[2] + '" alt="">' : "") + '<span>' + esc(e[1]) + (e[3] ? '<small>' + esc(e[3]) + '</small>' : "") + '</span></a>' +
      (i === 0 ? '<button class="tog" onclick="event.stopPropagation();sbTog()" title="Einklappen">‹</button>' : "") +
      (on && subs && subs.length ? '<div class="u">' + subs.map(function(u){ return '<a onclick="sbGo(\'' + u[0] + '\')">' + esc(u[1]) + '</a>'; }).join("") + '</div>' : "");
  }).join("") + '</aside>';
}
function sbGo(id){ var e = document.getElementById(id); if(e) window.scrollTo({top:e.getBoundingClientRect().top + window.scrollY - 118, behavior:"smooth"}); }
function lay(sideHtml, main){ return '<div class="lay' + (sbOff() ? " off" : "") + '">' + sideHtml + '<div>' + main + '</div></div>'; }

/* Blöcke rendern */
function blocks(L){
  var n = 0;
  return L.map(function(b){
    switch(b[0]){
      case "lead": return '<p class="lead">' + md(b[1]) + '</p>';
      case "p": return '<p>' + md(b[1]) + '</p>';
      case "h": return '<h3 id="h' + (++n) + '">' + esc(b[1]) + pg(b[2]) + '</h3>';
      case "ul": return '<ul>' + b[1].map(function(x){ return '<li>' + md(x) + '</li>'; }).join("") + '</ul>';
      case "box": return '<div class="box"><h4>' + esc(b[1]) + '</h4><p>' + md(b[2]) + '</p></div>';
      case "rast": return '<div class="k3">' + b[1].map(function(r){ return '<div class="kc"><span class="z">' + esc(r[1]) + '</span><h4>' + esc(r[0]) + '</h4><p>' + md(r[2]) + '</p></div>'; }).join("") + '</div>';
      case "rl": return '<div class="k2">' + b[1].map(function(r){ return '<div class="kc"><h4>' + esc(r[0]) + '</h4><p>' + md(r[1]) + '</p></div>'; }).join("") + '</div>';
      case "attr": return '<div class="attr">' + b[1].map(function(r){ return '<div><b>' + r[0] + '</b><span>' + esc(r[1]) + '</span></div>'; }).join("") + '</div>';
      case "inv": return '<div class="inv"><div class="s">Hauptpfote</div><div class="s">Körper</div><div class="rs">' + [1,2,3,4,5,6].map(function(i){ return '<div>' + i + '</div>'; }).join("") + '</div><div class="s">Nebenpfote</div><div class="s">Körper</div></div>' +
        '<div class="inv-l"><span><b>Pfotenplätze:</b> Die Gegenstände werden in der Pfote gehalten.</span><span><b>Körperplätze:</b> Getragene Gegenstände können als freie Aktion mit Pfotenplätzen getauscht werden.</span><span><b>Rucksackplätze:</b> Es braucht Zeit, um Gegenstände an diesen Plätzen unter Druck hervorzuholen. Im Kampf muss deine Maus eine Aktion aufwenden (statt anzugreifen), um einen Gegenstand in ihrem Rucksack zu finden.</span></div>';
      case "zst": return '<div class="kart zs">' + MR.zustaende.map(function(z){ return '<div class="c" onclick="zoomK(\'' + z[1] + '\')"><img src="' + IMG("karten/" + z[1]) + '" alt="' + esc(z[0]) + '"></div>'; }).join("") + '</div>';
      case "zauber": return '<div class="zg">' + MR.zauber.map(function(z){ return '<div class="zc">' + (z[1] ? '<img src="' + IMG("karten/" + z[1]) + '" alt="">' : '<div></div>') + '<div><h4>' + esc(z[0]) + '</h4><p>' + esc(z[2]) + '</p></div></div>'; }).join("") + '</div>';
      case "start": return '<div class="k3x">' + MR.maeuse.map(function(m){ return '<div class="kc"><h4><a onclick="go(\'maeuse/spielmaeuse/' + m.id + '\')">' + esc(m.name) + '</a></h4><p>' + esc(m.aus) + '</p></div>'; }).join("") + '</div>';
    }
    return "";
  }).join("");
}
function subsOf(L){ var n = 0, o = []; L.forEach(function(b){ if(b[0] === "h") o.push(["h" + (++n), b[1]]); }); return o; }
function textPage(list, cur, area){
  var s = list.filter(function(x){ return x.id === cur; })[0] || list[0];
  var main = '<div class="rp"><div class="ph"><h1>' + esc(s.t) + '</h1>' + pg(s.p) + '</div><div class="txt">' + (s.img ? '<img class="fl" src="' + IMG(s.img) + '" alt="">' : "") + blocks(s.b) + '</div></div>';
  return lay(side(list.map(function(x){ return [x.id, x.t]; }), s.id, area, subsOf(s.b)), main);
}
function viewRegeln(sub){ return textPage(MR.regeln, sub, "regeln"); }
function viewSl(sub){ return textPage(MR.sl, sub, "sl"); }

/* Karten zoomen und Querverweise */
function zoomK(n){ var z = document.createElement("div"); z.className = "zoom"; z.innerHTML = '<img src="' + IMG("karten/" + n) + '" alt="">'; z.onclick = function(){ z.remove(); }; document.body.appendChild(z); }
function popup(html){
  var m = document.createElement("div"); m.className = "pop"; m.innerHTML = '<div>' + html + '</div>';
  m.onclick = function(e){ if(e.target === m) m.remove(); };
  document.body.appendChild(m);
}
document.addEventListener("keydown", function(e){ if(e.key === "Escape"){ var p = document.querySelector(".pop,.zoom,.kartov,.pick"); if(p){ p.remove(); e.preventDefault(); e.stopImmediatePropagation(); } } }, true);
function xref(t){
  var G = MR.garten;
  if(t === "rast"){ var r = MR.regeln.filter(function(x){ return x.id === "rast"; })[0]; popup('<h3>Rast und Heilung</h3>' + blocks(r.b)); return; }
  if(t === "Fallentunnel"){ go("garten/tunnel"); return; }
  if(/^Begegnung/.test(t)) { popup('<h3>Begegnungen ' + pg(G.begegnung.p) + '</h3>' + w6(G.begegnung.tab, "W6", "Zufällige Begegnung")); return; }
  if(/^Sch[aä]tz/.test(t)) { popup('<h3>Schätze ' + pg(G.schaetze.p) + '</h3>' + w6(G.schaetze.tab.map(function(x){ return x[0]; }), "W6", "Schatz")); return; }
  var w = G.wesen.filter(function(x){ return x.id === t || x.t === t; })[0];
  if(w) popup(wesenCard(w));
}

/* Würfeltabelle mit Würfelknopf */
function w6(rows, d, kopf){
  var id = "t" + Math.random().toString(36).slice(2, 7);
  return '<table class="wt6" id="' + id + '"><tr><th style="width:44px">' + d + '<span class="wb" onclick="wurf(\'' + id + '\')">Würfeln</span></th><th>' + esc(kopf) + '</th></tr>' +
    rows.map(function(r, i){ return '<tr><td class="n">' + (i + 1) + '</td><td>' + md(r) + '</td></tr>'; }).join("") + '</table>';
}
function wurf(id){
  var t = document.getElementById(id); if(!t) return;
  var R = t.querySelectorAll("tr:not(:first-child)"), k = Math.floor(Math.random() * R.length);
  R.forEach(function(r, i){ r.classList.toggle("hit", i === k); });
}
function wesenCard(w){
  var key = "lp_" + w.id, on = store(key) || [], max = parseInt(w.w, 10) || 0;
  return '<div class="ws"><h4>' + esc(w.t) + ' ' + pg(w.p) + '</h4><div class="k">' + esc(w.k) + '</div><div class="w">' + esc(w.w) + '</div>' +
    '<p><b>Angriffe:</b> ' + esc(w.a) + '</p>' + (w.krit ? '<p><b>Kritischer Schaden:</b> ' + esc(w.krit) + '</p>' : "") + w.x.map(function(x){ return '<p>' + esc(x) + '</p>'; }).join("") +
    '<p class="wi">' + esc(w.will) + '</p>' + (max ? '<div class="lt" data-k="' + key + '">' + Array.apply(null, Array(max)).map(function(_, i){ return '<i class="' + (on.indexOf(i) >= 0 ? "on" : "") + '" onclick="tpTog(this,' + i + ')" title="TP"></i>'; }).join("") + '</div>' : "") + '</div>';
}
function tpTog(el, i){ var k = el.parentNode.dataset.k, on = store(k) || [], j = on.indexOf(i); if(j >= 0) on.splice(j, 1); else on.push(i); store(k, on); el.classList.toggle("on"); }

/* Menü */
function openMenu(on){
  var P = document.getElementById("mmP");
  P.innerHTML = '<button onclick="openMenu(false);go(\'start\')">Startseite</button>' +
    '<h3>BEREICHE</h3>' + AREAS.map(function(a){ return '<button onclick="openMenu(false);go(\'' + a[0] + '\')">' + a[1] + '</button>'; }).join("") +
    '<h3>ABENTEUER</h3>' + ABENTEUER.map(function(a){ return '<button onclick="openMenu(false);go(\'' + a.id + '\')">' + esc(a.t) + '</button>'; }).join("") +
    '<h3>WERKZEUGE</h3><button onclick="openMenu(false);go(\'maeuse/bogen\')">Mausbogen</button><button onclick="openMenu(false);kartenAuf()">Karten</button>';
  P.classList.toggle("on", !!on); document.getElementById("mmB").classList.toggle("on", !!on);
}

/* Karten-Overlay (Taste „m“) */
var KARTEN = [["garten","Der verbotene Garten","ab/garten-karte","garten/garten/"],["anwesen","Das Anwesen","ab/anwesen-karte","anwesen/karte/"],["kh","Klinkerhafen","ab/brickport-karte","anwesen/klinkerhafen/"],["aussen","Die Außenlande","ab/aussenlande-karte","aussen/karte/"]];
function kartenAuf(k){
  var r = route(), x = document.querySelector(".kartov"); if(x){ x.remove(); return; }
  k = k || (r === "anwesen" && parts()[1] === "klinkerhafen" ? "kh" : r === "garten" || r === "anwesen" || r === "aussen" ? r : "garten");
  var K = KARTEN.filter(function(a){ return a[0] === k; })[0];
  var o = document.createElement("div"); o.className = "kartov";
  o.innerHTML = '<div class="tb">' + KARTEN.map(function(a){ return '<a class="' + (a[0] === k ? "on" : "") + '" data-k="' + a[0] + '">' + a[1] + '</a>'; }).join("") + '</div><div class="w"><img src="' + IMG(K[2]) + '" alt=""></div>';
  o.onclick = function(e){ var a = e.target.closest("[data-k]"); if(a){ e.stopPropagation(); o.remove(); kartenAuf(a.dataset.k); return; } if(!e.target.closest(".w")) o.remove(); };
  o.querySelector(".w img").onclick = function(){ o.remove(); go(K[3].replace(/\/$/, "")); };
  document.body.appendChild(o);
}
window.gmMap = function(){ kartenAuf(); };

/* Hauptrender */
function render(){
  var r = route(), p = parts();
  document.body.classList.toggle("start", r === "start"); document.body.classList.toggle("hs", r === "maeuse");
  ktabs(r);
  var V = {start:viewStart, regeln:function(){ return viewRegeln(p[1]); }, sl:function(){ return viewSl(p[1]); }, maeuse:function(){ return viewMaeuse(p[1], p[2]); },
    garten:function(){ return viewGarten(p[1], p[2]); }, anwesen:function(){ return viewAnwesen(p[1], p[2]); }, aussen:function(){ return viewAussen(p[1], p[2]); }};
  APP.innerHTML = (V[r] || viewStart)();
  if(!/^(garten|anwesen|aussen)$/.test(r) || !p[2]) window.scrollTo(0, 0);
  if(window.afterRender){ var f = afterRender; afterRender = null; f(); }
}
var afterRender = null;

/* Esc: eine Ebene zurück */
document.addEventListener("keydown", function(e){
  if(e.key !== "Escape" || e.defaultPrevented) return;
  var t = e.target || {}; if(/INPUT|TEXTAREA|SELECT/.test(t.tagName || "") || t.isContentEditable) return;
  if(document.querySelector(".gal,.gs-ov,.mm-panel.on,.bv-open,.notes-pop")) return;
  var v = document.getElementById("bvOverlay") || document.getElementById("bookViewer"); if(v && !v.hidden && v.style.display !== "none") return;
  var p = parts(); if(p[0] === "start" || !p[0]) return;
  if(p[2]) go(p[0] + "/" + p[1]); else if(p[1]) go(p[0]); else go("start");
});
