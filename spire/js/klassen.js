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

/* ---------- Übersicht (Entwurf 7) ---------- */
function klKachel(k){
  return '<div class="kl-t" onclick="go(\'nach/klassen/' + k.id + '\')"><span class="im"><img src="' + IMG("klasse/" + k.id) + '" alt="" loading="lazy"></span><span class="tx"><b>' + esc(k.t) + '</b><small>' + esc(klKurz(k)) + '</small>' + pgl(k.p) + '</span></div>';
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
    '<div class="kl-grid">' + SP_KLASSE.map(klKachel).join("") + '</div>' +
    '<h2 class="ab" id="ab-charaktere">Charaktere' + pgl(25) + '</h2>' +
    '<div class="raster r3 kl-kurz">' + kurz.map(function(s){ return '<div class="karte"><h4>' + esc(s.t.charAt(0) + s.t.slice(1).toLowerCase()) + pgl(s.p) + '</h4>' + blk(s.b) + '</div>'; }).join("") + '</div>' +
    '<h2 class="ab" id="ab-dienstzeit">Dienstzeit' + pgl(25) + '</h2>' +
    '<div class="kl-dtxt">' + blk(text) + '</div>' + klDienst(C.dienst) +
    '<div class="raster r2 kl-box">' + kasten.map(function(b){ return blk([b]); }).join("") + '</div>';
  return body;
}

/* ---------- Klassenseite (Entwurf 8) ---------- */
function klSubtabs(cur){
  return '<div class="subtabs">' + SP_KLASSE.map(function(k){ return '<a class="' + (k.id === cur ? 'on' : '') + '" onclick="go(\'nach/klassen/' + k.id + '\')">' + esc(k.t) + '</a>'; }).join("") + '</div>';
}
function klSeite(K){
  var kern = K.kern, kk = function(l, v){ return v ? '<div class="kk"><h5>' + l + '</h5><p>' + md(v) + '</p></div>' : ''; };
  var kopf = '<div class="kp-kopf"><img class="kp-bild" src="' + IMG("klasse/" + K.id) + '" alt="" onclick="zoom(this.src)"><div class="kp-tx">' +
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
  if(K) return klSeite(K);
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
  (window.SP_KLASSE || []).forEach(function(K){
    add(K.t, "Klasse", "nach/klassen/" + K.id, K.p, [K.zitat, K.intro, K.kern, K.bind, K.ausr]);
    K.kfae.forEach(function(a){ add(a.t, "Kernfähigkeit · " + K.t, "nach/klassen/" + K.id, a.p, [a.fl, a.x]); });
    ["niedrig", "mittel", "hoch"].forEach(function(g){ K.fort[g].forEach(function(a){ add(a.t, "Fortschritt " + KL_STUFE[g] + " · " + K.t, "nach/klassen/" + K.id, a.p, [a.fl, a.x]); }); });
  });
  var X = window.SP_EXTRA; if(!X) return;
  X.wege.forEach(function(w){
    add(w.t, "Extra-Fortschritte", "nach/extra/" + w.id, w.p, [w.vor, w.auff, w.ein, w.info, w.tab]);
    ["niedrig", "mittel", "hoch"].forEach(function(g){ w.fort[g].forEach(function(a){ add(a.t, "Extra-Fortschritt " + KL_STUFE[g] + " · " + w.t, "nach/extra/" + w.id, a.p, [a.fl, a.x]); }); });
  });
});
