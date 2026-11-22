/* Regelübersicht (Grundbuch S. 207) – übersetzt */
window.HT_NACH = window.HT_NACH || {};
(function(){
function ks(h, a){ return {t:"kasten", h:h, b:a}; }
function ul(a){ return {t:"ul", x:a}; }
function W(a){ return {t:"werte", z:a}; }
function p(x){ return {t:"p", x:x}; }
window.HT_NACH.regeluebersicht = {t:"Regelübersicht", p:207, subs:[
{id:"uebersicht", t:"Regelübersicht", p:207, secs:[
 {id:"wuerfeln", t:"Würfeln", p:207, b:[
  {t:"grid", n:3, x:[
   [{t:"h", x:"Würfelpool bilden"},
    ul(["Wirf 1W10.","1W10 für den passenden Skill.","1W10 für die passende Domain.","1W10 für passende Mastery."]),
    {t:"h", x:"Würfelpool werfen"},
    {t:"h", x:"Würfel für Schwierigkeit entfernen"},
    ul(["Bei Standard entferne keine Würfel.","Bei Riskant entferne den höchsten Würfel.","Bei Gefährlich entferne die zwei höchsten Würfel.","Wird der Würfelpool auf 0 oder weniger verringert, wirf 1W10 – bei einer 10 Erfolg mit Preis, sonst Fehlschlag."])],
   [{t:"h", x:"Erfolg und Misserfolg bestimmen"},
    p("Vergleiche deinen höchsten verbliebenen Würfel mit dieser Tabelle:"),
    W([["1","Kritischer Fehlschlag (nimm doppelten Stress)."],["2–5","Fehlschlag (nimm Stress)."],["6–7","Erfolg mit Preis (nimm Stress)."],["8–9","Erfolg (nimm keinen Stress)."],["10","Kritischer Erfolg (ausgehender Stress-Würfel steigt um 1 Stufe)."]]),
    {t:"h", x:"Stress zufügen"},
    p("Gehst du weder gegen einen Gegner noch einen Delve vor, überspringe diesen Schritt. Bei 6 oder höher fügst du einem passenden Gegner oder Delve Stress zu, mit der Würfelgröße der Ausrüstung der Figur.")],
   [{t:"h", x:"Stress und Fallout auflösen"},
    ul(["Hat die Spielerfigur Stress markiert, wirft die Spielleitung einen W12 und vergleicht ihn mit ihrem Gesamtstress.","Ist das Ergebnis höher als der Gesamtstress, erleidet sie keinen Fallout.","Ist das Ergebnis niedriger als der Gesamtstress und liegt zwischen 1 und 6, erleidet die Figur leichten Fallout und löscht allen Stress bei der zugehörigen Resistenz.","Ist das Ergebnis niedriger als der Gesamtstress und liegt zwischen 7 und 12, erleidet die Figur schweren Fallout und löscht allen Stress."]),
    {t:"h", x:"Schutz"},
    p("Wenn du Stress bei einer Resistenz markierst, verringere den erlittenen Gesamtstress um den Wert des Schutzes.")]
  ]}
 ]},
 {id:"begriffe", t:"Skills, Domains, Resistenzen", p:207, b:[
  {t:"grid", n:3, x:[
   [ks("Skills", [W([["Compel","Drohungen, Lügen, Schmeichelei oder Diplomatie."],["Delve","Klettern, kriechen, erkunden, eine Route planen."],["Discern","Sehen, riechen, fühlen, hören (an schlechten Tagen vielleicht schmecken)."],["Endure","Den Auswirkungen des Herzens auf Körper und Geist widerstehen."],["Evade","Weglaufen, Angriffen ausweichen, Verfolger abschütteln."],["Hunt","Etwas oder jemanden aufspüren."],["Kill","Menschen und Kreaturen ermorden."],["Mend","Reparieren, bauen, notdürftig zusammenflicken, heilen."],["Sneak","Verstecken, untertauchen, Gegenstände verbergen."]])])],
   [ks("Domains", [W([["Cursed","Aktiv schädliche Orte."],["Desolate","Ödland und verlassene Städte."],["Haven","Siedlungen, in denen Menschen leben, arbeiten und Gemeinschaften bilden."],["Occult","Verborgenes Wissen und schwarze Magie."],["Religion","Götter und Dinge, die wie Götter verehrt werden."],["Technology","Maschinen, Gebäude und Geräte."],["Warren","Enge, dichte Korridore."],["Wild","Wildnis, Pflanzen und Tiere."]])])],
   [ks("Resistenzen", [W([["Blood","Körperliche Erschöpfung, Schmerz, Blutverlust und Verletzung."],["Echo","Verformung von Körper und Geist durch die unwirklichen Energien des Herzens."],["Mind","Wahnsinn, Instabilität und Seltsamkeiten."],["Fortune","Pech, Unfähigkeit und Selbstüberschätzung."],["Supplies","Verlust von Ressourcen, beschädigte Ausrüstung und Schulden."]]), p("Wenn du Stress bei einer Resistenz markierst, verringere den erlittenen Gesamtstress um den Wert des Schutzes.")])]
  ]},
  {t:"grid", n:2, x:[
   [{t:"h", x:"Fallout"},
    p("Jedes Mal, wenn du Stress markierst, wirft die Spielleitung einen W12 und vergleicht das Ergebnis mit deinem aktuellen Gesamtstress. Wirft sie gleich oder niedriger, erleidest du Fallout: leichten Fallout bei 1–6, schweren Fallout bei 7+. Die Spielleitung wählt, welchen Fallout sie anwendet und ob sie zwei Fallouts derselben Stufe kombiniert, um sie aufzuwerten. Zwei schwere ergeben einen kritischen Fallout, der dich tötet (oder Schlimmeres).")],
   [{t:"h", x:"Schwierigkeit"},
    p("Die Spielleitung nennt dir die Schwierigkeit einer Handlung vor dem Wurf – Standard (entferne keine Würfel), Riskant (entferne den höchsten Würfel), Gefährlich (entferne die zwei höchsten Würfel) und Unmöglich (die Handlung scheitert automatisch).")]
  ]}
 ]}
]}
]};
})();
