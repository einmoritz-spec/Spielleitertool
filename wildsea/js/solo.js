/* The Wildsea – eigenständige Bogen-Seite für Mitspieler (bogen.html): nur Charakter- und Schiffsbogen, nichts vom Spielleitertool. */
"use strict";
window.SOLO = true;
var APP = document.getElementById("app");
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
function IMG(p){ return "img/" + p + ".webp"; }
var ST = {};
function load(){ try{ ST = JSON.parse(localStorage.getItem("ws_state_v1") || "{}") || {}; }catch(e){ ST = {}; } }
function save(){ try{ localStorage.setItem("ws_state_v1", JSON.stringify(ST)); }catch(e){} }
load();
function go(h){ if(location.hash === "#" + h) render(); else location.hash = h; }
window.addEventListener("hashchange", function(){ bgLinkImport().then(render, render); });
function render(){
  var h = (location.hash || "#bogen").slice(1).split("/"), ship = h[0] === "schiff";
  var out = ship ? viewSchiff() : viewBogen(h[1]);
  out = out.replace(/<select[\s\S]*?<\/select>/, "").replace(/<a class="on">(Charakterbogen|Schiffsbogen)<\/a>/,
    '<a' + (ship ? '' : ' class="on"') + ' onclick="go(\'bogen\')">Charakterbogen</a><a' + (ship ? ' class="on"' : '') + ' onclick="go(\'schiff\')">Schiffsbogen</a>');
  var y = scrollY, same = window.__lh === location.hash; window.__lh = location.hash; APP.innerHTML = out; scrollTo(0, same ? y : 0);
}
bgLinkImport().then(render, render);
