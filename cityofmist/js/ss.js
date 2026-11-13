/* City of Mist – Shadows & Showdowns (Hash: #ss | #ss/spieler[/<abschnitt>] | #ss/sl/<orte|avatare|gatekeeper>[/<kategorie>]). Gemeinsame Helfer (esc, md, pg, route, go) in core.js */
function dangerCard(d,fold){
  var head='<div class="dh"><b>'+esc(d.name)+'</b> '+pips(d.rating)+(fold&&d.limits?'<span class="dlim">'+esc(d.limits)+'</span>':'')+'</div>';
  return (fold?'<details class="dg fold"><summary>'+head+'</summary>':'<div class="dg">'+head)+(d.text?d.text.map(function(t){return '<p class="dtx">'+md(t)+'</p>';}).join(""):'')+(d.limits?'<div class="lim">'+esc(d.limits)+'</div>':'')+
   (d.moves||[]).map(function(m){return '<p><b>'+esc(m[0])+':</b> '+md(m[1])+'</p>';}).join("")+
   (d.gm&&d.gm.length?'<div class="gmh">Spielleitung</div><ul>'+d.gm.map(function(g){return '<li>'+md(g)+'</li>';}).join("")+'</ul>':'')+(fold?'</details>':'</div>');
}
function tagsHtml(a,c){ return a.map(function(t){return '<span class="tg '+c+'">'+esc(t)+'</span>';}).join(""); }
function themeCard(t){ return '<details class="thm"><summary class="th"><b>'+esc(t.name)+'</b><i>'+esc(t.typ)+'</i></summary><p class="idn">'+esc(t.identity)+'</p><p><u>Power Tags</u> '+tagsHtml(t.power,"pw")+'</p><p><u>Weakness Tags</u> '+tagsHtml(t.weak,"wk")+'</p><p class="imp">'+md(t.imp)+'</p></details>'; }
function relicCards(o){
  var secs=[],cur=null,pre=[];
  o.text.forEach(function(t){ if(t.indexOf('## ')===0){ cur={t:t.slice(3),b:[]}; secs.push(cur); } else if(cur) cur.b.push(t); else pre.push(t); });
  var th=o.themen||[]; if(secs.length<2||!th.length) return null;
  var map={}; secs.forEach(function(x){ map[x.t.toLowerCase().replace(/\s+/g,' ').trim()]=x; });
  var hit=0; th.forEach(function(t){ if(map[t.name.toLowerCase().replace(/\s+/g,' ').trim()]) hit++; });
  if(hit<th.length) return null;
  var used={};
  var fg=(o.fig||[]).map(function(f){return imf(f[0]);}).join("")+(o.bild?imf(o.bild):""),first=true;
  var cards=secs.map(function(x){
    var key=x.t.toLowerCase().replace(/\s+/g,' ').trim(), t=null; th.forEach(function(q){ if(q.name.toLowerCase().replace(/\s+/g,' ').trim()===key) t=q; });
    var sub=(x.b[0]&&/^\*[^*]+\*$/.test(x.b[0]))?x.b.shift():"";
    return '<section class="rcard"><header><h4>'+esc(x.t)+'</h4>'+(sub?'<i>'+md(sub)+'</i>':'')+'</header><div class="rtx">'+(first?(first=false,fg):'')+x.b.map(function(b){return '<p>'+md(b)+'</p>';}).join("")+'</div>'+(t?'<div class="rth">'+themeCard(t).replace('<details class="thm">','<details class="thm" open>')+'</div>':'')+'</section>';
  }).join("");
  return (pre.length?'<div class="otxt">'+pre.map(function(b){return '<p>'+md(b)+'</p>';}).join("")+'</div>':'')+'<div class="rgrid">'+cards+'</div>'+(o.extra||[]).map(function(t){return '<p class="ex">'+md(t)+'</p>';}).join("");
}
function tbHero(o){ return '<div class="tbhero tb-'+(o.tb==='Logos'?'logos':'myth')+'"><img src="img/'+o.hero+'.webp" alt="" data-lb loading="lazy"><div class="tbh-t"><small>'+o.tb+'-Themenbuch</small><b>'+esc(o.name)+'</b>'+pg(o.p)+'</div></div>'; }
function ortCard(o){
  var rc=relicCards(o);
  if(rc){ var dg=o.dangers.map(function(d){return dangerCard(d,true);}).join(""); return '<details class="ort" id="o-'+o.id+'"><summary><h3>'+esc(o.name)+'</h3>'+pg(o.p)+'<span class="tz">'+esc(o.teaser)+'</span></summary><div class="ob">'+(o.mythos?'<div class="myth">'+esc(o.mythos)+'</div>':'')+rc+(o.dangers.length?'<aside class="dgrid">'+dg+'</aside>':'')+'</div></details>'; }
  var tl=o.text.join('').length+(o.extra||[]).join('').length+((o.listen||[]).length>2?0:(o.listen||[]).reduce(function(n,l){return n+l.items.join('').length;},0));
  var side=o.dangers.length===1&&tl>900;
  var figs=(o.fig||[]).map(function(f){return imf(f[0]);}).join("")+(o.bild?imf(o.bild):"");
  var short=!!figs&&tl<450&&o.dangers.length>0&&!side;
  var them=(o.themen||[]).map(themeCard).join("");
  var useCol=side||(them&&tl>600);
  var text=(short?'':figs)+o.text.map(function(t){return t.indexOf('## ')===0?'<h4 class="lh">'+esc(t.slice(3))+'</h4>':'<p>'+md(t)+'</p>';}).join("")+(o.extra||[]).map(function(t){return '<p class="ex">'+md(t)+'</p>';}).join("")+(function(){var ls=o.listen||[],h=ls.map(function(l){return '<div class="lbox"><h4 class="lh">'+esc(l.t)+'</h4>'+(l.pre?'<p>'+md(l.pre)+'</p>':'')+'<ul class="ll">'+l.items.map(function(i){return '<li>'+md(i)+'</li>';}).join("")+'</ul></div>';}).join("");return ls.length>2?'<div class="lgrid">'+h+'</div>':h;})();
  var dang=o.dangers.map(function(d){return dangerCard(d,!side);}).join("");
  return '<details class="ort'+(o.dangers.length&&tl<200&&!side?' short':'')+'" id="o-'+o.id+'"><summary><h3>'+esc(o.name)+'</h3>'+pg(o.p)+'<span class="tz">'+esc(o.teaser)+'</span></summary><div class="ob">'+
   (o.hero?tbHero(o):'')+(o.mythos?'<div class="myth">'+esc(o.mythos)+'</div>':'')+
   '<div class="ocols'+(useCol?'':' solo')+'">'+(useCol?'<aside class="oside">'+them+(side?dang:'')+'</aside>':'')+'<div class="otxt">'+text+(useCol?'':them)+'</div></div>'+
   (o.dangers.length&&!side?'<aside class="dgrid'+(short?' withimg':'')+'">'+(short?figs:'')+dang+'</aside>':'')+'</div></details>';
}
function stub(name,p){ return '<div class="stub"><span>'+esc(name)+'</span>'+pg(p)+'<em>nur Original</em></div>'; }
function itemsList(items){ return '<div class="stubs">'+items.map(function(i){return stub(i[0],i[1]);}).join("")+'</div>'; }
function pills(base,list,curId){ return '<nav class="pills">'+list.map(function(x){return '<button class="pill'+(x.id===curId?' on':'')+'" onclick="gs(\''+base+'/'+x.id+'\')">'+esc(x.t)+'</button>';}).join("")+'</nav>'; }
function sectionHead(s){ return '<div class="sh"><h2>'+esc(s.t)+'</h2><span class="en">'+esc(s.en||"")+'</span>'+pg(s.p)+'</div>'; }
function hero(n){ return '<img class="hero" src="img/h_'+n+'.webp" alt="">'; }
function orteRail(es,names){
  var cards=es.map(function(e){ return names[e[0]]?ortCard(names[e[0]]).replace('<details class="ort','<details open class="ort'):stub(e[0],e[1]); }).join("");
  var nav=es.map(function(e){ var o=names[e[0]]; return o?'<a href="#o-'+o.id+'" onclick="document.getElementById(\'o-'+o.id+'\').scrollIntoView({behavior:\'smooth\'});return false">'+esc(e[0].split(':')[0])+'</a>':'<span class="nolink">'+esc(e[0].split(':')[0])+'</span>'; }).join("");
  return '<div class="orail"><nav class="onav">'+nav+'</nav><div class="orte">'+cards+'</div></div>';
}
function treeNav(cats,curId,base,es,names,counts){
  var subs=es.map(function(e){ var o=names[e[0]]; return o?'<a href="#o-'+o.id+'" onclick="document.getElementById(\'o-'+o.id+'\').scrollIntoView({behavior:\'smooth\'});return false">'+esc(e[0].split(':')[0])+'</a>':'<span class="nolink">'+esc(e[0].split(':')[0])+'</span>'; }).join("");
  var btn=function(c){ var n=counts?counts(c):0; return '<button class="ocat'+(c.id===curId?' on':'')+'" onclick="gs(\''+base+'/'+c.id+'\')">'+esc(c.t)+(n?'<i>'+n+'</i>':'')+'</button>'; };
  var tree=cats.map(function(c){ return btn(c)+(c.id===curId?'<div class="osub">'+subs+'</div>':''); }).join("");
  var flat='<div class="orow">'+cats.map(btn).join("")+'</div><div class="orow osr">'+subs+'</div>';
  return '<nav class="onav"><div class="otree">'+tree+'</div><div class="oflat">'+flat+'</div></nav>';
}
function pageSpieler(r){
  var list=CM_NAV.spieler, s=list.filter(function(x){return x.id===r.sub;})[0]||list[0];
  var have=CM_ORTE["sp_"+s.id]||[], names={}; have.forEach(function(o){names[o.name]=o;});
  var es=(window.CM_SP_E&&CM_SP_E[s.id])||s.items;
  var body=have.length?'<div class="orail">'+treeNav(list,s.id,'spieler',es,names)+'<div class="omain"><section class="blk flat">'+sectionHead(s)+'<div class="orte">'+es.map(function(e){ return names[e[0]]?ortCard(names[e[0]]).replace('<details class="ort','<details open class="ort'):stub(e[0],e[1]); }).join("")+'</div></section></div></div>':"";
  if(!have.length) return pills("spieler",list,s.id)+'<section class="blk">'+sectionHead(s)+itemsList(s.items)+'</section>';
  return have.length?body:pills("spieler",list,s.id)+'<section class="blk">'+sectionHead(s)+itemsList(s.items)+'</section>';
}
function orgHtml(id){
  var o=CM_ORG[id]; if(!o) return "";
  return '<div class="ice-wrap org"><img src="img/'+o.img+'.webp" alt="'+esc(o.alt)+'">'+o.hot.map(function(h){return '<button class="ice-hot" style="left:'+h[0]+'%;top:'+h[1]+'%;width:'+h[2]+'%;height:'+h[3]+'%" aria-label="Zum Eintrag springen" onclick="orgGo(\''+h[4]+'\',\''+(h[5]||"")+'\')"></button>';}).join("")+'</div>';
}
function orgGo(id,kw){
  var d=document.getElementById("o-"+id); if(!d) return;
  d.open=true; var el=d;
  if(kw){ var c=d.querySelectorAll(".ob p, .ob li, .ob h4, details.dg > summary"); for(var i=0;i<c.length;i++){ if(c[i].textContent.indexOf(kw)>=0){ el=c[i]; var dg=el.closest("details.dg"); if(dg) dg.open=true; break; } } }
  el.scrollIntoView({block:"start"}); window.scrollBy(0,-70);
  el.classList.add("orgflash"); setTimeout(function(){el.classList.remove("orgflash");},1800);
}
function pageSL(r){
  var list=CM_NAV.sl, s=list.filter(function(x){return x.id===r.sub;})[0]||list[0];
  var h=pills("sl",list,s.id);
  var cats = s.id==="orte"?CM_ORTE_CATS : s.id==="avatare"?CM_AV_CATS : s.id==="gatekeeper"?CM_GK_CATS : null;
  if(!cats) return h+'<section class="blk">'+sectionHead(s)+itemsList(s.items)+'</section>';
  var cat=cats.filter(function(c){return c.id===r.cat;})[0]||cats[0];
  var have=CM_ORTE[cat.id]||[], names={}; have.forEach(function(o){names[o.name]=o;});
  var cards=cat.e.map(function(e){ return names[e[0]]?ortCard(names[e[0]]).replace('<details class="ort','<details open class="ort'):stub(e[0],e[1]); }).join("");
  var nav=treeNav(cats,cat.id,'sl/'+s.id,cat.e,names,function(c){return (CM_ORTE[c.id]||[]).length;});
  return h+'<div class="orail">'+nav+'<div class="omain">'+orgHtml(cat.id)+'<section class="blk flat">'+sectionHead(cat)+(cat.sub?'<p class="catsub">'+esc(cat.sub)+'</p>':'')+'<div class="orte">'+cards+'</div></section></div></div>';
}
