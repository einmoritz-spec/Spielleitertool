/* Otherscape – Kopfzeile (Regeln · Charaktere · Welt · Gegner) mit Unterleiste. Hashes (#/regeln …) bleiben unverändert. */
var OS_GRP = [
 {t:"Regeln", k:["regeln","run"], items:[["Regelwerk","regeln"],["//Run","run"]]},
 {t:"Charaktere", k:["charaktererstellung","archetypen","kits","katalog"], items:[["Charaktererstellung","charaktererstellung"],["Archetypen","archetypen"],["Theme Books","kits"],["Straßenkatalog","katalog"]]},
 {t:"Welt", k:["tokyo","metro","fraktionen","gegner"], items:[["Tokyo","tokyo"],["Metro","metro"],["Fraktionen","fraktionen"],["Gegner","gegner"]]}
];
function osNav(){
  var p = (location.hash || "#/").slice(2).split("/")[0], top = document.querySelector(".topbar"); if(!top) return;
  var g = OS_GRP.filter(function(x){ return x.k.indexOf(p) >= 0; })[0];
  var kt = document.getElementById("ktabs"), sb = document.getElementById("ossub");
  if(!kt){ kt = document.createElement("nav"); kt.id = "ktabs"; kt.className = "ktabs"; var br = top.querySelector(".brand"); br.parentNode.insertBefore(kt, br.nextSibling); }
  if(!sb){ sb = document.createElement("div"); sb.id = "ossub"; sb.className = "ossub"; top.parentNode.insertBefore(sb, top.nextSibling); }
  var show = !!g;
  document.body.classList.toggle("osnav", show);
  document.body.classList.toggle("ossub-on", show && g.items.length > 0);
  kt.innerHTML = show ? OS_GRP.map(function(x){ return '<a class="' + (x === g ? "on" : "") + '" onclick="location.hash=\'#/' + x.items.concat([[0, x.k[0]]])[0][1] + '\'">' + x.t + "</a>"; }).join("") : "";
  if(show && g.items.length){ sb.className = "ossub on"; sb.innerHTML = g.items.map(function(it){ return '<a class="' + (it[1] === p ? "on" : "") + '" onclick="location.hash=\'#/' + it[1] + '\'">' + it[0] + "</a>"; }).join(""); }
  else { sb.className = "ossub"; sb.innerHTML = ""; }
}
window.addEventListener("hashchange", osNav);
document.addEventListener("DOMContentLoaded", osNav);
osNav();
