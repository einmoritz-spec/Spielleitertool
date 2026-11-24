/* Volltextsuche (Taste „f“) über alle Inhalte von Otherscape – Engine: ../shared/gsuche.js */
"use strict";
(function(){
  var W = window;
  function tt(o){ if(o && typeof o === "object" && !Array.isArray(o) && typeof o.t === "string"){ var c = {}; Object.keys(o).forEach(function(k){ if(k !== "t") c[k] = o[k]; }); return c; } return o; }
  function wait(fn, cb, n){ var e = fn(); if(e) return cb(e); if((n || 0) > 40) return; setTimeout(function(){ wait(fn, cb, (n || 0) + 1); }, 100); }
  function flash(e){ for(var p = e.parentElement; p; p = p.parentElement) if(p.tagName === "DETAILS") p.open = true; if(e.tagName === "DETAILS") e.open = true; e.scrollIntoView({behavior: "smooth", block: "center"}); }
  function norm(s){ return String(s || "").trim().toLowerCase(); }
  /* Ziel: Hash setzen, danach (optional) Element suchen und hinscrollen */
  function go(hash, finder){
    return function(){
      var same = location.hash === hash;
      if(!same) location.hash = hash; else if(typeof route === "function") route();
      if(finder) setTimeout(function(){ wait(finder, flash); }, 150);
    };
  }
  function byId(id){ return function(){ return document.getElementById(id); }; }
  function byText(sel, txt){ txt = norm(txt); return function(){ var l = document.querySelectorAll(sel); for(var i = 0; i < l.length; i++){ if(norm(l[i].textContent).indexOf(txt) === 0) return l[i]; } return null; }; }
  function pre(){ var ps = []; if(typeof OS_ADV_LIST !== "undefined" && typeof loadAdv === "function") OS_ADV_LIST.forEach(function(a){ if(hasData(a.id)) ps.push(loadAdv(a.id)); }); return Promise.all(ps); }
  var loaded = false;
  function ensure(){ if(loaded) return Promise.resolve(); return pre().then(function(){ if(!loaded){ loaded = true; GSuche.add(function(){}); } }); }

  GSuche.add(function(add){
    var N = function(n){ return W[n] || []; };
    /* Abenteuer, Fraktionen, Tokyo-Setting, Gegner */
    if(typeof OS_ADV !== "undefined" && typeof OS_ADV_LIST !== "undefined"){
      OS_ADV_LIST.forEach(function(L){
        var a = OS_ADV.find(function(x){ return x.id === L.id; }); if(!a) return;
        var kat = L.kat, ber = kat === "fraktion" ? "Fraktionen" : kat === "setting" ? "Tokyo" : kat === "gegner" ? "Gegner" : "Abenteuer";
        var base = kat === "fraktion" ? "#/fraktionen/" + a.id : kat === "setting" ? "#/tokyo/" + a.id : "#/adv/" + a.id;
        add(a.titel, ber, kat === "gegner" ? "#/adv/" + a.id : base, [L.sub, a.sub, L.tag]);
        a.sektionen.forEach(function(s, si){
          var bl = s.bloecke || [], rest = bl.filter(function(b){ return b.t !== "challenge"; }).map(tt);
          var h = kat === "fraktion" || kat === "setting" ? (si ? go(base, byId("sec_" + s.id)) : base) : "#/adv/" + a.id + "/" + s.id;
          if(rest.length || kat !== "gegner") add(a.titel + " › " + s.titel, ber, h, [s.gruppe, rest]);
          bl.forEach(function(b, bi){
            if(b.t !== "challenge") return;
            var hh = kat === "gegner" ? function(){
              if(typeof GEG_CAT !== "undefined") GEG_CAT = "";
              var f = function(){ return typeof buildGegner === "function" ? buildGegner() : null; };
              var done = function(items){ var n = items.findIndex(function(x){ return x.a.id === a.id && x.s.id === s.id && x.i === bi; });
                var fin = function(){ wait(function(){ return document.querySelector('#gegList .geg[data-n="' + n + '"]'); }, flash); };
                if(location.hash === "#/gegner"){ if(typeof renderGegner === "function") renderGegner().then(fin); } else { location.hash = "#/gegner"; setTimeout(fin, 200); } };
              f().then(done);
            } : h;
            add(b.name || s.titel, kat === "gegner" ? "Gegner" : "Challenges", hh, [tt(b), kat === "gegner" ? "" : a.titel + " " + s.titel]);
          });
        });
      });
    }
    /* Regelwerk (Grundregeln, Metro-Regeln, Serien, Power-Sets) */
    var seen = {};
    (typeof OS_REGELN !== "undefined" ? OS_REGELN : []).concat(N("OS_METRO_REGELN_1"), N("OS_METRO_REGELN_2"), N("OS_METRO_REGELN_3")).forEach(function(r){
      if(seen[r.id]) return; seen[r.id] = 1;
      add(r.titel, "Regelwerk", go("#/regeln", byId("rg_" + r.id)), (r.bloecke || []).map(tt));
    });
    /* Metro-Setting */
    if(typeof OS_METRO !== "undefined"){
      var M = [["w", "Welt", OS_METRO.welt], ["a", "Schlüsselakteure", OS_METRO.akteure], ["f", "Archetypen", N("OS_METRO_ARCHETYPEN")], ["c", "Crew-Hooks", N("OS_METRO_CREW_HOOKS")],
        ["j", "Jobs", N("OS_METRO_JOBS")], ["o", "Ortstypen", N("OS_METRO_ORTE")], ["h", "Story-Hooks", N("OS_METRO_HOOKS")], ["s", "Szenen-Trends", N("OS_METRO_SZENEN")], ["p", "Weltanschauungen", N("OS_METRO_PHILO")], ["g", "Glossar", N("OS_METRO_GLOSSAR")]];
      M.forEach(function(g){ (g[2] || []).forEach(function(w, i){
        add(g[1] + " › " + w.n, "Metro", go("#/metro", byId(g[0] === "g" ? "mt_sec_g" : "mt_" + g[0] + i)), w);
      }); });
    }
    /* Archetypen */
    if(W.OS_ARCHETYPEN){
      add("Archetypen", "Archetypen", "#/archetypen", W.OS_ARCHETYPEN.intro);
      W.OS_ARCHETYPEN.gruppen.forEach(function(g){ g.archetypen.forEach(function(a){ add(g.name + " › " + a.name, "Archetypen", go("#/archetypen", byId("ar_" + a.id)), a); }); });
    }
    /* Charaktererstellung */
    if(W.OS_CHARAKTERERSTELLUNG){
      add(W.OS_CHARAKTERERSTELLUNG.titel, "Charaktererstellung", "#/charaktererstellung", W.OS_CHARAKTERERSTELLUNG.intro);
      W.OS_CHARAKTERERSTELLUNG.schritte.forEach(function(s){ add(s.titel, "Charaktererstellung", go("#/charaktererstellung", byId("ce_" + s.id)), s); });
    }
    /* //RUN */
    if(W.OS_RUN){
      W.OS_RUN.abschnitte.forEach(function(a){
        add(a.titel, "//RUN", "#/run/" + a.id, [a.intro, a.erinnerungen, a.verweis]);
        (a.rollen || []).concat(a.punkte || []).forEach(function(r){ add(a.titel + " › " + r.titel, "//RUN", "#/run/" + a.id, r); });
      });
    }
    /* Theme Books und Kits */
    if(typeof OS_THEMEBOOKS !== "undefined"){
      Object.keys(OS_THEMEBOOKS).forEach(function(n){
        var T = OS_THEMEBOOKS[n], D = (W.OS_TBDETAIL || {})[n];
        add(n + " (" + T.en + ")", "Theme Books", "#/kits/" + T.p, [T.intro, T.concept, D]);
      });
    }
    if(typeof allKits === "function"){
      allKits().forEach(function(k){
        var T = (W.OS_THEMEBOOKS || {})[k.grp], h = T ? "#/kits/" + T.p : "#/kits";
        add(k.grp + " › " + k.name + " (" + (k.enName || "") + ")", "Theme-Kits", T ? go(h, byText(".kit .kit-t", k.name)) : h, k);
      });
    }
    if(W.OS_KITS && W.OS_KITS.intro) add("Noise-Theme-Kits", "Theme Books", "#/kits", W.OS_KITS.intro);
    /* Straßenkatalog */
    if(typeof OS_KAT !== "undefined"){
      add("Straßenkatalog", "Straßenkatalog", "#/katalog", [OS_KAT.intro, OS_KAT.how, OS_KAT.specials]);
      OS_KAT.cats.forEach(function(c){
        add(c.titel + " (" + c.en + ")", "Straßenkatalog", "#/katalog/" + c.id, [c.intro, c.allg]);
        (c.items || []).forEach(function(it){ add(c.titel + " › " + it.n, "Straßenkatalog", go("#/katalog/" + c.id, byText(".kat-item h4", it.n)), it); });
      });
    }
  });
  W.sucheOpen = function(q){ ensure().then(function(){ GSuche.open(q); }); };
  W.openSearch = W.sucheOpen;
  W.addEventListener("load", function(){ setTimeout(ensure, 1500); });
})();
