/* Bereich Mäuse: Spielmäuse · Gegenstände · Zustände · Mausbogen */
var MSUB = [["spielmaeuse","Spielmäuse"],["gegenstaende","Gegenstände"],["zustaende","Zustände"],["bogen","Mausbogen"]];
function kartName(f){ var k = MR.karten.filter(function(x){ return x[0] === f; })[0]; return k ? k[1] : f; }
function kartHoch(f){ var k = MR.karten.filter(function(x){ return x[0] === f; })[0]; return k && k[3] === 2; }
function kartTile(f){ return '<div class="c' + (kartHoch(f) ? " h2" : "") + '" onclick="zoomK(\'' + f + '\')" title="' + esc(kartName(f)) + '"><img src="' + IMG("karten/" + f) + '" alt="' + esc(kartName(f)) + '" loading="lazy"></div>'; }

function pSpielmaeuse(id){
  var m = MR.maeuse.filter(function(x){ return x.id === id; })[0] || MR.maeuse[0];
  var main = '<div class="rp"><div class="mb"><div class="por"><img src="' + IMG("maus-" + m.id) + '" alt=""></div><div>' +
    '<div class="kopf"><b>Name</b><span>' + esc(m.name) + '</span>' + pg(m.p) + '</div>' +
    '<dl class="meta"><dt>Hintergrund</dt><dd>' + esc(m.hg) + '</dd><dt>Geburtszeichen</dt><dd>' + esc(m.zeichen) + ' (Charakter: ' + esc(m.charakter) + ')</dd><dt>Fell</dt><dd>' + esc(m.fell) + '</dd><dt>Körperliches Merkmal</dt><dd>' + esc(m.merkmal) + '</dd></dl>' +
    '<div class="werte"><div><b>STÄ</b><span>' + m.sta + '</span></div><div><b>GES</b><span>' + m.ges + '</span></div><div><b>WIL</b><span>' + m.wil + '</span></div><div><b>TP</b><span>' + m.tp + '</span></div><div><b>Kerne</b><span>' + m.kerne + '</span></div></div>' +
    '<p class="zit">' + esc(m.text) + '</p>' +
    '<h3 class="gh">Startausrüstung ' + pg("S. 15") + '</h3><p style="font-size:16.5px;margin-bottom:8px">' + esc(m.aus) + '</p>' +
    '<div class="kart">' + m.karten.map(kartTile).join("") + '</div>' +
    '<div class="bbtn"><button class="p" onclick="bogenVon(\'' + m.id + '\')">Als Mausbogen öffnen</button></div></div></div></div>';
  return lay(side(MR.maeuse.map(function(x){ return [x.id, x.name, IMG("maus-" + x.id), x.hg]; }), m.id, "maeuse/spielmaeuse"), main);
}
function pGegenstaende(){
  var G = ["Zauber","Waffen","Munition","Rüstung","Ausrüstung"];
  return '<div class="rp voll"><div class="ph"><h1>Gegenstandskarten</h1>' + pg("S. 43") + '</div>' + G.map(function(g){
    return '<h3 class="gh">' + g + '</h3><div class="kart">' + MR.karten.filter(function(k){ return k[2] === g; }).map(function(k){ return kartTile(k[0]); }).join("") + '</div>';
  }).join("") + '</div>';
}
function pZustaende(){
  var inv = MR.regeln.filter(function(x){ return x.id === "inventar"; })[0].b;
  var i0 = inv.findIndex(function(b){ return b[0] === "h" && b[1] === "Zustände"; });
  var txt = inv.slice(i0 + 1, i0 + 5);
  return '<div class="rp"><div class="ph"><h1>Zustandskarten</h1>' + pg("S. 41") + '</div><div class="txt">' + blocks(txt) + '</div>' +
    '<div class="kart zs" style="margin-top:16px">' + MR.zustaende.map(function(z){ return '<div class="c" onclick="zoomK(\'' + z[1] + '\')"><img src="' + IMG("karten/" + z[1]) + '" alt="' + esc(z[0]) + '"></div>'; }).join("") + '</div></div>';
}

/* Mausbogen: im Tool ausfüllen (localStorage) und als ausfüllbares PDF laden */
var SLOTS = [["hp","Hauptpfote"],["np","Nebenpfote"],["k1","Körper"],["k2","Körper"],["r1","1"],["r2","2"],["r3","3"],["r4","4"],["r5","5"],["r6","6"]];
function bgL(){ return store("bogen") || {}; }
function bgS(o){ store("bogen", o); }
function bgIn(f, v, cls){ return '<input class="' + (cls || "") + '" data-f="' + f + '" value="' + esc(v[f] == null ? "" : v[f]) + '" oninput="bgSet(this)">'; }
function bgSet(e){ var o = bgL(); o[e.dataset.f] = e.value; bgS(o); }
function slot(s, v){
  var c = (v.slots || {})[s[0]], pips = (v.pips || {})[s[0]] || 0, zs = c && /^z-/.test(c);
  return '<div class="slot' + (c ? " fill" : "") + (zs ? " zst" : "") + '" onclick="slotPick(\'' + s[0] + '\')"><b>' + s[1] + '</b>' + (c ? '<img src="' + IMG("karten/" + c) + '" alt="">' +
    (zs ? "" : '<span class="pips">' + [1,2,3].map(function(i){ return '<i class="' + (i <= pips ? "on" : "") + '" onclick="event.stopPropagation();pip(\'' + s[0] + '\',' + i + ')"></i>'; }).join("") + '</span>') : "") + '</div>';
}
function pBogen(){
  var v = bgL(), mp = MR.maeuse.filter(function(m){ return m.id === v.maus; })[0];
  function wz(a, k){ return '<div class="a">' + a + '</div><div class="m">' + bgIn(k + "m", v) + '</div><div>' + bgIn(k + "a", v) + '</div>'; }
  return '<div class="rp"><div class="sheet" id="bogen"><div class="r1"><div class="nm"><label>Name ' + bgIn("name", v) + '</label><label>Hintergrund ' + bgIn("hg", v) + '</label></div>' +
    '<div class="meta2"><span>Geburtszeichen</span>' + bgIn("zeichen", v) + '<span>Charakter</span>' + bgIn("charakter", v) + '<span>Fell</span>' + bgIn("fell", v) + '<span>Körperliches Merkmal</span>' + bgIn("merkmal", v) + '</div></div>' +
    '<div class="r2"><div class="por2"><span>Porträt/Beschreibung</span>' + (mp ? '<img src="' + IMG("maus-" + mp.id) + '" alt="">' : "") + '</div>' +
    '<div class="wt"><div class="h"></div><div class="h">Maximal</div><div class="h">Aktuell</div>' + wz("STÄ", "sta") + wz("GES", "ges") + wz("WIL", "wil") + wz("TP", "tp") + '</div></div>' +
    '<div class="r3"><h3>Inventar</h3><div class="kern">KERNE ' + bgIn("kerne", v) + ' / 250</div></div>' +
    '<div class="ivt"><div class="pf">' + slot(SLOTS[0], v) + slot(SLOTS[1], v) + '</div><div class="pf">' + slot(SLOTS[2], v) + slot(SLOTS[3], v) + '</div><div class="rs">' + SLOTS.slice(4).map(function(s){ return slot(s, v); }).join("") + '</div></div>' +
    '<div class="ivt-l"><span><b>Zur Hand:</b> Einsatzbereit</span><span><b>Getragen:</b> Schnell bereit</span><span><b>Gepackt:</b> Braucht Zeit zum Bereitmachen. Benötigt im Kampf eine Aktion.</span></div>' +
    '<textarea class="note" data-f="text" oninput="bgSet(this)">' + esc(v.text || "") + '</textarea></div>' +
    '<div class="bbtn"><select onchange="if(this.value)bogenVon(this.value)"><option value="">Spielmaus laden …</option>' + MR.maeuse.map(function(m){ return '<option value="' + m.id + '">' + esc(m.name) + '</option>'; }).join("") + '</select>' +
    '<button class="p" onclick="bogenPdf(this)">Als ausfüllbares PDF laden</button><button onclick="bogenLeer()">Leeren</button></div></div>';
}
function bogenVon(id){
  var m = MR.maeuse.filter(function(x){ return x.id === id; })[0]; if(!m) return;
  var o = {maus:m.id, name:m.name, hg:m.hg, zeichen:m.zeichen, charakter:m.charakter, fell:m.fell, merkmal:m.merkmal, stam:m.sta, staa:m.sta, gesm:m.ges, gesa:m.ges, wilm:m.wil, wila:m.wil, tpm:m.tp, tpa:m.tp, kerne:m.kerne, text:m.text, slots:{}, pips:{}};
  var frei = ["hp","np","r1","r2","r3","r4","r5","r6"];
  m.karten.forEach(function(k, i){ if(frei[i]) o.slots[frei[i]] = k; });
  bgS(o); go("maeuse/bogen");
}
function bogenLeer(){ if(confirm("Alle Felder leeren?")){ bgS({}); render(); } }
function pip(s, i){ var o = bgL(); o.pips = o.pips || {}; o.pips[s] = o.pips[s] === i ? i - 1 : i; bgS(o); render(); }
function slotPick(s){
  var o = bgL(), d = document.createElement("div"); d.className = "pick";
  d.innerHTML = '<div><h3>Gegenstand oder Zustand wählen</h3><div class="kart">' + MR.karten.map(function(k){ return '<div class="c' + (k[3] === 2 ? " h2" : "") + '" data-k="' + k[0] + '" title="' + esc(k[1]) + '"><img src="' + IMG("karten/" + k[0]) + '" alt=""></div>'; }).join("") +
    MR.zustaende.map(function(z){ return '<div class="c" style="background:var(--rot)" data-k="' + z[1] + '" title="' + esc(z[0]) + '"><img src="' + IMG("karten/" + z[1]) + '" alt=""></div>'; }).join("") + '</div>' +
    '<div class="bbtn"><button data-k="">Platz leeren</button></div></div>';
  d.onclick = function(e){ var c = e.target.closest("[data-k]"); if(c){ o.slots = o.slots || {}; o.pips = o.pips || {}; if(c.dataset.k) o.slots[s] = c.dataset.k; else delete o.slots[s]; o.pips[s] = 0; bgS(o); d.remove(); render(); } else if(e.target === d) d.remove(); };
  document.body.appendChild(d);
}
function bogenPdf(b){ FillPDF.make(document.getElementById("bogen"), {name:"Mausritter – " + (bgL().name || "Mausbogen"), knopf:b, marks:[[".slot .pips i","on","punkt"]]}); }

function viewMaeuse(sub, id){
  sub = sub || "spielmaeuse";
  var P = {spielmaeuse:function(){ return pSpielmaeuse(id); }, gegenstaende:pGegenstaende, zustaende:pZustaende, bogen:pBogen};
  return subbar(MSUB, P[sub] ? sub : "spielmaeuse", "maeuse") + (P[sub] || P.spielmaeuse)();
}
