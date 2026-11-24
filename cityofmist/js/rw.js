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
    else if(b.kv){ var arch=b.kv.some(function(p){return rwArch(p[1]);}); h+='<dl class="kv'+(arch?' kvarch':'')+'">'+b.kv.map(function(p){return '<div class="kvi"><dt>'+md(p[0])+'</dt><dd>'+(rwArch(p[1])||md(p[1]))+'</dd></div>';}).join("")+'</dl>'; }
    else if(b.dlg){ h+='<div class="dlg">'+b.dlg.map(function(p){return '<p><b>'+md(p[0])+':</b> '+md(p[1])+'</p>';}).join("")+'</div>'; }
  }
  return h;
}
var RW_TBK={"Adaption":"adaption","Adaptation":"adaption","Bastion":"bastion","Erkenntnis":"erkenntnis","Manifestation":"manifestation","Mobilität":"mobilitaet","Relikt":"relikt","Subversion":"subversion","Besitztümer":"besitztuemer","Mission":"mission","Persönlichkeit":"persoenlichkeit","Prägende Erfahrung":"praegende","Routine":"routine","Schlüsselfigur":"schluessel","Training":"training"};
var RW_LOGOS={besitztuemer:1,mission:1,persoenlichkeit:1,praegende:1,routine:1,schluessel:1,training:1};
function rwArch(t){
  var parts=String(t).split(/\s*\+\s*/); if(parts.length<2) return "";
  var out=[]; for(var i=0;i<parts.length;i++){
    var m=/^\*\*([^*]+)\*\*\s*\(?([^)]*)\)?\s*$/.exec(parts[i].trim()); if(!m) return "";
    var k=RW_TBK[m[1].trim()]; if(!k) return "";
    out.push('<div class="arr '+(RW_LOGOS[k]?'lg':'my')+'"><img src="img/rw/tb_'+k+'.webp" alt=""><span><b>'+esc(m[1])+'</b><i>'+md(m[2])+'</i></span></div>');
  }
  return '<div class="arrows">'+out.join("")+'</div>';
}
function rwIsSide(b){ return b&&typeof b==="object"&&((b.box&&b.box.b&&b.box.b.length)||b.tbl||b.dlg); }
function rwCard(e,id,secId){
  if(/^Kurzreferenz: Regeln für Spieler/.test(e.name||"")) return spickCard(e,id);
  var tb=rwTb(secId,e), doc=rwDoc(secId,e), fp=rwFigParts(secId,e), figs="";
  var body=e.body||[], main=body.filter(function(b){return !rwIsSide(b);}), side=body.filter(rwIsSide).concat(e.aside||[]);
  var sideHtml=figs+rwBlocks(side)+(doc?'<img class="rwdoc" data-lb loading="lazy" alt="" src="'+doc+'">':'');
  var exRow=side.filter(function(b){return b.box&&/^Beispiel: /.test(b.box.t||"");}).length>=2&&!doc;
  var wideSide=!exRow&&sideHtml&&((!main.length&&side.length>=1)||(JSON.stringify(main).length<700&&side.length>=2));
  return '<article class="rwa'+(wideSide?' rwwide'+(side.length<2?' rwwide1':''):'')+'" id="'+id+'"><h3>'+esc(e.name)+pg(e.p,e.pe)+'</h3>'+(e.sub?'<p class="rwsub">'+esc(e.sub)+'</p>':'')+(tb?'<img class="rwbn" data-lb loading="lazy" alt="" src="'+tb+'">':'')+fp.ban+
    (sideHtml&&!exRow?'<aside class="rws">'+sideHtml+'</aside>':'')+'<div class="rwm">'+(e._strip||'')+fp.pt+rwBlocks(main)+'</div>'+(exRow?'<div class="bsrow">'+sideHtml+'</div>':'')+'</article>';
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
  var pills='<nav class="pills rwpills">'+(list.length>1?list.map(function(x){return '<button class="pill'+(x.id===s.id?' on':'')+'" onclick="gr(\''+tab+'/'+x.id+'\')">'+esc(x.t)+'</button>';}).join(""):"")+'</nav>';
  var host='<div id="rwhost"><div class="stub"><span>Lade …</span></div></div>';
  rwLoad(s.id,function(){
    var el=document.getElementById("rwhost"); if(!el||route().tab!==tab) return;
    var es=CM_RW[s.id]||[], many=es.length>1;
    var toc=es.map(function(c,i){return '<a onclick="rwJump(\'rw-'+s.id+'-'+i+'\')">'+esc(c.name)+'</a>';}).join("");
    var sel=many?'<select class="rwsel" onchange="if(this.value)rwJump(this.value)" aria-label="Springen"><option value="">Springen zu …</option>'+es.map(function(c,i){return '<option value="rw-'+s.id+'-'+i+'">'+esc(c.name)+'</option>';}).join("")+'</select>':'';
    el.innerHTML='<section class="blk flat"><div class="sh"><h2>'+esc(s.t)+'</h2>'+pg(s.p,s.pe)+sel+'</div>'+(s.id==="kurzreferenz"?(window.__spHero=rwHero(s.id),""):rwStrip(s.id,es))+
     (es.length?'<div class="rwbody solo"><div class="rwflow">'+es.map(function(e,i){return rwCard(e,"rw-"+s.id+"-"+i,s.id);}).join("")+'</div></div>':'<div class="stub"><span>Noch keine Inhalte</span></div>')+'</section>'+rwPrevNext(tab,s.id);
    var h3=el.querySelector('.rwa>h3'); if(h3&&h3.firstChild&&(h3.firstChild.textContent||"").trim().toLowerCase()===s.t.toLowerCase()) h3.classList.add('dup');
    var rail=document.getElementById("rwRail");
    if(rail){ if(many||list.length>1){
        var sub=es.map(function(c,i){return '<a onclick="rwJump(\'rw-'+s.id+'-'+i+'\')">'+esc(c.name.split(':')[0])+'</a>';}).join("");
        rail.innerHTML=list.length>1?'<div class="rwtree">'+list.map(function(x){return '<button class="rwcat'+(x.id===s.id?' on':'')+'" onclick="gr(\''+tab+'/'+x.id+'\')">'+esc(x.t)+'</button>'+(x.id===s.id&&many?'<div class="rwsub">'+sub+'</div>':'');}).join("")+'</div>':sub;
        if(many) tocSpy(rail,es.map(function(c,i){return "rw-"+s.id+"-"+i;}),110); }
      else rail.parentNode.classList.add("nontoc"); }
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

/* Kurzreferenz als Spickzettel (Entwurf C): Schritte, Ergebnisleiste, Kraft-Kacheln, Aktionskarten, Stufenleiste */
function spickCard(e,id){
  var bx={}, order=[]; (e.body||[]).forEach(function(b){ if(b&&b.box){ bx[b.box.t]=b.box; order.push(b.box); } });
  var done={}, h='';
  function head(x){ return '<div class="spt">'+md(x.t)+(x.p?'<span class="pg">S. '+x.p+'</span>':'')+'</div>'; }
  var a=bx["Aktionen"]; if(a){ done[a.t]=1; h+='<section class="spb">'+head(a)+'<ol class="spsteps">'+a.b.map(function(l){return '<li>'+md(String(l).replace(/^\d+\.\s*/,''))+'</li>';}).join("")+'</ol></section>'; }
  var r=bx["Ergebnisse der Aktionen"]; if(r){ done[r.t]=1; var seg=[], rest=[];
    r.b.forEach(function(l){ l=String(l); var t=l.replace(/^-+\s*/,'');
      if(/Misserfolg/.test(t)) seg.push(['b1','6−','Misserfolg',t.replace(/^\*\*Misserfolg:\*\*\s*/,'')]);
      else if(/^7-9/.test(t)) seg.push(['b2','7–9','Schwacher Erfolg',t.replace(/^7-9\s*/,'')]);
      else if(/^10\+/.test(t)) seg.push(['b3','10+','Guter Erfolg',t.replace(/^10\+\s*/,'')]);
      else if(/^\+12/.test(t)) seg.push(['b4','12+','Mega!',t.replace(/^\+12\s*/,'')]);
      else if(!/^\*\*Erfolg:\*\*/.test(t)) rest.push(l); });
    h+='<section class="spb">'+head(r)+'<div class="spbar">'+seg.map(function(x){return '<div class="'+x[0]+'"><b>'+x[1]+'</b><small>'+x[2]+'</small><span>'+md(x[3])+'</span></div>';}).join("")+'</div>'+(rest.length?'<div class="spnote">'+rwBlocks(rest)+'</div>':'')+'</section>'; }
  var k=bx["Kraft bestimmen"]; if(k){ done[k.t]=1; var bad={A:['+1','plus'],B:['−1','minus'],C:['+Stufe','plus'],D:['−Stufe','minus']};
    h+='<section class="spb">'+head(k)+'<div class="spkraft">'+k.b.map(function(l){ l=String(l); var m=/^\*\*([A-D])\.\s*/.exec(l), q=m?bad[m[1]]:null; return '<div>'+(q?'<i class="'+q[1]+'">'+q[0]+'</i>':'')+md(m?l.replace(/^\*\*[A-D]\.\s*/,'**'):l)+'</div>'; }).join("")+'</div></section>'; }
  var g=bx["Die grundlegenden Aktionen"]; if(g){ done[g.t]=1; var kv=(g.b.filter(function(x){return x&&x.kv;})[0]||{}).kv||[];
    h+='<section class="spb">'+head(g)+'<div class="spmoves">'+kv.map(function(p){ var m=/^(.*?)\s*\((S\.\s*\d+)\)$/.exec(p[0]), c=/\(([^()]*\*\*[^()]*)\)\.?\s*$/.exec(p[1]), txt=c?p[1].slice(0,c.index).trim():p[1], cls=c&&/Zustand/.test(c[1])?' z':c&&/Hinweis/.test(c[1])?' h':'';
      return '<div class="spmv"><b>'+esc(m?m[1]:p[0])+(m?'<span class="pg">'+m[2]+'</span>':'')+'</b><p>'+md(txt)+'</p>'+(c?'<span class="spchip'+cls+'">'+md(c[1]).replace(/<\/?strong>|<\/?b>/g,'')+'</span>':'')+'</div>'; }).join("")+'</div></section>'; }
  var z=bx["Zustände"]; if(z){ done[z.t]=1; h+='<section class="spb">'+head(z)+'<div class="sptiers"><div>1</div><div>2</div><div>3</div><div>4</div><div>5<small>RAUS</small></div><div>6<small>SL</small></div></div>'+rwBlocks(z.b)+'</section>'; }
  var others=order.filter(function(x){return !done[x.t];}).map(function(x){ return '<section class="spb">'+head(x)+rwBlocks(x.b)+'</section>'; }).join("");
  var loose=(e.body||[]).filter(function(b){return !(b&&b.box);});
  return '<article class="rwa spick" id="'+id+'"><h3>'+esc(e.name)+pg(e.p,e.pe)+'</h3>'+(loose.length?rwBlocks(loose):'')+'<div class="spgrid">'+(window.__spHero?'<div class="sphero">'+window.__spHero+'</div>':'')+h+'</div><div class="spgrid sprest">'+others+'</div></article>';
}

/* Bildleiste oben: Kapitelbild + Bilder der ersten Karte nebeneinander, gleiche Höhe, ungeschnitten */
function rwStrip(secId,es){
  var h=RWI.hero[secId]; if(!h) return "";
  var f=es[0]?rwFigs(secId,es[0]):[]; if(es[0]) es[0]._skipFig=true;
  var imgs=["rw/"+h].concat(f.map(function(pg){return "rw/fig_"+pg;}));
  var h2='<div class="rwstrip">'+imgs.map(function(n){return '<img data-lb alt="" src="img/'+n+'.webp" onload="rwStripFit(this)">';}).join("")+'</div>';
  if(es[0]){ es[0]._strip=h2; return ""; } return h2;
}
function rwStripFit(i){ var st=i.parentNode; i.style.flex=(i.naturalWidth/i.naturalHeight)+" 1 0"; var sum=0; [].forEach.call(st.children,function(x){ if(x.naturalWidth) sum+=x.naturalWidth/x.naturalHeight; }); st.style.width="min(58%,"+Math.round(sum*340+(st.children.length-1)*12)+"px)"; }
