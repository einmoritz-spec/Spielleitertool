/* Discworld – Grundbausteine: Datenregister, Textauszeichnung, Blöcke.
   Daten: DW.reg(bereich, [{id, g (Gruppe), t, p (Buchseite), img?, sub?, b:[Blöcke]}])
   Auszeichnung im Text: **fett** (Merkmale), *kursiv*, {TOD}… (Kapitälchen des Todes), <br> erlaubt. */
"use strict";
window.DW = {K:{}, NSC:{}, AB:{},
  reg: function(b, L){ (DW.K[b] = DW.K[b] || []).push.apply(DW.K[b], L); },
  nsc: function(L){ L.forEach(function(n){ DW.NSC[n.id] = n; }); },
  ab: function(id, A){ DW.AB[id] = A; }
};
var BILD = {}; (window.DW_BILDER || []).forEach(function(b){ BILD[b[0]] = b; });
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
function md(s){
  s = String(s == null ? "" : s);
  var tod = /^\{TOD\}/.test(s); if(tod) s = klein(s.slice(5));
  var h = esc(s).replace(/&lt;br&gt;/g, "<br>").replace(/\*\*(.+?)\*\*/g, '<b class="mk">$1</b>').replace(/\*(.+?)\*/g, "<i>$1</i>").replace(/\n/g, "<br>")
    .replace(/(S\.\s?)(\d{1,3})(?![\d–-])/g, function(m, a, n){ return '<a class="pg" onclick="event.stopPropagation();buch(' + n + ')">S.&nbsp;' + n + '</a>'; });
  h = h.replace(/\{TOD\}(.+?)(\{\/TOD\}|$)/g, function(m, x){ return '<span class="tod">' + klein(x) + "</span>"; });
  return tod ? '<span class="tod">' + h + '</span>' : h;
}
/* Sprechweise des Todes: Kapitälchen – Text klein, Satzanfänge groß */
function klein(s){ return String(s).toLowerCase().replace(/(^|[.!?…]\s+|\n\s*)([a-zäöü])/g, function(m, a, b){ return a + b.toUpperCase(); }); }
function img(n){ return "img/full/" + n + ".webp"; }
function bildTag(n, cls){
  var b = BILD[n]; if(!b) return "";
  var quer = b[1] / b[2] > 1.25;
  return '<figure class="bild ' + (cls || (quer ? "quer" : "hoch")) + '"><img src="' + img(n) + '" alt="" loading="lazy" onclick="zoom(\'' + n + '\')"></figure>';
}
function zoom(n){
  if(window.Galerie && Galerie.image){ try{ Galerie.image("discworld", n); return; }catch(e){} }
  var d = document.createElement("div"); d.className = "gzoom"; d.onclick = function(){ d.remove(); }; d.innerHTML = '<img src="' + img(n) + '" alt="">'; document.body.appendChild(d);
}
var WTAB = {};
function blk(L){
  return (L || []).map(function(b){
    if(typeof b === "string") return "<p>" + md(b) + "</p>";
    switch(b.t){
      case "h": return '<h3 class="zw">' + md(b.x) + "</h3>";
      case "h4": return "<h4>" + md(b.x) + "</h4>";
      case "ul": return '<ul class="rau">' + b.x.map(function(x){ return "<li>" + md(x) + "</li>"; }).join("") + "</ul>";
      case "ol": return '<ol class="nr">' + b.x.map(function(x){ return "<li>" + md(x) + "</li>"; }).join("") + "</ol>";
      case "q": return '<blockquote class="zitat"><p>' + md(b.x) + "</p>" + (b.wer ? "<cite>– " + esc(b.wer) + "</cite>" : "") + "</blockquote>";
      case "fn": return '<div class="fn">' + md(b.x) + "</div>";
      case "box": return '<aside class="kasten"><h4>' + md(b.h) + "</h4>" + blk(b.b) + "</aside>";
      case "vl": return '<div class="vorlesen">' + blk(b.b || [b.x]) + "</div>";
      case "bsp": return '<div class="bsp"><h4>' + esc(b.h || "Beispiel") + "</h4>" + blk(b.b) + "</div>";
      case "dlg": return '<div class="dlg">' + b.x.map(function(z){ return '<div><b>' + esc(z[0]) + '</b><span>' + md(z[1]) + "</span></div>"; }).join("") + "</div>";
      case "brief": return '<div class="brief">' + md(klein(b.x)).replace(/<br><br>/g, "</p><p>").replace(/^/, "<p>") + "</p></div>";
      case "img": return bildTag(b.src, b.c);
      case "tbl": return tabelle(b);
      case "wt": return wtab(b);
      case "erg": return '<div class="erg">' + b.rows.map(function(r, i){ return '<div class="e' + i + '"><small>' + esc(r[0]) + '</small><b>' + esc(r[1]) + "</b></div>"; }).join("") + "</div>";
      case "kosten": return '<div class="kosten">' + b.rows.map(function(r){ return '<div><b>' + esc(r[0]) + '</b><span>' + md(r[1]) + "</span></div>"; }).join("") + "</div>";
      case "wuerfel": return wuerfelLeiste();
      case "fragen": return fragen(b);
      case "grid": return '<div class="raster r' + (b.n || 2) + '">' + b.x.map(function(c){ return "<div>" + blk(c) + "</div>"; }).join("") + "</div>";
      case "karten": if(JSON.stringify(b.x).length / b.x.length > 900) return b.x.map(function(c){ return '<h3 class="zw">' + md(c.h) + "</h3>" + blk(c.b); }).join("");
        return '<div class="kraster">' + b.x.map(function(c){ return '<div class="kk"><h4>' + md(c.h) + "</h4>" + blk(c.b) + "</div>"; }).join("") + "</div>";
      case "nsc": return nscKarte(DW.NSC[b.id] || b, b.klein);
      case "nscs": return '<div class="nscraster">' + b.x.map(function(id){ return nscKachel(DW.NSC[id], 1); }).join("") + "</div>" + (b.nurKacheln ? "" : b.x.map(function(id){ return nscKarte(DW.NSC[id]); }).join(""));
      case "namen": return '<div class="namen" id="nm-' + b.id + '"><h4>' + esc(b.h) + '<button class="wurf" onclick="namePick(\'' + b.id + '\')">Zufällig</button><b class="pick"></b></h4><p>' + b.x.split(/,\s*/).map(function(n){ return "<span>" + esc(n) + "</span>"; }).join(" · ") + "</p></div>";
      case "ortskarten": return ortsKarten();
      case "gruppe": return gruppenBogen(b);
      case "scs": return '<div class="scraster">' + b.x.map(scBogen).join("") + "</div>";
      case "html": return b.x;
    }
    return "";
  }).join("");
}
function tabelle(b){
  return '<div class="tblw">' + (b.h ? "<h4>" + md(b.h) + "</h4>" : "") + '<table class="tbl">' + (b.head ? "<tr>" + b.head.map(function(h){ return "<th>" + md(h) + "</th>"; }).join("") + "</tr>" : "") +
    b.rows.map(function(r){ return "<tr>" + r.map(function(c){ return "<td>" + md(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</table></div>";
}
/* Würfeltabelle: {t:"wt", id, h, w:"W20"|"W100"|…, rows:[[bereich, text]]} – Klick auf den Würfel wirft */
function wtab(b){
  var id = b.id || ("wt" + (b.h || "") + b.rows.length).replace(/[^a-z0-9]/gi, "").slice(0, 40), hit = WTAB[id];
  return '<div class="wt" id="' + id + '"><h4>' + md(b.h || "") + '<button class="wurf" onclick="wtWurf(\'' + id + '\')" title="Würfeln">' + esc(b.w || "W20") + (hit != null ? ": " + hit.n : "") + '</button></h4><table class="tbl">' +
    (b.head ? "<tr>" + b.head.map(function(h){ return "<th>" + md(h) + "</th>"; }).join("") + "</tr>" : "") +
    b.rows.map(function(r, i){ return '<tr class="' + (hit && hit.i === i ? "hit" : "") + '">' + r.map(function(c, k){ return "<td" + (k ? "" : ' class="n"') + ">" + md(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</table></div>";
}
function wtWurf(id){
  var el = document.getElementById(id); if(!el) return;
  var w = el.querySelector(".wurf").textContent.replace(/:.*/, ""), seiten = parseInt(w.replace(/\D/g, ""), 10) || 20, n = 1 + Math.floor(Math.random() * seiten), idx = -1;
  el.querySelectorAll("tr").forEach(function(tr){ tr.classList.remove("hit"); });
  var rows = [].slice.call(el.querySelectorAll("tr")).filter(function(tr){ return tr.querySelector("td.n"); });
  rows.forEach(function(tr, i){ var t = tr.querySelector("td.n").textContent.replace(/\s/g, ""), m = t.match(/(\d+)(?:[–-](\d+))?/); if(!m) return; var a = +m[1], z = m[2] ? +m[2] : a; if(a === 0 && seiten === 100) a = 100; if((n >= a && n <= z) || (seiten === 100 && n === 100 && /00/.test(t))) idx = i; });
  WTAB[id] = {n:n, i:idx}; el.querySelector(".wurf").textContent = w + ": " + n;
  if(idx >= 0){ rows[idx].classList.add("hit"); }
}
/* Fragen-Tabelle (Organisationen/Hintergründe): {t:"fragen", h, rows:[[frage, antworten]]} */
function fragen(b){
  return '<div class="fragen">' + (b.h ? '<div class="fk"><span>' + esc(b.h[0]) + '</span><span>' + esc(b.h[1]) + "</span></div>" : "") +
    b.rows.map(function(r, i){ return '<div class="fz"><i>' + (i + 1) + '</i><b>' + md(r[0]) + "</b><span>" + md(r[1]) + "</span></div>"; }).join("") + "</div>";
}
function wuerfelLeiste(){
  var W = [["W4","Wenn ihr völlig überfordert seid und kein Merkmal eure Handlung stützt.","M50 8 92 86H8Z"],
    ["W6","Wenn ihr ungefähr wisst, was ihr tut, oder ein halbwegs passendes Merkmal habt.","M18 18h64v64H18Z"],
    ["W8","Nichts für euch! Das ist der Narrativiumwürfel, den nur die Spielleitung wirft.","M50 6 90 50 50 94 10 50Z"],
    ["W10","Wenn ihr recht gut wisst, was ihr tut, und ein passendes Merkmal habt.","M50 6 88 40 50 94 12 40Z"],
    ["W12","Wenn ihr genau wisst, was ihr tut, und ein perfektes Merkmal dafür habt.","M50 6 89 34 76 84H24L11 34Z"],
    ["W20 · W100","Nur für Tabellen.","M50 5 90 28V72L50 95 10 72V28Z"]];
  return '<div class="wleiste">' + W.map(function(w, i){ return '<div class="' + (i === 2 ? "sl" : i === 5 ? "tab" : "") + '"><svg viewBox="0 0 100 100"><path d="' + w[2] + '"/></svg><b>' + w[0] + "</b><span>" + w[1] + "</span></div>"; }).join("") + "</div>";
}
/* Gruppen- und Charakterbogen (vorgefertigte Charaktere) */
function gruppenBogen(b){
  var z = function(k, v){ return '<div class="gz"><em>' + md(v) + "</em><span>" + k + "</span></div>"; };
  return '<div class="gbogen"><div class="akt">Akte 7a, zusammengestellt von R. Drumknott<br>zur Kenntnisnahme durch Seine Lordschaft.</div>' + z("Gruppenname", b.name) + z("Organisation", b.org) + z("Gruppenziel", b.ziel) + '<div class="g2">' + z("Gruppenvergangenheit", b.verg) + z("Gruppengegenwart", b.gegen) + "</div></div>";
}
function scBogen(c){
  var f = function(k, v){ return '<div class="f"><span>' + k + '</span><em>' + md(v) + "</em></div>"; };
  return '<article class="scb"><div class="sck"><div class="sclk"><b>' + (c.glueck || 4) + '</b><small>/4<br>Glück</small></div><div class="scf">' + f("Folgen", c.folgen || "") + "</div></div>" +
    f("Name", c.name) + '<div class="pron">(' + esc(c.pron) + ")</div>" + f("Organisation", c.org) + f("Hintergrund", c.hg) + f("Nische", c.nische) + f("Marotten", c.marotten.join("<br>")) + f("Kern", c.kern || "") +
    '<p class="scx">' + md(c.b) + "</p></article>";
}
function namePick(id){ var el = document.getElementById("nm-" + id); if(!el) return; var L = el.querySelectorAll("p span"), k = Math.floor(Math.random() * L.length);
  L.forEach(function(x){ x.classList.remove("hit"); }); L[k].classList.add("hit"); el.querySelector(".pick").textContent = L[k].textContent; }
function ortsKarten(){
  var O = [[1,"uu-ansicht"],[2,"py-ansicht"],[3,"pal-ansicht"],[4,"sch-ansicht"],[5,"sat-ansicht"],[6,"drum-ansicht"],[7,"gil-narren"]];
  return '<div class="orte">' + O.map(function(o){ var B = (window.BEREICHE || []).filter(function(x){ return x.id === "stadt"; })[0];
    return '<a onclick="go(\'k/stadt/' + o[0] + '\')"><img src="img/thumb/' + o[1] + '.webp" alt="" loading="lazy"><b>' + esc(B ? B.g[o[0]] : "") + "</b></a>"; }).join("") + "</div>";
}
/* NSC-Steckbrief wie im Buch (Pergamentblatt, Handschrift) */
function nscKachel(n, anker){ if(!n) return "";
  return '<a class="nk" onclick="' + (anker ? "springe('n-" + n.id + "')" : "nscOpen('" + n.id + "')") + '">' + (n.img ? '<img src="img/thumb/' + n.img + '.webp" alt="" loading="lazy">' : '<span class="ini">' + esc(n.name.split(" ").map(function(w){ return w[0]; }).join("").slice(0, 2)) + "</span>") + "<b>" + esc(n.name) + "</b><small>" + esc(n.nische || "") + "</small></a>";
}
function nscKarte(n, klein){
  if(!n) return "";
  var f = function(k, v){ return v ? '<div class="f"><span>' + k + '</span><em>' + md(v) + "</em></div>" : ""; };
  return '<article class="steck' + (n.img ? "" : " ohne") + (klein ? " klein" : "") + '" id="n-' + n.id + '"><h3>' + esc(n.name) + (n.p ? ' <a class="pg" onclick="buch(' + n.p + ')">S. ' + n.p + "</a>" : "") + (n.pron ? '<small>' + esc(n.pron) + "</small>" : "") + "</h3>" +
    '<div class="sk">' + f("Voller Name", n.voll) + '<div class="f2">' + f("Spezies", n.spezies) + f("Nische", n.nische) + "</div>" + f("Merkmale", (n.merkmale || []).join(";<br>")) + f("Eigenart", n.eigenart) + "</div>" +
    (n.img ? '<img class="por" src="' + img(n.img) + '" alt="" onclick="zoom(\'' + n.img + '\')">' : "") +
    '<div class="txt">' + blk(n.b) + (n.aufhaenger ? '<p class="auf"><span>Story-Aufhänger:</span> ' + md(n.aufhaenger) + "</p>" : "") + "</div>" + (n.extra ? blk(n.extra) : "") + "</article>";
}
function nscOpen(id){ var n = DW.NSC[id]; if(!n) return; modal(nscKarte(n), "nscm"); }
function modal(html, cls){
  var m = document.createElement("div"); m.className = "modal " + (cls || "");
  m.innerHTML = '<div class="mb"><button class="mx" onclick="this.closest(\'.modal\').remove()" aria-label="Schließen">×</button>' + html + "</div>";
  m.onclick = function(e){ if(e.target === m) m.remove(); };
  document.body.appendChild(m); return m;
}
