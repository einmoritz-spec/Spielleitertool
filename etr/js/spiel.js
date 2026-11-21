/* Eat the Reich – Spielansichten: Einsatz (Route), Ort-Akten, Szenen-Tracker, Trupp, Gegner.
   Zustand (erledigte Orte, Vorzeichen, laufende Szene) bleibt im Browser gespeichert. */
var ET_KEY="etr_state_v1";
var ET={done:{},here:"",abs:"",omen:{},scene:null};
try{ var __s=JSON.parse(localStorage.getItem(ET_KEY)||"null"); if(__s) ET=Object.assign(ET,__s); }catch(e){}
function etSave(){ try{ localStorage.setItem(ET_KEY,JSON.stringify(ET)); }catch(e){} }
var ET_SEK=[["s3","ETR_S3","Startbereiche"],["s2","ETR_S2","Großteil des Angriffs"],["s1","ETR_S1","Endgame"]];
function etSek(){ return ET_SEK.map(function(s){ return [s[0],window[s[1]],s[2]]; }).filter(function(s){return s[1];}); }
function etOrt(id){ var r=null; etSek().forEach(function(s){ s[1].orte.forEach(function(o){ if(o.id===id) r=[o,s[0],s[1]]; }); }); return r; }
function etSolo(g){ return (g.regeln||[]).some(function(r){return r[0]==="Solo";}); }
function etShortN(n){ return n.split(",")[0]; }
function etSv(st){ if(!st||st.threat==null) return ""; return '<span class="sv"><span><small>Bedrohung</small><b>'+st.threat+'</b></span><span><small>Angriff</small><b>'+st.attack+'</b></span>'+(st.chall?'<span class="ch"><small>Hürde</small><b>'+st.chall+'</b></span>':'')+'</span>'; }
function etParas(a){ return (a||[]).map(function(t){return '<p>'+md(t)+'</p>';}).join(""); }
function etGsorted(){ return (window.ETR_GEGNER||[]).slice().sort(function(a,b){return b.name.length-a.name.length;}); }
function etPf(s,o){
  var t=s.replace(/\*\*/g,""), n=1, m=/×\s*(\d+)/.exec(t); if(m) n=+m[1];
  var paren=(/\(([^)]*)\)/.exec(t)||[])[1]||"";
  var name=t.replace(/\s*\([^)]*\)/,"").replace(/\s*×\s*\d+/,"").trim();
  var um=(o.gegner||[]).filter(function(g){return name.indexOf(g.name)===0;})[0];
  if(um) return {name:um.name,n:1,note:paren,st:um,um:um,solo:true};
  var G=etGsorted(), lm=/wie ([A-ZÄÖÜ][\wäöüß-]+)/.exec(paren), base=null;
  if(lm) base=G.filter(function(g){return g.name.indexOf(lm[1])===0;})[0];
  if(!base) base=G.filter(function(g){return name.indexOf(g.name)===0;})[0];
  var st=base?{threat:base.threat,attack:base.attack,chall:base.chall}:null;
  var am=/Angriff (\d+)/.exec(paren); if(am&&st) st.attack=+am[1];
  var note=paren.replace(/;?\s*Werte wie [^;)]*/,"").replace(/,?\s*aber Angriff \d+[^)]*/,"").replace(/^wie Polizei/,"").trim();
  return {name:name,n:n,note:note,st:st,solo:!!(base&&etSolo(base))};
}
function etEnemies(o){ var L=(o.feinde||[]).map(function(f){return etPf(f,o);}); (o.gegner||[]).forEach(function(g){ if(!L.some(function(x){return x.um===g;})) L.push({name:g.name,n:1,note:"",st:g,um:g,solo:true}); }); return L; }

/* ---------- Einsatz ---------- */
function einsatz(){
  var br=ETR_MISSION[0], box=br.b.filter(function(b){return b.t==="box";})[0], sz=ETR_MISSION[1];
  var top='<div class="ein-top"><div class="vl"><img src="img/paris1.webp" alt="" style="float:right;width:210px;margin:2px 0 10px 18px;border-radius:4px;box-shadow:0 4px 14px rgba(0,0,0,.4)">'+box.b.map(function(b){return '<p>'+md(b.x)+'</p>';}).join("")+'<div style="clear:both"></div></div>'+
   '<div><div class="mapw"><img src="img/c_p48.webp" alt=""><img src="img/c_p49.webp" alt=""></div><div class="paper"><h4>Sargsturz<span class="pg">S. 42</span></h4>'+sz.b.filter(function(b){return b.t==="p";}).map(function(b){return '<p>'+md(b.x)+'</p>';}).join("")+'</div></div></div>';
  var board='<div class="board">'+etSek().map(function(s){
   return '<div class="band"><div class="bl"><b>'+esc(s[1].titel)+'</b><small>'+s[2]+'</small></div><div class="bt">'+s[1].orte.map(function(o){
    var E=etEnemies(o), cls=(ET.done[o.id]?" done":"")+(ET.here===o.id?" here":"");
    var chips=E.map(function(e){return '<span'+(e.um?' class="umc"':'')+'>'+esc(etShortN(e.name))+(e.n>1?' ×'+e.n:'')+'</span>';}).join("");
    var x=[]; if(o.beute&&o.beute.length) x.push('<i>Beute '+o.beute.length+'</i>'); (o.neben||[]).forEach(function(){ x.push('<i>Nebenziel</i>'); });
    return '<div class="tile'+cls+'" onclick="etTile(\''+o.id+'\')"><h5><a href="#" onclick="event.stopPropagation();etGoOrt(\''+o.id+'\');return false">'+esc(o.name)+'</a><span class="pg">S. '+o.p+'</span></h5>'+(o.ziel?'<div class="tz"><span class="n">'+o.wert+(o.chall?'<small>H'+o.chall+'</small>':'')+'</span><span>'+md(o.ziel)+'</span></div>':'')+'<div class="tb"><div class="tf">'+chips+'</div>'+(x.length?'<div class="tx">'+x.join("")+'</div>':'')+'</div>'+(ET.abs===o.id?'<span class="stmp">Absetzpunkt</span>':'')+'</div>';
   }).join("")+'</div></div>';
  }).join("")+'</div>';
  var om='<div class="omens">'; etSek().forEach(function(s){ s[1].orte.forEach(function(o){ (o.gegner||[]).forEach(function(g){ if(!g.vorzeichen) return;
    om+='<div class="omen"><h5>'+esc(g.name)+'<small>'+esc(s[1].titel)+' · '+esc(etShortN(o.name))+'</small></h5><ul>'+g.vorzeichen.split(/;\s*/).map(function(v,i){ var k=o.id+"."+i; return '<li class="'+(ET.omen[k]?'done':'')+'" onclick="etOmen(\''+k+'\')">'+md(v.replace(/\.$/,""))+'</li>'; }).join("")+'</ul></div>'; }); }); }); om+='</div>';
  var rest=secs((window.ETR_KARTE||[]).slice(1).concat(ETR_MISSION.filter(function(s){return s.id==="weiter"||s.id==="uebermenschen";})));
  return top+'<h2 class="mk-h">Route durch Paris<small>2 oder 3 Orte pro Sektor · Klick auf die Karte = erledigt</small></h2>'+board+'<h2 class="mk-h">Vorzeichen</h2>'+om+'<h2 class="mk-h">Spielfluss</h2>'+rest;
}
function etTile(id){ ET.done[id]=!ET.done[id]; if(!ET.done[id]&&ET.here===id) ET.here=""; etSave(); render(); }
function etOmen(k){ ET.omen[k]=!ET.omen[k]; etSave(); render(); }
function etGoOrt(id){ var r=etOrt(id); if(!r) return; location.hash=r[1]+"/"+id; }

/* ---------- Sektor: Ort-Akten ---------- */
function umCard(g,open){
  var im={"Stahlsoldat":"c_tech","Rust-Witch":"c_jardin","Dämonenblut":"c_konzert","Werhund":"c_sende"}[g.name];
  var rl=(g.regeln||[]).map(function(r){return '<div class="rl"><b>'+esc(r[0])+':</b> '+md(r[1])+'</div>';}).join("");
  return '<section class="um'+(open?' open':'')+'"><header onclick="this.parentNode.classList.toggle(\'open\')">'+(g.vorzeichen?'<small>Übermensch</small>':'')+'<h4>'+esc(g.name)+'</h4>'+etSv(g)+'</header><div class="umb'+(im?' wi':'')+'">'+(im?'<img src="img/'+im+'.webp" alt="">':'')+'<div>'+etParas(g.text)+(g.attackx?'<p class="ax">Angriff: '+md(g.attackx.replace(/^\(|\)$/g,""))+'</p>':'')+'</div><div>'+rl+(g.vorzeichen?'<div class="rl vz"><b>Vorzeichen:</b> '+md(g.vorzeichen)+'</div>':'')+(g.blut?'<div class="rl vz"><b>Blutgeschmack:</b> '+md(g.blut)+'</div>':'')+'</div></div></section>';
}
function eaCard(o,sid){
  var E=etEnemies(o), pan='<aside class="ea-panel">', run=ET.scene&&ET.scene.ort===o.id;
  if(o.ziel) pan+='<div class="pz"><small>Ziel</small><b>'+md(o.ziel)+'</b><span class="n">'+o.wert+(o.chall?'<small>Hürde '+o.chall+'</small>':'')+'</span></div>';
  (o.neben||[]).forEach(function(nb){ pan+='<div class="pz nb"><small>Nebenziel</small><b>'+md(nb.name)+'</b><span class="n">'+nb.wert+'</span><div class="nx">'+md(nb.x||"")+(nb.ausr?'<ul>'+nb.ausr.map(function(a){return '<li>'+md(a[0])+' <b style="color:#ffb3d6">'+esc(a[1]||"")+'</b></li>';}).join("")+'</ul>':'')+'</div></div>'; });
  if(E.length) pan+='<div class="pl"><small>Gegner</small>'+E.map(function(e){return '<div class="gr"><b>'+esc(e.name)+(e.n>1?' ×'+e.n:'')+(e.solo&&!e.um?' <span class="tagsolo">Solo</span>':'')+'</b>'+etSv(e.st)+(e.note?'<i>'+md(e.note)+'</i>':'')+'</div>';}).join("")+'</div>';
  if(o.beute&&o.beute.length) pan+='<div class="pl"><small>Beute</small><ul>'+o.beute.map(function(b){return '<li>'+md(b[0])+' <span class="bonus">'+esc(b[1]||"")+'</span></li>';}).join("")+'</ul></div>';
  pan+='<button class="go'+(run?' run':'')+'" onclick="etStart(\''+o.id+'\')">'+(run?'Szene läuft':'▶ Szene starten')+'</button></aside>';
  var img=""; if(o.bild&&!/c_tech|c_jardin|c_konzert|c_sende/.test(o.bild)){ var wide=/c_garage/.test(o.bild); img=wide?'<div class="ea-imgw"><img src="img/'+o.bild+'.webp" alt=""></div>':'<img class="ea-imgf" src="img/'+o.bild+'.webp" alt="">'; }
  return '<article class="ea" id="o-'+o.id+'"><header><h3>'+esc(o.name)+'</h3>'+(o.sub?'<span class="sub">'+esc(o.sub)+'</span>':'')+(sid==="s3"?'<button class="abs-btn'+(ET.abs===o.id?' on':'')+'" onclick="etAbs(\''+o.id+'\')">Absetzpunkt</button>':'')+'<span class="pg">S. '+o.p+'</span></header><div class="ea-b">'+pan+img+etParas(o.text)+(o.extra||[]).map(blk).join("")+
   (o.gegner||[]).filter(function(g){return g.text;}).map(function(g){return umCard(g,false);}).join("")+'</div></article>';
}
function etAbs(id){ ET.abs=ET.abs===id?"":id; etSave(); render(); }
function sector(k){
  var d=window["ETR_"+k.toUpperCase()]; if(!d) return '<p>In Arbeit.</p>';
  var intro=(d.intro||[]).map(function(b){return b.x;}).join(" ");
  var out='<div class="osmain"><p class="sintro">'+md(intro)+'</p>'+d.orte.map(function(o){return eaCard(o,k);}).join("")+(d.outro?secs(d.outro):"")+(k==="s1"?secs(ETR_MISSION.filter(function(s){return s.id==="showdown"||s.id==="epilog";})):"")+'</div>';
  return out;
}
function etSecRail(){
  var app=document.getElementById("app"), cards=[].slice.call(app.querySelectorAll(".ea"));
  if(cards.length<2) return;
  var d=window["ETR_"+cur.toUpperCase()]||{orte:[]};
  var link=function(e,i){ var o=d.orte[i]; var u=o&&(o.gegner||[]).some(function(g){return g.vorzeichen;}); var h=e.querySelector("h3"); return '<a href="#" onclick="etGo(\''+e.id+'\');return false">'+esc(etShort(h?h.textContent:""))+(o&&o.ziel?'<span class="rn'+(u?' u':'')+'">'+o.wert+'</span>':'')+'</a>'; };
  var links=cards.map(link).join("");
  var main=app.querySelector(".osmain");
  var wrap=document.createElement("div"); wrap.className="osrail etsec";
  wrap.innerHTML='<nav class="osnav"><div class="otree"><div class="osub flatl">'+links+'</div></div><div class="oflat"><div class="orow osr">'+links+'</div></div></nav>';
  wrap.appendChild(main); app.appendChild(wrap);
}

/* ---------- Szenen-Tracker ---------- */
function etStart(id){
  var r=etOrt(id); if(!r) return; var o=r[0], T=[];
  etEnemies(o).forEach(function(e){ if(!e.st) return; for(var i=0;i<e.n;i++) T.push({name:e.name,v:e.st.threat,max:e.st.threat,att:e.st.attack,att0:e.st.attack,chall:e.st.chall||0,solo:!!e.solo,um:!!e.um}); });
  ET.scene={ort:id,name:o.name,round:1,ziel:{v:o.wert||0,max:o.wert||0,t:o.ziel||""},T:T,log:""};
  ET.here=id; etSave(); render();
}
function etPool(S){ var act=S.T.filter(function(t){return t.v>0;}); if(!act.length) return 0; return Math.max.apply(null,act.map(function(t){return t.att;}))+act.length-1; }
function etDock(){
  var d=document.getElementById("etdock"), S=ET.scene, on=S&&isAdv(cur);
  if(!on){ if(d) d.remove(); document.body.classList.remove("hasdock"); return; }
  if(!d){ d=document.createElement("div"); d.id="etdock"; d.className="dock"; document.body.appendChild(d); }
  document.body.classList.add("hasdock");
  var pool=etPool(S);
  var h='<div class="dk-l"><div><small>Szene</small><br><b>'+esc(S.name)+'</b></div><span class="rd">Runde '+S.round+'</span><div class="dk-pool">SL würfelt <b>'+pool+'</b></div><button class="dk-btn" onclick="etRound()">Runde beenden</button><button class="dk-btn alt" onclick="etEnd()">Szene beenden</button></div><div class="dk-r">';
  h+='<div class="tk zl"><span class="lab">Ziel</span><p>'+md(S.ziel.t)+'</p><div class="row"><div class="ctr"><button onclick="etZ(-1)">−</button><b>'+S.ziel.v+'<small>/'+S.ziel.max+'</small></b><button onclick="etZ(1)">+</button></div></div></div>';
  S.T.forEach(function(t,i){
    h+='<div class="tk'+(t.v===0?' down':'')+'"><h6>'+esc(t.name)+(t.solo&&!t.um?'<span class="tagsolo">Solo</span>':'')+'<span class="tagsolo" style="margin-left:auto;cursor:pointer;color:#ffb3d6" onclick="etDel('+i+')">✕</span></h6><div class="row"><div class="ctr"><button onclick="etT('+i+',-1)">−</button><b>'+t.v+'<small>/'+t.max+'</small></b><button onclick="etT('+i+',1)">+</button></div><div class="att"><span class="lab">Angriff</span><b>'+t.att+'</b></div></div>'+
      (t.v>0?'<div class="row" style="justify-content:space-between"><span class="note">'+(t.chall?'Hürde '+t.chall:'')+'</span></div>':'<div class="note">'+(t.solo?'Besiegt':'Kommt am Rundenende zurück (1W6)')+'</div>')+'</div>';
  });
  h+='<div class="tk add" onclick="etAddMenu()">+ Gegner</div></div>'+(S.log?'<div class="dk-log">'+esc(S.log)+'</div>':'');
  d.innerHTML=h;
}
function etT(i,dx){ var t=ET.scene.T[i]; t.v=Math.max(0,Math.min(t.max,t.v+dx)); if(t.v===0&&!t.solo) t.att=Math.max(0,t.att); etSave(); etDock(); }
function etZ(dx){ var z=ET.scene.ziel; z.v=Math.max(0,Math.min(z.max,z.v+dx)); etSave(); etDock(); }
function etDel(i){ ET.scene.T.splice(i,1); etSave(); etDock(); }
function etRound(){
  var S=ET.scene, log=[];
  S.T.forEach(function(t){
    if(t.solo) return;
    if(t.v===0){ var r=1+Math.floor(Math.random()*6); t.v=Math.min(t.max,r); t.att=Math.floor(t.att0/2); log.push(t.name+' kehrt zurück (+'+r+', Angriff '+t.att+')'); }
    else t.att+=1;
  });
  S.round++; S.log="Verstärkung: "+(log.join("; ")||"aktive Bedrohungen +1 Angriff"); etSave(); etDock();
}
function etEnd(){ var S=ET.scene; if(S.ziel.v===0||confirm("Ziel noch nicht erledigt – Szene trotzdem beenden?")){ ET.done[S.ort]=true; } ET.here=""; ET.scene=null; etSave(); render(); }
function etAddMenu(){
  var d=document.getElementById("etdock"); if(d.querySelector(".etmenu")) { d.querySelector(".etmenu").remove(); return; }
  var m=document.createElement("div"); m.className="etmenu";
  m.innerHTML=(window.ETR_GEGNER||[]).map(function(g,i){return '<button onclick="etAdd('+i+')">'+esc(g.name)+'</button>';}).join("");
  d.appendChild(m);
}
function etAdd(i){ var g=ETR_GEGNER[i]; if(!ET.scene){ return; } ET.scene.T.push({name:g.name,v:g.threat,max:g.threat,att:g.attack,att0:g.attack,chall:g.chall||0,solo:etSolo(g),um:false}); etSave(); etDock(); }
function etAddNew(i){ var g=ETR_GEGNER[i]; if(!ET.scene){ alert("Erst eine Szene starten."); return; } etAdd(i); }

/* ---------- Trupp ---------- */
function trupp(){
  var DE={BRAWL:"Nahkampf",CON:"Täuschen",FIX:"Basteln",SEARCH:"Suchen",SHOOT:"Schießen",SNEAK:"Schleichen",TERRIFY:"Einschüchtern"};
  return '<div class="trupp">'+(window.ETR_FIGUREN||[]).map(function(c){
    return '<div class="vc" id="v-'+c.id+'" onclick="etVc(this,event)"><img src="img/'+c.id+'.webp" alt=""><div><h4>'+esc(c.name)+'</h4><p class="hk">'+c.haken.map(esc).join("<br>")+'</p></div><div class="sr">'+Object.keys(DE).map(function(k){return '<span><small>'+DE[k]+'</small><b>'+c.stats[k]+'</b></span>';}).join("")+'</div><div class="ab">'+c.faehig.map(function(a){return '<span>'+esc(a.n)+'</span>';}).join("")+'</div></div>';
  }).join("")+'</div>';
}
function etVc(el,ev){
  if(el.classList.contains("open")){ if(ev.target.closest(".vclose")){ el.classList.remove("open"); el.innerHTML=el.__sum; } return; }
  var id=el.id.slice(2), c=ETR_FIGUREN.filter(function(x){return x.id===id;})[0]; if(!c) return;
  el.__sum=el.innerHTML; el.classList.add("open"); el.innerHTML='<button class="vclose">Schließen ✕</button>'+fig(c);
  el.scrollIntoView({block:"start"}); window.scrollBy(0,-70);
}

/* ---------- Gegner ---------- */
function gegnerView(){
  var cards=(window.ETR_GEGNER||[]).map(function(g,i){ var so=etSolo(g), rl=(g.regeln||[]).filter(function(r){return r[0]!=="Solo";});
    return '<div class="gc"><h5>'+esc(g.name)+(so?'<span class="tagsolo">Solo</span>':'')+'</h5><div class="big"><span><small>Bedrohung</small><b>'+g.threat+'</b></span><span><small>Angriff</small><b>'+g.attack+'</b></span><span'+(g.chall?'':' class="no"')+'><small>Hürde</small><b>'+(g.chall||"–")+'</b></span></div>'+etParas(g.text)+rl.map(function(r){return '<div class="rl"><b>'+esc(r[0])+':</b> '+md(r[1])+'</div>';}).join("")+(ET.scene?'<button class="add" onclick="etAddNew('+i+')">+ in Szene</button>':'')+'</div>'; }).join("");
  var U=[]; etSek().forEach(function(s){ s[1].orte.forEach(function(o){ (o.gegner||[]).forEach(function(g){ if(g.text) U.push([g,o,s[1]]); }); }); });
  var um='<div class="umg">'+U.map(function(u){ return umCard(u[0],false).replace('</h4>','</h4><span class="where">'+esc(u[2].titel)+' · '+esc(etShortN(u[1].name))+'</span>'); }).join("")+'</div>';
  return '<h2 class="mk-h" style="margin-top:4px">Gewöhnliche Gegner<small>S. 61</small></h2><div class="gg">'+cards+'</div><h2 class="mk-h">Übermenschen und Elite</h2>'+um;
}

/* ---------- Startseite ---------- */
function startView(){
  var flow=["Briefing","Sargsturz","Sektor 3","Sektor 2","Sektor 1","Showdown","Epilog"].map(function(t){return '<span>'+t+'</span>';}).join('<i>›</i>');
  var ov=overview().replace(/^<div class="hero"[\s\S]*?<\/div><\/div>/,"").replace(/<button class="go-adv"[\s\S]*$/,"");
  return '<div class="st-top"><img src="../assets/hero/etr-banner.webp" alt=""><div class="st-r"><p>Das Jahr 1943. Europa steht in Flammen. Ihr seid ein Kommandotrupp aus Vampiren mit einem einzigen Ziel: Adolf Hitlers gesamtes Blut aussaugen und die Nazi-Kriegsmaschine tödlich ins Wanken bringen.</p><div class="st-flow">'+flow+'</div><button class="go-adv" onclick="go(\'karte\')"><b>Abenteuer starten</b><small>Paris, 1943</small></button></div></div>'+ov;
}
