/* Die Mystery-Maschine (Out of Time, Kap. O7, S. 92–103) – deutsche Übersetzung des Buchtexts inkl. Zufallstabellen.
   {{schwedisch|amerikanisch}} = Name je nach „Unser Loop“. Buch: tftl_a4, Offset 5. */
window.MYS = window.MYS || {};
window.MYS.machine = {
  id: "machine", name: "Die Mystery-Maschine", bild: "m-machine", buch: "tftl_a4",
  intro: "„Liebes Tagebuch. Heute sind wir wieder nach Ölsta hinausgeradelt. Wir haben O’boy getrunken und Brötchen gegessen, die Johans Oma gebacken hatte, und Lisa hat uns erzählt, wie sie den Feuerlevel in Welt sieben geschafft hat. Sie ist so gut in Spielen – ich will auch so gut sein. Nach den Brötchen passierte dasselbe wie letzte Woche. Die Tür wurde geöffnet. Johan wollte, dass wir hinuntergehen, aber ich hatte richtig Angst. Wieder. Mir tun die Ohren davon weh, und in der Dunkelheit flüstert etwas. Johan fing an zu necken und zu schubsen, sodass ich weinte. Aber dann sagte Lisa – hör auf, fass meine Freundin nicht an! Er sagte Entschuldigung, und dann sind wir wieder heimgeradelt. Schweigend. Nächsten Samstag werde ich kein Feigling mehr sein – dann sehe ich, was im Ölsta-Loch ist!“",
  phasen: [
    {id: "lesen", name: "Lesen", abschnitte: [
      {id: "einleitung", titel: "Die Mystery-Maschine", s: 93, box: 1, html: `
<p>In der Welt des Loops verbindet sich Entdeckungslust mit warmer Freundschaft und den Routinen der Erwachsenenwelt. Zusammen bilden fantastische und alltägliche Bestandteile die Bausteine für ein Mysterium. Dieses Kapitel stellt Vorschläge für Bestandteile und Strukturen vor, die du und deine Spielgruppe nutzen könnt, um eure eigene Abenteuerlandschaft oder eure eigenen Szenarien zu erschaffen. Die Tabellen und der Text sollen als Inspiration dienen, und es steht dir frei, eigene Elemente zu ändern oder hinzuzufügen. Es ist dein Abenteuer, das du baust!</p>
<p><b>Die 80er und 90er.</b> Die Tabellen können benutzt werden, um Mysterien sowohl für Tales from the Loop als auch für Things from the Flood zu erschaffen. Du wählst, welcher Ton und welche Bedrohungsstufe zu deinem Spielstil und deiner Spielgruppe passt – ob du neugierige Kinder im Loop der 80er spielen willst oder Teenager, die in den grauen Vorstädten der 90er nach der Wahrheit suchen. Im Allgemeinen verwendet Ersteres unbeschwertere Mysterien und weniger gefährliche Gegenspieler, während Letzteres tiefere Elemente von Horror und gesellschaftlichen Bedrohungen enthält.</p>
<p><b>Fragen.</b> Um den Kern deines Mysteriums zu erschaffen, hilft es, eine Reihe von Fragen zu stellen und sie dann mithilfe der Tabellen oder eigener Inspiration zu beantworten. Baue die Struktur anhand der Anleitung in Kapitel 6 – „Das Mysterium“ im Regelwerk von Tales from the Loop auf.</p>
<ul>
<li>Was ist geschehen oder wird bald geschehen?</li>
<li>Wer oder was steckt hinter den Ereignissen?</li>
<li>Welche anderen Faktoren beeinflussen die Fähigkeit der Kinder, das Mysterium zu lösen?</li>
<li>Wie sind die Gesellschaft und Einzelne um die Kinder herum betroffen?</li>
<li>Welche Gerüchte, die die Kinder zum Szenario führen können, haben sich bereits zu verbreiten begonnen?</li>
<li>Welche Hinweise sind die Schlüssel zur Lösung des Mysteriums?</li>
<li>Was muss getan werden, um den Gegenspieler des Mysteriums zu enthüllen oder zu besiegen?</li>
</ul>`},
      {id: "wuerfeln", titel: "Würfeln", s: 94, box: 1, html: `
<p>Die Tabellen der Mystery-Maschine verwenden einen oder zwei sechsseitige Würfel. Wenn zwei Würfel (ein W66) abgelesen werden, zählt ein Würfel als Zehnerstelle und der andere als Einerstelle. Das ergibt 36 Ergebnisse. In manchen Fällen wird eine Tabelle mit mehreren Spalten dargestellt. Du wählst dann selbst, aus welcher Spalte oder welchen Spalten du bei jedem Wurf das Ergebnis ablesen willst. Und wenn du mit dem Ergebnis nicht zufrieden bist – würfle erneut oder denk dir selbst etwas aus.</p>`},
      {id: "wahrheit", titel: "Die Wahrheit hinter dem Mysterium", s: 94, box: 1, html: `
<p>Das Szenario ist um einen Kern der Wahrheit herum aufgebaut, der den Kindern nicht sofort ersichtlich ist. Geheimnisse, Gerüchte und Hinweise erschaffen das Mysterium. Manche Orte und Ereignisse führen zu falschen Schlüssen, und auch wenn die Hinweise immer zur nächsten Szene führen sollten, sollten sie das Mysterium nicht vorzeitig enthüllen. Lass den letzten Akt zu einer großen Enthüllung führen, und vorzugsweise zu einer Konfrontation mit dem Gegenspieler des Mysteriums.</p>
<p><b>Der Gegenspieler.</b> Beginne damit, herauszufinden, was hinter dem Mysterium steckt. Wer oder was steht im Mittelpunkt von allem und ist die Kraft, deren Handlungen die Welt um die Kinder verändern werden. Das Abenteuer formt sich um die Person, das Eigentum, die Maschine oder die Kreatur. Würfle mit einem Würfel oder wähle eine Kategorie.</p>
<p><b>Antriebskraft oder Instinkt.</b> Der Gegenspieler sollte ein bestimmtes Ziel haben. Durch diese Antriebskraft kannst du verstehen, wie der Gegenspieler handelt, wenn er ein denkendes Wesen oder eine denkende Entität ist. Das Handeln wird dann von einem vorbestimmten Plan oder als Reaktion auf starke Gefühle bestimmt. Es ist auch möglich, dass der Gegenspieler eine Maschine, ein Tier oder ein Naturphänomen ist, und sein Handeln deshalb höchstwahrscheinlich aus Programmierung oder angeborenen Instinkten folgt. Würfle auf der folgenden Tabelle oder wähle selbst, wovon dein Gegenspieler inspiriert sein soll:</p>
<table>
<caption>Der Gegenspieler</caption>
<tr><th>W6</th><th>1. Mensch</th><th>2. Tier</th><th>3. Natur</th><th>4. Maschine</th><th>5. Künstliche Intelligenz</th><th>6. Kreatur</th></tr>
<tr><td>1</td><td>Getriebener Forscher</td><td>Insekten</td><td>Giftige Pflanzen</td><td>Schwebende Turbine</td><td>Cyborg</td><td>Prähistorisches Tier</td></tr>
<tr><td>2</td><td>Versklavter Diener</td><td>Jagendes Raubtier</td><td>Intelligente Pflanzen</td><td>Mast oder Antenne</td><td>Computervirus</td><td>Untote</td></tr>
<tr><td>3</td><td>Verwirrter Wohltäter</td><td>Verängstigte Weidetiere</td><td>Fleischfressende Pflanzen</td><td>Unterirdische Maschine</td><td>Nanoroboter</td><td>Mythisches Monster</td></tr>
<tr><td>4</td><td>Kaltblütiger Stratege</td><td>Reptilien auf falscher Fährte</td><td>Schnell wachsendes Unkraut</td><td>Schwebende Plattform</td><td>Selbstbalancierender Roboter</td><td>Bio-infizierte Technologie</td></tr>
<tr><td>5</td><td>Psychotisches Opfer</td><td>Kleine Schädlinge in einer Gruppe</td><td>Umschlingende Ranken</td><td>Echokugel oder -würfel</td><td>Supercomputer</td><td>Paranormales Wesen</td></tr>
<tr><td>6</td><td>Leidenschaftlicher Künstler</td><td>Wildvögel</td><td>Pilzsporen oder Pollen</td><td>Vibrierende Ringe</td><td>Schwarmintelligenz</td><td>Außerirdische</td></tr>
</table>`},
      {id: "aktion", titel: "Handlung des Gegenspielers", s: 95, box: 1, html: `
<table>
<caption>Handlung des Gegenspielers</caption>
<tr><th>W66</th><th>Antriebskraft</th><th>Instinkt</th></tr>
<tr><td>11</td><td>Ruhm</td><td>Blutrünstig</td></tr>
<tr><td>12</td><td>Einen Feind besiegen</td><td>Tiefe Trauer</td></tr>
<tr><td>13</td><td>Eine neue Familie gründen</td><td>Seinen Schwarm finden</td></tr>
<tr><td>14</td><td>Von jemandem verehrt werden</td><td>Flucht</td></tr>
<tr><td>15</td><td>Anerkannt werden</td><td>Eine Bedrohung vernichten</td></tr>
<tr><td>16</td><td>Blinde Wut</td><td>Fortpflanzung</td></tr>
<tr><td>21</td><td>Einen Seelenverwandten finden</td><td>Verwirrung</td></tr>
<tr><td>22</td><td>Für eine bessere Welt</td><td>Sich verständlich machen</td></tr>
<tr><td>23</td><td>Für Reichtum</td><td>Verborgen bleiben</td></tr>
<tr><td>24</td><td>Rache</td><td>Gesund bleiben</td></tr>
<tr><td>25</td><td>Einen Freund finden</td><td>Verbündete finden</td></tr>
<tr><td>26</td><td>Den Weg nach Hause finden</td><td>Der Nervenkitzel der Jagd</td></tr>
<tr><td>31</td><td>Jemandem in Not helfen</td><td>Auf sich selbst gestellt sein</td></tr>
<tr><td>32</td><td>Hört Stimmen</td><td>Jemanden/etwas nachahmen</td></tr>
<tr><td>33</td><td>Bedroht oder erpresst</td><td>Verdorben oder infiziert</td></tr>
<tr><td>34</td><td>Informationen sammeln</td><td>Seinen Nachwuchs unterrichten</td></tr>
<tr><td>35</td><td>Sich gebraucht fühlen</td><td>Seinen Schwarm anführen</td></tr>
<tr><td>36</td><td>Kontrolle</td><td>Verspieltheit</td></tr>
<tr><td>41</td><td>Von einem höheren Wesen geführt</td><td>Dem Tod nahe</td></tr>
<tr><td>42</td><td>Seine Gegner widerlegen</td><td>Überleben</td></tr>
<tr><td>43</td><td>Neugier</td><td>Parasit</td></tr>
<tr><td>44</td><td>Unerwiderte Liebe</td><td>Angst</td></tr>
<tr><td>45</td><td>Unheilbare Krankheit</td><td>Nahrung sammeln</td></tr>
<tr><td>46</td><td>Von etwas übernommen</td><td>Kraft sammeln</td></tr>
<tr><td>51</td><td>Wiedergeburt</td><td>Selbstverteidigung</td></tr>
<tr><td>52</td><td>Perfektionismus</td><td>Selbstverletzung</td></tr>
<tr><td>53</td><td>Prophezeiung</td><td>Ein Nest bauen</td></tr>
<tr><td>54</td><td>Eine Apokalypse herbeiführen</td><td>Seine Gruppe beschützen</td></tr>
<tr><td>55</td><td>Ein Zuhause schaffen</td><td>Sein Revier verteidigen</td></tr>
<tr><td>56</td><td>Erschaffen</td><td>Hilfe suchen</td></tr>
<tr><td>61</td><td>Eine Beziehung beschützen</td><td>Sich ausbreiten</td></tr>
<tr><td>62</td><td>Sich einfügen</td><td>Seinen Hunger stillen</td></tr>
<tr><td>63</td><td>Nach Antworten suchen</td><td>Status und Rang</td></tr>
<tr><td>64</td><td>Auf der Suche nach Aufregung</td><td>Symbiose</td></tr>
<tr><td>65</td><td>Weltherrschaft</td><td>Verwandlung</td></tr>
<tr><td>66</td><td>Jemandem seinen Wert beweisen</td><td>Ausrottung</td></tr>
</table>`},
      {id: "phaenomene", titel: "Phänomene", s: 95, box: 1, html: `
<p>Wenn dir klar ist, wer der Gegenspieler ist und was ihn antreibt, ist es Zeit zu sehen, welche Phänomene und Veränderungen durch die Handlungen oder die direkte Anwesenheit des Gegenspielers auftreten. Diese Phänomene teilen sich in zwei Kategorien – rätselhafte Ereignisse und unnatürliche Veränderungen in der Gesellschaft und bei den Menschen um die Charaktere. Würfle entweder einmal, wähle eine Kategorie und lass dieses Phänomen im Mysterium äußerst dominant sein, oder würfle für zwei verschiedene Phänomene, die miteinander wechselwirken oder zum Beispiel während eines Countdowns im Mysterium nach und nach vorgestellt werden.</p>
<table>
<caption>Die Grundbausteine des Mysteriums</caption>
<tr><th>W66</th><th>Ereignisse</th><th>Gesellschaftliche Veränderungen</th></tr>
<tr><td>11</td><td>Veränderte Schwerkraft</td><td>Allergische Reaktionen</td></tr>
<tr><td>12</td><td>Eine andere Dimension</td><td>Kybernetische Implantate</td></tr>
<tr><td>13</td><td>Blubberndes Wasser</td><td>Doping</td></tr>
<tr><td>14</td><td>Tote Tiere</td><td>Drogenhandel</td></tr>
<tr><td>15</td><td>Elektrische Entladungen</td><td>Doppelgänger</td></tr>
<tr><td>16</td><td>Explosionen</td><td>Ein großer Schatz</td></tr>
<tr><td>21</td><td>Gefallener Meteorit</td><td>Falsche Identität</td></tr>
<tr><td>22</td><td>Ferngesteuert</td><td>Fluch</td></tr>
<tr><td>23</td><td>Vergiftetes Wasser</td><td>Verteidigungssystem</td></tr>
<tr><td>24</td><td>Geysir</td><td>Verschwinden</td></tr>
<tr><td>25</td><td>Genetische Manipulation</td><td>Geheime Militärübung</td></tr>
<tr><td>26</td><td>Insektenplage</td><td>Hypnose</td></tr>
<tr><td>31</td><td>Erdbeben</td><td>Einbruch und Diebstahl</td></tr>
<tr><td>32</td><td>Chemische Substanz</td><td>Infiltration</td></tr>
<tr><td>33</td><td>Klonen</td><td>Kannibalismus</td></tr>
<tr><td>34</td><td>Kälteeinbruch</td><td>Entführung</td></tr>
<tr><td>35</td><td>Funkwellensteuerung</td><td>Kollektiver Gedächtnisverlust</td></tr>
<tr><td>36</td><td>Jemanden/etwas schrumpfen lassen</td><td>Kopiertes Verhalten</td></tr>
<tr><td>41</td><td>Levitation</td><td>Lichtempfindlichkeit</td></tr>
<tr><td>42</td><td>Wolkenformationen</td><td>Medizinische Tests</td></tr>
<tr><td>43</td><td>Mutation</td><td>Mobbing</td></tr>
<tr><td>44</td><td>Mysteriöses Artefakt</td><td>Mord</td></tr>
<tr><td>45</td><td>Funksignale</td><td>Narkolepsie</td></tr>
<tr><td>46</td><td>Nordlichter</td><td>Unsterblichkeit</td></tr>
<tr><td>51</td><td>Unnatürlicher Sturm</td><td>Übernatürliche Kräfte</td></tr>
<tr><td>52</td><td>Unsichtbarkeit</td><td>Persönlichkeitsdiebstahl</td></tr>
<tr><td>53</td><td>Überschwemmung</td><td>Riskante Experimente</td></tr>
<tr><td>54</td><td>Strahlung</td><td>Wahr werdende Träume</td></tr>
<tr><td>55</td><td>Sich verschiebendes Magnetfeld</td><td>Ansteckende Krankheit</td></tr>
<tr><td>56</td><td>Waldbrand</td><td>Spionage</td></tr>
<tr><td>61</td><td>Zeit anhalten</td><td>Geisterhafte Erscheinungen</td></tr>
<tr><td>62</td><td>Dichter Nebel oder Gas</td><td>Gedankenlesen</td></tr>
<tr><td>63</td><td>Teleportation</td><td>Schweigen</td></tr>
<tr><td>64</td><td>Zeitreise</td><td>Einen Ort meiden</td></tr>
<tr><td>65</td><td>Hitzewelle</td><td>Erpressung</td></tr>
<tr><td>66</td><td>Windstille</td><td>Urbane Legende</td></tr>
</table>`},
      {id: "beteiligung", titel: "Beteiligung", s: 96, box: 1, html: `
<p>Die Beteiligung von Organisationen kann alles sein, von bewusster Einflussnahme bis zu ahnungslosem Opfer. Diese Beteiligung ist etwas, das die Mitglieder der Organisation bei einer Konfrontation mit den Kindern zu verbergen versuchen oder ehrlich zugeben können.</p>
<ul>
<li><b>VERANTWORTLICH</b> – Sie stecken hinter dem Experiment und haben durch ihre Handlungen den Gegenspieler dazu gebracht, seine Ziele zu verfolgen, oder die aufgetretenen Phänomene verursacht.</li>
<li><b>ERMITTELND</b> – Sie können teilweise verantwortlich oder die Entdecker sein, aber die Hauptsache ist, dass die Organisation nicht wirklich versteht, was vor sich geht, und versucht, mehr Daten zu sammeln.</li>
<li><b>ZUM SCHWEIGEN BRINGEND</b> – Ob sie verantwortlich sind oder nicht, sie wollen nicht, dass die Wahrheit durchsickert. Sie schützen ihre Geheimnisse um jeden Preis, und eine Zusammenarbeit mit den Kindern ist nur möglich, wenn die Kinder helfen, das Mysterium zu verbergen.</li>
<li><b>ÜBERWACHEND</b> – Sie versuchen, die Kontrolle über das Mysterium zu behalten. Auch wenn sein gegenwärtiges Stadium akzeptabel sein mag, behalten sie die Ereignisse genau im Auge und sorgen dafür, dass nichts Unvorhersehbareres oder Unkontrollierbareres geschieht.</li>
<li><b>VERURSACHEND</b> – Durch irgendeine Form von Unfall oder Fehler ist es die direkte Schuld der Organisation, dass die Phänomene entstanden sind. Sie sind jedoch vielleicht nicht bereit, es sich selbst einzugestehen. Vielleicht ist das der Kern des Mysteriums, den die Kinder enthüllen müssen.</li>
<li><b>AHNUNGSLOS</b> – Etwas ist schiefgegangen, doch bisher waren sie nicht betroffen und haben das Problem auch nicht entdeckt. Sie glauben vielleicht sogar an ihre eigenen Erklärungen. Hier kann ein Kind sie über das Mysterium informieren und dadurch möglicherweise zum Partner werden.</li>
</ul>`},
      {id: "organisation", titel: "Organisierte Bedrohung", s: 96, box: 1, html: `
<p>Willst du die Verschwörung zusätzlich ausbauen, kannst du eine Organisation und ihre Untergebenen entweder hinter dem Mysterium stehen lassen oder sie zu einer aktiven Kraft beim Untersuchen oder Absichern machen. Es kann eine dritte Partei sein, die sich entweder als Partner oder Gegner der Kinder erweist. Durch die Beteiligung der Organisation bekommst du als Spielleiter auch einen weiteren aktiven Teilnehmer, der die Handlung in deinem Szenario vorantreibt. Würfle für jede Spalte einzeln oder wähle selbst:</p>
<table>
<caption>Beispiele beteiligter Organisationen</caption>
<tr><th>W6</th><th>Organisation</th><th>Beteiligung</th></tr>
<tr><td>1</td><td>Fremde Macht</td><td>Verantwortlich</td></tr>
<tr><td>2</td><td>Sekte oder Kult</td><td>Ermittelnd</td></tr>
<tr><td>3</td><td>{{Riksenergi|DARPA}}</td><td>Zum Schweigen bringend</td></tr>
<tr><td>4</td><td>{{FOA|DART}}</td><td>Überwachend</td></tr>
<tr><td>5</td><td>Militär oder Polizei</td><td>Verursachend</td></tr>
<tr><td>6</td><td>Übernatürliche Mächte</td><td>Zufällig</td></tr>
</table>`},
      {id: "einfuehren", titel: "Das Mysterium einführen", s: 96, box: 1, html: `
<p>Wenn die Grundlagen festgelegt sind, ist es Zeit für dich, den Ton für das Mysterium zu setzen. Dabei geht es vor allem darum, wie du als Spielleiter die Hinweise und Gerüchte erzeugst, die den Spielern in den Weg gelegt werden. In welches Genre willst du dein Mysterium einordnen? Auf welche Weise sollen die Spieler den Szenen begegnen? Das ist besonders wichtig in der Einführungsszene und in den ersten Alltagsszenen der Kinder, bestimmt aber auch den Ton für die mögliche Konfrontation am Ende des Mysteriums. Würfle einmal in jeder Spalte der folgenden Tabelle und nutze alle drei Ergebnisse, um dein Mysterium zu gestalten:</p>
<table>
<caption>Szenario-Genre</caption>
<tr><th>W6</th><th>Genre mit …</th><th>… Einführung …</th><th>… und Konfrontation</th></tr>
<tr><td>1</td><td>Detektiv, Mystery</td><td>„Der Detektivclub“ – Ermitteln</td><td>„Die Verhaftung“ – Enthüllung</td></tr>
<tr><td>2</td><td>Abenteuer, Detektiv</td><td>„Die Nervenkitzel-Sucher“ – Abenteuer</td><td>„Gestärkt“ – Angst überwinden</td></tr>
<tr><td>3</td><td>Drama, Noir</td><td>„Die Neugierigen“ – Enthüllung</td><td>„Die Wahrheit“ – Wissensdurst</td></tr>
<tr><td>4</td><td>Abenteuer, Mystery</td><td>„Archäologen“ – Entdeckung</td><td>„Sammlung“ – den Preis vorzeigen</td></tr>
<tr><td>5</td><td>Action, Thriller</td><td>„Die Retter“ – Heldentum</td><td>„Dankbarkeit“ – Wertschätzung</td></tr>
<tr><td>6</td><td>Horror, Thriller</td><td>„In den Klauen des Schreckens“ – Angst</td><td>„Leben“ – Überleben</td></tr>
</table>`},
      {id: "bericht", titel: "Der Bericht", s: 97, box: 1, html: `
<p>Bei der Einführung der ersten Szene und in den ersten Alltagsszenen der Kinder kann der Spielleiter Gerüchte und Verdachtsmomente streuen, die die Kinder bereits gehört haben. Diese können als Aufhänger in die erste Szene des Mysteriums dienen und der Gruppe eine erste Richtung geben, bis klarere Hinweise gefunden werden. Du wählst selbst, wie viel Wahrheit in diesen Gerüchten steckt:</p>
<table>
<caption>Einführende Hinweise über …</caption>
<tr><th>W6</th><th>1 … Menschen</th><th>2 … Tiere</th><th>3 … Kreaturen</th><th>4 … Eindrücke</th><th>5 … Dinge</th><th>6 … Ereignisse</th></tr>
<tr><td>1</td><td>Angebende Kinder</td><td>Verändertes Schwarmverhalten</td><td>Herumschleichendes Monster</td><td>Seltsame Lichter</td><td>Zelt- und Lagerreste</td><td>Übernatürliche Kräfte</td></tr>
<tr><td>2</td><td>Panische Jugendliche</td><td>Verängstigte Tiere</td><td>Außerirdische</td><td>Seltsame Geräusche</td><td>Geladene Waffe</td><td>Prophezeiung</td></tr>
<tr><td>3</td><td>Geheime Operation</td><td>Aggressive Tiere</td><td>Etwas aus einem Horrorfilm</td><td>Ein scharfer Geruch</td><td>Verlorenes Werkzeug</td><td>Krankheit</td></tr>
<tr><td>4</td><td>Nächtliche Spaziergänge</td><td>Verschwundene Haustiere</td><td>Geister</td><td>Verstopfte Ohren</td><td>Fehlende Maschinenteile</td><td>Fliegende Objekte</td></tr>
<tr><td>5</td><td>Einbruchswelle</td><td>Sprechende Tiere</td><td>Märchenfigur</td><td>Metallischer Geschmack im Mund</td><td>Truhe mit Geld</td><td>Stromausfall</td></tr>
<tr><td>6</td><td>Neue Arbeitsroutinen</td><td>Tote Tiere</td><td>Lebendiges Spielzeug</td><td>Halluzinationen</td><td>Mysteriöses Buch</td><td>Funkstörungen</td></tr>
</table>`},
      {id: "orte", titel: "Orte", s: 97, box: 1, html: `
<p>Das Mysterium folgt einer Spur aus Hinweisen und Ärger durch zahlreiche gewöhnliche oder außergewöhnliche Orte, bevor es sein Ende erreicht. Lege im Voraus den Ort der Einführungsszene des Szenarios fest und lass dann die Hinweise zu zwei bis vier weiteren neuen Orten führen, die die Spieler zur letzten Stufe und zur Konfrontation bringen. Benutze die folgende Tabelle und überlege, welche Hinweise wo platziert werden können:</p>
<table>
<caption>Beispiele für Orte</caption>
<tr><th>W66</th><th>… drinnen</th><th>… draußen</th></tr>
<tr><td>11</td><td>Ein Altersheim</td><td>Eine Badestelle</td></tr>
<tr><td>12</td><td>Eine Spielhalle</td><td>Ein Bootssteg</td></tr>
<tr><td>13</td><td>Eine Tankstelle</td><td>Eine Blumenwiese oder Pferdekoppel</td></tr>
<tr><td>14</td><td>Eine Bibliothek</td><td>Jenseits des Zauns und der Kameras</td></tr>
<tr><td>15</td><td>Eine Feuerwehr- oder Polizeiwache</td><td>Eine Baustelle</td></tr>
<tr><td>16</td><td>Ein unbebautes Grundstück</td><td>Ein Damm</td></tr>
<tr><td>21</td><td>Ein Boot an Land</td><td>Eine blockierte Straße</td></tr>
<tr><td>22</td><td>Ein verlassener Lastwagen</td><td>Eine windige Wüstenhochebene oder Klippe</td></tr>
<tr><td>23</td><td>Ein baufälliges Bootshaus</td><td>Ein schlammiges Feld</td></tr>
<tr><td>24</td><td>Ein altes Versteck</td><td>Ein verworrener Wald</td></tr>
<tr><td>25</td><td>Eine abgeschlossene Garage</td><td>Ein alter Baum</td></tr>
<tr><td>26</td><td>Ein rostiges Wrack</td><td>Ein militärisches Sperrgebiet</td></tr>
<tr><td>31</td><td>Ein großes Haus</td><td>Ein großes Gewächshaus</td></tr>
<tr><td>32</td><td>Ein Schaltkasten</td><td>Eine Start- und Landebahn eines Fliegerclubs</td></tr>
<tr><td>33</td><td>Eine Fabrik</td><td>In einer geheimen Höhle</td></tr>
<tr><td>34</td><td>Ein Kiosk oder Restaurant</td><td>In einem großen Steinbruch oder einer Kiesgrube</td></tr>
<tr><td>35</td><td>Ein Hühnerstall oder eine Hundehütte</td><td>In einem Sumpf/See</td></tr>
<tr><td>36</td><td>Ein Wohnmobil oder Wohnwagen</td><td>In einem großen Fluss</td></tr>
<tr><td>41</td><td>Ein verlassenes Haus</td><td>In Abwassertunneln</td></tr>
<tr><td>42</td><td>Ein Tor zum Loop</td><td>Auf einem Friedhof</td></tr>
<tr><td>43</td><td>Ein Erdkeller</td><td>Entlang der Gleise</td></tr>
<tr><td>44</td><td>Ein Kühllager</td><td>Ein Spielplatz</td></tr>
<tr><td>45</td><td>Eine Kirche</td><td>Unten in der Schlucht</td></tr>
<tr><td>46</td><td>Ein Labor</td><td>Auf dem Meeresgrund</td></tr>
<tr><td>51</td><td>Ein Lagerhaus</td><td>Ein Waldhain an einem Bach</td></tr>
<tr><td>52</td><td>Eine Scheune</td><td>Ein Schulhof</td></tr>
<tr><td>53</td><td>Eine Schule</td><td>Ein Schrottplatz</td></tr>
<tr><td>54</td><td>Ein Schutzraum</td><td>Die Durchlässe des Loops</td></tr>
<tr><td>55</td><td>Ein Schwimmbad</td><td>Ein Grenzstein</td></tr>
<tr><td>56</td><td>Ein Tattoostudio</td><td>Ein Marktplatz</td></tr>
<tr><td>61</td><td>Ein Baumhaus</td><td>Der Garten eines Gärtners</td></tr>
<tr><td>62</td><td>Die Werkstatt eines Erfinders</td><td>Unter dem Brückenwiderlager</td></tr>
<tr><td>63</td><td>Eine Herberge</td><td>Oben auf dem Hügel</td></tr>
<tr><td>64</td><td>Ein Wasserturm</td><td>Am Wasser</td></tr>
<tr><td>65</td><td>Eine Videothek</td><td>Am Funkturm</td></tr>
<tr><td>66</td><td>Ein Dachboden</td><td>Ein Hausgarten</td></tr>
</table>`},
      {id: "nsc", titel: "NSC und Kreaturen", s: 98, box: 1, html: `
<p>Schließlich muss das Mysterium vielleicht mit einigen interessanten Charakteren oder nahen Verwandten der Kinder bevölkert werden. In manchen Fällen kann es auch um verschiedene Arten von Kreaturen oder Wesen gehen, die nicht wirklich in den Bereich gewöhnlicher NSC fallen. In diesen Fällen werden am Ende dieses Kapitels Beispiele typischer Kreaturen gegeben.</p>
<p><b>Namen in den 80ern und 90ern.</b> Vornamen ändern sich über die Jahrzehnte, hauptsächlich wegen gesellschaftlicher Veränderungen wie berühmten Persönlichkeiten, Trends oder zyklisch wiederkehrenden Namen von Verwandten. Die Namen unterscheiden sich in dieser Zeit auch stärker als heute zwischen dem schwedischen und dem amerikanischen Loop – vor allem, weil die beiden Orte vor der Jahrtausendwende und dem Wachstum des Internets viel weniger Informationsaustausch hatten.</p>`},
      {id: "bewohner-maelar", titel: "Bewohner der Mälarinseln", s: 98, box: 1, html: `
<p>Die schwedischen Kinder der 80er und 90er wurden während des radikalen Wandels der 70er geboren. Sozialismus und die Umweltbewegung waren starke Elemente der Gesellschaft, und Demonstrationen gegen Militärjuntas und Diktaturen waren üblich. Die Eltern selbst wiederum wuchsen in der Ära des optimistischen Glaubens an die Nachkriegszeit der 50er auf. Sie waren die Generation, der es immer besser ging als ihren Eltern, in einer zunehmend stabilen Gesellschaft. Trotz einiger Rezessionen hatten sie die Möglichkeit, eine Karriere zu verfolgen, Bildung führte immer zu Arbeit, und sie erreichten durch das Wachstum des Million-Programms in den zunehmend modernisierten Vororten einen höheren Lebensstandard. Manche Namen waren so tief verwurzelt, dass sie zwischen den Generationen weitergegeben wurden, während andere ersetzt wurden:</p>
<table>
<caption>Namen von Kindern und Erwachsenen in Schweden</caption>
<tr><th>W66</th><th>Mädchen</th><th>Jungen</th><th>Frauen</th><th>Männer</th><th>Nachname</th></tr>
<tr><td>11</td><td>Anette</td><td>Anders</td><td>Agneta</td><td>Åke</td><td>Andersson</td></tr>
<tr><td>12</td><td>Ann, Anna</td><td>Andreas</td><td>Anita</td><td>Anders</td><td>Backman</td></tr>
<tr><td>13</td><td>Annika</td><td>Daniel</td><td>Ann-Marie</td><td>Bengt</td><td>Bengtsson</td></tr>
<tr><td>14</td><td>Camilla</td><td>David</td><td>Barbro</td><td>Bert</td><td>Berg</td></tr>
<tr><td>15</td><td>Cecilia</td><td>Erik</td><td>Berit</td><td>Bear</td><td>Bergkvist</td></tr>
<tr><td>16</td><td>Charlotte</td><td>Fredrik</td><td>Birgitta</td><td>Bo</td><td>Björk</td></tr>
<tr><td>21</td><td>Christina</td><td>Göran</td><td>Britt</td><td>Bror</td><td>Dahl</td></tr>
<tr><td>22</td><td>Elisabeth</td><td>Håkan</td><td>Britt-Marie</td><td>Christer</td><td>Ekman</td></tr>
<tr><td>23</td><td>Erika</td><td>Hans</td><td>Christina</td><td>Evert</td><td>Ekström</td></tr>
<tr><td>24</td><td>Eva</td><td>Henrik</td><td>Doris</td><td>Göran</td><td>Englund</td></tr>
<tr><td>25</td><td>Gunilla</td><td>Jakob</td><td>Elisabeth</td><td>Göte</td><td>Franzén</td></tr>
<tr><td>26</td><td>Helena, Hanna</td><td>Jesper</td><td>Eva</td><td>Gunnar</td><td>Fredriksson</td></tr>
<tr><td>31</td><td>Jeanette</td><td>Joakim</td><td>Eva-Britt</td><td>Håkan</td><td>Haglund</td></tr>
<tr><td>32</td><td>Jessika</td><td>Johan</td><td>Gertrud</td><td>Henrik</td><td>Hagström</td></tr>
<tr><td>33</td><td>Johanna</td><td>Jonas</td><td>Gun</td><td>Jan-Erik</td><td>Hedberg</td></tr>
<tr><td>34</td><td>Karin</td><td>Karl</td><td>Gunilla</td><td>Kjell, Kjell-Åke</td><td>Hellström</td></tr>
<tr><td>35</td><td>Kristina, Katarina</td><td>Lars</td><td>Gunnel</td><td>Krister</td><td>Holm</td></tr>
<tr><td>36</td><td>Lena</td><td>Magnus</td><td>Inga</td><td>Kurt</td><td>Isaksson</td></tr>
<tr><td>41</td><td>Linda</td><td>Markus</td><td>Inger</td><td>Lars</td><td>Jansson</td></tr>
<tr><td>42</td><td>Lotta, Lotten</td><td>Martin</td><td>Ingrid</td><td>Lars-Erik</td><td>Johansson</td></tr>
<tr><td>43</td><td>Malin</td><td>Mats</td><td>Katarina</td><td>Leif</td><td>Karlsson</td></tr>
<tr><td>44</td><td>Margareta</td><td>Mattias</td><td>Kerstin</td><td>Lennart</td><td>Lindberg</td></tr>
<tr><td>45</td><td>Maria, Marie</td><td>Mikael</td><td>Laila</td><td>Mats</td><td>Lindström</td></tr>
<tr><td>46</td><td>Martina</td><td>Niklas</td><td>Lena</td><td>Niklas</td><td>Malm</td></tr>
<tr><td>51</td><td>Monika</td><td>Ola</td><td>Lisbeth</td><td>Olle</td><td>Näslund</td></tr>
<tr><td>52</td><td>Nina</td><td>Örjan</td><td>Maj-Britt</td><td>Olof</td><td>Nyman</td></tr>
<tr><td>53</td><td>Pernilla</td><td>Patrik</td><td>Margareta</td><td>Ove</td><td>Olsson</td></tr>
<tr><td>54</td><td>Petra</td><td>Per</td><td>Marianne</td><td>Patrik</td><td>Pålsson</td></tr>
<tr><td>55</td><td>Pia</td><td>Peter</td><td>Marita</td><td>Per-Erik</td><td>Rosén</td></tr>
<tr><td>56</td><td>Sandra</td><td>Pontus</td><td>Maud</td><td>Peter</td><td>Sjöberg</td></tr>
<tr><td>61</td><td>Sara</td><td>Rickard</td><td>Mona</td><td>Roland</td><td>Strand</td></tr>
<tr><td>62</td><td>Sofia, Sofie</td><td>Ronny</td><td>Monica</td><td>Rune</td><td>Sundberg</td></tr>
<tr><td>63</td><td>Susanne</td><td>Stefan</td><td>Siv</td><td>Stefan</td><td>Svensson</td></tr>
<tr><td>64</td><td>Therese</td><td>Tobias</td><td>Solveig</td><td>Sture</td><td>Viklund</td></tr>
<tr><td>65</td><td>Ulrika</td><td>Tomas</td><td>Viola</td><td>Tage</td><td>Wallin</td></tr>
<tr><td>66</td><td>Yvonne</td><td>Ulf</td><td>Viviann</td><td>Tord</td><td>Westerlund</td></tr>
</table>`},
      {id: "bewohner-boulder", titel: "Bewohner von Boulder City", s: 99, box: 1, html: `
<p>Die Kinder, die in den 80ern aufwuchsen, wurden im Schatten der Mondlandung und des Kampfes um Bürgerrechte in der amerikanischen Gesellschaft geboren. Der lang andauernde Vietnamkrieg und Präsident Nixons Entscheidung, in Kambodscha einzumarschieren, führten zu Demonstrationen und Unruhen, die die Vereinigten Staaten schließlich zum Rückzug aus dem Krieg zwangen. Gestiegene Inflation und Arbeitslosigkeit machten den Eltern das Leben in den 70ern schwerer, und Zynismus ersetzte die optimistischen Ideale der 50er und 60er.</p>
<table>
<caption>Namen von Kindern und Erwachsenen in den USA</caption>
<tr><th>W66</th><th>Mädchen</th><th>Jungen</th><th>Frauen</th><th>Männer</th><th>Nachname</th></tr>
<tr><td>11</td><td>Amanda</td><td>Aaron</td><td>Ann</td><td>Arthur</td><td>Adams</td></tr>
<tr><td>12</td><td>Amber</td><td>Andrew</td><td>Barbara</td><td>Billy</td><td>Allen</td></tr>
<tr><td>13</td><td>Amy</td><td>Anthony</td><td>Betty</td><td>Carl</td><td>Anderson</td></tr>
<tr><td>14</td><td>Andrea</td><td>Benjamin</td><td>Beverly</td><td>Chris</td><td>Brown</td></tr>
<tr><td>15</td><td>Angela</td><td>Brandon</td><td>Bonnie</td><td>Daniel</td><td>Castillo</td></tr>
<tr><td>16</td><td>April</td><td>Brian</td><td>Brenda</td><td>David</td><td>Clark</td></tr>
<tr><td>21</td><td>Christina</td><td>Charles</td><td>Carol, Carolyn</td><td>Dennis</td><td>Davis</td></tr>
<tr><td>22</td><td>Crystal</td><td>Christopher</td><td>Diane</td><td>Donald</td><td>Flores</td></tr>
<tr><td>23</td><td>Danielle</td><td>Daniel</td><td>Donna</td><td>Douglas</td><td>Garcia</td></tr>
<tr><td>24</td><td>Dawn</td><td>David</td><td>Dorothy</td><td>Edward</td><td>Gonzalez</td></tr>
<tr><td>25</td><td>Elizabeth</td><td>Eric</td><td>Elizabeth</td><td>Frank</td><td>Green</td></tr>
<tr><td>26</td><td>Erin</td><td>Jacob</td><td>Frances</td><td>Gary</td><td>Hall</td></tr>
<tr><td>31</td><td>Heather</td><td>James</td><td>Gloria</td><td>George</td><td>Harris</td></tr>
<tr><td>32</td><td>Jamie</td><td>Jason</td><td>Helen</td><td>Gerald</td><td>Hernandez</td></tr>
<tr><td>33</td><td>Jennifer</td><td>Jeffrey</td><td>Janet, Janice</td><td>Harold</td><td>Hill</td></tr>
<tr><td>34</td><td>Jessica</td><td>Jeremy</td><td>Jean, Joan</td><td>Henry</td><td>Jackson</td></tr>
<tr><td>35</td><td>Julie</td><td>John</td><td>Joyce</td><td>Jack</td><td>Jensen</td></tr>
<tr><td>36</td><td>Kelly</td><td>Joseph</td><td>Judith, Judy</td><td>Jerry</td><td>Johnson</td></tr>
<tr><td>41</td><td>Kimberly</td><td>Joshua</td><td>Karen</td><td>John</td><td>Jones</td></tr>
<tr><td>42</td><td>Laura</td><td>Justin</td><td>Kathleen</td><td>Larry</td><td>King</td></tr>
<tr><td>43</td><td>Lisa</td><td>Kenneth</td><td>Linda</td><td>Lawrence</td><td>Lee</td></tr>
<tr><td>44</td><td>Mary</td><td>Kevin</td><td>Margaret</td><td>Michael</td><td>Lewis</td></tr>
<tr><td>45</td><td>Melissa</td><td>Mark</td><td>Marilyn</td><td>Paul</td><td>Lopez</td></tr>
<tr><td>46</td><td>Michelle</td><td>Matthew</td><td>Martha</td><td>Raymond</td><td>Martin</td></tr>
<tr><td>51</td><td>Misty</td><td>Michael</td><td>Mary</td><td>Richard</td><td>Miller</td></tr>
<tr><td>52</td><td>Nicole</td><td>Paul</td><td>Nancy</td><td>Robert</td><td>Moore</td></tr>
<tr><td>53</td><td>Patricia</td><td>Richard</td><td>Patricia</td><td>Roger</td><td>Robinson</td></tr>
<tr><td>54</td><td>Rebecca</td><td>Robert</td><td>Peggy</td><td>Ronald</td><td>Scott</td></tr>
<tr><td>55</td><td>Sarah</td><td>Ryan</td><td>Phyllis</td><td>Roy</td><td>Smith</td></tr>
<tr><td>56</td><td>Shannon</td><td>Scott</td><td>Ruth</td><td>Stanley</td><td>Taylor</td></tr>
<tr><td>61</td><td>Stacey</td><td>Shawn</td><td>Sally</td><td>Steven</td><td>Walker</td></tr>
<tr><td>62</td><td>Stacy</td><td>Steven</td><td>Sandra</td><td>Terry</td><td>White</td></tr>
<tr><td>63</td><td>Stephanie</td><td>Thomas</td><td>Sharon</td><td>Thomas</td><td>Williams</td></tr>
<tr><td>64</td><td>Tiffany</td><td>Timothy</td><td>Shirley</td><td>Walter</td><td>Wilson</td></tr>
<tr><td>65</td><td>Tina</td><td>Travis</td><td>Susan</td><td>Wayne</td><td>Wright</td></tr>
<tr><td>66</td><td>Wendy</td><td>William</td><td>Virginia</td><td>William, Willie</td><td>Young</td></tr>
</table>`},
      {id: "persoenlichkeit", titel: "Persönlichkeit", s: 100, box: 1, html: `
<p>NSC zeichnen sich durch ihre besonderen Merkmale aus. Besondere NSC haben außerdem eine oder mehrere besondere Eigenschaften mit einem Wert von 2 oder 3. Wenn sie während eines Ärgers Gegner sind, werden diese Werte in relevanten Situationen zu Schwierigkeitsgraden, die das Kind überwinden muss. Wird ein NSC stattdessen zu einem Kontakt oder Freund der Charaktere, kann seine Fähigkeit in einen Gadget-Bonus von +2 oder +3 umgewandelt werden. Ein NSC, der einem Charakter hilft, aber ohne eine relevante besondere Eigenschaft, gibt den normalen Bonus von +1.</p>
<p>Würfle oder wähle selbst einen Charakterzug aus der Tabelle und sieh nach, was er bei besonderen Eigenschaften entspricht. Du kannst die Tabelle auch für Persönlichkeitsbeschreibungen benutzen, die nicht außergewöhnlich sind, sondern dem NSC nur Nuancen geben sollen. Es ist auch in Ordnung, die Eigenschaft in etwas umzubenennen, das besser zum erschaffenen Charakter passt.</p>
<table>
<caption>Persönliche Beschreibung für NSC</caption>
<tr><th>W66</th><th>Besonderes Merkmal</th><th>Besondere Eigenschaft</th></tr>
<tr><td>11</td><td>Gelenkig, Turner, muskulös</td><td>sportlich</td></tr>
<tr><td>12</td><td>Positive Einstellung, mag Kinder, Nerd</td><td>kindlich</td></tr>
<tr><td>13</td><td>Selbstsicher, belesen, begabt</td><td>talentiert</td></tr>
<tr><td>14</td><td>Schön, schmeichlerisch, süß</td><td>umwerfend schön</td></tr>
<tr><td>15</td><td>Bösartig, elitär, kurze Zündschnur</td><td>ungeduldig</td></tr>
<tr><td>16</td><td>Tierarzt, Tierliebhaber, Hundezüchter</td><td>Tierliebhaber</td></tr>
<tr><td>21</td><td>Verzweifelt, treuer Anhänger, Idealist</td><td>fanatisch</td></tr>
<tr><td>22</td><td>Gesellig, straßenschlau, schnell im Denken</td><td>einfallsreich</td></tr>
<tr><td>23</td><td>Jäger, Wettkampfschütze, ruhige Hände</td><td>guter Schütze</td></tr>
<tr><td>24</td><td>Praktisch, Handwerker, Autodidakt</td><td>geschickt</td></tr>
<tr><td>25</td><td>Streng, gut gedrillt, ergebnisorientiert</td><td>harter Anführer</td></tr>
<tr><td>26</td><td>Großes Kontaktnetz, Geschäftsführer, reich</td><td>einflussreich</td></tr>
<tr><td>31</td><td>Unterdrückt Gefühle, abgeschaltet, ungeliebt</td><td>kaltherzig</td></tr>
<tr><td>32</td><td>Inspirierend, fürsorglich, einbeziehend</td><td>charismatisch</td></tr>
<tr><td>33</td><td>Träumer, Künstler, getrieben</td><td>kreativ</td></tr>
<tr><td>34</td><td>Sprachwissenschaftler, Ohr für Sprachen, analytisch</td><td>Linguist</td></tr>
<tr><td>35</td><td>Treu, geliebt, sucht Bestätigung</td><td>loyal</td></tr>
<tr><td>36</td><td>Getrieben, lösungsorientiert, konzentriert</td><td>zielorientiert</td></tr>
<tr><td>41</td><td>Deprimiert, traurig, verbittert</td><td>melancholisch</td></tr>
<tr><td>42</td><td>Impulsiv, aggressiv, schizophren</td><td>durchgedreht</td></tr>
<tr><td>43</td><td>Hasserfüllt, sadistisch, gequält</td><td>boshaft</td></tr>
<tr><td>44</td><td>Falsch, manipulativ, jugendlich</td><td>unschuldige Augen</td></tr>
<tr><td>45</td><td>Wildnisfan, Jäger, Weltuntergangsfanatiker</td><td>Überlebensexperte</td></tr>
<tr><td>46</td><td>Gejagt, zerschunden, verängstigt</td><td>paranoid</td></tr>
<tr><td>51</td><td>Ingenieur, logisch, Problemlöser</td><td>Programmierer</td></tr>
<tr><td>52</td><td>Psychologe, Menschenkenner, Anthropologe</td><td>Psychologie</td></tr>
<tr><td>53</td><td>Furchtlos, innere Stärke, großspurig</td><td>selbstsicher</td></tr>
<tr><td>54</td><td>Zäh, grobschlächtig, missgestaltet</td><td>furchterregend</td></tr>
<tr><td>55</td><td>Spion, getarnt, alltäglich</td><td>geht in der Masse auf</td></tr>
<tr><td>56</td><td>Alkoholiker, widerstandsfähig, groß</td><td>alkoholkrank</td></tr>
<tr><td>61</td><td>Militär, planend, taktisch</td><td>strategisch</td></tr>
<tr><td>62</td><td>Boxer, hohe Schmerzgrenze, abgehärtet</td><td>zäh</td></tr>
<tr><td>63</td><td>Beschützend, besorgt, aufmerksam</td><td>wachsam</td></tr>
<tr><td>64</td><td>Aufbrausend, unter Druck, emotional</td><td>gewalttätig</td></tr>
<tr><td>65</td><td>Politiker, manipulativ, schnell im Denken</td><td>redegewandt</td></tr>
<tr><td>66</td><td>Liebt Klatsch, neugierig, schnüffelnd</td><td>neugierig</td></tr>
</table>`},
      {id: "kreaturen", titel: "Kreaturen", s: 102, box: 1, html: `
<p>In manchen Zusammenhängen stehen die Charaktere Tieren, Maschinen oder anderen außergewöhnlichen Kreaturen gegenüber. Auch diese NSC sollten besondere Eigenschaften mit einem Wert von 2 oder 3 bekommen, die ihre Instinkte, Sinne, ihr Verhalten oder ihre körperlichen Fähigkeiten beschreiben. Hier ist eine Liste von Beispielen, die du ändern oder als Inspiration für neue Schöpfungen nutzen kannst. Du kannst natürlich Eigenschaften hinzufügen oder entfernen, wenn du deine besondere Kreatur anpassen willst. Wähle zum Beispiel, ob ein Monster oder ein Tier die zusätzliche Eigenschaft intelligent 2 oder 3 haben könnte, um es über Instinkt oder Programmierung hinauszuheben.</p>
<table>
<caption>Bemerkenswerte Eigenschaften</caption>
<tr><th>Kreatur</th><th>Besondere Eigenschaften</th></tr>
<tr><td>Nagetier</td><td>diskret 2, wachsam 2, Rudeltier 2</td></tr>
<tr><td>Hase/Fuchs</td><td>flink 3</td></tr>
<tr><td>Raubvogel</td><td>fliegend 3, scharfer Schnabel 2</td></tr>
<tr><td>Jagdhund</td><td>kräftiger Biss 2, flink 2</td></tr>
<tr><td>Wachhund</td><td>gutes Gehör 2, kräftiger Biss 2, loyal 3</td></tr>
<tr><td>Wolf</td><td>Rudeltier 2, kräftiger Biss 2, Geruchssinn 2</td></tr>
<tr><td>Vielfraß/Dachs</td><td>kräftiger Biss 3, zäh 2</td></tr>
<tr><td>Reh/Pferd</td><td>wachsam 2, flink 2</td></tr>
<tr><td>Elch/Hirsch</td><td>groß 2, scharfe Hörner 2</td></tr>
<tr><td>Bär</td><td>groß 2, kräftiger Biss 3, scharfe Klauen 2</td></tr>
<tr><td>Elektronisches Schloss</td><td>komplizierter Mechanismus 2</td></tr>
<tr><td>Alarmanlage</td><td>empfindliche Sensoren 2</td></tr>
<tr><td>Überwachungssystem</td><td>Bewegungsmelder 2</td></tr>
<tr><td>Sicherheitsroboter</td><td>empfindliche Sensoren 2, mit Metall bedeckt 2</td></tr>
<tr><td>Fracht-/Feuerwehrroboter</td><td>kräftige Hydraulik 2, massives Chassis 3, mit Metall bedeckt 3</td></tr>
<tr><td>Überwachungsdrohne</td><td>empfindliche Sensoren 3, fliegend 2</td></tr>
<tr><td>Kleiner Dinosaurier</td><td>flink 2</td></tr>
<tr><td>Velociraptor</td><td>wildes Tier 3, blitzschnell 3</td></tr>
<tr><td>Pterodaktylus</td><td>wildes Tier 2, fliegend 2</td></tr>
<tr><td>Stegosaurus/T-Rex</td><td>wildes Tier 3, zäh 2</td></tr>
<tr><td>Zombie</td><td>untot 2, gutes Gehör 2</td></tr>
<tr><td>Mumie</td><td>untot 3</td></tr>
<tr><td>Geist</td><td>unsichtbar 2, furchterregend 2</td></tr>
<tr><td>Poltergeist</td><td>unsichtbar 3, furchterregend 2, Telekinese 2</td></tr>
<tr><td>Riesige fleischfressende Pflanze</td><td>furchterregend 2, verführerisch 2</td></tr>
<tr><td>Wandernde Giftranken</td><td>furchterregend 2, giftige Tentakel 2, Sporenwolke 2</td></tr>
<tr><td>Pflanzenmensch</td><td>Tentakel 2, geht in der Umgebung auf 2</td></tr>
<tr><td>Tentakelmonster</td><td>furchterregend 3, schleimige Tentakel 3</td></tr>
<tr><td>Riesiger Hundertfüßer</td><td>furchterregend 3, kräftiger Biss 2, massig 2</td></tr>
<tr><td>Werwolf</td><td>furchterregend 2, scharfe Klauen 2, Geruchssinn 3</td></tr>
<tr><td>Kobold/Goblin</td><td>unsichtbar 2, verbittert 2</td></tr>
<tr><td>Geleewesen</td><td>furchterregend 2, unmöglich 2, formbar 3</td></tr>
<tr><td>Portalwesen „OW-1“</td><td>furchterregend 2, übernatürliche Stärke 3</td></tr>
<tr><td>Dimensionswesen „DIM-9“</td><td>furchterregend 2, massig 3, Tentakel 2</td></tr>
</table>`},
      {id: "grenzen", titel: "Keine Grenzen", s: 103, box: 1, html: `
<p>Eine wichtige Regel in der Rollenspielwelt von Tales from the Loop und Things from the Flood ist, dass du als Spielleiter und deine Spielgruppe den Rahmen dafür setzt, was ihr in diesen alternativen 80ern und 90ern erleben wollt. Du entscheidest, welchen Ton, welches Genre und wie gewöhnlich, erstaunlich oder übernatürlich die Mysterien in der Welt des Loops sein sollen.</p>`}
    ]}
  ]
};
