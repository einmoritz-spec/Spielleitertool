/* Playwall › B (S. 205–207) */
var TA_PWT = window.TA_PWT || (window.TA_PWT = {});

TA_PWT.B1 = {t:"Schlechte Optik", s:205, b:[
 "Du darfst Erzwungene Perspektive nun direkt auf lebende Ziele anwenden. Du darfst Erzwungene Perspektive außerdem einsetzen, um lebende Ziele zu treffen oder zu beeinflussen, ohne sie zu bewegen, als besäßen sie die Größe, in der du sie wahrnimmst. *(Das heißt: Ein einziger Schlag trifft ein weit entferntes Ziel, als stammte er von einem Riesen.)*",
 "Auf diese Weise eingesetzt, würfle **Dynamik** statt Aufmerksamkeit und füge den folgenden Text hinzu:",
 {t:"faehig", h:"Erzwungene Perspektive", x:"",
  erg:[
   ["plus", "**Für jede weitere {3}** darfst du ein weiteres Ziel mit einem Angriff dieser Art treffen."],
   ["nein", "**Bei Fehlschlag** schrumpfst oder wächst du bis zum nächsten Tag auf die Größe, die der Perspektive des Ziels auf dich zum Zeitpunkt deines Angriffs entspricht."]
  ]}
]};

TA_PWT.B2 = {t:"Das hatten wir schon", s:205, b:[
 {t:"faehig", h:"", x:"",
  b:["Bügle die Probleme von heute mit ein wenig Mehrarbeit später glatt. Du beginnst jeden Einsatz mit **{3} Zeitbaken** und darfst sie jederzeit im Außendienst setzen.",
   "Mit einer Zeitbake markierst du eine Stelle, an die dein zukünftiges Ich zurückkehren und eingreifen kann. Nach dem Einsatz kehrst du zu diesen Stellen zurück, um zu helfen – das bedeutet: Immer wenn du eine setzt, erscheint kurz darauf die zukünftige Version von dir, um etwas auf einfache Weise zu verändern, ohne ein ernstes Paradoxon auszulösen.",
   "Wähle jedes Mal, wenn du eine Zeitbake aktivierst, einen der folgenden Effekte:",
   {t:"liste", x:["Ein Gegenstand, dessen Suche Zeit kosten würde, wird sofort gefunden.", "Ein Gegenstand, den ein Gegner gut gebrauchen könnte, ist praktischerweise in dem Moment verschwunden, in dem er ihn hervorholen will.", "Ein Ablenkungsmanöver ereignet sich knapp außer Sichtweite.", "Irgendwo in der Nähe wird eine deiner Anomalie-Fähigkeiten aktiviert, ohne dass du es tun musst. *(Das erfordert weiterhin Würfe, kostet QS und erzeugt Chaos wie üblich.)* Bei einem Fehlschlag oder anderen Folgen muss sich dein zukünftiges Ich darum kümmern.", "Ein Schaden wird von deinem zukünftigen Ich genommen statt von jemandem, der anwesend ist. *(Wird am Ende des Einsatzes wieder hinzugefügt. Kann den Tod verursachen.)*", "Jemand war auf deine Ankunft vorbereitet – mit Informationen, Einschüchterung oder Charme.", "Jemand oder etwas, das dich überraschen wollte, wird stattdessen selbst überrascht."]},
   "Du kannst keine Zeitbake setzen, wenn du tot oder anderweitig handlungsunfähig bist.",
   "Kannst du aus irgendeinem Grund nicht zu einer gesetzten Zeitbake zurückkehren, richtet das entstehende Paradoxon schwere Schäden an der Realität an: Füge sofort 11 Lose Enden zur Gesamtzahl deiner Zweigstelle hinzu."]}
]};

TA_PWT.B3 = {t:"Betteln", s:205, b:[
 "*Haben die denn die Geschichten nicht gelesen?*",
 "Bittest du jemanden höflich um irgendeine Art von Hilfe und er lehnt ab, darfst du ohne Wurf die Wirkung „Bei Erfolg“ von Ausleihen und die Wirkung „Bei sechs oder mehr {3}en“ von Stehlen auslösen.",
 "Möchtest du zusätzliche {3}en, um andere Wirkungen von Ausleihen auszulösen, würfle **Subtilität** und gib alle durch den Wurf erzeugten {3}en aus. Dieser Wurf kann nicht fehlschlagen, erzeugt aber wie üblich Chaos."
]};

TA_PWT.B4 = {t:"Großer Zeiger", s:205, b:[
 {t:"faehig", h:"Großer Zeiger", x:"Du erschaffst ein mächtiges Artefakt und kannst es nun führen: den **Großen Zeiger**. Der Große Zeiger ist eine lange, elegante, schwertartige Waffe, die keinen Schaden verursacht. Du kannst damit einen Gegner anvisieren oder sie aktivieren, indem du sie gegen eine beliebige Uhr schlägst. Führst du den Großen Zeiger allein, würfle **Dynamik**.",
  erg:[
   ["ok", "**Bei Erfolg** wird das Ziel vom Großen Zeiger getroffen. Es erlebt noch einmal das Letzte, das ihm Schaden zugefügt hat, und erleidet dabei gleich viel Schaden."],
   ["plus", "**Bei Triszendenz** kannst du die nächsten 60 Sekunden in beliebiger Reihenfolge erleben. Du kannst alle Gegenstände oder Personen, die du halten kannst, mitnehmen, während du auf diese Weise zwischen den Sekunden reist."],
   ["plus", "**Für jede weitere {3}** darfst du eines der Folgenden wählen:\n– Die Zeit schreitet um eine Minute voran.\n– Die Zeit spult um eine Minute zurück.\n– Das Ziel hört in Gedanken ein ablenkendes „Tick-Tack“, das es die nächste Minute daran hindert, sich auf einen komplexen Plan, Rechenaufgaben oder eine Rede zu konzentrieren.\n– Ein Timer in der Nähe läuft ab, und die Aufgabe, auf die er angewendet wurde, ist erledigt. *(Der Toast springt heraus, eine Parkuhr erreicht ihr Limit usw.)*"],
   ["nein", "**Bei Fehlschlag** fügt dir das Nächste, das dir Schaden zufügt, diesen doppelt zu – also doppelten Schaden."]
  ]}
]};

TA_PWT.B5 = {t:"Bindendes Gelübde", s:206, b:[
 "In deiner Gegenwart haben Worte großes Gewicht. Von nun an kannst du jedes Mal, wenn du ein Versprechen eines anderen annimmst oder selbst eines gibst, entscheiden, es zu einem **Bindenden Gelübde** zu machen. Wer ein Versprechen bricht oder es nicht erfüllt, bevor es unmöglich wird, stirbt sofort auf eine Weise, die gewöhnlich wirkt.",
 "Wenn alle Beteiligten zustimmen, können die Folgen eines gebrochenen Gelübdes auch etwas anderes als den sofortigen Tod umfassen (etwa bindende Zwänge oder hohe Schulden). Jede Ersatzfolge muss vereinbart werden, bevor das Versprechen zu einem Bindenden Gelübde wird.",
 "Selbst für die Skeptischsten bringt ein nahendes Bindendes Gelübde ein tiefes Gefühl von Gewicht und Wahrheit mit sich. Jeder, der eines gibt, versteht, dass das, was er gesagt hat, etwas aufs Spiel setzt."
]};

TA_PWT.B6 = {t:"Schwarzer Spiegel", s:206, b:[
 {t:"faehig", h:"Schwarzer Spiegel", x:"Beherrsche die digitalen Pfade. Drücke dich in den Bildschirm oder das Display eines Geräts und würfle **Subtilität**.",
  erg:[
   ["ok", "**Bei Erfolg** betrittst du das Gerät. Darin wirst du ein Wesen aus Strom und Daten; du kannst dich im Gerät verstecken und durch jeden daran angeschlossenen Bildschirm oder jede Kamera wie durch ein Fenster hinaussehen. Außerdem kannst du aus dem Bildschirm oder Display jedes Geräts hervortreten, das direkt mit dem ursprünglichen Gerät verbunden ist *(per Kabel, drahtloser Kopplung usw.)*."],
   ["plus", "**Für jede weitere {3}** wähle eines:\nDu darfst jemanden mitnehmen.\nDu darfst die Dateien, den Speicher oder die Schaltkreise des Geräts durchsuchen, das du betreten hast."],
   ["nein", "**Bei Fehlschlag** geht nur dein Bewusstsein hinein. Du verirrst dich in den vielen Verbindungen der Technik und giltst als tot. Das aktiviert deine Lebensversicherung, aber dein neues, datenbasiertes Selbst könnte ein Eigenleben entwickeln."]
  ]}
]};

TA_PWT.B7 = {t:"Schwarzer Mann", s:206, b:[
 {t:"sp", x:[
  ["Du bleibst für immer in den Köpfen derer, die du heimgesucht hast. Du kannst nun Vermisst? auf jeden oder alles anwenden, das du zuvor mit einer deiner Absence-Fähigkeiten zum Ziel hattest – unabhängig davon, wo ihr beide euch vor deinem Wurf befindet. Tust du das, würfle **Aufmerksamkeit** statt Beharrlichkeit."],
  ["Schlägt ein Wurf bei der Verwendung dieser Fähigkeit fehl, wird das Ziel für immer gegen deine Absence-Kräfte immun – und gegen deine Wahrnehmung. Es wird immer eine Lücke in deinen Sinnen sein. Du wirst nie wissen, dass es kommt.",
   "Füge außerdem Vermisst? den folgenden Text hinzu:",
   {t:"faehig", h:"Vermisst?", x:"", erg:[["plus", "**Bei Triszendenz** musst du Vermisst? bei diesem Ziel nie wieder würfeln, mit beliebig vielen {3}en."]]}]
 ]}
]};

TA_PWT.B8 = {t:"Kopfgeld", s:206, b:[
 "Kennst du den Namen, mit dem ein Ziel an sich selbst denkt, kannst du deine Anomalie-Fähigkeiten von überall aus auf es anwenden."
]};

TA_PWT.B9 = {t:"Wanze", s:206, b:[
 {t:"faehig", h:"Wanze", x:"Nimm ein Versprechen von jemandem an und würfle **Subtilität**.",
  erg:[
   ["ok", "**Bei Erfolg** setzt du eine **Wanze**: Bis das Ziel das Versprechen erfüllt hat, das es dir gegeben hat (oder es nicht mehr erfüllen kann), ist es ein perfektes Mikrofon. Jederzeit kannst du seine Frequenz einstellen, um alles zu hören, was es sagt oder was zu ihm gesagt wird. Du kannst bis zu 3 Instanzen dieses Effekts gleichzeitig aktiv haben."],
   ["plus", "**Bei jeder dritten {3}** kann die Wanze einmal weitergereicht werden. Spricht das Ziel mit jemandem, kannst du entscheiden, die Wanze auf ihn zu verlegen. Dieser Effekt endet trotzdem, wenn das ursprüngliche Ziel sein Versprechen erfüllt hat oder es nicht mehr erfüllen kann."],
   ["nein", "**Bei Fehlschlag** wirst du vom Ziel verwanzt. Es hört mindestens einen Tag lang deine Stimme und die der Menschen, die mit dir sprechen, auf eine Weise, die es nicht kontrollieren kann. Mindestens ein Loses Ende."]
  ],
  f:"Andere bringe ich dazu zu tun, was ich will, mit …", a:[["Dramatischen Ultimaten.", "B5"], ["Feinen Andeutungen.", "P9"]]}
]};

TA_PWT.B10 = {t:"Aber ich habe nicht geschossen …", s:207, b:[
 "Ziele unter den Wirkungen der in Vereidigen aufgeführten Folgen …",
 {t:"sp", x:[
  [{t:"liste", x:["Verlieren diese Wirkungen nie, es sei denn, du hebst sie auf.", "Sind immun gegen Schaden. Aller Schaden, den sie erleiden würden, wird stattdessen dir zugefügt, wo immer du dich befindest."]}],
  [{t:"liste", x:["Können dich jederzeit rufen, indem sie direkt einen ihrer Sinne mit dir teilen *(sodass du mit ihren Augen sehen oder mit ihren Ohren hören kannst)*. Erlebst du einen geteilten Sinn mit einem Ziel, darfst du Gun-Fähigkeiten einsetzen, als befändest du dich am Ort dieses Ziels."]}]
 ]}
]};

TA_PWT.B11 = {t:"Aber ich habe Geburtstag!", s:207, b:[
 {t:"faehig", h:"Aber ich habe Geburtstag!", x:"Ist ein gewöhnliches Ziel aufgebracht, wütend oder feindselig dir gegenüber, sag ihm: „Ich habe Geburtstag!“ und würfle **Empathie**.",
  erg:[
   ["ok", "**Bei Erfolg** entspannt sich das Ziel sofort und entwickelt eine neutrale bis leicht positive Meinung von dir, ganz gleich, was es vorher dachte. Es sieht in dir weder eine Bedrohung noch eine Quelle irgendwelchen Ärgers … bis morgen."],
   ["plus", "**Bei jeder dritten {3}** kannst du sagen: „Er/Sie hat auch Geburtstag!“ und auf jemanden in der Nähe zeigen. Auch diese Person wird vom Ziel nicht als Bedrohung betrachtet."],
   ["plus", "**Bei Triszendenz** hat jeder Geburtstag. Das Ziel kann gegenüber niemandem und nirgendwo mehr feindselig oder aggressiv sein."],
   ["nein", "**Bei Fehlschlag** ist sich das Ziel noch sicherer, dass du eine Bedrohung bist. Schlimmer noch: Es hat Geburtstag und hat außerordentliches Glück. Schaden oder Unannehmlichkeiten, die gegen es gerichtet sind, gehen meist daneben oder finden keinen Halt. Beobachter und Passanten bemühen sich eigens, ihm zu helfen und für es einzugreifen. Dieser Effekt hält bis zum nächsten Tag an."]
  ],
  f:"Auf meiner Party …", a:[["Ist jeder willkommen.", "L3"], ["Sind Geschenke Pflicht.", "G2"]]}
]};
