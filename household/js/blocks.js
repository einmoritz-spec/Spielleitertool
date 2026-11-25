/* Buchtexte als Blöcke darstellen. Daten: HH_TEXT["<modus>/<reiter>/<unter>[/<umschalter>]"] = [{id, t, p, b:[Blöcke]}], id = Eintrag der Seitenleiste.
   Block: "Text" · {t:"h",x} Zwischenüberschrift · {t:"ul",x:[…]} · {t:"bsp",b:[[Sprecher,Text],…]} Beispiel-Dialog · {t:"box",h,b:[…]} Kasten · {t:"q",x,wer} Spruch · {t:"tbl",head,rows} · {t:"karten",x:[Kästen]} Kästen im 2-Spalten-Raster
   Auszeichnung im Text: *kursiv*, **fett**. Seitenlinks: p = Buchseite (Grundbuch), "book" am Eintrag wählt ein anderes Buch. */
"use strict";
window.HH_TEXT = window.HH_TEXT || {};
function md(s){ return esc(s).replace(/\{(kreuz|karo|herz|pik|hh|haus)\}/g, '<img class="wf" src="img/wuerfel/$1.png" alt="$1">').replace(/\[\[(.+?)\|(.+?)\]\]/g, "<a class=\"vl\" onclick=\"go('$2')\">$1</a>").replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\*(.+?)\*/g, "<i>$1</i>"); }
function blk(L, book){
  return (L || []).map(function(b){
    if(typeof b === "string") return "<p>" + md(b) + "</p>";
    switch(b.t){
      case "p": return "<p>" + md(b.x) + "</p>";
      case "h": return "<h3>" + esc(b.x) + (b.p ? pgl(book, b.p) : "") + "</h3>";
      case "daten": return '<div class="daten">' + b.x.map(function(x){ var m = /^\*\*(.*?):?\*\*:?\s*([\s\S]*)$/.exec(x); return '<div><span>' + esc(m[1]) + '</span>' + md(m[2]) + '</div>'; }).join("") + '</div>';
      case "spalten": return '<div class="spalten">' + b.x.map(function(c){ return "<div>" + blk(c, book) + "</div>"; }).join("") + "</div>";
      case "gruppe": return '<figure class="fig voll gruppe"><img loading="lazy" src="' + IMGP(b.s) + '" alt="">' + b.p.map(function(z){ var e = (HH_TEXT["fp/figuren"] || []).filter(function(x){ return x.id === z[0]; })[0]; var n = e ? e.t : z[0]; return '<a class="gz" style="left:' + z[1] + '%;width:' + (z[2] - z[1]) + '%" title="' + esc(n) + '" onclick="figurPopup(\'' + z[0] + '\')"><span>' + esc(n) + '</span></a>'; }).join("") + '</figure>';
      case "ul": return '<ul class="bul">' + b.x.map(function(x){ return "<li>" + md(x) + "</li>"; }).join("") + "</ul>";
      case "bsp": return '<div class="bsp">' + b.b.map(function(z){ return z[0] ? '<p><b>' + esc(z[0]) + ':</b> ' + md(z[1]) + '</p>' : '<p>' + md(z[1]) + '</p>'; }).join("") + "</div>";
      case "box": return '<div class="kasten"><h4>' + esc(b.h) + '</h4>' + blk(b.b, book) + "</div>";
      case "bild": return '<figure class="fig' + (b.w === "voll" ? " voll" : b.w === "mitte" ? " mitte" : b.w === "raster" ? " raster" : "") + '"' + (b.w === "voll" || b.w === "mitte" || b.w === "raster" ? "" : ' style="width:' + b.w + 'px"') + '>' + b.s.split(" ").map(function(n){ return '<img loading="lazy" src="' + IMGP(n) + '" alt="">'; }).join("") + '</figure>';
      case "held": return '<figure class="held"><img loading="lazy" src="' + IMGP(b.s) + '" alt=""><div class="held-tx' + (b.cls ? ' ' + b.cls : '') + '" style="left:' + b.l + '%;top:' + b.o + '%;width:' + b.w + '%">' + blk(b.b, book) + '</div></figure>';
      case "karten": return '<div class="karten nomas' + (b.cls ? ' ' + b.cls : '') + '">' + blk(b.x, book) + "</div>";
      case "gegner": return gegnerKarte(b);
      case "figur": return figurKarte(b);
      case "kacheln": return '<div class="kacheln' + (b.gross ? ' gross' : '') + (b.breit ? ' breit' : '') + '">' + b.x.filter(function(k){ return k.s; }).map(function(k){ return '<a class="kachel" onclick="go(\'' + (b.r || "sl/gegner/") + k.id + '\')"><span class="kb"><img loading="lazy" src="' + IMGP(k.s, !b.gross) + '" alt=""></span><b>' + esc(k.n) + '</b><small>' + (k.u !== undefined ? esc(k.u) : GTYP[k.typ] + (k.lv ? ' · Stufe ' + k.lv : '')) + '</small></a>'; }).join("") + '</div><p class="kliste">' + b.x.filter(function(k){ return !k.s; }).map(function(k){ return '<a onclick="go(\'sl/gegner/' + k.id + '\')">' + esc(k.n) + '</a><small> ' + (k.lv ? 'Stufe ' + k.lv : GTYP[k.typ]) + '</small>'; }).join("") + '</p>';
      case "q": return '<blockquote class="spruch">' + md(b.x) + (b.wer ? "<small>" + esc(b.wer) + "</small>" : "") + "</blockquote>";
      case "tbl": return '<table class="tbl">' + (b.head ? "<tr>" + b.head.map(function(h){ return "<th>" + esc(h) + "</th>"; }).join("") + "</tr>" : "") + b.rows.map(function(r){ return "<tr>" + r.map(function(c){ return "<td>" + md(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</table>";
    }
    return "";
  }).join("");
}
/* Gegnerkarte: {t:"gegner", typ:"basic|critical|extreme", lv:0-5, st:Anzahl Kästchen, cr:[Nr. der Crucial Boxes], mv, tr, ot, ak:[6 Aktionen], tx:[Absätze], zg:[[Move, Text]], bild:[Name, Breite]} */
var GTYP = {basic: "Einfacher Gegner", critical: "Kritischer Gegner", extreme: "Extremer Gegner"};
function gegnerKarte(b){
  var rom = ["I", "II", "III", "IIII", "V", "VI"], boxes = "", i, dots = "";
  for(i = 1; i <= b.st; i++) boxes += '<i class="sk' + (b.cr.indexOf(i) > -1 ? ' cr' : '') + '"></i>';
  for(i = 1; i <= 5 && b.lv; i++) dots += '<i class="lv' + (i <= b.lv ? ' on' : '') + '"></i>';
  return '<div class="kasten gegner">' + (b.bild ? '<figure class="fig" style="width:' + b.bild[1] + 'px"><img loading="lazy" src="' + IMGP(b.bild[0]) + '" alt=""></figure>' : '') +
    '<div class="gk-kopf"><span>' + GTYP[b.typ] + '</span>' + (b.lv ? '<span class="gk-lv" title="Gefahrenstufe ' + b.lv + '">' + dots + '</span>' : '') + '</div>' +
    '<p class="gk-z"><b>Stress:</b> <span class="gk-st">' + boxes + '</span></p>' +
    '<p class="gk-z"><b>Moves:</b> ' + md(b.mv) + '</p><p class="gk-z"><b>Traits:</b> ' + md(b.tr) + '</p>' + (b.ot ? '<p class="gk-z"><b>Optionale Traits:</b> ' + md(b.ot) + '</p>' : '') +
    '<ol class="gk-ak">' + b.ak.map(function(a, n){ return '<li><b>' + rom[n] + '</b><span>' + md(a) + '</span></li>'; }).join("") + '</ol>' +
    (b.tx || []).map(function(t){ return "<p>" + md(t) + "</p>"; }).join("") +
    (b.zg || []).map(function(z){ return '<p class="gk-zug"><b>' + esc(z[0]) + ':</b> ' + md(z[1]) + '</p>'; }).join("") + '</div>';
}
/* Standard-Seite für HH_TEXT: gewählter Eintrag der Seitenleiste, Überschrift mit Seitenlink */
function textSeite(P, list, book){
  var grp = (P.unter.seiten || []).filter(function(x){ return x[0] === P.sel && x[2]; })[0];
  if(grp){
    if(P.anker) [60, 400, 1000].forEach(function(t){ setTimeout(function(){ zuAbschnitt(P.anker, 1); }, t); });
    return grp[2].map(function(id){ var e = list.filter(function(x){ return x.id === id; })[0]; if(!e) return "";
      return '<div class="sec txt" id="ab-' + id + '"><h2>' + esc(e.t) + (e.p ? pgl(book, e.p) : "") + '</h2>' + blk(e.b, book) + '<div style="clear:both"></div></div>'; }).join("");
  }
  var e = list.filter(function(x){ return x.id === P.sel; })[0] || list[0];
  if(!e) return platzhalter(P.unter.t);
  var bl = (window.HH_BILD || {})[P.unter.id + "/" + e.id] || [];
  var fig = bl.map(function(g){ return '<figure class="fig" style="width:' + g.w + 'px">' + g.s.map(function(n){ return '<img loading="lazy" src="' + IMGP(n) + '" alt="">'; }).join("") + '</figure>'; }).join("");
  return '<div class="sec txt"><h2>' + esc(e.t) + (e.p ? pgl(book, e.p) : "") + '</h2>' + fig + blk(e.b, book) + '<div style="clear:both"></div></div>';
}

/* Figurenkarte (Neue Figuren): {t:"figur", n, sub, bild:[Name,Breite], d:[[Feld,Wert]], s:[[Feld,Wert]] Startwerte, k:[[Kapitel,Text]], tx:[Absätze]} */
function figurKarte(b, kopf){
  var stk = b.d.filter(function(x){ return x[0] !== "Name"; }), name = b.d.filter(function(x){ return x[0] === "Name"; })[0];
  return '<div class="kasten figur fg2" data-mas="0" id="ab-' + b.id + '">' +
    (b.bild ? '<div class="fg-bild"><img loading="lazy" src="' + IMGP(b.bild) + '" alt=""></div>' : '') +
    '<div class="fg-haupt">' + (kopf || "") + '<div class="fg-sub">' + (name ? esc(name[1]) + ' · ' : '') + esc(b.sub) + '</div>' +
    '<div class="fg-steck">' + stk.map(function(x){ return '<div><span>' + esc(x[0]) + '</span>' + esc(x[1]) + '</div>'; }).join("") + '</div>' +
    '<h4>Startwerte</h4><dl class="fg-s">' + b.s.map(function(x){ return '<div><dt>' + esc(x[0]) + '</dt><dd>' + md(x[1]) + '</dd></div>'; }).join("") + '</dl>' +
    '<h4>Entwicklung</h4><div class="fg-k">' + b.k.map(function(x){ return '<div><b>Kapitel ' + x[0] + '</b><span>' + md(x[1]) + '</span></div>'; }).join("") + '</div>' +
    '<div class="fg-tx"><h4>Prolog</h4>' + b.tx.map(function(t){ return "<p>" + md(t) + "</p>"; }).join("") + '</div></div></div>';
}

/* Figuren-Popup: öffnet das Profil einer Figur aus der Saga */
function figurPopup(id){
  var e = (HH_TEXT["fp/figuren"] || []).filter(function(x){ return x.id === id; })[0]; if(!e) return;
  document.querySelectorAll(".modal").forEach(function(m){ m.remove(); });
  var m = document.createElement("div"); m.className = "modal figpop";
  m.innerHTML = '<div><button class="fp-x" aria-label="Schließen">×</button>' + figurKarte(e.b[0], '<h2>' + esc(e.t) + (e.p ? pgl("hh_a2", e.p) : "") + '</h2>') + '<a class="fp-all" onclick="document.querySelector(\'.modal\').remove();go(\'fp/figuren/' + id + '\')">Zur Figurenseite</a></div>';
  m.addEventListener("click", function(ev){ if(ev.target === m || ev.target.className === "fp-x") m.remove(); });
  document.body.appendChild(m);
}
