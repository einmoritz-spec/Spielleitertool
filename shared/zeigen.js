/* Zeigen-Modus: jedes Bild per Klick im Vollbild zeigen (alle vier Tools).
   Wischen links/rechts = nächstes Bild, nach unten = schließen, Doppeltipp/Pinch/Mausrad = Zoom.
   Ausnahmen: Bilder in Knöpfen/Links, Karten mit eigenen Hotspots, Buchseiten-Viewer, Icons. */
(function(){
  if(window.Zeigen) return;
  var SKIP_IN = ".topbar,.mobile-menu,.mm-panel,.tm-dd,.zg,#pvStage,.pv-stage,#mapScroll,#mapModal,.city-map,.mapbox,.eis-wrap,.ov-img,.bv-overlay,#bvOverlay,.book-tab,.pl-lb,.kat-lb,.os-lightbox,.map-lb";
  var css = ".zg{position:fixed;inset:0;z-index:99999;background:#000;display:none;touch-action:none;user-select:none;-webkit-user-select:none}.zg.on{display:block}"
   +".zg-st{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;overflow:hidden}"
   +".zg-st img{max-width:100vw;max-height:100vh;max-height:100dvh;object-fit:contain;will-change:transform;-webkit-user-drag:none;pointer-events:none}"
   +".zg-b{position:absolute;display:flex;align-items:center;justify-content:center;width:44px;height:44px;border:0;border-radius:50%;background:rgba(0,0,0,.45);color:#fff;font:22px/1 system-ui,sans-serif;cursor:pointer;opacity:.85;transition:opacity .25s}"
   +".zg-b:hover{background:rgba(255,255,255,.18)}.zg-x{top:max(12px,env(safe-area-inset-top));right:12px}.zg-fs{top:max(12px,env(safe-area-inset-top));right:64px;font-size:18px}"
   +".zg-p,.zg-n{top:50%;margin-top:-22px}.zg-p{left:12px}.zg-n{right:12px}"
   +".zg-c{position:absolute;left:0;right:0;bottom:max(14px,env(safe-area-inset-bottom));text-align:center;color:#fff;opacity:.7;font:13px system-ui,sans-serif;pointer-events:none;transition:opacity .25s}"
   +".zg.hide .zg-b,.zg.hide .zg-c{opacity:0;pointer-events:none}"
   +"@media (hover:none){.zg-p,.zg-n{display:none}}"
   +"body.zg-open{overflow:hidden}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  var root, stage, img, cnt, list = [], idx = 0, sc = 1, tx = 0, ty = 0, ptrs = {}, d0 = 0, sc0 = 1, hideT = 0, lastTap = 0, sx = 0, sy = 0, st0 = 0, moved = false, pushed = false;

  function build(){
    if(root) return;
    root = document.createElement("div"); root.className = "zg"; root.setAttribute("role","dialog"); root.setAttribute("aria-label","Bildansicht");
    root.innerHTML = '<div class="zg-st"><img alt=""></div><button class="zg-b zg-x" aria-label="Schließen">✕</button>'
      + (document.fullscreenEnabled ? '<button class="zg-b zg-fs" aria-label="Vollbild">⛶</button>' : '')
      + '<button class="zg-b zg-p" aria-label="Zurück">‹</button><button class="zg-b zg-n" aria-label="Weiter">›</button><div class="zg-c"></div>';
    document.body.appendChild(root);
    stage = root.querySelector(".zg-st"); img = stage.querySelector("img"); cnt = root.querySelector(".zg-c");
    root.querySelector(".zg-x").onclick = function(e){ e.stopPropagation(); close(); };
    root.querySelector(".zg-p").onclick = function(e){ e.stopPropagation(); go(-1); };
    root.querySelector(".zg-n").onclick = function(e){ e.stopPropagation(); go(1); };
    var fs = root.querySelector(".zg-fs"); if(fs) fs.onclick = function(e){ e.stopPropagation(); try{ if(document.fullscreenElement) document.exitFullscreen(); else root.requestFullscreen(); }catch(x){} };
    root.querySelectorAll(".zg-b").forEach(function(b){ b.addEventListener("pointerdown", function(e){ e.stopPropagation(); }); });
    stage.addEventListener("pointerdown", down); stage.addEventListener("pointermove", move);
    stage.addEventListener("pointerup", up); stage.addEventListener("pointercancel", up);
    stage.addEventListener("wheel", function(e){ e.preventDefault(); zoomTo(sc * (e.deltaY<0 ? 1.18 : 1/1.18)); }, {passive:false});
  }
  function apply(drag){ img.style.transition = drag ? "none" : "transform .18s"; img.style.transform = "translate("+tx+"px,"+ty+"px) scale("+sc+")"; }
  function reset(){ sc = 1; tx = ty = 0; apply(false); }
  function zoomTo(s){ sc = Math.max(1, Math.min(6, s)); if(sc===1){ tx = ty = 0; } apply(false); }
  function show(){
    var it = list[idx]; if(!it) return; reset(); img.src = it.src; cnt.textContent = list.length>1 ? (idx+1)+" / "+list.length : "";
    root.querySelector(".zg-p").style.visibility = root.querySelector(".zg-n").style.visibility = list.length>1 ? "" : "hidden";
    [1,-1].forEach(function(d){ var n = list[(idx+d+list.length)%list.length]; if(n){ var p = new Image(); p.src = n.src; } });
    wake();
  }
  function wake(){ root.classList.remove("hide"); clearTimeout(hideT); hideT = setTimeout(function(){ if(root.classList.contains("on")) root.classList.add("hide"); }, 2600); }
  function go(d){ if(list.length<2) return; idx = (idx+d+list.length)%list.length; show(); }
  function open(i, l){
    build(); list = l; idx = i; root.classList.add("on"); document.body.classList.add("zg-open"); show();
    try{ history.pushState({zg:1}, ""); pushed = true; }catch(e){ pushed = false; }
  }
  function close(fromPop){
    if(!root || !root.classList.contains("on")) return;
    root.classList.remove("on"); document.body.classList.remove("zg-open"); clearTimeout(hideT); img.removeAttribute("src");
    try{ if(document.fullscreenElement) document.exitFullscreen(); }catch(e){}
    if(pushed && !fromPop){ pushed = false; try{ history.back(); }catch(e){} } else pushed = false;
  }
  window.addEventListener("popstate", function(){ if(root && root.classList.contains("on")){ pushed = false; close(true); } });

  function dist(){ var k = Object.keys(ptrs); if(k.length<2) return 0; var a = ptrs[k[0]], b = ptrs[k[1]]; return Math.hypot(a.x-b.x, a.y-b.y); }
  function down(e){
    ptrs[e.pointerId] = {x:e.clientX, y:e.clientY}; try{ stage.setPointerCapture(e.pointerId); }catch(x){}
    if(Object.keys(ptrs).length===2){ d0 = dist(); sc0 = sc; }
    else { sx = e.clientX; sy = e.clientY; st0 = Date.now(); moved = false; img._tx = tx; img._ty = ty; }
  }
  function move(e){
    var p = ptrs[e.pointerId]; if(!p) return; p.x = e.clientX; p.y = e.clientY;
    if(Object.keys(ptrs).length>=2){ if(d0){ sc = Math.max(1, Math.min(6, sc0*dist()/d0)); if(sc===1){ tx = ty = 0; } apply(true); } moved = true; return; }
    var dx = e.clientX - sx, dy = e.clientY - sy;
    if(Math.abs(dx)+Math.abs(dy) > 8) moved = true;
    if(sc>1){ tx = img._tx + dx; ty = img._ty + dy; apply(true); }
    else if(moved){ tx = dx; ty = dy>0 ? dy*0.5 : 0; apply(true); }
  }
  function up(e){
    var n = Object.keys(ptrs).length; var wasMulti = n>=2; delete ptrs[e.pointerId];
    if(wasMulti){ d0 = 0; if(sc<1.05) reset(); return; }
    var dx = e.clientX - sx, dy = e.clientY - sy;
    if(sc>1){ if(!moved){ var now = Date.now(); if(now-lastTap<300){ reset(); } lastTap = now; } return; }
    if(moved){
      if(Math.abs(dx)>60 && Math.abs(dx)>Math.abs(dy)){ reset(); go(dx<0 ? 1 : -1); return; }
      if(dy>110 && dy>Math.abs(dx)){ reset(); close(); return; }
      reset(); return;
    }
    var now2 = Date.now();
    if(now2-lastTap<300){ lastTap = 0; zoomTo(2.5); return; }
    lastTap = now2;
    setTimeout(function(){ if(lastTap && Date.now()-lastTap>=290){ if(root.classList.contains("hide")) wake(); else { clearTimeout(hideT); root.classList.add("hide"); } } }, 300);
  }

  function ok(im){
    if(!im || im.tagName!=="IMG" || !im.src || im.dataset.zg==="no") return false;
    if(im.closest(SKIP_IN)) return false;
    var r = im.getBoundingClientRect(); if(r.width<70 || r.height<40) return false;
    if(im.getAttribute("onclick")) return true;
    var c = im.closest("a[href],button,summary,label,[role=button],[onclick]");
    return !c;
  }
  function collect(){
    var seen = {}, out = [];
    document.querySelectorAll("img").forEach(function(im){ if(ok(im) && !seen[im.src]){ seen[im.src] = 1; out.push({src:im.src, el:im}); } });
    return out;
  }
  document.addEventListener("click", function(e){
    var im = e.target; if(!ok(im)) return;
    var l = collect(), i = -1; for(var k=0;k<l.length;k++) if(l[k].src===im.src){ i = k; break; }
    if(i<0) return;
    e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
    open(i, l);
  }, true);
  document.addEventListener("keydown", function(e){
    if(!root || !root.classList.contains("on")) return;
    if(e.key==="Escape"){ e.stopImmediatePropagation(); close(); }
    else if(e.key==="ArrowLeft"){ e.stopImmediatePropagation(); e.preventDefault(); go(-1); }
    else if(e.key==="ArrowRight"){ e.stopImmediatePropagation(); e.preventDefault(); go(1); }
    else if(e.key==="f" || e.key==="F"){ var f = root.querySelector(".zg-fs"); if(f) f.click(); }
  }, true);
  window.Zeigen = {open:open, close:close};
})();
