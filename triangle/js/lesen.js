/* TRIANGLE AGENCY – Bausteine der Leseseiten. TA_TEXT["h/…"] = [Blöcke]; taB(Blöcke) baut das HTML.
   Beschreibung aller Bausteine mit Beispielen: plan/triangle/HANDBUCH_BRIEF.md

   Auszeichnung im Text (tx):
     **fett**  *kursiv*  {3} rote Drei  <Arbeit/Spiel> Klammerpaar  [[A1]] Playwall-Verweis  {S.34} Seitenverweis
     Die Wörter Agency (rot), Anomalie/Anomalien/anomal (blau) färben sich von selbst wie im Buch. */
"use strict";
function tx(s){
  s = esc(s)
    .replace(/&lt;([^&\/]{1,40}\/[^&]{1,60})&gt;/g, '<i class="kl">&lt;$1&gt;</i>')
    .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\*(.+?)\*/g, "<i>$1</i>")
    .replace(/\{(\d+)\}/g, '<b class="drei">$1</b>')
    .replace(/\{S\.\s?(\d+)\}/g, function(m, p){ return pgl(+p); })
    .replace(/\[\[([A-Z]\d{1,2})\]\]/g, '<a class="gehzu" onclick="pwPop(\'$1\')">$1</a>')
    .replace(/\n/g, "<br>");
  /* Firmenfarben: nur außerhalb von Tags */
  return s.replace(/(^|>)([^<]+)/g, function(m, a, t){
    return a + t.replace(/\b(Triangle Agency|Agency(?:OS)?)\b/g, '<span class="ag">$1</span>').replace(/\b(Anomalien?|Anomalie-|anomale[rnms]?|anomal)\b/g, '<span class="an">$1</span>');
  });
}
function pwPop(code){ go("pw/" + code); }
function zimg(n, cls){ return '<img class="' + (cls || "") + '" src="' + Z(n) + '" alt="">'; }
var WF = {};
function wfKlick(id, i){ WF[id] = WF[id] || {}; WF[id][i] = !WF[id][i]; render(); }
function taB(L){
  return (L || []).map(function(b){
    if(typeof b === "string") return "<p>" + tx(b) + "</p>";
    switch(b.t){
      /* Überschriften */
      case "h": return '<h2' + (b.z ? ' class="mz"' : '') + '>' + (b.z ? zimg(b.z) : '') + tx(b.x) + '</h2>';
      case "h3": return "<h3>" + tx(b.x) + "</h3>";
      case "lead": return '<p class="lead">' + tx(b.x) + "</p>";
      case "klein": return '<p class="klein">' + tx(b.x) + "</p>";
      /* Aufbau */
      case "sp": return '<div class="sp sp' + b.x.length + (b.eng ? " eng" : "") + '">' + b.x.map(function(c){ return "<div>" + taB(c) + "</div>"; }).join("") + "</div>";
      case "bild": return '<img class="bild ' + (b.pos || "rechts") + '" style="' + (b.w ? "width:" + b.w + "px" : "") + '" src="' + IMG("regeln/full/" + b.src) + '" alt="" onclick="zoom(this.src)">';
      case "ende": return '<div class="ende"></div>';
      /* Listen */
      case "liste": return '<ul class="dl">' + b.x.map(function(x){ return "<li>" + tx(x) + "</li>"; }).join("") + "</ul>";
      case "num": return '<ol class="nl">' + b.x.map(function(x, i){ return "<li><em>" + (i + 1) + "</em><div>" + (x.h ? "<b>" + tx(x.h) + "</b> " : "") + tx(x.x || x) + "</div></li>"; }).join("") + "</ol>";
      case "gebot": return '<div class="gebot">' + b.x.map(function(x, i){ return '<section><em>' + (i + 1) + '</em><h3>' + tx(x.h) + '</h3>' + (x.s ? '<small>' + tx(x.s) + '</small>' : '') + '<p>' + tx(x.x) + '</p></section>'; }).join("") + "</div>";
      case "pikto": return '<div class="pikto' + (b.pfeil ? " pfeil" : "") + '">' + b.x.map(function(x){ return '<section><div class="pz">' + (x.z ? zimg(x.z) : '<b>' + esc(x.n || "") + '</b>') + '</div><div><h3>' + tx(x.h) + '</h3>' + (x.b ? taB(x.b) : '<p>' + tx(x.x) + '</p>') + '</div></section>'; }).join("") + "</div>";
      case "skala": return '<div class="skala' + (b.breit ? " breit" : "") + '">' + b.x.map(function(x){ return '<div><b>' + tx(x[0]) + '</b><span>' + tx(x[1]) + '</span></div>'; }).join("") + "</div>";
      case "tab": return '<table class="tab">' + (b.kopf ? "<tr>" + b.kopf.map(function(h){ return "<th>" + tx(h) + "</th>"; }).join("") + "</tr>" : "") + b.x.map(function(r){ return "<tr>" + r.map(function(c){ return "<td>" + tx(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</table>";
      /* Kästen */
      case "kasten": return '<div class="kasten' + (b.dunkel ? " dunkel" : "") + (b.cls ? " " + b.cls : "") + '">' + (b.h ? '<h3>' + (b.z ? zimg(b.z) : '') + tx(b.h) + '</h3>' : '') + '<div class="kb">' + taB(b.b) + '</div></div>';
      case "warn": return '<div class="warn">' + zimg(b.z || "symbol-warnung") + '<div><h3>' + tx(b.h) + '</h3>' + taB(b.b) + '</div></div>';
      case "fenster": return '<div class="fenster ' + (b.art || "") + '"' + (b.w ? ' style="max-width:' + b.w + 'px"' : '') + '><div class="ft">' + (b.z ? zimg(b.z) : '') + '<span>' + tx(b.titel || "") + '</span><i>×</i></div><div class="fb">' + (b.gross ? zimg(b.gross, "gross") : '') + (b.h ? '<h3>' + tx(b.h) + '</h3>' : '') + taB(b.b) + '</div></div>';
      case "schwarz": return '<p class="schwarz' + (b.blau ? " blau" : "") + '" onclick="this.classList.toggle(\'auf\')"><span>' + tx(b.x) + '</span></p>';
      case "stempel": return '<div class="stempel">' + tx(b.x) + '</div>';
      /* Regeln */
      case "wurf": return '<div class="wurf">' + b.x.map(function(x){ return '<section class="' + (x.ok ? "ok" : "nein") + '"><div class="wi"><img src="' + IMG("regeln/full/" + x.img) + '" alt=""><em></em></div><p>' + tx(x.x) + '</p></section>'; }).join("") + "</div>";
      case "dialog": return '<div class="dialog">' + b.x.map(function(z){ return '<p class="' + (/^GM/.test(z[0]) ? "gm" : "") + '"><b>' + esc(z[0]) + ':</b> ' + tx(z[1]) + '</p>'; }).join("") + "</div>";
      case "preis": return '<div class="preis">' + b.x.map(function(x){ return '<section><h3><span class="pt">' + tx(x.h) + '</span><span class="pp">' + esc(x.p) + zimg("symbol-belobigung") + '</span></h3>' + (x.z ? zimg(x.z, "pz2") : '') + (x.b ? taB(x.b) : '<p>' + tx(x.x) + '</p>') + '</section>'; }).join("") + "</div>";
      case "leiste": return '<div class="leiste" style="--c:' + (b.c || "var(--akz)") + '">' + (b.h ? '<b>' + tx(b.h) + '</b>' : '') + '<div>' + b.x.map(function(n){ return '<u>' + esc(n) + '</u>'; }).join("") + '</div></div>';
      case "wf": var id = b.id || "wf"; return '<div class="wf"><h3>' + zimg("symbol-qualitaetssicherung") + tx(b.h) + '</h3><small>' + tx(b.s || "Wahr oder falsch?") + '</small>' + b.x.map(function(x, i){ var auf = WF[id] && WF[id][i];
        return '<section class="' + (auf ? "auf" : "") + '" onclick="wfKlick(\'' + id + '\',' + i + ')"><em>' + (i + 1) + '</em><div>' + tx(x.f) + (auf ? '<p class="' + (x.a ? "w" : "f") + '"><b>' + (x.a ? "Wahr." : "Falsch.") + '</b> ' + tx(x.e || "") + '</p>' : '') + '</div></section>'; }).join("") + '</div>';
      /* ---- ARK-Bausteine ---- */
      case "faehig": return '<section class="fk"><div><h3>' + tx(b.h) + '</h3><p>' + tx(b.x) + '</p>' + b.erg.map(function(e){ return '<p class="erg"><img src="' + Z({ok:"ergebnis-erfolg-dreieck", plus:"ergebnis-zusatz-dreieck", nein:"ergebnis-fehlschlag-kreis"}[e[0]]) + '" alt=""><span>' + tx(e[1]) + '</span></p>'; }).join("") + (b.b ? taB(b.b) : '') + '</div>' +
        (b.f ? '<div class="fa"><p><b>F:</b> ' + tx(b.f).replace(/ …/g, "\u00a0…") + '</p>' + b.a.map(function(a){ return '<p><b>A:</b> ' + tx(a[0]) + ' <a class="co" onclick="pwPop(\'' + a[1] + '\')"><i></i><i></i><i></i>' + a[1] + '</a></p>'; }).join("") + '</div>' : '') + '</section>';
      case "w4": return '<div class="w4">' + (b.h ? '<h3>' + tx(b.h) + '</h3>' : '') + (b.b ? taB(b.b) : '') + '<ol>' + b.x.map(function(x, i){ return '<li' + (i === 2 ? ' class="d"' : '') + '><em>' + (i + 1) + '</em>' + tx(x) + '</li>'; }).join("") + '</ol></div>';
      case "ausloeser": return '<div class="ak aus"><h3>' + tx(b.h) + '</h3><div class="sp sp2">' + b.b.map(function(c){ return '<div>' + taB(c) + '</div>'; }).join("") + '</div></div>';
      case "spur": return '<div class="spur"><b>' + tx(b.h) + '</b><div><i class="pfl"></i>' + b.x.map(function(n){ return '<u' + (n === "X" ? ' class="x"' : n === "3" ? ' class="d"' : '') + '>' + esc(n) + '</u>'; }).join("") + '</div></div>';
      case "ventil": return '<div class="ak ven"><img src="' + Z("symbol-burnout") + '" alt=""><h3>' + tx(b.h) + '</h3><p>' + tx(b.x) + '</p></div>';
      case "fragebogen": return '<div class="ak fra"><i>?</i><h3>' + tx(b.h || "Fragen zum Arbeitsantritt") + '</h3><ul class="dl">' + b.x.map(function(x){ return '<li>' + tx(x) + '</li>'; }).join("") + '</ul></div>';
      case "matrix": return '<div class="ak mat"><div><h3>' + tx(b.h || "Beziehungsmatrix") + '</h3>' + taB(b.b) + '</div><ol>' + b.x.map(function(x){ return '<li><b>' + tx(x.f) + '</b><span>Beispiele: <i>' + tx(x.bsp) + '</i></span></li>'; }).join("") + '</ol></div>';
      case "direktive": return '<div class="ak dir"><img src="' + Z("symbol-verweis") + '" alt=""><small>Oberste Direktive</small><h3>' + tx(b.h) + '</h3><p>' + tx(b.x) + '</p></div>';
      case "gebilligt": return '<div class="ak geb"><img src="' + Z("symbol-belobigung") + '" alt=""><h3>Gebilligtes Verhalten</h3><p>Erhalte <b>1 Belobigung</b>, jedes Mal wenn du:</p><ul class="dl">' + b.x.map(function(x){ return '<li>' + tx(x) + '</li>'; }).join("") + '</ul><p>' + tx(b.bonus) + '</p></div>';
      case "erst": return '<div class="ak ers"><small>Erst-Anforderung</small><h3>' + tx(b.h) + '</h3>' + (b.b ? taB(b.b) : '<p>' + tx(b.x) + '</p>') + '</div>';
      case "selbst": return '<div class="selbst"><div><h2>Selbsteinschätzung</h2>' + taB(b.b) + '</div><ol>' + b.x.map(function(x, i){ return '<li><em>' + (i + 1) + '</em><div><b>' + tx(x.f).replace(/ …/g, "\u00a0…") + '</b><ul class="dl">' + x.a.map(function(a){ return '<li>' + tx(a[0]) + ' <span class="qs">+{3} ' + esc(a[1]) + '</span></li>'; }).join("").replace(/\{3\}/g, '<b class="drei">3</b>') + '</ul></div></li>'; }).join("") + '</ol></div>';
      case "zitat": return '<div class="zitat">' + tx(b.x) + '</div>';
      case "html": return b.x;
    }
    return "";
  }).join("");
}
/* Schaubild „Probleme pro Chaos“ (S. 33) */
var TA_CHAOSGRAF = '<svg class="graf" viewBox="0 0 300 220"><g stroke="#e3e0ee" stroke-width="1">' +
  [0,1,2,3,4,5,6,7,8].map(function(i){ return '<path d="M' + (40 + i * 30) + ' 20V180"/>'; }).join("") + [0,1,2,3,4,5].map(function(i){ return '<path d="M40 ' + (30 + i * 30) + 'H280"/>'; }).join("") +
  '</g><path d="M40 12V180H288" fill="none" stroke="#2a1b45" stroke-width="2.5"/><path d="M40 6l-5 9h10zM294 180l-9-5v10z" fill="#2a1b45"/>' +
  '<path d="M42 176l12-16 22-8 22 4 26-44 22 16 20-18 60-10 44-96" fill="none" stroke="#2d50a7" stroke-width="4" stroke-linejoin="round"/><path d="M276 2l-12 20 18 2z" fill="#2d50a7"/>' +
  '<text x="160" y="205" text-anchor="middle" font-family="Spartan" font-weight="800" font-size="15" fill="#2a1b45">Chaos</text>' +
  '<text x="22" y="100" text-anchor="middle" font-family="Spartan" font-weight="800" font-size="15" fill="#2a1b45" transform="rotate(90 22 100)">Probleme</text></svg>';

/* ---- Zierwerk einzelner Buchseiten ---- */
function taZufall(seed){ var x = seed * 9301 + 49297; return function(){ x = (x * 9301 + 49297) % 233280; return x / 233280; }; }
/* Knotennetz (S. 40–43): rot neben den Regeln, blau wo die Anomalie mitliest */
function taNetz(farbe, seed, w, h){
  var r = taZufall(seed), c = farbe === "blau" ? "#2d50a7" : "#c8202f", n = Math.round(w * h / 5200), P = [], out = "", i, j;
  for(i = 0; i < n; i++) P.push([20 + r() * (w - 40), 20 + r() * (h - 40), r() < .22 ? 15 : r() < .5 ? 8 : 5]);
  for(i = 0; i < n; i++){ var best = [];
    for(j = 0; j < n; j++) if(j !== i) best.push([Math.hypot(P[i][0] - P[j][0], P[i][1] - P[j][1]), j]);
    best.sort(function(a, b){ return a[0] - b[0]; }).slice(0, 3).forEach(function(q){ out += '<path d="M' + P[i][0].toFixed(0) + ' ' + P[i][1].toFixed(0) + 'L' + P[q[1]][0].toFixed(0) + ' ' + P[q[1]][1].toFixed(0) + '"/>'; }); }
  var k = P.map(function(p){ var x = p[0].toFixed(0), y = p[1].toFixed(0);
    return '<circle cx="' + x + '" cy="' + y + '" r="' + p[2] + '" fill="' + c + '"/>' + (p[2] > 12 ? '<circle cx="' + x + '" cy="' + (y - 4) + '" r="4" fill="#fff"/><path d="M' + (x - 7) + ' ' + (+y + 9) + 'a7 6 0 0 1 14 0z" fill="#fff"/>' : p[2] > 6 ? '<circle cx="' + x + '" cy="' + y + '" r="3" fill="#fff"/>' : ''); }).join("");
  return '<svg class="hb-netz ' + farbe + '" viewBox="0 0 ' + w + ' ' + h + '" width="' + w + '" height="' + h + '"><g stroke="' + c + '" stroke-width="2" fill="none">' + out + '</g>' + k + '</svg>';
}
/* Zettelhaufen „GEHE ZU: K2“ mit Schloss-Akten (S. 45); liegt über dem Kasten davor, Klick räumt ihn weg */
function taZettel(n){
  var r = taZufall(11), out = "";
  for(var i = 0; i < n; i++){ var x = (r() * 86).toFixed(1), y = (r() * 78).toFixed(1), d = (r() * 70 - 35).toFixed(0);
    out += r() < .3 ? '<img src="' + Z("symbol-akte-schloss") + '" alt="" style="left:' + x + '%;top:' + y + '%;transform:rotate(' + d + 'deg)">' : '<b style="left:' + x + '%;top:' + y + '%;transform:rotate(' + d + 'deg)">[GEHE ZU: <u>K2</u>]</b>'; }
  return '<div class="haufen">' + out + '</div>';
}
/* Kartenstapel der „Szene der Anomalie“ (S. 125): dieselbe Karte mehrfach, verrutscht */
function taStapel(karte){
  return '<div class="hb-kstapel" onclick="this.classList.toggle(\'auf\')">' + [0, 1, 2, 3, 4, 5].map(function(i){ return '<div style="--i:' + i + '">' + karte + '</div>'; }).join("") + '</div>';
}
