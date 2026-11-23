/* Arkand – Stadt der Wellen und Flammen (Untersetting von Dragonbane)
   #arkand                         Übersicht: große Stadtkarte mit Orten + die drei Bände (Stadt · Hafen · Dung)
   Bände: #k/ark · #k/ark-hafen · #k/ark-dung · Tafeln: #a/ark-<id>/<tab> (Motor: abenteuer.js, Daten: data/ark-*.js, ab-ark-*.js) */
"use strict";
/* Orte auf der Stadtkarte (x/y in % des zusammengesetzten Kartenbilds) */
window.ARK_ORTE = [
  {id:"ark-gilde",   t:"Die Gilde der Wellen",       x:26.4, y:63.1},
  {id:"ark-feder",   t:"Das Handelshaus Weiße Feder", x:38.2, y:62.8},
  {id:"ark-tiefe",   t:"Der Tod in der Tiefe",        x:43.2, y:57.0},
  {id:"ark-tinte",   t:"Die Seelentinte",             x:61.8, y:56.7},
  {id:"ark-perle",   t:"Die Gesprungene Perle",       x:62.4, y:63.2},
  {id:"ark-einhorn", t:"Das Witzlose Einhorn",        x:58.2, y:64.6},
  {id:"ark-palast",  t:"Der Palast der Verjüngung",   x:60.7, y:67.4},
  {id:"ark-tempel",  t:"Der Tempel des Endlosen Meeres", x:23.5, y:82.0}
];
var ARK_GEBIETE = [
  {go:"k/ark",       t:"Die Stadt", x:62, y:37, w:30},
  {go:"k/ark-hafen", t:"Der Hafen", x:30, y:50, w:16},
  {go:"k/ark-dung",  t:"Der Dung",  x:61, y:50, w:12}
];
DB_VIEWS.arkand = function(){
  window.__bk = "db_ark";
  var pins = ARK_ORTE.map(function(o){
    var A = advOf(o.id), ok = A && !A.stub;
    return '<a class="ap' + (ok ? '' : ' off') + '" style="left:' + o.x + '%;top:' + o.y + '%" onclick="go(\'a/' + o.id + '/lage\')"><i></i><span>' + esc(A ? A.t : o.t) + '</span></a>';
  }).join("");
  var geb = ARK_GEBIETE.map(function(g){ return '<a class="ag" style="left:' + g.x + '%;top:' + g.y + '%" onclick="go(\'' + g.go + '\')"><span>' + esc(g.t) + '</span></a>'; }).join("");
  var karten = ["ark", "ark-hafen", "ark-dung"].map(function(id){
    var b = DB_BAND[id], a = bandAb(b), n = a.length;
    return '<a class="ab3" onclick="go(\'k/' + id + '\')">' + (b.img ? '<img src="' + IMG(b.img) + '" alt="">' : '') + '<div class="at"><b>' + esc(b.t) + '</b><span>' + (n > 1 ? n + ' Orte' : 'Das Lied des Mantikors') + '</span></div></a>';
  }).join("");
  return '<div class="ark2"><div class="am2"><div class="am"><img src="' + IMG("abenteuer/ark-karte") + '" alt="Karte von Arkand" onclick="zoom(this.src)">' + geb + pins + '</div></div><div class="arkbd2">' + karten + '</div></div>';
};
