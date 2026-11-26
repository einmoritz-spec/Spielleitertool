/* Spielfeld – Raster mit Figuren, Gegenständen, Wänden, Gelände und maßstabsgetreuen Schablonen (1 Zoll = 2 m) */
(function(){
"use strict";
var NS = "http://www.w3.org/2000/svg";
var TPL = {
  kfs:{n:"Kleine Flächenschablone", k:"KFS", r:1},
  mfs:{n:"Mittlere Flächenschablone", k:"MFS", r:2},
  gfs:{n:"Große Flächenschablone", k:"GFS", r:3},
  kegel:{n:"Kegelschablone", k:"Kegel"},
  strahl:{n:"Strahlschablone", k:"Strahl"}
};
var CONE = "M0 0L7.2 1.4697A1.5 1.5 0 1 0 7.2 -1.4697Z"; /* 9“ lang, 3“ breit, Spitze am Angreifer */
var SIZES = [[0.5, "Winzig"], [1, "Normal"], [2, "Groß"], [3, "Riesig"], [4, "Gigantisch"]];
var TEAMS = [["h", "Held", "#2f6f9f"], ["g", "Gegner", "#a51f1a"], ["n", "Neutral", "#7a7067"]];
var COLS = ["#a51f1a", "#c8641e", "#d9a521", "#4f7d3a", "#2f8a83", "#2f6f9f", "#5b4a8c", "#8c3f6b", "#2b2622", "#7a7067"];
var TCOLS = ["#a51f1a", "#e07a1f", "#2f6f9f", "#4f7d3a", "#6d4a9c"];
var STATES = [["a", "Angeschlagen", "A", "#d9a521"], ["bt", "Betäubt", "Bt", "#6d4a9c"], ["ab", "Abgelenkt", "Ab", "#2f8a83"], ["vw", "Verwundbar", "Vw", "#c8641e"], ["gb", "Gebunden", "Gb", "#5d554d"], ["fh", "Festgehalten", "Fh", "#5d554d"], ["bo", "Auf dem Boden", "Bo", "#4f7d3a"]];
var AREAS = {schwierig:"Schwieriges Gelände", wasser:"Wasser", gefahr:"Gefahr", daemmer:"Dämmerlicht", dunkel:"Dunkelheit", stock:"Stockdunkel"};
var WALLS = {wand:"Wand", tuer:"Tür", fenster:"Fenster"};
var OBJ = {
  kiste:["Kiste", 1, 1], fass:["Fass", 0.8, 0.8], truhe:["Truhe", 1, 0.7], tisch:["Tisch", 2, 1], stuhl:["Stuhl", 0.6, 0.6], bett:["Bett", 1, 2],
  saeule:["Säule", 1, 1], fels:["Fels", 1.6, 1.3], baum:["Baum", 3, 3], busch:["Busch", 1.5, 1.5], feuer:["Feuer", 1, 1], wagen:["Fahrzeug", 1.2, 2.4], marker:["Markierung", 0.7, 0.7]
};
var ICON = {
  sel:'<path d="M5 3l13 8-6.2 1.6L9 19z"/>',
  fig:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="10" r="3"/><path d="M6.8 18c1.4-2.3 3.1-3.4 5.2-3.4s3.8 1.1 5.2 3.4"/>',
  obj:'<path d="M4 8l8-4 8 4v8l-8 4-8-4z"/><path d="M4 8l8 4 8-4M12 12v8"/>',
  wall:'<path d="M3 5h18v14H3zM3 12h18M9 5v7M15 12v7"/>',
  tuer:'<path d="M4 21h16M7 21V3.5h10V21"/><path d="M14 12.5v.2"/>',
  fenster:'<path d="M4 5h16v14H4zM12 5v14M4 12h16"/>',
  area:'<path d="M4 4h16v16H4z"/><path d="M4 11l7-7M4 18L18 4M11 20l9-9"/>',
  tpl:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5" stroke-dasharray="2 2"/><path d="M12 10v4M10 12h4"/>',
  meas:'<path d="M3 17L17 3l4 4L7 21z"/><path d="M7 13l2 2M10 10l2 2M13 7l2 2"/>',
  txt:'<path d="M5 7V4h14v3M12 4v16M9 20h6"/>',
  grid:'<path d="M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18"/>',
  snap:'<path d="M6 3h4v8a2 2 0 0 0 4 0V3h4v8a6 6 0 0 1-12 0z"/><path d="M6 7h4M14 7h4"/>',
  bild:'<path d="M3 5h18v14H3z"/><path d="M3 16l5-5 4 4 3-3 6 6"/><circle cx="15.5" cy="9" r="1.3"/>',
  undo:'<path d="M9 14L4 9l5-5"/><path d="M4 9h11a5 5 0 0 1 0 10h-3"/>',
  redo:'<path d="M15 14l5-5-5-5"/><path d="M20 9H9a5 5 0 0 0 0 10h3"/>',
  exp:'<path d="M12 3v12M7 10l5 5 5-5M4 20h16"/>',
  imp:'<path d="M12 15V3M7 8l5-5 5 5M4 20h16"/>',
  png:'<path d="M3 7h4l2-3h6l2 3h4v13H3z"/><circle cx="12" cy="13" r="3.6"/>',
  close:'<path d="M6 6l12 12M18 6L6 18"/>',
  link:'<path d="M10 14a4.5 4.5 0 006.4 0l3-3a4.5 4.5 0 00-6.4-6.4l-1 1"/><path d="M14 10a4.5 4.5 0 00-6.4 0l-3 3a4.5 4.5 0 006.4 6.4l1-1"/>',
  fit:'<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',
  plus:'<path d="M12 5v14M5 12h14"/>', minus:'<path d="M5 12h14"/>',
  trash:'<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
  dup:'<path d="M8 8h12v12H8z"/><path d="M4 16V4h12"/>',
  rot:'<path d="M20 12a8 8 0 1 1-2.4-5.7"/><path d="M20 4v5h-5"/>',
  down:'<path d="M6 9l6 6 6-6"/>',
  lock:'<path d="M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3"/>',
  unlock:'<path d="M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 6.8-1.2"/>',
  cal:'<path d="M3 12h18M3 8v8M21 8v8M9 10v4M15 10v4"/>',
  map:'<path d="M3 3h18v18H3z"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18" stroke-opacity=".4"/><circle cx="14.5" cy="14.5" r="5" fill="currentColor" fill-opacity=".3"/><circle cx="14.5" cy="14.5" r="5"/>'
};
function ic(k){ return '<svg viewBox="0 0 24 24">' + ICON[k] + "</svg>"; }
function E(s){ return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
function f1(n){ return (Math.round(n * 10) / 10).toString().replace(".", ","); }
function uid(){ return Math.random().toString(36).slice(2, 9); }
function N(s){ return typeof nm === "function" ? nm(s) : s; }

/* ---------- Speicher (IndexedDB) ---------- */
var DBP = null;
function db(){ return DBP || (DBP = new Promise(function(res, rej){ var r = indexedDB.open("sw_spielfeld", 1); r.onupgradeneeded = function(){ r.result.createObjectStore("maps", {keyPath:"id"}); }; r.onsuccess = function(){ res(r.result); }; r.onerror = function(){ rej(r.error); }; })); }
function dbReq(mode, fn){ return db().then(function(d){ return new Promise(function(res){ var tx = d.transaction("maps", mode), q = fn(tx.objectStore("maps")); tx.oncomplete = function(){ res(q && q.result); }; tx.onerror = function(){ res(null); }; }); }); }
function dbAll(){ return dbReq("readonly", function(s){ return s.getAll(); }); }
function dbPut(m){ return dbReq("readwrite", function(s){ return s.put(m); }); }
function dbDel(id){ return dbReq("readwrite", function(s){ return s.delete(id); }); }

/* ---------- Zustand ---------- */
var S = {open:false, maps:[], m:null, tool:"sel", sub:{obj:"kiste", area:"schwierig", tpl:"mfs", fig:""}, aim:null, rings:null, sel:null, snap:true, grid:true, undo:[], redo:[], drag:null, ptr:{}, meas:null, wip:null, hover:null, space:false, cal:null};
try { var P = JSON.parse(localStorage.getItem("sw_spielfeld_ui") || "{}"); if(P.snap === false) S.snap = false; if(P.grid === false) S.grid = false; if(P.sub) S.sub = Object.assign(S.sub, P.sub); } catch(e){}
function saveUI(){ try { localStorage.setItem("sw_spielfeld_ui", JSON.stringify({snap:S.snap, grid:S.grid, sub:S.sub, cur:S.m && S.m.id})); } catch(e){} }
function newMap(name){ return {id:uid(), name:name || "Neue Karte", items:[], bg:null, view:null, t:Date.now()}; }
var saveT = 0;
function save(){ clearTimeout(saveT); var m = S.m; saveT = setTimeout(function(){ if(m){ m.t = Date.now(); dbPut(m); } }, 350); }
function snapState(){ var m = S.m; return JSON.stringify({items:m.items, bg:m.bg ? Object.assign({}, m.bg, {src:null}) : null}); }
function pushUndo(){ S.undo.push(snapState()); if(S.undo.length > 100) S.undo.shift(); S.redo = []; }
function restore(str){ var o = JSON.parse(str), m = S.m; m.items = o.items; if(o.bg && m.bg){ var src = m.bg.src; m.bg = o.bg; m.bg.src = src; } else if(!o.bg) m.bg = null; if(S.sel && S.sel !== "bg" && !byId(S.sel)) S.sel = null; draw(); ins(); save(); }
function undo(){ if(!S.undo.length) return; S.redo.push(snapState()); restore(S.undo.pop()); }
function redo(){ if(!S.redo.length) return; S.undo.push(snapState()); restore(S.redo.pop()); }
function byId(id){ var a = S.m.items; for(var i = 0; i < a.length; i++) if(a[i].id === id) return a[i]; return null; }
function selItem(){ return S.sel === "bg" ? null : S.sel ? byId(S.sel) : null; }

/* ---------- Geometrie ---------- */
var V = function(){ return S.m.view; };
function rad(d){ return d * Math.PI / 180; }
function rotP(x, y, a){ var c = Math.cos(rad(a)), s = Math.sin(rad(a)); return [x * c - y * s, x * s + y * c]; }
function snapV(v, step, off){ return Math.round((v - off) / step) * step + off; }
function snapFig(x, y, d){
  if(!S.snap) return [x, y];
  var off = (d === 1 || d === 3) ? 0.5 : 0, st = d === 0.5 ? 0.5 : 1;
  if(d === 0.5) off = 0.25;
  return [snapV(x, st, off), snapV(y, st, off)];
}
function snapPt(x, y, st){ return S.snap ? [snapV(x, st || 1, 0), snapV(y, st || 1, 0)] : [Math.round(x * 10) / 10, Math.round(y * 10) / 10]; }
function segD(px, py, ax, ay, bx, by){ var dx = bx - ax, dy = by - ay, l = dx * dx + dy * dy, t = l ? Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / l)) : 0; return Math.hypot(px - ax - t * dx, py - ay - t * dy); }
function triD(px, py, T){
  var s = function(a, b){ return (b[0] - a[0]) * (py - a[1]) - (b[1] - a[1]) * (px - a[0]); };
  var d1 = s(T[0], T[1]), d2 = s(T[1], T[2]), d3 = s(T[2], T[0]);
  if(!((d1 < 0 || d2 < 0 || d3 < 0) && (d1 > 0 || d2 > 0 || d3 > 0))) return 0;
  return Math.min(segD(px, py, T[0][0], T[0][1], T[1][0], T[1][1]), segD(px, py, T[1][0], T[1][1], T[2][0], T[2][1]), segD(px, py, T[2][0], T[2][1], T[0][0], T[0][1]));
}
function tplHits(t, f){
  var r = f.d / 2;
  if(TPL[t.k].r) return Math.hypot(f.x - t.x, f.y - t.y) < TPL[t.k].r + r - 0.01;
  var l = rotP(f.x - t.x, f.y - t.y, -(t.r || 0)), lx = l[0], ly = l[1];
  if(t.k === "strahl"){ var dx = Math.max(-lx, 0, lx - 12), dy = Math.max(Math.abs(ly) - 0.5, 0); return Math.hypot(dx, dy) < r - 0.01; }
  var dc = Math.hypot(lx - 7.5, ly) - 1.5, dt = triD(lx, ly, [[0, 0], [7.2, 1.4697], [7.2, -1.4697]]);
  return Math.min(dc, dt) < r - 0.01;
}

/* ---------- Charakterbogen-Anbindung ---------- */
var STB = {a:"Angeschlagen", ab:"Abgelenkt", vw:"Verwundbar"};
function bogen(f){ return f && f.cid && window.SWBogen ? SWBogen.werte(f.cid) : null; }
function werteKurz(w){ return ["Bennys " + (w.ben | 0), w.wu ? "Wunden " + w.wu : "", w.mp ? "MP " + w.mpa + "/" + w.mp : ""].filter(Boolean).join(" · "); }
function syncFig(f){
  var w = bogen(f); if(!w) return null; f.wk = werteKurz(w);
  f.n = w.name; f.bw = w.tempo; f.pa = String(w.parade); f.ro = w.rob; f.d = w.d; f.wc = 1;
  f.st = f.st || {}; f.st.w = w.wu; f.st.e = w.er; Object.keys(STB).forEach(function(k){ f.st[k] = w.st[STB[k]] ? 1 : 0; });
  return w;
}
function setBogen(f, k, v){
  if(!f.cid || !window.SWBogen) return;
  if(k === "w") SWBogen.setze(f.cid, {wu:v}); else if(k === "e") SWBogen.setze(f.cid, {er:v}); else if(STB[k]){ var o = {}; o[STB[k]] = v; SWBogen.setze(f.cid, {st:o}); }
}
function aFarbe(t){
  t = String(t || "");
  if(/Feuer|Flamm|Brand|Hitze|Lava|Höll|Glut/i.test(t)) return "#e0601f";
  if(/Eis|Kälte|Frost|Wasser|Schnee/i.test(t)) return "#2f7fbf";
  if(/Blitz|Elektr|Donner/i.test(t)) return "#c9a21a";
  if(/Säure|Gift|Insekt|Dorn|Pflanz/i.test(t)) return "#4f8a2a";
  if(/Licht|Heilig|Sonne/i.test(t)) return "#d9b821";
  if(/Dunkel|Schatten|Nekro|Tod|Knochen/i.test(t)) return "#4b3a6b";
  if(/Erde|Stein|Fels|Sand/i.test(t)) return "#8a6233";
  if(/Luft|Wind|Sturm/i.test(t)) return "#7f9aa8";
  return "#a51f1a";
}
function reichLabel(d, a){
  if(a.rw){ var r = a.rw.split("/").map(Number); if(d <= r[0]) return "kurz"; if(d <= r[1]) return "mittel –2"; if(d <= r[2]) return "weit –4"; if(d <= r[2] * 4) return "extrem –8"; return "außer Reichweite"; }
  if(a.reich != null) return d <= a.reich ? "in Reichweite" : "außer Reichweite (" + a.reich + "“)";
  return "";
}

/* ---------- Bestiarium-Anbindung ---------- */
function kreaturen(){
  var L = window.SW_KR || [];
  if(typeof krSicht === "function") L = L.filter(function(k){ try { return krSicht(k); } catch(e){ return true; } });
  return L;
}
function kreatur(name){ var L = kreaturen(); for(var i = 0; i < L.length; i++) if(L[i].n === name) return L[i]; return null; }
function groesse(k){
  var g = 0; (k.sf || []).forEach(function(s){ var m = /^Größe\s*([+–-]?\d+)/.exec(s[0] || ""); if(m) g = parseInt(m[1].replace("–", "-"), 10); });
  return g <= -4 ? 0.5 : g >= 12 ? 4 : g >= 8 ? 3 : g >= 4 ? 2 : 1;
}
function kuerzel(n){ var w = String(n || "").replace(/[()]/g, "").trim().split(/[\s-]+/).filter(Boolean); if(!w.length) return ""; return (w.length > 1 ? w[0][0] + w[1][0] : w[0].slice(0, 2)).toUpperCase(); }
function applyKreatur(f, k){
  f.wc = k.w ? 1 : 0; f.d = groesse(k); f.bw = parseInt(k.b, 10) || f.bw; f.pa = k.pa || ""; f.ro = k.ro || ""; f.team = f.team || "g";
  var p = snapFig(f.x, f.y, f.d); f.x = p[0]; f.y = p[1];
}

/* ---------- DOM ---------- */
var O, SVG, W, L = {}, INS, FLY, RAIL, ZT, NAME, DD, FILE, FILEJ;
function build(){
  if(O) return;
  O = document.createElement("div"); O.className = "sfo"; O.id = "sfo";
  var tools = [["sel", "Auswählen", "1"], ["fig", "Figur", "2"], ["obj", "Gegenstand", "3"], ["wall", "Wand", "4"], ["tuer", "Tür", "5"], ["fenster", "Fenster", "6"], ["area", "Gelände", "7"], ["tpl", "Schablone", "8"], ["meas", "Messen", "9"], ["txt", "Text", "0"]];
  O.innerHTML =
    '<header class="sfh"><span class="sfh-t">Spielfeld</span>' +
      '<div class="sfh-map"><input id="sfName" spellcheck="false" aria-label="Kartenname"><button class="sfh-dd" id="sfDDB" title="Karten">' + ic("down") + '</button><div class="sfdd" id="sfDD"></div></div>' +
      '<div class="sfh-sp"></div>' +
      '<button class="sfib" data-a="undo" title="Rückgängig (Strg+Z)">' + ic("undo") + '</button><button class="sfib" data-a="redo" title="Wiederholen (Strg+Y)">' + ic("redo") + "</button>" +
      '<i class="sfh-sep"></i><button class="sfib" data-a="png" title="Als Bild speichern">' + ic("png") + '</button><button class="sfib" data-a="exp" title="Exportieren">' + ic("exp") + '</button><button class="sfib" data-a="imp" title="Importieren">' + ic("imp") + "</button>" +
      '<button class="sfib" data-a="link" title="Link teilen">' + ic("link") + '</button><i class="sfh-sep sfh-x"></i><button class="sfib sfx-close" data-a="close" title="Schließen (Esc)">' + ic("close") + "</button></header>" +
    '<div class="sfb"><nav class="sfr" id="sfRail">' +
      tools.map(function(t){ return '<button class="sft" data-t="' + t[0] + '" title="' + t[1] + " (" + t[2] + ')">' + ic(t[0]) + "</button>" + (t[0] === "sel" || t[0] === "fenster" || t[0] === "tpl" ? "<i></i>" : ""); }).join("") +
      '<span class="sfr-sp"></span><button class="sft" data-o="grid" title="Raster">' + ic("grid") + '</button><button class="sft" data-o="snap" title="Einrasten">' + ic("snap") + '</button><button class="sft" data-o="bg" title="Hintergrundbild">' + ic("bild") + "</button></nav>" +
      '<div class="sfs" id="sfStage"><svg id="sfSvg" xmlns="' + NS + '"><defs>' +
        '<pattern id="sfpSchwierig" patternUnits="userSpaceOnUse" width=".5" height=".5" patternTransform="rotate(45)"><rect width=".5" height=".5" fill="#8a6a3a" fill-opacity=".14"/><path d="M0 0V.5" stroke="#7a5a2c" stroke-width=".07" stroke-opacity=".55"/></pattern>' +
        '<pattern id="sfpWasser" patternUnits="userSpaceOnUse" width="1" height=".5"><rect width="1" height=".5" fill="#2f6f9f" fill-opacity=".22"/><path d="M0 .3Q.25 .15 .5 .3T1 .3" fill="none" stroke="#2f6f9f" stroke-width=".04" stroke-opacity=".6"/></pattern>' +
        '<pattern id="sfpGefahr" patternUnits="userSpaceOnUse" width=".7" height=".7" patternTransform="rotate(-45)"><rect width=".7" height=".7" fill="#e07a1f" fill-opacity=".16"/><rect width=".35" height=".7" fill="#c8641e" fill-opacity=".22"/></pattern>' +
        '<filter id="sfSh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy=".06" stdDeviation=".06" flood-color="#000" flood-opacity=".35"/></filter>' +
      '</defs><g id="sfW"><g id="sfLbg"></g><g id="sfLar"></g><g id="sfLgr"></g><g id="sfLwa"></g><g id="sfLob"></g><g id="sfLfi"></g><g id="sfLtx"></g><g id="sfLtp"></g><g id="sfLov"></g></g></svg>' +
        '<div class="sffly" id="sfFly"></div><button class="sfdone" id="sfDone" data-a="done"></button>' +
        '<div class="sfz"><button data-a="zout" title="Verkleinern">' + ic("minus") + '</button><span id="sfZT"></span><button data-a="zin" title="Vergrößern">' + ic("plus") + '</button><button data-a="fit" title="Alles zeigen">' + ic("fit") + "</button></div>" +
        '<div class="sfsc" id="sfSc"><i></i><span>1“ = 2 m</span></div>' +
      '</div><aside class="sfi" id="sfIns"></aside></div>' +
    '<input type="file" id="sfFile" accept="image/*" hidden><input type="file" id="sfFileJ" accept=".json,application/json" hidden>';
  document.body.appendChild(O);
  SVG = O.querySelector("#sfSvg"); W = O.querySelector("#sfW");
  ["bg", "ar", "gr", "wa", "ob", "fi", "tx", "tp", "ov"].forEach(function(k){ L[k] = O.querySelector("#sfL" + k); });
  INS = O.querySelector("#sfIns"); FLY = O.querySelector("#sfFly"); RAIL = O.querySelector("#sfRail"); ZT = O.querySelector("#sfZT");
  NAME = O.querySelector("#sfName"); DD = O.querySelector("#sfDD"); FILE = O.querySelector("#sfFile"); FILEJ = O.querySelector("#sfFileJ");
  O.addEventListener("click", onClick);
  RAIL.addEventListener("click", function(e){ var b = e.target.closest(".sft"); if(!b) return; if(b.dataset.t) setTool(b.dataset.t); else option(b.dataset.o); });
  FLY.addEventListener("click", function(e){ var b = e.target.closest("[data-v]"); if(!b) return; S.sub[S.tool] = b.dataset.v; saveUI(); fly(); });
  NAME.addEventListener("input", function(){ S.m.name = NAME.value; save(); });
  NAME.addEventListener("keydown", function(e){ if(e.key === "Enter") NAME.blur(); });
  O.querySelector("#sfDDB").addEventListener("click", function(e){ e.stopPropagation(); ddToggle(); });
  FILE.addEventListener("change", bgFile); FILEJ.addEventListener("change", importJSON);
  SVG.addEventListener("pointerdown", pDown); SVG.addEventListener("pointermove", pMove);
  SVG.addEventListener("pointerup", pUp); SVG.addEventListener("pointercancel", pUp);
  SVG.addEventListener("pointerleave", function(){ if(S.tool === "wall" && S.wip){ S.hover = null; draw(); } });
  SVG.addEventListener("wheel", onWheel, {passive:false});
  SVG.addEventListener("dblclick", onDbl);
  SVG.addEventListener("contextmenu", function(e){ e.preventDefault(); if(S.wip) finishWall(); });
  INS.addEventListener("input", insInput); INS.addEventListener("change", insInput); INS.addEventListener("click", insClick);
  window.addEventListener("resize", function(){ if(S.open) draw(); });
  if(window.ResizeObserver) new ResizeObserver(function(){ if(S.open) draw(); }).observe(O.querySelector("#sfStage"));
}

/* ---------- Öffnen/Schließen ---------- */
/* Touch-Geräte: Spielfeld in Gerätebreite statt 1280-px-Desktopansicht (sonst winzige Knöpfe) */
var VP0 = null;
function touch(){ return window.matchMedia && matchMedia("(pointer: coarse)").matches; }
function vpSetzen(an){ var m = document.querySelector('meta[name="viewport"]'); if(!m || !touch()) return;
  if(an){ if(VP0 == null) VP0 = m.getAttribute("content"); m.setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"); document.documentElement.classList.add("sf-touch"); }
  else if(VP0 != null){ m.setAttribute("content", VP0); VP0 = null; document.documentElement.classList.remove("sf-touch"); } }
function open(){
  vpSetzen(true); build(); S.open = true; O.classList.add("on"); document.body.classList.add("sf-open");
  dbAll().then(function(all){
    S.maps = (all || []).sort(function(a, b){ return (b.t || 0) - (a.t || 0); });
    var cur = null; try { cur = JSON.parse(localStorage.getItem("sw_spielfeld_ui") || "{}").cur; } catch(e){}
    var m = S.maps.filter(function(x){ return x.id === cur; })[0] || S.maps[0];
    if(!m){ m = newMap("Karte 1"); S.maps.push(m); dbPut(m); }
    load(m);
  });
}
function close(){ if(!O || window.SW_SOLO) return; vpSetzen(false); S.open = false; O.classList.remove("on"); document.body.classList.remove("sf-open"); ddToggle(false); save(); }
function load(m){
  S.m = m; S.sel = null; S.undo = []; S.redo = []; S.meas = null; S.wip = null; S.cal = null;
  if(!m.view){ var r = SVG.getBoundingClientRect(); m.view = {x:Math.round(r.width / 2), y:Math.round(r.height / 2), z:48}; }
  NAME.value = m.name; saveUI(); setTool(S.tool === "sel" ? "sel" : S.tool); rail(); draw(); ins(); fly();
}
function ddToggle(on){
  var v = on === undefined ? !DD.classList.contains("on") : on; DD.classList.toggle("on", v); if(!v) return;
  DD.innerHTML = S.maps.map(function(m){ return '<button class="sfdd-m' + (m === S.m ? " on" : "") + '" data-map="' + m.id + '">' + E(m.name || "Ohne Namen") + "<small>" + m.items.length + "</small></button>"; }).join("") +
    '<i></i><button data-a="new">' + ic("plus") + 'Neue Karte</button><button data-a="dupmap">' + ic("dup") + 'Karte duplizieren</button><button data-a="delmap" class="sfdd-del">' + ic("trash") + "Karte löschen</button>" +
    '<i class="sfdd-mob"></i><button data-a="png" class="sfdd-mob">' + ic("png") + 'Als Bild speichern</button><button data-a="exp" class="sfdd-mob">' + ic("exp") + 'Exportieren</button><button data-a="imp" class="sfdd-mob">' + ic("imp") + "Importieren</button>";
}

/* ---------- Werkzeuge ---------- */
function setTool(t){
  if(S.wip) finishWall();
  S.tool = t; S.meas = t === "meas" ? S.meas : null; S.cal = null;
  if(t !== "sel" && S.sel && window.innerWidth <= 760 && window.innerHeight > 500){ S.sel = null; setTimeout(ins, 0); }
  RAIL && RAIL.querySelectorAll("[data-t]").forEach(function(b){ b.classList.toggle("on", b.dataset.t === t); });
  if(SVG) SVG.dataset.tool = t;
  fly(); if(O) draw();
}
function rail(){ RAIL.querySelector('[data-o="grid"]').classList.toggle("on", S.grid); RAIL.querySelector('[data-o="snap"]').classList.toggle("on", S.snap); RAIL.querySelector('[data-o="bg"]').classList.toggle("on", S.sel === "bg"); }
function option(o){
  if(o === "grid") S.grid = !S.grid;
  else if(o === "snap") S.snap = !S.snap;
  else if(o === "bg"){ if(S.m.bg){ S.sel = S.sel === "bg" ? null : "bg"; ins(); } else FILE.click(); }
  saveUI(); rail(); draw();
}
function fly(){
  if(!FLY) return;
  var t = S.tool, h = "";
  if(t === "fig"){ var CL = window.SWBogen ? SWBogen.liste() : [];
    if(CL.length) h = '<button data-v="" class="' + (!S.sub.fig ? "on" : "") + '" title="Figur">' + ic("fig") + "</button>" + CL.map(function(c){ var w = SWBogen.werte(c.id) || {}; return '<button data-v="' + c.id + '" class="ch' + (S.sub.fig === c.id ? " on" : "") + '"><b>' + E(N(kuerzel(c.name))) + "</b><span>" + E(c.name) + "<small>" + werteKurz(w) + "</small></span></button>"; }).join(""); }
  else if(t === "obj") h = Object.keys(OBJ).map(function(k){ return '<button data-v="' + k + '" class="' + (S.sub.obj === k ? "on" : "") + '" title="' + OBJ[k][0] + '"><svg viewBox="-.6 -.6 1.2 1.2">' + objSym(k, 1, 1) + "</svg></button>"; }).join("");
  else if(t === "area") h = Object.keys(AREAS).map(function(k){ return '<button data-v="' + k + '" class="' + (S.sub.area === k ? "on" : "") + '" title="' + AREAS[k] + '"><svg viewBox="0 0 1.6 1.2"><rect x=".05" y=".05" width="1.5" height="1.1" rx=".08" ' + areaFill(k) + ' stroke="' + areaStroke(k) + '" stroke-width=".05"/></svg></button>'; }).join("");
  else if(t === "tpl") h = Object.keys(TPL).map(function(k){ return '<button data-v="' + k + '" class="tp ' + (S.sub.tpl === k ? "on" : "") + '" title="' + TPL[k].n + '"><svg viewBox="' + (TPL[k].r ? "-3.2 -3.2 6.4 6.4" : k === "kegel" ? "-.3 -3.2 9.6 6.4" : "-.3 -3.2 12.6 6.4") + '">' + tplShape(k, "#a51f1a", 0.3) + "</svg><span>" + TPL[k].k + "</span></button>"; }).join("");
  FLY.innerHTML = h; FLY.className = "sffly" + (h ? " on " + t : "");
}

/* ---------- Zeichnen ---------- */
function areaFill(k){
  if(k === "schwierig") return 'fill="url(#sfpSchwierig)"';
  if(k === "wasser") return 'fill="url(#sfpWasser)"';
  if(k === "gefahr") return 'fill="url(#sfpGefahr)"';
  return 'fill="#1b1c1e" fill-opacity="' + ({daemmer:0.16, dunkel:0.34, stock:0.55})[k] + '"';
}
function areaStroke(k){ return ({schwierig:"#7a5a2c", wasser:"#2f6f9f", gefahr:"#c8641e"})[k] || "#1b1c1e"; }
function tplShape(k, c, sw){
  var st = ' fill="' + c + '" fill-opacity=".2" stroke="' + c + '" stroke-width="' + (sw || 2) + '"' + (sw ? "" : ' vector-effect="non-scaling-stroke"');
  var R = TPL[k].r;
  if(R){ var s = '<circle r="' + R + '"' + st + "/>"; for(var i = 1; i < R; i++) s += '<circle r="' + i + '" fill="none" stroke="' + c + '" stroke-opacity=".35" stroke-width="' + (sw ? sw / 2 : 1) + '"' + (sw ? "" : ' vector-effect="non-scaling-stroke"') + "/>"; return s; }
  if(k === "kegel") return '<path d="' + CONE + '"' + st + "/>";
  return '<path d="M0 -.5H12V.5H0Z"' + st + "/>";
}
var OBJC = {wood:"#a8773f", woodD:"#5a3d1e", stone:"#b9b1a3", stoneD:"#5d554d"};
function objSym(k){
  var ns = ' vector-effect="non-scaling-stroke"';
  switch(k){
    case "kiste": return '<rect x="-.46" y="-.46" width=".92" height=".92" rx=".04" fill="' + OBJC.wood + '" stroke="' + OBJC.woodD + '" stroke-width="1.5"' + ns + '/><rect x="-.34" y="-.34" width=".68" height=".68" fill="none" stroke="' + OBJC.woodD + '" stroke-width="1"' + ns + '/><path d="M-.34 -.34L.34 .34M.34 -.34L-.34 .34" stroke="' + OBJC.woodD + '" stroke-width="1"' + ns + "/>";
    case "fass": return '<circle r=".46" fill="#9a6a3a" stroke="' + OBJC.woodD + '" stroke-width="1.5"' + ns + '/><circle r=".34" fill="none" stroke="#3a2a18" stroke-width="1.2"' + ns + '/><circle r=".14" fill="#7a4f28" stroke="' + OBJC.woodD + '" stroke-width="1"' + ns + "/>";
    case "truhe": return '<rect x="-.47" y="-.44" width=".94" height=".88" rx=".08" fill="#8a5a2a" stroke="#3a2a18" stroke-width="1.5"' + ns + '/><path d="M-.25 -.44V.44M.25 -.44V.44" stroke="#d9a521" stroke-width="2"' + ns + '/><rect x="-.07" y="-.1" width=".14" height=".2" fill="#d9a521"/>';
    case "tisch": return '<rect x="-.47" y="-.45" width=".94" height=".9" rx=".06" fill="#b88850" stroke="' + OBJC.woodD + '" stroke-width="1.5"' + ns + '/><path d="M-.47 -.15H.47M-.47 .15H.47" stroke="' + OBJC.woodD + '" stroke-opacity=".45" stroke-width="1"' + ns + "/>";
    case "stuhl": return '<rect x="-.36" y="-.3" width=".72" height=".68" rx=".08" fill="#b88850" stroke="' + OBJC.woodD + '" stroke-width="1.3"' + ns + '/><rect x="-.4" y="-.46" width=".8" height=".18" rx=".05" fill="#8a5a2a" stroke="' + OBJC.woodD + '" stroke-width="1.3"' + ns + "/>";
    case "bett": return '<rect x="-.46" y="-.47" width=".92" height=".94" rx=".06" fill="#8a5a2a" stroke="#3a2a18" stroke-width="1.4"' + ns + '/><rect x="-.4" y="-.2" width=".8" height=".62" rx=".04" fill="#d8cdb6"/><rect x="-.34" y="-.42" width=".68" height=".17" rx=".06" fill="#f4ecdc" stroke="#b9ab92" stroke-width="1"' + ns + "/>";
    case "saeule": return '<circle r=".47" fill="' + OBJC.stone + '" stroke="' + OBJC.stoneD + '" stroke-width="1.5"' + ns + '/><circle r=".33" fill="#cfc7b8" stroke="' + OBJC.stoneD + '" stroke-opacity=".5" stroke-width="1"' + ns + "/>";
    case "fels": return '<path d="M-.46 .1L-.32 -.34L.02 -.47L.4 -.3L.47 .12L.22 .44L-.25 .42Z" fill="#9a948a" stroke="#4d4740" stroke-width="1.5"' + ns + '/><path d="M-.3 -.28L.02 -.38L.3 -.22L.08 -.05Z" fill="#b8b2a7"/>';
    case "baum": return '<path d="' + blob(0.47, 0.4, 11) + '" fill="#4f7d3a" fill-opacity=".9" stroke="#2c4a20" stroke-width="1.5"' + ns + '/><path d="' + blob(0.3, 0.25, 9) + '" fill="#6a9a4a" fill-opacity=".8"/><circle r=".07" fill="#5a3d1e"/>';
    case "busch": return '<path d="' + blob(0.47, 0.37, 8) + '" fill="#6c8f3f" stroke="#3a5a22" stroke-width="1.4"' + ns + '/><path d="' + blob(0.25, 0.2, 7) + '" fill="#86a95a" fill-opacity=".85"/>';
    case "feuer": return '<circle r=".46" fill="none" stroke="#6c625a" stroke-width="3" stroke-dasharray="3 2"' + ns + '/><circle r=".34" fill="#e07a1f"/><path d="' + blob(0.27, 0.15, 7) + '" fill="#f2b632"/><circle r=".09" fill="#fff2c0"/>';
    case "wagen": return '<rect x="-.47" y="-.48" width=".94" height=".96" rx=".18" fill="#5d554d" stroke="#1b1c1e" stroke-width="1.5"' + ns + '/><rect x="-.36" y="-.3" width=".72" height=".16" rx=".04" fill="#a9c2d4"/><rect x="-.36" y=".2" width=".72" height=".12" rx=".04" fill="#a9c2d4"/>';
    default: return '<circle r=".44" fill="#a51f1a" stroke="#fff" stroke-width="2"' + ns + '/><path d="M-.18 -.18L.18 .18M.18 -.18L-.18 .18" stroke="#fff" stroke-width="2.4" stroke-linecap="round"' + ns + "/>";
  }
}
function blob(R, r, n){ var d = ""; for(var i = 0; i <= n * 2; i++){ var a = Math.PI * i / n, rr = i % 2 ? r : R; d += (i ? "L" : "M") + (Math.cos(a) * rr).toFixed(3) + " " + (Math.sin(a) * rr).toFixed(3); } return d + "Z"; }

var raf = 0;
function draw(){ if(raf) return; raf = requestAnimationFrame(function(){ raf = 0; drawNow(); }); }
function drawNow(){
  if(!S.m) return;
  var dn = document.getElementById("sfDone"); if(dn){ var lab = S.wip ? "Wand fertig" : S.aim ? "Zielen abbrechen" : S.rings ? "Reichweite aus" : (S.meas || S.cal) ? "Messen beenden" : ""; dn.textContent = lab; dn.classList.toggle("on", !!lab && touch()); }
  var v = S.m.view, r = SVG.getBoundingClientRect(), z = v.z, m = S.m;
  W.setAttribute("transform", "translate(" + v.x + " " + v.y + ") scale(" + z + ")");
  ZT.textContent = Math.round(z / 48 * 100) + " %";
  var sn = [1, 5, 10, 25, 50, 100].filter(function(n){ return n * z >= 36; })[0] || 100;
  O.querySelector("#sfSc i").style.width = sn * z + "px"; O.querySelector("#sfSc span").textContent = sn + "“ = " + sn * 2 + " m";
  /* Hintergrund */
  L.bg.innerHTML = m.bg && m.bg.src ? '<image data-bg="1" href="' + m.bg.src + '" x="' + m.bg.x + '" y="' + m.bg.y + '" width="' + m.bg.w + '" height="' + m.bg.h + '" opacity="' + (m.bg.op == null ? 1 : m.bg.op) + '" preserveAspectRatio="none"' + (m.bg.lock ? ' pointer-events="none"' : "") + "/>" : "";
  /* Raster */
  if(S.grid){
    var x0 = Math.floor(-v.x / z) - 1, x1 = Math.ceil((r.width - v.x) / z) + 1, y0 = Math.floor(-v.y / z) - 1, y1 = Math.ceil((r.height - v.y) / z) + 1, d = "", dm = "";
    if(z >= 6){
      var minor = z >= 13;
      for(var x = x0; x <= x1; x++){ var s = "M" + x + " " + y0 + "V" + y1; if(x % 5){ if(minor) d += s; } else dm += s; }
      for(var y = y0; y <= y1; y++){ var s2 = "M" + x0 + " " + y + "H" + x1; if(y % 5){ if(minor) d += s2; } else dm += s2; }
    }
    var gop = m.bg && m.bg.src ? 0.55 : 1;
    L.gr.innerHTML = '<path d="' + d + '" stroke="#8c7a5c" stroke-opacity="' + (0.32 * gop * Math.min(1, (z - 8) / 20)) + '" stroke-width="1" vector-effect="non-scaling-stroke" fill="none"/><path d="' + dm + '" stroke="#6f5d40" stroke-opacity="' + (0.5 * gop) + '" stroke-width="1.2" vector-effect="non-scaling-stroke" fill="none"/>';
  } else L.gr.innerHTML = "";
  var ar = "", wa = "", ob = "", fi = "", tx = "", tp = "", figs = [], tpls = [];
  m.items.forEach(function(it){ if(it.t === "fig"){ if(it.cid) syncFig(it); figs.push(it); } else if(it.t === "tpl") tpls.push(it); });
  var hit = {}; tpls.forEach(function(t){ t._n = 0; figs.forEach(function(f){ if(tplHits(t, f)){ hit[f.id] = 1; t._n++; } }); });
  m.items.forEach(function(it){
    var tr = 'transform="translate(' + it.x + " " + it.y + (it.r ? ") rotate(" + it.r : "") + ')"';
    if(it.t === "area"){
      ar += '<g data-id="' + it.id + '" ' + tr + '><rect x="' + (-it.w / 2) + '" y="' + (-it.h / 2) + '" width="' + it.w + '" height="' + it.h + '" ' + areaFill(it.k) + ' stroke="' + areaStroke(it.k) + '" stroke-opacity=".6" stroke-width="1.5" stroke-dasharray="6 4" vector-effect="non-scaling-stroke"/>' +
        (z >= 22 && it.w >= 1.5 ? '<text x="' + (-it.w / 2 + 0.15) + '" y="' + (-it.h / 2 + 0.34) + '" class="sfal" fill="' + areaStroke(it.k) + '">' + E(AREAS[it.k]) + "</text>" : "") + "</g>";
    } else if(it.t === "wall") wa += wallSvg(it, z);
    else if(it.t === "obj") ob += '<g data-id="' + it.id + '" ' + tr + ' filter="url(#sfSh)"><g transform="scale(' + it.w + " " + it.h + ')">' + objSym(it.s) + "</g></g>";
    else if(it.t === "fig") fi += figSvg(it, z, hit[it.id]);
    else if(it.t === "txt") tx += '<text data-id="' + it.id + '" ' + tr + ' class="sftx" font-size="' + (it.fs || 0.6) + '" fill="' + (it.c || "#241f1c") + '" text-anchor="middle" dominant-baseline="central">' + E(N(it.s || "Text")) + "</text>";
    else if(it.t === "tpl") tp += '<g data-id="' + it.id + '" class="sftp" ' + tr + ">" + tplShape(it.k, it.c || "#a51f1a") + (TPL[it.k].r ? '<path d="M-.25 0H.25M0 -.25V.25" stroke="' + (it.c || "#a51f1a") + '" stroke-width="1.5" vector-effect="non-scaling-stroke"/>' : '<circle r=".12" fill="' + (it.c || "#a51f1a") + '"/>') + "</g>" + tplBadge(it, z);
  });
  L.ar.innerHTML = ar; L.wa.innerHTML = wa; L.ob.innerHTML = ob; L.fi.innerHTML = fi; L.tx.innerHTML = tx; L.tp.innerHTML = tp;
  L.ov.innerHTML = overlay(z);
  rail();
}
function tplBadge(t, z){
  var s = Math.min(22 / z, 0.6), c = t.c || "#a51f1a", wd = (1.8 + (t._n ? 0.9 : 0)) * s, p;
  if(TPL[t.k].r) p = [t.x + TPL[t.k].r * 0.7071 + 0.4 * s, t.y - TPL[t.k].r * 0.7071 - 0.4 * s];
  else { var q = rotP((t.k === "kegel" ? 9 : 12) + 0.35 + wd / 2, 0, t.r || 0); p = [t.x + q[0], t.y + q[1]]; }
  return '<g class="sfbdg" transform="translate(' + p[0] + " " + p[1] + ") scale(" + s + ')"><rect x="' + (-(1.8 + (t._n ? 0.9 : 0)) / 2) + '" y="-.5" width="' + (1.8 + (t._n ? 0.9 : 0)) + '" height="1" rx=".5" fill="' + c + '"/><text x="' + (t._n ? -0.45 : 0) + '" y=".04" fill="#fff" class="sfbt">' + TPL[t.k].k + "</text>" + (t._n ? '<circle cx=".9" cy="0" r=".36" fill="#fff"/><text x=".9" y=".04" fill="' + c + '" class="sfbt">' + t._n + "</text>" : "") + "</g>";
}
function wallSvg(it, z){
  var d = it.pts.map(function(p, i){ return (i ? "L" : "M") + p[0] + " " + p[1]; }).join(""), h = '<path d="' + d + '" stroke="transparent" stroke-width="' + (14 / z) + '" fill="none" stroke-linecap="round"/>';
  if(it.k === "tuer"){
    var a = it.pts[0], b = it.pts[it.pts.length - 1];
    return '<g data-id="' + it.id + '">' + h + '<path d="' + d + '" stroke="#2b2622" stroke-width=".3" stroke-linecap="butt" fill="none"/><path d="' + d + '" stroke="' + (it.offen ? "#e8dcc4" : "#a8773f") + '" stroke-width=".18" fill="none"' + (it.offen ? ' stroke-dasharray=".25 .15"' : "") + "/>" +
      '<circle cx="' + a[0] + '" cy="' + a[1] + '" r=".1" fill="#2b2622"/><circle cx="' + b[0] + '" cy="' + b[1] + '" r=".1" fill="#2b2622"/></g>';
  }
  if(it.k === "fenster") return '<g data-id="' + it.id + '">' + h + '<path d="' + d + '" stroke="#2b2622" stroke-width=".24" fill="none"/><path d="' + d + '" stroke="#bcd3e0" stroke-width=".1" fill="none"/></g>';
  return '<g data-id="' + it.id + '">' + h + '<path d="' + d + '" stroke="#2b2622" stroke-width=".24" stroke-linecap="round" stroke-linejoin="round" fill="none"/></g>';
}
function figSvg(f, z, hit){
  var r = f.d / 2, col = f.c || teamCol(f.team), aus = f.st && f.st.aus, st = f.st || {};
  var s = '<g data-id="' + f.id + '" transform="translate(' + f.x + " " + f.y + ')" class="sff' + (aus ? " aus" : "") + '">';
  if(hit) s += '<circle r="' + (r + 0.1) + '" fill="none" stroke="#f2b632" stroke-width="4" vector-effect="non-scaling-stroke" class="sfhit"/>';
  s += '<circle r="' + r + '" fill="' + col + '" filter="url(#sfSh)"/>';
  if(f.img){ s += '<clipPath id="sfc' + f.id + '"><circle r="' + (r * 0.84) + '"/></clipPath><image href="' + f.img + '" x="' + (-r * 0.84) + '" y="' + (-r * 0.84) + '" width="' + (r * 1.68) + '" height="' + (r * 1.68) + '" clip-path="url(#sfc' + f.id + ')" preserveAspectRatio="xMidYMid slice"/>'; }
  else { s += '<circle r="' + (r * 0.84) + '" fill="#fbf6ea"/><circle r="' + (r * 0.84) + '" fill="' + col + '" fill-opacity=".14"/>';
    var k = f.k || kuerzel(f.n); s += '<text class="sfk" font-size="' + (r * (k.length > 2 ? 0.62 : 0.8)) + '" fill="' + col + '" y="' + (r * 0.04) + '">' + E(N(k)) + "</text>"; }
  s += '<circle r="' + (r * 0.92) + '" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="' + (r * 0.05) + '"/>';
  if(f.wc){ var wr = Math.max(0.2, Math.min(0.34, r * 0.36)), wx = -r * 0.72, wy = -r * 0.72; s += '<circle cx="' + wx + '" cy="' + wy + '" r="' + wr + '" fill="#fbf6ea" stroke="' + col + '" stroke-width="1.5" vector-effect="non-scaling-stroke"/><image href="img/wc.webp" x="' + (wx - wr * 0.78) + '" y="' + (wy - wr * 0.78) + '" width="' + (wr * 1.56) + '" height="' + (wr * 1.56) + '"/>'; }
  if(aus) s += '<path d="M' + (-r * 0.55) + " " + (-r * 0.55) + "L" + (r * 0.55) + " " + (r * 0.55) + "M" + (r * 0.55) + " " + (-r * 0.55) + "L" + (-r * 0.55) + " " + (r * 0.55) + '" stroke="#a51f1a" stroke-width="' + (r * 0.16) + '" stroke-linecap="round"/>';
  /* Zustände als Plättchen am Rand */
  var pips = [];
  if(st.w) pips.push(["W" + st.w, "#a51f1a"]);
  if(st.e) pips.push(["E" + st.e, "#3c5a78"]);
  STATES.forEach(function(x){ if(st[x[0]]) pips.push([x[2], x[3]]); });
  var pr = Math.max(0.2, Math.min(0.26, r * 0.3));
  pips.forEach(function(p, i){
    var a = rad(-40 + i * (pr * 2.3 / (r + pr)) * 57.3), px = Math.cos(a) * (r + pr * 0.25), py = Math.sin(a) * (r + pr * 0.25);
    s += '<g transform="translate(' + px.toFixed(3) + " " + py.toFixed(3) + ')"><circle r="' + pr + '" fill="' + p[1] + '" stroke="#fff" stroke-width="1.5" vector-effect="non-scaling-stroke"/><text class="sfp" font-size="' + (pr * (p[0].length > 1 ? 0.95 : 1.15)) + '" y="' + (pr * 0.05) + '">' + p[0] + "</text></g>";
  });
  if(f.n && z >= 20) s += '<g transform="translate(0 ' + (r + 0.08) + ") scale(" + (1 / z) + ')"><text class="sfn" y="0">' + E(f.n) + "</text>" + (f.cid && f.wk && z >= 30 ? '<text class="sfn sfw" y="17">' + E(f.wk) + "</text>" : "") + "</g>";
  return s + "</g>";
}
function teamCol(t){ for(var i = 0; i < TEAMS.length; i++) if(TEAMS[i][0] === t) return TEAMS[i][2]; return TEAMS[1][2]; }
function hr(z){ return 7 / z; }
function overlay(z){
  var s = "", it = selItem(), h = hr(z), m = S.m;
  var hd = function(x, y, k, extra){ return '<circle data-h="' + k + '" cx="' + x + '" cy="' + y + '" r="' + h + '" class="sfhd' + (extra || "") + '"/>'; };
  if(S.sel === "bg" && m.bg){ var b = m.bg; s += '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + b.h + '" class="sfsel"/>' + (b.lock ? "" : hd(b.x + b.w, b.y + b.h, "bgres")); }
  if(it){
    if(it.t === "fig"){
      s += '<circle cx="' + it.x + '" cy="' + it.y + '" r="' + (it.d / 2 + 0.16) + '" class="sfsel"/>';
    } else if(it.t === "wall"){
      s += '<path d="' + it.pts.map(function(p, i){ return (i ? "L" : "M") + p[0] + " " + p[1]; }).join("") + '" class="sfsel"/>';
      it.pts.forEach(function(p, i){ s += hd(p[0], p[1], "pt" + i); });
    } else if(it.t === "tpl"){
      if(!TPL[it.k].r){ var e = rotP(it.k === "kegel" ? 9 : 12, 0, it.r || 0); s += hd(it.x + e[0], it.y + e[1], "trot", " rot"); }
      else s += '<circle cx="' + it.x + '" cy="' + it.y + '" r="' + (TPL[it.k].r + 0.12) + '" class="sfsel"/>';
    } else if(it.t === "txt"){
      s += '<circle cx="' + it.x + '" cy="' + it.y + '" r="' + h * 0.6 + '" class="sfhd"/>';
    } else {
      var w = it.w / 2, hh = it.h / 2, pad = 0.08, c = function(x, y){ var q = rotP(x, y, it.r || 0); return [it.x + q[0], it.y + q[1]]; };
      var pts = [c(-w - pad, -hh - pad), c(w + pad, -hh - pad), c(w + pad, hh + pad), c(-w - pad, hh + pad)];
      s += '<path d="M' + pts.map(function(p){ return p.join(" "); }).join("L") + 'Z" class="sfsel"/>';
      var top = c(0, -hh - pad), rh = c(0, -hh - pad - 26 / z); s += '<path d="M' + top.join(" ") + "L" + rh.join(" ") + '" class="sfsel"/>' + hd(rh[0], rh[1], "orot", " rot");
      var br = c(w, hh); s += hd(br[0], br[1], "ores");
    }
  }
  /* Bewegung beim Ziehen einer Figur */
  var D = S.drag;
  if(D && D.mode === "move" && D.moved && it && it.t === "fig"){
    var dist = Math.hypot(it.x - D.ox, it.y - D.oy);
    if(it.bw) s += '<circle cx="' + D.ox + '" cy="' + D.oy + '" r="' + it.bw + '" class="sfbw"/>';
    s += '<circle cx="' + D.ox + '" cy="' + D.oy + '" r="' + it.d / 2 + '" class="sfghost"/>' + measSvg(D.ox, D.oy, it.x, it.y, z, dist);
  }
  if(S.rings){ var rf = byId(S.rings.fid); if(rf){ S.rings.rw.split("/").map(Number).forEach(function(rr, i){ s += '<circle cx="' + rf.x + '" cy="' + rf.y + '" r="' + rr + '" class="sfring r' + i + '"/>' + measLabel(rf.x, rf.y - rr, z, ["kurz", "mittel", "weit"][i] + " " + rr + "“"); }); } }
  if(S.aim && S.aim.p){ var af = byId(S.aim.fid), g = aimGeo(S.aim, af); if(g){
    s += '<g transform="translate(' + g.x + " " + g.y + (g.r ? ") rotate(" + g.r : "") + ')" class="sfaim">' + tplShape(S.aim.k, S.aim.c || "#a51f1a") + "</g>";
    var dd = TPL[S.aim.k].r ? Math.hypot(g.x - af.x, g.y - af.y) : null;
    if(dd != null) s += measSvg(af.x, af.y, g.x, g.y, z, null, false, reichLabel(dd, S.aim));
    else s += measLabel(S.aim.p[0], S.aim.p[1] - 0.6, z, S.aim.src);
  } }
  if(S.meas) s += measSvg(S.meas.a[0], S.meas.a[1], S.meas.b[0], S.meas.b[1], z);
  if(S.cal) s += measSvg(S.cal.a[0], S.cal.a[1], S.cal.b[0], S.cal.b[1], z, null, true);
  if(S.wip){ var pp = S.wip.pts.concat(S.hover ? [S.hover] : []); s += '<path d="' + pp.map(function(p, i){ return (i ? "L" : "M") + p[0] + " " + p[1]; }).join("") + '" class="sfwip"/>'; S.wip.pts.forEach(function(p){ s += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + h * 0.6 + '" class="sfhd"/>'; }); }
  if(D && (D.mode === "area" || D.mode === "seg")){
    if(D.mode === "area"){ var x0 = Math.min(D.a[0], D.b[0]), y0 = Math.min(D.a[1], D.b[1]); s += '<rect x="' + x0 + '" y="' + y0 + '" width="' + Math.abs(D.b[0] - D.a[0]) + '" height="' + Math.abs(D.b[1] - D.a[1]) + '" ' + areaFill(S.sub.area) + ' class="sfwiprect"/>'; }
    else s += '<path d="M' + D.a.join(" ") + "L" + D.b.join(" ") + '" class="sfwip"/>';
    s += measLabel((D.a[0] + D.b[0]) / 2, (D.a[1] + D.b[1]) / 2, z, D.mode === "area" ? f1(Math.abs(D.b[0] - D.a[0])) + " × " + f1(Math.abs(D.b[1] - D.a[1])) + "“" : f1(Math.hypot(D.b[0] - D.a[0], D.b[1] - D.a[1])) + "“");
  }
  if(S.tool === "wall" && S.hover && !S.wip) s += '<circle cx="' + S.hover[0] + '" cy="' + S.hover[1] + '" r="' + h * 0.6 + '" class="sfhd"/>';
  return s;
}
function aimGeo(A, f){
  if(!f || !A.p) return null;
  if(TPL[A.k].r){ var q = S.snap ? [snapV(A.p[0], 0.5, 0), snapV(A.p[1], 0.5, 0)] : A.p; return {x:q[0], y:q[1], r:0}; }
  var ang = Math.atan2(A.p[1] - f.y, A.p[0] - f.x), rr = f.d / 2;
  return {x:f.x + Math.cos(ang) * rr, y:f.y + Math.sin(ang) * rr, r:Math.round(ang * 180 / Math.PI)};
}
function measSvg(ax, ay, bx, by, z, dd, cal, extra){
  var d = dd == null ? Math.hypot(bx - ax, by - ay) : dd;
  return '<path d="M' + ax + " " + ay + "L" + bx + " " + by + '" class="sfms"/><circle cx="' + ax + '" cy="' + ay + '" r="' + 4 / z + '" class="sfmsd"/><circle cx="' + bx + '" cy="' + by + '" r="' + 4 / z + '" class="sfmsd"/>' +
    measLabel((ax + bx) / 2, (ay + by) / 2, z, cal ? f1(d) + "“" : f1(d) + "“ · " + f1(d * 2) + " m" + (extra ? " · " + extra : ""));
}
function measLabel(x, y, z, t){ var s = 1 / z; return '<g transform="translate(' + x + " " + y + ") scale(" + s + ')"><rect x="' + (-t.length * 3.9 - 9) + '" y="-12" width="' + (t.length * 7.8 + 18) + '" height="24" rx="12" class="sfml"/><text class="sfmt" y="1">' + E(t) + "</text></g>"; }

/* ---------- Eingabe ---------- */
function wpt(e){ var r = SVG.getBoundingClientRect(), v = S.m.view, sx = e.clientX - r.left, sy = e.clientY - r.top; return {x:(sx - v.x) / v.z, y:(sy - v.y) / v.z, sx:sx, sy:sy}; }
function ptrs(){ return Object.keys(S.ptr).map(function(k){ return S.ptr[k]; }); }
function pDown(e){
  if(!S.m) return;
  ddToggle(false);
  if(document.activeElement && document.activeElement.blur && O.contains(document.activeElement)) document.activeElement.blur();
  S.ptr[e.pointerId] = {x:e.clientX, y:e.clientY};
  try { SVG.setPointerCapture(e.pointerId); } catch(x){}
  var P = ptrs();
  if(P.length === 2){ var a = P[0], b = P[1], v = S.m.view, r = SVG.getBoundingClientRect(); S.drag = {mode:"pinch", d:Math.hypot(a.x - b.x, a.y - b.y), z:v.z, vx:v.x, vy:v.y, cx:(a.x + b.x) / 2 - r.left, cy:(a.y + b.y) / 2 - r.top}; return; }
  if(P.length > 2) return;
  var p = wpt(e), t = e.target, hd = t.closest && t.closest("[data-h]"), el = t.closest && t.closest("[data-id]"), isBg = t.getAttribute && t.getAttribute("data-bg");
  var start = {sx:e.clientX, sy:e.clientY, px:p.x, py:p.y};
  if(e.button === 1 || (e.button === 2 && !S.wip) || S.space){ S.drag = Object.assign({mode:"pan", vx:S.m.view.x, vy:S.m.view.y}, start); return; }
  if(e.button === 2){ if(S.aim){ S.aim = null; draw(); } return; }
  if(S.aim){ var A = S.aim, af = byId(A.fid), g = aimGeo(A, af); if(g){ pushUndo(); var nt = {t:"tpl", id:uid(), k:A.k, x:g.x, y:g.y, r:g.r, c:A.c || "#a51f1a", src:A.src}; S.m.items.push(nt); S.sel = nt.id; } S.aim = null; ins(); save(); draw(); return; }
  if(hd){
    pushUndo(); var it = selItem(), k = hd.getAttribute("data-h");
    if(k === "bgres") S.drag = Object.assign({mode:"bgres"}, start);
    else if(k.indexOf("pt") === 0) S.drag = Object.assign({mode:"pt", i:+k.slice(2)}, start);
    else if(k === "trot" || k === "orot") S.drag = Object.assign({mode:"rot"}, start);
    else if(k === "ores"){ var q = rotP(-it.w / 2, -it.h / 2, it.r || 0); S.drag = Object.assign({mode:"res", qx:it.x + q[0], qy:it.y + q[1]}, start); }
    return;
  }
  var tool = S.tool, place = tool === "fig" || tool === "obj" || tool === "txt" || tool === "tpl";
  if(el && place){ var ti = byId(el.getAttribute("data-id")); if(!ti || ti.t === "area" || ti.t === "wall") el = null; }
  if(el && (tool === "sel" || place)){ var id = el.getAttribute("data-id"), it2 = byId(id); if(S.sel !== id){ S.sel = id; ins(); } S.drag = Object.assign({mode:"move", ox:it2.x, oy:it2.y, pts:it2.pts ? JSON.parse(JSON.stringify(it2.pts)) : null}, start); draw(); return; }
  if(tool === "sel"){
    if(isBg && S.m.bg && !S.m.bg.lock){ if(S.sel !== "bg"){ S.sel = "bg"; ins(); } S.drag = Object.assign({mode:"bgmove", ox:S.m.bg.x, oy:S.m.bg.y}, start); draw(); return; }
    if(S.sel){ S.sel = null; ins(); }
    S.meas = null; S.drag = Object.assign({mode:"pan", vx:S.m.view.x, vy:S.m.view.y, click:1}, start); draw(); return;
  }
  if(tool === "fig" && S.sub.fig && window.SWBogen && SWBogen.get(S.sub.fig)){
    pushUndo(); var cw = SWBogen.werte(S.sub.fig), ex = S.m.items.filter(function(i){ return i.cid === S.sub.fig; })[0], qc = snapFig(p.x, p.y, cw.d);
    if(ex){ ex.x = qc[0]; ex.y = qc[1]; S.sel = ex.id; }
    else { var cf = {t:"fig", id:uid(), cid:S.sub.fig, x:qc[0], y:qc[1], d:cw.d, n:cw.name, team:"h", wc:1, bw:cw.tempo, st:{}}; S.m.items.push(cf); S.sel = cf.id; }
    ins(); save(); draw(); return;
  }
  if(tool === "fig"){
    pushUndo(); var n = S.m.items.filter(function(i){ return i.t === "fig"; }).length + 1, q2 = snapFig(p.x, p.y, 1);
    var f = {t:"fig", id:uid(), x:q2[0], y:q2[1], d:1, n:"Figur " + n, team:"g", wc:0, bw:6, st:{}};
    S.m.items.push(f); S.sel = f.id; ins(); save(); draw(); return;
  }
  if(tool === "obj"){
    pushUndo(); var o = OBJ[S.sub.obj], ox = Math.round(o[1]) % 2 ? 0.5 : 0, oy = Math.round(o[2]) % 2 ? 0.5 : 0, q3 = S.snap ? [snapV(p.x, 1, ox), snapV(p.y, 1, oy)] : [p.x, p.y];
    var ob = {t:"obj", id:uid(), s:S.sub.obj, x:q3[0], y:q3[1], w:o[1], h:o[2], r:0};
    S.m.items.push(ob); S.sel = ob.id; ins(); save(); draw(); return;
  }
  if(tool === "txt"){
    pushUndo(); var tt = {t:"txt", id:uid(), x:Math.round(p.x * 2) / 2, y:Math.round(p.y * 2) / 2, s:"Text", fs:0.6, c:"#241f1c"};
    S.m.items.push(tt); S.sel = tt.id; save(); draw(); ins(); setTimeout(function(){ var i = INS.querySelector('[data-f="s"]'); if(i){ i.focus(); i.select(); } }, 30); return;
  }
  if(tool === "tpl"){
    pushUndo(); var q4 = S.snap ? [snapV(p.x, 0.5, 0), snapV(p.y, 0.5, 0)] : [p.x, p.y];
    var tp = {t:"tpl", id:uid(), k:S.sub.tpl, x:q4[0], y:q4[1], r:0, c:"#a51f1a"};
    S.m.items.push(tp); S.sel = tp.id; setTool("sel"); ins(); save(); draw(); return;
  }
  if(tool === "wall"){
    var q5 = snapPt(p.x, p.y);
    if(!S.wip) S.wip = {pts:[q5]};
    else { var f0 = S.wip.pts[0], last = S.wip.pts[S.wip.pts.length - 1];
      if(S.wip.pts.length > 2 && Math.hypot(q5[0] - f0[0], q5[1] - f0[1]) < 0.3){ S.wip.pts.push([f0[0], f0[1]]); finishWall(); return; }
      if(Math.hypot(q5[0] - last[0], q5[1] - last[1]) > 0.05) S.wip.pts.push(q5); }
    draw(); return;
  }
  if(tool === "tuer" || tool === "fenster"){ var q6 = snapPt(p.x, p.y); S.drag = Object.assign({mode:"seg", a:q6, b:q6}, start); draw(); return; }
  if(tool === "area"){ var q7 = snapPt(p.x, p.y); S.drag = Object.assign({mode:"area", a:q7, b:q7}, start); draw(); return; }
  if(tool === "meas"){ var q8 = S.snap ? [Math.floor(p.x) + 0.5, Math.floor(p.y) + 0.5] : [p.x, p.y]; S.meas = {a:q8, b:q8}; S.drag = Object.assign({mode:"meas"}, start); draw(); return; }
  if(tool === "cal"){ S.cal = {a:[p.x, p.y], b:[p.x, p.y]}; S.drag = Object.assign({mode:"cal"}, start); draw(); }
}
function pMove(e){
  if(!S.m) return;
  if(S.ptr[e.pointerId]) S.ptr[e.pointerId] = {x:e.clientX, y:e.clientY};
  var D = S.drag, p = wpt(e), v = S.m.view;
  if(S.tool === "wall" && !D){ S.hover = snapPt(p.x, p.y); draw(); }
  if(S.aim && !D){ S.aim.p = [p.x, p.y]; draw(); return; }
  if(!D) return;
  var it = selItem(), dx = p.x - D.px, dy = p.y - D.py, free = e.shiftKey;
  switch(D.mode){
    case "pinch": var P = ptrs(); if(P.length < 2) return; var a = P[0], b = P[1], r = SVG.getBoundingClientRect(), nd = Math.hypot(a.x - b.x, a.y - b.y), nz = Math.max(6, Math.min(220, D.z * nd / D.d)), cx = (a.x + b.x) / 2 - r.left, cy = (a.y + b.y) / 2 - r.top;
      v.z = nz; v.x = cx - (D.cx - D.vx) * nz / D.z; v.y = cy - (D.cy - D.vy) * nz / D.z; break;
    case "pan": v.x = D.vx + e.clientX - D.sx; v.y = D.vy + e.clientY - D.sy; if(Math.abs(e.clientX - D.sx) + Math.abs(e.clientY - D.sy) > 3) D.click = 0; break;
    case "move":
      if(!D.moved){ if(Math.abs(e.clientX - D.sx) + Math.abs(e.clientY - D.sy) < 4) return; D.moved = 1; pushUndo(); }
      if(it.t === "wall"){ var ddx = S.snap && !free ? Math.round(dx) : dx, ddy = S.snap && !free ? Math.round(dy) : dy; it.pts = D.pts.map(function(q){ return [q[0] + ddx, q[1] + ddy]; }); }
      else if(it.t === "fig"){ var q = free ? [D.ox + dx, D.oy + dy] : snapFig(D.ox + dx, D.oy + dy, it.d); it.x = q[0]; it.y = q[1]; }
      else { var st = it.t === "tpl" && TPL[it.k].r ? 0.5 : 0.5; it.x = S.snap && !free ? snapV(D.ox + dx, st, (D.ox % st + st) % st) : D.ox + dx; it.y = S.snap && !free ? snapV(D.oy + dy, st, (D.oy % st + st) % st) : D.oy + dy; }
      break;
    case "bgmove": if(!D.moved){ D.moved = 1; pushUndo(); } S.m.bg.x = D.ox + dx; S.m.bg.y = D.oy + dy; break;
    case "bgres": var bg = S.m.bg, nw = Math.max(2, p.x - bg.x); bg.h = bg.h * nw / bg.w; bg.w = nw; break;
    case "pt": it.pts[D.i] = free ? [p.x, p.y] : snapPt(p.x, p.y); break;
    case "rot":
      var ang = Math.atan2(p.y - it.y, p.x - it.x) * 180 / Math.PI;
      if(it.t !== "tpl") ang += 90;
      var stp = free ? 1 : it.t === "tpl" ? 5 : 15; it.r = ((Math.round(ang / stp) * stp) % 360 + 360) % 360; break;
    case "res":
      var Pp = free ? [p.x, p.y] : [Math.round(p.x * 4) / 4, Math.round(p.y * 4) / 4], l = rotP(Pp[0] - D.qx, Pp[1] - D.qy, -(it.r || 0));
      var w = Math.max(0.25, l[0]), h = Math.max(0.25, l[1]); if(S.snap && !free){ w = Math.max(0.5, Math.round(w * 2) / 2); h = Math.max(0.5, Math.round(h * 2) / 2); }
      var cc = rotP(w / 2, h / 2, it.r || 0); it.w = w; it.h = h; it.x = D.qx + cc[0]; it.y = D.qy + cc[1]; break;
    case "seg": D.b = free ? [p.x, p.y] : snapPt(p.x, p.y); break;
    case "area": D.b = free ? [p.x, p.y] : snapPt(p.x, p.y); break;
    case "meas": S.meas.b = S.snap && !free ? [Math.floor(p.x) + 0.5, Math.floor(p.y) + 0.5] : [p.x, p.y]; break;
    case "cal": S.cal.b = [p.x, p.y]; break;
  }
  draw();
}
function pUp(e){
  delete S.ptr[e.pointerId];
  var D = S.drag; if(!D) return;
  if(D.mode === "pinch"){ if(!ptrs().length) S.drag = null; save(); return; }
  S.drag = null;
  if(D.mode === "seg"){ if(Math.hypot(D.b[0] - D.a[0], D.b[1] - D.a[1]) >= 0.5){ pushUndo(); var w = {t:"wall", id:uid(), k:S.tool, pts:[D.a, D.b]}; S.m.items.push(w); S.sel = w.id; ins(); } }
  else if(D.mode === "area"){ var ww = Math.abs(D.b[0] - D.a[0]), hh = Math.abs(D.b[1] - D.a[1]); if(ww >= 0.5 && hh >= 0.5){ pushUndo(); var ar = {t:"area", id:uid(), k:S.sub.area, x:(D.a[0] + D.b[0]) / 2, y:(D.a[1] + D.b[1]) / 2, w:ww, h:hh, r:0}; S.m.items.splice(firstNonArea(), 0, ar); S.sel = ar.id; ins(); } }
  else if(D.mode === "cal"){ ins(); }
  else if(D.mode === "move" && D.moved){ ins(); }
  else if(D.mode === "rot" || D.mode === "res"){ ins(); }
  save(); draw();
}
function firstNonArea(){ var a = S.m.items; for(var i = 0; i < a.length; i++) if(a[i].t !== "area") return i; return a.length; }
function finishWall(){
  var w = S.wip; S.wip = null; S.hover = null;
  if(w && w.pts.length >= 2){ pushUndo(); var it = {t:"wall", id:uid(), k:"wand", pts:w.pts}; S.m.items.push(it); S.sel = it.id; ins(); save(); }
  draw();
}
function onDbl(e){
  if(S.tool === "wall"){ if(S.wip && S.wip.pts.length > 1){ S.wip.pts.pop(); } finishWall(); return; }
  var el = e.target.closest && e.target.closest("[data-id]"); if(!el) return;
  var f = INS.querySelector('[data-f="n"],[data-f="s"]'); if(f){ f.focus(); f.select(); }
}
function zoomAt(f, sx, sy){ var v = S.m.view, nz = Math.max(6, Math.min(220, v.z * f)); v.x = sx - (sx - v.x) * nz / v.z; v.y = sy - (sy - v.y) * nz / v.z; v.z = nz; draw(); save(); }
function onWheel(e){ e.preventDefault(); var r = SVG.getBoundingClientRect(); zoomAt(Math.exp(-e.deltaY * (e.deltaMode ? 0.05 : 0.0016)), e.clientX - r.left, e.clientY - r.top); }
function fit(){
  var m = S.m, b = [Infinity, Infinity, -Infinity, -Infinity], add = function(x, y){ b[0] = Math.min(b[0], x); b[1] = Math.min(b[1], y); b[2] = Math.max(b[2], x); b[3] = Math.max(b[3], y); };
  bounds(add);
  var r = SVG.getBoundingClientRect(), v = m.view;
  if(b[0] === Infinity){ v.z = 48; v.x = r.width / 2; v.y = r.height / 2; draw(); save(); return; }
  var z = Math.max(6, Math.min(120, Math.min((r.width - 80) / (b[2] - b[0] + 2), (r.height - 80) / (b[3] - b[1] + 2))));
  v.z = z; v.x = r.width / 2 - (b[0] + b[2]) / 2 * z; v.y = r.height / 2 - (b[1] + b[3]) / 2 * z; draw(); save();
}
function bounds(add){
  var m = S.m;
  if(m.bg && m.bg.src){ add(m.bg.x, m.bg.y); add(m.bg.x + m.bg.w, m.bg.y + m.bg.h); }
  m.items.forEach(function(it){
    if(it.t === "wall") it.pts.forEach(function(p){ add(p[0], p[1]); });
    else if(it.t === "fig"){ add(it.x - it.d / 2, it.y - it.d / 2 - 0.3); add(it.x + it.d / 2 + 0.3, it.y + it.d / 2 + 0.5); }
    else if(it.t === "tpl"){ var R = TPL[it.k].r; if(R){ add(it.x - R, it.y - R); add(it.x + R, it.y + R); } else { var e = rotP(it.k === "kegel" ? 9 : 12, 0, it.r || 0); add(it.x - 1.5, it.y - 1.5); add(it.x + e[0] + 1.5, it.y + e[1] + 1.5); add(it.x + e[0] - 1.5, it.y + e[1] - 1.5); } }
    else if(it.t === "txt"){ add(it.x - 1, it.y - 0.5); add(it.x + 1, it.y + 0.5); }
    else { var R2 = Math.hypot(it.w, it.h) / 2; add(it.x - R2, it.y - R2); add(it.x + R2, it.y + R2); }
  });
}

/* ---------- Tastatur ---------- */
window.addEventListener("keydown", function(e){
  var k = e.key, tg = e.target || {}, typing = /^(INPUT|TEXTAREA|SELECT)$/.test(tg.tagName || "") || tg.isContentEditable;
  if(!S.open){
    if((k === "m" || k === "M") && !typing && !e.ctrlKey && !e.metaKey && !e.altKey && !document.querySelector(".modal,.bv-on")){ e.preventDefault(); e.stopImmediatePropagation(); open(); }
    return;
  }
  e.stopImmediatePropagation();
  if(typing){ if(k === "Escape") tg.blur(); return; }
  var it = selItem(), c = e.ctrlKey || e.metaKey;
  if(c && (k === "z" || k === "Z")){ e.preventDefault(); if(e.shiftKey) redo(); else undo(); return; }
  if(c && (k === "y" || k === "Y")){ e.preventDefault(); redo(); return; }
  if(c && (k === "d" || k === "D")){ e.preventDefault(); dup(); return; }
  if(c) return;
  if(k === " "){ S.space = true; SVG.classList.add("pan"); e.preventDefault(); return; }
  if(k === "Escape"){
    if(S.aim){ S.aim = null; draw(); return; }
    if(S.rings){ S.rings = null; draw(); ins(); return; }
    if(S.wip){ finishWall(); return; }
    if(DD.classList.contains("on")){ ddToggle(false); return; }
    if(S.meas || S.cal){ S.meas = null; S.cal = null; draw(); ins(); return; }
    if(S.sel){ S.sel = null; ins(); draw(); return; }
    if(S.tool !== "sel"){ setTool("sel"); return; }
    close(); return;
  }
  if(k === "Enter" && S.wip){ finishWall(); return; }
  if(k === "m" || k === "M"){ close(); return; }
  if((k === "Delete" || k === "Backspace") && S.sel){ e.preventDefault(); del(); return; }
  var tk = {"1":"sel", "2":"fig", "3":"obj", "4":"wall", "5":"tuer", "6":"fenster", "7":"area", "8":"tpl", "9":"meas", "0":"txt"}[k];
  if(tk){ setTool(tk); return; }
  if((k === "r" || k === "R") && it && it.t !== "fig" && it.t !== "wall"){ pushUndo(); it.r = (((it.r || 0) + (e.shiftKey ? -45 : 45)) % 360 + 360) % 360; ins(); save(); draw(); return; }
  if(k === "+" || k === "="){ var r = SVG.getBoundingClientRect(); zoomAt(1.25, r.width / 2, r.height / 2); return; }
  if(k === "-"){ var r2 = SVG.getBoundingClientRect(); zoomAt(0.8, r2.width / 2, r2.height / 2); return; }
  if(k === "g" || k === "G"){ option("grid"); return; }
  var dir = {ArrowLeft:[-1, 0], ArrowRight:[1, 0], ArrowUp:[0, -1], ArrowDown:[0, 1]}[k];
  if(dir){
    e.preventDefault(); var st = e.shiftKey ? 5 : 1;
    if(it){ pushUndo(); if(it.pts) it.pts = it.pts.map(function(p){ return [p[0] + dir[0] * st, p[1] + dir[1] * st]; }); else { it.x += dir[0] * st; it.y += dir[1] * st; } save(); }
    else { S.m.view.x -= dir[0] * 48 * st; S.m.view.y -= dir[1] * 48 * st; save(); }
    draw();
  }
}, true);
window.addEventListener("keyup", function(e){ if(e.key === " " && S.open){ S.space = false; SVG.classList.remove("pan"); } }, true);

/* ---------- Aktionen ---------- */
function del(){ if(S.sel === "bg"){ pushUndo(); S.m.bg = null; S.sel = null; ins(); save(); draw(); return; } var it = selItem(); if(!it) return; pushUndo(); S.m.items.splice(S.m.items.indexOf(it), 1); S.sel = null; ins(); save(); draw(); }
function dup(){
  var it = selItem(); if(!it) return; pushUndo();
  var c = JSON.parse(JSON.stringify(it)); c.id = uid();
  if(c.pts) c.pts = c.pts.map(function(p){ return [p[0] + 1, p[1] + 1]; }); else { c.x += it.t === "fig" ? it.d : 1; }
  if(c.t === "fig" && /\d+$/.test(c.n || "")){ c.n = c.n.replace(/\d+$/, function(n){ return +n + 1; }); }
  else if(c.t === "fig" && c.n && !c.wc){ var base = c.n, i = 2; c.n = base + " " + i; }
  S.m.items.push(c); S.sel = c.id; ins(); save(); draw();
}
function order(d){ var it = selItem(), a = S.m.items; if(!it) return; pushUndo(); a.splice(a.indexOf(it), 1); if(d > 0) a.push(it); else a.unshift(it); save(); draw(); }
function onClick(e){
  var b = e.target.closest("[data-a],[data-map]"); if(!b || !O.contains(b)) return;
  if(b.dataset.map){ var m = S.maps.filter(function(x){ return x.id === b.dataset.map; })[0]; ddToggle(false); save(); if(m) load(m); return; }
  var a = b.dataset.a, v = S.m && S.m.view, r = SVG.getBoundingClientRect();
  if(a === "close") close();
  if(a === "desel"){ S.sel = null; S.rings = null; S.meas = null; draw(); ins(); return; }
  if(a === "done"){ if(S.wip) finishWall(); else if(S.aim){ S.aim = null; draw(); } else if(S.rings){ S.rings = null; draw(); ins(); } else if(S.meas || S.cal){ S.meas = null; S.cal = null; draw(); ins(); } return; }
  if(a === "link") teilen("spielfeld.html", e.target.closest("button"));
  else if(a === "undo") undo();
  else if(a === "redo") redo();
  else if(a === "zin") zoomAt(1.25, r.width / 2, r.height / 2);
  else if(a === "zout") zoomAt(0.8, r.width / 2, r.height / 2);
  else if(a === "fit") fit();
  else if(a === "exp") exportJSON();
  else if(a === "imp") FILEJ.click();
  else if(a === "png") exportPNG();
  else if(a === "new"){ var nm2 = newMap("Karte " + (S.maps.length + 1)); S.maps.unshift(nm2); dbPut(nm2); ddToggle(false); load(nm2); setTimeout(function(){ NAME.focus(); NAME.select(); }, 30); }
  else if(a === "dupmap"){ var c = JSON.parse(JSON.stringify(S.m)); c.id = uid(); c.name = S.m.name + " (Kopie)"; c.t = Date.now(); S.maps.unshift(c); dbPut(c); ddToggle(false); load(c); }
  else if(a === "delmap"){
    if(b.dataset.ok !== "1"){ b.dataset.ok = "1"; b.innerHTML = ic("trash") + "Wirklich löschen?"; return; }
    var id = S.m.id; dbDel(id); S.maps = S.maps.filter(function(x){ return x.id !== id; }); ddToggle(false);
    if(!S.maps.length){ var n0 = newMap("Karte 1"); S.maps.push(n0); dbPut(n0); }
    load(S.maps[0]);
  }
}

/* ---------- Inspektor ---------- */
function seg(f, opts, cur){ return '<div class="sfseg">' + opts.map(function(o){ return '<button data-set="' + f + '" data-v="' + o[0] + '" class="' + (String(cur) === String(o[0]) ? "on" : "") + '">' + o[1] + "</button>"; }).join("") + "</div>"; }
function sw(f, cols, cur){ return '<div class="sfsw">' + cols.map(function(c){ return '<button data-set="' + f + '" data-v="' + c + '" style="--c:' + c + '" class="' + (c === cur ? "on" : "") + '"></button>'; }).join("") + "</div>"; }
function row(l, h){ return '<div class="sfrow"><label>' + l + "</label>" + h + "</div>"; }
function foot(extra){ return '<div class="sfift">' + (extra || "") + '<button data-act="dup" title="Duplizieren (Strg+D)">' + ic("dup") + '</button><button data-act="del" class="del" title="Löschen (Entf)">' + ic("trash") + "</button></div>"; }
function ins(){
  if(!INS) return;
  var it = selItem(), h = "", m = S.m;
  if(S.sel === "bg" && m.bg){
    var b = m.bg;
    h = '<h3>Hintergrund</h3>' +
      row("Breite", '<div class="sfnum"><input type="number" step="0.5" min="1" data-bg="w" value="' + (Math.round(b.w * 10) / 10) + '"><span>Zoll</span></div>') +
      row("Deckkraft", '<input type="range" min="0.1" max="1" step="0.05" data-bg="op" value="' + (b.op == null ? 1 : b.op) + '">') +
      row("Raster angleichen", (S.cal && Math.hypot(S.cal.b[0] - S.cal.a[0], S.cal.b[1] - S.cal.a[1]) > 0.2 ?
        '<div class="sfnum"><input type="number" min="1" step="1" id="sfCalN" value="' + Math.max(1, Math.round(Math.hypot(S.cal.b[0] - S.cal.a[0], S.cal.b[1] - S.cal.a[1]))) + '"><span>Felder</span><button data-act="calok" class="sfok">OK</button></div>' :
        '<button data-act="cal" class="sfbtn' + (S.tool === "cal" ? " on" : "") + '">' + ic("cal") + "Felder abmessen</button>")) +
      '<div class="sfift"><button data-act="bglock" class="' + (b.lock ? "on" : "") + '" title="' + (b.lock ? "Fixiert" : "Fixieren") + '">' + ic(b.lock ? "lock" : "unlock") + '</button><button data-act="bgnew" title="Anderes Bild">' + ic("bild") + '</button><button data-act="del" class="del" title="Entfernen">' + ic("trash") + "</button></div>";
  } else if(it && it.t === "fig" && it.cid && bogen(it)){
    var w = syncFig(it), st = it.st;
    S.el = S.el || {};
    var tc = function(arr, a){ var au = a.au || (a.els && a.els.length ? (S.el[it.id + a.n] || a.els[0]) : ""), col = aFarbe(au || a.n);
      return arr.map(function(k){ return '<button class="sfaimb" style="--ac:' + col + '" data-aim="' + k + '" data-c="' + col + '" data-src="' + E(a.n + (au ? " (" + au + ")" : "")) + '" data-rw="' + E(a.rw || "") + '" data-reich="' + (a.reich == null ? "" : a.reich) + '">' + TPL[k].k + "</button>"; }).join(""); };
    h = '<h3>' + E(w.name) + '<button class="sflink" data-act="bogen" title="Charakterbogen">' + ic("dup") + "</button></h3>" +
      (w.volk ? '<div class="sfsub">' + E(w.volk) + "</div>" : "") +
      '<div class="sfwerte"><div><b>' + w.tempo + "</b><span>Tempo</span></div><div><b>" + w.parade + "</b><span>Parade</span></div><div><b>" + E(w.rob) + '</b><span>Robustheit</span></div></div>' +
      '<div class="sfrow half"><div><label>Bennys</label><div class="sfstep"><button data-step="ben" data-v="-1">–</button><b>' + w.ben + '</b><button data-step="ben" data-v="1">+</button></div></div>' +
      (w.mp ? '<div><label>Machtpunkte</label><div class="sfstep"><button data-step="mpa" data-v="-1">–</button><b>' + w.mpa + "<small>/" + w.mp + '</small></b><button data-step="mpa" data-v="1">+</button></div></div>' : "<div></div>") + "</div>" +
      row("Partei", seg("team", TEAMS.map(function(t){ return [t[0], t[1]]; }), it.team)) +
      row("Farbe", sw("c", COLS, it.c || teamCol(it.team))) +
      '<h4>Zustand' + abzug(st, w ? w.wig : 0) + '</h4>' +
      '<div class="sfrow"><label>Wunden</label>' + pips("w", st.w || 0, w ? w.wmax : 3, "#a51f1a") + "</div>" +
      '<div class="sfrow"><label>Erschöpfung</label>' + pips("e", st.e || 0, 2, "#3c5a78") + "</div>" +
      '<div class="sfchips">' + STATES.map(function(x){ return '<button data-st="' + x[0] + '" class="' + (st[x[0]] ? "on" : "") + '" style="--c:' + x[3] + '"><b>' + x[2] + "</b>" + x[1] + "</button>"; }).join("") +
        '<button data-st="aus" class="aus' + (st.aus ? " on" : "") + '" style="--c:#a51f1a"><b>×</b>Außer Gefecht</button></div>' +
      (w.waffen.length ? "<h4>Waffen</h4>" + w.waffen.map(function(a){ return '<div class="sfact"><div class="n">' + E(a.n) + "<small>" + E([a.sd, a.pb ? "PB " + a.pb : "", a.pen ? "Angriff –" + a.pen : ""].filter(Boolean).join(", ")) + '</small></div><div class="b">' +
        (a.rw ? '<button class="sfrng' + (S.rings && S.rings.fid === it.id && S.rings.rw === a.rw ? " on" : "") + '" data-rng="' + E(a.rw) + '" title="Reichweite">' + E(a.rw) + "</button>" : "") + tc(a.tpl, a) + "</div></div>"; }).join("") : "") +
      (w.maechte.length ? "<h4>Mächte</h4>" + w.maechte.map(function(a){ var au = a.au || (a.els && a.els.length ? (S.el[it.id + a.n] || a.els[0]) : "");
        return '<div class="sfact"><div class="n">' + E(a.n) + "<small>" + (au ? '<b style="color:' + aFarbe(au) + '">' + E(au) + "</b>, " : "") + E([a.rw, a.reich ? a.reich + "“" : ""].filter(Boolean).join(", ")) + "</small>" +
          (!a.au && a.els && a.els.length > 1 ? '<span class="sfels">' + a.els.map(function(e){ return '<button data-elw="' + E(a.n) + '" data-v="' + e + '" class="' + (au === e ? "on" : "") + '" style="--ac:' + aFarbe(e) + '">' + e + "</button>"; }).join("") + "</span>" : "") + '</div><div class="b">' +
        (a.mp && /^\d+$/.test(a.mp) ? '<button class="sfmp" data-mp="' + a.mp + '" title="Machtpunkte ausgeben">' + a.mp + " MP</button>" : "") + tc(a.tpl, a) + "</div></div>"; }).join("") : "") +
      ((w.kraefte || []).length ? "<h4>Superkräfte</h4>" + w.kraefte.map(function(a){ return '<div class="sfact"><div class="n">' + E(a.n) + "<small>" + E([a.st, a.k + (a.k === 1 ? " Punkt" : " Punkte")].filter(Boolean).join(", ")) + '</small></div><div class="b">' +
        (a.rw ? '<button class="sfrng' + (S.rings && S.rings.fid === it.id && S.rings.rw === a.rw ? " on" : "") + '" data-rng="' + E(a.rw) + '" title="Reichweite">' + E(a.rw) + "</button>" : "") + tc(a.tpl, a) + "</div></div>"; }).join("") : "") +
      foot('<button data-act="img" title="Bild">' + ic("bild") + "</button>" + (it.img ? '<button data-act="noimg" title="Bild entfernen" class="sfx">' + ic("close") + "</button>" : ""));
  } else if(it && it.t === "fig"){
    var st = it.st || {}, w = null;
    h = '<h3>Figur</h3>' +
      '<div class="sfrow"><input data-f="n" list="sfKr" value="' + E(it.n) + '" placeholder="Name" class="sfbig"><datalist id="sfKr">' + kreaturen().map(function(k){ return '<option value="' + E(k.n) + '">'; }).join("") + "</datalist></div>" +
      '<div class="sfrow two"><div><label>Kürzel</label><input data-f="k" maxlength="3" value="' + E(it.k || "") + '" placeholder="' + E(kuerzel(it.n)) + '"></div><div><label>Wildcard</label><button data-set="wc" data-v="' + (it.wc ? 0 : 1) + '" class="sfwc' + (it.wc ? " on" : "") + '"><img src="img/wc.webp" alt=""></button></div></div>' +
      row("Partei", seg("team", TEAMS.map(function(t){ return [t[0], t[1]]; }), it.team)) +
      row("Farbe", sw("c", COLS, it.c || teamCol(it.team))) +
      row("Größe", seg("d", SIZES.map(function(s){ return [s[0], s[1]]; }), it.d).replace('class="sfseg"', 'class="sfseg sz"')) +
      '<div class="sfrow three"><div><label>Bewegung</label><input type="number" min="0" data-f="bw" value="' + (it.bw || "") + '"></div><div><label>Parade</label><input data-f="pa" value="' + E(it.pa || "") + '"></div><div><label>Robustheit</label><input data-f="ro" value="' + E(it.ro || "") + '"></div></div>' +
      '<h4>Zustand' + abzug(st, w ? w.wig : 0) + '</h4>' +
      '<div class="sfrow"><label>Wunden</label>' + pips("w", st.w || 0, w ? w.wmax : 3, "#a51f1a") + "</div>" +
      '<div class="sfrow"><label>Erschöpfung</label>' + pips("e", st.e || 0, 2, "#3c5a78") + "</div>" +
      '<div class="sfchips">' + STATES.map(function(x){ return '<button data-st="' + x[0] + '" class="' + (st[x[0]] ? "on" : "") + '" style="--c:' + x[3] + '"><b>' + x[2] + "</b>" + x[1] + "</button>"; }).join("") +
        '<button data-st="aus" class="aus' + (st.aus ? " on" : "") + '" style="--c:#a51f1a"><b>×</b>Außer Gefecht</button></div>' +
      foot('<button data-act="img" title="Bild">' + ic("bild") + "</button>" + (it.img ? '<button data-act="noimg" title="Bild entfernen" class="sfx">' + ic("close") + "</button>" : ""));
  } else if(it && it.t === "obj"){
    h = '<h3>' + OBJ[it.s][0] + "</h3>" +
      '<div class="sfobj">' + Object.keys(OBJ).map(function(k){ return '<button data-set="s" data-v="' + k + '" class="' + (it.s === k ? "on" : "") + '" title="' + OBJ[k][0] + '"><svg viewBox="-.6 -.6 1.2 1.2">' + objSym(k) + "</svg></button>"; }).join("") + "</div>" +
      '<div class="sfrow three"><div><label>Breite</label><input type="number" step="0.5" min="0.25" data-f="w" value="' + it.w + '"></div><div><label>Länge</label><input type="number" step="0.5" min="0.25" data-f="h" value="' + it.h + '"></div><div><label>Drehung</label><input type="number" step="15" data-f="r" value="' + Math.round(it.r || 0) + '"></div></div>' +
      foot('<button data-act="back" title="Nach hinten">' + ic("down") + "</button>");
  } else if(it && it.t === "area"){
    h = '<h3>Gelände</h3>' + '<div class="sfchips area">' + Object.keys(AREAS).map(function(k){ return '<button data-set="k" data-v="' + k + '" class="' + (it.k === k ? "on" : "") + '"><svg viewBox="0 0 1.6 1.2"><rect x=".05" y=".05" width="1.5" height="1.1" rx=".08" ' + areaFill(k) + ' stroke="' + areaStroke(k) + '" stroke-width=".05"/></svg>' + AREAS[k] + "</button>"; }).join("") + "</div>" +
      '<div class="sfrow three"><div><label>Breite</label><input type="number" step="0.5" min="0.5" data-f="w" value="' + it.w + '"></div><div><label>Länge</label><input type="number" step="0.5" min="0.5" data-f="h" value="' + it.h + '"></div><div><label>Drehung</label><input type="number" step="15" data-f="r" value="' + Math.round(it.r || 0) + '"></div></div>' + foot();
  } else if(it && it.t === "wall"){
    var len = 0; for(var i = 1; i < it.pts.length; i++) len += Math.hypot(it.pts[i][0] - it.pts[i - 1][0], it.pts[i][1] - it.pts[i - 1][1]);
    h = "<h3>" + WALLS[it.k] + '<small>' + f1(len) + "“ · " + f1(len * 2) + " m</small></h3>" + row("Art", seg("k", Object.keys(WALLS).map(function(k){ return [k, WALLS[k]]; }), it.k)) +
      (it.k === "tuer" ? row("Zustand", seg("offen", [[0, "Geschlossen"], [1, "Offen"]], it.offen ? 1 : 0)) : "") + foot();
  } else if(it && it.t === "tpl"){
    var hits = S.m.items.filter(function(f){ return f.t === "fig" && tplHits(it, f); });
    h = "<h3>" + TPL[it.k].n + "</h3>" + (it.src ? '<div class="sfsub">' + E(it.src) + "</div>" : "") + '<div class="sftpl">' + Object.keys(TPL).map(function(k){ return '<button data-set="k" data-v="' + k + '" class="' + (it.k === k ? "on" : "") + '">' + TPL[k].k + "</button>"; }).join("") + "</div>" +
      row("Farbe", sw("c", TCOLS, it.c || "#a51f1a")) +
      (TPL[it.k].r ? "" : row("Richtung", '<div class="sfnum"><input type="number" step="5" data-f="r" value="' + Math.round(it.r || 0) + '"><span>°</span></div>')) +
      '<h4>Getroffen<span class="sfcnt">' + hits.length + "</span></h4>" +
      (hits.length ? '<div class="sfhits">' + hits.map(function(f){ return '<button data-pick="' + f.id + '"><i style="background:' + (f.c || teamCol(f.team)) + '"></i>' + E(f.n || "Figur") + (f.wc ? '<img src="img/wc.webp" alt="">' : "") + "</button>"; }).join("") + "</div>" : "") + foot();
  } else if(it && it.t === "txt"){
    h = '<h3>Text</h3><div class="sfrow"><input data-f="s" value="' + E(it.s) + '" class="sfbig"></div>' + row("Größe", seg("fs", [[0.4, "Klein"], [0.6, "Mittel"], [1, "Groß"], [1.6, "Riesig"]], it.fs || 0.6)) + row("Farbe", sw("c", ["#241f1c", "#a51f1a", "#2f6f9f", "#4f7d3a", "#fbf6ea"], it.c || "#241f1c")) + foot();
  }
  INS.innerHTML = h ? '<button class="sfi-x" data-a="desel" title="Schließen">' + ic("close") + "</button>" + h : h; O.classList.toggle("ins", !!h);
  rail();
}
function abzug(st, wig){ var p = Math.max(0, Math.min(3, st.w || 0) - (wig || 0)) + (st.e || 0); return p ? '<span class="sfpen" title="Abzug auf Eigenschaftsproben">–' + p + "</span>" : ""; }
function pips(k, v, n, c){ var s = '<div class="sfpips" style="--c:' + c + '">'; for(var i = 1; i <= n; i++) s += '<button data-pip="' + k + '" data-v="' + i + '" class="' + (i <= v ? "on" : "") + '">' + i + "</button>"; return s + "</div>"; }
var insT = 0, insU = 0;
function insInput(e){
  var t = e.target, it = selItem();
  if(t.dataset.bg){ var b = S.m.bg; if(!insU){ pushUndo(); insU = 1; } if(t.dataset.bg === "w"){ var w = parseFloat(t.value); if(w > 0){ b.h = b.h * w / b.w; b.w = w; } } else b.op = parseFloat(t.value); save(); draw(); clearTimeout(insT); insT = setTimeout(function(){ insU = 0; }, 800); return; }
  if(!it || !t.dataset.f) return;
  if(!insU){ pushUndo(); insU = 1; } clearTimeout(insT); insT = setTimeout(function(){ insU = 0; }, 800);
  var f = t.dataset.f, v = t.value;
  if(f === "w" || f === "h" || f === "r" || f === "bw"){ v = parseFloat(v); if(isNaN(v)) return; if(f !== "r" && f !== "bw") v = Math.max(0.25, v); }
  it[f] = v;
  if(f === "n" && it.t === "fig" && e.type === "change"){ var k = kreatur(v); if(k){ applyKreatur(it, k); ins(); } }
  save(); draw();
}
function insClick(e){
  var b = e.target.closest("button"); if(!b) return; var it = selItem(), d = b.dataset;
  if(d.pick){ S.sel = d.pick; ins(); draw(); return; }
  if(d.act){
    var a = d.act;
    if(a === "bogen"){ var cid = it && it.cid; close(); if(cid) SWBogen.oeffne(cid); return; }
    if(a === "del") del(); else if(a === "dup") dup(); else if(a === "back") order(-1);
    else if(a === "img") imgPick(it);
    else if(a === "noimg"){ pushUndo(); delete it.img; save(); draw(); ins(); }
    else if(a === "bglock"){ pushUndo(); S.m.bg.lock = !S.m.bg.lock; if(S.m.bg.lock && S.tool === "cal") setTool("sel"); save(); draw(); ins(); }
    else if(a === "bgnew") FILE.click();
    else if(a === "cal"){ S.cal = null; setTool("cal"); SVG.dataset.tool = "meas"; ins(); }
    else if(a === "calok"){
      var n = parseFloat(O.querySelector("#sfCalN").value), c = S.cal, len = Math.hypot(c.b[0] - c.a[0], c.b[1] - c.a[1]);
      if(n > 0 && len > 0.2){ pushUndo(); var f = n / len, bg = S.m.bg; bg.x = c.a[0] - (c.a[0] - bg.x) * f; bg.y = c.a[1] - (c.a[1] - bg.y) * f; bg.w *= f; bg.h *= f; }
      S.cal = null; setTool("sel"); S.sel = "bg"; ins(); save(); draw();
    }
    return;
  }
  if(!it) return;
  if(d.set){
    pushUndo(); var v = d.v, f2 = d.set;
    if(f2 === "d" || f2 === "fs" || f2 === "wc" || f2 === "offen") v = parseFloat(v);
    it[f2] = v;
    if(f2 === "team") delete it.c;
    if(f2 === "d"){ var p = snapFig(it.x, it.y, it.d); it.x = p[0]; it.y = p[1]; }
    if(f2 === "s" && it.t === "obj"){ it.w = OBJ[v][1]; it.h = OBJ[v][2]; }
    if(f2 === "k" && it.t === "wall"){ /* Art wechseln */ }
    save(); draw(); ins(); return;
  }
  if(d.pip){ pushUndo(); it.st = it.st || {}; var n2 = +d.v; it.st[d.pip] = it.st[d.pip] === n2 ? n2 - 1 : n2; setBogen(it, d.pip, it.st[d.pip]); save(); draw(); ins(); return; }
  if(d.st){ pushUndo(); it.st = it.st || {}; it.st[d.st] = it.st[d.st] ? 0 : 1; setBogen(it, d.st, it.st[d.st]); save(); draw(); ins(); return; }
  if(d.elw){ S.el = S.el || {}; S.el[it.id + d.elw] = d.v; ins(); return; }
  if(d.aim){ S.aim = {fid:it.id, k:d.aim, c:d.c || "#a51f1a", src:d.src, rw:d.rw || "", reich:d.reich === "" ? null : +d.reich, p:null}; S.rings = null; draw(); return; }
  if(d.rng){ S.rings = S.rings && S.rings.fid === it.id && S.rings.rw === d.rng ? null : {fid:it.id, rw:d.rng}; draw(); ins(); return; }
  if(d.step && it.cid){ var w0 = bogen(it), o = {}; if(d.step === "ben") o.ben = Math.max(0, w0.ben + +d.v); else o.mpa = Math.max(0, Math.min(w0.mp, w0.mpa + +d.v)); SWBogen.setze(it.cid, o); ins(); return; }
  if(d.mp && it.cid){ var w1 = bogen(it); SWBogen.setze(it.cid, {mpa:Math.max(0, w1.mpa - +d.mp)}); ins(); return; }
}

/* ---------- Bilder ---------- */
function readImg(file, max, cb){
  var fr = new FileReader();
  fr.onload = function(){ var im = new Image(); im.onload = function(){ var s = Math.min(1, max / Math.max(im.width, im.height)), c = document.createElement("canvas"); c.width = Math.round(im.width * s); c.height = Math.round(im.height * s); c.getContext("2d").drawImage(im, 0, 0, c.width, c.height); cb(c.toDataURL("image/jpeg", 0.85), im.width, im.height); }; im.src = fr.result; };
  fr.readAsDataURL(file);
}
function bgFile(){
  var f = FILE.files[0]; FILE.value = ""; if(!f) return;
  readImg(f, 4096, function(src, w, h){
    pushUndo(); var r = SVG.getBoundingClientRect(), v = S.m.view, iw = Math.max(10, Math.round(w / 70)), ih = iw * h / w;
    var cx = (r.width / 2 - v.x) / v.z, cy = (r.height / 2 - v.y) / v.z;
    S.m.bg = {src:src, x:Math.round(cx - iw / 2), y:Math.round(cy - ih / 2), w:iw, h:ih, op:1, lock:false};
    S.sel = "bg"; save(); fit(); ins();
  });
}
function imgPick(it){
  var i = document.createElement("input"); i.type = "file"; i.accept = "image/*";
  i.onchange = function(){ if(i.files[0]) readImg(i.files[0], 200, function(src){ pushUndo(); it.img = src; save(); draw(); ins(); }); };
  i.click();
}

/* ---------- Export ---------- */
function dl(name, blob){ var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click(); setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); }, 500); }
function fname(ext){ return (S.m.name || "Spielfeld").replace(/[\\/:*?"<>|]+/g, "").trim() + "." + ext; }
function exportJSON(){ var c = JSON.parse(JSON.stringify(S.m)); c.app = "savageworlds-spielfeld"; dl(fname("json"), new Blob([JSON.stringify(c)], {type:"application/json"})); }
function importJSON(){
  var f = FILEJ.files[0]; FILEJ.value = ""; if(!f) return;
  var fr = new FileReader(); fr.onload = function(){ try { var m = JSON.parse(fr.result); if(!m || !Array.isArray(m.items)) return; m.id = uid(); m.t = Date.now(); delete m.app; S.maps.unshift(m); dbPut(m); load(m); fit(); } catch(e){} }; fr.readAsText(f);
}
function toData(url){ return fetch(url).then(function(r){ return r.blob(); }).then(function(b){ return new Promise(function(res){ var fr = new FileReader(); fr.onload = function(){ res(fr.result); }; fr.readAsDataURL(b); }); }).catch(function(){ return url; }); }
function exportPNG(){
  var b = [Infinity, Infinity, -Infinity, -Infinity]; bounds(function(x, y){ b[0] = Math.min(b[0], x); b[1] = Math.min(b[1], y); b[2] = Math.max(b[2], x); b[3] = Math.max(b[3], y); });
  if(b[0] === Infinity) b = [-8, -5, 8, 5];
  b[0] = Math.floor(b[0]) - 1; b[1] = Math.floor(b[1]) - 1; b[2] = Math.ceil(b[2]) + 1; b[3] = Math.ceil(b[3]) + 1;
  var Z = 60, w = (b[2] - b[0]) * Z, h = (b[3] - b[1]) * Z, sv = S.m.view, keep = {x:sv.x, y:sv.y, z:sv.z}, oldSel = S.sel, oldMeas = S.meas;
  if(w * h > 36e6){ Z = Math.sqrt(36e6 / ((b[2] - b[0]) * (b[3] - b[1]))); w = (b[2] - b[0]) * Z; h = (b[3] - b[1]) * Z; }
  S.sel = null; S.meas = null; sv.x = -b[0] * Z; sv.y = -b[1] * Z; sv.z = Z;
  var r = SVG.getBoundingClientRect(); SVG.style.width = w + "px"; SVG.style.height = h + "px";
  drawNow();
  var clone = SVG.cloneNode(true); SVG.style.width = ""; SVG.style.height = ""; Object.assign(sv, keep); S.sel = oldSel; S.meas = oldMeas; drawNow();
  clone.setAttribute("width", w); clone.setAttribute("height", h); clone.setAttribute("viewBox", "0 0 " + w + " " + h); clone.removeAttribute("id");
  clone.querySelectorAll(".sfbdg,#sfLov > *").forEach(function(n){ if(n.closest("#sfLov")) n.remove(); });
  var bgR = document.createElementNS(NS, "rect"); bgR.setAttribute("width", w); bgR.setAttribute("height", h); bgR.setAttribute("fill", "#efe5cf"); clone.insertBefore(bgR, clone.firstChild.nextSibling);
  Promise.all([toData("img/wc.webp"), toData("fonts/spies.ttf"), toData("fonts/PalatinoLinotype-Roman.ttf"), toData("fonts/oswald-latin-600-normal.woff2")]).then(function(d){
    clone.querySelectorAll("image").forEach(function(im){ if(im.getAttribute("href") === "img/wc.webp") im.setAttribute("href", d[0]); });
    var st = document.createElementNS(NS, "style");
    st.textContent = '@font-face{font-family:Spies;src:url(' + d[1] + ')}@font-face{font-family:Pal;src:url(' + d[2] + ')}' + SVGCSS;
    clone.insertBefore(st, clone.firstChild);
    var data = new XMLSerializer().serializeToString(clone), img = new Image();
    img.onload = function(){ var c = document.createElement("canvas"); c.width = w; c.height = h; c.getContext("2d").drawImage(img, 0, 0); c.toBlob(function(bl){ dl(fname("png"), bl); }, "image/png"); };
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(data);
  });
}
var SVGCSS = ".sfk{font-family:Spies,serif;text-anchor:middle;dominant-baseline:central}.sfp{font-family:Oswald,sans-serif;font-weight:600;fill:#fff;text-anchor:middle;dominant-baseline:central}.sfw{font:600 10px Oswald,sans-serif!important;letter-spacing:.03em;fill:#6b5f52!important}.sfn{font:12.5px Pal,serif;fill:#241f1c;text-anchor:middle;dominant-baseline:hanging;paint-order:stroke;stroke:#fbf6ea;stroke-width:4px;stroke-linejoin:round}.sftx{font-family:Spies,serif}.sfal{font:.3px Pal,serif;font-weight:700;opacity:.75}.sfbt{font:600 .6px Oswald,sans-serif;text-anchor:middle;dominant-baseline:central}";

/* ---------- Kopfzeilen-Knopf ---------- */
function headerBtn(){
  var top = document.getElementById("top"); if(!top || top.querySelector(".sf-hb")) return;
  var b = document.createElement("button"); b.className = "ib sf-hb"; b.title = "Spielfeld (M)"; b.setAttribute("aria-label", "Spielfeld"); b.innerHTML = ic("map"); b.onclick = open;
  var g = top.querySelector('.ib[aria-label="Galerie"]'); top.insertBefore(b, g || top.querySelector(".ib"));
}
headerBtn();
window.Spielfeld = {open:open, close:close};
})();
