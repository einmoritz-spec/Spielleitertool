/* Kapitel 7 Bestiarium: #n/be (Kachelübersicht), #n/be/<monster>, #n/be/imspiel, #n/be/tiere */
"use strict";
function tpGet(m){ try{ var v = (ST.tp || {})[m.id]; return v === undefined ? m.tpn : v; }catch(e){ return m.tpn; } }
function tpSet(id, d){
  var m = DB_MON.filter(function(x){ return x.id === id; })[0]; if(!m) return;
  try{ ST.tp = ST.tp || {}; var v = Math.max(0, tpGet(m) + d); if(v === m.tpn) delete ST.tp[id]; else ST.tp[id] = v; save(); }catch(e){}
  render();
}
function beKurz(m){
  if(m.npc) return m.typen.map(function(t){ return t.n; }).join(" · ");
  return 'Grimmigkeit ' + esc(m.gr) + ' · ' + esc(m.gs) + ' · TP ' + esc(m.tp);
}
function beKopf(titel, p, aktiv){
  var l = [["be", "Monster"], ["be/imspiel", "Monster im Spiel"], ["be/tiere", "Gewöhnliche Tiere"]];
  return '<div class="kopf bk"><h1>' + esc(titel) + '</h1>' + pgl(p) + '<span class="bl">' + l.map(function(x){ return '<a class="' + (x[0] === aktiv ? 'on' : '') + '" href="#n/' + x[0] + '">' + x[1] + '</a>'; }).join("") + '</span></div>';
}
function beUebersicht(){
  return beKopf("Bestiarium", 82, "be") + '<div class="mk">' + DB_MON.map(function(m){
    return '<a class="mt" href="#n/be/' + m.id + '"><div class="mi vig"><img src="img/monster/' + m.img + '.webp" alt="" loading="lazy"></div>' +
      '<div class="mn">' + esc(m.t) + pgl(m.p) + '</div><div class="ms">' + beKurz(m) + '</div></a>';
  }).join("") + '</div>';
}
function beWerte(m){
  if(m.npc) return "";
  var rows = [["Grimmigkeit", m.gr], ["Größe", m.gs], ["Bewegung", m.bew], ["Rüstung", m.ru]];
  var v = tpGet(m);
  return '<div class="karte mw"><table class="wt">' + rows.map(function(r){ return '<tr><th>' + r[0] + '</th><td>' + esc(r[1]) + '</td></tr>'; }).join("") + '</table>' +
    '<div class="tpl">TP</div><div class="tpz"><button onclick="tpSet(\'' + m.id + '\',-1)">−</button><span class="tpn">' + v + '</span><button onclick="tpSet(\'' + m.id + '\',1)">+</button></div>' +
    (m.sonder || []).map(function(s){ return '<div class="so"><b>' + md(s[0]) + ':</b> ' + md(s[1]) + '</div>'; }).join("") + '</div>';
}
function beSeite(m){
  var i = DB_MON.indexOf(m), pv = DB_MON[i - 1], nx = DB_MON[i + 1];
  var links = '<div class="bl"><a href="#n/be">‹ Alle Monster</a></div>';
  var tx = m.text.map(function(p){ return '<p>' + md(p) + '</p>'; }).join("");
  var rechts;
  if(m.npc){
    rechts = '<div class="band">Typen</div><div class="tg">' + m.typen.map(function(t){
      return '<div class="karte nsc"><h3>' + esc(t.n) + '</h3><dl>' + t.r.map(function(r){ return '<dt>' + md(r[0]) + '</dt><dd>' + md(r[1]) + '</dd>'; }).join("") + '</dl></div>'; }).join("") + '</div>' +
      '<div class="so3">' + m.sonder.map(function(s){ return '<div class="so"><b>' + md(s[0]) + ':</b> ' + md(s[1]) + '</div>'; }).join("") + '</div>';
  } else {
    var lb = m.attw || ["1", "2", "3", "4", "5", "6"];
    rechts = '<div class="band">Monsterangriffe</div>' + ntbl({id: "mon_" + m.id, head: ["W6", "Angriff"], rows: m.att.map(function(a, k){ return [lb[k], a]; })});
  }
  return beKopf(m.t, m.p, "") .replace('<span class="bl">', '<span class="bl" style="display:none">') +
    '<div class="mp' + (m.npc ? ' npc' : '') + '"><div class="ml"><div class="mb vig"><img src="img/monster/' + m.img + '.webp" alt=""></div>' + beWerte(m) + '</div>' +
    '<div class="mr"><div class="mtx">' + tx + '</div>' + rechts + '</div></div>' +
    '<div class="fuss"><div class="fz">' + (pv ? '<a class="pv" href="#n/be/' + pv.id + '">‹ ' + esc(pv.t) + '</a>' : '<a class="pv" href="#n/be">‹ Alle Monster</a>') + '<div class="em">7</div>' + (nx ? '<a class="nx" href="#n/be/' + nx.id + '">' + esc(nx.t) + ' ›</a>' : '<a class="nx" href="#n/be/tiere">Gewöhnliche Tiere ›</a>') + '</div></div>';
}
(function(){
  window.DB_NACH = window.DB_NACH || {}; DB_NACH.be = DB_BEKOPF;
  var alt = DB_VIEWS.n;
  DB_VIEWS.n = function(h){
    if(h[1] !== "be") return alt(h);
    window.__fk = "be";
    var tb = tabs(NACH_TABS, "be", function(id){ return "n/" + id; }), s = h[2], m = DB_MON.filter(function(x){ return x.id === s; })[0], b;
    if(m) b = beSeite(m);
    else if(s === "imspiel") b = beKopf("Monster im Spiel", 83, "be/imspiel") + nabs(DB_BEKOPF.abs[0]);
    else if(s === "tiere") b = beKopf("Gewöhnliche Tiere", 99, "be/tiere") + '<div class="gr"><div class="ab voll">' + ntbl(DB_TIERE) + '</div></div>';
    else b = beUebersicht();
    return tb + '<div class="be-seite">' + b + '</div>';
  };
})();
