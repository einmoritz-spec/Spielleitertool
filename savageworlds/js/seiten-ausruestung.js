/* Ausrüstung: Rüstung, Waffen, Fahrzeuge, Allgemeine Ausrüstung – mit Zusatzbänden (Genre-Filter, Quellen-Badges).
   Seitenleisten blenden Abschnitte aus, die für die gewählten Genres leer sind. Überschreibt die Grundfassung in app.js. */
"use strict";
(function(){
var GK = ["FAN", "HOR", "SF", "SUP"];
function arr(s){ return s ? (Array.isArray(s) ? s : [s]) : []; }
function vis(s){ return arr(s).length ? sqVis(arr(s)) : true; }
function zus(pre){
  var L = [];
  GK.forEach(function(g){ var d = window["SW_" + pre + "_" + g]; if(d) d.forEach(function(x){ if(vis(x.s)) L.push(x); }); });
  return L;
}
function rkH(h, s, bk, p, o){
  return '<h4 class="rk" style="--rc:#a51f1a"><span>' + nm(h) + "</span>" + sqBadge(arr(s)) + (p ? pgLink(bk, p, o) : "") + "</h4>";
}
function zusSec(z, hd){
  return (hd === false ? "" : rkH(z.h, z.s, z.bk, z.p, z.o)) + edP(z.i) + (z.cards ? '<div class="hg">' + z.cards.map(function(c){ return '<div class="hc" style="--rc:' + ({FAN:"#2f7a4a",HOR:"#7a2230",SF:"#1f6f9a",SUP:"#c2571c"}[arr(z.s)[0]] || "#7a7067") + '"><b>' + nm(c[0]) + "</b><p>" + esc(c[1]) + "</p></div>"; }).join("") + "</div>" : "") + (z.g ? eqGroups(z.cols, z.g) : "");
}
function side(keys, cur, fn){
  return '<aside class="side"><button class="fold" onclick="foldSide()" aria-label="Seitenleiste">‹</button>' + keys.map(function(k){
    return '<a class="' + (k.k === cur ? "on" : "") + '" onclick="' + fn + '(' + JSON.stringify(k.k).replace(/"/g, "&quot;") + ')">' + esc(k.k) + sqBadge(arr(k.s)) + "</a>";
  }).join("") + "</aside>";
}
function lay(keys, cur, fn, title, pg, body){
  APP.innerHTML = '<div class="lay' + (ST.fold ? " fold-on" : "") + '" id="lay">' + side(keys, cur, fn) + '<main class="ct"><h2>' + nm(title) + (pg || "") + "</h2>" + body + "</main></div>";
}
/* Schlüsselliste: Grundabschnitte (immer) + Zusatzabschnitte, die für die aktiven Genres Inhalt haben */
function keyList(base, Z){
  var K = base.map(function(b){ return {k: b}; });
  Z.forEach(function(z){
    if(!K.some(function(x){ return x.k === z.k; })) K.push({k: z.k, s: z.s});
  });
  return K;
}
function pick(K, cur){ return K.some(function(x){ return x.k === cur; }) ? cur : K[0].k; }

/* ---------- Rüstung ---------- */
window.ruestungPage = function(){
  var R = SW_RUESTUNG, Z = zus("RUESTUNG"), K = keyList(R.s.map(function(s){ return s.h; }).concat([R.sh.h]), Z), cur = pick(K, ST.rk);
  var cols = ["Gegenstand", "Panzerung", "Mindeststärke", "Gewicht (kg)", "Kosten"], scols = ["Typ", "Parade", "Deckung", "Mindeststärke", "Gewicht (kg)", "Kosten"], h = "", pg = "";
  var gs = R.s.filter(function(s){ return s.h === cur; })[0];
  if(gs){ h = edP(R.i) + edP(gs.i) + eqGroups(cols, gs.g); pg = ' <span class="pg" onclick="openBook(\'sw_de\',70)">S. 69</span>'; }
  else if(cur === R.sh.h){ h = edP(R.sh.i) + eqGroups(scols, R.sh.g); pg = ' <span class="pg" onclick="openBook(\'sw_de\',71)">S. 70</span>'; }
  var zs = Z.filter(function(z){ return z.k === cur; });
  zs.forEach(function(z){ h += zusSec(z); });
  lay(K, cur, "rKat", cur, pg, h);
};
window.rKat = function(k){ ST.rk = k; save(); ruestungPage(); window.scrollTo(0, 0); };

/* ---------- Waffen ---------- */
var WSET2 = WSET;
window.waffenPage = function(){
  var Z = zus("WAFFEN"), names = [];
  WSET2.forEach(function(w){ w[1].forEach(function(n){ names.push(n); }); });
  var extra = Z.filter(function(z){ return names.indexOf(z.k) < 0 && !WSET2.some(function(w){ return w[0] === z.k; }); });
  var K = keyList(WSET2.map(function(w){ return w[0]; }), extra), cur = pick(K, ST.wk2);
  var w = WSET2.filter(function(x){ return x[0] === cur; })[0], h = "", pg = "";
  if(w){
    var zs = Z.filter(function(z){ return w[1].indexOf(z.k) > -1 || z.k === cur; });
    var multi = w[1].length > 1 || zs.length > 0;
    h = w[1].map(function(n){
      var s = SW_WAFFEN.filter(function(x){ return x.h.toLowerCase() === n.toLowerCase(); })[0]; if(!s) return "";
      return (multi ? '<h4 class="rk" style="--rc:#a51f1a"><span>' + nm(s.h) + '</span><b class="pg" onclick="openBook(\'sw_de\',' + (WPG[s.h] + 1) + ')">S. ' + WPG[s.h] + "</b></h4>" : "") + edP(s.i) + eqGroups(s.cols, s.g);
    }).join("");
    if(!multi) pg = '<span class="pg" onclick="openBook(\'sw_de\',' + (WPG[w[1][0]] + 1) + ')">S. ' + WPG[w[1][0]] + "</span>";
    zs.forEach(function(z){ h += zusSec(z); });
  } else Z.filter(function(z){ return z.k === cur; }).forEach(function(z){ h += zusSec(z); });
  lay(K, cur, "wKat2", cur, pg, h);
};
window.wKat2 = function(k){ ST.wk2 = k; save(); waffenPage(); window.scrollTo(0, 0); };

/* ---------- Fahrzeuge ---------- */
window.fahrzeugePage = function(){
  var F = SW_FAHRZEUGE, Z = zus("FAHRZEUGE"), base = ["Bodenfahrzeuge", "Fluggeräte", "Wasserfahrzeuge"];
  var K = keyList(base, Z.filter(function(z){ return base.indexOf(z.k) < 0; })); K.push({k: "Anmerkungen"});
  var cur = pick(K, ST.fk2), h = "", pg = "";
  if(cur === "Anmerkungen"){
    var card = function(a){ return '<div class="hc" style="--rc:#7a7067"><b>' + nm(a[0]) + "</b><p>" + esc(a[1]) + "</p></div>"; };
    h = edP(F.i) + '<h4 class="rk" style="--rc:#a51f1a"><span>Angaben</span></h4><div class="hg">' + F.a.map(card).join("") + '</div><h4 class="rk" style="--rc:#a51f1a"><span>Merkmale</span></h4><div class="hg">' + F.gl.map(card).join("") + "</div>";
    pg = '<span class="pg" onclick="openBook(\'sw_de\',' + (FPG[cur] + 1) + ')">S. ' + FPG[cur] + "</span>";
    Z.filter(function(z){ return z.k === cur; }).forEach(function(z){ h += zusSec(z); });
  } else {
    var s = F.s.filter(function(x){ return x.h === cur; })[0], zs = Z.filter(function(z){ return z.k === cur; });
    if(s){ h = eqGroups(F.cols, s.g); pg = '<span class="pg" onclick="openBook(\'sw_de\',' + (FPG[cur] + 1) + ')">S. ' + FPG[cur] + "</span>"; }
    zs.forEach(function(z){ h += zusSec(z, !!s || zs.length > 1 ? true : false); });
  }
  lay(K, cur, "fKat2", cur, pg, h);
};
window.fKat2 = function(k){ ST.fk2 = k; save(); fahrzeugePage(); window.scrollTo(0, 0); };

/* ---------- Allgemeine Ausrüstung ---------- */
function rowsAllg(r){ return r.map(function(x){ return {c: x.slice(0, 3), n: x[3] || ""}; }); }
function rowsFan(r){ return r.map(function(x){ return {c: x.slice(0, 3), n: x[3] || ""}; }); }
window.allgemeinPage = function(){
  var A = SW_AUSR_ALLG, F = gen("fan") ? SW_FAN_AUSR : null, X = (window.SW_AUSR_X || []).filter(function(x){ return vis(x.s); });
  var K = [{k: "Ausrüstung"}, {k: "Munition"}, {k: "Belastung"}];
  if(F){ K.push({k: "Fantasy-Ausrüstung", s: "FAN"}, {k: "Gifte", s: "FAN"}, {k: "Besondere Materialien", s: "FAN"}); }
  X.forEach(function(x){ K.push({k: x.k, s: x.s}); });
  var cur = pick(K, ST.ak), h = "", pg = "", gc = ["Gegenstand", "Kosten", "Gewicht (kg)"];
  var pl = function(p){ return '<span class="pg" onclick="openBook(\'sw_de\',' + (p + 1) + ')">S. ' + p + "</span>"; };
  if(cur === "Ausrüstung"){
    h = '<div class="ag">' + A.sec.map(function(s){ return "<div>" + '<h5 class="eg">' + nm(s.h) + "</h5>" + eqTable(gc, rowsAllg(s.r)) + "</div>"; }).join("") + "</div>";
    pg = pl(67);
  } else if(cur === "Munition"){
    h = eqTable(A.mun.cols, A.mun.r.map(function(x){ return {c: x.slice(0, 3), n: x[3]}; }).map(function(x){ return x; }));
    pg = pl(68);
  } else if(cur === "Belastung"){
    h = edP(A.last.i) + eqTable(["Stärke", "Trägt Gewicht von bis zu …"], A.last.r.map(function(x){ return {c: x, n: ""}; }));
    pg = pl(67);
  } else if(cur === "Fantasy-Ausrüstung"){
    var fc = ["Gegenstand", "Gewicht (kg)", "Kosten (GM)"];
    h = '<h4 class="rk" style="--rc:#a51f1a"><span>Währung und Startkapital</span>' + sqBadge(["FAN"]) + pgLink("sw_fan", 50) + "</h4>" + edP(F.start) + edP(F.waehrung) + '<div class="ag">' + F.allg.map(function(s){
      return "<div>" + '<h5 class="eg">' + nm(s.h) + "</h5>" + edP(s.d) + eqTable(fc, rowsFan(s.r)) + "</div>";
    }).join("") + "</div>";
  } else if(cur === "Gifte"){
    h = edP(F.gift.i) + eqTable(F.gift.cols.slice(0, 4), F.gift.r.map(function(x){ return {c: x.slice(0, 4), n: x[4] || ""}; }));
    pg = pgLink("sw_fan", F.gift.p || 61);
  } else if(cur === "Besondere Materialien"){
    h = '<div class="hg">' + F.material.map(function(m){ return '<div class="hc" style="--rc:#2f7a4a"><b>' + nm(m[0]) + "</b><p>" + esc(m[1]) + "</p></div>"; }).join("") + "</div>";
  } else {
    var x = X.filter(function(y){ return y.k === cur; })[0]; if(x) h = x.fn();
  }
  lay(K, cur, "aKat", cur, pg, h);
};
window.aKat = function(k){ ST.ak = k; save(); allgemeinPage(); window.scrollTo(0, 0); };

/* Unterpunkt und Startseiten-Eintrag */
var T = TABS.filter(function(t){ return t.id === "ausruestung"; })[0];
if(T && !T.subs.some(function(s){ return s[0] === "allgemein"; })) T.subs.unshift(["allgemein", "Allgemeine Ausrüstung", 66]);
if(window.CHAPT && CHAPT.ausruestung && !CHAPT.ausruestung.some(function(s){ return s[1] === "allgemein"; })) CHAPT.ausruestung.unshift(["Allgemeine Ausrüstung", "allgemein"]);
window.SWP = window.SWP || {};
SWP["ausruestung/allgemein"] = window.allgemeinPage;
render();
})();
