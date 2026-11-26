/* THE SPIRE – Klassen (S. 25–68) und Extra-Fortschritte (S. 69–76).
   Daten: SP_KLASSE (klasse-<id>.js), SP_EXTRA (extra-a/-b.js), SP_CHARAKTERE (klassen-charaktere.js).
   Routen: #nach/klassen (Übersicht, Entwurf 7) · #nach/klassen/<id> (Klassenseite, Entwurf 8) · #nach/extra[/<weg>] */
window.SP_NACH_VIEW = window.SP_NACH_VIEW || {};

/* ---------- Bausteine ---------- */
/* Klammern mit Waffen-/Rüstungswerten in der Ausrüstung als Chips: (W3, Brutal) → [W3] [Brutal] */
function klChips(x){
  return md(x).replace(/\(([^()]+)\)/g, function(all, inner){
    var parts = inner.split(/,\s*/), out = [];
    for(var i = 0; i < parts.length; i++){
      var p = parts[i].replace(/^Schaden /, "").trim();
      if(/^W\d+$/.test(p)) out.push('<span class="chip w">' + p + '</span>');
      else if(/^Rüstung \d+$/.test(p) || (window.tagTip && tagTip(p))) out.push('<span class="chip"' + tagAttr(p) + '>' + esc(p) + '</span>');
      else return all;
    }
    return out.join("");
  });
}
function klAusr(L){
  var h = "", ul = false;
  L.forEach(function(a){
    if(a.k === "pkt"){ if(!ul){ h += '<ul class="pkt">'; ul = true; } h += "<li>" + klChips(a.x) + "</li>"; return; }
    if(ul){ h += "</ul>"; ul = false; }
    h += a.k === "lbl" ? '<div class="kl-or">' + esc(a.x) + "</div>" : "<p>" + md(a.x) + "</p>";
  });
  return h + (ul ? "</ul>" : "");
}
function klLen(a){ return JSON.stringify(a.x).length + (a.fl ? a.fl.length : 0); }
/* Fähigkeitskarte: Name · Tag · Seite, Flavour kursiv, Buchtext */
function klKarte(a, buch, basis){
  var br = klLen(a) > 1100 || JSON.stringify(a.x).indexOf('"tbl"') >= 0;
  return '<div class="kf' + (br ? ' br' : '') + '"' + (basis ? ' style="flex-basis:' + basis + '"' : '') + '><h4>' + esc(a.t) + (a.tag ? '<span class="tag g">' + esc(a.tag) + '</span>' : '') + (a.p ? pgl(a.p, buch) : '') + '</h4>' +
    (a.fl ? '<p class="fl">' + md(a.fl) + '</p>' : '') + blk(a.x) + '</div>';
}
function klKern(L, buch){
  var n = L.length, b = n <= 3 ? "calc(" + (100 / n).toFixed(3) + "% - 11px)" : "";
  return '<div class="kfs">' + L.map(function(a){ return klKarte(a, buch, b); }).join("") + '</div>';
}
var KL_STUFE = {niedrig:"Niedrig", mittel:"Mittel", hoch:"Hoch"};
/* Fortschritte je Stufe als Zeile: Etikett links (bleibt beim Scrollen stehen), Karten rechts; Kästen der Stufe darunter */
function klFort(F, intro, hinweis, boxen, buch){
  return ["niedrig", "mittel", "hoch"].filter(function(g){ return F[g] && F[g].length; }).map(function(g){
    var kasten = (boxen || []).filter(function(b){ return b.nach === g || b.grp === g; });
    return '<div class="kf-zeile"><div class="kf-lab"><span>' + KL_STUFE[g] + '</span></div><div class="kf-rechts">' +
      (intro && intro[g] ? '<p class="kf-intro">' + md(intro[g]) + '</p>' : '') +
      '<div class="kfs">' + F[g].map(function(a){ return klKarte(a, buch); }).join("") + '</div>' +
      (hinweis && hinweis[g] ? '<p class="kf-intro">' + md(hinweis[g]) + '</p>' : '') +
      kasten.map(function(b){ return blk([{t:"schwarz", h:b.h, b:b.b}]); }).join("") + '</div></div>';
  }).join("");
}
function klById(id){ var r = null; (window.SP_KLASSE || []).forEach(function(k){ if(k.id === id) r = k; }); return r; }
function klKurz(k){ var s = String(k.intro[0] || "").replace(/\*/g, ""), m = s.match(/^.{20,70}?(?:[ ,](?=\S))/); var t = s.length > 70 ? s.slice(0, 70).replace(/\s+\S*$/, "") + " …" : s; return t; }

var MG_BILD = ["gutter-cleric", "blood-witch", "inksmith", "mortician-executioner", "shadow-agent"];
/* ---------- Übersicht (Entwurf 7) ---------- */
function klKachel(k){
  return '<div class="kl-t" onclick="go(\'nach/klassen/' + k.id + '\')"><span class="im"><img src="' + IMG("klasse/" + k.id) + '" alt="" loading="lazy"></span><span class="tx"><b>' + esc(k.t) + '</b><small>' + esc(klKurz(k)) + '</small>' + pgl(k.p) + '</span></div>';
}
function klMgKachel(id){
  var M = SP_MG[id], bild = MG_BILD.indexOf(id) >= 0, ini = M.t.split(/[\s-]+/).map(function(w){ return w.charAt(0); }).join("").slice(0, 2).toUpperCase();
  var kurz = String(M.intro[0] || "").replace(/\*/g, ""); kurz = kurz.length > 70 ? kurz.slice(0, 70).replace(/\s+\S*$/, "") + " …" : kurz;
  return '<div class="kl-t mg" onclick="go(\'nach/klassen/' + id + '\')"><span class="im">' + (bild ? '<img src="' + IMG("klasse/" + id) + '" alt="" loading="lazy">' : '<i>' + ini + '</i>') + '</span><span class="tx"><b>' + esc(M.t) + '</b><small>' + esc(kurz) + '</small>' + pgl(M.p, "gm") + '</span></div>';
}
function klDienst(D){
  var wert = function(w){ return w ? w.split(/,\s*/).map(function(x){ return '<span class="chip' + (/^\+/.test(x) ? ' w' : '') + '">' + esc(x) + '</span>'; }).join("") : ""; };
  return '<p class="einl">' + md(D.intro) + '</p><div class="raster r4 kl-dz">' + D.x.map(function(d){
    return '<div class="karte"><h4>' + esc(d.t) + pgl(d.p) + '</h4><div>' + wert(d.w) + '</div><p>' + md(d.x) + '</p></div>';
  }).join("") + '</div><p class="einl" style="margin-top:14px">' + md(D.oderT || "") + '</p><div class="raster r3 kl-dz">' + D.oder.map(function(d){
    return '<div class="karte"><h4>' + esc(d.t) + pgl(d.p) + '</h4><div>' + wert(d.w) + '</div></div>';
  }).join("") + '</div>';
}
function klUebersicht(){
  var C = window.SP_CHARAKTERE, A = C.abschnitte, ab = function(id){ return A.filter(function(x){ return x.id === id; })[0]; };
  var kurz = ["so-erschaffst-du-einen-charakter", "so-steigt-ein-charakter-auf", "multiclassing"].map(ab).filter(Boolean);
  var dz = ab("dienstzeit");
  var kasten = dz.b.filter(function(b){ return b && b.t === "schwarz"; }), text = dz.b.filter(function(b){ return !(b && b.t === "schwarz"); });
  var body = '<h1 class="titel">Klassen' + pgl(25) + '</h1>' +
    '<div class="kl-grid">' + SP_KLASSE.map(klKachel).join("") + KL_MG_ONLY.filter(function(id){ return window.SP_MG && SP_MG[id] && !klById(id); }).map(klMgKachel).join("") + '</div>' +
    '<h2 class="ab" id="ab-charaktere">Charaktere' + pgl(25) + '</h2>' +
    '<div class="raster r3 kl-kurz">' + kurz.map(function(s){ return '<div class="karte"><h4>' + esc(s.t.charAt(0) + s.t.slice(1).toLowerCase()) + pgl(s.p) + '</h4>' + blk(s.b) + '</div>'; }).join("") + '</div>' +
    '<h2 class="ab" id="ab-dienstzeit">Dienstzeit' + pgl(25) + '</h2>' +
    '<div class="kl-dtxt">' + blk(text) + '</div>' + klDienst(C.dienst) +
    '<div class="raster r2 kl-box">' + kasten.map(function(b){ return blk([b]); }).join("") + '</div>';
  return body;
}

/* ---------- Klassenseite (Entwurf 8) ---------- */
var KL_MG_ONLY = ["blood-witch", "gutter-cleric", "inksmith", "mortician-executioner", "shadow-agent"];
var KL_MG_KURZ = {"mortician-executioner":"Mortician"};
function klSubtabs(cur){
  return '<div class="subtabs kl-st">' + SP_KLASSE.map(function(k){ return '<a class="' + (k.id === cur ? 'on' : '') + '" onclick="go(\'nach/klassen/' + k.id + '\')">' + esc(k.t) + '</a>'; }).join("") +
    KL_MG_ONLY.filter(function(id){ return window.SP_MG && SP_MG[id] && !klById(id); }).map(function(id){ return '<a class="mgt' + (id === cur ? ' on' : '') + '" onclick="go(\'nach/klassen/' + id + '\')">' + esc(KL_MG_KURZ[id] || SP_MG[id].t) + '</a>'; }).join("") + '</div>';
}
function klModus(id, mg){
  return '<div class="kp-modus"><a class="' + (mg ? '' : 'on') + '" onclick="go(\'nach/klassen/' + id + '\')">Klasse</a><a class="' + (mg ? 'on' : '') + '" onclick="go(\'nach/klassen/' + id + '/mg\')">Magister\'s Guide: Zusatz</a></div>';
}
/* ---------- Magister's Guide: Zusatz zur Klasse (MG S. 17–48) ---------- */
function klMgKarten(L){
  return '<div class="kfs">' + L.map(function(a){ return klKarte(a, "gm"); }).join("") + '</div>';
}
function klMgSeite(id){
  var M = SP_MG[id], K = klById(id), bild = (K || MG_BILD.indexOf(id) >= 0) ? IMG("klasse/" + id) : "";
  var nu = M.nuetz.length ? '<div class="violett kl-nuetz"><h4>Nützliche Elemente</h4><ul class="pkt">' + M.nuetz.map(function(x){ return "<li>" + md(x) + "</li>"; }).join("") + '</ul></div>' : '';
  var kopf = '<div class="kp-kopf' + (bild ? '' : ' ohne') + '">' + (bild ? '<img class="kp-bild" src="' + bild + '" alt="" onclick="zoom(this.src)">' : '') + '<div class="kp-tx">' + (K ? klModus(id, true) : '') +
    '<h1 class="titel">' + esc(M.t) + pgl(M.p, "gm") + '</h1>' + M.intro.map(function(x){ return '<p class="kp-intro">' + md(x) + '</p>'; }).join("") + '</div></div>' + nu;
  var sek = function(t, inner){ return inner ? '<h2 class="ab">' + esc(t) + '</h2>' + inner : ''; };
  var geg = M.gegner.length ? '<div class="raster r2 kl-geg"' + (M.gegner.length < 2 ? ' style="grid-template-columns:1fr"' : '') + '>' + M.gegner.map(function(g){ return window.gegnerKarte ? gegnerKarte(g, "mg") : ""; }).join("") + '</div>' : '';
  var fo = M.fallout.length ? '<div class="kfs">' + M.fallout.map(function(a){
    return '<div class="kf" style="flex-basis:calc(33.333% - 10px)"><h4>' + esc(a.t) + pgl(a.p, "gm") + '</h4>' + (a.tag ? '<div class="kf-tags">' + a.tag.split(/,\s*/).map(function(t){ return '<span class="chip">' + esc(t) + '</span>'; }).join("") + '</div>' : '') + (a.fl ? '<p class="fl">' + md(a.fl) + '</p>' : '') + blk(a.x) + '</div>'; }).join("") + '</div>' : '';
  return nachTabs("klassen") + klSubtabs(id) + voll('<div class="kp mgv" data-pgbook="sp_gm">' + kopf +
    sek("Fähigkeiten", M.faehig.length ? klMgKarten(M.faehig) : "") + sek("Ausrüstung", M.ausr.length ? klMgKarten(M.ausr) : "") + sek(M.besT || "Besondere Ausrüstung", M.bes.length ? klMgKarten(M.bes) : "") +
    sek("Gegenspieler", geg) + sek("Fallout", fo) + '</div>');
}
function klSeite(K){
  var kern = K.kern, kk = function(l, v){ return v ? '<div class="kk"><h5>' + l + '</h5><p>' + md(v) + '</p></div>' : ''; };
  var kopf = '<div class="kp-kopf"><img class="kp-bild" src="' + IMG("klasse/" + K.id) + '" alt="" onclick="zoom(this.src)"><div class="kp-tx">' + (window.SP_MG && SP_MG[K.id] ? klModus(K.id, false) : '') +
    '<h1 class="titel">' + esc(K.t) + pgl(K.p) + '</h1><p class="kp-zitat">' + md(K.zitat) + '</p>' + K.intro.map(function(x){ return '<p class="kp-intro">' + md(x) + '</p>'; }).join("") +
    '<div class="kp-kern">' + kk("Widerstände", kern.wid) + kk("Auffrischen", kern.auff) + kk("Fertigkeiten", kern.fert) + kk("Domänen", kern.dom) + '</div></div></div>' +
    '<div class="kp-bk"><div class="kk"><h5>Bindungen</h5><ul class="pkt">' + K.bind.map(function(x){ return "<li>" + md(x) + "</li>"; }).join("") + '</ul></div>' +
    '<div class="kk"><h5>Ausrüstung</h5>' + klAusr(K.ausr) + '</div></div>';
  var kb = (K.boxen || []).filter(function(b){ return b.nach === "kfae" || b.nach === "kern"; });
  return nachTabs("klassen") + klSubtabs(K.id) + voll('<div class="kp" data-pgbook="sp_cmf">' + kopf +
    '<h2 class="ab">Kernfähigkeiten</h2>' + klKern(K.kfae) + kb.map(function(b){ return blk([{t:"schwarz", h:b.h, b:b.b}]); }).join("") +
    '<h2 class="ab">Fortschritte</h2>' + klFort(K.fort, K.fortIntro, K.hinweis, K.boxen) + '</div>');
}
SP_NACH_VIEW.klassen = function(teile){
  var K = teile[0] && klById(teile[0]);
  if(teile[0] === "charaktere" || teile[0] === "dienstzeit") ST_ANKER = teile[0];
  if(K && teile[1] === "mg" && window.SP_MG && SP_MG[K.id]) return klMgSeite(K.id);
  if(K) return klSeite(K);
  if(teile[0] && window.SP_MG && SP_MG[teile[0]]) return klMgSeite(teile[0]);
  return nachTabs("klassen") + voll('<div class="kp kl-ue" data-pgbook="sp_cmf">' + klUebersicht() + '</div>');
};

/* ---------- Extra-Fortschritte ---------- */
function klTitel(t){ return String(t).toLowerCase().split(" ").map(function(w, i){ return (i && /^(von|der|die|das|des|und|zu)$/.test(w)) ? w : w.replace(/(^|-)([a-zäöü])/g, function(a, b, c){ return b + c.toUpperCase(); }); }).join(" "); }
function klExtraWeg(w){
  var X = window.SP_EXTRA, ck = function(l, v){ return v ? '<div class="kk"><h5>' + l + '</h5><p>' + md(v) + '</p></div>' : ''; };
  var kasten = (X.boxen || []).filter(function(b){ return b.nach === w.id && !b.grp; });
  return '<section id="ab-' + w.id + '"><h2 class="ab">' + esc(w.t) + pgl(w.p) + '</h2>' +
    (w.ein || []).map(function(x){ return '<p class="kp-intro">' + md(x) + '</p>'; }).join("") +
    '<div class="kp-kern kp-ex">' + ck("Voraussetzung", w.vor) + ck("Auffrischen", w.auff) + '</div>' +
    (w.info || []).map(function(x){ return '<p class="kp-intro">' + md(x) + '</p>'; }).join("") +
    (w.tab ? blk([{t:"w10", h:"Vys-Fortschritte", id:"vyskant", rows:w.tab}]) : '') +
    klFort(w.fort, null, null, (X.boxen || []).filter(function(b){ return b.nach === w.id && b.grp; })) +
    kasten.map(function(b){ return blk([{t:"schwarz", h:b.h, b:b.b}]); }).join("") + '</section>';
}
SP_NACH_VIEW.extra = function(teile){
  var X = window.SP_EXTRA; nAnker("extra", teile);
  var side = '<h5 onclick="scrollTo({top:0,behavior:\'smooth\'})">Extra-Fortschritte</h5>' + X.wege.map(function(w, i){ return nLink({id:w.id, t:w.t, k:klTitel(w.t)}, i); }).join("");
  var body = '<div class="kp kl-ex"><h1 class="titel">Extra-Fortschritte' + pgl(69) + '</h1>' + X.intro.map(function(x){ return '<p class="einl">' + md(x) + '</p>'; }).join("") + X.wege.map(klExtraWeg).join("") + '</div>';
  return nSeite("extra", side, body);
};

/* ---------- Suche ---------- */
(window.SP_SUCHE = window.SP_SUCHE || []).push(function(add){
  var C = window.SP_CHARAKTERE; if(C){
    C.abschnitte.forEach(function(s){ add(s.t.charAt(0) + s.t.slice(1).toLowerCase(), "Klassen · Charaktere", "nach/klassen/" + (s.id === "dienstzeit" ? "dienstzeit" : "charaktere"), s.p, s.b); });
    add("Dienstzeit", "Klassen · Charaktere", "nach/klassen/dienstzeit", C.dienst.x[0] && C.dienst.x[0].p, [C.dienst.intro, C.dienst.oderT]);
    C.dienst.x.concat(C.dienst.oder).forEach(function(d){ add(d.t, "Dienstzeit", "nach/klassen/dienstzeit", d.p, [d.w, d.x]); });
  }
  (window.SP_KLASSE || []).forEach(function(K){
    add(K.t, "Klasse", "nach/klassen/" + K.id, K.p, [K.zitat, K.intro, K.kern, K.bind, K.ausr, K.fortIntro, K.hinweis, K.boxen]);
    K.kfae.forEach(function(a){ add(a.t, "Kernfähigkeit · " + K.t, "nach/klassen/" + K.id, a.p, [a.fl, a.x]); });
    ["niedrig", "mittel", "hoch"].forEach(function(g){ K.fort[g].forEach(function(a){ add(a.t, "Fortschritt " + KL_STUFE[g] + " · " + K.t, "nach/klassen/" + K.id, a.p, [a.fl, a.x]); }); });
  });
  Object.keys(window.SP_MG || {}).forEach(function(id){
    var M = SP_MG[id], r = "nach/klassen/" + id + (klById(id) ? "/mg" : "");
    add(M.t + " – Magister's Guide", "Klasse · Zusatz", r, M.p, [M.intro, M.nuetz, M.besT], "gm");
    ["faehig", "ausr", "bes", "fallout"].forEach(function(k){ M[k].forEach(function(a){ add(a.t, {faehig:"MG-Fähigkeit", ausr:"MG-Ausrüstung", bes:"MG-Besondere Ausrüstung", fallout:"MG-Fallout"}[k] + " · " + M.t, r, a.p, [a.tag, a.fl, a.x], "gm"); }); });
  });
  var X = window.SP_EXTRA; if(!X) return;
  add("Extra-Fortschritte", "Extra-Fortschritte", "nach/extra", 69, [X.intro, (X.boxen || []).filter(function(b){ return !X.wege.some(function(w){ return w.id === b.nach; }); })]);
  X.wege.forEach(function(w){
    add(w.t, "Extra-Fortschritte", "nach/extra/" + w.id, w.p, [w.vor, w.auff, w.ein, w.info, w.tab, (X.boxen || []).filter(function(b){ return b.nach === w.id; })]);
    ["niedrig", "mittel", "hoch"].forEach(function(g){ w.fort[g].forEach(function(a){ add(a.t, "Extra-Fortschritt " + KL_STUFE[g] + " · " + w.t, "nach/extra/" + w.id, a.p, [a.fl, a.x]); }); });
  });
});

/* ---------- Magister's Guide: Neue Systeme und Essays (MG S. 4–55) ---------- */
function mgsBlk(L, bu){ bu = bu || "gm";
  return (L || []).map(function(b){
    if(b && b.t === "kk") return '<div class="kfs' + (b.n === 1 ? ' kfs-k' : '') + '">' + b.x.map(function(a){ return klKarte(a, bu); }).join("") + '</div>';
    if(b && b.t === "regelgrafik") return window.regelGrafik ? regelGrafik() : "";
    if(b && b.t === "h4") return '<h3 class="un mgs-h4">' + esc(b.x) + (b.p ? pgl(b.p, bu) : "") + '</h3>';
    if(b && b.t === "h3") return '<h3 class="un">' + esc(b.x) + (b.p ? pgl(b.p, bu) : "") + '</h3>';
    return blk([b]);
  }).join("");
}
SP_NACH_VIEW.mg = function(teile){
  var L = window.SP_MGS || []; nAnker("mg", teile, L[0] && L[0].id);
  var gr = "", side = '<h5 onclick="scrollTo({top:0,behavior:\'smooth\'})">Magister\'s Guide</h5>';
  L.forEach(function(k, i){ if(k.grp !== gr){ gr = k.grp; if(i) side += '<h5>' + esc(gr) + '</h5>'; } side += nLink({id:k.id, t:k.t}, i); });
  var body = '<div class="kp mgv"><h1 class="titel">Magister\'s Guide' + pgl(4, "gm") + '</h1>' + L.map(function(k){
    return '<section id="ab-' + k.id + '"><h2 class="ab">' + esc(k.t) + pgl(k.p, "gm") + '</h2>' + mgsBlk(k.b) + '</section>';
  }).join("") + '</div>';
  var A = SP_NACH_ANKER.mg; SP_NACH_ANKER.mg = null; if(A) ST_ANKER = A;
  return nachTabs("mg") + lay(side, '<div class="dbody" data-pgbook="sp_gm">' + body + '</div>');
};
(window.SP_SUCHE = window.SP_SUCHE || []).push(function(add){
  (window.SP_MGS || []).forEach(function(k){ add(k.t, "Magister's Guide · " + k.grp, "nach/mg/" + k.id, k.p, [k.b], "gm"); });
});

/* ---------- Welt, Spielleitung, Spire in Kürze: Kapitel als Baum links, Text flach rechts ---------- */
function txtView(id, titel, p, buch, pb){
  return function(teile){
    var L = (window.SP_TEXT || {})[id] || []; nAnker(id, teile, L[0] && L[0].id);
    var side = '<h5 onclick="scrollTo({top:0,behavior:\'smooth\'})">' + esc(titel) + '</h5>' + L.map(function(k, i){ return nLink({id:k.id, t:k.t}, i); }).join("");
    var body = '<div class="kp mgv txt"><h1 class="titel">' + esc(titel) + pgl(p, buch) + '</h1>' + L.map(function(k){
      return '<section id="ab-' + k.id + '"><h2 class="ab">' + esc(k.t) + pgl(k.p, buch) + '</h2>' + mgsBlk(k.b, buch) + '</section>';
    }).join("") + '</div>';
    var A = SP_NACH_ANKER[id]; SP_NACH_ANKER[id] = null; if(A) ST_ANKER = A;
    return nachTabs(id) + lay(side, '<div class="dbody" data-pgbook="' + pb + '">' + body + '</div>');
  };
}
SP_NACH_VIEW.welt = txtView("welt", "Die Welt", 1, "cmf", "sp_cmf");
SP_NACH_VIEW.spielleitung = txtView("spielleitung", "Spielleitung", 173, "cmf", "sp_cmf");
SP_NACH_VIEW.kurz = txtView("kurz", "Spire in Kürze", 1, "qs", "sp_qs");
(window.SP_SUCHE = window.SP_SUCHE || []).push(function(add){
  add("Regeln in Kürze", "Spire in Kürze", "nach/kurz/kernmechanik", 7, ["Würfelpool zusammenstellen: Mit 1W10 beginnen, passende Fertigkeit, passende Domäne, passende Meisterschaft, +1W10 pro Helfer, −1W10 pro Schwierigkeit", "Würfelpool werfen. Wird der Würfelpool auf 0 oder weniger reduziert, werft 1W10", "Erfolg und Fehlschlag bestimmen: Prüft euren höchsten Würfel. 1 Kritischer Fehlschlag: Doppelten Stress erleiden. 2–5 Fehlschlag: Ihr und alle Helfer erleidet Stress auf einem passenden Widerstand. 6–9 Erfolg: Kein Stress. Fügt einem Gegner mit den Würfeln eurer Ausrüstung Stress zu. 10 Kritischer Erfolg: +1 Stress zufügen", "Wurde euer Würfelpool auf 0 oder weniger reduziert, verringert euer Ergebnis um eine Stufe: 8–9 auf 6–7, 6–7 auf 2–5", "Fallout erleiden: Wenn ihr Stress erlitten habt, prüft die Spielleitung auf Fallout. 1W10 werfen, niedriger als Gesamtstress? Nein: kein Fallout. Ja: SC erleidet Fallout. 2–4 Gesamtstress leichter Fallout, 5–8 Gesamtstress mittlerer Fallout, 9+ Gesamtstress schwerer Fallout. Für weniger tödlichen Fallout Regeln, siehe Spire S. 13"], "qs");
  var N = {welt:["Die Welt", "cmf"], spielleitung:["Spielleitung", "cmf"], kurz:["Spire in Kürze", "qs"]};
  Object.keys(N).forEach(function(id){ ((window.SP_TEXT || {})[id] || []).forEach(function(k){ add(k.t, N[id][0], "nach/" + id + "/" + k.id, k.p, [k.b], N[id][1]); }); });
});
