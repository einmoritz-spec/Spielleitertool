/* Orte der Dales: Kachelseite + Ortsmappe (zugeklappte Karten). Daten: LM.data["dales-b"] (Setting Book S. 76–107). */
var ORT_NAMES=["Ashstone","Barleytown","Cedargate","Dolmen Knolls","Hartland","Highglade","Milkrest","Pasture","Ravensdale","Soddenmore","South Crossing & The Bounds","Woodend","Fairpoint","Lastford","Salthill","Underbough","Upper Hartland"];
var ORT_TAG={"Ashstone":"Steinbrüche und Schluchten","Barleytown":"Die einzige Stadt","Cedargate":"Holzfäller-Grenzland","Dolmen Knolls":"Grabhügel und Ruinen","Hartland":"Seen, Gipfel, Twilight","Highglade":"Molkereien, Bergweiden","Milkrest":"Ziegenhirten und Käse","Pasture":"Weiden, Kunst, Feste","Ravensdale":"Obstgärten und Raben","Soddenmore":"Sümpfe und Kreuzungen","South Crossing & The Bounds":"Grenzland an den Marshes","Woodend":"Dorf am Aldenweald","Fairpoint":"Nebel und Trüffel","Lastford":"Fischerdorf am Weltende","Salthill":"Salzbergbau, Höhlen","Underbough":"Handelsposten","Upper Hartland":"Eisseen, Witchwood"};
/* Bilder: nur eintragen, wenn sie im Buch direkt zum Ort gehören. [Datei, Breite, Höhe, Banner mit Ortsname im Bild, Ausschnitt für Kachel] */
var ORT_IMG={
 "Barleytown":["assets/orte/barleytown.webp",1224,628,1,"50% 70%"],
 "Cedargate":["assets/orte/cedargate.webp",1224,571,1,"50% 70%"],
 "Highglade":["assets/orte/highglade.webp",1224,581,1,"50% 75%"],
 "Milkrest":["assets/orte/milkrest.webp",1224,339,1,"50% 50%"],
 "Woodend":["assets/orte/woodend.webp",794,522,1,"50% 90%"],
 "Ravensdale":["assets/galerie/hearts-of-ravensdale/full/hr_pdf034_B095_Valley-by-Valley_1.webp",544,1428,0,"50% 40%"],
 "Soddenmore":["assets/galerie/hearts-of-ravensdale/full/hr_pdf035_B096_Valley-by-Valley_1.webp",548,1588,0,"50% 30%"]
};
function ortImg(n){ var i=ORT_IMG[n]; return i?i[0]:""; }
function ortOpen(n){
  var had=!!state.ortPlace; state.ortPlace=n||null;
  if(n&&!had){ try{ history.pushState({zk:3},""); window.__ortLayer=true; }catch(e){} }
  if(!n&&had&&window.__ortLayer&&history.state&&history.state.zk===3){ window.__ortLayer=false; window.__ortIgn=true; try{ history.back(); }catch(e){ window.__ortIgn=false; } }
  render(); scrollToTop();
}
window.addEventListener("popstate",function(e){
  if(window.__ortIgn){ window.__ortIgn=false; return; }
  if(window.__ortLayer && e.state && e.state.zk===2 && state.ortPlace){ window.__ortLayer=false; state.ortPlace=null; render(); scrollToTop(); }
});
function ortSplit(e){
  var intro=[], secs=[], cur=null;
  e.body.forEach(function(b){ var m=typeof b==="string"&&/^## (.*)/.exec(b); if(m){ cur={t:m[1],b:[]}; secs.push(cur); return; } (cur?cur.b:intro).push(b); });
  return {intro:intro,secs:secs};
}
function ortCount(b){ return b.filter(function(x){return typeof x==="string"&&/^- \*\*/.test(x);}).length; }
/* ---- Zusammenstellung der Abschnitte (Daten bleiben in ihren Dateien, nur die Anzeige gruppiert um) ---- */
var LM_DEPS={ "orte":["dales-b","jenseits-b","jenseits-c","jenseits"], "dales-b":["dales-b"], "dales-c":["dales-c","jenseits-b"], "jenseits":["jenseits"], "jenseits-c":["jenseits-c","jenseits-b"] };
function lmDeps(id){ return LM_DEPS[id]||[id]; }
function lmLoadMany(ids,cb){ var n=ids.length; ids.forEach(function(i){ lmLoad(i,function(){ if(--n===0) cb(); }); }); }
var ORT_JB_MAGIE=["Die Unseen Magic: Ways of Magic","Folk Magic","Craggen Folk Magic Theme Kits","Thaumaturgy","Thaumaturgical Arts"];
var ORT_JB_ORT=["Geheimnisse der Dales (Fortsetzung: Valley by Valley)"];
var ORT_SECRETS="Secrets of the Dales: Valley by Valley – Gerüchte & Legenden enthüllt";
var ORT_GUIDE="Valley by Valley: Ein Führer durch die Dales";
var ORT_LAND=["Paths & Crossroads","Dalish Hills & Woodlands","Ruins of Gwyrdolin","Wetland & Lake","Remote Outland","Aldenweald","Craggen Highlands"];
var ORT_JOURNEY=["Travel On Dalish Roads","Rambling","Barrow","Aldenweald Outskirts","Across the Highlands"];
function ortFind(name){ var ids=["dales-b","jenseits-b","jenseits-c","jenseits"]; for(var i=0;i<ids.length;i++){ var a=LM.data[ids[i]]||[]; for(var j=0;j<a.length;j++) if(a[j].name===name) return a[j]; } return null; }
function lmCompose(id){
  var D=function(k){return LM.data[k]||[];}, not=function(list){return function(c){return list.indexOf(c.name)<0;};};
  if(id==="dales-b") return D("dales-b").filter(not(ORT_NAMES.concat([ORT_GUIDE])));
  if(id==="dales-c") return D("dales-c").concat(D("jenseits-b").filter(function(c){return ORT_JB_MAGIE.indexOf(c.name)>=0;}));
  if(id==="jenseits") return D("jenseits").filter(not([ORT_SECRETS]));
  if(id==="jenseits-c"){ var jb=D("jenseits-b"), k=-1; jb.forEach(function(c,i){ if(k<0&&/^Challenges:/.test(c.name)) k=i; });
    return D("jenseits-c").filter(not(ORT_LAND.concat(ORT_JOURNEY))).concat(k>=0?jb.slice(k):[]); }
  return D(id);
}
var ORT_TITLE={"Paths & Crossroads":"Wege und Kreuzungen","Dalish Hills & Woodlands":"Hügel und Wälder","Ruins of Gwyrdolin":"Ruinen von Gwyrdolin","Wetland & Lake":"Moor und See","Remote Outland":"Abgelegenes Hinterland","Aldenweald":"Der Aldenweald","Craggen Highlands":"Craggen Highlands"};
ORT_TAG["Paths & Crossroads"]="Straßen und Brücken";ORT_TAG["Dalish Hills & Woodlands"]="Hügel, Wälder, Pfade";ORT_TAG["Ruins of Gwyrdolin"]="Dolmen, Hügelgräber";ORT_TAG["Wetland & Lake"]="Moor, See, Schilf";ORT_TAG["Remote Outland"]="Abgelegene Hinterländer";ORT_TAG["Aldenweald"]="Der große Wald";ORT_TAG["Craggen Highlands"]="Hochland und Craggen";
ORT_TITLE[ORT_GUIDE]="Ein Führer durch die Dales";ORT_TAG[ORT_GUIDE]="Überblick und Aufbau";ORT_TITLE[ORT_JB_ORT[0]]="Geheimnisse der Dales";ORT_TAG[ORT_JB_ORT[0]]="Gerüchte und Legenden";
var ORT_EXTRA={"Paths & Crossroads":["Travel On Dalish Roads"],"Dalish Hills & Woodlands":["Rambling"],"Ruins of Gwyrdolin":["Barrow"],"Aldenweald":["Aldenweald Outskirts"],"Craggen Highlands":["Across the Highlands"]};
ORT_EXTRA[ORT_JB_ORT[0]]=[ORT_SECRETS];
var ORT_GROUPS=[["Die Dales",ORT_NAMES],["Landschaften und Wege",ORT_LAND],["Allgemein",[ORT_GUIDE,ORT_JB_ORT[0]]]];
function ortTitle(n){ return ORT_TITLE[n]||n.split(" & ")[0]; }
function ortTile(n){
  var im=ortImg(n), ip=(ORT_IMG[n]||[])[4]||"50% 50%";
  return '<button class="ort-t" onclick="ortOpen(\''+n.replace(/'/g,"\\'")+'\')"><span class="ort-im">'+(im?'<img src="'+im+'" alt="" style="object-position:'+ip+'">':'')+'</span><span class="ort-tb"><b>'+esc(ortTitle(n))+'</b><i>'+esc(ORT_TAG[n]||"")+'</i></span></button>';
}
function ortHtml(){
  var n=state.ortPlace, e=n&&ortFind(n);
  if(!e){
    state.ortPlace=null;
    return '<section class="lm-sec ort"><div class="lm-sh"><h2>Orte</h2>'+lmPg(76,107)+'</div>'+ORT_GROUPS.map(function(g){
      var ok=g[1].filter(function(x){return ortFind(x);});
      return ok.length?'<h3 class="ort-gh">'+g[0]+'</h3><div class="ort-tiles">'+ok.map(ortTile).join("")+'</div>':'';
    }).join("")+'</section>';
  }
  var d=ortSplit(e), lead=typeof d.intro[0]==="string"&&/^\*/.test(d.intro[0])?d.intro.shift():"";
  var im=ortImg(n), dim=ORT_IMG[n], tall=dim&&dim[2]>dim[1], ban=dim&&dim[3];
  var fig=im&&!ban?'<figure class="ort-fig'+(tall?' tall':'')+'"><img src="'+im+'" alt=""></figure>':'';
  var banH=ban?'<figure class="ort-ban"><img src="'+im+'" alt="'+esc(e.name)+'"></figure><div class="ort-banrow"><button class="ort-back" onclick="ortOpen(null)">‹ Orte</button>'+lmPg(e.p,e.pe)+'</div>':'';
  var extra=(ORT_EXTRA[n]||[]).map(ortFind).filter(Boolean);
  return '<section class="lm-sec ort">'+(ban?banH+'<h2 class="sr-only" style="position:absolute;left:-9999px">'+esc(e.name)+'</h2>':'<button class="ort-back" onclick="ortOpen(null)">‹ Orte</button><div class="lm-sh"><h2>'+esc(ortTitle(n))+'</h2>'+lmPg(e.p,e.pe)+'</div>')+
    (e.sub&&e.sub!=="undefined"?'<p class="ort-sub">'+lmMd(e.sub)+'</p>':'')+
    '<div class="ort-top'+(fig?' has':'')+'"><div class="ort-tx">'+(lead?'<p class="ort-lead">'+lmMd(lead)+'</p>':'')+lmBlocks(d.intro)+'</div>'+fig+'</div>'+
    '<div class="ort-cards">'+d.secs.map(function(s){ var c=ortCount(s.b);
      return '<details class="ort-c"><summary><h3>'+esc(s.t.replace(/&amp;/g,"&"))+'</h3>'+(c?'<span class="ort-n">'+c+'</span>':'')+'</summary><div class="ort-cb">'+lmBlocks(s.b)+'</div></details>'; }).join("")+'</div>'+
    (extra.length?'<div class="ort-ex">'+lmCards(extra)+'</div>':'')+'</section>';
}
