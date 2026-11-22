/* SLUGBLASTER – Multiversum (Entwürfe 3 + 4): Karte (S. 94) mit Portalen, Weltenkarten, Welt-Seite, Bonus-Welten, Welt bauen, Portale & Dünnzonen. */
var SBW = (function(){
  /* Regionen der Karte „Kartiert das Multiversum“ (S. 94), Koordinaten im 630er-Raster der Seite */
  var REG = [
   {id:"calorium", t:["CALORIUM"], p:[[50,132],[283,55],[252,185],[100,197]], l:[153,143]},
   {id:"operaeblum", t:["OPER-","AEBLUM"], p:[[283,55],[335,95],[330,240],[270,250],[252,185]], l:[282,185]},
   {id:"empyrean", t:["EMPYREAN"], p:[[100,197],[252,185],[268,250],[200,270],[80,243]], l:[143,238]},
   {id:"vastiche", t:["VASTICHE"], p:[[335,95],[390,55],[425,185],[395,235],[330,240]], l:[378,188]},
   {id:"hillview", t:["NULL"], p:[[390,55],[472,62],[500,165],[470,235],[425,190]], l:[478,168], rot:-30},
   {id:"goldener-dschungel", t:["THE","GOLDEN","JUNGLE"], p:[[470,235],[500,165],[560,300],[528,392],[450,378],[472,300]], l:[524,300]},
   {id:"thennis-spar", t:["THENNIS","SPAR"], p:[[395,235],[470,235],[472,300],[450,378],[385,385],[383,322]], l:[425,318]},
   {id:"prismatia", t:["PRISMATIA"], p:[[200,270],[268,250],[330,240],[395,235],[383,322],[250,322]], l:[315,303]},
   {id:"popularia", t:["POPULARIA"], p:[[80,243],[200,270],[250,322],[200,372],[75,295]], l:[130,298], rot:24},
   {id:"erwachende-gruben", t:["THE WAKING PITS"], p:[[250,322],[383,322],[385,385],[335,408],[200,372]], l:[290,362], rot:8},
   {id:"desnine", t:["DESNINE"], p:[[450,378],[528,392],[520,455],[420,470],[335,408],[385,385]], l:[460,440]},
   {id:"quahalia", t:["QUAHALIA"], p:[[200,372],[335,408],[320,460],[270,472],[215,420]], l:[262,438], rot:30}
  ];
  var FRAGEN = [[135,57],[493,52],[73,372],[60,452]], LOCH = [[148,187],[467,378]];
  function R(id){ for(var i = 0; i < REG.length; i++) if(REG[i].id === id) return REG[i]; }
  function mitte(r){ var x = 0, y = 0; r.p.forEach(function(q){ x += q[0]; y += q[1]; }); return [x / r.p.length, y / r.p.length]; }
  function S(){ var s = (ST.mv = ST.mv || {}); s.portale = s.portale || []; return s; }
  function tname(id){ if(id === "hillview") return "Null"; var w = sbWelt(id); return w ? w.t : id; }

  /* ---------- Karte ---------- */
  function karte(){
    var s = S(), h = '<svg class="mvmap" viewBox="0 0 630 630"><defs><marker id="pfS" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#f175ad"/></marker></defs>';
    REG.forEach(function(r){
      var pts = r.p.map(function(q){ return q.join(","); }).join(" ");
      h += '<polygon class="reg' + (s.a === r.id ? " sel" : "") + '" points="' + pts + '" onclick="SBW.klick(\'' + r.id + '\')"/>';
    });
    REG.forEach(function(r){
      var n = r.t.length, tr = r.rot ? ' transform="rotate(' + r.rot + ' ' + r.l[0] + ' ' + r.l[1] + ')"' : "";
      h += '<text class="rl" text-anchor="middle"' + tr + '>' + r.t.map(function(z, i){ return '<tspan x="' + r.l[0] + '" y="' + (r.l[1] + (i - (n - 1) / 2) * 17 + 5) + '">' + z + '</tspan>'; }).join("") + '</text>';
    });
    FRAGEN.forEach(function(q){ h += '<text class="rq" x="' + q[0] + '" y="' + q[1] + '" onclick="go(\'welten/bonus\')">?</text>'; });
    LOCH.forEach(function(q){ h += '<circle cx="' + q[0] + '" cy="' + q[1] + '" r="17" class="loch" onclick="go(\'welten/bonus\')"/><text class="rq" x="' + q[0] + '" y="' + (q[1] + 8) + '" text-anchor="middle" onclick="go(\'welten/bonus\')">?</text>'; });
    h += '<path class="wtf" d="M388 482c18-8 30 10 12 16s-8 18 8 14" /><text class="rl" x="434" y="516" text-anchor="middle">WTF</text>';
    s.portale.forEach(function(q, i){
      var a = R(q.a), b = R(q.b); if(!a || !b) return;
      var A = mitte(a), B = mitte(b), dx = B[0] - A[0], dy = B[1] - A[1], d = Math.sqrt(dx * dx + dy * dy) || 1, k = 20;
      var x1 = A[0] + dx / d * k, y1 = A[1] + dy / d * k, x2 = B[0] - dx / d * k, y2 = B[1] - dy / d * k;
      h += '<g class="por" onclick="SBW.portalMenu(' + i + ')"><line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" class="hit"/><line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" class="pl" marker-end="url(#pfS)"' + (q.zwei ? ' marker-start="url(#pfS)"' : "") + '/>' +
        (q.n ? '<circle cx="' + (x1 + x2) / 2 + '" cy="' + (y1 + y2) / 2 + '" r="11" class="pn"/><text x="' + (x1 + x2) / 2 + '" y="' + ((y1 + y2) / 2 + 5) + '" text-anchor="middle" class="pt">' + esc(q.n) + '</text>' : "") + '</g>';
    });
    return h + '</svg>';
  }
  function klick(id){
    var s = S();
    if(!s.zeichnen){ if(id === "hillview") go(VIEWS.heimat ? "heimat" : "welten/hillview"); else go("welten/" + id); return; }
    if(!s.a){ s.a = id; save(); render(); return; }
    if(s.a === id){ s.a = null; save(); render(); return; }
    var a = s.a, m = modal('<div class="cap" style="color:var(--lila);margin-bottom:10px">Portal ' + esc(tname(a)) + ' – ' + esc(tname(id)) + '</div>' +
      '<div class="chips"><span class="chip" onclick="SBW.neuesPortal(\'' + a + '\',\'' + id + '\',false)">Einseitig →</span><span class="chip" onclick="SBW.neuesPortal(\'' + a + '\',\'' + id + '\',true)">Zweiseitig ↔</span></div>' +
      '<label class="cap" style="display:block;margin:14px 0 6px;color:var(--lila)">Komplikation (Nummer)</label><input id="mvN" class="inp" maxlength="3" style="width:90px">');
    m.id = "mvM";
  }
  function neuesPortal(a, b, zwei){
    var n = (document.getElementById("mvN") || {}).value || "", s = S();
    s.portale.push({ a:a, b:b, zwei:!!zwei, n:n.trim() }); s.a = null; save();
    var m = document.getElementById("mvM"); if(m) m.remove(); render();
  }
  function portalMenu(i){
    var s = S(), q = s.portale[i]; if(!q || s.zeichnen === false) return;
    var m = modal('<div class="cap" style="color:var(--lila);margin-bottom:10px">' + esc(tname(q.a)) + (q.zwei ? " ↔ " : " → ") + esc(tname(q.b)) + '</div>' +
      '<label class="cap" style="display:block;margin:6px 0;color:var(--lila)">Komplikation (Nummer)</label><input class="inp" maxlength="3" style="width:90px" value="' + esc(q.n || "") + '" oninput="SBW.portalNr(' + i + ',this.value)">' +
      '<div class="chips" style="margin-top:14px"><span class="chip" onclick="SBW.portalRichtung(' + i + ')">Richtung / zweiseitig wechseln</span><span class="chip" onclick="SBW.portalDel(' + i + ')">Löschen</span></div>');
    m.id = "mvM";
  }
  function portalNr(i, v){ S().portale[i].n = v.trim(); save(); }
  function portalRichtung(i){
    var q = S().portale[i];
    if(!q.zwei && !q.rev){ q.rev = true; var t = q.a; q.a = q.b; q.b = t; }
    else if(!q.zwei){ q.zwei = true; q.rev = false; }
    else { q.zwei = false; }
    save(); var m = document.getElementById("mvM"); if(m) m.remove(); render();
  }
  function portalDel(i){ S().portale.splice(i, 1); save(); var m = document.getElementById("mvM"); if(m) m.remove(); render(); }
  function zeichnen(){ var s = S(); s.zeichnen = !s.zeichnen; s.a = null; save(); render(); }

  /* ---------- Bausteine ---------- */
  function plaks(w){
    var d = SB_WELT[w.id]; if(!d || !d.plak) return "";
    return d.plak.map(function(z){ return '<span class="plak" style="background:' + (/^HAZ/.test(z) ? "#ec008c" : "#008496") + '">' + esc(z) + '</span>'; }).join("");
  }
  function unter(cur){
    var l = [["", "Karte"]].concat(SB_WELTEN.filter(function(w){ return !w.heim; }).map(function(w){ return [w.id, w.t.replace(/^Der |^Die /, "")]; })).concat([["bonus", "Bonus-Welten"], ["bauen", "Welt bauen"], ["portale", "Portale & Dünnzonen"]]);
    return '<div class="mvsub">' + l.map(function(x){ return '<a class="' + (x[0] === cur ? "on" : "") + '" onclick="go(\'welten' + (x[0] ? "/" + x[0] : "") + '\')">' + esc(x[1]) + '</a>'; }).join("") + '</div>';
  }
  function absatz(a){ return a.map(function(x){ return '<p>' + md(x) + '</p>'; }).join(""); }
  function sonder(b){ return '<div class="mvbox"><div class="cap">' + esc(b.t) + '</div>' + absatz(String(b.x).split("\n\n")) + '</div>'; }

  /* ---------- Übersicht ---------- */
  function uebersicht(){
    var s = S(), h = unter("") + '<div class="mvhome"><div class="mvpaper"><i class="tp t1"></i><i class="tp t2"></i>' + karte() +
      '<button class="mvdraw' + (s.zeichnen ? " on" : "") + '" onclick="SBW.zeichnen()">' + (s.zeichnen ? (s.a ? "Ziel wählen …" : "Start wählen …") : "Portal einzeichnen") + '</button></div>';
    h += '<div class="mvcards">' + SB_WELTEN.map(function(w){
      var d = SB_WELT[w.id], ziel = w.heim ? (VIEWS.heimat ? "heimat" : "welten/hillview") : "welten/" + w.id;
      return '<div class="mvc' + (w.heim ? " heim" : "") + '" onclick="go(\'' + ziel + '\')"><div class="mvct"><h3>' + esc(w.t) + '</h3>' + pgl(w.p, "S. " + w.p) + '</div>' +
        (d && d.aussprache ? '<div class="aus">' + esc(d.aussprache) + '</div>' : "") +
        '<p class="ks">' + esc(w.heim ? "" : (d && d.kurz) || "") + '</p><div class="pl">' + (w.heim ? '<span class="plak" style="background:#f4b400;color:#000">Heimat</span>' : plaks(w)) + '</div></div>';
    }).join("") + '</div></div>';
    return h;
  }

  /* ---------- Welt-Seite ---------- */
  function welt(id){
    var w = sbWelt(id), d = SB_WELT[id];
    if(id === "hillview" && !VIEWS.heimat) return unter("hillview") + '<div class="mvw"><h1>Hillview</h1><p>Wird in Schritt 3 (Heimat) gefüllt.</p></div>';
    if(!w || !d) return unter(id) + '<div class="mvw"><h1>' + esc(w ? w.t : id) + '</h1></div>';
    var tl = d.text || [], half = Math.ceil(tl.length / 2), pr = d.probleme || [], cp = d.checkpoints || [];
    var h = unter(id) + '<div class="mvw"><div class="mvl"><div class="mvh"><h1>' + esc(w.t) + '</h1>' + pgl(w.p) + plaks(w) + (d.aussprache ? '<span class="aus">' + esc(d.aussprache) + '</span>' : "") + '</div>' +
      '<p class="kz">' + esc(d.kurz || "") + '</p><div class="tx">' + absatz(tl) + '</div>' +
      '<div class="ct">Besondere Orte</div><div class="mvorte">' + d.orte.map(function(o){ return '<div class="o"><b>' + esc(o.t) + '</b><p>' + esc(o.x) + '</p></div>'; }).join("") + '</div>' +
      (d.sonder || []).map(sonder).join("") + (d.nbs ? '<p class="nbs">' + esc(d.nbs) + '</p>' : "") +
      '<div class="mvbtn"><button class="pill" onclick="SBW.tour(\'' + id + '\')">Run hier starten</button>' + pgl(141, "Person bauen · S. 141") + '</div></div>' +
      '<div class="mvr"><div class="ct">Probleme</div>' + SBF.liste(pr, "welt/" + id + "/probleme", 6) + '<div class="ct">Checkpoints</div>' + SBF.liste(cp, "welt/" + id + "/checkpoints", 6) +
      (d.bewohner ? '<div class="mvbox ew"><div class="cap">' + esc(d.bewohner.t) + '</div>' + absatz(d.bewohner.x.split("\n\n")) + '</div>' : "") + '</div></div>';
    return h;
  }
  function tour(id){ var t = (ST.tour = ST.tour || {}); t.welt = id; ST.folge = ST.folge || { n:1, finale:false }; ST.folge.phase = "wahl"; save(); go("folge"); }

  /* ---------- Bonus, Bauen, Portale ---------- */
  function bonus(){
    return unter("bonus") + '<div class="mvpg"><h1>Bonus-Welten</h1><div class="mvgrid">' + SB_BONUS.map(function(b){
      return '<div class="mvbw"><div class="mvct"><h3>' + esc(b.t) + '</h3>' + pgl(b.p) + '</div><div class="von">von ' + esc(b.von) + '</div>' + absatz(b.x) +
        '<ul class="dot">' + b.l.map(function(z){ return '<li>' + md(z) + '</li>'; }).join("") + '</ul>' + (b.n ? '<p class="nbs">' + esc(b.n) + '</p>' : "") + '</div>';
    }).join("") + '</div></div>';
  }
  function liste36(a, key){ return '<div class="d6l two">' + a.map(function(x, i){ var n = (Math.floor(i / 6) + 1) + "" + (i % 6 + 1); return '<div class="r' + (ST.benutzt && ST.benutzt[key + "/" + i] ? " done" : "") + '" onclick="SBF.used(\'' + key + '/' + i + '\')"><b class="n">' + n + '</b><div>' + esc(x) + '</div></div>'; }).join("") + '</div>'; }
  function bauen(){
    var B = SB_BAUEN;
    return unter("bauen") + '<div class="mvpg"><h1>Welt bauen' + pgl(B.p) + '</h1><p class="lead">Mit diesen Tipps und Tabellen erschafft ihr eigene Welten.</p><ul class="dot">' + B.tipps.map(function(t){ return '<li>' + esc(t) + '</li>'; }).join("") + '</ul>' +
      '<div class="mvtab"><div><div class="ct">Ruinen (W66)</div>' + liste36(B.ruinen, "bauen/ruinen") + '</div><div><div class="ct">Wendung (W66)</div>' + liste36(B.wendung, "bauen/wendung") + '</div>' +
      '<div><div class="ct">Landschaft (W6)</div><table class="tb"><tr><th></th><th>1–3</th><th>4–6</th></tr>' + B.landschaft.a.map(function(x, i){ return '<tr><td>' + (i + 1) + '</td><td>' + x + '</td><td>' + B.landschaft.b[i] + '</td></tr>'; }).join("") + '</table>' +
      '<div class="ct">Farben (zweimal würfeln)</div><table class="tb"><tr><th></th><th>1–2</th><th>3–4</th><th>5–6</th></tr>' + B.farben.x.map(function(r, i){ return '<tr><td>' + (i + 1) + '</td>' + r.map(function(c){ return '<td>' + c + '</td>'; }).join("") + '</tr>'; }).join("") + '</table></div></div></div>';
  }
  function portale(){
    var P = SB_PORTALE;
    return unter("portale") + '<div class="mvpg"><h1>Portale &amp; Dünnzonen</h1><p class="lead">' + esc(P.kopf) + '</p><div class="mvgrid">' + P.abschnitte.map(function(a){
      return '<div class="mvbw"><div class="mvct"><h3>' + esc(a.t) + '</h3>' + pgl(a.p) + '</div>' + absatz(a.x) + (a.l ? '<ul class="dot">' + a.l.map(function(z){ return '<li>' + esc(z) + '</li>'; }).join("") + '</ul>' : "") + '</div>';
    }).join("") +
    '<div class="mvbox bt"><div class="cap">Downtime-Beat · ' + esc(P.beat.t) + ' <span class="kst">' + P.beat.k[0] + ' Style</span></div>' + absatz(P.beat.x.split("\n\n")) +
    '<div class="two"><div>' + P.beat.a.map(function(x, i){ return '<div class="rw"><b>' + (i + 1) + '</b>' + esc(x) + '</div>'; }).join("") + '</div><div>' + P.beat.b.map(function(x, i){ return '<div class="rw"><b>' + (i + 1) + '</b>' + esc(x) + '</div>'; }).join("") + '</div></div><p class="nbs">' + esc(P.beat.n) + '</p></div>' +
    '<div class="mvbw"><div class="mvct"><h3>Slugger-Slang</h3>' + pgl(92) + '</div><dl class="slg">' + P.slang.map(function(x){ return '<dt>' + esc(x[0]) + '</dt><dd>' + esc(x[1]) + '</dd>'; }).join("") + '</dl><p class="nbs">' + esc(P.slangNote) + '</p></div>' +
    '</div></div>';
  }

  function view(a){
    var k = a[0] || "", out;
    if(!k) out = uebersicht(); else if(k === "bonus") out = bonus(); else if(k === "bauen") out = bauen(); else if(k === "portale") out = portale(); else out = welt(k);
    return '<div class="mv">' + out + '</div>';
  }
  VIEWS.welten = view;
  return { klick:klick, neuesPortal:neuesPortal, portalMenu:portalMenu, portalNr:portalNr, portalRichtung:portalRichtung, portalDel:portalDel, zeichnen:zeichnen, tour:tour };
})();
