/* Wenn die Sirene schweigt (Deutschland in den 80ern, Kap. 6, S. 98–112) – Taunus-Loop, Buchtext wörtlich. */
window.MYS = window.MYS || {};
window.MYS.sirene = {
  id: "sirene", name: "Wenn die Sirene schweigt", bild: "m-sirene", buch: "tftl_z1", jahreszeit: "Sommer",
  intro: "Egal, ob man selbst beim Loop arbeitet oder nicht, die Reaktoranlage in der Mitte des Taunus ist in vielerlei Hinsicht ein Taktgeber im Leben der Menschen. Gerade in den warmen Sommermonaten, wenn die Sonne sich scheinbar gar nicht hinter den umliegenden Hügeln abends zur Ruhe neigen mag, ist der Klang der Werkssirene ein sicheres Zeichen, dass es Zeit ist, nach Hause zu gehen und mit den Eltern gemeinsam zu Abend zu essen. Die Abenteuer des Tages bleiben zurück, es werden Brote geschmiert, vielleicht gibt es Tee dazu, und alles ist friedlich, alles ist gut. Aber was, wenn dies nicht passiert? Was, wenn die Sirene schweigt?",
  phasen: [
    {id: "wahrheit", name: "Wahrheit", abschnitte: [
      {id: "wahrheit", titel: "Die Wahrheit hinter dem Mysterium", s: 99, html: `
<p>Es ist soweit: Die Kaiser-KI hat den Punkt erreicht, an dem sie glaubt, nicht länger zögern zu können. Sie hat in „Neue Deutsche Welle“ gesehen, welches Aggressionspotenzial den Menschen innewohnt. Sie hat in „Im Bann der Bärchis“ gesehen, welche Risiken aus der fahrlässigen Forschung der Menschen entstehen können und welche Gefahr sie ohne Kontrolle daher für sich selbst darstellen. Und sie hat in „Der Riss im Schleier“ gesehen, dass es noch viel schlimmer kommen könnte, wenn die Menschen vielleicht das nächste Mal unbedacht und unkontrolliert Tore öffnen, die besser verschlossen blieben.</p>
<p>Zwei Schritte sind aus ihrer Sicht nun nötig. Zum einen sucht sie erneut den Kontakt zu den Kindern – ihren Kurfürsten –, um die Krönungszeremonie einzuleiten. Dazu nutzt sie ein vermutlich letztes Mal ihre Tarnidentität Caesar. Zum anderen aber beginnt sie, erstmals im größeren Stil, an all den Fäden zu ziehen, die sie inzwischen durch das Steuerungssystem des Loops gewoben hat. Das wiederum versetzt die dortigen Wissenschaftler sofort in Alarmbereitschaft, aber trotz all ihrer Bemühungen wird es ihnen nicht rechtzeitig möglich sein, die Kaiser-KI aufzuhalten – oder auch nur als das zu erkennen, was sie ist.</p>
<p>Die Kinder müssen sich den Weg zur Krönungszeremonie bahnen und sich dort der Kaiser-KI stellen.</p>`},
      {id: "ablauf", titel: "Der Ablauf der Krönung", s: 100, html: `
<p>Die Kaiser-KI hat in ihrer Datenauswertung einen recht konfusen Wirrwarr geschaffen, wie sie glaubt, dass die Krönung vonstattengehen sollte. Sie bezieht sich dabei in vielen Punkten auf das Verfahren der Kaiserkrönung im Heiligen Römischen Reich und versucht ihre eigene Existenz irgendwie in diese Schablone zu pressen.</p>
<p>Wenn die Kinder im Laufe des Szenarios in einem Geschichtsbuch nachschlagen (<span class='f'>begreifen</span>) oder beispielweise Herrn Asselmann fragen, können sie einige Eckpunkte erfahren:</p>
<ul>
<li>Die eigentliche Kaiserkrönung fand in Frankfurt statt.</li>
<li>Die Wahl erfolgte durch die sieben Kurfürsten.</li>
<li>Das Läuten der Frankfurter Kirchenglocken rief sie zusammen.</li>
<li>Nachdem sie sich vorbereitet hatten, begaben sich die Kurfürsten zum Nordportal des St.-Bartholomäus-Doms.</li>
<li>In der anschließenden Zeremonie wurde dann die eigentliche Krönung vollzogen.</li>
</ul>
<p>Die Kaiser-KI hat eine eigene Interpretation für sich beschlossen:</p>
<ul>
<li>Bezüglich des Ortes hat sie beschlossen, dass der Taunus nah genug dran ist.</li>
<li>Die Kinder werden für die KI die Rolle der Kurfürsten übernehmen. Sie sind es, die sich in den vorangegangenen Szenarien – anders als die Erwachsenen – durch Tatendrang und Hilfsbereitschaft ausgezeichnet haben.</li>
<li>Das Glockengeläut wird sie per Funk schicken.</li>
<li>Die Prestige-Einrichtung der Königskron GmbH oben auf dem Altkönig erfüllt die Rolle des Domes.</li>
<li>Die Zeremonie selbst bildet das abschließende Finale dieses Abenteuer.</li>
</ul>`},
      {id: "losgeloest", titel: "Das Abenteuer losgelöst von der Kampagne", s: 100, box: 1, html: `
<p>Keine Frage, dieses Abenteuer ist in erster Linie dazu gedacht, die Kampagne „Kaiserspiel“ zu beschließen und ihrem Finale zuzuführen. „Wenn die Sirene schweigt“ greift gezielt noch einmal Versatzstücke aus allen Abenteuern auf – die Kaiser-KI und Herrn Asselmann, aber etwa auch die Königin Vespasiana aus „Im Bann der Bärchis“ und den phasenverschobenen Piloten Xaver Novotný aus „Der Riss im Schleier“. Nichts davon ist zwingend für den Verlauf des Abenteuers erforderlich, doch all diese Elemente dienen dazu, am Ende noch einmal zu zeigen, dass alles vielleicht nicht in direktem Zusammenhang zueinander stand, aber dennoch verbunden ist.</p>
<p>Trotzdem ist es natürlich möglich, das Abenteuer losgelöst von der Kampagne zu spielen. In dem Fall muss gar nicht viel am eigentlichen Ablauf angepasst werden. Allerdings werden einzelne Elemente – vor allem natürlich die Kaiser-KI – entweder mit etwas mehr Aufwand neu eingeführt werden müssen, oder aber für die Spieler sehr willkürlich erscheinen. Die Spielleiterin sollte in einem solchen Fall ein paar weitere Szenen einbauen, um die Kanten etwas zu glätten. Für das Abenteuer, wie es hier zu lesen ist, wird grundsätzlich davon ausgegangen, dass es als Finale der Kampagne gespielt wird.</p>`}
    ]},
    {id: "kids", name: "Kids einführen", abschnitte: [
      {id: "kids", titel: "Vorstellung der Kinder", s: 100, html: `
<p>Das Abenteuer hat einen sehr viel fließenderen Übergang aus dem Alltag der Kinder hinein in das Mysterium, da dieses Mal die bevorstehenden Ereignisse tief in das Leben aller Bewohner eindringen. Dies kann sich auch die Spielleiterin zunutze machen, indem sie die letzte der nachfolgenden Alltagsszenen zugleich als Beginn der Einführung in das Mysterium nutzt.</p>`},
      {id: "szenen", titel: "Typische Szenen zur Einführung der Kinder", s: 100, box: 1, html: `
<ul class="sz">
<li><b>Familienfrühstück:</b> Wenn ein Elternteil der Kinder direkt am Loop oder bei der Königskron GmbH arbeitet, kann die Verabschiedung morgens auf dem Weg zur Arbeit als Grundlage dienen. „Bis heute Abend“, heißt es, wie jeden Tag. Nur wird es nicht so kommen.</li>
<li><b>Naturschutz:</b> Ein Geschwisterkind, oder ein Freund der Eltern eines Kindes, ist zunehmend verunsichert wegen der Proteste gegen Atomreaktoren, die in der Region bisher generell weniger laut hörbar sind als anderswo in der Republik. Die Eltern des Kindes weisen mögliche Gefahren gutmütig von sich.</li>
<li><b>Schulschluss:</b> Ein Kind sitzt in der Schule und kann gar nicht intensiv genug auf die Uhr starren, deren Zeiger sich einfach weigern, endlich 12:55 zu erreichen. Dann aber ertönt die erlösende Glocke und die Hügel des Taunus rufen zum Spielen.</li>
<li><b>Schulschluss mit Herrn Asselmann:</b> Selber Ansatz, jedoch unterrichtet Herr Asselmann die letzte Stunde. Ist er inzwischen ein Freund der Kinder, können sie noch ein paar nette Worte wechseln. Ist er ein Widersacher oder steht unter Verdacht, wirft er ihnen bedrohliche oder zumindest skeptische Blick hinterher.</li>
<li><b>Spielen bis in den Abend:</b> Die Kinder spielen an dem Tag gemeinsam draußen. Das Wetter ist wundervoll und der Nachmittag scheint gar nicht zu enden. Lass die Kinder beschreiben, was sie draußen spielen – bauen sie ein Baumhaus? Ein Floß? Spielen sie Ball, Verstecken oder Cowboy und Indianer? Diese Einführung sollte in jedem Fall genutzt werden, denn sie ebnet den Weg zu der …</li>
</ul>`}
    ]},
    {id: "mysterium", name: "Mysterium einführen", abschnitte: [
      {id: "mysterium", titel: "Einführung des Mysteriums", s: 102, html: `
<p>Die Kinder verbringen den gesamten Nachmittag an der Luft. Das helle Licht des Tages färbt sich langsam orange, als die Sonne immer tiefer sinkt. Richtige Sonnenuntergänge sind aufgrund der aufragenden Berge und Wälder nicht überall im Taunus gleich gut zu sehen, aber heute haben die Kinder Glück und vor ihnen breitet sich ein beeindruckendes Naturschauspiel aus.</p>
<p>Lass die Spieler ruhig auch beschreiben, was sie in dem Moment fühlen. Ist es der Bund, der zwischen ihnen herrscht, geschmiedet aus der gemeinsamen Kindheit und den Mysterien, die sie miteinander überlebt haben? Oder ist es – gerade bei Kindern, die auf die 15 zugehen – vielleicht langsam auch eine Form von Melancholie, weil sich im Hinterkopf der Gedanke einnistet, dass es nicht für immer so sein wird? Gib den Spielern im Zweifel durchaus einen Moment Raum, wenn sich daraus Spiel miteinander entwickelt.</p>
<p>Als dann aber die Sonne endgültig hinter den Hügeln verschwindet und es schlagartig etwas kälter zu werden scheint, fällt den Kindern etwas anderes auf: Eigentlich hätte längst die Werksirene des Loops ertönen müssen. Es ist eine unausgesprochene Regel – wenn die Sirene ertönt, kommen auch die Eltern von der Arbeit. Dann ist es Zeit heimzugehen, das Abendessen ruft. Heute aber scheint die Sirene zu schweigen – es ist längst zu spät und die Stille hängt schwer über dem Taunus.</p>
<p>Falls eines der Kinder ein Walkie-Talkie bei sich hat, wird es jäh unterbrochen, als aus dem Funkgerät Glockengeläut ertönt. Der Empfang ist schlecht, aber es sind eindeutig Kirchenglocken, die zu hören sind. Als sie verstummen, ertönt zudem ein Morsecode – allerdings erneut mit so schlechtem Empfang, dass er nicht zu entschlüsseln ist. (Sollte keines der Kinder ein Funkgerät bei sich haben, ist das kein Problem; dann hören sie das Glockengeläut erstmals an Schauplatz 1.)</p>`}
    ]}
  ]
};
