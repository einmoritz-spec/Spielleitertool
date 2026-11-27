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
function bgIn(c, k, x, y, w, h, cls){ return '<input class="bg-i ' + (cls || "") + '" style="' + bgPos(x, y, w, h) + '" data-k="' + k + '" value="' + bgE(bgVal(c, k)) + '"' + (BG_RO ? " readonly" : "") + ' oninput="bgSet(this)" spellcheck="false">'; }
function bgTa(c, k, x, y, w, h, cls){ return '<textarea class="bg-t ' + (cls || "") + '" style="' + bgPos(x, y, w, h) + '" data-k="' + k + '"' + (BG_RO ? " readonly" : "") + ' oninput="bgSet(this)" spellcheck="false">' + bgE(bgVal(c, k)) + '</textarea>'; }
function bgTx(x, y, t, cls, w){ return '<div class="' + cls + '" style="left:' + x + 'px;top:' + y + 'px' + (w ? ';width:' + w + 'px' : '') + '">' + t + '</div>'; }
function bgChk(c, k, x, y, d){ var v = bgVal(c, k), on = v === true || v === "true"; return '<label class="bg-c" style="' + bgPos(x, y, d, d) + '"><input type="checkbox" data-k="' + k + '"' + (on ? " checked" : "") + (BG_RO ? " disabled" : "") + ' onchange="bgSet(this)"><b></b></label>'; }

function bogenHTML(c, ro, base){
  BG_RO = !!ro; base = base || "";
  var h = '', i;
  /* Kopf */
  h += '<img class="bg-logo" src="' + base + '../assets/logos/vaesen-dunkel.webp" alt="Vaesen">';
  h += '<div class="bg-sub">' + "CHARAKTERBOGEN".split("").map(function(ch){ return "<span>" + ch + "</span>"; }).join("") + '</div>';
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
  return '<div class="bogen' + (BG_RO ? " ro" : "") + '">' + h + '</div>';
}
function bogenWrap(c, ro, base){ return '<div class="bogen-wrap" id="bgWrap"><div class="bogen-scale" id="bgScale">' + bogenHTML(c, ro, base) + '</div></div>'; }
function bgFit(){
  var w = document.getElementById("bgWrap"), s = document.getElementById("bgScale"); if(!w || !s) return;
  var avail = Math.min(w.parentNode.clientWidth, 900), k = Math.min(avail / 765, 1.18);
  s.style.transform = "scale(" + k + ")"; w.style.width = (765 * k) + "px"; w.style.height = (988 * k) + "px";
}
window.addEventListener("resize", bgFit);

function viewBogen(){
  var chars = loadChars(), f = chars.filter(function(x){ return x.id === sub; })[0];
  if(f) CH = f; else if(!CH) CH = newChar();
  BG_RO = false;
  return tabsBar(CTABS, "Charakterbogen") + '<div class="page bg-page"><div class="bg-tools"><button class="btn" onclick="saveCur2()">Speichern</button><button class="btn alt" onclick="printSheet()">Drucken / als PDF</button><button class="btn alt" onclick="go(\'erstellung/' + CH.id + '\')">Zur Erstellung</button><span class="pg" id="bgMsg"></span></div>' + bogenWrap(CH, false) + '</div>';
}
function saveCur2(){ var a = loadChars(), i = a.map(function(x){ return x.id; }).indexOf(CH.id); if(i > -1) a[i] = CH; else a.push(CH); saveChars(a); var m = document.getElementById("bgMsg"); if(m) m.textContent = "Gespeichert."; }
