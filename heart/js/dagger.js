/* Kampagne „Dagger in the Heart“: Kapitel-Treppe, Opposition, Kapitel (Überblick · Inszenierung · Landmarken · Dokumente) */
(function(){
var D = function(){ return window.HT_DAGGER || {intro:{}, opp:[], kap:{}, app:{}}; };
var KT = {1:"Trainkill",2:"Eastern Express",3:"Von Oben",4:"The Wormery",5:"Das Verwundete Reich",6:"Randlande",7:"Ein Dolch in deiner Hand"};
var KP = {1:24,2:35,3:53,4:71,5:89,6:117,7:131};
var PL = ["Klein","Klein","Groß","Groß","Zenit"];
function pg(p){ return p ? pgl(p, "S. " + p, "ht_a1") : ""; }
function dk(){ ST.dk = ST.dk || {opp:{}, done:{}, res:{}, erg:{}, beat:{}}; return ST.dk; }
function bl(b){
  if(b && typeof b === "object" && b.t === "zettel") return '<div class="dzettel">' + (b.h ? "<h4>" + esc(b.h) + "</h4>" : "") + (b.x || b.b || []).map(bl).join("") + "</div>";
  return blk(b);
}
function bls(a){ return (a || []).map(bl).join(""); }
function kap(n){ return D().kap[String(n)]; }
function ktitel(n){ var k = kap(n); return k && k.t ? k.t : KT[n]; }
function nav(n, tab){
  var tabs = [["ueberblick","Überblick"],["inszenierung","Inszenierung"],["landmarken","Landmarken"],["dokumente","Dokumente"]];
  var sel = '<select class="dksel" onchange="go(\'dagger/\'+this.value+\'/ueberblick\')">' + [1,2,3,4,5,6,7].map(function(i){ return '<option value="' + i + '"' + (i == n ? " selected" : "") + ">Kapitel " + i + " · " + esc(ktitel(i)) + "</option>"; }).join("") + "</select>";
  return '<nav class="tabs dknav"><a class="kb0" onclick="go(\'dagger\')">‹ Kampagne</a>' + (n ? sel + tabs.map(function(t){ return '<a class="' + (t[0] === tab ? "on" : "") + '" onclick="go(\'dagger/' + n + "/" + t[0] + '\')">' + t[1] + "</a>"; }).join("") : "") + '<span class="sp"></span></nav>';
}
/* ---------- Übersicht ---------- */
function opps(){ return D().opp || []; }
function plan(id){ var o = dk().opp[id] || 0, h = ""; PL.forEach(function(l, i){ h += '<span class="dpl' + (i < o ? " an" : "") + '" onclick="event.stopPropagation();dkPlan(\'' + id + "'," + i + ')"><i></i></span>'; }); return '<span class="dplw">' + h + "</span>"; }
function uebersicht(){
  var I = D().intro || {}, h = '<div class="dkbuehne"><div class="dkstair">';
  [1,2,3,4,5,6,7].forEach(function(n){
    var done = dk().done[n];
    h += '<div class="dkk' + (done ? " fertig" : "") + '" style="margin-left:' + ((n - 1) * 194) + 'px;margin-top:' + (n === 1 ? 0 : 0) + 'px;top:' + ((n - 1) * 66) + 'px" onclick="go(\'dagger/' + n + '/ueberblick\')"><img src="' + IMG("dagger/kap" + n) + '" alt=""><div class="dkkl"><small>Kapitel ' + n + " · S. " + KP[n] + "</small><b>" + esc(ktitel(n)) + "</b></div></div>";
  });
  h += "</div>";
  var vs = (I.hintergrund && I.hintergrund.verse) || [];
  h += '<div class="dkopen" onclick="go(\'dagger/einfuehrung\')">' + (vs.length ? "<h2>" + vs.map(esc).join("<br>") + "</h2>" : "") + (I.hintergrund && I.hintergrund.b && I.hintergrund.b[0] ? "<p>" + md(typeof I.hintergrund.b[0] === "string" ? I.hintergrund.b[0] : (I.hintergrund.b[0].x || "")) + "</p>" : "") + "</div>";
  h += '<div class="dkz dopp"><h3>Die Opposition <small>' + pg(5) + "</small></h3>" + opps().map(function(o){ return '<div class="dor" onclick="go(\'dagger/opposition/' + o.id + '\')"><div class="don"><b>' + esc(o.t) + "</b><i>" + esc(o.sub || "") + "</i></div>" + plan(o.id) + "</div>"; }).join("") + "</div>";
  h += '<div class="dkz drunde"><h3>Für die Runde</h3><div class="dor" onclick="go(\'dagger/beats\')"><b>Beat-Bogen #1</b><span>Kap. 1–3 · S. 22</span></div><div class="dor" onclick="go(\'dagger/beats\')"><b>Beat-Bogen #2</b><span>Kap. 4–6 · S. 72</span></div><div class="dor" onclick="go(\'dagger/fragen\')"><b>Schlüsselfragen</b><span>je Delver · S. 23</span></div><div class="dor" onclick="go(\'dagger/zukuenfte\')"><b>Gebrochene Zukünfte</b><span>S. 20</span></div><div class="dor" onclick="go(\'dagger/anhang\')"><b>Landmarken-Index</b><span>S. 135</span></div></div>';
  return nav(0) + h + "</div>";
}
/* ---------- Seiten ---------- */
function seite(t, p, inh, extra){ return nav(0) + '<div class="wrap"><div class="seite dkseite"><h1 class="h1">' + esc(t) + pg(p) + "</h1>" + (extra || "") + '<div class="flach">' + inh + "</div></div></div>"; }
function abschn(a){ return '<h2 class="dh2">' + esc(a.t) + pg(a.p) + "</h2>" + bls(a.b) + (a.figuren || []).map(fig).join(""); }
function fig(g){
  var fo = (g.fallout || []).map(function(f){ return '<div class="schwarz"><div class="lbl">Fallout: ' + esc(f.t) + " · " + esc(f.r || "") + ", " + esc(f.s || "") + "</div><p>" + md(f.x) + "</p></div>"; }).join("");
  function w(l, v){ return v ? '<div class="gv"><span class="lbl">' + l + "</span> " + md(v) + "</div>" : ""; }
  return '<div class="dfig"><div class="gh"><span class="platte">' + esc(g.t) + "</span> " + pg(g.p) + "</div>" + bls(g.text) + '<div class="gvs">' + w("Beschreibung:", g.besch) + w("Namen:", g.namen) + w("Motivation:", g.motiv) +
    '<div class="gv"><span class="lbl">Schwierigkeit:</span> ' + esc(g.schw == null ? "–" : g.schw) + ' · <span class="lbl">Resistenz:</span> ' + esc(g.res == null ? "–" : g.res) + ' · <span class="lbl">Schutz:</span> ' + esc(g.schutz == null ? "–" : g.schutz) + "</div>" +
    w("Ressourcen:", g.ressourcen) + w("Ausrüstung:", g.ausr) + w("Besonderes:", g.besonders) + w("Domains:", (g.dom || []).join(", ")) + "</div>" + fo + "</div>";
}
function opposition(id){
  var O = opps(), o = O.filter(function(x){ return x.id === id; })[0];
  if(!o){
    var I = D().intro || {};
    return seite("Die Opposition", 5, (I.opposition ? bls(I.opposition.b) : "") + O.map(function(x){ return '<div class="dor big" onclick="go(\'dagger/opposition/' + x.id + '\')"><div class="don"><b>' + esc(x.t) + "</b><i>" + esc(x.sub || "") + "</i></div>" + plan(x.id) + "</div>"; }).join(""));
  }
  return seite(o.t, o.p, (o.abschnitte || []).map(abschn).join(""), '<p class="kurs">' + esc(o.sub || "") + "</p>" + plan(o.id));
}
function einfuehrung(){
  var I = D().intro || {}, h = "";
  ["hintergrund","aufbau","zukuenfte","spieler","opposition"].forEach(function(k){ var s = I[k]; if(s) h += '<h2 class="dh2">' + esc(s.t) + pg(s.p) + "</h2>" + ((s.verse || []).length && k === "hintergrund" ? '<p class="kurs">' + s.verse.map(esc).join("<br>") + "</p>" : "") + bls(s.b); });
  return seite("Einführung", 1, h);
}
function einzel(k, tit){ var s = (D().intro || {})[k]; if(!s) return seite(tit, 0, ""); return seite(s.t || tit, s.p, bls(s.b || s.x)); }
function beatBox(s, key){
  if(!s) return "";
  var ds = dk().beat, row = function(t, l, g){ return '<h3 class="h3">' + t + "</h3><ul class=\"lst beat\">" + (l || []).map(function(b, i){ var kk = key + g + i; return '<li class="' + (ds[kk] ? "ok" : "") + '" onclick="dkBeat(\'' + kk + '\')"><b>' + esc(b.t) + "</b> " + md(b.x || "") + "</li>"; }).join("") + "</ul>"; };
  return '<h2 class="dh2">' + esc(s.t) + pg(s.p) + "</h2>" + bls(s.x) + row("Kleine Beats", s.kleine, "k") + row("Große Beats", s.grosse, "g") + row("Zenit-Aufstiege und Nachwirkungen", s.zenit, "z");
}
function beats(){ var I = D().intro || {}, k4 = kap(4) || {}; return seite("Beat-Bögen", 22, beatBox(I.beat1, "b1") + beatBox(k4.beat2, "b2")); }
function anhang(){
  var A = D().app || {}, h = (A.hinweis ? "<p>" + md(A.hinweis) + "</p>" : "") + (A.index || []).map(function(g){ return '<h3 class="h3">' + (g.tiefe === "rogue" ? "Ungebunden" : "Tiefe " + esc(g.tiefe)) + '</h3><table class="dtab">' + (g.lm || []).map(function(l){ return "<tr><td><b>" + esc(l.t) + "</b></td><td>" + esc(l.ref || "") + "</td><td>" + esc(l.dom || "") + "</td><td>Kap. " + esc(l.kap || "") + ((l.auch && l.auch.length) ? " (auch " + esc([].concat(l.auch).join(", ")) + ")" : "") + "</td><td>" + md(l.notiz || "") + "</td></tr>"; }).join("") + "</table>"; }).join("") + (A.weitere || []).map(abschn).join("");
  return seite("Anhang: Landmarken-Index", 135, h);
}
/* ---------- Kapitel ---------- */
function ueberblick(K){
  var gar = (K.gar || []).map(function(g){ return '<div class="dgar"><b>Gars Notiz ' + esc(g.n) + "</b> " + md(g.x) + "</div>"; }).join("");
  var leg = (K.legenden || []).length ? '<h2 class="dh2">Legenden und Gerüchte</h2><ul class="lst">' + K.legenden.map(function(l){ return "<li>" + md(l) + "</li>"; }).join("") + "</ul>" : "";
  var vs = (K.verse || []).length ? '<p class="kurs dverse">' + K.verse.map(esc).join("<br>") + "</p>" : "";
  return '<div class="wrap"><div class="seite dkseite"><h1 class="h1">' + esc(K.t) + pg(K.p) + "</h1>" + vs + '<div class="flach">' + bls(K.ueberblick) + leg + "</div>" + (gar ? '<div class="dgars">' + gar + "</div>" : "") + "</div></div>";
}
function inszen(K){
  var h = (K.inszenierung || []).map(function(a){ return '<div class="dscene"><h3>' + esc(a.t) + pg(a.p) + "</h3>" + bls(a.b) + (a.figuren || []).map(fig).join("") + "</div>"; }).join("");
  var r = (K.rest || []).map(function(a){ return '<div class="dscene"><h3>' + esc(a.t) + pg(a.p) + "</h3>" + bls(a.b) + "</div>"; }).join("");
  return '<div class="dkgrid">' + h + r + "</div>";
}
function dokumente(K){
  var L = K.dok || [];
  return '<div class="dkgrid dok">' + (L.length ? L.map(function(d, i){ return '<div class="dzettel klick" onclick="dkDok(' + K.n + "," + i + ')"><h4>' + esc(d.t) + pg(d.p) + "</h4>" + bls(d.x).slice(0, 1200) + '<span class="dzeig">Zeigen</span></div>'; }).join("") : "<p>Keine Dokumente in diesem Kapitel.</p>") + "</div>";
}
window.dkDok = function(n, i){ var d = kap(n).dok[i]; var m = document.createElement("div"); m.className = "dvoll"; m.onclick = function(){ m.remove(); }; m.innerHTML = '<div class="dzettel gross"><h4>' + esc(d.t) + "</h4>" + bls(d.x) + "</div>"; document.body.appendChild(m); };
/* Wegekarte */
function findExt(id, self){
  var all = D().kap, r = null;
  Object.keys(all).forEach(function(k){ if(r || String(k) === String(self)) return; (all[k].lm || []).forEach(function(l){ if(!r && l.id === id) r = {id: l.id, t: l.t, tiefe: l.tiefe, dom: l.dom, stress: l.stress, extern: k}; }); });
  return r;
}
function route(K){
  var L = (K.lm || []).slice(), V = K.delves || [], byId = {}; L.forEach(function(l){ byId[l.id] = l; });
  V.forEach(function(v){ [v.von, v.nach].forEach(function(i){ if(i && !byId[i]){ var f = findExt(i, K.n); byId[i] = f || {id: i, t: i, tiefe: v.tiefe, extern: true}; L.push(byId[i]); } }); });
  var order = [], seen = {}, nxt = {}; V.forEach(function(v){ if(!v.express) nxt[v.von] = v.nach; });
  var targets = {}; V.forEach(function(v){ targets[v.nach] = 1; });
  L.forEach(function(l){ if(!targets[l.id] && l.extern) walk(l.id); }); L.forEach(function(l){ if(!targets[l.id]) walk(l.id); }); L.forEach(function(l){ walk(l.id); });
  function walk(id){ while(id && !seen[id]){ seen[id] = 1; order.push(id); id = nxt[id]; } }
  return {order: order, byId: byId, V: V};
}
function karte(K, sel){
  var R = route(K), n = R.order.length; if(!n) return "";
  var W = Math.max(n, 2), x = {}; R.order.forEach(function(id, i){ x[id] = (i + 0.5) / W * 100; });
  var ts = R.order.map(function(id){ return R.byId[id].tiefe; }).concat(R.V.map(function(v){ return v.tiefe; })).filter(function(t){ return typeof t === "number"; }), t0 = Math.min.apply(null, ts), t1 = Math.max.apply(null, ts), hasS = R.order.some(function(id){ return typeof R.byId[id].tiefe !== "number"; }), rows = t1 - t0 + 1 + (hasS ? 1 : 0);
  var ROW = 74, H = rows * ROW + 20, y = function(t){ return 14 + ((typeof t === "number" ? t : t1 + 1) - t0) * ROW; };
  var svg = '<svg class="dsvg" viewBox="0 0 100 ' + H + '" preserveAspectRatio="none">', pts = "";
  var rowsH = ""; for(var r = t0; r <= t1; r++) rowsH += '<div class="dtl" style="top:' + (y(r) - 4) + 'px">Tiefe ' + r + "</div>"; if(hasS) rowsH += '<div class="dtl" style="top:' + (y("x") - 4) + 'px">Risse</div>';
  R.V.forEach(function(v){ var a = R.byId[v.von], b = R.byId[v.nach]; if(!a || !b) return; svg += '<line x1="' + x[v.von] + '" y1="' + (y(a.tiefe) + 24) + '" x2="' + x[v.nach] + '" y2="' + (y(b.tiefe) + 24) + '" class="' + (v.express ? "ex" : "") + '"/>'; });
  svg += "</svg>";
  var nodes = R.order.map(function(id){ var l = R.byId[id]; return '<div class="dnode' + (sel === id ? " on" : "") + (l.extern ? " ext" : "") + '" style="left:' + x[id] + "%;top:" + y(l.tiefe) + 'px" onclick="' + (l.extern ? "" : "go('dagger/" + K.n + "/landmarken/" + id + "')") + '"><span class="platte">' + esc(l.t) + "</span>" + ((l.extern && l.extern !== true) ? "<small>aus Kapitel " + esc(l.extern) + "</small>" : l.extern ? "<small>aus anderem Kapitel</small>" : "<small>" + esc((l.dom || []).join(", ") + (l.stress ? " · " + l.stress : "")) + "</small>") + "</div>"; }).join("");
  var dn = R.V.map(function(v){ var a = R.byId[v.von], b = R.byId[v.nach]; if(!a || !b) return ""; var cx = (x[v.von] + x[v.nach]) / 2, cy = (y(a.tiefe) + y(b.tiefe)) / 2 + 20; return '<div class="ddelve' + (sel === "d:" + v.id ? " on" : "") + '" style="left:' + cx + "%;top:" + cy + 'px" onclick="go(\'dagger/' + K.n + "/landmarken/d:" + v.id + '\')">Delve · ' + esc(v.res) + "</div>"; }).join("");
  return '<div class="dkarte" style="height:' + (H + 16) + 'px"><div class="dkin" style="height:' + H + "px;min-width:" + (n * 215) + 'px">' + rowsH + svg + nodes + dn + "</div></div>";
}
function delveKarte(K, v){
  var used = dk().res[v.id] || 0, d = dk().erg;
  var bx = ""; for(var i = 0; i < v.res; i++) bx += '<i class="dkb' + (i < used ? " an" : "") + '" onclick="dkRes(\'' + v.id + "'," + i + ')"></i>';
  var a = (K.lm || []).filter(function(l){ return l.id === v.von; })[0], b = (K.lm || []).filter(function(l){ return l.id === v.nach; })[0];
  return '<div class="ddk"><div class="ddh"><b>' + esc(v.von && v.nach ? ((a && a.t) || v.von) + " → " + ((b && b.t) || v.nach) : v.t) + "</b>" + pg(v.p) + '</div><div class="ddb"><p class="dw"><b>Tiefe:</b> ' + esc(v.tiefe) + " · <b>Domains:</b> " + esc(v.dom || "") + " · <b>Stress:</b> " + esc(v.stress || "") + '</p><div class="ddr"><span class="gz">' + v.res + '</span><span class="kbs">' + bx + '</span></div><p><b class="dlb">Beschreibung:</b> ' + md(v.besch || "") + '</p><b class="dlb">Ereignisse:</b><ol class="dee">' + (v.erg || []).map(function(e, i){ return '<li class="' + (d[v.id + i] ? "ok" : "") + '" onclick="dkErg(\'' + v.id + i + '\')">' + md(e) + "</li>"; }).join("") + "</ol>" + (v.verb ? '<p><b class="dlb">Verbindung:</b> ' + md(v.verb) + "</p>" : "") + '<button class="dkbtn" onclick="dkExpedition(' + K.n + ",'" + v.id + '\')">Auf die Expedition</button></div></div>';
}
function lmSeite(l){
  if(!l) return "";
  var wz = '<div class="dkw"><span><b>Domains:</b> ' + esc((l.dom || []).join(", ")) + "</span><span><b>Tiefe:</b> " + esc(l.tiefeText || l.tiefe) + "</span><span><b>Standard-Stress:</b> " + esc(l.stress || "") + "</span>" + ((l.haunts || []).length ? "<span><b>Haunts:</b> " + (l.haunts || []).map(md).join("; ") + "</span>" : "") + "</div>";
  var re = ((l.ressourcen || []).length ? '<h3 class="h3">Ressourcen</h3><ul class="lst">' + l.ressourcen.map(function(x){ return "<li>" + md(x) + "</li>"; }).join("") + "</ul>" : "") + ((l.plots || []).length ? '<h3 class="h3">Mögliche Plots</h3><ul class="lst">' + l.plots.map(function(x){ return "<li>" + md(x) + "</li>"; }).join("") + "</ul>" : "");
  return '<div class="dlm seite"><h1 class="h1">' + esc(l.t) + pg(l.p) + "</h1>" + wz + '<div class="dlmc"><div>' + bls(l.text) + (l.unter || []).map(function(u){ return '<h3 class="h3">' + esc(u.t) + "</h3>" + bls(u.b); }).join("") + bls(l.regeln) + '</div><div class="dlmr">' + re + "</div></div>" + (l.figuren || []).map(fig).join("") + "</div>";
}
function landmarken(K, sel){
  var V = (K.delves || []).filter(function(v){ return v.von && v.nach; }), freie = (K.delves || []).filter(function(v){ return !(v.von && v.nach); }), first = V[0] ? "d:" + V[0].id : ((K.lm || [])[0] || {}).id;
  sel = sel || first;
  if(!V.length && !(K.lm || []).length && !freie.length) return "<p>Keine Landmarken.</p>";
  var isD = sel && sel.indexOf("d:") === 0, v, l;
  if(isD){ v = V.filter(function(x){ return x.id === sel.slice(2); })[0]; l = v && (K.lm || []).filter(function(x){ return x.id === v.nach; })[0]; }
  else { l = (K.lm || []).filter(function(x){ return x.id === sel; })[0]; v = V.filter(function(x){ return x.nach === sel; })[0] || V.filter(function(x){ return x.von === sel; })[0]; }
  var links = v ? '<div class="dkl2">' + delveKarte(K, v) + "</div>" : "";
  var fr = freie.length ? '<div class="dkfrei">' + freie.map(function(x){ return '<div class="dkl2">' + delveKarte(K, x) + "</div>"; }).join("") + "</div>" : "";
  var chips = V.length ? "" : '<div class="dchips">' + (K.lm || []).map(function(x){ return '<span class="platte' + (x.id === sel ? " on" : "") + '" onclick="go(\'dagger/' + K.n + "/landmarken/" + x.id + '\')">' + esc(x.t) + "</span>"; }).join("") + "</div>";
  return (V.length ? karte(K, sel) : chips) + fr + '<div class="dkdet' + (links ? " zwei" : "") + '">' + links + lmSeite(l) + "</div>";
}
function kapitel(n, tab, id){
  var K = kap(n);
  if(!K) return nav(n, tab) + '<div class="wrap"><div class="seite dkseite"><h1 class="h1">Kapitel ' + n + " · " + esc(KT[n]) + "</h1><p>Inhalt wird übersetzt.</p></div></div>";
  var inh = tab === "inszenierung" ? inszen(K) : tab === "landmarken" ? landmarken(K, id) : tab === "dokumente" ? dokumente(K) : ueberblick(K);
  return nav(n, tab) + inh;
}
window.dkPlan = function(id, i){ var o = dk().opp; o[id] = o[id] === i + 1 ? i : i + 1; save(); render(); };
window.dkBeat = function(k){ var b = dk().beat; b[k] = !b[k]; save(); render(); };
window.dkRes = function(id, i){ var r = dk().res; r[id] = r[id] === i + 1 ? i : i + 1; save(); render(); };
window.dkErg = function(k){ var e = dk().erg; e[k] = !e[k]; save(); render(); };
window.dkExpedition = function(n, id){
  var K = kap(n), v = (K.delves || []).filter(function(x){ return x.id === id; })[0]; if(!v) return;
  ST.exp = ST.exp || {start: null, ziel: null, delve: null, delvers: [], gegner: []};
  var used = dk().res[id] || 0;
  ST.exp.start = null; ST.exp.ziel = null;
  ST.exp.delve = {id: v.id, t: v.t, p: v.p, bk: "ht_a1", besch: v.besch, dom: v.dom, stress: v.stress, erg: v.erg, verb: v.verb, max: v.res, res: Math.max(0, v.res - used), start: v.res, done: {}};
  save(); go("exp");
};
VIEWS.dagger = function(a){
  var s = a[0];
  if(!s) return uebersicht();
  if(s === "opposition") return opposition(a[1]);
  if(s === "einfuehrung") return einfuehrung();
  if(s === "beats") return beats();
  if(s === "fragen") return einzel("fragen", "Schlüsselfragen");
  if(s === "zukuenfte") return einzel("gebrochen", "Gebrochene Zukünfte");
  if(s === "anhang") return anhang();
  var n = parseInt(s, 10); if(n >= 1 && n <= 7) return kapitel(n, a[1] || "ueberblick", a[2]);
  return uebersicht();
};
var prev = window.afterRender;
window.afterRender = function(){
  if(prev) prev();
  var img = document.querySelector(".brand img"); if(!img) return;
  var d = /^#dagger/.test(location.hash);
  img.src = d ? "img/dagger/logo-zeile-hell.svg" : "../assets/logos/heart.webp";
  img.classList.toggle("dagger", d);
};
})();
