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
    if(b.box){ var x=b.box; h+='<section class="bx bx-'+x.k+((x.b&&x.b.length)?'':' bx-kopf')+'">'+(x.t||x.p?'<header><b>'+md(x.t||"")+'</b>'+(x.p?'<span class="pg">S. '+x.p+'</span>':'')+'</header>':'')+(x.b&&x.b.length?'<div class="bxb">'+rwBlocks(x.b)+'</div>':'')+'</section>'; }
    else if(b.tbl){ var t=b.tbl; h+='<div class="tblw"><table class="rwt">'+(t.t?'<caption>'+md(t.t)+'</caption>':'')+(t.h&&t.h.length?'<thead><tr>'+t.h.map(function(c){return '<th>'+md(c)+'</th>';}).join("")+'</tr></thead>':'')+'<tbody>'+t.r.map(function(r){return '<tr>'+r.map(function(c){return '<td>'+md(String(c))+'</td>';}).join("")+'</tr>';}).join("")+'</tbody></table></div>'; }
    else if(b.fq){ var q=b.fq; h+='<div class="fq"><span class="fql">'+esc(q.l||"")+'</span><div><b class="fqq">'+md(q.q)+'</b>'+((q.tags&&q.tags.length)?'<p class="fqt">'+q.tags.map(function(g){return '<span class="tg ex">'+esc(g)+'</span>';}).join("")+'</p>':'')+'</div></div>'; }
    else if(b.tg){ var g=b.tg; h+='<div class="tgrow">'+(g.t?'<u>'+md(g.t)+'</u>':'')+g.i.map(function(s){return '<span class="tg '+(g.k||"n")+'">'+esc(s)+'</span>';}).join("")+'</div>'; }
    else if(b.kv){ h+='<dl class="kv">'+b.kv.map(function(p){return '<div class="kvi"><dt>'+md(p[0])+'</dt><dd>'+md(p[1])+'</dd></div>';}).join("")+'</dl>'; }
    else if(b.dlg){ h+='<div class="dlg">'+b.dlg.map(function(p){return '<p><b>'+md(p[0])+':</b> '+md(p[1])+'</p>';}).join("")+'</div>'; }
  }
  return h;
}
function rwIsSide(b){ return b&&typeof b==="object"&&((b.box&&b.box.b&&b.box.b.length)||b.tbl||b.dlg); }
function rwCard(e,id,secId){
  var tb=rwTb(secId,e), doc=rwDoc(secId,e), figs=rwFigHtml(secId,e);
  var body=e.body||[], main=body.filter(function(b){return !rwIsSide(b);}), side=body.filter(rwIsSide).concat(e.aside||[]);
  var sideHtml=figs+rwBlocks(side)+(doc?'<img class="rwdoc" data-lb loading="lazy" alt="" src="'+doc+'">':'');
  return '<article class="rwa" id="'+id+'"><h3>'+esc(e.name)+pg(e.p,e.pe)+'</h3>'+(e.sub?'<p class="rwsub">'+esc(e.sub)+'</p>':'')+(tb?'<img class="rwbn" data-lb loading="lazy" alt="" src="'+tb+'">':'')+
    (sideHtml?'<aside class="rws">'+sideHtml+'</aside>':'')+'<div class="rwm">'+rwBlocks(main)+'</div></article>';
}
var __tocSpy;
function tocSpy(toc, ids, offset){
  if(__tocSpy) window.removeEventListener("scroll",__tocSpy);
  __tocSpy=null; if(!toc||!ids.length) return;
  var links=[].slice.call(toc.querySelectorAll("a")), tick=false, cur=-1;
  __tocSpy=function(){ if(tick) return; tick=true; requestAnimationFrame(function(){ tick=false;
    var idx=0; for(var i=0;i<ids.length;i++){ var el=document.getElementById(ids[i]); if(!el) continue; if(el.getBoundingClientRect().top<=offset) idx=i; else break; }
    if(idx===cur) return; cur=idx; links.forEach(function(a,i){ a.classList.toggle("on",i===idx); });
    var a=links[idx]; if(a&&toc.scrollHeight>toc.clientHeight) toc.scrollTop=a.offsetTop-toc.clientHeight/2;
  }); };
  window.addEventListener("scroll",__tocSpy,{passive:true}); __tocSpy();
}
function rwJump(id){ var el=document.getElementById(id); if(el) el.scrollIntoView({behavior:"smooth",block:"start"}); }
function rwSection(tab,secId,cardIdx){
  var list=CM_RW_NAV.secs[tab]||[], s=list.filter(function(x){return x.id===secId;})[0]||list[0];
  var pills='<nav class="pills">'+(list.length>1?list.map(function(x){return '<button class="pill'+(x.id===s.id?' on':'')+'" onclick="gr(\''+tab+'/'+x.id+'\')">'+esc(x.t)+'</button>';}).join(""):"")+'</nav>';
  var host='<div id="rwhost"><div class="stub"><span>Lade …</span></div></div>';
  rwLoad(s.id,function(){
    var el=document.getElementById("rwhost"); if(!el||route().tab!==tab) return;
    var es=CM_RW[s.id]||[], many=es.length>1;
    var toc=es.map(function(c,i){return '<a onclick="rwJump(\'rw-'+s.id+'-'+i+'\')">'+esc(c.name)+'</a>';}).join("");
    var sel=many?'<select class="rwsel" onchange="if(this.value)rwJump(this.value)" aria-label="Springen"><option value="">Springen zu …</option>'+es.map(function(c,i){return '<option value="rw-'+s.id+'-'+i+'">'+esc(c.name)+'</option>';}).join("")+'</select>':'';
    el.innerHTML='<section class="blk">'+rwHero(s.id)+'<div class="sh"><h2>'+esc(s.t)+'</h2>'+pg(s.p,s.pe)+sel+'</div>'+
     (es.length?'<div class="rwbody solo"><div class="rwflow">'+es.map(function(e,i){return rwCard(e,"rw-"+s.id+"-"+i,s.id);}).join("")+'</div></div>':'<div class="stub"><span>Noch keine Inhalte</span></div>')+'</section>'+rwPrevNext(tab,s.id);
    var rail=document.getElementById("rwRail");
    if(rail){ if(many){ rail.innerHTML=toc; tocSpy(rail,es.map(function(c,i){return "rw-"+s.id+"-"+i;}),110); } else rail.parentNode.classList.add("nontoc"); }
    if(cardIdx!==undefined&&cardIdx!==""){ var c=document.getElementById("rw-"+s.id+"-"+cardIdx); if(c){ srHighlight(c); c.scrollIntoView({block:"start"}); window.scrollBy(0,-70); } }
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
  return '<section class="blk"><h2>Spieler:innen-Handbuch <button class="chip bookbtn" onclick="BV.open(\'rw\',1)">Buch öffnen</button></h2><div class="kcs six">'+h+'</div></section>';
}
function rwFlat(){ var o=[]; CM_RW_NAV.tabs.forEach(function(t){ (CM_RW_NAV.secs[t.id]||[]).forEach(function(s){o.push({tab:t.id,s:s});}); }); (CM_RW_NAV.extra||[]).forEach(function(t){ (CM_RW_NAV.secs[t.id]||[]).forEach(function(s){o.push({tab:t.id,s:s});}); }); return o; }
function rwPrevNext(tab,id){
  var f=rwFlat(), i=-1; f.forEach(function(x,k){ if(x.tab===tab&&x.s.id===id) i=k; }); if(i<0) return "";
  var b=function(x,dir){ return x?'<button class="pn '+dir+'" onclick="gr(\''+x.tab+'/'+x.s.id+'\')">'+(dir==="prev"?'<i>‹</i>':'')+'<span><small>'+esc((CM_RW_NAV.tabs.filter(function(t){return t.id===x.tab;})[0]||{t:"Anhang"}).t)+'</small>'+esc(x.s.t)+'</span>'+(dir==="next"?'<i>›</i>':'')+'</button>':'<span></span>'; };
  return '<nav class="pnav">'+b(f[i-1],"prev")+b(f[i+1],"next")+'</nav>';
}
function pageRW(r){
  var tabs='<nav class="tabs">'+CM_RW_NAV.tabs.map(function(t){return '<button class="tab'+(t.id===r.tab?' on':'')+'" onclick="gr(\''+t.id+'\')">'+t.t+'</button>';}).join("")+'</nav>';
  var isStart=r.tab==="start"||!CM_RW_NAV.secs[r.tab];
  var body= isStart ? rwStart() : rwSection(r.tab,r.sub,r.cat);
  return '<div class="railshell'+(isStart?' nontoc':'')+'"><nav class="rwtoc" id="rwRail"></nav><div class="railmain">'+tabs+body+'</div></div>';
}
