/* Maschinen-Baupläne (Our Friends the Machines and Other Mysteries, Kap. 06, S. 88–97) – deutsche Übersetzung des Buchtexts.
   Die Maßangaben der Grafiken stehen als Datenliste vor dem jeweiligen Text. */
window.MYS = window.MYS || {};
window.MYS.blueprints = {
  id: "blueprints", name: "Maschinen-Baupläne", bild: "m-blueprints", buch: "tftl_a1",
  intro: "Die Maschinen sind Teil unseres Alltags. Sie arbeiten stets im Hintergrund und machen unser Leben bequem. Fernseher, Telefon und Computer haben das moderne Leben spürbar revolutioniert. Doch es ist leicht zu vergessen, dass die Gesellschaft auch von Neuerungen wie der selbstbalancierenden Maschine (auch Roboter genannt) und der Magnetrin-Technologie abhängig ist. Ohne diese fantastischen Maschinen wären wir alle ärmer.",
  phasen: [
    {id: "lesen", name: "Lesen", abschnitte: [
      {id: "ueberblick", titel: "Maschinen-Baupläne", s: 89, html: `
<p>In diesem Kapitel lernen wir vier ikonische Maschinen kennen, die von Regierungsbehörden, Unternehmen und Organisationen auf der ganzen Welt eingesetzt werden. Diese Maschinen können verwendet werden, um bestehende Mysterien zu würzen oder um ganze Mysterien darauf aufzubauen.</p>
<ul>
<li><b>ALTA ABM100:</b> Die sogenannten „Feuerwächter“ von Alta wurden von Riksenergi in Auftrag gegeben, um das Gebiet rund um den Loop zu überwachen. Die ABM100 sind dafür bekannt, das Gebiet eifrig nach Bränden abzusuchen, aber auch dafür, dass ihre leistungsstarken Sensoren von Jugendlichen aus der Gegend oft mit raffinierten Streichen getäuscht werden.</li>
<li><b>PAARHUFER MK 79:</b> Ein beliebter Wartungs- und Serviceroboter, den Riksenergi und andere Organisationen oft einsetzen. Der MK 79 ist für seine Zuverlässigkeit und robuste Bauweise bekannt. Er kann selbstständig arbeiten und einfache programmierte Aufgaben ausführen. Für anspruchsvollere Einsätze wird er mit einem Fernsteuerhandschuh gesteuert.</li>
<li><b>LIEBER-ALTA M75 LOKOMOTIVSCHIFF:</b> Eines der häufigsten Fahrzeuge in der Gegend um den Loop ist das klassische Arbeitspferd M75 von Lieber Alta. Dieses Magnetrinschiff wird meist für den Transport von Rohstoffen und Industriemaschinen verwendet, wird aber manchmal für Personentransport und Schleppdienste ausgerüstet.</li>
<li><b>MG/S AURORA BOREALIS:</b> Ein schönes Beispiel für ein größeres Magnetrinschiff ist der Massengutfrachter Aurora Borealis. Mit seinem 172 Meter langen Rumpf zieht er überall Aufmerksamkeit auf sich, wo er anlegt. Die Aurora Borealis ist eines von vielen Magnetrin-Frachtschiffen, die den Frachtverkehr zu abgelegenen Orten wie Nowosibirsk revolutioniert haben.</li>
</ul>`},

      {id: "abm100", titel: "ALTA ABM100 – Autonome Feuerlöschmaschine", s: 90, box: 1, html: `
<p><b>Technische Daten</b></p>
<ul>
<li>Hersteller: ALTA Robotteknik AB, Västerås, Schweden</li>
<li>Höhe: 72 Fuß (21,5 Meter)</li>
<li>Gewicht: 94 Tonnen (voll beladen)</li>
<li>Antriebe: 4x ALTA A120 + 3x ALTA AX230 elektrohydraulische Motoren</li>
<li>Geschwindigkeit: 12,5 mph (20 km/h) (Patrouille), 34 mph (55 km/h) (Sprint)</li>
<li>Laufzeit: 36 Stunden (Patrouille)</li>
<li>Steuereinheit: ALTA Computech AC2000 Computereinheit</li>
</ul>
<p>Zwei ABM100 wurden von ALTA im Auftrag von Riksenergi gebaut und im Herbst 1984 fertiggestellt. Sie wurden zunächst aus der Öffentlichkeit unbekannten Gründen am Rand von {{Kungsberga|Boulder City}}, hauptsächlich auf den Feldern von Jäsängen, eingesetzt. Bald stellte sich heraus, dass sie die Brände bekämpften, die in der Gegend manchmal spontan entstanden, ohne dass jemand wusste, warum. Es dauerte nicht lange, bis die Jugendlichen der Nachbarschaft erkannten, dass sie die Roboter mit Feuer necken konnten. Ihr liebster Trick war es, mit dem Auto an ihnen vorbeizufahren und dabei eine Signalfackel zu schwenken, um sie zu verlocken, dem Auto hinterherzujagen. Dann ging es nur noch darum, dem Wasserstrahl auszuweichen. Riksenergi hatte das bald satt, und im Frühjahr 1985 wurden die Roboter in das Gebiet um den Reaktor Bona auf Munsö verlegt. Der Zusatz einer übel riechenden Flüssigkeit im Löschwasser setzte dem Necken der Roboter ein endgültiges Ende. Vor Ort sind sie als „Die Feuerwächter“ bekannt.</p>
<p>Riksenergi bestellte eine Serie von sechs ABM, die äußerlich fast nicht vom ABM100 zu unterscheiden waren, aber über verbesserte Sensorik verfügten und die Modellbezeichnung ABM110 erhielten. DART in Boulder City, USA, interessierte sich für den Roboter und bestellte im Rahmen eines Technologieaustauschs ein Paar. Diese wurden im Herbst 1985 eingeführt und sind meist auf der Strecke des Teilchenbeschleunigers auf Patrouille zu sehen, ohne jedoch bebaute Gebiete zu betreten. Dort kann man beobachten, wie sie Brände löschen, die ohne erkennbare Ursache entstehen können, auch außerhalb der heißen Sommermonate (Mai bis September).</p>
<p>Der ABM100 und seine Nachfolger sind unbemannt und völlig autonom. Im „Kopf“ gibt es ein kleines Cockpit für die manuelle Steuerung bei der Wartung des Roboters, das jedoch nur mit einem Korblift erreichbar ist. Stattdessen wird der Roboter von einem selbstlernenden ALTA-Computech-Computer gesteuert. Er ist so programmiert, dass er sich Gelände und Hindernisse wie Gebäude und Stromleitungen merkt. Die Sensorausrüstung besteht aus Fernsehkameras, Wärmebildkameras, Laser-Entfernungsmessern und Mikrofonen. Die Instrumente können ein Feuer von der Größe eines Lagerfeuers bis zu 1.100 Yards (1.000 Meter) weit erkennen. Die Roboter sind gegen alles außer den stärksten Gödel-Pulsen abgeschirmt. Falls der Roboter eine Fehlfunktion hat, gibt es einen ferngesteuerten Sicherheitsschalter.</p>
<p>Die Hauptaufgabe der Roboter ist die Bekämpfung kleiner und mittelgroßer Brände. Dazu trägt jeder Roboter 6.700 US-Gallonen (25 Kubikmeter) Wasser sowie dieselbe Menge Löschschaum für Treibstoff- und Elektrobrände. Der Roboter kann sein Wasserreservoir selbst auffüllen, indem er einen Schlauch in eine geeignete Wasserquelle senkt. Seine Sensorausrüstung und seine Höhe machen ihn auch zu einem hervorragenden Überwachungsroboter, und der ABM110 ist mit einer Vernetzungseinheit ausgestattet, die es ihm ermöglicht, bis zu acht kleinere ALTA-SASU110-Wachroboter zu steuern. Zusammen bildet ein solcher Überwachungstrupp eine anspruchsvolle Wacheinheit.</p>
<p>Die ABM100-Serie ist außerhalb der Mälarinseln und von Boulder City noch ein seltener Anblick, aber ALTA ist zuversichtlich, dass ihr Produkt einen größeren internationalen Markt ansprechen wird. Eine Exportversion wird im April 1987 auf der Internationalen Industriemesse in Hannover, Westdeutschland, vorgestellt.</p>
<p><b>Vorgeschlagene Mysterien</b></p>
<ul>
<li>Was verursacht die Brände, die die „Feuerwächter“ bekämpfen?</li>
<li>Einige ältere Jugendliche planen, einen Roboter dazu zu bringen, am Samstagabend die Schule zu verwüsten. Wie halten die Figuren sie auf?</li>
<li>Die Figuren kommen einem Sperrgebiet zu nahe. Ein Roboter entdeckt sie. Ein Katz-und-Maus-Spiel beginnt. Warum bemerkt kein Erwachsener, dass der Roboter sie jagt? Um die Dinge zu verkomplizieren, nähern sich aus der anderen Richtung ein paar seltsame Tiere ...</li>
</ul>`},

      {id: "mk79", titel: "PAARHUFER MK 79 – Teilautonome Serviceeinheit", s: 92, box: 1, html: `
<p><b>Technische Daten</b></p>
<ul>
<li>Hersteller: Paarhufer Industrie GmbH, Düsseldorf, Westdeutschland</li>
<li>Höhe: 20,5 Fuß (6,2 Meter)</li>
<li>Gewicht: 5 Tonnen</li>
<li>Antriebe: 4 Ziegler-Strohm 552-X Elektromotoren + benzinbetriebener Notantrieb</li>
<li>Geschwindigkeit: 7,5 mph (12 km/h) (Patrouille), 22 mph (35 km/h) (Sprint)</li>
<li>Laufzeit: 6 Stunden (Patrouille)</li>
<li>Hebekapazität Greifklaue: max. 1.750 lbs (800 kg)</li>
<li>Steuereinheit: Fernsteuerhandschuh, Reichweite 550 Yards (500 Meter). Gewicht von Rucksackeinheit + Fernsteuerhandschuh: 15,5 lbs (7 kg)</li>
</ul>
<p>Der PAARHUFER MK 79 ist ein Wartungsroboter, der einfachere Routineaufgaben selbstständig erledigen kann, aber auch von einem Bediener mit einer Fernsteuereinheit („Fernsteuerhandschuh“) benutzt werden kann. Seit seiner Einführung 1982 ist dieses Modell in der Loop-Gegend und im Rest der industrialisierten Welt weit verbreitet und wird zum Beispiel auf Baustellen und in der Forstwirtschaft eingesetzt. Zum Fortbewegen braucht er relativ ebenen Boden, ist aber in den meisten Umgebungen robust und ausdauernd. Er ist in einer zivilen und einer militärischen Version erhältlich, aber Letztere wird von der schwedischen Armee nicht eingesetzt.</p>
<p>Der Roboter ist ideal für Arbeiten in radioaktiv oder chemisch verseuchten Umgebungen, und die Elektronik ist gegen alles außer den stärksten Gödel-Pulsen abgeschirmt. Er ist so programmiert, dass er eine Ladestation sucht, wenn die Batterieladung unter 10 % fällt, aber wenn er vorher stehen bleibt, kann ein Bediener manuell einen Notantrieb starten, damit der Roboter die nächste Ladestation erreichen kann.</p>
<p>Der Fernsteuerhandschuh hat eine Sendereichweite von 550 Yards (500 Metern), aber aus praktischen Gründen hält sich der Bediener selten weiter als 110 Yards (100 Meter) entfernt auf, um zu sehen, was er tut. Die Sensoreinheiten bestehen aus Fernseh- und Wärmebildkameras, und die Programmierung erlaubt es dem Roboter, zu erkennen, ob sich eine Person in der Gefahrenzone befindet. Um Personenschäden zu vermeiden, wird der Roboter angehalten, wenn sich jemand innerhalb von 10 Fuß (3 Metern) in einem 30-Grad-Sektor vor ihm befindet, aber wenn der Fernsteuerhandschuh benutzt wird, ist die Sicherheitsfunktion abgeschaltet. Ein Sensor im Rücken kann Hindernisse erkennen, ist aber schlecht darin, Menschen zu erkennen. Ein Paar nach vorn gerichtete Scheinwerfer wird für Arbeiten in der Dunkelheit und bei schlechten Lichtverhältnissen eingesetzt.</p>
<p>Das Hauptwerkzeug ist eine Klaue für schwere Hebearbeiten, die aber zum Beispiel durch einen Fäll- und Entastungsaufsatz für die Waldernte ersetzt werden kann. Eine neuere Version, der Mk 81, wurde 1984 eingeführt und hat zwei Roboterarme für verbesserte Manipulationsfähigkeit und deshalb zwei an die Steuereinheit angeschlossene Fernsteuerhandschuhe. Diese Version ist mit einer Kamera ausgestattet und kann aus einer Leitstelle bis zu 3 Meilen (5 Kilometer) entfernt ferngesteuert werden.</p>
<p>Der Paarhufer Mk 79 ist eine erfolgreiche Konstruktion, und es wird erwartet, dass er noch viele Jahre im Einsatz sein wird. Neue Versionen sind geplant, aber wirtschaftlich vorteilhafte Upgrade-Pakete können auch die Einsatzdauer älterer Roboter verlängern.</p>
<p><b>Vorgeschlagene Mysterien</b></p>
<ul>
<li>Es ist Freitag, und die Schule ist für das Wochenende aus. Die Figuren finden einen Serviceroboter. In einem unverschlossenen Schuppen daneben liegt die Fernsteuereinheit. Der Roboter ist leer und muss an die nahe gelegene Ladesäule angeschlossen werden. Wird jemand den Roboter vor Montag vermissen?</li>
<li>Ein Paarhufer läuft in der Stadt Amok. Er zertrümmert Autos, und die Leute fliehen in Panik. Jemand muss irgendwo stehen und den Roboter mit einem Fernsteuerhandschuh steuern. Wer tut es, und warum?</li>
<li>Die Figuren sind draußen im Wald, als sie auf einen rauchenden Serviceroboter stoßen. In seiner Klaue ist eine große Metallkiste mit Warntext. Von einem Bediener fehlt jede Spur. Wenn man eine Weile daran arbeitet, lässt sich die Kiste aus dem Griff der Klaue lösen. Was mag sie enthalten?</li>
</ul>`},

      {id: "m75", titel: "LIEBER-ALTA M75 – Lokomotivschiff", s: 94, box: 1, html: `
<p><b>Technische Daten</b></p>
<ul>
<li>Hersteller: Lieber-ALTA Magnetrinindustri AB, Kalmar, Schweden</li>
<li>Länge: 15,9 Meter</li>
<li>Höhe: 6,5 Meter</li>
<li>Gewicht: 65 Tonnen</li>
<li>Antrieb: Sulzer-T44-Dieselturbinenmotor</li>
<li>Geschwindigkeit (ohne Last): 85 km/h (53 mph)</li>
<li>Beschleunigung: 0–85 km/h in 55 Sekunden</li>
<li>Bremsweg: etwa 150 m (165 Yards) bei 85 km/h</li>
<li>Ladekapazität: max. 15 Tonnen</li>
<li>Besatzung: 2</li>
<li>Beschriftung der Grafik: Zugvorrichtung und Windenausrüstung, Cockpit, Laderaumluke, Lichtrampe (Reichweite 280 Meter), Radar</li>
</ul>
<p>Das Lokomotivschiff M75 von Lieber-ALTA ist typisch für seine Klasse und ein häufiger Anblick in Häfen für Magnetrinschiffe und in Industriegebieten. Lokomotivschiffe wurden 1960–61 in der Sowjetunion, in Westdeutschland und in Schweden eingeführt und sind zu einem unverzichtbaren Bestandteil der Magnetrin-Fahrzeugflotte geworden. Sie erfüllen mehrere Funktionen, etwa das Schleppen von Magnetrin-Lastkähnen, leichten Transport, Personenbeförderung und den Einsatz als Schlepper. Lieber-ALTA ist ein internationaler Industriekonzern mit Produktionsstätten in Westdeutschland, der Schweiz und Schweden und Händlern auf der ganzen Welt. Ein US-Montagewerk befindet sich in Baltimore, Maryland.</p>
<p>Wie die meisten Lokomotivschiffe hat der M75 eine ferngesteuerte Leiter zum Besteigen des Fahrzeugs. Sie ist normalerweise im Heck des Schiffes eingefahren und wird durch ein Signal einer Fernbedienung ausgefahren, die mit dem Zündschlüssel gekoppelt ist. Gleichzeitig öffnet sich eine Einstiegsluke, die den Zugang zu einem Raum mit einer Leiter zur Brücke sowie einer Tür zum Maschinenraum und zum gemeinsamen Laderaum ermöglicht. Zum Beladen hat das Frachtschiff einen Hebekran, der während der Fahrt im Rumpf versenkt ist. Normalerweise hat das Lokomotivschiff am Heck auch eine Kupplung zum Anschluss an Magnetrin-Lastkähne und Schleppseile. Ein geparktes Schiff befindet sich normalerweise 2–5 Meter (7–17 Fuß) über dem Boden.</p>
<p>Die Sinterscheiben des Lokomotivschiffs werden von einem Generator angetrieben, der wiederum von einem Dieselmotor angetrieben wird. Ein Lokomotivschiff hat normalerweise etwa zwanzig Scheiben, die von einer mit Magnetfeldsensoren verbundenen Zentraleinheit gesteuert werden. Durch das Auslesen des lokalen Magnetfelds neigen sich die Scheiben für maximalen Auftrieb und maximale Fahrfähigkeit. Um das Schiff anzutreiben, werden die Scheiben in einer bestimmten Reihenfolge aktiviert, mit schnellen Polaritätswechseln, die einen Zieh-/Schiebeeffekt erzeugen, der die Vorwärtsbewegung bewirkt. Der Abgasstrom der Dieselturbine wird durch ein Turboaggregat verstärkt und für Kurskorrekturen verwendet, und bei einigen Lokomotivschiffen und größeren Magnetrinschiffen gibt es auch Ruder, die zur Steuerung des Abgasstroms und damit zur Lenkung des Schiffes dienen.</p>
<p>Wie ihre größeren Gegenstücke sind alle Lokomotivschiffe mit UKW-Funk zur Kommunikation ausgestattet. Neben den Magnetfeldsensoren haben sie auch Radar, und eine Fernsehkamera im Bug erleichtert das Manövrieren in schwierigen Situationen. Lokomotivschiffe auf längeren Strecken sind mit einem Funkpeiler und einem Autopiloten ausgerüstet, da die Schifffahrtswege Funkfeuer haben, die zur Navigation und als Kontrollpunkte bei eingeschaltetem Autopiloten dienen. Die Lokomotivschiffe, die in der Nähe des Loops arbeiten, sind gegen Gödel-Pulse leichter bis mittlerer Stärke abgeschirmt.</p>
<p>Der M75 folgt bei Konstruktion und Aufbau dem allgemeinen Trend. Die Brücke beherbergt Steuerungs-, Navigations- und Kommunikationsausrüstung. Eine kleine Kajüte mit ein paar Etagenbetten bietet Übernachtungsmöglichkeiten. Eine Kochnische steht für leichtes Kochen zur Verfügung, und eine Freifall-Toilette (ein Sitz mit einem Loch zum Boden darunter) erledigt den Rest der Bedürfnisse der Besatzung. Der Maschinenraum enthält die Dieselturbine und den Generator, mit dem Treibstofftank mittschiffs. Der Laderaum hat ein Volumen, das einem halb beladenen Container entspricht (25 Kubikmeter bzw. 880 Kubikfuß) und kann durch die Montage einfacher Sitze auf Personentransport umgestellt werden.</p>
<p>Das Lokomotivschiff M75 von Lieber-ALTA ist eine zuverlässige Konstruktion und ein Arbeitspferd, das wir noch viele Jahre sehen werden.</p>
<p><b>Vorgeschlagene Mysterien</b></p>
<ul>
<li>Es ist nach der Schule, vielleicht sogar in den Sommerferien. Die Figuren streifen durch die Landschaft auf der Suche nach etwas Interessantem, als sie ein scheinbar verlassenes Lokomotivschiff finden. Es ist unbeaufsichtigt und unverschlossen, die Leiter ist ausgefahren und der Motor ausgeschaltet. Gehen die Figuren an Bord, finden sie auf der Brücke zwei Kaffeetassen. Der Kaffee ist noch heiß. Es gibt keine Anzeichen eines Kampfes. Was ist geschehen?</li>
<li>Während die Figuren das Schiff untersuchen, taucht plötzlich draußen ein Überwachungsroboter auf. Werden sie sich im Schiff verstecken und es vielleicht starten, um zu entkommen?</li>
<li>Von der Brücke aus können die Figuren hundert Yards entfernt eine perfekt kreisrunde Grube sehen, als hätte ein Riese die Erde und das Gras ausgeschaufelt. Die Spuren zweier Personen führen zur Grube und enden dort abrupt.</li>
<li>Ein Schuh wird in kurzer Entfernung vom Schiff gefunden, und auf dem Boden ist frisches Blut zu sehen. Die Spuren eines oder mehrerer großer Tiere führen zu einem kleinen Waldstück.</li>
<li>Auf der Brücke liegt eine Abendzeitung. Ihr Datum liegt eine Woche nach dem heutigen Datum, und auf der Titelseite steht eine große Schlagzeile über einen schweren Unfall im Loop. Wie ist sie hierhergekommen? Wie ist das ganze Lokomotivschiff in der Zeit zurückgekehrt? Lässt sich der Unfall verhindern?</li>
</ul>`},

      {id: "sierra-nevada", titel: "MG/S Sierra Nevada – Magnetrin-Frachtschiff", s: 96, box: 1, html: `
<p><b>Technische Daten</b></p>
<ul>
<li>Betreiber: Southern Magnetrine Shipping, Inc.</li>
<li>Typ: Magnetrin-Frachtschiff</li>
<li>Klasse: Magmid</li>
<li>Werft: Harris &amp; Logan Magnetrine Shipyards, San Diego, Kalifornien, USA</li>
<li>Gesamtlänge: 172 Meter</li>
<li>Breite: 32 Meter</li>
<li>Höhe: 81 Meter</li>
<li>Tonnage: 25.000 Tonnen Tragfähigkeit</li>
<li>Antrieb: 2 Pantarei-568-Dieselturbinenmotoren, 2 Stahlhagen-G-38/U-Gasturbinenmotoren</li>
<li>Geschwindigkeit: 26 Knoten (48 km/h)</li>
<li>Besatzung: 26</li>
<li>Beschriftung der Grafik (Brücke): Kapitän, Radarbediener, Erster Offizier, Funker, Navigator, Zweiter Offizier</li>
</ul>
<p>Die MG/S SIERRA NEVADA ist das erste Schiff ihrer Klasse, das von Harris &amp; Logan Magnetrine Shipyards gebaut wurde. Ihr sind zwölf Schwesterschiffe gefolgt, die meist auf der Trans-Am-Schifffahrtsroute von Los Angeles nach Boston fahren. Die Nevada verbindet Ladekapazität mit Zuverlässigkeit und Wirtschaftlichkeit im Betrieb. Einige der Schiffe sind Massengutfrachter (Eisenerz, Kohle, Holz usw.), andere sind für Frachtcontainer oder Autotransporte ausgelegt.</p>
<p>Die zwölf massiven Sinterscheiben werden von sechs Generatoren angetrieben, die wiederum von den Dieselmotoren angetrieben werden. Ein weiteres Dutzend kleinerer Scheiben dient der Anpassung der Hubkraft. Alle Scheiben werden über zwei Zentraleinheiten gesteuert, die mit einer Reihe von Magnetfeldsensoren verbunden sind. Das lokale Magnetfeld wird ständig von den Sensoren gemessen, und Servomotoren stellen die Scheiben für optimalen Auftrieb und optimale Fahrfähigkeit an. Um das Schiff anzutreiben, werden die Scheiben nacheinander aktiviert, mit schnellen Polaritätswechseln, die einen Zieh-/Schiebeeffekt erzeugen, der wiederum die Vorwärtsbewegung bewirkt. Ein Paar Gasturbinenmotoren trägt durch Strahlabgas zum Vortrieb bei. Das Abgas der Gasturbinen wird außerdem in Verbindung mit einem Paar Ruder zur Steuerung verwendet.</p>
<p>Die Brücke ist das Nervenzentrum des Schiffes. Hier arbeiten der Kapitän, der Erste Offizier, der Zweite Offizier, der Signalmann, der Navigationsoffizier und der Sensorbediener. Steuerungen, Radar- und Sensorbildschirme und Kommunikationsausrüstung bedecken alle Flächen. Magnetrinschiffe sind mit Funkpeilern und Autopilot ausgestattet, da die Schifffahrtswege Funkfeuer haben, die zur Navigation und bei eingeschaltetem Autopiloten verwendet werden. In der Kombüse arbeitet der Schiffskoch mit Hilfe eines Assistenten. Neben der Kombüse befinden sich ein Kühlraum und Vorratskammern für Essen und Getränke. Die Messe ist geteilt, ein Teil für die Schiffsoffiziere und einer für den Rest der Besatzung. Ein Bootsmann und sieben Matrosen bilden die Deckmannschaft. Der Kapitän und die anderen höheren Offiziere haben ihre Kabinen auf demselben Deck wie die Brücke, während die übrige Besatzung in Kabinen auf dem Deck darunter wohnt. Ein paar Kabinen stehen für zusätzliche Besatzung und Passagiere zur Verfügung. Ein Gemeinschaftsraum mit Fernseher, Bücherregal, Billardtisch und Kaffeemaschine steht für dienstfreie Besatzungsmitglieder zur Verfügung. Toiletten und Duschräume vervollständigen die Mannschaftsquartiere.</p>
<p>Im Maschinenraum arbeiten der Technische Chef, der Erste Ingenieur, der Magnetrin-Ingenieur, ein Paar Zweite Ingenieure, vier Motorenmänner und der Schiffselektriker. Neben dem Maschinenraum befinden sich eine Werkstatt, eine Stromzentrale und Treibstofftanks. Die Laderäume sind je nach vorgesehener Ladung konfiguriert. Die Sierra Nevada ist für Frachtcontainer ausgelegt, die durch Ladetüren in den Seiten des Schiffes, eine Bugrampe oder Ladeluken an der Unterseite an Bord genommen werden können. Kräne und Traversen heben und verteilen die Container in den Laderäumen, die ein Volumen von etwa 1,77 Millionen Kubikfuß (50.000 Kubikmetern) haben und bis zu tausend 20-Fuß-Frachtcontainer aufnehmen können.</p>
<p>Das Deck des Schiffes hat einen Hubschrauberlandeplatz. Zum Besteigen können Türen direkt unterhalb der Brücke benutzt werden, wenn das Schiff im Hafen liegt und mit Landungsstegen mit dem Ufer verbunden ist, oder Frachtaufzüge, die durch Öffnungen im Boden des Besatzungsmoduls führen. Ist das Schiff akuter Gefahr ausgesetzt, etwa durch ein Feuer, das nicht gelöscht werden kann, kann die Besatzung mit Fallschirm-Rettungskapseln evakuiert werden, die bei einer Landung im Wasser auch als Rettungsboote dienen.</p>
<p>Magnetrinschiffe wie die Mg/S Sierra Nevada sind ein häufiger Anblick entlang der Schifffahrtswege, die die Häfen der Nordhalbkugel verbinden. Ihre Bedeutung für den internationalen Handel wird in Zukunft nur noch zunehmen, und die Automatisierung wird zu größeren Schiffen führen, die von einer Handvoll Besatzungsmitglieder überwacht werden können. Die Magnetrinschiffe sind gekommen, um zu bleiben.</p>
<p><b>Vorgeschlagenes Mysterium</b></p>
<p>Die Eltern einer der Figuren fahren nach Las Vegas und sind erst um Mitternacht zurück. Die Figur soll auf ein jüngeres Geschwisterkind aufpassen. Die Figur hat ihre Freunde zum Spielen eingeladen, und ehe man sich versieht, ist das Geschwisterkind verschwunden. Spuren führen zu einer Echokugel, die seit einigen Wochen in einem kleinen Wäldchen hinter dem Haus still vor sich hin rostet. Das Problem: Man kann sehen, wie die Kugel auf ein Fahrzeug geladen wird, das zum Hafen und zu einem wartenden Magnetrinschiff fährt. Schaffen es die Figuren, das Gelände zu betreten, sich an Bord des Schiffes zu schleichen und die Kugel mit dem Geschwisterkind zu finden, bevor das Schiff den Hafen verlässt, und gelingt ihnen das, bevor die Eltern nach Hause kommen?</p>`}
    ]}
  ]
};
