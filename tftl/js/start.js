/* Vorbereitung (Startseite): Hero, große Bildkarten (Die Welt / Das Spiel), Mysterien-Sektion.
   Bausteine in window.VS werden auch von Flood (gleicher Renderer) und der ES-Vorbereitung genutzt. */
window.VS = {
  esc: function(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); },
  /* Kachel: [Titel, Untertitel, Kap./Seite, Bild, Ziel, Klasse/Bildposition] */
  tile: function(t, href){ var pos = t[5] && t[5] !== "c" ? ';background-position:' + t[5] : '';
    return '<a class="vc' + (t[5] === "c" ? ' c' : '') + '" href="' + href + '"><div class="im" style="background-image:url(img/' + t[3] + '.webp)' + pos + '"></div><div class="tx"><h3>' + VS.esc(t[0]) + '</h3><span>' + VS.esc(t[2]) + '</span></div></a>'; },
  /* Spalten nach Kachelzahl: 4/8 -> 4, 3/6/9 -> 3, 2 -> 2, sonst 3 mit breiter erster Kachel (keine Lücken) */
  grid: function(list, href){ var n = list.length, c = n % 4 === 0 ? "c4" : n % 3 === 0 ? "c3" : n % 2 === 0 ? "c2" : n === 1 ? "c1" : "c3 w1";
    return '<div class="vg ' + c + '">' + list.map(function(t){ return VS.tile(t, href(t)); }).join("") + '</div>'; },
  /* Drei Bereichs-Einstiege (Die Welt / Regeln / Spielleitung): großes Bild + Liste der Unterpunkte */
  bereiche: function(C, tiles){
    if(!window.TX_G) return "";
    var gs = window.TX_G(C), p = C.p || "";
    return '<div class="vbr">' + gs.map(function(g, gi){
      var t = tiles.filter(function(x){ return g.keys.some(function(k){ return (x[4] || "").indexOf("nach/" + k) === 0; }); })[0] || tiles[0];
      var sub = window.TX_ITEMS(C, gi, "", "", "-");
      if(!sub) sub = '<a href="#' + p + 'nach/' + g.keys[0] + '">' + VS.esc(g.name) + '</a>';
      return '<section class="vbx"><a class="vbi" href="#' + p + 'nach/' + g.keys[0] + '" style="background-image:url(img/' + t[3] + '.webp)"><h2>' + VS.esc(g.name) + '</h2></a><nav class="vbl">' + sub + '</nav></section>';
    }).join("") + '</div>';
  },
  sec: function(title, body, extra){ return '<section class="vs"><div class="vh2"><h2>' + title + '</h2>' + (extra || '') + '</div>' + body + '</section>'; },
  /* Weiterspielen: große Bildkarte */
  last: function(href, img, pos, name, ort, label){
    return '<a class="vl" href="' + href + '"><div class="im" style="background-image:url(img/' + img + '.webp)' + (pos ? ';background-position:' + pos : '') + '"></div><div class="tx"><small>' + label + '</small><b>' + VS.esc(name) + '</b>' + (ort ? '<span>' + VS.esc(ort) + '</span>' : '') + '</div></a>'; }
};
window.renderStart = function(el){
  var C = window.TCTX || {p:"", ls:"tftl_"}, D = C.START || window.START, loop = "maelar";
  try{ loop = localStorage.getItem(C.ls + "loop") || loop; }catch(e){}
  if(!D.loops.some(function(l){ return l[0]===loop; })) loop = D.loops[0][0];
  var st = window.mysState(), href = function(t){ return '#' + C.p + t[4]; };
  el.className = "page start";
  var HERO = D.hero || {maelar:["hero","center 42%"], boulder:["hero-boulder","center 55%"], taunus:["hero-taunus","center 62%"]};
  function setHero(l){ var h = el.querySelector(".vhero"), c = HERO[l] || HERO.maelar; if(h){ h.style.backgroundImage = "url(img/" + c[0] + ".webp)"; h.style.backgroundPosition = c[1]; } }
  var more = '<a class="va" href="#' + C.p + 'mysterien">Alle Mysterien</a>';
  var lastCard = st.last ? VS.last('#' + C.p + 'm/' + st.last.id, st.last.bild, "", st.last.name, st.last.ort, "Weiterspielen") : '';
  el.innerHTML =
    '<div class="vhero"><div class="vloop">' + D.loops.map(function(l){ return '<button data-l="' + l[0] + '"' + (l[0]===loop ? ' class="on"' : '') + '>' + l[1] + '</button>'; }).join("") + '</div></div>' +
    '<div class="vb">' + VS.bereiche(C, D.welt.concat(D.spiel)) + '</div>' +
    '<div class="vm"><div class="vb">' + VS.sec("Mysterien", lastCard + '<div class="mys">' + window.mysHtml(C.MYSTERIEN || window.MYSTERIEN, st, {compact:true}) + '</div>', more) + '</div></div>';
  setHero(loop);
  window.mysWire(el);
  el.querySelectorAll(".vm .grp").forEach(function(g){ g.classList.add("zu"); g.querySelector(".gh").onclick = function(){ g.classList.toggle("zu"); }; });
  el.querySelectorAll(".vloop button").forEach(function(b){ b.onclick = function(){ setHero(b.dataset.l); try{ localStorage.setItem(C.ls + "loop", b.dataset.l); }catch(e){} el.querySelectorAll(".vloop button").forEach(function(x){ x.classList.toggle("on", x===b); }); }; });
};
