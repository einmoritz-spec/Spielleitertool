/* The Electric State – Router (#es/…) und i-Pop-up. Wird von tftl/js/app.js aufgerufen. */
window.ES = window.ES || {};
(function(){
  function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  function tabsHtml(on){
    return window.BEREICHE.es.tabs.map(function(t){ return '<a href="#es/' + t[0] + '"' + (t[0] === on ? ' class="on"' : '') + '>' + t[1] + '</a>'; }).join("");
  }
  function ph(app, title){ app.className = "page"; app.innerHTML = '<h1>' + esc(title) + '</h1>'; }
  /* i-Knopf: übersetzter Buchtext „The Electric State“ (Kap. 1, Abschnitt electric-state) */
  function infoSec(){
    var k = window.NACHDATA_ES && window.NACHDATA_ES.k1;
    return k && k.abschnitte && k.abschnitte.filter(function(a){ return a.id === "electric-state"; })[0] || null;
  }
  function infoBtn(){
    var sec = infoSec(), top = document.getElementById("top"), old = document.getElementById("esInfo");
    if(old) old.remove();
    if(!sec || !top) return;
    var b = document.createElement("button"); b.id = "esInfo"; b.className = "tb-info"; b.title = "The Electric State"; b.setAttribute("aria-label", "The Electric State"); b.textContent = "i";
    b.onclick = function(){
      var m = document.createElement("div"); m.className = "esinfo";
      m.innerHTML = '<div class="esinfo-b"></div><div class="esinfo-p"><h2>' + esc(sec.titel) + '</h2>' + (sec.bloecke || []).map(function(x){ return x[0] === "p" ? '<p>' + x[1] + '</p>' : x[0] === "h" ? '<h3>' + x[1] + '</h3>' : x[0] === "zit" ? '<p class="zit">' + x[1] + '</p>' : ""; }).join("") + '</div>';
      m.onclick = function(e){ if(e.target.classList.contains("esinfo-b")) m.remove(); };
      document.body.appendChild(m);
    };
    var burger = top.querySelector(".tb-burger"); top.insertBefore(b, burger);
  }
  ES.route = function(page, rest, app, tabs){
    var meta = document.querySelector('meta[name=theme-color]'); if(meta) meta.setAttribute("content", "#33464a");
    var oi = document.getElementById("esInfo"); if(oi) oi.remove(); /* i-Knopf: gemeinsames Überblick-Fenster (shared/info/tftl_es.js) */
    app.onclick = null; app.className = "page";
    var T = {reise:"renderReise", reisende:"renderReisende", karte:"renderKarte", bogen:"renderBogen", fahrzeug:"renderFahrzeug"};
    if(page === "nach" && window.renderNach){
      window.renderNach(app, tabs, rest); window.scrollTo(0, 0); return;
    }
    tabs.innerHTML = tabsHtml(page === "start" ? "start" : page);
    if(page === "start" && ES.renderStart) ES.renderStart(app);
    else if(page === "galerie" && window.Galerie && Galerie.has && Galerie.has("tftl_es")) Galerie.open("tftl_es");
    else if(T[page] && typeof ES[T[page]] === "function") ES[T[page]](app, rest);
    else ph(app, ({reise:"Reise", reisende:"Reisende", karte:"Karte", bogen:"Charakterbogen", fahrzeug:"Fahrzeugbogen", galerie:"Galerie"})[page] || page);
    window.scrollTo(0, 0);
  };
})();
