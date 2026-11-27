/* Vaesen – Settingbücher als Untersettings (Mythic Britain & Ireland, Mythic Carpathia): Startseite, Welt, Gesellschaft, Wesen. Daten in SBD.<id> (js/data/mbi-*.js). */
var SBS = {
 mbi: {id:"mbi", titel:"Mythic Britain & Ireland", buch:"vae_mbi", hero:"mbi/cover", pos:"center 38%", cls:"sb-mbi", sh:"Settingbuch",
  bereiche:[["welt","Die Welt","Vier Nationen, London, Anderswelten, Karte","mbi/karte","50% 30%"],["gesellschaft","Die Gesellschaft","Geschichte, Rose House, Archetypen, Tabellen","mbi/rose","50% 20%"],["wesen","Wesen","13 Wesen der britischen Inseln","mbi/banshee","50% 30%"]],
  mys:["meg","llantywyll","hampstead"]},
 car: {id:"car", titel:"Mythic Carpathia", buch:"vae_carp", hero:"car/cover", pos:"center 38%", cls:"sb-car", sh:"Settingbuch",
  bereiche:[["welt","Die Welt","Böhmen, Volksglaube, Prag, Städte","car/karte","50% 30%"],["gesellschaft","Die Gesellschaft","Pravda, Pulverturm, Ausbauten, Archetyp","car/pravda","50% 20%"],["wesen","Wesen","16 Wesen der Karpaten","car/wesen","50% 30%"]],
  mys:["pakt","sturm","maharal"]}
};
var SBD = window.SBD = window.SBD || {};
function sbSet(){ var s = SBS[cur]; return s || null; }
function sbTile(id){
  var M = window.VAE_MYS && VAE_MYS[id]; if(!M) return "";
  var st = {}; try{ st = JSON.parse(localStorage.getItem("vae_som_" + id + "_v1") || "{}"); }catch(e){}
  var scd = (st.cd || []).length, scl = Object.keys(st.clue || {}).length, last = ({hg: 1, an: 1, orte: 1, kf: 1, ns: 1})[st.last] ? st.last : "hg";
  return '<a class="vs-my" onclick="go(\'som/' + id + '/' + last + '\')" style="--im:url(img/' + M.bild + '.webp)"><span class="vs-k">' + esc(M.zeit || "") + '</span><span class="vs-t"><b>' + esc(M.titel) + '</b><small>' + esc((M.ort || "").split(" · ")[0]) + '</small><em>Countdown ' + scd + ' / ' + (M.cd ? M.cd.length : 4) + ' · Hinweise ' + scl + '</em><i>' + (scd || scl ? "Weiterspielen" : "Starten") + '</i></span></a>';
}
function sbStart(S){
  var areas = S.bereiche.map(function(a){ return '<a onclick="go(\'' + S.id + '/' + a[0] + '\')" style="--im:url(img/' + a[3] + '.webp);--pos:' + a[4] + '"><b>' + esc(a[1]) + '<small>' + esc(a[2]) + '</small></b></a>'; }).join("");
  var my = S.mys.map(sbTile).join("");
  return '<div class="vs-hero sb-hero" style="background-image:url(img/' + S.hero + '.webp);background-position:' + S.pos + '"><div class="sb-lg"><img src="../assets/logos/vaesen-dunkel.webp" alt="Vaesen"><span>' + esc(S.titel) + '</span></div></div><div class="vs">' +
   '<div class="vs-sh">' + S.sh + '</div><div class="vs-strip">' + areas + '</div>' +
   (my ? '<div class="vs-sh">Mysterien</div><div class="vs-mys"><div class="vs-grp" style="flex:1"><div class="vs-row">' + my + '</div></div></div>' : '') + '</div>';
}
/* ---------- Inhaltsblöcke ---------- */
function sbBlk(b, S){
  switch(b.t){
   case "p": return "<p>" + b.x + "</p>";
   case "h": return "<h3>" + b.x + "</h3>";
   case "h4": return "<h4>" + b.x + "</h4>";
   case "q": return '<p class="sb-q">' + b.x + "</p>";
   case "ul": return "<ul>" + b.x.map(function(x){ return "<li>" + x + "</li>"; }).join("") + "</ul>";
   case "box": return '<div class="sb-box"><h4>' + b.h + (b.p ? ' <span class="pg">S. ' + b.p + '</span>' : '') + '</h4>' + (typeof b.x === "string" ? "<p>" + b.x + "</p>" : b.x.map(function(x){ return "<p>" + x + "</p>"; }).join("")) + '</div>';
   case "tbl": return '<div class="sb-tw"><table class="t"><tr>' + b.head.map(function(h){ return "<th>" + h + "</th>"; }).join("") + "</tr>" + b.rows.map(function(r){ return "<tr>" + r.map(function(c){ return "<td>" + c + "</td>"; }).join("") + "</tr>"; }).join("") + "</table></div>";
   case "vers": return '<p><a class="ms-vers" onclick="BV.open(\'' + S.buch + '\',' + b.p + ')">' + esc(b.x) + ' · im Buch ansehen, S. ' + b.p + '</a></p>';
   case "img": return '<figure class="sb-im ' + (b.s || "r") + '" onclick="msZoom(this.querySelector(\'img\').src)"><img src="img/' + b.n + '.webp" alt="" loading="lazy"></figure>';
  }
  return "";
}
/* Kästen (box) stehen als Kartenraster nebeneinander, Fließtext darüber/darunter */
function sbBody(bl, S){
  var out = "", bx = [];
  function fb(){ if(bx.length){ out += '<div class="sb-bg">' + bx.map(function(b){ return sbBlk(b, S); }).join("") + '</div>'; bx = []; } }
  bl.forEach(function(b){ if(b.t === "box"){ bx.push(b); } else { fb(); out += sbBlk(b, S); } });
  fb(); return '<div class="sb-tx">' + out + '</div>';
}
function sbPg(S, p){ return p ? '<span class="pg" data-pgbook="' + S.buch + '">S. ' + p + ' · <a onclick="' + inBook(p, S.buch) + '">im Buch</a></span>' : ""; }
function viewSB(id){
  var S = SBS[id], p = sub.split("/"); document.body.classList.add(S.cls);
  if(!p[0]) return sbStart(S);
  if(p[0] === "wesen" && window.sbWesen) return sbWesen(S, p[1]);
  var secs = ((SBD[id] || {})[p[0]]) || [];
  if(!secs.length) return '<div class="page"><div class="empty">Dieser Bereich ist noch nicht eingebaut.</div></div>';
  var sec = secs.filter(function(x){ return x.id === p[1]; })[0] || secs[0];
  var side = [{i:secs.map(function(x){ return {id:x.id, go:id + "/" + p[0] + "/" + x.id, t:x.t}; })}];
  return main(side, sec.id, '<div class="sb-pg"><div class="sb-h"><h1>' + esc(sec.t) + '</h1>' + sbPg(S, sec.p) + '</div>' + sbBody(sec.b, S) + '</div>');
}
/* Kopfzeile: Bereiche des Untersettings */
function sbHead(S){ var on = sub.split("/")[0]; return S.bereiche.map(function(a){ return '<a class="' + (a[0] === on ? "on" : "") + '" onclick="go(\'' + S.id + '/' + a[0] + '\')">' + esc(a[1]) + '</a>'; }).join(""); }
