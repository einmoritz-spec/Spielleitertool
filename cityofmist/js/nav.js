/* City of Mist – Kopfzeile (Welt · Charaktere · Regeln · Spielleitung) mit Unterleiste.
   Die Reiter fassen die Bereiche aller Bücher zusammen; die Hashes (#rw/…, #ss/…, #mc/…, #tb) bleiben unverändert. */
var CM_GRP = [
 {id:"welt", t:"Welt", items:[
  ["Einführung","rw/welt",function(r){return r.sys==="rw"&&r.tab==="welt";}],
  ["Die Stadt","mc/stadt",function(r){return r.sys==="mc"&&r.tab==="stadt";}],
  ["Orte & NSCs","ss/sl/orte",function(r){return r.sys==="ss"&&r.tab==="sl"&&r.sub==="orte";}]]},
 {id:"charakter", t:"Charaktere", items:[
  ["Erschaffung","rw/charakter",function(r){return r.sys==="rw"&&r.tab==="charakter";}],
  ["Themenbücher","tb",function(r){return r.sys==="tb";}],
  ["Entwicklung","rw/entwicklung",function(r){return r.sys==="rw"&&r.tab==="entwicklung";}],
  ["Erweiterung","ss/spieler",function(r){return r.sys==="ss"&&r.tab==="spieler";}]]},
 {id:"regeln", t:"Regeln", items:[
  ["Regeln","rw/regeln",function(r){return r.sys==="rw"&&r.tab==="regeln";}],
  ["Spielbeispiel","rw/spielbeispiel",function(r){return r.sys==="rw"&&r.tab==="spielbeispiel";}],
  ["Dokumente","rw/dokumente",function(r){return r.sys==="rw"&&r.tab==="dokumente";}]]},
 {id:"sl", t:"Spielleitung", items:[
  ["Spielleitung","mc/spielleitung",function(r){return r.sys==="mc"&&(r.tab==="spielleitung"||r.tab==="start");}],
  ["Dangers","mc/dangers",function(r){return r.sys==="mc"&&r.tab==="dangers";}],
  ["Avatare","mc/avatare",function(r){return r.sys==="mc"&&r.tab==="avatare";}],
  ["Hilfsmittel","mc/hilfsmittel",function(r){return r.sys==="mc"&&r.tab==="hilfsmittel";}],
  ["Gatekeeper","ss/sl/gatekeeper",function(r){return r.sys==="ss"&&r.tab==="sl"&&r.sub==="gatekeeper";}],
  ["Showdowns-Avatare","ss/sl/avatare",function(r){return r.sys==="ss"&&r.tab==="sl"&&r.sub==="avatare";}]]}
];
function cmNav(){
  var r = route(), top = document.querySelector(".topbar"), kt = document.getElementById("ktabs"), sb = document.getElementById("cmsub");
  if(!top) return;
  if(!kt){ kt = document.createElement("nav"); kt.id = "ktabs"; kt.className = "ktabs"; var br = top.querySelector(".brand"); br.parentNode.insertBefore(kt, br.nextSibling); }
  if(!sb){ sb = document.createElement("div"); sb.id = "cmsub"; sb.className = "cmsub"; top.parentNode.insertBefore(sb, top.nextSibling); }
  var cur = null, curItem = -1;
  CM_GRP.forEach(function(g){ g.items.forEach(function(it, i){ if(!cur && it[2](r)){ cur = g; curItem = i; } }); });
  var hub = r.sys === "hub";
  document.body.classList.toggle("cmss-sl", r.sys === "ss" && r.tab === "sl");
  document.body.classList.toggle("cmnav", !hub);
  if(hub){ document.body.classList.remove("cmhassub"); kt.innerHTML = ""; sb.innerHTML = ""; sb.className = "cmsub"; return; }
  kt.innerHTML = CM_GRP.map(function(g){ return '<a class="' + (cur && cur.id === g.id ? "on" : "") + '" onclick="go(\'' + g.items[0][1] + '\')">' + g.t + "</a>"; }).join("");
  document.body.classList.toggle("cmhassub", !!cur);
  if(cur){ sb.className = "cmsub on"; sb.innerHTML = cur.items.map(function(it, i){ return '<a class="' + (i === curItem ? "on" : "") + '" onclick="go(\'' + it[1] + '\')">' + it[0] + "</a>"; }).join(""); }
  else { sb.className = "cmsub"; sb.innerHTML = ""; }
}
window.addEventListener("hashchange", cmNav);
cmNav();
