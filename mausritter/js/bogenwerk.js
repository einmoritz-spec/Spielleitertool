/* Mausbogen-Werkzeuge: Symbolleiste (Zufall, Spielmaus wählen, Leeren, Teilen, Datei sichern/laden, PDF)
   und Gegenstandsauswahl mit Suche und ein-/ausklappbaren Gruppen. Setzt auf maeuse.js auf. */
(function(){
  var IC = {
    zufall: '<rect x="3.5" y="3.5" width="17" height="17" rx="3"/><circle cx="8.5" cy="8.5" r=".9" fill="currentColor"/><circle cx="15.5" cy="8.5" r=".9" fill="currentColor"/><circle cx="12" cy="12" r=".9" fill="currentColor"/><circle cx="8.5" cy="15.5" r=".9" fill="currentColor"/><circle cx="15.5" cy="15.5" r=".9" fill="currentColor"/>',
    vorlage: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-3.9 3.1-6 7-6s7 2.1 7 6"/>',
    leeren: '<path d="M20 12a8 8 0 1 1-2.6-5.9"/><path d="M20 4v5h-5"/>',
    teilen: '<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6"/>',
    sichern: '<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>',
    laden: '<path d="M12 16V5M7 9l5-5 5 5M5 20h14"/>',
    pdf: '<path d="M5 4h11l3 3v13H5z"/><path d="M8 4v5h7V4M8 20v-6h8v6"/>'
  };
  var FELDER = ["name","hg","zeichen","charakter","fell","merkmal","stam","staa","gesm","gesa","wilm","wila","tpm","tpa","kerne","text"];
  function sym(p){ return '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + p + '</svg>'; }
  function toast(t){ var d = document.createElement("div"); d.className = "bw-toast"; d.textContent = t; document.body.appendChild(d); setTimeout(function(){ d.remove(); }, 2200); }
  function b64u(s){ var u = new TextEncoder().encode(s), b = ""; u.forEach(function(c){ b += String.fromCharCode(c); }); return btoa(b).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); }
  function ub64(t){ t = t.replace(/-/g, "+").replace(/_/g, "/"); while(t.length % 4) t += "="; var b = atob(t), u = new Uint8Array(b.length); for(var i = 0; i < b.length; i++) u[i] = b.charCodeAt(i); return new TextDecoder().decode(u); }
  function gefuellt(o){ return !!(o && (FELDER.some(function(k){ return o[k]; }) || Object.keys(o.slots || {}).length)); }
  function kartenIds(){ var s = {}; MR.karten.forEach(function(k){ s[k[0]] = 1; }); MR.zustaende.forEach(function(z){ s[z[1]] = 1; }); return s; }
  function sauber(d){
    if(!d || typeof d !== "object") return null;
    var o = {}, ok = kartenIds(), pl = {}; SLOTS.forEach(function(s){ pl[s[0]] = 1; });
    FELDER.forEach(function(k){ if(typeof d[k] === "string" || typeof d[k] === "number") o[k] = String(d[k]).slice(0, 5000); });
    if(typeof d.maus === "string" && MR.maeuse.some(function(m){ return m.id === d.maus; })) o.maus = d.maus;
    o.slots = {}; o.pips = {};
    Object.keys(d.slots || {}).forEach(function(k){ if(pl[k] && ok[d.slots[k]]) o.slots[k] = d.slots[k]; });
    Object.keys(d.pips || {}).forEach(function(k){ var n = +d.pips[k]; if(pl[k] && n >= 0 && n <= 3) o.pips[k] = n | 0; });
    return gefuellt(o) ? o : null;
  }
  /* ---------- mehrere Mäuse als Einträge ---------- */
  var DBL = null;
  function bid(){ return "c" + Date.now().toString(36) + Math.floor(Math.random() * 999); }
  function dbl(){
    if(DBL) return DBL;
    var d = store("bogenliste"); if(d && d.l && d.l.length) return (DBL = d);
    var e = {id: bid(), o: store("bogen") || {}}; return (DBL = {l: [e], cur: e.id});
  }
  function eintrag(){ var d = dbl(), e = d.l.filter(function(x){ return x.id === d.cur; })[0] || d.l[0]; d.cur = e.id; return e; }
  function persist(){ store("bogenliste", dbl()); }
  bgL = function(){ return eintrag().o || {}; };
  bgS = function(o){ eintrag().o = o; persist(); };
  function neu(o, erzwingen){
    var d = dbl(), c = eintrag();
    if(!erzwingen && !gefuellt(c.o)){ c.o = o || {}; persist(); return; }
    var e = {id: bid(), o: o || {}}; d.l.push(e); d.cur = e.id; persist();
  }
  function chips(){
    var d = dbl(), cur = eintrag().id;
    return '<div class="bw-chips noprint">' + d.l.map(function(e){
      var n = (e.o.name || "").trim() || "Neue Maus", on = e.id === cur;
      return '<span class="bw-chip' + (on ? " on" : "") + '"><button type="button" onclick="MBW.wahl(\'' + e.id + '\')">' + esc(n) + '</button>' + (on ? '<button type="button" class="x" data-tip="Bogen löschen" aria-label="Bogen löschen" onclick="MBW.del(\'' + e.id + '\')">×</button>' : "") + '</span>';
    }).join("") + '<button type="button" class="bw-plus" data-tip="Neuen Bogen anlegen" aria-label="Neuen Bogen anlegen" onclick="MBW.plus()">+</button></div>';
  }
  /* ---------- Aktionen ---------- */
  window.MBW = {
    zufall: function(){
      neu(); var m = MR.maeuse[Math.floor(Math.random() * MR.maeuse.length)]; bogenVon(m.id); toast("Zufällige Spielmaus eingesetzt");
    },
    leeren: function(){ bogenLeer(); },
    wahl: function(id){ dbl().cur = id; persist(); render(); },
    plus: function(){ neu(null, true); render(); },
    del: function(id){
      var d = dbl(), e = d.l.filter(function(x){ return x.id === id; })[0]; if(!e) return;
      if(gefuellt(e.o) && !confirm("Diesen Bogen löschen?")) return;
      d.l = d.l.filter(function(x){ return x.id !== id; }); if(!d.l.length) d.l.push({id: bid(), o: {}}); d.cur = d.l[d.l.length - 1].id; persist(); render();
    },
    teilen: function(){
      var u = location.href.split("#")[0] + "#maeuse/bogen/teilen~" + b64u(JSON.stringify(bgL()));
      (navigator.clipboard ? navigator.clipboard.writeText(u) : Promise.reject()).then(function(){ toast("Link kopiert"); }, function(){ prompt("Link zum Teilen:", u); });
    },
    sichern: function(){
      var o = bgL(), a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([JSON.stringify({system: "Mausritter", version: 1, bogen: o}, null, 1)], {type: "application/json"}));
      a.download = "Mausritter – " + (o.name || "Maus") + ".json"; document.body.appendChild(a); a.click(); setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); }, 500);
    },
    laden: function(inp){
      var f = inp.files && inp.files[0]; inp.value = ""; if(!f) return;
      var r = new FileReader(); r.onload = function(){ try{ var d = JSON.parse(r.result), o = d && d.system === "Mausritter" ? sauber(d.bogen) : null; if(o){ neu(o); render(); toast("Bogen als neuer Eintrag geladen"); } else toast("Datei passt nicht zu Mausritter."); }catch(e){ toast("Datei ungültig."); } }; r.readAsText(f);
    },
    pdf: function(){ bogenPdf(); },
    vorlage: function(btn, ev){
      ev.stopPropagation(); var cur = bgL().maus;
      menu(btn, {items: MR.maeuse.map(function(m){ return {t: m.name, s: m.hg, sel: cur === m.id, m: m}; }), pick: function(it){ neu(); bogenVon(it.m.id); },
        info: function(it){ var m = it.m; return '<h4>' + esc(m.name) + '</h4><p><b>' + esc(m.hg) + '</b> · Geburtszeichen ' + esc(m.zeichen) + ' (' + esc(m.charakter) + ')</p><p class="s">STÄ ' + m.sta + ' · GES ' + m.ges + ' · WIL ' + m.wil + ' · TP ' + m.tp + ' · ' + m.kerne + ' Kerne</p><p>' + esc(m.aus) + '</p>'; }});
    }
  };
  bogenPdf = function(){ FillPDF.make(document.getElementById("bogen"), {name: "Mausritter – " + (bgL().name || "Mausbogen"), knopf: {}, marks: [[".slot .pips i", "on", "punkt"]]}); };

  /* ---------- Auswahlliste (Spielmäuse) ---------- */
  function popWeg(){ document.querySelectorAll(".bw-pop,.bw-info").forEach(function(e){ e.remove(); }); }
  function menu(btn, o){
    popWeg(); var pop = document.createElement("div"); pop.className = "bw-pop"; document.body.appendChild(pop);
    pop.innerHTML = o.items.map(function(it, i){ return '<div class="pz"><button class="pn' + (it.sel ? " sel" : "") + '" data-i="' + i + '">' + esc(it.t) + (it.s ? "<small>" + esc(it.s) + "</small>" : "") + '</button><button class="pi" data-t="' + i + '" aria-label="Info">i</button></div>'; }).join("");
    var rc = btn.getBoundingClientRect(), br = 280;
    pop.style.cssText = "width:" + br + "px;left:" + Math.max(8, Math.min(rc.right - br, innerWidth - br - 8)) + "px;top:" + Math.min(rc.bottom + 4, Math.max(8, innerHeight - 440)) + "px";
    pop.onclick = function(e){
      e.stopPropagation(); var b = e.target.closest("button"); if(!b) return;
      if(b.dataset.t != null){
        document.querySelectorAll(".bw-info").forEach(function(x){ x.remove(); });
        var inf = document.createElement("div"); inf.className = "bw-info"; inf.innerHTML = o.info(o.items[+b.dataset.t]); document.body.appendChild(inf);
        var pr = pop.getBoundingClientRect(), w = Math.min(340, innerWidth - pr.right - 12);
        if(w < 220){ inf.style.left = Math.max(8, pr.left - 332) + "px"; inf.style.width = "332px"; } else { inf.style.left = pr.right + "px"; inf.style.width = w + "px"; }
        inf.style.top = pr.top + "px"; return;
      }
      popWeg(); o.pick(o.items[+b.dataset.i]);
    };
  }
  document.addEventListener("click", function(e){ if(!e.target.closest(".bw-pop,.bw-info")) popWeg(); });
  window.addEventListener("hashchange", popWeg);

  /* ---------- Gegenstandsauswahl mit Suche und Gruppen ---------- */
  slotPick = function(s){
    var o = bgL(), d = document.createElement("div"); d.className = "pick";
    var G = [], M = {}, auf = {}, q = "", low = function(t){ return String(t || "").toLowerCase(); };
    function add(g, k){ if(!M[g]){ M[g] = {g: g, l: []}; G.push(M[g]); } M[g].l.push(k); }
    MR.karten.forEach(function(k){ add(k[2], {f: k[0], n: k[1], h: k[3] === 2, z: false}); });
    MR.zustaende.forEach(function(z){ add("Zustände", {f: z[1], n: z[0], h: false, z: true}); });
    function liste(){
      return G.map(function(g){
        var l = g.l.filter(function(k){ return !q || low(k.n + " " + g.g).indexOf(q) >= 0; }); if(q && !l.length) return "";
        var offen = q || auf[g.g];
        return '<div class="gh' + (offen ? " on" : "") + '" data-g="' + esc(g.g) + '"><span>' + esc(g.g) + "</span><em>" + l.length + "</em><i></i></div>" +
          (offen ? '<div class="kart">' + l.map(function(k){ return '<div class="c' + (k.h ? " h2" : "") + '" data-k="' + k.f + '" title="' + esc(k.n) + '"' + (k.z ? ' style="background:var(--rot)"' : "") + '><img src="' + IMG("karten/" + k.f) + '" alt="' + esc(k.n) + '"></div>'; }).join("") + "</div>" : "");
      }).join("") || '<p class="hint">Nichts gefunden.</p>';
    }
    d.innerHTML = '<div><h3>Gegenstand oder Zustand wählen</h3><div class="sq"><input type="search" placeholder="Suchen …" autocomplete="off" spellcheck="false"></div><div class="lst">' + liste() + '</div><div class="bbtn"><button data-k="">Platz leeren</button></div></div>';
    var inp = d.querySelector("input"), L = d.querySelector(".lst");
    inp.oninput = function(){ q = low(inp.value.trim()); L.innerHTML = liste(); };
    d.onclick = function(e){
      var g = e.target.closest(".gh"); if(g){ if(!q){ var k = g.dataset.g; if(auf[k]) delete auf[k]; else auf[k] = 1; L.innerHTML = liste(); } return; }
      var c = e.target.closest("[data-k]");
      if(c){ o.slots = o.slots || {}; o.pips = o.pips || {}; if(c.dataset.k) o.slots[s] = c.dataset.k; else delete o.slots[s]; o.pips[s] = 0; bgS(o); d.remove(); render(); }
      else if(e.target === d) d.remove();
    };
    document.body.appendChild(d); setTimeout(function(){ inp.focus(); }, 30);
  };
  document.addEventListener("keydown", function(e){
    if(e.key !== "Escape") return;
    var p = document.querySelector(".bw-pop,.bw-info,.pick"); if(!p) return;
    e.stopImmediatePropagation(); e.preventDefault(); if(p.classList.contains("pick")) p.remove(); else popWeg();
  }, true);

  /* ---------- Bogen und Link-Import ---------- */
  var pb = pBogen;
  pBogen = function(){
    var h = pb(), i = h.indexOf('<div class="bbtn">'); if(i < 0) return h;
    var ib = function(ic, tip, on){ return '<button class="bwi" data-tip="' + tip + '" aria-label="' + tip + '" onclick="' + on + '">' + sym(IC[ic]) + '</button>'; };
    var bar = '<div class="bw-bar noprint"><span class="bw-tools">' + ib("zufall", "Zufällige Spielmaus einsetzen", "MBW.zufall()") + ib("vorlage", "Spielmaus wählen", "MBW.vorlage(this,event)") + ib("leeren", "Bogen leeren", "MBW.leeren()") + ib("teilen", "Link teilen", "MBW.teilen()") + ib("sichern", "Als Datei sichern", "MBW.sichern()") +
      '<label class="bwi" data-tip="Datei laden" aria-label="Datei laden">' + sym(IC.laden) + '<input type="file" accept=".json,application/json" hidden onchange="MBW.laden(this)"></label>' + ib("pdf", "Als ausfüllbares PDF speichern", "MBW.pdf()") + '</span></div>';
    return h.replace('<div class="rp">', '<div class="rp">' + chips() + bar).slice(0, h.indexOf('<div class="bbtn">') + bar.length) + "</div>";
  };
  if(window.LK) LK.init(function(h){ return h.indexOf("#maeuse/bogen") === 0; });
  var vm = viewMaeuse;
  viewMaeuse = function(sub, id){
    if(sub === "bogen" && id && id.indexOf("teilen~") === 0){
      var msg = "Link ungültig."; try{ var o = sauber(JSON.parse(ub64(id.slice(7))));
        if(o){ neu(o); msg = "Bogen als neuer Eintrag übernommen"; LK.an(); } }catch(e){}
      history.replaceState(null, "", "#maeuse/bogen"); setTimeout(function(){ toast(msg); }, 50); id = "";
    }
    return vm(sub, id);
  };
})();
