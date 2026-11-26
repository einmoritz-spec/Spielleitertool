/* Playwall › S (S. 263–269) */
var TA_PWT = window.TA_PWT || (window.TA_PWT = {});

TA_PWT.S1 = {t:"Sandsturm", s:263, b:[
 {t:"faehig", h:"Sandsturm", x:"Ist dein Sandbeutel nicht zur Hand, bitte jemand anderen um seinen. Wenn jemand in der Nähe einen Behälter beliebiger Größe öffnen will, würfle **Initiative**.",
  erg:[
   ["ok", "**Bei Erfolg** ist der Behälter außerdem voller Schlafsand, der in einer Wolke durch die Luft explodiert. Wer diesen Staub einatmet, solange er in der Luft ist, schläft ein."],
   ["plus", "**Für jede weitere {3}** wähle heimlich etwas, das sich schließen lässt, und lege deine versiegelten Auswahlen an einen Ort, den alle Spieler sehen können. Achte darauf, dass deine Auswahlen einzeln aufgeschrieben sind. Beispiele können sein:\n– Ein Fläschchen\n– Ein Buch\n– Eine Aktentasche\n– Eine Jacke\n– Ein Gitarrenkoffer\n– Ein Mund\nFür den Rest dieses Einsatzes darfst du, wenn sich etwas öffnet, das deinen Auswahlen entspricht, wählen, die Wirkungen eines Erfolgs ohne Wurf zu wiederholen. Du kannst jede Auswahl nur einmal pro Einsatz verwenden."],
   ["nein", "**Bei Fehlschlag** wirst du stattdessen mit dem Sand gefüllt. Deine Glieder werden starr, deine Sicht verschwimmt, dein Mund trocknet aus. Schon leichter Schaden an deiner neuerdings papierdünnen Haut lässt dich platzen und setzt einen Sandhaufen frei, der alle in der Nähe einschlafen lässt."]
  ],
  f:"Was brauche ich mehr?", a:[["Entspannung.", "W9"], ["Tödliche Waffen.", "G1"]]}
]};

TA_PWT.S2 = {t:"Rette ein Pferd", s:263, b:[
 {t:"faehig", h:"Rette ein Pferd", x:"Richte deine Gun auf ein beliebiges Ziel und würfle **Initiative**.",
  erg:[
   ["ok", "**Bei Erfolg** wirst du zu einer Kugel. Du reist in gerader Linie und mit konstanter Geschwindigkeit zu diesem Ziel und ignorierst dabei die Auswirkungen von Schwerkraft, Luftwiderstand und Reibung. Du kannst diesen Effekt an jedem Punkt deiner Reise beenden. Triffst du etwas, triffst du es als Kugel, bevor du unverletzt in deiner normalen Gestalt wieder hervortrittst, die Gun in der Hand."],
   ["plus", "**Für jede weitere {3}** darfst du:\n– Ein Ziel auf deinem Weg treffen, ohne anzuhalten.\n– Ein Hindernis unbeschadet umgehen.\n– Einmal im 90-Grad-Winkel abbiegen."],
   ["nein", "**Bei Fehlschlag** begleitet dich alles im Umkreis von drei Metern auf deiner Reise, wird aber nicht verwandelt und ignoriert Luftwiderstand und Reibung nicht."]
  ]}
]};

TA_PWT.S3 = {t:"Schrödinger-Effekt", s:264, b:[
 "Wirst du nicht direkt beobachtet, existierst du für nichts anderes. Kameras, Aufnahmegeräte, Spiegel und andere indirekte Formen der Beobachtung zählen nicht als Beobachtung. Du darfst in dieser Zeit die Welt beliebig beeinflussen – du bist weiterhin körperlich und anwesend. Aber nichts kann dich zurückverfolgen, du machst kein Geräusch, und du kannst mit keinem körperlichen Mittel verletzt, festgehalten, aufgehalten oder aufgespürt werden.",
 "Außerdem darfst du, wenn dir Entfesselt gelingt, unsichtbar werden, ohne {3}en auszugeben."
]};

TA_PWT.S4 = {t:"Sichere Verbindung", s:264, b:[
 {t:"faehig", h:"Sichere Verbindung", x:"Wähle zwei Ziele mit Verstand (du kannst eines davon sein). Klatsche in die Hände und würfle **Empathie**.",
  erg:[
   ["ok", "**Bei Erfolg** hebst du den Abstand zwischen den Gedanken der Ziele auf. Beide wissen unmittelbar und genau, was der andere denkt. Das lässt sich für ein hohes Maß an Zusammenarbeit, zum Austausch von Informationen oder zur Erzeugung einer Pattsituation nutzen.\nSich dagegen zu wehren, an bestimmte Dinge zu denken, wenn sie mündlich oder visuell zur Sprache kommen, erfordert einen erfolgreichen Wurf auf **Professionalität** – gewöhnliche Ziele können sich ohne besondere und umfassende Ausbildung nicht wehren.\nViele anomale Ziele haben keinen Verstand, mit dem du dich vollständig oder leicht verbinden kannst. Dieser Effekt endet, wenn du das Bewusstsein verlierst; du kannst ihn vorher jederzeit beenden."],
   ["plus", "**Bei Triszendenz** kannst du diese Verbindung in beide Richtungen einseitig machen."],
   ["nein", "**Bei Fehlschlag** tauschen die Gedanken der beiden Ziele dauerhaft die Plätze."]
  ]}
]};

TA_PWT.S5 = {t:"Sieh, was du gewonnen hast", s:264, b:[
 {t:"faehig", h:"Sieh, was du gewonnen hast", x:"Brauchst du etwas? Irgendetwas? Winke mit dem Arm schwungvoll und würfle **Beharrlichkeit**.",
  erg:[
   ["ok", "**Bei Erfolg** würfle 3W4 und erschaffe einen Gegenstand, der den Vorgaben entspricht. Du darfst die Würfelergebnisse in beliebiger Reihenfolge zuweisen."],
   ["plus", "**Für jede weitere {3}** darfst du das Ergebnis eines Würfels um 1 nach oben oder unten anpassen."],
   ["plus", "**Bei Triszendenz** erschaffe den feuerfesten Hubschrauber LMZ „Skybreaker“ der Archon-Klasse aus der Liste der kaufbaren Anforderungen im Handbuch für Außendienst."],
   ["nein", "**Bei Fehlschlag** erschafft der GM etwas nach beliebigen dieser Vorgaben und erschafft es in der Nähe, vielleicht über dir."]
  ],
  b:[
   {t:"tab", kopf:["Kategorie", "Detail", "Größe"], x:[
    ["1: Tier", "1: Unverarbeitet", "1: Traubengroß"],
    ["2: Gemüse", "2: Verarbeitet", "2: Pferdegroß"],
    ["{3}: Mineral", "{3}: Kunstvoll", "{3}: Baumgroß"],
    ["4: Element", "4: Unmöglich", "4: Gebäudegroß"]
   ]},
   "Dein Gegenstand kann überall erscheinen, wohin du gerade deuten kannst. Wird der herbeigerufene Gegenstand auf etwas fallen gelassen, entspricht der Schaden, den er beim Aufprall verursacht, in der Regel der Nummer der Größenkategorie.",
   "Gefällt dir nicht, was du gewürfelt hast, kannst du stattdessen immer eine einzelne Alpensteinbockziege erschaffen."
  ]}
]};

TA_PWT.S6 = {t:"Sechsschüsser", s:264, b:[
 {t:"sp", x:[
  ["Er ist immer geladen. Du beginnst jeden Einsatz mit sechs Patronen im Lauf. Gelingt dir ein Wurf für eine beliebige Gun-Fähigkeit, kannst du beliebig viele Patronen ausgeben, um dem Wurf entsprechend viele {3}en hinzuzufügen. Deine Patronen füllen sich zu Beginn jedes neuen Einsatzes wieder auf."],
  [{t:"faehig", h:"", x:"", b:[{t:"klein", x:"Nur du beantwortest diese Frage."}],
    f:"Wird es je genug sein?", a:[["Nein.", "R8"], ["Ja.", "C9"]]}]
 ]}
]};

TA_PWT.S7 = {t:"FÄHIGKEIT FOLGT", s:265, b:[
 {t:"faehig", h:"FÄHIGKEIT FOLGT", x:"Wähle zu Beginn jedes Einsatzes irgendwann vor Ende der Einsatzbesprechung den Text einer Fertigkeit, Fähigkeit oder eines Gegenstands aus einem beliebigen Tabletop-Rollenspiel. Du darfst die gewählte Fertigkeit, Fähigkeit oder den gewählten Gegenstand in deinem Spiel von Triangle Agency während dieses Einsatzes verwenden. Zu verstehen, wie sie funktioniert, liegt in der gemeinsamen Verantwortung des ganzen Teams. Würfle nach jeder Verwendung der gewählten Fertigkeit, Fähigkeit oder des gewählten Gegenstands auf **Beharrlichkeit**.",
  erg:[
   ["ok", "**Bei Erfolg** kannst du die gewählte Fertigkeit, Fähigkeit oder den gewählten Gegenstand in diesem Einsatz nicht erneut verwenden. Zu Beginn des nächsten Einsatzes kannst du eine andere wählen."],
   ["plus", "**Bei sechs oder mehr {3}en** kannst du die gewählte Fertigkeit, Fähigkeit oder den gewählten Gegenstand in diesem Einsatz erneut verwenden."],
   ["nein", "**Bei Fehlschlag** kannst du nie wieder etwas aus demselben Tabletop-Rollenspiel verwenden, aus dem der Text stammte, einschließlich der gewählten Fertigkeit, Fähigkeit oder des gewählten Gegenstands."]
  ]}
]};

TA_PWT.S8 = {t:"Poetry-Slam", s:265, b:[
 {t:"faehig", h:"Poetry-Slam", x:"Wer sagt, Worte könnten nicht wehtun? Trage zwei Zeilen qualvoll schlechter Poesie vor, die du für diese Fähigkeit noch nicht verwendet hast. Würfle **Dynamik**.",
  erg:[
   ["ok", "**Bei Erfolg** erleidet jeder, der deine Worte hören kann, 1 Schaden."],
   ["plus", "**Für jede weitere {3}** füge dem Gedicht eine Zeile hinzu und wähle eines:\n– Ein Ziel ist vom Schaden ausgenommen.\n– Du kannst dabei nicht aufgezeichnet werden.\n– Deine Worte dringen durch Stöpsel, Ohrenschützer oder laute Geräusche und sind unausweichlich.\n– Ein Ziel lässt alles fallen, was es in den Händen hält, und wirft dir den Inhalt seiner Taschen entgegen, bevor es Schaden erleidet.\n– Auf dein Gedicht folgen unmittelbar fünf Sekunden Stille, durchsetzt von lauten Grillen, die Geräusche in der Nähe überdecken."],
   ["plus", "Hat dein Gedicht vier oder mehr Zeilen und folgt einem ABAB-Reimschema oder reimt sich jede Zeile, füge 2 zusätzlichen Schaden zu."],
   ["plus", "**Bei Triszendenz** nehmen deine Worte feste Form an. Du erschaffst eine Gewalttätige Kleine Anomalie, die deinen Befehlen folgt, bis sie zerstört wird."],
   ["nein", "**Bei Fehlschlag** fällt dein Gedicht durch, und deine Zunge verheddert sich im Vers. Du darfst nur noch in gereimten Zweizeilern sprechen. Beim ersten Mal, dass du es nicht tust, erleidest du 3 Schaden, und dieser Effekt endet."]
  ],
  f:"Ich möchte, dass meine Geschichte …", a:[["Etwas Neues in die Welt bringt.", "U1"], ["Meine vergangenen Fehler wiedergutmacht.", "R6"]]}
]};

TA_PWT.S9 = {t:"Montage erforderlich", s:265, b:[
 {t:"faehig", h:"Montage erforderlich", x:"Nimm beliebig viele Dinge, die du Ausgeliehen oder Gestohlen hast, und füge sie mit beliebig vielen Gegenständen zusammen. Sag „Es lebt!“ und würfle **Beharrlichkeit**.",
  erg:[
   ["ok", "**Bei Erfolg** erschaffst du aus den Einzelteilen eine Person. Die Teile, aus denen sie entsteht, sind zunächst ihre einzigen Eigenschaften. Die übrigen Einzelheiten werden nahtlos mit einer „völlig normalen Person“ aufgefüllt, wie sie aus deiner Perspektive definiert ist. Sie betrachtet dich als Schöpfer und begegnet dir im Allgemeinen freundlich, auch wenn ihre Neigung zu existenziellem Unbehagen von den Dingen abhängt, aus denen sie erschaffen wurde. Die Ausgeliehenen oder Gestohlenen Dinge verlierst du dabei."],
   ["plus", "**Bei jeder dritten {3}** kannst du dein Material strecken, um aus denselben Teilen eine weitere Person zu erschaffen, identisch oder leicht abgewandelt."],
   ["nein", "**Bei Fehlschlag** überwältigt eines der Teile die „völlig normale Person“ mit allen Einzelheiten seiner Herkunft. Die Person, die du erschaffst, ist die Person, der dieses Teil entnommen wurde, abgesehen von den anderen enthaltenen Teilen."]
  ]}
]};

TA_PWT.S10 = {t:"Schallmauer", s:266, b:[
 {t:"faehig", h:"Schallmauer", x:"Deine Worte können Schmerz aufheben. Wenn du oder jemand, den du wahrnimmst, Schaden erleiden oder zum Ziel der Chaos-Effekte Töten oder Überwältigen würde, würfle **Initiative**.",
  erg:[
   ["ok", "**Bei Erfolg** darfst du das Ziel mit einem schützenden Satz oder einer schützenden Rede einhüllen. Verringere den dem Ziel zugefügten Schaden um 1. Der Effekt ist stärker, wenn das, was du gesagt hast, etwas aus der folgenden Liste bewirkt:\n– Ruft eine emotionale Erinnerung wach\n– Verletzt ihre Gefühle mit einer harten Wahrheit\n– Enthüllt einen Verrat oder ein Geheimnis\n– Schafft ein bindendes Versprechen\nBewirken deine schützenden Worte eine Sache aus der Liste, verringere den gesamten dem Ziel zugefügten Schaden auf null.\nBewirken deine schützenden Worte mindestens zwei Dinge aus der Liste, kann diese Fähigkeit den Chaos-Effekt Töten aufheben.\nBewirken deine schützenden Worte mindestens drei Dinge aus der Liste, kann diese Fähigkeit den Chaos-Effekt Überwältigen aufheben."],
   ["plus", "**Für jede weitere {3}** darfst du diesem Effekt ein weiteres Ziel hinzufügen. Du darfst nicht zu mehreren Zielen dasselbe sagen."],
   ["nein", "**Bei Fehlschlag** wird der Schaden normal zugefügt und tut auch deiner Stimme weh – du hast für den Rest dieses Einsatzes Burnout bei allen Whisper-Fähigkeiten."]
  ],
  f:"Ich halte Situationen für unter Kontrolle, …", a:[["Wenn alle ruhig sind.", "H2"], ["Wenn mir alle zuhören.", "C2"]]}
]};

TA_PWT.S11 = {t:"Fortgezaubert", s:266, b:[
 {t:"faehig", h:"Fortgezaubert", x:"Wird jemand in deiner Nähe aus irgendeinem Grund (auch durch dich) verletzt oder getötet werden, darfst du **Initiative** würfeln.",
  erg:[
   ["ok", "**Bei Erfolg** wird das Ziel, statt verletzt zu werden, ins **Anderswo** geschickt. An einen Ort voller Freude, Abenteuer und Magie. In einem Jahrzehnt kehrt es im selben Alter zurück wie bei seinem Aufbruch, mit unversehrten Erinnerungen."],
   ["plus", "**Für jede weitere {3}** darfst du aus weiteren Rückkehrzeiträumen wählen:\n– 1: Fünf Jahre\n– 2: Ein Jahr\n– {3}: Ein Monat\n– 4: Ein Tag\n– 5: Wenige Augenblicke später"],
   ["plus", "Setzt du diese Fähigkeit bei einem Agenten ein, kann er auf **Professionalität** würfeln, seine {3}en zu deinem Wurf addieren und entscheiden, nach welchem Zeitraum er zurückkehrt."],
   ["plus", "**Bei Triszendenz** kann es jederzeit zurückkehren und beliebig viel Zeit dort erlebt haben, wie du möchtest. Diese Zahlen können verschieden sein."],
   ["nein", "**Bei Fehlschlag** wird sein Geist dorthin geschickt, sein Körper aber nicht. Er kehrt zurück, wenn der Geist es tut – vielleicht. Oder vielleicht macht sich etwas anderes den Körper zunutze."]
  ]}
]};

TA_PWT.S12 = {t:"Geist des Waldes", s:266, b:[
 {t:"faehig", h:"Geist des Waldes", x:"Werde zu einer Pflanze. Würfle **Professionalität**.",
  erg:[
   ["ok", "**Bei Erfolg** bist du nun eine beliebige Pflanze oder zusammenhängende Pflanzengruppe (eine Reihe Pflanzkübel, ein Rasen, ein kleiner Wald). Du siehst genau aus wie die Pflanze und wirkst nur auf Dinge ungewöhnlich, die anomale Resonanz wahrnehmen können. Du behältst deine normalen Sinne und kannst sprechen, als wärst du in deiner ursprünglichen Gestalt. Du kannst diese Gestalt bis zu eine Stunde halten."],
   ["plus", "**Für jede weitere {3}** kannst du diese Gestalt eine weitere Stunde halten oder ohne Wurf einen Effekt aus der Liste „Für jede weitere {3}“ von Grüner Daumen erzeugen."],
   ["nein", "**Bei Fehlschlag** gibst du dich deinem Pflanzen-Ich so vollständig hin, dass du vergisst, ein Mensch gewesen zu sein. Deine Wachstums-Anomalie breitet sich in die Umgebung aus und erzeugt ein Gebiet voller blühenden Pflanzenlebens mit dir im Mittelpunkt, bevor sie verblasst. Du giltst als tot und musst wie üblich wiederbelebt werden.\nZusätzlich erhältst du diese Effekte:\n– Wenn du Grüner Daumen einsetzt, musst du keine Pflanze anvisieren; das Material kann von deinem eigenen Körper stammen.\n– Du darfst jederzeit ohne Wurf kleine kosmetische oder biologische Veränderungen an allen Pflanzen oder Samen um dich herum vornehmen."]
  ]}
]};

TA_PWT.S13 = {t:"Spleißen", s:267, b:[
 {t:"faehig", h:"Spleißen", x:"Drücke ein bewusstloses oder totes Ziel, das du hältst, vollständig in dein Fleisch und würfle **Subtilität**.",
  erg:[
   ["ok", "**Bei Erfolg** stirbt das Ziel, falls es nicht schon tot war, abgesehen von höchst ungewöhnlichen Fällen. Schreibe eine körperliche Beschreibung des Ziels auf. Wann immer du Gliedmaßen einsetzt, dürfen die Gliedmaßen, die du wachsen lässt, spezialisierte Anhängsel des Ziels umfassen (z. B. einziehbare Krallen, Saugnäpfe, Blüten). Du wirst etwas größer als zuvor."],
   ["plus", "**Bei Triszendenz** spleißt du die Genetik des Ziels perfekt mit deiner eigenen; du darfst deinen Körper dauerhaft verändern, sodass er diese Veränderung widerspiegelt. Dieses Ziel ist immun gegen die Auswirkungen künftiger Fehlschläge."],
   ["nein", "**Bei Fehlschlag** wird jedes Ziel, das du je gespleißt hast, aus deinem Körper als gefährlicher, eigenständiger **Amalgam** freigesetzt. Er hat eine instabile Form, die rasch Größe, Gestalt und Beschaffenheit über die vielen Eigenschaften seiner gespleißten Teile hinweg wechselt. Er ist sehr hungrig. Du kehrst zu deiner ursprünglichen Größe zurück und verlierst alle zuvor gespleißten Ziele."]
  ],
  f:"Ich koche eher …", a:[["Jeden Tag dasselbe.", "P1"], ["Jedes Mal etwas Neues.", "C3"]]}
]};

TA_PWT.S14 = {t:"Sporen", s:267, b:[
 {t:"faehig", h:"Sporen", x:"Du kannst kleine Sporen von dir erzeugen. Spucke auf den Boden und würfle **Subtilität**.",
  erg:[
   ["ok", "**Bei Erfolg** sprießen sechs Geschöpfe aus dem Boden, jedes so groß wie dein Daumen. Sie können aussehen, wie du willst, aber ihre Körper bestehen erkennbar aus Pflanzenmaterial. Diese Geschöpfe können in einfachen Sätzen sprechen, einen einzelnen Gegenstand von beliebigem Gewicht und beliebiger Größe tragen und tun alles, worum du sie bittest. Sie verschwinden, nachdem sie eine Aufgabe erledigt oder 1 Schaden genommen haben."],
   ["plus", "**Für jede weitere {3}** wähle eines:\n– Lass ein weiteres Geschöpf sprießen.\n– Jedes Geschöpf kann vor dem Verschwinden eine weitere Aufgabe erledigen.\n– Die Geschöpfe können eine komplexe Idee mitteilen.\n– Ein Geschöpf kann fliegen, schwimmen oder klettern, auch mit seinem Gegenstand."],
   ["plus", "**Bei Triszendenz** können die ersten sechs Geschöpfe, die du erschaffst, beliebig viele Aufgaben erledigen und verschwinden erst, wenn sie Schaden nehmen."],
   ["nein", "**Bei Fehlschlag** stirbst du. Dein Körper teilt sich in 200 dieser Geschöpfe, aufgeteilt in mindestens {3} verschiedene Fraktionen. Jede dieser Fraktionen wählt ein Ziel, das dir nicht gefallen wird: Sie werden vor nichts zurückschrecken, um es zu erreichen."]
  ]}
]};

TA_PWT.S15 = {t:"Stehlen", s:267, b:[
 {t:"sp", x:[
  ["Wann immer du etwas Ausleihst, erhältst du es als körperlichen Gegenstand, der das Ding darstellt. Du kannst Ausgeliehenes nach Belieben an- und ablegen. Endet die Wirkung von Ausleihen, verschwindet dieser körperliche Gegenstand. Andere können auf diese Weise erzeugte Gegenstände benutzen, als hätten sie Ausleihen eingesetzt, doch wenn jemand anderes einen länger als einen Tag trägt, wird er dauerhaft mit ihm verwachsen."],
  [{t:"faehig", h:"", x:"Zusätzlich erhält Ausleihen folgenden weiteren Text:", erg:[
    ["plus", "**Bei sechs oder mehr {3}en** darfst du das Ausgeliehene für immer behalten."]
   ], f:"Was finde ich anstößiger?", a:[["Vergeudetes Potenzial.", "S9"], ["Unhöflichkeit.", "B3"]]}]
 ]},
 {t:"html", x:'<div class="pws-fuss"><div><p>ich habe den Fehlschlag-Effekt von Sporen schon erlebt, und er führte dazu, dass eine ganze Zweigstelle auseinandergerissen wurde. 200 Geschöpfe, die alles beliebiger Größe heben können, ziehen in deiner Heimatstadt in den Krieg?</p><p>lass sie es ruhig haben. also bereite dich vielleicht darauf vor, was du in dieser Situation tun würdest. vielleicht Stehlen: jemandes Fähigkeit im Zerquetschen von Käfern</p><p>könnten wir Sporen zurück in deinen Körper spleißen?? was würde passieren???</p></div></div>'}
]};

TA_PWT.S16 = {t:"Heften", s:268, b:[
 {t:"faehig", h:"Heften", x:"Wähle eine Kante, die du sehen oder fühlen kannst (ein Dach, eine Türöffnung, einen Tisch, einen Ziegel, ein Blatt Papier). Wähle innerhalb einer Minute eine zweite. Würfle **Subtilität**.",
  erg:[
   ["ok", "**Bei Erfolg** heftest du sie zusammen und verbindest die beiden Kanten. Optisch bleiben sie an ihrem ursprünglichen Platz, räumlich aber sind sie direkt verbunden. Etwas, das von einer Kante her vorbeikommt, sich bewegt oder tritt, gelangt unmittelbar auf die andere, unabhängig davon, wie weit sie voneinander entfernt sind oder ob etwas dazwischen liegt."],
   ["plus", "**Bei jeder dritten {3}** kannst du weitere dieser Kanten heften, ohne die erste Heftung zu lösen, und so womöglich eine Kette oder Schleife bilden. Vergeht seit deiner letzten Heftung mehr als eine Minute, verlierst du die verbleibenden Heftungen."],
   ["nein", "**Bei Fehlschlag** heftest du dich versehentlich an die erste Kante, und jedes Mal, wenn du eine Schwelle überschreitest, findest du dich an der ersten Kante wieder. Du kannst diese Heftung gewaltsam lösen, hast dann aber für den Rest des Tages Burnout bei allen Würfen."]
  ],
  f:"Wenn ich die Anleitung nicht verstehe, …", a:[["Gebe ich auf.", "R14"], ["Fange ich von vorn an.", "F8"]]}
]};

TA_PWT.S17 = {t:"Verirrte Kugel", s:268, b:[
 {t:"faehig", h:"Verirrte Kugel", x:"Richte deine Gun in die Luft und feuere. Würfle **Subtilität**.",
  erg:[
   ["ok", "**Bei Erfolg** darfst du zu einem beliebigen Zeitpunkt dieses Einsatzes von einer beliebigen Zahl auf 0 herunterzählen. Erreichst du null, fällt das, was du aus deiner Gun abgefeuert hast, auf eine beliebige nahe Person oder einen nahen Gegenstand und verursacht 1 Schaden."],
   ["plus", "**Für jede weitere {3}** fällt ein zusätzlicher Gegenstand bei der nächstniedrigeren Zahl deines Countdowns und verursacht jeweils 1 zusätzlichen Schaden bei denselben oder anderen Zielen deiner Wahl."],
   ["nein", "**Bei Fehlschlag** fällt das Abgefeuerte zwar herunter, aber du entscheidest weder wann noch auf wen."]
  ]}
]};

TA_PWT.S18 = {t:"Einen Stern verschlucken", s:268, b:[
 {t:"faehig", h:"Einen Stern verschlucken", x:"Ersetze dein Herz durch etwas viel, viel Dichteres. Lege eine Hand, einen Fuß oder ein entsprechendes Körperglied auf eine beliebige Oberfläche und würfle **Beharrlichkeit**.",
  erg:[
   ["ok", "**Bei Erfolg** bist du, solange du dieses Körperglied auf dieser Oberfläche lässt, zu massiv, um von äußeren Kräften in irgendeiner Weise bewegt zu werden. Wenn du dich selbst bewegst, tust du das mit außergewöhnlicher Wucht: Schon einfacher Kontakt mit anderen kann ihnen {3} Schaden zufügen."],
   ["plus", "**Für jede weitere {3}** wähle eines:\n– Du kannst den nächsten 1 Schaden, der dir zugefügt wird, ignorieren, solange du in diesem Zustand bleibst.\n– Du kannst das Körperglied für einen Moment heben (etwa für einen einzelnen Schritt).\n– Du kannst die Wirkung des Erfolgs auf eine weitere Person ausdehnen, solange sie den Kontakt zu dir hält (du verletzt Geschöpfe, die dich dafür berühren, nicht)."],
   ["nein", "**Bei Fehlschlag** wird dein ganzer Körper unkontrollierbar dicht und schwer: Du stürzt zu Boden und steckst zehn Minuten lang fest. Befindest du dich bei Beginn dieses Effekts irgendwie über Bodenhöhe, stürzt du durch alles hindurch, worauf du dich befindest, bis du die Bodenhöhe erreichst, und erleidest Schaden in Höhe der Anzahl der Stockwerke, die du gefallen bist, mindestens 1."]
  ],
  f:"Meine wahre Stärke ist …", a:[["Meine enorme Kraft.", "M11"], ["Die Menschen, die ich um mich habe.", "P10"]]}
]};

TA_PWT.S19 = {t:"Mitfühlender Schmerz", s:269, b:[
 {t:"faehig", h:"Mitfühlender Schmerz", x:"Wann immer dich etwas verletzt oder dir Schaden zufügt (auch wenn dieser Schaden umgeleitet, abgewehrt oder dein Tod ist), lächle und würfle **Aufmerksamkeit**.",
  erg:[
   ["ok", "**Bei Erfolg** erhältst du die Fertigkeit, Fähigkeit, Kraft oder den Umstand, womit dir Schaden zugefügt wurde. Schreibe sie auf – du kannst sie einmal, jederzeit, bei etwas anderem einsetzen. Das funktioniert auch, wenn du auf gewöhnliche Weise verletzt wirst. *(Wirst du erstochen, kannst du nun eine Stichwunde erzeugen; wirst du verbrannt, darfst du dieselben Verbrennungen zufügen usw.)*"],
   ["plus", "**Für jede weitere {3}** kannst du diese Fertigkeit, Fähigkeit, Kraft oder diesen Umstand in diesem Einsatz einmal zusätzlich verwenden."],
   ["nein", "**Bei Fehlschlag** wird die Verletzung oder der Schaden, den du genommen hast, sofort jedem Lebewesen im Umkreis von dreißig Metern zugefügt."]
  ],
  f:"Wir führen eine Show auf? Setzt mich …", a:[["In den Regiestuhl.", "D3"], ["Ins Rampenlicht.", "A6"]]}
]};
