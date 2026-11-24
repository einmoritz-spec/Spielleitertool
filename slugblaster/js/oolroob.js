/* SLUGBLASTER – Untersetting Oolroob (#oolroob[/<tab>[/<id>]]): Überblick · Roob · Probleme · Fraktionen · Signaturen · Kreaturen · Verschiedenes.
   Daten: data/oolroob-a.js, -b.js, -c.js · Karte S. 7 mit Klickflächen · Orange-Thema (body.oo). */
var SBO = (function(){
  var TABS = [["ueber", "Überblick"], ["roob", "Roob"], ["probleme", "Probleme"], ["fraktionen", "Fraktionen"], ["signaturen", "Signaturen"], ["kreaturen", "Kreaturen"], ["misc", "Verschiedenes"]];
  var BK = "sb_oolroob";
  function S(){ var s = (ST.oo = ST.oo || {}); s.auf = s.auf || {}; return s; }
  function used(k){ return !!(ST.benutzt && ST.benutzt[k]); }
  function toggleUsed(k){ ST.benutzt = ST.benutzt || {}; if(ST.benutzt[k]) delete ST.benutzt[k]; else ST.benutzt[k] = 1; save(); render(); }
  function pg(p){ return pgl(p, "S. " + p, BK); }
  function tx(s){ return md(s); }
  function absatz(a){ return (Array.isArray(a) ? a : [a]).map(function(x){ return '<p>' + tx(x) + '</p>'; }).join(""); }
  function rand(t){ return t ? '<p class="oon"><span>' + esc(t) + '</span></p>' : ""; }
  function bar(cur){
    return '<nav class="tabs nbar oob">' + TABS.map(function(t){ return '<a class="' + (t[0] === cur ? "on" : "") + '" onclick="go(\'oolroob/' + t[0] + '\')">' + t[1] + '</a>'; }).join("") + '<span class="sp"></span></nav>';
  }
  function kopf(t, p){ return '<div class="ook"><h1>' + esc(t) + '</h1>' + (p ? pg(p) : "") + '</div>'; }

  /* ---------- Überblick ---------- */
  function ueber(){
    var U = SB_OO.ueber, E = U.einl;
    return '<div class="oow ooueber">' + kopf("Oolroob", U.p) + '<div class="oog3">' +
      '<div class="oox">' + absatz(U.intro) + rand(U.rand) + '</div>' +
      '<div class="oox"><div class="oobox"><div class="cap">' + esc(U.slug.t) + ' ' + pg(U.p) + '</div>' + absatz(U.slug.x) + '</div>' +
      '<div class="oocap">Merkmale</div><ul class="oodot">' + U.merkmale.map(function(m){ return '<li>' + tx(m) + '</li>'; }).join("") + '</ul>' +
      '<div class="oobox"><div class="cap">' + esc(U.mad.t) + '</div><p>' + tx(U.mad.x) + '</p></div></div>' +
      '<div class="oox"><div class="oocov"><img src="' + IMG("oolroob/cover") + '" alt=""></div></div></div>' +
      '<div class="oog2"><div class="oox"><div class="oocap">' + esc(E.t) + ' ' + pg(E.p) + '</div>' + absatz(E.x) + '</div>' +
      '<div class="oox"><div class="oocap">Touchstones</div><ul class="oodot">' + U.touch.map(function(t){ return '<li>' + esc(t) + '</li>'; }).join("") + '</ul><p class="oogr">' + esc(E.zu) + '</p><img class="oologo" src="img/oolroob/cosmic-chill.webp" alt=""></div></div>' +
      credits() + '</div>';
  }
  function credits(){
    var C = SB_OO_C.credits;
    return '<div class="oocr"><div class="oocap">Credits ' + pg(C.p) + '</div><div class="oocg">' + C.grp.map(function(g){ return '<div><b>' + esc(g[0]) + '</b>' + g[1].map(function(x){ return '<span>' + esc(x) + '</span>'; }).join("") + '</div>'; }).join("") + '</div><p class="oolic">' + esc(C.lic) + '</p></div>';
  }

  /* ---------- Roob: Karte + Orte ---------- */
  function sel(n){ var s = S(); s.sel = (s.sel === n ? null : n); save(); render(); if(s.sel){ var e = document.getElementById("oort" + n); if(e && e.scrollIntoView) e.scrollIntoView({block: "nearest", behavior: "smooth"}); } }
  function ortHtml(o, s){
    return '<div id="oort' + o[0] + '" class="oo-o' + (s.sel === o[0] ? " on" : "") + '" onclick="SBO.sel(' + o[0] + ')"><b>' + o[0] + '</b><div><h4>' + esc(o[1]) + '</h4><p>' + tx(o[2]) + '</p>' + (o[5] ? '<p class="oon"><span>' + esc(o[5]) + '</span></p>' : "") + '</div></div>';
  }
  function roob(){
    var s = S(), O = SB_OO.orte, byN = {}; O.forEach(function(o){ byN[o[0]] = o; });
    var pins = O.map(function(o){ return '<button class="oopin' + (s.sel === o[0] ? " on" : "") + '" style="left:' + o[3] + '%;top:' + o[4] + '%" onclick="SBO.sel(' + o[0] + ')" aria-label="' + esc(o[1]) + '"><span>' + o[0] + '</span></button>'; }).join("");
    var liste = SB_OO.gebiete.map(function(g){
      return '<div class="oogb"><div class="oocap">' + esc(g.t) + ' ' + pg(g.p) + '</div>' + g.orte.map(function(n){ return ortHtml(byN[n], s); }).join("") + '</div>';
    }).join("");
    function tb(t){ return '<div class="oox"><div class="oocap">' + esc(t.t) + ' ' + pg(t.p) + '</div><p>' + tx(t.x) + '</p></div>'; }
    var D = SB_OO;
    return '<div class="oow oroob">' + kopf("Roob", 7) + '<div class="oomap"><div class="oomapl"><div class="oomm"><img src="img/oolroob/karte.webp" alt="Karte von Roob">' + pins + '</div></div><div class="oomapr">' + liste + '</div></div>' +
      '<div class="oog3 oogeb">' + tb(D.duenen) + tb(D.straende) + '<div class="oox"><div class="oocap">' + esc(D.hills.t) + ' ' + pg(D.hills.p) + '</div><p>' + tx(D.hills.x) + '</p><div class="oobox"><div class="cap">' + esc(D.dogrock.t) + ' ' + pg(D.dogrock.p) + '</div><p>' + tx(D.dogrock.x) + '</p></div></div></div></div>';
  }

  /* ---------- W66-Listen (Klick = erledigt) ---------- */
  function w66(arr, key){
    return '<div class="oo66">' + arr.map(function(r){ var k = "oo/" + key + "/" + r[0]; return '<div class="r' + (used(k) ? " done" : "") + '" onclick="SBO.used(\'' + k + '\')"><b class="n">' + r[0] + '</b><span>' + tx(r[1]) + '</span></div>'; }).join("") + '</div>';
  }
  function probleme(){
    return '<div class="oow">' + kopf("Probleme", 8) + w66(SB_OO.probleme, "pr") + '<div class="ook k2"><h1>Checkpoints</h1>' + pg(8) + '<span class="oon"><span>' + esc(SB_OO.cpNote) + '</span></span></div>' + w66(SB_OO.checkpoints, "cp") + '</div>';
  }

  /* ---------- Fraktionen ---------- */
  function tog(id){ var a = S().auf; if(a[id]) delete a[id]; else a[id] = 1; save(); render(); }
  function frakKarte(f, single){
    var open = single || !!S().auf[f.id];
    var bild = f.bild ? '<img class="oofi" src="img/oolroob/' + f.bild + '.webp" alt="">' : "";
    var h = '<div class="ooc' + (open ? " open" : "") + '" id="oof' + f.id + '"><div class="ooch" ' + (single ? "" : 'onclick="SBO.tog(\'' + f.id + '\')"') + '><h3>' + esc(f.t) + '</h3>' + pg(f.p) + '<span class="ar">' + (single ? "" : open ? "−" : "+") + '</span></div>' + bild + '<p>' + tx(f.x) + '</p>';
    if(open){
      h += '<p><b>NPCs.</b> ' + tx(f.npc) + '</p>' + (f.assets ? '<p><b>Assets.</b> ' + tx(f.assets) + '</p>' : "") + (f.likes ? '<p><b>Likes.</b> ' + tx(f.likes) + '</p>' : "") + (f.dislikes ? '<p><b>Dislikes.</b> ' + tx(f.dislikes) + '</p>' : "");
      if(f.rand) h += rand(f.rand);
      if(f.rands) h += f.rands.map(rand).join("");
      if(f.situation) h += '<div class="oosit"><b>SITUATION!</b> ' + tx(f.situation) + '</div>';
    }
    return h + '</div>';
  }
  function fraktionen(){
    var F = SB_OO_FRAK;
    return '<div class="oow ofrak">' + F.gruppen.map(function(g){
      var h = '<section class="oogrp"><div class="ook k2"><h1>' + esc(g.t) + '</h1>' + pg(g.p) + '</div><div class="oocards">' + g.f.map(function(f){ return frakKarte(f, g.f.length === 1); }).join("") + '</div>';
      if(g.situation) h += '<div class="oosit w"><b>SITUATION!</b> ' + tx(g.situation) + '</div>';
      if(g.megashift){ var m = g.megashift; h += '<div class="oobox mg"><div class="cap">' + esc(m.t) + ' ' + pg(m.p) + '</div>' + absatz(m.x) + rand(m.rand) + '</div>'; }
      return h + '</section>';
    }).join("") + '</div>';
  }

  /* ---------- Signaturen & Ausrüstung ---------- */
  function sigKarte(x){ return '<div class="oosg"><h4>' + esc(x.t) + '<span class="kst">' + esc(x.k) + '</span></h4><p>' + tx(x.x) + '</p></div>'; }
  function signaturen(){
    var G = SB_OO_C.sig, B = G.board;
    var mods = B.mods.map(function(m){ return '<div class="oosg"><h4>' + esc(m[0]) + '<span class="kst">' + esc(m[1]) + '</span></h4><p>' + tx(m[2]) + '</p></div>'; }).join("");
    return '<div class="oow osig">' + kopf("Signaturen & Ausrüstung", G.p) + '<div class="oog3 oosig">' + G.neu.map(sigKarte).join("") + '<div class="oox"><img class="oosi" src="img/oolroob/tame-impeller.webp" alt=""></div></div>' +
      '<div class="ook k2"><h1>' + esc(B.t) + '</h1>' + pg(B.p) + '</div><div class="oosb"><div class="oox"><img class="oosi t" src="img/oolroob/totem.webp" alt=""></div><div class="oox"><p>' + tx(B.x) + '</p><div class="oocap">Funktion</div><p>' + tx(B.funk) + '</p><div class="oobox"><div class="cap">Aussehen</div><p>' + esc(B.look) + '</p></div>' + B.rand.map(rand).join("") + '</div></div>' +
      '<div class="oocap">Mods</div><div class="oocards g3">' + mods + '</div><div class="ook k2"><h1>Gear</h1>' + pg(15) + '</div><div class="oocards g3">' + G.gear.map(sigKarte).join("") + '</div></div>';
  }

  /* ---------- Kreaturen ---------- */
  function kreaturen(){
    return '<div class="oow okre">' + kopf("Kreaturen der Ebenen", 16) + '<div class="oocards g2">' + SB_OO_C.kreaturen.map(function(k){
      return '<div class="ooc kr"><div class="ooch"><h3>' + esc(k.t) + '</h3>' + pg(k.p) + '</div>' + (k.bild ? '<img class="oofi" src="img/oolroob/' + k.bild + '.webp" alt="">' : "") + '<p>' + tx(k.x) + '</p><ul class="oodot">' + k.l.map(function(x){ return '<li>' + tx(x) + '</li>'; }).join("") + '</ul>' + rand(k.rand) + '</div>';
    }).join("") + '</div></div>';
  }

  /* ---------- Verschiedenes ---------- */
  function tabelle(titel, rows, key, mode){
    return '<div class="oot"><div class="oocap">' + titel + '</div><table class="oot2">' + rows.map(function(r){ var k = "oo/" + key + "/" + r[0]; return '<tr class="' + (used(k) ? "done" : "") + '" onclick="SBO.used(\'' + k + '\')"><td class="n">' + r[0] + '</td><td>' + esc(r[1]) + '</td>' + (r[2] ? '<td>' + esc(r[2]) + '</td>' : "") + '</tr>'; }).join("") + '</table></div>';
  }
  function misc(){
    var M = SB_OO.mega, C = SB_OO_C;
    function zeilen(a){ return a.map(function(x, i){ return [i + 2, x]; }); }
    var n = 0, sn = C.snacks.map(function(x, i){ var a = Math.floor(i / 6) + 1, b = i % 6 + 1; return [a * 10 + b, x]; });
    var sl = C.slang.map(function(x, i){ var a = Math.floor(i / 6) + 1, b = i % 6 + 1; return [a * 10 + b, x[0], x[1]]; });
    return '<div class="oow omisc">' + kopf("Verschiedenes", 18) + '<div class="oog3 omg">' +
      '<div class="oox"><div class="ook k3"><h2>Megashift-Tabellen</h2>' + pg(M.p) + '</div><p>' + tx(M.intro) + '</p>' + tabelle("Nord-Roob (2W6)", zeilen(M.nord), "mn") + tabelle("Süd-Roob (2W6)", zeilen(M.sued), "ms") + '</div>' +
      tabelle("Süßigkeiten & Snacks (W66)", sn, "sn") + tabelle("Slang (W66)", sl, "sl") + '</div></div>';
  }

  function view(a){
    var t = a[0] || "ueber", f = { ueber: ueber, roob: roob, probleme: probleme, fraktionen: fraktionen, signaturen: signaturen, kreaturen: kreaturen, misc: misc }[t] || ueber;
    if(!{ ueber: 1, roob: 1, probleme: 1, fraktionen: 1, signaturen: 1, kreaturen: 1, misc: 1 }[t]) t = "ueber";
    return bar(t) + f();
  }
  VIEWS.oolroob = view; VIEWS.oolroob.own = true;

  function sync(){ document.body.classList.toggle("ooth", /^#oolroob/.test(location.hash)); }
  window.addEventListener("hashchange", sync); sync();
  document.addEventListener("keydown", function(e){
    if(/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "") || e.ctrlKey || e.metaKey || e.altKey || document.querySelector(".modal,.gzoom")) return;
    var h = (location.hash || "").slice(1).split("/");
    if(h[0] !== "oolroob") return;
    if(e.key === "ArrowLeft" || e.key === "ArrowRight"){
      var ix = 0; TABS.forEach(function(x, i){ if(x[0] === (h[1] || "ueber")) ix = i; });
      var n = TABS[ix + (e.key === "ArrowRight" ? 1 : -1)]; if(n){ go("oolroob/" + n[0]); e.preventDefault(); }
    }
  });
  return {sel: sel, tog: tog, used: toggleUsed};
})();
