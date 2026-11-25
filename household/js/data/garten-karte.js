/* Garten › Welt › Der Garten › Karte: anklickbare Outhold-Karte links, Gebietstext rechts; Reisekarte als eigene Seite */
(function(){
window.HH_INH = window.HH_INH || {};
var KARTE = "garten-s153-karte-des-gartens-the-outhold-frei";
var VB = [754, 1060];
/* id → Knopfname, Fläche auf der Karte (Koordinaten im Raster 754×1060) */
var REG = [
 {id: "outhold", n: "The Outhold"},
 {id: "frontier", n: "The Frontier"},
 {id: "underground", n: "The Underground"},
 {id: "frontyard", n: "The Front Yard", p: [[80,470],[300,460],[430,470],[470,520],[720,530],[730,800],[620,990],[380,1000],[200,990],[60,850],[40,650]], l: [150,560]},
 {id: "brambles", n: "The Brambles", p: [[430,530],[700,535],[705,710],[560,725],[430,660]], l: [575,560]},
 {id: "woodlands", n: "The Woodlands", p: [[50,440],[230,420],[300,600],[300,680],[220,745],[110,765],[50,690]], l: [215,430]},
 {id: "barrens", n: "The Barrens", p: [[80,740],[330,730],[360,790],[350,870],[160,880],[95,830]], l: [215,740]},
 {id: "grasslands", n: "The Grasslands", p: [[370,720],[690,730],[700,880],[600,950],[470,965],[300,965],[215,930],[215,880],[360,880]], l: [530,810]},
 {id: "backyard", n: "The Backyard", p: [[120,200],[300,185],[450,190],[600,200],[660,330],[650,440],[500,450],[300,440],[130,430],[80,330]], l: [300,300]},
 {id: "rushes", n: "The Rushes", p: [[195,205],[340,200],[485,215],[510,320],[480,425],[380,440],[310,370],[235,350],[195,300]], l: [350,260]},
 {id: "fouroaks", n: "Four Oaks", p: [[515,295],[700,300],[710,440],[690,520],[560,515],[520,430]], l: [610,340]}
];
function ohneKarte(list){
  return list.map(function(e){
    if(e.id !== "outhold") return e;
    var c = {}; for(var k in e) c[k] = e[k];
    c.b = e.b.filter(function(x){ return !(x && x.t === "bild" && String(x.s).indexOf("s153-karte") > -1); });
    return c;
  });
}
function karteSeite(P){
  var tx = HH_TEXT["garten/welt/garten"] || [], sel = P.sel || "outhold";
  var flaechen = "", label = "", knoepfe = "", dim = "";
  REG.forEach(function(r){
    var on = r.id === sel;
    if(r.p) flaechen += '<polygon class="gkt-f' + (on ? ' on' : '') + '" points="' + r.p.map(function(q){ return q.join(","); }).join(" ") + '" onclick="go(\'g/welt/garten/karte/' + r.id + '\')"><title>' + esc(r.n) + '</title></polygon>';
    if(on && r.p) dim = '<path class="gkt-dim" fill-rule="evenodd" d="M0 0H' + VB[0] + 'V' + VB[1] + 'H0Z M' + r.p.map(function(q){ return q.join(" "); }).join("L") + 'Z"/>';
    if(on && r.l) label = '<div class="gkt-l" style="left:' + (r.l[0] / VB[0] * 100).toFixed(2) + '%;top:' + (r.l[1] / VB[1] * 100).toFixed(2) + '%">' + esc(r.n) + '</div>';
    knoepfe += '<a class="' + (on ? 'on' : '') + '" onclick="go(\'g/welt/garten/karte/' + r.id + '\')">' + esc(r.n) + '</a>';
  });
  return '<div class="gkt"><div class="gkt-l-sp"><div class="gkt-map"><img src="' + IMGP(KARTE) + '" alt="Karte des Outhold">' +
    '<svg style="-webkit-mask-image:url(' + IMGP(KARTE) + ');mask-image:url(' + IMGP(KARTE) + ')" viewBox="0 0 ' + VB[0] + ' ' + VB[1] + '" preserveAspectRatio="none">' + dim + flaechen + '</svg>' + label + '</div>' +
    '<div class="gkt-kn">' + knoepfe + '</div></div>' +
    '<div class="gkt-r">' + textSeite(P, ohneKarte(tx), "hh_r1") + '</div></div>';
}
karteSeite.solo = true;
HH_INH["garten/welt/garten/karte"] = karteSeite;
function reiseSeite(P){
  return '<div class="sec txt"><h2>Reisekarte' + pgl("hh_r1", 241) + '</h2><figure class="fig voll"><img src="' + IMGP("garten-s241-reisekarte-des-gartens-the-outhold") + '" alt="Reisekarte des Outhold"></figure></div>';
}
reiseSeite.solo = true;
HH_INH["garten/welt/garten/reisekarte"] = reiseSeite;
})();
