/* THE SPIRE – Stadt (Entwurf 2 und 3). Routen: #stadt (Karte + 8 Domänen) · #stadt/<domäne> (Distrikte der Domäne) · #stadt/<domäne>/<distrikt>[/<abschnitt>]
   Daten: SP_STADT_INDEX (stadt-index.js), SP_KARTE (stadt-karte.js), SP_STADT[<domäne>].distrikte (stadt-<domäne>.js, Format plan/SPIRE_PLAN.md Abschnitt 5).
   Die Distrikt-Seite ist datengetrieben: neue Domänen brauchen nur eine Datendatei und einen Eintrag in index.html/sw.js. */
window.SP_STADT = window.SP_STADT || {};
var ST_ANKER = null;
function stDom(id){ return SP_STADT_INDEX.filter(function(d){ return d.id === id; })[0]; }
function stData(dom, id){ var D = SP_STADT[dom]; return D && (D.distrikte || []).filter(function(x){ return x.id === id; })[0]; }
function stKurz(dom, d){ var D = stData(dom, d.id); return D ? D.kurz : d.t.replace(/ unserer .*$/, ""); }
function stAnfang(L){
  var t = ""; for(var i = 0; i < (L || []).length; i++){ if(typeof L[i] === "string" && L[i].charAt(0) !== "("){ t = L[i]; break; } }
  t = t.replace(/\*|\[\[.+?\]\]/g, ""); var s = "", par = t.split(/(?<=[.!?])(?<!Hl\.)\s/);
  for(var j = 0; j < par.length && s.length < 70; j++) s += (s ? " " : "") + par[j];
  if(s.length > 150){ s = s.slice(0, 150).replace(/\s+\S*$/, "") + " …"; } else if(s.length < t.length) s += " …";
  return s;
}

/* ---------- Karte + Domänen ---------- */
function stHv(key, on){ document.querySelectorAll('.kw polygon[data-d="' + key + '"]').forEach(function(p){ p.classList.toggle("hv", on); }); }
function stPop(e, id){
  var f = SP_KARTE.flaechen.filter(function(x){ return x.id === id; })[0], pop = document.getElementById("kpop"), w = document.querySelector(".kw");
  if(!f || !pop) return;
  var dm = f.dom ? stDom(f.dom) : null;
  pop.innerHTML = "<b>" + esc(f.t) + "</b>" + ((dm || f.x) ? "<small>" + (dm ? esc(dm.t) + " · S. " + f.p + (f.x ? " – " : "") : "") + esc(f.x || "") + "</small>" : "");
  var r = w.getBoundingClientRect(), x = e.clientX - r.left + 16, y = e.clientY - r.top + 16;
  pop.style.display = "block";
  x = Math.max(6, Math.min(x, r.width - pop.offsetWidth - 6)); y = Math.max(6, Math.min(y, r.height - pop.offsetHeight - 6));
  pop.style.left = x + "px"; pop.style.top = y + "px";
}
function stPopAus(){ var p = document.getElementById("kpop"); if(p) p.style.display = "none"; }
function stKlick(id){
  var f = SP_KARTE.flaechen.filter(function(x){ return x.id === id; })[0]; if(!f) return;
  if(f.dom){ go("stadt/" + f.dom + "/" + f.d); return; }
  stPopAus();
  var m = modal('<h3 class="un" style="margin-top:0">' + esc(f.t) + '</h3><p>' + esc(f.x) + '</p>' + (f.chips || []).map(function(c){ return '<span class="chip" onclick="document.querySelector(\'.modal\').remove();go(\'stadt/' + c[1] + '/' + c[2] + '\')">' + esc(c[0]) + '</span>'; }).join(""));
}
function stUebersicht(){
  var K = SP_KARTE;
  var poly = K.flaechen.map(function(f){
    return '<polygon data-k="' + f.id + '"' + (f.dom ? ' data-d="' + f.dom + '/' + f.d + '" style="cursor:pointer"' : (f.chips ? ' style="cursor:pointer"' : '')) + ' points="' + f.poly + '" onmouseenter="stPop(event,\'' + f.id + '\')" onmousemove="stPop(event,\'' + f.id + '\')" onmouseleave="stPopAus()" onclick="stKlick(\'' + f.id + '\')"></polygon>';
  }).join("");
  var karte = '<div class="kw"><img src="' + IMG("karte") + '" alt=""><svg viewBox="0 0 ' + K.w + ' ' + K.h + '" preserveAspectRatio="none">' + poly + '</svg><div class="kpop" id="kpop"></div></div>';
  var dom = SP_STADT_INDEX.map(function(d){
    return '<div class="d"><div class="im" onclick="go(\'stadt/' + d.id + '\')"><img src="' + IMG(d.bild) + '" alt="" style="object-position:' + (d.pos || "center 35%") + '"></div><h3 onclick="go(\'stadt/' + d.id + '\')">' + esc(d.t) + pgl(d.p) + '</h3><ul>' +
      d.distrikte.map(function(x){ return '<li onclick="go(\'stadt/' + d.id + '/' + x.id + '\')" onmouseenter="stHv(\'' + d.id + '/' + x.id + '\',1)" onmouseleave="stHv(\'' + d.id + '/' + x.id + '\',0)"><b>' + esc(x.t) + '</b><span>' + x.p + '</span></li>'; }).join("") + '</ul></div>';
  }).join("");
  return spielTabs("stadt") + '<div class="stadt">' + karte + '<div class="dom">' + dom + '</div></div>';
}

/* ---------- zweite Reiterzeile: Domäne + ihre Distrikte ---------- */
function stSub(I, cur){
  return '<div class="subtabs"><a class="dn' + (!cur ? ' on' : '') + '" onclick="go(\'stadt/' + I.id + '\')">' + esc(I.t) + '</a>' +
    I.distrikte.map(function(d){ return '<a class="' + (d.id === cur ? 'on' : '') + '" onclick="go(\'stadt/' + I.id + '/' + d.id + '\')">' + esc(stKurz(I.id, d)) + '</a>'; }).join("") + '</div>';
}

/* ---------- Domänen-Seite: Kachelraster der Distrikte ---------- */
function stDomaene(domId){
  var I = stDom(domId); if(!I) return stUebersicht();
  var kach = I.distrikte.map(function(x){
    var D = stData(domId, x.id);
    return '<div class="dk2" onclick="go(\'stadt/' + domId + '/' + x.id + '\')">' + (D && D.bild ? '<div class="im"><img src="' + IMG(D.bild) + '" alt=""></div>' : '') +
      '<h3>' + esc(x.t) + pgl(x.p) + '</h3>' + (D ? '<p>' + esc(stAnfang(D.abschnitte[0].b)) + '</p>' : '') + '</div>';
  }).join("");
  return spielTabs("stadt") + stSub(I, null) + voll('<div data-pgbook="sp_cmf"><h1 class="titel">' + esc(I.t) + pgl(I.p) + '</h1><div class="raster ' + (I.distrikte.length === 4 ? 'r2' : 'r3') + ' dkr">' + kach + '</div></div>');
}

/* ---------- Distrikt-Seite (Entwurf 3) ---------- */
function stBlocks(L){
  var out = "", G = [];
  var fl = function(){ if(!G.length) return; out += '<div class="raster ' + (G.length > 1 ? 'r2 ' : '') + 'gr">' + G.map(function(id){ return '<div id="geg-' + id + '">' + gegnerKarte(id, "d") + '</div>'; }).join("") + '</div>'; G = []; };
  (L || []).forEach(function(b){ if(b && b.t === "gegner") G.push(b.id); else { fl(); out += blk([b]); } });
  fl(); return out;
}
function stGegner(D){ var G = []; D.abschnitte.forEach(function(s){ (s.b || []).forEach(function(b){ if(b && b.t === "gegner" && G.indexOf(b.id) < 0 && gById(b.id)) G.push(b.id); }); }); return G; }
function stJ(id){ jump(id); }
function stJG(id){ jump("geg-" + id); var e = document.querySelector("#geg-" + id + " .gz"); if(e && !e.classList.contains("open")){ e.classList.add("open"); GOPEN[id + ":d"] = true; } }
function stDistrikt(domId, distId, anker){
  var I = stDom(domId), x = I && I.distrikte.filter(function(d){ return d.id === distId; })[0];
  if(!x) return stDomaene(domId);
  var D = stData(domId, distId);
  if(!D) return spielTabs("stadt") + stSub(I, distId) + voll(folgt(x.t, x.p, "cmf"));
  var G = stGegner(D);
  var side = '<h5 onclick="scrollTo({top:0,behavior:\'smooth\'})">' + esc(D.kurz) + '</h5>' +
    D.abschnitte.map(function(s, i){ var id = "ab-" + s.id; return '<a data-j="' + id + '" class="' + (i === 0 ? 'on' : '') + '" onclick="stJ(\'' + id + '\')">' + esc(s.t ? (s.k || kurz(s.t)) : "Einleitung") + '</a>'; }).join("") +
    (G.length ? '<h5>Gegner</h5>' + G.map(function(id){ var g = gById(id); return '<a class="sub" onclick="stJG(\'' + id + '\')">' + esc(g.kurz || g.t) + '</a>'; }).join("") : '') +
    ((D.verweise || []).length ? '<h5>Verweise</h5>' + D.verweise.map(function(v){ return '<a class="sub" onclick="go(\'' + v.ziel + '\')">' + esc(v.t) + (v.p ? ' · S. ' + v.p : '') + '</a>'; }).join("") : '');
  var vw = (D.verweise || []).length ? '<div class="vwk">' + D.verweise.map(function(v){ return '<span class="chip" onclick="go(\'' + v.ziel + '\')">' + esc(v.t) + (v.p ? ' · S. ' + v.p : '') + '</span>'; }).join("") + '</div>' : '';
  var body = '<div class="dbody" data-pgbook="sp_cmf"><h1 class="titel">' + esc(D.t) + pgl(D.p) + '</h1>' +
    (D.bild ? '<img class="dbild" src="' + IMG(D.bild) + '" alt="" onclick="zoom(this.src)">' : '') +
    D.abschnitte.map(function(s, i){
      return '<section id="ab-' + s.id + '">' + (i ? '<h2 class="ab">' + esc(s.t) + pgl(s.p) + '</h2>' : '') + stBlocks(s.b) + (i === 0 ? vw : '') + '</section>';
    }).join("") + '</div>';
  ST_ANKER = anker || null;
  return spielTabs("stadt") + stSub(I, distId) + lay(side, body).replace('<div class="wrap', '<div class="wrap sb');
}

SP_VIEW.stadt = function(teile){
  if(!teile[0]) return stUebersicht();
  if(!teile[1]) return stDomaene(teile[0]);
  return stDistrikt(teile[0], teile[1], teile[2]);
};

/* Seitenleiste folgt dem Lesefortschritt; Sprung zum Abschnitt aus der Adresse */
(function(){
  var _ar = window.afterRender;
  window.afterRender = function(){
    if(_ar) _ar();
    if(ST_ANKER){ var a = ST_ANKER; ST_ANKER = null; setTimeout(function(){ var e = document.getElementById("ab-" + a) || document.getElementById("geg-" + a); if(e) jump(e.id); }, 30); }
  };
  window.addEventListener("scroll", function(){
    var L = document.querySelectorAll(".side a[data-j]"); if(!L.length) return;
    var cur = null, lim = (document.body.classList.contains("notop") ? 0 : 56) + 48 + 38 + 40;
    L.forEach(function(a){ var e = document.getElementById(a.getAttribute("data-j")); if(e && e.getBoundingClientRect().top <= lim) cur = a; });
    if(!cur) cur = L[0];
    L.forEach(function(a){ a.classList.toggle("on", a === cur); });
  }, {passive:true});
})();
(window.SP_SUCHE = window.SP_SUCHE || []).push(function(add){
  Object.keys(SP_STADT).forEach(function(k){ var I = stDom(k); (SP_STADT[k].distrikte || []).forEach(function(D){
    D.abschnitte.forEach(function(s, i){ add(i ? D.t + " – " + s.t : D.t + (D.en ? " (" + D.en + ")" : ""), "Stadt · " + (I ? I.t : k), "stadt/" + k + "/" + D.id + (i ? "/" + s.id : ""), s.p, s.b.filter(function(b){ return !(b && b.t === "gegner"); }), "cmf"); });
  }); });
});
