/* Into the Odd – Kapitel 8 (Spielleitung, S. 42–45), Kapitel 9 (Schätze, S. 47–49) */
var ITO = window.ITO = window.ITO || {};
ITO.sl = {
 intro: "Eine gute Spielleitung stellt den Spielern interessante Entscheidungen vor und sorgt dafür, dass diese Entscheidungen für das Spiel wirklich Gewicht haben.",
 grund: [
  ["Informationen geben","Du bist Auge, Ohr und Nase der Spieler. Beschreibe die Lage und beantworte Fragen großzügig. Es sollte Überraschungen geben, aber die Spieler sollen das Gefühl haben, dass ihre Entscheidungen auf genug Informationen beruhen. Stelle sicher, dass die Spieler wissen, welche Risiken ihre Handlungen bergen."],
  ["Entscheidungen bieten","Jede Situation sollte die Spieler vor eine interessante Wahl stellen. Das Abwägen von Risiko gegen mögliche Belohnung ist ein wesentlicher Teil des Spiels, also hilf ihnen, die möglichen Folgen ihrer Handlung zu verstehen. Denk daran: Leichte Entscheidungen machen ein langweiliges Spiel."],
  ["Auswirkungen zeigen","Was immer die Spieler tun, das Spiel geht weiter. Sorge dafür, dass jede Entscheidung Auswirkungen auf die aktuelle und die weitere Lage hat. Verlangte die Handlung der Spieler einen Rettungswurf, sollten Erfolg und Misserfolg beide Folgen haben."]
 ],
 werte: [
  ["Werte verstehen","Die meisten Menschen haben Werte zwischen 5 und 15. Werte von 1 und 20 stehen für die äußersten Extreme. Ist kein Wert angegeben, nimm 10 an."],
  ["Rettungswürfe verstehen","Rettungswürfe gibt es nur als Folge einer Handlung oder Entscheidung. Sie sind der Versuch, etwas Schlimmem zu entgehen, sei es, sich zu verirren, oder ein grausiger Tod. **STÄ:** Schaden durch körperliche Kraft vermeiden und Belastungen des Körpers aushalten. **GES:** Schaden durch schnelle Reaktionen, Präzision und Anmut vermeiden. **WIL:** Schaden durch geistige Beherrschung, Selbstvertrauen und Selbstglauben vermeiden."],
  ["Glückswürfe","Manchmal willst du ein Element des Zufalls ohne Rettungswurf, besonders in Situationen, die vom Glück bestimmt werden oder außerhalb der drei Werte liegen. Würfelt dafür W6. Ein hoher Wurf begünstigt die Spieler, ein niedriger bedeutet Pech. Die Spielleitung entscheidet, was ein bestimmtes Ergebnis für die Lage bedeutet."],
  ["Schaden","Schaden durch herabfallende Felsen, Explosionen und andere Quellen außerhalb des normalen Kampfes liegt zwischen W4 und W12, W20 nur in Sonderfällen. Überlege, wie es einen Durchschnittsmenschen träfe. Ein Sturz, der einen unerfahrenen Charakter ziemlich wahrscheinlich verletzt, kann W8 Schaden verursachen, ein riesiger Fels, der die meisten zermalmen würde, W12. Gift verursacht meist den Verlust von Werten. Effekte wie Blindheit beeinträchtigen Angriffe und verlangen Rettungswürfe für meist einfache Handlungen."],
  ["Zuglänge","Ein Zug dauert lange genug, dass ein Charakter sich bewegen und eine einzelne Aktion ausführen kann. Statt sich zu bewegen, dürfen Charaktere andere kleine Aktionen ausführen, etwa die Waffe wechseln. Züge sind ein abstraktes Konzept, die Länge in Echtzeit spielt keine Rolle."]
 ]
};
ITO.schatz = {
 intro: "Verschiedene Arten von Schätzen, von Edelsteinen über Kunstwerke bis zu nützlichen Gegenständen, haben einen bestimmten Wert. Händler versuchen, den Preis zu drücken, oder können sich teure Stücke gar nicht leisten.",
 geld: "Alle Münzen werden gegen den Silberstandard-Schilling (s) bewertet. Ein Schilling ist, was ein gewöhnlicher Fabrikarbeiter an einem Tag verdient. Es gibt eine riesige Vielfalt an Münzen, die gegen den Schilling bewertet werden, zwei davon sind besonders verbreitet.",
 muenzen: [
  ["Kupferpence (p)","Ein Hundertstel Schilling wert. Zehn Pence kaufen eine Runde billiger Getränke in einer üblen Kneipe."],
  ["Goldgulden (g)","100 Schilling wert. Ein Gulden kauft ein gutes Pferd, einen Wagen oder ein wertvolles Schmuckstück."],
  ["Banknoten","Für große Geschäfte. Noten reichen von 10 bis 1.000 Gulden."]
 ],
 arc: [
  ["Ein Arcanum erkennen","Wenn ein Charakter ein Arcanum zum ersten Mal in die Hand nimmt, spürt er sein Wesen, aber nicht seine konkrete Kraft. Er muss einen WIL-Rettungswurf bestehen, um die Kraft zu verstehen, bevor er sie nutzt, sonst wird das Arcanum dabei aktiviert."],
  ["Regeln brechen","Nicht alle Arcana funktionieren wie die, die neue Charaktere bekommen. Arcana können alles und unterliegen keinen Beschränkungen."],
  ["Nebenwirkungen","Ein Arcanum kann verschiedene Nebenwirkungen zeigen: ein dauerhaftes Leuchten, das Erfordernis von Tageslicht oder eine eigene Intelligenz, die psychisch kommuniziert."],
  ["Große Arcana","Nicht jedes Arcanum ist so tragbar wie ein Zauberstab oder Medaillon. Viele ähneln eher Einrichtungsgegenständen oder Bauwerken.","Beispiel: Utopisches Tor","Dieses Metallgebilde wirkt als Portal in eine andere Welt, wenn jemand eine Stunde lang das nötige Ritual durchführt. Das Portal zu schließen erfordert einen WIL-Rettungswurf, sonst verliert der Charakter W12 WIL und das Portal bleibt offen. Der Übergang in die andere Welt und zurück ist sofort und unbeschränkt."],
  ["Verbrauchbare Arcana","Ein Arcanum kann verlangen, dass etwas verbraucht wird, oder nach einer oder mehreren Anwendungen ganz verschwinden.","Beispiel: Fünf-Dämonen-Kugel","Wird diese Kugel zerschmettert, beschwört sie fünf schreckliche Feuervögel (STÄ 17, 10 hp, W10 Schaden). Werden alle fünf getötet, formt sich die Kugel am Leichnam des zuletzt Getöteten neu."],
  ["Arcana-Waffen","Manche Arcana funktionieren neben ihrer Fähigkeit als Waffe. Sie können sich dennoch ganz anders verhalten als eine normale Waffe ihrer Art.","Beispiel: Blaueisen-Todesgewehr","Diese schwere Waffe (W10 Schaden, kann nicht gleichzeitig bewegt und abgefeuert werden) feuert statt eines Schusses einen Strahl pfeifenden blauen Lichts. Das Gewehr ignoriert Rüstung, und wer von ihm kritischen Schaden erleidet, explodiert in blauem Feuer. Alle, die in dieser Explosion stehen, erleiden W6 Schaden."]
 ]
};
