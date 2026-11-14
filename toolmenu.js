/* Systemwechsel: kleiner, unauffälliger Dropdown-Pfeil rechts neben dem Systemnamen (.brand) in der Kopfzeile.
   Das Menü übernimmt Farben/Schrift des aktuellen Systems. */
(function(){
  var SRC = document.currentScript && document.currentScript.src || "";
  var BASE = SRC.replace(/toolmenu\.js.*$/, "");
  var TOOLS = [
    ["_mist","Mist Engine","","",0,"grp"],
    ["cityofmist","City of Mist","Übersicht","cityofmist/#start",1,"",{m:"assets/logos/city-of-mist.webp",w:80,h:26}],
    ["cm_rw","Grundregelwerk","Spieler:innen-Handbuch","cityofmist/#rw",2,"",{f:"TmBebas",s:19,ls:".06em"}],
    ["cm_ss","Shadows & Showdowns","Erweiterung","cityofmist/#ss",2,"",{f:"TmBebas",s:19,ls:".06em"}],
    ["locallegends","Local Legends","Fall-Akte","locallegends/",2,"",{i:"assets/logos/local-legends-wortmarke.webp",h:38}],
    ["paynetown","Nights of Paynetown","Kampagne","nights/",2,"",{f:"TmOswald",s:15,ls:".05em",u:1}],
    ["otherscape","Otherscape","Cyberpunk-Fantasy","otherscape/",1,"",{m:"otherscape/img/logo.webp",w:86,h:18}],
    ["wake","Legend in the Mist","Wake of the Oldways","",1,"",{m:"assets/logos/legend-in-the-mist.webp",w:62,h:27}],
    ["_yze","Year Zero Engine","","",0,"grp"],
    ["vaesen","Vaesen","Mythisches Skandinavien","vaesen/",1,"",{m:"assets/logos/vaesen.webp",w:84,h:17}],
    ["vae_core","Grundregelwerk","Regeln, Charaktere, Vaesen","vaesen/#buecher/0",2,"",{f:"TmBebas",s:18,ls:".06em"}],
    ["vae_book","Settingbücher","Britain & Ireland · Carpathia","vaesen/#buecher/1",2,"",{f:"TmBebas",s:18,ls:".06em"}],
    ["vae_myst","Mysterien & Kampagnen","Seasons · Wicked Secret · Lost Mountain · City","vaesen/#buecher/2",2,"",{f:"TmBebas",s:18,ls:".06em"}],
    ["vae_solo","Solo & Material","Thursday’s Child · Handouts","vaesen/#buecher/3",2,"",{f:"TmBebas",s:18,ls:".06em"}],
    ["tftl","Tales from the Loop","Stålenhag · 80er","tftl/",1,"",{f:"TmJost",s:17,ls:".03em",u:1}],
    ["forbidden","Forbidden Lands","Free League","forbidden/",1,"",{i:"assets/logos/forbidden-lands.webp",h:44}],
    ["_more","Weitere Systeme","","",0,"grp"],
    ["etr","Eat the Reich","Vampir-Kommandos","etr/",1,"",{i:"assets/logos/eat-the-reich.webp",h:50}],
    ["wildsea","The Wildsea","Schiffe im Blätterwald","wildsea/",1,"",{m:"assets/logos/the-wildsea.webp",w:92,h:28}],
    ["triangle","Triangle Agency","Büro-Horror","triangle/",1,"",{m:"assets/logos/triangle-agency.webp",w:86,h:30}],
    ["compass","Broken Compass","Pulp-Abenteuer","compass/",1,"",{m:"assets/logos/broken-compass.webp",w:84,h:31}]
  ];
  var css = document.createElement("style");
  css.textContent = "@font-face{font-family:TmBebas;src:url("+BASE+"assets/fonts/bebas-neue-latin-400-normal.woff2) format('woff2');font-display:swap}@font-face{font-family:TmJost;font-weight:700;src:url("+BASE+"assets/fonts/jost-latin-700-normal.woff2) format('woff2');font-display:swap}@font-face{font-family:TmFell;src:url("+BASE+"assets/fonts/im-fell-double-pica-sc-latin-400-normal.woff2) format('woff2');font-display:swap}@font-face{font-family:TmTeko;font-weight:600;src:url("+BASE+"assets/fonts/teko-latin-600-normal.woff2) format('woff2');font-display:swap}@font-face{font-family:TmArchivo;src:url("+BASE+"assets/fonts/archivo-black-latin-400-normal.woff2) format('woff2');font-display:swap}@font-face{font-family:TmOswald;font-weight:600;src:url("+BASE+"assets/fonts/oswald-latin-600-normal.woff2) format('woff2');font-display:swap}.tm-dd button{display:flex!important;align-items:center;min-height:46px;padding:6px 12px!important}.tm-dd button.sub2{min-height:42px}.tm-dd button small{display:none!important}.tm-dd button b{font-size:inherit}.tm-dd .tm-logo{display:block;flex:none;background:currentColor;-webkit-mask:var(--lg) left center/contain no-repeat;mask:var(--lg) left center/contain no-repeat}.tm-dd .tm-img{display:block;width:auto;max-width:100%}.topbar .tm-caret{flex:none;margin:0 auto 0 -2px;width:24px;height:24px;padding:0;display:inline-flex;align-items:center;justify-content:center;background:none;border:0;border-radius:6px;color:inherit;opacity:.5;cursor:pointer;transition:opacity .15s,background .15s}.topbar .tm-caret:hover,.topbar .tm-caret[aria-expanded=true]{opacity:1;background:rgba(255,255,255,.08)}.topbar .tm-caret svg{width:12px;height:12px;transition:transform .15s}.topbar .tm-caret[aria-expanded=true] svg{transform:rotate(180deg)}.topbar .brand{flex:0 1 auto!important}.tm-dd{position:fixed;z-index:99999;min-width:230px;max-width:calc(100vw - 16px);padding:6px;border-radius:12px;box-shadow:0 12px 36px rgba(0,0,0,.55);animation:tmIn .12s ease-out}.tm-dd button{display:block;width:100%;text-align:left;margin:0;padding:9px 11px;border-radius:8px;border:1px solid transparent;background:none;color:inherit;font:inherit;cursor:pointer}.tm-dd button:hover{background:rgba(255,255,255,.07)}.tm-dd button b{display:block;font-weight:600;font-size:14px}.tm-dd button small{display:block;opacity:.6;font-size:11.5px;margin-top:1px}.tm-dd .tm-grp{padding:8px 11px 3px;font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;opacity:.5}.tm-dd button.sub1{margin-left:8px;width:calc(100% - 8px)}.tm-dd button.sub2{margin-left:24px;width:calc(100% - 24px);border-left:2px solid rgba(255,255,255,.14);border-radius:0 8px 8px 0}.tm-dd button.on{cursor:default;border-color:var(--tm-acc);background:rgba(255,255,255,.05)}.tm-dd button.on b{color:inherit}.tm-dd button.sub2{max-height:60px;overflow:hidden;transition:max-height .28s ease,opacity .22s ease,min-height .28s ease,padding .28s ease}.tm-dd button.sub2.sub-h{max-height:0!important;min-height:0!important;padding-top:0!important;padding-bottom:0!important;opacity:0;border-width:0;pointer-events:none}@keyframes tmIn{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}";
  document.head.appendChild(css);
  function cur(){ var p = location.pathname; return /\/locallegends\//.test(p) ? "locallegends" : /\/nights\//.test(p) ? "paynetown" : /\/otherscape\//.test(p) ? "otherscape" : /\/cityofmist\//.test(p) ? (/^#rw/.test(location.hash) ? "cm_rw" : /^#(ss|spieler|sl)/.test(location.hash) ? "cm_ss" : "cityofmist") : /\/etr\//.test(p) ? "etr" : /\/vaesen\//.test(p) ? "vaesen" : /\/tftl\//.test(p) ? "tftl" : /\/forbidden\//.test(p) ? "forbidden" : /\/wildsea\//.test(p) ? "wildsea" : /\/triangle\//.test(p) ? "triangle" : /\/compass\//.test(p) ? "compass" : "wake"; }
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
    el.style.setProperty("--tm-acc", v("--acc") || v("--red") || (bs ? bs.color : "#c9a24b"));
  }
  function open(){
    close(); var c = cur(); dd = document.createElement("div"); dd.className = "tm-dd"; dd.setAttribute("role","menu");
    var par = "", touch = window.matchMedia && matchMedia("(hover:none)").matches, curPar = ""; TOOLS.forEach(function(t){ if(t[5]!=="grp"){ if(t[4]!==2) par = t[0]; if(t[0]===c) curPar = par; } }); par = "";
    dd.innerHTML = TOOLS.map(function(t){ if(t[5]==="grp") return '<div class="tm-grp">'+t[1]+'</div>'; var st = t[6], nm = '<b>'+t[1]+'</b>';
      if(st && st.m) nm = '<b class="tm-logo" role="img" aria-label="'+t[1]+'" style="--lg:url('+BASE+st.m+');width:'+st.w+'px;height:'+st.h+'px"></b>';
      else if(st && st.i) nm = '<img class="tm-img" src="'+BASE+st.i+'" alt="'+t[1]+'" style="height:'+st.h+'px">';
      else if(st && st.f) nm = '<b style="font-family:'+st.f+',Impact,sans-serif;font-weight:'+({TmOswald:600,TmJost:700,TmTeko:600}[st.f]||400)+';font-size:'+st.s+'px;letter-spacing:'+st.ls+(st.u?';text-transform:uppercase':'')+'">'+t[1]+'</b>';
      if(t[4]!==2) par = t[0]; return '<button role="menuitem" data-m="'+t[0]+'" data-p="'+par+'" class="'+(t[0]===c?"on":"")+(t[4]===2?" sub2":" sub1")+(t[4]===2 && !touch && par!==curPar ? " sub-h" : "")+'" title="'+t[1]+'">'+nm+'<small>'+t[2]+'</small></button>'; }).join("");
    themed(dd);
    var ht = null; dd.addEventListener("mouseover", function(e){ var b = e.target.closest && e.target.closest("button"); clearTimeout(ht); if(!b) return; var pp = b.dataset.p; if(!dd.querySelector('.sub2.sub-h[data-p="'+pp+'"]')) return; ht = setTimeout(function(){ if(dd) dd.querySelectorAll('.sub2[data-p="'+pp+'"]').forEach(function(x){ x.classList.remove("sub-h"); }); }, 1500); });
    dd.addEventListener("mouseleave", function(){ clearTimeout(ht); });
    dd.addEventListener("click", function(e){
      var b = e.target.closest("button"); if(!b) return; var m = b.dataset.m; if(m===c) return close();
      if(/^cm_|^cityofmist$/.test(m) && /\/cityofmist\//.test(location.pathname)){ location.hash = TOOLS.filter(function(t){return t[0]===m;})[0][3].split("/")[1]; return close(); }
      if(/^vae/.test(m) && /\/vaesen\//.test(location.pathname)){ location.hash = m==="vaesen" ? "start" : TOOLS.filter(function(t){return t[0]===m;})[0][3].split("/")[1]; return close(); }
      try{ localStorage.setItem("gm_tool_mode_v1", /^vae/.test(m) ? "vaesen" : /^cm_/.test(m) ? "cityofmist" : m); }catch(x){}
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
  bcss.textContent = ".topbar .tm-book{flex:none;margin-left:auto;margin-right:8px;width:40px;height:40px;padding:0;display:inline-flex;align-items:center;justify-content:center;background:rgba(127,127,127,.10);border:1px solid rgba(127,127,127,.38);border-radius:10px;color:inherit;font:inherit;font-size:13px;font-weight:600;letter-spacing:.02em;cursor:pointer;white-space:nowrap;transition:background .15s}.topbar .tm-book:hover{filter:brightness(.96)}.topbar .tm-book + .tb-burger{margin-left:0!important}.topbar .tm-map{margin-right:6px}.topbar .tm-map + .tm-book{margin-left:0!important}";
  document.head.appendChild(bcss);
  var bdd = null;
  document.addEventListener("click", function(e){ if(bdd && !(e.target.closest && e.target.closest(".tm-dd"))){ bdd.remove(); bdd = null; } });
  document.addEventListener("keydown", function(e){ if(e.key==="Escape" && bdd){ bdd.remove(); bdd = null; } });
  function bookBtn(){
    var bar = document.querySelector(".topbar"); if(!bar || !window.gmBook || bar.querySelector(".tm-book")) return;
    var burger = bar.querySelector(".tb-burger"); if(!burger) return;
    var b = document.createElement("button"); b.type = "button"; b.className = "tm-book"; b.setAttribute("aria-label","Buch öffnen"); b.innerHTML = '<svg viewBox="0 0 512 512" width="22" height="22" fill="none" stroke="currentColor" stroke-width="30" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true"><path d="M60 100H18V458H494V100H452"/><path d="M58 52C150 52 212 74 256 100V452C212 430 150 412 58 412Z"/><path d="M454 52C362 52 300 74 256 100V452C300 430 362 412 454 412Z"/></svg>';
    function info(){ try{ return window.gmBook(); }catch(e){ return null; } }
    b.addEventListener("mouseenter", function(){ var i = info(); b.title = i ? i.name + " öffnen" : "Buch öffnen"; });
    b.addEventListener("click", function(e){ e.stopPropagation(); var i = info();
      if(i && i.books && i.books.length>1){
        if(bdd){ bdd.remove(); bdd = null; return; }
        bdd = document.createElement("div"); bdd.className = "tm-dd"; bdd.setAttribute("role","menu"); bdd.style.minWidth = "220px";
        bdd.innerHTML = i.books.map(function(k,n){ return '<button role="menuitem" data-n="'+n+'"><span style="display:block"><b>'+k.name+'</b><span style="display:block;opacity:.5;font-size:11px;margin-top:1px">'+k.sub+'</span></span></button>'; }).join("");
        themed(bdd);
        bdd.addEventListener("click", function(ev){ var x = ev.target.closest("button"); if(!x) return; var k = i.books[+x.dataset.n]; bdd.remove(); bdd = null; k.open(); });
        document.body.appendChild(bdd);
        var r = b.getBoundingClientRect(), w = bdd.offsetWidth;
        bdd.style.top = (r.bottom + 6) + "px"; bdd.style.left = Math.max(8, Math.min(r.right - w, window.innerWidth - w - 8)) + "px";
        return;
      }
      if(i && i.open) i.open(); });
    var cs = getComputedStyle(burger); if(cs.color) b.style.color = cs.color; ["backgroundColor","borderTopColor","borderTopWidth","borderTopStyle","borderRadius","height"].forEach(function(k){ if(cs[k]) b.style[k] = cs[k]; }); b.style.borderStyle = cs.borderTopStyle; b.style.borderColor = cs.borderTopColor; b.style.borderWidth = cs.borderTopWidth; burger.insertAdjacentElement("beforebegin", b);
    if(window.gmMap){ var m = b.cloneNode(false); m.className = "tm-book tm-map"; m.setAttribute("aria-label","Stadtkarte öffnen"); m.title = "Stadtkarte öffnen";
      m.innerHTML = '<svg viewBox="0 0 512 512" width="22" height="22" fill="none" stroke="currentColor" stroke-width="30" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true"><path d="M30 118 176 64 336 118 482 64V394L336 448 176 394 30 448Z"/><path d="M176 64V394M336 118V448"/></svg>';
      m.addEventListener("click", function(e){ e.stopPropagation(); try{ window.gmMap(); }catch(x){} });
      b.insertAdjacentElement("beforebegin", m); }
  }
  function ensure(){ bookBtn(); var b = document.querySelector(".topbar .brand"); if(b && !(b.nextElementSibling && b.nextElementSibling.classList.contains("tm-caret"))){ caret = null; init(); } }
  new MutationObserver(ensure).observe(document.documentElement, {childList:true, subtree:true});
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", function(){ init(); bookBtn(); }); else { init(); bookBtn(); }
})();
