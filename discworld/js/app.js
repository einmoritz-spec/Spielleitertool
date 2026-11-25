/* Discworld – Abenteuer in Ankh-Morpork. Hash-Routing:
   #start · #k/<bereich>/<gruppe>[/<kapitel>] · #a/<abenteuer>[/<szene>] */
var APP = document.getElementById("app");
var ST = {}; try{ ST = JSON.parse(localStorage.getItem("dw_state_v1") || "{}") || {}; }catch(e){ ST = {}; }
function save(){ try{ localStorage.setItem("dw_state_v1", JSON.stringify(ST)); }catch(e){} }
function go(h){ if(location.hash === "#" + h) render(); else location.hash = h; }
function buch(p){ try{ BV.open("dw_core", p || 1); }catch(e){} }
window.addEventListener("hashchange", function(){ render(); });

/* Bereiche: Reiter in der Kopfzeile, Gruppen in der Unterleiste */
window.BEREICHE = [
  {id:"spielen", t:"Spielen", g:["Einführung", "Das Spiel"], bild:"spiel-tod-schach"},
  {id:"leitung", t:"Spielleitung", g:["Spielleiten", "Proben und Folgen", "Magie und Mechanik", "Unterwegs und der Tod"], bild:"leit-tod-katze"},
  {id:"charaktere", t:"Charaktere", g:["Die Gruppe", "Charaktere erschaffen", "Organisationen", "Eröffnung und Rückkehr", "Vorgefertigte Charaktere", "Bögen"], bild:"char-schachbrett"},
  {id:"stadt", t:"Ankh-Morpork", g:["Fremde Gesichter", "Unsichtbare Universität", "Pseudopolis-Platz", "Palast des Patriziers", "Die Schatten", "Sator-Platz", "Geflickte Trommel", "Die Gilden"], bild:"stadt-luftbild"}
];
function bereich(id){ return BEREICHE.filter(function(b){ return b.id === id; })[0]; }
function kopf(aktiv, gi){
  var tabs = BEREICHE.map(function(b){ return '<a class="' + (b.id === aktiv ? "on" : "") + '" onclick="go(\'k/' + b.id + '/0\')">' + esc(b.t) + "</a>"; }).join("");
  document.getElementById("ktabs").innerHTML = aktiv === "start" ? "" : tabs;
  var B = bereich(aktiv);
  if(!B || B.g.length < 2) return "";
  return '<nav class="unter">' + B.g.map(function(g, i){ var leer = !(DW.K[B.id] || []).some(function(k){ return k.g === i; });
    return '<a class="' + (i === gi ? "on" : "") + (leer ? " leer" : "") + '" onclick="go(\'k/' + B.id + "/" + i + '\')">' + esc(g) + "</a>"; }).join("") + "</nav>";
}

/* ---------- Kapitelansicht mit Seitenleiste ---------- */
var SERIE = /^(Schritt|Teil|Phase|Akt|Szene)\s*\d/i;
function laenge(k){ try{ return JSON.stringify(k.b).length; }catch(e){ return 0; } }
function packen(L){
  var P = [], cur = null, tot = 0;
  L.forEach(function(k){ var n = laenge(k);
    if(cur && !k.solo && !cur[0].solo && !SERIE.test(k.t) && n < 2600 && tot < 2600){ cur.push(k); tot += n; }
    else { cur = [k]; tot = n; P.push(cur); } });
  return P;
}
function kurz(t){ var a = String(t).split(":")[0]; return a.length < 12 ? String(t) : a; }
function viewKapitel(bid, gi, kid){
  var B = bereich(bid); if(!B) return viewStart();
  gi = parseInt(gi, 10) || 0;
  var L = (DW.K[bid] || []).filter(function(k){ return k.g === gi; });
  var unter = kopf(bid, gi);
  if(!L.length) return unter + '<div class="lay solo"><div class="ct"><h2 class="kt">' + esc(B.g[gi]) + '</h2><p class="bald">Dieser Teil wird gerade übersetzt und folgt in der nächsten Etappe.</p></div></div>';
  if(L[0].ansicht && window[L[0].ansicht]) return unter + window[L[0].ansicht](B, gi, L, kid);
  var P = packen(L), mine = P[0];
  if(kid) P.forEach(function(q){ q.forEach(function(k){ if(k.id === kid) mine = q; }); });
  var side = P.length > 1 ? '<nav class="side">' + P.map(function(q, i){
    return '<a class="' + (q === mine ? "on" : "") + '" onclick="go(\'k/' + bid + "/" + gi + "/" + q[0].id + '\')">' + esc(kurz(q[0].t)) + (i === 0 ? '<button class="fold" onclick="event.stopPropagation();falten()" title="Leiste einklappen (<)">‹</button>' : "") + "</a>" +
      (q === mine && q.length > 1 ? '<div class="sj">' + q.slice(1).map(function(k){ return '<a onclick="springe(\'kp-' + k.id + '\')">' + esc(kurz(k.t)) + "</a>"; }).join("") + "</div>" : ""); }).join("") + "</nav>" : "";
  var body = mine.map(function(k, i){ return abschnitt(k, i === 0 && mine === P[0] && L[0].sub ? L[0].sub : ""); }).join("");
  if(kid && mine[0].id !== kid) setTimeout(function(){ springe("kp-" + kid, true); }, 30);
  return unter + lay(side, body);
}
function abschnitt(k, sub){
  var bild = k.img ? bildTag(k.img) : "";
  return '<section class="ab" id="kp-' + k.id + '"><header class="kh"><h2>' + esc(k.t) + (k.p ? ' <a class="pg" onclick="buch(' + k.p + ')">S. ' + k.p + "</a>" : "") + "</h2>" + (sub ? '<p class="motto">' + esc(sub) + "</p>" : "") + "</header>" +
    '<div class="txt">' + bild + blk(k.b) + "</div></section>";
}
function lay(side, body){
  if(!side) return '<div class="lay solo"><div class="ct">' + body + "</div></div>";
  if(ST.fold) return '<div class="lay zu"><button class="fold auf" onclick="falten()" title="Leiste ausklappen (<)">›</button><div class="ct">' + body + "</div></div>";
  return '<div class="lay">' + side + '<div class="ct">' + body + "</div></div>";
}
function falten(){ ST.fold = !ST.fold; save(); render(); }
function springe(id, sofort){ var e = document.getElementById(id); if(e) e.scrollIntoView({block:"start", behavior: sofort ? "auto" : "smooth"}); }

/* ---------- Startseite ---------- */
var ABENTEUER = [
  {id:"diebstahl", t:"Nicht ganz so großer Diebstahl", bild:"ngd-katze", pos:"50% 30%"},
  {id:"frauen", t:"Kleine Frauen", bild:"kf-titel", pos:"50% 35%"},
  {id:"akademie", t:"Grundlagen der Unsichtbaren Akademie", bild:"gua-titel", pos:"50% 40%"}
];
function viewStart(){
  kopf("start");
  var akten = BEREICHE.map(function(B){
    return '<section class="akte"><a class="ab-bild" onclick="go(\'k/' + B.id + '/0\')"><img src="img/full/' + B.bild + '.webp" alt="" loading="lazy"></a><h2><a onclick="go(\'k/' + B.id + '/0\')">' + esc(B.t) + "</a></h2>" +
      (B.g.length > 1 ? '<nav>' + B.g.map(function(g, i){ return '<a onclick="go(\'k/' + B.id + "/" + i + '\')">' + esc(g) + "</a>"; }).join("") + "</nav>" : "") + "</section>";
  }).join("");
  var ab = ABENTEUER.map(function(A){ var da = !!DW.AB[A.id];
    return '<a class="plakat' + (da ? "" : " spaeter") + '" onclick="' + (da ? "go('a/" + A.id + "')" : "") + '"><span class="pb" style="background-image:url(img/full/' + A.bild + ".webp);background-position:" + A.pos + '"></span><b>' + esc(A.t) + "</b></a>"; }).join("");
  return '<div class="start"><header class="held"><div class="atuin"></div><div class="titel"><img class="logo" src="img/deko/logo-hell.webp" alt="Terry Pratchetts Scheibenwelt"><p class="unterz">Abenteuer in Ankh-Morpork</p></div></header>' +
    '<div class="stadt"><div class="akten">' + akten + "</div>" +
    '<h2 class="abt"><span>Abenteuer</span></h2><div class="plakate">' + ab + "</div></div></div>";
}

/* ---------- Render ---------- */
function render(){
  var h = (location.hash || "#start").slice(1).split("/").map(decodeURIComponent), v = h[0] || "start", out;
  document.body.className = document.body.className.replace(/\bv-\S+/g, "").trim() + " v-" + v;
  if(v === "k") out = viewKapitel(h[1], h[2], h[3]);
  else if(v === "a" && window.viewAbenteuer) out = viewAbenteuer(h[1], h[2]);
  else out = viewStart();
  var same = window.__lh === location.hash, y = scrollY; window.__lh = location.hash;
  APP.innerHTML = out; scrollTo(0, same ? y : 0);
  document.body.classList.toggle("mitunter", !!APP.querySelector(".unter"));
}

/* ---------- Burger-Menü ---------- */
function menu(on){
  if(on){
    document.getElementById("mmP").innerHTML = '<h3>Werkzeuge</h3>' +
      '<button onclick="menu(false);gmMap()">Stadtkarte</button><button onclick="menu(false);sucheOpen()">Suche</button><button onclick="menu(false);Galerie.open(\'discworld\')">Galerie</button>' +
      '<h3>Abenteuer</h3>' + ABENTEUER.map(function(A){ return '<button onclick="menu(false);go(\'a/' + A.id + '\')"' + (DW.AB[A.id] ? "" : " disabled") + ">" + esc(A.t) + "</button>"; }).join("") +
      '<button onclick="menu(false);go(\'k/charaktere/5\')">Gruppenakte und Charakterbögen</button>' +
      '<h3>Buch</h3><button onclick="menu(false);buch(1)">Grundregelwerk öffnen</button><button onclick="menu(false);modal(BV.settingsHTML())">PDF hochladen …</button>';
  }
  document.getElementById("mmB").classList.toggle("on", on); document.getElementById("mmP").classList.toggle("on", on);
}
document.addEventListener("keydown", function(e){
  if(/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "") || e.ctrlKey || e.metaKey || e.altKey) return;
  if(e.key === "Escape"){ var kp = document.getElementById("kartePop"); if(kp){ kp.remove(); e.preventDefault(); return; } var m = document.querySelector(".modal"); if(m){ m.remove(); e.preventDefault(); return; } menu(false); }
  if(e.key === "h") document.body.classList.toggle("notop");
  if(e.key === "<"){ if(document.querySelector(".side,.fold.auf")) falten(); }
});

/* ---------- Suche ---------- */
if(window.GSuche){
  GSuche.add(function(add){
    BEREICHE.forEach(function(B){ (DW.K[B.id] || []).forEach(function(k){ add(B.g[k.g] + " › " + k.t, B.t, "#k/" + B.id + "/" + k.g + "/" + k.id, k.b); }); });
    Object.keys(DW.NSC).forEach(function(id){ var n = DW.NSC[id]; add(n.name, "Figuren", function(){ nscOpen(id); }, n); });
    Object.keys(DW.AB).forEach(function(id){ var A = DW.AB[id]; (A.szenen || []).forEach(function(s){ add(A.t + " › " + s.t, "Abenteuer", "#a/" + id + "/" + s.id, s); }); });
  });
  window.sucheOpen = GSuche.open;
}
