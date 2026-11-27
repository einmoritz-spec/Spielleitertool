/* Charakterbogen im Layout des Original-Bogens (Vaesen – Material: Character Sheet). Bezugsgröße 765 × 988 px. */
var BG_ATTR = ["Physis","Präzision","Logik","Empathie"];
var BG_SK = [["Beweglichkeit","Physis"],["Nahkampf","Physis"],["Kraft","Physis"],["Heilkunde","Präzision"],["Fernkampf","Präzision"],["Heimlichkeit","Präzision"],["Nachforschung","Logik"],["Gelehrsamkeit","Logik"],["Wachsamkeit","Logik"],["Inspiration","Empathie"],["Manipulation","Empathie"],["Beobachtung","Empathie"]];
var BG_ZK = ["Erschöpft","Verletzt","Verwundet","Gebrochen"], BG_ZG = ["Wütend","Verängstigt","Hoffnungslos","Gebrochen"];
var BG_RO = false;

function bgE(s){ return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
function bgArch(c){ var a = (window.VAE_ARCH || []).filter(function(x){ return x.id === c.arch; })[0]; return a; }
function bgDefault(c, k){
  var a = bgArch(c), al = (window.VAE_ALTER || [])[c.alter];
  switch(k){
   case "alterT": return al ? al[0] : "";
   case "archT": return a ? a.name : "";
   case "ausrT": return (c.ausr || []).join("\n");
   case "bez0": return c.bez || "";
  }
  return "";
}
function bgVal(c, k){
  var m = k.match(/^(sk|at|bez|zk|zg|erf)(.*)$/), v;
  if(k.indexOf("sk_") === 0) return (c.skills || {})[k.slice(3)] || 0;
  if(k.indexOf("at_") === 0) return (c.attr || {})[k.slice(3)] || 0;
  if(k === "res") return c.res == null ? "" : c.res;
  if(/^bez[0-3]$/.test(k)){ v = (c.bezL || [])[+k.slice(3)]; return v == null ? bgDefault(c, k) : v; }
  v = c[k]; if(v == null) v = c.bg && c.bg[k]; if(v == null) v = bgDefault(c, k);
  return v;
}
function bgSet(el){
  if(BG_RO || !window.CH) return; var k = el.getAttribute("data-k"), v = el.type === "checkbox" ? el.checked : el.value, c = CH;
  if(k.indexOf("sk_") === 0){ c.skills = c.skills || {}; c.skills[k.slice(3)] = Math.max(0, parseInt(v, 10) || 0); }
  else if(k.indexOf("at_") === 0){ c.attr[k.slice(3)] = Math.max(0, parseInt(v, 10) || 0); }
  else if(k === "res"){ c.res = parseInt(v, 10) || 0; }
  else if(/^bez[0-3]$/.test(k)){ c.bezL = c.bezL || [null, null, null, null]; c.bezL[+k.slice(3)] = v; if(k === "bez0") c.bez = v; }
  else if(/^(zk|zg|erf)\d/.test(k)){ c.bg = c.bg || {}; c.bg[k] = v; }
  else { c[k] = v; if(k === "archT" || k === "alterT") {} }
  bgAuto();
}
var bgTimer = null;
function bgAuto(){ clearTimeout(bgTimer); bgTimer = setTimeout(function(){ var a = loadChars(), i = a.map(function(x){ return x.id; }).indexOf(CH.id); if(i > -1){ a[i] = CH; saveChars(a); var m = document.getElementById("bgMsg"); if(m) m.textContent = "Gespeichert."; } }, 400); }

/* Bausteine – Koordinaten in Pixeln des Originalbogens (765 × 988) */
function bgPos(x, y, w, h){ return 'left:' + x + 'px;top:' + y + 'px;width:' + w + 'px;height:' + h + 'px'; }
function bgIn(c, k, x, y, w, h, cls){ return "\u0001" + '<input class="bg-i ' + (cls || "") + '" style="' + bgPos(x, y, w, h) + '" data-k="' + k + '" value="' + bgE(bgVal(c, k)) + '"' + (BG_RO ? " readonly" : "") + ' oninput="bgSet(this)" spellcheck="false">'; }
function bgTa(c, k, x, y, w, h, cls){ return "\u0001" + '<textarea class="bg-t ' + (cls || "") + '" style="' + bgPos(x, y, w, h) + '" data-k="' + k + '"' + (BG_RO ? " readonly" : "") + ' oninput="bgSet(this)" spellcheck="false">' + bgE(bgVal(c, k)) + '</textarea>'; }
function bgTx(x, y, t, cls, w){ return "\u0001" + '<div class="' + cls + '" style="left:' + x + 'px;top:' + y + 'px' + (w ? ';width:' + w + 'px' : '') + '">' + t + '</div>'; }
function bgChk(c, k, x, y, d){ var v = bgVal(c, k), on = v === true || v === "true"; return "\u0001" + '<label class="bg-c' + (on ? " bg-an" : "") + '" style="' + bgPos(x, y, d, d) + '"><input class="noprint" type="checkbox" data-k="' + k + '"' + (on ? " checked" : "") + (BG_RO ? " disabled" : "") + ' onchange="this.parentNode.classList.toggle(\'bg-an\',this.checked);bgSet(this)"><b></b></label>'; }

function bogenHTML(c, ro, base){
  BG_RO = !!ro; base = base || "";
  var h = '', i;
  /* Kopf */
  h += "\u0001" + '<img class="bg-logo" style="left:139px;top:55px" src="' + base + '../assets/logos/vaesen-dunkel.webp" alt="Vaesen">';
  h += "\u0001" + '<div class="bg-sub" style="left:147px;top:115.5px">' + "CHARAKTERBOGEN".split("").map(function(ch){ return "<span>" + ch + "</span>"; }).join("") + '</div>';
  /* Persönliche Angaben */
  [["name","NAME",48.5,162,435.5],["alterT","ALTER / ALTERSGRUPPE",48.5,197.5,146.5],["archT","ARCHETYP",204,197.5,280],["mot","MOTIVATION",48.5,233,435.5],["trauma","TRAUMA",48.5,268.5,435.5],["geheim","DUNKLES GEHEIMNIS",48.5,304,435.5]].forEach(function(f){
    h += bgTx(f[2] + 6, f[3] + 2, f[1], "bg-lab") + bgIn(c, f[0], f[2] + 4, f[3] + 7, f[4] - 8, 19);
  });
  h += bgTx(55, 343, "BEZIEHUNGEN", "bg-tit");
  [376, 404, 433, 461].forEach(function(y, n){ h += bgTx(55, y - 6, "SC " + (n + 1) + ":", "bg-lab") + bgIn(c, "bez" + n, 80, y - 8, 398, 20, "bez"); });
  /* Talente, Einsichten & Makel */
  h += bgTx(55, 499, "TALENTE", "bg-tit") + bgTa(c, "talent", 54, 518, 192, 86, "l4");
  h += bgTx(288, 499, "EINSICHTEN &amp; MAKEL", "bg-tit") + bgTa(c, "ein", 287, 518, 192, 86, "l4");
  /* Vorteile, Ausrüstung */
  h += bgTx(55, 648, "VORTEILE", "bg-tit") + bgTa(c, "vor", 62, 674, 176, 64, "l3");
  h += bgTx(288, 648, "AUSRÜSTUNG", "bg-tit") + bgTx(450.5, 656, "BONUS", "bg-lab c", 33.5);
  h += bgTa(c, "ausrT", 286, 667, 154, 150, "l7") + bgTa(c, "ausrB", 452, 667, 30, 150, "l7 c");
  /* Rüstung */
  h += bgTx(55, 789, "RÜSTUNG", "bg-tit") + bgTx(193, 797.5, "SCHUTZ", "bg-lab c", 33.5) + bgTx(229, 797.5, "BEWEGL.", "bg-lab c", 40);
  h += bgIn(c, "ruest", 52, 811, 131, 19) + bgIn(c, "ruestS", 194, 811, 31, 19, "c") + bgIn(c, "ruestB", 233, 811, 31, 19, "c");
  /* Waffen, Andenken */
  h += bgTx(55, 839, "WAFFEN", "bg-tit") + bgTx(193, 847, "SCHADEN", "bg-lab c", 33.5) + bgTx(232, 847, "REICHW.", "bg-lab c", 40.5) + bgTx(278, 847, "BONUS", "bg-lab c", 33.5) + bgTx(334, 839, "ANDENKEN", "bg-tit");
  h += bgTa(c, "waf", 54, 859, 128, 64, "l3") + bgTa(c, "wafS", 195, 859, 30, 64, "l3 c") + bgTa(c, "wafR", 234, 859, 37, 64, "l3 c") + bgTa(c, "wafB", 280, 859, 30, 64, "l3 c") + bgTa(c, "andenken", 333, 859, 145, 64, "l3");
  /* Attribute */
  h += bgTx(522.5, 52.5, "ATTRIBUTE", "bg-rib");
  [77, 105.5, 133.5, 162].forEach(function(y, n){ h += bgTx(521.8, y + 2, BG_ATTR[n], "bg-row") + bgIn(c, "at_" + BG_ATTR[n], 675, y + .5, 32, 18.5, "n"); });
  /* Ressourcen */
  h += bgTx(522.5, 225, "RESSOURCEN", "bg-rib sm") + bgIn(c, "res", 639, 220.5, 72, 24, "n");
  /* Zustände */
  h += bgTx(523.5, 281.5, "ZUSTÄNDE", "bg-rib");
  h += bgTx(521.8, 311, "KÖRPERLICH", "bg-lab b") + bgTx(521.8, 410.5, "GEISTIG", "bg-lab b");
  [309, 334, 358.5, 383.5].forEach(function(y, n){ h += bgTx(592.6, y - 1.5, BG_ZK[n], "bg-row") + bgChk(c, "zk" + n, 699, y, 12.5); });
  [408.5, 433, 458, 483].forEach(function(y, n){ h += bgTx(592.6, y - 1.5, BG_ZG[n], "bg-row") + bgChk(c, "zg" + n, 699, y, 12.5); });
  /* Fertigkeiten */
  h += bgTx(522.5, 534, "FERTIGKEITEN", "bg-rib");
  BG_SK.forEach(function(s, n){ var y = 559 + n * 28.36; h += bgTx(521.8, y + 2, s[0] + " (" + s[1] + ")", "bg-row") + bgIn(c, "sk_" + s[0], 675, y + .5, 32, 18.5, "n"); });
  /* Erfahrung */
  h += bgTx(522.5, 915, "ERFAHRUNG", "bg-rib sm");
  [630, 647.5, 665, 683, 700.5].forEach(function(x, n){ h += bgChk(c, "erf" + n, x, 906, 12.5) + bgChk(c, "erf" + (n + 5), x, 924, 12.5); });
  return h;
}
/* Ansichten: hochkant (wie das Original, auch für Druck/PDF) oder breit (vier Teile nebeneinander) */
/* Breite Ansicht: vier Teile als eigene Karten im Stil des Bogens (Rahmen + Eckrosette), gleich hoch */
var BG_PAD = 18, BG_GAP = 16;
/* Ausschnitt [x, y, w, h] im Originalbogen, Innenabstand [oben, rechts, unten, links], Rosette, senkrechte Ausrichtung */
var BG_REG = [
 {r:[14, 14, 489, 477], p:[0, BG_PAD, BG_PAD, 0], rose:"tl", v:"top", img:"a"},
 {r:[14, 484, 489, 490], p:[BG_PAD, BG_PAD, 0, 0], rose:"bl", v:"bottom", img:"b"},
 {r:[493, 14, 258, 499], p:[0, 0, BG_PAD, BG_PAD], rose:"tr", v:"top", img:"c"},
 {r:[493, 510, 258, 464], p:[BG_PAD, 0, 0, BG_PAD], rose:"br", v:"bottom", img:"d"}
];
var BG_H = Math.max.apply(null, BG_REG.map(function(g){ return g.r[3] + g.p[0] + g.p[2]; }));
var BG_W = BG_REG.reduce(function(a, g){ return a + g.r[2] + g.p[1] + g.p[3]; }, 0) + BG_GAP * (BG_REG.length - 1);
var BG_STATE = null;
function bgRegion(x, y){ return x < 497 ? (y < 487.5 ? 0 : 1) : (y < 511 ? 2 : 3); }
function bgPortrait(c, ro, base){ return '<div class="bogen' + (ro ? " ro" : "") + '">' + bogenHTML(c, ro, base).split("\u0001").join("") + '</div>'; }
function bgWide(c, ro, base){
  var parts = bogenHTML(c, ro, base).split("\u0001").filter(Boolean), G = [[], [], [], []], x = 0, out = "";
  parts.forEach(function(p){ var m = p.match(/left:([\d.]+)px;top:([\d.]+)px/); G[m ? bgRegion(+m[1], +m[2]) : 0].push(p); });
  BG_REG.forEach(function(g, i){
    var r = g.r, p = g.p, w = r[2] + p[1] + p[3], extra = BG_H - (r[3] + p[0] + p[2]), top = p[0] + (g.v === "bottom" ? extra : 0);
    out += '<div class="bgw-p" style="left:' + x + 'px;width:' + w + 'px;height:' + BG_H + 'px">' +
      '<div class="bgw-clip" style="left:' + p[3] + 'px;top:' + top + 'px;width:' + r[2] + 'px;height:' + r[3] + 'px"><div class="bogen' + (ro ? " ro" : "") + '" style="left:' + (-r[0]) + 'px;top:' + (-r[1]) + 'px;background:#f7f6f4 url(' + (base || "") + 'img/bogen_breit_' + g.img + '.webp) ' + r[0] + 'px ' + r[1] + 'px/' + r[2] + 'px ' + r[3] + 'px no-repeat">' + G[i].join("") + '</div></div>' +
      '<i class="bgw-f1"></i><i class="bgw-f2"></i><img class="bgw-rose ' + g.rose + '" src="' + (base || "") + 'img/bogen_rose.webp" alt=""></div>';
    x += w + BG_GAP;
  });
  return '<div class="bogen-wide" style="width:' + BG_W + 'px;height:' + BG_H + 'px">' + out + '</div>';
}
function bogenWrap(c, ro, base){ BG_STATE = {c:c, ro:!!ro, base:base || "", mode:""}; return '<div class="bogen-wrap" id="bgWrap"><div class="bogen-scale" id="bgScale">' + bgPortrait(c, ro, base) + '</div></div>'; }
function bgFit(){
  var w = document.getElementById("bgWrap"), s = document.getElementById("bgScale"); if(!w || !s || !BG_STATE) return;
  var pcs = getComputedStyle(w.parentNode), avail = w.parentNode.clientWidth - parseFloat(pcs.paddingLeft) - parseFloat(pcs.paddingRight), wide = avail >= 1400 && !w.closest(".bg-print"), mode = wide ? "wide" : "port";
  if(mode !== BG_STATE.mode){ BG_STATE.mode = mode; s.innerHTML = wide ? bgWide(BG_STATE.c, BG_STATE.ro, BG_STATE.base) : bgPortrait(BG_STATE.c, BG_STATE.ro, BG_STATE.base); }
  var bw = wide ? BG_W : 765, bh = wide ? BG_H : 988, k = wide ? avail / bw : Math.min(avail / 765, 1.18);
  s.style.width = bw + "px"; s.style.height = bh + "px"; s.style.transform = "scale(" + k + ")"; w.style.width = (bw * k) + "px"; w.style.height = (bh * k) + "px";
}
/* Ausfüllbares PDF: immer hochkant wie das Original */
function bgPdf(knopf){
  if(!window.FillPDF){ var sc = document.createElement("script"); sc.src = "../shared/fillpdf.js"; sc.onload = function(){ bgPdf(knopf); }; document.head.appendChild(sc); return; }
  var host = document.createElement("div"); host.className = "bg-pdfhost"; host.innerHTML = bgPortrait(CH, false, ""); document.body.appendChild(host);
  FillPDF.make(host.firstChild, {name:"Vaesen – " + (CH.name || "Charakterbogen"), knopf:knopf, marks:[[".bg-c", "bg-an", "punkt"]]}).then(function(){ host.remove(); }, function(){ host.remove(); });
}
window.addEventListener("resize", bgFit);

function viewBogen(){
  var chars = loadChars(), f = chars.filter(function(x){ return x.id === sub; })[0];
  if(f) CH = f; else if(!CH) CH = newChar();
  BG_RO = false;
  return tabsBar(CTABS, "Charakterbogen") + '<div class="page bg-page"><div class="bg-tools"><button class="btn" onclick="saveCur2()">Speichern</button><button class="btn alt" onclick="bgPdf(this)">Ausfüllbares PDF</button><button class="btn alt" onclick="printSheet()">Drucken</button><button class="btn alt" onclick="go(\'erstellung/' + CH.id + '\')">Zur Erstellung</button><span class="pg" id="bgMsg"></span></div>' + bogenWrap(CH, false) + '</div>';
}
function saveCur2(){ var a = loadChars(), i = a.map(function(x){ return x.id; }).indexOf(CH.id); if(i > -1) a[i] = CH; else a.push(CH); saveChars(a); var m = document.getElementById("bgMsg"); if(m) m.textContent = "Gespeichert."; }
window.addEventListener("beforeprint", function(){ var s = document.getElementById("bgScale"); if(!s || !BG_STATE) return; BG_STATE.mode = "print"; s.innerHTML = bgPortrait(BG_STATE.c, BG_STATE.ro, BG_STATE.base); s.style.width = "765px"; s.style.height = "988px"; });
window.addEventListener("afterprint", bgFit);
