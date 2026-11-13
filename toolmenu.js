/* Systemwechsel: kleiner, unauffälliger Dropdown-Pfeil rechts neben dem Systemnamen (.brand) in der Kopfzeile.
   Das Menü übernimmt Farben/Schrift des aktuellen Systems. */
(function(){
  var SRC = document.currentScript && document.currentScript.src || "";
  var BASE = SRC.replace(/toolmenu\.js.*$/, "");
  var TOOLS = [
    ["_mist","Mist Engine","","",0,"grp"],
    ["cityofmist","City of Mist","Übersicht","cityofmist/#start",1],
    ["cm_rw","Grundregelwerk","Spieler:innen-Handbuch","cityofmist/#rw",2],
    ["cm_ss","Shadows & Showdowns","Erweiterung","cityofmist/#ss",2],
    ["locallegends","Local Legends","Fall-Akte","locallegends/",2],
    ["paynetown","Nights of Paynetown","Kampagne","nights/",2],
    ["otherscape","Otherscape","Cyberpunk-Fantasy","otherscape/",1],
    ["wake","Wake of the Oldways","Legend in the Mist","",1],
    ["_havoc","Havoc Engine","","",0,"grp"],
    ["etr","Eat the Reich","Vampir-Kommandos","etr/",1]
  ];
  var css = document.createElement("style");
  css.textContent = ".topbar .tm-caret{flex:none;margin:0 auto 0 -2px;width:24px;height:24px;padding:0;display:inline-flex;align-items:center;justify-content:center;background:none;border:0;border-radius:6px;color:inherit;opacity:.5;cursor:pointer;transition:opacity .15s,background .15s}.topbar .tm-caret:hover,.topbar .tm-caret[aria-expanded=true]{opacity:1;background:rgba(255,255,255,.08)}.topbar .tm-caret svg{width:12px;height:12px;transition:transform .15s}.topbar .tm-caret[aria-expanded=true] svg{transform:rotate(180deg)}.topbar .brand{flex:0 1 auto!important}.tm-dd{position:fixed;z-index:99999;min-width:230px;max-width:calc(100vw - 16px);padding:6px;border-radius:12px;box-shadow:0 12px 36px rgba(0,0,0,.55);animation:tmIn .12s ease-out}.tm-dd button{display:block;width:100%;text-align:left;margin:0;padding:9px 11px;border-radius:8px;border:1px solid transparent;background:none;color:inherit;font:inherit;cursor:pointer}.tm-dd button:hover{background:rgba(255,255,255,.07)}.tm-dd button b{display:block;font-weight:600;font-size:14px}.tm-dd button small{display:block;opacity:.6;font-size:11.5px;margin-top:1px}.tm-dd .tm-grp{padding:8px 11px 3px;font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;opacity:.5}.tm-dd button.sub1{margin-left:8px;width:calc(100% - 8px)}.tm-dd button.sub2{margin-left:24px;width:calc(100% - 24px);border-left:2px solid rgba(255,255,255,.14);border-radius:0 8px 8px 0}.tm-dd button.on{cursor:default;border-color:var(--tm-acc);background:rgba(255,255,255,.05)}.tm-dd button.on b{color:var(--tm-acc)}@keyframes tmIn{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}";
  document.head.appendChild(css);
  function cur(){ var p = location.pathname; return /\/locallegends\//.test(p) ? "locallegends" : /\/nights\//.test(p) ? "paynetown" : /\/otherscape\//.test(p) ? "otherscape" : /\/cityofmist\//.test(p) ? (/^#rw/.test(location.hash) ? "cm_rw" : /^#(ss|spieler|sl)/.test(location.hash) ? "cm_ss" : "cityofmist") : /\/etr\//.test(p) ? "etr" : "wake"; }
  var caret = null, dd = null;
  function close(){ if(dd){ dd.remove(); dd = null; } if(caret) caret.setAttribute("aria-expanded","false"); }
  function themed(el){
    var rs = getComputedStyle(document.documentElement), brand = document.querySelector(".topbar .brand"), bar = document.querySelector(".topbar");
    var bs = brand ? getComputedStyle(brand) : null, bb = bar ? getComputedStyle(bar) : null;
    function v(n){ return (rs.getPropertyValue(n)||"").trim(); }
    var bg = v("--panel-raised") || v("--panel2") || v("--panel") || "#1b1816";
    el.style.background = bg; el.style.color = getComputedStyle(document.body).color;
    el.style.border = "1px solid " + (bb && bb.borderBottomColor && bb.borderBottomColor!=="rgba(0, 0, 0, 0)" ? bb.borderBottomColor : "rgba(255,255,255,.15)");
    el.style.fontFamily = getComputedStyle(document.body).fontFamily;
    el.style.setProperty("--tm-acc", bs ? bs.color : "#c9a24b");
  }
  function open(){
    close(); var c = cur(); dd = document.createElement("div"); dd.className = "tm-dd"; dd.setAttribute("role","menu");
    dd.innerHTML = TOOLS.map(function(t){ if(t[5]==="grp") return '<div class="tm-grp">'+t[1]+'</div>'; return '<button role="menuitem" data-m="'+t[0]+'" class="'+(t[0]===c?"on":"")+(t[4]===2?" sub2":" sub1")+'"><b>'+t[1]+'</b><small>'+t[2]+'</small></button>'; }).join("");
    themed(dd);
    dd.addEventListener("click", function(e){
      var b = e.target.closest("button"); if(!b) return; var m = b.dataset.m; if(m===c) return close();
      if(/^cm_|^cityofmist$/.test(m) && /\/cityofmist\//.test(location.pathname)){ location.hash = TOOLS.filter(function(t){return t[0]===m;})[0][3].split("/")[1]; return close(); }
      try{ localStorage.setItem("gm_tool_mode_v1", /^cm_/.test(m) ? "cityofmist" : m); }catch(x){}
      var t = TOOLS.filter(function(t){ return t[0]===m; })[0]; location.href = BASE + t[3];
    });
    document.body.appendChild(dd);
    var r = caret.getBoundingClientRect(), w = dd.offsetWidth;
    dd.style.top = (r.bottom + 6) + "px"; dd.style.left = Math.max(8, Math.min(r.left - 8, window.innerWidth - w - 8)) + "px";
    caret.setAttribute("aria-expanded","true");
  }
  function init(){
    var brand = document.querySelector(".topbar .brand"); if(!brand || caret) return;
    caret = document.createElement("button"); caret.type = "button"; caret.className = "tm-caret"; caret.setAttribute("aria-label","System wechseln"); caret.title = "System wechseln"; caret.setAttribute("aria-haspopup","menu"); caret.setAttribute("aria-expanded","false");
    caret.innerHTML = '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 4.5 6 8l3.5-3.5"/></svg>';
    caret.addEventListener("click", function(e){ e.stopPropagation(); dd ? close() : open(); });
    brand.insertAdjacentElement("afterend", caret);
  }
  document.addEventListener("click", function(e){ if(dd && !(e.target.closest && (e.target.closest(".tm-dd")||e.target.closest(".tm-caret")))) close(); });
  document.addEventListener("keydown", function(e){ if(e.key==="Escape") close(); });
  window.addEventListener("resize", close);
  /* Buch-Knopf im Header (überall): jede Seite definiert window.gmBook() -> {name, open} für das Buch des aktuellen Bereichs */
  var bcss = document.createElement("style");
  bcss.textContent = ".topbar .tm-book{flex:none;margin-left:auto;margin-right:8px;width:40px;height:40px;padding:0;display:inline-flex;align-items:center;justify-content:center;background:rgba(127,127,127,.10);border:1px solid rgba(127,127,127,.38);border-radius:10px;color:inherit;font:inherit;font-size:13px;font-weight:600;letter-spacing:.02em;cursor:pointer;white-space:nowrap;transition:background .15s}.topbar .tm-book:hover{background:rgba(127,127,127,.22)}.topbar .tm-book + .tb-burger{margin-left:0!important}";
  document.head.appendChild(bcss);
  function bookBtn(){
    var bar = document.querySelector(".topbar"); if(!bar || !window.gmBook || bar.querySelector(".tm-book")) return;
    var burger = bar.querySelector(".tb-burger"); if(!burger) return;
    var b = document.createElement("button"); b.type = "button"; b.className = "tm-book"; b.setAttribute("aria-label","Buch öffnen"); b.innerHTML = '<svg viewBox="0 0 512 512" width="22" height="22" fill="none" stroke="currentColor" stroke-width="30" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true"><path d="M60 100H18V458H494V100H452"/><path d="M58 52C150 52 212 74 256 100V452C212 430 150 412 58 412Z"/><path d="M454 52C362 52 300 74 256 100V452C300 430 362 412 454 412Z"/></svg>';
    function info(){ try{ return window.gmBook(); }catch(e){ return null; } }
    b.addEventListener("mouseenter", function(){ var i = info(); b.title = i ? i.name + " öffnen" : "Buch öffnen"; });
    b.addEventListener("click", function(e){ e.stopPropagation(); var i = info(); if(i && i.open) i.open(); });
    var cs = getComputedStyle(burger); if(cs.color) b.style.color = cs.color; burger.insertAdjacentElement("beforebegin", b);
  }
  function ensure(){ bookBtn(); var b = document.querySelector(".topbar .brand"); if(b && !(b.nextElementSibling && b.nextElementSibling.classList.contains("tm-caret"))){ caret = null; init(); } }
  new MutationObserver(ensure).observe(document.documentElement, {childList:true, subtree:true});
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", function(){ init(); bookBtn(); }); else { init(); bookBtn(); }
})();
