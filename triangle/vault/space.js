/* You're in Space and Everything's Perfectly Fine: eigene Bausteine (TA_VB) */
var SP_RAUM = [["luft","Luftschleuse"],["gaenge","Gänge"],["garten","Garten"],["kranken","Krankenstation"],["aussicht","Aussichtsdeck"],["wohn","Wohnquartiere"],["ecke","Die lästige Ecke"]];
function spName(r){ var q = SP_RAUM.filter(function(x){ return x[0] === r; })[0]; return q ? q[1] : r; }
/* Labor-Szene (Fundstück S. 1) */
TA_VB.labor = function(b){
  return '<div class="sp-labor"><i class="sp-l1"></i><h2>' + tx(b.h).replace(/^Du/, '<em>Du</em>') + '</h2><div class="sp-txt">' + b.x.map(function(p){ return '<p>' + tx(p) + '</p>'; }).join("") +
    '<p class="sp-ende">' + tx(b.ende).replace(/mich/, '<em>mich</em>') + '</p></div><i class="sp-l2"></i></div>';
};
/* Stationsplan (S. 4): Räume anklicken = zur Raumkarte dieser Schicht springen */
function spPlan(klein){
  function g(r, inner, lx, ly, txt, cls){ return '<g class="sp-r" data-r="' + r + '" onclick="spZu(\'' + r + '\')"><title>' + spName(r) + '</title>' + inner + (txt ? '<text x="' + lx + '" y="' + ly + '" class="' + (cls || "") + '">' + txt.split("|").map(function(t, i){ return '<tspan x="' + lx + '" dy="' + (i ? "1.1em" : 0) + '">' + t + '</tspan>'; }).join("") + '</text>' : '') + '</g>'; }
  return '<figure class="sp-plan' + (klein ? " klein" : "") + '"><svg viewBox="0 0 660 500" role="img" aria-label="Stationsplan">' +
    g("gaenge", '<path d="M60 160h40v110h-40zM170 92h270v40H170zM450 170h40v230h-40zM160 372h300v40H160zM390 236h60v30h-60z"/>', 0, 0, "") +
    g("kranken", '<rect x="20" y="40" width="150" height="130" rx="6"/>', 34, 96, "Kranken-|station") +
    g("garten", '<rect x="20" y="262" width="150" height="190" rx="6"/>', 40, 362, "Garten") +
    g("aussicht", '<circle cx="470" cy="104" r="72"/>', 470, 110, "Aussichts-|deck", "m") +
    g("wohn", '<rect x="200" y="178" width="190" height="150" rx="6"/>', 222, 246, "Wohn-|quartiere") +
    g("ecke", '<path d="M450 372h40v40h-40z" class="eck"/>', 506, 384, "Die lästige|Ecke", "d") +
    g("luft", '<circle cx="262" cy="440" r="26"/>', 300, 452, "Luftschleuse &|Rettungskapseln", "d") +
    '</svg></figure>';
}
TA_VB.stationsplan = function(){ return spPlan(false); };
function spZu(r){
  var el = document.getElementById("raum-" + r); if(!el) return;
  el.scrollIntoView({behavior:"smooth", block:"center"}); el.classList.remove("blink"); void el.offsetWidth; el.classList.add("blink");
}
/* Schicht-Einleitung: Leitsatz groß, Text, kleiner Plan daneben */
TA_VB.schicht = function(b){
  return '<div class="sp-schicht">' + (b.plan === false ? '' : spPlan(true)) + '<p class="sp-lead">' + tx(b.lead) + '</p>' + b.x.map(function(p){ return '<p>' + tx(p) + '</p>'; }).join("") + '</div>';
};
/* Räume einer Schicht als festes Raster – immer gleiche Reihenfolge, damit man Schichten vergleichen kann */
TA_VB.raeume = function(b, ctx){
  var by = {}; b.x.forEach(function(q){ by[q.r] = q; });
  return '<div class="sp-raeume">' + SP_RAUM.map(function(q){
    var e = by[q[0]];
    if(!e || e.leer) return '<section class="sp-k sp-leer r-' + q[0] + '" id="raum-' + q[0] + '"><h3>' + q[1] + '</h3><p>' + tx(e && e.leer ? e.leer : "—") + '</p></section>';
    return '<section class="sp-k r-' + q[0] + '" id="raum-' + q[0] + '"><h3>' + tx(e.h || q[1]) + '</h3>' + (e.bild ? '<img class="sp-skizze" src="' + IMG("space/full/" + e.bild) + '" alt="" onclick="zoom(this.src)">' : '') + taB(e.b) + '</section>';
  }).join("") + '</div>';
};
/* Kernwahrheit (S. 15): blau umrandeter Kasten */
TA_VB.kern = function(b){ return '<div class="sp-kern"><h3>' + tx(b.h) + '</h3>' + taB(b.b) + '</div>'; };
/* Aufklappbarer Kasten (Chaos-Effekte in der rechten Spalte) */
TA_VB.klapp = function(b){ return '<details class="sp-klapp"><summary>' + tx(b.h) + '</summary><div>' + taB(b.b) + '</div></details>'; };
