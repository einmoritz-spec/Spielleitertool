/* Karte (Entwurf 6): Original-Karte des gewählten Loops, Pins, Ortsliste */
(function(){
  var C = window.TCTX || {ls:"tftl_", book:"tftl_core"}, K = window.KARTE;
  function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  function loop(){ var l = ""; try{ l = localStorage.getItem(C.ls + "loop") || ""; }catch(e){} return K.bild[l] ? l : "maelar"; }
  /* Loop-Knopf mit 3. Eintrag (Mysterium-Kennungen) nur, wenn eines davon zuletzt gespielt oder abgeschlossen wurde bzw. der Loop gewählt ist */
  function gespielt(x, cur){
    if(!x[2] || x[0] === cur) return true;
    var last = null, done = {}; try{ last = JSON.parse(localStorage.getItem(C.ls + "last") || "null"); done = JSON.parse(localStorage.getItem(C.ls + "done") || "{}") || {}; }catch(e){}
    return x[2].some(function(id){ return (last && last.id === id) || done[id]; });
  }
  function inL(o, l){ return !o.l || [].concat(o.l).indexOf(l) >= 0; }
  /* Ortskarte: Bild und Buchtext aus Nachschlagen (n = [Datensatz, Abschnitt oder Überschrift, Überschrift]) */
  function karte(o, l){
    var ND = C.NACHDATA || window.NACHDATA, D = ND && o.n && ND[o.n[0]]; if(!D) return "";
    var secs = D.abschnitte, bl = [], img = "", i, j, s = null, h = o.n[2] || null;
    for(i = 0; i < secs.length; i++) if(secs[i].id === o.n[1]) s = secs[i];
    if(!s){ h = o.n[1]; for(i = 0; i < secs.length && !s; i++) for(j = 0; j < secs[i].bloecke.length; j++) if(secs[i].bloecke[j][0] === "h" && secs[i].bloecke[j][1] === h){ s = secs[i]; break; } }
    if(!s) return "";
    var b = s.bloecke, st = 0;
    if(h){ for(i = 0; i < b.length; i++) if(b[i][0] === "h" && b[i][1] === h){ st = i + 1; break; } }
    else if(b[0] && b[0][0] === "bild"){ img = '<img src="img/' + esc(b[0][1]) + '.webp" alt="">'; st = 1; }
    for(i = st; i < b.length && b[i][0] !== "h"; i++){
      if(b[i][0] === "p") bl.push('<p>' + esc(nm(b[i][1], l)) + '</p>');
      else if(b[i][0] === "liste") bl.push('<ul>' + b[i][1].map(function(x){ return '<li>' + esc(nm(x, l)) + '</li>'; }).join("") + '</ul>');
    }
    return '<div class="kcard">' + img + '<h4>' + esc(nm(o.name, l)) + ' <span class="pgl" data-b="' + (o.b || C.book) + '" data-s="' + o.s + '">S. ' + o.s + '</span></h4>' + bl.join("") + '</div>';
  }
  function nm(t, l){ return t.replace(/\{\{([^|}]*)\|([^}]*)\}\}/g, function(m, a, b){ return l === "boulder" ? b : a; }); }
  window.renderKarte = function(app){
    C = window.TCTX || C; K = window.TCTX ? C.KARTE : window.KARTE;
    if(!K){ app.className = "page"; app.innerHTML = '<h1>Karte</h1>'; return; }
    var l = loop(), sel = null;
    function draw(){
      var pins = "", card = "", orte = K.orte.filter(function(o){ return inL(o, l); }).map(function(o){
        if(sel === o.id) card = karte(o, l);
        var p = o.pin && o.pin[l];
        if(p) pins += '<a class="pin o' + (sel === o.id ? ' on' : '') + '" style="left:' + p[0] + '%;top:' + p[1] + '%" data-o="' + o.id + '" title="' + esc(nm(o.name, l)) + '"></a>';
        return '<a class="ol' + (sel === o.id ? ' on' : '') + (p ? '' : ' np') + '" data-o="' + o.id + '"><i class="dot' + (p ? '' : ' g') + '"></i>' + esc(nm(o.name, l)) + ' <span class="pgl" data-b="' + (o.b || C.book) + '" data-s="' + ((l === "boulder" && o.sb) || o.s) + '">S. ' + ((l === "boulder" && o.sb) || o.s) + '</span></a>';
      }).join("");
      app.className = "page karte";
      app.innerHTML = '<div class="kmap"><div class="ksw">' + K.loops.filter(function(x){ return gespielt(x, l); }).map(function(x){ return '<button class="' + (x[0] === l ? 'on' : '') + '" data-l="' + x[0] + '">' + x[1] + '</button>'; }).join("") + '</div>' +
        '<div class="kview"><div class="kin" id="kin"><img src="img/' + K.bild[l] + '.webp" alt="">' + pins + '</div></div></div>' +
        '<aside class="kside"><h3>' + esc(K.titel || "Mystery-Landschaft") + '</h3>' + card + orte + '</aside>';
    }
    draw();
    app.onclick = function(e){
      var t = e.target, el;
      if((el = t.closest(".pgl"))){ e.preventDefault(); e.stopPropagation(); if(window.BV) BV.open(el.dataset.b, +el.dataset.s); return; }
      if((el = t.closest("[data-l]"))){ l = el.dataset.l; try{ localStorage.setItem(C.ls + "loop", l); }catch(x){} sel = null; draw(); return; }
      if((el = t.closest("[data-o]"))){ sel = sel === el.dataset.o ? null : el.dataset.o; draw(); return; }
      if(t.closest(".kin")){ var v = app.querySelector(".kview"); v.classList.toggle("zoom"); }
    };
  };
})();
