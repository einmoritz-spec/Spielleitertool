/* Pico – Volltextsuche (Taste "/" oder Menü). Index wird beim ersten Öffnen aus den Datenfiles gebaut. */
var SIDX = null;
var S_SKIP = {farbe:1, c:1, bild:1, img:1, id:1, p:1, d:1};
function sFlat(o, out){
  if(o == null) return out;
  if(typeof o === "string"){ if(o.charAt(0) !== "#") out.push(o); return out; }
  if(typeof o === "number") return out;
  if(Array.isArray(o)){ o.forEach(function(v){ sFlat(v, out); }); return out; }
  var hasX = ("x" in o);
  Object.keys(o).forEach(function(k){
    if(S_SKIP[k]) return;
    if(k === "t" && hasX && typeof o.t === "string" && o.t.length < 8) return;
    sFlat(o[k], out);
  });
  return out;
}
function sAdd(t, ctx, route, p, data){
  var txt = sFlat(data, []).join(" ").replace(/\*\*|__|\s+/g, " ");
  SIDX.push({t:t, ctx:ctx, r:route, p:p, x:txt, l:(t + " " + txt).toLowerCase()});
}
function sBuild(){
  SIDX = [];
  var nm = {welt:"Welt", regeln:"Regeln", kaefer:"Käfer", titanen:"Picotitanen", weber:"Der Weber", anhang:"Anhang"};
  Object.keys(window.PI_NACH || {}).forEach(function(b){
    PI_NACH[b].kapitel.forEach(function(k){ sAdd(k.t, nm[b] || PI_NACH[b].t, "nach/" + b + "/" + k.id, k.p, k.b); });
  });
  PI_REICHE.forEach(function(i){
    var r = PI_REICH[i.id]; if(!r) return;
    var base = "reich/" + i.id + "/";
    var rest = {}; Object.keys(r).forEach(function(k){ if(k !== "fraktionen" && k !== "reise") rest[k] = r[k]; });
    sAdd(i.t, "Reich", base + "ueberblick", i.p, rest);
    if(r.fraktionen) (r.fraktionen.liste || []).forEach(function(f){ sAdd(f.t, i.t + " › Fraktionen", base + "fraktionen/" + f.id, f.p, f); });
    if(r.reise) (r.reise.gebiete || []).forEach(function(g){ sAdd(g.t, i.t + " › Reise", base + "reise", g.p, g); });
  });
  (window.PI_GEFAHR || []).forEach(function(g){
    var d = (window.PI_GTEXT || {})[g.id]; sAdd(g.t, "Winzige Gefahren", "gefahren/" + g.id, g.p, d || {});
  });
}
function sEsc(s){ return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
function sOpen(){
  var old = document.getElementById("sm"); if(old){ old.remove(); return; }
  if(!SIDX) sBuild();
  var m = modal('<input id="sq" class="sqin" placeholder="Suchen …" autocomplete="off"><div id="sr" class="sr"></div>', true);
  m.id = "sm"; m.classList.add("smodal");
  var q = document.getElementById("sq"); q.focus();
  q.oninput = function(){ sRun(q.value); };
  q.onkeydown = function(e){ if(e.key === "Enter"){ var a = document.querySelector("#sr a"); if(a) a.click(); } if(e.key === "Escape") m.remove(); };
}
function sRun(v){
  var box = document.getElementById("sr"); v = v.trim().toLowerCase();
  if(v.length < 2){ box.innerHTML = ""; return; }
  var ws = v.split(/\s+/), res = [];
  SIDX.forEach(function(e){
    var ok = ws.every(function(w){ return e.l.indexOf(w) >= 0; }); if(!ok) return;
    var tl = e.t.toLowerCase(), sc = 0;
    ws.forEach(function(w){ if(tl.indexOf(w) === 0) sc += 6; else if(tl.indexOf(w) >= 0) sc += 4; sc += Math.min(3, e.l.split(w).length - 1) * .3; });
    res.push({e:e, s:sc});
  });
  res.sort(function(a, b){ return b.s - a.s; });
  var tot = res.length; res = res.slice(0, 40);
  box.innerHTML = res.length ? res.map(function(o){
    var e = o.e, i = e.x.toLowerCase().indexOf(ws[0]), sn = "";
    if(i >= 0){ var a = Math.max(0, i - 50); sn = (a ? "… " : "") + e.x.slice(a, i + 110) + " …"; }
    else sn = e.x.slice(0, 120);
    ws.forEach(function(w){ sn = sEsc(sn).replace(new RegExp("(" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "<mark>$1</mark>"); });
    return '<a href="#' + e.r + '" onclick="document.getElementById(\'sm\').remove()"><b>' + sEsc(e.t) + '</b><span class="sc">' + sEsc(e.ctx) + (e.p ? " · S. " + e.p : "") + '</span><span class="sn">' + sn + '</span></a>';
  }).join("") + (tot > 40 ? '<p class="sc" style="padding:8px">' + tot + ' Treffer, die ersten 40</p>' : "") : '<p class="sc" style="padding:12px">Keine Treffer</p>';
}
