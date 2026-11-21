/* Winzige Gefahren (Kap. 10): Bild-Übersicht → Detailkarte; Begegnungsleiste */
function GS(){ ST.geg = ST.geg || {enc:[], q:""}; return ST.geg; }
function gEnc(id){ var s = GS(), e = s.enc.filter(function(x){ return x.id === id; })[0]; if(e) e.n++; else s.enc.push({id:id, n:1}); save(); render(); }
function gDel(ev, id){ ev.preventDefault(); var s = GS(); s.enc = s.enc.filter(function(x){ return x.id !== id; }); save(); render(); }
function gQ(v){ GS().q = v; save(); var e = document.getElementById("ggrid"); if(e) e.innerHTML = gGrid(); }
function gGrid(){
  var q = (GS().q || "").toLowerCase();
  return PI_GEFAHR.filter(function(g){ return !q || g.t.toLowerCase().indexOf(q) >= 0; }).map(function(g){
    return '<div class="gc" style="--c:' + g.farbe + '" onclick="go(\'gefahren/' + g.id + '\')"><span class="ad" title="Zur Begegnung" onclick="event.stopPropagation();gEnc(\'' + g.id + '\')">+</span><div class="im">' + (g.img ? '<img loading="lazy" src="img/gefahr/' + g.img + '.webp" alt="">' : '<span class="ph">' + esc(g.t.charAt(0)) + '</span>') + '</div><h3>' + esc(g.t) + '</h3><small>S. ' + g.p + '</small></div>';
  }).join("");
}
function gHerz(id, n){ var s = GS(); s.h = s.h || {}; s.h[id] = s.h[id] || []; hCycle(s.h[id], n); save(); render(); }
function viewGefahren(id){
  var s = GS(), g = id ? gefById(id) : null;
  var enc = '<div class="enc"><span class="lb">Begegnung</span>' + s.enc.map(function(e){ var x = gefById(e.id); return '<span class="ec' + (g && x.id === g.id ? ' on' : '') + '" onclick="go(\'gefahren/' + x.id + '\')" oncontextmenu="gDel(event,\'' + x.id + '\')">' + esc(x.t) + ' <i>×' + e.n + '</i></span>'; }).join("") + (g ? '<span class="ec add" onclick="gEnc(\'' + g.id + '\')">+ Gefahr</span>' : '') + '</div>';
  var tabs = '<div class="tabs"><a class="on">Gefahren</a></div>';
  setTheme(false, g ? g.farbe : "var(--rust)");
  if(!g) return tabs + '<div class="ct gpage">' + enc + '<div class="gtop"><input class="srch" placeholder="Gefahr suchen …" value="' + esc(s.q) + '" oninput="gQ(this.value)"></div><div class="ggr" id="ggrid">' + gGrid() + '</div></div>';
  var k = PI_GEFAHR.indexOf(g), pv = PI_GEFAHR[k - 1], nx = PI_GEFAHR[k + 1];
  var nav = '<div class="gnav"><a onclick="go(\'gefahren\')">‹ Übersicht</a><span>' + (pv ? '<a onclick="go(\'gefahren/' + pv.id + '\')">‹ ' + esc(pv.t) + '</a>' : '') + (nx ? '<a onclick="go(\'gefahren/' + nx.id + '\')">' + esc(nx.t) + ' ›</a>' : '') + '</span></div>';
  var body = g.zuege ? gKarte(g) : '<div class="box" style="--c:' + g.farbe + '"><div class="hd">' + esc(g.t) + pgl(g.p) + '</div><div class="bd2 gl">' + (g.img ? '<img class="eimg big" src="img/gefahr/' + g.img + '.webp" alt="" onclick="zoom(this.src)">' : '') + '<p>Die ausführliche deutsche Karte folgt. Bis dahin: <span class="chip ink" onclick="openBook(\'pi_core\',' + g.p + ')">Im Buch lesen (S. ' + g.p + ')</span></p></div></div>';
  return tabs + '<div class="ct gpage">' + enc + nav + body + '</div>';
}
function gKarte(g){ return ""; }
