/* SLUGBLASTER – Folge-Tafel (Entwurf 2): Kreislauf-Leiste (S. 13), Bite, Tour-Planer, Leisten, Crew-Status, Welt der Tour.
   Phasen: wahl · auffr · run · desaster · aufr · down (im Finale: Epilog statt Downtime). */
var SBF = (function(){
  var PH = [["wahl","Run wählen","Ziel · Preis · Hindernis"],["auffr","Auffrischen","Boost & Kick · Bite"],["run","Der Run!","Action! Abenteuer! Unfug!"],["desaster","Disaster??","Disaster-Würfe"],["aufr","Aufräumen","Style · Slams · Fraktionen"],["down","Downtime!","Schule! Pflichten! Gefühle!"]];
  PH[5][2] = "Schule! Pflichten! Gefühle!";
  function F(){ var f = (ST.folge = ST.folge || {}); if(!f.n){ f.n = 1; f.phase = "wahl"; f.finale = false; } return f; }
  function T(){ var t = (ST.tour = ST.tour || {}); t.preis = t.preis || {}; return t; }
  function UI(){ return (ST.ui = ST.ui || {}); }
  function used(k){ return !!(ST.benutzt && ST.benutzt[k]); }
  function strip(s){ return String(s).replace(/\*/g, ""); }
  function stripDot(s){ return String(s).replace(/\.$/, ""); }
  function pgs(p, t){ return pgl(p, t); }

  /* ---------- Kreislauf-Leiste ---------- */
  function stationen(){ var p = PH.map(function(x){ return x.slice(); }); if(F().finale){ p[5][1] = "Epilog"; p[5][2] = "Was aus euch wird"; } return p; }
  function cyc(){
    var f = F(), st = stationen(), idx = 0, n = ST.biss || 0, z = Math.max(6, Math.min(n, 12)), teeth = "";
    st.forEach(function(p, i){ if(p[0] === f.phase) idx = i; });
    for(var i = 0; i < z; i++) teeth += '<i class="' + (i < n ? "" : "o") + '"></i>';
    return '<div class="cyc"><div class="ep"><b onclick="SBF.folgeNr()">Folge <span class="num">' + f.n + '</span></b><small>von 5–10 · <span class="fin' + (f.finale ? " on" : "") + '" onclick="SBF.finale()">Finale</span></small></div>' +
      st.map(function(p, i){ return '<button class="ph' + (i < idx ? " done" : "") + (i === idx ? " on" : "") + '" onclick="SBF.phase(\'' + p[0] + '\')">' + (i === idx ? '<span class="bl"></span>' : "") + '<b>' + p[1] + '</b><small>' + p[2] + '</small></button>'; }).join("") +
      '<div class="bite"><div><div class="cap">Bite</div><div class="teeth">' + teeth + '</div></div><span class="n">' + n + '</span><button onclick="SBF.bite(-1)" aria-label="weniger">−</button><button onclick="SBF.bite(1)" aria-label="mehr">+</button></div></div>';
  }

  /* ---------- Listen mit „+ N weitere“ ---------- */
  function liste(arr, key, max){
    var o = !!UI()["l_" + key], h = "";
    arr.forEach(function(x, i){ if(o || i < (max || 5)) h += '<li class="' + (used(key + "/" + i) ? "done" : "") + '" onclick="SBF.used(\'' + key + '/' + i + '\')">' + esc(x) + '</li>'; });
    var rest = arr.length - (max || 5);
    return '<ul class="cl">' + h + '</ul>' + (rest > 0 ? '<button class="more" onclick="SBF.ui(\'l_' + key + '\')">' + (o ? "− weniger" : "+ " + rest + " weitere") + '</button>' : "");
  }
  function d6zeilen(arr, key){
    return '<div class="d6l">' + arr.map(function(x, i){ return '<div class="r' + (used(key + "/" + i) ? " done" : "") + '" onclick="SBF.used(\'' + key + '/' + i + '\')"><b class="n">' + (i + 1) + '</b><div><b>' + esc(x[0]) + '.</b> ' + md(x[1]) + '</div></div>'; }).join("") + '</div>';
  }

  /* ---------- Welt ---------- */
  function weltKarte(id, modus){
    var w = id && sbWelt(id); if(!w) return "";
    var d = SB_WELT[id], h = '<div class="world"><div class="wh"><h2 class="h2">' + esc(w.t) + '</h2>' + pgs(w.p) + '</div>';
    if(d){
      if(modus === "wahl"){
        h += '<div class="ct">Besondere Orte</div>' + d.orte.map(function(o){ return '<div class="ort"><b>' + esc(o.t) + '.</b> ' + esc(o.x) + '</div>'; }).join("");
      } else {
        h += '<div class="ct">Probleme</div>' + liste(d.probleme, "welt/" + id + "/probleme") + '<div class="ct">Checkpoints</div>' + liste(d.checkpoints, "welt/" + id + "/checkpoints");
      }
    }
    return h + '</div>';
  }
  function biteBox(){
    var A = SB_SLAKTIONEN, j = function(a){ return a.map(function(x){ return md(stripDot(x)); }).join(" · "); };
    return '<div class="box mint gm"><div class="cap">Bite ausgeben ' + pgs(145) + '</div><b>1 Bite:</b> ' + j(A.bite1) + '<br><b>2 Bite:</b> ' + j(A.bite2) + '</div>';
  }
  function acc(key, titel, p, inner){
    return '<details class="acc"' + (UI()["a_" + key] ? " open" : "") + ' ontoggle="SBF.acc(\'' + key + '\',this.open)"><summary>' + titel + pgs(p) + '</summary><div class="ab">' + inner + '</div></details>';
  }
  function ulMd(a){ return '<ul class="dot">' + a.map(function(x){ return '<li>' + md(x) + '</li>'; }).join("") + '</ul>'; }
  function gefahrAcc(){
    var G = SB_GEFAHR;
    return '<div class="accs">' +
      acc("snags", "Snags", G.snags.p, '<p>' + md(G.snags.intro) + '</p>' + ulMd(G.snags.x)) +
      acc("slams", "Slams", G.slams.p, '<p>' + md(G.slams.intro) + '</p>' + ulMd(G.slams.x) + '<p class="hn">' + esc(G.slams.n) + '</p>') +
      acc("schlimmer", "Schlimmere Probleme", G.schlimmer.p, '<p>' + md(G.schlimmer.intro) + '</p>' + ulMd(G.schlimmer.x) + '<p>' + md(G.schlimmer.nach) + '</p>') +
      acc("ideen", "Disaster-Ideen", G.disaster.p, '<p>' + md(G.disaster.intro) + '</p>' + ulMd(G.disaster.x) + d6zeilen(G.ideen, "dis")) + '</div>';
  }

  /* ---------- Links: Run wählen ---------- */
  function leftWahl(){
    var t = T(), h = '<h2 class="h2">Run wählen</h2><div class="plan">';
    h += '<label class="cap">Name</label><input class="inp" type="text" value="' + esc(t.name || "") + '" oninput="SBF.tf(\'name\',this.value)" autocomplete="off">';
    h += '<label class="cap">Ziel</label><textarea class="inp" rows="2" oninput="SBF.tf(\'ziel\',this.value)">' + esc(t.ziel || "") + '</textarea>';
    h += '<label class="cap">Preis ' + pgs(29) + '</label><div class="chs">' + SB_PREISE.map(function(p){ return '<button class="' + (t.preis[p.id] != null ? "on" : "") + '" title="' + esc(p.x) + '" onclick="SBF.preis(\'' + p.id + '\')">' + p.t + '</button>'; }).join("") + '<button class="' + (t.mega ? "on" : "") + '" onclick="SBF.mega()">Mega-Preis</button></div>';
    SB_PREISE.forEach(function(p){ if(t.preis[p.id] != null) h += '<div class="pr"><span>' + p.t + '</span><input class="inp" type="text" value="' + esc(t.preis[p.id]) + '" oninput="SBF.pf(\'' + p.id + '\',this.value)" autocomplete="off"></div>'; });
    h += '<label class="cap">Hindernis ' + pgs(154) + '</label><textarea class="inp" rows="2" oninput="SBF.tf(\'hindernis\',this.value)">' + esc(t.hindernis || "") + '</textarea>';
    h += '<label class="cap">Welt</label><select class="inp" onchange="SBF.tf(\'welt\',this.value);render()"><option value="">–</option>' + SB_WELTEN.map(function(w){ return '<option value="' + w.id + '"' + (t.welt === w.id ? " selected" : "") + '>' + esc(w.t) + '</option>'; }).join("") + '</select></div>';
    var all = !!UI().ideen, I = SB_TOUREN;
    h += '<div class="ct" style="color:var(--lila);margin-top:22px">Run-Ideen ' + pgs(28) + '</div><p class="hn">' + esc(SB_TOUREN_NOTIZ) + '</p><div class="idl">' +
      I.map(function(x, i){ return (all || i < 5) ? '<div class="r' + (used("ideen/" + x[0]) ? " done" : "") + '" onclick="SBF.idee(' + i + ')"><b class="n">' + x[0] + '</b><div>' + md(x[1]) + (x[2] ? ' <span class="hn">' + esc(x[2]) + '</span>' : "") + '</div></div>' : ""; }).join("") + '</div>' +
      '<button class="more" onclick="SBF.ui(\'ideen\')">' + (all ? "− weniger" : "+ " + (I.length - 5) + " weitere") + '</button>';
    return h;
  }
  function rightWahl(){
    var t = T(), H = SB_HINDERNISSE;
    return weltKarte(t.welt, "wahl") + '<div class="card"><div class="ct" style="color:var(--lila)">Hindernisse ' + pgs(H.p) + '</div><p class="hn2">' + esc(H.intro) + '</p><ul class="cl lt">' +
      H.x.map(function(x, i){ return '<li onclick="SBF.hind(' + i + ')">' + esc(x) + '</li>'; }).join("") + '</ul></div>';
  }

  /* ---------- Auffrischen ---------- */
  function leftAuffr(){
    var f = F(), n = SBC.list().length;
    return '<h2 class="h2">Auffrischen</h2><button class="big" onclick="SBF.auffr()">' + (f.auffr ? "Erneut auffrischen" : "Alle auffrischen") + '</button>' +
      (f.auffr ? '<div class="okl">Aufgefrischt' + (f.bitePlus ? " · +" + f.bitePlus + " Bite" : "") + '</div>' : "") +
      '<ul class="dot lt2"><li>Deine ausgegebenen Punkte werden zu Beginn jedes Runs aufgefrischt. ' + pgs(19) + '</li><li>Beim Auffrischen sammelt die SL 1 Bite pro Spieler (' + n + '). ' + pgs(145) + '</li></ul>';
  }
  function rightAuffr(){
    var A = SB_SLAKTIONEN;
    return '<div class="card"><div class="ct" style="color:var(--lila)">Jederzeit kannst du … ' + pgs(A.p) + '</div>' + ulMd(A.jederzeit) + '<div class="ct" style="color:var(--lila)">Wenn sie ein Problem würfeln …</div>' + ulMd(A.problem) + '</div>' +
      '<div class="box mint gm"><div class="cap">Bite</div>' + md(A.biteText).replace(/<br>/g, "<br><br>") + '</div>';
  }

  /* ---------- Der Run! ---------- */
  function leftRun(){
    var t = T(), h = '<div class="tour"><h2 class="h2">' + esc(t.name || "Der Run") + '</h2><dl class="gpo">';
    var pr = SB_PREISE.filter(function(p){ return t.preis[p.id] != null; }).map(function(p){ return '<b>' + p.t + ':</b> ' + esc(t.preis[p.id] || "–"); }).join(" · ");
    var w = t.welt && sbWelt(t.welt), d = w && SB_WELT[w.id];
    h += '<dt>Ziel</dt><dd class="' + (t.ziel ? "" : "leer") + '">' + (t.ziel ? esc(t.ziel) : "–") + '</dd>';
    h += '<dt>Preis</dt><dd class="' + (pr ? "" : "leer") + '">' + (pr || "–") + (t.mega ? ' <span class="mg">Mega</span>' : "") + '</dd>';
    h += '<dt>Hindernis</dt><dd class="' + (t.hindernis ? "" : "leer") + '">' + (t.hindernis ? esc(t.hindernis) : "–") + '</dd>';
    h += '<dt>Welt</dt><dd>' + (w ? '<span class="wchip">' + esc(w.t) + (d && d.plak ? d.plak.map(function(x){ return ' <i>' + x + '</i>'; }).join("") : "") + '</span>' : '<span class="leer">–</span>') + '</dd></dl></div>';
    h += '<div class="ct" style="color:var(--lila)">Leisten ' + pgs(149) + '</div>' + SBL.liste();
    return h;
  }
  function rightRun(){ var t = T(); return weltKarte(t.welt, "run") + biteBox() + gefahrAcc(); }

  /* ---------- Disaster?? ---------- */
  function leftDesaster(){
    var l = SBC.list(), D = SB_DISASTERWURF, h = '<h2 class="h2">Disaster??</h2>';
    if(!l.length) return h + '<button class="add" onclick="SBC.neu()">+ Slugger</button>';
    h += l.map(function(p, i){
      var X = 8 - (p.aerger || 0), P = sbPers(p.pers), auto = X <= 0 || p.auto, r = p.dis;
      var res = auto ? [["13", "1–3", "+1 Doom"]] : [["6", "6", "+1 Style"], ["45", "4–5", "+1 Trouble"], ["13", "1–3", "+1 Doom"]];
      return '<div class="ds"><div class="dn"><b>' + esc(p.name) + '</b><span style="background:' + P.farbe + '">' + esc(P.t) + '</span></div>' +
        '<div class="dw">' + (auto ? 'Disaster trifft automatisch' + (X <= 0 ? ' (alle Trouble-Kästchen markiert)' : ' (Slams voll)') : 'Würfle <b>' + X + ' W6</b>, nimm den höchsten.' + (P.id === "guts" ? ' <span class="hn">+1W6 mit Walking Disaster</span>' : "")) + '</div>' +
        '<div class="db">' + res.map(function(x){ return '<button class="rb' + (r === x[0] ? " on" : "") + '" onclick="SBF.dis(' + i + ',\'' + x[0] + '\')"><b>' + x[1] + '</b><small>' + x[2] + '</small></button>'; }).join("") + '</div></div>';
    }).join("");
    return h;
  }
  function rightDesaster(){
    var D = SB_DISASTERWURF, G = SB_GEFAHR;
    return '<div class="card"><div class="ct" style="color:var(--lila)">Disaster-Wurf ' + pgs(D.p) + '</div><p class="hn2">' + esc(D.text) + '</p><table class="d6"><tbody>' + D.e.map(function(e){ return '<tr><td class="n">' + e.k + '</td><td><b>' + esc(e.t) + '</b> ' + esc(e.x) + '</td></tr>'; }).join("") + '</tbody></table></div>' +
      '<div class="card"><div class="ct" style="color:var(--lila)">Disaster-Ideen ' + pgs(G.disaster.p) + '</div>' + d6zeilen(G.ideen, "dis") + '</div>';
  }

  /* ---------- Aufräumen ---------- */
  function leftAufr(){
    var l = SBC.list(), t = T(), h = '<h2 class="h2">Aufräumen</h2>';
    h += '<div class="ct" style="color:var(--lila)">Style-Bonus ' + pgs(27) + '</div>';
    if(!l.length) h += '<button class="add" onclick="SBC.neu()">+ Slugger</button>';
    h += l.map(function(p, i){ var P = sbPers(p.pers); return '<div class="sbn"><div><b>' + esc(p.name) + '</b><span style="background:' + P.farbe + '">' + esc(P.t) + '</span><p>' + esc(P.styleBonus) + '</p></div><button class="pill" onclick="SBF.sb(' + i + ')">+1 Style</button></div>'; }).join("");
    h += '<div class="ct" style="color:var(--lila);margin-top:20px">Slams ' + pgs(20) + '</div><button class="pill wide" onclick="SBF.slamsClear()">Slams löschen</button><p class="hn2">Super-Slams werden zu normalen Slams.</p>';
    var pr = SB_PREISE.filter(function(p){ return t.preis[p.id] != null; }).map(function(p){ return '<b>' + p.t + ':</b> ' + esc(t.preis[p.id] || "–"); }).join(" · ");
    if(pr) h += '<div class="ct" style="color:var(--lila);margin-top:20px">Preis</div><p class="pz">' + pr + '</p>';
    if(VIEWS.fraktionen) h += '<button class="pill wide" style="margin-top:18px" onclick="go(\'fraktionen\')">Fraktionen anpassen</button>';
    return h;
  }
  function rightAufr(){
    var c = SBC.crew(), cur = SB_RUHM[c.ruhm || 0], nx = SB_RUHM[(c.ruhm || 0) + 1];
    var h = '<div class="card ruhm"><div class="ct" style="color:var(--lila)">Ruhm ' + pgs(77) + '</div><div class="rt">' + esc(cur.t) + '</div><p class="hn2">' + esc(cur.x) + '</p>' + (cur.v ? ulMd(cur.v) : "");
    h += '<div class="rcs"><span class="ct">Crew-Style</span><span class="v cs"><button onclick="SBC.cstyle(-1)" aria-label="weniger">−</button><b>' + (c.style || 0) + '</b><button onclick="SBC.cstyle(1)" aria-label="mehr">+</button></span></div>';
    if(nx) h += '<button class="pill wide' + ((c.style || 0) >= nx.kosten ? "" : " off") + '" onclick="SBF.ruhm()">' + esc(nx.t) + ' · ' + nx.kosten + ' Style</button><p class="hn2">' + esc(nx.x) + '</p>' + (nx.v ? ulMd(nx.v) : "");
    return h + '</div>';
  }

  /* ---------- Downtime! ---------- */
  function beat(i, key, b, gekauft, aus){
    var k = b.k, st = k[1] === "style";
    return '<div class="bt' + (gekauft ? " ok" : "") + (aus ? " off" : "") + '"><div class="bh"><b>' + esc(b.t) + '</b>' + (gekauft ? '<span class="plak ok">gekauft</span>' : '<button class="plak ' + k[1] + '" onclick="SBF.kauf(' + i + ',\'' + key + '\')">' + k[0] + ' ' + (st ? "Style" : "Trouble") + '</button>') + '</div><p>' + md(b.x) + '</p></div>';
  }
  function arcKarte(i, p, art, def, label, cap){
    var m = p.mom, idx = m[art] || 0, dots = "";
    for(var j = 0; j < def.x.length; j++) dots += '<i class="' + (j < idx ? "x" : "") + '"></i>';
    var h = '<div class="ct arc">' + esc(label) + '<span class="dots">' + dots + '</span></div>';
    if(idx >= def.x.length) return h + '<p class="hn2">Bogen abgeschlossen.</p>';
    var b = def.x[idx], aus = !!(m.dt && m.dt[art]);
    return h + beat(i, "bogen:" + art, b, false, aus);
  }
  function leftDown(){
    var f = F(), l = SBC.list(), M = SB_MOMENTE, h = '<h2 class="h2">Downtime!</h2>';
    if(!l.length) return h + '<button class="add" onclick="SBC.neu()">+ Slugger</button>';
    var i = Math.min(f.sel || 0, l.length - 1), p = l[i], P = sbPers(p.pers); p.mom = p.mom || { eig:[], bogen:0, familie:0, angst:0, dt:{} };
    h += '<div class="scs">' + l.map(function(q, j){ var Q = sbPers(q.pers); return '<button class="' + (j === i ? "on" : "") + '" style="--pc:' + Q.farbe + '" onclick="SBF.sel(' + j + ')"><b>' + esc(q.name) + '</b><small>Style ' + (q.style || 0) + ' · Trouble ' + (q.aerger || 0) + '</small></button>'; }).join("") + '</div>';
    var eig = M.eig.x.concat([{ id:P.id + "-moment", t:P.moment.t, k:P.moment.k, x:P.moment.x, pers:1 }]);
    h += '<div class="ct">Eigenschaft ' + pgs(24) + '</div>' + eig.map(function(b){ var g = p.mom.eig.indexOf(b.id) >= 0; return beat(i, "eig:" + b.id, b, g, false); }).join("");
    h += arcKarte(i, p, "bogen", P.bogen, P.bogen.t, "");
    h += arcKarte(i, p, "familie", M.familie, M.familie.t, "");
    h += arcKarte(i, p, "angst", M.angst, M.angst.t, "");
    h += '<div class="ct">Weitere Beats ' + pgs(25) + '</div>' + M.weitere.x.map(function(b){ return beat(i, "w:" + b.id, b, false, false); }).join("");
    h += '<div class="ct">Crew-Beats ' + pgs(25) + '</div>' + M.crew.x.map(function(b){ return beat(i, "c:" + b.id, b, false, false); }).join("");
    var W = M.werkstatt;
    h += '<div class="ct">Signatur ' + pgs(W.p) + '</div><div class="bt"><div class="bh"><b>' + W.t + '</b><button class="plak style" onclick="SBF.kauf(' + i + ',\'wk\')">' + W.k[0] + ' Style</button></div><p>' + esc(W.x) + '</p>' + ulMd(W.l) + '</div>';
    h += '<button class="big nxt" onclick="SBF.next()">Nächste Folge</button>';
    return h;
  }
  function rightDown(){
    var f = F(), r = f.rt === "her" ? SB_HERAUSFORDERUNGEN : SB_GELEGENHEITEN, key = f.rt === "her" ? "her" : "gel";
    var h = '<div class="rtabs"><button class="' + (key === "gel" ? "on" : "") + '" onclick="SBF.rt(\'gel\')">Gelegenheiten</button><button class="' + (key === "her" ? "on" : "") + '" onclick="SBF.rt(\'her\')">Herausforderungen</button></div>';
    h += '<div class="ct" style="color:var(--lila)">' + esc(r.wurf) + ' ' + pgs(r.p) + '</div><ul class="dot mods">' + r.mods.map(function(x){ return '<li>' + md(x) + '</li>'; }).join("") + '</ul>';
    h += '<div class="gz">' + r.z.map(function(z){
      return '<div class="zr"><b class="n">' + z[0] + '</b><div>' + [1, 2].map(function(o, oi){ var kk = key + "/" + z[0] + "/" + oi; return (oi ? '<div class="oder">oder</div>' : "") + '<div class="op' + (used(kk) ? " done" : "") + '" onclick="SBF.used(\'' + kk + '\')"><b>' + esc(z[o][0]) + '.</b> ' + md(z[o][1]) + '</div>'; }).join("") + '</div></div>';
    }).join("") + '</div>';
    return h;
  }

  /* ---------- Epilog (Finale) ---------- */
  var EPI = {
   p:30,
   t:["Lege zuerst fest, wie viel Zeit der Epilog abdeckt. Die SL hat das letzte Wort. Ein Jahr funktioniert gut, aber ihr könntet eure Charaktere sogar bis ins Erwachsenenalter begleiten.","Dann würfelt jeder Spieler 1W6 pro 2 Doom, um den Tiefpunkt seines Epilogs zu bestimmen, und 1W6 pro 2 Legacy für den Höhepunkt.","Beschreibt nun anhand dieser Anstöße in einer Montage, was mit euch geschieht. Endet mit einem Höhepunkt. Das hier ist Slugblaster, nicht Sadblaster."],
   tief:[["6","Eine bleibende Verletzung. Ein zerbrochener Traum. Eine Zukunft, der du nicht entkommen kannst. Ab ins Jugendgefängnis. Eine verlorene Freundschaft. Etwas, das dich verfolgt."],["4–5","Ein langer Weg. Ein Rückschlag. Festgefahren. Ein Jahr Hausarrest. Schwierige Veränderungen. Etwas geht zu Ende."],["1–3","Eine leichte Peinlichkeit. Eine amüsante Zwickmühle. Eine drohende Gefahr. Ein lästiges loses Ende."]],
   hoch:[["6","Den Traum leben. Beliebtheit. Geld. Bleibende Freundschaften. Oder einfach vollkommenes Glück bei dem, was du liebst. Du bekommst, was du am meisten wolltest."],["4–5","Ein neuer Freund. Ein alter Freund. Wiederbegegnung. Fortschritt. Wiederaufbau. Dranbleiben."],["1–3","Ein Hoffnungsschimmer. Eine offene Tür. Eine Erinnerung, die du immer schätzen wirst. Etwas, das dir niemand nehmen kann."]],
   crew:"Was passiert schließlich mit der Crew? Mit diesem Ding, von dem ihr ein Teil wart, größer als ihr selbst, größer als jedes einzelne Mitglied. Antwortet als Gruppe:",
   fragen:["Was ist die eine epische Geschichte, die jeder über euch erzählt? **The Guts** hat das letzte Wort.","Was ist die eine perfekte Erinnerung, die keiner von euch je vergessen wird? **The Chill** hat das letzte Wort.","Was hat die Crew zum Sport des Slugblastens beigetragen? **The Smarts** hat das letzte Wort.","Bleibt die Crew zusammen? Trennt sie sich? Lebt sie mit neuen Mitgliedern weiter? Welcher Teil des Vermächtnisses der Crew hält am längsten? **The Grit** hat das letzte Wort.","Hängt ihr noch miteinander ab? Falls nicht: Wann wart ihr zuletzt alle zusammen? Wusstet ihr, dass es das letzte Mal war? **The Heart** hat das letzte Wort."]
  };
  function leftEpilog(){
    var l = SBC.list(), h = '<h2 class="h2">Epilog ' + pgs(EPI.p) + '</h2>' + EPI.t.map(function(x){ return '<p class="ep-p">' + esc(x) + '</p>'; }).join("");
    if(l.length) h += '<div class="ct" style="color:var(--lila)">Würfe</div>' + l.map(function(p){ var d = Math.floor((p.verh || []).length / 2), g = Math.floor((p.verm || []).length / 2); return '<div class="ewr"><b>' + esc(p.name) + '</b><span>Tiefpunkt ' + d + ' W6 · Höhepunkt ' + g + ' W6</span></div>'; }).join("");
    return h;
  }
  function epTab(titel, arr, key){ return '<div class="card"><div class="ct" style="color:var(--lila)">' + titel + '</div><div class="d6l">' + arr.map(function(x, i){ return '<div class="r' + (used(key + "/" + i) ? " done" : "") + '" onclick="SBF.used(\'' + key + '/' + i + '\')"><b class="n w">' + x[0] + '</b><div>' + esc(x[1]) + '</div></div>'; }).join("") + '</div></div>'; }
  function rightEpilog(){
    return epTab("Tiefpunkt", EPI.tief, "ep/tief") + epTab("Höhepunkt", EPI.hoch, "ep/hoch") +
      '<div class="card"><div class="ct" style="color:var(--lila)">Crew-Epilog</div><p class="hn2">' + esc(EPI.crew) + '</p>' + ulMd(EPI.fragen) + '</div>';
  }

  /* ---------- Ansicht ---------- */
  function view(){
    var f = F(), p = f.phase, fin = f.finale && p === "down", L, R;
    if(p === "wahl"){ L = leftWahl(); R = rightWahl(); }
    else if(p === "auffr"){ L = leftAuffr(); R = rightAuffr(); }
    else if(p === "run"){ L = leftRun(); R = rightRun(); }
    else if(p === "desaster"){ L = leftDesaster(); R = rightDesaster(); }
    else if(p === "aufr"){ L = leftAufr(); R = rightAufr(); }
    else if(fin){ L = leftEpilog(); R = rightEpilog(); }
    else { L = leftDown(); R = rightDown(); }
    return cyc() + '<div class="g"><div class="gl">' + L + '</div><div class="gc">' + SBC.status() + '</div><div class="gr2">' + R + '</div></div>';
  }
  VIEWS.folge = view;

  function setBeat(i, key){
    var p = SBC.sc(i), M = SB_MOMENTE, P = sbPers(p.pers); p.mom = p.mom || { eig:[], bogen:0, familie:0, angst:0, dt:{} };
    var a = key.split(":"), b = null, art = null;
    if(a[0] === "eig"){ b = M.eig.x.concat([{ id:P.id + "-moment", k:P.moment.k }]).filter(function(x){ return x.id === a[1]; })[0]; }
    else if(a[0] === "bogen"){ art = a[1]; var def = art === "bogen" ? P.bogen : M[art]; b = def.x[p.mom[art] || 0]; if(p.mom.dt && p.mom.dt[art]) return; }
    else if(a[0] === "w"){ b = M.weitere.x.filter(function(x){ return x.id === a[1]; })[0]; }
    else if(a[0] === "c"){ b = M.crew.x.filter(function(x){ return x.id === a[1]; })[0]; }
    else if(a[0] === "wk"){ b = M.werkstatt; }
    if(!b) return;
    var n = b.k[0], style = b.k[1] === "style";
    if(style){ if((p.style || 0) < n) return; p.style -= n; } else { p.aerger = Math.max(0, (p.aerger || 0) - n); }
    if(a[0] === "eig") p.mom.eig.push(a[1]);
    if(art){ p.mom[art] = (p.mom[art] || 0) + 1; p.mom.dt = p.mom.dt || {}; p.mom.dt[art] = true; }
    if(a[0] === "w" && a[1] === "brav"){ p.aerger = Math.max(0, (p.aerger || 0) - 2); }
    if(a[0] === "c" && a[1] === "gelegenheit") F().rt = "gel";
    if(a[0] === "c" && a[1] === "herausforderung") F().rt = "her";
  }

  return {
    liste: liste,
    view: view,
    phase: function(id){ F().phase = id; save(); render(); },
    finale: function(){ var f = F(); f.finale = !f.finale; save(); render(); },
    bite: function(d){ ST.biss = Math.max(0, (ST.biss || 0) + d); save(); render(); },
    folgeNr: function(){ var f = F(); var m = modal('<h3 class="h3">Folge</h3><div class="fld"><input id="fNr" type="number" min="1" value="' + f.n + '" onkeydown="if(event.key===\'Enter\')SBF.nrOk()"></div><div class="act"><button class="pri" onclick="SBF.nrOk()">Fertig</button></div>'); setTimeout(function(){ var n = document.getElementById("fNr"); if(n){ n.focus(); n.select(); } }, 30); },
    nrOk: function(){ var v = parseInt(document.getElementById("fNr").value, 10); if(v > 0) F().n = v; save(); document.querySelectorAll(".modal").forEach(function(m){ m.remove(); }); render(); },
    tf: function(k, v){ T()[k] = v; save(); },
    pf: function(id, v){ T().preis[id] = v; save(); },
    preis: function(id){ var t = T(); if(t.preis[id] != null) delete t.preis[id]; else t.preis[id] = ""; save(); render(); },
    mega: function(){ var t = T(); t.mega = !t.mega; save(); render(); },
    idee: function(i){ var x = SB_TOUREN[i]; T().ziel = strip(x[1]); ST.benutzt = ST.benutzt || {}; ST.benutzt["ideen/" + x[0]] = 1; save(); render(); },
    hind: function(i){ T().hindernis = SB_HINDERNISSE.x[i]; save(); render(); },
    ui: function(k){ UI()[k] = !UI()[k]; save(); render(); },
    acc: function(k, o){ UI()["a_" + k] = o; try{ localStorage.setItem("sb_state_v1", JSON.stringify(ST)); }catch(e){} },
    used: function(k){ ST.benutzt = ST.benutzt || {}; if(ST.benutzt[k]) delete ST.benutzt[k]; else ST.benutzt[k] = 1; save(); render(); },
    auffr: function(){
      var f = F(), l = SBC.list(), c = SBC.crew();
      l.forEach(function(p){ p.bs = 0; p.ks = 0; }); c.hbs = 0; c.hks = 0;
      if(!f.auffr){ f.bitePlus = l.length; ST.biss = (ST.biss || 0) + l.length; }
      f.auffr = 1; save(); render();
    },
    dis: function(i, r){
      var p = SBC.sc(i);
      function undo(){ var d = p.dis; if(!d) return; if(d === "6") p.style = Math.max(0, (p.style || 0) - 1); else if(d === "45") p.aerger = Math.max(0, (p.aerger || 0) - 1); else if(d === "13" && p.verh && p.verh.length) p.verh.pop(); p.dis = null; }
      if(p.dis === r){ undo(); save(); render(); return; }
      undo();
      if(r === "6"){ p.style = Math.min(8, (p.style || 0) + 1); p.dis = "6"; }
      else if(r === "45"){ p.aerger = Math.min(8, (p.aerger || 0) + 1); p.dis = "45"; }
      else { SBC.doom(i, function(){ p.dis = "13"; p.auto = false; }); return; }
      save(); render();
    },
    sb: function(i){ var p = SBC.sc(i); p.style = Math.min(8, (p.style || 0) + 1); save(); render(); },
    slamsClear: function(){ SBC.list().forEach(function(p){ p.stuerze = (p.stuerze || []).filter(function(s){ return s.s; }).map(function(s){ return { t:s.t, s:false }; }); p.auto = false; }); save(); render(); },
    ruhm: function(){ var c = SBC.crew(), nx = SB_RUHM[(c.ruhm || 0) + 1]; if(!nx || (c.style || 0) < nx.kosten) return; c.style -= nx.kosten; c.ruhm = (c.ruhm || 0) + 1; save(); render(); },
    sel: function(j){ F().sel = j; save(); render(); },
    rt: function(k){ F().rt = k; save(); render(); },
    kauf: function(i, key){ setBeat(i, key); save(); render(); },
    next: function(){
      var f = F(), m = modal('<h3 class="h3">Nächste Folge?</h3><div class="act"><button class="del2" onclick="this.closest(\'.modal\').remove()">Abbrechen</button><button class="pri" onclick="SBF.nextOk()">Folge ' + (f.n + 1) + ' starten</button></div>');
    },
    nextOk: function(){
      var f = F(); f.n++; f.phase = "wahl"; f.auffr = 0; f.bitePlus = 0; f.finale = false;
      ST.tour = {}; ST.leisten = [];
      var keep = {}; Object.keys(ST.benutzt || {}).forEach(function(k){ if(k.indexOf("ideen/") === 0) keep[k] = 1; }); ST.benutzt = keep;
      SBC.list().forEach(function(p){ p.dis = null; p.auto = false; if(p.mom) p.mom.dt = {}; });
      save(); document.querySelectorAll(".modal").forEach(function(m){ m.remove(); }); render();
    }
  };
})();
