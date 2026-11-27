/* Otherscape – Charakterbogen im Look des Original-Bogens (Charakterkarte, Crew-Theme, 4 Themenkarten vorn/hinten, Loadout).
   Wird vom Mist-Ersteller (shared/mist-ersteller.js) über CFG.bogen eingebunden. Alle Felder sind anklickbar. */
(function(){
"use strict";
var A = MistErsteller.api, esc = A.esc, LT = "ABCDEFGHIJ".split("");
var TYP = {Self: {l: "Selbst", m: "Identität"}, Mythos: {l: "Mythos", m: "Ritual"}, Noise: {l: "Noise", m: "Trieb"}};
var EVO = ["Eine neue Art von Essenz erschaffen", "Weiteren breiten Power-Tag erschaffen", "Ein Veteranen-Special erhalten", "Ein Veteranen-Special erhalten", "Ein Veteranen-Special erhalten", "In den Sonnenuntergang (Ruhestand)", "Die Kosmologie erschüttern (erzählerische Entwicklung)", "Völliger Neuaufbau (Neuverteilung)"];
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

/* ---------- Positionierung in PDF-Punkten (Seite 792 × 612 pt) ---------- */
function st(x, y, w, h, extra){ return 'style="left:' + (x / 7.92).toFixed(3) + '%;top:' + (y / 6.12).toFixed(3) + '%;width:' + (w / 7.92).toFixed(3) + '%;height:' + (h / 6.12).toFixed(3) + '%' + (extra ? ";" + extra : "") + '"'; }
function box(x, y, w, h, cls, inner, attr, extra){ return '<div class="' + cls + '" ' + st(x, y, w, h, extra) + (attr ? " " + attr : "") + '>' + (inner || "") + '</div>'; }
function lnk(x, y, w, h, cls, inner, attr, extra){ return '<a class="' + cls + '" ' + st(x, y, w, h, extra) + (attr ? " " + attr : "") + '>' + (inner || "") + '</a>'; }
function txt(x, y, w, h, cls, t, extra){ return box(x, y, w, h, "t " + cls, esc(t), "", extra); }
function inp(x, y, w, h, path, val, cls, ph){ return '<input class="o-in ' + (cls || "") + '" ' + st(x, y, w, h) + ' data-f="obP" data-p="' + path + '" value="' + esc(val) + '"' + (ph ? ' placeholder="' + esc(ph) + '"' : "") + '>'; }
var COPY = function(){ return txt(29.8, 583, 200, 9, "copy", "© 2024 Son of Oak Game Studio LLC"); };
function titel(x, t, fs){ return '<div class="t titel" ' + st(x, 15.2, 10, 31.3, "width:auto;font-size:calc(var(--pt)*" + (fs || 26) + ")") + '>' + esc(t) + '</div>'; }
function seite(n, ti, tx, tw, inhalt, fs){ return '<section class="os-seite" style="background-image:url(img/bogen/seite-' + n + '.webp)">' + titel(tx, ti, fs) + inhalt + COPY() + '</section>'; }
/* Upgrade/Decay-Leiste: drei Felder je Richtung */
function track(dx, dy, path, o){
  var h = "", Y = [371.05, 386.05, 401.3, 416.3, 431.3, 446.3, 461.8], x = 189 + dx;
  for(var k = 0; k < 3; k++){ h += lnk(x, Y[k] + dy + 66.7, 15, Y[k + 1] - Y[k], "trk" + (o.upg >= k + 1 ? " on" : ""), "", 'data-act="obTick" data-p="' + path + '.upg" data-v="' + (k + 1) + '" data-tip="Upgrade ' + (k + 1) + '"'); }
  for(var d = 0; d < 3; d++){ h += lnk(x, Y[d + 3] + dy + 66.7, 15, Y[d + 4] - Y[d + 3], "trk" + (o.dec >= d + 1 ? " on" : ""), "", 'data-act="obTick" data-p="' + path + '.dec" data-v="' + (d + 1) + '" data-tip="Decay ' + (d + 1) + '"'); }
  return h + txt(176.1 + dx, 448 + dy, 10.7, 33, "vert", "Upgrade ›") + txt(175.7 + dx, 485.5 + dy, 10.7, 26, "vert", "‹ Decay");
}
/* gemeinsame Beschriftung der Vorderseite (Themen- und Crew-Karte) */
function legende(dx, dy, motivHtml){
  return txt(32.3 + dx - 25, 92.4 + dy, 30, 14, "tags", "Tags") + txt(92.9 + dx - 25, 94.7 + dy, 20, 9.8, "chip", "Power") + txt(121 + dx - 25, 94.7 + dy, 33, 9.8, "chip", "Schwäche") + txt(159.5 + dx - 25, 95.3 + dy, 26, 9.8, "chip k", "Verbrennen") +
    box(32.3 + dx - 25, 421.5 + dy, 130, 12.6, "t ml", motivHtml);
}
var ROWS = [[46.8, 42.2], [93.5, 24.55], [122.75, 24.55], [151.5, 24.55], [180.25, 24.55], [209.5, 24.55], [238.25, 24.55], [267, 24.55]], WROWS = [[297.3, 23], [326.3, 23]];
var BURN_Y = [66.8, 105.6, 134.4, 163.3, 192, 221, 249.8, 278.6];

/* ---------- Seite 1: Charakterkarte + Crew-Theme ---------- */
function hexLabels(c){
  var e = essenz(c), s = {}; c.themes.forEach(function(t){ var y = typOf(t); if(y) s[y] = (s[y] || 0) + 1; });
  var L = [["Real", 115, 230.6, 30], ["Spiritualist:in", 154.3, 252.8, 46], ["Avatar / Medium", 154.3, 298, 44], ["Transhumane:r", 115, 321.2, 44], ["Singularität", 28.4, 298.1, 40], ["Cyborg", 41.1, 254.2, 25], ["Nexus", 115.3, 276.3, 22]];
  var h = L.map(function(l){ return txt(l[1] - 1.5, l[2] - .5, l[3], 9, "hx" + (e === l[0] ? " on" : ""), l[0] === "Avatar / Medium" ? "Avatar" : l[0]); }).join("") + txt(152.8, 307, 30, 9, "hx" + (e === "Avatar / Medium" ? " on" : ""), "Medium");
  h += txt(99, 253.8, 22, 10, "reg self" + (s.Self ? " on" : ""), "Selbst") + txt(117.5, 285.7, 24, 10, "reg myth" + (s.Mythos ? " on" : ""), "Mythos") + txt(81, 285.7, 20, 10, "reg noise" + (s.Noise ? " on" : ""), "Noise");
  return h;
}
function seite1(c){
  var vor = []; c.themes.forEach(function(t){ var b = t.book && A.book(t.book); if(b && b.crew) b.crew.forEach(function(x){ if(vor.indexOf(x[1]) < 0) vor.push(x[1]); }); });
  var h = txt(29.9, 64.9, 150, 18.5, "kopf w", "Charakterkarte") + txt(216.3, 64.7, 150, 18.5, "kopf w", "Charakterkarte") +
    '<textarea class="o-name" ' + st(34, 95, 156, 68) + ' data-f="cname" rows="2" placeholder="Charakter&#10;Name">' + esc(c.name) + '</textarea>' +
    txt(36.7, 174.4, 60, 18.2, "bar", "Spieler:in:") + inp(84, 175.5, 115, 16, "spieler", c.spieler, "hand") +
    txt(36.7, 202.2, 60, 18.2, "bar", "Essenz") + hexLabels(c) +
    txt(36.7, 350.6, 120, 18.2, "bar", "Crew-Beziehungen") + txt(36.7, 370, 70, 12.6, "sub", "Crew-Mitglied") + txt(117.6, 370, 70, 12.6, "sub", "Beziehungs-Tag");
  var RY = [383.3, 407, 432.8, 458.2, 484, 510];
  c.rel.forEach(function(r, i){ h += inp(36, RY[i] + 3, 73, RY[i + 1] - RY[i] - 4, "rel." + i + ".w", r.w, "hand s") + '<input class="o-in hand s" list="obCrewVor" ' + st(114, RY[i] + 3, 75, RY[i + 1] - RY[i] - 4) + ' data-f="obP" data-p="rel.' + i + '.t" value="' + esc(r.t) + '">'; });
  h += '<datalist id="obCrewVor">' + vor.map(function(v){ return '<option value="' + esc(v) + '">'; }).join("") + '</datalist>';
  /* Rückseite: Evolution + Specials */
  h += txt(224.7, 94.1, 120, 18.2, "bar", "Evolution") + '<div class="evo" ' + st(219.5, 115.5, 162, 146) + '>' + EVO.map(function(t, i){ return '<a class="' + (c.evo[i] ? "on" : "") + '" data-act="obToggle" data-p="evo.' + i + '"><i></i>' + esc(t) + '</a>'; }).join("") + '</div>';
  h += txt(224.8, 263.9, 120, 18.2, "bar", "Specials");
  var SY = [283, 303.7, 329.5, 355.2, 381, 406.3, 431.6, 457.4, 482.7, 508.5];
  for(var k = 0; k < 9; k++) h += inp(224, SY[k] + 2, 152, SY[k + 1] - SY[k] - 3, "cspec." + k, c.cspec[k] || "", "hand s");
  /* Crew-Theme */
  var dx = 373.7, dy = -3.1, k2 = c.crew;
  h += '<input class="o-in kopfin" ' + st(405.6, 64.4, 165, 18.5) + ' data-f="obP" data-p="crew.name" value="' + esc(k2.name) + '" placeholder="Crew-Themenkarte">' + txt(595.1, 64.4, 160, 18.5, "kopf g", "Crew-Themenkarte");
  h += legende(dx + 25, dy, "Identität / Ritual / Trieb");
  ROWS.forEach(function(r, i){ h += inp(38 + dx, r[0] + 66.7 + dy, 118, r[1], "crew.power." + i, k2.power[i] || "", "hand" + (i === 0 ? " big" : "")); });
  WROWS.forEach(function(r, i){ h += inp(40 + dx, r[0] + 66.7 + dy + 2, 128, r[1] - 4, "crew.weak." + i, k2.weak[i] || "", "hand wk"); });
  h += '<textarea class="o-mot hand" ' + st(36 + dx, 373.5 + 66.7 + dy, 136, 75) + ' data-f="obP" data-p="crew.motiv">' + esc(k2.motiv) + '</textarea>' + track(dx, dy, "crew", k2);
  h += txt(595.4, 89.1, 120, 14, "tags", "Themen-Specials");
  for(var q = 0; q < 14; q++) h += inp(596, 104.9 + q * 26.4 + 3, 158, 21, "crew.spec." + q, k2.spec[q] || "", "hand s");
  return seite(1, "Charakterkarte", 25.3, 190, titel(392.4, "Crew-Themenkarte", 25) + h, 26);
}

/* ---------- Seite 2: Themenkarten vorn ---------- */
var DX2 = [0, 186.8, 374.2, 561.4], DX3 = [0, 188, 374.9, 562.8];
function themaVorn(c, t, i){
  var dx = DX2[i], b = t.book && A.book(t.book), y = typOf(t), pl = b ? pListe(t) : null, h = "";
  [["Self", 37.2], ["Mythos", 55], ["Noise", 74.1]].forEach(function(k){ h += lnk(k[1] + dx - 8, 69.6, 16, 16, "ty" + (y === k[0] ? " on t-" + k[0] : ""), "", 'data-act="obTyp" data-i="' + i + '" data-v="' + k[0] + '" data-tip="' + TYP[k[0]].l + '"'); });
  h += lnk(86 + dx, 68.5, 104, 15.5, "buch" + (b ? "" : " leer"), b ? esc(t.name && t.name !== b.name ? t.name : b.name) : "Themenbuch wählen", 'data-act="obBuch" data-i="' + i + '" data-k="buch' + i + '"');
  if(b) h += lnk(191 + dx, 71, 9, 9, "ii", "i", 'data-act="obBuchInfo" data-i="' + i + '" data-k="bi' + i + '" data-tip="Infos zum Themenbuch"');
  h += legende(dx + 25, 0, ["Self", "Mythos", "Noise"].map(function(k){ return '<span class="' + (y === k ? "on" : "") + '">' + TYP[k].m + '</span>'; }).join(" / "));
  ROWS.forEach(function(r, s){
    var x = !b ? null : s === 0 ? pl.kern : pl.rest[s - 1], q = x && b.power.filter(function(z){ return z.l === x.l; })[0];
    var ph = b && s === 0 && !x ? '<span class="ph">' + esc(b.power[0].q) + '</span>' : "";
    h += lnk(34 + dx, r[0] + 66.7, 124, r[1], "feld" + (s === 0 ? " big" : "") + (x && x.burn ? " burned" : ""), (x ? (x.l.length === 1 ? '<i>' + esc(x.l) + '</i>' : "") + '<span>' + esc(x.a) + '</span>' : ph), 'data-act="obTag" data-i="' + i + '" data-art="power" data-s="' + s + '" data-k="p' + i + '_' + s + '"' + (q ? ' data-tip="' + esc(q.l + ": " + q.q) + '"' : ""));
    if(x && x.a) h += lnk(179.5 + dx, BURN_Y[s] + 66.7 - 6.5, 13, 13, "burn" + (x.burn ? " on" : ""), "", 'data-act="obBurn" data-i="' + i + '" data-s="' + s + '" data-tip="' + (x.burn ? "Wieder aktivieren" : "Verbrennen") + '"');
  });
  WROWS.forEach(function(r, w){
    var xw = b && t.weak[w], qw = xw && b.weak.filter(function(z){ return z.l === xw.l; })[0];
    h += lnk(36 + dx, r[0] + 66.7, 140, r[1], "feld wk", xw ? (xw.l.length === 1 ? '<i>' + esc(xw.l) + '</i>' : "") + '<span>' + esc(xw.a) + '</span>' : "", 'data-act="obTag" data-i="' + i + '" data-art="weak" data-s="' + w + '" data-k="w' + i + '_' + w + '"' + (qw ? ' data-tip="' + esc(qw.l + ": " + qw.q) + '"' : ""));
  });
  h += lnk(36 + dx, 373.5 + 66.7, 136, 75, "o-mot hand", esc(t.motiv), 'data-act="obMotiv" data-i="' + i + '" data-k="m' + i + '"') + track(dx, 0, "themes." + i, t);
  return h;
}
/* ---------- Seite 3: Themenkarten hinten (Specials) ---------- */
function specZeilen(n, d){ var z = 12 + Math.ceil(String(d || "").length / 52) * 8.6; return Math.max(1, Math.ceil((z + 4) / 26.4)); }
function themaHinten(c, t, i){
  var dx = DX3[i], b = t.book && A.book(t.book), sp = (b && b.specials) || [], h = txt(32.5 + dx, 66.2, 165, 18.5, "kopf g", b ? b.name : "Themenkarte") + txt(32.7 + dx, 90.9, 120, 14, "tags", "Themen-Specials"), y = 106.7;
  t.spec.forEach(function(n, k){ var s = sp.filter(function(x){ return x[0] === n; })[0], r = specZeilen(n, s && s[1]);
    h += lnk(33 + dx, y, 162, r * 26.4, "spec", '<b>' + esc(n) + '</b>' + (s ? '<small>' + esc(s[1]) + '</small>' : ""), 'data-act="obSpec" data-i="' + i + '" data-v="' + k + '" data-k="s' + i + '_' + k + '"'); y += r * 26.4; });
  if(b && t.spec.length < sp.length && y < 480) h += lnk(33 + dx, y, 162, 26.4, "spec neu", '<span class="ph">+ Special wählen</span>', 'data-act="obSpec" data-i="' + i + '" data-v="-1" data-k="s' + i + '_n"');
  return h;
}
/* ---------- Seite 4: Loadout ---------- */
function loadout(c){
  var h = "", A0 = [18.2, 395.1], B0 = [206.1, 583];
  [0, 1].forEach(function(n){
    var L = c.load[n], ax = A0[n] - 18.2, bx = B0[n] - 206.1;
    h += txt(26.4 + ax, 67.9, 90, 18.5, "kopf w", "Loadout-Thema", "font-size:calc(var(--pt)*13.5)") + txt(122 + ax, 71.6, 32, 10.7, "upg", "Upgrade ›", "justify-content:flex-end") + txt(214.3 + bx, 67.9, 120, 18.5, "kopf w", "Loadout-Thema");
    [[156.4, 168.3], [168.3, 181], [181, 194]].forEach(function(g, k){ h += lnk(g[0] + ax, 72.5, g[1] - g[0], 11.5, "trk h" + (L.upg >= k + 1 ? " on" : ""), "", 'data-act="obTick" data-p="load.' + n + '.upg" data-v="' + (k + 1) + '" data-tip="Upgrade ' + (k + 1) + '"'); });
    [[25.8 + ax, 124.2 + ax, 157.9 + ax], [213.7 + bx, 312.1 + bx, 345.8 + bx]].forEach(function(p){ h += txt(p[0], 94.5, 30, 14, "tags", "Tags") + txt(p[1] - 4, 96.4, 20, 9.8, "chip", "Makel") + txt(p[2] - 3, 96.8, 26, 9.8, "chip k", "Verbrennen"); });
    for(var r = 0; r < 21; r++){
      var x = L.tags[r], front = r < 14, top = front ? 112.9 + r * 28.5 : 115.9 + (r - 14) * 28.6, ox = front ? ax : bx + 188, path = "load." + n + ".tags." + r;
      h += inp(30 + ox, top + 2, 122, 20.5, path + ".a", x.a, "hand s" + (x.burn ? " burned" : ""));
      h += lnk(155.5 + ox, top + 5, 13, 13, "flaw" + (x.flaw ? " on" : ""), "", 'data-act="obToggle" data-p="' + path + '.flaw" data-tip="Makel"');
      if(x.a) h += lnk(175.5 + ox, top + 5.5, 13, 13, "burn" + (x.burn ? " on" : ""), "", 'data-act="obToggle" data-p="' + path + '.burn" data-tip="Verbrennen"');
    }
    h += txt(214.2 + bx, 317.5, 140, 14, "tags", "Loadout-Specials");
    for(var q = 0; q < 6; q++) h += inp(218 + bx, 336 + q * 26.1, 156, 21.5, "load." + n + ".spec." + q, L.spec[q] || "", "hand s");
  });
  return h;
}

/* ---------- Gesamter Bogen ---------- */
function render(c){
  ens(c);
  return '<div class="ob" id="miSheet">' + seite1(c) +
    seite(2, "Themenkarten (Vorne)", 25.3, 172, c.themes.map(function(t, i){ return themaVorn(c, t, i); }).join(""), 23) +
    seite(3, "Themenkarten (Hinten)", 25.3, 172, c.themes.map(function(t, i){ return themaHinten(c, t, i); }).join(""), 23) +
    seite(4, "Loadout-Themenkarte", 21.8, 170, loadout(c), 24) + '</div>';
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
