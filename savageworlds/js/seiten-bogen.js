/* Savage Worlds – interaktiver Charakterbogen (#bogen). A4 hoch. Mehrere Charaktere lokal (localStorage), JSON-Export/-Import, ausfüllbares PDF (FillPDF), Druck. */
"use strict";
(function(){
var KEY = "sw_bogen_v1";
var DIE = ["", "W4", "W6", "W8", "W10", "W12", "W12+1", "W12+2", "W12+3", "W12+4"];
var ATTR = [["Geschicklichkeit", "ges", 5], ["Konstitution", "kon", 2], ["Stärke", "sta", 2], ["Verstand", "ver", 6], ["Willenskraft", "wil", 4]];
var KERN = {"Allgemeinwissen": 1, "Athletik": 1, "Heimlichkeit": 1, "Überreden": 1, "Wahrnehmung": 1};
var BASE = {hi: 3, ta: 7, wa: 4, ru: 3, au: 10, ma: 4, sp: 4};
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
/* Wirkungen von Talenten und Handicaps auf die Werte */
var TFX = {"Flink": {t: 2, sp: 1}, "Kräftig": {gr: 1, str: 1}, "Raufbold": {rob: 1}, "Schläger": {rob: 1}, "Block": {pa: 1}, "Harter Block": {pa: 1}, "Waffenmeister": {pa: 1}, "Meister aller Waffen": {pa: 1},
  "Glück": {ben: 1}, "Großes Glück": {ben: 1}, "Machtpunkte": {mpx: 5}, "Neue Mächte": {mz: 2}, "Zäh wie Leder": {wm: 1}, "Zäher als Leder": {wm: 1}, "Schmerzresistenz": {wig: 1}, "Stärkere Schmerzresistenz": {wig: 1}};
var HFX = {"Alt": {S: {t: -1, sp: -1, spts: 5}}, "Fettleibig": {L: {gr: 1, t: -1, sps: "W4", str: -1}}, "Klein": {L: {gr: -1}}, "Langsam": {L: {t: -1, sp: -1}, S: {t: -2, sp: -1}}, "Pech": {S: {ben: -1}},
  "Jung": {L: {apts: -1, spts: -2, ben: 1}, S: {apts: -2, spts: -2, ben: 2}}};
function hBase(n){ return String(n || "").replace(/\s*\(.*$/, ""); }
function fx(c){
  var b = (window.SW_VOLK_FX || {})[c.volk] || {}, e = {a: {}, sk: {}, mx: {}, prof: {}};
  mergeFx(e, Object.assign({}, b, {wahl: undefined}));
  delete e.wahl;
  (b.wahl || []).forEach(function(w, i){ var o = w.o[((c.vw || {})[i]) | 0] || w.o[0]; mergeFx(e, o.e); });
  var ah = c.ah || e.ah || "", tl = c.ta.filter(function(t){ return t && t.n; }).map(function(t){ return t.n; }).concat(e.ta || [], ah ? ahFx(ah).ta : []);
  tl.forEach(function(n){ if(TFX[n]) mergeFx(e, TFX[n]); });
  c.ta.forEach(function(t){ if(t && /^(Profi|Experte|Meister)$/.test(t.n) && t.w) e.prof[t.w] = (e.prof[t.w] || 0) + (t.n === "Profi" ? 1 : 1); });
  c.hi.forEach(function(h){ if(!h || !h.n || h.ab === 1) return; var x = HFX[hBase(h.n)], w = h.ab === "L" ? "L" : h.w; if(x) mergeFx(e, x[w === "S" ? "S" : "L"] || x.S || x.L); });
  (e.ha || []).concat(ah ? ahFx(ah).ha : []).forEach(function(n){ var x = HFX[hBase(n)]; if(x) mergeFx(e, x[/Schwer/.test(n) ? "S" : "L"] || x.S || x.L); });
  return e;
}
function aStart(F, k){ return 1 + (F.a[k] || 0); }
function aMax(F, k){ var an = (ATTR.filter(function(a){ return a[1] === k; })[0] || [""])[0]; return (F.mx[k] || 5 + Math.max(0, F.a[k] || 0)) + ((F.prof || {})[an] || 0); }
function skStart(F, n){ return (KERN[n] && (F.ohne || []).indexOf(n) < 0 ? 1 : 0) + (F.sk[n] || 0); }
function skMax(F, n){ return 5 + (F.sk[n] || 0) + ((F.prof || {})[n] || 0); }
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
function AHL(){ return (window.SW_AH || []).concat(window.SW_AH_DL || []); }
function MA(){ return (window.SW_MACHTE || []).concat(window.SW_MACHTE_DL || []); }
function HAL(){ return SW_HANDICAPS.concat(window.SW_HANDICAPS_ZUS || [], window.SW_HANDICAPS_DL || []); }
function ahRec(n){ return AHL().filter(function(a){ return a.n === n; })[0]; }
function ahSkill(c, F){ var a = ahRec(ahName(c, F)); return a && a.f ? a.f.replace(/\s*\((Verstand|Willenskraft|Geschicklichkeit|Stärke|Konstitution)\)$/, "") : ""; }
/* Sonderregeln der Arkanen Hintergründe (aus den Buchtexten abgeleitet) */
function elemente(c){ return Array.isArray(c.ahw) ? c.ahw.slice() : c.ahw ? [c.ahw] : []; }
function elemMax(c){ return 1 + c.ta.filter(function(t){ return t && t.n === "Elementarmeister"; }).length; }
var ELEM = ["Feuer", "Wasser", "Erde", "Luft"], NUMW = {eine: 1, einen: 1, zwei: 2, drei: 3, vier: 4, fünf: 5};
var AHC = {};
function ahFx(n){
  if(!n) return {alias: [], ha: [], ta: [], start: [], startN: 0, rang: {}, nur: {}, elem: false, erlaubt: null};
  if(AHC[n]) return AHC[n];
  var a = ahRec(n) || {}, o = {alias: [], ha: [], ta: [], start: [], startN: 0, rang: {}, nur: {}, elem: false, erlaubt: null};
  (a.sp || []).forEach(function(x){
    var t = x[0] + ": " + x[1], m;
    if((m = /dürfen Talente nehmen, die (?:den|einen) (beliebigen )?Arkanen Hintergrund(?: \(([^)]+)\))? voraussetzen/.exec(t))) o.alias.push(m[1] ? "*" : m[2]);
    var re = /Handicap ([A-ZÄÖÜ][a-zäöüß-]+(?:\s\((?:leicht|schwer)\))?)/g; while((m = re.exec(t))){ var hn = m[1].replace("(leicht)", "(Leicht)").replace("(schwer)", "(Schwer)"); if(o.ha.indexOf(hn) < 0) o.ha.push(hn); }
    if(/Rüstungsbehinderung \((leicht|schwer)\)/.test(x[0]) && !o.ha.some(function(h){ return /^Rüstungsbehinderung/.test(h); })) o.ha.push("Rüstungsbehinderung (" + (/schwer/.test(x[0]) ? "Schwer" : "Leicht") + ")");
    if(/einen Schwur \(schwer\)/.test(t) && o.ha.indexOf("Schwur (Schwer)") < 0) o.ha.push("Schwur (Schwer)");
    if((m = /beginnen[^.]*?mit dem Talent ([A-ZÄÖÜ][\wäöüß-]+(?:-[A-ZÄÖÜ][\wäöüß]+)?)/.exec(t)) && tnames()[m[1]]) o.ta.push(m[1]);
    if((m = /dürfen nur die Machttalente (.+?) und Talente nehmen/.exec(t))) o.erlaubt = m[1].split(/,\s*/);
    if(/primäres Element wählen/.test(t)) o.elem = true;
    if((m = /^(?:Beschränkungen|Einschränkungen): (.*)$/.exec(t))) m[1].split(/;\s*/).forEach(function(r){ var q = /^(.+?) nur (?:mit )?(Feuer|Wasser|Erde|Luft)\b/.exec(r.trim()); if(q) o.nur[q[1]] = q[2]; });
    if((m = /([A-ZÄÖÜ][\wäöüß/ -]+?) ist für \S+ eine Macht des Ranges Anfänger/.exec(t))) o.rang[m[1].trim()] = 0;
  });
  var sm = String(a.sm || ""), m2;
  if((m2 = /\(([^)]*?) darf schon im Rang Anfänger/.exec(sm))) o.rang[m2[1].trim()] = 0;
  if(/^\d+$/.test(sm.trim())) o.startN = +sm;
  else {
    var core = sm.replace(/\s*\([^)]*\)/g, "");
    var w = /(\d+|[Ee]ine|[Zz]wei|[Dd]rei|[Vv]ier) (?:weitere|beliebige|aus der Liste)/.exec(core) || /^(\d+|[Zz]wei|[Dd]rei) /.exec(core);
    var extra = w ? (+w[1] || NUMW[w[1].toLowerCase()] || 0) : 0;
    core.replace(/ und (?:eine|zwei|drei|vier|\d+) (?:beliebige )?weitere.*$/i, "").split(/,\s*| und /).forEach(function(p){ p = p.trim(); var hit = MA().filter(function(mm){ return mm.n === p; })[0] || MA().filter(function(mm){ return mm.n.split("/").indexOf(p) > -1 || mm.n.indexOf(p + "/") === 0; })[0]; if(hit && o.start.indexOf(hit.n) < 0) o.start.push(hit.n); });
    o.startN = o.start.length + extra;
  }
  AHC[n] = o; return o;
}
function talenteVon(c, F){
  var L = c.ta.filter(function(t){ return t && t.n; }).map(function(t){ return t.n; }).concat(F.ta || []);
  var ah = ahName(c, F); if(ah){ L.push("Arkaner Hintergrund"); L.push("Arkaner Hintergrund (" + ah + ")"); L = L.concat(ahFx(ah).ta); }
  return L;
}
function handicapsVon(c, F){ return c.hi.filter(function(h){ return h && h.n && h.ab !== 1; }).map(function(h){ return h.n; }).concat(F.ha || [], ahFx(ahName(c, F)).ha); }
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
function hnames(){ if(!HNAMES){ HNAMES = {}; HAL().forEach(function(h){ HNAMES[h.n] = h; }); } return HNAMES; }
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
  if((m = /^(.+) und mindestens zwei weitere ([A-Za-zÄÖÜäöüß]+)talente$/.exec(a))) return {k: "cnt", n: m[1], cat: m[2], c: 3};
  if(a === "Anfänger (beliebig)") return {k: "ok"};
  if(/^Profi in/.test(a)) return {k: "t", n: "Profi"};
  if(/^Experte in/.test(a)) return {k: "t", n: "Experte"};
  if(/^maximaler möglicher Würfeltyp/.test(a)) return {k: "max"};
  if(MONSTER.indexOf(a) > -1) return {k: "v", n: a};
  if(a === "Lykanthropie") return {k: "v", n: "Werwolf"};
  if(/Mensch$/.test(a)) return {k: "v", n: "Menschen"};
  if(a === "Odemwaffe") return {k: "vf", f: "sch"};
  if(a === "Flügel") return {k: "vf", f: "fl"};
  if((m = /^Beschwöre (.+)$/.exec(a))) return {k: "m", n: m[1] + " beschwören"};
  if(tnames()[a] || a === "Harrowed") return {k: "t", n: a};
  if(MA().some(function(x){ return x.n === a; })) return {k: "m", n: a};
  var hb = a.replace(/\s*\(.*$/, ""); if(hnames()[hb]) return {k: "h", n: hb};
  return {k: "ok"};
}
function condOk(c, F, q){
  switch(q.k){
    case "w": return traitIdx(c, F, q.n) >= q.d;
    case "wx": return q.n.some(function(n){ return traitIdx(c, F, n) >= q.d; });
    case "ah": var ah = ahName(c, F).replace(/\s*\((Horror|Fantasy|Science-Fiction)\)$/, ""); if(!ah) return false; var al = [ah].concat(ahFx(ahName(c, F)).alias);
      if(al.indexOf("*") > -1) return true; if(q.l) return q.l.some(function(x){ return al.indexOf(x) > -1; }); if(q.no) return q.no.indexOf(ah) < 0; return true;
    case "nt": return talenteVon(c, F).indexOf(q.n) < 0;
    case "cnt": var T = talenteVon(c, F); return T.indexOf(q.n) > -1 && T.filter(function(n){ var t = tnames()[n]; return t && t.k === q.cat; }).length >= q.c;
    case "t": return talenteVon(c, F).indexOf(q.n) > -1;
    case "h": return handicapsVon(c, F).some(function(n){ return n.replace(/\s*\(.*$/, "") === q.n; });
    case "v": return c.volk === q.n;
    case "vf": return !!F[q.f];
    case "m": return c.ma.some(function(x){ return x && x.n === q.n; });
    case "max": return ATTR.some(function(a){ return di(c.a[a[1]]) >= aMax(F, a[1]); }) || c.sk.some(function(s){ return di(s.d) >= skMax(F, s.n); });
    default: return true;
  }
}
/* gibt null zurück, wenn erfüllt, sonst den Grund */
function warum(c, F, v, r, rk){
  if(r != null && r > (rk == null ? rangIdx(c) : rk)) return RAENGE[r];
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
/* ---------- Aufstiege ---------- */
var AUFART = {ta: "Neues Talent", f1: "Fertigkeit ab Attribut +1", f2: "Zwei Fertigkeiten unter Attribut +1", a: "Attribut +1", h: "Handicap ablegen oder abschwächen"};
function aufN(c){ return Math.floor((parseInt(c.ep, 10) || 0) / 5); }
function slotRang(i){ return Math.min(4, Math.floor(i / 4)); }
function attrVon(c, skn){ var s = c.sk.filter(function(x){ return x.n === skn; })[0], an = s ? s.a : ((SW_SKILLS.concat(window.SW_SKILLS_ZUS || []).filter(function(x){ return x.n === skn; })[0] || {}).a || "Verstand"); return di(c.a[ATK[an]]); }
function stufe(c, skn, d){
  var s = c.sk.filter(function(x){ return x.n === skn; })[0];
  if(!s){ if(d > 0){ var sd = SW_SKILLS.concat(window.SW_SKILLS_ZUS || []).filter(function(x){ return x.n === skn; })[0] || {}; c.sk.push({n: skn, a: sd.a || "Verstand", d: "W4", neu: 1}); } return; }
  if(d < 0 && s.neu && di(s.d) <= 1){ c.sk.splice(c.sk.indexOf(s), 1); return; }
  var i = Math.max(1, di(s.d) + d); s.d = DIE[i] || "W12+" + (i - 5);
}
function aufAnwenden(c, A, d){
  if(A.art === "ta"){
    if(A.z === "Arkaner Hintergrund"){ return; }
    if(d > 0){ var slot = c.ta.findIndex(function(t){ return !t || !t.n; }), row = {n: A.z, adv: 1}; if(slot < 0) c.ta.push(row); else c.ta[slot] = row; }
    else { var k = c.ta.findIndex(function(t){ return t && t.n === A.z && t.adv; }); if(k > -1) c.ta[k] = {}; }
  } else if(A.art === "a"){ var i = di(c.a[A.z]) + d; c.a[A.z] = DIE[Math.max(1, i)] || "W12+" + (i - 5); }
  else if(A.art === "f1") stufe(c, A.z, d);
  else if(A.art === "f2") (A.z || []).forEach(function(n){ stufe(c, n, d); });
  else if(A.art === "h"){ var h = c.hi.filter(function(x){ return x && x.n === A.z; })[0]; if(h){ if(d > 0) h.ab = h.w === "S" ? "L" : 1; else delete h.ab; } }
}
/* Stand vor allen Aufstiegen (für die Aufbaupunkte) */
function basis(c){ var b = JSON.parse(JSON.stringify(c)); (b.auf || []).slice().reverse().forEach(function(A){ if(A && A.art) aufAnwenden(b, A, -1); }); return b; }
/* Prüft einen Aufstieg gegen die Regeln (S. 54) */
/* Stand direkt vor Aufstieg i: Erschaffungsstand, dann alle früheren Aufstiege der Reihe nach */
function vorher(c, i){ var b = basis(c); for(var k = 0; k < i; k++){ var X = (c.auf || [])[k]; if(X && X.art) aufAnwenden(b, X, 1); } return b; }
function aufWarum(c, i){
  var A = (c.auf || [])[i]; if(!A || !A.art) return null;
  if(i >= aufN(c)) return "mehr Aufstiege als Erfahrung";
  var b = vorher(c, i), F = fx(b), R = slotRang(i);
  if(A.art === "a"){
    var gleich = (c.auf || []).filter(function(x, j){ return x && x.art === "a" && j < i && (R < 4 ? slotRang(j) === R : i - j === 1); });
    if(gleich.length) return R < 4 ? "nur ein Attribut pro Rang" : "nur jeden zweiten Aufstieg";
    if(di(b.a[A.z]) + 1 > aMax(F, A.z)) return "über dem Maximum";
  }
  if(A.art === "f1"){ var s = b.sk.filter(function(x){ return x.n === A.z; })[0]; if(!s) return "Fertigkeit fehlt"; if(di(s.d) < attrVon(b, A.z)) return "unter dem Attribut"; }
  if(A.art === "f2"){ if(!A.z || A.z.length !== 2) return "zwei Fertigkeiten wählen"; for(var k = 0; k < 2; k++){ var s2 = b.sk.filter(function(x){ return x.n === A.z[k]; })[0]; if(s2 && di(s2.d) >= attrVon(b, A.z[k])) return A.z[k] + " nicht unter dem Attribut"; } }
  if(A.art === "ta" && A.z !== "Arkaner Hintergrund"){ var t = tnames()[A.z]; if(t){ var w = warum(b, F, t.v, t.r, R); if(w) return w; } }
  return null;
}
function aufText(A){
  if(!A || !A.art) return "";
  if(A.art === "ta") return A.z === "Arkaner Hintergrund" && cur.ah ? "Arkaner Hintergrund (" + cur.ah + ")" : A.z;
  if(A.art === "a") return (ATTR.filter(function(x){ return x[1] === A.z; })[0] || [A.z])[0] + " +1";
  if(A.art === "f1") return A.z + " +1";
  if(A.art === "f2") return (A.z || []).join(", ") + " +1";
  if(A.art === "h"){ var h = cur.hi.filter(function(x){ return x && x.n === A.z; })[0]; return A.z + (h && h.w === "S" ? " abgeschwächt" : " abgelegt"); }
  return "";
}
/* Bleibt der Charakter nach der Änderung im Rahmen der Aufbaupunkte? */
function leistbar(fn){ var k = JSON.parse(JSON.stringify(cur)); fn(k); var p = punkte(k); return p.used <= p.budget; }
/* ---------- Superkräfte (Super Powers Companion S. 10, 41ff.) ---------- */
var SPGEN = [["Alternatives Attribut", "+1"], ["Bedingt/Verbunden", "0/+2"], ["Gerät", "–1/–2"], ["Wuchtig", "+1"], ["Schwere Waffe", "+1"], ["Einschränkung", "–1/–2"], ["Reichweite", "+2/+4"], ["Selektiv", "+1"], ["Umschaltbar", "+1"]];
var ROEM = ["", "I", "II", "III", "IV", "V"];
function hatSuper(c){ return c.ta.some(function(t){ return t && t.n === "Superkräfte"; }); }
function spRec(n){ return MA().filter(function(m){ return m.n === n && (m.s || [])[0] === "SUP"; })[0]; }
function zahlen(t){ return (String(t || "").replace(/[–−]/g, "-").match(/[+-]?\d+/g) || []).map(Number); }
function spMods(n){ var m = spRec(n); return ((m && m.m) || []).map(function(x){ return [x[0].toUpperCase(), x[1]]; }).concat(SPGEN.map(function(x){ return [x[0].toUpperCase(), x[1]]; })); }
function spArt(mp){ mp = String(mp || ""); if(/Stufe/.test(mp)) return "st"; if(/^\d+(\/\d+)+$/.test(mp)) return "opt"; if(/^\d+$/.test(mp)) return "fest"; return "frei"; }
function spKost(r){
  if(!r || !r.n) return 0; if(r.k !== "" && r.k != null && !isNaN(+r.k)) return +r.k;
  var m = spRec(r.n) || {}, mp = String(m.mp || ""), st = Math.max(1, +r.st || 1), z = zahlen(mp), a = spArt(mp), k = 0;
  if(a === "st") k = (z[0] || 0) * st; else if(a === "opt") k = z[Math.min(z.length, st) - 1]; else k = z[0] || 0;
  spMods(r.n).forEach(function(x){ var i = (r.mo || {})[x[0]]; if(i == null) return; var v = zahlen(x[1]); var w = v[Math.min(i, v.length - 1)] || 0; k += /Stufe/.test(x[1]) ? w * st : w; });
  return Math.max(1, k);
}
function spInfo(c){
  var st = +c.sst || 3, tot = st * 15, lim = Math.floor(tot / (c.ta.some(function(t){ return t && t.n === "Der Beste"; }) ? 2 : 3)), used = 0;
  (c.sp || []).forEach(function(r){ used += spKost(r); });
  return {st: st, tot: tot, lim: lim, used: used};
}
function spOpen(el){
  var i = +el.dataset.spm, r = cur.sp[i] || {}, mo = r.mo || {};
  popAt(el, {cls: "spop", html: spMods(r.n).map(function(x){ var v = String(x[1]).split("/"), on = mo[x[0]];
    return '<div class="spm"><span>' + esc2(x[0]) + "</span>" + v.map(function(w, j){ return '<a data-mo="' + esc2(x[0]) + '" data-j="' + j + '"' + (on === j ? ' class="on"' : "") + ">" + esc2(w.trim()) + "</a>"; }).join("") + "</div>"; }).join("")});
  pop._spi = i; pop._el = el;
}
/* Aufbaupunkte: 5 Attribut-, 12 Fertigkeitspunkte, freie Talente; Rest aus Handicaps (max. 4) und Aufstiegen (je 2) */
function punkte(c){
  var cB = basis(c), F = fx(cB), p = cost(cB), hp = 0; c = cB;
  c.hi.forEach(function(x){ if(x && x.n) hp += x.w === "S" ? 2 : 1; });
  var auf = aufN(c), tal = c.ta.filter(function(t){ return t && t.n && t.n !== "Superkräfte"; }).length + (c.ah && !F.ah && c.ahAdv == null ? 1 : 0), aufU = (c.auf || []).filter(function(A){ return A && A.art; }).length;
  var A = 5 + (F.apts || 0), S2 = 12 + (F.spts || 0);
  var used = Math.max(0, p.at - A) * 2 + Math.max(0, p.fp - S2) + Math.max(0, tal - (F.frei || 0)) * 2;
  return {at: p.at, fp: p.fp, A: A, S: S2, hp: hp, auf: auf, aufU: aufU, tal: tal, frei: F.frei || 0, used: used, budget: Math.min(4, hp)};
}
function berechne(c){
  var k = c.sk.filter(function(s){ return s.n === "Kämpfen"; })[0], pa = 2 + halb(k && k.d), pb = 0, rp = 0, kopf = 0, last = 0, ks = c.a.kon;
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
  return {parade: pa + pb + wp + (F.pa || 0), rob: 2 + halb(ks) + pz + gr + (F.rob || 0), pz: pz, kopf: kopf, last: last, grenze: LAST[DIE[Math.max(1, di(c.a.sta) + (F.str || 0))]] || "", wmax: 3 + (F.wm || 0), wig: F.wig || 0, mpx: F.mpx || 0, mz: F.mz || 0, ep: parseInt(c.ep, 10) || 0, tempo: tempo(F), sprint: sprint(F), gr: gr, fl: F.fl || 0};
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
      ms: col(cols, r, "Mindeststärke").replace(/^—$/, ""), gw: col(cols, r, "Gewicht (kg)") || col(cols, r, "Gewicht"), nt: r.n || "", fs: col(cols, r, "Flächenschablone").replace(/^—$/, "")}};
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
  if(kind === "ha") return HAL().filter(function(h){ return vis(h.s); })
    .filter(function(h){ return H.indexOf(h.n) < 0 || h.n === own; })
    .map(function(h){ return {n: h.n, sub: h.w, s: h.s, h: h}; });
  if(kind === "ta") return SW_TALENTE.filter(function(t){ return vis(t.s) && !/^Arkaner Hintergrund \(/.test(t.n) && (MEHRFACH[t.n] || T.indexOf(t.n) < 0 || t.n === own); })
    .map(function(t){ var A = ahFx(ahName(c, F)), why = warum(c, F, t.v, t.r);
      if(!why && t.n !== own && !leistbar(function(k){ k.ta = k.ta.filter(function(x){ return !x || x.n !== own; }); k.ta.push({n: t.n}); })) why = "keine Punkte";
      if(!why && A.erlaubt && t.k === "Macht" && A.erlaubt.indexOf(t.n) < 0 && !/Arkaner Hintergrund \((?:[^)]*, )?Alchemist/.test(t.v || "")) why = "nicht für " + ahName(c, F);
      return {n: t.n, sub: t.k + (t.r != null ? ", " + RAENGE[t.r] : ""), s: t.s, why: why}; });
  if(kind === "sk"){ var ak = ahSkill(c, F);
    return SW_SKILLS.map(function(s){ return {n: s.n, a: s.a, s: ["GRW"], sub: s.g ? "Grund" : ""}; }).concat((window.SW_SKILLS_ZUS || []).filter(function(s){ return vis(s.s); }).map(function(s){ return {n: s.n, a: s.a, s: s.s}; }))
      .filter(function(s){ return s.a === ctx; }).map(function(s){ s.why = ARK[s.n] && s.n !== ak ? "Arkaner Hintergrund" : !c.sk.some(function(x){ return x.n === s.n; }) && !own && !leistbar(function(k){ k.sk.push({n: s.n, a: s.a, d: "W4"}); }) ? "keine Punkte" : null; return s; }); }
  if(kind === "apr"){ var row = c.ma[+ctx] || {}, pm = MA().filter(function(x){ return x.n === row.n; })[0], A2 = ahFx(ahName(c, F));
    var L2 = (A2.elem ? elemente(c) : []).map(function(e){ return {n: e, sub: "Element"}; });
    String(pm && pm.au || "").split(/,\s*|\s+oder\s+/).forEach(function(t){ t = t.trim(); if(t && !L2.some(function(x){ return x.n.toLowerCase() === t.toLowerCase(); })) L2.push({n: t.charAt(0).toUpperCase() + t.slice(1), sub: "Ausprägung"}); });
    return L2; }
  if(kind === "sup"){ var hs = (c.sp || []).filter(function(r){ return r && r.n; }).map(function(r){ return r.n; }), SI2 = spInfo(c);
    return MA().filter(function(m){ return (m.s || [])[0] === "SUP" && hs.indexOf(m.n) < 0; }).map(function(m){ var z = zahlen(m.mp)[0] || 0; return {n: m.n, sub: "Kosten " + m.mp, m: m, why: z > SI2.lim ? "über dem Limit" : null}; }); }
  if(kind === "wa") return lWaffen().map(function(w){ w.warn = w.f.ms && di(w.f.ms) > di(c.a.sta) ? "Mindeststärke " + w.f.ms : null; return w; });
  if(kind === "ru") return lRuestung().map(function(w){ w.warn = w.f.ms && di(w.f.ms) > di(c.a.sta) ? "Mindeststärke " + w.f.ms : null; return w; });
  if(kind === "au") return lAusr();
  if(kind === "ah") return (c.ah ? [{n: "Kein Arkaner Hintergrund", rm: 1}] : []).concat(AHL().filter(function(a){ return vis(a.s) && a.n !== c.ah; }).map(function(a){ return {n: a.n, sub: a.f, s: a.s, ah: a, why: a.req ? warum(c, F, splitTop(a.req).filter(function(x){ return x.indexOf(String(a.f || "-").replace(/\s*\(.*$/, "") + " ") !== 0; }).join(", ")) : null}; }));
  if(kind === "ma"){ var ah = ahRec(ahName(c, F)), have = c.ma.filter(function(m){ return m && m.n; }).map(function(m){ return m.n; });
    if(!ahName(c, F)) return [];
    var seen = {};
    return MA().filter(function(m){ if((m.s || [])[0] === "SUP") return false; if(!(vis(m.s || ["GRW"]) || (ah && ah.av && ah.av.indexOf(m.n) > -1)) || have.indexOf(m.n) > -1 || seen[m.n]) return false; if(ah && ah.dl && ah.av && ah.av.indexOf(m.n) > -1 && !m.dl && MA().some(function(x){ return x.dl && x.n === m.n; })) return false; seen[m.n] = 1; return true; })
      .map(function(m){ var A = ahFx(ahName(c, F)), r = A.rang[m.n] != null ? A.rang[m.n] : m.r;
        var why = r != null && r > R ? RAENGE[r] : ah && ah.av && ah.av.indexOf(m.n) < 0 ? "nicht für " + ah.n : A.nur[m.n] && elemente(c).length && elemente(c).indexOf(A.nur[m.n]) < 0 ? "nur " + A.nur[m.n] : null;
        return {n: m.n, sub: "Rang " + (r != null ? RAENGE[r] : "") + (A.nur[m.n] ? ", nur " + A.nur[m.n] : ""), s: m.s || ["GRW"], m: m, why: why}; }); }
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
    '<div><span class="cap">Wunden</span><div class="pips">' + pips("wu", b.wmax) + '<span class="pl">KU</span></div></div>' +
    '<div><span class="cap">Erschöpfung</span><div class="pips">' + pips("er", 2) + '<span class="pl">KU</span></div></div></div>' +
    '<div class="bstat2" style="grid-template-columns:1fr"><div style="min-height:0;padding:3px 7px 4px"><div class="pips" style="margin:0;gap:12px">' +
    ["Angeschlagen", "Abgelenkt", "Verwundbar"].map(function(s){ return '<span style="display:inline-flex;gap:4px;align-items:center"><i class="pip' + (c.st[s] ? " on" : "") + '" data-pip="st" data-n="' + s + '"></i><span class="pl">' + s + "</span></span>"; }).join("") + "</div></div></div></div>";
  var hp = 0; c.hi.forEach(function(x){ if(x && x.n) hp += x.w === "S" ? 2 : 1; });
  h += '<div class="box"><h3>Handicaps<span class="cnt" id="b-hp">' + hp + " / 4 Punkte</span></h3><div class=\"lst\">";
  var AF = ahFx(ahName(c, F));
  AF.ha.forEach(function(x){ h += fest(x, "AH", /\(Schwer/.test(x) || (hnames()[x.replace(/\s*\(.*$/, "")] || {}).w === "schwer" ? "S" : "L"); });
  (F.ha || []).forEach(function(x){ h += fest(x, "Volk", /\(Schwer/.test(x) || (hnames()[x.replace(/\s*\(.*$/, "")] || {}).w === "schwer" ? "S" : "L"); });
  for(var i = 0, n = rows("hi", (F.ha || []).length + AF.ha.length); i < n; i++){ var hh = c.hi[i] || {};
    h += '<div class="r' + (hh.ab === 1 ? " abg" : "") + '"><span class="g">' + inp("hi", i, "n", {pick: "ha", tip: hh.ab === 1 ? "durch Aufstieg abgelegt" : hh.ab ? "durch Aufstieg abgeschwächt" : ""}) + '</span><input class="bw1 c" readonly data-w="' + i + '" title="leicht / schwer" value="' + esc2(hh.n ? (hh.ab === "L" ? "L" : (hh.w || "L")) : "") + '"></div>'; }
  h += "</div></div>";
  var fT = (F.ta || []).map(function(x){ return [x, "Volk"]; }), ahn = ahName(c, F);
  if(ahn && F.ah) fT.push(["Arkaner Hintergrund (" + ahn + ")", "Volk"]);
  if(ahn) ahFx(ahn).ta.forEach(function(x){ fT.push([x, "AH"]); });
  h += '<div class="box"><h3>Talente<span class="cnt" id="b-tal"></span></h3><div class="lst">';
  if(c.ah) h += '<div class="r vk ahr"><span class="g"><input readonly data-ahrow="1" value="Arkaner Hintergrund (' + esc2(c.ah) + ')" title="Ändern"></span><span class="tag">AH</span></div>';
  fT.forEach(function(x){ h += fest(x[0], x[1]); });
  for(i = 0, n = rows("ta", fT.length + (c.ah ? 1 : 0)); i < n; i++){ var tt = c.ta[i] || {}, wy = tt.n && tnames()[tt.n] && !tt.adv ? warum(c, F, tnames()[tt.n].v, tnames()[tt.n].r) : null, tw = tt.n ? twArt(tt.n) : null;
    h += '<div class="r' + (tt.adv ? " vk" : "") + '"><span class="g">' + inp("ta", i, "n", tt.adv ? {ro: 1, tip: "Über den Aufstieg entfernen"} : {pick: "ta", cls: wy ? "warn" : "", tip: wy ? "Voraussetzung: " + wy : ""}) + "</span>" + (tt.adv ? '<span class="tag">Aufstieg</span>' : "") +
      (tw ? '<span class="tw">' + (tw === "frei" ? '<input class="twi" data-a="ta" data-i="' + i + '" data-f="w" placeholder="…" value="' + esc2(tt.w || "") + '" autocomplete="off">' : '<button class="twb' + (tt.w ? "" : " leer") + '" data-tw="' + i + '">' + esc2(tt.w || "wählen") + "</button>") + "</span>" : "") + "</div>"; }
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
  var ahN = ahName(c, F), AE = ahFx(ahN), nMa = c.ma.filter(function(m){ return m && m.n; }).length, maxMa = AE.startN + (F.mz || 0), EL = elemente(c), nEl = elemMax(c);
  h += '<div class="bbot">';
  if(ahN){
    var ask = ahSkill(c, F), skd = (c.sk.filter(function(x){ return x.n === ask; })[0] || {}).d || "";
    h += '<div class="box bmach"><h3>Mächte' + (maxMa ? '<span class="cnt' + (nMa > maxMa ? " ov" : "") + '" title="' + esc2(c.sm || AE.startN) + '">' + nMa + " / " + maxMa + "</span>" : "") + "</h3>" +
      '<div class="bah"><div><span class="cap">Arkaner Hintergrund</span><b>' + esc2(ahN) + '</b></div><div><span class="cap">Arkane Fertigkeit</span><b>' + esc2(ask ? ask + " " + skd : "") + '</b></div><div><span class="cap">Machtpunkte</span><b>' + ((parseInt(c.mp, 10) || 0) + (F.mpx || 0)) + "</b></div>" +
      (AE.elem ? '<div class="el"><span class="cap">' + (nEl > 1 ? "Elemente " + EL.length + "/" + nEl : "Element") + '</span><span class="els">' + ELEM.map(function(e){ return '<a data-elem="' + e + '" class="' + (EL.indexOf(e) > -1 ? "on" : "") + '">' + e + "</a>"; }).join("") + "</span></div>" : "") +
      '</div><div class="lst"><div class="r hd"><span class="g">Macht</span><span class="c" style="width:34px">MP</span><span class="c" style="width:110px">Reichweite</span><span class="c" style="width:90px">Wirkungsdauer</span><span class="c" style="width:230px">Anmerkung</span></div>';
    for(i = 0, n = Math.max(rows("ma"), Math.min(10, maxMa)); i < n; i++) h += '<div class="r"><span class="g">' + inp("ma", i, "n", {pick: "ma"}) + '</span><span class="c" style="width:34px">' + inp("ma", i, "mp", {cls: "num"}) + '</span><span class="c" style="width:110px">' + inp("ma", i, "rw", {cls: "sm"}) + '</span><span class="c" style="width:90px">' + inp("ma", i, "wd", {cls: "sm"}) + '</span><span class="c" style="width:230px">' + inp("ma", i, "nt", {cls: "sm", pick: "apr", ctx: String(i)}) + "</span></div>";
    h += "</div></div>";
  }
  if(hatSuper(c)){
    c.sp = c.sp || []; var SI = spInfo(c), nsp = Math.max(4, (function(){ var l = -1; c.sp.forEach(function(x, k){ if(x && x.n) l = k; }); return l + 2; })());
    h += '<div class="box bsup"><h3>Superkräfte<span class="cnt' + (SI.used > SI.tot ? " ov" : "") + '">' + SI.used + " / " + SI.tot + "</span></h3>" +
      '<div class="bah"><div class="el"><span class="cap">Machtstufe</span><span class="els">' + [1, 2, 3, 4, 5].map(function(k){ return '<a data-sst="' + k + '" class="' + (SI.st === k ? "on" : "") + '">' + ROEM[k] + "</a>"; }).join("") + '</span></div><div><span class="cap">Limit pro Kraft</span><b>' + SI.lim + "</b></div></div>" +
      '<div class="lst"><div class="r hd"><span class="g">Kraft</span><span class="c" style="width:44px">Stufe</span><span class="c" style="width:300px">Modifikatoren</span><span class="c" style="width:44px">Kosten</span></div>';
    for(i = 0; i < nsp; i++){ var sr = c.sp[i] || {}, kk = spKost(sr), sm = spRec(sr.n), art = sm ? spArt(sm.mp) : "", mo = sr.mo || {};
      var mt = Object.keys(mo).map(function(k){ var x = spMods(sr.n).filter(function(y){ return y[0] === k; })[0]; return k + " " + (x ? String(x[1]).split("/")[mo[k]] || "" : ""); }).join(", ");
      h += '<div class="r"><span class="g">' + inp("sp", i, "n", {pick: "sup", tip: sm ? "Kosten " + sm.mp : ""}) + '</span><span class="c" style="width:44px">' + (sr.n && (art === "st" || art === "opt" || /Stufe/.test(JSON.stringify(sm && sm.m || ""))) ? '<input class="num" type="number" min="1" data-a="sp" data-i="' + i + '" data-f="st" value="' + esc2(sr.st || 1) + '">' : "") + '</span><span class="c" style="width:300px">' + (sr.n ? '<button class="twb spmb' + (mt ? "" : " leer") + '" data-spm="' + i + '">' + esc2(mt || "Modifikatoren") + "</button>" : "") + '</span><span class="c" style="width:44px"><input class="num' + (kk > SI.lim ? " warn" : "") + '" data-a="sp" data-i="' + i + '" data-f="k" placeholder="' + (sr.n ? kk : "") + '" value="' + esc2(sr.k == null ? "" : sr.k) + '"' + (kk > SI.lim ? ' title="über dem Limit"' : "") + "></span></div>"; }
    h += "</div></div>";
  }
  var nA = aufN(c), AL = c.auf || [], nS = Math.max(nA, AL.reduce(function(m, A, k){ return A && A.art ? k + 1 : m; }, 0));
  if(nS){
    h += '<div class="box baufb"><h3>Aufstiege<span class="cnt">' + AL.filter(function(A){ return A && A.art; }).length + " / " + nA + '</span></h3><div class="lst baufl">';
    for(var ai = 0; ai < nS; ai++){ var A = AL[ai], wy = aufWarum(c, ai);
      h += '<div class="r"><span class="c anr">' + (ai + 1) + '</span><span class="c arg">' + RAENGE[slotRang(ai)].slice(0, 4) + '.</span><span class="g"><a class="aufs' + (A && A.art ? "" : " leer") + (wy ? " warn" : "") + '" data-auf="' + ai + '"' + (wy ? ' title="' + esc2(wy) + '"' : "") + ">" + (A && A.art ? "<i>" + AUFART[A.art].split(" ")[0].replace("Zwei", "Fertigkeiten").replace("Neues", "Talent").replace("Fertigkeit", "Fertigkeit") + "</i> " + esc2(aufText(A)) : "…") + "</a></span></div>"; }
    h += "</div></div>";
  }
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
function benAuto(c){ var d = 3 + (fx(c).ben || 0); if(c.bd == null) c.bd = 3; if((+c.ben || 0) === c.bd) c.ben = d; c.bd = d; }
function neuAufbau(){ benAuto(cur); var y = window.scrollY; var s = document.getElementById("bsheet"); s.innerHTML = sheet(); calc(); window.scrollTo(0, y); }
function calc(){
  var c = cur, b = berechne(c), p = cost(c), $ = function(i){ return document.getElementById(i); };
  if($("b-rang")) $("b-rang").value = rang(b.ep);
  if($("b-aufst")) $("b-aufst").value = Math.floor(b.ep / 5);
  if($("b-par")) $("b-par").value = b.parade;
  if($("b-rob")) $("b-rob").value = b.rob + (b.pz ? " (" + b.pz + ")" : "");
  var P = punkte(c), cn = $("b-cnt"); if(cn){ cn.innerHTML = "Attr. " + P.at + "/" + P.A + " · Fert. " + P.fp + "/" + P.S; cn.className = "cnt" + (P.used > P.budget ? " ov" : " ok"); }
  if($("b-tal")) $("b-tal").textContent = P.frei ? P.frei + " frei" : "";
  var st = $("bStatus"); if(st){ var rest = P.budget - P.used, F2 = fx(c);
    st.innerHTML = '<span>Rang <b>' + RAENGE[rangIdx(c)] + "</b></span>" +
      '<span class="' + (P.at > P.A ? "x" : "") + '">Attribute <b>' + P.at + "/" + P.A + "</b></span>" +
      '<span class="' + (P.fp > P.S ? "x" : "") + '">Fertigkeiten <b>' + P.fp + "/" + P.S + "</b></span>" +
      '<span class="' + (P.tal > P.frei ? "x" : "") + '">Talente <b>' + P.tal + (P.frei ? " (" + P.frei + " frei)" : "") + "</b></span>" +
      '<span>Handicaps <b>' + P.hp + "/4</b></span>" + (P.auf ? '<span class="' + ((c.auf || []).some(function(A, k){ return aufWarum(c, k); }) ? "x" : "") + '">Aufstiege <b>' + P.aufU + "/" + P.auf + "</b></span>" : "") +
      '<span class="sum ' + (rest < 0 ? "ov" : rest > 0 ? "frei" : "ok") + '" title="Charaktererschaffung">' + (rest < 0 ? "Fehlen " + (-rest) : rest > 0 ? "Offen " + rest : "Ausgeglichen") + "</span>"; }
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
  var kind = el._kind || el.dataset.pick, q = el._kind ? "" : el.value.trim().toLowerCase(), L = liste(kind, el.dataset.ctx, el.dataset.a && el.dataset.i != null ? (cur[el.dataset.a][el.dataset.i] || {}).n : "");
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
function ahSetzen(x){
  var a = x.ah;
  cur.ma = cur.ma.map(function(m){ return m && m.auto ? {} : m; }); cur.ahw = [];
  if(x.rm){ cur.ah = ""; cur.af = ""; cur.mp = ""; cur.sm = ""; cur.mpa = ""; return; }
  cur.ah = x.n; cur.af = a ? a.f || "" : ""; cur.mp = a ? a.mp || "" : ""; cur.sm = a ? a.sm || "" : ""; cur.mpa = "";
  if(!a) return;
  var an = (a.f || "").replace(/\s*\((Verstand|Willenskraft|Geschicklichkeit|Stärke|Konstitution)\)$/, ""), aa = (/\((Verstand|Willenskraft|Geschicklichkeit|Stärke|Konstitution)\)$/.exec(a.f || "") || [0, "Verstand"])[1];
  if(an && !cur.sk.some(function(s){ return s.n === an; })) cur.sk.push({n: an, a: aa, d: "W4"});
  var have = cur.ma.filter(function(m){ return m && m.n; }).map(function(m){ return m.n; });
  ahFx(x.n).start.forEach(function(pn){ if(have.indexOf(pn) > -1) return; var pm = MA().filter(function(mm){ return mm.n === pn; })[0]; if(!pm) return; var slot = cur.ma.findIndex(function(m){ return !m || !m.n; }); var row = {n: pm.n, mp: pm.mp || "", rw: pm.rw || "", wd: pm.wd || "", nt: "", auto: 1}; if(slot < 0) cur.ma.push(row); else cur.ma[slot] = row; });
}
function pickTake(x){
  var el = pickEl; if(!el) return; var kind = el._kind || el.dataset.pick;
  if(kind === "ah"){ el._kind = null; ahSetzen(x); persist(); popClose(); neuAufbau(); return; }
  if(kind === "apr"){ var mi = +el.dataset.i; while(cur.ma.length <= mi) cur.ma.push({}); cur.ma[mi].nt = x.n; persist(); popClose(); neuAufbau(); return; }
  if(kind === "ta" && x.n === "Arkaner Hintergrund"){ var ai = +el.dataset.i; if(cur.ta[ai]) cur.ta[ai] = {}; el.value = ""; el._kind = "ah"; pickAll = false; pickOpen(el, true); return; }
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
      if(an && !cur.sk.some(function(s){ return s.n === an; })) cur.sk.push({n: an, a: aa, d: "W4"});
      cur.ahw = ""; cur.ma = cur.ma.map(function(m){ return m && m.auto ? {} : m; });
      var have = cur.ma.filter(function(m){ return m && m.n; }).map(function(m){ return m.n; });
      ahFx(x.n).start.forEach(function(pn){ if(have.indexOf(pn) > -1) return; var pm = MA().filter(function(mm){ return mm.n === pn; })[0]; if(!pm) return; var slot = cur.ma.findIndex(function(m){ return !m || !m.n; }); var row = {n: pm.n, mp: pm.mp || "", rw: pm.rw || "", wd: pm.wd || "", nt: "", auto: 1}; if(slot < 0) cur.ma.push(row); else cur.ma[slot] = row; }); }
  } else {
    var arr = cur[el.dataset.a], i = +el.dataset.i; while(arr.length <= i) arr.push({});
    if(kind === "ha") arr[i] = {n: x.n, w: /^schwer$/.test((x.h && x.h.w) || "") ? "S" : "L"};
    else if(kind === "sup") arr[i] = {n: x.n, st: 1, mo: {}};
    else if(kind === "ma") arr[i] = x.m ? {n: x.n, mp: x.m.mp || "", rw: x.m.rw || "", wd: x.m.wd || "", nt: ""} : {n: x.n};
    else if(x.f) arr[i] = Object.assign({}, x.f); else arr[i] = {n: x.n};
  }
  persist(); popClose(); neuAufbau();
}
/* Kleines Auswahlmenü */
function menu(el, items, cb){
  var lang = items.length > 14;
  var h = (lang ? '<input class="mf" placeholder="Suchen" autocomplete="off">' : "") + items.map(function(x, k){ return '<div data-mv="' + k + '"' + (x.why ? ' class="nein"' : "") + "><span>" + esc2(x.l) + (x.s ? badge(x.s) : "") + "</span><small" + (x.warn ? ' class="wn"' : "") + ">" + esc2(x.why || x.sub || "") + "</small></div>"; }).join("") || '<p class="leer">Nichts zur Auswahl</p>';
  popAt(el, {html: h}); pop._cb = function(k){ cb(items[k]); };
  var mf = pop.querySelector(".mf"); if(mf){ mf.focus(); mf.addEventListener("input", function(){ var q = mf.value.toLowerCase(); pop.querySelectorAll("div[data-mv]").forEach(function(d){ d.style.display = d.textContent.toLowerCase().indexOf(q) > -1 ? "" : "none"; }); }); mf.addEventListener("keydown", function(e){ e.stopPropagation(); if(e.key === "Escape") popClose(); }); }
}
function aufSetzen(i, A){ var c = cur; c.auf = c.auf || []; while(c.auf.length <= i) c.auf.push(null); c.auf[i] = A; aufAnwenden(c, A, 1); persist(); neuAufbau(); }
function aufEntfernen(i){ var c = cur, A = (c.auf || [])[i]; if(!A) return; aufAnwenden(c, A, -1); if(A.art === "ta" && A.z === "Arkaner Hintergrund" && c.ahAdv === i){ ahSetzen({rm: 1}); c.ahAdv = null; } c.auf[i] = null; while(c.auf.length && !c.auf[c.auf.length - 1]) c.auf.pop(); persist(); neuAufbau(); }
function aufKlick(el){
  var i = +el.dataset.auf, c = cur, F = fx(c), R = slotRang(i), A = (c.auf || [])[i];
  if(A && A.art){ menu(el, [{v: "x", l: "Aufstieg entfernen"}], function(){ aufEntfernen(i); }); return; }
  var arten = Object.keys(AUFART).map(function(k){ var why = null;
    if(k === "a"){ var block = (c.auf || []).some(function(x, j){ return x && x.art === "a" && (R < 4 ? slotRang(j) === R : Math.abs(j - i) === 1); }); if(block) why = R < 4 ? "schon ein Attribut in diesem Rang" : "nur jeden zweiten Aufstieg"; }
    if(k === "h" && !c.hi.some(function(x){ return x && x.n && x.ab !== 1; })) why = "kein Handicap";
    return {v: k, l: AUFART[k], why: why}; });
  menu(el, arten, function(art){ setTimeout(function(){ ziel(el, i, art.v); }, 0); });
}
function ziel(el, i, art){
  var c = cur, F = fx(c), R = slotRang(i), T = talenteVon(c, F);
  if(art === "ta"){
    var L = SW_TALENTE.filter(function(t){ return vis(t.s) && !/^Arkaner Hintergrund \(/.test(t.n) && (MEHRFACH[t.n] || T.indexOf(t.n) < 0) && !(t.n === "Arkaner Hintergrund" && ahName(c, F)); })
      .map(function(t){ return {v: t.n, l: t.n, s: t.s, sub: t.k + ", " + RAENGE[t.r || 0], why: warum(c, F, t.v, t.r, R)}; }).sort(function(a, b){ return (a.why ? 1 : 0) - (b.why ? 1 : 0); });
    menu(el, L, function(x){ if(x.v === "Arkaner Hintergrund"){ setTimeout(function(){ menu(el, liste("ah").filter(function(a){ return !a.rm; }).map(function(a){ return {v: a.n, l: a.n, s: a.s, sub: a.sub, why: a.why, ah: a.ah}; }), function(y){ ahSetzen({n: y.v, ah: y.ah}); cur.ahAdv = i; aufSetzen(i, {art: "ta", z: "Arkaner Hintergrund"}); }); }, 0); return; } aufSetzen(i, {art: "ta", z: x.v}); });
  } else if(art === "a"){
    menu(el, ATTR.map(function(a){ var cu = di(c.a[a[1]]), mx = aMax(F, a[1]); return {v: a[1], l: a[0], sub: c.a[a[1]] + " → " + (DIE[cu + 1] || ""), why: cu >= mx ? "Maximum erreicht" : null}; }), function(x){ aufSetzen(i, {art: "a", z: x.v}); });
  } else if(art === "f1"){
    menu(el, c.sk.map(function(s){ var ok = di(s.d) >= attrVon(c, s.n); return {v: s.n, l: s.n, sub: s.d + " → " + (DIE[di(s.d) + 1] || ""), why: di(s.d) >= skMax(F, s.n) ? "Maximum erreicht" : ok ? null : "unter dem Attribut"}; }).sort(function(a, b){ return (a.why ? 1 : 0) - (b.why ? 1 : 0); }), function(x){ aufSetzen(i, {art: "f1", z: x.v}); });
  } else if(art === "f2"){
    var opts = function(ex){ var own = c.sk.map(function(s){ return {v: s.n, l: s.n, sub: s.d + " → " + (DIE[di(s.d) + 1] || ""), why: di(s.d) >= attrVon(c, s.n) ? "nicht unter dem Attribut" : null}; });
      var neuL = SW_SKILLS.concat((window.SW_SKILLS_ZUS || []).filter(function(x){ return vis(x.s); })).filter(function(x){ return !c.sk.some(function(s){ return s.n === x.n; }) && !(ARK[x.n] && x.n !== ahSkill(c, F)); }).map(function(x){ return {v: x.n, l: x.n, sub: "neu → W4"}; });
      return own.concat(neuL).filter(function(x){ return x.v !== ex; }).sort(function(a, b){ return (a.why ? 1 : 0) - (b.why ? 1 : 0); }); };
    menu(el, opts(""), function(x){ setTimeout(function(){ menu(el, opts(x.v), function(y){ aufSetzen(i, {art: "f2", z: [x.v, y.v]}); }); }, 0); });
  } else if(art === "h"){
    menu(el, c.hi.filter(function(x){ return x && x.n && x.ab !== 1; }).map(function(x){ return {v: x.n, l: x.n, sub: x.ab === "L" || x.w !== "S" ? "ablegen" : "zu leicht abschwächen"}; }), function(x){ aufSetzen(i, {art: "h", z: x.v}); });
  }
}
/* Talente mit Auswahl */
var TWL = {"Lieblingswaffe": "waffe", "Verbesserte Lieblingswaffe": "waffe", "Markenzeichen-Waffe": "waffe", "Bevorzugte Macht": "macht", "Profi": "trait", "Experte": "trait", "Meister": "trait",
  "Bevorzugter Feind": "feind", "Bevorzugtes Gelände": "gelaende", "Gelehrter": "gelehrt", "Beziehungen": "frei"};
var GELAENDE = ["Arktis", "Wasser", "Wüste", "Wald", "Hügel/Gebirge", "Dschungel", "Ebene", "Sumpf", "Stadt", "Untergrund"];
function pakete(t){
  var txt = (t && t.b || []).join(" "), o = [], m, re = /\b([A-ZÄÖÜ][A-ZÄÖÜß-]{3,}(?: [A-ZÄÖÜ][A-ZÄÖÜß-]+)*):/g;
  if(!/[Ww]ähle|wählen/.test(txt)) return [];
  while((m = re.exec(txt))) if(o.indexOf(m[1]) < 0) o.push(m[1]);
  return o.map(function(x){ return x.toLowerCase().replace(/(^|[\s-])(\S)/g, function(a, b, c2){ return b + c2.toUpperCase(); }); });
}
function twArt(n){ if(TWL[n]) return TWL[n]; if(/Lieblingswaffe|Markenwaffe|Markenzeichen-Waffe/.test(n || "")) return "waffe"; return pakete(tnames()[n]).length > 1 ? "paket" : null; }
function twOpts(n){
  var a = twArt(n), c = cur, F = fx(c);
  if(a === "waffe") return c.wa.filter(function(x){ return x && x.n; }).map(function(x){ return x.n; }).concat((F.wa || []).map(function(x){ return x[0]; }));
  if(a === "macht") return c.ma.filter(function(x){ return x && x.n; }).map(function(x){ return x.n; });
  if(a === "trait"){ var L = ATTR.filter(function(x){ return di(c.a[x[1]]) >= aMax(F, x[1]) - ((F.prof || {})[x[0]] || 0); }).map(function(x){ return x[0]; }).concat(c.sk.filter(function(x){ return di(x.d) >= skMax(F, x.n) - ((F.prof || {})[x.n] || 0); }).map(function(x){ return x.n; }));
    return L.length ? L : ATTR.map(function(x){ return x[0]; }).concat(c.sk.map(function(x){ return x.n; })); }
  if(a === "feind"){ var K = []; (window.SW_KR || []).forEach(function(k){ if(k.k && K.indexOf(k.k) < 0) K.push(k.k); }); return K.sort(); }
  if(a === "gelaende") return GELAENDE;
  if(a === "gelehrt") return SW_SKILLS.concat(window.SW_SKILLS_ZUS || []).filter(function(x){ return x.a === "Verstand" && !ARK[x.n]; }).map(function(x){ return x.n; });
  if(a === "paket") return pakete(tnames()[n]);
  return [];
}
function twOpen(el){
  var i = +el.dataset.tw, n = (cur.ta[i] || {}).n, O = twOpts(n);
  popAt(el, {html: O.map(function(o){ return '<div data-twv="' + esc2(o) + '"' + ((cur.ta[i] || {}).w === o ? ' class="on"' : "") + "><span>" + esc2(o) + "</span></div>"; }).join("") || '<p class="leer">Noch nichts zur Auswahl eingetragen</p>'});
  pop._twi = i;
}
function dieOpen(el){
  var f = el.dataset.die, cu = f === "a" ? cur.a[el.dataset.f] : f === "s" ? cur.sk[el.dataset.i].d : "", F = fx(cur), lo = 1, hi = 5;
  var nA = 0, zk = f === "a" ? el.dataset.f : f === "s" ? cur.sk[el.dataset.i].n : null;
  (cur.auf || []).forEach(function(A){ if(!A) return; if(f === "a" && A.art === "a" && A.z === zk) nA++; else if(f === "s" && ((A.art === "f1" && A.z === zk) || (A.art === "f2" && (A.z || []).indexOf(zk) > -1))) nA++; });
  if(f === "a"){ lo = aStart(F, el.dataset.f) + nA; hi = aMax(F, el.dataset.f); }
  else if(f === "s"){ var sn = cur.sk[el.dataset.i].n; lo = Math.max(1, skStart(F, sn) + nA); hi = skMax(F, sn); }
  var h = DIE.slice(lo, hi + 1).map(function(d){ var ok = d === cu || di(d) < di(cu) || leistbar(function(k){ if(f === "a") k.a[el.dataset.f] = d; else k.sk[el.dataset.i].d = d; });
    return '<span class="' + (d === cu ? "on" : ok ? "" : "nein") + '"' + (ok ? ' data-d="' + d + '"' : ' title="Keine Punkte mehr"') + ">" + d + "</span>"; }).join("") + (f === "s" && !nA && !skStart(F, cur.sk[el.dataset.i].n) ? '<span data-d="">✕</span>' : "");
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
window.addEventListener("keydown", function(e){ if(pop && e.key === "Escape"){ e.preventDefault(); e.stopImmediatePropagation(); popClose(); } }, true);
function wire(){
  var A = document.getElementById("app"); if(A._bw) return; A._bw = 1;
  A.addEventListener("input", function(e){
    var el = e.target; if(!cur || !el.dataset) return;
    if(el.dataset.a === "$"){ if(el.dataset.f !== "volk") cur[el.dataset.f] = el.value; if(el.dataset.f === "name"){ var a = document.querySelector('.bgbar a[data-sel="' + DB.id + '"]'); var on = document.querySelector(".bgbar a.on"); if(on) on.textContent = el.value || "Neuer Charakter"; } }
    else if(el.dataset.a && el.dataset.i != null){ var arr = cur[el.dataset.a]; while(arr.length <= +el.dataset.i) arr.push({}); arr[el.dataset.i][el.dataset.f] = el.value; delete arr[el.dataset.i].auto; }
    if(el.dataset.pick) pickOpen(el);
    persist(); calc();
  });
  A.addEventListener("change", function(e){
    var el = e.target; if(!el.dataset || el.dataset.sd == null && el.dataset.f == null) return;
    if(el.dataset.a && el.dataset.a !== "$" && el.dataset.a !== "sk" && el.dataset.f === "n" && !el.value.trim()){ cur[el.dataset.a][el.dataset.i] = {}; persist(); neuAufbau(); return; }
    if(el.dataset.a === "sk" && el.dataset.f === "n" && !el.value.trim() && !KERN[cur.sk[el.dataset.i].n]){ cur.sk.splice(el.dataset.i, 1); persist(); neuAufbau(); return; }
    if(el.dataset.sd != null || el.dataset.f === "n" || el.dataset.f === "ms" || el.dataset.f === "ep" || el.dataset.a === "sp") neuAufbau();
  });
  A.addEventListener("focusin", function(e){ var el = e.target; if(el.dataset && el.dataset.pick){ if(pickEl !== el) pickAll = false; pickOpen(el, true); } });
  A.addEventListener("keydown", function(e){
    var el = e.target; if(!el.dataset || !(el.dataset.pick || el._kind)) return;
    var items = pop ? [].slice.call(pop.querySelectorAll("div[data-i]")) : [];
    if(e.key === "ArrowDown" || e.key === "ArrowUp"){ e.preventDefault(); e.stopPropagation(); if(!items.length) return; popI = (popI + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length; items.forEach(function(d, i){ d.classList.toggle("on", i === popI); }); items[popI].scrollIntoView({block: "nearest"}); }
    else if(e.key === "Enter"){ e.preventDefault(); if(popI > -1 && pickList[popI]) pickTake(pickList[popI]); else { var v = el.value.trim(); if(!v) return; if(pickList.length === 1 && pickList[0].n.toLowerCase() === v.toLowerCase()) pickTake(pickList[0]); else { pickTake({n: v}); } } }
    else if(e.key === "Escape"){ e.stopPropagation(); popClose(); }
  }, true);
  document.addEventListener("mousedown", function(e){
    if(!pop) return;
    var mv = e.target.closest ? e.target.closest(".bpop div[data-mv]") : null;
    if(mv){ e.preventDefault(); var cb = pop._cb; popClose(); if(cb) cb(+mv.dataset.mv); return; }
    if(e.target.closest && e.target.closest(".bpop .mf")) return;
    var tv = e.target.closest ? e.target.closest(".bpop div[data-twv]") : null;
    if(tv){ e.preventDefault(); cur.ta[pop._twi].w = tv.dataset.twv; persist(); popClose(); neuAufbau(); return; }
    var al = e.target.closest ? e.target.closest(".bpop [data-alle]") : null;
    if(al){ e.preventDefault(); pickAll = !pickAll; pickOpen(pickEl); return; }
    var d = e.target.closest ? e.target.closest(".bpop div[data-i]") : null;
    if(d){ e.preventDefault(); pickTake(pickList[+d.dataset.i]); return; }
    var mo = e.target.closest ? e.target.closest(".bpop a[data-mo]") : null;
    if(mo){ e.preventDefault(); var sr = cur.sp[pop._spi]; sr.mo = sr.mo || {}; var j = +mo.dataset.j; if(sr.mo[mo.dataset.mo] === j) delete sr.mo[mo.dataset.mo]; else sr.mo[mo.dataset.mo] = j; persist(); var bi = pop._spi; neuAufbau(); var nb = document.querySelector('[data-spm="' + bi + '"]'); if(nb) spOpen(nb); return; }
    if(e.target.closest && e.target.closest(".bpop.spop")) return;
    var s = e.target.closest ? e.target.closest(".bpop span[data-d]") : null;
    if(s){ e.preventDefault(); dieTake(s.dataset.d); return; }
    if(!e.target.closest(".bpop") && !(e.target.dataset && (e.target.dataset.pick || e.target.dataset.die))) popClose();
  });
  A.addEventListener("click", function(e){
    var el = e.target; if(!cur) return;
    if(el.dataset && el.dataset.die) { dieOpen(el); return; }
    var au = el.closest && el.closest("[data-auf]"); if(au){ aufKlick(au); return; }
    if(el.dataset && el.dataset.ahrow){ el._kind = "ah"; pickAll = false; pickOpen(el, true); return; }
    if(el.dataset && el.dataset.tw != null){ twOpen(el); return; }
    if(el.dataset && el.dataset.sst){ cur.sst = +el.dataset.sst; persist(); neuAufbau(); return; }
    if(el.dataset && el.dataset.spm != null){ spOpen(el); return; }
    if(el.dataset && el.dataset.elem){ var L = elemente(cur), E1 = el.dataset.elem, nmax = elemMax(cur); if(L.indexOf(E1) > -1) L.splice(L.indexOf(E1), 1); else { if(L.length >= nmax) L.pop(); L.push(E1); } cur.ahw = L; persist(); neuAufbau(); return; }
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

/* ---------- Schnittstelle für das Spielfeld ---------- */
var TPLK = {"KFS": "kfs", "MFS": "mfs", "GFS": "gfs", "Kegel": "kegel", "Strahl": "strahl"};
var MTPL = {"Flächenschlag": ["MFS"], "Chaos": ["MFS", "Kegel"], "Strahl": ["Kegel", "Strahl"], "Illusion": ["MFS"], "Licht/Dunkelheit": ["GFS"], "Geräusch/Stille": ["GFS"], "Boden weihen": ["GFS"],
  "Schwarzes Loch": ["GFS"], "Schwerkraft verändern": ["GFS"], "Fehlfunktion": ["MFS"], "Erdbeben": ["GFS"], "Energiekontrolle": ["MFS"], "Explodieren": ["GFS"], "Materiekontrolle": ["MFS"], "Verschleiern": ["GFS"], "Stoßen": ["Kegel"], "Wetterkontrolle": ["GFS"], "Wirbelwind": ["MFS"]};
function tplAus(t){
  var o = [], s = String(t || "");
  if(/Kegel/.test(s)) o.push("kegel");
  if(/\bKFS\b|kleine[nr]? Flächenschablone/i.test(s)) o.push("kfs");
  if(/\bMFS\b|mittlere[nr]? Flächenschablone/i.test(s)) o.push("mfs");
  if(/\bGFS\b|große[nr]? Flächenschablone/i.test(s)) o.push("gfs");
  if(/Strahlschablone/.test(s)) o.push("strahl");
  return o;
}
function machtTpl(n){
  var m = MA().filter(function(x){ return x.n === n; })[0], o = (MTPL[n] || []).map(function(k){ return TPLK[k]; });
  if(m) (m.m || []).forEach(function(md){ if(/^FLÄCHENEFFEKT/.test(md[0])){ var t = tplAus(md[2]); if(!t.length) t = ["mfs", "gfs"]; t.forEach(function(k){ if(o.indexOf(k) < 0) o.push(k); }); } });
  return o;
}
function reichweite(c, rw){
  var m = /^(Verstand|Willenskraft|Geschicklichkeit|Stärke|Konstitution)(?:\s*×\s*(\d+))?/.exec(String(rw || "").trim());
  if(m){ var d = c.a[ATK[m[1]]] || "W4", sides = /W(\d+)/.exec(d); return (sides ? +sides[1] : 4) * (m[2] ? +m[2] : 1); }
  if(/^Berührung|^Selbst/.test(String(rw || ""))) return 0;
  var z = /^(\d+)(?:“|")?$/.exec(String(rw || "").trim()); return z ? +z[1] : null;
}
function groesseZoll(g){ return g <= -4 ? 0.5 : g >= 12 ? 4 : g >= 8 ? 3 : g >= 4 ? 2 : 1; }
function werte(c){
  var b = berechne(c), F = fx(c), kat = null;
  function katalog(n){ if(!kat){ kat = {}; lWaffen().forEach(function(w){ kat[w.n] = w.f; }); } return kat[n]; }
  var waffen = [];
  (F.wa || []).forEach(function(x){ waffen.push({n: x[0], rw: "", sd: x[1].replace(/^Stä/, c.a.sta), pb: x[2], tpl: []}); });
  (F.sch || []).forEach(function(x){ waffen.push({n: x[0], rw: "", sd: x[2] || "", pb: "", tpl: [x[1]]}); });
  c.wa.forEach(function(w){ if(!w || !w.n) return; var k = katalog(w.n) || {};
    var t = tplAus((k.fs || "") + " " + (w.rw || "") + " " + (k.nt || w.nt || ""));
    waffen.push({n: w.n, rw: /\d+\/\d+\/\d+/.test(w.rw || "") ? w.rw : "", sd: /^Stä/.test(w.sd || "") ? w.sd.replace(/^Stä/, c.a.sta) : (w.sd || ""), pb: w.pb || "", tpl: t}); });
  var EL = ahFx(ahName(c, F)).elem ? elemente(c) : [];
  var maechte = c.ma.filter(function(m){ return m && m.n; }).map(function(m){ return {n: m.n, mp: m.mp || "", rw: m.rw || "", reich: reichweite(c, m.rw), tpl: machtTpl(m.n), au: m.nt || (EL.length === 1 ? EL[0] : ""), els: m.nt ? [] : EL}; });
  var r = {id: c.id, name: c.name || "Charakter", volk: c.volk || "", tempo: b.tempo, sprint: b.sprint, parade: b.parade, rob: b.rob + (b.pz ? " (" + b.pz + ")" : ""), gr: b.gr, d: groesseZoll(b.gr),
    ben: parseInt(c.ben, 10) || 0, wu: c.wu | 0, er: c.er | 0, st: c.st || {}, wmax: b.wmax, wig: b.wig, mp: ahName(c, F) ? (parseInt(c.mp, 10) || 0) + b.mpx : 0, waffen: waffen, maechte: maechte};
  r.mpa = c.mpa === "" || c.mpa == null ? r.mp : Math.min(r.mp, parseInt(c.mpa, 10) || 0); return r;
}
window.SWBogen = {
  liste: function(){ if(!DB) load(); return DB.list.filter(function(c){ return c && (c.name || c.volk); }); },
  get: function(id){ if(!DB) load(); return DB.list.filter(function(c){ return c.id === id; })[0] || null; },
  werte: function(id){ var c = this.get(id); return c ? werte(c) : null; },
  setze: function(id, o){ if(!DB) load(); var c = DB.list.filter(function(x){ return x.id === id; })[0]; if(!c) return; Object.keys(o).forEach(function(k){ if(k === "st"){ c.st = Object.assign({}, c.st || {}, o.st); } else c[k] = o[k]; }); persist(); if(cur && cur.id === id) cur = c; },
  oeffne: function(id){ if(!DB) load(); if(id){ DB.cur = id; persist(); } location.hash = "#bogen"; }
};
SWP["bogen/"] = bogenPage; window.bogenPage = bogenPage;
})();
