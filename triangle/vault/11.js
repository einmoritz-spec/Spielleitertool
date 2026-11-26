/* The Vault 11 – Blame it on the Trains: eigene Bausteine (TA_VB) */
/* Firmenchat (S. 180): Kanalpfad oben, Cynthia rechts grün, Kollege links blau, Zeitstempel als Trennlinien, Eingabefeld unten */
var trAlt = TA_VB.handout;
TA_VB.handout = function(b, ctx){
  if(ctx.id !== "trains" || b.art !== "chat") return trAlt ? trAlt(b, ctx) : VB.handout(b);
  var x = b.x, letzt = x[x.length - 1];
  var zeilen = x.slice(0, -1).map(function(z){
    if(!z.von) return '<div class="tr-zeit"><span>' + esc(z.x) + '</span></div>';
    return '<p class="' + (z.von === "Cynthia" ? "c" : "k") + '">' + tx(z.x) + '</p>';
  }).join("");
  return '<div class="tr-app"><div class="tr-kopf"><i class="tr-logo"></i><span>' + esc(b.h) + '</span><i class="tr-glocke">🔔</i><i class="tr-menu"></i></div>' +
    '<div class="tr-rumpf"><div class="tr-verlauf">' + zeilen + '<div class="tr-eingabe"><div><b>B</b><i>I</i><u>🔗</u><s>☰</s></div><p>' + esc(letzt.x) + '</p></div></div>' +
    '<div class="tr-seite"><span>blame it on the trains – von Viditya Voleti</span></div></div></div>';
};
/* Netzplan der Station (S. 187): Ebenen anklicken = Agenten dort markieren und zum Abschnitt springen */
TA_VB.stationsplan = function(b, ctx){
  var A = TA_VAULT[ctx.id].reiter.erm || [], hier = vst(ctx.id).x.ebene || 0;
  function idx(re){ return A.findIndex(function(a){ return re.test(a.t); }); }
  /* [Ebene, x, y, Unterzeile, Abschnitt, Beschriftung dx, dy] */
  var S = [[1, 395, 155, "Buford Circle", /Buford/, -20, -30], [2, 395, 285, "Jahnavi Reddys Sub-Realität", /Ebene 2/, 22, -8], [3, 655, 440, "Sub-Realität Agent 1", /Ebene 3/, 22, -8], [4, 655, 550, "Jaivon Davis’ Sub-Realität", /Ebene 4/, 22, -8],
    [5, 530, 550, "Sub-Realität Agent 2", /Ebene 3/, -10, -26], [6, 325, 665, "Domäne der Anomalie", /Ebene 6/, -6, -24], [7, 250, 665, "Agent 3 und weitere", /Ebene 3/, -60, -50]];
  var st = S.map(function(q){
    var j = idx(q[4]), on = hier === q[0];
    return '<g class="tr-st' + (on ? " on" : "") + '" onclick="trEbene(' + q[0] + ',' + j + ')"><title>Agenten auf Ebene ' + q[0] + '</title><circle cx="' + q[1] + '" cy="' + q[2] + '" r="' + (on ? 17 : 12) + '"/>' + (q[0] === 1 ? '<circle cx="' + q[1] + '" cy="' + q[2] + '" r="4" class="kern"/>' : '') +
      '<g transform="translate(' + (q[1] + q[5]) + ' ' + (q[2] + q[6]) + ') rotate(-28)"><text class="e">EBENE ' + q[0] + (q[0] === 7 ? "+" : "") + '</text><text class="u" y="17">' + q[3] + '</text></g></g>';
  }).join("");
  return '<figure class="tr-plan"><figcaption>Netzplan der Station</figcaption><svg viewBox="0 0 860 740" role="img" aria-label="Netzplan der Station">' +
    '<g fill="none" stroke-linecap="round" stroke-width="11"><path d="M0 40L215 155H535L860 360" stroke="#a5371d"/><path d="M0 172H395L560 70" stroke="#1d4f9e"/><path d="M0 186H405L450 160 478 110H860" stroke="#fdf1a0"/><circle cx="535" cy="155" r="12" fill="#fff" stroke="#111" stroke-width="4.5"/><circle cx="535" cy="110" r="12" fill="#fff" stroke="#111" stroke-width="4.5"/><circle cx="535" cy="110" r="4" fill="#111"/>' +
    '<path d="M225 200H395V285L655 440V550H530L325 665H250" stroke="#4ea83a"/><path d="M210 200H70Q45 200 45 228V640" stroke="#3a2a6b"/><path d="M45 640Q45 680 80 690" stroke="#3a2a6b" stroke-dasharray="2 14"/></g>' +
    '<rect x="203" y="140" width="12" height="66" rx="6" fill="#fff" stroke="#000" stroke-width="3"/><rect x="220" y="140" width="12" height="66" rx="6" fill="#fff" stroke="#000" stroke-width="3"/>' +
    st + '<g class="tr-leg" transform="translate(570 620)">' + [["Central Line", "#a5371d"], ["North Circle Line", "#1d4f9e"], ["Gruntley Line", "#e9d870"], ["Sub-Realitäts-Linie", "#4ea83a"], ["Express nach Ebene 1", "#3a2a6b"]].map(function(l, i){
      return '<text x="170" y="' + (i * 21 + 12) + '">' + l[0] + '</text><rect x="180" y="' + (i * 21) + '" width="46" height="11" fill="' + l[1] + '"/>'; }).join("") + '</g></svg></figure>';
};
function trEbene(n, j){ var s = vst(VCTX.id); s.x.ebene = s.x.ebene === n ? 0 : n; save(); if(j >= 0 && s.x.ebene) go("e/" + VCTX.id + "/erm/" + j); else render(); }
/* Lebensbalken des Rattenkönigs (S. 194): LP anklicken */
TA_VB.lebensbalken = function(b, ctx){
  var key = "lpRk", weg = vst(ctx.id).x[key] || 0, lp = "";
  for(var k = 0; k < b.lp; k++) lp += '<u class="' + (k >= b.lp - weg ? "weg" : "") + '" onclick="vX(\'' + key + '\',' + (b.lp - k) + ')"></u>';
  return '<div class="tr-lp"><b>' + esc(b.n) + '</b><span>LVL ' + b.lvl + '</span><div>' + lp + '</div><em>' + (b.lp - weg) + '/' + b.lp + ' LP</em></div>';
};
