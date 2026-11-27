/* Otherscape – Charakterbogen im Look des Original-Bogens (Charakterkarte, Crew-Theme, 4 Themenkarten vorn/hinten, Loadout).
   Wird vom Mist-Ersteller (shared/mist-ersteller.js) über CFG.bogen eingebunden. Alle Felder sind anklickbar. */
(function(){
"use strict";
var A = MistErsteller.api, esc = A.esc, LT = "ABCDEFGHIJ".split("");
var TYP = {Self: {l: "Selbst", m: "Identität"}, Mythos: {l: "Mythos", m: "Ritual"}, Noise: {l: "Noise", m: "Trieb"}};
var EVO = ["Eine neue Art von Essenz erschaffen", "Einen weiteren breiten Power-Tag erschaffen", "Ein Veteranen-Special erhalten", "Ein Veteranen-Special erhalten", "Ein Veteranen-Special erhalten", "In den Sonnenuntergang reiten (Ruhestand)", "Die Kosmologie erschüttern (erzählerische Entwicklung)", "Vollständige Neuerschaffung (Neuverteilung)"];
var ESS = {S: "Real", M: "Avatar / Medium", N: "Singularität", SM: "Spiritualist:in", SN: "Cyborg", MN: "Transhumane:r", SMN: "Nexus"};
var ICO = {
  Self: '<path d="M8 13V6.5a1.5 1.5 0 0 1 3 0V12M11 11V5a1.5 1.5 0 0 1 3 0v6M14 11V6.5a1.5 1.5 0 0 1 3 0V14c0 4-2.5 6-6 6s-5-1.5-6.5-4l-1.8-3a1.4 1.4 0 0 1 2.3-1.6L8 13"/>',
  Mythos: '<path d="M3 5h18l-9 15z"/><path d="M7.5 10c1.4-1.5 2.9-2.2 4.5-2.2s3.1.7 4.5 2.2c-1.4 1.5-2.9 2.2-4.5 2.2s-3.1-.7-4.5-2.2z"/><circle cx="12" cy="10" r="1" fill="currentColor"/>',
  Noise: '<rect x="6.5" y="6.5" width="11" height="11" rx="1.5"/><rect x="9.5" y="9.5" width="5" height="5"/><path d="M9 3v3.5M12 3v3.5M15 3v3.5M9 17.5V21M12 17.5V21M15 17.5V21M3 9h3.5M3 12h3.5M3 15h3.5M17.5 9H21M17.5 12H21M17.5 15H21"/>'
};
var svg = function(p, w){ return '<svg viewBox="0 0 24 24" width="' + (w || 20) + '" height="' + (w || 20) + '" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + p + '</svg>'; };
var FLAMME = '<svg viewBox="0 0 24 24" width="15" height="15"><path d="M12 2c1 4 6 6 6 12a6 6 0 0 1-12 0c0-3 1.5-4.5 3-6 0 2 1 3 2 3-1-3 0-6 1-9z" fill="currentColor"/></svg>';
var CTX = null;

/* ---------- Daten ---------- */
function arr(n, f){ var a = []; for(var i = 0; i < n; i++) a.push(f ? f(i) : ""); return a; }
function fit(a, n, f){ a = Array.isArray(a) ? a : []; while(a.length < n) a.push(f ? f(a.length) : ""); return a; }
function ens(c){
  c.spieler = c.spieler || ""; c.rel = fit(c.rel, 5, function(){ return {w: "", t: ""}; });
  c.evo = fit(c.evo, EVO.length, function(){ return false; }); c.cspec = fit(c.cspec, 8);
  c.crew = c.crew || {}; var k = c.crew; k.name = k.name || ""; k.power = fit(k.power, 8); k.weak = fit(k.weak, 2); k.motiv = k.motiv || ""; k.spec = fit(k.spec, 14); k.upg = k.upg || 0; k.dec = k.dec || 0;
  if(!Array.isArray(c.load)){
    var aus = String(c.ausr || "").split(/\n+/).map(function(x){ return x.trim(); }).filter(Boolean);
    c.load = [0, 1].map(function(n){ return {tags: arr(21, function(i){ return {a: n === 0 && aus[i] ? aus[i] : "", flaw: false, burn: false}; }), spec: arr(6), upg: 0}; });
  }
  c.themes.forEach(function(t){ t.spec = t.spec || []; t.upg = t.upg || 0; t.dec = t.dec || 0; if(!t.typ && t.book){ var b = A.book(t.book); if(b) t.typ = b.typ; } });
}
function typOf(t){ var b = t.book && A.book(t.book); return b ? b.typ : t.typ || ""; }
function essenz(c){ var s = {}; c.themes.forEach(function(t){ var y = typOf(t); if(y) s[y[0]] = 1; }); var k = ["S", "M", "N"].filter(function(x){ return s[x]; }).join(""); return k ? ESS[k] : ""; }
function pListe(t){ var b = A.book(t.book), a = b && b.power[0] ? b.power[0].l : "A"; return {kern: t.power.filter(function(x){ return x.l === a; })[0], rest: t.power.filter(function(x){ return x.l !== a; }), a: a}; }
function kitTags(bookId, art, l){ var i = LT.indexOf(l), out = []; A.kitsOf(bookId).forEach(function(k){ var v = k[art][i]; if(v && out.indexOf(v) < 0) out.push(v); }); return out; }
function setPath(o, p, v){ var k = p.split("."); for(var i = 0; i < k.length - 1; i++) o = o[k[i]]; o[k[k.length - 1]] = v; }
function getPath(o, p){ p.split(".").forEach(function(k){ o = o == null ? o : o[k]; }); return o; }

/* ---------- Bausteine ---------- */
var kopf = function(t, cls){ return '<div class="ob-kopf ' + (cls || "") + '">' + t + '</div>'; };
var bar = function(t){ return '<div class="ob-bar">' + t + '</div>'; };
function fuss(logo){ return '<div class="ob-fuss">' + (logo ? '<span class="ob-logo">:OTHER<b>SCAPE</b></span>' : '<span class="ob-soo">SON <i>OF</i> OAK<small>GAME STUDIO</small></span>') + '</div>'; }
function ticks(path, n, val, lbl){ var h = ""; for(var i = 1; i <= n; i++) h += '<a class="ob-tick' + (val >= i ? " on" : "") + '" data-act="obTick" data-p="' + path + '" data-v="' + i + '" data-tip="' + lbl + ' ' + i + '"></a>'; return h; }
function track(path, o){ return '<div class="ob-track"><div class="ob-tr"><span>Upgrade ›</span><div>' + ticks(path + ".upg", 3, o.upg, "Upgrade") + '</div></div><div class="ob-tr"><span>‹ Decay</span><div>' + ticks(path + ".dec", 3, o.dec, "Decay") + '</div></div></div>'; }
function legende(flaw){ return '<div class="ob-leg"><span>Tags</span><i class="lp">Power</i>' + (flaw ? '<i class="lf">Makel</i>' : '<i class="lw">Schwäche</i>') + '<i class="lb">Verbrennen</i></div>'; }
function eing(path, val, ph, cls){ return '<input class="ob-in ' + (cls || "") + '" data-f="obP" data-p="' + path + '" value="' + esc(val) + '" placeholder="' + esc(ph || "") + '">'; }

/* ---------- Charakterkarte ---------- */
function hexagon(c){
  var cx = 135, cy = 86, R = 62, pt = function(deg){ var r = deg * Math.PI / 180; return [cx + R * Math.cos(r), cy + R * Math.sin(r)]; };
  var V = {real: pt(-90), spi: pt(-30), ava: pt(30), tra: pt(90), sin: pt(150), cyb: pt(210)}, C = [cx, cy], P = function(a){ return a.map(function(p){ return p[0].toFixed(1) + "," + p[1].toFixed(1); }).join(" "); };
  var s = {}; c.themes.forEach(function(t){ var y = typOf(t); if(y) s[y] = (s[y] || 0) + 1; });
  var e = essenz(c), reg = function(pts, col, typ, lx, ly, lt){ var on = !!s[typ]; return '<polygon points="' + P(pts) + '" fill="' + col + '" fill-opacity="' + (on ? .55 : .14) + '" stroke="' + col + '" stroke-opacity=".7"/><text x="' + lx + '" y="' + ly + '" class="ob-hreg" fill="' + col + '">' + lt + (on ? " " + s[typ] : "") + '</text>'; };
  var h = '<svg class="ob-hex" viewBox="0 0 270 172">' +
    reg([C, V.cyb, V.real, V.spi], "#e2557f", "Self", cx, cy - 34, "SELBST") +
    reg([C, V.spi, V.ava, V.tra], "#9a5cf0", "Mythos", cx + 30, cy + 22, "MYTHOS") +
    reg([C, V.tra, V.sin, V.cyb], "#1fb8d6", "Noise", cx - 30, cy + 22, "NOISE");
  var lab = function(p, t, dx, dy, anc){ return '<text x="' + (p[0] + dx) + '" y="' + (p[1] + dy) + '" text-anchor="' + anc + '" class="ob-hl' + (e === t ? " on" : "") + '">' + esc(t.toUpperCase()) + '</text>'; };
  h += lab(V.real, "Real", 0, -6, "middle") + lab(V.spi, "Spiritualist:in", 4, -2, "start") + lab(V.ava, "Avatar / Medium", 4, 10, "start") + lab(V.tra, "Transhumane:r", 0, 13, "middle") + lab(V.sin, "Singularität", -4, 10, "end") + lab(V.cyb, "Cyborg", -4, -2, "end") + '<text x="' + cx + '" y="' + (cy + 4) + '" text-anchor="middle" class="ob-hl' + (e === "Nexus" ? " on" : "") + '">NEXUS</text>';
  return h + '</svg>';
}
function karteVorn(c){
  var vor = []; c.themes.forEach(function(t){ var b = t.book && A.book(t.book); if(b && b.crew) b.crew.forEach(function(x){ if(vor.indexOf(x[1]) < 0) vor.push(x[1]); }); });
  return '<div class="ob-card grau">' + kopf("Charakterkarte") + '<div class="ob-body">' +
    '<div class="ob-name"><textarea class="ob-cname" data-f="cname" rows="2" placeholder="Charaktername">' + esc(c.name) + '</textarea></div>' +
    '<div class="ob-bar ob-sp"><span>Spieler:in:</span>' + eing("spieler", c.spieler, "") + '</div>' +
    bar("Essenz") + '<div class="ob-ess">' + hexagon(c) + '</div>' +
    bar("Crew-Beziehungen") + '<div class="ob-relh"><span>Crew-Mitglied</span><span>Beziehungs-Tag</span></div><div class="ob-rel">' +
    c.rel.map(function(r, i){ return '<div>' + eing("rel." + i + ".w", r.w, "") + '<input class="ob-in" list="obCrewVor" data-f="obP" data-p="rel.' + i + '.t" value="' + esc(r.t) + '"></div>'; }).join("") + '</div>' +
    '<datalist id="obCrewVor">' + vor.map(function(v){ return '<option value="' + esc(v) + '">'; }).join("") + '</datalist>' +
    '</div>' + fuss(true) + '</div>';
}
function karteHinten(c){
  return '<div class="ob-card grau">' + kopf("Charakterkarte") + '<div class="ob-body">' + bar("Evolution") + '<div class="ob-evo">' +
    EVO.map(function(t, i){ return '<a class="' + (c.evo[i] ? "on" : "") + '" data-act="obToggle" data-p="evo.' + i + '"><i></i>' + esc(t) + '</a>'; }).join("") + '</div>' +
    bar("Specials") + '<div class="ob-lines">' + c.cspec.map(function(v, i){ return eing("cspec." + i, v, ""); }).join("") + '</div></div>' + fuss(false) + '</div>';
}
/* ---------- Crew-Theme (zum Eintragen) ---------- */
function crewVorn(c){
  var k = c.crew;
  return '<div class="ob-card">' + kopf('<input class="ob-kin" data-f="obP" data-p="crew.name" value="' + esc(k.name) + '" placeholder="Crew-Themenkarte">', "lime") + '<div class="ob-body blau">' + legende() + '<div class="ob-tags">' +
    k.power.map(function(v, i){ return '<div class="ob-tag' + (i === 0 ? " gross" : "") + '"><div class="ob-feld">' + eing("crew.power." + i, v, "") + '</div><span class="ob-burn leer">' + FLAMME + '</span></div>'; }).join("") +
    k.weak.map(function(v, i){ return '<div class="ob-tag weak"><div class="ob-feld">' + eing("crew.weak." + i, v, "") + '</div></div>'; }).join("") + '</div>' +
    '<div class="ob-mot"><div class="ob-ml">Identität / Ritual / Trieb</div><div class="ob-mrow"><textarea class="ob-ta" data-f="obP" data-p="crew.motiv" rows="3">' + esc(k.motiv) + '</textarea>' + track("crew", k) + '</div></div></div>' + fuss(true) + '</div>';
}
function crewHinten(c){
  return '<div class="ob-card">' + kopf("Crew-Themenkarte", "lime") + '<div class="ob-body blau">' + bar("Themen-Specials") + '<div class="ob-lines weiss">' + c.crew.spec.map(function(v, i){ return eing("crew.spec." + i, v, ""); }).join("") + '</div></div>' + fuss(false) + '</div>';
}
/* ---------- Themenkarten ---------- */
function themaVorn(c, t, i){
  var b = t.book && A.book(t.book), y = typOf(t), pl = b ? pListe(t) : null;
  var h = '<div class="ob-card">' + kopf('<span class="ob-typen">' + ["Self", "Mythos", "Noise"].map(function(k, n){ return (n ? '<em>/</em>' : "") + '<a class="ob-ty' + (y === k ? " on t-" + k : "") + '" data-act="obTyp" data-i="' + i + '" data-v="' + k + '" data-tip="' + TYP[k].l + '">' + svg(ICO[k], 19) + '</a>'; }).join("") + '</span>' +
    '<a class="ob-buch' + (b ? "" : " leer") + '" data-act="obBuch" data-i="' + i + '" data-k="buch' + i + '">' + (b ? esc(t.name && t.name !== b.name ? t.name : b.name) : "Themenbuch wählen") + '</a>' + (b ? '<b class="ob-i" data-act="obBuchInfo" data-i="' + i + '" data-k="bi' + i + '">i</b>' : ""), "lime") +
    '<div class="ob-body blau">' + legende() + '<div class="ob-tags">';
  for(var s = 0; s < 8; s++){
    var x = !b ? null : s === 0 ? pl.kern : pl.rest[s - 1], q = x && b.power.filter(function(z){ return z.l === x.l; })[0];
    var ph = b && s === 0 && !x ? esc(b.power[0].q) : "";
    h += '<div class="ob-tag' + (s === 0 ? " gross" : "") + (x && x.burn ? " burned" : "") + '"' + (q ? ' data-tip="' + esc(q.l + ": " + q.q) + '"' : "") + '><a class="ob-feld" data-act="obTag" data-i="' + i + '" data-art="power" data-s="' + s + '" data-k="p' + i + "_" + s + '">' +
      (x ? (x.l.length === 1 ? '<i class="ob-l">' + esc(x.l) + '</i>' : "") + '<span>' + esc(x.a) + '</span>' : '<span class="ph">' + ph + '</span>') + '</a>' +
      '<a class="ob-burn' + (x && x.a ? "" : " leer") + (x && x.burn ? " on" : "") + '" data-act="obBurn" data-i="' + i + '" data-s="' + s + '" data-tip="' + (x && x.burn ? "Wieder aktivieren" : "Verbrennen") + '">' + FLAMME + '</a></div>';
  }
  for(var w = 0; w < 2; w++){
    var xw = b && t.weak[w], qw = xw && b.weak.filter(function(z){ return z.l === xw.l; })[0];
    h += '<div class="ob-tag weak"' + (qw ? ' data-tip="' + esc(qw.l + ": " + qw.q) + '"' : "") + '><a class="ob-feld" data-act="obTag" data-i="' + i + '" data-art="weak" data-s="' + w + '" data-k="w' + i + "_" + w + '">' + (xw ? (xw.l.length === 1 ? '<i class="ob-l">' + esc(xw.l) + '</i>' : "") + '<span>' + esc(xw.a) + '</span>' : "") + '</a></div>';
  }
  h += '</div><div class="ob-mot"><div class="ob-ml">' + ["Self", "Mythos", "Noise"].map(function(k){ return '<span class="' + (y === k ? "on" : "") + '">' + TYP[k].m + '</span>'; }).join(" / ") + '</div><div class="ob-mrow"><a class="ob-motiv" data-act="obMotiv" data-i="' + i + '" data-k="m' + i + '">' + esc(t.motiv) + '</a>' + track("themes." + i, t) + '</div></div></div>' + fuss(true) + '</div>';
  return h;
}
function themaHinten(c, t, i){
  var b = t.book && A.book(t.book), sp = (b && b.specials) || [], h = '<div class="ob-card">' + kopf(b ? esc(b.name) : "Themenkarte", "lime") + '<div class="ob-body blau">' + bar("Themen-Specials") + '<div class="ob-lines weiss sp">';
  t.spec.forEach(function(n, k){ var s = sp.filter(function(x){ return x[0] === n; })[0]; h += '<a class="ob-spec" data-act="obSpec" data-i="' + i + '" data-v="' + k + '" data-k="s' + i + "_" + k + '"><b>' + esc(n) + '</b>' + (s ? '<small>' + esc(s[1]) + '</small>' : "") + '</a>'; });
  var rest = Math.max(1, 14 - t.spec.length * 2);
  for(var r = 0; r < rest; r++) h += r === 0 && b && t.spec.length < sp.length ? '<a class="ob-spec leer" data-act="obSpec" data-i="' + i + '" data-v="-1" data-k="s' + i + '_n"><span class="ph">+</span></a>' : '<div class="ob-ln"></div>';
  return h + '</div></div>' + fuss(false) + '</div>';
}
/* ---------- Loadout (zum Eintragen) ---------- */
function loadTag(n, i, x){ var p = "load." + n + ".tags." + i; return '<div class="ob-tag klein' + (x.burn ? " burned" : "") + '"><div class="ob-feld">' + eing(p + ".a", x.a, "") + '</div><a class="ob-flaw' + (x.flaw ? " on" : "") + '" data-act="obToggle" data-p="' + p + '.flaw" data-tip="Makel">–</a><a class="ob-burn' + (x.burn ? " on" : "") + (x.a ? "" : " leer") + '" data-act="obToggle" data-p="' + p + '.burn" data-tip="Verbrennen">' + FLAMME + '</a></div>'; }
function loadout(c, n){
  var L = c.load[n];
  return '<div class="ob-card loadout">' + kopf('Loadout-Thema<span class="ob-upg">Upgrade ›' + ticks("load." + n + ".upg", 3, L.upg, "Upgrade") + '</span>', "slate") + '<div class="ob-body slate">' + legende(true) + '<div class="ob-tags">' + L.tags.slice(0, 14).map(function(x, i){ return loadTag(n, i, x); }).join("") + '</div></div>' + fuss(true) + '</div>' +
    '<div class="ob-card loadout">' + kopf("Loadout-Thema", "slate") + '<div class="ob-body slate">' + legende(true) + '<div class="ob-tags">' + L.tags.slice(14, 21).map(function(x, i){ return loadTag(n, i + 14, x); }).join("") + '</div>' + bar("Loadout-Specials") + '<div class="ob-lines weiss">' + L.spec.map(function(v, i){ return eing("load." + n + ".spec." + i, v, ""); }).join("") + '</div></div>' + fuss(true) + '</div>';
}

/* ---------- Gesamter Bogen ---------- */
function render(c){
  ens(c);
  var seite = function(titel, inhalt, cls){ return '<section class="ob-seite ' + (cls || "") + '"><h2 class="ob-st">' + titel + '</h2><div class="ob-reihe">' + inhalt + '</div></section>'; };
  return '<div class="ob" id="miSheet">' +
    seite('<span>Charakterkarte</span><span>Crew-Themenkarte</span>', karteVorn(c) + karteHinten(c) + crewVorn(c) + crewHinten(c), "s1") +
    seite("Themenkarten [Vorderseite]", c.themes.map(function(t, i){ return themaVorn(c, t, i); }).join("")) +
    seite("Themenkarten [Rückseite]", c.themes.map(function(t, i){ return themaHinten(c, t, i); }).join("")) +
    seite("Loadout-Themenkarte", loadout(c, 0) + loadout(c, 1)) + '</div>';
}

/* ---------- Panels ---------- */
function anc(el){ return el && el.isConnected ? el : el && el.dataset.k ? document.querySelector('[data-k="' + el.dataset.k + '"]') || document.body : document.body; }
function aufraeumen(){
  var c = A.cur(); if(!c) return;
  c.themes.forEach(function(t){ t.power = t.power.filter(function(x){ return x.a && x.a.trim(); }); t.weak = t.weak.filter(function(x){ return x.a && x.a.trim(); }); t.extra = t.power.length > 3 || t.weak.length > 1 ? 1 : 0; });
  CTX = null; A.rerender();
}
function eintrag(c){ var t = c.themes[CTX.i], L = t[CTX.art]; return L.filter(function(x){ return x.l === CTX.l; })[0]; }
function frageListe(c){
  var t = c.themes[CTX.i], b = A.book(t.book), used = t[CTX.art].map(function(x){ return x.l; }), Q = b[CTX.art].filter(function(q){ return used.indexOf(q.l) < 0 && !(CTX.art === "power" && q.l === b.power[0].l); });
  return '<div class="ob-pk">' + (CTX.art === "power" ? "Power-Tag" : "Schwächen-Tag") + ' · Frage wählen</div><div class="ob-ql">' +
    Q.map(function(q){ var ex = kitTags(t.book, CTX.art, q.l).slice(0, 3); return '<a data-act="obQ" data-v="' + esc(q.l) + '"><i>' + esc(q.l) + '</i><span>' + esc(q.q) + (ex.length ? '<small>z. B. ' + ex.map(esc).join(" · ") + '</small>' : "") + '</span></a>'; }).join("") +
    '<a data-act="obQ" data-v="+' + Date.now().toString(36) + '"><i>+</i><span>Freier Tag ohne Frage<small>z. B. später durch ein Upgrade</small></span></a></div>';
}
function antwort(c){
  var t = c.themes[CTX.i], b = A.book(t.book), q = b[CTX.art].filter(function(z){ return z.l === CTX.l; })[0], x = eintrag(c), ex = q ? kitTags(t.book, CTX.art, q.l) : [];
  var kern = CTX.art === "power" && CTX.s === 0;
  return '<div class="ob-pk">' + (CTX.art === "power" ? "Power-Tag" : "Schwächen-Tag") + (q ? " · Frage " + esc(q.l) + (kern ? " (Pflicht)" : "") : " · frei") + '</div>' + (q ? '<div class="ob-pq">' + esc(q.q) + '</div>' : "") +
    '<input class="ob-pin" data-f="obAns" value="' + esc(x ? x.a : "") + '" placeholder="Antwort als kurzer Tag …" autocomplete="off">' +
    (ex.length ? '<div class="ob-pex">' + ex.map(function(v){ return '<a data-act="obEx" data-v="' + esc(v) + '">' + esc(v) + '</a>'; }).join("") + '</div>' : "") +
    '<div class="ob-pa">' + (kern ? "" : '<a data-act="obAndere">Andere Frage</a>') + (x ? '<a data-act="obWeg">Entfernen</a>' : "") + '<a class="ok" data-act="obFertig">Fertig</a></div>';
}
function panelZeigen(anchor, html){ var c = A.cur(); A.panel(anchor, html, aufraeumen, "ob-panel"); }
function panelNeu(html){ var p = document.querySelector(".ob-panel"); if(!p) return; p.innerHTML = html; var f = p.querySelector("input,textarea"); if(f){ f.focus(); f.setSelectionRange && f.setSelectionRange(f.value.length, f.value.length); } }
function buchListe(c, i, anchor){
  var t = c.themes[i], y = typOf(t), cfg = A.cfg(), items = [];
  cfg.books.forEach(function(b){ items.push({n: b.name, s: "", g: TYP[b.typ].l, info: A.bookInfo(b), id: b.id}); });
  cfg.books.forEach(function(b){ A.kitsOf(b.id).forEach(function(k){ items.push({n: k.name, s: b.name, g: "Fertige Kits · " + TYP[b.typ].l, info: A.kitInfo(k), id: b.id, kit: k.name}); }); });
  A.popOpen(anchor, items, function(it){
    var voll = t.power.length || t.weak.length || t.motiv;
    if(voll && !confirm("Thema " + (i + 1) + " neu belegen? Die bisherigen Tags gehen verloren.")) return;
    var nt = it.kit ? A.themeAusKit(A.kitBy(it.id, it.kit)) : A.blankTheme(); nt.book = it.id; nt.typ = A.book(it.id).typ; nt.spec = []; nt.upg = t.upg; nt.dec = t.dec;
    Object.keys(t).forEach(function(k){ delete t[k]; }); Object.assign(t, nt); A.rerender();
  }, {auf: y ? TYP[y].l : null});
}

/* ---------- Klicks / Eingaben ---------- */
function click(act, el, c, e){
  if(act.indexOf("ob") !== 0) return false;
  var i = +el.dataset.i, t = c.themes[i];
  if(act === "obToggle"){ setPath(c, el.dataset.p, !getPath(c, el.dataset.p)); A.rerender(); }
  else if(act === "obTick"){ var v = +el.dataset.v, cur = getPath(c, el.dataset.p) || 0; setPath(c, el.dataset.p, cur === v ? v - 1 : v); A.rerender(); }
  else if(act === "obTyp"){
    var b = t.book && A.book(t.book);
    if(b && b.typ !== el.dataset.v){ if((t.power.length || t.weak.length) && !confirm("Typ wechseln? Das Themenbuch und seine Tags werden entfernt.")) return true; var nt = A.blankTheme(); nt.typ = el.dataset.v; nt.spec = []; Object.keys(t).forEach(function(k){ delete t[k]; }); Object.assign(t, nt); }
    else t.typ = el.dataset.v;
    A.rerender(); if(!t.book) buchListe(c, i, document.querySelector('[data-k="buch' + i + '"]'));
  }
  else if(act === "obBuch") buchListe(c, i, anc(el));
  else if(act === "obBuchInfo"){ var bb = A.book(t.book); A.panel(anc(el), '<div class="ob-binfo">' + A.bookInfo(bb) + (bb.why ? '<p><b>' + esc(bb.why.q) + '</b></p><ul>' + bb.why.opts.map(function(o){ return '<li>' + esc(o) + '</li>'; }).join("") + '</ul>' : "") + '<p class="ob-pa"><a data-act="obName" data-i="' + i + '">Thema umbenennen</a></p></div>', null, "ob-panel breit"); }
  else if(act === "obName"){ var nn = prompt("Name des Themas", t.name || A.book(t.book).name); if(nn != null){ t.name = nn.trim(); A.popClose(); A.rerender(); } }
  else if(act === "obTag"){
    if(!t.book){ buchListe(c, i, document.querySelector('[data-k="buch' + i + '"]')); return true; }
    var art = el.dataset.art, s = +el.dataset.s, bk = A.book(t.book), x;
    if(art === "power"){ var pl = pListe(t); x = s === 0 ? pl.kern : pl.rest[s - 1]; } else x = t.weak[s];
    CTX = {i: i, art: art, s: s, l: x ? x.l : null};
    if(art === "power" && s === 0) CTX.l = bk.power[0].l;
    panelZeigen(anc(el), CTX.l ? antwort(c) : frageListe(c));
  }
  else if(act === "obQ"){ CTX.l = el.dataset.v; panelNeu(antwort(c)); }
  else if(act === "obAndere"){ var x2 = eintrag(c); if(x2) c.themes[CTX.i][CTX.art] = c.themes[CTX.i][CTX.art].filter(function(y){ return y !== x2; }); CTX.l = null; panelNeu(frageListe(c)); }
  else if(act === "obWeg"){ var x3 = eintrag(c); if(x3) x3.a = ""; A.popClose(); }
  else if(act === "obEx"){ setAns(c, el.dataset.v); A.popClose(); }
  else if(act === "obFertig") A.popClose();
  else if(act === "obBurn"){ var pl2 = pListe(t), s2 = +el.dataset.s, x4 = s2 === 0 ? pl2.kern : pl2.rest[s2 - 1]; if(x4 && x4.a){ x4.burn = !x4.burn; A.rerender(); } }
  else if(act === "obMotiv"){
    if(!t.book){ buchListe(c, i, document.querySelector('[data-k="buch' + i + '"]')); return true; }
    var b4 = A.book(t.book), lbl = TYP[b4.typ].m; CTX = {i: i, motiv: 1};
    panelZeigen(anc(el), '<div class="ob-pk">' + lbl + '</div><textarea class="ob-pin" data-f="obMot" rows="3" placeholder="' + (b4.typ === "Mythos" ? "Ich muss …" : lbl + " …") + '">' + esc(t.motiv) + '</textarea>' +
      ((b4.motivEx || []).length ? '<div class="ob-pex ob-mex">' + b4.motivEx.map(function(m){ return '<a data-act="obMex" data-v="' + esc(m[1]) + '"><small>' + esc(m[0]) + '</small>' + esc(m[1]) + '</a>'; }).join("") + '</div>' : "") +
      (b4.motivNote ? '<p class="ob-pn">' + esc(b4.motivNote) + '</p>' : "") + '<div class="ob-pa"><a class="ok" data-act="obFertig">Fertig</a></div>');
  }
  else if(act === "obMex"){ c.themes[CTX.i].motiv = el.dataset.v; A.popClose(); }
  else if(act === "obSpec"){
    var b5 = t.book && A.book(t.book); if(!b5) return true; var k = +el.dataset.v, sp = b5.specials || [];
    var items = sp.filter(function(x){ return t.spec.indexOf(x[0]) < 0 || t.spec[k] === x[0]; }).map(function(x){ return {n: x[0], s: "", g: "Specials · " + b5.name, info: '<h4>' + esc(x[0]) + '</h4><p>' + esc(x[1]) + '</p>', id: x[0]}; });
    if(k >= 0) items.unshift({n: "Special entfernen", s: "", g: "Specials · " + b5.name, id: ""});
    A.popOpen(anc(el), items, function(it){ if(k >= 0){ if(it.id) t.spec[k] = it.id; else t.spec.splice(k, 1); } else t.spec.push(it.id); A.rerender(); }, {offen: 1});
  }
  else return false;
  return true;
}
function setAns(c, v){
  var t = c.themes[CTX.i], L = t[CTX.art], x = eintrag(c);
  if(x) x.a = v; else { if(CTX.art === "power" && CTX.s === 0) L.unshift({l: CTX.l, a: v}); else L.push({l: CTX.l, a: v}); }
}
function input(f, el, c){
  if(f === "obP"){ setPath(c, el.dataset.p, el.value); A.save(); return true; }
  if(f === "obAns" && CTX){ setAns(c, el.value); A.save(); return true; }
  if(f === "obMot" && CTX){ c.themes[CTX.i].motiv = el.value; A.save(); return true; }
  return false;
}
document.addEventListener("keydown", function(e){ if(e.key === "Enter" && e.target.dataset && (e.target.dataset.f === "obAns")){ e.preventDefault(); A.popClose(); } });
window.OS_BOGEN = {render: render, click: click, input: input};
})();
