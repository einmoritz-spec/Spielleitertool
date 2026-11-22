/* Karte (Entwurf 6): Original-Karte des gewählten Loops, Pins, Ortsliste */
(function(){
  var K = window.KARTE;
  function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  function loop(){ var l = ""; try{ l = localStorage.getItem("tftl_loop") || ""; }catch(e){} return K.bild[l] ? l : "maelar"; }
  function nm(t, l){ return t.replace(/\{\{([^|}]*)\|([^}]*)\}\}/g, function(m, a, b){ return l === "boulder" ? b : a; }); }
  window.renderKarte = function(app){
    var l = loop(), sel = null;
    function draw(){
      var pins = "", orte = K.orte.map(function(o){
        var p = o.pin && o.pin[l];
        if(p) pins += '<a class="pin o' + (sel === o.id ? ' on' : '') + '" style="left:' + p[0] + '%;top:' + p[1] + '%" data-o="' + o.id + '" title="' + esc(nm(o.name, l)) + '"></a>';
        return '<a class="ol' + (sel === o.id ? ' on' : '') + (p ? '' : ' np') + '" data-o="' + o.id + '"><i class="dot' + (p ? '' : ' g') + '"></i>' + esc(nm(o.name, l)) + ' <span class="pgl" data-b="tftl_core" data-s="' + o.s + '">S. ' + o.s + '</span></a>';
      }).join("");
      app.className = "page karte";
      app.innerHTML = '<div class="kmap"><div class="ksw">' + K.loops.map(function(x){ return '<button class="' + (x[0] === l ? 'on' : '') + '" data-l="' + x[0] + '">' + x[1] + '</button>'; }).join("") + '</div>' +
        '<div class="kview"><div class="kin" id="kin"><img src="img/' + K.bild[l] + '.webp" alt="">' + pins + '</div></div></div>' +
        '<aside class="kside"><h3>Mystery-Landschaft</h3>' + orte + '</aside>';
    }
    draw();
    app.onclick = function(e){
      var t = e.target, el;
      if((el = t.closest(".pgl"))){ e.preventDefault(); e.stopPropagation(); if(window.BV) BV.open(el.dataset.b, +el.dataset.s); return; }
      if((el = t.closest("[data-l]"))){ l = el.dataset.l; try{ localStorage.setItem("tftl_loop", l); }catch(x){} sel = null; draw(); return; }
      if((el = t.closest("[data-o]"))){ sel = sel === el.dataset.o ? null : el.dataset.o; draw(); return; }
      if(t.closest(".kin")){ var v = app.querySelector(".kview"); v.classList.toggle("zoom"); }
    };
  };
})();
