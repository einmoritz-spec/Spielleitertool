/* Spielleitung (und Vorlage für Genre-Seiten): Seitenleiste mit Abschnitten, rechts alle Abschnitte untereinander.
   Datenformat siehe js/data/sl-*.js: [{t, s:[{h, p, b:[Absatz | ["h",txt] | ["box",titel,absatz…] | ["ex",txt]]}]}] */
(function(){
"use strict";
function fmt(t){ return esc(t).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>"); }
function pg(book, off, p){ return p ? '<span class="pg" onclick="openBook(\'' + book + "'," + p + ')">S. ' + (p - off) + "</span>" : ""; }
function body(b){
  var h = "", cards = [];
  function flush(){ if(cards.length){ h += '<div class="sl-g">' + cards.join("") + "</div>"; cards = []; } }
  b.forEach(function(x){
    if(typeof x === "string"){ flush(); h += '<p class="ed">' + fmt(x) + "</p>"; }
    else if(x[0] === "h"){ flush(); h += '<h4 class="sl-h">' + nm(x[1]) + "</h4>"; }
    else if(x[0] === "box") cards.push('<div class="hc"><b>' + nm(x[1]) + "</b>" + x.slice(2).map(function(t){ return "<p>" + fmt(t) + "</p>"; }).join("") + "</div>");
    else if(x[0] === "tab") cards.push('<div class="hc sl-tab' + (JSON.stringify(x[3]).length > 700 ? " sl-wide" : "") + (x[3].every(function(r){ return r[0].length <= 14; }) ? " sl-k" : "") + '"><b>' + nm(x[1]) + '</b><table class="et"><tr>' + x[2].map(function(c){ return "<th>" + esc(c) + "</th>"; }).join("") + "</tr>" + x[3].map(function(r){ return "<tr>" + r.map(function(c, i){ return (r.length < x[2].length && i === r.length - 1 ? '<td colspan="' + (x[2].length - r.length + 1) + '">' : "<td>") + fmt(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</table></div>");
    else if(x[0] === "lnk"){ flush(); h += '<p class="ed"><a class="sl-lnk" href="#' + x[2] + '">' + esc(x[1]) + "</a></p>"; }
    else if(x[0] === "ex") cards.push('<div class="hc sl-ex">' + "<p>" + fmt(x[1]) + "</p></div>");
  });
  flush(); return h;
}
function slug(i){ return "sl-" + i; }
window.slRender = function(o){
  /* o: {title, sets:[daten…], book, off, color} */
  var items = []; o.sets.forEach(function(S){ S.forEach(function(e){ items.push(e); }); });
  var side = items.map(function(e, i){ return '<a data-i="' + i + '" onclick="slGo(' + i + ')">' + nm(e.t) + "</a>"; }).join("");
  var main = items.map(function(e, i){
    var same = e.s[0].h === e.t;
    var sec = e.s.map(function(s, k){
      var hd = (k === 0 && same) ? "" : '<h3 class="sl-s">' + nm(s.h) + pg(o.book, o.off, s.p) + "</h3>";
      return hd + body(s.b);
    }).join("");
    var top = '<h2 class="sl-t">' + nm(e.t) + (same ? pg(o.book, o.off, e.s[0].p) : "") + "</h2>";
    return '<section class="sl-sec" id="' + slug(i) + '">' + top + sec + "</section>";
  }).join("");
  APP.innerHTML = '<div class="lay' + (ST.fold ? " fold-on" : "") + '" id="lay"' + (o.color ? ' style="--c:' + o.color + '"' : "") + '><aside class="side"><button class="fold" onclick="foldSide()" aria-label="Seitenleiste">‹</button>' + side + '</aside><main class="ct sl">' + main + "</main></div>";
  window.scrollTo(0, 0);
  if(window.slScroll) window.removeEventListener("scroll", window.slScroll);
  window.slScroll = function(){
    var secs = document.querySelectorAll(".sl-sec"), cur = -1;
    if(!secs.length){ window.removeEventListener("scroll", window.slScroll); return; }
    Array.prototype.forEach.call(secs, function(e, i){ if(e.getBoundingClientRect().top <= 150) cur = i; });
    if(window.innerHeight + window.pageYOffset >= document.body.scrollHeight - 4) cur = secs.length - 1;
    Array.prototype.forEach.call(document.querySelectorAll(".side a"), function(a){ a.classList.toggle("on", a.getAttribute("data-i") === String(Math.max(cur, 0))); });
  };
  window.addEventListener("scroll", window.slScroll, {passive:true});
  var f = document.querySelector(".side a"); if(f) f.classList.add("on");
};
window.slGo = function(i){ var e = document.getElementById(slug(i)); if(e) window.scrollTo({top:e.getBoundingClientRect().top + window.pageYOffset - 112, behavior:"smooth"}); };

var BW = {book:"sw_wb", off:1}, BG = {book:"sw_de", off:1};
function reg(k, sets, b){ SWP["spielleitung/" + k] = function(){ slRender({sets:sets, book:b.book, off:b.off}); }; }
reg("grundlagen", [SW_SL_GRW], BG);
reg("weltenbau", [SW_SL_WB], BW);
reg("spielstil", [SW_SL_RISIKO, SW_SL_KIND], BW);
reg("gruppe", [SW_SL_STAMM], BW);
reg("veroeffentlichen", [SW_SL_PUB], BW);
reg("anekdoten", [SW_SL_ANEK], BW);
reg("motorhaube", [SW_SL_MOTOR], BW);
})();
