/* The Spire – Kampagnenrahmen „Eidolon Sky“ (Buch-ID sp_a2, PDF = Buchseite + 2).
   Deutscher Buchtext: spire/js/data/eid-*.js und gegner-eid.js (erzeugt mit plan/spire/build_eidolon.py aus quellen/spire/de/eid).
   Route: #abenteuer/eidolon/<tab>[/<id>] – Tabs: Überblick · Dreck · Der Schwan · Das Eidolon · NSC · Das Ende · Figuren · Gegner. */
var ED_TABS = [["ueberblick", "Überblick"], ["dreck", "Dreck"], ["schwan", "Der Schwan"], ["eidolon", "Das Eidolon"], ["nsc", "NSC"], ["ende", "Das Ende"], ["figuren", "Figuren"], ["gegner", "Gegner"]];
var ED_BLK = ["ueberblick", "dreck", "schwan", "eidolon", "ende"];
function edTabs(cur){ return tabs(ED_TABS.map(function(t){ return ["abenteuer/eidolon/" + t[0], t[1]]; }), "abenteuer/eidolon/" + cur, "ab:eidolon:" + cur); }
function edSide(L, tab, cur, sub){
  return '<h5 onclick="scrollTo({top:0,behavior:\'smooth\'})">' + (tab === "nsc" ? "Weitere NSC" : "Vorgefertigte Charaktere") + '</h5>' +
    L.map(function(e){ return '<a class="' + (e.id === cur ? 'on' : '') + '" onclick="go(\'abenteuer/eidolon/' + tab + '/' + e.id + '\')">' + esc(e.t) + '<small class="ed-sub">' + esc(sub(e)) + '</small></a>'; }).join("");
}
function edKopf(e, sub, buch){
  return '<h1 class="titel">' + esc(e.t) + (e.en ? ' <span class="en">(' + esc(e.en) + ')</span>' : '') + pgl(e.p, buch || "a2") + '</h1>' + (sub ? '<p class="kp-zitat">' + esc(sub) + '</p>' : '');
}
function edNsc(id){
  var L = SP_EID.nsc.liste, e = L.filter(function(x){ return x.id === id; })[0] || L[0]; EID_CTX = "nsc:" + e.id;
  return lay(edSide(L, "nsc", e.id, function(x){ return x.rolle; }), '<div class="dbody eid" data-pgbook="sp_a2">' + edKopf(e, e.rolle) + blk(e.b) + '</div>');
}
function edFigKarte(c){
  var ck = function(l, v){ return v ? '<div class="kk"><h5>' + l + '</h5><p>' + md(v) + '</p></div>' : ''; };
  var li = function(L){ return '<ul class="pkt">' + L.map(function(x){ return '<li>' + md(x) + '</li>'; }).join("") + '</ul>'; };
  return edKopf({t:c.t, p:c.p}, c.klasse) + (c.intro ? '<p class="kp-intro"><i>' + md(c.intro) + '</i></p>' : '') +
    '<div class="kp-kern kp-ex">' + ck("Widerstände", c.wid) + ck("Auffrischen", c.auff) + ck("Fertigkeiten", c.fert) + ck("Domänen", c.dom) + ck("Dienstzeit", c.dienst) + '</div>' +
    '<div class="raster r2" style="margin-top:12px"><div class="karte"><h4>Bindungen</h4>' + li(c.bind) + '</div><div class="karte"><h4>Ausrüstung</h4>' + li(c.ausr) + '</div></div>' +
    '<h2 class="ab">Fähigkeiten</h2>' + blk([{t:"karten", n:2, x:c.faehig}]);
}
function edFig(id){
  var L = SP_EID.figuren.liste, c = L.filter(function(x){ return x.id === id; })[0] || L[0]; EID_CTX = "fig:" + c.id;
  return lay(edSide(L, "figuren", c.id, function(x){ return x.klasse; }), '<div class="dbody eid" data-pgbook="sp_a2">' + edFigKarte(c) + '</div>');
}
function edBlock(tab){
  EID_CTX = tab;
  return voll('<div class="eid" data-pgbook="sp_a2">' + blk(SP_EID[tab].b) + '</div>');
}
var _edAb = SP_VIEW.abenteuer;
SP_VIEW.abenteuer = function(teile){
  if(teile[0] !== "eidolon") return _edAb(teile);
  var tab = teile[1]; if(!ED_TABS.some(function(t){ return t[0] === tab; })) tab = "ueberblick";
  var body = ED_BLK.indexOf(tab) >= 0 ? edBlock(tab) : tab === "nsc" ? edNsc(teile[2]) : tab === "figuren" ? edFig(teile[2]) : (begLeiste(true) + gegnerBrowser(SP_GEGNER.filter(function(g){ return g.buch === "a2"; })));
  return edTabs(tab) + (tab === "gegner" ? "" : begLeiste(false)) + body;
};
/* Hinweiskarten: Klick irgendwo auf die Karte markiert sie als erledigt (grau) */
var EID_CTX = "";
function edHash(s){ var h = 0; for(var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); }
function edDone(k){ return !!(ST.eid && ST.eid.done && ST.eid.done[k]); }
function edTog(el, k){ ST.eid = ST.eid || {}; ST.eid.done = ST.eid.done || {}; if(ST.eid.done[k]) delete ST.eid.done[k]; else ST.eid.done[k] = 1; save(); el.classList.toggle("done", !!ST.eid.done[k]); }
function edCard(cls, k, inner){ return '<div class="' + cls + (edDone(k) ? ' done' : '') + '" onclick="edTog(this,\'' + k + '\')">' + inner + '</div>'; }
/* Suche */
(window.SP_SUCHE = window.SP_SUCHE || []).push(function(add){
  var E = window.SP_EID || {}, r = "abenteuer/eidolon/";
  var flat = function(L){ var o = []; (L || []).forEach(function(b){ if(typeof b === "string") o.push(b); else if(b.t === "hw") b.x.forEach(function(k){ o.push(k.k + ". " + k.x); }); else if(b.t === "szenen") b.x.forEach(function(x){ o.push(x); }); else if(b.t === "qa") b.x.forEach(function(q){ o.push(q[0] + " " + q[1]); }); else if(b.t === "schwarz") o = o.concat(b.h || "", b.b || []); else if(b.t === "h") o.push(b.x); }); return o; };
  ED_BLK.forEach(function(t){ if(E[t]) add(ED_TABS.filter(function(x){ return x[0] === t; })[0][1], "Eidolon Sky · " + ED_TABS.filter(function(x){ return x[0] === t; })[0][1], r + t, E[t].p, flat(E[t].b), "a2"); });
  if(E.nsc) E.nsc.liste.forEach(function(e){ add(e.t + (e.en ? " (" + e.en + ")" : ""), "Eidolon Sky · NSC", r + "nsc/" + e.id, e.p, [e.rolle].concat(flat(e.b)), "a2"); });
  if(E.figuren) E.figuren.liste.forEach(function(c){ add(c.t, "Eidolon Sky · Figuren (" + c.klasse + ")", r + "figuren/" + c.id, c.p, [c.intro, c.wid, c.auff, c.fert, c.dom, c.dienst, c.bind, c.ausr, c.faehig.map(function(f){ return [f.t, f.f, f.x]; })], "a2"); });
});
