/* Gefahren-Browser (Kap. 10): Suche, Baum, Begegnungsleiste, Gefahren-Karte, Leisten */
var GKAT = [["natur","Naturgewalten"],["bestien","Bestien"],["insekten","Insekten"],["pflanzen","Pflanzen"],["konstrukte","Konstrukte"],["pluenderer","Plünderer"],["krankheiten","Krankheiten"],["leviathane","Leviathane"]];
function gById(id){ return (window.WS_GEFAHR || []).filter(function(g){ return g.id === id; })[0]; }
function GS(){ ST.geg = ST.geg || {enc:[], eig:{}, leisten:{}, q:""}; return ST.geg; }
function gEnc(id){ var s = GS(), e = s.enc.filter(function(x){ return x.id === id; })[0]; if(e) e.n++; else s.enc.push({id:id, n:1}); save(); render(); }
function gDel(ev, id){ ev.preventDefault(); var s = GS(); s.enc = s.enc.filter(function(x){ return x.id !== id; }); save(); render(); }
function gEig(id, i){ var e = GS().eig; e[id] = e[id] || {}; e[id][i] = !e[id][i]; save(); render(); }
function gLeiste(id){ var l = GS().leisten; l[id] = l[id] || []; l[id].push(["Leiste", 6, []]); save(); render(); }
function gLName(id, i){ var t = GS().leisten[id][i], n = prompt("Name der Leiste", t[0]); if(n){ t[0] = n; save(); render(); } }
function gLDot(id, i, j){ var t = GS().leisten[id][i]; t[2][j] = ((t[2][j] || 0) + 1) % 3; save(); render(); }
function gLMax(ev, id, i){ ev.preventDefault(); var t = GS().leisten[id][i]; t[1] = t[1] >= 12 ? 2 : t[1] + 1; save(); render(); }
function gLDel(id, i){ GS().leisten[id].splice(i, 1); save(); render(); }
function gQ(v){ GS().q = v; save(); var s = document.getElementById("gtree"); if(s) s.innerHTML = gTree(null); }
function gTree(cur){
  var q = (GS().q || "").toLowerCase(), L = window.WS_GEFAHR || [];
  return GKAT.map(function(k){
    var items = L.filter(function(g){ return g.kat === k[0] && (!q || (g.t + " " + (g.en || "")).toLowerCase().indexOf(q) >= 0); });
    if(!items.length) return '<h4 class="c" style="opacity:.45;cursor:default">' + k[1] + '</h4>';
    var open = q || (cur && cur.kat === k[0]);
    return '<h4 class="' + (open ? 'on' : '') + '" onclick="go(\'gefahren/' + items[0].id + '\')">' + k[1] + '</h4>' + (open ? items.map(function(g){ return '<a class="' + (cur && g.id === cur.id ? 'on' : '') + '" onclick="go(\'gefahren/' + g.id + '\')">' + esc(g.t) + '</a>'; }).join("") : "");
  }).join("");
}
function gKarte(g){
  var s = GS(), E = s.eig[g.id] || {}, P = g.praesenz || {}, R = g.ressourcen || {}, A = g.aspekte || [], EG = g.eigenheiten || [];
  var lab = function(l, x){ return x ? '<p><b>' + l + ':</b> ' + esc(x) + '</p>' : ""; };
  var res = [["Proben", R.proben], ["Bergegut", R.bergegut], ["Geflüster", R.gefluester], ["Seekarten", R.seekarten], ["Fracht", R.fracht]].filter(function(r){ return r[1] && r[1].length; }).map(function(r){ return '<p><b>' + r[0] + ':</b> ' + r[1].map(esc).join(", ") + '</p>'; }).join("");
  var haken = g.haken ? '<div class="k" style="margin-top:14px;font-size:20px">Aufhänger &amp; Begegnungen</div><div class="hooks" style="grid-template-columns:1fr 1fr">' + g.haken.map(function(h){ return '<div style="cursor:default"><b style="font:600 17px/1 Teko;text-transform:uppercase">' + esc(h[0]) + '</b><br>' + esc(h[1]) + '</div>'; }).join("") + '</div>' : "";
  var L = s.leisten[g.id] || [];
  var leisten = '<div class="trk">' + L.map(function(t, i){ var d = ""; for(var j = 0; j < t[1]; j++){ var v = t[2][j] || 0; d += '<span class="dot' + (v === 1 ? ' m' : v === 2 ? ' b' : '') + '" onclick="gLDot(\'' + g.id + '\',' + i + ',' + j + ')" oncontextmenu="gLMax(event,\'' + g.id + '\',' + i + ')"></span>'; } return '<span class="t"><b onclick="gLName(\'' + g.id + '\',' + i + ')">' + esc(t[0]) + '</b>' + d + ' <a onclick="gLDel(\'' + g.id + '\',' + i + ')" style="color:#aaa">×</a></span>'; }).join("") + '<a class="add" onclick="gLeiste(\'' + g.id + '\')">+ Leiste</a></div>';
  return '<div class="hz"><div class="l"><h1>' + esc(g.t) + ' ' + (g.kurz ? '' : '<span class="tag gr">' + esc(g.groesse) + '</span>') + '<span class="pg">S. ' + g.p + '</span></h1>' + (g.kurz ? '' : '<div class="sub">' + esc(g.unter) + '</div>') + '<div class="desc">' + paras(g.x) + (g.i ? '<p><i style="color:#5f6d52">' + esc(g.i) + '</i></p>' : "") + '</div>' +
   (g.antriebe || g.praesenz ? '<div class="g3"' + (g.antriebe ? '' : ' style="grid-template-columns:1fr 1fr"') + '>' + (g.antriebe ? '<div><div class="k">Antriebe</div>' + g.antriebe.map(function(a){ return '<p><b>' + esc(a[0]) + ':</b> ' + esc(a[1]) + '</p>'; }).join("") + '</div>' : '') + '<div><div class="k">Präsenz</div>' + lab("Sicht", P.sicht) + lab("Klang", P.klang) + lab("Geruch", P.geruch) + lab("Geschmack", P.geschmack) + '</div><div><div class="k">Ressourcen</div>' + res + '</div></div>' +
   '<div class="g2"><div class="asp"><div class="k">Aspekte</div>' + A.map(function(a){ return '<p><b>' + esc(a[0]) + ':</b> ' + esc(a[1]) + '</p>'; }).join("") + '</div><div><div class="k">Eigenheiten</div><div class="q">' + EG.map(function(e, i){ return '<div class="' + (E[i] ? 'on' : '') + '" onclick="gEig(\'' + g.id + '\',' + i + ')"><b>' + esc(e.t) + '</b>' + esc(e.x) + '</div>'; }).join("") + '</div></div></div>' : '') + (g.extra ? '<div class="g2" style="grid-template-columns:1fr 1fr">' + g.extra.map(function(e){ return '<div class="asp"><p><b>' + esc(e[0]) + '</b><br>' + esc(e[1]) + '</p></div>'; }).join("") + '</div>' : '') + '</div>' +
   (g.img ? '<div class="im"><img src="img/gefahr/' + g.img + '.webp" alt=""></div>' : '') + '</div>' + (g.erzaehl ? '<div class="vl" style="margin:12px 0 0">' + paras(g.erzaehl) + '</div>' : "") + haken + leisten;
}
function viewGefahren(id){
  var L = window.WS_GEFAHR || [], g = gById(id) || L[0], s = GS();
  var enc = '<div class="enc"><span class="lb">Begegnung</span>' + s.enc.map(function(e){ var x = gById(e.id); return '<span class="ec' + (x.id === g.id ? ' on' : '') + '" onclick="go(\'gefahren/' + x.id + '\')" oncontextmenu="gDel(event,\'' + x.id + '\')">' + esc(x.t) + (e.n > 1 ? ' ×' + e.n : '') + '</span>'; }).join("") + '<span class="ec add" onclick="gEnc(\'' + g.id + '\')">+ Gefahr</span></div>';
  var side = '<nav class="side"><input class="srch" placeholder="Gefahr suchen …" value="' + esc(s.q || "") + '" oninput="gQ(this.value)"><div id="gtree">' + gTree(g) + '</div></nav>';
  return '<div class="tabs"><a class="on">Gefahren</a></div>' + lay(side, enc + gKarte(g));
}
