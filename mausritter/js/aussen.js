/* Hexkarte „Die Außenlande“ */
var USUB = [["start","Start"],["karte","Karte"],["fraktionen","Fraktionen"],["tabellen","Tabellen"]];
function viewAussen(tab, ort){
  var X = MR.aussen, t = tabCur(USUB, tab), h = "";
  if(t === "start"){
    h = seite("Start", "", '<div class="k3x">' + X.start.map(function(s){ return '<div class="kc"><p>' + md(s[0]) + '</p>' + liste(s[1]) + '</div>'; }).join("") + '</div>', true);
  }else if(t === "karte"){
    var items = X.felder.map(function(f){ return {nr:f[0], name:f[1].replace(/[„“]/g, ""), f:f}; });
    h = kvMap({img:"ab/aussenlande-karte", pins:X.pins, items:items, cur:ort, area:"aussen", tab:"karte", kind:"hx",
      body:function(s){ var f = s.f; return ortKopf(f[0], f[1].replace(/[„“]/g, "")) + '<div class="k2"><div class="kc"><h4>Gerücht</h4><p>' + md(f[2]) + '</p></div><div class="kc"><h4>Begegnung</h4><p>' + md(f[3]) + '</p></div><div class="kc"><h4>Auslöser</h4><p>' + md(f[4]) + '</p></div></div>' + liste(f[5]) + '<div class="nz">' + notiz("aussen/feld/" + f[0]) + '</div>'; }});
  }else if(t === "fraktionen"){
    h = seite("Fraktionen", "", '<div class="fr f3">' + X.fraktionen.map(function(f, fi){
      return '<div class="fk"><h3>' + esc(f[0]) + '</h3><h5>EIGENSCHAFTEN</h5>' + liste(f[1]) + '<h5>ZIELE</h5>' + f[2].map(function(z, zi){
        var k = "uz_" + fi + "_" + zi, on = store(k) || 0;
        return '<div class="ziel"><span class="bx">' + Array.apply(null, Array(z[1])).map(function(_, i){ return '<i class="' + (i < on ? "on" : "") + '" onclick="kreis(this,\'' + k + '\',' + i + ')"></i>'; }).join("") + '</span><span>' + md(z[0]) + '</span></div>'; }).join("") + '</div>'; }).join("") + '</div>', true);
  }else{
    h = seite("Tabellen", "", '<div class="k2x"><div><h3 class="gh">Gerüchte</h3>' + w6(X.geruechte, "W6", "Gerücht") + '</div><div><h3 class="gh">Begegnungen</h3>' + w6(X.begegnungen, "W6", "Begegnung") + '</div></div>', true);
  }
  return abl("aussen", "Die Außenlande", USUB, t, "aussen/" + t) + h;
}
function kreis(el, k, i){ var on = store(k) || 0; on = (on === i + 1 ? i : i + 1); store(k, on); [].forEach.call(el.parentNode.children, function(c, j){ c.classList.toggle("on", j < on); }); }
