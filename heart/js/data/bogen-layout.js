/* HEART – Charakterbogen: Lage aller Felder auf dem Original-Bogen (Letter 612 × 792 pt, oben links = 0/0).
   Dieselben Maße gelten für die Ansicht im Tool und für das ausfüllbare PDF.
   t: "t" Textzeile · "m" mehrzeilig · "x" Kästchen */
var HT_BOGEN = (function(){
  var F = [], R = ["blood","mind","echo","fortune","supplies"];
  var SK = ["compel","delve","discern","endure","evade","hunt","kill","mend","sneak"];
  var DO = ["cursed","desolate","haven","occult","religion","technology","warren","wild"];
  function t(id, s, x, y, w, h, fs){ F.push({id:id, t:"t", s:s, x:x, y:y, w:w, h:h, fs:fs || 11}); }
  function m(id, s, x, y, w, h, fs){ F.push({id:id, t:"m", s:s, x:x, y:y, w:w, h:h, fs:fs || 10.5}); }
  function x(id, s, xx, y){ F.push({id:id, t:"x", s:s, x:xx, y:y, w:8, h:8}); }
  /* Seite 1 */
  t("name", 1, 115, 112.5, 185, 14.5, 12);
  t("klasse", 1, 115, 133.5, 185, 14.5, 12);
  t("berufung", 1, 115, 154.5, 185, 14.5, 12);
  t("beat1", 1, 328, 133.5, 242, 14.5);
  t("beat2", 1, 328, 154.5, 242, 14.5);
  R.forEach(function(r, i){
    for(var j = 0; j < 10; j++) x("stress-" + r + "-" + j, 1, 116.75 + j * 10.17, 198.5 + i * 16);
    for(var k = 0; k < 5; k++) x("schutz-" + r + "-" + k, 1, 245.5 + k * 10.18, 198.5 + i * 16);
  });
  SK.forEach(function(s, i){ x("skill-" + s, 1, 46.25, 321.5 + i * 14); t("knack-" + s, 1, 105, 319.5 + i * 14, 50.5, 10.5, 8); });
  DO.forEach(function(d, i){ x("domain-" + d, 1, 168.25, 321.5 + i * 14); t("dknack-" + d, 1, 249.5, 319.5 + i * 14, 56.5, 10.5, 8); });
  m("faehigkeiten", 1, 332, 224, 241, 352, 10);
  m("fallout", 1, 32, 468, 284, 102, 10);
  for(var i = 0; i < 5; i++){
    t("ausr" + (i + 1), 1, 58, 616.5 + i * 21, i === 4 ? 233 : 242, 14.5);
    t("res" + (i + 1), 1, 328, 616.5 + i * 21, i === 3 ? 230 : i === 4 ? 225 : 242, 14.5);
  }
  /* Seite 2 */
  m("geschichte", 2, 34, 110, 256, 172);
  m("beziehungen", 2, 34, 300, 246, 190);
  m("aussehen", 2, 336, 106, 206, 168);
  m("notizen", 2, 300, 318, 264, 392);
  m("bindungen", 2, 54, 538, 236, 58);
  return {felder:F, resist:R, skills:SK, domains:DO, W:612, H:792};
})();
