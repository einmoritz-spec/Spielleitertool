/* ARK › Realität (S. 78–97) */
TA_TEXT["ark/realitaet/caretaker"] = {
 motto:"Ohne dich sind sie verloren.",
 l:["Caretaker-Agenten haben eine tiefe Bindung zu einem Schützling, der sie begleitet und bei der Arbeit lernt und wächst. Zerbrechlich und kostbar, erfüllen seine frischen Augen und sein starkes Herz Caretaker mit Widerstandskraft, Einfallsreichtum und Geduld. Eines Tages, wenn der Caretaker nicht mehr ist, wird sein Schützling ein lebendes Zeugnis seiner Moral, seiner Führung und seiner Fähigkeit zu großer Liebe sein. Vorerst macht er vor allem Unordnung.",
  "Umfangreiche interne Tests haben gezeigt, dass Liebe im Grunde keinerlei taktischen Nutzen hat. Schützlingen liegt wenig am Erfolg des Einsatzes, und beinahe wöchentlich müssen wir Agenten daran erinnern, dass „Babys Tag draußen“ ein kritischer Fehlschlag war. Selbst außerhalb des Außendienstes stellen wir fest, dass Freizeit, persönliche Verbindungen und innere Monologe meist vom Schützling beherrscht werden – zurück bleibt eine leere Hülle aus auswendig gelernten Reimen und lauter „Das ist schön, Schätzchen“.",
  "Ohne ihren Schützling allerdings haben wir erlebt, wie diese Agenten ihre Joie de Arbeit verlieren.",
  "Wenigstens können Vorgesetzte sicher sein: Der Druck, ein gutes Vorbild abzugeben, spornt sie an, im Außendienst nicht zu scheitern.",
  {t:"w4", h:"Schützling", b:["Bestimme, was dein Schützling ist: Würfle auf der Liste unten oder denk dir selbst etwas aus.", "Dein Schützling ist ein gemeinsamer Charakter: Ist er in einer Szene, darfst du oder dein GM ihn spielen. Solange deine Lebensversicherung aktiv ist, kommt dein Schützling in den Genuss ihrer Leistungen."], x:["Baby","Tier","Entstehende KI","Außerirdischer"]}],
 r:[
  {t:"ausloeser", h:"Realitäts-Auslöser: Bedürftig", b:[
   ["Der GM darf den Realitäts-Auslöser nutzen, damit dein Schützling Aufmerksamkeit braucht. Ignorierst du das, bekommt dein Schützling jetzt einen Wutanfall und kostet dich später Zeit: Die Beziehung, die sich am wenigsten mit deinem Schützling versteht, verliert eine Verbindung.",
    "Wenn du deinen Schützling etwas allein in Ordnung bringen lässt, ihm wehtust oder ihn der Aufsicht von jemand anderem überlässt, leidet eure Beziehung. Markiere das nächste leere Kästchen"],
   ["auf einer Leiste „Unabhängig“ mit vier Kästchen. Geschieht das, während alle Kästchen markiert sind, oder entwächst er deiner Kontrolle, ist dein Schützling nicht mehr auf dich angewiesen. Du musst eine andere Realität wählen.",
    {t:"spur", h:"Unabhängig", x:["1","2","3","4","X"]}]]},
  {t:"sp", eng:1, x:[
   [{t:"ventil", h:"Burnout-Ventil: Dein Liebling!", x:"Wenn du etwas tust, das deinen Schützling unterhält, ignoriere jeden Burnout."}],
   [{t:"fragebogen", x:["Was ist deine liebste Erinnerung?", "Welche deiner Eigenschaften möchtest du deinem Schützling hoffentlich nie beibringen?", "Wo liegt dein Traumurlaubsziel?"]}]]},
  {t:"matrix", art:"linie", b:["Du hast drei Kern-Beziehungen, die deine Anker in der Gesellschaft sind. Bestimme sie, indem du die Fragen deiner Beziehungsmatrix beantwortest.", "Sobald jede Beziehung feststeht, weise jede einem anderen <Agenten/Spieler> am Tisch zu. Ist die Figur in einer Szene anwesend, spielt sie der zugewiesene <Agent/Spieler>.", "Gib der Beziehung, die dir am nächsten steht, **6 Verbindung**. Gib den beiden anderen **{3} Verbindung**."],
   x:[{f:"Wer bekäme das Sorgerecht für deinen Schützling, wenn es dich nicht mehr gäbe?", bsp:"Lebenspartner, Elternteil, Waffenhersteller"},
      {f:"Wer vermisst die Freiheit, die du früher hattest?", bsp:"Freund aus dem Studium, dein Kind, Bowlingmannschaft"},
      {f:"Mit wem verbringt dein Schützling immer begeistert Zeit?", bsp:"Ex-Mann, Teenie-Schwarm, Tierpfleger"}]}
 ]
};

/* Vorspann (S. 78–79) */
TA_TEXT["ark/vor/realitaet"] = [
 "Deine Realität beschreibt deine Geschichte, deine früheren Umstände und deine gegenwärtigen Lebensverhältnisse zu Beginn deiner Beschäftigung bei der Agency. Dein Zuhause, deine außerschulischen Aktivitäten, deine Beziehungen und deine Verpflichtungen sind hilfreich in dieser einen Kategorie abgeschottet, die dem Berufsleben nur minimalen Nutzen bringt und nach Möglichkeit gemieden werden sollte. Wie du lernen wirst, bieten deine banalen Beziehungen und Bestrebungen nur kurzfristige und kurzsichtige Vorteile. Notfalls kann es allerdings deine Leistung im Außendienst verbessern, sie als Motivation zu nutzen.",
 {t:"h", x:"Aufbau eines Eintrags"},
 {t:"liste", x:[
  "**Name der Realität** in großen Buchstaben. Die Barista-Abteilung führt eine Wortwolke über alles, was über Mitarbeiter der jeweiligen Art gesagt wird, und wählt daraus ihren Favoriten für den endgültigen Namen.",
  "**Fotografie** eines unserer Agenten jeder Art, in einem ungezwungenen Moment aufgenommen.",
  "**Kategorie** des ARK-Stücks, das du gerade ansiehst, als hilfreicher und stilvoller Untertitel. Bitte lies dieses Wort, falls du sonst keines liest.",
  "**Kleiner Spruch** mit Warnung, Erklärung oder Komik, geliefert von der Clown-Abteilung.",
  "**Kurzbeschreibung** der typischen Eigenschaften dieser Realität, einige zum Ausnutzen und viele zum Abgewöhnen.",
  "**Tabelle**: In den meisten Fällen eine hilfreiche Tabelle, mit der du die Einzelheiten eingrenzt, wer du bist. <Bestimme/Würfle auf> ein wichtiges Detail über dich."
 ]},
 {t:"h", x:"Realitäts-Auslöser"},
 "Dein **Realitäts-Auslöser** ist eine Verwundbarkeit oder Schwäche, mit der Anomalien dich manipulieren werden, während du im Außendienst arbeitest. Indem sie Chaos ausgeben, können Anomalien deine Unsicherheiten verstärken und deine Ängste wahr werden lassen. Es ist deine Pflicht, nicht zuzulassen, dass diese Herausforderungen deine Arbeit beeinträchtigen. Ignorierst du sie jedoch deutlich genug, verlierst du womöglich den Zugang zu deiner Lebensweise vollständig und musst eine neue Realität wählen.",
 {t:"h", x:"Burnout-Ventil"},
 "Dein **Burnout-Ventil** ist eine Situation, in der Agenten wie du besonders motiviert sind und Burnout ignorieren können ({S.35}). Situationen herbeizuführen, die dein Burnout-Ventil auslösen, ist ein wichtiger Weg, im Außendienst beständige Ergebnisse zu sichern.",
 {t:"h", x:"Fragen zum Arbeitsantritt"},
 "Wir nutzen dieses Formular außerdem, um wichtige demografische Daten in Form von Fragen zum Arbeitsantritt zu erheben, die von der Reception-Abteilung entworfen wurden. Deine Antworten auf diese Fragen sind nicht privat und dürfen für Marketingzwecke verwendet werden.",
 {t:"h", x:"Beziehungsmatrix"},
 "Schließlich bietet deine Beziehungsmatrix eine praktische Möglichkeit, deine wichtigsten Beziehungen zu veranschaulichen. Das sind die Menschen, die für dein Leben am wichtigsten sind und die am wahrscheinlichsten immer wieder auftauchen, während du deine Karriere als vollendeter Außendienst-Agent verfolgst. Unternehmungslustige Agenten lernen vielleicht, diese Beziehungen zu nutzen, um Zugang zu ihrem Spezialwissen, ihren gesellschaftlichen Verbindungen und ihrem Haushaltswerkzeug zu erhalten."
];

TA_TEXT["ark/realitaet/overbooked"] = {
 motto:"Man kann gar nicht zu viel zu tun haben.",
 l:["Overbooked-Agenten behalten aus Stolz oder Notwendigkeit eine zweite Arbeit in der banalen Welt. Meist zum Wohle anderer arbeitend, will der Overbooked es gut machen und verpflichtet sich, zwei volle Terminkalender zu bedienen. Wer dieses Dilemma meistert, erntet die Anerkennung mehrerer Gruppen, Erfüllung in verschiedensten Lebensbereichen und ein Vermächtnis, das doppelt so groß ist wie der Durchschnitt. Es ist außerdem eine gewaltige Zeitverschwendung.",
  "Die Prioritäten dieser Gruppe sind verschwommen, ihr Fokus unbeständig und ihre Knoten gordisch. Die banale Welt kreischt ihnen ständig ins Ohr wie so viele Küken. Alles in ihrem Leben ist Arbeit, also ziehen ihre Beziehungen sie noch tiefer auf einen Pfad unnötiger Verpflichtungen. Es ist nur eine Frage des Wann, nicht des Ob, bis sie das Gleichgewicht verlieren und sowohl an der Agency als auch an sich selbst scheitern.",
  "Dennoch lässt sich der Reiz perfekter Effizienz nicht leugnen, und Agenten mit diesem Lebensstil können es sich nicht leisten, auf ihrer Reise zum Alles-haben zu scheitern.",
  {t:"w4", h:"Beruf", b:["Bestimme, was für einen Beruf du hast: Würfle auf der Tabelle unten oder denk dir selbst einen aus:"], x:["Journalist","Pflichtverteidiger","Nachhilfelehrer","Bildhauerassistent"]}],
 r:[
  {t:"ausloeser", h:"Realitäts-Auslöser: Diensthandy", b:[
   ["Du hast ein Smartphone, das ausschließlich deinem Beruf gewidmet ist. Der GM darf den Realitäts-Auslöser nutzen, damit eine deiner Beziehungen dieses Telefon jederzeit anruft. Ignorierst du es, verliert diese Beziehung eine Verbindung.",
    "Versäumst du die notwendigen Pflichten deines Berufs oder verlierst du dein Telefon, markiere das nächste leere Kästchen auf einer Leiste „Etwas gibt nach“ mit vier Kästchen."],
   ["Geschieht das, während alle Kästchen markiert sind, ist dein Beruf unwiderruflich beendet. Ist er auf diese oder irgendeine andere Weise beendet, musst du eine neue Realität wählen.",
    {t:"spur", h:"Etwas gibt nach", x:["1","2","3","4","X"]}]]},
  {t:"sp", eng:1, x:[
   [{t:"ventil", h:"Burnout-Ventil: Durchs Nadelöhr", x:"Wenn du etwas tust, das als Arbeit oder Übung für deinen Beruf zählt, ignoriere jeden Burnout."}],
   [{t:"fragebogen", x:["Was ist die schwierigste Entscheidung, die du je getroffen hast?", "Was Schreckliches passiert, wenn du deine Verantwortung aufgibst?", "Wie feierst du Siege?"]}]]},
  {t:"matrix", art:"streu", b:["Du hast drei Kern-Beziehungen, die deine Anker in der Gesellschaft sind. Bestimme sie, indem du die Fragen deiner Beziehungsmatrix beantwortest.", "Sobald jede Beziehung feststeht, weise jede einem anderen <Agenten/Spieler> am Tisch zu. Ist die Figur in einer Szene anwesend, spielt sie der zugewiesene <Agent/Spieler>.", "Gib der Beziehung, die dir am nächsten steht, **6 Verbindung**. Gib den beiden anderen **{3} Verbindung**."],
   x:[{f:"Wer ist dein anderer Chef?", bsp:"Fast-Food-Filialleiter, Doktorvater, Instagram-berühmter Hund"},
      {f:"Wem liegt deine Gesundheit am meisten am Herzen?", bsp:"Kioskbetreiber, Elternteil, Nachbar"},
      {f:"Für wen bist du verantwortlich?", bsp:"Galerieassistent, IT-Praktikant, vorlautes Kind"}]}
 ]
};

TA_TEXT["ark/realitaet/pursued"] = {
 motto:"Sie wissen, was du bist. Bald wissen sie auch, wo.",
 l:["Der Pursued versteckt sich vor seiner Vergangenheit. Unschuldig oder schuldig, edel oder tragisch: Er lebt in ständiger Furcht vor einer Geschichte, die ihn nicht gehen lassen will. Das nenne ich Hingabe!",
  "Einfallsreich, zäh und kreativ sind Pursued-Agenten erstklassige Vorbilder für kreative Problemlösung und eine ergebnisorientierte Arbeitsweise. Ein Leben in ständiger Wachsamkeit lehrt sie, auf Zack zu bleiben, ihre Worte zu bedenken und in ihrer Moral flexibel zu sein. Perfekte Angestellte.",
  "Die Agency gibt diesen Agenten oft ein neues Leben und stellt sie in Außenteams weit entfernt von denen ein, die sie jagen. Ihre Herkunft vollständig auszulöschen ist jedoch unmöglich. Selbst ohne das Potenzial für Lose Enden würden sie die Furcht verlieren, die sie so produktiv hält!",
  {t:"html", x:'<div class="rl-dp"><h3>Dunkle Vergangenheit</h3><p>Deine Kollegen kennen deine Geschichte nicht, und du solltest sie vermutlich nicht teilen. Wähle die Kategorie, die deine Lage am besten beschreibt, und erzähle dem GM die Einzelheiten unter vier Augen.</p><table><tr><td>Kriminell</td><td>Du versteckst dich vor einem deiner eigenen Verbrechen und wirst von der Strafverfolgung oder deinen früheren Opfern gesucht.</td></tr><tr><td>Gejagt</td><td>Jemand oder etwas hat es auf dich abgesehen. Vielleicht sind andere wie du gefallen … doch dein einziger Ausweg ist, dich zu verstecken.</td></tr><tr><td>Kurzer Botengang</td><td>Die Verantwortung wurde zu schwer zu tragen. Du hast Menschen zurückgelassen, die auf dich zählten, und sie suchen immer noch.</td></tr></table></div>'}],
 r:[
  {t:"ausloeser", h:"Realitäts-Auslöser: Auf deiner Spur", b:[
   ["Der GM darf den Realitäts-Auslöser nutzen, um eine Person hervorzuheben, die dich erkennt und denen Bericht erstatten wird, die dich suchen. Nimmst du dir nicht die Zeit, sie von deiner Fährte abzubringen, wühlen sie in deinem Privatleben herum. Die Beziehung, die am wenigsten über dich weiß, verliert eine Verbindung und stellt dir in deiner nächsten Szene mit ihr einige schwierige Fragen.",
    "Offenbarst du deine neue Identität oder deinen neuen Aufenthaltsort Leuten, die dich erkennen würden, markiere"],
   ["das nächste leere Kästchen auf einer Leiste „Erwischt“ mit vier Kästchen. Geschieht das, während alle Kästchen markiert sind, holt deine Vergangenheit dich ein. Tut sie das, durch diesen Effekt oder anderweitig, musst du eine andere Realität wählen.",
    {t:"spur", h:"Erwischt", x:["1","2","3","4","X"]}]]},
  {t:"sp", eng:1, x:[
   [{t:"ventil", h:"Burnout-Ventil: Ich war's nicht", x:"Wenn du etwas tust, das deine Spuren verwischt, ignoriere jeden Burnout."}],
   [{t:"fragebogen", x:["Was vermisst du an deinem alten Leben am meisten?", "Wann fühlst du dich am mächtigsten?", "Wenn du eine wohltätige Organisation leiten würdest, für welche Sache würdest du dich starkmachen?"]}]]},
  {t:"matrix", art:"sankey", b:["Du hast drei Kern-Beziehungen, die deine Anker in der Gesellschaft sind. Bestimme sie, indem du die Fragen deiner Beziehungsmatrix beantwortest.", "Sobald jede Beziehung feststeht, weise jede einem anderen <Agenten/Spieler> am Tisch zu. Ist die Figur in einer Szene anwesend, spielt sie der zugewiesene <Agent/Spieler>.", "Gib der Beziehung, die dir am nächsten steht, **6 Verbindung**. Gib den beiden anderen **{3} Verbindung**."],
   x:[{f:"Wer weiß von deinem Verfolger?", bsp:"Arbeitgeber, Geschwister, Mitgejagter"},
      {f:"Wen würde die Wahrheit am meisten verletzen?", bsp:"Deckfreund, betagte Vermieterin, Kind"},
      {f:"Wer ist besessen vom neuen Du?", bsp:"Skateboard-Teenie, schwärmender Nachbar, Model-Agent"}]}
 ]
};

TA_TEXT["ark/realitaet/star"] = {
 motto:"Auf dem Weg nach oben … vorerst.",
 l:["Durch ihr Talent, ihre Fähigkeiten oder angeborene Ausstrahlung erlangen Star-Agenten mühelos Zuneigung und Bewunderung, wohin sie auch gehen. Ihre weltweite Reichweite und sofortige Wiedererkennung öffnen Türen und ziehen Gefälligkeiten an. Ob Popkünstler, politischer Brandstifter oder berühmt dafür, berühmt zu sein: Zeuge des einmaligen Talents des Stars zu werden, ist Belohnung und Selbstzweck zugleich. Das ist natürlich eine gewaltige Belastung.",
  "In einer Laufbahn, die Diskretion, Verschwiegenheit und die Vermeidung Loser Enden gewidmet ist, sind Legionen lärmender, unersättlicher Fans ein ewiger Stolperdraht. Freunde, die diese Agenten finden, haben tendenziell nur ihren eigenen Vorteil im Sinn. Die Presse beobachtet sie ständig auf ungewöhnliches Verhalten. Und all das wird verschärft durch das beträchtliche Ego, das nötig ist, um eine solche Stellung in der Welt zu halten.",
  "Doch kein Star ist gegen Verblassen oder Fallen gefeit, und das verzweifelte Bedürfnis nach Anerkennung, das alle aufstrebenden Persönlichkeiten des öffentlichen Lebens haben, hält diese Agenten auf den Erfolg fokussiert. Nichts ist peinlicher als eine halb erledigte Arbeit!",
  {t:"w4", h:"Das gewisse Etwas", b:["Bestimme, wodurch du berühmt geworden bist, indem du auf der Tabelle unten würfelst oder dir selbst etwas aussuchst."], x:["Schauspieler","Romanautor","Wirtschaftsguru","Musiker"]}],
 r:[
  {t:"ausloeser", h:"Realitäts-Auslöser: Dein größter Fan", b:[
   ["Du hast überall Fans, und alle wollen die Gelegenheit, mit dir zu sprechen. Der GM darf den Realitäts-Auslöser nutzen, damit dich jemand erkennt und verzweifelt auf deine Aufmerksamkeit aus ist. Ignorierst du ihn, macht er jetzt eine Szene und beschwert sich später im Netz: Die Beziehung, die am meisten verlöre, wenn du aus dem Ruhm fielst, verliert eine Verbindung.",
    "Tust du etwas, das deinem Ruf schadet, beginnt dein Ruhm zu schwinden."],
   ["Markiere das nächste leere Kästchen auf einer Leiste „Gefallen“ mit vier Kästchen. Ist die Leiste „Gefallen“ voll oder gibst du deine Ziele auf, ist dein Aufstieg zum Starruhm beendet: Du musst eine neue Realität wählen.",
    {t:"spur", h:"Gefallen", x:["1","2","3","4","X"]}]]},
  {t:"sp", eng:1, x:[
   [{t:"ventil", h:"Burnout-Ventil: Genieß es", x:"Wenn du etwas tust, das deine Überlegenheit behauptet oder deinen Wert beweist, ignoriere jeden Burnout."}],
   [{t:"fragebogen", x:["Wer ist dein persönliches Idol?", "Wozu wirst du zurückkehren müssen, wenn du das Rampenlicht verlierst?", "Welches Tier verkörpert dich am besten?"]}]]},
  {t:"matrix", art:"radar", b:["Du hast drei Kern-Beziehungen, die deine Anker in der Gesellschaft sind. Bestimme sie, indem du die Fragen deiner Beziehungsmatrix beantwortest.", "Sobald jede Beziehung feststeht, weise jede einem anderen <Agenten/Spieler> am Tisch zu. Ist die Figur in einer Szene anwesend, spielt sie der zugewiesene <Agent/Spieler>.", "Gib der Beziehung, die dir am nächsten steht, **6 Verbindung**. Gib den beiden anderen **{3} Verbindung**."],
   x:[{f:"Wer ist dein Manager?", bsp:"Bühnenmutter, Talentagent, Stabschef"},
      {f:"Wer ist dein größter Rivale?", bsp:"Sieht aus wie du, bei allen beliebter, berühmter Ex"},
      {f:"Wer ist aus deinem früheren Leben geblieben?", bsp:"früherer Duettpartner, Schulschatz, Tanzlehrer"}]}
 ]
};

TA_TEXT["ark/realitaet/struggling"] = {
 motto:"Zwischen einem Felsen und einem Felsen und noch einem Felsen und noch einem …",
 l:["Belastet von hohen Schulden, laufenden Ausgaben oder fehlendem Einkommen, kommt der Struggling-Agent nie ganz über die Runden. Er verlässt sich auf die Unterstützung anderer, erträgt unerfreuliche Umstände und feilscht aus der Not heraus. Er ist der Traum jedes Arbeitgebers!",
  "Die Agency würde gern helfen, doch das liegt meist nicht in unserem Budget. Glücklicherweise hat die Lage des Struggling offensichtliche Vorteile: Er übernimmt mehr Schichten, arbeitet länger und verbessert sich augenblicklich unter Kündigungsandrohung. In vielen Fällen tut er all das sogar in unbezahlten Stellen und ist zum Überleben ganz auf Belobigungen angewiesen.",
  "Auch ihren Kollegen verschaffen sie Zusatzleistungen: Berichten zufolge verbessert sich die Moral der meisten Agenten dramatisch, wenn sie einen Struggling-Agenten haben, mit dessen Lebensstil sie vergleichen können.",
  "Struggling-Agenten müssen sich daran erinnern, dass Arbeit nährt und die Karriereleiter ausreichend Obdach bietet, und dass es deshalb nicht nötig ist, Schulden wegzuwinken oder Gewinnlose zu „finden“. Anomale Fähigkeiten sind für den privaten Gebrauch nicht zugelassen.",
  {t:"w4", h:"Schuldenursache", b:["Bestimme, was dich in diese Lage gebracht hat, indem du auf der Tabelle unten würfelst oder dir selbst etwas aussuchst."], x:["Studienkredite","Arztrechnungen","Auf einen Betrug hereingefallen","Jemand braucht es dringender"]}],
 r:[
  {t:"ausloeser", h:"Realitäts-Auslöser: Motten im Portemonnaie", b:[
   ["Der Struggling hat nie genug Geld, und die Welt ist teuer. Der GM darf den Realitäts-Auslöser nutzen, damit etwas, das du zahlen musst (*Taxifahrt, Eintritt usw.*), mehr kostet, als du dir leisten kannst. Findest du keinen Weg, die Zahlung zu umgehen, musst du dir von einem Freund etwas borgen: Eine deiner Beziehungen, von dir gewählt, verliert eine Verbindung.",
    "Kommst du zu einer großen Geldsumme, melden sich deine Schulden, und sie ist schnell wieder weg."],
   ["Markiere das nächste leere Kästchen auf einer Leiste „Zurück auf null“ mit vier Kästchen. Geschieht das, während alle vier Kästchen markiert sind, oder findest du einen Weg, deiner Verantwortung dauerhaft zu entkommen, musst du eine neue Realität wählen.",
    {t:"spur", h:"Zurück auf null", x:["1","2","3","4","X"]}]]},
  {t:"sp", eng:1, x:[
   [{t:"ventil", h:"Burnout-Ventil: Keinen Cent mehr", x:"Wenn du etwas tust, das dir ein gutes Geschäft verschafft, ignoriere jeden Burnout."}],
   [{t:"fragebogen", x:["Was ist das Teuerste, das du dir gern kaufen würdest?", "Was bekommst du nie zurück?", "Welches Kunstwerk war das erste, in das du dich verliebt hast?"]}]]},
  {t:"matrix", art:"schwarm", b:["Du hast drei Kern-Beziehungen, die deine Anker in der Gesellschaft sind. Bestimme sie, indem du die Fragen deiner Beziehungsmatrix beantwortest.", "Sobald jede Beziehung feststeht, weise jede einem anderen <Agenten/Spieler> am Tisch zu. Ist die Figur in einer Szene anwesend, spielt sie der zugewiesene <Agent/Spieler>.", "Gib der Beziehung, die dir am nächsten steht, **6 Verbindung**. Gib den beiden anderen **{3} Verbindung**."],
   x:[{f:"Auf wen verlässt du dich für ein Dach über dem Kopf?", bsp:"Elternteil, Jahrmarkt-Kraftprotz, Büroleiter"},
      {f:"Wem schuldest du das meiste Geld?", bsp:"Vermieter, Kredithai, wohlhabender Freund"},
      {f:"Für wen willst du am meisten dein Leben in den Griff bekommen?", bsp:"Ex-Frau, Neffe, Lieferfahrer"}]}
 ]
};

TA_TEXT["ark/realitaet/newborn"] = {
 motto:"Schon blaue Feen getroffen?",
 l:["Ob frisch geschlüpft, kürzlich hochgefahren oder einfach neu in unserer Welt: Newborn-Agenten sind mit dem modernen Leben nicht vertraut. Die meisten Newborns können nicht lesen, daher gehen wir davon aus, dass ein vertrauenswürdiger Vormund ihnen den Inhalt dieser Seite auslegt. Vormund: Sobald du diesem Agenten geholfen hast, seine ARK zusammenzustellen, melde dich bitte zur Bearbeitung und Dekontamination bei der Personalabteilung."],
 r:[
  {t:"ausloeser", h:"Realitäts-Auslöser: Noch am Lernen", b:[
   ["Der GM darf den Realitäts-Auslöser nutzen, damit du vergisst – oder nie wusstest –, wie eine gewöhnliche Alltagstätigkeit geht (*eine Tür öffnen, einen Toaster bedienen, eine Waffe abfeuern, das Wort „Ohrenschmalz“ sagen usw.*). Du kannst es gerade nicht richtig und musst Hilfe oder einen anderen Weg suchen. Nimmst du dir nicht die Zeit, eines von beidem zu finden, treibt dich die Verlegenheit in den Rückzug: Die Beziehung, auf deren Meinung du am meisten Wert legst, verliert eine Verbindung."],
   ["Veränderst du etwas an dir, um in die Welt zu passen, markiere das nächste leere Kästchen auf einer Leiste „Selfmade“ mit vier Kästchen. Geschieht das, während alle vier Kästchen markiert sind, oder findest du einen Weg, deiner Verantwortung dauerhaft zu entkommen, musst du eine neue Realität wählen.",
    {t:"spur", h:"Selfmade", x:["1","2","3","4","X"]}]]},
  {t:"sp", eng:1, x:[
   [{t:"ventil", h:"Burnout-Ventil: Wie zu Hause", x:"Wenn du etwas tust, das die Welt mehr wie dich sein lässt, ignoriere jeden Burnout."}],
   [{t:"fragebogen", x:["Wie bist du hier gelandet?", "Was hat dich zuletzt völlig einsam fühlen lassen?", "Wenn die Woche einen Tag mehr hätte, wie würdest du ihn nutzen?"]}]]},
  {t:"matrix", art:"blasen", b:["Du hast drei Kern-Beziehungen, die deine Anker in der Gesellschaft sind. Bestimme sie, indem du die Fragen deiner Beziehungsmatrix beantwortest.", "Sobald jede Beziehung feststeht, weise jede einem anderen <Agenten/Spieler> am Tisch zu. Ist die Figur in einer Szene anwesend, spielt sie der zugewiesene <Agent/Spieler>.", "Gib der Beziehung, die dir am nächsten steht, **6 Verbindung**. Gib den beiden anderen **{3} Verbindung**."],
   x:[{f:"Wer ist dein Lieblingslehrer?", bsp:"Kioskbesitzer, frühreifes Kind, Radio-DJ"},
      {f:"Wer verlässt sich auf deine ungewöhnliche Sichtweise?", bsp:"Mechaniker, CIA-Führungsoffizier, dein Adoptivbruder"},
      {f:"Wer nutzt deine Naivität liebend gern aus?", bsp:"Casinobesitzer, böses Kind, Moderator einer Streichsendung"}]}
 ]
};

TA_TEXT["ark/realitaet/romantic"] = {
 motto:"Versuch, sie das Spiel hassen zu lassen.",
 l:["Der Romantic verliebt sich im Guten wie im Schlechten extrem leicht. Aus seinem Charme spinnt er ständig ein kompliziertes Netz, ob er nun neue Eroberungen sucht, unabsichtlich verführerisch ist oder einfach sein Herz vor dem Verstand einsetzt. Wir sind nicht ganz sicher, was mit ihnen los ist.",
  "Notorische Menschenfreunde: Ihre scharfe Aufmerksamkeit für die Interessen anderer ist ein unersetzlicher Gewinn für jedes Außenteam. Die Geschwindigkeit, mit der sie persönliche Bindungen knüpfen, ist entscheidend in einem Berufsfeld, das sich darüber definiert, Vertrauen zu gewinnen und daraus Profit zu schlagen. Leider können diese Bindungen unbeaufsichtigte Romantic-Agenten in komplexe emotionale Netze verstricken, die sie selbst gesponnen haben.",
  "Es ist zwar wertvoll, wenn Angestellte die Anerkennung und Bestätigung ihrer Vorgesetzten suchen, doch das Ausmaß, in dem diese Agenten je nach der Sicht anderer auf sie aufblühen oder scheitern, trägt ihnen den Ruf der Zerstreutheit und Flatterhaftigkeit ein.",
  "Am Ende haben wir Glück, dass die Probleme, die sie schaffen, genau die sind, die sie am liebsten lösen. Romantics scheinen einen bizarren Energieschub zu bekommen, sobald man sie nicht mag, und gehen über jedes Maß hinaus, um in die Gunst der anderen zurückzufinden.",
  {t:"w4", h:"Kriegt dich immer", b:["Bestimme, was dir an Menschen zuerst auffällt, indem du auf dieser Tabelle würfelst oder dir selbst etwas aussuchst."], x:["Augen","Talent","Mode","Ennui"]}],
 r:[
  {t:"ausloeser", h:"Realitäts-Auslöser: Oh nein, sind die heiß", b:[
   ["Du kannst nicht ignorieren, wenn sich eine Gelegenheit bietet. Der GM darf den Realitäts-Auslöser nutzen, damit dir ein Knistern auffällt. Dieses Knistern kann echt oder völlig eingebildet sein. Wenn du deine Chance nicht nutzt, grübelst du über die verpasste Verbindung und kannst kaum noch bei der Sache sein: Die Beziehung, mit der du dich am ehesten echt verbunden fühlst, verliert 1 Verbindung.",
    "Jedes Mal, wenn eine bestehende Beziehung einer neuen im Weg steht, markiere das nächste leere"],
   ["Kästchen auf einer Leiste „Angekommen“ mit vier Kästchen. Geschieht das, während alle vier Kästchen markiert sind, weißt du, dass du das, was du suchst, gefunden hast oder vielleicht schon gefunden hast. Du musst eine neue Realität wählen.",
    {t:"spur", h:"Angekommen", x:["1","2","3","4","X"]}]]},
  {t:"sp", eng:1, x:[
   [{t:"ventil", h:"Burnout-Ventil: Stimmt, ich bin heiß", x:"Wann immer du etwas tust, das dich attraktiver oder sympathischer wirken lässt, ignoriere jeden Burnout."}],
   [{t:"fragebogen", x:["Was ist die anziehendste Eigenschaft an einem Menschen?", "Was an dir hoffst du, dass niemand tief genug blickt, um es zu sehen?", "Welche drei Dinge würdest du auf eine einsame Insel mitnehmen?"]}]]},
  {t:"matrix", art:"raster", b:["Du hast drei Kern-Beziehungen, die deine Anker in der Gesellschaft sind. Bestimme sie, indem du die Fragen deiner Beziehungsmatrix beantwortest.", "Sobald jede Beziehung feststeht, weise jede einem anderen <Agenten/Spieler> am Tisch zu. Ist die Figur in einer Szene anwesend, spielt sie der zugewiesene <Agent/Spieler>.", "Gib der Beziehung, die dir am nächsten steht, **6 Verbindung**. Gib den beiden anderen **{3} Verbindung**."],
   x:[{f:"Wer ist deine längste Situationship?", bsp:"wöchentlicher Grindr-Kontakt, die beste Freundin der Freundin der besten Freundin, diese eine Person auf allen Hochzeiten"},
      {f:"Wer hat dich nie, nie, nie attraktiv gefunden?", bsp:"Personal Trainer, Chef, Busenfreundin aus der Mittelstufe"},
      {f:"Bei wem übersiehst du die romantischen Möglichkeiten völlig?", bsp:"aufmerksamer Barkeeper, Schulter zum Ausweinen, Geist in deinem Haus"}]}
 ]
};

TA_TEXT["ark/realitaet/backbone"] = {
 motto:"Wäre es doch nur einsam an der Spitze.",
 l:["Ob Buchclub oder politische Dynastie: Backbone-Agenten leiten eine Organisation aus mehreren hingebungsvollen Mitgliedern. Diese Position zu halten und zu pflegen verschafft ihnen Privilegien, Prestige und Macht. Nicht, dass es ihnen guttäte.",
  "Agenten mit solch weitreichenden Verpflichtungen außerhalb des Arbeitsplatzes sind im Außendienst beständige Multitasker. Trotz dringenderer Pflichten leisten sie oft Gefälligkeiten, schlichten Streit und fangen den Schlendrian ihrer vielen Mitglieder auf. Ihr immenser Stolz auf ihre Organisation macht sie anfällig für Ablenkungen, Erpressungsmaschen und Schmutzkampagnen. Und ihre Fixierung darauf, ihre Anhänger bei Laune zu halten, bedeutet, dass sie viel zu bereit sind, Dinge auszudiskutieren, wo eine knappe, schlichte E-Mail genügen würde.",
  "Dennoch erweisen sich diese Agenten, wenn sie angespornt werden, einer Mission ihre volle Aufmerksamkeit zu widmen, als wirksam, effizient und geschickt darin, die Stimmung gesellig zu halten. Fragt sie nur nicht nach ihren Wochenendplänen.",
  {t:"w4", h:"Organisation", b:["Du bist der Anführer einer Organisation in der Stadt. Diese Organisation hat mindestens zehn Mitglieder und trifft sich mindestens einmal pro Woche. Die Mitglieder helfen dir und widersetzen sich dir nie offen, solange du ersichtlich in Organisationsangelegenheiten unterwegs bist.", "Würfle auf der Tabelle unten oder erfinde eine eigene:"], x:["Verbrecherfamilie","Religiöse Sekte","Spieleclub","Unabhängiger Laden"]}],
 r:[
  {t:"ausloeser", h:"Realitäts-Auslöser: Endlose Verantwortung", b:[
   ["Der GM darf den Realitäts-Auslöser nutzen, damit eines der Mitglieder deiner Organisation jederzeit mit einem Anliegen an dich herantritt. Ignorierst oder meidest du es, stehst du vor deiner Organisation und denen, die davon wissen, schlecht da: Eine Beziehung, gewählt vom Spieler deines Nachfolgers (siehe Beziehungsmatrix), verliert eine Verbindung.",
    "Brichst du die Regeln deiner Organisation oder blamierst du die anderen Mitglieder, markiere"],
   ["das nächste leere Kästchen auf einer Leiste „Abgesetzt“ mit vier Kästchen. Geschieht das, während alle Kästchen markiert sind, oder legst du dein Amt nieder, übernimmt dein Nachfolger die Organisation. Du musst eine neue Realität wählen.",
    {t:"spur", h:"Abgesetzt", x:["1","2","3","4","X"]}]]},
  {t:"sp", eng:1, x:[
   [{t:"ventil", h:"Burnout-Ventil: Hier, meine Karte", x:"Wenn du etwas tust, das den Einfluss deiner Organisation vergrößert, ignoriere jeden Burnout."}],
   [{t:"fragebogen", x:["Was ist das Größte, das jemand anderes für dich getan hat?", "Wie reagierst du auf ungebetene Kritik?", "Was ist dein liebstes Karaoke-Lied?"]}]]},
  {t:"matrix", art:"torte", b:["Du hast drei Kern-Beziehungen, die deine Anker in der Gesellschaft sind. Bestimme sie, indem du die Fragen deiner Beziehungsmatrix beantwortest.", "Sobald jede Beziehung feststeht, weise jede einem anderen <Agenten/Spieler> am Tisch zu. Ist die Figur in einer Szene anwesend, spielt sie der zugewiesene <Agent/Spieler>.", "Gib der Beziehung, die dir am nächsten steht, **6 Verbindung**. Gib den beiden anderen **{3} Verbindung**."],
   x:[{f:"Wer ist dein Nachfolger?", bsp:"Geschwister, intrigierender Leutnant, geliebtes Waisenkind"},
      {f:"Wer bedroht den Fortbestand deiner Organisation?", bsp:"rivalisierende Organisation, Lokalpolitiker, faules Ei"},
      {f:"Wer kann sich nicht einmal den Namen deiner Organisation merken?", bsp:"Schulleiter, Ehepartner, Kletterlehrer"}]}
 ]
};

TA_TEXT["ark/realitaet/creature"] = {
 motto:"Wie geht’s, werte Mitmenschen?",
 l:["Müde davon, am Rand der Gesellschaft zu leben, haben Creature-Agenten ihre Heimat verlassen, um sich der modernen Welt anzuschließen. Ob Vampir, Roboter oder mutierte Schildkröte: Diese Angestellten leben nun unter normalen Menschen unter angenommener Identität und sind fortwährend nur einen Fehltritt davon entfernt, entdeckt zu werden.",
  "Obwohl diese Agenten angeborene oder künstliche Mittel besitzen, sich nahtlos in die Menschheit einzufügen, ist ihre Selbstbeherrschung ihren unmenschlichen Begierden oft nicht gewachsen. Ob sie nach Sonnenlicht, Salzwasser oder Blut dürsten: Creature-Agenten verfolgen mit höherer Wahrscheinlichkeit als alle anderen Ziele, die in keinem Briefing vorkommen. Ihre Beziehungen neigen dazu, ihre Loyalitäten zu verwirren, und ihre Bräuche neigen dazu, ihre Zeugen zu verwirren.",
  "Doch ihr Wunsch dazuzugehören hält sie konzentriert, ihre Angst vor Entdeckung weckt Wachsamkeit, und hier bei der Agency finden wir, dass es nichts Edleres gibt, als zu versuchen, genau wie alle anderen zu sein."],
 r:[
  {t:"ausloeser", h:"Realitäts-Auslöser: Ja, sofort", b:[
   ["Dein wahres Selbst hat Bedürfnisse, die andere vielleicht verstehen, aber nie teilen könnten. Der GM darf den Realitäts-Auslöser nutzen, damit einer dieser Triebe an die Oberfläche deines Bewusstseins steigt. Ignorierst du diesen Drang, fällt es dir wegen der Willenskraft, die das Ignorieren kostet, schwer, mit anderen zu kommunizieren: Die Beziehung, die deine Tarnung am meisten glaubt, verliert eine Verbindung.",
    "Wird die Wahrheit über dich gestanden oder jemandem offenbart, markiere das nächste leere"],
   ["Kästchen auf einer Leiste „Enttarnt“ mit vier Kästchen. Geschieht das, während alle Kästchen markiert sind, oder wirst du öffentlich auf eine Weise bloßgestellt, die sich nicht rückgängig machen lässt, funktioniert deine Verkleidung nicht mehr. Kannst du weiterarbeiten, musst du eine neue Realität wählen.",
    {t:"spur", h:"Enttarnt", x:["1","2","3","4","X"]}]]},
  {t:"sp", eng:1, x:[
   [{t:"ventil", h:"Burnout-Ventil: Läuft bei mir", x:"Wenn du etwas tust, das dich weniger interessant wirken lässt, ignoriere jeden Burnout."}],
   [{t:"fragebogen", x:["Was hat dich bewogen, ein Leben in einer anderen Welt zu wählen?", "Was ist das Schlimmste, das deinen Freunden zustoßen könnte, wenn du deine Wachsamkeit senkst?", "Was ist deine liebste Redewendung?"]}]]},
  {t:"matrix", art:"kasten", b:["Du hast drei Kern-Beziehungen, die deine Anker in der Gesellschaft sind. Bestimme sie, indem du die Fragen deiner Beziehungsmatrix beantwortest.", "Sobald jede Beziehung feststeht, weise jede einem anderen <Agenten/Spieler> am Tisch zu. Ist die Figur in einer Szene anwesend, spielt sie der zugewiesene <Agent/Spieler>.", "Gib der Beziehung, die dir am nächsten steht, **6 Verbindung**. Gib den beiden anderen **{3} Verbindung**."],
   x:[{f:"Wer stammt vom selben Ort wie du?", bsp:"Lokalmeteorologe, Busfahrer, dein Schöpfer"},
      {f:"Wer hat dir beigebracht, dich unter normalen Menschen zu verstecken?", bsp:"Geistlicher, Abitur-Aufsicht, Tankstellenwart"},
      {f:"Wem möchtest du mehr über dein erstes Leben beibringen?", bsp:"Kind von nebenan, skrupelloser Immobilienentwickler, Briefträger"}]}
 ]
};
