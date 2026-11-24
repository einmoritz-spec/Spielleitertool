/* SLUGBLASTER – Charakterbogen (#crew/<i>) und Crewbogen (#crew/crew): die Original-Bögen (ausfüllbare PDFs in boegen/).
   Seite als Bild (img/boegen/<id>.webp), darüber die echten Formularfelder (js/data/boegen.js). Angekreuzte Felder zeigen
   den Ausschnitt aus der „alles angekreuzt“-Fassung (img/boegen/<id>-an.webp) – sieht also genau wie im PDF aus.
   Werte im Spielstand (ST.sc[i].ob bzw. ST.crew.ob). PDF-Export füllt das Original-PDF aus (bleibt ausfüllbar).
   #crew = Status-Tabelle (crew.js) + Auswahl der Bögen. */
var SBG = (function(){
  function who(s){ return s === "c" ? SBC.crew() : SBC.sc(+s); }
  function O(s){ var o = who(s); return o ? (o.ob = o.ob || {}) : {}; }
  function key(s){ if(s === "c") return "crew"; var p = SBC.sc(+s); return p && SB_BOEGEN[p.pers] ? p.pers : null; }
  /* Namensfeld = oberstes Textfeld der linken Spalte; leer → Name aus dem Spielstand */
  function nameFeld(k){ var b = null; SB_BOEGEN[k].forEach(function(f){ if(f[1] !== "c" && f[2] < 240 && (!b || f[3] < b[3])) b = f; }); return b && b[0]; }
  function wert(s, k, f){ var o = O(s); if(f[0] in o) return o[f[0]]; if(f[0] === nameFeld(k)){ var w = who(s); return (w && w.name) || ""; } return ""; }

  /* Kästchen, die am Spielstand hängen (gleich mit der Status-Tabelle): Gruppen nach Lage auf dem Bogen */
  var CREW_RUHM = {"Check Box 295":1, "Check Box 292":2, "Check Box 293":3, "Check Box 291":4, "Check Box 294":5};
  function gruppen(k){
    var C = SB_BOEGEN[k].filter(function(f){ return f[1] === "c"; }), bx = function(a, b){ return a[2] - b[2]; }, by = function(a, b){ return a[3] - b[3] || a[2] - b[2]; };
    if(k === "crew") return {
      hype: C.filter(function(f){ return Math.abs(f[3] - 385) < 3; }).sort(bx),
      style: C.filter(function(f){ return f[2] < 90 && f[3] > 440; }).sort(by)
    };
    return {
      trouble: C.filter(function(f){ return f[3] > 520 && f[2] < 245 && f[4] < 20; }).sort(bx),
      extra: C.filter(function(f){ return f[3] > 520 && f[2] < 245 && f[4] >= 20; }),
      style: C.filter(function(f){ return f[3] > 520 && f[2] >= 245 && f[2] < 450; }).sort(bx),
      att: C.filter(function(f){ return f[3] < 200 && f[2] > 260 && f[2] < 480; }).sort(bx)
    };
  }
  /* → null (freies Feld) | {on, fn} | "weg" (Doppel-Feld nicht zeigen) */
  function link(s, k, f){
    var G = gruppen(k), i;
    if(s === "c"){
      var c = SBC.crew();
      if((i = G.hype.indexOf(f)) >= 0){ var t = i < c.hb ? "b" : "k", j = t === "b" ? i : i - c.hb, n = t === "b" ? c.hb : c.hk, sp = c[t === "b" ? "hbs" : "hks"] || 0; return {on: j >= n - sp, fn: "SBC.hype('" + t + "'," + j + ")"}; }
      if((i = G.style.indexOf(f)) >= 0) return {on: i < (c.style || 0), fn: "SBG.cst(" + i + ")"};
      if(CREW_RUHM[f[0]]){ var r = CREW_RUHM[f[0]]; return {on: (c.ruhm || 0) >= r, fn: "SBG.ruhm(" + r + ")"}; }
      return null;
    }
    var p = SBC.sc(+s), h = sbPers(p.pers).haltung;
    if(G.extra.indexOf(f) >= 0) return "weg";
    if((i = G.trouble.indexOf(f)) >= 0) return {on: i < (p.aerger || 0), fn: "SBC.trouble(" + s + "," + i + ")"};
    if((i = G.style.indexOf(f)) >= 0) return {on: i < (p.style || 0), fn: "SBC.style(" + s + "," + i + ")"};
    if(h.b !== "inf" && G.att.length === h.b + h.k && (i = G.att.indexOf(f)) >= 0){ var tt = i < h.b ? "b" : "k", jj = tt === "b" ? i : i - h.b, nn = tt === "b" ? h.b : h.k, ss = p[tt === "b" ? "bs" : "ks"] || 0; return {on: jj >= nn - ss, fn: "SBC.att(" + s + ",'" + tt + "'," + jj + ")"}; }
    return null;
  }
  function an(s, k, f){ var l = link(s, k, f); return l && l !== "weg" ? l.on : !!O(s)[f[0]]; }

  function bogen(s){
    var k = key(s); if(!k) return '<div class="fr"><p class="lead">Slugger nicht gefunden.</p></div>';
    var o = O(s);
    var h = SB_BOEGEN[k].map(function(f, j){
      var st = 'left:' + f[2] + 'px;top:' + f[3] + 'px;width:' + f[4] + 'px;height:' + f[5] + 'px';
      if(f[1] === "c"){ var l = link(s, k, f); if(l === "weg") return ""; return '<i class="ob-c' + (an(s, k, f) ? " on" : "") + '" style="' + st + ';background-position:-' + f[2] + 'px -' + f[3] + 'px" onclick="' + (l ? l.fn : "SBG.tg('" + s + "'," + j + ")") + '"></i>'; }
      return '<input class="ob-t" style="' + st + ';font-size:' + Math.min(10, f[5] * .62).toFixed(1) + 'px" data-s="' + s + '" data-j="' + j + '" value="' + esc(wert(s, k, f)) + '" autocomplete="off" spellcheck="false">';
    }).join("");
    return '<div class="ob" style="--an:url(' + IMG("boegen/" + k + "-an") + ')"><img src="' + IMG("boegen/" + k) + '" alt="" draggable="false">' + h + '</div>';
  }

  function chips(cur){
    var l = SBC.list();
    return '<div class="bgbar noprint"><a class="' + (cur === "" ? "on" : "") + '" onclick="go(\'crew\')">Status</a>' + l.map(function(p, i){ return '<a class="' + (cur === String(i) ? "on" : "") + '" style="--pc:' + sbPers(p.pers).farbe + '" onclick="go(\'crew/' + i + '\')">' + esc(p.name || "Slugger") + '</a>'; }).join("") + '<a class="' + (cur === "crew" ? "on" : "") + '" onclick="go(\'crew/crew\')">Crew</a><span class="sp"></span>' +
      (cur !== "" ? '<button class="pdfb" onclick="SBG.pdf(this)">PDF</button>' : "") + '</div>';
  }
  function cur(){ var a = (location.hash || "").slice(1).split("/"); return a[1] === "crew" ? "c" : a[1]; }
  VIEWS.crew = function(a){
    var c = a[0] || "";
    if(c === "") return chips("") + '<div class="fr">' + SBC.status() + '</div>';
    return chips(c) + '<div class="bgw"><div class="bgz">' + bogen(c === "crew" ? "c" : c) + '</div></div>';
  };
  /* Eingaben speichern (ohne neu zu zeichnen); Namensfeld hält den Namen im Spielstand aktuell */
  document.addEventListener("input", function(e){
    var t = e.target; if(!t || !t.classList || !t.classList.contains("ob-t")) return;
    var s = t.dataset.s, k = key(s), f = SB_BOEGEN[k][+t.dataset.j]; O(s)[f[0]] = t.value;
    if(f[0] === nameFeld(k) && t.value.trim()) who(s).name = t.value.trim();
    save();
  });
  /* Bogen auf Fensterbreite skalieren (Seite = 792 px breit) */
  function fit(){ var z = document.querySelector(".bgz"); if(!z) return; var w = z.parentNode.clientWidth - 16; z.style.zoom = Math.min(1.75, Math.max(.4, w / 792)); }
  window.addEventListener("resize", fit);
  var oldAfter = window.afterRender; window.afterRender = function(){ if(oldAfter) oldAfter(); fit(); };

  return {
    cst: function(i){ var c = SBC.crew(); c.style = (c.style === i + 1) ? i : i + 1; save(); render(); },
    ruhm: function(r){ var c = SBC.crew(); c.ruhm = (c.ruhm || 0) === r ? r - 1 : r; save(); render(); },
    tg: function(s, j){ var f = SB_BOEGEN[key(s)][j], o = O(s); if(o[f[0]]) delete o[f[0]]; else o[f[0]] = true; save(); render(); },
    pdf: function(btn){
      var s = cur(), k = key(s); if(!k || !window.FillPDF) return;
      var alt = btn.textContent; btn.textContent = "PDF wird erstellt …"; btn.disabled = true;
      var fertig = function(){ btn.textContent = alt; btn.disabled = false; };
      FillPDF.lib().then(function(){ return fetch("boegen/" + k + ".pdf"); }).then(function(r){ return r.arrayBuffer(); })
      .then(function(buf){ return PDFLib.PDFDocument.load(buf); }).then(function(doc){
        return doc.embedFont(PDFLib.StandardFonts.Helvetica).then(function(font){
          var form = doc.getForm();
          SB_BOEGEN[k].forEach(function(f){
            try{
              if(f[1] === "c"){ var cb = form.getCheckBox(f[0]); if(an(s, k, f)) cb.check(); else cb.uncheck(); }
              else { var v = wert(s, k, f); if(v) form.getTextField(f[0]).setText(FillPDF.sauber(font, v)); }
            }catch(e){}
          });
          try{ form.updateFieldAppearances(font); }catch(e){}
          return doc.save();
        });
      }).then(function(bytes){
        var w = who(s), nm = (w && w.name) || (k === "crew" ? "Crew" : k);
        fertig(); FillPDF.ausgeben(bytes, "Slugblaster – " + nm + ".pdf");
      }, function(e){ fertig(); alert("Das PDF konnte nicht erstellt werden: " + (e && e.message || e)); });
    }
  };
})();
