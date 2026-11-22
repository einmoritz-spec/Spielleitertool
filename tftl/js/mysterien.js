/* Mysterien-Übersicht (Entwurf 2): Zuletzt gespielt = orange Rahmen, abgeschlossen = grau mit Haken */
window.renderMysterien = function(el){
  var last = null, done = {};
  try{ last = JSON.parse(localStorage.getItem("tftl_last") || "null"); done = JSON.parse(localStorage.getItem("tftl_done") || "{}"); }catch(e){}
  function card(m){ var c = "mc" + (m[5]==="x" ? " x" : "") + (last && last.id===m[0] ? " on" : "") + (done[m[0]] ? " fertig" : "");
    return '<a class="' + c + '" href="#m/' + m[0] + '">' + (done[m[0]] ? '<div class="st">✓</div>' : '') + (m[4] ? '<div class="s">' + m[4] + '</div>' : '') + '<div class="im" style="background-image:url(img/' + m[3] + '.webp)"></div><div class="tx"><b>' + m[1] + '</b><small>' + m[2] + '</small></div></a>'; }
  el.className = "page mys";
  el.innerHTML = window.MYSTERIEN.map(function(g){ return '<section class="grp"><div class="gh"><h2>' + g.t + '</h2><span class="t' + (g.dark ? ' b' : '') + '">' + g.tag + '</span><span class="pg">' + g.sub + '</span></div><div class="row">' + g.items.map(card).join("") + '</div></section>'; }).join("");
};
