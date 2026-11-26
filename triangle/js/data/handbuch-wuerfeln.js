/* Handbuch › Würfeln (S. 32–45) */
TA_TEXT["h/wuerfeln/wuerfel"] = [
 {t:"sp", x:[
  ["In unserem Universum konkurrieren viele Interessen. Wir arbeiten hart daran, diese Zahl zu erhöhen; derzeit hält die Triangle Agency rund 25 % der Anteile an der Realität. Unsere Kontrolle über das Mögliche stellt in diesem Tabletop-Rollenspiel der vierseitige Würfel dar.",
   "Glücklicherweise erobern wir in fünf bekannten Zukünften den gesamten Markt. Dank unseres **Dynamischen Retrokausalen Wahrscheinlichkeits-Verstärkungssystems** steuert jede dieser Zukünfte einen Würfel zu deinem Wurf bei, damit sie wahrscheinlicher eintritt. Du hast also sechs vierseitige Würfel, wann immer du auf die Macht der Agency zurückgreifst.",
   "Du würfelst aus zwei Gründen, die wir gleich genauer erläutern:",
   {t:"liste", x:["**Die Agency bitten,** die jüngste Vergangenheit zu ändern.", "**Deine Anomalie-Fähigkeiten** sicher und kontrolliert einsetzen."]},
   "**Du würfelst immer sechs vierseitige Würfel.** Prüfe das Ergebnis und zähle die Würfel, die eine {3} zeigen. Wir nennen sie „{3}en“.",
   "**Ist mindestens eine {3} dabei,** ist das ein Erfolg!",
   "**Zeigt dein Wurf keine einzige {3},** ist das ein Fehlschlag. Jede Fähigkeit hat eigene Ergebnisse für Erfolg und Fehlschlag."],
  [{t:"kasten", h:"Grundergebnisse", b:[{t:"wurf", x:[
    {img:"wuerfel-wurf-erfolg", ok:1, x:"**Mindestens eine {3}:** Du fragst erfolgreich die Agency oder erzielst das „Bei Erfolg“-Ergebnis einer Anomalie-Fähigkeit. Jede Anzahl von {3}en zählt als Erfolg."},
    {img:"wuerfel-wurf-fehlschlag", ok:0, x:"**Keine {3}:** Es gelingt dir nicht, die Macht der Agency zu kanalisieren – mit unangenehmen Folgen oder dem „Bei Fehlschlag“-Ergebnis einer Anomalie-Fähigkeit."}]}]}]
 ]},
 {t:"html", x:'<img class="streu" src="img/regeln/full/wuerfel-streuung.webp" alt="">'}
];
TA_TEXT["h/wuerfeln/chaos"] = [
 {t:"sp", x:[
  [{t:"lead", x:"Die Realität direkt zu beeinflussen birgt Risiken, selbst für die Agency."},
   "Jeder Wurf lädt Chaos ein, in unsere Welt zu sickern und feindselige Anomalien zu stärken. Dein GM gibt Chaos aus, wenn eine Anomalie bestimmte übernatürliche Handlungen gegen dich und deine Verbündeten unternimmt.",
   {t:"html", x:'<p class="merk">Mehr Chaos = mehr Probleme!*</p>'},
   {t:"klein", x:"*Das verläuft nicht ganz linear. Einzelheiten siehe Schaubild."},
   "**Wenn du würfelst, legt jeder Würfel, der keine {3} zeigt, ein Chaos** in den Chaos-Pool. Ein gewöhnlicher Wurf kann also allein bis zu sechs Chaos erzeugen!"],
  [{t:"html", x:TA_CHAOSGRAF}, {t:"klein", x:"Probleme pro Chaos"}]
 ]},
 {t:"html", x:'<div class="chaosw"><section><img src="img/regeln/full/wuerfel-nur-dreien.webp" alt=""><b>+0<img src="img/zeichen/symbol-chaos-wirbel.png" alt=""><small>Chaos</small></b></section><section><img src="img/regeln/full/wuerfel-wurf-fehlschlag.webp" alt=""><b>+6<img src="img/zeichen/symbol-chaos-wirbel.png" alt=""><small>Chaos</small></b></section></div>'},
 {t:"html", x:'<div class="absturz"><img src="img/regeln/full/wuerfel-chaos-blau.webp" alt="">'},
 {t:"fenster", art:"fehler", z:"symbol-warnung", titel:"Fehler", w:420, h:"Etwas ist schiefgegangen.", b:["Die Verwendung visueller Elemente mit mehr als zwei Dimensionen wird eingestellt, bis das Problem behoben ist."]},
 {t:"html", x:'</div>'}
];
