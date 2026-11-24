/* Optionale Klassen (W6) – Corebook S. 46–51 (c07): 1 Gezahnter Deserteur, 2 Gossengeborener Abschaum, 3 Esoterischer Einsiedler. */
var MB_REGELN = window.MB_REGELN || [];
MB_REGELN.push(
{id:"deserteur", t:"Gezahnter Deserteur", p:46, cols:2, s:[
 {h:"1 · Gezahnter Deserteur", p:46, wide:1, x:[
  {t:"p", c:"w", x:"Beginnt mit 2W6 × 10s und W2 Omen. TP: Zähigkeit + W10"},
  {t:"p", x:"Du hast dreißig oder so Freunde, die dich nie im Stich lassen: **DEINE ZÄHNE.** Treulos, wahnsinnig oder schlicht unkontrollierbar – jede Gruppe, die dich nicht hinauswarf, hast du trotzdem verlassen. Aber dein Parlament aus Zähnen – riesig, vorstehend, dick und scharf – war immer dein Verbündeter."},
  {t:"p", x:"**Bissangriff:** SG10 zum Angreifen, W6 Schaden. Du musst nah an deinem Ziel sein. Bei 1–2 auf einem W6 bekommt der Feind einen freien Angriff."}
 ]},
 {h:"Fähigkeiten", p:47, x:[
  {t:"p", x:"Gebaut wie ein Bulle, würfle 3W6+2 für Stärke. Kein heller Kopf, würfle 3W6−1 für Geschicklichkeit und Präsenz. Normale Geschicklichkeitsproben sind **SG14** statt SG12, Verteidigung ausgenommen. Analphabet: Du kannst Schriftrollen nicht verstehen. Wenn du mit einer beginnst, würfle neu, iss sie oder benutze sie als Klopapier. Du beginnst außerdem mit einem der folgenden:"},
  {t:"cards", x:[
   {n:"1", h:"Zerknitterte Monstermaske", b:"Löst primitive Furcht bei geringeren Kreaturen wie Goblins, Gnomen und Kindern aus. Solange sie getragen wird, prüfen diese jede Runde die Moral."},
   {n:"2", h:"Der Braune Krummsäbel von Galgenbeck", b:"Ein stinkendes Schwert, das du aus einer militärischen Scheißgrube gezogen hast. W6 Schaden. SG10 für Angriff und Verteidigung, solange du es führst. Bei 1 von 6 wird ein verwundeter Feind von mächtiger Sepsis befallen und stirbt in 10 Minuten."},
   {n:"3", h:"Zauberzähne", b:"Vier seltsame Zähne klappern in einem geschwärzten Beutel. Würfle vor dem Kampf für jeden einen W6. Für jede 6 verursacht einer deiner Angriffe maximalen Schaden."},
   {n:"4", h:"Alt-Sigûrds Schleuder", b:"Sigûrd war der stärkste Mann, dessen Kehle du je zernagt hast. Aus seinem langen grauen Haar geflochten, hat diese Schleuder dich nie im Stich gelassen. 2W4 Schaden, benötigt faustgroße Steine, die, vielleicht bedauerlicherweise, überall sind."},
   {n:"5", h:"Uralter Blutspürhund", b:"Asthmatisch, wahnhaft und auf den letzten Beinen, hat dieses runzlige Wesen immer noch eine hervorragende Nase und kann in widerlichstem Unrat Schätze erschnüffeln. Greift mit SG10 an (Biss W6). Verteidigt mit SG12, 10 TP. Wird in der Nähe von Goblins und Berserkern rasend."},
   {n:"6", h:"Der Schuh von Todes Pferd", b:"Er sieht normal aus, aber seit du ihn in einer obskuren Krypta gefunden hast, bist du überzeugt, dass dieser Schuh vom Pferd des Todes selbst stammt. In deinen Händen trifft er mit SG10, W4 Schaden. Bei 1 von 6 zerschmettert der Schuh den Schädel und tötet kleine bis mittelgroße Kreaturen sofort. Der Schuh kehrt wie ein Bumerang in deine Hand zurück."}
  ]}
 ]},
 {h:"Früheste Erinnerungen W6", x:[
  {t:"liste", x:["Ein ausgebranntes schwarzes Gebäude in Sarkash. Dein Zuhause?","Ein verfallenes, morsches Schiff, das endlos über ein graues Meer treibt.","Ein Bordell in Schleswig. Eine recht freundliche Umgebung.","Du schläfst mit Hunden in der Ecke eines Gasthauses und wartest darauf, dass jemand zurückkehrt.","Du folgst einer Armee im östlichen Wästland.","Du säugst an einem Wolf in der Wildnis von Bergen Chrypt."]}
 ]}
]},
{id:"abschaum", t:"Gossengeborener Abschaum", p:48, cols:2, s:[
 {h:"2 · Gossengeborener Abschaum", p:48, wide:1, x:[
  {t:"p", c:"w", x:"Beginnt mit 1W6 × 10s und W2 Omen. TP: Zähigkeit + W6"},
  {t:"p", x:"**Ein schlechter Stern lächelte bei deiner Geburt. Armut, Verbrechen und schlechte Erziehung halfen auch nicht. In deiner Gemeinschaft war ehrliche Tagesarbeit nie eine Option. Nicht dass du es je versucht hättest, wofür hältst du dich, für einen Trottel? Eine Rasierklinge und eine mondlose Nacht sind eine Woche Hilfsarbeit wert.**"}
 ]},
 {h:"Fähigkeiten", x:[
  {t:"p", x:"Klein, würfle 3W6−2 für Stärke. Verstohlen: Bei allen Proben auf Präsenz und Geschicklichkeit ist der SG um 2 gesenkt (normale Proben sind SG10 statt SG12). Würfle W6 auf der Waffentabelle und W2 auf der Rüstungstabelle. Du beginnst außerdem mit einer **Spezialität:**"},
  {t:"cards", x:[
   {n:"1", h:"Feiger Stich", b:"Beim Angriff aus dem Hinterhalt Probe auf Geschicklichkeit SG10. Gelingt sie, triffst du automatisch einmal mit einer leichten einhändigen Waffe und verursachst normalen Schaden +3."},
   {n:"2", h:"Dreckiger Fingerfertiger", b:"Deine schlangenhaften kleinen Finger kommen mit einer Probe auf Geschicklichkeit SG8 in Taschen und knacken Schlösser. Du beginnst außerdem mit Dietrichen!"},
   {n:"3", h:"Abscheulicher Rotzwerfer", b:"Dein Schleim ist zäh, klumpig, widerlich und auf kurze Distanz ballistisch genau. Du kannst W2-mal pro Kampf spucken. Würfle eine Probe auf Präsenz SG8 für die Treffsicherheit. Ziele sind W4 Runden lang geblendet, würgen und erbrechen sich. Jeder, der das mitansieht – Freund und Feind –, muss eine Probe auf Zähigkeit ablegen, um sich nicht ebenfalls zu übergeben. SC würfeln SG10, Feinde SG12."},
   {n:"4", h:"Dem Schicksal entkommen", b:"Jedes Mal, wenn du ein Omen einsetzt, besteht eine Chance von 50 %, dass es nicht verbraucht wird."},
   {n:"5", h:"Exkrementarische Tarnung", b:"Du hast die erstaunliche, fast übernatürliche Fähigkeit, dich in Dreck, Schutt und Unrat zu verstecken. Wenn du unter diesen Bedingungen versteckt bist, ist eine Probe auf Präsenz SG16 nötig, um dich zu bemerken."},
   {n:"6", h:"Dem Tod ausweichen", b:"Du bist so unangenehm, unbedeutend, ekelhaft und widerlich, dass selbst der Tod dir lieber aus dem Weg geht, wenn er kann. Bei deinem Tod besteht, falls es auch nur die geringste Möglichkeit gibt, dass du überlebt hast, eine Chance von 50 %, dass du es hast. Gelingt es, tauchst du nach 10 Runden mit W4 TP und einer unwahrscheinlichen Erklärung für deine Flucht wieder auf."}
  ]},
  {t:"p", c:"kl", x:"Wenn der Abschaum das erste Mal besser wird (siehe Besser werden, S. 33), wird eine weitere Spezialität gewürfelt. Ab dem zweiten Mal können diese beiden Spezialitäten neu gewürfelt werden, oder nur eine."}
 ]},
 {h:"Schlechte Geburt W6", x:[
  {t:"liste", x:["Noch in der Geburtshaut auf einen fahrenden Scheißkarren gekippt.","Mutter an einem Baum vor Galgenbeck gehenkt, du fielst aus der Leiche.","Von Ratten in den Gossen von Grift aufgezogen.","Unter dem Tisch eines Bäckers in Schleswig getreten und geprügelt.","Dem Waisenhaus von Tveland entkommen.","Von Gesetzlosen in einer Hütte südlich von Alliáns erzogen."]}
 ]}
]},
{id:"einsiedler", t:"Esoterischer Einsiedler", p:50, cols:2, s:[
 {h:"3 · Esoterischer Einsiedler", p:50, wide:1, x:[
  {t:"p", c:"w", x:"Beginnt mit 1W6 × 10s und W4 Omen. TP: Zähigkeit + W4"},
  {t:"p", x:"Der Stein deiner Höhle ist eins mit den Sternen. Stille und Vollkommenheit. Nun stört das Chaos einer gefallenen Welt deine Rituale, und der Schleier der Nacht wird schwärzer als das Dunkel deiner Höhle. Ärgerlich!"}
 ]},
 {h:"Fähigkeiten", p:51, x:[
  {t:"p", x:"**Weise, würfle 3W6+2 für Präsenz. Schwach, würfle 3W6−2 für Stärke. Normale Startausrüstung plus eine zufällige Schriftrolle (heilig oder unrein). Würfle W4 auf der Waffentabelle und W2 auf der Rüstungstabelle. Du beginnst außerdem mit einem der folgenden:**"},
  {t:"cards", x:[
   {n:"1", h:"Meister des Schicksals", b:"Was nützen Karten, wenn dir die Substanz der Kausalität selbst offensteht? Du kennst den richtigen Weg mit einer Probe auf Präsenz SG8."},
   {n:"2", h:"Ein Buch des kochenden Blutes", b:"Du darfst einmal am Tag aus diesem Buch lesen. Dein Feind muss eine Probe SG12 ablegen, um das zu verhindern. Misslingt sie, erscheinen W2 Berserkertöter (siehe S. 60) aus den Tiefen einer vergessenen Dimension des Blutes. Würfle einen W6. Bei 1–4 kämpfen diese Kreaturen an deiner Seite. Bei 5–6 wenden sie sich gegen dich und versuchen, dich zu töten und das Buch zu zerstören. Nach dem Kampf kehren sie in ihre Gefangenschaft zurück."},
   {n:"3", h:"Sprecher der Wahrheiten", b:"Zweimal pro Tag bringst du mit deiner Weisheit, deinem Wissen, deinem Rat und deiner inneren Ruhe Klarheit in eine Kreatur deiner Wahl. Der SG der nächsten Probe, die sie ablegt, sinkt um 4."},
   {n:"4", h:"Eingeweihter des Unsichtbaren Kollegs", b:"Einmal pro Tag darfst du W2 Schriftrollen herbeirufen, deren Macht nur einmal genutzt werden kann. Würfle einen W4: Bei 1–2 sind die Schriftrollen heilig, bei 3–4 unrein. Werden die Schriftrollen nicht vor Sonnenaufgang benutzt, zerfallen sie zu Asche."},
   {n:"5", h:"Barde der Unsterblichen", b:"Du hast deine Melodien im Jenseits gelernt. Die Musik deiner Harfe gibt +W4 auf Reaktionswürfe."},
   {n:"6", h:"Falke als Waffe", b:"Dein listiger, fast intelligenter Falke ist nur dir treu. Auch ohne gemeinsame Sprache verstehst du seine Schreie, während er Wache hält, auskundschaftet und Feinde im Sturzflug angreift. Angriffe/Verteidigung SG10 (Klauen/Biss W4), 8 TP."}
  ]}
 ]},
 {h:"Mystische Herkunft W6", x:[
  {t:"liste", x:["Als Erwachsener erwacht in einem Ritualkreis unter der nördlichen Brücke nach Grift.","Gedächtnislos aus dem Eingang einer Höhle an den Klippen von Terion gewandert.","Einziges Kind, das einen Vorfall im Tal der Unglücklichen Untoten überlebte.","Beim Sterben an der Pest in einer Hütte in Bergen Chrypt hast du etwas von außerhalb berührt.","Ein durchschnittlicher Mensch, bis du in einer düsteren Lichtung in Sarkash auf etwas trafst.","Aufgewachsen auf einer einsamen Insel im Onda-See. Niemand sonst hat je von dieser Insel gehört, und du kannst nicht zurück."]}
 ]}
]}
);
