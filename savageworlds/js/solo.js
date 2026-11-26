/* Ersatz für app.js auf den Einzelseiten (bogen.html, spielfeld.html): nur Genre-Zustand und Hilfsfunktionen */
"use strict";
window.SW_SOLO = 1;
var ST = {}; try{ ST = JSON.parse(localStorage.getItem("sw_state_v1") || "{}") || {}; }catch(e){}
if(!ST.gen) ST.gen = {fan: 1, hor: 0, sf: 0, sup: 0};
function save(){ try{ localStorage.setItem("sw_state_v1", JSON.stringify(ST)); }catch(e){} }
function gen(id){ return id === "grw" || !!ST.gen[id]; }
function sqVis(s){ return (s || ["GRW"]).some(function(x){ return x === "GRW" || gen(x.toLowerCase()); }); }
function sqBadge(s){ return (s || []).filter(function(x){ return x !== "GRW"; }).map(function(x){ return '<i class="sq sq-' + x.toLowerCase() + '">' + x + "</i>"; }).join(""); }
function go(){}
var SWP = {}, APP = document.getElementById("app");
var SOLO_GEN = [["fan", "Fantasy"], ["hor", "Horror"], ["sf", "Science-Fiction"], ["sup", "Superhelden"], ["dl", "Deadlands"]];
function soloGenres(nachher){
  var b = document.getElementById("soloGen"); if(!b) return;
  b.innerHTML = '<span>Regelwerke</span><a class="on fest">Grundregelwerk</a>' + SOLO_GEN.map(function(g){ return '<a data-g="' + g[0] + '" class="' + (gen(g[0]) ? "on" : "") + '">' + g[1] + "</a>"; }).join("");
  b.onclick = function(e){ var a = e.target.closest("a[data-g]"); if(!a) return; ST.gen[a.dataset.g] = ST.gen[a.dataset.g] ? 0 : 1; save(); soloGenres(nachher); if(nachher) nachher(); };
}
