/* BROKEN COMPASS – Inhaltsseiten des Adventure Journal.
   Daten: js/data/aj-<bereich>.js setzt BC_DATA["<bereich>"] = {subs:[{id,t,sub,s,blocks:[…]}]}. Format: plan/compass/DATENFORMAT.md */
"use strict";
var BC_DATA = window.BC_DATA || (window.BC_DATA = {});
var INH = (function(){
  var DICE = {1:[5],2:[1,9],3:[1,5,9],4:[1,3,7,9],5:[1,3,5,7,9],6:[1,3,4,6,7,9]};
  function die(n, o){ var c = ""; for(var k = 1; k <= 9; k++) c += '<b' + (DICE[n].indexOf(k) > -1 ? ' class="p"' : '') + '></b>'; return '<i class="d' + (o ? " o" : "") + '">' + c + '</i>'; }
  function esc(s){ return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  /* Auszeichnung: **fett**, *kursiv*, {w:1,1,2} Würfel (nach „|“ die ausgegrauten), [[S. 12|bc_aj|12]] Seitenlink */
  var POST = null; /* optionaler Nachbearbeiter (Folgen: {K:…}-Marken, {P:…}-Platzhalter) */
  function md(s){
    var r = mdBase(s); return POST ? POST(r) : r;
  }
  function mdBase(s){
    return esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\*(.+?)\*/g, "<i>$1</i>")
      .replace(/\{w:([1-6,]+)(?:\|([1-6,]*))?\}/g, function(_, a, b){ return '<span class="dr">' + a.split(",").map(function(n){ return die(+n); }).join("") + (b ? b.split(",").filter(Boolean).map(function(n){ return die(+n, 1); }).join("") : "") + '</span>'; })
      .replace(/\[\[(.+?)\|(.+?)\|(\d+)\]\]/g, function(_, t, b, p){ return '<a class="sl" onclick="openBook(\'' + b + '\',' + p + ')">' + t + '</a>'; });
  }
  function P(p){ return (Array.isArray(p) ? p : [p]).map(function(x){ return x ? '<p>' + md(x) + '</p>' : ""; }).join(""); }
  function src(i){ return "img/" + i.src + ".webp"; }
  function pg(b, s){ return s ? '<a class="pg" onclick="openBook(\'' + (b || "bc_aj") + '\',' + s + ')">S. ' + s + '</a>' : ""; }
  var BOOK = "bc_aj";
  /* alle Bereiche: Adventure Journal (BC_AREAS) und die Untersettings (BC_BUCH.<jr|ve|lt>.areas, je mit grp, b = Buch-ID, file = Datenbasis) */
  function allAreas(){ var r = BC_AREAS.map(function(a){ return Object.assign({grp: "aj", b: "bc_aj", file: "aj-" + a.id}, a); }); Object.keys(window.BC_BUCH || {}).forEach(function(k){ (BC_BUCH[k].areas || []).forEach(function(a){ r.push(Object.assign({grp: k, b: BC_BUCH[k].b, file: a.id}, a)); }); }); return r; }
  function imgEl(i, cls){ return i ? '<div class="im ' + (cls || "") + '" style="background-image:url(' + src(i) + ');background-position:' + (i.pos || "50% 40%") + (i.h ? ";height:" + i.h + "px" : "") + '"></div>' : ""; }
  var R = {
    h: function(b){ return '<h1 id="' + esc(b.id || "") + '"><span>' + md(b.h) + '</span>' + pg(BOOK, b.s) + '</h1>'; },
    prose: function(b){
      var q = b.q ? '<p class="q">' + md(b.q) + '</p>' : "";
      var img = b.img ? imgEl(b.img, "fl " + (b.img.side === "r" ? "r" : "l")) : "";
      return '<div class="prose' + (b.cols ? " c2" : "") + (b.cap ? " cap" : "") + '">' + img + q + P(b.p) + '</div>';
    },
    cards: function(b){
      var n = b.cols || 3, st = b.style || "card";
      return '<div class="cards c' + n + " " + st + '">' + b.items.map(function(it){
        var open = it.fold ? " fold" : "";
        var hd = (it.k ? '<small>' + md(it.k) + '</small>' : "") + (it.h ? '<h3>' + md(it.h) + pg(BOOK, it.s) + '</h3>' : "");
        var bd = '<div class="bd">' + (it.p ? P(it.p) : "") + (it.items ? '<ul>' + it.items.map(function(x){ return '<li>' + md(x) + '</li>'; }).join("") + '</ul>' : "") + '</div>';
        return '<div class="cd' + open + '" style="' + (it.c ? "--f:" + it.c : "") + '"' + (it.fold ? ' onclick="this.classList.toggle(\'on\')"' : "") + '>' + (it.img ? imgEl(it.img, "cv") : "") + hd + bd + '</div>';
      }).join("") + '</div>';
    },
    tiles: function(b){
      return '<div class="tiles t' + b.items.length + '">' + b.items.map(function(it, i){
        return '<div class="tl" style="background-image:url(' + src(it.img) + ');background-position:' + (it.img.pos || "50% 30%") + '"><em>' + (it.n || i + 1) + '</em><div><b>' + md(it.h) + '</b><span>' + md(it.p) + '</span></div></div>';
      }).join("") + '</div>';
    },
    box: function(b){ return '<div class="box' + (b.dark ? " dk" : "") + '" style="' + (b.c ? "--f:" + b.c : "") + '">' + (b.h ? '<b>' + md(b.h) + '</b>' : "") + P(b.p) + '</div>'; },
    script: function(b){
      return '<div class="script">' + (b.h ? '<div class="sh">' + md(b.h) + '</div>' : "") + b.lines.map(function(l){
        return l.r != null ? '<div class="roll">' + md(l.r) + '</div>' : '<div class="l"><span class="n">' + esc(l.n) + '</span><span>' + md(l.p) + '</span></div>';
      }).join("") + '</div>';
    },
    steps: function(b){ return '<div class="steps s' + b.items.length + (b.dark === false ? " lt" : "") + '">' + b.items.map(function(it, i){ return '<div class="st"><em>' + (it.n || i + 1) + '</em>' + (it.h ? '<b>' + md(it.h) + '</b>' : "") + '<span>' + md(it.p || "") + '</span></div>'; }).join("") + '</div>'; },
    table: function(b){
      return '<div class="tbw"><table class="tb' + (b.first ? " first" : "") + '"><tr>' + b.cols.map(function(c){ return '<th>' + md(c) + '</th>'; }).join("") + '</tr>' +
        b.rows.map(function(r){ return '<tr>' + r.map(function(c){ return '<td>' + md(c) + '</td>'; }).join("") + '</tr>'; }).join("") + '</table></div>';
    },
    chips: function(b){
      return '<div class="cards c' + (b.cols || 3) + ' card">' + b.groups.map(function(g){
        return '<div class="cd">' + (g.h ? '<h3>' + md(g.h) + '</h3>' : "") + (g.sub ? '<div class="bd"><p>' + md(g.sub) + '</p></div>' : "") + '<ul class="chips">' + g.items.map(function(x){ return '<li>' + md(x) + '</li>'; }).join("") + '</ul></div>';
      }).join("") + '</div>';
    },
    list: function(b){ return '<ul class="ul' + (b.cols ? " c" + b.cols : "") + '">' + b.items.map(function(x){ return '<li>' + md(x) + '</li>'; }).join("") + '</ul>'; },
    quote: function(b){
      return '<div class="quote" style="' + (b.img ? "background-image:linear-gradient(rgba(16,13,10,.78),rgba(16,13,10,.86)),url(" + src(b.img) + ")" : "") + '">' + (b.h ? '<h2>' + md(b.h) + '</h2>' : "") + (b.q ? '<p class="q">' + md(b.q) + '</p>' : "") + P(b.p) + '</div>';
    }
  };
  function block(b){ var t = b.h != null && !b.t ? "h" : b.t; return R[t] ? R[t](b) : ""; }

  /* aj-<bereich>.js legt BC_DATA[bereich] = {parts:["id",…]} an; jede Teildatei aj-<bereich>/<id>.js setzt BC_PART["<bereich>/<id>"] = {id,t,sub,s,blocks} */
  window.BC_PART = window.BC_PART || {};
  function script(u, ok, bad){ var s = document.createElement("script"); s.src = u; s.onload = ok; s.onerror = bad || ok; document.head.appendChild(s); }
  var WAIT = {};
  function load(area, file, cb){
    if(BC_DATA[area] && BC_DATA[area].subs) return cb();
    if(WAIT[area]){ WAIT[area].push(cb); return; }
    WAIT[area] = [cb]; var cb0 = cb; cb = function(){ var q = WAIT[area]; delete WAIT[area]; q.forEach(function(f){ f(); }); };
    script("js/data/" + file + ".js", function(){
      var D = BC_DATA[area]; if(!D){ D = BC_DATA[area] = {parts: []}; }
      var left = (D.parts || []).length, fin = function(){ D.subs = (D.parts || []).map(function(p){ return BC_PART[area + "/" + p]; }).filter(Boolean); if(!D.subs.length) D.subs = [{id: "x", t: "Folgt", blocks: [{t: "prose", p: ["Dieser Bereich wird gerade aufgebaut."]}]}]; cb(); };
      if(!left) return fin();
      D.parts.forEach(function(p){ script("js/data/" + file + "/" + p + ".js", function(){ if(!--left) fin(); }); });
    });
  }
  function render(areaId, subId){
    POST = null;
    var ALL = allAreas(), A = ALL.filter(function(a){ return a.id === areaId; })[0]; if(!A) return false;
    BOOK = A.b;
    var body = document.body; body.className = "inh"; body.style.setProperty("--c", A.c);
    var bar = document.querySelector(".topbar"); bar.style.height = ""; bar.style.transform = ""; clearInterval(HERO.t);
    APP.innerHTML = '<div class="inh-load">…</div>';
    load(A.id, A.file, function(){
      var D = BC_DATA[A.id], sub = D.subs.filter(function(s){ return s.id === subId; })[0] || D.subs[0];
      var tabs = ALL.filter(function(a){ return a.grp === A.grp; }).map(function(a){ return '<a class="' + (a.id === A.id ? "on" : "") + '" style="--c:' + a.c + '" href="#a/' + a.id + '">' + esc(a.t) + '</a>'; }).join("");
      var subs = D.subs.length > 1 ? D.subs.map(function(s){ return '<a class="' + (s.id === sub.id ? "on" : "") + '" href="#a/' + A.id + '/' + s.id + '">' + esc(s.t) + '</a>'; }).join("") : "";
      var hs = sub.blocks.filter(function(b){ return b.h != null && !b.t; });
      var side = hs.length > 1 ? '<nav class="side"><button class="sz" onclick="INH.fold()" title="Seitenleiste ein-/ausklappen">‹</button>' + hs.map(function(h, i){ return '<a onclick="INH.go(\'' + A.id + '-' + sub.id + '-' + i + '\')">' + md(h.h) + '</a>'; }).join("") + '</nav>' : "";
      var n = 0;
      var html = sub.blocks.map(function(b){ if(b.h != null && !b.t){ b = Object.assign({}, b, {id: A.id + "-" + sub.id + "-" + (n++)}); } return block(b); }).join("");
      document.getElementById("tabs").innerHTML = tabs;
      APP.innerHTML = (subs ? '<div class="sub2">' + subs + '</div>' : "") + '<div class="wrap2' + (side ? (localStorage.getItem("bc_sidezu") === "1" ? " zu" : "") : " nos") + '">' + side + '<main class="inhalt">' + html + '</main></div>';
      window.scrollTo(0, 0);
      spy(); if(window.bcMark) window.bcMark();
    });
    return true;
  }
  function spy(){
    var links = [].slice.call(document.querySelectorAll(".side a")); if(!links.length) return;
    var hs = [].slice.call(document.querySelectorAll("main.inhalt h1[id]"));
    function on(){ var cur = 0; hs.forEach(function(h, i){ if(h.getBoundingClientRect().top < 200) cur = i; }); links.forEach(function(l, i){ l.classList.toggle("on", i === cur); }); }
    window.onscroll = on; on();
  }
  /* alles laden (für die Suche): Bereiche mit Teilen und Folgen */
  function loadAll(done){
    var ALL = allAreas(), eps = Object.keys(window.BC_EPOK || {}), n = ALL.length + eps.length;
    if(!n) return done();
    function ok(){ if(--n === 0) done(); }
    ALL.forEach(function(a){ load(a.id, a.file, ok); });
    eps.forEach(function(id){ if(BC_EP[id]) return ok(); script("js/data/ep-" + id + ".js", ok); });
  }
  function fold(){ var w = document.querySelector(".wrap2"); if(!w) return; var z = w.classList.toggle("zu"); try{ localStorage.setItem("bc_sidezu", z ? "1" : "0"); }catch(e){} }
  return {loadAll: loadAll, areas: allAreas, fold: fold, render: render, go: function(id){ var e = document.getElementById(id); if(e) window.scrollTo({top: e.getBoundingClientRect().top + scrollY - 130, behavior: "smooth"}); }, md: md, block: block, post: function(f){ POST = f; }};
})();
