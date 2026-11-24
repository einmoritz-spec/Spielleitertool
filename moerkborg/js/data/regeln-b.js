/* Die Regeln – Corebook S. 31–33 (c04): Rast, Reaktion, Moral; Besser werden */
var MB_REGELN = window.MB_REGELN || [];
MB_REGELN.push(
{id:"rast", t:"Rast, Reaktion, Moral", p:31, cols:3, s:[
 {h:"Rast", p:31, x:[
  {t:"p", x:"Verschnaufe, trink etwas. Stelle **W4 TP** wieder her. Eine volle Nacht Schlaf stellt **W6 TP** wieder her. Ohne Essen oder Trinken werden beim Rasten keine TP wiederhergestellt, und nach zwei Tagen **verliert** ein hungernder SC **W4 TP pro Tag**."},
  {t:"p", x:"Ein infizierter Charakter zieht keinen Nutzen aus dem Rasten. Stattdessen gehen täglich W6 TP verloren."}
 ]},
 {h:"Reaktion (2W6)", p:31, x:[
  {t:"p", x:"Wenn du Kreaturen begegnest, deren Reaktion ungewiss ist."},
  {t:"tab", rows:[["2–3","Töten!"],["4–6","Zornig"],["7–8","Gleichgültig"],["9–10","Fast freundlich"],["11–12","Hilfsbereit"]]}
 ]},
 {h:"Moral", p:31, x:[
  {t:"p", x:"Die meisten Feinde kämpfen nicht bis zum letzten Blutstropfen. Würfle auf Moral, wenn:"},
  {t:"ul", x:["der Anführer getötet wird","die Hälfte der Gruppe ausgeschaltet ist","ein einzelner Feind nur noch ⅓ seiner TP übrig hat"]},
  {t:"p", x:"Würfelst du mit **2W6 mehr als den Moralwert der Kreatur**, ist sie demoralisiert. Würfle W6, um zu sehen, ob der Feind (1–3) flieht oder (4–6) sich ergibt."}
 ]}
]},
{id:"besser", t:"Besser werden", p:33, cols:2, s:[
 {h:"Besser werden (oder schlimmer)", p:33, wide:1, x:[
  {t:"p", x:"Der Spielleiter entscheidet, wann ein Charakter verbessert werden soll. Das kann nach Abschluss eines Szenarios sein, nach dem Töten mächtiger Feinde oder nach dem Heimbringen von Schätzen."},
  {t:"p", c:"kl", x:"Wenn das geschieht, tritt Folgendes ein:"}
 ]},
 {h:"Mehr TP", x:[
  {t:"p", x:"Würfle 6W10. Ist das Ergebnis gleich oder größer als deine aktuellen maximalen TP, erhöhe sie um W6."}
 ]},
 {h:"Fähigkeitsänderungen", x:[
  {t:"p", x:"Würfle für jede Fähigkeit einen W6. Ergebnisse gleich oder größer als die Fähigkeit erhöhen sie um 1, bis maximal +6. Ergebnisse unter der Fähigkeit senken sie um 1."},
  {t:"p", x:"**Fähigkeiten von −3 bis +1** werden immer um 1 erhöht, außer das W6-Ergebnis ist 1. Die Fähigkeit wird dann um 1 gesenkt, aber nie unter −3."}
 ]},
 {h:"Im Schutt findest du: W6", x:[
  {t:"tab", rows:[["0–3","nichts"],["4","3W10 Silber"],["5","eine unreine Schriftrolle"],["6","eine heilige Schriftrolle"]]}
 ]}
]}
);
