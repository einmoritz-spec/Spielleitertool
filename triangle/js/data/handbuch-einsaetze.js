/* Handbuch › Einsätze (S. 18–31) */
TA_TEXT["h/einsaetze/ausgaenge"] = [
 {t:"lead", x:"Die Agency kennt nur {3} mögliche Ausgänge eines Einsatzes zur Anomalie-Bergung:"},
 {t:"pikto", x:[
  {z:"pikto-gefangen", h:"Gefangen", x:"Die Anomalie wird im Normalen Aktenkoffer (oder auf anderem Weg) direkt in den Vault geliefert. Das ist das ideale Einsatzergebnis, für das alle Agenten **{3} Belobigungen** erhalten. Großartig!"},
  {z:"pikto-neutralisiert", h:"Neutralisiert", x:"Die Anomalie wird mit der Ripple Gun (oder auf anderem Weg) zerstört. Das ist bedauerlich, aber manchmal nötig. Es gibt weder Belobigungen noch Verweise."},
  {z:"pikto-entkommen", h:"Entkommen", x:"Wird die Anomalie weder gefangen noch neutralisiert, erhalten alle Agenten **{3} Verweise**. Anomalien, die man entkommen lässt, werden misstrauisch, sind schwerer zu fangen und neigen zu lästiger Rache."}
 ]},
 {t:"kasten", dunkel:1, z:"symbol-haken-kasten", h:"Optionale Ziele", b:[{t:"sp", x:[
  ["Für jeden Einsatz gibt dein GM in der Besprechung einige Optionale Ziele aus.",
   "Optionale Ziele haben immer eine Bedingung und eine Belohnung. Üblich sind **1** bis **{3}** Optionale Ziele pro Einsatz; sofern nicht anders vermerkt, können sie beliebig oft und von beliebigen Agenten erfüllt werden. Versuch, möglichst viele Belobigungen zu verdienen!"],
  ["Einige Beispiele:",
   {t:"liste", x:["*Einen Warnschuss abgeben:* **+1 Belobigung**", "*Mit einem eingetragenen Mitglied sprechen:* **+{3} Belobigungen**, einmal pro Agent", "*Auf eine Fliese treten:* **+1 Verweis**"]},
   "Diese Ziele können wichtige Hinweise für euren Einsatz enthalten, aber auch Agency-Zielen dienen, die nichts damit zu tun haben. Dein GM ist weder verpflichtet noch gehalten zu erklären, wie Optionale Ziele festgelegt und ausgegeben werden."]
 ]}]}
];
/* S. 18 */
TA_TEXT["h/einsaetze/aussendienst"] = [
 "Diese <Einstiegsposition/dieses Spiel> befasst sich vor allem mit dem **Außendienst**, dem Geschäft, die gewöhnliche Welt zu bestreifen, zu erkunden und zu beeinflussen, um die Mission der Agency voranzubringen. Als Außendienst-Agenten habt ihr {3} Prioritäten:",
 {t:"bild", src:"agentin-ripple-gun-schuss", pos:"rechts", w:400},
 {t:"gebot", x:[
  {h:"REALITÄT BEWAHREN", s:"für gewöhnliche Wesen", x:"Zuallererst musst du das Wissen über Anomalien in der weiteren Welt so gering wie möglich halten. Um deinen Erfolg zu messen, erfasst die Agency **Lose Enden**: Menschen mit Erfahrungen oder Beweisen des Übernatürlichen."},
  {h:"ANOMALIEN ERGREIFEN", s:"zur Verwahrung im Vault", x:"Ob durch Verlockung oder Erschöpfung: Wilde Anomalien müssen in den **Vault** gebracht werden, eine besondere Verwahranlage an einem geheimen Ort mit Zugängen in jeder Zweigstelle der Agency. Dort können sie erforscht und bewahrt statt vernichtet werden. Die Glücklichen!"},
  {h:"BEHERRSCHE DICH", s:"für langfristige Beschäftigungsfähigkeit", x:"Resonanten wie dir ist es erlaubt, anomale Fähigkeiten zur Erfüllung der Punkte **1** und **2** einzusetzen; es wird jedoch erwartet, dass du Professionalität wahrst und der Versuchung widerstehst, diese Fähigkeiten anderswo zu missbrauchen."}
 ]},
];
/* S. 19 */
TA_TEXT["h/einsaetze/anstellung"] = [
 {t:"sp", x:[
  ["Zwischen den Einsätzen gibt es jede Menge zu tun! Allen Agenten wird eine **Kompetenz** zugewiesen, die beschreibt, welche Arbeit du im Büro oder zu dessen Gunsten verrichtest. Du könntest als Mitarbeiter der Öffentlichkeitsarbeit unser Image überwachen, als Barista in der Lobby Getränke servieren oder dich in den plüschigen Sesseln der CEO-Abteilung entspannen! Für Berufseinsteiger gibt es neun Optionen, die gegen Ende dieses Handbuchs erklärt werden.",
   "Der Außendienst ist Pflicht, doch dein Einsatz für die Arbeit zwischen den Einsätzen entscheidet darüber, wie weit du im Unternehmen aufsteigst. Wenn es an der Zeit ist zu entscheiden, wo du langfristig hingehörst, werden deine Stunden im Büro und dein Widerstand gegen äußere Ablenkungen deine Einordnung maßgeblich beeinflussen."],
  ["Du darfst dein gewöhnliches Leben außerhalb der Agency weiterführen, doch deine Freunde, deine Familie und deine Bekannten dürfen die Einzelheiten deiner Arbeit nicht kennen. Bitte denke daran, dass ein gewöhnliches Leben für einen Resonanten wie dich ein Privileg ist. Unsere Priorität gilt der Mission der Agency, und deine sollte es ebenfalls sein. Weitere Einzelheiten findest du in der folgenden Grafik."]
 ]},
 {t:"html", x:'<svg class="hb-weiche" viewBox="0 0 440 360" role="img">' +
  '<g fill="none" stroke="#e8e6ef" stroke-width="27"><path d="M129 193H440"/><path d="M180 193C215 193 225 268 285 268H440"/></g>' +
  '<rect x="12" y="30" width="152" height="62" rx="14" fill="#fbe4e6"/>' +
  '<text class="b" x="26" y="52" font-size="11.5">Was für eine einfache</text><text class="b" x="26" y="67" font-size="11.5">und unkomplizierte</text><text class="b" x="26" y="82" font-size="11.5">Entscheidung!</text>' +
  '<image href="img/zeichen/figur-dreieckskopf-daumen.png" x="176" y="27" width="74" height="126"/>' +
  '<image href="img/zeichen/symbol-weiche-hebel.png" x="120" y="100" width="70" height="55"/>' +
  '<image href="img/zeichen/symbol-strassenbahn.png" x="2" y="153" width="128" height="70"/>' +
  '<rect x="270" y="42" width="144" height="78" fill="#ececf2"/><path d="M270 120H414" stroke="#2a1b45" stroke-width="3"/>' +
  '<text x="282" y="65" font-size="14">Alles, was existiert,</text><text x="282" y="84" font-size="14">und die Zukunft der</text><text x="282" y="103" font-size="14">gesamten Realität</text>' +
  '<path d="M385 120V160L354 201" fill="none" stroke="#2a1b45" stroke-width="3"/>' +
  '<image href="img/zeichen/symbol-menschen-schwarz.png" x="276" y="168" width="95" height="56"/>' +
  '<rect x="36" y="279" width="153" height="78" fill="#ececf2"/><path d="M189 279V357" stroke="#2a1b45" stroke-width="3"/>' +
  '<text x="48" y="303" font-size="12.5">Die unnötigen</text><text x="48" y="322" font-size="12.5">Genüsse gewöhnlicher</text><text x="48" y="341" font-size="12.5">Begierden</text>' +
  '<path d="M189 318H321L354 285" fill="none" stroke="#2a1b45" stroke-width="3"/>' +
  '<image href="img/zeichen/symbol-mensch-rot.png" x="335" y="250" width="40" height="64"/></svg>'}
];
/* S. 20 */
TA_TEXT["h/einsaetze/bergung"] = [
 {t:"lead", x:"Der häufigste <Einsatz/Spielabend> besteht aus {3} Teilen:"},
 {t:"pikto", pfeil:1, x:[
  {z:"phase-morgenbesprechung", h:"Morgenbesprechung", x:"Dein General Manager führt Szenen aus deinem Alltag in der Zeit vor dem Einsatz ein. Das führt dein Team mit zwangloser Unterhaltung an die Technik des Tabletop-Rollenspiels heran, während du deinen allgemeinen Pflichten für die Agency nachgehst oder Zeit mit einer gewöhnlichen Beziehung verbringst. Irgendwann wirst du zu einer **Besprechung** gerufen, in der die Spuren deines Einsatzes erläutert werden."},
  {z:"phase-ermittlung", h:"Ermittlung", x:"Nach der Besprechung durch deinen GM gehen die Agenten Spuren nach, um die von der Ziel-Anomalie betroffenen Orte und Menschen zu finden. Während ihr nach Möglichkeit Lose Enden verringert, folgt ihr der Fährte der Anomalie, bis ihr ihre Machtstätte findet, die wir die **Domäne** nennen."},
  {z:"phase-begegnung", h:"Begegnung", x:"Sobald ihr die Domäne der Anomalie betretet, liegt es an dir und deinen Agenten-Kollegen, allen Abwehrmaßnahmen oder Forderungen standzuhalten, die sie euch entgegenschleudert. Wenn alles gut läuft, fangt ihr die Anomalie und liefert sie zur weiteren Erforschung im Vault ab. In weniger idealen Fällen kann sie entkommen oder muss neutralisiert werden."}
 ]}
];
/* S. 21 */
TA_TEXT["h/einsaetze/ausruestung"] = [
 {t:"lead", x:"Alle Teams sind mit folgenden Anforderungen ausgestattet:"},
 {t:"sp", x:[
  [{t:"h3", x:"Der Normale Aktenkoffer"},
   "Dieser unspektakuläre und unscheinbare Aktenkoffer kann eine Anomalie jeder Größe fangen und sicher verwahren. Damit der Normale Aktenkoffer funktioniert, muss die Anomalie erschöpft, beruhigt oder willig sein.",
   "Eine Anomalie erfolgreich zu fangen erfordert in der Regel, ihren **Fokus** zu erkennen: den Gedanken oder das Gefühl, das sie erschaffen hat."],
  [{t:"bild", src:"aktenkoffer-normal", pos:"mitte", w:300}]
 ]},
 {t:"sp", x:[
  [{t:"bild", src:"ripple-gun", pos:"mitte", w:380},
   {t:"kasten", h:"Was ist eine Anforderung?", b:[
    "Anforderung ist unser Sammelbegriff für alle Gegenstände, die durch anomale Forschung entstanden sind.",
    "Nach deinem ersten Einsatz erhältst du Zugriff auf viele weitere nützliche Werkzeuge wie diese, die du für leichtere Außendienstarbeit erwerben kannst!"]}],
  [{t:"h3", x:"Die Ripple Gun"},
   "Diese Waffe war ursprünglich eine Requisite aus einer amerikanischen Science-Fiction-Fernsehserie der 1970er-Jahre. Sie ist das einzige bekannte Gerät, das anomale Resonanz direkt stören kann. Solange die Ripple Gun direkt auf eine freie Ziel-Anomalie gerichtet werden kann, lässt sie sich abfeuern, um diese dauerhaft zu neutralisieren. Sie kann nur eine einzige Ladung abgeben, bevor sie bei der Agency wieder aufgeladen werden muss.",
   "Wer die Ripple Gun zu einem anderen Zweck abfeuert, als das Einsatzziel zu neutralisieren, erhält als Agent {3} Verweise.",
   "Die Ripple Gun hat eine eingebaute Sicherung, die verhindert, dass sie auf Resonanten abgefeuert wird. Bitte stelle sicher, dass du niemals zwischen der Ripple Gun und ihrem vorgesehenen Ziel stehst."]
 ]}
];
/* S. 23 */
TA_TEXT["h/einsaetze/perfekt"] = [
 {t:"lead", x:"Hier ein Beispiel für ein Außendienst-Team, das bei der Arbeit lobenswerte Leistungen erbringt:"},
 {t:"pikto", pfeil:1, x:[
  {z:"pikto-perfekt-besprechung", h:"", b:["Die Agenten Idowu, Saburo und Levi arbeiten in ihren **Morgenbesprechungen** fleißig an ihren Schreibtischen, als sie zu einer Besprechung gerufen werden. Ihre General Managerin Trina berichtet ihnen von einer Anomalie in der Innenstadt von Ternion City, die Menschen von innen nach außen stülpt. Die Agency hat davon durch einen abgefangenen und unter Quarantäne gestellten Social-Media-Beitrag erfahren, auf dem ein Auge perfekt in ein Fleischbällchen-Sandwich gefallen ist."]},
  {z:"pikto-perfekt-ermittlung", h:"", b:["Die Agenten beginnen ihre **Ermittlung** im Fleischbällchen-Sandwich-Laden, wo die Inhaberin den plötzlichen Tausch von Haut und Organen schildert, den sie beobachtet hat. Die Inhaberin **ist überzeugt, dass alles völlig normal ist**, und es bleibt kein Loses Ende zurück. Die Agenten schließen klug, dass der Fokus der Anomalie „Der Wunsch eines Sandwich-Künstlers, alle Zutaten im Sandwich zu behalten“ lautet. Er möchte nicht darüber sprechen, doch ein Buch der Sandwich-Fotografie redet mit ihm und drängt ihn zur Verbesserung, indem es jedes Mal einen Menschen von innen nach außen stülpt, wenn es ihm nicht gelingt, ein perfektes Sandwich zu machen."]},
  {z:"pikto-perfekt-begegnung", h:"", b:["Die Agenten besuchen die Wohnung des Sandwich-Künstlers über dem Laden, die zur Domäne der Anomalie geworden ist. Die Agenten erleben die **Begegnung** mit der Anomalie und überzeugen sie, ihre Deckung fallen zu lassen, indem sie eine Reihe perfekter Sandwiches machen und dabei sorgfältig vermeiden, von innen nach außen gestülpt zu werden. Der gemeinsame Wunsch des Teams nach Perfektion stillt das Buch der Sandwich-Fotografie lange genug, damit es im Normalen Aktenkoffer gefangen werden kann. Der Sandwich-Künstler **ist überzeugt, dass alles völlig normal ist**, und es bleibt kein Loses Ende zurück.",
   "Sobald der Normale Aktenkoffer sicher in der örtlichen Zweigstelle der Triangle Agency abgestellt ist, kehren die Agenten an ihre Schreibtische zurück und machen sich wieder an die Arbeit. Ein weiterer unglaublicher Erfolg!"]}
 ]}
];
/* S. 24–25 */
TA_TEXT["h/einsaetze/anomalien"] = [
 {t:"bild", src:"anomalie-koralle-rot-doppelseite", pos:"rechts", w:520},
 "Wie erwähnt ist eine Anomalie eine große Ansammlung ähnlicher Gedanken oder ein besonders mächtiger einzelner Gedanke, der die Fähigkeit erlangt hat, die Realität direkt zu beeinflussen. Der vollständige Lebenszyklus einer Anomalie ist geschützte Information, die dir später in deiner Laufbahn zugänglich wird, doch dieser Abschnitt beschreibt die wichtigsten Einzelheiten.",
 "Anomalien entstehen nicht in der Realität und sind deshalb nicht an ihre Regeln gebunden. Der Gedanke oder das Gefühl, das sie hervorgebracht hat, bestimmt das Ausmaß ihrer Macht und lenkt ihre Handlungen, was selbst einfache Anomalien äußerst gefährlich macht. Stell dir ein Monster vor, das nur von Hass angetrieben wird und grenzenlose Kraft hat, zu zerstören, was es will; eine körperlose Besessenheit, die ihr Ziel wie eine Marionette in eine falsche Romanze führt; oder die Befriedigung sportlichen Schwimmens, die eine Stadt überflutet, um ihre Vorzüge mit allen zu teilen.",
 "Sie können menschenähnliches Verhalten zeigen oder menschliche Absichten zu haben scheinen, doch das ist eine Illusion. Anomalien sind teilnahmslos, gleichgültig gegenüber menschlichem Leben und bestenfalls ahnungslos gegenüber dem Leid, das sie verursachen.",
 "Diese Wesen drücken ihr zerstörerisches Potenzial auf ebenso viele verschiedene Arten aus, wie es Gedanken gibt. Während die eine zu enormer Größe heranwächst und zum Spaß Gebäude zerquetscht, tritt eine andere vielleicht als Netz körperloser Ohren in Erscheinung, um die Geheimnisse einer Region zu sammeln. Sie können gerissen genug sein, mit menschlichen Gefühlen und Wünschen zu spielen; viele der heimtückischsten Anomalien gewinnen die Hilfe gutgläubiger Menschen.",
 "Ohne einen Resonanten als Wirt haben sie Mühe, in der Realität zu bleiben, und verschwinden allmählich, doch dieser Prozess kann Jahre dauern. Der Schaden, den sie in der Zwischenzeit anrichten, und die verpasste Gelegenheit, sie zu erforschen, machen Untätigkeit unmöglich.",
 {t:"h", x:"Resonanz: der Fingerabdruck einer Anomalie"},
 "Bevor wir Agenten in den Außendienst schicken, verfolgen wir Anomalien, indem wir die gewöhnliche Gesellschaft auf ungewöhnliche und unerklärliche Phänomene überwachen und dann nach **Resonanz** suchen, einem Signaturmuster von Energie, das anomale Effekte hinterlassen. Das genaue Muster dieser Resonanz und die Methode, sie aufzuspüren, sind gefährliche Informationen.",
 "Wenn du mehr erfahren möchtest, überlege dir gründlich, warum du das willst.",
 {t:"ende"},
 {t:"kasten", h:"Persönliche Anomalien", z:"symbol-persoenliche-anomalie", b:[
  "Egal, was man dir erzählt oder wie vertraut du mit ihr bist: Die Kontrolle über deine persönliche Anomalie zu behalten, ist von höchster Bedeutung. Die Beziehung zwischen Resonant und Anomalie ist ein Austausch: Die Anomalie erhält die Sicherheit und Stabilität eines gewöhnlichen Körpers, und der Resonant erhält Zugang zu unmöglicher Macht.",
  "Normalerweise würde dieser parasitäre Prozess fortschreiten, bis die Anomalie den Wirt (dich!) zerstört. Solange du angestellt bist, können wir bei der Agency deine Persönlichkeit dominant und deine Gestalt stabil halten. Wir beschränken den Einsatz deiner persönlichen Anomalie auf bestimmte Fähigkeiten, denn ohne unsere Hilfe würdest du schnell von deiner eigenen Macht überwältigt.",
  "Zwar bietet nicht jede Stelle bei der Agency ein Gehalt, doch alle Agenten werden in Exposition gegenüber der Stabilität bezahlt, die die Agency bietet."]},
 {t:"h", x:"Bestandteile einer Anomalie"},
 "Anomalien lassen sich am genauesten als unwirkliche Wesen mit zwei einzigartigen Merkmalen definieren: einem **Fokus** und einer **Domäne**.",
 {t:"sp", x:[
  ["Der **Fokus** einer Anomalie ist der Gedanke, aus dem sie geboren wurde und der sie jetzt nährt und stärkt. Anomalien verfolgen aggressiv die Vervielfältigung ihres Fokus in gewöhnlichen Köpfen, doch sie sind keine Geschöpfe der Nuance. Sie können eine komplexe Idee wörtlich auslegen, Umstände so gestalten, dass sie ein bevorzugtes Gefühl erzwingen, oder Dinge und Menschen, die sie für kostbar halten, bis zur Erdrückung beschützen. Selten haben sie ein bewusstes Verständnis ihres eigenen Fokus und verfolgen deshalb oft kontraproduktive Vorgehensweisen, je nachdem, was sich „richtig anfühlt“.",
   "Unsere Forschung im Vault hat ergeben, dass Foki aus zwei Teilen bestehen: einem Gefühl und einem Gegenstand. Da Anomalien die Vervielfältigung ihres Fokus anstreben, verändern sie in der Regel den Gegenstand, um das gewünschte Gefühl leichter hervorzurufen. Zum Beispiel:",
   {t:"liste", x:["Der Fokus „Ekel vor Abwasser“ könnte eine Anomalie dazu bringen, Monster, Gerüche und Situationen zu erschaffen, die die Kanalisation für mehr Menschen ekelhaft erscheinen lassen.",
     "Der Fokus „Liebe zu diesem alten Baum“ könnte eine Anomalie dazu drängen, dem Baum hypnotisch schöne Blüten zu verleihen, die bei jedem, der sie betrachtet, Liebe erzwingen."]}],
  ["Den Fokus einer Anomalie zu verstehen und ihm vorübergehend nachzugeben, um Vertrauen aufzubauen, ist der häufigste Weg, sie zu fangen.",
   "Die **Domäne** einer Anomalie ist ihre Machtstätte und in der Regel die Stelle, an der sie in die Realität eingebrochen ist. Die Domäne zu betreten ist höchst gefährlich – aber fast immer nötig –, um die Anomalie selbst zu finden. Oft sind dies die Orte, an denen ihr Fokus am stärksten zu spüren ist."]
 ]}
];
/* S. 26 */
TA_TEXT["h/einsaetze/gefahren"] = [
 {t:"lead", x:"Das sind die größten Gefahren, denen du dich auf dem Weg zur Domäne der Anomalie stellen wirst."},
 {t:"sp", x:[
  [{t:"html", x:'<h3 class="hb-ik"><img src="img/zeichen/symbol-gefahr-chaos.png" alt="">Chaos</h3>'},
   "Chaos ist anomale Energie, die infolge der Handlungen deines Außenteams dem Universum hinzugefügt wird. Anomalien können Chaos zu vielen Zwecken und mit tödlicher Wirkung einsetzen. Wir ermutigen dich zwar, deine Fähigkeiten zur Erfüllung deines Einsatzes zu nutzen, doch wir mahnen dich, aufzupassen, wenn Chaos entsteht. Dein General Manager erfasst Chaos in einem abstrakten Raum namens **Chaos-Pool** und beschreibt, wie die Anomalie ihn mit **Chaos-Effekten** gegen dich einsetzt.",
   "Chaos-Effekte sind unbekannt, bis sie gegen dich eingesetzt werden, und können sich bei verschiedenen Anomalien in Kosten und Einzelheiten unterscheiden. Jede Anomalie hat ihren eigenen Stil, aber wenn du gut aufpasst, kannst du vielleicht Muster bei den Anomalien in deiner Gegend erkennen.",
   "Nicht verbrauchtes Chaos verschwindet am Ende jedes Einsatzes.",
   {t:"html", x:'<h3 class="hb-ik"><img src="img/zeichen/symbol-gefahr-kleine-anomalien.png" alt="">Kleine Anomalien</h3>'},
   "Ein unwirkliches Wesen ohne Domäne oder Fokus nennt man Kleine Anomalie. Mächtigere Anomalien setzen Chaos ein, um diese flexiblen, zwecklosen Wesen zu rekrutieren und damit über ihre üblichen Grenzen hinauszugreifen. Diese Geschöpfe können Agenten einsperren, gewöhnliche Ziele in gefährliche Situationen locken und sogar die Menge an Chaos erhöhen, die um sie herum entsteht.",
   "Kleine Anomalien erzeugen in der Regel nicht genug anomales Material, um umsatzpositiv zu sein; wir empfehlen daher, sie auf der Stelle mit Fähigkeiten, Anforderungen oder großer körperlicher Gewalt zu zerstören."],
  [{t:"html", x:'<h3 class="hb-ik"><img src="img/zeichen/symbol-gefahr-lose-enden.png" alt="">Lose Enden</h3>'},
   "Lose Enden sind gewöhnliche Köpfe mit sinnlichen Beweisen des Anomalen. Sie zu vermeiden hat äußerst hohe Priorität. Werden gewöhnliche Köpfe gefährlichen, die Realität destabilisierenden Ideen ausgesetzt – durch deine Fähigkeiten oder die eines Ziels –, ist es deine Aufgabe, sie davon zu überzeugen, dass alles völlig normal ist. Gelingt das nicht, musst du sicherstellen, dass sie keine Beweise so verbreiten können, dass andere sie glauben.",
   "Ein Loses Ende entspricht nicht genau einem einzelnen Kopf, denn die Gefahr liegt vor allem in der Fähigkeit zur Verbreitung. Ein Ehepaar mit allen gleichen Freunden ist vielleicht nur ein Loses Ende, während eine vertrauenswürdige Person des öffentlichen Lebens allein mehr als ein Dutzend darstellen könnte. Dein General Manager wird oft Dinge sagen wie „Diese Menschenmenge zählt als zehn Lose Enden. Du musst etwas gegen sie unternehmen, bevor du gehst.“ oder „Du kannst diese Fähigkeit einsetzen, aber weil dich jemand sehen kann, wird er zu einem Losen Ende.“",
   "Wissen über Anomalien stärkt ihre Macht: Die angesammelten Losen Enden deines Außenteams erhöhen die Menge an Chaos, die Anomalien zu Beginn jedes Einsatzes nutzen können. Schlampige Arbeit kann später tödliche oder ärgerliche Folgen haben.",
   {t:"html", x:'<h3 class="hb-ik"><img src="img/zeichen/symbol-gefahr-terminplanung.png" alt="">Terminplanung</h3>'},
   "Gelegentlich stören deine Tisch-Ichs den Abschluss des Einsatzes, indem sie glauben, sie hätten am Tag des Einsatzes etwas „vergessen“ oder „Wichtigeres zu tun“. Das ist eine Lüge und kann einfach ignoriert werden."]
 ]}
];
/* S. 27 */
TA_TEXT["h/einsaetze/fangen"] = [
 {t:"sp", x:[
  ["Sobald du den Fokus einer Anomalie erkannt und ihre Domäne betreten hast, erfordert es meist eines der folgenden Verfahren, eine Anomalie für das Fangen im Normalen Aktenkoffer zu beruhigen:",
   {t:"html", x:'<div class="hb-zeilen">' +
    '<div><img src="img/zeichen/symbol-fangen-zufrieden.png" alt=""><p><b>Ihren Fokus vorübergehend befriedigen</b> (führt zu Zufriedenheit)</p></div>' +
    '<div><img src="img/zeichen/symbol-fangen-verwirrt.png" alt=""><p><b>Sie davon überzeugen, dass ihr Handeln kontraproduktiv ist</b> (führt zu Verwirrung)</p></div>' +
    '<div><img src="img/zeichen/symbol-fangen-verzweifelt.png" alt=""><p><b>Die Quelle ihres Fokus beseitigen</b> (führt zu Verzweiflung)</p></div></div>'},
   "Zurück in „Ein perfekter Einsatz“ sind die Agenten dem ersten Weg gefolgt. Sie hätten der Anomalie stattdessen zeigen können, wie der Perfektionismus des Sandwich-Künstlers sein Leben ruiniert, oder den Sandwich-Künstler ganz aus der Situation entfernen können."],
  ["Nicht jede Möglichkeit funktioniert bei jeder Anomalie. Wenn du keinen Weg zu diesen Ergebnissen erkennen kannst, besteht eine alternative Methode darin, ihre Energie mit einer großen Menge körperlicher Gewalt zu erschöpfen.",
   "Anomalien nehmen in der Regel eine Form an, die mit ihrem Fokus zusammenhängt, oder bewohnen einen Gegenstand oder ein Tier aus ihrer Domäne. Das Erscheinungsbild einer Anomalie kann ein Hinweis auf diese Einzelheiten sein – und in manchen Fällen ihre größte Waffe.",
   "Sei äußerst vorsichtig im Umgang mit einer Anomalie, die die Gestalt eines fühlenden Wesens angenommen hat."]
 ]},
 {t:"bild", src:"agent-zerfaellt-rot", pos:"mitte", w:620}
];
/* S. 28 und Tabelle S. 29 */
TA_TEXT["h/einsaetze/kennzahlen"] = [
 {t:"sp", x:[
  [{t:"html", x:'<h3 class="hb-ik"><img src="img/zeichen/symbol-belobigung.png" alt="">Belobigungen</h3>'},
   "Belobigungen sind ein Zeichen dafür, dass du großartige Arbeit leistest! Dein GM vergibt sie, wenn du auf von der Agency gebilligte Weise handelst. Belobigungen nutzen unser patentiertes **Emotionales Währungssystem**, das heißt, du kannst beim Erhalt die Anerkennung der gesamten Agency spüren.",
   "Dieses Gefühl wurde als ähnlich beschrieben wie: ein anerkennendes Lächeln eines vertrauten Mentors, ein zusätzliches Getränk, das aus einem Automaten fällt, Ruhe in einer Mulde, die perfekt auf deinen Körper zugeschnitten ist, oder die Entdeckung, dass jemand anderes eine nötige Möbelreparatur erledigt hat, während du fort warst. Für viele genügt aber schon die Befriedigung einer wachsenden Zahl.",
   "**Tätigkeiten, die Belobigungen einbringen:**",
   {t:"liste", x:["Anomalien erfolgreich fangen", "Das Gebilligte Verhalten deiner Kompetenz erfüllen", "Bestimmte Optionale Ziele erfüllen", "Einem anderen Agenten hilfreich eine Regel erklären", "Erkennen, wann ein anderer Agent einen Verweis erhalten sollte", "Beispielhafte Loyalität gegenüber der Agency zeigen, wie von deinem GM beurteilt"]},
   "Belobigungen bestimmen, wer die **MVP-Auszeichnung** eines Einsatzes erhält, und dienen zum Kauf von Anforderungen, darunter Büro-Extras, Merchandise und Ermittlungswerkzeuge, die dein Selbstwertgefühl und den Erfolg deiner Einsätze steigern!"],
  [{t:"html", x:'<h3 class="hb-ik"><img src="img/zeichen/symbol-verweis.png" alt="">Verweise</h3>'},
   "Verweise sind unsere höfliche Art, dir mitzuteilen, dass es Raum für Verbesserung gibt. Du solltest nicht sehr viele davon ansammeln – und dank des Emotionalen Währungssystems wirst du das auch nicht wollen!",
   "Das Gefühl, einen Verweis zu erhalten, wurde verglichen mit: lauter Mikrofon-Rückkopplung, einem einzelnen kostbaren Gegenstand, der bei deiner Heimkehr fehlt, dem Erhalt einer E-Mail oder der plötzlichen Erkenntnis, dass alle ohne dich unterwegs sind.",
   "**Tätigkeiten, die Verweise einbringen:**",
   {t:"liste", x:["Anomalien entkommen lassen", "Die Ripple Gun auf unwichtige Ziele abfeuern", "Die Oberste Direktive deiner Kompetenz verletzen", "Bestimmte Optionale Ziele erfüllen", "Deine Anomalie-Fähigkeiten außerhalb der Arbeit einsetzen", "Die Regeln des Spiels aus erzählerischen Gründen beugen oder brechen", "Illoyales Verhalten oder negative Äußerungen über die Agency, wie von deinem GM beurteilt"]},
   {t:"h3", x:"Ansehen in der Agency"},
   "Verweise verändern dein Ansehen in der Agency. Agenten beginnen ihre Laufbahn mit gutem Ansehen. Jedes Mal, wenn du einen Verweis erhältst, löschst du dein bisheriges Ansehen sofort und ersetzt es durch dein neues Ansehen."]
 ]},
 {t:"html", x:'<div class="hb-ans"><div>' +
  [[0,"Gutes Ansehen"],[1,"Verbesserung nötig"],[2,"Dringende Verbesserung nötig"],[3,"Dieser Angestellte"],[4,"Allein beim Mittagessen"],[5,"Ziel passiver Aggression"]].map(function(r){ return '<section><img src="img/zeichen/symbol-ansehen-' + r[0] + '.png" alt=""><em' + (r[0] == 3 ? ' class="drei"' : '') + '>' + r[0] + '</em><span>' + r[1] + '</span></section>'; }).join('') +
  '</div><div>' +
  [[6,"Von Partys ausgeladen"],[7,"Wir hatten solche Hoffnungen in dich gesetzt"],[8,"Es ist noch Zeit, sich zu ändern"],[9,"Bitte tu das nicht"]].map(function(r){ return '<section><img src="img/zeichen/symbol-ansehen-' + r[0] + '.png" alt=""><em>' + r[0] + '</em><span>' + r[1] + '</span></section>'; }).join('') +
  '<div class="sperr"><img src="img/zeichen/symbol-ansehen-10.png" alt=""><span>Zugang zum Frozen-Yogurt-Raum entzogen <b>10+</b></span></div></div></div>'}
];
/* S. 29 */
TA_TEXT["h/einsaetze/andere"] = [
 {t:"h", x:"Alternative Einsatz-Möglichkeiten"},
 "Die Anomalie-Bergung ist nicht die einzige Einsatzart! Je nach Wirksamkeit, Lage und politischem Klima deiner Zweigstelle schickt dein GM dein Außenteam womöglich zu einem der folgenden alternativen Einsätze:",
 {t:"sp", x:[
  [{t:"html", x:'<h3 class="hb-ik"><img src="img/zeichen/symbol-aufraeumen.png" alt="">Aufräumen</h3>'},
   "Wenn eine Anomalie sich selbst zerstört oder von einem anderen Außenteam gefangen wird, dabei aber viele Lose Enden entstanden sind, werden Agenten manchmal losgeschickt, um die beteiligten Personen aufzuspüren und die Verbreitung gefährlichen Wissens einzudämmen.",
   "Für diese Einsätze werden Außenteams meist in Gebiete außerhalb ihrer üblichen Region geschickt. Betrachte sie als Arbeitsurlaub!",
   "Wenn du so viele Lose Enden angehäuft hast, dass deine Region gefährlich chaotisch wirkt, kannst du einen Aufräum-Einsatz in deiner Region beantragen, um deine früheren Fehler noch einmal aufzusuchen und hinter dir aufzuräumen."],
  [{t:"html", x:'<h3 class="hb-ik"><img src="img/zeichen/symbol-marktstoerung.png" alt="">Marktstörung</h3>'},
   "Gelegentlich bekommt eine gewöhnliche Organisation oder eine mächtige Persönlichkeit Wind von unseren Aktivitäten und versucht, uns zu enttarnen oder nachzuahmen. Außendienst-Agenten werden womöglich losgeschickt, um diese Konkurrenten abzulenken, umzulenken oder auszuschalten.",
   "Ziele für Marktstörungs-Einsätze werden vielleicht bei anderer Arbeit entdeckt: Auch wenn die erste Priorität der Agency stets aktiven Anomalien gilt, muss irgendwann auch mit denen abgerechnet werden, die anomale Macht zu ihrem eigenen Vorteil nutzen.",
   "Bist du gut darin, Probleme zu erkennen, bevor sie entstehen? Beantrage einen Marktstörungs-Einsatz, indem du deinen GM auf eine mögliche Bedrohung in deiner Gegend aufmerksam machst."]
 ]}
];
/* S. 30–31 */
TA_TEXT["h/einsaetze/bericht"] = [
 {t:"h", x:"Dokumente hinter der Playwall"},
 {t:"sp", x:[
  ["Einer der vielen Fortschritte für die Tabletop-Rollenspiel-Initiative der Triangle Agency ist unser einzigartiges **Play-to-Play**-System.",
   "Um dich vor einer erdrückenden Menge komplizierter und verbotener Informationen zu schützen, sind viele Regeln und Funktionen hinter der **Playwall** verborgen, die sich auf {S.198} nach dem Werkzeug der Geschäftsleitung befindet.",
   "Nach bestimmten Erfolgen, Misserfolgen oder Entscheidungen wirst du durch ein Symbol, das so aussieht, zu bestimmten Dokumenten hinter der Playwall geschickt:",
   {t:"html", x:'<p style="margin:14px 0"><img src="img/zeichen/symbol-akte-schloss.png" alt="" style="height:46px;vertical-align:middle;margin-right:10px"><a class="gehzu" style="font-size:22px;padding:10px 14px 8px" onclick="pwPop(\'A1\')">A1</a></p>'}],
  ["Dokumente hinter der Playwall sind persönlich und sollten nur geteilt werden, wenn die Informationen oder Effekte, auf die du zugegriffen hast, für das Spiel relevant werden.",
   "Du bist nun offiziell berechtigt, hinter der Playwall [[A1]], um den Eintrag mit dem Titel **Einsatzbericht** einzusehen.",
   "Wenn du das getan hast, kehre bitte sofort hierher zurück und sieh dir auf dem Weg nichts anderes an, lies nichts anderes und erlebe nichts anderes. Tust du es doch, vermerke bitte, dass du deinen General Manager daran erinnerst, dass du deine <Anstellung/Kampagne> mit einem Verweis für jede unrechtmäßig eingesehene Seite beginnst. Aktualisiere unbedingt dein Ansehen."]
 ]},
 {t:"sp", x:[
  [{t:"bild", src:"agencyos-wesen-rechner", pos:"mitte", w:380}],
  [{t:"kasten", h:"AgencyOS", b:[
    "Der Abschnitt mit den Dokumenten hinter der Playwall wird wie der Rest dieses Handbuchs von **AgencyOS** erstellt, bearbeitet und überwacht: einer firmeneigenen Agency-Software, die Angestellte automatisch mikromanagt, um das perfekte Dokument für dein Außenteam zu erstellen.",
    "Alles, was du tust, sagst und schreibst, wird zur Analyse an AgencyOS übermittelt. Es verwandelt deine Einsatzberichte in Arbeitsanweisungen für Vault-Architekten, dein Verhalten in aktualisierte Handbücher für künftige Angestellte und deine Essensvorlieben in Angebote der Kantine.",
    "Wenn du dich das nächste Mal beobachtet fühlst, sag „Danke, AgencyOS!“"]}]
 ]},
 {t:"h", x:"Der Einsatzbericht"},
 {t:"sp", x:[
  ["Dieser muss von deinem Außenteam bei jedem Einsatz ausgefüllt und für unsere Unterlagen eingereicht werden. Ein gründlich ausgefüllter Einsatzbericht bringt allen im Team jeweils **6 Belobigungen** ein.",
   {t:"h3", x:"Anomalie-Status"},
   "Ob die Anomalie gefangen, neutralisiert wurde oder entkommen ist. Beachte, dass die Option „Sonstiges“ nur bei Einsätzen angebracht ist, bei denen es nicht um eine Anomalie-Bergung geht.",
   {t:"h3", x:"Lose Enden"},
   "Agenten müssen alle in diesem Einsatz angefallenen Lose Enden vermerken. Agenten müssen nichts über die Zahl hinaus festhalten, doch das Notieren von Identitäten kann Gelegenheiten bieten, sie in einem späteren Einsatz aufzuräumen."],
  [{t:"h3", x:"Anomalie-Analyse"},
   "Nutze diese Stelle, um wichtige Einzelheiten über die Anomalie zu sammeln, die du untersuchst.",
   {t:"liste", x:["**Alias** ist ein Deckname für die Anomalie, meist vom Außenteam festgelegt.",
     "**Verhalten** steht für Vorlieben, Abneigungen, Fähigkeiten der Anomalie und alles andere, was für ihre weitere Erforschung im Vault nützlich ist.",
     "**Fokus** ist die Idee oder das Gefühl, das sie in ihren Zielen zu vervielfältigen sucht.",
     "**Domäne** ist die Machtstätte der Anomalie, oft der Ort ihres Einbruchs in die Realität."]},
   {t:"h3", x:"Abschlussnote des Einsatzes"},
   "Dein GM prüft diesen Bericht und vergibt eine Buchstabennote, die die Leistung deines Außenteams anzeigt. Superlative werden nach deinem ersten abgeschlossenen Einsatz erklärt."]
 ]},
 {t:"h", x:"Checkliste nach dem Einsatz"},
 {t:"sp", x:[
  [{t:"h3", x:"Einsatzergebnisse"},
   "**Gefangen:** {3} Belobigungen für jeden Agenten",
   "**Neutralisiert:** Keine Belobigungen oder Verweise",
   "**Entkommen:** {3} Verweise für jeden Agenten",
   {t:"h3", x:"Berichtsabschluss"},
   "**Vorbildlich** *(gründlich, keine Fehler)*: 6 Belobigungen für jeden Agenten",
   "**Vollständig** *(alles beantwortet, bei Prüfung im Vault ungefähr richtig)*: {3} Belobigungen für jeden Agenten",
   "**Unvollständig oder ungenau:** Keine Belobigungen oder Verweise"],
  [{t:"h3", x:"Optionale Ziele"},
   "Vergib Belobigungen und Verweise für alle erfüllten Optionalen Ziele.",
   {t:"h3", x:"Abschlussverteidigung"},
   "Agenten dürfen General Manager um Belobigungen anflehen, die sie nicht erhalten haben oder auf die sie während des Einsatzes nicht hingewiesen haben. Sie dürfen auch versuchen, Verweise aus ihrer Akte zu tilgen, die ihrer Meinung nach zu Unrecht vergeben wurden.",
   "Nach der Abschlussverteidigung können die Ereignisse eines Einsatzes nicht mehr für künftige Belohnungen herangezogen werden. Superlative werden nach der Abschlussverteidigung vergeben."]
 ]}
];
