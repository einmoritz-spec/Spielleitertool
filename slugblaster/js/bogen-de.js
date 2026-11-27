/* SLUGBLASTER – deutsche Bogenblätter (Slugger: grit, guts, smarts, heart, chill · Crew), nachgebaut im Layout der Original-Bögen
   (792 × 612 pt). Nur das Kopfband (Pinsel-Titel) und die Crew-Karte sind Bilder; alles andere ist HTML mit Eingabefeldern.
   Werte: ST.sc[i].ob (freie Felder/Kästchen) – Name, Trouble, Style, Haltung, Slams, Doom, Legacy und Beats hängen am Spielstand
   und sind mit der Status-Tabelle und den Folgen-Seiten identisch. PDF: FillPDF.make auf dem Blatt (bleibt ausfüllbar). */
var SBGDE = (function(){
  function W(s){ return s === "c" ? SBC.crew() : SBC.sc(+s); }
  function md(t){ return esc(t).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\*(.+?)\*/g, "<em>$1</em>"); }
  var LIST = /^(verm|verh)\.(\d+)$/;
  function val(s, k){
    var w = W(s); if(!w) return ""; var m = LIST.exec(k);
    if(m) return (w[m[1]] || [])[+m[2]] || "";
    if(k === "name") return w.name || "";
    return (w.ob && w.ob[k]) || "";
  }
  function set(s, k, v){
    var w = W(s); if(!w) return; var m = LIST.exec(k);
    if(m){ var a = (w[m[1]] = w[m[1]] || []); a[+m[2]] = v; for(var i = 0; i < a.length; i++) if(a[i] == null) a[i] = ""; while(a.length && !a[a.length - 1]) a.pop(); }
    else if(k === "name"){ if(v.trim()) w.name = v.trim(); }
    else (w.ob = w.ob || {})[k] = v;
    save();
  }
  function flag(s, k){ var w = W(s); return !!(w && w.ob && w.ob[k]); }

  /* ---------- Bausteine ---------- */
  function hd(x, y, t){ return '<div class="sh-h" style="left:' + x + 'px;top:' + (y - 7) + 'px">' + t + '</div>'; }
  function txt(x, y, w, cls, t){ return '<div class="' + cls + '" style="left:' + x + 'px;top:' + y + 'px;width:' + w + 'px">' + t + '</div>'; }
  /* Schreiblinie: Eingabefeld mit gepunkteter Linie, Beschriftung darunter; wahl = Schlüssel für die Auswahlliste */
  function fld(s, k, x, y, w, lab, o){
    o = o || {}; var h = o.h || 12;
    return '<div class="sb-fw" style="left:' + x + 'px;top:' + y + 'px;width:' + w + 'px"><input class="sb-sf' + (o.cls ? " " + o.cls : "") + '" style="height:' + h + 'px;' + (o.fs ? "font-size:" + o.fs + "px;" : "") + '" data-s="' + s + '" data-k="' + k + '" value="' + esc(val(s, k)) + '" autocomplete="off" spellcheck="false">' +
      (lab ? '<label style="top:' + (h + 3) + 'px">' + lab + '</label>' : "") + (o.wahl ? '<button class="ddk noprint" data-tip="Auswahl" aria-label="Auswahl" onclick="SBGDE.wahl(this,\'' + s + '\',\'' + k + '\',\'' + o.wahl + '\',event)">▾</button>' : "") + '</div>';
  }
  function sk(cls, on, fn, st){ return '<i class="sb-sk ' + cls + (on ? " on" : "") + (fn ? "" : " fix") + '"' + (st ? ' style="' + st + '"' : "") + (fn ? ' onclick="' + fn + '"' : "") + '></i>'; }
  function tg(s, k, cls, st){ return sk(cls, flag(s, k), "SBGDE.tg('" + s + "','" + k + "')", st); }

  /* ---------- Auswahllisten (feste Auswahl → Dropdown) ---------- */
  function flach(a){ var o = []; a.forEach(function(r){ (Array.isArray(r) ? r : [r]).forEach(function(x){ o.push(x); }); }); return o; }
  function liste(k, id){
    var M = SB_MACH, L = M.pers.l, T = SB_PTEXT[id], C = window.SB_CREWBAU;
    if(k === "look") return {hint: L[0][1], l: flach(M.look), add: 1};
    if(k === "fam") return {hint: L[1][1], l: flach(M.fam), add: 1};
    if(k === "bond") return {hint: L[2][1], l: M.bond.slice(), add: 0};
    if(k === "vibes") return {hint: L[3][1], l: T.vibes.slice(), add: 1};
    if(k === "brand") return {hint: C.schritte[0].x, l: C.schritte[0].l.map(function(x){ return x[0]; }), info: C.schritte[0].l, add: 1};
    if(k === "hang") return {hint: C.schritte[1].x, l: flach(C.schritte[1].tab), add: 1};
    return {hint: "", l: [], add: 0};
  }
  function popWeg(){ document.querySelectorAll(".bw-pop,.bw-info").forEach(function(e){ e.remove(); }); }

  /* ---------- Slugger-Blatt ---------- */
  function haltung(s, p, P, T, out){
    var h = P.haltung, I = SBC.icons;
    out.push(hd(269, 95, "HALTUNG"));
    out.push(txt(269, 106, 220, "sh-p", md(T.haltung)));
    if(h.b === "inf"){
      out.push('<div class="sh-ic" style="left:268px;top:149px">' + I.die("#111", true) + '</div>');
      out.push(txt(300, 156, 160, "sh-hand", "∞ Boost: +1W6 auf jede Aktion"));
      return;
    }
    var n = h.b + h.k, i;
    for(i = 0; i < n; i++){
      var t = i < h.b ? "b" : "k", j = t === "b" ? i : i - h.b, nn = t === "b" ? h.b : h.k, ss = p[t === "b" ? "bs" : "ks"] || 0, on = j >= nn - ss;
      out.push('<div class="sh-ic' + (on ? " weg" : "") + '" style="left:' + (268 + i * 31) + 'px;top:149px">' + (t === "b" ? I.die("#111") : I.bolt("#111")) + '</div>');
      out.push(sk("sq", on, "SBC.att(" + s + ",'" + t + "'," + j + ")", "left:" + (278 + i * 31) + "px;top:179px"));
    }
    out.push(txt(268 + n * 31 + 2, 156, 460 - (268 + n * 31 + 2), "sh-hand", "Boost bzw. Kick"));
  }
  function eigenschaften(s, T, out){
    out.push(hd(269, 212, "TRAITS"));
    var order = T.traits.map(function(t, i){ return i; }).sort(function(a, b){ return (/_{3,}/.test(T.traits[b][1]) ? 1 : 0) - (/_{3,}/.test(T.traits[a][1]) ? 1 : 0) || a - b; });
    var h = '<div class="sh-tr">';
    order.forEach(function(i){
      var t = T.traits[i], b = /_{3,}/.test(t[1]);
      var body = b ? "<b>" + esc(t[0]) + ".</b> " + md(t[1].split(/_{3,}/)[0].trim()) + "…" + inl(s, "nat") + '<span class="sb-rest">' + md(t[1].split(/_{3,}\.?\s*/)[1] || "") + "</span>" : "<b>" + esc(t[0]) + ".</b> " + md(t[1]);
      h += '<div class="sb-tr">' + tg(s, "t" + i, "o") + '<div class="sb-tx">' + body + '</div></div>';
    });
    h += '<div class="sb-tr">' + tg(s, "wach", "o") + '<div class="sb-tx"><b>Persönliches Wachstum.</b> Ein Trait einer anderen Persönlichkeit. Wie veränderst du dich? Von wem lernst du?' +
      inl(s, "wa1") + inl(s, "wa2") + "</div></div>";
    out.push(h + "</div>");
  }
  function inl(s, k, fs){ return fld(s, k, 0, 0, 100, "", {fs: fs}).replace('class="sb-fw"', 'class="sb-fw sb-inl"'); }
  function beats(s, p, P, out){
    var M = SB_MOMENTE, m = p.mom = p.mom || {eig: [], bogen: 0, familie: 0, angst: 0, dt: {}};
    var kost = function(k){ return "(" + k[0] + (k[1] === "style" ? "s" : "t") + ")"; };
    var grp = function(titel, items){ return '<div class="sb-bg"><b>' + esc(titel) + "—</b>" + items.map(function(it){
      return '<div class="sb-bt">' + (it.fn ? sk("o sm", it.on, it.fn) : '<i class="sb-pt"></i>') + "<span>" + esc(it.t) + " " + kost(it.k) + "</span></div>"; }).join("") + "</div>"; };
    var art = function(key, def){ return def.x.map(function(b, i){ return {t: b.t, k: b.k, on: i < (m[key] || 0), fn: "SBGDE.arc(" + s + ",'" + key + "'," + i + ")"}; }); };
    var h = '<div class="sh-bt">';
    h += grp(M.eig.t, [{t: P.moment.t, k: P.moment.k, on: flag(s, "bm"), fn: "SBGDE.tg('" + s + "','bm')"}].concat(M.eig.x.map(function(b){ return {t: b.t, k: b.k, on: m.eig.indexOf(b.id) >= 0, fn: "SBGDE.eig(" + s + ",'" + b.id + "')"}; })));
    h += grp(P.bogen.t, art("bogen", P.bogen)) + grp(M.familie.t, art("familie", M.familie)) + grp(M.angst.t, art("angst", M.angst));
    h += grp(M.crew.t, M.crew.x.map(function(b){ return {t: b.t, k: b.k}; }));
    h += grp(M.weitere.t, M.weitere.x.map(function(b){ return {t: b.t, k: b.k}; }).concat([{t: M.werkstatt.t, k: M.werkstatt.k}, {t: SB_WELT_BEAT().t, k: SB_WELT_BEAT().k}]));
    out.push(hd(641, 95, "BEATS")); out.push(h + "</div>");
  }
  function SB_WELT_BEAT(){ return (window.SB_PORTALE && SB_PORTALE.beat) || {t: "Portal-Entdeckung", k: [2, "style"]}; }

  function slugger(s){
    var p = SBC.sc(+s), P = sbPers(p.pers), T = SB_PTEXT[p.pers], id = p.pers, out = [], i;
    out.push('<img class="kopf" src="' + IMG("boegen/kopf-" + id) + '" alt="" draggable="false">');
    [["name", "Name", 113], ["look", "Look", 143, "look"], ["fam", "Familie", 172, "fam"], ["bond", "Bond", 203, "bond"], ["vibes", "Vibes", 233, "vibes"], ["stick", "Sticker usw.", 263]].forEach(function(f){
      out.push(fld(s, f[0], 54, f[2], 176, f[1], {wahl: f[3], fs: f[0] === "name" ? 11 : 0}));
    });
    out.push(hd(54, 303, "AUSRÜSTUNG"));
    out.push(fld(s, "brett", 54, 323, 176, "Dein Board")); out.push(fld(s, "ray", 54, 354, 176, "Deine Raygun"));
    var A = (window.SB_AUSR && SB_AUSR.andere && SB_AUSR.andere[0] && SB_AUSR.andere[0].l) || [];
    var std = A.slice(0, 7).map(function(x){ return x[0]; });
    var c1 = [["Handy", 1], [T.extra[0], 1], [T.extra[1], 0, "g1"], [std[0], 0, "g2"]], c2 = std.slice(1);
    var li = function(it, k){ var f = it[1] === 1; return '<div class="sb-gi">' + (f ? sk("o", true, null) : tg(s, it[2], "o")) + "<span>" + esc(it[0]) + "</span></div>"; };
    out.push('<div class="sh-g" style="left:54px;width:92px">' + c1.map(li).join("") + "</div>");
    out.push('<div class="sh-g" style="left:156px;width:108px">' + c2.map(function(n, j){ return li([n, 0, "g" + (j + 3)]); }).join("") + "</div>");
    out.push(fld(s, "g_a", 54, 453, 176, "")); out.push(fld(s, "g_b", 54, 482, 176, ""));
    haltung(s, p, P, T, out);
    eigenschaften(s, T, out);
    /* Trouble · Style */
    out.push(hd(54, 516, "TROUBLE")); out.push(hd(269, 516, "STYLE"));
    var X = [54, 75, 97, 118, 149, 170, 192, 213], a = p.aerger || 0;
    for(i = 0; i < 8; i++) out.push(sk("tri" + (i === 7 ? " la" : ""), i < a, "SBC.trouble(" + s + "," + i + ")", "left:" + X[i] + "px;top:524px"));
    for(i = 0; i < 8; i++) out.push(sk("dia", i < (p.style || 0), "SBC.style(" + s + "," + i + ")", "left:" + (269 + i * 19.2).toFixed(1) + "px;top:524px"));
    out.push(txt(424, 521, 60, "sh-hand sm", esc(P.styleBonus)));
    /* rechts */
    out.push(hd(503, 95, "LEGACY"));
    [122, 152, 182, 213, 243, 272, 299].forEach(function(y, j){ out.push(fld(s, "verm." + j, 504, y - 9, 117, "")); });
    out.push(hd(503, 328, "DOOM"));
    [357, 387, 417, 446].forEach(function(y, j){ out.push(fld(s, "verh." + j, 504, y - 9, 117, "")); });
    out.push(hd(503, 466, "SLAMS"));
    [0, 1].forEach(function(k){ var sl = (p.stuerze || [])[k]; out.push('<div class="slb" data-pdftx style="left:490px;top:' + (477 + k * 34) + 'px" onclick="SBC.slam(' + s + ',' + k + ')">' + (sl ? esc((sl.s ? "super " : "") + sl.t) : "") + "</div>"); });
    beats(s, p, P, out);
    return '<div class="sh" id="sbSheet">' + out.join("") + "</div>";
  }

  /* ---------- Crew-Blatt ---------- */
  function crew(){
    var c = SBC.crew(), C = SB_CREWBAU, out = [], i, j, s = "c";
    out.push('<img class="kopf" src="' + IMG("boegen/kopf-crew") + '" alt="" draggable="false" style="height:82px">');
    out.push('<img class="karte" src="' + IMG("boegen/crew-karte") + '" alt="" draggable="false">');
    out.push(fld(s, "name", 54, 96, 247, "Name", {h: 26, fs: 15}));
    out.push(fld(s, "brands", 54, 141, 247, "Brands", {wahl: "brand"}));
    out.push(fld(s, "hang1", 54, 172, 247, "Hangouts", {wahl: "hang"})); out.push(fld(s, "hang2", 54, 202, 247, ""));
    out.push(hd(53, 241, "BRÜCHE"));
    out.push('<div class="sh-box" style="left:53px;top:257px;width:117px;height:28px"></div><div class="sh-box" style="left:175px;top:257px;width:118px;height:28px"></div>');
    out.push(fld(s, "fr1", 57, 263, 109, "", {fs: 9.5, h: 16, cls: "nb"})); out.push(fld(s, "fr2", 179, 263, 110, "", {fs: 9.5, h: 16, cls: "nb"}));
    out.push(hd(53, 309, "HYPE")); out.push(txt(53, 318, 250, "sh-p", "Tut es für die Crew und setzt nach Bedarf Boost oder Kick ein."));
    var n = c.hb + c.hk, gap = Math.min(35, 248 / n);
    for(i = 0; i < n; i++){
      var t = i < c.hb ? "b" : "k", jj = t === "b" ? i : i - c.hb, nn = t === "b" ? c.hb : c.hk, ss = c[t === "b" ? "hbs" : "hks"] || 0, on = jj >= nn - ss, x = 52 + i * gap;
      out.push('<div class="sh-ic' + (on ? " weg" : "") + '" style="left:' + x + 'px;top:338px;width:29px;height:29px">' + (t === "b" ? SBC.icons.die("#111") : SBC.icons.bolt("#111")) + "</div>");
      out.push(sk("sq", on, "SBC.hype('" + t + "'," + jj + ")", "left:" + (x + 11) + "px;top:373px"));
    }
    out.push(hd(53, 420, "STYLE")); out.push(hd(108, 420, "RUHM"));
    for(i = 0; i < 10; i++) out.push(sk("dia", i < (c.style || 0), "SBGDE.cst(" + i + ")", "left:" + (53 + (i % 2) * 22) + "px;top:" + (432 + Math.floor(i / 2) * 23.6).toFixed(1) + "px"));
    var pos = [[108, 432], [108, 493], [194, 432], [194, 493], [280, 432], [280, 490]];
    SB_RUHM.forEach(function(r, ri){
      var h = '<div class="sb-fm" style="left:' + pos[ri][0] + "px;top:" + pos[ri][1] + 'px"><div class="sb-fh">' + (ri === 0 ? sk("o", true, null) : sk("o", (c.ruhm || 0) >= ri, "SBGDE.ruhm(" + ri + ")")) + "<b>" + ri + ": " + esc(r.t) + "</b></div>";
      (r.perks || []).forEach(function(pk, pi){ h += '<div class="sb-fp">' + tg(s, "p" + ri + "_" + pi, "o sm") + "<span>" + esc(pk[0]) + "</span></div>"; });
      if(ri === 5) [0, 1].forEach(function(q){ h += '<div class="sb-fp sb-fl">' + tg(s, "p5_" + q, "o sm") + inl(s, "ruhm5" + "ab"[q], 8) + "</div>"; });
      out.push(h + "</div>");
    });
    /* Fraktionen */
    out.push(hd(327, 85, "FRAKTIONEN"));
    [327, 427, 528, 628].forEach(function(x, cx){
      for(j = 0; j < 5; j++){
        var n2 = cx * 5 + j, y = 101 + j * 19.6;
        out.push('<div class="sh-box" style="left:' + x + "px;top:" + y.toFixed(1) + 'px;width:24px;height:16px"></div>');
        out.push(fld(s, "fz" + n2, x, y + 1, 24, "", {cls: "mid nb", fs: 9}));
        out.push(fld(s, "fn" + n2, x + 29, y + 4, 68, "", {fs: 8.5}));
      }
    });
    return '<div class="sh" id="sbSheet">' + out.join("") + "</div>";
  }

  /* ---------- Bedienung ---------- */
  /* Schrift schrumpft, wenn der Eintrag nicht in die Zeile passt (auch im PDF) */
  function passe(t){ if(!t.dataset.fs) t.dataset.fs = parseFloat(getComputedStyle(t).fontSize); var f = +t.dataset.fs; t.style.fontSize = f + "px"; while(t.scrollWidth > t.clientWidth + 1 && f > 5.5){ f -= .5; t.style.fontSize = f + "px"; } }
  function alle(){ document.querySelectorAll("#sbSheet .sb-sf").forEach(passe); }
  var altAR = window.afterRender; window.afterRender = function(){ if(altAR) altAR(); alle(); };
  document.addEventListener("input", function(e){ var t = e.target; if(t && t.classList && t.classList.contains("sb-sf")){ set(t.dataset.s, t.dataset.k, t.value); passe(t); if(t.dataset.k === "name" && t.dataset.s !== "c"){ var q = document.querySelector(".bgbar a.on"); if(q && t.value.trim()) q.textContent = t.value.trim(); } } });
  function neu(){ render(); }
  return {
    sheet: function(s){
      if(s === "c") return crew();
      var p = SBC.sc(+s); if(!p || !SB_PTEXT[p.pers]) return '<div class="fr"><p class="lead">Slugger nicht gefunden.</p></div>';
      return slugger(s);
    },
    key: function(s){ if(s === "c") return "crew"; var p = SBC.sc(+s); return p && SB_PTEXT[p.pers] ? p.pers : null; },
    tg: function(s, k){ var w = W(s); w.ob = w.ob || {}; if(w.ob[k]) delete w.ob[k]; else w.ob[k] = true; save(); neu(); },
    arc: function(s, key, i){ var p = SBC.sc(+s); p.mom = p.mom || {eig: [], bogen: 0, familie: 0, angst: 0, dt: {}}; p.mom[key] = (p.mom[key] || 0) === i + 1 ? i : i + 1; save(); neu(); },
    eig: function(s, id){ var p = SBC.sc(+s); p.mom = p.mom || {eig: [], bogen: 0, familie: 0, angst: 0, dt: {}}; var x = p.mom.eig.indexOf(id); if(x >= 0) p.mom.eig.splice(x, 1); else p.mom.eig.push(id); save(); neu(); },
    cst: function(i){ var c = SBC.crew(); c.style = (c.style === i + 1) ? i : i + 1; save(); neu(); },
    ruhm: function(r){ var c = SBC.crew(); c.ruhm = (c.ruhm || 0) === r ? r - 1 : r; save(); neu(); },
    wahl: function(btn, s, k, art, ev){
      if(ev) ev.stopPropagation(); popWeg();
      var id = s === "c" ? "guts" : SBC.sc(+s).pers, L = liste(art, id), pop = document.createElement("div"); pop.className = "bw-pop bw-wahl"; document.body.appendChild(pop);
      var drin = val(s, k).split(/\s*,\s*/).filter(Boolean);
      pop.innerHTML = (L.hint ? '<p class="hint">' + esc(L.hint) + "</p>" : "") + L.l.map(function(x, i){ return '<div class="pz"><button class="pn' + (drin.indexOf(x) >= 0 ? " sel" : "") + '" data-i="' + i + '">' + esc(x) + "</button>" + (L.info ? '<button class="pi" data-t="' + i + '" aria-label="Info">i</button>' : "") + "</div>"; }).join("");
      var r = btn.getBoundingClientRect(); pop.style.cssText = "width:230px;left:" + Math.max(8, Math.min(r.left, innerWidth - 238)) + "px;top:" + Math.min(r.bottom + 4, Math.max(8, innerHeight - 330)) + "px";
      pop.onclick = function(e){
        var b = e.target.closest("button"); if(!b) return; e.stopPropagation();
        if(b.dataset.t != null){
          document.querySelectorAll(".bw-info").forEach(function(q){ q.remove(); });
          var x = L.info[+b.dataset.t], inf = document.createElement("div"); inf.className = "bw-info"; inf.innerHTML = "<h4>" + esc(x[0]) + "</h4><p>" + esc(x[1]) + "</p>"; document.body.appendChild(inf);
          var pr = pop.getBoundingClientRect(), w = Math.min(320, innerWidth - pr.right - 12); if(w < 200){ inf.style.left = Math.max(8, pr.left - 320) + "px"; inf.style.width = "312px"; } else { inf.style.left = pr.right + "px"; inf.style.width = w + "px"; }
          inf.style.top = pr.top + "px"; return;
        }
        var inp = btn.parentNode.querySelector("input"), w2 = L.l[+b.dataset.i];
        var t = inp.value.split(/\s*,\s*/).filter(Boolean), at = t.indexOf(w2);
        if(at >= 0) t.splice(at, 1); else if(L.add) t.push(w2); else t = [w2];
        inp.value = t.join(", "); set(s, k, inp.value); passe(inp); popWeg();
      };
    },
    pdf: function(btn){
      var sh = document.getElementById("sbSheet"), z = document.querySelector(".bgz"); if(!sh || !window.FillPDF) return;
      var alt = btn.innerHTML, nm = (W(location.hash.split("/")[1] === "crew" ? "c" : location.hash.split("/")[1]) || {}).name || "Bogen";
      btn.disabled = true; btn.style.opacity = .5;
      FillPDF.make(sh, {name: "Slugblaster – " + nm, marks: [[".sb-sk", "on", "punkt"]], before: function(){ z.style.zoom = 1; }, after: function(){ window.dispatchEvent(new Event("resize")); }})
        .then(function(){ btn.innerHTML = alt; btn.disabled = false; btn.style.opacity = ""; }, function(){ btn.innerHTML = alt; btn.disabled = false; btn.style.opacity = ""; });
    }
  };
})();
