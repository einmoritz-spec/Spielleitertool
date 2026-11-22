/* SLUGBLASTER – Charakterbogen (#crew/<id>) und Crewbogen (#crew/crew): deutscher Nachbau der Bögen aus „All Sheets“, 1000 × 773 px (Querformat 11 × 8,5 in).
   Alles klickbar/tippbar und im Spielstand (ST.sc[i].bg bzw. ST.crew.bg). Export als ausfüllbares PDF über shared/fillpdf.js.
   #crew = Status-Tabelle (crew.js) + Auswahl der Bögen. */
var SBG = (function(){
  var GEAR_ALLE = ["Raumzeit-Verstärker", "Multiversums-Karten", "eine kleine Drohne", "Hacking-Tools", "Reparaturwerkzeug", "Profi-Kameraausrüstung"];
  var GEAR_P = {
    grit: ["etwas, das alle anderen vergessen haben", "Ersatz-Portalgerät"],
    guts: ["etwas, das du nicht haben solltest", "tragbarer Lautsprecher"],
    smarts: ["ein Projekt in Arbeit", "ein wichtiger Screenshot oder eine Bilddatei"],
    heart: ["etwas von jemand Besonderem", "ein wichtiges Flugblatt"],
    chill: ["etwas, das du auf dem Weg hierher gefunden hast", "ein Haustier"]
  };
  function B(s){ var o = s === "c" ? SBC.crew() : SBC.sc(+s); return o ? (o.bg = o.bg || {f: {}, o: {}}) : {f: {}, o: {}}; }
  function val(s, k){
    var m = /^(verm|verh|sl):(\d+)$/.exec(k);
    if(m){ var p = SBC.sc(+s); if(!p) return ""; if(m[1] === "sl"){ var x = (p.stuerze || [])[+m[2]]; return x ? x.t : ""; } return (p[m[1]] || [])[+m[2]] || ""; }
    return B(s).f[k] || "";
  }
  function setVal(s, k, v){
    var m = /^(verm|verh|sl):(\d+)$/.exec(k);
    if(m){
      var p = SBC.sc(+s), i = +m[2]; if(!p) return;
      if(m[1] === "sl"){ p.stuerze = p.stuerze || []; var old = p.stuerze[i]; if(v.trim()) p.stuerze[i] = {t: v, s: old ? !!old.s : false}; else if(old){ p.stuerze.splice(i, 1); } }
      else { var a = (p[m[1]] = p[m[1]] || []); a[i] = v; for(var j = 0; j < a.length; j++) if(!a[j] || !String(a[j]).trim()) a[j] = ""; while(a.length && !a[a.length - 1]) a.pop(); }
    } else B(s).f[k] = v;
    save();
  }
  function bf(s, k, cls, ph){ return '<input class="bf ' + (cls || "") + '" data-s="' + s + '" data-k="' + k + '" value="' + esc(val(s, k)) + '"' + (ph ? ' placeholder="' + ph + '"' : "") + ' autocomplete="off">'; }
  function lab(s, k, t){ return '<div class="g_fz">' + bf(s, k) + '<small>' + t + '</small></div>'; }
  /* Markierung (Kreis/Kästchen): on = Zustand; fn = onclick */
  function mk(cls, on, fn){ return '<i class="g_mk ' + cls + (on ? " on" : "") + '" onclick="' + fn + '"></i>'; }
  function omk(s, k, cls){ return mk(cls || "g_c", B(s).o[k], "SBG.tg('" + s + "','" + k + "')"); }
  var TRI = '<svg viewBox="0 0 24 22"><path d="M12 2 22 20H2Z" stroke="#000" stroke-width="2.4" stroke-linejoin="round"/></svg>';
  var DIA = '<svg viewBox="0 0 22 22"><path d="M11 1.5 20.5 11 11 20.5 1.5 11Z" stroke="#000" stroke-width="2.2" stroke-linejoin="round"/></svg>';
  function dice(on){ return '<svg viewBox="0 0 34 34"><rect x="1.5" y="1.5" width="31" height="31" rx="6" fill="' + (on ? "#bbb" : "#000") + '"/><g fill="#fff"><circle cx="10" cy="10" r="2.5"/><circle cx="24" cy="10" r="2.5"/><circle cx="17" cy="17" r="2.5"/><circle cx="10" cy="24" r="2.5"/><circle cx="24" cy="24" r="2.5"/></g></svg>'; }
  function bolt(on){ return '<svg viewBox="0 0 34 34"><circle cx="17" cy="17" r="15.5" fill="' + (on ? "#bbb" : "#000") + '"/><path d="M19 5 10 18h6l-2 11 10-14h-6z" fill="#fff"/></svg>'; }
  function beat(s, id, t, kost){ return '<div class="g_bt">' + omk(s, "b:" + id, "g_c") + '<span>' + esc(t) + (kost ? " (" + kost + ")" : "") + '</span></div>'; }
  function kst(k){ return k ? k[0] + (k[1] === "trouble" ? "t" : "s") : ""; }
  function beatBlock(s, title, arr, pre){ return '<h5>' + esc(title) + '—</h5>' + arr.map(function(m, j){ return beat(s, pre + j, m[0], m[1]); }).join(""); }
  function plain(arr){ return arr.map(function(m){ return '<div class="g_bt g_b2"><span>' + esc(m[0]) + (m[1] ? " (" + m[1] + ")" : "") + '</span></div>'; }).join(""); }

  /* ---------- Charakterbogen ---------- */
  function charBogen(i){
    var p = SBC.sc(i); if(!p) return '<div class="fr"><p class="lead">Slugger nicht gefunden.</p></div>';
    var P = sbPers(p.pers), T = SB_PTEXT[p.pers] || {}, M = SB_MOMENTE, s = String(i), h = P.haltung;
    var tr = "", st = "", k;
    for(k = 0; k < 8; k++) tr += mk("g_tri" + (k === 7 ? " g_last" : ""), k < (p.aerger || 0), "SBC.trouble(" + i + "," + k + ")").replace("></i>", ">" + TRI + (k === 7 ? '<b>!</b>' : "") + "</i>");
    for(k = 0; k < 8; k++) st += mk("g_dia", k < (p.style || 0), "SBC.style(" + i + "," + k + ")").replace("></i>", ">" + DIA + "</i>");
    function att(t, n, svg){
      var key = t === "b" ? "bs" : "ks", rest = n - (p[key] || 0), o = "";
      for(var j = 0; j < n; j++) o += '<span class="g_dc"><i class="g_dsv' + (j >= rest ? " spent" : "") + '">' + svg(j >= rest) + '</i>' + mk("g_sq", j >= rest, "SBC.att(" + i + ",'" + t + "'," + j + ")") + '</span>';
      return o;
    }
    var dz = h.b === "inf" ? '<span class="g_dc"><i class="g_dsv">' + '<svg viewBox="0 0 34 34"><rect x="1.5" y="1.5" width="31" height="31" rx="6" fill="#000"/></svg>' + '<em>∞</em></i></span>' : att("b", h.b, dice) + att("k", h.k, bolt);
    var gp = (GEAR_P[p.pers] || ["", ""]);
    var gear = ["dein Handy", gp[0], gp[1], "Enterhaken"].concat(GEAR_ALLE);
    var gl = gear.map(function(g, j){ return '<div class="g_gi">' + omk(s, "g" + j, "g_c") + '<span>' + esc(g) + '</span></div>'; });
    var traits = (T.traits || []).map(function(t, j){
      var txt = md(t[1]).replace(/_{3,}/g, '</span>' + bf(s, "can", "g_ln") + '<span>');
      return '<div class="g_tt">' + omk(s, "t" + j, "g_c") + '<div><b>' + esc(t[0]) + '.</b> <span>' + txt + '</span></div></div>';
    }).join("");
    var growth = '<div class="g_tt">' + omk(s, "tg", "g_c") + '<div><b>Persönliches Wachstum.</b> Eine Eigenschaft einer anderen Persönlichkeit. Wie veränderst du dich? Von wem lernst du?' + bf(s, "gr1", "g_ln") + '</div></div>';
    var arc = P.bogen ? P.bogen.x.map(function(m){ return [m.t, kst(m.k)]; }) : [];
    var trait = [[P.moment.t, kst(P.moment.k)], ["Ursprungsgeschichte", "3s"], ["Geschärft", "4s"]];
    var fam = M.familie.x.map(function(m){ return [m.t, kst(m.k)]; }), ang = M.angst.x.map(function(m){ return [m.t, kst(m.k)]; });
    var crew = M.crew.x.map(function(m){ return [m.t, kst(m.k)]; });
    var oth = M.weitere.x.map(function(m){ return [m.t, kst(m.k)]; }).concat([["In the Lab", "1s"], ["Portalentdeckung", "2s"]]);
    var leg = "", doom = "", n;
    for(n = 0; n < 7; n++) leg += bf(s, "verm:" + n, "g_ln");
    for(n = 0; n < 4; n++) doom += bf(s, "verh:" + n, "g_ln");
    var name = P.t.replace(/^The /, "");
    return '<div class="bgs"><div class="bgh"><i></i><h2>' + esc(name) + '</h2><i class="g_fl"></i></div><div class="bgc">' +
      '<div class="g_c1">' + lab(s, "name", "Name") + lab(s, "look", "Look") + lab(s, "fam", "Familie") + lab(s, "bond", "Bond") + lab(s, "vibes", "Vibes") + lab(s, "stick", "Sticker usw.") +
      '<h4>Ausrüstung</h4>' + lab(s, "board", "Dein Board") + lab(s, "ray", "Deine Raygun") + '<div class="g_gl">' + gl.join("") + '</div></div>' +
      '<div class="g_c2"><h4>Attitude</h4><p class="g_tx">' + md(T.haltung || "") + '</p><div class="g_dz">' + dz + '</div><h4>Eigenschaften</h4>' + traits + growth + '</div>' +
      '<div class="g_c3"><h4>Legacy</h4>' + leg + '<h4>Doom</h4>' + doom + '<h4>Slams</h4><div class="g_sls">' + bf(s, "slx", "g_big", "") + '<div class="g_sl2">' + bf(s, "sl:0", "g_box") + bf(s, "sl:1", "g_box") + '</div></div></div>' +
      '<div class="g_c4"><h4>Beats</h4>' + beatBlock(s, "Eigenschafts-Beats", trait, "t") + (arc.length ? beatBlock(s, P.bogen.t.replace(/-Bogen$/, "") + "-Bogen", arc, "a") : "") + beatBlock(s, "Familienbogen", fam, "f") + beatBlock(s, "Angstbogen", ang, "g") +
      '<h5>Crew-Beats—</h5>' + plain(crew) + '<h5>Weitere Beats—</h5>' + plain(oth) + '</div></div>' +
      '<div class="bgf"><div class="g_f1"><h4>Trouble</h4><div class="g_ml">' + tr + '</div></div><div class="g_f2"><h4>Style</h4><div class="g_ml">' + st + '</div><span class="g_hn">' + esc((P.styleBonus || "")) + '</span></div></div></div>';
  }

  /* ---------- Crewbogen ---------- */
  function crewBogen(){
    var c = SBC.crew(), s = "c", n, k;
    var hy = function(t, tot, svg){ var key = t === "b" ? "hbs" : "hks", rest = tot - (c[key] || 0), o = ""; for(var j = 0; j < tot; j++) o += '<span class="g_dc"><i class="g_dsv' + (j >= rest ? " spent" : "") + '">' + svg(j >= rest) + '</i>' + mk("g_sq", j >= rest, "SBC.hype('" + t + "'," + j + ")") + '</span>'; return o; };
    var sty = ""; for(k = 0; k < 10; k++) sty += mk("g_dia", k < (c.style || 0), "SBG.cstyle(" + k + ")").replace("></i>", ">" + DIA + "</i>");
    var fame = SB_RUHM.map(function(r){
      if(r.id === 5) return '<div class="g_fm"><div class="g_fh">' + mk("g_c", (c.ruhm || 0) === 5, "SBG.ruhm(5)") + '<b>5: Legenden</b></div>' + bf(s, "leg1", "g_ln") + bf(s, "leg2", "g_ln") + '</div>';
      return '<div class="g_fm"><div class="g_fh">' + mk("g_c", (c.ruhm || 0) === r.id, "SBG.ruhm(" + r.id + ")") + '<b>' + r.id + ': ' + esc(r.t) + '</b></div>' + r.perks.map(function(p, j){ return '<div class="g_gi">' + omk(s, "pk" + r.id + "_" + j, "g_c") + '<span>' + esc(p[0]) + '</span></div>'; }).join("") + '</div>';
    }).join("");
    var fx = ""; for(n = 0; n < 20; n++) fx += '<div class="g_fx">' + bf(s, "fa" + n, "g_sq") + bf(s, "fb" + n, "g_ln") + '</div>';
    return '<div class="bgs cr"><div class="bgh"><i></i><h2>Crew</h2><i class="g_fl"></i></div><div class="bgc2">' +
      '<div class="g_d1">' + lab(s, "name", "Name") + lab(s, "brands", "Marken") + lab(s, "hang", "Hangouts") + '<h4>Brüche</h4><div class="g_two">' + bf(s, "br1", "g_box") + bf(s, "br2", "g_box") + '</div>' +
      '<h4>Hype</h4><p class="g_tx">Tu es für die Crew und boost oder kick nach Bedarf.</p><div class="g_dz">' + hy("b", c.hb, dice) + hy("k", c.hk, bolt) + '</div>' +
      '<div class="g_sf"><div><h4>Style</h4><div class="g_dg">' + sty + '</div></div><div class="g_fa"><h4>Ruhm</h4><div class="g_fg">' + fame + '</div></div></div></div>' +
      '<div class="g_d2"><h4>Fraktionen</h4><div class="g_fxs">' + fx + '</div><div class="g_map"><img src="img/fraktionskarte.webp" alt=""><b style="left:47%;top:64%;transform:rotate(8deg)">Die Erwachenden<br>Gruben</b><b style="left:89%;top:54%">Der<br>Goldene<br>Dschungel</b></div></div></div></div>';
  }

  /* ---------- Seite ---------- */
  function chips(cur){
    var l = SBC.list();
    return '<div class="bgbar noprint"><a class="' + (cur === "" ? "on" : "") + '" onclick="go(\'crew\')">Status</a>' + l.map(function(p, i){ return '<a class="' + (cur === String(i) ? "on" : "") + '" style="--pc:' + sbPers(p.pers).farbe + '" onclick="go(\'crew/' + i + '\')">' + esc(p.name || "Slugger") + '</a>'; }).join("") + '<a class="' + (cur === "crew" ? "on" : "") + '" onclick="go(\'crew/crew\')">Crew</a><span class="sp"></span>' +
      (cur !== "" ? '<button class="pdfb" onclick="SBG.pdf(this)">PDF</button>' : "") + '</div>';
  }
  function view(a){
    var cur = a[0] || "";
    if(cur === "") return chips("") + '<div class="fr">' + SBC.status() + '</div>';
    var sheet = cur === "crew" ? crewBogen() : charBogen(+cur);
    return chips(cur) + '<div class="bgw"><div class="bgz">' + sheet + '</div></div>';
  }
  VIEWS.crew = view;
  /* Eingaben speichern (ohne neu zu zeichnen) */
  document.addEventListener("input", function(e){ var t = e.target; if(t && t.classList && t.classList.contains("bf")) setVal(t.dataset.s, t.dataset.k, t.value); });
  /* Bogen auf Fensterbreite skalieren (Bogen = 1000 px breit) */
  function fit(){ var z = document.querySelector(".bgz"), s = z && z.firstElementChild; if(!s) return; var w = z.parentNode.clientWidth - 8, f = Math.min(1.4, Math.max(.3, w / 1000)); z.style.zoom = f; }
  window.addEventListener("resize", fit);
  var oldAfter = window.afterRender; window.afterRender = function(){ if(oldAfter) oldAfter(); fit(); };

  return {
    tg: function(s, k){ var o = B(s).o; if(o[k]) delete o[k]; else o[k] = 1; save(); render(); },
    cstyle: function(k){ var c = SBC.crew(); c.style = (c.style === k + 1) ? k : k + 1; save(); render(); },
    ruhm: function(r){ var c = SBC.crew(); c.ruhm = r; save(); render(); },
    pdf: function(btn){
      if(!window.FillPDF) return;
      var el = document.querySelector(".bgs"), nm = el && el.querySelector('.bf[data-k="name"]');
      var t = el.classList.contains("cr") ? "Crew" : (el.querySelector("h2") || {}).textContent;
      FillPDF.make(el, {name: "Slugblaster – " + ((nm && nm.value) || t), knopf: btn, marks: [[".g_mk.g_c, .g_mk.g_sq", "on", "punkt"], [".g_mk.g_tri, .g_mk.g_dia", "on", "x"]], before: function(){ document.querySelector(".bgz").style.zoom = 1; }, after: fit});
    }
  };
})();
