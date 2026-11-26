/* You're in Space and Everything's Perfectly Fine – Crossover-Einsatz (PDF S. 1–20). Übersetzung aus dem Englischen.
   Nur die Triangle-Agency-Fassung: Teile für das zweite Spielsystem (Hinweiskästen mit Totenkopf, „For You're in Space …“, Monster S. 16–17) entfallen. */
window.TA_VAULT = window.TA_VAULT || {};
TA_VAULT["space"] = {
 cw: "Menschenversuche, Gefangenschaft, wiederholter Tod, Körperhorror, Hunger, Blut",
 reiterListe: [["profil","Anomalie"],["station","Station"],["s1","Schicht 1"],["s2","Schicht 2"],["s3","Schicht 3"],["s4","Schicht 4"],["s5","Schicht 5"],["s6","Schicht 6+"],["letzte","Letzte Schicht"],["nach","Abschluss"]],
 chaos: [],
 sonder: [
  {t:"klapp", h:"Chaos-Effekte bei dieser Anomalie", b:[
    {t:"h3", x:"Anziehen"},
    "Anziehen ist ein sehr wichtiges Mittel, um bei dieser Anomalie Beziehungen ins Spiel zu bringen. Eine Beziehung eines Agenten an Bord zu holen ist sehr gefährlich, kann aber äußerst fesselnd sein. Nutze diesen Effekt, um zu enthüllen, dass jemand mit der jüngsten Fähre voller Bewohner auf die PT-Station gekommen ist.",
    {t:"h3", x:"Manifestieren, Verdoppeln, Verdreifachen"},
    "Statt Kleiner Anomalien (im Weltraum mit so wenigen Menschen schwer herbeizurufen) versetzt diese Anomalie Dr. Healys Experimente von Ort zu Ort. Zu denselben Kosten heißen diese Effekte **Transport, Doppelter Transport, Dreifacher Transport.**",
    "Sie erschaffen gewalttätige und einsperrende Gegner mit folgenden Änderungen: Die Gegner gelten als gewöhnlich und überstehen je 3 Schaden, bevor sie getötet werden. Diese Monster können viele Gestalten annehmen, bestehen aber immer aus verdrehtem, verändertem Fleisch.",
    "Geraten die Agenten durch ihr eigenes Verhalten nicht mit dem Fleischdrachen aneinander, kannst du ihn auch mit Dreifachem Transport ins Spiel bringen. Der Fleischdrache kann 3 Schaden auf einmal zufügen und übersteht 5 Schaden, bevor er getötet wird.",
    {t:"h3", x:"Versetzen"},
    "Die Anomalie erwartet, dass alle Dr. Healys Genie begreifen. Bietet sich die Gelegenheit, zeigt sie ihnen das Labor und erwartet, dass es sie mit Staunen erfüllt; den Eröffnungstext dieses Einsatzes (das Fundstück) kannst du als Text im Spiel verwenden, falls das hilft!"
  ]}
 ],
 sonderP: 18,
 zieleP: 18,
 ziele: [
  {art:"bel", n:1, x:"jedes Mal, wenn du einem Monster einen Namen gibst"},
  {art:"bel", n:3, x:"für den ersten Agenten, der die Hungrigen satt macht"},
  {art:"bel", n:3, x:"für jeden Agenten, der Kunst erschafft"},
  {art:"ver", n:1, x:"jedes Mal, wenn du Blut berührst, das nicht dein eigenes ist"}
 ],
 reiter: {
  profil: [
   {t:"Fundstück", p:1, b:[
    {t:"labor", x:[
     "Ein warmer Becher Kaffee ruht in deinen Händen. Ein Monitor links von dir liefert Messwerte: Herzfrequenzen, Zeitstempel, Todesursachen. Du siehst kaum hin. Der Computer kümmert sich darum. Nein, deine Aufmerksamkeit gilt dem weiten Labor, das sich unter dir ausbreitet, perfekt sichtbar durch eine Glaswand ohne einen einzigen Fleck.",
     "Assistenten in Laborkitteln wie deinem, nur nicht ganz so schön, wandern von Tisch zu Tisch, spähen in Labyrinthe und begutachten die Ratten. Dein Blick bleibt an einer hängen – **Experiment#033** –, das gerade einen Test beginnt. Ein sanfter Summer ertönt, und eine Kapsel öffnet sich.",
     "Ratte#033 huscht heraus: **2:45:31 Uhr.** Dein Monitor bestätigt ein Herz, das bereits rast. #33 weiß, was kommt. Das Labyrinth wurde seit dem letzten Versuch umgebaut, aber sie verliert keine Zeit damit, die frühen Sackgassen zu erkennen. Ein paar Sekunden später – **2:45:39 Uhr** – gibt der Assistent mit erhobener Hand ein Zeichen.",
     "Du löst deine Finger vom Henkel des Bechers und drückst den Knopf. Du weißt, welchen. Du musst nicht hinsehen. Ein weiterer Summer ertönt, tiefer, und #33 rennt los. Die Herzfrequenz steigt weiter. Ihre neuen Verfolger sind einer deiner Entwürfe, schnell und tödlich. **Lauter, als dir lieb ist,** aber sie erledigen ihre Arbeit.",
     "Links. Rechts. Eine Sackgasse. Von hier aus hörst du das Kreischen nicht, aber du weißt, dass die Ratte es hört. Ein hastiger Rückzug um die Ecke. Dein Kaffee kräuselt sich unter der ungleichmäßigen Anspannung deiner Hände, die sich erwartungsvoll um den Becher krampfen. Noch eine Abzweigung, noch eine Sackgasse.",
     "Diese wird die letzte sein, und die Ratte weiß es auch. Sie weicht an die Wand zurück und stellt sich hoch auf die Hinterbeine. In ihrer Hand dreht sich etwas – **ein Sägeblatt?** Wo hat sie das her? Egal. Sie erledigt einen, zwei ihrer Verfolger, aber hinter der Ecke sind noch mehr.",
     "**Todeszeitpunkt: 2:47:21.** Länger als beim letzten Mal, kein Rekord. Deine Anspannung löst sich, während die Daten im Computer gespeichert werden. Ein paar Sekunden vergehen, während der Assistent das Labyrinth zurücksetzt. Dann ertönt ein sanfter Summer. Eine Kapsel öffnet sich. Ratte#033 huscht heraus, das Herz rast bereits.",
     "Versteht sie ihr Schicksal? Leidet sie? Leidet irgendeine von ihnen? Du fragst dich das kurz, aber dann machst du weiter. Wie es sein soll. Am Ende des Tages bist du glücklich."
    ], h:"Du bist in einem sauberen, verchromten Raum.", ende:"Und das ist alles, was für mich zählt."}
   ]},
   {t:"Überblick", p:14, b:[
    {t:"profil",
     lead:"Der Fokus der Anomalie ist Dr. Healy, und sie hat die Realität um Dr. Healy herum neu errichtet, um ihm genau das zu geben, was er will: einen endlosen Nachschub an Laborratten und Experimenten, um alle möglichen Daten über Menschen zu sammeln. Die Anomalie versteht anfangs nicht, warum Dr. Healy diese Informationen will, und es ist ihr auch egal.",
     fokus:"Dr. Healy.",
     domaene:"Die gesamte Station – mit potenziell endlosen Fassungen der Station, alle in surrealem Raum übereinandergeschichtet.",
     impuls:"Dafür zu sorgen, dass Dr. Healy ungestört bleibt und perfekt umsorgt wird."},
    {t:"h", x:"Was ist die Anomalie?"},
    "Die Anomalie entstand unmittelbar aus Dr. Healys Verlangen, verbunden mit dem weitverbreiteten Glauben der Öffentlichkeit an sein **„Genie“.** Sie beschützt den Doktor leidenschaftlich und glaubt fest daran, dass alles, was er will, an sich gut ist. Indem sie sofort jeden Impuls Dr. Healys erfüllte, selbst seine müßige Neugier, erschuf die Anomalie diese Folterszenarien für die Besucher der Raumstation.",
    "Parlow Technologies hat das Verschwinden von Menschen bisher vertuscht, weil Healy die unbegrenzten Mittel der Anomalie genutzt hat, um echte wissenschaftliche Fortschritte zu erzielen – darunter die **Erschaffung künstlich gezüchteter Monster** wie der Klingenknochigen und des Drachen.",
    {t:"h", x:"Erscheinung"},
    "Dr. Healy ist kein Resonant und kontrolliert die Anomalie nicht direkt. Die Erscheinung der Anomalie ist **sein Kaffeebecher** – ihre erste Handlung war, Dr. Healys Wunsch nach einer körperlichen Annehmlichkeit zu erfüllen. Immer verfügbar und immer genau richtig temperiert. Wird der Becher zerstört, wird die Anomalie instabil und kann gefangen, zerstört oder, wenn Nico in der Nähe ist, mit ihm gebunden werden."
   ]}
  ],
  station: [
   {t:"Die Station, wie sie war", p:4, b:[
    {t:"stationsplan"},
    {t:"h", x:"Ausgangslage"},
    "Vor zwei Jahren verkündete Dr. Cedrick Healy, Chefwissenschaftler von Parlow Technologies, er werde persönlich eine neue Studie zur Möglichkeit menschlichen Lebens im Weltraum leiten. Man hatte bereits eine Raumstation in eine Erdumlaufbahn gebracht, und nun konnten sich Zivilisten bewerben, um jeweils drei Monate dort zu leben.",
    "Sie würden für das Risiko gut bezahlt und in Sicherheitsvorschriften geschult, aber weil es gerade um die Machbarkeit zivilen Lebens ging, wählte man aus einem vielfältigen Kreis von Bewerbern aus den ganzen Vereinigten Staaten aus. Um das Vertrauen des Unternehmens in das Projekt zu zeigen, würde Dr. Healy für die gesamte Dauer des Experiments auf der Station bleiben.",
    "Die geringe Größe der Station schreckte manche ab, aber für etwas, das nur etwa zwölf Menschen beherbergen konnte, gingen unglaublich viele Bewerbungen ein. **In dem Jahr seit Beginn des Experiments sind 48 Menschen mit Fähren zur Station geflogen.**",
    "Es gibt nur 3 öffentliche Interviews mit zurückgekehrten Teilnehmern. **Alle drei hatten die Zeit ihres Lebens.**",
    {t:"raeume", p:5, x:[
     {r:"luft", b:["Hier legten Schiffe an der Raumstation an, damit die Passagiere die Station selbst betreten konnten. Die Station hat keine künstliche Schwerkraft, aber für alle, die etwas mehr Bodenhaftung wollen, gibt es **Magnetschuhe.** Außerdem gibt es **drei Rettungskapseln** für je vier Personen, die für einen Notabstieg zur Erde aktiviert werden können."]},
     {r:"gaenge", b:["Verchromt, hell erleuchtet, breit genug, dass zwei Menschen Schulter an Schulter stehen können. Notleuchten in Bodennähe **leuchten rot,** falls mit der normalen Beleuchtung etwas passiert."]},
     {r:"garten", b:["PT liefert mit jeder Fähre Vorräte, doch die Zivilisten auf der Station ergänzen sie, indem sie unter **künstlichem Licht und künstlicher Luftfeuchtigkeit** eigene Erzeugnisse anbauen. Klare Plastikvorhänge, die sich leicht auseinanderschieben lassen, trennen den Raum vom Gang. Drinnen sind die an den Tischen festgeschraubten Pflanzkästen voller köstlicher **Gemüse und Früchte.** Dies ist mit Abstand der größte Raum der Station, und hier verbringen die meisten ihre Tage mit Beschäftigung."]},
     {r:"kranken", b:[
      "Besetzt mit Dr. Healy und seinen beiden Assistenten, dem Chemiker **Dr. Gil Navarro** und der Psychiaterin **Dr. Beth Francis.** In der Krankenstation werden die zivilen Bewohner regelmäßig untersucht und zu den Auswirkungen der Station auf ihre Gesundheit und ihr Wohlbefinden befragt. Dr. Navarro nimmt seinen Patienten häufig Blut ab, das in **kleinen Fläschchen** aufbewahrt wird, beschriftet mit ihren Namen und der Nummer, die ihnen beim Betreten des Schiffs zugeteilt wurde. Dr. Francis führt bei verschlossenem Raum vertrauliche Gespräche zur psychischen Gesundheit, was alle nervt, weil sie dann den winzigen Gang auf der anderen Seite nehmen müssen.",
      "Hinten im Raum steht eine Maschine, die ein bisschen wie ein **Solarium** aussieht. Der gewölbte Deckel öffnet sich an einem Scharnier, sodass sich Patienten auf eine kalte Glasplatte legen und den Deckel wieder über sich schließen lassen können. Die Glasplatte – und das gleiche Glas darüber – leuchten blau, solange die Maschine läuft. Den Zivilisten wird gesagt, die Maschine durchleuchte ihren Körper auf Auffälligkeiten, aber es ist kein Röntgengerät. Man spürt dabei überhaupt nichts, und es dauert nur ein paar Sekunden."
     ]},
     {r:"aussicht", b:["Ein großer kugelförmiger Raum aus strahlungssicherem Glas mit Sitzen und Sicherheitsgurten zum Entspannen an der Innenwand. **Die Erde** ist von diesem Aussichtsdeck aus zu sehen, manchmal auch die Sonne."]},
     {r:"wohn", b:["Acht Etagenbetten, vier an jeder Wand, dienen den Zivilisten und Wissenschaftlern als Schlafplatz. Eine **Rehydrierstation, ein Umluftofen und ein Tisch** ermöglichen es ihnen, sich anzuschnallen und Zeit miteinander zu verbringen. Bücher, Medien und andere private Gegenstände, die sie mitgebracht haben, werden in **Spinden** am Fußende der Betten aufbewahrt, jeder mit einem Namensschild."]},
     {r:"ecke", b:["Wegen einer Budgetkürzung bei der Planung hat der Platz für die außen liegenden Rettungskapseln den rechten unteren Gang eingeengt; am leichtesten kommt man hindurch, indem man **sich seitwärts dreht und um die Ecke schiebt.**"]}
    ]}
   ]}
  ],
  s1: [
   {t:"Schicht 1: Die Station, wie sie ist", p:6, b:[
    {t:"schicht", lead:"In den letzten drei Wochen gab es von der Station keine Signale und keine Lebenszeichen.", x:[
     "Parlow Technologies hat die Sache ruhig gehalten, aber einigen Leuten fällt allmählich auf, dass keine neuen Informationen kommen. Die Triangle Agency hat Nachrichten zwischen Führungskräften von PT abgefangen, die die Lage erklären:",
     "Jede einzelne Person auf der gesamten Station ist verschwunden. Keine Kapseln wurden aktiviert, die Luftschleuse wurde nie geöffnet, und auf der Station scheint alles zu funktionieren, aber niemand ist mehr dort. Es ist nicht das erste Mal, dass Menschen verschwunden sind – tatsächlich sind die meisten Zivilisten, die auf die Raumstation gekommen sind, verschwunden. PT hat viel Geld ausgegeben, um das zu vertuschen. Aber nie die Wissenschaftler, und nie alle auf einmal.",
     "**Die Agency vermutet eine Anomalie und schickt ein Außenteam mit einer firmeneigenen Rakete.**"
    ]},
    {t:"kasten", h:"Wiederbeleben", b:[
     "Finden die Agenten heraus, was die Speicherpunkte tun, können sie sie nutzen, indem sie sich in die Maschine legen und den schlichten „Ein“-Knopf suchen. Die Agency setzt keine Mittel ein, um Agenten auf diese Weise wiederzubeleben, und vergibt dafür daher keine Verweise. Nutzen sie die Speicherpunkte nicht, aktiviert die Agency wie üblich ihre Lebensversicherung und schickt ihr neues Ich rasch mit einer weiteren Rakete zur Station."
    ]},
    {t:"raeume", x:[
     {r:"luft", b:["Funktioniert wie vorgesehen. Still. Dockt an neue Fähren an."]},
     {r:"gaenge", b:["Wie gewohnt, auch wenn ein paar **persönliche Gegenstände** herumschweben, wo sie nicht hingehören."]},
     {r:"garten", b:["**Den Pflanzen geht es gut!** Einige gehen ein, weil sich niemand um sie kümmert, aber die Systeme arbeiten wie vorgesehen, und größtenteils ist es hier nicht besonders verwildert."]},
     {r:"kranken", b:[
      "Die Maschine, die wie ein Solarium aussieht, ist eingeschaltet und brummt mit blauem Licht. Öffnet man sie, **liegt jemand darin!**",
      "**Petra Gillis, #42:** Eine der neuesten Bewohnerinnen der Raumstation. Petra erwacht wie aus einem Traum und erinnert sich zuletzt daran, **von einem Drachen gefressen worden zu sein.** Davor weiß sie, dass sie wie gewohnt mit den anderen Mitgliedern ihrer Fährengruppe im Garten gearbeitet hat. Sie versteht nicht, warum die Station verlassen ist. Wird sie zu irgendeinem Zeitpunkt nicht beobachtet, **verschwindet sie wieder.**",
      "Das „Solarium“ ist ein Ausdruck der Anomalie: Es ist ein **Speicherpunkt** für die Zivilisten, was ihnen aber nie erklärt wurde. Es **erschafft sofort einen Körper,** wenn ein Zivilist stirbt, und überträgt seine Erinnerungen und Erfahrungen in den neuen Körper. Der alte Körper und alles, was er bei sich trug, bleibt, wo er zurückgelassen wurde."
     ]},
     {r:"aussicht", b:["Normal. Die Erde ist von diesem Aussichtsdeck aus zu sehen, dazu der Rand der Sonne. **Es ist wunderschön.**"]},
     {r:"wohn", b:["Normal. Persönliche Gegenstände schweben allerdings herum, und auf einigen Bildschirmen laufen noch **Videos in Dauerschleife.**"]},
     {r:"ecke", b:["Hier enthüllt sich die Wahrheit über das Verschwinden. Wer diese Ecke **im Uhrzeigersinn** durchquert, gelangt in eine **andere Schicht der Realität.** Die gesamte Station ist die Domäne der Anomalie, und sie hat potenziell endlose Fassungen der Station erschaffen, alle in surrealem Raum übereinandergeschichtet."]}
    ]}
   ]}
  ],
  s2: [
   {t:"Schicht 2: Nico", p:7, b:[
    {t:"schicht", lead:"Hier riecht es nach Blut. Die Gänge sind nur von roten Notleuchten erhellt.", x:[
     "Blut bedeckt die Wände, und abgetrennte Körperteile schweben durch die Luft. Zunächst scheint es, als wären hier viele Menschen gestorben – doch bei genauerem Hinsehen wird klar, dass **dieselbe Person hier viele Male gestorben ist.**",
     "Diese Schicht ist ein Experiment eigens zu **Nico Detrik, #33.** Nico wurde wiederholt von schrecklichen Monstern mit klingenbesetzten Knochen angegriffen. Sie tauchen kurz nachdem ihn der Speicherpunkt zurückgeholt hat auf und töten ihn, bevor er die Rettungskapseln erreichen kann. Die lästige Ecke hat er immer abgetan, weil sie wie eine Todesfalle aussieht, aber wenn er es dorthin schaffte, käme er in Schicht 3.",
     "Nico ist ein hartnäckiger, wütender Überlebender. Es reicht ihm nicht, einfach zu entkommen – er will **die finden und töten, die ihm das angetan haben,** und arbeitet mit den Agenten zusammen, wenn es diesem Zweck dient, ist anfangs aber äußerst misstrauisch. Außerdem ist er ein **möglicher Resonant** und könnte sich mit einer Anomalie verbinden."
    ]},
    {t:"kasten", h:"Umgang mit Nico", p:18, b:[
     "Nico ist eine ungewöhnliche Art von Losem Ende. Er ist hartnäckig, wird regelmäßig wiederbelebt und folgt den Agenten, wenn sie sich nicht mit ihm verbünden oder ihn sehr ernsthaft davon abbringen. Denk daran, dass er schon viel Folter durchgemacht und nie aufgegeben hat. Er lässt sich nicht so leicht verscheuchen.",
     "Schafft er es in die Letzte Schicht, fühlt sich die erschöpfte Anomalie von seinem Resonant-Potenzial angezogen und versucht, sich zu verstecken, indem sie sich mit ihm verbindet. (Typischerweise bedeutet das, dass die persönliche Identität der Anomalie verschwindet und Nico Manifold-Kräfte erhält.)"
    ]},
    {t:"raeume", x:[
     {r:"luft", b:["Scheint kaputt zu sein. Sie öffnet sich nicht."]},
     {r:"gaenge", b:["Zerrissene Kleidung und **Nicos Körperteile** schweben schwerelos umher und geraten bei leichter Berührung leicht ins Trudeln, wenn sich jemand durch die Gänge bewegt."]},
     {r:"garten", b:["**Die Pflanzen sind tot.** Das Licht ist offenbar schon lange aus."]},
     {r:"kranken", b:["Nico erscheint hier im Speicherpunkt neu, wenn er stirbt, und er versteht, dass er nur deshalb noch lebt. Meist schnappt er sich zuerst eine **Spritze,** versucht in den Garten zu kommen und ein **rotierendes Sägeblatt-Werkzeug** zu finden, entweder bei seinem vorigen Körper oder in den Notfall-Werkzeugkästen, die dort aufbewahrt werden, versucht dann, die Monster zu bekämpfen und zur Luftschleuse zu gelangen. Er traut nichts, was jetzt hier auftaucht – offenbar haben sich die Monster ein paarmal verändert. **Er greift Eindringlinge an.**"]},
     {r:"aussicht", b:["Nichts ist zu sehen. Der Weltraum ist leer, ohne Sterne und Planeten. **Leere Schwärze.** Wurden sie noch nicht bekämpft, werden zum Klang eines Summers **Monster aus künstlich gezüchtetem Menschenfleisch mit herausragenden, klingenbesetzten Knochen** aus den Wänden freigelassen."]},
     {r:"wohn", b:["Nico war schon einmal hier – er hat Möbel verschoben, um **die Hälfte des Raums zu verbarrikadieren,** und in einer Schleife hat er hier eine Weile überlebt. Jetzt versucht er wieder zu entkommen."]},
     {r:"ecke", b:["Wer hindurchgeht, gelangt in Schicht 3. Von der anderen Seite dringen leise **Stimmen von Menschen,** die sich unterhalten."]}
    ]}
   ]}
  ],
  s3: [
   {t:"Schicht 3: Die Hungrigen", p:8, b:[
    {t:"schicht", lead:"Hier riecht es nach Menschen. Es ist ungeheuer laut.", x:[
     "**Dreißig Menschen** sitzen hier fest, hungrig und zusammengepfercht auf dieser kleinen Station. Sie stöhnen über jeden Neuankömmling – noch mehr Münder zu stopfen, und alle sind schon so **hungrig.**",
     "Die Bewohner von Schicht 3 kamen mit vielen verschiedenen Fähren, und gelegentlich tauchen neue auf, aber **niemand geht je wieder.** Dieses Experiment soll zeigen, was passiert, wenn ihre Vorräte bis an die Grenzen ausgereizt werden, doch Monster tun ihnen nicht direkt etwas an.",
     "Die Stimmung ist sehr angespannt. Die Menge könnte leicht in Gewalt umschlagen, ließe sich mit Feingefühl aber auch hinter jemanden bringen. Die Bewohner von Schicht 3 sind keine Resonants und können sich nicht durch die lästige Ecke in andere Schichten bewegen, solange man sich nicht um die Anomalie kümmert. Die Bewohner hier verstehen nicht, dass sie nicht auf der ursprünglichen Raumstation sind, und glauben, irgendetwas störe ihre Funksignale zur Erde."
    ]},
    {t:"raeume", x:[
     {r:"luft", b:["Scheint kaputt zu sein. Sie öffnet sich nicht."]},
     {r:"gaenge", b:["Aus Kleidung und anderen Vorräten gebaute Betten liegen über die Gänge verstreut, weil sie **doppelt so viele Menschen wie Betten** haben."]},
     {r:"garten", b:["Die Pflanzen kämpfen ums Überleben. Die essbaren sind abgeerntet. **Cory und Angelina** mühen sich, das Übrige zu rationieren und die Leute davon abzuhalten, die Pflanzen aus Hunger ganz zu vernichten."]},
     {r:"kranken", b:["Sie ist **vollständig versiegelt.** Die Werkzeuge darin galten als zu gefährlich, als dass alle Zugang haben sollten, und es gab dort nichts Essbares, also wurde sie komplett abgeschlossen. Die anderen Bewohner nutzen die lästige Ecke, aber die Agenten können das auf dem Weg, auf dem sie gekommen sind, nicht, ohne nach Schicht 2 zurückzukehren. Sie brauchen die **Schlüsselkarte von Jason,** um weiterzukommen. Der Speicherpunkt ist hier."]},
     {r:"aussicht", b:["Ein normaler Ausblick. Die Erde sieht von hier oben wunderschön aus, und **so voller Leben.**"]},
     {r:"wohn", b:["Die Machtverhältnisse dieses Ortes lassen sich am besten an den Betten ablesen. Wer sich bei den anderen **Macht oder Respekt** verschafft hat, ob durch Taten oder Alter, bekommt die **echten Betten.** Alle anderen liegen im Gang."]},
     {r:"ecke", b:["Wer erfolgreich hindurchgeht, gelangt in Schicht 4, doch wenn man dabei beobachtet wird, lösen die anderen einen Versuch aus, **die Flucht nachzuahmen.**"]}
    ]},
    {t:"h", x:"Bemerkenswerte Bewohner von Schicht 3", p:9},
    {t:"karten", cls:"leute", x:[
     {h:"Jason Finch, #3", b:["Ein überforderter Lehrer, der versucht, so etwas wie Ordnung aufrechtzuerhalten. Er gibt sein Bestes, ist darin aber nicht besonders gut. Er gilt allgemein als Anführer und hat den **Schlüssel zur Krankenstation,** aber in persönlichen Fragen orientieren sich die Leute eher an dem Ehepaar Sparrow."]},
     {h:"Jo Partridge, #24", b:["Kocht in einem Schnellimbiss. Jo würdest du dein Leben anvertrauen. Hat im Grunde beschlossen, nie von der Station zu entkommen, ist aber nicht traurig darüber. Älter, hat deshalb ein Bett und genießt bei allen auf der Etage Respekt für **die Kreativität** mit den knappen Kochvorräten."]},
     {h:"Imaan Emu, #36", b:["Influencer, Mitte zwanzig. Nennt sich gern jemandes „problematischen Liebling“. Hat auf der Station **KEINE** gute Zeit, filmt aber trotzdem **alles,** falls ze entkommt. Glaubt, diese Aufnahmen werden hir für den Rest des Lebens absichern."]},
     {h:"Angelina Sparrow, #11", b:["Logistikerin bei einer Reederei, mit Cory verheiratet. Sie haben beschlossen, ins All zu fliegen, bevor sie sesshaft werden und ein Kind bekommen. Jetzt sind sie sich nicht mehr sicher, ob es je dazu kommt. Angelina **arbeitet ständig an einem neuen Ansatz** zur Flucht."]},
     {h:"Cory Sparrow, #12", b:["Gärtner, mit Angelina verheiratet. Er hat **die Pflanzen** größtenteils allein gepflegt, damit sie gerecht verteilt werden. Manche Bewohner glauben, Angelina und Cory zweigen heimlich zusätzliches Essen ab, aber das tun sie nicht."]}
    ]}
   ]}
  ],
  s4: [
   {t:"Schicht 4: Navarros Verlies", p:10, b:[
    {t:"schicht", lead:"Der modrige, feuchte Geruch einer Katakombe. Hier gibt es Schwerkraft.", x:[
     "Diese Schicht erscheint als Hallen eines **Verlieses** wie in einer mittelalterlichen Burg, komplett mit Fackeln und Ziegelwänden. Die lästige Ecke hinter den Besuchern erscheint als lange Treppe, die nach oben in die Dunkelheit führt. **Es gibt keine Luftschleuse.**",
     "Dieses Experiment ist die **private Schicht von Dr. Navarro,** der den Auftrag hat, die Wirkung verschiedener Kombinationen von Beruhigungsmitteln auf die Fähigkeiten der Patienten zu testen."
    ]},
    {t:"raeume", x:[
     {r:"luft", leer:"Es gibt keine Luftschleuse."},
     {r:"gaenge", b:["Warm, und nicht nur von den Fackeln. Von tiefer drinnen dringt gelegentlich **Geschrei.**"]},
     {r:"garten", b:["Eine alte Vorratskammer, kühler gehalten als die Gänge. Fleisch, Fisch, Gemüse – viel mehr Essen, und **gutes Essen,** als irgendwo sonst in den Schichten der Station zu haben ist."]},
     {r:"kranken", b:["Sieht aus wie ein Lagerraum für allerlei Kräuter, Gewürze und Flüssigkeiten. Manche sind für Speisen, manche eindeutig zum Mischen von Giften. Zuletzt hat Dr. Navarro mehrere Flaschen eines Beruhigungsmittels gebraut. Hier gibt es einen Speicherpunkt, aber er sieht aus wie ein **uralter Sarg.**"]},
     {r:"aussicht", b:["Ein Laufsteg mit Geländer über einer weiten Erdgrube. Ein Brett ragt ohne Geländer vom Laufsteg über die Mitte hinaus. Unten wartet **ein Drache,** gezüchtet aus gedehnter und verdrehter menschlicher Muskulatur, **angekettet** darauf, dass Futter von oben herabfällt. Bei der Ankunft kreist der Drache und jagt gemächlich **Petra Gillis,** die aus Schicht 1 verschwunden ist, oder einen anderen Zivilisten, falls Petra etwas anderes zugestoßen ist."]},
     {r:"wohn", b:[
      "Statt Etagenbetten gibt es zwei lange Reihen von Gefängniszellen.",
      "Ist er nirgendwo sonst, ist **Dr. Navarro hier** und bietet einem der unten genannten Bewohner mit Beruhigungsmittel versetztes Essen an. Er will, dass alle Besucher in der Grube beim Drachen landen. Dr. Navarros **Laborkittel** erlaubt es, frei durch die Schichten zu wechseln, auch direkt in die Letzte Schicht.",
      "**Stephanie Lamb, #41:** Schüchtern, Anfang zwanzig, studiert und ist über eine Lotterie hergekommen; dachte, das würde sich im Lebenslauf gut machen.",
      "**Killian Tripe, #27:** Der schmierigste Typ, der dir je begegnet ist; alles an ihm lässt die Alarmglocken schrillen. Er schmiedet einen Fluchtplan und könnte nützlich sein. Er könnte dich auch in die Drachengrube werfen.",
      "**Corvik Veal, #15:** Ein kräftiger Ornithologe aus Boston; ihm wurde gesagt, auf der Station gäbe es Vögel zu erforschen."
     ]},
     {r:"ecke", b:["Eine nach unten führende Treppe führt direkt in Schicht 5, es sei denn, jemand trägt einen **Laborkittel.**"]}
    ]}
   ]}
  ],
  s5: [
   {t:"Schicht 5: Die Galerie", p:11, b:[
    {t:"schicht", lead:"Saubere, hell erleuchtete Gänge mit hohen Decken. Oberlichter lassen den Sonnenschein herein.", x:[
     "Dies ist die **Kunstgalerie von Dr. Francis,** in die sie die wenigen Menschen bringt, die sie aus anderen Schichten „rettet“, und sie stattdessen hier leben lässt, wo sie sich entspannen und über Kunst sprechen.",
     "Die anderen Doktoren haben sie ihre Lieblinge auswählen lassen, die sie hier behalten darf, etwa 10 % der gesamten Bevölkerung der Station. Sie gelten noch immer als Versuchspersonen und werden in Dr. Healys Labor mit den anderen Bewohnern verglichen. Für alle hier wird regelmäßig eine große Auswahl an Essen gebracht."
    ]},
    {t:"raeume", x:[
     {r:"luft", b:["Ein **Ölgemälde** der Luftschleuse. Die Pinselstriche sind glatt und selbstsicher."]},
     {r:"gaenge", b:["Sonnig und ruhig, mit **Skulpturen hinter Glas** und von Samtkordeln geschützten Gemälden. Vom Flügel im Garten zieht Musik durch die Gänge. Manche der Werke hier stammen von Bewohnern und sind mit ihren Namen und Nummern beschriftet."]},
     {r:"garten", b:["Ein **Gewächshaus** aus unzerbrechlichem Glas, mit einer gepflegten, sonnigen Landschaft, unerreichbar, aber direkt da, gleich hinter den Fenstern. Inmitten all der Pflanzen steht ein Konzertflügel. **Jazz (#7)** ist ein begabter Pianist und nimmt Wünsche entgegen."]},
     {r:"kranken", b:[
      "**Dr. Francis wohnt hier,** im Nachbau einer kleinen Einzimmerhütte mit Küche, Bett, Wanne mit Klauenfüßen und Kamin. Eine Couch steht für Bewohner bereit, die bei ihr psychiatrische Gutachten und Gespräche bekommen, manchmal auch für **Kurzbesucher** aus anderen Schichten. Sie ist oft hier.",
      "Dr. Francis liegt daran, alle davon abzubringen, von hier aus weiterzugehen. Sie bietet ihnen die Möglichkeit an, hierzubleiben, oder als letzten Ausweg **freies Geleit zurück nach Schicht 1,** um die echten Rettungskapseln zu benutzen.",
      "Wird sie bedroht, neigen die Bewohner dieser Schicht sehr dazu, sie zu beschützen. Dr. Francis’ **Laborkittel** erlaubt es, frei durch die Schichten zu wechseln, auch direkt in die Letzte Schicht."
     ]},
     {r:"aussicht", b:["Statt eines gläsernen Aussichtsdecks steht hier ein alter **Röhrenfernseher** auf einem Rollwagen, mit Videorekorder, mehreren Kassetten und einigen älteren Spielkonsolen. Die Bewohner dieser Schicht verbringen hier viel Zeit. Es gibt **Sitzsäcke.**"]},
     {r:"wohn", b:["Es gibt Betten, aber auch ein **kleines Atelier** für alle möglichen Arten von Kunst. Staffeleien und Leinwände, eine Töpferscheibe, mehrere Musikinstrumente. Die Bewohner werden ermutigt, etwas zu erschaffen, und ihre Werke werden anderswo in der Galerie ausgestellt."]},
     {r:"ecke", b:["Wer erfolgreich hindurchgeht, gelangt in Schicht 6, doch wenn jemand einen **Laborkittel** trägt, können alle, die bei ihm sind, in die Letzte Schicht wechseln."]}
    ]},
    {t:"h", x:"Bewohner von Schicht 5", p:12},
    {t:"karten", cls:"leute", x:[
     {h:"Jazz Fluorite, #7", b:["Musiker und Kenner moderner Kunst. War sehr früh ein Liebling von Dr. Francis und musste nie eines der anderen Experimente durchlaufen. Findet es schade, von ihnen zu hören."]},
     {h:"Tisker Mica, #8", b:["Die **einzige jugendliche Person,** die auf die Station durfte. Hat bei der Bewerbung gelogen. Dr. Francis argumentierte, es sei nicht richtig, Tisker in die Experimente einzubeziehen, weil Tisker die Einverständniserklärung rechtlich gar nicht hätte unterschreiben können."]},
     {h:"Cal Alum, #18", b:["Dichter. Ist nach außen hin froh, dass sein Leben „endlich interessant geworden“ ist, **weint aber sehr schnell,** wenn man ihn an die anderen Schichten erinnert. Er hat etwas durchgemacht, worüber er nicht reden will."]},
     {h:"Misty Copper, #21", b:["Total sauer, dass xier Pokémon Go hier oben nicht funktioniert. Lebte früher auf einer überfluteten Schicht."]},
     {h:"Ludric Pyrite, #45", b:["**Ein Investor.** Schafft es immer, zu glauben, er habe gute Entscheidungen getroffen. Er hat sich durch einen Deal mit Dr. Healy hier eingekauft und darf nach Hause telefonieren, um zusätzliche Mittel für die Station zu sichern."]}
    ]}
   ]}
  ],
  s6: [
   {t:"Schicht 6+: Der Spießrutenlauf", p:13, b:[
    {t:"schicht", lead:"Dr. Healy weiß, dass sie kommen.", x:[
     "Die Anomalie hat diese **sich wiederholende, vervielfachende Schicht** in aller Eile als Abwehr errichtet, damit die Besucher nicht bis zu Dr. Healy selbst vordringen. Diese Schicht ist ein äußerst gefährlicher letzter Spießrutenlauf.",
     "Der erste Gang erscheint als ein einziger, sehr kurzer, gerader Raumstationsgang mit einer lästigen Ecke am Ende – doch nach jeder lästigen Ecke stehen die Besucher wieder am Anfang des Gangs, mit einer anderen Herausforderung im Weg. Diese Gänge so schnell zu erschaffen, zehrt an der Anomalie, **sie kann es nicht ewig durchhalten.**",
     "Dreht ein Besucher zu irgendeinem Zeitpunkt um und verlässt eine Schicht rückwärts, kehrt er nach Schicht 5 zurück."
    ]},
    {t:"raeume", zaehlen:6, x:[
     {r:"luft", h:"Schicht 6: Die Luftschleuse", b:["Ein normaler, leerer Stationsgang – und etwas versucht einzubrechen. Ein **Monster außerhalb der Luftschleuse** greift diesen Gang an. Rasch schlägt es **ein Loch in die Hülle,** und Luft beginnt ins All zu strömen. Die Besucher sterben, wenn sie es nicht auf die andere Seite schaffen."]},
     {r:"gaenge", h:"Schicht 7: Die Gänge", bild:"kaffeebecher-skizze", b:["Zylindrische Röhren säumen die Wände, eine **grüne Flüssigkeit** hält darin sechs Kreaturen aus Schicht 2 in Stase. Beim Betreten heben sich die Zylinder von ihren Sockeln, überfluten den Boden mit der grünen Flüssigkeit und lassen die **Klingenknochigen** frei, die die Eindringlinge angreifen."]},
     {r:"garten", h:"Schicht 8: Der Garten", b:["**Ranken** versuchen jeden zu packen, der durch diesen kurzen Gang kommt, und ihn riesigen **fleischfressenden Venusfliegenfallen** und Kannenpflanzen zu verfüttern."]},
     {r:"kranken", h:"Schicht 9: Die Krankenstation", b:["Ein Schwarm **fliegender Injektionsnadeln** voller Beruhigungsmittel stürzt wie Fledermäuse von der Decke herab und jagt alle Besucher in diesem Gang."]},
     {r:"aussicht", h:"Schicht 10: Das Aussichtsdeck", b:["**Besucher dieses Gangs nehmen sich selbst als echte Ratten wahr** in einem kurzen Labyrinth. Guillotinen schwingen aus den Wänden, in Gruben brodelt Säure, und **du bist eine Ratte.** Wer am Ende den Käse findet, wird in den nächsten Gang entlassen."]},
     {r:"wohn", h:"Schicht 11: Die Wohnquartiere", b:[
      "**Die Anomalie ist erschöpft.** Niemand sollte sich durch ihre Schichten bewegen können, und sie versteht nicht, warum die Besucher nicht einfach gehen. Dies ist ihre letzte Chance, ihren Fokus zu schützen.",
      "Die Anomalie holt **drei überlebende Bewohner** aus anderen Schichten herbei, die sie für die Lieblinge der Besucher hält, und hängt sie in Käfigen über den Drachen darunter, wenn der Drache noch lebt, oder über eine Säuregrube, wenn nicht.",
      "Auf einem großen Computerbildschirm zeigt sie, dass sie die drei **aus dem Speicherpunkt-System löscht.** Sie kann die Besucher nicht am Weitergehen hindern, weil sie die lästige Ecke nicht löschen kann, aber sie **tötet die Bewohner,** wenn die Besucher nicht umkehren."
     ]},
     {r:"ecke", b:["Wer erfolgreich durch die letzte hindurchgeht, gelangt in die Letzte Schicht. Wurde die Anomalie nicht beschwichtigt oder auf andere Weise aufgehalten, hört man beim Verlassen dieser Schicht **den Tod der Bewohner.**"]}
    ]}
   ]}
  ],
  letzte: [
   {t:"Die Letzte Schicht", p:15, b:[
    {t:"schicht", plan:false, lead:"Dr. Healys Labor. Ein sauberer, verchromter Raum.", x:[
     "Die Anomalie, ein Becher Kaffee, steht auf einer Konsole. Ein Computer an der Seite zeigt wichtige Messwerte zu den Bewohnern der Station. Dr. Healy ist hier, und normalerweise wird er von der Anomalie beschützt, doch sie ist erschöpft von dem Versuch, die Besucher fernzuhalten.",
     "**Er ist äußerst verwundbar.**"
    ]},
    {t:"kern", h:"Die eigentliche Wahrheit", b:["Das System hier liefert **keine** sinnvollen Informationen für Dr. Healys Forschung. Es inspiriert ihn, weil **er die Macht genießt,** die er spürt, wenn er andere Menschen durch schreckliche Situationen schickt. Bekommt er die Gelegenheit, versucht er, seine Arbeit hier zu rechtfertigen, als hätte sie zu Durchbrüchen geführt, doch alles, was er hier tatsächlich erreicht hat, entsprang seinem Wunsch, mehr Schaden anzurichten, **nicht den Ergebnissen des Schadens.**"]},
    "Wird Dr. Healy getötet, die Anomalie gefangen oder die Anomalie zerstört, **krachen alle Schichten zurück in Schicht 1,** und alle Bewohner aller Etagen – darunter auch einige, die man bisher nicht gesehen hat – landen dort. Die Käfige und Kapseln mit den Monstern werden mitgebracht, weil auch sie echt sind, bleiben aber in Stase.",
    "Die Verbindung zur Erde funktioniert, ebenso die vorhandenen Rettungskapseln (in denen nur **zwölf Menschen** Platz haben). Parlow Technologies will nicht, dass irgendjemand zurückkehrt. **Die Agency auch nicht.**"
   ]}
  ],
  nach: [
   {t:"Die Sicht der Agency", p:19, b:[
    "Denk daran: Der Agency wäre es völlig recht, wenn niemand von dieser Station zur Erde zurückkehrt. **Jede Figur, der man irgendwo außer in Schicht 3 begegnet, ist sofort ein Loses Ende.**",
    "Gelingt es den Agenten, die Anomalie zu besiegen oder einzufangen (statt dass sie sich mit Nico verbindet), verschmelzen durch das sofortige Verschwinden ihrer Kräfte aus der Realität alle Schichten miteinander, und dann ist **jede überlebende Figur ein Loses Ende.**",
    "Damit den Agenten das bewusst ist, sollten sie von Anfang an daran erinnert werden, dass die Agency empfiehlt, dass niemand von der PT-Station zurückkehrt. So decken sich ihre Interessen mit denen von Parlow Technologies. Wenn das Fehlverhalten von PT aufgedeckt oder die Menschen auf dieser Station gerettet werden sollen, müssen die Agenten selbst entscheiden, dass ihnen das wichtig ist.",
    "Die Funkgeräte der Station sind eigens auf die Zentrale von PT eingestellt und gehen nicht direkt an Medien oder andere Stellen, die helfen könnten. PT ist nicht erpicht darauf, irgendjemanden auf der Station zu retten. Ohne kreative Lösungen ist in den Rettungskapseln nur Platz, um **12 der insgesamt 45 Menschen,** die vielleicht noch überleben, zurückzubringen.",
    {t:"anforderung", label:"Neue Anforderung", h:"Temporäre Verdrängungskuppel", en:"Temporary Displacement Dome", preis:18, b:["Wird die Anomalie gefangen, steht den Agenten diese neue Anforderung zum Kauf zur Verfügung: Diese Satellitenschüssel lässt sich auf den Boden stellen und ersetzt die gesamte physische Realität in einem Umkreis von 100 Yards (etwa 90 m) durch eine perfekte Nachbildung des Raums, die wieder zur Normalität zurückkehrt, wenn der Satellit ausgeschaltet wird oder 8 Stunden vergangen sind."]}
   ]}
  ]
 }
};
