/* Suche (Taste "/" oder Menü) + Galerie (#galerie) */
var SIDX = null;
function sFlat(o, out){
  if(o == null) return out;
  if(typeof o === "string"){ out.push(o); return out; }
  if(Array.isArray(o)){ o.forEach(function(x){ sFlat(x, out); }); return out; }
  if(typeof o === "object"){ for(var k in o){ if(k === "bild" || k === "img" || k === "id" || k === "bogen" || k === "q" || k === "buch") continue; sFlat(o[k], out); } }
  return out;
}
function sBuild(){
  if(SIDX) return SIDX; SIDX = [];
  var NN = {regeln:"Regeln", charaktere:"Charaktere", schiffe:"Schiffe", wildsee:"Die Wildsee", leitfaden:"Leitfaden", tisch:"Am Tisch"};
  for(var b in (window.WS_NACH || {})) WS_NACH[b].forEach(function(s){
    SIDX.push({t:s.t, w:NN[b] || b, p:s.p, q:s.q, go:"nach/" + b + "/" + s.id, x:sFlat(s.b, []).join(" ")});
  });
  (window.WS_GEFAHR || []).forEach(function(g){ SIDX.push({t:g.t, w:"Gefahren", p:g.p, q:g.q, go:"gefahren/" + g.id, x:(g.en || "") + " " + sFlat(g, []).join(" ")}); });
  for(var r in (window.WS_REICH || {})){ var R = WS_REICH[r]; SIDX.push({t:R.t, w:"Reich", p:R.p, q:R.q || ((window.WS_REICHE || []).filter(function(x){ return x.id === r; })[0] || {}).q, go:"reich/" + r, x:sFlat(R, []).join(" ")}); }
  SIDX.forEach(function(e){ e.lt = e.t.toLowerCase(); e.lx = e.x.toLowerCase(); });
  return SIDX;
}
function sSuche(q){
  q = q.trim().toLowerCase(); if(q.length < 2) return [];
  var ws = q.split(/\s+/), res = [];
  sBuild().forEach(function(e){
    var sc = 0, ok = true;
    ws.forEach(function(w){ if(e.lt.indexOf(w) >= 0) sc += 10 + (e.lt.indexOf(w) === 0 ? 5 : 0); else if(e.lx.indexOf(w) >= 0) sc += 1; else ok = false; });
    if(ok) res.push({e:e, s:sc});
  });
  res.sort(function(a, b){ return b.s - a.s; });
  return res.slice(0, 60).map(function(r){
    var e = r.e, i = e.lx.indexOf(ws[0]), sn = "";
    if(i >= 0 && e.lt.indexOf(ws[0]) < 0){ var a = Math.max(0, i - 50); sn = (a ? "… " : "") + e.x.substr(a, 140).replace(/\s+/g, " ") + " …"; }
    return {e:e, sn:sn};
  });
}
function sOpen(on){
  var o = document.getElementById("sOv");
  if(!on){ if(o) o.remove(); return; }
  if(o){ o.querySelector("input").focus(); return; }
  o = document.createElement("div"); o.id = "sOv"; o.className = "sov";
  o.innerHTML = '<div class="sbox"><input type="search" placeholder="Suchen …" autocomplete="off"><div class="sres"></div></div>';
  o.onclick = function(e){ if(e.target === o) sOpen(false); };
  document.body.appendChild(o);
  var inp = o.querySelector("input"), rs = o.querySelector(".sres");
  inp.oninput = function(){
    var L = sSuche(inp.value);
    rs.innerHTML = L.map(function(r){ return '<a onclick="sOpen(false);go(\'' + r.e.go + '\')"><b>' + esc(r.e.t) + '</b><span>' + esc(r.e.w) + (qName(r.e) ? " · " + esc(qName(r.e)) : "") + (r.e.p ? " · S. " + r.e.p : "") + '</span>' + (r.sn ? '<small>' + esc(r.sn) + '</small>' : '') + '</a>'; }).join("") || (inp.value.trim().length > 1 ? '<p class="sn">Nichts gefunden</p>' : "");
  };
  inp.focus();
}
document.addEventListener("keydown", function(e){
  if(e.key === "Escape") sOpen(false);
  if(e.key === "/" && !/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "")){ e.preventDefault(); sOpen(true); }
});
/* Galerie */
function gaBild(m, t, k, q){ return {src:"img/" + m[0], w:m[1], h:m[2], t:t, k:k, q:q || ""}; }
function viewGalerie(){
  var L = [], NN = {regeln:"Regeln", charaktere:"Charaktere", schiffe:"Schiffe", wildsee:"Die Wildsee", leitfaden:"Leitfaden", tisch:"Am Tisch"};
  for(var b in (window.WS_NIMG || {})) for(var id in WS_NIMG[b]){
    var s = (WS_NACH[b] || []).filter(function(x){ return x.id === id; })[0];
    WS_NIMG[b][id].forEach(function(m){ L.push(gaBild(m, s ? s.t : id, NN[b] || b, s && s.q)); });
  }
  (window.WS_NACH && WS_NACH.charaktere || []).forEach(function(s){ var pc = pcOf(s); if(pc && pc.bild) L.push({src:"img/" + pc.bild, w:pc.bw || 752, h:pc.bh || 1330, t:s.t, k:"Charaktere", q:s.q || ""}); });
  for(var g in (window.GIMG || {})){ var gf = gById(g); L.push({src:"img/gefahr/" + g + ".webp", w:GIMG[g][0], h:GIMG[g][1], t:gf ? gf.t : g, k:"Gefahren", q:gf && gf.q || ""}); }
  for(var r in (window.WS_REICH || {})){
    var rq = ((window.WS_REICHE || []).filter(function(x){ return x.id === r; })[0] || {}).q || WS_REICH[r].q || "";
    L.push({src:"img/reich/" + r + ".webp", w:1600, h:1000, t:WS_REICH[r].t, k:"Reiche", q:rq});
    var seen = {}; (function walk(o){
      if(!o || typeof o !== "object") return;
      if(Array.isArray(o)){ o.forEach(walk); return; }
      if(Array.isArray(o.bild) && !seen[o.bild[0]]){ seen[o.bild[0]] = 1; L.push({src:"img/" + o.bild[0] + ".webp", w:o.bild[1], h:o.bild[2], t:o.t || WS_REICH[r].t, k:"Reiche", q:rq}); }
      for(var k in o) walk(o[k]);
    })(WS_REICH[r]);
  }
  var cats = []; L.forEach(function(x){ if(cats.indexOf(x.k) < 0) cats.push(x.k); });
  var f = window.__gaF || "", fq = window.__gaQ || "";
  var qk = []; L.forEach(function(x){ if(qk.indexOf(x.q) < 0) qk.push(x.q); });
  var qchips = qk.length > 1 ? '<span class="gsep"></span><span class="gql">Quelle</span>' + [["", "Alle"], ["-", "Corebook"]].concat(["sr", "sg", "m1"].filter(function(k){ return qk.indexOf(k) >= 0; }).map(function(k){ return [k, QUELLEN[k].n]; })).map(function(c){ return '<button class="chip' + (fq === c[0] ? ' on' : '') + '" onclick="__gaQ=\'' + c[0] + '\';render()">' + esc(c[1]) + '</button>'; }).join("") : "";
  var chips = '<button class="chip' + (f ? '' : ' on') + '" onclick="__gaF=\'\';render()">Alle (' + L.length + ')</button>' + cats.map(function(c){ return '<button class="chip' + (f === c ? ' on' : '') + '" onclick="__gaF=\'' + c + '\';render()">' + esc(c) + '</button>'; }).join("");
  var items = L.filter(function(x){ return (!f || x.k === f) && (!fq || (fq === "-" ? !x.q : x.q === fq)); }).map(function(x){
    return '<figure class="gai" style="--r:' + (x.w / x.h).toFixed(3) + '" title="' + esc(x.t) + '"><img loading="lazy" src="' + x.src + '" alt="" onclick="nZoom(this.src)"><figcaption>' + esc(x.t) + '</figcaption></figure>';
  }).join("");
  return '<div class="tabs"><a class="on">Galerie</a></div><div class="pad"><div class="chips gac">' + chips + qchips + '</div><div class="gal">' + items + '</div></div>';
}
