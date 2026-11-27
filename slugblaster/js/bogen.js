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

  /* ---------- Werkzeuge: Symbolleiste, Persönlichkeit-Auswahl mit Info, Zufall, Teilen, Datei ---------- */
  var IC = {
    zufall: '<rect x="3.5" y="3.5" width="17" height="17" rx="3"/><circle cx="8.5" cy="8.5" r=".9" fill="currentColor"/><circle cx="15.5" cy="8.5" r=".9" fill="currentColor"/><circle cx="12" cy="12" r=".9" fill="currentColor"/><circle cx="8.5" cy="15.5" r=".9" fill="currentColor"/><circle cx="15.5" cy="15.5" r=".9" fill="currentColor"/>',
    pers: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-3.9 3.1-6 7-6s7 2.1 7 6"/>', leeren: '<path d="M20 12a8 8 0 1 1-2.6-5.9"/><path d="M20 4v5h-5"/>',
    teilen: '<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6"/>',
    sichern: '<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>', laden: '<path d="M12 16V5M7 9l5-5 5 5M5 20h14"/>', pdf: '<path d="M5 4h11l3 3v13H5z"/><path d="M8 4v5h7V4M8 20v-6h8v6"/>'
  };
  function sym(p){ return '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + p + '</svg>'; }
  function werkzeug(c){
    var ib = function(ic, tip, on, cls){ return '<button class="bwi' + (cls || "") + '" data-tip="' + tip + '" aria-label="' + tip + '" onclick="' + on + '">' + sym(IC[ic]) + '</button>'; };
    var sl = c !== "c";
    return '<span class="bw-tools">' + (sl ? ib("zufall", "Zufälligen Slugger erstellen", "SBG.zufall()") + ib("pers", "Persönlichkeit wählen", "SBG.persWahl(this,event)") : "") + ib("leeren", "Bogen leeren", "SBG.leeren()") +
      (sl ? ib("teilen", "Link teilen", "SBG.teilen()") + ib("sichern", "Als Datei sichern", "SBG.sichern()") + '<label class="bwi" data-tip="Datei laden" aria-label="Datei laden">' + sym(IC.laden) + '<input type="file" accept=".json,application/json" hidden onchange="SBG.laden(this)"></label>' : "") +
      ib("pdf", "Als ausfüllbares PDF speichern", "SBG.pdf(this)", " pdfb") + '</span>';
  }
  var NAMEN = ["Rani", "Doug", "Mika", "Juno", "Kit", "Tavi", "Bex", "Odie", "Lenny", "Sky", "Pax", "Ziggy", "Nova", "Remy", "Wren", "Dash"];
  function toast(t){ var d = document.createElement("div"); d.className = "bw-toast"; d.textContent = t; document.body.appendChild(d); setTimeout(function(){ d.remove(); }, 2600); }
  function popWeg(){ document.querySelectorAll(".bw-pop,.bw-info").forEach(function(e){ e.remove(); }); }
  function b64u(t){ var u = new TextEncoder().encode(t), b = ""; u.forEach(function(c){ b += String.fromCharCode(c); }); return btoa(b).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); }
  function ub64(t){ t = t.replace(/-/g, "+").replace(/_/g, "/"); while(t.length % 4) t += "="; var b = atob(t), u = new Uint8Array(b.length); for(var i = 0; i < b.length; i++) u[i] = b.charCodeAt(i); return new TextDecoder().decode(u); }
  function sauber(p){ var o = JSON.parse(JSON.stringify(p)); delete o.id; return o; }
  function leer(p){ return !Object.keys(p.ob || {}).length; }
  function neuSlugger(o){
    var L = SBC.list(), n = Object.assign({stuerze: [], verh: [], verm: [], aerger: 0, style: 0, bs: 0, ks: 0, mom: {eig: [], bogen: 0, familie: 0, angst: 0, dt: {}}}, o);
    n.id = "s" + Date.now().toString(36) + Math.floor(Math.random() * 99);
    var d = L.filter(function(x){ return JSON.stringify(sauber(x)) === JSON.stringify(sauber(n)); })[0]; if(d) return L.indexOf(d);
    L.push(n); save(); return L.length - 1;
  }
  function chips(cur){
    var l = SBC.list();
    return '<div class="bgbar noprint"><a class="' + (cur === "" ? "on" : "") + '" onclick="go(\'crew\')">Status</a>' + l.map(function(p, i){ return '<a class="' + (cur === String(i) ? "on" : "") + '" style="--pc:' + sbPers(p.pers).farbe + '" onclick="go(\'crew/' + i + '\')">' + esc(p.name || "Slugger") + '</a>'; }).join("") + '<a class="' + (cur === "crew" ? "on" : "") + '" onclick="go(\'crew/crew\')">Crew</a><span class="sp"></span>' +
      (cur !== "" ? werkzeug(cur) : "") + '</div>';
  }
  function cur(){ var a = (location.hash || "").slice(1).split("/"); return a[1] === "crew" ? "c" : a[1]; }
  VIEWS.crew = function(a){
    var c = a[0] || "";
    if(c.indexOf("teilen~") === 0){
      try{ var o = JSON.parse(ub64(c.slice(7))); if(!o || !o.pers || !SB_BOEGEN[o.pers]) throw 0; var ni = neuSlugger(o); toast("Slugger übernommen"); setTimeout(function(){ go("crew/" + ni); }, 0); return chips("") + '<div class="fr"></div>'; }
      catch(e){ setTimeout(function(){ go("crew"); }, 0); return chips("") + '<div class="fr"><p class="lead">Link ungültig.</p></div>'; }
    }
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
  document.addEventListener("click", function(e){ if(!e.target.closest(".bw-pop,.bw-info")) popWeg(); });
  document.addEventListener("keydown", function(e){ if(e.key === "Escape" && document.querySelector(".bw-pop,.bw-info")){ e.stopImmediatePropagation(); e.preventDefault(); popWeg(); } }, true);
  window.addEventListener("hashchange", popWeg);
  var oldAfter = window.afterRender; window.afterRender = function(){ if(oldAfter) oldAfter(); fit(); };

  return {
    zufall: function(){ var s = cur(), p = SBC.sc(+s); if(!p) return; if(!leer(p) && !confirm("Die Einträge dieses Bogens durch einen zufälligen Slugger ersetzen?")) return; p.name = NAMEN[Math.floor(Math.random() * NAMEN.length)]; p.pers = SB_PERS[Math.floor(Math.random() * SB_PERS.length)].id; p.ob = {}; save(); render(); toast("Zufälliger Slugger erstellt"); },
    leeren: function(){ var s = cur(), o = who(s); if(!o) return; if(Object.keys(o.ob || {}).length && !confirm("Alle Einträge dieses Bogens löschen?")) return; o.ob = {}; save(); render(); },
    teilen: function(){ var p = SBC.sc(+cur()); if(!p) return; var url = location.href.split("#")[0] + "#crew/teilen~" + b64u(JSON.stringify(sauber(p)));
      if(navigator.share){ navigator.share({title: (p.name || "Slugger") + " – Slugblaster", url: url}).catch(function(){}); return; }
      (navigator.clipboard ? navigator.clipboard.writeText(url) : Promise.reject()).then(function(){ toast("Link kopiert"); }, function(){ prompt("Link zum Teilen:", url); }); },
    sichern: function(){ var p = SBC.sc(+cur()); if(!p) return; var b = new Blob([JSON.stringify(sauber(p), null, 1)], {type: "application/json"}), a = document.createElement("a"); a.href = URL.createObjectURL(b); a.download = "Slugblaster – " + (p.name || "Slugger") + ".json"; document.body.appendChild(a); a.click(); a.remove(); },
    laden: function(inp){ var f = inp.files && inp.files[0]; if(!f) return; var r = new FileReader(); r.onload = function(){ try{ var o = JSON.parse(r.result); if(!o || !o.pers || !SB_BOEGEN[o.pers]) throw 0; go("crew/" + neuSlugger(o)); }catch(e){ toast("Das ist keine Slugger-Datei aus diesem Tool."); } }; r.readAsText(f); inp.value = ""; },
    persWahl: function(btn, ev){
      if(ev) ev.stopPropagation(); var p = SBC.sc(+cur()); if(!p) return; popWeg();
      var pop = document.createElement("div"); pop.className = "bw-pop"; document.body.appendChild(pop);
      pop.innerHTML = SB_PERS.map(function(x, i){ return '<div class="pz"><button class="pn' + (x.id === p.pers ? " sel" : "") + '" data-i="' + i + '" style="--pc:' + x.farbe + '">' + esc(x.t) + '</button><button class="pi" data-t="' + i + '" title="Info" aria-label="Info">i</button></div>'; }).join("");
      var r = btn.getBoundingClientRect(); pop.style.cssText = "width:240px;left:" + Math.max(8, Math.min(r.left, innerWidth - 248)) + "px;top:" + (r.bottom + 4) + "px";
      pop.onclick = function(e){
        var b = e.target.closest("button"); if(!b) return; e.stopPropagation();
        if(b.dataset.t != null){ var x = SB_PERS[+b.dataset.t]; document.querySelectorAll(".bw-info").forEach(function(q){ q.remove(); });
          var inf = document.createElement("div"); inf.className = "bw-info"; inf.innerHTML = '<h4>' + esc(x.t) + '</h4><p>' + esc(x.styleBonus || "") + '</p>' + (x.moment ? '<p><b>' + esc(x.moment.t) + ':</b> ' + esc(x.moment.x) + '</p>' : '') + '<p class="s">Boost ' + (x.haltung.b === "inf" ? "∞" : x.haltung.b) + ' · Kick ' + (x.haltung.k || 0) + ' · S. ' + x.p + '</p>';
          document.body.appendChild(inf); var pr = pop.getBoundingClientRect(), w = Math.min(340, innerWidth - pr.right - 12); if(w < 220){ inf.style.left = Math.max(8, pr.left - 340) + "px"; inf.style.width = "332px"; } else { inf.style.left = pr.right + "px"; inf.style.width = w + "px"; } inf.style.top = pr.top + "px"; return; }
        var n = SB_PERS[+b.dataset.i]; if(n.id === p.pers){ popWeg(); return; }
        if(!leer(p) && !confirm("Persönlichkeit wechseln? Die Einträge auf dem Bogen werden dabei geleert.")) return;
        p.pers = n.id; p.ob = {}; save(); popWeg(); render();
      };
    },
    cst: function(i){ var c = SBC.crew(); c.style = (c.style === i + 1) ? i : i + 1; save(); render(); },
    ruhm: function(r){ var c = SBC.crew(); c.ruhm = (c.ruhm || 0) === r ? r - 1 : r; save(); render(); },
    tg: function(s, j){ var f = SB_BOEGEN[key(s)][j], o = O(s); if(o[f[0]]) delete o[f[0]]; else o[f[0]] = true; save(); render(); },
    pdf: function(btn){
      var s = cur(), k = key(s); if(!k || !window.FillPDF) return;
      var alt = btn.innerHTML; btn.disabled = true; btn.style.opacity = .5;
      var fertig = function(){ btn.innerHTML = alt; btn.disabled = false; btn.style.opacity = ""; };
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
