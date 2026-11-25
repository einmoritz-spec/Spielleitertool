/* Saga vom Brüchigen Frieden › Figuren: Übersicht + Karten (Daten aus fp-figuren-a/b/c.js) */
(function(){
var F = (window.FP_FIGUREN || []).slice();
F.unshift({id: "uebersicht", t: "Noteworthy Characters", p: 13, b: [
  {t: "kacheln", gross: 1, r: "fp/figuren/", x: F.map(function(f){ var k = f.b[0]; return {n: f.t, id: f.id, s: k.bild, u: k.sub}; })}]});
(window.HH_TEXT = window.HH_TEXT || {})["fp/figuren"] = F;
})();
