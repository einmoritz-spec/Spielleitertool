/* Spielleiterschirm + Würfeltisch */
var WURF = {st:1, fe:2, vo:1, ab:0, res:null};
function wLabel(n){ return n === 6 ? "Triumph" : n >= 4 ? "Konflikt" : "Desaster"; }
function wWerfen(){
  var n = WURF.st + WURF.fe + WURF.vo, d = [], i;
  if(n < 1) n = 1;
  for(i = 0; i < n; i++) d.push(1 + Math.floor(Math.random() * 6));
  d.sort(function(a, b){ return b - a; });
  var dop = d.some(function(x, k){ return d.indexOf(x) !== k; });
  var r = d.slice(WURF.ab); var hoch = r.length ? r[0] : 0;
  var leer = (WURF.st + WURF.fe + WURF.vo) < 1;
  var erg = hoch === 0 ? "Desaster" : (leer && hoch === 6 ? "Konflikt" : wLabel(hoch));
  WURF.res = {d: d, abz: WURF.ab, hoch: hoch, erg: erg, dop: dop && r.length > 1 && r.some(function(x, k){ return r.indexOf(x) !== k; })};
  render();
}
function wSet(k, v){ WURF[k] = Math.max(k === "st" ? 0 : 0, Math.min(k === "st" ? 1 : k === "fe" ? 3 : k === "vo" ? 2 : 5, v)); render(); }
function wStepper(k, lab){ return '<div class="wst"><span>' + lab + '</span><button onclick="wSet(\'' + k + '\',' + (WURF[k] - 1) + ')">−</button><b>' + WURF[k] + '</b><button onclick="wSet(\'' + k + '\',' + (WURF[k] + 1) + ')">+</button></div>'; }
function wTisch(){
  var r = WURF.res, out = "";
  if(r){
    var dice = r.d.map(function(x, i){ return '<i class="wd' + (i < r.abz ? " cut" : "") + '">' + x + '</i>'; }).join("");
    out = '<div class="wres"><div class="wdice">' + dice + '</div><div class="wv ' + r.erg.toLowerCase() + '">' + r.erg + (r.dop ? ' <span class="wtw">+ Wendung (Pasch)</span>' : '') + '</div></div>';
  }
  return '<div class="wbox"><h3>Würfeltisch</h3><div class="wrow">' + wStepper("st", "Stärke (W6)") + wStepper("fe", "Fertigkeit/Sprache (W6)") + wStepper("vo", "Vorteil (W6)") + wStepper("ab", "Abzug") + '<button class="wgo" onclick="wWerfen()">Würfeln</button></div>' + out + '</div>';
}
function viewSchirm(){
  var gr = WS_SCHIRM.map(function(g){
    var cards = g.k.map(function(c){
      var h = '<div class="el sk"><h3>' + esc(c.t) + '</h3>';
      if(c.x) h += '<p>' + esc(c.x).replace(/\n/g, "<br>") + '</p>';
      if(c.l) h += '<ul class="bul">' + c.l.map(function(x){ return '<li>' + esc(x) + '</li>'; }).join("") + '</ul>';
      if(c.x2) h += '<p>' + esc(c.x2) + '</p>';
      if(c.z) h += '<dl class="sz2">' + c.z.map(function(z){ return '<dt>' + esc(z[0]) + '</dt><dd>' + esc(z[1]) + '</dd>'; }).join("") + '</dl>';
      return h + '</div>';
    }).join("");
    return '<h2 class="sec shd">' + esc(g.g) + ' <a class="pg" onclick="openBook(\'' + qBuch(g) + '\',' + g.p + ')">S. ' + g.p + '</a>' + qTag(g) + '</h2><div class="sg">' + cards + '</div>';
  }).join("");
  return '<div class="tabs"><a class="on">Spielleiterschirm</a></div><div class="pad">' + wTisch() + gr + '</div>';
}
