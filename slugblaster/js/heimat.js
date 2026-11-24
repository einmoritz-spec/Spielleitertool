/* SLUGBLASTER – Heimat (Entwurf: weiß/gelb): Hillview mit Karte S. 83 und Pins, 12 Bonus-Heimatorte (S. 84–88). */
var SBH = (function(){
  function H(){ var s = (ST.heim = ST.heim || {}); return s; }
  function absatz(a){ return a.map(function(x){ return '<p>' + md(x) + '</p>'; }).join(""); }
  function unter(cur){
    var l = [["", "Hillview"], ["orte", "Bonus-Heimatorte"]].concat(SB_HEIMATORTE.map(function(o){ return [o.id, o.t]; }));
    if(VIEWS.oolroob) l.push(["oolroob", "Oolroob"]);
    return '<div class="hmsub">' + l.map(function(x){ return '<a class="' + (x[0] === cur ? "on" : "") + '" onclick="' + (x[0] === "oolroob" ? "go(\'oolroob\')" : "go(\'heimat" + (x[0] ? "/" + x[0] : "") + "\')") + '">' + esc(x[1]) + '</a>'; }).join("") + '</div>';
  }
  function sel(n){ var s = H(); s.sel = (s.sel === n ? null : n); save(); render(); if(s.sel){ var e = document.getElementById("hmo" + n); if(e && e.scrollIntoView) e.scrollIntoView({ block:"nearest", behavior:"smooth" }); } }
  function hillview(){
    var V = SB_HILLVIEW, s = H(), N = V.null;
    var h = unter("") + '<div class="hm"><div class="hmw"><div class="hml"><div class="hmh"><h1>Hillview</h1>' + pgl(V.p) + '</div>' +
      '<div class="tx">' + absatz(V.text) + '</div><p class="nbs">' + esc(V.nbs) + '</p>' +
      '<div class="hmbx"><div class="box lila"><div class="cap">' + esc(V.echt.t) + ' ' + pgl(81) + '</div>' + absatz(V.echt.x) + '</div><div class="box teal"><div class="cap">' + esc(V.tech.t) + '</div>' + absatz(V.tech.x) + '</div></div>' +
      '<details class="hmnull"><summary>' + esc(N.t) + ' <span>' + esc(N.sub) + '</span>' + pgl(80) + '</summary><div class="tx">' + absatz(N.x) + '</div><p class="nbs">' + esc(N.n) + '</p></details></div>' +
      '<div class="hmr"><div class="ct">Probleme</div>' + SBF.liste(V.probleme, "heim/probleme", 6) + '<div class="ct">Checkpoints</div>' + SBF.liste(V.checkpoints, "heim/checkpoints", 6) + '<p class="nbs">' + esc(V.nbp) + '</p></div></div>' +
      '<div class="hmmap"><div class="hmm"><img src="img/heimat/hillview-karte.jpg" alt="Karte von Hillview">' + V.orte.map(function(o){ return '<button class="pin' + (s.sel === o[0] ? " on" : "") + '" style="left:' + (o[3] / 9) + '%;top:' + (o[4] / 9) + '%" onclick="SBH.sel(' + o[0] + ')" aria-label="' + esc(o[1]) + '"></button>'; }).join("") + '</div>' +
      '<div class="hmo">' + V.orte.map(function(o){ return '<div id="hmo' + o[0] + '" class="o' + (s.sel === o[0] ? " on" : "") + '" onclick="SBH.sel(' + o[0] + ')"><b>' + o[0] + '</b><div><h4>' + esc(o[1]) + '</h4><p>' + md(o[2]) + '</p></div></div>'; }).join("") + '</div></div></div>';
    return h;
  }
  function ort(id){
    var o = null; SB_HEIMATORTE.forEach(function(x){ if(x.id === id) o = x; });
    if(!o) return unter(id) + '<div class="hm"></div>';
    return unter(id) + '<div class="hm"><div class="hmw"><div class="hml"><div class="hmh"><h1>' + esc(o.t) + '</h1>' + pgl(o.p) + '</div><p class="von">von ' + esc(o.von) + '</p><div class="tx">' + absatz(o.x) + '</div>' + (o.n ? '<p class="nbs">' + esc(o.n) + '</p>' : "") + '</div>' +
      '<div class="hmr"><div class="ct">Merkmale</div><ul class="hmf">' + o.l.map(function(z, i){ var k = "heim/" + id + "/" + i; return '<li class="' + (ST.benutzt && ST.benutzt[k] ? "done" : "") + '" onclick="SBF.used(\'' + k + '\')">' + esc(z) + '</li>'; }).join("") + '</ul></div></div></div>';
  }
  function orte(){
    var W = SB_HEIMATWURF;
    return unter("orte") + '<div class="hm"><div class="hmh"><h1>Bonus-Heimatorte</h1>' + pgl(84) + '</div><div class="hmg">' + SB_HEIMATORTE.map(function(o){
      return '<div class="hmc" onclick="go(\'heimat/' + o.id + '\')"><h3>' + esc(o.t) + '</h3><div class="von">' + esc(o.von.split(",")[0]) + '</div><p>' + esc(o.x[0].split(". ")[0].replace(/[.]$/, "") + ".") + '</p></div>';
    }).join("") + '</div><div class="ct" style="margin-top:24px">Heimatort würfeln (W6)' + pgl(W.p) + '</div><table class="tb hmt"><tr><th></th>' + W.kopf.map(function(k){ return '<th>' + esc(k) + '</th>'; }).join("") + '</tr>' + W.z.map(function(r, i){ return '<tr><td>' + (i + 1) + '</td>' + r.map(function(c){ return '<td>' + esc(c) + '</td>'; }).join("") + '</tr>'; }).join("") + '</table></div>';
  }
  VIEWS.heimat = function(a){ var k = a[0] || ""; return k ? (k === "orte" ? orte() : ort(k)) : hillview(); };
  return { sel:sel };
})();
