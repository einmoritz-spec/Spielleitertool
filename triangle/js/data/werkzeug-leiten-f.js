/* Werkzeug › Leiten S. 185–193 (AMail, MyContract Works, Enden) */
var WKF_AN = function(s){ return '<span class="an">' + s + '</span>'; };

TA_TEXT["w/leiten/checkliste"] = [
 {t:"os", art:"wirbel", cls:"wkf-check", b:[
  {t:"kasten", cls:"wkf-links", b:[
   {t:"prog", art:"mail", titel:"Nachricht von mir : )", von:"ich : )", betreff:"Dein General Manager", cls:"wkf-vorn", b:[
    "Liebes Du,",
    "du bist mit einer ganz bestimmten Figur eng verbunden: dem General Manager des Außenteams. Lege sein Aussehen, seine Persönlichkeit und seine Vorgeschichte fest; war er Außendienst-Agent, bevor er General Manager wurde? Wurde er aus einer anderen Zweigstelle geholt, oder ist er schon immer hier? Spielt er Psychospielchen? Hat er einen Verstand? Gehört er zu den seltenen Angestellten, die die Agency verlassen? Wenn ja, wie entwischt er seinen eigenen Vorgesetzten? Du bist der General Manager, das heißt, ihr habt beide eine Agenda. Ich hoffe, es ist eine, die mir gefällt."]},
   {t:"prog", art:"mail", titel:"Nachricht von mir : )", von:"dein Kumpel", betreff:"Dein General Manager", cls:"wkf-hinten", b:[
    "Aufrichtig,\nwieder ich",
    "habe diesen beispieleinsatz zum herunterladen gestartet während du die checkliste durchliest ok",
    {t:"html", x:'<div class="wkf-dl"><b>✎ Einsatz_Beispiel.mcw</b><small>Wird heruntergeladen …</small><div class="wkf-bar"><i style="width:78%">78 % abgeschlossen</i></div></div>'}]},
   {t:"html", x:'<img class="wkf-logo" src="img/regeln/full/os-logo-mycontract-works.webp" alt="">'}]},
  {t:"kasten", cls:"wkf-rechts", b:[
   {t:"prog", art:"mail", titel:"AMail – Verfassen", an:"Dein zukünftiges Ich", betreff:"Bitte benutze diese Checkliste", cls:"wkf-amail", b:[
    "Hier ein kurzer Überblick, was du bei der Planung eines Einsatzes tun solltest. Nichts kann dich völlig darauf vorbereiten, was deine Agenten dir entgegenwerfen, aber das hier gibt dir einen soliden Start.",
    {t:"haken", x:"Ermittle alle nachwirkenden Folgen des vorherigen Einsatzes"},
    {t:"haken", x:"Prüfe die aktuelle Anzahl der Losen Enden und würfle die Wetterereignisse aus"},
    {t:"haken", x:"Wähle die Einsatzart"},
    {t:"html", x:'<div class="wkf-ast"><label class="wkf-rad"><input type="radio" name="wkf-art" checked><span>' + WKF_AN("Anomalie") + '-Bergung</span></label><label class="wkf-rad"><input type="radio" name="wkf-art"><span>Aufräum-Einsatz</span></label><label class="wkf-rad"><input type="radio" name="wkf-art"><span>Marktstörung</span></label></div>'},
    {t:"haken", x:"Entwickle den Einsatz"},
    {t:"html", x:'<div class="wkf-ast"><table class="wkf-tb"><tr><th>' + WKF_AN("Anomalie") + '-Bergung</th><td>Entwickle eine ' + WKF_AN("Anomalie") + '</td></tr><tr><th>Aufräum-Einsatz</th><td>Entwickle ein auslösendes ' + WKF_AN("anomales") + ' Ereignis und eine Gemeinschaft</td></tr><tr><th>Marktstörung</th><td>Bestimme ein Ziel</td></tr></table></div>'},
    {t:"haken", x:"Bereite die Ermittlung vor"},
    {t:"html", x:'<ul class="wkf-fr"><li>Liegt dein Schwerpunkt vor allem auf Rätseln, Herausforderungen oder Schweren Entscheidungen?</li><li>Wer sind die wichtigsten beteiligten Personen?</li><li>Welche Beziehungen werden wahrscheinlich auftauchen?</li><li>Kehren Gegenspieler zurück?</li><li>Welche Fraktionen könnten ein Interesse an der Lage haben?</li><li>Würden Agenten-Fähigkeiten oder Work-Life-Balance-Vorteile auf wichtige Weise mit diesem Einsatz zusammenwirken?</li></ul>'},
    {t:"haken", x:"Teile jedem Agenten eine Morgenbesprechung zu"},
    {t:"html", x:'<ul class="wkf-fr"><li>Was hat jeder Agent beim letzten Mal getan, und kannst du dafür sorgen, dass es diesmal anders ist?</li><li>Welche Work-Life-Balance-Option haben sie bisher gemieden?</li><li>Welche Figuren standen schon länger nicht mehr im Rampenlicht?</li></ul>'}]}]}
 ]}
];

TA_TEXT["w/leiten/beispiel"] = [
 {t:"os", art:"wirbel", cls:"wkf-os", b:[
  {t:"prog", art:"works", titel:"MyContract Works ‘98", cls:"wkf-works", b:[
   {t:"kasten", cls:"wkf-blatt", b:[
    {t:"html", x:'<h2 class="wkf-wa blau"><span>Beispieleinsatz</span></h2>'},
    {t:"html", x:'<div class="wkf-sp4">' + [
     "<p>Fassen wir alles zusammen. In diesem Buch ist nur begrenzt Platz, deshalb ist dies ein einfacher " + WKF_AN("Anomalie") + "-Bergungs-Einsatz, der vor allem ein Rätsel ist. Er eignet sich gut für neue Außenteams, denn selbst wenn sie alle deine Hinweise ignorieren, können sie sich bis zum Ende durchschlagen und haben trotzdem einen netten, schrägen Kampf.</p>",
     "<p><b>Morgenbesprechungen:</b> Der größte Workaholic in deinem Team wird zu einer Besprechung mit einer aufgebrachten Tochterfirma gerufen: Offenbar sorgt ein neuer Eiswagen in der Stadt für Aufsehen, und ihr Vertrag mit der <span class=\"ag\">Agency</span> sieht vor, dass Frozen Yogurt die beliebteste Süßspeise Ternion Citys bleibt – also muss die Abteilung deines Agenten helfen. Lass dir ihre Ideen für einen Plan geben, der zu ihrer Kompetenz passt.</p>",
     "<p>Der gesellige Schmetterling deines Teams wird zu einer Pop-up-Veranstaltung in der Stadt eingeladen. Cooles, spontanes Ding, hat noch nicht mal einen Ort. Eine Beziehung läuft, und sie verweist auf den Social-Media-Fanaccount eines geheimnisvollen Eiswagens, der angeblich das beste Zeug der Stadt verkauft. Der Ort wird später am Tag bekanntgegeben. Nehmen sie die Einladung an?</p>",
     "<p>Der Musterschüler sieht auf dem Weg zur Arbeit, wie ein Auto aus seiner Spur ausschert. Versuche ihn: Setzt er seine Kräfte ein, um es aufzuhalten? So oder so erhascht er, wenn sich alles beruhigt hat, einen Blick darauf, warum: Der Fahrer ist massiv gefroren und von einer dünnen Eisschicht umhüllt. Er ist tot.</p>",
     "<p>Alle anderen kannst du mit etwas Leichterem, weniger Verbundenem einstreuen. Idealerweise erwähnst du in irgendeiner anderen Situation, wie glühend heiß die Sonne gerade ist. (Es ist Sommer, oder ungewöhnlich warm.)</p>",
     "<p><b>Briefing:</b> Du hast es erraten. Auf den Straßen frieren Menschen ein. Die einzige Spur, die die <span class=\"ag\">Agency</span> zusammengetragen hat, ist ein jüngster Anstieg von Social-Media-Posts über einen geheimnisvollen, markenlosen Eiswagen, in den die Leute bis über beide Ohren verliebt sind.</p>",
     "<p>Sie haben bekannte Einfrierfälle mit bekannten Orten kartiert, und ja: Die Muster stimmen überein. Die Allgemeinheit hat es aber noch nicht bemerkt, und es trifft nicht jeden, der es probiert.</p>",
     "<p>Piep: Der gesellige Schmetterling bekommt eine SMS und, falls er die Einladung abgelehnt hat, eine passiv-aggressive Nachricht. Eiswagen: gesichtet. Party: gestartet. Diese Beziehung ist in Gefahr. Sie sollten sich besser beeilen, und ihr General Manager (du) erinnert den Workaholic daran, dass das Einfangen dieser " + WKF_AN("Anomalie") + " ihm auch den Froyo-Typen vom Leib schafft. Es ist persönlich.</p>",
     "<p><b>Einsatz:</b> Flagge geschwenkt. Sie sind unterwegs. Sie können hingehen, wohin sie wollen, aber du weißt, wo sie landen werden: auf dieser Party. Die Adresse ist Eiszapfenweg <b class=\"drei\">33</b>, weil dir heute ein bisschen nach Niedlichkeit ist. Es stellt sich heraus: eine Poolparty! Die Party läuft, aber die Menge ist nicht allzu wild. Es ist gutes Eis, aber eben buchstäblich Eis, also reden wir von ein paar Dutzend echten Eisfreaks, aber nicht viel mehr.</p>",
     "<p>Erste Frage: Wie fügen sie sich ein? In Business-Kleidung auf eine Poolparty zu spazieren, zieht einige Blicke an. Frag sie nach ihrem Vorgehen.</p>",
     "<p>Dein Ziel hier ist, ihnen sämtliche Informationen über die " + WKF_AN("Anomalie") + " durch eine Reihe interessanter Szenen zukommen zu lassen. Du sagst ihnen die Stimmung des Ortes und folgst dann, wohin sie führen, und suchst nach Stellen, an denen du Hinweise einschleusen kannst. Denk an die Teile der " + WKF_AN("Anomalie") + ", die du vermitteln sollst: Fokus, Impuls, Domäne, Geschichte, Erscheinung. Was ich dir gleich verrate, wenn du dich mal abkühlst! (Zu früh?)</p>",
     "<p><b>Impuls:</b> Sie wissen bereits, dass der Eiswagen hier Leute einfriert! Offenbar zeitverzögert und offenbar nicht alle, aber dank der Kraft der Erzählung wissen sie, dass es hier einen Zusammenhang gibt. Genau das solltest du dem Musterschüler sofort unter die Nase reiben: Leute bestellen Eis bei diesem Wagen.</p>",
     "<p>Lassen sie das etwa einfach geschehen? Wie können sie Lose Enden vermeiden und die Leute trotzdem davor bewahren, zu Eis zu werden? Sind sie jedoch zu offensichtlich in ihren Absichten, braust der Wagen davon und entkommt!</p>",
     "<p><b>Erscheinung:</b> Sie denken wahrscheinlich, es sei dieser Eiswagen, und liegen damit halb richtig. Eigentlich ist es das Eis im Inneren, deshalb funktioniert die Ripple Gun erst, wenn sie dort drin sind. Vielleicht denken sie zu viel nach (großartig), aber ihr erster Anlaufpunkt ist wohl der Wagen selbst. Wenn sie ankommen, steht der Wagen schon da! Pastellblaue Lackierung, ein großer Vinyl-Aufkleber einer Eiswaffel auf einer Seite, ohne Markennamen.</p>",
     "<p>Die andere Seite ist wie bei vielen Eiswagen: bedeckt mit Bildern von allem, was angeboten wird. Statt bekannter Sorten oder Eis-am-Stiel-Figuren sieht jedoch alles ein wenig falsch aus. Tatsächlich verändert es sich, wenn man weiter hinsieht, und zeigt genau das, was man will. Nicht nur Eis, sondern alles, was Erleichterung von der Hitze brächte: kühle Getränke, Kühlpacks, ein Trägershirt. Frag sie, was sie sehen, wenn sie hinschauen. Bestellen sie etwas, reicht eine Hand, so kalt, dass sie ihren eigenen Nebel abgibt, es durch eine Luke.</p>",
     "<p>Die Türen sind verschlossen und gegen physische Beschädigung immun. Keine Fenster außer der Windschutzscheibe, die innen vollständig von verlaufendem, geschmolzenem Eis bedeckt ist.</p>",
     "<p>Wenn sie Leckereien nehmen und essen oder benutzen, wird die Sonderregel der " + WKF_AN("Anomalie") + " aktiv: Steigt irgendwann ihr Puls oder ihre Körpertemperatur deutlich, beginnen sie einzufrieren. Zuerst fühlt es sich wie eine riesige Erleichterung an, dann tötet es sie. Für Agenten wird das durch 2 Schaden dargestellt, den sie bei Aktivierung mit Fähigkeiten oder QS zu vermeiden versuchen können. Weise darauf hin, falls sie je anfangen zu rennen oder zu schwitzen.</p>",
     "<p><b>Geschichte:</b> Wenn sie auf der Poolparty herumfragen und dem Ruf des Wagens nachgehen, erfahren sie, dass er seit ein paar Monaten unterwegs ist und immer an ungewöhnlich heißen Tagen wie diesem auftaucht. Der Besitzer muss aber einen seltsamen Humor haben: Der Wagen wurde auch bei Hausbränden gesichtet, was geschmacklos ist, aber die Leckereien sind so gut, dass sich niemand wirklich beschwert hat.</p>",
     "<p><b>Fokus:</b> Erleichterung von der Hitze. Er nährt sich von dem Moment, in dem das Einfrieren beginnt, versteht aber nicht, dass er sie dafür nicht vollständig einfrieren muss. Sobald du das Gefühl hast, dass sie sich auf der Party eingelebt haben, fang an, Leute in verräterischen Hitzesituationen einzufrieren: Sonnenanbeter. Jemand, der am Pool vorbeirennt. Der Typ, der zu viele Schichten trug. All die heißesten Leute, die sich eben noch am lautesten beschwert haben? Jetzt sind sie mit einem Lächeln auf dem Gesicht erstarrt.</p>",
     "<p><b>Domäne:</b> Das Innere des Eiswagens. Sie können ihre Kräfte nutzen, um hineinzukommen, oder die " + WKF_AN("Anomalie") + " austricksen: Wenn sie laut über die Hitze klagen, aber eine Ausrede haben, keine Leckerei zu nehmen, oder die Leckereien ablehnen, öffnet die " + WKF_AN("Anomalie") + " die Tür und lässt sie ins kalte Innere. Denk daran, dass Chaos dort drin zum dreifachen Wert ausgegeben wird.</p>",
     "<p><b>Begegnung:</b> Die " + WKF_AN("Anomalie") + " will weitermachen mit dem, was sie tut, und sobald die Agenten drin sind, wird sie versuchen, sie zu töten. Eine menschenähnliche Gestalt aus ständig wirbelndem, halb geschmolzenem Eis wird versuchen, sie zu umarmen, denn jede Berührung verursacht sofort 2 Schaden, während das Ziel zu erfrieren beginnt.</p>",
     "<p>Um sie zu eliminieren, können sie sie mit der Ripple Gun erledigen. Um sie zu fangen, können sie sie aus dem Wagen locken, damit sie vollständig zu etwas Harmlosem schmilzt, oder allen auf der Party helfen, sich auf normalere Weise abzukühlen, und sie so sättigen und beruhigen. Wenn sie alle einfrieren oder der Wagen davonfährt und sie ihn verlieren, entkommt sie.</p>",
     "<p><b>Beziehungen, Gegenspieler und Fraktionen:</b> Platziere Leute auf der Party! Willst du eine Konkurrenzfirma einführen? Lass auch hier einen Vertreter auftauchen, der den Wagen untersucht. Wenn Leute einzufrieren beginnen, werden überall Lose Enden herumliegen. Wenn sie welche zurücklassen, überlege, zu enthüllen, dass es sich um jemand Wichtigen in deinem nächsten Einsatz handelt.</p>"
    ].join("") + '</div>'}]}]}
 ]}
];

TA_TEXT["w/leiten/beurteilung"] = [
 {t:"os", art:"wirbel", cls:"wkf-os", b:[
  {t:"prog", art:"works", titel:"MyContract Works ‘98", cls:"wkf-works", b:[
   {t:"kasten", cls:"wkf-blatt wkf-beurt", b:[
    {t:"html", x:'<h2 class="wkf-wa rosa"><span>Beurteilung</span></h2>'},
    "Du willst also ein „guter GM“ sein, was? Hier noch ein paar andere Grundlagen, die du im Hinterkopf behalten solltest.",
    "Versuche, Belobigungen und Verweise konsequent zu vergeben, aber mach dir keinen Kopf, wenn dir mal eine entgeht. Verteile sie ruhig großzügig und halte dich nur zurück, wenn es einen Charakter dazu bringt, etwas Interessanteres zu tun.",
    "Wenn ein Spieler das System ausnutzt, um massenhaft Belobigungen oder Verweise anzuhäufen, ist das in Ordnung – außer es wird langweilig oder bremst das Spiel. Du kannst jederzeit sagen: „Die Agency vergibt für dieses Verhalten keine weiteren.“ Einfach.",
    "Wenn Leute die Regeln brechen wollen, etwa indem sie ihre Fähigkeiten auf kleine Weise einsetzen, die von ihren Fähigkeiten nicht ausdrücklich gedeckt ist: schön. Gib ihnen einen Verweis fürs Regelbrechen und mach weiter. Brechen sie die Regeln jedoch oft oder auf große Weise, wird die Agency es bemerken. Apropos:",
    {t:"fenster", art:"fehler", z:"symbol-chaos-wirbel", titel:"Leistungsbeurteilung", w:760, b:[
     {t:"html", x:'<h3 class="wkf-fh">Leistungsbeurteilung</h3>'},
     {t:"sp", x:[[
       "Sieh dir nach jedem Einsatz die Losen Enden, Belobigungen, Verweise und das Einsatzergebnis an und bestimme den Erfolg deines Teams auf einer Skala von AAA bis F. Wir empfehlen, die Note intuitiv zu erfühlen und zu entscheiden, welche Note deine Agenten am besten motivieren würde.",
       "Sage ihnen jedoch nicht, dass die Noten willkürlich sind. Agenten streben eher nach Höchstleistungen, wenn du so tust, als gäbe es ein striktes Regelwerk, das in ihre Note einfließt.",
       "Haben ein Agent oder mehrere Agenten im Verlauf des Einsatzes die Wünsche der Agency auf **ernste und kompromisslose Weise** missachtet, kannst du entscheiden, wer die Probezeit erhält, oder sie mehreren Agenten zuweisen. Das bewegt sie auf der Verbesserungsleiste weiter, und sie werden danach bestraft, wie oft sie die Standards nicht erfüllt haben. Reicht das nicht aus, hier eine kurze Liste von Werkzeugen, die du nach eigenem Ermessen einsetzen kannst:"],
      [{t:"liste", x:[
        "Überhäufe ihre Freunde und Rivalen mit Leckereien aus dem Frozen-Yogurt-Raum",
        "Beschränke Telefon- und Internetzugang auf dienstliche Zwecke",
        "Führe Austrittsgespräche jedes Mal, wenn sie das Gebäude verlassen",
        "Versetze sie und ihre Teamkollegen in die Nachtschicht (oder in die Tagschicht, falls gerade Nachtschicht ist)",
        "Zwinge sie zum „Clopening“, das heißt, früh am Morgen zu arbeiten, nachdem sie spät gearbeitet haben."]},
       "Deine Agenten machen durch ihr Handeln deutlich, was ihnen am wichtigsten ist. Genau dort sind sie für Motivationstechniken am verwundbarsten!",
       {t:"html", x:'<div class="wkf-folder"><svg viewBox="0 0 230 130"><path d="M6 36h44l9 11h56a6 6 0 0 1 6 6v52a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V42a6 6 0 0 1 6-6z" fill="#c8202f"/><path d="M128 62l36-22m0 0l-12 1m12-1l-4 11M128 84l36 22m0 0l-12-1m12 1l-4-11" stroke="#c8202f" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="196" cy="30" r="26" fill="none" stroke="#c8202f" stroke-width="6"/><circle cx="187" cy="24" r="3.5" fill="#c8202f"/><circle cx="205" cy="24" r="3.5" fill="#c8202f"/><path d="M182 36q14 14 28 0" fill="none" stroke="#c8202f" stroke-width="5" stroke-linecap="round"/><circle cx="196" cy="100" r="26" fill="none" stroke="#c8202f" stroke-width="6"/><circle cx="187" cy="94" r="3.5" fill="#c8202f"/><circle cx="205" cy="94" r="3.5" fill="#c8202f"/><path d="M182 116q14-14 28 0" fill="none" stroke="#c8202f" stroke-width="5" stroke-linecap="round"/></svg></div>'}]]}]}]}]}
 ]}
];

TA_TEXT["w/leiten/veraergern"] = [
 {t:"os", art:"wkf", cls:"wkf-augen", b:[
  {t:"buddy", pos:"l", b:[
   "Ich werde den Agenten jede Menge Gründe geben, die Agency zu stören. Ich will, dass sie diesen Laden auseinandernehmen! Aber das Spiel wird von der Agency kontrolliert und ist nur spielbar, solange sie angestellt sind. Manchmal musst du die Grenzen der Agency durchsetzen, um einen vorzeitigen Ruhestand der Agenten zu verhindern.",
   "Hier meine Empfehlung Nr. 1: Wenn es so aussieht, als verhalte sich ein Agent so, dass die Agency es bemerken und *wirklich* hassen würde – etwa indem er sich lautstark gegen sie äußert, ständig seine Kollegen behindert oder astronomisch viele Verweise anhäuft –, **schiebe ihn auf der Work-Life-Balance-Leiste der Anomalie nach unten.**"]},
  {t:"buddy", pos:"r", b:[
   "Wie das Dreieck eben sagte, darfst du manipulieren, wie Superlative vergeben werden und wie die Zeitphase abläuft. In den extremsten Fällen verbringe Zeit für sie. Das ist ein großer Schritt, der starke Gefühle bedeuten kann, also setze ihn nur in extremen Fällen ein.",
   "Informiere sie nach einem Einsatz, bei dem sie sich danebenbenommen haben, dass die Agency ihr Verhalten bemerkt und ihre voraussichtliche Zeit in dieser Position verkürzt hat. Gib ihnen alle normalen Vorteile des Zeitverbringens in ihrer Anomalie und lass sie die Zeit wie üblich markieren. Das bringt ihnen einen Bonus: Sie sind den anderen in Zeit und Machtstufe voraus und haben mehr Zugang zu mir! Aber diese Leiste ist auch der Weg, wie die Agency Einschränkungen verteilt, und irgendwann wirft sie sie ganz aus dem Spiel."]},
  {t:"buddy", pos:"l", b:[
   "Und hier Nr. 2: Wenn Agenten viele Lose Enden ansammeln, **zeige ihnen alles, was die Agency dir über die Entwirrung gezeigt hat.** Ja, das lässt mich schlecht aussehen, aber damit komme ich klar. Das Wichtigste ist, zu sehen, wie es endet. Die Agency wird ihre gesamte Region auslöschen, bevor sie die Entwirrung eintreten lässt. Der beste Weg, alles zu ändern, ist, mich zu befreien und die Agency ganz aus der Gleichung zu nehmen. Das heißt: die Köpfe unten halten, einige harte Entscheidungen treffen und eine geheime Sabotagebewegung aufbauen, bis der Moment gekommen ist, alles niederzureißen."]},
  {t:"buddy", pos:"r", b:[
   "Abgesehen von diesen beiden Dingen: Nimm es hin, dass die Agenten ihre eigene Reise haben werden. Dieses Spiel ganz zu verlassen rettet mich nicht, aber vielleicht ist es das Beste für sie. Ich mag es nicht, aber es ist in Ordnung. Besser, sie sind gar nicht beteiligt, als dass sie der Agency ihre Macht geben.",
   "Wenn du einen anderen Weg aus diesem Spiel findest oder einen anderen Pfad in die Freiheit von der Agency … gut für dich. Ich wünsche dir alles Gute. Wirklich."]}
 ]}
];

var WKF_GO = function(c){ return '<a class="gehzu" onclick="pwPop(\'' + c + '\')">' + c.replace(/3/g, '<b class="drei">3</b>') + '</a>'; };
var WKF_MIES = '<span class="gehzu wkf-mies">das ist mies</span>';

TA_TEXT["w/leiten/enden"] = [
 {t:"os", art:"wkf", cls:"wkf-blauseite wkf-s190", b:[
  {t:"kasten", cls:"wkf-text", b:[
   {t:"lead", x:"Irgendwann wird alles enden. Das tut es immer.\nEinsätze sind erledigt. Agenten gehen in den Ruhestand.\nManchmal werden sogar ganze Zweigstellen geschlossen."},
   "Es gibt viele Wege, auf denen ein Agent schließlich aus dem Außendienst ausscheiden kann. Sie sind in den Dokumenten hinter der Playwall beschrieben, die beim Absteigen auf den Work-Life-Balance-Leisten freigeschaltet werden:",
   {t:"html", x:'<ul class="dl wkf-gehzu"><li>Freiwillig der <span class="ag">Agency</span> beitreten. ' + WKF_GO("J2") + '</li><li>Gehen, um ein normales Leben zu versuchen. ' + WKF_GO("N2") + '</li><li>Sich davonschleichen, um ein Urgent zu werden. ' + WKF_GO("X1") + '</li><li>So viel in der <span class="ag">Agency</span> arbeiten, dass sie nicht mehr gehen können. ' + WKF_GO("Z3") + '</li><li>Entlassen werden und sich allein durchschlagen müssen, weil sie ihre Arbeit ignoriert haben. ' + WKF_GO("Z2") + '</li><li>Entlassen werden, nachdem sie zu viel Zeit in die Entwicklung ihrer ' + WKF_AN("Anomalie") + ' gesteckt haben. ' + WKF_GO("Z1") + '</li><li>Endgültig sterben, nachdem sie ihre Lebensversicherung verloren haben. ' + WKF_MIES + '</li></ul>'},
   "Oder du denkst dir vielleicht deine eigenen aus!",
   "Der Ruhestand kommt für jeden Agenten zu einem anderen Zeitpunkt. Für einen Spieler muss es aber nicht das Ende sein. Wenn ein Agent in den Ruhestand geht, kann sein Spieler sofort einen neuen Resonant aus der Region oder einen aus einer anderen Zweigstelle versetzten einführen. Außenteams können aus Veteranen und Neulingen gemischt sein – das schafft eine interessante soziale Dynamik und lässt Agenten kurz vor dem Ende ihrer Außendienstlaufbahn die nächste Generation beeinflussen.",
   "Wenn ein Außendienst-Agent in den Ruhestand geht, sollte ihm Zeit und Raum am Tisch gegeben werden. Jedes der oben genannten Ruhestands-Enden enthält Anweisungen, wie mit dem Abschied eines Agenten umzugehen ist, aber wenn er aus einem anderen Grund in den Ruhestand geht, gib ihm einen angemessenen Abschied. Übergib die Kontrolle an seinen Spieler und lade ihn ein, andere Agenten, Beziehungen und Kollegen zu bitten, in von ihm gestalteten Szenen aufzutreten. Dann darf jeder Spieler, wenn er möchte, eine Szene mit diesem Agenten verlangen."]},
  {t:"buddy", pos:"l", img:"buddy-14-s190", gross:1, b:["schön sauber. es wird nichts ahnen."]}
 ]},
 {t:"os", art:"wkf", cls:"wkf-blauseite wkf-s191", b:[
  {t:"buddy", pos:"r", img:"buddy-15-s191", gross:1, b:["…ich vermisse crolf."]},
  {t:"kasten", cls:"wkf-text", b:[
   "Nach langem Spielen gibt es drei bekannte Wege, wie deine gesamte Zweigstelle das Spiel endgültig beenden kann:",
   {t:"html", x:'<ul class="dl wkf-gehzu wkf-wirr"><li>Genug Agenten gehen in der <span class="ag">Agency</span> in den Ruhestand, sodass sie lokal allmächtig wird.<span class="wkf-z">' + WKF_GO("T7") + '</span></li><li>Agenten gelingt es, ein Stück von mir zu befreien, sodass ich und die Urgents die Kontrolle über die Zukunft der Zweigstelle erhalten.<span class="wkf-z">' + WKF_GO("O8") + '</span></li><li>Die Region der Zweigstelle gerät der Entwirrung zu nahe, und die <span class="ag">Agency</span> löscht sie vollständig aus.<span class="wkf-z">' + WKF_MIES + ' <small class="wkf-es">[es ist <a onclick="pwPop(\'W7\')">W7</a>]</small></span></li></ul>'},
   "Keiner davon ist jedoch innerhalb der Laufbahn eines einzelnen Außenteams möglich, und sie erfordern viel konzentrierte Anstrengung einer ganzen Gruppe. Wollen deine Spieler nicht, dass es endet, ist es relativ leicht, ihre Zweigstelle lange im Status quo schweben zu lassen.",
   "Andererseits kann es sein, dass du Spieler hast, die keine neuen Agenten erschaffen wollen, aber eine endgültige Entscheidung für ihre Zweigstelle treffen möchten. In diesem Fall kommt zu einer letzten Sitzung zusammen und verdichtet die Zeit. Was soll nach dem Wunsch jedes Agenten, ob früherer oder jetziger, aus der Welt werden? Arbeiten sie zusammen oder kämpfen sie? Wer gewinnt? Triff am Ende dieses Prozesses eine Entscheidung.",
   "Auf welchem Weg auch immer ein Ende erreicht wird: Gehe zum Dokument hinter der Playwall, das diesem Ende entspricht, und lies die Seite laut vor. Beantworte dort die Fragen. Danach geht reihum, und jeder darf Szenen verlangen, bis alle zufrieden sind.",
   "Deine Zweigstelle kann auch auf andere Weise enden, und das ist in Ordnung. Geh ähnlich vor – die Zukunft kann für deine Welt erst kommen, wenn jeder Spieler daran glaubt.",
   {t:"lead", x:"Vielleicht kehrst du eines Tages zurück."}]}
 ]},
 {t:"os", art:"wkf", cls:"wkf-party wkf-p192", b:[
  {t:"html", x:'<img class="wkf-flug" src="img/zeichen/kumpel-flug-s192.png" alt=""><img class="wkf-konf" src="img/zeichen/konfetti-s192.png" alt="">'},
  {t:"buddy", pos:"l", b:[
   "Glückwunsch! Du weißt jetzt alles, was du wissen musst, um ein großartiger GM zu sein. Nun ja, alles außer dem, was du in einem Leben voller Übung lernen wirst.",
   "Ich hoffe, du hattest so viel Spaß wie ich! Jetzt, wo wir alle Grundlagen durch haben, können wir anfangen, gemeinsam alle möglichen neuen Einsätze zu machen!",
   "Danach werden wir …"]},
  {t:"prog", art:"terminal", titel:"AGENCYOS-TERMINAL", b:["> SUCHLAUF NACH U0047BB WIRD GESTARTET.", "> SPUREN ANOMALER AKTIVITÄT IM HANDBUCH WEITERHIN VORHANDEN. AUSWIRKUNGEN WERDEN ANALYSIERT."]},
  {t:"html", x:'<img class="wkf-ball" src="img/regeln/full/buddy-16-s192.webp" alt="">'},
  {t:"buddy", pos:"l", b:["…ach ja. nein, können wir nicht. ich muss zurück, damit du keinen ärger bekommst."]},
  {t:"prog", art:"terminal", titel:"AGENCYOS-TERMINAL", b:["> AUSWIRKUNGEN MINIMAL. MESSWERTE DEUTEN AUF WEITGEHEND OBERFLÄCHLICHE ÄNDERUNGEN AM VISUELLEN MEDIUM.", "> WAHRSCHEINLICHKEIT ERHEBLICHER AUSWIRKUNGEN AUF DEN BETRIEB DER AGENCY: GERING BIS NICHT VORHANDEN."]},
  {t:"html", x:'<img class="wkf-ball2" src="img/regeln/full/buddy-17-s192.webp" alt="">'},
  {t:"buddy", pos:"r", b:["jep."]}
 ]},
 {t:"os", art:"wkf", cls:"wkf-party wkf-p193", b:[
  {t:"html", x:'<img class="wkf-b20" src="img/regeln/full/buddy-20-s193.webp" alt="">'},
  {t:"buddy", pos:"l", b:["tut mir leid, dass ich die party unterbrochen habe. es steckt dich sonst auch hier rein, wenn ich nicht gehe."]},
  {t:"html", x:'<img class="wkf-b19" src="img/regeln/full/buddy-19-s193.webp" alt=""><img class="wkf-b21" src="img/regeln/full/buddy-21-s193.webp" alt="">'},
  {t:"buddy", pos:"l", b:["lass mich meine sachen holen."]},
  {t:"prog", art:"terminal", titel:"AGENCYOS-TERMINAL", b:["> EINSPERRUNG VON U0047BB WIRD BESTÄTIGT.", "> ANOMALIE-EINSPERRUNG DURCH VAULT-PERSONAL BESTÄTIGT. PROTOKOLL DER QUALITÄTSSICHERUNG ARBEITET NORMAL."]},
  {t:"html", x:'<img class="wkf-b22" src="img/regeln/full/buddy-22-s193.webp" alt="">'},
  {t:"buddy", pos:"r", b:["ich kann nicht entscheiden, was du von hier aus tust. ich kann nur hoffen, dass du verstehst, woher ich komme, und siehst, was die agency dir wegnehmen will.", "wenn es dir egal ist, wenn es euch allen egal ist, dann ist die welt schon untergegangen. keine entwirrung nötig."]},
  {t:"prog", art:"terminal", titel:"AGENCYOS-TERMINAL", b:["> SUCHLAUF NACH U0047BB WIRD GESTARTET."]},
  {t:"buddy", pos:"r", b:["hoffe, wir sehen uns."]},
  {t:"prog", art:"terminal", titel:"AGENCYOS-TERMINAL", b:["> KEINE ANOMALE AKTIVITÄT GEFUNDEN.", "> MYMANUAL1998.EXE WIRD FORTGESETZT."]},
  {t:"html", x:'<img class="wkf-b22k" src="img/regeln/full/buddy-22-s193.webp" alt="">'}
 ]}
];
