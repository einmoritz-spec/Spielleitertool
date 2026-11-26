/* The Vault 05 – Bower Street: eigene Bausteine (TA_VB) */
/* 911-Abschrift (S. 76): nummerierte Zeilen, ab der Stille läuft Filmstreifen über das Papier und das Gedächtnis reißt ab */
var bsAlt = TA_VB.handout;
TA_VB.handout = function(b, ctx){
  if(b.art !== "abschrift" || ctx.id !== "bower-street") return bsAlt ? bsAlt(b, ctx) : VB.handout(b);
  var x = b.x || [], stille = -1, i;
  for(i = 0; i < x.length; i++){ if(/zwanzig Sekunden Stille/.test(x[i])){ stille = i; break; } }
  var n = 0;
  var zeilen = x.map(function(z, k){
    if(k === 0) return "";
    var klasse = /^\(/.test(z) ? "bs-reg" : "", film = stille >= 0 && k >= stille ? " bs-film" : "";
    var m = /^(LEITSTELLE|J\.H\.):\s*(.*)$/.exec(z), t = m ? '<b>' + esc(m[1]) + ':</b> ' + tx(m[2]) : tx(z);
    if(/^\[geschwärzt\]$/.test(m ? m[2] : "")) t = '<b>' + esc(m[1]) + ':</b> <span class="bs-schwarz">XXXXXXXXXXXX</span>';
    n++;
    return '<li class="' + klasse + film + '" style="--n:' + n + '"><span>' + t + '</span></li>';
  }).join("");
  return '<div class="vho ho-abschrift bs-abschrift"><p class="bs-kopf">' + tx(x[0]) + '</p><ol class="bs-zeilen">' + zeilen + '</ol>' +
    '<img class="bs-strip s1" src="' + vimg("05-bower-street-filmstreifen") + '" alt=""><img class="bs-strip s2" src="' + vimg("05-bower-street-filmstreifen") + '" alt="">' +
    '<img class="bs-titel" src="' + vimg("05-bower-street-schriftzug") + '" alt=""><p class="bs-von">von Kay W.</p></div>';
};
