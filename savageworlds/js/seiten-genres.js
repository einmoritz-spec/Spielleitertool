/* Genres: eine Seite je Genre (immer sichtbar, unabhängig von den Genre-Schaltern). Nutzt slRender aus seiten-spielleitung.js */
(function(){
"use strict";
var G = {
 fan:{d:"SW_GEN_FAN", book:"sw_fan", c:"#3f6b2f"},
 hor:{d:"SW_GEN_HOR", book:"sw_hor", c:"#7a1b1b"},
 sf:{d:"SW_GEN_SF", book:"sw_sf", c:"#0f6f86"},
 sup:{d:"SW_GEN_SUP", book:"sw_sup", c:"#b3301c"}
};
Object.keys(G).forEach(function(k){
  SWP["genres/" + k] = function(){
    var g = G[k], data = window[g.d];
    if(!data){ APP.innerHTML = '<div class="lay"><main class="ct"><div class="soon">Inhalt folgt.</div></main></div>'; return; }
    slRender({sets:[data], book:g.book, off:2, color:g.c});
  };
});
})();
