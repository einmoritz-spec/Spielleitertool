/* Galerie (gemeinsam für alle Settings): alle Buchbilder als Kachelraster, das auf einen Bildschirm passt
   (ungeschnitten, Zeilen-Blocksatz); Klick öffnet die Großansicht, dort mit Pfeiltasten/Wischen blättern.
   Daten je Buch in js/data/galerie-*.js: Galerie.reg(setting, {key,name,dir,items:[[datei,breite,höhe,seite]]})
   Dateien liegen als <dir>full/<datei>.webp und <dir>thumb/<datei>.webp. Aufruf: Galerie.open("wake"). */
var Galerie = (function(){
  var BOOKS = {}, ov = null, grid = null, lb = null, cur = null, idx = 0, tiles = [], raf = 0, lastKey = {};
  var GAP = 6;
  function reg(setting, book){ (BOOKS[setting] = BOOKS[setting] || []).push(book); }
  function el(t, c, h){ var e = document.createElement(t); if(c) e.className = c; if(h != null) e.innerHTML = h; return e; }
  var ICON_X = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';
  var ICON_L = '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>';
  var ICON_R = '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>';

  function open(setting, bookKey){
    var books = BOOKS[setting]; if(!books || !books.length || ov) return;
    ov = el("div", "gal"); ov.setAttribute("role", "dialog"); ov.setAttribute("aria-label", "Galerie");
    var bar = el("div", "gal-bar"), tabs = el("div", "gal-tabs");
    books.forEach(function(b){
      var t = el("button", "gal-tab", b.name); t.type = "button"; t.dataset.k = b.key;
      t.onclick = function(){ lastKey[setting] = b.key; show(b); };
      tabs.appendChild(t);
    });
    var x = el("button", "gal-x", ICON_X); x.type = "button"; x.setAttribute("aria-label", "Schließen"); x.title = "Schließen (Esc)"; x.onclick = close;
    bar.appendChild(tabs); bar.appendChild(x);
    grid = el("div", "gal-grid");
    lb = el("div", "gal-lb"); lb.hidden = true;
    lb.innerHTML = '<button type="button" class="gal-nav gal-prev" aria-label="Vorheriges Bild">' + ICON_L + '</button>' +
      '<div class="gal-stage"><img class="gal-img" alt="" draggable="false"></div>' +
      '<button type="button" class="gal-nav gal-next" aria-label="Nächstes Bild">' + ICON_R + '</button>' +
      '<button type="button" class="gal-lbx" aria-label="Zurück zur Übersicht" title="Zurück (Esc)">' + ICON_X + '</button>' +
      '<div class="gal-cap"></div>';
    lb.querySelector(".gal-prev").onclick = function(e){ e.stopPropagation(); go(-1); };
    lb.querySelector(".gal-next").onclick = function(e){ e.stopPropagation(); go(1); };
    lb.querySelector(".gal-lbx").onclick = function(e){ e.stopPropagation(); closeLb(); };
    lb.onclick = function(e){ if(e.target === lb || e.target.classList.contains("gal-stage")) closeLb(); };
    var sx = null;
    lb.addEventListener("touchstart", function(e){ sx = e.touches.length === 1 ? e.touches[0].clientX : null; }, {passive:true});
    lb.addEventListener("touchend", function(e){
      if(sx == null) return; var dx = e.changedTouches[0].clientX - sx; sx = null;
      if(Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    }, {passive:true});
    ov.appendChild(bar); ov.appendChild(grid); ov.appendChild(lb);
    document.body.appendChild(ov); document.documentElement.classList.add("gal-open");
    window.addEventListener("keydown", onKey, true); window.addEventListener("resize", queue);
    var start = books.filter(function(b){ return b.key === (bookKey || lastKey[setting]); })[0] || books[0];
    show(start);
  }
  function close(){
    if(!ov) return;
    window.removeEventListener("keydown", onKey, true); window.removeEventListener("resize", queue);
    ov.remove(); ov = grid = lb = cur = null; tiles = []; document.documentElement.classList.remove("gal-open");
  }
  function show(book){
    cur = book; idx = 0; closeLb();
    [].forEach.call(ov.querySelectorAll(".gal-tab"), function(t){ t.classList.toggle("on", t.dataset.k === book.key); });
    grid.innerHTML = ""; grid.scrollTop = 0; tiles = [];
    book.items.forEach(function(it, i){
      var b = el("button", "gal-t"); b.type = "button"; b.setAttribute("aria-label", "Bild " + (i + 1) + (it[3] ? ", " + it[3] : ""));
      var im = el("img"); im.alt = ""; im.loading = "lazy"; im.decoding = "async"; im.draggable = false;
      im.src = book.dir + "thumb/" + it[0] + ".webp"; b.appendChild(im);
      b.onclick = function(){ openLb(i); };
      tiles.push(b);
    });
    layout();
  }
  /* Zeilen-Blocksatz: größte Zeilenhöhe finden, bei der alle Bilder ohne Scrollen auf den Bildschirm passen */
  function rowsFor(asp, h, W){
    var rows = [], row = [], sum = 0;
    asp.forEach(function(a, i){
      var w = a * h;
      if(row.length && sum + w + GAP * row.length > W){ rows.push({r: row, s: sum}); row = []; sum = 0; }
      row.push(i); sum += w;
    });
    if(row.length) rows.push({r: row, s: sum});
    rows.forEach(function(o, k){
      var sc = (W - GAP * (o.r.length - 1)) / o.s;
      o.sc = (k === rows.length - 1) ? Math.min(sc, 1.5) : sc;
      o.h = h * o.sc;
    });
    return rows;
  }
  function totalH(rows){ return rows.reduce(function(t, o){ return t + o.h; }, 0) + GAP * (rows.length - 1); }
  function layout(){
    if(!grid || !cur) return;
    var cs = getComputedStyle(grid), W = grid.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight),
        H = grid.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
    if(W < 50 || H < 50) return;
    var asp = cur.items.map(function(it){ return it[1] / it[2]; });
    var lo = W < 640 ? 120 : 70, hi = Math.min(H, 900), best = lo;
    if(totalH(rowsFor(asp, lo, W)) <= H){
      for(var k = 0; k < 18; k++){ var mid = (lo + hi) / 2; if(totalH(rowsFor(asp, mid, W)) <= H){ best = mid; lo = mid; } else hi = mid; }
    }
    var rows = rowsFor(asp, best, W), inner = el("div", "gal-in");
    rows.forEach(function(o){
      var r = el("div", "gal-row");
      o.r.forEach(function(i){ var t = tiles[i], w = asp[i] * o.h; t.style.width = Math.floor(w) + "px"; t.style.height = Math.floor(o.h) + "px"; r.appendChild(t); });
      inner.appendChild(r);
    });
    grid.innerHTML = ""; grid.appendChild(inner);
    grid.classList.toggle("scroll", totalH(rows) > H + 1);
  }
  function queue(){ cancelAnimationFrame(raf); raf = requestAnimationFrame(layout); }

  function openLb(i){ lb.hidden = false; showImg(i); lb.querySelector(".gal-next").focus({preventScroll:true}); }
  function closeLb(){
    if(!lb || lb.hidden) return; lb.hidden = true;
    var t = tiles[idx]; if(t){ t.focus({preventScroll:true}); if(t.scrollIntoView) t.scrollIntoView({block:"nearest"}); }
  }
  function showImg(i){
    var n = cur.items.length; idx = (i + n) % n;
    var it = cur.items[idx], img = lb.querySelector(".gal-img"), my = idx, full = cur.dir + "full/" + it[0] + ".webp";
    img.src = cur.dir + "thumb/" + it[0] + ".webp"; img.classList.add("loading");
    var f = new Image(); f.onload = function(){ if(my === idx && lb){ img.src = full; img.classList.remove("loading"); } }; f.src = full;
    lb.querySelector(".gal-cap").textContent = (it[3] ? it[3] + "  ·  " : "") + (idx + 1) + " / " + n;
    [1, -1].forEach(function(d){ var j = cur.items[(idx + d + n) % n]; (new Image()).src = cur.dir + "full/" + j[0] + ".webp"; });
  }
  function go(d){ if(lb && !lb.hidden) showImg(idx + d); }
  function onKey(e){
    if(e.ctrlKey || e.metaKey || e.altKey) return;
    var inLb = lb && !lb.hidden, k = e.key, used = true;
    if(k === "Escape"){ if(inLb) closeLb(); else close(); }
    else if(inLb && (k === "ArrowRight" || k === "PageDown" || k === " ")) go(1);
    else if(inLb && (k === "ArrowLeft" || k === "PageUp")) go(-1);
    else if(inLb && k === "Home") showImg(0);
    else if(inLb && k === "End") showImg(cur.items.length - 1);
    else if(k === "Tab" || k === "Enter" || k.indexOf("Arrow") === 0) used = false;
    else used = true;
    if(used){ e.preventDefault(); e.stopImmediatePropagation(); }
  }
  return { reg: reg, open: open, close: close, has: function(s){ return !!(BOOKS[s] && BOOKS[s].length); } };
})();
