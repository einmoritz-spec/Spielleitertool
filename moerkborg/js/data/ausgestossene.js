/* Ausgestoßene – Corebook S. 70–71 (c09). Gefolgsleute; Zufallstabellen als {w:"W4", l:[…]}. */
var MB_KREATUR = window.MB_KREATUR || [];
var MB_AUSGEST = {p:71, intro:"Geld mag den Besitzer wechseln, aber diese Sonderlinge kosten kein Silber. Als Landstreicher und Flüchtlinge, getrieben von Einsamkeit, wollen sie nur irgendwo dazugehören. Genau deshalb brechen sie oft in Lauf aus und verschwinden, meist in den kritischsten Momenten.",
 folge:"Der SL würfelt von Zeit zu Zeit auf Moral (gelingt sie, bleibt der Ausgestoßene) und **addiert die höchste Präsenz der Gruppe zum Wurf.** Der SL sollte auch bedenken, ob die Gruppe dem Ausgestoßenen das bietet, was er/sie/es schätzt."};
MB_KREATUR.push(
{id:"erdgebundener", img:"kreaturen/erdgebundener", t:"Erdgebundener", typ:"Ausgestoßener", nr:1, p:70, gruppe:"aus", tp:8, moral:7, rue:["Leder","−W2"], angr:[["Stab/Oberschenkelknochen","W4"]],
 text:"Diese Missgeburten sind etwa drei Teile Mensch und ein Teil Hund. Die Gesellschaft hält sie für widerlich, verseucht und treulos, wie man es von einem Träger von Hundeblut erwartet. Isolation und Verachtung haben sie zu selbstständigen Aasfressern gemacht.",
 tab:[{h:"Eigenschaft",w:"W4",l:["Arrogant","Ruhig","Scherzhaft","Hypochonder"]},
  {h:"Spezialität",w:"W4",l:["Ausgezeichnet kochen (W4 zusätzliche TP beim Rasten)","Findet den richtigen Weg","Spürt Gefahr","Stellt Gegenstände her/repariert sie"]},
  {h:"Werte",w:"W6",l:["Gespräche am Kamin","Lob","Endlose Aufgaben","Gegenstände als Bezahlung","Fleischliche Beziehungen","Verdünntes schwarzes Gift"]}]},
{id:"wilder-dochtkopf", img:"kreaturen/wilder-dochtkopf", t:"Wilder Dochtkopf", typ:"Ausgestoßener", nr:2, p:70, gruppe:"aus", tp:10, moral:7, rue:["Keine Rüstung",""], angr:[["Messer","W4"]],
 text:"Dochtköpfe sind von Natur aus Einzelgänger, aber die wildesten und übelsten werden selbst aus dieser lockeren Gemeinschaft verstoßen. Sie wandern durch Wälder und Ruinen und nehmen jede Gesellschaft, die sie finden. Launisch, misstrauisch und böse, wärst du gut beraten, sie in Ketten zu halten.",
 tab:[{h:"Eigenschaft",w:"W4",l:["Mürrisch","Teilnahmslos","Sorglos","Launisch"]},
  {h:"Spezialität",w:"W4",l:["Wandelnde Lichtquelle","Wandelnde Lichtquelle","Messerexperte (W4+2)","Hinterhalt (Probe SG8 mit einem vom SL gewürfelten W20. Verursacht Waffenschaden + 3)"]},
  {h:"Werte",w:"W6",l:["Lange Monologe über sich selbst","Verbale Konflikte innerhalb der Gruppe","Bezahlung in scharfen Waffen","Verbranntes Fleisch","Deprimierende Geschichten","Gefangene Sklaven"]}],
 fn:"Abgesehen von seiner Spezialität trägt er bis zu fünf Gegenstände."},
{id:"bleicher", img:"kreaturen/bleicher", t:"Bleicher", typ:"Ausgestoßener", nr:3, p:71, gruppe:"aus", tp:5, moral:8, rue:["Keine Rüstung, unbewaffnet",""], angr:[["Unbewaffnet","W2"]],
 text:"Wie von den Sternen gefallen, passen die Bleichen nirgendwohin. Diese unfreiwillige Entfremdung macht sie zerstörerisch und distanziert.",
 tab:[{h:"Eigenschaft",w:"W4",l:["Verbittert","Wirr","Stumm","Selbstverletzendes Verhalten"]},
  {h:"Spezialität, einmal pro Tag",w:"W4",l:["Stelle W2 Dosen eines zufälligen Absuds her (siehe Klasse Okkulter Kräutermeister)","Stelle W2 Dosen Elixir Vitalis her (heilt W6 TP und stoppt Infektion)","Nutze eine zufällige unreine Macht","Nutze eine zufällige heilige Macht"]},
  {h:"Werte",w:"W6",l:["Nicht ständig seine Spezialität einsetzen müssen","Sauberkeit","Melancholische Melodien hören","Ein paar Stunden allein in der Dunkelheit","Wein","Obskure Rituale mit der Gruppe"]}]},
{id:"streuner", img:"kreaturen/streuner", t:"Streuner", typ:"Ausgestoßener", nr:4, p:71, gruppe:"aus", tp:8, moral:8, rue:["Leder","−W2"], angr:[["Messer/Oberschenkelknochen","W4"],["Gelegentlich schmutziges Kurzschwert","W4+1"]],
 text:"Gesetzlose Taugenichtse, aus der Zivilisation verbannt. Arm an Mitteln, Verbündeten und grundlegendem Anstand, trachten sie nach Vergeltung … und Münzen.",
 tab:[{h:"Eigenschaften",w:"W4",l:["Faul","Prahlerisch","Lügner","Verräter"]},
  {h:"Spezialität, SG8",w:"W4",l:["Fallen entschärfen (du musst sie zuerst finden)","Einzelne Gegenstände stehlen","Unmögliche Routen allein erklettern","Findet Pfade und Winkel, die die Gruppe verborgen halten"]},
  {h:"Werte",w:"W6",l:["Bezahlung in Silber","Essen","Klatsch","Schnaps","Sinnloser Tod","Die Anerkennung für Heldentaten bekommen"]}]}
);
