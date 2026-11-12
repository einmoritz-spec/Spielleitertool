/* City of Mist – Shadows & Showdowns (Hash: #ss | #ss/spieler[/<abschnitt>] | #ss/sl/<orte|avatare|gatekeeper>[/<kategorie>]). Gemeinsame Helfer (esc, md, pg, route, go) in core.js */
function dangerCard(d,fold){
  var head='<div class="dh"><b>'+esc(d.name)+'</b> '+pips(d.rating)+(fold&&d.limits?'<span class="dlim">'+esc(d.limits)+'</span>':'')+'</div>';
  return (fold?'<details class="dg fold"><summary>'+head+'</summary>':'<div class="dg">'+head)+(d.text?d.text.map(function(t){return '<p class="dtx">'+md(t)+'</p>';}).join(""):'')+(d.limits?'<div class="lim">'+esc(d.limits)+'</div>':'')+
   (d.moves||[]).map(function(m){return '<p><b>'+esc(m[0])+':</b> '+md(m[1])+'</p>';}).join("")+
   (d.gm&&d.gm.length?'<div class="gmh">Spielleitung</div><ul>'+d.gm.map(function(g){return '<li>'+md(g)+'</li>';}).join("")+'</ul>':'')+(fold?'</details>':'</div>');
}
function tagsHtml(a,c){ return a.map(function(t){return '<span class="tg '+c+'">'+esc(t)+'</span>';}).join(""); }
function themeCard(t){ return '<details class="thm"><summary class="th"><b>'+esc(t.name)+'</b><i>'+esc(t.typ)+'</i></summary><p class="idn">'+esc(t.identity)+'</p><p><u>Power Tags</u> '+tagsHtml(t.power,"pw")+'</p><p><u>Weakness Tags</u> '+tagsHtml(t.weak,"wk")+'</p><p class="imp">'+md(t.imp)+'</p></details>'; }
function ortCard(o){
  var tl=o.text.join('').length+(o.extra||[]).join('').length+((o.listen||[]).length>2?0:(o.listen||[]).reduce(function(n,l){return n+l.items.join('').length;},0));
  var side=o.dangers.length===1&&tl>900;
  var figs=(o.fig||[]).map(function(f){return '<figure class="fig"><img src="img/'+f[0]+'.webp" alt="'+esc(f[1])+'" loading="lazy"><figcaption>'+esc(f[1])+'</figcaption></figure>';}).join("");
  var them=(o.themen||[]).map(themeCard).join("");
  var useCol=side||((figs||them)&&tl>600);
  var text=(o.bild?'<img class="obild" src="img/'+o.bild+'.webp" alt="'+esc(o.name)+'" loading="lazy">':'')+o.text.map(function(t){return t.indexOf('## ')===0?'<h4 class="lh">'+esc(t.slice(3))+'</h4>':'<p>'+md(t)+'</p>';}).join("")+(o.extra||[]).map(function(t){return '<p class="ex">'+md(t)+'</p>';}).join("")+(function(){var ls=o.listen||[],h=ls.map(function(l){return '<div class="lbox"><h4 class="lh">'+esc(l.t)+'</h4>'+(l.pre?'<p>'+md(l.pre)+'</p>':'')+'<ul class="ll">'+l.items.map(function(i){return '<li>'+md(i)+'</li>';}).join("")+'</ul></div>';}).join("");return ls.length>2?'<div class="lgrid">'+h+'</div>':h;})();
  var dang=o.dangers.map(function(d){return dangerCard(d,!side);}).join("");
  return '<details class="ort" id="o-'+o.id+'"><summary><h3>'+esc(o.name)+'</h3>'+pg(o.p)+'<span class="tz">'+esc(o.teaser)+'</span></summary><div class="ob">'+
   (o.mythos?'<div class="myth">'+esc(o.mythos)+'</div>':'')+
   '<div class="ocols'+(useCol?'':' solo')+'"><div class="otxt">'+text+(useCol?'':figs+them)+'</div>'+(useCol?'<aside class="oside">'+figs+them+(side?dang:'')+'</aside>':'')+'</div>'+
   (o.dangers.length&&!side?'<aside class="dgrid">'+dang+'</aside>':'')+'</div></details>';
}
function stub(name,p){ return '<div class="stub"><span>'+esc(name)+'</span>'+pg(p)+'<em>nur Original</em></div>'; }
function itemsList(items){ return '<div class="stubs">'+items.map(function(i){return stub(i[0],i[1]);}).join("")+'</div>'; }
function pills(base,list,curId){ return '<nav class="pills">'+list.map(function(x){return '<button class="pill'+(x.id===curId?' on':'')+'" onclick="gs(\''+base+'/'+x.id+'\')">'+esc(x.t)+'</button>';}).join("")+'</nav>'; }
function sectionHead(s){ return '<div class="sh"><h2>'+esc(s.t)+'</h2><span class="en">'+esc(s.en||"")+'</span>'+pg(s.p)+'</div>'; }
function hero(n){ return '<img class="hero" src="img/h_'+n+'.webp" alt="">'; }
function pageSpieler(r){
  var list=CM_NAV.spieler, s=list.filter(function(x){return x.id===r.sub;})[0]||list[0];
  var have=CM_ORTE["sp_"+s.id]||[], names={}; have.forEach(function(o){names[o.name]=o;});
  var es=(window.CM_SP_E&&CM_SP_E[s.id])||s.items;
  var body=have.length?es.map(function(e){ return names[e[0]]?ortCard(names[e[0]]):stub(e[0],e[1]); }).join(""):"";
  if(!have.length) return pills("spieler",list,s.id)+'<section class="blk">'+sectionHead(s)+itemsList(s.items)+'</section>';
  return pills("spieler",list,s.id)+'<section class="blk">'+sectionHead(s)+'<div class="orte">'+body+'</div></section>';
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
  var chips='<nav class="chips">'+cats.map(function(c){var n=(CM_ORTE[c.id]||[]).length;return '<button class="chip'+(c.id===cat.id?' on':'')+'" onclick="gs(\'sl/'+s.id+'/'+c.id+'\')">'+esc(c.t)+(n?'<i>'+n+'</i>':'')+'</button>';}).join("")+'</nav>';
  var have=CM_ORTE[cat.id]||[], names={}; have.forEach(function(o){names[o.name]=o;});
  var body=cat.e.map(function(e){ return names[e[0]]?ortCard(names[e[0]]):stub(e[0],e[1]); }).join("");
  return h+chips+orgHtml(cat.id)+'<section class="blk">'+sectionHead(cat)+(cat.sub?'<p class="catsub">'+esc(cat.sub)+'</p>':'')+'<div class="orte">'+body+'</div></section>';
}
