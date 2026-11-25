/* Cairn – Suche (Taste „f“): Kapitel aller Bereiche und die Hintergründe */
(function(){
  GSuche.skip = {img:1, id:1, p:1, buch:1, n:1};
  GSuche.add(function(add){
    BEREICHE.forEach(function(A){
      if(A.id === "hintergruende") return;
      (CN.area[A.id] || []).forEach(function(k){ add(k.t, A.t, "#" + A.id + "/" + k.id, k.b); });
    });
    CN_HG.forEach(function(h){ add(h.t, "Hintergründe", "#hintergruende/" + h.id, [h.intro, h.gear, h.names, h.tabs]); });
  });
  window.sucheOpen = GSuche.open;
})();
