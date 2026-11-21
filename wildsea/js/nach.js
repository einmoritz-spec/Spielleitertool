/* Nachschlagen: #nach/<bereich>/<abschnitt-id>. Daten: WS_NACH[bereich] = [{id,k,t,p,b:[Blöcke]}]
   Blöcke: {a:Absatz} {h:Zwischentitel} {l:[Liste]} {c:Titel,x:Text[,l:[..]]} Karte (Raster) {erz:Text} Vorlesekasten
           {bsp:Titel,z:[[Sprecher,Text]]} Beispiel {tab:{k:[Kopf],z:[[Zellen]]}} Tabelle {box:Titel,x:[Absätze]} Kasten */
var NACH = [["regeln","Regeln"],["charaktere","Charaktere"],["schiffe","Schiffe"],["wildsee","Die Wildsee"],["leitfaden","Leitfaden"],["tisch","Am Tisch"]];
function nBlock(b){
  if(b.a != null) return '<p class="na">' + esc(b.a).replace(/\n/g, "<br>") + '</p>';
  if(b.h != null) return '<h3 class="nh">' + esc(b.h) + '</h3>';
  if(b.erz != null) return '<div class="vl nv"><p>' + esc(b.erz).replace(/\n/g, "</p><p>") + '</p></div>';
  if(b.bsp) return '<div class="nb"><h4>' + esc(b.bsp) + '</h4>' + b.z.map(function(z){ return '<p>' + (z[0] ? '<b>' + esc(z[0]) + ':</b> ' : '') + esc(z[1]) + '</p>'; }).join("") + '</div>';
  if(b.tab) return '<table class="nt"><thead><tr>' + b.tab.k.map(function(x){ return '<th>' + esc(x) + '</th>'; }).join("") + '</tr></thead><tbody>' + b.tab.z.map(function(r){ return '<tr>' + r.map(function(x){ return '<td>' + esc(x) + '</td>'; }).join("") + '</tr>'; }).join("") + '</tbody></table>';
  if(b.box) return '<div class="el nx"><h3>' + esc(b.box) + '</h3>' + b.x.map(function(x){ return '<p>' + esc(x).replace(/\n/g, "<br>") + '</p>'; }).join("") + '</div>';
  if(b.c) return '<div class="el nc"><h3>' + esc(b.c) + '</h3>' + (b.x ? '<p>' + esc(b.x).replace(/\n/g, "<br>") + '</p>' : '') + (b.l ? '<ul class="bul">' + b.l.map(function(x){ return '<li>' + esc(x) + '</li>'; }).join("") + '</ul>' : '') + '</div>';
  if(b.l) return '<ul class="bul nl">' + b.l.map(function(x){ return '<li>' + esc(x) + '</li>'; }).join("") + '</ul>';
  return "";
}
/* Bilder je Abschnitt: window.WS_NIMG[bereich][id] = [[datei,breite,hoehe],...] (Pfad relativ zu img/) */
function nBilder(bereich, id){
  var L = window.WS_NIMG && WS_NIMG[bereich] && WS_NIMG[bereich][id], hero = "";
  if(L && window.WS_HERO && WS_HERO[bereich + "/" + id]){
    var hk = WS_HERO[bereich + "/" + id], hi = -1;
    L.forEach(function(m, i){ if(hi < 0 && "img/" + m[0] === "img/" + hk.img) hi = i; });
    if(hi >= 0){ hero = nHero(bereich + "/" + id, L[hi]); L = L.filter(function(m, i){ return i !== hi; }); }
    else hero = nHero(bereich + "/" + id);
  } else if(!L && window.WS_HERO && WS_HERO[bereich + "/" + id]) hero = nHero(bereich + "/" + id);
  if(!L || !L.length) return hero;
  return hero + '<div class="nimgs n' + Math.min(L.length, 4) + '">' + L.map(function(m){
    var r = m[1] / m[2], k = r > 1.35 ? "wide" : r < 0.8 ? "tall" : "sq";
    return '<figure class="nimg ' + k + '" style="--r:' + r.toFixed(3) + '"><img loading="lazy" src="img/' + m[0] + '" alt="" onclick="nZoom(this.src)"></figure>';
  }).join("") + '</div>';
}
function nZoom(src){ var d = document.createElement("div"); d.className = "gzoom"; d.onclick = function(){ d.remove(); }; d.innerHTML = '<img src="' + src + '" alt="">'; document.body.appendChild(d); }
function nGruppiert(bl){
  // aufeinanderfolgende Karten {c} zu einem Raster, Absätze/Listen in Lesebreite
  var out = "", cards = [];
  function flush(){ if(cards.length){ out += '<div class="ncg">' + cards.join("") + '</div>'; cards = []; } }
  bl.forEach(function(b){ if(b.c || b.box){ cards.push(nBlock(b)); } else { flush(); out += nBlock(b); } });
  flush(); return out;
}
/* Charaktere-Übersicht: Porträtkarten wie bei Vaesen */
function viewCharUebersicht(L){
  var gr = [], idx = {};
  L.forEach(function(s){ if(!idx[s.k]){ idx[s.k] = {k:s.k, a:[]}; gr.push(idx[s.k]); } idx[s.k].a.push(s); });
  function card(s){
    var m = window.WS_NIMG && WS_NIMG.charaktere && WS_NIMG.charaktere[s.id], p = m && m[0] && /^(blut|herkunft|posten)\//.test(m[0][0]) ? m[0][0] : null;
    return '<div class="cc" onclick="go(\'nach/charaktere/' + s.id + '\')"><div class="im">' + (p ? '<img loading="lazy" src="img/' + p + '" alt="">' : '<span class="ph">' + esc(s.t.charAt(0)) + '</span>') + '</div><div class="tx"><h3>' + esc(s.t.split(":")[0]) + '</h3><small>S. ' + s.p + '</small></div></div>';
  }
  var PK = {"Blutlinien":1, "Herkünfte":1, "Posten":1};
  gr.sort(function(a, b){ return (PK[b.k] ? 1 : 0) - (PK[a.k] ? 1 : 0); });
  var out = gr.map(function(g){
    if(!PK[g.k]) return '<h2 class="sec">' + esc(g.k) + '</h2><div class="cl">' + g.a.map(function(s){ return '<a onclick="go(\'nach/charaktere/' + s.id + '\')">' + esc(s.t.split(":")[0]) + '<small>S. ' + s.p + '</small></a>'; }).join("") + '</div>';
    if(false) return '<h2 class="sec">' + esc(g.k) + '</h2><div class="cm">' + g.a.map(function(s){
      var m = window.WS_NIMG && WS_NIMG.charaktere && WS_NIMG.charaktere[s.id], p = m && m[0] ? m[0][0] : null;
      return '<a onclick="go(\'nach/charaktere/' + s.id + '\')"><span class="av">' + (p ? '<img loading="lazy" src="img/' + p + '" alt="">' : '') + '</span><b>' + esc(s.t.split(":")[0]) + '</b><small>S. ' + s.p + '</small></a>'; }).join("") + '</div>';
    return '<h2 class="sec">' + esc(g.k) + '</h2><div class="ccs">' + g.a.map(card).join("") + '</div>';
  }).join("");
  return '<div class="pad cuw">' + out + '</div>';
}
function viewNach(bereich, id, sz){
  var P = sz ? "szenario/" : "nach/";
  var TL = sz ? (window.WS_SZENARIEN || []).filter(function(x){ return x.id; }).map(function(x){ return [x.id, x.t]; }) : NACH;
  var meta = TL.filter(function(n){ return n[0] === bereich; })[0];
  if(!meta) return viewPlatzhalter(bereich);
  var tabs = '<div class="tabs">' + TL.map(function(n){ return '<a class="' + (n[0] === bereich ? 'on' : '') + '" onclick="go(\'' + P + n[0] + '\')">' + esc(n[1]) + '</a>'; }).join("") + '</div>';
  var L = (window.WS_NACH || {})[bereich] || [];
  if(!L.length) return tabs + '<div class="pad"><p class="na">Dieser Bereich folgt.</p></div>';
  if(bereich === "charaktere" && !id) return tabs + viewCharUebersicht(L);
  var cur = L.filter(function(s){ return s.id === id; })[0] || L[0], ki = cur.k, side = "", last = null;
  L.forEach(function(s){
    if(s.k !== last){ side += '<h4 class="' + (s.k === ki ? 'on' : '') + '" onclick="go(\'' + P + bereich + '/' + s.id + '\')">' + esc(s.k) + '</h4>'; last = s.k; }
    if(s.k === ki) side += '<a class="' + (s.id === cur.id ? 'on' : '') + '" onclick="go(\'' + P + bereich + '/' + s.id + '\')">' + esc(s.t.split(":")[0]) + '</a>';
  });
  var i = L.indexOf(cur), pv = L[i - 1], nx = L[i + 1];
  var nav = '<div class="gnav">' + (pv ? '<a onclick="go(\'' + P + bereich + '/' + pv.id + '\')">‹ ' + esc(pv.t) + '</a>' : '<span></span>') + (nx ? '<a onclick="go(\'' + P + bereich + '/' + nx.id + '\')">' + esc(nx.t) + ' ›</a>' : '') + '</div>';
  var body = '<div class="hd"><h1>' + esc(cur.t) + '</h1><span class="pg">' + (sz ? '<a style="text-decoration:none;cursor:default">S. ' + cur.p + '</a>' : '<a onclick="openBook(\'ws_core\',' + cur.p + ')">S. ' + cur.p + '</a>') + '</span></div>' + nBilder(bereich, cur.id) + '<div class="nbody">' + nGruppiert(cur.b) + '</div>' + nav;
  return tabs + lay('<nav class="side">' + side + '</nav>', body);
}
