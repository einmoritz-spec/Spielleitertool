/* Würfel: Pool aus Fertigkeit + Aspekt + Vorteil; Abzüge streichen die höchsten Würfel; Ergebnis 6 Triumph · 4–5 Konflikt · 1–3 Desaster; Pasch = Wendung (S. 34–35) */
var WS = {f:1, a:1, v:0, cut:0, res:null, art:0};
var RARTEN = [["Aktion",35,"ergebnisse","Ergebnisse beim Aktionswurf"],["Angriff",58,"angreifen-abwehren","Ergebnisse des Angriffswurfs"],["Abwehr",59,"angreifen-abwehren","Ergebnisse des Abwehrwurfs"],["Sammeln",52,"sammeln","Ergebnisse des Sammelwurfs"],["Erholen",71,"montagen-erholen","Ergebnisse des Erholungswurfs"],["Organisieren",72,"montagen-organisieren","Ergebnisse des Organisierwurfs"],["Rätseln",74,"montagen-raetseln","Ergebnisse des Rätselwurfs"],["Kochen",76,"montagen-kochen","Ergebnisse des Kochwurfs"],["Herstellen",78,"montagen-herstellen","Ergebnisse des Herstellungswurfs"],["Glückswurf",36]];
function wErg(art){ var A = RARTEN[art]; if(!A[2]) return null; var k = (PI_NACH.regeln ? PI_NACH.regeln.kapitel : []).filter(function(x){ return x.id === A[2]; })[0], f = null; if(!k) return null;
  (function w(o){ if(f) return; if(Array.isArray(o)) o.forEach(w); else if(o && typeof o === "object"){ if(o.t === "erg" && o.h === A[3]) f = o; else Object.keys(o).forEach(function(q){ w(o[q]); }); } })(k.b); return f; }
function wArt(i){ WS.art = i; wDraw(); }
function wRoll(){
  var n = Math.min(6, WS.f + WS.a + WS.v), empty = n < 1, d = [], i; if(empty) n = 1;
  for(i = 0; i < n; i++) d.push(1 + Math.floor(Math.random() * 6));
  var sorted = d.slice().sort(function(a, b){ return b - a; }), kept = sorted.slice(Math.min(WS.cut, n - 1) || 0);
  var best = kept[0], cnt = {}, tw = false; d.forEach(function(x){ cnt[x] = (cnt[x] || 0) + 1; if(cnt[x] > 1) tw = true; });
  if(empty && best === 6) best = 5;
  WS.res = {d: d, cutN: Math.min(WS.cut, n - 1), best: best, tw: tw, empty: empty}; wDraw();
}
function wSet(k, v){ WS[k] = Math.max(0, v); wDraw(); }
function wDraw(){
  var m = document.getElementById("wm"); if(!m) return;
  var r = WS.res, n = Math.min(6, WS.f + WS.a + WS.v);
  var cnt = function(k, mx){ return '<div class="wc"><b>' + k[1] + '</b><span><button onclick="wSet(\'' + k[0] + '\',WS.' + k[0] + '-1)">−</button><i>' + WS[k[0]] + '</i><button onclick="wSet(\'' + k[0] + '\',Math.min(' + mx + ',WS.' + k[0] + '+1))">+</button></span></div>'; };
  var name = !r ? "" : r.best === 6 ? "Triumph" : r.best >= 4 ? "Konflikt" : "Desaster";
  var E = wErg(WS.art || 0), row = null, wrow = null;
  if(E && r){ E.rows.forEach(function(x){ if(x[0].indexOf(name) === 0) row = x; if(/^Wendung/.test(x[0])) wrow = x; }); }
  var txt = !r ? "" : row ? md(row[1]) : "";
  var dice = !r ? "" : r.d.map(function(x, i){ var s = r.d.slice().sort(function(a, b){ return b - a; }), cutv = s.slice(0, r.cutN); var isCut = false; if(r.cutN){ var c = r.d.slice(); var idx = []; s.slice(0, r.cutN).forEach(function(v){ var j = c.indexOf(v); c[j] = -1; idx.push(j); }); isCut = idx.indexOf(i) >= 0; } return '<span class="dv' + (isCut ? ' cut' : x === r.best && !isCut ? ' top' : '') + '">' + x + '</span>'; }).join("");
  m.querySelector(".wbody").innerHTML = '<div class="wcs">' + cnt(["f","Fertigkeit (bis 3)"], 3) + cnt(["a","Aspekt (bis 1)"], 1) + cnt(["v","Vorteil (bis 2)"], 2) + cnt(["cut","Abzug (höchste streichen)"], 5) + '</div><p class="gm">Pool: ' + (n < 1 ? "leer – 1 W6, Triumph zählt als Konflikt" : n + " W6") + '</p><button class="wgo" onclick="wRoll()">Würfeln</button>' + (r ? '<div class="wdice">' + dice + '</div><div class="wres ' + name + '"><h3>' + name + (r.tw ? ' <small>+ Wendung</small>' : '') + '</h3><p>' + txt + (r.tw && wrow ? '</p><p><b>Wendung:</b> ' + md(wrow[1]) : '') + '</p></div>' : '') + '<div class="warten">' + RARTEN.map(function(a, i){ return '<span class="chip' + (i === (WS.art || 0) ? '' : ' o') + '" style="--c:var(--ink)" onclick="wArt(' + i + ')">' + a[0] + '</span>'; }).join("") + '<span class="chip o" style="--c:var(--ink)" onclick="openBook(\'pi_core\',' + RARTEN[WS.art || 0][1] + ')">S. ' + RARTEN[WS.art || 0][1] + '</span>' + '</div>';
}
function wOpen(){ var m = document.getElementById("wm"); if(m){ m.remove(); return; } m = modal('<div class="wbody"></div>'); m.id = "wm"; m.querySelector("div").style.cssText += ";width:min(560px,94vw)"; wDraw(); }
function viewSchirm(){ location.hash = "nach/anhang/schirm"; return ""; }
function viewGalerie(){
  setTheme(false, "var(--teal)");
  var im = ["hero"].concat(["k01-welt","k02-grundregeln","k03-szenen","k04-montagen","k05-reisen","k06-kaefer-1","k07-kaefer-2","k08-picotitanen","k09-weber","k10-gefahren","k11-orte","k12-anhang"].map(function(x){ return "kapitel/" + x; })).concat(PI_REICHE.map(function(r){ return "reich/" + r.id; }));
  return '<div class="tabs"><a class="on">Galerie</a></div><div class="pad"><div class="grid3">' + im.map(function(s){ return '<img src="' + IMG(s) + '" alt="" style="width:100%;border-radius:12px;cursor:zoom-in" onclick="zoom(this.src)">'; }).join("") + '</div></div>';
}
