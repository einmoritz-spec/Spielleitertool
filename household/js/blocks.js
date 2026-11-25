/* Buchtexte als Blöcke darstellen. Daten: HH_TEXT["<modus>/<reiter>/<unter>[/<umschalter>]"] = [{id, t, p, b:[Blöcke]}], id = Eintrag der Seitenleiste.
   Block: "Text" · {t:"h",x} Zwischenüberschrift · {t:"ul",x:[…]} · {t:"bsp",b:[[Sprecher,Text],…]} Beispiel-Dialog · {t:"box",h,b:[…]} Kasten · {t:"q",x,wer} Spruch · {t:"tbl",head,rows} · {t:"karten",x:[Kästen]} Kästen im 2-Spalten-Raster
   Auszeichnung im Text: *kursiv*, **fett**. Seitenlinks: p = Buchseite (Grundbuch), "book" am Eintrag wählt ein anderes Buch. */
"use strict";
window.HH_TEXT = window.HH_TEXT || {};
function md(s){ return esc(s).replace(/\{(kreuz|karo|herz|pik|hh|haus)\}/g, '<img class="wf" src="img/wuerfel/$1.png" alt="$1">').replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\*(.+?)\*/g, "<i>$1</i>"); }
function blk(L, book){
  return (L || []).map(function(b){
    if(typeof b === "string") return "<p>" + md(b) + "</p>";
    switch(b.t){
      case "p": return "<p>" + md(b.x) + "</p>";
      case "h": return "<h3>" + esc(b.x) + (b.p ? pgl(book, b.p) : "") + "</h3>";
      case "ul": return '<ul class="bul">' + b.x.map(function(x){ return "<li>" + md(x) + "</li>"; }).join("") + "</ul>";
      case "bsp": return '<div class="bsp">' + b.b.map(function(z){ return z[0] ? '<p><b>' + esc(z[0]) + ':</b> ' + md(z[1]) + '</p>' : '<p>' + md(z[1]) + '</p>'; }).join("") + "</div>";
      case "box": return '<div class="kasten"><h4>' + esc(b.h) + '</h4>' + blk(b.b, book) + "</div>";
      case "bild": return '<figure class="fig' + (b.w === "voll" ? " voll" : b.w === "mitte" ? " mitte" : b.w === "raster" ? " raster" : "") + '"' + (b.w === "voll" || b.w === "mitte" || b.w === "raster" ? "" : ' style="width:' + b.w + 'px"') + '>' + b.s.split(" ").map(function(n){ return '<img loading="lazy" src="' + IMGP(n) + '" alt="">'; }).join("") + '</figure>';
      case "karten": return '<div class="karten nomas' + (b.cls ? ' ' + b.cls : '') + '">' + blk(b.x, book) + "</div>";
      case "q": return '<blockquote class="spruch">' + md(b.x) + (b.wer ? "<small>" + esc(b.wer) + "</small>" : "") + "</blockquote>";
      case "tbl": return '<table class="tbl">' + (b.head ? "<tr>" + b.head.map(function(h){ return "<th>" + esc(h) + "</th>"; }).join("") + "</tr>" : "") + b.rows.map(function(r){ return "<tr>" + r.map(function(c){ return "<td>" + md(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</table>";
    }
    return "";
  }).join("");
}
/* Standard-Seite für HH_TEXT: gewählter Eintrag der Seitenleiste, Überschrift mit Seitenlink */
function textSeite(P, list, book){
  var e = list.filter(function(x){ return x.id === P.sel; })[0] || list[0];
  if(!e) return platzhalter(P.unter.t);
  var bl = (window.HH_BILD || {})[P.unter.id + "/" + e.id] || [];
  var fig = bl.map(function(g){ return '<figure class="fig" style="width:' + g.w + 'px">' + g.s.map(function(n){ return '<img loading="lazy" src="' + IMGP(n) + '" alt="">'; }).join("") + '</figure>'; }).join("");
  return '<div class="sec txt"><h2>' + esc(e.t) + (e.p ? pgl(book, e.p) : "") + '</h2>' + fig + blk(e.b, book) + '<div style="clear:both"></div></div>';
}
