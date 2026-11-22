/* THE SPIRE – Suche (Taste „/“ oder Menü). Der Index wird beim ersten Öffnen gebaut.
   Spätere Module hängen ihre Inhalte an: SP_SUCHE.push(function(add){ add(titel, bereich, route, seite, daten, buch); }) */
window.SP_SUCHE = window.SP_SUCHE || [];
var SIDX = null;
var S_SKIP = {img:1, bild:1, src:1, id:1, p:1, buch:1, go:1, pos:1, s:1};
function sFlat(o, out){
  if(o == null) return out;
  if(typeof o === "string"){ out.push(o); return out; }
  if(typeof o !== "object") return out;
  if(Array.isArray(o)){ o.forEach(function(v){ sFlat(v, out); }); return out; }
  Object.keys(o).forEach(function(k){ if(!S_SKIP[k]) sFlat(o[k], out); });
  return out;
}
function sBuild(){
  SIDX = [];
  var add = function(t, ctx, route, p, data, buch){ var x = sFlat(data, []).join(" ").replace(/\*+/g, "").replace(/\s+/g, " "); SIDX.push({t:t, ctx:ctx, r:route, p:p, buch:buch, x:x, l:(t + " " + x).toLowerCase()}); };
  Object.keys(SP_NACH_BEREICHE).forEach(function(k){ var B = SP_NACH_BEREICHE[k]; add(B.t, "Nachschlagen", "nach/" + k, B.p, window.SP_NACH[k] || null, B.buch); });
  SP_SPIEL.forEach(function(z){ add(z.t, "Losschlagen", z.id, z.p, z.s, z.buch); });
  Object.keys(SP_ABENTEUER).forEach(function(k){ var A = SP_ABENTEUER[k]; add(A.t, "Abenteuer", "abenteuer/" + k, A.p, A.k, A.buch); });
  SP_GALERIE.forEach(function(g){ g.x.forEach(function(x){ add(x.t, "Galerie · " + g.g, "galerie", null, null); }); });
  SP_SUCHE.forEach(function(f){ try{ f(add); }catch(e){} });
}
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
    if(!ws.every(function(w){ return e.l.indexOf(w) >= 0; })) return;
    var tl = e.t.toLowerCase(), sc = 0;
    ws.forEach(function(w){ if(tl.indexOf(w) === 0) sc += 6; else if(tl.indexOf(w) >= 0) sc += 4; sc += Math.min(3, e.l.split(w).length - 1) * .3; });
    res.push({e:e, s:sc});
  });
  res.sort(function(a, b){ return b.s - a.s; });
  var tot = res.length; res = res.slice(0, 40);
  var hl = function(s){ s = esc(s); ws.forEach(function(w){ s = s.replace(new RegExp("(" + esc(w).replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "<mark>$1</mark>"); }); return s; };
  box.innerHTML = res.length ? res.map(function(o){
    var e = o.e, i = e.x.toLowerCase().indexOf(ws[0]), sn = "";
    if(i >= 0){ var a = Math.max(0, i - 50); sn = (a ? "… " : "") + e.x.slice(a, i + 110) + " …"; } else sn = e.x.slice(0, 120);
    return '<a href="#' + e.r + '" onclick="document.getElementById(\'sm\').remove()"><b>' + hl(e.t) + '</b><span class="sc">' + esc(e.ctx) + (e.p != null ? " · " + esc(pgTxt(e.p, e.buch)) : "") + '</span>' + (sn ? '<span class="sn">' + hl(sn) + '</span>' : '') + '</a>';
  }).join("") + (tot > 40 ? '<p class="sc" style="padding:8px 18px">' + tot + ' Treffer, die ersten 40</p>' : "") : '<p class="sc" style="padding:12px 18px">Keine Treffer</p>';
}
