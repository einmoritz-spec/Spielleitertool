/* Startseite = Vorbereitung (Entwurf 1) */
window.renderStart = function(el){
  var C = window.TCTX || {p:"", ls:"tftl_"}, D = C.START || window.START, loop = "maelar";
  try{ loop = localStorage.getItem(C.ls + "loop") || loop; }catch(e){}
  if(!D.loops.some(function(l){ return l[0]===loop; })) loop = D.loops[0][0];
  function tile(t){ return '<a class="tile' + (t[5] ? ' ' + t[5] : '') + '" href="#' + C.p + t[4] + '"><div class="im" style="background-image:url(img/' + t[3] + '.webp)"></div><div class="tx"><h3>' + t[0] + '</h3><p>' + t[1] + '</p><div class="k">' + t[2] + '</div></div></a>'; }
  var last = null; try{ last = JSON.parse(localStorage.getItem(C.ls + "last") || "null"); }catch(e){}
  el.classList.add("start");
  var HERO = D.hero || {maelar:["hero","center 42%"], boulder:["hero-boulder","center 55%"], taunus:["hero-taunus","center 62%"]};
  function setHero(l){ var h = el.querySelector(".hero"), c = HERO[l] || HERO.maelar; if(h){ h.style.backgroundImage = "url(img/" + c[0] + ".webp)"; h.style.backgroundPosition = c[1]; } }
  el.innerHTML =
    '<div class="hero"><div class="loop"><i>Unser Loop</i>' + D.loops.map(function(l){ return '<button data-l="' + l[0] + '"' + (l[0]===loop ? ' class="on"' : '') + '>' + l[1] + '</button>'; }).join("") + '</div></div>' +
    '<div class="wrap"><div>' +
    '<div class="sec h">Vorbereitung</div><div class="grpl">Die Welt</div><div class="grid">' + D.welt.map(tile).join("") + '</div>' +
    '<div class="grpl" style="margin-top:16px">Das Spiel</div><div class="grid">' + D.spiel.map(tile).join("") + '</div>' +
    '<div class="chips">' + D.chips.map(function(c){ return '<a class="chip' + (c[2] ? ' f' : '') + '" href="#' + C.p + c[1] + '">' + c[0] + '</a>'; }).join("") + '</div></div>' +
    '<aside class="go"><div class="band"></div><div class="in"><h2 class="h">Mysterien</h2>' +
    (last ? '<a class="last" href="#' + C.p + 'm/' + last.id + '"><div class="im" style="background-image:url(img/' + last.bild + '.webp)"></div><div class="tx"><small>Weiterspielen</small><b>' + last.name + '</b><span>' + last.ort + '</span></div></a>' : '') +
    (D.liste ?
      '<div class="kamp"><span>Kampagne · ' + D.kampagne + '</span></div>' + D.liste.map(function(m){ return '<a class="mm" href="#' + C.p + 'm/' + m[0] + '"><div class="im" style="background-image:url(img/' + m[3] + '.webp)"></div>' + (m[4] ? '<i class="n">' + m[4] + '</i>' : '') + '<div><b>' + m[1] + '</b><span>' + m[2] + '</span></div></a>'; }).join("") :
      '<div class="strip">' + D.strip.map(function(s){ return '<div style="background-image:url(img/' + s + '.webp)"></div>'; }).join("") + '</div>' +
      '<div class="kamp"><span>Kampagnen</span>' + D.kampagnen.map(function(k){ return '<a href="#' + C.p + 'mysterien">' + k + '</a>'; }).join("") + '</div><div class="cnt">' + D.zahl + '</div>') +
    '<a class="btn" href="#' + C.p + 'mysterien">Mysterium starten</a></div></aside></div>';
  setHero(loop);
  el.querySelectorAll(".loop button").forEach(function(b){ b.onclick = function(){ setHero(b.dataset.l); try{ localStorage.setItem(C.ls + "loop", b.dataset.l); }catch(e){} el.querySelectorAll(".loop button").forEach(function(x){ x.classList.toggle("on", x===b); }); }; });
};
