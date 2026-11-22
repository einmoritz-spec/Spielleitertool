/* Nachschlagen: #n/<kapitel>[/<abschnitt>] – Tabs (Kapitel), Seitenleiste (Abschnitte), Raster, Fußzeile */
"use strict";
var NACH_TABS = [["sc","Spielercharakter"],["fe","Fertigkeiten"],["ka","Kampf & Schaden"],["ma","Magie"],["au","Ausrüstung"],["be","Bestiarium"],["ab","Abenteuer"],["ta","Tabellen"]];
function nachKap(id){ return (window.DB_NACH || {})[id]; }
function nkOpen(k, def){ var o = (ST.open || {})["nk_" + k]; return o === undefined ? def : !!o; }
function nkTog(k, def){ ST.open = ST.open || {}; ST.open["nk_" + k] = !nkOpen(k, def); save(); render(); }
function nlist(items, tag){ return '<' + tag + (tag === "ul" ? ' class="st"' : '') + '>' + items.map(function(x){ return '<li>' + md(x) + '</li>'; }).join("") + '</' + tag + '>'; }
function ntbl(t){
  return '<table class="w6' + (t.head ? '' : ' kv') + '">' + (t.head ? '<tr>' + t.head.map(function(c){ return '<th>' + esc(c) + '</th>'; }).join("") + '</tr>' : '') +
    t.rows.map(function(r){ return '<tr>' + r.map(function(c){ return '<td>' + md(c) + '</td>'; }).join("") + '</tr>'; }).join("") + '</table>';
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
  var meta = typ === "ht" ? '<span class="mt">WP ' + esc(c.w) + '</span>' : '<span class="mt">' + esc(c.a) + '</span>';
  if(!on) return '<div class="zu nk" onclick="nkTog(\'' + k + '\',' + def + ')">' + esc(c.n) + meta + '</div>';
  var txt = typ === "ht" ? '<p>' + md(c.t) + '</p>' : c.t.map(function(t){ return '<p>' + md(t) + '</p>'; }).join("");
  return '<div class="karte nsc nkc"><div class="band" onclick="nkTog(\'' + k + '\',' + def + ')">' + esc(c.n) + '</div>' +
    '<div class="zl"><b>' + (typ === "ht" ? 'Voraussetzung' : 'Attribut') + ':</b> ' + esc(typ === "ht" ? c.r : c.a) + (typ === "ht" ? ' &nbsp; <b>WP:</b> ' + esc(c.w) : '') + pgl(c.p) + '</div>' +
    '<div class="nt">' + txt + '</div><div class="kr u"><i></i><u></u><i></i></div></div>';
}
/* Abschnitt → Raster-Zellen: Überschrift + Text je eine Zelle, Karten/Steinkästen eigene Zellen */
function nabs(a){
  var cells = [], cur = null;
  function flush(){ if(cur){ cells.push('<div class="ab' + (cur.indexOf('<h3') === 0 ? '' : ' voll') + '">' + cur + '</div>'); cur = null; } }
  a.b.forEach(function(b){
    if(b.h){ flush(); cur = '<h3 class="uh">' + esc(b.h) + (b.p ? pgl(b.p) : "") + '</h3>'; return; }
    if(b.karte){ flush(); cells.push('<div class="karte nkk"><div class="name">' + esc(b.karte.h) + pgl(b.karte.p) + '</div>' + nbody(b.karte.b) + '</div>'); return; }
    if(b.stein){ flush(); cells.push('<div class="zelle"><div class="stein"><div class="bh">' + esc(b.stein.h) + '</div>' + nbody(b.stein.b) + '</div></div>'); return; }
    if(b.zit){ flush(); cells.push('<div class="vorlesen zit voll">' + b.zit.map(function(p){ return '<p>' + md(p) + '</p>'; }).join("") + (b.q ? '<div class="qu">– ' + md(b.q) + '</div>' : '') + '</div>'); return; }
    if(b.fk){ flush(); cells.push('<div class="kgrid voll">' + b.fk.map(function(c){ return ncard(c, true, "fk"); }).join("") + '</div>'); return; }
    if(b.ht){ flush(); cells.push('<div class="kgrid voll">' + b.ht.map(function(c){ return ncard(c, false, "ht"); }).join("") + '</div>'); return; }
    cur = (cur || "") + nbody([b]);
  });
  flush();
  return '<div class="gr">' + cells.join("") + '</div>';
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
  var body = '<div class="kopf"><h1>' + esc(cur.t) + '</h1>' + pgl(cur.p) + '</div>' + nabs(cur) +
    '<div class="fuss"><div class="fz">' + fl(pv, "pv") + '<div class="em" title="' + esc((K.n ? 'Kapitel ' + K.n + ' – ' : '') + K.t) + '">' + esc(K.n) + '</div>' + fl(nx, "nx") + '</div></div>';
  return tb + lay(side, body);
};
