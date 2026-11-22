/* SLUGBLASTER – Nachschlagen · Teenager (S. 40–51 Mach dich selbst + Persönlichkeiten, S. 72–77 Crew + Ruhm). Weitere Bereiche folgen. */
var SBN = (function(){
  var BER = [["regeln", "Spielablauf"], ["teenager", "Teenager"], ["spielleitung", "Spielleitung"], ["veraendern", "Spiel verändern"], ["demo", "Demo"]];
  var SUB = [["mach", "Mach dich selbst"], ["pers", "Persönlichkeiten"], ["sig", "Signaturen"], ["ausr", "Ausrüstung"], ["stk", "Sticker & Co."], ["crew", "Crew"], ["ruhm", "Ruhm"]];
  var PCOL = "#008496";
  function pers(id){ var r = null; SB_PERS.forEach(function(p){ if(p.id === id) r = p; }); return r; }
  function nav(ber, sub, pid){
    var top = SBR.nav(ber);
    var s = '<div class="frsub nsub">' + SUB.map(function(x){ return '<a class="' + (x[0] === sub ? "on" : "") + '" onclick="go(\'nach/teenager/' + x[0] + '\')">' + x[1] + '</a>'; }).join("");
    if(sub === "pers") s += '<i class="vr"></i>' + SB_PERS.map(function(p){ return '<a class="pn ' + (p.id === pid ? "on" : "") + '" onclick="go(\'nach/teenager/pers/' + p.id + '\')">' + esc(p.t) + '</a>'; }).join("");
    return top + s + '</div>';
  }
  function plak(k){ return '<span class="plk ' + (k[1] === "trouble" ? "tr" : "st") + '">' + k[0] + ' ' + (k[1] === "trouble" ? "Trouble" : "Style") + '</span>'; }
  function dice(n){ var h = ""; for(var i = 0; i < n; i++) h += '<svg class="hs" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" fill="#fff"/><circle cx="8" cy="8" r="2" fill="' + PCOL + '"/><circle cx="16" cy="8" r="2" fill="' + PCOL + '"/><circle cx="12" cy="12" r="2" fill="' + PCOL + '"/><circle cx="8" cy="16" r="2" fill="' + PCOL + '"/><circle cx="16" cy="16" r="2" fill="' + PCOL + '"/></svg>'; return h; }
  function bolt(n){ var h = ""; for(var i = 0; i < n; i++) h += '<svg class="hs" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#fff"/><path d="M13.5 3 7 13h4.5L10 21l7-11h-4.5z" fill="' + PCOL + '"/></svg>'; return h; }
  function stage(id){
    var F = SB_PTEXT[id].fig, w = F.w, h = F.h, I = F.img;
    function pc(v, t){ return (v / t * 100).toFixed(3) + "%"; }
    var s = '<div class="fgs" style="aspect-ratio:' + w + '/' + h + '"><img src="' + IMG("pers/" + id) + '" alt="" style="left:' + pc(I.x, w) + ';top:' + pc(I.y, h) + ';width:' + pc(I.w, w) + ';height:' + pc(I.h, h) + '">';
    s += '<svg viewBox="0 0 ' + w + ' ' + h + '" preserveAspectRatio="none">' + F.lines.map(function(d){ return '<path d="' + d + '"/>'; }).join("") + '</svg>';
    F.notes.forEach(function(n){ s += '<div class="fgn" style="left:' + pc(n.x, w) + ';top:' + pc(n.y, h) + ';width:' + pc(n.w + 8, w) + '">' + esc(n.t) + '</div>'; });
    return s + '</div>';
  }
  function persona(id){
    var P = pers(id), T = SB_PTEXT[id], i, h;
    var L = '<div class="pcl"><div class="ptit"><small>The</small><b>' + esc(T.titel) + '</b>' + pgl(T.p) + '</div>' + T.intro.map(function(x){ return '<p class="pt">' + md(x) + '</p>'; }).join("") + '<p class="pvb">' + md(T.vorbilder) + '</p>' +
      '<div class="hkas"><div class="ct">Haltung</div><p>' + md(T.haltung) + '</p><div class="hsy">' + (P.haltung.b === "inf" ? '<span class="inf">+1W6 · ∞</span>' : dice(P.haltung.b) + bolt(P.haltung.k)) + '</div></div>' +
      '<p class="nbs">' + esc(T.hn) + '</p>' +
      '<div class="pg2"><div><div class="ct">Extra-Ausrüstung</div>' + T.extra.map(function(x){ return '<div class="egr">' + esc(x) + '</div>'; }).join("") + '<p class="nbs">Das hast du von Anfang an. Du kannst es anstelle eines anderen Ausrüstungsstücks wählen.</p></div><div><div class="ct">Style-Bonus</div><p class="pt">' + esc(P.styleBonus) + '</p></div></div></div>';
    var R = '<div class="pcr"><div class="ct">Eigenschaften</div><ul class="ptr">' + T.traits.map(function(t){ return '<li><b>' + esc(t[0]) + '.</b> ' + esc(t[1]) + '</li>'; }).join("") + '</ul>' +
      '<div class="ct">Eigenschafts-Moment ' + pgl(T.p + 1) + '</div><div class="pmo"><div class="mh">' + plak(P.moment.k) + '<b>' + esc(P.moment.t) + '.</b></div><p>' + md(P.moment.x) + '</p></div>' +
      '<div class="ct">' + esc(T.titel) + '-Bogen</div>' + P.bogen.x.map(function(b){ return '<div class="pmo"><div class="mh">' + plak(b.k) + '<b>' + esc(b.t) + '.</b></div><p>' + md(b.x) + '</p></div>'; }).join("") +
      '<div class="ct">Vibes</div><div class="pvib">' + T.vibes.map(function(v, j){ return '<span class="' + (ST.benutzt && ST.benutzt["vibe/" + id + "/" + j] ? "done" : "") + '" onclick="SBF.used(\'vibe/' + id + '/' + j + '\')"><i>' + (j + 1) + '</i>' + esc(v) + '</span>'; }).join("") + '</div></div>';
    return '<div class="pers3">' + L + '<div class="pcm">' + stage(id) + '</div>' + R + '</div>';
  }
  function tbl(rows, cols, key){
    return '<table class="tb ntb"><tr><th>W6</th>' + cols.map(function(c){ return '<th>' + c + '</th>'; }).join("") + '</tr>' + rows.map(function(r, i){ return '<tr><td><b>' + (i + 1) + '</b></td>' + r.map(function(c){ return '<td>' + esc(c) + '</td>'; }).join("") + '</tr>'; }).join("") + '</table>';
  }
  function mach(){
    var M = SB_MACH;
    var L = '<div><p class="lead">' + esc(M.kopf) + '</p><div class="sk"><b class="no">1</b><h2>' + esc(M.pers.t) + '</h2></div>' + M.pers.x.map(function(x){ return '<p class="pt">' + esc(x) + '</p>'; }).join("") + '<ul class="dot">' + M.pers.l.map(function(x){ return '<li><b>' + esc(x[0]) + '.</b> ' + esc(x[1]) + '</li>'; }).join("") + '</ul></div>';
    var U = '<div class="mach3"><div><div class="sk"><b class="no">2</b><h2>' + esc(M.sig.t) + '</h2></div><p class="pt">' + esc(M.sig.x) + '</p><ul class="dot">' + M.sig.l.map(function(x){ return '<li><b>' + esc(x[0]) + '.</b> ' + esc(x[1]) + '</li>'; }).join("") + '</ul><p class="nbs">' + esc(M.sig.n) + '</p></div><div><div class="sk"><b class="no">3</b><h2>' + esc(M.name.t) + '</h2></div><p class="pt">' + esc(M.name.x) + '</p></div></div>';
    var R = '<div><div class="ct">Look</div>' + tbl(M.look, [1, 2, 3, 4, 5, 6]) + '<p class="nbs">' + md(M.nlook) + '</p><div class="nr2"><div><div class="ct">Familie</div>' + tbl(M.fam, ["1–3", "4–6"]) + '<p class="nbs">' + esc(M.nfam) + '</p></div><div><div class="ct">Bond</div><table class="tb ntb"><tr><th>W6</th><th>Bond</th></tr>' + M.bond.map(function(b, i){ return '<tr><td><b>' + (i + 1) + '</b></td><td>' + esc(b) + '</td></tr>'; }).join("") + '</table><p class="nbs">' + esc(M.nweb) + '</p></div></div></div>';
    return '<div class="fr"><div class="moh"><h1>Mach dich selbst</h1>' + pgl(M.p) + '</div><div class="mach2">' + L + R + '</div>' + U + '</div>';
  }
  function crew(){
    var C = SB_CREWBAU, S = C.schritte;
    function kopf(s){ return '<div class="sk"><b class="no">' + s.n + '</b><h2>' + esc(s.t) + '</h2></div><p class="pt">' + esc(s.x) + '</p>'; }
    var c1 = kopf(S[0]) + '<div class="bran">' + S[0].l.map(function(b, i){ var k = "brand/" + i; return '<div class="' + (ST.benutzt && ST.benutzt[k] ? "done" : "") + '" onclick="SBF.used(\'' + k + '\')"><b>' + esc(b[0]) + '</b> ' + esc(b[1]) + '</div>'; }).join("") + '</div><p class="nbs">' + esc(S[0].n_) + '</p><div class="hkas hy"><div class="ct">Hype!</div><p>' + esc(S[0].hype) + '</p></div>';
    var c2 = kopf(S[1]) + '<table class="tb ntb"><tr><th>W6</th><th>1–3</th><th>4–6</th></tr>' + S[1].tab.map(function(r, i){ return '<tr><td><b>' + (i + 1) + '</b></td><td>' + esc(r[0]) + '</td><td>' + esc(r[1]) + '</td></tr>'; }).join("") + '</table>' + kopf(S[2]);
    var c3 = kopf(S[3]) + '<ul class="dot">' + S[3].l.map(function(x){ return '<li><b>' + esc(x[0]) + '</b> ' + esc(x[1]) + '</li>'; }).join("") + '</ul>' + kopf(S[4]) + '<p class="nbs">' + esc(S[4].n_) + '</p>';
    function t36(a, key){ return '<div class="d6l two">' + a.map(function(x, i){ var n = (Math.floor(i / 6) + 1) + "" + (i % 6 + 1); return '<div class="r' + (ST.benutzt && ST.benutzt[key + "/" + i] ? " done" : "") + '" onclick="SBF.used(\'' + key + '/' + i + '\')"><b class="n">' + n + '</b><div>' + esc(x[0]) + (x[1] ? ' <i class="ex">' + esc(x[1]) + '</i>' : "") + '</div></div>'; }).join("") + '</div>'; }
    var nm = kopf(S[5]) + '<div class="ct">Namensideen (W66)</div>' + t36(C.ideen, "crewname") + '<div class="cn3"><div><div class="ct">Farben</div>' + tbl(C.farben, ["1–2", "3–4", "5–6"]) + '</div><div><div class="ct">Buchstaben &amp; Zahlen</div>' + tbl(C.buchst, [1, 2, 3, 4, 5, 6]) + '</div><div><div class="ct">Suffixe</div>' + tbl(C.suffix, ["1–2", "3–4", "5–6"]) + '</div></div>';
    return '<div class="fr"><div class="moh"><h1>Mach eure Crew</h1>' + pgl(C.p) + '</div><p class="lead">' + esc(C.kopf) + '</p><div class="cr3"><div>' + c1 + '</div><div>' + c2 + '</div><div>' + c3 + '</div></div><div class="cnm">' + nm + '</div></div>';
  }
  function ruhm(){
    var I = SB_RUHM_INTRO, c = 0;
    var cards = SB_RUHM.map(function(r){
      return '<div class="frc rc"><div class="moh"><span class="rno">' + r.id + '</span><h3>' + esc(r.t) + '</h3><span class="rkost">' + (r.kosten ? r.kosten + ' Style' : '') + '</span></div><div class="frk">' + esc(r.en) + '</div><p class="mx">' + md(r.x) + '</p>' + (r.v ? '<ul class="mol">' + r.v.map(function(v){ return '<li>' + md(v) + '</li>'; }).join("") + '</ul>' : "") +
        (r.perks ? '<div class="frl">Perks</div>' + r.perks.map(function(p){ var k = "perk/" + r.id + "/" + p[0]; return '<div class="perk' + (ST.benutzt && ST.benutzt[k] ? " done" : "") + '" onclick="SBF.used(\'' + k.replace(/'/g, "\\'") + '\')"><b>' + esc(p[0]) + '</b><span class="plk st">' + p[1] + ' Style</span><p>' + md(p[2]) + '</p></div>'; }).join("") : "") + '</div>';
    }).join("");
    return '<div class="fr"><div class="moh"><h1>Ruhm</h1>' + pgl(I.p) + '</div><p class="lead">' + md(I.x) + ' ' + esc(I.g) + '</p><div class="frg">' + [0, 2, 4].map(function(k){ return '<div class="frcol">' + [k, k + 1].map(function(j){ return cardN(j); }).join("") + '</div>'; }).join("") + '</div><div class="stim">' + I.stim.map(function(s){ return '<span>' + esc(s) + '</span>'; }).join("") + '</div></div>';
    function cardN(j){ return cards.split('<div class="frc rc">')[j + 1] ? '<div class="frc rc">' + cards.split('<div class="frc rc">')[j + 1] : ""; }
  }
  /* ---------- Signaturen ---------- */
  var KN = {L:"Linse", S:"Spule", D:"Scheibe", E:"Edelstein"};
  function ico(k){
    var p = {L:'<circle cx="12" cy="12" r="8"/><path d="M12 6l4 6-4 6-4-6z"/>', S:'<path d="M3 9c3-4 5 4 9 0s6 4 9 0M3 15c3-4 5 4 9 0s6 4 9 0"/>', D:'<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9.5" y="9.5" width="5" height="5"/>', E:'<path d="M6 4h12l4 6-10 11L2 10z"/><path d="M2 10h20M9 4l3 17M15 4l-3 17"/>'}[k];
    return '<svg class="ki" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" aria-label="' + KN[k] + '">' + p + '</svg>';
  }
  function kosten(s){
    if(!/^\d[LSDE]/.test(s)) return '<span class="kos var">' + esc(s) + '</span>';
    return '<span class="kos">' + s.split(" ").map(function(c){ return '<span title="' + KN[c.charAt(1)] + '">' + c.charAt(0) + ico(c.charAt(1)) + '</span>'; }).join("") + '</span>';
  }
  function sigSide(){
    var I = SB_SIGINTRO, L = I.lab, h = '<div class="sbx"><div class="ct">Turbo!</div><p>' + esc(I.turbo) + '</p></div>';
    h += '<div class="sbx"><div class="ct">Bauteile ' + pgl(53) + '</div><p>' + md(I.teile.x) + '</p><div class="kgr">' + I.teile.l.map(function(k){ return '<div title="' + esc(k[2]) + '">' + ico(k[0]) + '<span>' + k[1] + '</span></div>'; }).join("") + '</div></div>';
    h += '<div class="sbx"><div class="ct">Auszeit-Moment! ' + pgl(53) + '</div><p><b>' + L.t + ' (' + L.k + ' Style).</b> ' + esc(L.x) + '</p><ul>' + L.l.map(function(x){ return '<li>' + esc(x) + '</li>'; }).join("") + '</ul><table class="stb"><tr>' + [0, 1, 2].map(function(i){ return '<td><b>' + (i + 1) + '</b> ' + L.w[i] + '</td><td><b>' + (i + 4) + '</b> ' + L.w[i + 3] + '</td>'; }).join("</tr><tr>") + '</tr></table></div>';
    h += '<div class="sbx"><div class="ct">Universelle Mods</div><p>' + esc(I.uni.x) + '</p>' + I.uni.l.map(function(m){ return '<div class="smo"><b>' + m[0] + '</b>' + kosten(m[1]) + '<p>' + esc(m[2]) + '</p></div>'; }).join("") + '</div>';
    return h;
  }
  function sigUebersicht(){
    var I = SB_SIGINTRO;
    var cards = SB_SIG.map(function(s){ return '<a class="sgc" onclick="go(\'nach/teenager/sig/' + s.id + '\')"><img src="' + IMG("sig/" + s.id) + '" alt=""><h3>' + esc(s.t) + '</h3><p>' + esc(s.kurz) + '</p></a>'; }).join("");
    return '<div class="sigw"><div class="moh"><h1>Signaturen</h1>' + pgl(I.p) + '</div><div class="sg2"><div><p class="lead">' + md(I.x) + '</p><div class="sgg">' + cards + '</div></div><div class="sgs">' + sigSide() + '</div></div></div>';
  }
  function sigDetail(id){
    var S = null; SB_SIG.forEach(function(x){ if(x.id === id) S = x; }); if(!S) return sigUebersicht();
    var I = SB_SIGINTRO, k = SB_SIG.indexOf(S);
    var mods = S.mods.map(function(m, i){ var key = "sigmod/" + id + "/" + i; return '<div class="smo' + (ST.benutzt && ST.benutzt[key] ? " done" : "") + '" onclick="SBF.used(\'' + key + '\')"><b>' + esc(m[0]) + '</b>' + kosten(m[1]) + '<p>' + md(m[2]) + '</p></div>'; }).join("");
    var lt = '<table class="stb"><tr><th>W6</th><th>1–2</th><th>3–4</th><th>5–6</th></tr>' + I.lookTab.map(function(r, i){ return '<tr><td><b>' + (i + 1) + '</b></td>' + r.map(function(c){ return '<td>' + esc(c) + '</td>'; }).join("") + '</tr>'; }).join("") + '</table>';
    var L = '<div><img class="sgi" src="' + IMG("sig/" + id) + '" alt=""><p class="pt">' + md(S.x) + '</p><div class="ct">Look</div><p class="lk">' + esc(S.looks) + '</p>' + (S.frage ? '<div class="sbx"><div class="ct">' + esc(S.frage.t) + '</div>' + S.frage.x.map(function(x){ return '<p>' + esc(x) + '</p>'; }).join("") + '</div>' : "") + '</div>';
    var M = '<div><div class="sbx fk"><div class="ct">Funktion</div><p>' + esc(S.f) + '</p></div><div class="ct">Mods</div>' + mods + '</div>';
    var R = '<div class="sgs"><div class="sbx"><div class="ct">Look-Tabelle ' + pgl(52) + '</div>' + lt + '</div><div class="sbx"><div class="ct">Turbo!</div><p>' + esc(I.turbo) + '</p></div><div class="sbx"><div class="ct">Universelle Mods</div>' + I.uni.l.map(function(m){ return '<div class="smo"><b>' + m[0] + '</b>' + kosten(m[1]) + '<p>' + esc(m[2]) + '</p></div>'; }).join("") + '</div></div>';
    var prev = SB_SIG[(k + 11) % 12], next = SB_SIG[(k + 1) % 12];
    return '<div class="sigw"><div class="moh sgh"><a class="back" onclick="go(\'nach/teenager/sig\')">← Signaturen</a><h1>' + esc(S.t) + '</h1>' + pgl(S.p) + '<span class="sgn"><a onclick="go(\'nach/teenager/sig/' + prev.id + '\')">‹ ' + esc(prev.t) + '</a><a onclick="go(\'nach/teenager/sig/' + next.id + '\')">' + esc(next.t) + ' ›</a></span></div><div class="sg3">' + L + M + R + '</div></div>';
  }
  /* ---------- Ausrüstung ---------- */
  function d6t(rows, hd){ return '<table class="stb"><tr><th>W6</th>' + hd.map(function(x){ return '<th>' + x + '</th>'; }).join("") + '</tr>' + rows.map(function(r, i){ return '<tr><td><b>' + (i + 1) + '</b></td>' + (r[1] === "" ? '<td colspan="' + hd.length + '">' + esc(r[0]) + '</td>' : r.map(function(c){ return '<td>' + esc(c) + '</td>'; }).join("")) + '</tr>'; }).join("") + '</table>'; }
  function ul(a){ return '<ul>' + a.map(function(x){ return '<li>' + md(x) + '</li>'; }).join("") + '</ul>'; }
  function ps(a){ return (Array.isArray(a) ? a : [a]).map(function(x){ return '<p>' + md(x) + '</p>'; }).join(""); }
  function gcard(g, key){ var u = ST.benutzt && ST.benutzt[key]; return '<div class="smo' + (u ? " done" : "") + '" onclick="SBF.used(\'' + key + '\')"><b>' + esc(g[0]) + '</b>' + kosten(g[1]) + '<p>' + md(g[2]) + '</p></div>'; }
  function ausr(){
    var A = SB_AUSR, G = A.gear, H = A.handy, R = A.ray, B = A.board;
    var c1 = '<div><div class="ct">' + G.t + ' ' + pgl(G.p) + '</div>' + ps(G.x) + ul(G.l) + '<div class="sbx"><div class="ct">' + esc(G.dmg.t) + '</div><p>' + esc(G.dmg.x) + '</p></div><div class="ct">' + H.t + ' ' + pgl(H.p) + '</div>' + ps(H.x) + ul(H.l) + '</div>';
    var c2 = '<div><div class="ct">' + R.t + ' ' + pgl(R.p) + '</div>' + ps(R.x) + ul(R.l) + '<div class="sbx"><div class="ct">Andere Optionen</div>' + ps(R.opt) + '</div><div class="d2"><div><div class="ct">Raygun, Schritt A</div>' + d6t(R.a, ["1–3", "4–6"]) + '</div><div><div class="ct">Raygun, Schritt B</div>' + d6t(R.b, ["1–3", "4–6"]) + '</div></div></div>';
    var c3 = '<div><div class="ct">' + B.t + ' ' + pgl(B.p) + '</div>' + ps(B.x) + '<div class="ct">Hoverboards 101</div>' + ul(B.h101) + '<div class="d2"><div><div class="ct">Grip-Farbe</div>' + d6t(B.grip, ["1–3", "4–6"]) + '</div><div><div class="ct">Grip-Schnitt</div>' + d6t(B.cut, ["1–3", "4–6"]) + '</div></div><div class="ct">Deck-Grafik</div>' + d6t(B.deck, ["1–3", "4–6"]) + '<div class="sbx"><div class="ct">Andere Optionen</div>' + ps(B.opt) + '</div></div>';
    var more = A.andere.map(function(g, gi){ return '<div class="agr"><div class="ct">' + esc(g.t) + ' ' + pgl(g.p) + '</div>' + (g.x ? '<p class="lead">' + esc(g.x) + '</p>' : "") + '<div class="agc">' + g.l.map(function(m, i){ return gcard(m, "ausr/" + gi + "/" + i); }).join("") + '</div></div>'; }).join("");
    return '<div class="sigw"><div class="moh"><h1>Ausrüstung</h1></div><div class="sg3 ag3">' + c1 + c2 + c3 + '</div>' + more + '</div>';
  }
  function stk(){
    var S = SB_AUSR.sticker, sl = S.slogan;
    var tab = function(a, o){ return '<table class="stb">' + a.map(function(x, i){ return '<tr><td><b>' + (o + i) + '</b></td><td>' + md(x) + '</td></tr>'; }).join("") + '</table>'; };
    var oneto = function(a){ return a.map(function(x, i){ return '<tr><td><b>' + (i + 1) + '</b></td><td>' + esc(x) + '</td></tr>'; }).join(""); };
    var rows = function(a, base){ var out = []; a.forEach(function(x, i){ var n = base + (Math.floor(i / 6) * 10) + (i % 6) + 1; out.push('<tr><td><b>' + n + '</b></td><td>' + md(x) + '</td></tr>'); }); return out.join(""); };
    var half1 = sl.slice(0, 18), half2 = sl.slice(18);
    function rr(a, tens){ return a.map(function(x, i){ return '<tr><td><b>' + (tens + Math.floor(i / 6) * 10 + (i % 6) + 1) + '</b></td><td>' + md(x) + '</td></tr>'; }).join(""); }
    return '<div class="sigw"><div class="moh"><h1>Sticker, Pins, Aufnäher usw.</h1>' + pgl(S.p) + '</div><div class="sg2 stg"><div><p class="lead">' + esc(S.x) + '</p>' + ul(S.l) + '<div class="ct">Herkunft</div><table class="stb">' + oneto(S.origin) + '</table><div class="ct">Form</div><table class="stb">' + oneto(S.form) + '</table></div><div><div class="ct">Slogan</div><div class="d2"><table class="stb">' + rr(half1, 10) + '</table><table class="stb">' + rr(half2, 40) + '</table></div></div></div></div>';
  }
  VIEWS.nach = function(a){
    var ber = a[0] || "teenager", sub = a[1] || "mach", pid = a[2] || "grit";
    if(ber === "multiversum"){ go("welten"); return ""; }
    if(ber !== "teenager") return SBR.view(a);
    var body = sub === "ausr" ? ausr() : sub === "stk" ? stk() : sub === "sig" ? (a[2] ? sigDetail(a[2]) : sigUebersicht()) : sub === "pers" ? persona(pid) : sub === "crew" ? crew() : sub === "ruhm" ? ruhm() : mach();
    return '<div class="nachw">' + nav(ber, sub, pid) + (sub === "pers" ? '<div class="fr pfr">' + body + '</div>' : body) + '</div>';
  };
  VIEWS.nach.own = true;
  return {};
})();
