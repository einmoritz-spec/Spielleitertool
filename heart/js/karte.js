/* Karte des Herzens (Taste „m“): Sechseckkarte aus dem Grundbuch (S. 208–209).
   Landmarken auf Felder setzen, Delves als Verbindungen ziehen. Stand in ST.karte. */
(function(){
"use strict";
var W = 1589, H = 1101, R = 93, CX = 1030, CY = 309, DX = 139.5, DY = 162;
function K(){ ST.karte = ST.karte || {f:{}, l:[]}; return ST.karte; }
function mitte(i, j){ return [CX + DX * i, CY + DY * j + ((i % 2 + 2) % 2 ? DY / 2 : 0)]; }
function felder(){
  var A = [];
  for(var i = -8; i <= 5; i++) for(var j = -3; j <= 6; j++){
    var m = mitte(i, j); if(m[0] < -R * 0.4 || m[0] > W + R * 0.4 || m[1] < -DY * 0.4 || m[1] > H + DY * 0.4) continue;
    A.push({k: i + "," + j, x: m[0], y: m[1]});
  }
  return A;
}
function hexPts(x, y, r){ var p = []; for(var a = 0; a < 6; a++){ var t = Math.PI / 3 * a; p.push((x + r * Math.cos(t)).toFixed(1) + "," + (y + r * Math.sin(t)).toFixed(1)); } return p.join(" "); }
function lmById(id){ return (window.HT_LM || []).filter(function(l){ return l.id === id; })[0]; }
function name(f){ var l = f.id && lmById(f.id); return l ? l.t : (f.t || "?"); }
var wahl = null, verb = null;
function view(){
  var k = K(), F = felder(), byK = {}; F.forEach(function(f){ byK[f.k] = f; });
  var svg = '<svg class="khex" viewBox="0 0 ' + W + " " + H + '">';
  k.l.forEach(function(L, n){
    var a = byK[L[0]], b = byK[L[1]]; if(!a || !b) return;
    svg += '<line x1="' + a.x + '" y1="' + a.y + '" x2="' + b.x + '" y2="' + b.y + '"/>';
  });
  F.forEach(function(f){
    var on = k.f[f.k];
    svg += '<polygon class="' + (on ? "voll" : "") + (wahl === f.k ? " sel" : "") + (verb === f.k ? " verb" : "") + '" points="' + hexPts(f.x, f.y, R - 4) + '" onclick="kFeld(\'' + f.k + '\')"/>';
  });
  svg += "</svg>";
  var plates = Object.keys(k.f).map(function(key){
    var f = byK[key], v = k.f[key]; if(!f) return "";
    var l = v.id && lmById(v.id);
    return '<div class="kpl' + (wahl === key ? " sel" : "") + (verb === key ? " verb" : "") + '" style="left:' + (f.x / W * 100) + "%;top:" + (f.y / H * 100) + '%" onclick="kFeld(\'' + key + '\')"><b>' + esc(name(v)) + "</b>" + (l ? "<small>" + (typeof l.tiefe === "number" ? "Tiefe " + l.tiefe : esc(String(l.tiefe))) + " · " + esc(String(l.stress || "").split(/[ ,(]/)[0]) + "</small>" : "") + "</div>";
  }).join("");
  var marks = k.l.map(function(L, n){
    var a = byK[L[0]], b = byK[L[1]]; if(!a || !b) return "";
    return '<div class="kdl" style="left:' + ((a.x + b.x) / 2 / W * 100) + "%;top:" + ((a.y + b.y) / 2 / H * 100) + '%" onclick="kDelve(' + n + ')" title="Delve">' + esc(L[2] || "·") + "</div>";
  }).join("");
  var leiste = "";
  if(wahl){
    var v = k.f[wahl], l = v && v.id && lmById(v.id);
    leiste = '<div class="kbar"><b>' + esc(name(v)) + "</b>" + (l ? '<button onclick="go(\'lm/' + l.id + '\')">Landmarke öffnen</button>' : v && v.dk ? '<button onclick="go(\'dagger/' + v.dk.split("/")[0] + "/landmarken/" + v.dk.split("/")[1] + '\')">Landmarke öffnen</button>' : "") + '<button onclick="kVerb()">' + (verb ? "Abbrechen" : "Delve ziehen") + '</button><button onclick="kWahl()">Landmarke ändern</button><button onclick="kWeg()">Entfernen</button><button onclick="kZu()">✕</button></div>';
  }
  return window.spielNav("karte") + '<div class="kwrap"><button class="kbsp" onclick="go(\'kampagne\')">Beispielkampagne</button><div class="kmap" style="background-image:url(' + IMG("karte-s208") + ')">' + svg + marks + plates + "</div>" + leiste + "</div>";
}
window.kFeld = function(key){
  var k = K();
  if(verb && verb !== key && k.f[key]){
    var a = verb, ex = k.l.filter(function(L){ return (L[0] === a && L[1] === key) || (L[1] === a && L[0] === key); })[0];
    if(!ex) k.l.push([a, key, ""]);
    verb = null; wahl = key; save(); render(); return;
  }
  if(!k.f[key]){ wahl = key; pick(key); return; }
  wahl = wahl === key ? null : key; verb = null; render();
};
window.kVerb = function(){ verb = verb ? null : wahl; render(); };
window.kZu = function(){ wahl = null; verb = null; render(); };
window.kWeg = function(){ var k = K(); delete k.f[wahl]; k.l = k.l.filter(function(L){ return L[0] !== wahl && L[1] !== wahl; }); wahl = null; save(); render(); };
window.kWahl = function(){ pick(wahl); };
window.kDelve = function(n){
  var k = K(), L = k.l[n];
  var m = modal('<div class="kpick"><h2>Delve</h2><p>' + esc(name(k.f[L[0]] || {})) + " → " + esc(name(k.f[L[1]] || {})) + '</p><label>Resistenz <input type="number" min="0" value="' + esc(L[2]) + '" id="kres"></label><div class="kbtn"><button id="kok">Übernehmen</button><button id="kdel">Verbindung entfernen</button></div></div>');
  m.querySelector("#kok").onclick = function(){ L[2] = m.querySelector("#kres").value; save(); m.remove(); render(); };
  m.querySelector("#kdel").onclick = function(){ k.l.splice(n, 1); save(); m.remove(); render(); };
};
function pick(key){
  var L = (window.HT_LM || []).slice(), ST2 = [["0","Tiefe 0"],["1","Tiefe 1"],["2","Tiefe 2"],["3","Tiefe 3"],["ungebunden","Ungebunden"],["risse","Risse"],["himmel","Die Acht Himmel"]];
  var liste = function(q){
    q = (q || "").toLowerCase();
    return ST2.map(function(s){
      var X = L.filter(function(l){ return String(l.tiefe) === s[0] && (!q || l.t.toLowerCase().indexOf(q) >= 0); });
      return X.length ? "<h3>" + s[1] + "</h3><div class=\"kpg\">" + X.map(function(l){ return '<button data-id="' + l.id + '">' + esc(l.t) + "</button>"; }).join("") + "</div>" : "";
    }).join("") + (function(){
      var D = window.HT_DAGGER; if(!D) return "";
      return Object.keys(D.kap).map(function(n){
        var X = (D.kap[n].lm || []).filter(function(l){ return !l.extern && (!q || l.t.toLowerCase().indexOf(q) >= 0); });
        return X.length ? "<h3>Dagger in the Heart · Kapitel " + n + '</h3><div class="kpg">' + X.map(function(l){ return '<button data-dk="' + n + "/" + l.id + '" data-t="' + esc(l.t) + '">' + esc(l.t) + "</button>"; }).join("") + "</div>" : "";
      }).join("");
    })();
  };
  var m = modal('<div class="kpick"><h2>Landmarke setzen</h2><input id="kq" placeholder="Suchen oder eigenen Namen eingeben …" autocomplete="off"><div id="kl">' + liste("") + '</div><div class="kbtn"><button id="keig">Eigenen Namen setzen</button></div></div>');
  var q = m.querySelector("#kq"); setTimeout(function(){ q.focus(); }, 30);
  q.oninput = function(){ m.querySelector("#kl").innerHTML = liste(q.value); };
  function setze(v){ K().f[key] = v; wahl = key; save(); m.remove(); render(); }
  m.querySelector("#kl").onclick = function(e){ var b = e.target.closest("button"); if(b) setze(b.dataset.dk ? {t: b.dataset.t, dk: b.dataset.dk} : {id: b.dataset.id}); };
  m.querySelector("#keig").onclick = function(){ if(q.value.trim()) setze({t: q.value.trim()}); };
  q.onkeydown = function(e){ if(e.key === "Enter"){ var b = m.querySelector("#kl button"); if(b && q.value) setze({id: b.dataset.id}); else if(q.value.trim()) setze({t: q.value.trim()}); } };
}
VIEWS.karte = view;
document.addEventListener("keydown", function(e){
  if(/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "") || e.ctrlKey || e.metaKey || e.altKey || document.querySelector(".modal,.gs")) return;
  if(e.key === "m"){ e.preventDefault(); go("karte"); }
});
})();
