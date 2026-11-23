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
    ["tftl","Tales from the Loop","Stålenhag · 80er","tftl/",1,"",{i:"assets/logos/tales-from-the-loop.webp",h:26,dm:"assets/logos/tales-from-the-loop.webp",w:150}],
    ["tftl_flood","Things from the Flood","","tftl/#flood",2,"",{m:"assets/logos/things-from-the-flood.webp",w:124,h:13,c:2}],
    ["tftl_es","The Electric State","","tftl/#es",2,"",{m:"assets/logos/electric-state.webp",w:64,h:42,c:2}],
    ["forbidden","Forbidden Lands","Free League","forbidden/",1,"",{i:"assets/logos/forbidden-lands.webp",h:44}],
    ["_more","Weitere Systeme","","",0,"grp"],
    ["etr","Eat the Reich","Vampir-Kommandos","etr/",1,"",{i:"assets/logos/eat-the-reich.webp",h:50}],
    ["wildsea","The Wildsea","Schiffe im Blätterwald","wildsea/",1,"",{m:"assets/logos/the-wildsea.webp",w:92,h:28}],
    ["triangle","Triangle Agency","Büro-Horror","triangle/",1,"",{i:"assets/logos/triangle-agency.webp",h:32,dm:"assets/logos/triangle-agency.webp",w:90}],
    ["compass","Broken Compass","Pulp-Abenteuer","compass/",1,"",{m:"assets/logos/broken-compass.webp",w:84,h:31}],
    ["dragonbane","Dragonbane","Fantasy · Free League","dragonbane/",1,"",{i:"assets/logos/dragonbane.webp",h:22,dm:"assets/logos/dragonbane.webp",w:110}],
    ["db_arkand","Arkand","Stadt der Wellen und Flammen","dragonbane/#arkand",2,"",{f:"TmFell",s:19,ls:".02em"}],
    ["heart","Heart","","heart/",1,"",{m:"assets/logos/heart.webp",w:66,h:27}],
    ["ht_dagger","Dagger in the Heart","Kampagne","heart/#dagger",2,"",{m:"heart/img/dagger/logo-zeile-hell.svg",w:150,h:18}],
    ["ht_blackops","Vermissian Black Ops","","heart/#blackops",2,"",{f:"TmBebas",s:19,ls:".06em"}],
    ["ht_doors","Doors to Elsewhere","","heart/#doors",2,"",{f:"TmBebas",s:19,ls:".06em"}],
    ["household","Household","Tierische Abenteuer","household/",1,"",{m:"assets/logos/household.webp",w:50,h:30}],
    ["moerkborg","Mörk Borg","","moerkborg/",1,"",{m:"assets/logos/moerk-borg.webp",w:44,h:31}],
    ["savageworlds","Savage Worlds","Universalsystem","savageworlds/",1,"",{i:"assets/logos/savage-worlds.webp",h:34}],
    ["slugblaster","Slugblaster","","slugblaster/",1,"",{m:"assets/logos/slugblaster.webp",w:64,h:37}],
    ["sb_oolroob","Oolroob","","slugblaster/#oolroob",2,"",{f:"TmBebas",s:19,ls:".06em"}],
    ["spire","The Spire","","spire/",1,"",{m:"assets/logos/the-spire.webp",w:34,h:34}],
    ["pico","Pico","Minimalsystem","pico/",1,"",{m:"assets/logos/pico.webp",w:60,h:30}]
  ];
  var css = document.createElement("style");
  css.textContent = "@font-face{font-family:TmBebas;src:url("+BASE+"assets/fonts/bebas-neue-latin-400-normal.woff2) format('woff2');font-display:swap}@font-face{font-family:TmJost;font-weight:700;src:url("+BASE+"assets/fonts/jost-latin-700-normal.woff2) format('woff2');font-display:swap}@font-face{font-family:TmFell;src:url("+BASE+"assets/fonts/im-fell-double-pica-sc-latin-400-normal.woff2) format('woff2');font-display:swap}@font-face{font-family:TmTeko;font-weight:600;src:url("+BASE+"assets/fonts/teko-latin-600-normal.woff2) format('woff2');font-display:swap}@font-face{font-family:TmArchivo;src:url("+BASE+"assets/fonts/archivo-black-latin-400-normal.woff2) format('woff2');font-display:swap}@font-face{font-family:TmOswald;font-weight:600;src:url("+BASE+"assets/fonts/oswald-latin-600-normal.woff2) format('woff2');font-display:swap}.tm-dd button{display:flex!important;align-items:center;min-height:46px;padding:6px 12px!important}.tm-dd button.sub2{min-height:42px}.tm-dd button small{display:none!important}.tm-dd button b{font-size:inherit}.tm-dd .tm-logo{display:block;flex:none;background:currentColor;-webkit-mask:var(--lg) left center/contain no-repeat;mask:var(--lg) left center/contain no-repeat}.tm-dd .tm-img{display:block;width:auto;max-width:100%}.topbar .tm-caret{flex:none;margin:0 auto 0 -2px;width:24px;height:24px;padding:0;display:inline-flex;align-items:center;justify-content:center;background:none;border:0;border-radius:6px;color:inherit;opacity:.5;cursor:pointer;transition:opacity .15s,background .15s}.topbar .tm-caret:hover,.topbar .tm-caret[aria-expanded=true]{opacity:1;background:rgba(255,255,255,.08)}.topbar .tm-caret svg{width:12px;height:12px;transition:transform .15s}.topbar .tm-caret[aria-expanded=true] svg{transform:rotate(180deg)}.topbar .brand{flex:0 1 auto!important}.tm-dd{position:fixed;z-index:99999;min-width:230px;max-width:calc(100vw - 16px);padding:6px;border-radius:12px;box-shadow:0 12px 36px rgba(0,0,0,.55);animation:tmIn .12s ease-out}.tm-dd button{display:block;width:100%;text-align:left;margin:0;padding:9px 11px;border-radius:8px;border:1px solid transparent;background:none;color:inherit;font:inherit;cursor:pointer}.tm-dd button:hover{background:rgba(255,255,255,.07)}.tm-dd button b{display:block;font-weight:600;font-size:14px}.tm-dd button small{display:block;opacity:.6;font-size:11.5px;margin-top:1px}.tm-dd .tm-grp{padding:8px 11px 3px;font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;opacity:.5}.tm-dd button.sub1{margin-left:8px;width:calc(100% - 8px)}.tm-dd button.sub2{margin-left:24px;width:calc(100% - 24px);border-left:2px solid rgba(255,255,255,.14);border-radius:0 8px 8px 0}.tm-dd button.on{cursor:default;border-color:var(--tm-acc);background:rgba(255,255,255,.05)}.tm-dd button.on b{color:inherit}.tm-dd button.sub2{max-height:60px;overflow:hidden;transition:max-height .28s ease,opacity .22s ease,min-height .28s ease,padding .28s ease}.tm-dd button.sub2.sub-h{max-height:0!important;min-height:0!important;padding-top:0!important;padding-bottom:0!important;opacity:0;border-width:0;pointer-events:none}.tm-dd{min-width:min(380px,calc(100vw - 16px));overflow-y:auto;overscroll-behavior:contain}.tm-dd .tm-grid{display:grid;grid-template-columns:1fr 1fr;grid-auto-flow:row dense;column-gap:4px;row-gap:0}.tm-dd .tm-grid button{min-width:0;overflow:hidden}.tm-dd .tm-grid button.sub1{margin-left:0;width:100%}.tm-dd .tm-grid button.sub2{grid-column:1/-1}.tm-dd .tm-grid button.sub2.c2{grid-column:2;margin-left:12px;width:calc(100% - 12px)}.tm-dd .tm-grid:empty{display:none}@keyframes tmIn{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}";
  document.head.appendChild(css);
  function cur(){ var p = location.pathname; return /\/locallegends\//.test(p) ? "locallegends" : /\/nights\//.test(p) ? "paynetown" : /\/otherscape\//.test(p) ? "otherscape" : /\/cityofmist\//.test(p) ? (/^#rw/.test(location.hash) ? "cm_rw" : /^#(ss|spieler|sl)/.test(location.hash) ? "cm_ss" : "cityofmist") : /\/etr\//.test(p) ? "etr" : /\/vaesen\//.test(p) ? "vaesen" : /\/tftl\//.test(p) ? (/^#flood/.test(location.hash) ? "tftl_flood" : /^#es/.test(location.hash) ? "tftl_es" : "tftl") : /\/forbidden\//.test(p) ? "forbidden" : /\/wildsea\//.test(p) ? "wildsea" : /\/triangle\//.test(p) ? "triangle" : /\/compass\//.test(p) ? "compass" : /\/dragonbane\//.test(p) ? (/^#(arkand|k\/ark|a\/ark-)/.test(location.hash) ? "db_arkand" : "dragonbane") : /\/heart\//.test(p) ? (/^#blackops/.test(location.hash) ? "ht_blackops" : /^#doors/.test(location.hash) ? "ht_doors" : /^#dagger/.test(location.hash) ? "ht_dagger" : "heart") : /\/household\//.test(p) ? "household" : /\/moerkborg\//.test(p) ? "moerkborg" : /\/savageworlds\//.test(p) ? "savageworlds" : /\/slugblaster\//.test(p) ? (/^#oolroob/.test(location.hash) ? "sb_oolroob" : "slugblaster") : /\/spire\//.test(p) ? "spire" : /\/pico\//.test(p) ? "pico" : "wake"; }
  var caret = null, dd = null;
  function close(){ if(dd){ dd.remove(); dd = null; } if(caret) caret.setAttribute("aria-expanded","false"); }
  function lum(c){ var m = (c||"").match(/\d+(\.\d+)?/g); if(!m || m.length<3) return null; return 0.299*m[0]+0.587*m[1]+0.114*m[2]; }
  function pal(){
    var rs = getComputedStyle(document.documentElement), bar = document.querySelector(".topbar"), brand = document.querySelector(".topbar .brand");
    function v(n){ return (rs.getPropertyValue(n)||"").trim(); }
    var bg = v("--panel-raised") || v("--panel2") || v("--panel"), bodyC = getComputedStyle(document.body).color, fg = bodyC;
    if(!bg){ var bb = bar ? getComputedStyle(bar).backgroundColor : ""; bg = (bb && lum(bb)!==null && !/rgba\(.*,\s*0\)$/.test(bb)) ? bb : "#1b1816"; }
    var tmp = document.createElement("i"); tmp.style.color = bg; document.body.appendChild(tmp); var bgRgb = getComputedStyle(tmp).color; tmp.remove();
    var lb = lum(bgRgb), lf = lum(fg);
    if(lb !== null && (lf === null || Math.abs(lb - lf) < 90)) fg = lb < 128 ? "#f2ede4" : "#1b1816";
    return {bg:bg, fg:fg, dark: lb === null ? true : lb < 128};
  }
  function themed(el){
    var rs = getComputedStyle(document.documentElement), brand = document.querySelector(".topbar .brand"), bar = document.querySelector(".topbar");
    var bs = brand ? getComputedStyle(brand) : null, bb = bar ? getComputedStyle(bar) : null;
    function v(n){ return (rs.getPropertyValue(n)||"").trim(); }
    var P = pal();
    el.style.background = P.bg; el.style.color = P.fg;
    el.style.border = "1px solid " + (bb && bb.borderBottomColor && bb.borderBottomColor!=="rgba(0, 0, 0, 0)" ? bb.borderBottomColor : "rgba(255,255,255,.15)");
    el.style.fontFamily = getComputedStyle(document.body).fontFamily;
    el.style.setProperty("--tm-acc", v("--acc") || v("--red") || (bs ? bs.color : "#c9a24b"));
  }
  function open(){
    close(); var c = cur(); dd = document.createElement("div"); dd.className = "tm-dd"; dd.setAttribute("role","menu");
    var dark = pal().dark;
    var par = "", touch = window.matchMedia && matchMedia("(hover:none)").matches, curPar = ""; TOOLS.forEach(function(t){ if(t[5]!=="grp"){ if(t[4]!==2) par = t[0]; if(t[0]===c) curPar = par; } }); par = "";
    dd.innerHTML = TOOLS.map(function(t){ if(t[5]==="grp") return (t[0]==="_mist" ? '' : '</div>')+'<div class="tm-grp">'+t[1]+'</div><div class="tm-grid">'; var st = t[6], nm = '<b>'+t[1]+'</b>';
      if(st && st.dm && dark) nm = '<b class="tm-logo" role="img" aria-label="'+t[1]+'" style="--lg:url('+BASE+st.dm+');width:'+st.w+'px;height:'+st.h+'px"></b>';
      else if(st && st.m) nm = '<b class="tm-logo" role="img" aria-label="'+t[1]+'" style="--lg:url('+BASE+st.m+');width:'+st.w+'px;height:'+st.h+'px"></b>';
      else if(st && st.i) nm = '<img class="tm-img" src="'+BASE+st.i+'" alt="'+t[1]+'" style="height:'+st.h+'px">';
      else if(st && st.f) nm = '<b style="font-family:'+st.f+',Impact,sans-serif;font-weight:'+({TmOswald:600,TmJost:700,TmTeko:600}[st.f]||400)+';font-size:'+st.s+'px;letter-spacing:'+st.ls+(st.u?';text-transform:uppercase':'')+'">'+t[1]+'</b>';
      if(t[4]!==2) par = t[0]; return '<button role="menuitem" data-m="'+t[0]+'" data-p="'+par+'" class="'+(t[0]===c?"on":"")+(t[4]===2?" sub2":" sub1")+(st&&st.c?" c"+st.c:"")+(t[4]===2 && t[0]!==c ? " sub-h" : "")+'" title="'+t[1]+'">'+nm+'<small>'+t[2]+'</small></button>'; }).join("")+'</div>';
    themed(dd);
    var ht = null; dd.addEventListener("mouseover", function(e){ var b = e.target.closest && e.target.closest("button"); clearTimeout(ht); if(!b) return; var pp = b.dataset.p; if(!dd.querySelector('.sub2.sub-h[data-p="'+pp+'"]')) return; ht = setTimeout(function(){ if(dd) dd.querySelectorAll('.sub2[data-p="'+pp+'"]').forEach(function(x){ x.classList.remove("sub-h"); }); }, 1500); });
    dd.addEventListener("mouseleave", function(){ clearTimeout(ht); });
    var lt = null, longHit = false; function openSubs(pp){ if(dd) dd.querySelectorAll('.sub2[data-p="'+pp+'"]').forEach(function(x){ x.classList.remove("sub-h"); }); }
    dd.addEventListener("touchstart", function(e){ var b = e.target.closest && e.target.closest("button"); clearTimeout(lt); longHit = false; if(!b) return; var pp = b.dataset.p; if(!dd.querySelector('.sub2.sub-h[data-p="'+pp+'"]')) return; lt = setTimeout(function(){ longHit = true; openSubs(pp); }, 1500); }, {passive:true});
    ["touchend","touchmove","touchcancel"].forEach(function(n){ dd.addEventListener(n, function(){ clearTimeout(lt); }, {passive:true}); });
    dd.addEventListener("contextmenu", function(e){ e.preventDefault(); });
    dd.addEventListener("click", function(e){ if(longHit){ e.stopPropagation(); e.preventDefault(); longHit = false; } }, true);
    dd.addEventListener("click", function(e){
      var b = e.target.closest("button"); if(!b) return; var m = b.dataset.m; if(m===c) return close();
      if(/^cm_|^cityofmist$/.test(m) && /\/cityofmist\//.test(location.pathname)){ location.hash = TOOLS.filter(function(t){return t[0]===m;})[0][3].split("/")[1]; return close(); }
      if(/^vae/.test(m) && /\/vaesen\//.test(location.pathname)){ location.hash = m==="vaesen" ? "start" : TOOLS.filter(function(t){return t[0]===m;})[0][3].split("/")[1]; return close(); }
      if(/^db_arkand$|^dragonbane$/.test(m) && /\/dragonbane\//.test(location.pathname)){ location.hash = m==="dragonbane" ? "start" : "arkand"; return close(); }
      if(/^ht_|^heart$/.test(m) && /\/heart\//.test(location.pathname)){ location.hash = m==="heart" ? "start" : m==="ht_blackops" ? "blackops" : m==="ht_doors" ? "doors" : "dagger"; return close(); }
      if(/^tftl/.test(m) && /\/tftl\//.test(location.pathname)){ location.hash = m==="tftl" ? "start" : m==="tftl_flood" ? "flood" : "es"; return close(); }
      try{ localStorage.setItem("gm_tool_mode_v1", /^tftl/.test(m) ? "tftl" : /^vae/.test(m) ? "vaesen" : /^cm_/.test(m) ? "cityofmist" : /^ht_/.test(m) ? "heart" : m==="db_arkand" ? "dragonbane" : m); }catch(x){}
      var t = TOOLS.filter(function(t){ return t[0]===m; })[0]; location.href = BASE + t[3];
    });
    document.body.appendChild(dd);
    var r = caret.getBoundingClientRect(), w = dd.offsetWidth;
    dd.style.top = (r.bottom + 6) + "px"; dd.style.maxHeight = Math.max(160, window.innerHeight - r.bottom - 14) + "px"; dd.style.left = Math.max(8, Math.min(r.left - 8, window.innerWidth - w - 8)) + "px";
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
  /* Such- und Galerie-Knopf im Header (überall, wo es Suche bzw. Galerie-Bilder gibt): sitzen rechts vor dem Burger, wie bei Dragonbane */
  var scss = document.createElement("style");
  scss.textContent = ".topbar .tm-sg{flex:none;width:40px;height:40px;padding:0;margin:0 6px 0 0;display:inline-flex;align-items:center;justify-content:center;background:rgba(127,127,127,.10);border:1px solid rgba(127,127,127,.38);border-radius:10px;color:inherit;cursor:pointer;transition:filter .15s}.topbar .tm-sg:hover{filter:brightness(.96)}.topbar .tm-sg svg{width:22px;height:22px}.topbar .tm-sg + .tb-burger{margin-left:0!important}.topbar .tm-book + .tm-sg{margin-left:0}";
  document.head.appendChild(scss);
  var GALKEY = {wake:"wake", cityofmist:"cityofmist", cm_rw:"cityofmist", cm_ss:"cityofmist", locallegends:"locallegends", paynetown:"nights", otherscape:"otherscape", vaesen:"vaesen", slugblaster:"slugblaster", tftl:"tftl", tftl_flood:"tftl_flood", tftl_es:"tftl_es"};
  function searchFn(){
    var w = window;
    return typeof w.sucheOpen === "function" ? function(){ w.sucheOpen(); } :
      w.SBS && typeof w.SBS.open === "function" ? function(){ w.SBS.open(); } :
      typeof w.srOpen === "function" ? function(){ w.srOpen(); } :
      typeof w.sOpen === "function" ? function(){ w.sOpen(true); } : null;
  }
  window.gmSearchFn = searchFn;
  function sgBtns(){
    var bar = document.querySelector(".topbar"); if(!bar || bar.querySelector(".topbar-actions")) return;
    var burger = bar.querySelector(".tb-burger") || bar.querySelector('button[aria-label="Menü"]'); if(!burger) return;
    var cs = getComputedStyle(burger), ibc = burger.classList.contains("ib") ? " ib" : "";
    function mk(id, titel, svg, fn){
      var b = document.createElement("button"); b.type = "button"; b.className = "tm-sg" + ibc; b.id = id; b.title = titel; b.setAttribute("aria-label", titel);
      b.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + svg + '</svg>';
      if(cs.color) b.style.color = cs.color; ["backgroundColor","borderTopColor","borderTopWidth","borderTopStyle","borderRadius"].forEach(function(k){ if(cs[k]) b.style[k] = cs[k]; });
      b.style.borderStyle = cs.borderTopStyle; b.style.height = "40px";
      b.addEventListener("click", function(e){ e.stopPropagation(); fn(); });
      burger.insertAdjacentElement("beforebegin", b);
    }
    if(!document.getElementById("tbSuche") && searchFn()) mk("tbSuche", "Suche", '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l5 5"/>', function(){ var f = searchFn(); if(f) f(); });
    var gk = GALKEY[cur()], gf = window.gmGalerie || (gk && window.Galerie && Galerie.has && Galerie.has(gk) ? function(){ Galerie.open(gk); } : null);
    if(!document.getElementById("tbGalerie") && gf) mk("tbGalerie", "Galerie", '<rect x="3.5" y="4.5" width="17" height="15" rx="1.5"/><circle cx="9" cy="10" r="1.6"/><path d="M4 18l5-5 4 4 3-3 4 4"/>', gf);
  }
  function ordnen(){
    var bar = document.querySelector(".topbar"); if(!bar) return;
    var burger = bar.querySelector(".tb-burger") || bar.querySelector('button[aria-label="Menü"]'); if(!burger) return;
    var seq = [].concat([].slice.call(bar.querySelectorAll(".tm-info")), [].slice.call(bar.querySelectorAll(".tm-map")), [].slice.call(bar.querySelectorAll(".tm-book:not(.tm-map)")), [].slice.call(bar.querySelectorAll(".tm-sg")));
    var kids = [].slice.call(bar.children), ok = true, last = -1;
    seq.forEach(function(e){ var i = kids.indexOf(e); if(i < last) ok = false; last = i; });
    if(ok) return;
    seq.forEach(function(e){ burger.insertAdjacentElement("beforebegin", e); });
  }
  function ensure(){ bookBtn(); sgBtns(); ordnen(); var b = document.querySelector(".topbar .brand"); if(b && !(b.nextElementSibling && b.nextElementSibling.classList.contains("tm-caret"))){ caret = null; init(); } }
  window.gmToolCur = cur; window.gmToolBase = BASE;
  /* Info-Knopf (i) neben dem Buch-Symbol: shared/sysinfo.js, Inhalte in shared/info/<system>.js */
  if(!document.querySelector('script[data-gm-info]')){ var si = document.createElement("script"); si.src = BASE + "shared/sysinfo.js"; si.setAttribute("data-gm-info","1"); document.head.appendChild(si); }
  new MutationObserver(ensure).observe(document.documentElement, {childList:true, subtree:true});
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", function(){ init(); bookBtn(); }); else { init(); bookBtn(); }
  [400,1200,3000].forEach(function(t){ setTimeout(sgBtns, t); });
})();

/* Taste „f“: Suche als Overlay in jedem System. Nutzt die eigene Volltextsuche des Systems (sOpen / SBS / srOpen / sucheOpen);
   ohne eigene Suche öffnet sich das Buch mit der PDF-Textsuche. Im geöffneten Buchleser bleibt „f“ die PDF-Suche. */
(function(){
  document.addEventListener("keydown", function(e){
    if((e.key !== "f" && e.key !== "F") || e.defaultPrevented || e.ctrlKey || e.metaKey || e.altKey) return;
    var t = e.target || {};
    if(/INPUT|TEXTAREA|SELECT/.test(t.tagName || "") || t.isContentEditable) return;
    var v = document.getElementById("bvOverlay") || document.getElementById("bookViewer");
    if(v && !v.hidden && v.style.display !== "none") return;
    if(document.querySelector(".zg-fs")) return;
    var w = window;
    var fn = typeof w.sucheOpen === "function" ? function(){ w.sucheOpen(); } :
      w.SBS && typeof w.SBS.open === "function" ? function(){ w.SBS.open(); } :
      typeof w.srOpen === "function" ? function(){ w.srOpen(); } :
      typeof w.sOpen === "function" ? function(){ w.sOpen(true); } : null;
    if(!fn){
      var b = document.querySelector(".tm-book:not(.tm-map)"); if(!b || !w.BVFind) return;
      e.preventDefault(); b.click(); setTimeout(function(){ try{ w.BVFind.open(); }catch(x){} }, 700); return;
    }
    e.preventDefault(); fn();
  });
})();

/* Taste „m“: Karte öffnen (wo ein System eine Karte hat) */
(function(){
  document.addEventListener("keydown", function(e){
    if((e.key !== "m" && e.key !== "M") || e.defaultPrevented || e.ctrlKey || e.metaKey || e.altKey) return;
    var t = e.target || {}; if(/INPUT|TEXTAREA|SELECT/.test(t.tagName || "") || t.isContentEditable) return;
    var b = document.querySelector(".tm-map"); if(b){ e.preventDefault(); b.click(); }
  });
})();
