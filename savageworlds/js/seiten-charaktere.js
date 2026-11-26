/* Charaktere: Völker, Handicaps, Eigenschaften, Aufstiege – mit Zusatzbänden (Genre-Filter, Quellen-Badges). Überschreibt die Grundfassung in app.js. */
"use strict";
function sqVis(s){ return (s || ["GRW"]).some(function(x){ return x === "GRW" || gen(x.toLowerCase()); }); }
function sqBadge(s){ return (s || []).filter(function(x){ return x !== "GRW"; }).map(function(x){ return '<i class="sq sq-' + x.toLowerCase() + '">' + x + "</i>"; }).join(""); }
function pgLink(bk, p, o){ return '<span class="pg" onclick="event.stopPropagation();openBook(\'' + (bk || "sw_de") + "'," + (p + (bk ? (o == null ? 2 : o) : 1)) + ')">S. ' + p + "</span>"; }
function deSort(a, b){ return a.localeCompare(b, "de"); }

/* ---------- Völker ---------- */
function allVoelker(){ return SW_VOELKER.concat(window.SW_VOELKER_FAN || [], window.SW_VOELKER_HOR || [], window.SW_VOELKER_SF || []); }
function voelkerPage(){
  var k = ST.vk || 0, A = allVoelker();
  var side = ["Völker", "Völker erschaffen"].map(function(t, i){ return '<a class="' + (i === k ? "on" : "") + '" onclick="vKat(' + i + ')">' + t + "</a>"; }).join("");
  var body;
  if(k === 1) body = voelkerErschaffen();
  else {
    var L = A.filter(function(v){ return sqVis(v.s); }).sort(function(a, b){ return deSort(a.n, b.n); }), h = '<div class="tg3">';
    L.forEach(function(v, i){
      var id = A.indexOf(v), open = ST.vo === id;
      h += '<div class="tc' + (open ? " open" : "") + '" style="--rc:#a51f1a" onclick="voOpen(' + id + ')"><b>' + nm(v.n) + sqBadge(v.s) + "</b><small>" + v.e.map(function(e){ return esc(e[0]); }).join(" · ") + "</small></div>";
      if(i % 3 === 2 || i === L.length - 1){
        var row = L.slice(i - i % 3, i + 1).map(function(x){ return A.indexOf(x); });
        if(ST.vo > -1 && row.indexOf(ST.vo) > -1) h += voDetail(A[ST.vo]);
      }
    });
    body = '<h2>Völker</h2>' + h + "</div>";
  }
  APP.innerHTML = '<div class="lay' + (ST.fold ? " fold-on" : "") + '" id="lay"><aside class="side"><button class="fold" onclick="foldSide()" aria-label="Seitenleiste">‹</button>' + side + '</aside><main class="ct">' + body + "</main></div>";
}
function vKat(i){ ST.vk = i; save(); voelkerPage(); window.scrollTo(0, 0); }
function voTalente(v){
  if(!v.tk) return "";
  var L = SW_TALENTE.map(function(t, i){ return [t, i]; }).filter(function(x){ var t = x[0]; return t.k === "Monsterhelden" && talSicht(t) && (t.n.indexOf("(" + v.tk + ")") > -1 || t.v === v.tk); });
  if(!L.length) return "";
  return '<p class="ei"><b>Talente:</b> ' + L.map(function(x){ return '<a class="tl" onclick="event.stopPropagation();voTal(' + x[1] + ')">' + nm(x[0].n.replace(/ \(.*\)$/, "")) + "</a>"; }).join(", ") + "</p>";
}
function voTal(id){ ST.tk = SW_TALENTE[id].k; ST.to = id; save(); go("charaktere/talente"); }
function voDetail(v){
  return '<div class="td vo" style="--rc:#a51f1a"><div class="tdm"><h3>' + nm(v.n) + sqBadge(v.s) + pgLink(v.bk, v.p, v.o) + "</h3>" + v.b.map(function(p){ return "<p>" + esc(p) + "</p>"; }).join("") +
    v.e.map(function(e){ return '<p class="ei"><b>' + esc(e[0]) + ":</b> " + esc(e[1]) + "</p>"; }).join("") + voTalente(v) +
    (v.v ? '<p class="ei vi"><b>Variantenidee:</b> ' + esc(v.v) + "</p>" : "") + "</div></div>";
}
function voOpen(i){ ST.vo = ST.vo === i ? -1 : i; save(); voelkerPage(); var d = document.querySelector(".td"); if(d && ST.vo > -1) d.scrollIntoView({block:"nearest", behavior:"smooth"}); }
function veCard(x, rc){
  return '<div class="hc" style="--rc:' + rc + '"><b>' + nm(x.n) + sqBadge(x.s ? [x.s] : []) + '<i class="sg">' + esc(x.w.charAt(0) === "–" || x.w.charAt(0) === "−" ? x.w : "+" + x.w) + (x.m ? " · max. " + esc(x.m) : "") + "</i>" + (x.bk ? pgLink(x.bk, x.p, 2) : "") + "</b><p>" + esc(x.t) + "</p></div>";
}
function voelkerErschaffen(){
  var E = SW_VOLKERSCHAFFEN_GRW, Z = (window.SW_VOLKERSCHAFFEN_ZUS || []).filter(function(x){ return sqVis([x.s]); });
  var intro = '<ul class="ed vl"><li>Völker und Kulturen beginnen mit 2 Punkten positiver Volkseigenarten. Zusätzliche positive Eigenarten müssen mit dem gleichen Punktwert an negativen Eigenarten ausgeglichen werden. Eine Eigenart für +2 kannst du beispielsweise mit einer Eigenart für –2 oder durch zwei mit –1 ausgleichen.</li><li>Wenn du eine Eigenart verwenden willst, die nicht in dieser Liste steht, weise ihr einfach nach dem Vorbild dieser Beispiele einen Punktwert zu.</li><li>Namen: Du solltest nicht zögern, Volkseigenarten umzubenennen, damit sie deinem Setting mehr Atmosphäre verleihen. Wenn deine Pferdenomaden die Fertigkeit Reiten mit einem W6 erhalten sollen, könntest du das beispielsweise Im Sattel geboren nennen.</li><li>Die Zahl nach „max.“ gibt an, wie oft du die Volkseigenart auswählen kannst. „U“ bedeutet unbegrenzt.</li></ul>';
  var h = '<h2>Völker erschaffen' + pgLink(null, 18) + "</h2>" + intro +
    '<h4 class="rk" style="--rc:#2f7a4a"><span>Positive Volkseigenarten</span></h4><div class="hg">' + E.pos.map(function(x){ return veCard(x, "#2f7a4a"); }).join("") + "</div>" +
    '<h4 class="rk" style="--rc:#a51f1a"><span>Negative Volkseigenarten</span></h4><div class="hg">' + E.neg.map(function(x){ return veCard(x, "#a51f1a"); }).join("") + "</div>";
  [["FAN", "Fantasy"], ["SF", "Science-Fiction"]].forEach(function(g){
    var L = Z.filter(function(x){ return x.s === g[0]; }); if(!L.length) return;
    h += '<h4 class="rk" style="--rc:' + (g[0] === "FAN" ? "#2f7a4a" : "#1f6f9a") + '"><span>Neue Volkseigenarten – ' + g[1] + '</span></h4><div class="hg">' + L.map(function(x){ return veCard(x, x.w.charAt(0) === "–" ? "#a51f1a" : "#2f7a4a"); }).join("") + "</div>";
  });
  return h;
}

/* ---------- Handicaps ---------- */
function handicapsPage(){
  var f = ST.hf || "";
  var chips = [["", "Alle"], ["leicht", "Leicht"], ["schwer", "Schwer"]].map(function(c){ return '<a class="' + (f === c[0] ? "on" : "") + '" onclick="hFilter(\'' + c[0] + '\')">' + c[1] + "</a>"; }).join("");
  var L = SW_HANDICAPS.filter(function(h){ return sqVis(h.s) && (!f || h.w.indexOf(f) > -1); }).sort(function(a, b){ return deSort(a.n, b.n); });
  var h = L.map(function(x){
    var sw = x.w === "schwer", lw = x.w === "leicht", lb = x.w.split("/").map(function(w){ return w.charAt(0).toUpperCase() + w.slice(1); }).join(" · ");
    var pg = x.bk ? pgLink(x.bk, x.p, x.o) : '<span class="pg" onclick="openBook(\'sw_de\',' + (x.p + 1) + ')">S. ' + x.p + "</span>";
    return '<div class="hc" style="--rc:' + (sw ? "#a51f1a" : lw ? "#c27a1c" : "#7a7067") + '"><b>' + nm(x.n) + sqBadge(x.s) + '<i class="sg">' + lb + "</i>" + pg + "</b><p>" + esc(x.t) + "</p></div>";
  }).join("");
  APP.innerHTML = '<div class="lay" id="lay"><main class="ct"><h2>Handicaps</h2><div class="hf">' + chips + '</div><div class="hg">' + h + "</div></main></div>";
}

/* ---------- Eigenschaften ---------- */
function eigenschaftenPage(){
  var Z = (window.SW_SKILLS_ZUS || []).filter(function(k){ return sqVis(k.s); });
  var h = SW_ATTR.map(function(a){
    var L = SW_SKILLS.filter(function(k){ return k.a === a.n; }).map(function(k){ return {k:k}; }).concat(Z.filter(function(k){ return k.a === a.n; }).map(function(k){ return {k:k, z:1}; }));
    L.sort(function(x, y){ return deSort(x.k.n, y.k.n); });
    return '<h4 class="rk" style="--rc:#a51f1a"><span>' + esc(a.n) + '</span></h4><p class="ad">' + esc(a.t) + '</p><div class="hg">' + L.map(function(o){
      var k = o.k;
      return '<div class="hc" style="--rc:' + (k.g ? "#a51f1a" : "#7a7067") + '"><b>' + nm(k.n) + (o.z ? sqBadge(k.s) : "") + (k.g ? '<i class="sg">Grundfertigkeit</i>' : "") + (k.x ? '<i class="sg">Regel</i>' : "") + (o.z ? pgLink(k.bk, k.p, k.o) : "") + "</b><p>" + esc(k.t) + "</p></div>";
    }).join("") + "</div>";
  }).join("");
  APP.innerHTML = '<div class="lay" id="lay"><main class="ct"><h2>Eigenschaften<span class="pg" onclick="openBook(\'sw_de\',32)">S. 31</span></h2>' + h + "</main></div>";
}

/* ---------- Aufstiege ---------- */
function aufstiegePage(){
  var A = SW_AUFSTIEG, P = function(a){ return a.map(function(t){ return "<p>" + esc(t) + "</p>"; }).join(""); };
  var rk = '<aside class="rside"><h4 class="rk" style="--rc:#a51f1a"><span>Rang</span></h4>' + P(A.rang) + '<div class="rg">' + A.ranks.map(function(r, i){ return '<div class="rc" style="--rc:' + RC[i] + '"><b>' + r[0] + "</b><small>" + r[1] + " Aufstiege</small></div>"; }).join("") + "</div></aside>";
  var h = '<div class="aw"><div class="art">' + P(A.intro) + "<p>" + esc(A.optT) + "</p><ul>" + A.opt.map(function(o){ return "<li>" + esc(o) + "</li>"; }).join("") + "</ul>" +
    A.sec.map(function(x){ return '<h4 class="rk" style="--rc:#a51f1a"><span>' + esc(x[0]) + "</span></h4>" + P(x[1]); }).join("") + "</div>" + rk + "</div>";
  var Z = (window.SW_AUFSTIEG_ZUS || []).filter(function(x){ return sqVis([x.s]); });
  Z.forEach(function(x){
    h += '<h4 class="rk" style="--rc:' + (x.s === "FAN" ? "#2f7a4a" : "#c2571c") + '"><span>' + esc(x.h) + sqBadge([x.s]) + '</span><b class="pg" onclick="openBook(\'' + x.bk + "'," + (x.p + x.o) + ')">S. ' + x.p + "</b></h4><p class=\"ed\">" + esc(x.i) + "</p>" +
      (x.tab ? eqTable(x.tab[0], x.tab.slice(1).map(function(r){ return {c:r}; })) : "") +
      (x.c.length ? '<div class="hg">' + x.c.map(function(c){ return '<div class="hc" style="--rc:#7a7067"><b>' + nm(c[0]) + "</b><p>" + esc(c[1]) + "</p></div>"; }).join("") + "</div>" : "");
  });
  APP.innerHTML = '<div class="lay" id="lay"><main class="ct"><h2>Aufstiege<span class="pg" onclick="openBook(\'sw_de\',' + (A.p + 1) + ')">S. ' + A.p + "</span></h2>" + h + "</main></div>";
}
render();
