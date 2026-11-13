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
var tbLoaded=false;
function pageTB(){
  if(!tbLoaded){
    var left=3, done=function(){ if(--left===0){ tbLoaded=true; if(route().sys==="tb"){ var el=document.getElementById("app"); if(el) el.innerHTML=pageTB(); } } };
    ["themenbuecher-mythos","themenbuecher-logos","extra"].forEach(function(id){ rwLoad(id,done); });
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
