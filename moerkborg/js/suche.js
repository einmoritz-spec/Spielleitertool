/* MÖRK BORG – Volltextsuche (Taste „/“ oder Menü). Index entsteht beim ersten Öffnen aus allen Datenfiles. */
"use strict";
var SIDX = null;
var S_SKIP = {id:1, p:1, c:1, img:1, bild:1, buch:1, pos:1, gruppe:1, z:1, farbe:1, n:1, k:1, marken:1, cols:1, breit:1, sel:1, g:1};
function sFlat(o, out){
 if(o == null) return out;
 if(typeof o === "string"){ out.push(o); return out; }
 if(typeof o !== "object") return out;
 if(Array.isArray(o)){ o.forEach(function(v){ sFlat(v, out); }); return out; }
 var hasX = ("x" in o);
 Object.keys(o).forEach(function(k){
  if(S_SKIP[k]) return;
  if(k === "t" && hasX && typeof o.t === "string" && o.t.length < 8) return;
  sFlat(o[k], out);
 });
 return out;
}
function sAdd(t, ctx, route, p, data, buch){
 var txt = sFlat(data, []).join(" ").replace(/\*\*|\*|\s+/g, " ");
 SIDX.push({t:t, ctx:ctx, r:route, p:p, b:buch, x:txt, l:(t + " " + txt).toLowerCase()});
}
function sTry(f){ try{ f(); }catch(e){} }
function sBuild(){
 SIDX = [];
 sTry(function(){ MB_WELT_ORTE.forEach(function(o){ if(o.aktion) return; var s = MB_WELT.filter(function(q){ return q.id === (o.seite || "anfang"); })[0]; if(s) sAdd(o.t, "Die sterbende Welt", "nach/welt/" + o.id, 0, s); }); });
 sTry(function(){
  MB_REGELN.forEach(function(r){
   var teil = VD_NAV.indexOf(r.id) >= 0 ? "verdammte" : "regeln", ctx = NACH_TEILE[teil];
   (r.s || []).forEach(function(s){ sAdd((s.h && s.h !== kurz(r.t) && (r.s.length > 1) ? kurz(r.t) + " · " + s.h : (s.h || r.t)), ctx, "nach/" + teil + "/" + r.id, s.p || r.p, s, r.b); });
  });
 });
 sTry(function(){ MB_KREATUR.forEach(function(k){ sAdd(k.t, "Kreaturen", "kreaturen/" + k.id, k.p, k, k.buch); }); });
 sTry(function(){ MB_RAUM.forEach(function(r){ sAdd(r.t, "Rotblack Sludge › Raum " + r.id, "abenteuer/" + r.id, r.p, r); }); sAdd("Rotblack Sludge", "Abenteuer", "abenteuer/karte", 73, [MB_ABT.vor, MB_ABT.seher]); sAdd("Zufallsbegegnungen", "Rotblack Sludge", "abenteuer/zufall", 75, MB_ABT.zufall); });
 sTry(function(){
  var V = MB_VORSATZ; ["wetter","fallen","leichen","schaetze","namen"].forEach(function(k){ if(V[k]) sAdd(V[k].t, "Tabellen › Unterwegs", "tabellen/unterwegs", 0, V[k]); });
  MB_TAB.forEach(function(t){ sAdd(t.t, "Tabellen", "tabellen/" + t.gruppe, t.p, t); });
  sAdd(MB_PSALMEN.t, "Tabellen › Psalmen", "tabellen/psalme", MB_PSALMEN.p, MB_PSALMEN, "mb_apo");
 });
 sTry(function(){
  MB_ORTE.verliese.forEach(function(o){ sAdd(o.t, "Tabellen › Verliese", "tabellen/verliese/" + o.id, o.p, o.s, "mb_apo"); });
  MB_ORTE.etab.forEach(function(o){ sAdd(o.t, "Tabellen › Etablissements", "tabellen/etab/" + o.id, o.p, o.s, "mb_apo"); });
  MB_ORTE.tafeln.zettel.forEach(function(z){ sAdd(z.h || z.v || "Auftragstafel", "Tabellen › Auftragstafeln", "tabellen/tafeln", z.p, z, "mb_apo"); });
  MB_ORTE.besch.e.forEach(function(e){ sAdd(e.t, "Tabellen › Beschwörungen (" + e.n + ")", "tabellen/besch", e.p, e, "mb_apo"); });
 });
 sTry(function(){ MB_HEIMSUCHUNG.forEach(function(h){ sAdd("Heimsuchung " + h.id, "Spieltisch › Kalender", "spiel", 17, h); }); });
}
function sEsc(s){ return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
function sOpen(){
 var old = document.getElementById("sm"); if(old){ old.remove(); return; }
 if(!SIDX) sBuild();
 var m = modal('<input id="sq" class="sqin" placeholder="Suchen …" autocomplete="off"><div id="sr" class="sr"></div>');
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
 box.innerHTML = res.length ? res.map(function(o){
  var e = o.e, i = e.x.toLowerCase().indexOf(ws[0]), sn = "";
  if(i >= 0){ var a = Math.max(0, i - 50); sn = (a ? "… " : "") + e.x.slice(a, i + 110) + " …"; } else sn = e.x.slice(0, 120);
  sn = sEsc(sn); ws.forEach(function(w){ sn = sn.replace(new RegExp("(" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "<mark>$1</mark>"); });
  return '<a href="#' + e.r + '" onclick="document.getElementById(\'sm\').remove()"><b>' + sEsc(e.t) + '</b><span class="sc">' + sEsc(e.ctx) + (e.p ? " · S. " + e.p : "") + '</span><span class="sn">' + sn + '</span></a>';
 }).join("") + (tot > 40 ? '<p class="sc sx">' + tot + ' Treffer, die ersten 40</p>' : "") : '<p class="sc sx">Keine Treffer</p>';
}
document.addEventListener("keydown", function(e){
 if(e.key !== "/" || /INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "") || e.ctrlKey || e.metaKey || e.altKey) return;
 e.preventDefault(); sOpen();
});
