/* The Vault 10 – gruntley-manor: eigene Bausteine (TA_VB) */
(function(){
  /* Einladung (Fundstück): rosa Karte im Umschlag auf einer Blutlache */
  TA_VB["gm-einladung"] = function(b){
    var x = b.x || [], kopf = x[0] || "", sig = x[x.length - 1] || "", mitte = x.slice(1, -1);
    return '<div class="gm-tisch"><svg class="gm-blut" viewBox="0 0 600 520" aria-hidden="true"><path d="M120 90c60-60 170-40 230-70 70-34 150 0 190 60 40 62 18 120 40 180 22 60-14 120-70 140-40 14-50 60-30 110 12 30-30 40-44 6-14-34-26-70-70-60-54 12-60 70-120 64-44-4-30-50-70-62-40-12-90 30-130-6-34-30 10-70-10-110C14 280 0 220 30 180c24-34 60-56 90-90z"/></svg>' +
      '<div class="gm-umschlag"><i></i></div>' +
      '<div class="gm-karte"><b class="gm-siegel">J.E.</b><h3>' + tx(kopf.replace(/\*\*/g, "")) + '</h3>' + mitte.map(function(p){ return '<p>' + tx(p) + '</p>'; }).join("") + '<p class="gm-sig">' + tx(sig.replace(/\*/g, "")) + '</p></div></div>';
  };

  /* Rollen-Paare des kalten Einstiegs: drei rosa Karten, Klick springt zur Figur */
  TA_VB["gm-paare"] = function(b){
    var orn = ["❈", "⁓", "❉"];
    return '<div class="gm-paare">' + b.x.map(function(p, i){
      return '<section>' + p.map(function(n){ return '<a onclick="gmZu(\'' + esc(n) + '\')">' + tx(n) + '</a>'; }).join('<i>' + orn[i % 3] + '</i>') + '</section>';
    }).join("") + '</div>';
  };
  window.gmZu = function(n){ var el = document.querySelector('.gm-verd [data-n="' + n + '"]'); if(el){ el.scrollIntoView({behavior:"smooth", block:"start"}); el.classList.remove("blink"); void el.offsetWidth; el.classList.add("blink"); } };

  /* Verdächtigen-Karten: Beschreibung, typische Sätze, Ziele (Mordmotiv hervorgehoben) */
  TA_VB["gm-verd"] = function(b){
    function teil(L){
      var out = {text:[], saetze:[], ziele:[]}, cur = "text";
      L.forEach(function(q){
        if(q && q.t === "h3"){ cur = /Ziel/.test(q.x) ? "ziele" : "saetze"; return; }
        if(q && q.t === "liste") out[cur] = out[cur].concat(q.x); else out[cur].push(q);
      });
      return out;
    }
    return '<div class="gm-verd">' + b.x.map(function(k){
      var t = teil(k.b || []);
      return '<section data-n="' + esc(k.h) + '"><header><h3>' + tx(k.h) + '</h3>' + (k.s ? '<small>' + tx(k.s) + '</small>' : '') + '</header>' +
        t.text.map(function(p){ return '<p class="gm-bes">' + tx(p) + '</p>'; }).join("") +
        '<div class="gm-zwei"><div><h4>Typische Sätze</h4>' + t.saetze.map(function(s){ return '<q>' + tx(s.replace(/^„|“$/g, "")) + '</q>'; }).join("") + '</div>' +
        '<div><h4>Ziele</h4><ul>' + t.ziele.map(function(z){ return '<li' + (/ermorden/.test(z) && /Edbert/.test(z) ? ' class="mord"' : '') + '>' + tx(z) + '</li>'; }).join("") + '</ul></div></div></section>';
    }).join("") + '</div>';
  };

  /* Sonderregeln: „Seht, was ich gefunden habe“ (2 Chaos, anklickbar) und „Niemals Schuld eingestehen“ (+30 je Agent) */
  TA_VB["gm-sonder"] = function(b){
    return '<div class="gm-sonder">' + (b.h ? '<h4>' + tx(b.h) + '</h4>' : '') + (b.vor ? '<p class="gm-dom">' + tx(b.vor) + '</p>' : '') + b.x.map(function(r){
      var k = parseInt(r.k, 10);
      return '<a class="gm-sr' + (r.plus ? ' plus' : '') + '" onclick="' + (r.plus ? 'vZahl(\'c\',' + r.plus + ')' : 'vChaos(' + k + ')') + '" title="' + (r.plus ? '+' + r.plus + ' Chaos' : k + ' Chaos ausgeben') + '"><b>' + (r.plus ? '+' + r.plus : k) + '<img src="' + Z("symbol-chaos-wirbel") + '" alt=""></b><span><em>' + tx(r.n) + '</em>' + (r.s ? '<small>' + tx(r.s) + '</small>' : '') + tx(r.x) + '</span></a>';
    }).join("") + (b.nach ? '<p class="gm-nach">' + tx(b.nach) + '</p>' : '') + '</div>';
  };
})();
