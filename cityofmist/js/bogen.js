/* City of Mist – Charakterbogen im Look des Original-Bogens (Charakterkarte, Team-/Zusatzthema, 4 Themenkarten vorn/hinten).
   Hintergrund: Original-Seiten ohne englische Beschriftung (img/bogen/seite-N.webp); Felder liegen exakt auf den Formularfeldern des Originals (CM_LAYOUT).
   Eingebunden über CFG.bogen in shared/mist-ersteller.js. */
(function(){
"use strict";
var A = MistErsteller.api, esc = A.esc, LT = "ABCDEFGHIJ".split(""), LY = window.CM_LAYOUT;
var TYP = {Mythos: {l: "Mythos", m: "Mysterium", f: "Verblassen"}, Logos: {l: "Logos", m: "Identität", f: "Bruch"}, Extra: {l: "Zusatzthema", m: "Mysterium oder Identität", f: "Verblassen / Bruch"}, Team: {l: "Team-Thema", m: "Identität", f: "Bruch"}};
var EVO = ["Eine weitere umfassende Stärke erhalten", "Zusätzliches Thema: Verbündete", "Zusätzliches Thema: Operationsbasis", "Zusätzliches Thema: Fahrzeug", "Mit einer Nemesis abschließen", "Eine Veränderung durchmachen", "Die Stadt verlassen", "Eine Grundlegende Aktion dauerhaft Mega! machen", "Eine Grundlegende Aktion dauerhaft Mega! machen", "Eine Grundlegende Aktion dauerhaft Mega! machen", "Durch den Nebel blicken"];
var CTX = null, MOD = null;

/* ---------- Daten ---------- */
function fit(a, n, f){ a = Array.isArray(a) ? a : []; while(a.length < n) a.push(f ? f(a.length) : ""); return a; }
function themaEns(t){ t.spec = t.spec || []; t.upg = t.upg || 0; t.dec = t.dec || 0; t.flip = fit(t.flip, 3); t.power = t.power || []; t.weak = t.weak || []; if(!t.typ && t.book){ var b = A.book(t.book); if(b) t.typ = b.typ; } }
function ens(c){
  c.spieler = c.spieler || ""; c.mythosT = fit(c.mythosT, 2); c.logosT = fit(c.logosT, 2);
  c.team = fit(c.team, 5, function(){ return {w: "", help: "", hurt: ""}; }); c.story = fit(c.story, 3);
  c.build = c.build || 0; c.evo = fit(c.evo, EVO.length, function(){ return false; }); c.nemesis = fit(c.nemesis, 9);
  if(!c.extra) c.extra = A.blankTheme(); themaEns(c.extra);
  c.themes.forEach(themaEns);
}
function typOf(t){ var b = t.book && A.book(t.book); return b ? b.typ : t.typ || ""; }
function pListe(t){ var b = A.book(t.book), a = b && b.power[0] ? b.power[0].l : "A"; return {kern: t.power.filter(function(x){ return x.l === a; })[0], rest: t.power.filter(function(x){ return x.l !== a; }), a: a}; }
function setPath(o, p, v){ var k = p.split("."); for(var i = 0; i < k.length - 1; i++) o = o[k[i]]; o[k[k.length - 1]] = v; }
function getPath(o, p){ p.split(".").forEach(function(k){ o = o == null ? o : o[k]; }); return o; }
function thema(c, i){ return i === "x" || i === -1 ? c.extra : c.themes[+i]; }
function themaName(t, i){ var b = t.book && A.book(t.book); return t.name || (b ? b.name : i === "x" ? "Team-/Zusatzthema" : "Thema " + (+i + 1)); }

/* ---------- Positionierung in PDF-Punkten (Seite 792 × 612 pt) ---------- */
function st(x, y, w, h, extra){ return 'style="left:' + (x / 7.92).toFixed(3) + '%;top:' + (y / 6.12).toFixed(3) + '%;width:' + (w / 7.92).toFixed(3) + '%;height:' + (h / 6.12).toFixed(3) + '%' + (extra ? ";" + extra : "") + '"'; }
function stR(r, extra){ return st(r[0], r[1], r[2], r[3], extra); }
function box(x, y, w, h, cls, inner, attr, extra){ return '<div class="' + cls + '" ' + st(x, y, w, h, extra) + (attr ? " " + attr : "") + '>' + (inner || "") + '</div>'; }
function lnkR(r, cls, inner, attr, extra){ return '<a class="' + cls + '" ' + stR(r, extra) + (attr ? " " + attr : "") + '>' + (inner || "") + '</a>'; }
function lab(x0, y0, x1, y1, cls, t, extra){ return box(x0, y0, x1 - x0, y1 - y0, "t " + cls, esc(t), "", extra); }
function inpR(r, path, val, cls, ph, extra){ return '<input class="o-in ' + (cls || "") + '" ' + stR(r, extra) + ' data-f="obP" data-p="' + path + '" value="' + esc(val) + '"' + (ph ? ' placeholder="' + esc(ph) + '"' : "") + '>'; }
function seite(n, titel, tRight, tTop, inhalt){ return '<section class="os-seite cm" style="background-image:url(img/bogen/seite-' + n + '.webp)">' + box(tRight - 300, tTop, 300, 25.5, "t titel", esc(titel), "", "justify-content:flex-end") + lab(31.4, 579.5, 260, 591.6, "copy", "© 2019 Son of Oak Game Studio / Amít Moshe") + inhalt + '</section>'; }
function punkte(rs, path, val, cls, tip){ return rs.map(function(r, k){ return lnkR(r, "trk " + (cls || "") + (val >= k + 1 ? " on" : ""), "", 'data-act="obTick" data-p="' + path + '" data-v="' + (k + 1) + '" data-tip="' + tip + ' ' + (k + 1) + '"'); }).join(""); }

/* ---------- Themenkarte vorn (auch Team-/Zusatzthema) ---------- */
/* L: Beschriftungspositionen der Karte: typ, att, fade, myst, pow, burn, weak, inv (je [x0,y0,x1,y1]) */
function themaVorn(c, t, i, K, L, extra){
  var b = t.book && A.book(t.book), y = typOf(t), pl = b ? pListe(t) : null, h = "", T = TYP[y] || null;
  h += lab(L.typ[0], L.typ[1], L.typ[2] + 6, L.typ[3], "kw", "Typ");
  /* Typ-Symbole im Kopf: Mythos (Blitz) / Logos (Maske) bzw. Zusatzthema (+) / Team */
  var ic = extra ? [["Extra", "Zusatzthema"], ["Team", "Team-Thema"]] : [["Mythos", "Mythos"], ["Logos", "Logos"]];
  var IC = extra ? [[111.3, 8.5], [128, 10.5]] : [[108, 8.5], [127.5, 8.5]];
  ic.forEach(function(k, n){ h += lnkR([K.type[0] + IC[n][0] - 7.5, K.type[1] + IC[n][1] - 7.5, 15, 15], "ty" + (y === k[0] ? " on t-" + k[0] : ""), "", 'data-act="obTyp" data-i="' + i + '" data-v="' + k[0] + '" data-tip="' + k[1] + '"'); });
  var typTxt = b ? b.name : y === "Team" ? "Team-Thema" : "Themenbuch wählen";
  h += lnkR([K.type[0], K.type[1] - (extra ? 4.5 : 1), K.type[2] - 12, K.type[3] + 1], "buch" + (b || y === "Team" ? "" : " leer"), esc(typTxt), 'data-act="obBuch" data-i="' + i + '" data-k="buch' + i + '"');
  if(b) h += lnkR([K.type[0] + K.type[2] - 9, K.type[1] + 1, 8, 8], "ii", "i", 'data-act="obBuchInfo" data-i="' + i + '" data-k="bi' + i + '" data-tip="Infos zum Themenbuch"');
  /* Titel */
  var tr = K.title, lw = Math.max.apply(null, String(t.name || "").split(/\s+/).map(function(w){ return w.length; }).concat([0])); h += '<textarea class="o-titel' + (lw > 13 ? " lang" : "") + '" ' + st(tr[0][0], tr[0][1], tr[0][2], tr[1][1] + tr[1][3] - tr[0][1]) + ' data-f="obP" data-p="' + (extra ? "extra" : "themes." + i) + '.name" rows="2" placeholder="Themen&#10;Titel">' + esc(t.name) + '</textarea>';
  /* Aufmerksamkeit / Verblassen-Bruch */
  h += lab(L.att[0], L.att[1], L.att[2], L.att[3], "klein", "Aufmerksamkeit") + box(L.fade[0], L.fade[1], L.fade[2] - L.fade[0] + 8, L.fade[3] - L.fade[1], "t klein", (y === "Logos" || y === "Team") ? '<span class="aus">Verblassen</span> / <span class="ein">Bruch</span>' : y === "Mythos" ? '<span class="ein">Verblassen</span> / <span class="aus">Bruch</span>' : "Verblassen / Bruch");
  var pfad = extra ? "extra" : "themes." + i;
  h += punkte(K.att, pfad + ".upg", t.upg, "att", "Aufmerksamkeit") + punkte(K.fade, pfad + ".dec", t.dec, "fade", T ? T.f : "Verblassen / Bruch");
  /* Mysterium / Identität */
  h += box(L.myst[0], L.myst[1], L.myst[2] - L.myst[0] + 10, L.myst[3] - L.myst[1], "t bar", y === "Mythos" ? '<span class="ein">Mysterium</span> / <span class="aus">Identität</span>' : (y === "Logos" || y === "Team") ? '<span class="aus">Mysterium</span> / <span class="ein">Identität</span>' : "Mysterium / Identität");
  var mr = K.myst; h += lnkR([mr[0][0], mr[0][1], mr[0][2], mr[1][1] + mr[1][3] - mr[0][1]], "o-mot" + (String(t.motiv || "").length > 50 ? " lang" : ""), esc(t.motiv), 'data-act="obMotiv" data-i="' + i + '" data-k="m' + i + '"');
  /* Stärken */
  h += lab(L.pow[0], L.pow[1], L.pow[2] + 10, L.pow[3], "bar", "Stärken") + lab(L.burn[0] - 8, L.burn[1], L.burn[2], L.burn[3], "klein r", "Verbrennen", "justify-content:flex-end");
  K.ptxt.forEach(function(r, s){
    var x = !pl ? (y === "Team" ? t.power[s] : null) : s === 0 ? pl.kern : pl.rest[s - 1], q = x && b && b.power.filter(function(z){ return z.l === x.l; })[0];
    if(x && x.l.length === 1) h += lnkR(K.plet[s], "let", esc(x.l), "");
    var ph = (b && s === 0 && !x) ? '<span class="ph">' + esc(b.power[0].q) + '</span>' : "";
    h += lnkR([r[0], r[1] - 2, r[2], r[3] + 3], "feld" + (x && x.burn ? " burned" : "") + (x && x.a.length > 20 ? " lang" : ""), x ? '<span>' + esc(x.a) + '</span>' : ph, 'data-act="obTag" data-i="' + i + '" data-art="power" data-s="' + s + '" data-k="p' + i + '_' + s + '"' + (q ? ' data-tip="' + esc(q.l + ": " + q.q) + '"' : ""));
    if(x && x.a) h += lnkR(K.burn[s], "burn" + (x.burn ? " on" : ""), "", 'data-act="obBurn" data-i="' + i + '" data-s="' + s + '" data-tip="' + (x.burn ? "Wieder aktivieren" : "Verbrennen") + '"');
  });
  /* Schwächen */
  h += lab(L.weak[0], L.weak[1], L.weak[2] + 10, L.weak[3], "bar", "Schwächen") + lab(L.inv[0] - 8, L.inv[1], L.inv[2], L.inv[3], "klein r", "Angewandt", "justify-content:flex-end");
  K.wtxt.forEach(function(r, w){
    var xw = b || y === "Team" ? t.weak[w] : null, qw = xw && b && b.weak.filter(function(z){ return z.l === xw.l; })[0];
    if(xw && xw.l.length === 1) h += lnkR(K.wlet[w], "let", esc(xw.l), "");
    h += lnkR([r[0], r[1] - 2, r[2], r[3] + 3], "feld" + (xw && xw.a.length > 20 ? " lang" : ""), xw ? '<span>' + esc(xw.a) + '</span>' : "", 'data-act="obTag" data-i="' + i + '" data-art="weak" data-s="' + w + '" data-k="w' + i + '_' + w + '"' + (qw ? ' data-tip="' + esc(qw.l + ": " + qw.q) + '"' : ""));
    if(xw && xw.a) h += lnkR(K.inv[w], "inv" + (xw.inv ? " on" : ""), "", 'data-act="obInv" data-i="' + i + '" data-s="' + w + '" data-tip="' + (xw.inv ? "Markierung lösen" : "Schwäche angewandt: Aufmerksamkeit markieren") + '"');
  });
  return h;
}
/* ---------- Rückseite: Verbesserungen + Kehrseite ---------- */
function impZeilen(d, w){ var z = 11 + Math.ceil(String(d || "").length / (w / 3.4)) * 7.6; return Math.max(1, Math.ceil((z + 3) / 21.2)); }
function verbesserungen(c, t, i, rows, extra){
  var b = t.book && A.book(t.book), imp = (b && b.imp) || [], h = "", r0 = rows[0], y = r0[1], end = rows[rows.length - 1][1] + rows[rows.length - 1][3], w = r0[2];
  t.spec.forEach(function(n, k){ var s = imp.filter(function(x){ return x[0] === n; })[0], zr = impZeilen(s && s[1], w), hh = Math.min(zr * 21.2, end - y);
    h += '<a class="spec" ' + st(r0[0], y, w, hh) + ' data-act="obSpec" data-i="' + i + '" data-v="' + k + '" data-k="s' + i + '_' + k + '"><b>' + esc(n) + '</b>' + (s ? '<small>' + esc(s[1]) + '</small>' : "") + '</a>'; y += zr * 21.2; });
  if(y < end - 15 && (b || t.typ === "Team")) h += '<a class="spec neu" ' + st(r0[0], y, w, 21.2) + ' data-act="obSpec" data-i="' + i + '" data-v="-1" data-k="s' + i + '_n"><span class="ph">' + (b && t.spec.length < imp.length ? "+ Verbesserung wählen" : "+ Verbesserung eintragen") + '</span></a>';
  return h;
}

/* ---------- Seiten ---------- */
var P2L = [
  {typ: [47, 95.6, 67.5, 101.7], att: [49.3, 190.1, 85, 195.4], fade: [97.2, 190.1, 143.1, 195.4], myst: [47.4, 205.4, 154.9, 217.2], pow: [49.5, 273.5, 115, 285.6], burn: [189.2, 275.3, 205, 280.2], weak: [50.6, 447.7, 135.9, 459.5], inv: [187.8, 454.5, 208.6, 459.5]},
  {typ: [227.4, 90.2, 247.5, 96.3], att: [228.6, 184.7, 264, 190.4], fade: [276.5, 184.7, 322, 190.4], myst: [226.3, 200.4, 333.9, 211.8], pow: [227.7, 268.4, 292.8, 280.2], burn: [367.1, 271.7, 382.8, 276.6], weak: [226.7, 442.7, 311.5, 454.5], inv: [363.5, 450.6, 383.9, 455.9]},
  {typ: [416, 83, 436.5, 89.4], att: [413.6, 178.3, 449, 185.5], fade: [461.5, 178.3, 507, 185.5], myst: [410.6, 193.2, 517.5, 207.3], pow: [409.5, 261.2, 475, 275.2], burn: [549.2, 269.1, 565, 274.5], weak: [402.7, 435.1, 487.6, 449.4], inv: [539.5, 448.1, 559.9, 453.4]},
  {typ: [591, 88.4, 611.1, 94.5], att: [592.2, 183.4, 627.5, 188.5], fade: [639.7, 183.4, 685.6, 188.5], myst: [589.9, 198.6, 697.5, 210.4], pow: [591, 266.6, 656.4, 278.4], burn: [730.7, 269.9, 746.4, 274.8], weak: [590.3, 440.9, 675.1, 452.7], inv: [727.1, 449.1, 747.9, 454.1]}];
var P1X = {typ: [411, 98.3, 434, 107.2], att: [410.5, 193.8, 449, 201.5], fade: [460, 193.8, 506, 201.5], myst: [409.3, 211.2, 516, 224], pow: [409.3, 279.2, 474.3, 291.7], burn: [548.5, 284.6, 564.3, 289.6], weak: [405.2, 453.5, 489.7, 466.3], inv: [542, 463.9, 562.8, 468.9]};
var P3K = [[48.5, 90.5, 100, 99.3, 52.1, 123, 135.5, 135.1, 55.3, 432.6, 99.9, 444], [229.9, 92.5, 281, 101.3, 232.5, 123.9, 316.5, 136.6, 232.1, 434.4, 276.6, 445.8], [415.5, 85.9, 467, 94.1, 417.1, 118.5, 500.5, 130.7, 405.6, 426.8, 450.1, 439.7], [589.9, 90.5, 638.5, 99.3, 590.5, 122.5, 673.5, 135.3, 589.5, 432.6, 634.1, 444]];
var EVO_Y = [153.7, 167, 180.7, 194, 208.1, 221.8, 235.1, 248.4, 262.1, 275.4, 289.4];
function seite1(c){
  var P = LY.p1, h = "";
  h += lab(46, 92, 140, 104, "kw", "Charakterkarte") + lab(227.8, 90.5, 320, 99.5, "kw", "Charakterkarte");
  h += '<textarea class="o-name" ' + st(P.name[0][0], P.name[0][1] - 2, P.name[0][2], P.name[1][1] + P.name[1][3] - P.name[0][1] + 2) + ' data-f="cname" rows="2" placeholder="Charakter&#10;Name">' + esc(c.name) + '</textarea>';
  h += lab(49, 175, 92, 185, "bar", "Spieler:in") + inpR(P.spieler, "spieler", c.spieler, "lbl");
  h += lab(49, 194.8, 110, 205.2, "bar", "Mythos") + P.mythos.map(function(r, k){ return inpR(r, "mythosT." + k, c.mythosT[k]); }).join("");
  h += lab(49, 260.6, 110, 271.1, "bar", "Logos") + P.logos.map(function(r, k){ return inpR(r, "logosT." + k, c.logosT[k]); }).join("");
  h += lab(49, 326, 100, 338, "bar", "Team") + lab(149, 327.2, 176, 337, "duenn", "Freund", "justify-content:center") + lab(177, 327.6, 205, 337.3, "duenn", "Feind", "justify-content:center");
  P.crew.forEach(function(r, k){ h += inpR(r.w, "team." + k + ".w", c.team[k].w, "s") + inpR(r.help, "team." + k + ".help", c.team[k].help, "s z") + inpR(r.hurt, "team." + k + ".hurt", c.team[k].hurt, "s z"); });
  h += lab(46.4, 451.4, 130, 468, "bar", "Story-Tags") + P.story.map(function(r, k){ return inpR(r, "story." + k, c.story[k], "s"); }).join("");
  /* Rückseite der Charakterkarte */
  h += lab(227.8, 116, 278, 127, "bar", "Aufbau") + punkte(P.build, "build", c.build, "kreis", "Aufbaupunkt");
  h += lab(235.8, 138.5, 360, 146, "fett", "Entwicklungssprünge");
  P.evo.forEach(function(r, k){ h += '<a class="evo' + (c.evo[k] ? " on" : "") + '" ' + st(r[0] - 1, EVO_Y[k] - 1.5, 168, 10) + ' data-act="obToggle" data-p="evo.' + k + '"><i></i><span>' + esc(EVO[k]).replace("Mega!", "<em>Mega!</em>") + '</span></a>'; });
  h += lab(229, 311.5, 300, 323, "bar", "Nemesis") + P.nemesis.map(function(r, k){ return inpR(r, "nemesis." + k, c.nemesis[k], "s"); }).join("");
  /* Team-/Zusatzthema */
  h += themaVorn(c, c.extra, "x", P.extra, P1X, true);
  h += lab(587.8, 101.6, 720, 110.5, "kw", "Team- oder Zusatzthema") + lab(590.5, 121.2, 690, 134, "bar", "Verbesserungen");
  h += verbesserungen(c, c.extra, "x", P.extraImp, true);
  return seite(1, "Charakterbogen", 749.4, 31.2, h);
}
function seite2(c){ return seite(2, "Themenkarten (Vorderseite)", 748.9, 25.7, c.themes.map(function(t, i){ return themaVorn(c, t, i, LY.p2[i], P2L[i], false); }).join("")); }
function seite3(c){
  return seite(3, "Themenkarten (Rückseite)", 757.4, 25.7, c.themes.map(function(t, i){
    var K = P3K[i], b = t.book && A.book(t.book), P = LY.p3[i];
    return lab(K[0], K[1], K[2] + 40, K[3], "kw", b ? b.name : "Themenkarte") + lab(K[4], K[5], K[6] + 10, K[7], "bar", "Verbesserungen") + lab(K[8], K[9], K[10] + 10, K[11], "bar", "Kehrseite") +
      verbesserungen(c, t, i, P.imp, false) + P.flip.map(function(r, k){ return inpR(r, "themes." + i + ".flip." + k, t.flip[k], "s"); }).join("");
  }).join(""));
}
function render(c){ ens(c); return '<div class="ob" id="miSheet">' + seite1(c) + seite2(c) + seite3(c) + '</div>'; }

/* ---------- Panels: Fragen, Mysterium/Identität ---------- */
function anc(el){ return el && el.isConnected ? el : el && el.dataset.k ? document.querySelector('[data-k="' + el.dataset.k + '"]') || document.body : document.body; }
function aufraeumen(){
  var c = A.cur(); if(!c) return;
  [c.extra].concat(c.themes).forEach(function(t){ t.power = t.power.filter(function(x){ return x.a && x.a.trim(); }); t.weak = t.weak.filter(function(x){ return x.a && x.a.trim(); }); });
  var nach = CTX && CTX.danach; CTX = null; A.rerender(); if(nach) setTimeout(nach, 40);
}
function eintrag(c){ var t = thema(c, CTX.i); return t[CTX.art].filter(function(x){ return x.l === CTX.l; })[0]; }
function kitTags(b, art, l){ var q = b && b[art].filter(function(z){ return z.l === l; })[0]; return (q && q.tags) || []; }
function frageListe(c){
  var t = thema(c, CTX.i), b = A.book(t.book), used = t[CTX.art].map(function(x){ return x.l; }), Q = b ? b[CTX.art].filter(function(q){ return used.indexOf(q.l) < 0 && !(CTX.art === "power" && q.l === b.power[0].l); }) : [];
  return '<div class="ob-pk">' + (CTX.art === "power" ? "Stärke" : "Schwäche") + ' · Frage wählen</div><div class="ob-ql">' +
    Q.map(function(q){ var ex = (q.tags || []).slice(0, 3); return '<a data-act="obQ" data-v="' + esc(q.l) + '"><i>' + esc(q.l) + '</i><span>' + esc(q.q) + (ex.length ? '<small>z. B. ' + ex.map(esc).join(" · ") + '</small>' : "") + '</span></a>'; }).join("") +
    '<a data-act="obQ" data-v="+' + Date.now().toString(36) + '"><i>+</i><span>Freie ' + (CTX.art === "power" ? "Stärke" : "Schwäche") + ' ohne Frage</span></a></div>';
}
function antwort(c){
  var t = thema(c, CTX.i), b = t.book && A.book(t.book), q = b && b[CTX.art].filter(function(z){ return z.l === CTX.l; })[0], x = eintrag(c), ex = kitTags(b, CTX.art, CTX.l), kern = CTX.art === "power" && CTX.s === 0 && b;
  return '<div class="ob-pk">' + (CTX.art === "power" ? "Stärke" : "Schwäche") + (q ? " · Frage " + esc(q.l) + (kern ? " (Pflicht)" : "") : " · frei") + '</div>' + (q ? '<div class="ob-pq">' + esc(q.q) + '</div>' : "") +
    '<input class="ob-pin" data-f="obAns" value="' + esc(x ? x.a : "") + '" placeholder="Antwort als kurzer Tag …" autocomplete="off">' +
    (ex.length ? '<div class="ob-pex">' + ex.map(function(v){ return '<a data-act="obEx" data-v="' + esc(v) + '">' + esc(v) + '</a>'; }).join("") + '</div>' : "") +
    '<div class="ob-pa">' + (kern || !b ? "" : '<a data-act="obAndere">Andere Frage</a>') + (x ? '<a data-act="obWeg">Entfernen</a>' : "") + '<a class="ok" data-act="obFertig">Fertig</a></div>';
}
function panelZeigen(anchor, html){ A.panel(anchor, html, aufraeumen, "ob-panel"); }
function panelNeu(html){ var p = document.querySelector(".ob-panel"); if(!p) return; p.innerHTML = html; var f = p.querySelector("input,textarea"); if(f){ f.focus(); f.setSelectionRange && f.setSelectionRange(f.value.length, f.value.length); } }
function tagOeffnen(c, i, art, s, danach){
  var t = thema(c, i), b = t.book && A.book(t.book), x;
  if(art === "power"){ if(b){ var pl = pListe(t); x = s === 0 ? pl.kern : pl.rest[s - 1]; } else x = t.power[s]; } else x = t.weak[s];
  CTX = {i: i, art: art, s: s, l: x ? x.l : null, danach: danach};
  if(!b){ if(!CTX.l) CTX.l = "+" + Date.now().toString(36); }
  else if(art === "power" && s === 0) CTX.l = b.power[0].l;
  var e = document.querySelector('[data-k="' + (art === "power" ? "p" : "w") + i + '_' + s + '"]');
  if(e) e.scrollIntoView({block: "center"});
  panelZeigen(e || document.body, CTX.l ? antwort(c) : frageListe(c));
}
function buchListe(c, i, anchor){
  var t = thema(c, i), y = typOf(t), cfg = A.cfg(), extra = i === "x", items = [];
  cfg.books.filter(function(b){ return extra ? b.typ === "Extra" : b.typ !== "Extra"; }).forEach(function(b){ items.push({n: b.name, s: b.src || "", g: b.grp || TYP[b.typ].l, info: A.bookInfo(b), id: b.id}); });
  if(extra) items.unshift({n: "Team-Thema (frei)", s: "", g: "Team", id: "", team: 1, info: "<h4>Team-Thema</h4><p>Das gemeinsame Thema eurer Crew. Stärken, Schwächen und Identität tragt ihr frei ein (S. 247).</p>"});
  A.popOpen(anchor, items, function(it){
    var voll = t.power.length || t.weak.length || t.motiv;
    if(voll && !confirm("Thema neu belegen? Die bisherigen Stärken und Schwächen gehen verloren.")) return;
    var nt = A.blankTheme(); nt.book = it.id || ""; nt.typ = it.team ? "Team" : A.book(it.id).typ; nt.spec = []; nt.upg = t.upg; nt.dec = t.dec; nt.neu = t.neu; nt.name = t.name; nt.flip = t.flip;
    Object.keys(t).forEach(function(k){ delete t[k]; }); Object.assign(t, nt); A.rerender();
  }, {auf: y && TYP[y] ? (extra ? null : TYP[y].l) : null});
}

/* ---------- Dialoge (Aufmerksamkeit / Verblassen-Bruch / Aufbau voll) ---------- */
function modalZu(){ var m = document.querySelector(".ob-modal"); if(m) m.remove(); MOD = null; }
function modal(titel, text, opts, ctx, ohneSpaeter){
  modalZu(); MOD = ctx;
  var d = document.createElement("div"); d.className = "ob-modal noprint";
  d.innerHTML = '<div class="ob-mbox"><h3>' + esc(titel) + '</h3>' + text.map(function(t){ return '<p>' + t + '</p>'; }).join("") + '<div class="ob-mopts">' +
    opts.map(function(o){ return '<a class="ob-mopt' + (o.off ? " off" : "") + (o.haupt ? " haupt" : "") + '"' + (o.off ? "" : ' data-act="obMod" data-v="' + esc(o.id) + '"') + '><b>' + esc(o.l) + '</b>' + (o.s ? '<small>' + esc(o.s) + '</small>' : "") + '</a>'; }).join("") +
    '</div>' + (ohneSpaeter ? "" : '<div class="ob-mfuss"><a data-act="obModX">Später</a></div>') + '</div>';
  document.body.appendChild(d);
}
function verbesserungDialog(c, i, zweite){
  var t = thema(c, i), b = t.book && A.book(t.book), imp = (b && b.imp) || [], nW = t.weak.length, nP = t.power.length, maxP = (i === "x" ? LY.p1.extra : LY.p2[0]).ptxt.length;
  modal((zweite ? "Weitere Verbesserung: " : "Verbesserung: ") + themaName(t, i), [zweite ? "Du hast eine Schwäche entfernt oder umgeschrieben. Wähle dazu noch eine weitere Verbesserung (S. 245):" : "Die Aufmerksamkeitsleiste ist voll. Sie wird zurückgesetzt, und du wählst eine Verbesserung für dieses Thema (S. 244):"], [
    {id: "p", l: "Eine neue Stärke", s: "Beantworte eine weitere Frage des Themenbuchs.", off: nP >= maxP},
    {id: "wa", l: "Eine Schwäche hinzufügen", s: "Beantworte eine weitere Schwächen-Frage.", off: nW >= 3},
    {id: "we", l: "Eine Schwäche entfernen", s: "Nur bei zwei oder mehr Schwächen. Danach wählst du noch eine Verbesserung.", off: nW < 2 || zweite},
    {id: "wu", l: "Eine Schwäche umschreiben", s: "Schwäche ersetzen. Danach wählst du noch eine Verbesserung.", off: !nW || zweite},
    {id: "v", l: "Eine Themenverbesserung", s: b ? "Aus der Liste des Themenbuchs, jede nur einmal." : "Frei eintragen.", off: b && t.spec.length >= imp.length},
    {id: "f", l: (TYP[typOf(t)] ? TYP[typOf(t)].f : "Verblassen / Bruch") + " zurücksetzen", s: "Löscht alle Markierungen dieser Leiste.", off: !t.dec}
  ], {art: "verb", i: i}, zweite);
}
function schwaecheWahl(c, i, wozu){
  var t = thema(c, i);
  if(t.weak.length === 1){ schwaecheAktion(c, i, 0, wozu); return; }
  modal(wozu === "we" ? "Welche Schwäche entfernen?" : "Welche Schwäche umschreiben?", [], t.weak.map(function(x, k){ return {id: "w" + k, l: x.a, s: x.l.length === 1 ? "Frage " + x.l : ""}; }), {art: "wwahl", i: i, wozu: wozu}, true);
}
function schwaecheAktion(c, i, k, wozu){
  var t = thema(c, i); t.weak.splice(k, 1); A.rerender();
  if(wozu === "we") verbesserungDialog(c, i, true);
  else tagOeffnen(c, i, "weak", t.weak.length, function(){ verbesserungDialog(A.cur(), i, true); });
}
function entwicklungssprung(c, rest){
  modal("Entwicklungssprung!", ["Fünf Aufbaupunkte: Die Leiste wird zurückgesetzt, und dein Charakter macht einen Entwicklungssprung (S. 267). Wähle einen, jeder geht nur einmal:"],
    EVO.map(function(t, k){ return {id: "e" + k, l: t, off: c.evo[k]}; }).filter(function(o, k){ return !(k >= 8 && k <= 9 && !c.evo[7]) && !(k === 9 && !c.evo[8]); }), {art: "evo", rest: rest || 0}, true);
}
function aufbauGeben(c, n){
  c.build += n; var spruenge = 0; while(c.build >= 5){ c.build -= 5; spruenge++; } A.rerender();
  if(spruenge) entwicklungssprung(c, spruenge - 1);
}
function voll(c, path, alt){
  var m = /^(themes\.(\d)|extra)\.(upg|dec)$/.exec(path);
  if(path === "build"){ c.build = 0; A.rerender(); entwicklungssprung(c, 0); return; }
  if(!m) return;
  var i = m[2] != null ? +m[2] : "x", t = thema(c, i), y = typOf(t), feld = m[3];
  if(feld === "upg"){
    if(t.neu){ modal("Neu entstehendes Thema: " + themaName(t, i), ["Die Aufmerksamkeitsleiste dieses neu entstehenden Themas ist zum ersten Mal voll: Du erhältst eine weitere neue Stärke und setzt die Leiste zurück. Ab jetzt ist es ein Standardthema (S. 265)."], [{id: "neu3", l: "Neue Stärke wählen", haupt: 1}], {art: "neu3", i: i}); return; }
    verbesserungDialog(c, i, false); return;
  }
  /* Verblassen / Bruch voll */
  if(i === "x"){
    modal("Team-Thema verloren", ["Die Leiste ist voll: Das Thema wird ersetzt und die Karte abgelegt (S. 265). Ist es euer letztes Team-Thema, zerfällt das Team. Jedes Teammitglied erhält Freund- und Feindpunkte: einen pro Stärke oder Schwäche über die dritte hinaus und einen pro Verbesserung. Verteile sie bei „Team“ auf der Charakterkarte."], [{id: "xweg", l: "Karte ablegen", haupt: 1}], {art: "xweg"}); return;
  }
  var pts = Math.max(0, t.power.length + t.weak.length - 3) + t.spec.length, neuTyp = y === "Mythos" ? "Logos" : "Mythos";
  var andere = c.themes.filter(function(x, k){ return k !== i && typOf(x) === y; }).length;
  var txt = ["Alle drei Kästchen " + (y === "Mythos" ? "Verblassen" : "Bruch") + " sind markiert: Du verlierst dieses Thema und legst die Karte ab (S. 261). Dafür erhältst du:",
    "• <b>" + pts + " Aufbaupunkt" + (pts === 1 ? "" : "e") + "</b> (einen pro Stärke oder Schwäche über die dritte hinaus und einen pro Themenverbesserung)<br>• eine <b>neue Nemesis</b>, die die SL später enthüllt<br>• ein <b>neu entstehendes " + neuTyp + "-Thema</b> mit nur einer Stärke (Frage A)"];
  if(!andere) txt.push(y === "Mythos" ? "Das war dein letztes Mythos-Thema: Du wirst zur <b>Schläfer:in</b>." : "Das war dein letztes Logos-Thema: Du wirst zum <b>Avatar</b>.");
  modal("Thema verloren: " + themaName(t, i), txt, [{id: "ersetzen", l: "Thema ersetzen", s: "Neues " + neuTyp + "-Themenbuch wählen", haupt: 1}], {art: "ersetzen", i: i, pts: pts, neuTyp: neuTyp});
}
function modalWahl(c, v){
  var X = MOD; modalZu(); if(!X) return;
  if(X.art === "verb"){
    var i = X.i, t = thema(c, i); t.upg = 0;
    if(v === "f"){ t.dec = 0; A.rerender(); }
    else if(v === "p"){ A.rerender(); tagOeffnen(A.cur(), i, "power", Math.min(6, t.power.length)); }
    else if(v === "wa"){ A.rerender(); tagOeffnen(A.cur(), i, "weak", Math.min(2, t.weak.length)); }
    else if(v === "we" || v === "wu"){ A.rerender(); schwaecheWahl(A.cur(), i, v); }
    else if(v === "v"){ A.rerender(); setTimeout(function(){ var e = document.querySelector('[data-k="s' + i + '_n"]'); if(e){ e.scrollIntoView({block: "center"}); setTimeout(function(){ e.click(); }, 60); } }, 30); }
  }
  else if(X.art === "wwahl") schwaecheAktion(c, X.i, +v.slice(1), X.wozu);
  else if(X.art === "neu3"){ var t3 = thema(c, X.i); t3.upg = 0; t3.neu = 0; A.rerender(); tagOeffnen(A.cur(), X.i, "power", Math.min(6, t3.power.length)); }
  else if(X.art === "neu1") tagOeffnen(c, X.i, "power", Math.min(6, thema(c, X.i).power.length));
  else if(X.art === "xweg"){ c.extra = null; A.rerender(); }
  else if(X.art === "ersetzen"){
    var alt = c.themes[X.i], name = themaName(alt, X.i), nt = A.blankTheme(); nt.typ = X.neuTyp; nt.neu = 1; nt.spec = []; nt.upg = 0; nt.dec = 0;
    Object.keys(alt).forEach(function(k){ delete alt[k]; }); Object.assign(alt, nt); themaEns(alt);
    var frei = c.nemesis.indexOf(""); if(frei < 0){ c.nemesis.push(""); frei = c.nemesis.length - 1; } c.nemesis[frei] = "Nemesis aus „" + name + "“ (SL enthüllt)";
    var weiter = function(){ setTimeout(function(){ var e = document.querySelector('[data-k="buch' + X.i + '"]'); if(e){ e.scrollIntoView({block: "center"}); setTimeout(function(){ e.click(); }, 60); } }, 40); };
    c.build += X.pts; var sp = 0; while(c.build >= 5){ c.build -= 5; sp++; } A.rerender();
    if(sp){ MOD_NACH = weiter; entwicklungssprung(A.cur(), sp - 1); } else weiter();
  }
  else if(X.art === "evo"){
    c.evo[+v.slice(1)] = true; A.rerender();
    if(X.rest > 0) entwicklungssprung(A.cur(), X.rest - 1); else if(MOD_NACH){ var f = MOD_NACH; MOD_NACH = null; f(); }
  }
}
var MOD_NACH = null;
document.addEventListener("keydown", function(e){ if(e.key === "Escape" && MOD && MOD.art !== "evo" && MOD.art !== "wwahl") modalZu(); if(e.key === "Enter" && e.target.dataset && e.target.dataset.f === "obAns"){ e.preventDefault(); A.popClose(); } });

/* ---------- Klicks / Eingaben ---------- */
function setAns(c, v){
  var t = thema(c, CTX.i), L = t[CTX.art], x = eintrag(c);
  if(x) x.a = v; else { if(CTX.art === "power" && CTX.s === 0 && t.book) L.unshift({l: CTX.l, a: v}); else L.push({l: CTX.l, a: v}); }
}
function click(act, el, c, e){
  if(act.indexOf("ob") !== 0) return false;
  var i = el.dataset.i === "x" ? "x" : +el.dataset.i, t = el.dataset.i != null ? thema(c, i) : null;
  if(act === "obToggle"){ setPath(c, el.dataset.p, !getPath(c, el.dataset.p)); A.rerender(); }
  else if(act === "obTick"){
    var v = +el.dataset.v, cur = getPath(c, el.dataset.p) || 0, n = el.dataset.p === "build" ? 5 : 3;
    if(v === cur) setPath(c, el.dataset.p, v - 1); else if(v === cur + 1) setPath(c, el.dataset.p, v); else { A.toast(v > cur ? "Erst Kästchen " + (cur + 1) + " markieren" : "Erst Kästchen " + cur + " lösen"); return true; }
    A.rerender();
    var mt = /^(themes\.(\d)|extra)\.upg$/.exec(el.dataset.p), tt = mt && thema(c, mt[2] != null ? +mt[2] : "x");
    if(tt && tt.neu && v === 1 && cur === 0 && !tt.neu1){ tt.neu1 = 1; A.save(); modal("Neu entstehendes Thema", ["Erste Aufmerksamkeit bei einem neu entstehenden Thema: Du erhältst sofort eine neue Stärke. Die Aufmerksamkeit bleibt markiert (S. 265)."], [{id: "neu1", l: "Neue Stärke wählen", haupt: 1}], {art: "neu1", i: mt[2] != null ? +mt[2] : "x"}); }
    else if(v === n && cur === n - 1) voll(c, el.dataset.p);
  }
  else if(act === "obMod") modalWahl(c, el.dataset.v);
  else if(act === "obModX") modalZu();
  else if(act === "obTyp"){
    var b = t.book && A.book(t.book), neu = el.dataset.v;
    if(b && b.typ !== neu || (!b && t.typ === "Team" && neu !== "Team" && (t.power.length || t.weak.length))){ if((t.power.length || t.weak.length) && !confirm("Typ wechseln? Das Themenbuch und seine Stärken und Schwächen werden entfernt.")) return true; var nt = A.blankTheme(); nt.typ = neu; nt.spec = []; nt.name = t.name; Object.keys(t).forEach(function(k){ delete t[k]; }); Object.assign(t, nt); }
    else t.typ = neu;
    A.rerender(); if(!t.book && neu !== "Team") buchListe(c, i, document.querySelector('[data-k="buch' + i + '"]'));
  }
  else if(act === "obBuch") buchListe(c, i, anc(el));
  else if(act === "obBuchInfo"){ var bb = A.book(t.book); A.panel(anc(el), '<div class="ob-binfo">' + A.bookInfo(bb) + (bb.why ? '<p><b>' + esc(bb.why.q) + '</b></p><ul>' + bb.why.opts.map(function(o){ return '<li>' + esc(o) + '</li>'; }).join("") + '</ul>' : "") + '</div>', null, "ob-panel breit"); }
  else if(act === "obTag"){
    if(!t.book && t.typ !== "Team"){ buchListe(c, i, document.querySelector('[data-k="buch' + i + '"]')); return true; }
    tagOeffnen(c, i, el.dataset.art, +el.dataset.s);
  }
  else if(act === "obQ"){ CTX.l = el.dataset.v; panelNeu(antwort(c)); }
  else if(act === "obAndere"){ var x2 = eintrag(c); if(x2) thema(c, CTX.i)[CTX.art] = thema(c, CTX.i)[CTX.art].filter(function(y){ return y !== x2; }); CTX.l = null; panelNeu(frageListe(c)); }
  else if(act === "obWeg"){ var x3 = eintrag(c); if(x3) x3.a = ""; A.popClose(); }
  else if(act === "obEx"){ setAns(c, el.dataset.v); A.popClose(); }
  else if(act === "obFertig") A.popClose();
  else if(act === "obBurn"){ var pl = t.book ? pListe(t) : null, s = +el.dataset.s, x4 = pl ? (s === 0 ? pl.kern : pl.rest[s - 1]) : t.power[s]; if(x4 && x4.a){ x4.burn = !x4.burn; A.rerender(); } }
  else if(act === "obInv"){
    var xw = t.weak[+el.dataset.s]; if(!xw) return true; xw.inv = !xw.inv;
    if(xw.inv){ var vor = t.upg || 0; if(vor < 3){ t.upg = vor + 1; A.rerender(); A.toast("Aufmerksamkeit markiert"); if(t.upg === 3) voll(c, (i === "x" ? "extra" : "themes." + i) + ".upg"); else if(t.neu && vor === 0 && !t.neu1){ t.neu1 = 1; A.save(); modal("Neu entstehendes Thema", ["Erste Aufmerksamkeit bei einem neu entstehenden Thema: Du erhältst sofort eine neue Stärke. Die Aufmerksamkeit bleibt markiert (S. 265)."], [{id: "neu1", l: "Neue Stärke wählen", haupt: 1}], {art: "neu1", i: i}); } return true; } }
    A.rerender();
  }
  else if(act === "obMotiv"){
    if(!t.book && t.typ !== "Team"){ buchListe(c, i, document.querySelector('[data-k="buch' + i + '"]')); return true; }
    var b4 = t.book && A.book(t.book), y4 = typOf(t), lbl = TYP[y4] ? TYP[y4].m : "Mysterium / Identität"; CTX = {i: i, motiv: 1};
    panelZeigen(anc(el), '<div class="ob-pk">' + esc(lbl) + '</div><textarea class="ob-pin" data-f="obMot" rows="3" placeholder="' + esc(lbl) + ' …">' + esc(t.motiv) + '</textarea>' +
      (b4 && (b4.motivEx || []).length ? '<div class="ob-pex ob-mex">' + b4.motivEx.map(function(m){ return '<a data-act="obMex" data-v="' + esc(m[1]) + '">' + (m[0] ? '<small>' + esc(m[0]) + '</small>' : "") + esc(m[1]) + '</a>'; }).join("") + '</div>' : "") +
      (b4 && b4.motivNote ? '<p class="ob-pn">' + esc(b4.motivNote) + '</p>' : "") + '<div class="ob-pa"><a class="ok" data-act="obFertig">Fertig</a></div>');
  }
  else if(act === "obMex"){ thema(c, CTX.i).motiv = el.dataset.v; A.popClose(); }
  else if(act === "obSpec"){
    var b5 = t.book && A.book(t.book), k = +el.dataset.v, sp = (b5 && b5.imp) || [];
    if(!b5){ var frei = prompt("Verbesserung eintragen", k >= 0 ? t.spec[k] : ""); if(frei != null){ if(k >= 0){ if(frei.trim()) t.spec[k] = frei.trim(); else t.spec.splice(k, 1); } else if(frei.trim()) t.spec.push(frei.trim()); A.rerender(); } return true; }
    var items = sp.filter(function(x){ return t.spec.indexOf(x[0]) < 0 || t.spec[k] === x[0]; }).map(function(x){ return {n: x[0], s: "", g: "Verbesserungen · " + b5.name, info: '<h4>' + esc(x[0]) + '</h4><p>' + esc(x[1]) + '</p>', id: x[0]}; });
    if(k >= 0) items.unshift({n: "Verbesserung entfernen", s: "", g: "Verbesserungen · " + b5.name, id: ""});
    A.popOpen(anc(el), items, function(it){ if(k >= 0){ if(it.id) t.spec[k] = it.id; else t.spec.splice(k, 1); } else t.spec.push(it.id); A.rerender(); }, {offen: 1});
  }
  else return false;
  return true;
}
function input(f, el, c){
  if(f === "obP"){ setPath(c, el.dataset.p, el.value); A.save(); return true; }
  if(f === "obAns" && CTX){ setAns(c, el.value); A.save(); return true; }
  if(f === "obMot" && CTX){ thema(c, CTX.i).motiv = el.value; A.save(); return true; }
  return false;
}
window.CM_BOGEN = {render: render, click: click, input: input};
})();
