/* Savage Worlds: Volltextsuche (Taste „f“, Suchknopf der Kopfzeile) über alle Bereiche + Tastaturkürzel.
   Der Index wird beim ersten Öffnen aufgebaut (GSuche, shared/gsuche.js). Treffer folgen den Genre-Schaltern (Quellen GRW/WB immer,
   FAN/HOR/SF/SUP/DL nur wenn eingeschaltet). Deadlands hat eine eigene Suche (seiten-dl.js) und wird hier nicht indexiert.
   Klick auf einen Treffer: Seite öffnen, Eintrag auswählen (ST-Zustand der jeweiligen Seite), zum Eintrag scrollen und kurz hervorheben. */
"use strict";
(function(){
var TAG = /^(p|li|ph|note|h|bsp|uh|wc|ul|ex|box|tab|tbl|q|l|kar|lnk)$/;
var NOKEY = {id:1, s:1, bk:1, o:1, p:1, t0:1, bild:1, img:1, fn:1, dm:1};

function norm(s){ return String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ß/g, "ss").replace(/\s+/g, " ").trim(); }
function srcs(s){ return s == null ? null : (Array.isArray(s) ? s : [s]); }
function vis(s){
  s = srcs(s); if(!s || !s.length) return true;
  return s.some(function(x){ x = String(x); return x === "GRW" || x === "WB" || (window.gen && gen(x.toLowerCase())); });
}
/* beliebige Datenstruktur -> Textliste (Block-Typkürzel wie "p"/"li" werden weggelassen) */
function txt(x, out){
  out = out || [];
  if(x == null || typeof x === "number" || typeof x === "boolean" || typeof x === "function") return out;
  if(typeof x === "string"){ out.push(x.replace(/\[WC\]/g, "")); return out; }
  if(Array.isArray(x)){
    if(x.length > 1 && typeof x[0] === "string" && TAG.test(x[0])){ if(x[0] === "lnk") out.push(x[1]); else txt(x.slice(1), out); return out; }
    x.forEach(function(y){ txt(y, out); }); return out;
  }
  Object.keys(x).forEach(function(k){ if(!NOKEY[k]) txt(x[k], out); });
  return out;
}
function rowTxt(cols, c, n, ctx){
  var r = (c || []).slice(1).map(function(v, i){ return (cols && cols[i + 1] && v !== "" ? cols[i + 1] + " " : "") + v; }).join(" · ");
  return (ctx ? ctx + (r ? ": " : "") : "") + r + (n ? (r || ctx ? " – " : "") + n : "");
}

/* ---------- Ziel anspringen ---------- */
function own(el){
  var c = el.cloneNode(true);
  [].forEach.call(c.querySelectorAll("i,.pg,.sq,.sg,small,.wcs,em,img"), function(n){ n.remove(); });
  return norm(c.textContent);
}
function findTitle(target){
  var t = norm(target); if(!t) return null;
  var L = [].slice.call(document.querySelectorAll("#app main h2,#app main h3,#app main h4,#app main h5,#app main .hc>b,#app main .tc>b,#app main td:first-child,#app main th,#app main li>b:first-child,#app main p>b:first-child,#app main .rk span,#app main summary"));
  var hit = null;
  L.some(function(el){ var o = own(el); if(o === t){ hit = el; return true; } return false; });
  if(!hit) L.some(function(el){ var o = own(el); if(o.indexOf(t) === 0 && /[ (:\/,]/.test(o.charAt(t.length))){ hit = el; return true; } return false; });
  return hit;
}
function findWord(q){
  var w = norm(q).split(/\s+/).filter(function(x){ return x.length > 1 || /\d/.test(x); });
  if(!w.length) return null;
  var res = w.map(function(x){ return new RegExp("(^|[^a-z0-9])" + x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")); });
  var L = [].slice.call(document.querySelectorAll("#app main p,#app main li,#app main td,#app main h3,#app main h4,#app main h5,#app main blockquote,#app main .ed"));
  var hit = null;
  L.some(function(el){ var n = norm(el.textContent); if(res.every(function(r){ return r.test(n); })){ hit = el; return true; } return false; });
  if(!hit) L.some(function(el){ var n = norm(el.textContent); if(res[0].test(n)){ hit = el; return true; } return false; });
  return hit;
}
function flash(el){
  var f = el.closest("tr,.hc,li") || el;
  [].forEach.call(document.querySelectorAll(".sw-flash"), function(n){ n.classList.remove("sw-flash"); });
  void f.offsetWidth; f.classList.add("sw-flash");
  var tall = f.getBoundingClientRect().height > 320;
  f.scrollIntoView({block: tall ? "start" : "center", behavior: "auto"});
  setTimeout(function(){ f.classList.remove("sw-flash"); }, 2600);
}
function focusLater(target, detail, q, n){
  setTimeout(function(){
    var m = document.querySelector("#app main"), el = null;
    if(m){
      if(detail) el = document.querySelector("#app " + detail);
      if(!el && target) el = target.charAt(0) === "#" ? document.getElementById(target.slice(1)) : findTitle(target);
      if(!el && q) el = findWord(q);
    }
    if(el){ flash(el); return; }
    if(!m && n < 12) return focusLater(target, detail, q, n + 1);
    window.scrollTo(0, 0);
  }, n ? 90 : 120);
}
/* Ziel: Hash + Zustand setzen (pre) + Scrollziel (Titel / "#id") + optional Detailkarte (Selektor) */
function nav(hash, pre, target, detail){
  return function(q){
    try{ if(pre) pre(); }catch(e){ if(window.console) console.warn("Suche", e); }
    save();
    if(location.hash === "#" + hash) render(); else location.hash = hash;
    focusLater(target, detail, q, 0);
  };
}

/* ---------- Overlay-Anpassung ---------- */
GSuche.filter = function(m){ return vis(m.s); };
GSuche.badge = function(m){
  var s = srcs(m.s); if(!s) return "";
  return s.filter(function(x){ return x && x !== "GRW"; }).map(function(x){ return '<i class="sq sq-' + String(x).toLowerCase() + '">' + x + "</i>"; }).join("");
};
(function(){
  var st = document.createElement("style");
  st.textContent = ".gs .sq{font:600 10px/1 Oswald,sans-serif;font-style:normal;letter-spacing:.06em;padding:2px 5px;margin-left:7px;vertical-align:middle;color:#fff;background:#7a7067;border-radius:2px}" +
    ".gs .sq-fan{background:#2f7a4a}.gs .sq-hor{background:#7a2230}.gs .sq-sf{background:#1f6f9a}.gs .sq-sup{background:#c2571c}.gs .sq-dl{background:#5a3a1a}.gs .sq-wb{background:#6b6258}" +
    ".sw-flash{scroll-margin-top:150px;animation:swf 2.6s ease-out}" +
    "@keyframes swf{0%,45%{outline:3px solid #e0b028;outline-offset:3px;background-color:rgba(224,176,40,.3)}100%{outline-color:rgba(224,176,40,0);background-color:rgba(224,176,40,0)}}";
  document.head.appendChild(st);
})();

/* ---------- Index ---------- */
GSuche.add(function(add){
  function A(t, b, h, d, s){ add(t, b, h, d, {s: srcs(s)}); }
  var W = window;

  /* Talente */
  (W.SW_TALENTE || []).forEach(function(t, i){
    A(t.n, "Talente", nav("charaktere/talente", function(){ ST.tk = t.k; ST.to = i; }, t.n, ".td"), [t.n, t.k, t.v, t.b], t.s);
  });
  /* Völker */
  var VL = W.allVoelker ? allVoelker() : (W.SW_VOELKER || []);
  VL.forEach(function(v, i){
    A(v.n, "Völker", nav("charaktere/voelker", function(){ ST.vk = 0; ST.vo = i; }, v.n, ".td"), [v.n, v.b, v.e, v.v], v.s);
  });
  var VE = W.SW_VOLKERSCHAFFEN_GRW;
  if(VE) VE.pos.concat(VE.neg).forEach(function(x){
    A(x.n, "Völker", nav("charaktere/voelker", function(){ ST.vk = 1; }, x.n), [x.n, x.w, x.t].concat(["Volkseigenart"]), "GRW");
  });
  (W.SW_VOLKERSCHAFFEN_ZUS || []).forEach(function(x){
    A(x.n, "Völker", nav("charaktere/voelker", function(){ ST.vk = 1; }, x.n), [x.n, x.w, x.t, "Volkseigenart"], x.s);
  });
  /* Handicaps */
  (W.SW_HANDICAPS || []).forEach(function(h){
    A(h.n, "Handicaps", nav("charaktere/handicaps", function(){ ST.hf = ""; }, h.n), [h.n, h.w, h.t], h.s);
  });
  /* Eigenschaften und Fertigkeiten */
  (W.SW_ATTR || []).forEach(function(a){ A(a.n, "Fertigkeiten", nav("charaktere/eigenschaften", null, a.n), [a.n, a.t], "GRW"); });
  (W.SW_SKILLS || []).concat(W.SW_SKILLS_ZUS || []).forEach(function(k){
    A(k.n, "Fertigkeiten", nav("charaktere/eigenschaften", null, k.n), [k.n, k.a, k.t], k.s || "GRW");
  });
  /* Aufstiege */
  var AU = W.SW_AUFSTIEG;
  if(AU){
    var ah = nav("charaktere/aufstiege", null, null);
    A("Aufstiege", "Aufstiege", ah, [AU.intro, AU.optT, AU.opt], "GRW");
    A("Rang", "Aufstiege", nav("charaktere/aufstiege", null, "Rang"), [AU.rang, AU.ranks], "GRW");
    AU.sec.forEach(function(x){ A(x[0], "Aufstiege", nav("charaktere/aufstiege", null, x[0]), x, "GRW"); });
  }
  (W.SW_AUFSTIEG_ZUS || []).forEach(function(x){ A(x.h, "Aufstiege", nav("charaktere/aufstiege", null, x.h), [x.h, x.i, x.c, x.tab], x.s); });

  /* Ausrüstung: Tabellen zeilenweise */
  function equip(bereich, hash, setFn, sec, cols, s){
    var set = function(){ setFn(sec.k || sec.h); };
    A(sec.h, bereich, nav(hash, set, sec.h), [sec.h, sec.i], s);
    (sec.g || []).forEach(function(g){
      if(g.h) A(g.h, bereich, nav(hash, set, g.h), [g.h, g.d], s);
      (g.r || []).forEach(function(r){ A(r.c[0], bereich, nav(hash, set, r.c[0]), rowTxt(cols, r.c, r.n, g.h), s); });
    });
    (sec.cards || []).forEach(function(c){ A(c[0], bereich, nav(hash, set, c[0]), [c[0], c[1]], s); });
  }
  var GKS = ["FAN", "HOR", "SF", "SUP"];
  function zusAll(pre){ var L = []; GKS.forEach(function(g){ (W["SW_" + pre + "_" + g] || []).forEach(function(z){ L.push(z); }); }); return L; }
  var RU = W.SW_RUESTUNG;
  if(RU){
    var rc = ["Gegenstand", "Panzerung", "Mindeststärke", "Gewicht (kg)", "Kosten"], sc = ["Typ", "Parade", "Deckung", "Mindeststärke", "Gewicht (kg)", "Kosten"];
    A("Rüstung", "Rüstung", nav("ausruestung/ruestung", function(){ ST.rk = RU.s[0].h; }, null), RU.i, "GRW");
    RU.s.forEach(function(s){ equip("Rüstung", "ausruestung/ruestung", function(k){ ST.rk = k; }, s, rc, "GRW"); });
    equip("Rüstung", "ausruestung/ruestung", function(k){ ST.rk = k; }, RU.sh, sc, "GRW");
  }
  zusAll("RUESTUNG").forEach(function(z){ equip("Rüstung", "ausruestung/ruestung", function(k){ ST.rk = k; }, z, z.cols, z.s); });
  var WS = W.SW_WAFFEN;
  function wset(k){ var r = k; (W.WSET || []).forEach(function(w){ if(w[0] === k || w[1].some(function(n){ return n.toLowerCase() === String(k).toLowerCase(); })) r = w[0]; }); return r; }
  (WS || []).forEach(function(s){ equip("Waffen", "ausruestung/waffen", function(k){ ST.wk2 = wset(k); }, s, s.cols, "GRW"); });
  zusAll("WAFFEN").forEach(function(z){ equip("Waffen", "ausruestung/waffen", function(k){ ST.wk2 = wset(k); }, z, z.cols, z.s); });
  var FZ = W.SW_FAHRZEUGE;
  if(FZ){
    FZ.s.forEach(function(s){ equip("Fahrzeuge", "ausruestung/fahrzeuge", function(k){ ST.fk2 = k; }, s, FZ.cols, "GRW"); });
    var fa = function(){ ST.fk2 = "Anmerkungen"; };
    A("Fahrzeuge › Anmerkungen", "Fahrzeuge", nav("ausruestung/fahrzeuge", fa, null), FZ.i, "GRW");
    (FZ.a || []).concat(FZ.gl || []).forEach(function(c){ A(c[0], "Fahrzeuge", nav("ausruestung/fahrzeuge", fa, c[0]), [c[0], c[1]], "GRW"); });
  }
  zusAll("FAHRZEUGE").forEach(function(z){ equip("Fahrzeuge", "ausruestung/fahrzeuge", function(k){ ST.fk2 = k; }, z, z.cols, z.s); });

  /* Allgemeine Ausrüstung */
  var AL = W.SW_AUSR_ALLG;
  function ak(k){ return function(){ ST.ak = k; }; }
  if(AL){
    var gc = ["Gegenstand", "Kosten", "Gewicht (kg)"];
    AL.sec.forEach(function(s){
      A(s.h, "Allgemeine Ausrüstung", nav("ausruestung/allgemein", ak("Ausrüstung"), s.h), s.h, "GRW");
      s.r.forEach(function(r){ A(r[0], "Allgemeine Ausrüstung", nav("ausruestung/allgemein", ak("Ausrüstung"), r[0]), rowTxt(gc, r.slice(0, 3), r[3], s.h), "GRW"); });
    });
    (AL.mun.r || []).forEach(function(r){ A(r[0], "Allgemeine Ausrüstung", nav("ausruestung/allgemein", ak("Munition"), r[0]), rowTxt(AL.mun.cols, r.slice(0, 3), r[3], "Munition"), "GRW"); });
    A("Belastung", "Allgemeine Ausrüstung", nav("ausruestung/allgemein", ak("Belastung"), null), [AL.last.i, AL.last.r], "GRW");
  }
  var FA = W.SW_FAN_AUSR;
  if(FA){
    var fc = ["Gegenstand", "Gewicht (kg)", "Kosten (GM)"];
    A("Währung und Startkapital", "Allgemeine Ausrüstung", nav("ausruestung/allgemein", ak("Fantasy-Ausrüstung"), "Währung und Startkapital"), [FA.start, FA.waehrung], "FAN");
    FA.allg.forEach(function(s){
      A(s.h, "Allgemeine Ausrüstung", nav("ausruestung/allgemein", ak("Fantasy-Ausrüstung"), s.h), [s.h, s.d], "FAN");
      s.r.forEach(function(r){ A(r[0], "Allgemeine Ausrüstung", nav("ausruestung/allgemein", ak("Fantasy-Ausrüstung"), r[0]), rowTxt(fc, r.slice(0, 3), r[3], s.h), "FAN"); });
    });
    A("Gifte", "Allgemeine Ausrüstung", nav("ausruestung/allgemein", ak("Gifte"), null), FA.gift.i, "FAN");
    FA.gift.r.forEach(function(r){ A(r[0], "Allgemeine Ausrüstung", nav("ausruestung/allgemein", ak("Gifte"), r[0]), rowTxt(FA.gift.cols, r.slice(0, 4), r[4], "Gift"), "FAN"); });
    FA.material.forEach(function(m){ A(m[0], "Allgemeine Ausrüstung", nav("ausruestung/allgemein", ak("Besondere Materialien"), m[0]), [m[0], m[1]], "FAN"); });
  }
  (W.SW_AUSR_X || []).forEach(function(x){
    var box;
    try{ box = document.createElement("div"); box.innerHTML = x.fn(); }catch(e){ return; }
    A(x.k, "Allgemeine Ausrüstung", nav("ausruestung/allgemein", ak(x.k), null), [x.k], x.s);
    [].forEach.call(box.querySelectorAll("h4,h5"), function(h){ var t = h.textContent.replace(/S\. \d+/g, "").trim(); if(t) A(t, "Allgemeine Ausrüstung", nav("ausruestung/allgemein", ak(x.k), t), t, x.s); });
    var rows = [], last = null;
    [].forEach.call(box.querySelectorAll("tr,.hc"), function(el){
      if(el.tagName === "TR"){
        var td = [].map.call(el.children, function(c){ return c.textContent.trim(); });
        if(el.classList.contains("en") || td.length < 2){ if(last) last.n += " " + td.join(" "); return; }
        last = {t: td[0], d: td.slice(1).filter(Boolean).join(" · "), n: ""}; rows.push(last);
      } else {
        var b = el.querySelector("b"), nmx = b ? b.textContent.replace(/S\. \d+/g, "").trim() : "";
        if(nmx) rows.push({t: nmx, d: el.textContent, n: ""});
      }
    });
    rows.forEach(function(r){ A(r.t, "Allgemeine Ausrüstung", nav("ausruestung/allgemein", ak(x.k), r.t), [r.d, r.n], x.s); });
  });

  /* Bauen & Basen */
  var BCOL = ["FAN", "HOR", "SF", "SUP"];
  BCOL.forEach(function(g){
    (W["SW_BAU_" + g] || []).forEach(function(z){
      var set = function(){ ST.bk = z.k; }, cur = {h: z.h, d: []};
      var segs = [cur];
      z.b.forEach(function(b){ if(b.h){ cur = {h: b.h, d: []}; segs.push(cur); } else cur.d.push(b); });
      segs.forEach(function(sg, si){
        var title = si ? z.h + " › " + sg.h : z.h;
        A(title, "Bauen & Basen", nav("ausruestung/bauen", set, sg.h), [sg.h, sg.d.map(function(b){ return b.p ? b.p : b.k ? b.k : b.t ? [b.t, b.r] : ""; })], z.s);
        sg.d.forEach(function(b){
          if(b.k) b.k.forEach(function(c){ A(c[0], "Bauen & Basen", nav("ausruestung/bauen", set, c[0]), [c[0], c[1]], z.s); });
          else if(b.t && b.r && !b.kart) b.r.forEach(function(r){ var N = b.t.length; A(r[0], "Bauen & Basen", nav("ausruestung/bauen", set, r[0]), rowTxt(b.t, r.slice(0, N), r.slice(N).join(" "), sg.h), z.s); });
          else if(b.t && b.r && b.kart) b.r.forEach(function(r){ A(r[0], "Bauen & Basen", nav("ausruestung/bauen", set, r[0]), [r], z.s); });
        });
      });
    });
  });

  /* Regeln (GRW + Zusatzregeln) */
  var RG = W.SW_REGELN, RZ = W.SW_REGELN_ZUS || {};
  if(RG) Object.keys(RG).forEach(function(pid){
    var P = RG[pid];
    function idx(cat){
      var L = P.g.map(function(g){ return g.t; });
      (RZ[pid] || []).forEach(function(z){ if(vis(z.s.map(function(x){ return x[0]; })) && L.indexOf(z.cat) < 0) L.push(z.cat); });
      return Math.max(0, L.indexOf(cat));
    }
    function set(cat){ return function(){ ST.rg = ST.rg || {}; ST.rg[pid] = idx(cat); }; }
    if(P.lead) A(P.t, "Regeln", nav("regeln/" + pid, set(P.g[0].t), null), [P.t, P.lead], "GRW");
    P.g.forEach(function(g){
      g.s.forEach(function(s){
        A(P.t + " › " + s.h, "Regeln", nav("regeln/" + pid, set(g.t), s.h), [s.h, s.b], "GRW");
      });
    });
    (RZ[pid] || []).forEach(function(z){
      A(P.t + " › " + (z.h || z.cat), "Regeln", nav("regeln/" + pid, set(z.cat), z.h || z.cat), [z.h, z.b], z.s.map(function(x){ return x[0]; }));
    });
  });

  /* Werkzeugkasten */
  (W.SW_WK || []).forEach(function(e){
    var hash = "werkzeugkasten/" + e.tab, set = function(){ ST.wkSel = ST.wkSel || {}; ST.wkSel[e.tab] = e.id; };
    var cur = {h: null, d: []}, segs = [cur];
    e.b.forEach(function(b){ if(b[0] === "h"){ cur = {h: b[1], d: []}; segs.push(cur); } else cur.d.push(b); });
    segs.forEach(function(sg){
      if(!sg.h && !sg.d.length) return;
      A(sg.h && sg.h !== e.t ? e.t + " › " + sg.h : e.t, "Werkzeugkasten", nav(hash, set, sg.h || e.t), [sg.h || e.t, sg.d], e.s);
    });
  });

  /* Mächte */
  var AHI = -1;
  (W.SW_MREGELN || []).forEach(function(sec){
    if((sec.bl || []).some(function(b){ return b.ahcards; })) AHI = sec.id;
  });
  (W.SW_AH || []).forEach(function(a, i){
    A(a.n, "Arkane Hintergründe", nav("maechte/hintergruende", function(){ ST.mh = AHI; ST.ao = i; }, a.n, ".td"), [a.n, a.f, a.req, a.b, a.sp, a.av], a.s);
  });
  (W.SW_MACHTE || []).forEach(function(m, i){
    A(m.n, "Mächte", nav("maechte/liste", function(){ ST.mr = -1; ST.ma = 0; ST.mo = i; }, m.n, ".td"),
      [m.n, m.au, m.rw, m.b, m.tab && m.tab.r, (m.m || []).map(function(x){ return x.slice(0, 3); }), (m.k || []).map(function(k){ return [k.h, k.b]; })], m.s);
  });
  if(W.SW_MINTRO) A("Machtliste › Einleitung", "Mächte", nav("maechte/liste", function(){ ST.mr = -1; ST.ma = 0; ST.mo = -1; }, "#ms-einleitung"), [W.SW_MINTRO.b, (W.SW_MINTRO.k || []).map(function(k){ return [k.h, k.b]; })], "GRW");
  (W.SW_MREGELN || []).forEach(function(sec){
    var set = function(){ ST.mh = sec.id; };
    (sec.bl || []).forEach(function(b){
      if(b.ahcards) return;
      if(b.mods){
        var M = (W.SW_MMODS || []).concat(W.SW_MMODS_X || []);
        M.forEach(function(m){ A(m[0], "Mächte", nav("maechte/hintergruende", set, m[0]), [m[0], m[1], m[2]], m[3] || "GRW"); });
        return;
      }
      var title = b.h ? sec.t + " › " + b.h : sec.t;
      A(title, "Mächte", nav("maechte/hintergruende", set, b.h || sec.t), [b.h, b.b, b.tab && b.tab.r, b.cards, b.z, b.dom], b.s || sec.s || "GRW");
      (b.cards || []).forEach(function(c){ A(c[0], "Mächte", nav("maechte/hintergruende", set, c[0]), [c[0], c[1]], b.s || sec.s || "GRW"); });
    });
  });

  /* Bestiarium */
  (W.SW_KR || []).forEach(function(k, i){
    A(k.n, "Bestiarium", nav("bestiarium/tiere", function(){ ST.kk = "alle"; ST.kq = ""; ST.kw = 0; ST.ko = i; }, k.n, ".kd"), [k.n, k.k, k.g, k.d, k.f, k.x, k.sf, k.ai], k.s);
  });
  var BE = W.SW_BEST;
  if(BE){
    var kk = function(id){ return function(){ ST.kk = id; ST.kq = ""; ST.ko = -1; }; };
    A("Bestiarium › Einleitung", "Bestiarium", nav("bestiarium/tiere", kk("einl"), null), [BE.einl, BE.bed, BE.wc, BE.kint], "GRW");
    (BE.fah || []).forEach(function(f){ A(f.n, "Bestiarium", nav("bestiarium/tiere", kk("faehig"), f.n), [f.n, f.t], f.s || "GRW"); });
    (BE.vari || []).forEach(function(v){ A(v.n, "Bestiarium", nav("bestiarium/tiere", kk("vari"), v.n), [v.n, v.b], v.s); });
    if(BE.gt) A("Größentabelle", "Bestiarium", nav("bestiarium/tiere", kk("groesse"), null), [BE.gt.i, BE.gt.cols, BE.gt.r], "GRW");
  }
  if(W.SW_SCHAB) A("Schablonen", "Bestiarium", nav("bestiarium/schablonen", null, null), [W.SW_SCHAB.i, W.SW_SCHAB.s, W.SW_SCHAB.o, W.SW_SCHAB.tab], "GRW");

  /* Spielleitung und Genres (gleiches Datenformat: [{t, s:[{h,p,b}]}]) */
  function sl(hash, sets, s){
    sets.forEach(function(S){
      (S || []).forEach(function(e){
        e.s.forEach(function(sc, k){
          var same = sc.h === e.t;
          A(same ? e.t : e.t + " › " + sc.h, hash.indexOf("genres") === 0 ? "Genres" : "Spielleitung", nav(hash, null, sc.h || e.t), [sc.h, sc.b], s);
        });
      });
    });
  }
  sl("spielleitung/grundlagen", [W.SW_SL_GRW], "GRW");
  sl("spielleitung/weltenbau", [W.SW_SL_WB], "WB");
  sl("spielleitung/spielstil", [W.SW_SL_RISIKO, W.SW_SL_KIND], "WB");
  sl("spielleitung/gruppe", [W.SW_SL_STAMM], "WB");
  sl("spielleitung/veroeffentlichen", [W.SW_SL_PUB], "WB");
  sl("spielleitung/anekdoten", [W.SW_SL_ANEK], "WB");
  sl("spielleitung/motorhaube", [W.SW_SL_MOTOR], "WB");
  [["fan", "FAN"], ["hor", "HOR"], ["sf", "SF"], ["sup", "SUP"]].forEach(function(g){
    var d = "SW_GEN_" + g[1];
    sl("genres/" + g[0], [W[d], W[d + "2"], W[d + "3"]], g[1]);
  });
});

/* Deadlands hat seine eigene Suche (seiten-dl.js); außerhalb von Deadlands die Volltextsuche */
window.sucheOpen = function(q){
  if(window.dlIn && dlIn() && window.dlSearch){ dlSearch(); return; }
  GSuche.open(q);
};

/* ---------- Tastatur ---------- */
document.addEventListener("keydown", function(e){
  var t = e.target || {};
  if(/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName || "") || t.isContentEditable) return;
  if(e.defaultPrevented || e.altKey || e.metaKey || e.shiftKey) return;
  var bv = document.getElementById("bvOverlay"), mm = document.getElementById("mmP");
  if(document.body.classList.contains("sf-open") || document.querySelector(".modal,.gs,.dsr,.gal-on,.zg-fs") || (bv && !bv.hidden) || (mm && mm.classList.contains("on"))) return;
  var dl = document.body.classList.contains("dl-mode"), k = e.key;
  function list(sel){ return [].slice.call(document.querySelectorAll(sel)); }
  function step(L, d, strict){
    if(!L.length) return;
    var i = -1; L.forEach(function(a, j){ if(a.classList.contains("on")) i = j; });
    var n = i < 0 ? (d > 0 ? 0 : L.length - 1) : i + d;
    if(n < 0 || n >= L.length) return;
    L[n].click();
  }
  if(k === "ArrowLeft" || k === "ArrowRight"){
    if(dl) return;
    var d = k === "ArrowLeft" ? -1 : 1, L = e.ctrlKey ? list("#ktabs a") : list("#sub a");
    if(!L.length) return;
    e.preventDefault(); step(L, d);
    if(!e.ctrlKey) window.scrollTo(0, 0);
  } else if((k === "ArrowUp" || k === "ArrowDown") && !e.ctrlKey){
    var S = list(".lay .side > a:not(.sb)");
    if(!S.length) return;
    e.preventDefault(); step(S, k === "ArrowUp" ? -1 : 1);
  } else if(k === "Escape" && !e.ctrlKey){
    if(dl) return; /* Deadlands: eigener Zurück-Pfad in seiten-dl.js */
    if(typeof route === "function" && route().a !== "start") go("start");
  }
});
})();
