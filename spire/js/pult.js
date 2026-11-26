/* THE SPIRE – Spielleiter-Pult (Overlay, Knopf oben rechts neben dem i, Taste „p“).
   Live-Übersicht: Figuren mit Stress/Fallout · Begegnung mit Gegnern · Suche nach Gegnern (je Gebiet) und allen Inhalten.
   Alles arbeitet auf demselben Stand wie Zelle und Gegner-Seite (ST.figuren, ST.begegnung). */
var PU = {q:"", dom:"alle", offen:{}};
function puEl(){ return document.getElementById("pult"); }
function puOpen(){
  if(puEl()){ puClose(); return; }
  var ov = document.createElement("div"); ov.id = "pult"; ov.className = "pu-ov"; document.body.appendChild(ov);
  document.body.classList.add("pult-an"); puDraw();
}
function puClose(){ var o = puEl(); if(o) o.remove(); document.body.classList.remove("pult-an"); }
function puOffen(id){ PU.offen[id] = !PU.offen[id]; puDraw(); }
function puDom(k){ PU.dom = k; puDraw(); }
function puSuche(v){ PU.q = v; puErgebnis(); }
function puAdd(id){ bgAdd(id); }
function puFigNeu(){ var f = zNeu(); zFigs().push(f); save(); render(); }

function puFiguren(){
  var F = zFigs();
  return '<section class="pu-c pu-fig"><h2>Charaktere</h2><div class="pu-figs">' + F.map(zKarte).join("") + '</div>' +
    '<div class="pu-bt"><button onclick="zVfAuswahl()">Vorgefertigte Figur</button><button onclick="puFigNeu()">Neue Figur</button></div></section>';
}
function puBegegnung(){
  var L = gBeg().filter(function(e){ return gById(e.id); }), ids = [], grp = {};
  L.forEach(function(e){ if(!grp[e.id]){ grp[e.id] = []; ids.push(e.id); } grp[e.id].push(e); });
  var h = ids.map(function(id){
    var g = gById(id), G = grp[id], mehr = G.length > 1, on = PU.offen[id];
    return '<div class="pu-g"><div class="pu-gk"><b onclick="puOffen(\'' + id + '\')" title="Werte ' + (on ? 'zuklappen' : 'zeigen') + '">' + esc(g.kurz || g.t) + '</b>' +
      '<span class="pu-ac"><i onclick="bgAdd(\'' + id + '\')" title="Noch einen hinzufügen">+</i><i onclick="bgDelAlle(\'' + id + '\')" title="Alle entfernen">×</i></span></div>' +
      '<div class="bk">' + G.map(function(e, k){ return bgZeile(e, g, mehr ? k + 1 : 0); }).join("") + '</div>' + (on ? gBlock(g, {ohneZiel:true}) : '') + '</div>';
  }).join("");
  return '<section class="pu-c pu-beg"><h2>Begegnung' + (L.length ? '<button class="pu-r" onclick="bgClear()" title="Alle entfernen">Leeren</button>' : '') + '</h2>' + (h || '') + '</section>';
}
function puErgebnis(){
  var box = document.getElementById("pu-res"); if(!box) return;
  var q = sFold(PU.q.trim()), ws = q ? q.split(/\s+/) : [];
  var G = SP_GEGNER.filter(function(g){
    if(PU.dom !== "alle" && gKey(g) !== PU.dom) return false;
    if(!ws.length) return true;
    var t = sFold(g.t + " " + (g.en || "") + " " + (g.ort || "") + " " + (g.kurz || ""));
    return ws.every(function(w){ return t.indexOf(w) >= 0; });
  });
  if(!ws.length || PU.dom !== "alle") G = gSortiert().filter(function(g){ return G.indexOf(g) >= 0; });
  var tot = G.length; G = G.slice(0, 60);
  var h = G.length ? '<div class="pu-gl">' + G.map(function(g){
    return '<div class="pu-gr"><span class="n" onclick="puOffen(\'g:' + g.id + '\');puErgebnis()">' + esc(g.t) + '<small>Schw. ' + esc(g.schw ? g.schw.k : "·") + ' · Wid. ' + esc(gWidTxt(g)) + '</small></span><i onclick="puAdd(\'' + g.id + '\')" title="Zur Begegnung">+</i></div>' +
      (PU.offen["g:" + g.id] ? gBlock(g, {ohneZiel:true}) : "");
  }).join("") + (tot > 60 ? '<p class="pu-m">' + tot + ' Gegner, die ersten 60</p>' : '') + '</div>' : '<p class="pu-m">Kein Gegner gefunden.</p>';
  /* alle weiteren Inhalte */
  var A = "";
  if(ws.length && q.length >= 2){
    if(!SIDX) sBuild();
    var res = [];
    SIDX.forEach(function(e){ if(ws.every(function(w){ return e.l.indexOf(w) >= 0; })){ var tl = sFold(e.t), sc = 0; ws.forEach(function(w){ if(tl.indexOf(w) === 0) sc += 6; else if(tl.indexOf(w) >= 0) sc += 4; }); res.push({e:e, s:sc}); } });
    res.sort(function(a, b){ return b.s - a.s; });
    A = res.slice(0, 14).map(function(o){ var e = o.e; return '<a href="#' + e.r + '" onclick="puClose()"><b>' + esc(e.t) + '</b><span>' + esc(e.ctx) + (e.p != null ? " · " + esc(pgTxt(e.p, e.buch)) : "") + '</span></a>'; }).join("");
    if(A) A = '<h3>Im Buch und in der Stadt</h3><div class="pu-sl">' + A + '</div>';
  }
  box.innerHTML = '<h3>Gegner</h3>' + h + A;
}
function puSuchspalte(){
  var G = gGruppen().filter(function(x){ return SP_GEGNER.some(function(g){ return gKey(g) === x.k; }); });
  var chips = '<div class="pu-ch"><span class="' + (PU.dom === "alle" ? 'on' : '') + '" onclick="puDom(\'alle\')">Alle</span>' +
    G.map(function(x){ return '<span class="' + (PU.dom === x.k ? 'on' : '') + '" onclick="puDom(\'' + x.k + '\')">' + esc(x.t) + '</span>'; }).join("") + '</div>';
  return '<section class="pu-c pu-su"><h2>Suche</h2><input id="pu-q" type="text" placeholder="Gegner, Orte, Regeln …" autocomplete="off" value="' + esc(PU.q) + '" oninput="puSuche(this.value)">' + chips + '<div id="pu-res"></div></section>';
}
function puDraw(){
  var ov = puEl(); if(!ov) return;
  var sc = {}; ov.querySelectorAll("section").forEach(function(s){ sc[s.className] = s.scrollTop; });
  var foc = document.activeElement && document.activeElement.id === "pu-q", ss = foc ? document.activeElement.selectionStart : 0;
  var fo = (typeof zPanel === "function") ? zPanel() : "";
  ov.innerHTML = '<button class="pu-x" onclick="puClose()" aria-label="Schließen" title="Schließen (Esc)">×</button>' +
    '<div class="pu-rost">' + puFiguren() + '<div class="pu-mitte">' + fo + puBegegnung() + '</div>' + puSuchspalte() + '</div>';
  puErgebnis();
  ov.querySelectorAll("section").forEach(function(s){ if(sc[s.className]) s.scrollTop = sc[s.className]; });
  if(foc){ var i = document.getElementById("pu-q"); if(i){ i.focus(); try{ i.setSelectionRange(ss, ss); }catch(e){} } }
}
/* bei jedem render() mitzeichnen */
(function(){
  function einhaengen(){ var o = window.render; if(o && !o.__pu){ window.render = render = function(){ var r = o.apply(this, arguments); try{ if(puEl()) puDraw(); }catch(e){} return r; }; window.render.__pu = 1; } }
  window.addEventListener("load", function(){ setTimeout(einhaengen, 60); });
  document.addEventListener("keydown", function(e){
    if(e.key === "Escape" && puEl() && !document.querySelector(".modal")){ puClose(); return; }
    if(/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "") || e.ctrlKey || e.metaKey || e.altKey) return;
    if(e.key === "p") puOpen();
  });
})();
