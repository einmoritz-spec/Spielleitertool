var cur = (location.hash||"").slice(1) || SS_TOC[0].id;
function render(){
  var c = SS_TOC.filter(function(x){return x.id===cur;})[0] || SS_TOC[0];
  document.getElementById("app").innerHTML =
   '<nav class="tabs">'+SS_TOC.map(function(x){return '<button class="tab'+(x.id===c.id?' on':'')+'" onclick="go(\''+x.id+'\')">'+x.t+'</button>';}).join("")+'</nav>'+
   '<section class="card"><h2>'+c.t+'</h2><div class="en">'+c.en+' · S. '+c.p+'</div><div class="sek">'+c.sek.map(function(s){return '<div>'+s[0]+'<span>S. '+s[1]+'</span></div>';}).join("")+'</div></section>';
}
function go(id){ cur = id; location.hash = id; render(); window.scrollTo(0,0); }
function openMenu(on){ document.getElementById("mmB").classList.toggle("on",on); document.getElementById("mmP").classList.toggle("on",on); }
window.addEventListener("hashchange", function(){ cur = location.hash.slice(1) || SS_TOC[0].id; render(); });
render();
