/* Kampagne „Das Anwesen“ (The Estate), Klinkerhafen */
var ASUB = [["karte","Karte"],["klinkerhafen","Klinkerhafen"],["siedlungen","Siedlungen"],["fraktionen","Fraktionen"],["verbindungen","Verbindungen"],["kampagne","Kampagne"]];
function viewAnwesen(tab, ort){
  var A = MR.anwesen, t = tabCur(ASUB, tab), h = "";
  if(t === "karte"){
    var items = A.orte.map(function(o){ return {nr:o[0], name:o[1], o:o}; });
    h = kvMap({img:"ab/anwesen-karte", pins:A.pins, items:items, cur:ort, area:"anwesen", tab:"karte", kind:"sq",
      body:function(s){ var o = s.o; return ortKopf(o[0], o[1], "S. 3") + '<p class="ein">' + md(o[2]) + '</p>' + (o[3] ? '<span class="ab">Abenteuerort: ' + esc(o[3]) + '</span>' : '<p class="leer">Kein Abenteuerort</p>') + '<div class="nz">' + notiz("anwesen/ort/" + o[0]) + '</div>'; }});
  }else if(t === "klinkerhafen"){
    var K = A.klinkerhafen, it2 = K.orte.map(function(o){ return {nr:o[0], name:o[1], o:o}; });
    h = kvMap({img:"ab/brickport-karte", pins:K.pins, items:it2, cur:ort, area:"anwesen", tab:"klinkerhafen",
      unter:'<p class="ein" style="margin-top:14px">' + K.intro.map(md).join(" ") + '</p>',
      body:function(s){ var o = s.o; return ortKopf(o[0], o[1]) + '<p class="ein">' + md(o[2]) + '</p>' + liste(o[3]) + '<div class="nz">' + notiz("anwesen/kh/" + o[0]) + '</div>'; }}) +
      '<div class="rp voll" style="padding-top:0"><div class="k2x"><div><h3 class="gh">Ereignisse in Klinkerhafen</h3>' + w6(K.ereignisse, "W8", "Ereignis") +
      '<h3 class="gh">' + esc(K.auftraege.t) + '</h3><p class="ein">' + md(K.auftraege.k) + '</p>' + w6(K.auftraege.tab, "W4", "Auftrag") + '<h3 class="gh">Speisekarte</h3>' + w6(K.speise, "W6", "Gericht") + '</div>' +
      '<div class="aud"><img src="' + IMG("ab/audrey") + '" alt=""><div><h3>' + esc(K.audrey.t) + '</h3><div class="r">' + esc(K.audrey.r) + '</div><p>' + md(K.audrey.k) + '</p><h5>Bittet die Mäuse, …</h5>' + w6(K.audrey.hilfe, "W6", "Hilfe") + '</div></div></div></div>';
  }else if(t === "siedlungen"){
    h = seite("Siedlungen", "", '<div class="sied">' + A.siedlungen.map(function(s){ return '<div class="fk"><h3>' + esc(s[0]) + '</h3><div class="r">' + md(s[1]) + '</div>' + liste(s[2]) + '</div>'; }).join("") + '</div>', true);
  }else if(t === "fraktionen"){
    h = seite("Fraktionen", "", '<div class="fr">' + A.fraktionen.map(function(f, fi){
      return '<div class="fk"><h3>' + esc(f[0]) + '</h3><div class="r">' + esc(f[1]) + '</div><h5>EIGENSCHAFTEN</h5>' + liste(f[2]) + '<h5>ZIELE</h5>' +
        f[3].map(function(z, zi){ var k = "fz_" + fi + "_" + zi, on = store(k); return '<div class="ziel' + (on ? " done" : "") + '" onclick="zielTog(this,\'' + k + '\')"><span class="st">' + (zi + 1) + '</span><span>' + md(z) + '</span></div>'; }).join("") + '</div>'; }).join("") + '</div>', true);
  }else if(t === "verbindungen"){
    h = seite("Verbindungen", "", '<p class="ein" style="margin-bottom:12px">' + md(A.verbindungen.k) + '</p><table class="vb"><tr><th>Abenteuerort</th><th>Verbindung 1</th><th>Verbindung 2</th></tr>' +
      A.verbindungen.rows.map(function(r){ return '<tr><td>' + esc(r[0]) + '</td><td>' + md(r[1]) + '</td><td>' + md(r[2]) + '</td></tr>'; }).join("") + '</table>', true);
  }else{
    h = seite("Kampagne", "", '<div class="kampagne"><img src="' + IMG("ab/anwesen-cover") + '" alt=""><div class="txt">' + A.intro.map(function(x){ return '<p>' + md(x) + '</p>'; }).join("") +
      '<h3>Beginn</h3>' + liste(A.start) + '<h3>Das Ende</h3>' + liste(A.ende) + '</div></div>' +
      '<div class="k2x"><div><h3 class="gh">Begegnungen auf dem Anwesen</h3>' + w6(A.begegnungen, "W6", "Begegnung") + '</div><div><h3 class="gh">Gerüchte</h3>' + w6(A.geruechte, "W6", "Gerücht") + '</div></div>', true);
  }
  return abl("anwesen", "Das Anwesen", ASUB, t, "anwesen/" + t) + h;
}
function zielTog(el, k){ var on = !store(k); store(k, on); el.classList.toggle("done", on); }
