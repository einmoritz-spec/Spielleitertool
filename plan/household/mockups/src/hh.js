var B='../../../../household/img/';
function img(n,t){var k=n.split('-')[0];return B+k+'/'+(t?'thumb':'full')+'/'+n+'.webp';}
var IC='<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="1"/><circle cx="9" cy="10" r="1.6"/><path d="M4 18l5-5 4 4 3-3 4 4"/></svg>'+
 '<svg viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l5 5"/></svg>'+
 '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/></svg>'+
 '<svg viewBox="0 0 24 24"><path d="M4 5h6a2 2 0 0 1 2 2v12a2 2 0 0 0-2-2H4zM20 5h-6a2 2 0 0 0-2 2v12a2 2 0 0 1 2-2h6z"/></svg>'+
 '<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
function kopf(o){
 o=o||{};var t=o.tabs||['Welt','Regeln','Spielleitung'];
 var h='<div class="kopf" style="'+(o.bg?'background:'+o.bg:'')+'"><a class="logo"><img src="'+(o.logo||img('grundbuch-s-01-umschlag-vorspann-c'))+'"></a><div class="tabs">';
 if(!o.start) t.forEach(function(x){h+='<a class="'+(x==o.on?'on':'')+'" style="'+(x==o.on&&o.unterBg?'background:'+o.unterBg:'')+'">'+x+'</a>';});
 h+='</div><div class="ic">'+IC+'</div></div>';
 if(o.unter){h+='<div class="unter" style="'+(o.unterBg?'background:'+o.unterBg:'')+'">';o.unter.forEach(function(x){h+='<a class="'+(x==o.uon?'on':'')+'">'+x+'</a>';});
  if(o.sw){h+='<div class="sw">';o.sw.forEach(function(x){h+='<a class="'+(x==o.swon?'on':'')+'">'+x+'</a>';});h+='</div>';}
  h+='</div>';}
 document.write(h);
}
if(location.search.indexOf('clean')>=0)document.documentElement.classList.add('clean');
document.write('<style>.clean .note{display:none}</style>');
