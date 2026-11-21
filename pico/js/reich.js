/* Reich-Leitstand: Überblick · Fraktionen · Reiseführer · Reise · Gefahren */
var RTABS = [["ueberblick","Überblick"],["fraktionen","Fraktionen"],["fuehrer","Reiseführer"],["reise","Reise"],["gefahren","Gefahren"]];
var TYPF = {"Wahrzeichen":"#585f63","Merkmal":"#585f63","NSC":"#585f63","NSCs":"#585f63","Titan":"#593582"};
function rInfo(id){ return PI_REICHE.filter(function(x){ return x.id === id; })[0]; }
function rs(id){ ST.reiche = ST.reiche || {}; return ST.reiche[id] = ST.reiche[id] || {}; }
function tabsR(id, tab){
  return '<div class="tabs">' + RTABS.map(function(t){ return '<a class="' + (t[0] === tab ? 'on' : '') + '" onclick="go(\'reich/' + id + '/' + t[0] + '\')">' + t[1] + '</a>'; }).join("") + penTab("r:" + id + ":" + tab) + '</div>';
}
function band(r, info){
  return '<div class="rband" style="background-image:linear-gradient(90deg,rgba(31,36,38,.82),rgba(31,36,38,.15)),url(' + IMG("reich/" + info.id) + ')"><h1>' + esc(info.t) + '</h1>' + (info.kurz ? '<p>' + esc(info.kurz) + '</p>' : '') + '<span class="pg" onclick="openBook(\'pi_core\',' + info.p + ')">S. ' + info.p + '</span></div>';
}
/* Eintragskasten */
function entry(e, c){
  var col = e.farbe || c;
  return '<div class="box en" style="--c:' + col + '"><div class="hd">' + esc(e.t) + '<span class="typ">' + esc(e.typ) + '</span>' + (e.p ? pgl(e.p) : "") + '</div><div class="bd2">' +
    (e.bild ? '<img class="eimg" src="' + IMG(e.bild) + '" alt="" onclick="zoom(this.src)">' : '') + '<p>' + md(e.x) + '</p>' +
    (e.v && e.v.length ? '<div class="may">Vielleicht …</div><ul class="bul">' + e.v.map(function(x){ return "<li>" + md(x) + "</li>"; }).join("") + "</ul>" : "") + '</div></div>';
}
function wuerfel6(id, label, arr){
  var k = "x:" + id + ":" + label, hit = (ST.d6 || {})[k];
  return '<div class="d6"><h4>' + esc(label) + '<span class="dice" onclick="rollX(\'' + k + '\')">' + (hit || "·") + '</span></h4><table class="tbl">' + arr.map(function(r, i){ return '<tr class="' + (hit === i + 1 ? 'hit' : '') + '"><td class="n">' + (i + 1) + '</td><td>' + esc(r) + '</td></tr>'; }).join("") + '</table></div>';
}
function rollX(k){ ST.d6 = ST.d6 || {}; ST.d6[k] = 1 + Math.floor(Math.random() * 6); save(); render(); }
function pgItem(p){ return p ? pgl(p) : ""; }

function rUeberblick(r, info){
  var u = r.ueberblick, o = r.opt, s = r.seltsam, ra = r.raetsel, b = r.beute, z = r.zitat;
  var stim = u.stimmung.map(function(x){ return '<div class="mood"><b>' + esc(x[0]) + '</b><span>' + md(x[1]) + '</span></div>'; }).join("");
  var opt = o.regeln.map(function(x){ return '<div class="box" style="--c:var(--moss)"><div class="hd">' + esc(x.t) + '<span class="typ">optionale Regel</span></div><div class="bd2"><p>' + md(x.x) + '</p><p class="sp">' + md(x.sp) + '</p></div></div>'; }).join("");
  var sel = s.stufen.map(function(x){ return '<div class="tint"><b>' + esc(x[0]) + ':</b> ' + md(x[1]) + '</div>'; }).join("");
  return band(r, info) + '<div class="pad">' +
   '<div class="grid2 ueb"><div class="txt lesen">' + u.text.map(function(t){ return '<p>' + md(t) + '</p>'; }).join("") + '</div><div class="box"><div class="hd">Stimmungen' + pgItem(u.p) + '</div><div class="bd2">' + stim + '</div></div></div>' +
   '<div class="sec"><h2>Optionale Regeln</h2>' + pgItem(o.p) + '</div><p class="lead">' + md(o.intro) + '</p><div class="grid2">' + opt + '</div>' +
   '<div class="sec"><h2>Hohe oder niedrige Seltsamkeit?</h2>' + pgItem(s.p) + '</div><p class="lead">' + md(s.intro) + '</p><div class="grid3">' + sel + '</div>' +
   '<div class="grid2 sp2"><div><div class="sec"><h2>Wilde Rätsel</h2>' + pgItem(ra.p) + '</div><p class="lead">' + md(ra.intro) + '</p><ul class="bul">' + ra.x.map(function(x){ return '<li>' + esc(x) + '</li>'; }).join("") + '</ul></div>' +
   '<div><div class="sec"><h2>Nützliche Beute</h2>' + pgItem(b.p) + '</div><p class="lead">' + md(b.intro) + '</p><div class="chips"><b>Einheimische Bröckchen</b>' + b.bits.map(function(x){ return '<span class="chip g">' + esc(x) + '</span>'; }).join("") + '</div><div class="chips"><b>Einheimischer Krimskrams</b>' + b.bobs.map(function(x){ return '<span class="chip o" style="--c:var(--amber)">' + esc(x) + '</span>'; }).join("") + '</div></div></div>' +
   (z ? '<div class="vl" style="--c:var(--moss);margin-top:18px">' + esc(z.x) + '<small>' + esc(z.wer) + '</small></div>' : '') + '</div>';
}
function sideList(items, cur, fn, arg){ return '<nav class="side">' + items.map(function(x){ return '<h4 style="color:' + (x.id === cur.id ? x.farbe : "") + '" class="' + (x.id === cur.id ? 'on' : '') + '" onclick="' + fn + '(\'' + x.id + '\')">' + esc(x.t) + '</h4>'; }).join("") + '</nav>'; }
function rFraktionen(r, info, sel){
  var F = r.fraktionen, L = F.liste, cur = L.filter(function(x){ return x.id === sel; })[0] || L[0];
  var side = '<nav class="side">' + L.map(function(x){ return '<h4 class="' + (x.id === cur.id ? 'on' : '') + '" onclick="go(\'reich/' + info.id + '/fraktionen/' + x.id + '\')" style="color:' + (x.id === cur.id ? x.farbe : '') + '">' + esc(x.t) + '</h4>' + (x.id === cur.id ? x.eintraege.map(function(e){ return '<a onclick="jump(\'e_' + esc(e.t).replace(/[^a-z0-9]/gi, '') + '\')">' + esc(kurz(e.t)) + '</a>'; }).join("") : ''); }).join("") + '</nav>';
  var body = '<div class="fhead" style="--c:' + cur.farbe + '">' + (cur.bild ? '<img src="' + IMG(cur.bild) + '" alt="" onclick="zoom(this.src)">' : '') + '<div><h1>' + esc(cur.t) + pgItem(cur.p) + '</h1><div class="facts"><span><b>Grundstimmung</b>' + esc(cur.stimmung) + '</span><span><b>Revier</b>' + esc(cur.revier) + '</span></div><p>' + md(cur.b) + '</p></div></div>' +
   '<div class="grid2 ents">' + cur.eintraege.map(function(e){ return '<div id="e_' + esc(e.t).replace(/[^a-z0-9]/gi, '') + '">' + entry(e, cur.farbe) + '</div>'; }).join("") + '</div>';
  return lay(side, '<p class="lead">' + md(F.intro) + '</p>' + body);
}
function rFuehrer(r, info, sel){
  var R = r.reise, L = R.gebiete, cur = L.filter(function(x){ return x.id === sel; })[0] || L[0];
  var side = '<nav class="side">' + L.map(function(x){ return '<h4 class="' + (x.id === cur.id ? 'on' : '') + '" onclick="go(\'reich/' + info.id + '/fuehrer/' + x.id + '\')" style="color:' + (x.id === cur.id ? x.farbe : '') + '">' + esc(x.t) + '</h4>' + (x.id === cur.id ? x.eintraege.map(function(e){ return '<a onclick="jump(\'e_' + esc(e.t).replace(/[^a-z0-9]/gi, '') + '\')">' + esc(kurz(e.t)) + '</a>'; }).join("") + (cur.erkunden ? '<a onclick="jump(\'erk\')">Erkunden</a>' : '') : ''); }).join("") + '</nav>';
  var er = cur.erkunden, tb = "";
  if(er) tb = '<div class="sec" id="erk"><h2>' + esc(cur.t) + ' erkunden</h2></div><p class="lead">Wenn eine Käferbande hier unterwegs ist, kann der Weber auf einer dieser Tabellen mit W6 würfeln, um zu sehen, worauf sie stößt …</p><div class="grid3">' + [["wahrzeichen","Wahrzeichen"],["nsc","NSCs"],["ereignisse","Ereignisse"]].filter(function(k){ return er[k[0]]; }).map(function(k){ return wuerfel6(cur.id, k[1], er[k[0]]); }).join("") + '</div>';
  var body = '<div class="fhead" style="--c:' + cur.farbe + '">' + (cur.bild ? '<img src="' + IMG(cur.bild) + '" alt="" onclick="zoom(this.src)">' : '') + '<div><h1>' + esc(cur.t) + pgItem(cur.p) + '</h1><p>' + md(cur.x) + '</p></div></div><div class="grid2 ents">' + cur.eintraege.map(function(e){ return '<div id="e_' + esc(e.t).replace(/[^a-z0-9]/gi, '') + '">' + entry(e, cur.farbe) + '</div>'; }).join("") + '</div>' + tb;
  return lay(side, (cur === L[0] ? '<p class="lead">' + md(R.intro) + '</p>' : '') + body);
}
function rGefahren(r, info){
  var g = r.gefahren;
  return band(r, info) + '<div class="pad"><div class="sec"><h2>Mögliche Gefahren</h2>' + pgItem(g.p) + '</div><p class="lead">' + md(g.intro) + '</p><div class="grid2">' + g.x.map(function(x){
    var gg = gefById(x[0]);
    return '<div class="box" style="--c:' + (gg ? gg.farbe : "var(--rust)") + ';cursor:pointer" onclick="go(\'gefahren/' + x[0] + '\')"><div class="bd2 gl">' + (gg && gg.img ? '<img class="eimg" src="img/gefahr/' + gg.img + '.webp" alt="">' : '') + '<p>' + esc(x[1]) + pgl(parseInt(x[2].replace(/\D/g, ""), 10) || 0) + '</p></div></div>'; }).join("") + '</div>' +
   '<p style="margin-top:14px"><span class="chip ink" onclick="go(\'gefahren\')">Alle Winzigen Gefahren</span></p></div>';
}

/* ---------- Reise-Tafel ---------- */
function RS(id){ var s = rs(id); s.reise = s.reise || {ziel:"", wege:6, weg:0, tick:0, log:[], aus:null}; return s.reise; }
function rwDot(id, k, i){ var t = RS(id); t[k] = t[k] === i + 1 ? i : i + 1; save(); render(); }
function rwTick(id, d){ var t = RS(id); t.tick = Math.max(0, Math.min(8, t.tick + d)); save(); render(); }
function rwAct(id, a, n, st){ var t = RS(id); t.tick = Math.min(8, t.tick + n); t.weg = Math.min(t.wege, t.weg + (st || 0)); t.log.unshift(a); t.log = t.log.slice(0, 6); save(); render(); }
function rwWeg(id, d){ var t = RS(id); t.wege = Math.max(2, Math.min(12, t.wege + d)); t.weg = Math.min(t.weg, t.wege); save(); render(); }
function rwZiel(id, v){ RS(id).ziel = v; save(); }
function ausRows(){ var k = (window.PI_NACH && PI_NACH.regeln ? PI_NACH.regeln.kapitel : []).filter(function(x){ return x.id === "reisen-ausguck"; })[0]; var d = k && k.b.filter(function(b){ return b && b.t === "d6"; })[0]; return d ? d.rows : []; }
function ausInfo(n){ var r = ausRows()[n - 1] || "", m = /^\*\*(?:Doppelt \d – )?([^*]+?):?\*\*\s*(.*)$/.exec(r); return m ? [m[1], m[2]] : ["Pasch", r]; }
var AUS_TAB = {6:"wahrzeichen", 2:"nsc", 4:"ereignisse"};
function rwTab(id, k){ var t = RS(id); var sel = document.getElementById("augeb"); t.geb = sel ? sel.value : t.geb; t.tr = {k:k, geb:t.geb, w:1 + Math.floor(Math.random() * 6)}; save(); render(); }
function rwAus(id){ var t = RS(id), a = 1 + Math.floor(Math.random() * 6), b = 1 + Math.floor(Math.random() * 6); t.aus = [a, b]; save(); render(); }
function ausBox(r, info, t){
  var k = t.aus[0], a = ausInfo(k), tab = AUS_TAB[k], G = r.reise.gebiete.filter(function(g){ return g.erkunden && g.erkunden[tab]; }), extra = "";
  if(tab && G.length){
    var g0 = t.geb || G[0].id;
    extra = '<div style="margin-top:8px"><select id="augeb" onchange="RS(\'' + info.id + '\').geb=this.value;save()">' + G.map(function(g){ return '<option value="' + g.id + '"' + (g.id === g0 ? ' selected' : '') + '>' + esc(g.t) + '</option>'; }).join("") + '</select> <button class="mini" style="width:auto;padding:4px 10px" onclick="rwTab(\'' + info.id + '\',' + k + ')">W6 auf Tabelle</button></div>';
    if(t.tr && t.tr.k === k){ var gg = G.filter(function(g){ return g.id === t.tr.geb; })[0] || G[0]; extra += '<p style="margin-top:6px"><b>' + t.tr.w + ':</b> ' + md(gg.erkunden[tab][t.tr.w - 1] || "") + '</p>'; }
  } else if(k === 1) extra = '<p style="margin-top:6px"><span class="chip ink" onclick="go(\'reich/' + info.id + '/gefahren\')">Gefahren des Reichs</span></p>';
  else if(k === 5) extra = '<p style="margin-top:6px"><span class="chip ink" onclick="go(\'reich/' + info.id + '/ueberblick\')">Beute des Reichs</span></p>';
  else if(k === 3) extra = '<p style="margin-top:6px"><span class="chip ink" onclick="go(\'nach/regeln/reisen-wettersysteme\')">Wettersysteme</span></p>';
  return '<div class="box" style="--c:var(--teal)"><div class="hd">' + esc(a[0]) + '</div><div class="bd2">' + md(a[1]) + extra + '</div></div>';
}
function rTafel(r, info){
  var t = RS(info.id), pasch = t.aus && t.aus[0] === t.aus[1];
  var dots = ""; for(var i = 0; i < t.wege; i++) dots += '<i class="stp' + (i < t.weg ? ' m' : '') + '" onclick="rwDot(\'' + info.id + '\',\'weg\',' + i + ')"></i>';
  var clock = ""; for(var j = 0; j < 8; j++) clock += '<i class="tk' + (j < t.tick ? ' m' : '') + (j < 4 ? ' d' : ' n') + '"></i>';
  var acts = [["Bummeln","1 Schritt · 1 Tick","Deine Gruppe kommt in gemütlichem Tempo voran und nimmt dabei die Umgebung in sich auf. Ausguck: ja.",1,1],["Marschieren","2 Schritte · 1 Tick","Ihr bewegt euch zügig und ernsthaft und kommt in überraschend kurzer Zeit gut voran. Ausguck: ja, Überraschung: ja.",1,2],["Warten","1 Tick","Ihr bleibt an einem Ort und bleibt wachsam. Ausguck: ja.",1,0],["Lagern","2 Ticks","Deine Gruppe macht eine Verschnaufpause und schlägt ein Lager auf, wodurch eine Montage beginnt.",2,0]].map(function(a){ return '<button class="act" onclick="rwAct(\'' + info.id + '\',\'' + a[0] + '\',' + a[3] + ',' + a[4] + ')"><b>' + a[0] + '</b><small>' + a[1] + '</small>' + a[2] + '</button>'; }).join("");
  return band(r, info) + '<div class="pad tafel"><div class="tbar"><label>Ziel<input value="' + esc(t.ziel) + '" onchange="rwZiel(\'' + info.id + '\',this.value)"></label>' +
   '<div class="trk"><span class="lb">Weg</span>' + dots + '<button class="mini" onclick="rwWeg(\'' + info.id + '\',-1)">−</button><button class="mini" onclick="rwWeg(\'' + info.id + '\',1)">+</button></div>' +
   '<div class="trk"><span class="lb">Uhr</span>' + clock + '<button class="mini" onclick="rwTick(\'' + info.id + '\',-1)">−</button><button class="mini" onclick="rwTick(\'' + info.id + '\',1)">+</button><span class="lb2">' + (t.tick >= 8 ? "Tag vorbei" : t.tick >= 4 ? "Nacht" : "Tag") + '</span></div></div>' +
   '<div class="grid2"><div><div class="sec"><h2>Reiseaktionen</h2></div><div class="acts">' + acts + '</div>' + (t.log.length ? '<p class="gm">Zuletzt: ' + t.log.map(esc).join(" · ") + '</p>' : '') + '</div>' +
   '<div><div class="sec"><h2>Ausguck</h2></div><div class="dice2"><div class="dd">' + (t.aus ? t.aus[0] : "–") + '</div><div class="dd">' + (t.aus ? t.aus[1] : "–") + '</div><button class="act" onclick="rwAus(\'' + info.id + '\')"><b>2W6 würfeln</b><small>Nur Pasche zählen</small></button></div>' +
   (t.aus ? (pasch ? ausBox(r, info, t) : '<p class="gm">Zwei verschiedene Zahlen: nichts entdeckt, das mehr als etwas Geplauder wert wäre.</p>') : '') + '</div></div>' +
   '<div class="sec"><h2>Pasch-Tabelle</h2></div><table class="tbl">' + [6,5,4,3,2,1].map(function(k){ return '<tr><td class="n">' + k + k + '</td><td><b>' + esc(ausInfo(k)[0]) + '</b></td></tr>'; }).join("") + '</table></div>';
}
function gefById(id){ return (window.PI_GEFAHR || []).filter(function(g){ return g.id === id; })[0]; }
function viewReich(id, tab, sel){
  var r = PI_REICH[id], info = rInfo(id); if(!info) return viewStart();
  setTheme(info.dunkel, info.c);
  tab = tab || "ueberblick";
  if(!r) return tabsR(id, "ueberblick") + band({}, info) + '<div class="pad"><p class="lead">Dieses Reich ist noch in Arbeit. <span class="chip ink" onclick="openBook(\'pi_core\',' + info.p + ')">Im Buch lesen (S. ' + info.p + ')</span></p></div>';
  var b = tab === "ueberblick" ? rUeberblick(r, info) : tab === "fraktionen" ? rFraktionen(r, info, sel) : tab === "fuehrer" ? rFuehrer(r, info, sel) : tab === "reise" ? rTafel(r, info) : rGefahren(r, info);
  return tabsR(id, tab) + b;
}
