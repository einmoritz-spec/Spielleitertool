/* Bereich Oddpendium: Würfeltabellen als Raster */
var OSUB = [["einl","Einleitung"],["bastion","Bastion"],["leute","Leute"],["wesen","Wesen"],["kulte","Kulte"],["erkund","Erkundung"],["dinge","Dinge"],["gruppen","Gruppen"]];
var OCOL = ["var(--pink)","var(--orange)","var(--teal)","var(--blue)","#c9a24a"];
function tbl(t, i, die){
  var rows = t.r.map(function(x){ return x.split("|"); }), nc = t.h.length - 1, mx = 0;
  rows.forEach(function(r){ var l = r.slice(1).join(" ").length; if (l > mx) mx = l; });
  var cols = nc >= 5 ? 1 : mx > 95 ? 1 : (mx > 40 || nc >= 2) && rows.length > 6 ? 2 : rows.length > 12 ? 3 : 1;
  if (nc >= 3 && nc < 5) cols = 1;
  var g = "grid-template-columns:62px repeat(" + nc + ",1fr)";
  var d = t.w || die || "";
  var n = Math.ceil(rows.length / cols), parts = [];
  for (var k = 0; k < cols; k++) {
    var ch = rows.slice(k * n, (k + 1) * n); if (!ch.length) continue;
    parts.push('<div><div class="th" style="' + g + '">' + t.h.map(function(h){ return '<span>' + esc(h) + '</span>'; }).join("") + '</div>' + ch.map(function(r){ return '<div class="r" style="' + g + '">' + r.map(function(c, q){ return q ? '<span>' + esc(c) + '</span>' : '<b>' + esc(c) + '</b>'; }).join("") + '</div>'; }).join("") + '</div>');
  }
  return '<div class="tb" style="--c:' + OCOL[(i || 0) % 5] + '"><h4>' + esc(t.t) + (d ? ' <i class="dd">' + d + '</i>' : "") + (t.p ? pgl(t.p) : "") + '</h4><div class="tr" style="grid-template-columns:repeat(' + cols + ',1fr)">' + parts.join("") + '</div>' + (t.note ? '<p class="tn">' + esc(t.note) + '</p>' : "") + '</div>';
}
function tbls(L, off){ return L.map(function(t, i){ return tbl(t, i + (off || 0)); }).join(""); }
function oEinl(){
  var o = ITO.odd.intro;
  return '<div class="rp"><div class="split l"><div class="sp-img"><img src="' + IMG("arcana-kugel") + '" alt=""></div><div>' + head("Anhang", o.t, o.p) + '<div class="lead">' + o.x.map(function(x, i){ return '<p class="' + (i === 0 ? "first" : "") + '">' + esc(x) + '</p>'; }).join("") + '</div></div></div>' +
    '<div class="g2" style="clear:both;margin-top:24px">' + o.s.map(function(x, i){ return def(x[0], x[1], "", OCOL[i]); }).join("") + '</div></div>';
}
function oSeite(lbl, t, p, body){ return '<div class="rp">' + head(lbl, t, p) + body + '</div>'; }
function oBastion(){ return oSeite("Tabellen", "Bastion", "S. 117", '<div class="tbs">' + tbls(ITO.odd.bastion) + '</div>'); }
function oLeute(){ return oSeite("Tabellen", "Schar der Tausende", "S. 118", '<div class="tbs">' + tbls(ITO.odd.leute) + '</div>'); }
function oWesen(){ return oSeite("Tabellen", "Seltsame Kreaturen", "S. 126", '<div class="tbs">' + tbls(ITO.odd.wesen) + '</div>'); }
function oKulte(){ return oSeite("Tabellen", "Sternkulte", "S. 128", '<div class="tbs">' + tbls(ITO.odd.kulte) + '</div>'); }
function oErkund(){ return oSeite("Tabellen", "Erkundung", "S. 130", '<div class="tbs">' + tbls(ITO.odd.erkund) + '</div>'); }
function oDinge(){ return oSeite("Tabellen", "Seltsame Dinge", "S. 133", '<div class="tbs">' + tbls(ITO.odd.zeug) + tbls(ITO.odd.arc, 1) + '</div>'); }
function oGruppen(){
  var g = ITO.odd.gruppen, h = "";
  function kop(x, c){ return '<h3 class="gh" style="--c:' + c + '">' + esc(x.t) + pgl(x.p) + '</h3><p class="lead one">' + esc(x.s) + '</p>' + (x.x ? '<p class="note">' + esc(x.x) + '</p>' : ""); }
  h += '<p class="lead one">' + esc(g.intro) + '</p>';
  h += kop(g.mut, OCOL[0]) + '<div class="tbs">' + tbl({t:"Startpakete", h:g.mut.tab.h, r:g.mut.tab.r}, 0) + '</div><p class="note">' + esc(g.mut.fort) + '</p><div class="tbs">' + tbl(g.mut.mt, 1) + '</div>';
  h += kop(g.einf, OCOL[1]) + '<div class="tbs">' + tbl({t:"Startpakete", h:g.einf.tab.h, r:g.einf.tab.r}, 1) + tbl(g.einf.tr, 2) + '</div>';
  h += kop(g.unm, OCOL[2]) + '<div class="tbs">' + tbl(g.unm.typen, 2) + tbl(g.unm.pak, 3) + tbl(g.unm.mein, 4) + '</div>';
  h += kop(g.alt, OCOL[3]) + '<div class="tbs">' + tbl({t:"Alternative Startpakete", h:g.alt.tab.h, r:g.alt.tab.r}, 3) + '</div>';
  return oSeite("Spielerwahl", "Alternative Gruppen", "S. 136", h);
}
function viewOdd(sub){
  var P = {einl:oEinl, bastion:oBastion, leute:oLeute, wesen:oWesen, kulte:oKulte, erkund:oErkund, dinge:oDinge, gruppen:oGruppen};
  sub = P[sub] ? sub : "einl";
  return subbar(OSUB, sub, "oddpendium") + P[sub]();
}
