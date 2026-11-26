/* The Vault 09 – Planet Providence: eigene Bausteine (TA_VB) */
/* Begrüßungsbrief von Sailor Knots (S. 144) auf Weltraum-Verlauf mit Achterbahn-Schriftzug, Wellen und Raketenschiff */
var ppAlt = TA_VB.handout;
TA_VB.handout = function(b, ctx){
  if(ctx.id !== "planet-providence" || (b.art !== "brief" && b.art !== "schild")) return ppAlt ? ppAlt(b, ctx) : VB.handout(b);
  if(b.art === "schild") return '<div class="pp-preis"><h3>' + tx(b.h) + '</h3>' + b.x.map(function(z){ var m = /^(.*?):\s*([+]?\d+\s*\$)$/.exec(z); return m ? '<p><span>' + tx(m[1]) + '</span><b>' + esc(m[2]) + '</b></p>' : '<p class="pp-klein">' + tx(z) + '</p>'; }).join("") + '</div>';
  var x = b.x, gruss = x[x.length - 2], name = x[x.length - 1].replace(/\*/g, "");
  var sterne = ""; for(var i = 0; i < 26; i++) sterne += '<i style="left:' + ((i * 37) % 97) + '%;top:' + ((i * 53) % 46) + '%;--d:' + (i % 5) + '"></i>';
  return '<div class="pp-all"><div class="pp-sterne">' + sterne + '</div>' +
    '<div class="pp-titel"><img class="pp-bahn" src="' + vimg("09-planet-providence-achterbahn") + '" alt=""><img class="pp-schrift" src="' + vimg("09-planet-providence-schriftzug") + '" alt="Planet Providence"><span>von Cassi Mothwin</span></div>' +
    '<div class="pp-karte"><h3>' + tx(b.h) + '</h3>' + x.slice(0, -2).map(function(p){ return '<p>' + tx(p) + '</p>'; }).join("") + '<p>' + tx(gruss) + '</p><p class="pp-sig">' + esc(name) + '</p>' +
    '<div class="pp-logo"><img src="' + vimg("09-planet-providence-stern") + '" alt=""><b>PP</b><img src="' + vimg("09-planet-providence-stern") + '" alt=""></div></div>' +
    '<svg class="pp-wellen" viewBox="0 0 1200 110" preserveAspectRatio="none"><path d="M0 60 C120 20 220 20 300 60 S480 100 560 60 700 10 800 50 960 100 1060 50 1160 20 1200 40V110H0z" fill="#7ac8de"/><path d="M0 60 C120 20 220 20 300 60 S480 100 560 60 700 10 800 50 960 100 1060 50 1160 20 1200 40" fill="none" stroke="#c9eef7" stroke-width="7"/></svg>' +
    '<svg class="pp-schiff" viewBox="0 0 80 70"><path d="M38 6v34M38 10l16 6-16 6M28 18v22M28 20l-10 4 10 4" stroke="#ffd21c" stroke-width="5" fill="#ffd21c"/><path d="M8 40h64l-10 18H18z" fill="#ffd21c"/><path d="M8 48c-6 0-10 4-4 8 3-2 6-4 4-8z" fill="#ff6a2a"/></svg></div>';
};
/* Parkkarte (S. 152): Bereiche anklickbar, springen zum Abschnitt */
TA_VB.parkplan = function(b, ctx){
  var A = TA_VAULT[ctx.id].reiter.erm || [];
  function zu(re){ var j = A.findIndex(function(a){ return re.test(a.t); }); return j >= 0 ? ' onclick="go(\'e/' + ctx.id + '/erm/' + j + '\')"' : ''; }
  var B = [
    [/Pulsar/, "Pulsar Port", 400, 250, 70, "#e83f8f", "Eingang · Truce Tavern"],
    [/Skipper/, "Skipper Station", 160, 250, 70, "#3f7fe0", "Komet"],
    [/Titan/, "Titan’s Cove", 400, 85, 62, "#d8322a", "Dinokopf · See"],
    [/Sol/, "Sol System", 640, 250, 66, "#e8b21c", "Sonne"],
    [/geheime/, "Geheimer Ort", 175, 75, 56, "#7d5ad6", "Kuppel mit rotem X"],
    [/^$/, "Unterkünfte", 630, 80, 56, "#5c6577", "Häuschen"]
  ];
  var tun = '<path d="M400 250L160 250M400 250L400 85M400 250L640 250M160 250L175 75M175 75L400 85M400 85L630 80M630 80L640 250" stroke="#7ac8de" stroke-width="3" stroke-dasharray="8 7" fill="none"/>';
  var g = B.map(function(q){ return '<g class="pp-ber"' + zu(q[0]) + '><circle cx="' + q[2] + '" cy="' + q[3] + '" r="' + q[4] + '" fill="' + q[5] + '"/><text x="' + q[2] + '" y="' + (q[3] - 2) + '" class="n">' + q[1] + '</text><text x="' + q[2] + '" y="' + (q[3] + 17) + '" class="u">' + q[6] + '</text></g>'; }).join("");
  return '<figure class="pp-plan"><svg viewBox="0 0 800 340" role="img" aria-label="Parkkarte"><rect width="800" height="340" rx="22" fill="#262363"/>' + tun + g + '<path d="M400 320v-10" stroke="#fff" stroke-width="3"/><text x="400" y="334" class="u">▼ Eingangsportal</text><text x="790" y="330" class="u" style="text-anchor:end">- - - Tunnel</text></svg></figure>';
};
