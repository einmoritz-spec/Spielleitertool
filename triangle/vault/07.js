/* The Vault 07 – hollow-suit: eigene Bausteine (TA_VB) */
(function(){
  /* Drehbuchseite (Fundstück S. 112): Szenenzeile, Regieanweisungen, Sprecher mittig, Dialog eingerückt; Titel hochkant */
  TA_VB["drehbuch"] = function(b){
    var t = String(b.h || "").split(" – ");
    var inh = (b.x || []).map(function(z, i){
      var m = /^\*\*([^*]+?):\*\*\s*(.*)$/.exec(z);
      if(m) return '<div class="hs-rede"><b>' + esc(m[1]) + '</b><p>' + tx(m[2]) + '</p></div>';
      if(i === 0 && /^[A-ZÄÖÜ .,–-]+$/.test(z.replace(/[^A-Za-zÄÖÜäöüß .,–-]/g, ""))) return '<p class="hs-slug">' + tx(z) + '</p>';
      return '<p>' + tx(z) + '</p>';
    }).join("");
    return '<div class="hs-seite"><div class="hs-text">' + inh + '</div><div class="hs-titel"><b>' + esc(t[0] || "") + '</b>' + (t[1] ? '<span>' + esc(t[1]) + '</span>' : '') + '</div></div>';
  };

  /* Wegskizze der Studio-Tour (S. 120): Stationen anklickbar, aktuelle Station hervorgehoben */
  var ST7 = [
    ["hero", "Hero Lawn", /Hero Lawn/, 70, 118, 1],
    ["post", "Post-Building", /Post-Building/, 250, 46, 0],
    ["sound", "Soundstage", /Soundstage/, 440, 96, 1],
    ["admin", "Administration", /^Administration/, 330, 172, 0]
  ];
  function stern(x, y, r){ var p = []; for(var k = 0; k < 10; k++){ var a = Math.PI / 5 * k - Math.PI / 2, rr = k % 2 ? r * .45 : r; p.push((x + rr * Math.cos(a)).toFixed(1) + "," + (y + rr * Math.sin(a)).toFixed(1)); } return p.join(" "); }
  TA_VB["tour"] = function(b, ctx){
    var A = (TA_VAULT[ctx.id].reiter.erm || []);
    var g = ST7.map(function(s){
      var j = A.findIndex(function(a){ return s[2].test(a.t); }), on = s[0] === b.an;
      var form = s[5] ? '<polygon class="st" points="' + stern(s[3], s[4], on ? 17 : 13) + '"/>' : '<circle class="st" cx="' + s[3] + '" cy="' + s[4] + '" r="' + (on ? 10 : 7.5) + '"/>';
      var ly = s[0] === "post" ? s[4] - 24 : s[0] === "admin" ? s[4] + 9 : s[4] + 42, lx = s[0] === "admin" ? s[3] + 20 : s[0] === "sound" ? s[3] - 10 : s[3];
      return '<g class="ts ' + s[0] + (on ? " on" : "") + '"' + (j >= 0 ? ' onclick="go(\'e/' + ctx.id + '/erm/' + j + '\')"' : '') + '><title>' + s[1] + '</title>' + form +
        '<text x="' + lx + '" y="' + ly + '" text-anchor="' + (s[0] === "admin" ? "start" : "middle") + '">' + s[1] + '</text></g>';
    }).join("");
    return '<figure class="hs-tour"><svg viewBox="0 0 520 210" role="img" aria-label="Wegskizze der Studio-Tour">' +
      '<path class="weg" d="M70 118 C130 70 190 50 250 46 S380 70 440 96"/>' +
      '<path class="zaun" d="M250 46 C270 110 290 150 330 172"/>' + g + '</svg></figure>';
  };

  /* Besetzungsliste: Figuren der Tourgruppe als Zeilen eines Drehplans */
  TA_VB["besetzung"] = function(b){
    return '<div class="hs-cast">' + b.x.map(function(f){ return '<section><h3>' + tx(f.h) + '</h3><div>' + taB(f.b || []) + '</div></section>'; }).join("") + '</div>';
  };

  /* Rundenleiste des Bake-Off: Runde 1–3 und Grünes Licht, Klick setzt den Stand */
  TA_VB["runden"] = function(b, ctx){
    var n = vst(ctx.id).x.runde || 0;
    return '<div class="hs-runden">' + b.x.map(function(r, i){
      return '<button class="' + (i < n ? "ok" : "") + (i === n ? " jetzt" : "") + '" onclick="vX(\'runde\',' + (i + 1) + ')"><em>' + (i < b.x.length - 1 ? (i + 1) : "★") + '</em><span>' + tx(r) + '</span></button>';
    }).join('<i></i>') + '</div>';
  };

  /* „Die Daten zeigen …“: Forderungen der Anzüge als Karten zum Abhaken */
  TA_VB["daten"] = function(b, ctx){
    var s = vst(ctx.id);
    return '<div class="hs-daten">' + b.x.map(function(x){ var key = ctx.r + ctx.i + "-" + (VK++); return '<p class="vh' + (s.h[key] ? " ok" : "") + '" data-h="' + key + '" onclick="vHak(\'' + key + '\')">' + tx(x) + '</p>'; }).join("") + '</div>';
  };
})();
