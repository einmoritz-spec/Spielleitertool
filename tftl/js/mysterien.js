/* Mysterien-Übersicht (Entwurf 2): Zuletzt gespielt = orange Rahmen, abgeschlossen = grau mit Haken */
window.renderMysterien = function(el){
  var C = window.TCTX || {p:"", ls:"tftl_"}, last = null, done = {};
  try{ last = JSON.parse(localStorage.getItem(C.ls + "last") || "null"); done = JSON.parse(localStorage.getItem(C.ls + "done") || "{}"); }catch(e){}
  function card(m){ var lk = m[5]==="l"; var c = "mc" + (m[5]==="x" || (lk && !m[3]) ? " x" : "") + (!lk && last && last.id===m[0] ? " on" : "") + (!lk && done[m[0]] ? " fertig" : "");
    return '<a class="' + c + '" href="#' + C.p + (lk ? m[6] : 'm/' + m[0]) + '">' + (!lk && done[m[0]] ? '<div class="st">✓</div>' : '') + (m[4] ? '<div class="s">' + m[4] + '</div>' : '') + (m[3] ? '<div class="im" style="background-image:url(img/' + m[3] + '.webp)"></div>' : '') + '<div class="tx"><b>' + m[1] + '</b><small>' + m[2] + '</small></div></a>'; }
  el.className = "page mys";
  el.innerHTML = (C.MYSTERIEN || window.MYSTERIEN).map(function(g){ return '<section class="grp"><div class="gh"><h2>' + g.t + '</h2><span class="t' + (g.dark ? ' b' : '') + '">' + g.tag + '</span><span class="pg">' + g.sub + '</span></div><div class="row">' + g.items.map(card).join("") + '</div></section>'; }).join("");
};
