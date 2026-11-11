/* City of Mist – Übersetting. Hash: #start | #spieler[/<abschnitt>] | #sl/<orte|avatare|gatekeeper>[/<kategorie>] */
function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
function md(s){ return esc(s).replace(/\*\*(.+?)\*\*/g,"<b>$1</b>"); }
function pg(p){ return p ? '<span class="pg">S. '+p+'</span>' : ''; }
function pips(n){ return n>0 ? '<span class="pips">'+'◆'.repeat(n)+'</span>' : ''; }
function route(){ var h=(location.hash||"").slice(1).split("/"); return {tab:h[0]||"start",sub:h[1]||"",cat:h[2]||""}; }
function go(path){ location.hash=path; }
function dangerCard(d){
  return '<div class="dg"><div class="dh"><b>'+esc(d.name)+'</b> '+pips(d.rating)+'</div>'+(d.text?d.text.map(function(t){return '<p class="dtx">'+md(t)+'</p>';}).join(""):'')+(d.limits?'<div class="lim">'+esc(d.limits)+'</div>':'')+
   (d.moves||[]).map(function(m){return '<p><b>'+esc(m[0])+':</b> '+md(m[1])+'</p>';}).join("")+
   (d.gm&&d.gm.length?'<div class="gmh">Spielleitung</div><ul>'+d.gm.map(function(g){return '<li>'+md(g)+'</li>';}).join("")+'</ul>':'')+'</div>';
}
function tagsHtml(a,c){ return a.map(function(t){return '<span class="tg '+c+'">'+esc(t)+'</span>';}).join(""); }
function themeCard(t){ return '<div class="thm"><div class="th"><b>'+esc(t.name)+'</b><i>'+esc(t.typ)+'</i></div><p class="idn">'+esc(t.identity)+'</p><p><u>Power Tags</u> '+tagsHtml(t.power,"pw")+'</p><p><u>Weakness Tags</u> '+tagsHtml(t.weak,"wk")+'</p><p class="imp">'+md(t.imp)+'</p></div>'; }
function ortCard(o){
  return '<details class="ort" id="o-'+o.id+'"><summary><h3>'+esc(o.name)+'</h3>'+pg(o.p)+'<span class="tz">'+esc(o.teaser)+'</span></summary><div class="ob">'+
   (o.mythos?'<div class="myth">'+esc(o.mythos)+'</div>':'')+
   '<div class="ocols'+(o.dangers.length?'':' solo')+'"><div class="otxt">'+(o.bild?'<img class="obild" src="img/'+o.bild+'.webp" alt="'+esc(o.name)+'" loading="lazy">':'')+o.text.map(function(t){return '<p>'+md(t)+'</p>';}).join("")+(o.extra||[]).map(function(t){return '<p class="ex">'+md(t)+'</p>';}).join("")+(o.listen||[]).map(function(l){return '<h4 class="lh">'+esc(l.t)+'</h4>'+(l.pre?'<p>'+md(l.pre)+'</p>':'')+'<ul class="ll">'+l.items.map(function(i){return '<li>'+md(i)+'</li>';}).join("")+'</ul>';}).join("")+(o.themen||[]).map(themeCard).join("")+'</div><aside>'+o.dangers.map(dangerCard).join("")+'</aside></div></div></details>';
}
function stub(name,p){ return '<div class="stub"><span>'+esc(name)+'</span>'+pg(p)+'<em>nur Original</em></div>'; }
function itemsList(items){ return '<div class="stubs">'+items.map(function(i){return stub(i[0],i[1]);}).join("")+'</div>'; }
function pills(base,list,curId){ return '<nav class="pills">'+list.map(function(x){return '<button class="pill'+(x.id===curId?' on':'')+'" onclick="go(\''+base+'/'+x.id+'\')">'+esc(x.t)+'</button>';}).join("")+'</nav>'; }
function sectionHead(s){ return '<div class="sh"><h2>'+esc(s.t)+'</h2><span class="en">'+esc(s.en||"")+'</span>'+pg(s.p)+'</div>'; }
function pageStart(){
  var tiles=[["spieler","Spieler","Themenbücher, Charakterbau, Relikte, Vertraute"],["sl","Spielleitung","Orte & NSCs, Avatare, Gatekeeper"]].map(function(t){return '<button class="tile" onclick="go(\''+t[0]+'\')"><b>'+t[1]+'</b><small>'+t[2]+'</small></button>';}).join("")+
   [["locallegends","Local Legends","Fall-Akte"],["paynetown","Nights of Paynetown","Kampagne"]].map(function(t){return '<button class="tile alt" onclick="switchTool(\''+t[0]+'\')"><b>'+t[1]+'</b><small>'+t[2]+'</small></button>';}).join("");
  var kap=CM_NAV.kapitel.map(function(k){return '<button class="kap" onclick="go(\''+k.go+'\')"><b>'+esc(k.t)+'</b><small>'+esc(k.d)+'</small>'+pg(k.p)+'</button>';}).join("");
  return '<div class="tiles">'+tiles+'</div><section class="blk"><h2>Shadows &amp; Showdowns</h2><div class="kaps">'+kap+'</div></section>';
}
function hero(n){ return '<img class="hero" src="img/h_'+n+'.webp" alt="">'; }
function pageSpieler(r){
  var list=CM_NAV.spieler, s=list.filter(function(x){return x.id===r.sub;})[0]||list[0];
  return pills("spieler",list,s.id)+'<section class="blk">'+sectionHead(s)+itemsList(s.items)+'</section>';
}
function pageSL(r){
  var list=CM_NAV.sl, s=list.filter(function(x){return x.id===r.sub;})[0]||list[0];
  var h=pills("sl",list,s.id);
  if(s.id!=="orte") return h+'<section class="blk">'+sectionHead(s)+itemsList(s.items)+'</section>';
  var cat=CM_ORTE_CATS.filter(function(c){return c.id===r.cat;})[0]||CM_ORTE_CATS[0];
  var chips='<nav class="chips">'+CM_ORTE_CATS.map(function(c){var n=(CM_ORTE[c.id]||[]).length;return '<button class="chip'+(c.id===cat.id?' on':'')+'" onclick="go(\'sl/orte/'+c.id+'\')">'+esc(c.t)+(n?'<i>'+n+'</i>':'')+'</button>';}).join("")+'</nav>';
  var have=CM_ORTE[cat.id]||[], names={}; have.forEach(function(o){names[o.name]=o;});
  var body=cat.e.map(function(e){ return names[e[0]]?ortCard(names[e[0]]):stub(e[0],e[1]); }).join("");
  return h+chips+'<section class="blk">'+sectionHead(cat)+(cat.sub?'<p class="catsub">'+esc(cat.sub)+'</p>':'')+'<div class="orte">'+body+'</div></section>';
}
function render(){
  var r=route(), tabs='<nav class="tabs">'+CM_NAV.tabs.map(function(t){return '<button class="tab'+(t.id===r.tab?' on':'')+'" onclick="go(\''+t.id+'\')">'+t.t+'</button>';}).join("")+'</nav>';
  var body = r.tab==="spieler"?pageSpieler(r): r.tab==="sl"?pageSL(r): pageStart();
  document.getElementById("app").innerHTML=tabs+body; window.scrollTo(0,0);
}
function buildMenu(){
  var p=document.getElementById("mmP");
  p.innerHTML='<div id="bvSettingsHost"></div>'+(window.BV?'<button class="mi" onclick="openMenu(false);BV.open(\'cm\',1)"><b>Buch öffnen</b></button>':'');
  if(window.BV){ document.getElementById("bvSettingsHost").innerHTML=BV.settingsHTML(); BV.refresh(); }
}
function openMenu(on){ if(on) buildMenu(); document.getElementById("mmB").classList.toggle("on",on); document.getElementById("mmP").classList.toggle("on",on); }
window.addEventListener("hashchange",render);
render();
