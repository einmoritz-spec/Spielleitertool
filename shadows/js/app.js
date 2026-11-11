var cur = (location.hash||"").slice(1) || SS_TOC[0].id;
function pips(n){ return '<span class="pips">'+'◆'.repeat(n)+'</span>'; }
function tagList(a,cls){ return a.map(function(t){return '<span class="tg '+cls+'">'+t+'</span>';}).join(''); }
function kitCard(k){ return '<details class="kc" open><summary><b>'+k.name+'</b><i>'+k.typ+'</i><span class="pg">S. '+k.p+'</span></summary><div class="kb"><p class="my"><u>Mystery</u> '+k.mystery+'</p><p><u>Power Tags</u> '+tagList(k.power,'pw')+'</p><p><u>Weakness Tags</u> '+tagList(k.weak,'wk')+'</p></div></details>'; }
function reliktCard(r){ return '<details class="kc rel" open><summary><b>'+r.name+'</b><i>Relic</i><span class="pg">S. '+r.p+'</span></summary><div class="kb"><p class="sb">'+r.sub+'</p><p>'+r.text+'</p><p class="my"><u>Mystery</u> '+r.mystery.join(' · ')+'</p><p><u>Power Tags</u> '+tagList(r.power,'pw')+'</p><p><u>Weakness Tags</u> '+tagList(r.weak,'wk')+'</p><p class="imp"><label><input type="checkbox"> Theme Improvement – '+r.imp+'</label></p></div></details>'; }
function dangerCard(d){ return '<div class="dg"><div class="dh"><b>'+d.name+'</b> '+pips(d.rating)+'</div><div class="lim">'+d.limits+'</div>'+d.moves.map(function(m){return '<p><b>'+m[0]+':</b> '+m[1]+'</p>';}).join('')+'<div class="gmh">Spielleitung</div><ul>'+d.gm.map(function(g){return '<li>'+g+'</li>';}).join('')+'</ul></div>'; }
function ortCard(o){ return '<section class="ort"><header><h3>'+o.name+' <span class="pg">S. '+o.p+'</span></h3><div class="sub">'+o.sub+' · '+o.kat+'</div><div class="tz">'+o.teaser+'</div></header><div class="ocols"><div class="otxt">'+o.text.map(function(p){return '<p>'+p+'</p>';}).join('')+'</div><aside>'+dangerCard(o.danger)+'</aside></div></section>'; }
function proto(id){
  if(id==='spieler') return '<div class="pvh">Vorschau – Beispielkarten</div><div class="pgrid">'+kitCard(SS_PROTO.kit)+reliktCard(SS_PROTO.relikt)+'</div>';
  if(id==='orte') return '<div class="pvh">Vorschau – Beispiel-Eintrag</div>'+ortCard(SS_PROTO.ort);
  return '';
}
function render(){
  var c = SS_TOC.filter(function(x){return x.id===cur;})[0] || SS_TOC[0];
  document.getElementById("app").innerHTML =
   '<nav class="tabs">'+SS_TOC.map(function(x){return '<button class="tab'+(x.id===c.id?' on':'')+'" onclick="go(\''+x.id+'\')">'+x.t+'</button>';}).join("")+'</nav>'+
   '<section class="card"><h2>'+c.t+'</h2><div class="en">'+c.en+' · S. '+c.p+'</div><div class="sek">'+c.sek.map(function(s){return '<div>'+s[0]+'<span>S. '+s[1]+'</span></div>';}).join("")+'</div></section>'+proto(c.id);
}
function go(id){ cur = id; location.hash = id; render(); window.scrollTo(0,0); }
function openMenu(on){ document.getElementById("mmB").classList.toggle("on",on); document.getElementById("mmP").classList.toggle("on",on); }
window.addEventListener("hashchange", function(){ cur = location.hash.slice(1) || SS_TOC[0].id; render(); });
render();
