/* Tabellen: „Noch mehr Gründe, sein Leben zu riskieren“ (Corebook S. 88–89, c11) und Psalmen der Namenlosen Schriften (Apokryphen S. 9, a03). */
var MB_TAB = window.MB_TAB || [];
MB_TAB.push(
{id:"wandern", gruppe:"anfang", t:"Wo wanderst du?", w:"W12", p:88, rows:[
 ["1","Auf den kargen Feldern von Kergüs"],["2","Im Zentrum von Alliáns"],["3","An einem Strand unweit von Grift"],["4","In einer schmutzigen Straße von Schleswig"],
 ["5","Auf dem armen Land von Wästland"],["6","An der Stadtmauer von Galgenbeck"],["7","In der ungezähmten Wildnis von Tveland"],["8","Nahe dem Tal der Unglücklichen Untoten"],
 ["9","Ziemlich verirrt in Sarkash"],["10","An der Baumgrenze von Bergen Chrypt"],["11","An Bord eines Schiffes auf dem Endlosen Meer"],["12","In einem vergessenen Teil von Graven-Tosk"]]},
{id:"kontakt", gruppe:"anfang", t:"Wer (oder was) kontaktiert dich?", w:"W20", p:88, rows:[
 ["1","Einäugige Frau, die über die Diebe herrscht"],["2","Bürokrat mit Feinden und ohne Ehre"],["3","Schwer verbrannter Priester"],["4","Adliges Kind, das dunkle Visionen haben soll"],
 ["5","Krieger, der die Loyalität wechselte"],["6","Leises Flüstern aus der Krypta"],["7","Reumütiger Henker"],["8","Gefolterter Verräter"],
 ["9","Wiederkehrende Vision in einem grässlichen Albtraum"],["10","Einsiedler, den die anderen Höhlenbewohner verspotten"],["11","Debiler Ältester"],["12","Opfer, das einem Todeskult entkam"],
 ["13","Mönch, der nachts gebissen wurde"],["14","Unrasierter Mystiker im Pummeligen Schwein"],["15","Am Boden zerstörte Mutter in Weiß"],["16","Zu lange auf See gewesener Seemann"],
 ["17","Schurke voller Geschwüre"],["18","Betrunkene Seherin ohne Zähne"],["19","Ruhelose Seele namens Ghast"],["20","Verängstigter Soldat mit gebrochenen Knien"]]},
{id:"funke", gruppe:"anfang", t:"Abenteuerfunke", w:"W100", p:88, cols:4, rows:[
 ["1–2","Das von Untoten heimgesuchte Tal wartet"],["3–4","Dreizehn Priester werden vermisst"],["5–6","Zu Unrecht des Mordes eingekerkert"],["7–8","66 Opfer werden gebraucht"],["9–10","Kinder verschwinden am Onda-See"],
 ["11–12","Ein Erdloch verschluckt halb Schleswig"],["13–14","Sabotiere ein unheiliges Bündnis"],["15–16","Der Graf wird nachts wahnsinnig"],["17–18","Von einem blutrünstigen Todeskult gejagt"],["19–20","Von einem Erdbeben eingeschlossen"],
 ["21–22","Verhus Prophezeiung ist falsch!"],["23–24","Gerüchte über einen verfluchten Schatz"],["25–26","Entführter Blutmagier"],["27–28","Ein toter Dämon wird auferweckt"],["29–30","Jedes Grab wird in einer Nacht geleert"],
 ["31–32","Riesiges Höhlensystem nahe Grift"],["33–34","Die Toten weigern sich, tot zu bleiben"],["35–36","Die SC sind für ein Opferritual auserwählt"],["37–38","Anthelia erkrankt schwer"],["39–40","Doppelgänger der SC rasen"],
 ["41–42","Teilnahme an einem heiligen Massenbegräbnis"],["43–44","Das ganze Königreich hat Albträume"],["45–46","Etwas hat den Hof unterwandert"],["47–48","Ein Artefakt muss zerstört werden"],["49–50","Kartiere das Land im Westen"],
 ["51–52","Gerede von einer unerforschten Insel"],["53–54","Gewinne das Vertrauen eines gefährlichen Einsiedlers"],["55–56","Finde den Weg nach Cube-Violet"],["57–58","Stoppe einen Selbstmordkult in Grift"],["59–60","Begnadige einen wahnsinnigen Massenmörder"],
 ["61–62","Verteidige ein Fort gegen die Untoten"],["63–64","Stiehl einen Sarkophag aus einer Karawane"],["65–66","Ein Feuer droht Sarkash zu verschlingen"],["67–68","Gehe ins Land der Toten und zurück"],["69–70","**ER** verlangt ein Geschenk. Sieh zu, dass es ankommt"],
 ["71–72","Mächtiges Elixier braucht Zutaten"],["73–74","Sklavenaufstand in Galgenbeck"],["75–76","Mystische Ruinen werden freigelegt"],["77–78","Sie kommen aus den Wänden!"],["79–80","Drei Attentate jede Nacht"],
 ["81–82","Alchemist braucht einen lebenden Goblin"],["83–84","Ein fremdes Schiff ist gestrandet"],["85–86","Eine Seltsamkeit verlässt Bergen Chrypt"],["87–88","Sieben Frauen mit schwarzen Augen"],["89–90","Die Augen der Ikone wurden gestohlen"],
 ["91–92","Das Biest unter der Brücke"],["93–94","Bewegung im Krater eines schwarzen Sterns"],["95–96","Licht aus einem zerbrochenen Kanalgitter"],["97–98","Kinder summen verbotene Lieder"],["99–00","Neu entdeckter Pfad in Sarkash"]]},
{id:"v-name", gruppe:"verlies", t:"Wie heißt es?", w:"2× W12", p:89, x:"Der/Die/Das …", kopf:["W12","Vorsilbe","Endung"], rows:[
 ["1","Schlacht-","-grube"],["2","Todes-","-kirche"],["3","Nacht-","-tempel"],["4","Hades-","-stollen"],["5","Höllen-","-krypta"],["6","Pest-","-grab"],
 ["7","Sünden-","-festung"],["8","Verdammnis-","-zikkurat"],["9","Dunkel-","-höhle"],["10","Mord-","-labyrinth"],["11","Folter-","-haus"],["12","Sklaven-","-ödnis"]]},
{id:"v-status", gruppe:"verlies", t:"Status", w:"W6", p:89, rows:[
 ["1–2","Noch aktiv"],["3–6","Inaktiv, weil (W4):\n1. Der Ort wurde überfallen\n2. Alles endete in einer Katastrophe\n3. Er wurde nicht mehr gebraucht\n4. Ein Elend wurde erfüllt, würfle, welches (S. 17)"]]},
{id:"v-wer", gruppe:"verlies", t:"Wer oder was haust jetzt hier?", w:"W12", p:89, rows:[
 ["1","Lebendige Rüstungen, die gegen Goblins kämpfen"],["2","Nechrubel anbetender Lich mit Skeletthof"],["3","Ketzerkult unter der Führung eines besessenen Elfjährigen"],["4","Eine rachsüchtige Kabale untoter Porzellanpuppen"],
 ["5","Verzweifelte Diebesgilde, die langsam an Cholera stirbt"],["6","Fleischige Masse aus Schleim, Larven und Spinnenbeinen"],["7","Dochtköpfe auf der Flucht vor drohender Dunkelheit"],["8","Eine Rindenhexe und ihre Wurzelkinder"],
 ["9","Vierbeinige bleiche Gremlins, die nach Dreck stinken"],["10","Tergols entflohenes Experiment"],["11","Krankheitsverbreitende Ockerkäfer"],["12","Abtrünnige Höflinge, dem Okkulten verschrieben"]]},
{id:"v-merkmal", gruppe:"verlies", t:"Besonderes Merkmal", w:"W12", p:89, rows:[
 ["1","Portal zum Land der Toten, bald bereit"],["2","Labor, in dem Leichen zu Golems zusammengesetzt werden"],["3","Schwarzes Prisma, das alle Mächte verdreht"],["4","300 ausgezehrte, verstümmelte Gefangene"],
 ["5","Blinder Einsiedler, fest im Boden verwurzelt, der sein abscheuliches Verderben verbreitet"],["6","Knochige Überreste der Brut des Basilisken"],["7","Obelisk, der Körper und Seele trennt"],["8","Räume wandern um die Mitte des Verlieses"],
 ["9","Hohe Decken, Flüstern in der oberen Dunkelheit"],["10","Kunstwerke, die die Umgebung beeinflussen"],["11","Umschlingende, intelligente Pflanzen"],["12","Riesige Becken aus kochendem Teer"]]},
{id:"v-gefahr", gruppe:"verlies", t:"Drohende Gefahr", w:"W10", p:89, rows:[
 ["1","Läuft langsam voll mit (W4): 1–2 Öl, 3–4 Wasser"],["2","Berserker erscheinen"],["3","Steht kurz vor dem Einsturz"],["4","Sinne werden verzerrt"],
 ["5","Giftige Sporen aus der Unterwelt"],["6","Ein gejagter Kult will es zu seinem neuen Versteck machen"],["7","Ein schrecklicher, schlummernder Fluch steht kurz vor der Entfesselung"],["8","Feuer breitet sich aus der tiefsten Kammer aus"],
 ["9","Das Tor wird sich schließen und versiegeln und sich sieben Tage lang nicht öffnen"],["10","Ein tödlicher Mechanismus wird gleich ausgelöst"]]},
{id:"v-raeume", gruppe:"verlies", t:"Beispielräume", w:"W4 / W6", p:89, x:"Zeichne oder finde eine Karte. Etwa 10 Räume reichen für eine Nachtsitzung.", gruppen:[
 ["Inschriften, die Motive sind (W6): 1 Brechreiz erregend · 2 Furchterregend · 3 Hypnotisch · 4 Kindisch · 5 Teleportationen auslösend · 6 Hässlich und sinnlos","Blutige Betten","Überflutet","Schief","Stinkt","Brandschaden"],
 ["Offensichtliche Fallen","Voller Blut","Folterkammer","Rußige Wände","Eiskalter Luftzug","Knarrende Türen"],
 ["Kompakte Dunkelheit","Verschlossene Sarkophage","Regale mit (W4): 1–2 obskure Literatur · 3–4 verrottende Nahrung","Abgrundtiefe Gruben","Überall Spiegel","Gottlose, doch exquisite Kronleuchter"],
 ["Völlig still","Voller Trümmer","Opferaltar (W4): 1–2 rissig · 3–4 frisches Blut","Überreste eines Throns","Rauchgefüllt","Feuer in der Mitte"]]}
);
var MB_PSALMEN = {t:"Die Letzten Kinder von Yetsabu-Nech – Die Namenlosen Schriften", sub:"Abgeschrieben vom Mönch Anuk Schleger.", w:"Würfle W44, jedes Mal wenn ein Charakter stirbt.", p:9, schluss:"Aller Preis sei Yetsabu-Nech.", fuss:"Alte Worte, die die Welt nicht verändern, außer einen der Charaktere, der den Tod eines Gefährten miterlebt.", psalmen:[
 {h:"Psalm I", u:"Die Vier Segen von Yetsabu-Nech", v:[
  ["1:1","Yetsabu-Nech besuchte die Verstohlenen. Sie waren zufrieden, so erhielten sie den Segen der gespaltenen Zunge, nie wieder ein Wort der Wahrheit zu sprechen."],
  ["1:2","Unglücklich schnitten die Verstohlenen sich die Zungen aus den Mündern. So kam es, dass Yetsabu-Nech sie mit scharlachroten Augen segnete, die die Toten sehen."],
  ["1:3","Von Schrecken überwältigt, blendeten sich die Verstohlenen mit glühenden Eisen. Verwirrt segnete Yetsabu-Nech sie mit Händen, die alles in Blei verwandeln."],
  ["1:4","Die Verstohlenen machten ihre Familien und Schafe zu stummen Wächtern. So aßen sie ihre Hände. Zufrieden segnete Yetsabu-Nech sie mit dämonischem Hunger, die Mahlzeit zu beenden."]]},
 {h:"Psalm II", u:"Die Pilgerreise", v:[
  ["2:1","Auf einem kargen Feld, wo die Größte Stadt sich erheben und sterben wird, begegnete Yetsabu-Nech einem pestkranken Deserteur. Er machte den Deserteur immun gegen die Leiden der Seuche, um sie weit zu verbreiten."],
  ["2:2","Auf der unbereisten Straße traf Yetsabu-Nech einen Mann ohne Beine und Arme, aber mit zwei bettelnden Köpfen. Sein Werk war schon getan, so zog er weiter."],
  ["2:3","Im Tal der Blumen, nahe dem Ersten Baum, der Leben verbreitete, kotete Yetsabu-Nech auf den Boden. Alles starb. Dann kehrte alles zurück."],
  ["2:4","Hoch in den Bergen fand Yetsabu-Nech, dass er allein unter Stein war. So verwandelte er sich selbst in Stein, um ein Jahrtausend lang von Regen, Wind und Schnee verwittert zu werden."]]},
 {h:"Psalm III", u:"Die Vier Apostel von Yetsabu-Nech", v:[
  ["3:1","Ein Geflügelzüchter kam kriechend zu Yetsabu-Nech, um zu dienen. Yetsabu-Nech nahm an, und dem Ersten Apostel wuchsen ein Schnabel und Flügel."],
  ["3:2","Ein König ritt zu Yetsabu-Nech, um zu dienen. Der Prätendent war ein Betrüger und Schwindler, so machte Yetsabu-Nech den Zweiten Apostel schön über allen Schmerz hinaus."],
  ["3:3","Ein Köter brachte Yetsabu-Nech einen Knochen, für den er seinen Bruder tötete. Yetsabu-Nech machte den Dritten Apostel zu einem Ding halb Mensch, halb Hund."],
  ["3:4","Ein hinfälliger Ketzer suchte Obdach und jemanden, dem er folgen konnte. Yetsabu-Nech nahm den Vierten Apostel an und gab ihm Krankheit, Gebrechlichkeit und ewiges Leben."]]},
 {h:"Psalm IV", u:"Die Vier Kinder von Yetsabu-Nech", v:[
  ["4:1","Im Land der Hungersnot tauschte Yetsabu-Nech ein Neugeborenes gegen einen Laib vergifteten Brotes. Das Erste Kind trank Yetsabu-Nechs Blut und danach nie wieder etwas als Blut."],
  ["4:2","Beim Baden in einem salzigen Fluss hob Yetsabu-Nech einen weinenden Anglerfisch aus dem Schlamm. Er wurde das Zweite Kind und erleuchtete den Pfad."],
  ["4:3","Yetsabu-Nech riss den letzten grünen Setzling aus der keuchenden Erde. Er spross zu einer bösen Kreatur aus Rinde, braunen Blättern und Äpfeln."],
  ["4:4","Beim Besuch im Tempel der Ungeweihten Konkubine gab Yetsabu-Nech dem Verlangen des Fleisches nach. Er zeugte das Vierte Kind, das zu einem Riesen mit hunderten Augen und Geschwüren heranwuchs."]]}
]};
