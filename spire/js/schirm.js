/* THE SPIRE – Spielleiterschirm (Overlay, Taste „s“, Burger-Menü, Chip auf der Startseite). Route #schirm öffnet ihn über der Startseite.
   Reiter: Würfeln · Stress · Fallout · Tags · Gegner. Alles Auszüge aus den Regeln S. 9–22 und QS S. 22. */
var SCH_TAB = "wuerfeln";
var SCH_TABS = [["wuerfeln", "Würfeln"], ["stress", "Stress"], ["fallout", "Fallout"], ["tags", "Tags"], ["gegner", "Gegner"]];
function schTab(t){ SCH_TAB = t; schDraw(); }
function schChips(L, tipFn){ return L.map(function(e){ return '<span class="chip" data-tn="' + esc(e.t) + '" data-tip="' + esc(e.x) + '">' + esc(e.t) + '</span>'; }).join(""); }
function schInhalt(){
  var F = SP_FALLOUT;
  if(SCH_TAB === "wuerfeln"){
    return '<div class="sch2"><div><h3 class="un">Kernmechanik' + pgl(9) + '</h3>' +
      '<table class="tbl">' + WSTUFEN.map(function(s){ return '<tr><td><b>' + s.r + '</b></td><td>' + esc(s.t) + ' (' + esc(s.z) + ')</td></tr>'; }).join("") + '</table>' +
      '<ul class="pkt"><li>1 W10, +1 mit Fertigkeit, +1 mit Domäne, +1 mit Meisterschaft (nicht stapelbar)</li><li>Der höchste Würfel zählt; jede 10 verursacht +1 Stress bei anderen</li><li>Würfle nur, wenn etwas auf dem Spiel steht</li></ul></div>' +
      '<div><h3 class="un">Schwierigkeit' + pgl(10) + '</h3><ul class="pkt"><li>0 (Standard) bis 2 (sehr herausfordernd): zieht so viele Würfel vom Pool ab</li><li>Immer mindestens 1 Würfel; jeder Punkt, der den Pool auf null oder darunter bringt, stuft das Ergebnis um eine Stufe herab</li></ul>' +
      '<h3 class="un">Teilstress' + pgl(9) + '</h3><ul class="pkt"><li>Würfelst du nur, um Schaden zu vermeiden: bei 6–7 Stress eine Würfelart niedriger</li></ul>' +
      '<h3 class="un">Gruppen' + pgl(10) + '</h3><ul class="pkt"><li>Jede helfende Figur mit passender Fertigkeit oder Domäne: +1 zum Pool, sie erleidet den Stress wie du</li><li>Gruppenhandlung: eine Person führt an; gelingt ihr die Handlung, würfeln die anderen mit Meisterschaft</li></ul></div></div>';
  }
  if(SCH_TAB === "stress"){
    return '<div class="sch2"><div><h3 class="un">Stress nach Risiko' + pgl(10) + '</h3><table class="tbl">' +
      [["W3", "Einbruch in einen heruntergekommenen Slum in Derelictus"], ["W6", "Eindringen in eine draufgängerische Bar in Red Row"], ["W8", "Einschleichen irgendwo wirklich Wichtigem, etwa dem Raddampfer-Hauptquartier des Herzogs"]].map(function(r){ return '<tr><td><b>' + r[0] + '</b></td><td>' + r[1] + '</td></tr>'; }).join("") + '</table>' +
      '<ul class="pkt"><li>Kämpfen oder Weglaufen: meist Stress in Höhe der Waffe des Gegners</li><li>Gegen mehrere Feinde: +1 Stress für jeden Feind nach dem ersten</li><li>Nach jedem Stress würfelt die Spielleitung W10: niedriger als der Gesamtstress = Fallout</li></ul></div>' +
      '<div><h3 class="un">Waffen' + pgl(21) + '</h3><table class="tbl">' + [["1", "Unbewaffnet"], ["W3", "Zivile oder improvisierte Waffen"], ["W6", "Militärische oder professionelle Waffen"], ["W8", "Schwere oder exotische Waffen"]].map(function(r){ return '<tr><td><b>' + r[0] + '</b></td><td>' + r[1] + '</td></tr>'; }).join("") + '</table>' +
      '<h3 class="un">Stress entfernen' + pgl(10) + '</h3><ul class="pkt"><li>Untertauchen: aller Stress weg, die Handlung geht ohne dich weiter</li><li>Handeln oder Auffrischen: W3, W6 oder W8 Stress entfernen</li><li>Fallout: leicht −3, mittel −5, schwer −7 Stress</li></ul>' +
      '<h3 class="un">Kaufen' + pgl(19) + '</h3><ul class="pkt"><li>Kosten W3 klein, W6 mittel, W8 teuer oder exotisch; ab 8 gekauft, bei 6–7 mit vollem Stress</li></ul></div></div>';
  }
  if(SCH_TAB === "fallout"){
    var sw = F.schwellen.map(function(s){ return '<tr><td><b>' + (s.bis > 90 ? s.von + '+' : s.von + '–' + s.bis) + ' Stress</b></td><td>' + esc(s.t) + '</td><td>−' + s.abzug + ' Stress</td></tr>'; }).join("");
    var stufen = ["leicht", "mittel", "schwer"].map(function(k){ var S = F.stufen[k]; return '<div class="schf"><h4>' + esc(S.t) + '</h4>' + SP_WID.map(function(w){
      var L = S.x.filter(function(e){ return e.w.indexOf(w.id) >= 0; }); if(!L.length) return "";
      return '<p><b>' + w.t + '</b> ' + schChips(L) + '</p>'; }).join("") + '</div>'; }).join("");
    var bind = ["leicht", "mittel", "schwer"].map(function(k){ return F.bindung.stufen[k].t + ': ' + schChips(F.bindung.stufen[k].x); }).join(" ");
    return '<div class="sch2"><div><h3 class="un">Schwellen' + pgl(11) + '</h3><table class="tbl">' + sw + '</table><p class="leise">W10 niedriger als der Gesamtstress: Fallout. Freiplätze zählen nicht zum Gesamtstress.</p></div>' +
      '<div><h3 class="un">Bindungs-Fallout' + pgl(15) + '</h3><p class="sbf">' + bind + '</p></div></div><div class="sch3">' + stufen + '</div>';
  }
  if(SCH_TAB === "tags"){
    return '<h3 class="un">Waffen' + pgl(21) + '</h3><div class="sch4">' + SP_TAGS.waffen.map(function(t){ return '<p><b>' + esc(t.t) + '</b> ' + md(t.x) + '</p>'; }).join("") + '</div>' +
      '<h3 class="un">Rüstung' + pgl(22) + '</h3><div class="sch4">' + SP_TAGS.ruestung.map(function(t){ return '<p><b>' + esc(t.t) + '</b> ' + md(t.x) + '</p>'; }).join("") + '</div>';
  }
  return '<div class="sch2"><div>' + (window.gBlock && gById("standard") ? gBlock(gById("standard"), {ohneZiel:true}) : "") + '</div>' +
    '<div><h3 class="un">NSC und Stress' + pgl(11) + '</h3><ul class="pkt"><li>NSC markieren Stress wie Spielende, haben aber nur einen Widerstand</li><li>Erleidet ein NSC Gesamtstress in Höhe seines Widerstands, flieht er, scheidet aus dem Konflikt aus oder tut, was die Spielenden wollen</li><li>Die Spielleitung würfelt nicht für NSC-Handlungen: die Spielenden würfeln, um zu reagieren (S. 77)</li></ul></div></div>';
}
function schDraw(){
  var m = document.getElementById("schm"); if(!m) return;
  m.querySelector(".schk").innerHTML = '<div class="schtabs">' + SCH_TABS.map(function(t){ return '<a class="' + (SCH_TAB === t[0] ? 'on' : '') + '" onclick="schTab(\'' + t[0] + '\')">' + t[1] + '</a>'; }).join("") + '<span class="x" onclick="schClose()" title="Schließen">×</span></div><div class="schb">' + schInhalt() + '</div>';
}
function schClose(){ var m = document.getElementById("schm"); if(m) m.remove(); }
function schirmOpen(){
  var o = document.getElementById("schm"); if(o){ o.remove(); return; }
  var m = modal('<div class="schk"></div>', true); m.id = "schm"; m.classList.add("schirm"); schDraw();
}
SP_VIEW.schirm = function(){ setTimeout(schirmOpen, 0); return viewStart(); };
