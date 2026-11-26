/* ARK › Anomalie (S. 58–77). Aufbau je Eintrag: {motto, l:[Blöcke links unter dem Bild], r:[Blöcke rechts]} – siehe plan/triangle/ARK_BRIEF.md */
TA_TEXT["ark/anomalie/whisper"] = {
 motto:"Ist für dich.",
 l:["Schöne Gefühle, die beim Aussprechen sauer wurden. Beiläufige Gespräche, die zu großen Streits eskalierten. Letzte Abschiede, die im Lärm untergingen. Whisper-Anomalien bearbeiten ihre eigene Geschichte, noch während sie erzählt wird.",
  "Whisper sind Meister des Augenblicks, in dem Ton zu Information wird. Sie sind leichtsinnig und manipulativ; wozu Vorsicht, wenn man immer noch einmal von vorn anfangen darf, wozu Angst vor dem Erwischtwerden, wenn das eigene Tun so unauffällig wirkt? Kann ein einziges Gespräch wirklich zu einem Jahr des Elends werden? Kann ein überhörtes Wort ein Jahrzehnt der Verzweiflung auslösen? Wenn ein Whisper in der Nähe ist: unbedingt.",
  "In der Agency geben Whisper-Resonanten großartige Führungskräfte ab. Sie wissen genau, was sie sagen müssen, und sie bekommen immer dieses „Ja!“",
  "Im Umgang mit Whisper empfehlen wir, Kritik, Bitten und Verbesserungspläne über einen Vermittler ohne Verstand zu übermitteln, etwa AgencyOS. In Besprechungen geht man am besten davon aus, dass ihre Ideen die Ideen der ganzen Gruppe sind."],
 r:[
  {t:"faehig", h:"Wie bitte?", x:"Du darfst auf einen gesprochenen Satz mit „Wie bitte?“ antworten und der Gruppe dann sagen, was das Ziel sagt – anstelle dessen, was es ursprünglich gesagt hat. Würfle **Präsenz**.",
   erg:[["ok","**Bei Erfolg** glaubt das Ziel, der neue Satz sei das, was es gemeint hat."],["plus","**Bei sechs oder mehr {3}en** darfst du in der nächsten Stunde jederzeit für das Ziel sprechen."],["nein","**Bei Fehlschlag** bleibt das Ziel unbeeinflusst, und du kannst die nächsten {3} Stunden nur mit den Wörtern des Satzes sprechen, den du ihm zugedacht hattest."]],
   f:"Wenn mich jemand unterbricht, gebe ich ihm …", a:[["Einen Vertrauensvorschuss.","T2"],["Meine Meinung.","P4"]]},
  {t:"faehig", h:"Auf der Zunge", x:"Öffne deinen Geist für die Gedanken von jemandem in der Nähe. Lass seine Worte deine Stimme erreichen und würfle **Empathie**.",
   erg:[["ok","**Bei Erfolg** sagst du, was das Ziel jetzt gerade am liebsten sagen würde."],["plus","**Bei jeder dritten {3}** darfst du eine Frage zu etwas stellen, das für das Ziel gerade wichtig ist, und erhältst vom GM eine Antwort. Frage und Antwort muss dein Charakter laut aussprechen."],["nein","**Bei Fehlschlag** gestehst du etwas, von dem niemand erfahren soll."]],
   f:"Wenn ich irgendwo dazugehören muss, …", a:[["Springe ich hinein und tue, als gehörte ich dazu.","A11"],["Schleiche ich mich nach langer, sorgfältiger Erkundung allmählich ein.","B9"]]},
  {t:"faehig", h:"Stille", x:"Öffne den Mund und gib einen Ton von dir, der seine Frequenz so anpasst, dass er die Geräusche auslöscht, die du machst. Würfle **Subtilität**.",
   erg:[["ok","**Bei Erfolg** macht keine deiner Handlungen ein Geräusch, bis du erneut würfelst oder den Mund schließt."],["plus","**Für jede weitere {3}** kannst du die Handlungen eines weiteren Ziels verstummen lassen, bis dieser Effekt endet."],["nein","**Bei Fehlschlag** gerät deine Frequenz aus dem Gleichgewicht, und du verstärkst eine Stunde lang jedes Geräusch, das du machst, gewaltig."]],
   f:"Ich werde still …", a:[["Damit andere sprechen können.","S10"],["Damit meine nächsten Worte härter treffen.","S8"]]}
 ]
};


/* ===== Vorspann (Buch-S. 56–59) ===== */
TA_TEXT["ark/vor/arc"] = [
 {t:"h", x:"Den ARK deines Agenten aufbauen"},
 "Jetzt ist es Zeit, die Bestandteile auszuwählen, aus denen <du/dein Charakter> besteht. Diese Entscheidungen nennen wir als Ganzes deinen **ARK**, die einzelnen Optionen **ARK-Teile**.",
 "Falls du als Spieler diese Seite überblättert hast, um die vorangegangenen Regeln zu lernen: Lies bitte die Allgemeinen Geschäftsbedingungen am Anfang dieses Dokuments und vermerke, dass du zu Beginn deiner <Laufbahn/Spiel> einen Verweis erhalten solltest.",
 {t:"pikto", x:[
  {z:"arc-a-anomalie", h:"Anomalie", x:"Deine **Anomalie** ist die besondere Menge an Kräften, die dir die Anomalie verleiht, mit der du dich verbunden hast. Bitte achte darauf, diese Kräfte unter Kontrolle zu halten."},
  {z:"arc-r-realitaet", h:"Realität", x:"Deine **Realität** sind deine weltlichen Verpflichtungen, deine wichtigsten Beziehungen und die Art, wie du in deiner „Freizeit“ mit der Welt umgehst."},
  {z:"arc-c-kompetenz", h:"Kompetenz", x:"Schließlich ist deine **Kompetenz** deine zugewiesene Stelle innerhalb der Triangle Agency. Dieser Titel beschreibt deine Aufgaben außerhalb von Außeneinsätzen und die Rolle, die du im Außenteam spielen sollst."}
 ]},
 "Du darfst diese Teile in beliebiger Reihenfolge auswählen, wir empfehlen aber, dass sich im Außenteam kein ARK-Teil wiederholt. Bitte sprich dich mit den anderen <Mitarbeitern/Spielern> ab, damit du nicht irrtümlich glaubst, mit ihnen etwas gemeinsam zu haben.",
 {t:"bild", src:"dreieckskopf-praesentiert", pos:"rechts", w:230},
 {t:"kasten", h:"Gemeinsam stärker!", b:["Die Agency liebt Gewerkschaften und möchte sie mit dir feiern. Wenn zwei Mitarbeiter derselben Abteilung in einem Außenteam zusammenarbeiten, ausgedehnte Gespräche führen oder eine bedeutsame Beziehung aufbauen, gilt das als Gewerkschaftsaktivität. Sie wird mit einer Pizzaparty gefeiert, gefolgt von einem sofortigen und langfristigen Aufenthalt in The Vault."]},
 "Während du deine Auswahl triffst, empfehlen wir, die Einzelheiten auf Charakterbögen einzutragen, die du von den Vorlagen hinten in diesem Buch kopierst. Folge den Hinweisen am Anfang jedes Abschnitts, beantworte dann den abschließenden Aufnahmefragebogen auf {S.118} und schon kannst du loslegen!",
 "Der Abschnitt **Work-Life-Balance** auf {S.122} sollte besucht werden, nachdem dein erster Einsatz abgeschlossen ist.",
 "Nimm dir Zeit, die Auswahl zu durchstöbern. Deine Zukunft liegt in deinen Händen!",
 {t:"ende"},
 {t:"h", x:"Checkliste für den Arbeitsantritt"},
 {t:"h", z:"arc-a-anomalie", x:"Wähle deine Anomalie"},
 "In diesem Handbuch kannst du aus den folgenden Möglichkeiten wählen. Jede hat **{3} Fähigkeiten**, die du anwenden darfst. Trage sie in dein Blatt der Anomalie-Fähigkeiten ein.",
 {t:"h", z:"arc-r-realitaet", x:"Wähle deine Realität"},
 "In diesem Handbuch kannst du aus den folgenden Möglichkeiten wählen. Jede hat einen **Realitäts-Auslöser** und ein **Burnout-Ventil**. Manche haben weitere wichtige Merkmale. Trage diese in dein Hauptreferenzblatt ein.",
 {t:"h", z:"arc-r-realitaet", x:"Lege deine Beziehungen fest"},
 "Beantworte alle **{3}** Fragen am Ende deiner Realität, um deine bestehenden **Beziehungen** zu bestimmen. Du solltest insgesamt **{3}** Beziehungen haben, jeweils gespielt von einem Außendienst-Agenten oder vom GM deines Teams, der nicht du ist. Trage sie in dein Beziehungsblatt ein.",
 {t:"h", z:"arc-c-kompetenz", x:"Wähle deine Kompetenz"},
 "In diesem Handbuch kannst du aus den folgenden Möglichkeiten wählen. Jede hat **Gebilligtes Verhalten** und eine **Oberste Direktive**, die du in dein Hauptreferenzblatt einträgst. Trage deine erste Anforderung ein. Trage all dies in dein Blatt für Anforderungen und Work-Life-Benefits ein.",
 {t:"h", z:"arc-c-kompetenz", x:"Schließe deine Selbsteinschätzung ab"},
 "Beantworte alle **{3}** Fragen am Ende deiner Kompetenz, um deine verfügbaren **Qualitätssicherungen** zu bestimmen. Du solltest zu Beginn deiner Laufbahn insgesamt neun QS in **{3}** Qualitäten haben. Trage sie in dein Hauptreferenzblatt ein.",
 {t:"h", z:"arc-c-kompetenz", x:"Fülle den Fragebogen zum Arbeitsantritt aus"},
 "Dieses Dokument enthält auf {S.118} Fragen, die dir helfen, dich selbst und die anderen Agenten in deinem Team zu verstehen."
];

TA_TEXT["ark/vor/anomalie"] = [
 "Anomalien sind die größte Einzelbedrohung für die Realität und suchen jeden Winkel der Existenz heim. Irgendwann in der Vergangenheit hattest du eine Begegnung mit einer, die damit endete, dass sie in deinen Körper entkam. Nun, da sie in dir lebt, ist sie kein eigenes Wesen mehr und verleiht dir stattdessen eine einzigartige Menge an Kräften.",
 "Die neun Kategorien in diesem Handbuch stehen für Fähigkeiten, die wir verlässlich von Anomalien ähnlicher Fokusse erwarten können, selbst bei dramatisch unterschiedlicher Erscheinung. Außenteams werden aus einer Mischung dieser Anomalie-Typen gebildet, um eine Vielfalt an Optionen für die Herausforderungen zu gewährleisten, die im Außendienst auf sie warten.",
 "Lies die folgenden Seiten durch, bis du eine siehst, die zu deiner Beschreibung passt.",
 {t:"liste", x:[
  "**Der Name der Anomalie** in großen Buchstaben, damit er unmöglich zu übersehen ist. Dieser Name wurde aus einer Liste von Wörtern gewählt, die von unseren Infogefahren-Analysten in der Hotline-Abteilung als unbedenklich freigegeben wurden.",
  "**Die Kategorie des ARK-Teils**, den du dir gerade ansiehst, als hilfreicher und stilvoller Untertitel. Bitte merke dir dieses Wort, falls du sonst keines liest.",
  "**Ein kleiner Wahlspruch**, von dem wir glauben, dass Nutzer dieser Anomalie ihn sagen könnten.",
  "**Eine Illustration** der Anomalie dieser Kategorie, von unseren Künstlern der R&D-Abteilung als zutreffend garantiert.",
  "**Eine kurze Beschreibung** der Geschichte dieser Anomalie mit der Agency und dessen, was man im Umgang mit diesen Resonanten als Kollegen erwarten kann."
 ]},
 {t:"h", x:"Anomalie-Fähigkeiten"},
 "Sobald du herausgefunden hast, welcher Anomalie-Typ deiner ist, studiere die **{3}** zugelassenen Fähigkeiten dieses Typs. Verinnerliche ihre Wirkungen gut und stelle sicher, dass du dich mit ihnen wohlfühlst: Es sind die einzigen Fähigkeiten, die du jemals erhalten wirst.",
 "Lies dann den Rest gründlich, um dich mit den Fähigkeiten vertraut zu machen, die deine Kollegen einsetzen könnten. Als lustige Auflockerung kannst du die Schwächen der anderen Mitglieder deines Außenteams ermitteln und einen Spielplan schreiben, wie ihre Fähigkeiten im Konfliktfall zu neutralisieren sind.",
 "**Wenn du in den Einträgen zu den Anomalie-Fähigkeiten etwas siehst, das in diesem Leitfaden nicht behandelt wird, ist etwas schiefgelaufen. Keine Panik: Belege zeigen, dass 99 % der Probleme von selbst verschwinden, wenn man sie ignoriert, bis die Mittel zu ihrer Behandlung zur Verfügung stehen.**",
 {t:"liste", x:[
  "**Der Name der Fähigkeit.** Wenn dir diese Namen gefallen, richte dein Lob bitte an unsere Texter in der PR-Abteilung.",
  "**Beschreibung und Auslöser der Fähigkeit.** Wenn du diesen Teil nicht liest, wirst du die Fähigkeit nicht verstehen.",
  "**Alle Fähigkeiten haben einen Erfolg, einen Fehlschlag und ein zusätzliches Ergebnis, das in bestimmten Situationen erreichbar ist.** Falls du Fragen zu diesen zusätzlichen Ergebnissen hast: Beschreibungen zu jedem findest du auf {S.44}."
 ]}
];

/* ===== Einträge ===== */
TA_TEXT["ark/anomalie/catalogue"] = {
 motto:"Aber warte, es gibt noch mehr!",
 l:["Zwei Dotter in jedem Ei. Eine zusätzliche Socke in der Wäscheladung. Der perfekte Doppelpartner. Catalogue-Anomalien erschaffen genau das, was du brauchst, genau so, wie du es willst.",
  "Von Natur aus schelmisch, sind Catalogue-Anomalien in freier Wildbahn für viele der berüchtigtsten Überraschungsmomente der Geschichte verantwortlich. Eisberge, die plötzlich zu nah sind, um auszuweichen, Viren, die in neuen Wirten zu neuer Blüte mutieren, entscheidende Schlachtpläne in Feindeshand … Catalogues erschaffen alles, wenn es Auswirkungen auf die Welt hat.",
  "Ihre Kraft wird nur durch Kreativität begrenzt, deshalb klammern sie sich an Wirte, die vor Fantasie überquellen.",
  "Agenten können ihre zugelassenen Fähigkeiten sinnvoll einsetzen, wenn die Vorräte knapp werden oder ihre Abteilung unterbesetzt ist. Zur Beachtung: Wenn du bemerkst, dass ein Catalogue-verbundener Kollege sich neue Gesichtsbehaarung zulegt oder fragt, ob wichtige historische Ereignisse „hier auch passiert sind“, wurde er höchstwahrscheinlich durch ein Duplikat ersetzt und muss zur Neuorientierung gemeldet werden."],
 r:[
  {t:"faehig", h:"Was ist das da drüben?", x:"Zeige irgendwo in die Nähe und sage: „Was ist das da drüben?“ Würfle **Aufmerksamkeit**.",
   erg:[["ok","**Bei Erfolg** erschaffst du dort, wohin du zeigst, einen Gegenstand. Es kann jedes alltägliche Ding sein, das du dir vorstellst und das bequem und harmlos in den Raum passt, es darf aber nur Einzelheiten oder Informationen aufweisen, die du kennst."],["plus","**Für jede weitere {3}** darfst du in der Nähe einen weiteren Gegenstand hinzufügen."],["nein","**Bei Fehlschlag** beschreibt der GM einen anderen Gegenstand, der nun dort liegt, und er ist entweder offensichtlich fehl am Platz oder äußerst unpraktisch."]],
   f:"Meine Freunde würden mir nie wehtun, weil …", a:[["Sie wissen nicht, wie.","Y1"],["Ich habe sie angeheuert.","I5"]]},
  {t:"faehig", h:"Das könnte dir auch gefallen …", x:"Halte einen beliebigen Gegenstand, der klein genug zum Tragen ist, und würfle **Dynamik**.",
   erg:[["ok","**Bei Erfolg** verwandelt sich der Gegenstand in eine ähnliche, aber andere Version seiner selbst. *(Ein grüner Mantel wird zu einem blauen Mantel, ein Stoffbär zu einem Stofftiger, Zimmerschlüssel Nr. 20{3} zu Nr. 204 usw.)*"],["plus","**Bei jeder dritten {3}** darfst du dem Gegenstand eine zusätzliche Variante geben, zwischen der du frei wechseln kannst, etwa einem Gehstock ein alternatives Ich als Schwert. Dieser Effekt ist dauerhaft, der Wechsel funktioniert aber nur, solange du den Gegenstand in der Hand hast."],["nein","**Bei Fehlschlag** wird der Gegenstand durch etwas völlig anderes ersetzt. Er lässt sich mit dieser Fähigkeit nicht mehr verändern."]],
   f:"Für mich ist der Kunde immer …", a:[["Im Unrecht.","L2"],["Im Recht.","J1"]]},
  {t:"faehig", h:"Dein bestes Ich", x:"Öffne einen Behälter, der groß genug ist, dass du vollständig hineinpasst. Würfle **Doppelzüngigkeit**.",
   erg:[["ok","**Bei Erfolg** befindet sich darin eine alternative Version von dir. Sie hat eine besondere Fertigkeit, die in deiner aktuellen Lage nützlich ist *(schnitzen, schnitzeln, schnetzeln usw.)*. Sie verschwindet innerhalb einer Stunde aus deiner Welt."],["plus","**Bei sechs oder mehr {3}en** kannst du ein weiteres alternatives Ich erschaffen."],["nein","**Bei Fehlschlag** ist die alternative Version, die du enthüllst, aus deiner Sicht böse. Sie hat Ziele und Prioritäten, die den deinen entgegengesetzt sind, und ist entschlossen, dir in die Quere zu kommen, bis man sich ihrer annimmt. Sie verlässt deine Welt nur freiwillig, wenn sie mit den von ihr erwirkten Veränderungen zufrieden ist."]],
   f:"Der Feind meines Feindes ist …", a:[["Mein Freund.","Y5"],["Ich.","P5"]]}
 ]
};

TA_TEXT["ark/anomalie/drain"] = {
 motto:"Für mich? Das wär doch nicht nötig gewesen.",
 l:["Durst, der sich nie stillen lässt. Freundliche Worte, die dich leer zurücklassen. Zinsen. Drain-Anomalien nähren sich von Begehren, Verfall und schleichendem Verlust.",
  "Wie der Skorpion auf dem Frosch nehmen diese Anomalien, weil sie so leben. Es ist, was sie tun. Drains gedeihen überall dort, wo Erwartung mit der Realität verhandelt: wenn Geld aus Geldbörsen springt, Loyalität schwindet, Begeisterung in Ekel umschlägt oder ein Publikum über Schmerz kichert, ist ein Drain da, um seinen Anteil einzusammeln.",
  "Drain-verbundene Agenten sind geschickt darin, die Moral des Teams zu heben und einzuspringen, wo sie gebraucht werden, solange sie jemanden haben, an dem sie ihre Arbeit ausrichten können.",
  "Bedenke, dass ihre Kräfte schwer zu widerstehen sein können. Merkst du, dass du weniger energiegeladen oder interessant wirst, während dein Drain-Teamkollege in seinem Fachgebiet immer größeren Beifall erntet, danke ihm dafür, dass er deine Fähigkeiten so gut genutzt hat!"],
 r:[
  {t:"faehig", h:"Darf es noch etwas mehr sein?", x:"Für dich ist Begehren ein Eimer. Stich ein Loch hinein, indem du sagst: „Darf es noch etwas mehr sein?“, und würfle **Empathie**.",
   erg:[["ok","**Bei Erfolg** interessiert sich die Person, mit der du sprichst, sehr für mehr von dem, was sie zuletzt genossen hat *(Aufmerksamkeit, Zuneigung, Eis, Ruhe usw.)*, wie von dir und dem Spieler des Charakters festgestellt. Das erzeugt keine Sucht und keinen Zwang, macht diese Sache, sofern sie verfügbar ist, aber zu einem Druckmittel oder einer Ablenkung weit über ihren Wert hinaus."],["plus","**Für jede weitere {3}** darfst du ihr Begehren mit ähnlicher Wirkung auf ein weiteres Ziel in der Nähe ausbreiten."],["nein","**Bei Fehlschlag** entwickelt das Ziel einen Widerwillen gegen das, was es zuletzt genossen hat. Dein Vorschlag von mehr ist beleidigend für es, und schon der bloße Gedanke an diese Sache ist ihm von nun an zuwider."]],
   f:"Ich kann ein Pferd zur Tränke führen …", a:[["Aber wer trinkt schon Wasser?","Y4"],["Aber ich trinke zuerst.","C1"]]},
  {t:"faehig", h:"Ausleihen", x:"Du darfst ein Merkmal eines alltäglichen Ziels auswählen und es dir nehmen. Sein Gesicht, seine Stimme, seine Liebe, seine Fingerabdrücke – nun hast du sie, und es nicht mehr. Würfle **Doppelzüngigkeit**.",
   erg:[["ok","**Bei Erfolg** hält dieser Effekt bis zu eine Stunde an."],["plus","**Für jede weitere {3}** wähle eines:\n– Das Ziel behält eine fehlerhafte Version dessen, was ausgeliehen wurde.\n– Der Effekt hält eine weitere Stunde an.\n– Du darfst das Ausgeliehene mit einem weiteren Ziel teilen."],["nein","**Bei Fehlschlag** verliert das Ziel, was du genommen hast, dauerhaft, und niemand bekommt es. Es erinnert sich daran, was es verloren hat."]],
   f:"Menschen lieben mich, weil …", a:[["Wenn nicht, suche ich mir neue Menschen.","R9"],["Ich dafür sorge, dass ich makellos bin.","S15"]]},
  {t:"faehig", h:"Universalempfänger", x:"Wenn du Schaden erhältst oder auf irgendeine Weise verletzt wirst, darfst du **Beharrlichkeit** würfeln.",
   erg:[["ok","**Bei Erfolg** wähle eine lebende Person oder Anomalie in der Nähe, die nicht das ist, was dich verletzt hat. Sie wird stattdessen verletzt, und du bleibst unversehrt."],["plus","**Für jede weitere {3}** darfst du ein zusätzliches Ziel wählen, das dieselbe Verletzung erhält."],["nein","**Bei Fehlschlag** kreist dein Schmerz in sich selbst zurück, und dir wird diese Verletzung dreifach zugefügt. Bliebe nach deinem Tod noch Schaden übrig, sucht er sich weitere Ziele in der Nähe, bis er vollständig verteilt ist."]],
   f:"Wenn mir jemand wehtut, …", a:[["Ist das eine Chance für eine wertvolle Lektion.","S19"],["Hätte er das nicht tun sollen. Warum hat er es getan?","B11"]]}
 ]
};

TA_TEXT["ark/anomalie/timepiece"] = {
 motto:"Gern geschehen für das Warten.",
 l:["Endlose Schultage. Lebhafte, unvergessliche Erinnerungen. Der Tod, Augenblicke nach der Flucht. Timepiece-Anomalien bestimmen den Zeitplan der Welt und scheren sich nicht um einen Kalender.",
  "Die Kräfte eines Timepiece laden zu einer einzigartig beiläufigen Selbstsucht ein. Die weltliche Welt ist an den Lauf der Zeit gekettet, und so beugt sich jeder dem Willen des Timepiece. Geduld und Rücksicht könnten daraus eine beispiellose Kraft zum Guten machen, doch diese Anomalien werden häufiger gelangweilt und nachlässig, geschützt, wie sie vor den Folgen von Verschwendung sind.",
  "Mit Timepiece-Anomalien verbundene Agenten sind hoch geschätzt, weil sie dafür sorgen, dass jede Besprechung Zeit für eine weitere Frage hat und jeder Abrechnungszeitraum sauber ins Budget passt.",
  "Nach jüngsten Berichten, die weit verbreiteten Missbrauch aufgedeckt haben, besteht das Standardverfahren im Umgang mit Timepieces jedoch darin, Fristen zu verschleiern und zu verlangen, dass Arbeit erledigt wird, bevor sie angefordert wurde."],
 r:[
  {t:"faehig", h:"Wir haben Zeit.", x:"Wenn du oder ein Ziel es eilig habt, eine Aufgabe zu erledigen *(ein Auto reparieren, einem Verfolger entkommen usw.)*, sieh auf eine beliebige Uhr und sage den Satz „Wir haben Zeit.“ Würfle **Professionalität**.",
   erg:[["ok","**Bei Erfolg** hast du recht. Wird die Aufgabe ernsthaft und aufrichtig angegangen, wird sie vor der bevorstehenden Frist erledigt sein."],["plus","**Für jede weitere {3}** gewinnst du eine zusätzliche Minute Vorbereitung für andere Aktivitäten, bevor die Frist eintrifft."],["nein","**Bei Fehlschlag** liegst du katastrophal, entsetzlich falsch – und du merkst es erst, wenn es zu spät ist. Dein Verfolger überrascht dich, die Frist ist längst verstrichen … wo ist die ganze Zeit hin?"]],
   f:"Ich weiß …", a:[["Die tiefe Magie.","W3"],["Kung-Fu.","C10"]]},
  {t:"faehig", h:"Übertakten", x:"Wenn du oder ein Verbündeter auf eine andere Anomalie-Fähigkeit als diese würfelt, stemple nach Ansicht des Ergebnisses eine Stechuhr ab und würfle **Initiative**.",
   erg:[["ok","**Bei Erfolg** schickst du das Ziel in der Zeit zurück, damit es sich selbst hilft, und es darf dieselbe Fähigkeit ein zweites Mal mit einer identischen Anzahl von {3}en einsetzen. Diese zweite Anwendung kann neue Ziele betreffen und erzeugt keine Chaos- oder Triszendenz-Effekte."],["plus","**Für jede weitere {3}** fügst du der zweiten Anwendung eine {3} hinzu. Dieser Effekt kann einen Wurf über sechs {3}en hinausbringen."],["nein","**Bei Fehlschlag** wird der ursprüngliche Wurf zum Fehlschlag, und dann scheitert die Fähigkeit ein zweites Mal. Der zweite Fehlschlag wiederholt sich auf demselben Ziel oder wandert zu einem neuen, je nachdem, was schlimmer ist. Der kopierte Fehlschlag erzeugt kein Chaos."]],
   f:"Ich schlafe, wenn …", a:[["Ich müde bin.","P13"],["Ich tot bin.","O7"]]},
  {t:"faehig", h:"Weißt du noch", x:"Lass jemanden einen überwältigenden Schwall Nostalgie nach der Zeit empfinden, die er hat verstreichen lassen. Summe eine Melodie und würfle **Empathie**.",
   erg:[["ok","**Bei Erfolg** fühlen sich alle vergangenen Ereignisse, selbst kürzliche, wehmütig weit entfernt an. Das Ziel will unbedingt über seine Vergangenheit reden und lässt sich leicht auf Themen lenken, die dich interessieren – selbst auf gewöhnlich geheime oder vertrauliche."],["plus","**Bei jeder dritten {3}** darfst du verlangen, dass eine bestimmte Erinnerung oder Abfolge in perfekter Einzelheit beschrieben wird – der GM malt die gesamte Szene aus, und sie unterliegt nicht dem natürlichen Verfall der Erinnerung. Dieser Effekt kann Informationen hinter selbst anomalen Gedächtnisblockaden oder -löschungen enthüllen."],["nein","**Bei Fehlschlag** verliert sich das Ziel in seinen Erinnerungen. Es wird von Gefühlen überwältigt und ist zum Sammeln von Informationen nutzlos. Die Rückkehr in die Gegenwart wird Zeit und Sorgfalt kosten. Sein Zustand erzeugt mindestens ein Loses Ende."]],
   f:"Ich frage eher …", a:[["Wo sind sie jetzt?","O6"],["Wo gehen sie hin?","F3"]]}
 ]
};

TA_TEXT["ark/anomalie/growth"] = {
 motto:"Mehr ist immer besser.",
 l:["Unverwundbare Helden. Monster, die auf tausend Armen dahergaloppieren. Einbrecher, die ihre Beute durch Wände und im Dunkeln erspähen. Growth verändert das Fleisch, um die Zukunft zu verändern.",
  "Gleichermaßen zu Hause in der menschlichen Gesellschaft und in der unberührten Natur, verstecken sich Growths vor aller Augen. Sie fügen sich neben den natürlichen Kreisläufen des Planeten ein und drehen an Kleinigkeiten mit großer Wirkung. Vielleicht erhält ein mitfühlender Maulwurf gewaltige Größe, um sein Revier zu schützen, oder ein Finanzvorstand bekommt einen plötzlichen Schub an Intuition, oder die Flügel eines Schmetterlings sind etwas größer.",
  "Bald nehmen Erdbeben, Erträge und Hurrikane Fahrt auf, und der Growth gewinnt in ihrem Kielwasser an Kraft.",
  "Agenten mit diesen Fähigkeiten mögen auf den ersten Blick wegen ihrer körperlichen Leistungsfähigkeit geschätzt werden, doch ihre subtilere Seite ist nicht zu unterschätzen: Sie erkennen als Erste die größten Schwächen eines Teams. Dennoch sollte man diesen Mitarbeitern keine Führungspositionen übertragen. Am besten arbeiten sie dort, wo Wachstumsmöglichkeiten bestehen."],
 r:[
  {t:"faehig", h:"Ich deck dich!", x:"Wenn ein Ziel in der Nähe von einer äußeren Kraft verletzt würde, darfst du sagen: „Ich deck dich!“, und dein Fleisch ausdehnen, um es zu schützen. Würfle **Beharrlichkeit**.",
   erg:[["ok","**Bei Erfolg** wächst du rasch um es herum und nimmst den Angriff für es. Jede Verletzung, jeder Schaden oder Tod trifft stattdessen dich."],["plus","**Bei jeder dritten {3}** panzerst du dich mit zusätzlichen Schichten schützenden Fleisches. Dieser Fall von Schaden wird um eins verringert, und alles Überschüssige wird auf künftigen Schaden angerechnet. (Höhere Zahlen erzeugen einen offensichtlichen zusätzlichen Körperumfang, bis er verloren geht, weil er den Schaden aufgenommen hat.)"],["nein","**Bei Fehlschlag** erleiden du und das Ziel beide den ursprünglichen Schaden. Dein Körper wächst über deine Absicht hinaus und bleibt auf offensichtliche Weise überwuchert, bis du dich mindestens eine Stunde lang ausruhen und erholen konntest."]],
   f:"Ich beschütze Menschen, weil …", a:[["Ich sie wissen lassen will, wer härter ist.","F5"],["Sie sich nicht selbst beschützen können.","L6"]]},
  {t:"faehig", h:"Gliedmaßen", x:"Erweitere deine körperlichen Möglichkeiten um zusätzliche Gliedmaßen, ähnlich denen, die du schon besitzt. Würfle **Dynamik**.",
   erg:[["ok","**Bei Erfolg** gewinnst du Reichweite und Kontrolle weit jenseits typischer Kämpfer und kannst jedes alltägliche oder Kleine Anomalie-Ziel mühelos in ein Patt verwickeln."],["plus","**Für jede weitere {3}** wähle eines:\n– Entwaffne ein Ziel.\n– Verwickle ein weiteres Ziel.\n– Mache ein verwickeltes Ziel bewusstlos.\n– Töte ein bewusstloses Ziel."],["nein","**Bei Fehlschlag** bist du nur noch Gliedmaßen. Alle anderen Merkmale verschwinden, und du wirst zu einem bewussten Haufen aus allem, was du an Gliedmaßen erschaffen wolltest. Du bist eine Stunde lang äußerst ungelenk und anfällig für Schaden."]],
   f:"Wenn ich gegen eine Wand renne, …", a:[["Fresse ich die Wand.","S13"],["Steige ich über die Wand.","G9"]]},
  {t:"faehig", h:"Augen", x:"Öffne ein paar weitere Augen. Würfle **Professionalität**.",
   erg:[["ok","**Bei Erfolg** sprießen dir neue Augen am Körper, mit mächtigen neuen Fähigkeiten."],["plus","**Gib {3}en für die folgenden Sichtarten aus**, die 1 Stunde lang anhalten:\n**1:** Wärme-, Nacht- oder Fernsicht\n**2:** Fingerabdruck oder Röntgen\n**{3}:** Realität (durchschaut Illusionen und Verschleierungen)\n**4:** Pflanzengebärdensprache, Anomalie-Spürsinn\n**6:** Schwäche\n**7:** Zukunftssicht"],["nein","**Bei Fehlschlag** siehst du **Eine Vision des Endes**. Du erhältst ein Stück verbotenes Wissen über das Ende aller Dinge, zu groß, als dass dein Geist es fassen könnte. Du leidest bis zum Ende des Einsatzes unter einem zusätzlichen Burnout bei allen Würfen."]],
   f:"Hast du schon eine Vision des Endes gesehen?", a:[["Nein. Und ich mag Pflanzen!","G6"],["Ja.","R7",1]]}
 ]
};

TA_TEXT["ark/anomalie/gun"] = {
 motto:"Das ist eine Gun.",
 l:["Ein Satz beendet. Ein Leben beendet. Eine Hoffnung, groß und aufrichtig, auf etwas Erreichbares und Schönes, beendet. Gun-Anomalien kommen, um den Dingen ein Ende zu setzen. Jetzt.",
  "Zynisch und stolz sind Gun-Anomalien eine gut dokumentierte Geißel der weltlichen Welt. Ihr Einfluss verbreitet Elend, Furcht und Kummer durch nahezu jede Gesellschaftsschicht. Ihre Kräfte reichen jedoch weiter als Maschinerie: Das Klatschen eines Vorhangs, der auf die Bühne fällt, das Zuschlagen einer Tür und das leise Bidoop einer Trennungsnachricht liegen alle in ihrer Nische. Sie suchen vielleicht Wirte, die ihre Kraft wirklich brauchen, werden aber immer, und bald, verdorben.",
  "In den Händen eines Agenten sorgt die Gun für Pünktlichkeit, Effizienz und Sauberkeit. Die Befolgung des Agency-Protokolls schließt jede Möglichkeit von Missbrauch oder Übergebrauch aus, und Gun-Resonanten sind in jeder Abteilung beliebt. Es wird dringend empfohlen, dafür zu sorgen, dass sie sich dessen bewusst sind.",
  {t:"h3", x:"Die Gun"},
  "Deine Anomalie ist stets in körperlicher Form anwesend, nützt aber niemand anderem etwas. Lege eine Gestalt für deine Gun fest oder wähle eine der folgenden Formen:",
  {t:"tab", x:[["**Violine**"],["**Kartenspiel**"],["**Schwert**"],["**Lippenstift**"],["**Jo-Jo**"],["**Fernbedienung**"]]}],
 r:[
  {t:"faehig", h:"Eliminieren", x:"Du kannst einen alltäglichen Gegenstand oder eine Person dauerhaft aus der Gleichung streichen. Einst existierten sie. Nun nicht mehr. Ziele mit deiner Gun und würfle **Dynamik**.",
   erg:[["ok","**Bei Erfolg** verschwindet das Ziel spurlos."],["plus","**Bei sechs oder mehr {3}en** wähle beliebig viele Ziele, die du von deinem Standort aus sehen kannst. Sie verschwinden spurlos."],["nein","**Bei Fehlschlag** wird das Ziel getötet. Ein Gegenstand wird zerstört, ein Lebewesen stirbt. Diese Tatsache ist sichtbar, offensichtlich und möglicherweise grauenhaft."]],
   f:"*Nur du beantwortest diese Frage.*\nWerde ich mich an sie alle erinnern?", a:[["Nein.","S6"],["Ja.","T5"]]},
  {t:"faehig", h:"Schnell gezogen", x:"Wenn etwas versucht, dir wehzutun, feuere deine Gun ab und würfle **Initiative**.",
   erg:[["ok","**Bei Erfolg** hast du zuerst geschossen. Der Angreifer erleidet einen Schaden, bevor sein Angriff erfolgt, und es gelingt ihm nicht, dich zu verletzen."],["plus","**Für jede weitere {3}** darfst du ein zusätzliches Ziel wählen, dem du Schaden zufügst, oder ein Ziel eliminieren, dem du mit dieser Fähigkeit bereits Schaden zugefügt hast."],["nein","**Bei Fehlschlag** geht der Schuss daneben. Etwas oder jemand Wichtiges für dich wird beschädigt, und der ursprüngliche Angriff gegen dich läuft wie geplant ab."]],
   f:"Ich schieße …", a:[["Mit Bedacht.","G4"],["Sofort.","A12"]]},
  {t:"faehig", h:"Offen getragen", x:"Die Bedrohung deiner Gun ist so groß, dass selbst Alltagsmenschen sie spüren. Mache deine Optionen deutlich und würfle **Präsenz**.",
   erg:[["ok","**Bei Erfolg** ist ein Ziel, auf das du dich konzentrierst, genug eingeschüchtert, um zu tun, was du willst. Allerdings wählt der GM eine Folge aus der folgenden Liste. Das Ziel wird:\n– dein Gesicht im Gedächtnis behalten\n– die Behörden verständigen\n– mit extremer Furcht reagieren\n– Vergeltung suchen"],["plus","**Für jede weitere {3}** darfst du entweder eine Option aus den möglichen Folgen entfernen oder ein zusätzliches Ziel hinzufügen. Zum Beispiel könnten sechs {3}en keine Folgen und 2 Ziele bedeuten oder 5 Ziele und alle möglichen Folgen."],["nein","**Bei Fehlschlag** hat das Ziel keine Angst. Es wird immun gegen alle Wirkungen deiner Gun und wird sich wahrscheinlich auf unmittelbare und gefährliche Weise rächen."]],
   f:"Freunde sind …", a:[["Überall, wenn du weißt, wie man sucht.","D6"],["Feinde, die ich noch nicht habe.","W11"]]}
 ]
};

TA_TEXT["ark/anomalie/dream"] = {
 motto:"Keine Sorge. Ist nicht echt.",
 l:["Monster am Fußende des Bettes. Geburt, Leben und Tod in einer einzigen Nacht. Dein Gesicht in einem Film, der nie gedreht wurde. Dream-Anomalien entscheiden, ob du aufwachen willst, und wählen dann, ob du es tust.",
  "Dreams tanzen am Rand von Verzweiflung und Entzücken und schüren den unterbewussten Aufruhr ihrer Opfer, um die perfekte dramatische Darbietung zu erzeugen. Sie lassen sich finden, wie sie in unfertigen Manuskripten schwären, durch die Hallen von Museen strömen, Aufmerksamkeit in Werbetafeln leiten und jedes kleine Problem größer als das Leben machen.",
  "Auch, natürlich, in Träumen.",
  "Die Verbindung mit einer Dream-Anomalie kann Agenten bei der Arbeit sehr beliebt machen! Ein Dream-Resonant weiß, wann das Team von Angst, Motivationsmangel oder der falschen Büroeinrichtung gebremst wird. Bitte beachte, dass Agenten mit Dream-Fähigkeiten nicht mehr an Buchclubs der Agency teilnehmen dürfen, ohne schriftlich zu vereinbaren, dass sie das Buch vor der Besprechung nicht „reparieren“."],
 r:[
  {t:"faehig", h:"Albtraum", x:"Projiziere dich in etwas, das größer ist als das Leben. Wähle einen Geist und wickle seinen Schatten um dich. Würfle **Präsenz**.",
   erg:[["ok","**Bei Erfolg** darfst du eine Scheingestalt annehmen und deinem Ziel in dieser Gestalt erscheinen. Die Gestalt kann schrecklich, schön oder alltäglich sein – und es glaubt, es sei deine wahre Gestalt."],["plus","**Bei jeder dritten {3}** darfst du den Spieler, der das Ziel steuert, bitten, dir eines der Folgenden zu verraten, bevor du diese Gestalt annimmst:\n– Seine größte Angst\n– Sein größtes Ziel\n– Sein geheimster Wunsch"],["nein","**Bei Fehlschlag** wird deine wahre Identität in seinen Geist eingebrannt – nachts wird es von dir träumen, tagsüber an dich denken. Für heute aber geschieht vielleicht nichts."]],
   f:"Ich neige dazu, mir vorzustellen …", a:[["Den besten Fall.","D1"],["Das schlimmstmögliche Ergebnis.","R13"]]},
  {t:"faehig", h:"Schläfchenzeit", x:"Puste eine Prise Sand auf ein Ziel und würfle **Subtilität**.",
   erg:[["ok","**Bei Erfolg** schickst du das Ziel in einen plötzlichen Schlaf. Es hat angenehme Träume und glaubt, nach dem Aufwachen in einigen Minuten von allein eingenickt zu sein."],["plus","**Für jede weitere {3}** wähle eines:\n– Füge diesem Effekt ein weiteres Ziel hinzu.\n– Der Effekt hält eine weitere Stunde an."],["nein","**Bei Fehlschlag** schläft stattdessen ein anderes Ziel, ein Verbündeter oder vielleicht sogar du selbst ein. Der launische Sand wirbelt auf offensichtliche Weise, und das ursprüngliche Ziel sieht, was du getan hast."]],
   f:"Meine liebsten Träume …", a:[["Kehren wieder.","D8"],["Sind völlig unerwartet.","S1"]]},
  {t:"faehig", h:"Ortstermin", x:"Fantasie ist real genug. Tritt in ein Gemälde, Foto, Video, einen Roman oder ein anderes Kunstwerk und würfle **Aufmerksamkeit**.",
   erg:[["ok","**Bei Erfolg** betreten du und beliebige nahe Verbündete, die du wählst, die dargestellte Welt. Darin darfst du Gegenstände bewegen, mit Menschen sprechen und aus Blickwinkeln sehen, die im ursprünglichen Bildausschnitt nicht vorkommen."],["plus","**Bei jeder dritten {3}** wähle eines:\n– Du und deine Verbündeten verändert euer Aussehen, um zur Kunst zu passen.\n– Wenn du gehst, wird dieses Kunstwerk in seinen ursprünglichen Zustand zurückversetzt."],["nein","**Bei Fehlschlag** vergisst du, wie man seine Spuren verwischt. Opportunistische Figuren aus der nahen Kunst können dir folgen und auf eigene Faust die Realität betreten."]],
   f:"Wenn ich eine Geschichte beendet habe, wünsche ich mir oft, ich könnte …", a:[["Mehr Zeit mit den Figuren verbringen.","P8"],["Die Lehre mit jemandem teilen, der sie braucht.","M4"]]}
 ]
};

TA_TEXT["ark/anomalie/manifold"] = {
 motto:"Immer geradeaus. Nicht zu verfehlen.",
 l:["Labyrinthe ohne Lösung. Autoreisen, in einem Wimpernschlag beendet. Schwerelose Schläfer, die bei ihrem Sturz erwachen. Manifold-Anomalien halten Raum für einen Vorschlag und die Physik für einen der langweiligen Freunde des Raums.",
  "Eigen und kontrollierend lieben Manifolds es, Punkte zu verbinden und „Verbesserungen“ vorzunehmen. Sie verknoten Straßen zu undurchdringlichen Knäueln, verwandeln angenehme Reisen in Qualen, indem sie sie endlos in die Länge ziehen, und lassen Flugzeuge aus Lufträumen abstürzen, die sie lieber freihalten möchten.",
  "Wenn Welten kollidieren, dann oft, weil diese Anomalien es so beschlossen haben.",
  "Agenten mit diesen Fähigkeiten gewinnen eine Begabung dafür, Lieferungen zu machen und Ablenkungen zu vermeiden. Merkst du jedoch, dass sich dein Arbeitsweg verlängert oder dein Tacker außer Reichweite schwebt, beantrage umgehend eine Schlichtungssitzung mit allen Manifold-Mitarbeitern, die du verärgert haben könntest."],
 r:[
  {t:"faehig", h:"Ich kenne eine Abkürzung!", x:"Wenn du es eilig hast, irgendwohin zu kommen, sage den Satz „Ich kenne eine Abkürzung!“ und beschreibe dann einen kurzen Weg zum besprochenen Ort. Würfle **Initiative**.",
   erg:[["ok","**Bei Erfolg** stimmt deine Wegbeschreibung für dich, egal wie unmöglich sie ist. Die Abkürzung verschwindet, sobald sie benutzt wurde."],["plus","**Für jede weitere {3}** darf eine zusätzliche Person deine Abkürzung benutzen, bevor sie verschwindet."],["nein","**Bei Fehlschlag** führt deine Abkürzung statt zum gewünschten Ort an eine sehr unpraktische Stelle, und sie bleibt bestehen und ist für alle an beiden Enden sichtbar."]],
   f:"Die Welt ist …", a:[["Wie ich sie sehe.","F9"],["Wie ich sie mache.","S16"]]},
  {t:"faehig", h:"Einfach weitergehen …", x:"Wenn du jemandem den Weg beschreibst, vor einem Verfolger fliehst oder weißt, wohin jemand geht, darfst du versuchen, ihn in einem Labyrinth oder endlosen Flur zu fangen. Knüpfe einen Knoten und würfle **Beharrlichkeit**.",
   erg:[["ok","**Bei Erfolg** fängst du ihn in einem verwickelten, sich wiederholenden Pfad deiner eigenen Gestaltung. Er kann nicht hinaus, bis du erneut würfelst."],["plus","**Für jede weitere {3}** darfst du ein zusätzliches Ziel fangen oder das Labyrinth für weitere Würfe nach dem ersten bestehen lassen."],["nein","**Bei Fehlschlag** beschleunigst du es sofort auf seinem Weg zu seinem Ziel – es erreicht sein Ziel oder holt dich unverzüglich ein."]],
   f:"Ich verbringe Zeit mit Menschen, …", a:[["Weil ich verstehen will.","A5"],["Die schon so sind wie ich.","M9"]]},
  {t:"faehig", h:"Den Kardanrahmen kreiseln lassen", x:"Passe dein Gleichgewicht an und würfle **Professionalität**.",
   erg:[["ok","**Bei Erfolg** änderst du die Ausrichtung der Schwerkraft um bis zu 90 Grad in eine Richtung deiner Wahl. In einem Raum betrifft es nur diesen Raum. Im Freien betrifft es alles im Umkreis von etwa **{3}0** Yards. Dieser Effekt hält an, bis du erneut würfelst."],["plus","**Für jede weitere {3}** wähle eines:\n– Die Änderung betrifft ein einzelnes Ziel nicht, etwa dich selbst.\n– Die Reichweite ist für ein einzelnes Ziel unendlich.\n– Die Schwerkraft wird für ein einzelnes Ziel um mehr als 90 Grad gedreht."],["nein","**Bei Fehlschlag** löst du dich von der Schwerkraft. Mindestens eine Stunde lang verhält sich dein Körper, als befände er sich in einer Umgebung ohne Schwerkraft. Jeder, der das sieht, wird zu einem Losen Ende."]],
   f:"In der Krise …", a:[["Fliege ich.","P6"],["Kämpfe ich.","S18"]]}
 ]
};

TA_TEXT["ark/anomalie/absence"] = {
 motto:"Und als sie sich umdrehten …",
 l:["Schaukeln, die sanft ohne Reiter schwingen. Gelungene Ausbrüche aus undurchdringlichen Gefängnissen. Trauer. Wo immer es etwas zum Nichts gibt, ist Absence.",
  "Schwer zu sehen, schwer zu verstehen und schwer zu fassen, lassen sich Absence-Anomalien oft nur anhand ihrer Umrisse beschreiben. Unberührbar und einsam zeigt sich ihre Kraft am stärksten in verlegter Fracht, unvollständigen Plänen und stiller Verzweiflung.",
  "Sie sind Feinde von Betriebsamkeit und Produktivität, aber auch ihrer selbst: Sie müssen stets verloren sein, sonst existieren sie gar nicht.",
  "Inbox Zero ist ein Leichtes für Träger von Absence-Fähigkeiten! Schicke ihnen die fiesesten Probleme und kompliziertesten Scherereien und sieh zu, wie sie im Nichts verschwinden. (Bewahre eine Kopie ihrer Aufgabenliste an einem Ort auf, von dem sie nichts wissen.)"],
 r:[
  {t:"faehig", h:"Verfehlt!", x:"Sie scheinen nie zu wissen, wo du bist. Wenn dich etwas berühren oder verletzen könnte, kannst du „Verfehlt!“ sagen und **Doppelzüngigkeit** würfeln.",
   erg:[["ok","**Bei Erfolg** warst du die ganze Zeit irgendwo anders in der Nähe – vielleicht hinter oder auf dem, was dich berühren wollte."],["plus","**Für jede weitere {3}** darf ein weiteres williges Ziel in der Nähe mit dir an den neuen Ort versetzt werden."],["nein","**Bei Fehlschlag** wird das Ziel stattdessen versetzt – um einen anderen zu verletzen, was zusätzlichen Schaden verursacht, oder an einen sehr unpraktischen Ort."]],
   f:"In einem Streit gewinne ich, indem ich …", a:[["Lücken in der Logik aufdecke.","I2"],["Niemals nachgebe.","M10"]]},
  {t:"faehig", h:"Negative", x:"Untersuche den Ort, an dem einst etwas war. Würfle **Aufmerksamkeit**.",
   erg:[["ok","**Bei Erfolg** kannst du die verlorene Geschichte des Ortes sehen, den du untersuchst. Wurde ein Zettel entfernt, weißt du, was darauf stand – wurde ein Gegenstand gestohlen, weißt du, was es war und wie er abtransportiert wurde."],["plus","**Bei jeder dritten {3}** darfst du einen Satz über das Verlorene sagen, und dieser Satz ist wahr."],["nein","**Bei Fehlschlag** ist es zu viel Verlust. Du wirst von der Geschichte des Ortes, an dem du dich befindest, überwältigt und erleidest einen Schaden – zusätzlich zu allen Losen Enden, die deine sichtbare, schmerzhafte Reaktion verursacht."]],
   f:"Um leere Räume zu füllen, neige ich dazu, …", a:[["Konversation zu machen.","W5"],["Mehr davon einzunehmen.","C6"]]},
  {t:"faehig", h:"Entfesselt", x:"Wenn dir etwas im Weg steht oder dich zurückhält, entspanne deinen Körper und würfle **Subtilität**.",
   erg:[["ok","**Bei Erfolg** gehst du direkt hindurch. Du wirst unkörperlich und kannst eine Stunde lang mühelos durch Wände, Ketten und andere Hindernisse gleiten."],["plus","**Bei jeder dritten {3}** wähle eines:\n– Du wirst unsichtbar.\n– Du wirst unhörbar.\n– Du wirst für einen Beobachter unauffindbar im Gedächtnis.\n– Du nimmst eine Person mit, jedes Mal wenn du mit dieser Fähigkeit ein Hindernis passierst."],["nein","**Bei Fehlschlag** verlierst du die Kontrolle über deine körperliche Gestalt und wirst instabil. Du kannst physische Gegenstände nicht fühlen, halten oder mit ihnen interagieren, kannst aber für den Rest des Einsatzes oder bis zu deinem Tod, was zuerst eintritt, noch Schaden erleiden."]],
   f:"Ich wäre lieber …", a:[["Die Ablenkung.","U3"],["Verdeckt.","O3"]]}
 ]
};
