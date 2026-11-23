/* Kampagne „Dagger in the Heart“: Kapitel-Treppe, Opposition, Kapitel (Überblick · Inszenierung · Landmarken · Dokumente) */
(function(){
var D = function(){ return window.HT_DAGGER || {intro:{}, opp:[], kap:{}, app:{}}; };
var KT = {1:"Trainkill",2:"Eastern Express",3:"Von Oben",4:"The Wormery",5:"Das Verwundete Reich",6:"Randlande",7:"Ein Dolch in deiner Hand"};
var KP = {1:24,2:35,3:53,4:71,5:89,6:117,7:131};
var PL = ["Klein","Klein","Groß","Groß","Zenit"];
function pg(p){ return p ? pgl(p, "S. " + p, "ht_a1") : ""; }
function dk(){ ST.dk = ST.dk || {opp:{}, done:{}, res:{}, erg:{}, beat:{}, hand:{}}; if(!ST.dk.hand) ST.dk.hand = {}; return ST.dk; }
function falloutZ(name, tags, b){
  return '<div class="dfo"><p><b class="dfon">Fallout: ' + esc(name) + ".</b>" + (tags ? " [" + esc(tags) + "]" : "") + " " + (b.length && typeof b[0] === "string" ? md(b[0]) : "") + "</p>" + (b.length && typeof b[0] === "string" ? b.slice(1) : b).map(blk).join("") + "</div>";
}
function bl(b){
  if(b && typeof b === "object" && b.t === "kasten" && /^Fallout:/.test(b.h || "")){
    var h = b.h.replace(/^Fallout:\s*/, ""), tags = "", m, B = (b.b || [b.x]).slice();
    if((m = h.match(/^(.*?)\s*\[([^\]]+)\]\s*$/))){ h = m[1]; tags = m[2]; }
    else if(h.indexOf(" · ") > 0){ var P = h.split(" · "); h = P.shift(); tags = P.join(", "); }
    if(!tags && typeof B[0] === "string" && (m = B[0].match(/^\[([^\]]+)\]\s*/))){ tags = m[1]; B[0] = B[0].slice(m[0].length); }
    return falloutZ(h, tags, B);
  }
  if(b && typeof b === "object" && b.t === "kasten") return '<div class="dkas">' + (b.h ? "<h4>" + esc(b.h) + "</h4>" : "") + (b.b || [b.x]).map(bl).join("") + "</div>";
  if(b && typeof b === "object" && b.t === "zettel") return '<div class="dzettel">' + (b.h ? "<h4>" + esc(b.h) + "</h4>" : "") + (b.x || b.b || []).map(bl).join("") + "</div>";
  return blk(b);
}
function bls(a){ return (a || []).map(bl).join(""); }
function kap(n){ return D().kap[String(n)]; }
function ktitel(n){ var k = kap(n); return k && k.t ? k.t : KT[n]; }
function nav(n, tab){
  var tabs = [["ueberblick","Überblick"],["inszenierung","Inszenierung"],["landmarken","Landmarken"],["dokumente","Dokumente"]];
  if(n && !((kap(n) || {}).dok || []).length) tabs.pop();
  var sel = '<select class="dksel" onchange="go(\'dagger/\'+this.value+\'/ueberblick\')">' + [1,2,3,4,5,6,7].map(function(i){ return '<option value="' + i + '"' + (i == n ? " selected" : "") + ">Kapitel " + i + " · " + esc(ktitel(i)) + "</option>"; }).join("") + "</select>";
  return '<nav class="tabs dknav"><a class="kb0" onclick="go(\'dagger\')">‹ Kampagne</a>' + (n ? sel + tabs.map(function(t){ return '<a class="' + (t[0] === tab ? "on" : "") + '" onclick="go(\'dagger/' + n + "/" + t[0] + '\')">' + t[1] + "</a>"; }).join("") : "") + '<span class="sp"></span>' + (n ? '<a class="dkfin' + (dk().done[n] ? " on" : "") + '" onclick="dkFin(' + n + ')">' + (dk().done[n] ? "✓ Abgeschlossen" : "Abschließen") + "</a>" : "") + "</nav>";
}
window.dkFin = function(n){ var d = dk().done; d[n] = !d[n]; save(); render(); };
/* ---------- Übersicht ---------- */
function opps(){ return D().opp || []; }
function plan(id){ var o = dk().opp[id] || 0, h = ""; PL.forEach(function(l, i){ h += '<span class="dpl' + (i < o ? " an" : "") + '" onclick="event.stopPropagation();dkPlan(\'' + id + "'," + i + ')"><i></i></span>'; }); return '<span class="dplw">' + h + "</span>"; }
function uebersicht(){
  var I = D().intro || {}, h = '<div class="dkbuehne"><div class="dkstair">';
  [1,2,3,4,5,6,7].forEach(function(n){
    var done = dk().done[n];
    h += '<div class="dkk' + (done ? " fertig" : "") + (dk().cur === n && !done ? " aktuell" : "") + '" style="margin-left:' + ((n - 1) * 194) + 'px;margin-top:' + (n === 1 ? 0 : 0) + 'px;top:' + ((n - 1) * 66) + 'px" onclick="go(\'dagger/' + n + '/ueberblick\')"><img src="' + IMG("dagger/kap" + n) + '" alt=""><div class="dkkl"><small>Kapitel ' + n + " · S. " + KP[n] + "</small><b>" + esc(ktitel(n)) + "</b></div></div>";
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
var DSH = {"2": {"top": 32.0, "h": 66.0, "lw": 63.4, "lp": "0 0,99.2% 0,99.2% 1.5%,99.2% 4.5%,99.2% 7.6%,99.2% 10.6%,97.9% 13.6%,96.4% 16.7%,95.4% 19.7%,94.0% 22.7%,83.6% 25.8%,83.6% 28.8%,83.6% 31.8%,83.6% 34.8%,83.6% 37.9%,83.6% 40.9%,83.6% 43.9%,83.6% 47.0%,83.6% 50.0%,83.6% 53.0%,83.6% 56.1%,83.6% 59.1%,83.6% 62.1%,83.6% 65.2%,83.6% 68.2%,83.6% 71.2%,83.6% 74.2%,83.6% 77.3%,83.6% 80.3%,83.6% 83.3%,83.6% 86.4%,83.6% 89.4%,83.6% 92.4%,83.6% 95.5%,83.6% 98.5%,83.6% 100%,0 100%", "rw": 4, "rp": "100% 0,0.0% 0,0.0% 1.5%,0.0% 4.5%,0.0% 7.6%,0.0% 10.6%,0.0% 13.6%,0.0% 16.7%,0.0% 19.7%,0.0% 22.7%,0.0% 25.8%,0.0% 28.8%,0.0% 31.8%,0.0% 34.8%,0.0% 37.9%,0.0% 40.9%,0.0% 43.9%,0.0% 47.0%,0.0% 50.0%,0.0% 53.0%,0.0% 56.1%,0.0% 59.1%,0.0% 62.1%,0.0% 65.2%,0.0% 68.2%,0.0% 71.2%,0.0% 74.2%,0.0% 77.3%,0.0% 80.3%,0.0% 83.3%,0.0% 86.4%,0.0% 89.4%,0.0% 92.4%,0.0% 95.5%,0.0% 98.5%,0.0% 100%,100% 100%"}, "3": {"top": 4.0, "h": 92.0, "lw": 70.1, "lp": "0 0,75.2% 0,75.2% 1.1%,75.2% 3.3%,75.2% 5.4%,82.0% 7.6%,82.0% 9.8%,82.0% 12.0%,82.0% 14.1%,82.0% 16.3%,82.0% 18.5%,82.9% 20.7%,84.2% 22.8%,85.7% 25.0%,86.0% 27.2%,88.2% 29.3%,89.6% 31.5%,90.0% 33.7%,91.0% 35.9%,91.9% 38.0%,93.0% 40.2%,93.6% 42.4%,93.9% 44.6%,95.0% 46.7%,95.6% 48.9%,95.6% 51.1%,96.7% 53.3%,97.3% 55.4%,97.3% 57.6%,98.6% 59.8%,99.3% 62.0%,99.3% 64.1%,99.3% 66.3%,99.3% 68.5%,99.3% 70.7%,99.3% 72.8%,99.3% 75.0%,98.7% 77.2%,98.7% 79.3%,98.7% 81.5%,98.4% 83.7%,97.1% 85.9%,97.1% 88.0%,97.1% 90.2%,97.1% 92.4%,97.1% 94.6%,97.1% 96.7%,97.1% 98.9%,97.1% 100%,0 100%", "rw": 4, "rp": "100% 0,0.0% 0,0.0% 1.1%,0.0% 3.3%,0.0% 5.4%,0.0% 7.6%,0.0% 9.8%,0.0% 12.0%,0.0% 14.1%,0.0% 16.3%,0.0% 18.5%,0.0% 20.7%,0.0% 22.8%,0.0% 25.0%,0.0% 27.2%,0.0% 29.3%,0.0% 31.5%,0.0% 33.7%,0.0% 35.9%,0.0% 38.0%,0.0% 40.2%,0.0% 42.4%,0.0% 44.6%,0.0% 46.7%,0.0% 48.9%,0.0% 51.1%,0.0% 53.3%,0.0% 55.4%,0.0% 57.6%,0.0% 59.8%,0.0% 62.0%,0.0% 64.1%,0.0% 66.3%,0.0% 68.5%,0.0% 70.7%,0.0% 72.8%,0.0% 75.0%,0.0% 77.2%,0.0% 79.3%,0.0% 81.5%,0.0% 83.7%,0.0% 85.9%,0.0% 88.0%,0.0% 90.2%,0.0% 92.4%,0.0% 94.6%,0.0% 96.7%,0.0% 98.9%,0.0% 100%,100% 100%"}, "4": {"top": 4.0, "h": 92.0, "lw": 68.4, "lp": "0 0,77.3% 0,77.3% 1.1%,77.3% 3.3%,77.3% 5.4%,77.3% 7.6%,77.3% 9.8%,77.3% 12.0%,77.3% 14.1%,77.3% 16.3%,77.3% 18.5%,77.3% 20.7%,77.3% 22.8%,77.3% 25.0%,77.3% 27.2%,77.3% 29.3%,77.3% 31.5%,77.3% 33.7%,77.3% 35.9%,77.3% 38.0%,77.3% 40.2%,77.6% 42.4%,79.5% 44.6%,79.8% 46.7%,79.8% 48.9%,79.8% 51.1%,82.9% 53.3%,85.1% 55.4%,85.4% 57.6%,85.7% 59.8%,85.7% 62.0%,85.7% 64.1%,85.7% 66.3%,85.7% 68.5%,85.7% 70.7%,89.0% 72.8%,91.7% 75.0%,93.3% 77.2%,93.7% 79.3%,94.3% 81.5%,95.0% 83.7%,97.7% 85.9%,99.0% 88.0%,99.3% 90.2%,99.3% 92.4%,99.3% 94.6%,99.3% 96.7%,99.3% 98.9%,99.3% 100%,0 100%", "rw": 4, "rp": "100% 0,0.0% 0,0.0% 1.1%,0.0% 3.3%,0.0% 5.4%,0.0% 7.6%,0.0% 9.8%,0.0% 12.0%,0.0% 14.1%,0.0% 16.3%,0.0% 18.5%,0.0% 20.7%,0.0% 22.8%,0.0% 25.0%,0.0% 27.2%,0.0% 29.3%,0.0% 31.5%,0.0% 33.7%,0.0% 35.9%,0.0% 38.0%,0.0% 40.2%,0.0% 42.4%,0.0% 44.6%,0.0% 46.7%,0.0% 48.9%,0.0% 51.1%,0.0% 53.3%,0.0% 55.4%,0.0% 57.6%,0.0% 59.8%,0.0% 62.0%,0.0% 64.1%,0.0% 66.3%,0.0% 68.5%,0.0% 70.7%,0.0% 72.8%,0.0% 75.0%,0.0% 77.2%,0.0% 79.3%,0.0% 81.5%,0.0% 83.7%,0.0% 85.9%,0.0% 88.0%,0.0% 90.2%,0.0% 92.4%,0.0% 94.6%,0.0% 96.7%,0.0% 98.9%,0.0% 100%,100% 100%"}, "5": {"top": 4.0, "h": 92.0, "lw": 53.4, "lp": "0 0,99.1% 0,99.1% 1.1%,99.1% 3.3%,99.1% 5.4%,99.1% 7.6%,99.1% 9.8%,99.1% 12.0%,99.1% 14.1%,99.1% 16.3%,99.1% 18.5%,99.1% 20.7%,99.1% 22.8%,99.1% 25.0%,99.1% 27.2%,99.1% 29.3%,99.1% 31.5%,99.1% 33.7%,99.1% 35.9%,99.1% 38.0%,99.1% 40.2%,99.1% 42.4%,99.1% 44.6%,99.1% 46.7%,99.1% 48.9%,99.1% 51.1%,99.1% 53.3%,99.1% 55.4%,99.1% 57.6%,99.1% 59.8%,99.1% 62.0%,99.1% 64.1%,99.1% 66.3%,99.1% 68.5%,99.1% 70.7%,99.1% 72.8%,99.1% 75.0%,99.1% 77.2%,99.1% 79.3%,99.1% 81.5%,99.1% 83.7%,99.1% 85.9%,99.1% 88.0%,99.1% 90.2%,99.1% 92.4%,99.1% 94.6%,99.1% 96.7%,99.1% 98.9%,99.1% 100%,0 100%", "rw": 4, "rp": "100% 0,0.0% 0,0.0% 1.1%,0.0% 3.3%,0.0% 5.4%,0.0% 7.6%,0.0% 9.8%,0.0% 12.0%,0.0% 14.1%,0.0% 16.3%,0.0% 18.5%,0.0% 20.7%,0.0% 22.8%,0.0% 25.0%,0.0% 27.2%,0.0% 29.3%,0.0% 31.5%,0.0% 33.7%,0.0% 35.9%,0.0% 38.0%,0.0% 40.2%,0.0% 42.4%,0.0% 44.6%,0.0% 46.7%,0.0% 48.9%,0.0% 51.1%,0.0% 53.3%,0.0% 55.4%,0.0% 57.6%,0.0% 59.8%,0.0% 62.0%,0.0% 64.1%,0.0% 66.3%,0.0% 68.5%,0.0% 70.7%,0.0% 72.8%,0.0% 75.0%,0.0% 77.2%,0.0% 79.3%,0.0% 81.5%,0.0% 83.7%,0.0% 85.9%,0.0% 88.0%,0.0% 90.2%,0.0% 92.4%,0.0% 94.6%,0.0% 96.7%,0.0% 98.9%,0.0% 100%,100% 100%"}, "6": {"top": 4.0, "h": 92.0, "lw": 69.2, "lp": "0 0,84.1% 0,84.1% 1.1%,84.1% 3.3%,84.1% 5.4%,84.1% 7.6%,84.1% 9.8%,84.1% 12.0%,84.1% 14.1%,84.1% 16.3%,84.1% 18.5%,84.1% 20.7%,83.8% 22.8%,83.5% 25.0%,83.5% 27.2%,83.4% 29.3%,81.9% 31.5%,80.8% 33.7%,79.3% 35.9%,80.5% 38.0%,82.7% 40.2%,83.1% 42.4%,83.1% 44.6%,83.1% 46.7%,83.1% 48.9%,83.1% 51.1%,83.1% 53.3%,83.1% 55.4%,82.8% 57.6%,83.8% 59.8%,85.5% 62.0%,87.4% 64.1%,87.9% 66.3%,87.9% 68.5%,87.9% 70.7%,87.9% 72.8%,87.9% 75.0%,87.9% 77.2%,87.9% 79.3%,87.6% 81.5%,90.0% 83.7%,91.9% 85.9%,92.3% 88.0%,92.3% 90.2%,99.3% 92.4%,99.3% 94.6%,99.3% 96.7%,99.3% 98.9%,99.3% 100%,0 100%", "rw": 4, "rp": "100% 0,0.0% 0,0.0% 1.1%,0.0% 3.3%,0.0% 5.4%,0.0% 7.6%,0.0% 9.8%,0.0% 12.0%,0.0% 14.1%,0.0% 16.3%,0.0% 18.5%,0.0% 20.7%,0.0% 22.8%,0.0% 25.0%,0.0% 27.2%,0.0% 29.3%,0.0% 31.5%,0.0% 33.7%,0.0% 35.9%,0.0% 38.0%,0.0% 40.2%,0.0% 42.4%,0.0% 44.6%,0.0% 46.7%,0.0% 48.9%,0.0% 51.1%,0.0% 53.3%,0.0% 55.4%,0.0% 57.6%,0.0% 59.8%,0.0% 62.0%,0.0% 64.1%,0.0% 66.3%,0.0% 68.5%,0.0% 70.7%,0.0% 72.8%,0.0% 75.0%,0.0% 77.2%,0.0% 79.3%,0.0% 81.5%,0.0% 83.7%,0.0% 85.9%,0.0% 88.0%,0.0% 90.2%,0.0% 92.4%,0.0% 94.6%,0.0% 96.7%,0.0% 98.9%,0.0% 100%,100% 100%"}, "7": {"top": 4.0, "h": 92.0, "lw": 70.4, "lp": "0 0,80.3% 0,80.3% 1.1%,80.3% 3.3%,80.3% 5.4%,80.3% 7.6%,79.4% 9.8%,78.7% 12.0%,78.7% 14.1%,77.6% 16.3%,77.1% 18.5%,76.6% 20.7%,76.1% 22.8%,75.6% 25.0%,75.3% 27.2%,75.4% 29.3%,75.4% 31.5%,75.4% 33.7%,75.4% 35.9%,75.4% 38.0%,75.4% 40.2%,75.6% 42.4%,75.6% 44.6%,75.6% 46.7%,76.7% 48.9%,78.1% 51.1%,79.4% 53.3%,80.7% 55.4%,82.0% 57.6%,83.1% 59.8%,84.4% 62.0%,85.7% 64.1%,86.9% 66.3%,88.1% 68.5%,89.2% 70.7%,90.5% 72.8%,94.9% 75.0%,98.2% 77.2%,98.4% 79.3%,98.4% 81.5%,98.4% 83.7%,99.0% 85.9%,99.3% 88.0%,99.3% 90.2%,99.3% 92.4%,99.3% 94.6%,99.3% 96.7%,99.3% 98.9%,99.3% 100%,0 100%", "rw": 4, "rp": "100% 0,0.0% 0,0.0% 1.1%,0.0% 3.3%,0.0% 5.4%,0.0% 7.6%,0.0% 9.8%,0.0% 12.0%,0.0% 14.1%,0.0% 16.3%,0.0% 18.5%,0.0% 20.7%,0.0% 22.8%,0.0% 25.0%,0.0% 27.2%,0.0% 29.3%,0.0% 31.5%,0.0% 33.7%,0.0% 35.9%,0.0% 38.0%,0.0% 40.2%,0.0% 42.4%,0.0% 44.6%,0.0% 46.7%,0.0% 48.9%,0.0% 51.1%,0.0% 53.3%,0.0% 55.4%,0.0% 57.6%,0.0% 59.8%,0.0% 62.0%,0.0% 64.1%,0.0% 66.3%,0.0% 68.5%,0.0% 70.7%,0.0% 72.8%,0.0% 75.0%,0.0% 77.2%,0.0% 79.3%,0.0% 81.5%,0.0% 83.7%,0.0% 85.9%,0.0% 88.0%,0.0% 90.2%,0.0% 92.4%,0.0% 94.6%,0.0% 96.7%,0.0% 98.9%,0.0% 100%,100% 100%"}};
var DART = {"opp": {"ptolemy-bay": [[0, "dagger/art/a011-s6"], ["Abayghur", "dagger/art/a012-s9"]], "der-eine": [[0, "dagger/art/a013-s10"], ["Medicant", "dagger/art/a014-s13"]], "aramos": [[0, "dagger/art/a015-s14"], ["Agenten", "dagger/art/a016-s17"]]}, "kap": {"1": "dagger/art/a031-s24", "2": "dagger/art/a035-s34", "5": "dagger/art/a080-s88", "6": "dagger/art/a093-s116", "7": "dagger/art/a099-s130"}, "lm": {"shuntyard": "dagger/art/a033-s25", "white-station": "dagger/art/a062-s66", "haus-der-tueren": "dagger/art/a063-s68", "avallone": "dagger/art/a070-s78", "wormery": "dagger/art/a075-s84", "grinding-halls": "dagger/art/a081-s93", "arch-gwynn-ardasi": "dagger/art/a083-s98", "vermissian-operations-centre": "dagger/art/a084-s102", "schlummernde-sprengkoepfe": "dagger/art/a086-s109", "gefallene-spire": "dagger/art/a088-s111", "gefrorene-spire": "dagger/art/a090-s113", "hohles-herz": "dagger/art/a092-s115"}, "ins": {"Excalibur": "dagger/art/a060-s61"}};
function dbild(f, cls){ return f ? '<img class="dbild ' + (cls || "") + '" src="' + IMG(f) + '" alt="">' : ""; }
function abschn(a, oid, i){ var im = ""; (DART.opp[oid] || []).forEach(function(r){ if(!im && (r[0] === i || (typeof r[0] === "string" && a.t.indexOf(r[0]) >= 0))) im = dbild(r[1], "r"); }); return im + '<h2 class="dh2">' + esc(a.t) + pg(a.p) + "</h2>" + bls(a.b) + (a.figuren || []).map(fig).join(""); }
function fig(g){
  var fo = (g.fallout || []).map(function(f){ return falloutZ(f.t, [f.s, f.r].filter(Boolean).join(", "), [f.x]); }).join("");
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
  return seite(o.t, o.p, (o.abschnitte || []).map(function(a, i){ return abschn(a, o.id, i); }).join(""), '<p class="kurs">' + esc(o.sub || "") + "</p>" + plan(o.id));
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
  var HL = {1:{t:[0,0,100,52,"c"], form:1}, 2:{t:[57,37,32,0,"c"], v:[58.5,53,29,97,"l"]}, 3:{t:[63.5,7,33,95,"c"]}, 4:{t:[59,8,36,90,"c"]}, 5:{t:[54,7,40,95,"c"]}, 6:{t:[60.5,7,35.5,82,"c"]}, 7:{t:[56.5,8,38.5,82,"c"], va:"l"}}[K.n] || {t:[54,7,40,90,"c"]};
  var UB = (K.ueberblick || []).slice(), vor = [];
  while(UB.length && typeof UB[0] === "string" && /^\*\*[\s\S]*\*\*$/.test(UB[0].trim()) && (K.verse || []).length) vor.push(UB.shift().trim().replace(/^\*\*|\*\*$/g, ""));
  if(vor.length && UB[0] && UB[0].t === "h" && /^Überblick$/i.test(UB[0].x)) UB.shift(); else if(!vor.length) UB = K.ueberblick || [];
  if(UB[0] && UB[0].t === "h" && /^Kapitel\s*\d/i.test(UB[0].x)) UB = UB.slice(1);
  var vh = (K.verse || []).length ? '<div class="dhv">' + K.verse.map(function(v){ var c = /^[–—-]\s/.test(v) || /^\*\*.*\*\*$/.test(v.trim()); v = v.trim().replace(/^\*+|\*+$/g, ""); return c ? "<cite>" + md(v) + "</cite>" : "<p>" + md(v) + "</p>"; }).join("") + (vor.length ? '<div class="dhvor">' + vor.map(function(v){ return "<p>" + md(v) + "</p>"; }).join("") + "</div>" : "") + "</div>" : "";
  function box(p, inner, cls){ return '<div class="dhbox ' + (cls || "") + " a" + p[4] + '" data-t="' + p[1] + '" data-b="' + p[3] + '" style="left:' + p[0] + "%;top:" + p[1] + "%;width:" + p[2] + '%">' + inner + "</div>"; }
  var tit = '<h1><small>Kapitel ' + K.n + ":</small>" + esc(K.t) + "</h1>";
  var hero = '<div class="dhero" style="background-image:url(' + IMG("dagger/kap" + K.n + "-hero") + ')">' + (HL.form ? '<div class="dhbox ac form" data-fit="1" style="left:0;top:0;width:100%;height:' + HL.t[3] + '%"><i class="dfl"></i><i class="dfr"></i>' + tit + vh + "</div>" : DSH[K.n] ? (function(S){ return '<div class="dhbox ac form' + (HL.va === "l" ? " vl" : "") + '" data-fit="1" style="left:0;top:' + S.top + "%;width:100%;height:" + S.h + '%"><i class="dfx" style="float:left;width:' + S.lw + "%;shape-outside:polygon(" + S.lp + ')"></i><i class="dfx" style="float:right;width:' + S.rw + "%;shape-outside:polygon(" + S.rp + ')"></i>' + tit + vh + "</div>"; })(DSH[K.n]) : HL.v ? box(HL.t, tit) + box(HL.v, vh, "nurv") : box(HL.t, tit + vh, HL.va === "l" ? "vl" : "")) + "</div>";
  return hero + '<div class="wrap dhwrap"><div class="seite dkseite"><h2 class="dh2 dueb">Überblick' + pg(K.p) + '</h2><div class="flach">' + bls(UB) + leg + "</div>" + (gar ? '<div class="dgars">' + gar + "</div>" : "") + "</div></div>";
}
function inszen(K){
  var h = (K.inszenierung || []).map(function(a){ return '<div class="dscene"><h3>' + esc(a.t) + pg(a.p) + "</h3>" + Object.keys(DART.ins).map(function(k){ return a.t.indexOf(k) >= 0 ? dbild(DART.ins[k], "r klein") : ""; }).join("") + bls(a.b) + (a.figuren || []).map(fig).join("") + "</div>"; }).join("");
  var r = (K.rest || []).map(function(a){ return '<div class="dscene"><h3>' + esc(a.t) + pg(a.p) + "</h3>" + bls(a.b) + "</div>"; }).join("");
  return '<div class="dkgrid">' + h + r + "</div>";
}
var DOKB = {"Handout 1": "dagger/art/h1-s46", "Handout 4": "dagger/art/h4-s48", "Handout 6": "dagger/art/h6-s50"};
var RISS = ["polygon(0 2%,6% 0,14% 1.5%,25% 0,38% 1%,52% 0,66% 1.5%,80% 0,92% 1%,100% 0,99% 12%,100% 30%,98.5% 48%,100% 66%,99% 84%,100% 100%,88% 99%,74% 100%,60% 98.5%,44% 100%,30% 99%,16% 100%,5% 98.5%,0 100%,1% 82%,0 64%,1.5% 46%,0 28%,1% 12%)","polygon(1% 0,12% 1%,26% 0,41% 1.5%,57% 0,71% 1%,86% 0,100% 1.5%,99% 16%,100% 34%,98% 52%,100% 70%,99% 88%,100% 100%,90% 98.5%,76% 100%,61% 99%,46% 100%,31% 98.5%,17% 100%,6% 99%,0 100%,1.5% 84%,0 66%,1% 48%,0 30%,1.5% 14%)","polygon(0 1%,9% 0,20% 1.5%,34% 0,49% 1%,63% 0,78% 1.5%,91% 0,100% 1%,98.5% 15%,100% 33%,99% 51%,100% 69%,98.5% 86%,100% 99%,92% 100%,79% 98.5%,64% 100%,47% 99%,33% 100%,19% 98.5%,8% 100%,0 99%,1% 85%,0 68%,1.5% 50%,0 32%,1% 15%)"];
function zettel(d, K, i, gross){
  var bild = DOKB[d.t];
  var hn = (d.t.match(/\d+/) || [])[0], gv = dk().hand[hn];
  var kopf = '<h4>' + esc(d.t) + (gross ? "" : pg(d.p)) + '<span class="dvg' + (gv ? " an" : "") + '" onclick="event.stopPropagation();dkHand(' + hn + ')">' + (gv ? "✓ Ausgegeben" : "Ausgeben") + "</span></h4>";
  if(bild) return '<div class="dzw bild' + (gv ? " vergeben" : "") + (gross ? " gross" : "") + '"' + (gross ? "" : ' onclick="dkDok(' + K.n + "," + i + ')"') + ">" + kopf + dbild(bild, "") + "</div>";
  var rot = ((i * 37) % 7 - 3) * 0.25;
  var lang = !gross && JSON.stringify(d.x).length > 1500;
  return '<div class="dzw' + (gross ? " gross" : "") + (lang ? " lang" : "") + (gv ? " vergeben" : "") + '"' + (gross ? "" : ' onclick="dkDok(' + K.n + "," + i + ')" style="transform:rotate(' + rot + 'deg)"') + '>' + kopf + '<div class="dzettel papier" style="clip-path:' + RISS[i % 3] + '">' + bls(d.x) + "</div></div>";
}
function dokumente(K){
  var L = K.dok || [];
  return '<div class="dkgrid dok">' + (L.length ? L.map(function(d, i){ return zettel(d, K, i, false); }).join("") : "<p>Keine Dokumente in diesem Kapitel.</p>") + "</div>";
}
window.dkHand = function(n){ var h = dk().hand; h[n] = !h[n]; save(); var m = document.querySelector(".dvoll"); if(m) m.remove(); render(); };
window.dkDokN = function(n){ var K = kap(2); if(K && K.dok && K.dok[n - 1]) dkDok(2, n - 1); };
function handChips(root){
  var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), nodes = [], t;
  while((t = w.nextNode())) if(/Handouts?\s+\d/.test(t.nodeValue) && !t.parentNode.closest(".dvoll,nav,.dzw")) nodes.push(t);
  nodes.forEach(function(tn){
    var re = /(Handouts?)\s+(\d+(?:\s*(?:–|-|,|und)\s*\d+)*)/g, v = tn.nodeValue, last = 0, m, html = "";
    while((m = re.exec(v))){
      var nums = [], parts = m[2].split(/\s*(?:,|und)\s*/);
      parts.forEach(function(p){ var r = p.split(/\s*[–-]\s*/); if(r.length === 2){ for(var i = +r[0]; i <= +r[1]; i++) nums.push(i); } else nums.push(+r[0]); });
      html += esc(v.slice(last, m.index)) + '<span class="dhands">' + m[1] + " " + nums.map(function(n){ return '<a class="dhand' + (dk().hand[n] ? " ok" : "") + '" onclick="dkDokN(' + n + ')">' + n + "</a>"; }).join("") + "</span>";
      last = m.index + m[0].length;
    }
    html += esc(v.slice(last));
    var sp = document.createElement("span"); sp.innerHTML = html; tn.parentNode.replaceChild(sp, tn);
  });
}
window.dkDok = function(n, i){ var d = kap(n).dok[i]; var m = document.createElement("div"); m.className = "dvoll"; m.onclick = function(){ m.remove(); }; m.innerHTML = zettel(d, kap(n), i, true); document.body.appendChild(m); };
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
  var ts = R.order.map(function(id){ return R.byId[id].tiefe; }).concat(R.V.map(function(v){ return v.tiefe; })).filter(function(t){ return typeof t === "number"; }), t0 = Math.min.apply(null, ts), t1 = Math.max.apply(null, ts), hasS = R.order.some(function(id){ return typeof R.byId[id].tiefe !== "number"; }), rows = t1 - t0 + 1 + (hasS ? 1 : 0);
  var L = 104, ROW = 92, PAD = 26, H = rows * ROW + PAD, STEP = Math.max(190, Math.min(320, ((window.innerWidth || 1400) - 60 - L) / n)), Wd = L + n * STEP;
  var x = {}; R.order.forEach(function(id, i){ x[id] = L + (i + 0.5) * STEP; });
  var row = function(t){ return (typeof t === "number" ? t : t1 + 1) - t0; }, y = function(t){ return PAD + row(t) * ROW + ROW / 2; };
  var bands = ""; for(var r = 0; r < rows; r++) bands += '<div class="drow" style="top:' + (r ? PAD + r * ROW : 0) + "px;height:" + (r ? ROW : ROW + PAD) + "px;background:rgba(150,24,18," + (0.05 + r * 0.07).toFixed(2) + ')"><span>' + (hasS && r === rows - 1 ? "Risse" : "Tiefe " + (t0 + r)) + "</span></div>";
  var svg = '<svg class="dsvg" width="' + Wd + '" height="' + H + '" viewBox="0 0 ' + Wd + " " + H + '">', dn = "";
  R.V.forEach(function(v){
    var a = R.byId[v.von], b = R.byId[v.nach]; if(!a || !b) return;
    var x1 = x[v.von], y1 = y(a.tiefe), x2 = x[v.nach], y2 = y(b.tiefe), xm = (x1 + x2) / 2, ym = (y1 + y2) / 2;
    var bogen = Math.abs(R.order.indexOf(v.von) - R.order.indexOf(v.nach)) > 1 && R.order.slice(Math.min(R.order.indexOf(v.von), R.order.indexOf(v.nach)) + 1, Math.max(R.order.indexOf(v.von), R.order.indexOf(v.nach))).some(function(i){ return Math.abs(y(R.byId[i].tiefe) - ym) < 40; });
    if(bogen){ var yb = Math.min(y1, y2) - 62; svg += '<path d="M' + x1 + " " + y1 + " C" + x1 + " " + yb + "," + x2 + " " + yb + "," + x2 + " " + y2 + '"' + (v.express ? ' class="ex"' : "") + "/>"; ym = (y1 + y2) / 8 + yb * 0.75; }
    else svg += '<path d="M' + x1 + " " + y1 + " C" + xm + " " + y1 + "," + xm + " " + y2 + "," + x2 + " " + y2 + '"' + (v.express ? ' class="ex"' : "") + "/>";
    var fertig = (dk().res[v.id] || 0) >= v.res;
    dn += '<div class="ddelve' + (sel === "d:" + v.id ? " on" : "") + (fertig ? " fertig" : "") + '" style="left:' + xm + "px;top:" + ym + 'px" title="Delve · Resistenz ' + esc(v.res) + '" onclick="go(\'dagger/' + K.n + "/landmarken/d:" + v.id + '\')">' + (fertig ? "✓" : esc(v.res)) + "</div>";
  });
  svg += "</svg>";
  var nodes = R.order.map(function(id){ var l = R.byId[id]; return '<div class="dnode' + (sel === id ? " on" : "") + (l.extern ? " ext" : "") + '" style="left:' + x[id] + "px;top:" + y(l.tiefe) + 'px" onclick="' + (l.extern ? "" : "go('dagger/" + K.n + "/landmarken/" + id + "')") + '"><b>' + esc(l.t) + "</b><small>" + (l.extern ? (l.extern !== true ? "aus Kapitel " + esc(l.extern) : "aus anderem Kapitel") : esc((l.dom || []).join(", ") + (l.stress ? " · " + l.stress : ""))) + "</small></div>"; }).join("");
  return '<div class="dkarte"><div class="dkin" style="height:' + H + "px;width:" + Wd + 'px">' + bands + svg + nodes + dn + "</div></div>";
}
function delveKarte(K, v){
  var used = dk().res[v.id] || 0, d = dk().erg;
  var bx = ""; for(var i = 0; i < v.res; i++) bx += '<i class="dkb' + (i < used ? " an" : "") + '" onclick="dkRes(\'' + v.id + "'," + i + ')"></i>';
  var a = (K.lm || []).filter(function(l){ return l.id === v.von; })[0], b = (K.lm || []).filter(function(l){ return l.id === v.nach; })[0];
  return '<div class="ddk"><div class="ddh"><b>' + esc(v.von && v.nach ? ((a && a.t) || v.von) + " → " + ((b && b.t) || v.nach) : v.t) + "</b>" + pg(v.p) + '</div><div class="ddb"><p class="dw"><b>Tiefe:</b> ' + esc(v.tiefe) + " · <b>Domains:</b> " + esc(v.dom || "") + " · <b>Stress:</b> " + esc(v.stress || "") + '</p><div class="ddr"><span class="gz">' + v.res + '</span><span class="kbs">' + bx + '</span></div><p><b class="dlb">Beschreibung:</b> ' + md(v.besch || "") + '</p><b class="dlb">Ereignisse:</b><ol class="dee">' + (v.erg || []).map(function(e, i){ return '<li class="' + (d[v.id + i] ? "ok" : "") + '" onclick="dkErg(\'' + v.id + i + '\')">' + md(e) + "</li>"; }).join("") + "</ol>" + (v.verb ? '<p><b class="dlb">Verbindung:</b> ' + md(v.verb) + "</p>" : "") + '<button class="dkbtn" onclick="dkExpedition(' + K.n + ",'" + v.id + '\')">Auf die Expedition</button></div></div>';
}
function lmSeite(l){
  if(!l) return "";
  function z(k, v){ return v ? '<div><b>' + k + ":</b> " + v + "</div>" : ""; }
  var kopf = '<div class="dlkopf"><h1 class="dlplatte">' + esc(l.t) + "</h1>" + pg(l.p) + '<div class="dlwerte">' + z("Domains", esc((l.dom || []).join(", "))) + z("Tiefe", esc(l.tiefeText || (l.tiefe === "risse" ? "Risse" : l.tiefe))) + z("Standard-Stress", esc(l.stress || "")) + z("Haunts", (l.haunts || []).map(md).join("; ")) + "</div></div>";
  var re = ((l.ressourcen || []).length ? '<h3 class="dlab">Ressourcen</h3><ul class="lst">' + l.ressourcen.map(function(x){ return "<li>" + md(x) + "</li>"; }).join("") + "</ul>" : "") + ((l.plots || []).length ? '<h3 class="dlab">Mögliche Plots</h3><ul class="lst">' + l.plots.map(function(x){ return "<li>" + md(x) + "</li>"; }).join("") + "</ul>" : "");
  var breit = false, bild = dbild(DART.lm[l.id], l.id === "grinding-halls" ? "r weit" : "r");
  return '<div class="dlm seite"><div class="dlmc' + (re ? "" : " eins") + '"><div class="dltext">' + (breit ? kopf + bild : bild + kopf) + bls(l.text) + (l.unter || []).map(function(u){ return '<h3 class="dlab">' + esc(u.t) + "</h3>" + bls(u.b); }).join("") + bls(l.regeln) + '</div><div class="dlmr">' + re + "</div></div>" + (l.figuren || []).map(fig).join("") + "</div>";
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
  if(dk().cur !== +n){ dk().cur = +n; save(); }
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
  var hero = document.querySelector(".dhero");
  if(hero && innerWidth > 1000) hero.querySelectorAll(".dhbox").forEach(function(bx){
    if(bx.dataset.fit){ var vv = bx.querySelector(".dhv"), ff = innerWidth * 0.014; vv.style.fontSize = ff + "px"; while(bx.scrollHeight > bx.clientHeight + 1 && ff > 10){ ff -= 0.25; vv.style.fontSize = ff + "px"; } return; }
    var b = +bx.dataset.b; if(!b) return; var max = hero.clientHeight * (b - bx.dataset.t) / 100, v = bx.querySelector(".dhv"); if(!v) return;
    var f = innerWidth * 0.0135; v.style.fontSize = f + "px";
    while(bx.offsetHeight > max && f > 11){ f -= 0.5; v.style.fontSize = f + "px"; }
  });
  var ka = document.querySelector(".dkarte"), on = ka && ka.querySelector(".dnode.on,.ddelve.on"); if(on) ka.scrollLeft = on.offsetLeft - ka.clientWidth / 2;
  if(/^#dagger/.test(location.hash)){ var rt = document.querySelector(".dkgrid,.dlm,.dkseite"); if(rt) document.querySelectorAll(".dkgrid,.dlm,.dkseite").forEach(handChips); }
  var img = document.querySelector(".brand img"); if(!img) return;
  var d = /^#dagger/.test(location.hash);
  img.src = d ? "img/dagger/logo-zeile-hell.svg" : "../assets/logos/heart.webp";
  img.classList.toggle("dagger", d);
};
})();
