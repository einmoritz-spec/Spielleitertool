/* SLUGBLASTER – Abenteuer „Saubere Sache“ (#abenteuer[/<szene>]): Überblick · Szenen · Figuren.
   Daten: data/abenteuer-a.js (Überblick, Figuren, Leisten), data/abenteuer-b.js (Szenen).
   Szene = Unterszenen links (einklappbar, b), rechts alle offen. Leisten landen per Klick auf der Folge-Tafel (ST.leisten). */
var SBA = (function(){
  var A = function(){ return SB_AB; }, SZ = function(){ return SB_AB_SZ; };
  function tabs(){ return [["ueber", "Überblick"]].concat(SZ().map(function(s){ return [s.id, s.t]; })).concat([["figuren", "Figuren"]]); }
  function used(k){ return !!(ST.benutzt && ST.benutzt[k]); }
  function tog(k){ ST.benutzt = ST.benutzt || {}; if(ST.benutzt[k]) delete ST.benutzt[k]; else ST.benutzt[k] = 1; save(); render(); }
  /* Text: Markdown, S. n → Regelbuch, [[route|Text]] → Seite im Tool */
  function tx(s){
    return md(s).replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, function(m, r, t){ return '<a class="abl" onclick="SBP.open(\'' + r + '\')">' + t + '</a>'; })
      .replace(/S\. (\d+)(–\d+)?/g, function(m, a){ return '<span class="pg" onclick="openBook(\'sb_core\',' + a + ')">' + m + '</span>'; });
  }
  function nsc(id){ var r = null; A().nsc.forEach(function(n){ if(n.id === id) r = n; }); return r; }

  /* ---------- Bausteine ---------- */
  var B = {
    bild: function(b){ return '<figure class="abbild"><img src="img/' + b.x + '.webp" alt="" onclick="SBA.zoom(\'' + b.x + '\')">' + (b.c ? '<figcaption>' + tx(b.c) + '</figcaption>' : "") + '</figure>'; },
    vor: function(b){ return '<div class="abv">' + b.x.map(function(x){ return '<p>' + tx(x) + '</p>'; }).join("") + '</div>'; },
    p: function(b){ return '<p class="abp">' + tx(b.x) + '</p>'; },
    h: function(b){ return '<h4 class="abh">' + esc(b.x) + '</h4>'; },
    ul: function(b){ return '<ul class="dot abu">' + b.x.map(function(x){ return '<li>' + tx(x) + '</li>'; }).join("") + '</ul>'; },
    info: function(b){ return '<div class="abi"><div class="cap">' + esc(b.h) + '</div>' + (b.x.length > 1 ? '<ul class="dot">' + b.x.map(function(x){ return '<li>' + tx(x) + '</li>'; }).join("") + '</ul>' : '<p>' + tx(b.x[0]) + '</p>') + '</div>'; },
    frage: function(b){ return '<div class="abq"><div class="cap">Fragen an die Spieler</div>' + b.x.map(function(x){ return '<p>' + tx(x) + '</p>'; }).join("") + '</div>'; },
    wege: function(b){ return '<div class="abw">' + b.x.map(function(w){ return '<div><b>' + esc(w[0]) + '</b><p>' + tx(w[1]) + '</p></div>'; }).join("") + '</div>'; },
    prob: function(b){
      return '<div class="abr"><div class="cap">' + esc(b.h) + '</div>' + b.x.map(function(x, i){ var k = "ab/" + b.key + "/" + i;
        return '<div class="r' + (used(k) ? " done" : "") + '" onclick="SBA.tog(\'' + k + '\')"><i></i><span>' + tx(x) + '</span></div>'; }).join("") + '</div>';
    },
    wp: function(b){ return '<div class="abwp"><div class="cap">Wegpunkte</div><ol>' + b.x.map(function(w){ return '<li><b>' + esc(w[0]) + '</b> ' + tx(w[1]) + '</li>'; }).join("") + '</ol></div>'; },
    trick: function(b){ return '<div class="abt"><div class="cap">Trick-Gelegenheiten</div><ul>' + b.x.map(function(x){ return '<li>' + tx(x) + '</li>'; }).join("") + '</ul></div>'; },
    res: function(b){ return '<div class="abres">' + b.x.map(function(r){ return '<div><b>' + esc(r[0]) + '</b><p>' + tx(r[1]) + '</p></div>'; }).join("") + '</div>'; },
    links: function(b){ return '<div class="abch">' + b.x.map(function(l){ return '<a onclick="SBP.open(\'' + l[0] + '\')">' + esc(l[1]) + ' ›</a>'; }).join("") + '</div>'; },
    nsc: function(b){ return '<div class="abch nsc">' + b.x.map(function(id){ var n = nsc(id); return n ? '<a onclick="SBA.fig(\'' + id + '\')">' + (n.bild ? '<img src="img/' + n.bild + '.webp" alt="">' : '<span class="ini">' + esc(n.t.charAt(0)) + '</span>') + '<span><b>' + esc(n.t) + '</b><small>' + tx(n.rolle) + '</small></span></a>' : ""; }).join("") + '</div>'; },
    leiste: function(b){
      var L = A().leisten[b.id], id = "ab-" + b.id;
      if(window.SBL && SBL.hat(id)) return '<div class="abls">' + SBL.ein(id) + '<p>' + tx(L.wann) + '</p></div>';
      var vor = L.typ === "wort" ? L.wort.split("").map(function(c){ return '<i>' + c + '</i>'; }).join("") : L.typ === "kasten" ? new Array(L.n + 1).join("<i></i>") : '<em>' + L.n + '</em>';
      return '<div class="abls neu ' + L.art + '"><button onclick="SBA.lege(\'' + b.id + '\')"><span class="vw ' + L.typ + '">' + vor + '</span><span><small>' + (L.art === "gefahr" ? "Gefahr" : "Fortschritt") + ' · starten</small><b>' + esc(L.t) + '</b></span></button><p>' + tx(L.wann) + '</p></div>';
    }
  };
  function blk(b){ try{ return B[b.t](b); }catch(e){ return ""; } }

  /* ---------- Kopf & Tabs ---------- */
  function bar(cur){
    return '<nav class="tabs nbar abbar">' + tabs().map(function(t){ return '<a class="' + (t[0] === cur ? "on" : "") + '" onclick="go(\'abenteuer/' + t[0] + '\')">' + esc(t[1]) + '</a>'; }).join("") + '<span class="sp"></span><a class="abex" onclick="go(\'folge\')">Folge-Tafel ›</a><a class="abex" onclick="go(\'crew\')">Crew ›</a></nav>';
  }

  /* ---------- Überblick ---------- */
  function ueber(){
    var a = A(), R = a.run;
    var kette = a.ablauf.map(function(s, i){ return '<a class="abk" onclick="go(\'abenteuer/' + s[0] + '\')"><b>' + (i + 1) + '</b><span><strong>' + esc(s[1]) + '</strong><small>' + esc(s[2]) + '</small></span></a>'; }).join("");
    return '<div class="abo">' +
      '<header class="abhd"><div><h1>' + esc(a.t) + '</h1><p>' + esc(a.zeile) + '</p></div><span>' + esc(a.dauer) + '</span></header>' +
      '<div class="abog">' +
        '<section><div class="cap">Worum es geht</div>' + a.kurz.map(function(x){ return '<p class="abp">' + tx(x) + '</p>'; }).join("") +
          '<div class="abi sl"><div class="cap">' + esc(a.geheim.t) + '</div>' + a.geheim.x.map(function(x){ return '<p>' + tx(x) + '</p>'; }).join("") + '</div></section>' +
        '<section><div class="cap">Der Run</div><p class="abp"><b>Ziel:</b> ' + tx(R.ziel) + '</p>' +
          '<div class="abres">' + R.preis.map(function(p){ return '<div><b>' + esc(p[0]) + '</b><p>' + tx(p[1]) + '</p></div>'; }).join("") + '</div>' +
          '<div class="cap">Hindernisse</div><ul class="dot abu">' + R.hind.map(function(h){ return '<li>' + tx(h) + '</li>'; }).join("") + '</ul><p class="abp">' + tx(R.bite) + '</p>' +
          '<button class="abtafel" onclick="SBA.tafel()">Run auf die Folge-Tafel übernehmen</button><div class="cap">Vorbereitung</div><ol class="abol">' + a.vorbereitung.map(function(v){ return '<li>' + tx(v) + '</li>'; }).join("") + '</ol></section>' +
        '<section><div class="cap">Ablauf</div><div class="abkette">' + kette + '</div><div class="cap">Figuren</div>' + B.nsc({x: a.nsc.map(function(n){ return n.id; })}) + '</section>' +
      '</div></div>';
  }

  /* ---------- Figuren ---------- */
  function karte(n){
    return '<div class="abf"><div class="abfh">' + (n.bild ? '<img src="img/' + n.bild + '.webp" alt="" onclick="SBA.zoom(\'' + n.bild + '\')">' : "") + '<div><h3>' + esc(n.t) + '</h3><small>' + tx(n.rolle) + '</small></div>' + pgl(n.p) + '</div>' +
      '<p class="abz">' + tx(n.zitat) + '</p>' +
      '<dl><dt>Wesen</dt><dd>' + tx(n.wesen) + '</dd><dt>Will</dt><dd>' + tx(n.will) + '</dd><dt>Spielen</dt><dd>' + tx(n.stimme) + '</dd></dl>' +
      (n.werte ? '<div class="cap">Was Sudsy tut</div><ul class="dot abu">' + n.werte.map(function(w){ return '<li>' + tx(w) + '</li>'; }).join("") + '</ul>' : "") +
      ((n.frak || n.monster) ? '<div class="abch">' + (n.monster ? '<a onclick="SBP.open(\'monster/' + n.monster + '\')">Monsterwerte ›</a>' : "") + (n.frak ? '<a onclick="SBP.open(\'fraktion/' + n.frak[0] + '\')">' + esc(n.frak[1]) + ' ›</a>' : "") + '</div>' : "") + '</div>';
  }
  function fGruppe(id){ var g = "crews"; (window.SB_FRAKTIONEN || []).forEach(function(f){ if(f.id === id) g = f.g; }); return g; }
  function figuren(){ return '<div class="abfg">' + A().nsc.map(karte).join("") + '</div>'; }

  /* ---------- Szene ---------- */
  /* Halbbreite Kästen paarweise nebeneinander; ein einzelner läuft über die volle Breite (keine Lücken) */
  var HALB = {info: 1, frage: 1, prob: 1, wp: 1, trick: 1};
  function gruppe(bl){
    var out = "", run = [];
    function flush(){
      if(run.length === 1) out += blk(run[0]);
      else if(run.length) out += '<div class="abpaar">' + run.map(function(b, i){ return '<div' + (i === run.length - 1 && run.length % 2 ? ' class="voll"' : "") + '>' + blk(b) + '</div>'; }).join("") + '</div>';
      run = [];
    }
    var ls = [];
    function lflush(){ if(ls.length) out += '<div class="ablrow">' + ls.map(blk).join("") + '</div>'; ls = []; }
    bl.forEach(function(b){
      if(b.t === "leiste"){ flush(); ls.push(b); return; }
      lflush();
      if(HALB[b.t]) run.push(b); else { flush(); out += blk(b); }
    });
    flush(); lflush(); return out;
  }
  function zu(){ try{ return localStorage.getItem("sb_side") === "0"; }catch(e){ return false; } }
  function szene(s){
    var side = '<aside class="rgs abs"><button class="rgz" onclick="SBR.toggle()" aria-label="Seitenleiste einklappen" title="Seitenleiste einklappen (b)">‹</button>' +
      s.u.map(function(u, i){ return '<a class="' + (i === 0 ? "on" : "") + '" data-u="' + u.id + '" onclick="SBA.spring(\'' + u.id + '\')">' + esc(u.t) + '</a>'; }).join("") + '</aside>';
    var main = '<main class="rgm2 abm"><p class="abkurz">' + esc(s.kurz) + '</p>' + s.u.map(function(u){ return '<section class="abu2" id="abu-' + u.id + '"><h2>' + esc(u.t) + '</h2>' + gruppe(u.b) + '</section>'; }).join("") + '</main>';
    return '<div class="rgw abw2' + (zu() ? " zu" : "") + '"><button class="rgo2" onclick="SBR.toggle()" aria-label="Seitenleiste ausklappen" title="Seitenleiste ausklappen (b)">›</button>' + side + main + '</div>';
  }

  function view(a){
    var cur = a[0] || "ueber", s = null; SZ().forEach(function(x){ if(x.id === cur) s = x; });
    var body = cur === "figuren" ? figuren() : s ? szene(s) : ueber();
    return '<div class="abwrap">' + bar(s || cur === "figuren" ? cur : "ueber") + body + '</div>';
  }
  VIEWS.abenteuer = view; VIEWS.abenteuer.own = true;

  /* Scroll-Spy: aktive Unterszene in der Leiste markieren */
  window.addEventListener("scroll", function(){
    var secs = document.querySelectorAll(".abu2"); if(!secs.length) return;
    var on = secs[0].id; secs.forEach(function(s){ if(s.getBoundingClientRect().top < 170) on = s.id; });
    document.querySelectorAll(".abs a[data-u]").forEach(function(a){ a.classList.toggle("on", "abu-" + a.dataset.u === on); });
  }, {passive: true});

  /* Tasten: ←/→ Szene, ↑/↓ Unterszene, b = Leiste (über SBR) */
  document.addEventListener("keydown", function(e){
    if(/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "") || e.ctrlKey || e.metaKey || e.altKey || document.querySelector(".modal,.gzoom")) return;
    var h = (location.hash || "").slice(1).split("/"); if(h[0] !== "abenteuer") return;
    var T = tabs(), ix = 0; T.forEach(function(t, i){ if(t[0] === (h[1] || "ueber")) ix = i; });
    if(e.key === "ArrowLeft" || e.key === "ArrowRight"){ var n = T[ix + (e.key === "ArrowRight" ? 1 : -1)]; if(n){ go("abenteuer/" + n[0]); e.preventDefault(); e.stopImmediatePropagation(); } }
    if(e.key === "b" && document.querySelector(".abw2")){ SBR.toggle(); }
    if(e.key === "ArrowUp" || e.key === "ArrowDown"){
      var l = [].slice.call(document.querySelectorAll(".abs a[data-u]")); if(!l.length) return;
      var c = 0; l.forEach(function(a, i){ if(a.classList.contains("on")) c = i; });
      var m = l[c + (e.key === "ArrowDown" ? 1 : -1)]; if(m){ SBA.spring(m.dataset.u); e.preventDefault(); }
    }
  }, true);

  return {
    tog: tog,
    tafel: function(){
      var t = (ST.tour = ST.tour || {}); t.name = "Saubere Sache"; t.ziel = "Clip an der 12-Stufen-Hubba drehen und bis Sonnenuntergang bei Corey abgeben.";
      t.hindernis = "Zonensperre an der Kiesgrube · Jam-Bändchen · Sonnenuntergang · BRB"; t.welt = "popularia"; t.mega = true;
      t.preis = {bonus: "Cover: 5 Crew-Style", zeug: "Scram-Cat-Abschiedsboard", gunst: "The Old Guard"};
      ST.biss = (ST.biss || 0) + 2; save(); go("folge");
    },
    lege: function(k){ var L = A().leisten[k], o = {id: "ab-" + k, t: L.t, art: L.art, typ: L.typ, n: L.typ === "wort" ? L.wort.length : L.n, x: 0}; if(L.wort) o.wort = L.wort; SBL.lege(o); },
    fig: function(id){ var n = nsc(id); if(n) modal('<div class="abfm">' + karte(n) + '</div>'); },
    zoom: function(p){ modal('<img class="abzoom" src="img/' + p.replace("/thumb/", "/full/") + '.webp" alt="">'); },
    spring: function(id){ var el = document.getElementById("abu-" + id); if(el) window.scrollTo({top: el.getBoundingClientRect().top + window.scrollY - 150, behavior: "smooth"}); }
  };
})();
