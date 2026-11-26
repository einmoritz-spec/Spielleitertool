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
var uid = 0, ZUS = window.SW_REGELN_ZUS || {};
function offOf(bk){ var o = 1; (window.SW_BUECHER || []).forEach(function(g){ g.items.forEach(function(b){ if(b.id === bk) o = b.off; }); }); return o; }
function pgb(bk, p){ return '<span class="pg" onclick="openBook(\'' + bk + "'," + (p + offOf(bk)) + ')">S. ' + p + "</span>"; }
function act(q){ return q === "GRW" || gen(q.toLowerCase()); }
function badge(q){ return '<i class="sq sq-' + q.toLowerCase() + '">' + q + "</i>"; }
function srcHtml(s){ /* Quellen-Kennzeichnung + Seitenlinks nur für aktive Genres */
  return (s.s || []).filter(function(x){ return act(x[0]); }).map(function(x){ return badge(x[0]) + pgb(x[1], x[2]); }).join("");
}
function lab(t){ var m = /^([^.:]{2,42}): ([\s\S]*)$/.exec(t); if(!m) return esc(t); return "<b>" + esc(m[1]) + ":</b> " + esc(m[2]); }
function zul(items){ return '<ul class="rl">' + items.map(function(x){
  if(typeof x === "string") return "<li>" + lab(x) + "</li>";
  return "<li>" + lab(x[0]) + '<ul class="rl">' + x[1].map(function(y){ return "<li>" + lab(y) + "</li>"; }).join("") + "</ul></li>"; }).join("") + "</ul>"; }
function zblocks(bs){
  return bs.map(function(b){
    switch(b[0]){
      case "p": return '<p class="ed rp">' + lab(b[1]) + "</p>";
      case "note": return '<p class="ed rp">' + lab(b[1]) + "</p>";
      case "ph": return '<p class="ed rp">' + b[1] + "</p>";
      case "ul": return zul(b[1]);
      case "uh": return '<ul class="rl">' + b[1].map(function(x){ return "<li>" + x + "</li>"; }).join("") + "</ul>";
      case "q": return '<blockquote class="rq">' + esc(b[1]) + "<cite>— " + esc(b[2]) + "</cite></blockquote>";
      case "tbl": var raw = b[5], wide = b[2].length > 2 || b[3].length > 8 || b[3].some(function(r){ return r[0].length > 30; });
        var th = tab({t:b[1], cols:b[2].map(esc), rows:b[3].map(function(r){ return r.map(function(c){ return raw ? c : esc(c); }); }), fn:b[4] ? esc(b[4]) : ""}, wide);
        return b[3].some(function(r){ return r[0].length > 30; }) ? th.replace('class="rt wide"', 'class="rt wide wrapk"') : th;
      case "box": var only = b[2].every(function(x){ return x[0] === "p"; });
        if(only && /^Beispiel/.test(b[1])) return '<aside class="rb"><b>' + esc(b[1]) + ":</b> " + b[2].map(function(x){ return lab(x[1]); }).join("</p><p>") + "</aside>";
        return '<div class="bx"><h5>' + nm(b[1]) + "</h5>" + zblocks(b[2]) + "</div>";
    }
    return "";
  }).join("");
}
/* Gruppen zusammenführen: GRW-Kategorien + Zusatzabschnitte (nur aktive Quellen) */
function groups(pid){
  var P = RG[pid], L = P.g.map(function(g){ return {t:g.t, grw:1, s:g.s.map(function(x){ return {h:x.h, p:x.p, b:x.b, base:1, s:[["GRW", "sw_de", x.p]]}; })}; });
  (ZUS[pid] || []).forEach(function(z){
    if(!z.s.some(function(x){ return act(x[0]); })) return;
    var g = L.filter(function(x){ return x.t === z.cat; })[0];
    if(!g){ g = {t:z.cat, s:[], srcs:[]}; L.push(g); }
    g.s.push(z);
    z.s.forEach(function(x){ if(act(x[0]) && g.srcs && g.srcs.indexOf(x[0]) < 0) g.srcs.push(x[0]); });
  });
  return L;
}
function secHtml(s, ids, solo){
  var id = "rs" + (++uid); ids.push([id, s.h]);
  if(s.base){
    if(solo) return '<section class="rs" id="' + id + '">' + blocks(s.b) + "</section>";
    return '<section class="rs" id="' + id + '"><h4 class="rk" style="--rc:' + RCOL + '"><span>' + nm(s.h) + "</span>" + pgl(s.p) + "</h4>" + blocks(s.b) + "</section>";
  }
  var ab = (s.s.filter(function(x){ return act(x[0]); })[0] || s.s[0])[1], at = ' id="' + id + '" data-pgbook="' + ab + '"';
  if(solo || s.h == null) return '<section class="rs"' + at + ">" + zblocks(s.b) + "</section>";
  return '<section class="rs"' + at + '><h4 class="rk" style="--rc:' + RCOL + '"><span>' + nm(s.h) + "</span>" + srcHtml(s) + "</h4>" + zblocks(s.b) + "</section>";
}
function page(pid){
  var P = RG[pid], gs = groups(pid), k = (ST.rg && ST.rg[pid]) || 0; if(!gs[k]) k = 0;
  var g = gs[k];
  var side = gs.map(function(x, i){
    var on = i === k, subs = "";
    if(on){
      var L = [], seen = {};
      if(x.s.length > 1) x.s.forEach(function(s, j){ if(s.h != null && !seen[s.h]){ seen[s.h] = 1; L.push([j, s.h]); } });
      else if(x.s[0].base) x.s[0].b.forEach(function(b){ if(b[0] === "h") L.push([-1, b[1]]); });
      subs = L.map(function(l){ return '<a class="sb" onclick="rgScroll(\'' + pid + "'," + l[0] + ",'" + l[1].replace(/'/g, "\\'") + '\')">' + esc(l[1]) + "</a>"; }).join("");
    }
    return '<a class="' + (on ? "on" : "") + '" onclick="rgKat(\'' + pid + "'," + i + ')">' + esc(x.t) + (x.srcs ? x.srcs.map(badge).join("") : "") + "</a>" + subs;
  }).join("");
  var ids = [], h = "";
  if(k === 0 && P.lead) h += P.lead.map(function(t){ return '<p class="ed rlead">' + t + "</p>"; }).join("");
  var solo = g.s.length === 1 && g.s[0].h != null && nm(g.s[0].h) === nm(g.t);
  h += g.s.map(function(s){ return secHtml(s, ids, solo); }).join("");
  var hp = solo ? (g.s[0].base ? pgl(g.s[0].p) : srcHtml(g.s[0])) : (g.srcs && g.srcs.length ? g.srcs.map(badge).join("") : "");
  APP.innerHTML = '<div class="lay' + (ST.fold ? " fold-on" : "") + '" id="lay"><aside class="side"><button class="fold" onclick="foldSide()" aria-label="Seitenleiste">‹</button>' + side + '</aside><main class="ct rgct"><h2>' + nm(g.t) + hp + "</h2>" + h + "</main></div>";
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
