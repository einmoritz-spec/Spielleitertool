/* Pico – Regeln Kap. 4 (Montagen) und Kap. 5 (Reisen): deutsche Fassung (Buch S. 68–97) */
window.PI_NACH = window.PI_NACH || {};
PI_NACH.regeln = PI_NACH.regeln || {t:"Regeln", c:"#593582", kapitel:[]};
var _wurf = function(c){ return {t:"tbl", head:["Wurf","Ergebnis"], rows:[["6","Triumph"],["5–4","Konflikt"],["3–2–1","Desaster"],["Pasch","Wendung"]]}; };
PI_NACH.regeln.kapitel.push(

{id:"montagen-zeit", t:"Montagen: Sich Zeit nehmen", p:69, b:[
 "Eine Montage ist eine besondere Art von Szene: ein langer Zeitraum, zusammengedrängt auf einen einzigen Moment im Rampenlicht für jeden Käfer. So überspringt man die langweiligen (aber nötigen) Teile und kommt direkt zurück zu Szenen und Reisen.",
 "Du könntest eine Montage nehmen …",
 {t:"ul", x:[
  "Bevor ihr zu einer langen Reise aufbrecht",
  "Wenn ihr in einer neuen Siedlung ankommt",
  "Wenn du einkaufen gehen musst",
  "Wenn du dich häuten und deinen Käfer verbessern willst",
  "Wenn ihr mitten auf einer Reise lagert",
  "Wenn ihr euch nach harten Zeiten auskurieren müsst"]},
 {t:"h", x:"Aufgaben"},
 "Die lange Handlung, die du in einer Montage ausführst, heißt Aufgabe. Sie ist genauso frei wie eine normale Handlung – es gibt einige besondere Arten, aber meistens kannst du einfach beschreiben, was du erreichen willst, und wenn es schwierig, gefährlich oder dramatisch ist, musst du würfeln.",
 {t:"h", x:"Montageregeln"},
 "Für Montagen gelten ein paar besondere Regeln, die meist dann ins Spiel kommen, wenn du eine bestimmte Art von Aufgabe erledigst. Die behandeln wir auf den nächsten Seiten.",
 "Die wichtigste Regel soll einfach alle gleichstellen: In einer Montage kann dein Käfer nur eine Aufgabe übernehmen."]},

{id:"montagen-frei", t:"Freie Aufgaben", p:70, b:[
 {t:"vl", x:"Man sagt, ein Diamant sei ein Stück Kohle, das bei der Sache geblieben ist. Leider weiß ich nicht, wer „man“ ist, oder was ein Diamant ist, oder wo ich Kohle finden würde. Aber es klingt gut, oder? Klingt richtig motivierend."},
 "Wenn eure Gruppe eine Montage nimmt, kann jeder Käfer eine einzige Aufgabe ausführen. Einige dieser Aufgaben sind festgelegt – Erholen, Organisieren und Rätseln haben jeweils eigene Sonderregeln und Ergebnisse, die auf den nächsten Seiten stehen. Aber es gibt *jede Menge* anderer Aufgaben, an denen ein Charakter teilhaben kann: mit anderen Käfern plaudern, um an Informationen zu kommen, sich um ein kleines Tier kümmern, durch die Umgebung streifen, um sie zu erkunden, oder über Karten und Pläne brüten, um ein bisschen mehr über die Welt zu lernen.",
 "Diese freien Aufgaben bringen meist einen Vorteil oder ein Ergebnis, das im Gespräch oder vom Weber entschieden wird, und sie erfordern nur dann einen Wurf, wenn sie schwierig, gefährlich oder dramatisch sind.",
 {t:"h", x:"Frei loslegen"},
 "Hier ein paar Beispiele, was eine freie Aufgabe in einer Montage bewirken kann …",
 {t:"ul", x:[
  "Carlosa will mehr über die Probleme herausfinden, mit denen die neue Siedlung zu kämpfen hat, in der seine Mannschaft angekommen ist. Also nutzt er eine Aufgabe, um loszuziehen und ein Schwarzes Brett oder einen kundigen NSC zu finden, der ihn einweihen kann.",
  "Maka will sich ein besseres Bild von der Umgebung machen und nutzt eine Aufgabe, um auf einen nahen Baum zu klettern und die Aussicht zu genießen. Das könnte die nächste Etappe der Reise erleichtern oder ein neues Wahrzeichen am Horizont enthüllen.",
  "Elsbeth will für eine bevorstehende Reise einen Picotitan anheuern und verbringt ihre Aufgabe damit, einen Stall in der Nähe zu suchen."]}]},

{id:"montagen-erholen", t:"Erholen", p:71, b:[
 "Käfer erholen sich ziemlich gut von allerlei Gebrechen, von einem beschädigten Krabbelbein bis dahin, dass sie teilweise von einem Fuchs angefressen wurden. Sie können sich auf ihre natürliche Heilung verlassen, die langsam und stetig ist, oder durch Medizin, Reparaturen oder deftiges Essen einen kleinen Schub bekommen, der einen angeschlagenen Käfer viel schneller wieder auf die Beine bringt – dafür aber mit etwas größerer Schwankung in der Wirkung.",
 {t:"h", x:"Natürliche Heilung"},
 "Manchmal gewinnt tatsächlich der, der langsam und stetig ist. Du kannst eine Aufgabe nutzen, um zu schlafen, was deine Stimmung ins Positive zieht. Oder du nutzt eine Aufgabe zum Heilen und leerst eine Markierung Schaden auf einer deiner Aspektleisten (Teil, Werkzeug oder Gefährte). Das steht für eine faule Zeit in der Sonne, für Basteln an deiner Ausrüstung oder für die Pflege deines noch winzigeren Begleiters.",
 {t:"p", x:"*Beispiel: Sasha hat in ihrer letzten Begegnung ein paar Schläge abbekommen, also nutzt sie eine Aufgabe zum Erholen. Sie leert eine Markierung Schaden von ihrem glänzenden Panzer und poliert ihn, bis er fast so gut wie neu ist.*"},
 {t:"h4", x:"Heilen in Siedlungen"},
 "In einer Siedlung kannst du Verbrennungen genauso leicht entfernen wie Markierungen (durch natürliche Heilung oder durch einen Wurf, wie unten gezeigt). Aber Verbrennungen lassen sich unterwegs oder in der Wildnis normalerweise nicht entfernen.",
 {t:"h", x:"Für die Erholung würfeln"},
 "Du kannst den Vorgang auch beschleunigen, indem du ein Bröckchen (um ein Teil oder einen Gefährten zu heilen) oder ein Krimskrams (um ein Werkzeug zu heilen) verbrauchst. Wenn du dich dafür entscheidest, kannst du mit einer Aufgabe auf der Tabelle rechts oben auf dieser Seite würfeln (die Fertigkeiten Kümmern und Werkeln können hier helfen). Das ist riskanter – bei einem schlechten Wurf heilst du vielleicht gar nicht, aber bei einem guten Wurf kannst du gleich mehrere Herzen auf einmal leeren. Zum Glück gibt dir das verbrauchte Bröckchen oder der Krimskrams aber Vorteil auf den Wurf!",
 {t:"p", x:"*Beispiel: Pinto hat ein köstliches Stück Gurke in seinen Bröckchen- und Krimskrams-Plätzen aufgespart und nutzt es, um schneller zu heilen. Er verwendet die Fertigkeit Werkeln, um es zuzubereiten, und würfelt auf der Tabelle: 2W6 für die Fertigkeit und 1W6 für das köstliche Bröckchen. Er erzielt einen Konflikt mit einem Bonus und heilt zwei Markierungen auf einmal.*"},
 {t:"h4", x:"Doktor, Doktor"},
 "Du kannst eine Aufgabe auch nutzen, um diesen Wurf für einen anderen Käfer zu machen, wenn du ein Heiler-Typ bist. Dafür brauchst du die Erlaubnis dieses Käfers, und alle erwürfelten Vorteile gelten für diesen Käfer und nicht für dich.",
 {t:"erg", h:"Ergebnisse des Erholungswurfs", c:"#3b413f", rows:[
  ["Triumph","Dir geht es viel besser! Leere zwei Markierungen Schaden von einem deiner Teile, Ausrüstungsstücke oder Gefährten, ODER leere eine Markierung Schaden und ziehe deine Stimmung ins Positive."],
  ["Konflikt","Hätte besser laufen können, aber nichts ging dramatisch schief. Leere eine Markierung Schaden von einem deiner Teile, Ausrüstungsstücke oder Gefährten, ODER ziehe deine Stimmung ins Positive."],
  ["Desaster","Welches Teil gehörte noch mal wohin? Naja, immerhin konnte ich mich hinsetzen. Du leerst keine Markierungen, ziehst aber deine Stimmung auf neutral."],
  ["Wendung oder Bonus","Eine Wendung beim Erholen kannst du wie gewohnt behandeln: Etwas Unerwartetes geschieht. Alternativ kannst du der Heilung einen Bonus hinzufügen: Entweder leerst du eine weitere Markierung Schaden auf einem beliebigen Teil, Ausrüstungsstück oder Gefährten (auch wenn es nicht das Ziel des Erholungswurfs war), oder du ziehst deine Stimmung einen weiteren Schritt ins Positive."]]},
 _wurf(),
 {t:"bsp", h:"Erholungsbeispiel", b:[
  ["Bicco","Also, ich fühle mich großartig! Ein bisschen ramponiert, aber trotzdem großartig!"],
  ["Weber","Du hast dich da eigentlich richtig gut geschlagen."],
  ["Dunf","Ja, aber du brauchst wahrscheinlich ein bisschen Flickarbeit."],
  ["Bicco","Das stimmt. Ich nutze in dieser Montage eine Aufgabe für natürliche Heilung und leere eine Markierung."],
  ["Swift","Hey, ich helfe dir auch dabei – ich würfle auf Kümmern und nehme etwas von dem Zaubernuss, das wir aufgelesen haben … ein Triumph! Willst du zwei Markierungen leeren oder eine Markierung leeren und deine Stimmung verbessern?"],
  ["Bicco","Ich bin schon ziemlich glücklich, also nehme ich beide Leerungen. Mit diesen zwei und der einen von meiner natürlichen Heilung sind meine Krabbelbeine wieder voll einsatzfähig! Tolle Arbeit, Swift, danke dir."],
  ["Swift","Hey, du hast uns in der letzten Rauferei echt den Rücken freigehalten. Das hast du verdient."]]}]},

{id:"montagen-organisieren", t:"Organisieren", p:72, b:[
 {t:"vl", x:"Denk einfach daran, was Mary immer gesagt hat, vor dem unglücklichen Regenschirm-Unfall: Ein Löffel Zucker ist extrem schwer zu tragen, selbst wenn man besonders große Taschen hat."},
 "Bröckchen und Krimskrams sind leicht zu bekommen, wenn man weiß, wo man suchen muss. Aber die *richtigen* Bröckchen und Krimskramsstücke sind im Notfall vielleicht schwerer zu finden. Eine Aufgabe fürs Organisieren von Vorräten kann bedeuten, im Gras in der Nähe zu wühlen, in einem Teich zu fischen, Schränke zu plündern oder Händler an Marktständen zu besuchen. Dass du dir dafür Zeit nimmst, macht es etwas verlässlicher als das Sammeln während einer Szene.",
 {t:"h", x:"Was willst du?"},
 "Wenn du etwas organisierst, nennst du zuerst, welche *Art* von Ding du suchst – zum Beispiel „etwas Scharfes“, „etwas Süßes“ oder „etwas Hartes“. Wenn das Gesuchte leicht zu finden ist, bekommst du es wahrscheinlich ohne Wurf, nur durch den Einsatz einer Aufgabe. Du brauchst aber trotzdem freie Tragplätze, um den Fund unterzubringen – such also nicht nach Zeug, für das du keinen Platz hast (du könntest es im Notfall aber einem anderen Käfer deiner Bande zum Tragen geben).",
 {t:"p", x:"*Beispiel: Clay, eine kochkundige Käferin, will eine neue Zutat. Sie sieht sich in einer Speisekammer um und sagt, sie wolle etwas Klebriges. Der Weber teilt ihr mit, dass es dort Honig gibt und dass sie sich einen Klecks nehmen kann, wenn sie möchte. Das tut sie und legt ihn auf einen ihrer Tragplätze.*"},
 "Es gibt keine genehmigte Liste, aus der du wählen musst, wenn du die Art des Gesuchten angibst – aber Vorsicht: Wenn du deinen Wunsch zu eng fasst, wirst du fast sicher würfeln müssen, weil es schwierig wird. Man kann zum Beispiel nach „etwas Diamantigem“ suchen, aber wie wahrscheinlich ist es, dass du tatsächlich etwas findest? *Es sei denn, du bist in einem verlassenen Juweliergeschäft – dann ist die Suche nach „etwas Diamantigem“ seltsamerweise ziemlich passend.*",
 {t:"h", x:"Würfeln zum Organisieren"},
 "Wenn beim Organisieren ein Element von Gefahr, Drama oder Schwierigkeit im Spiel ist, wird wahrscheinlich ein Wurf nötig. In diesem Fall hat die Tabelle rechts auf dieser Seite eine besondere Auswahl an Ergebnissen, die sich speziell auf das Sammeln von Bröckchen und Krimskrams beziehen. Die „Finden“-Fertigkeiten können hier alle nützlich sein, aber je nach Situation sind auch andere Fertigkeiten möglich.",
 {t:"p", x:"*Beispiel: Pinto will etwas Gurke von einem Bauernfeld holen, aber zwischen den süßen Leckereien und der Sicherheit der Hecke, in der Pinto sich gerade versteckt, liegt eine weite Lücke. Er könnte mit Spüren oder Jagen würfeln, um die besten Gurken zu finden, oder mit Schleichen oder Flitzen, um die Strecke schnell zu überwinden und seine Beute einigermaßen sicher heimzubringen.*"},
 {t:"h4", x:"Tauschen"},
 "Eine weitere Möglichkeit, ohne Wurf an neue Bröckchen und Krimskramsstücke zu kommen, ist das Tauschen: Man tauscht ein vorhandenes Bröckchen oder Krimskrams gegen etwas Neues. In der Wildnis, ohne andere freundliche Händlertypen in der Nähe, kann das schwierig sein, in einer Siedlung sollte es aber leicht genug gehen. Der Einfachheit halber gilt beim Tauschen (standardmäßig): ein Ding geben, ein Ding zurückbekommen.",
 {t:"erg", h:"Ergebnisse des Organisierwurfs", c:"#ee7bae", rows:[
  ["Triumph","Na sieh mal einer an! Du findest genau das, wonach du gesucht hast: ein Bröckchen oder Krimskrams, das direkt zu deinem genannten Wunsch passt."],
  ["Konflikt","Hey, das kann ich vermutlich gebrauchen! Du findest etwas, das dem Gesuchten nahekommt, aber nicht genau trifft, ODER du findest genau das Gewünschte, aber es hat ein vom Weber gewähltes negatives Etikett."],
  ["Desaster","Ich tue einfach so, als wüsste ich, was das ist. Du findest ein Bröckchen oder Krimskrams, aber es hat nichts mit dem zu tun, was du gesucht hast, und ist womöglich das genaue Gegenteil."],
  ["Wendung oder Etikett hinzufügen","Eine Wendung beim Organisieren kannst du wie gewohnt behandeln: Etwas Unerwartetes geschieht. Alternativ kannst du dem gefundenen Bröckchen oder Krimskrams ein positives Etikett hinzufügen."]]},
 _wurf()]},

{id:"montagen-organisieren-sammeln", t:"Organisieren oder Sammeln?", p:73, b:[
 "Organisieren ist dem Sammeln (zu finden auf S. 52) ziemlich ähnlich, denn in beiden Fällen bekommt ein Käfer ein schönes neues Bröckchen oder Krimskrams, wenn es gut läuft – aber es gibt einen wichtigen Unterschied. Beim Organisieren hast du keine klare Vorstellung, was du willst, sondern nur eine Ahnung, welche Art von Ding es sein könnte. Beim Sammeln hast du ein genaues Ziel vor Augen: Du willst genau dieses Ding dort.",
 "Beide sind in unterschiedlichen Situationen nützlich, aber beim Organisieren hat der Weber mehr Freiheit, dir etwas Unerwartetes zu liefern.",
 {t:"bsp", h:"Organisierbeispiel", b:[
  ["Layla","Ich habe im Moment viele freie Tragplätze, also sollte ich wohl losziehen und mehr Zeug für die Zukunft finden. Das geht mit einer Aufgabe, oder?"],
  ["Weber","Das geht tatsächlich! Was für eine Art von Ding suchst du? Wenn es hier ganz gewöhnlich ist, musst du vielleicht nicht würfeln."],
  ["Layla","Etwas … hmm, Beruhigendes, glaube ich."],
  ["Weber","Okay, dafür brauchst du einen Wurf! Wie organisierst du es?"],
  ["Layla","Nun, ich habe Graben – ich wühle im Dreck und versuche, etwas Schönes aus dem Untergrund zu finden. Geht das?"],
  ["Weber","Ja, das ist eigentlich eine ziemlich coole Idee! Stell deinen Pool zusammen und würfle, mal sehen, ob du etwas findest …"]]}]},

{id:"montagen-raetseln", t:"Rätseln", p:74, b:[
 "Manche Rätsel sind einfach zu saftig, um sie in Ruhe zu lassen! Ein Käfer kann eine Aufgabe nutzen, um nach etwas zu suchen, das für das Rätsel relevant sein könnte, an dem er gerade arbeitet, in der Hoffnung auf eine kleine Entdeckung, die ihn der Wahrheit näherbringt.",
 {t:"h", x:"Nach einem Zeichen suchen"},
 "Rätsel lösen sich im Spiel ganz natürlich nach und nach (meist in Szenen und auf Reisen), aber das Rätseln in einer Montage beschleunigt diesen Vorgang enorm. Deshalb erfordert Rätseln auf diese Weise immer einen Wurf und verbraucht eine Aufgabe.",
 "Es liegt am Weber, die Situation oder den Moment zu liefern, der einem Käfer hilft, der Lösung seines Rätsels näherzukommen – aber es liegt am Spieler, ihn zu deuten und die Schlüsse zu ziehen, die er möchte: Rätsel zu lösen ist schließlich eine persönliche Angelegenheit. *Der Weber muss vielleicht das aktuelle Rätsel des Käfers nachsehen, bevor er die Situation liefert, und das ist in Ordnung.*",
 {t:"h4", x:"Würfeln zum Rätseln"},
 "Die Tabelle rechts zeigt besondere Ergebnisse für das Rätseln während einer Montage. Weil das Lösen von Rätseln sonst keinen Wurf erfordert, sollte die Fertigkeit, die den Wurf unterstützt, zur vom Weber gelieferten Situation passen – das kann Denken sein, um das Gesehene zu durchdenken, eine der Bewegen-Fertigkeiten, um zu finden, was sich enthüllen könnte, oder sogar eine Anfreunden-Fertigkeit, damit ein Begleiter oder NSC einen Hinweis fallen lässt, der zu einer kleinen Entdeckung führt.",
 {t:"erg", h:"Ergebnisse des Rätselwurfs", c:"#8a3679", rows:[
  ["Triumph","Eine Offenbarung! Du findest etwas, das dir eine kleine Entdeckung zu deinem aktuellen Rätsel eingibt, und kannst diese kleine Entdeckung sofort verkünden."],
  ["Konflikt","Eine Offenbarung, aber nicht für mich! Du findest etwas, das dich nicht anspricht, aber vielleicht einen deiner Verbündeten. Ein anderer Käfer deiner Mannschaft kann auf Grundlage deines Fundes eine kleine Entdeckung machen, wenn er möchte."],
  ["Desaster","Fehlalarm. Du dachtest, da könnte etwas sein, aber da ist nichts – weder du noch deine Verbündeten machen kleine Entdeckungen."],
  ["Wendung oder Kaninchenbau","Eine Wendung beim Rätseln kannst du wie gewohnt behandeln: Etwas Unerwartetes geschieht. Alternativ kannst du dich für den Kaninchenbau entscheiden: Dann darf der Weber eine plötzliche kleine neue Wahrheit über die Welt verkünden, die dein Käfer gerade erkannt hat."]]},
 _wurf(),
 {t:"p", x:"*Beispiel: Leroy hat ein Rätsel, das sie lösen will, und eine Montage, in der keine anderen Arbeiten drängen. Sie beschließen zu rätseln, und der Weber teilt ihnen mit, dass ein Künstler in der Nähe einige Bilder ausstellt, die ihr Interesse wecken könnten. Sie würfeln mit Stöbern, um alle Bilder zu durchsuchen, bis eines sie anspricht, aber sie hätten auch Spüren oder Denken nutzen können, um den Inhalt der Kunst zu betrachten und zu überlegen, wie er etwas über ihr Rätsel verraten könnte.*"},
 {t:"bsp", h:"Rätselbeispiel", b:[
  ["Dunf","Also, ich habe noch eine Aufgabe übrig, und die nutze ich für etwas Tiefgründiges. Ich rätsele!"],
  ["Weber","Okay, erzähl mir mehr! Du hast deine Katzenfrage gelöst, welchem Rätsel jagst du jetzt nach?"],
  ["Dunf","Warum ist das Gras grün?"],
  ["Weber","Ooh, schön! Nun, hier ist kein Gras, aber in der Ferne blitzt etwas auf – eine glänzende grüne Flasche, die aus dem Sand ragt."],
  ["Dunf","Dafür würfle ich dann, und ich nehme Spüren – ich betrachte das Spiel des Lichts, das durch die Flasche fällt, und sehe nach, ob es gelb von der Sonne hereinkommt und grün aus dem Glas austritt. Vielleicht ist das ja der Grund …"],
  ["Weber","Okay, würfle und sag uns, was du herausfindest!"]]}]},

{id:"montagen-zitat", t:"Rexi Makismo", p:75, b:[
 {t:"vl", x:"Es gibt weit mehr Fragen auf dieser Welt als Antworten, das ist einfach eine Tatsache. Aber was ich auf meinen Reisen herausgefunden habe, ist, dass die meisten Fragen gar keine Antwort BRAUCHEN. Und wenn man all die ignoriert, gleicht sich die Waage fast aus.", wer:"Rexi Makismo, nachdenklicher Skorpion-Abenteurer"}]},

{id:"montagen-kochen", t:"Kochen", p:76, b:[
 {t:"vl", x:"Ein paar Pilze, eine Prise Pfeffer, ein Streifen gepökelter Dachs und eine Garnitur aus Zahnzwiebeln. Das ist mal ein Gericht."},
 "Nichts geht über eine selbstgekochte Mahlzeit. Zum Glück für abenteuernde Käfer kommt ein Festmahl am Lagerfeuer dem schon ziemlich nahe.",
 "Wenn ein Käfer eine Aufgabe zum Kochen nutzt, verbraucht er zwei (oder mehr) Bröckchen mit einem Würfelwurf, um eine Mahlzeit zu schaffen: ein besonderes Verbrauchsgut, das einen der folgenden Vorteile bietet, wenn ein Käfer es isst …",
 {t:"ul", x:[
  "**Zeitweilige Resistenz:** Gibt dem Käfer Resistenz gegen eine bestimmte, zu den Zutaten passende Schadensart, die den erlittenen Schaden dieser Art halbiert (abgerundet), wie auf S. 63 beschrieben. Eine ausgezeichnete Verteidigung für den Augenblick!",
  "**Zeitweilige Fertigkeitssteigerung:** Gibt dem Käfer +1 Rang in einer bestimmten, zu den Zutaten passenden Fertigkeit. Das kann eine Fertigkeit nicht über Rang 3 heben, ist aber großartig, um an Fertigkeiten zu kommen, die ein Käfer sonst nicht hätte, oder um die vorhandene Auswahl etwas aufzubessern. Die Fertigkeitenübersicht findest du auf S. 144.",
  "**Zeitweiliger Abzug-Ausgleich:** Gibt dem Käfer die Möglichkeit, die Menge einer bestimmten, zu den Zutaten passenden Abzugsart um eins zu verringern (entweder Panzer-Abzug, Tempo-Abzug, Tarn-Abzug oder Komplex-Abzug, wie auf S. 38 beschrieben). Eine Mahlzeit kann den Härte-Abzug eines Käfers jedoch nicht verringern, und diese Verringerung gilt nicht für Abzug, den ein Käfer freiwillig auf sich nimmt – nur für Abzug, der vom Weber auferlegt wird."]},
 {t:"h", x:"Vorteile wählen"},
 "Die Wirkung einer Mahlzeit oder Portion sollte etwas mit den als Zutaten verwendeten Bröckchen zu tun haben. Sieh dir die Etiketten eines Bröckchens an oder denk an seinen Geschmack und seine Eigenschaften – vielleicht gibt eine scharfe Suppe Resistenz gegen Brutzeln, oder eine Mischung aus Rührei-Pilzen erlaubt es, Tempo-Abzug zu verringern. *Sprich mit dem Weber, wenn du nicht sicher bist, welche Wirkungen passen könnten.*",
 {t:"h", x:"Würfeln zum Kochen"},
 "Beim Zubereiten einer Mahlzeit kann viel schiefgehen – deshalb erfordert Kochen immer einen Wurf und verbraucht eine Aufgabe. *Die Fertigkeiten Werkeln und Kümmern werden hier wohl nützlich sein.*",
 "Auf der Tabelle rechts kannst du nachsehen, welche Ergebnisse eine Mahlzeit nach dem Kochen hat, aber es gibt noch eine wichtige Frage zu klären: *Wer bekommt was von dem, was du gemacht hast?*",
 {t:"h", x:"Mahlzeiten & Portionen"},
 "Eine mit zwei Bröckchen zubereitete Mahlzeit reicht für einen Käfer, aber für jedes Bröckchen über die ersten zwei hinaus, das du hinzufügst, erhältst du eine zusätzliche Portion dieser Mahlzeit mit genau denselben Vorteilen.",
 "Sobald der Kochwurf gemacht ist, entscheidest du, wer eine Portion der entstandenen Mahlzeit bekommt – höchstens eine pro Käfer! *Mahlzeiten/Portionen werden im Bereich „Kreationen“ auf dem Charakterbogen eingetragen.*",
 {t:"erg", h:"Ergebnisse des Kochwurfs", c:"#979f32", rows:[
  ["Triumph","Ein kulinarisches Meisterwerk! Wähle entweder eine zeitweilige Resistenz, Fertigkeitssteigerung oder einen Abzug-Ausgleich. Eine Portion dieser Mahlzeit gewährt diesen Vorteil bei allen betroffenen Aktionen und Reaktionen für den Rest der Szene, in der ein Käfer sie verzehrt."],
  ["Konflikt","Nützlich und essbar! Wähle entweder eine zeitweilige Resistenz, Fertigkeitssteigerung oder einen Abzug-Ausgleich. Eine Portion dieser Mahlzeit gewährt diesen Vorteil bei der nächsten betroffenen Aktion oder Reaktion innerhalb der Szene, in der ein Käfer sie verzehrt."],
  ["Desaster","Hätte ein Rezept benutzen sollen. Die entstandene Mahlzeit ist, technisch gesehen, essbar, gibt aber beim Verzehr keinerlei Vorteile."],
  ["Wendung oder Geschmackstiefe","Eine Wendung beim Kochen kannst du wie gewohnt behandeln: Etwas Unerwartetes geschieht. Alternativ kannst du eine Geschmackstiefe hinzufügen, auf die selbst ein Meisterkoch stolz wäre – bei einem Konflikt oder Triumph wähle eine zusätzliche zeitweilige Resistenz, Fertigkeitssteigerung oder einen Abzug-Ausgleich, den Portionen dieser Mahlzeit beim Verzehr gewähren, ODER lass jede Portion beim Verzehr die Stimmung ins Positive ziehen."]]},
 _wurf()]},

{id:"montagen-kochbeispiel", t:"Kochbeispiel", p:77, b:[
 {t:"bsp", h:"Kochbeispiel", b:[
  ["Layla","Weißt du, es ist eine Weile her, dass wir eine gute Mahlzeit hatten. Bicco, hättest du Lust, in dieser Montage etwas für uns zu kochen? Ich kann dir ein paar Zutaten geben, wenn das hilft, ich habe Bröckchen übrig."],
  ["Bicco","Oh ja, das kann ich! Was wäre denn von der Wirkung her nützlich für uns?"],
  ["Dunf","Nun, wir wollen gleich diesen Kaktus angehen, und Klettern ist nicht gerade meine Stärke. Vielleicht etwas, das uns allen einen Rang Klettern gibt?"],
  ["Layla","Ich habe tatsächlich auch ein Bröckchen, das passend aussieht: Kriechranken. Die sind gut im Klettern. Bei Pflanzen, meine ich."],
  ["Swift","Und ich habe diesen Nicht-Pferde-Leim aus dem Museum, aus dem wir letzte Woche entkommen sind. Das ist doch eine Art Zutat, oder?"],
  ["Weber","Schmeckt vielleicht nicht toll, ist aber definitiv essbar."],
  ["Bicco","Ja, beides klingt großartig. Und wir müssen die Mahlzeit nur mit ein paar weiteren Bröckchen strecken, damit wir genug Portionen für alle haben."],
  ["Swift","Ich bin eigentlich ein ziemlich guter Kletterer – ich habe schon 3 Ränge darin, also brauche ich keine Portion. Aber es wird toll, euch mal neben mir klettern zu haben statt hinter mir herzuhinken, also los!"]]}]},

{id:"montagen-herstellen", t:"Herstellen", p:78, b:[
 {t:"vl", x:"Meine neue Erfindung wird garantiert scheitern, aber was für ein spektakuläres Scheitern das wird!"},
 "Herstellen folgt einer ähnlichen Struktur wie Kochen, hat aber ein ganz anderes Ergebnis. Beim Herstellen verbraucht ein Käfer zwei (oder mehr) Krimskramsstücke mit einem Würfelwurf, um eine Vorrichtung zu schaffen: eine zeitweilige Schöpfung, die die Vorteile und Nachteile eines Aspekts nachahmt, auf den der Benutzer sonst keinen Zugriff hätte.",
 "Eine Vorrichtung kann jeden Aspekt aus dem Aspekte-Teil dieses Buches nachahmen – Teile, Ausrüstung oder Gefährten können alle von einem zeitweiligen mechanischen Wunderwerk nachgeahmt werden, wenn die richtigen Krimskramsstücke kombiniert werden.",
 {t:"h", x:"Einen Aspekt wählen"},
 "Welchen Aspekt eine Vorrichtung nachahmt, entscheidet der Erfinder, aber er sollte etwas mit den als Bauteilen verwendeten Krimskramsstücken zu tun haben. Denk an die physischen Eigenschaften deiner Krimskramsstücke und wozu man sie umfunktionieren könnte – eine Krokodilklemme könnte helfen, die Mandibeln von S. 108 zu bauen, oder ein Stoffballen könnte helfen, einige Drohnenflügel von S. 124 zu basteln. *Sprich mit dem Weber und den anderen am Tisch, wenn du nicht sicher bist, welche Aspekte sich aus deinen Krimskramsstücken herstellen lassen.*",
 {t:"h", x:"Würfeln zum Herstellen"},
 "Das Basteln mit Krimskrams läuft selten reibungslos – deshalb erfordert Herstellen immer einen Wurf und verbraucht eine Aufgabe. *Die Fertigkeiten Werkeln, Denken und Stöbern werden hier wohl nützlich sein.*",
 "Die Tabelle unten rechts zeigt, welche Ergebnisse eine Erfindung hat, wenn sie zusammengebaut ist, aber es gibt noch eine wichtige Frage zu klären: *Welcher glückliche Käfer darf Testperson sein, sobald die Vorrichtung läuft?*",
 {t:"erg", h:"Ergebnisse des Herstellungswurfs", c:"#a16527", rows:[
  ["Triumph","Ein Unikat! Wähle einen Aspekt zum Nachahmen. Ein Prototyp gibt eine Kopie dieses Aspekts, die von der ersten Benutzung an funktioniert, wenn sie für irgendeinen Vorteil genutzt wird, bis zum Ende der Szene."],
  ["Konflikt","Brauchbar! Wähle einen Aspekt zum Nachahmen. Ein Prototyp gibt eine Kopie dieses Aspekts, die … einmal funktioniert und dann auseinanderfällt."],
  ["Desaster","Große Fortschritte erfordern von Zeit zu Zeit große Fehlschläge. Deine Krimskramsstücke sind ruiniert, und du gewinnst aus dem Vorgang nichts."],
  ["Wendung oder Erweiterung","Eine Wendung beim Herstellen kannst du wie gewohnt behandeln: Etwas Unerwartetes geschieht. Alternativ (zusammen mit einem Konflikt oder Triumph) kannst du deinem nachgeahmten Aspekt ein Augment hinzufügen, das ihm einen zusätzlichen Vorteil aus einem der in Kapitel 6 aufgeführten Augmente verleiht."]]},
 _wurf(),
 {t:"bsp", h:"Herstellungsbeispiel", b:[
  ["Swift","Das Klettern auf den Kaktus lief überraschend gut, aber jetzt müssen wir zur Sprinkleranlage hinauf. Und das ist … na ja, das ist ein ziemlicher Sprung. Ist jemand richtig, *richtig* gut in Flitzen?"],
  ["Bicco","Ich nicht, und fliegen können wir auch nicht gut … Wir hätten wohl ein bisschen besser planen sollen."],
  ["Dunf","Planen? Ha! Wer braucht schon Planung, wenn er mich hat? Weber, ich baue eine Vorrichtung zusammen – etwas, das ein Paar Flügel nachahmt, mit Kopien für alle."],
  ["Weber","Nun, ich … ich will deinen Enthusiasmus nicht dämpfen, aber bist du gut im Herstellen?"],
  ["Dunf","Ich habe bei der letzten Häutung einen Rang Werkeln mitgenommen, und ich habe ein paar Krimskramsstücke, die zur Not als Flügel dienen könnten. Ich finde, einen Versuch ist es wert!"],
  ["Layla","Dunf, ich glaube an dich. Dann lass uns sehen, welche Vorrichtung du dir ausdenkst."],
  ["Weber","Das ist eine wirklich positive Einstellung, Layla."],
  ["Layla","Ja, ich glaube, ich habe meine Angst gut versteckt. Los geht's!"]]}]},

{id:"montagen-vorrichtungen", t:"Vorrichtungen & Kopien", p:79, b:[
 "Eine mit zwei Krimskramsstücken hergestellte Vorrichtung reicht für einen Käfer, aber wenn du dem Herstellungsprozess weitere Krimskramsstücke hinzufügst, kannst du zusätzliche Kopien anfertigen, die du an deine (wahrscheinlich ziemlich nervösen) Kameraden verteilst.",
 "Herstellen mit zwei Krimskramsstücken ergibt eine Kopie der entstehenden Vorrichtung. Für jedes Krimskrams über die ersten zwei hinaus, das du hinzufügst, erhältst du eine zusätzliche Kopie. Sobald der Herstellungswurf gemacht ist, entscheidest du, wer eine Kopie deiner Vorrichtung benutzen darf! *Ein Käfer kann immer nur eine Vorrichtung gleichzeitig halten, und Vorrichtungen werden im Bereich „Kreationen“ auf dem Charakterbogen eingetragen. Sie können sogar genutzt werden, um dem Aspekt-Teil eines Aktionswurfs 1W6 zu geben!*",
 {t:"h", x:"Wo sind all die Leisten?"},
 "Vorrichtungen unterscheiden sich in einem wichtigen Punkt von den Aspekten, die sie nachahmen – sie haben keine Leisten. Wenn die Vorrichtung eines Käfers markiert oder verbrannt werden muss, um einen Vorteil zu geben, funktioniert sie einmal und fällt dann sofort auseinander. Dasselbe gilt, wenn ein Käfer sie nutzen will, um Schaden aufzufangen: Sie nimmt einen Treffer beliebiger Größe hin, ohne den haltenden Käfer zu verletzen, und zerfällt dann in unbrauchbare Einzelteile.",
 "Natürlich heißt das, dass manche Aspekte als Vorrichtungen besser funktionieren als andere. Wir empfehlen, beim Spielen zu experimentieren, um herauszufinden, was für dich und deine krabbeligen Verbündeten funktioniert. Und wer weiß, wenn ein Käfer eine Vorrichtung wirklich mag, schnappt er sich bei seiner nächsten Häutung vielleicht sogar eine dauerhafte Version aus dem Aspekte-Kapitel!"]},

{id:"montagen-haeuten", t:"Häuten", p:80, b:[
 {t:"vl", x:"Es ist ein neuer Morgen, es ist ein neuer Tag, ich bin ein neuer Käfer … und ich fühle mich gut!"},
 "Häuten ist eine ganz besondere Aufgabe, die erst bei längerem Spiel nützlich wird: Ein Käfer verspeist einen Teil des Nektars, den er gefunden hat (PICOs Ressource für Charaktererschaffung und Weiterentwicklung), spinnt einen kleinen Kokon um sich und kommt am Ende der Aufgabe mit einem glänzenden neuen Merkmal zum Vorschein! Er kann mit neuen Fertigkeitsrängen, einem neuen Aspekt oder einem zusätzlichen Augment auf einem seiner vorhandenen Aspekte herauskommen. Ist die Natur nicht wunderbar?",
 "Beim Häuten gibt es keine Würfe, und es gibt kein Risiko des Scheiterns – es ist eine Situation nach dem Motto „nur Gutes“.",
 {t:"h", x:"Wann häuten?"},
 "Es gibt drei Voraussetzungen, die du erfüllen musst, um dich zu häuten. Wir gehen sie unten durch.",
 {t:"ul", x:[
  "**1: Du brauchst einen sicheren Ort.** Die meisten Montagen finden an halbwegs sicheren Orten statt, aber nicht alle – wenn du eine Montage nutzt, um feindliches Gebiet zu erkunden, ist es eine ziemlich furchtbare Idee, sich aufzuteilen und einen Käfer zum Häuten zurückzulassen. Es gibt Situationen, etwa beim Lagern während einer Reise, die ein mögliches Element von Gefahr haben. Dort ist das Häuten in Ordnung, und selbst wenn euer Lager von Käferbarbaren überfallen wird, sollte die Fiktion davon ausgehen, dass der sich häutende Käfer den Vorgang genau in dem Moment abschließt, in dem sie ankommen. Er mag etwas benommen sein, aber ihm geht es gut.",
  "**2: Du brauchst genug Nektar für eine Charakterweiterentwicklung.** Häuten erlaubt es im Grunde, mitten im Spiel neue Fertigkeitsränge, einen neuen Aspekt oder ein Augment zu kaufen. Die Kosten für diese verschiedenen Arten der Weiterentwicklung findest du auf S. 102 (die auch mehr über Nektar verrät) und gleich auf der nächsten Seite oben links. Aber wenn du nicht genug Nektar angesammelt hast, um eine dieser Optionen beim Häuten zu wählen, kannst du den Kokon gar nicht erst spinnen, um den Vorgang zu beginnen.",
  "**3: Du musst wissen, was du willst.** Das ist eine einfache, aber wichtige Regel: Häuten sollte das Spiel nicht stärker aufhalten als jede andere Aufgabe. Entscheide dich nicht erst fürs Häuten und blättere dann im Buch herum, um zu überlegen, welche Optionen dir gefallen – das ist für alle langweilig. Besser ist es, grob im Voraus zu planen, was du nehmen willst, damit du es auf deinen Charakterbogen eintragen kannst, während die anderen Käfer deiner Bande ihre eigenen Aufgaben erledigen."]},
 {t:"vl", x:"Man sagt, eine gute Nachtruhe heilt fast alles, aber da bin ich mir nicht so sicher. Ich bin mit Kopfschmerzen ins Bett gegangen und mit einem ganz neuen Paar Flügel aufgewacht. Die Kopfschmerzen habe ich immer noch.", wer:"Irrigo Samson, Mottenmathematiker"}]},

{id:"montagen-haeutungsbeispiel", t:"Häutungsbeispiel", p:81, b:[
 {t:"bsp", h:"Häutungsbeispiel", b:[
  ["Bicco","Weißt du, ich habe schon eine Weile genug Nektar für einen Aspekt, und es ist Zeit, den Sprung zu wagen – ich häute mich in dieser Montage."],
  ["Layla","Oh wow! Ich bin gespannt, was du wählst."],
  ["Weber","Ich auch! Bicco, beschreibe den Beginn des Vorgangs, und wir kommen zu dir zurück, wenn alle anderen ihre Aufgaben genommen haben."],
  ["Bicco","Alles klar. Während Layla das Feuer schürt und Dunf tut … na ja, was auch immer Dunf so tut, rolle ich mich leise in der Wärme zusammen und mampfe etwas Nektar. Bald ist es, als würde ich mich in eine Decke aus Seide hüllen, mich in die Wärme kuscheln und davon träumen, was ich werden werde …"],
  ["Layla","Aww!"]]},
 {t:"h", x:"Weiterentwicklungskosten und -optionen"},
 "Wenn du dich häutest, hast du die Chance, einen Fertigkeitsrang, einen Aspekt oder ein Augment zu kaufen. *Mehr Informationen zu jedem dieser Charaktermerkmale findest du ab S. 100.*",
 "Die Kosten in Nektar sind wie folgt …",
 {t:"ul", x:[
  "Einen Aspekt hinzufügen: 3 Nektar",
  "Ein Augment hinzufügen: 2 Nektar",
  "Einen Fertigkeitsrang erhöhen: Nektar in Höhe des erreichten Rangs (eine Fertigkeit auf Rang 1 kostet 1 Nektar, eine Steigerung von Rang 1 auf Rang 2 kostet 2 Nektar, und eine Steigerung von Rang 2 auf Rang 3 kostet 3 Nektar)."]},
 "Wenn du *viel* Nektar auszugeben hast, kannst du mehrere Optionen gleichzeitig wählen, aber nicht dieselbe Option mehrmals in einer Häutung (du kannst also mit einer einzigen Aufgabe einen Fertigkeitsrang erhöhen, einen Aspekt hinzufügen und ein Augment hinzufügen)."]},

{id:"reisen-einstieg", t:"Reisen: Hinaus in die Welt", p:83, b:[
 "Eine Reise ist eine besondere Art von Szene, in der Käfer von einem Ort zu einem anderen reisen. Du brauchst keine Reise, wenn die Bande nur die Straße entlangläuft oder von einem krabbeligen Haus zu einem nahen Park geht – so ein winziger Ausflug kann komplett außerhalb der Kamera stattfinden und mit einer einzigen Zeile Beschreibung vom Weber glattgebügelt werden.",
 "Nein, Reisen sind für die großen Sachen da – die gefährliche Straße von Siedlung zu Siedlung, die Suche nach einem Dungeon im fernen, dichten Wald oder die Jagd auf ein Raubtier, das die Käfer vor Gericht bringen wollen.",
 {t:"h", x:"Reiseregeln"},
 "Wie Montagen laufen Reisen nach anderen Regeln ab als das übliche Spiel von Moment zu Moment. Zeit und Distanz werden plötzlich wichtig (werden aber weiterhin nur locker gemessen, um den Weber nicht mit zu viel Buchführung zu belasten). Auch Picotitanen haben hier großen Einfluss auf das Spiel: Selbst der neueste Picotitan beschleunigt das Vorankommen auf einer Reise deutlich. *Ein ganzes Kapitel über Picotitanen beginnt auf S. 171.*",
 {t:"h", x:"Rollen"},
 "Es gibt Momente auf einer Reise, in denen die Spieler entscheiden sollen, welcher Käfer eine bestimmte Rolle übernimmt, was meist eine Entscheidung erfordert, die die ganze Bande betrifft.",
 "Wir empfehlen, Rollen gemeinsam demjenigen zuzuweisen, der sie in diesem Moment gern übernimmt. Du könntest es auch dem Weber überlassen oder ein System nach dem Motto „Ich habe es letztes Mal gemacht, also wähle ich dich fürs nächste Mal“ einführen. Alles, was für euren Tisch funktioniert, ist in Ordnung – aber hin und wieder hat der Käfer eines Spielers einen Vorteil oder zwei oder eine Fertigkeit, die ihn für eine bestimmte Rolle besser geeignet machen. Und wenn du Stärken hast, warum solltest du sie nicht nutzen?",
 {t:"h", x:"Licht & Wetter"},
 "Mit den zeitbasierten Mechaniken, die Reisen einführen, kommen Lichtverhältnisse und das aktuelle Wetter ins Spiel (und können in andere Szenen fortbestehen, die während oder nach einer Reise gespielt werden). *Die Regeln zu Licht und Wetter findest du am Ende dieses Kapitels.*"]},

{id:"reisen-grundlagen", t:"Grundlagen des Reisens", p:84, b:[
 {t:"vl", x:"Die Angst, weit weg von zu Hause zu sein, im Gleichgewicht mit der Aufregung über Neues? Das ist für einen Käfer Alltag."},
 "Käfer schließen sich beim Reisen in kleinen Gruppen zusammen, brechen von einem Ort auf und durchqueren die große, gefährliche Welt mit einem bestimmten Ziel vor Augen (meistens jedenfalls – es hat durchaus seinen Wert, von Zeit zu Zeit ziellos herumzuwandern).",
 "Manche tun das zu Fuß, legen riesige Entfernungen im Eilmarsch zurück und halten zum Lagern an, wenn sie müde sind, und grillen leckere Bröckchen über offenem Feuer, während sie mit ihren Freunden Geschichten erzählen. Andere nehmen die schnellere Route, kaufen oder ziehen einen Picotitan auf, auf dem sie reisen – ein riesiges, hilfsbereites Geschöpf, stark genug, ein kleines Käferhaus auf dem Rücken zu tragen, der Gipfel des mobilen Luxus.",
 "*Reisen funktioniert mechanisch ziemlich gleich, ob du einen Picotitan nutzt oder nicht. Aber in der Regel ist Reisen mit einem Titanen schneller und sicherer als allein.*",
 {t:"h", x:"Warum auf Reisen gehen?"},
 "Für manche Käfer ist es das Vernünftigste, innerhalb der sicheren Mauern einer Siedlung zu bleiben – sie sind eben keine Abenteurer-Typen. Sie wollen ein ruhiges Leben mit dem Komfort des Zuhauses und vielleicht einem winzigen Becher Kakao am Ende jedes Tages.",
 "Aber das sind nicht die Käfer, über die PICO dir hilft, Geschichten zu erzählen.",
 "Die Käfer, die du spielst, sind abenteuerlustige Typen – sie haben vielleicht immer noch Angst vor der weiten Welt, aber sie sind bereit, sich dieser Angst zu stellen und hinauszugehen, Anblicke zu sehen und Düfte zu riechen, von denen andere nur träumen können.",
 "Im Grunde sind sie die *Coolen*.",
 "Als abenteuerlustiger Käfer könntest du eine Reise unternehmen, um …",
 {t:"ul", x:[
  "einen neuen Ort zu entdecken",
  "der Routine zu entfliehen",
  "deiner Heimatgemeinde zu helfen",
  "ein großes Rätsel zu lösen",
  "etwas aufregend Neues zu essen zu entdecken",
  "dich selbst herauszufordern",
  "Bedürftigen zu helfen",
  "coole Sachen zu finden",
  "eine Bindung zu deinem Picotitan aufzubauen"]},
 "Reisen in PICO brauchen meist ein Ziel – einen physischen Ort, zu dem man unterwegs ist –, aber manchmal ist es auch in Ordnung, sich mit nichts als einem nebulösen Ziel im Kopf auf die Reise zu machen. Ich schätze, ihr geht dann einfach weiter, bis ihr findet, was ihr wollt!"]},

{id:"reisen-zeit", t:"Zeit & Distanz", p:85, b:[
 "Das sind die zwei wichtigsten Bestandteile einer Reise in PICO – die Distanz, die ihr zurücklegt, und die Zeit, die das dauert. Der Weber behält beides im Blick, aber als Spieler solltest du wahrscheinlich auch wissen, wie sie funktionieren – sie werden für alle sichtbar am Tisch festgehalten (meistens jedenfalls).",
 {t:"h", x:"Schritte"},
 "Die Distanz wird in Schritten gemessen, einer geheimnisvollen Länge, die ein durchschnittlicher Käfer schwer genau beurteilen kann, die aber gut funktioniert, wenn man schätzt, vage Wegbeschreibungen gibt und Seemannsgarn spinnt.",
 "Zu Beginn jeder Reise legt der Weber eine Reiseleiste fest, eine Reihe verbundener Kästchen, die die Distanz darstellen. Ein Kästchen dieser Leiste entspricht der Länge eines Schrittes, und wenn die Käfer sich ins Zeug legen und vorankommen, werden diese Kästchen markiert. Sind alle Kästchen markiert, ist die Reise zu Ende – ihr habt genug Schritte zurückgelegt, um euer Ziel zu erreichen!",
 "Der Weber bestimmt die Länge einer Reiseleiste, indem er wählt, wie viele Kästchen er hinzufügt – je länger die Leiste, desto mehr Schritte müsst ihr zurücklegen und desto weiter entfernt ist euer Ziel! Weil sie offen mitgeführt werden, sollte der Weber ihnen meistens auch einen Namen geben (üblicherweise nach dem Ziel der Reise).",
 {t:"p", x:"*Hier ein Beispiel für eine Reiseleiste, bei der die Käfer bisher drei Schritte zurückgelegt haben … (Leiste „Unterwegs nach Cranipolis“)*"},
 {t:"h", x:"Ticks"},
 "Die Zeit wird in Ticks gemessen, was wunderbar genau wäre, wenn Käfer Taschenuhren mit sich herumtragen würden. Tun sie aber nicht.",
 "Jeder Tag in PICO ist in acht Ticks unterteilt, vier davon am Tag und vier in der Nacht. Zu Beginn einer Reise, sobald er die Reiseleiste festgelegt hat, legt der Weber auch eine tickende Uhr fest – eine physische Darstellung der vergehenden Zeit, gezeigt als Halbkreis über der Reiseleiste und ein weiterer Halbkreis darunter. Die Segmente dieser Halbkreise werden im Uhrzeigersinn markiert, wenn die Zeit vergeht, eines pro Tick, genau wie das Zifferblatt einer sehr vollgekritzelten Uhr.",
 "Bei jedem Sonnenaufgang im Spiel werden die Markierungen der tickenden Uhr gelöscht, und ein neuer Tag beginnt. Manche Vorteile und Spezialfähigkeiten sind bei Licht oder in Dunkelheit stärker, und manche Dinge können nur einmal pro Tag geschehen!",
 {t:"p", x:"*Hier ist dieselbe Reiseleiste von oben, aber mit der tickenden Uhr. Jetzt sind die Käfer fünf Schritte weit auf ihrer Reise, und an der tickenden Uhr erkennen wir, dass es Tag ist – genauer gesagt, später Nachmittag. (Beschriftungen der Uhr: Tag oben, Nacht unten.)*"}]},

{id:"reisen-aktionen", t:"Reiseaktionen", p:86, b:[
 {t:"h", x:"Der Anführer"},
 "Wenn du zum Anführer gewählt wirst, liegt die Macht in deinen Händen! Es ist deine Aufgabe, über die Reiseaktionen zu entscheiden, die deine Käferbande während der Reise ausführt, das Tempo vorzugeben und zu bestimmen, wann es Zeit zum Rasten ist. *Eine Gruppe kann entscheiden, dass eine Reise für die gesamte Dauer einen Anführer hat, dass der Anführer wechselt, jedes Mal wenn sie ein Lager aufschlagen, oder sogar, dass der Anführer wechselt, nachdem der aktuelle Anführer eine einzige Reiseaktion gewählt hat, sodass jeder einmal an der Spitze der Bande steht. Wir empfehlen, vor dem Spiel zu besprechen, wie ihr den Anführer wählt und wie oft diese Rolle den Besitzer wechselt.*",
 {t:"h4", x:"Sobald ihr einen Anführer habt …"},
 "… kann dieser eine Reiseaktion aus der Liste rechts wählen.",
 "Jede Reiseaktion dauert eine bestimmte Zeit (gemessen in Ticks) und deckt eine bestimmte Distanz ab (gemessen in Schritten).",
 {t:"ul", x:[
  "Für jeden Schritt, den sie abdeckt, markiere ein Kästchen auf der Reiseleiste.",
  "Für jeden Tick, den sie dauert, markiere die tickende Uhr."]},
 "Einige dieser Reiseaktionen konzentrieren sich auf Fortbewegung und bringen dich so schnell oder so sicher wie möglich ans Ziel. Andere drehen sich um Rast und Erholung, bieten dir eine kleine Pause von der ständigen Bewegung und lassen die Zeit verstreichen.",
 {t:"h4", x:"Alle anderen"},
 "Was machen also alle anderen, während der Anführer das Tempo vorgibt? Nun, sie sind alle im Ausguck – sie halten die Augen offen (falls sie Augen haben, natürlich) nach interessanten Dingen, denen die Bande auf einer bestimmten Etappe der Reise begegnen könnte. *Mehr zu Ausguckwürfen und Überraschung erfährst du auf S. 88 bis 91.*",
 {t:"h", x:"Tickende Uhren & Schritte machen"},
 {t:"vl", x:"Ach, die offene Straße."},
 "Sobald der Weber eure Reiseleiste und tickende Uhr festgelegt hat, ist es Zeit, voranzukommen! Eure Käferbande kommt, ob auf einem Picotitan reitend oder zu Fuß, als Gruppe voran – allein in eine Welt voller Raubtiere aufzubrechen ist schließlich nicht die klügste Idee! Aber Gruppen können etwas chaotisch werden, wenn alle das Kommando übernehmen wollen, deshalb verlangt PICO, dass die Gruppe zu Beginn einer Reise eine besondere Rolle vergibt – den Anführer.",
 {t:"h", x:"Reiseaktionen"},
 {t:"cards", c:"#008a99", x:[
  {t:"Bummeln", c:"#008a99", b:[
   "Deine Gruppe kommt in gemütlichem Tempo voran und nimmt dabei die Umgebung in sich auf.",
   {t:"dl", x:[["Ausguckwürfe","Ja"],["Überraschung!","Nein"],["Zurückgelegte Distanz","1 Schritt"],["Benötigte Zeit","1 Tick"]]}]},
  {t:"Marschieren", c:"#008a99", b:[
   "Ihr bewegt euch zügig und ernsthaft und kommt in überraschend kurzer Zeit gut voran.",
   {t:"dl", x:[["Ausguckwürfe","Ja"],["Überraschung!","Ja"],["Zurückgelegte Distanz","2 Schritte"],["Benötigte Zeit","1 Tick"]]}]},
  {t:"Warten", c:"#008a99", b:[
   "Ihr bleibt an einem Ort und bleibt wachsam.",
   {t:"dl", x:[["Ausguckwürfe","Ja"],["Überraschung!","Nein"],["Zurückgelegte Distanz","Keine"],["Benötigte Zeit","1 Tick"]]}]},
  {t:"Lagern", c:"#008a99", b:[
   "Deine Gruppe macht eine Verschnaufpause und schlägt ein Lager auf, wodurch eine Montage beginnt (Details ab S. 69). Alle Käfer können wie gewohnt eine Aufgabe aufwenden, oder beliebig viele Käfer können ihre Aufgabe darauf verwenden, *im Ausguck* zu sein. Wenn kein Käfer im Ausguck ist, werdet ihr von jedem Besucher oder Ereignis überrascht. Wenn Käfer im Ausguck sind, werdet ihr nicht überrascht.",
   {t:"dl", x:[["Ausguckwürfe","Vielleicht"],["Überraschung!","Vielleicht"],["Zurückgelegte Distanz","Keine"],["Benötigte Zeit","2 Ticks"]]}]}]}]},

{id:"reisen-fortschritt", t:"Vorankommen", p:87, b:[
 {t:"h", x:"Vorankommen"},
 "Sowohl Bummeln als auch Marschieren lassen eure kleine Käferbande auf einer Reise vorankommen und tauschen etwas Zeit und Mühe gegen Markierungen auf der Fortschrittsleiste (Reiseleiste).",
 "Aber welche solltet ihr nehmen? Das hängt sehr von der Situation und von dem Erlebnis ab, das ihr euch von eurer Reise wünscht.",
 "Bummeln ist die sicherste Art voranzukommen, aber nicht gerade schnell. Ihr legt einen Schritt auf einmal zurück; großartig, um Kuriositäten und Gelegenheiten am Wegesrand zu entdecken, weniger großartig, wenn ihr unter Zeitdruck steht. Der größte Vorteil des Bummelns ist die Möglichkeit zu wählen, wie (oder sogar ob) ihr euch auf das einlasst, was ihr antrefft – eine Belohnung dafür, es langsam anzugehen.",
 "Marschieren ist das Gegenteil des Bummelns: Ihr bewegt euch schnell, bezahlt das aber mit mehr Gefahr. Zwei Schritte auf einmal bringen euch schneller ans Ziel und bedeuten auch weniger Begegnungen unterwegs. Leider heißt das Tempo, das ihr haltet, dass ihr in manche dieser Begegnungen wahrscheinlich mitten hineinplatzt, weil ihr keine Zeit habt, euch vorzubereiten oder um den Rand des Geschehens herumzuschleichen. *Das wird auf S. 91 unter der Überschrift „Überraschung!“ genauer behandelt – aber zuerst musst du auf der nächsten Seite die Ausguckwürfe kennenlernen.*",
 {t:"bsp", h:"Reiseaktionen-Beispiel", b:[
  ["Weber","Das Innere des Schattenhauses ist dunkel und kühl, fast immer. Ihr seht euer Ziel in der Ferne, die Tür zur Küche, aber es wird ein langer Weg. Ich lege die Reiseleiste auf 8 Kästchen fest."],
  ["Layla","Uff, das ist ein ziemlicher Marsch. Wir sollten uns beeilen, besonders wenn wir bis zur morgigen Morgendämmerung dort sein wollen. Wer führt uns?"],
  ["Dunf","Ooh, nicht ich! Ich will die Umgebung im Auge behalten, mir gefällt es hier."],
  ["Swift","Ich übernehme die Führung, wenn niemand etwas dagegen hat."],
  ["Weber","Sieht nicht so aus! Also gut, Swift, du bist an der Spitze der Bande – welches Tempo schlägst du an?"],
  ["Swift","Es ist verlockend zu marschieren – wir wollen schließlich zu einer bestimmten Zeit an der Küchentür sein –, aber wir fangen etwas langsamer an. Bummeln, würde ich sagen, damit wir nicht überrascht werden."],
  ["Weber","Bummeln also! Ich markiere einen Schritt auf der Reiseleiste und ein Segment der tickenden Uhr. Alle anderen, macht eure Würfel bereit für ein paar Ausguckwürfe!"]]},
 {t:"h", x:"Reisen per Titan"},
 "Auf Reisen kommen Picotitanen so richtig zur Geltung.",
 "Wenn deine Käferbande Zugang zu einem freundlichen Picotitan hat, ist das Durchqueren weiter Strecken sowohl schneller als auch sicherer. Das Geschöpf selbst kann sich schneller durchs Gelände bewegen als selbst die flinksten Käfer (und sei es nur wegen des Unterschieds in Größe und Schrittlänge), und wenn auf seinem Rücken ein Titanenbau errichtet ist, hast du einen soliden, sicheren Ort zum Lagern, wenn es Zeit zum Rasten oder Schlafen ist. Manche Picotitanen haben sogar besondere Vorteile, die das Reisen noch einfacher machen!",
 "Die meisten Einzelheiten heben wir uns für das Picotitanen-Kapitel ab S. 171 auf, aber zwei Regeln sind schon jetzt wichtig …",
 {t:"h4", x:"Picotitanen sind schnell!"},
 "Auf einem Picotitan zu reiten lässt Käfer in beeindruckendem Tempo Strecke machen. Wenn du die Reiseaktion Bummeln oder Marschieren wählst, kann der Anführer entscheiden, ob eure Bande auf dem Picotitan reitet oder nicht. Falls ja, könnt ihr …",
 {t:"ul", x:[
  "die Zahl der Schritte, die ein Bummeln abdeckt, auf 2 erhöhen",
  "die Zahl der Schritte, die ein Marschieren abdeckt, auf 4 erhöhen"]},
 "Was heißt das? Reisen gehen schneller und mit weniger Unterbrechungen – ganz einfach!",
 {t:"h4", x:"Titanenbauten sind sicher!"},
 "Was könnte besser für eine gute Rast sorgen als ein weiches Bett auf dem Rücken eines freundlichen Titanen? Wenn du die Reiseaktion Warten oder Lagern wählst, kann der Anführer entscheiden, ob eure Bande den Titanenbau eines Picotitans nutzt. Falls ja, könnt ihr …",
 {t:"ul", x:[
  "sicherstellen, dass ihr nicht von einem Ereignis oder einer Gefahr überrascht werden könnt, da euer Picotitan es bemerkt und euch warnt"]},
 "Was heißt das? Im Grunde, dass kein Käfer als Ausguck eingeteilt sein muss, um eine Überraschung zu verhindern."]},

{id:"reisen-ausguck", t:"Im Ausguck", p:88, b:[
 "Was, du dachtest, der Anführer hätte den ganzen Spaß?",
 "Wenn ihr auf einer Reise bummelt, marschiert oder wartet, ist jeder Käfer, der nicht der Anführer ist, im Ausguck. Das heißt, er hält die Augen offen nach allem, was nützlich, interessant oder potenziell gefährlich sein könnte – so findet man in der Welt von PICO Freunde, Feinde und Zufälle, während man unterwegs ist. Mechanisch gesehen macht jeder Käfer im Ausguck einen Ausguckwurf, wenn der Anführer die Reiseaktion Bummeln, Marschieren oder Warten für die Gruppe wählt.",
 {t:"p", x:"*Beispiel: Kale, Inigo und Melody sind drei Käfer, die durch das raue Gelände des Hogwild reisen. Kale übernimmt die Position des Anführers, also trifft er die Entscheidungen, ob sie bummeln, marschieren, warten oder lagern. Inigo und Melody sind dann im Ausguck, während sie alle reisen, also liegt es an ihnen, beim Vorankommen Wache zu halten. Als Kale sich entscheidet, in einen Marsch zu wechseln, damit sie ihr Ziel etwas schneller erreichen, machen Inigo und Melody beide einen Ausguckwurf, um zu sehen, was ihnen unterwegs begegnet.*"},
 "Ausguckwürfe werden automatisch gemacht, wenn eine Käferbande bummelt, marschiert oder wartet. Wenn ihr auf einer Reise die Aktion Lagern wählt, kann ein Käfer eine Aufgabe aufwenden, um in den Ausguck zu gehen (was ihm einen Wurf erlaubt), aber das ist nicht verpflichtend. Stell dir den Ausguck beim Lagern wie eine Wache vor: Die anderen können sich um persönliche Dinge kümmern, während du die Augen nach Gefahr offen hältst.",
 {t:"h", x:"Ausguckwürfe"},
 "Jeder Käfer, der in den Ausguck geht, würfelt 2W6 – den Ausguckwurf. Die Ergebnisse dieses Wurfs bestimmen, was dieser Käfer bemerkt, während seine Bande sich bewegt oder rastet.",
 {t:"ul", x:[
  "Wenn die Ergebnisse dieses Wurfs zwei verschiedene Zahlen sind, hast du nichts entdeckt. Jedenfalls nichts, worüber es sich zu reden lohnt – vielleicht siehst du hübsche Landschaft oder ziehende Wolken, aber nichts, das mehr als etwas Geplauder wert wäre. Aber …",
  "Wenn die Ergebnisse dieses Wurfs ein Pasch sind, egal mit welchem Wert, hast du etwas Interessantes entdeckt! Du kannst auf der Tabelle rechts nachsehen, was genau du gesehen hast, aber es führt wahrscheinlich zu einer Begegnung oder Wahl (Einzelheiten auf S. 90)."]},
 "Denk daran: Ausguckwürfe werden von jedem anderen Käfer immer gemacht, wenn ein Anführer die Reiseaktion Bummeln, Marschieren oder Warten wählt, sind aber bei der Aktion Lagern optional (der Lagernde muss dafür seine Montageaufgabe aufwenden).",
 {t:"h4", x:"Besondere Sinne"},
 "Manche Käfer sind bei Ausguckwürfen besser als andere, würfeln zusätzliche Würfel oder gewinnen bei bestimmten Ergebnissen zusätzliche Informationen. Einige können sogar zusätzliche Handlungen ausführen, wenn sie im Ausguck sind, etwa ein Bröckchen verputzen, um etwas zu heilen, ohne dass es sie von ihrer Umgebung ablenkt. Aber denk daran: Selbst wenn dein Käfer im Ausguck besonders geschickt ist, kannst du zur Abwechslung von Zeit zu Zeit trotzdem die Position des Anführers übernehmen. Nischen sind gut, aber persönliche Wahl auch!",
 {t:"d6", h:"Ausguckergebnisse (Pasch)", rows:[
  "**Doppelt 1 – Eine drohende Gefahr:** Etwas Böses naht – eine rivalisierende Käferbande, ein Tier aus der Wildnis, ein gefährlicher Teil der Landschaft oder vielleicht sogar ein Titan!",
  "**Doppelt 2 – Ein NSC:** Es gibt mehr Käfer in der Wildnis als Sterne am Himmel, und du bist gerade wahrscheinlich einem davon begegnet. *Es könnte aber auch ein Tier sein …*",
  "**Doppelt 3 – Ein Wetterwechsel:** Klarer Himmel hält selten an – ein Sturm zieht auf (oder ein Orkan, ein Erdbeben oder irgendein anderer seltsamer Wettereffekt). *Eine Liste der Wettertypen findest du auf S. 95.*",
  "**Doppelt 4 – Ein laufendes Ereignis:** Käfer haben die Angewohnheit, in Situationen zu geraten, die sie eigentlich nichts angehen sollten.",
  "**Doppelt 5 – Ein Haufen Zeug:** Bröckchen, Krimskrams und Materialien in Hülle und Fülle! Ein ausgezeichneter Ort, um zufälliges (aber nützliches) Zeug aufzusammeln.",
  "**Doppelt 6 – Ein unerwartetes Wahrzeichen:** Eine Ruine, eine Behausung oder ein Wunder der Natur – wer weiß, was ihr gefunden habt! *Zum Glück weiß es der Weber.*"]}]},

{id:"reisen-ausguck-beispiel", t:"Ausguckwürfe-Beispiel", p:89, b:[
 {t:"bsp", h:"Ausguckwürfe-Beispiel", b:[
  ["Bicco","Also, Ausguckwürfe … wie funktionieren die noch mal?"],
  ["Weber","Nun, Swift ist im Moment der Anführer eurer Bande, also muss er keinen machen. Alle anderen nehmen 2W6 und suchen nach einem Pasch."],
  ["Dunf","Und ein Pasch bedeutet, dass es etwas gibt, auf das wir uns einlassen können, richtig? Wie eine Begegnung oder so?"],
  ["Weber","Nun, technisch ja – es bedeutet, ihr habt etwas *gesehen*, auf das ihr euch einlassen könnt. Es könnte aber mehr vor sich gehen, als ihr bemerkt. Und da ihr bummelt und somit nicht überrascht werden könnt, habt ihr die Wahl, euch einzulassen oder nicht … Aber das müsst ihr selbst entscheiden."],
  ["Bicco","Verstanden! Dann nehme ich meine 2W6."],
  ["Dunf","Ja, ich bin auch bereit. Layla?"],
  ["Layla","Nun, ohne anzugeben: Ich würfle tatsächlich 3W6 für meinen Ausguckwurf! Ich habe den Aspekt Vieläugig, der mich einen zusätzlichen Würfel werfen und dann zwei zum Behalten wählen lässt. Aber ja, ich bin bereit – los geht's!"]]}]},

{id:"reisen-begegnungen", t:"Begegnungen & Wahlen", p:90, b:[
 "Nachdem ihr eure Ausguckwürfe gemacht habt, ist es Aufgabe des Webers, diese Ergebnisse in die Fiktion des Spiels einzubinden. Manche Etappen einer Reise vergehen ohne Zwischenfall, andere erfordern eine Wahl, und bei den aufwendigsten stellt der Weber die Käfer vor eine Begegnung irgendeiner Art. *Den Part des Webers bei Reisen behandeln wir auf S. 92 – keine Sorge, wir haben euch nicht vergessen.*",
 "Wenn ein Teil einer Reise ohne Zwischenfall vergeht – ohne Pasch beim Ausguckwurf und ohne zusätzliche Elemente vom Weber –, markiert ihr einfach, was auf der Reiseleiste und der tickenden Uhr zu markieren ist, und wählt eine weitere Reiseaktion, wenn noch Strecke vor euch liegt. Aber das Leben ist selten so einfach, besonders wenn Päsche gewürfelt werden …",
 {t:"h", x:"Wahlen"},
 "Manchmal veranlasst ein Ausguckergebnis den Weber, deiner Gruppe eine Wahl zu geben. Das kann einen Käfer, die gesamte Käferbande oder die weitere Erzählung betreffen und kann von allen am Tisch oder von einer einzelnen Person entschieden werden (was auch immer für den Moment passt). Eine Wahl auf einer Reise könnte etwa so aussehen …",
 {t:"p", x:"*Beispiel: Luther hat bei seinem Ausguckwurf eine doppelte 6 geschafft, was bedeutet, dass er „ein unerwartetes Wahrzeichen“ entdeckt hat. Der Weber sieht darin eine gute Gelegenheit, Luther eine persönliche Wahl zu geben – entweder enthüllt das Wahrzeichen etwas Beunruhigendes (aber Nützliches) über das Gebiet, durch das sie reisen, oder die Zerstörung des Wahrzeichens verschafft der Bande einen hochwertigen Brocken Ressourcen, mit denen sie ihren Picotitan verbessern könnte. Das gibt Luthers Spieler im Grunde die Chance, entweder einen garantierten Vorteil zu nehmen (mit einem Hauch asozialen Verhaltens) oder eine nebulösere Information, die ihnen später helfen könnte.*"},
 "Manche Wahlen gehen zwischen zwei vorteilhaften Zuständen, andere zwischen zwei negativen Ergebnissen. Manche sind sogar eine Wahl zwischen einer sofortigen und einer künftigen Belohnung. Das Wichtige an diesen Wahlen ist, dass sie anstelle einer Begegnung getroffen werden – was auch immer entdeckt wurde, sollte nach der Wahl nicht weiter untersucht werden.",
 {t:"h", x:"Begegnungen"},
 "Komplexer als Wahlen ist eine Begegnung im Grunde eine kleine Szene, die abläuft, bevor die nächste Reiseaktion gewählt werden kann. Sie kann Aktionswürfe, das Beschaffen von Ressourcen, das Bewältigen von Herausforderungen oder sogar das Bestehen von Gefahren umfassen – eine Begegnung kann alles sein, was mit dem Entdeckten zu tun hat (oder mit zusätzlichen Elementen, die der Weber hinzufügt). Spulen wir die Zeit ein Stück zurück und sehen uns dasselbe Beispiel an, aber diesmal als Begegnung statt als Wahl …",
 {t:"p", x:"*Beispiel: Luther hat bei seinem Ausguckwurf eine doppelte 6 geschafft, was bedeutet, dass er „ein unerwartetes Wahrzeichen“ entdeckt hat. Der Weber sieht darin eine gute Gelegenheit, der Gruppe eine Begegnung zum Meistern zu geben – das entdeckte Wahrzeichen, eine Miniaturburg aus Blechdosen und Draht, wird wirkungslos von einer schlafenden Termite mit einem schlecht sitzenden Hut bewacht. Die Gruppe könnte beschließen, einfach weiterzubummeln, die Termite mit Fragen zu wecken, die Burg zu stürmen und auf Reichtümer im Inneren zu hoffen, oder einen von hundert anderen Ansätzen, die ihr einfallen. Der Weber hat die Situation dargestellt, und es liegt an ihnen zu entscheiden, wie sie handeln und wie viel erzählerisches Gewicht sie dem geben, was sie gefunden haben.*"},
 "Begegnungen sind ihrer Natur nach offen und enthalten meist mögliche Vorteile und Nachteile. Sie können schnell vorübergehen oder, wenn sich die Käfer richtig in eine Situation vertiefen, einen ordentlichen Teil der Sitzung einnehmen.",
 {t:"h4", x:"Wahl-/Begegnungstheorie"},
 "Was ist das, ein Exkurs über Spieldesign? Nicht ganz – eher ein Hinweis, wie man Wahlen und Begegnungen in einer Sitzung am besten einsetzt, für Weber und Käfer gleichermaßen. Wahlen auf einer Reise ähneln im Umfang ein wenig Montagen: Sie verdichten das, was sonst eine Begegnung wäre, auf ein paar Sätze Hin und Her, was großartig ist, um das Tempo des Spiels hoch zu halten, wenn das nötig ist. Begegnungen sind eher wie Szenen, in denen man durch Kreativität viel erreichen kann, aber längere Wortwechsel können ziemlich viel echte Zeit beanspruchen. Der Weber kann Wahlen und Begegnungen nutzen, um den Fluss einer Reise zu steuern, und kann sogar je nach Interesse der Gruppe an bestimmten Elementen der Welt oder je nachdem, ob sie ein zeitkritisches Ziel hat, anpassen, was er anbietet."]},

{id:"reisen-einlassen", t:"Lasst ihr euch darauf ein?", p:91, b:[
 "Eine wichtige Frage. Wenn der Weber euch eine Begegnung präsentiert, müsst ihr eine wichtige Entscheidung treffen – oder, genauer gesagt, ihr *müsst* vielleicht eine wichtige Entscheidung treffen.",
 "Wenn ihr bummelt, wartet oder mit jemandem im Ausguck lagert, haben die Käfer oft die Chance zu entscheiden, wie sie sich auf ein entdecktes Element einlassen, oder sogar, ob überhaupt! Sie haben es schließlich aus der Ferne gesehen – sie haben Zeit, sich vorzubereiten und es vielleicht ganz zu meiden.",
 "Aber beim Marschieren oder beim Lagern ohne Ausguck ist jedes neu eingeführte Element eine Überraschung – die Käfer sind entweder direkt in etwas hineingeplatzt oder haben einen unerwarteten Besucher am Lagerplatz und sind gezwungen, sich darauf einzulassen.",
 {t:"h", x:"Überraschung!"},
 "Wenn Käfer keine Zeit haben, sich vorzubereiten, oder auf dem falschen Fuß erwischt werden, befinden sie sich kurzzeitig in einem Zustand namens Überraschung. Manche Gefahren haben besondere Vorteile, die nur aktiv werden, wenn sie das Überraschungsmoment auf ihrer Seite haben.",
 "Es funktioniert aber auch in beide Richtungen! Wenn die Käfer vorbereitet sind und wählen können, wie sie sich auf ein entdecktes Element einlassen, können sie sich entscheiden, selbst das Überraschungsmoment zu nutzen – mit einem dramatischen Auftritt!",
 "Das Überraschungsmoment zu haben kann deine Wucht erhöhen, dir zusätzliche Würfel auf einen Aktionswurf geben oder dir erlauben, etwas zu erreichen, was normalerweise nicht möglich wäre, wenn Augen auf dich gerichtet sind. Aber Überraschung hält nur für eine einzige Handlung an, also nutze sie voll aus.",
 {t:"h4", x:"Aber was ist die Rolle des Webers?"},
 "Wenn du Spieler bist, kannst du die nächsten zwei Seiten überspringen; sie drehen sich darum, was der Weber auf einer Reise tut, damit alles möglichst reibungslos läuft."]},

{id:"reisen-weber", t:"Die Rolle des Webers", p:92, b:[
 "Sobald die Ergebnisse der Ausguckwürfe da sind, geht das Rampenlicht an den Weber über. Er hat jedes Mal, wenn eine Reiseaktion gewählt wird und Ausguckergebnisse eintreffen, zwei Aufgaben, wobei die erste optional (besondere Ergebnisse hinzufügen) und die zweite verpflichtend (den Fortschritt beschreiben) ist. Wie man beides macht, packen wir jetzt an!",
 {t:"h", x:"Besondere Ergebnisse hinzufügen"},
 "Ausguckwürfe zeigen hervorragend, was Käfer entdeckt haben, aber das ist nicht die ganze Geschichte. Die Welt von PICO ist eine lebendige, atmende (manchmal wortwörtlich), in der weit mehr vorgeht, als selbst die schärfsten krabbeligen Augen oder die zittrigsten Fühler jemals erfassen könnten.",
 "Um das darzustellen, kann der Weber in jedem Reiseabschnitt ein oder mehrere besondere Ergebnisse hinzufügen: Dinge, die in der Welt geschehen (und die die Bande beim Vorankommen wahrscheinlich beeinflussen), die die Ausgucke aber bei ihrem ersten Rundblick vielleicht nicht bemerkt haben. Diese Ergebnisse können rein zufällig oder im Geheimen, halbzufällig nach der örtlichen Wahrscheinlichkeit oder völlig ohne Zufall mit dem Ziel hinzugefügt werden, eine sich entfaltende Geschichte zu erzählen.",
 {t:"h4", x:"Geheime und zufällige Ergebnisse hinzufügen"},
 "Das ist besonders nützlich, wenn die reisende Käferbande klein ist (an Zahl – wir gehen davon aus, dass sie ohnehin klein an Größe ist). Wenn nur ein oder zwei Käfer Ausguckwürfe machen, tauchen Päsche seltener auf, und ein paar zusätzliche Ergebnisse helfen, Reisen weniger leer wirken zu lassen.",
 "Um geheime zufällige Ergebnisse hinzuzufügen, würfle einfach heimlich einen W6 (wenn du einen Spielleiterschirm hast, ist das der perfekte Moment, ihn zu benutzen) und behandle das Ergebnis als Pasch dieser Zahl, dann sieh wie gewohnt in der Ausguckergebnis-Tabelle nach.",
 {t:"p", x:"*Beispiel: Ein krabbeliges Duo macht sich durch die verwüsteten Ebenen der Skyglass Dome auf den Weg. Mit nur einem Anführer und einem Ausguck werden sie nicht so oft Päsche würfeln, aber der Weber würfelt für jede ihrer Aktionen Bummeln und Marschieren einen zusätzlichen zufälligen W6, was ihnen mehr mögliche Begegnungen gibt, auf die sie sich einlassen können. Sie bemerken vielleicht nicht immer, was in der Nähe geschieht, aber es bemerkt sie ganz sicher!*"},
 {t:"h4", x:"Ergebnisse nach örtlicher Wahrscheinlichkeit hinzufügen"},
 "Manche Gegenden enthalten bestimmte Begegnungen mit größerer Wahrscheinlichkeit – Tiere draußen in der Wildnis, NSC und drohende Gefahren in den nächtlichen Straßen einer gefährlichen Käfertropolis.",
 "Wenn du mehr Ausguckergebnisse anregen willst, die zur Gegend passen, kannst du eine einzelne „schwebende Zahl“ von 1 bis 6 wählen und hinzufügen, die zu allen Ausguckwürfen hinzugerechnet wird. Diese schwebende Zahl kann als Teil eines Paschs gelten, wenn sie mit einem der natürlich gewürfelten Ergebnisse übereinstimmt.",
 {t:"p", x:"*Beispiel: Onios Bande reist durch den tiefen Wald und bahnt sich ihren Weg zwischen Haufen herabgefallener Herbstblätter. Der Weber entscheidet, dass die Gegend, durch die sie reisen, ein wahrer Schatzkasten potenzieller Ressourcen ist (auch wenn sie meist unter den Blättern verborgen sind), und fügt allen in der Gegend gemachten Ausguckwürfen eine schwebende 5 hinzu. Das erhöht die Wahrscheinlichkeit eines Doppel-5-Paschs erheblich und macht das Ausguckergebnis „Ein Haufen Zeug“ weit leichter zu erzielen.*"},
 {t:"h4", x:"Sich entfaltende Geschichte hinzufügen"},
 "Besonders nützlich für Gruppen, die weniger auf Zufall stehen und einen starken erzählerischen Antrieb haben. Das ist im Grunde nur eine aufgehübschte Art, dem Weber zu erlauben, genau zu entscheiden, was jede Etappe einer Reise bringt, ohne sich auf die Würfel zu verlassen – ausgezeichnet, wenn er eine bestimmte Geschichte erzählen will.",
 "Wichtig ist, sich zu merken, dass die vom Weber gewählten, geschichtsbasierten Begegnungen die Ausguckwürfe nicht vollständig *ersetzen*, sondern von ihnen *gefärbt* werden.",
 {t:"p", x:"*Beispiel: Lyra und ihre Gefährten sind einer Horde Bestienmäuse auf der Spur, barbarischen Nagern, die durch eine Reihe kleiner Insektengemeinden wüten. Auf einer Reise, um sie einzuholen, finden Ausguckwürfe wie gewohnt statt, aber der Weber hat auch ein paar vorbereitete Begegnungen, Wahrzeichen und Wahlen, die er untermischen möchte. Sie helfen den Käfern, unterwegs Informationen über die Bestienmäuse zu sammeln, und halten den Fluss der Erzählung stimmig und das aktuelle Ziel der Gruppe im Vordergrund des Spiels.*"}]},

{id:"reisen-fortschritt-beschreiben", t:"Fortschritt beschreiben", p:93, b:[
 "Sobald der Weber weiß, was entdeckt wurde (durch eine Kombination aus Ausguckwürfen und allen von ihm hinzugefügten geheimen Ergebnissen), ist es seine Aufgabe, den Fortschritt der Gruppe zu beschreiben. Das wird teils von der Umgebung bestimmt, durch die sich die Käfer bewegen – vielleicht ein Dickicht mitten in einem Wald oder ein ausgetrocknetes Flussbett – und teils von den soeben gewürfelten Ergebnissen. So hat der Weber die Gelegenheit, neue Situationen oder Herausforderungen einzuführen, denen eine reisende Bande begegnen könnte, und kombiniert dabei die mechanischen Ergebnisse von Würfelwürfen, die Fiktion der Welt und eine ordentliche Portion kommender Spielerentscheidung (ob die Käfer sich auf das einlassen, was sie finden, was auf der nächsten Seite behandelt wird).",
 "Wenn du neu im Spielleiten bist, klingt das vielleicht heftig. Keine Sorge – wir schlüsseln es unten für dich auf.",
 {t:"ul", x:[
  "Wenn bei einer Runde Ausguckwürfe nichts entdeckt wurde, hat der Weber freie Hand, alles einzuführen, was ihm gefällt – oder zu sagen, dass ein Abschnitt der Reise ohne Zwischenfall vergangen ist.",
  "Wenn ein Ausguck etwas entdeckt hat, kann der Weber das Element genauer beschreiben, und die Spieler entscheiden, ob sie sich auf das Gefundene einlassen wollen oder daran vorbeiziehen. Sich einzulassen kann alles erfordern, von einer einfachen Entscheidung bis zu einer ganzen Szene, die gespielt wird, bevor die Reise weitergeht.",
  "Wenn mehrere Ausgucke etwas entdeckt haben, fasst der Weber die Ergebnisse zu einem einzigen Element zusammen – die Käfer treffen dann eine Wahl, ob sie sich darauf einlassen oder nicht (doppelte Ergebnisse können bedeuten, dass mehrere Käfer dasselbe entdeckt haben oder dass es in der Nähe mehrere Exemplare dieser Sache gibt)."]},
 {t:"p", x:"*Beispiel: Der Weber beschreibt, wie die Bande durch die Höhlung eines uralten, umgestürzten Baumes zieht. Einer der Käfer im Ausguck würfelt eine 6, um etwas Interessantes zu entdecken, und dann eine 3 auf der Ausguckergebnis-Tabelle – ein Wetterwechsel. Der Weber beschreibt, wie die Käfer sehen können, dass die Blätter über ihnen zu rascheln beginnen und dann fallen; ein Sturm braut sich zusammen, aber vorerst sind sie hinter den hölzernen Zinnen des umgestürzten Baumes sicher. Sobald sie aber nach draußen gehen …*"}]},

{id:"reisen-wetter", t:"Wetter", p:94, b:[
 {t:"vl", x:"Ruhige Himmel von Stürmen gekreuzt, für jeden Himmel ein Sturm. Verzeihung, Stille. Mist. Das habe ich verpatzt."},
 "Von Wind bis Regen, von Hitze bis Kälte: Das Wetter der Welt richtet bei winzigen Geschöpfen Verwüstung an. Wenn Regentropfen so groß wie dein Kopf sind, ist Schutz zu finden nicht nur eine Frage des Komforts, sondern des Überlebens.",
 {t:"h", x:"Das Wetter bestimmen"},
 "Drei verschiedene Kräfte können das Wetter in der Welt von PICO ändern …",
 {t:"ul", x:[
  "**Die Ergebnisse eines Ausguckwurfs:** Ein Ausguckwurf mit Doppel-3 zeigt eine Änderung des Wetters an, das die Käfer gerade erleben, aber vielleicht eine, der sie durch Unterschlupf ausweichen können (besonders wenn sie nicht überrascht sind). *Denk daran: Das Ausguckergebnis kann das Wetter zum Besseren oder Schlechteren ändern, aber es gibt einige Spezialfähigkeiten in diesem Buch, die den Spielern etwas mehr Kontrolle geben.*",
  "**Das Betreten eines Mikroklimas:** Einige der Reiche in Kapitel 11 dieses Buches haben besondere Regeln für das Wetter (und für Licht und Dunkelheit, die wir auf der nächsten Seite behandeln). *Ein Ort direkt unter einer Sprinkleranlage könnte zum Beispiel immer regnerisch sein.*",
  "**Durch den Willen des Webers:** Manchmal ändert sich der Himmel einfach. Der Weber kann jederzeit einen neuen Wettertyp ins Spiel bringen (oder einen bestehenden beenden). *Er könnte das tun, um einer sonst gewöhnlichen Begegnung eine Ebene Herausforderung zu geben, die Spannung zu steigern oder etwas Donner-und-Blitz-Drama einzubauen … oder einfach, weil nach ein paar Tagen Regen alle am Tisch Lust auf sonnigen Himmel haben.*"]},
 {t:"h", x:"Wetter und Stimmung"},
 "Die Stimmung eines Käfers (S. 156) wird oft vom Wetter beeinflusst – wann immer ein neues Wettersystem ins Spiel kommt, kann der Weber jeden Käfer der Bande mit einem positiven oder negativen Stimmungszug treffen. Die Richtung des Zuges ist aber nicht fest vorgegeben – ein Regensturm zieht die Stimmung normalerweise ins Negative, aber wenn er nach Tagen sengender Hitzewelle kommt, kann er eine positiv ziehende Erleichterung sein!"]},

{id:"reisen-wettersysteme", t:"Wettersysteme", p:95, b:[
 "Wenn ein neuer Wettertyp ins Spiel kommt, bringt er meist einige Sonderregeln mit. Jedes Wettersystem hat ein paar verschiedene Regeln, die ein Weber verwenden kann (außer Ruhiger Himmel, wie du unten sehen wirst), um die mechanischen Auswirkungen auf Szenen, Montagen und Reisen darzustellen. Sie sind in positive und negative Effekte (+ und –) aufgeteilt, und manche Käfer haben das Glück, den negativen Seiten verschiedener Wettertypen ganz zu entgehen.",
 "Wenn sich also der Himmel ändert, muss sich eine Käferbande vielleicht mit Folgendem auseinandersetzen …",
 {t:"cards", c:"#3b413f", x:[
  {t:"Regensturm", b:[
   "Der Himmel öffnet sich und der Regen prasselt herab, während sich der Himmel mit dunklen Wolken füllt, die nie mehr weichen zu wollen scheinen.",
   {t:"dl", x:[
    ["Flüssiges Mittagessen (+)","Behandle Desaster als Konflikte beim Sammeln flüssiger Bröckchen und Krimskramsstücke."],
    ["Durchnässt (–)","Eine Szene, eine Montage oder zwei Schritte einer Reise im Regen zu verbringen zieht die Stimmung ins Negative."],
    ["Wolkendecke (–)","Die Welt versinkt in Dunkelheit, selbst wenn es technisch gesehen Tag sein sollte."],
    ["Nasser Boden (–)","Das Reisen wird schwieriger – die Reiseaktionen Bummeln und Marschieren fügen der tickenden Uhr beide einen zusätzlichen Tick hinzu. In Szenen und Montagen erleiden alle bewegungsbasierten Aktionen einen Härte-Abzug von 1."]]}]},
  {t:"Kälteeinbruch", b:[
   "Der Atem bildet Nebel in der Luft, Wasser gefriert, und alles beginnt sich zu verlangsamen.",
   {t:"dl", x:[
    ["Erstarrung (–)","So … ver… dammt … langsam … Alle Aktionen zum Bewegen oder Angreifen erleiden einen Tempo-Abzug von 1."],
    ["Zu kalt zum Lagern (–)","Selbst mit einem Zelt oder Titan zum Ausruhen schneidet der Wind wie ein Messer. Du kannst die Aktionen Warten oder Lagern nur ausführen, wenn eine Wärmequelle in der Nähe ist."],
    ["Frost (–)","Der Name sagt es ja schon. Jedes flüssige Bröckchen oder Krimskrams, das du hast, erhält ein neues Etikett, *Gefroren*. Es dauert einen ganzen Tag (8 Ticks), bis es nach dem Ende des Kälteeinbruchs aufgetaut ist."]]}]},
  {t:"Sporenado", b:[
   "Ein Gestöber aus Wachstum, Grün, Pollen und Samen.",
   {t:"dl", x:[
    ["Kraft des Landes (+)","In einem Sporenado wächst alles besser. Zähle Desaster als Konflikte beim Sammeln pflanzlicher oder pilziger Bröckchen und Krimskramsstücke."],
    ["Dicke Luft (–)","Wenigstens sind sie nicht parasitär! Erleide einen Tarn-Abzug von 1 bei allen Aktionen, die davon abhängen, weiter als die Länge eines Bleistifts sehen zu können."]]}]},
  {t:"Hitzewelle", b:[
   "Die Luft ist schwül, schwer und schwer zu durchdringen. Eine gute Zeit zum Ausruhen, eine schlechte zum Laufen.",
   {t:"dl", x:[
    ["Angenehm im Schatten (+)","Die Reiseaktion Warten leert für jeden Käfer der Gruppe ein Herz auf einer beliebigen Herzleiste, solange ihr einen Picotitan oder ein natürliches Merkmal der Landschaft habt, das Schatten spendet."],
    ["Schleppende Füße (–)","Es ist schwer, sich zu bewegen. Die Reiseaktion Marschieren verursacht allen Käfern Gigabrutzeln-Schaden."],
    ["Einfach zu heiß (–)","Nachdem du eine Szene in einer Hitzewelle verbracht hast, würfle für jedes flüssige Bröckchen oder Krimskrams, das du hast, einen W6. Bei einer 1 ist dieses Bröckchen oder Krimskrams ins Nichts verdunstet und völlig verloren."]]}]},
  {t:"Orkan", b:[
   "Die Winde frischen auf und erreichen Geschwindigkeiten, die für ein leichtes, winziges Geschöpf wie einen Käfer furchterregend sind.",
   {t:"dl", x:[
    ["HOPP HOPP! (+)","Der Wind weht genau richtig. Bummeln und Marschieren decken einen Schritt mehr ab als üblich, und alle Aktionen zum Fliegen, Springen oder Fallen erhalten immer 1W6 Vorteil von der Umgebung."],
    ["Seitenwinde (–)","Hin und her, hin und her – die Böen sind unberechenbar und lästig. Alle Aktionen, die Konzentration und Präzision erfordern, erleiden einen Komplex-Abzug von 1."],
    ["Zurückgedrängt (–)","Die Winde sind gegen euch, während ihr reist. Wenn ihr die Reiseaktionen Warten oder Lagern nutzt, würfle einen W6. Bei 1–3 werdet ihr zurückgedrängt und verliert einen Schritt auf eurer Reiseleiste."]]}]},
  {t:"Ruhiger Himmel", b:[
   "Die Sonne scheint, Wolken ziehen, und alles ist in Ordnung mit der Welt. Ruhiger Himmel ist die Grundeinstellung des Wetters, ohne Sonderregeln für Käfer oder Weber."]}]}]},

{id:"reisen-licht", t:"Tageslicht & Dunkelheit", p:96, b:[
 {t:"vl", x:"Es stand geschrieben, ich solle dem Albtraum meiner Wahl treu sein. Bei mir sind es Fledermäuse. Gruselige Burschen, Fledermäuse."},
 "Manche Käfer wachen im Morgengrauen auf, ziehen die Vorhänge zurück (wenn sie welche haben), um zu sehen, wie sich ein Schwall aus Gold und Orange über die riesige Welt um sie herum ausbreitet. Nachtvögel ziehen sich zurück, die Luft wird wärmer, und zahlreiche gefährliche Geschöpfe gehen schlafen.",
 "Aber die Welt in herrliches Licht zu tauchen ist ein anstrengender Job, also macht die Sonne etwa die Hälfte jedes Tages eine kleine Pause vom Scheinen und versteckt sich irgendwo außer Sicht. Na los – das hat sie sich verdient. Und manche Käfer *bevorzugen* diese Zeit der Dunkelheit; sie ist gefährlicher, ja, aber irgendwie auch zugleich friedlicher.",
 "Das alles soll heißen: Die Welt der Vielbeiner hält weder bei Nacht noch bei Tag an, sie markiert nur deren Vergehen. Beide haben ihre Belohnungen, ihre Herausforderungen und ihre Gefahren … und darum geht es auf diesen Seiten.",
 {t:"h", x:"Licht ist wichtig (Dunkelheit auch)"},
 "Jede Szene oder Montage, an der dein Käfer teilnimmt, findet entweder bei Tageslicht oder in Dunkelheit statt, und wenn ihr auf eine Reise geht, erlebt ihr wahrscheinlich beides mehrmals. Es gibt keine eigenen Regeln, die man sich merken müsste und die Tageslicht und Dunkelheit unterscheiden, aber es gibt viele Fälle, in denen ein Aspekt, ein Ort oder eine Gefahr Regeln hat, die sich je nach Lichtverhältnissen ändern. Ein bestimmter Wegabschnitt mag bei Tag sicher sein, nachts aber von Füchsen überrannt. Ein drachenhafter Star schlägt vielleicht nur zur Mittagszeit zu und stürzt aus dem Schutz der Sonne über ihm auf seine Beute herab. Und ein Käfer, der von Morgen bis Abend schläfrig und träge wirkt, erwacht nachts vielleicht plötzlich zum Leben, bekommt zusätzliche Würfel auf seine Würfe und sieht seine Stimmung vor Freude in die Höhe schießen."]},

{id:"reisen-licht-beispiele", t:"Licht-Beispiele", p:97, b:[
 {t:"bsp", h:"Tageslicht-&-Dunkelheit-Beispiel 1", b:[
  ["Weber","Als ihr aus Mama Silks Salon stolpert, ist die Nacht hereingebrochen. Es wäre vielleicht klug, so weit wie möglich von hier wegzukommen, aber ihr könntet auch lagern – oder sonst etwas, eigentlich. Wonach ist euch, jetzt wo ihr dem Tod von der Schippe gesprungen seid?"],
  ["Layla","Ich würde nicht ganz sagen „von der Schippe gesprungen“, ich glaube, diese Netze bekomme ich einen Monat lang nicht aus dem Fell. Wir könnten hier vielleicht eine Montage nehmen und dann im Marsch aufbrechen, um von diesem Ort wegzukommen? Ich will nicht unvorbereitet losziehen, aber ich will auch nicht länger hierbleiben als nötig."],
  ["Bicco","Klingt nach einem soliden Plan. Und wenn wir eine Montage nehmen, habt ihr Glück – alle, die in meiner Nähe heilen, heilen ein zusätzliches Herz."],
  ["Weber","Nett, welches Teil von dir erlaubt das?"],
  ["Bicco","Mein Heizkörper-Panzer – wenn es kalt oder dunkel ist, heilt jeder, der in meiner Nähe heilt, ein zusätzliches Herz."],
  ["Dunf","Aww, gut gemacht, Bicco! Das ist eine richtig teamorientierte Wahl, ich liebe es. Ich kuschle mich ran und hole mir etwas Gesundheit zurück, wenn es dir nichts ausmacht …"],
  ["Bicco","Du bist herzlich willkommen, bedien dich!"]]},
 {t:"bsp", h:"Tageslicht-&-Dunkelheit-Beispiel 2", b:[
  ["Swift","Au, das tat weh! Was zum Panzer war das?"],
  ["Weber","Als ihr euch vom Aufprall erholt, erhascht ihr einen Blick auf eine dunkle Gestalt, die sich in den Schatten zwischen dem Gras neben dem Weg bewegt, nur für einen Moment. Mehr könnt ihr nicht erkennen, aber da draußen ist definitiv etwas …"],
  ["Dunf","Aber die Dunkelheit macht es uns hier nicht schwerer, oder? Mechanisch, meine ich?"],
  ["Weber","Nun, normalerweise hättest du recht. Wenn da draußen ein Froglin oder eine Bande Gubs wäre, würdet ihr sie problemlos sehen. Aber dieses Ding ist für die Dunkelheit gemacht, also verursacht es tatsächlich Tarn-Abzug bei allen Würfen, die ihr macht, um es zu finden oder anzugreifen."],
  ["Layla","Dann hilft vielleicht ein anderer Weg weiter – ich stelle mich so groß wie möglich hin und rufe: „Hey, Kumpel – wir haben hier Essen, das wir gern teilen! Wenn du uns, na ja, nicht stattdessen frisst …“"]]},
 {t:"h", x:"In den Untergrund gehen"},
 "Es gibt Orte, an denen die Rhythmen der Welt verblassen, Orte tief unter der Oberfläche, die nie die Berührung von Licht gespürt haben, außer dem, das von leuchtenden Pilzen und schnell brennenden Streichhölzern abgegeben wird.",
 "Wenn Käfer an einen Ort gehen, der ein Dach oder eine Decke hat, die den Himmel abschneidet, und keine starke Lichtquelle, gelten sie als ständig in Dunkelheit – selbst wenn es oben Tag ist.",
 "Das ist großartig für manche Käfer, aber *schrecklich* für andere (besonders für solche, die es gewohnt sind, auf der Oberfläche herumzuflanieren). Zum Glück gibt es ein paar Wege drumherum …",
 {t:"ul", x:[
  "Ein Gebiet mit leuchtenden Pilzen zu finden kann einem Käfer erlauben, sich für kurze Zeit als bei Tageslicht zu zählen, wenn die Pilze hell genug sind.",
  "Ein Streichholz oder eine Fackel anzuzünden kann im richtigen Moment einen strahlenden Lichtschub liefern und zählt definitiv als Tageslicht, bis es verlischt. Denk daran: Für dich oder mich sieht es vielleicht nicht beeindruckend aus, aber für einen Käfer ist es eine glühende Fackel in der Hand.",
  "Schließlich können manche Käfer ihr eigenes Licht machen! Manche haben Panzer, die wie ein Leuchtfeuer strahlen, andere haben seltsame leuchtende Drüsen oder hinterlassen Spuren aus schillerndem Schleim … es braucht alle Arten, um eine Welt zu machen, und es braucht *genau diese* Arten, damit ihre Freunde sich bei Bedarf eine Weile in falschem Tageslicht sonnen können."]},
 {t:"h", x:"Augen & Sehen"},
 "Ich wette, du dachtest, wir kämen früher dazu! Nun, es gibt einen Grund, warum wir es nicht getan haben. Der Einfachheit halber wird angenommen, dass alle Käfer im Dunkeln gerade gut genug sehen, dass es Würfe oder Aktionen nicht schwieriger macht.",
 "Das ist aber eine Grundlinie – wie bei jedem anderen Teil der Welt haben persönliche Entscheidungen Vorrang vor allgemeinen Regeln. Manche Käfer entscheiden sich vielleicht für ein Augenpaar, das nachts besonders leistungsfähig ist und ihnen im Dunkeln eine höhere Sehschärfe gibt, sie aber tagsüber ständig geblendet zurücklässt. Ein anderer wählt vielleicht, augenlos zu sein, und ignoriert lichtbasierte Effekte völlig. Das Fell eines bestimmten Raubtiers könnte es sogar unter dem Schutz der Dunkelheit verschwimmen lassen oder Licht in eine hypnotische Woge verwandeln …",
 "Im Grunde: Wenn du willst, dass Tageslicht und Dunkelheit deinen Käfer persönlich beeinflussen, spiegle (hah!) das wider, wenn du deine Aspekte wählst."]}

);
