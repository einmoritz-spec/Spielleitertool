/* Karte (Paket B2): Pacifica / Reiseroute, Pins mit Namensschild, Liste rechts */
(function(){
  window.ES = window.ES || {};
  function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  function ls(k, v){ try{ if(v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); }catch(e){} return null; }
  function cur(){ try{ var s = JSON.parse(ls("es_reise_v1") || "{}"); return s.pos || ""; }catch(e){ return ""; } }
  ES.renderKarte = function(app, rest){
    var K = ES.KARTE;
    if(!K){ app.className = "page"; return; }
    var m = (rest && rest[0]) || ls("es_karte") || "route";
    if(m !== "pacifica" && m !== "route") m = "route";
    var pos = cur(), sel = pos && K.reise.some(function(r){ return r.id === pos; }) ? pos : null, zoom = false;
    function all(){ return K.reise.concat(K.pacifica); }
    function pg(o){ return '<span class="pgl" data-b="tftl_es" data-s="' + o.s + '">S. ' + o.s + '</span>'; }
    function draw(){
      var pins = all().map(function(o){
        var p = o.pin && o.pin[m]; if(!p) return "";
        var c = "kp" + (o.id === sel ? " on" : "") + (o.id === pos ? " cur" : "") + (o.ungefaehr ? " ung" : "") + (o.nach ? " pa" : "") + (o.lab === "d" ? " d" : p[0] > 78 ? " l" : "");
        return '<a class="' + c + '" style="left:' + p[0] + '%;top:' + p[1] + '%" data-o="' + o.id + '"><i></i><b>' + esc(o.name) + '</b></a>';
      }).join("");
      function row(o){
        var has = o.pin && (o.pin.route || o.pin.pacifica);
        var c = "kr" + (o.id === sel ? " on" : "") + (o.id === pos ? " cur" : "") + (has ? "" : " np") + (o.nach ? " pa" : "");
        var h = '<a class="' + c + '" data-o="' + o.id + '"><i class="kd' + (o.ungefaehr ? ' ung' : '') + '"></i><span>' + esc(o.name) + '</span>' + pg(o) + '</a>';
        if(o.id === sel && (o.lage || o.nach)){
          h += '<div class="kc"><h4>' + esc(o.name) + '</h4>' + (o.lage ? '<p>' + esc(o.lage) + '</p>' : '') +
            (o.halt ? '<a class="kgo" href="#es/reise/' + o.halt + '/ueberblick">Zum Halt ›</a>' : '<a class="kgo" href="#es/nach/' + o.nach + '">Nachschlagen ›</a>') + '</div>';
        }
        return h;
      }
      app.className = "page ekarte";
      app.innerHTML = '<div class="kmapw"><div class="ksw2"><button class="' + (m === "pacifica" ? "on" : "") + '" data-m="pacifica">Pacifica</button><button class="' + (m === "route" ? "on" : "") + '" data-m="route">Reiseroute</button></div>' +
        '<div class="kview2' + (zoom ? " zoom" : "") + '"><div class="kin2"><img src="img/' + K.bilder[m] + '.webp" alt="">' + pins + '</div></div></div>' +
        '<aside class="kside2"><h3><i class="sq"></i>Into the Dust<span class="pgl" data-b="tftl_es" data-s="152">S. 152</span></h3>' + K.reise.map(row).join("") +
        '<h3><i class="sq"></i>Pacifica<span class="pgl" data-b="tftl_es" data-s="38">S. 38</span></h3>' + K.pacifica.map(row).join("") + '</aside>';
    }
    draw();
    app.onclick = function(e){
      var t = e.target, el;
      if((el = t.closest(".pgl"))){ e.preventDefault(); e.stopPropagation(); if(window.BV) BV.open(el.dataset.b, +el.dataset.s); return; }
      if(t.closest(".kgo")) return;
      if((el = t.closest("[data-m]"))){ m = el.dataset.m; ls("es_karte", m); zoom = false; draw(); return; }
      if((el = t.closest("[data-o]"))){
        var id = el.dataset.o, o = all().filter(function(x){ return x.id === id; })[0];
        sel = sel === id && !el.classList.contains("kp") ? null : id;
        if(o && o.pin && !o.pin[m]){ m = o.pin.route ? "route" : "pacifica"; ls("es_karte", m); }
        draw(); return;
      }
      if(t.closest(".kin2")){ zoom = !zoom; var v = app.querySelector(".kview2"); v.classList.toggle("zoom", zoom); }
    };
  };
})();
