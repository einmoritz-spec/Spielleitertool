/* Handbuch › Schaden und Konflikte (S. 46–51) */
TA_TEXT["h/schaden/schaden"] = [
 "Einsätze bringen dich oft in gefährliche oder lebensbedrohliche Lagen. Wenn du oder etwas anderes so viel abbekommt, dass schwere Verletzungen oder der Tod drohen, heißt das **Schaden**. Schaden gibt es in verschiedenen Höhen. Hier ein Schlüssel zum Bereithalten.",
 {t:"skala", x:[["1 Schaden", "Genug Wucht, um einen durchschnittlichen Menschen zu töten."], ["2+ Schaden", "Schlimmer."]]},
 "Verletzungen unterhalb des Todes mögen lästig sein, müssen aber nicht berechnet werden. Wir gehen davon aus, dass du Knochenbrüche, seelische Traumata und andere Unannehmlichkeiten auch ohne Zahlen bemerkst.",
 "Steigt der zugefügte Schaden über eins, misst er, wie extrem und ungewöhnlich die schädigende Kraft ist. Die Höhe des Schadens entspricht der Zahl der Losen Enden, die daraus wahrscheinlich entstehen – vorausgesetzt, mindestens ein Zeuge sieht den Schaden oder seine Folgen.",
 "Ein Zivilist, den ein Effekt mit einem Schaden tötet (oder ein Agent, der ihn überlebt), scheint einer gewöhnlichen Ursache erlegen zu sein. Ein Zivilist, den ein Effekt mit zwei oder mehr Schaden tötet, trägt ein deutliches Zeichen des Anomalen – je höher, desto dramatischer. Nimm dir etwas Zeit, um dir die folgenden hilfreichen Richtwerte einzuprägen.",
 {t:"skala", breit:1, x:[["1 Schaden", "Eine Kugel aus einer Pistole, ein Schwert, das einen Kopf abtrennt, ein Sturz aus großer Höhe."], ["2 Schaden", "Organe, die nach außen teleportiert werden; ein Feuer, das spontan im Gehirn ausbricht."], ["{3} Schaden", "Ein Körper, zu einer perfekten Spirale verdreht; ein Heiligenschein aus Dunkelheit über einer Leiche, die einen Namen flüstert, den man besser nicht ausspricht."], ["4+ Schaden", "Schlimmer."]]},
 {t:"wf", id:"schaden", h:"Teste dein Wissen!", x:[
  {f:"Ein durchschnittlicher Mensch verkraftet mindestens {3} Schaden, bevor er stirbt.", a:0, e:"Ein durchschnittlicher Mensch verkraftet nur 1 Schaden."},
  {f:"Agenten sollten darauf achten, beim Zufügen von Schaden nicht beobachtet zu werden, um Lose Enden und Gerichtsverfahren zu vermeiden.", a:1},
  {f:"Deine Lebensversicherung dehnt die Leistungen 1 und 2 auf deine Familie und deine Liebsten aus.", a:0, e:"Nur du bist versichert. Falls du die Antwort auf diese Frage schon kennst, hast du Seiten außer der Reihe gelesen und erhältst einen Verweis."}]}
];
TA_TEXT["h/schaden/versicherung"] = [
 {t:"sp", x:[
  ["Befindest du dich in einer angespannten, gefährlichen Lage, empfehlen wir, vor einem Schaden deine Anomalie-Fähigkeiten einzusetzen oder die Agency um Hilfe zu bitten. Misslungene Würfe oder Lagen, in denen man nur verlieren kann, erfordern jedoch oft, auf **Leistung 1** deiner Lebensversicherung zurückzugreifen:",
   {t:"pikto", x:[{z:"symbol-herz-1", h:"Leistung 1", b:[
    "Erleidet ein Agent Schaden, kann er automatisch **1 Qualitätssicherung** pro Schaden ausgeben, um die Wirkung des Schadens zu ignorieren. Welche Qualität, spielt keine Rolle. Der Angriff oder Effekt geschieht dir trotzdem, und Umstehende sehen ihn geschehen, aber die Agency transportiert die Folgen des Schadens irgendwohin anders. Keine Sorge: *du* spürst nichts!",
    "Zum Beispiel: Wirst du mit einem Schwert für einen Schaden erstochen, geschieht das Erstechen sichtbar für alle. Hast du jedoch eine QS ausgegeben, verletzt dich das Schwert nicht, während es harmlos durch dich hindurchgeht. Nutze ruhig die Verwirrung deines Angreifers aus, aber bedenke, dass er wahrscheinlich zu einem Losen Ende geworden ist, wenn er gewöhnlich ist. Entferne alle Klingen, Kugeln oder Gifte vor Ende des Einsatzes!",
    "Ein weiteres Beispiel: Versucht eine Anomalie, dich mit zwei Schaden in eine Fleisch-Marionette zu verwandeln, indem sie ihre Haken in deine Glieder schlägt, finden die Haken zwar Halt – doch nachdem du zwei QS ausgegeben hast, spürst du sie nicht, du wirst keine Marionette, und es bleibt kein dauerhafter Schaden, sollte dir die Flucht gelingen. Umstehende werden mindestens zwei Lose Enden. Pass auf, wenn die Anomalie anfängt, dich herumzuschleudern – das könnte noch mehr Schaden anrichten, wenn du nicht schnell handelst!"]}]}],
  ["Erleidet ein Agent Schaden, während er in keiner Qualität mehr Sicherungen hat, oder entscheidet er sich, Leistung 1 nicht zu aktivieren, ist er **tot**. Der Tod aktiviert **Leistung 2**:",
   {t:"pikto", x:[{z:"symbol-herz-2", h:"Leistung 2", b:[
    "Gegen die angemessene Strafe von **-5 Belobigungen** wird der Agent im Pausenraum seiner Zweigstelle wiederbelebt. Erinnerungen bis zu seinem Tod bleiben erhalten. Auf Anfrage kann die Agency vor der Wiederbelebung eine Erinnerung des Agenten verändern oder entfernen oder ein kleines ästhetisches Detail an ihm ändern. Fällt die Belobigungssumme des Agenten durch die Wiederbelebung unter null, gerät er in **Belobigungsschulden**. Belobigungsschulden werden getilgt, indem man Belobigungen sammelt, bis der Agent null oder mehr hat.",
    "Agenten in Belobigungsschulden werden automatisch in die **Schnürsenkel-Initiative** aufgenommen, bei der sich ihre Schnürsenkel in unregelmäßigen Abständen lösen, als sanfte Erinnerung, die Belobigungsschulden zu verlassen. Trägst du normalerweise keine Schnürsenkel, binde sie bitte irgendwo an deinen Körper, damit du die vollen Vorteile der Initiative genießen kannst."]}]},
   "Und schließlich **Leistung {3}**:",
   {t:"pikto", x:[{z:"symbol-herz-3", h:"Leistung {3}", b:[
    "Falls eine Wiederbelebung des Agenten nicht mehr kosteneffizient ist, gewährt die Triangle Agency deinen Angehörigen eine kleine Zuwendung und eine Verschwiegenheitserklärung."]}]}]
 ]}
];
TA_TEXT["h/schaden/konflikt"] = [
 {t:"sp", x:[
  ["<Agenten/Spieler> haben leider individuelle Persönlichkeiten. Das heißt, sie sind gelegentlich unterschiedlicher Meinung. Während leichte Reibereien im normalen Spielverlauf zu erwarten sind, etwa bei verbindenden Traditionen wie „Streiche spielen“, „Necken“ oder „sich in einen Gag hineinsteigern“, entstehen Probleme, wenn Agenten in einem Konflikt gegensätzliche Seiten einnehmen.",
   "Direkter Konflikt destabilisiert die Verbindung zwischen Agenten, Tisch-Ichs und der <Welt/Erzählung>, die sie bewohnen. In extremen Fällen haben diese Streitigkeiten dazu geführt, dass sich Tisch-Ichs von ihren Agenten lösten und den Tisch für immer verließen. Wir haben dieses Vermittlungsverfahren geschaffen, um ähnliche Ergebnisse für dein Außenteam zu vermeiden.",
   "**Hier einige Zeichen, dass ihr in einen direkten Konflikt geraten seid:**",
   {t:"liste", x:["Ein Agent will eine seiner Kräfte einsetzen, um einen anderen Agenten daran zu hindern, eines seiner Ziele zu erreichen.", "Ein Agent will einen anderen Agenten sabotieren, um ihn daran zu hindern, eines seiner Ziele zu erreichen, heimlich oder offen.", "Zwei oder mehr Agenten sind in ein zirkuläres Gespräch geraten, in dem sie nicht von dem abrücken wollen, was sie für die „beste Option“ für das Weiterkommen halten.", "Es gibt irgendeine Gewalt zwischen Agenten."]},
   "**Hier einige Zeichen, dass ihr wahrscheinlich nicht in einen direkten Konflikt geraten seid:**",
   {t:"liste", x:["Ein Agent würde eine seiner Kräfte bei einem anderen Agenten einsetzen, um ihn zu unterstützen.", "Ein Agent widersetzt sich den Zielen eines anderen Agenten, aber ihre <Unterbewusstseine/Spieler> sind sich über den interessantesten oder wahrscheinlichsten Ausgang einig."]}],
  ["Ohne Eingreifen ähnelt das Ergebnis eines direkten Konflikts stark einer Kausalkette. Agenten einigen sich auf das Ergebnis und bauen dann gemeinsam mit dem GM und dem Rest ihres Außenteams den Weg dorthin auf.",
   "Die anderen Regeln in diesem Handbuch gelten während eines Konflikts nicht mehr. Duellierende Resonanz verstärkt die Macht beider Parteien und erlaubt allen Agenten, Dinge zu tun, die sie normalerweise nicht könnten: Sie können über die Einschränkungen des Spiels hinausgreifen und viel größere Effekte innerhalb der Domäne ihrer Anomalie beschreiben oder ganze Kausalketten in einem Augenblick schaffen!",
   "Ein direkter Konflikt ist nicht von Natur aus etwas Schlechtes. Unsere Forschung hat gezeigt, dass **99 %** der Außenteams diesen Zustand in ihrer <Laufbahn/Kampagne> mindestens einmal erreichen, und manche erreichen ihn in jedem Einsatz. Viele Agenten finden eine konfliktreiche <Arbeitsplatz/Erzählung>-Dynamik motivierend! Das Wichtigste ist, dass alle weiter zur Arbeit erscheinen.",
   {t:"html", x:'<div class="hb-kopf2"><img src="img/regeln/full/dreieckskopf-zeigestock-links.webp" alt=""><img src="img/regeln/full/dreieckskopf-zeigestock-rechts.webp" alt=""></div>'}]
 ]},
 {t:"sp", x:[
  [{t:"pikto", x:[
    {n:"1", h:"Die Zeit hört auf zu laufen, bis der Ausgang eines Konflikts feststeht.", x:""},
    {n:"2", h:"Alle <Agenten/Spieler> nennen ihr Ziel innerhalb des Konflikts.", x:"Sind mehrere Agenten im Konflikt, würfelt jeder. Auch wenn zwei Agenten dasselbe Ziel haben, zählen ihre folgenden Würfe getrennt."}]}],
  [{t:"kasten", b:[{t:"html", x:'<p><i>„Ich möchte die Anomalie beseitigen.“</i> gegen <i>„Ich möchte verhindern, dass die Anomalie beseitigt wird.“</i></p><p><i>„Ich will, dass unser Team dieser Person die Wahrheit sagt.“</i> gegen <i>„Ich will, dass unser Team diese Person belügt.“</i></p><p><i>„Ich möchte, dass wir Donuts bestellen.“</i> gegen <i>„Ich möchte, dass wir Croissants bestellen.“</i></p>'}]}]
 ]},
 {t:"sp", x:[
  [{t:"pikto", x:[
    {n:"3", h:"Das Schicksal bestimmt den Ausgang des Konflikts.", x:"Alle <Agenten/Spieler> würfeln gleichzeitig sechs vierseitige Würfel und notieren die Zahl der erhaltenen {3}en. Agenten kanalisieren bei diesen Würfen nicht die Macht der Agency: Es entsteht kein Chaos, und Triszendenz ist nicht möglich."},
    {n:"4", h:"Die Würfe gehen weiter.", x:"Diese gleichzeitigen Würfe werden fortgesetzt, bis ein <Agent/Spieler> über alle Würfe hinweg insgesamt mindestens sechs {3}en erhalten hat und mehr {3}en hat als die anderen <Agenten/Spieler>. Wer beide Kriterien erfüllt, dessen Ziel wird erfüllt."}]}],
  [{t:"kasten", b:["Die Wurffolge kann helfen, das Tempo des Konflikts zu umreißen: Wie bist du gescheitert, als du null {3}en gewürfelt hast? Welchen starken Zug hast du gemacht, als du sechs {3}en gewürfelt hast?"]}]
 ]},
 {t:"sp", x:[
  [{t:"pikto", x:[
    {n:"5", h:"Die Zeit läuft wieder.", x:"Alle <Spieler/Agenten> beschreiben gemeinsam den Weg des Konflikts zu diesem Ziel, ohne Einschränkungen bei der Nutzung anomaler Fähigkeiten, ohne dass Chaos entsteht und ohne Lose Enden, außer solchen, die sich aus der Lösung des Konflikts ergeben."},
    {n:"6", h:"Die Ergebnisse des Konflikts werden ehrlich behandelt.", x:"Obwohl die Entscheidung vom Schicksal getroffen wurde, weiß der Agent das nicht. Er hat verloren oder gewonnen und muss mit den Folgen leben. Diese Gefühle können die Beziehung zwischen deinen Agenten verändern."}]}],
  [{t:"kasten", b:["Ein direkter Konflikt sollte nicht dazu führen, dass ein Agent dauerhaft stirbt, einen dramatischen Wandel im Leben seiner Figur erlebt oder in den Ruhestand gezwungen wird, es sei denn, sein Spieler ist mit diesem Ausgang einverstanden. Könnte eines der Ziele im Spiel dies bewirken, sollte darüber gesprochen werden, bevor der Ausgang des Konflikts bestimmt wird, und der Konflikt sollte ganz vermieden werden. Kommt das bei eurem Außenteam wiederholt vor und belastet die Beteiligten, ist es vielleicht an der Zeit, über Versetzungen in andere Zweigstellen zu sprechen."]}]
 ]},
 {t:"h", x:"Konfliktlösung in Aktion"},
 "Agent Kleo möchte Donuts bestellen, und Agent Frederick möchte Croissants bestellen. Sie stehen sich gegenüber, und Agent Frederick bereitet sich darauf vor, eine anomale Fähigkeit gegen Agent Kleo einzusetzen, damit er die Croissants bekommt. Statt die Fähigkeit wie üblich einzusetzen, entscheidet der Tisch, dass dies ein direkter Konflikt ist. Beide Agenten beginnen zu würfeln.",
 {t:"html", x:'<div class="hb-konf"><img src="img/zeichen/diagramm-konflikt-wuerfe.png" alt=""><div><p>Kleo würfelt <b>drei <span style="color:var(--rot)">3</span>en</b>, Frederick würfelt <b>1</b>. Keiner hat <b>6</b> erreicht, also würfeln sie erneut.</p><p>Nach dem erneuten Würfeln addieren sie die Ergebnisse. Kleo: <b>5</b>, Frederick: <b>4</b>. Immer noch hat keiner <b>6</b> erreicht.</p><p>Nach einem weiteren Wurf lauten die Summen Kleo: <b>7</b>, Frederick: <b>6</b>. Beide haben sechs <b class="drei">3</b>en erreicht. Kleo hat mehr, also wird Kleos Ziel erreicht.</p></div></div>'},
 {t:"html", x:'<div class="hb-szene"><div class="hb-bildzeile" style="margin:0"><img src="img/regeln/full/beispiel-topfpflanze-auge.webp" alt="" style="height:360px"></div><div>'},
 {t:"dialog", x:[
  ["GM","Wir wissen also, dass Frederick das Telefon hält und gleich den Anruf tätigt."],
  ["Kleo","Nun, ich hatte es auch schon gepackt, also ist es wahrscheinlich ein ziemlich heftiges Tauziehen zwischen uns."],
  ["Frederick","Du bist mit **drei {3}en** aus den Startlöchern gekommen, das fühlt sich nach einem großen Zug an."],
  ["Kleo","Stimmt! Damit Frederick nicht sprechen kann, fülle ich ihm den Mund vollständig mit Sand."],
  ["Frederick","Aber dann würfle ich auch **drei {3}en** und hole fast auf. Ich mache **100** Duplikate des Telefons, und alle klingeln, sodass niemand sonst weiß, welches davon tatsächlich die Lieferperson anruft."],
  ["Kleo","Meine Traum-Anomalie zapft direkt dein Unterbewusstsein an, um herauszufinden, welche Zufallszahl du aus **100** für dieses Telefon gewählt hast, und ich greife danach."],
  ["Frederick","Und ich kenne das richtige, also griffen wir beide danach, als wir beide sechs erreichten."],
  ["Kleo","Aber dein Mund ist immer noch voller Sand. „DONUTS!“"]]},
 {t:"html", x:'</div></div><div class="hb-bildzeile" style="justify-content:flex-end"><img src="img/regeln/full/beispiel-schuhe-krater.webp" alt="" style="height:140px"></div>'},
 {t:"h", x:"Alternative Lösungsverfahren"},
 "Einen Konflikt dem Schicksal zu überlassen, kann für manche Außenteams belastend sein. Um diese Situation ganz zu vermeiden, empfehlen wir die folgenden alternativen Verfahren zur Konfliktlösung:",
 {t:"sp", x:[
  [{t:"liste", x:["**Abstimmung** – Entsteht ein direkter Konflikt, stimmen die Spieler darüber ab, wie die Geschichte weitergehen soll. Gleichstände entscheidet der GM.", "**Wechselnder Richter** – Das Recht, bei einem direkten Konflikt die endgültige Entscheidung zu treffen, wechselt bei jedem Konflikt zwischen den <Agenten/Spielern>."]}],
  [{t:"liste", x:["**GM-Entscheid** – Für Gruppen, die ihrem General Manager beim Lenken der Erzählung vertrauen: Die endgültige Entscheidung bei Agentenstreitigkeiten kann allein bei ihm liegen.", "**Geburtstagsregel** – Der Erfolg geht an den Spieler, dessen Geburtstag dem aktuellen Datum am nächsten liegt. Nicht empfohlen."]}]
 ]},
 "Und eine optionale Ergänzung zu jedem Verfahren außer dem Wechselnden Richter: **Vetopunkte**.",
 {t:"liste", x:["Jedes Mal, wenn ein <Agent/Spieler> eine Konfliktentscheidung verliert, erhält er einen Vetopunkt. Wer {3} Vetopunkte hat, kann sie ausgeben, bevor eine Entscheidung getroffen wird, um sicherzustellen, dass sein Ziel erreicht wird."]},
 {t:"html", x:'<div class="hb-empf"><img class="a" src="img/regeln/full/agent-reagenzglas.webp" alt=""><img class="t" src="img/regeln/full/empfangstresen.webp" alt=""><img class="w" src="img/regeln/full/warndreieck-uhr.webp" alt=""></div>'}
];
