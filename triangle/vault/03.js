/* The Vault 03 – ROM Dump: eigene Bausteine (TA_VB) */
/* Dialog aus Voyagers of Heroia (S. 40): 16-Bit-Dialogfenster, König links, Sentinel rechts, Pixelstrand mit Meer */
var rdAlt = TA_VB.handout;
TA_VB.handout = function(b, ctx){
  if(ctx.id !== "rom-dump" || (b.art !== "chat" && b.art !== "schild")) return rdAlt ? rdAlt(b, ctx) : VB.handout(b);
  if(b.art === "schild") return '<div class="rd-menue"><p>' + b.x.map(tx).join("</p><p>") + '</p><i>▶</i></div>';
  var zeilen = b.x.map(function(z){
    var koenig = /ORMODIA/.test(z.von);
    return '<div class="rd-zeile ' + (koenig ? "l" : "r") + '"><img src="' + vimg(koenig ? "03-rom-dump-ormodia" : "03-rom-dump-sentinel") + '" alt=""><div class="rd-box"><b>' + esc(z.von) + '</b><p>' + tx(z.x) + '</p></div></div>';
  }).join("");
  return '<div class="rd-strand"><div class="rd-dialog">' + zeilen + '</div><div class="rd-meer"><span>von Christian Sorrell</span></div></div>';
};
/* Die Voyagers (S. 55): Pixel-Porträts mit Lebensbalken; Klick auf ein Kästchen = Stabilität verloren */
TA_VB.voyagers = function(b, ctx){
  var s = vst(ctx.id);
  return '<div class="rd-voy">' + b.x.map(function(v, i){
    var key = "voy" + i, weg = s.x[key] || 0, max = v[3];
    var hp = ""; for(var k = 0; k < max; k++) hp += '<u class="' + (k >= max - weg ? "weg" : "") + '" onclick="vX(\'' + key + '\',' + (max - k) + ')"></u>';
    return '<section><h3>' + esc(v[0]) + '</h3><img src="' + vimg(v[1]) + '" alt="" onclick="zoom(this.src)"><div class="rd-hp">' + hp + '</div><p>' + v[2] + ' Bedrohung<br>' + (max - weg) + '/' + max + ' Stabilität</p></section>';
  }).join("") + '</div>';
};
