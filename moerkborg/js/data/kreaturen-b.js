/* Kreaturen Grundbuch – Corebook S. 64–69 (c08). */
var MB_KREATUR = window.MB_KREATUR || [];
MB_KREATUR.push(
{id:"troll", t:"Troll", typ:"Troll", p:64, gruppe:"grund", tp:32, moral:"bes.", rue:["Dicke Haut","−W2"], angr:[["Faust","2W6"]],
 bes:"Leicht zu treffen, Angriffe auf ihn sind SG10.", img:"kreaturen/troll",
 beute:[["Gefangen","200s"],["Leiche","70s"],["Horn","25s"]],
 text:"Trotz ihrer Größe Feiglinge. Ziehen sich meist zurück, wenn sie schwer verwundet sind. Vergessen nie, wer sie verletzt hat. Sie wachsen während des Heilungsprozesses und kommen garantiert stärker zurück als zuvor. Jede geheilte TP wird zu ihren maximalen TP addiert. Jedes Mal, wenn sie zurückkehren, addiere weitere W6 zu ihrem Schaden."},
{id:"nodh", t:"Nodh", typ:"Zombie", p:65, gruppe:"grund", tp:7, moral:"–", rue:["Lederfetzen","−W2"], angr:[["Klaue/Biss","W2 + besonders"]],
 bes:"Wer gebissen wird, legt eine Probe auf Zähigkeit SG8 ab oder stirbt binnen zwei Tagen und steht dann als Zombie wieder auf.", img:"kreaturen/nodh",
 beute:[["Gefangen","30s"],["Blut je Liter","5s"]],
 text:"Das einzige Heilmittel oder Gegengift soll auf dem Gipfel eines bleichen Berges in einem unendlich-elenden Wald dunkler Blätter zu finden sein.\n\n**König Fathmu IX. von Wästland** sucht dieses Heilmittel besonders und kennt Namen und Ort des Waldes, den der Berg überblickt."},
{id:"lady-porcelain", t:"Lady Porcelain", typ:"Untote Puppe", p:66, gruppe:"grund", tp:11, moral:"–", rue:["Porzellan","−W2"], angr:[["Klauen/durchbohrender Biss","W4"]],
 bes:"Ihr irrer Blick verlangt zu Beginn des Kampfes eine Probe auf Präsenz SG12, sonst ist man W4 Runden vor Angst erstarrt.", img:"kreaturen/lady-porcelain",
 beute:[["Gefangen","80s"],["Kopf","20s"]],
 text:"In Tveland erleiden Reliquiendiebe, Verleumder und korrupte Schreiber eine Strafe von erlesener und zutiefst unpraktischer Grausamkeit. Ihre Kinder oder Enkel werden in Porzellanpuppen eingeschlossen und in Kathedralenfenster gestellt, um langsam an Hunger und Hitze zu sterben. Trotz Bannritualen kehren viele als rachsüchtige Untote zurück, die sich oft in großen Scharen versammeln, um ihre Peiniger zu jagen."},
{id:"thinx", t:"Thinx", typ:"Fratze", p:67, gruppe:"grund", tp:18, moral:"–", rue:["Ton/Stein","−W6"], angr:[["Klauen","W6"],["Augenstrahl","W8"]],
 bes:"Ihr schrecklicher Blick wird jede Runde bei 1–2 auf einem W6 eingesetzt. Trifft immer. Bewegt sich langsam, leicht zu treffen (SG10).", img:"kreaturen/thinx",
 beute:[["Gefangen","190s"],["Tot (intakt)","100s"],["Tot (in Stücken)","10s"]],
 text:"Lauert rund um Kirchen, streift über Friedhöfe und schleicht näher, wenn du wegsiehst. Beunruhigend still, schwer vor grauem Stein zu erkennen und selbst gesehen kaum wiederzuerkennen."},
{id:"aland", t:"Aland", typ:"Dochtkopf-Messerstecher", p:68, gruppe:"grund", tp:10, moral:7, rue:["Keine Rüstung",""], angr:[["Messer mit getrocknetem Blut","W4"]],
 bes:"25 % Chance, dass Wunden des irrsinnig dreckigen Messers sich infizieren. Kann magisch alle Lichtquellen in der Nähe löschen, sein eigenes blendendes Licht entzünden und angreifen. Dann in der Dunkelheit verschwinden.", img:"kreaturen/aland",
 beute:[["Gefangen","60s"],["Abgetrennte Laterne","15s"],["Leiche","20s"]],
 text:"Schleicht sich hinter seine Opfer, stumm wie das Grab. Treibt sich an den Rändern der Städte und in den Dickichten von Sarkash herum."},
{id:"ewlotha", t:"Ewlotha", typ:"Lindwurm", p:69, gruppe:"grund", tp:25, moral:10, rue:["Dicke Haut","−W4"], angr:[["Biss/Stachel","W6"]],
 bes:"60 % Chance, dass sie beißt. Der giftige Schwanzstachel kann ein Opfer lähmen. Probe auf Zähigkeit SG14, um eine schmerzhafte Stunde Lähmung zu vermeiden.", img:"kreaturen/ewlotha",
 beute:[["Gefangen","200s"],["Leiche","100s"],["Giftdrüse","60s"],["Schwanzstachel","60s"]], text:""}
);
