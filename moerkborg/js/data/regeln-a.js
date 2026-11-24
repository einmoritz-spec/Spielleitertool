/* Die Regeln – Corebook S. 26–29 (c04): Fähigkeiten & Proben, Tragkraft & Trefferpunkte, Gewalt.
   Eintrag: {id, t (Seitenleiste), p, cols, s:[Abschnitt {h, p, x:[Blöcke]}]} – Abschnitte stehen zeilenweise im Raster */
var MB_REGELN = window.MB_REGELN || [];
MB_REGELN.push(
{id:"faehigkeiten", t:"Fähigkeiten & Proben", p:26, cols:2, s:[
 {h:"Fähigkeiten", p:26, x:[
  {t:"tab", cols:["Fähigkeit","Wird benutzt für"], rows:[
   ["Geschicklichkeit","Verteidigen, Balancieren, Schwimmen, Fliehen"],
   ["Präsenz","Wahrnehmen, Zielen, Bezaubern, Mächte wirken"],
   ["Stärke","Zermalmen, Heben, Zuschlagen, Ringen"],
   ["Zähigkeit","Gift/Kälte/Hitze widerstehen, einen Sturz überleben"]]},
  {t:"p", x:"Würfle **3W6** und erzeuge mithilfe der Tabelle rechts jeden Fähigkeitswert von −3 bis +3. Die Summe wird im Spiel nicht verwendet, sobald der Charakter erschaffen ist, nur der Tabellenwert."},
  {t:"tab", cols:["3W6","Wert"], rows:[["1–4","−3"],["5–6","−2"],["7–8","−1"],["9–12","±0"],["13–14","+1"],["15–16","+2"],["17–20","+3"]]},
  {t:"p", x:"Spielercharaktere, die nicht mit den optionalen Klassen erschaffen wurden, können für zwei ihrer Fähigkeiten 4W6 würfeln und den niedrigsten Würfel streichen. Wenn der Charakter später verbessert wird, kann eine Fähigkeit nie über +6 oder unter −3 steigen."}
 ]},
 {h:"Proben", p:26, x:[
  {t:"p", x:"Proben werden gegen einen **Schwierigkeitsgrad** (SG) abgelegt. Um zu bestehen, würfle W20 ± deine Fähigkeit; das Ergebnis muss gleich oder höher als der SG sein. Kreaturen benutzen keine Fähigkeiten, sie würfeln nur einen W20 gegen den SG. Zum Beispiel: *Bärenfalle finden SG14* oder *rotem Gift widerstehen SG12*."},
  {t:"h", x:"Schwierigkeitsgrade (SG)"},
  {t:"tab", cols:["SG","Bedeutung"], rows:[
   ["6","so einfach, dass Leute lachen, wenn du scheiterst"],
   ["8","Routine, aber mit etwas Chance zu scheitern"],
   ["10","ziemlich einfach, aber nicht einfach genug, um nicht zu würfeln"],
   ["12","normal"],["14","schwierig"],["16","wirklich schwer"],["18","sollte nicht möglich sein"]]}
 ]}
]},
{id:"tragkraft", t:"Tragkraft & Trefferpunkte", p:27, cols:2, s:[
 {h:"Tragkraft", p:27, x:[
  {t:"p", x:"Du kannst **Stärke + 8** normal große Gegenstände ohne Probleme tragen. Danach erhöht sich der SG bei Proben auf Stärke und Geschicklichkeit um 2 (von 12 auf 14 usw.). Es ist unmöglich, mehr als das Doppelte von Stärke + 8 zu tragen."},
  {t:"p", c:"kl", x:"*Zum Beispiel:* Brecheisen, Schmalz, Schriftrollen, Fackeln. *Aber nicht:* Ambosse, Truhen, Leitern, Leichen."}
 ]},
 {h:"Trefferpunkte (TP)", p:28, x:[
  {t:"p", x:"Beginne mit **Zähigkeit + W8** TP. Im schlimmsten Fall 1 TP, aber nie weniger."},
  {t:"tab", cols:["TP","Zustand"], rows:[["Null TP","gebrochen"],["Negative TP","tot"]]}
 ]}
]},
{id:"gewalt", t:"Gewalt", p:29, cols:2, s:[
 {h:"Gewalt", p:29, wide:1, x:[
  {t:"p", c:"w", x:"**Spieler** würfeln sowohl für ihre Angriffe als auch für ihre Verteidigungen. Kreaturen und Feinde würfeln im Kampf nicht."}
 ]},
 {h:"Initiative", x:[
  {t:"p", c:"w", x:"Würfle **W6**"},
  {t:"p", x:"1–3: Feinde handeln zuerst  \n4–6: SC handeln zuerst"},
  {t:"p", x:"Geschicklichkeit + W6 für individuelle Initiative oder um zu bestimmen, wer innerhalb der Gruppe zuerst handelt."}
 ]},
 {h:"Angriff und Verteidigung", x:[
  {t:"tab", rows:[["**Nahkampf**","Probe auf **Stärke** SG12"],["**Fernkampf**","Probe auf **Präsenz** SG12"],["**Verteidigung**","Probe auf **Geschicklichkeit** SG12. Misslingt sie, trifft dich der Feind."]]},
  {t:"p", x:"Feinde greifen einmal pro Runde an, sofern nicht anders angegeben. Der SG für Angriffe und Verteidigung wird wie bei jeder Probe modifiziert."}
 ]},
 {h:"Krit (natürliche 20)", x:[
  {t:"p", x:"**Angriff:** Doppelter Schaden, Rüstung/Schutz wird ebenfalls um eine Stufe herabgesetzt."},
  {t:"p", x:"**Verteidigung:** Der SC erhält einen freien Angriff."},
  {t:"h", x:"Patzer (natürliche 1)"},
  {t:"p", x:"**Angriff:** Die Waffe zerbricht oder geht verloren."},
  {t:"p", x:"**Verteidigung:** Der SC nimmt doppelten Schaden, und die Rüstung wird um eine Stufe herabgesetzt."}
 ]},
 {h:"Gebrochen (W4)", x:[
  {t:"tab", rows:[
   ["1","Fällt für W4 Runden bewusstlos zu Boden, erwacht mit W4 TP."],
   ["2","Würfle W6: 1–5 = gebrochene oder abgetrennte Gliedmaße. 6 = Auge verloren. Kann W4 Runden nicht handeln, wird dann mit W4 TP wieder aktiv."],
   ["3","Blutung: Tod in W2 Stunden, sofern nicht behandelt. Alle Proben sind in der ersten Stunde SG16, in der letzten Stunde SG18."],
   ["4","Tot."]]}
 ]},
 {h:"Rüstung", x:[
  {t:"stufen", x:[["−W2","1. Stufe"],["−W4","2. Stufe"],["−W6","3. Stufe"]]},
  {t:"p", x:"Wenn Rüstung beschädigt wird, bleiben die Abzüge auf Stärke- und Geschicklichkeitsproben unverändert. Rüstung, die **unter die 1. Stufe** herabgesetzt wird, ist ruiniert und kann nicht repariert werden. Zu den Reparaturkosten siehe Ausrüstung auf S. 25."}
 ]},
 {h:"Wie lang ist eine Runde?", p:30, x:[
  {t:"p", x:"Eine Runde reicht aus, um einen Angriff auszuführen (oder eine Macht einzusetzen) und einen normal großen Raum zu durchqueren. Gewöhnlich gibt es 10 Runden in einer Minute."}
 ]}
]}
);
