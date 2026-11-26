/* The Vault 01 – Springs Eternal: eigene Bausteine (TA_VB) */
/* TV-Spot-Storyboard (Eröffnungsseite S. 8): Panels 1–6 als Bildfelder mit Sprechertext, ab 7 zerfließt alles */
TA_VB.storyboard = function(b){
  var fest = b.x.filter(function(p){ return p.n <= 6; }), weich = b.x.filter(function(p){ return p.n > 6; });
  return '<div class="se-spot"><h3>' + tx(b.h) + '</h3><div class="se-pan">' + fest.map(function(p){
      return '<section class="p' + p.n + '"><em>' + p.n + '</em><div class="se-bild">' + p.s.map(function(z){ return '<p>' + tx(z) + '</p>'; }).join("") + '</div>' + p.vo.map(function(v){ return '<p class="vo"><b>VO:</b> ' + tx(v) + '</p>'; }).join("") + '</section>';
    }).join("") + '</div><div class="se-flut">' + weich.map(function(p){
      return '<section class="p' + p.n + '"><em>' + p.n + '</em>' + p.s.map(function(z, i){ return '<p style="--i:' + i + '">' + tx(z) + '</p>'; }).join("") + p.vo.map(function(v){ return '<p class="vo">VO: ' + tx(v) + '</p>'; }).join("") + '</section>';
    }).join("") + '</div><p class="se-ende">' + tx(b.ende) + '</p></div>';
};
/* Aufbau von FOUNT (S. 16): Empfang → Klinik / Spa → Treppen → Produktentwicklung */
TA_VB.fountplan = function(){
  var L = "#3d6f9a", P = "#9c609c", T = "#2a1b45";
  function t(x, y, z, cls){ return '<text x="' + x + '" y="' + y + '" class="' + (cls || "") + '">' + z.split("|").map(function(q, i){ return '<tspan x="' + x + '" dy="' + (i ? "1.25em" : 0) + '">' + q + '</tspan>'; }).join("") + '</text>'; }
  return '<div class="se-plan"><svg viewBox="0 0 760 330" role="img" aria-label="Aufbau von FOUNT"><g fill="none" stroke="' + L + '" stroke-width="5">' +
    '<path d="M380 0V40M380 64V118M220 118H540M150 186V226M610 186V226M186 262H574"/><circle cx="150" cy="262" r="36" fill="#fff"/><circle cx="610" cy="262" r="36" fill="#fff"/></g>' +
    '<path d="M130 278h40v-10h-10v-10h-10v-10h-10v-10h-10z" fill="' + P + '"/><path d="M630 278h-40v-10h10v-10h10v-10h10v-10h10z" fill="' + P + '"/>' +
    '<path d="M144 66h12v12h12v12h-12v12h-12v-12h-12v-12h12z" fill="' + P + '"/><path d="M610 60c0 0-11 14-11 21a11 11 0 0 0 22 0c0-7-11-21-11-21z" fill="' + P + '"/>' +
    '<g font-family="Spartan,sans-serif" font-weight="800" fill="' + T + '" text-anchor="middle" font-size="24" letter-spacing="-.5">' + t(380, 60, "Empfang") + t(150, 128, "Die Klinik") + t(610, 128, "Das Spa") + t(380, 308, "Produktentwicklung") + '</g>' +
    '<g font-family="Fig,sans-serif" fill="' + T + '" text-anchor="middle" font-size="15.5">' + t(150, 152, "mit Räumen für Beratungen|und Behandlungen.") + t(610, 152, "mit Massageräumen, Mineralbecken,|einer Sauna und mehr.") +
    t(380, 196, "Am Ende jedes Bereichs führt eine|Treppe nach oben zu den Büros der|Geschäftsführung und nach unten zur") + '</g></svg></div>';
};
