/* Zurück (Browser-Taste, Wischgeste am Handy) – in allen Settings gleich:
   1. Ist ein Fenster offen (Charaktere, Glossar, Suche, Menü …), schließt Zurück nur dieses Fenster.
   2. Ist man in einer Unterseite (Wake, Local Legends), geht Zurück eine Ebene hoch bzw. zur Startseite.
   3. Erst auf der Startseite verlässt Zurück die App.
   Technik: Solange ein Fenster/eine Unterseite offen ist, liegt ein zusätzlicher Verlaufseintrag darüber.
   Hash-Seiten (Nights, Otherscape, City of Mist) behalten ihren eigenen Verlauf. */
(function(){
  var SEL = '.gloss-modal-backdrop.open,[id$="Modal"].show,[id$="Modal"].open,[id$="Lightbox"].show,[id$="Lightbox"].on,#creatorModal,#mobileMenu,.modal-backdrop.show,.modal.show';
  var mLayer = false, vLayer = false, ignore = 0, tick = 0;
  function isZk(s){ return !!(s && s.zk); }
  function modalEl(){ return document.querySelector(SEL); }
  function pushLayer(n){ try{ history.pushState({ zk:n }, ""); return true; }catch(e){ return false; } }
  function popLayer(n){ if(history.state && history.state.zk === n){ ignore++; try{ history.back(); }catch(e){ ignore--; } } }

  /* ---- Fenster ---- */
  function checkModal(){
    var o = !!modalEl();
    if(o && !mLayer){ mLayer = pushLayer(1); }
    else if(!o && mLayer){ mLayer = false; popLayer(1); }
  }
  function schliesseFenster(){
    document.dispatchEvent(new KeyboardEvent("keydown", { key:"Escape", bubbles:true }));
    var el = modalEl();
    if(el){
      var x = el.querySelector('.cm-close,.gloss-close,.modal-x,.close,[aria-label="Schließen"],[onclick*="close"]');
      if(x) x.click();
    }
  }
  new MutationObserver(function(){ cancelAnimationFrame(tick); tick = requestAnimationFrame(checkModal); })
    .observe(document.documentElement, { subtree:true, childList:true, attributes:true, attributeFilter:["class","hidden"] });

  /* ---- Unterseiten (nur Apps mit state.view) ---- */
  function homeName(){ return typeof goHome === "function" ? "home" : "overview"; }
  function stateApp(){ return typeof state === "object" && state && typeof state.view === "string" && typeof render === "function"; }
  function checkView(){
    if(!stateApp()) return;
    var home = state.view === homeName();
    if(!home && !vLayer){ vLayer = pushLayer(2); }
    else if(home && vLayer){ vLayer = false; popLayer(2); }
  }
  function wrapRender(){
    if(!stateApp() || render.__zk) return;
    var orig = render;
    window.render = render = function(){ var r = orig.apply(this, arguments); try{ checkView(); }catch(e){} return r; };
    render.__zk = true; checkView();
  }
  window.addEventListener("load", function(){ wrapRender(); checkModal(); });

  window.addEventListener("popstate", function(e){
    if(ignore > 0){ ignore--; return; }
    if(isZk(e.state)) return;                 // ein Eintrag über uns wurde geschlossen (z. B. Bildbetrachter) – hier nichts zu tun
    if(mLayer){ mLayer = false; schliesseFenster(); setTimeout(checkModal, 0); return; }
    if(vLayer && stateApp()){
      vLayer = false;
      if(state.view === "adventure" && typeof goOverview === "function") goOverview();
      else if(typeof goHome === "function") goHome();
      else if(typeof goOverview === "function") goOverview();
      checkView();
    }
  });
})();
