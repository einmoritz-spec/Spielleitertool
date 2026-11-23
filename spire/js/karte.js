/* The Spire – Kartenansicht (Header-Symbol, Taste „m“): Spire und Unterspire, Zoom per Mausrad/Knöpfe, Verschieben per Ziehen.
   Klickbare Bezirke folgen später. Quelle: „Maps“ (EN-PDF, Material). */
(function(){
  var KARTEN = [{id:"spire", t:"Spire", s:"karte-spire"}, {id:"unter", t:"Unterspire", s:"karte-unterspire"}];
  var cur = "spire", z = 1, px = 0, py = 0;
  function el(){ return document.querySelector(".kr-ov"); }
  function apply(){ var im = document.querySelector(".kr-ov .kr-img"); if(im) im.style.transform = "translate(" + px + "px," + py + "px) scale(" + z + ")"; }
  function fit(){ var ov = el(), im = ov && ov.querySelector(".kr-img"); if(!im) return; var w = ov.clientWidth, h = ov.clientHeight - 52, r = im.naturalWidth ? im.naturalHeight / im.naturalWidth : 1.294;
    var bw = Math.min(w - 20, (h - 10) / r); z = 1; im.style.width = bw + "px"; px = (w - bw) / 2; py = 52 + (h - bw * r) / 2; apply(); }
  function zoomAt(f, cx, cy){ var n = Math.max(.5, Math.min(8, z * f)); f = n / z; px = cx - (cx - px) * f; py = cy - (cy - py) * f; z = n; apply(); }
  function show(id){
    cur = id; var ov = el(); if(!ov) return; var K = KARTEN.filter(function(k){ return k.id === id; })[0];
    ov.querySelectorAll(".kr-tab").forEach(function(b){ b.classList.toggle("on", b.dataset.k === id); });
    var im = ov.querySelector(".kr-img"); im.onload = fit; im.src = "img/" + K.s + ".webp"; if(im.complete && im.naturalWidth) fit();
  }
  window.karteOpen = function(id){
    if(el()){ if(id) show(id); return; }
    var ov = document.createElement("div"); ov.className = "kr-ov";
    ov.innerHTML = '<div class="kr-bar">' + KARTEN.map(function(k){ return '<button class="kr-tab" data-k="' + k.id + '">' + k.t + '</button>'; }).join("") +
      '<span class="kr-sp"></span><button class="kr-b" data-z="1.4" aria-label="Vergrößern">+</button><button class="kr-b" data-z="0.7" aria-label="Verkleinern">−</button><button class="kr-b" data-z="0" aria-label="Einpassen">⤢</button><button class="kr-b kr-x" aria-label="Schließen">✕</button></div><img class="kr-img" alt="" draggable="false">';
    document.body.appendChild(ov);
    ov.addEventListener("click", function(e){ var b = e.target.closest("button"); if(!b) return;
      if(b.classList.contains("kr-x")) ov.remove(); else if(b.dataset.k) show(b.dataset.k);
      else if(b.dataset.z){ var f = +b.dataset.z; if(!f) fit(); else zoomAt(f, ov.clientWidth / 2, ov.clientHeight / 2); } });
    ov.addEventListener("wheel", function(e){ e.preventDefault(); zoomAt(e.deltaY < 0 ? 1.2 : 1 / 1.2, e.clientX, e.clientY); }, {passive:false});
    var drag = null;
    ov.addEventListener("pointerdown", function(e){ if(e.target.closest(".kr-bar")) return; drag = {x:e.clientX - px, y:e.clientY - py}; ov.setPointerCapture(e.pointerId); ov.classList.add("drag"); });
    ov.addEventListener("pointermove", function(e){ if(drag){ px = e.clientX - drag.x; py = e.clientY - drag.y; apply(); } });
    ov.addEventListener("pointerup", function(){ drag = null; ov.classList.remove("drag"); });
    ov.addEventListener("dblclick", function(e){ if(!e.target.closest(".kr-bar")) fit(); });
    window.addEventListener("resize", fit);
    show(id || cur);
  };
  document.addEventListener("keydown", function(e){
    if(/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "") || e.ctrlKey || e.metaKey || e.altKey) return;
    if(e.key === "Escape" && el()){ el().remove(); return; }
    if(e.key === "m"){ if(el()) el().remove(); else karteOpen(); }
  });
})();
