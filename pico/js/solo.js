/* Pico – eigenständige Bogen-Seite für Mitspieler (bogen.html): nur Charakter- und Streifzugbögen, nichts vom Spielleitertool. */
window.SOLO = true;
function render(){
  CARDS = [];
  var h = (location.hash || "#bogen/picnic").slice(1).split("/").map(decodeURIComponent);
  setTheme(false);
  var out = h[0] === "streifzug" ? viewStreif(h[1]) : viewBogen(h[1], h[2]);
  var same = window.__lh === location.hash, y = scrollY; window.__lh = location.hash;
  APP.innerHTML = out; scrollTo(0, same ? y : 0); if(window.afterRender) afterRender();
}
render();
