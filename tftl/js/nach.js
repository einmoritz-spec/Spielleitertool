/* Nachschlagen (Entwurf 5): eigene Tab-Leiste, Kachelraster ohne Seitenleiste, Detail je Karte */
(function(){
  function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  function CX(){ return window.TCTX || {p:"", ls:"tftl_", book:"tftl_core", NACH:window.NACH, NACHDATA:window.NACHDATA, TYPEN:window.TYPEN, SETS:null, L:{}}; }
  /* Kachelraster-Konfiguration: TftL/Flood „Die Typen“ im Tab kids; ES „Die Archetypen“ im Tab reisende (#es/nach/reisende/archetypen[/<id>]) */
  function KA(){
    var C = CX();
    if(C.KACHEL) return C.KACHEL;
    if(C.area === "es") return {tab:"reisende", seg:"archetypen", label:"Die Archetypen", kap:"Kap. 3", s:66, es:1,
      list:function(){ return (window.ES && ES.ARCHETYPEN || []).map(esAdapt); }, href:function(id){ return "es/nach/reisende/archetypen/" + id; }, rest:function(r){ return r[1] === "archetypen" ? r[2] : null; }};
    return {tab:"kids", seg:"typen", label:"Die Typen", kap:"Kap. 4", s:49,
      list:function(){ return CX().TYPEN || []; }, href:function(id){ return CX().p + "nach/kids/" + id; }, rest:function(r){ return r[1]; }};
  }
  function strip(h){ return String(h || "").replace(/<[^>]+>/g, ""); }
  function tab2(a){ return (a || []).map(function(x){ return x[0] + ": " + x[1]; }); }
  /* ES: Archetyp -> Typ-Form (Raster + Detail). Ein eigener Renderer ES.archetypen(app, id) aus E2 hat Vorrang. */
  function esAdapt(a){
    return {id:a.id, name:a.name, s:a.s, bild:a.bild, key:[a.schluessel], items:[a.geld || "Keines"], text:strip(a.html),
      gegenstand:(a.gegenstand || []).length ? tab2(a.gegenstand) : null, talente:tab2(a.talente), traum:tab2(a.traum), schwaeche:tab2(a.schwaeche), neurocaster:tab2(a.neurocaster), hinweis:a.hinweis ? [strip(a.hinweis)] : null,
      zitat:a.zitat ? ["„" + a.zitat.t + "“ – " + a.zitat.von] : null};
  }
  var TBES = [["zitat","Zitat"],["gegenstand","Persönlicher Gegenstand"],["talente","Talent"],["traum","Traum"],["schwaeche","Schwäche"],["neurocaster","Neurocaster"],["hinweis","Hinweis"]];
  var SETS0 = {welt:["welt"], loops:["schweden","us","de80","taunus","broads"], schirm:["schirm"], kids:["kids"], aerger:["aerger"], mysterium:["mysterium"], landschaft:["landschaft"]};
  var TB0 = [["items","Kultgegenstand"],["problem","Problem"],["drive","Antrieb"],["pride","Stolz"],["relK","Beziehungen zu anderen Kids"],["relN","Beziehungen zu NSC"],["anker","Anker"],["namen","Typische Namen"]];
  function loop(){ var l = ""; try{ l = localStorage.getItem(CX().ls + "loop") || ""; }catch(e){} return l; }
  function nm(t){ var b = loop() === "boulder"; return esc(t).replace(/\{\{([^|}]*)\|([^}]*)\}\}/g, function(m, a, c){ return b ? c : a; }).replace(/&lt;(\/?)b&gt;/g, "<$1b>"); }
  function pg(s, b){ return '<a class="pgl" data-b="' + (b || CX().book) + '" data-s="' + s + '">S. ' + s + '</a>'; }
  function list(a){ return '<ul>' + a.map(function(x){ return '<li>' + nm(x) + '</li>'; }).join("") + '</ul>'; }
  function box(t, a){ return '<section class="nbox"><h4>' + t + '</h4>' + list(a) + '</section>'; }
  function chips(a){ return a.map(function(k){ return '<span class="kc2">' + esc(k) + '</span>'; }).join(""); }

  function typen(app){
    var K = KA();
    if(K.es && window.ES && typeof ES.archetypen === "function"){ ES.archetypen(app, null); return; }
    var TY = K.list();
    app.className = "page nach";
    app.innerHTML = '<div class="nh"><h1>' + K.label + '</h1><small>' + K.kap + ' · ' + pg(K.s) + '</small></div><div class="tgrid">' + TY.map(function(t){
      return '<div class="ty" data-t="' + t.id + '"><img src="img/' + t.bild + '.webp" alt=""><div><h3>' + esc(t.name) + ' <small>' + pg(t.s) + '</small></h3>' +
        '<h5>' + (K.es ? 'Schlüsselattribut' : 'Schlüsselfertigkeiten') + '</h5><div>' + chips(t.key) + '</div><h5>' + (K.es ? 'Bargeld' : 'Typischer Gegenstand') + '</h5><p>' + nm(t.items.join(" · ")) + '</p></div></div>';
    }).join("") + '</div>';
  }
  function typ(app, id){
    var C = CX(), K = KA(), t = K.list().filter(function(x){ return x.id === id; })[0];
    if(!t) return typen(app);
    if(K.es && window.ES && typeof ES.archetypen === "function"){ ES.archetypen(app, id); return; }
    app.className = "page nach";
    app.innerHTML = '<div class="nh"><a class="chip" href="#' + C.p + 'nach/' + K.tab + (K.es ? '/' + K.seg : '') + '">‹ ' + (K.es ? 'Archetypen' : 'Typen') + '</a><h1>' + esc(t.name) + '</h1><small>' + pg(t.s) + '</small></div>' +
      '<div class="tdet"><img src="img/' + t.bild + '.webp" alt=""><div><p class="tx">' + esc(t.text) + '</p><h5>' + (K.es ? 'Schlüsselattribut' : 'Schlüsselfertigkeiten') + '</h5><div>' + chips(t.key) + '</div></div></div>' +
      '<div class="nbg">' + (K.es ? TBES : C.L && C.L.typBoxes || TB0).map(function(x){ var v = t[x[0]]; return v ? box(x[1], typeof v === "string" ? [v] : v) : ""; }).join("") + '</div>';
  }

  /* ---------- Lesekapitel (Baum links, Inhalt flach) ---------- */
  var collapsed = false;
  function bl(b){
    var t = b[0];
    if(t === "p") return '<p>' + nm(b[1]) + '</p>';
    if(t === "h") return '<h3>' + nm(b[1]) + '</h3>';
    if(t === "liste") return list(b[1]);
    if(t === "kasten") return '<section class="nkasten"><h4>' + nm(b[1]) + '</h4>' + (b[2] || []).map(function(x){ return '<p>' + nm(x) + '</p>'; }).join("") + '</section>';
    if(t === "nliste") return '<ol>' + b[1].map(function(x){ return '<li>' + nm(x) + '</li>'; }).join("") + '</ol>';
    if(t === "kliste") return '<section class="nkasten"><h4>' + nm(b[1]) + '</h4>' + list(b[2]) + '</section>';
    if(t === "kk") return '<section class="nkk"><h4>' + nm(b[1]) + '</h4>' + (b[2] || []).map(function(x){ return '<p>' + nm(x) + '</p>'; }).join("") + '</section>';
    if(t === "zit") return '<blockquote class="nzit">' + nm(b[1]) + (b[2] ? '<cite>' + nm(b[2]) + '</cite>' : '') + '</blockquote>';
    if(t === "bsp") return '<section class="nbsp">' + b[1].map(function(x){ return '<p><b>' + nm(x[0]) + '</b> ' + nm(x[1]) + '</p>'; }).join("") + '</section>';
    if(t === "stat") return statBlock(b[1]);
    if(t === "raster") return '<div class="nrast">' + b[1].map(function(c){ return '<div>' + c.map(bl).join("") + '</div>'; }).join("") + '</div>';
    if(t === "fk") return fkCard(b[1]);
    if(t === "orte") return '<div class="nort">' + b[1].map(function(g){ return '<section><h4>' + nm(g[0]) + '</h4><ul>' + g[1].map(function(o){ return '<li>' + nm(o[0]) + (o[1] ? ' ' + pg(o[1]) : '') + '</li>'; }).join("") + '</ul></section>'; }).join("") + '</div>';
    if(t === "w") return wuerfelTab(b);
    if(t === "bild" && b[2] && typeof b[2] === "object") return '<img class="nimg' + (b[2].klein ? ' k' : '') + '" src="img/' + esc(b[1]) + (/\.\w+$/.test(b[1]) ? '' : '.webp') + '" alt="">';
    if(t === "bild" && b[2] && b[2] !== "w" && b[2] !== true) return '<figure class="nfig' + (b[4] ? ' k' : '') + '"><img src="img/' + esc(b[1]) + '.webp" alt="' + esc(b[2]) + '" onclick="window.open(this.src)"><figcaption>' + nm(b[2]) + (b[3] ? ' · ' + pg(b[3]) : '') + '</figcaption></figure>';
    if(t === "bild") return '<img class="nimg' + (b[2] ? ' w' : '') + '" src="img/' + esc(b[1]) + '.webp" alt=""' + (b[2] ? ' onclick="window.open(this.src)" style="cursor:zoom-in"' : '') + '>';
    if(t === "tabelle") return '<table class="ntab"><thead><tr>' + b[1].map(function(h){ return '<th>' + nm(h) + '</th>'; }).join("") + '</tr></thead><tbody>' + b[2].map(function(r){ return '<tr>' + r.map(function(c){ return '<td>' + nm(c) + '</td>'; }).join("") + '</tr>'; }).join("") + '</tbody></table>';
    return "";
  }
  /* Werteblock (Buch-Kasten) und Zufallstabelle mit Würfelknopf (ES) */
  function fkPart(o){
    return (o.t ? '<p>' + nm(o.t) + '</p>' : '') + (o.l ? '<ul>' + o.l.map(function(x){ return '<li>' + nm(x) + '</li>'; }).join("") + '</ul>' : '') +
      (o.tab ? bl(["tabelle", o.tab[0], o.tab[1]]) : '') + (o.b ? '<h5>Bonuseffekte</h5><ul>' + o.b.map(function(x){ return '<li>' + nm(x) + '</li>'; }).join("") + '</ul>' : '');
  }
  function fkCard(o){
    return '<section class="nfk"><h4>' + nm(o.n) + '</h4>' + fkPart(o) + (o.u || []).map(function(u){ return '<h6>' + nm(u.n) + '</h6>' + fkPart(u); }).join("") + '</section>';
  }
  function statBlock(o){
    return '<section class="stat"><h4>' + nm(o.name) + (o.s ? ' <small>' + pg(o.s) + '</small>' : '') + '</h4>' +
      (o.w ? '<div class="at">' + o.w.map(function(a){ return '<span>' + esc(a[0]) + '<b>' + esc(a[1]) + '</b></span>'; }).join("") + '</div>' : '') +
      (o.z || []).map(function(z){ return '<p><b>' + nm(z[0]) + ':</b> ' + nm(z[1]) + '</p>'; }).join("") + (o.html || "") + '</section>';
  }
  function wuerfelTab(b){
    return '<section class="nw" data-d="' + esc(b[2]) + '"><h4>' + nm(b[1]) + (b[4] ? ' <small>' + pg(b[4]) + '</small>' : '') + ' <button class="nwb" type="button">' + esc(b[2]) + ' würfeln</button></h4>' +
      '<table class="ntab"><tbody>' + b[3].map(function(r){ return '<tr data-k="' + esc(r[0]) + '"><th>' + nm(r[0]) + '</th><td>' + nm(r[1]) + '</td></tr>'; }).join("") + '</tbody></table></section>';
  }
  function roll(d){
    function d6(){ return 1 + Math.floor(Math.random() * 6); }
    if(d === "D66") return d6() * 10 + d6();
    if(d === "2D6") return d6() + d6();
    return d6();
  }
  function hit(k, v){
    var m = String(k).match(/^\s*(\d+)\s*(?:[–-]\s*(\d+)|(\+))?\s*$/); if(!m) return false;
    var lo = +m[1], hi = m[3] ? Infinity : (m[2] ? +m[2] : lo); return v >= lo && v <= hi;
  }
  /* Kurze Abschnitte zu Gruppen zusammenfassen (Seitenleisten-Eintrag + flach untereinander) */
  function tlen(x){ if(x == null) return 0; if(typeof x === "string") return strip(x).length; if(typeof x === "number") return 0; if(Array.isArray(x)){ var n = 0; x.forEach(function(y){ n += tlen(y); }); return n; } if(typeof x === "object"){ var m = 0; Object.keys(x).forEach(function(k){ m += tlen(x[k]); }); return m; } return 0; }
  function gruppen(list){
    var out = [], g = null, tot = 0;
    list.forEach(function(a){
      var n = tlen(a.bloecke);
      if(g && tot < 9000 && tot + n <= 20000){ g.items.push(a); tot += n; return; }
      g = {items:[a]}; tot = n; out.push(g);
    });
    return out;
  }
  function lese(app, tab, rest, extraFirst){
    var C = CX(), ND = C.NACHDATA || window.NACHDATA, SETS = C.SETS || SETS0;
    var sets = (SETS[tab] || []).filter(function(k){ return ND && ND[k]; });
    var multi = sets.length > 1;
    var cur = null, setKey = sets[0];
    var K = KA();
    if(extraFirst && (!rest[1] || rest[1] === K.seg)){ cur = "typen"; }
    else if(multi && rest[1] && sets.indexOf(rest[1]) >= 0){ setKey = rest[1]; cur = rest[2]; }
    else if(!multi){ cur = rest[1]; }
    var D = setKey ? ND[setKey] : null;
    var sec = null, jump = null;
    if(cur !== "typen" && D){ sec = D.abschnitte.filter(function(a){ return a.id === cur; })[0] || D.abschnitte[0]; }
    var base = "#" + C.p + "nach/" + tab + "/";
    var tree = "", grp = null, subs = [];
    if(extraFirst) tree += '<a class="ni' + (cur === "typen" ? ' on' : '') + '" href="' + base + K.seg + '">' + K.label + '</a>';
    sets.forEach(function(k){
      var d = ND[k];
      var aktiv = !multi || d === D;
      if(multi) tree += aktiv ? '<div class="ng">' + esc(d.titel.split(":")[0]) + '</div>' : '<a class="ng zu" href="' + base + k + '/' + d.abschnitte[0].id + '">' + esc(d.titel.split(":")[0]) + ' ▸</a>';
      if(!aktiv && sets.length > 3) return;
      gruppen(d.abschnitte).forEach(function(g){
        var f = g.items[0], on = cur !== "typen" && sec && d === D && g.items.some(function(x){ return x.id === sec.id; });
        if(on) grp = g;
        var pre = base + (multi ? k + "/" : "");
        tree += '<a class="ni' + (on ? ' on' : '') + '" href="' + pre + f.id + '">' + esc(f.titel.split(":")[0]) + '</a>';
      });
    });
    var main = "";
    if(cur === "typen") main = null;
    else if(sec){
      var its = grp ? grp.items : [sec], f0 = its[0];
      main = '<div class="nh"><h1>' + nm(f0.titel) + '</h1><small>' + (D.kap ? esc(D.kap) + ' · ' : '') + (f0.s ? pg(f0.s, D.buch) : '') + '</small></div><div class="ntext">' + f0.bloecke.map(bl).join("") +
        its.slice(1).map(function(x){ return '<h2 class="nsub" id="nj-' + x.id + '">' + nm(x.titel) + (x.s ? ' <small>' + pg(x.s, D.buch) + '</small>' : '') + '</h2>' + x.bloecke.map(bl).join(""); }).join("") + '</div>';
      jump = sec.id !== f0.id ? sec.id : null;
    }
    else main = '<div class="nh"><h1>' + esc(((C.NACH || window.NACH).filter(function(x){ return x[0] === tab; })[0] || [0, tab])[1]) + '</h1></div>';
    return {tree: tree, main: main, typen: cur === "typen", jump: jump, D: D, sub: "", n: (tree.match(/class="ni/g) || []).length};
  }
  /* Kapitel-Header: gleiche Bausteine wie der Mysterium-Header (.shd, Scroll-Variable --p); nur mit gesichertem Eröffnungsbild (Feld bild im NACH-Tab bzw. Set-Datensatz) */
  function banner(tab, D){
    var C = CX(), n = (C.NACH || window.NACH || []).filter(function(x){ return x[0] === tab; })[0] || [], img = n[2] || (D && D.bild);
    if(!img) return "";
    return '<div class="shd"><div class="shi" style="background-image:url(img/' + esc(img) + '.webp)"></div><div class="shg"></div><div class="shb"></div><div class="sht"><div><small>' + esc(D && D.kap || "") + '</small><b>' + esc(n[3] || (D && D.titel) || n[1] || "") + '</b></div></div></div>';
  }
  function bannerInit(app){
    var sh = app.querySelector(".shd"), tk = 0; if(!sh) return;
    function upd(){ tk = 0; var B = parseFloat(getComputedStyle(sh).getPropertyValue("--B")) || 68, D = Math.max(1, sh.offsetHeight - B), p = Math.min(1, Math.max(0, (window.pageYOffset || 0) / D)); sh.style.setProperty("--p", p.toFixed(3)); }
    window.__shOnScroll = function(){ if(!tk) tk = requestAnimationFrame(upd); };
    if(!window.__shBound){ window.__shBound = 1; window.addEventListener("scroll", function(){ if(window.__shOnScroll) window.__shOnScroll(); }, {passive: true}); }
    upd();
  }
  /* Eine Tab-Leiste für alles: Vorbereitung, Spielwerkzeuge, Trenner, Buchkapitel (TftL und Flood) */
  var KURZ = {"Das Mysterium":"Mysterium","Mystery-Landschaft":"Landschaft","Spielleiterschirm":"Schirm"};
  var GR = [["Die Welt",["welt","loops","pacifica"]],["Regeln",["kids","aerger","reisende","kampf","reise"]],["Spielleitung",["mysterium","landschaft","schirm","bedrohungen"]]];
  window.TX_G = function(C){
    var have = (C.NACH || []).map(function(n){ return n[0]; }), out = [];
    GR.forEach(function(g){ var k = g[1].filter(function(x){ return have.indexOf(x) >= 0; }); if(k.length) out.push({name: k.length > 1 ? g[0] : (function(){ var n = (C.NACH || []).filter(function(y){ return y[0] === k[0]; })[0]; return KURZ[n[1]] || n[1]; })(), keys: k}); });
    return out;
  };
  window.TX_PLAY = function(C){ var B = (window.BEREICHE || {})[C.area]; return B ? (B.tabs || []).filter(function(t){ return t[0] !== "start"; }).map(function(t){ return [t[0], t[0] === "kids" && C.L && C.L.unsere ? C.L.unsere : t[1]]; }) : []; };
  window.TX_SUBHTML = function(C, on){
    var pl = window.TX_PLAY(C); if(C.area === "es" || !pl.some(function(t){ return t[0] === on; })) return "";
    return pl.map(function(t){ return '<a' + (t[0] === on ? ' class="on"' : '') + ' href="#' + C.p + t[0] + '">' + esc(t[1]) + '</a>'; }).join("");
  };
  window.TX_TABS = function(C, on){
    var B = (window.BEREICHE || {})[C.area], p = C.p || "";
    if(!B) return null;
    function a(href, label, key){ return '<a href="#' + href + '"' + (key === on ? ' class="on"' : '') + '>' + esc(label) + '</a>'; }
    var h = "", tl = B.tabs || [];
    tl.forEach(function(t){ if(t[0] === "start") h += a(p + "start", t[1], "start"); });
    var pl = window.TX_PLAY(C);
    if(C.area === "es") tl.forEach(function(t){ if(t[0] !== "start") h += a(p + t[0], t[1], t[0]); });
    else if(pl.length) h += '<a' + (pl.some(function(t){ return t[0] === on; }) ? ' class="on"' : '') + ' href="#' + p + pl[0][0] + '">Spiel</a>';
    window.TX_G(C).forEach(function(g){ h += (g === window.TX_G(C)[0] ? '<span class="tsep"></span>' : '') + '<a' + (on && g.keys.indexOf((on.split("/")[1] || "")) >= 0 && on.indexOf("nach/") === 0 ? ' class="on"' : '') + ' href="#' + p + 'nach/' + g.keys[0] + '">' + esc(g.name) + '</a>'; });
    return h;
  };
  window.renderNach = function(app, tabs, rest){
    var C = CX(), tab = rest[0] || "welt";
    tabs.innerHTML = window.TX_TABS(C, "nach/" + tab) || (C.NACH || []).map(function(n){ return '<a href="#' + C.p + 'nach/' + n[0] + '"' + (n[0] === tab ? ' class="on"' : '') + '>' + esc(n[1]) + '</a>'; }).join("");
    app.onclick = function(e){
      var ty = e.target.closest(".ty"); if(ty && !e.target.closest(".pgl")){ location.hash = KA().href(ty.dataset.t); return; }
      var wb = e.target.closest(".nwb"); if(wb){ var sc = wb.closest(".nw"), v = roll(sc.dataset.d); sc.querySelectorAll("tr").forEach(function(tr){ tr.classList.toggle("hit", hit(tr.dataset.k, v)); }); wb.textContent = sc.dataset.d + ': ' + v; return; }
      var el = e.target.closest(".pgl"); if(el){ e.preventDefault(); e.stopPropagation(); if(window.BV) BV.open(el.dataset.b, +el.dataset.s); return; }
      var nj = e.target.closest(".nj"); if(nj){ var tg = document.getElementById("nj-" + nj.dataset.j); if(tg){ e.preventDefault(); tg.scrollIntoView({behavior:"smooth", block:"start"}); return; } }
      if(e.target.closest("#nsT")){ collapsed = !collapsed; app.classList.toggle("nsc", collapsed); }
    };
    var K = KA(), kid = tab === K.tab ? K.rest(rest) : null;
    if(kid && K.list().some(function(x){ return x.id === kid; })){ typ(app, kid); return; }
    var L = lese(app, tab, rest, tab === K.tab);
    app.className = "page nach" + (collapsed ? " nsc" : "");
    var bn = "", solo = L.n < 2 && !L.typen;
    var grp = window.TX_G(C).filter(function(g){ return g.keys.indexOf(tab) >= 0; })[0], nm2 = {};
    (C.NACH || []).forEach(function(n){ nm2[n[0]] = KURZ[n[1]] || n[1]; });
    var kap = grp && grp.keys.length > 1 ? '<div class="unter">' + grp.keys.map(function(k){ return '<a' + (k === tab ? ' class="on"' : '') + ' href="#' + C.p + 'nach/' + k + '">' + esc(nm2[k]) + '</a>'; }).join("") + '</div>' : "";
    var u2 = (L.sub || "").replace('class="unter"', 'class="unter u2"');
    function wrap(inner){ return kap + u2 + '<div class="nbody">' + inner + '</div>'; }
    function side(){ return solo ? "" : '<nav class="nside"><button id="nsT" title="Menü einklappen">‹</button>' + L.tree + '</nav>'; }
    var cls = "page nach nl nhb" + (kap ? "" : " nk0") + (L.sub ? " mu2" : "") + (solo ? " ns1" : "") + (collapsed && !solo ? " nsc" : "");
    if(L.typen){ var tmp = document.createElement("div"); typen(tmp); app.className = cls; app.innerHTML = wrap(side() + '<div class="nmain">' + tmp.innerHTML + '</div>'); return; }
    if(!L.tree){ app.innerHTML = L.main; return; }
    app.className = cls;
    app.innerHTML = wrap(side() + '<div class="nmain">' + L.main + '</div>');
    var sd = app.querySelector(".nside"), on = app.querySelector(".ni.on"); if(sd && on) sd.scrollTop = Math.max(0, on.offsetTop - 60);
    if(L.jump){ var jt = document.getElementById("nj-" + L.jump); if(jt) setTimeout(function(){ jt.scrollIntoView({block:"start"}); }, 30); }
  };
  document.addEventListener("keydown", function(e){
    if(e.key !== "b" || e.ctrlKey || e.metaKey || /INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "")) return;
    var a = document.getElementById("app"); if(a && a.classList.contains("nl")){ collapsed = !collapsed; a.classList.toggle("nsc", collapsed); }
  });
})();
