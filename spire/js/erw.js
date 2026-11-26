/* THE SPIRE – Quellenbücher: Sin, Strata, Black Magic, Codex of the Deep Spire, Secrets Kept from the Sun, Shadow Operations.
   Daten: spire/js/data/erw/index.js (SP_ERW_BOOKS), Kapitel je Datei spire/js/data/erw/<buch>-<kapitel>.js (SP_ERW["<buch>/<kapitel>"], werden beim Öffnen nachgeladen),
   Werteblöcke in gegner-erw.js (SP_GEGNER), Suchindex suche.js. Erzeugt mit plan/spire/build_erw.py.
   Routen: #buch/<buch> (Buchstartseite) · #buch/<buch>/<kapitel>[/<tab oder abschnitt>[/<abschnitt>]] */
var ERW_LOAD = {};
function erwB(id){ return (window.SP_ERW_BOOKS || []).filter(function(b){ return b.id === id; })[0]; }
function erwK(bk, id){ return bk.kap.filter(function(k){ return k.id === id; })[0]; }
function erwTheme(id){ document.body.dataset.erw = id || ""; }

/* ---------- Buchstartseite ---------- */
function erwKachel(img, t, s, go, extra){
  return '<button class="eb-k' + (img ? '' : ' ohne') + (extra || '') + '" onclick="go(\'' + go + '\')">' + (img ? '<span class="im"><img src="' + IMG(img) + '" alt="" loading="lazy"></span>' : '<span class="im ini"><i>' + esc(t.replace(/[^A-ZÄÖÜ]/g, "").slice(0, 2) || t.charAt(0)) + '</i></span>') +
    '<span class="tx"><b>' + esc(t) + '</b><small>' + esc(s || "") + '</small></span></button>';
}
function erwHome(bk){
  erwTheme(bk.id);
  var cov = IMG("cover/" + bk.bid.replace(/^sp_/, "sp_"));
  var kap = function(K){
    if(K.klassen) return K.klassen.map(function(c){ var kl = klById(c); return erwKachel("klasse/" + c, kl ? kl.t : c, "Neue Klasse", "nach/klassen/" + c, " kl"); }).join("") + (K.f ? erwKachel(K.img, K.t, "Einleitung", "buch/" + bk.id + "/" + K.id) : '');
    if(K.extra) return erwKachel(null, K.t, K.s, "nach/extra/" + K.extra);
    return erwKachel(K.img, K.t, K.s + (K.p > 0 ? " · " + pgTxt(K.p, bk.buch) : ""), "buch/" + bk.id + "/" + K.id);
  };
  var gr = bk.gruppen.map(function(g){
    var L = bk.kap.filter(function(k){ return k.g === g.id; }); if(!L.length) return "";
    var abenteuer = L.every(function(k){ return k.abenteuer; });
    return '<section class="eb-g"><h2 class="ab">' + esc(g.t) + '</h2><div class="eb-r' + (abenteuer ? ' ab' : '') + '">' + L.map(kap).join("") + '</div></section>';
  }).join("");
  return '<div class="eb-home"><header class="eb-kopf"><img class="eb-cov" src="' + cov + '" alt="" onclick="zoom(this.src)"><div class="eb-tt"><h1>' + esc(bk.t) + '</h1><p>' + esc(bk.sub) + '</p><a class="eb-buch" onclick="openBook(\'' + bk.bid + '\',1)">Buch öffnen</a></div></header>' + gr + '</div>';
}

/* ---------- Kapitel laden und gliedern ---------- */
function erwDaten(bk, K){
  var key = bk.id + "/" + K.id; if(window.SP_ERW && SP_ERW[key]) return SP_ERW[key];
  if(!ERW_LOAD[key]){ ERW_LOAD[key] = 1; needJS(["js/data/erw/" + K.f], render); }
  return null;
}
function erwGliedern(D, K){
  var H = D.b.map(function(b, i){ return b && b.t === "h" ? {i:i, b:b} : null; }).filter(Boolean);
  var l1 = H.filter(function(h){ return h.b.lvl === 1; }), deeper = H.length - l1.length;
  var tabbed = l1.length >= 2 && l1.length <= 9 && (K.abenteuer || deeper >= 6);
  if(tabbed){   /* nur Reiter, wenn sie wirklich Inhalt tragen – sonst eine durchgehende Seite mit Seitenleiste */
    var voll = 0;
    l1.forEach(function(h, k){
      var e = k + 1 < l1.length ? l1[k + 1].i : D.b.length;
      if(JSON.stringify(D.b.slice(h.i, e).filter(function(b){ return !(b && b.t === "img"); })).length >= 1000) voll++;
    });
    if(voll < l1.length) tabbed = false;
  }
  var vor = l1.length ? D.b.slice(0, l1[0].i).reduce(function(n, b){ return n + (typeof b === "string" ? b.length : (b && (b.t === "p" || b.t === "ul" || b.t === "schwarz" || b.t === "violett") ? JSON.stringify(b).length : 0)); }, 0) > 1200 : false;
  if(tabbed && vor && !K.abenteuer){ l1.unshift({i:0, b:{t:"h", lvl:1, x:"Überblick", id:"ueberblick", p:D.p, fake:1}}); }
  return {H:H, l1:l1, tabbed:tabbed};
}
function erwBild(b){
  var r = b.h / b.w, c = r > 1.12 ? "hoch" : r > 0.8 ? "quad" : "breit";
  return '<figure class="eimg ' + c + '"><img src="' + IMG(b.src) + '" alt="" loading="lazy" onclick="zoom(this.src)"></figure>';
}
function erwBlocks(L, off, bk, key, ersteSeite){
  EID_CTX = "erw:" + key;
  var out = "", ersteH = true;
  L.forEach(function(b){
    if(b && b.t === "h"){
      var d = Math.max(1, b.lvl - off), id = ' id="ab-' + esc(b.id) + '"', pg = ersteSeite && ersteH && b.p > 0 ? pgl(b.p, bk.buch) : ""; ersteH = false;
      out += d === 1 ? '<h2 class="ab"' + id + '>' + esc(b.x) + pg + '</h2>' : d === 2 ? '<h3 class="un"' + id + '>' + esc(b.x) + pg + '</h3>' : d === 3 ? '<h4 class="lbl"' + id + '>' + esc(b.x) + pg + '</h4>' : '<h5 class="lbl2"' + id + '>' + esc(b.x) + pg + '</h5>';
    } else if(b && b.t === "img") out += erwBild(b);
    else if(b && b.t === "hw") out += '<div class="hwk">' + b.x.map(function(k){ return '<div class="hw ort"><h4>' + esc(k.k) + '</h4>' + k.x.split("\n\n").map(function(a){ return '<p>' + md(a) + '</p>'; }).join("") + '</div>'; }).join("") + '</div>';
    else out += blk([b]);
  });
  return out;
}
function erwSide(items, titel, onHome){
  return '<h5 onclick="' + onHome + '">' + esc(titel) + '</h5>' + items;
}
function erwLink(h, i){ return '<a data-j="ab-' + esc(h.id) + '" class="' + (i === 0 ? 'on' : '') + '" onclick="jump(\'ab-' + esc(h.id) + '\')">' + esc(kurz(h.x)) + '</a>'; }

/* ---------- Kapitelansicht ---------- */
function erwKapitel(bk, K, teile){
  erwTheme(bk.id);
  var D = erwDaten(bk, K);
  if(!D) return tabs([["buch/" + bk.id, bk.t]], "buch/" + bk.id, "") + voll('<p class="folgt">Lädt …</p>');
  var G = erwGliedern(D, K), key = bk.id + "/" + K.id, route = "buch/" + bk.id + "/" + K.id;
  var a1 = teile[0], a2 = teile[1], tab = null, anker = null;
  if(G.tabbed){
    var id1 = G.l1.map(function(h){ return h.b.id; });
    if(a1 && id1.indexOf(a1) >= 0){ tab = a1; anker = a2; }
    else if(a1){ // Abschnitt aus Suche/Verweis: zugehörigen Reiter finden
      var hi = G.H.filter(function(h){ return h.b.id === a1; })[0];
      if(hi){ var up = G.l1.filter(function(h){ return h.i <= hi.i; }).pop(); tab = up ? up.b.id : id1[0]; anker = a1; }
    }
    if(!tab) tab = id1[0];
  } else anker = a1;
  var seg = D.b, off = 0, head;
  if(G.tabbed){
    var ti = G.l1.map(function(h){ return h.b.id; }).indexOf(tab), s = ti === 0 ? 0 : G.l1[ti].i, e = ti + 1 < G.l1.length ? G.l1[ti + 1].i : D.b.length;
    if(G.l1[0].b.fake && ti === 0) e = G.l1[1].i;
    seg = D.b.slice(s, e).filter(function(b){ return b !== G.l1[ti].b; });
    off = 1;
    head = '<div class="tabs ab erwtabs"><b class="atl" onclick="go(\'buch/' + bk.id + '\')">' + esc(K.t) + '</b>' + G.l1.map(function(h){ return '<a class="' + (h.b.id === tab ? 'on' : '') + '" onclick="go(\'' + route + '/' + h.b.id + '\')">' + esc(kurz(h.b.x)) + '</a>'; }).join("") + '<span class="sp"></span>' + stift("buch:" + key) + '</div>';
  } else {
    var sib = bk.kap.filter(function(k){ return k.g === K.g && k.f; });
    head = '<div class="tabs unter erwtabs"><b class="atl" onclick="go(\'buch/' + bk.id + '\')">' + esc(bk.t) + '</b>' + (sib.length > 1 ? sib.map(function(k){ return '<a class="' + (k.id === K.id ? 'on' : '') + '" onclick="go(\'buch/' + bk.id + '/' + k.id + '\')">' + esc(kurz(k.t)) + '</a>'; }).join("") : '<a class="on">' + esc(K.t) + '</a>') + '<span class="sp"></span>' + stift("buch:" + key) + '</div>';
  }
  // Seitenleiste: Überschriften der aktuellen Ebene (im Reiter: Ebene 2, sonst Ebene 1), darunter klein die nächste
  var seH = seg.filter(function(b){ return b && b.t === "h"; }), top = G.tabbed ? 2 : 1;
  var A = seH.filter(function(b){ return b.lvl === top; }), sub = seH.filter(function(b){ return b.lvl === top + 1; });
  var kleinOK = A.length + sub.length <= 46, links = "";
  seH.forEach(function(b){ if(b.lvl === top) links += erwLink(b, links === "" ? 0 : 1); else if(b.lvl === top + 1 && kleinOK && A.length) links += '<a class="sub" data-j="ab-' + esc(b.id) + '" onclick="jump(\'ab-' + esc(b.id) + '\')">' + esc(kurz(b.x)) + '</a>'; });
  if(!A.length && sub.length) links = sub.map(erwLink).join("");
  var side = erwSide(links, G.tabbed ? kurz(G.l1.filter(function(h){ return h.b.id === tab; })[0].b.x) : K.t, "scrollTo({top:0,behavior:'smooth'})");
  var titel = G.tabbed ? "" : '<h1 class="titel">' + esc(K.t) + (D.p > 0 ? pgl(D.p, bk.buch, pgTxt(D.p, bk.buch) + (D.pe && D.pe > D.p ? "–" + D.pe : "")) : "") + '</h1>';
  var klassen = K.klassen && !G.tabbed ? '<div class="eb-r kl" style="margin:6px 0 14px">' + K.klassen.map(function(c){ var kl = klById(c); return erwKachel("klasse/" + c, kl ? kl.t : c, "Neue Klasse", "nach/klassen/" + c, " kl"); }).join("") + '</div>' : "";
  if(G.tabbed){
    var h0 = seg.filter(function(b){ return b && b.t === "h" && b.p > 0; })[0], p0 = h0 ? h0.p : D.p;
    if(p0 > 0) titel = '<div class="seitenkopf">' + pgl(p0, bk.buch) + '</div>';
  }
  var body = '<div class="dbody erw" data-pgbook="' + bk.bid + '">' + titel + klassen + erwBlocks(seg, off, bk, key, false) + '</div>';
  ST_ANKER = anker || null;
  return head + (side && links ? lay(side, body) : voll(body));
}

/* ---------- Route ---------- */
SP_VIEW.buch = function(teile){
  var bk = erwB(teile[0]); if(!bk) bk = (window.SP_ERW_BOOKS || [])[0];
  if(!bk) return voll('<p class="folgt">Noch nicht übertragen.</p>');
  var K = teile[1] && erwK(bk, teile[1]);
  if(!K || !K.f) return erwHome(bk);
  return erwKapitel(bk, K, teile.slice(2));
};
/* Theme-Attribut außerhalb der Buchansicht entfernen */
(function(){
  var _ar = window.afterRender;
  function hoehe(){
    var t = document.querySelector(".tabs.erwtabs");
    if(t) document.body.style.setProperty("--tabh", t.offsetHeight + "px"); else document.body.style.removeProperty("--tabh");
  }
  window.afterRender = function(){ if(_ar) _ar(); if(document.body.dataset.view !== "buch") document.body.dataset.erw = ""; hoehe(); };
  window.addEventListener("resize", hoehe);
})();

/* ---------- Suche: Überschriften + Textanfang aller Kapitel, Buchname als Ort ---------- */
(window.SP_SUCHE = window.SP_SUCHE || []).push(function(add){
  (window.SP_ERW_BOOKS || []).forEach(function(bk){ bk.kap.forEach(function(K){ if(K.f) add(K.t, bk.t + " · " + K.s, "buch/" + bk.id + "/" + K.id, K.p, [K.s], bk.buch); }); });
  (window.SP_ERW_SUCHE || []).forEach(function(r){
    var bk = erwB(r[0]); if(!bk) return; var K = erwK(bk, r[1]); if(!K) return;
    add(r[3], bk.t + " · " + K.t, "buch/" + r[0] + "/" + r[1] + "/" + r[2], r[4], [r[5]], bk.buch);
  });
});
