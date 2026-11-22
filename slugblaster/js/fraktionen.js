/* SLUGBLASTER – Fraktionen (S. 126–141): Beziehungen (+3…−3, !!!), Gruppen-Kartenraster, Mach eine Person. */
var SBR = (function(){
  var GR = [["", "Beziehungen"], ["crews", "Crews"], ["obrig", "Obrigkeiten"], ["spons", "Sponsoren"], ["cliquen", "Crowds"], ["person", "Mach eine Person"]];
  var SYM = ["−3", "−2", "−1", "0", "+1", "+2", "+3", "!!!"];
  function unter(cur){ return '<div class="frsub">' + GR.map(function(x){ return '<a class="' + (x[0] === cur ? "on" : "") + '" onclick="go(\'fraktionen' + (x[0] ? "/" + x[0] : "") + '\')">' + x[1] + '</a>'; }).join("") + '</div>'; }
  function rel(id){ return (ST.frak && ST.frak[id]) || "0"; }
  function setze(id, s){ ST.frak = ST.frak || {}; if(s === "0") delete ST.frak[id]; else ST.frak[id] = s; save(); render(); }
  function skala(id){ var c = rel(id); return '<div class="frs">' + SYM.map(function(s){ return '<span class="' + (s === c ? "on " : "") + (s[0] === "−" ? "neg" : s === "!!!" ? "uns" : s[0] === "+" ? "pos" : "") + '" onclick="SBR.setze(\'' + id + '\',\'' + s + '\')">' + s + '</span>'; }).join("") + '</div>'; }
  function gid(g){ return SB_FRAKREGELN.gruppen[g]; }
  function karte(f){
    var h = '<div class="frc"><div class="moh"><h3>' + esc(f.t) + '</h3>' + pgl(f.p) + '</div><div class="frk">' + esc(f.kurz) + '</div>' + skala(f.id) + '<p class="mx">' + md(f.x) + '</p>';
    if(f.npc && f.npc.length) h += '<div class="frl">NSC</div><ul class="fru">' + f.npc.map(function(n){ return '<li><b>' + md(n[0]) + '</b>' + (n[1] ? ' – ' + md(n[1]) : "") + '</li>'; }).join("") + '</ul>';
    if(f.besitz) h += '<div class="frl">Besitz</div><p class="mx">' + esc(f.besitz) + '</p>';
    if(f.mag) h += '<div class="frl">Mag</div><p class="mx">' + esc(f.mag) + '</p><div class="frl">Mag nicht</div><p class="mx">' + esc(f.magnicht) + '</p>';
    if(f.mehr) h += '<div class="frl">Weitere Wicks</div><p class="mx">' + f.mehr.map(esc).join(" · ") + '</p>';
    if(f.flavours) h += '<div class="frl">PANIC Energy – Sorten</div><p class="mx">' + f.flavours.map(esc).join(" · ") + '</p>';
    if(f.sit) h += '<div class="frsit"><b>Situation!</b> ' + esc(f.sit) + '</div>';
    if(f.probleme) h += '<div class="frl">Probleme</div><p class="mx">' + f.probleme.map(esc).join(" · ") + '</p><div class="frl">Checkpoints</div><p class="mx">' + f.checkpoints.map(esc).join(" · ") + '</p>';
    (f.extra || []).forEach(function(e){
      h += '<div class="frx"><div class="moh"><h4>' + esc(e.t) + '</h4></div>' + (e.von ? '<div class="von">' + esc(e.von) + '</div>' : "") + e.x.split("\n\n").map(function(p){ return '<p class="mx">' + md(p) + '</p>'; }).join("");
      if(e.l) h += '<ul class="mol">' + e.l.map(function(z, i){ var k = "frx/" + f.id + "/" + e.t + "/" + i; return '<li class="' + (ST.benutzt && ST.benutzt[k] ? "done" : "") + '"><span onclick="SBF.used(\'' + k.replace(/'/g, "\\'") + '\')">' + md(z[0]) + '</span>' + z[1].map(function(c){ return ' <i class="sch" onclick="SBM.sturz(\'' + esc(c).replace(/'/g, "\\'") + '\')">' + esc(c) + '</i>'; }).join("") + '</li>'; }).join("") + '</ul><button class="pill" onclick="SBM.tafel2(\'' + esc(e.t).replace(/'/g, "\\'") + '\')">Auf die Tafel</button>';
      h += '</div>';
    });
    if(f.rand) h += f.rand.map(function(r){ return '<p class="nbs">' + md(r) + '</p>'; }).join("");
    return h + '</div>';
  }
  function masonry(L){
    var n = L.length < 3 ? L.length : 3, cols = [], hs = [];
    for(var i = 0; i < n; i++){ cols.push([]); hs.push(0); }
    L.forEach(function(f){ var k = 0; for(var i = 1; i < n; i++) if(hs[i] < hs[k]) k = i; cols[k].push(karte(f)); hs[k] += JSON.stringify(f).length; });
    return '<div class="frg">' + cols.map(function(c){ return '<div class="frcol">' + c.join("") + '</div>'; }).join("") + '</div>';
  }
  function gruppe(g){
    var G = gid(g), L = SB_FRAKTIONEN.filter(function(f){ return f.g === g; });
    var h = unter(g) + '<div class="fr"><div class="moh"><h1>' + esc(G.t) + '</h1>' + pgl(G.p) + '</div><p class="lead">' + esc(G.x) + '</p>' + masonry(L) + '';
    if(g === "cliquen") h += '<div class="frsit wide"><b>' + esc(SB_CROWDSIT.t) + '</b> ' + esc(SB_CROWDSIT.x) + '</div>';
    return h + '</div>';
  }
  function beziehungen(){
    var R = SB_FRAKREGELN, h = unter("") + '<div class="fr"><div class="moh"><h1>Fraktionen</h1>' + pgl(R.p) + '</div><p class="lead">' + esc(R.kopf) + ' ' + esc(R.intro) + '</p><table class="tb frt">' + R.skala.map(function(s){ return '<tr><td><b>' + s[0] + '</b></td><td><b>' + s[1] + '</b></td><td>' + md(s[2]) + '</td></tr>'; }).join("") + '</table><p class="nbs">' + esc(R.n) + '</p><div class="ct">Eure Beziehungen</div><div class="frbg">';
    [["crews", "Crews"], ["obrig", "Obrigkeiten"], ["spons", "Sponsoren"], ["cliquen", "Crowds"]].forEach(function(g){
      h += '<div><div class="frlab">' + g[1] + '</div>' + SB_FRAKTIONEN.filter(function(f){ return f.g === g[0]; }).map(function(f){ return '<div class="frrow"><a onclick="go(\'fraktionen/' + g[0] + '\')">' + esc(f.t) + '</a>' + skala(f.id) + '</div>'; }).join("") + '</div>';
    });
    return h + '</div></div>';
  }
  function person(){
    var P = SB_PERSON;
    function liste(a, key){ return '<div class="d6l">' + a.map(function(x, i){ var n = (Math.floor(i / 6) + 1) + "" + (i % 6 + 1); return '<div class="r' + (ST.benutzt && ST.benutzt[key + "/" + i] ? " done" : "") + '" onclick="SBF.used(\'' + key + '/' + i + '\')"><b class="n">' + n + '</b><div>' + esc(x) + '</div></div>'; }).join("") + '</div>'; }
    return unter("person") + '<div class="fr"><div class="moh"><h1>Mach eine Person</h1>' + pgl(P.p) + '</div><p class="lead">' + esc(P.intro) + '</p><div class="frp"><div><div class="ct">Namen</div>' + P.namen.map(function(n){ return '<p class="mx"><b>' + esc(n[0]) + '.</b> ' + esc(n[1]) + '</p>'; }).join("") + '<p class="nbs">' + esc(P.nbn) + '</p><div class="ct">Wünsche / Bedürfnisse (W6)</div><table class="tb"><tr><th>W6</th><th>1–2</th><th>3–4</th><th>5–6</th></tr>' + P.wunsch.map(function(r, i){ return '<tr><td>' + (i + 1) + '</td>' + r.map(function(c){ return '<td>' + esc(c) + '</td>'; }).join("") + '</tr>'; }).join("") + '</table></div><div><div class="ct">Art (W66)</div>' + liste(P.manner, "frp/manner") + '</div><div><div class="ct">Details (W66)</div>' + liste(P.details, "frp/details") + '</div></div></div>';
  }
  VIEWS.fraktionen = function(a){ return '<div class="frwrap">' + (a[0] === "person" ? person() : gid(a[0] || "") ? gruppe(a[0]) : beziehungen()) + '</div>'; };
  return { setze:setze };
})();
