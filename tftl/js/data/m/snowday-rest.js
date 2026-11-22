/* Snow Day – Orte, Countdown, Showdown, Nachspiel, Mystery-Landschaft, NSC, Anhang (gedruckte S. 9–16) */
(function(){
var M = window.MYS.snowday;
M.countdown = [
  "Der Wartungswagen. Ein Loop-Wartungsfahrzeug steht auf dem Schotterstreifen, sein Anhänger ist leer; Dreirad-Spuren führen die Wartungsstraße hinauf.",
  "Gejagt in der Jagdhütte. Ein umgekipptes Dreirad, eine offene Hintertür und ein fallen gelassenes Tonbandgerät mit Sprachprotokollen.",
  "Aaltemann-Messstation Nr. 23. Eine offene Zugangsluke, ein Computer im Müllsack und ein unbefugt verlegtes Kabel, das in den Wald führt.",
  "Die verlassene Farm. Schneefeld, Farmhaus und Scheune – hier wartet der Showdown."
];
M.orte = [
  {id: "ort1", nr: 1, name: "Einführungsszene A: Probleme mit dem Loop-Strom", s: 2},
  {id: "ort2", nr: 2, name: "Einführungsszene B: Roboter und Wölfe", s: 2},
  {id: "ort3", nr: 3, name: "Einführungsszene C: Der vermisste Hund", s: 3},
  {id: "ort4", nr: 4, name: "Der Wartungswagen", s: 4},
  {id: "ort5", nr: 5, name: "Gejagt in der Jagdhütte", s: 4},
  {id: "ort6", nr: 6, name: "Aaltemann-Messstation Nr. 23", s: 4},
  {id: "ort7", nr: 7, name: "Wendung und optionaler Ärger", s: 5},
  {id: "ort8", nr: 8, name: "Die verlassene Farm", s: 6},
  {id: "ort9", nr: 9, name: "Das Schneefeld", s: 6},
  {id: "ort10", nr: 10, name: "Das Farmhaus", s: 7},
  {id: "ort11", nr: 11, name: "Die Scheune", s: 8}
];
M.phasen.push({id: "showdown", name: "Showdown", abschnitte: [
  {id: "showdown", titel: "Showdown", s: 9, html: `
<p><b>Diane Peterson ist tot.</b> Die Kinder finden Teile von ihr auf dem Feld, wenn sie danach suchen. Sie öffnete das Portal direkt vor einem Paar <b>Raptoren</b>. Sie folgten ihr durch den Riss und griffen sie an.</p>
<p><b>Dem Motor ist das Benzin ausgegangen.</b> Der Dieselmotor wurde nie abgestellt, also ist ihm der Treibstoff ausgegangen. Die Kinder müssen mehr Treibstoff dafür finden (vom alten <b>Traktor</b> auf dem nahen Feld).</p>
<p><b>Es sind noch zwei Funken-Ladungen übrig.</b> Die Energie hat sich automatisch aufgebaut. Zwei Ladungen reichen für einen Fehler beim Versuch, das Portal zu schließen.</p>
<p><b>Ein Passwort ist nötig.</b> Die Kinder bekommen vielleicht den Motor zum Laufen, aber um den Funken und die Leistungsregler der Magnetrin-Scheiben zu bedienen, wird ein Passwort gebraucht. Die Wissenschaftlerin erwähnt in ihrem Tagebuch, dass sie mit Passwörtern einen furchtbaren Ärger hat, sich Melodien aber leicht merken kann. Die Kinder müssen ihr Lieblingslied herausfinden (indem sie den <b>Walkman</b> im Farmhaus anhören) und dann die Melodie des Refrains auf dem <b>Kinder-Spielzeugklavier</b> eingeben.</p>
<p>Haben die Spieler Schwierigkeiten, dieses Rätsel zu lösen, lass sie einen Wurf auf <span class='f'>begreifen</span> oder <span class='f'>einfühlen</span> machen.</p>
<p><b>Den Riss schließen.</b> Sobald die Kinder das Passwort haben und den Motor starten, müssen sie die Leistung der Magnetrin-Scheibe erhöhen, um den Riss zu verkleinern, und dann den Funken auslösen, um den Riss zu schließen. Erscheinen Raptoren, während die Kinder die Maschine aktivieren?</p>`},
  {id: "dino", titel: "Dinogroßer Ärger", s: 10, html: `
<p>Es gibt drei verschiedene umherstreifende „Kreaturen“ – die Raptoren, die Jägerroboter und einen Stegosaurus.</p>
<h3>Big Momma</h3>
<p>Ein Stegosaurus-Muttertier (<b>Wildes Tier 3</b>) ist verirrt und streift am Rand des Farmgeländes umher. Vielleicht sucht sie ihre vermissten <b>Eier</b>. Am besten führst du den Stegosaurus ein, wenn die Kinder mit der Erkundung des <b>Farmhauses</b> fertig sind.</p>
<p class="zit">Es gibt ein Stampfen. Das ganze Gebäude bebt. Sie hören lautes Grunzen draußen widerhallen. Stehen die Kinder in der Nähe eines Fensters, sehen sie vielleicht, wie eine kleine Lawine aus Schnee vom Dach fällt.</p>
<p>Wenn sie nachsehen, finden sie einen großen Stegosaurus. An einem seiner Stacheln hängt ein <b>Stacheldrahtzaun</b>, und sie reibt sich am Gebäude, um ihn loszuwerden. Wollen die Kinder dem Stegosaurus helfen, führe eine Teamwork-Herausforderung ein. Ein Kind kann den Dinosaurier mit <span class='f'>einfühlen</span> oder <span class='f'>charme</span> beruhigen, während ein anderes Kind versucht, den Draht mit einer KÖRPER-Fertigkeit (<span class='f'>bewegen</span>, <span class='f'>kraft</span>, <span class='f'>schleichen</span>) zu entfernen.</p>
<p>Wird dem Stegosaurus geholfen, sollte er zahm und neugierig werden. Vielleicht zeigt sie Interesse daran, grüne Kiefernzweige in der Nähe zu fressen (das könnte benutzt werden, um sie zurück zum Zeittor zu locken). Haben die Kinder die Eier in ihrem Besitz, wird sie vielleicht „aufdringlich“ und versucht, sie besser zu sehen. Schon ein Stupser eines solchen Tieres kann für die Kinder sehr gefährlich sein, wenn sie nicht aufpassen.</p>
<p>Hat Juneau Angst vor dem Stegosaurus? Hat der Dinosaurier Angst vor dem Hund? Oder werden die beiden gut miteinander auskommen?</p>
<h3>Die schrecklichen Zwei</h3>
<p>Die <b>Raptoren</b> (<b>Wildes Tier 2, Blitzschnell 3</b>) können an jedem Ort auftauchen. Gegen die Dinosaurier lässt sich kaum etwas ausrichten außer wegzulaufen und sich zu verstecken. Wird ein Kind von einem Raptor angegriffen, wird es sofort GEBROCHEN, stirbt aber nicht. Versuche, ein Szenario zu schaffen, in dem die Spieler auf die Bedrohung durch die Raptoren reagieren können: strategische Entscheidungen treffen, ohne sich hilflos zu fühlen.</p>
<p>Das <b>Schneefeld</b> ist vielleicht der gefährlichste Ort, um den Raptoren allein zu begegnen. Die Kinder rennen vielleicht zur Scheune oder zum Haus, oder sie verstecken sich in der Kabine des großen <b>Traktors</b>. Das kann eine Gelegenheit sein, den Kindern Zustände aufzuhäufen, während sie sich in panischer Eile anstrengen, in Sicherheit zu kommen – aber achte darauf, dass nicht alle am Ende als wimmernde, gebrochene Häufchen am Boden liegen.</p>
<p>Wenn sie in die Enge getrieben werden, können die Kinder die Raptoren vorübergehend vertreiben, indem sie ihnen Schaden zufügen – mit Konserven oder einer Mistgabel werfen –, aber nur die Jägerroboter und der Stegosaurus können die Raptoren dauerhaft aufhalten.</p>
<h3>Iwasaka SBR-71 (Robotisch 4)</h3>
<p>Die Roboter sind ein Deus-ex-machina-Handlungsmittel. Setze sie vorsichtig ein, sonst fühlt sich die Geschichte aufgezwungen an. Vermeide es, gefährliche Szenarien ohne Zutun der Spieler bis zum Äußersten zu treiben.</p>
<p>Andererseits: Haben sich die Kinder eindeutig in Schwierigkeiten gebracht und stehen kurz davor, gefressen zu werden, dann lass die Iwasakas ruhig aus dem Wald kommen, um den Tag zu retten.</p>
<p class="zit">Die Jägerroboter stampfen aus dem Wald, ihre Glaskugeln glühen rot statt grün. Sie richten ihre Waffen auf die ausgehungerten Kreaturen. Jeder Roboter feuert eine einzelne Salve und zerfetzt die beiden Raptoren. Sie wenden sich bedrohlich den Kindern zu. Plötzlich werden ihre Kugeln wieder grün, und sie ziehen ab und lassen die Kinder allein.</p>`},
  {id: "unbekannt", titel: "Das große Unbekannte", s: 11, html: `
<p>Obwohl davon ausgegangen wird, dass die Kinder den Riss schließen und ihre Stadt retten, hindert nichts sie daran, durch das Portal zu wandern und die Kreidezeit zu erkunden – solche Möglichkeiten werden hier aber nicht behandelt. Auf S. 156–157 des offiziellen Regelwerks findest du eine Beschreibung der urzeitlichen Umgebung und einen Überblick über den Ärger, der dort warten könnte. Denk nur daran, dass es sehr heiß, voller Insekten und gefährlich ist!</p>`}
]});
M.phasen.push({id: "nachspiel", name: "Nachspiel", abschnitte: [
  {id: "nachspiel", titel: "Nachspiel", s: 11, html: `
<p>Sobald das Tor geschlossen ist, müssen die Kinder noch den Weg nach Hause finden. Hier sind einige Möglichkeiten, anzudeuten, dass das Mysterium zu Ende geht …</p>
<p>Die Scheune ist plötzlich sehr leer. Mit der Zeitmaschine lässt sich nicht mehr viel anfangen. Es wird spät am Tag. Die Temperatur sinkt. Das Abendessen ist bald fertig. Juneau fängt vielleicht an zu jammern und traurig zu wirken, was die Kinder hoffentlich daran erinnert, dass sie wieder mit Nicholas Evans vereint werden muss. In der Scheune gibt es einen <b>Rodelschlitten</b>, der nützlich sein könnte, auch wenn Juneau nicht alle Kinder allein ziehen kann.</p>
<p>Sind die Kinder den <b>Iwasakas</b> noch nicht begegnet, können sie während des kalten Heimwegs plötzlich auftauchen. Die Jägerroboter nähern sich den Kindern bedrohlich, scannen sie und ziehen dann weiter.</p>
<p>Inzwischen ist es Mike gelungen, den Raptoren zu entkommen, und Bob hat ihn aufgelesen. Sobald die Kinder auf der Zufahrtsstraße zu laufen beginnen, können Mike und Bob anhalten und darauf bestehen, sie in ihrem <b>Wartungsfahrzeug</b> nach Hause zu bringen. Ist es extrem spät oder wollen die Spieler die Farm einfach nicht verlassen, können Mike und Bob beim Verfolgen von Diane Petersons Stromkabel auf die Kinder stoßen. Jeder Versuch, das Thema Dinosaurier anzusprechen, wird von Bob verspottet und abgeschmettert. Die beiden Männer fangen an, sich gegenseitig zu foppen, und streiten dann. Am Ende beleidigen sie einfach gegenseitig ihre Mütter. Derselbe Kreislauf aus Frotzeln und Streiten wiederholt sich, wenn die Kinder das Thema erneut ansprechen.</p>
<p>Zurück in der Stadt sollten die Kinder ein paar Minuten bekommen, um Juneau an Nicholas Evans zurückzugeben und ihre 25 Dollar Belohnung zu kassieren. Er interessiert sich nicht besonders für wilde Geschichten. Er will nur sichergehen, dass es seinem Hund gut geht. Tatsächlich führt jede Erwähnung gefährlicher Abenteuer nur dazu, dass Nicholas sich um Juneau sorgt und sie noch mehr verhätschelt.</p>
<p>Nach Erhalt der Belohnung sollten die Kinder ermuntert werden, zum Abendessen nach Hause zu gehen. Biete eine letzte Reihe von Szenen aus dem Alltag an. Hier sind einige Punkte, an die du denken solltest …</p>
<ul>
<li>Niemand glaubt irgendetwas, das mit Dinosauriern oder Zeitreisen zu tun hat.</li>
<li>Die Morgenzeitung bringt ein Bild der Iwasaka-Roboter. Es heißt, den Robotern sei es gelungen, eine ziemlich große Gruppe Wölfe aufzuspüren und zu töten. Der Haustierbestand in der Gegend ist nun sicher.</li>
<li>Der Erwachsene (Elternteil), der im Loop arbeitet, bemerkt, dass das Stromproblem gelöst sei – ein Waschbär war in den Lüftungsschacht geklettert und hatte Probleme verursacht.</li>
<li>Kehren sie zur Farm zurück, finden sie sie ausgeräumt vor, als wäre nie etwas geschehen.</li>
</ul>
<p>Als letzten Aufhänger entdecken die Kinder vielleicht eine kleinere Reihe von Dinosaurierspuren im Schnee …</p>`}
]});
M.phasen.push({id: "landschaft", name: "Mystery-Landschaft", abschnitte: [
  {id: "landschaft", titel: "Mystery-Landschaft", s: 12, html: `
<p>Viele NSC und Orte aus dieser Geschichte können in ein Mystery-Landschafts-Setting eingebaut werden. Die folgenden Materialien enthalten eine Seite für die Spielleitung mit Notizen und Handlungsvorschlägen sowie ein zweites druckbares Infoblatt, das den Spielern gegeben werden kann.</p>`},
  {id: "l-nicholas", titel: "Nicholas Evans", s: 12, box: 1, html: `
<p>Im offiziellen Tales-From-The-Loop-Regelwerk ist Nicholas Evans ein Langstrecken-Skater, der von Dinosauriern getötet wird. Hier wird Nicholas neu erfunden als sportlicher Junggeselle der Stadt, der gern mit seinem Hund Juneau Querfeldeinlauf betreibt. Nicholas kann ein nützlicher NSC sein, mit dem man sich verbindet. Er kommt in der ganzen Stadt herum und hat beim Laufen auf verschiedenen Wegen viele Dinge gesehen. Nicholas kann in beliebigen Momenten vorbeikommen, kurze Hinweise fallen lassen und dann weiterziehen. Bedenke, dass Nicholas als Erwachsener für das Seltsame und Fantastische blind ist. Er beobachtet vielleicht merkwürdige Ereignisse, nimmt aber immer eine einfache, alltägliche Erklärung an. Er hilft den Kindern unbeabsichtigt und sollte sich nie absichtlich in ihre Abenteuer einmischen.</p>
<p><b>Aufhänger:</b> Nicholas joggte einen Abschnitt des Loops entlang, als er zufällig ein streng geheimes Experiment beobachtete. Es ergab für ihn keinen Sinn, und er lief einfach weiter. Jetzt verfolgen ihn Spezialagenten Tag und Nacht. Er weiß nicht, warum, und es stresst ihn, Mann!</p>`},
  {id: "l-juneau", titel: "Juneau", s: 12, box: 1, html: `
<p>Wie in diesem Mysterium gezeigt, kann Juneau sowohl als „Blindenhund“ zum Finden von Hinweisen dienen als auch als Agentin des Chaos und des Ärgers. Vielleicht führt Juneau ein geheimes doppeltes Hundeleben: als treuer Begleiter von Nicholas Evans und zugleich auf verrückten Abenteuern mit den Kindern.</p>
<p><b>Aufhänger:</b> Ein klassisches „Lassie“-Szenario: Juneau taucht plötzlich auf, bellt und versucht, die Kinder zum Mitkommen zu bewegen – Nicholas Evans ist beim Joggen in eine vergessene Wartungsluke gefallen und hat sich den anderen Knöchel verstaucht. Die Luke gibt Zugang zu einem verlassenen Tunnel, der bis ins Zentrum der Loop-Industrieanlage führt.</p>`},
  {id: "l-diane", titel: "Diane Peterson", s: 12, box: 1, html: `
<p>Diane Peterson ist die Hauptgegnerin aller vier Abenteuer von „Die vier Jahreszeiten des verrückten Wissenschaftlers“ im offiziellen Tales-From-The-Loop-Regelwerk. Sie ist eine gefährliche und verantwortungslose Narzisstin, die eine Spur aus Ärger und Zerstörung hinter sich lässt. Wird das ursprüngliche Abenteuer „Kreaturen aus der Kreidezeit“ durch „Snow Day“ ersetzt, findet Diane im dritten Mysterium ein frühes Ende. Das muss kein Problem sein, wenn du findest, dass das letzte Mysterium – „Ich, Wagner“ – für dein Setting zu fantastisch ist oder du nicht daran interessiert bist, alle „offiziellen“ Mysterien als Set zusammen zu spielen. Alternativ lässt sich jeder andere instabile Wissenschaftler-NSC leicht an Diane Petersons Stelle setzen.</p>
<p><b>Aufhänger:</b> Jemand anderes besitzt nun den „Funken“. Er öffnet einen Riss in die Kolonialzeit Amerikas. Er stiehlt Alltagsgegenstände aus der Geschichte und verkauft sie als makellose Sammler-Antiquitäten.</p>`},
  {id: "l-bobmike", titel: "Bob & Mike", s: 13, box: 1, html: `
<p>Bob & Mike sind zwei redselige Loop-Wartungsarbeiter. Sie sind laut und unbedacht, was soziale Situationen angeht, kennen sich aber sehr gut mit dem komplexen Loop-System aus. Neben der Rolle als komische Entlastung sind Bob & Mike erstklassige Kandidaten für Würfe auf <span class='f'>kontakte</span> und <span class='f'>charme</span>, um Klatsch und Loop-spezifische Informationen zu erfahren. Bob & Mike haben Zugang zu verschiedenen Fahrzeugen und Ausrüstung. Manchmal können die Kinder bei ihnen mitfahren oder sich etwas von ihnen leihen (stehlen).</p>
<p><b>Aufhänger:</b> Bob & Mike haben endlich einen Bruch und prügeln sich an der Tankstelle. Sie weigern sich, weiter zusammenzuarbeiten. Innerhalb weniger Tage sinkt die Qualität der Stromregelung des Loops auf gefährliche Werte. Ständige Schwankungen erzeugen seltsame und gefährliche Phänomene. Die Kinder erkennen, dass Bob & Mike allein dafür verantwortlich waren, den Loop richtig am Laufen zu halten. Sie müssen die beiden Rivalen überzeugen, das Kriegsbeil zu begraben und gemeinsam alles in Ordnung zu bringen.</p>`},
  {id: "l-fahrzeuge", titel: "Loop-Wartungsfahrzeuge", s: 13, box: 1, html: `
<p>Alle Loop-Fahrzeuge haben einen ähnlichen Erkennungsstil: silbergesprenkelte Lackierung und grüne Alarmlichter. Läuft eine Spielsitzung schleppend, lass einfach einen silbernen Van vorbeifahren – die Kinder sollten den Hinweis verstehen und ihm folgen. Außerdem kannst du in diesem Abenteuer Spannung erzeugen, indem du die Spieler mit <b>grünen Lichtern</b> verwirrst. Vielleicht sehen sie ein grünes Licht, das sich durch die Bäume bewegt – ist es ein Wartungswagen oder ein jagender Iwasaka-Roboter?</p>
<p><b>Aufhänger:</b> Den Kindern fällt plötzlich auf, dass ein bestimmter Wartungswagen violette Alarmlichter und goldgesprenkelten Lack hat. Welche Bedeutung hat dieser Wagen?</p>`},
  {id: "l-roboter", titel: "Iwasaka-Roboter", s: 13, box: 1, html: `
<p>Was geschieht, nachdem die Roboter ihren Zweck erfüllt haben? Sie können verpackt und abtransportiert werden, aber du kannst auch neue Mysterien-Aufhänger einführen, indem du sie in der Stadt behältst.</p>
<p><b>Aufhänger:</b> Die Kinder gehen zurück zum Lagerhaus und entdecken, dass die Roboter noch in der Stadt gelagert werden. Warum wurden sie nicht an ihren ursprünglichen Lagerort zurückgerufen? Wer oder welche Organisation könnte überhaupt reich genug sein, zwei Iwasaka-Roboter zu besitzen?</p>`},
  {id: "l-tankstelle", titel: "Shell-Tankstelle", s: 13, box: 1, html: `
<p>Die Shell-Tankstelle kann leicht zu einem Hauptort werden, den man beim Erkunden von Mysterien besucht. Hier kreuzen sich viele verschiedene Wege. Auswärtige Besucher halten an, um zu tanken und nach dem Weg zu fragen. Loop-Wartungsarbeiter (wie Bob & Mike) halten vielleicht ebenfalls für Treibstoff und eine Zigarettenpause. Kinder lungern vor dem Laden herum, quatschen und versuchen, von den Truckern Zigaretten zu schnorren. Gelegentlich fährt ein älterer Teenager mit seinem lauten Hotrod vor und macht Ärger.</p>
<p><b>Aufhänger:</b> Ein neuer Teil der Tankstelle ist im Bau. Im Moment sieht er nur wie ein einsamer Betonparkplatz aus, aber bald dient er als Landeplatz und Tankstelle für Gaußschiffe der Maglight-Klasse.</p>`}
]});
M.phasen.push({id: "nsc", name: "NSC", abschnitte: [
  {id: "nsc", titel: "Anhang: Leute und Orte", s: 14, nsc: 1, html: ``}
]});
M.nsc = {
  nicholas: {name: "Nicholas Evans", s: 14, zitat: "", html: `
<p>Nicholas Evans ist ein sportlicher Junggeselle der Stadt, der gern mit seinem Hund Juneau Querfeldeinlauf betreibt. Er ist Ende zwanzig – groß und schlaksig, mit großem Bart und buschigem rotbraunem Haar. Er trägt fast immer seine Sportkleidung: einen neonfarbenen Windbreaker-Overall bei kühlem Wetter oder lächerlich knappe Shorts und ein T-Shirt im Sommer. Nicholas joggt in der ganzen Stadt herum und hat viele Geschichten von seinen Streifzügen zu erzählen. Er ist energiegeladen und redselig, aber auch flatterhaft und immer darauf aus, möglichst schnell zu seiner Joggingroutine zurückzukehren.</p>`},
  juneau: {name: "Juneau", s: 14, zitat: "", html: `
<p>Juneau ist Nicholas Evans’ energiegeladener Alaskan-Malamute-Schlittenhund. Juneau begleitet Nicholas gewöhnlich auf seinen häufigen Joggingrunden. Man könnte sie leicht für einen Wolf halten. Sie ist im Allgemeinen ruhig und gehorsam, ist aber dafür bekannt, gelegentlich auszureißen und Ärger zu machen.</p>`},
  bobmike: {name: "Bob & Mike", s: 14, zitat: "„Mike, du bist so dumm, du könntest nicht mal Pisse aus einem Stiefel kippen, wenn die Anleitung auf der Ferse stünde.“", html: `
<p>Bob & Mike sind zwei redselige Loop-Wartungsarbeiter. Sie sind laut und unbedacht, was soziale Situationen angeht, kennen sich aber sehr gut mit dem komplexen Loop-System aus. Sie werden oft gemeinsam eingeteilt. Bob & Mike haben eine seltsame Beziehung, denn sie streiten und beleidigen sich ständig, ohne je wirklich beleidigt oder wütend zu werden. Bob & Mike „überreden“ einander. Es ist für jeden anderen sehr schwierig, überhaupt zu Wort zu kommen.</p>
<p class="zit">„Hab keine Angst, Bob hat schon immer so ausgesehen.“ – „Wie denn?“ – „Als hätte dein Gesicht Feuer gefangen und jemand hätte versucht, es mit einer Schaufel zu löschen.“</p>`},
  diane: {name: "Diane Peterson", s: 14, zitat: "", html: `
<p>Diane Peterson ist in der Stadt gut bekannt, vor allem weil sie in jeder Situation die Aufmerksamkeit auf sich lenkt. Sie wurde als „Projekt-Innovatorin“ bei der Ricksenergi Advanced Research Cohort eingestellt – einem hochrangigen Zweig der Loop-Forschungsanlage. Das war vor drei Jahren. In letzter Zeit ist Diane aus dem Alltag der Stadt verschwunden (sehr zur Erleichterung der verschiedenen Einheimischen). Gerüchten zufolge wurde sie kürzlich von ihrem Posten entlassen und machte einen ziemlichen Aufruhr, als sie vom Gelände des Loops hinausbegleitet wurde.</p>`}
};
M.phasen.push({id: "anhang", name: "Anhang", abschnitte: [
  {id: "a-fahrzeuge", titel: "Loop-Wartungsfahrzeuge", s: 14, box: 1, html: `
<p>Lieferwagen, Lastwagen, Anhänger, Quads und verschiedenste bizarre Magnetrin-Maschinen; es gibt keine Grenze für die Arten von Loop-Wartungsfahrzeugen, die ein Kind sehen kann. Doch alle teilen einen ähnlichen Erkennungsstil: silbergesprenkelte Lackierung und grüne Alarmlichter.</p>`},
  {id: "a-tankstelle", titel: "Shell-Tankstelle", s: 14, box: 1, html: `
<p>Die Shell-Tankstelle im Zentrum der Stadt ist eine große Anlage. Sie ist die einzige Dieselquelle in der Gegend (abgesehen von den verschiedenen Wartungsgebäuden innerhalb des industriellen Komplexes des Loops). Sie kann große Lastwagen und Anhänger abfertigen, hat drei Werkstattboxen für Autoreparaturen und bietet einen voll besetzten Convenience-Store mit Feinkosttheke. Sie ist zu einem zentralen Treffpunkt für Kinder und Erwachsene geworden.</p>`},
  {id: "tagebuch", titel: "Dianes Tagebuch", s: 15, bilder: [{b:"snowday-zeitmaschine", t:"Diagramm der Zeitmaschine", s:18}], html: `
<h3>Eintrag eins</h3>
<p>Ich, Diane Peterson, habe das Geheimnis der gezeitengravitationsunterstützten Raumzeit-Feldkrümmung gelüftet – was von all den maulatmenden Plebejern um mich herum höchstwahrscheinlich als „Zeitreise“ bezeichnet werden würde. Ich werde sofort damit beginnen, die richtigen Materialien zusammenzutragen, die für den Bau eines funktionierenden Prototyps zur Vorführung nötig sind.</p>
<p>P.S. – Ich sollte erwähnen, dass das Ausarbeiten der Kernberechnungen zu diesem Phänomen nur etwa 20 Minuten konzentrierter Geistesarbeit gebraucht hat, während ich gestern Abend darauf wartete, dass mein Jasminreis kocht.</p>
<p>P.P.S. – Diese Narren, die mich aus der Ricksenergi Advanced Research Cohort geworfen haben, werden es ewig bereuen!</p>
<h3>Eintrag zwei</h3>
<p>Nach Tagen des Testens habe ich endlich mein Hauptziel erreicht. Ich habe es „den Funken“ genannt. Wenn er aktiviert wird, verursacht der Funke einen Riss im Zeitkontinuum. Das nennt man technisch ein Zeitverzerrungsfeld. Derzeit ist es ein sehr kleiner Riss, etwa 1 ½ Zoll (rund 4 cm) im Durchmesser. Der Funke braucht eine gewaltige Menge Energie, um einen Riss zu erzeugen. Ich zapfe derzeit den Loop an, um genug Energie zu bekommen. Ich war bisher sehr darauf bedacht, nicht entdeckt zu werden. Die Maschine zieht Energie aus dem Loop und speichert sie. Dieser Vorgang dauerte zwei Wochen für zwei Ladungen; eine Ladung, um den Riss zu erzeugen, eine, um den Riss wieder zu schließen.</p>
<h3>Eintrag drei</h3>
<p>Ich habe damit experimentiert, den Riss zu „dehnen“, und festgestellt, dass das mit Magnetrin-Scheiben möglich ist. Der Funke ist nicht stark genug, um den Riss zu schließen, sobald er gedehnt ist. Ich muss zusätzliche Energie zu den Magnetrin-Scheiben umleiten, sodass der Riss wieder auf seine ursprüngliche Größe schrumpft und der Funke ihn schließen kann.</p>
<p>Ich habe außerdem ein Diagramm der Maschine gezeichnet. Es könnte meinen künftigen Assistenten helfen, die nicht in der Lage sind, die Komplexität des Geräts vollständig zu erfassen.</p>
<h3>Eintrag vier</h3>
<p>Um meine kostbare Arbeit zu schützen, habe ich ein genial ausgeklügeltes Sicherheitssystem eingerichtet! Ich hatte schon immer furchtbar viel Ärger mit Passwörtern, kann mir aber leicht Melodien merken. Niemand wird je meinen Code knacken können.</p>
<h3>Eintrag fünf</h3>
<p>Ich habe beschlossen, dass es wirklich cool wäre, einen Haus-Dinosaurier zu haben. Könnte ich einen zähmen, ließe er sich als großartige Enthüllung nutzen, wenn ich meine Experimente der Öffentlichkeit präsentiere. Ich habe bereits ein paar Eier gesammelt, die in der Nähe des Risses lagen. Sie werden in diesem Farmhaus ausgebrütet.</p>`},
  {id: "tonband", titel: "Mikes Sprachprotokoll", s: 16, html: `
<p><b>Männliche Stimme:</b> „Seht ihr, jetzt nehmen wir auf, la la la. Man erkennt es daran, dass dieses rote Licht, seht ihr, aufleuchtet, wenn man spricht.“</p>
<p><b>Eine andere männliche Stimme:</b> „Bob, ich verstehe einfach nicht, warum ich dieses Ding benutzen muss, ich habe ein großartiges Gedächtnis, ich kann meine Berichte tippen, wenn ich zu Hause bin.“</p>
<p><b>Bob:</b> „Tut mir leid, Mike, das ist die neue Firmenvorschrift. Wenn du also mit dem Sprechen fertig bist, dann einfach –“</p>
<p><i>Die Nachricht bricht ab.</i></p>
<p><b>Mike:</b> „Wartungsprotokoll 102323, Dez. XX (2 Tage zuvor), 1982. Mike Reed, Aufzeich–“</p>
<p><i>Es bricht ab.</i></p>
<p><b>Mike:</b> „Okay, das Ding scheint zu funktionieren. Nur zur Info, Bob, ich bin immer noch gegen diese Rekorder, an Bleistift und Papier ist nichts auszusetzen. Seufz. Jedenfalls habe ich lokale Messungen an allen Messstationen auf der Südseite des Loops gemacht und die Stromspitzen auf einen 6 Meilen (rund 10 km) langen Abschnitt zwischen den Stationen 21 und 24 eingegrenzt. Ich muss ein Dreirad aus dem Wartungsschuppen benutzen, weil die Zufahrtsstraße zu den Unterstationen 23 und 24 ausgewaschen ist und eine dicke Schneeschicht darauf liegt – mein Lastwagen schafft das nie.“</p>
<p><b>Mike:</b> „Unterstation 22 sagte, die Stromspitzen gehen oberhalb von ihr weiter. Es muss Unterstation 23 sein. Ich fahre jetzt hin. Außerdem, seltsame Notiz: Ich habe hier draußen einen Alaska-Husky herumrennen sehen. Ich habe nach ihm gerufen, aber er wirkte ziemlich verschreckt und rannte weg, sobald er mich hörte.“</p>
<p><b>Mike:</b> „Tja … ich stecke in der Klemme. Ich habe Unterstation 23 gefunden. Sie wurde manipuliert. Aber das Geräusch meines Motors hat irgendein … Tier angelockt. Furchterregend. Es hat versucht, mich anzugreifen. Ich erinnerte mich an diese alte Jagdhütte, an der ich auf dem Weg vorbeigekommen war, also drehte ich um und gab Gas. Hätte gedacht, mein Dreirad würde ihm davonfahren, aber es konnte mithalten, und ich konnte wegen der Straßenverhältnisse nicht Höchstgeschwindigkeit fahren. Ich fuhr ein paar Minuten so … die schlimmsten Minuten meines Lebens. Es sprang nach mir und verfehlte mich knapp, riss das Sitzpolster auf und krachte dann gegen einen Baum. Danach konnte ich mich ein Stück von ihm absetzen. Ich fand die Jagdhütte, und sie war zum Glück unverschlossen. Ich schlug die Tür zu und versteckte mich ein paar Stunden im Badezimmer. Da bin ich immer noch.“</p>
<p><i>Geräusch von Bewegung.</i></p>
<p><b>Mike:</b> „Ich sehe das … Ding jetzt nicht. Es war etwa 5 Fuß (rund 1,5 m) groß, zweibeinig, ein dunkelblauer Körper mit hellblauem Kopf und einem roten Streifen? Oder vielleicht einer Reihe roter Flecken, die an der Seite des Halses entlangliefen. Wüsste ich es nicht besser, würde ich sagen, es war ein Dinosaurier. Ha! Ich bleibe noch ein bisschen hier und vergewissere mich, dass es nicht in der Nähe ist. Ich habe das Dreirad in meiner Panik umgekippt, ich sehe es etwa 50 Yards (rund 45 m) draußen vom Fenster aus, es sieht aus, als liefe Benzin aus, hoffentlich ist der Vergaser nicht abgesoffen.“</p>
<p><b>Mike:</b> „Sieht aus, als hätte es die Lust an mir verloren und wäre weitergezogen, ich habe es seit über einer Stunde nicht gesehen, ich gebe ihm noch etwa 20 Minuten und haue dann zurück zum Lastwagen ab, das Dreirad hole ich später. Wünscht mir Glück!“</p>`}
]});
})();
