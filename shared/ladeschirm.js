/* Ladeschirm beim Systemwechsel.
   Wird synchron im <head> jeder System-Seite geladen. Zeigt sofort einen Schirm im
   Design des Systems, pausiert alle Animationen der Seite, wartet, bis Skripte,
   Schriften und die sichtbaren Bilder geladen und dekodiert sind, und blendet dann aus.
   Plan: plan/LADESCHIRM_PLAN.md */
(function(){
  "use strict";
  if(window.LS_SKIP) return;
  var D = document, H = D.documentElement;
  var me = D.currentScript, BASE = me ? me.src.replace(/shared\/ladeschirm\.js.*$/, "") : "../";
  var MIN = 400, MAX = 6000, FADE = 320, t0 = Date.now();

  /* ---- System erkennen ---- */
  var p = location.pathname, h = location.hash || "";
  function sys(){
    var m = p.match(/\/(tftl|cityofmist|locallegends|nights|otherscape|vaesen|etr|wildsea|triangle|compass|dragonbane|heart|household|moerkborg|savageworlds|slugblaster|spire|pico|intotheodd|cairn|mausritter|discworld)\//);
    if(!m) return /\/(creator|tools|bookviewer)\//.test(p) ? null : "litm";
    var s = m[1];
    if(s === "tftl") return /^#flood/.test(h) ? "flood" : /^#es/.test(h) ? "es" : "tftl";
    return s;
  }
  var S = sys(); if(!S) return;

  var L = function(f){ return BASE + "assets/logos/" + f; };
  var inv = "filter:brightness(0) invert(1)", dk = "filter:brightness(0);opacity:.85";
  function n(k, tag){ var s = ""; for(var i = 0; i < k; i++) s += "<" + (tag || "i") + "></" + (tag || "i") + ">"; return s; }

  /* bg: Hintergrund · logo: Datei · lf: Logo-Stil · lh: Logo-Höhe · a: Animation · x: Extra-Ebene */
  var T = {
    tftl: {bg:"#f08a1c", logo:L("tales-from-the-loop.webp"), lf:inv, lh:64, a:'<div class="rings">' + n(2) + '</div>', x:'<div class="blur" style="background-image:url(' + BASE + 'assets/lade/tftl.webp)"></div>'},
    flood: {bg:"#2b3a44", logo:L("things-from-the-flood.webp"), lf:inv, lh:40, a:'<div class="ripple">' + n(3) + '</div>'},
    es: {bg:"linear-gradient(#bcd3e6,#7f9fbd 70%,#5d7f9f)", logo:L("electric-state.webp"), lf:inv + ";opacity:.95", lh:140, a:'<div class="vr"><i></i></div>', x:'<div class="haze"></div><div class="scan"></div>'},
    cityofmist: {bg:"#0b0e11", logo:L("city-of-mist.webp"), lh:120, a:'<div class="bar thin gold"><i></i></div>', x:'<div class="mist"></div>'},
    locallegends: {bg:"#4b2a6e", logo:L("local-legends-wortmarke.webp"), lh:120, a:'<div class="panels">' + n(3) + '</div>', x:'<div class="halftone"></div>'},
    nights: {bg:"#050304", logo:L("nights-of-payne-town.webp"), lf:"animation:ls-neonon 3s infinite", lh:260, a:'<div class="neonbar"><i></i></div>', x:'<div class="redglow"></div>'},
    otherscape: {bg:"radial-gradient(#111a29,#070b12)", logo:BASE + "otherscape/img/logo.webp", lh:50, a:'<div class="segs">' + n(12) + '</div>', x:'<div class="scanlines"></div>'},
    litm: {bg:"#efe4cc", logo:L("legend-in-the-mist.webp"), lh:170, a:'<div class="bar"><i></i></div>', x:'<div class="map" style="background-image:url(' + BASE + 'assets/lade/litm-karte.webp)"></div><div class="fogw"></div>'},
    vaesen: {bg:"#e6e0d1", logo:L("vaesen-rot.webp"), lh:56, a:'<div class="rune"></div>'},
    etr: {bg:"#0c1424", logo:L("eat-the-reich.webp"), lh:150, a:'<div class="tele">' + n(10) + '</div>'},
    wildsea: {bg:"#f3f2ea", logo:L("the-wildsea.webp"), lf:dk, lh:140, a:'<svg class="wave" viewBox="0 0 400 60"><path d="M0 30 Q25 5 50 30 T100 30 T150 30 T200 30 T250 30 T300 30 T350 30 T400 30"/></svg>'},
    triangle: {bg:"#f4f1ea", logo:L("triangle-agency.webp"), lh:80, a:'<div class="tri"></div>'},
    compass: {bg:"radial-gradient(#3a2a1c,#1d140e)", logo:L("broken-compass.webp"), lh:130, a:'<div class="compass"><i></i></div>'},
    dragonbane: {bg:"#f3eee6", logo:L("dragonbane.webp"), lh:90, a:'<div class="seal"></div>'},
    heart: {bg:"radial-gradient(ellipse at 50% 100%,#5b0909 0,#21170f 55%,#08151d 100%)", logo:L("heart.webp"), lf:"filter:drop-shadow(0 0 30px #b4341d)", lh:150, a:'', x:'<div class="grow"></div>'},
    household: {bg:"radial-gradient(#4a2d52,#26162b)", logo:L("household.webp"), lf:"filter:brightness(0) invert(.9) sepia(.3)", lh:150, a:'<svg class="hoop" viewBox="0 0 160 160"><circle cx="80" cy="80" r="70" class="ring"/><circle cx="80" cy="80" r="56" class="thread"/><circle cx="80" cy="80" r="56" class="gap"/></svg>'},
    moerkborg: {bg:"#ffe900", logo:L("moerk-borg.webp"), lf:"filter:brightness(0);transform:rotate(-6deg)", lh:240, a:'<div class="slash"><i></i></div>', x:'<div class="mbstripe"></div>'},
    savageworlds: {bg:"radial-gradient(#3a1410,#1b1c1e)", logo:L("savage-worlds.webp"), lh:190, a:'<div class="suits"><i>&#9824;</i><i>&#9829;</i><i>&#9830;</i><i>&#9827;</i></div>'},
    slugblaster: {bg:"#6d4d9f", logo:L("slugblaster.webp"), lh:170, a:'<div class="sbtrack"><i></i></div>'},
    spire: {bg:"radial-gradient(#172a3d,#0d1a27)", logo:L("the-spire.webp"), lh:170, a:'<div class="ink">' + n(2) + '</div>'},
    pico: {bg:"#f6f6f3", logo:L("pico.webp"), lf:dk, lh:130, a:'<div class="dots">' + n(5) + '</div>'},
    intotheodd: {bg:"linear-gradient(#0e1033,#2b1d4f)", logo:L("into-the-odd.webp"), lh:190, a:'<div class="bar thin pink"><i></i></div>', x:'<div class="meteors">' + n(4) + '</div>'},
    cairn: {bg:"#1b0f26", logo:L("cairn.webp"), lh:130, a:'<div class="stones">' + n(4) + '</div>'},
    mausritter: {bg:"#121b22", logo:L("mausritter.webp"), lh:60, a:'<div class="steps">' + n(6) + '</div>'},
    discworld: {bg:"radial-gradient(#3a1912,#2a110c)", logo:L("discworld.webp"), lh:70, a:'<div class="orbit"><div class="disc"><i></i></div><b></b></div>'}
  };
  var C = T[S]; if(!C) return;

  /* ---- Stile ---- */
  function seq(sel, k, step){ var s = ""; for(var i = 0; i < k; i++) s += "#ls " + sel + ":nth-child(" + (i + 1) + "){animation-delay:" + (i * step).toFixed(2) + "s}"; return s; }
  var css = [
    "html.ls-an body *,html.ls-an body *::before,html.ls-an body *::after{animation-play-state:paused!important}",
    "html.ls-an,html.ls-an body{overflow:hidden!important}",
    "#ls{position:fixed;inset:0;z-index:2147483000;overflow:hidden;transition:opacity " + FADE + "ms ease;contain:strict}",
    "#ls.weg{opacity:0;pointer-events:none}",
    "#ls .c{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:56px;z-index:2}",
    "#ls .c img{max-width:80vw;object-fit:contain}",
    "#ls i,#ls b{display:block}",
    "@keyframes ls-fill{0%{width:0}80%,100%{width:100%}}@keyframes ls-spin{to{transform:rotate(360deg)}}",
    "#ls .bar{width:380px;height:3px;background:#5a4a3244;overflow:hidden}#ls .bar i{height:100%;width:40%;background:#5a4a32;animation:ls-fill 2.4s ease-in-out infinite}",
    "#ls .bar.thin{height:2px}#ls .bar.gold{background:#b89a5e33}#ls .bar.gold i{background:#d6b66f}#ls .bar.pink{background:#f06a9a33}#ls .bar.pink i{background:#f06a9a}",
    /* TftL */
    "#ls .blur{position:absolute;inset:-60px;background:center/cover;filter:saturate(.5) blur(22px);opacity:.25}",
    "#ls .rings{width:200px;height:200px;position:relative}#ls .rings i{position:absolute;inset:0;border-radius:50%;border:10px solid #fff3;border-top-color:#fff;animation:ls-spin 1.6s linear infinite}#ls .rings i+i{inset:36px;border-width:5px;border-color:#fff4;border-bottom-color:#fff;animation-duration:2.4s;animation-direction:reverse}",
    /* Flood */
    "#ls .ripple{width:260px;height:260px;position:relative}#ls .ripple i{position:absolute;left:50%;top:50%;width:20px;height:20px;margin:-10px;border-radius:50%;border:3px solid #9fc3c9;animation:ls-rip 2.4s ease-out infinite}#ls .ripple i:nth-child(2){animation-delay:.8s}#ls .ripple i:nth-child(3){animation-delay:1.6s}",
    "@keyframes ls-rip{0%{transform:scale(1);opacity:1}100%{transform:scale(12);opacity:0}}",
    /* Electric State */
    "#ls .haze{position:absolute;inset:0;background:radial-gradient(ellipse 70% 40% at 50% 85%,#e8f1f8aa,transparent)}",
    "#ls .scan{position:absolute;left:0;right:0;height:140px;top:0;background:linear-gradient(transparent,#fff6,transparent);animation:ls-sc 2.2s linear infinite}@keyframes ls-sc{from{transform:translateY(-140px)}to{transform:translateY(110vh)}}",
    "#ls .vr{width:300px;height:44px;border:3px solid #fff;border-radius:22px;position:relative;overflow:hidden;box-sizing:border-box}#ls .vr i{position:absolute;top:8px;bottom:8px;left:8px;width:40px;border-radius:14px;background:#fff;box-shadow:0 0 18px #fff;animation:ls-vr 1.8s ease-in-out infinite alternate}@keyframes ls-vr{to{left:246px}}",
    /* City of Mist */
    "#ls .mist{position:absolute;inset:0;background:radial-gradient(ellipse 60% 30% at 30% 60%,#6f9aa055,transparent),radial-gradient(ellipse 50% 25% at 70% 40%,#6f9aa044,transparent);animation:ls-drift 6s ease-in-out infinite alternate}@keyframes ls-drift{from{transform:translateX(-80px)}to{transform:translateX(80px)}}",
    /* Local Legends */
    "#ls .halftone{position:absolute;inset:0;background:radial-gradient(#ffffff22 2px,transparent 2.5px) 0 0/16px 16px}",
    "#ls .panels{display:flex;gap:14px}#ls .panels i{width:80px;height:100px;border:5px solid #fff;background:#f175ad;transform:skewX(-6deg);opacity:.15;animation:ls-pan 1.8s infinite}#ls .panels i:nth-child(2){animation-delay:.3s;background:#ffd457}#ls .panels i:nth-child(3){animation-delay:.6s;background:#33d6ff}@keyframes ls-pan{0%,100%{opacity:.15}30%,60%{opacity:1}}",
    /* Nights */
    "#ls .redglow{position:absolute;inset:0;background:radial-gradient(ellipse 50% 40% at 50% 45%,#ff2a4a22,transparent)}",
    "#ls .neonbar{width:520px;height:6px;border-radius:3px;background:#ff2a4a22}#ls .neonbar i{height:100%;border-radius:3px;background:#ff5a6e;box-shadow:0 0 10px #ff2a4a,0 0 26px #ff2a4a,0 0 50px #ff2a4a;animation:ls-fill 2.6s ease-in-out infinite}@keyframes ls-neonon{0%,4%{opacity:.25}5%{opacity:1}7%{opacity:.4}9%,100%{opacity:1}}",
    /* Otherscape */
    "#ls .scanlines{position:absolute;inset:0;background:repeating-linear-gradient(#ffffff06 0 2px,transparent 2px 5px)}",
    "#ls .segs{display:flex;gap:6px}#ls .segs i{width:22px;height:14px;background:#19e3c1;opacity:.15;animation:ls-seg 1.8s infinite}" + seq(".segs i", 12, .1) + "@keyframes ls-seg{0%{opacity:.15}20%{opacity:1;box-shadow:0 0 12px #19e3c1}60%,100%{opacity:.15}}",
    /* Legend in the Mist */
    "#ls .map{position:absolute;inset:0;background:center/cover;opacity:.22;filter:sepia(.4)}#ls .fogw{position:absolute;inset:-100px;background:radial-gradient(ellipse at center,#efe4ccee 0,#efe4cc99 40%,#efe4cc00 75%);animation:ls-breathe 4s ease-in-out infinite alternate}@keyframes ls-breathe{from{transform:scale(1)}to{transform:scale(1.15)}}",
    /* Vaesen */
    "#ls .rune{width:150px;height:150px;border-radius:50%;border:3px dashed #8a1f17;position:relative;animation:ls-spin 8s linear infinite;box-sizing:border-box}#ls .rune:after{content:'';position:absolute;inset:22px;border-radius:50%;border:2px solid #8a1f1766;border-top-color:#8a1f17;animation:ls-spin 1.4s linear infinite reverse}",
    /* Eat the Reich */
    "#ls .tele{display:flex;gap:8px}#ls .tele i{width:20px;height:26px;background:#ff2f92;opacity:0;animation:ls-tel 2.4s steps(1) infinite}" + seq(".tele i", 10, .18) + "@keyframes ls-tel{0%{opacity:0}5%,85%{opacity:1}90%,100%{opacity:0}}",
    /* Wildsea */
    "#ls .wave{width:420px;height:60px}#ls .wave path{fill:none;stroke:#667d4e;stroke-width:5;stroke-dasharray:520;stroke-dashoffset:520;animation:ls-draw 2.4s ease-in-out infinite}@keyframes ls-draw{0%{stroke-dashoffset:520}70%,100%{stroke-dashoffset:0}}",
    /* Triangle Agency */
    "#ls .tri{width:0;height:0;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #d7261e;animation:ls-tri 2.4s cubic-bezier(.7,0,.3,1) infinite;transform-origin:50% 66%}@keyframes ls-tri{0%{transform:rotate(0)}33%{transform:rotate(120deg)}66%{transform:rotate(240deg)}100%{transform:rotate(360deg)}}",
    /* Broken Compass */
    "#ls .compass{width:170px;height:170px;border-radius:50%;border:4px solid #c9a24a;position:relative;box-shadow:inset 0 0 0 10px #c9a24a22;box-sizing:border-box}#ls .compass i{position:absolute;left:50%;top:14px;bottom:14px;width:12px;margin-left:-6px;background:linear-gradient(#c23a1e 50%,#e8dcc4 50%);clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);animation:ls-wob 2.6s ease-in-out infinite}@keyframes ls-wob{0%{transform:rotate(-30deg)}25%{transform:rotate(160deg)}45%{transform:rotate(90deg)}70%{transform:rotate(250deg)}100%{transform:rotate(330deg)}}",
    /* Dragonbane */
    "#ls .seal{width:150px;height:150px;border-radius:50%;border:3px solid #231f20;box-sizing:border-box;animation:ls-spin 6s linear infinite;background:repeating-conic-gradient(#231f20 0 3deg,transparent 3deg 30deg);-webkit-mask:radial-gradient(circle,transparent 58px,#000 59px);mask:radial-gradient(circle,transparent 58px,#000 59px)}",
    /* Heart */
    "#ls .grow{position:absolute;left:50%;bottom:-160px;width:320px;height:320px;margin-left:-160px;border-radius:50%;background:radial-gradient(#b4341d,#640000 60%,transparent 70%);animation:ls-grow 2.4s ease-in-out infinite;opacity:.9}@keyframes ls-grow{0%{transform:scale(.4);opacity:.5}60%{transform:scale(1.6);opacity:1}100%{transform:scale(2.4);opacity:0}}",
    /* Household */
    "#ls .hoop{width:160px;height:160px}#ls .hoop .ring{fill:none;stroke:#c9a24a;stroke-width:6}#ls .hoop .thread{fill:none;stroke:#e8dcc4;stroke-width:5;stroke-dasharray:352;stroke-dashoffset:352;transform-origin:80px 80px;transform:rotate(-90deg);animation:ls-sew 2.4s ease-in-out infinite}#ls .hoop .gap{fill:none;stroke:#3c2443;stroke-width:7;stroke-dasharray:3 9}@keyframes ls-sew{0%{stroke-dashoffset:352}80%,100%{stroke-dashoffset:0}}",
    /* Mörk Borg */
    "#ls .mbstripe{position:absolute;width:1000px;height:120px;background:#12120d;transform:rotate(-14deg);left:-140px;bottom:-40px}",
    "#ls .slash{width:520px;height:14px;background:#12120d33;transform:rotate(-6deg)}#ls .slash i{height:100%;background:#12120d;animation:ls-fill 1.6s steps(7) infinite}",
    /* Savage Worlds */
    "#ls .suits{display:flex;gap:30px}#ls .suits i{font:normal 64px/1 serif;color:#f4ecdc;opacity:.15;animation:ls-suit 1.6s infinite;text-shadow:0 0 18px #a51f1a}#ls .suits i:nth-child(2),#ls .suits i:nth-child(3){color:#d8322a}#ls .suits i:nth-child(2){animation-delay:.2s}#ls .suits i:nth-child(3){animation-delay:.4s}#ls .suits i:nth-child(4){animation-delay:.6s}@keyframes ls-suit{0%,100%{opacity:.15;transform:none}25%{opacity:1;transform:translateY(-14px) scale(1.15)}50%{opacity:.15;transform:none}}",
    /* Slugblaster */
    "#ls .sbtrack{width:480px;height:38px;border:5px solid #fff;border-radius:22px;padding:4px;transform:rotate(-3deg);box-shadow:6px 6px 0 #ec008c;box-sizing:content-box}#ls .sbtrack i{height:100%;border-radius:14px;background:repeating-linear-gradient(115deg,#ffd457 0 16px,#f175ad 16px 32px,#2fb996 32px 48px);background-size:68px 100%;animation:ls-fill 2.2s ease-in-out infinite,ls-stripes .5s linear infinite}@keyframes ls-stripes{to{background-position:68px 0}}",
    /* Spire */
    "#ls .ink{width:120px;height:120px;position:relative}#ls .ink i{position:absolute;inset:0;border-radius:50%;background:#981a3f;animation:ls-drop 2.4s ease-out infinite}#ls .ink i+i{animation-delay:1.2s}@keyframes ls-drop{0%{transform:scale(.05);opacity:1}100%{transform:scale(2.2);opacity:0}}",
    /* Pico */
    "#ls .dots{display:flex;gap:16px}#ls .dots i{width:22px;height:22px;border-radius:50%;animation:ls-bounce 1.2s ease-in-out infinite}#ls .dots i:nth-child(1){background:#008999}#ls .dots i:nth-child(2){background:#eba300;animation-delay:.12s}#ls .dots i:nth-child(3){background:#ee7bae;animation-delay:.24s}#ls .dots i:nth-child(4){background:#405335;animation-delay:.36s}#ls .dots i:nth-child(5){background:#b34c25;animation-delay:.48s}@keyframes ls-bounce{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-34px)}}",
    /* Into the Odd */
    "#ls .meteors i{position:absolute;width:160px;height:2px;background:linear-gradient(90deg,transparent,#f5d9c8);animation:ls-met 2.2s linear infinite;opacity:0}#ls .meteors i:nth-child(1){left:70%;top:5%}#ls .meteors i:nth-child(2){left:30%;top:0;animation-delay:.6s}#ls .meteors i:nth-child(3){left:85%;top:30%;animation-delay:1.1s}#ls .meteors i:nth-child(4){left:50%;top:15%;animation-delay:1.6s}@keyframes ls-met{0%{opacity:0;transform:rotate(-30deg) translateX(0)}10%{opacity:1}60%,100%{opacity:0;transform:rotate(-30deg) translateX(-500px)}}",
    /* Cairn */
    "#ls .stones{display:flex;flex-direction:column-reverse;align-items:center;gap:6px;height:150px;justify-content:flex-start}#ls .stones i{background:#e0457b;border-radius:50%;height:26px;opacity:0;animation:ls-stack 2.8s infinite}#ls .stones i:nth-child(1){width:110px}#ls .stones i:nth-child(2){width:84px;animation-delay:.35s;background:#c2306d}#ls .stones i:nth-child(3){width:60px;animation-delay:.7s;background:#f0a56a}#ls .stones i:nth-child(4){width:36px;animation-delay:1.05s}@keyframes ls-stack{0%{opacity:0;transform:translateY(-30px)}12%,80%{opacity:1;transform:none}95%,100%{opacity:0}}",
    /* Mausritter */
    "#ls .steps{display:flex;gap:26px}#ls .steps i{width:12px;height:16px;border-radius:50%;background:#e8a33b;opacity:.1;animation:ls-pan 2.4s infinite}" + (function(){ var s = ""; for(var i = 0; i < 6; i++) s += "#ls .steps i:nth-child(" + (i + 1) + "){animation-delay:" + (i * .25).toFixed(2) + "s;transform:translateY(" + (i % 2 ? -8 : 8) + "px)}"; return s; })(),
    /* Discworld */
    "#ls .orbit{position:relative;width:300px;height:200px;display:flex;align-items:center;justify-content:center}#ls .disc{position:absolute;width:260px;height:260px;transform:perspective(600px) rotateX(70deg)}#ls .disc i{position:absolute;inset:0;border-radius:50%;border:4px solid #c99a3e;background:repeating-conic-gradient(#c99a3e33 0 10deg,transparent 10deg 30deg);animation:ls-spin 3s linear infinite}",
    "#ls .orbit b{position:absolute;left:50%;top:50%;width:26px;height:26px;margin:-13px;border-radius:50%;background:#ffcf6b;box-shadow:0 0 24px #ffcf6b;animation:ls-sun 2.4s linear infinite}@keyframes ls-sun{0%{transform:translate(-150px,0) scale(.8);z-index:0}25%{transform:translate(0,-40px) scale(.6)}50%{transform:translate(150px,0) scale(.8)}75%{transform:translate(0,45px) scale(1.1);z-index:3}100%{transform:translate(-150px,0) scale(.8)}}"
  ].join("\n");

  var st = D.createElement("style"); st.id = "ls-css"; st.textContent = css;
  (D.head || H).appendChild(st);
  H.classList.add("ls-an");

  var el = D.createElement("div"); el.id = "ls"; el.setAttribute("aria-hidden", "true");
  el.style.background = C.bg;
  el.innerHTML = (C.x || "") + '<div class="c"><img alt="" src="' + C.logo + '" style="height:' + C.lh + 'px;' + (C.lf || "") + '">' + (C.a || "") + '</div>';
  H.appendChild(el);

  /* ---- Bereit? ---- */
  function wait(ms){ return new Promise(function(r){ setTimeout(r, ms); }); }
  function frame(){ return new Promise(function(r){ requestAnimationFrame(function(){ requestAnimationFrame(r); }); }); }
  function dom(){ return D.readyState !== "loading" ? Promise.resolve() : new Promise(function(r){ D.addEventListener("DOMContentLoaded", r, {once:true}); }); }
  function pic(u){
    return new Promise(function(r){
      var i = new Image(); i.decoding = "async";
      i.onload = function(){ (i.decode ? i.decode() : Promise.resolve()).then(r, r); };
      i.onerror = r; i.src = u;
    });
  }
  /* Alle Bilder im sichtbaren Bereich (img + CSS-Hintergründe) einsammeln. */
  function sichtbareBilder(){
    var U = {}, vh = window.innerHeight * 1.25, all = D.body ? D.body.getElementsByTagName("*") : [], k = 0;
    for(var j = 0; j < all.length && k < 4000; j++){
      var e = all[j]; if(e.id === "ls") continue; k++;
      var r = e.getBoundingClientRect(); if(r.bottom < 0 || r.top > vh || r.width === 0) continue;
      if(e.tagName === "IMG"){ if(e.currentSrc || e.src) U[e.currentSrc || e.src] = 1; continue; }
      var bg = getComputedStyle(e).backgroundImage;
      if(bg && bg !== "none") bg.replace(/url\(["']?([^"')]+)["']?\)/g, function(_, u){ if(!/^data:/.test(u)) U[u] = 1; });
    }
    return Object.keys(U);
  }
  var fertig = false;
  function weg(){
    if(fertig) return; fertig = true;
    H.classList.remove("ls-an");
    el.classList.add("weg");
    setTimeout(function(){ if(el.parentNode) el.parentNode.removeChild(el); if(st.parentNode) st.parentNode.removeChild(st); }, FADE + 50);
    /* Nach dem Öffnen: Service Worker darf restliche Dateien in Ruhe nachladen. */
    setTimeout(function(){ try{ var sw = navigator.serviceWorker, nc = navigator.connection; if(sw && sw.controller && !(nc && nc.saveData)) sw.controller.postMessage("warm"); }catch(e){} }, 5000);
  }
  var bereit = dom().then(frame).then(function(){
    var F = D.fonts && D.fonts.ready ? D.fonts.ready.catch(function(){}) : Promise.resolve();
    return Promise.all([F, Promise.all(sichtbareBilder().map(pic))]);
  }).then(frame);
  Promise.race([bereit, wait(MAX)]).then(function(){
    var rest = MIN - (Date.now() - t0);
    return rest > 0 ? wait(rest) : null;
  }).then(weg, weg);
  /* Zurück-Navigation aus dem Cache: nie hängen bleiben. */
  window.addEventListener("pageshow", function(e){ if(e.persisted) weg(); });
})();
