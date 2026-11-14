/* Orte der Dales: Kachelseite + Ortsmappe (zugeklappte Karten). Daten: LM.data["dales-b"] (Setting Book S. 76–107). */
var ORT_NAMES=["Ashstone","Barleytown","Cedargate","Dolmen Knolls","Hartland","Highglade","Milkrest","Pasture","Ravensdale","Soddenmore","South Crossing & The Bounds","Woodend","Fairpoint","Lastford","Salthill","Underbough","Upper Hartland"];
var ORT_TAG={"Ashstone":"Steinbrüche und Schluchten","Barleytown":"Die einzige Stadt","Cedargate":"Holzfäller-Grenzland","Dolmen Knolls":"Grabhügel und Ruinen","Hartland":"Seen, Gipfel, Twilight","Highglade":"Molkereien, Bergweiden","Milkrest":"Ziegenhirten und Käse","Pasture":"Weiden, Kunst, Feste","Ravensdale":"Obstgärten und Raben","Soddenmore":"Sümpfe und Kreuzungen","South Crossing & The Bounds":"Grenzland an den Marshes","Woodend":"Dorf am Aldenweald","Fairpoint":"Nebel und Trüffel","Lastford":"Fischerdorf am Weltende","Salthill":"Salzbergbau, Höhlen","Underbough":"Handelsposten","Upper Hartland":"Eisseen, Witchwood"};
/* Bilder: nur eintragen, wenn sie im Buch direkt zum Ort gehören. [Datei, Breite, Höhe] */
var ORT_IMG={"Barleytown":["hr_pdf030_B079_Valley-by-Valley_1",1228,756],"Ravensdale":["hr_pdf034_B095_Valley-by-Valley_1",544,1428],"Soddenmore":["hr_pdf035_B096_Valley-by-Valley_1",548,1588]};
var ORT_DIR="assets/galerie/hearts-of-ravensdale/";
function ortImg(n,full){ var i=ORT_IMG[n]; return i? ORT_DIR+(full?"full/":"thumb/")+i[0]+".webp" : ""; }
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
function ortHtml(es){
  var n=state.ortPlace, e=n&&es.filter(function(c){return c.name===n;})[0];
  if(!e){
    state.ortPlace=null;
    return '<section class="lm-sec ort"><div class="lm-sh"><h2>Orte der Dales</h2>'+lmPg(76,107)+'</div><div class="ort-tiles">'+
      es.sort(function(a,b){return ORT_NAMES.indexOf(a.name)-ORT_NAMES.indexOf(b.name);}).map(function(c){
        var im=ortImg(c.name); return '<button class="ort-t" onclick="ortOpen(\''+c.name.replace(/'/g,"\\'")+'\')"><span class="ort-im">'+(im?'<img src="'+im+'" alt="">':'')+'</span><span class="ort-tb"><b>'+esc(c.name.split(" & ")[0])+'</b><i>'+esc(ORT_TAG[c.name]||"")+'</i></span></button>';
      }).join("")+'</div></section>';
  }
  var d=ortSplit(e), lead=typeof d.intro[0]==="string"&&/^\*/.test(d.intro[0])?d.intro.shift():"";
  var im=ortImg(n,true), dim=ORT_IMG[n], tall=dim&&dim[2]>dim[1];
  var fig=im?'<figure class="ort-fig'+(tall?' tall':'')+'"><img src="'+im+'" alt="" onclick="Galerie&&Galerie.open&&0"></figure>':'';
  return '<section class="lm-sec ort"><button class="ort-back" onclick="ortOpen(null)">‹ Orte</button><div class="lm-sh"><h2>'+esc(e.name)+'</h2>'+lmPg(e.p,e.pe)+'</div>'+
    (e.sub?'<p class="ort-sub">'+lmMd(e.sub)+'</p>':'')+
    '<div class="ort-top'+(im?' has':'')+'"><div class="ort-tx">'+(lead?'<p class="ort-lead">'+lmMd(lead)+'</p>':'')+lmBlocks(d.intro)+'</div>'+fig+'</div>'+
    '<div class="ort-cards">'+d.secs.map(function(s){ var c=ortCount(s.b);
      return '<details class="ort-c"><summary><h3>'+esc(s.t.replace(/&amp;/g,"&"))+'</h3>'+(c?'<span class="ort-n">'+c+'</span>':'')+'</summary><div class="ort-cb">'+lmBlocks(s.b)+'</div></details>'; }).join("")+'</div></section>';
}
