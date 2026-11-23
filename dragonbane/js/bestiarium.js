/* Kapitel 7 Bestiarium: #n/be (Kachelübersicht), #n/be/<monster>, #n/be/imspiel, #n/be/tiere */
"use strict";
function tpGet(m){ try{ var v = (ST.tp || {})[m.id]; return v === undefined ? m.tpn : v; }catch(e){ return m.tpn; } }
function tpSet(id, d){
  var m = DB_MON.filter(function(x){ return x.id === id; })[0]; if(!m) return;
  try{ ST.tp = ST.tp || {}; var v = Math.max(0, tpGet(m) + d); if(v === m.tpn) delete ST.tp[id]; else ST.tp[id] = v; save(); }catch(e){}
  render();
}
var BE_FL = '<svg class="fl" width="18" height="22" viewBox="0 0 18 22" aria-hidden="true"><path d="M9.6 0c.5 3.4 3.2 5.2 5.3 8.1C16.6 10.4 18 12.6 18 15c0 4-3.9 7-9 7s-9-3-9-7c0-2.6 1.3-4.6 3-6.4.2 1.8 1 3.1 2.3 3.8C4.6 8 6.5 3.4 9.6 0zM9 13.2c-1.6 1.6-3 3-3 4.8 0 1.7 1.3 2.8 3 2.8s3-1.1 3-2.8c0-1.9-1.4-3.2-3-4.8z"/></svg>';
var BE_HZ = '<svg viewBox="0 0 32 29" aria-hidden="true"><path d="M16 28.5C6.5 21.3 1 15.6 1 9.3 1 4.6 4.6 1 9 1c3 0 5.4 1.6 7 4 1.6-2.4 4-4 7-4 4.4 0 8 3.6 8 8.3 0 6.3-5.5 12-15 19.2z"/></svg>';
function beKurz(m){
  if(m.npc) return '<div class="mtyp">' + m.typen.map(function(t){ return '<span>' + esc(t.n) + '</span>'; }).join("") + '</div>';
  var je = (m.gr.split("/")[1] || ""), g = parseInt(m.gr, 10) || 0, tp = m.tp.split("/"), z = /^\d+$/.test(tp[1] || "x") ? tp[0] + "–" + tp[tp.length - 1] : tp[0];
  return '<span class="mwr"><span class="mgr" title="Grimmigkeit ' + g + '">' + new Array(g + 1).join(BE_FL) + '</span>' +
    '<span class="mhz' + (z.length > 3 ? ' lang' : '') + '" title="' + esc(m.tp) + ' TP">' + BE_HZ + '<b>' + esc(z) + '</b></span>' + (je ? '<i class="mje">je ' + esc(je) + '</i>' : '') + '</span>';
}
function beKopf(titel, p, aktiv){
  var l = [["be", "Monster"], ["be/imspiel", "Monster im Spiel"], ["be/tiere", "Gewöhnliche Tiere"]];
  return '<div class="kopf bk"><h1>' + esc(titel) + '</h1>' + pgl(p) + '<span class="bl">' + l.map(function(x){ return '<a class="' + (x[0] === aktiv ? 'on' : '') + '" href="#n/' + x[0] + '">' + x[1] + '</a>'; }).join("") + '</span></div>';
}
function beUebersicht(){
  var gruppen = [], cur = null;
  DB_MON.forEach(function(m){ var k = m.kat || "Grundregelwerk"; if(!cur || cur.k !== k){ cur = {k: k, l: []}; gruppen.push(cur); } cur.l.push(m); });
  return beKopf("Bestiarium", 82, "be") + gruppen.map(function(g){
    return (gruppen.length > 1 ? '<h2 class="mkat">' + esc(g.k.replace(/^Zusatzband:\s*/, "")) + '</h2>' : '') + '<div class="mk">' + g.l.map(function(m){
      return '<a class="mt" href="#n/be/' + m.id + '"><div class="mi"><img src="img/monster/' + m.img + '.webp" alt="" loading="lazy"></div>' +
        '<div class="mn">' + esc(m.t) + (m.npc ? '' : beKurz(m)) + '</div>' + (m.npc ? beKurz(m) : '') + '</a>';
    }).join("") + '</div>';
  }).join("");
}
function beWerte(m){
  if(m.npc) return "";
  var rows = [["Grimmigkeit", m.gr], ["Größe", m.gs], ["Bewegung", m.bew], ["Rüstung", m.ru]];
  var v = tpGet(m);
  return '<div class="karte mw"><table class="wt">' + rows.map(function(r){ return '<tr><th>' + r[0] + '</th><td>' + esc(r[1]) + '</td></tr>'; }).join("") + '</table>' +
    '<div class="tpl">TP</div><div class="tpz"><button onclick="tpSet(\'' + m.id + '\',-1)">−</button><span class="tpn">' + v + '</span><button onclick="tpSet(\'' + m.id + '\',1)">+</button></div>' +
    (m.sonder || []).map(function(s){ return '<div class="so"><b>' + md(s[0]) + ':</b> ' + md(s[1]) + '</div>'; }).join("") + '</div>';
}
function zbKarte(t, a){ return a ? '<div class="karte zbk"><h3>' + t + '</h3>' + [].concat(a).map(function(x){ return '<p>' + md(x) + '</p>'; }).join("") + '</div>' : ""; }
function beSeite(m){
  var i = DB_MON.indexOf(m), pv = DB_MON[i - 1], nx = DB_MON[i + 1];
  var links = '<div class="bl"><a href="#n/be">‹ Alle Monster</a></div>';
  var tx = m.text.map(function(p){ return '<p>' + md(p) + '</p>'; }).join("");
  var rechts;
  if(m.npc){
    rechts = '<div class="band">Typen</div><div class="tg">' + m.typen.map(function(t){
      return '<div class="karte ty"><h3>' + esc(t.n) + '</h3><div class="tw">' + t.r.filter(function(r){ return r[1].length <= 8; }).map(function(r){ return '<span><i>' + md(r[0]) + '</i>' + md(r[1]) + '</span>'; }).join("") + '</div>' +
        t.r.filter(function(r){ return r[1].length > 8; }).map(function(r){ return '<div class="tl"><i>' + md(r[0]) + '</i>' + md(r[1]) + '</div>'; }).join("") + '</div>'; }).join("") + '</div>' +
      '<div class="so3">' + m.sonder.map(function(s){ return '<div class="so"><b>' + md(s[0]) + ':</b> ' + md(s[1]) + '</div>'; }).join("") + '</div>';
  } else {
    var lb = m.attw || ["1", "2", "3", "4", "5", "6"];
    rechts = '<div class="band">Monsterangriffe</div>' + ntbl({id: "mon_" + m.id, head: ["W6", "Angriff"], rows: m.att.map(function(a, k){ return [lb[k], a]; })});
  }
  return beKopf(m.t, m.p, "") .replace('<span class="bl">', '<span class="bl" style="display:none">') +
    '<div data-mas="0" class="mp' + (m.npc ? ' npc' : '') + '"><div class="ml"><div class="mb"><img src="img/monster/' + m.img + '.webp" alt=""></div>' + beWerte(m) + zbKarte("Zufallsbegegnung", m.zb) + '</div>' +
    '<div class="mr"><div class="mtx">' + tx + '</div>' + zbKarte("Abenteueraufhänger", m.ah) + rechts + '</div></div>' +
    '<div class="fuss"><div class="fz">' + (pv ? '<a class="pv" href="#n/be/' + pv.id + '">‹ ' + esc(pv.t) + '</a>' : '<a class="pv" href="#n/be">‹ Alle Monster</a>') + '<div class="em">7</div>' + (nx ? '<a class="nx" href="#n/be/' + nx.id + '">' + esc(nx.t) + ' ›</a>' : '<a class="nx" href="#n/be/tiere">Gewöhnliche Tiere ›</a>') + '</div></div>';
}
(function(){
  window.DB_NACH = window.DB_NACH || {}; DB_NACH.be = DB_BEKOPF;
  var alt = DB_VIEWS.n;
  DB_VIEWS.n = function(h){
    if(h[1] !== "be") return alt(h);
    window.__fk = "be";
    var tb = tabs(NACH_TABS, "be", function(id){ return "n/" + id; }), s = h[2], m = DB_MON.filter(function(x){ return x.id === s; })[0], b;
    window.__bk = m && m.bk ? m.bk : "db_rb";
    if(m) b = beSeite(m);
    else if(s === "imspiel") b = beKopf("Monster im Spiel", 83, "be/imspiel") + nabs(DB_BEKOPF.abs[0]);
    else if(s === "tiere") b = beKopf("Gewöhnliche Tiere", 99, "be/tiere") + '<div class="gr"><div class="ab voll">' + ntbl(DB_TIERE) + '</div></div>';
    else b = beUebersicht();
    return tb + '<div class="be-seite">' + b + '</div>';
  };
})();
