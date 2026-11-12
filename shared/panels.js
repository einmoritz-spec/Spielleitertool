/* PanelUI – gemeinsames Verhalten für alle Settings:
   • Taste „h“: Header ganz oben aus-/einblenden (Body-Klasse topbar-hidden)
   • Seitenleiste/Baum-Navigation per ‹-Knopf (oder Taste „b“) ein-/ausklappen, Zustand in localStorage
   Einbau: <link rel="stylesheet" href="…/shared/panels.css"><script src="…/shared/panels.js"></script>
           PanelUI.init({nav:'.onav', rail:'.orail'});   // Selektoren dürfen Komma-Listen sein
   Funktioniert auch nach Re-Render (MutationObserver). Handy: kein Knopf, keine Wirkung. */
(function(){
  var KEY="pn_collapsed", cfg=null, raf=0;
  function inField(e){ var t=e.target, n=(t&&t.tagName)||""; return n==="INPUT"||n==="TEXTAREA"||n==="SELECT"||(t&&t.isContentEditable); }
  function isOff(){ try{ return localStorage.getItem(KEY)==="1"; }catch(e){ return document.body.classList.contains("pn-off"); } }
  function apply(){ document.body.classList.toggle("pn-off", isOff()); }
  function set(v){ try{ localStorage.setItem(KEY,v?"1":"0"); }catch(e){} apply(); }
  function toggle(){ set(!isOff()); }
  function ensure(){
    raf=0; if(!cfg) return;
    document.querySelectorAll(cfg.rail).forEach(function(r){ r.classList.add("pn-rail"); });
    document.querySelectorAll(cfg.nav).forEach(function(n){
      n.classList.add("pn-nav");
      if(!n.querySelector(":scope > .pn-toggle")){
        var b=document.createElement("button"); b.type="button"; b.className="pn-toggle"; b.textContent="‹"; b.title="Seitenleiste einklappen (B)"; b.setAttribute("aria-label","Seitenleiste einklappen");
        b.onclick=function(ev){ ev.preventDefault(); ev.stopPropagation(); set(true); };
        n.insertBefore(b,n.firstChild);
      }
    });
    var has=!!document.querySelector(".pn-nav"), o=document.getElementById("pnOpen");
    if(has&&!o){ o=document.createElement("button"); o.type="button"; o.id="pnOpen"; o.className="pn-open"; o.textContent="›"; o.title="Seitenleiste öffnen (B)"; o.setAttribute("aria-label","Seitenleiste öffnen"); o.onclick=function(){ set(false); }; document.body.appendChild(o); }
    if(!has&&o) o.remove();
  }
  function schedule(){ if(!raf) raf=requestAnimationFrame(ensure); }
  window.PanelUI={
    init:function(c){
      cfg={nav:c.nav, rail:c.rail||c.nav};
      apply();
      if(!window.__pnKeys){
        window.__pnKeys=1;
        document.addEventListener("keydown",function(e){
          if(e.ctrlKey||e.metaKey||e.altKey||inField(e)) return;
          var k=(e.key||"").toLowerCase();
          if(k==="h" && !window.toggleTopbar){ document.body.classList.toggle("topbar-hidden"); }
          else if(k==="b"){ toggle(); }
        });
        new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true});
      }
      ensure();
    },
    toggle:toggle, set:set
  };
})();
