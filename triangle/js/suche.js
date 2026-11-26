/* Volltextsuche (Taste „f“): Abschnitte, ARK-Einträge, Einsätze. Inhalte kommen dazu, sobald TA_TEXT gefüllt ist. */
(function(){
  function txt(h){ var d = document.createElement("div"); d.innerHTML = String(h || "").replace(/<\/(p|div|li|h\d|span|b)>/g, "$& "); return d.textContent.replace(/\s+/g, " "); }
  GSuche.add(function(add){
    TA_NAV.forEach(function(a){ (a.sub || []).forEach(function(s){ (s.s || []).forEach(function(x){
      var k = a.id + "/" + s.id + "/" + x[0]; add(x[1], a.t + " › " + s.t, "#" + (a.id === "ark" ? "ark/fragebogen" : k), txt(TA_TEXT[k])); }); }); });
    Object.keys(TA_ARK).forEach(function(k){ TA_ARK[k].x.forEach(function(x){ add(x[1], "ARK › " + TA_ARK[k].t, "#ark/" + k + "/" + x[0], txt(TA_TEXT["ark/" + k + "/" + x[0]])); }); });
    function lies(o, a){ if(typeof o === "string"){ if(!/^(ok|plus|nein|txt)$/.test(o)) a.push(o); } else if(Array.isArray(o)) o.forEach(function(x){ lies(x, a); }); else if(o && typeof o === "object") Object.keys(o).forEach(function(k){ if(!/^(t|art|src|bild|z|pos)$/.test(k)) lies(o[k], a); }); return a; }
    Object.keys(window.TA_PWT || {}).forEach(function(c){ if(!ST.pwOffen && !(ST.pw || {})[c]) return; var D = TA_PWT[c]; add((D.t || "") + " (" + c + ")", "Playwall › " + c, "#pw/" + c, txt(lies(D.b, []).join(" ").replace(/\*\*|\{3\}|\[\[|\]\]/g, ""))); });
    TA_EINSATZ.concat([TA_SPACE]).forEach(function(e){ add(e.t, "Einsatz", "#e/" + e.id, e.de + " " + e.von); });
  });
  window.sucheOpen = GSuche.open;
})();
