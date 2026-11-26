/* Hub-Startseite (#hub): drei Bildtafeln – Tales from the Loop, Things from the Flood, The Electric State */
window.renderHub = function(el){
  function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  function ld(k){ try{ return JSON.parse(localStorage.getItem(k) || "null"); }catch(e){ return null; } }
  var T = ld("tftl_last"), F = ld("flood_last"), E = ld("es_last");
  var P = [
    {k:"t", logo:["../assets/logos/tales-from-the-loop.webp", 900, 155], w:330, hero:"hero-boulder", fp:"27% 50%", fa:"50% 55%",
      ort:"Mälarinseln und Boulder City", pre:"#", btn:"start",
      lk:[["Vorbereitung","start"],["Mysterien","mysterien"],["Karte","karte"]], tools:[["Würfel","wuerfel"],["Galerie","galerie"]], nm:"Loop",
      last: T && T.id ? {href:"#m/" + T.id, name:T.name, ort:T.ort} : null},
    {k:"f", logo:["../assets/logos/things-from-the-flood-stack.webp", 900, 604], w:300, hero:"flood/hero", fp:"84% 50%", fa:"68% 50%",
      ort:"Mälarinseln und Boulder City", pre:"#flood/", btn:"start",
      lk:[["Vorbereitung","start"],["Mysterien","mysterien"],["Karte","karte"]], tools:[["Würfel","wuerfel"],["Galerie","galerie"]], nm:"Flut",
      last: F && F.id ? {href:"#flood/m/" + F.id, name:F.name, ort:F.ort} : null},
    {k:"e", logo:["../assets/logos/electric-state.webp", 900, 597], w:270, hero:"es/hero", fp:"22% 50%", fa:"50% 50%",
      ort:"Pacifica", pre:"#es/", btn:"start",
      lk:[["Vorbereitung","start"],["Reise","reise"],["Karte","karte"]], tools:[["Charakterbogen","bogen"],["Fahrzeug","fahrzeug"],["Galerie","galerie"]], nm:"Electric State",
      last: E && E.name ? {href:"#es/reise/" + (E.teil || "route") + (E.ab ? "/" + E.ab : ""), name:E.name, ort:E.ort} : null}
  ];
  var first = !el.dataset.hubSeen; el.dataset.hubSeen = "1";
  el.innerHTML = '<div class="hb' + (first ? ' intro' : '') + '"><div class="hb-st">' + P.map(function(p, i){
    var lg = p.logo, h = Math.round(p.w * lg[2] / lg[1]);
    return '<article class="hp hp-' + p.k + (i === 0 ? ' on' : '') + '" style="--i:' + i + ';--lw:' + p.w + 'px;--lh:' + h + 'px;--fpx:' + p.fp.split(" ")[0] + ';--fax:' + p.fa.split(" ")[0] + ';--fy:' + (p.fa.split(" ")[1] || "50%") + '">' +
      '<div class="hp-im" style="background-image:url(img/' + p.hero + '.webp)"></div><div class="hp-dim"></div><div class="hp-sh"></div><div class="hp-fx"></div>' +
      '<div class="hp-in"><span class="hp-logo" role="img" aria-label="' + esc(p.nm) + '" style="-webkit-mask-image:url(' + lg[0] + ');mask-image:url(' + lg[0] + ')"></span>' +
      '<div class="hp-more"><div class="hp-ort">' + p.ort + '</div>' +
      (p.last ? '<a class="hp-last" href="' + esc(p.last.href) + '"><b>' + esc(p.last.name) + '</b>' + (p.last.ort && p.last.ort !== p.last.name && String(p.last.name).indexOf(p.last.ort) < 0 ? '<span>' + esc(p.last.ort) + '</span>' : '') + '</a>' : '') +
      '<div class="hp-act"><a class="hp-go" href="' + p.pre + p.btn + '">Öffnen</a>' +
      '<nav class="hp-lk">' + p.lk.map(function(l){ return '<a href="' + p.pre + l[1] + '">' + l[0] + '</a>'; }).join("") + '</nav></div></div></div></article>';
  }).join("") + '</div></div>';
  var ps = el.querySelectorAll(".hp"), touch = window.matchMedia && matchMedia("(hover:none)").matches;
  function setOn(c){ ps.forEach(function(x){ x.classList.toggle("on", x === c); }); }
  ps.forEach(function(c, i){
    c.addEventListener("mouseenter", function(){ if(!touch) setOn(c); });
    c.addEventListener("focusin", function(){ setOn(c); });
    c.addEventListener("click", function(e){
      if(!c.classList.contains("on")){ if(!e.target.closest("a") || touch){ e.preventDefault(); setOn(c); } return; }
      if(!e.target.closest("a")) location.hash = P[i].pre.slice(1) + P[i].btn;
    });
  });
};
