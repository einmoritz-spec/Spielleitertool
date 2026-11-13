/* Themenbücher-Übersicht: alle Themenbücher aus Grundregelwerk, Shadows & Showdowns und Local Legends an einem Ort */
var TB_SRC = {rw:"Grundregelwerk", ss:"Shadows & Showdowns", ll:"Local Legends"};
var tbFilter = "all";
function tbList(){
  var out=[], img=function(n){ return "img/rw/"+n+".webp"; };
  [["themenbuecher-mythos","Mythos"],["themenbuecher-logos","Logos"],["extra","Extra"]].forEach(function(g){
    (CM_RW[g[0]]||[]).forEach(function(e,i){
      var im=RWI.tb[e.p]; if(!im) return;
      var tz=e.sub&&e.sub!=="Logos-Themenbuch"?e.sub:((e.body&&e.body[0]&&e.body[0].tg&&e.body[0].tg.i)||[]).slice(0,6).join(" • ");
      out.push({name:e.name,src:"rw",typ:g[1],p:e.p,teaser:tz,img:img("tb_"+im),go:"go('tb/rw/"+g[0]+"/"+i+"')"});
    });
  });
  Object.keys(CM_ORTE).filter(function(k){return k.indexOf("sp_")===0;}).forEach(function(k){
    CM_ORTE[k].forEach(function(o){ if(o.hero) out.push({name:o.name,src:"ss",typ:o.tb,p:o.p,teaser:(o.teaser||"").replace(/^(Mythos|Logos)-Themen?(book|buch):\s*/,""),img:"img/"+o.hero+".webp",go:"go('tb/ss/"+o.id+"')"}); });
  });
  (window.CM_TBLL||[]).forEach(function(x){ out.push({name:x.name,src:"ll",typ:x.typ,p:x.p,teaser:x.sub,img:x.hero,pos:x.pos,go:"go('tb/ll/"+x.id+"')"}); });
  return out;
}
function tbGoSS(id){ gs("spieler/buecher"); setTimeout(function(){ var e=document.getElementById("o-"+id); if(e){ e.open=true; e.scrollIntoView(); window.scrollBy(0,-70); } },300); }
function tbSet(f){ tbFilter=f; var el=document.getElementById("app"); if(el) el.innerHTML=pageTB(); window.scrollTo(0,0); }
var tbLoaded=false, tbWait=[];
function tbEnsure(cb){
  if(tbLoaded) return cb();
  tbWait.push(cb); if(tbWait.length>1) return;
  var left=4, done=function(){ if(--left===0){ tbLoaded=true; var w=tbWait; tbWait=[]; w.forEach(function(f){f();}); } };
  ["themenbuecher-mythos","themenbuecher-logos","extra"].forEach(function(id){ rwLoad(id,done); });
  var sc=document.createElement("script"); sc.src="js/data/tb-ll.js"; sc.onload=sc.onerror=done; document.head.appendChild(sc);
}
function tbKits(){
  var by={Mythos:[],Logos:[]};
  (CM_ORTE.sp_bau||[]).forEach(function(o){ var m=/^(mythos|logos)_/.exec(o.id); if(m) (o.themen||[]).forEach(function(t){ by[m[1]==="mythos"?"Mythos":"Logos"].push(t); }); });
  var grp=function(k,t){ var L=by[k].sort(function(a,b){return a.name<b.name?-1:1;}); return L.length?'<details class="tbkg tbkg-'+k.toLowerCase()+'"><summary><b>'+t+'</b><i>'+L.length+'</i></summary><div class="tbkgrid">'+L.map(themeCard).join("")+'</div></details>':""; };
  var rule=(CM_ORTE.sp_buecher||[]).filter(function(o){return !o.hero;})[0];
  return '<section class="tbs tbs-kits"><h2>Theme Kits <i>'+(by.Mythos.length+by.Logos.length)+'</i></h2>'+(rule?'<button class="tbback" onclick="go(\'tb/ss/'+rule.id+'\')">Regel: '+esc(rule.name.replace(/^Neue Regel:\s*/,''))+' (S. '+rule.p+') ›</button>':'')+grp("Mythos","Mythos-Theme-Kits · Legendary Archetypes")+grp("Logos","Logos-Theme-Kits · Noir-Tropes")+'</section>';
}
function tbGroup(root){
  var h=root.querySelector("h4.lh"); if(!h) return;
  var par=h.parentNode, kids=[].slice.call(par.children), secs=[], cur={k:"intro",el:[]};
  kids.forEach(function(e){ if(e.matches("h4.lh")){ secs.push(cur); cur={k:e.textContent.toLowerCase(),el:[e]}; } else cur.el.push(e); }); secs.push(cur);
  var out=document.createElement("div"); out.className="tbsecs";
  secs.forEach(function(sc){ if(!sc.el.length) return; var sec=document.createElement("section"); sec.className="tbsec"+(/stärken|schwächen/.test(sc.k)&&/fragen/.test(sc.k)?" tbsec-half":"");
    var run=null; sc.el.forEach(function(e){ if(e.classList.contains("fq")){ if(!run){ run=document.createElement("div"); run.className="fqgrid"; sec.appendChild(run);} run.appendChild(e); } else { run=null; sec.appendChild(e); } });
    out.appendChild(sec); });
  par.innerHTML=""; par.appendChild(out);
}
function tbNorm(e){
  var boxes={frage:[],hinweis:[],beispiel:[]}, body=[];
  var take=function(b){ if(b&&b.box&&boxes[b.box.k]){ boxes[b.box.k].push(b); return true; } return false; };
  (e.body||[]).forEach(function(b){ if(!take(b)) body.push(b); });
  (e.aside||[]).forEach(function(b){ if(!take(b)) body.push(b); });
  var tags=function(v){ return String(v||"").split(/;\s*/).filter(Boolean); };
  var card=function(title,art,name,idl,idv,st,wk){ var b=["*Art:* "+art,"**"+name+"**","*"+idl+":* "+idv]; b.push({tg:{t:"Stärken",k:"pw",i:st}}); b.push({tg:{t:"Schwächen",k:"wk",i:wk}}); return {box:{t:title,k:"beispiel",b:b}}; };
  var ex=[];
  boxes.beispiel.forEach(function(bx){ var kv=null; (bx.box.b||[]).forEach(function(x){ if(x&&x.kv) kv=x.kv; });
    if(!kv){ ex.push(bx); return; }
    var groups={}, order=[]; kv.forEach(function(p){ var m=/^(.+?) – (.+)$/.exec(p[0]), g=m?m[1]:"", f=m?m[2]:p[0]; if(!groups[g]){ groups[g]={}; order.push(g); } groups[g][f]=p[1]; });
    order.forEach(function(g){ var o=groups[g], idl=o["Mysterium"]?"Mysterium":"Identität", idv=o["Mysterium"]||o["Identität"]||"";
      ex.push(card(g?bx.box.t+": "+g:"Beispiel-Themenkarte", g||o["Art"]||"", o["Name"]||"", idl, idv, tags(o["Stärken"]), tags(o["Schwächen"]))); }); });
  return {name:e.name,p:e.p,pe:e.pe,sub:e.sub,body:body,aside:boxes.frage.concat(boxes.hinweis,ex)};
}
function tbNormSS(o){
  var strip=function(t){ return String(t).replace(/\*\*/g,""); }, ren={"Concept":"Konzept","Power Tag Questions":"Fragen zu den Stärken","Weakness Tag Questions":"Fragen zu den Schwächen"};
  var body=["### "+(o.tb||"Mythos")+"-Themenbuch"], aside=[], i, t, frageT=null, frageB=[];
  var tx=o.text||[];
  for(i=0;i<tx.length;i++){ t=tx[i];
    if(/^## /.test(t)){ body.push("## "+(ren[t.slice(3)]||t.slice(3))); continue; }
    if(/^\*\*[^*]+\*\*/.test(t) && /^•/.test(tx[i+1]||"")){ var m=/\(([^)]+)\)\s*$/.exec(t); frageT=m?m[1]:strip(t).replace(/\?.*$/,"?"); continue; }
    if(/^•\s*/.test(t)){ frageB.push("- "+t.replace(/^•\s*/,"")); continue; }
    body.push(t); }
  if(frageT) aside.push({box:{t:frageT,k:"frage",b:frageB}});
  var secs={"Power Tag Questions":"Fragen zu den Stärken","Power-Tag-Fragen":"Fragen zu den Stärken","Weakness Tag Questions":"Fragen zu den Schwächen","Weakness-Tag-Fragen":"Fragen zu den Schwächen","Extra Tags":"Zusätzliche Stärken und Schwächen","Mystery":"Mysterium","Identity":"Identität","Title":"Name","Crew Relationships":"Beziehungen innerhalb des Teams","Crew-Beziehungen":"Beziehungen innerhalb des Teams"};
  (o.listen||[]).forEach(function(l){ var key=l.t.replace(/\s*\(Beispiele\)/,""), isQ=/Tag Questions|Tag-Fragen/.test(key);
    var head=secs[key]||(/Improvements/.test(key)?"Verbesserungen":key);
    if(isQ && body.indexOf("## "+head)>=0){ /* Überschrift steht schon im Text */ } else body.push("## "+head);
    if(l.pre) body.push(l.pre);
    (l.items||[]).forEach(function(it){ var m=/^\*\*([A-J]) – (.+?)\*\*\s*(.*)$/.exec(it);
      if(isQ&&m) body.push({fq:{l:m[1],q:m[2].replace(/\?$/,"?"),tags:m[3].split(/,\s*/).filter(Boolean)}}); else body.push("- "+it.replace(/^•\s*/,"")); }); });
  var th=(o.themen||[])[0];
  if(th){ var idm=/^(Mystery|Identity):\s*(.*)$/.exec(th.identity||""), lab=idm&&idm[1]==="Identity"?"Identität":"Mysterium";
    var bb=["*Art:* "+th.typ,"**"+th.name+"**","*"+lab+":* "+(idm?idm[2]:th.identity||"")]; bb.push({tg:{t:"Stärken",k:"pw",i:th.power||[]}}); bb.push({tg:{t:"Schwächen",k:"wk",i:th.weak||[]}});
    aside.push({box:{t:"Beispiel-Themenkarte",k:"beispiel",b:bb}}); }
  return {name:o.name,p:o.p,sub:(o.extra&&o.extra[0])||"",body:body,aside:aside};
}
function tbDetail(r){
  var back='<button class="tbback" onclick="go(\'tb\')">‹ Alle Themenbücher</button>', h="", hero="";
  if(r.tab==="rw"){ var e=(CM_RW[r.sub]||[])[+r.cat]; if(e){ var im=RWI.tb[e.p], typ=r.sub==="themenbuecher-logos"?"Logos":r.sub==="extra"?"Extra":"Mythos";
      hero=im?'<div class="tbhero tb-'+typ.toLowerCase()+'"><img src="img/rw/tb_'+im+'.webp" alt="" data-lb><div class="tbh-t"><small>'+(typ==="Extra"?"Zusätzliches Thema":typ+" Themebook")+'</small><b>'+esc(e.name)+'</b> '+pg(e.p,e.pe)+'</div></div>':"";
      h=rwCard(tbNorm(e),"tbd",r.sub); } }
  else if(r.tab==="ss"){ Object.keys(CM_ORTE).filter(function(k){return k.indexOf("sp_")===0;}).forEach(function(k){ CM_ORTE[k].forEach(function(o){ if(o.id===r.sub&&o.hero){ var typ=o.tb||"Mythos";
      hero='<div class="tbhero tb-'+typ.toLowerCase()+'"><img src="img/'+o.hero+'.webp" alt="" data-lb><div class="tbh-t"><small>'+typ+' Themebook</small><b>'+esc(o.name)+'</b> '+pg(o.p)+'</div></div>'; h=rwCard(tbNormSS(o),"tbd","ss"); } }); }); }
  else if(r.tab==="ll"){ (window.CM_TBLL||[]).forEach(function(o){ if(o.id===r.sub){
      hero='<div class="tbhero tb-'+o.typ.toLowerCase()+'"><img src="'+o.hero+'" alt="" style="aspect-ratio:1100/540!important;max-height:62vh;object-position:'+(o.pos||"50% 30%")+'" data-lb><div class="tbh-t"><small>'+o.typ+' Themebook</small><b>'+esc(o.name)+'</b> '+pg(o.p,o.pe)+'</div></div>'; h=rwCard({name:o.name,p:o.p,pe:o.pe,sub:o.sub,body:o.body,aside:o.aside},"tbd","ll"); } }); }
  var d=document.createElement("div"); d.innerHTML=h; tbGroup(d);
  return '<div class="tbpage tbdetail tbv-a">'+back+''+hero+'<div class="tbdet-body">'+d.innerHTML+'</div></div>';
}
function pageTB(){
  var r=route();
  if(!tbLoaded){
    tbEnsure(function(){ if(route().sys==="tb"){ var el=document.getElementById("app"); if(el) el.innerHTML=pageTB(); } });
    return '<div class="tbpage"><div class="tbhead"><h1>Themenbücher</h1></div></div>';
  }
  if(r.tab==='rw'||r.tab==='ss'||r.tab==='ll') return tbDetail(r);
  var ORD={rw:0,ss:1,ll:2}, all=tbList(), sec=function(typ,title){
    var L=all.filter(function(x){return x.typ===typ&&(tbFilter==="all"||x.src===tbFilter);}).sort(function(a,b){return ORD[a.src]-ORD[b.src]||a.p-b.p;});
    if(!L.length) return "";
    return '<section class="tbs tbs-'+typ.toLowerCase()+'"><h2>'+title+' <i>'+L.length+'</i></h2><div class="tbgrid">'+L.map(function(x){
      return '<button class="tbc src-'+x.src+'" onclick="'+x.go+'">'+(x.img?'<img src="'+x.img+'" alt="" loading="lazy"'+(x.pos?' style="object-position:'+x.pos+'"':'')+'>':'<span class="tbc-ph"></span>')+'<div class="tbc-t"><em class="src-'+x.src+'">'+TB_SRC[x.src]+'</em><b>'+esc(x.name)+' <u>S. '+x.p+'</u></b></div></button>';
    }).join("")+'</div></section>';
  };
  var chips=[["all","Alle"],["rw","Grundregelwerk"],["ss","Shadows & Showdowns"],["ll","Local Legends"]].map(function(c){ return '<button class="chip'+(tbFilter===c[0]?' on':'')+'" onclick="tbSet(\''+c[0]+'\')">'+c[1]+'</button>'; }).join("");
  return '<div class="tbpage"><div class="tbhead"><h1>Themenbücher</h1><nav class="tbchips">'+chips+'</nav></div>'+sec("Mythos","Mythos")+sec("Logos","Logos")+sec("Extra","Zusätzliche Themen")+tbKits()+'</div>';
}
