/* Legend in the Mist – Charakterbogen im Look des Original-Bogens (Hero Card, Backpack, Fellowship Theme Card, 4 Theme Cards vorn/hinten).
   Hintergrund: Original-Seiten ohne Beschriftung (img/bogen/seite-N.webp); Felder liegen exakt auf den Formularfeldern des Originals (LM_LAYOUT).
   Eingebunden über CFG.bogen in shared/mist-ersteller.js. */
(function(){
"use strict";
var A = MistErsteller.api, esc = A.esc, LY = window.LM_LAYOUT, LT = "ABCDEFGHIJ".split("");
var MIGHT = {origin: "Origin", adventure: "Adventure", greatness: "Greatness"};
var CTX = null, MOD = null, MOD_NACH = null;
var FS = {inv: LY.p1.f_inv, title: LY.p1.f_title, power: LY.p1.f_power, weak: LY.p1.f_weak, quest: LY.p1.f_quest, burn: LY.p1.f_burn, pips: LY.p1.f_pips, spec: LY.p1.f_spec};
var FULFIL = [
  ["Am Ende der Reise ankommen", "Arrive at Journey's End – dein Hero lässt sich nieder oder zieht sich aus der Welt zurück (Ruhestand)."],
  ["Neu geschmiedet werden", "Be Reforged – alle Themes werden ersetzt, du erschaffst vier neue."],
  ["Eine Quintessence erlangen", "Gain a Quintessence – eine dauerhafte, einzigartige Kraft."],
  ["Die Grundfesten der Magie erschüttern", "Shake the Foundations of Magic – neue Magie."],
  ["Ewige Worte sprechen", "Speak Words Eternal – eine Verzauberung."],
  ["Verlorene Wahrheiten ausgraben", "Unearth Lost Truths – eine Entdeckung."]
];

/* ---------- Daten ---------- */
function fit(a, n, f){ a = Array.isArray(a) ? a : []; while(a.length < n) a.push(f ? f(a.length) : ""); return a; }
function mightOfBook(b){ var m = b && String(b.typ).toLowerCase(); return MIGHT[m] ? m : ""; }
function themaEns(t, fs){
  t.spec = t.spec || []; t.aband = t.aband || 0; t.impr = t.impr || 0; t.mile = t.mile || 0; t.neu = t.neu || 0;
  t.power = (t.power || []).filter(function(x){ return x; }); t.weak = (t.weak || []).filter(function(x){ return x; });
  if(fs) t.book = "fellowship";
  var ia = -1; t.power.forEach(function(x, k){ if(x.l === "A" && ia < 0) ia = k; });
  if(ia >= 0){ var x = t.power.splice(ia, 1)[0]; if(!t.name) t.name = x.a; if(x.burn) t.tburn = 1; }
  if(!fs && !t.might && t.book){ var b = A.book(t.book); t.might = mightOfBook(b) || ""; }
}
function ens(c){
  c.spieler = c.spieler || ""; c.rel = fit(c.rel, 5, function(){ return {w: "", t: ""}; }); c.rel.forEach(function(r){ r.w = r.w || ""; r.t = r.t || ""; });
  c.promise = c.promise || 0; c.quint = fit(c.quint, 4); c.pack = fit(c.pack, 10); c.notes = fit(c.notes, 4);
  if(!c.extra) c.extra = A.blankTheme(); themaEns(c.extra, true);
  c.themes.forEach(function(t){ themaEns(t, false); });
}
function nichtLeer(c){ return !!(c.promise || (c.quint || []).some(Boolean) || (c.pack || []).some(Boolean) || (c.notes || []).some(Boolean) || (c.extra && (c.extra.name || (c.extra.power || []).length || (c.extra.weak || []).length || c.extra.motiv)) || c.themes.some(function(t){ return t.name || (t.power || []).length || (t.weak || []).length || t.motiv; })); }
function setPath(o, p, v){ var k = p.split("."); for(var i = 0; i < k.length - 1; i++) o = o[k[i]]; o[k[k.length - 1]] = v; }
function getPath(o, p){ p.split(".").forEach(function(k){ o = o == null ? o : o[k]; }); return o; }
function thema(c, i){ return i === "x" ? c.extra : c.themes[+i]; }
function pfad(i){ return i === "x" ? "extra" : "themes." + i; }
function themaName(t, i){ return t.name || (i === "x" ? "Fellowship-Theme" : "Theme " + (+i + 1)); }
function lv(s, a, b, c){ var n = String(s || "").length; return n > c ? " lang3" : n > b ? " lang2" : n > a ? " lang" : ""; }
function sc(n, cap){ var r = n / cap; return r <= 1 ? 1 : r <= 1.25 ? .86 : r <= 1.55 ? .72 : r <= 1.9 ? .6 : .5; }
function strip(t){ return String(t || "").replace(/\*\*/g, "").replace(/\*(?=\S)/g, "").trim(); }

/* ---------- Positionierung in PDF-Punkten (Seite 792 × 612 pt) ---------- */
function st(x, y, w, h, extra){ return 'style="left:' + (x / 7.92).toFixed(3) + '%;top:' + (y / 6.12).toFixed(3) + '%;width:' + (w / 7.92).toFixed(3) + '%;height:' + (h / 6.12).toFixed(3) + '%' + (extra ? ";" + extra : "") + '"'; }
function stR(r, extra){ return st(r[0], r[1], r[2], r[3], extra); }
function box(x, y, w, h, cls, inner, attr, extra){ return '<div class="' + cls + '" ' + st(x, y, w, h, extra) + (attr ? " " + attr : "") + '>' + (inner || "") + '</div>'; }
function mk(R, d){ var X = R[0] - d, Y = R[1] - d, Wd = R[2] + 2 * d, Ht = R[3] + 2 * d; return "--ms:" + (792 / Wd * 100).toFixed(2) + "% " + (612 / Ht * 100).toFixed(2) + "%;--mp:" + (X / (792 - Wd) * 100).toFixed(3) + "% " + (Y / (612 - Ht) * 100).toFixed(3) + "%"; }
function mkh(R, dx, dy){ var X = R[0] - dx, Y = R[1] - dy, Wd = R[2] + 2 * dx, Ht = R[3] + 2 * dy; return ";--hs:" + (792 / Wd * 100).toFixed(2) + "% " + (612 / Ht * 100).toFixed(2) + "%;--hp:" + (X / (792 - Wd) * 100).toFixed(3) + "% " + (Y / (612 - Ht) * 100).toFixed(3) + "%"; }
function lnkR(r, cls, inner, attr, extra){ return '<a class="' + cls + '" ' + stR(r, extra) + (attr ? " " + attr : "") + '>' + (inner || "") + '</a>'; }
/* Beschriftung mittig in der Ursprungs-Box des Originaltextes [x0,y0,x1,y1] */
function lab(b, cls, t, extra){ return box(b[0], b[1], b[2] - b[0], b[3] - b[1], "t " + cls, t, "", extra); }
function capOf(r, cls){ return Math.max(6, Math.floor(r[2] / ((cls === "s" ? 11.4 : cls === "lbl" ? 15 : 12.8) * 0.43))); }
function inpR(r, path, val, cls, ph, extra){ return '<input class="o-in ' + (cls || "") + '" data-cap="' + capOf(r, cls) + '" ' + stR(r, (extra ? extra + ";" : "") + "--sc:" + sc(String(val).length, capOf(r, cls))) + ' data-f="obP" data-p="' + path + '" value="' + esc(val) + '"' + (ph ? ' placeholder="' + esc(ph) + '"' : "") + ' autocomplete="off" spellcheck="false">'; }
function seite(n, titel, tb, cb, inhalt){ return '<div class="os-pg"><section class="os-seite" style="background-image:url(img/bogen/seite-' + n + '.webp);--mu:url(img/bogen/mask-' + n + '.png);--mu2:url(img/bogen/mask-halo-' + n + '.png)">' + lab(tb, "titel", esc(titel)) + lab(cb, "copy", "© 2025 Son of Oak Game Studio") + inhalt + '</section></div>'; }
function punkte(rs, path, val, cls, tip){ return rs.map(function(r, k){ return lnkR(r, "trk " + cls + (val >= k + 1 ? " on" : ""), "", 'data-act="obTick" data-p="' + path + '" data-v="' + (k + 1) + '" data-tip="' + tip + ' ' + (k + 1) + '"'); }).join(""); }

/* ---------- Theme Card (vorn) ---------- */
/* K: Felder der Karte (title, power[], weak[], quest[], burn[], pips[3][3], optional type, icons[3]); L: Beschriftungspositionen */
function themaVorn(c, t, i, K, L){
  var fs = i === "x", b = t.book && A.book(t.book), p = pfad(i), h = "";
  h += lab(L.head, "kw", fs ? "Fellowship<br>Theme Card" : "Theme Card", fs ? "line-height:1.12" : "");
  if(!fs){
    h += lab(L.typ, "klein l", "Typ");
    ["origin", "adventure", "greatness"].forEach(function(m, k){ h += lnkR(K.icons[k], "ty" + (t.might === m ? " on" : ""), "", 'data-act="obMight" data-i="' + i + '" data-v="' + m + '" data-tip="' + MIGHT[m] + '"', mk(K.icons[k], 2) + mkh(K.icons[k], 3, 6)); });
    h += lnkR(K.type, "buch" + (b ? "" : " leer"), '<span>' + esc(b ? b.name : "Themenbuch wählen") + '</span>' + (b ? '<b class="ii" data-act="obBuchInfo" data-i="' + i + '" data-tip="Infos zum Themenbuch">i</b>' : ""), 'data-act="obBuch" data-i="' + i + '" data-k="buch' + i + '"');
  }
  /* Title Tag = erste Zeile (Frage A) */
  var ph = b ? '<span class="ph">' + esc(b.power[0].q) + '</span>' : (fs ? '<span class="ph">Title Tag eurer Fellowship</span>' : "");
  h += lnkR(K.title, "feld titel" + (t.tburn ? " burned" : "") + lv(t.name, 17, 28, 38), t.name ? '<span>' + esc(t.name) + '</span>' : ph, 'data-act="obTag" data-i="' + i + '" data-art="titel" data-s="0" data-k="t' + i + '_0"' + (b ? ' data-tip="A: ' + esc(b.power[0].q) + '"' : ""));
  if(t.name) h += lnkR(K.burn[0], "sc" + (t.tburn ? " on" : ""), "", 'data-act="obBurn" data-i="' + i + '" data-s="-1" data-tip="' + (t.tburn ? "Wieder verfügbar" : "Tag durchstreichen (scratched)") + '"');
  /* weitere Power Tags */
  K.power.forEach(function(r, s){
    var x = t.power[s], q = x && b && b.power.filter(function(z){ return z.l === x.l; })[0], a = x ? x.a : "";
    h += lnkR(r, "feld" + (x && x.burn ? " burned" : "") + lv(a, 17, 28, 38), a ? '<span>' + esc(a) + '</span>' : "", 'data-act="obTag" data-i="' + i + '" data-art="power" data-s="' + s + '" data-k="p' + i + '_' + s + '"' + (q ? ' data-tip="' + esc(q.l + ": " + q.q) + '"' : ""));
    if(a) h += lnkR(K.burn[s + 1], "sc" + (x.burn ? " on" : ""), "", 'data-act="obBurn" data-i="' + i + '" data-s="' + s + '" data-tip="' + (x.burn ? "Wieder verfügbar" : "Tag durchstreichen (scratched)") + '"');
  });
  /* Weakness Tags */
  K.weak.forEach(function(r, w){
    var xw = t.weak[w], qw = xw && b && b.weak.filter(function(z){ return z.l === xw.l; })[0], a = xw ? xw.a : "";
    h += lnkR(r, "feld w" + lv(a, 17, 28, 38), a ? '<span>' + esc(a) + '</span>' : "", 'data-act="obTag" data-i="' + i + '" data-art="weak" data-s="' + w + '" data-k="w' + i + '_' + w + '"' + (qw ? ' data-tip="' + esc(qw.l + ": " + qw.q) + '"' : ""));
    if(a){ var IV = K.inv[w]; h += lnkR([IV[0] - 3, IV[1] - 3, IV[2] + 6, IV[3] + 6], "inv" + (xw.inv ? " on" : ""), "", 'data-act="obInv" data-i="' + i + '" data-s="' + w + '" data-tip="' + (xw.inv ? "Markierung lösen" : "Weakness angewandt: Improve markieren") + '"', mk(IV, 3) + mkh(IV, 4, 4)); }
  });
  /* Quest */
  var q0 = K.quest[0], q2 = K.quest[K.quest.length - 1], qt = String(t.motiv || "");
  h += lnkR([q0[0], q0[1], q0[2], q2[1] + q2[3] - q0[1] + 9], "o-quest" + lv(qt, 56, 90, 120), qt ? '<span>' + esc(qt) + '</span>' : "", 'data-act="obMotiv" data-i="' + i + '" data-k="m' + i + '"');
  /* Abandon / Improve / Milestone */
  var G = [["aband", "Abandon", "aband"], ["impr", "Improve", "impr"], ["mile", "Milestone", "mile"]];
  G.forEach(function(g, k){ h += punkte(K.pips[k], p + "." + g[0], t[g[0]], g[2], g[1]); });
  L.pl.forEach(function(bb, k){ h += lab(bb, "klein", G[k][1]); });
  h += lab(L.quest, "bar", "Quest");
  return h;
}
/* ---------- Rückseite: Special Improvements ---------- */
function impZeilen(d, w){ var z = 10.5 + Math.ceil(String(d || "").length / (w / 3.15)) * 7.4; return Math.max(1, Math.ceil((z + 3) / 25.6)); }
function verbesserungen(c, t, i, rows){
  var b = t.book && A.book(t.book), imp = (b && b.imp) || [], h = "", r = 0, w = rows[0][2];
  t.spec.forEach(function(n, k){
    if(r >= rows.length) return;
    var s = imp.filter(function(x){ return x[0] === n; })[0], zr = Math.min(impZeilen(s && s[1], w), rows.length - r), a = rows[r], z = rows[r + zr - 1];
    h += '<a class="spec" ' + st(a[0], a[1], a[2], z[1] + z[3] - a[1]) + ' data-act="obSpec" data-i="' + i + '" data-v="' + k + '" data-k="s' + i + '_' + k + '"><b>' + esc(n) + '</b>' + (s ? '<small>' + esc(s[1]) + '</small>' : "") + '</a>'; r += zr;
  });
  if(r < rows.length) h += '<a class="spec neu" ' + st(rows[r][0], rows[r][1], rows[r][2], rows[r][3]) + ' data-act="obSpec" data-i="' + i + '" data-v="-1" data-k="s' + i + '_n"><span class="ph">' + (b && t.spec.length < imp.length ? "+ Special Improvement wählen" : "+ Special Improvement eintragen") + '</span></a>';
  return h;
}

/* ---------- Seiten ---------- */
var P2 = {
  head: [[80, 73, 169, 88], [264, 72, 353, 88], [446, 73, 535, 88], [630, 72, 719, 88]],
  typ: [[50, 129, 73, 139], [234, 128, 257, 138], [416, 129, 438, 139], [600, 128, 622, 138]],
  quest: [[106, 401, 141, 413], [290, 400, 325, 412], [472, 401, 507, 413], [656, 400, 690, 412]],
  pl: [[[60, 511, 98, 521], [106, 511, 142, 521], [147, 511, 193, 521]], [[244, 511, 282, 520], [290, 511, 326, 520], [331, 511, 377, 520]], [[426, 511, 464, 521], [472, 511, 507, 521], [512, 511, 558, 521]], [[609, 511, 648, 520], [656, 511, 691, 520], [696, 511, 742, 520]]]
};
var P3 = {head: [[76, 67, 165, 83], [259, 67, 348, 83], [442, 67, 531, 83], [625, 67, 714, 83]], si: [[52, 92, 186, 104], [236, 92, 369, 104], [419, 92, 553, 104], [602, 92, 736, 104]]};
var L1 = {head: [430, 68, 540, 96], typ: null, quest: [468, 399, 503, 412], pl: [[422, 510, 460, 519], [468, 510, 504, 519], [509, 510, 555, 519]]};
var L1B = {head: [613, 68, 723, 96], si: [601, 105, 735, 117]};
function seite1(c){
  var P = LY.p1, h = "";
  /* Hero Card */
  h += lab([82, 71, 160, 87], "kw", "Hero Card") + lab([265, 71, 343, 87], "kw", "Hero Card");
  h += '<textarea class="o-name" data-cap="22" ' + st(P.name[0], P.name[1], P.name[2], P.name[3], "--sc:" + sc(String(c.name || "").length, 22)) + ' data-f="cname" rows="2" placeholder="Name des&#10;Hero" spellcheck="false">' + esc(c.name) + '</textarea>';
  h += lab([82, 175, 159, 187], "bar", "Spielername") + inpR(P.spieler, "spieler", c.spieler, "lbl");
  h += lab([45, 220, 197, 233], "bar", "Fellowship-Beziehungen") + lab([56, 237, 104, 246], "klein", "Companion") + lab([126, 237, 201, 246], "klein", "Beziehungs-Tag");
  P.rel.forEach(function(r, k){ h += inpR(r.w, "rel." + k + ".w", c.rel[k].w, "s") + inpR(r.t, "rel." + k + ".t", c.rel[k].t, "s"); });
  h += lab([61, 370, 108, 382], "bar l", "Promise") + punkte(P.promise, "promise", c.promise, "prom", "Promise");
  h += lab([77, 393, 165, 406], "bar", "Quintessences");
  P.quint.forEach(function(r, k){ h += inpR(r, "quint." + k, c.quint[k], "s"); });
  /* Backpack + Notizen */
  h += lab([276, 95, 332, 107], "bar", "Backpack") + lab([286, 393, 321, 406], "bar", "Notizen");
  P.pack.forEach(function(r, k){ h += inpR(r, "pack." + k, c.pack[k], ""); });
  P.notes.forEach(function(r, k){ h += inpR(r, "notes." + k, c.notes[k], ""); });
  /* Fellowship Theme Card + Rückseite */
  h += themaVorn(c, c.extra, "x", FS, L1);
  h += lab(L1B.head, "kw", "Fellowship<br>Theme Card", "line-height:1.12") + lab(L1B.si, "bar", "Special Improvements") + verbesserungen(c, c.extra, "x", FS.spec);
  return seite(1, "Hero Card, Backpack & Fellowship Card", [46, 17, 566, 46], [34, 575, 186, 590], h);
}
function seite2(c){ return seite(2, "Theme Cards (Vorderseite)", [40, 18, 310, 47], [38, 574, 190, 590], c.themes.map(function(t, i){ var K = LY.p2[i]; K.type = K.type; return themaVorn(c, t, i, K, {head: P2.head[i], typ: P2.typ[i], quest: P2.quest[i], pl: P2.pl[i]}); }).join("")); }
function seite3(c){
  return seite(3, "Theme Cards (Rückseite)", [41, 12, 286, 41], [29, 570, 181, 585], c.themes.map(function(t, i){
    return lab(P3.head[i], "kw", "Theme Card") + lab(P3.si[i], "bar", "Special Improvements") + verbesserungen(c, t, i, LY.p3[i]);
  }).join(""));
}
function render(c){ ens(c); return '<div class="ob" id="miSheet">' + seite1(c) + seite2(c) + seite3(c) + '</div>'; }

/* ---------- Panels: Fragen, Quest ---------- */
function anc(el){ return el && el.isConnected ? el : el && el.dataset.k ? document.querySelector('[data-k="' + el.dataset.k + '"]') || document.body : document.body; }
function aufraeumen(){
  var c = A.cur(); if(!c) return;
  [c.extra].concat(c.themes).forEach(function(t){ t.power = t.power.filter(function(x){ return x.a && x.a.trim(); }); t.weak = t.weak.filter(function(x){ return x.a && x.a.trim(); }); });
  var nach = CTX && CTX.danach; CTX = null; A.rerender(); if(nach) setTimeout(nach, 40);
}
function eintrag(c){ var t = thema(c, CTX.i); if(CTX.art === "titel") return t.name ? {a: t.name} : null; return t[CTX.art].filter(function(x){ return x.l === CTX.l; })[0]; }
function kitTags(b, art, l){ var q = b && b[art].filter(function(z){ return z.l === l; })[0]; return (q && q.tags) || []; }
function frageListe(c){
  var t = thema(c, CTX.i), b = A.book(t.book), used = t[CTX.art].map(function(x){ return x.l; }), Q = b ? b[CTX.art].filter(function(q){ return used.indexOf(q.l) < 0 && !(CTX.art === "power" && q.l === "A"); }) : [];
  return '<div class="ob-pk">' + (CTX.art === "power" ? "Power Tag" : "Weakness Tag") + ' · Frage wählen</div><div class="ob-ql">' +
    Q.map(function(q){ var ex = (q.tags || []).slice(0, 3); return '<a data-act="obQ" data-v="' + esc(q.l) + '"><i>' + esc(q.l) + '</i><span>' + esc(q.q) + (ex.length ? '<small>z. B. ' + ex.map(esc).join(" · ") + '</small>' : "") + '</span></a>'; }).join("") +
    '<a data-act="obQ" data-v="+' + Date.now().toString(36) + '"><i>+</i><span>Freier ' + (CTX.art === "power" ? "Power Tag" : "Weakness Tag") + ' ohne Frage</span></a></div>';
}
function antwort(c){
  var t = thema(c, CTX.i), b = t.book && A.book(t.book), art = CTX.art === "titel" ? "power" : CTX.art, q = b && b[art].filter(function(z){ return z.l === CTX.l; })[0], x = eintrag(c), ex = kitTags(b, art, CTX.l), titel = CTX.art === "titel";
  var art_l = titel ? "Title Tag" : art === "power" ? "Power Tag" : "Weakness Tag";
  return '<div class="ob-pk">' + art_l + (q ? " · Frage " + esc(q.l) + (titel ? " (Pflicht)" : "") : " · frei") + '</div>' + (q ? '<div class="ob-pq">' + esc(q.q) + '</div>' : "") +
    '<input class="ob-pin" data-f="obAns" value="' + esc(x ? x.a : "") + '" placeholder="Antwort als kurzer Tag …" autocomplete="off">' +
    (ex.length ? '<div class="ob-pex">' + ex.map(function(v){ return '<a data-act="obEx" data-v="' + esc(v) + '">' + esc(v) + '</a>'; }).join("") + '</div>' : "") +
    '<div class="ob-pa">' + (titel || !b ? "" : '<a data-act="obAndere">Andere Frage</a>') + (x ? '<a data-act="obWeg">Entfernen</a>' : "") + '<a class="ok" data-act="obFertig">Fertig</a></div>';
}
function panelZeigen(anchor, html){ A.panel(anchor, html, aufraeumen, "ob-panel"); }
function panelNeu(html){ var p = document.querySelector(".ob-panel"); if(!p) return; p.innerHTML = html; var f = p.querySelector("input,textarea"); if(f){ f.focus(); f.setSelectionRange && f.setSelectionRange(f.value.length, f.value.length); } }
function tagOeffnen(c, i, art, s, danach){
  var t = thema(c, i), b = t.book && A.book(t.book), x;
  if(art === "titel") x = t.name ? {l: "A"} : null; else if(art === "power") x = t.power[s]; else x = t.weak[s];
  CTX = {i: i, art: art, s: s, l: art === "titel" ? "A" : x ? x.l : null, danach: danach};
  if(art !== "titel" && !b && !CTX.l) CTX.l = "+" + Date.now().toString(36);
  var e = document.querySelector('[data-k="' + (art === "titel" ? "t" : art === "power" ? "p" : "w") + i + '_' + s + '"]');
  if(e) e.scrollIntoView({block: "center"});
  panelZeigen(e || document.body, CTX.l ? antwort(c) : frageListe(c));
}
function buchListe(c, i, anchor){
  var t = thema(c, i), items = [];
  A.cfg().books.filter(function(b){ return b.typ !== "Fellowship"; }).forEach(function(b){ items.push({n: b.name, s: b.p ? "S. " + b.p : "", g: b.grp, info: A.bookInfo(b), id: b.id}); });
  A.popOpen(anchor, items, function(it){
    var voll = t.power.length || t.weak.length || t.motiv || t.name;
    if(voll && !confirm("Theme neu belegen? Bisherige Tags und Quest gehen verloren.")) return;
    var nt = A.blankTheme(); nt.book = it.id; nt.might = mightOfBook(A.book(it.id)) || t.might || ""; nt.spec = []; nt.aband = t.aband; nt.impr = t.impr; nt.mile = t.mile; nt.neu = t.neu;
    Object.keys(t).forEach(function(k){ delete t[k]; }); Object.assign(t, nt); A.rerender();
  }, {auf: t.might ? MIGHT[t.might] : null});
}
function kitListe(c, i, anchor){
  var t = thema(c, i), b = A.book(t.book), items = A.kitsOf(t.book).map(function(k){ return {n: k.name, s: k.p ? "S. " + k.p : "", g: srcName(k.src), info: A.kitInfo(k), id: k.name}; });
  if(!items.length){ A.toast("Für dieses Themenbuch gibt es keine Theme Kits"); return; }
  A.popOpen(anchor, items, function(it){
    var k = A.kitBy(t.book, it.id), nt = A.themeAusKit(k); nt.might = t.might; nt.spec = t.spec; nt.aband = t.aband; nt.impr = t.impr; nt.mile = t.mile; nt.neu = t.neu;
    Object.keys(t).forEach(function(x){ delete t[x]; }); Object.assign(t, nt); A.rerender();
  }, {offen: 1});
}
function srcName(s){ return {core: "Core Book", dales: "The Dales", uncanny: "Uncanny Heroes"}[s] || "Theme Kits"; }

/* ---------- Dialoge ---------- */
function modalZu(){ var m = document.querySelector(".ob-modal"); if(m) m.remove(); MOD = null; }
function modal(titel, text, opts, ctx, ohneSpaeter){
  modalZu(); MOD = ctx;
  var d = document.createElement("div"); d.className = "ob-modal noprint";
  d.innerHTML = '<div class="ob-mbox"><h3>' + esc(titel) + '</h3>' + text.map(function(t){ return '<p>' + t + '</p>'; }).join("") + '<div class="ob-mopts">' +
    opts.map(function(o){ return '<a class="ob-mopt' + (o.off ? " off" : "") + (o.haupt ? " haupt" : "") + '"' + (o.off ? "" : ' data-act="obMod" data-v="' + esc(o.id) + '"') + '><b>' + esc(o.l) + '</b>' + (o.s ? '<small>' + esc(o.s) + '</small>' : "") + '</a>'; }).join("") +
    '</div>' + (ohneSpaeter ? "" : '<div class="ob-mfuss"><a data-act="obModX">Später</a></div>') + '</div>';
  document.body.appendChild(d);
}
function promiseGeben(c, n){
  c.promise += n; var voll = 0; while(c.promise >= 5){ c.promise -= 5; voll++; } A.rerender();
  if(voll) erfuellung(voll - 1);
}
function erfuellung(rest){
  modal("Moment of Fulfillment", ["Alle fünf Kreise von Promise sind markiert: Die Leiste wird zurückgesetzt, und dein Hero erlebt einen Moment of Fulfillment. Wähle eines:"],
    FULFIL.map(function(f, k){ return {id: "f" + k, l: f[0], s: f[1]}; }), {art: "erf", rest: rest || 0}, true);
}
function verbesserungDialog(c, i, zusatz){
  var t = thema(c, i), b = t.book && A.book(t.book), imp = (b && b.imp) || [], hero = i !== "x";
  modal(zusatz ? "Weitere Verbesserung" : "Theme verbessert", [zusatz ? "Du hast einen Weakness Tag entfernt oder umgeschrieben. Wähle dazu noch eine weitere Verbesserung:" : "Das dritte Improve ist markiert. Die Leiste wird zurückgesetzt, und du wählst eine Verbesserung für dieses Theme. Zusätzlich darfst du einen deiner Tags umschreiben oder aktualisieren."], [
    {id: "p", l: "Einen neuen Power Tag", s: "Beantworte eine weitere Frage des Themenbuchs.", off: t.power.length >= (i === "x" ? FS.power.length : LY.p2[0].power.length)},
    {id: "wa", l: "Einen Weakness Tag hinzufügen", s: "Mehr Weakness Tags = mehr Möglichkeiten für Improve.", off: t.weak.length >= 2},
    {id: "we", l: "Einen Weakness Tag entfernen", s: "Danach wählst du noch eine Verbesserung.", off: !t.weak.length || zusatz},
    {id: "wu", l: "Einen Weakness Tag umschreiben", s: "Danach wählst du noch eine Verbesserung.", off: !t.weak.length || zusatz},
    {id: "v", l: "Eine Special Improvement", s: b ? "Aus der Liste des Themenbuchs, jede nur einmal." : "Frei eintragen.", off: b && t.spec.length >= imp.length},
    {id: "r", l: "Abandon / Milestone zurücksetzen", s: "Leert beide Leisten dieses Themes.", off: !t.aband && !t.mile},
    {id: "pr", l: "Promise markieren", s: "Du verbesserst dich nicht sichtbar, aber etwas sammelt sich in dir.", off: !hero}
  ], {art: "verb", i: i}, zusatz);
}
function schwaecheWahl(c, i, wozu){
  var t = thema(c, i);
  if(t.weak.length === 1){ schwaecheAktion(c, i, 0, wozu); return; }
  modal(wozu === "we" ? "Welchen Weakness Tag entfernen?" : "Welchen Weakness Tag umschreiben?", [], t.weak.map(function(x, k){ return {id: "w" + k, l: x.a, s: x.l && x.l.length === 1 ? "Frage " + x.l : ""}; }), {art: "wwahl", i: i, wozu: wozu}, true);
}
function schwaecheAktion(c, i, k, wozu){
  var t = thema(c, i); t.weak.splice(k, 1); A.rerender();
  if(wozu === "we") verbesserungDialog(c, i, true);
  else tagOeffnen(c, i, "weak", t.weak.length, function(){ verbesserungDialog(A.cur(), i, true); });
}
function tauschPunkte(t){ return Math.max(0, t.power.length - 2) + Math.max(0, t.weak.length - 1) + t.spec.length; }
function voll(c, path){
  var m = /^(themes\.(\d)|extra)\.(aband|impr|mile)$/.exec(path);
  if(path === "promise"){ c.promise = 0; A.rerender(); erfuellung(0); return; }
  if(!m) return;
  var i = m[2] != null ? +m[2] : "x", t = thema(c, i), feld = m[3], hero = i !== "x";
  if(feld === "impr"){ verbesserungDialog(c, i, false); return; }
  if(feld === "mile"){
    modal("Theme entwickelt sich weiter", ["Der dritte Milestone ist markiert: Das Theme entwickelt sich weiter (Evolve).", hero ? "• <b>Promise</b> einmal markieren (dazu je einmal für jeden Power Tag über den dritten, jeden Weakness Tag über den ersten und jede Special Improvement, die du eintauschst)" : "• Das Fellowship-Theme kann dadurch kein Promise markieren.",
      "• einen <b>neuen Title Tag</b> wählen, der die Entwicklung widerspiegelt", "• einen <b>neuen Theme-Typ</b> oder eine andere <b>Might</b> wählen (nicht dieselbe wie zuvor)", "• Tags und <b>Quest</b> überarbeiten", "Der alte Title Tag darf als normaler Power Tag bleiben."],
      [{id: "evo", l: "Theme weiterentwickeln", s: "Setzt die Leisten zurück, behält die Tags und leert Title Tag, Quest und Themenbuch.", haupt: 1}], {art: "evo", i: i}); return;
  }
  /* Abandon voll */
  var pts = tauschPunkte(t) + (hero ? 1 : 0);
  modal("Theme wird ersetzt", ["Das dritte Abandon ist markiert: Du ersetzt dieses Theme.", hero ? "• <b>Promise</b> " + pts + "× markieren (einmal für den Wechsel, dazu für jeden Power Tag über den dritten, jeden Weakness Tag über den ersten und jede Special Improvement)" : "• Die Fellowship erschafft ein neues Theme.",
    "• Die Theme-Karte wird abgelegt, du erschaffst ein <b>neues, noch junges Theme</b> mit nur dem Title Tag, einem Weakness Tag und einer Quest.", "• Die nächsten zwei Male, wenn du Improve markieren würdest, wählst du stattdessen einen neuen Power Tag."],
    [{id: "ersetzen", l: "Theme ersetzen", s: "Leert die Karte; danach neues Themenbuch wählen.", haupt: 1}], {art: "ersetzen", i: i, pts: hero ? pts : 0});
}
function modalWahl(c, v){
  var X = MOD; modalZu(); if(!X) return;
  if(X.art === "verb"){
    var i = X.i, t = thema(c, i); t.impr = 0;
    if(v === "r"){ t.aband = 0; t.mile = 0; A.rerender(); }
    else if(v === "pr"){ A.rerender(); promiseGeben(A.cur(), 1); }
    else if(v === "p"){ A.rerender(); tagOeffnen(A.cur(), i, "power", Math.min(t.power.length, (i === "x" ? FS.power.length : LY.p2[0].power.length) - 1)); }
    else if(v === "wa"){ A.rerender(); tagOeffnen(A.cur(), i, "weak", Math.min(2, t.weak.length)); }
    else if(v === "we" || v === "wu"){ A.rerender(); schwaecheWahl(A.cur(), i, v); }
    else if(v === "v"){ A.rerender(); setTimeout(function(){ var e = document.querySelector('[data-k="s' + i + '_n"]'); if(e){ e.scrollIntoView({block: "center"}); setTimeout(function(){ e.click(); }, 60); } }, 30); }
  }
  else if(X.art === "wwahl") schwaecheAktion(c, X.i, +v.slice(1), X.wozu);
  else if(X.art === "neuP"){ var tp = thema(c, X.i); A.rerender(); tagOeffnen(A.cur(), X.i, "power", Math.min(tp.power.length, (X.i === "x" ? FS.power.length : LY.p2[0].power.length) - 1)); }
  else if(X.art === "evo"){
    var te = thema(c, X.i), hero = X.i !== "x", alt = te.name, pts = hero ? 1 + tauschPunkte(te) : 0;
    if(alt && te.power.length < (X.i === "x" ? FS.power.length : LY.p2[0].power.length)) te.power.unshift({l: "+" + Date.now().toString(36), a: alt});
    te.name = ""; te.tburn = 0; te.motiv = ""; te.aband = 0; te.impr = 0; te.mile = 0; te.neu = 0;
    if(hero){ te.book = ""; te.might = ""; }
    A.rerender();
    var weiter = function(){ setTimeout(function(){ var e = document.querySelector('[data-k="' + (hero ? "buch" + X.i : "t" + X.i + "_0") + '"]'); if(e){ e.scrollIntoView({block: "center"}); setTimeout(function(){ e.click(); }, 60); } }, 40); };
    if(hero){ MOD_NACH = weiter; promiseGeben(A.cur(), 1); if(!MOD){ var f = MOD_NACH; MOD_NACH = null; f(); } } else weiter();
  }
  else if(X.art === "ersetzen"){
    var ta = thema(c, X.i), he = X.i !== "x";
    var keep = {aband: 0, impr: 0, mile: 0}, nt = A.blankTheme(); nt.spec = []; nt.neu = 2; nt.might = he ? "" : undefined; if(!he) nt.book = "fellowship";
    Object.keys(ta).forEach(function(k){ delete ta[k]; }); Object.assign(ta, nt, keep);
    var w2 = function(){ setTimeout(function(){ var e = document.querySelector('[data-k="' + (he ? "buch" + X.i : "t" + X.i + "_0") + '"]'); if(e){ e.scrollIntoView({block: "center"}); setTimeout(function(){ e.click(); }, 60); } }, 40); };
    A.rerender();
    if(he && X.pts){ MOD_NACH = w2; promiseGeben(A.cur(), X.pts); if(!MOD){ var f2 = MOD_NACH; MOD_NACH = null; f2(); } } else w2();
  }
  else if(X.art === "erf"){
    var k = +v.slice(1);
    if(FULFIL[k][0] === "Eine Quintessence erlangen"){
      var frei = c.quint.indexOf(""); if(frei < 0){ A.toast("Alle Quintessence-Zeilen sind belegt"); }
      else setTimeout(function(){ var e = document.querySelector('[data-p="quint.' + frei + '"]'); if(e){ e.scrollIntoView({block: "center"}); e.focus(); } }, 40);
    } else A.toast("Notiere dein Ergebnis auf der Hero Card (Notizen).");
    if(X.rest > 0) erfuellung(X.rest - 1); else if(MOD_NACH){ var f3 = MOD_NACH; MOD_NACH = null; f3(); }
  }
}
document.addEventListener("keydown", function(e){ if(e.key === "Escape" && MOD && MOD.art !== "erf" && MOD.art !== "wwahl") modalZu(); if(e.key === "Enter" && e.target.dataset && e.target.dataset.f === "obAns"){ e.preventDefault(); A.popClose(); } });

/* ---------- Zufall und Vorlage (Tropes) ---------- */
function pick(a){ return a[Math.floor(Math.random() * a.length)]; }
function shuffle(a){ a = a.slice(); for(var i = a.length - 1; i > 0; i--){ var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
function themaAusKitZufall(k, might){
  var t = A.themeAusKit(k), rest = shuffle(k.power.map(function(a, i){ return i; }).slice(1)).slice(0, 2).sort(), wi = Math.floor(Math.random() * k.weak.length);
  t.power = [{l: "A", a: k.power[0]}].concat(rest.map(function(i){ return {l: LT[i], a: k.power[i]}; })); if(k.weak.length) t.weak = [{l: LT[wi], a: k.weak[wi]}];
  t.might = mightOfBook(A.book(k.book)) || might || pick(["origin", "adventure", "greatness"]); return t;
}
function zufall(){
  var cfg = A.cfg(), c = A.blank(), used = {};
  var og = cfg.books.filter(function(b){ return b.typ === "Origin" || b.typ === "Variable"; }), ad = cfg.books.filter(function(b){ return b.typ === "Adventure"; });
  c.themes = c.themes.map(function(){
    var pool = (Math.random() < 0.2 ? ad : og).filter(function(b){ return !used[b.id] && A.kitsOf(b.id).length; }); if(!pool.length) pool = og.filter(function(b){ return !used[b.id]; });
    var b = pick(pool); used[b.id] = 1; return themaAusKitZufall(pick(A.kitsOf(b.id)), b.typ === "Variable" ? "origin" : "");
  });
  ens(c);
  c.name = pick(["Brannoch Eichenfaust","Isleth von den Mooren","Torwyn Aschenbart","Maelis Nebelschritt","Garrick Steinhüter","Yrsa Dornenlied","Colm der Wanderer","Edda Krähenruf"]);
  c.pack[0] = pick(["Ein zerlesenes Wegebuch","Eine Laterne mit blauer Flamme","Ein Beutel Dorfsalz","Ein Flickzeug für alles","Der Schlüssel zu einer vergessenen Tür"]);
  var fk = A.kitsOf("fellowship");
  if(fk.length){ var ft = themaAusKitZufall(pick(fk), ""); delete ft.might; ft.book = "fellowship"; c.extra = ft; }
  A.neu(c, true); A.rerender();
}
var TKEY = {"Skill Or Trade": "skill_or_trade", "Prodigious Ability": "prodigious", "Uncanny Being": "uncanny"};
function findKit(name, type){
  var key = TKEY[type] || String(type).toLowerCase(), cfg = A.cfg(), hit = null;
  cfg.kits.forEach(function(k){ if(k.name === name && (k.book === key || !hit)) { if(!hit || k.book === key) hit = k; } });
  return hit ? {kit: hit, book: hit.book} : {kit: null, book: key};
}
function themaAusTrope(r){
  var f = findKit(r.name, r.type), t;
  if(f.kit){ t = A.themeAusKit(f.kit); t.might = mightOfBook(A.book(f.kit.book)); }
  else { t = A.blankTheme(); t.name = r.name; t.might = ""; if(A.book(f.book)){ t.book = f.book; t.might = mightOfBook(A.book(f.book)); } }
  if(!t.might) t.might = "origin"; return t;
}
function tropeInfo(t){ return '<h4>' + esc(t.title) + '</h4><p class="mi-m">' + esc(t.category) + '</p><p>' + esc(t.flavor) + '</p><p><b>Themes:</b> ' + t.kits.map(function(k){ return esc(k.name); }).join(" · ") + '</p><p><b>Wahl:</b> ' + t.choose.map(function(k){ return esc(k.name); }).join(" · ") + '</p>'; }
function vorlage(anchor){
  var anc2 = function(){ return document.querySelector('[data-act="vorlage"]') || anchor; };
  A.popOpen(anchor, LM_TROPES.map(function(t, i){ return {n: t.title, s: "", g: t.category, info: tropeInfo(t), id: i}; }), function(it){
    var tr = LM_TROPES[it.id];
    setTimeout(function(){ A.popOpen(anc2(), tr.choose.map(function(k, j){ return {n: k.name, s: k.type, g: "Viertes Theme wählen", id: j}; }), function(it2){
      var opts = String(tr.backpack || "").split(/,\s*|\s+oder\s+/).map(function(x){ return x.trim(); }).filter(Boolean);
      var fertig = function(pk){
        var c = A.blank(); c.name = tr.title;
        c.themes = tr.kits.concat([tr.choose[it2.id]]).map(themaAusTrope);
        if(pk) c.pack[0] = pk; A.neu(c, true); A.rerender();
      };
      if(opts.length > 1) setTimeout(function(){ A.popOpen(anc2(), opts.map(function(o, j){ return {n: o, s: "", g: "Backpack-Tag wählen", id: j}; }), function(it3){ fertig(opts[it3.id]); }, {offen: 1}); }, 30); else fertig(opts[0] || "");
    }, {offen: 1}); }, 30);
  });
}

/* ---------- Klicks / Eingaben ---------- */
function setAns(c, v){
  var t = thema(c, CTX.i), L = t[CTX.art], x;
  if(CTX.art === "titel"){ t.name = v; return; }
  x = eintrag(c); if(x) x.a = v; else L.push({l: CTX.l, a: v});
}
function weiterTick(c, i, feld, val){
  var t = thema(c, i);
  if(feld === "impr" && t.neu > 0 && val > (t.impr || 0)){
    t.neu--; A.save();
    modal("Neu entstehendes Theme", ["Bei einem neuen, jungen Theme wählst du statt Improve einen neuen Power Tag. Noch " + t.neu + " Mal."], [{id: "p", l: "Neuen Power Tag wählen", haupt: 1}], {art: "neuP", i: i}, true);
    return true;
  }
  return false;
}
function click(act, el, c, e){
  if(act === "zufall"){ zufall(); return true; }
  if(act === "vorlage"){ vorlage(el); return true; }
  if(act.indexOf("ob") !== 0) return false;
  var i = el.dataset.i === "x" ? "x" : +el.dataset.i, t = el.dataset.i != null ? thema(c, i) : null;
  if(act === "obTick"){
    var p = el.dataset.p, v = +el.dataset.v, cur = getPath(c, p) || 0, n = p === "promise" ? 5 : 3, m = /^(themes\.(\d)|extra)\.(aband|impr|mile)$/.exec(p);
    if(v === cur) setPath(c, p, v - 1);
    else if(v === cur + 1){
      if(m && weiterTick(c, m[2] != null ? +m[2] : "x", m[3], v)) return true;
      setPath(c, p, v);
    } else { A.toast(v > cur ? "Erst Kästchen " + (cur + 1) + " markieren" : "Erst Kästchen " + cur + " lösen"); return true; }
    A.rerender();
    if(v === n && cur === n - 1) voll(c, p);
  }
  else if(act === "obMod") modalWahl(c, el.dataset.v);
  else if(act === "obModX") modalZu();
  else if(act === "obMight"){ t.might = el.dataset.v; A.rerender(); }
  else if(act === "obBuch") buchListe(c, i, anc(el));
  else if(act === "obBuchInfo"){
    var bb = A.book(t.book); A.panel(anc(el), '<div class="ob-binfo">' + A.bookInfo(bb) + (A.kitsOf(t.book).length ? '<div class="ob-pa"><a class="ok" data-act="obKit" data-i="' + i + '">Theme Kit einsetzen …</a></div>' : "") + '</div>', null, "ob-panel breit");
  }
  else if(act === "obKit"){ var anker = document.querySelector('[data-k="buch' + i + '"]') || el; A.popClose(); setTimeout(function(){ kitListe(c, i, anker); }, 30); }
  else if(act === "obTag"){
    if(i !== "x" && !t.book){ buchListe(c, i, document.querySelector('[data-k="buch' + i + '"]')); return true; }
    tagOeffnen(c, i, el.dataset.art, +el.dataset.s);
  }
  else if(act === "obQ"){ CTX.l = el.dataset.v; panelNeu(antwort(c)); }
  else if(act === "obAndere"){ var x2 = eintrag(c); if(x2 && CTX.art !== "titel") thema(c, CTX.i)[CTX.art] = thema(c, CTX.i)[CTX.art].filter(function(y){ return y !== x2; }); CTX.l = null; panelNeu(frageListe(c)); }
  else if(act === "obWeg"){ if(CTX.art === "titel"){ thema(c, CTX.i).name = ""; } else { var x3 = eintrag(c); if(x3) x3.a = ""; } A.popClose(); }
  else if(act === "obEx"){ setAns(c, el.dataset.v); A.popClose(); }
  else if(act === "obFertig") A.popClose();
  else if(act === "obBurn"){
    var s = +el.dataset.s;
    if(s < 0){ if(t.name){ t.tburn = t.tburn ? 0 : 1; A.rerender(); } } else { var x4 = t.power[s]; if(x4 && x4.a){ x4.burn = !x4.burn; A.rerender(); } }
  }
  else if(act === "obInv"){
    var xw = t.weak[+el.dataset.s]; if(!xw) return true; xw.inv = !xw.inv;
    if(xw.inv){
      if(t.neu > 0 && (t.impr || 0) < 3){ A.rerender(); weiterTick(c, i, "impr", (t.impr || 0) + 1); return true; }
      var vor = t.impr || 0; if(vor < 3){ t.impr = vor + 1; A.rerender(); A.toast("Improve markiert"); if(t.impr === 3) voll(c, pfad(i) + ".impr"); return true; }
    }
    A.rerender();
  }
  else if(act === "obMotiv"){
    if(i !== "x" && !t.book){ buchListe(c, i, document.querySelector('[data-k="buch' + i + '"]')); return true; }
    var b4 = t.book && A.book(t.book); CTX = {i: i, motiv: 1};
    panelZeigen(anc(el), '<div class="ob-pk">Quest</div><textarea class="ob-pin" data-f="obMot" rows="3" placeholder="Dein Ziel, Glaube oder deine persönliche Reise …">' + esc(t.motiv) + '</textarea>' +
      (b4 && (b4.motivEx || []).length ? '<div class="ob-pex ob-mex">' + b4.motivEx.map(function(m){ return '<a data-act="obMex" data-v="' + esc(m[1]) + '">' + esc(m[1]) + '</a>'; }).join("") + '</div>' : "") +
      '<div class="ob-pa"><a class="ok" data-act="obFertig">Fertig</a></div>');
  }
  else if(act === "obMex"){ thema(c, CTX.i).motiv = el.dataset.v; A.popClose(); }
  else if(act === "obSpec"){
    var b5 = t.book && A.book(t.book), k = +el.dataset.v, sp = (b5 && b5.imp) || [];
    if(!b5){ var frei = prompt("Special Improvement eintragen", k >= 0 ? t.spec[k] : ""); if(frei != null){ if(k >= 0){ if(frei.trim()) t.spec[k] = frei.trim(); else t.spec.splice(k, 1); } else if(frei.trim()) t.spec.push(frei.trim()); A.rerender(); } return true; }
    var items = sp.filter(function(x){ return t.spec.indexOf(x[0]) < 0 || t.spec[k] === x[0]; }).map(function(x){ return {n: x[0], s: "", g: "Special Improvements · " + b5.name, info: '<h4>' + esc(x[0]) + '</h4><p>' + esc(x[1]) + '</p>', id: x[0]}; });
    if(k >= 0) items.unshift({n: "Special Improvement entfernen", s: "", g: "Special Improvements · " + b5.name, id: ""});
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
document.addEventListener("input", function(e){ var el = e.target; if(el && el.dataset && el.dataset.cap && /(^| )o-(in|name)( |$)/.test(el.className)) el.style.setProperty("--sc", sc(el.value.length, +el.dataset.cap)); });
window.LM_BOGEN = {render: render, click: click, input: input, nichtLeer: nichtLeer};
})();
