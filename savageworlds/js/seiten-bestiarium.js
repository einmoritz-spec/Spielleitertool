/* Bestiarium: Kreaturen (Werteblock-Karten, Kategorien, Suche) und Schablonen */
"use strict";
window.SWP = window.SWP || {};
var KCAT = ["Tiere","Monster","Humanoide","Untote","Dämonen","Feenwesen","Elementare","Konstrukte","Außerirdische","Roboter","Fahrzeuge","Superschurken","Abscheulichkeiten","Geister","Sonstige"];
var KCOL = {"Tiere":"#8a6a2e","Monster":"#a51f1a","Humanoide":"#6c625a","Untote":"#5b3a6e","Dämonen":"#8a1c2c","Feenwesen":"#3f7a4a","Elementare":"#2f6f8a","Konstrukte":"#4a5560","Außerirdische":"#0f6f86","Roboter":"#4a5560","Superschurken":"#b3301c","Abscheulichkeiten":"#5a3a1a","Geister":"#5b3a6e","Sonstige":"#7a7067"};
var KAB = {"Geschicklichkeit":"Ges","Konstitution":"Kon","Stärke":"Stä","Verstand":"Ver","Willenskraft":"Wil"};
function krSicht(k){ return k.s.some(function(x){ return x === "GRW" || gen(x.toLowerCase()); }); }
function krBadges(k){ return k.s.filter(function(x){ return x !== "GRW"; }).map(function(x){ return '<i class="sq sq-' + x.toLowerCase() + '">' + x + "</i>"; }).join(""); }
function krOff(b){ return (!b || b === "sw_de" || b === "sw_wb") ? 1 : 2; }
function knm(x){ return nm(x).replace(/ \/ /g, ' <i class="sl">/</i> '); }
function kb(t){ return krTxt(t).replace(/(\d+)/g, '<span class="dg">$1</span>'); }
function krTxt(t){ return esc(t).replace(/\[WC\]/g, '<img class="wcs" src="img/wc.webp" alt="Wildcard">').replace(/ß/g, "ß"); }
function krP(t){
  var m = String(t).match(/^([^.:]{2,40}): (.*)$/);
  return '<p class="ed">' + (m ? "<b>" + kb(m[1]) + ":</b> " + krTxt(m[2]) : krTxt(t)) + "</p>";
}
function krCats(){
  var vis = SW_KR.filter(krSicht), have = {};
  vis.forEach(function(k){ have[k.k] = 1; });
  var L = KCAT.filter(function(c){ return have[c]; });
  Object.keys(have).forEach(function(c){ if(L.indexOf(c) < 0) L.push(c); });
  return L;
}
function krKey(k){ return (k.g ? "1" + k.g : "0" + k.n).toLowerCase(); }
function krMatch(k, q){
  if(!q) return true;
  var h = (k._h = k._h || (k.n + " " + k.k + " " + (k.g || "") + " " + (k.d || []).join(" ") + " " + k.f + " " + (k.x || []).map(function(e){ return e[1]; }).join(" ") + " " + k.sf.map(function(e){ return e[0] + " " + e[1]; }).join(" ")).toLowerCase());
  return q.toLowerCase().split(/\s+/).every(function(w){ return h.indexOf(w) > -1; });
}
function krTile(k, i, open){
  var c = KCOL[k.k] || "#7a7067";
  return '<div class="tc kt' + (open ? " open" : "") + '" style="--rc:' + c + '" onclick="krOpen(' + i + ')"><b>' + knm(k.n) + (k.w ? '<img class="wcs" src="img/wc.webp" alt="Wildcard">' : "") + krBadges(k) + "</b><small>Parade " + esc(k.pa) + " · Robustheit " + esc(k.ro) + (k.bk === "sw_de" || !k.o ? "" : "") + "</small></div>";
}
function krDetail(k){
  var c = KCOL[k.k] || "#7a7067";
  var at = '<div class="ka">' + k.a.map(function(a){ return '<div title="' + esc(a[0]) + '"><small>' + esc(a[0]) + "</small><b>" + esc(a[1]) + "</b></div>"; }).join("") + "</div>";
  var st = '<div class="kv"><div><small>Bewegungsweite</small><b>' + esc(k.b) + '</b></div><div><small>Parade</small><b>' + esc(k.pa) + '</b></div><div><small>Robustheit</small><b>' + esc(k.ro) + "</b></div></div>";
  var rows = (k.f ? [["Fertigkeiten", k.f]] : []).concat(k.x || []).map(function(e){ return '<p class="kr"><b>' + esc(e[0]) + ":</b> " + krTxt(e[1]) + "</p>"; }).join("");
  var sf = k.sf.length ? '<small class="kh">Spezialfähigkeiten</small>' + k.sf.map(function(e){ return '<p class="ks">' + (e[2] ? '<i class="kpw">\u2605</i>' : "") + (e[0] ? "<b>" + kb(e[0]) + ":</b> " : "") + krTxt(e[1]) + "</p>"; }).join("") : "";
  if(k.ai && k.ai.length) sf += '<small class="kh">Abenteuerideen</small>' + k.ai.map(function(a){ return '<p class="ks"><b>' + kb(a[0]) + ":</b> " + krTxt(a[1]) + "</p>"; }).join("");
  return '<div class="td kd" style="--rc:' + c + '"><div class="tdm"><h3>' + knm(k.n) + (k.w ? '<img class="wcs lg" src="img/wc.webp" alt="Wildcard" title="Wildcard">' : "") + krBadges(k) + '<span class="pg" onclick="openBook(\'' + (k.bk || "sw_de") + "'," + (k.p + (k.o == null ? krOff(k.bk) : k.o)) + ')">S. ' + k.p + "</span></h3>" + (k.d || []).map(function(p){ return '<p class="kdesc">' + krTxt(p) + "</p>"; }).join("") + at + st + rows + '</div><div class="tds kss">' + sf + "</div></div>";
}
function krGrid(L){
  var h = "", per = 3, G = null;
  var chunks = [];
  for(var i = 0; i < L.length; i += per) chunks.push(L.slice(i, i + per));
  chunks.forEach(function(ch){
    var det = "", tiles = "";
    ch.forEach(function(k){
      var id = SW_KR.indexOf(k), open = ST.ko === id;
      tiles += krTile(k, id, open);
      if(open) det = krDetail(k);
    });
    h += '<div class="tg3">' + tiles + det + "</div>";
  });
  return h;
}
function krSide(cats, cur){
  var vis = SW_KR.filter(krSicht);
  var items = [["einl","Einleitung"],["faehig","Spezialfähigkeiten"],["groesse","Größentabelle"]];
  var s = '<aside class="side"><button class="fold" onclick="foldSide()" aria-label="Seitenleiste">‹</button>';
  var a = function(id, t){ return '<a class="' + (id === cur ? "on" : "") + '" onclick="krKat(\'' + id + '\')">' + esc(t) + "</a>"; };
  s += a("alle", "Alle Kreaturen");
  cats.forEach(function(c){ s += a("c:" + c, c); });
  s += '<div class="sdiv"></div>';
  items.forEach(function(e){ if(e[0] === "faehig" && !SW_BEST.fah.some(function(f){ return !f.s || f.s.some(function(x){ return x === "GRW" || gen(x.toLowerCase()); }); })) return; s += a(e[0], e[1]); });
  return s + "</aside>";
}
function krBar(){
  var q = ST.kq || "";
  return '<div class="kbar"><input id="kq" type="search" placeholder="Suchen" value="' + esc(q) + '" oninput="krSuche(this.value)" autocomplete="off"><a class="' + (ST.kw ? "on" : "") + '" onclick="krWild()"><img class="wcs" src="img/wc.webp" alt="">Wildcards</a></div>';
}
function krPage(){
  var cats = krCats();
  var cur = ST.kk || "alle";
  if(cur.indexOf("c:") === 0 && cats.indexOf(cur.slice(2)) < 0) cur = "alle";
  if(cur === "faehig" && !SW_BEST.fah.length) cur = "alle";
  var q = ST.kq || "", main = "";
  if(!q && (cur === "einl" || cur === "faehig" || cur === "groesse")){
    if(cur === "einl"){
      main = '<h2>Bestiarium<span class="pg" onclick="openBook(\'sw_de\',176)">S. 175</span></h2>' + SW_BEST.einl.map(krP).join("") + '<h4 class="rk" style="--rc:#a51f1a"><span>Bedrohungen erschaffen</span></h4>' + SW_BEST.bed.map(krP).join("") +
        '<h4 class="rk" style="--rc:#a51f1a"><span>Wildcard-Monster</span><img class="wcs lg" src="img/wc.webp" alt=""></h4>' + SW_BEST.wc.map(krP).join("") +
        '<h4 class="rk" style="--rc:#a51f1a"><span>Kreaturen</span></h4>' + SW_BEST.kint.map(krP).join("");
    } else if(cur === "faehig"){
      var F = SW_BEST.fah.filter(function(f){ return !f.s || f.s.some(function(x){ return x === "GRW" || gen(x.toLowerCase()); }); });
      main = '<h2>Spezialfähigkeiten</h2><div class="hg kfg">' + F.map(function(f){
        return '<div class="hc" style="--rc:#a51f1a"><b>' + nm(f.n) + (f.s ? f.s.filter(function(x){ return x !== "GRW"; }).map(function(x){ return '<i class="sq sq-' + x.toLowerCase() + '">' + x + "</i>"; }).join("") : "") + '<span class="pg" onclick="openBook(\'' + (f.bk || "sw_de") + "'," + (f.p + (f.o == null ? krOff(f.bk) : f.o)) + ')">S. ' + f.p + "</span></b>" + f.t.map(function(t){ var m = t.match(/^([^.:]{2,40}): (.*)$/); return "<p>" + (m ? "<b>" + esc(m[1]) + ":</b> " + esc(m[2]) : esc(t)) + "</p>"; }).join("") + "</div>";
      }).join("") + "</div>";
    } else {
      var T = SW_BEST.gt;
      main = '<h2>Grö' + 'ß'.replace(/ß/g,'ss') + 'entabelle<span class="pg" onclick="openBook(\'sw_de\',' + (T.p + 1) + ')">S. ' + T.p + "</span></h2>" + T.i.map(krP).join("") + '<div class="etw"><table class="et gt"><thead><tr>' + T.cols.map(function(c, i){ return "<th" + (i && i < 5 ? ' class="n"' : "") + ">" + esc(c) + "</th>"; }).join("") + "</tr></thead><tbody>" + T.r.map(function(g){
        return '<tr class="gh"><td colspan="6">' + esc(g[0]) + (g[1] ? " (" + esc(g[1]) + ")" : "") + "</td></tr>" + g[2].map(function(r){ return "<tr>" + r.map(function(c, i){ return "<td" + (i && i < 5 ? ' class="n"' : "") + ">" + esc(c) + "</td>"; }).join("") + "</tr>"; }).join("");
      }).join("") + "</tbody></table></div>";
    }
    APP.innerHTML = '<div class="lay' + (ST.fold ? " fold-on" : "") + '" id="lay">' + krSide(cats, cur) + '<main class="ct">' + krBar() + main + "</main></div>";
    return;
  }
  var L = SW_KR.filter(krSicht);
  if(q) L = L.filter(function(k){ return krMatch(k, q); });
  else if(cur.indexOf("c:") === 0) L = L.filter(function(k){ return k.k === cur.slice(2); });
  if(ST.kw) L = L.filter(function(k){ return k.w; });
  L.sort(function(a, b){ return krKey(a) < krKey(b) ? -1 : krKey(a) > krKey(b) ? 1 : a.n.localeCompare(b.n, "de"); });
  var title = q ? "Suche" : cur === "alle" ? "Alle Kreaturen" : cur.slice(2);
  var body = "";
  if(!L.length) body = '<div class="soon">Keine Kreatur gefunden.</div>';
  else if(q || cur === "alle"){
    /* nach Kategorie gruppiert */
    var order = cats.slice();
    order.forEach(function(c){
      var LL = L.filter(function(k){ return k.k === c; }); if(!LL.length) return;
      body += '<h4 class="rk" style="--rc:' + (KCOL[c] || "#7a7067") + '"><span>' + esc(c) + "</span></h4>" + krGroups(LL);
    });
  } else body = krGroups(L);
  APP.innerHTML = '<div class="lay' + (ST.fold ? " fold-on" : "") + '" id="lay">' + krSide(cats, q ? "" : cur) + '<main class="ct">' + krBar() + "<h2>" + esc(title) + "</h2>" + body + "</main></div>";
  var inp = document.getElementById("kq");
  if(q && inp && document.activeElement !== inp){ /* Fokus beim Tippen behalten */ }
}
function krGroups(L){
  var out = "", cur = [], g = null;
  var flush = function(){ if(cur.length){ out += krGrid(cur); cur = []; } };
  L.forEach(function(k){
    if(k.g !== g){
      flush(); g = k.g;
      if(g){ out += '<h4 class="rk kgh" style="--rc:#7a7067"><span>' + nm(g) + "</span></h4>" + ((SW_BEST.gr.g[g] || []).map(function(t){ return '<p class="ed">' + krTxt(t) + "</p>"; }).join("")); }
    }
    cur.push(k);
  });
  flush();
  return out;
}
function krKat(id){ ST.kk = id; ST.kq = ""; ST.ko = -1; save(); krPage(); window.scrollTo(0, 0); }
function krOpen(i){ ST.ko = ST.ko === i ? -1 : i; save(); krPage(); var d = document.querySelector(".kd"); if(d && ST.ko > -1) d.scrollIntoView({block:"nearest", behavior:"smooth"}); }
function krWild(){ ST.kw = ST.kw ? 0 : 1; save(); krPage(); }
var krTimer;
function krSuche(v){
  ST.kq = v; clearTimeout(krTimer);
  krTimer = setTimeout(function(){ krPage(); var i = document.getElementById("kq"); if(i){ i.focus(); i.setSelectionRange(v.length, v.length); } }, 120);
}
SWP["bestiarium/tiere"] = krPage;

/* ---------- Schablonen ---------- */
function schPage(){
  var S = SW_SCHAB;
  var u = 30; /* px je Zoll */
  var SHORT = {"Kleine Flächenschablone":"Klein","Mittlere Flächenschablone":"Mittel","Große Flächenschablone":"Groß","Kegelschablone":"Kegel","Strahlschablone":"Strahl"};
  var shape = function(s){
    var d = s.dm * u, lab = "<span>" + nm(SHORT[s.n]) + "</span>", body;
    if(s.t0 === "kegel") body = '<div class="sh kegel" style="width:' + (3 * u) + "px;height:" + (9 * u) + 'px"><svg viewBox="0 0 30 90" preserveAspectRatio="none"><defs><radialGradient id="gk" cx="50%" cy="25%" r="75%"><stop offset="0" stop-color="#ffd24a"/><stop offset=".6" stop-color="#f08a1c"/><stop offset="1" stop-color="#c2410c"/></radialGradient></defs><path d="M10.5 88C9 86 8.5 84 8 82L2.2 17A13 13 0 1 1 27.8 17L22 82C21.5 84 21 86 19.5 88A5 5 0 0 1 10.5 88Z" fill="url(#gk)"/></svg>' + lab + "</div>";
    else if(s.t0 === "strahl") body = '<div class="sh strahl" style="width:' + (12 * u) + "px;height:" + u + 'px">' + lab + "</div>";
    else body = '<div class="sh kreis" style="width:' + d + "px;height:" + d + 'px">' + lab + "</div>";
    return '<figure class="shf">' + body + "<figcaption>" + esc(s.n) + "</figcaption></figure>";
  };
  var tbl = '<div class="etw st"><table class="et"><thead><tr>' + S.tab.cols.map(function(c, i){ return "<th" + (i ? ' class="n"' : "") + ">" + esc(c) + "</th>"; }).join("") + "</tr></thead><tbody>" + S.tab.r.map(function(r){ return "<tr>" + r.map(function(c, i){ return "<td" + (i ? ' class="n"' : "") + ">" + esc(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
  APP.innerHTML = '<div class="lay' + (ST.fold ? " fold-on" : "") + '" id="lay"><main class="ct"><h2>Schablonen<span class="pg" onclick="openBook(\'sw_de\',104)">S. 102</span></h2>' + S.i.map(krP).join("") +
    '<div class="shw">' + S.s.map(shape).join("") + "</div>" +
    '<h4 class="rk" style="--rc:#a51f1a"><span>Schablonen ohne Miniaturen</span></h4>' + S.o.map(krP).join("") + tbl + "</main></div>";
}
SWP["bestiarium/schablonen"] = schPage;
