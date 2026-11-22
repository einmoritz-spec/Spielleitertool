/* Karte (Entwurf 6): Original-Karte des gewählten Loops, Pins, Ortsliste */
(function(){
  var C = window.TCTX || {ls:"tftl_", book:"tftl_core"}, K = window.KARTE;
  function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  function loop(){ var l = ""; try{ l = localStorage.getItem(C.ls + "loop") || ""; }catch(e){} return K.bild[l] ? l : "maelar"; }
  function nm(t, l){ return t.replace(/\{\{([^|}]*)\|([^}]*)\}\}/g, function(m, a, b){ return l === "boulder" ? b : a; }); }
  window.renderKarte = function(app){
    C = window.TCTX || C; K = window.TCTX ? C.KARTE : window.KARTE;
    if(!K){ app.className = "page"; app.innerHTML = '<h1>Karte</h1>'; return; }
    var l = loop(), sel = null;
    function draw(){
      var pins = "", orte = K.orte.filter(function(o){ return !o.l || o.l === l; }).map(function(o){
        var p = o.pin && o.pin[l];
        if(p) pins += '<a class="pin o' + (sel === o.id ? ' on' : '') + '" style="left:' + p[0] + '%;top:' + p[1] + '%" data-o="' + o.id + '" title="' + esc(nm(o.name, l)) + '"></a>';
        return '<a class="ol' + (sel === o.id ? ' on' : '') + (p ? '' : ' np') + '" data-o="' + o.id + '"><i class="dot' + (p ? '' : ' g') + '"></i>' + esc(nm(o.name, l)) + ' <span class="pgl" data-b="' + C.book + '" data-s="' + ((l === "boulder" && o.sb) || o.s) + '">S. ' + ((l === "boulder" && o.sb) || o.s) + '</span></a>';
      }).join("");
      app.className = "page karte";
      app.innerHTML = '<div class="kmap"><div class="ksw">' + K.loops.map(function(x){ return '<button class="' + (x[0] === l ? 'on' : '') + '" data-l="' + x[0] + '">' + x[1] + '</button>'; }).join("") + '</div>' +
        '<div class="kview"><div class="kin" id="kin"><img src="img/' + K.bild[l] + '.webp" alt="">' + pins + '</div></div></div>' +
        '<aside class="kside"><h3>' + esc(K.titel || "Mystery-Landschaft") + '</h3>' + orte + '</aside>';
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
