/* Bereich „Regeln“: Proben, Kampf, Schaden & Heilung, Manöver, Situationen (GRW Kapitel 3, S. 87–109) */
(function(){
"use strict";
var RG = window.SW_REGELN, RCOL = "#a51f1a";
function pgl(p){ return '<span class="pg" onclick="openBook(\'sw_de\',' + (p + 1) + ')">S. ' + p + "</span>"; }
function tab(t, wide, p){
  var h = '<div class="rt' + (wide ? " wide" : "") + '">' + (t.t ? "<h5>" + nm(t.t) + (p ? pgl(p) : "") + "</h5>" : "") + '<table class="et rtb"><thead><tr>' + t.cols.map(function(c){ return "<th>" + c + "</th>"; }).join("") + "</tr></thead><tbody>" +
    t.rows.map(function(r){ return "<tr>" + r.map(function(c){ return "<td>" + c + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table>";
  if(t.fn) h += '<p class="rfn">' + t.fn + "</p>";
  return h + "</div>";
}
function blocks(bs){
  var h = "", ul = false;
  function close(){ if(ul){ h += "</ul>"; ul = false; } }
  bs.forEach(function(b, bi){
    if(b[0] !== "li") close();
    switch(b[0]){
      case "p": h += '<p class="ed rp">' + b[1] + "</p>"; break;
      case "li": if(!ul){ h += '<ul class="rl">'; ul = true; } h += "<li>" + b[1] + "</li>"; break;
      case "bsp": h += '<aside class="rb">' + b[1] + "</aside>"; break;
      case "h": h += '<h5 class="rh">' + nm(b[1]) + "</h5>"; break;
      case "tab": var more = 0; bs.slice(bi + 1).forEach(function(x){ if(x[0] === "p" || x[0] === "li") more += x[1].length; });
        h += tab(b[1], more < 450); break;
      case "q": h += '<blockquote class="rq">' + b[1] + "<cite>— " + b[2] + "</cite></blockquote>"; break;
      case "wc": h += '<p class="ed rp"><b class="wcn">' + b[1] + "</b></p>"; break;
      case "box": if(b[1].b.length === 1 && b[1].b[0][0] === "tab"){ h += tab(b[1].b[0][1], true, b[1].p); break; }
        h += '<div class="bx"><h5>' + nm(b[1].t) + pgl(b[1].p) + "</h5>" + blocks(b[1].b) + "</div>"; break;
    }
  });
  close();
  return h;
}
var uid = 0;
function secHtml(s, ids, solo){
  var id = "rs" + (++uid); ids.push([id, s.h]);
  if(solo) return '<section class="rs" id="' + id + '">' + blocks(s.b) + "</section>";
  return '<section class="rs" id="' + id + '"><h4 class="rk" style="--rc:' + RCOL + '"><span>' + nm(s.h) + "</span>" + pgl(s.p) + "</h4>" + blocks(s.b) + "</section>";
}
function page(pid){
  var P = RG[pid], k = (ST.rg && ST.rg[pid]) || 0; if(!P.g[k]) k = 0;
  var g = P.g[k];
  var side = P.g.map(function(x, i){
    var on = i === k, subs = "";
    if(on){
      var L = x.s.length > 1 ? x.s.map(function(s, j){ return [j, s.h]; }) : [];
      if(x.s.length === 1) x.s[0].b.forEach(function(b){ if(b[0] === "h") L.push([-1, b[1]]); });
      subs = L.map(function(l){ return '<a class="sb" onclick="rgScroll(\'' + pid + "'," + l[0] + ",'" + l[1].replace(/'/g, "\\'") + '\')">' + esc(l[1]) + "</a>"; }).join("");
    }
    return '<a class="' + (on ? "on" : "") + '" onclick="rgKat(\'' + pid + "'," + i + ')">' + esc(x.t) + "</a>" + subs;
  }).join("");
  var ids = [], h = "";
  if(k === 0 && P.lead) h += P.lead.map(function(t){ return '<p class="ed rlead">' + t + "</p>"; }).join("");
  var solo = g.s.length === 1 && nm(g.s[0].h) === nm(g.t);
  h += g.s.map(function(s){ return secHtml(s, ids, solo); }).join("");
  APP.innerHTML = '<div class="lay' + (ST.fold ? " fold-on" : "") + '" id="lay"><aside class="side"><button class="fold" onclick="foldSide()" aria-label="Seitenleiste">‹</button>' + side + '</aside><main class="ct rgct"><h2>' + nm(g.t) + (solo ? pgl(g.s[0].p) : "") + "</h2>" + h + "</main></div>";
  window.__rgids = ids;
}
window.rgKat = function(pid, i){ ST.rg = ST.rg || {}; ST.rg[pid] = i; save(); page(pid); window.scrollTo(0, 0); };
window.rgScroll = function(pid, j, name){
  var el = null;
  if(j > -1){ var s = window.__rgids[j]; el = s && document.getElementById(s[0]); }
  else { var hs = document.querySelectorAll(".rgct .rh"); for(var q = 0; q < hs.length; q++) if(hs[q].textContent === nm(name)) el = hs[q]; }
  if(el) el.scrollIntoView({behavior:"smooth", block:"start"});
};
["proben", "kampf", "heilung", "manoever", "situationen"].forEach(function(id){ SWP["regeln/" + id] = function(){ page(id); }; });
})();
