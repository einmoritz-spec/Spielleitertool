/* Mysterien-Übersicht: Hover-Akkordeon je Kampagne/Band (Bildstreifen), Karteikarten ohne Bild darunter.
   Bausteine (mysCard/mysHtml/mysWire) werden auch von den Vorbereitungsseiten genutzt. */
window.mysState = function(){
  var C = window.TCTX || {p:"", ls:"tftl_"}, last = null, done = {};
  try{ last = JSON.parse(localStorage.getItem(C.ls + "last") || "null"); done = JSON.parse(localStorage.getItem(C.ls + "done") || "{}"); }catch(e){}
  return {C:C, last:last, done:done};
};
/* Eintrag: [id, Titel, Zusatz, Bild, Fähnchen, Art, Ziel, Bildposition] */
window.mysCard = function(m, on, st){
  var C = st.C, lk = m[5] === "l", c = "mc" + (on ? " on" : "") + (!lk && st.done[m[0]] ? " fertig" : "") + (!m[3] ? " nb" : "") + (m[5] === "x" ? " x" : "");
  return '<a class="' + c + '" href="#' + C.p + (lk ? m[6] : 'm/' + m[0]) + '">' + (m[3] ? '<div class="im" style="background-image:url(img/' + m[3] + '.webp)' + (m[7] ? ';background-position:' + m[7] : '') + '"></div><div class="sh"></div>' : '') +
    (!lk && st.done[m[0]] ? '<div class="st">✓</div>' : '') + (m[4] ? '<div class="s">' + m[4] + '</div>' : '') +
    '<div class="vt"><b>' + m[1] + '</b></div><div class="tx"><b>' + m[1] + '</b><small>' + m[2] + '</small></div></a>';
};
/* o.compact: nur Bildstreifen (ohne Karteikarten) und nur Gruppen mit Bildern */
window.mysHtml = function(groups, st, o){
  o = o || {};
  return groups.map(function(g){
    var pic = g.items.filter(function(m){ return m[3]; }), plain = o.compact ? [] : g.items.filter(function(m){ return !m[3]; });
    if(o.compact && !pic.length) return "";
    var open = 0; if(st.last) pic.forEach(function(m, i){ if(m[0] === st.last.id) open = i; });
    return '<section class="grp"><div class="gh"><h2>' + g.t + '</h2><span class="t' + (g.dark ? ' b' : '') + '">' + g.tag + '</span><span class="pg">' + g.sub + '</span></div>' +
      (pic.length ? '<div class="acc">' + pic.map(function(m, i){ return window.mysCard(m, i === open, st); }).join("") + '</div>' : '') +
      (plain.length ? '<div class="kk2">' + plain.map(function(m){ return window.mysCard(m, false, st); }).join("") + '</div>' : '') + '</section>'; }).join("");
};
window.mysWire = function(el){
  var touch = window.matchMedia && matchMedia("(hover:none)").matches;
  el.querySelectorAll(".acc").forEach(function(acc){
    var cs = acc.querySelectorAll(".mc");
    function setOn(c){ cs.forEach(function(x){ x.classList.toggle("on", x === c); }); }
    cs.forEach(function(c){
      c.addEventListener("mouseenter", function(){ if(!touch) setOn(c); });
      c.addEventListener("focus", function(){ setOn(c); });
      c.addEventListener("click", function(e){ if(touch && !c.classList.contains("on")){ e.preventDefault(); setOn(c); } });
    });
  });
};
window.renderMysterien = function(el){
  var st = window.mysState(), C = st.C;
  el.className = "page mys";
  el.innerHTML = window.mysHtml(C.MYSTERIEN || window.MYSTERIEN, st);
  window.mysWire(el);
};
