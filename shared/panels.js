/* PanelUI – gemeinsames Verhalten für alle Settings:
   • Taste „h“: Header ganz oben aus-/einblenden (Body-Klasse topbar-hidden)
   • Seitenleiste/Baum-Navigation per rundem Knopf an der Trennlinie (oder Taste „b“) ein-/ausklappen, Zustand in localStorage
   Einbau: <link rel="stylesheet" href="…/shared/panels.css"><script src="…/shared/panels.js"></script>
           PanelUI.init({nav:'.onav', rail:'.orail'});   // Selektoren dürfen Komma-Listen sein
   Funktioniert auch nach Re-Render (MutationObserver). Handy: kein Knopf, keine Wirkung. */
(function(){
  var KEY="pn_collapsed", cfg=null, raf=0;
  function inField(e){ var t=e.target, n=(t&&t.tagName)||""; return n==="INPUT"||n==="TEXTAREA"||n==="SELECT"||(t&&t.isContentEditable); }
  function isOff(){ try{ return localStorage.getItem(KEY)==="1"; }catch(e){ return document.body.classList.contains("pn-off"); } }
  function apply(){ document.body.classList.toggle("pn-off", isOff()); }
  function set(v){ try{ localStorage.setItem(KEY,v?"1":"0"); }catch(e){} apply(); schedule(); }
  function toggle(){ set(!isOff()); }
  var SVG='<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M10 3 5 8l5 5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  function tool(){ var p=location.pathname; return /cityofmist/.test(p)?"com":/locallegends/.test(p)?"ll":/nights/.test(p)?"ni":/otherscape/.test(p)?"os":/etr/.test(p)?"etr":"wake"; }
  function visible(el){ return el && el.offsetParent!==null || (el && getComputedStyle(el).position==="fixed"); }
  function place(){
    var b=document.getElementById("pnBtn"); if(!b) return;
    if(window.innerWidth<861 && !document.querySelector(".lm-toc")){ b.style.display="none"; return; }
    var tc=document.querySelector(".lm-toc"); if(tc && getComputedStyle(tc).position!=="sticky"){ b.style.display="none"; return; }
    var off=isOff(), nav=document.querySelector(".pn-nav"), rail=document.querySelector(".pn-rail")||nav;
    if(!nav&&!rail){ b.style.display="none"; return; }
    var r=(off?rail:nav).getBoundingClientRect();
    if(r.width===0&&r.height===0){ b.style.display="none"; return; }
    var top=Math.max(r.top, (document.body.classList.contains("topbar-hidden")?0:(document.querySelector(".topbar")||{offsetHeight:0}).offsetHeight||0))+8;
    top=Math.min(Math.max(top,8), window.innerHeight-40);
    b.style.display="flex";
    b.style.top=top+"px";
    b.style.left=off?"0px":Math.round(Math.min(r.right,window.innerWidth-30)-13)+"px";
    b.classList.toggle("pn-closed",off);
    var t=off?"Leiste ausklappen (B)":"Leiste einklappen (B)";
    b.title=t; b.setAttribute("aria-label",t); b.setAttribute("aria-expanded",off?"false":"true");
  }
  function ensure(){
    raf=0; if(!cfg) return;
    document.body.setAttribute("data-pn",tool());
    document.querySelectorAll(cfg.rail).forEach(function(r){ r.classList.add("pn-rail"); });
    document.querySelectorAll(cfg.nav).forEach(function(n){ n.classList.add("pn-nav"); var o=n.querySelector(":scope > .pn-toggle"); if(o) o.remove(); });
    var has=!!document.querySelector(".pn-nav"), o=document.getElementById("pnBtn");
    var old=document.getElementById("pnOpen"); if(old) old.remove();
    if(has&&!o){ o=document.createElement("button"); o.type="button"; o.id="pnBtn"; o.className="pn-btn"; o.innerHTML=SVG; o.onclick=function(){ toggle(); }; document.body.appendChild(o); }
    if(!has&&o) o.remove();
    place();
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
          else if(k==="b"||k==="<"||k===">"||e.code==="IntlBackslash"){ toggle(); }
        });
        new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true});
        window.addEventListener("resize",schedule); window.addEventListener("scroll",schedule,{passive:true}); window.addEventListener("transitionend",schedule);
      }
      ensure();
    },
    toggle:toggle, set:set
  };
})();
