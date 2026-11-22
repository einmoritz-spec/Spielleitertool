/* The Electric State – Vorbereitung: gleiche Bausteine wie TftL/Flood (window.VS, mysCard), eigene Farbwelt über es.css */
window.ES = window.ES || {};
ES.renderStart = function(el){
  var D = ES.START, R = D.reise, esc = VS.esc;
  var last = null, crew = [];
  try{ last = JSON.parse(localStorage.getItem("es_last") || "null"); }catch(e){}
  try{ crew = JSON.parse(localStorage.getItem("es_reisende_v1") || "[]"); if(!Array.isArray(crew)) crew = []; }catch(e){ crew = []; }
  function archName(r){
    var id = r.archetyp || r.arch || "", a = (ES.ARCHETYPEN || []).filter(function(x){ return x.id === id; })[0];
    return a ? a.name : (r.archetypName || id);
  }
  var lastHalt = last && last.halt || (last && last.teil), lh = lastHalt && R.halteNamen[lastHalt] ? lastHalt : null;
  var lastHtml = last && (last.name || lh) ? VS.last('#es/reise/' + esc(last.teil || "route") + (last.ab ? '/' + esc(last.ab) : ''), lh ? R.halteBild[lh][0] : "es/h-engel", "center 30%", last.name || R.halteNamen[lh], last.ort, "Weiterfahren") : '';
  var crewHtml = crew.length ? '<div class="vcrew"><span>Reisende</span>' + crew.map(function(r){ var a = archName(r); return '<b>' + esc(r.name || "–") + '</b>' + (a ? ' ' + esc(a) : ''); }).join(" · ") + '</div>' : '';
  /* Halte als Hover-Akkordeon (gleiche Karte wie bei den Mysterien) */
  var st = {C:{p:"es/"}, done:{}, last:null};
  var strip = '<div class="mys"><section class="grp"><div class="gh"><h2>' + esc(R.name) + '</h2><span class="t">Kap. 7</span><span class="pg">' + esc(R.start) + ' – ' + esc(R.ziel) + ' · S. ' + R.s + '</span></div><div class="acc">' +
    R.halte.map(function(h, i){ var b = R.halteBild[h]; return window.mysCard([h, R.halteNamen[h], "Halt " + (i + 1), b[0], "", "l", "reise/" + h, b[1]], i === 0, st); }).join("") + '</div></section></div>';
  var href = function(t){ return '#es/' + t[4]; };
  el.className = "page start";
  el.innerHTML =
    '<div class="vhero" style="background-image:url(img/' + D.hero + '.webp)"></div>' +
    '<div class="vb">' + VS.sec("Die Welt", VS.grid(D.welt, href)) + VS.sec("Das Spiel", VS.grid(D.spiel, href)) + '</div>' +
    '<div class="vm"><div class="vb">' + VS.sec("Reise", lastHtml + strip + crewHtml, '<a class="va" href="#es/reise">Reise starten</a>') + '</div></div>';
  window.mysWire(el);
};
