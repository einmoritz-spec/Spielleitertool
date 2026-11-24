/* Gegner: 4er-Zeilenraster (#gegner), aufgeklappt über zwei Spalten */
(function(){
var offen = null;
function wert(v){ return v == null || v === "" ? "–" : String(v); }
function kw(v){ v = wert(v); return v.length > 14 ? (v.match(/^[\d–]+/) || ["*"])[0] + (/^[\d–]+\*?$/.test(v) ? "" : "*") : v; }
function zeile(g){
  return (g.schw && g.schw.length > 14 ? g.schw.split(/[,;]/)[0] + "*" : wert(g.schw)) + " · Resistenz " + kw(g.res) + " · Schutz " + kw(g.schutz);
}
function etikett(g){ return g.q === "bb" ? ' <em class="bbt">B&amp;B</em>' : g.q === "sanctum" ? ' <em class="bbt">Sanctum</em>' : ""; }
function pg(g){ return pgl(g.p, "S. " + g.p, g.bk); }
function kurz(g){ return g.legendaer && g.t.indexOf(": ") > 0 ? g.t.split(": ").pop() : g.t; }
function kopf(g){ return '<div class="gk"><b>' + esc(kurz(g)) + "</b> " + pg(g) + etikett(g) + "</div>"; }
function zeil(g, leg){
  if(offen === g.id) return detail(g, leg);
  return '<div class="gz' + (leg ? " leg" : "") + '" onclick="gegnerAuf(\'' + g.id + '\')"><div class="gk"><b>' + esc(kurz(g)) + "</b>" + etikett(g) + '</div><div class="gw">' + esc(zeile(g)) + "</div></div>";
}
function w(l, v){ return v ? '<div class="gv"><span class="lbl">' + l + "</span> " + md(v) + "</div>" : ""; }
function detail(g, leg){
  var fo = (g.fallout || []).map(function(f){ return '<div class="dfo"><p><b class="dfon">Fallout: ' + esc(f.t) + ".</b> [" + esc([f.s, f.r].filter(Boolean).join(", ")) + "] " + md(f.x) + "</p></div>"; }).join("");
  var links = (g.text || []).map(blk).join("");
  var bi = (window.HT_BILD || {}).gegner || {}, bild = bi[g.id] ? '<img class="gbild" src="' + IMG(bi[g.id]) + '" alt="" onclick="event.stopPropagation();zoom(this.src)">' : "";
  var rechts = bild + '<div class="gvs">' + w("Beschreibung:", g.besch) + w("Namen:", g.namen) + w("Motivation:", g.motiv) +
    '<div class="gv"><span class="lbl">Schwierigkeit:</span> ' + esc(wert(g.schw)) + " · <span class=\"lbl\">Resistenz:</span> " + esc(wert(g.res)) + " · <span class=\"lbl\">Schutz:</span> " + esc(wert(g.schutz)) + "</div>" +
    w("Ressourcen:", g.ressourcen) + w("Ausrüstung:", g.ausr) + w("Resistenz:", g.resX) + w("Schwierigkeit:", g.schwx) + w("Besonderes:", g.besonders) + w("Domains:", (g.dom || []).join(", ")) + w("", g.domx) + "</div>" + fo + '<div class="gbtn"><button onclick="auffDieExpedition(\'' + g.id + '\')">Auf die Expedition</button></div>';
  return '<div class="gz auf' + (leg ? " leg" : "") + '"><div class="gh" onclick="gegnerAuf(null)"><span class="platte' + (leg ? " schwarz" : "") + '">' + esc(kurz(g)) + "</span> " + pg(g) + etikett(g) + '</div><div class="gcols"><div class="gtext">' + links + "</div><div>" + rechts + "</div></div></div>";
}
var mobsAuf = false;
window.gegnerMobs = function(){ mobsAuf = !mobsAuf; render(); };
window.gegnerAuf = function(id){ offen = id; render(); };
function viewGegner(){
  var G = window.HT_GEGNER || [], I = window.HT_GEGNER_INFO || {};
  var norm = G.filter(function(g){ return !g.legendaer; }).sort(function(a, b){ return (a.q !== "core") - (b.q !== "core") || a.p - b.p; });
  var leg = G.filter(function(g){ return g.legendaer; }).sort(function(a, b){ return a.p - b.p; });
  var mobs = I.mobs && I.mobs.length ? '<div class="foreg gmobsz"><a onclick="gegnerMobs()">Optionale Regel: Mobs ' + (mobsAuf ? "▾" : "▸") + "</a>" + (mobsAuf ? '<div class="schwarz gmobs">' + I.mobs.map(blk).join("").replace(/<div class="lbl">[^<]*Mobs<\/div>/, "") + "</div>" : "") + "</div>" : "";
  return window.spielNav("gegner") + '<div class="gwrap">' + mobs + '<div class="gg">' + norm.map(function(g){ return zeil(g, false); }).join("") + "</div>" +
    (leg.length ? '<section class="gleg"><h2>Legendäre Gegner</h2>' + (I.legendaer && I.legendaer.length ? '<div class="gli">' + I.legendaer.map(blk).join("") + "</div>" : "") + '<div class="gg">' + leg.map(function(g){ return zeil(g, true); }).join("") + "</div></section>" : "") + "</div>";
}
VIEWS.gegner = viewGegner;
})();
