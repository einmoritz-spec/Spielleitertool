/* Mysterien-Übersicht: Hover-Akkordeon je Kampagne/Band (Bildstreifen), Karteikarten ohne Bild darunter */
window.renderMysterien = function(el){
  var C = window.TCTX || {p:"", ls:"tftl_"}, last = null, done = {};
  try{ last = JSON.parse(localStorage.getItem(C.ls + "last") || "null"); done = JSON.parse(localStorage.getItem(C.ls + "done") || "{}"); }catch(e){}
  function pgOf(s){ var m = String(s || "").match(/S\.\s*\d+(?:[–-]\d+)?/); return m ? m[0] : ""; }
  function card(m, on){ var lk = m[5] === "l", c = "mc" + (on ? " on" : "") + (!lk && done[m[0]] ? " fertig" : "") + (!m[3] ? " nb" : "") + (m[5] === "x" ? " x" : "");
    return '<a class="' + c + '" href="#' + C.p + (lk ? m[6] : 'm/' + m[0]) + '">' + (m[3] ? '<div class="im" style="background-image:url(img/' + m[3] + '.webp)"></div><div class="sh"></div>' : '') +
      (!lk && done[m[0]] ? '<div class="st">✓</div>' : '') + (m[4] ? '<div class="s">' + m[4] + '</div>' : '') +
      '<div class="vt"><b>' + m[1] + '</b></div><div class="tx"><b>' + m[1] + '</b><small>' + m[2] + '</small></div></a>'; }
  el.className = "page mys";
  el.innerHTML = (C.MYSTERIEN || window.MYSTERIEN).map(function(g){
    var pic = g.items.filter(function(m){ return m[3]; }), plain = g.items.filter(function(m){ return !m[3]; });
    var open = 0; if(last) pic.forEach(function(m, i){ if(m[0] === last.id) open = i; });
    return '<section class="grp"><div class="gh"><h2>' + g.t + '</h2><span class="t' + (g.dark ? ' b' : '') + '">' + g.tag + '</span><span class="pg">' + g.sub + '</span></div>' +
      (pic.length ? '<div class="acc">' + pic.map(function(m, i){ return card(m, i === open); }).join("") + '</div>' : '') +
      (plain.length ? '<div class="kk2">' + plain.map(function(m){ return card(m, false); }).join("") + '</div>' : '') + '</section>'; }).join("");
  var touch = window.matchMedia && matchMedia("(hover:none)").matches;
  el.querySelectorAll(".acc").forEach(function(acc){
    var cs = acc.querySelectorAll(".mc");
    function setOn(c){ cs.forEach(function(x){ x.classList.toggle("on", x === c); }); }
    cs.forEach(function(c){
      c.addEventListener("mouseenter", function(){ if(!touch) setOn(c); });
      c.addEventListener("focus", function(){ setOn(c); });
      c.addEventListener("click", function(e){ if((touch || window.innerWidth < 700 && false) && !c.classList.contains("on")){ e.preventDefault(); setOn(c); } });
    });
  });
};
