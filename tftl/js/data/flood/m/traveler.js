/* Reisender (Things from the Flood, Kap. 11, S. 168–185) – deutsche Übersetzung des Buchtexts.
   {{schwedisch|amerikanisch}} = Name je nach „Unser Loop“. Teil 1: Wahrheit, Teens einführen, Mysterium einführen. */
window.FLOOD = window.FLOOD || {}; window.FLOOD.MYS = window.FLOOD.MYS || {};
window.FLOOD.MYS.traveler = {
  id: "traveler", name: "Reisender", bild: "flood/m-traveler", buch: "tftl_flood",
  intro: "Unter den Teenagern der Gegend breitet sich ein seltsames Virus aus. Eine Krankheit, die das Aussehen der Betroffenen entstellt. Schulfreunde wagen es nicht mehr, in den Unterricht zu gehen, aus Angst, zu zeigen, wie sie aussehen. Seit Langem etablierte Machthierarchien bröckeln. Gerüchte gehen um über Wissenschaftler in Schutzanzügen, die die am stärksten betroffenen Teenager einsammeln. Was geht da vor?",
  phasen: [
    {id: "wahrheit", name: "Wahrheit", abschnitte: [
      {id: "wahrheit", titel: "Die Wahrheit", s: 169, html: `
<p class="hint">Dieses Mysterium ist dafür gedacht, über ein oder zwei Sitzungen gespielt zu werden. Es kann als dritter Teil der Pandora-Kampagne verwendet werden.</p>
<p>Die Radiologin {{Elisabeth Sundgren|Elizabeth Cox}} leitete in den 80ern ein Forschungsteam bei {{Riksenergi|DART}}. Sie nannten sich „die Propheten der Wissenschaft“ und glaubten, sie könnten die Menschheit vor sich selbst retten, indem sie zur Förderung ihres edlen Ziels gefährliche und unethische Experimente durchführten. In ihrem Labor, das sie das Hephaesteum nannten, machten sie viele bahnbrechende Entdeckungen. Ihre Arbeit und ihr geheimes Labor wurden jedoch von einem Journalisten aufgedeckt. Um Gefängnis und öffentlicher Demütigung zu entgehen, beschloss Elisabeth, zusammen mit dem Hephaesteum in die Zukunft zu reisen, um ihre Arbeit fortsetzen zu können. Das Experiment schien erfolgreich zu sein: Die Polizisten, die erschienen, um Elisabeth zu verhaften, fanden nichts als leere Gänge und Räume. Elisabeth war jedoch nicht in die Zukunft gereist, sondern in eine alternative Realität. Sie entdeckte, dass das Labor und alles darin unterwegs verloren gegangen war, wahrscheinlich in einer weiteren Realität. Elisabeth begann, zwischen den Dimensionen zu reisen, um ihr Labor und ihr Zuhause zu finden. Jedes Mal musste sie bei null anfangen und eine neue Maschine bauen, und sie tätowierte sich die nötigen mathematischen Formeln auf die Haut.</p>
<p>Nach zehn langen Jahren harter Arbeit schaffte sie es zurück in ihre ursprüngliche Realität. Fast sofort stieß sie auf einige Kinder aus der Gegend, die sie zur Analyse entführte, um bestätigen zu können, dass sie in der richtigen Welt war. Dann beschloss sie, die Köpfe der Kinder als Fahrzeuge zu nutzen und sie in andere Dimensionen zu schicken, um das Hephaesteum aufzuspüren. Sie wollte nicht riskieren, sich wieder zu verirren. Die Kinder wurden bereits viele Male gezwungen, zwischen den Ebenen zu reisen, und es zerreißt sie, geistig wie körperlich. Früher oder später werden sie in der falschen Realität festsitzen, doch eines der Kinder hat es geschafft zu entkommen und nach Hause zurückzukehren, stumm vor Schock von den vielen Reisen zwischen den Ebenen.</p>
<p>Elisabeths Reisen weichen die Grenzen zwischen den Ebenen auf den Inseln auf und lassen verschiedene Realitäten ineinander bluten. Wenn die Teens Elisabeth nicht aufhalten, laufen sie Gefahr, in der falschen Version ihrer Welt zu landen.</p>`},
      {id: "realitaeten", titel: "Parallele Realitäten, Giftgas oder Aliens", s: 170, box: 1, html: `
<p>Die seltsamen Phänomene in diesem Mysterium werden von verschiedenen NSC unterschiedlich beschrieben. Elisabeth glaubt, zwischen Welten gereist zu sein, {{Ing-Marie Blankäng|Karen Richards}} vermutet UFO-Beteiligung, und {{Erik Granfors|Eric Boyd}} ist überzeugt, dass das Militär auf den Inseln geheime Experimente durchführt. Das Mysterium ist aus Elisabeths Perspektive geschrieben, aber du kannst deine eigene Wahrheit wählen. Ist das Gas, mit dem Elisabeth die Kinder außer Gefecht setzte, auf den Inseln ausgetreten und hat starke Halluzinationen ausgelöst? Hat ein anderer Wissenschaftler Elisabeth all die Jahre gefangen gehalten und ihr falsche Erinnerungen eingeflößt? Ist sie vielleicht zwischen Galaxien statt zwischen Realitäten gereist und hat mit anderen intelligenten Zivilisationen interagiert?</p>`},
      {id: "countdown", titel: "Countdown", s: 170, html: `
<p>Infolge von Elisabeths Experimenten verschmelzen verschiedene Realitäten miteinander. Nur eine Handvoll Leute auf den Inseln bemerkt die Veränderungen – unter ihnen die Teens. Baue schon in den ersten Szenen kleine Veränderungen ein: zum Beispiel eine Armbanduhr, die sich über Nacht von allein über den Tisch bewegt hat. Lass die Veränderungen nach und nach größer werden. Gegen Ende des Mysteriums sind zum Beispiel die Eltern von jemandem plötzlich geschieden, und der Partner eines Teens hat sie verlassen. Erwähne die Veränderungen nur beiläufig, denn außer den Teens bemerkt sie niemand – für alle anderen ist alles so, wie es immer war. Manches kann sich zum Besseren verändern, anderes zum Schlechteren, aber die Veränderungen führen nicht zu fantastischen oder absurden gesellschaftlichen Umwälzungen oder technischen Erfindungen – zum Beispiel keine Lichtschwerter oder Raumschiffe. Das Verschwimmen der Realität führt auch zu vielen anderen seltsamen Ereignissen rund um die Inseln – lass die Teens von einigen hören oder sie erleben (siehe Kasten unten).</p>`},
      {id: "katastrophe", titel: "Katastrophe", s: 171, html: `
<p>Gelingt es den Teens nicht, Elisabeth aufzuhalten, werden die Veränderungen an ihrer Welt dauerhaft. Elisabeth wird das Hephaesteum nie finden, doch wenn ihre Experimente weitergehen, bleiben die entführten Kinder, die sie benutzt, in einer anderen Welt gefangen, und niemand außer den Teens und Elisabeth wird sich daran erinnern, dass sie in ihrer Heimatrealität je existiert haben.</p>`},
      {id: "propheten-polizei", titel: "Propheten und Polizei", s: 173, box: 1, html: `
<p>Nur sehr wenige Menschen außer den Teens bemerken die Veränderungen um sich herum – für fast alle anderen ist die Welt so, wie sie schon immer war. Das bedeutet, dass die Teens weder die Polizei noch andere Behörden um Hilfe bitten können. Elisabeth hat ihre alten Kollegen noch nicht kontaktiert, sie will zuerst das Hephaesteum finden.</p>`},
      {id: "ereignisse", titel: "Seltsame Ereignisse in der Landschaft", s: 172, box: 1, html: `
<ul>
<li>Die Bäume in einem bestimmten Gebiet werfen plötzlich ihre Blätter ab.</li>
<li>Radio und Fernsehen fallen in einer nahen Nachbarschaft aus.</li>
<li>Ein leerer Polizeiwagen steht mitten auf der Straße, der Motor läuft noch. Die Streifenbeamten haben in dieser Realität aufgehört zu existieren.</li>
<li>Schnelle Lichtpunkte schießen über den Nachthimmel, wie Flugzeuge mit einer Manövrierfähigkeit, die alles übertrifft, was die Menschheit erfunden hat. Dies sind die Lichter, die die Kids untersuchen und die die Teens rund um die Clovers-Anlage beobachten (siehe unten).</li>
<li>Auf einer kleinen Fläche steigen seltsame Gerüche aus dem Boden.</li>
<li>Ein Meteorit stürzt in den Wald und löst einen Waldbrand aus. Als die Feuerwehr eintrifft, ist alles wieder normal – es hat nie ein Feuer gegeben.</li>
<li>Die Straßenlaternen beginnen, im Morsecode zu blinken.</li>
<li>Ein Punkt in der Luft wird magnetisch.</li>
<li>Heftige Gewitter ziehen über die Inseln.</li>
<li>Hunderte Eulen kommen nachts heraus und starren Menschen auf der Straße unheimlich an.</li>
<li>Steine bilden auf dem Boden seltsame Muster, die schwer und beängstigend anzusehen sind.</li>
<li>Kornkreise entstehen auf den Feldern.</li>
</ul>`}
    ]},
    {id: "kids", name: "Teens einführen", abschnitte: [
      {id: "kids", titel: "Die Teens einführen", s: 175, html: `
<p>Gib jedem der Teens eine Alltagsszene, mit oder ohne Ärger. Die Spieler können ihre Szenen selbst gestalten oder dich darum bitten. Starte den Countdown sofort und erwähne beiläufig merkwürdige Details, die sich scheinbar ohne Grund verändert haben.</p>`}
    ]},
    {id: "mysterium", name: "Mysterium einführen", abschnitte: [
      {id: "mysterium", titel: "Das Mysterium einführen", s: 175, html: `
<p>Einer der Teens entdeckt den unten stehenden Artikel in der Lokalzeitung. Wenn sie für die NSC-Szene zuvor eigene Kids erschaffen haben, ersetze {{Mettes|Zoes}} Namen im Artikel durch den Namen eines ihrer neuen Charaktere. Denk daran, dass alle Teens in mindestens einer Szene dabei gewesen sein müssen, bevor ihr mit der Ermittlung an den Orten weitermacht.</p>`},
      {id: "artikel", titel: "Artikel in den Mälarinsel-Nachrichten", s: 175, box: 1, html: `
<h4>Vermisstes Mädchen gefunden – jetzt stumm</h4>
<p>Eine Gruppe von Kindern zwischen zehn und vierzehn Jahren ist am Montagabend aus ihren Häusern verschwunden. Die Polizei geht davon aus, dass sie freiwillig gegangen sind, da sie Proviant, Taschenlampen und Kameras mitnahmen. Eines der Kinder wurde am Freitag gefunden, die dreizehnjährige {{Mette Karlgren|Zoe Stone}}. Laut ihren Eltern hat sie seit ihrer Rückkehr kein Wort gesprochen. Von den anderen drei Kindern wurde keine Spur gefunden. {{Mette|Zoe}} wurde von der ehemaligen Polizistin {{Ing-Marie Blankäng|Karen Richards}}, der derzeitigen Präsidentin der UFO-Gesellschaft der Mälarinseln, nach Hause gebracht. Blankäng deutete gegenüber unserem Reporter an, dass „mächtige Kräfte“ am Verschwinden der Kinder beteiligt seien, wollte aber nicht ins Detail gehen. Ein Sprecher der Polizei sagt, man gehe davon aus, dass die Ausreißer nach Stockholm gereist seien und in Kürze zu ihren Eltern zurückgebracht würden.</p>`}
    ]}
  ]
};
