/* The Spire – „Regeln in Kürze“ als Grafik (Quickstart S. 7), auf Deutsch nachgebaut */
function rgW10(z){
  return '<svg class="rgw" viewBox="0 0 100 100"><g transform="rotate(-14 50 50)" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linejoin="round">' +
    '<path d="M50 5 L93 38 L89 66 L50 95 L11 66 L7 38 Z"/><path d="M50 5 L77 52 L50 68 L23 52 Z M50 68 L50 95 M77 52 L89 66 M23 52 L11 66"/>' +
    '<text x="50" y="52" text-anchor="middle" font-size="28" font-family="SpGeared,Impact,sans-serif" fill="currentColor" stroke="none" transform="rotate(-30 50 44)">' + z + '</text></g></svg>';
}
function regelGrafik(){
  var s1 = [["Mit 1W10 beginnen", ""], ["Passende Fertigkeit", "+"], ["Passende Domäne", "+"], ["Passende Meisterschaft", "+"], ["+1W10 pro Helfer", "++"], ["−1W10 pro Schwierigkeit", "−"]];
  var pool = s1.map(function(x){ return '<div class="rg1"><div class="rgz">' + (x[1] ? '<span class="rgop' + ((x[1] === "++" || x[1] === "−") ? ' v' : '') + '">' + (x[1] === "++" ? "+<br>+<br>+" : x[1] === "−" ? "–<br>–<br>–" : "+") + '</span>' : '') + rgW10("0") + '</div><small>' + x[0] + '</small></div>'; }).join("");
  var wurf = [9, 7, 3, 1].map(function(z){ return rgW10(z); }).join("");
  return '<div class="rg" data-pgbook="sp_qs">' +
    '<h4>1. Würfelpool zusammenstellen</h4><div class="rgpool">' + pool + '</div>' +
    '<h4>2. Würfelpool werfen</h4><div class="rgwurf">' + wurf + '</div><p><b>Wird der Würfelpool auf 0 oder weniger reduziert,</b> werft 1W10.</p>' +
    '<h4>3. Erfolg und Fehlschlag bestimmen</h4><p><b>Prüft euren höchsten Würfel:</b></p>' +
    '<div class="rgtab">' +
      '<div class="k1 c1">Kritischer<br>Fehlschlag</div><div class="k2 c2">Fehlschlag</div><div class="k3 c3">Erfolg. Fügt einem Gegner mit den Würfeln eurer Ausrüstung Stress zu.</div><div class="k4 c4">Kritischer Erfolg. +1 Stress zufügen.</div>' +
      '<div class="n c1">1</div><div class="n c2 sp">2<span>3</span><span>4</span><span>5</span></div><div class="n c3a sp">6<span>7</span></div><div class="n c3b sp">8<span>9</span></div><div class="n c4">10</div>' +
      '<div class="f1 c1">Doppelten Stress erleiden.</div><div class="f2">Ihr und alle Helfer erleidet Stress auf einem passenden Widerstand.</div><div class="f3">Kein Stress.</div>' +
    '</div><p><b>Wurde euer Würfelpool in Schritt 2 auf 0 oder weniger reduziert,</b> verringert euer Ergebnis um eine Stufe: 8–9 auf 6–7, 6–7 auf 2–5 usw.</p>' +
    '<h4>4. Fallout erleiden</h4><p><b>Wenn ihr Stress erlitten habt,</b> prüft die Spielleitung auf Fallout, und zwar so:</p>' +
    '<div class="rgfl">' +
      '<div class="rgb dk a">1W10 werfen</div><div class="rgln h1"></div><div class="rgq a2">Niedriger als<br>Gesamtstress?</div><div class="rgln h2"><span>Nein</span></div><div class="rgb kein">Kein Fallout</div>' +
      '<div class="rgln v1"><span>Ja</span></div>' +
      '<div class="rgb dk sc">SC erleidet Fallout</div><div class="rgbr"></div>' +
      '<div class="rgs s1"><span>2–4 Gesamtstress</span></div><div class="rgb le">Leichter Fallout</div>' +
      '<div class="rgs s2"><span>5–8 Gesamtstress</span></div><div class="rgb mi">Mittlerer Fallout</div>' +
      '<div class="rgs s3"><span>9+ Gesamtstress</span></div><div class="rgb sw">Schwerer Fallout</div>' +
      '<div class="rgq wt" onclick="go(\'nach/regeln/toedlich\')">Für weniger tödlichen Fallout<br>Regeln, siehe Spire S. 13</div>' +
    '</div></div>';
}
