/* SLUGBLASTER – Spielleiterschirm (#schirm, Taste s): Reiter Regeln · SL · Beats, dreispaltig. Daten: data/schirm.js + momente.js */
(function(){
  var TABS = [["regeln", "Regeln"], ["sl", "Spielleitung"], ["beats", "Beats"]];
  function kasten(k){
    var h = '<div class="box sch ' + (k.c || "") + '"><div class="cap">' + esc(k.h) + ' ' + (k.p ? pgl(k.p) : "") + '</div>';
    if(k.live === "slakt"){
      var A = SB_SLAKTIONEN;
      h += [["Jederzeit", A.jederzeit], ["Bei einem Problem", A.problem], ["1 Bite", A.bite1], ["2 Bite", A.bite2]].map(function(g){ return '<h5>' + g[0] + '</h5><ul>' + g[1].map(function(x){ return '<li>' + md(x) + '</li>'; }).join("") + '</ul>'; }).join("");
    }else if(k.live === "ideen"){
      h += '<ol>' + SB_GEFAHR.ideen.map(function(i){ return '<li><b>' + esc(i[0]) + '.</b> ' + esc(i[1]) + '</li>'; }).join("") + '</ol>';
    }else h += k.x.map(function(x){ return '<p>' + md(x) + '</p>'; }).join("");
    return h + '</div>';
  }
  function beatsSp(){
    var M = SB_MOMENTE;
    function g(t, a){ return '<div class="box sch"><div class="cap">' + esc(t) + '</div>' + a.map(function(m){ return '<p><span class="plk ' + (m.k[1] === "trouble" ? "tr" : "st") + '">' + m.k[0] + ' ' + (m.k[1] === "trouble" ? "Trouble" : "Style") + '</span> <b>' + esc(m.t) + '.</b> ' + md(m.x) + '</p>'; }).join("") + '</div>'; }
    return [
      g("Eigenschafts-Beats", M.eig.x) + g("Weitere Beats", M.weitere.x) + g(M.werkstatt.t, [{t:M.werkstatt.t, k:M.werkstatt.k, x:M.werkstatt.x + " " + M.werkstatt.l.join(" ")}]),
      g("Familien-Bogen", M.familie.x),
      g("Angst-Bogen", M.angst.x) + g("Crew-Beats", M.crew.x)
    ];
  }
  VIEWS.schirm = function(a){
    var t = a[0] || "regeln", cols;
    if(t === "beats") cols = beatsSp(); else cols = SB_SCHIRM[t].map(function(c){ return c.map(kasten).join(""); });
    var nav = SBUber("spielleitung", "schirm", TABS.map(function(x){ return '<a class="pn ' + (x[0] === t ? "on" : "") + '" onclick="go(\'schirm/' + x[0] + '\')">' + x[1] + '</a>'; }).join(""));
    return '<div class="nachw schw" style="--tc:var(--lila)">' + nav + '<div class="schg">' + cols.map(function(c){ return '<div class="schc">' + c + '</div>'; }).join("") + '</div></div>';
  };
  VIEWS.schirm.own = true;
  document.addEventListener("keydown", function(e){
    if(/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "") || e.ctrlKey || e.metaKey || e.altKey || document.querySelector(".modal,.gzoom")) return;
    var h = (location.hash || "").slice(1).split("/");
    if(e.key === "s" && h[0] !== "schirm") go("schirm");
    if(h[0] === "schirm" && (e.key === "ArrowLeft" || e.key === "ArrowRight")){
      var ix = 0; TABS.forEach(function(x, i){ if(x[0] === (h[1] || "regeln")) ix = i; });
      var n = TABS[ix + (e.key === "ArrowRight" ? 1 : -1)]; if(n){ go("schirm/" + n[0]); e.preventDefault(); }
    }
  });
})();
