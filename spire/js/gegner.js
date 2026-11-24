/* THE SPIRE – Gegner-Baustein: Gegner-Karte (zugeklappt/aufgeklappt), Werteblock, Begegnungsleiste, Gegner-Ansicht (#gegner[/<id>]).
   Daten: SP_GEGNER (spire/js/data/gegner-*.js). Spielstand: ST.begegnung = [{id, n, s, v}] (n = Anzahl in der Gruppe, s = Stress, v = Widerstands-Variante), ST.gsel = gewählter Gegner.
   gegnerKarte(id, key) wird von app.js (Block {t:"gegner"}) und vom Abenteuer-Leitstand benutzt. */
window.SP_GEGNER = window.SP_GEGNER || [];
var GOPEN = {};
function gById(id){ return SP_GEGNER.filter(function(g){ return g.id === id; })[0]; }
function gBeg(){ if(!Array.isArray(ST.begegnung)) ST.begegnung = []; return ST.begegnung; }
function gEntry(id){ return gBeg().filter(function(e){ return e.id === id; })[0]; }
function gWerte(g){ return (g.wid && g.wid.werte) || []; }
function gMax(g, e){ var W = gWerte(g); return (W[(e && e.v) || 0] || W[0] || 0) + (g.wid && g.wid.plus && e ? (e.b || 0) : 0); }
function gWidTxt(g){ return gWerte(g).join(" / "); }
function gBuch(g){ return g.buch || "cmf"; }

/* Chips für Ausrüstung: Schadenswürfel (weinrot), Tags (blau) */
function gChip(a){
  var h = "";
  if(a.dmg) h += '<span class="chip w">' + esc(a.dmg) + '</span>';
  (a.tags || []).forEach(function(t){ h += '<span class="chip"' + (window.tagAttr ? tagAttr(t) : '') + '>' + esc(t) + '</span>'; });
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
  return ru.map(function(t){ return '<span class="chip"' + (window.tagAttr ? tagAttr(t) : '') + '>' + esc(t) + '</span>'; }).concat(dm.map(function(t){ return '<span class="chip w">' + esc(t) + '</span>'; }), tg.map(function(t){ return '<span class="chip"' + (window.tagAttr ? tagAttr(t) : '') + '>' + esc(t) + '</span>'; })).slice(0, 6).join("");
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
function gPlus(id){ var g = gById(id), e = gEntry(id); if(!e){ e = {id:id, n:1, s:0, v:0}; gBeg().push(e); } e.b = ((e.b || 0) + 1) % 7; save(); render(); }
function gVar(id, v){ var e = gEntry(id); if(!e){ e = {id:id, n:1, s:0, v:0}; gBeg().push(e); } e.v = v; e.s = Math.min(e.s || 0, gMax(gById(id), e)); save(); render(); }
function gZiel(g){ if(g.ziel) return ("#" + g.ziel === location.hash.split("?")[0] || location.hash.indexOf("#" + g.ziel + "/") === 0) ? "" : g.ziel; if(!g.ortId) return ""; return "abenteuer/snuff/" + (g.ortId === "karmesin" ? "figuren" : "orte") + "/" + g.ortId; }

/* Werteblock (Buchblock): schwarzer Kopf, Felder, Widerstand mit Stress-Kästchen */
function gBlock(g, opt){
  opt = opt || {};
  var e = gEntry(g.id), W = gWerte(g), v = (e && e.v) || 0;
  var var_ = W.length > 1 ? '<span class="gvar">' + W.map(function(w, i){ return '<span class="' + (i === v ? 'on' : '') + '" onclick="event.stopPropagation();gVar(\'' + g.id + '\',' + i + ')">' + w + '</span>'; }).join("") + '</span>' : '';
  var rows = "";
  var dt = function(k, x){ if(x) rows += '<dt>' + k + '</dt><dd>' + x + '</dd>'; };
  if(g.einl) rows += '<dd class="ein">' + md(g.einl) + '</dd>';
  dt("Namen", g.namen ? g.namen.map(esc).join(", ") + (g.namenEn ? ' <span class="en">(' + g.namenEn.map(esc).join(", ") + ')</span>' : '') + (g.namenX ? '<br>' + md(g.namenX) : '') : "");
  dt("Beschreibung", g.beschr ? g.beschr.map(esc).join(" · ") : "");
  dt("Schwierigkeit", g.schw ? md(g.schw.x) : "");
  var wx = g.wid && g.wid.x && !/^[\d\s\/]+$/.test(g.wid.x) ? '<div class="wx">' + md(g.wid.x) + '</div>' : '';
  var plus = g.wid && g.wid.plus ? ' <span class="chip w" onclick="event.stopPropagation();gPlus(\'' + g.id + '\')">' + esc(g.wid.plus) + (e && e.b ? ' · ×' + e.b : '') + '</span>' : '';
  dt("Widerstand", '<b class="wz">' + esc(W.length > 1 ? W[v] + (g.wid.plus && e && e.b ? " + " + e.b : "") : gWidTxt(g) + (g.wid && g.wid.plus && e && e.b ? " + " + e.b : "")) + '</b>' + var_ + ' ' + gBoxen(g) + plus + wx);
  dt("Besonderes", g.bes ? md(g.bes) : "");
  dt("Ausrüstung", gAusr(g));
  dt("Druckmittel", g.druck ? md(g.druck) : "");
  var ziel = gZiel(g);
  return '<div class="gegner gblk" data-pgbook="' + buchId(gBuch(g)) + '"><div class="kopf">' + (g.img ? '<img src="' + IMG(g.img) + '" alt="">' : '') + '<h4>' + esc(g.t) + '</h4>' + pgl(g.p, gBuch(g)) + '</div><dl>' + rows + '</dl>' +
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

/* ---------- Gegner-Raster: gleichmäßige Kacheln, Klick klappt den Werteblock darunter über die volle Breite auf ---------- */
function gKachel(g){
  var on = ST.gsel === g.id, e = gEntry(g.id), dm = [], ru = [];
  (g.ausr || []).forEach(function(a){ if(typeof a === "string") return; if(a.dmg && dm.indexOf(a.dmg) < 0) dm.push(a.dmg); (a.tags || []).forEach(function(t){ if(/^Rüstung/.test(t) && ru.indexOf(t) < 0) ru.push(t); }); });
  return '<div class="gx' + (on ? ' on' : '') + (e ? ' inb' : '') + '" id="gx-' + g.id + '" onclick="gTog(\'' + g.id + '\')">' +
    (g.img ? '<img class="gx-i" src="' + IMG(g.img) + '" alt="">' : '') +
    '<div class="gx-t"><h4>' + esc(g.kurz || g.t) + '</h4><div class="gx-o">' + esc(g.ort || "") + '</div>' +
    '<div class="gx-m"><span class="gx-s">Schw. ' + esc(g.schw ? g.schw.k : "·") + '</span>' + ru.concat(dm).map(function(t){ return '<span class="gx-d">' + esc(t) + '</span>'; }).join("") + '</div></div>' +
    '<div class="gx-w"><b>' + esc(gWidTxt(g)) + '</b><small>Wid.</small></div></div>' +
    (on ? '<div class="gx-det" onclick="event.stopPropagation()"><button class="gx-zu" onclick="gTog(\'' + g.id + '\')" title="Schließen">×</button>' + gBlock(g) + '</div>' : '');
}
function gRaster(L){ return '<div class="gx-r">' + L.map(gKachel).join("") + '</div>'; }
function gTog(id){
  ST.gsel = ST.gsel === id ? null : id; save();
  if(document.getElementById("gbl")) gAktual(); else render();
  var k = document.getElementById("gx-" + id), d = document.querySelector(".gx-det");
  if(k && d){ var oben = 240, r = k.getBoundingClientRect(), u = d.getBoundingClientRect(); if(r.top < oben || u.bottom > innerHeight) scrollBy({top:r.top - oben, behavior:"smooth"}); }
}
/* Snuff Out the Sun (Reiter Gegner): dasselbe Raster ohne Gruppen */
function gegnerBrowser(L){ return L.length ? '<div class="gx-wrap">' + gRaster(L) + '</div>' : ""; }
/* ---------- Gegner-Seite (#gegner): Baum nach Domäne links, Suche + Filter, Karten, Werteblock rechts ---------- */
var GQ = "";
function gKey(g){
  var m = /^stadt\/([a-z]+)\//.exec(g.ziel || ""); if(m) return m[1];
  if(g.buch === "gm") return "mg"; if(g.id === "standard") return "regeln"; if(g.buch === "qs") return "snuff"; return "sonst";
}
function gGruppen(){
  var G = SP_STADT_INDEX.map(function(d){ return {k:d.id, t:d.t, sek:"Nach Domäne"}; });
  G.push({k:"mg", t:"Gegner der Klassen", sek:"Magister's Guide"}, {k:"snuff", t:"Antagonisten", sek:"Snuff Out the Sun"}, {k:"regeln", t:"Standardwerte für NSC", sek:"Regeln", p:22, buch:"qs"});
  return G;
}
function gBase(g){ var n = parseInt(String(g.schw && g.schw.k != null ? g.schw.k : "").replace(/[^\d].*$/, ""), 10); return isNaN(n) ? 0 : n; }
function gFern(g){ return (g.ausr || []).some(function(a){ return typeof a !== "string" && (a.tags || []).indexOf("Fernkampf") >= 0; }); }
function gSortiert(){ var K = gGruppen().map(function(x){ return x.k; }); return SP_GEGNER.map(function(g, i){ return [K.indexOf(gKey(g)), i, g]; }).sort(function(a, b){ return a[0] - b[0] || a[1] - b[1]; }).map(function(x){ return x[2]; }); }
function gFiltert(){
  var q = GQ.trim().toLowerCase(), f = ST.gf || "alle", dom = ST.gdom || "alle";
  return gSortiert().filter(function(g){
    if(dom !== "alle" && gKey(g) !== dom) return false;
    if(f === "0" && gBase(g) !== 0) return false; if(f === "1" && gBase(g) !== 1) return false; if(f === "2" && gBase(g) < 2) return false; if(f === "fern" && !gFern(g)) return false;
    if(q && (g.t + " " + (g.en || "") + " " + (g.ort || "")).toLowerCase().indexOf(q) < 0) return false;
    return true;
  });
}
function gDom(k){ ST.gdom = k; save(); render(); }
function gFilter(f){ ST.gf = f; save(); render(); }
function gListe(){
  var L = gFiltert(); if(!L.length) return '<p class="leise">Kein Gegner gefunden.</p>';
  var h = "";
  gGruppen().forEach(function(x){
    var T = L.filter(function(g){ return gKey(g) === x.k; }); if(!T.length) return;
    var n = T.some(function(g){ return g.id === ST.gsel; }) ? "v" : Math.min(T.length, 4);
    h += '<section class="gx-g n' + n + '"><h3>' + esc(x.t) + (x.sek !== "Nach Domäne" ? '<small>' + esc(x.sek) + '</small>' : '') + '<em>' + T.length + '</em></h3>' + gRaster(T) + '</section>';
  });
  var R = L.filter(function(g){ return !gGruppen().some(function(x){ return x.k === gKey(g); }); });
  if(R.length) h += '<section class="gx-g nv"><h3>Weitere</h3>' + gRaster(R) + '</section>';
  return '<div class="gx-gs">' + h + '</div>';
}
function gAktual(){ var a = document.getElementById("gbl"); if(a) a.innerHTML = gListe(); }
function gSuche(v){ GQ = v; gAktual(); }
function gSeite(){
  var G = gGruppen(), alle = SP_GEGNER, dom = ST.gdom || "alle", f = ST.gf || "alle";
  var cnt = {}; alle.forEach(function(g){ var k = gKey(g); cnt[k] = (cnt[k] || 0) + 1; });
  var side = '<a class="' + (dom === "alle" ? 'on' : '') + '" onclick="gDom(\'alle\')">Alle Gegner<em>' + alle.length + '</em></a>', sek = "";
  G.forEach(function(x){
    if(!cnt[x.k]) return;
    if(x.sek !== sek){ sek = x.sek; side += '<h5>' + esc(sek) + '</h5>'; }
    side += '<a class="' + (dom === x.k ? 'on' : '') + '" onclick="gDom(\'' + x.k + '\')">' + esc(x.t) + (x.p ? '<span class="pg">QS S. ' + x.p + '</span>' : '') + '<em>' + cnt[x.k] + '</em></a>';
  });
  side += '<a onclick="go(\'nach/ausruestung/tags\')">Tags<span class="pg">S. 21</span></a><a onclick="go(\'nach/kampf\')">Kampf<span class="pg">S. 77</span></a>';
  var chips = [["alle", "Alle"], ["0", "Schwierigkeit 0"], ["1", "1"], ["2", "2+"], ["fern", "Mit Fernkampf"]].map(function(c){ return '<span class="' + (f === c[0] ? 'on' : '') + '" onclick="gFilter(\'' + c[0] + '\')">' + esc(c[1]) + '</span>'; }).join("");
  var body = '<div class="gx-wrap"><div class="gfl"><input type="search" placeholder="Gegner suchen …" value="' + esc(GQ) + '" oninput="gSuche(this.value)"><div class="wch">' + chips + '</div></div>' +
    '<div id="gbl">' + gListe() + '</div></div>';
  return lay(side, body, false).replace('<div class="wrap', '<div class="wrap gb');
}
SP_VIEW.gegner = function(teile){
  if(teile[0] && gById(teile[0])){ ST.gsel = teile[0]; ST.gdom = gKey(gById(teile[0])); ST.gf = "alle"; GQ = ""; setTimeout(function(){ var d = document.getElementById("gx-" + teile[0]); if(d) d.scrollIntoView({block:"center"}); }, 60); }
  return spielTabs("gegner") + begLeiste(true) + gSeite();
};
(window.SP_SUCHE = window.SP_SUCHE || []).push(function(add){
  SP_GEGNER.forEach(function(g){ add(g.t + (g.en && g.en !== g.t ? " (" + g.en + ")" : ""), "Gegner", "gegner/" + g.id, g.p, [g.namen, g.namenEn, g.namenX, g.beschr, g.wid, g.schw && g.schw.x, g.bes, g.einl, g.druck, g.ausr.map(function(a){ return typeof a === "string" ? a : [a.x, a.dmg, a.tags]; })], gBuch(g)); });
});
