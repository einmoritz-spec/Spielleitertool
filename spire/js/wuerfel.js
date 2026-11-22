/* THE SPIRE – Würfel (Overlay, Taste „w“, Burger-Menü, Chip auf der Startseite).
   Kernmechanik S. 9: 1 W10 + 1 je Fertigkeit, Domäne, Meisterschaft; der höchste Würfel zählt.
   Schwierigkeit S. 10: zieht 0–2 Würfel ab; mindestens 1 Würfel, je Punkt bei 0 oder darunter eine Stufe schlechter.
   Kritischer Erfolg: +1 Stress je gewürfelter 10. Teilstress S. 9: beim reinen Abwehren von Schaden bei 6–7 eine Würfelgröße weniger.
   Stresswürfel W3/W6/W8 (S. 10) und W10. */
var WSTUFEN = [
  {r:"1",   t:"Kritischer Fehlschlag", z:"doppelter Stress"},
  {r:"2–5", t:"Fehlschlag",            z:"Stress nehmen"},
  {r:"6–7", t:"Erfolg mit Preis",      z:"Stress nehmen"},
  {r:"8–9", t:"Erfolg",                z:"kein Stress"},
  {r:"10",  t:"Kritischer Erfolg",     z:"+1 Stress je 10"}
];
var WRES = null, WSD = null;
function wSt(){ ST.wuerfel = ST.wuerfel || {f:1, d:1, m:0, s:0, a:0}; return ST.wuerfel; }
function wStufe(x){ return x <= 1 ? 0 : x <= 5 ? 1 : x <= 7 ? 2 : x <= 9 ? 3 : 4; }
function wPool(){ var W = wSt(); return 1 + W.f + W.d + W.m - W.s; }
function wSet(k, v){ wSt()[k] = v; save(); WRES = null; wDraw(); }
function wRoll(){
  var pool = wPool(), n = Math.max(1, pool), ab = pool < 1 ? 1 - pool : 0, d = [];
  for(var i = 0; i < n; i++) d.push(1 + Math.floor(Math.random() * 10));
  d.sort(function(a, b){ return b - a; });
  var roh = wStufe(d[0]);
  WRES = {d:d, pool:pool, n:n, ab:ab, roh:roh, st:Math.max(0, roh - ab), zehn:d.filter(function(x){ return x === 10; }).length, a:wSt().a};
  wDraw();
}
function wStress(n){ WSD = {n:n, v:1 + Math.floor(Math.random() * n)}; wDraw(); }
function wDraw(){
  var m = document.getElementById("wf"); if(!m) return;
  var W = wSt(), r = WRES;
  var jn = function(k, lab){ return '<div class="zeile">' + lab + '<span class="tg"><span class="' + (W[k] ? 'on' : '') + '" onclick="wSet(\'' + k + '\',1)">Ja</span><span class="' + (W[k] ? '' : 'on') + '" onclick="wSet(\'' + k + '\',0)">Nein</span></span></div>'; };
  var schw = '<div class="zeile">Schwierigkeit<span class="tg">' + [0, 1, 2].map(function(i){ return '<span class="' + (W.s === i ? 'on' : '') + '" onclick="wSet(\'s\',' + i + ')">' + i + '</span>'; }).join("") + '</span></div>';
  var pool = wPool(), wz = function(n){ return n + " Würfel"; };
  var rech = wz(1 + W.f + W.d + W.m) + (W.s ? " − Schwierigkeit " + W.s + " = " + String(pool).replace("-", "−") : "") + (pool < 1 ? " · 1 Würfel, " + (1 - pool) + (1 - pool === 1 ? " Stufe" : " Stufen") + " schlechter" : " · höchster zählt");
  var erg = "";
  if(r){
    var S = WSTUFEN[r.st], zus = "";
    if(r.st === 4 && r.zehn) zus = "+" + r.zehn + " Stress beim Gegner";
    else if(r.st === 2 && r.a) zus = "Stress eine Würfelgröße niedriger";
    else if(r.ab && r.roh !== r.st) zus = "Gewürfelt: " + WSTUFEN[r.roh].t;
    erg = '<div class="pool">' + r.d.map(function(x, i){ return '<i class="' + (i === 0 ? 'top' : '') + '">' + x + '</i>'; }).join("") + '</div>' +
      '<div class="res">' + esc(S.t) + '<small>' + esc(rech) + '</small>' + (zus ? '<em>' + esc(zus) + '</em>' : '') + '</div>';
  } else erg = '<div class="res" style="color:#9fb2c8;font-size:20px;margin-top:12px">' + wz(Math.max(1, pool)) + '<small>' + esc(rech) + '</small></div>';
  m.innerHTML = '<h3><span>Würfel' + pgl(9) + '</span><span class="x" onclick="wClose()" title="Schließen">×</span></h3>' +
    jn("f", "Fertigkeit") + jn("d", "Domäne") + jn("m", "Meisterschaft") + schw + jn("a", "Nur Schaden abwehren") +
    '<button class="los2" onclick="wRoll()">Würfeln</button>' + erg +
    '<table class="tab5">' + WSTUFEN.map(function(s, i){ return '<tr class="' + (r && r.st === i ? 'on' : '') + '"><td>' + s.r + '</td><td>' + esc(s.t) + ' (' + esc(s.z) + ')</td></tr>'; }).join("") + '</table>' +
    '<div class="st">' + [3, 6, 8, 10].map(function(n){ return '<button class="' + (WSD && WSD.n === n ? 'hit' : '') + '" onclick="wStress(' + n + ')">W' + n + (WSD && WSD.n === n ? ' · ' + WSD.v : '') + '</button>'; }).join("") + '</div>';
}
function wOpen(){
  var m = document.getElementById("wf"); if(m){ wClose(); return; }
  m = document.createElement("div"); m.id = "wf"; m.className = "wf"; document.body.appendChild(m); wDraw();
}
function wClose(){ var m = document.getElementById("wf"); if(m) m.remove(); }
