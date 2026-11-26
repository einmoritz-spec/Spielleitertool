/* Playwall › I (S. 227–230) */
var TA_PWT = window.TA_PWT || (window.TA_PWT = {});

TA_PWT.I1 = {t:"Das war ich", s:227, b:[
 {t:"faehig", h:"Das war ich", x:"Berühre ein Werk, eine Trophäe oder ein anderes Zeichen der Leistung einer anderen Person und halte dabei Blickkontakt mit ihr. Würfle **Doppelzüngigkeit**.",
  erg:[
   ["ok", "**Bei Erfolg** hast du es in Wahrheit selbst vollbracht, und alle wissen es. Du hast das Kunstwerk geschaffen, den Berg bestiegen oder den Friedensvertrag ausgehandelt, erhältst aber nicht die Erinnerung daran. Das Ziel vergisst seine Leistung, nicht aber seine Pläne, sie zu erreichen."],
   ["plus", "**Bei sechs oder mehr {3}en** erhältst du außerdem alle Erinnerungen des Ziels, die für das Erreichen dieser Leistung von Bedeutung sind."],
   ["nein", "**Bei Fehlschlag** hat niemand die Leistung vollbracht. Sie gilt allgemein als Wunder oder Tat Gottes – das Gemälde hat sich selbst gemalt, die Fahne hat schon immer auf dem Berg gestanden, oder der Friedensvertrag fiel vom Himmel direkt in die Hände der Kriegsparteien. Der Glaube der Menschheit, dass niemand dies gemacht hat, ist sehr widerstandsfähig."]
  ]}
]};

TA_PWT.I2 = {t:"Ich hatte es doch eben noch", s:227, b:[
 {t:"faehig", h:"Ich hatte es doch eben noch", x:"Du bist nicht das Einzige, was schwer zu fassen ist. Wenn jemand im Begriff ist, mit einem Gegenstand zu interagieren (Fernbedienung, Tür, Flugzeug usw.), klopfe dir auf die eigene Tasche und würfle **Subtilität**.",
  erg:[
   ["ok", "**Bei Erfolg** ist der Gegenstand nicht mehr da. Er könnte in einem Nebenraum sein, hinter einem Müllhaufen versteckt, in der Tasche eines anderen oder an einem anderen plausiblen Ort. Der GM entscheidet."],
   ["plus", "**Für jede weitere {3}** darfst du eines der Folgenden wählen:\n– Ein weiterer Gegenstand in der Nähe deiner Wahl wird bewegt.\n– Du bestimmst, wo sich die auf diese Weise bewegten Gegenstände nun befinden.\n– Einer der bewegten Gegenstände verschwindet ganz."],
   ["nein", "**Bei Fehlschlag** ist der Gegenstand nicht mehr da, weil er dir im Hals stecken geblieben ist. Du bist handlungsunfähig, bis er entfernt wird. War er groß genug, erleidest du womöglich Schaden."]
  ],
  f:"Ich habe mehr Angst zu verlieren …", a:[["Meine Talente.", "I4"], ["Meine Besitztümer.", "L8"]]}
]};

TA_PWT.I3 = {t:"Ich schau mal im Lager nach", s:228, b:[
 {t:"faehig", h:"Ich schau mal im Lager nach", x:"Greife durch das Herz eines anderen und würfle **Empathie**.",
  erg:[
   ["ok", "**Bei Erfolg** entziehst du dem Ziel seine Essenz und erschaffst eine neue Anomalie, deren Fokus und Domäne eng mit den Zielen und der Persönlichkeit des Ziels verbunden sind. Sie wird niemals absichtlich etwas tun, das dem Ziel schadet. Das Ziel bleibt bei diesem Vorgang unversehrt, begreift aber sofort, dass die Anomalie eine Verbindung zu ihm hat."],
   ["plus", "**Bei Triszendenz** verbindet sich die neu entstandene Anomalie sofort mit dem Ziel und erschafft einen neuen Resonanten."],
   ["nein", "**Bei Fehlschlag** entziehst du dem Ziel seine Essenz und erschaffst einen leblosen Gegenstand, der einst seine Hoffnungen und Ziele enthielt. Er kann nicht zurückgegeben werden. Das Ziel weiß, was es verloren hat."]
  ]}
]};

TA_PWT.I4 = {t:"Hätte ich nur …", s:228, b:[
 {t:"faehig", h:"Hätte ich nur …", x:"Jedem fehlt etwas, und du kannst bestimmen, was. Greife in ein Ziel hinein und würfle **Subtilität**.",
  erg:[
   ["ok", "**Bei Erfolg** wähle eines zum Entfernen:\n– **Herz:** Fehlt es, verliert das Ziel seine Fähigkeit, sich um andere zu sorgen oder für sie zu empfinden. Nichts spielt eine Rolle, und es ist schwer, es zu beleidigen oder zu verletzen. Groll wird vergeben, aber auch Freundschaften verlieren an Bedeutung. Es hält weiterhin daran fest, Regeln zu befolgen und zugewiesene Aufgaben effizient und gut zu erledigen.\n– **Gehirn:** Fehlt es, verliert das Ziel seine Fähigkeit, an die Zukunft zu denken, zu planen oder zu schlussfolgern. Es vergisst Dinge sofort und lebt nur im Augenblick. Was immer es fühlt oder erlebt, ist sehr wichtig, und es folgt Impulsen, ohne die Folgen zu bedenken.\n– **Mut:** Fehlt er, wird das Ziel von Sorge verzehrt. Seine Gefühle und Gedanken werden von einer so heftigen Angst überwältigt, dass jede Entscheidung schwerfällt.\nDu erhältst diese Dinge als kristalline Gegenstände, die in eine Hand passen. Die Formen können je nach Ziel variieren. Kommt das Ziel mit dem entfernten Gegenstand in Berührung, kehrt er zu ihm zurück, und es wird wieder ganz. Andere Menschen den entfernten Gegenstand eines Ziels berühren zu lassen, kann unvorhersehbare Folgen haben."],
   ["plus", "**Bei sechs oder mehr {3}en** erweitert sich deine Liste der Optionen für „Bei Erfolg“ um die folgenden, die nur bei anomalen Zielen verfügbar sind:\n– **Heim:** Du nimmst die Domäne eines anomalen Wesens an dich, seine Machtstätte. Solange es sie nicht besitzt, erhält es nicht die üblichen Vorteile einer Domäne, und die Menge an Chaos, die von einer Quelle darin erzeugt wird, sinkt um 1 (aber auf diese Weise nie unter 1).\n– **Geist:** Der kristalline Gegenstand, den du erhältst, liefert einen optischen Hinweis oder ein Zeichen für den Fokus der Anomalie und zieht dich sanft zur Anomalie hin, wie ein Kompass."],
   ["nein", "**Bei Fehlschlag** würfle einen W4. Je nach Wurf verlierst du etwas Eigenes. Es löst sich in Luft auf und kehrt am Ende des Einsatzes zu dir zurück.\n– **1:** Herz\n– **2:** Gehirn\n– **3:** Erhalte Burnout bei allen Anomalie-Fähigkeiten\n– **4:** Mut"]
  ]},
 {t:"notiz", pos:"rechts", x:"5: und dein kleiner Hund auch"}
]};

TA_PWT.I5 = {t:"Spontankauf", s:229, b:[
 {t:"faehig", h:"Spontankauf", x:"Du erhältst Zugriff auf die Regeln zur Erschaffung Kleiner Anomalien im Werkzeug der Geschäftsleitung. (Bitte den GM, dir die Seite zu zeigen.) Lege eine beliebige Münze oder einen Schein auf den Boden und würfle **Präsenz**.",
  erg:[
   ["ok", "**Bei Erfolg** verwandelt sich das Geld in eine Kleine Anomalie beliebiger Art. Sie befolgt deine Anweisungen klug und handelt nicht gegen dich. Stirbst du oder nutzt du diese Fähigkeit, während eine frühere Anomalie noch aktiv ist, verlierst du die Kontrolle über die Kleine Anomalie. Was sie mit ihrer Freiheit anfängt, hängt davon ab, wie sie behandelt wurde, doch in der Regel lässt sie dich zurück, um eine andere Anomalie zu finden, an die sie sich binden kann.\nDiese Anomalien müssen eine gewisse äußerliche Ähnlichkeit mit dir oder deiner persönlichen Anomalie haben. Störende Kleine Anomalien betreffen nur Würfe, die du machst, und fügen deinen Würfen eine {3} statt eines Chaos hinzu. (Diese {3}en werden hinzugefügt, nachdem die Triszendenz bestimmt wurde.)"],
   ["plus", "**Bei sechs oder mehr {3}en** darfst du der Kleinen Anomalie eine weitere Kategorie hinzufügen und so ihre Stabilität, ihren Schaden und ihre Fertigkeiten in einer Gestalt vereinen. (Du darfst nicht zweimal dieselbe Kategorie wählen.)"],
   ["plus", "**Bei Triszendenz** darfst du stattdessen den Chaos-Effekt Verdreifachen nutzen und so drei Kleine Anomalien erschaffen. Für sie gelten dieselben Regeln."],
   ["nein", "**Bei Fehlschlag** reißt eine andere Anomalie die Kontrolle über deinen Vorgang an sich. Drei feindselige Kleine Anomalien werden sofort erschaffen."]
  ],
  f:"Was nutze ich am meisten, um meine Ziele zu erreichen?", a:[["Leidenschaft.", "L4"], ["Planung.", "M12"]]}
]};

TA_PWT.I6 = {t:"Im Schrank, unter dem Bett", s:229, b:[
 {t:"faehig", h:"Im Schrank, unter dem Bett", x:"Monster sind überall und verstecken sich in aller Öffentlichkeit. Locke sie ans Licht: Lass die Füße über die Bettkante baumeln, greife mit der Hand in die Tiefe eines Schranks oder puste eine Kerze aus und flüstere dann den Namen eines Ziels. Würfle **Doppelzüngigkeit**.",
  erg:[
   ["ok", "**Bei Erfolg** wird jeder unbelebte Gegenstand monströs, sobald dieses Ziel ihn direkt ansieht *(ein Stuhl öffnet sein zahnbewehrtes Maul, ein Teppich offenbart seine unmögliche Tiefe, ein Prominenter greift aus einem Werbeplakat, um es mit riesigen Händen zu würgen usw.)*. Auf diese Weise belebte Gegenstände sind durch und durch böse und trachten danach, dem Ziel maximale Angst einzujagen: Sie verschlingen, schüchtern ein, zerstören und bedrohen es wahllos auf jede andere Weise. Sieht das Ziel einen Gegenstand nicht mehr direkt an, nimmt er wieder seine ursprüngliche Form an, leblos und harmlos. Dieser Effekt hält bis zum nächsten Sonnenaufgang an.\nNimmt das Ziel seine Umgebung nicht mit dem Sehsinn wahr oder hält es die Augen geschlossen, werden Gegenstände nicht belebt."],
   ["plus", "**Bei jeder dritten {3}** wähle eines:\n– Dieser Effekt gilt auch für nicht anomale Wesen, die das Ziel ansieht.\n– Auf diese Weise belebte Gegenstände können dem Ziel einen einzigen einfachen Gedanken mitteilen („lauf weg“, „geh nicht in den Keller“, „gib dein Passwort weiter“ usw.).\n– Auf diese Weise belebte Gegenstände nehmen wieder ihre ursprüngliche Form an, wenn jemand anderes als das Ziel sie ansieht."],
   ["plus", "**Bei Triszendenz** kannst du es stattdessen mit einem einzigen beständigen belebten Gegenstand heimsuchen, der es erst nicht mehr verfolgt, wenn ihm 5 Schaden zugefügt wurden oder du ihn entlassen hast. Dieser Gegenstand bleibt auch belebt, wenn er nicht mit dem Sehsinn wahrgenommen wird."],
   ["nein", "**Bei Fehlschlag** wird jeder Gegenstand um dich herum monströs und trachtet einzig danach, dir so viel Schrecken wie möglich einzujagen."]
  ]}
]};

TA_PWT.I7 = {t:"Unentrinnbare Umlaufbahn", s:229, b:[
 {t:"sp", x:[
  ["Deine Schwerkraft zwingt das Schicksal in ihren Bann und zieht deine Wünsche zu dir. Am Ende eines Einsatzes, während du Zeit verwendest, gib dem GM eine Liste mit 7 Dingen, auf einen Zettel geschrieben. Während des nächsten Einsatzes müssen {3} dieser Dinge innerhalb von einem Meter in deine Nähe kommen und dir direkt gezeigt werden.",
   "Sobald eines eintritt, streiche es durch. Erscheinen mindestens drei Dinge nicht, beginnt der nächste Einsatz mit 10 Chaos weniger. (Das kann das Start-Chaos ins Negative schicken.)",
   "Nach dem ersten Einsatz kannst du bei jedem weiteren Einsatz wählen, die Liste unverändert zu lassen (kürzer, wenn Einträge durchgestrichen wurden) oder genau {3} Einträge hinzuzufügen."],
  ["Stehen weniger als {3} Einträge auf der Liste, muss der GM nur erfüllen, was auf ihr steht. Du kannst keine Einträge entfernen, und kein Eintrag darf je ein zweites Mal auf die Liste gesetzt werden. Hat die Liste null Einträge, muss sie bei der nächsten Verwendung vollständig auf 7 aufgefüllt werden.",
   "Wünschst du dir etwas, das innerhalb der Realität wirklich unmöglich ist, helfen dir die Himmel trotzdem: Der GM kann erklären, dass in einem günstigen Moment ein Meteor in deiner Nähe einschlägt und dir auf irgendeine Weise hilft, etwas von der Liste zu streichen."]
 ]}
]};

TA_PWT.I8 = {t:"Influencer", s:230, b:[
 {t:"sp", x:[
  ["Setzt du Darf es noch etwas mehr sein? ein, ist das Begehren des Ziels nicht mehr auf das Letzte beschränkt, was es genossen hat: Du kannst ein völlig neues Begehren einpflanzen, auch etwas, das nicht vorhanden, unerreichbar oder nicht existent ist."],
  ["Wenn du die Wirkung „Für jede weitere {3}“ von Darf es noch etwas mehr sein? aktivierst, kannst du zusätzliche Ziele in Höhe des Zehnfachen der gewürfelten {3}en hinzufügen. Diese Ziele können überall sein, wo du über direkte oder indirekte Kommunikationswege Zugang hast. Zum Beispiel, wenn sie jemandem folgen, dem du in sozialen Medien folgst."]
 ]}
]};

TA_PWT.I9 = {t:"Eiserner Magen", s:230, b:[
 {t:"sp", x:[
  ["Persönlicher Freiraum erfordert nun weder Atem noch einen Wurf. Du kannst die Wirkung „Bei Erfolg“ jederzeit aktivieren oder beenden."],
  ["Du darfst auch für Persönlicher Freiraum würfeln; tust du das, wirkt es auf ein Ziel deiner Wahl, mit den ursprünglichen Einschränkungen (der Effekt endet, wenn es ausatmet).",
   "Außerdem erfordert das Entfernen von Zielen aus der Wirkung von Den Kardanrahmen kreiseln lassen keine {3}en mehr."]
 ]}
]};

TA_PWT.I10 = {t:"Hat Taschen", s:230, b:[
 {t:"sp", x:[
  ["Du kannst Gegenstände in dich aufnehmen, sie manipulieren, während sie ganz oder teilweise in dir sind, und den Rest deiner Physiologie anpassen, um sie unterzubringen. Zum Beispiel könntest du eine Kettensäge in deinem Oberkörper verstecken oder ihre Sägeblätter dort herausragen lassen, wo normalerweise deine Hände sind."],
  ["Dieser Vorgang verändert nicht die Gesamtmasse von dir oder den Gegenständen, aber du kannst diese Masse beliebig verteilen. Um zum Beispiel ein Dutzend Bowlingkugeln in dir zu verstecken, kannst du dich größer formen, statt so zu wirken, als hättest du große Kugeln im Körper."]
 ]}
]};
