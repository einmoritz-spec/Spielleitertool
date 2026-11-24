/* Ridderhöhe (Abenteuerband S. 33–38) – deutsche Fassung. §…§ = Fertigkeit in Kapitälchen. Modell: plan/dragonbane/ABENTEUER_PLAN.md §2 */
window.DB_AB = window.DB_AB || {};
DB_AB["ridderhoehe"] = {
 id:"ridderhoehe", t:"Ridderhöhe", band:"dk", buch:"db_adv", p:33, img:"abenteuer/ridderhoehe-titel",
 lage:[
  "Tief in den weiten Wäldern des Nebeltals liegt ein Grabhügel namens Ridderhöhe. Er ist ein gefürchteter Ort, heimgesucht vom Wiedergänger eines mächtigen Ritters im Dienst des Drachenkaisers – doch heißt es auch, der Grabwiedergänger bewache verborgene Schätze.",
  "*Ridderhöhe* ist ein kurzes und verhältnismäßig einfaches Abenteuer und eine gute Einführung für neue Spieler.",
  {"h":"Die Lage","p":33},
  "Der alte Grabhügel namens Ridderhöhe liegt im östlichen Teil des Eisenwalds, etwa zwei Tagesmärsche von Außenposten entfernt. Die Spielercharaktere können über Gerüchte in der Stadt (S. 17 und die Abenteuerkarten) hierherfinden.",
  "Hier befindet sich möglicherweise ein Teil der Drachenstatuette – in diesem Fall liegt er im Sarkophag in Raum 9.",
  "Wenn die Spielercharaktere beim Grabhügel ankommen (Punkt 1 auf der Karte), wurde der Hügel bereits von einer Goblin-Expedition geöffnet, die der Orkhäuptling Maladûk ausgesandt hat. Diese Grabräuber wurden alle getötet oder versprengt – bis auf den armen Grub in Raum 5 –, aber nicht, ohne zuvor den Zorn des Wiedergängers und einiger der niederen Untoten zu wecken, die dieses düstere Reich der Schatten bewohnen.",
  "Der Wiedergänger ist noch immer auf der Jagd nach Grabräubern. Er bewegt sich langsam, aber unerbittlich durch den Hügel – erfüllt von Wut über die Unverfrorenheit der Goblins.",
  "Der Wiedergänger wird unter Grab des Drachenritters (Raum 9) genau beschrieben, doch er kann durch geschlossene Fallgitter und Türen hindurchgehen und so überall auftauchen.",
  "Versuche, vor der Konfrontation eine spannungsgeladene Atmosphäre zu schaffen, als würden die Spielercharaktere gejagt – wie in einem Horrorfilm. Nutze den Wiedergänger, um die Spielercharaktere zu verunsichern, während sie im Dunkeln umherschleichen. Sie hören seine schweren, schleifenden Schritte, das Klirren des Kettenhemds und die lauten Schläge seines Morgensterns, der an den Wänden entlangkratzt.",
  {"stein":{"h":"Karte und Orte","b":[
   "Die Karte auf S. 35 zeigt alle Orte im Grabhügel. Du kannst den Hügel den Spielern Raum für Raum auf einem Whiteboard oder einem Blatt Papier aufzeichnen oder die Karte ausdrucken und die Räume ausschneiden, um sie nacheinander zu zeigen.",
   "Die Beschreibungen der Räume folgen alle derselben Vorlage. Zuerst kommt ein kursiver Text, der den Spielern vorgelesen werden kann, wenn sie den Raum betreten. Darauf folgen Aufzählungspunkte mit den wichtigsten Dingen im Raum. Kursiv geschriebene Aufzählungspunkte sind auf den ersten Blick verborgen – um sie zu finden, müssen die Spielercharaktere an der richtigen Stelle suchen und einen Wurf auf §Entdecken§ machen."]}}
 ],
 bereiche:[
  {id:"huegel", t:"Der Grabhügel", karte:{img:"abenteuer/ridderhoehe-karte", p:35}, orte:[
   {n:"1", t:"Der Grabhügel", p:34, pin:[17.9,67.7], wesen:[],
    vl:"Auf einer Lichtung mitten im Wald erhebt sich ein Hügel, gekrönt von hohen aufrechten Steinen. Der Ort ist seltsam still. Doch ihr nehmt einen schwachen, aber unheilvollen Geruch wahr – einen fauligen Gestank wie von verrottetem Gemüse.",
    st:[
     {"k":"Steinplatte","x":"Eine grob behauene, quadratische Steinplatte von 2×2 Metern ist oben auf dem Hügel in die Erde eingelassen. Sie wurde leicht aus ihrer ursprünglichen Lage verschoben, und ein kleiner Spalt an einer Seite lässt darunter eine Art Hohlraum erkennen. Die Steinplatte ist schwer, doch sie beiseitezuschieben erfordert keinen Wurf."},
     {"k":"Spuren und Kot","x":"Im Gras des Hügels sind deutliche Fußspuren zu sehen. Ein Spielercharakter, dem ein Wurf auf §Wildniskunde§ gelingt, erkennt außerdem kleine Haufen von Wolfskot und Goblin-Exkrementen. Der Geruch stammt von Letzteren."}
    ]},
   {n:"2", t:"Schacht", p:35, pin:[14.3,75.1], wesen:[],
    vl:"Unter der Steinplatte öffnet sich ein unterirdischer Schacht. Ein Boden ist nicht zu erkennen. Aus der Tiefe steigt ein muffiger Geruch von abgestandener Luft und ausgetrockneten Leichen auf.",
    st:[
     {"k":"Tiefer Fall","x":"Es sind fünf Meter bis zum Grund des Schachts. Jeder Spielercharakter muss einen Wurf auf §Akrobatik§ machen, um hinabzuklettern. Ein Seil gibt einen Vorteil auf den Wurf. Bei einem Fehlschlag stürzt der Spielercharakter nach den Regeln auf Regelbuch S. 53."},
     {"k":"Gewölbte Höhle","x":"Lassen die Spielercharaktere eine Fackel oder eine ähnliche Lichtquelle in den Schacht fallen, sehen sie, dass er in eine gewölbte Erdhöhle mit einer Art Durchgang in der Nordwand hinabführt."}
    ]},
   {n:"3", t:"Vorkammer", p:35, pin:[54.3,68.6], wesen:["fledermaeuse"],
    vl:"Eine kuppelförmige Kammer mit festgestampftem Erdboden. Hoch oben in der Dunkelheit sieht die Öffnung zur Oberfläche aus wie ein schwach leuchtendes Quadrat. In der Nordwand befindet sich eine zweiflügelige Eichentür mit Eisenbeschlägen. Ein silbernes Symbol zieht sich über beide Türflügel, die von Statuen von Rittern in altertümlicher Rüstung flankiert werden.",
    st:[
     {"k":"Aufgebrochene Eichentür","x":"Die Goblins haben die Eichentür bereits aufgebrochen; sie steht einen Spalt offen, wenn die Spielercharaktere ankommen."},
     {"k":"Stilisierte Krone","x":"Ein gelungener Wurf auf §Mythen & Legenden§ erkennt das Symbol auf der Tür als stilisierte Krone aus der Urzeit, als das Nebeltal von einem mächtigen, Drachen verehrenden Königreich beherrscht wurde."},
     {"k":"Spuren im Dreck","x":"Im Erdboden sind viele Fußspuren und Schleifspuren zu sehen."},
     {"k":"Schlafende Fledermäuse","r":1,"x":"*Ein Schwarm Vampirfledermäuse hängt in Trauben von der Decke der Kammer. Sie zu entdecken erfordert einen passiven Wurf auf* §Wahrnehmung§*, was es wiederum ermöglicht, mit* §Heimlichkeit§ *an ihnen vorbeizuschleichen. Misslingt das, greifen die Fledermäuse an. Werte siehe Regelbuch S. 99.*"},
     {"k":"Giftdolch der Goblins","r":1,"x":"*Ein Spielercharakter, dem ein Wurf auf* §Entdecken§ *gelingt, findet im Dreck einen gebogenen Goblin-Dolch. Die Klinge ist mit tödlichem Vipergift der Wirkstärke 9 bestrichen.*"},
     {"k":"Norden","x":"Doppeltür zu den Hügeltunneln (Ort 4)."}
    ]},
   {n:"4", t:"Hügeltunnel", p:36, pin:[43.1,48.3], wesen:[],
    vl:"Ein dunkler, feuchter Tunnel durch festgestampfte Erde, der sich in verschiedene Richtungen verzweigt. Die Luft ist kühl und voller muffiger Gerüche. Gleitende Wurzeln, Würmer und Tausendfüßler hängen wie Stalaktiten von der Decke und machen den Boden rutschig.",
    st:[
     {"k":"Zufallsereignis","x":"Würfelt für jedes volle Viertel, das die Spielercharaktere hier verbringen, W12 auf der Tabelle auf S. 34."},
     {"k":"Norden","x":"Öffnung zum Wachhaus (Ort 7)."},
     {"k":"Osten","x":"Feuchter Erdtunnel zur Familiengruft (Ort 6)."},
     {"k":"Süden","x":"Doppeltür zur Vorkammer (Ort 3)."},
     {"k":"Westen","x":"Feuchter Erdtunnel zur Gesindegruft (Ort 5)."}
    ]},
   {n:"5", t:"Gesindegruft", p:36, pin:[31.8,37.1], wesen:["grub"],
    vl:"Eine dunkle, feuchte Kammer. Ausgehobene Grabnischen bedecken die Wände vom Boden bis zur Decke. Zerbrochene Skelette, vermoderte Lumpen und Scherben zerschlagener Tonwaren liegen überall verstreut.",
    st:[
     {"k":"Verwüstet","x":"Die Gruft wurde offensichtlich von Grabräubern heimgesucht. Skelette wurden auf den Boden gezerrt, Krüge zerschlagen und Kleider aufgeschlitzt."},
     {"k":"Verschlossenes Fallgitter","x":"Ein Fallgitter versperrt den Weg zur Halle der Dame (Ort 8). Im Schloss steckt ein abgebrochener Schlüssel, und das Fallgitter lässt sich unmöglich aufschließen. Es hat Rüstungswert 10, kann aber aufgebrochen werden, indem man 30 Schadenspunkte verursacht oder einen Zauber wie §Säule§ wirkt – doch ein solcher Lärm lockt sofort den Grabwiedergänger an."},
     {"k":"Versteckter Goblin","r":1,"x":"*Hinter den Skelettresten in einer der bodennahen Grabnischen versteckt sich ein hyperventilierender Goblin namens Grub. Die Spielercharaktere müssen gezielt die Nischen durchsuchen oder einen Wurf auf* §Entdecken§ *schaffen, um dieses letzte überlebende Mitglied von Maladûks Expedition zu entdecken.*"},
     {"k":"Zufallsereignis","x":"Würfelt für jedes volle Viertel, das die Spielercharaktere hier verbringen, W12 auf der Tabelle auf S. 34."},
     {"k":"Norden","x":"Feuchter Erdtunnel, der nach Osten zur Halle der Dame (Ort 8) abbiegt, versperrt durch ein verschlossenes Fallgitter."},
     {"k":"Süden","x":"Feuchter Erdtunnel, der nach Osten zu den Hügeltunneln (Ort 4) abbiegt."}
    ],
    nach:"**Grubs Hilfe:** Der arme Grub ist zu Tode erschrocken, und sein einziges Ziel ist, lebend aus dem Hügel herauszukommen. Sein erster Impuls ist die Flucht, doch wenn die Spielercharaktere ihn mit einem Wurf auf §Überzeugen§ beruhigen können, ist er bereit, ihnen zu helfen. Da er die Bewegungen des Wiedergängers beobachtet hat, kann er ihnen mitteilen, dass dieser sich ungehindert durch den Hügel bewegt, aber nicht gewillt scheint, durch die Eichentür zu gehen, die zur Vorkammer (Ort 3) hinausführt. Grub hat außerdem einen rostigen Eisenring mit drei großen Eisenschlüsseln – zwei unversehrt, einer abgebrochen – aus dem Wachhaus (Ort 7) an sich genommen. Der Rest des abgebrochenen Schlüssels steckt in der Tür in Ort 5. Die anderen beiden gehören zu den Fallgittern in Ort 6 und 7. Nur das Schloss in Ort 6 lässt sich mit dem Schlüssel öffnen."},
   {n:"6", t:"Familiengruft", p:36, pin:[81.7,34.4], wesen:["grub"],
    vl:"Eine dunkle Kammer mit festgestampftem Erdboden. Sieben schlichte Steinsarkophage stehen aufgereiht an den Wänden. Mehrere von ihnen sind offen, und zwei Skelette wurden auf den Boden geworfen.",
    st:[
     {"k":"Geschändet","x":"Drei der sieben Sarkophage wurden von den Goblins geöffnet und geplündert."},
     {"k":"Schätze","x":"Untersuchen die Spielercharaktere die ungeöffneten Sarkophage, finden sie vier einzeln bestattete Skelette – mehrere davon kindergroß –, gekleidet in die vermoderten Reste prächtiger Festgewänder. Sie alle tragen vergoldete Stirnbänder im Wert von je 5 Goldmünzen sowie juwelenbesetzte Ringe im Wert von je 3 Gold."},
     {"k":"Verschlossenes Fallgitter","x":"Ein eisernes Fallgitter versperrt den Weg zur Halle der Dame (Ort 8). Es lässt sich mit einem der unversehrten Schlüssel von Grubs Eisenring öffnen, doch das erfordert einen gelungenen Wurf auf §Fingerfertigkeit§ – bei einem Fehlschlag bricht der Schlüssel. Das Fallgitter hat Rüstungswert 10 und kann aufgebrochen werden, indem man 30 Schadenspunkte verursacht oder einen Zauber wie §Säule§ wirkt – doch ein solcher Lärm lockt sofort den Wiedergänger an."},
     {"k":"Falle","r":1,"x":"*Unter einer dünnen Erdschicht vor dem versperrten Fallgitter verbirgt sich eine Falltür. Sie zu entdecken erfordert, den Boden zu durchsuchen und einen Wurf auf* §Entdecken§ *zu schaffen. Geschieht das nicht, stürzt der erste Charakter, der sich dem Fallgitter nähert, durch die Falltür. Der Charakter fällt in eine Grube mit scharfen Holzpfählen am Boden und erleidet 3W6 Stichschaden. Ein gelungener Wurf auf* §Ausweichen§ *halbiert den Schaden (aufgerundet).*"},
     {"k":"Zufallsereignis","x":"Würfelt für jedes volle Viertel, das die Spielercharaktere hier verbringen, W12 auf der Tabelle auf S. 34."},
     {"k":"Norden","x":"Feuchter Erdtunnel, der nach Westen zur Halle der Dame (Ort 8) abbiegt, versperrt durch ein eisernes Fallgitter."},
     {"k":"Süden","x":"Feuchter Erdtunnel, der nach Westen zu den Hügeltunneln (Ort 4) abbiegt."}
    ]},
   {n:"7", t:"Wachhaus", p:37, pin:[54.3,40.7], wesen:[],
    vl:"Ein kleiner Raum mit festgestampftem Erdboden. Das flackernde Licht einer Fackel dringt durch ein schwarzes Eisenfallgitter in der gegenüberliegenden Wand. Zwei mumifizierte Wachen mit rostigen Kettenhemden und langen Speeren flankieren das vergitterte Tor.",
    st:[
     {"k":"Verrostetes Fallgitter","x":"Das vergitterte Tor ist völlig verrostet und lässt sich selbst mit dem Schlüssel von Grub aus Ort 5 unmöglich öffnen. Es hat Rüstungswert 10 und kann aufgebrochen werden, indem man 30 Schadenspunkte verursacht oder einen Zauber wie §Säule§ wirkt – doch ein solcher Lärm lockt sofort den Wiedergänger an."},
     {"k":"Waffen und Rüstungen","x":"Die mumifizierten Wachen erwachen nicht zum Leben, auch wenn die Spielercharaktere ihre Waffen und Gegenstände an sich nehmen. Die rostigen Kettenhemden zerfallen sofort bei Berührung, doch jede Wache hat einen Langspeer."},
     {"k":"Zufallsereignis","x":"Würfelt für jedes volle Viertel, das die Spielercharaktere hier verbringen, W12 auf der Tabelle auf S. 34."},
     {"k":"Norden","x":"Rostiges Fallgitter versperrt den Weg zur Halle der Dame (Ort 8)."},
     {"k":"Süden","x":"Öffnung zu den Hügeltunneln (Ort 4)."}
    ]},
   {n:"8", t:"Halle der Dame", p:37, pin:[51.4,27.6], wesen:["dame"],
    vl:"Ein kleiner Raum mit einem Eichentisch in der Mitte und brennenden Fackeln an den Wänden. Am anderen Ende des Tisches sitzt eine mumifizierte Frau in vergoldetem Kettenhemd. Eine eisenbeschlagene Eichentür hinter der Mumie trägt ein uraltes Symbol in glitzerndem Silber.",
    st:[
     {"k":"Die Dame","x":"Die mumifizierte Frau ist die Gemahlin des Drachenritters. Sie bewacht den Eingang zur letzten Ruhestätte ihres Mannes und erwacht als Geist, wenn die Spielercharaktere versuchen, die Eichentür zu Ort 9 zu öffnen oder den Kriegshammer Dämonenbrecher zu berühren. Dann verlangt sie, dass sie den Grabhügel in Frieden verlassen. Sie spricht in einer uralten Zunge, die nur mit einem gelungenen Wurf auf §Fremdsprachen§ verstanden werden kann. Beharren die Spielercharaktere darauf, den Hammer zu stehlen oder die Tür zu öffnen, verzerrt sich ihr Gesicht zu einer entsetzlichen Grimasse, bevor sie angreift. Unterlassen die Spielercharaktere das, können sie stattdessen der recht unverständlichen Rede der Dame lauschen. Die Worte für „Drache“ und „Imperium“ fallen immer wieder, ebenso der Name Eledain und etwas über den Kampf zwischen Verderbnis und reinigendem Feuer."},
     {"k":"Der Dämonenbrecher","x":"Die krallenartigen Hände der mumifizierten Frau ruhen auf einem prächtigen, juwelenbesetzten leichten Kriegshammer (Meisterwerk mit STÄ-Anforderung 7 und Haltbarkeit 15). Der Kriegshammer ist magisch und glüht rot, sobald der Träger sich innerhalb von 10 Metern um einen Dämon befindet."},
     {"k":"Das Kettenhemd","x":"Das vergoldete Kettenhemd ist leicht und beweglich (Rüstungswert 4, gibt nur einen Nachteil auf Würfe auf §Heimlichkeit§)."},
     {"k":"Stilisierte Krone","x":"Ein Spielercharakter, dem ein Wurf auf §Mythen & Legenden§ gelingt, erkennt, dass das Symbol auf der eisenbeschlagenen Eichentür eine stilisierte Krone ist, genau wie die in der Vorkammer (Ort 3)."},
     {"k":"Fackeln","x":"Die Fackeln brennen mit magischem Feuer, das automatisch erlischt, wenn man sie aus dem Grabhügel entfernt."},
     {"k":"Zufallsereignis","x":"Würfelt für jedes volle Viertel, das die Spielercharaktere hier verbringen, W6+3 auf der Tabelle auf S. 34."},
     {"k":"Norden","x":"Eisenbeschlagene Eichentür zum Grab des Drachenritters (Ort 9)."},
     {"k":"Osten","x":"Feuchter Erdtunnel zur Familiengruft (Ort 6), versperrt durch ein eisernes Fallgitter."},
     {"k":"Süden","x":"Eisernes Fallgitter zum Wachhaus (Ort 7)."},
     {"k":"Westen","x":"Feuchter Erdtunnel zur Gesindegruft (Ort 5), versperrt durch ein eisernes Fallgitter."}
    ]},
   {n:"9", t:"Grab des Drachenritters", p:38, pin:[60,12.7], wesen:["unhold"],
    vl:"Mitten in einer Grabkammer mit Fackeln an den Wänden steht ein Podest mit einem kunstvoll gearbeiteten Steinsarkophag. Boden, Decke und Wände bestehen aus Steinziegeln. An der Rückwand ist das Gemälde eines gerittenen Drachen zu sehen.",
    st:[
     {"k":"Der geöffnete Sarkophag","x":"Der Steinsarg wurde mit ungeheurer Kraft von innen geöffnet, und Stücke des zerschmetterten Deckels liegen verstreut auf dem Boden."},
     {"k":"Drachenstatuette/Dämonenkrone","x":"Eines der Teile der Drachenstatuette (S. 8) kann im Sarkophag gefunden werden, falls du dich entschieden hast, es hier zu platzieren. Wenn nicht, finden die Spielercharaktere stattdessen eine vergoldete Krone, die mit einem Zauber belegt ist, der allen Schaden durch Angriffe von Dämonen halbiert (aufgerundet). Diese Wirkung erklären die Runen auf der Krone, die mit einem gelungenen Wurf auf §Fremdsprachen§ gelesen werden können."},
     {"k":"Grabfalle","r":1,"x":"*Ein gelungener Wurf auf* §Entdecken§ *zeigt, dass die Statuette/Krone mit einem Mechanismus verbunden ist, der eine Falle sein könnte. Und tatsächlich – entfernt jemand das Artefakt, ohne es sorgfältig durch einen Gegenstand gleichen Gewichts (normaler Gegenstand) zu ersetzen, was einen gelungenen Wurf auf* §Fingerfertigkeit§ *erfordert, schießen zwanzig Klingen aus dem Sarkophag in alle Richtungen. Jeder innerhalb von 2 Metern muss einen Wurf auf* §Ausweichen§ *schaffen oder erleidet 2W6 Stichschaden.*"},
     {"k":"Der Wiedergänger","x":"Haben die Spielercharaktere den Wiedergänger noch nicht besiegt oder hat er sich wieder erhoben, greift er sie hier an."},
     {"k":"Fresko","x":"Der Drache auf dem Wandgemälde an der Rückwand trägt einen Ritter auf dem Rücken, der genau dieselbe Ausrüstung und denselben gehörnten Helm trägt wie der Grabwiedergänger."},
     {"k":"Inschrift","x":"Neben dem Fresko sind uralte Runen in die Wand geritzt. Ein Spielercharakter, dem ein Wurf auf §Fremdsprachen§ gelingt, kann etwas über „das Geschenk des Kaisers“ und einen „heiligen Zorn“ entziffern, der alle verzehren wird, die es wagen, dieses Geschenk zu berühren."},
     {"k":"Zufallsereignis","x":"Würfelt für jedes volle Viertel, das die Spielercharaktere hier verbringen, W4+4 auf der Tabelle auf S. 34."},
     {"k":"Süden","x":"Eisenbeschlagene Eichentür zur Halle der Dame (Ort 8)."}
    ]}
  ]}
 ],
 figuren:{
  "ridderhoehe-grub":{"typ":"nsc","t":"Grub","p":36,"img":"abenteuer/ridderhoehe-grub","tp":9,"werte":[["Bewegung","10"],["Schadensbonus","–"],["TP","9"]],"zl":[["Rüstung","Leder (1)"],["Fertigkeiten","Wahrnehmung 10, Ausweichen 12, Heimlichkeit 14"],["Waffen","Kurzschwert (Fertigkeitswert 12, Schaden W10), Kurzbogen (Fertigkeitswert 10, Schaden W10)"]],"text":["Grub, der Goblin, ist ein erbärmlicher Anblick: schmutzig, mit wildem Blick und hysterisch keuchend. Er trägt eine abgewetzte und zerschlissene Lederrüstung und stinkt nach Angst und Goblin-Körperflüssigkeiten."]},
  "ridderhoehe-dame":{"typ":"monster","t":"Die Dame","p":37,"img":"abenteuer/ridderhoehe-dame","be":"geist","werte":[],"zl":[],"text":["Die Dame ist ein durchscheinendes, schwach bläulich schimmerndes Phantom einer hochgewachsenen Kriegerjungfrau in einem knöchellangen Kettenhemd und einem vergoldeten Stirnband. Ihr Gesicht wirkt traurig und würdevoll, doch wenn sie angreift, verzerrt es sich zu einer schrecklichen Totenmaske mit leeren Augenhöhlen. Die Dame ist ein Geist mit den Werten auf Regelbuch S. 87."]},
  "ridderhoehe-unhold":{"typ":"monster","t":"Der Wiedergänger","p":38,"img":"abenteuer/ridderhoehe-unhold","be":"wiedergaenger","werte":[],"zl":[["Rüstung","8"],["Waffe","Morgenstern"]],"text":["Der Wiedergänger ist ein riesiger Krieger in altertümlicher Plattenrüstung und einem gehörnten Topfhelm. Das offene Visier gibt ein grimmiges Skelettgesicht mit leeren Augenhöhlen frei. Er bewegt sich langsam und schwerfällig unter dem fürchterlichen Geräusch schabenden Metalls durch den Hügel.","Der Wiedergänger wird im Hügel von uralter Drachenmagie geschützt. Er erleidet Schaden nach den Regeln, doch wird er innerhalb des Tores in der Vorkammer (Ort 3) besiegt, erhebt er sich innerhalb eines Tagesabschnitts wieder in Raum 9 (wann genau, liegt bei dir).","Der Wiedergänger hat die Werte auf Regelbuch S. 98. Er hat Rüstungswert 8 und führt einen Morgenstern."]},
  "ridderhoehe-fledermaeuse":{"typ":"monster","t":"Vampirfledermäuse","p":35,"be":"fledermaeuse","werte":[],"zl":[],"text":["Werte siehe Regelbuch S. 99."]},
  "ridderhoehe-spinne":{"typ":"monster","t":"Riesenspinne","p":34,"be":"riesenspinne","werte":[],"zl":[],"text":["Werte siehe Regelbuch S. 89."]}
 },
 kaesten:{},
 tabellen:[
  {"id":"ereig","h":"Zufallsereignisse","strip":"Zufallsereignisse · W12","p":34,"einl":"Für jedes Viertel, das die Spielercharaktere in einem Raum verbringen, ihn durchsuchen oder eine Kurze Rast einlegen, kannst du auf der folgenden Tabelle würfeln. Die Raumbeschreibungen geben an, wo Zufallsereignisse stattfinden können und mit welchem Würfel gewürfelt wird. Du kannst auch einfach ein passendes Ereignis wählen.","cols":["Wurf","Ereignis"],"rows":[
   ["1","**Goblins greifen an!** Von ihren orkischen Befehlshabern zurechtgewiesen, ist eine Goblin-Patrouille zum Grabhügel zurückgekehrt, um den Schatz zu bergen und (möglicherweise) ihre zurückgelassenen Kameraden zu retten. Es sind zwei mehr als Spielercharaktere, und sie greifen sofort an, fliehen aber, wenn die Hälfte von ihnen besiegt ist. Die Goblins haben die Werte von Grub (S. 36). Werden sie gefangen, können sie verraten, dass sie Maladûk dienen."],
   ["2","**Massakrierter Goblin.** Die Charaktere finden die traurigen Überreste eines toten Goblins. Der Körper ist schwer zerfleischt, doch ein Spielercharakter, dem ein Wurf auf §Heilkunde§ gelingt, erkennt, dass der Goblin noch nicht lange tot ist."],
   ["3","**Riesenspinne.** Die Spielercharaktere werden von einer Riesenspinne angegriffen, die in einem Hohlraum hinter einer der Wände haust. Werte siehe Regelbuch S. 89. Dieses Ereignis kann nur einmal eintreten."],
   ["4","**Der Wiedergänger.** Der Wiedergänger wurde vom Charakter gestört und greift an. Da er teilweise unstofflich ist, kann er durch geschlossene Fallgitter und Türen gehen, doch das erfordert eine Aktion. Der Wiedergänger zieht sich in seine Grabkammer (Ort 9) zurück, wenn er die Hälfte seiner TP verliert, und erholt sich dort innerhalb eines Viertels vollständig."],
   ["5","**Ruhelose Geister.** Durchscheinende Gestalten mit verzerrten Gesichtern schweben aus den Schatten und bedrängen die Spielercharaktere mit Kreischen und Schreien. Die Charaktere müssen einen WIL-Wurf machen, um der Furcht zu widerstehen (Regelbuch S. 52). Einst Diener im Haushalt des Drachenritters, locken die Geister ihren Herrn, den Grabwiedergänger, an, der nach W3 Runden eintrifft (siehe Ereignis 4)."],
   ["6","**Drachenvision.** Eine verirrte Erinnerung umhüllt einen der Charaktere, der plötzlich über eine fremdartige Stadt aus Türmchen, Türmen und hornartigen Spitzen blickt. Etwas kommt direkt auf den Charakter zugeflogen – ein riesiger Drache, geritten von einem Ritter in goldener Plattenrüstung und einem gehörnten Topfhelm. Der Spielercharakter muss einen WIL-Wurf mit einem Nachteil machen, um der Furcht zu widerstehen. Das Ereignis kann nur einmal eintreten."],
   ["7+","**Nichts geschieht.**"]
  ]},
  {"id":"verlassen","h":"Den Hügel verlassen?","p":34,"einl":"Verlassen die Charaktere den Hügel, um außerhalb zu rasten und sich zu erholen, würfelt für jeden Tagesabschnitt W6.","cols":["W6","Ergebnis"],"rows":[
   ["1–3","Nichts geschieht."],
   ["4–5","Eine Goblin-Patrouille, doppelt so viele wie die Charaktere und mit den Werten von Grub (S. 36), trifft ein und greift sofort an."],
   ["6","Der Wiedergänger erscheint beim Lager der Charaktere und greift sie an, verschwindet aber, sobald er Schaden erleidet."]
  ]}
 ]
};
