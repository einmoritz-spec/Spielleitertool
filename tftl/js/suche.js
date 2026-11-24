/* Volltextsuche (Taste „f“): Tales from the Loop, Things from the Flood, The Electric State */
"use strict";
GSuche.add(function(add0){
  function add(t, b, h, d){ try{ d = JSON.parse(JSON.stringify(d == null ? "" : d).replace(/\{\{([^|}]*)\|([^}]*)\}\}/g, "$1")); }catch(e){} add0(t, b, h, d); }
  GSuche.skip.ort = 1; GSuche.skip.bei = 1; GSuche.skip.art = 1; GSuche.skip.ziel = 1; GSuche.skip.bild = 1; GSuche.skip.bilder = 1; GSuche.skip.pin = 1; GSuche.skip.pinShowdown = 1; GSuche.skip.karte = 1;
  var NB = (window.BEREICHE || {});
  function strip(h){ return String(h || "").replace(/\{\{([^|}]*)\|([^}]*)\}\}/g, "$1 / $2"); }
  /* Nachschlagen: Tabs → Datensätze (ND) mit Abschnitten; Route nach/<tab>[/<satz>]/<abschnitt> */
  function nach(pre, label, NACH, ND, SETS, TYPEN, typTab, typLabel){
    (NACH || []).forEach(function(n){
      var tab = n[0], keys = (SETS[tab] || []).filter(function(k){ return ND && ND[k]; }), multi = keys.length > 1;
      keys.forEach(function(k){
        var D = ND[k];
        (D.abschnitte || []).forEach(function(a){
          var t = n[1] + (multi && D.titel ? " › " + D.titel : "") + " › " + strip(a.titel);
          add(t, label + ": Nachschlagen", "#" + pre + "nach/" + tab + "/" + (multi ? k + "/" : "") + a.id, a.bloecke);
        });
      });
    });
    (TYPEN || []).forEach(function(t){ add(typLabel + " › " + t.name, label + ": " + typLabel, "#" + pre + "nach/" + typTab + "/" + (typTab === "reisende" ? "archetypen/" : "") + t.id, t); });
  }
  /* Mysterien: Route m/<id>/<phase>[/<abschnitt>] (Phase „loesung“ mit Abschnitt) */
  function mys(pre, label, MYS){
    Object.keys(MYS || {}).forEach(function(id){
      var M = MYS[id], base = "#" + pre + "m/" + id + "/", first = M.phasen && M.phasen[0] ? M.phasen[0].id : "";
      add(M.name, label + ": Mysterien", base + first, [M.intro, M.jahreszeit]);
      (M.phasen || []).forEach(function(P){
        (P.abschnitte || []).forEach(function(a){
          add(M.name + " › " + P.name + " › " + strip(a.titel || a.id), label + ": Mysterien", base + P.id + (P.id === "loesung" ? "/" + a.id : ""), a);
        });
      });
      if(M.countdown) add(M.name + " › Countdown", label + ": Mysterien", base + "loesung/_countdown", M.countdown);
      Object.keys(M.nsc || {}).forEach(function(k){ var n = M.nsc[k]; add(M.name + " › NSC › " + strip(n.name), label + ": Mysterien", base + "nsc", n); });
    });
  }
  function kids(pre, label, K){ if(K) add("Kids › Attribute, Zustände, Fertigkeiten", label + ": Typen", "#" + pre + "kids", [K.attr, K.zustaende, K.skills]); }

  var Fl = window.FLOOD || {};
  nach("", "Loop", window.NACH, window.NACHDATA, {welt:["welt"], loops:["schweden","us","de80","taunus","broads"], schirm:["schirm"], kids:["kids"], aerger:["aerger"], mysterium:["mysterium"], landschaft:["landschaft"]}, window.TYPEN, "kids", "Die Typen");
  mys("", "Loop", window.MYS); kids("", "Loop", window.KIDS);
  nach("flood/", "Flood", Fl.NACH, Fl.NACHDATA, Fl.SETS || {}, Fl.TYPEN, "kids", "Die Typen");
  mys("flood/", "Flood", Fl.MYS); kids("flood/", "Flood", Fl.KIDS);

  var E = window.ES || {};
  nach("es/", "Electric State", NB.es && NB.es.nach, window.NACHDATA_ES, E.NACHSETS || {}, E.ARCHETYPEN, "reisende", "Die Archetypen");
  var L = "Electric State: Reise";
  if(E.REISE){ (E.REISE.route || []).forEach(function(r){ add("Into the Dust › " + r.titel, L, "#es/reise/route", r); }); }
  Object.keys(E.HALTE || {}).forEach(function(hid){
    var H = E.HALTE[hid], base = "#es/reise/" + hid + "/", host = {};
    (H.abschnitte || []).forEach(function(a){ if(!a.box) host[a.id] = 1; });
    (H.abschnitte || []).forEach(function(a){
      var ziel = a.box ? (a.bei || "ueberblick") : a.id, t = H.name + " › " + strip(a.titel || a.id);
      if(a.orte){
        add(t, L, base + "orte", [a.vl, a.html]);
        a.orte.forEach(function(o){ add(H.name + " › Ort › " + o.name, L, base + "orte/" + o.id, o); });
      } else if(a.nsc){
        add(t, L, base + "nsc", [a.vl, a.html]);
        a.nsc.forEach(function(n){ add(H.name + " › NSC › " + n.name, L, base + "nsc", n); });
      } else add(t, L, base + ziel, a);
    });
  });
  if(E.ZIELE) add("Ziele und Bedrohungen", L, "#es/reise/ziele", E.ZIELE);
  if(E.BEGEGNUNGEN) add("Begegnungen", L, "#es/reise/begegnungen", [E.BEGEGNUNGEN_INTRO, E.BEGEGNUNGEN]);
  (E.VORGEFERTIGT || []).forEach(function(v){ add("Vorgefertigte Reisende › " + v.name, "Electric State: Reisende", "#es/reisende", v); });
  /* Startkacheln (Untertitel) */
  [["", window.START], ["es/", (window.ES || {}).START]].forEach(function(x){
    var S = x[1]; if(!S) return;
    (S.welt || []).concat(S.spiel || []).forEach(function(k){ if(k && k[4]) add(k[0], "Start", "#" + x[0] + k[4], [k[1], k[2]]); });
  });
});
window.sucheOpen = GSuche.open;
