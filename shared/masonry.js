/* Lückenloses Raster (Masonry) für alle Systeme.
   - Raster mit data-mas werden immer gepackt.
   - Alle anderen Raster mit Karten/Blöcken werden automatisch erkannt, sobald in einer Zeile
     ungleich hohe Elemente Lücken erzeugen, und dann ebenfalls gepackt.
   Technik: Zeilen à 1px, jedes Element bekommt "span <Höhe>". Reihenfolge bleibt zeilenweise (DOM-Reihenfolge). */
(function(){
  var SLACK = 40, MINCH = 3, MINH = 70, busy = false, timer = 0, RO = window.ResizeObserver ? new ResizeObserver(sched) : null;

  function items(g){
    var out = [];
    (function walk(el){
      Array.prototype.forEach.call(el.children, function(c){
        var cs = getComputedStyle(c);
        if(cs.display === "contents") return walk(c);
        if(cs.display === "none" || cs.position === "absolute" || cs.position === "fixed") return;
        out.push(c);
      });
    })(g);
    return out;
  }
  function cols(cs){ return cs.gridTemplateColumns && cs.gridTemplateColumns !== "none" ? cs.gridTemplateColumns.split(" ").length : 0; }

  /* Hat das Raster sichtbare Lücken durch ungleich hohe Zeilenelemente? */
  function gappy(g, its){
    if(its.length < MINCH) return false;
    var rows = [], i;
    its.forEach(function(c){
      var r = c.getBoundingClientRect(); if(r.height < MINH) return;
      var row = null; for(i = 0; i < rows.length; i++) if(Math.abs(rows[i].t - r.top) < 3){ row = rows[i]; break; }
      if(!row){ row = {t: r.top, b: []}; rows.push(row); }
      row.b.push(r.bottom);
    });
    return rows.some(function(row){ if(row.b.length < 2) return false; var mx = Math.max.apply(null, row.b); return row.b.some(function(b){ return mx - b > SLACK; }); });
  }

  function pack(g){
    var cs = getComputedStyle(g), its = items(g); if(!its.length) return;
    if(!g._mg){ g._mg = parseFloat(cs.rowGap) || 0; }
    if(g.dataset.mas !== "1" && g.dataset.mas !== "") { /* auto */ }
    g.style.gridAutoRows = "1px"; g.style.rowGap = "0px"; g.style.alignItems = "start"; g.style.gridAutoFlow = "row";
    var gap = g.dataset.masGap ? parseFloat(g.dataset.masGap) : g._mg;
    its.forEach(function(c){ c.style.gridRowEnd = ""; c.style.alignSelf = "start"; });
    var h = its.map(function(c){ var s = getComputedStyle(c); return c.getBoundingClientRect().height + (parseFloat(s.marginTop) || 0) + (parseFloat(s.marginBottom) || 0); });
    its.forEach(function(c, i){ c.style.gridRowEnd = "span " + Math.max(1, Math.ceil(h[i] + gap)); if(RO && !c._mo){ c._mo = 1; RO.observe(c); } });
    if(RO && !g._mo){ g._mo = 1; RO.observe(g); }
  }
  function unpack(g){
    g.style.gridAutoRows = g.style.rowGap = g.style.alignItems = g.style.gridAutoFlow = "";
    items(g).forEach(function(c){ c.style.gridRowEnd = ""; c.style.alignSelf = ""; });
  }

  function run(){
    busy = true;
    try{
      var all = document.querySelectorAll("body *");
      for(var i = 0; i < all.length; i++){
        var g = all[i];
        if(g.children.length < MINCH && g.dataset.mas === undefined) continue;
        var cs = getComputedStyle(g);
        if(cs.display !== "grid" || cols(cs) < 2 && g.dataset.mas === undefined) continue;
        if(g.dataset.mas === "0") continue;
        if(g.dataset.mas !== undefined || g._auto){ pack(g); continue; }
        if(cs.gridTemplateRows !== "none" && /px/.test(cs.gridTemplateRows) && cs.gridTemplateRows.split(" ").length > 1 && !g._auto) { /* explizite Zeilen: nur testen */ }
        if(g.closest(".nomas")) continue;
        var its = items(g);
        if(gappy(g, its)){ g._auto = 1; pack(g); }
      }
    }catch(e){}
    busy = false;
  }
  function sched(){ if(busy) return; clearTimeout(timer); timer = setTimeout(function(){ requestAnimationFrame(run); }, 60); }

  window.MasonryRun = run;
  var mo = new MutationObserver(function(m){ if(busy) return; if(m.some(function(x){ return x.type === "childList" || (x.type === "attributes" && x.attributeName === "class"); })) sched(); });
  function start(){ mo.observe(document.body, {childList: true, subtree: true, attributes: true, attributeFilter: ["class"]}); window.addEventListener("resize", sched); window.addEventListener("load", sched); sched(); if(document.fonts && document.fonts.ready) document.fonts.ready.then(sched); }
  if(document.body) start(); else document.addEventListener("DOMContentLoaded", start);
})();
