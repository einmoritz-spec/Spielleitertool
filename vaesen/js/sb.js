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
   case "arch": return sbArch(((SBD[S.id] || {}).arch || []).filter(function(x){ return x.id === b.a; })[0], S);
   case "vers": return '<p><a class="ms-vers" onclick="BV.open(\'' + S.buch + '\',' + b.p + ')">' + esc(b.x) + ' · im Buch ansehen, S. ' + b.p + '</a></p>';
   case "img": return '<figure class="sb-im ' + (b.s || "r") + '" onclick="msZoom(this.querySelector(\'img\').src)"><img src="img/' + b.n + '.webp" alt="" loading="lazy"></figure>';
  }
  return "";
}

function sbArch(a, S){
  if(!a) return "";
  function ul(l){ return "<ul>" + l.map(function(x){ return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>"; }
  function lb(t, v){ return "<p><b>" + t + ":</b> " + v + "</p>"; }
  return '<section class="sb-ar"><div class="sb-ar-pic"><img src="img/' + a.img + '.webp" alt="" onclick="msZoom(this.src)"></div><div class="sb-ar-tx"><h3>' + esc(a.name) + ' <span class="pg">S. ' + a.p + '</span></h3><p class="sb-q">' + esc(a.quote) + '</p>' +
   lb("Hauptattribut", esc(a.attr)) + lb("Hauptfertigkeit", esc(a.skill)) + lb("Talente", esc(a.talente.join(", "))) + lb("Ressourcen", esc(a.res)) + lb("Ausrüstung", esc(a.ausr.join(", "))) +
   (a.extra ? '<div class="sb-box" style="margin-top:8px"><h4>' + esc(a.extra.h) + '</h4><p>' + esc(a.extra.x) + '</p></div>' : '') + '</div>' +
   '<div class="sb-ar-gx"><div><h5>Name</h5><ul><li>Vorname: ' + esc(a.vor.join(", ")) + '</li><li>Nachname: ' + esc(a.nach.join(", ")) + '</li></ul></div><div><h5>Motivation</h5>' + ul(a.mot) + '</div><div><h5>Trauma</h5>' + ul(a.trauma) + '</div><div><h5>Dunkles Geheimnis</h5>' + ul(a.geheim) + '</div><div><h5>Beziehungen</h5>' + ul(a.beziehung) + '</div></div></section>';
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

/* ---------- Wesen (Kapitel 3): Bildraster + Karten im Stil der Vaesen-Karten ---------- */
function sbWesen(S, id){
  var W = (SBD[S.id] || {}).wesen; if(!W) return '<div class="page"><div class="empty">Dieser Bereich ist noch nicht eingebaut.</div></div>';
  var all = W.extra.filter(function(x){ return x.id === "einfuehrung"; }).concat(W.extra.filter(function(x){ return x.id !== "einfuehrung"; }));
  var ex = W.extra.filter(function(x){ return x.id === id; })[0], v = W.list.filter(function(x){ return x.id === id; })[0];
  var side = [{i:W.extra.map(function(x){ return {id:x.id, go:S.id + "/wesen/" + x.id, t:x.t}; })}, {i:W.list.map(function(x){ return {id:x.id, go:S.id + "/wesen/" + x.id, t:x.name}; })}];
  function li(a){ return "<ul>" + a.map(function(x){ var m = /^([^:]{2,32}):\s(.+)$/.exec(x); return "<li>" + (m ? "<b>" + m[1] + ":</b> " + m[2] : x) + "</li>"; }).join("") + "</ul>"; }
  function st(l, x){ return '<div><span>' + l + '</span><b>' + (x == null ? "–" : x) + '</b></div>'; }
  if(ex) return main(side, ex.id, '<div class="sb-pg"><div class="sb-h"><h1>' + esc(ex.t) + '</h1>' + sbPg(S, ex.p) + '</div>' + sbBody(ex.b, S) + '</div>');
  if(v){
    var quote = v.q ? '<p class="hand" style="margin:6px 0 0;max-width:90ch">„' + v.q + '“ <span style="font-size:17px">– ' + v.qa + ', ' + v.qd + '</span></p>' : "";
    var head = '<div style="grid-column:1/3"><div style="display:flex;align-items:baseline;gap:6px 14px;flex-wrap:wrap"><h1>' + esc(v.name) + '</h1>' + sbPg(S, v.p) + '</div>' + quote + '</div>';
    var left = '<div class="ph" style="margin-top:0"><img src="img/' + v.img + '.webp" alt="' + esc(v.name) + '"><div>' + v.text.map(function(t){ return '<p style="font-size:17.5px">' + t + '</p>'; }).join("") + '</div></div>' +
      '<div class="g2" style="margin-top:6px"><div><h3>Magische Kräfte</h3>' + li(v.powers) + '</div>' + (v.cond ? '<div><h3>Zustände</h3>' + li(v.cond) + '</div>' : "") + '</div>';
    var right = box('<div class="hd" style="text-align:center;letter-spacing:.14em;color:var(--red);font-size:15px">EIGENSCHAFTEN</div><div class="stat" style="margin-top:6px">' + st("Macht", v.might) + st("Körperkontr.", v.body) + st("Magie", v.magic) + st("Manipul.", v.manip) + st("Furcht", v.fear) + '</div>', "font-size:15.5px") +
      (v.att ? '<h3>Angriffe</h3><table class="t"><tr><th>Angriff</th><th>Schaden</th><th>Reichweite</th></tr>' + v.att.map(function(r){ return "<tr><td>" + r[0] + "</td><td>" + r[1] + "</td><td>" + r[2] + "</td></tr>"; }).join("") + '</table>' : "") +
      (v.note ? '<p class="pg" style="white-space:normal">' + v.note + '</p>' : "") +
      '<h3>Ritual</h3>' + box('<p style="margin:0">' + v.ritual + '</p>', "font-size:16px") +
      '<h3>Geheimnis</h3>' + box('<p style="margin:0">' + v.secret + '</p>', "font-size:16px") +
      (v.box ? box('<h4 style="margin:0 0 4px">' + v.box.h + '</h4><p style="margin:0">' + v.box.x + '</p>', "font-size:16px;margin-top:10px") : "");
    var exs = '<div style="grid-column:1/3"><h3 style="margin-top:0">Beispiele für Konflikte</h3><div class="exg">' + v.ex.map(function(t){ return box(t); }).join("") + '</div></div>' +
      (v.var ? '<div style="grid-column:1/3"><h3 style="margin-top:6px">Varianten</h3><div class="exg">' + v.var.map(function(t){ return box(t); }).join("") + '</div></div>' : "");
    return main(side, v.id, '<div class="vd">' + head + '<div>' + left + '</div><div style="font-size:17px">' + right + '</div>' + exs + '</div>');
  }
  var einf = W.extra.filter(function(x){ return x.id === "einfuehrung"; })[0];
  var cards = W.list.map(function(x){ return '<div class="box card" onclick="go(\'' + S.id + '/wesen/' + x.id + '\')"><div class="im sb-wi"><img src="img/' + x.img + '.webp" alt="' + esc(x.name) + '"></div><div class="tx"><h3>' + esc(x.name) + '</h3></div><i></i><b></b></div>'; }).join("");
  var more = W.extra.filter(function(x){ return x.id !== "einfuehrung"; }).map(function(x){ return '<a class="sb-wx" onclick="go(\'' + S.id + '/wesen/' + x.id + '\')">' + esc(x.t) + '</a>'; }).join("");
  return '<div class="page sb-wes"><div class="sb-more">' + more + '</div><div class="cards v">' + cards + '</div></div>';
}
