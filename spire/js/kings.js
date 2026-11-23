/* The Spire – Kampagnenrahmen „The Kings of Silver“ (Buch-ID sp_a1, PDF = Buchseite + 2).
   Deutscher Buchtext: spire/js/data/kos-*.js und gegner-kos.js (erzeugt mit plan/spire/build_kos.py aus quellen/spire/de/kos).
   Route: #abenteuer/kings/<tab>[/<id>] – Tabs: Überblick · Tabellen · Dossier · Manticore · Personen · Orte · Das Ende · Figuren · Gegner. */
var KS_TABS = [["ueberblick", "Überblick"], ["tabellen", "Tabellen"], ["dossier", "Dossier"], ["manticore", "Manticore"], ["personen", "Personen"], ["orte", "Orte"], ["ende", "Das Ende"], ["figuren", "Figuren"], ["gegner", "Gegner"]];
var KS_BLK = ["ueberblick", "tabellen", "manticore", "orte", "ende"];
function ksTabs(cur){ return tabs(KS_TABS.map(function(t){ return ["abenteuer/kings/" + t[0], t[1]]; }), "abenteuer/kings/" + cur, "ab:kings:" + cur); }
function ksSide(L, tab, cur, sub, kopf){
  return '<h5 onclick="scrollTo({top:0,behavior:\'smooth\'})">' + kopf + '</h5>' +
    L.map(function(e){ return '<a class="' + (e.id === cur ? 'on' : '') + '" onclick="go(\'abenteuer/kings/' + tab + '/' + e.id + '\')">' + esc(e.t) + '<small class="ed-sub">' + esc(sub(e)) + '</small></a>'; }).join("");
}
function ksPersonen(id){
  var L = SP_KOS.personen.liste, e = L.filter(function(x){ return x.id === id; })[0] || L[0]; EID_CTX = "kos:p:" + e.id;
  return lay(ksSide(L, "personen", e.id, function(x){ return x.rolle; }, "Personen"), '<div class="dbody eid" data-pgbook="sp_a1">' + edKopf(e, e.rolle, "a1") + blk(e.b) + '</div>');
}
function ksFigKarte(c){
  var ck = function(l, v){ return v ? '<div class="kk"><h5>' + l + '</h5><p>' + md(v) + '</p></div>' : ''; };
  var li = function(L){ return '<ul class="pkt">' + L.map(function(x){ return '<li>' + md(x) + '</li>'; }).join("") + '</ul>'; };
  return edKopf({t:c.t, p:c.p}, c.klasse, "a1") + (c.intro ? '<p class="kp-intro"><i>' + md(c.intro) + '</i></p>' : '') +
    '<div class="kp-kern kp-ex">' + ck("Widerstände", c.wid) + ck("Auffrischen", c.auff) + ck("Fertigkeiten", c.fert) + ck("Kniffe", c.kniffe) + ck("Domänen", c.dom) + ck("Dienstzeit", c.dienst) + '</div>' +
    '<div class="raster r2" style="margin-top:12px"><div class="karte"><h4>Bindungen</h4>' + li(c.bind) + '</div><div class="karte"><h4>Ausrüstung</h4>' + li(c.ausr) + '</div></div>' +
    '<h2 class="ab">Kernfähigkeiten</h2>' + blk([{t:"karten", n:3, x:c.kern}]) +
    '<h2 class="ab">Fortschritte</h2>' + blk([{t:"karten", n:3, x:c.fort}]);
}
function ksFig(id){
  var L = SP_KOS.figuren.liste, c = L.filter(function(x){ return x.id === id; })[0] || L[0]; EID_CTX = "kos:f:" + c.id;
  return lay(ksSide(L, "figuren", c.id, function(x){ return x.klasse; }, "Vorgefertigte Charaktere"), '<div class="dbody eid" data-pgbook="sp_a1">' + ksFigKarte(c) + '</div>');
}
function ksBlock(tab){
  EID_CTX = "kos:" + tab;
  return voll('<div class="eid" data-pgbook="sp_a1">' + blk(SP_KOS[tab].b) + '</div>');
}
function ksDossier(){
  return voll('<div class="ks-dos">' + SP_KOS.dossier.liste.map(function(d){ return '<figure><img src="' + IMG(d.src) + '" alt="" onclick="zoom(this.src)"><figcaption>' + pgl(d.p, "a1") + '</figcaption></figure>'; }).join("") + '</div>');
}
var _ksAb = SP_VIEW.abenteuer;
SP_VIEW.abenteuer = function(teile){
  if(teile[0] !== "kings") return _ksAb(teile);
  var tab = teile[1]; if(!KS_TABS.some(function(t){ return t[0] === tab; })) tab = "ueberblick";
  var body = KS_BLK.indexOf(tab) >= 0 ? ksBlock(tab) : tab === "dossier" ? ksDossier() : tab === "personen" ? ksPersonen(teile[2]) : tab === "figuren" ? ksFig(teile[2]) : (begLeiste(true) + gegnerBrowser(SP_GEGNER.filter(function(g){ return g.buch === "a1"; })));
  return ksTabs(tab) + (tab === "gegner" ? "" : begLeiste(false)) + body;
};
/* Suche */
(window.SP_SUCHE = window.SP_SUCHE || []).push(function(add){
  var E = window.SP_KOS || {}, r = "abenteuer/kings/";
  var flat = function(L){ var o = []; (L || []).forEach(function(b){ if(typeof b === "string") o.push(b); else if(b.t === "szenen") b.x.forEach(function(x){ o.push(x); }); else if(b.t === "qa") b.x.forEach(function(q){ o.push(q[0] + " " + q[1]); }); else if(b.t === "schwarz") o = o.concat(b.h || "", b.b || []); else if(b.t === "h") o.push(b.x); else if(b.t === "kk") b.x.forEach(function(k){ o.push(k.k + ". " + k.x); }); else if(b.t === "w10k") b.x.forEach(function(w){ o.push(w.h); o = o.concat(w.rows); }); else if(b.t === "grp") b.x.forEach(function(g){ o.push(g.h); o = o.concat(g.li); }); }); return o; };
  KS_TABS.forEach(function(t){ var k = t[0]; if(KS_BLK.indexOf(k) >= 0 && E[k]) add(t[1], "Kings of Silver · " + t[1], r + k, E[k].p, flat(E[k].b), "a1"); });
  if(E.personen) E.personen.liste.forEach(function(e){ add(e.t + (e.en ? " (" + e.en + ")" : ""), "Kings of Silver · Personen", r + "personen/" + e.id, e.p, [e.rolle].concat(flat(e.b)), "a1"); });
  if(E.figuren) E.figuren.liste.forEach(function(c){ add(c.t, "Kings of Silver · Figuren (" + c.klasse + ")", r + "figuren/" + c.id, c.p, [c.intro, c.wid, c.auff, c.fert, c.kniffe, c.dom, c.dienst, c.bind, c.ausr, c.kern.concat(c.fort).map(function(f){ return [f.t, f.f, f.x]; })], "a1"); });
});
