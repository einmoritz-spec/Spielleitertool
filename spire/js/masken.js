/* THE SPIRE – Buch der Masken (Zusatzbuch „The Book of Masks“). Route #masken[/<maske>|fortschritte|ausruestung].
   Katalog: Kopf, Übersicht (Raster aller 22 Masken), Vorwort, vier Abschnitte mit allen Masken (Bild neben Text, Regel als Karte),
   Baum links (einklappbar), Reiter Fortschritte und Ausrüstung als Kartenraster. Daten: SP_MASKEN (data/masken-*.js). Seiten = Buchseiten (Bookviewer sp_z1). */
function mkPg(p){ return pgl(p, "z1", "S. " + p); }
function mkImg(n){ return "img/masken/" + n + ".webp"; }
/* Beschriftung der Regelkarte wie im Buch */
function mkArt(r){
  if(r.art === "fortschritt") return (r.stufe === "mittel" ? "Mittlerer " : "Niedriger ") + (r.klasse ? r.klasse + "-" : "") + "Fortschritt";
  return r.art === "szene" ? "Szene" : "Ausrüstung";
}
function mkAlle(){
  var out = [];
  SP_MASKEN.abschnitte.forEach(function(a){ a.masken.forEach(function(m){ out.push({m: m, a: a}); }); });
  return out;
}
/* Regelkarte: Ausrüstung / Fortschritt / Szene */
function mkRegel(r, opt){
  opt = opt || {};
  var tags = (r.tags || []).map(function(t){ return '<span class="chip' + (/^W\d/.test(t) ? ' w' : '') + '"' + (window.tagAttr ? tagAttr(t) : '') + '>' + esc(t) + '</span>'; }).join("");
  var txt = [].concat(r.x).map(function(x){ return "<p>" + md(x) + "</p>"; }).join("");
  var ver = (r.ver || []).map(function(v){ return '<span class="chip" onclick="go(\'' + v[1] + '\')">' + esc(v[0]) + '</span>'; }).join("");
  return '<aside class="mk-regel ' + r.art + (opt.id ? '" id="' + opt.id : '') + '"><div class="mk-rk"><span class="mk-art">' + mkArt(r) + '</span>' + (opt.nopg ? '' : mkPg(r.p)) + '</div>' +
    '<h4>' + esc(r.t) + '</h4>' + (opt.von ? '<div class="mk-von2">' + opt.von + '</div>' : '') + (tags ? '<div class="mk-tags">' + tags + '</div>' : '') +
    (r.fl ? '<p class="mk-fl"><i>' + md(r.fl) + '</i></p>' : '') + txt + (ver ? '<div class="mk-tags">' + ver + '</div>' : '') + '</aside>';
}
/* Kasten „Das könnte Sie auch interessieren“ */
function mkMehr(x){
  return '<aside class="mk-mehr"><div class="mk-mk">Das könnte Sie auch interessieren</div><p><b>' + esc(x.t) + '.</b> ' + md(x.x) + '</p></aside>';
}
function mkBild(n, t){ return '<img class="mk-img" src="' + mkImg(n) + '" alt="' + esc(t) + '" loading="lazy" onclick="zoom(this.src)">'; }
function mkAbsaetze(L){ return L.map(function(x, i){ return '<p' + (i === 0 ? ' class="dc"' : '') + '>' + md(x) + '</p>'; }).join(""); }

/* Länge der Texte (Zeichen) – bestimmt, ob die Regelkarte unter dem Bild (statt unter dem Text) steht, damit beide Spalten gleich hoch werden */
function mkLen(x){ return JSON.stringify(x || "").length; }
function mkRegelLinks(m){
  if(!m.regel) return false;
  var up = function(n, d){ return Math.ceil(n / d); };
  var txt = up(mkLen(m.b), 86) * 24.75 + m.b.length * 10 + 70, rg = mkLen([m.regel.fl, m.regel.x]), mehr = m.mehr ? up(mkLen(m.mehr.x), 38) * 21 + 90 : 0;
  var kR = up(rg, 82) * 22.5 + 125, kL = up(rg, 38) * 22.5 + 125, bild = Math.min(430, 320 * (SP_MASKEN.ar[m.img] || 1));
  var rechts = Math.max(txt + kR + 14, bild + 20 + mehr), links = Math.max(txt, bild + 20 + mehr + 20 + kL);
  return links < rechts - 40;
}
/* Eine Maske als Blatt: Bild (mit Kasten) neben dem Text, Regelkarte darunter bzw. rechts */
function mkBlatt(m, i){
  var rev = i % 2 ? " mr" : "";
  if(m.sub) return mkHimmel(m, i);
  var rl = mkRegelLinks(m);
  return '<article class="mk-blatt b' + (i % 4 + 1) + rev + (rl ? ' rl' : '') + '" id="ab-' + m.id + '">' +
    '<div class="mk-bild">' + mkBild(m.img, m.t) + (m.mehr ? mkMehr(m.mehr) : '') + (rl ? mkRegel(m.regel) : '') + '</div>' +
    '<div class="mk-text"><h3 class="mk-name">' + esc(m.t) + mkPg(m.p) + '</h3>' + mkAbsaetze(m.b) + '</div>' +
    (m.regel && !rl ? '<div class="mk-rg">' + mkRegel(m.regel) + '</div>' : '') + '</article>';
}
/* Himmelsmasken: Einleitung, vier Masken nebeneinander, eine gemeinsame Regelkarte */
function mkHimmel(m, i){
  return '<article class="mk-blatt hi b' + (i % 4 + 1) + '" id="ab-' + m.id + '">' +
    '<h3 class="mk-name">' + esc(m.t) + mkPg(m.p) + '</h3><div class="mk-hi-einl">' + mkAbsaetze(m.b) + '</div>' +
    '<div class="mk-subs">' + m.sub.map(function(s){
      return '<section class="mk-sub" id="ab-' + s.id + '">' + mkBild(s.img, s.t) + '<div><h4>' + esc(s.t) + mkPg(s.p) + '</h4><p class="oder"><i>' + esc(s.oder) + '</i></p><p>' + md(s.x) + '</p></div></section>';
    }).join("") + '</div>' +
    (m.regel ? '<div class="mk-rg">' + mkRegel(m.regel) + '</div>' : '') + '</article>';
}
/* Übersicht: alle Masken als Kacheln, nach Abschnitten */
function mkUebersicht(){
  return '<section class="mk-ueb" id="ab-uebersicht">' + SP_MASKEN.abschnitte.map(function(a){
    var T = [];
    a.masken.forEach(function(m){
      if(m.sub) m.sub.forEach(function(s){ T.push({id: s.id, t: s.t, img: s.img, l: mkArt(m.regel)}); });
      else T.push({id: m.id, t: m.k || m.t, img: m.img, l: mkArt(m.regel)});
    });
    return '<div class="mk-uz"><h2 onclick="jump(\'ab-' + a.id + '\')">' + esc(a.t) + '</h2><div class="mk-tiles">' + T.map(function(t){
      return '<a class="mk-tile" onclick="jump(\'ab-' + t.id + '\')"><span class="ti"><img src="' + mkImg(t.img) + '" alt="" loading="lazy"></span><b>' + esc(t.t) + '</b><small>' + esc(t.l) + '</small></a>';
    }).join("") + '</div></div>';
  }).join("") + '</section>';
}
function mkKopf(){
  var M = SP_MASKEN;
  return '<article class="mk-blatt mk-hero b2" id="ab-anfang"><img class="mk-cover" src="' + mkImg("titel") + '" alt="' + esc(M.t) + '" onclick="zoom(this.src)">' +
    '<div class="mk-kopf"><h1>' + esc(M.t) + '</h1><div class="mk-en">' + esc(M.en) + mkPg(M.p) + '</div>' +
    '<div class="mk-von">' + md(M.von) + '</div><div class="mk-mit">' + esc(M.mit) + '<br>' + esc(M.fuer) + '</div>' +
    '<div class="mk-einl">' + M.einl.b.map(function(x){ return '<p>' + md(x) + '</p>'; }).join("") + mkPg(M.einl.p) + '</div></div></article>';
}
function mkVorwort(){
  var V = SP_MASKEN.vorwort;
  return '<article class="mk-blatt mk-vor b3" id="ab-vorwort"><h2 class="mk-h">' + esc(V.t) + mkPg(V.p) + '</h2><div class="mk-brief">' +
    V.b.map(function(x, i){ return '<p' + (i === 1 ? ' class="dc"' : '') + '>' + md(x) + '</p>'; }).join("") +
    '<div class="mk-gruss">' + V.gruss.map(function(g, i){ return i ? '<span class="sig">' + esc(g) + '</span>' : '<span>' + esc(g) + '</span>'; }).join("<br>") + '</div></div></article>';
}
function mkBanner(a){
  return '<div class="mk-banner" id="ab-' + a.id + '"><span class="ln"></span><h2>' + esc(a.t) + '</h2><span class="ln"></span>' + (a.u ? '<div class="u">' + esc(a.u) + '</div>' : '') + mkPg(a.p) + '</div>';
}
function mkSide(){
  var M = SP_MASKEN, L = function(id, t, sub){ return '<a' + (sub ? ' class="sub"' : '') + ' data-j="ab-' + id + '" onclick="jump(\'ab-' + id + '\')">' + esc(t) + '</a>'; };
  var h = '<h5 onclick="scrollTo({top:0,behavior:\'smooth\'})">Buch der Masken</h5>' + L("uebersicht", "Übersicht") + L("vorwort", M.vorwort.t);
  M.abschnitte.forEach(function(a){
    h += '<h5 onclick="jump(\'ab-' + a.id + '\')">' + esc(kurz(a.t)) + '</h5>';
    a.masken.forEach(function(m){ h += L(m.id, m.k || m.t); if(m.sub) m.sub.forEach(function(s){ h += L(s.id, s.t, 1); }); });
  });
  return h;
}
function mkTabs(cur){ return tabs([["masken", "Katalog"], ["masken/fortschritte", "Fortschritte"], ["masken/ausruestung", "Ausrüstung"]], cur, "masken"); }

function mkKatalog(anker){
  ST_ANKER = anker || null;
  var n = 0, M = SP_MASKEN;
  var body = '<div class="mk" data-pgbook="sp_z1">' + mkKopf() + mkUebersicht() + mkVorwort() +
    M.abschnitte.map(function(a){ return mkBanner(a) + a.masken.map(function(m){ return mkBlatt(m, n++); }).join(""); }).join("") + '</div>';
  return mkTabs("masken") + lay(mkSide(), body, false);
}
/* Karten-Raster: Fortschritte bzw. Ausrüstung (mit Szene), mit kleinem Bild und Verweis auf die Maske */
function mkKarteMaske(m, a){
  var r = m.regel, B = m.sub ? m.sub.map(function(s){ return s.img; }) : [m.img];
  var von = B.map(function(b){ return '<img src="' + mkImg(b) + '" alt="" loading="lazy">'; }).join("");
  return '<div class="mk-kk ' + r.art + (B.length > 1 ? ' viele' : '') + '"><a class="mk-kb" onclick="go(\'masken/' + m.id + '\')" title="' + esc(m.t) + '">' + von + '</a>' +
    mkRegel(r, {nopg: 1, von: '<a onclick="go(\'masken/' + m.id + '\')">' + esc(m.t) + '</a>' + mkPg(r.p)}) + '</div>';
}
function mkListe(art){
  var A = mkAlle().filter(function(x){ return x.m.regel && (art === "fortschritt" ? x.m.regel.art === "fortschritt" : x.m.regel.art !== "fortschritt"); });
  var T = '<div class="mk mk-liste" data-pgbook="sp_z1">';
  if(art === "fortschritt"){
    [["niedrig", "Niedrige Fortschritte"], ["mittel", "Mittlere Fortschritte"]].forEach(function(s){
      T += '<h2 class="mk-h2">' + s[1] + '</h2><div class="raster r2 mk-kr">' + A.filter(function(x){ return x.m.regel.stufe === s[0]; }).map(function(x){ return mkKarteMaske(x.m, x.a); }).join("") + '</div>';
    });
  } else {
    var sz = A.filter(function(x){ return x.m.regel.art === "szene"; }), au = A.filter(function(x){ return x.m.regel.art === "ausruestung"; });
    T += '<h2 class="mk-h2">Ausrüstung</h2><div class="raster r2 mk-kr">' + au.map(function(x){ return mkKarteMaske(x.m, x.a); }).join("") + '</div>' +
      '<h2 class="mk-h2">Szene</h2><div class="raster r2 mk-kr">' + sz.map(function(x){ return mkKarteMaske(x.m, x.a); }).join("") + '</div>';
  }
  return T + '</div>';
}
SP_VIEW.masken = function(teile){
  var id = teile[0];
  if(id === "fortschritte") return mkTabs("masken/fortschritte") + voll(mkListe("fortschritt"), false);
  if(id === "ausruestung") return mkTabs("masken/ausruestung") + voll(mkListe("ausruestung"), false);
  return mkKatalog(id);
};

(window.SP_SUCHE = window.SP_SUCHE || []).push(function(add){
  var M = SP_MASKEN;
  add(M.t + " (" + M.en + ")", "Buch der Masken", "masken", 1, [M.einl, M.von, M.mit, M.fuer], "z1");
  add(M.vorwort.t, "Buch der Masken", "masken/vorwort", M.vorwort.p, [M.vorwort.b, M.vorwort.gruss], "z1");
  M.abschnitte.forEach(function(a){
    add(a.t, "Buch der Masken", "masken", null, [a.u, a.masken.map(function(m){ return m.t; })], "z1");
    a.masken.forEach(function(m){
      add(m.t, "Buch der Masken · " + a.t, "masken/" + m.id, m.p, [m.b, m.regel, m.mehr, m.sub], "z1");
      if(m.regel) add(m.regel.t, "Buch der Masken · " + mkArt(m.regel), "masken/" + m.id, m.regel.p, [m.t, m.regel], "z1");
    });
  });
});
