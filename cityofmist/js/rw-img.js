// Bilder aus dem Handbuch (Zuordnung nach Sektion / Startseite des Eintrags); Dateien: img/rw/*.webp (tools/regelwerk/make_images.py)
var RWI={
  hero:{grundlagen:"hero_welt",serie:"hero_charakter",kurzreferenz:"hero_regeln",entwicklung:"hero_entwicklung"},
  tb:{82:"adaption",86:"bastion",90:"erkenntnis",94:"manifestation",98:"mobilitaet",102:"relikt",106:"subversion",
      110:"besitztuemer",114:"mission",118:"persoenlichkeit",122:"praegende",126:"routine",130:"schluessel",134:"training",
      284:"fortbewegung",288:"operationsbasis",292:"verbuendete"},
  tbSecs:{"themenbuecher-mythos":1,"themenbuecher-logos":1,"extra":1},
  doc:{298:1,299:1,300:1,301:1}
};
function rwImgSrc(n){ return "img/rw/"+n+".webp"; }
function rwTb(secId,e){ return RWI.tbSecs[secId]&&RWI.tb[e.p]?rwImgSrc("tb_"+RWI.tb[e.p]):""; }
function rwDoc(secId,e){ return secId==="dokumente"&&RWI.doc[e.p]?rwImgSrc("doc_"+e.p):""; }
function rwHero(secId){ return RWI.hero[secId]?'<img class="rwhero" data-lb loading="lazy" alt="" src="'+rwImgSrc(RWI.hero[secId])+'">':""; }
function rwLb(src){
  var d=document.getElementById("rwlb");
  if(!d){ d=document.createElement("div"); d.id="rwlb"; d.className="rwlb"; d.onclick=function(){d.classList.remove("on");}; document.body.appendChild(d); document.addEventListener("keydown",function(ev){ if(ev.key==="Escape") d.classList.remove("on"); }); }
  d.innerHTML='<img alt="" src="'+src+'">'; d.classList.add("on");
}
document.addEventListener("click",function(ev){ var t=ev.target; if(t&&t.tagName==="IMG"&&t.hasAttribute("data-lb")){ ev.preventDefault(); rwLb(t.getAttribute("src")); } });
