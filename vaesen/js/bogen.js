/* Charakterbogen im Layout des Original-Bogens (Vaesen – Material: Character Sheet). Bezugsgröße 765 × 986 px. */
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

/* Bausteine */
function bgBox(x, y, w, h, cls, inner){ return '<div class="bg-b ' + (cls || "") + '" style="left:' + x + 'px;top:' + y + 'px;width:' + w + 'px;height:' + h + 'px">' + (inner || "") + '</div>'; }
function bgIn(c, k, x, y, w, h, o){ o = o || {};
  var v = bgVal(c, k), ro = BG_RO ? " readonly" : "", cls = "bg-f" + (o.cls ? " " + o.cls : "");
  return bgBox(x, y, w, h, cls, (o.lab ? '<i class="bg-l">' + o.lab + '</i>' : '') + '<input data-k="' + k + '" value="' + bgE(v) + '"' + ro + ' oninput="bgSet(this)"' + (o.num ? ' inputmode="numeric" class="bg-n"' : '') + '>');
}
function bgTa(c, k, x, y, w, h, lh, o){ o = o || {};
  var v = bgVal(c, k), ro = BG_RO ? " readonly" : "";
  return bgBox(x, y, w, h, "bg-f bg-ta" + (o.cls ? " " + o.cls : ""), '<textarea data-k="' + k + '" style="--lh:' + lh + 'px;padding-top:' + (o.pt == null ? 0 : o.pt) + 'px" spellcheck="false"' + ro + ' oninput="bgSet(this)">' + bgE(v) + '</textarea>');
}
function bgRib(x, y, w, h, t){ return bgBox(x, y, w, h, "bg-rib", '<span>' + t + '</span>'); }
function bgTit(x, y, t){ return '<div class="bg-tit" style="left:' + x + 'px;top:' + y + 'px">' + t + '</div>'; }
function bgLab(x, y, t, cls){ return '<div class="bg-lab ' + (cls || "") + '" style="left:' + x + 'px;top:' + y + 'px">' + t + '</div>'; }
function bgChk(c, k, x, y, d){ var on = bgVal(c, k) === true || bgVal(c, k) === "true"; return '<label class="bg-c" style="left:' + x + 'px;top:' + y + 'px;width:' + d + 'px;height:' + d + 'px"><input type="checkbox" data-k="' + k + '"' + (on ? " checked" : "") + (BG_RO ? " disabled" : "") + ' onchange="bgSet(this)"><b></b></label>'; }
function bgSpiral(x, y, s, rot, flip){ return '<svg class="bg-sp" style="left:' + x + 'px;top:' + y + 'px;width:' + s + 'px;height:' + s + 'px;transform:rotate(' + (rot || 0) + 'deg)' + (flip ? ' scaleX(-1)' : '') + '" viewBox="0 0 40 40"><use href="#bgSpiral"/></svg>'; }
function bgRose(x, y, s){ return '<svg class="bg-sp" style="left:' + x + 'px;top:' + y + 'px;width:' + s + 'px;height:' + s + 'px" viewBox="0 0 40 40"><use href="#bgRose"/></svg>'; }

function bogenHTML(c, ro, base){
  BG_RO = !!ro; base = base || "";
  var h = '', i, y;
  h += '<svg width="0" height="0" style="position:absolute"><defs><g id="bgSpiral" fill="none" stroke="#5a4630" stroke-width="2.4" stroke-linecap="round"><path d="M6 34 C6 14 24 4 34 14 C40 22 30 32 22 26 C16 21 22 14 27 18"/><circle cx="8" cy="34" r="2.6" fill="#5a4630"/></g><g id="bgRose" fill="none" stroke="#5a4630" stroke-width="2.2" stroke-linecap="round"><circle cx="20" cy="20" r="14"/><circle cx="20" cy="20" r="5" fill="#5a4630"/><path d="M20 6 C26 12 26 28 20 34 M6 20 C12 14 28 14 34 20"/></g></defs></svg>';
  h += '<div class="bg-frame"></div><div class="bg-frame2"></div>';
  h += bgRose(18, 18, 38) + bgRose(709, 18, 38) + bgRose(18, 932, 38) + bgRose(709, 932, 38);
  /* Kopf */
  h += bgSpiral(60, 52, 62, 0) + bgSpiral(386, 52, 62, 0, 1);
  h += '<img class="bg-logo" src="' + base + '../assets/logos/vaesen-dunkel.webp" alt="Vaesen">';
  h += '<div class="bg-sub">C H A R A K T E R B O G E N</div>';
  /* Linke Spalte */
  h += bgBox(44, 154, 446, 330, "bg-pan");
  h += bgIn(c, "name", 48, 158, 437, 32, {lab:"NAME"});
  h += bgIn(c, "alterT", 48, 197, 147, 28, {lab:"ALTER / ALTERSGRUPPE"});
  h += bgIn(c, "archT", 204, 197, 281, 28, {lab:"ARCHETYP"});
  h += bgIn(c, "mot", 48, 232, 437, 32, {lab:"MOTIVATION"});
  h += bgIn(c, "trauma", 48, 268, 437, 32, {lab:"TRAUMA"});
  h += bgIn(c, "geheim", 48, 303, 437, 32, {lab:"DUNKLES GEHEIMNIS"});
  h += bgTit(60, 341, "BEZIEHUNGEN");
  h += bgBox(48, 360, 437, 112, "bg-f");
  for(i = 0; i < 4; i++){ y = 368 + i * 28; h += bgLab(56, y, "SC " + (i + 1) + ":", "sm") + '<div class="bg-ln" style="left:56px;top:' + (y + 19) + 'px;width:421px"></div>' + bgIn(c, "bez" + i, 84, y - 3, 393, 22, {cls:"bg-bare"}); }
  /* Talente / Einsichten */
  h += bgBox(38, 494, 218, 140, "bg-pan") + bgTit(60, 497, "TALENTE") + bgSpiral(30, 490, 22, 0);
  h += bgTa(c, "talent", 48, 515, 200, 108, 26.5, {pt:6});
  h += bgBox(266, 494, 226, 140, "bg-pan") + bgTit(292, 497, "EINSICHTEN &amp; MAKEL") + bgSpiral(258, 490, 22, 0);
  h += bgTa(c, "ein", 276, 515, 208, 108, 26.5, {pt:6});
  /* Vorteile */
  h += bgBox(38, 643, 235, 128, "bg-pan") + bgTit(60, 646, "VORTEILE") + bgSpiral(30, 639, 22, 0);
  h += bgBox(48, 668, 212, 92, "bg-f bg-dbl");
  h += bgTa(c, "vor", 56, 676, 196, 76, 24, {pt:4});
  /* Ausrüstung */
  h += bgBox(266, 643, 226, 193, "bg-pan") + bgTit(292, 646, "AUSRÜSTUNG") + bgSpiral(258, 639, 22, 0) + bgLab(445, 653, "BONUS", "sm");
  h += bgTa(c, "ausrT", 280, 664, 165, 170, 21.2, {pt:4});
  h += bgTa(c, "ausrB", 452, 664, 34, 170, 21.2, {pt:4, cls:"bg-ctr"});
  /* Rüstung */
  h += bgBox(38, 782, 228, 58, "bg-pan") + bgTit(60, 786, "RÜSTUNG") + bgSpiral(30, 778, 22, 0);
  h += bgLab(188, 790, "SCHUTZ", "sm") + bgLab(233, 790, "BEWEGL.", "sm");
  h += bgIn(c, "ruest", 48, 806, 140, 28, {}) + bgIn(c, "ruestS", 192, 806, 36, 28, {cls:"bg-ctr"}) + bgIn(c, "ruestB", 232, 806, 36, 28, {cls:"bg-ctr"});
  /* Waffen / Andenken */
  h += bgBox(38, 840, 453, 108, "bg-pan") + bgTit(60, 842, "WAFFEN") + bgTit(334, 842, "ANDENKEN");
  h += bgLab(194, 846, "SCHADEN", "sm") + bgLab(231, 846, "REICHW.", "sm") + bgLab(277, 846, "BONUS", "sm");
  h += bgTa(c, "waf", 48, 856, 140, 82, 27, {pt:4});
  h += bgTa(c, "wafS", 192, 856, 34, 82, 27, {pt:4, cls:"bg-ctr"}) + bgTa(c, "wafR", 231, 856, 42, 82, 27, {pt:4, cls:"bg-ctr"}) + bgTa(c, "wafB", 277, 856, 36, 82, 27, {pt:4, cls:"bg-ctr"});
  h += bgTa(c, "andenken", 328, 856, 158, 82, 27, {pt:4});
  /* Rechte Spalte: Attribute */
  h += bgBox(505, 38, 220, 154, "bg-pan2");
  h += bgRib(513, 47, 204, 24, "ATTRIBUTE");
  BG_ATTR.forEach(function(k, n){ var ty = 75 + n * 28.5; h += bgBox(513, ty, 204, 28, "bg-row" + (n % 2 ? " alt" : "")) + '<div class="bg-rt" style="left:522px;top:' + (ty + 6) + 'px">' + k + '</div>' + bgIn(c, "at_" + k, 673, ty + 2, 36, 24, {num:1, cls:"bg-ctr"}); });
  /* Ressourcen */
  h += bgBox(505, 213, 220, 38, "bg-pan2") + bgRib(513, 219, 120, 28, "RESSOURCEN") + bgIn(c, "res", 637, 219, 76, 28, {num:1, cls:"bg-ctr"});
  /* Zustände */
  h += bgBox(505, 268, 220, 238, "bg-pan2") + bgRib(513, 278, 204, 22, "ZUSTÄNDE");
  h += bgLab(522, 310, "KÖRPERLICH", "sm b");
  BG_ZK.forEach(function(t, n){ var ty = 303 + n * 24.7; h += bgBox(513, ty, 204, 24.7, "bg-row" + (n % 2 ? " alt" : "")) + '<div class="bg-rt" style="left:593px;top:' + (ty + 5) + 'px">' + t + '</div>' + bgChk(c, "zk" + n, 698, ty + 4, 16); });
  h += '<div class="bg-hr" style="left:513px;top:402px;width:204px"></div>';
  h += bgLab(522, 410, "GEISTIG", "sm b");
  BG_ZG.forEach(function(t, n){ var ty = 403 + n * 24.7; h += bgBox(513, ty, 204, 24.7, "bg-row" + (n % 2 ? " alt" : "")) + '<div class="bg-rt" style="left:593px;top:' + (ty + 5) + 'px">' + t + '</div>' + bgChk(c, "zg" + n, 698, ty + 4, 16); });
  /* Fertigkeiten */
  h += bgBox(505, 520, 220, 378, "bg-pan2") + bgRib(513, 531, 204, 22, "FERTIGKEITEN");
  BG_SK.forEach(function(s, n){ var ty = 553 + n * 28.4; h += bgBox(513, ty, 204, 28.4, "bg-row" + (n % 2 ? "" : " alt")) + '<div class="bg-rt" style="left:522px;top:' + (ty + 6) + 'px">' + s[0] + ' <small>(' + s[1] + ')</small></div>' + bgIn(c, "sk_" + s[0], 673, ty + 3, 36, 22, {num:1, cls:"bg-ctr"}); });
  /* Erfahrung */
  h += bgBox(505, 902, 220, 48, "bg-pan2") + bgRib(513, 910, 112, 28, "ERFAHRUNG");
  for(i = 0; i < 10; i++) h += bgChk(c, "erf" + i, 630 + (i % 5) * 16, 908 + Math.floor(i / 5) * 17, 14);
  return '<div class="bogen' + (BG_RO ? " ro" : "") + '">' + h + '</div>';
}
function bogenWrap(c, ro, base){ return '<div class="bogen-wrap" id="bgWrap"><div class="bogen-scale" id="bgScale">' + bogenHTML(c, ro, base) + '</div></div>'; }
function bgFit(){
  var w = document.getElementById("bgWrap"), s = document.getElementById("bgScale"); if(!w || !s) return;
  var avail = Math.min(w.parentNode.clientWidth, 900), k = Math.min(avail / 765, 1.18);
  s.style.transform = "scale(" + k + ")"; w.style.width = (765 * k) + "px"; w.style.height = (986 * k) + "px";
}
window.addEventListener("resize", bgFit);

function viewBogen(){
  var chars = loadChars(), f = chars.filter(function(x){ return x.id === sub; })[0];
  if(f) CH = f; else if(!CH) CH = newChar();
  BG_RO = false;
  return tabsBar(CTABS, "Charakterbogen") + '<div class="page bg-page"><div class="bg-tools"><button class="btn" onclick="saveCur2()">Speichern</button><button class="btn alt" onclick="printSheet()">Drucken / als PDF</button><button class="btn alt" onclick="go(\'erstellung/' + CH.id + '\')">Zur Erstellung</button><span class="pg" id="bgMsg"></span></div>' + bogenWrap(CH, false) + '</div>';
}
function saveCur2(){ var a = loadChars(), i = a.map(function(x){ return x.id; }).indexOf(CH.id); if(i > -1) a[i] = CH; else a.push(CH); saveChars(a); var m = document.getElementById("bgMsg"); if(m) m.textContent = "Gespeichert."; }
