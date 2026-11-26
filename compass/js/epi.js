/* BROKEN COMPASS – Folgen als Drehbuch (Pilot, Staffel-Folgen, Episoden auf Abruf).
   Daten: js/data/ep-<id>.js setzt BC_EP["<id>"]. Format: plan/compass/DATENFORMAT_FOLGEN.md */
"use strict";
var BC_EP = window.BC_EP || (window.BC_EP = {});
var EPI = (function(){
  function esc(s){ return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  var KC = {H: "#3d7a8f", G: "#b3321e", F: "#3d3d46", Hw: "#a8701f", X: "#6b3416"};
  var CTX = {};
  function key(id){ return "bc_ctx_" + id; }
  function load(id){ try{ return JSON.parse(localStorage.getItem(key(id)) || "{}"); }catch(e){ return {}; } }
  function save(id, o){ try{ localStorage.setItem(key(id), JSON.stringify(o)); }catch(e){} }
  /* Auszeichnung wie in inhalt.js, dazu {K:H|Text} Marke (H Herausforderung, G Gefahr, F Feinde, Hw Hinweis), {P:schluessel} Platzhalter aus dem Kontext */
  function post(r){
    return r.replace(/\{K:(H|G|F|Hw|X)\|(.+?)\}/g, function(_, k, t){ return '<span class="mk" style="--k:' + KC[k] + '">' + t + '</span>'; })
      .replace(/\{P:([a-z0-9_]+)\}/g, function(_, k){ var f = CTX.fields.filter(function(x){ return x.k === k; })[0]; var v = (CTX.val[k] != null ? CTX.val[k] : (f && f.v)) || ""; return '<span class="ph" data-k="' + k + '">' + (v ? esc(v) : esc(f ? f.l.toUpperCase() : k.toUpperCase())) + '</span>'; });
  }
  function md(s){ return INH.md(s); }
  function P(p){ return (Array.isArray(p) ? p : [p]).map(function(x){ return x ? '<p>' + md(x) + '</p>' : ""; }).join(""); }
  var B = {
    n: function(b){ return '<div class="nar">' + P(b.p) + '</div>'; },
    d: function(b){ return '<div class="dlg"><span class="who">' + esc(b.n) + '</span>' + (b.r ? '<span class="rg">(' + md(b.r) + ')</span>' : "") + '<span class="say">' + md(b.p) + '</span></div>'; },
    cut: function(){ return '<div class="cutl">CUT</div>'; },
    clue: function(b){ return '<div class="clue"><small>' + esc(b.k || "Hinweis") + '</small><b>' + md(b.p) + '</b></div>'; },
    box: function(b){ return '<div class="side-box"><b>' + md(b.h || "") + '</b>' + P(b.p) + '</div>'; },
    list: function(b){ return '<ul class="nl">' + b.items.map(function(x){ return '<li>' + md(x) + '</li>'; }).join("") + '</ul>'; },
    img: function(b){ return '<div class="epimg" style="background-image:url(img/' + b.src + '.webp);background-position:' + (b.pos || "50% 40%") + '"></div>'; }
  };
  function scene(s, i){
    return '<section class="sc" id="sz' + (i + 1) + '"><h2><span>Szene ' + (i + 1) + '</span> ' + md(s.t) + (s.ort ? '<em>' + esc(s.ort) + '</em>' : "") + (s.s ? '<a class="pg" onclick="openBook(\'' + CTXBOOK + '\',' + s.s + ')">S. ' + s.s + '</a>' : "") + '</h2>' +
      s.blocks.map(function(b){ return B[b.t] ? B[b.t](b) : INH.block(b); }).join("") + '</section>';
  }
  var CTXBOOK = "bc_aj";
  function render(id){
    var A = window.APP; INH.post(post);
    var go = function(){
      var E = BC_EP[id]; if(!E){ location.hash = "#start"; return; }
      CTXBOOK = E.b || "bc_aj";
      var body = document.body; body.className = "inh epi"; body.style.setProperty("--c", E.c || "#1d2c4d");
      document.getElementById("tabs").innerHTML = "";
      var bar = document.querySelector(".topbar"); bar.style.height = ""; bar.style.transform = ""; clearInterval(HERO.t);
      CTX = {fields: E.ctx || [], val: load(id)};
      var ctx = CTX.fields.length ? '<div class="ctx"><h3>Der Kontext<small>für alle Szenen – ändere ihn, die Szenen passen sich an</small></h3><div class="cf">' + CTX.fields.map(function(f){
        return '<label><span>' + esc(f.l) + '</span><input data-k="' + f.k + '" value="' + esc(CTX.val[f.k] != null ? CTX.val[f.k] : (f.v || "")) + '" placeholder="' + esc(f.l) + '"></label>';
      }).join("") + '</div></div>' : "";
      var side = '<nav class="side">' + (E.scenes || []).map(function(s, i){ return '<a onclick="INH.go(\'sz' + (i + 1) + '\')">' + (i + 1) + ' · ' + esc((s.short || s.t).replace(/\{.*?\}/g, "")) + '</a>'; }).join("") + '</nav>';
      var head = '<header class="eph"><div class="im" style="background-image:url(img/' + (E.img || "start/hero-tempel") + '.webp)"></div><div><small>' + esc(E.lab || "") + '</small><h1>' + md(E.t) + '</h1>' + (E.s ? '<a class="pg" onclick="openBook(\'' + CTXBOOK + '\',' + E.s + ')">S. ' + E.s + '</a>' : "") + '</div></header>';
      var intro = (E.intro || []).map(function(b){ return B[b.t] ? B[b.t](b) : INH.block(b); }).join("");
      A.innerHTML = head + '<div class="wrap2">' + side + '<main class="inhalt ep">' + intro + ctx + (E.scenes || []).map(scene).join("") + (E.outro || []).map(function(b){ return INH.block(b); }).join("") + '</main></div>';
      A.querySelectorAll(".ctx input").forEach(function(inp){
        inp.addEventListener("input", function(){
          CTX.val[inp.dataset.k] = inp.value; save(id, CTX.val);
          var f = CTX.fields.filter(function(x){ return x.k === inp.dataset.k; })[0];
          A.querySelectorAll('.ph[data-k="' + inp.dataset.k + '"]').forEach(function(n){ n.textContent = inp.value || f.l.toUpperCase(); });
        });
      });
      window.scrollTo(0, 0);
    };
    if(BC_EP[id]) return go();
    var s = document.createElement("script"); s.src = "js/data/ep-" + id + ".js"; s.onload = go; s.onerror = function(){ location.hash = "#start"; }; document.head.appendChild(s);
  }
  return {render: render};
})();
