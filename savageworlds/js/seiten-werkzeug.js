/* Savage Worlds – Werkzeugkasten: Abenteuer-Werkzeugkasten (GRW) + Werkzeug-Inhalte der Zusatzbände (FAN/HOR/SF/SUP/WB).
   Daten: window.SW_WK = [ {tab,id,t,s:[Quellen],bk,p,after?,b:[Blöcke]} ]. Blöcke:
   ["p",text] ["ul",[text | [text,[sub]]]] ["h",titel,buchseite,quelle?,buch?] ["tbl",titel,spalten,zeilen,fussnote?] ["box",titel,[blöcke]] ["q",text,autor] ["note",text] */
window.SWP = window.SWP || {};
(function(){
var WTAB = {aufgaben:1, furcht:1, gefahren:1, soziales:1, schlacht:1, verfolgung:1, settingregeln:1, zwischenspiele:1};
function offOf(bk){ var o = 1; (window.SW_BUECHER || []).forEach(function(g){ g.items.forEach(function(b){ if(b.id === bk) o = b.off; }); }); return o; }
function wkOpen(bk, bp){ openBook(bk, bp + offOf(bk)); }
function pgLink(bk, bp){ return bp ? '<span class="pg" onclick="event.stopPropagation();wkOpen(\'' + bk + '\',' + bp + ')">S. ' + bp + "</span>" : ""; }
function badge(x){ return x ? String(x).split(",").filter(function(q){ return q !== "GRW"; }).map(function(q){ return '<i class="sq sq-' + q.toLowerCase() + '">' + q + "</i>"; }).join("") : ""; }
function actSrc(a){ return a.filter(function(x){ return x === "GRW" || gen(x.toLowerCase()); }); }
function fixH(bl){ return bl.map(function(b){ return b[0] === "h" && b[3] ? ["h", b[1], b[2], actSrc(String(b[3]).split(",")).join(","), b[4]] : b; }); }
function visible(s){ return s.s.some(function(x){ return x === "GRW" || gen(x.toLowerCase()); }); }
function wkEntries(tab){
  var L = (window.SW_WK || []).filter(function(s){ return s.tab === tab && visible(s); });
  var base = L.filter(function(s){ return s.s.indexOf("GRW") > -1; }).sort(function(a, b){ return a.o - b.o; });
  var ents = base.map(function(s){ return {id:s.id, t:s.t, s:["GRW"], bk:s.bk, p:s.p, b:s.b.slice()}; });
  L.filter(function(s){ return s.s.indexOf("GRW") < 0; }).forEach(function(s){
    var src = s.s.filter(function(x){ return x === "GRW" || gen(x.toLowerCase()); });
    var ex = ents.filter(function(e){ return e.id === s.id; })[0];
    var hd = [["h", s.t, s.p, src.join(","), s.bk]], sb = fixH(s.b);
    if(ex){ ex.b = ex.b.concat(hd, sb); ex.x = (ex.x || []).concat(src); return; }
    var ne = {id:s.id, t:s.t, s:src, bk:s.bk, p:s.p, b:sb, ext:1};
    var at = -1; if(s.after) ents.forEach(function(e, i){ if(e.id === s.after) at = i; });
    if(at > -1) ents.splice(at + 1, 0, ne); else ents.push(ne);
  });
  return ents;
}
function lab(t){ /* "Label: Text" -> fett */
  var m = /^([^.:]{2,42}): ([\s\S]*)$/.exec(t);
  if(!m) return esc(t);
  var l = m[1]; if(l.length > 3 && l === l.toUpperCase()) l = l.toLowerCase().replace(/(^|\s)(\S)(\S{3,})/g, function(a, b, c, d){ return b + c.toUpperCase() + d; }).replace(/^./, function(c){ return c.toUpperCase(); });
  return "<b>" + nm(l) + ":</b> " + esc(m[2]);
}
function wP(t){ return '<p class="ed">' + lab(t) + "</p>"; }
function wUl(items){
  return '<ul class="wl">' + items.map(function(x){
    if(typeof x === "string") return "<li>" + lab(x) + "</li>";
    return "<li>" + lab(x[0]) + '<ul class="wl">' + x[1].map(function(y){ return "<li>" + lab(y) + "</li>"; }).join("") + "</ul></li>";
  }).join("") + "</ul>";
}
function wTbl(b){
  var cols = b[2], n = cols.length;
  return '<div class="wt"><h5 class="eg">' + nm(b[1]) + '</h5><div class="etw"><table class="et wtb c' + n + '"><thead><tr>' + cols.map(function(c){ return "<th>" + esc(c) + "</th>"; }).join("") + "</tr></thead><tbody>" +
    b[3].map(function(r){ return "<tr>" + r.map(function(c, i){ return "<td" + (i === 0 || (n === 4 && i === 2) ? ' class="k"' : "") + ">" + (i === n - 1 && n < 4 ? lab(c) : esc(c)) + "</td>"; }).join("") + "</tr>"; }).join("") +
    "</tbody></table></div>" + (b[4] ? '<p class="wn">' + esc(b[4]) + "</p>" : "") + "</div>";
}
function wBlock(b, bk){
  switch(b[0]){
    case "p": return wP(b[1]);
    case "ul": return wUl(b[1]);
    case "tbl": return wTbl(b);
    case "note": return '<p class="wn">' + lab(b[1]) + "</p>";
    case "q": return '<blockquote class="wq">„' + esc(b[1]) + "“<cite>" + nm("— " + b[2]) + "</cite></blockquote>";
    case "h": return '<h5 class="wbh">' + nm(b[1]) + "</h5>";
    case "box": return '<div class="wb"><h5 class="eg">' + nm(b[1]) + "</h5>" + b[2].map(function(x){ return wBlock(x, bk); }).join("") + "</div>";
  }
  return "";
}
var WID = 0;
function wSeg(blocks, bk){
  var txt = [], side = [], wide = [];
  blocks.forEach(function(b){
    if(b[0] === "p" || b[0] === "ul") txt.push(b);
    else if(b[0] === "tbl" && b[2].length >= 4) wide.push(b);
    else side.push(b);
  });
  var h = "";
  if(txt.length) h += '<div class="wg' + (side.length ? " ws2" : "") + '"><div class="wtx' + (!side.length && txt.length > 2 ? " cols" : "") + '">' + txt.map(function(b){ return wBlock(b, bk); }).join("") + "</div>" + (side.length ? '<div class="wsd">' + side.map(function(b){ return wBlock(b, bk); }).join("") + "</div>" : "") + "</div>";
  else if(side.length) h += '<div class="wsd flat">' + side.map(function(b){ return wBlock(b, bk); }).join("") + "</div>";
  if(wide.length) h += '<div class="wsd flat">' + wide.map(function(b){ return wBlock(b, bk); }).join("") + "</div>";
  return h;
}
function wBody(e){
  var html = "", seg = [], cur = null, heads = [];
  function flush(){ if(seg.length || cur){ html += (cur ? cur : "") + wSeg(seg, e.bk) ; } seg = []; cur = null; }
  e.b.forEach(function(b){
    if(b[0] === "h"){
      flush(); var id = "wh" + (++WID); heads.push([id, b[1], b[3]]);
      var bk = b[4] || e.bk;
      cur = '<h4 class="rk wk-h" id="' + id + '" style="--rc:#a51f1a"><span>' + nm(b[1]) + "</span>" + badge(b[3]) + pgLink(bk, b[2]) + "</h4>";
    } else seg.push(b);
  });
  flush();
  return {html:html, heads:heads};
}
function wkPage(tab){
  var ents = wkEntries(tab), sub = tabOf("werkzeugkasten").subs.filter(function(s){ return s[0] === tab; })[0];
  if(!ST.wkSel) ST.wkSel = {};
  var cur = ents.filter(function(e){ return e.id === ST.wkSel[tab]; })[0] || ents[0];
  if(!cur){ APP.innerHTML = '<div class="lay" id="lay"><main class="ct"><h2>' + nm(sub[1]) + '</h2><div class="soon">Inhalt folgt.</div></main></div>'; return; }
  WID = 0;
  var body = wBody(cur), side = "";
  if(ents.length > 1){
    side = '<aside class="side"><button class="fold" onclick="foldSide()" aria-label="Seitenleiste">‹</button>' + ents.map(function(e){
      var on = e === cur;
      var bd = e.ext ? e.s.map(badge).join("") : (e.x ? e.x.filter(function(v, i, a){ return a.indexOf(v) === i; }).map(badge).join("") : "");
      return '<a class="' + (on ? "on" : "") + '" onclick="wkSel(\'' + tab + "','" + e.id + '\')">' + nm(e.t) + bd + "</a>" +
        (on ? body.heads.filter(function(h){ return h[1] !== e.t; }).map(function(h){ return '<a class="sb" onclick="wkJump(\'' + h[0] + '\')">' + nm(h[1]) + "</a>"; }).join("") : "");
    }).join("") + "</aside>";
  }
  var ttl = ents.length > 1 ? cur.t : sub[1];
  APP.innerHTML = '<div class="lay' + (ST.fold ? " fold-on" : "") + '" id="lay">' + side + '<main class="ct wkc"><h2>' + nm(ttl) + (cur.s.indexOf("GRW") < 0 ? cur.s.map(badge).join("") : "") + pgLink(cur.bk, cur.p) + "</h2>" + body.html + "</main></div>";
}
function wkSel(tab, id){ if(!ST.wkSel) ST.wkSel = {}; ST.wkSel[tab] = id; save(); wkPage(tab); window.scrollTo(0, 0); }
function wkJump(id){ var el = document.getElementById(id); if(el) el.scrollIntoView({block:"start", behavior:"smooth"}); }
window.wkOpen = wkOpen; window.wkSel = wkSel; window.wkJump = wkJump; window.wkPage = wkPage; window.wkEntries = wkEntries;
Object.keys(WTAB).forEach(function(t){ SWP["werkzeugkasten/" + t] = function(){ wkPage(t); }; });
})();
