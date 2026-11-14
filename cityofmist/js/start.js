/* City of Mist – Startseiten von Grundregelwerk und Shadows & Showdowns (Bildkacheln wie die Hub-Startseite).
   Der Inhalt eines Kapitels erscheint beim Drüberfahren über die Kachel; auf dem Handy führt ein Tipp ins Kapitel. */
function csCard(img, num, t, d, p, main, rows, pos){
  var ov = rows.map(function(r){ return '<button onclick="'+r[1]+'"><span>'+esc(r[0])+'</span>'+(r[2]?'<i>S. '+r[2]+'</i>':'')+'</button>'; }).join("");
  return '<div class="cs-card"><button class="cs-img" onclick="'+main+'" aria-label="'+esc(t)+'"><img src="'+img+'" alt="" loading="lazy"'+(pos?' style="object-position:'+pos+'"':"")+'></button>'+
    '<div class="cs-b"><h3 onclick="'+main+'">'+(num?'<em>'+num+'</em>':'')+esc(t)+'</h3><p>'+esc(d)+(p?' · S. '+p:'')+'</p></div>'+
    '<div class="cs-ov"><b onclick="'+main+'">'+(num?'<em>'+num+'</em>':'')+esc(t)+'</b><div class="cs-rows">'+ov+'</div></div></div>';
}
function csHead(img, title, sub, book){
  return '<header class="cs-head"><img src="'+img+'" alt=""><div><h1>'+title+'</h1><span>'+sub+'</span></div><button class="chip bookbtn" onclick="BV.open(\''+book+'\',1)">Buch öffnen</button></header>';
}
var CS_RW_IMG = ["img/rw/fig_171.webp","img/rw/hero_grundlagen.webp","img/rw/hero_serie.webp","img/rw/hero_kurzreferenz.webp","img/rw/hero_entwicklung.webp","img/rw/fig_263.webp"];
function rwStart(){
  var K = CM_RW_NAV.kapitel;
  var h = K.map(function(k,n){
    var rows = k.secs.map(function(id){ var i = rwSecInfo(id); return [i.sec.t, "gr(\'"+i.tab+"/"+id+"\')", i.sec.p<8?8:i.sec.p]; });
    var num = /^\d/.test(k.t) ? k.t.charAt(0) : "", t = k.t.replace(/^\d\.\s*/, "");
    return csCard(CS_RW_IMG[n], num, t, k.d, k.p, "gr(\'"+k.tab+"\')", rows);
  }).join("");
  return '<div class="cs">'+csHead("img/rw/fig_182.webp","Grundregelwerk","Spieler:innen-Handbuch","rw") + '<div class="cs-grid">'+h+'</div></div>';
}
var CS_SS_IMG = { spieler:"img/ss_p60_1.webp", orte:"img/baeckerei.webp", avatare:"img/ss_king.webp", gatekeeper:"img/ss_g200.webp" };
function pageSSStart(){
  var N = CM_NAV, K = N.kapitel;
  var sp = N.spieler.map(function(s){ return [s.t, "gs(\'spieler/"+s.id+"\')", s.p]; });
  var sl = function(id){ var cats = id==="orte" ? CM_ORTE_CATS : id==="avatare" ? CM_AV_CATS : CM_GK_CATS; return cats.map(function(c){ return [c.t, "gs(\'sl/"+id+"/"+c.id+"\')", c.p]; }); };
  var h = csCard(CS_SS_IMG.spieler,"1","Spieler","If Dreams Could Kill",K[0].p,"gs(\'spieler\')",sp,"50% 50%") +
          csCard(CS_SS_IMG.orte,"2","Orte & NSCs","Overlooked Attractions",K[1].p,"gs(\'sl/orte\')",sl("orte"),"50% 50%") +
          csCard(CS_SS_IMG.avatare,"3","Avatare","Don’t Believe the Truth",K[2].p,"gs(\'sl/avatare\')",sl("avatare"),"50% 30%") +
          csCard(CS_SS_IMG.gatekeeper,"4","Gatekeeper","Suits Unveiled",K[3].p,"gs(\'sl/gatekeeper\')",sl("gatekeeper"),"50% 18%");
  return '<div class="cs">'+csHead("img/ss_p49_50_3.webp","Shadows & Showdowns","Spielleitungs-Handbuch","cm") + '<div class="cs-grid cs-four">'+h+'</div></div>';
}
if(typeof render==="function") render();
