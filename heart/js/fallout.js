/* Fallout-Tab: Resistenz × Stufe, aus den übersetzten Regeln (S. 80–89) abgeleitet */
(function(){
var RES = ["blood","mind","echo","fortune","supplies"], RN = {blood:"Blood",mind:"Mind",echo:"Echo",fortune:"Fortune",supplies:"Supplies"};
var ST = [["leicht","Leicht","kurzfristige Wirkung, geringe Auswirkung",80],["schwer","Schwer","ernste Probleme, die deine Geschichte beenden können",83],["kritisch","Kritisch","das Ende deiner Figur",87]];
var filter = "alle", offen = {};
function daten(){
  var out = {}, subs = (window.HT_NACH && HT_NACH.regeln && HT_NACH.regeln.subs) || [];
  ST.forEach(function(s){
    var sub = subs.filter(function(x){ return x.id === s[0]; })[0]; if(!sub) return;
    sub.secs.forEach(function(sec){
      (sec.b || []).forEach(function(b){ if(b.t === "karten") b.x.forEach(function(k){
        var tag = "", auch = "";
        (k.b || []).forEach(function(q){ if(q && q.t === "p" && q.k){ if(/^\s*\[/.test(q.x)) tag = q.x.replace(/[\[\]]/g, ""); else auch = q.x; } });
        (out[s[0] + "|" + sec.id] = out[s[0] + "|" + sec.id] || []).push({id: s[0] + sec.id + k.t, t: k.t, tag: tag, auch: auch, p: sec.p, k: k});
      }); });
    });
  });
  return out;
}
function passt(f){ var t = f.tag.toLowerCase(); return filter === "alle" || t.indexOf(filter) >= 0; }
window.falloutFilter = function(f){ filter = f; render(); };
window.falloutAuf = function(id){ offen[id] = !offen[id]; render(); };
function karte(f){
  var on = offen[f.id];
  var kopf = '<div class="fk" onclick="falloutAuf(\'' + f.id.replace(/'/g, "\\'") + '\')"><b>' + esc(f.t) + '</b><span>' + esc((f.auch ? f.auch.replace(/[\[\]]/g, "") + " · " : "") + f.tag) + "</span></div>";
  if(!on) return '<div class="fc">' + kopf + "</div>";
  var inh = (f.k.b || []).filter(function(q){ return !(q && q.t === "p" && q.k); }).map(blk).join("");
  return '<div class="fc auf">' + kopf + '<div class="fi">' + inh + "</div></div>";
}
function viewFallout(){
  var D = daten();
  var chips = [["alle","Alle"],["sofort","Sofort"],["anhaltend","Anhaltend"]].map(function(c){ return '<button class="' + (filter === c[0] ? "on" : "") + '" onclick="falloutFilter(\'' + c[0] + '\')">' + c[1] + "</button>"; }).join("");
  var h = window.spielNav("fallout") + '<div class="fowrap"><div class="fohead"><h1>Fallout</h1> ' + pgl(80, "S. 80") +
    '<p class="foin">Sobald du Stress erleidest, würfelt die SL W12 gegen deinen aktuellen Gesamt-Stress. Ist das Ergebnis gleich oder niedriger, erleidest du Fallout. <a onclick="go(\'nach/regeln/fallout\')">Regeln im Detail</a></p></div><div class="fochips">' + chips + "</div>";
  ST.forEach(function(s){
    h += '<div class="fostufe"><h2>' + s[1] + "</h2><i>" + s[2] + '</i></div><div class="fogrid">';
    RES.forEach(function(r){
      var L = (D[s[0] + "|" + r] || []).filter(passt);
      h += '<div class="focol"><div class="foh">' + RN[r] + "</div>" + L.map(karte).join("") + "</div>";
    });
    h += "</div>";
  });
  return h + "</div>";
}
VIEWS.fallout = viewFallout;
})();
