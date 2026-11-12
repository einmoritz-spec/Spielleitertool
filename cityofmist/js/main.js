/* City of Mist – Übersetting: Start-Hub, Seitenaufbau, Burger-Menü. Hash-Schema siehe core.js. */
var CM_BOOK = { hub:"cm", ss:"cm", rw:"rw" };
function hubTile(cls,t,d,onclick){ return '<button class="tile'+cls+'" onclick="'+onclick+'"><b>'+t+'</b><small>'+d+'</small></button>'; }
function pageHub(){
  return '<div class="tiles hub">'+
   hubTile("","Grundregelwerk","Spieler:innen-Handbuch","go(\'rw\')")+
   hubTile("","Shadows &amp; Showdowns","Erweiterung","go(\'ss\')")+
   hubTile(" alt","Local Legends","Fall-Akte","switchTool(\'locallegends\')")+
   hubTile(" alt","Nights of Paynetown","Kampagne","switchTool(\'paynetown\')")+'</div>';
}
function kapBtn(k){ return '<button class="kap" onclick="gs(\''+k.go+'\')"><b>'+esc(k.t)+'</b><small>'+esc(k.d)+'</small>'+pg(k.p)+'</button>'; }
function pageSSStart(){
  var K=CM_NAV.kapitel;
  return '<section class="blk"><h2>Spieler</h2><div class="kaps">'+kapBtn(K[0])+'</div></section>'+
   '<section class="blk"><h2>Spielleitung</h2><div class="kaps">'+K.slice(1).map(kapBtn).join("")+'</div></section>';
}
function pageSS(r){
  var tabs='<nav class="tabs">'+CM_NAV.tabs.map(function(t){return '<button class="tab'+(t.id===r.tab?' on':'')+'" onclick="gs(\''+t.id+'\')">'+t.t+'</button>';}).join("")+'</nav>';
  var body = r.tab==="spieler"?pageSpieler(r): r.tab==="sl"?pageSL(r): pageSSStart();
  return tabs+body;
}
function render(){
  var r=route(), h = r.sys==="rw"?pageRW(r) : r.sys==="ss"?pageSS(r) : pageHub();
  if(window.BV) BV.setDefault(CM_BOOK[r.sys]);
  document.getElementById("app").innerHTML=h; window.scrollTo(0,0);
  document.title = "City of Mist";
  [".tab.on",".pill.on"].forEach(function(q){ var el=document.querySelector(q); if(el&&el.scrollIntoView) el.scrollIntoView({inline:"center",block:"nearest"}); });
  window.scrollTo(0,0);
}
function buildMenu(){
  var r=route(), p=document.getElementById("mmP"), h='';
  h+='<button class="mi" onclick="openMenu(false);srOpen()"><b>Suche</b></button>';
  if(r.sys==="rw") h+=CM_RW_NAV.extra.map(function(x){return '<button class="mi" onclick="openMenu(false);gr(\''+x.id+'\')"><b>'+x.t+'</b></button>';}).join("");
  h+='<div id="bvSettingsHost"></div>';
  if(window.BV) h+='<button class="mi" onclick="openMenu(false);BV.open(CM_BOOK[route().sys],1)"><b>Buch öffnen</b></button>';
  p.innerHTML=h;
  if(window.BV){ document.getElementById("bvSettingsHost").innerHTML=BV.settingsHTML(); BV.refresh(); }
}
function openMenu(on){ if(on) buildMenu(); document.getElementById("mmB").classList.toggle("on",on); document.getElementById("mmP").classList.toggle("on",on); }
window.addEventListener("hashchange",render);
render();
