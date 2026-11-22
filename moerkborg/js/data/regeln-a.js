/* Die Regeln – Corebook S. 26–31 (c04): Fähigkeiten, Tragkraft, Trefferpunkte, Gewalt, Rast/Reaktion/Moral.
   Grundlage für Spieltisch (Gewalt, Moral); S. 33 „Besser werden“ und Anzeige der Seiten folgen in Bauschritt 3. */
var MB_REGELN = window.MB_REGELN || [];
MB_REGELN.push(
{id:"faehigkeiten", t:"Fähigkeiten", p:26, x:[
 {t:"tab", cols:["Fähigkeit","Wird benutzt für"], rows:[
  ["Geschicklichkeit","Verteidigen, Balancieren, Schwimmen, Fliehen"],
  ["Präsenz","Wahrnehmen, Zielen, Bezaubern, Mächte wirken"],
  ["Stärke","Zermalmen, Heben, Zuschlagen, Ringen"],
  ["Zähigkeit","Gift/Kälte/Hitze widerstehen, einen Sturz überleben"]]},
 {t:"h", x:"Fähigkeiten"},
 {t:"p", x:"Würfle **3W6** und erzeuge mithilfe der Tabelle rechts jeden Fähigkeitswert von −3 bis +3. Die Summe wird im Spiel nicht verwendet, sobald der Charakter erschaffen ist, nur der Tabellenwert."},
 {t:"tab", cols:["3W6","Wert"], rows:[["1–4","−3"],["5–6","−2"],["7–8","−1"],["9–12","±0"],["13–14","+1"],["15–16","+2"],["17–20","+3"]]},
 {t:"p", x:"Spielercharaktere, die nicht mit den optionalen Klassen erschaffen wurden, können für zwei ihrer Fähigkeiten 4W6 würfeln und den niedrigsten Würfel streichen. Wenn der Charakter später verbessert wird, kann eine Fähigkeit nie über +6 oder unter −3 steigen."},
 {t:"h", x:"Schwierigkeitsgrade (SG)"},
 {t:"tab", cols:["SG","Bedeutung"], rows:[
  ["6","so einfach, dass Leute lachen, wenn du scheiterst"],
  ["8","Routine, aber mit etwas Chance zu scheitern"],
  ["10","ziemlich einfach, aber nicht einfach genug, um nicht zu würfeln"],
  ["12","normal"],["14","schwierig"],["16","wirklich schwer"],["18","sollte nicht möglich sein"]]},
 {t:"h", x:"Proben"},
 {t:"p", x:"Proben werden gegen einen **Schwierigkeitsgrad** abgelegt. Um zu bestehen, würfle W20 ± deine Fähigkeit; das Ergebnis muss gleich oder höher als der SG sein. Kreaturen benutzen keine Fähigkeiten, sie würfeln nur einen W20 gegen den SG. Zum Beispiel: *Bärenfalle finden SG14* oder *rotem Gift widerstehen SG12*."}
]},
{id:"tragkraft", t:"Tragkraft", p:27, x:[
 {t:"p", x:"Du kannst **Stärke + 8** normal große Gegenstände ohne Probleme tragen, zum Beispiel Brecheisen, Schmalz, Schriftrollen, Fackeln – aber nicht Ambosse, Truhen, Leitern, Leichen. Danach erhöht sich der SG bei Proben auf Stärke und Geschicklichkeit um 2 (von 12 auf 14 usw.). Es ist unmöglich, mehr als das Doppelte von Stärke + 8 zu tragen."}
]},
{id:"trefferpunkte", t:"Trefferpunkte (TP)", p:28, x:[
 {t:"p", x:"Beginne mit **Zähigkeit + W8** TP. Im schlimmsten Fall 1 TP, aber nie weniger."}
]},
{id:"gewalt", t:"Gewalt", p:29, x:[
 {t:"p", x:"**Spieler** würfeln sowohl für ihre Angriffe als auch für ihre Verteidigungen. Kreaturen und Feinde würfeln im Kampf nicht."},
 {t:"h", x:"Initiative"},
 {t:"p", x:"Würfle **W6**. Bei 1–3 beginnen die Feinde, bei 4–6 die Spielercharaktere. Geschicklichkeit + W6 für individuelle Initiative oder um zu bestimmen, wer innerhalb der Gruppe zuerst handelt."},
 {t:"h", x:"Nahkampf"},
 {t:"p", x:"Probe auf **Stärke** SG12."},
 {t:"h", x:"Fernkampf"},
 {t:"p", x:"Probe auf **Präsenz** SG12."},
 {t:"h", x:"Verteidigung"},
 {t:"p", x:"Probe auf **Geschicklichkeit** SG12. Misslingt sie, trifft dich der Feind."},
 {t:"p", x:"Feinde greifen einmal pro Runde an, sofern nicht anders angegeben. Der SG für Angriffe und Verteidigung wird wie bei jeder Probe modifiziert."},
 {t:"h", x:"Krit (natürliche 20)"},
 {t:"p", x:"**Angriff:** Doppelter Schaden, Rüstung/Schutz wird ebenfalls um eine Stufe herabgesetzt. **Verteidigung:** Der SC erhält einen freien Angriff."},
 {t:"h", x:"Patzer (natürliche 1)"},
 {t:"p", x:"**Angriff:** Die Waffe zerbricht oder geht verloren. **Verteidigung:** Der SC nimmt doppelten Schaden, und die Rüstung wird um eine Stufe herabgesetzt."},
 {t:"h", x:"Rüstung"},
 {t:"tab", cols:["Stufe","Schadensminderung"], rows:[["1. Stufe","−W2"],["2. Stufe","−W4"],["3. Stufe","−W6"]]},
 {t:"p", x:"Wenn Rüstung beschädigt wird, bleiben die Abzüge auf Stärke- und Geschicklichkeitsproben unverändert. Rüstung, die **unter die 1. Stufe** herabgesetzt wird, ist ruiniert und kann nicht repariert werden. Zu den Reparaturkosten siehe Ausrüstung auf S. 25."},
 {t:"h", x:"Gebrochen (W4)"},
 {t:"tab", cols:["W4","Folge"], rows:[
  ["1","Fällt für W4 Runden bewusstlos zu Boden, erwacht mit W4 TP."],
  ["2","Würfle W6: 1–5 = gebrochene oder abgetrennte Gliedmaße. 6 = Auge verloren. Kann W4 Runden nicht handeln, wird dann mit W4 TP wieder aktiv."],
  ["3","Blutung: Tod in W2 Stunden, sofern nicht behandelt. Alle Proben sind in der ersten Stunde SG16, in der letzten Stunde SG18."],
  ["4","Tot."]]}
]},
{id:"runde", t:"Wie lang ist eine Runde?", p:30, x:[
 {t:"p", x:"Eine Runde reicht aus, um einen Angriff auszuführen (oder eine Macht einzusetzen) und einen normal großen Raum zu durchqueren. Gewöhnlich gibt es 10 Runden in einer Minute."}
]},
{id:"rast", t:"Rast", p:31, x:[
 {t:"p", x:"Verschnaufe, trink etwas. Stelle **W4 TP** wieder her. Eine volle Nacht Schlaf stellt **W6 TP** wieder her. Ohne Essen oder Trinken werden beim Rasten keine TP wiederhergestellt, und nach zwei Tagen **verliert** ein hungernder SC **W4 TP pro Tag**."},
 {t:"p", x:"Ein infizierter Charakter zieht keinen Nutzen aus dem Rasten. Stattdessen gehen täglich W6 TP verloren."}
]},
{id:"reaktion", t:"Reaktion (2W6)", p:31, x:[
 {t:"p", x:"Wenn du Kreaturen begegnest, deren Reaktion ungewiss ist."},
 {t:"tab", cols:["2W6","Reaktion"], rows:[["2–3","Töten!"],["4–6","Zornig"],["7–8","Gleichgültig"],["9–10","Fast freundlich"],["11–12","Hilfsbereit"]]}
]},
{id:"moral", t:"Moral", p:31, x:[
 {t:"p", x:"Die meisten Feinde kämpfen nicht bis zum letzten Blutstropfen. Würfle auf Moral, wenn der Anführer getötet wird, die Hälfte der Gruppe ausgeschaltet ist oder ein einzelner Feind nur noch ⅓ seiner TP übrig hat."},
 {t:"p", x:"Würfelst du mit **2W6 mehr als den Moralwert der Kreatur**, ist sie demoralisiert. Würfle W6, um zu sehen, ob der Feind (1–3) flieht oder (4–6) sich ergibt."}
]}
);
