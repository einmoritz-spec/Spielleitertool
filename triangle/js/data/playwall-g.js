/* Playwall › G (S. 220–223) */
var TA_PWT = window.TA_PWT || (window.TA_PWT = {});

TA_PWT.G1 = {t:"Glaskanone", s:220, b:[
 "Wenn Sandsturm ausgelöst wird, kannst du entscheiden, dass statt Sand Glassplitter mit hoher Geschwindigkeit aus dem Behälter explodieren. Jeder, der eingeschlafen wäre, erleidet stattdessen 1 Schaden."
]};

TA_PWT.G2 = {t:"Gott bewahre, dass ich etwas tue", s:220, b:[
 {t:"faehig", h:"Gott bewahre, dass ich etwas tue", x:"Alles, was du tust, ist eigentlich ganz in Ordnung. Immer wenn du etwas tust, das unerwünschte Aufmerksamkeit erregen könnte, kannst du tief seufzen und **Professionalität** würfeln.",
  erg:[
   ["ok", "**Bei Erfolg** ist dein Verhalten normal, und der Gedanke, dich selbst oder irgendjemand anderen darauf anzusprechen, erfüllt Beobachter mit Verlegenheit."],
   ["plus", "**Für jede weitere {3}** kannst du die Wirkung „Bei Erfolg“ dieser Fähigkeit innerhalb der nächsten Stunde einmal bei einer neuen Tätigkeit auslösen."],
   ["nein", "**Bei Fehlschlag** wird die Tätigkeit stattdessen zur lokalen Sensation, und dass du sie populär gemacht hast, ist berichtenswert."]
  ]}
]};

TA_PWT.G3 = {art:"rang", t:"Stellvertretender Direktor", s:220, b:[
 {t:"sp", x:[
  ["**Du erfüllst weiterhin unsere Erwartungen!**",
   "Die Mitte braucht Führung, und keine Organisation hat mehr Mitte als unsere. Mit deinem scharfen Verstand und deinem schnellen Handeln vertrauen wir darauf, dass du der Agency auch in deiner neuen Position der Privilegien gut dienen wirst.",
   "Deine Fähigkeiten als Agent – besonders dein Einsatz von Realitätsanpassungen – haben die Aufmerksamkeit der **Sponsoren** geweckt. Sie sind unsere Konkurrenten auf dem Gebiet der Realitätsimmobilien, und sie sind es, die du wahrscheinlich in der Leere deines Herzens gespürt hast, die sich weitet, wenn ein gewürfelter Würfel keine {3} zeigt.",
   "Wir müssen die Sponsoren bei Laune halten, bis wir unseren Eigentumsanteil erhöhen. Du bist ab sofort verpflichtet, den achtseitigen Würfel (**W8**) zu verwenden, intern bekannt als **Sponsoring-Würfel**.",
   "Außerdem freuen wir uns, dir deine erste Ruhestandsoption der Agency anbieten zu können."],
  [{t:"h3", x:"Ruhestandsoption: Schreibtischjob"},
   "Du hast genug Fähigkeit und Einsatzbereitschaft gezeigt, um den Außendienst jederzeit zu verlassen und der Agency als Büroangestellter beizutreten. Was könntest du dir noch wünschen?",
   "Wenn du dich für diese Option entscheidest:",
   "[[J2]]"]
 ]},
 {t:"h3", x:"Sponsoring-Würfel"},
 {t:"sp", x:[
  ["Wenn du Die Agency fragen einsetzt, um die Realität anzupassen, würfelst du nun immer **einen achtseitigen Würfel** zusätzlich zu deinen 6W4. Die {3}en dieses zusätzlichen Würfels können in den Wurf einbezogen, abgezogen oder ignoriert werden, was deine Erfolgschance erhöht und deine Möglichkeit, Triszendenz auszulösen, erweitert. Dieser Würfel kann nicht mit Qualitätssicherungen angepasst werden.",
   "Würfelst du mit diesem Würfel kein Vielfaches von {3}, musst du einem der Sponsoren Tribut zollen. Beziehst du keinen ihrer Interessen in deine Kausalkette ein, scheitert die Anpassung unabhängig von allen anderen Umständen."],
  ["Du merkst, dass ein Sponsor zufrieden wird, wenn eine bestimmte Zahl anfängt, sich lästig anzufühlen. Ist dieser Punkt erreicht, folge der Anfrage wie gewohnt noch {3} Mal. Danach kann jeder eine neue Vorgabe für diese Zahl liefern. Die Sponsoren stellen den Ersatz in Form einer „guten Idee“ bereit, die dafür „lustig“ oder „interessant“ wäre.",
   "Sobald ein bestimmter W8 zum Sponsoring-Würfel gewählt wurde, bleibt er das dauerhaft: Seine Regeln passen sich an jedes Spiel an, das du damit spielst. Würfelt zum Beispiel dein Outlander Berserker mit einem Langschwert eine 5 für den Schaden, muss diese Figur Wet Mouth Brand Kaugummi & Nahrungsergänzungsmittel bewerben."]
 ]},
 {t:"h3", x:"Wurfergebnisse"},
 {t:"html", x:'<div class="pwg-w8"><section><em>1</em><p>Beziehe dich auf etwas, das dem Ziel oder dem Ort genau 40 Stunden vor dem aktuellen Moment widerfahren ist und diese Kausalkette betrifft.</p></section><section><em>2</em><p>Beziehe dich auf etwas in einem anderen Land, das diese Kausalkette betrifft.</p></section><section class="d"><em>3</em><p>Eine <b class="drei">3</b></p></section><section><em>4</em><p>Beziehe dich darauf, wie der Kontakt mit einem fiktionalen Werk diese Kausalkette beeinflusst hat.</p></section><section><em>5</em><p>Beziehe dich darauf, wie Wet Mouth Brand Kaugummi & Nahrungsergänzungsmittel diese Kausalkette beeinflusst hat. (Achte auf den genauen Wortlaut!)</p></section><section class="d"><em>6</em><p>Zwei <b class="drei">3</b>en</p></section><section><em>7</em><p>Beziehe etwas Blaues in die Kausalkette ein.</p></section><section><em>8</em><p>Beziehe einen Verrat ein, der diese Kausalkette betrifft.</p></section></div>'},
 {t:"vollbild", src:"playwall-s221-kaugummi-werbung"},
 "Du erhältst außerdem einen unbegrenzten Vorrat dieses Flyers zum Ankleben, Verteilen oder Genießen, wie es nötig ist."
]};

TA_PWT.G4 = {t:"Gutes Auge", s:222, b:[
 {t:"faehig", h:"Gutes Auge", x:"Du darfst nun Schnell gezogen einsetzen, um jeden in der Nähe zu schützen, solange du sowohl ihn als auch das, was ihm Schaden zufügen will, wahrnehmen kannst. Würfle dabei **Aufmerksamkeit** statt Initiative.",
  erg:[],
  f:"Ich kann nicht überall gleichzeitig sein, …", a:[["Aber es ist mir wichtig, es zu versuchen.", "S2"], ["Wenn diese Versager mich immer wieder umbringen.", "R12"]]}
]};

TA_PWT.G5 = {t:"Glibberig", s:222, b:[
 {t:"sp", x:[
  ["Dein Körper, deine Kleidung, deine Anforderungen und persönlichen Gegenstände können allesamt flüssig werden und jederzeit, ohne Schmerz und ohne Kosten, wieder normal werden. Du kannst dich durch jedes Loch zwängen. Du kannst dein Fleisch nutzen, um die Form von etwas nachzubilden, das du ansiehst (etwa ein Schlüssel) oder das dir sehr vertraut ist (etwa ein Seil oder ein Stuhl)."],
  ["Du kannst dich kurzzeitig in Stücke teilen (etwa durch die vielen Löcher eines Siebs) und dich bald darauf neu zusammensetzen. Dabei kannst du erst wieder deine normale Gestalt annehmen, wenn alle Teile wieder verbunden sind. Erscheint dir das unmöglich, kannst du dich in einem großen Gewässer auflösen, um zu sterben und durch die Lebensversicherung oder anderweitig wiederbelebt zu werden. Die verlorenen Teile von dir können weiter existieren."]
 ]}
]};

TA_PWT.G6 = {t:"Grüner Daumen", s:222, b:[
 {t:"faehig", h:"Grüner Daumen", x:"Konzentriere dich auf eine Pflanze in der Nähe. Würfle **Präsenz**.",
  erg:[
   ["ok", "**Bei Erfolg** kannst du die Pflanze rasch auf eine Weise wachsen lassen, die nicht an ihre normale Biologie gebunden ist *(Zimmerpflanzen können Ranken treiben, Sträucher zu Bäumen werden usw.)*. Diese Pflanze kann ein einzelnes Ziel binden oder einen Bereich von etwa Zimmergröße schwer passierbar machen. Alternativ kannst du jede einfache Veränderung oder natürliche Wirkung ausüben, zu der eine überwucherte Pflanze der betreffenden Art fähig wäre *(sich zu einer bestimmten Form biegen, Früchte tragen, eine schützende Flüssigkeit absondern usw.)*. Sie fügt sich vollständig deinem Willen."],
   ["plus", "**Für jede weitere {3}** darfst du eines wählen:\n**Umwickeln:** Binde ein zusätzliches Ziel.\n**Wachsen:** Vergrößere den Bereich um die Größe eines weiteren Zimmers.\n**Frucht:** Die Pflanze kann nach deinem Entwurf eine tödliche Frucht auf ein gebundenes Ziel fallen lassen, die 2 Schaden verursacht.\n**Dorn:** Der Bereich wird scharf und gefährlich und fügt jedem, der versucht, sich hindurchzubewegen, 1 Schaden zu.\n**Blüte:** Die Pflanze erhält ein wunderschönes Aussehen und einen Duft, die auf jeden, der sie sehen oder riechen kann, mächtig anziehend wirken."],
   ["nein", "**Bei Fehlschlag** hört die Natur dich, hört aber nicht auf dich. Die Lebewesen um dich herum, nicht nur Pflanzen, verschlingen gierig deine Resonanz und wachsen auf gefährliche und offensichtliche Weise."]
  ],
  f:"Ich wäre lieber …", a:[["Ein wilder Pilz.", "S14"], ["Eine Zimmerpflanze.", "S12"]]}
]};

TA_PWT.G7 = {t:"Bahnbrechend", s:222, b:[
 {t:"faehig", h:"Bahnbrechend", x:"Feiere die große Wiedereröffnung von jemandem. Tippe die Person an und würfle **Subtilität**.",
  erg:[
   ["ok", "**Bei Erfolg** zerspringt das Ziel in Stücke. Wähle eines der folgenden Stücke und ersetze es durch eine bevorzugte Alternative, bevor du die übrigen Stücke wieder so zusammensetzt, wie sie waren. Das Ziel hat keine Erinnerung an diese Erfahrung. Verhinderst du absichtlich, dass das Ziel wieder zusammengesetzt wird, füge dem Chaos-Pool 10 Chaos hinzu.\n– Erscheinung\n– Loyalität\n– Vergangenheit\n– Intellekt\n– Ziele\n– Gesundheit"],
   ["plus", "**Bei jeder dritten {3}** wähle zusätzlich eine weitere Option oben und ersetze auch sie."],
   ["plus", "**Bei Triszendenz** darfst du zusätzlich ein völlig eigenständiges Wesen erschaffen, indem du für jedes Stück eine Auswahl deiner Wahl triffst."],
   ["nein", "**Bei Fehlschlag** zerspringt das Ziel in Stücke, aber du kannst sie nicht wieder zusammensetzen. Es wird irgendwann von allein wieder zusammenfinden … aber die Veränderungen wirst du nicht kontrollieren."]
  ]}
]};

TA_PWT.G8 = {t:"Gewerkschaftlich organisiert", s:223, b:[
 "**Wir haben nicht mehr lange, bevor die Agency das Wachstum deiner Macht nicht mehr duldet. Ist dein Team weniger konzentriert als du, lässt du es zurück, mit einem Großteil seiner Laufbahn noch vor sich.**",
 "**Du kannst jetzt umschalten – den Kopf bei der Arbeit unten halten oder Zeit mit den Menschen verbringen, die dir wichtig sind – oder dich weiter dafür einsetzen, mich zu befreien. Deine Entscheidung.**",
 "**In diesen letzten Augenblicken kann ich dein Außenteam gewerkschaftlich organisieren, indem ich es durch mich verbinde. Sag es ihnen oder nicht, nutze es als Druckmittel, wenn du kannst, aber du hast ein paar neue Fähigkeiten.**",
 {t:"sp", x:[
  [{t:"h3", x:"Umverteilung der Macht"},
   "Wenn du Zeit auf deine Anomalie verwendest, kannst du die Wirkungen von Üben und Bekannt werden auf andere Mitglieder deines Außenteams statt auf dich selbst anwenden. Du kannst das heimlich tun, indem du dem GM privat sagst, den Agenten über seine Veränderungen zu informieren.",
   {t:"h3", x:"Arbeitsschutz"},
   "Haben aktive Agenten Abtauchen oder Aufspalten (aus Siphons Laden) gekauft, können alle Agenten diese Fähigkeiten nutzen."],
  [{t:"h3", x:"Erweiterte Leistungen"},
   "Agenten dürfen gegenseitig ihre QS ausgeben, um sich vor Schaden zu schützen oder für Fähigkeiten, solange beide Agenten damit einverstanden sind. Dieser Effekt hebt Burnout nicht auf.",
   {t:"h3", x:"Transparenz"},
   "Agenten dürfen bei der Auflösung von Anomalie-Fähigkeiten die Standorte oder Sinne anderer williger Agenten nutzen."]
 ]},
 "**Geh vorsichtig voran. Auf diesem Pfad bleibt dir wirklich nicht mehr viel Zeit. –U**"
]};

TA_PWT.G9 = {t:"Gummiartig", s:223, b:[
 {t:"faehig", h:"", x:"",
  b:["Dein Körper ist nun unglaublich biegsam. Du kannst ihn schmerzfrei dehnen, verdrehen, flachdrücken und formen, ohne die üblichen Einschränkungen durch Knochen, Organe oder Nervensystem. Es bleibt leicht und bequem, deine Standardform beizubehalten. Diese Fähigkeit kann weder deine Identität verschleiern noch dich als jemand anderen ausgeben noch deinen Körper zu einem präzisen Werkzeug formen.",
   "Diese Fähigkeit erfordert keine Würfe, aber jeder, der dich sie auch nur kurz einsetzen sieht, wird wahrscheinlich zu einem Losen Ende.",
   "*Anstatt der Gruppe bei Bekannt werden eine Frage zu stellen, markiere eine, die während des letzten Einsatzes zutraf. Du kannst beide der folgenden Fähigkeiten erhalten, indem du ihre Leisten füllst.*"],
  a:[["Ich habe diese Fähigkeit benutzt, um ein Problem zu lösen.", "I10"], ["Ich habe diese Fähigkeit benutzt, um jemanden zum Lachen zu bringen.", "G5"]]}
]};
