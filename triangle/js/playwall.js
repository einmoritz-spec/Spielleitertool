/* TRIANGLE AGENCY – Playwall: ein Dokument anzeigen. Texte: js/data/playwall-<buchstabe>.js (TA_PWT),
   Gestaltung je Dokument: Eigenschaften art, bild am Dokument selbst, Bausteine: js/lesen.js, Aussehen: playwall.css
   Arten (art): leer = Akte auf Weiß · "rang" = Beförderung (rotes Kopfband) · "dunkel" = Sonderseite auf Schwarz (bild als Grund)
                "blau" / "rot" = vollflächige Farbseite · "gelb" = Stimme der Playwall · "bild" = nur Bild */
"use strict";
function pwDok(code, p){
  var D = (window.TA_PWT || {})[code];
  if(!p && !D) return '<div class="dok leerdok"></div>';
  if(!D) return '<div class="dok"><div class="in"><span class="dpg">' + pgl(p) + '</span><div class="leer" onclick="openBook(\'ta_core\',' + p + ')"><img src="' + Z("symbol-akte-schloss") + '" alt=""></div></div></div>';
  var art = D.art || "", b = D.b || [];
  /* Titel nicht doppelt: trägt die einzige Fähigkeit den Dokumenttitel, entfällt ihre Überschrift */
  b = b.map(function(x){ return x && x.t === "faehig" && x.h === D.t ? Object.assign({}, x, {h:""}) : x; });
  var n = 0;
  (function nummer(L){ (L || []).forEach(function(x){ if(!x || typeof x !== "object") return; if(x.t === "spur"){ x.id = x.id || code + "." + (n++); x.plain = 1; } ["b","x"].forEach(function(k){ if(Array.isArray(x[k])) x[k].forEach(function(y){ if(Array.isArray(y)) nummer(y); else nummer([y]); }); }); }); })(b);
  var kopf = '<header class="pwk' + (D.t ? '' : ' ohne') + '"><h1>' + (D.t ? tx(D.t) : esc(code)) + '</h1>' + pgl(D.s) + '</header>';
  var grund = D.bild ? '<img class="pwgrund" src="' + IMG("regeln/full/" + D.bild) + '" alt="">' : '';
  return '<div class="dok pw-' + (art || "akte") + '">' + grund + '<div class="in">' + kopf + '<div class="pwb">' + taB(b) + '</div></div></div>';
}

/* Kästchen-Leisten (Bekannt werden): zwei anklickbare Felder je Zeile, Stand wird gemerkt; Code springt zum Dokument */
window.pwoLeiste = function(id, zeilen){
  var S = (window.ST && (ST.pwo = ST.pwo || {})) || {};
  return '<div class="pwo-leisten">' + zeilen.map(function(z, i){
    var k = id + "." + i;
    return '<div class="pwo-zeile"><p>' + z[0].replace(/\{3\}/g, '<b class="drei">3</b>') + '</p><i class="pwo-pf"></i><span class="spur pwo-sp">' +
      [0, 1].map(function(n){ var on = S[k + "." + n]; return '<u data-k="' + k + "." + n + '" class="' + (on ? "an" : "") + '" onclick="pwoFeld(this,\'' + k + "." + n + '\')"></u>'; }).join("") +
      '</span><a class="pwo-code" onclick="pwPop(\'' + z[1] + '\')">' + z[1] + '</a></div>';
  }).join("") + '<img alt="" style="display:none" src="data:image/gif;base64,R0lGODlhAQABAAAAACw=" onload="pwoSync(this.parentNode)"></div>';
};
window.pwoSync = function(box){
  var S = (window.ST && ST.pwo) || {};
  Array.prototype.forEach.call(box.querySelectorAll("u[data-k]"), function(u){ u.classList.toggle("an", !!S[u.getAttribute("data-k")]); });
};
window.pwoFeld = function(el, k){
  if(!window.ST) return; ST.pwo = ST.pwo || {}; ST.pwo[k] = !ST.pwo[k]; el.classList.toggle("an", !!ST.pwo[k]);
  if(typeof save === "function") save();
};
window.pwoKn = function(L){
  return '<span class="kn pwo-kn">' + L.map(function(x){ return '<span>' + tx(x) + '</span>'; }).join("") + '</span>';
};


/* Kästchen-Leisten (spur): anklickbar, Stand je Dokument im Spielstand */
function pwSpur(u){ ST.pwSpur = ST.pwSpur || {}; var k = u.getAttribute("data-k"); ST.pwSpur[k] = !ST.pwSpur[k]; u.classList.toggle("an", !!ST.pwSpur[k]); save(); }
