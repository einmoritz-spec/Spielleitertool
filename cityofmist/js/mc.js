/* City of Mist – MC Toolkit: Seitenaufbau. Gliederung in mc-nav.js, Texte in data/mc/*.js (CM_MCD). */
function mcImg(n){ return '<img class="imf" data-lb loading="lazy" alt="" src="img/galerie/mc-toolkit/full/'+n+'.webp" onload="imFit(this)">'; }
function mcBlocks(arr){
  var h="",i=0; arr=arr||[];
  while(i<arr.length){
    var b=arr[i];
    if(/^## /.test(b)){ h+='<h4 class="lh">'+esc(b.slice(3))+'</h4>'; i++; continue; }
    if(/^### /.test(b)){ h+='<h5 class="lh2">'+esc(b.slice(4))+'</h5>'; i++; continue; }
    if(/^- /.test(b)){ var it=[]; while(i<arr.length&&/^- /.test(arr[i])){ it.push('<li>'+md(arr[i].slice(2))+'</li>'); i++; } h+='<ul class="mcl">'+it.join("")+'</ul>'; continue; }
    if(/^\d+\. /.test(b)){ var it2=[]; while(i<arr.length&&/^\d+\. /.test(arr[i])){ it2.push('<li>'+md(arr[i].replace(/^\d+\. /,""))+'</li>'); i++; } h+='<ol class="mcl">'+it2.join("")+'</ol>'; continue; }
    if(/^> /.test(b)){ h+='<blockquote class="mcq">'+md(b.slice(2))+'</blockquote>'; i++; continue; }
    h+='<p>'+md(b)+'</p>'; i++;
  }
  return h;
}
function mcEntry(o){
  var figs=(o.fig||[]).map(mcImg).join("");
  var box=(o.box||[]).map(function(x){ return '<aside class="mcbox"><h4>'+esc(x.t)+'</h4>'+mcBlocks(x.text)+'</aside>'; }).join("");
  var dg=(o.dangers||[]).map(function(d){ return dangerCard(d,true); }).join("");
  return '<article class="mce" id="m-'+(o.id||"")+'"><h3>'+esc(o.name)+'</h3>'+pg(o.p,o.pe)+figs+mcBlocks(o.text)+box+(dg?'<div class="dgrid">'+dg+'</div>':'')+'</article>';
}
function pageMC(r){
  var N=CM_MC_NAV, tab=r.tab&&N.cats[r.tab]?r.tab:"start";
  var tabs='<nav class="tabs">'+N.tabs.map(function(t){return '<button class="tab'+(t.id===tab?' on':'')+'" onclick="gm(\''+t.id+'\')">'+t.t+'</button>';}).join("")+'</nav>';
  if(tab==="start") return tabs+pageMCStart();
  var cats=N.cats[tab], c=cats.filter(function(x){return x.id===r.sub;})[0]||cats[0];
  var have=CM_MCD[c.id]||[], names={}; have.forEach(function(o){names[o.name]=o;});
  var es=c.e.map(function(e){ return names[e[0]]?mcEntry(names[e[0]]):stub(e[0],e[1]); }).join("");
  var extra=have.filter(function(o){return !c.e.some(function(e){return e[0]===o.name;});}).map(mcEntry).join("");
  var subs=have.length?have.map(function(o){return '<a href="#" onclick="document.getElementById(\'m-'+(o.id||"")+'\').scrollIntoView({behavior:\'smooth\'});return false">'+esc(o.name.split(':')[0])+'</a>';}).join(""):'';
  var btn=function(x){ return '<button class="ocat'+(x.id===c.id?' on':'')+'" onclick="gm(\''+tab+'/'+x.id+'\')">'+esc(x.t)+'</button>'; };
  var nav='<nav class="onav"><div class="otree">'+cats.map(function(x){return btn(x)+(x.id===c.id&&subs?'<div class="osub">'+subs+'</div>':'');}).join("")+'</div><div class="oflat"><div class="orow">'+cats.map(btn).join("")+'</div></div></nav>';
  var fig=c.fig?mcImg(c.fig):"";
  return tabs+'<div class="orail">'+nav+'<div class="omain"><section class="blk flat">'+sectionHead({t:c.t,en:c.en,p:c.p})+fig+'<div class="mcbody">'+es+extra+'</div></section></div></div>';
}
function pageMCStart(){
  var N=CM_MC_NAV;
  var kc=N.kapitel.map(function(k,i){
    var cats=N.cats[k.go].map(function(c){return [c.t,"gm(\'"+k.go+"/"+c.id+"\')",c.p];});
    return kapCard(String(i+1),k.t,k.en,k.p,"gm(\'"+k.go+"\')",cats);
  }).join("");
  var ap=kapCard("","Avatare","Avatar Profiles",166,"gm(\'avatare\')",N.cats.avatare.map(function(c){return [c.t,"gm(\'avatare/"+c.id+"\')",c.p];}))+
         kapCard("","Hilfsmittel","MC Sheets, Sample Case & Maps",220,"gm(\'hilfsmittel\')",N.cats.hilfsmittel.map(function(c){return [c.t,"gm(\'hilfsmittel/"+c.id+"\')",c.p];}));
  var c0=N.cats.start[0], have=CM_MCD.mc||[], nm={}; have.forEach(function(o){nm[o.name]=o;});
  var intro=c0.e.map(function(e){ return nm[e[0]]?mcEntry(nm[e[0]]):stub(e[0],e[1]); }).join("");
  return '<section class="blk"><h2>MC Toolkit <button class="chip bookbtn" onclick="BV.open(\'mc\',1)">Buch öffnen</button></h2><div class="kcs">'+kc+ap+'</div></section>'+
    '<section class="blk flat"><div class="mcbody">'+intro+'</div></section>';
}
