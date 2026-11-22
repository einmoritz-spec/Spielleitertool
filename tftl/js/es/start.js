/* The Electric State – Vorbereitung (Entwurf e1) */
window.ES = window.ES || {};
ES.renderStart = function(el){
  var D = ES.START, R = D.reise;
  function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  function tile(t){ return '<a class="etile" href="#es/' + t[4] + '"><div class="im" style="background-image:url(img/' + t[3] + '.webp)' + (t[5] ? ';background-position:' + t[5] : '') + '"></div><div class="tx"><h3>' + esc(t[0]) + '</h3><p>' + esc(t[1]) + '</p><div class="k">' + esc(t[2]) + '</div></div></a>'; }
  var last = null, crew = [];
  try{ last = JSON.parse(localStorage.getItem("es_last") || "null"); }catch(e){}
  try{ crew = JSON.parse(localStorage.getItem("es_reisende_v1") || "[]"); if(!Array.isArray(crew)) crew = []; }catch(e){ crew = []; }
  function archName(r){
    var id = r.archetyp || r.arch || "", a = (ES.ARCHETYPEN || []).filter(function(x){ return x.id === id; })[0];
    return a ? a.name : (r.archetypName || id);
  }
  var lastHalt = last && last.halt || (last && last.teil), lh = lastHalt && R.halteNamen[lastHalt] ? lastHalt : null;
  var lastHtml = last && (last.name || lh) ?
    '<a class="elast" href="#es/reise/' + esc(last.teil || "route") + (last.ab ? '/' + esc(last.ab) : '') + '"><div class="im" style="background-image:url(img/' + (lh ? R.halteBild[lh][0] : "es/h-engel") + '.webp);background-position:center 30%"></div><div><small>Weiterfahren</small><b>' + esc(last.name || R.halteNamen[lh]) + '</b>' + (last.ort ? '<span>' + esc(last.ort) + '</span>' : '') + '</div></a>' : '';
  var crewHtml = crew.length ? '<div class="crew"><span>Reisende</span>' + crew.map(function(r){ var a = archName(r); return '<b>' + esc(r.name || "–") + '</b>' + (a ? ' ' + esc(a) : ''); }).join(" · ") + '</div>' : '';
  el.classList.add("start");
  el.innerHTML =
    '<div class="ehero" style="background-image:url(img/' + D.hero + '.webp)"></div>' +
    '<div class="ewrap"><div>' +
    '<div class="esec h">Vorbereitung</div><div class="grpl">Die Welt</div><div class="egrid">' + D.welt.map(tile).join("") + '</div>' +
    '<div class="grpl" style="margin-top:16px">Das Spiel</div><div class="egrid">' + D.spiel.map(tile).join("") + '</div>' +
    '<div class="echips">' + D.chips.map(function(c){ return '<a class="chip' + (c[2] ? ' f' : '') + '" href="#es/' + c[1] + '">' + esc(c[0]) + '</a>'; }).join("") + '</div></div>' +
    '<aside class="ego"><h2>Reise</h2>' + lastHtml +
    '<div class="ert">' + R.halte.map(function(h){ var b = R.halteBild[h]; return '<a href="#es/reise/' + h + '" style="background-image:url(img/' + b[0] + '.webp);background-position:' + b[1] + '"><i>' + esc(R.halteNamen[h]) + '</i></a>'; }).join("") + '</div>' +
    '<div class="eline"><span>' + esc(R.start) + '</span><i></i><span>' + esc(R.ziel) + '</span></div>' + crewHtml +
    '<div class="emeta">' + esc(R.zahl) + '</div><a class="ebtn" href="#es/reise">Reise starten</a></aside></div>';
};
