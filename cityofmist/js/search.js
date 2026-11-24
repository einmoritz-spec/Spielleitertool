/* Volltextsuche über das Grundregelwerk. Index wird beim ersten Öffnen aufgebaut (lädt dafür alle Abschnitte). */
var SR = { idx:null, q:"", last:null };
function srNorm(s){ return String(s).toLowerCase().replace(/ß/g,"ss").replace(/\*/g,""); }
function srFlat(bs, out){
  (bs||[]).forEach(function(b){
    if(typeof b==="string"){ out.push(b.replace(/^(##? |### |-{1,2} |> |\d+\. )/,"")); return; }
    if(b.box){ out.push(b.box.t||""); srFlat(b.box.b,out); }
    else if(b.tbl){ if(b.tbl.t) out.push(b.tbl.t); (b.tbl.h||[]).forEach(function(c){out.push(c);}); b.tbl.r.forEach(function(r){ out.push(r.join(" · ")); }); }
    else if(b.fq){ out.push((b.fq.l||"")+" "+b.fq.q); (b.fq.tags||[]).forEach(function(t){out.push(t);}); }
    else if(b.tg){ if(b.tg.t) out.push(b.tg.t); out.push(b.tg.i.join(", ")); }
    else if(b.kv){ b.kv.forEach(function(p){ out.push(p[0]+": "+p[1]); }); }
    else if(b.dlg){ b.dlg.forEach(function(p){ out.push(p[0]+": "+p[1]); }); }
  });
}
function srBuild(cb){
  if(SR.idx) return cb();
  var ids=[]; for(var t in CM_RW_NAV.secs) CM_RW_NAV.secs[t].forEach(function(s){ ids.push([t,s]); });
  var n=ids.length;
  ids.forEach(function(x){ rwLoad(x[1].id,function(){ if(--n===0){
    var idx=[]; ids.forEach(function(y){ (CM_RW[y[1].id]||[]).forEach(function(e,i){
      var out=[]; srFlat(e.body,out); srFlat(e.aside,out);
      var txt=out.join("\n");
      idx.push({tab:y[0],sec:y[1].id,secT:y[1].t,i:i,name:e.name,p:e.p,pe:e.pe,txt:txt,n:srNorm(txt),nn:srNorm(e.name+" "+(e.sub||""))});
    }); });
    SR.idx=idx; cb(); } }); });
}
function srSnippet(txt, qs){
  var low=srNorm(txt), pos=-1;
  for(var k=0;k<qs.length;k++){ var p=low.indexOf(qs[k]); if(p>=0 && (pos<0||p<pos)) pos=p; }
  if(pos<0) return "";
  var a=Math.max(0,pos-70), b=Math.min(txt.length,pos+150);
  var s=(a>0?"… ":"")+txt.slice(a,b).replace(/\*/g,"").replace(/\n+/g," · ")+(b<txt.length?" …":"");
  return srMark(esc(s),qs);
}
function srMark(html,qs){
  qs.forEach(function(q){ if(!q) return; var re=new RegExp("("+q.replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/ss/g,"(?:ss|ß)")+")","gi"); html=html.replace(re,"<mark>$1</mark>"); });
  return html;
}
function srSearch(q){
  var qs=srNorm(q).split(/\s+/).filter(function(x){return x.length>0;});
  if(!qs.length||!SR.idx) return {qs:qs,res:[]};
  var res=[];
  SR.idx.forEach(function(e){
    var sc=0;
    for(var k=0;k<qs.length;k++){
      var inN=e.nn.indexOf(qs[k])>=0, c=0, p=-1;
      while((p=e.n.indexOf(qs[k],p+1))>=0 && c<50) c++;
      if(!inN && !c) return;
      sc+= (inN?100:0)+c;
    }
    res.push({e:e,sc:sc});
  });
  res.sort(function(a,b){return b.sc-a.sc;});
  return {qs:qs,res:res};
}
function srRender(){
  var q=document.getElementById("srq").value, box=document.getElementById("srres");
  var r=srSearch(q); SR.q=q;
  if(!r.qs.length){ box.innerHTML=""; return; }
  if(!r.res.length){ box.innerHTML='<div class="srnone">Keine Treffer</div>'; return; }
  var h='<div class="srcnt">'+r.res.length+' Treffer'+(r.res.length>60?' (60 angezeigt)':'')+'</div>';
  r.res.slice(0,60).forEach(function(x){ var e=x.e;
    h+='<button class="srhit" onclick="srGo(\''+e.tab+'\',\''+e.sec+'\','+e.i+')"><span class="srt"><b>'+srMark(esc(e.name),r.qs)+'</b><small>'+esc(e.secT)+'</small><span class="pg">S. '+e.p+(e.pe&&e.pe!==e.p?'–'+e.pe:'')+'</span></span><span class="srs">'+srSnippet(e.txt,r.qs)+'</span></button>'; });
  box.innerHTML=h;
}
function srGo(tab,sec,i){ srClose(); location.hash="rw/"+tab+"/"+sec+"/"+i; if(route().cat==String(i)&&route().sub===sec) render(); }
function srOpen(){
  var o=document.getElementById("srch");
  if(!o){ o=document.createElement("div"); o.id="srch"; o.className="srch";
    o.innerHTML='<div class="srbox"><div class="srbar"><input id="srq" type="search" placeholder="Im Regelwerk suchen" autocomplete="off" spellcheck="false"><button class="srx" onclick="srClose()" aria-label="Schließen">✕</button></div><div id="srres" class="srres"><div class="srnone">Lade Index …</div></div></div>';
    o.addEventListener("click",function(e){ if(e.target===o) srClose(); });
    document.body.appendChild(o);
    document.getElementById("srq").addEventListener("input",srRender);
    document.addEventListener("keydown",function(e){ if(e.key==="Escape") srClose(); });
  }
  o.classList.add("on"); var q=document.getElementById("srq"); q.value=SR.q||""; q.focus(); q.select();
  document.getElementById("srres").innerHTML='<div class="srnone">Lade Index …</div>';
  srBuild(function(){ srRender(); });
}
function srClose(){ var o=document.getElementById("srch"); if(o) o.classList.remove("on"); }
document.addEventListener("keydown",function(e){ if(e.key==="/" && !/INPUT|TEXTAREA/.test((document.activeElement||{}).tagName||"")){ e.preventDefault(); srOpen(); } });
/* Treffer-Markierung in der geöffneten Karte */
function srHighlight(root){
  if(!SR.q||!root) return;
  var qs=srNorm(SR.q).split(/\s+/).filter(Boolean); if(!qs.length) return;
  var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,null), nodes=[], n;
  while((n=w.nextNode())) nodes.push(n);
  nodes.forEach(function(t){ var s=t.nodeValue, low=srNorm(s); if(!qs.some(function(q){return low.indexOf(q)>=0;})) return;
    var span=document.createElement("span"); span.innerHTML=srMark(esc(s),qs); t.parentNode.replaceChild(span,t); });
}
