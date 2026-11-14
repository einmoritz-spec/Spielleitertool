/* Legend in the Mist – Startseite (im Stil der City-of-Mist-Übersicht, Optik wie das Original-PDF).
   Karten führen zu Wake of the Oldways, The Dales, Regeln, Themenbüchern, Charakteren und den Nachschlage-Werkzeugen. */
function goHome(){ if(typeof guardEditLeave==="function" && !guardEditLeave()) return; state.view="home"; state.advId=null; render(); scrollToTop(); if(typeof persistState==="function") persistState(); }
function homeChips(arr){ var v=hmVar(); if(v==="c" && arr.length>3){ arr=arr.slice(0,2).concat([["+"+(arr.length-2),"__MAIN__"]]); } return '<nav class="hm-chips">'+arr.map(function(x){ return '<button class="hm-chip" onclick="'+x[1]+'">'+x[0]+'</button>'; }).join("")+'</nav>'; }
function hmVar(){ try{ return localStorage.getItem("hm_v")||"c"; }catch(e){ return "c"; } }
function homeCard(img,title,main,chips){
  var hc = homeChips(chips).split("__MAIN__").join(main);
  return '<div class="hm-card"><button class="hm-img" onclick="'+main+'" aria-label="'+title+'"><img src="'+img+'" alt="" loading="lazy"></button>'+
    '<div class="hm-b"><h3 onclick="'+main+'">'+title+'</h3>'+hc+'</div></div>';
}
function renderHome(){
  var ready = ADVENTURES.filter(function(a){ return a.status==="ready" && a.id!=="campaign-aftermath" && !a.tutorial; });
  var wake = [["Alle Abenteuer","goOverview()"]].concat(ready.map(function(a){ return [esc(a.title),"goAdventure(\'"+a.id+"\')"]; }));
  if(ADVENTURES.some(function(a){ return a.id==="campaign-aftermath"; })) wake.push(["Campaign Aftermath","goAdventure(\'campaign-aftermath\')"]);
  var dales = LM_NAV.secs.welt.map(function(s){ return [esc(s.t),"goBook(\'welt\',\'"+s.id+"\')"]; }).concat([["Buch (PDF)","BV.open(\'wake\',1)"]]);
  var regeln = LM_NAV.secs.regeln.filter(function(s){ return s.id!=="themenbuecher" && s.id!=="erschaffung"; }).map(function(s){ return [esc(s.t),"goBook(\'regeln\',\'"+s.id+"\')"]; }).concat([["Buch (PDF)","BV.open(\'core\',1)"]]);
  var themen = [["Origin","TB.filter=\'origin\';goThemen()"],["Adventure","TB.filter=\'adventure\';goThemen()"],["Greatness","TB.filter=\'greatness\';goThemen()"],["Variable Might","TB.filter=\'variable\';goThemen()"],["Fellowship","goThemen(\'fellowship\')"],["Gemischtwarenladen","goThemen(\'laden\')"]];
  var helden = [["Charaktererstellung","openCreator()"],["Eigene Charaktere","openCustomChars()"],["Profile","openProfiles()"],["Heldenerschaffung","goBook(\'regeln\',\'erschaffung\')"]];
  var nachschlagen = [["Challenges","openChallenges()"],["Glossar","openRulesGloss()"],["Grimoire","openGrimoire()"],["NPCs","openCharacters()"],["Rasten","openRestRules()"],["Lore","openLore()"],["Shop","openStore()"],["Würfel","openDice()"],["Suche","openSearch()"]];
  app.innerHTML = renderTopbar() + '<div class="hm" data-v="'+hmVar()+'">'+
    '<div class="hm-hero"><img src="assets/litm/home-hero.webp" alt=""><img class="hm-logo" src="assets/logos/legend-in-the-mist.webp" alt="Legend in the Mist"></div>'+
    '<div class="hm-grid">'+
      homeCard("assets/litm/home-wake.webp","Wake of the Oldways","goOverview()",wake)+
      homeCard("assets/litm/home-dales.webp","The Dales","goBook(\'welt\',\'dales\')",dales)+
      homeCard("assets/litm/home-regeln.webp","Regeln","goBook(\'regeln\',\'einstieg\')",regeln)+
      homeCard("assets/litm/home-themenbuecher.webp","Themenbücher","TB.filter=\'alle\';goThemen()",themen)+
      homeCard("assets/litm/home-helden.webp","Charaktere","openCreator()",helden)+
      homeCard("assets/litm/home-nachschlagen.webp","Nachschlagen","openChallenges()",nachschlagen)+
    '</div></div>';
}
