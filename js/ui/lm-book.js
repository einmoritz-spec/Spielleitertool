/* Legend in the Mist – Nachschlagewerk (Core Book + The Dales): Tabs, Abschnitte, Karten. Daten: js/data/lm/*.js via lmAdd(id, karten) */
var LM = {data:{}, loaded:{}};
function lmAdd(id, cards){ (LM.data[id]=LM.data[id]||[]).push.apply(LM.data[id], cards); }
function lmLoad(id, cb){
  if(LM.loaded[id]) return setTimeout(cb,0);
  var files=(window.LM_FILES||{})[id]||[], n=files.length;
  if(!n){ LM.loaded[id]=true; return setTimeout(cb,0); }
  files.forEach(function(f){ var s=document.createElement("script"); s.async=false; s.src="js/"+f; s.onload=s.onerror=function(){ if(--n===0){ LM.loaded[id]=true; cb(); } }; document.head.appendChild(s); });
}
function lmMd(s){ return esc(s).replace(/\*\*(.+?)\*\*/g,"<b>$1</b>").replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?!\*)/g,"$1<i>$2</i>"); }
function lmPg(p,pe){ return p ? '<span class="lm-pg">S. '+p+(pe&&pe!==p?'–'+pe:'')+'</span>' : ''; }
function lmList(items,ord){
  if(ord){ return '<div class="lm-steps">'+items.map(function(t){ var m=/^(\d+)\.\s+([\s\S]*)$/.exec(t)||[0,"",t]; return '<div class="lm-step"><b>'+m[1]+'.</b><span>'+lmMd(m[2])+'</span></div>'; }).join("")+'</div>'; }
  var tops=[]; items.forEach(function(t){ if(t.indexOf("-- ")===0&&tops.length) tops[tops.length-1].s.push(t.slice(3)); else tops.push({t:t.replace(/^-+ /,""),s:[]}); });
  return '<ul class="lm-ul">'+tops.map(function(x){ return '<li>'+lmMd(x.t)+(x.s.length?'<ul>'+x.s.map(function(s){return '<li>'+lmMd(s)+'</li>';}).join("")+'</ul>':'')+'</li>'; }).join("")+'</ul>';
}
function lmBlocks(bs){
  var h="", i=0; bs=bs||[];
  while(i<bs.length){
    var b=bs[i], it=[];
    if(typeof b==="string"){
      if(/^-{1,2} /.test(b)){ while(i<bs.length&&typeof bs[i]==="string"&&/^-{1,2} /.test(bs[i])) it.push(bs[i++]); h+=lmList(it,false); continue; }
      if(/^\d+\. /.test(b)){ while(i<bs.length&&typeof bs[i]==="string"&&/^\d+\. /.test(bs[i])) it.push(bs[i++]); h+=lmList(it,true); continue; }
      i++;
      if(b.indexOf("### ")===0) h+='<h5 class="lm-h5">'+lmMd(b.slice(4))+'</h5>';
      else if(b.indexOf("## ")===0) h+='<h4 class="lm-h4">'+lmMd(b.slice(3))+'</h4>';
      else if(b.indexOf("> ")===0) h+='<blockquote class="lm-q">'+lmMd(b.slice(2))+'</blockquote>';
      else h+='<p>'+lmMd(b)+'</p>';
      continue;
    }
    i++;
    if(b.box){ var x=b.box; h+='<section class="lm-bx lm-bx-'+(x.k||"hinweis")+'">'+(x.t||x.p?'<header><b>'+lmMd(x.t||"")+'</b>'+(x.p?'<span class="lm-pg">S. '+x.p+'</span>':'')+'</header>':'')+'<div class="lm-bxb">'+lmBlocks(x.b)+'</div></section>'; }
    else if(b.tbl){ var t=b.tbl; h+='<div class="lm-tblw"><table class="lm-t">'+(t.t?'<caption>'+lmMd(t.t)+'</caption>':'')+(t.h&&t.h.length?'<thead><tr>'+t.h.map(function(c){return '<th>'+lmMd(c)+'</th>';}).join("")+'</tr></thead>':'')+'<tbody>'+t.r.map(function(r){return '<tr>'+r.map(function(c){return '<td>'+lmMd(String(c))+'</td>';}).join("")+'</tr>';}).join("")+'</tbody></table></div>'; }
    else if(b.fq){ var q=b.fq; h+='<div class="lm-fq"><span class="lm-fql">'+esc(q.l||"")+'</span><div><b>'+lmMd(q.q)+'</b>'+((q.tags&&q.tags.length)?'<p class="lm-tags">'+q.tags.map(function(g){return '<span>'+esc(g)+'</span>';}).join("")+'</p>':'')+'</div></div>'; }
    else if(b.tg){ var g=b.tg; h+='<div class="lm-tgrow">'+(g.t?'<u>'+lmMd(g.t)+'</u>':'')+g.i.map(function(s){return '<span class="lm-tg lm-tg-'+(g.k||"n")+'">'+esc(s)+'</span>';}).join("")+'</div>'; }
    else if(b.kv){ h+='<dl class="lm-kv">'+b.kv.map(function(p){return '<div><dt>'+lmMd(p[0])+'</dt><dd>'+lmMd(p[1])+'</dd></div>';}).join("")+'</dl>'; }
    else if(b.dlg){ h+='<div class="lm-dlg">'+b.dlg.map(function(p){return '<p><b>'+lmMd(p[0])+':</b> '+lmMd(p[1])+'</p>';}).join("")+'</div>'; }
  }
  return h;
}
function lmCard(e,i){
  var aside=e.aside&&e.aside.length;
  return '<details class="lm-c" data-n="'+esc((e.name+" "+(e.sub||"")).toLowerCase())+'"><summary><h3>'+esc(e.name)+'</h3>'+lmPg(e.p,e.pe)+(e.sub?'<span class="lm-sub">'+esc(e.sub)+'</span>':'')+'</summary><div class="lm-cb'+(aside?' lm-2':'')+'"><div class="lm-tx">'+lmBlocks(e.body)+'</div>'+(aside?'<aside class="lm-as">'+lmBlocks(e.aside)+'</aside>':'')+'</div></details>';
}
function lmFilter(v){ v=(v||"").toLowerCase().trim(); document.querySelectorAll(".lm-grid>details.lm-c").forEach(function(d){ d.style.display=(!v||d.getAttribute("data-n").indexOf(v)>=0)?"":"none"; }); }
function lmToggle(on){ document.querySelectorAll(".lm-grid>details.lm-c").forEach(function(d){ d.open=on; }); }
function goBook(tab,sec){ if(typeof guardEditLeave==="function"&&!guardEditLeave()) return; state.view="book"; state.bookTab=tab||state.bookTab||"regeln"; state.bookSec=sec||null; render(); scrollToTop(); if(typeof persist==="function") persist(); }
function renderBook(){
  var tab=state.bookTab||"regeln", list=LM_NAV.secs[tab]||[], sid=state.bookSec, s=list.filter(function(x){return x.id===sid;})[0]||list[0];
  state.bookSec=s.id;
  var tabs=LM_NAV.tabs.map(function(t){ return '<button class="lm-tab'+(t.id===tab?' on':'')+'" onclick="goBook(\''+t.id+'\')">'+esc(t.t)+'</button>'; }).join("");
  var pills=list.map(function(x){ return '<button class="lm-pill'+(x.id===s.id?' on':'')+'" onclick="goBook(\''+tab+'\',\''+x.id+'\')">'+esc(x.t)+'</button>'; }).join("");
  var i=list.indexOf(s), prev=list[i-1], next=list[i+1];
  var nav='<div class="lm-pn">'+(prev?'<button onclick="goBook(\''+tab+'\',\''+prev.id+'\')"><small>Zurück</small>'+esc(prev.t)+'</button>':'<span></span>')+(next?'<button class="r" onclick="goBook(\''+tab+'\',\''+next.id+'\')"><small>Weiter</small>'+esc(next.t)+'</button>':'<span></span>')+'</div>';
  app.innerHTML=renderTopbar()+'<div class="lm-wrap"><div class="lm-crumb"><a onclick="goPrep()">Start</a> › '+esc(LM_NAV.tabs.filter(function(t){return t.id===tab;})[0].t)+'</div><nav class="lm-tabs">'+tabs+'</nav><nav class="lm-pills">'+pills+'</nav><div id="lmHost" class="lm-host"><p class="lm-load">Lade …</p></div>'+nav+'</div>';
  lmLoad(s.id,function(){
    var el=document.getElementById("lmHost"); if(!el||state.view!=="book"||state.bookSec!==s.id) return;
    var es=LM.data[s.id]||[];
    el.innerHTML='<section class="lm-sec"><div class="lm-sh"><h2>'+esc(s.t)+'</h2>'+lmPg(s.p,s.pe)+(es.length>9?'<input class="lm-fl" type="search" placeholder="Filter" aria-label="Filter" oninput="lmFilter(this.value)">':'')+(es.length>1?'<button class="lm-tog" onclick="lmToggle(!document.querySelector(\'.lm-grid>details.lm-c[open]\'))" title="Alle auf-/zuklappen" aria-label="Alle auf-/zuklappen">⇕</button>':'')+'</div>'+(es.length?'<div class="lm-grid">'+es.map(lmCard).join("")+'</div>':'<p class="lm-load">In Vorbereitung</p>')+'</section>';
    if(es.length===1) el.querySelector("details").open=true;
  });
}
