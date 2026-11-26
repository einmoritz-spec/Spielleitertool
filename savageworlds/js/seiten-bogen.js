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
var DB = null, cur = null, zoomT = 0;

function esc2(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"}[c]; }); }
function load(){ try{ DB = JSON.parse(localStorage.getItem(KEY) || "null"); }catch(e){} if(!DB || !DB.list) DB = {list: [], cur: ""}; }
function persist(){ try{ localStorage.setItem(KEY, JSON.stringify(DB)); }catch(e){} }
function uid(){ return "c" + Date.now().toString(36) + Math.floor(Math.random() * 1296).toString(36); }
function neu(){
  var c = {id: uid(), name: "", spieler: "", volk: "", eig: "", ep: 0, geld: "", tempo: 6, groesse: 0, ben: 3, wu: 0, er: 0, st: {}, bk: 0, bm: 0,
    a: {ges: "W4", kon: "W4", sta: "W4", ver: "W4", wil: "W4"}, sk: [], hi: [], ta: [], wa: [], ru: [], au: [], ma: [], ah: "", af: "", mp: "", mpa: "", sm: "", hg: "", no: ""};
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
  var at = 0, fp = 0;
  ["ges", "kon", "sta", "ver", "wil"].forEach(function(k){ at += Math.max(0, di(c.a[k]) - 1); });
  c.sk.forEach(function(s){
    var ai = di(c.a[(ATTR.filter(function(a){ return a[0] === s.a; })[0] || [0, "ges"])[1]]), idx = di(s.d), b = KERN[s.n] ? 1 : 0;
    for(var k = b + 1; k <= idx; k++) fp += k <= ai ? 1 : 2;
  });
  return {at: at, fp: fp};
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
  var gr = parseInt(c.groesse, 10) || 0;
  return {parade: pa + pb + wp, rob: 2 + halb(ks) + rp + gr, pz: rp, kopf: kopf, last: last, grenze: LAST[c.a.sta] || "", ep: parseInt(c.ep, 10) || 0};
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
function liste(kind, ctx){
  var o = [], all;
  if(kind === "volk") return allVoelker().filter(function(v){ return vis(v.s); }).map(function(v){ return {n: v.n, s: v.s, v: v}; });
  if(kind === "ha") return SW_HANDICAPS.filter(function(h){ return vis(h.s); }).concat(window.SW_HANDICAPS_ZUS || []).map(function(h){ return {n: h.n, sub: h.w, s: h.s, h: h}; });
  if(kind === "ta") return SW_TALENTE.filter(function(t){ return vis(t.s); }).map(function(t){ return {n: t.n, sub: t.k + (t.r != null ? " · " + RAENGE[t.r] : ""), s: t.s}; });
  if(kind === "sk") return SW_SKILLS.map(function(s){ return {n: s.n, a: s.a, s: ["GRW"], sub: s.g ? "Grund" : ""}; }).concat((window.SW_SKILLS_ZUS || []).filter(function(s){ return vis(s.s); }).map(function(s){ return {n: s.n, a: s.a, s: s.s}; })).filter(function(s){ return s.a === ctx; });
  if(kind === "wa") return lWaffen();
  if(kind === "ru") return lRuestung();
  if(kind === "au") return lAusr();
  if(kind === "ah") return (window.SW_AH || []).filter(function(a){ return vis(a.s); }).map(function(a){ return {n: a.n, sub: a.f, s: a.s, ah: a}; });
  if(kind === "ma") return (window.SW_MACHTE || []).filter(function(m){ return vis(m.s || ["GRW"]); }).map(function(m){ return {n: m.n, sub: "Rang " + (m.r != null ? RAENGE[m.r] : ""), s: m.s || ["GRW"], m: m}; });
  return o;
}
function allVoelker(){ return window.allVoelker && window.allVoelker !== allVoelker ? window.allVoelker() : SW_VOELKER.concat(window.SW_VOELKER_FAN || [], window.SW_VOELKER_HOR || [], window.SW_VOELKER_SF || []); }

/* ---------- Bogen aufbauen ---------- */
function inp(arr, i, f, o){
  o = o || {}; var v = arr === "$" ? cur[f] : (cur[arr][i] || {})[f];
  return '<input ' + (o.cls ? 'class="' + o.cls + '" ' : "") + 'data-a="' + arr + '" data-i="' + i + '" data-f="' + f + '" ' + (o.pick ? 'data-pick="' + o.pick + '" ' : "") + (o.ctx ? 'data-ctx="' + o.ctx + '" ' : "") + (o.ph ? 'placeholder="' + o.ph + '" ' : "") + (o.ro ? "readonly " : "") + 'value="' + esc2(v) + '" autocomplete="off" spellcheck="false">';
}
function top(id, lab, o){ o = o || {}; return '<div class="f' + (o.c ? " " + o.c : "") + '"><label>' + lab + '</label><input ' + (o.calc ? 'class="calc" readonly ' : "") + 'data-a="$" data-f="' + id + '" ' + (o.pick ? 'data-pick="' + o.pick + '" ' : "") + 'value="' + esc2(cur[id]) + '" autocomplete="off" spellcheck="false"' + (o.id ? ' id="' + o.id + '"' : "") + "></div>"; }
function rows(arr){ var l = cur[arr], last = -1; l.forEach(function(x, i){ if(x && x.n) last = i; }); return Math.max(BASE[arr], last + 2); }
function pips(key, n, rd){ var h = ""; for(var i = 1; i <= n; i++) h += '<i class="pip' + (rd ? " rd" : "") + (cur[key] >= i ? " on" : "") + '" data-pip="' + key + '" data-n="' + i + '"></i>'; return h; }
function sheet(){
  var c = cur, b = berechne(c), p = cost(c), h = "", AUS = "";
  h += '<div class="bkop"><img src="../assets/logos/savage-worlds.webp" alt=""><div class="tt">Charakter<i>bogen</i></div></div>';
  h += '<div class="binfo r1">' + top("name", "Name", {c: "n"}) + top("spieler", "Spieler") + "</div>";
  h += '<div class="binfo">' + top("volk", "Volk", {pick: "volk"}) + top("rang", "Rang", {calc: 1, id: "b-rang"}) + top("ep", "Erfahrung") + top("aufst", "Aufstiege", {calc: 1, id: "b-aufst"}) + top("geld", "Geld") + "</div>";
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
    '<div><span class="cap">Tempo</span><input data-a="$" data-f="tempo" value="' + esc2(c.tempo) + '"><small>Zoll</small></div>' +
    '<div><span class="cap">Parade</span><input class="calc" readonly id="b-par" value="' + b.parade + '"><small>&nbsp;</small></div>' +
    '<div><span class="cap">Robustheit</span><input class="calc" readonly id="b-rob" value="' + b.rob + (b.pz ? " (" + b.pz + ")" : "") + '"><small>Panzerung</small></div>' +
    '<div><span class="cap">Größe</span><input data-a="$" data-f="groesse" value="' + esc2(c.groesse) + '"><small>&nbsp;</small></div></div>' +
    '<div class="bstat2"><div><span class="cap">Bennys</span><div class="pips">' + pips("bk", 0) + '<input style="width:36px;text-align:center;font:700 18px Oswald" data-a="$" data-f="ben" value="' + esc2(c.ben) + '"></div></div>' +
    '<div><span class="cap">Wunden</span><div class="pips">' + pips("wu", 3) + '<span class="pl">KU</span></div></div>' +
    '<div><span class="cap">Erschöpfung</span><div class="pips">' + pips("er", 2) + '<span class="pl">KU</span></div></div></div>' +
    '<div class="bstat2" style="grid-template-columns:1fr"><div style="min-height:0;padding:3px 7px 4px"><div class="pips" style="margin:0;gap:12px">' +
    ["Angeschlagen", "Abgelenkt", "Verwundbar"].map(function(s){ return '<span style="display:inline-flex;gap:4px;align-items:center"><i class="pip' + (c.st[s] ? " on" : "") + '" data-pip="st" data-n="' + s + '"></i><span class="pl">' + s + "</span></span>"; }).join("") + "</div></div></div></div>";
  var hp = 0; c.hi.forEach(function(x){ if(x && x.n) hp += x.w === "S" ? 2 : 1; });
  h += '<div class="box"><h3>Handicaps<span class="cnt" id="b-hp">' + hp + " / 4 Punkte</span></h3><div class=\"lst\">";
  for(var i = 0, n = rows("hi"); i < n; i++) h += '<div class="r"><span class="g">' + inp("hi", i, "n", {pick: "ha"}) + '</span><input class="bw1 c" readonly data-w="' + i + '" title="leicht / schwer" value="' + esc2((c.hi[i] || {}).n ? ((c.hi[i] || {}).w || "L") : "") + '"></div>';
  h += "</div></div>";
  h += '<div class="box"><h3>Talente</h3><div class="lst">';
  for(i = 0, n = rows("ta"); i < n; i++) h += '<div class="r"><span class="g">' + inp("ta", i, "n", {pick: "ta"}) + "</span></div>";
  h += "</div></div>";
  h += '<div class="box"><h3>Waffen</h3><div class="lst"><div class="r hd"><span class="g">Waffe</span><span class="c" style="width:48px">Reichw.</span><span class="c" style="width:58px">Schaden</span><span class="c" style="width:22px">PB</span><span class="c" style="width:22px">FR</span><span class="c" style="width:34px">MSt</span></div>';
  for(i = 0, n = rows("wa"); i < n; i++){
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
  APP.innerHTML = '<div class="bgwrap">' + bar() + '<div class="sheetwrap"><div class="bsheet" id="bsheet">' + sheet() + "</div></div></div>";
  calc(); fit(); wire();
}
function neuAufbau(){ var y = window.scrollY; var s = document.getElementById("bsheet"); s.innerHTML = sheet(); calc(); window.scrollTo(0, y); }
function calc(){
  var c = cur, b = berechne(c), p = cost(c), $ = function(i){ return document.getElementById(i); };
  if($("b-rang")) $("b-rang").value = rang(b.ep);
  if($("b-aufst")) $("b-aufst").value = Math.floor(b.ep / 5);
  if($("b-par")) $("b-par").value = b.parade;
  if($("b-rob")) $("b-rob").value = b.rob + (b.pz ? " (" + b.pz + ")" : "");
  var cn = $("b-cnt"); if(cn){ var at = 5 + (c.bk | 0), fp = 12 + (c.bm | 0); cn.innerHTML = "Attr. " + p.at + "/5 · Fert. " + p.fp + "/12"; cn.className = "cnt" + (p.at > 5 || p.fp > 12 ? " ov" : " ok"); }
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
  var kind = el.dataset.pick, q = el.value.trim().toLowerCase(), L = liste(kind, el.dataset.ctx);
  var used = {}; if(kind === "sk") cur.sk.forEach(function(s){ used[s.n] = 1; });
  if(el.dataset.new !== "sk" && kind === "sk") q = "";
  var own = (el.dataset.a && el.dataset.i != null) ? (cur[el.dataset.a][el.dataset.i] || {}).n : "";
  if(q === String(el._orig || "").trim().toLowerCase()) q = "";
  pickList = L.filter(function(x){ return !used[x.n] && (!q || x.n.toLowerCase().indexOf(q) > -1); }).slice(0, 80); pickEl = el; popI = -1;
  var h = pickList.map(function(x, i){ return '<div data-i="' + i + '"><span>' + esc2(x.n) + badge(x.s) + "</span><small>" + esc2(x.sub || "") + "</small></div>"; }).join("") || '<div class="leer">Eigenen Eintrag mit Enter übernehmen</div>';
  popAt(el, {html: h});
}
function pickTake(x){
  var el = pickEl; if(!el) return; var kind = el.dataset.pick;
  if(kind === "sk"){
    if(el.dataset.new === "sk") cur.sk.push({n: x.n, a: el.dataset.ctx, d: "W4"}); else cur.sk[el.dataset.i].n = x.n;
  } else if(el.dataset.a === "$"){
    cur[el.dataset.f] = x.n;
    if(kind === "volk" && x.v){ cur.hg = cur.hg ? cur.hg : (x.v.e || []).map(function(e){ return e[0]; }).join(", "); }
    if(kind === "ah" && x.ah){ cur.af = x.ah.f || ""; cur.mp = x.ah.mp || ""; cur.sm = x.ah.sm || ""; }
  } else {
    var arr = cur[el.dataset.a], i = +el.dataset.i; while(arr.length <= i) arr.push({});
    if(kind === "ha") arr[i] = {n: x.n, w: /^schwer$/.test((x.h && x.h.w) || "") ? "S" : "L"};
    else if(kind === "ma") arr[i] = {n: x.n, mp: x.m.mp || "", rw: x.m.rw || "", wd: x.m.wd || "", nt: ""};
    else if(x.f) arr[i] = Object.assign({}, x.f); else arr[i] = {n: x.n};
  }
  persist(); popClose(); neuAufbau();
}
function dieOpen(el){
  var f = el.dataset.die, cu = f === "a" ? cur.a[el.dataset.f] : f === "s" ? cur.sk[el.dataset.i].d : "";
  var h = ["W4", "W6", "W8", "W10", "W12", "W12+1", "W12+2"].map(function(d){ return '<span class="' + (d === cu ? "on" : "") + '" data-d="' + d + '">' + d + "</span>"; }).join("") + (f === "s" ? '<span data-d="">✕</span>' : "");
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
    if(el.dataset.a === "$"){ cur[el.dataset.f] = el.value; if(el.dataset.f === "name"){ var a = document.querySelector('.bgbar a[data-sel="' + DB.id + '"]'); var on = document.querySelector(".bgbar a.on"); if(on) on.textContent = el.value || "Neuer Charakter"; } }
    else if(el.dataset.a && el.dataset.i != null){ var arr = cur[el.dataset.a]; while(arr.length <= +el.dataset.i) arr.push({}); arr[el.dataset.i][el.dataset.f] = el.value; }
    if(el.dataset.pick) pickOpen(el);
    persist(); calc();
  });
  A.addEventListener("change", function(e){
    var el = e.target; if(!el.dataset || el.dataset.sd == null && el.dataset.f == null) return;
    if(el.dataset.a && el.dataset.a !== "$" && el.dataset.a !== "sk" && el.dataset.f === "n" && !el.value.trim()){ cur[el.dataset.a][el.dataset.i] = {}; persist(); neuAufbau(); return; }
    if(el.dataset.a === "sk" && el.dataset.f === "n" && !el.value.trim() && !KERN[cur.sk[el.dataset.i].n]){ cur.sk.splice(el.dataset.i, 1); persist(); neuAufbau(); return; }
    if(el.dataset.sd != null || el.dataset.f === "n" || el.dataset.f === "ms") neuAufbau();
  });
  A.addEventListener("focusin", function(e){ var el = e.target; if(el.dataset && el.dataset.pick) pickOpen(el, true); });
  A.addEventListener("keydown", function(e){
    var el = e.target; if(!el.dataset || !el.dataset.pick) return;
    var items = pop ? [].slice.call(pop.querySelectorAll("div[data-i]")) : [];
    if(e.key === "ArrowDown" || e.key === "ArrowUp"){ e.preventDefault(); e.stopPropagation(); if(!items.length) return; popI = (popI + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length; items.forEach(function(d, i){ d.classList.toggle("on", i === popI); }); items[popI].scrollIntoView({block: "nearest"}); }
    else if(e.key === "Enter"){ e.preventDefault(); if(popI > -1 && pickList[popI]) pickTake(pickList[popI]); else { var v = el.value.trim(); if(!v) return; if(pickList.length === 1 && pickList[0].n.toLowerCase() === v.toLowerCase()) pickTake(pickList[0]); else { pickTake({n: v}); } } }
    else if(e.key === "Escape"){ e.stopPropagation(); popClose(); }
  }, true);
  document.addEventListener("mousedown", function(e){
    if(!pop) return;
    var d = e.target.closest ? e.target.closest(".bpop div[data-i]") : null;
    if(d){ e.preventDefault(); pickTake(pickList[+d.dataset.i]); return; }
    var s = e.target.closest ? e.target.closest(".bpop span[data-d]") : null;
    if(s){ e.preventDefault(); dieTake(s.dataset.d); return; }
    if(!e.target.closest(".bpop") && !(e.target.dataset && (e.target.dataset.pick || e.target.dataset.die))) popClose();
  });
  A.addEventListener("click", function(e){
    var el = e.target; if(!cur) return;
    if(el.dataset && el.dataset.die) { dieOpen(el); return; }
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
