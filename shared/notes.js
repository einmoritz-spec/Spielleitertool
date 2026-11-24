/* Notizen als graue Kachel in der Tab-Leiste (oben rechts) mit kleinem Pop-up.
   Jedes System registriert einen Adapter (get/set) und baut die Kachel mit
   NotePop.tile(adapter, schluessel) in seine Tab-Leiste ein. Der Schluessel
   benennt Depth / Akt / Szene – so merkt sich jede Stelle ihre eigene Notiz. */
(function(){
  var AD = {}, pop = null, cur = null;
  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;"); }
  function has(a,k){ try{ var v = AD[a].get(k); return !!(v && String(v).trim()); }catch(e){ return false; } }
  function close(){
    if(pop){ pop.remove(); pop = null; }
    if(cur){ cur.classList.remove("open"); cur = null; }
  }
  function place(btn){
    var r = btn.getBoundingClientRect(), w = Math.min(380, innerWidth - 16);
    pop.style.width = w + "px";
    pop.style.top = Math.round(r.bottom + 6) + "px";
    pop.style.left = Math.max(8, Math.min(innerWidth - w - 8, r.right - w)) + "px";
  }
  window.NotePop = {
    reg: function(id, get, set){ AD[id] = { get: get, set: set }; },
    tile: function(a, k){
      return '<button type="button" class="notes-tile' + (has(a,k) ? " has" : "") + '" data-na="' + a + '" data-nk="' + esc(k) +
             '" onclick="NotePop.toggle(this)" aria-label="Notizen">✎<span class="nt-t"> Notizen</span><i class="nt-dot"></i></button>';
    },
    toggle: function(btn){
      if(cur === btn){ close(); return; }
      close();
      var a = btn.getAttribute("data-na"), k = btn.getAttribute("data-nk");
      cur = btn; btn.classList.add("open");
      pop = document.createElement("div"); pop.className = "notes-pop";
      pop.innerHTML = '<button type="button" class="np-x" aria-label="Schließen">×</button><textarea placeholder="Notizen …"></textarea>';
      var ta = pop.querySelector("textarea");
      try{ ta.value = AD[a].get(k) || ""; }catch(e){}
      ta.addEventListener("input", function(){
        try{ AD[a].set(k, ta.value); }catch(e){}
        btn.classList.toggle("has", !!ta.value.trim());
      });
      pop.querySelector(".np-x").onclick = close;
      pop.addEventListener("click", function(e){ e.stopPropagation(); });
      document.body.appendChild(pop);
      place(btn);
      ta.focus();
    }
  };

  /* Handy: Kachel aus der Tab-Leiste in die freie Ecke rechts neben den Brotkrumen */
  function dock(){
    var mobile = innerWidth <= 1000;
    document.querySelectorAll(".notes-tile").forEach(function(t){
      var bar = t.closest(".case-tabbar"), row = t.closest(".crumb-row");
      if(bar){
        var cr = bar.previousElementSibling; while(cr && cr.classList.contains("case-tabbar")) cr = cr.previousElementSibling;
        if(cr && cr.classList.contains("wk-head")) cr = cr.querySelector(".crumbs");
        if(!cr || !/crumb/.test(cr.className)) return;
        var r = cr.parentElement.classList.contains("crumb-row") ? cr.parentElement : null;
        if(!r){ r = document.createElement("div"); r.className = "crumb-row"; cr.parentElement.insertBefore(r, cr); r.appendChild(cr); }
        r.appendChild(t);
        cr.scrollLeft = cr.scrollWidth;
      }
    });
  }
  var dq = 0;
  new MutationObserver(function(){ if(dq) return; dq = requestAnimationFrame(function(){ dq = 0; dock(); }); }).observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener("resize", dock);
  document.addEventListener("click", function(e){ if(pop && !(e.target.closest && e.target.closest(".notes-tile"))) close(); });
  document.addEventListener("keydown", function(e){ if(e.key === "Escape") close(); });
  window.addEventListener("hashchange", close);
  window.addEventListener("resize", function(){ if(pop && cur) place(cur); });
})();
