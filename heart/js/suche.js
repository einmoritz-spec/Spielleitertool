/* Volltextsuche (Taste „f“): Regelbuch, Landmarken, Gegner, Fallout, Kampagne „Dagger in the Heart“ */
"use strict";
GSuche.add(function(add){
  var N = window.HT_NACH || {};
  Object.keys(N).forEach(function(cid){
    var C = N[cid]; if(!C || !C.subs) return;
    C.subs.forEach(function(S){
      (S.secs || []).forEach(function(X){
        var t = (C.t || cid) + (C.subs.length > 1 && S.t ? " › " + S.t : "") + " › " + (X.t || "");
        add(t, "Regelbuch", "#nach/" + cid + "/" + S.id + "/" + X.id, X.kl ? [X.t, X.kl] : X.b);
      });
    });
  });
  (window.HT_LM || []).forEach(function(l){ add(l.t, "Landmarken", "#lm/" + l.id, l); });
  (window.HT_DELVE || []).forEach(function(d){ add(d.t + " (Delve)", "Landmarken", "#lm/d:" + d.id, d); });
  var LG = window.HT_LMG || {};
  Object.keys(LG).forEach(function(k){ var g = LG[k]; add(g.t || ("Landmarken: " + k), "Landmarken", "#lm", g.intro); });
  (window.HT_GEGNER || []).forEach(function(g){
    add(g.t, "Gegner", function(){ location.hash = "#gegner"; setTimeout(function(){ if(window.gegnerAuf) gegnerAuf(g.id); }, 30); }, g);
  });
  var GI = window.HT_GEGNER_INFO || {};
  Object.keys(GI).forEach(function(k){ add("Gegner › " + k, "Gegner", "#gegner", GI[k]); });
  if(window.falloutListe){
    try{ falloutListe().forEach(function(f){ add("Fallout › " + f.t + " (" + f.r + ", " + f.s + ")", "Fallout", "#fallout", [f.t, f.tag, f.html]); }); }catch(e){}
  }
  if(window.HT_GEDICHT) add("Gedicht", "Start", "#", window.HT_GEDICHT);
  var D = window.HT_DAGGER || {};
  var I = D.intro || {};
  Object.keys(I).forEach(function(k){ var s = I[k]; if(!s || typeof s !== "object") return;
    if(k === "opposition") add("Dagger › " + (s.t || "Opposition"), "Kampagne", "#dagger/opposition", s);
    else if(k === "fragen") add("Dagger › " + (s.t || "Schlüsselfragen"), "Kampagne", "#dagger/fragen", s);
    else if(k === "gebrochen") add("Dagger › " + (s.t || "Gebrochene Zukünfte"), "Kampagne", "#dagger/zukuenfte", s);
    else if(k === "beat1") add("Dagger › " + (s.t || "Beat-Bogen"), "Kampagne", "#dagger/beats", s);
    else add("Dagger › " + (s.t || k), "Kampagne", "#dagger/einfuehrung", s);
  });
  (D.opp || []).forEach(function(o){
    (o.abschnitte || []).forEach(function(a){ add("Opposition › " + o.t + " › " + a.t, "Kampagne", "#dagger/opposition/" + o.id, a); });
  });
  Object.keys(D.kap || {}).forEach(function(n){
    var K = D.kap[n], pre = "Kapitel " + n + " · " + K.t;
    add(pre + " › Überblick", "Kampagne", "#dagger/" + n + "/ueberblick", [K.verse, K.ueberblick, K.legenden, K.gar]);
    (K.inszenierung || []).concat(K.rest || []).forEach(function(a){ add(pre + " › " + a.t, "Kampagne", "#dagger/" + n + "/inszenierung", a); });
    (K.lm || []).forEach(function(l){ if(l.extern) return; add(pre + " › " + l.t, "Kampagne", "#dagger/" + n + "/landmarken/" + l.id, l); });
    (K.delves || []).forEach(function(v){ add(pre + " › Delve " + (v.t || v.id), "Kampagne", "#dagger/" + n + "/landmarken/d:" + v.id, v); });
    (K.dok || []).forEach(function(d){ add(pre + " › Dokument " + d.t, "Kampagne", "#dagger/" + n + "/dokumente", d); });
    if(K.beat2) add("Dagger › " + (K.beat2.t || "Beat-Bogen"), "Kampagne", "#dagger/beats", K.beat2);
  });
  var A = D.app || {};
  if(A.index) add("Dagger › Landmarken-Index", "Kampagne", "#dagger/anhang", A);
  var BO = window.HT_BO || {};
  if(BO.intro) add("Black Ops › Einführung", "Black Ops", "#blackops", BO.intro);
  (BO.regeln || []).forEach(function(r){ add("Black Ops › " + r.t, "Black Ops", "#blackops/regeln", r); });
  (BO.spiel || []).forEach(function(r){ add("Black Ops › " + r.t, "Black Ops", "#blackops/einsatz", r); });
  ((BO.ausr || {}).x || []).forEach(function(r){ add("Black Ops › Ausrüstung › " + r.t, "Black Ops", "#blackops/einsatz", r); });
  (BO.linien || []).forEach(function(l){ add("Black Ops › " + l.t, "Black Ops", "#blackops/linien/" + l.id, [l.einl, l.atmo, l.stationen]); (l.ziele || []).concat(l.merkmale || []).forEach(function(z){ add("Black Ops › " + l.t + " › " + z.t, "Black Ops", "#blackops/linien/" + l.id, z); }); });
  (BO.gruppen || []).forEach(function(g){ add("Black Ops › " + g.t, "Black Ops", "#blackops/fraktionen/" + g.id, [g.zitat, g.b]); (g.stat || []).forEach(function(s){ add("Black Ops › " + s.t, "Black Ops", "#blackops/fraktionen/" + g.id, s); }); });
  var DO = window.HT_DOORS || {};
  (DO.abenteuer || []).forEach(function(a){ add("Doors › " + a.t, "Doors to Elsewhere", "#doors", a); });
  (DO.stadt || []).forEach(function(a){ add("Doors › " + a.t, "Doors to Elsewhere", "#doors/stadt", a); });
  (DO.lm || []).forEach(function(a){ add("Doors › " + a.t, "Doors to Elsewhere", "#doors/landmarken", a); });
  (DO.fraktionen || []).forEach(function(a){ add("Doors › " + a.t, "Doors to Elsewhere", "#doors/fraktionen/" + a.id, a); });
  ((DO.dimGross || {}).x || []).concat((DO.dimKlein || {}).x || []).forEach(function(a){ add("Doors › Dimension › " + a.t, "Doors to Elsewhere", "#doors/dimensionen", a); });
  if(DO.beats) add("Doors › Beats und kleine Aufstiege", "Doors to Elsewhere", "#doors/beats", DO.beats);
  (DO.tabellen || []).forEach(function(a){ add("Doors › " + a.t, "Doors to Elsewhere", "#doors/tabellen", a); });
});
window.sucheOpen = GSuche.open;
