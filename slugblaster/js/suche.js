/* SLUGBLASTER – Volltextsuche über alles (Taste „/“ oder Lupe im Menü). Index wird beim ersten Öffnen aus den Datendateien gebaut. */
var SBS = (function(){
  var IDX = null, SKIP = {farbe:1, c:1, bild:1, img:1, id:1, p:1, fig:1, go:1, x0:1, y0:1};
  function flat(o, out){
    if(o == null) return out;
    if(typeof o === "string"){ if(o.charAt(0) !== "#" && !/^(lila|pink|blau|gelb|gruen|orange|box)$/.test(o)) out.push(o.replace(/<br>/g, " ").replace(/\u00ad/g, "")); return out; }
    if(typeof o === "number" || typeof o === "boolean") return out;
    if(Array.isArray(o)){ o.forEach(function(v){ flat(v, out); }); return out; }
    Object.keys(o).forEach(function(k){ if(!SKIP[k]) flat(o[k], out); });
    return out;
  }
  /* Blöcke, die ihre Daten aus anderen Globals ziehen (Beats, Gelegenheiten, Run-Ideen, Preise, SL-Aktionen, Gefahren …), mitindexieren */
  function refs(o, out){
    if(!o || typeof o !== "object") return out;
    if(Array.isArray(o)){ o.forEach(function(v){ refs(v, out); }); return out; }
    var b = o.t, k = o.k, R = window.SBR || {};
    if(b === "mom" && window.SB_MOMENTE && SB_MOMENTE[k]) out.push(SB_MOMENTE[k]);
    else if(b === "gel"){ var G = k === "g" ? window.SB_GELEGENHEITEN : window.SB_HERAUSFORDERUNGEN; if(G) out.push(o.m ? G.mods : G); }
    else if(b === "w66") out.push([window.SB_TOUREN, window.SB_TOUREN_NOTIZ]);
    else if(b === "preise") out.push(window.SB_PREISE);
    else if(b === "slakt") out.push(window.SB_SLAKTIONEN);
    else if(b === "slbite") out.push(window.SB_SLAKTIONEN && SB_SLAKTIONEN.biteText);
    else if(b === "gefahr" && window.SB_GEFAHR){ out.push(SB_GEFAHR[k]); if(k === "disaster") out.push(SB_GEFAHR.ideen); }
    else if(b === "hind") out.push(window.SB_HINDERNISSE);
    else if(b === "cyc") out.push(R.STA);
    else if(b === "party") out.push(R.PARTY);
    Object.keys(o).forEach(function(kk){ if(o[kk] && typeof o[kk] === "object") refs(o[kk], out); });
    return out;
  }
  function add(t, ctx, r, p, data, book){
    var x = flat([data, refs(data, [])], []).join(" ").replace(/\*\*|__|\*/g, "").replace(/\s+/g, " ");
    IDX.push({t:String(t).replace(/<br>/g, " "), ctx:ctx, r:r, p:p, b:book, x:x, l:(t + " " + x).toLowerCase()});
  }
  function build(){
    IDX = [];
    [[window.SB_REGELN, "Spielablauf"], [window.SB_SPIELLEITUNG, "Spielleitung"], [window.SB_VERAENDERN, "Spiel verändern"]].forEach(function(b){
      if(!b[0]) return; (b[0].s || []).forEach(function(s){ add(s.t, b[1], "nach/" + b[0].id + "/" + s.id, s.p, s); });
    });
    if(window.SB_DEMO) add("Demo", "Nachschlagen", "nach/demo", null, SB_DEMO);
    if(window.SB_MACH) add("Mach dich selbst", "Teenager", "nach/teenager/mach", SB_MACH.p, SB_MACH);
    (window.SB_PERS || []).forEach(function(p){ add(p.t, "Teenager › Persönlichkeiten", "nach/teenager/pers/" + p.id, p.p, [p, (window.SB_PTEXT || {})[p.id], (((window.SB_PTEXT || {})[p.id] || {}).fig || {notes:[]}).notes.map(function(n){ return n.t; })]); });
    if(window.SB_SIGINTRO) add("Signaturen", "Teenager › Signaturen", "nach/teenager/sig", SB_SIGINTRO.p, SB_SIGINTRO);
    (window.SB_SIG || []).forEach(function(s){ add(s.t, "Teenager › Signaturen", "nach/teenager/sig/" + s.id, s.p, [s, window.SB_SIGINTRO]); });
    if(window.SB_AUSR){ var A = SB_AUSR; add("Ausrüstung", "Teenager", "nach/teenager/ausr", A.gear && A.gear.p, [A.gear, A.handy, A.ray, A.board, A.andere]); add("Sticker, Pins, Aufnäher usw.", "Teenager", "nach/teenager/stk", A.sticker && A.sticker.p, A.sticker); }
    if(window.SB_CREWBAU) add("Crew bauen", "Teenager", "nach/teenager/crew", SB_CREWBAU.p, SB_CREWBAU);
    if(window.SB_RUHM_INTRO) add("Ruhm", "Teenager › Ruhm", "nach/teenager/ruhm", SB_RUHM_INTRO.p, SB_RUHM_INTRO);
    (window.SB_RUHM || []).forEach(function(r){ add("Ruhm " + r.id + ": " + r.t, "Teenager › Ruhm", "nach/teenager/ruhm", 76, r); });
    (window.SB_WELTEN || []).forEach(function(w){ if(w.heim) return; add(w.t, "Multiversum", "welten/" + w.id, w.p, (window.SB_WELT || {})[w.id] || {}); });
    if(window.SB_MONSTER_INTRO) add("Monster", "Monster", "monster", SB_MONSTER_INTRO.p, SB_MONSTER_INTRO);
    if(window.SB_MONSTERBAU) add("Mach ein Monster", "Monster", "monster/bau", SB_MONSTERBAU.p, SB_MONSTERBAU);
    (window.SB_MONSTER || []).forEach(function(m){ add(m.t, "Monster", "monster", m.p, m); });
    if(window.SB_BONUS) add("Bonus-Welten", "Multiversum", "welten/bonus", null, SB_BONUS);
    if(window.SB_BAUEN) add("Welt bauen", "Multiversum", "welten/bauen", SB_BAUEN.p, SB_BAUEN);
    if(window.SB_PORTALE) add("Portale & Dünnzonen", "Multiversum", "welten/portale", null, [SB_PORTALE, "Slugger-Slang Downtime-Beat"]);
    if(window.SB_FRAKREGELN) add("Fraktionen", "Fraktionen", "fraktionen", SB_FRAKREGELN.p, SB_FRAKREGELN);
    if(window.SB_PERSON) add("Mach eine Person", "Fraktionen", "fraktionen/person", SB_PERSON.p, SB_PERSON);
    if(window.SB_CROWDSIT) add("Crowd-Situation", "Fraktionen", "fraktionen/cliquen", null, SB_CROWDSIT);
    if(window.SB_SCHIRM) add("Spielleiterschirm", "Nachschlagen", "schirm", null, SB_SCHIRM);
    (window.SB_FRAKTIONEN || []).forEach(function(f){ add(f.t, "Fraktionen", "fraktionen/" + f.g, f.p, f); });
    if(window.SB_HILLVIEW) add("Hillview", "Heimat", "heimat", SB_HILLVIEW.p, SB_HILLVIEW);
    (window.SB_HEIMATORTE || []).forEach(function(o){ add(o.t, "Heimat", "heimat/" + o.id, o.p, o); });
    if(window.SB_OO){
      var O = SB_OO, OB = "sb_oolroob";
      add("Oolroob", "Oolroob", "oolroob/ueber", O.ueber && O.ueber.p, [O.ueber, O.gebiete], OB);
      (O.orte || []).forEach(function(o){ add(o[1], "Oolroob › Roob", "oolroob/roob", null, o[2], OB); });
      add("Probleme & Checkpoints", "Oolroob", "oolroob/probleme", null, [O.probleme, O.checkpoints, O.cpNote, O.mega], OB);
    }
    if(window.SB_OO_FRAK) SB_OO_FRAK.gruppen.forEach(function(g){ (g.f || []).forEach(function(f){ add(f.t, "Oolroob › " + g.t, "oolroob/fraktionen", f.p, f, "sb_oolroob"); }); if(g.situation || g.megashift) add(g.t, "Oolroob › Fraktionen", "oolroob/fraktionen", g.p, [g.situation, g.megashift], "sb_oolroob"); });
    if(window.SB_OO_C){
      var SG = SB_OO_C.sig || {}; (Array.isArray(SG) ? SG : SG.neu || []).forEach(function(s){ add(s.t, "Oolroob › Signaturen", "oolroob/signaturen", s.p || SG.p, s, "sb_oolroob"); });
      (SB_OO_C.kreaturen || []).forEach(function(k){ add(k.t, "Oolroob › Kreaturen", "oolroob/kreaturen", k.p, k, "sb_oolroob"); });
      add("Snacks & Slang", "Oolroob", "oolroob/misc", null, [SB_OO_C.snacks, SB_OO_C.slang], "sb_oolroob");
    }
  }
  function e(s){ return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
  function open(){
    var old = document.getElementById("sbsm"); if(old){ old.remove(); return; }
    if(!IDX) build();
    var m = modal('<input id="sbq" class="sqin" placeholder="Suchen …" autocomplete="off"><div id="sbr" class="sr"></div>');
    m.id = "sbsm"; m.classList.add("smodal");
    var q = document.getElementById("sbq"); q.focus();
    q.oninput = function(){ run(q.value); };
    q.onkeydown = function(ev){
      var l = [].slice.call(document.querySelectorAll("#sbr a")), i = l.indexOf(document.querySelector("#sbr a.sel"));
      if(ev.key === "Enter"){ var a = l[i < 0 ? 0 : i]; if(a) a.click(); }
      if(ev.key === "ArrowDown" || ev.key === "ArrowUp"){ ev.preventDefault(); if(!l.length) return; if(i >= 0) l[i].classList.remove("sel"); i = Math.max(0, Math.min(l.length - 1, i + (ev.key === "ArrowDown" ? 1 : -1))); l[i].classList.add("sel"); l[i].scrollIntoView({block:"nearest"}); }
      if(ev.key === "Escape") m.remove();
    };
  }
  function run(v){
    var box = document.getElementById("sbr"); v = v.replace(/\u00ad/g, "").trim().toLowerCase();
    if(v.length < 2){ box.innerHTML = ""; return; }
    var ws = v.split(/\s+/), res = [];
    IDX.forEach(function(x){
      if(!ws.every(function(w){ return x.l.indexOf(w) >= 0; })) return;
      var tl = x.t.toLowerCase(), sc = 0;
      ws.forEach(function(w){ if(tl.indexOf(w) === 0) sc += 6; else if(tl.indexOf(w) >= 0) sc += 4; sc += Math.min(3, x.l.split(w).length - 1) * .3; });
      res.push({x:x, s:sc});
    });
    res.sort(function(a, b){ return b.s - a.s; });
    var tot = res.length; res = res.slice(0, 40);
    box.innerHTML = res.length ? res.map(function(o){
      var x = o.x, i = x.x.toLowerCase().indexOf(ws[0]), sn;
      if(i >= 0){ var a = Math.max(0, i - 50); sn = (a ? "… " : "") + x.x.slice(a, i + 110) + " …"; } else sn = x.x.slice(0, 120);
      sn = e(sn); ws.forEach(function(w){ sn = sn.replace(new RegExp("(" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "<mark>$1</mark>"); });
      return '<a href="#' + x.r + '" onclick="document.getElementById(\'sbsm\').remove()"><b>' + e(x.t) + '</b><span class="sc">' + e(x.ctx) + (x.p ? " · S. " + x.p : "") + '</span><span class="sn">' + sn + '</span></a>';
    }).join("") + (tot > 40 ? '<p class="sc" style="padding:8px">' + tot + ' Treffer, die ersten 40</p>' : "") : '<p class="sc" style="padding:12px">Keine Treffer</p>';
  }
  document.addEventListener("keydown", function(ev){
    if(ev.key !== "/" || /INPUT|TEXTAREA|SELECT/.test((ev.target || {}).tagName || "") || ev.ctrlKey || ev.metaKey) return;
    ev.preventDefault(); open();
  });
  return {open:open};
})();
VIEWS.galerie = function(){ setTimeout(function(){ location.replace("#start"); Galerie.open("slugblaster"); }, 0); return ""; };
