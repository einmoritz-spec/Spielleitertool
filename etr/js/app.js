/* Eat the Reich – Renderer. Daten kommen aus js/data/*.js (globale ETR_*-Variablen). */
/* Zwei Bereiche: Übersicht (Vorbereitung, nur über Karten/Burger erreichbar) und Abenteuer (Tab-Leiste: Karte, Sektoren, Gegner) */
var ETR_TABS = [
 {id:"karte",t:"Karte"},{id:"s3",t:"Sektor 3"},{id:"s2",t:"Sektor 2"},{id:"s1",t:"Sektor 1"},{id:"gegner",t:"Gegner"}];
var ETR_MENU = [
 {id:"intro",t:"Einführung"},{id:"regeln",t:"Regeln"},{id:"figuren",t:"Figuren"},{id:"mission",t:"Mission"},{id:"leitung",t:"Spielleitung"},{id:"check",t:"Evil-Check"},{id:"anhang",t:"Anhang"}];
var ETR_ALL = ETR_TABS.concat(ETR_MENU);
function parseHash(){ var h=(location.hash||"").slice(1).split("/"); return {id:h[0]||"einstieg",sec:h[1]||""}; }
var cur = parseHash().id;
function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
function md(s){ return esc(s).replace(/\*\*(.+?)\*\*/g,"<b>$1</b>").replace(/==(.+?)==/g,'<span class="hi">$1</span>').replace(/\n/g,"<br>"); }
function pgl(p){ return p ? '<span class="pg">S. '+p+'</span>' : ''; }
function blk(b){
  if(b.t==="h") return '<h3>'+md(b.x)+'</h3>';
  if(b.t==="p") return '<p>'+md(b.x)+'</p>';
  if(b.t==="ul") return '<ul>'+b.items.map(function(i){return '<li>'+md(i)+'</li>';}).join("")+'</ul>';
  if(b.t==="box") return '<div class="box"><div class="bt">'+md(b.titel)+'</div>'+b.b.map(blk).join("")+'</div>';
  if(b.t==="bsp") return '<div class="bsp"><div class="bt">'+md(b.titel)+'</div>'+b.b.map(blk).join("")+'</div>';
  if(b.t==="stamp") return '<div class="stamp">'+esc(b.x)+'</div>';
  if(b.t==="img") return '<img src="img/'+b.src+'.webp" alt="" style="width:100%;border-radius:6px;margin:6px 0 12px">';
  if(b.t==="tab") return '<table class="tbl"><thead><tr>'+b.kopf.map(function(k){return '<th>'+esc(k)+'</th>';}).join("")+'</tr></thead><tbody>'+b.z.map(function(r){return '<tr>'+r.map(function(c){return '<td>'+md(c)+'</td>';}).join("")+'</tr>';}).join("")+'</tbody></table>';
  return '';
}
function sec(s,open){ return '<details class="sec" id="s-'+s.id+'"'+(open?' open':'')+'><summary><h2>'+esc(s.titel)+'</h2>'+pgl(s.p)+'</summary><div class="bd">'+s.b.map(blk).join("")+'</div></details>'; }
function secs(list){ return (list||[]).map(function(s,i){ return sec(s,i===0); }).join(""); }
function uses(n){ var h=""; for(var i=0;i<n;i++) h+='<i'+(i===n-1&&n>1?' class="bn"':'')+'></i>'; return '<span class="uses">'+h+'</span>'; }
function fig(c){
  var DE={BRAWL:"Nahkampf",CON:"Täuschen",FIX:"Basteln",SEARCH:"Suchen",SHOOT:"Schießen",SNEAK:"Schleichen",TERRIFY:"Einschüchtern"};
  var st=Object.keys(DE).map(function(k){return '<div class="stat" title="'+k+'"><small>'+DE[k]+'</small><b>'+c.stats[k]+'</b></div>';}).join("");
  var eq=c.ausr.map(function(e){return '<li><b>'+esc(e.n)+'</b>'+(e.u?uses(e.u):'')+' <span class="bonus">'+esc(e.b||"")+'</span>'+(e.x?' – '+md(e.x):'')+'</li>';}).join("");
  var bl=""; for(var i=0;i<=10;i++) bl+='<i>'+i+'</i>';
  var ab=c.faehig.map(function(a){return '<li class="ab"><b>'+esc(a.n)+'.</b>'+(a.en?' <small>('+esc(a.en)+')</small>':'')+' '+md(a.x)+'</li>';}).join("");
  var ad=c.adv.map(function(a){return '<li class="ab"><label><input type="checkbox"> <b>'+esc(a.n)+'.</b>'+(a.en?' <small>('+esc(a.en)+')</small>':'')+' '+md(a.x)+'</label></li>';}).join("");
  var inj=c.inj.map(function(col,i){return '<div><b>'+["1–2","3–4","5–6"][i]+'</b>'+col.map(function(x){return '<label><input type="checkbox"> <span>'+md(x)+'</span></label>';}).join("")+'</div>';}).join("");
  return '<section class="fig" id="f-'+c.id+'"><div class="art"><img src="img/'+c.id+'.webp" alt="'+esc(c.name)+'"></div><div class="coffin"><h2>'+esc(c.name)+'</h2><p class="hooks">'+c.haken.map(esc).join("<br>")+'</p>'+
   '<h4>Werte</h4><div class="statrow">'+st+'</div><h4>Ausrüstung</h4><ul>'+eq+'<li><b>Beute (Loot)</b> '+uses(3)+'</li></ul>'+
   '<h4>Blut</h4><div class="bloodtrack">'+bl+'</div><h4>Fähigkeiten</h4><ul>'+ab+'</ul><h4>Fortschritte</h4><ul>'+ad+'</ul>'+
   '<h4>Verletzungen</h4><div class="inj">'+inj+'</div><div class="last">Letztes Gefecht: '+md(c.last)+'</div>'+(c.fussnote?'<p style="margin-top:8px;font-size:13px">'+md(c.fussnote)+'</p>':'')+'</div>'+'</section>'+(c.who?'<div class="who" style="margin:-10px 0 22px"><b>Für wen:</b> '+md(c.who)+'</div>':'');
}
function ort(o){
  var h='<details class="loc" id="o-'+o.id+'"><summary><h3>'+esc(o.name)+'</h3>'+(o.sub?'<span class="sub">'+esc(o.sub)+'</span>':'')+pgl(o.p)+'</summary><div class="lb"><div class="lt">'+(o.bild?'<img src="img/'+o.bild+'.webp" alt="">':'')+(o.text||[]).map(function(t){return '<p>'+md(t)+'</p>';}).join("")+(o.extra||[]).map(blk).join("")+'</div><div class="lr">';
  if(o.ziel) h+='<div class="obj"><small>Ziel (Objective)</small><b>'+md(o.ziel)+'</b>'+(o.wert!=null?'<span class="rate">'+o.wert+(o.chall?' · Challenge '+o.chall:'')+'</span>':'')+'</div>';
  if(o.feinde) h+='<div class="lst"><small>Gegner</small><ul>'+o.feinde.map(function(f){return '<li>'+md(f)+'</li>';}).join("")+'</ul></div>';
  if(o.beute) h+='<div class="lst"><small>Beute (Loot)</small><ul>'+o.beute.map(function(f){return '<li>'+md(f[0])+' <span class="bonus">'+esc(f[1]||"")+'</span></li>';}).join("")+'</ul></div>';
  (o.neben||[]).forEach(function(n){ h+='<div class="obj" style="border-left-color:var(--teal)"><small>Nebenziel (Secondary Objective)</small><b>'+md(n.name)+'</b>'+(n.wert!=null?'<span class="rate">'+n.wert+'</span>':'')+(n.x?'<p style="color:#fff;margin:6px 0 0">'+md(n.x)+'</p>':'')+(n.ausr?'<ul>'+n.ausr.map(function(a){return '<li style="color:#fff">'+md(a[0])+' <span class="bonus" style="color:#ffb3d6">'+esc(a[1]||"")+'</span></li>';}).join("")+'</ul>':'')+'</div>'; });
  (o.gegner||[]).forEach(function(g){ h+=enemy(g); });
  return h+'</div></div></details>';
}
function enemy(g){
  var h='<div class="enemy"><h4>'+esc(g.name)+'</h4>'+(g.bild?'<img class="eimg" src="img/'+g.bild+'.webp" alt="">':'')+(g.text||[]).map(function(t){return '<p>'+md(t)+'</p>';}).join("")+'<div class="st">'+(g.threat!=null?'<span>Threat '+g.threat+'</span>':'')+(g.attack!=null?'<span>Attack '+g.attack+'</span>':'')+(g.chall!=null?'<span>Challenge '+g.chall+'</span>':'')+'</div>'+(g.attackx?'<p>'+md(g.attackx)+'</p>':'');
  (g.regeln||[]).forEach(function(r){ h+='<div class="rl"><b>'+esc(r[0])+':</b> '+md(r[1])+'</div>'; });
  if(g.vorzeichen) h+='<div class="rl"><b>Vorzeichen:</b> '+md(g.vorzeichen)+'</div>';
  if(g.blut) h+='<div class="rl"><b>Blutgeschmack:</b> '+md(g.blut)+'</div>';
  return h+'</div>';
}
function sector(k){ var d=window["ETR_"+k.toUpperCase()]; if(!d) return '<p>In Arbeit.</p>'; return (d.intro?secs([{id:"intro-"+k,titel:d.titel,p:d.p,b:d.intro}]):'')+'<div class="locgrid">'+(d.orte||[]).map(ort).join("")+'</div>'+(d.outro?secs(d.outro):''); }
function gegner(){ return secs([{id:"gegner",titel:"Gewöhnliche Gegner (Common Enemies)",p:61,b:[{t:"p",x:"Werte für die Standard-Gegner. Bedrohung = Threat, Angriff = Attack, Hürde = Challenge. Wo „Solo“ steht, nutzt der Gegner die Verstärkungsregeln nicht."}]}])+'<div class="enemies">'+(window.ETR_GEGNER||[]).map(enemy).join("")+'</div>'; }
function figuren(){ return secs(window.ETR_FIGINTRO)+(window.ETR_FIGUREN||[]).map(fig).join(""); }
function hero(){ return '<div class="hero" style="background-image:url(img/cover.webp)"><div class="ht"><b>Eat the Reich</b><span>Das Jahr 1943. Europa steht in Flammen. Ihr seid ein Kommandotrupp aus Vampiren mit einem einzigen Ziel: Adolf Hitlers gesamtes Blut aussaugen und die Nazi-Kriegsmaschine tödlich ins Wanken bringen.</span></div></div>'; }

function pgRange(list){ var p=(list||[]).map(function(x){return x.p;}).filter(Boolean); return p.length?"S. "+Math.min.apply(null,p)+"–"+Math.max.apply(null,p):""; }
function ovCard(id,t,list,rows){
  var r=(rows||list.map(function(x){return [x.titel,x.p];})).map(function(x){return '<li><button onclick="go(\''+id+'/'+(x[2]||"")+'\')"><span>'+esc(x[0])+'</span><i>'+(x[1]?'S. '+x[1]:'')+'</i></button></li>';}).join("");
  return '<div class="oc"><button class="oh" onclick="go(\''+id+'\')"><b>'+t+'</b><i>'+(list?pgRange(list):"")+'</i></button><ul>'+r+'</ul></div>';
}
function overview(){
  var fg=(window.ETR_FIGUREN||[]).map(function(c){return [c.name,null,c.id];});
  return hero()+'<h2 class="ovh">Vorbereitung</h2><div class="ovg">'+
   ovCard("intro","Einführung",window.ETR_EINSTIEG)+ovCard("regeln","Regeln",window.ETR_REGELN)+
   ovCard("figuren","Figuren",(window.ETR_FIGINTRO||[]),fg)+
   ovCard("mission","Mission",window.ETR_MISSION)+ovCard("leitung","Spielleitung",window.ETR_LEITUNG)+
   ovCard("check","Evil-Check",window.ETR_CHECK)+ovCard("anhang","Anhang",window.ETR_ANHANG)+'</div>'+
   '<button class="go-adv" onclick="go(\'karte\')"><b>Abenteuer starten</b><small>Paris, 1943</small></button>';
}
function isAdv(id){ return ETR_TABS.some(function(t){return t.id===id;}); }
function render(){
  var hp=parseHash(); cur=hp.id; if(!ETR_ALL.some(function(t){return t.id===cur;})&&cur!=="einstieg") cur="einstieg";
  var tabs=isAdv(cur)?'<nav class="tabs">'+ETR_TABS.map(function(x){return '<button class="tab'+(x.id===cur?' on':'')+'" onclick="go(\''+x.id+'\')">'+x.t+'</button>';}).join("")+'</nav>':'';
  var m={einstieg:overview,intro:function(){return secs(window.ETR_EINSTIEG);},figuren:figuren,regeln:function(){return secs(window.ETR_REGELN);},mission:function(){return secs(window.ETR_MISSION);},leitung:function(){return secs(window.ETR_LEITUNG);},karte:function(){return secs(window.ETR_KARTE);},s3:function(){return sector("s3");},s2:function(){return sector("s2");},s1:function(){return sector("s1");},check:function(){return secs(window.ETR_CHECK);},gegner:gegner,anhang:function(){return secs(window.ETR_ANHANG);}};
  var mi=ETR_MENU.filter(function(x){return x.id===cur;})[0];
  document.getElementById("app").innerHTML=tabs+(mi?'<div class="crumb"><button onclick="go(\'einstieg\')">Übersicht</button> › '+mi.t+'</div>':'')+(m[cur]||overview)();
  var t=document.querySelector(".tab.on"); if(t&&t.scrollIntoView) t.scrollIntoView({inline:"center",block:"nearest"});
  if(hp.sec){ var el=document.getElementById("s-"+hp.sec)||document.getElementById("f-"+hp.sec); if(el){ if(el.tagName==="DETAILS") el.open=true; el.scrollIntoView({block:"start"}); window.scrollBy(0,-70); return; } }
  window.scrollTo(0,0);
}
function go(id){ if(location.hash==='#'+id){ render(); } else location.hash=id; }
function buildMenu(){
  var p=document.getElementById("mmP");
  p.innerHTML='<button class="mi'+(cur==="einstieg"?' on':'')+'" onclick="openMenu(false);go(\'einstieg\')"><b>Übersicht</b></button>'+ETR_MENU.map(function(x){return '<button class="mi'+(x.id===cur?' on':'')+'" onclick="openMenu(false);go(\''+x.id+'\')"><b>'+x.t+'</b></button>';}).join("")+'<button class="mi adv'+(isAdv(cur)?' on':'')+'" onclick="openMenu(false);go(\'karte\')"><b>Abenteuer starten</b></button><div id="bvSettingsHost"></div>'+(window.BV?'<button class="mi" onclick="openMenu(false);BV.open(\'etr\',1)"><b>Buch öffnen</b></button>':'');
  if(window.BV){ document.getElementById("bvSettingsHost").innerHTML=BV.settingsHTML(); BV.refresh(); }
}
function openMenu(on){ if(on) buildMenu(); document.getElementById("mmB").classList.toggle("on",on); document.getElementById("mmP").classList.toggle("on",on); }
function openSearch(){ document.getElementById("searchModal").classList.add("on"); document.getElementById("searchInput").focus(); }
function closeSearch(){ document.getElementById("searchModal").classList.remove("on"); }
function runSearch(q){
  q=(q||"").trim().toLowerCase(); var out=document.getElementById("searchResults"); if(q.length<2){ out.innerHTML=""; return; }
  var hits=[];
  function strip(h){ return h.replace(/<[^>]+>/g," "); }
  ETR_ALL.forEach(function(tb){
    var save=cur; cur=tb.id; var html=""; try{ var m={intro:window.ETR_EINSTIEG,regeln:window.ETR_REGELN,mission:window.ETR_MISSION,leitung:window.ETR_LEITUNG,karte:window.ETR_KARTE,check:window.ETR_CHECK,anhang:window.ETR_ANHANG};
      if(m[tb.id]) (m[tb.id]||[]).forEach(function(s){ var t=strip(s.b.map(blk).join(" ")); if((s.titel+" "+t).toLowerCase().indexOf(q)>-1) hits.push([tb,s.titel,t]); });
      if(tb.id==="gegner") (window.ETR_GEGNER||[]).forEach(function(g){ var t=strip(enemy(g)); if((g.name+" "+t).toLowerCase().indexOf(q)>-1) hits.push([tb,g.name,t]); });
      if(tb.id==="figuren") (window.ETR_FIGUREN||[]).forEach(function(c){ var t=strip(fig(c)); if(t.toLowerCase().indexOf(q)>-1) hits.push([tb,c.name,t]); });
      if(/^s[123]$/.test(tb.id)){ var d=window["ETR_"+tb.id.toUpperCase()]; if(d) d.orte.forEach(function(o){ var t=strip(ort(o)); if(t.toLowerCase().indexOf(q)>-1) hits.push([tb,o.name,t]); }); }
    }catch(e){} cur=save; });
  out.innerHTML=hits.slice(0,40).map(function(h,i){ var t=h[2], k=t.toLowerCase().indexOf(q); var sn=k>-1?t.substr(Math.max(0,k-40),120):""; return '<button class="sr" onclick="closeSearch();go(\''+h[0].id+'\')"><b>'+esc(h[1])+'</b><small>'+h[0].t+' · …'+esc(sn)+'…</small></button>'; }).join("")||'<p>Nichts gefunden.</p>';
}
window.addEventListener("hashchange",render);
render();
