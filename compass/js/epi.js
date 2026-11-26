/* BROKEN COMPASS – Folgen als Drehbuch (Pilot, Staffel-Folgen, Episoden auf Abruf).
   Daten: js/data/ep-<id>.js setzt BC_EP["<id>"]. Format: plan/compass/DATENFORMAT_FOLGEN.md
   Aufbau: Szenenliste links · Drehbuch in der Mitte · Kontext (Platzhalter) rechts, mitlaufend.
   In der Unterleiste die anderen Folgen derselben Staffel (←/→). */
"use strict";
var BC_EP = window.BC_EP || (window.BC_EP = {});
var EPI = (function(){
  function esc(s){ return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  var KC = {H: "#3d7a8f", G: "#b3321e", F: "#3d3d46", Hw: "#a8701f", X: "#6b3416"};
  var CTX = {fields: [], val: {}}, ROLLE = false, BOOK = "bc_aj";
  function key(id){ return "bc_ctx_" + id; }
  function load(id){ try{ return JSON.parse(localStorage.getItem(key(id)) || "{}"); }catch(e){ return {}; } }
  function save(id, o){ try{ localStorage.setItem(key(id), JSON.stringify(o)); }catch(e){} }

  /* Kurzform eines Kontext-Werts für den Fließtext: „Chao Ren, ehemaliger Mönch …“ → „Chao Ren“ */
  var CUT = [" mit ", " östlich ", " westlich ", " nördlich ", " südlich ", " der ", " die ", " das ", " des ", " von ", " aus ", " in ", " im ", " am ", " an ", " auf ", " bei ", " für ", " zum ", " zur ", " ("];
  function kurz(v){
    v = String(v || "").trim(); if(!v) return "";
    var s = v.split(/,| – | — |;/)[0].trim();
    if(s.length > 36) CUT.forEach(function(c){ var i = s.indexOf(c); if(i > 0 && s.slice(0, i).trim().split(/\s+/).length >= 2) s = s.slice(0, i); });
    s = s.trim();
    return s.length > 42 ? "" : s;
  }
  function feld(k){ return CTX.fields.filter(function(x){ return x.k === k; })[0]; }
  function wert(k){ var f = feld(k); return (CTX.val[k] != null ? CTX.val[k] : (f && f.v)) || ""; }
  function rolle(k){ var f = feld(k); return f ? f.l : k.replace(/_/g, " "); }
  function phHtml(k){
    var v = wert(k), s = kurz(v), r = rolle(k);
    if(ROLLE || !v) return '<span class="ph rl" data-k="' + k + '"' + (v && !ROLLE ? ' title="' + esc(v) + '"' : "") + '>' + esc(r) + '</span>';
    return '<span class="ph" data-k="' + k + '" title="' + esc(r + ": " + v) + '">' + esc(s || r) + '</span>';
  }
  function phFill(n){
    var k = n.dataset.k, v = wert(k), s = kurz(v), r = rolle(k);
    if(n.closest(".need")){ return; }
    n.classList.toggle("rl", !v);
    n.textContent = v ? (s || r) : r;
    n.title = v ? r + ": " + v : "";
  }
  /* Auszeichnung wie in inhalt.js, dazu {K:H|Text} Marke (H Herausforderung, G Gefahr, F Feinde, Hw Hinweis), {P:schluessel} Platzhalter aus dem Kontext */
  function post(r){
    return r.replace(/\{K:(H|G|F|Hw|X)\|(.+?)\}/g, function(_, k, t){ return '<span class="mk" style="--k:' + KC[k] + '">' + t + '</span>'; })
      .replace(/\{P:([a-z0-9_]+)\}/g, function(_, k){ return phHtml(k); });
  }
  function md(s){ return INH.md(s); }
  function plain(s){ return String(s || "").replace(/\{P:([a-z0-9_]+)\}/g, function(_, k){ return kurz(wert(k)) || rolle(k); }).replace(/\{K:[^|]+\|(.+?)\}/g, "$1").replace(/\*+/g, ""); }
  function P(p){ return (Array.isArray(p) ? p : [p]).map(function(x){ return x ? '<p>' + md(x) + '</p>' : ""; }).join(""); }
  var B = {
    n: function(b){ return '<div class="nar">' + P(b.p) + '</div>'; },
    d: function(b){ return '<div class="dlg"><span class="who">' + esc(b.n) + '</span>' + (b.r ? '<span class="rg">(' + md(b.r) + ')</span>' : "") + '<span class="say">' + md(b.p) + '</span></div>'; },
    cut: function(){ return '<div class="cutl">Schnitt</div>'; },
    clue: function(b){ return '<div class="clue"><small>' + esc(b.k || "Hinweis") + '</small><b>' + md(b.p) + '</b></div>'; },
    box: function(b){ return '<div class="side-box"><b>' + md(b.h || "") + '</b>' + P(b.p) + '</div>'; },
    list: function(b){ return '<ul class="nl">' + b.items.map(function(x){ return '<li>' + md(x) + '</li>'; }).join("") + '</ul>'; },
    img: function(b){ return '<div class="epimg" style="background-image:url(img/' + b.src + '.webp);background-position:' + (b.pos || "50% 40%") + '"></div>'; }
  };
  /* „Zum Spielen dieser Folge brauchst du“: Rollen als Liste (nicht die eingesetzten Werte) */
  function need(b){
    ROLLE = true;
    var ps = Array.isArray(b.p) ? b.p : [b.p], h = "";
    ps.forEach(function(x){
      var m = /^\*\*(.+?):\*\*\s*(.*)$/.exec(x);
      if(m) h += '<div class="nd"><b>' + md(m[1]) + '</b><span>' + md(m[2]) + '</span></div>';
      else if(x.indexOf(" · ") > -1) h += '<div class="nchips">' + x.split(" · ").map(function(t){ return '<span>' + md(t) + '</span>'; }).join("") + '</div>';
      else h += '<p>' + md(x) + '</p>';
    });
    ROLLE = false;
    var def = ps.some(function(x){ return /^\*\*.+?:\*\*/.test(x); });
    return '<div class="need' + (def ? " def" : "") + '"><h4>' + md(b.h) + '</h4>' + h + '</div>';
  }
  function blk(b){ if(b.t === "box" && /brauchst du/i.test(b.h || "")) return need(b); return B[b.t] ? B[b.t](b) : INH.block(b); }
  function pg(s){ return s ? '<a class="pg" onclick="openBook(\'' + BOOK + '\',' + s + ')">S. ' + s + '</a>' : ""; }
  function scene(s, i){
    return '<section class="sc" id="sz' + (i + 1) + '"><header class="slug"><span class="nr">' + (i + 1) + '</span>' +
      '<h2>' + (s.ort ? '<span class="io">' + esc(s.ort) + '</span>' : "") + '<span class="st">' + md(s.t) + '</span></h2></header>' +
      s.blocks.map(blk).join("") + '</section>';
  }
  /* Folgen derselben Staffel für die Unterleiste */
  function staffel(id){
    if(/^(pilot|quetzalcoatl|bogen-fertig)$/.test(id)) return {lab: "Adventure Journal", eps: ["pilot", "quetzalcoatl", "bogen-fertig"]};
    var m = /^([a-z]+)\d+$/.exec(id), st = m && (window.BC_STAFFELN || []).filter(function(x){ return x.id === m[1]; })[0];
    if(!st) return null;
    return {lab: st.lab + " · " + st.t, eps: st.eps.map(function(_, i){ return st.id + (i + 1); })};
  }
  function bild(E, id){
    if(E.img) return "img/" + E.img + ".webp";
    var m = /^([a-z]+)(\d+)$/.exec(id); return m ? "img/start/" + m[1] + "-f" + m[2] + ".webp" : "img/start/hero-tempel.webp";
  }
  function render(id){
    var A = window.APP; INH.post(post);
    var go = function(){
      var E = BC_EP[id]; if(!E){ location.hash = "#start"; return; }
      BOOK = E.b || "bc_aj";
      var body = document.body; body.className = "inh epi"; body.style.setProperty("--c", E.c || "#1d2c4d");
      document.getElementById("tabs").innerHTML = "";
      var bar = document.querySelector(".topbar"); bar.style.height = ""; bar.style.transform = ""; clearInterval(HERO.t);
      CTX = {fields: E.ctx || [], val: load(id)};
      var F = window.BC_FOLGEN || {};
      /* Unterleiste: Folgen der Staffel */
      var ST = staffel(id), sub = "";
      if(ST){
        var viele = ST.eps.length > 7;
        sub = '<div class="sub2 epbar"><span class="stl">' + esc(ST.lab) + '</span>' + ST.eps.map(function(e, i){
          var t = (F[e] && F[e].t) || e, on = e === id, nr = e === "pilot" ? "P" : e === "quetzalcoatl" ? "K" : e === "bogen-fertig" ? "A" : String(i + 1);
          return '<a class="' + (on ? "on" : "") + '" href="#e/' + e + '" title="' + esc(t) + '"><i>' + nr + '</i>' + (!viele || on ? '<span>' + esc(t) + '</span>' : "") + '</a>';
        }).join("") + '</div>';
      }
      /* Seitenleiste */
      var intro = E.intro || [], outro = E.outro || [], scenes = E.scenes || [];
      var ih = intro.filter(function(b){ return b.h != null && !b.t; }), oh = outro.filter(function(b){ return b.h != null && !b.t; });
      var subl = function(hs, pre){ return hs.length > 1 ? '<div class="sb">' + hs.map(function(h, i){ return '<a class="u" onclick="INH.go(\'' + pre + i + '\')">' + esc(plain(h.h).split(/:|–/)[0]) + '</a>'; }).join("") + '</div>' : ""; };
      var side = '<nav class="side eps"><button class="sz" onclick="EPI.fold()" title="Seitenleiste ein-/ausklappen">‹</button>' +
        (intro.length ? '<a class="e" data-t="vb" onclick="INH.go(\'vb\')"><b>Vorbereitung</b></a>' + subl(ih, "vbh") : "") +
        scenes.map(function(s, i){ return '<a class="e sc-l" data-t="sz' + (i + 1) + '" onclick="INH.go(\'sz' + (i + 1) + '\')"><em>' + (i + 1) + '</em><b data-raw="' + esc(s.short || s.t) + '">' + esc(plain(s.short || s.t)) + '</b>' + (s.ort ? '<small>' + esc(s.ort) + '</small>' : "") + '</a>'; }).join("") +
        (outro.length ? '<a class="e" data-t="nf" onclick="INH.go(\'nf\')"><b>' + esc(scenes.length ? "Nach der Folge" : "Inhalt") + '</b></a>' + subl(oh, "nfh") : "") + '</nav>';
      /* Kontext rechts */
      var weiss = !E.img && window.BC_WEISS && BC_WEISS[id];
      var panel = !CTX.fields.length ? "" : '<aside class="ctxp"><div class="cim' + (weiss ? " w" : "") + '" style="background-image:url(' + bild(E, id) + ')"></div>' +
        (CTX.fields.length ? '<div class="cin"><h3>Kontext</h3><div class="cf">' + CTX.fields.map(function(f){
          var v = CTX.val[f.k] != null ? CTX.val[f.k] : (f.v || "");
          return '<label data-k="' + f.k + '"><span>' + esc(f.l) + '</span><textarea rows="1" data-k="' + f.k + '" placeholder="' + esc(f.l) + ' festlegen …">' + esc(v) + '</textarea></label>';
        }).join("") + '</div>' + (Object.keys(CTX.val).length ? '<button class="crs" onclick="EPI.reset(\'' + id + '\')">Buchvorgabe wiederherstellen</button>' : "") + '</div>' : "") + '</aside>';
      var n = 0, m = 0;
      var ihtml = intro.map(function(b){ if(b.h != null && !b.t) b = Object.assign({}, b, {id: "vbh" + (n++)}); return blk(b); }).join("");
      var ohtml = outro.map(function(b){ if(b.h != null && !b.t) b = Object.assign({}, b, {id: "nfh" + (m++)}); return blk(b); }).join("");
      var head = '<header class="eph"><small>' + esc(E.lab || "") + pg(E.s) + '</small><h1>' + md(E.t) + '</h1></header>';
      var zu = false; try{ zu = localStorage.getItem("bc_sidezu") === "1"; }catch(e){}
      A.innerHTML = sub + '<div class="epw' + (zu ? " zu" : "") + (CTX.fields.length ? "" : " noctx") + '">' + side + '<main class="inhalt ep">' + head +
        (intro.length ? '<section class="vb" id="vb">' + ihtml + '</section>' : "") +
        (scenes.length ? '<div class="drehbuch">' + scenes.map(scene).join("") + '</div>' : "") +
        (outro.length ? '<section class="nf" id="nf">' + ohtml + '</section>' : "") + '</main>' + panel + '</div>';
      A.querySelectorAll(".ctxp textarea").forEach(function(ta){
        var grow = function(){ ta.style.height = "auto"; ta.style.height = ta.scrollHeight + "px"; };
        grow();
        ta.addEventListener("input", function(){
          CTX.val[ta.dataset.k] = ta.value; save(id, CTX.val); grow();
          A.querySelectorAll('.ph[data-k="' + ta.dataset.k + '"]').forEach(phFill);
          A.querySelectorAll(".side b[data-raw]").forEach(function(b){ b.textContent = plain(b.dataset.raw); });
        });
        ta.addEventListener("focus", function(){ hl(ta.dataset.k, true); });
        ta.addEventListener("blur", function(){ hl(ta.dataset.k, false); });
      });
      /* Klick auf einen Platzhalter im Text springt zum Feld im Kontext */
      A.querySelector("main.ep").addEventListener("click", function(e){
        var p = e.target.closest(".ph"); if(!p || p.closest(".need")) return;
        var ta = A.querySelector('.ctxp textarea[data-k="' + p.dataset.k + '"]'); if(ta){ ta.focus(); ta.select(); }
      });
      window.scrollTo(0, 0);
      spy();
    };
    if(BC_EP[id]) return go();
    var s = document.createElement("script"); s.src = "js/data/ep-" + id + ".js"; s.onload = go; s.onerror = function(){ location.hash = "#start"; }; document.head.appendChild(s);
  }
  function hl(k, on){ document.querySelectorAll('main.ep .ph[data-k="' + k + '"]').forEach(function(n){ n.classList.toggle("hl", on); }); }
  function spy(){
    var links = [].slice.call(document.querySelectorAll(".side.eps a.e"));
    var sbs = [].slice.call(document.querySelectorAll(".side.eps .sb"));
    function on(){
      var cur = 0;
      links.forEach(function(l, i){ var t = document.getElementById(l.dataset.t); if(t && t.getBoundingClientRect().top < 220) cur = i; });
      links.forEach(function(l, i){ l.classList.toggle("on", i === cur); });
      sbs.forEach(function(s){ s.classList.toggle("on", s.previousElementSibling && s.previousElementSibling.classList.contains("on")); });
    }
    window.onscroll = on; on();
  }
  function fold(){ var w = document.querySelector(".epw"); if(!w) return; var z = w.classList.toggle("zu"); try{ localStorage.setItem("bc_sidezu", z ? "1" : "0"); }catch(e){} }
  function reset(id){ save(id, {}); try{ localStorage.removeItem(key(id)); }catch(e){} var y = scrollY; render(id); setTimeout(function(){ window.scrollTo(0, y); }, 30); }
  return {render: render, fold: fold, reset: reset, kurz: kurz};
})();
