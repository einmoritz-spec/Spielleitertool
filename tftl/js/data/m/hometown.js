/* Heimatstadt-Hack (Our Friends the Machines and Other Mysteries, Kap. 07, S. 98–104) – deutsche Übersetzung des Buchtexts.
   Die Beschriftungen der Karte der Norfolk Broads (S. 102–103) sind nicht übernommen. */
window.MYS = window.MYS || {};
window.MYS.hometown = {
  id: "hometown", name: "Heimatstadt-Hack", bild: "m-hometown", buch: "tftl_a1",
  intro: "Tales from the Loop handelt davon, Mysterien in Kleinstädten oder Gemeinden zu lösen. Die beiden offiziellen Schauplätze des Spiels im Grundregelwerk sind die Mälarinseln in Schweden und Boulder City in Nevada, USA. Der Grund für diese Wahl ist einfach: Simon Stålenhags Kunst zeigt diese beiden Schauplätze. Er wuchs auf den Mälarinseln außerhalb von Stockholm auf, und seine Gemälde von dort spiegeln seine Kindheit und seine Erinnerungen wider. Aber Tales from the Loop ist jetzt dein Spiel, warum also nicht deine Heimatstadt und deine Erinnerungen zum Schauplatz machen? Darum geht es in diesem Kapitel.",
  phasen: [
    {id: "lesen", name: "Lesen", abschnitte: [
      {id: "warum", titel: "Warum die Heimatstadt hacken?", s: 99, html: `
<p>Es gibt viele Gründe, warum man seine eigene Heimatstadt als Schauplatz für Tales from the Loop anpassen sollte. Hier ein paar davon:</p>
<ul>
<li><b>Es macht Spaß!</b> Das Spiel in einer Stadt anzusiedeln, die man kennt, bringt eine ganz neue Dimension an den Tisch.</li>
<li><b>Es hilft den Spielern, sich hineinzuversetzen.</b> Sofern sie tatsächlich eine Beziehung zu deiner Stadt haben, können sie sich die Stadt und ihre Umgebung viel besser vorstellen.</li>
<li><b>Du erlebst deine Vergangenheit noch einmal – mit einer Wendung.</b> Die Heimatstadt der Vergangenheit nachzubilden kann eine nostalgische und manchmal bittersüße Erfahrung sein.</li>
<li><b>Es ist leichter für neue Rollenspieler.</b> Mit einem vertrauten Schauplatz fällt es dir leichter, neue Spieler an das Rollenspiel heranzuführen.</li>
<li><b>Du wirst die Stadt besser kennen.</b> Ganz gleich, ob du deine Heimatstadt nachbildest oder eine von Grund auf neu erschaffst: Schon der Prozess, sie zu formen, hilft dir, sie in- und auswendig zu kennen.</li>
</ul>`},

      {id: "stadt", titel: "Wähle deine Stadt", s: 99, html: `
<p>Zuallererst musst du die Stadt wählen, die der Schauplatz deines Spiels werden soll. Die naheliegendste Lösung ist, einfach die Stadt zu wählen, in der du und deine Freunde aufgewachsen seid. Kommt ihr alle aus derselben Kleinstadt, habt ihr die perfekte Gelegenheit, mit euren gemeinsamen Erinnerungen und Erfahrungen einen interessanten und bespielbaren Schauplatz zu erschaffen. Doch vielleicht kommt ihr aus verschiedenen Teilen des Landes, oder du bist in einer Großstadt aufgewachsen? Keine Sorge, Tales from the Loop ist ein sehr flexibles Spiel. Du kannst ein Spiel in einer Stadt jeder Größe ansiedeln, du musst das Spiel nur auf einen kleineren Teil davon konzentrieren.</p>
<p>Was ist also die perfekte Stadt für ein Tales-Spiel? Hier ein paar Kriterien:</p>
<ul>
<li>Es sollte eine Kleinstadt mit einer Einwohnerzahl in den Tausenden (höchstens in den Zehntausenden) sein.</li>
<li>Sie sollte einige grundlegende Einrichtungen haben, etwa eine Polizeistation, eine Schule, Supermärkte und Orte zum Abhängen.</li>
<li>Sie sollte für Kinder leicht erreichbar sein. Da die meisten Figuren zu Fuß oder mit dem Fahrrad unterwegs sein werden, sollte sie nicht über ein zu großes Gebiet verstreut sein.</li>
<li>Sie sollte eine interessante Umgebung haben, idealerweise mit mehreren verschiedenen Arten: Wälder, Berge, Wüste, Sümpfe oder andere Merkmale.</li>
<li>Sie sollte vorzugsweise ein großes Gewässer in der Nähe haben. Mehrere der vorgefertigten Mysterien haben auf irgendeine Weise mit einem See oder dem Meer zu tun.</li>
<li>Es braucht einen Platz für den Loop und seine Anlagen. Da der Loop einen Durchmesser von 26 Kilometern hat, braucht man eine Stadt mit einer Umgebung, die mindestens so groß ist (er muss auf eine Karte des Schauplatzes passen).</li>
<li>Es sollte eine Stadt sein, zu der du oder deine Spieler eine Beziehung haben.</li>
</ul>
<div class="bsp"><b>Beispiel</b><p>Wir baten unsere Freunde bei Modiphius Entertainment, einen britischen Schauplatz für das Spiel zu erschaffen. Einige von ihnen stammen aus East Anglia, besonders aus Norfolk und Suffolk, und so entschieden sie sich für ein Gebiet, das sie alle gut kannten – die Norfolk Broads. Die nahe gelegene Stadt Great Yarmouth ist klein und hat alle erforderlichen Grundeinrichtungen. Die Stadt und die Nachbardörfer sind durch Buslinien verbunden (eine der am häufigsten genutzten Fortbewegungsarten für Kinder in Großbritannien in den Achtzigern) sowie durch Pfade und Wege, wenn man das Glück hat, ein BMX zu besitzen. Das Gebiet um Great Yarmouth ist von den Broads geprägt – Flüsse und Seen, auf denen man sich meist in einem kleinen Boot fortbewegen kann. Das Land der Broads ist allerdings oft nass und mit Schilf bedeckt, sodass das Gehen etwas schwieriger ist, solange man sich nicht an die Wege hält. Kinder auf Erkundungstour finden vielleicht auch große Ackerflächen sowie Wälder und lange Strände aus Sand und Kieseln.</p></div>`},

      {id: "gebiet", titel: "Definiere das Gebiet", s: 100, html: `
<p>Hast du deine Stadt gewählt, ist der nächste Schritt, die genaue Größe der Stadt und ihrer Umgebung festzulegen. Nimm dazu das Grundregelwerk zur Hand und sieh dir die Karten der Mälarinseln und von Boulder City an. Öffne dann eine Karte deiner gewählten Stadt mit einem Online-Werkzeug wie Google Maps oder Ähnlichem. Zoome hinein und heraus, mach ein paar Screenshots, um den richtigen Ausschnitt als Grundlage für deine Karte zu finden. Vielleicht druckst du die Karte in verschiedenen Größen aus. Verschaffe dir ein Gefühl dafür, füge den Loop und ein paar Anlagen hinzu und sieh nach, wo sie hinpassen. Es gibt keine exakte Wissenschaft dafür, wie deine Karte aussehen sollte. Du musst den Kindern nur genug Raum geben, um durch die Stadt und die Landschaft zu streifen.</p>
<div class="bsp"><b>Beispiel</b><p>Wir sehen uns Google Maps an und entscheiden uns für ein Gebiet von etwa 16 Kilometern Breite. Kleiner als die Karten der Mälarinseln und von Boulder City, aber genug Platz für den Loop und eine Landschaft voller Abenteuer.</p></div>`},

      {id: "karte", titel: "Bereite die Karte vor", s: 100, html: `
<p>Okay, du hast jetzt eine Stadt und das Kartengebiet festgelegt, jetzt ist es Zeit, die eigentliche Karte zu erstellen! Mach einen Screenshot des Gebiets, für das du dich entschieden hast, und importiere ihn dann in einen Bildeditor deiner Wahl, um den letzten Schliff anzubringen. Du kannst auch Dienste wie Snazzymaps oder OpenStreetMap ausprobieren, um deiner Karte etwas mehr Flair zu verleihen. Ein bisschen Recherche im Internet hilft sehr dabei, den Kartenstil zu finden, der zu dir passt.</p>`},

      {id: "loop", titel: "Platziere den Loop", s: 100, html: `
<p>Du hast eine Stadt und eine Karte, der nächste Schritt ist, den eigentlichen Loop an einer geeigneten Stelle zu platzieren. Denk daran, der Loop ist ein riesiger unterirdischer Beschleuniger und braucht viel Platz. Wenn du dir die Loops der Mälarinseln und von Boulder City ansiehst, wirst du feststellen, dass er aus diesen Elementen besteht:</p>
<ul>
<li>Der Reaktorkern in der Mitte des Loops</li>
<li>Der Hauptbeschleunigertunnel (der größte Kreis)</li>
<li>Ein oder zwei Hilfsbeschleunigertunnel</li>
<li>Eine kleine Anzahl von Austrittswegen (Outflux)</li>
<li>Vier Tore, die den Zugang zum Loop ermöglichen</li>
<li>Eine Reihe von Wartungs- und Transporttunneln</li>
</ul>
<p>Die genaue Zusammensetzung dieser Elemente ist nicht wichtig, achte nur darauf, dass sie grob demselben Muster wie die schwedische und die amerikanische Version folgt. Denk daran, dass der Reaktorkern vorzugsweise außerhalb von besiedelten Gebieten liegen sollte, wo der Zugang streng kontrolliert werden kann. Die Beschleunigertunnel können und werden dagegen wahrscheinlich unter der eigentlichen Stadt verlaufen. Das ist gut so. Der Loop ist schließlich ein Generator von Mysterien.</p>
<p>Mit einer Bildbearbeitungssoftware solltest du leicht konzentrische Kreise erstellen und entsprechend beschriften können. Füge dann die anderen Elemente mit Text oder Symbolen hinzu.</p>`},

      {id: "agentur", titel: "Bereite die Agentur vor und platziere sie", s: 101, html: `
<p>Jetzt, da der Loop an seinem Platz ist, müssen wir festlegen, welche Agentur ihn tatsächlich kontrolliert. In Schweden ist es Riksenergi und in den USA DARPA. Verwende eine der beiden oder erschaffe eine eigene, passend für dein Land. Sowohl die schwedische als auch die amerikanische sind realen Regierungsbehörden nachempfunden.</p>
<p>Mit diesen einfachen Schritten erschaffst du eine Agentur für dein Spiel:</p>
<ol>
<li><b>Gib ihr einen Namen.</b> Akronyme sind hier dein Freund. Sieh dir Listen echter Forschungsagenturen oder Filme der Achtziger als Inspiration an.</li>
<li><b>Lege ihre Zuständigkeit und Ressourcen fest.</b> Was ist ihre Aufgabe? Welche Art von Ressourcen und Befugnissen kann sie einsetzen, um diese Aufgabe zu erfüllen?</li>
<li><b>Lege ihren Zweck beim Bau des Loops fest.</b> Welche Art von Experimenten wird dort durchgeführt?</li>
<li><b>Lege die Beziehung zwischen der Agentur, der Stadt und ihren Einwohnern sowie zu anderen örtlichen Behörden wie der Polizei fest.</b></li>
</ol>
<div class="bsp"><b>Beispiel</b>
<p>Bei der Frage, wer den Broads-Loop kontrolliert, wollten wir zwei Dinge aus dem Großbritannien der Achtziger verbinden – Regierungsministerien sowie einen Verweis auf eine der bekanntesten Fernsehsendungen der Zeit. Wir entschieden also, dass der Loop, soweit es die Öffentlichkeit weiß, ein Regierungszentrum ist, das Agrarforschung und Umweltfragen untersucht. Diese öffentlich sichtbare Seite des Loops fällt in den Zuständigkeitsbereich des MAFF – des Ministry of Agriculture, Fisheries and Food (Ministerium für Landwirtschaft, Fischerei und Ernährung).</p>
<p>Die eigentliche Arbeit im Loop wird jedoch von einer geheimen Abteilung des Verteidigungsministeriums namens ReGIS (REgional Geomagnetic Information Sciences) durchgeführt. Die dortige Forschung beschäftigt sich mit einer Kombination aus dem natürlichen Wasser des Gebiets und Magnetismus, ist aber außerhalb der Leiter der Anlage ansonsten nicht vollständig verstanden. Hartnäckig halten sich Gerüchte, in wassergefüllten Höhlen unter dem Gebiet seien seltsame Naturphänomene entdeckt worden.</p>
<p>Der Broads-Reaktor ist als Lieferant überraschend sauberer Energie bekannt (ein willkommenes Gegengewicht zum Atomkraftwerk Sizewell im nahen Suffolk). Der Broads-Reaktor erzeugt jedoch eine geringere Energiemenge, sodass er weiterhin hauptsächlich als Nischenthema gilt. Neben der Energieerzeugung beschäftigt sich der öffentlich sichtbare Teil der Anlage mit Umweltfragen in der Gegend.</p>
<p>Hinter den Kulissen umfassen die Experimente Ionisierung und Magnetismus für viele Zwecke. Tests werden oft auf den Broads oder sogar draußen über der Nordsee durchgeführt – wobei seltsame Lichter als Wetterüberwachungsgeräte des MAFF oder als harmloses Nebenprodukt der sauberen Energieerzeugung des Reaktors erklärt werden. Die sumpfigen Fens der Broads verbergen viele seltsame Maschinen und Fahrzeuge, die bei den Tests verloren gingen, und ebenso seltsame Vorkommnisse wie Lichter und Nebel, weshalb viele glauben, Teile des Gebiets seien verwunschen. Die Mehrheit der Stadtbewohner empfindet den Reaktor als Schandfleck – und als wäre das nicht genug, ist die nächste geplante Erweiterung der Anlage ein Windpark draußen in der Nordsee. Trotz der Nicht-in-meinem-Garten-Haltung der meisten erwachsenen Einwohner können sie die Vorteile nicht bestreiten, darunter Energie und Arbeitsplätze zu einer Zeit, in der die Schließung von Kohlebergwerken in anderen Teilen Großbritanniens zu großer Arbeitslosigkeit führt. Die Kinder der Gegend finden den Reaktor jedoch auf eine Weise aufregend, wie es die Strände und die Sommertouristen nie sein werden.</p></div>`},

      {id: "institutionen", titel: "Platziere Schulen, Polizei und andere Einrichtungen", s: 104, html: `
<p>Jede Stadt in Tales from the Loop ist ein Mikrokosmos der Gesellschaft, und deine Stadt sollte das auch sein. In diesem Schritt platzierst du einfach die folgenden Elemente auf der Karte. Du musst nicht alle verwenden, entscheide nach eigenem Ermessen, was in deiner Stadt vernünftigerweise zu finden ist.</p>
<ul>
<li>Eine oder mehrere Grundschulen</li>
<li>Eine oder mehrere weiterführende Schulen</li>
<li>Eine Polizeistation</li>
<li>Eine Feuerwache</li>
<li>Ein Militärstützpunkt</li>
<li>Ein Krankenhaus</li>
</ul>
<div class="bsp"><b>Beispiel</b>
<p>Für den Schauplatz der Broads entscheiden wir uns für diese Einrichtungen:</p>
<ul>
<li>Grove Hill – Gesamtschule</li>
<li>Cycle Grove – Grundschule</li>
<li>Sun Road Station – Polizeistation</li>
<li>Feuerwache</li>
<li>Militärstützpunkt</li>
<li>Krankenhaus</li>
<li>Acle Straight (die lange, gerade Straße von Acle in Richtung Great Yarmouth – bekannt als hervorragender Ort für BMX-Rennen)</li>
</ul></div>`},

      {id: "zusammenfassung", titel: "Verfasse eine kurze Zusammenfassung", s: 104, html: `
<p>Du hast es fast geschafft! Jetzt, da du das Gelände kennst, ist es Zeit, einen kurzen Überblick über die Stadt aufzuschreiben. Nimm die Schauplatztexte im Grundregelwerk als Inspiration, oder schreibe einfach eine Zusammenfassung in Stichpunkten:</p>
<ul>
<li>Wie ist die Geschichte der Stadt?</li>
<li>Wie ist es, in der Stadt zu leben?</li>
<li>Welche sind die häufigsten Treffpunkte?</li>
<li>Welche sind die bedeutendsten Gebäude?</li>
<li>Wie kommen die Kinder in der Gegend herum? Welche Verkehrsmittel gibt es?</li>
<li>Wie ist das Verhältnis zwischen den Stadtbewohnern und der Loop-Agentur?</li>
<li>Was machen die Kinder in dieser Stadt, um sich die Zeit zu vertreiben?</li>
</ul>`},

      {id: "abschluss", titel: "Zum Abschluss", s: 104, html: `
<p>Du hast deine Stadt erschaffen. Die Bühne ist bereitet und wartet darauf, mit Träumen und Erinnerungen gefüllt zu werden. Jetzt ist es Zeit, sie mit Mysterien zu füllen und deine Spieler mit ihr bekannt zu machen. Vielleicht möchtest du vor der ersten Sitzung ein vorbereitetes Dokument an deine Spieler schicken, oder du nimmst dir am Tisch etwas Zeit, um alle mit der Stadt vertraut zu machen, die ihr gemeinsam erkunden und erleben werdet.</p>`}
    ]}
  ]
};
