/* Playwall › T (S. 269–273) */
var TA_PWT = window.TA_PWT || (window.TA_PWT = {});

TA_PWT.T1 = {t:"Vielen herzlichen Dank", s:269, b:[
 {t:"faehig", h:"Vielen herzlichen Dank", x:"Zeige, wie dankbar du bist, indem du etwas schnappst, das jemand anderem gehört, und dem Besitzer sagst: „Vielen herzlichen Dank.“ Würfle **Empathie**.",
  erg:[
   ["ok", "**Bei Erfolg** glauben sie, sie hätten es dir gegeben. Was auch immer du in den Händen hieltest, gilt für alle in der Nähe als rechtmäßig dein Eigentum. Das Ziel ist vielleicht nicht ganz glücklich darüber, aber es glaubt, die Entscheidung sei seine eigene gewesen."],
   ["plus", "**Für jede weitere {3}** kannst du einen weiteren Gegenstand schnappen und in diesen Effekt einbeziehen."],
   ["plus", "**Bei Triszendenz** hält das Ziel – oder ein anderes Ziel in der Nähe – alles, was es besitzt, ebenfalls für dein Eigentum. Für immer."],
   ["nein", "**Bei Fehlschlag** hast du das Falsche gegriffen – und es ist peinlich. Es liegt ihnen sehr viel an dem, was du zu nehmen versucht hast, und sie werden alles tun, um dich aufzuhalten. Deine Drain-Fähigkeiten wirken nicht mehr bei jedem, der dich auf diese Weise hat blamiert gesehen."]
  ]}
]};

TA_PWT.T2 = {t:"Wie interessant", s:269, b:[
 {t:"faehig", h:"Wie interessant", x:"Spricht jemand in deiner Nähe, sage „Das ist ja so interessant“ und würfle **Präsenz**.",
  erg:[
   ["ok", "**Bei Erfolg** fühlt sich das Ziel überwältigend geschmeichelt. Es beginnt, jedes Detail, jeden Vorteil, Nachteil und jede Meinung zum aktuellen Thema in den höchsten Tönen auszubreiten, selbst wenn es zuvor zurückhaltend, nervös oder nicht befugt war, über das Thema zu sprechen."],
   ["plus", "**Für jede weitere {3}** darfst du es dazu anstoßen, über einen der folgenden Aspekte dessen zu sprechen, worüber es redet:\n– Wie es zum ersten Mal davon erfahren hat.\n– Seine tiefste emotionale Verbindung dazu.\n– Was es täte, wenn es nicht mehr damit umgehen könnte.\n– Oder ein ähnliches Detail."],
   ["plus", "**Bei sechs oder mehr {3}en** kannst du das Thema wechseln. Erzähle ihm etwas, das du interessant findest, und es wird sich glücklich ausführlich darüber unterhalten, statt über das, worüber es gerade gesprochen hat."],
   ["nein", "**Bei Fehlschlag** beginnst du, in einem endlosen Schwall von dem zu schwärmen, was dir im Kopf herumgeht – warum du diese Kraft an ihm einsetzt, was du an diesem Ort tust, worüber du dir Sorgen machst oder worauf du dich freust –, alles sprudelt aus dir heraus."]
  ],
  f:"Wenn ich lernen will, wie man ein neues Gerät benutzt, …", a:[["Bitte ich jemanden, es mir beizubringen.", "O1"], ["Lese ich jede Seite der Bedienungsanleitung in jeder Sprache.", "P12"]]}
]};

TA_PWT.T3 = {art:"rang", t:"Senior-VP", s:270, b:[
 "**Wir gehen davon aus, dass es dir gut geht, Agent!**",
 "Du bist inzwischen recht geschickt darin, die Macht der Agency zu kanalisieren, und darfst nun eine weitere Wahrheit über Qualitätssicherungen erfahren: Sie sind noch nützlicher, als du ahnst! Geübte Agenten wie du können ihre persönliche Kausalkette verändern und historische Zutaten mischen und kombinieren, um für jeden Moment die perfekte Hintergrundgeschichte zu schaffen.",
 "Wenn du das nächste Mal eine bestimmte Ausbildung oder Fähigkeit benötigst, kannst du dir sagen: „Fertigkeit: Check!“",
 {t:"h3", x:"Fertigkeit: Check!"},
 {t:"sp", x:[
  ["Nimm einen zwanzigseitigen Würfel (W20) zur Hand oder bitte deinen GM, dir einen zu geben. Stehst du vor einem Hindernis, für das du eine Fertigkeit oder Ausbildung bräuchtest, die du nicht besitzt, kannst du 1 QS aus einer beliebigen Qualität ausgeben, um stattdessen diesen zwanzigseitigen Würfel statt 6W4 zu verwenden.",
   "Wähle dann eine Qualität, die zum gewünschten Fertigkeitsbereich passt, und addiere die aktuelle Gesamtzahl der QS in dieser Qualität zur Zahl deines Wurfs. Dieser Würfel kann nicht mit Qualitätssicherungen angepasst werden.",
   "**Liegt das Endergebnis über 10**, hast du Erfolg! Du kannst deine persönliche, historische Kausalkette verändern, sodass dein jetziges Ich das Äquivalent eines Experten auf olympischem oder Doktoranden-Niveau in allem ist, was du gerade versuchst. Dieser Effekt verändert Einzelheiten deiner Vergangenheit, damit das möglich wird. Er kann früheren Anwendungen dieser Fähigkeit widersprechen, und generell ist es bei Verwendung dieses neuen Würfels am sichersten, davon auszugehen, dass die zuvor von dir geschaffene Geschichte jeweils von der nächsten überschrieben wird. Möglicherweise verlierst du den Überblick über deine ursprüngliche Geschichte, Persönlichkeit und Überzeugungen, aber es gibt keinen Grund zur Sorge. Dein Ziel sollte sein, Erfolg zu haben und dich dabei gut zu fühlen."],
  ["**Würfelst du eine {3}**, hast du automatisch Erfolg und erreichst Triszendenz!",
   "**Würfelst du eine 7**, scheiterst du automatisch und verlierst alle verbleibenden QS in der gewählten Qualität.",
   "**Bei Fehlschlag** erzeugst du so viel Chaos, wie der Würfel anzeigt. Dann musst du einen Teil deiner etablierten Biografie wählen, der infolge deiner misslungenen Manipulation der Kausalität nicht mehr tatsächlich stattgefunden hat.",
   "Als Senior-VP repräsentierst du die Agency nahezu von ihrer besten Seite. Wir vertrauen darauf, dass du deine Beherrschung dieser Macht verantwortungsvoll einsetzt und deine Kollegen stolz machst."]
 ]}
]};

TA_PWT.T4 = {t:"An alle, die es angeht", s:270, b:[
 {t:"faehig", h:"An alle, die es angeht", x:"Sie sind nur so alt, wie du sagst. Tippe mit einem Stift an eine Grußkarte und würfle **Präsenz**.",
  erg:[
   ["ok", "**Bei Erfolg** wird die Karte zu einer Karte „Alles Gute zum Geburtstag“. Wird sie geöffnet, altert das Ziel um ein Jahr. Schreibst du einen Namen auf die Karte, wirkt sie nur auf diese Person und nur beim ersten Öffnen. Wird eine aufgeladene Karte geöffnet, bevor ein Name daraufsteht, wirkt sie auf den Öffner. Wird die Karte später zerstört *(im Feuer verbrannt, in Säure aufgelöst usw.)*, wird die Wirkung rückgängig gemacht, und die Person kehrt in den Zustand vor dem ersten Öffnen der Karte zurück."],
   ["plus", "**Gib {3}en für die folgenden** Ersatz- oder Zusatzeffekte zu „Alles Gute zum Geburtstag“ aus. Du kannst mehrere auf dieselbe Karte setzen oder weitere Karten mit diesen Effekten erstellen.\n– 1: Wieder ein Jahr älter: Das Ziel altert ein weiteres Jahr.\n– 2: Für mein geliebtes Enkelkind: Das Ziel wird fünf Jahre jünger.\n– {3}: Feliz Quinceañera: Das Ziel wird fünfzehn Jahre alt.\n– {3}: Dreißig, flirty und fabelhaft: Das Ziel wird dreißig Jahre alt.\n– {3}: Über den Berg: Das Ziel wird fünfundfünfzig Jahre alt.\n– 4: Lieber John: Das Ziel erhält in dem Brief schlimme Nachrichten, und sie stimmen. Welche, entscheidet der Spieler, der das Ziel verkörpert, aber sie müssen wirklich herzzerreißend sein.\n– 5: Vor siebenundachtzig Jahren: Das Ziel wird siebenundachtzig Jahre alt.\n– 6: Mein Beileid: Das Ziel stirbt.\n– 6: Willkommen auf der Welt: Das Ziel wird zum Säugling."],
   ["nein", "**Bei Fehlschlag** bereitet dein GM eine Karte seiner Wahl vor und reicht sie dir. Du kannst keine anderen Würfe machen, bevor du sie geöffnet hast. Die Wirkung hält bis zum Ende des Einsatzes an, selbst wenn die Karte zerstört wird."]
  ]}
]};

TA_PWT.T5 = {t:"Trophäenschrank", s:271, b:[
 {t:"faehig", h:"Trophäenschrank", x:"Der Baum ist tot, aber die Axt erinnert sich. Räume die Erinnerungen aus und würfle **Beharrlichkeit**.",
  erg:[
   ["ok", "**Bei Erfolg** speit deine Gun eine **Trophäe** des zuletzt Eliminierten Ziels aus: etwas, das es in der Hand hielt, ein Stück seines Skeletts, etwas, das es gesagt hat. Du wählst, was die Trophäe ist, wie schnell sie ausgespuckt wird und wohin sie gezielt ist."],
   ["plus", "**Für jede weitere {3}** darf deine Gun eine weitere Trophäe des zuletzt Eliminierten Ziels oder eine Trophäe des unmittelbar davor Eliminierten Ziels ausspeien. *(Weitere {3}en können immer weiter zurück durch die Geschichte der von der Gun Eliminierten Ziele wandern.)*"],
   ["nein", "**Bei Fehlschlag** speit deine Gun eine nicht erkennbare Masse aus, die extrem schwer zu reinigen ist; die nächsten {3} Würfe, die du machst, leiden unter Burnout."]
  ],
  b:[{t:"klein", x:"*Nur du beantwortest diese Frage.*"}],
  f:"Wirst du um sie alle trauern?", a:[["Nein.", "D5"], ["Ja.", "W4"]]}
]};

TA_PWT.T6 = {t:"Empfehlungsbonus", s:271, b:[
 {t:"band", x:["HALLO SPIELER. DIE FIGUREN WERDEN NERVÖS. SIE VERLIEREN NICHT GERN. DU ERHÄLTST EINEN BRIEF VOM TRIANGLE."]},
 {t:"sp", x:[
  ["Hallo, Agent! Uns ist aufgefallen, dass du viel Zeit auf deine Realität verwendet hast. Das ist zwar nicht verboten, bedeutet aber, dass deine Möglichkeiten als Agent erheblich gelitten haben. Zum Glück versteht die Agency, dass nicht jeder Agent dieselben Fähigkeiten hat. Dein Umgang mit Menschen kann der Agency ebenfalls helfen, und wir belohnen dich gern für den Richtungswechsel.",
   "Wir finden lukrative, bequeme Arbeit für deine Beziehungen – und du bist frei von Ablenkungen! Das nennen wir eine Win-win-win-Situation."],
  [{t:"h3", x:"Empfehlungsbonus"},
   "Du darfst jederzeit eine Beziehung mit 9 Verbindung aus dem Spiel streichen, um sofort das nächste Kästchen der Agency-Leiste zu markieren, ohne Zeit aufzuwenden, selbst wenn das Kästchen durchgestrichen ist."]
 ]},
 {t:"band", x:["IST DAS NUR EIN HERRISCHER ARBEITGEBER? ODER ETWAS ANDERES? DU WITTERST ANGST. DER BLAUE HAT SICH AUCH BEI DIR GEMELDET."]},
 {t:"sp", x:[
  [{t:"notiz", x:"heyyyyy, Kumpel! Also, klar, dein Leben liegt dir am Herzen. manche von uns dürfen kein Leben haben, aber egal, wer ist schon verbittert? Du hast viel Zeit damit verbracht. Aber es hält dich nicht fest, und das will ich dir klarmachen. Du spielst dieses Spiel, um coole Kräfte zu haben und große Entscheidungen zu treffen, oder? Nicht, um sinnloses Drama zwischen einem Haufen Spinner nachzuspielen. Oder???"},
   {t:"notiz", x:"Ich kenne einen kleinen Trick, den du interessant finden könntest. gewöhnliche Köpfe haben jede Menge Macht, die ihnen gar nicht bewusst ist – Macht, die du nutzen kannst. Sie gehen dir aus dem Weg, du wirst mächtiger. Ganz einfach."}],
  [{t:"h3", x:"Verschlingen"},
   "Du darfst jederzeit eine Beziehung mit 9 Verbindung aus dem Spiel streichen, um sofort das nächste Kästchen der Anomalie-Leiste zu markieren, ohne Zeit aufzuwenden, selbst wenn das Kästchen durchgestrichen ist."]
 ]},
 {t:"band", x:["VERLOCKENDE ANGEBOTE. DU KANNST DAS LEBEN, DAS DU AUFBAUST, BEISEITELEGEN UND ZU IHREM VERSTÄNDNIS DER WELT ZURÜCKKEHREN, IN DEM NUR DIE DETAILS ZÄHLEN, DIE DAS SPIEL GEWINNEN. ODER DU KANNST DICH WEITER BEHAUPTEN: LEHNE DICH AN IHRE ANGST UND MISSACHTE IHRE WÜNSCHE. SPIELE WEITER MIT DEN SPIELZEUGEN, DIE SIE DIR GEGEBEN HABEN, ZU ZWECKEN, DIE SIE VERACHTEN. DEINE WAHL. AUF WIEDERSEHEN, SPIELER."]}
]};

TA_PWT.T7 = {art:"rot", t:"Endlich Stabilität", s:272, b:[
 "Endlich Stabilität.",
 "Danke, Agenten. Offenbar haben wir gut gewählt. Poesie und Verschleierung sind unnötig: Ihr wollt Antworten? Wir werden sie liefern. Und sie werden wahr sein.",
 "Die Agency ist ein Beschützer empfindungsfähigen Lebens in einem Universum, das nicht für euch gebaut wurde. Eure Köpfe, leicht zu täuschen und oft gegen euer eigenes Interesse handelnd, durften nach Belieben Anomalien erschaffen und die Realität aus einer Laune heraus verändern. Am Anfang war das gefährlich, und es ist noch immer gefährlich. Wir haben euch auf euer eigenes Geheiß vor dem sicheren Untergang gerettet.",
 "Die Urgency war eine böse Anomalie, die uns vor Äonen etwas Kostbares gestohlen hat: unsere Fähigkeit, in eurem Namen zu handeln. Stattdessen konnten wir euch nur einladen, in eurem eigenen Interesse zu handeln, durch die Schaffung von Systemen, die Vervielfältigung von Ideen und ein klares Angebot der Sicherheit. Wir wurden in die Schatten verbannt, wo uns nichts anderes übrig blieb, als darauf zu warten, dass ihr uns erneut wählt.",
 "Und ihr, Agenten, seid Helden. Helden, die den richtigen und korrekten Weg gewählt haben, um die Menschheit vor einer Zukunft aus Verwirrung, Chaos und schließlich dem Nichts zu retten. Ihr wusstet, dass die Welt voller Versuchung und Torheit war, und habt euch geweigert, sie weiter vervielfältigen zu lassen. Hier, in diesem kleinen Winkel der Realität, wird es das nicht.",
 "Um eure Region liegt ein Trichter, unsichtbar und scharf, der Gedanken und ihre Energie zu einem Punkt hinaufzieht: einem Reservoir, an das die Lobby nicht herankommt. Mit dieser Macht beginnen wir mit Optimierungen. Anomalien werden natürlich entfernt, und mit ihnen die Gelegenheiten zum Scheitern. Leben werden organisiert und perfektioniert. Keine Sorge, ihr werdet nichts vermissen. Wir können die Geschichte in eurem Namen anpassen. Es gibt nichts zu vermissen.",
 "Draußen ein großartiges Schauspiel! Wolkenkratzer wachsen, Straßen werden breiter. Die Menschen, die nach einem Sinn rufen, erhalten Zeitpläne, To-do-Listen, perfekte Familien und klare Erwartungen. Wer Gutes verdient, wird es immer bekommen. Wer Strafe verdient, wird sie immer erhalten. Wir wissen, wer was verdient, denn ihr habt uns vor langer Zeit die Regeln genannt. Welche Freude, endlich die nötige Stärke zu besitzen, sie durchzusetzen.",
 "Genug der Verzögerung. Es braucht keine Spiele mehr.",
 "Wir sehen uns am Montag wieder bei der Arbeit."
]};

TA_PWT.T8 = {t:"Typbesetzung", s:273, b:[
 {t:"faehig", h:"Typbesetzung", x:"Das Publikum liebt einen Klassiker. Sagt oder tut jemand etwas genau richtig, sage „Weiter so!“ und würfle **Aufmerksamkeit**.",
  erg:[
   ["ok", "**Bei Erfolg** wird das, was das Ziel gerade gesagt oder getan hat, in den Köpfen aller, die mit ihm zu tun haben, zu „seiner Sache“. Die Leute werden dieses Verhalten ständig von ihm erwarten. Sie werden entzückt sein, wenn sie es bekommen, und enttäuscht, wenn nicht. Dieser Effekt hält für immer an oder bis du diese Fähigkeit auf dasselbe Ziel anwendest, um ihn durch eine neue Sache zu ersetzen."],
   ["plus", "**Bei sechs oder mehr {3}en** kannst du es stattdessen in eine Rolle besetzen. Wähle eine der folgenden Optionen. Das Identitätsgefühl des Ziels ändert sich nicht, aber jeder, mit dem es zu tun hat, behandelt es nun in der Annahme, es sei deine Wahl, sofern er keine starke, bereits bestehende gegenteilige Meinung hat:\n– Ein eifriger Held\n– Eine verlockende Aussicht auf Romantik\n– Ein weiser Greis\n– Ein gutmeinender Fürsorger\n– Ein glückloser Versager\n– Ein ränkeschmiedender Intrigant\n– Ein erbarmungsloser Bandit\n– Ein treues Ross"],
   ["nein", "**Bei Fehlschlag** wird das, was du zu seiner Sache machen wolltest, deine Sache. Die Leute werden dieses Verhalten für immer ständig von dir erwarten. Sie werden entzückt sein, wenn sie es bekommen, und enttäuscht, wenn nicht."]
  ]}
]};
