/* Gemeinsame Bedienung für Local Legends, Nights, Otherscape (und Wake):
   Pfeiltasten, Tab-Leiste mit Randverlauf, zwei Spalten auf großen Monitoren,
   Einstellungen "Pfeiltasten" und "Wichtiges zuerst". */
(function(){
  var CFG = window.UX_CFG || {};
  function get(k,d){ try{ var v=localStorage.getItem("ux."+k); return v===null?d:v; }catch(e){ return d; } }
  function set(k,v){ try{ localStorage.setItem("ux."+k,v); }catch(e){} }
  function typing(e){ var t=e.target; return t&&(/INPUT|TEXTAREA|SELECT/.test(t.tagName)||t.isContentEditable); }

  /* Pfeiltasten: vorige/nächste Szene bzw. Tab */
  document.addEventListener("keydown", function(e){
    if(CFG.noKeys||get("keys","1")!=="1"||typing(e)||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey) return;
    if(e.key!=="ArrowLeft"&&e.key!=="ArrowRight") return;
    if(document.querySelector(".modal-overlay.show,#bvOverlay.show,.bv-overlay.show")) return;
    var act = document.querySelector(CFG.activeTab||".case-tab.active"); if(!act) return;
    var sib = e.key==="ArrowRight" ? act.nextElementSibling : act.previousElementSibling;
    if(sib){ e.preventDefault(); sib.click(); window.scrollTo({top:0}); }
  });

  /* Tab-Leiste: Randverlauf */
  function fades(){
    document.querySelectorAll(".case-tabbar").forEach(function(b){
      if(!b.dataset.uxf){ b.dataset.uxf="1"; b.addEventListener("scroll", function(){ fadeOne(b); },{passive:true}); }
      fadeOne(b);
    });
  }
  function fadeOne(b){
    b.classList.toggle("fade-l", b.scrollLeft>4);
    b.classList.toggle("fade-r", b.scrollLeft+b.clientWidth < b.scrollWidth-4);
  }

  /* Zwei Spalten ab 1500 px */
  var PROT = ".crumb,.crumbs,.case-tabbar,.sec-title,.mini-notes,.pager,.footer-note,.cover-top,.toc,.tab-h";
  function twoCols(){
    var wide = window.innerWidth>=1500;
    (CFG.cols||[]).forEach(function(c){
      document.querySelectorAll(c.box).forEach(function(box){
        var on = box.dataset.uxs==="1";
        if(wide && !on){
          var kids=[].slice.call(box.children), side=kids.filter(function(k){ return k.matches(c.side); });
          if(!side.length) return;
          var mid=kids.filter(function(k){ return !k.matches(PROT); });
          if(mid.length===side.length) return;
          kids.forEach(function(k,i){ k.dataset.uxi=i; });
          var first=mid[0], last=mid[mid.length-1];
          var wrap=document.createElement("div"); wrap.className="ux-cols";
          var main=document.createElement("div"); main.className="ux-main";
          var aside=document.createElement("aside"); aside.className="ux-side";
          wrap.appendChild(main); wrap.appendChild(aside);
          box.insertBefore(wrap, first);
          mid.forEach(function(k){ (k.matches(c.side)?aside:main).appendChild(k); });
          box.dataset.uxs="1";
        } else if(!wide && on){
          var w=box.querySelector(":scope > .ux-cols"); if(!w) return;
          var all=[].slice.call(w.querySelectorAll(".ux-main > *, .ux-side > *"));
          all.sort(function(a,b){ return a.dataset.uxi-b.dataset.uxi; });
          all.forEach(function(k){ box.insertBefore(k,w); });
          w.remove(); box.dataset.uxs="0";
        }
      });
    });
  }

  /* Wichtiges zuerst: Vorlesetexte nach oben */
  function rank(){
    document.documentElement.classList.toggle("ux-rank", get("rank","0")==="1");
    if(get("rank","0")!=="1") return;
    (CFG.cols||[]).forEach(function(c){
      document.querySelectorAll(c.box).forEach(function(box){
        if(box.dataset.uxr==="1") return;
        var reads=[].slice.call(box.querySelectorAll(":scope > .blk-read, :scope > .readaloud"));
        if(!reads.length) return;
        var anchor=[].slice.call(box.children).filter(function(k){ return !k.matches(PROT)&&!k.matches(".blk-read,.readaloud"); })[0];
        if(anchor) reads.forEach(function(r){ box.insertBefore(r,anchor); });
        box.dataset.uxr="1";
      });
    });
  }

  /* Einstellungen */
  function settings(){
    var m=document.getElementById("settingsModal"); if(!m||m.dataset.uxs) return;
    var body=m.querySelector(".modal-body")||m.querySelector(".modal"); if(!body) return;
    m.dataset.uxs="1";
    var d=document.createElement("div"); d.className="ux-set";
    d.innerHTML='<h3>Darstellung</h3>'+
      '<label><input type="checkbox" id="uxKeys"> Pfeiltasten wechseln Szenen</label>'+
      '<label><input type="checkbox" id="uxRank"> Wichtiges zuerst (Vorlesetext oben)</label>';
    var head=body.querySelector(".modal-head");
    if(head&&head.nextSibling) body.insertBefore(d, head.nextSibling); else body.appendChild(d);
    var k=d.querySelector("#uxKeys"), r=d.querySelector("#uxRank");
    k.checked=get("keys","1")==="1"; r.checked=get("rank","0")==="1";
    k.onchange=function(){ set("keys",k.checked?"1":"0"); };
    r.onchange=function(){ set("rank",r.checked?"1":"0"); location.reload(); };
  }

  var t; function run(){ clearTimeout(t); t=setTimeout(function(){ fades(); twoCols(); rank(); settings(); },40); }
  window.addEventListener("resize", run);
  new MutationObserver(run).observe(document.body,{childList:true,subtree:true});
  run();
})();
