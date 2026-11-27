/* Neue Archetypen aus Mythic Britain & Ireland – in die Charaktererstellung eingehängt */
(function(){
  if(!window.VAE_ARCH || !window.SBD || !SBD.mbi) return;
  SBD.mbi.arch.forEach(function(a){
    if(VAE_ARCH.some(function(x){ return x.id === a.id; })) return;
    var c = Object.assign({}, a, { quelle:"Mythic Britain & Ireland", buch:"vae_mbi" });
    if(a.id === "athlet") { c.skillAttr = "Physis"; c.skillK = "je nach Sportart"; }
    VAE_ARCH.push(c);
  });
})();
