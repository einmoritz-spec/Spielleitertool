/* Interaktiver Charakterbogen: #bogen (leer) und #bogen/<pc-id> (fertiger Charakter). Zustand: ST.bogen["leer"] bzw. ST.bogen[<pc-id>]. */
var BG_SK = ["Abfangen","Zerschlagen","Zusammenbrauen","Kochen","Schürfen","Glänzen","Hacken","Ernten","Jagen","Überlisten","Rasseln","Bergen","Spüren","Studieren","Beeinflussen","Pflegen","Springen","Wellenlauf"];
var BG_ED = ["Anmut","Eisen","Instinkt","Schärfe","Zähne","Gezeiten","Schleier"];
var BG_LA = ["Low Sour","Chthonisch","Saprekk","Gaudimm","Brasstongue","Raka Spit","Lyre-Bite","Alte Hand","Signalgebung","Highvin"];
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
function bgPcList(){ return (window.WS_NACH && WS_NACH.charaktere || []).filter(function(s){ return s.k === "Fertige Charaktere" && pcOf(s); }); }
function bgFromPc(s, pc){
  var o = bgNew(), R = pc.res || {}, mi = pc.meilensteine || {};
  o.f = {name:s.t, spieler:"", blut:pc.blut || "", herkunft:pc.herkunft || "", posten:pc.posten || "", notizen:"",
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
    st = key !== "leer" && pcs[0] ? bgFromPc(pcs[0], pcOf(pcs[0])) : bgNew();
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
function bgSec(t, cls, inner){ return '<section class="bs ' + cls + '"><h3>' + t + '</h3><div class="bb">' + inner + '</div></section>'; }
function bgCard(t, kind, i, hint, nameFit){
  return '<div class="bk"><span class="bl l1">Name</span><div class="bn"><input class="nm" spellcheck="false" ' + bgIn(kind + '.' + i + '.n', t.n, nameFit) + '><input class="ty" spellcheck="false" placeholder="' + hint + '" ' + bgIn(kind + '.' + i + '.t', t.t, 9) + '></div>' +
    '<span class="bl l2"></span>' + bgChain(t, kind, i) + '<span class="bl l3">Details</span>' + bgTx(kind + '.' + i + '.d', t.d, 10, "bd") + '</div>';
}
function bgSheet(){
  var s = BG.st, f = s.f, i;
  var ed = BG_ED.map(function(n, i){ return '<div class="br"><span>' + n + '</span>' + '<button class="cr big' + (s.e[i] ? ' f' : '') + '" onclick="bgClk(\'e\',' + i + ',1)"></button></div>'; }).join("");
  var sk = "";
  for(var c = 0; c < 3; c++){ sk += '<div class="bcl">'; for(i = 0; i < 6; i++){ var k = c * 6 + i; sk += '<div class="br"><span>' + BG_SK[k] + '</span><span class="bds">' + bgDots(3, (s.s[BG_SK[k]] || 0), 's', k) + '</span></div>'; } sk += '</div>'; }
  var la = "";
  for(var c2 = 0; c2 < 2; c2++){ la += '<div class="bcl">'; for(i = 0; i < 6; i++){ var q = c2 * 6 + i, nm = q < 10 ? BG_LA[q] : null, key = q < 10 ? nm : "_x";
    la += '<div class="br"><span>' + (nm ? nm : '<input class="lx" spellcheck="false" data-fit="12" ' + bgIn("lx", s.lx || "") + '>') + '</span><span class="bds">' + bgDots(3, s.l[key] || 0, 'l', q) + '</span></div>'; } la += '</div>'; }
  var lines = function(a){ return a.map(function(x){ return '<div class="bl2"><span>' + x[0] + '</span><b>' + x[1] + '</b></div>'; }).join(""); };
  var res = function(t, key){ return '<div class="rb"><h4>' + t + '</h4>' + bgTx("f." + key, f[key] || "", 12, "ln") + '</div>'; };
  var fld = function(t, key){ return '<label class="fl"><span>' + t + ':</span><input spellcheck="false" ' + bgIn("f." + key, f[key] || "", 12) + '></label>'; };
  var asp = "", tr = "";
  for(i = 0; i < 7; i++) asp += bgCard(s.a[i], "a", i, "Eigenschaft/Ausrüstung/Gefährte", 15);
  for(i = 0; i < 3; i++) tr += bgCard(s.tr[i], "tr", i, "Vorteil/Verletzung/Leiste", 15);
  var mo = s.mo.map(function(m, i){ return '<div class="bm"><textarea spellcheck="false" data-fit="11" oninput="bgSet(\'mo.' + i + '.t\',this)">' + esc(m.t) + '</textarea><div class="bch">' + [0, 1].map(function(j){ return (j ? '<s></s>' : '') + '<button class="cr big' + (m.m[j] ? ' f' : '') + '" onclick="bgClk(\'mo\',' + i + ',' + j + ')"></button>'; }).join("") + '</div></div>'; }).join("");
  var c1 = '<div class="bcol c1"><div class="bti"><img src="../assets/logos/the-wildsea.webp" alt="The Wildsea"><div>Charakterbogen</div></div>' +
    bgSec("So wird gespielt", "bhp", '<div class="bhw"><div class="bsub w1"><h4>Würfeln</h4>' + lines([["Stärke", "(1W6)"], ["Fertigkeit", "(bis zu 3W6)"], ["Vorteil", "(bis zu 2W6)"]]) + '</div><div class="bsub"><h4>Ergebnisse</h4>' + lines([["Triumph", "[6]"], ["Konflikt", "[5/4]"], ["Desaster", "[3/2/1]"], ["Wendung", "[Pasch]"]]) + '</div></div>') +
    bgSec("Hintergrund", "bbg", '<div class="bgw"><div>' + fld("Name", "name") + fld("Spieler", "spieler") + fld("Blutlinie", "blut") + fld("Herkunft", "herkunft") + fld("Posten", "posten") + '</div><div class="bno"><span>Weitere Notizen:</span>' + bgTx("f.notizen", f.notizen || "", 11, "ln") + '</div></div>') +
    bgSec("Meilensteine", "bms", '<div class="bhw"><div class="bsub fl1"><h4>Große</h4>' + bgTx("f.gross", f.gross || "", 11, "ln") + '</div><div class="bsub fl1"><h4>Kleine</h4>' + bgTx("f.klein", f.klein || "", 11, "ln") + '</div></div>') +
    bgSec("Antriebe", "bdr", bgTx("f.antriebe", f.antriebe || "", 12, "ln")) +
    bgSec("Morast", "bmo", mo) + '</div>';
  var c2 = '<div class="bcol c2">' + bgSec("Stärken", "bed", '<div class="bg3">' + ed + '</div>') + bgSec("Fertigkeiten", "bsk", '<div class="bg3">' + sk + '</div>') +
    bgSec("Sprachen", "bla", '<div class="bg2">' + la + '</div>') +
    bgSec("Ressourcen", "bre", '<div class="bgr">' + res("Bergegut", "bergegut") + res("Proben", "proben") + res("Geflüster", "fluester") + res("Seekarten", "seekarten") + '</div>') + '</div>';
  var c3 = '<div class="bcol c3">' + bgSec("Aspekte", "bas", asp) + bgSec("Temporäre Leisten", "btr", tr) + '</div>';
  return c1 + c2 + c3;
}
function bgZoom(){ return Math.max(.3, Math.min(1.5, (Math.max(innerWidth, 1280) - 36) / 1122)); }
function viewBogen(id){
  var pcs = bgPcList(), s = id && pcs.filter(function(x){ return x.id === id; })[0];
  BG.key = s ? id : "leer"; BG.st = bgLoad(BG.key);
  var opts = '<option value="">Leerer Bogen</option>' + pcs.map(function(x){ return '<option value="' + x.id + '"' + (x.id === BG.key ? ' selected' : '') + '>' + esc(x.t) + '</option>'; }).join("");
  setTimeout(bgFit, 0);
  return '<div class="tabs"><a class="on">Charakterbogen</a><span class="r bbar"><select onchange="go(this.value ? \'bogen/\' + this.value : \'bogen\')">' + opts + '</select><button class="chip" onclick="bgReset()">Zurücksetzen</button><button class="chip on" onclick="bgPrint()">Als PDF drucken</button></span></div>' +
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
  else if(kind === "s" || kind === "l"){ var key = kind === "s" ? BG_SK[a] : (a < 10 ? BG_LA[a] : "_x"), m = kind === "s" ? s.s : s.l; m[key] = (m[key] || 0) === b ? b - 1 : b; }
  else if(kind === "mo") s.mo[a].m[b] = s.mo[a].m[b] ? 0 : 1;
  else { var t = s[kind][a]; if(b >= t.len) t.len = b + 1; else t.m[b] = t.m[b] ? 0 : 1; }
  bgSave(); bgRepaint();
}
function bgRepaint(){
  var sh = document.getElementById("bsh"); if(!sh) return;
  var y = scrollY; sh.innerHTML = bgSheet(); bgFit(); scrollTo(0, y);
}
function bgReset(){
  if(!confirm("Bogen zurücksetzen?")) return;
  if(ST.bogen) delete ST.bogen[BG.key]; save();
  BG.st = bgLoad(BG.key); bgRepaint();
}
function bgPrint(){ bgFit(); window.print(); }
window.addEventListener("resize", function(){ var sh = document.getElementById("bsh"); if(sh) sh.style.zoom = bgZoom().toFixed(3); });
window.addEventListener("beforeprint", function(){ var sh = document.getElementById("bsh"); if(sh){ sh.style.zoom = 1; bgFit(); } });
window.addEventListener("afterprint", function(){ var sh = document.getElementById("bsh"); if(sh) sh.style.zoom = bgZoom().toFixed(3); });
