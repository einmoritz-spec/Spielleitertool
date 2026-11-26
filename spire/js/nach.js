/* THE SPIRE – Nachschlagen: Regeln (S. 9–16, mit Fallout), Kampf (S. 77–80), Fertigkeiten (S. 17–18), Ausrüstung (S. 19–22), Bindungen (S. 23–24)
   plus Tag-Tooltips (Chips mit Tag-Namen zeigen die Regel aus tags.js). Alle Seiten: Baum links (einklappbar), Text rechts.
   Daten: SP_REGELN, SP_KAMPF, SP_FERT, SP_AUSR, SP_BIND, SP_TAGS (spire/js/data/), Fallout aus SP_FALLOUT (fallout.js).
   Route #nach/<bereich>[/<abschnitt>]: der Abschnitt wird angesprungen. */
window.SP_NACH_VIEW = window.SP_NACH_VIEW || {};

/* ---------- gemeinsame Bausteine ---------- */
function nLink(s, i){ var id = "ab-" + s.id; return '<a data-j="' + id + '" class="' + (i === 0 ? 'on' : '') + '" onclick="jump(\'' + id + '\')">' + esc(s.k || kurz(s.t)) + '</a>'; }
function nSek(s, titel, inner){
  return '<section id="ab-' + s.id + '">' + (s.t === titel ? '' : '<h2 class="ab">' + esc(s.t) + pgl(s.p) + '</h2>') + (s.bild ? '<img class="dbild" src="' + IMG(s.bild) + '" alt="" onclick="zoom(this.src)">' : '') + inner + '</section>';
}
function nTitel(t, p){ return '<h1 class="titel">' + esc(t) + pgl(p) + '</h1>'; }
function nKarten(L, n, mitSeite){
  return '<div class="raster r' + (n || 3) + '">' + L.map(function(k){
    return '<div class="karte"><h4>' + esc(k.t) + (mitSeite && k.p ? pgl(k.p) : '') + '</h4>' + (k.f ? '<p><i>' + md(k.f) + '</i></p>' : '') + (Array.isArray(k.x) ? blk(k.x) : '<p>' + md(k.x || "") + '</p>') + '</div>';
  }).join("") + '</div>';
}
function nSeite(id, side, body){
  var A = (SP_NACH_ANKER[id] || null); SP_NACH_ANKER[id] = null;
  if(A) ST_ANKER = A;
  return nachTabs(id) + lay(side, '<div class="dbody" data-pgbook="sp_cmf">' + body + '</div>');
}
var SP_NACH_ANKER = {};
function nAnker(id, teile, std){ SP_NACH_ANKER[id] = teile[0] || std || null; }

/* ---------- Fallout (aus fallout.js): Filter + Karten ---------- */
var FW = "alle";
function fwSet(w){ FW = w; render(); }
function fwKarten(L){
  L = L.filter(function(e){ return FW === "alle" || !e.w || e.w.indexOf(FW) >= 0; });
  return '<div class="raster r3">' + L.map(function(e){
    return '<div class="karte"><h4>' + esc(e.t) + (e.w ? '<span class="tag g">' + (e.wtxt || e.w.map(zWidT).join(" / ")) + '</span>' : '') + (e.p ? pgl(e.p) : '') + '</h4><p>' + md(e.x) + '</p></div>';
  }).join("") + '</div>';
}
function nFalloutSek(){
  var F = SP_FALLOUT, R = F.regel, B = F.bindung;
  var h2 = function(id, t, p){ return '<section id="ab-' + id + '"><h2 class="ab">' + esc(t) + pgl(p) + '</h2>'; };
  var filter = '<div class="wch fil">' + [["alle", "Alle"]].concat(SP_WID.map(function(w){ return [w.id, w.t]; })).map(function(w){ return '<span class="' + (FW === w[0] ? 'on' : '') + '" onclick="fwSet(\'' + w[0] + '\')">' + w[1] + '</span>'; }).join("") + '</div>';
  var stufe = function(k){ var S = F.stufen[k]; return h2(k, S.t, S.p) + '<p>' + esc(S.intro) + '</p>' + fwKarten(S.x) + '</section>'; };
  var bst = function(k){ var S = B.stufen[k]; return '<h3 class="un">' + esc(S.t) + pgl(S.p) + '</h3>' + fwKarten(S.x); };
  return h2("behalten", R.behalten.t, R.behalten.p) + blk(R.behalten.b) + '</section>' +
    h2("plaetze", R.plaetze.t, R.plaetze.p) + blk(R.plaetze.b) + '</section>' +
    h2("fallout", R.fallout.t, R.fallout.p) + '<img class="dbild" src="' + IMG("kapitel/regeln-S012") + '" alt="" onclick="zoom(this.src)">' + blk(R.fallout.b) + '</section>' +
    h2("toedlich", R.toedlich.t, R.toedlich.p) + blk([{t:"schwarz", b:R.toedlich.b[0]}]) + '</section>' +
    filter + stufe("leicht") + stufe("mittel") + stufe("schwer") +
    h2("bindung", B.t, B.p) + blk(B.intro) + bst("leicht") + bst("mittel") + bst("schwer") + '<p>' + md(B.regel[0]) + pgl(B.regelP) + '</p><p>' + md(B.regel[1]) + '</p></section>' +
    h2("eigene", R.eigene.t, R.eigene.p) + blk([{t:"schwarz", b:R.eigene.b}]) + '</section>';
}

/* ---------- Regeln ---------- */
SP_NACH_VIEW.regeln = function(teile){
  var R = SP_REGELN, F = SP_FALLOUT.regel, B = SP_FALLOUT.bindung;
  nAnker("regeln", teile.length && teile[0] === "fallout" ? teile.slice(1) : teile);
  if(teile[0] === "fallout" && !teile[1]) SP_NACH_ANKER.regeln = "behalten";
  var fo = [["behalten", F.behalten.t], ["plaetze", F.plaetze.t], ["fallout", F.fallout.t], ["toedlich", F.toedlich.t], ["leicht", "Leichter Fallout"], ["mittel", "Mittlerer Fallout"], ["schwer", "Schwerer Fallout"], ["bindung", B.t], ["eigene", F.eigene.t]];
  var side = '<h5 onclick="scrollTo({top:0,behavior:\'smooth\'})">Regeln</h5>' + R.abschnitte.map(nLink).join("") +
    '<h5>Fallout</h5>' + fo.map(function(a){ return nLink({id:a[0], t:a[1]}, 1); }).join("");
  var body = nTitel(R.t, R.p) + R.abschnitte.map(function(s){ return nSek(s, R.t, blk(s.b)); }).join("") + nFalloutSek();
  return nSeite("regeln", side, body);
};

/* ---------- Kampf ---------- */
SP_NACH_VIEW.kampf = function(teile){
  var K = SP_KAMPF; nAnker("kampf", teile);
  var side = '<h5 onclick="scrollTo({top:0,behavior:\'smooth\'})">Kampf</h5>' + K.abschnitte.map(nLink).join("");
  var body = nTitel(K.t, K.p) + '<p class="einl">' + md(K.einl) + '</p>' + K.abschnitte.map(function(s){ return nSek(s, K.t, blk(s.b)); }).join("");
  return nSeite("kampf", side, body);
};

/* ---------- Fertigkeiten und Domänen ---------- */
SP_NACH_VIEW.fertigkeiten = function(teile){
  var D = SP_FERT; nAnker("fertigkeiten", teile);
  var S = [D.fertigkeiten, D.domaenen, D.kniffe].map(function(x, i){ return {id:["fertigkeiten", "domaenen", "kniffe"][i], t:x.t, p:x.p}; });
  var side = '<h5 onclick="scrollTo({top:0,behavior:\'smooth\'})">Fertigkeiten und Domänen</h5>' + S.map(nLink).join("");
  var body = nTitel(D.t, D.p) + '<p class="einl">' + md(D.einl) + '</p>' +
    nSek(S[0], "", '<p>' + md(D.fertigkeiten.intro) + '</p>' + nKarten(D.fertigkeiten.x, 3)) +
    nSek(S[1], "", '<p>' + md(D.domaenen.intro) + '</p>' + blk([{t:"bsp", x:D.domaenen.bsp}]) + nKarten(D.domaenen.x, 3, true)) +
    nSek(S[2], "", '<p>' + md(D.kniffe.intro) + '</p><h3 class="un">' + esc(D.kniffe.bsp.t) + '</h3>' + nKarten(D.kniffe.bsp.x, 2));
  return nSeite("fertigkeiten", side, body);
};

/* ---------- Ausrüstung ---------- */
function nTagKarten(L){
  return '<div class="raster r3 tagk">' + L.map(function(t){ return '<div class="karte"><h4>' + esc(t.t) + pgl(t.p) + '</h4><p>' + md(t.x) + '</p></div>'; }).join("") + '</div>';
}
SP_NACH_VIEW.ausruestung = function(teile){
  var A = SP_AUSR; nAnker("ausruestung", teile);
  var side = '<h5 onclick="scrollTo({top:0,behavior:\'smooth\'})">Ausrüstung</h5>' + A.abschnitte.map(nLink).join("");
  var body = nTitel(A.t, A.p) + A.abschnitte.map(function(s){
    var inner = blk(s.b);
    if(s.tags) inner += nTagKarten(SP_TAGS[s.tags]);
    if(s.tabellen) inner += '<div class="raster r2 tabk"><div>' + tbl(A.waffenTabelle) + '</div><div>' + tbl(A.ruestungTabelle) + '</div></div>';
    return nSek(s, A.t, inner);
  }).join("");
  return nSeite("ausruestung", side, body);
};

/* ---------- Bindungen ---------- */
SP_NACH_VIEW.bindungen = function(teile){
  var D = SP_BIND; nAnker("bindungen", teile);
  var side = '<h5 onclick="scrollTo({top:0,behavior:\'smooth\'})">Bindungen</h5>' + D.abschnitte.map(nLink).join("");
  var body = nTitel(D.t, D.p) + '<p class="einl">' + md(D.einl) + '</p>' + D.abschnitte.map(function(s){
    return nSek(s, D.t, blk(s.b) + (s.chip ? '<p><span class="chip" onclick="go(\'' + s.chip.go + '\')">' + esc(s.chip.t) + '</span></p>' : ''));
  }).join("");
  return nSeite("bindungen", side, body);
};

/* ---------- Tag-Tooltips ---------- */
var TAGIDX = null;
function tagNorm(n){ return String(n || "").replace(/\s*\(.*\)\s*$/, "").replace(/^(Anhaltend|Streuung) W\d+$/, "$1 Wx").trim(); }
function tagTip(n){
  if(!TAGIDX){ TAGIDX = {}; SP_TAGS.ruestung.forEach(function(t){ TAGIDX[t.t] = t.x; }); SP_TAGS.waffen.forEach(function(t){ TAGIDX[t.t] = t.x; }); }
  n = tagNorm(n);
  if(/^Rüstung \d+$/.test(n)) return SP_TAGS.ruestungText;
  return TAGIDX[n] || "";
}
function tagAttr(n){ var x = tagTip(n); return x ? ' data-tip="' + esc(x) + '" data-tn="' + esc(/^Rüstung \d+$/.test(tagNorm(n)) ? "Rüstung" : tagNorm(n)) + '"' : ''; }
(function(){
  var tip = null, cur = null;
  function hide(){ if(tip){ tip.remove(); tip = null; cur = null; } }
  function show(el){
    if(cur === el) return; hide(); cur = el;
    tip = document.createElement("div"); tip.className = "tagtip";
    if(el.closest(".bfb")){ tip.className = "tagtip kl"; tip.textContent = el.getAttribute("data-tn") || ""; }
    else tip.innerHTML = '<b>' + esc(el.getAttribute("data-tn") || "") + '</b>' + esc(el.getAttribute("data-tip"));
    document.body.appendChild(tip);
    var r = el.getBoundingClientRect(), w = tip.offsetWidth, h = tip.offsetHeight;
    var x = Math.max(8, Math.min(r.left, innerWidth - w - 8)), y = r.bottom + 6; if(y + h > innerHeight - 8) y = r.top - h - 6;
    tip.style.left = x + "px"; tip.style.top = Math.max(8, y) + "px";
  }
  document.addEventListener("mouseover", function(e){ var el = e.target.closest && e.target.closest("[data-tip]"); if(el) show(el); else if(tip && !e.target.closest(".tagtip")) hide(); });
  document.addEventListener("click", function(e){ var el = e.target.closest && e.target.closest("[data-tip]"); if(el){ if(cur === el && tip && e.pointerType === "touch") hide(); else show(el); } else hide(); });
  window.addEventListener("scroll", hide, {passive:true});
  document.addEventListener("keydown", function(e){ if(e.key === "Escape") hide(); });
})();

/* ---------- Suche ---------- */
(window.SP_SUCHE = window.SP_SUCHE || []).push(function(add){
  var F = SP_FALLOUT;
  Object.keys(F.stufen).forEach(function(k){ F.stufen[k].x.forEach(function(e){ add(e.t + " (" + e.en + ")", "Fallout · " + F.stufen[k].t, "nach/regeln/fallout/" + k, e.p, e.x + " " + e.w.map(zWidT).join(" ")); }); });
  Object.keys(F.bindung.stufen).forEach(function(k){ F.bindung.stufen[k].x.forEach(function(e){ add(e.t + " (" + e.en + ")", "Bindungs-Fallout", "nach/regeln/fallout/bindung", e.p, e.x); }); });
  ["behalten", "plaetze", "fallout", "toedlich", "eigene"].forEach(function(k){ add(F.regel[k].t, "Regeln · Fallout", "nach/regeln/fallout/" + k, F.regel[k].p, F.regel[k].b); });
  SP_REGELN.abschnitte.forEach(function(s){ add(s.t, "Regeln", "nach/regeln/" + s.id, s.p, s.b); });
  SP_KAMPF.abschnitte.forEach(function(s){ add(s.t, "Kampf", "nach/kampf/" + s.id, s.p, s.b); });
  var D = SP_FERT;
  D.fertigkeiten.x.forEach(function(k){ add(k.t, "Fertigkeit", "nach/fertigkeiten/fertigkeiten", 17, k.x); });
  D.domaenen.x.forEach(function(k){ add(k.t, "Domäne", "nach/fertigkeiten/domaenen", k.p, k.x); });
  add("Kniffe", "Fertigkeiten und Domänen", "nach/fertigkeiten/kniffe", 18, [D.kniffe.intro, D.kniffe.bsp]);
  SP_AUSR.abschnitte.forEach(function(s){ add(s.t, "Ausrüstung", "nach/ausruestung/" + s.id, s.p, s.b); });
  SP_TAGS.waffen.concat(SP_TAGS.ruestung).forEach(function(t){ add(t.t, "Tag", "nach/ausruestung/" + (SP_TAGS.ruestung.indexOf(t) >= 0 ? "ruestung" : "tags"), t.p, t.x); });
  add("Waffen und Rüstungen (Beispiele)", "Ausrüstung", "nach/ausruestung/eigene", 22, [SP_AUSR.waffenTabelle.rows, SP_AUSR.ruestungTabelle.rows]);
  SP_BIND.abschnitte.forEach(function(s){ add(s.t, "Bindungen", "nach/bindungen/" + s.id, s.p, [s.b, s.chip && s.chip.t]); });
  SP_VORGEFERTIGT.forEach(function(v){ add(v.n + " (" + v.klasse + ")", "Vorgefertigte Figur", "zelle/" + v.id, v.p, [v.titel, v.dienst, v.auff, v.spielen, v.hinter, v.bindtext, v.bind, v.fae, v.ausr, v.kniffe, v.haeuser], "qs"); });
  ["leicht", "mittel", "schwer"].forEach(function(k){ var S = F.stufen[k]; add(S.t, "Regeln · Fallout", "nach/regeln/fallout/" + k, S.p, S.intro); });
  add(F.bindung.t, "Regeln · Fallout", "nach/regeln/fallout/bindung", F.bindung.p, [F.bindung.intro, F.bindung.regel]);
  add(SP_KAMPF.t, "Kampf", "nach/kampf", SP_KAMPF.p, SP_KAMPF.einl);
  add(D.t, "Fertigkeiten und Domänen", "nach/fertigkeiten", D.p, [D.einl, D.fertigkeiten.intro, D.domaenen.intro, D.domaenen.bsp]);
  add(SP_BIND.t, "Bindungen", "nach/bindungen", SP_BIND.p, SP_BIND.einl);
});
