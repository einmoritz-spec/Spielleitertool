/* Saga vom Langen Winter › Figuren: Übersicht + Karten (Daten aus lw-figuren-a/b/c.js) */
(function(){
var F = (window.LW_FIGUREN || []).slice();
F.unshift({id: "uebersicht", t: "Bemerkenswerte Figuren", p: 11, b: [
  {t: "kacheln", gross: 1, r: "lw/figuren/", x: F.map(function(f){ var k = f.b[0]; return {n: f.t, id: f.id, s: k.bild, u: k.sub}; })}]});
(window.HH_TEXT = window.HH_TEXT || {})["lw/figuren"] = F;
})();
