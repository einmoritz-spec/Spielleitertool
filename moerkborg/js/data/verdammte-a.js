/* Die Verdammten – Corebook S. 18–25 (c03): Charakter erschaffen, Waffen & Rüstung, Ausrüstung. */
var MB_REGELN = window.MB_REGELN || [];
MB_REGELN.push(
{id:"erschaffen", t:"Charakter erschaffen", p:18, cols:3, s:[
 {h:"Charakter erschaffen", p:18, wide:1, x:[
  {t:"p", c:"w", x:"Zu Beginn bist du, was du besitzt:"},
  {t:"p", x:"In dieser Welt gibt es solche, die Reichtum oder Erlösung suchen. Manche sagen, die Apokalypse sei vermeidbar, sie könne sogar aufgehalten werden. Und doch wandelst du in Zwietracht und Verzweiflung. Eine Hand hält **2W6 × 10 Silber (s),** die andere einen **Wasserschlauch** und **W4 Tage** Proviant. Deine Seele und dein Silber gehören dir und sind gleich leicht zu verlieren."}
 ]},
 {h:"Startausrüstung", p:19, x:[
  {t:"h", x:"W6"},
  {t:"tab", rows:[["1–2","nichts"],["3","**Rucksack** für 7 normal große Gegenstände"],["4","**Sack** für 10 normal große Gegenstände"],["5","**kleiner Wagen** oder ein Gegenstand von oben deiner Wahl"],["6","**Esel,** gar nicht schlecht. Oder einer der obigen deiner Wahl"]]}
 ]},
 {h:"und W12", x:[
  {t:"tab", rows:[["1","**Seil** 30 Fuß"],["2","Präsenz + 4 **Fackeln**"],["3","**Laterne** mit Öl für Präsenz + 6 Stunden"],["4","**Magnesiumstreifen**"],["5","zufällige **unreine Schriftrolle**"],["6","**scharfe Nadel**"],["7","**Medizinkasten** Präsenz + 4 Anwendungen (stoppt Blutung/Infektion und heilt W6 TP)"],["8","**Feile und Dietriche**"],["9","**Bärenfalle** (Präsenz SG14 zum Entdecken, W8 Schaden)"],["10","**Bombe** (versiegelte Flasche, W10 Schaden)"],["11","eine Flasche **rotes Gift** W4 Dosen (Zähigkeit SG12 oder W10 Schaden)"],["12","**silbernes Kruzifix**"]]}
 ]},
 {h:"und W12", x:[
  {t:"tab", rows:[["1","**Lebenselixier** W4 Dosen (heilt W6 TP und beseitigt Infektion)"],["2","zufällige **heilige Schriftrolle**"],["3","**kleiner, aber bösartiger Hund** (W6+2 TP, Biss W4, gehorcht nur dir)"],["4","W4 **Affen,** die dich ignorieren, aber lieben (W4+2 TP, Schlag/Biss W4)"],["5","**erlesenes Parfüm** im Wert von 25s"],["6","**Werkzeugkiste** 10 Nägel, Zange, Hammer, kleine Säge und Bohrer"],["7","**schwere Kette** 15 Fuß"],["8","**Enterhaken**"],["9","**Schild** (−1 TP Schaden oder lass den Schild zerbrechen, um einen Angriff zu ignorieren)"],["10","**Brecheisen** (W4 Schaden)"],["11","**Schmalz** (kann im Notfall als 5 Mahlzeiten dienen)"],["12","**Zelt**"]]},
  {t:"p", c:"kl", x:"Schriftrollen sind die verdrehte Magie von MÖRK BORG. Mehr dazu auf S. 34."}
 ]},
 {h:"Spielercharakter (SC) erschaffen", p:19, x:[
  {t:"ul", x:["Würfle deine Startausrüstung auf dieser Seite aus.","Würfle Waffe und Rüstung aus.","Würfle deine Fähigkeiten.","Würfle deine Trefferpunkte.","Gib deinem Charakter einen Namen, wenn du magst. Er wird dich nicht retten."]}
 ]},
 {h:"Optionale Regeln", x:[
  {t:"ul", x:["Beginne, indem du eine Klasse wählst oder auswürfelst (S. 46 ff.), und folge den Anweisungen der Klasse zum Auswürfeln von Ausrüstung, Waffen und Rüstung.","Würfle auf den Tabellen auf S. 39–43.","Würfle eine Anzahl Omen (S. 38)."]}
 ]}
]},
{id:"waffen", t:"Waffen & Rüstung", p:20, cols:2, s:[
 {h:"Waffen W10", p:20, x:[
  {t:"p", c:"kl", x:"(W6, wenn du mit einer Schriftrolle beginnst)"},
  {t:"tab", rows:[["1","**Oberschenkelknochen** (W4)"],["2","**Stab** (W4)"],["3","**Kurzschwert** (W4)"],["4","**Messer** (W4)"],["5","**Kriegshammer** (W6)"],["6","**Schwert** (W6)"],["7","**Bogen** (W6, mit Präsenz + 10 Pfeilen)"],["8","**Flegel** (W8)"],["9","**Armbrust** (W8, mit Präsenz + 10 Bolzen)"],["10","**Zweihänder** (W10)"]]},
  {t:"p", x:"*Unbewaffnet: W2 Schaden."}
 ]},
 {h:"Rüstung W4", p:24, x:[
  {t:"p", c:"kl", x:"(nur W2, wenn du mit einer Schriftrolle beginnst)"},
  {t:"tab", rows:[["1","**keine Rüstung** (Stufe 0)"],["2","**leicht** (Fell, gepolstertes Tuch, Leder usw.) **−W2 Schaden, Stufe 1** · 20s"],["3","**mittel** (Schuppen, Kette usw.) **−W4 Schaden, Stufe 2** · 100s. SG +2 auf Geschicklichkeitsproben einschließlich Verteidigung."],["4","**schwer** (Schienen, Platte usw.) **−W6 Schaden, Stufe 3** · 200s. SG +4 auf Geschicklichkeitsproben, Verteidigung ist SG +2."]]},
  {t:"p", x:"**Schild −1 Schaden** · 20s. Du kannst entscheiden, den gesamten Schaden eines Angriffs zu ignorieren, aber der Schild zerbricht."},
  {t:"p", x:"*Schriftrollen* funktionieren nie, wenn man Zweihandwaffen oder mittlere/schwere Rüstung führt."}
 ]}
]},
{id:"ausruestung", t:"Ausrüstung", p:25, cols:3, s:[
 {h:"Ausrüstung", p:25, wide:1, x:[
  {t:"p", c:"kl", x:"Behelfswaffen verursachen W4 Schaden. Wer würde nicht auf Fäuste verzichten, wenn es einen Enterhaken gibt?"}
 ]},
 {h:"Gegenstände", x:[
  {t:"preis", x:[["Rucksack","6s","Fasst 7 normal große Gegenstände"],["Bärenfalle","20s","Präsenz SG14 zum Entdecken, W8 Schaden"],["Decke","4s",""],["Krähenfüße","7s","W4 Schaden + Infektion bei 1 von 6"],["Kreide","1s",""],["Kautabak","1s",""],["Brecheisen","8s",""],["Kruzifix, silbern","60s",""],["Kruzifix, Holz","8s",""],["Dörrfleisch","1s","1 Tag"],["Erlesenes Parfüm","25s",""],["Feuerstahl","4s",""],["Enterhaken","12s",""],["Hammer","8s",""],["Schwere Kette","10s","15 Fuß"],["Eiserne Nägel","5s","10 Nägel"],["Leiter","7s",""],["Lampenöl","5s","Präsenz + 6 Stunden"],["Schmalz","5s","Kann als 5 Mahlzeiten dienen"],["Großer Eisenhaken","9s",""],["Dietriche","5s",""],["Magnesiumstreifen","4s",""],["Handschellen","10s",""],["Matratze","3s",""],["Fleischerbeil","15s",""]]}
 ]},
 {h:"", x:[
  {t:"preis", x:[["Medizinkasten","15s","Stoppt Blutung/Infektion und +W6 TP. Präsenz + 4 Anwendungen"],["Feile","10s",""],["Spiegel","15s",""],["Maulkorb","6s",""],["Schlinge","5s",""],["Öllampe","10s",""],["Gift (schwarz)","20s","Zähigkeit SG14 oder W6 Schaden + eine Stunde blind. 3 Dosen"],["Gift (rot)","20s","Zähigkeit SG12 oder W10 Schaden. 3 Dosen"],["Konservierte Leiche","66+W6s",""],["Seil","4s","30 Fuß"],["Kleiner Wagen","25s",""],["Zelt","12s",""],["Werkzeugkiste","20s","10 Nägel, Hammer, kleine Säge, Zange"],["Fackel","2s",""],["Sack","3s","Fasst 10 normal große Gegenstände"],["Salz","4s",""],["Schere","9s",""],["Schriftrolle","","ungefähr 50s wert für den richtigen Käufer"],["Scharfe Nadel","3s",""],["Wasserschlauch","4s","4 Tage Wasser"]]}
 ]},
 {h:"Waffen", x:[
  {t:"preis", x:[["W8 Streitaxt","35s",""],["W6 Bogen","25s",""],["W6 Keule","10s",""],["W8 Armbrust","40s",""],["W8 Flegel","35s",""],["W4 Oberschenkelknochen","wertlos",""],["W6 Handaxt","15s",""],["W4 Messer","10s",""],["W6 Streitkolben","25s",""],["W4 Kurzbogen","13s",""],["W4 Kurzschwert","20s",""],["W4 Schleuder","8s",""],["W4 Stab","5s",""],["W6 Schwert","30s",""],["W6 Kriegshammer","30s",""],["W2 Peitsche","5s",""],["W10 Zweihänder","60s",""],["20 Pfeile","10s",""],["10 Bolzen","10s",""]]}
 ]},
 {h:"Dienste", x:[
  {t:"preis", x:[["Nacht im Hospiz","3s",""],["Getränk","1s",""],["Ordentliche Mahlzeit","2s",""],["Bestechung, Wache","20–40s",""],["Bestechung, Schreiber","30–60s",""],["Bestechung, Pöbel","5–15s",""],["Rüstung reparieren: Stufe 1 zu 2","25s",""],["Rüstung reparieren: Stufe 2 zu 3","40s",""]]},
  {t:"p", c:"kl", x:"*Rüstung kann nicht auf eine höhere Stufe repariert werden als ihre ursprüngliche."}
 ]},
 {h:"Tiere", x:[
  {t:"preis", x:[["Hund (abgerichtet)","25s",""],["Hund (wild)","10s",""],["Pferd","80s",""],["Maultier","10s",""],["Ratte (zahm)","8s",""]]}
 ]}
]}
);
