/* Landmarken: Übersicht nach Tiefe (#lm) und Einzelseite (#lm/<id>) */
(function(){
var STUFEN = [["0","Tiefe 0"],["1","Tiefe 1"],["2","Tiefe 2"],["3","Tiefe 3"]];
var SEITE = [["ungebunden","Ungebunden"],["risse","Risse"],["himmel","Die Acht Himmel"]];
function lms(t){ return HT_LM.filter(function(l){ return String(l.tiefe) === t; }).sort(function(a, b){ return (a.q === "bb") - (b.q === "bb") || a.p - b.p; }); }
function ks(x){ var m = String(x || "").match(/^W\d+(\/W\d+)?/); return m ? m[0] : String(x || ""); }
function seitenlink(l){ return pgl(l.p, l.bl ? l.bl + " S. " + l.p : null, l.bk); }
function kopf(t){
  var g = (window.HT_LMG || {})[t]; if(!g) return "";
  var s = ""; (g.intro || []).some(function(b){ var x = typeof b === "string" ? b : (b.t === "p" ? b.x : ""); if(x){ s = x; return true; } return false; });
  s = s.replace(/\*+/g, ""); var m = s.match(/^[^.!?]+[.!?]/); return m ? m[0] : s;
}
function item(l){
  var bl = ((window.HT_BILD || {}).lm || {})[l.id];
  return '<a class="lmi' + (bl ? " mitbild" : "") + '" onclick="go(\'lm/' + l.id + '\')">' + (bl ? '<img class="lmmini" src="' + IMG(bl) + '" alt="">' : "") + '<div class="n"><b>' + esc(l.t) + '</b><span>' + esc(ks(l.stress)) + " · S. " + l.p + (l.q === "bb" ? ' <em class="bbt">B&amp;B</em>' : "") + "</span></div><div class=\"d\">" + esc((l.dom || []).join(", ")) + "</div></a>";
}
function viewLm(a){
  if(a[0]) return viewLmEinzeln(a[0]);
  var bands = STUFEN.map(function(s){
    var L = lms(s[0]);
    var tb = ((window.HT_BILD || {}).tiefe || {})[s[0]];
    return '<section class="lmb t' + s[0] + '"><div class="lmk">' + (tb ? '<img class="lmtb" src="' + IMG(tb) + '" alt="">' : "") + "<h2>" + s[1] + "</h2><p>" + esc(kopf(s[0])) + '</p></div><div class="lmg">' + L.map(item).join("") + "</div></section>";
  }).join("");
  var herz = '<section class="lmb t4"><div class="lmk"><h2>Tiefe 4</h2><p>Das Heart Itself: ein gleißendes, unbestimmbares Feuer, ein roter, nasser Himmel, der im Zentrum der Stadt unter der Stadt pocht und schlägt.</p></div></section>';
  var seite = SEITE.map(function(s){
    var g = (window.HT_LMG || {})[s[0]], L = lms(s[0]);
    return '<div class="lms"><h2>' + s[1] + (g && g.p ? pgl(g.p) : "") + "</h2>" + L.map(function(l){ return '<a class="lmi" onclick="go(\'lm/' + l.id + '\')"><div class="n"><b>' + esc(l.t) + "</b><span>" + esc(ks(l.stress)) + '</span></div><div class="d">' + esc((l.dom || []).join(", ")) + "</div></a>"; }).join("") + "</div>";
  }).join("");
  var dl = (window.HT_DELVE || []).length ? '<div class="lms"><h2>Delves</h2>' + HT_DELVE.map(function(d){ return '<a class="lmi" onclick="go(\'lm/d:' + d.id + '\')"><div class="n"><b>' + esc(d.t) + '</b><span>' + esc(ks(d.stress)) + ' · S. ' + d.p + ' <em class="bbt">B&amp;B</em></span></div><div class="d">' + esc((d.dom || []).join(", ")) + "</div></a>"; }).join("") + "</div>" : "";
  return nav("") + '<div class="lmwrap"><div class="lmhaupt">' + bands + herz + '</div><aside class="lmseite">' + seite + dl + "</aside></div>";
}
function nav(cur){ return window.spielNav(cur ? "" : "lm"); }
window.spielNav = function(cur){
  var T = [["exp","Expedition","exp"],["lm","Landmarken","lm"],["gegner","Gegner","gegner"],["fallout","Fallout","fallout"],["nach/spielleitung/landmarken-info","Über Landmarken",""]];
  return '<nav class="tabs">' + T.map(function(t){ return '<a class="' + (t[2] && t[2] === cur ? "on" : "") + '" onclick="go(\'' + t[0] + '\')">' + t[1] + "</a>"; }).join("") + '<span class="sp"></span></nav>';
};
function viewDelve(id){
  var d = HT_DELVE.filter(function(x){ return x.id === id; })[0]; if(!d) return viewLm([]);
  var wz = '<div class="lmwerte"><div><span class="lbl">Domains</span> ' + esc(d.domx || (d.dom || []).join(", ")) + '</div><div><span class="lbl">Tiefe</span> ' + esc(String(d.tiefe)) + '</div><div><span class="lbl">Stress</span> ' + esc(d.stress) + '</div><div><span class="lbl">Resistance</span> ' + d.res + "</div></div>";
  var l = '<p class="kurs">' + md(d.besch) + '</p><h3 class="h3">Ereignisse</h3><ul class="lst">' + (d.erg || []).map(function(e){ return "<li>" + md(e) + "</li>"; }).join("") + "</ul>" + (d.verb ? '<h3 class="h3">Verbindung</h3><p>' + md(d.verb) + "</p>" : "");
  var r = (d.fallout || []).map(function(f){ return '<div class="dfo"><p><b class="dfon">Fallout: ' + esc(f.t) + ".</b> [" + esc([f.stufe, f.res].filter(Boolean).join(", ")) + "] " + md(f.x) + "</p></div>"; }).join("") +
    (d.gegner || []).map(function(g){ return '<div class="schwarz"><div class="lbl">' + esc(g.t) + '</div><p>' + md(g.motivation || "") + '</p><p><b>Schwierigkeit:</b> ' + esc(g.schwierigkeit) + " · <b>Resistance:</b> " + g.res + " · <b>Schutz:</b> " + g.schutz + (g.ausruestung ? "<br><b>Ausrüstung:</b> " + md(g.ausruestung) : "") + "</p></div>"; }).join("");
  return nav("x") + '<div class="wrap"><div class="seite lmseitebl"><a class="zur" onclick="go(\'lm\')">‹ Landmarken</a><h1 class="h1">' + esc(d.t) + pgl(d.p, d.bl ? d.bl + " S. " + d.p : null, d.bk) + ' <em class="bbt">Delve</em></h1>' + wz + '<div class="bgrid n2 lmsp"><div>' + l + "</div><div>" + r + "</div></div></div></div>";
}
function viewLmEinzeln(id){
  if(id.indexOf("d:") === 0) return viewDelve(id.slice(2));
  var l = HT_LM.filter(function(x){ return x.id === id; })[0]; if(!l) return viewLm([]);
  var tf = {"ungebunden":"Ungebunden","risse":"Risse","himmel":"Die Acht Himmel"}[l.tiefe] || String(l.tiefeText || l.tiefe);
  var done = ST.lmdone || {};
  var wz = '<div class="lmwerte"><div><span class="lbl">Domains</span> ' + esc((l.dom || []).join(", ")) + '</div><div><span class="lbl">Tiefe</span> ' + esc(tf) + '</div><div><span class="lbl">Standard-Stress</span> ' + esc(l.stress || "") + "</div>" +
    ((l.haunts || []).length ? '<div class="hn"><span class="lbl">Haunts</span><ul>' + l.haunts.map(function(h){ return "<li>" + md(h) + "</li>"; }).join("") + "</ul></div>" : "") + "</div>";
  var bl = ((window.HT_BILD || {}).lm || {})[l.id];
  var links = (bl ? '<img class="lmbild" src="' + IMG(bl) + '" alt="" onclick="zoom(this.src)">' : "") + (l.text || []).map(blk).join("") + (l.unter || []).map(function(u){ return '<h3 class="h3">' + esc(u.t) + "</h3>" + (u.b || []).map(blk).join(""); }).join("");
  var rechts = "";
  if(l.regeln && l.regeln.length) rechts += '<div class="dkas"><h4>Besondere Regeln</h4>' + l.regeln.map(blk).join("") + "</div>";
  if((l.ressourcen || []).length) rechts += '<h3 class="h3">Ressourcen</h3><ul class="lst">' + l.ressourcen.map(function(r){ return "<li>" + md(r) + "</li>"; }).join("") + "</ul>";
  if((l.plots || []).length) rechts += '<h3 class="h3">Mögliche Plots</h3><ul class="lst plots">' + l.plots.map(function(r, i){ var k = l.id + ":" + i; return '<li class="' + (done[k] ? "ok" : "") + '" onclick="lmPlot(\'' + k + '\')">' + md(r) + "</li>"; }).join("") + "</ul>";
  return nav("x") + '<div class="wrap"><div class="seite lmseitebl"><a class="zur" onclick="go(\'lm\')">‹ Landmarken</a><h1 class="h1">' + esc(l.t) + seitenlink(l) + (l.q === "bb" ? ' <em class="bbt">B&amp;B</em>' : "") + "</h1>" + wz +
    '<div class="bgrid n2 lmsp"><div>' + links + "</div><div>" + rechts + "</div></div></div></div>";
}
window.lmPlot = function(k){ ST.lmdone = ST.lmdone || {}; ST.lmdone[k] = !ST.lmdone[k]; save(); render(); };
VIEWS.lm = viewLm;
})();
