/* Nachschlagen: #n/<kapitel>[/<abschnitt>] – Tabs (Kapitel), Seitenleiste (Abschnitte), Raster, Fußzeile */
"use strict";
var NACH_TABS = [["sc","Spielercharakter"],["fe","Fertigkeiten"],["ka","Kampf & Schaden"],["ma","Magie"],["au","Ausrüstung"],["be","Bestiarium"],["ab","Abenteuer"],["ta","Tabellen"]];
function nachKap(id){ return (window.DB_NACH || {})[id]; }
function nkOpen(k, def){ var o = (ST.open || {})["nk_" + k]; return o === undefined ? def : !!o; }
function nkTog(k, def){ ST.open = ST.open || {}; ST.open["nk_" + k] = !nkOpen(k, def); save(); render(); }
function nlist(items, tag){ return '<' + tag + (tag === "ul" ? ' class="st"' : '') + '>' + items.map(function(x){ return '<li>' + md(x) + '</li>'; }).join("") + '</' + tag + '>'; }
/* Anklickbare W6-Tabellen: Klick = markiert (.an), nochmal = erledigt (.weg), nochmal = zurück; Zustand in ST.w6 */
function w6Get(id, i){ try{ return ((ST.w6 || {})[id] || {})[i] || 0; }catch(e){ return 0; } }
function w6Click(id, i){ try{ ST.w6 = ST.w6 || {}; ST.w6[id] = ST.w6[id] || {}; ST.w6[id][i] = (w6Get(id, i) + 1) % 3; if(!ST.w6[id][i]) delete ST.w6[id][i]; save(); }catch(e){} render(); }
function ntbl(t){
  var klick = !!t.id;
  return '<table class="w6' + (t.head && (t.head.length >= 5 || t.voll) ? ' wd' : '') + (t.head ? (t.head.length === 4 && t.head[2] === t.head[0] ? ' q4' : '') : ' kv') + (klick ? ' kl' : '') + (window.__fk === "au" ? ' gt' : '') + '">' + (t.head ? '<tr>' + t.head.map(function(c){ return '<th>' + esc(c) + '</th>'; }).join("") + '</tr>' : '') +
    t.rows.map(function(r, i){ var z = klick ? w6Get(t.id, i) : 0; return '<tr' + (klick ? ' class="' + (z === 1 ? 'an' : z === 2 ? 'weg' : '') + '" onclick="w6Click(\'' + t.id + '\',' + i + ')"' : '') + '>' + r.map(function(c){ return '<td>' + md(c) + '</td>'; }).join("") + '</tr>'; }).join("") + '</table>';
}
function nbody(arr){
  return arr.map(function(b){
    if(typeof b === "string") return '<p>' + md(b) + '</p>';
    if(b.ul) return nlist(b.ul, "ul");
    if(b.ol) return nlist(b.ol, "ol");
    if(b.tbl) return ntbl(b.tbl);
    return "";
  }).join("");
}
/* Fertigkeits- / Talentkarte, einklappbar */
function ncard(c, def, typ){
  var k = typ + "_" + slug(c.n), on = nkOpen(k, def);
  if(typ === "zk"){
    var mz = '<span class="mt">Rang ' + c.r + '</span>';
    if(!on) return '<div class="zu nk" onclick="nkTog(\'' + k + '\',' + def + ')">' + md(c.n) + mz + '</div>';
    function zl(l, v){ return '<div class="zl"><b>' + l + ':</b> ' + md(v) + '</div>'; }
    var tx = (Array.isArray(c.t) ? c.t : [c.t]).map(function(t){ return '<p>' + md(t) + '</p>'; }).join("");
    return '<div class="karte nsc nkc zkc"><div class="band" onclick="nkTog(\'' + k + '\',' + def + ')">' + esc(c.n) + '</div>' +
      '<div class="zl zl1"><b>Rang:</b> ' + c.r + '</div>' + zl("Voraussetzung", c.v) + zl("Anforderung", c.a) + zl("Zauberdauer", c.z) + zl("Reichweite", c.w) + zl("Wirkungsdauer", c.d) +
      '<div class="nt">' + tx + '</div><div class="kr u"><i></i><u></u><i></i></div></div>';
  }
  var meta = typ === "ht" ? '<span class="mt">WP ' + esc(c.w) + '</span>' : '<span class="mt">' + esc(c.a) + '</span>';
  if(!on) return '<div class="zu nk" onclick="nkTog(\'' + k + '\',' + def + ')">' + esc(c.n) + meta + '</div>';
  var txt = typ === "ht" ? '<p>' + md(c.t) + '</p>' : c.t.map(function(t){ return '<p>' + md(t) + '</p>'; }).join("");
  return '<div class="karte nsc nkc"><div class="band" onclick="nkTog(\'' + k + '\',' + def + ')">' + esc(c.n) + '</div>' +
    '<div class="zl"><b>' + (typ === "ht" ? 'Voraussetzung' : 'Attribut') + ':</b> ' + esc(typ === "ht" ? c.r : c.a) + (typ === "ht" ? ' &nbsp; <b>WP:</b> ' + esc(c.w) : '') + pgl(c.p) + '</div>' +
    '<div class="nt">' + txt + '</div><div class="kr u"><i></i><u></u><i></i></div></div>';
}
/* Abschnitt → Raster-Zellen: Überschrift + Text je eine Zelle, Karten/Steinkästen eigene Zellen */
function nabs(a){
  var cells = [], cur = null, curC = '';
  function flush(){ if(cur){ cells.push('<div class="ab' + (cur.indexOf('<h3') === 0 || !cells.length ? '' : ' voll') + (curC || (cur.length > 1700 ? ' l2' : '')) + '">' + cur + '</div>'); cur = null; } }
  a.b.forEach(function(b){
    if(b.h){ flush(); curC = b.cols ? ' c' + b.cols : (b.voll ? ' voll' : ''); cur = '<h3 class="uh">' + esc(b.h) + (b.p ? pgl(b.p) : "") + '</h3>'; return; }
    if(b.karte){ flush(); cells.push('<div class="karte nkk' + (function(l, u){ return l > 1500 && u ? ' voll kl2' : l > 900 ? ' z2' : ''; })(JSON.stringify(b.karte.b).length, JSON.stringify(b.karte.b).indexOf('"ul"') >= 0) + '"><div class="name">' + esc(b.karte.h) + pgl(b.karte.p) + '</div>' + nbody(b.karte.b) + '</div>'); return; }
    if(b.tbl && b.tbl.head && (b.tbl.head.length >= 5 || b.tbl.voll)){ var hc = cur || ""; cur = null; cells.push('<div class="ab voll">' + hc + ntbl(b.tbl) + '</div>'); return; }
    if(b.tbl && !cur && cells.length && /^<div class="zelle/.test(cells[cells.length - 1]) && !/<table/.test(cells[cells.length - 1])){
      var lc = cells.pop(); if(b.tbl.rows.length > 8 && lc.indexOf(' z2') < 0) lc = lc.replace('class="zelle', 'class="zelle z2');
      if(b.tbl.head && b.tbl.head.length >= 5) lc = lc.replace('class="zelle', 'class="zelle voll');
      cells.push(lc.replace(/<\/div>$/, ntbl(b.tbl) + '</div>')); return; }
    if(b.stein){ flush(); cells.push('<div class="zelle' + (JSON.stringify(b.stein.b).length > 420 ? ' z2' : '') + '"><div class="stein"><div class="bh">' + esc(b.stein.h) + '</div>' + nbody(b.stein.b) + '</div></div>'); return; }
    if(b.zit){ flush(); cells.push('<div class="vorlesen zit voll">' + b.zit.map(function(p){ return '<p>' + md(p) + '</p>'; }).join("") + (b.q ? '<div class="qu">– ' + md(b.q) + '</div>' : '') + '</div>'); return; }
    if(b.fk){ flush(); cells.push('<div class="kgrid voll">' + b.fk.map(function(c){ return ncard(c, true, "fk"); }).join("") + '</div>'); return; }
    if(b.zk && cur && cur.indexOf('<h3') === 0 && cur.indexOf('<p') < 0 && cur.indexOf('<ul') < 0){
      cells.push('<div class="ab voll">' + cur + '<div class="kgrid zg">' + b.zk.map(function(c){ return ncard(c, false, "zk"); }).join("") + '</div></div>'); cur = null; return; }
    if(b.zk){ flush(); cells.push('<div class="kgrid voll zg">' + b.zk.map(function(c){ return ncard(c, false, "zk"); }).join("") + '</div>'); return; }
    if(b.ht){ flush(); cells.push('<div class="kgrid voll">' + b.ht.map(function(c){ return ncard(c, false, "ht"); }).join("") + '</div>'); return; }
    cur = (cur || "") + nbody([b]);
  });
  flush();
  return '<div class="gr' + ((window.__fk === "ka" || window.__fk === "be" || window.__fk === "ab") && !a.plain ? ' mas' : '') + '">' + cells.join("") + '</div>';
}
function nachFlat(){ var r = []; NACH_TABS.forEach(function(t){ var d = nachKap(t[0]); if(d) d.abs.forEach(function(a){ r.push([t[0], a.id, d, a]); }); }); return r; }
DB_VIEWS.n = function(h){
  var kid = h[1] || "einf", K = DB_KAP.filter(function(k){ return k.id === kid; })[0] || DB_KAP[0], d = nachKap(K.id);
  window.__fk = K.id;
  var tb = tabs(NACH_TABS, K.id, function(id){ return "n/" + id; });
  if(!d) return tb + '<div class="kopf"><h1>' + esc(K.t) + '</h1></div><div class="leer">Dieses Kapitel folgt.</div>';
  var cur = d.abs.filter(function(a){ return a.id === h[2]; })[0] || d.abs[0];
  var side = '<nav class="side">' + d.abs.map(function(a){ return '<a class="' + (a === cur ? 'on' : '') + '" href="#n/' + K.id + '/' + a.id + '"><span>' + esc(a.t) + '</span><i>S. ' + a.p + '</i></a>'; }).join("") + '</nav>';
  var flat = nachFlat(), i = flat.findIndex(function(x){ return x[3] === cur; }), pv = flat[i - 1], nx = flat[i + 1];
  function fl(x, dir){ return x ? '<a class="' + dir + '" href="#n/' + x[0] + '/' + x[1] + '">' + (dir === "pv" ? '‹ ' : '') + esc(x[3].t) + (dir === "nx" ? ' ›' : '') + '</a>' : '<span></span>'; }
  var body = (cur.fig ? figBody(cur, h[3]) : '<div class="kopf"><h1>' + esc(cur.t) + '</h1>' + pgl(cur.p) + '</div>' + nabs(cur)) +
    '<div class="fuss"><div class="fz">' + fl(pv, "pv") + '<div class="em" title="' + esc((K.n ? 'Kapitel ' + K.n + ' – ' : '') + K.t) + '">' + esc(K.n) + '</div>' + fl(nx, "nx") + '</div></div>';
  return tb + lay(side, body);
};

/* Masonry-Packung für .gr.mas: Zellen wandern in die jeweils kürzeste Spalte (keine Lücken); .voll-Zellen trennen Gruppen */
function masPack(g){
  if(!g._z){ g._z = Array.prototype.slice.call(g.children); }
  var W = g.clientWidth, n = Math.max(1, Math.floor((W + 30) / 360));
  if(g._n === n) return; g._n = n;
  g.innerHTML = ""; var row = null, cols = null;
  g._z.forEach(function(z){
    if(z.classList.contains("voll") || n === 1){ row = null; g.appendChild(z); return; }
    if(!row){ row = document.createElement("div"); row.className = "mrow"; cols = []; for(var i = 0; i < n; i++){ var c = document.createElement("div"); c.className = "mcol"; row.appendChild(c); cols.push(c); } g.appendChild(row); }
    var m = cols[0]; cols.forEach(function(c){ if(c.offsetHeight < m.offsetHeight) m = c; }); m.appendChild(z);
  });
}
(function(){
  var prev = window.afterRender;
  window.afterRender = function(){
    if(prev) prev();
    var g = document.querySelector(".gr.mas"); if(!g) return;
    masPack(g);
    if(window.ResizeObserver){ if(window.__mro) window.__mro.disconnect(); window.__mro = new ResizeObserver(function(){ var x = document.querySelector(".gr.mas"); if(x) masPack(x); }); window.__mro.observe(g); }
  };
})();
