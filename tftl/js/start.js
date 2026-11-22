/* Startseite = Vorbereitung (Entwurf 1) */
window.renderStart = function(el){
  var D = window.START, loop = "maelar";
  try{ loop = localStorage.getItem("tftl_loop") || loop; }catch(e){}
  function tile(t){ return '<a class="tile" href="#' + t[4] + '"><div class="im" style="background-image:url(img/' + t[3] + '.webp)"></div><div class="tx"><h3>' + t[0] + '</h3><p>' + t[1] + '</p><div class="k">' + t[2] + '</div></div></a>'; }
  var last = null; try{ last = JSON.parse(localStorage.getItem("tftl_last") || "null"); }catch(e){}
  el.classList.add("start");
  var HERO = {maelar:["hero","center 42%"], boulder:["hero-boulder","center 55%"], taunus:["hero-taunus","center 62%"]};
  function setHero(l){ var h = el.querySelector(".hero"), c = HERO[l] || HERO.maelar; if(h){ h.style.backgroundImage = "url(img/" + c[0] + ".webp)"; h.style.backgroundPosition = c[1]; } }
  el.innerHTML =
    '<div class="hero"><div class="loop"><i>Unser Loop</i>' + D.loops.map(function(l){ return '<button data-l="' + l[0] + '"' + (l[0]===loop ? ' class="on"' : '') + '>' + l[1] + '</button>'; }).join("") + '</div></div>' +
    '<div class="wrap"><div>' +
    '<div class="sec h">Vorbereitung</div><div class="grpl">Die Welt</div><div class="grid">' + D.welt.map(tile).join("") + '</div>' +
    '<div class="grpl" style="margin-top:16px">Das Spiel</div><div class="grid">' + D.spiel.map(tile).join("") + '</div>' +
    '<div class="chips">' + D.chips.map(function(c){ return '<a class="chip' + (c[2] ? ' f' : '') + '" href="#' + c[1] + '">' + c[0] + '</a>'; }).join("") + '</div></div>' +
    '<aside class="go"><div class="band"></div><div class="in"><h2 class="h">Mysterien</h2>' +
    (last ? '<a class="last" href="#m/' + last.id + '"><div class="im" style="background-image:url(img/' + last.bild + '.webp)"></div><div class="tx"><small>Weiterspielen</small><b>' + last.name + '</b><span>' + last.ort + '</span></div></a>' : '') +
    '<div class="strip">' + D.strip.map(function(s){ return '<div style="background-image:url(img/' + s + '.webp)"></div>'; }).join("") + '</div>' +
    '<div class="kamp"><span>Kampagnen</span>' + D.kampagnen.map(function(k){ return '<a href="#mysterien">' + k + '</a>'; }).join("") + '</div><div class="cnt">' + D.zahl + '</div>' +
    '<a class="btn" href="#mysterien">Mysterium starten</a></div></aside></div>';
  setHero(loop);
  el.querySelectorAll(".loop button").forEach(function(b){ b.onclick = function(){ setHero(b.dataset.l); try{ localStorage.setItem("tftl_loop", b.dataset.l); }catch(e){} el.querySelectorAll(".loop button").forEach(function(x){ x.classList.toggle("on", x===b); }); }; });
};
