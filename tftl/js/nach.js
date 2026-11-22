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
      return '<div class="ty" data-t="' + t.id + '"><img src="img/' + t.bild + '.webp" alt=""><div><h3>' + esc(t.name) + '</h3><small>' + pg(t.s) + '</small>' +
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
  window.renderNach = function(app, tabs, rest){
    var tab = rest[0] || "welt";
    tabs.innerHTML = window.NACH.map(function(n){ return '<a href="#nach/' + n[0] + '"' + (n[0] === tab ? ' class="on"' : '') + '>' + esc(n[1]) + '</a>'; }).join("");
    app.onclick = function(e){ var ty = e.target.closest(".ty"); if(ty && !e.target.closest(".pgl")){ location.hash = "nach/kids/" + ty.dataset.t; return; } var el = e.target.closest(".pgl"); if(el){ e.preventDefault(); e.stopPropagation(); if(window.BV) BV.open(el.dataset.b, +el.dataset.s); } };
    if(tab === "kids"){ if(rest[1]) typ(app, rest[1]); else typen(app); return; }
    var n = window.NACH.filter(function(x){ return x[0] === tab; })[0];
    app.className = "page nach"; app.innerHTML = '<div class="nh"><h1>' + esc(n ? n[1] : tab) + '</h1></div>';
  };
})();
