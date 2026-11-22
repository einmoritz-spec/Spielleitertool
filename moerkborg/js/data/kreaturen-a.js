/* Kreaturen Grundbuch – Corebook S. 58–63 (c08). Eigennamen (Seth, Bent …) bleiben, Beschreibungen übersetzt. */
var MB_KREATUR = window.MB_KREATUR || [];
MB_KREATUR.push(
{id:"seth", t:"Seth", typ:"Goblin", p:58, gruppe:"grund", tp:6, moral:7, rue:["Sehnige Haut","−W2"], angr:[["Messer/Kurzbogen","W4"]],
 bes:"Schnell, Angriffe und Verteidigung sind SG14.", img:"kreaturen/seth",
 beute:[["Kopf","7s"],["Gefangen","150s"],["Tot","20s"]],
 text:"Alle Goblins tragen einen Fluch. Einst wie du, sind sie nun im Gefängnis ihres wahnsinnigen Goblinfleisches gefangen. Nur ihre Augen verraten die Wahrheit: ein zerrütteter Geist, der zusieht, wie sein Körpergefängnis schreckliche Taten begeht.\n\nSchon von Goblins angegriffen zu werden, überträgt den Fluch, getragen von den Winden ihres Hasses. Treffer oder nicht, es spielt keine Rolle. Im Dunkel von Sarkash schießen sie mit sirrenden Bögen auf Vorüberziehende. Du musst den Goblin finden und töten, bevor dein Geist gelähmt ist. Lebt die fluchtragende Kreatur W6 Tage nach dem Angriff noch, verwandelst du dich unwiderruflich in einen von ihnen. Dann wird dich nur noch das Dunkel von Sarkash verbergen."},
{id:"bent", t:"Bent", typ:"Abschaum", p:59, gruppe:"grund", tp:7, moral:8, rue:["Keine Rüstung",""], angr:[["Vergiftetes Messer","W4 + besonders"]],
 bes:"Vergiftetes Messer. Probe auf Zähigkeit SG10 oder infiziert.", img:"kreaturen/bent",
 beute:[["Gefangen","50–120s"],["Tot","20–70s"]], beuteFn:"(gesucht, schweres Verbrechen)",
 text:"Es gibt wenige Unholde, die finsterer sind als Armut, oder Ungeheuer, die mächtiger sind als Hass. In dieser geplagten Welt sind die Elendsviertel und schwarzen Gassen fruchtbarer Abschaum, der unzählige verabscheute Missetäter gebiert.\n\n**Der SC mit der höchsten Präsenz legt zu Beginn des Kampfes eine Probe SG14 ab.** Misslingt sie, wird ein zufälliges Gruppenmitglied automatisch von einem feigen Dolchstoß getroffen – normaler Schaden +3."},
{id:"zukuma", t:"Zukuma", typ:"Berserker", p:60, gruppe:"grund", tp:13, moral:9, rue:["Gehärtete Haut","−W2"], angr:[["Führt (W4)","1. Langer Dreschflegel W8 · 2. Schwere Keule W6 · 3. Kettenschwert W6 · 4. Riesiger Kriegshammer W10"]],
 bes:"Greift zweimal pro Runde an, hat aber keine Zeit zur Verteidigung (SG10, um ihn zu treffen).", img:"kreaturen/zukuma",
 beute:[["Gefangen","55s"],["Tot","20s"],["Blut je Liter","3s"]],
 text:"**Sie sind über dir!**\nWie aus dem Nichts ein rasender Hinterhalt in staubigen Gängen und hinter den aufgestapelten schwarzen Steinen der Katakomben."},
{id:"wrat", t:"Wrat", typ:"Gespenst", p:61, gruppe:"grund", tp:15, moral:"–", rue:["Keine Rüstung",""], angr:[["Berührung","W4 + besonders"]],
 bes:"Flink, schwer fassbar und schwer zu treffen (SG14).", img:"kreaturen/wrat",
 beute:[["Gefangen","120s"],["Schädel","70s"],["Ektoplasma","25s"]],
 text:"Diese lautlosen Phantome gewinnen immer die Initiative.\n\nIhre Berührung entzieht Stärke, Präsenz und Geschicklichkeit für die Dauer des Kampfes um 1."},
{id:"belze", t:"Belze", typ:"Blutgetränktes Skelett", p:62, gruppe:"grund", tp:7, moral:8, rue:["Keine Rüstung",""], angr:[["Kurzschwert oder Messer","W4"],["Knochige Fingerknöchel","W2"]],
 bes:"Schleicht umher, unmöglich lautlos. Greift aus dem Hinterhalt an. Kann Stimmen nachahmen, um Opfer anzulocken, kann aber nur wiederholen, was es gehört hat. Angriffe auf es mit durchbohrenden Waffen sind SG14. Jeder Treffer mit 5 oder mehr Schaden zerstört das Skelett vollständig.", img:"kreaturen/belze",
 beute:[["Gefangen","35s"],["Zerstört","7s"]], text:""},
{id:"lich", t:"Lich", typ:"Untoter Nekromant (schwach)", p:63, gruppe:"grund", tp:15, moral:"–", rue:["Barriere (nekro)","−W4"], angr:[["Schlag","W6 + besonders"]],
 bes:"Lähmende Berührung (Präsenz SG14 in jeder Runde, um sich zu befreien).", img:"kreaturen/lich",
 beute:[["Gefangen","200s"],["Überreste","130s"],["Schädel","100s"]],
 text:"Niemand kann in der Nähe dieser antimagischen Wunde in der Wirklichkeit Mächte einsetzen. In jeder Runde kann er den Inhalt einer nahen Schriftrolle stehlen und diese Macht gegen ihren Besitzer einsetzen."}
);
