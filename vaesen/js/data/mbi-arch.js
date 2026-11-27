/* Neue Archetypen aus den Settingbüchern (Mythic Britain & Ireland, Mythic Carpathia) – in die Charaktererstellung eingehängt */
(function(){
  if(!window.VAE_ARCH || !window.SBD || !window.SBS) return;
  Object.keys(SBD).forEach(function(id){
    var S = SBS[id]; if(!S || !SBD[id].arch) return;
    SBD[id].arch.forEach(function(a){
      if(VAE_ARCH.some(function(x){ return x.id === a.id; })) return;
      var c = Object.assign({}, a, { quelle:S.titel, buch:S.buch });
      if(a.id === "athlet"){ c.skillAttr = "Physis"; c.skillK = "je nach Sportart"; }
      VAE_ARCH.push(c);
    });
  });
})();
