/* THE SPIRE – Spielleiter-Pult (Overlay, Knopf oben rechts neben dem i, Taste „p“).
   Live-Übersicht: Figuren mit Stress/Fallout · Begegnung mit Gegnern · Suche nach Gegnern (je Gebiet) und allen Inhalten.
   Alles arbeitet auf demselben Stand wie Zelle und Gegner-Seite (ST.figuren, ST.begegnung). */
var PU = {q:"", offen:{}, kat:{}};
function puEl(){ return document.getElementById("pult"); }
function puOpen(){
  if(puEl()){ puClose(); return; }
  var ov = document.createElement("div"); ov.id = "pult"; ov.className = "pu-ov"; document.body.appendChild(ov);
  document.body.classList.add("pult-an"); puDraw();
}
function puClose(){ var o = puEl(); if(o) o.remove(); document.body.classList.remove("pult-an"); }
function puOffen(id){ PU.offen[id] = !PU.offen[id]; if(/^g:/.test(id)) puErgebnis(); else puDraw(); }
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
/* ---------- rechte Spalte: Gegner-, Orte- und Regelbrowser (Kategorien zum Ausklappen, gemeinsame Suche) ---------- */
function puRu(g){ var r = null; (g.ausr || []).forEach(function(a){ if(typeof a === "string" || r) return; (a.tags || []).forEach(function(t){ if(!r && /^Rüstung/.test(t)) r = String(t).replace(/^Rüstung\s*/, ""); }); }); return r; }
function puKat(id, titel, n, inhalt, offen){
  var on = offen || PU.kat[id];
  return '<div class="pu-k' + (on ? ' on' : '') + '"><div class="pu-kh" onclick="puKatTog(\'' + id + '\')"><i></i><b>' + esc(titel) + '</b><span>' + n + '</span></div>' + (on ? '<div class="pu-kb">' + inhalt + '</div>' : '') + '</div>';
}
function puKatTog(id){ PU.kat[id] = !PU.kat[id]; puErgebnis(); }
function puGZeile(g){
  var ru = puRu(g), s = Math.min(2, gBase(g)), w = gWidTxt(g), on = PU.offen["g:" + g.id];
  return '<div class="pu-gr gx-s' + s + '"><span class="n" onclick="puOffen(\'g:' + g.id + '\')">' + esc(g.kurz || g.t) + '</span>' +
    '<span class="gx-m">' + gSym("sc", "Schwierigkeit", SY_RAUTE, g.schw ? g.schw.k : "·") + (ru ? gSym("ru", "Rüstung", SY_SCHILD, ru) : '<i class="pu-leer"></i>') + '</span>' +
    '<span class="pu-w' + (/[^\d\s]/.test(w) ? ' lang' : '') + '" data-tn="Widerstand">' + esc(w) + '</span>' +
    '<i class="pu-p" onclick="puAdd(\'' + g.id + '\')" data-tn="Zur Begegnung hinzufügen">+</i></div>' + (on ? '<div class="pu-det">' + gBlock(g, {ohneZiel:true}) + '</div>' : '');
}
function puLink(r, t, sub){ return '<a class="pu-l" href="#' + r + '" onclick="puClose()"><b>' + esc(t) + '</b>' + (sub ? '<span>' + esc(sub) + '</span>' : '') + '</a>'; }
function puTreffer(ws, filt){
  if(!SIDX) sBuild();
  var res = [];
  SIDX.forEach(function(e){
    if(!filt(e) || !ws.every(function(w){ return e.l.indexOf(w) >= 0; })) return;
    var tl = sFold(e.t), sc = 0; ws.forEach(function(w){ if(tl.indexOf(w) === 0) sc += 6; else if(tl.indexOf(w) >= 0) sc += 4; });
    res.push({e:e, s:sc});
  });
  res.sort(function(a, b){ return b.s - a.s; });
  return res;
}
function puGegnerBox(ws){
  var alle = gSortiert();
  if(ws.length){
    var G = alle.filter(function(g){ var t = sFold(g.t + " " + (g.en || "") + " " + (g.ort || "") + " " + (g.kurz || "")); return ws.every(function(w){ return t.indexOf(w) >= 0; }); });
    return G.length ? G.slice(0, 50).map(puGZeile).join("") + (G.length > 50 ? '<p class="pu-m">' + G.length + ' Gegner, die ersten 50</p>' : '') : '<p class="pu-m">Kein Gegner gefunden.</p>';
  }
  return gGruppen().map(function(x){
    var L = alle.filter(function(g){ return gKey(g) === x.k; }); if(!L.length) return "";
    return puKat("g:" + x.k, x.t, L.length, L.map(puGZeile).join(""));
  }).join("");
}
function puOrteBox(ws){
  if(ws.length){
    var R = puTreffer(ws, function(e){ return /^stadt\//.test(e.r); }).slice(0, 30);
    return R.length ? R.map(function(o){ return puLink(o.e.r, o.e.t, o.e.ctx); }).join("") : '<p class="pu-m">Nichts gefunden.</p>';
  }
  return SP_STADT_INDEX.map(function(d){
    return puKat("o:" + d.id, d.t, d.distrikte.length, d.distrikte.map(function(x){ return puLink("stadt/" + d.id + "/" + x.id, x.t); }).join(""));
  }).join("");
}
function puRegelBox(ws){
  if(ws.length){
    var R = puTreffer(ws, function(e){ return /^nach\/(regeln|kampf)/.test(e.r); }).slice(0, 30);
    return R.length ? R.map(function(o){ return puLink(o.e.r, o.e.t, o.e.ctx); }).join("") : '<p class="pu-m">Nichts gefunden.</p>';
  }
  var h = "", F = window.SP_FALLOUT;
  h += puKat("r:regeln", "Grundregeln", SP_REGELN.abschnitte.length, SP_REGELN.abschnitte.map(function(s){ return puLink("nach/regeln/" + s.id, s.t); }).join(""));
  if(F && F.stufen){
    var fl = ["leicht", "mittel", "schwer"].filter(function(k){ return F.stufen[k]; }).map(function(k){ return puLink("nach/regeln/fallout/" + k, F.stufen[k].t); });
    if(F.bindung) fl.push(puLink("nach/regeln/fallout/bindung", F.bindung.t));
    ["behalten", "plaetze", "toedlich", "eigene"].forEach(function(k){ if(F.regel && F.regel[k]) fl.push(puLink("nach/regeln/fallout/" + k, F.regel[k].t)); });
    h += puKat("r:fallout", "Fallout", fl.length, fl.join(""));
  }
  if(window.SP_KAMPF) h += puKat("r:kampf", "Kampf", SP_KAMPF.abschnitte.length, SP_KAMPF.abschnitte.map(function(s){ return puLink("nach/kampf/" + s.id, s.t); }).join(""));
  return h;
}
function puErgebnis(){
  var box = document.getElementById("pu-bw"); if(!box) return;
  var sc = []; box.querySelectorAll(".pu-pb").forEach(function(e){ sc.push(e.scrollTop); });
  var q = sFold(PU.q.trim()), ws = q.length >= 2 ? q.split(/\s+/) : [];
  var P = [["Gegner", puGegnerBox(ws)], ["Orte", puOrteBox(ws)], ["Regeln", puRegelBox(ws)]];
  box.innerHTML = P.map(function(p){ return '<section class="pu-p3"><h2>' + p[0] + '</h2><div class="pu-pb">' + p[1] + '</div></section>'; }).join("");
  box.querySelectorAll(".pu-pb").forEach(function(e, i){ e.scrollTop = sc[i] || 0; });
}
function puSuchspalte(){
  return '<div class="pu-su"><div class="pu-q"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="10.500" cy="10.500" r="6.500"/><path d="M15.500 15.500L21 21"/></svg><input id="pu-q" type="text" placeholder="Gegner, Orte, Regeln suchen …" autocomplete="off" value="' + esc(PU.q) + '" oninput="puSuche(this.value)"></div><div id="pu-bw" class="pu-bw"></div></div>';
}
function puDraw(){
  var ov = puEl(); if(!ov) return;
  var sc = {}; ov.querySelectorAll(".pu-fig,.pu-mitte").forEach(function(s){ sc[s.className] = s.scrollTop; });
  var foc = document.activeElement && document.activeElement.id === "pu-q", ss = foc ? document.activeElement.selectionStart : 0;
  var fo = (typeof zPanel === "function") ? zPanel() : "";
  ov.innerHTML = '<div class="pu-rost">' + puFiguren() + '<div class="pu-mitte">' + fo + puBegegnung() + '</div>' + puSuchspalte() + '</div>';
  puErgebnis();
  ov.querySelectorAll(".pu-fig,.pu-mitte").forEach(function(s){ if(sc[s.className]) s.scrollTop = sc[s.className]; });
  if(foc){ var i = document.getElementById("pu-q"); if(i){ i.focus(); try{ i.setSelectionRange(ss, ss); }catch(e){} } }
}
/* bei jedem render() mitzeichnen */
(function(){
  function einhaengen(){ var o = window.render; if(o && !o.__pu){ window.render = render = function(){ var r = o.apply(this, arguments); try{ if(puEl()) puDraw(); }catch(e){} return r; }; window.render.__pu = 1; } }
  window.addEventListener("load", function(){ setTimeout(einhaengen, 60); });
  window.addEventListener("hashchange", function(){ if(puEl()) puClose(); });
  document.addEventListener("click", function(e){ if(puEl() && e.target.closest && e.target.closest(".brand")) puClose(); }, true);
  document.addEventListener("keydown", function(e){
    if(e.key === "Escape" && puEl() && !document.querySelector(".modal")){ puClose(); return; }
    if(/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "") || e.ctrlKey || e.metaKey || e.altKey) return;
    if(e.key === "p") puOpen();
  });
})();
