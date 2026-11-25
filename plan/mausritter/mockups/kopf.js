function kopf(tabs,an,dunkel){
  var I='<span class="ico">'+
  '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/></svg>'+
  '<svg viewBox="0 0 24 24"><path d="M4 5c3-1 6-1 8 1 2-2 5-2 8-1v14c-3-1-6-1-8 1-2-2-5-2-8-1z"/><path d="M12 6v14"/></svg>'+
  '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg>'+
  '<svg viewBox="0 0 24 24"><rect x="4" y="4" width="7" height="7"/><rect x="13" y="4" width="7" height="7"/><rect x="4" y="13" width="7" height="7"/><rect x="13" y="13" width="7" height="7"/></svg>'+
  '<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg></span>';
  var t=(tabs||[]).map(function(x){return '<span class="tab'+(x==an?' an':'')+'">'+x+'</span>'}).join('');
  document.write('<div class="kopf"'+(dunkel?' style="background:transparent;position:absolute;left:0;right:0;top:0"':'')+'><img class="logo" src="a/logo-weiss.png">'+t+I+'</div>');
}
