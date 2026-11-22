/* THE SPIRE – Gegner-Baustein: Gegner-Karte (zugeklappt/aufgeklappt), Werteblock, Begegnungsleiste, Gegner-Ansicht (#gegner[/<id>]).
   Daten: SP_GEGNER (spire/js/data/gegner-*.js). Spielstand: ST.begegnung = [{id, n, s, v}] (n = Anzahl in der Gruppe, s = Stress, v = Widerstands-Variante), ST.gsel = gewählter Gegner.
   gegnerKarte(id, key) wird von app.js (Block {t:"gegner"}) und vom Abenteuer-Leitstand benutzt. */
window.SP_GEGNER = window.SP_GEGNER || [];
var GOPEN = {};
function gById(id){ return SP_GEGNER.filter(function(g){ return g.id === id; })[0]; }
function gBeg(){ if(!Array.isArray(ST.begegnung)) ST.begegnung = []; return ST.begegnung; }
function gEntry(id){ return gBeg().filter(function(e){ return e.id === id; })[0]; }
function gWerte(g){ return (g.wid && g.wid.werte) || []; }
function gMax(g, e){ var W = gWerte(g); return W[(e && e.v) || 0] || W[0] || 0; }
function gWidTxt(g){ return gWerte(g).join(" / "); }
function gBuch(g){ return g.buch || "cmf"; }

/* Chips für Ausrüstung: Schadenswürfel (weinrot), Tags (blau) */
function gChip(a){
  var h = "";
  if(a.dmg) h += '<span class="chip w">' + esc(a.dmg) + '</span>';
  (a.tags || []).forEach(function(t){ h += '<span class="chip">' + esc(t) + '</span>'; });
  return h;
}
function gAusr(g){
  return (g.ausr || []).map(function(a){
    if(typeof a === "string") return esc(a);
    return esc(a.x || "") + (a.x && (a.dmg || (a.tags || []).length) ? " " : "") + gChip(a);
  }).join("");
}
/* Kurz-Chips für die kompakte Karte: Rüstung, Würfel, Tags (ohne Doppelte, höchstens 6) */
function gKurzChips(g){
  var ru = [], dm = [], tg = [];
  (g.ausr || []).forEach(function(a){
    if(typeof a === "string") return;
    if(a.dmg && dm.indexOf(a.dmg) < 0) dm.push(a.dmg);
    (a.tags || []).forEach(function(t){ var L = /^Rüstung/.test(t) ? ru : tg; if(L.indexOf(t) < 0) L.push(t); });
  });
  return ru.map(function(t){ return '<span class="chip">' + esc(t) + '</span>'; }).concat(dm.map(function(t){ return '<span class="chip w">' + esc(t) + '</span>'; }), tg.map(function(t){ return '<span class="chip">' + esc(t) + '</span>'; })).slice(0, 6).join("");
}
/* Widerstands-Kästchen (Stress) – gekoppelt an die Begegnung */
function gBoxen(g){
  var e = gEntry(g.id), max = gMax(g, e), s = e ? (e.s || 0) : 0, h = "";
  for(var i = 0; i < max; i++) h += '<i class="' + (i < s ? 'x' : '') + '" onclick="event.stopPropagation();gStress(\'' + g.id + '\',' + i + ')"></i>';
  return '<span class="zw">' + h + '</span>';
}
function gStress(id, i){
  var g = gById(id); if(!g) return;
  var e = gEntry(id); if(!e){ e = {id:id, n:1, s:0, v:0}; gBeg().push(e); }
  e.s = e.s === i + 1 ? i : i + 1; save(); render();
}
function gVar(id, v){ var e = gEntry(id); if(!e){ e = {id:id, n:1, s:0, v:0}; gBeg().push(e); } e.v = v; e.s = Math.min(e.s || 0, gMax(gById(id), e)); save(); render(); }
function gZiel(g){ if(!g.ortId) return ""; return "abenteuer/snuff/" + (g.ortId === "karmesin" ? "figuren" : "orte") + "/" + g.ortId; }

/* Werteblock (Buchblock): schwarzer Kopf, Felder, Widerstand mit Stress-Kästchen */
function gBlock(g, opt){
  opt = opt || {};
  var e = gEntry(g.id), W = gWerte(g), v = (e && e.v) || 0;
  var var_ = W.length > 1 ? '<span class="gvar">' + W.map(function(w, i){ return '<span class="' + (i === v ? 'on' : '') + '" onclick="event.stopPropagation();gVar(\'' + g.id + '\',' + i + ')">' + w + '</span>'; }).join("") + '</span>' : '';
  var rows = "";
  var dt = function(k, x){ if(x) rows += '<dt>' + k + '</dt><dd>' + x + '</dd>'; };
  if(g.einl) rows += '<dd class="ein">' + md(g.einl) + '</dd>';
  dt("Namen", g.namen ? g.namen.map(esc).join(", ") + (g.namenEn ? ' <span class="en">(' + g.namenEn.map(esc).join(", ") + ')</span>' : '') : "");
  dt("Beschreibung", g.beschr ? g.beschr.map(esc).join(" · ") : "");
  dt("Schwierigkeit", g.schw ? md(g.schw.x) : "");
  dt("Widerstand", '<b class="wz">' + esc(W.length > 1 ? W[v] : gWidTxt(g)) + '</b>' + var_ + ' ' + gBoxen(g));
  dt("Besonderes", g.bes ? md(g.bes) : "");
  dt("Ausrüstung", gAusr(g));
  dt("Druckmittel", g.druck ? md(g.druck) : "");
  var ziel = gZiel(g);
  return '<div class="gegner gblk" data-pgbook="' + buchId(gBuch(g)) + '"><div class="kopf">' + (g.img ? '<img src="' + IMG(g.img) + '" alt="">' : '') + '<h4>' + esc(g.t) + (g.en && g.en !== g.t ? ' <span class="en">' + esc(g.en) + '</span>' : '') + '</h4>' + pgl(g.p, gBuch(g)) + '</div><dl>' + rows + '</dl>' +
    '<div class="gfuss">' + (ziel && !opt.ohneZiel ? '<span class="chip" onclick="go(\'' + ziel + '\')">' + esc(g.ort) + '</span>' : '<i></i>') + '<span class="chip w" onclick="bgAdd(\'' + g.id + '\')">+ Begegnung</span></div></div>';
}
/* Gegner-Karte zum Einbinden in Texte: zugeklappt schlicht und klein, Klick klappt den Werteblock auf */
function gegnerKarte(id, key){
  var g = gById(id); if(!g) return "";
  var k = id + ":" + (key || ""), on = GOPEN[k];
  return '<div class="gz' + (on ? ' open' : '') + '"><div class="gzk" onclick="gzTog(this,\'' + k + '\')"><b>' + esc(g.t) + '</b>' + pgl(g.p, gBuch(g)) + '<span>Schw. ' + esc(g.schw ? g.schw.k : "·") + ' · Wid. ' + esc(gWidTxt(g)) + '</span><a class="gplus" onclick="event.stopPropagation();bgAdd(\'' + id + '\')" title="Zur Begegnung hinzufügen">+</a></div><div class="gzb">' + gBlock(g) + '</div></div>';
}
function gzTog(el, k){ var p = el.parentNode; p.classList.toggle("open"); GOPEN[k] = p.classList.contains("open"); }

/* ---------- Begegnung ---------- */
function bgAdd(id){ var e = gEntry(id); if(e) e.n = (e.n || 1) + 1; else gBeg().push({id:id, n:1, s:0, v:0}); save(); render(); }
function bgMinus(id){ var e = gEntry(id); if(!e) return; if((e.n || 1) > 1) e.n--; else ST.begegnung = gBeg().filter(function(x){ return x !== e; }); save(); render(); }
function bgDel(id){ ST.begegnung = gBeg().filter(function(x){ return x.id !== id; }); save(); render(); }
function bgSet(id, i){ var e = gEntry(id); if(!e) return; e.s = e.s === i + 1 ? i : i + 1; save(); render(); }
function bgClear(){ ST.begegnung = []; save(); render(); }
function gSel(id){ ST.gsel = id; save(); render(); }
function bgPick(){
  var m = modal('<h3 class="un" style="margin-top:0">Gegner hinzufügen</h3><div class="bgp">' + SP_GEGNER.map(function(g){
    return '<button onclick="document.querySelector(\'.modal\').remove();bgAdd(\'' + g.id + '\')"><b>' + esc(g.t) + '</b><small>Schw. ' + esc(g.schw ? g.schw.k : "·") + ' · Wid. ' + esc(gWidTxt(g)) + '</small></button>';
  }).join("") + '</div>');
}
function begLeiste(immer){
  var L = gBeg().filter(function(e){ return gById(e.id); });
  if(!L.length && !immer) return "";
  var items = L.map(function(e){
    var g = gById(e.id), max = gMax(g, e), s = Math.min(e.s || 0, max), h = "";
    for(var i = 0; i < max; i++) h += '<i class="' + (i < s ? 'x' : '') + '" onclick="bgSet(\'' + e.id + '\',' + i + ')"></i>';
    return '<div class="bi' + (ST.gsel === e.id ? ' sel' : '') + (max && s >= max ? ' aus' : '') + '"><b onclick="gSel(\'' + e.id + '\')">' + esc(g.kurz || g.t) + '</b>' + ((e.n || 1) > 1 ? '<span class="bn" onclick="bgMinus(\'' + e.id + '\')" title="Einen weniger">×' + e.n + '</span>' : '') + '<span class="zw">' + h + '</span><em>' + s + '/' + max + '</em><u onclick="bgDel(\'' + e.id + '\')" title="Entfernen">×</u></div>';
  }).join("");
  return '<div class="begl"><h5>Begegnung</h5>' + items + '<span class="bplus" onclick="bgPick()">+ Gegner</span>' + (L.length ? '<span class="bplus" onclick="bgClear()">Leeren</span>' : '') + '</div>';
}

/* ---------- Gegner-Browser: kompakte Karten links, Werteblock rechts (Entwurf 5) ---------- */
function gKompakt(g){
  var e = gEntry(g.id), ziel = gZiel(g);
  return '<div class="gc' + (ST.gsel === g.id ? ' sel' : '') + '" onclick="gSel(\'' + g.id + '\')"><div class="gck"><h4>' + esc(g.kurz || g.t) + '</h4></div>' +
    '<div class="gcz"><span>Schw. ' + esc(g.schw ? g.schw.k : "·") + '</span><span>Wid. ' + esc(gWidTxt(g)) + '</span></div>' +
    '<div class="gcc">' + gKurzChips(g) + '</div><div class="gcf">' + esc(g.ort || "") + ' · ' + pgl(g.p, gBuch(g)) + '</div></div>';
}
function gegnerBrowser(L){
  if(!L.length) return "";
  var sel = L.filter(function(g){ return g.id === ST.gsel; })[0] || L[0];
  return '<div class="gbr"><div class="gbl">' + L.map(gKompakt).join("") + '</div><div class="gbd">' + gBlock(sel) + '</div></div>';
}
SP_VIEW.gegner = function(teile){
  if(teile[0] && gById(teile[0])) ST.gsel = teile[0];
  return spielTabs("gegner") + begLeiste(true) + gegnerBrowser(SP_GEGNER);
};
(window.SP_SUCHE = window.SP_SUCHE || []).push(function(add){
  SP_GEGNER.forEach(function(g){ add(g.t + (g.en && g.en !== g.t ? " (" + g.en + ")" : ""), "Gegner", "gegner/" + g.id, g.p, [g.namen, g.beschr, g.schw && g.schw.x, g.bes, g.einl, g.druck, g.ausr.map(function(a){ return typeof a === "string" ? a : [a.x, a.dmg, a.tags]; })], gBuch(g)); });
});
