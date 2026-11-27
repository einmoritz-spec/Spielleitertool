/* SLUGBLASTER – Charakterbogen (#crew/<i>) und Crewbogen (#crew/crew): deutsche Bogenblätter (js/bogen-de.js), Werkzeugleiste,
   Persönlichkeit-Auswahl, Zufall, Teilen, Datei sichern/laden. Werte im Spielstand (ST.sc[i] bzw. ST.crew).
   #crew = Status-Tabelle (crew.js) + Auswahl der Bögen. */
var SBG = (function(){
  function who(s){ return s === "c" ? SBC.crew() : SBC.sc(+s); }
  function bogen(s){ return SBGDE.sheet(s); }

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
    var sl = c !== "c" && c !== "crew";
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
      try{ var o = JSON.parse(ub64(c.slice(7))); if(!o || !o.pers || !SB_PTEXT[o.pers]) throw 0; var ni = neuSlugger(o); toast("Slugger übernommen"); setTimeout(function(){ go("crew/" + ni); }, 0); return chips("") + '<div class="fr"></div>'; }
      catch(e){ setTimeout(function(){ go("crew"); }, 0); return chips("") + '<div class="fr"><p class="lead">Link ungültig.</p></div>'; }
    }
    if(c === "") return chips("") + '<div class="fr">' + SBC.status() + '</div>';
    return chips(c) + '<div class="bgw"><div class="bgz">' + bogen(c === "crew" ? "c" : c) + '</div></div>';
  };
  /* Bogen auf Fensterbreite skalieren (Seite = 792 px breit) */
  function fit(){ var z = document.querySelector(".bgz"); if(!z) return; var w = z.parentNode.clientWidth - 16; z.style.zoom = Math.min(1.75, Math.max(.4, w / 792)); }
  window.addEventListener("resize", fit);
  document.addEventListener("click", function(e){ if(!e.target.closest(".bw-pop,.bw-info")) popWeg(); });
  document.addEventListener("keydown", function(e){ if(e.key === "Escape" && document.querySelector(".bw-pop,.bw-info")){ e.stopImmediatePropagation(); e.preventDefault(); popWeg(); } }, true);
  window.addEventListener("hashchange", popWeg);
  var oldAfter = window.afterRender; window.afterRender = function(){ if(oldAfter) oldAfter(); fit(); };

  return {
    zufall: function(){
      var s = cur(), p = SBC.sc(+s); if(!p) return; if(!leer(p) && !confirm("Die Einträge dieses Bogens durch einen zufälligen Slugger ersetzen?")) return;
      var r = function(a){ return a[Math.floor(Math.random() * a.length)]; }, fl = function(a){ return [].concat.apply([], a).filter(Boolean); };
      var ein = function(a, n){ a = a.slice(); var o = []; while(o.length < n && a.length) o.push(a.splice(Math.floor(Math.random() * a.length), 1)[0]); return o; };
      p.name = r(NAMEN); p.pers = r(SB_PERS).id; var T = SB_PTEXT[p.pers], A = SB_AUSR, o = {};
      o.look = ein(fl(SB_MACH.look), 3).join(", "); o.fam = ein(fl(SB_MACH.fam), 2).join(", "); o.bond = r(SB_MACH.bond); o.vibes = ein(T.vibes, 2).join(", ");
      o.brett = r(fl(A.board.deck).filter(function(x){ return x.indexOf("(") < 0; })) + ", Griptape " + r(fl(A.board.grip));
      o.ray = r(fl(A.ray.a)) + "-" + r(fl(A.ray.b));
      var tr = T.traits.map(function(t, i){ return i; }).filter(function(i){ return !/_{3,}/.test(T.traits[i][1]); }); o["t" + r(tr)] = true;
      ein(["g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8"], 2).forEach(function(k){ o[k] = true; });
      p.ob = o; save(); render(); toast("Zufälliger Slugger erstellt");
    },
    leeren: function(){ var s = cur(), o = who(s); if(!o) return; if(Object.keys(o.ob || {}).length && !confirm("Alle Einträge dieses Bogens löschen?")) return; o.ob = {}; save(); render(); },
    teilen: function(){ var p = SBC.sc(+cur()); if(!p) return; var url = location.href.split("#")[0] + "#crew/teilen~" + b64u(JSON.stringify(sauber(p)));
      if(navigator.share){ navigator.share({title: (p.name || "Slugger") + " – Slugblaster", url: url}).catch(function(){}); return; }
      (navigator.clipboard ? navigator.clipboard.writeText(url) : Promise.reject()).then(function(){ toast("Link kopiert"); }, function(){ prompt("Link zum Teilen:", url); }); },
    sichern: function(){ var p = SBC.sc(+cur()); if(!p) return; var b = new Blob([JSON.stringify(sauber(p), null, 1)], {type: "application/json"}), a = document.createElement("a"); a.href = URL.createObjectURL(b); a.download = "Slugblaster – " + (p.name || "Slugger") + ".json"; document.body.appendChild(a); a.click(); a.remove(); },
    laden: function(inp){ var f = inp.files && inp.files[0]; if(!f) return; var r = new FileReader(); r.onload = function(){ try{ var o = JSON.parse(r.result); if(!o || !o.pers || !SB_PTEXT[o.pers]) throw 0; go("crew/" + neuSlugger(o)); }catch(e){ toast("Das ist keine Slugger-Datei aus diesem Tool."); } }; r.readAsText(f); inp.value = ""; },
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
    pdf: function(btn){ SBGDE.pdf(btn); }
  };
})();
