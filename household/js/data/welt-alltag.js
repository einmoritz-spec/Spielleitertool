/* Welt › Alltag der Nationen (Practical Guide): Seite je Nation, Abschnitte aus HH_TEXT["haus/welt/alltag"] (Etappen welt-alltag-<nation>-<teil>.js) */
(function(){
window.HH_INH = window.HH_INH || {};
window.HH_INH["haus/welt/alltag"] = function(P){
  var list = HH_TEXT["haus/welt/alltag"] || [];
  var grp = (P.unter.seiten || []).filter(function(x){ return x[0] === P.sel; })[0];
  if(!grp || !grp[2]) return platzhalter(grp ? grp[1] : P.unter.t);
  return textSeite(P, list, "hh_r2");
};
})();
