/* Grundregelwerk – Anzeige. Karten wie in ss.js (details.ort), Inhalte aus CM_RW[abschnitt] (Schema: tools/regelwerk/SCHEMA.md). */
var RW_LOADED = {};
function rwLoad(id, cb){
  if(RW_LOADED[id]) return setTimeout(cb,0);
  var files=(window.CM_RW_FILES||{})[id]||[], n=files.length;
  if(!n){ RW_LOADED[id]=true; return setTimeout(cb,0); }
  files.forEach(function(f){ var s=document.createElement("script"); s.async=false; s.src="js/"+f; s.onload=s.onerror=function(){ if(--n===0){ RW_LOADED[id]=true; cb(); } }; document.head.appendChild(s); });
}
function rwList(items,ord){
  var h=ord?'<div class="rwsteps">':'<ul class="rwul">';
  if(ord){ items.forEach(function(t){ var m=/^(\d+)\.\s+([\s\S]*)$/.exec(t)||[0,"",t]; h+='<div class="rwstep"><b>'+m[1]+'.</b><span>'+md(m[2])+'</span></div>'; }); return h+'</div>'; }
  var tops=[]; items.forEach(function(t){ if(t.indexOf("-- ")===0&&tops.length) tops[tops.length-1].s.push(t.slice(3)); else tops.push({t:t.replace(/^-+ /,""),s:[]}); });
  tops.forEach(function(x){ h+='<li>'+md(x.t)+(x.s.length?'<ul>'+x.s.map(function(s){return '<li>'+md(s)+'</li>';}).join("")+'</ul>':'')+'</li>'; });
  return h+'</ul>';
}
function rwBlocks(bs){
  var h="", i=0; bs=bs||[];
  while(i<bs.length){
    var b=bs[i];
    if(typeof b==="string"){
      var it=[];
      if(/^-{1,2} /.test(b)){ while(i<bs.length&&typeof bs[i]==="string"&&/^-{1,2} /.test(bs[i])) it.push(bs[i++]); h+=rwList(it,false); continue; }
      if(/^\d+\. /.test(b)){ while(i<bs.length&&typeof bs[i]==="string"&&/^\d+\. /.test(bs[i])) it.push(bs[i++]); h+=rwList(it,true); continue; }
      i++;
      if(b.indexOf("### ")===0) h+='<h5 class="lh2">'+md(b.slice(4))+'</h5>';
      else if(b.indexOf("## ")===0) h+='<h4 class="lh">'+md(b.slice(3))+'</h4>';
      else if(b.indexOf("> ")===0) h+='<blockquote class="rwq">'+md(b.slice(2))+'</blockquote>';
      else h+='<p>'+md(b)+'</p>';
      continue;
    }
    i++;
    if(b.box){ var x=b.box; h+='<section class="bx bx-'+x.k+'">'+(x.t||x.p?'<header><b>'+md(x.t||"")+'</b>'+(x.p?'<span class="pg">S. '+x.p+'</span>':'')+'</header>':'')+'<div class="bxb">'+rwBlocks(x.b)+'</div></section>'; }
    else if(b.tbl){ var t=b.tbl; h+='<div class="tblw"><table class="rwt">'+(t.t?'<caption>'+md(t.t)+'</caption>':'')+(t.h&&t.h.length?'<thead><tr>'+t.h.map(function(c){return '<th>'+md(c)+'</th>';}).join("")+'</tr></thead>':'')+'<tbody>'+t.r.map(function(r){return '<tr>'+r.map(function(c){return '<td>'+md(String(c))+'</td>';}).join("")+'</tr>';}).join("")+'</tbody></table></div>'; }
    else if(b.fq){ var q=b.fq; h+='<div class="fq"><span class="fql">'+esc(q.l||"")+'</span><div><b class="fqq">'+md(q.q)+'</b>'+((q.tags&&q.tags.length)?'<p class="fqt">'+q.tags.map(function(g){return '<span class="tg ex">'+esc(g)+'</span>';}).join("")+'</p>':'')+'</div></div>'; }
    else if(b.tg){ var g=b.tg; h+='<div class="tgrow">'+(g.t?'<u>'+md(g.t)+'</u>':'')+g.i.map(function(s){return '<span class="tg '+(g.k||"n")+'">'+esc(s)+'</span>';}).join("")+'</div>'; }
    else if(b.kv){ h+='<dl class="kv">'+b.kv.map(function(p){return '<div class="kvi"><dt>'+md(p[0])+'</dt><dd>'+md(p[1])+'</dd></div>';}).join("")+'</dl>'; }
    else if(b.dlg){ h+='<div class="dlg">'+b.dlg.map(function(p){return '<p><b>'+md(p[0])+':</b> '+md(p[1])+'</p>';}).join("")+'</div>'; }
  }
  return h;
}
function rwCard(e,id,open,secId){
  var tb=rwTb(secId,e), doc=rwDoc(secId,e), figs=rwFigHtml(secId,e), aside=(e.aside&&e.aside.length)||doc;
  return '<details class="ort rwc" id="'+id+'"'+(open?' open':'')+'><summary>'+(tb?'<img class="rwth" loading="lazy" alt="" src="'+tb+'">':'')+'<h3>'+esc(e.name)+'</h3>'+pg(e.p,e.pe)+(e.sub?'<span class="tz">'+esc(e.sub)+'</span>':'')+'</summary><div class="ob">'+(tb?'<img class="rwbn" data-lb loading="lazy" alt="" src="'+tb+'">':'')+'<div class="ocols rwcols'+(aside?'':' solo')+'"><div class="otxt rwtx">'+figs+rwBlocks(e.body)+'</div>'+(aside?'<aside class="rwas">'+(e.aside&&e.aside.length?rwBlocks(e.aside):'')+(doc?'<img class="rwdoc" data-lb loading="lazy" alt="" src="'+doc+'">':'')+'</aside>':'')+'</div></div></details>';
}
function rwToggle(on){ var d=document.querySelectorAll(".rwgrid details.rwc"); for(var i=0;i<d.length;i++) d[i].open=on; }
function rwSection(tab,secId,cardIdx){
  var list=CM_RW_NAV.secs[tab]||[], s=list.filter(function(x){return x.id===secId;})[0]||list[0];
  var pills='<nav class="pills">'+(list.length>1?list.map(function(x){return '<button class="pill'+(x.id===s.id?' on':'')+'" onclick="gr(\''+tab+'/'+x.id+'\')">'+esc(x.t)+'</button>';}).join(""):"")+'</nav>';
  var host='<div id="rwhost"><div class="stub"><span>Lade …</span></div></div>';
  rwLoad(s.id,function(){
    var el=document.getElementById("rwhost"); if(!el||route().tab!==tab) return;
    var es=CM_RW[s.id]||[], one=es.length===1, openFirst=(s.id==="kurzreferenz");
    el.innerHTML='<section class="blk">'+rwHero(s.id)+'<div class="sh"><h2>'+esc(s.t)+'</h2>'+pg(s.p,s.pe)+(es.length>9?'<input class="rwfl" type="search" placeholder="Filter" aria-label="Filter" oninput="rwFilter(this.value)">':'')+(es.length>1?'<button class="rwtog" onclick="rwToggle(!document.querySelector(\'.rwgrid details.rwc[open]\'))" title="Alle auf-/zuklappen" aria-label="Alle auf-/zuklappen">⇕</button>':'')+'</div>'+
     (es.length?'<div class="rwgrid">'+es.map(function(e,i){return rwCard(e,"rw-"+s.id+"-"+i,one||(openFirst&&i===0)||(cardIdx!==undefined&&cardIdx!==""&&String(i)===String(cardIdx)),s.id);}).join("")+'</div>':'<div class="stub"><span>Noch keine Inhalte</span></div>')+'</section>'+rwPrevNext(tab,s.id);
    if(cardIdx!==undefined&&cardIdx!==""){ var c=document.getElementById("rw-"+s.id+"-"+cardIdx); if(c){ c.open=true; srHighlight(c); c.scrollIntoView({block:"start"}); window.scrollBy(0,-70); } }
  });
  return (list.length>1?pills:"")+host;
}
function rwStart(){
  var K=CM_RW_NAV.kapitel;
  var h=K.map(function(k,n){
    var rows=k.secs.map(function(id){var i=rwSecInfo(id); return [i.sec.t,"gr(\'"+i.tab+"/"+id+"\')",i.sec.p<8?8:i.sec.p];});
    var num=/^\d/.test(k.t)?k.t.charAt(0):"", t=k.t.replace(/^\d\.\s*/,"");
    return kapCard(num,t,k.d,k.p,"gr(\'"+k.tab+"\')",rows);
  }).join("");
  return '<section class="blk"><h2>Spieler:innen-Handbuch</h2><div class="kcs six">'+h+'</div></section>';
}
function rwFlat(){ var o=[]; CM_RW_NAV.tabs.forEach(function(t){ (CM_RW_NAV.secs[t.id]||[]).forEach(function(s){o.push({tab:t.id,s:s});}); }); (CM_RW_NAV.extra||[]).forEach(function(t){ (CM_RW_NAV.secs[t.id]||[]).forEach(function(s){o.push({tab:t.id,s:s});}); }); return o; }
function rwPrevNext(tab,id){
  var f=rwFlat(), i=-1; f.forEach(function(x,k){ if(x.tab===tab&&x.s.id===id) i=k; }); if(i<0) return "";
  var b=function(x,dir){ return x?'<button class="pn '+dir+'" onclick="gr(\''+x.tab+'/'+x.s.id+'\')">'+(dir==="prev"?'<i>‹</i>':'')+'<span><small>'+esc((CM_RW_NAV.tabs.filter(function(t){return t.id===x.tab;})[0]||{t:"Anhang"}).t)+'</small>'+esc(x.s.t)+'</span>'+(dir==="next"?'<i>›</i>':'')+'</button>':'<span></span>'; };
  return '<nav class="pnav">'+b(f[i-1],"prev")+b(f[i+1],"next")+'</nav>';
}
function rwFilter(v){ v=srNorm(v); var c=document.querySelectorAll(".rwgrid details.rwc"); for(var i=0;i<c.length;i++){ var t=srNorm(c[i].querySelector("h3").textContent); c[i].style.display=(!v||t.indexOf(v)>=0)?"":"none"; } }
function pageRW(r){
  var tabs='<nav class="tabs">'+CM_RW_NAV.tabs.map(function(t){return '<button class="tab'+(t.id===r.tab?' on':'')+'" onclick="gr(\''+t.id+'\')">'+t.t+'</button>';}).join("")+'</nav>';
  var body= r.tab==="start"||!CM_RW_NAV.secs[r.tab] ? rwStart() : rwSection(r.tab,r.sub,r.cat);
  return tabs+body;
}
