/* Snow Day (Einzelheft, Community-Mysterium) – deutsche Übersetzung des Buchtexts. Gedruckte Seiten (PDF-Seite − 1).
   Alternative zu „Kreaturen aus der Kreidezeit“ (Corebook Kap. 11). Einheitliche Fassung, keine Loop-Varianten. */
window.MYS = window.MYS || {};
window.MYS.snowday = {
  id: "snowday", name: "Snow Day", bild: "m-snowday", buch: "tftl_a3", jahreszeit: "Winter",
  intro: "„Snow Day“ wurde ursprünglich als alternative Handlung für „Kreaturen aus der Kreidezeit“ entworfen – das dritte Mysterium im offiziellen Tales-From-The-Loop-Regelwerk. Jetzt wird es als eigenständiges Mysterium vorgestellt, das weiterhin dazu dienen kann, den Handlungsbogen „Die vier Jahreszeiten des verrückten Wissenschaftlers“ zu verändern. Während die ursprüngliche Geschichte ein ausgedehnter Road-Trip war, wirkt diese Fassung örtlich begrenzter und unmittelbar gefährlicher. Alles spielt am Stadtrand: Es gibt vermisste Haustiere, Gerüchte über herumstreifende Wölfe, rätselhafte Stromschwankungen im Loop, bedrohliche Sicherheitsroboter und eine gesunde Dosis urzeitlicher Zeitreise. Den Spielern wird am Ende ein Rätsel vorgelegt, für dessen Lösung mehrere Bestandteile nötig sind. Diane Peterson, die wiederkehrende Schurkin des Regelwerks, findet ebenfalls ein vorzeitiges Ende (durch ausgehungerte Velociraptoren).",
  phasen: [
    {id: "wahrheit", name: "Wahrheit", abschnitte: [
      {id: "wahrheit", titel: "Die Wahrheit hinter dem Mysterium", s: 1, html: `
<p>Die Wissenschaftlerin Diane Peterson experimentiert mit Zeitreisen. Sie hat ein Gerät gebaut, das ein Zeittor in die Kreidezeit öffnet. Dafür braucht sie eine riesige Energiequelle. Sie zieht in ein kleines Farmhaus im Wald außerhalb der Stadt und speist ihre Experimente mit dem Loop, um ein größeres Tor zu öffnen. Raptoren kommen aus dem Riss, töten sie und lassen das Zeittor offen. Dinosaurier aus der Kreidezeit streifen nun durch das Tor und gelangen in die Stadt.</p>
<p>Haustiere der Familien sind verschwunden. Das Mysterium beginnt damit, dass die Kinder einen verlorenen Hund suchen.</p>
<p>Sie entdecken eine alte Jagdhütte. Darin finden sie ein tragbares Tonbandgerät, das die Begegnung eines Loop-Wartungsarbeiters mit Dinosauriern festhält. Das führt die Kinder zu Dianes Farm, wo sie herausfinden müssen, wie man das Zeittor schließt. Vielleicht entdecken sie auch, dass die Raptoren nicht die einzigen Kreaturen sind, die in die Gegenwart gelangt sind.</p>`},
      {id: "winter", titel: "Winter", s: 1, html: `
<p>Schnee ist nicht gerade selten, aber alles über einen Fuß Höhe ist ein Grund zur Aufregung. Kinder hoffen auf einen Schneetag, ausgefallenen Unterricht und viel Zeit für Schneeburgen und Schneeballschlachten. Meistens läuft es aber auf nichts weiter hinaus als einen nassen Schulweg durch den Matsch und verlorene Fäustlinge. Dieses Mysterium spielt Anfang Dezember, am besten an einem Freitag. Die Winterferien stehen vor der Tür, und die Lehrer versuchen die meiste Zeit, ihre Schüler dazu zu bringen, noch ein wenig länger aufzupassen, um das Jahr zu beenden.</p>`}
    ]},
    {id: "kids", name: "Kinder einführen", abschnitte: [
      {id: "kids", titel: "Die Kinder einführen", s: 1, html: `
<p>Setze für jedes der Kinder (oder als Gruppenszene) eine Szene aus dem Alltag, mit oder ohne Ärger. Vielleicht bekommen die Kinder einen Schneetag, müssen aber die Einfahrt freischaufeln oder mit Mama und Papa Besorgungen machen. Vielleicht hoffen sie auf einen Schneetag, aber die Schule findet trotzdem statt.</p>`}
    ]},
    {id: "mysterium", name: "Mysterium einführen", abschnitte: [
      {id: "mysterium", titel: "Das Mysterium einführen", s: 1, html: `
<p>Lass in einer der Alltagsszenen eines Kindes eine <b>Radiomeldung</b> oder einen <b>Zeitungsartikel</b> vorkommen, in dem eine große Zahl vermisster Haustiere erwähnt wird. Die örtliche Polizei glaubt, dass ein Rudel <b>Wölfe</b> in den Wäldern außerhalb der Stadt unterwegs ist. Die Einwohner sollen vorsichtig sein, wenn sie ihre Haustiere auf den Naturpfaden in der Gegend ausführen.</p>`}
    ]},
    {id: "loesung", name: "Lösung", abschnitte: [
      {id: "ueberblick", titel: "Das Mysterium lösen", s: 1, ueberblick: 1, html: `
<p>Hinweise, Anhaltspunkte und eine stolze Belohnung von 25 Dollar lenken die Kinder dazu, eine <b>Wartungsstraße</b> auf der Nordseite der Stadt zu erkunden. Sie entdecken einen verlassenen Wartungswagen mit Spuren eines Quads, die auf einem Pfad wegführen. Wer den Spuren folgt, stößt auf eine Reihe von Orten, die wie eine Spur aus Brotkrumen weitere Hinweise offenbaren. Schließlich entdecken sie eine verlassene <b>Farm</b>, auf der Diane Peterson mit Zeitreisen experimentiert hat. Die Kinder müssen ein Rätsel lösen, um das Zeittor erfolgreich zu schließen.</p>
<p>Wenn die Kinder ihre ersten Nachforschungen beginnen, versuche sie so zu lenken, dass sie schließlich allen drei unten aufgeführten EINFÜHRUNGSSZENEN begegnen.</p>
<p>Es sei erwähnt, dass die Handlung des Mysteriums wie eine Hantel aufgebaut ist: Am Anfang und am Ende gibt es mehrere Szenen und Orte zu erkunden, dazwischen eine lineare Abfolge von Szenen.</p>`},
      {id: "szene-a", titel: "Einführungsszene A: Probleme mit dem Loop-Strom", s: 2, ort: "ort1", html: `
<p>Setze diese Szene als Erstes ein, wenn die Kinder noch nichts untersuchen. Wenn sie bereits ermitteln, kann diese Szene ein kurzer „Zusatz“ zu EINFÜHRUNGSSZENE B sein, der weitere Hinweise liefert, bevor die Kinder losziehen, um den Loop zu erkunden.</p>
<p>Wenn bei einem der Kinder ein Elternteil im <b>Loop</b> arbeitet, hört das Kind mit, wie das Elternteil sagt, dass es länger oder über das Wochenende arbeiten muss. Die Stromversorgung des Loops hat plötzlich geschwankt, und dadurch ist ein Experiment fehlgeschlagen. Etwas verursacht große <b>Stromprobleme</b>. Die Wartung geht dem Problem nach, hat es aber noch nicht herausgefunden.</p>
<p>Haben die Kinder keine Beziehungen zum Loop, können sie einfach ein Gespräch zwischen Loop-Wartungsarbeitern belauschen, die in der Nähe eine Zigarettenpause machen.</p>`},
      {id: "szene-b", titel: "Einführungsszene B: Roboter und Wölfe", s: 2, bilder: [{b:"snowday-jaegerroboter", t:"Jägerroboter", s:3}], ort: "ort2", html: `
<p>Im Zentrum der Stadt liegt eine Tankstelle mit Zapfsäulen für Diesel-Lastwagen. Eine kleine Menschenmenge hat sich um einen großen <b>Sattelauflieger</b> versammelt, der gerade eingefahren ist. Auf dem Auflieger stehen zwei <b>Roboter</b>. Zweibeinig. Aufgerichtet wären sie etwa 15 Fuß (rund 4,5 m) groß, doch sie befinden sich in ihrem „Transportmodus“. Die Beine der Roboter sind eingeklappt. Gurte halten sie fest. Zwischen den Beinen sitzen große kugelförmige „Köpfe“. Ein Teil jedes Kopfes scheint herausgeschnitten zu sein, sodass eine Öffnung entsteht, in der eine Glaskugel zu sitzen scheint. Unter den Roboterköpfen sind automatische Waffen im Kaliber .50 montiert. Sie wirken, als seien sie zum Töten gebaut, und sind furchteinflößend anzusehen.</p>
<p>Auf dem Rücken jedes Roboters ist eingeprägt: Iwasaka SBR-71. Außerdem trägt jeder Roboter eine eigene Seriennummer, mit roter Farbe aufgeschablont.</p>
<p>Wenn ein Spieler einen Wurf auf <span class='f'>begreifen</span> macht, erinnert er sich an weitere Informationen über die Roboter. Mit einem Wurf auf <span class='f'>untersuchen</span> oder <span class='f'>einfühlen</span> können die Kinder dieselben Informationen von verschiedenen Polizisten und Ingenieuren bekommen. (Siehe Abschnitt Jägerroboter.)</p>
<p>Der Lastwagenfahrer weiß nichts außer dem Lieferort: einem <b>Lagerhaus</b> auf der Nordseite der Stadt. Der Sattelzug muss erst fertig tanken und dann durch die Stadt fahren. Die Kinder können den Lastwagen mühelos dort schlagen (wenn sie hinfahren wollen).</p>`,
       extra: [
         {t: "Lagerhaus der Roboter", s: 2, html: `<p>Nachdem der Sattelzug eingefahren ist, kommt eine schwarze viertürige <b>Limousine</b> am Lagerhaus an. Vier Personen in grauen Overalls steigen aus. Gemeinsam lösen sie die Gurte der Jägerroboter. Am Kofferraum ist irgendein elektronisches Gerät montiert. Sie ziehen lange Kabel aus dem Gerät und stecken sie in die Roboter.</p>
<p>Die Kinder sehen, wie einer der Männer ein Paar große Fotografien hervorholt. Alle vier stehen zusammen und besprechen kurz die Bilder, dann schieben sie die Fotografien einzeln in Scanner unter jedem Roboter (ein Bild dessen, was sie jagen dürfen). Gelingt den Kindern ein Wurf auf <span class='f'>schleichen</span> oder sehen sie das Bild auf andere Weise, erkennen sie, dass es ein Bild eines urzeitlichen Raptor-Dinosauriers ist.</p>
<p>Nach einigen Augenblicken erwachen die Jäger zum Leben; die Glaskugeln in ihren Köpfen leuchten grün auf. Sie richten sich auf, steigen vom Auflieger und marschieren in den Wald und aus der Stadt hinaus. Gehen die Kinder auf die Arbeiter zu, sagen diese ihnen, die Roboter würden eingesetzt, um das Wolfsrudel zu jagen, das die Gegend bedroht.</p>`},
         {t: "Jägerroboter: Iwasaka SBR-71", s: 3, html: `<p>Der Iwasaka SBR-71 war eine experimentelle Kriegswaffe. Nachdem frühe Tests der Roboter im Fernsehen übertragen worden waren, entwickelten verschiedene Länder rasch Technologien, um sie außer Gefecht zu setzen. Daher wurden die Iwasakas als nicht überlebensfähig eingestuft und das Projekt eingestellt. Eine berühmte Neuerung war ihr einzigartiges Zielerfassungssystem: Eine Kamera unter dem „Kopf“ des Roboters scannt Bilder zugelassener Ziele. Sie werden noch immer zur Patrouille in Wildreservaten in Afrika und als private Verteidigungsroboter der Superreichen eingesetzt. Sehr wenige Menschen haben je einen Iwasaka persönlich gesehen.</p>`}
       ]},
      {id: "szene-c", titel: "Einführungsszene C: Der vermisste Hund", s: 3, ort: "ort3", html: `
<p>Die Kinder finden ein <b>Schwarzes Brett</b> voller Vermisstenanzeigen für Haustiere. Eine Anzeige fällt auf. Die Belohnung ist wirklich hoch: 25,00 US-Dollar (in den Achtzigern eine Menge für ein Kind). Die Kinder kennen den Besitzer zufällig auch – Nicholas Evans, einen Freund der Familie eines der Kinder.</p>
<p>Finden sie Nicholas bei sich zu Hause, erzählt er den Kindern, dass er seinen <b>Malamute</b> Juneau auf einer Loop-Wartungsstraße nördlich der Stadt ausgeführt hat. Der Hund war nicht angeleint. Plötzlich begann sie zu bellen und rannte davon. Nicholas versuchte ihr zu folgen, rutschte aber im Schnee aus und verstauchte sich den Knöchel. Jetzt ist sein Knöchel kaputt, und er kann sein Haus nicht verlassen. Nicholas macht sich große Sorgen um Juneau. Er fürchtet, dass sie vom rätselhaften Wolfsrudel angegriffen oder selbst für einen Wolf gehalten und erschossen wird. Er zeigt den Kindern auf der Karte, wo er Juneau verloren hat: nördlich der Stadt, in einem Waldgebiet. Der Loop verläuft durch diese Gegend. Außerdem gibt es dort eine <b>Wartungsstraße</b>, die dem Loop folgt.</p>`,
       extra: [
         {t: "Juneau", s: 3, html: `<p>Juneau ist ein energiegeladener Alaskan Malamute, ein Schlittenhund. Man könnte sie leicht für einen Wolf halten. Sie ist im Allgemeinen ruhig und bellt nur bei Ärger. Juneau kann in dieser Geschichte als „Wildcard“ dienen. Sie darf in jeder folgenden Szene auftauchen und wieder verschwinden und als „Weißes Kaninchen“ die Spieler in die richtige Richtung führen, wenn sie nicht weiterkommen. Sie kann auch Ärger verursachen – die Kinder im schlimmstmöglichen Moment unterbrechen, die Jägerroboter aufscheuchen, wenn sie in der Nähe sind, oder sogar die Raptoren zu den Kindern bringen und so einen gefährlichen Showdown auslösen. Und schließlich könnte Juneau versuchen, die Kinder vor Schaden zu schützen, wenn sie eine ausreichend starke Bindung zu ihr aufbauen …</p>`},
         {t: "Lücken füllen", s: 3, html: `<p>Es ist möglich, dass die Spieler einige der Einführungsszenen verpassen und trotzdem am richtigen Ort ermitteln: EINFÜHRUNGSSZENE A lässt sich leicht in EINFÜHRUNGSSZENE B einbauen, indem einige Loop-Wartungsarbeiter an derselben Tankstelle parken. Sie besprechen die Stromprobleme des Loops in Hörweite der Kinder. Einer der Arbeiter heißt Bob. Er beschwert sich über Mike, der seit dem frühen Morgen vermisst wird.</p>
<p>Juneau, der vermisste Husky aus SZENE C, sollte in den folgenden Szenen trotzdem auftauchen – unabhängig davon, ob die Kinder Interesse daran haben, nach ihr zu suchen oder nicht.</p>`}
       ]},
      {id: "wartungswagen", titel: "Hinweise und Countdown: Der Wartungswagen", s: 4, ort: "ort4", html: `
<p>Alle drei EINFÜHRUNGSSZENEN lenken die Spieler in den Norden der Stadt. Ziel ist, dass sie die Zufahrtsstraße des Loops erkunden. Von hier an entfaltet sich die Handlung ziemlich linear, während die Kinder den Dreirad-Spuren zu verschiedenen Orten folgen. Stelle dir die Orte als einen COUNTDOWN-Zeitgeber vor, der zum SHOWDOWN im Farmhaus führt.</p>
<p>Wenn die Kinder nach Norden gehen, finden sie schließlich die Loop-<b>Wartungsstraße</b>. Außerdem sehen sie einen Lastwagen, der auf dem Schotterstreifen am Straßenrand steht. Der Wagen ist als Loop-Wartungsfahrzeug gekennzeichnet. Er zieht einen Anhänger, der derzeit leer ist. Vom Anhänger führt eine Reihe von <b>Dreirad-Spuren</b> weg und die Wartungsstraße hinauf.</p>`},
      {id: "jagdhuette", titel: "Gejagt in der Jagdhütte", s: 4, ort: "ort5", html: `
<p>Folgen die Reifenspuren der Straße weiter, kommen die Kinder an einer alten <b>Jagdhütte</b> vorbei. Etwa 50 Yards (rund 45 m) von der Hütte entfernt liegt ein umgekipptes <b>Dreirad</b> mit silbernen Sprenkeln. Eine zweite Reifenspur zeigt, dass das Dreirad zuerst an dieser Hütte vorbeigefahren, dann zurückgekommen und umgekippt worden ist. Stiefelabdrücke führen vom Dreirad in die Hütte. Es ist ein kleines Gebäude, wahrscheinlich 20 × 20 Fuß (rund 6 × 6 m), mit einem Wellblechdach.</p>
<p>Betreten die Kinder die Hütte (oder suchen sie draußen herum), entdecken sie eine Hintertür, die offen steht. Neben der Hintertür liegt ein <b>tragbares Tonbandgerät</b> auf dem Boden. Es sieht aus, als sei es versehentlich fallen gelassen worden, als jemand die Hütte verließ. Stiefelabdrücke führen von der Hintertür der Hütte zur Hauptstraße.</p>
<p>Auf dem Gerät lassen sich Sprachprotokolle abspielen. Eine eigenständige Fassung des „Skripts“ findest du im ANHANG am Ende dieses Dokuments. Du kannst sie ausdrucken und den Spielern zum Lesen geben (wenn du möchtest). Ermutige die Spieler, abwechselnd Abschnitte laut vorzulesen.</p>`,
       hinweise: [
         "Hinweise im Text der Aufnahme weisen auf die <b>Unterstation Nr. 23</b> als nächsten Ort zum Erkunden hin. Juneau, der vermisste Hund, kann auftauchen und die Kinder zu Unterstation 23 führen, wenn sie nicht weiterkommen."
       ]},
      {id: "station23", titel: "Aaltemann-Messstation Nr. 23", s: 4, ort: "ort6", html: `
<p>Folgen die Kinder den doppelten Reifenspuren, kommen sie an eine <b>Messstation</b>. Diese Stationen stehen alle paar Meilen entlang des Loops. Die Kinder nennen sie Pinguine. Die Dreirad-Spuren enden an der Station und führen dann zurück zur Jagdhütte. Die Zugangsluke ist offen. Ein großes Kabel kommt heraus. Das Kabel schlängelt sich in den Wald.</p>
<p>Auf dem Rand der offenen Luke liegt etwas, das in einen schwarzen Müllsack gewickelt ist. Es hat Größe und Form eines Toasterofens. In dem Sack steckt ein Computer. Auf dem Bildschirm steht: LUKE: GESCHLOSSEN – SYSTEM: NORMAL. Er überschreibt die Messwerte der Messstation.</p>
<p>Steigen die Kinder durch die Zugangsluke hinunter, finden sie einen Kriechgang. Das unbefugt verlegte Kabel verläuft durch den Kriechgang und ist in eine größere Stromleitung eingespleißt.</p>`,
       hinweise: [
         "Folgt man dem Kabel in den Wald, gelangt man zur Farm, wo die Maschine versteckt ist."
       ]},
      {id: "wendung", titel: "Wendung und optionaler Ärger", s: 5, bilder: [{b:"snowday-schlitten", t:"Der Schlitten", s:5, klein:1}], ort: "ort7", html: `
<p>Die nächste Szene ist das <b>verlassene Farmhaus</b>. Sie bereitet den Boden für den Showdown des Mysteriums. Jetzt ist ein perfekter Zeitpunkt, um vor dem großen Finale zusätzlichen Ärger einzuführen, besonders wenn die Geschichte bisher zu glatt verlaufen ist.</p>
<p>Es kann alles Mögliche geschehen:</p>`,
       aerger: [
         {t: "Die Jägerroboter kommen vorbei", html: `<p>Die Jägerroboter kommen vorbei. Sie bleiben stehen und mustern die Kinder bedrohlich, aber ihre Kontrolllichter bleiben grün. Das kann trotzdem manche Kinder erschrecken und sie VERÄNGSTIGT machen. (Ein Spieler kann einen Wurf auf <span class='f'>anführen</span> machen, um sie vor der Angst abzuschirmen.) Werden die Roboter nicht provoziert, ziehen sie schließlich weiter.</p>`},
         {t: "Ein anderes Wartungsfahrzeug", html: `<p>Ein anderes Loop-Wartungsfahrzeug trifft ein. Der Arbeiter brüllt die Kinder an, welchen Ärger sie damit verursacht haben, dass sie sich an der Station zu schaffen gemacht haben. Jetzt muss er zurück und tonnenweise Ausrüstung holen, um das Problem zu beheben. Er fährt verärgert davon. Ist Juneau bei den Kindern, könnte der Fahrer versuchen, sie zu „retten“, indem er schreit und den „Wolf“ verscheucht.</p>`},
         {t: "Ein Raptor erscheint", html: `<p>Ein Raptor erscheint. Die Kinder müssen in die Messstation hinabsteigen und die Luke schließen, um sicher zu bleiben, bis der Raptor sie in Ruhe lässt. Vielleicht hören sie in der Ferne einen Hund bellen, der den hungrigen Raptor weglockt.</p>`}
       ]},
      {id: "farm", titel: "Die verlassene Farm", s: 6, ort: "ort8", html: `
<p>Der Wald öffnet sich zu einer Lichtung mit einem kleinen <b>Farmhaus</b> und einer großen roten Heu-<b>Scheune</b>. Die Scheune ist zweieinhalb Stockwerke hoch und hat auf einer Seite ein riesiges Tor, das offen steht. Das große Stromkabel windet sich durch den verschneiten Hof auf die rote Scheune zu. Am äußersten Rand des Farmgeländes verläuft eine dünne Baumreihe. Hinter der Baumreihe scheint ein verschneites <b>Feld</b> zu liegen.</p>
<p>Es gibt drei Orte zu erkunden: das SCHNEEFELD, das FARMHAUS und die SCHEUNE.</p>`},
      {id: "schneefeld", titel: "Das Schneefeld", s: 6, ort: "ort9", html: `
<p>Das leere <b>Schneefeld</b> wirkt kahl und unheilvoll. Die weite, windige Fläche wird von zwei auffälligen Merkmalen unterbrochen: einem einzelnen Hügel, auf dem ein Büschel alter, knorriger Weiden steht, und einem großen landwirtschaftlichen Traktor – inzwischen verlassen und halb im Boden versunken. Vom Rand der Baumreihe des Feldes bis zum Hügel scheint eine Spur aus aufgewühltem Schnee und Schlamm zu führen.</p>`,
       aerger: [
         {t: "Wind und Kälte", html: `<p>Wer sich über das Schneefeld bewegt, ist Wind und Kälte ausgesetzt. Verbringen die Kinder zu viel Zeit auf dem Feld oder am Traktor, werden sie VERLETZT oder ERSCHÖPFT. Die Kinder können dem entgegenwirken, indem sie zusätzliche Kleidungsschichten finden, um sich warm zu halten (etwa die Decken im Haus), oder indem sie sich schnell bewegen (in der Scheune gibt es einen Rodelschlitten, und einen verlorenen Schlittenhund, der gerettet werden muss). Der Hügel ist durch eine Baumgruppe geschützt, birgt aber seine eigene Art von Gefahr.</p>`}
       ],
       extra: [
         {t: "Der Hügel", s: 6, html: `<p>Die Spur aus Schlamm und Schnee stammt von den Raptoren, als sie Teile von Diane Petersons sterblichen Überresten zum Hügel trugen, um sie zu fressen. Neugierige Kinder, die die Spur untersuchen (<span class='f'>untersuchen</span> oder <span class='f'>begreifen</span>), sollten Dinge bemerken wie: Fetzen von zerrissenem weißem Stoff, riesige vogelähnliche Spuren, Spritzer getrockneten Bluts im Schnee usw.</p>
<p>Fassen die Kinder genug Mut, den Hügel zu besteigen, entdecken sie Dianes Überreste, halb unter einer Schneewehe verborgen. Sie trug einen weißen Laborkittel, als sie angegriffen wurde. Mit einem erfolgreichen Wurf auf <span class='f'>untersuchen</span> findet man Dianes Brieftasche und Ausweis in der Kitteltasche.</p>
<p>Der Hügel ist ein furchterregender Ort. Wer sich längere Zeit in der Nähe der zerstückelten Leiche aufhält, wird VERÄNGSTIGT oder VERÄRGERT. Auch ein misslungener Fertigkeitswurf wie <span class='f'>untersuchen</span>, <span class='f'>schleichen</span> usw. in der Nähe der Leiche führt dazu, dass man VERÄNGSTIGT oder VERÄRGERT wird.</p>`},
         {t: "Der Traktor", s: 6, html: `<p>Dieser riesige Traktor steckt offenbar schon seit vielen Jahren im Boden. Es ist ein ausgewachsener „Row-Crop“-Traktor. Seine riesigen Räder sind höher als ein erwachsener Mann. Er hat eine vollständig geschlossene Kabine, die etwas Schutz vor dem Wind bieten könnte, obwohl nur zwei oder drei Kinder zusammen hineinpassen. Eine kleine leiterartige Treppe führt hinauf zur Kabine des Traktors. Der Tankdeckel befindet sich ebenfalls in der Nähe dieser Stufen.</p>
<p>Überraschenderweise ist noch reichlich Dieselkraftstoff im Tank. Er könnte in einen Behälter abgezapft und zur Scheune zurückgebracht werden, um die Zeitmaschine wieder in Gang zu setzen. Die Kinder können den Traktor auch starten, wenn sie möchten. Er kann nirgendwohin fahren, aber er macht vielleicht viel Lärm und hat sehr helle Scheinwerfer.</p>`}
       ]},
      {id: "farmhaus", titel: "Das Farmhaus", s: 7, ort: "ort10", html: `
<p>Das Farmhaus ist ein stämmiges Cape-Cod-Haus. Es ist weiß mit grünem Dach und grünen Fensterläden. Der Schnee rund um die Haustür ist aufgewühlt. Er ist matschig und schlammig. Neben der Haustür ist außerdem eine große Hundeklappe eingebaut.</p>
<p>Die Tür öffnet sich zu einem kleinen Flur, von dem eine Treppe direkt hinauf zum Dachboden führt. Rechts liegt der Eingang zum Wohnzimmer. Überall auf Boden und Treppe ist Schlamm.</p>
<p>Haben die Kinder Juneau noch nicht getroffen – oder wurde sie aufgeschreckt und ist weggelaufen –, kommt sie die Dachbodentreppe heruntergerannt, um sie zu begrüßen. Die meisten Spieler werden das wohl erwarten (wegen der Hundeklappe), aber mach es spannender, indem du laute Schläge und Kratzgeräusche vom Dachboden beschreibst, bevor der Hund herunterläuft.</p>`,
       extra: [
         {t: "Wohnzimmer", s: 7, html: `<p>Im Wohnzimmer steht ein Schreibtisch mit einem <b>Walkman</b>, einem <b>Diagramm</b> der Zeitmaschine und Dianes <b>Tagebuch</b>. Das Tagebuch beschreibt ihre Experimente und wie die Maschine funktioniert.</p>
<p>Tagebuch und Diagramm findest du im ANHANG. Sie können zur Verwendung ausgedruckt werden.</p>`},
         {t: "Der Walkman", s: 7, html: `<p>Im <b>Walkman</b> steckt eine <b>Kassette</b> mit dem Lieblingslied der Wissenschaftlerin (du kannst es aussuchen). Die Melodie des Refrains schaltet das Steuerungssystem des Funkens frei.</p>
<p><b>Liedvorschläge</b></p>
<ul>
<li>„Take On Me“ – von a-ha</li>
<li>„Africa“ – von Toto</li>
<li>„Down Under“ – von Men at Work</li>
<li>„Everybody Wants to Rule The World“ – von Tears for Fears</li>
</ul>`},
         {t: "Badezimmer", s: 7, html: `<p>Die Badezimmertür ist geschlossen. Unter der Tür dringt ein warmes rotes Glühen hervor. Im Bad sind mehrere Wärmelampen an eine Steckdosenleiste angeschlossen. In der Badewanne sind verschiedene Decken, Wolldecken und Bettdecken zu einem kreisförmigen Haufen aufgeschichtet. In der Mitte des Haufens liegen drei große ovale „Steine“. Die Steine sind cremefarben mit braunen Sprenkeln. Sie erinnern die Kinder an große, footballgroße Geleebohnen.</p>
<p>Die „Steine“ sind <b>Dinosauriereier</b>, die ausgebrütet werden. Baue die Eier so in die Geschichte ein, wie es sich am besten anfühlt. Mögliche Szenarien …</p>
<ul>
<li>Eines der Eier beginnt zu schlüpfen. Ist es ein Raptor-Baby? Ein Stegosaurus? Sogar ein T-Rex?</li>
<li>Es sind die vermissten Eier des Stegosauriers. Sie wird nicht ohne sie nach Hause zurückkehren.</li>
<li>Die Eier könnten als Raptor-Köder dienen. Entweder um sie zurück in den Riss zu locken oder um ihre Aufmerksamkeit von den Kindern abzulenken.</li>
</ul>`},
         {t: "Haushaltsgegenstände", s: 7, html: `<p>Beim Durchsuchen des Hauses finden die Kinder vielleicht …</p>
<ul>
<li>reichlich Konserven (gut zum Werfen oder um einen Hund zu füttern)</li>
<li>einen altmodischen Popcorn-Röster (ein Drahtkorb an einem langen Stiel)</li>
<li>einen großen Keramik-Schmortopf (ein oder zwei Dinosauriereier passen hinein)</li>
<li>Decken in der Badewanne (das Feld ist sehr kalt und windig)</li>
</ul>`}
       ]},
      {id: "scheune", titel: "Die Scheune", s: 8, ort: "ort11", html: `
<p>Lies den Spielern den folgenden Text laut vor.</p>
<p class="zit">Ihr betretet die Scheune und seht einen erstaunlichen Anblick. Hinten in der Scheune steht ein <b>Gerät</b>, scheibenförmig (etwa 20 Fuß, rund 6 m, Durchmesser, hochkant stehend) mit einem Metallstützgerüst darum. Fast die gesamte Innenseite der kreisförmigen Gerätefläche füllt etwas, das wie ein wunderschönes Landschaftsbild einer <b>Dschungelszene</b> aussieht. Ihr bemerkt schnell, dass sich ein paar der Blätter bewegen. Ihr hört die Geräusche des Dschungels; Vögel zwitschern, Insekten summen herum. Je näher ihr kommt, desto wärmer wird es. Der Schnee, der durch die offene Tür hereingeweht wurde, ist geschmolzen und hat den Lehmboden ein wenig matschig gemacht. Auf dem Boden bemerkt ihr eine Anzahl großer dreizehiger Fußabdrücke, die von dieser Dschungelszene weg und aus der Scheune hinausführen.</p>`,
       extra: [
         {t: "Die Maschine", s: 8, html: `<p>Hier ist eine komplexe Beschreibung der Maschine. Lies den Spielern Teile dieser Beschreibung laut vor, wenn sie beginnen, sie zu untersuchen.</p>
<p>Die radähnliche Scheibe um die <b>Dschungelszene</b> dreht sich derzeit nicht, obwohl sie offensichtlich dafür gedacht ist. Es kommen keine Geräusche aus ihr – nur eine animierte Dschungelszene, die mitten in der Luft hängt, inmitten eines runden, radähnlichen Rahmens von 20 Fuß (rund 6 m) Durchmesser.</p>
<p>Der <b>Radrahmen</b> ist aus Metall. Die Außenseite ist mit Kupfer beschichtet. An die Innenseite des Rades sind acht <b>Magnetrin-Scheiben</b> geschraubt.</p>
<p>Ein <b>Stützgerüst</b> umgibt das Rad und berührt es an 4 Stellen. An jeder Kontaktstelle befinden sich Kugellager und ein elektrischer Anschluss – alle berühren die Kupferbeschichtung. Von jeder Kontaktstelle laufen außerdem Drähte aus. Die Drähte schlängeln sich zur Rückseite des Geräts.</p>
<p>Das Rad wird von hinten durch eine Anzahl <b>Metallstützstreben</b> gehalten; sie verlaufen 2 Fuß (rund 60 cm) gerade nach hinten und knicken dann zur Mitte hin ein, sodass eine kegelartige Form entsteht. Ein <b>Metallrohr</b> verläuft durch die Mitte des Kegels. Alle Stützstreben sind mit dem Rohr verschweißt. Das Metallrohr ist Teil eines <b>riesigen Dieselmotors</b>. Es ist klar, dass der Motor das gesamte Rad zum Drehen bringen würde – wenn er eingeschaltet wäre.</p>
<p>Das Metallrohr ragt außerdem durch den „offenen“ Kegel aus Stützstreben. Es zeigt auf die Mitte der schwebenden Dschungelszene. Am Ende des Rohrs ist ein <b>sehr seltsames Gerät</b> festgeschraubt. Es ist sechseckig, mit Röhren und Drähten, die scheinbar an willkürlichen Stellen hinein- und hinausgehen. In der Mitte des Geräts – nach vorn zur Vorderseite des Rades gerichtet – sitzen 2 silberne Röhren. Mit dauerhaftem Filzstift ist auf eine Seite des Geräts geschrieben: „The Spark“ (Der Funke).</p>
<p>Ein Bündel dicker Drähte ist an die Maschine angeschlossen. Sie führen zu einem <b>großen Kasten</b> auf einem Tisch. Der Kasten ist mit „High Voltage“ (Hochspannung) beschriftet. Drei riesige Kabel verlassen den Kasten, verlaufen über den Boden und führen in einen anderen Teil der Scheune. Ein weiterer, kleinerer Kabelstrang führt zu einem <b>Computerterminal</b> auf einem nahen Schreibtisch.</p>
<p>Der Dieselmotor stammt wahrscheinlich von einem riesigen <b>Traktor</b> irgendeiner Art. Er sitzt auf einem schweren Stahlgestell. Das „Rad“ ist dort befestigt, wo das Getriebe sein sollte. Auf der anderen Seite des Motors ist ein Riemen angebracht.</p>
<p>Der Riemen läuft zu einem <b>weiteren Elektrokasten</b>. Dieser Kasten ist beschriftet:</p>
<p class="zit">„Magnetrin-Leistungsregler. Vor Inbetriebnahme für ordnungsgemäße Abschirmung sorgen.“</p>
<p>Aus dem <b>Leistungsregler</b> kommen 8 Drähte. Jeder der vier elektronischen Kontakte, die das Rad stützen, erhält zwei Drähte des Leistungsreglers.</p>
<p>Das <b>Computerterminal</b> sieht aus wie ein Apple IIe. Auf dem Bildschirm steht eine DOS-Eingabeaufforderung mit einer Meldung: „Spark Successful, Gate Open“ (Funke erfolgreich, Tor offen). Am Computer hängt außerdem etwas, das wie ein <b>Kinder-Spielzeugklavier</b> aussieht. Der Computer steuert den Funken sowie den Leistungsregler für die Magnetrin-Scheiben – ist aber passwortgeschützt.</p>`},
         {t: "Funde auf der Farm", s: 9, html: `<p>Beim Durchsuchen der Scheune finden die Kinder vielleicht …</p>
<ul>
<li>einen aufgerollten Gartenschlauch (25 Fuß, rund 7,5 m, lang)</li>
<li>einen antiken Rodelschlitten für 5 Personen (es gibt ein Seil zum Ziehen)</li>
<li>eine Handgartenschere (zum Abschneiden von Zeug)</li>
<li>einen großen Benzinkanister (fasst bis zu 5 Gallonen, rund 19 Liter)</li>
<li>eine Zweimann-Quersäge (hau-ruck!)</li>
<li>eine Mistgabel (ein einfaches Werkzeug oder eine bösartige Waffe?)</li>
</ul>`}
       ]}
    ]}
  ]
};
