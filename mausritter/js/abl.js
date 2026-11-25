/* Gemeinsame Bausteine der drei Abenteuer: Leiste mit Reitern + Zeit, Karte mit Pins, Notizen */
if(window.NotePop) NotePop.reg("mr", function(k){ return store("n_" + k) || ""; }, function(k, v){ store("n_" + k, v); });
function notiz(k){ return window.NotePop ? NotePop.tile("mr", k).replace(/<span class="nt-t">[^<]*<\/span>/, "") : ""; }

/* Zeit: Jedes X ≈ 10 Minuten, bei jedem dritten X eine Begegnung */
function uhr(area){
  var n = store("zeit_" + area) || 0, h = "";
  for(var i = 0; i < 12; i++) h += '<i class="' + (i < n ? "x" : "") + '" onclick="zeitTog(\'' + area + '\',' + i + ')">' + (i < n ? "×" : "") + '</i>';
  return '<div class="uhr" id="uhr">Zeit<div class="g">' + h + '</div><span class="r0" onclick="zeitTog(\'' + area + '\',-1)" title="Zurücksetzen"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12a8 8 0 1 0 3-6.2M4 4v5h5"/></svg></span></div>';
}
function zeitTog(area, i){
  var n = store("zeit_" + area) || 0; n = (i < 0) ? 0 : (n === i + 1 ? i : i + 1); store("zeit_" + area, n);
  var u = document.getElementById("uhr"); if(u) u.outerHTML = uhr(area);
}
function abl(area, titel, tabs, cur, nk){
  return '<div class="abl"><span class="ti">' + esc(titel) + '</span>' + tabs.map(function(t){ return '<a class="' + (t[0] === cur ? "on" : "") + '" onclick="go(\'' + area + '/' + t[0] + '\')">' + esc(t[1]) + '</a>'; }).join("") +
    '<div class="rr">' + (nk ? notiz(nk) : "") + uhr(area) + '</div></div>';
}
function tabCur(tabs, t){ return tabs.filter(function(x){ return x[0] === t; })[0] ? t : tabs[0][0]; }

/* Karte links mit Pins, rechts der gewählte Ort */
function kvMap(o){
  var sel = o.items.filter(function(i){ return String(i.nr) === String(o.cur); })[0] || o.items[0];
  var pins = o.items.map(function(i){
    var p = o.pins[i.nr]; if(!p) return "";
    return '<a class="pin' + (o.kind ? " " + o.kind : "") + (i === sel ? " on" : "") + '" style="left:' + p[0] + '%;top:' + p[1] + '%" onclick="go(\'' + o.area + '/' + o.tab + '/' + i.nr + '\')" title="' + esc(i.name) + '"><span>' + i.nr + '</span></a>';
  }).join("");
  var chips = o.items.map(function(i){ return '<a class="' + (i === sel ? "on" : "") + '" onclick="go(\'' + o.area + '/' + o.tab + '/' + i.nr + '\')">' + i.nr + ' · ' + esc(i.name) + '</a>'; }).join("");
  return '<div class="kv"><div class="map"><div class="mapw"><img src="' + IMG(o.img) + '" alt="">' + pins + '</div><div class="olist">' + chips + '</div>' + (o.unter || "") + '</div><div class="ort">' + o.body(sel) + '</div></div>';
}
function ortKopf(nr, name, p, zusatz){ return '<div class="oh"><span class="nr">' + nr + '</span><h2>' + esc(name) + '</h2>' + pg(p) + (zusatz || "") + '</div>'; }
function liste(a){ return a && a.length ? '<ul>' + a.map(function(x){ return '<li>' + md(x) + '</li>'; }).join("") + '</ul>' : ""; }
function seite(titel, p, inhalt, voll){ return '<div class="rp' + (voll ? " voll" : "") + '"><div class="ph"><h1>' + esc(titel) + '</h1>' + (p ? pg(p) : "") + '</div>' + inhalt + '</div>'; }
