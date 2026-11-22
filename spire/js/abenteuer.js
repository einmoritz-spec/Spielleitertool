/* THE SPIRE – Abenteuer-Leitstand. Erstes Abenteuer: „Snuff Out the Sun“ (Quickstart S. 18–24, Entwurf 6).
   Route: #abenteuer/snuff/<tab>[/<anker>]; Tabs: Auftrag · Figuren · Orte · Der Aufstieg · Gegner · Spielerfiguren.
   Daten: SP_SNUFF (data/abenteuer-snuff.js), Gegner: SP_GEGNER (data/gegner-qs.js, gegner.js), Spielerfiguren: SP_VORGEFERTIGT + vfBogen() (zelle.js).
   Spielstand: ST.snuff = {tage (Countdown), phase (Tagesphase), vf (gewählte Spielerfigur)}. */
var SN_TABS = [["auftrag", "Auftrag"], ["figuren", "Figuren"], ["orte", "Orte"], ["aufstieg", "Der Aufstieg"], ["gegner", "Gegner"], ["spieler", "Spielerfiguren"]];
var SN_ANKER = null, SN_TAB = "auftrag";
function sn(){ var s = ST.snuff = ST.snuff || {}; if(s.tage == null) s.tage = 5; if(s.phase == null) s.phase = 0; if(!s.vf) s.vf = "sansel"; return s; }
function snTabs(cur){ return tabs(SN_TABS.map(function(t){ return ["abenteuer/snuff/" + t[0], t[1]]; }), "abenteuer/snuff/" + cur, "ab:snuff:" + cur); }
function snFig(id){ return SP_SNUFF.figuren.filter(function(f){ return f.id === id; })[0]; }
function snOrt(id){ return SP_SNUFF.orte.filter(function(o){ return o.id === id; })[0]; }
function snEn(en){ return en ? ' <span class="en">' + esc(en) + '</span>' : ''; }
function snAnfang(t, n){
  t = String(t).replace(/\*/g, ""); var s = t.split(/(?<=[.!?])\s/)[0];
  if(s.length > (n || 118)){ s = s.slice(0, n || 118).replace(/\s+\S*$/, ""); return s + " …"; }
  return s.length < t.length ? s + " …" : s;
}
function snTile(f, kl){
  return f.bild ? '<img class="' + (kl || "") + '" src="' + IMG(f.bild) + '" alt="" onclick="event.stopPropagation();zoom(this.src)">' : '<span class="ini ' + (kl || "") + '">' + esc(f.ini || zInit(f.t)) + '</span>';
}

/* ---------- Tab: Auftrag ---------- */
function snAuftrag(){
  var S = SP_SNUFF, A = S.auftrag, D = S.dominion;
  var karten = S.laufen.karten.map(function(k){ return '<div class="karte">' + k.map(function(x){ return '<p>' + md(x) + '</p>'; }).join("") + '</div>'; }).join("");
  return voll('<div data-pgbook="sp_qs"><div class="sna"><div class="snl"><h1 class="titel">' + esc(S.titel) + pgl(19, "qs") + '</h1><p class="intro">' + md(S.einl) + '</p>' +
    '<h2 class="ab">' + esc(S.laufen.t) + pgl(S.laufen.p, "qs") + '</h2><div class="raster r2 snk">' + karten + '</div></div>' +
    '<div class="snr"><div class="snb"><img src="' + IMG("abenteuer/snuff-titel") + '" alt="" onclick="zoom(this.src)"><img class="pod" src="' + IMG("abenteuer/snuff-rednerpult") + '" alt="" onclick="zoom(this.src)"></div>' +
    '<div class="schwarz sbox"><h4>' + esc(S.tagwerk.h) + '</h4><p>' + md(S.tagwerk.b) + '</p></div></div></div>' +
    '<div class="sno"><div><h2 class="ab">' + esc(A.t) + pgl(A.p, "qs") + '</h2><p>' + md(A.einl) + '</p><div class="vlk">' + A.vl.map(function(x){ return '<p>' + md(x) + '</p>'; }).join("") + '</div></div>' +
    '<div><h2 class="ab">' + esc(D.t) + pgl(D.p, "qs") + '</h2>' + D.b.map(function(x){ return '<p>' + md(x) + '</p>'; }).join("") + '</div></div></div>');
}

/* ---------- Tab: Figuren ---------- */
function snFigKarte(f){
  var g = f.gegner ? gegnerKarte(f.gegner, "fig") : "", g2 = f.gegner2 ? gegnerKarte(f.gegner2, "fig") : "";
  var text = f.b.map(function(x){ return '<p>' + md(x) + '</p>'; }).join("") + (f.druck ? '<p><b>Druckmittel:</b> ' + md(f.druck) + '</p>' : '');
  var nach = f.nach ? f.nach.map(function(x){ return '<p>' + md(x) + '</p>'; }).join("") : '';
  return '<div class="fk' + (f.gegner ? ' fkw' : '') + '" id="fig-' + f.id + '"><div class="fkh"><div class="fkt">' + snTile(f) + '</div><h3>' + esc(f.t) + pgl(f.p, "qs") + snEn(f.en) + '</h3></div>' +
    (f.gegner ? '<div class="fkx"><div>' + text + '</div><div>' + g + nach + g2 + '</div></div>' : '<div class="fkb">' + text + '</div>') + '</div>';
}
function snFiguren(){ return voll('<div data-pgbook="sp_qs"><div class="raster r3 fkr">' + SP_SNUFF.figuren.map(snFigKarte).join("") + '</div></div>'); }

/* ---------- Tab: Orte (Seitenleiste: schmale Liste, rechts alle Orte flach und offen) ---------- */
function snOrtBlock(o){
  var ag = o.antag ? '<h4 class="lab">Antagonisten</h4>' + gegnerKarte(o.antag, "ort") : "";
  return '<section class="ort" id="ort-' + o.id + '"><h2 class="ab">' + esc(o.t) + pgl(o.p, "qs") + snEn(o.en) + '</h2><div class="ortg"><div class="ortt">' + o.b.map(function(x){ return '<p>' + md(x) + '</p>'; }).join("") + '</div>' +
    '<div class="orts"><div class="karte"><h4>Requisiten</h4><ul class="pkt">' + o.req.map(function(x){ return '<li>' + esc(x) + '</li>'; }).join("") + '</ul></div>' + ag + '</div></div></section>';
}
function snOrte(){
  var S = SP_SNUFF;
  var side = '<h5 onclick="scrollTo({top:0,behavior:\'smooth\'})">Orte</h5>' + S.orte.map(function(o){ return '<a onclick="jump(\'ort-' + o.id + '\')">' + esc(kurz(o.t)) + '</a>'; }).join("");
  return lay(side, '<div data-pgbook="sp_qs"><p class="ein2">' + md(S.orteEinl) + pgl(S.orteP, "qs") + '</p>' + S.orte.map(snOrtBlock).join("") + '</div>');
}

/* ---------- Tab: Der Aufstieg (Entwurf 6) ---------- */
function snTag(n){ sn().tage = n; save(); render(); }
function snPhase(i){ sn().phase = i; save(); render(); }
function snDabei(d){
  if(d.f){
    var f = snFig(d.f);
    return '<div class="dk" onclick="go(\'abenteuer/snuff/figuren/' + f.id + '\')"><div class="dkt">' + snTile(f) + '</div><div><h4>' + esc(f.t) + pgl(f.p, "qs") + '</h4><p>' + esc(snAnfang(f.b[0], 96)) + '</p>' + (f.id === "karmesin" ? '<span class="chip w">Sonnenherrschaft</span>' : '') + '</div></div>';
  }
  if(d.o){
    var o = snOrt(d.o), ag = o.antag ? gById(o.antag) : null;
    return '<div class="dk dko" onclick="go(\'abenteuer/snuff/orte/' + o.id + '\')"><div><h4>' + esc(o.t) + pgl(o.p, "qs") + '</h4><p>' + esc(snAnfang(o.b[0], 96)) + '</p><span class="chip">Requisiten</span>' + (ag ? '<span class="chip s">' + esc(ag.t) + '</span>' : '') + '</div></div>';
  }
  var g = gById(d.g);
  return '<div class="dk dko" onclick="gSel(\'' + g.id + '\');go(\'abenteuer/snuff/gegner\')"><div><h4>' + esc(g.t) + pgl(g.p, "qs") + '</h4><p class="leise">Schw. ' + esc(g.schw.k) + ' · Wid. ' + esc(gWidTxt(g)) + '</p><span class="chip w" onclick="event.stopPropagation();bgAdd(\'' + g.id + '\')">+ Begegnung</span></div></div>';
}
function snAufstieg(){
  var S = SP_SNUFF, A = S.aufstieg, s = sn(), P = A.phasen, ph = P[Math.min(s.phase, P.length - 1)];
  var cd = [5, 4, 3, 2, 1, 0].map(function(n){ return '<span class="' + (n === 0 ? 'null ' : '') + (n > s.tage ? 'erl ' : '') + (n === s.tage ? 'jetzt' : '') + '" onclick="snTag(' + n + ')">' + n + '</span>'; }).join("");
  var bar = P.map(function(p, i){ return '<a class="' + (i === s.phase ? 'on' : i < s.phase ? 'erl' : '') + '" onclick="snPhase(' + i + ')">' + esc(p.t) + '</a>'; }).join("");
  var dabei = ph.dabei.map(snDabei).join("");
  return voll('<div data-pgbook="sp_qs"><div class="snh"><h1 class="titel">' + esc(A.t) + pgl(A.p, "qs") + '</h1><div class="cd"><span class="cdl">Aufstiegszeremonie</span>' + cd + '</div></div>' +
    '<p class="intro">' + md(A.einl) + '</p><div class="pb">' + bar + '</div>' +
    '<div class="aug"><div><h2 class="ab">' + esc(ph.t) + '</h2>' + ph.b.map(function(x){ return '<p>' + md(x) + '</p>'; }).join("") +
    '<div class="raster r2 aub"><div class="schwarz sbox"><h4>' + esc(A.ende.h) + '</h4><p>' + md(A.ende.b) + '</p></div><div class="schwarz sbox"><h4>' + esc(A.fort.h) + '</h4>' + A.fort.b.map(function(x){ return '<p>' + md(x) + '</p>'; }).join("") + '</div></div></div>' +
    '<div class="aur"><h3 class="un">Wer ist dabei</h3>' + dabei + '</div></div></div>');
}

/* ---------- Tab: Gegner ---------- */
function snGegner(){ return begLeiste(true) + gegnerBrowser(SP_GEGNER.filter(function(g){ return g.buch === "qs"; })); }

/* ---------- Tab: Spielerfiguren (6 vorgefertigte Figuren, Bogenlayout) ---------- */
function snVf(id){ sn().vf = id; save(); render(); }
function snVfNimm(id){ if(!zFigs().some(function(f){ return f.vf === id; })) zFigs().push(zVon(vfDaten(id))); save(); render(); }
function snSpieler(){
  var s = sn(), v = vfDaten(s.vf) || SP_VORGEFERTIGT[0], da = zFigs().some(function(f){ return f.vf === v.id; });
  var wahl = SP_VORGEFERTIGT.map(function(x){
    return '<div class="vfk' + (x.id === v.id ? ' sel' : '') + '" onclick="snVf(\'' + x.id + '\')"><img src="' + IMG(x.bild) + '" alt=""><h4>' + esc(x.n) + '</h4><small>' + esc(x.titel || x.klasse) + '</small></div>';
  }).join("");
  return voll('<div class="vfr snw" data-pgbook="sp_qs">' + wahl + '</div><div class="snbogen">' + vfBogen(v) + '</div>' +
    '<div class="act" style="justify-content:flex-start;margin-top:12px">' + (da ? '<button class="knopf n" onclick="go(\'zelle\')">In der Zelle</button>' : '<button class="knopf b" onclick="snVfNimm(\'' + v.id + '\')">In die Zelle übernehmen</button>') + '</div>');
}

/* ---------- Ansicht ---------- */
SP_VIEW.abenteuer = function(teile){
  var tab = teile[1]; if(!SN_TABS.some(function(t){ return t[0] === tab; })) tab = "auftrag";
  SN_TAB = tab; SN_ANKER = teile[2] || null;
  var body = tab === "figuren" ? snFiguren() : tab === "orte" ? snOrte() : tab === "aufstieg" ? snAufstieg() : tab === "gegner" ? snGegner() : tab === "spieler" ? snSpieler() : snAuftrag();
  return snTabs(tab) + (tab === "gegner" ? "" : begLeiste(false)) + body;
};
var _ar = window.afterRender;
window.afterRender = function(){
  if(_ar) _ar();
  if(SN_ANKER && document.body.dataset.view === "abenteuer"){ var a = (SN_TAB === "figuren" ? "fig-" : "ort-") + SN_ANKER; SN_ANKER = null; setTimeout(function(){ jump(a); }, 30); }
};
(window.SP_SUCHE = window.SP_SUCHE || []).push(function(add){
  var S = SP_SNUFF, r = "abenteuer/snuff/";
  add(S.titel, "Abenteuer · Auftrag", r + "auftrag", 19, [S.einl, S.laufen.karten, S.auftrag.vl, S.tagwerk.b, S.dominion.b], "qs");
  S.figuren.forEach(function(f){ add(f.t + " (" + f.en + ")", "Snuff Out the Sun · Figuren", r + "figuren/" + f.id, f.p, [f.b, f.druck, f.nach], "qs"); });
  S.orte.forEach(function(o){ add(o.t + " (" + o.en + ")", "Snuff Out the Sun · Orte", r + "orte/" + o.id, o.p, [o.b, o.req], "qs"); });
  S.aufstieg.phasen.forEach(function(p){ add(p.t + " (" + p.en + ")", "Snuff Out the Sun · Der Aufstieg", r + "aufstieg", 24, p.b, "qs"); });
  add(S.aufstieg.ende.h, "Snuff Out the Sun · Der Aufstieg", r + "aufstieg", 24, S.aufstieg.ende.b, "qs");
  add(S.aufstieg.fort.h, "Snuff Out the Sun · Der Aufstieg", r + "aufstieg", 24, S.aufstieg.fort.b, "qs");
});
