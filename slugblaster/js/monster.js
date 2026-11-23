/* SLUGBLASTER – Monster (S. 118–125): Kartenraster, Sturz-Chips, „Auf die Tafel“ (Gefahrenleiste), Mach ein Monster. */
var SBM = (function(){
  function absatz(a){ return a.map(function(x){ return '<p>' + md(x) + '</p>'; }).join(""); }
  function unter(cur){ return '<div class="mosub">' + [["", "Monster"], ["bau", "Mach ein Monster"]].map(function(x){ return '<a class="' + (x[0] === cur ? "on" : "") + '" onclick="go(\'monster' + (x[0] ? "/" + x[0] : "") + '\')">' + x[1] + '</a>'; }).join("") + '</div>'; }
  function karte(m){
    var h = '<div class="moc"><div class="moh"><h3>' + esc(m.t) + '</h3>' + pgl(m.p) + '</div>' + (m.von ? '<div class="von">' + esc(m.von) + '</div>' : "") + '<p class="mx">' + md(m.x) + '</p><ul class="mol">';
    m.l.forEach(function(z, i){
      var k = "mon/" + m.id + "/" + i;
      h += '<li class="' + (ST.benutzt && ST.benutzt[k] ? "done" : "") + '"><span onclick="SBF.used(\'' + k + '\')">' + md(z[0]) + '</span>' + z[1].map(function(c){ return ' <i class="sch" onclick="SBM.sturz(\'' + esc(c).replace(/'/g, "\\'") + '\')">' + esc(c) + '</i>'; }).join("") + '</li>';
    });
    h += '</ul>' + (m.n ? '<p class="nbs">' + esc(m.n) + '</p>' : "") + '<button class="pill" onclick="SBM.tafel(\'' + m.id + '\')">Auf die Tafel</button></div>';
    return h;
  }
  function uebersicht(){
    var I = SB_MONSTER_INTRO;
    return unter("") + '<div class="mo"><div class="moi"><div class="moh"><h1>Monster</h1>' + pgl(I.p) + '</div><div class="tx">' + absatz(I.x) + '</div><p class="nbs">' + esc(I.n) + '</p></div><div class="mog">' + SB_MONSTER.map(karte).join("") + '</div></div>';
  }
  function bau(){
    var B = SB_MONSTERBAU;
    function t36(a, key){ return '<div class="d6l two">' + a.map(function(x, i){ var n = (Math.floor(i / 6) + 1) + "" + (i % 6 + 1); return '<div class="r' + (ST.benutzt && ST.benutzt[key + "/" + i] ? " done" : "") + '" onclick="SBF.used(\'' + key + '/' + i + '\')"><b class="n">' + n + '</b><div>' + esc(x) + '</div></div>'; }).join("") + '</div>'; }
    function tab(a){ return '<table class="tb"><tr><th>W6</th>' + [1,2,3,4,5,6].map(function(n){ return '<th>' + n + '</th>'; }).join("") + '</tr>' + a.map(function(r, i){ return '<tr><td>' + (i + 1) + '</td>' + r.map(function(c){ return '<td>' + esc(c) + '</td>'; }).join("") + '</tr>'; }).join("") + '</table>'; }
    return unter("bau") + '<div class="mo"><div class="moh"><h1>Mach ein Monster</h1>' + pgl(B.p) + '</div><p class="lead">' + esc(B.intro) + '</p><ul class="dot">' + B.tipps.map(function(t){ return '<li>' + esc(t) + '</li>'; }).join("") + '</ul>' +
      '<div class="mobt"><div><div class="ct">Adjektiv (zweimal würfeln)</div>' + tab(B.adj) + '<div class="ct">Nomen</div>' + tab(B.nomen) + '<div class="ct">Stark gegen … (W6)</div><div class="d6l">' + B.stark.map(function(x, i){ return '<div class="r"><b class="n">' + (i + 1) + '</b><div>' + esc(x) + '</div></div>'; }).join("") + '</div></div>' +
      '<div><div class="ct">Schwach gegen … (W66)</div>' + t36(B.schwach, "mobau/schwach") + '</div></div></div>';
  }
  function tafel(id){ var m = null; SB_MONSTER.forEach(function(x){ if(x.id === id) m = x; }); if(!m) return; SBL.gefahr(m.t); var mm = modal('<div class="cap" style="color:var(--lila)">„' + esc(m.t) + '“ liegt als Gefahrenleiste (6) auf der Folge-Tafel.</div><div class="chips" style="margin-top:12px"><span class="chip" onclick="this.closest(\'.modal\').remove();go(\'folge\')">Zur Tafel</span></div>'); }
  function sturz(c){
    var L = SBC.list(); if(!L.length){ modal('<div class="cap" style="color:var(--lila)">Noch keine Slugger in der Crew.</div>'); return; }
    modal('<div class="cap" style="color:var(--lila);margin-bottom:10px">Slam „' + esc(c) + '“ für wen?</div><div class="chips">' + L.map(function(p, i){ var f = (p.stuerze || []).length < 2; return '<span class="chip' + (f ? "" : " off") + '" onclick="' + (f ? "SBM.slam(" + i + ",\'" + esc(c).replace(/'/g, "\\'") + "\')" : "") + '">' + esc(p.name) + '</span>'; }).join("") + '</div>');
  }
  function tafel2(t){ SBL.gefahr(t); modal('<div class="cap" style="color:var(--lila)">„' + esc(t) + '“ liegt als Gefahrenleiste (6) auf der Folge-Tafel.</div><div class="chips" style="margin-top:12px"><span class="chip" onclick="this.closest(\'.modal\').remove();go(\'folge\')">Zur Tafel</span></div>'); }
  function slam(i, c){ var p = SBC.list()[i]; p.stuerze = p.stuerze || []; if(p.stuerze.length < 2) p.stuerze.push({ t:c, s:false }); save(); document.querySelectorAll(".modal").forEach(function(m){ m.remove(); }); render(); }
  VIEWS.monster = function(a){ return '<div class="mowrap">' + (a[0] === "bau" ? bau() : uebersicht()) + '</div>'; };
  return { karte:karte, tafel2:tafel2, tafel:tafel, sturz:sturz, slam:slam };
})();
