/* Themenbücher-Übersicht: alle Themenbücher aus Grundregelwerk, Shadows & Showdowns und Local Legends an einem Ort */
var TB_LL = [
  {name:"Esoterica", src:"ll", typ:"Mythos", p:185, teaser:"Wortmacht · Mudra-Bewegungen · Hexensprüche · Runen & Sigillen · okkulte Riten · arkane Lehre", where:"Local Legends › The Campus › Power Sets"},
  {name:"Tradition", src:"ll", typ:"Logos", p:33, teaser:"Einwanderergemeinde · Studentenverbindung · Shaolin-Orden · Kriegsveteranen · Neo-Heiden · Geheimbund alter Kreuzritter", where:"Local Legends › Chinatown › Power Sets"}
];
var TB_SRC = {rw:"Grundregelwerk", ss:"Shadows & Showdowns", ll:"Local Legends"};
var tbFilter = "all";
function tbList(){
  var out=[], img=function(n){ return "img/rw/"+n+".webp"; };
  [["themenbuecher-mythos","Mythos"],["themenbuecher-logos","Logos"],["extra","Extra"]].forEach(function(g){
    (CM_RW[g[0]]||[]).forEach(function(e,i){
      var im=RWI.tb[e.p]; if(!im) return;
      var tz=e.sub&&e.sub!=="Logos-Themenbuch"?e.sub:((e.body&&e.body[0]&&e.body[0].tg&&e.body[0].tg.i)||[]).slice(0,6).join(" • ");
      out.push({name:e.name,src:"rw",typ:g[1],p:e.p,teaser:tz,img:img("tb_"+im),go:"gr('charakter/"+g[0]+"/"+i+"')"});
      if(g[0]==="extra") out[out.length-1].go="gr('extra')";
    });
  });
  Object.keys(CM_ORTE).filter(function(k){return k.indexOf("sp_")===0;}).forEach(function(k){
    CM_ORTE[k].forEach(function(o){ if(o.hero) out.push({name:o.name,src:"ss",typ:o.tb,p:o.p,teaser:(o.teaser||"").replace(/^(Mythos|Logos)-Themen?(book|buch):\s*/,""),img:"img/"+o.hero+".webp",go:"tbGoSS('"+o.id+"')"}); });
  });
  TB_LL.forEach(function(x){ out.push({name:x.name,src:"ll",typ:x.typ,p:x.p,teaser:x.teaser,go:"switchTool('locallegends')",where:x.where}); });
  return out;
}
function tbGoSS(id){ gs("spieler/buecher"); setTimeout(function(){ var e=document.getElementById("o-"+id); if(e){ e.open=true; e.scrollIntoView(); window.scrollBy(0,-70); } },300); }
function tbSet(f){ tbFilter=f; var el=document.getElementById("app"); if(el) el.innerHTML=pageTB(); window.scrollTo(0,0); }
var tbLoaded=false, tbWait=[];
function tbEnsure(cb){
  if(tbLoaded) return cb();
  tbWait.push(cb); if(tbWait.length>1) return;
  var left=3, done=function(){ if(--left===0){ tbLoaded=true; var w=tbWait; tbWait=[]; w.forEach(function(f){f();}); } };
  ["themenbuecher-mythos","themenbuecher-logos","extra"].forEach(function(id){ rwLoad(id,done); });
}
function tbStripInsert(){
  var old=document.getElementById("tbstrip"); if(old) old.remove(); var tok=window.tbTok=(window.tbTok||0)+1;
  var r=route(), host=document.getElementById("app");
  var onRw=r.sys==="rw"&&/^(themenbuecher-mythos|themenbuecher-logos|extra)$/.test(r.sub), onSs=r.sys==="ss"&&r.tab==="spieler"&&r.sub==="buecher";
  if(!host||!(onRw||onSs)) return;
  var d=document.createElement("nav"); d.id="tbstrip"; d.className="tbstrip"; if(onRw){ var hp=location.hash.split("/"), cid="rw-"+r.sub+"-"+(+(hp[3]||0)), tries=0;
    (function place(){ if(tok!==window.tbTok) return; var old2=document.getElementById("tbstrip"); if(old2) old2.remove(); var card=document.getElementById(cid); if(card&&card.parentNode){ card.parentNode.insertBefore(d,card); setTimeout(function(){ d.scrollIntoView({block:"start"}); window.scrollBy(0,-70); },200); } else if(++tries<30) setTimeout(place,100); else host.insertBefore(d,host.firstChild); })(); }
  else host.insertBefore(d,host.firstChild);
  tbEnsure(function(){
    var cur=onRw?(CM_RW[r.sub]||[])[+(r.cat||0)]:null, curName=cur&&cur.name, ORD={rw:0,ss:1,ll:2}, TY={Mythos:0,Logos:1,Extra:2};
    var L=tbList().sort(function(a,b){return TY[a.typ]-TY[b.typ]||ORD[a.src]-ORD[b.src]||a.p-b.p;});
    d.innerHTML='<button class="tbm all" onclick="go(\'tb\')">Alle</button>'+L.map(function(x){
      return '<button class="tbm s-'+x.src+' ty-'+x.typ.toLowerCase()+(x.name===curName?' on':'')+'" title="'+esc(x.name)+'" aria-label="'+esc(x.name)+'" onclick="'+x.go+'">'+(x.img?'<img src="'+x.img+'" alt="" loading="lazy">':'<span></span>')+'</button>';
    }).join("");
  });
}
function pageTB(){
  if(!tbLoaded){
    tbEnsure(function(){ if(route().sys==="tb"){ var el=document.getElementById("app"); if(el) el.innerHTML=pageTB(); } });
    return '<div class="tbpage"><div class="tbhead"><h1>Themenbücher</h1></div></div>';
  }
  var ORD={rw:0,ss:1,ll:2}, all=tbList(), sec=function(typ,title){
    var L=all.filter(function(x){return x.typ===typ&&(tbFilter==="all"||x.src===tbFilter);}).sort(function(a,b){return ORD[a.src]-ORD[b.src]||a.p-b.p;});
    if(!L.length) return "";
    return '<section class="tbs tbs-'+typ.toLowerCase()+'"><h2>'+title+' <i>'+L.length+'</i></h2><div class="tbgrid">'+L.map(function(x){
      return '<button class="tbc src-'+x.src+'" onclick="'+x.go+'">'+(x.img?'<img src="'+x.img+'" alt="" loading="lazy">':'<span class="tbc-ph"></span>')+'<div class="tbc-t"><em class="src-'+x.src+'">'+TB_SRC[x.src]+'</em><b>'+esc(x.name)+'</b><small>'+esc(x.teaser)+'</small><u>S. '+x.p+(x.where?' · '+esc(x.where):'')+'</u></div></button>';
    }).join("")+'</div></section>';
  };
  var chips=[["all","Alle"],["rw","Grundregelwerk"],["ss","Shadows & Showdowns"],["ll","Local Legends"]].map(function(c){ return '<button class="chip'+(tbFilter===c[0]?' on':'')+'" onclick="tbSet(\''+c[0]+'\')">'+c[1]+'</button>'; }).join("");
  return '<div class="tbpage"><div class="tbhead"><h1>Themenbücher</h1><nav class="tbchips">'+chips+'</nav></div>'+sec("Mythos","Mythos")+sec("Logos","Logos")+sec("Extra","Zusätzliche Themen")+'</div>';
}

/* Reihe bleibt erhalten, wenn die Seite nachträglich neu aufgebaut wird */
(function(){ var t=0; new MutationObserver(function(){ clearTimeout(t); t=setTimeout(function(){ if(!document.getElementById("tbstrip")) tbStripInsert(); },0); }).observe(document.getElementById("app")||document.body,{childList:true}); })();
