/* City of Mist – Pfeiltasten: ←/→ schalten durch die Kopfzeile (Tabs und Unterpunkte nacheinander),
   ↓/↑ durch die Seitenleiste links (Kategorien, Einträge, Abschnitte des Regelwerks). */
(function(){
  var cur = null;
  function reset(){ cur = null; }
  window.addEventListener("hashchange", reset);
  window.addEventListener("wheel", reset, {passive:true});
  window.addEventListener("touchstart", reset, {passive:true});
  document.addEventListener("mousedown", reset);
  var vis = function(l){ return l.filter(function(e){ return e.offsetParent!==null; }); };
  function blocked(e){
    if(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey) return true;
    var t=e.target; if(t&&(t.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return true;
    if(document.querySelector("#bvOverlay:not([hidden]),#srch.on,#srch.show,#rwlb.on,#mmP.on")) return true;
    var s=document.getElementById("srch"); if(s&&s.offsetParent!==null) return true;
    var o=document.getElementById("bvOverlay"); if(o&&!o.hidden) return true;
    return false;
  }
  /* Reihenfolge aller Kopfzeilen-Seiten: Hash-Pfade */
  function headerSeq(){
    var r=route(), seq=[], at="";
    if(r.sys==="rw"){
      seq.push("rw/start");
      var f=typeof rwFlat==="function"?rwFlat():[];
      f.forEach(function(x){ seq.push("rw/"+x.tab+"/"+x.s.id); });
      if(r.tab==="start"||!CM_RW_NAV.secs[r.tab]) at="rw/start";
      else { var l=CM_RW_NAV.secs[r.tab], s=l.filter(function(x){return x.id===r.sub;})[0]||l[0]; at="rw/"+r.tab+"/"+s.id; }
    } else if(r.sys==="ss"){
      seq=["ss/start","ss/spieler"]; CM_NAV.sl.forEach(function(s){ seq.push("ss/sl/"+s.id); });
      if(r.tab==="spieler") at="ss/spieler";
      else if(r.tab==="sl"){ var s2=CM_NAV.sl.filter(function(x){return x.id===r.sub;})[0]||CM_NAV.sl[0]; at="ss/sl/"+s2.id; }
      else at="ss/start";
    }
    return {seq:seq, i:seq.indexOf(at)};
  }
  function railLinks(){ return vis([].slice.call(document.querySelectorAll(".onav .ocat, .onav .osub a, .rwtoc a"))); }
  document.addEventListener("keydown", function(e){
    var k=e.key;
    if(k!=="ArrowLeft"&&k!=="ArrowRight"&&k!=="ArrowUp"&&k!=="ArrowDown") return;
    if(blocked(e)) return;
    if(k==="ArrowLeft"||k==="ArrowRight"){
      var h=headerSeq(); if(h.i<0) return;
      var n=k==="ArrowRight"?Math.min(h.i+1,h.seq.length-1):Math.max(h.i-1,0);
      if(n===h.i) return;
      e.preventDefault(); location.hash=h.seq[n]; return;
    }
    var links=railLinks(); if(!links.length) return;
    var i=cur?links.indexOf(cur):-1;
    if(i<0) i=links.findIndex(function(a){ return a.classList.contains("on"); });
    var n2=k==="ArrowDown"?(i<0?0:Math.min(i+1,links.length-1)):(i<0?0:Math.max(i-1,0));
    e.preventDefault();
    if(n2===i&&cur) return;
    var a=links[n2]; cur=a; a.click();
    var box=a.closest(".onav, .rwtoc"); if(box&&a.scrollIntoView) a.scrollIntoView({block:"nearest"});
  });
  /* nach jedem Neuaufbau der Seite: Markierung der aktiven Kategorie übernehmen */
  window.addEventListener("hashchange", function(){ cur=null; });
})();
