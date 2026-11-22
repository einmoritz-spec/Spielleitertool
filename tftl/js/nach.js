/* Nachschlagen (Entwurf 5): eigene Tab-Leiste, Kachelraster ohne Seitenleiste, Detail je Karte */
(function(){
  function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  function loop(){ var l = ""; try{ l = localStorage.getItem("tftl_loop") || ""; }catch(e){} return l; }
  function nm(t){ var b = loop() === "boulder"; return esc(t).replace(/\{\{([^|}]*)\|([^}]*)\}\}/g, function(m, a, c){ return b ? c : a; }); }
  function pg(s){ return '<a class="pgl" data-b="tftl_core" data-s="' + s + '">S. ' + s + '</a>'; }
  function list(a){ return '<ul>' + a.map(function(x){ return '<li>' + nm(x) + '</li>'; }).join("") + '</ul>'; }
  function box(t, a){ return '<section class="nbox"><h4>' + t + '</h4>' + list(a) + '</section>'; }
  function chips(a){ return a.map(function(k){ return '<span class="kc2">' + esc(k) + '</span>'; }).join(""); }

  function typen(app){
    app.className = "page nach";
    app.innerHTML = '<div class="nh"><h1>Die Typen</h1><small>Kap. 4 · ' + pg(49) + '</small></div><div class="tgrid">' + window.TYPEN.map(function(t){
      return '<div class="ty" data-t="' + t.id + '"><img src="img/' + t.bild + '.webp" alt=""><div><h3>' + esc(t.name) + ' <small>' + pg(t.s) + '</small></h3>' +
        '<h5>Schlüsselfertigkeiten</h5><div>' + chips(t.key) + '</div><h5>Typischer Gegenstand</h5><p>' + nm(t.items.join(" · ")) + '</p></div></div>';
    }).join("") + '</div>';
  }
  function typ(app, id){
    var t = window.TYPEN.filter(function(x){ return x.id === id; })[0];
    if(!t) return typen(app);
    app.className = "page nach";
    app.innerHTML = '<div class="nh"><a class="chip" href="#nach/kids">‹ Typen</a><h1>' + esc(t.name) + '</h1><small>' + pg(t.s) + '</small></div>' +
      '<div class="tdet"><img src="img/' + t.bild + '.webp" alt=""><div><p class="tx">' + esc(t.text) + '</p><h5>Schlüsselfertigkeiten</h5><div>' + chips(t.key) + '</div></div></div>' +
      '<div class="nbg">' + box("Kultgegenstand", t.items) + box("Problem", t.problem) + box("Antrieb", t.drive) + box("Stolz", t.pride) +
      box("Beziehungen zu anderen Kids", t.relK) + box("Beziehungen zu NSC", t.relN) + box("Anker", t.anker) + box("Typische Namen", t.namen) + '</div>';
  }

  /* ---------- Lesekapitel (Baum links, Inhalt flach) ---------- */
  var SETS = {welt:["welt"], loops:["schweden","us"], kids:["kids"], aerger:["aerger"], mysterium:["mysterium"], landschaft:["landschaft"]};
  var collapsed = false;
  function bl(b){
    var t = b[0];
    if(t === "p") return '<p>' + nm(b[1]) + '</p>';
    if(t === "h") return '<h3>' + nm(b[1]) + '</h3>';
    if(t === "liste") return list(b[1]);
    if(t === "kasten") return '<section class="nkasten"><h4>' + nm(b[1]) + '</h4>' + (b[2] || []).map(function(x){ return '<p>' + nm(x) + '</p>'; }).join("") + '</section>';
    if(t === "tabelle") return '<table class="ntab"><thead><tr>' + b[1].map(function(h){ return '<th>' + nm(h) + '</th>'; }).join("") + '</tr></thead><tbody>' + b[2].map(function(r){ return '<tr>' + r.map(function(c){ return '<td>' + nm(c) + '</td>'; }).join("") + '</tr>'; }).join("") + '</tbody></table>';
    return "";
  }
  function lese(app, tab, rest, extraFirst){
    var sets = (SETS[tab] || []).filter(function(k){ return window.NACHDATA && window.NACHDATA[k]; });
    var multi = sets.length > 1;
    var cur = null, setKey = sets[0];
    if(extraFirst && (!rest[1] || rest[1] === "typen")){ cur = "typen"; }
    else if(multi && rest[1] && sets.indexOf(rest[1]) >= 0){ setKey = rest[1]; cur = rest[2]; }
    else if(!multi){ cur = rest[1]; }
    var D = setKey ? window.NACHDATA[setKey] : null;
    var sec = null;
    if(cur !== "typen" && D){ sec = D.abschnitte.filter(function(a){ return a.id === cur; })[0] || D.abschnitte[0]; }
    var base = "#nach/" + tab + "/";
    var tree = "";
    if(extraFirst) tree += '<a class="ni' + (cur === "typen" ? ' on' : '') + '" href="' + base + 'typen">Die Typen</a>';
    sets.forEach(function(k){
      var d = window.NACHDATA[k];
      if(multi) tree += '<div class="ng">' + esc(d.titel) + '</div>';
      d.abschnitte.forEach(function(a){
        var on = cur !== "typen" && sec && d === D && a.id === sec.id;
        tree += '<a class="ni' + (on ? ' on' : '') + '" href="' + base + (multi ? k + "/" : "") + a.id + '">' + esc(a.titel.split(":")[0]) + '</a>';
      });
    });
    var main = "";
    if(cur === "typen") main = null;
    else if(sec) main = '<div class="nh"><h1>' + nm(sec.titel) + '</h1><small>' + (D.kap ? esc(D.kap) + ' · ' : '') + pg(sec.s) + '</small></div><div class="ntext">' + sec.bloecke.map(bl).join("") + '</div>';
    else main = '<div class="nh"><h1>' + esc((window.NACH.filter(function(x){ return x[0] === tab; })[0] || [0, tab])[1]) + '</h1></div>';
    return {tree: tree, main: main, typen: cur === "typen"};
  }
  window.renderNach = function(app, tabs, rest){
    var tab = rest[0] || "welt";
    tabs.innerHTML = window.NACH.map(function(n){ return '<a href="#nach/' + n[0] + '"' + (n[0] === tab ? ' class="on"' : '') + '>' + esc(n[1]) + '</a>'; }).join("");
    app.onclick = function(e){
      var ty = e.target.closest(".ty"); if(ty && !e.target.closest(".pgl")){ location.hash = "nach/kids/" + ty.dataset.t; return; }
      var el = e.target.closest(".pgl"); if(el){ e.preventDefault(); e.stopPropagation(); if(window.BV) BV.open(el.dataset.b, +el.dataset.s); return; }
      if(e.target.closest("#nsT")){ collapsed = !collapsed; app.classList.toggle("nsc", collapsed); }
    };
    if(tab === "kids" && rest[1] && window.TYPEN.some(function(x){ return x.id === rest[1]; })){ typ(app, rest[1]); return; }
    var L = lese(app, tab, rest, tab === "kids");
    app.className = "page nach" + (collapsed ? " nsc" : "");
    if(L.typen){ var tmp = document.createElement("div"); typen(tmp); app.className = "page nach nl" + (collapsed ? " nsc" : ""); app.innerHTML = '<nav class="nside"><button id="nsT" title="Menü einklappen">‹</button>' + L.tree + '</nav><div class="nmain">' + tmp.innerHTML + '</div>'; return; }
    if(!L.tree){ app.innerHTML = L.main; return; }
    app.className = "page nach nl" + (collapsed ? " nsc" : "");
    app.innerHTML = '<nav class="nside"><button id="nsT" title="Menü einklappen">‹</button>' + L.tree + '</nav><div class="nmain">' + L.main + '</div>';
  };
  document.addEventListener("keydown", function(e){
    if(e.key !== "b" || e.ctrlKey || e.metaKey || /INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "")) return;
    var a = document.getElementById("app"); if(a && a.classList.contains("nl")){ collapsed = !collapsed; a.classList.toggle("nsc", collapsed); }
  });
})();
