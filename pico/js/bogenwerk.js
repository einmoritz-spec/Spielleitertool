/* PICO – Bogenwerkzeuge: Symbolleiste (Zufall, Schnellstart-Käfer bzw. Picotitan, Leeren, Teilen per Link, Datei sichern/laden, PDF),
   Auswahllisten mit „i“ (Aspekte, Start-Bröckchen/-Krimskrams, Starträtsel), Zufallsbogen. Setzt auf js/bogen.js auf (BG, bAll, bPdf, bTitan …). */
(function(){
  var IC = {
    zufall: '<rect x="3.5" y="3.5" width="17" height="17" rx="3"/><circle cx="8.5" cy="8.5" r=".9" fill="currentColor"/><circle cx="15.5" cy="8.5" r=".9" fill="currentColor"/><circle cx="12" cy="12" r=".9" fill="currentColor"/><circle cx="8.5" cy="15.5" r=".9" fill="currentColor"/><circle cx="15.5" cy="15.5" r=".9" fill="currentColor"/>',
    vorlage: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-3.9 3.1-6 7-6s7 2.1 7 6"/>', leeren: '<path d="M20 12a8 8 0 1 1-2.6-5.9"/><path d="M20 4v5h-5"/>',
    teilen: '<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6"/>',
    sichern: '<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>', laden: '<path d="M12 16V5M7 9l5-5 5 5M5 20h14"/>', pdf: '<path d="M5 4h11l3 3v13H5z"/><path d="M8 4v5h7V4M8 20v-6h8v6"/>'
  };
  var NAMEN = ["Brummel", "Krabbel", "Zippel", "Fitzel", "Mücki", "Pünktchen", "Flunk", "Wuseline", "Knusper", "Zwirbel", "Schnipp", "Tüddel", "Kribbel", "Pimpel", "Summ", "Quirl"];
  function sym(p){ return '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + p + '</svg>'; }
  function r(a){ return a[Math.floor(Math.random() * a.length)]; }
  function strip(t){ return String(t || "").replace(/\*\*?/g, ""); }
  function toast(t){ var d = document.createElement("div"); d.className = "bw-toast"; d.textContent = t; document.body.appendChild(d); setTimeout(function(){ d.remove(); }, 2600); }
  function popWeg(){ document.querySelectorAll(".bw-pop,.bw-info").forEach(function(e){ e.remove(); }); }
  function b64u(t){ var u = new TextEncoder().encode(t), b = ""; u.forEach(function(c){ b += String.fromCharCode(c); }); return btoa(b).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); }
  function ub64(t){ t = t.replace(/-/g, "+").replace(/_/g, "/"); while(t.length % 4) t += "="; var b = atob(t), u = new Uint8Array(b.length); for(var i = 0; i < b.length; i++) u[i] = b.charCodeAt(i); return new TextDecoder().decode(u); }

  /* ---------- Buchdaten ---------- */
  var KAT = null;
  function kap(){ return (window.PI_NACH && PI_NACH.kaefer && PI_NACH.kaefer.kapitel) || []; }
  function katalog(){
    if(KAT) return KAT; KAT = {asp: [], sq: [], bro: [], kri: [], rae: []};
    var skip = {"aspekte-augmente": 1, "aspekte-beispiel": 1, "augmente": 1, "schnellstarts": 1};
    kap().forEach(function(c){
      (c.b || []).forEach(function(b){
        if(!b || b.t !== "cards" || skip[c.id]) return;
        b.x.forEach(function(a){ if(a.k && /·/.test(a.k)) KAT.asp.push({t: a.t, g: c.t, k: a.k, kind: a.k.split("·").pop().trim(), x: (a.b || []).map(strip)}); });
      });
      if(c.id === "schnellstarts") (c.b || []).forEach(function(b){ if(b && b.t === "cards") b.x.forEach(function(a){ var l = (a.b || []).filter(function(y){ return y && y.t === "ul"; })[0]; KAT.sq.push({t: a.t, k: a.k, x: strip((a.b || [])[0]), l: l ? l.x.map(function(s){ return strip(s).replace(/\s*\(S\.[^)]*\)/g, "").trim(); }) : []}); }); });
      if(c.id === "liste"){ var m = 0; (c.b || []).forEach(function(b){ if(b && b.t === "h4") m = /Bröckchen/.test(b.x) ? 1 : 2; else if(b && b.t === "ul" && m) KAT[m === 1 ? "bro" : "kri"] = b.x.map(strip); }); }
      if(c.id === "startraetsel") (c.b || []).forEach(function(b){ if(b && b.t === "ul" && !KAT.rae.length) KAT.rae = b.x.map(strip).map(function(s){ return s.replace(/\s*\(Wherefor[^)]*\)/, ""); }); });
    });
    return KAT;
  }
  /* Aspekt zu einem Schnellstart-Namen („Megamuskel-Mandibeln“ → Aspekt „Mandibeln …“) */
  function grund(n){
    var A = katalog().asp, low = n.toLowerCase(), t, i, p = n.split("-");
    for(i = 0; i < A.length; i++){ t = A[i].t.replace(/\s*\(.*\)$/, "").toLowerCase(); if(t === low) return A[i]; }
    for(i = 0; i < A.length; i++){ t = A[i].t.replace(/\s*\(.*\)$/, "").toLowerCase(); if(p.length > 1 && t === p[p.length - 1].toLowerCase()) return A[i]; }
    for(i = 0; i < A.length; i++){ t = A[i].t.toLowerCase(); if(t.indexOf(low) === 0 || low.indexOf(t.replace(/\s*\(.*\)$/, "")) === 0) return A[i]; }
    return null;
  }
  function aText(a){ return a ? a.x.slice(1).join("\n") || a.x.join("\n") : ""; }

  /* ---------- Zustand ---------- */
  function seg(){ return (location.hash || "#bogen/picnic").slice(1).split("/").map(decodeURIComponent); }
  function kind(){ var h = seg(); return h[0] === "streifzug" ? "streifzug" : (h[1] === "odyssey" ? "odyssey" : "picnic"); }
  function curV(){ var h = seg(); if(h[0] === "streifzug") return "streifzug"; var v = kind(); if(h[2] && h[2].indexOf("teilen~") !== 0) v += ":" + h[2]; return v; }
  function frisch(){ return {f: {}, h: {}, s: {}, m: -1, o: {}}; }
  function hatInhalt(v){ var b = BG(v), n = 0; ["f", "h", "s", "o"].forEach(function(k){ Object.keys(b[k] || {}).forEach(function(x){ var w = b[k][x]; if(w && (!Array.isArray(w) || w.some(Boolean)) && w !== "") n++; }); }); return n > 0 || b.m >= 0 || !!b.pic; }
  function nameVon(v){ var f = BG(v).f; return f.name || f.tname || ""; }
  function sauber(v){ var o = JSON.parse(JSON.stringify(BG(v))); delete o.pic; return {pico: 1, v: v.split(":")[0], d: o}; }
  function einlesen(o, ask){
    if(!o || !o.pico || !o.d || !/^(picnic|odyssey|streifzug)$/.test(o.v)) return false;
    var v = o.v; if(ask && hatInhalt(v) && !confirm("Den vorhandenen Bogen durch den geladenen ersetzen?")) return null;
    ST.bogen = ST.bogen || {}; ST.bogen[v] = Object.assign(frisch(), o.d); save(); return v;
  }

  /* ---------- Router: Link-Import ---------- */
  var vb = window.viewBogen, vs = window.viewStreif;
  function importHash(sel){
    var h = seg(), c = (h[0] === "streifzug" ? h[1] : h[2]) || "";
    if(c.indexOf("teilen~") !== 0) return;
    try{ var v = einlesen(JSON.parse(ub64(c.slice(7))), true); if(v) toast("Bogen übernommen"); }catch(e){ toast("Link ungültig."); }
    history.replaceState(null, "", "#" + (h[0] === "streifzug" ? "streifzug" : "bogen/" + (h[1] || "picnic")));
  }
  function leiste(v){
    var k = v.split(":")[0], ib = function(ic, tip, on, cls){ return '<button class="bwi' + (cls || "") + '" data-tip="' + tip + '" aria-label="' + tip + '" onclick="' + on + '">' + sym(IC[ic]) + '</button>'; };
    return '<span class="sp"></span><span class="bw-tools">' + ib("zufall", k === "streifzug" ? "Zufälligen Streifzug erstellen" : "Zufälligen Käfer erstellen", "PBW.zufall()") +
      ib("vorlage", k === "streifzug" ? "Picotitan wählen" : "Schnellstart-Käfer wählen", "PBW.vorlage(this,event)") + ib("leeren", "Bogen leeren", "bAll(PBW.v())") + ib("teilen", "Link teilen", "PBW.teilen()") + ib("sichern", "Als Datei sichern", "PBW.sichern()") +
      '<label class="bwi" data-tip="Datei laden" aria-label="Datei laden">' + sym(IC.laden) + '<input type="file" accept=".json,application/json" hidden onchange="PBW.laden(this)"></label>' + ib("pdf", "Als ausfüllbares PDF speichern", "PBW.pdf(this)") + '</span>';
  }
  function umbau(h, v){ return h.replace(/<span class="sp"><\/span>[\s\S]*?<\/button><\/div>/, leiste(v) + "</div>").replace(/<div class="noprint tselbar">[\s\S]*?<\/select><\/div>/, ""); }
  window.viewBogen = function(sel, slot){ importHash(sel); var s = seg(); return umbau(vb(sel, s[2] && s[2].indexOf("teilen~") === 0 ? "" : slot), curV()); };
  window.viewStreif = function(){ importHash(); return umbau(vs(), "streifzug"); };

  /* ---------- Auswahllisten ---------- */
  function wrap(ev){ if(ev) ev.stopPropagation(); popWeg(); }
  function menu(btn, o){
    var pop = document.createElement("div"); pop.className = "bw-pop"; document.body.appendChild(pop);
    var gr = o.items.some(function(it){ return it.g; }), such = o.items.length > 12, auf = {}, q = "";
    o.items.forEach(function(it){ if(it.sel && it.g) auf[it.g] = 1; });
    var low = function(t){ return String(t || "").toLowerCase(); };
    function zeile(it, i){ return '<div class="pz"><button class="pn' + (it.sel ? " sel" : "") + '" data-i="' + i + '">' + esc(it.t) + (it.s ? "<small>" + esc(it.s) + "</small>" : "") + "</button>" + (o.info ? '<button class="pi" data-t="' + i + '" aria-label="Info">i</button>' : "") + "</div>"; }
    function liste(){
      var h = "", last = null, n = 0, ok = function(it){ return !q || low(it.t + " " + (it.s || "") + " " + (it.g || "") + " " + (it.suche || "")).indexOf(q) >= 0; };
      if(!gr){ o.items.forEach(function(it, i){ if(ok(it)){ h += zeile(it, i); n++; } }); }
      else {
        var G = [], M = {}; o.items.forEach(function(it, i){ if(!M[it.g]){ M[it.g] = {g: it.g, l: []}; G.push(M[it.g]); } if(ok(it)) M[it.g].l.push([it, i]); });
        G.forEach(function(g){ if(q && !g.l.length) return; var offen = q || auf[g.g]; n += g.l.length;
          h += '<div class="gh' + (offen ? " on" : "") + '" data-g="' + esc(g.g) + '"><span>' + esc(g.g) + "</span><em>" + (q ? g.l.length : M[g.g].l.length) + '</em><i></i></div>';
          if(offen) h += '<div class="gb">' + g.l.map(function(x){ return zeile(x[0], x[1]); }).join("") + "</div>"; });
      }
      return h || '<p class="hint">Nichts gefunden.</p>';
    }
    pop.innerHTML = (such ? '<div class="sq"><input type="search" placeholder="Suchen …" autocomplete="off" spellcheck="false"></div>' : "") + (o.hint ? '<p class="hint">' + esc(o.hint) + "</p>" : "") + '<div class="lst">' + liste() + "</div>";
    var rc = btn.getBoundingClientRect(), br = o.breit || 250; pop.style.cssText = "width:" + br + "px;left:" + Math.max(8, Math.min(rc.left, innerWidth - br - 8)) + "px;top:" + Math.min(rc.bottom + 4, Math.max(8, innerHeight - 440)) + "px";
    var inp = pop.querySelector("input"), L = pop.querySelector(".lst");
    if(inp){ inp.oninput = function(){ document.querySelectorAll(".bw-info").forEach(function(x){ x.remove(); }); q = low(inp.value.trim()); L.innerHTML = liste(); }; setTimeout(function(){ inp.focus(); }, 30); }
    pop.onclick = function(e){
      e.stopPropagation(); var g = e.target.closest(".gh");
      if(g){ var k = g.dataset.g; if(!q){ if(auf[k]) delete auf[k]; else auf[k] = 1; L.innerHTML = liste(); } return; }
      var b = e.target.closest("button"); if(!b) return;
      if(b.dataset.t != null){
        document.querySelectorAll(".bw-info").forEach(function(x){ x.remove(); });
        var inf = document.createElement("div"); inf.className = "bw-info"; inf.innerHTML = o.info(o.items[+b.dataset.t]); document.body.appendChild(inf);
        var pr = pop.getBoundingClientRect(), w = Math.min(340, innerWidth - pr.right - 12);
        if(w < 220){ inf.style.left = Math.max(8, pr.left - 340) + "px"; inf.style.width = "332px"; } else { inf.style.left = pr.right + "px"; inf.style.width = w + "px"; }
        inf.style.top = pr.top + "px"; return;
      }
      popWeg(); o.pick(o.items[+b.dataset.i]);
    };
  }
  function aspektWahl(btn, ev, k){
    wrap(ev); var v = curV(), cur = BG(v).f[k];
    menu(btn, {breit: 270, items: katalog().asp.map(function(a){ return {t: a.t, s: a.k, g: a.g, sel: cur === a.t, a: a}; }),
      info: function(it){ return "<h4>" + esc(it.a.t) + '</h4><p class="s">' + esc(it.a.g + " · " + it.a.k) + "</p>" + it.a.x.map(function(p){ return "<p>" + esc(p) + "</p>"; }).join(""); },
      pick: function(it){ var f = BG(v).f, t = k.replace(/n$/, "t"); f[k] = it.a.t; if(!f[t]) f[t] = aText(it.a); save(); render(); }});
  }
  function listeWahl(btn, ev, k, liste, hint, anhaengen){
    wrap(ev); var v = curV();
    menu(btn, {hint: hint, items: liste.map(function(x){ return {t: x}; }), pick: function(it){ var f = BG(v).f; f[k] = anhaengen && f[k] ? f[k].replace(/[,\s]+$/, "") + ", " + it.t : it.t; save(); render(); }});
  }
  var VARIA = {
    asp: function(b, ev, k){ aspektWahl(b, ev, k); },
    bro: function(b, ev, k, an){ var K = katalog(); listeWahl(b, ev, k, K.bro.map(function(x){ return x; }).concat(K.kri), "Start-Bröckchen (organisch) und Start-Krimskrams (künstlich), S. 163", an); },
    rae: function(b, ev, k){ listeWahl(b, ev, k, katalog().rae, "Ideen für dein Starträtsel, S. 167"); }
  };
  window.PBWDD = function(btn, ev, art, k, an){ VARIA[art](btn, ev, k, an); };

  /* Pfeile an die Felder setzen (nach jedem Zeichnen) */
  function pos(el, root){ var x = 0, y = 0, e = el; while(e && e !== root){ x += e.offsetLeft; y += e.offsetTop; e = e.offsetParent; } return {x: x, y: y}; }
  function pfeile(){
    var sh = document.querySelector(".sheet"); if(!sh) return;
    sh.querySelectorAll(".bw-dd").forEach(function(e){ e.remove(); });
    var K = kind();
    sh.querySelectorAll(".bf").forEach(function(inp){
      var k = inp.dataset.k, art = null, an = false;
      if(/^a\dn$/.test(k)) art = "asp"; else if(/^bit\d$/.test(k)) art = "bro"; else if(k === "bits"){ art = "bro"; an = true; } else if(k === "rq") art = "rae";
      if(!art || K === "streifzug") return;
      var p = pos(inp, sh), b = document.createElement("button"); b.className = "bw-dd noprint"; b.type = "button"; b.textContent = "▾"; b.setAttribute("data-tip", "Auswahl");
      var big = inp.tagName === "TEXTAREA";
      b.style.cssText = "left:" + (p.x + inp.offsetWidth - 16) + "px;top:" + (p.y + (big ? inp.offsetHeight - 17 : 2)) + "px";
      b.onclick = function(ev){ PBWDD(b, ev, art, k, an); }; sh.appendChild(b);
    });
  }
  var alt = window.afterRender; window.afterRender = function(){ if(alt) alt(); pfeile(); };

  /* ---------- Zufall, Schnellstart ---------- */
  var SK = []; try{ BSK.forEach(function(g){ g[1].forEach(function(s){ SK.push(s[1]); }); }); }catch(e){}
  function schnellstart(b, s, nur){
    var f = b.f, odd = false; for(var i = 0; i < 6; i++){ delete f["a" + i + "n"]; delete f["a" + i + "t"]; delete b.h["a" + i]; }
    s.l.forEach(function(n, i){ if(i >= 6) return; var g = grund(n); f["a" + i + "n"] = n; if(g) f["a" + i + "t"] = aText(g); });
    f.desc = s.t;
  }
  function zufallKaefer(v){
    var K = katalog(), lang = v.split(":")[0] === "odyssey", b = frisch(), s = r(K.sq), nek = lang ? 50 : 25;
    b.f.name = r(NAMEN); schnellstart(b, s);
    var kost = parseInt(s.k, 10) || 11, rest = nek - kost, slots = lang ? 6 : 4, i = s.l.length;
    while(lang && i < slots && rest >= 3){ var a = r(K.asp); b.f["a" + i + "n"] = a.t; b.f["a" + i + "t"] = aText(a); i++; rest -= 3; }
    for(var n = 0; n < 80 && rest > 0; n++){ var sk = r(SK), rg = b.s[sk] || 0; if(rg < 2 && rg + 1 <= rest){ b.s[sk] = rg + 1; rest -= rg + 1; } }
    var bro = r(K.bro), kri = r(K.kri); if(lang) b.f.bits = bro + ", " + kri; else { b.f.bit0 = bro; b.f.bit1 = kri; }
    b.f.rq = r(K.rae); ST.bogen = ST.bogen || {}; ST.bogen[v] = b; save(); render();
  }
  window.PBW = {
    v: curV,
    zufall: function(){
      var v = curV(); if(hatInhalt(v) && !confirm("Den Bogen durch einen zufälligen ersetzen?")) return;
      if(v === "streifzug"){ ST.bogen = ST.bogen || {}; ST.bogen[v] = frisch(); BG(v).f.tname = r(NAMEN); var t = bTitanen(); if(t.length) bTitan(r(t).t); else { save(); render(); } }
      else zufallKaefer(v);
      toast(v === "streifzug" ? "Zufälliger Streifzug erstellt" : "Zufälliger Käfer erstellt");
    },
    vorlage: function(btn, ev){
      wrap(ev); var v = curV();
      if(v === "streifzug"){
        var cur = BG(v).f.tier; menu(btn, {hint: "Picotitan für den Streifzug", items: bTitanen().map(function(t){ return {t: t.t, sel: cur === t.t, c: t}; }),
          info: function(it){ var o = "<h4>" + esc(it.c.t) + "</h4>", sec = ""; (it.c.b || []).forEach(function(b){ if(b && b.t === "h4") sec = b.x; else if(typeof b === "string" && !sec) o += "<p>" + esc(strip(b)) + "</p>"; });
            return o + '<p class="s">Gunst, Aura und Gigafertigkeiten werden eingetragen.</p>'; },
          pick: function(it){ if(hatInhalt(v) && BG(v).f.tier && BG(v).f.tier !== it.t && !confirm("Titan wechseln? Gunst, Aura und Gigafertigkeiten werden ersetzt.")) return; bTitan(it.t); }});
        return;
      }
      menu(btn, {hint: "Schnellstart-Käfer (S. 106–107): Aspekte und Augmente", items: katalog().sq.map(function(s){ return {t: s.t, s: s.k, q: s}; }),
        info: function(it){ return "<h4>" + esc(it.q.t) + "</h4><p>" + esc(it.q.x) + '</p><p class="s">' + esc(it.q.k) + "</p><ul>" + it.q.l.map(function(x){ return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>"; },
        pick: function(it){ var b = BG(v); if((b.f.a0n || b.f.a0t) && !confirm("Die Aspekte durch den Schnellstart " + it.q.t + " ersetzen?")) return; schnellstart(b, it.q); save(); render(); toast(it.q.t + " eingesetzt"); }});
    },
    teilen: function(){
      var v = curV(), k = v.split(":")[0], u = new URL("bogen.html", location.href).href.replace(/(bogen\.html).*/, "$1") + "#" + (k === "streifzug" ? "streifzug" : "bogen/" + k) + "/teilen~" + b64u(JSON.stringify(sauber(v)));
      if(navigator.share){ navigator.share({title: (nameVon(v) || "Pico-Bogen") + " – PICO", url: u}).catch(function(){}); return; }
      (navigator.clipboard ? navigator.clipboard.writeText(u) : Promise.reject()).then(function(){ toast("Link kopiert"); }, function(){ prompt("Link zum Teilen:", u); });
    },
    sichern: function(){ var v = curV(), b = new Blob([JSON.stringify(sauber(v), null, 1)], {type: "application/json"}), a = document.createElement("a"); a.href = URL.createObjectURL(b); a.download = "Pico – " + (nameVon(v) || (v === "streifzug" ? "Streifzug" : "Käfer")) + ".json"; document.body.appendChild(a); a.click(); a.remove(); },
    laden: function(inp){
      var f = inp.files && inp.files[0]; if(!f) return; var rd = new FileReader();
      rd.onload = function(){ try{ var o = JSON.parse(rd.result), v = einlesen(o, true); if(v === false) throw 0; if(v === null) return; var h = v === "streifzug" ? "streifzug" : "bogen/" + v; if(location.hash === "#" + h) render(); else location.hash = h; }catch(e){ toast("Das ist keine Pico-Bogendatei aus diesem Tool."); } };
      rd.readAsText(f); inp.value = "";
    },
    pdf: function(btn){
      var alt = btn.style.opacity, d = {disabled: false, _t: "", get textContent(){ return this._t; }, set textContent(x){ this._t = x; btn.style.opacity = /wird/.test(x) ? .4 : ""; }};
      bPdf(d);
    }
  };
  document.addEventListener("click", function(e){ if(!e.target.closest(".bw-pop,.bw-info")) popWeg(); });
  document.addEventListener("keydown", function(e){ if(e.key === "Escape" && document.querySelector(".bw-pop,.bw-info")){ e.stopImmediatePropagation(); e.preventDefault(); popWeg(); } }, true);
  window.addEventListener("hashchange", popWeg);
})();
