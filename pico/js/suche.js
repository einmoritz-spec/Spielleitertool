/* Pico – Volltextsuche (Taste "/" oder Menü). Index wird beim ersten Öffnen aus den Datenfiles gebaut. */
var SIDX = null;
var S_SKIP = {farbe:1, c:1, bild:1, img:1, id:1, p:1, d:1};
function sFlat(o, out){
  if(o == null) return out;
  if(typeof o === "string"){ if(o.charAt(0) !== "#") out.push(o); return out; }
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
/* Umlaute/Akzente/ß ignorieren: „kaefer“, „kafer“ und „Käfer“ finden dasselbe; Abfrage zusätzlich mit ae/oe/ue → a/o/u */
function sFold(s, map){
  s = String(s).toLowerCase();
  if(!map) return s.replace(/ß/g, "ss").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  var out = "";
  for(var i = 0; i < s.length; i++){ var f = s.charAt(i) === "ß" ? "ss" : s.charAt(i).normalize("NFD").replace(/[\u0300-\u036f]/g, ""); out += f; for(var j = 0; j < f.length; j++) map.push(i); }
  return out;
}
function sAlt(w){ return w.replace(/ae|oe|ue/g, function(m){ return m.charAt(0); }); }
/* Suchwort in Text finden: ab 4 Buchstaben irgendwo im Wort (Komposita), kurze Wörter („in“, „der“) nur am Wortanfang */
function sIdx(l, w, from){
  var i = l.indexOf(w, from || 0);
  if(w.length > 3) return i;
  while(i > 0 && /[a-z0-9]/.test(l.charAt(i - 1))) i = l.indexOf(w, i + 1);
  return i;
}
function sAdd(t, ctx, route, p, data){
  var txt = sFlat(data, []).join(" ").replace(/\*\*|\*|__/g, " ").replace(/\s+/g, " ").trim();
  SIDX.push({t:t, ctx:ctx, r:route, p:p, x:txt, l:sFold(t + " " + txt)});
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
    sAdd(i.t, "Reich", base + "ueberblick", i.p, [i.kurz, rest]);
    if(r.fraktionen && r.fraktionen.intro) sAdd(i.t + " › Fraktionen", "Reich", base + "fraktionen", i.p, r.fraktionen.intro);
    if(r.reise && r.reise.intro) sAdd(i.t + " › Reise", "Reich", base + "reise", i.p, r.reise.intro);
    if(r.fraktionen) (r.fraktionen.liste || []).forEach(function(f){ sAdd(f.t, i.t + " › Fraktionen", base + "fraktionen/" + f.id, f.p, f); });
    if(r.reise) (r.reise.gebiete || []).forEach(function(g){ sAdd(g.t, i.t + " › Reise", base + "reise", g.p, g); });
  });
  (window.PI_GEFAHR || []).forEach(function(g){
    var d = (window.PI_GTEXT || {})[g.id]; sAdd(g.t, "Winzige Gefahren", "gefahren/" + g.id, g.p, d || {});
  });
  (window.KACHELN || []).forEach(function(k){ sAdd(k.t, "Nachschlagen", k.go, 0, k.s); });
  Object.keys(window.PI_AB || {}).forEach(function(id){
    var A = PI_AB[id], base = "abenteuer/" + id + "/";
    var kopf = {}; Object.keys(A).forEach(function(k){ if(k !== "szenen" && k !== "nsc" && k !== "kaefer") kopf[k] = A[k]; });
    sAdd(A.t, "Abenteuer", base + "vorbereitung", 0, kopf);
    (A.szenen || []).forEach(function(z){ sAdd(z.t, A.t + " › Schauplätze", base + "schauplaetze/" + z.id, z.p, z); });
    (A.kaefer || []).forEach(function(k){ sAdd(k.t, A.t + " › Käfer", base + "kaefer/" + k.id, 0, k); });
    Object.keys(A.nsc || {}).forEach(function(n){ var o = A.nsc[n]; sAdd(o.t, A.t + " › NSC", base + "nsc", o.p, o); });
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
  var box = document.getElementById("sr"); v = sFold(v.trim());
  if(v.length < 2){ box.innerHTML = ""; return; }
  var ws = v.split(/\s+/), al = ws.map(sAlt), res = [];
  SIDX.forEach(function(e){
    var ok = ws.every(function(w, k){ return sIdx(e.l, w) >= 0 || (al[k] !== w && sIdx(e.l, al[k]) >= 0); }); if(!ok) return;
    var tl = sFold(e.t), sc = 0;
    ws.forEach(function(w){ if(tl.indexOf(w) === 0) sc += 6; else if(sIdx(tl, w) >= 0) sc += 4; sc += Math.min(3, e.l.split(w).length - 1) * .3; });
    res.push({e:e, s:sc});
  });
  res.sort(function(a, b){ return b.s - a.s; });
  var tot = res.length; res = res.slice(0, 40);
  box.innerHTML = res.length ? res.map(function(o){
    var e = o.e, mp = [], fx = sFold(e.x, mp), hit = [], i = -1;
    ws.forEach(function(w, k){ var a = sIdx(fx, w); if(a < 0 && al[k] !== w) a = sIdx(fx, al[k]); if(a >= 0 && (i < 0 || a < i)) i = a; });
    var a0 = 0, b0 = 120;
    if(i >= 0){ a0 = Math.max(0, mp[i] - 50); b0 = mp[i] + 110; }
    var out = "", pos = a0;
    ws.forEach(function(w, k){ [w, al[k]].forEach(function(q){ var from = 0, h; while((h = sIdx(fx, q, from)) >= 0){ if(mp[h] >= a0 && mp[h] < b0) hit.push([mp[h], mp[Math.min(h + q.length - 1, mp.length - 1)] + 1]); from = h + q.length; if(hit.length > 60) break; } }); });
    hit.sort(function(x, y){ return x[0] - y[0]; });
    hit.forEach(function(h){ if(h[0] < pos) return; out += sEsc(e.x.slice(pos, h[0])) + "<mark>" + sEsc(e.x.slice(h[0], h[1])) + "</mark>"; pos = h[1]; });
    out += sEsc(e.x.slice(pos, b0));
    var sn = (a0 ? "… " : "") + out + (b0 < e.x.length ? " …" : "");
    return '<a href="#' + e.r + '" onclick="document.getElementById(\'sm\').remove()"><b>' + sEsc(e.t) + '</b><span class="sc">' + sEsc(e.ctx) + (e.p ? " · S. " + e.p : "") + '</span><span class="sn">' + sn + '</span></a>';
  }).join("") + (tot > 40 ? '<p class="sc" style="padding:8px">' + tot + ' Treffer, die ersten 40</p>' : "") : '<p class="sc" style="padding:12px">Keine Treffer</p>';
}
