/* Savage Worlds – interaktiver Charakterbogen (#bogen). A4 hoch. Mehrere Charaktere lokal (localStorage), JSON-Export/-Import, ausfüllbares PDF (FillPDF), Druck. */
"use strict";
(function(){
var KEY = "sw_bogen_v1";
var DIE = ["", "W4", "W6", "W8", "W10", "W12", "W12+1", "W12+2", "W12+3", "W12+4"];
var ATTR = [["Geschicklichkeit", "ges", 5], ["Konstitution", "kon", 2], ["Stärke", "sta", 2], ["Verstand", "ver", 6], ["Willenskraft", "wil", 4]];
var KERN = {"Allgemeinwissen": 1, "Athletik": 1, "Heimlichkeit": 1, "Überreden": 1, "Wahrnehmung": 1};
var BASE = {hi: 3, ta: 7, wa: 4, ru: 3, au: 10, ma: 4};
var RAENGE = ["Anfänger", "Fortgeschritten", "Veteran", "Heroisch", "Legendär"];
var LAST = {"W4": "10", "W6": "20", "W8": "30", "W10": "40", "W12": "50", "W12+1": "62,5", "W12+2": "125"};
var DB = null, cur = null, zoomT = 0, pickAll = false;
var ARK = {"Fokus": 1, "Glaube": 1, "Psionik": 1, "Zaubern": 1, "Verrückte Wissenschaft": 1, "Alchemie": 1, "Fokus (Superkräfte)": 1};
var ATK = {"Geschicklichkeit": "ges", "Konstitution": "kon", "Stärke": "sta", "Verstand": "ver", "Willenskraft": "wil"};
var MEHRFACH = {"Neue Mächte": 1, "Machtpunkte": 1, "Profi": 1, "Experte": 1, "Meister": 1, "Lieblingswaffe": 1, "Bevorzugter Feind": 1, "Bevorzugte Macht": 1};
var MONSTER = ["Engel", "Dämon", "Mumie", "Flickenmonster", "Phantom", "Wiedergänger", "Vampir", "Werwolf"];

/* ---------- Volk: Auswirkungen ---------- */
function mergeFx(e, x){
  Object.keys(x || {}).forEach(function(k){
    var v = x[k];
    if(k === "a" || k === "sk" || k === "mx"){ e[k] = e[k] || {}; Object.keys(v).forEach(function(n){ e[k][n] = (k === "mx" ? 0 : (e[k][n] || 0)) + v[n]; }); }
    else if(Array.isArray(v)) e[k] = (e[k] || []).concat(v);
    else if(typeof v === "number" && k !== "ts" && k !== "fl") e[k] = (e[k] || 0) + v;
    else e[k] = v;
  });
}
function fx(c){
  var b = (window.SW_VOLK_FX || {})[c.volk] || {}, e = {a: {}, sk: {}, mx: {}};
  mergeFx(e, Object.assign({}, b, {wahl: undefined}));
  delete e.wahl;
  (b.wahl || []).forEach(function(w, i){ var o = w.o[((c.vw || {})[i]) | 0] || w.o[0]; mergeFx(e, o.e); });
  return e;
}
function aStart(F, k){ return 1 + (F.a[k] || 0); }
function aMax(F, k){ return F.mx[k] || 5 + Math.max(0, F.a[k] || 0); }
function skStart(F, n){ return (KERN[n] && (F.ohne || []).indexOf(n) < 0 ? 1 : 0) + (F.sk[n] || 0); }
function skMax(F, n){ return 5 + (F.sk[n] || 0); }
/* Volk oder Wahl wechseln: gekaufte Schritte bleiben erhalten */
function wechsle(c, alt, neu){
  ATTR.forEach(function(a){
    var k = a[1], i = di(c.a[k]) || 1, n = i - aStart(alt, k) + aStart(neu, k);
    c.a[k] = DIE[Math.max(aStart(neu, k), Math.min(aMax(neu, k), n))];
  });
  c.sk.forEach(function(s){
    var i = di(s.d), n = i - skStart(alt, s.n) + skStart(neu, s.n);
    if(n >= 1) s.d = DIE[Math.min(skMax(neu, s.n), n)];
  });
  Object.keys(neu.sk).forEach(function(n){ if(!c.sk.some(function(s){ return s.n === n; })){ var sd = (SW_SKILLS.concat(window.SW_SKILLS_ZUS || []).filter(function(x){ return x.n === n; })[0] || {}); c.sk.push({n: n, a: sd.a || "Verstand", d: DIE[skStart(neu, n)]}); } });
  (neu.ohne || []).forEach(function(n){ c.sk = c.sk.filter(function(s){ return !(s.n === n && di(s.d) <= 1 && !neu.sk[n]); }); });
  (alt.ohne || []).forEach(function(n){ if((neu.ohne || []).indexOf(n) < 0 && !c.sk.some(function(s){ return s.n === n; })){ var sd = SW_SKILLS.filter(function(x){ return x.n === n; })[0]; if(sd) c.sk.push({n: n, a: sd.a, d: "W4"}); } });
  if((+c.ben || 0) === 3 + (alt.ben || 0)) c.ben = 3 + (neu.ben || 0);
}
function tempo(F){ return F.ts || 6 + (F.t || 0); }
function sprint(F){ if(F.sps) return F.sps; return DIE[Math.max(1, Math.min(5, 2 + (F.sp || 0)))]; }

/* ---------- Voraussetzungen ---------- */
function rangIdx(c){ return Math.min(4, Math.floor(Math.floor((parseInt(c.ep, 10) || 0) / 5) / 4)); }
function ahName(c, F){ return c.ah || F.ah || (c.ta.filter(function(t){ return t && /^Arkaner Hintergrund \(/.test(t.n); })[0] || {n: ""}).n.replace(/^Arkaner Hintergrund \((.*)\)$/, "$1"); }
function ahRec(n){ return (window.SW_AH || []).filter(function(a){ return a.n === n; })[0]; }
function ahSkill(c, F){ var a = ahRec(ahName(c, F)); return a && a.f ? a.f.replace(/\s*\((Verstand|Willenskraft|Geschicklichkeit|Stärke|Konstitution)\)$/, "") : ""; }
function talenteVon(c, F){
  var L = c.ta.filter(function(t){ return t && t.n; }).map(function(t){ return t.n; }).concat(F.ta || []);
  var ah = ahName(c, F); if(ah){ L.push("Arkaner Hintergrund"); L.push("Arkaner Hintergrund (" + ah + ")"); }
  return L;
}
function handicapsVon(c, F){ return c.hi.filter(function(h){ return h && h.n; }).map(function(h){ return h.n; }).concat(F.ha || []); }
function traitIdx(c, F, n){
  n = n.trim();
  if(ATK[n]) return di(c.a[ATK[n]]);
  if(/^arkane[rn]? Fertigkeit$/i.test(n)){ var a = ahSkill(c, F); n = a; if(!n) return 0; }
  var s = c.sk.filter(function(x){ return x.n === n || x.n.replace(/\s*\(.*\)$/, "") === n; })[0];
  return s ? di(s.d) : 0;
}
function isTrait(n){ n = n.trim(); return !!(ATK[n] || /^arkane[rn]? Fertigkeit$/i.test(n) || SW_SKILLS.some(function(s){ return s.n === n; }) || (window.SW_SKILLS_ZUS || []).some(function(s){ return s.n === n; })); }
var TNAMES = null, HNAMES = null;
function tnames(){ if(!TNAMES){ TNAMES = {}; SW_TALENTE.forEach(function(t){ TNAMES[t.n] = t; }); } return TNAMES; }
function hnames(){ if(!HNAMES){ HNAMES = {}; SW_HANDICAPS.concat(window.SW_HANDICAPS_ZUS || []).forEach(function(h){ HNAMES[h.n] = h; }); } return HNAMES; }
function splitTop(s){ var out = [], d = 0, b = ""; for(var i = 0; i < s.length; i++){ var ch = s[i]; if(ch === "(") d++; if(ch === ")") d--; if(ch === "," && !d){ out.push(b.trim()); b = ""; } else b += ch; } if(b.trim()) out.push(b.trim()); return out; }
var REQC = {};
function parseReq(v){
  if(REQC[v]) return REQC[v];
  var T = splitTop(String(v || "")), G = [];
  for(var i = 0; i < T.length; i++){
    var t = T[i];
    if(/^entweder /.test(t)){ var g = [t.replace(/^entweder /, "")]; while(i + 1 < T.length && !/ oder /.test(T[i])){ i++; g.push(T[i]); } G.push(g.join(" oder ")); continue; }
    if(isTrait(t) && i + 1 < T.length && / oder /.test(T[i + 1]) && /W\d+\+?/.test(T[i + 1])){ G.push(t + " oder " + T[i + 1]); i++; continue; }
    G.push(t);
  }
  REQC[v] = G.map(function(g){
    var alts = g.split(/ oder /), die = null;
    alts.forEach(function(a){ var m = /W(\d+)\+?/.exec(a); if(m) die = +m[1]; });
    return {txt: g, alt: alts.map(function(a){ return condOf(a.trim(), die); })};
  });
  return REQC[v];
}
function condOf(a, die){
  var m;
  a = a.replace(/\s*\((Wurfwaffen|Bögen)\)/, "");
  if((m = /^(.+?) W(\d+)\+?$/.exec(a))) return {k: "w", n: m[1], d: (+m[2] - 2) / 2};
  if(/^Fertigkeit mit der gewählten Waffe/.test(a)){ m = /W(\d+)/.exec(a); return {k: "wx", n: ["Kämpfen", "Schießen", "Athletik"], d: m ? (+m[1] - 2) / 2 : 1}; }
  if(isTrait(a)) return {k: "w", n: a, d: die ? (die - 2) / 2 : 1};
  if((m = /^Arkaner Hintergrund \((.*)\)$/.exec(a))){
    var x = m[1]; if(x === "beliebig") return {k: "ah"};
    if((m = /^beliebig außer (.*)$/.exec(x))) return {k: "ah", no: m[1].split(/,\s*/)};
    return {k: "ah", l: x.split(/,\s*/)};
  }
  if((m = /^darf nicht das Talent (.+) haben$/.exec(a))) return {k: "nt", n: m[1]};
  if((m = /^(.+) und mindestens zwei weitere (\w+)talente$/.exec(a))) return {k: "cnt", n: m[1], cat: m[2], c: 3};
  if(a === "Anfänger (beliebig)") return {k: "ok"};
  if(/^Profi in/.test(a)) return {k: "t", n: "Profi"};
  if(/^Experte in/.test(a)) return {k: "t", n: "Experte"};
  if(/^maximaler möglicher Würfeltyp/.test(a)) return {k: "max"};
  if(MONSTER.indexOf(a) > -1) return {k: "v", n: a};
  if(a === "Lykanthropie") return {k: "v", n: "Werwolf"};
  if(/Mensch$/.test(a)) return {k: "v", n: "Menschen"};
  if(tnames()[a] || a === "Harrowed") return {k: "t", n: a};
  var hb = a.replace(/\s*\(.*$/, ""); if(hnames()[hb]) return {k: "h", n: hb};
  return {k: "ok"};
}
function condOk(c, F, q){
  switch(q.k){
    case "w": return traitIdx(c, F, q.n) >= q.d;
    case "wx": return q.n.some(function(n){ return traitIdx(c, F, n) >= q.d; });
    case "ah": var ah = ahName(c, F).replace(/\s*\((Horror|Fantasy|Science-Fiction)\)$/, ""); if(!ah) return false; if(q.l) return q.l.indexOf(ah) > -1; if(q.no) return q.no.indexOf(ah) < 0; return true;
    case "nt": return talenteVon(c, F).indexOf(q.n) < 0;
    case "cnt": var T = talenteVon(c, F); return T.indexOf(q.n) > -1 && T.filter(function(n){ var t = tnames()[n]; return t && t.k === q.cat; }).length >= q.c;
    case "t": return talenteVon(c, F).indexOf(q.n) > -1;
    case "h": return handicapsVon(c, F).some(function(n){ return n.replace(/\s*\(.*$/, "") === q.n; });
    case "v": return c.volk === q.n;
    case "max": return ATTR.some(function(a){ return di(c.a[a[1]]) >= aMax(F, a[1]); }) || c.sk.some(function(s){ return di(s.d) >= skMax(F, s.n); });
    default: return true;
  }
}
/* gibt null zurück, wenn erfüllt, sonst den Grund */
function warum(c, F, v, r){
  if(r != null && r > rangIdx(c)) return RAENGE[r];
  var G = parseReq(v);
  for(var i = 0; i < G.length; i++) if(!G[i].alt.some(function(q){ return condOk(c, F, q); })) return G[i].txt;
  return null;
}

function esc2(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"}[c]; }); }
function load(){ try{ DB = JSON.parse(localStorage.getItem(KEY) || "null"); }catch(e){} if(!DB || !DB.list) DB = {list: [], cur: ""}; }
function persist(){ try{ localStorage.setItem(KEY, JSON.stringify(DB)); }catch(e){} }
function uid(){ return "c" + Date.now().toString(36) + Math.floor(Math.random() * 1296).toString(36); }
function neu(){
  var c = {id: uid(), name: "", spieler: "", volk: "", eig: "", ep: 0, geld: "", tempo: 6, groesse: 0, ben: 3, wu: 0, er: 0, st: {}, bk: 0, bm: 0,
    a: {ges: "W4", kon: "W4", sta: "W4", ver: "W4", wil: "W4"}, sk: [], hi: [], ta: [], wa: [], ru: [], au: [], ma: [], ah: "", af: "", mp: "", mpa: "", sm: "", hg: "", no: "", vw: {}};
  ATTR.forEach(function(a){ SW_SKILLS.filter(function(s){ return s.g && s.a === a[0]; }).forEach(function(s){ c.sk.push({n: s.n, a: a[0], d: "W4"}); }); });
  return c;
}
function chr(){ return DB.list.filter(function(c){ return c.id === DB.cur; })[0]; }
function ens(){
  load();
  if(!DB.list.length){ var c = neu(); DB.list.push(c); DB.cur = c.id; persist(); }
  if(!chr()) DB.cur = DB.list[0].id;
  cur = chr();
}
/* ---------- Würfel & Rechnen ---------- */
function di(d){ d = String(d || "").toUpperCase().replace(/\s/g, ""); var i = DIE.indexOf(d); if(i > 0) return i; var m = /^W12\+(\d+)$/.exec(d); return m ? 5 + parseInt(m[1], 10) : 0; }
function halb(d){ var i = di(d); if(!i) return 0; if(i <= 5) return i + 1; return 6 + Math.floor((i - 5) / 2); }
function zahl(s){ var m = /-?\d+/.exec(String(s || "").replace("–", "-").replace("−", "-")); return m ? parseInt(m[0], 10) : 0; }
function kg(s){ var n = parseFloat(String(s == null ? "" : s).replace(/\./g, "").replace(",", ".")); return isNaN(n) ? 0 : n; }
function sk(n){ return cur.sk.filter(function(s){ return s.n === n; })[0]; }
function cost(c){
  var F = fx(c), at = 0, fp = 0;
  ATTR.forEach(function(a){ at += Math.max(0, di(c.a[a[1]]) - aStart(F, a[1])); });
  c.sk.forEach(function(s){
    var ai = di(c.a[(ATTR.filter(function(a){ return a[0] === s.a; })[0] || [0, "ges"])[1]]), idx = di(s.d), b = skStart(F, s.n);
    for(var k = b + 1; k <= idx; k++) fp += k <= ai ? 1 : 2;
  });
  return {at: at, fp: fp};
}
/* Aufbaupunkte: 5 Attribut-, 12 Fertigkeitspunkte, freie Talente; Rest aus Handicaps (max. 4) und Aufstiegen (je 2) */
function punkte(c){
  var F = fx(c), p = cost(c), hp = 0;
  c.hi.forEach(function(x){ if(x && x.n) hp += x.w === "S" ? 2 : 1; });
  var auf = Math.floor((parseInt(c.ep, 10) || 0) / 5), tal = c.ta.filter(function(t){ return t && t.n; }).length + (c.ah && !F.ah ? 1 : 0);
  var used = Math.max(0, p.at - 5) * 2 + Math.max(0, p.fp - 12) + Math.max(0, tal - (F.frei || 0)) * 2;
  return {at: p.at, fp: p.fp, hp: hp, auf: auf, tal: tal, frei: F.frei || 0, used: used, budget: Math.min(4, hp) + auf * 2};
}
function berechne(c){
  var k = sk("Kämpfen"), pa = 2 + halb(k && k.d), pb = 0, rp = 0, kopf = 0, last = 0, ks = c.a.kon;
  c.ru.forEach(function(r){
    if(!r.n) return; last += kg(r.gw);
    if(r.on === 0) return;
    pb += zahl(r.pa) > 0 ? zahl(r.pa) : 0;
    if(/torso/i.test(r.cov || "") || !r.cov){ if(zahl(r.pz) > rp && !/schild/i.test(r.n)) rp = zahl(r.pz); }
    if(/kopf/i.test(r.cov || "")) kopf = Math.max(kopf, zahl(r.pz));
  });
  var wp = 0; c.wa.forEach(function(w){ if(!w.n) return; last += kg(w.gw); var m = /Parade\s*([+–-]\d+)/i.exec(w.nt || ""); if(m) wp = Math.max(wp, zahl(m[1])); });
  c.au.forEach(function(a){ if(a.n) last += kg(a.gw); });
  var F = fx(c), gr = F.gr || 0, pz = rp + (F.pz || 0);
  return {parade: pa + pb + wp + (F.pa || 0), rob: 2 + halb(ks) + pz + gr + (F.rob || 0), pz: pz, kopf: kopf, last: last, grenze: LAST[c.a.sta] || "", ep: parseInt(c.ep, 10) || 0, tempo: tempo(F), sprint: sprint(F), gr: gr, fl: F.fl || 0};
}
function rang(ep){ var a = Math.floor(ep / 5); return RAENGE[Math.min(4, Math.floor(a / 4))]; }

/* ---------- Datenlisten (nur aktive Genre-Quellen) ---------- */
function vis(s){ return window.sqVis ? sqVis(s) : true; }
function badge(s){ return window.sqBadge ? sqBadge(s) : ""; }
function flatS(sets, need, mk){
  var out = [];
  sets.forEach(function(S){
    if(!S) return; var cols = S.cols || [], s = S.s ? (Array.isArray(S.s) ? S.s : [S.s]) : ["GRW"];
    if(!vis(s)) return;
    (S.g || []).forEach(function(g){ (g.r || []).forEach(function(r){ var o = mk(r, cols, S, g, s); if(o) out.push(o); }); });
  });
  return out;
}
function col(cols, r, n){ var i = cols.indexOf(n); return i < 0 ? "" : (r.c[i] == null ? "" : r.c[i]); }
function lWaffen(){
  var sets = [].concat(SW_WAFFEN, window.SW_WAFFEN_FAN || [], window.SW_WAFFEN_SF || [], window.SW_WAFFEN_HOR || [], window.SW_WAFFEN_SUP || []);
  return flatS(sets, 0, function(r, cols, S, g, s){
    if(cols.indexOf("Schaden") < 0 && cols.indexOf("PB-Geschosse") < 0) return null;
    return {n: r.c[0], sub: g.h || S.h, s: s, f: {n: r.c[0], rw: col(cols, r, "Reichweite").replace(/^—$/, ""), sd: col(cols, r, "Schaden").replace(/^—$/, "") || col(cols, r, "PB-Geschosse"), pb: col(cols, r, "PB").replace(/^—$/, ""), fr: col(cols, r, "FR").replace(/^—$/, ""),
      ms: col(cols, r, "Mindeststärke").replace(/^—$/, ""), gw: col(cols, r, "Gewicht (kg)") || col(cols, r, "Gewicht"), nt: r.n || ""}};
  });
}
function lRuestung(){
  var out = [], R = SW_RUESTUNG;
  function add(r, nmCols, g, s, grpH){
    var n = r.c[0], mc = /\(([^)]*)\)/.exec(n), cov = mc ? mc[1] : "";
    if(!cov){ var m2 = /Bedeckt\s+([^.]*)\./.exec(r.n || ""); if(m2) cov = m2[1]; }
    out.push({n: n, sub: grpH, s: s, f: Object.assign({n: n, cov: cov.replace(/Torso, Arme, Beine/, "Torso, Arme, Beine"), on: 1, nt: r.n || ""}, nmCols(r))});
  }
  R.s.forEach(function(S){ (S.g || []).forEach(function(g){ (g.r || []).forEach(function(r){ add(r, function(r){ return {pz: r.c[1], pa: "", ms: r.c[2], gw: r.c[3]}; }, g, ["GRW"], S.h); }); }); });
  (R.sh.g || []).forEach(function(g){ (g.r || []).forEach(function(r){ add(r, function(r){ return {pz: "", pa: r.c[1], ms: r.c[3], gw: r.c[4]}; }, g, ["GRW"], "Schilde"); }); });
  [].concat(window.SW_RUESTUNG_FAN || [], window.SW_RUESTUNG_SF || [], window.SW_RUESTUNG_SUP || []).forEach(function(S){
    if(!S.cols || !vis([S.s])) return; var cols = S.cols;
    var isP = cols.indexOf("Panzerung") > -1, isS = cols.indexOf("Parade") > -1; if(!isP && !isS) return;
    (S.g || []).forEach(function(g){ (g.r || []).forEach(function(r){
      add(r, function(r){ return {pz: isP ? col(cols, r, "Panzerung").replace("*", "").replace(/^—$/, "") : "", pa: isS ? col(cols, r, "Parade") : "", ms: col(cols, r, "Mindeststärke").replace(/^—$/, ""), gw: col(cols, r, "Gewicht (kg)")}; }, g, [S.s], S.h);
    }); });
  });
  return out;
}
function lAusr(){
  var out = [];
  (SW_AUSR_ALLG.sec || []).forEach(function(S){ S.r.forEach(function(r){ out.push({n: r[0], sub: S.h, s: ["GRW"], f: {n: r[0], gw: r[2] === "—" ? "" : r[2]}}); }); });
  if(gen("fan") && window.SW_FAN_AUSR) (SW_FAN_AUSR.allg || []).forEach(function(S){ S.r.forEach(function(r){ out.push({n: r[0], sub: S.h, s: ["FAN"], f: {n: r[0], gw: r[1]}}); }); });
  if(gen("sf") && window.SW_SF_GEAR) SW_SF_GEAR.forEach(function(S){ S.r.forEach(function(r){ out.push({n: r[0], sub: S.h, s: ["SF"], f: {n: r[0], gw: r[1]}}); }); });
  return out;
}
function liste(kind, ctx, own){
  var c = cur, F = fx(c), R = rangIdx(c), T = talenteVon(c, F), H = handicapsVon(c, F).map(function(n){ return n.replace(/\s*\(.*$/, ""); });
  if(kind === "volk") return allVoelker().filter(function(v){ return vis(v.s); }).map(function(v){ return {n: v.n, s: v.s, v: v}; });
  if(kind === "ha") return SW_HANDICAPS.filter(function(h){ return vis(h.s); }).concat((window.SW_HANDICAPS_ZUS || []).filter(function(h){ return vis(h.s); }))
    .filter(function(h){ return H.indexOf(h.n) < 0; })
    .map(function(h){ return {n: h.n, sub: h.w, s: h.s, h: h}; });
  if(kind === "ta") return SW_TALENTE.filter(function(t){ return vis(t.s) && !/^Arkaner Hintergrund$/.test(t.n) && (MEHRFACH[t.n] || T.indexOf(t.n) < 0 || t.n === own); })
    .map(function(t){ return {n: t.n, sub: t.k + (t.r != null ? ", " + RAENGE[t.r] : ""), s: t.s, why: warum(c, F, t.v, t.r)}; });
  if(kind === "sk"){ var ak = ahSkill(c, F);
    return SW_SKILLS.map(function(s){ return {n: s.n, a: s.a, s: ["GRW"], sub: s.g ? "Grund" : ""}; }).concat((window.SW_SKILLS_ZUS || []).filter(function(s){ return vis(s.s); }).map(function(s){ return {n: s.n, a: s.a, s: s.s}; }))
      .filter(function(s){ return s.a === ctx; }).map(function(s){ s.why = ARK[s.n] && s.n !== ak ? "Arkaner Hintergrund" : null; return s; }); }
  if(kind === "wa") return lWaffen().map(function(w){ w.warn = w.f.ms && di(w.f.ms) > di(c.a.sta) ? "Mindeststärke " + w.f.ms : null; return w; });
  if(kind === "ru") return lRuestung().map(function(w){ w.warn = w.f.ms && di(w.f.ms) > di(c.a.sta) ? "Mindeststärke " + w.f.ms : null; return w; });
  if(kind === "au") return lAusr();
  if(kind === "ah") return (window.SW_AH || []).filter(function(a){ return vis(a.s); }).map(function(a){ return {n: a.n, sub: a.f, s: a.s, ah: a, why: a.req ? warum(c, F, a.req) : null}; });
  if(kind === "ma"){ var ah = ahRec(ahName(c, F)), have = c.ma.filter(function(m){ return m && m.n; }).map(function(m){ return m.n; });
    if(!ahName(c, F)) return [];
    return (window.SW_MACHTE || []).filter(function(m){ return vis(m.s || ["GRW"]) && have.indexOf(m.n) < 0; })
      .map(function(m){ var why = m.r != null && m.r > R ? RAENGE[m.r] : ah && ah.av && ah.av.indexOf(m.n) < 0 ? "nicht für " + ah.n : null; return {n: m.n, sub: "Rang " + (m.r != null ? RAENGE[m.r] : ""), s: m.s || ["GRW"], m: m, why: why}; }); }
  return [];
}
function allVoelker(){ return window.allVoelker && window.allVoelker !== allVoelker ? window.allVoelker() : SW_VOELKER.concat(window.SW_VOELKER_FAN || [], window.SW_VOELKER_HOR || [], window.SW_VOELKER_SF || []); }

/* ---------- Bogen aufbauen ---------- */
function inp(arr, i, f, o){
  o = o || {}; var v = arr === "$" ? cur[f] : (cur[arr][i] || {})[f];
  return '<input ' + (o.cls ? 'class="' + o.cls + '" ' : "") + 'data-a="' + arr + '" data-i="' + i + '" data-f="' + f + '" ' + (o.pick ? 'data-pick="' + o.pick + '" ' : "") + (o.ctx ? 'data-ctx="' + o.ctx + '" ' : "") + (o.ph ? 'placeholder="' + o.ph + '" ' : "") + (o.tip ? 'title="' + esc2(o.tip) + '" ' : "") + (o.ro ? "readonly " : "") + 'value="' + esc2(v) + '" autocomplete="off" spellcheck="false">';
}
function top(id, lab, o){ o = o || {}; return '<div class="f' + (o.c ? " " + o.c : "") + '"><label>' + lab + '</label><input ' + (o.calc ? 'class="calc" readonly ' : "") + 'data-a="$" data-f="' + id + '" ' + (o.pick ? 'data-pick="' + o.pick + '" ' : "") + 'value="' + esc2(cur[id]) + '" autocomplete="off" spellcheck="false"' + (o.id ? ' id="' + o.id + '"' : "") + "></div>"; }
function rows(arr, fest){ var l = cur[arr], last = -1; l.forEach(function(x, i){ if(x && x.n) last = i; }); return Math.max(BASE[arr] - (fest || 0), last + 2); }
function fest(n, tag, w){ return '<div class="r vk"><span class="g"><input readonly value="' + esc2(n) + '"></span><span class="tag">' + tag + "</span>" + (w ? '<input class="bw1 c" readonly value="' + w + '">' : "") + "</div>"; }
function pips(key, n, rd){ var h = ""; for(var i = 1; i <= n; i++) h += '<i class="pip' + (rd ? " rd" : "") + (cur[key] >= i ? " on" : "") + '" data-pip="' + key + '" data-n="' + i + '"></i>'; return h; }
function sheet(){
  var c = cur, b = berechne(c), p = cost(c), h = "", AUS = "", F = fx(c), V = (window.SW_VOLK_FX || {})[c.volk] || {};
  h += '<div class="bkop"><img src="../assets/logos/savage-worlds.webp" alt=""><div class="tt">Charakter<i>bogen</i></div></div>';
  h += '<div class="binfo r1">' + top("name", "Name", {c: "n"}) + top("spieler", "Spieler") + "</div>";
  h += '<div class="binfo">' + top("volk", "Volk", {pick: "volk"}) + top("rang", "Rang", {calc: 1, id: "b-rang"}) + top("ep", "Erfahrung") + top("aufst", "Aufstiege", {calc: 1, id: "b-aufst"}) + top("geld", "Geld") + "</div>" +
    ((V.wahl || []).length ? '<div class="bwahl noprint">' + V.wahl.map(function(w, i){ var on = ((c.vw || {})[i]) | 0; return '<span class="bwl">' + esc2(w.n) + "</span>" + w.o.map(function(o, j){ return '<a data-vw="' + i + '" data-o="' + j + '" class="' + (j === on ? "on" : "") + '">' + esc2(o.l) + "</a>"; }).join(""); }).join('<i></i>') + "</div>" : "");
  AUS += '<div class="box"><h3>Ausrüstung<span class="cnt" id="b-last"></span></h3><div class="lst two">';
  var i, na = rows("au"); if(na % 2) na++;
  for(i = 0; i < na; i++) AUS += '<div class="r"><span class="g">' + inp("au", i, "n", {pick: "au"}) + '</span><span class="c" style="width:34px">' + inp("au", i, "gw", {cls: "num sm"}) + "</span></div>";
  AUS += "</div></div>";
  h += '<div class="bmain"><div class="bcol"><div class="box"><h3>Eigenschaften<span class="cnt" id="b-cnt"></span></h3>';
  ATTR.forEach(function(a){
    h += '<div class="agrp"><div class="ahd"><b>' + a[0] + '</b><input class="die" readonly data-die="a" data-f="' + a[1] + '" value="' + c.a[a[1]] + '"></div>';
    var mine = c.sk.map(function(s, i){ return {s: s, i: i}; }).filter(function(x){ return x.s.a === a[0]; }), n = Math.max(a[2], mine.length + 1);
    for(var k = 0; k < n; k++){
      var x = mine[k];
      if(x) h += '<div class="srow"><input class="sn" data-a="sk" data-i="' + x.i + '" data-f="n" data-pick="sk" data-ctx="' + a[0] + '" value="' + esc2(x.s.n) + '" autocomplete="off" spellcheck="false"><input class="die" readonly data-die="s" data-i="' + x.i + '" value="' + x.s.d + '"></div>';
      else h += '<div class="srow"><input class="sn" data-new="sk" data-pick="sk" data-ctx="' + a[0] + '" value="" autocomplete="off" spellcheck="false"><input class="die" readonly data-die="n" data-ctx="' + a[0] + '" value=""></div>';
    }
    h += "</div>";
  });
  h += "</div>" + AUS + "</div>";
  /* rechte Spalte */
  h += '<div class="bcol"><div class="box"><div class="bstat">' +
    '<div><span class="cap">Tempo</span><input class="calc" readonly id="b-tempo" value="' + b.tempo + '"><small id="b-sprint">Sprint ' + b.sprint + (b.fl ? " · Flug " + b.fl : "") + '</small></div>' +
    '<div><span class="cap">Parade</span><input class="calc" readonly id="b-par" value="' + b.parade + '"><small>&nbsp;</small></div>' +
    '<div><span class="cap">Robustheit</span><input class="calc" readonly id="b-rob" value="' + b.rob + (b.pz ? " (" + b.pz + ")" : "") + '"><small>Panzerung</small></div>' +
    '<div><span class="cap">Größe</span><input class="calc" readonly id="b-gr" value="' + (b.gr > 0 ? "+" + b.gr : b.gr < 0 ? "–" + (-b.gr) : "0") + '"><small>&nbsp;</small></div></div>' +
    '<div class="bstat2"><div><span class="cap">Bennys</span><div class="pips">' + pips("bk", 0) + '<input style="width:36px;text-align:center;font:700 18px Oswald" data-a="$" data-f="ben" value="' + esc2(c.ben) + '"></div></div>' +
    '<div><span class="cap">Wunden</span><div class="pips">' + pips("wu", 3) + '<span class="pl">KU</span></div></div>' +
    '<div><span class="cap">Erschöpfung</span><div class="pips">' + pips("er", 2) + '<span class="pl">KU</span></div></div></div>' +
    '<div class="bstat2" style="grid-template-columns:1fr"><div style="min-height:0;padding:3px 7px 4px"><div class="pips" style="margin:0;gap:12px">' +
    ["Angeschlagen", "Abgelenkt", "Verwundbar"].map(function(s){ return '<span style="display:inline-flex;gap:4px;align-items:center"><i class="pip' + (c.st[s] ? " on" : "") + '" data-pip="st" data-n="' + s + '"></i><span class="pl">' + s + "</span></span>"; }).join("") + "</div></div></div></div>";
  var hp = 0; c.hi.forEach(function(x){ if(x && x.n) hp += x.w === "S" ? 2 : 1; });
  h += '<div class="box"><h3>Handicaps<span class="cnt" id="b-hp">' + hp + " / 4 Punkte</span></h3><div class=\"lst\">";
  (F.ha || []).forEach(function(x){ h += fest(x, "Volk", /\(Schwer/.test(x) || (hnames()[x.replace(/\s*\(.*$/, "")] || {}).w === "schwer" ? "S" : "L"); });
  for(var i = 0, n = rows("hi", (F.ha || []).length); i < n; i++) h += '<div class="r"><span class="g">' + inp("hi", i, "n", {pick: "ha"}) + '</span><input class="bw1 c" readonly data-w="' + i + '" title="leicht / schwer" value="' + esc2((c.hi[i] || {}).n ? ((c.hi[i] || {}).w || "L") : "") + '"></div>';
  h += "</div></div>";
  var fT = (F.ta || []).map(function(x){ return [x, "Volk"]; }), ahn = ahName(c, F);
  if(ahn) fT.push(["Arkaner Hintergrund (" + ahn + ")", F.ah ? "Volk" : "AH"]);
  h += '<div class="box"><h3>Talente<span class="cnt" id="b-tal"></span></h3><div class="lst">';
  fT.forEach(function(x){ h += fest(x[0], x[1]); });
  for(i = 0, n = rows("ta", fT.length); i < n; i++){ var tt = c.ta[i] || {}, wy = tt.n && tnames()[tt.n] ? warum(c, F, tnames()[tt.n].v, tnames()[tt.n].r) : null;
    h += '<div class="r"><span class="g">' + inp("ta", i, "n", {pick: "ta", cls: wy ? "warn" : "", tip: wy ? "Voraussetzung: " + wy : ""}) + "</span></div>"; }
  h += "</div></div>";
  h += '<div class="box"><h3>Waffen</h3><div class="lst"><div class="r hd"><span class="g">Waffe</span><span class="c" style="width:48px">Reichw.</span><span class="c" style="width:58px">Schaden</span><span class="c" style="width:22px">PB</span><span class="c" style="width:22px">FR</span><span class="c" style="width:34px">MSt</span></div>';
  (F.wa || []).forEach(function(x){ h += '<div class="r vk"><span class="g"><input readonly value="' + esc2(x[0]) + '"></span><span class="c" style="width:48px"><input class="num sm" readonly value="Nah"></span><span class="c" style="width:58px"><input class="num" readonly value="' + esc2(x[1].replace(/^Stä/, c.a.sta)) + '"></span><span class="c" style="width:22px"><input class="num sm" readonly value="' + esc2(x[2]) + '"></span><span class="c" style="width:22px"></span><span class="c" style="width:34px"></span></div>'; });
  for(i = 0, n = rows("wa", (F.wa || []).length); i < n; i++){
    var w = c.wa[i] || {}, sd = w.sd || "", ds = /^Stä/.test(sd) ? sd.replace(/^Stä/, c.a.sta) : sd;
    h += '<div class="r"><span class="g">' + inp("wa", i, "n", {pick: "wa"}) + '</span><span class="c" style="width:48px">' + inp("wa", i, "rw", {cls: "num sm"}) + '</span><span class="c" style="width:58px"><input class="num" data-a="wa" data-i="' + i + '" data-f="sd" data-sd="1" value="' + esc2(ds) + '"></span><span class="c" style="width:22px">' + inp("wa", i, "pb", {cls: "num sm"}) + '</span><span class="c" style="width:22px">' + inp("wa", i, "fr", {cls: "num sm"}) + '</span><span class="c" style="width:34px">' + inp("wa", i, "ms", {cls: "num sm" + (di(w.ms) > di(c.a.sta) && w.ms ? " warn" : "")}) + "</span></div>";
  }
  h += "</div></div>";
  h += '<div class="box"><h3>Rüstung &amp; Schilde<span class="cnt" id="b-kopf"></span></h3><div class="lst"><div class="r hd"><span class="c" style="width:17px"></span><span class="g">Gegenstand</span><span class="c" style="width:64px">Bereich</span><span class="c" style="width:26px">Pz</span><span class="c" style="width:26px">Par</span><span class="c" style="width:34px">MSt</span></div>';
  for(i = 0, n = rows("ru"); i < n; i++){
    var r = c.ru[i] || {};
    h += '<div class="r"><span class="c" style="width:17px">' + (r.n ? '<i class="pip' + (r.on === 0 ? "" : " on") + '" data-pip="ru" data-n="' + i + '"></i>' : "") + '</span><span class="g">' + inp("ru", i, "n", {pick: "ru"}) + '</span><span class="c" style="width:64px">' + inp("ru", i, "cov", {cls: "sm"}) + '</span><span class="c" style="width:26px">' + inp("ru", i, "pz", {cls: "num"}) + '</span><span class="c" style="width:26px">' + inp("ru", i, "pa", {cls: "num"}) + '</span><span class="c" style="width:34px">' + inp("ru", i, "ms", {cls: "num sm" + (r.ms && di(r.ms) > di(c.a.sta) ? " warn" : "")}) + "</span></div>";
  }
  h += "</div></div>";
  h += "</div></div>";
  /* unten */
  h += '<div class="bbot"><div class="box bmach"><h3>Arkane Hintergründe &amp; Mächte</h3><div class="top">' + top("ah", "Arkaner Hintergrund", {pick: "ah"}) + top("af", "Arkane Fertigkeit") + top("mp", "Machtpunkte") + top("sm", "Startmächte") + '</div><div class="lst"><div class="r hd"><span class="g">Macht</span><span class="c" style="width:34px">MP</span><span class="c" style="width:110px">Reichweite</span><span class="c" style="width:90px">Wirkungsdauer</span><span class="c" style="width:230px">Anmerkung</span></div>';
  for(i = 0, n = rows("ma"); i < n; i++) h += '<div class="r"><span class="g">' + inp("ma", i, "n", {pick: "ma"}) + '</span><span class="c" style="width:34px">' + inp("ma", i, "mp", {cls: "num"}) + '</span><span class="c" style="width:110px">' + inp("ma", i, "rw", {cls: "sm"}) + '</span><span class="c" style="width:90px">' + inp("ma", i, "wd", {cls: "sm"}) + '</span><span class="c" style="width:230px">' + inp("ma", i, "nt", {cls: "sm"}) + "</span></div>";
  h += "</div></div>";
  h += '<div class="bnot"><div class="box"><h3>Volkseigenarten &amp; Hintergrund</h3><textarea data-a="$" data-f="hg" rows="4">' + esc2(c.hg) + '</textarea></div><div class="box"><h3>Notizen</h3><textarea data-a="$" data-f="no" rows="4">' + esc2(c.no) + "</textarea></div></div></div>";
  h += '<div class="bfoot"><span>Savage Worlds Abenteuer-Edition</span><span>Spielleitertool</span></div>';
  return h;
}
function bar(){
  var chips = DB.list.map(function(c){ return '<a class="' + (c.id === DB.cur ? "on" : "") + '" data-sel="' + c.id + '">' + esc2(c.name || "Neuer Charakter") + "</a>"; }).join("");
  return '<div class="bgbar noprint"><div class="ch">' + chips + '<a class="neu" id="bgNeu">+ Neu</a></div><div class="act"><button id="bgDup">Kopie</button><button id="bgDel">Löschen</button><button id="bgEx">JSON ↓</button><button id="bgIm">JSON ↑</button><button id="bgPr">Drucken</button><button id="bgPdf">PDF</button></div><input type="file" id="bgFile" accept=".json,application/json" hidden></div>';
}
function bogenPage(){
  ens();
  APP.innerHTML = '<div class="bgwrap">' + bar() + '<div class="bstatus noprint" id="bStatus"></div><div class="sheetwrap"><div class="bsheet" id="bsheet">' + sheet() + "</div></div></div>";
  calc(); fit(); wire();
}
function neuAufbau(){ var y = window.scrollY; var s = document.getElementById("bsheet"); s.innerHTML = sheet(); calc(); window.scrollTo(0, y); }
function calc(){
  var c = cur, b = berechne(c), p = cost(c), $ = function(i){ return document.getElementById(i); };
  if($("b-rang")) $("b-rang").value = rang(b.ep);
  if($("b-aufst")) $("b-aufst").value = Math.floor(b.ep / 5);
  if($("b-par")) $("b-par").value = b.parade;
  if($("b-rob")) $("b-rob").value = b.rob + (b.pz ? " (" + b.pz + ")" : "");
  var P = punkte(c), cn = $("b-cnt"); if(cn){ cn.innerHTML = "Attr. " + p.at + "/5 · Fert. " + p.fp + "/12"; cn.className = "cnt" + (P.used > P.budget ? " ov" : " ok"); }
  if($("b-tal")) $("b-tal").textContent = P.frei ? P.frei + " frei" : "";
  var st = $("bStatus"); if(st){ var rest = P.budget - P.used, F2 = fx(c);
    st.innerHTML = '<span>Rang <b>' + RAENGE[rangIdx(c)] + "</b></span>" +
      '<span class="' + (p.at > 5 ? "x" : "") + '">Attribute <b>' + p.at + "/5</b></span>" +
      '<span class="' + (p.fp > 12 ? "x" : "") + '">Fertigkeiten <b>' + p.fp + "/12</b></span>" +
      '<span class="' + (P.tal > P.frei ? "x" : "") + '">Talente <b>' + P.tal + (P.frei ? " (" + P.frei + " frei)" : "") + "</b></span>" +
      '<span>Handicaps <b>' + P.hp + "/4</b></span>" + (P.auf ? "<span>Aufstiege <b>" + P.auf + "</b></span>" : "") +
      '<span class="sum ' + (rest < 0 ? "ov" : rest > 0 ? "frei" : "ok") + '">' + (rest < 0 ? "Fehlen " + (-rest) : rest > 0 ? "Offen " + rest : "Ausgeglichen") + "</span>"; }
  var hp = 0; c.hi.forEach(function(x){ if(x && x.n) hp += x.w === "S" ? 2 : 1; }); if($("b-hp")){ $("b-hp").textContent = hp + " / 4 Punkte"; $("b-hp").className = "cnt" + (hp > 4 ? " ov" : ""); }
  if($("b-kopf")) $("b-kopf").textContent = b.kopf ? "Kopf " + b.kopf : "";
  if($("b-last")){ var l = $("b-last"); l.textContent = "Last " + (Math.round(b.last * 10) / 10).toString().replace(".", ",") + (b.grenze ? " / " + b.grenze : "") + " kg"; var over = b.grenze && b.last > kg(b.grenze); l.className = "cnt" + (over ? " ov" : ""); }
}
function fit(){
  var w = document.querySelector(".sheetwrap"); if(!w) return; var s = document.getElementById("bsheet");
  var avail = window.innerWidth - 32; s.style.setProperty("--bz", avail < 794 ? (avail / 794).toFixed(3) : 1);
}
/* ---------- Auswahl-Popup ---------- */
var pop = null, popI = -1;
function popClose(){ if(pop){ pop.remove(); pop = null; } }
function popAt(el, h){
  popClose(); pop = document.createElement("div"); pop.className = "bpop" + (h.cls ? " " + h.cls : ""); pop.innerHTML = h.html; document.body.appendChild(pop);
  var r = el.getBoundingClientRect(), x = r.left + window.scrollX, y = r.bottom + window.scrollY + 2;
  if(x + pop.offsetWidth > window.scrollX + window.innerWidth - 8) x = window.scrollX + window.innerWidth - 8 - pop.offsetWidth;
  if(r.bottom + 300 > window.innerHeight && r.top > 300) y = r.top + window.scrollY - Math.min(300, pop.offsetHeight) - 2;
  pop.style.left = Math.max(4, x) + "px"; pop.style.top = y + "px"; pop.style.minWidth = Math.max(200, r.width) + "px";
}
var pickList = [], pickEl = null;
function pickOpen(el, fresh){
  if(fresh || el._orig == null) el._orig = el.value;
  var kind = el.dataset.pick, q = el.value.trim().toLowerCase(), L = liste(kind, el.dataset.ctx, el.dataset.a && el.dataset.i != null ? (cur[el.dataset.a][el.dataset.i] || {}).n : "");
  var used = {}; if(kind === "sk") cur.sk.forEach(function(s){ used[s.n] = 1; });
  if(el.dataset.new !== "sk" && kind === "sk") q = "";
  var own = (el.dataset.a && el.dataset.i != null) ? (cur[el.dataset.a][el.dataset.i] || {}).n : "";
  if(q === String(el._orig || "").trim().toLowerCase()) q = "";
  var M = L.filter(function(x){ return !used[x.n] && (!q || x.n.toLowerCase().indexOf(q) > -1); }), nein = M.filter(function(x){ return x.why; }).length;
  pickList = (pickAll ? M.slice().sort(function(a, b){ return (a.why ? 1 : 0) - (b.why ? 1 : 0); }) : M.filter(function(x){ return !x.why; })).slice(0, 120); pickEl = el; popI = -1;
  var h = pickList.map(function(x, i){ return '<div data-i="' + i + '"' + (x.why ? ' class="nein"' : "") + "><span>" + esc2(x.n) + badge(x.s) + "</span><small" + (x.warn ? ' class="wn"' : "") + ">" + esc2(x.why || x.warn || x.sub || "") + "</small></div>"; }).join("") ||
    (kind === "ma" && !ahName(cur, fx(cur)) ? '<p class="leer">Erst einen Arkanen Hintergrund wählen</p>' : '<p class="leer">Eigenen Eintrag mit Enter übernehmen</p>');
  if(nein) h += '<p class="alle" data-alle="1">' + (pickAll ? "Nur passende" : "Alle zeigen (+" + nein + ")") + "</p>";
  popAt(el, {html: h});
}
function pickTake(x){
  var el = pickEl; if(!el) return; var kind = el.dataset.pick;
  if(kind === "sk"){
    if(el.dataset.new === "sk") cur.sk.push({n: x.n, a: el.dataset.ctx, d: "W4"}); else cur.sk[el.dataset.i].n = x.n;
  } else if(el.dataset.a === "$"){
    var alt = fx(cur);
    if(kind === "volk"){ var oldV = cur.volk; cur.volk = x.n; cur.vw = {}; wechsle(cur, alt, fx(cur));
      if(x.v){ var vorher = oldV ? (allVoelker().filter(function(v){ return v.n === oldV; })[0] || {}) : null, altTxt = vorher && vorher.e ? vorher.e.map(function(e){ return e[0]; }).join(", ") : "";
        if(!cur.hg || cur.hg === altTxt) cur.hg = (x.v.e || []).map(function(e){ return e[0]; }).join(", "); } }
    else cur[el.dataset.f] = x.n;
    if(kind === "ah" && x.ah){ cur.af = x.ah.f || ""; cur.mp = x.ah.mp || ""; cur.sm = x.ah.sm || "";
      var an = (x.ah.f || "").replace(/\s*\((Verstand|Willenskraft|Geschicklichkeit|Stärke|Konstitution)\)$/, ""), aa = (/\((Verstand|Willenskraft|Geschicklichkeit|Stärke|Konstitution)\)$/.exec(x.ah.f || "") || [0, "Verstand"])[1];
      if(an && !cur.sk.some(function(s){ return s.n === an; })) cur.sk.push({n: an, a: aa, d: "W4"}); }
  } else {
    var arr = cur[el.dataset.a], i = +el.dataset.i; while(arr.length <= i) arr.push({});
    if(kind === "ha") arr[i] = {n: x.n, w: /^schwer$/.test((x.h && x.h.w) || "") ? "S" : "L"};
    else if(kind === "ma") arr[i] = {n: x.n, mp: x.m.mp || "", rw: x.m.rw || "", wd: x.m.wd || "", nt: ""};
    else if(x.f) arr[i] = Object.assign({}, x.f); else arr[i] = {n: x.n};
  }
  persist(); popClose(); neuAufbau();
}
function dieOpen(el){
  var f = el.dataset.die, cu = f === "a" ? cur.a[el.dataset.f] : f === "s" ? cur.sk[el.dataset.i].d : "", F = fx(cur), lo = 1, hi = 5;
  if(f === "a"){ lo = aStart(F, el.dataset.f); hi = aMax(F, el.dataset.f); }
  else if(f === "s"){ var sn = cur.sk[el.dataset.i].n; lo = Math.max(1, skStart(F, sn)); hi = skMax(F, sn); }
  var h = DIE.slice(lo, hi + 1).map(function(d){ return '<span class="' + (d === cu ? "on" : "") + '" data-d="' + d + '">' + d + "</span>"; }).join("") + (f === "s" && !skStart(F, cur.sk[el.dataset.i].n) ? '<span data-d="">✕</span>' : "");
  popAt(el, {html: h, cls: "dpop"}); pop._el = el;
}
function dieTake(d){
  var el = pop._el, f = el.dataset.die;
  if(f === "a") cur.a[el.dataset.f] = d;
  else if(f === "s"){ var s = cur.sk[el.dataset.i]; if(!d && !KERN[s.n]) cur.sk.splice(el.dataset.i, 1); else s.d = d || "W4"; }
  else if(f === "n" && d){ /* Fertigkeit ohne Name: nichts */ }
  persist(); popClose(); neuAufbau();
}
/* ---------- Ereignisse ---------- */
function wire(){
  var A = document.getElementById("app"); if(A._bw) return; A._bw = 1;
  A.addEventListener("input", function(e){
    var el = e.target; if(!cur || !el.dataset) return;
    if(el.dataset.a === "$"){ if(el.dataset.f !== "volk") cur[el.dataset.f] = el.value; if(el.dataset.f === "name"){ var a = document.querySelector('.bgbar a[data-sel="' + DB.id + '"]'); var on = document.querySelector(".bgbar a.on"); if(on) on.textContent = el.value || "Neuer Charakter"; } }
    else if(el.dataset.a && el.dataset.i != null){ var arr = cur[el.dataset.a]; while(arr.length <= +el.dataset.i) arr.push({}); arr[el.dataset.i][el.dataset.f] = el.value; }
    if(el.dataset.pick) pickOpen(el);
    persist(); calc();
  });
  A.addEventListener("change", function(e){
    var el = e.target; if(!el.dataset || el.dataset.sd == null && el.dataset.f == null) return;
    if(el.dataset.a && el.dataset.a !== "$" && el.dataset.a !== "sk" && el.dataset.f === "n" && !el.value.trim()){ cur[el.dataset.a][el.dataset.i] = {}; persist(); neuAufbau(); return; }
    if(el.dataset.a === "sk" && el.dataset.f === "n" && !el.value.trim() && !KERN[cur.sk[el.dataset.i].n]){ cur.sk.splice(el.dataset.i, 1); persist(); neuAufbau(); return; }
    if(el.dataset.sd != null || el.dataset.f === "n" || el.dataset.f === "ms" || el.dataset.f === "ep") neuAufbau();
  });
  A.addEventListener("focusin", function(e){ var el = e.target; if(el.dataset && el.dataset.pick){ if(pickEl !== el) pickAll = false; pickOpen(el, true); } });
  A.addEventListener("keydown", function(e){
    var el = e.target; if(!el.dataset || !el.dataset.pick) return;
    var items = pop ? [].slice.call(pop.querySelectorAll("div[data-i]")) : [];
    if(e.key === "ArrowDown" || e.key === "ArrowUp"){ e.preventDefault(); e.stopPropagation(); if(!items.length) return; popI = (popI + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length; items.forEach(function(d, i){ d.classList.toggle("on", i === popI); }); items[popI].scrollIntoView({block: "nearest"}); }
    else if(e.key === "Enter"){ e.preventDefault(); if(popI > -1 && pickList[popI]) pickTake(pickList[popI]); else { var v = el.value.trim(); if(!v) return; if(pickList.length === 1 && pickList[0].n.toLowerCase() === v.toLowerCase()) pickTake(pickList[0]); else { pickTake({n: v}); } } }
    else if(e.key === "Escape"){ e.stopPropagation(); popClose(); }
  }, true);
  document.addEventListener("mousedown", function(e){
    if(!pop) return;
    var al = e.target.closest ? e.target.closest(".bpop [data-alle]") : null;
    if(al){ e.preventDefault(); pickAll = !pickAll; pickOpen(pickEl); return; }
    var d = e.target.closest ? e.target.closest(".bpop div[data-i]") : null;
    if(d){ e.preventDefault(); pickTake(pickList[+d.dataset.i]); return; }
    var s = e.target.closest ? e.target.closest(".bpop span[data-d]") : null;
    if(s){ e.preventDefault(); dieTake(s.dataset.d); return; }
    if(!e.target.closest(".bpop") && !(e.target.dataset && (e.target.dataset.pick || e.target.dataset.die))) popClose();
  });
  A.addEventListener("click", function(e){
    var el = e.target; if(!cur) return;
    if(el.dataset && el.dataset.die) { dieOpen(el); return; }
    if(el.dataset && el.dataset.vw != null){ var alt = fx(cur); cur.vw = cur.vw || {}; cur.vw[el.dataset.vw] = +el.dataset.o; wechsle(cur, alt, fx(cur)); persist(); neuAufbau(); return; }
    if(el.dataset && el.dataset.w != null){ var i = +el.dataset.w; if(cur.hi[i] && cur.hi[i].n){ cur.hi[i].w = cur.hi[i].w === "S" ? "L" : "S"; persist(); neuAufbau(); } return; }
    if(el.dataset && el.dataset.pip){
      var k = el.dataset.pip, n = el.dataset.n;
      if(k === "st") cur.st[n] = cur.st[n] ? 0 : 1; else if(k === "ru"){ var r = cur.ru[+n]; r.on = r.on === 0 ? 1 : 0; } else { var v = +n; cur[k] = cur[k] === v ? v - 1 : v; }
      persist(); neuAufbau(); return;
    }
    var sel = el.closest && el.closest("[data-sel]"); if(sel){ DB.cur = sel.dataset.sel; persist(); bogenPage(); return; }
    if(el.id === "bgNeu"){ var c = neu(); DB.list.push(c); DB.cur = c.id; persist(); bogenPage(); }
    else if(el.id === "bgDup"){ var d = JSON.parse(JSON.stringify(cur)); d.id = uid(); d.name = (d.name || "Charakter") + " (Kopie)"; DB.list.push(d); DB.cur = d.id; persist(); bogenPage(); }
    else if(el.id === "bgDel"){ if(confirm("Charakter „" + (cur.name || "Neuer Charakter") + "“ löschen?")){ DB.list = DB.list.filter(function(x){ return x.id !== cur.id; }); DB.cur = ""; persist(); bogenPage(); } }
    else if(el.id === "bgEx") exportJ();
    else if(el.id === "bgIm") document.getElementById("bgFile").click();
    else if(el.id === "bgPr") window.print();
    else if(el.id === "bgPdf") pdf(el);
  });
  A.addEventListener("change", function(e){
    if(e.target.id !== "bgFile" || !e.target.files[0]) return;
    var fr = new FileReader(); fr.onload = function(){
      try{ var d = JSON.parse(fr.result), L = Array.isArray(d) ? d : (d.list || [d]);
        L.forEach(function(c){ if(!c || typeof c !== "object") return; var n = Object.assign(neu(), c); n.id = uid(); DB.list.push(n); DB.cur = n.id; });
        persist(); bogenPage(); }catch(x){ alert("Die Datei konnte nicht gelesen werden."); }
    }; fr.readAsText(e.target.files[0]);
  });
  window.addEventListener("resize", fit);
  window.addEventListener("scroll", function(){ if(pop && pop._el === undefined) popClose(); }, {passive: true});
}
function exportJ(){
  var b = new Blob([JSON.stringify(cur, null, 1)], {type: "application/json"}), a = document.createElement("a");
  a.href = URL.createObjectURL(b); a.download = "Savage Worlds – " + (cur.name || "Charakter") + ".json"; document.body.appendChild(a); a.click(); setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); }, 3000);
}
function pdf(btn){
  if(!window.FillPDF) return; popClose();
  var s = document.getElementById("bsheet"), z = s.style.getPropertyValue("--bz");
  FillPDF.make(s, {name: "Savage Worlds – " + (cur.name || "Charakterbogen"), knopf: btn, scale: 2.5, marks: [[".pip", "on", "x"]], before: function(){ s.style.setProperty("--bz", 1); s.style.zoom = 1; }, after: function(){ s.style.zoom = ""; }});
}
SWP["bogen/"] = bogenPage; window.bogenPage = bogenPage;
})();
