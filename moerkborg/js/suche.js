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
/* Umlaute/Akzente/ß ignorieren: „maechte“, „machte“ und „Mächte“ finden dasselbe; Abfrage zusätzlich mit ae/oe/ue → a/o/u */
function sFold(s, map){
 s = String(s).toLowerCase();
 if(!map) return s.replace(/ß/g, "ss").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
 var out = "";
 for(var i = 0; i < s.length; i++){ var f = s.charAt(i) === "ß" ? "ss" : s.charAt(i).normalize("NFD").replace(/[\u0300-\u036f]/g, ""); out += f; for(var j = 0; j < f.length; j++) map.push(i); }
 return out;
}
/* Suchwort in Text finden: ab 4 Buchstaben irgendwo im Wort (Komposita), kurze Wörter („in“, „der“) nur am Wortanfang */
function sIdx(l, w, from){
 var i = l.indexOf(w, from || 0);
 if(w.length > 3) return i;
 while(i > 0 && /[a-z0-9]/.test(l.charAt(i - 1))) i = l.indexOf(w, i + 1);
 return i;
}
function sAlt(w){ return w.replace(/ae|oe|ue/g, function(m){ return m.charAt(0); }); }
function sAdd(t, ctx, route, p, data, buch){
 var txt = sFlat(data, []).join(" ").replace(/\*\*|\*|__/g, " ").replace(/\s+/g, " ").trim();
 SIDX.push({t:t, ctx:ctx, r:route, p:p, b:buch, x:txt, l:sFold(t + " " + txt), i:SIDX.length});
}
function sFn(i){ var m = document.getElementById("sm"); if(m) m.remove(); var e = SIDX[i]; if(e && typeof e.r === "function") e.r(); }
function sTry(f){ try{ f(); }catch(e){} }
function sBuild(){
 SIDX = [];
 sTry(function(){ MB_WELT_ORTE.forEach(function(o){ if(o.aktion) return; var s = MB_WELT.filter(function(q){ return q.id === (o.seite || "anfang"); })[0]; if(s) sAdd(o.t, "Die sterbende Welt", "nach/welt/" + o.id, 0, [o.g, s]); }); });
 sTry(function(){
  MB_REGELN.forEach(function(r){
   var teil = VD_NAV.indexOf(r.id) >= 0 ? "verdammte" : "regeln", ctx = NACH_TEILE[teil];
   (r.s || []).forEach(function(s){ sAdd((s.h && s.h !== kurz(r.t) && (r.s.length > 1) ? kurz(r.t) + " · " + s.h : (s.h || r.t)), ctx, "nach/" + teil + "/" + r.id, s.p || r.p, s, r.b); });
  });
 });
 sTry(function(){ MB_KREATUR.forEach(function(k){ sAdd(k.t, "Kreaturen", "kreaturen/" + k.id, k.p, k, k.buch); }); });
 sTry(function(){ MB_RAUM.forEach(function(r){ sAdd(r.t, "Rotblack Sludge › Raum " + r.id, "abenteuer/" + r.id, r.p, r); }); sAdd("Rotblack Sludge", "Abenteuer", "abenteuer/karte", 73, [MB_ABT.t, MB_ABT.oder, MB_ABT.sub, MB_ABT.vor, MB_ABT.seher]); sAdd("Zufallsbegegnungen", "Rotblack Sludge", "abenteuer/zufall", 75, MB_ABT.zufall); });
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
 sTry(function(){ sAdd(MB_KALENDER.titel, "Spieltisch › Kalender", function(){ go("spiel"); setTimeout(function(){ SP.verse(); }, 60); }, MB_KALENDER.p, [MB_KALENDER.einleitung, MB_KALENDER.frage, MB_KALENDER.wuerfel, MB_KALENDER.quelle, MB_KALENDER.psalmen]); });
 sTry(function(){ sAdd("Ausgestoßene", "Kreaturen", function(){ KR.gr("aus"); }, MB_AUSGEST.p, MB_AUSGEST); });
 sTry(function(){ MB_BUECHER.forEach(function(g){ g.items.forEach(function(b){ sAdd(b.name, "Bücher › " + g.grp, function(){ openBook(b.id, 1); }, 0, [g.grp, b.lang]); }); }); });
 sTry(function(){ var b = MB_ORTE.besch; sAdd(b.t.replace(/^d\d+\s*/i, ""), "Tabellen › Beschwörungen", "tabellen/besch", 0, [b.kopf, b.macht, b.dank]); });
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
 var box = document.getElementById("sr"); v = sFold(v.trim());
 if(v.length < 2){ box.innerHTML = ""; return; }
 var ws = v.split(/\s+/), al = ws.map(sAlt), res = [];
 SIDX.forEach(function(e){
  if(!ws.every(function(w, k){ return sIdx(e.l, w) >= 0 || (al[k] !== w && sIdx(e.l, al[k]) >= 0); })) return;
  var tl = sFold(e.t), sc = 0;
  ws.forEach(function(w){ if(tl.indexOf(w) === 0) sc += 6; else if(sIdx(tl, w) >= 0) sc += 4; sc += Math.min(3, e.l.split(w).length - 1) * .3; });
  res.push({e:e, s:sc});
 });
 res.sort(function(a, b){ return b.s - a.s; });
 var tot = res.length; res = res.slice(0, 40);
 box.innerHTML = res.length ? res.map(function(o){
  var e = o.e, mp = [], fx = sFold(e.x, mp), hit = [], sn = "", i = -1;
  ws.forEach(function(w, k){ var a = sIdx(fx, w); if(a < 0 && al[k] !== w) a = sIdx(fx, al[k]); if(a >= 0 && (i < 0 || a < i)) i = a; });
  var a0 = 0, b0 = 120;
  if(i >= 0){ a0 = Math.max(0, mp[i] - 50); b0 = mp[i] + 110; }
  var out = "", pos = a0;
  ws.forEach(function(w, k){ var from = 0, h, n; [w, al[k]].forEach(function(q){ if(!q) return; from = 0; while((h = sIdx(fx, q, from)) >= 0){ if(mp[h] >= a0 && mp[h] < b0) hit.push([mp[h], mp[Math.min(h + q.length - 1, mp.length - 1)] + 1]); from = h + q.length; if(hit.length > 60) break; } }); });
  hit.sort(function(x, y){ return x[0] - y[0]; });
  hit.forEach(function(h){ if(h[0] < pos) return; out += sEsc(e.x.slice(pos, h[0])) + "<mark>" + sEsc(e.x.slice(h[0], h[1])) + "</mark>"; pos = h[1]; });
  out += sEsc(e.x.slice(pos, b0));
  sn = (a0 ? "… " : "") + out + (b0 < e.x.length ? " …" : "");
  var fn = typeof e.r === "function";
  return '<a href="' + (fn ? "#" : "#" + e.r) + '" onclick="' + (fn ? "sFn(" + e.i + ");return false" : "document.getElementById(\'sm\').remove()") + '"><b>' + sEsc(e.t) + '</b><span class="sc">' + sEsc(e.ctx) + (e.p ? " · S. " + e.p : "") + '</span><span class="sn">' + sn + '</span></a>';
 }).join("") + (tot > 40 ? '<p class="sc sx">' + tot + ' Treffer, die ersten 40</p>' : "") : '<p class="sc sx">Keine Treffer</p>';
}
document.addEventListener("keydown", function(e){
 if(e.key !== "/" || /INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "") || e.ctrlKey || e.metaKey || e.altKey) return;
 e.preventDefault(); sOpen();
});
