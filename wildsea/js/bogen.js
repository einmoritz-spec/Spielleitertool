/* Interaktiver Charakterbogen: #bogen (leer) und #bogen/<pc-id> (fertiger Charakter). Zustand: ST.bogen["leer"] bzw. ST.bogen[<pc-id>]. */
var BG_SK = ["Abfangen","Zerschlagen","Zusammenbrauen","Kochen","Schürfen","Glänzen","Hacken","Ernten","Jagen","Überlisten","Rasseln","Bergen","Spüren","Studieren","Beeinflussen","Pflegen","Springen","Wellenlauf"];
var BG_ED = ["Anmut","Eisen","Instinkt","Schärfe","Zähne","Gezeiten","Schleier"];
var BG_LA = ["Low Sour","Chthonisch","Saprekk","Gaudimm","Knock","Brasstongue","Raka Spit","Lyre-Bite","Alte Hand","Signalgebung","Highvin"];
var BG_LA_ALIAS = {"Chthonic":"Chthonisch","Old Hand":"Alte Hand","Signalling":"Signalgebung","Messingzunge":"Brasstongue","Tiefsauer":"Low Sour"};
var BG = {key:"leer", st:null};
function bgTrack(n){ return {n:"", t:"", d:"", len:8, m:[0,0,0,0,0,0,0,0]}; }
function bgNew(){
  var o = {f:{}, e:[0,0,0,0,0,0,0], s:{}, l:{}, lx:"", a:[], mo:[], tr:[]}, i;
  for(i = 0; i < 7; i++) o.a.push(bgTrack());
  for(i = 0; i < 4; i++) o.mo.push({t:"", m:[0,0]});
  for(i = 0; i < 3; i++) o.tr.push(bgTrack());
  return o;
}
function bgPcList(){ return (window.WS_BOGEN && WS_BOGEN.pcs) || []; }
function bgFromPc(p){
  var o = bgNew(), pc = p.pc, R = pc.res || {}, mi = pc.meilensteine || {};
  o.f = {name:p.t, spieler:"", blut:pc.blut || "", herkunft:pc.herkunft || "", posten:pc.posten || "", notizen:"",
    gross:(mi.gross || []).join("\n"), klein:(mi.klein || []).join("\n"), antriebe:(pc.antriebe || []).join("\n"),
    bergegut:(R.bergegut || []).join("\n"), proben:(R.proben || []).join("\n"), fluester:(R.fluester || []).join("\n"), seekarten:(R.seekarten || []).join("\n")};
  (pc.staerken || []).forEach(function(e){ var i = BG_ED.indexOf(e[0]); if(i >= 0) o.e[i] = e[1] ? 1 : 0; });
  (pc.fert || []).forEach(function(e){ o.s[e[0]] = e[1]; });
  (pc.spr || []).forEach(function(e){ var n = BG_LA_ALIAS[e[0]] || e[0]; o.l[n] = e[1]; });
  (pc.asp || []).slice(0, 7).forEach(function(a, i){ var len = Math.min(8, a[1]); o.a[i] = {n:a[0], t:a[2] || "", d:a[3] || "", len:len, m:[0,0,0,0,0,0,0,0]}; });
  (pc.morast || []).slice(0, 4).forEach(function(x, i){ o.mo[i].t = x; });
  (pc.leisten || []).slice(0, 3).forEach(function(l, i){ o.tr[i] = {n:l[0], t:"", d:l[2] || "", len:Math.min(8, l[1]), m:[0,0,0,0,0,0,0,0]}; });
  return o;
}
function bgLoad(key){
  var st = ST.bogen && ST.bogen[key];
  if(!st){
    var pcs = bgPcList().filter(function(s){ return s.id === key; });
    st = key !== "leer" && pcs[0] ? bgFromPc(pcs[0]) : bgNew();
  }
  return st;
}
function bgSave(){ ST.bogen = ST.bogen || {}; ST.bogen[BG.key] = BG.st; save(); }
function bgDots(n, cur, kind, a){
  var o = "";
  for(var i = 1; i <= n; i++) o += '<button class="cr' + (cur >= i ? ' f' : '') + '" onclick="bgClk(\'' + kind + '\',' + a + ',' + i + ')"></button>';
  return o;
}
function bgChain(t, kind, ai){
  var o = "";
  for(var i = 0; i < 8; i++){
    var gh = i >= t.len;
    o += (i ? '<s' + (gh ? ' class="gh"' : '') + '></s>' : '') + '<button class="cr' + (!gh && t.m[i] ? ' f' : '') + (gh ? ' gh' : '') + '" onclick="bgClk(\'' + kind + '\',' + ai + ',' + i + ')"></button>';
  }
  return '<div class="bch">' + o + '</div>';
}
function bgIn(path, v, fit){ return 'value="' + esc(v) + '" oninput="bgSet(\'' + path + '\',this)"' + (fit ? ' data-fit="' + fit + '"' : ''); }
function bgTx(path, v, fit, cls){ return '<textarea class="' + (cls || '') + '" spellcheck="false" data-fit="' + fit + '" oninput="bgSet(\'' + path + '\',this)">' + esc(v) + '</textarea>'; }
/* Alle Maße in Pixeln des Originalbogens (Corebook S. 362, 150 dpi), Ursprung oben links */
var BG_OX = 0, BG_OY = 0;
function bgAb(x, y, w, h){ return 'style="left:' + (x - BG_OX) + 'px;top:' + (y - BG_OY) + 'px' + (w != null ? ';width:' + w + 'px' : '') + (h != null ? ';height:' + h + 'px' : '') + '"'; }
function bgHd(t, x, y, w){ return '<div class="bh" ' + bgAb(x, y, w, 36) + '><span>' + t + '</span></div>'; }
function bgSb(t, x, y, w){ return '<div class="bsb" ' + bgAb(x, y, w, 30) + '><span>' + t + '</span></div>'; }
function bgBx(x, y, w, h, cls, inner){ return '<div class="bx ' + (cls || '') + '" ' + bgAb(x, y, w, h) + '>' + (inner || '') + '</div>'; }
function bgLb(t, w, g){ return '<span class="lb" style="width:' + w + 'px"' + (g ? ' data-g="' + g + '"' : '') + '><span>' + t + '</span></span>'; }
function bgCard(t, kind, i, hint, x, y, h, w){
  var ty = t.t || hint, tw = Math.max(5, ty.length) * 6.1 + 8;
  return '<div class="bk" ' + bgAb(x, y, w || 351, h) + '><div class="bkp"><b>Name</b><i>Details ›</i></div>' +
    '<div class="bkn"><input class="nm" spellcheck="false" ' + bgIn(kind + '.' + i + '.n', t.n, 19) + '><input class="ty" spellcheck="false" style="width:' + tw.toFixed(0) + 'px" placeholder="' + hint + '" ' + bgIn(kind + '.' + i + '.t', t.t, 13) + '></div>' +
    bgChain(t, kind, i) + '<div class="bkd">' + bgTx(kind + '.' + i + '.d', t.d, 14, "bd") + '</div></div>';
}
function bgSheet(){
  if(BG.key === "schiff") return bgShip();
  BG_OX = 0; BG_OY = 0;
  var s = BG.st, f = s.f, i, o = "";
  var CL = [520, 717, 890], CC = [638, 812, 990], ROW = 25, RS = 24;
  /* Titel */
  o += '<div class="bti" ' + bgAb(26, 18, 456) + '><div class="t1"><span class="lb" style="width:452px"><span>The Wildsea</span></span></div><div class="t2">Offizieller Charakterbogen</div></div>';
  /* So wird gespielt */
  var lines = function(a, x, y, lw){ return a.map(function(r, k){ return '<div class="row" ' + bgAb(x, y + k * ROW, null, ROW) + '>' + bgLb(r[0], lw) + '<span class="v">' + r[1] + '</span></div>'; }).join(""); };
  o += bgBx(24, 190, 457, 150, "out") + bgHd("So wird gespielt", 21, 154, 463);
  o += bgBx(25, 210, 217, 123, "sub") + bgSb("Würfeln", 22, 195, 223);
  o += bgBx(265, 210, 216, 123, "sub") + bgSb("Ergebnisse", 262, 195, 222);
  o += lines([["Stärke", "(1W6)"], ["Fertigkeit", "(bis zu 3W6)"], ["Vorteil", "(bis zu 2W6)"]], 32, 230, 98);
  o += lines([["Triumph", "[6]"], ["Konflikt", "[5/4]"], ["Desaster", "[3/2/1]"], ["Wendung", "[Pasch]"]], 272, 230, 98);
  /* Hintergrund */
  o += bgBx(24, 389, 457, 146) + bgHd("Hintergrund", 21, 353, 463);
  [["Name", "name"], ["Spieler", "spieler"], ["Blutlinie", "blut"], ["Herkunft", "herkunft"], ["Posten", "posten"]].forEach(function(r, k){
    var wahl = r[1] === "blut" || r[1] === "herkunft" || r[1] === "posten";
    o += '<label class="fl' + (wahl ? ' wahl' : '') + '" ' + bgAb(35, 397 + k * ROW, 208, ROW) + '><span>' + r[0] + ':</span><input spellcheck="false" ' + bgIn("f." + r[1], f[r[1]] || "", 16) + (wahl ? ' readonly autocomplete="off" title="Auswählen" onclick="bgWahl(this,\'' + r[1] + '\',event)"' : '') + '></label>';
  });
  o += '<div class="nt" ' + bgAb(266, 397, 205, 132) + '><span>Weitere Notizen:</span>' + bgTx("f.notizen", f.notizen || "", 14, "ln") + '</div>';
  /* Meilensteine */
  o += bgHd("Meilensteine", 21, 553, 463);
  o += bgBx(25, 610, 217, 100, "sub", bgTx("f.gross", f.gross || "", 14, "ln")) + bgSb("Große", 22, 595, 223);
  o += bgBx(263, 610, 218, 100, "sub", bgTx("f.klein", f.klein || "", 14, "ln")) + bgSb("Kleine", 260, 595, 224);
  /* Antriebe */
  o += bgBx(24, 756, 457, 130, "", bgTx("f.antriebe", f.antriebe || "", 15, "ln")) + bgHd("Antriebe", 21, 720, 463) + bgDd("antrieb", 21, 720, 463, 36);
  /* Morast */
  o += bgHd("Morast", 21, 895, 463) + bgDd("morast", 21, 895, 463, 36);
  s.mo.forEach(function(m, k){
    o += '<div class="pill" ' + bgAb(26, 942 + [0, 50, 101, 153][k], 455, 44) + '><div class="pt">' + '<textarea spellcheck="false" data-fit="14" oninput="bgSet(\'mo.' + k + '.t\',this)">' + esc(m.t) + '</textarea></div><div class="bch">' +
      [0, 1].map(function(j){ return (j ? '<s></s>' : '') + '<button class="cr' + (m.m[j] ? ' f' : '') + '" onclick="bgClk(\'mo\',' + k + ',' + j + ')"></button>'; }).join("") + '</div></div>';
  });
  /* Stärken */
  o += bgBx(510, 65, 557, 78) + bgHd("Stärken", 507, 29, 566);
  BG_ED.forEach(function(n, k){
    var c = k % 3, r = Math.floor(k / 3);
    o += '<div class="row" ' + bgAb(CL[c], 68 + r * 24, null, 24) + '>' + bgLb(n, CC[c] - CL[c], 10) + '<button class="cr e' + (s.e[k] ? ' f' : '') + '" onclick="bgClk(\'e\',' + k + ',1)"></button></div>';
  });
  o += '<div class="row" ' + bgAb(CC[1], 116, null, 24) + '><span class="cr e x"></span></div><div class="row" ' + bgAb(CC[2], 116, null, 24) + '><span class="cr e x"></span></div>';
  /* Fertigkeiten */
  o += bgBx(510, 194, 557, 149) + bgHd("Fertigkeiten", 507, 158, 566);
  for(i = 0; i < 18; i++){
    var c2 = Math.floor(i / 6), r2 = i % 6;
    o += '<div class="row" ' + bgAb(CL[c2], 196 + r2 * RS, null, RS) + '>' + bgLb(BG_SK[i], CC[c2] - CL[c2], 9) + '<span class="bds">' + bgDots(3, s.s[BG_SK[i]] || 0, 's', i) + '</span></div>';
  }
  /* Sprachen */
  o += bgBx(510, 396, 557, 148) + bgHd("Sprachen", 507, 360, 566);
  for(i = 0; i < 12; i++){
    var c3 = Math.floor(i / 6), r3 = i % 6, lx = c3 ? 790 : 520, cx = c3 ? CC[2] : 700, nm = i < 11 ? BG_LA[i] : null, key = nm || "_x";
    o += '<div class="row" ' + bgAb(lx, 398 + r3 * RS, null, RS) + '>' + (nm ? bgLb(nm, cx - lx, 10) : '<span class="lb lxw" style="width:' + (cx - lx) + 'px;padding-right:12px"><input class="lx" spellcheck="false" ' + bgIn("lx", s.lx || "", 16) + '></span>') +
      '<span class="bds">' + bgDots(3, s.l[key] || 0, 'l', i) + '</span></div>';
  }
  /* Ressourcen */
  o += bgHd("Ressourcen", 507, 560, 566);
  [["Bergegut", "bergegut", 510, 602, 270], ["Proben", "proben", 790, 602, 283], ["Geflüster", "fluester", 510, 871, 270], ["Seekarten", "seekarten", 790, 871, 283]].forEach(function(r){
    var bx = r[2] === 510 ? 513 : 793, bw = r[2] === 510 ? 264 : 274;
    o += bgBx(bx, r[3] + 15, bw, (r[3] === 602 ? 856 : 1132) - r[3] - 15, "sub", bgTx("f." + r[1], f[r[1]] || "", 15, "ln")) + bgSb(r[0], r[2], r[3], r[4]) + bgDd(r[1], r[2], r[3], r[4], 30);
  });
  /* Aspekte, Temporäre Leisten */
  o += bgHd("Aspekte", 1090, 30, 354) + bgDd("asp", 1090, 30, 354, 36);
  for(i = 0; i < 7; i++) o += bgCard(s.a[i], "a", i, "Eigenschaft/Ausrüstung/Gefährte", 1091, Math.round(75 + i * 101.8), 96);
  o += bgHd("Temporäre Leisten", 1090, 792, 354);
  for(i = 0; i < 3; i++) o += bgCard(s.tr[i], "tr", i, "Vorteil/Verletzung/Leiste", 1091, 836 + i * 103, 97);
  return o;
}
function bgAfterFonts(){
  bgFit(); bgCond();
  if(!document.fonts || !document.fonts.load) return;
  Promise.all(["20px BgFell", "600 20px BgTeko", "20px BgSerif", "20px BgBebas"].map(function(f){ return document.fonts.load(f).catch(function(){}); })).then(function(){ bgFit(); bgCond(); });
}
function bgCond(){
  var sh = document.getElementById("bsh"); if(!sh) return;
  sh.querySelectorAll(".bh>span,.bsb>span,.rl>span").forEach(function(el){
    el.style.transform = "";
    var pr = el.parentNode, avail = pr.clientWidth - (pr.classList.contains("bh") ? 30 : pr.classList.contains("bsb") ? 22 : 12), r = avail / el.offsetWidth;
    if(r < 1) el.style.transform = "scaleX(" + r.toFixed(3) + ")";
  });
  sh.querySelectorAll(".lb>span").forEach(function(el){
    el.style.transform = "";
    var r = (el.parentNode.clientWidth - (+el.parentNode.getAttribute("data-g") || 0)) / el.offsetWidth;
    if(r < 1) el.style.transform = "scaleX(" + r.toFixed(3) + ")";
  });
}

var BG_RT = ["Panzerung","Dichtung","Tempo","Sägen","Tarnung","Neigung"];
function bgShipNew(){
  var o = {n:"", cond:"", used:"", total:"", d:{size:"", frame:"", hull:"", bite:"", engine:"", fit:"", arm:"", out:"", cargo:"", notes:""}, rt:[], rp:[], uc:[]}, i;
  for(i = 0; i < 6; i++) o.rt.push({m:[0,0,0,0,0,0]});
  for(i = 0; i < 5; i++) o.rp.push({t:"", m:[0,0,0]});
  for(i = 0; i < 5; i++) o.uc.push(bgTrack());
  return o;
}
function bgPills(n, marks, kind, idx){
  var o = "";
  for(var i = 0; i < n; i++) o += (i ? '<s></s>' : '') + '<button class="cr' + (marks[i] ? ' f' : '') + '" onclick="bgClk(\'' + kind + '\',' + idx + ',' + i + ')"></button>';
  return '<div class="bch">' + o + '</div>';
}
function bgShip(){
  BG_OX = 70; BG_OY = 58;
  var s = BG.st, d = s.d, i, o = "";
  var td = function(k, x, y, w, h, fit){ return bgBx(x, y, w, h, "sub", bgTx("d." + k, d[k] || "", fit || 15, "ln")); };
  o += '<div class="bti" ' + bgAb(86, 62, 460) + '><div class="t1"><span class="lb" style="width:455px"><span>The Wildsea</span></span></div><div class="t2" style="text-align:left;padding-left:144px">Offizieller Schiffsbogen</div></div>';
  /* Name */
  o += bgBx(88, 211, 316, 77, "", '<textarea class="nm1" spellcheck="false" data-fit="26" oninput="bgSet(\'n\',this)">' + esc(s.n) + '</textarea>') + bgHd("Name", 85, 190, 322);
  /* Werte */
  o += bgHd("Werte", 85, 297, 322);
  BG_RT.forEach(function(n, k){
    o += '<div class="rt" ' + bgAb(93, 339 + k * 40.5, 305, 37) + '><span class="rl"><span>' + n + '</span></span>' + bgPills(6, s.rt[k].m, "rt", k) + '</div>';
  });
  /* Entwurf */
  o += bgHd("Entwurf", 83, 587, 322);
  [["Größe", "size", 628, 735], ["Rahmen", "frame", 748, 863], ["Rumpf", "hull", 872, 985], ["Biss", "bite", 994, 1107], ["Antrieb", "engine", 1116, 1227]].forEach(function(r){
    o += td(r[1], 90, r[2] + 15, 312, r[3] - r[2] - 15, 17) + bgSb(r[0], 87, r[2], 315);
  });
  /* Ausstattung, Bewaffnung, Vorreiter */
  o += bgHd("Ausstattung", 430, 202, 324);
  o += td("fit", 433, 257, 318, 455, 15) + bgSb("Motive/Ergänzungen/Räume", 430, 242, 323);
  o += td("arm", 433, 737, 318, 181, 15) + bgSb("Bewaffnung", 430, 722, 323);
  o += td("out", 433, 945, 318, 282, 15) + bgSb("Vorreiter", 430, 930, 323);
  /* Zustände, Einsätze */
  o += bgBx(578, 110, 386, 80, "out", bgTx("cond", s.cond || "", 15, "ln")) + bgHd("Zustände", 575, 74, 389);
  o += bgBx(981, 110, 125, 80, "out stk", '<input class="su" spellcheck="false" placeholder="Genutzt" ' + bgIn("used", s.used, 17) + '><i></i><input class="st" spellcheck="false" placeholder="Gesamt" ' + bgIn("total", s.total, 17) + '>') + bgHd("Einsätze", 978, 74, 128);
  /* Ruf, Fracht */
  o += bgHd("Ruf", 1121, 74, 323);
  for(i = 0; i < 5; i++){
    o += '<div class="pill" ' + bgAb(1121, 118 + i * 49.2, 317, 42) + '><div class="pt"><textarea spellcheck="false" data-fit="14" oninput="bgSet(\'rp.' + i + '.t\',this)">' + esc(s.rp[i].t) + '</textarea></div>' + bgPills(3, s.rp[i].m, "rp", i) + '</div>';
  }
  o += bgBx(1124, 395, 316, 439, "", bgTx("d.cargo", d.cargo || "", 15, "ln")) + bgHd("Fracht und Passagiere", 1121, 364, 323);
  /* Unterbesatzung */
  o += bgHd("Unterbesatzung", 774, 201, 323);
  for(i = 0; i < 5; i++) o += bgCard(s.uc[i], "uc", i, "Offizier/Bande/Rudel", 775, 243 + i * 119.5, 112, 322);
  /* Notizen */
  o += bgBx(777, 884, 666, 343, "grid", bgTx("d.notes", d.notes || "", 16)) + bgHd("Notizen", 775, 848, 671);
  return o;
}
function bgShipLoad(){ var st = ST.bogen && ST.bogen.schiff; return st || bgShipNew(); }
function viewSchiff(){
  BG.key = "schiff"; BG.st = bgShipLoad();
  setTimeout(bgAfterFonts, 0);
  return '<div class="tabs"><a class="on">Schiffsbogen</a><span class="r bbar">' + bgBar(true) + '</span></div>' +
    '<div class="bwrap"><div class="bsheet ship" id="bsh" style="zoom:' + bgZoom().toFixed(3) + '">' + bgSheet() + '</div></div>';
}
function bgZoom(){ return Math.max(.3, Math.min(1.2, (Math.max(innerWidth, 1280) - 60) / (BG.key === "schiff" ? 1400 : 1460))); }
function viewBogen(id){
  var pcs = bgPcList(), s = id && pcs.filter(function(x){ return x.id === id; })[0];
  BG.key = s ? id : "leer"; BG.st = bgLoad(BG.key);
  setTimeout(bgAfterFonts, 0);
  return '<div class="tabs"><a class="on">Charakterbogen</a><span class="r bbar">' + bgBar(false) + '</span></div>' +
    '<div class="bwrap"><div class="bsheet" id="bsh" style="zoom:' + bgZoom().toFixed(3) + '">' + bgSheet() + '</div></div>';
}
function bgFit(){
  var sh = document.getElementById("bsh"); if(!sh) return;
  sh.querySelectorAll("[data-fit]").forEach(function(el){
    var fs = parseFloat(el.getAttribute("data-fit")), ta = el.tagName === "TEXTAREA";
    el.style.fontSize = fs + "px";
    while(fs > 6.5 && (ta ? el.scrollHeight > el.clientHeight : el.scrollWidth > el.clientWidth)){ fs -= .5; el.style.fontSize = fs + "px"; }
  });
}
function bgSet(path, el){
  var p = path.split("."), o = BG.st;
  for(var i = 0; i < p.length - 1; i++) o = o[p[i]];
  o[p[p.length - 1]] = el.value; bgSave();
  var fs = parseFloat(el.getAttribute("data-fit")), ta = el.tagName === "TEXTAREA";
  if(fs){ el.style.fontSize = fs + "px"; while(fs > 6.5 && (ta ? el.scrollHeight > el.clientHeight : el.scrollWidth > el.clientWidth)){ fs -= .5; el.style.fontSize = fs + "px"; } }
}
function bgClk(kind, a, b){
  var s = BG.st;
  if(kind === "e") s.e[a] = s.e[a] ? 0 : 1;
  else if(kind === "s" || kind === "l"){ var key = kind === "s" ? BG_SK[a] : (a < 11 ? BG_LA[a] : "_x"), m = kind === "s" ? s.s : s.l; m[key] = (m[key] || 0) === b ? b - 1 : b; }
  else if(kind === "mo") s.mo[a].m[b] = s.mo[a].m[b] ? 0 : 1;
  else if(kind === "rt" || kind === "rp") s[kind][a].m[b] = s[kind][a].m[b] ? 0 : 1;
  else { var t = s[kind][a]; if(b >= t.len) t.len = b + 1; else t.m[b] = t.m[b] ? 0 : 1; }
  bgSave(); bgRepaint();
}
function bgRepaint(){
  var sh = document.getElementById("bsh"); if(!sh) return;
  var y = scrollY; sh.innerHTML = bgSheet(); bgAfterFonts(); scrollTo(0, y);
}
function bgReset(){
  if(!confirm("Bogen zurücksetzen?")) return;
  if(ST.bogen) delete ST.bogen[BG.key]; save();
  BG.st = BG.key === "schiff" ? bgShipNew() : bgLoad(BG.key); bgRepaint();
}
function bgPrint(){ bgFit(); window.print(); }
function bgPdf(knopf){
  var sh = document.getElementById("bsh"); if(!sh || !window.FillPDF) return;
  var nm = (BG.key === "schiff" ? BG.st.n : BG.st.f && BG.st.f.name) || (BG.key === "schiff" ? "Schiffsbogen" : "Charakterbogen");
  FillPDF.make(sh, {name:"Wildsea – " + nm, knopf:knopf, marks:[["button.cr", "f", "punkt"]], before:function(){ sh.style.zoom = 1; bgFit(); }, after:function(){ sh.style.zoom = bgZoom().toFixed(3); }});
}
window.addEventListener("resize", function(){ var sh = document.getElementById("bsh"); if(sh) sh.style.zoom = bgZoom().toFixed(3); });
var BG_PM = ["fontFamily","fontFeatureSettings","borderBottomWidth","borderBottomStyle","borderBottomColor","marginTop","textIndent","fontSize","fontWeight","fontVariant","fontStyle","lineHeight","letterSpacing","textTransform","textAlign","color","paddingTop","paddingRight","paddingBottom","paddingLeft","borderBottom","borderRadius","backgroundImage","backgroundSize","backgroundPosition","backgroundRepeat","flex","alignSelf"];
function bgMirror(){
  var sh = document.getElementById("bsh"); if(!sh) return;
  Array.prototype.forEach.call(sh.querySelectorAll("input,textarea"), function(el){
    var cs = getComputedStyle(el), m = document.createElement("div");
    m.className = "pm";
    BG_PM.forEach(function(k){ m.style[k] = cs[k]; });
    m.style.width = el.offsetWidth + "px"; m.style.height = el.offsetHeight + "px";
    m.style.boxSizing = "border-box"; m.style.overflow = "hidden";
    m.style.whiteSpace = el.tagName === "TEXTAREA" ? "pre-wrap" : "pre";
    m.style.wordBreak = "break-word";
    m.style.display = cs.display === "inline" ? "inline-block" : cs.display;
    m.textContent = el.value;
    if(!el.value && el.classList.contains("ty")){ m.textContent = el.placeholder; m.style.color = "#3b3932"; }
    el.parentNode.insertBefore(m, el); el.style.display = "none";
    var fs = parseFloat(el.getAttribute("data-fit")), ta = el.tagName === "TEXTAREA";
    if(fs){ m.style.fontSize = fs + "px"; while(fs > 6.5 && (ta ? m.scrollHeight > m.clientHeight + 1 : m.scrollWidth > m.clientWidth + 1)){ fs -= .5; m.style.fontSize = fs + "px"; } }
  });
}
function bgUnmirror(){
  Array.prototype.forEach.call(document.querySelectorAll("#bsh .pm"), function(m){ var e = m.nextSibling; if(e && e.style) e.style.display = ""; m.parentNode.removeChild(m); });
}
window.bgMirror = bgMirror; window.bgUnmirror = bgUnmirror;
window.addEventListener("beforeprint", function(){ var sh = document.getElementById("bsh"); if(sh){ sh.style.zoom = 1; bgUnmirror(); bgMirror(); } });
window.addEventListener("afterprint", function(){ bgUnmirror(); var sh = document.getElementById("bsh"); if(sh) sh.style.zoom = bgZoom().toFixed(3); });

/* ---------- Symbolleiste (Vorbild Discworld): nur Symbole, Hinweis beim Hovern ---------- */
function bgSvg(p){ return '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + p + '</svg>'; }
var BG_IC = {
  vor:'<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6"/><circle cx="17.5" cy="9" r="2.4"/><path d="M17 14.2c2.6.2 4.5 2.2 4.5 5.3"/>',
  zufall:'<rect x="3.5" y="3.5" width="17" height="17" rx="3"/><circle cx="8.5" cy="8.5" r=".9" fill="currentColor"/><circle cx="15.5" cy="8.5" r=".9" fill="currentColor"/><circle cx="12" cy="12" r=".9" fill="currentColor"/><circle cx="8.5" cy="15.5" r=".9" fill="currentColor"/><circle cx="15.5" cy="15.5" r=".9" fill="currentColor"/>',
  leeren:'<path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1"/><path d="M3.5 4v5h5"/>',
  teilen:'<circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><path d="M8.3 10.7l7.4-4.3M8.3 13.3l7.4 4.3"/>',
  sichern:'<path d="M12 4v11"/><path d="M7 11l5 5 5-5"/><path d="M5 20h14"/>',
  laden:'<path d="M12 16V5"/><path d="M7 9l5-5 5 5"/><path d="M5 20h14"/>',
  pdf:'<path d="M5 3h11l4 4v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M7.5 3v5h8V3"/><rect x="7" y="13" width="10" height="8"/>'
};
function bgBar(ship){
  var b = function(ic, tip, on, cls){ return '<button class="bib' + (cls ? ' ' + cls : '') + '" onclick="' + on + '" data-tip="' + tip + '" aria-label="' + tip + '">' + bgSvg(BG_IC[ic]) + '</button>'; };
  return (ship ? '' : '<span class="vorwrap">' + b("vor", "Vorgefertigte Charaktere", "bgVorPop(event)") + '</span>' + b("zufall", "Zufälligen Charakter erstellen (Schnellstart)", "bgZufall()")) +
    b("leeren", "Zurücksetzen", "bgReset()") + b("teilen", "Link teilen", "bgCopyLink(this)") + b("sichern", "Als Datei sichern", "bgJsonOut()") +
    '<label class="bib" data-tip="Datei laden" aria-label="Datei laden">' + bgSvg(BG_IC.laden) + '<input type="file" accept=".json,application/json" hidden onchange="bgJsonIn(this)"></label>' +
    b("pdf", "Als PDF speichern", "bgPdf(this)", "haupt");
}
function bgToast(t){ var d = document.createElement("div"); d.className = "bgtoast"; d.textContent = t; document.body.appendChild(d); setTimeout(function(){ d.remove(); }, 2600); }

/* ---------- Popups: feste Auswahl (Blutlinie, Herkunft, Posten) mit „i“, Beispiele für Antriebe, Morast, Ressourcen, Aspekte ---------- */
var BG_QN = {"":"Grundbuch", sr:"Storm and Root", sg:"Schiffsgärten"};
function bgPopWeg(){ document.querySelectorAll(".bgpop,.bginfo").forEach(function(e){ e.remove(); }); }
document.addEventListener("click", bgPopWeg);
function bgNewPop(el, key, w){
  var offen = document.querySelector(".bgpop"), same = offen && offen.dataset.k === key; bgPopWeg(); if(same) return null;
  var r = el.getBoundingClientRect(), p = document.createElement("div"); p.className = "bgpop"; p.dataset.k = key; p.style.width = w + "px";
  p.style.left = Math.max(8, Math.min(r.left, innerWidth - w - 14)) + "px"; p.style.top = (r.bottom + 4) + "px";
  p.addEventListener("click", function(ev){ ev.stopPropagation(); }); p._r = r; return p;
}
function bgShowPop(p){
  document.body.appendChild(p);
  var h = p.getBoundingClientRect().height; if(p._r.bottom + 4 + h > innerHeight) p.style.top = Math.max(8, innerHeight - h - 8) + "px";
}
function bgInfo(btn, titel, text){
  var old = document.querySelector(".bginfo"); if(old) old.remove();
  document.querySelectorAll(".bgpop .pi.sel").forEach(function(x){ x.classList.remove("sel"); }); btn.classList.add("sel");
  var pop = btn.closest(".bgpop"), q = pop.getBoundingClientRect(), c = document.createElement("div"); c.className = "bginfo";
  c.innerHTML = "<b>" + esc(titel) + "</b><p>" + esc(text).replace(/\n/g, "<br>") + "</p>";
  c.style.top = q.top + "px"; c.style.maxHeight = q.height + "px";
  var re = q.right + 340 + 8 < innerWidth; c.style.left = re ? (q.right - 1) + "px" : (q.left - 340 + 1) + "px"; c.classList.add(re ? "re" : "li");
  c.addEventListener("click", function(x){ x.stopPropagation(); }); document.body.appendChild(c);
}
function bgWahl(el, art, e){
  e.stopPropagation(); var p = bgNewPop(el, art, 330); if(!p || !window.WS_BOGEN) return;
  var L = WS_BOGEN[art], cur = BG.st.f[art] || "", html = '<div class="pz"><button class="pn" data-i="-1">– keine –</button></div>';
  ["", "sr", "sg"].forEach(function(q){
    var g = L.map(function(x, i){ return [x, i]; }).filter(function(x){ return x[0].q === q; });
    if(!g.length) return;
    html += '<h4>' + BG_QN[q] + '</h4>' + g.map(function(x){ return '<div class="pz"><button class="pn' + (x[0].n === cur ? ' sel' : '') + '" data-i="' + x[1] + '">' + esc(x[0].n) + '</button><button class="pi" data-t="' + x[1] + '" title="Info" aria-label="Info">i</button></div>'; }).join("");
  });
  p.innerHTML = html; bgShowPop(p);
  p.addEventListener("click", function(ev){
    var b = ev.target.closest("button"); if(!b) return;
    if(b.dataset.t !== undefined){ var x = L[+b.dataset.t]; bgInfo(b, x.n, x.i); return; }
    BG.st.f[art] = +b.dataset.i < 0 ? "" : L[+b.dataset.i].n; bgSave(); bgPopWeg(); bgRepaint();
  });
}
function bgDd(kind, x, y, w, hh){
  var s = hh === 30 ? 24 : 28;
  return '<button class="bgdd noprint" ' + bgAb(x + w - (hh === 30 ? 40 : 48), y + (hh === 30 ? 3 : 4), s, s) + ' onclick="bgBsp(this,event,\'' + kind + '\')" title="Beispiele aus deinem Hintergrund – du kannst auch frei schreiben" aria-label="Beispiele">▾</button>';
}
function bgHg(){
  var o = [];
  if(!window.WS_BOGEN) return o;
  ["blut", "herkunft", "posten"].forEach(function(a){ var n = BG.st.f[a], x = n && WS_BOGEN[a].filter(function(y){ return y.n === n; })[0]; if(x) o.push(x); });
  return o;
}
var BG_DDT = {asp:"Aspekte", antrieb:"Antriebe", morast:"Morast", bergegut:"Bergegut", proben:"Proben", fluester:"Geflüster", seekarten:"Seekarten"};
function bgBsp(btn, e, kind){
  e.stopPropagation(); var p = bgNewPop(btn, kind, kind === "asp" ? 420 : 380); if(!p) return;
  var G = bgHg(), list = [], html = '<div class="pk"><span>' + BG_DDT[kind] + ' – du kannst auch frei schreiben</span></div>';
  G.forEach(function(g){
    var items = kind === "asp" ? g.a : (g.k[kind] || []);
    if(!items.length) return;
    html += '<h4>' + esc(g.n) + '</h4>' + items.map(function(it){
      list.push(it); var i = list.length - 1;
      return '<div class="pz"><button class="pn" data-i="' + i + '">' + esc(kind === "asp" ? it[0] : it) + (kind === "asp" ? ' <em>' + it[1] + 'er · ' + esc(it[2]) + '</em>' : '') + '</button>' + (kind === "asp" ? '<button class="pi" data-i="' + i + '" data-t="1" title="Info" aria-label="Info">i</button>' : '') + '</div>';
    }).join("");
  });
  if(!list.length) html += '<div class="pz"><span class="pn leer">Wähle zuerst Blutlinie, Herkunft oder Posten.</span></div>';
  p.innerHTML = html; bgShowPop(p);
  p.addEventListener("click", function(ev){
    var b = ev.target.closest("button"); if(!b || b.dataset.i === undefined) return;
    var it = list[+b.dataset.i], s = BG.st;
    if(b.dataset.t){ bgInfo(b, it[0], it[1] + "er-Leiste · " + it[2] + "\n" + it[3]); return; }
    if(kind === "asp"){
      var k = -1; s.a.forEach(function(a, j){ if(k < 0 && !a.n && !a.d) k = j; });
      if(k < 0){ bgToast("Alle Aspekt-Felder sind belegt."); return; }
      s.a[k] = {n:it[0], t:it[2], d:it[3], len:Math.min(8, it[1]), m:[0,0,0,0,0,0,0,0]};
    } else if(kind === "morast"){
      var m = -1; s.mo.forEach(function(x, j){ if(m < 0 && !x.t) m = j; });
      if(m < 0){ bgToast("Alle Morast-Felder sind belegt."); return; }
      s.mo[m].t = it;
    } else { var v = s.f[kind === "antrieb" ? "antriebe" : kind] || ""; s.f[kind === "antrieb" ? "antriebe" : kind] = v ? v + "\n" + it : it; }
    bgSave(); bgPopWeg(); bgRepaint();
  });
}

/* ---------- Vorgefertigte Charaktere ---------- */
function bgVorPop(e){
  e.stopPropagation(); var btn = e.currentTarget, p = bgNewPop(btn, "vor", 340); if(!p) return;
  p.innerHTML = '<div class="pz"><button class="pn" onclick="go(\'bogen\')">Leerer Bogen</button></div>' + bgPcList().map(function(x){
    var pc = x.pc; return '<div class="pz"><button class="pn' + (x.id === BG.key ? ' sel' : '') + '" onclick="go(\'bogen/' + x.id + '\')">' + esc(x.t) + '<em>' + esc([pc.posten, pc.blut].filter(Boolean).join(" · ")) + '</em></button></div>'; }).join("");
  bgShowPop(p);
}

/* ---------- Zufall: Schnellstart-Charakter nach den Regeln (je 1 Stärke, 5 Fertigkeits-/Sprachränge, 2 Aspekte, 2 Ressourcen, 1 Antrieb, 1 Morast aus Blutlinie, Herkunft und Posten) ---------- */
function bgWf(n){ return Math.floor(Math.random() * n); }
function bgPick(a){ return a[bgWf(a.length)]; }
function bgMischen(a){ a = a.slice(); for(var i = a.length - 1; i > 0; i--){ var j = bgWf(i + 1), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
function bgZufallState(){
  var W = window.WS_BOGEN, s = bgNew(), art = ["blut", "herkunft", "posten"], bg = art.map(function(a){ return bgPick(W[a]); });
  var kr = {bergegut:[], proben:[], fluester:[], seekarten:[]}, antr = [], aspn = [], i;
  art.forEach(function(a, k){ s.f[a] = bg[k].n; });
  s.f.name = bgPick(W.namen); s.f.spieler = "";
  /* Stärken: je eine, ohne Doppelte */
  bg.forEach(function(g){
    var frei = g.k.e.filter(function(n){ return BG_ED.indexOf(n) >= 0 && !s.e[BG_ED.indexOf(n)]; });
    s.e[BG_ED.indexOf(bgPick(frei.length ? frei : g.k.e))] = 1;
  });
  /* Fertigkeiten und Sprachen: je 5 verschiedene aus der Auswahl, Rang höchstens 3 */
  bg.forEach(function(g){
    var pool = bgMischen((g.k.sk || []).map(function(n){ return ["s", n]; }).concat((g.k.la || []).map(function(n){ return ["l", BG_LA_ALIAS[n] || n]; })));
    pool.slice(0, 5).forEach(function(x){ var m = x[0] === "s" ? s.s : s.l; m[x[1]] = Math.min(3, (m[x[1]] || 0) + 1); });
  });
  /* Aspekte: je 2 */
  bg.forEach(function(g){ bgMischen(g.a).slice(0, 2).forEach(function(a){ aspn.push(a); }); });
  aspn.slice(0, 7).forEach(function(a, k){ s.a[k] = {n:a[0], t:a[2], d:a[3], len:Math.min(8, a[1]), m:[0,0,0,0,0,0,0,0]}; });
  /* Ressourcen: je 2 aus allen vier Listen des Kits */
  bg.forEach(function(g){
    var pool = []; ["bergegut", "proben", "fluester", "seekarten"].forEach(function(k){ (g.k[k] || []).forEach(function(n){ pool.push([k, n]); }); });
    bgMischen(pool).slice(0, 2).forEach(function(x){ kr[x[0]].push(x[1]); });
  });
  for(i in kr) s.f[i] = kr[i].join("\n");
  /* Antriebe und Morast */
  bg.forEach(function(g, k){ if(g.k.antrieb) antr.push(bgPick(g.k.antrieb)); if(g.k.morast && k < 4) s.mo[k].t = bgPick(g.k.morast); });
  s.f.antriebe = antr.join("\n");
  return s;
}
function bgHatInhalt(st){ return JSON.stringify(st) !== JSON.stringify(bgNew()); }
function bgZufall(){
  if(!window.WS_BOGEN) return;
  var alt = ST.bogen && ST.bogen.leer;
  if(alt && bgHatInhalt(alt) && !confirm("Den leeren Bogen durch einen zufälligen Charakter ersetzen?")) return;
  ST.bogen = ST.bogen || {}; ST.bogen.leer = bgZufallState(); save();
  if(BG.key === "leer") { BG.st = ST.bogen.leer; bgRepaint(); } else go("bogen");
}

/* ---------- Teilen (Link mit Daten) und Datei (JSON) ---------- */
function bgB64u(buf){ var s = "", a = new Uint8Array(buf); for(var i = 0; i < a.length; i++) s += String.fromCharCode(a[i]); return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); }
function bgUb64(t){ t = t.replace(/-/g, "+").replace(/_/g, "/"); while(t.length % 4) t += "="; var b = atob(t), a = new Uint8Array(b.length); for(var i = 0; i < b.length; i++) a[i] = b.charCodeAt(i); return a; }
function bgPack(o){
  var txt = JSON.stringify(o);
  if(!window.CompressionStream) return Promise.resolve("k" + bgB64u(new TextEncoder().encode(txt)));
  return new Response(new Blob([txt]).stream().pipeThrough(new CompressionStream("deflate-raw"))).arrayBuffer().then(function(b){ return "d" + bgB64u(b); });
}
function bgEntpack(t){
  var a = bgUb64(t.slice(1));
  var p = t[0] === "k" ? Promise.resolve(new TextDecoder().decode(a)) : new Response(new Blob([a]).stream().pipeThrough(new DecompressionStream("deflate-raw"))).text();
  return p.then(JSON.parse);
}
/* Eingelesene Daten gegen die Vorlage prüfen: nur bekannte Felder und Typen übernehmen */
function bgMerge(tpl, src){
  if(Array.isArray(tpl)) return tpl.map(function(t, i){ return bgMerge(t, src && src[i]); });
  if(tpl && typeof tpl === "object"){
    var o = {}, k;
    if(!Object.keys(tpl).length){ if(src && typeof src === "object") for(k in src) if(typeof src[k] === "string" || typeof src[k] === "number") o[k] = src[k]; return o; }
    for(k in tpl) o[k] = bgMerge(tpl[k], src && src[k]);
    return o;
  }
  return typeof src === typeof tpl ? src : tpl;
}
function bgClean(d, ship){ return bgMerge(ship ? bgShipNew() : bgNew(), d); }
function bgCopyLink(btn){
  var ship = BG.key === "schiff";
  bgPack(BG.st).then(function(c){
    var u = new URL("bogen.html", location.href).href + "#" + (ship ? "schiff" : "bogen") + "=" + c;
    var ok = function(){ bgToast("Link kopiert."); };
    if(navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(u).then(ok, function(){ prompt("Link kopieren:", u); });
    else { try{ var ta = document.createElement("textarea"); ta.value = u; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove(); ok(); }catch(x){ prompt("Link kopieren:", u); } }
  });
}
function bgJsonOut(){
  var ship = BG.key === "schiff", n = ((ship ? BG.st.n : BG.st.f.name) || "").trim() || (ship ? "Schiffsbogen" : "Charakterbogen");
  var a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([JSON.stringify({spiel:"wildsea-bogen", art:ship ? "schiff" : "char", daten:BG.st}, null, 1)], {type:"application/json"}));
  a.download = "Wildsea – " + n + ".json"; a.click();
}
function bgJsonIn(inp){
  var f = inp.files && inp.files[0]; if(!f) return;
  var r = new FileReader(); r.onload = function(){
    try{
      var o = JSON.parse(r.result); if(!o || o.spiel !== "wildsea-bogen" || !o.daten) throw 0;
      var ship = o.art === "schiff", key = ship ? "schiff" : "leer", alt = ST.bogen && ST.bogen[key];
      if(alt && !confirm("Aktuellen " + (ship ? "Schiffsbogen" : "leeren Bogen") + " durch die Datei ersetzen?")) return;
      ST.bogen = ST.bogen || {}; ST.bogen[key] = bgClean(o.daten, ship); save();
      if(BG.key === key){ BG.st = ST.bogen[key]; bgRepaint(); } else go(ship ? "schiff" : "bogen");
      bgToast("Datei geladen.");
    }catch(e){ alert("Diese Datei ist kein Wildsea-Bogen."); }
  }; r.readAsText(f); inp.value = "";
}
/* Geteilten Bogen aus dem Link übernehmen (wird von solo.js vor dem ersten Zeichnen aufgerufen) */
function bgLinkImport(){
  var m = /^#(bogen|schiff)=([dk][A-Za-z0-9_-]+)$/.exec(location.hash);
  if(!m) return Promise.resolve();
  var ship = m[1] === "schiff", key = ship ? "schiff" : "leer";
  return bgEntpack(m[2]).then(function(d){
    history.replaceState(null, "", location.pathname + location.search + "#" + m[1]);
    var alt = ST.bogen && ST.bogen[key];
    if(alt && !confirm("Geteilten Bogen laden? Dein bisheriger " + (ship ? "Schiffsbogen" : "Bogen") + " wird ersetzt.")) return;
    ST.bogen = ST.bogen || {}; ST.bogen[key] = bgClean(d, ship); save();
  }, function(){ history.replaceState(null, "", location.pathname + location.search + "#" + m[1]); });
}
