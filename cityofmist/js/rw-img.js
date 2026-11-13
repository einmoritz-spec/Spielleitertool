// Bilder aus dem Handbuch (Zuordnung nach Sektion / Startseite des Eintrags); Dateien: img/rw/*.webp (tools/regelwerk/make_images.py)
var RWI={
  hero:{grundlagen:"hero_grundlagen",serie:"hero_serie",kurzreferenz:"hero_kurzreferenz",entwicklung:"hero_entwicklung"},
  tb:{82:"adaption",86:"bastion",90:"erkenntnis",94:"manifestation",98:"mobilitaet",102:"relikt",106:"subversion",
      110:"besitztuemer",114:"mission",118:"persoenlichkeit",122:"praegende",126:"routine",130:"schluessel",134:"training",
      284:"fortbewegung",288:"operationsbasis",292:"verbuendete"},
  tbSecs:{"themenbuecher-mythos":1,"themenbuecher-logos":1,"extra":1},
  doc:{298:1,299:1,300:1,301:1}
};
function rwImgSrc(n){ return "img/rw/"+n+".webp"; }
function rwTb(secId,e){ return RWI.tbSecs[secId]&&RWI.tb[e.p]?rwImgSrc("tb_"+RWI.tb[e.p]):""; }
function rwDoc(secId,e){ return secId==="dokumente"&&RWI.doc[e.p]?rwImgSrc("doc_"+e.p):""; }
var RWI_FIGS=[22,33,42,48,49,51,171,173,182,201,211,226,233,242,253,263,281];
var rwFigCache={};
function rwFigs(secId,e){
  var m=rwFigCache[secId];
  if(!m){
    m=rwFigCache[secId]=[]; var es=(typeof CM_RW!=="undefined"&&CM_RW[secId])||[];
    RWI_FIGS.forEach(function(pg){
      var best=-1;
      es.forEach(function(x,i){ if(x.p!=null&&x.p<=pg&&(x.pe==null?pg-x.p<=12:pg<=x.pe)&&(best<0||x.p>es[best].p||(x.p===es[best].p&&(x.pe||0)>(es[best].pe||0)))) best=i; });
      if(best>=0) (es[best]._f=es[best]._f||[]).push(pg);
    });
  }
  return e._f||[];
}
function rwFigHtml(secId,e){
  var f=rwFigs(secId,e); if(!f.length) return "";
  return '<div class="rwfigs">'+f.map(function(pg){return '<img class="rwfig" data-lb loading="lazy" alt="" src="'+rwImgSrc("fig_"+pg)+'">';}).join("")+'</div>';
}
function rwHero(secId){ return RWI.hero[secId]?'<img class="rwhero" data-lb loading="lazy" alt="" src="'+rwImgSrc(RWI.hero[secId])+'">':""; }
function rwLb(src){
  var d=document.getElementById("rwlb");
  if(!d){ d=document.createElement("div"); d.id="rwlb"; d.className="rwlb"; d.onclick=function(){d.classList.remove("on");}; document.body.appendChild(d); document.addEventListener("keydown",function(ev){ if(ev.key==="Escape") d.classList.remove("on"); }); }
  d.innerHTML='<img alt="" src="'+src+'">'; d.classList.add("on");
}
document.addEventListener("click",function(ev){ var t=ev.target; if(t&&t.tagName==="IMG"&&t.hasAttribute("data-lb")){ ev.preventDefault(); rwLb(t.getAttribute("src")); } });
