/* City of Mist – Übersetting: Start-Hub, Seitenaufbau, Burger-Menü. Hash-Schema siehe core.js. */
var CM_BOOK = { hub:"rw", ss:"cm", rw:"rw", tb:"rw" };
function hubTile(cls,t,d,onclick){ return '<button class="tile'+cls+'" onclick="'+onclick+'"><b>'+t+'</b><small>'+d+'</small></button>'; }
function hubLinks(arr){ return '<nav class="hl">'+arr.map(function(x){return '<button class="chip" onclick="'+x[1]+'">'+x[0]+'</button>';}).join("")+'</nav>'; }
function hubCard(cls,t,d,main,links){ return '<div class="hc'+cls+'"><button class="hh" onclick="'+main+'"><b>'+t+'</b><small>'+d+'</small></button>'+hubLinks(links)+'</div>'; }
function ovCard(img,t,main,links,big){
  if(links.length>3) links=links.slice(0,2).concat([["+"+(links.length-2),main]]);
  return '<div class="ovc-card"><button class="ovc-img'+(img?'':' noimg')+'" onclick="'+main+'" aria-label="'+t+'">'+(img?'<img src="'+img+'" alt="" loading="lazy">':'<span>'+big+'</span>')+'</button>'+
    '<div class="ovc-b"><h3 onclick="'+main+'">'+t+'</h3>'+hubLinks(links)+'</div></div>';
}
function pageHub(){
  return '<div class="ovc"><div class="ovc-hero"><img src="../assets/hero/com-header.webp" alt="City of Mist"></div><div class="ovc-grid">'+
   ovCard("../assets/hero/com-art.webp","Grundregelwerk","go(\'rw\')",[["Welt","gr(\'welt\')"],["Charakter","gr(\'charakter\')"],["Regeln","gr(\'regeln\')"],["Entwicklung","gr(\'entwicklung\')"],["Buch (PDF)","BV.open(\'rw\',1)"]])+
   ovCard("../assets/hero/ss-art.webp","Shadows &amp; Showdowns","go(\'ss\')",[["Spieler","gs(\'spieler\')"],["Orte & NSCs","gs(\'sl/orte\')"],["Avatare","gs(\'sl/avatare\')"],["Gatekeeper","gs(\'sl/gatekeeper\')"],["Buch (PDF)","BV.open(\'cm\',1)"]])+
   ovCard("../assets/hero/com-regeln.webp","Kurz nachschlagen","gr(\'regeln/kurzreferenz\')",[["Kurzreferenz","gr(\'regeln/kurzreferenz\')"],["Aktionen","gr(\'regeln/aktionen\')"],["Zustände","gr(\'regeln/zustaende\')"],["Hinweise & Momentum","gr(\'regeln/hinweise\')"],["Nebencharaktere","gr(\'regeln/nebencharaktere\')"]])+
   ovCard("img/tbh_enclave.webp","Themenbücher","go(\'tb\')",[["Mythos","go(\'tb\')"],["Logos","go(\'tb\')"],["Alle Bücher, ein Ort","go(\'tb\')"]])+
   ovCard("../assets/hero/ll-header.webp","Local Legends","switchTool(\'locallegends\')",[])+
   ovCard("../assets/hero/com-nights.webp","Nights of Paynetown","switchTool(\'paynetown\')",[])+
   '</div></div>';
}
function secRows(items){ return '<ul class="rows">'+items.map(function(x){return '<li><button onclick="'+x[1]+'"><span>'+esc(x[0])+'</span><i>'+(x[2]?'S. '+x[2]:'')+'</i></button></li>';}).join("")+'</ul>'; }
function kapCard(num,t,d,p,main,rows){ return '<div class="kc"><button class="kh" onclick="'+main+'">'+(num?'<em>'+num+'</em>':'')+'<span><b>'+esc(t)+'</b><small>'+esc(d)+'</small></span>'+(p?'<i>S. '+p+'</i>':'')+'</button>'+secRows(rows)+'</div>'; }
function pageSSStart(){
  var N=CM_NAV, sp=N.spieler.map(function(s){return [s.t,"gs(\'spieler/"+s.id+"\')",s.p];});
  var sl=function(id){var s=N.sl.filter(function(x){return x.id===id;})[0]; var cats=id==="orte"?CM_ORTE_CATS:id==="avatare"?CM_AV_CATS:CM_GK_CATS; return cats.map(function(c){return [c.t,"gs(\'sl/"+id+"/"+c.id+"\')",c.p];});};
  var K=N.kapitel;
  return '<section class="blk"><h2>Spieler <button class="chip bookbtn" onclick="BV.open(\'cm\',1)">Buch öffnen</button></h2><div class="kcs">'+kapCard("1",K[0].d,"If Dreams Could Kill",K[0].p,"gs(\'spieler\')",sp)+'</div></section>'+
   '<section class="blk"><h2>Spielleitung</h2><div class="kcs">'+
   kapCard("2","Orte & NSCs","Overlooked Attractions",K[1].p,"gs(\'sl/orte\')",sl("orte"))+
   kapCard("3","Avatare","Don’t Believe the Truth",K[2].p,"gs(\'sl/avatare\')",sl("avatare"))+
   kapCard("4","Gatekeeper","Suits Unveiled",K[3].p,"gs(\'sl/gatekeeper\')",sl("gatekeeper"))+'</div></section>';
}
function pageSS(r){
  var tabs='<nav class="tabs">'+CM_NAV.tabs.map(function(t){return '<button class="tab'+(t.id===r.tab?' on':'')+'" onclick="gs(\''+t.id+'\')">'+t.t+'</button>';}).join("")+'</nav>';
  var body = r.tab==="spieler"?pageSpieler(r): r.tab==="sl"?pageSL(r): pageSSStart();
  return tabs+body;
}
function render(){
  var r=route(), h = r.sys==="rw"?pageRW(r) : r.sys==="ss"?pageSS(r) : r.sys==="tb"?pageTB() : pageHub();
  if(window.BV) BV.setDefault(CM_BOOK[r.sys]);
  var app=document.getElementById("app"); app.className="shell"+(r.sys==="rw"||r.sys==="ss"||r.sys==="tb"?" wide":" ovshell"); app.innerHTML=h; window.scrollTo(0,0);
  document.title = "City of Mist";
  [".tab.on",".pill.on"].forEach(function(q){ var el=document.querySelector(q); if(el&&el.scrollIntoView) el.scrollIntoView({inline:"center",block:"nearest"}); });
  window.scrollTo(0,0);
}
function buildMenu(){
  var r=route(), p=document.getElementById("mmP"), h='';
  h+='<button class="mi" onclick="openMenu(false);go(\'tb\')"><b>Themenbücher</b></button>';
  h+='<button class="mi" onclick="openMenu(false);srOpen()"><b>Suche</b></button>';
  h+='<button class="mi" onclick="openMenu(false);Galerie.open(\'cityofmist\')"><b>Galerie</b></button>';
  if(r.sys==="rw") h+=CM_RW_NAV.extra.map(function(x){return '<button class="mi" onclick="openMenu(false);gr(\''+x.id+'\')"><b>'+x.t+'</b></button>';}).join("");
  h+='<div id="bvSettingsHost"></div>';
  if(window.BV) h+='<button class="mi" onclick="openMenu(false);BV.open(CM_BOOK[route().sys],1)"><b>Buch öffnen</b></button>';
  p.innerHTML=h;
  if(window.BV){ document.getElementById("bvSettingsHost").innerHTML=BV.settingsHTML(); BV.refresh(); }
}
function openMenu(on){ if(on) buildMenu(); document.getElementById("mmB").classList.toggle("on",on); document.getElementById("mmP").classList.toggle("on",on); }
window.addEventListener("hashchange",render);
render();
