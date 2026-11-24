/* Auf See: Modi „Wildes Blau“ und „Tiefe“ (Storm and Root). Texte stammen aus regeln-sr-a.js / regeln-sr-b.js, hier nur Zählen und Würfeln. */
var SXSEC = {};
function sxSec(id){ if(SXSEC[id]) return SXSEC[id]; var L = (window.WS_NACH && WS_NACH.regeln) || []; for(var i = 0; i < L.length; i++) if(L[i].id === id) return SXSEC[id] = L[i].b || []; return SXSEC[id] = []; }
function sxTab(id, n){ var k = 0, b = sxSec(id); for(var i = 0; i < b.length; i++) if(b[i].tab){ if(k === n) return b[i].tab.z; k++; } return []; }
function sxAfterH(id, h, key){ var b = sxSec(id); for(var i = 0; i < b.length; i++) if(b[i].h === h){ for(var j = i + 1; j < b.length; j++) if(b[j][key || "a"]) return b[j][key || "a"]; } return ""; }
function sxC(id, name){ var b = sxSec(id); for(var i = 0; i < b.length; i++) if(b[i].c === name) return b[i]; return {}; }
function sxPg(p){ return '<span class="pg"><a onclick="openBook(\'ws_z1\',' + p + ')">S. ' + p + '</a></span>'; }
function sxBlock(id, key){ var b = sxSec(id); for(var i = 0; i < b.length; i++) if(b[i][key]) return b[i]; return {}; }
function sxLast(t){ var l = String(t || '').split('\n'); return l[l.length - 1]; }
function sxP(t){ return String(t || "").split("\n").map(function(p){ return "<p>" + esc(p) + "</p>"; }).join(""); }
var SXD = function(){ return 1 + Math.floor(Math.random() * 6); };

/* Zustand */
function sxS(){ var s = RS(); s.blau = s.blau || {}; s.tiefe = s.tiefe || {};
  var b = s.blau; b.hoehe = b.hoehe || "unter"; b.lage = b.lage || ""; b.mod = b.mod || "normal";
  b.aerger = b.aerger || [{m:0,t:""},{m:0,t:""},{m:0,t:""}]; b.augen = b.augen || [{n:"",z:0},{n:"",z:0}];
  var t = s.tiefe; if(t.stufe == null) t.stufe = 0; t.len = t.len || 6; t.marks = t.marks || 0; t.folgen = t.folgen || []; t.mod = t.mod || "tief";
  return s; }
function seeModus(m){ RS().modus = m; save(); render(); }
function seeModusBar(){ var m = RS().modus || "wellen";
  return '<div class="sxm">' + [["wellen","Wellen"],["blau","Wildes Blau"],["tiefe","Tiefe"]].map(function(x){ return '<a class="' + (m === x[0] ? 'on' : '') + '" onclick="seeModus(\'' + x[0] + '\')">' + x[1] + '</a>'; }).join("") + '</div>'; }

/* Wachtabellen */
function sxWacheBlau(){ var g = {frieden:[], ordnung:[], natur:[]};
  sxTab("sr-blau-wache", 0).forEach(function(r){ var l = r[0], k = /^Ordnung/.test(l) ? "ordnung" : /^Natur/.test(l) ? "natur" : "frieden";
    if(k !== "frieden" && /…$/.test(r[1])) return; g[k].push(r[1]); }); return g; }
function sxWacheTiefe(){ return {frieden: sxC("sr-reisen-dunkelheit", "Spannung (6)").l || [], ordnung: sxC("sr-reisen-dunkelheit", "Ordnung (4–5)").l || [], natur: sxC("sr-reisen-dunkelheit", "Natur (1–3)").l || []}; }
function sxCol(W){ return W ? (W === 6 ? "frieden" : W >= 4 ? "ordnung" : "natur") : ""; }
function sxTable(g, names, W, Z){ var col = sxCol(W);
  return '<div class="wt">' + [["frieden","6"],["ordnung","5–4"],["natur","3–1"]].map(function(c, ci){
    return '<div class="tb' + (col === c[0] ? ' act' : '') + '"><div class="th">' + names[ci] + '<span>' + c[1] + '</span></div>' + g[c[0]].map(function(x, i){ var n = 6 - i; return '<div class="row' + (col === c[0] && Z === n ? ' hit' : '') + '"><i>' + n + '</i>' + esc(x) + '</div>'; }).join("") + '</div>'; }).join("") + '</div>'; }
function sxThreat(m, mode){ var a = [SXD(), SXD(), SXD()].sort(function(x, y){ return x - y; });
  if(mode === "blau") return m === "karte" ? Math.max(a[0], a[1]) : m === "nacht" ? Math.min(a[0], a[1]) : a[0];
  return m === "schutz" ? a[0] : m === "karte" ? a[1] : Math.min(a[0], a[1]); }
function sxRoll(k){ var s = sxS(), o = k === "blau" ? s.blau : s.tiefe; o.w = SXD(); o.z = SXD(); o.t = sxThreat(o.mod, k); save(); render(); }
function sxMod(k, v){ var s = sxS(); (k === "blau" ? s.blau : s.tiefe).mod = v; save(); render(); }
function sxDice(o, k, g, hasLbl){ var W = o.w, col = sxCol(W), T = o.t, tl = !T ? "" : T === 6 ? "Gefahrlose Gelegenheit" : T >= 4 ? "Gefahr mit Nutzen" : "Unmittelbare Gefahr";
  var nm = k === "blau" ? {frieden:"Frieden",ordnung:"Ordnung",natur:"Natur"} : {frieden:"Spannung",ordnung:"Ordnung",natur:"Natur"};
  var opts = k === "blau" ? [["normal","Normal"],["karte","Seekarte"],["nacht","Nachtflug"]] : [["tief","Tauchboot"],["karte","Seekarte"],["schutz","Geschützt"]];
  return '<div class="dice"><div class="die"><small>Wache</small><div class="n">' + (W || "–") + '</div><b>' + (W ? nm[col] : "&nbsp;") + '</b></div><div class="die hid"><small>Bedrohung · verdeckt</small><div class="n">' + (T || "–") + '</div><b>' + (tl || "&nbsp;") + '</b></div></div>' +
   '<div class="btns"><button onclick="sxRoll(\'' + k + '\')">Wache würfeln</button></div>' +
   '<div class="sxo">' + opts.map(function(x){ return '<a class="' + (o.mod === x[0] ? 'on' : '') + '" onclick="sxMod(\'' + k + '\',\'' + x[0] + '\')">' + x[1] + '</a>'; }).join("") + '</div>'; }
function sxModHint(k){ if(k === "blau") return "Normal: 1W6 · Seekarte: 2W6, höheres (S. 31) · Nachtflug: 2W6, niedrigeres (S. 31)";
  return "Tauchboot: 2W6, höchstes abziehen · Seekarte: zusätzlicher W6, dann höchstes abziehen und höchstes verbleibendes nehmen · Geschützt: 1W6 (S. 56)"; }

/* Wildes Blau */
var SXH = [["unter","Unter den Wolken"],["in","In den Wolken"],["ueber","Über den Wolken"]];
var SXL = ["Wolkenloser Himmel","Gewitterwolken","Wilde Winde","Jetstreams"];
function sxHoehe(v){ sxS().blau.hoehe = v; save(); render(); }
function sxLage(v){ var b = sxS().blau; b.lage = b.lage === v ? "" : v; save(); render(); }
function sxHoeheCard(b){ var cur = SXH.filter(function(h){ return h[0] === b.hoehe; })[0], c = sxC("sr-blau-hoehe", cur[1]);
  var txt = String(c.x || "").split("\n"), mech = txt[txt.length - 1];
  var lg = b.lage ? sxC("sr-blau-hoehe", b.lage) : null;
  return '<div class="sxc"><div class="h">Höhe ' + sxPg(29) + '</div><div class="sxh">' + SXH.map(function(h, i){ return '<a class="' + (b.hoehe === h[0] ? 'on' : '') + '" onclick="sxHoehe(\'' + h[0] + '\')"><i>' + (3 - i) + '</i>' + h[1] + '</a>'; }).join("") + '</div>' +
   '<div class="sxt"><p>' + esc(mech) + '</p>' + (c.l ? '<ul class="bul">' + c.l.map(function(x){ return '<li>' + esc(x) + '</li>'; }).join("") + '</ul>' : '') + '</div>' +
   '<div class="sxo l">' + SXL.map(function(x){ return '<a class="' + (b.lage === x ? 'on' : '') + '" onclick="sxLage(\'' + x + '\')">' + x + '</a>'; }).join("") + '</div>' +
   (lg ? '<div class="sxt"><p>' + esc(lg.x) + '</p></div>' : '') + '</div>'; }
function sxAerger(i){ var b = sxS().blau; b.aerger[i].m = b.aerger[i].m ? 0 : 1; save(); render(); }
function sxAergerClear(){ var b = sxS().blau; b.aerger = [{m:0,t:""},{m:0,t:""},{m:0,t:""}]; save(); render(); }
function sxAergerCard(b){ var full = b.aerger.every(function(a){ return a.m; });
  return '<div class="sxc"><div class="h">Ärger-Leiste ' + sxPg(30) + '</div>' + b.aerger.map(function(a, i){
    return '<div class="sxr"><span class="dot' + (a.m ? ' m' : '') + '" onclick="sxAerger(' + i + ')"></span><input placeholder="Flüchtiger Eindruck" value="' + esc(a.t) + '" onchange="sxS().blau.aerger[' + i + '].t=this.value;save()"></div>'; }).join("") +
   (full ? '<div class="sxt note"><p>' + esc(sxAfterH("sr-blau-aerger-suchen", "Wenn die Ärger-Leiste voll ist")).split("\n")[0] + '</p></div><div class="btns"><button onclick="sxAergerClear()">Leiste leeren</button></div>' : '') + '</div>'; }
var SXZ = ["unmarkiert", "markiert", "verbrannt"];
function sxAuge(i, d){ var a = sxS().blau.augen[i]; a.z = Math.max(0, Math.min(2, a.z + d)); save(); render(); }
function sxAugenCard(b){ var T = sxTab("sr-blau-wachsame-augen", 0);
  return '<div class="sxc"><div class="h">Wachsame Augen ' + sxPg(33) + '</div><div class="sx2"><div>' + b.augen.map(function(a, i){
    return '<div class="sxr au"><span class="dot' + (a.z ? ' m' : '') + (a.z === 2 ? ' b' : '') + '" onclick="sxAuge(' + i + ',1)" oncontextmenu="event.preventDefault();sxAuge(' + i + ',-1)"></span><input placeholder="' + (i ? 'Beobachter von unten ↓' : 'Beobachter von oben ↑') + '" value="' + esc(a.n) + '" onchange="sxS().blau.augen[' + i + '].n=this.value;save()"><em>' + SXZ[a.z] + '</em><button onclick="sxAuge(' + i + ',-1)">−</button><button onclick="sxAuge(' + i + ',1)">+</button></div>'; }).join("") + '</div>' +
   '<div class="sxt"><b class="sxs">Niedrigstes gekürztes Ergebnis ' + sxPg(34) + '</b>' + T.map(function(r){ return /·/.test(r[0]) ? '<p class="k"><b>' + esc(r[0]) + '</b></p>' : '<p class="k2">' + esc(r[1]) + '</p>'; }).join("") + '</div></div></div>'; }
function sxAkt(){ var out = ""; sxSec("sr-blau-aufmerksamkeitsfolgen").forEach(function(x){ if(x.c && x.l && /^Das Glühwürmchen kann/.test(x.c)) out += '<div><b class="sxs">' + esc(x.c.replace(/ …$/, "")) + '</b><ul class="bul">' + x.l.map(function(y){ return '<li>' + esc(y) + '</li>'; }).join("") + '</ul></div>'; }); return '<div class="sxc"><div class="h">Aufmerksamkeitsaktionen ' + sxPg(34) + '</div><div class="sx2">' + out + '</div></div>'; }
function sxBlau(r){ var s = sxS(), b = s.blau, g = sxWacheBlau();
  return '<div class="sxg"><div class="sxcol">' + sxHoeheCard(b) + '<div class="sxc"><div class="h">Wache ' + sxPg(28) + '</div>' + sxDice(b, "blau", g) + '<div class="chk">' + sxModHint("blau") + '</div></div>' + sxAergerCard(b) + '</div>' +
   '<div class="sxcol"><div><div class="h">Wachwurf-Ergebnisse für das Wilde Blau ' + sxPg(28) + '</div>' + sxTable(g, ["Frieden","Ordnung","Natur"], b.w, b.z) + '</div>' + sxAugenCard(b) + sxAkt() + '</div></div>'; }

/* Tiefe */
function sxFull(t){ if(t.marks >= t.len){ if(t.stufe < 3){ t.stufe++; t.marks = 0; t.neu = true; } else t.marks = t.len; } }
function sxMark(n){ var t = sxS().tiefe; t.marks = Math.max(0, Math.min(t.len, t.marks + n)); sxFull(t); save(); render(); }
function sxDot(i){ var t = sxS().tiefe; t.marks = t.marks === i + 1 ? i : i + 1; sxFull(t); save(); render(); }
function sxLen(d){ var t = sxS().tiefe; t.len = Math.max(1, Math.min(30, t.len + d)); t.marks = Math.min(t.marks, t.len); sxFull(t); save(); render(); }
function sxStufe(d, clear){ var t = sxS().tiefe, n = Math.max(0, Math.min(3, t.stufe + d)); if(n > t.stufe) t.neu = true; t.stufe = n; if(clear) t.marks = 0; save(); render(); }
function sxDismiss(){ sxS().tiefe.neu = false; save(); render(); }
function sxFolge(){ var t = sxS().tiefe, a = SXD(), b = SXD(), c = sxCats()[a]; if(!c) return; var r = c.rows[b - 1]; t.f = {a:a, b:b}; t.folgen.push({k:c.name, t:r[1], x:r[2]}); t.neu = false; save(); render(); }
function sxFolgeDel(i){ sxS().tiefe.folgen.splice(i, 1); save(); render(); }
function sxFolgeEigen(el){ var v = el.value.trim(); if(!v) return; sxS().tiefe.folgen.push({k:"Einzigartig", t:v, x:""}); save(); render(); }
var SXCATS;
function sxCats(){ if(SXCATS && SXCATS[1]) return SXCATS; SXCATS = {}; ["sr-druckfolgen", "sr-druckfolgen-tabellen"].forEach(function(id){ var cur = null; sxSec(id).forEach(function(x){ var m = x.h && x.h.match(/^(\d) – (.+)$/); if(m) cur = {n:+m[1], name:m[2].replace(/^… /, ""), rows:[]}; if(x.tab && cur){ cur.rows = x.tab.z; SXCATS[cur.n] = cur; cur = null; } }); }); return SXCATS; }
function sxDruckCard(t){ var dots = ""; for(var i = 0; i < t.len; i++) dots += '<span class="dot' + (i < t.marks ? ' m' : '') + '" onclick="sxDot(' + i + ')"></span>';
  var jb = sxTab("sr-druck", 0).filter(function(r){ return r[0] === String(t.stufe); })[0];
  return '<div class="sxc"><div class="h">Druckanzeige ' + sxPg(58) + '</div><div class="sxd"><div class="sxk"><button onclick="sxStufe(-1)">−</button><div class="ring">' + t.stufe + '</div><button onclick="sxStufe(1)">+</button></div>' +
   '<div class="sxl"><div class="chain">' + dots + '</div><div class="sxo"><a onclick="sxLen(-1)">Leiste −</a><span>' + t.marks + ' / ' + t.len + '</span><a onclick="sxLen(1)">Leiste +</a></div></div></div>' +
   '<div class="chk">Druckstufe 0–3 · bei voller Leiste steigt die Stufe und die gesamte Leiste wird geleert (S. 59)</div></div>'; }
var SXK = {
 auf: [[0,"Leviathan / Schrecken",1],[1,"Anker geworfen / Rast",1],[2,"Schiff verlassen",1],[3,"Dichtung / Panzerung beschädigt",1]],
 sen: [[0,"Wunder / Leviathan überlebt",-1],[1,"Riss gewählt",-1],[2,"Sicherer Hafen",-1],[3,"Wert repariert",-1]] };
function sxTrig(){ var A = sxTab("sr-druck-aufbauen", 0), S = sxTab("sr-druck-aufbauen", 1);
  var btn = function(lbl, tag, act, tip){ return '<div class="sxb" onclick="' + act + '"><b>' + esc(lbl) + ' <em>' + tag + '</em></b><small>wenn ' + esc(tip) + '</small></div>'; };
  var up = SXK.auf.map(function(k){ return btn(k[1], "+1", "sxMark(1)", A[k[0]][1]); }).join("") + btn("Tiefere Schicht", "Stufe +1", "sxStufe(1)", A[4][1]);
  var dn = SXK.sen.map(function(k){ return btn(k[1], "−1", "sxMark(-1)", S[k[0]][1]); }).join("") +
    btn("Tiefhafen angelegt", "Stufe −1", "sxStufe(-1)", S[4][1].split(";")[0]) +
    btn("Nautilisierter Tiefhafen", "Stufe −1 · Leiste leer", "sxStufe(-1,1)", (S[4][1].split(";")[1] || "").trim()) +
    btn("Höhere Schicht", "Stufe −1", "sxStufe(-1)", S[5][1]);
  return '<div class="sxc"><div class="h">Druck aufbauen ' + sxPg(59) + '</div><div class="sxbs">' + up + '</div></div><div class="sxc"><div class="h">Druck senken ' + sxPg(59) + '</div><div class="sxbs">' + dn + '</div></div>'; }
function sxFolgenCard(t){ var cs = sxCats(), c = sxBlock("sr-druckfolgen", "l").l || [], f = t.f;
  var last = f && cs[f.a] ? '<div class="sxres"><span>' + f.a + '·' + f.b + '</span><div><b>' + esc(cs[f.a].rows[f.b - 1][1]) + '</b><small>' + esc(cs[f.a].name) + '</small></div></div>' : '';
  return '<div class="sxc' + (t.neu ? ' pulse' : '') + '"><div class="h">Druckfolgen ' + sxPg(60) + '</div>' + (t.neu ? '<div class="sxt note"><p><b>Druckstufe gestiegen.</b> ' + esc(sxLast(sxSec("sr-druckfolgen")[0].a)) + '</p><ul class="bul">' + c.map(function(x){ return '<li>' + esc(x) + '</li>'; }).join("") + '</ul><a class="x" onclick="sxDismiss()">Erledigt</a></div>' : '') +
   '<div class="btns"><button onclick="sxFolge()">Zufällige Druckfolge · 2W6</button></div>' + last +
   '<div class="sxo l"><input id="sxeig" placeholder="Einzigartige Druckfolge …" onkeydown="if(event.key===\'Enter\')sxFolgeEigen(this)"></div></div>'; }
function sxListeCard(t){ var cs = sxCats();
  return '<div class="sxc"><div class="h">Aktuelle Druckfolgen</div>' + (t.folgen.length ? t.folgen.map(function(f, i){ return '<div class="sxf"><div><b>' + esc(f.t) + '</b> <small>' + esc(f.k) + '</small>' + (f.x ? '<p>' + esc(f.x) + '</p>' : '') + '</div><a onclick="sxFolgeDel(' + i + ')">×</a></div>'; }).join("") : '<div class="sxt"><p class="mut">Keine.</p></div>') + '</div>'; }
function sxTiefe(r){ var s = sxS(), t = s.tiefe, g = sxWacheTiefe();
  return '<div class="sxg"><div class="sxcol">' + sxDruckCard(t) + sxFolgenCard(t) + '<div class="sxc"><div class="h">Wache ' + sxPg(56) + '</div>' + sxDice(t, "tiefe", g) + '<div class="chk">' + sxModHint("tiefe") + '</div></div>' + sxListeCard(t) + '</div>' +
   '<div class="sxcol"><div class="sxrow2">' + sxTrig() + '</div>' +
   '<div><div class="h">Wachwurf-Ergebnisse für die Tiefen ' + sxPg(56) + '</div>' + sxTable(g, ["Spannung","Ordnung","Natur"], t.w, t.z) + '</div></div></div>'; }
function rSeeExt(m, r){ return m === "blau" ? sxBlau(r) : sxTiefe(r); }
