/* Tab-Leisten, die am PC nicht in eine Zeile passen: ‹ aktueller Tab ▾ › mit Aufklapp-Liste aller Tabs */
(function(){
  var pop = null, popBar = null;
  function closePop(){ if(pop){ pop.remove(); pop = null; } if(popBar){ popBar.classList.remove("tp-open"); popBar = null; } }
  function build(bar){
    if(bar.dataset.tp || innerWidth < 1000) return;
    var tabs = [].slice.call(bar.children).filter(function(c){ return c.classList.contains("case-tab"); });
    if(tabs.length < 5) return;
    var top0 = tabs[0].offsetTop;
    if(!tabs.some(function(t){ return t.offsetTop > top0 + 4; })) return;
    bar.dataset.tp = "1"; bar.classList.add("tp-on");
    var idx = Math.max(0, tabs.findIndex(function(t){ return t.classList.contains("active"); }));
    var lbl = function(t){ return t.textContent.replace(/\s+/g, " ").trim(); };
    var c = document.createElement("div"); c.className = "tp-ctrl";
    c.innerHTML = '<button class="tp-nav" aria-label="Zurück">‹</button><button class="tp-cur"><span class="tp-t"></span><small class="tp-n"></small><i>▾</i></button><button class="tp-nav" aria-label="Weiter">›</button>';
    c.querySelector(".tp-t").textContent = lbl(tabs[idx]);
    c.querySelector(".tp-n").textContent = (idx+1) + " / " + tabs.length;
    var nv = c.querySelectorAll(".tp-nav");
    nv[0].onclick = function(){ if(tabs[idx-1]) tabs[idx-1].click(); }; nv[0].disabled = idx === 0;
    nv[1].onclick = function(){ if(tabs[idx+1]) tabs[idx+1].click(); }; nv[1].disabled = idx === tabs.length-1;
    c.querySelector(".tp-cur").onclick = function(e){
      e.stopPropagation();
      if(pop){ closePop(); return; }
      pop = document.createElement("div"); pop.className = "tp-pop";
      tabs.forEach(function(t){ var k = t.cloneNode(true); k.classList.remove("tab-aftermath"); k.onclick = null; k.addEventListener("click", function(){ closePop(); t.click(); }); pop.appendChild(k); });
      bar.appendChild(pop); popBar = bar; bar.classList.add("tp-open");
      var a = pop.querySelector(".active"); if(a && a.scrollIntoView) a.scrollIntoView({block:"nearest"});
    };
    bar.insertBefore(c, bar.firstChild);
  }
  function scan(){ document.querySelectorAll(".case-tabbar:not(.grpbar)").forEach(build); }
  var q = 0;
  new MutationObserver(function(){ if(q) return; q = requestAnimationFrame(function(){ q = 0; scan(); }); }).observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener("click", function(e){ if(pop && !(e.target.closest && e.target.closest(".tp-pop"))) closePop(); });
  document.addEventListener("keydown", function(e){ if(e.key === "Escape") closePop(); });
  window.addEventListener("hashchange", closePop);
  window.addEventListener("load", scan);
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(scan);
})();
