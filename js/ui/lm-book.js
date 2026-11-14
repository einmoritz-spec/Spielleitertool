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
var lmKey="core";
function lmPg(p,pe){ return p ? '<a class="lm-pg" onclick="BV.open(\''+lmKey+'\','+p+')">S. '+p+(pe&&pe!==p?'–'+pe:'')+'</a>' : ''; }
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
    if(b.box){ var x=b.box; h+='<section class="lm-bx lm-bx-'+(x.k||"hinweis")+'">'+(x.t||x.p?'<header><b>'+lmMd(x.t||"")+'</b>'+(x.p?lmPg(x.p):'')+'</header>':'')+'<div class="lm-bxb">'+lmBlocks(x.b)+'</div></section>'; }
    else if(b.tbl){ var t=b.tbl; h+='<div class="lm-tblw"><table class="lm-t">'+(t.t?'<caption>'+lmMd(t.t)+'</caption>':'')+(t.h&&t.h.length?'<thead><tr>'+t.h.map(function(c){return '<th>'+lmMd(c)+'</th>';}).join("")+'</tr></thead>':'')+'<tbody>'+t.r.map(function(r){return '<tr>'+r.map(function(c){return '<td>'+lmMd(String(c))+'</td>';}).join("")+'</tr>';}).join("")+'</tbody></table></div>'; }
    else if(b.fq){ var q=b.fq; h+='<div class="lm-fq"><span class="lm-fql">'+esc(q.l||"")+'</span><div><b>'+lmMd(q.q)+'</b>'+((q.tags&&q.tags.length)?'<p class="lm-tags">'+q.tags.map(function(g){return '<span>'+esc(g)+'</span>';}).join("")+'</p>':'')+'</div></div>'; }
    else if(b.tg){ var g=b.tg; h+='<div class="lm-tgrow">'+(g.t?'<u>'+lmMd(g.t)+'</u>':'')+g.i.map(function(s){return '<span class="lm-tg lm-tg-'+(g.k||"n")+'">'+esc(s)+'</span>';}).join("")+'</div>'; }
    else if(b.kv){ h+='<dl class="lm-kv">'+b.kv.map(function(p){return '<div><dt>'+lmMd(p[0])+'</dt><dd>'+lmMd(p[1])+'</dd></div>';}).join("")+'</dl>'; }
    else if(b.img){ var m=b.img; h+='<figure class="lm-img"><img loading="lazy" decoding="async" alt="" src="assets/galerie/'+(m.d==='hr'?'hearts-of-ravensdale':'litm-core')+'/full/'+m.f+'.webp" width="'+m.w+'" height="'+m.h+'"></figure>'; }
    else if(b.dlg){ h+='<div class="lm-dlg">'+b.dlg.map(function(p){return '<p><b>'+lmMd(p[0])+':</b> '+lmMd(p[1])+'</p>';}).join("")+'</div>'; }
  }
  return h;
}
/* Zeitungs-Layout: Inhalt in Abschnitte teilen; Fließtext je Abschnitt auf 2 gleich lange Spalten, Tabellen/Profile/große Kästen in voller Breite */
function lmLen(b){ return typeof b==="string"?b.length:JSON.stringify(b).length; }
function lmUnits(bs){
  var u=[],i=0; bs=bs||[];
  while(i<bs.length){
    var b=bs[i];
    if(typeof b==="string"){
      var it=[];
      if(/^-{1,2} /.test(b)){ while(i<bs.length&&typeof bs[i]==="string"&&/^-{1,2} /.test(bs[i])) it.push(bs[i++]); u.push({h:lmList(it,false),n:it.join("").length}); continue; }
      if(/^\d+\. /.test(b)){ while(i<bs.length&&typeof bs[i]==="string"&&/^\d+\. /.test(bs[i])) it.push(bs[i++]); u.push({h:lmList(it,true),n:it.join("").length}); continue; }
      i++; u.push({h:lmBlocks([b]),n:b.length,hd:b.indexOf("## ")===0||b.indexOf("### ")===0}); continue;
    }
    i++;
    var n=lmLen(b), big=!!(b.box&&n>1100), wide=!!b.tbl||!!b.img||!!(b.kv&&(b.kv.length>=3||n>700))||big, h=lmBlocks([b]);
    if(big) h=h.replace('<section class="lm-bx ','<section class="lm-bx lm-bxw ');
    u.push({h:h,n:n,w:wide});
  }
  return u;
}
function lmSegs(bs){
  var segs=[],cur=null;
  function close(){ if(cur&&cur.u.length) segs.push(cur); cur=null; }
  lmUnits(bs).forEach(function(x){
    if(x.w){
      var pre=[]; while(cur&&cur.u.length&&cur.u[cur.u.length-1].hd){ var y=cur.u.pop(); cur.n-=y.n; pre.unshift(y); }
      close();
      var last=segs[segs.length-1];
      if(last&&last.w&&!pre.length) last.u.push(x); else segs.push({w:true,u:pre.concat([x]),n:x.n});
      return;
    }
    if(cur&&((x.hd&&cur.n>=1600)||(!x.hd&&cur.n>=3000))) close();
    if(!cur) cur={u:[],n:0};
    cur.u.push(x); cur.n+=x.n;
  });
  close();
  return segs.map(function(g){ var h=g.u.map(function(x){return x.h;}).join(""); return g.w?'<div class="lm-wide">'+h+'</div>':'<div class="lm-cols'+(g.n<320?' lm-one':'')+'">'+h+'</div>'; }).join("");
}
function lmWithImgs(sid,es){
  var m=(window.LM_IMGS||{})[sid]; if(!m||!es||!es.length) return es;
  var out=es.slice();
  m.forEach(function(x){
    var k=-1,bp=-1,mp=1e9,mk=0; for(var j=0;j<out.length;j++){ var q=out[j].p; if(!q) continue; if(q<=x[3]&&q>bp){ bp=q; k=j; } if(q<mp){ mp=q; mk=j; } } if(k<0) k=mk;
    var e=Object.assign({},out[k]); e.body=[{img:{f:x[0],w:x[1],h:x[2],d:x[4]}}].concat(e.body||[]); out[k]=e;
  });
  return out;
}
function lmCard(e,i){
  var body=(e.body||[]).concat(e.aside||[]);
  return '<article class="lm-a" id="lm-'+i+'"><h3>'+esc(e.name)+' '+lmPg(e.p,e.pe)+'</h3>'+(e.sub?'<p class="lm-sub">'+esc(e.sub)+'</p>':'')+lmSegs(body)+'</article>';
}

/* ===== Kästen wie im Buch: Challenge-Karten, Theme Kits, Rezepte ===== */
function lmIsTg(b,t){ return b&&b.tg&&(t?b.tg.t===t:true); }
function lmKind(e){
  var bs=(e.body||[]).concat(e.aside||[]), lim=0, pw=0, th=0, zut=0;
  bs.forEach(function(b){
    if(typeof b==="string"){ if(/^## Threats/.test(b)) th=1; return; }
    if(b.tg){ if(b.tg.t==="Limits") lim=1; if(b.tg.k==="pw") pw++; if(/^Zutaten/.test(b.tg.t||"")) zut=1; }
    else if(b.kv&&b.kv.length&&b.kv.every(function(p){return /\s\d+$/.test(p[0]);})) lim=1;
  });
  if(lim&&(th||bs.some(function(b){return typeof b==="string"&&/^### /.test(b);}))||(lim&&e.sub)) return "ch";
  if(zut) return "rc";
  if(pw>=2) return "kit";
  return "";
}
function lmPips(t){ var m=/^(.*?)\s*(\d+)$/.exec(t); if(!m) return '<div class="lmc-lim"><b>'+lmMd(t)+'</b></div>'; var n=+m[2], s=""; for(var k=0;k<n&&k<9;k++) s+='<i></i>'; return '<div class="lmc-lim"><b>'+lmMd(m[1])+'</b><span class="lmc-pips">'+s+'</span></div>'; }
function lmChallenge(e,i){
  var bs=(e.body||[]).concat(e.aside||[]), desc="", lim="", tags="", spec="", thr="", mode="", cur=null, secs=[];
  function endSec(){ if(cur){ secs.push(cur); cur=null; } }
  bs.forEach(function(b){
    if(typeof b==="string"){
      if(/^## /.test(b)){ endSec(); mode=/Threat/i.test(b)?"thr":"sec"; if(mode==="sec") cur={t:b.slice(3),h:[]}; return; }
      if(/^### /.test(b)){ if(mode==="thr"||!mode||mode==="") { mode="thr"; } if(mode==="thr"){ endSec(); cur={thr:1,t:b.slice(4),h:[]}; return; } }
      if(/^\*\*Tags/.test(b)){ var m=b.replace(/^\*\*Tags[^*]*\*\*\s*/,"").split(/\s*,\s*/); tags+=m.map(function(x){return '<span class="lmc-tag">'+lmMd(x.replace(/^\*|\*$/g,""))+'</span>';}).join(""); return; }
      if(cur){ cur.h.push(b); return; }
      if(!mode&&!lim&&!tags) desc+='<p>'+lmMd(b)+'</p>'; else if(!mode) desc+='<p>'+lmMd(b)+'</p>'; return;
    }
    if(b.tg){ if(b.tg.t==="Limits"){ lim+=b.tg.i.map(lmPips).join(""); return; } if(/^Tags/.test(b.tg.t||"")){ tags+=b.tg.i.map(function(x){return '<span class="lmc-tag">'+esc(x)+'</span>';}).join(""); return; } }
    if(b.kv&&!cur&&!mode&&b.kv.every(function(p){return /\s\d+$/.test(p[0]);})){ lim+=b.kv.map(function(p){return lmPips(p[0]);}).join(""); return; }
    if(cur) cur.h.push(b); else desc+=lmBlocks([b]);
  });
  endSec();
  secs.forEach(function(x){
    var inner=lmBlocks(x.h);
    if(x.thr){ var fl=""; thr+='<div class="lmc-thr"><h5>'+lmMd(x.t)+'</h5>'+inner+'</div>'; }
    else spec+='<div class="lmc-sp"><h5>'+lmMd(x.t)+'</h5>'+inner+'</div>';
  });
  var left='<div class="lmc-l">'+(lim?'<div class="lmc-lab">Limits</div>'+lim:'')+(tags?'<div class="lmc-lab">Tags &amp; Statuses</div><div class="lmc-tags">'+tags+'</div>':'')+spec+'</div>';
  var right='<div class="lmc-r">'+(desc?'<div class="lmc-desc">'+desc+'</div>':'')+(thr?'<div class="lmc-lab">Threats &amp; Consequences</div>'+thr:'')+'</div>';
  return '<article class="lmc lmc-ch" id="lm-'+i+'"><header>'+(e.sub?'<small>'+esc(e.sub)+'</small>':'')+'<h3>'+esc(e.name)+' '+lmPg(e.p,e.pe)+'</h3></header><div class="lmc-cols">'+left+right+'</div></article>';
}
function lmGroups(e,i,kind){
  var bs=(e.body||[]).concat(e.aside||[]), h="", cur=null, open=false, intro=[];
  var hasH2=bs.some(function(b){return typeof b==="string"&&/^## /.test(b);}), hasH3=bs.some(function(b){return typeof b==="string"&&/^### /.test(b);});
  var lv=(kind==="rc"&&hasH3)?"### ":(hasH2?"## ":"### ");
  function card(){ if(!cur) return; if(!open){ h+='<div class="lmc-grid">'; open=true; } h+='<section class="lmc lmc-'+kind+'"><header><h4>'+lmMd(cur.t)+'</h4></header><div class="lmc-b">'+lmBlocks(cur.b)+'</div></section>'; cur=null; }
  function closeGrid(){ card(); if(open){ h+='</div>'; open=false; } }
  var n=0;
  bs.forEach(function(b){
    if(typeof b==="string"&&b.indexOf(lv)===0){ card(); cur={t:b.slice(lv.length),b:[]}; n++; return; }
    if(typeof b==="string"&&lv==="### "&&b.indexOf("## ")===0){ closeGrid(); h+='<h4 class="lm-h4">'+lmMd(b.slice(3))+'</h4>'; return; }
    if(cur) cur.b.push(b); else if(open||h) h+=lmBlocks([b]); else intro.push(b);
  });
  closeGrid();
  if(n<2) return null;
  return '<article class="lm-a" id="lm-'+i+'"><h3>'+esc(e.name)+' '+lmPg(e.p,e.pe)+'</h3>'+(e.sub?'<p class="lm-sub">'+esc(e.sub)+'</p>':'')+lmBlocks(intro)+h+'</article>';
}
function lmCards(es){
  var out="", run=[];
  function flush(){ if(run.length){ out+='<div class="lmc-grid lmc-chgrid">'+run.join("")+'</div>'; run=[]; } }
  es.forEach(function(e,i){
    var k=lmKind(e);
    if(k==="ch"){ run.push(lmChallenge(e,i)); return; }
    flush();
    var g=(k==="kit"||k==="rc")?lmGroups(e,i,k):null;
    out+=g||lmCard(e,i);
  });
  flush(); return out;
}
var __tocSpy;
function tocSpy(toc, ids, offset){ var __sel=".lm-sub a";
  if(__tocSpy) window.removeEventListener("scroll",__tocSpy);
  __tocSpy=null; if(!toc||!ids.length) return;
  var links=[].slice.call(toc.querySelectorAll(__sel)), tick=false, cur=-1;
  __tocSpy=function(){ if(tick) return; tick=true; requestAnimationFrame(function(){ tick=false;
    var idx=0; for(var i=0;i<ids.length;i++){ var el=document.getElementById(ids[i]); if(!el) continue; if(el.getBoundingClientRect().top<=offset) idx=i; else break; }
    if(idx===cur) return; cur=idx; links.forEach(function(a,i){ a.classList.toggle("on",i===idx); });
    var a=links[idx]; if(a&&toc.scrollHeight>toc.clientHeight) toc.scrollTop=a.offsetTop-toc.clientHeight/2;
  }); };
  window.addEventListener("scroll",__tocSpy,{passive:true}); __tocSpy();
}
function lmJump(i){ var el=document.getElementById("lm-"+i); if(el) el.scrollIntoView({behavior:"smooth",block:"start"}); }
function goBook(tab,sec){ if(sec==="themenbuecher"&&typeof goThemen==="function") return goThemen(); if(typeof guardEditLeave==="function"&&!guardEditLeave()) return; if(tab==="welt"){ tab=sec||"dales"; } else if(tab&&tab!=="regeln"&&tab!=="narrator"&&!sec) sec=tab; if(tab&&tab!=="regeln"&&LM_NAV.secs.welt.some(function(x){return x.id===tab;})&&!sec) sec=tab; if(tab==="orte"&&sec!=="orte"&&!sec) sec="orte"; if(tab!=="orte") state.ortPlace=null; state.view="book"; state.bookTab=tab||state.bookTab||"regeln"; state.bookSec=sec||null; render(); scrollToTop(); if(typeof persist==="function") persist(); }
function renderBook(){
  if(state.bookTab==="jenseits-b"||state.bookSec==="jenseits-b"){ state.bookTab="orte"; state.bookSec="orte"; if(typeof goThemen==="function") return goThemen("heroes-uncanny"); }
  var tab=state.bookTab||"regeln"; if(tab==="welt") tab=state.bookSec||"dales"; var list=LM_NAV.secs[tab]||LM_NAV.secs.welt.filter(function(x){return x.id===tab;}), sid=state.bookSec, s=list.filter(function(x){return x.id===sid;})[0]||list[0];
  state.bookSec=s.id; state.bookTab=tab; lmKey=(tab==='regeln'||tab==='narrator'||tab==='skunk')?'core':'wake';
  var tabs=LM_NAV.tabs.map(function(t){ return '<button class="lm-tab'+(t.id===tab?' on':'')+'" onclick="goBook(\''+t.id+'\')">'+esc(t.t)+'</button>'; }).join("");
  var pills=list.map(function(x){ return '<button class="lm-pill'+(x.id===s.id?' on':'')+'" onclick="goBook(\''+tab+'\',\''+x.id+'\')">'+esc(x.t)+'</button>'; }).join("");
  var i=list.indexOf(s), prev=list[i-1], next=list[i+1];
  var nav='<div class="lm-pn">'+(prev?'<button onclick="goBook(\''+tab+'\',\''+prev.id+'\')"><small>Zurück</small>'+esc(prev.t)+'</button>':'<span></span>')+(next?'<button class="r" onclick="goBook(\''+tab+'\',\''+next.id+'\')"><small>Weiter</small>'+esc(next.t)+'</button>':'<span></span>')+'</div>';
  app.innerHTML=renderTopbar()+'<div class="lm-wrap"><div class="lm-shell"><nav class="lm-toc" id="lmToc"></nav><div class="lm-main"><nav class="lm-tabs">'+tabs+'</nav><div id="lmHost" class="lm-host"><p class="lm-load">Lade …</p></div>'+nav+'</div></div></div>';
  lmLoadMany(lmDeps(s.id),function(){
    var el=document.getElementById("lmHost"); if(!el||state.view!=="book"||state.bookSec!==s.id) return;
    var es=lmWithImgs(s.id,lmCompose(s.id));
    if(s.id==="orte"){ el.innerHTML=ortHtml(); var r0=document.getElementById("lmToc"); if(r0) r0.innerHTML='<div class="lm-tree"></div>'; var sh0=document.querySelector(".lm-shell"); if(sh0){ sh0.classList.add("nontoc"); sh0.style.setProperty("grid-template-columns","minmax(0,1fr)","important"); } document.querySelectorAll(".pn-btn").forEach(function(b){ b.style.display="none"; }); return; }
    var sh=function(t){return String(t).split(":")[0];};
    var hc={}; es.forEach(function(c){ var h=sh(c.name); hc[h]=(hc[h]||0)+1; }); var sh2=function(t){ var h=sh(t); return hc[h]>1&&String(t).indexOf(":")>0?String(t).split(":").slice(1).join(":").trim():h; }; var subs=es.length>1?es.map(function(c,i){ return '<a onclick="lmJump('+i+')">'+esc(sh2(c.name))+'</a>'; }).join(""):"";
    var toc=list.map(function(x){ var on=x.id===s.id; return '<button class="lm-cat'+(on?' on':'')+'" onclick="goBook(\''+tab+'\',\''+x.id+'\')">'+esc(sh(x.t))+'</button>'+(on&&subs?'<div class="lm-sub">'+subs+'</div>':''); }).join("");
    var flat='<div class="lm-orow">'+list.map(function(x){ return '<button class="lm-cat'+(x.id===s.id?' on':'')+'" onclick="goBook(\''+tab+'\',\''+x.id+'\')">'+esc(sh(x.t))+'</button>'; }).join("")+'</div>'+(subs?'<div class="lm-orow lm-osr lm-sub">'+subs+'</div>':'');
    el.innerHTML='<section class="lm-sec"><div class="lm-sh"><h2>'+esc(s.t)+'</h2>'+lmPg(s.p,s.pe)+'<select class="lm-sel" onchange="lmJump(this.value)" aria-label="Springen"><option value="">Springen zu …</option>'+es.map(function(c,i){return '<option value="'+i+'">'+esc(c.name)+'</option>';}).join("")+'</select></div>'+(es.length?'<div class="lm-body"><div class="lm-flow">'+lmCards(es)+'</div></div>':'<p class="lm-load">In Vorbereitung</p>')+'</section>';
    var rail=document.getElementById("lmToc");
    if(rail){ rail.innerHTML='<div class="lm-tree">'+toc+'</div><div class="lm-flatnav">'+flat+'</div>'; if(es.length>1) tocSpy(rail.querySelector(".lm-tree"),es.map(function(c,i){return "lm-"+i;}),110); }
  });
}
