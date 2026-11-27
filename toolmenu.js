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
    ["vae_nord","Mythischer Norden","Grundregelwerk · Mysterien","vaesen/#start",2,"",{f:"TmBebas",s:18,ls:".06em"}],
    ["vae_mbi","Mythic Britain & Ireland","Settingbuch · Mysterien","vaesen/#mbi",2,"",{f:"TmBebas",s:18,ls:".06em"}],
    ["tftl","Tales from the Loop","Stålenhag · 80er","tftl/",1,"",{i:"assets/logos/tales-from-the-loop.webp",h:26,dm:"assets/logos/tales-from-the-loop.webp",w:150}],
    ["tftl_flood","Things from the Flood","","tftl/#flood",2,"",{m:"assets/logos/things-from-the-flood.webp",w:124,h:13,c:2}],
    ["tftl_es","The Electric State","","tftl/#es",2,"",{m:"assets/logos/electric-state.webp",w:64,h:42,c:2}],
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
    ["hh_garten","Der Garten","Household Vol. II","household/#g",2,"",{f:"TmFell",s:19,ls:".02em"}],
    ["moerkborg","Mörk Borg","","moerkborg/",1,"",{m:"assets/logos/moerk-borg.webp",w:44,h:31}],
    ["savageworlds","Savage Worlds","Universalsystem","savageworlds/",1,"",{i:"assets/logos/savage-worlds.webp",h:34}],
    ["slugblaster","Slugblaster","","slugblaster/",1,"",{m:"assets/logos/slugblaster.webp",w:64,h:37}],
    ["sb_oolroob","Oolroob","","slugblaster/#oolroob",2,"",{f:"TmBebas",s:19,ls:".06em"}],
    ["spire","The Spire","","spire/",1,"",{m:"assets/logos/the-spire.webp",w:34,h:34}],
    ["pico","Pico","Minimalsystem","pico/",1,"",{m:"assets/logos/pico.webp",w:60,h:30}],
    ["intotheodd","Into the Odd","Erforscher von Bastion","intotheodd/",1,"",{m:"assets/logos/into-the-odd.webp",w:34,h:44}],
    ["cairn","Cairn","Wald-Rollenspiel","cairn/",1,"",{m:"assets/logos/cairn.webp",w:46,h:31}],
    ["mausritter","Mausritter","Schwert und Schnurrhaare","mausritter/",1,"",{m:"assets/logos/mausritter.webp",w:96,h:18}],
    ["discworld","Discworld","Abenteuer in Ankh-Morpork","discworld/",1,"",{i:"assets/logos/discworld.webp",h:24}]
  ];
  var css = document.createElement("style");
  css.textContent = "@font-face{font-family:TmBebas;src:url("+BASE+"assets/fonts/bebas-neue-latin-400-normal.woff2) format('woff2');font-display:swap}@font-face{font-family:TmJost;font-weight:700;src:url("+BASE+"assets/fonts/jost-latin-700-normal.woff2) format('woff2');font-display:swap}@font-face{font-family:TmFell;src:url("+BASE+"assets/fonts/im-fell-double-pica-sc-latin-400-normal.woff2) format('woff2');font-display:swap}@font-face{font-family:TmTeko;font-weight:600;src:url("+BASE+"assets/fonts/teko-latin-600-normal.woff2) format('woff2');font-display:swap}@font-face{font-family:TmArchivo;src:url("+BASE+"assets/fonts/archivo-black-latin-400-normal.woff2) format('woff2');font-display:swap}@font-face{font-family:TmOswald;font-weight:600;src:url("+BASE+"assets/fonts/oswald-latin-600-normal.woff2) format('woff2');font-display:swap}.tm-dd button{display:flex!important;align-items:center;min-height:46px;padding:6px 12px!important}.tm-dd button.sub2{min-height:42px}.tm-dd button small{display:none!important}.tm-dd button b{font-size:inherit}.tm-dd .tm-logo{display:block;flex:none;background:currentColor;-webkit-mask:var(--lg) left center/contain no-repeat;mask:var(--lg) left center/contain no-repeat}.tm-dd .tm-img{display:block;width:auto;max-width:100%}.topbar .tm-caret{flex:none;margin:0 auto 0 -2px;width:24px;height:24px;padding:0;display:inline-flex;align-items:center;justify-content:center;background:none;border:0;border-radius:6px;color:inherit;opacity:.5;cursor:pointer;transition:opacity .15s,background .15s}.topbar .tm-caret:hover,.topbar .tm-caret[aria-expanded=true]{opacity:1;background:rgba(255,255,255,.08)}.topbar .tm-caret svg{width:12px;height:12px;transition:transform .15s}.topbar .tm-caret[aria-expanded=true] svg{transform:rotate(180deg)}.topbar .brand{flex:0 1 auto!important}.tm-dd{position:fixed;z-index:99999;min-width:230px;max-width:calc(100vw - 16px);padding:6px;border-radius:12px;box-shadow:0 12px 36px rgba(0,0,0,.55);animation:tmIn .12s ease-out}.tm-dd button{display:block;width:100%;text-align:left;margin:0;padding:9px 11px;border-radius:8px;border:1px solid transparent;background:none;color:inherit;font:inherit;cursor:pointer}.tm-dd button:hover{background:rgba(255,255,255,.07)}.tm-dd button b{display:block;font-weight:600;font-size:14px}.tm-dd button small{display:block;opacity:.6;font-size:11.5px;margin-top:1px}.tm-dd .tm-grp{padding:8px 11px 3px;font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;opacity:.5}.tm-dd button.sub1{margin-left:8px;width:calc(100% - 8px)}.tm-dd button.sub2{margin-left:24px;width:calc(100% - 24px);border-left:2px solid rgba(255,255,255,.14);border-radius:0 8px 8px 0}.tm-dd button.on{cursor:default;border-color:var(--tm-acc);background:rgba(255,255,255,.05)}.tm-dd button.on b{color:inherit}.tm-dd button.sub2{max-height:60px;overflow:hidden;transition:max-height .28s ease,opacity .22s ease,min-height .28s ease,padding .28s ease}.tm-dd button.sub2.sub-h{max-height:0!important;min-height:0!important;padding-top:0!important;padding-bottom:0!important;opacity:0;border-width:0;pointer-events:none}.tm-dd{min-width:min(380px,calc(100vw - 16px));overflow-y:auto;overscroll-behavior:contain}.tm-dd .tm-grid{display:grid;grid-template-columns:1fr 1fr;grid-auto-flow:row dense;column-gap:4px;row-gap:0}.tm-dd .tm-grid button{min-width:0;overflow:hidden}.tm-dd .tm-grid button.sub1{margin-left:0;width:100%}.tm-dd .tm-grid button.sub2{grid-column:1/-1}.tm-dd .tm-grid button.sub2.c2{grid-column:2;margin-left:12px;width:calc(100% - 12px)}.tm-dd .tm-grid:empty{display:none}@keyframes tmIn{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}";
  document.head.appendChild(css);
  function cur(){ var p = location.pathname; return /\/cairn\//.test(p) ? "cairn" : /\/mausritter\//.test(p) ? "mausritter" : /\/locallegends\//.test(p) ? "locallegends" : /\/nights\//.test(p) ? "paynetown" : /\/otherscape\//.test(p) ? "otherscape" : /\/cityofmist\//.test(p) ? (/^#rw/.test(location.hash) ? "cm_rw" : /^#(ss|spieler|sl)/.test(location.hash) ? "cm_ss" : "cityofmist") : /\/etr\//.test(p) ? "etr" : /\/vaesen\//.test(p) ? (/^#(mbi|som\/(meg|llantywyll|hampstead)(\/|$))/.test(location.hash) ? "vae_mbi" : "vaesen") : /\/tftl\//.test(p) ? (/^#flood/.test(location.hash) ? "tftl_flood" : /^#es/.test(location.hash) ? "tftl_es" : "tftl") : /\/wildsea\//.test(p) ? "wildsea" : /\/triangle\//.test(p) ? "triangle" : /\/compass\//.test(p) ? "compass" : /\/dragonbane\//.test(p) ? (/^#(arkand|k\/ark|a\/ark-)/.test(location.hash) ? "db_arkand" : "dragonbane") : /\/heart\//.test(p) ? (/^#blackops/.test(location.hash) ? "ht_blackops" : /^#doors/.test(location.hash) ? "ht_doors" : /^#dagger/.test(location.hash) ? "ht_dagger" : "heart") : /\/household\//.test(p) ? (/^#g(\/|$)/.test(location.hash) ? "hh_garten" : "household") : /\/moerkborg\//.test(p) ? "moerkborg" : /\/savageworlds\//.test(p) ? "savageworlds" : /\/slugblaster\//.test(p) ? (/^#oolroob/.test(location.hash) ? "sb_oolroob" : "slugblaster") : /\/spire\//.test(p) ? "spire" : /\/pico\//.test(p) ? "pico" : /\/intotheodd\//.test(p) ? "intotheodd" : /\/discworld\//.test(p) ? "discworld" : "wake"; }
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
  var GALKEY = {triangle:"triangle", discworld:"discworld", household:"household", hh_garten:"household", wake:"wake", cityofmist:"cityofmist", cm_rw:"cityofmist", cm_ss:"cityofmist", locallegends:"locallegends", paynetown:"nights", otherscape:"otherscape", vaesen:"vaesen", vae_mbi:"vaesen",  slugblaster:"slugblaster", cairn:"cairn", tftl:"tftl", tftl_flood:"tftl_flood", tftl_es:"tftl_es", intotheodd:"intotheodd", mausritter:"mausritter", compass:"compass"};
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

/* Startseiten zeigen nie Seitenzahlen (nur Detailansichten): Seitenlinks und „S. 12“-Angaben auf der Startseite entfernen */
(function(){
  function isStart(){ return /^#?(?:[a-z]+\/)?(?:start|home)?$/i.test(location.hash || ""); }
  var RE = /\s*(?:·\s*)?\bS\.\s?\d+(?:\s?[–-]\s?\d+)?/g;
  function clean(){
    if(!isStart()) return;
    var root = document.getElementById("app") || document.querySelector("main") || document.body;
    root.querySelectorAll("a.pg-link,.pgl").forEach(function(a){
      var prev = a.previousSibling; if(prev && prev.nodeType === 3) prev.nodeValue = prev.nodeValue.replace(/\s*·\s*$/, "");
      var par = a.parentElement; a.remove();
      if(par && !par.textContent.trim() && !par.querySelector("img,svg")) par.style.display = "none";
    });
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), n, L = [];
    while((n = w.nextNode())){ if(/\bS\.\s?\d/.test(n.nodeValue) && !n.parentElement.closest("input,textarea,[contenteditable]")) L.push(n); }
    L.forEach(function(t){ t.nodeValue = t.nodeValue.replace(RE, "").replace(/^\s*·\s*/, ""); var e = t.parentElement; if(e && !e.textContent.trim() && !e.querySelector("img,svg")) e.style.display = "none"; });
  }
  var pend = 0;
  function later(){ if(pend) return; pend = setTimeout(function(){ pend = 0; clean(); }, 30); }
  function start(){ clean(); new MutationObserver(function(){ if(isStart()) later(); }).observe(document.body, {childList:true, subtree:true}); }
  window.addEventListener("hashchange", later);
  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();

/* Seitenleisten: Titel mit Gedankenstrich zweiteilig – vorne normal, der Rest klein und grau darunter (ohne Strich) */
(function(){
  var SEL = ".nside .ni,.nside .nj,.side a";
  function fit(){
    document.querySelectorAll(SEL).forEach(function(a){
      if(a.dataset.fit) return; a.dataset.fit = 1;
      if(a.children.length) return;
      var t = a.textContent, m = t.split(/\s[–—]\s/);
      if(m.length < 2) return;
      if(!a.title) a.title = t;
      a.textContent = m[0];
      var u = document.createElement("small"); u.className = "slz"; u.textContent = m.slice(1).join(" – "); a.appendChild(u);
    });
  }
  var st = document.createElement("style");
  st.textContent = ".slz{display:block;font-size:.8em;line-height:1.2;opacity:.62;font-weight:400;margin-top:1px;white-space:normal}";
  document.head.appendChild(st);
  var pend = 0;
  function later(){ if(pend) return; pend = setTimeout(function(){ pend = 0; fit(); }, 30); }
  function start(){ fit(); new MutationObserver(later).observe(document.body, {childList:true, subtree:true}); }
  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();

/* Pfeiltasten in allen Systemen: ←/→ wechseln in der Unterleiste (nie in der Kopfzeile), ↑/↓ springen in der Seitenleiste */
(function(){
  var CL = 'a,button,[onclick],[role="tab"]';
  function vis(e){ var r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0 && getComputedStyle(e).visibility !== "hidden"; }
  function isOn(e){ return /(^|\s)(on|active|aktiv|sel|selected|cur|current|is-active)(\s|$)/.test(e.className || "") || e.getAttribute("aria-current") || e.getAttribute("aria-selected") === "true"; }
  function items(box, dir){
    var L = Array.prototype.filter.call(box.querySelectorAll(CL), function(e){ return vis(e) && !e.closest(".topbar,header") && e.textContent.trim() && !/^[‹›<>✎×]$/.test(e.textContent.trim()) && !(e.parentElement && e.parentElement.closest(CL)); });
    return L.sort(function(a, b){ var x = a.getBoundingClientRect(), y = b.getBoundingClientRect(); return dir === "h" ? x.left - y.left : x.top - y.top; });
  }
  /* Unterleiste: waagerechte Reihe außerhalb der Kopfzeile, oben, mit mindestens zwei Einträgen */
  function subBar(){
    /* Systeme können eine Leiste ausdrücklich als Unterleiste markieren (z. B. Abenteuer-Reiter in der Kopfzeile) */
    var mk = document.querySelector("[data-unterleiste]"); if(mk){ var ML = Array.prototype.slice.call(mk.querySelectorAll("a,[onclick]")); if(ML.length >= 2 && ML.some(isOn)) return ML; }
    var top = document.querySelector(".topbar,header"), tb = top ? top.getBoundingClientRect().bottom : 0, best = null, bt = -1;
    var kopfTabs = top ? Array.prototype.filter.call(document.querySelectorAll("a,[onclick]"), function(e){ if(!vis(e) || e.closest(".brand") || e.textContent.trim().length < 3) return false; var q = e.getBoundingClientRect(); return q.top >= 0 && q.bottom <= tb + 2; }).length >= 2 : false;
    document.querySelectorAll("nav,div,section,ul").forEach(function(b){
      if(b.closest(".topbar,header,.modal,.mm-panel")) return;
      var r = b.getBoundingClientRect(); if(r.height < 18 || r.height > 70 || r.top < tb - 2 || r.top > tb + 90 || r.width < innerWidth * .3) return;
      var L = items(b, "h"); if(L.length < 2) return;
      var y0 = L[0].getBoundingClientRect().top; if(!L.every(function(e){ return Math.abs(e.getBoundingClientRect().top - y0) < 14; })) return;
      if(!L.some(isOn)) return;
      /* Ohne Reiter in der Kopfzeile ist die erste Leiste direkt darunter das Hauptmenü – die zählt nicht als Unterleiste */
      if(!kopfTabs && r.top < tb + 10) return;
      if(!best || r.top > bt){ best = L; bt = r.top; }
    });
    return best;
  }
  /* Seitenleiste: links, hoch, mit untereinander stehenden Einträgen */
  function sideBar(){
    var best = null, bn = 0;
    document.querySelectorAll("nav,aside,div,ul").forEach(function(b){
      if(b.closest(".topbar,header,.modal,.mm-panel")) return;
      var r = b.getBoundingClientRect(); if(r.left > 40 || r.width > 380 || r.width < 120 || r.height < 200) return;
      var L = items(b, "v"); if(L.length < 2 || !L.some(isOn)) return;
      if(L.length > bn){ best = L; bn = L.length; }
    });
    return best;
  }
  var last = null, lastH = "";
  function step(L, d, mem){
    var i = -1; L.forEach(function(e, k){ if(isOn(e) && i < 0) i = k; });
    if(mem && last && lastH === location.hash){ var li = L.indexOf(last); if(li >= 0) i = li; }
    var j = i + d; if(j < 0 || j >= L.length) return false;
    var el = L[j]; el.click(); if(mem){ last = el; lastH = location.hash; setTimeout(function(){ lastH = location.hash; var M = sideBar(); if(M){ var t = el.textContent; last = M.filter(function(x){ return x.textContent === t; })[0] || null; } }, 120); }
    return true;
  }
  /* Kopfzeilen-Reiter: Links in der Kopfzeile, sonst die Hauptleiste direkt darunter */
  function headBar(){
    var top = document.querySelector(".topbar,header"); if(!top) return null;
    var tb = top.getBoundingClientRect().bottom;
    var L = Array.prototype.filter.call(document.querySelectorAll("a,[onclick],button"), function(e){ if(!vis(e) || e.closest(".brand,.mm-panel") || e.textContent.trim().length < 3) return false; var q = e.getBoundingClientRect(); return q.top >= 0 && q.bottom <= tb + 2; })
      .sort(function(a, b){ return a.getBoundingClientRect().left - b.getBoundingClientRect().left; });
    if(L.length >= 2) return L;
    var best = null;
    document.querySelectorAll("nav,div,ul").forEach(function(b){
      if(best || b.closest(".topbar,header,.modal,.mm-panel")) return;
      var r = b.getBoundingClientRect(); if(r.top < tb - 2 || r.top > tb + 10 || r.height > 70 || r.width < innerWidth * .3) return;
      var M = items(b, "h"); if(M.length >= 2) best = M;
    });
    return best;
  }
  window.addEventListener("keydown", function(e){
    if((e.ctrlKey || e.metaKey) && !e.altKey && !e.shiftKey && (e.key === "ArrowLeft" || e.key === "ArrowRight")){
      if(/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "") || (e.target && e.target.isContentEditable)) return;
      var H = headBar(); if(!H) return;
      e.preventDefault(); e.stopImmediatePropagation();
      var d = e.key === "ArrowRight" ? 1 : -1, i = -1; H.forEach(function(x, k){ if(isOn(x) && i < 0) i = k; });
      var j = i < 0 ? (d > 0 ? 0 : H.length - 1) : i + d; if(j >= 0 && j < H.length) H[j].click();
      return;
    }
    if(e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) return;
    if(/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "") || (e.target && e.target.isContentEditable)) return;
    if(Array.prototype.some.call(document.querySelectorAll(".modal,.gzoom,.mm-panel.on,.bv-open"), function(e){ var r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0 && getComputedStyle(e).visibility !== "hidden" && getComputedStyle(e).opacity !== "0"; })) return;
    /* Vollbild-Ebenen (Galerie, Buchansicht …) behalten ihre eigenen Pfeiltasten */
    var mid = document.elementFromPoint(innerWidth / 2, innerHeight / 2), fx = mid;
    while(fx && fx !== document.body){ if(getComputedStyle(fx).position === "fixed") return; fx = fx.parentElement; }
    var k = e.key, ok = false;
    if(k === "ArrowLeft" || k === "ArrowRight"){ var S = subBar(); if(S) step(S, k === "ArrowRight" ? 1 : -1); e.preventDefault(); e.stopImmediatePropagation(); }
    else if(k === "ArrowUp" || k === "ArrowDown"){ var B = sideBar(); if(B){ ok = step(B, k === "ArrowDown" ? 1 : -1, true); if(ok){ e.preventDefault(); e.stopImmediatePropagation(); } } }
  }, true);
})();

/* Symbolknöpfe oben rechts: ohne Rand und Hintergrund, nur das Symbol; beim Überfahren ein kleiner, grauer Hinweistext */
(function(){
  var SEL = ".topbar .tm-info,.topbar .tm-info-own,.topbar .tm-book,.topbar .tm-sg,.topbar .tb-burger,.topbar .ib,.topbar .ik";
  var st = document.createElement("style");
  st.textContent =
    SEL + "{border:0!important;background:transparent!important;box-shadow:none!important;position:relative;opacity:.86;transition:opacity .18s ease}" +
    SEL.split(",").map(function(s){ return s + ":hover"; }).join(",") + "{opacity:1;background:transparent!important}" +
    ".topbar [data-tip]::after{content:attr(data-tip);position:absolute;top:calc(100% + 4px);left:50%;transform:translate(-50%,-3px);padding:3px 8px;border-radius:5px;background:rgba(18,20,26,.9);color:#aeb4c0;font:500 11px/1.3 system-ui,-apple-system,'Segoe UI',sans-serif;letter-spacing:.02em;white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .18s ease,transform .18s ease;z-index:200;text-transform:none}" +
    ".topbar [data-tip]:hover::after{opacity:1;transform:translate(-50%,0);transition-delay:.45s}" +
    ".topbar [data-tip]:last-child::after{left:auto;right:4px;transform:translate(0,-3px)}.topbar [data-tip]:last-child:hover::after{transform:none}" +
    "@media (hover:none){.topbar [data-tip]::after{display:none}}";
  document.head.appendChild(st);
  var tips = {"Suche":"Suche (f)","Karte":"Karte (m)"};
  function mark(){
    document.querySelectorAll(SEL).forEach(function(b){
      var t = b.getAttribute("title") || b.getAttribute("aria-label");
      if(b.hasAttribute("data-tip")){ if(b.hasAttribute("title")) b.removeAttribute("title"); return; }
      if(!t) return;
      b.setAttribute("data-tip", tips[t] || t); b.removeAttribute("title");
    });
  }
  var pend = 0;
  function later(){ if(pend) return; pend = setTimeout(function(){ pend = 0; mark(); }, 60); }
  function start(){ mark(); new MutationObserver(later).observe(document.body, {childList:true, subtree:true}); }
  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();

/* Durchsichtige Kopfzeile über breiten Titelbildern: nur solange oben keine Reiter stehen und die Seite ganz oben ist */
(function(){
  var st = document.createElement("style");
  st.textContent =
    "html[data-tmh] .topbar{position:fixed!important;top:0;left:0;right:0;transition:background .25s ease,box-shadow .25s ease,border-color .25s ease}" +
    "html[data-tmh=top] .topbar{background:linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,0))!important;border-color:transparent!important;background-origin:border-box!important;background-repeat:no-repeat!important;box-shadow:none!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important}" +
    "html[data-tmh=top] .topbar>*:not(.brand),html[data-tmh=top] .topbar .tm-caret,html[data-tmh=top] .topbar .brand:not(:has(img)),html[data-tmh=top] .topbar .brand:not(:has(img)) *{color:#fff!important}" +
    "html[data-tmh=top] .topbar svg,html[data-tmh=top] .topbar svg *{stroke:currentColor}" +
    "html[data-tmh=top] .topbar>*{filter:drop-shadow(0 1px 4px rgba(0,0,0,.55))}" +
    "html[data-tmh=top] .topbar .brand.tm-dark img{filter:brightness(0) invert(1)}" +
    "html[data-tmh] .topbar .brand,html[data-tmh] .topbar .tm-caret{transition:opacity .25s ease}" +
    "@media (hover:hover) and (pointer:fine){html[data-tmh=top] .topbar:not(:hover) .brand,html[data-tmh=top] .topbar:not(:hover) .tm-caret{opacity:0}}";
  document.head.appendChild(st);
  function bar(){ return document.querySelector(".topbar"); }
  function hasImg(e){
    var W = innerWidth * .95, t0 = e.getBoundingClientRect().top;
    function ok(k){ var r = k.getBoundingClientRect(); return r.width >= W && r.height >= 150 && r.top - t0 <= 30; }
    if(/url\(/.test(getComputedStyle(e).backgroundImage)) return true;
    var L = e.querySelectorAll("img,picture,video,canvas");
    for(var i = 0; i < L.length; i++) if(ok(L[i])) return true;
    var K = e.querySelectorAll("*"); for(var k = 0; k < K.length && k < 80; k++){ if(/url\(/.test(getComputedStyle(K[k]).backgroundImage) && ok(K[k])) return true; }
    return false;
  }
  function find(){
    var b = bar(); if(!b) return null;
    if(b.querySelector(".ktabs a, #ktabs a")) return null;
    if(document.body.classList.contains("os-start") || document.body.classList.contains("np-start")) return null;
    var on = document.documentElement.hasAttribute("data-tmh"), bb = b.getBoundingClientRect().bottom, tb = on ? 0 : bb;
    var best = null, xs = [innerWidth / 2, 30, innerWidth - 30];
    for(var i = 0; i < xs.length; i++){
      var e = document.elementFromPoint(xs[i], bb + 6);
      while(e && e !== document.body && e !== document.documentElement){
        var r = e.getBoundingClientRect();
        if(r.width >= innerWidth * .97 && r.height >= 220 && Math.abs(r.top - tb) <= 3 && !e.closest(".topbar") && hasImg(e)){ if(!best || r.height > best.getBoundingClientRect().height) best = e; }
        e = e.parentElement;
      }
      if(!best) return null;
    }
    return best;
  }
  var hero = null;
  function darkLogo(){
    var img = document.querySelector(".topbar .brand img"); if(!img || !img.complete || !img.naturalWidth) return;
    try{
      var c = document.createElement("canvas"), w = c.width = 40, h = c.height = 16, x = c.getContext("2d"); x.drawImage(img, 0, 0, w, h);
      var d = x.getImageData(0, 0, w, h).data, s = 0, n = 0;
      for(var i = 0; i < d.length; i += 4){ if(d[i+3] > 120){ s += (d[i]*.3 + d[i+1]*.59 + d[i+2]*.11); n++; } }
      img.closest(".brand").classList.toggle("tm-dark", n > 0 && s / n < 90);
    }catch(e){}
  }
  function scroll(){ var b = bar(); if(!b || !hero) return; var r = hero.getBoundingClientRect(); document.documentElement.setAttribute("data-tmh", r.bottom > b.offsetHeight + 40 ? "top" : "on"); }
  function check(){
    if(window.scrollY > 4 && document.documentElement.hasAttribute("data-tmh")){ scroll(); return; }
    var h = window.scrollY <= 4 ? find() : null;
    hero = h; if(!h) document.documentElement.removeAttribute("data-tmh");
    if(h){ darkLogo(); scroll(); }
  }
  var pend = 0;
  function later(d){ clearTimeout(pend); pend = setTimeout(check, d || 120); }
  window.addEventListener("scroll", scroll, {passive:true});
  window.addEventListener("resize", function(){ later(200); });
  window.addEventListener("hashchange", function(){ document.documentElement.removeAttribute("data-tmh"); hero = null; later(150); setTimeout(check, 900); });
  function start(){ check(); setTimeout(check, 600); setTimeout(check, 1800); setTimeout(check, 3500); new MutationObserver(function(m){ if(m.every(function(x){ return x.target.closest && x.target.closest(".topbar"); })) return; later(); }).observe(document.body, {childList:true, subtree:true}); }
  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
  window.addEventListener("load", function(){ later(50); });
  document.addEventListener("load", function(e){ if(e.target && e.target.tagName === "IMG" && window.scrollY <= 4) later(80); }, true);
})();
