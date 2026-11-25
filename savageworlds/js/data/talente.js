/* Talente aller Bücher. k=Kategorie, r=Rang 0–4, v=Voraussetzungen, w=nur Wildcards, p=Buchseite, s=Quellen, bk=Buch-ID, o=Seitenversatz im PDF */
var SW_TALENTE = [
{
"n": "Aristokrat",
"k": "Hintergrund",
"r": 0,
"v": "",
"w": 0,
"b": [
"Der Charakter wurde privilegiert geboren oder stieg später im Leben im Stand auf. Er könnte Geld haben oder auch nicht (siehe die Talente Reich und Stinkreich), aber auf jeden Fall bewegt er sich in der Elite der sozialen Kreise des Settings. Aristokraten addieren +2 auf Überreden, wenn sie Informationsbeschaffung bei der örtlichen Elite, Industriellen, Adeligen oder anderen Aristokraten betreiben (siehe Seite 120). Sie addieren außerdem +2 auf Allgemeinwissen, wenn es um die Etikette der Oberschicht, Stammbäume und Heraldik oder lokale Gerüchte über andere Vertreter ihres Standes geht."
],
"p": 37,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Arkane Resistenz",
"k": "Hintergrund",
"r": 0,
"v": "Willenskraft W8+",
"w": 0,
"b": [
"Magie und übernatürliche Kräfte haben wenig Einfluss auf diesen Charakter. Egal ob es an seinem Wesen, seiner Abstammung oder einer besonderen Ausbildung liegt, auf jeden Fall ist der Charakter besonders resistent gegen Magie, Psionik und andere übernatürliche Energien.",
"Feindliche arkane Fähigkeiten, die den Helden als Ziel haben, erleiden einen Abzug von –2 und magischer Schaden wird um 2 Punkte verringert. Wenn eine feindliche Macht aufgrund dieses Malus nicht auf den Helden wirkt, wird sie dennoch aktiviert und verbraucht Machtpunkte (und kann noch andere Ziele beeinflussen). Dies gilt auch für magische Boni durch Waffen, etwa Waffe verbessern oder den Schadensbonus von magischen Waffen."
],
"p": 37,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Starke Arkane Resistenz",
"k": "Hintergrund",
"r": 0,
"v": "Arkane Resistenz",
"w": 0,
"b": [
"Wie oben, doch steigt der Abzug auf arkane Fertigkeitswürfe und Schaden auf –4."
],
"p": 37,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Arkaner Hintergrund",
"k": "Hintergrund",
"r": 0,
"v": "",
"w": 0,
"b": [
"Der Kontakt mit seltsamen Energie, Studien an einer Zauberschule oder die Gaben göttlicher oder spiritueller Wesenheiten gewähren Charakteren manchmal besondere Kräfte. Solche Charaktere haben das Talent Arkaner Hintergrund und entwickeln übernatürlicher Fähigkeiten.",
"Siehe Kapitel 5 (ab Seite 147) für eine vollständige Übersicht über die Arkanen Hintergründe, Mächte und wie du sie verwendest."
],
"p": 37,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Attraktiv",
"k": "Hintergrund",
"r": 0,
"v": "Konstitution W6+",
"w": 0,
"b": [
"Es ist kein Geheimnis, dass Leute hilfsbereiter sind, wenn sie ihr Gegenüber körperlich anziehend finden. Dein Charakter addiert +1 auf Würfe mit Darbietung und Überreden, wenn das Ziel ihn generell anziehend findet (in Bezug auf Geschlecht, Spezies und so weiter)."
],
"p": 37,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Sehr Attraktiv",
"k": "Hintergrund",
"r": 0,
"v": "Attraktiv",
"w": 0,
"b": [
"Dein Held ist atemberaubend. Er erhöht den Bonus auf Darbietung und Überreden auf +2."
],
"p": 37,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Aufmerksamkeit",
"k": "Hintergrund",
"r": 0,
"v": "",
"w": 0,
"b": [
"Dem Helden entgeht nicht viel. Er ist sehr aufmerksam und scharfsinnig und addiert +2 auf Wahrnehmungsproben, wenn er die Welt, die ihn umgibt, hören, sehen oder anderweitig wahrnehmen möchte."
],
"p": 38,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Beidhändig",
"k": "Hintergrund",
"r": 0,
"v": "Geschicklichkeit W8+",
"w": 0,
"b": [
"Dein Krieger ist mit der linken Hand so geschickt wie mit der rechten. Er ignoriert den Abzug für Angriffe mit der falschen Hand (siehe Seite 97). Wenn beidhändige Charaktere in jeder Hand eine Waffe halten, dürfen sie die Parade-Boni beider Waffen addieren (wenn beide einen haben)."
],
"p": 38,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Bekannt",
"k": "Hintergrund",
"r": 0,
"v": "",
"w": 0,
"b": [
"Dein Charakter ist eine kleinere Berühmtheit. Vielleicht ist er ein beliebter Barde, der in einem Lehen bekannt ist, ein kleinerer Rockstar oder ein beliebter Schauspieler in B-Movies.",
"Er verdient doppelt so viel, wenn er für Bezahlung auftritt (siehe Darbietung, Seite 29). Er kann seine Berühmtheit auch verwenden, um +1 auf Überredenproben zu addieren, wenn das Ziel freundlich gesinnt ist und weiß, wer er ist (ein Wurf auf Allgemeinwissen, mit einem Modifikator, der davon abhängt, wie wahrscheinlich es ist, dass die Person schon von dem Charakter gehört hat).",
"Der Nachteil von Ruhm ist, dass die Person oft erkannt wird, andere oft etwas von ihr haben wollen, sie von Fans und Bewunderern verfolgt wird, oder sie nicht dazu in der Lage ist, Engagements, Auftritte oder anderen Verpflichtungen zu vermeiden, ohne in Schwierigkeiten zu kommen."
],
"p": 38,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Berühmt",
"k": "Hintergrund",
"r": 1,
"v": "Bekannt",
"w": 0,
"b": [
"Dein Held ist wirklich berühmt. Er ist vielleicht in einem großen Kreis bekannt, wie einem Land, einer großen Branche oder einem beliebten Medium (Film und Fernsehen, Musikindustrie). Er verdient den fünffachen normalen Betrag für Auftritte und addiert +2 auf Überredenproben, wenn er mit freundlich gesinnten Personen spricht, die wissen, wer er ist.",
"Der Preis, den man für echte Berühmtheit zahlt, ist auch deutlich höher. Eine echte Berühmtheit hat wenig Zeit, sie hat jede Menge Verpflichtungen, Rivalen und Skandale und kann sich nicht durch eine Menschenmenge bewegen, ohne erkannt zu werden."
],
"p": 38,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Berserker",
"k": "Hintergrund",
"r": 0,
"v": "",
"w": 0,
"b": [
"Berserker werden wild und fast unkontrollierbar, wenn der „rote Zorn“ sie ergreift, doch ihr Zorn lässt sie auch zu tödlichen Mordmaschinen werden! Unmittelbar nachdem er eine Wunde erlitten hat oder Angeschlagen ist (nur durch körperlichen Schaden), muss dein Held eine Verstandsprobe würfeln, um nicht in den Berserkerrausch zu verfallen. Er kann sich entscheiden, die Probe freiwillig nicht zu schaffen, wenn er möchte.",
"Der Berserkerrausch hat folgende Auswirkungen:",
" WÜTEND: Der Stärkewert des Charakters steigt um einen Würfeltyp und alle Angriffe müssen als Rücksichtslose Angriffe (siehe Seite 105) ausgeführt werden. Er kann keine Fertigkeiten verwenden, die einen klaren Verstand oder Konzentration erfordern (Entscheidung der SL). Er könnte beispielsweise durchaus Drohungen brüllen und somit Einschüchtern verwenden.",
" ZORNIG: Adrenalin und Zorn treiben die Muskeln des Berserkers an, wodurch er +2 Robustheit erhält. Er ignoriert eine Stufe Wundabzüge (dies ist kumulativ mit anderen Fähigkeiten, die Wundabzüge verringern).",
" UNGEZÜGELT: Immer wenn der Berserker einen Kritischen Fehlschlag bei einer Kämpfen-Probe erzielt, trifft er ein zufälliges Ziel in Reichweite seines Angriffs ( nicht das eigentliche Ziel), egal ob Freund oder Feind. Wenn es keine passenden Ziele gibt, geht der Schlag einfach ins Leere, zertrümmert Gegenstände in der Umgebung oder etwas in der Art.",
"Nach fünf durchgehenden Runden des Berserkerzorns erleidet der Held eine Erschöpfungsstufe. Nach zehn Runden erleidet er weitere Stufe Erschöpfung und der Zorn endet. Er kann seinen Zorn auch jederzeit bewusst abbrechen, indem er eine Verstandsprobe mit –2 ablegt (dies ist eine freie Aktion, und ermöglicht es, die Erschöpfung zu umgehen, wenn es dem Charakter gelingt, den Zorn zu beenden, ehe sie verursacht wird!). Beginne neu damit, Runden zu zählen, wenn er wieder in Berserkerrausch verfällt, selbst wenn es im selben Kampf ist."
],
"p": 38,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Charismatisch",
"k": "Hintergrund",
"r": 0,
"v": "Willenskraft W8+",
"w": 0,
"b": [
"Dein Held ist aus irgendeinem Grund sehr sympathisch. Er ist vielleicht vertrauenserweckend oder freundlich, oder strahlt einfach Selbstvertrauen und guten Willen aus. Du darfst Überredenproben einmal wiederholen (siehe Wiederholung auf Seite 89)."
],
"p": 38,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Elan",
"k": "Hintergrund",
"r": 0,
"v": "Willenskraft W8+",
"w": 0,
"b": [
"Elan bedeutet Begeisterung oder Wille. Wer dieses Talent hat, läuft zur Höchstform auf, wenn es hart auf hart kommt. Wenn du einen Benny ausgibst, um eine Eigenschaftsprobe zu wiederholen, addiere +2 auf das Gesamtergebnis. Der Bonus gilt nur auf den wiederholten Wurf. Er gilt nicht für Schadenswürfe (da sie keine Eigenschaftsproben sind), und auch nicht beim Schaden wegstecken, wenn du nicht zusätzlich einen Benny verwendest, um die Konstitutionsprobe zu widerholen."
],
"p": 39,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Flink",
"k": "Hintergrund",
"r": 0,
"v": "Geschicklichkeit W6+",
"w": 0,
"b": [
"Die Bewegungsweite des Helden steigt um +2, und sein Sprintwürfel wird um einen Typ verbessert (ein W6 wird beispielsweise ein W8)."
],
"p": 39,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Glück",
"k": "Hintergrund",
"r": 0,
"v": "",
"w": 0,
"b": [
"Der Abenteurer scheint vom Schicksal, Karma, den Göttern oder an welche äußeren Kräften er auch immer glauben mag (oder welche an ihn glauben), gesegnet.",
"Er zieht einen zusätzlichen Benny zu Beginn einer jeden Spielsitzung, sodass ihm wichtige Aufgaben leichter gelingen als den meisten, und er selbst extremste Gefahren überstehen kann."
],
"p": 39,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Großes Glück",
"k": "Hintergrund",
"r": 0,
"v": "Glück",
"w": 0,
"b": [
"Der Spieler zieht zu Beginn einer jeden Sitzung zwei zusätzliche Bennys statt einem."
],
"p": 39,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Kräftig",
"k": "Hintergrund",
"r": 0,
"v": "Stärke W6+, Konstitution W6+",
"w": 0,
"b": [
"Dein Charakter ist sehr groß oder sehr fit. Seine Größe steigt um +1 (und somit auch seine Robustheit), und er behandelt seine Stärke als um einen Würfeltyp höher, wenn es um die Ermittlung von Belastung (siehe Seite 67) und Mindeststärke geht, damit Rüstungen, Waffen und Ausrüstungsgegenstände ohne Abzug verwendet werden können.",
"Kräftig kann die Größe eines Charakters nicht über +3 anheben."
],
"p": 39,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Linguist",
"k": "Hintergrund",
"r": 0,
"v": "Verstand W6+",
"w": 0,
"b": [
"Dieser weitgereiste Charakter hat ein Ohr für Sprachen. Er beginnt das Spiel mit einer Anzahl von Sprache-Fertigkeiten gleich seinem halbem Verstand - Würfel auf einem Wert von W6 (siehe die Fertigkeit Sprache auf Seite 34)."
],
"p": 39,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Mutig",
"k": "Hintergrund",
"r": 0,
"v": "Willenskraft W6+",
"w": 0,
"b": [
"Charaktere mit diesem Talent haben gelernt, ihre Furcht zu meistern, oder sie haben so viele grauenvolle Dinge gesehen, dass sie abgestumpft sind. Diese tapferen Entdecker addieren +2 auf Furchtproben und ziehen –2 von Ergebnissen auf der Furchttabelle (siehe Seite 114) ab."
],
"p": 40,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Reich",
"k": "Hintergrund",
"r": 0,
"v": "",
"w": 0,
"b": [
"Egal ob diese Person mit dem Silberlöffel im Mund geboren wurde oder sich ihr Vermögen mit harter Arbeit verdient hat, sie hat auf jeden Fall mehr Geld als die meisten Leute. Reiche Helden beginnen das Spiel mit dem dreifachen normalen Startkapital für das Setting. Wenn ein regelmäßiges Einkommen für das Setting angemessen erscheint, erhält der Charakter die Entsprechung eines heutigen Jahresgehalts von $150.000."
],
"p": 40,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Stinkreich",
"k": "Hintergrund",
"r": 0,
"v": "Reich",
"w": 0,
"b": [
"Dieser glückliche Charakter hat wirklich sehr viel Geld. Verfünffache das Startkapital für das Setting bei der Charaktererschaffung, und wenn es angemessen erscheint, erhält der Charakter ein Jahreseinkommen, das etwa modernen $500.000 entspricht.",
"Es mag noch reichere Charaktere geben, doch solange das keinen Spieleffekt hat, ist es nicht so wichtig. Details hierfür sollten mit der SL ausgearbeitet werden und gleichzeitig viele weitere Ressourcen sowie lästige Verantwortung mit sich bringen."
],
"p": 40,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Rohling",
"k": "Hintergrund",
"r": 0,
"v": "Stärke W6+, Konstitution W6+",
"w": 0,
"b": [
"Rohlinge konzentrieren sich mehr auf Stärke und Fitness als auf Koordination und Flexibilität. Für sie ist Athletik mit Stärke verknüpft, nicht mit Geschicklichkeit, wenn es um Aufstiege geht. Der Charakter kann Athletik - Herausforderungen auch mit Stärke widerstehen, wenn er das möchte.",
"Außerdem erhöhen Rohlinge die kurze Entfernung von geworfenen Gegenständen um +1. Verdopple den Bonus, um die angepasste mittlere Entfernung zu erhalten, und"
],
"p": 40,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Schnell",
"k": "Hintergrund",
"r": 0,
"v": "Geschicklichkeit W8+",
"w": 0,
"b": [
"Schnelle Charaktere haben blitzschnelle Reflexe und die Ruhe weg. Wenn du eine Aktionskarte von 5 oder weniger ausgeteilt bekommst, kannst du sie abwerfen und neu ziehen, bis du eine Karte erhältst, die höher ist als 5.",
"Charaktere mit Kühler Kopf und Schnell ziehen zuerst ihre zusätzliche Karte und entscheiden dann, welche sie nehmen. Wenn diese Karte eine 5 oder darunter ist, können sie dann das Talent Schnell verwenden, um eine Ersatzkarte zu ziehen, bis sie auf 6 oder höher kommen."
],
"p": 40,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Schnelle Heilung",
"k": "Hintergrund",
"r": 0,
"v": "Konstitution W8+",
"w": 0,
"b": [
"Charaktere mit diesem Talent addieren +2 auf Konstitutionproben für Natürliche Heilung und würfeln alle drei Tage, nicht nur alle fünf (siehe Heilung, Seite 96)."
],
"p": 40,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Ausweichen",
"k": "Kampf",
"r": 1,
"v": "Geschicklichkeit W8+",
"w": 0,
"b": [
"Der Held kann Angriffe vorhersehen oder bewegt sich unter Feuer unberechenbar. Wenn er nicht Opfer eines überraschenden Angriffs wird und vollkommen unvorbereitet ist, zieht Ausweichen –2 von allen Fernkampfangriffen gegen den Charakter ab. Ausweichen ist aber nicht kumulativ mit Deckung."
],
"p": 41,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Schnelles Ausweichen",
"k": "Kampf",
"r": 1,
"v": "Ausweichen",
"w": 0,
"b": [
"Der Held addiert +2, wenn er Flächeneffekten ausweichen will. Siehe Wegspringen auf Seite 109."
],
"p": 41,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Beidhändiger Fernkampf",
"k": "Kampf",
"r": 0,
"v": "Geschicklichkeit W8+",
"w": 0,
"b": [
"Beidhändiger Fernkampf funktioniert genau wie Beidhändiger Kampf, sodass du mit verschiedenen Aktionen eine Waffe in jeder Hand abfeuern oder werfen kannst, ohne einen Mehrfachaktionsabzug auszulösen.",
"Wenn der Charakter außerdem Beidhändiger Kampf besitzt, darf der zweite Angriff auch ein Nahkampfangriff sein.",
"Beispiel: Red hat ein Schwert in einer Hand, eine Pistole in der anderen. Sie verfügt über Beidhändiger Kampf und Beidhändiger Fernkampf, also kann sie mit einer Aktion einen Kämpfen-Angriff ausführen, und später in dem Zug einen zusätzlichen Fernkampfangriff ohne Mehrfachaktionsabzug."
],
"p": 41,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Beidhändiger Kampf",
"k": "Kampf",
"r": 0,
"v": "Geschicklichkeit W8+",
"w": 0,
"b": [
"Wenn ein Charakter einen Kämpfen-Angriff mit einer Aktion und einen weiteren Kämpfen-Angriff mit einer anderen Hand in einer späteren Aktion ausführt, verursacht der zweite Angriff keinen Mehrfachaktionsabzug. Der Abzug für Angriffe mit der falschen Hand gilt allerdings schon, es sei denn, der Charakter ist Beidhändig (Seite 59).",
"Wenn der Charakter außerdem Beidhändiger Fernkampf besitzt, darf der zweite Angriff auch ein Fernkampfangriff sein."
],
"p": 41,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Berechnend",
"k": "Kampf",
"r": 0,
"v": "Verstand W8+",
"w": 0,
"b": [
"Wenn dein Held ein paar Augenblicke hat, seine Feinde unter die Lupe zu nehmen, bringt ihm das einen enormen Vorteil ein. Wenn seine Aktionskarte eine 5 oder weniger ist, ignoriert er bis zu 2 Punkte an Abzügen auf eine Aktion in diesem Zug, was Abzüge für Mehrfachaktionen, Deckung, Entfernung und sogar Wundabzüge sein können."
],
"p": 41,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Block",
"k": "Kampf",
"r": 1,
"v": "Kämpfen W8+",
"w": 0,
"b": [
"Dein Held hat auf die harte Tour gelernt, Nahkampfangriffe abzuwehren. Erhöhe seine Parade um 1, und der Überzahlbonus wird gegen ihn um –1 verringert."
],
"p": 41,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Harter Block",
"k": "Kampf",
"r": 2,
"v": "Block",
"w": 0,
"b": [
"Der Paradebonus des Helden beträgt jetzt +2, und der Überzahlbonus wird um –2 Punkte verringert."
],
"p": 41,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Doppelschuss",
"k": "Kampf",
"r": 1,
"v": "Schießen W6+",
"w": 0,
"b": [
"Erfahrene Schützen können zwei Schüsse in schneller Folge abgeben, ohne dadurch an Treffgenauigkeit einzubüßen. Doppelschuss kann nur mit Waffen verwendet werden, die eine Feuerrate von 1 haben und zwei Schüsse abgeben können, ohne nachladen zu müssen. Du addierst +1 auf den Treffer- und Schadenswurf, jedoch kostet dich das eine zusätzliche Patrone. Dies gilt pro Aktion, sodass ein Schütze mehr als einen Doppelschuss abgeben kann, wenn er einen Mehrfachangriff ausführt.",
"Doppelschuss kann nicht mit Schnellfeuer kombiniert werden.",
"Wenn du die Fähigkeit mit einer Waffe verwendest, die einen 3-Schuss-Feuerstoß (siehe Seite 65) erlaubt, addierst du +2 auf Schießen und Schaden anstelle von +1, verbrauchst dabei aber sechs Kugeln."
],
"p": 41,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Eisenkiefer",
"k": "Kampf",
"r": 0,
"v": "Konstitution W8+",
"w": 0,
"b": [
"Der Held kann auch extreme Treffer abschütteln. Er addiert +2 auf Schaden wegstecke n und Konstitutionsproben, um K.O.-Schläge (siehe Seite 107) zu vermeiden."
],
"p": 41,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Erstschlag",
"k": "Kampf",
"r": 0,
"v": "Geschicklichkeit W8+",
"w": 0,
"b": [
"Einmal pro Runde erhält der Held, solange er nicht Angeschlagen oder Betäubt ist, einen freien KämpfenAngriff gegen einen Feind unmittelbar nachdem sich"
],
"p": 41,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Schneller Erstschlag",
"k": "Kampf",
"r": 3,
"v": "Erstschlag",
"w": 0,
"b": [
"Wie Erstschlag, doch kann der Held pro Zug bis zu drei Feinde angreifen."
],
"p": 42,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Finte",
"k": "Kampf",
"r": 0,
"v": "Kämpfen W8+",
"w": 0,
"b": [
"Wenn du deinen Gegner mit der Kämpfen-Fertigkeit herausforderst (siehe Seite 104), kannst du den Feind den Widerstandswurf mit Verstand anstelle von Geschicklichkeit würfeln lassen."
],
"p": 42,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Improvisationsgabe",
"k": "Kampf",
"r": 1,
"v": "Verstand W6+",
"w": 0,
"b": [
"Helden müssen oft mit Ausrüstungsgegenständen oder sogar Möbeln kämpfen, auch wenn diese nicht für einen Kampf ausgelegt sind. Ein Kämpfer mit diesem Talent hat kein Problem mit improvisierten Waffen. Er ignoriert den üblichen Abzug von –2, wenn er sie verwendet. Siehe Seite 104 für mehr zu Improvisierten Waffen."
],
"p": 42,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Kampfkünstler",
"k": "Kampf",
"r": 0,
"v": "Kämpfen W6+",
"w": 0,
"b": [
"Der Kämpfer hat die Grundlagen einer Kampfkunst erlernt. Seine Fäuste und Füße sind Waffen (siehe Natürliche Waffen, Seite 105) und somit gilt er immer als bewaffnet. Er addiert +1 bei Kämpfen-Angriffen mit ihnen und verursacht Stärke + W4 Schaden. Wenn er bereits einen Stärke-Schadenswürfel durch die Volkseigenart Klauen (siehe Seite 19) oder das Talent Raufbold erhält, erhöhe den Schadenswürfel um einen Würfeltyp. Kampfkünstler addieren keinen Schaden auf andere Natürliche Waffen wie Fänge oder Hörner."
],
"p": 42,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Kampfkunstmeister",
"k": "Kampf",
"r": 1,
"v": "Kampfkünstler",
"w": 0,
"b": [
"Erhöhe den Kämpfen-Bonus des Kriegers auf +2, und seinen Schadenswürfel um einen weiteren Schritt."
],
"p": 42,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Kampfreflexe",
"k": "Kampf",
"r": 1,
"v": "",
"w": 0,
"b": [
"Dein Krieger erholt sich schnell von Schock und Verletzungen. Er addiert +2 auf Erholungsproben gegen Angeschlagen oder Betäubt."
],
"p": 42,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Keine Gnade",
"k": "Kampf",
"r": 1,
"v": "",
"w": 0,
"b": [
"Wenn dieser Killer einen Benny ausgibt, um einen Schadenswurf zu wiederholen, addiert er +2 auf das Gesamtergebnis."
],
"p": 42,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Killerinstinkt",
"k": "Kampf",
"r": 1,
"v": "",
"w": 0,
"b": [
"Dein Held hasst es, zu verlieren. Er erhält eine freie Wiederholung für vergleichenden Proben, wenn er Herausfordern einleitet."
],
"p": 42,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Kühler Kopf",
"k": "Kampf",
"r": 1,
"v": "Verstand W8+",
"w": 0,
"b": [
"Charaktere, die ruhig bleiben, wenn alle anderen in Deckung springen, können tödliche Kämpfer sein. Ein Held mit diesem Talent zieht eine zusätzliche Aktionskarte im Kampf und wählt aus, welche er verwenden möchte."
],
"p": 42,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Sehr Kühler Kopf",
"k": "Kampf",
"r": 1,
"v": "Kühler Kopf",
"w": 0,
"b": [
"Wie Kühler Kopf, nur zieht der Held zwei zusätzliche Karten und wählt eine von den dreien aus."
],
"p": 42,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Lieblingswaffe",
"k": "Kampf",
"r": 0,
"v": "Fertigkeit mit der gewählten Waffe auf W8+",
"w": 0,
"b": [
"Der Held kennt eine einzigartige Waffe (Excalibur, Old Betsy, Stich) sehr genau. Wenn er sie verwendet, addiert er +1 auf seine Proben mit Athletik (Werfen), Kämpfen oder Schießen, und erhält +1 Parade, wenn er die Waffe bereitgemacht hat (selbst bei einer Fernkampfwaffe).",
"Ein Kämpfer kann dieses Talent mehrere Male wählen und jedes Mal für eine andere Waffe verwen - den. Wenn eine Lieblingswaffe verloren geht, kann sie ersetzt werden, doch die Vorteile treten erst nach ein paar Tagen wieder in Kraft (solange wie die SL für angemessen hält)."
],
"p": 42,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Absolute Lieblingswaffe",
"k": "Kampf",
"r": 1,
"v": "Lieblingswaffe",
"w": 0,
"b": [
"Wie Lieblingswaffe, jedoch steigen der Bonus bei Verwendung der Waffe auf +2."
],
"p": 42,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Mächtiger Hieb",
"k": "Kampf",
"r": 0,
"v": "Kämpfen W8+",
"w": 1,
"b": [
"Wenn deine Aktionskarte ein Joker ist, verdopple den Gesamtschaden deines ersten erfolgreichen Kämpfen - Angriffs in dieser Runde."
],
"p": 42,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Meisterschütze",
"k": "Kampf",
"r": 1,
"v": "Athletik W8+ oder Schießen W8+",
"w": 0,
"b": [
"Der Held ist sehr begabt mit allen Fernkampfwaffen. Wenn er sich in seinem Zug nicht bewegt und in seiner ersten Aktion mit Feuerrate 1 angreift, erhält er entweder einen Bonus von +1 auf Athletik (Werfen) oder"
],
"p": 42,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Parkour",
"k": "Kampf",
"r": 0,
"v": "Geschicklichkeit W8+, Athletik W6+",
"w": 0,
"b": [
"Dein Charakter geht der Sportart „Parkour“ nach, oder ist einfach sehr geschickt darin, zu rennen, zu springen, zu schwingen, Wände emporzukrabbeln und über Hindernisse zu kommen. Solange es Hindernisse gibt, auf die er springen, von denen er abprallen oder an denen er sich schwingen kann, bewegt er sich auf dem Boden mit voller Bewegungsweite durch Schwieriges Gelände, wenn er zu Fuß ist.",
"Er addiert außerdem +2 auf Athletikproben, sofern es etwas mit Klettern zu tun hat, und in Verfolgungsjagden zu Fuß (siehe Verfolgungsjagden & Fahrzeuge, Seite 135)."
],
"p": 43,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Raufbold",
"k": "Kampf",
"r": 0,
"v": "Stärke W8+, Konstitution W8+",
"w": 0,
"b": [
"Seine Fäuste schlagen ein wie Hämmer, seine Klauen schneiden wie eine Sense. Sein Körper fühlt sich an, als würde er aus Stein bestehen. Raufbolde erhöhen ihre Robustheit um 1 und verursachen Stärke + W4 Schaden, wenn sie mit ihren Fäusten oder Füßen angreifen (oder Klauen, wenn sie welche haben). Wenn sie bereits Schaden durch Klauen (siehe Seite 19) verursachen, das Talent Kampfkünstler besitzen, etc., erhöhe den Schadenswürfel um einen Schritt.",
"Das Talent Raufbold lässt die Fäuste des Charakters nicht zu Natürlichen Waffen (Seite 105) werden."
],
"p": 43,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Schläger",
"k": "Kampf",
"r": 1,
"v": "Raufbold",
"w": 0,
"b": [
"Der Kämpfer erhöht seine Robustheit noch einmal um +1, und der Schaden mit seinen Fäusten oder Klauen steigt um einen weiteren Würfeltyp."
],
"p": 43,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Riesentöter",
"k": "Kampf",
"r": 2,
"v": "",
"w": 0,
"b": [
"Je größer sie sind, umso schwerer sind sie zu töten. Zumindest für die meisten. Dein Held kennt allerdings die Schwachpunkte der gewaltigsten Feinde. Er addiert +1W6 Schaden, wenn er eine Kreatur angreift, deren Größe seine um 3 oder mehr übersteigt (siehe Größe, Seite 103). Ein Mensch (Größe 0) erhält den Bonus also gegen eine Kreatur mit Größe 3 oder mehr."
],
"p": 43,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Riposte",
"k": "Kampf",
"r": 1,
"v": "Kämpfen W8+",
"w": 0,
"b": [
"Kämpfer mit diesem Talent bestrafen jeden Fehler sofort, den ihr Gegner sich leistet. Einmal pro Runde kann der Charakter (wenn er nicht Angeschlagen oder Betäubt ist) einen Freien Angriff (siehe Seite 102) gegen einen Feind ausführen, der einen misslungenen Kämpfen-Angriff gegen ihn durchgeführt hat. Die Riposte findet sofort statt (ehe andere Treffer gegen den Helden auf der gleichen Aktionskarte ausgeführt werden, sofern es welche gibt)."
],
"p": 43,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Geschickte Riposte",
"k": "Kampf",
"r": 2,
"v": "Riposte",
"w": 0,
"b": [
"Wie Riposte, doch erhält der Held einen Freien Angriff gegen bis zu drei misslungene Angriffe pro Runde."
],
"p": 43,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Rückzug",
"k": "Kampf",
"r": 0,
"v": "Geschicklichkeit W8+",
"w": 0,
"b": [
"Wenn sich ein Charakter aus dem Nahkampf zurückzieht, erhalten angrenzende Charaktere einen freien Kämpfen-Angriff gegen ihn (siehe Zurückziehen aus dem Nahkampf auf Seite 109). Dies ist für die meisten sehr gefährlich, aber nicht für deinen gewieften Recken.",
"Wenn du dich von angrenzenden Gegnern wegbewegst, erhält einer von ihnen (Wahl des Spielers) keinen freien Kämpfen-Angriff."
],
"p": 43,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Wendiger Rückzug",
"k": "Kampf",
"r": 1,
"v": "Rückzug",
"w": 0,
"b": [
"Bis zu drei Gegner (nach Wahl des Spielers) erhalten keine Angriffe, wenn sich der Krieger aus dem Nahkampf zurückzieht."
],
"p": 43,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Ruhige Hände",
"k": "Kampf",
"r": 0,
"v": "Geschicklichkeit W8+",
"w": 0,
"b": [
"Es ist schwierig, vom Rücken eines Pferdes oder einem sich bewegenden Fahrzeug aus zu schießen, aber dein Held weiß, wie es geht. Er ignoriert den Abzug für Unsicheren Grund (siehe Seite 108).",
"Dies hilft auch, wenn er sprintet, sodass der übliche Abzug fürs Sprinten von –2 auf –1 sinkt (siehe Bewegung, Seite 142)."
],
"p": 43,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Rundumschlag",
"k": "Kampf",
"r": 0,
"v": "Stärke W8+, Kämpfen W8+",
"w": 0,
"b": [
"Rundumschlag erlaubt es dem Charakter, einen Kämpfen-Angriff mit –2 auszuführen (kein Malus mit einer Zweihandwaffe) und das Ergebnis gegen alle Ziele innerhalb seiner Reichweite (Freund und Feind) anzuwenden. Ermittle den Schaden für jeden getroffenen Gegner einzeln. Rundumschlag ist eine"
],
"p": 43,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Kontrollierter Rundumschlag",
"k": "Kampf",
"r": 2,
"v": "Rundumschlag",
"w": 0,
"b": [
"Wie oben, aber der Charakter ist in der Lage, Verbündete von den Angriffen mit Rundumschlag auszunehmen."
],
"p": 44,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Schmerzresistenz",
"k": "Kampf",
"r": 0,
"v": "Konstitution W8+",
"w": 0,
"b": [
"Dein Held hat gelernt, trotz extremer Schmerzen weiterzukämpfen. Er kann 1 Punkt Wundabzüge ignorieren."
],
"p": 44,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Stärkere Schmerzresistenz",
"k": "Kampf",
"r": 0,
"v": "Schmerzresistenz",
"w": 0,
"b": [
"Dieser Held ignoriert 2 Punkte Wundabzüge."
],
"p": 44,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Schneller Angriff",
"k": "Kampf",
"r": 1,
"v": "Kämpfen W8+",
"w": 0,
"b": [
"Ein Charakter mit Schneller Angriff würfelt einen zweiten Kämpfen-Würfel mit einem seiner Kämpfen - Angriffe in seinem Zug. Der Extrawürfel kann auf das gleiche Ziel oder ein anderes angewendet werden. Wickle jeden Treffer einzeln ab. Schneller Angriff ist eine begrenzte Aktion."
],
"p": 44,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Blitzschneller Angriff",
"k": "Kampf",
"r": 2,
"v": "Schneller Angriff",
"w": 0,
"b": [
"Wie Schneller Angriff, aber der Kämpfer fügt einen dritten Kämpfen-Würfel zu seiner mit Schneller Angriff in diesem Zug ausgeführten Attacke hinzu.",
"Beispiel: Red greift verzweifelt eine riesige, krabbenartige Kreatur auf einem fremden Planeten an. Sie verfügt über Blitzschneller Angriff und entscheidet sich, dreimal anzugreifen (eine Mehrfachaktion mit dem üblichen Abzug). Sie wirft ihre Kämpfen-Fertigkeit mit einem zusätzlichen Würfel für den ersten Angriff und den zweiten Angriff. Sie bekommt den Zusatzwürfel nicht bei ihrem dritten Kämpfen-Wurf."
],
"p": 44,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Schnellfeuer",
"k": "Kampf",
"r": 1,
"v": "Schießen W6+",
"w": 0,
"b": [
"Der Schütze ist darin geübt, schnelle und treffsichere Schüsse abzugeben. Solange er eine schnellfeuernde Fernkampfwaffe verwendet (wie einen Revolver oder eine Halbautomatik) und genug Munition hat, kann er die Feuerrate für einen seiner Schießen-Angriffe in diesem Zug um +1 erhöhen."
],
"p": 44,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Verbessertes Schnellfeuer",
"k": "Kampf",
"r": 2,
"v": "Schnellfeuer",
"w": 0,
"b": [
"Der Schütze kann jetzt seine Feuerrate zweimal im gleichen Zug (durch eine Mehrfachaktion) um +1 erhöhen."
],
"p": 44,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Schwer zu töten",
"k": "Kampf",
"r": 0,
"v": "Willenskraft W8+",
"w": 0,
"b": [
"Dieser Abenteurer hat mehr Leben als eine Herde Katzen. Er kann seine Wundabzüge ignorieren, wenn er Konstitutionsproben ablegt, um nicht zu Verbluten (siehe Seite 95)."
],
"p": 44,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Wirklich schwer zu töten",
"k": "Kampf",
"r": 2,
"v": "Schwer zu töten",
"w": 0,
"b": [
"Dein Held ist schwerer umzubringen als Rasputin. Wenn er jemals „getötet“ wird, wirf einen Würfel. Bei einem ungeraden Ergebnis ist er tot wie üblich. Bei einem geraden Ergebnis ist er Ausgeschaltet, aber entkommt irgendwie dem Tod. Er wird vielleicht gefangen genommen, sein ganzer Besitz wird ihm abgenommen oder er wird als vermeintlich tot zurückgelassen, aber irgendwie überlebt er."
],
"p": 44,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Volles Rohr!",
"k": "Kampf",
"r": 1,
"v": "Schießen W8+",
"w": 0,
"b": [
"Erfahrene Schützen lernen den Rückstoß einer vollautomatischen Waffe zu kompensieren. Wenn ein Charakter mit diesem Talent sich in seinem Zug nicht bewegt, ignoriert er den Rückstoß-Malus, wenn er mit einer Feuerrate von 2 oder höher schießt. (Siehe Rückstoß auf Seite 106.)"
],
"p": 44,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Volltreffer",
"k": "Kampf",
"r": 0,
"v": "Athletik oder Schießen W8+",
"w": 1,
"b": [
"Wenn deine Aktionskarte ein Joker ist, verdopple den Gesamtschaden deines ersten erfolgreichen Angriffs mit Athletik (Werfen) oder Schießen in dieser Runde."
],
"p": 44,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Anführer",
"k": "Anführer",
"r": 0,
"v": "Verstand W6+",
"w": 0,
"b": [
"Anführer haben die grundlegende Fähigkeit, klare Anweisungen zu geben und Truppen in der Hitze des Gefechts zu befehligen. Statisten im Befehlsradius addieren +1 auf Erholungsproben gegen Angeschlagen und Betäubt."
],
"p": 45,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Großer Anführer",
"k": "Anführer",
"r": 1,
"v": "Anführer",
"w": 0,
"b": [
"Eine kräftige Stimme, effektive Befehle, angeborenes Charisma oder einfach gute Ausbildung sorgen dafür, dass ein Kampftrupp viel effektiver koordiniert wird. Ein Held mit diesem Talent hat einen Befehlsradius von 10“ (20 Metern)."
],
"p": 45,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Anheizen",
"k": "Anführer",
"r": 2,
"v": "Willenskraft W8+, Anführer",
"w": 0,
"b": [
"Schon ein einziger Satz eines großen Anführers kann gewaltige Folgen haben. Ein Anführer mit dieser Fähigkeit kann seine Männer zu blutigem Eifer antreiben, indem er ein Motto, einen Schlachtruf oder andere inspirierende Worte ruft.",
"Statisten im Befehlsradius addieren +1 auf ihre Schadenswürfe im Nahkampf."
],
"p": 45,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Geborener Anführer",
"k": "Anführer",
"r": 1,
"v": "Willenskraft W8+, Anführer",
"w": 0,
"b": [
"Der Anführer hat sich wieder und wieder bewiesen und den Respekt jener erlangt, die an seiner Seite kämpfen.",
"Alle Anführertalente, die sagen, dass sie nur für Statisten gelten, gelten nun auch für Wildcards."
],
"p": 45,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Haltet die Stellung!",
"k": "Anführer",
"r": 1,
"v": "Verstand W8+, Anführer",
"w": 0,
"b": [
"Haltet die Stellung! stärkt den Willen der Statisten, die unter dem Befehl des Helden stehen, was ihre Robustheit um +1 erhöht."
],
"p": 45,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Inspirieren",
"k": "Anführer",
"r": 1,
"v": "Anführer",
"w": 0,
"b": [
"Außergewöhnliche Anführer inspirieren die Soldaten, die sie umgeben, und erfüllen sie mit Tapferkeit und Entschlossenheit. Einmal pro Zug kann der Held auf Kriegskunst würfeln, um eine Art von Eigenschaftsprobe zu unterstützen, und wendet das Ergebnis auf alle"
],
"p": 45,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Taktiker",
"k": "Anführer",
"r": 1,
"v": "Verstand W8+, Anführer, Kriegskunst W6+",
"w": 0,
"b": [
"Der Anführer hat ein natürliches Verständnis für die Taktik kleiner Einheiten und kann Situationen, die sich schnell verändern, ausnutzen.",
"Ein Taktiker erhält in jeder Runde eines Kampfes oder einer Verfolgungsjagd eine zusätzliche Aktionskarte. Diese legt er unabhängig von seinen eigenen Karten hin. Zu Beginn der Runde kann er sie abwerfen oder sie einem Statisten (oder Gruppe von Statisten mit der gleichen Aktionskarte) im Befehlsradius geben. Der Spieler (oder die SL), der diesen Charakter kontrolliert, kann sie annehmen und die eigene Aktionskarte ersetzen oder sie abwerfen."
],
"p": 45,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Meistertaktiker",
"k": "Anführer",
"r": 2,
"v": "Taktiker",
"w": 0,
"b": [
"Der Taktiker erhält jetzt insgesamt zwei zusätzliche Aktionskarten pro Runde, die er verteilen kann."
],
"p": 45,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Artefakterschaffer",
"k": "Macht",
"r": 1,
"v": "Arkaner Hintergrund (beliebig)",
"w": 0,
"b": [
"Wer sich mit übernatürlichen Energien abgibt, findet manchmal Möglichkeiten, um Gegenstände mit Mächten zu erfüllen. Er kann eine gewöhnliche Klinge in ein magisches Schwert verwandeln, einen Trank brauen, der die Wunden eines Verbündeten heilen kann, oder heilige Reliquien mit göttlicher Gnade segnen.",
"Artefakterschaffer können wundersame Gegenstände und Gerätschaften nach dem System Arkane Apparaturen auf Seite 153 herstellen."
],
"p": 45,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Bastler",
"k": "Macht",
"r": 1,
"v": "Arkaner Hintergrund (Verrückte Wissenschaft), Verrückte Wissenschaft W6+",
"w": 0,
"b": [
"Einige Mechanik-Gurus können aus so gut wie allem unglaubliche Apparaturen bauen."
],
"p": 45,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Energieschub",
"k": "Macht",
"r": 0,
"v": "Arkaner Hintergrund (beliebig), arkane Fertigkeit W8+",
"w": 1,
"b": [
"Der Charakter erhält 10 Machtpunkte zurück, wenn seine Aktionskarte ein Joker ist. Dabei kann er sein Maximum nicht übersteigen."
],
"p": 46,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Heiliger/Unheiliger Krieger",
"k": "Macht",
"r": 1,
"v": "Arkaner Hintergrund (Wunder), Glaube W6+",
"w": 0,
"b": [
"Gläubige stellen sich im Namen ihrer göttlichen Schutzherren großen Gefahren. Um solche schwierigen Situationen zu überleben, gewähren die Mächte des Guten (oder Bösen) Wunder und die Fähigkeit, ihre Gunst in übernatürlichen Schutz zu verwandeln.",
"Der Auserkorene darf für jeden ausgegebenen Machtpunkt +1 auf sein Ergebnis beim Schaden wegstecken addieren, bis zu einem Maximum von +4."
],
"p": 46,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Kanalisieren",
"k": "Macht",
"r": 1,
"v": "Arkaner Hintergrund (beliebig)",
"w": 0,
"b": [
"Wenn der Charakter eine Steigerung bei einer Probe auf seine arkane Fertigkeit erzielt (oder auf den Wurf, um eine arkane Apparatur zu verwenden oder zu aktivieren), verringert er die Machtpunkt-Kosten um 1. Dies kann zu Kosten von 0 führen."
],
"p": 46,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Konzentration",
"k": "Macht",
"r": 1,
"v": "Arkaner Hintergrund (beliebig)",
"w": 0,
"b": [
"Durch Ausbildung und Fokus ist der Zauberwirker extrem effizient darin geworden, arkane Energien zu kanalisieren. Die Basis-Wirkungsdauer von allen Mächten, die nicht Sofort ist, wird verdoppelt. Das gilt auch für das Aufrechterhalten von Mächten."
],
"p": 46,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Machtpunkte",
"k": "Macht",
"r": 0,
"v": "Anfänger (beliebig)",
"w": 0,
"b": [
"Magier, verrückte Wissenschaftler und andere arkane Charaktere wollen immer mehr Macht. Dieses Talent gewährt ihnen 5 zusätzliche Machtpunkte. Machtpunkte kann mehr als einmal gewählt werden, aber nur einmal pro Rang. Es kann auf dem Legendären Rang beliebig oft gewählt werden, gewährt aber nur jeweils 2 zusätzliche Machtpunkte."
],
"p": 46,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Mentalist",
"k": "Macht",
"r": 1,
"v": "Arkaner Hintergrund (Psionik), Psionik W6+",
"w": 0,
"b": [
"Ständiger Kontakt mit den Gedanken anderer gibt diesen psionischen Agenten einen Vorteil, wenn es darum geht, geistige Angriffe zu führen oder abzuwehren. Mentalisten addieren +2 auf vergleichende Psionikproben, egal ob sie ihre Mächte gegen einen Feind verwenden oder sich gegen einen Rivalen schützen."
],
"p": 46,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Neue Mächte",
"k": "Macht",
"r": 0,
"v": "Arkaner Hintergrund (beliebig)",
"w": 0,
"b": [
"Ein arkaner Charakter kann zwei neue Mächte erlernen, indem er dieses Talent erwirbt (das er mehrere Male auswählen kann). Er kann Mächte für seinen Rang und darunter auswählen, die normalerweise für seinen Arkanen Hintergrund verfügbar sind.",
"Ein Charakter kann, statt einer neuen Macht, auch eine neue Ausprägung für eine Macht wählen, die er schon besitzt. Er könnte zum Beispiel eine EisAusprägung, zusätzlich zu seinem Feuer- Geschoss, erlenen und dann je nach Bedarf zwischen der Feuer und der Eis-Ausprägung wählen."
],
"p": 47,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Schnelle Machtregeneration",
"k": "Macht",
"r": 1,
"v": "Willenskraft W6+, Arkaner Hintergrund (beliebig)",
"w": 0,
"b": [
"Machtpunkte frischen sich normalerweise mit einer Geschwindigkeit von 5 Punkten pro Stunde Ruhe wieder auf (siehe Aufladen, Seite 151). Dieses Talent erhöht dies auf 10 Punkte pro Stunde."
],
"p": 47,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Schnellere Machtregeneration",
"k": "Macht",
"r": 2,
"v": "Schnelle Machtregeneration",
"w": 0,
"b": [
"Der Charakter erhält jetzt 20 Machtpunkte pro Stunde Ruhe zurück."
],
"p": 47,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Seelenentzug",
"k": "Macht",
"r": 1,
"v": "Arkaner Hintergrund (beliebig), arkaner Fertigkeit W10+",
"w": 0,
"b": [
"Verzweifelte Zeiten erfordern verzweifelte Maßnahmen. Seelenentzug erlaubt es einem arkanen Charakter, seine körperliche Energie in seine Macht zu kanalisieren, wodurch er eine Stufe Erschöpfung erleidet und 5 Machtpunkte erhält. Er kann eine zusätzliche Stufe Erschöpfung erleiden (sodass er Entkräftet ist), um 5 weitere Machtpunkte zu erhalten. Er kann sich auf diese Weise nicht selbst Auschalten.",
"Erschöpfung durch den Seelenentzug kommt tief aus dem Inneren und kann ausschließlich natürlich geheilt werden. Die Macht Linderung und ähnliche Effekte haben keinen Wirkung."
],
"p": 47,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Zauberer",
"k": "Macht",
"r": 1,
"v": "Arkaner Hintergrund (Magie), Zaubern W6+",
"w": 0,
"b": [
"Magie ist vielseitig und wundervoll, und Zauberer haben mit zahllosen Folianten, Schriftrollen und Anrufungen zu tun, während sie ihre Kunst meistern. Manchmal nutzen sie dieses Wissen, um sich an die Varianten ihrer verschiedenen Zaubersprüche zu erinnern.",
"Ein Magier kann 1 zusätzlichen Machtpunkt ausgeben, wenn er eine Macht wirkt, um die Ausprägung"
],
"p": 47,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Zusätzliche Anstrengung",
"k": "Macht",
"r": 1,
"v": "Arkaner Hintergrund (Begabt), Fokus W6+",
"w": 0,
"b": [
"Einige Begabte können tief in sich gehen, um ihre Mächte deutlich zu verstärken. Zusätzliche Anstrengung erhöht das Gesamtergebnis einer Fokusprobe, nachdem sie gewürfelt wurde, für 1 Machtpunkt um +1, für 3 Machtpunkte sogar um +2. Dies kann nicht verwendet werden, um einen Kritischen Fehlschlag zu vermeiden."
],
"p": 47,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Akrobat",
"k": "Experten",
"r": 0,
"v": "Geschicklichkeit W8+, Athletik W8+",
"w": 0,
"b": [
"Der Akrobat erhält eine freie Wiederholung bei Athletikproben, die sich um Gleichgewicht, Abrollen oder Ringen drehen.",
"Das hat keinen Einfluss auf Proben, um Aktionen zu unterbrechen, zu klettern, zu schwimmen oder zu werfen."
],
"p": 47,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Kampfakrobat",
"k": "Experten",
"r": 1,
"v": "Akrobat",
"w": 0,
"b": [
"Der Akrobat springt so schnell umher, dass Angriffe gegen ihn mit einem Abzug von –1 abgelegt werden, solange er sich des Angriffs bewusst ist, sich halbwegs frei bewegen kann und keine Abzüge aufgrund von Traglast oder Mindeststärke erleidet."
],
"p": 47,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Alleskönner",
"k": "Experten",
"r": 0,
"v": "Verstand W10+",
"w": 0,
"b": [
"Durch eine gute Ausbildung, Bücherwissen, computerverbesserte Fertigkeitenprogramme oder einfach unglaubliche intuitive Auffassungsgabe hat dein Held ein Talent dafür entwickelt, spontan Fertigkeiten"
],
"p": 47,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Ass am Steuer",
"k": "Experten",
"r": 0,
"v": "Geschicklichkeit W8+",
"w": 0,
"b": [
"Ein Ass am Steuer ist ein Pilot oder Fahrer mit einer besonderen Affinität für sein Auto, Boot, Flugzeug oder anderes Fahrzeug. Er ignoriert zwei Punkte Abzüge auf alle Proben mit Fahren, Pilot oder Seefahrt und kann Bennys ausgeben, um damit Schaden wegstecken für Fahrzeuge anzuwenden, die er lenkt oder kommandiert. Dabei verwendet er Fahren, Pilot oder"
],
"p": 48,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Assassine",
"k": "Experten",
"r": 0,
"v": "Geschicklichkeit W8+, Kämpfen W6+, Heimlichkeit W8+",
"w": 0,
"b": [
"Assassinen sind ausgebildete Mörder, die wissen, wie man auch die härtesten Gegner um die Ecke bringt. Sie addieren +2 auf Schadenswürfe, wenn ihre Gegner Verwundbar sind oder sie einen Überraschungsangriff ausführen."
],
"p": 48,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Dieb",
"k": "Experten",
"r": 0,
"v": "Geschicklichkeit W8+, Heimlichkeit W6+, Diebeskunst W6+",
"w": 0,
"b": [
"Diebe sind spezialisiert auf Täuschung, Verrat und Akrobatik. Sie sind unabdingbar, wenn es gilt, Fallen zu entdecken, Wände zu erklimmen und Schlösser zu knacken.",
"Diebe wissen, wie sie Vorsprünge an Wänden und Fenstersimsen verwenden können, um die höchsten Gebäude zu erklimmen und wie Katzen durch Straßen und Gassen zu huschen. Sie"
],
"p": 48,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Ermittler",
"k": "Experten",
"r": 0,
"v": "Verstand W8+, Recherche W8+",
"w": 0,
"b": [
"Ermittler verbringen viel Zeit damit, über alte Legenden zu forschen, sich auf der Straße umzuhören oder teuflische Mysterien zu entschlüsseln. Einige dieser Helden sind tatsächlich Privatermittler, andere sind Magier-Detektive in Fantasywelten oder neugierige Collegeprofessoren, die auf Dinge stoßen, die die Menschheit niemals wissen sollte.",
"Ermittler addieren +2 auf Recherche und auf Wahrnehmung, sofern sie auf einem Schreibtisch nach bedeutsamen Papieren suchen, einen Stapel Werbepost nach etwas Wichtigem durchwühlen oder versteckte Gegenstände in einem Haufen Schrott oder Schutt entdecken wollen."
],
"p": 49,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Gelehrter",
"k": "Experten",
"r": 0,
"v": "Recherche W8+",
"w": 0,
"b": [
"Gebildete Professoren, hingebungsvolle Studenten und enthusiastische Amateure verwenden viel Zeit und Energie auf das Studium eines bestimmten Themas. Sie werden Experten in diesen Bereichen und können nur selten eine Fachfrage nicht beantworten.",
"Wähle eine der folgenden Fertigkeiten aus: Geisteswissenschaften, Kriegsführung, Naturwissenschaften, Okkultismus oder eine auf Verstand basierende „Wissensfertigkeit“, die in deinem Setting erlaubt ist. Du kannst +2 addieren, wenn die Fertigkeit verwendet wird.",
"Das Talent kann mehr als einmal gewählt werden, um verschiedene Fertigkeiten abzudecken."
],
"p": 49,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "McGyver",
"k": "Experten",
"r": 0,
"v": "Verstand W6+, Wahrnehmung W8+, Reparieren W6+",
"w": 0,
"b": [
"Ein McGyver kann ein Gerät aus leicht verfügbaren Ressourcen improvisieren, wenn es nötig ist. Mit ein paar einfachen Gegenständen kann er eine Reparierenprobe ablegen, um improvisierte Waffen, Sprengstoffe oder Werkzeuge herzustellen, die bis zu ihrem Einsatz oder bis zum Ende der Begegnung halten (Entscheidung der SL). Dies erfordert einen ganzen Zug, und er kann sich nicht bewegen und keine anderen Aktionen ausführen, während er das Gerät konstruiert. Ein Fehlschlag bedeutet, dass das Gerät nicht fertig ist. Ein Kritischer Fehlschlag bedeutet,"
],
"p": 49,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Naturbursche",
"k": "Experten",
"r": 0,
"v": "Willenskraft W6+, Überleben W8+",
"w": 0,
"b": [
"Naturburschen sind Waldläufer, Kundschafter und Jäger, die sich in der Wildnis wohler fühlen als in städtischen Gebieten. Sie sind geschickte Fährtenleser und Kundschafter und wissen, wie man monatelang in der Natur überleben kann",
"Naturburschen addieren +2 auf Überlebensproben und Heimlichkeitsproben in der Wildnis (nicht in Städten, Ruinen oder unter der Erde)."
],
"p": 49,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Reparaturgenie",
"k": "Experten",
"r": 0,
"v": "Reparieren W8+",
"w": 0,
"b": [
"Der Mechaniker addiert +2 auf Reparierenproben. Mit einer Steigerung halbiert er die Zeit, die normalerweise nötig ist, um etwas zu reparieren. Wenn bei einer bestimmten Reparatur angegeben ist, dass sie bei einer Steigerung in der Hälfte der Zeit gelingt, braucht ein Reparaturgenie dafür also nur ein Viertel der Zeit, wenn er eine Steigerung erzielt."
],
"p": 49,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Soldat",
"k": "Experten",
"r": 0,
"v": "Stärke W6+, Konstitution W6+",
"w": 0,
"b": [
"Professionelle Soldaten sind daran gewöhnt, schwere Lasten zu tragen und raue Bedingungen zu ertragen. Nach einigen Tagen, um sich an ihre Ausrüstung zu gewöhnen (Entscheidung der SL), behandeln sie ihre Stärke als um einen Würfeltyp höher, wenn es um die Berechnung von Belastung (siehe Seite 67) und Mindeststärke für Rüstung, Waffen und Ausrüstung geht (Seite 66). (Dies ist kumulativ zum Talent Kräftig).",
"Sie erhalten auch eine freie Wiederholung für Konstitutionsproben, um Umweltgefahren zu überstehen (siehe Gefahren, Seite 101)."
],
"p": 49,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Aufwiegler",
"k": "Sozial",
"r": 1,
"v": "Willenskraft W8+",
"w": 0,
"b": [
"Dieser Hetzer kann mehrere Gegner auf einmal aufwiegeln.",
"Dieser Charakter kann als begrenzte Aktion sozial Herausfordern mit Einschüchtern oder Provozieren gegen alle Gegner in einer mittleren Flächenschablone ablegen. Die Ziele müssen den Helden deutlich sehen und hören können. Jeder Betroffene widersetzt sich Herausfordern einzeln."
],
"p": 50,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Bedrohlich",
"k": "Sozial",
"r": 0,
"v": "entweder Blutrünstig, Fies, Skrupellos oder Hässlich",
"w": 0,
"b": [
"Es ist nicht immer ein Nachteil, ein ungehobelter Klotz zu sein, wenn man weiß, wie man es einsetzen kann. Bedrohlich erlaubt es einem Charakter, sein übles Aussehen oder seine noch üblere Einstellung auszunutzen. Der Charakter erhält +2 auf Einschüchternproben."
],
"p": 50,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Beziehungen",
"k": "Sozial",
"r": 0,
"v": "",
"w": 0,
"b": [
"Dein Held ist mit Personen oder Organisationen verbunden, die ihm helfen können, wenn es hart auf hart kommt. Vielleicht ist es die Mafia, die Bundespolizei, eine Gewerkschaft oder sogar andere Abenteurer. Beziehungen kann mehr als einmal gewählt werden, wobei jedes Mal eine neue Fraktion oder ein neuer Kontakt ausgesucht werden kann. Einmal pro Sitzung, vorausgesetzt, der Held hat eine Möglichkeit mit seinen Freunden in Kontakt zu treten, kann er sie um einen Gefallen bitten.",
"Der Gefallen hängt von der Art des Kontakts ab (Entscheidung der SL), könnte aber ein Darlehen, Ausrüstung, einige tatkräftige Verbündete, Transportmittel, Informationen oder sogar einen Spezialisten mit besonderen Fertigkeiten, die die Gruppe nicht hat, wie einen Hacker oder Gelehrten, umfassen."
],
"p": 50,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Ermutigen",
"k": "Sozial",
"r": 0,
"v": "Willenskraft W8+",
"w": 0,
"b": [
"Einen Feind zu erniedrigen, kann auch einen Verbündeten ermutigen. Wenn dieser Charakter erfolgreich einen Gegner herausfordert, kann er zusätzliche den Zustand Abgelenkt oder Verwundbar (siehe Seite 97) von einem seiner Verbündeten entfernen."
],
"p": 50,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Erniedrigen",
"k": "Sozial",
"r": 0,
"v": "Provozieren W8+",
"w": 0,
"b": [
"Wer viel Übung darin hat, fiese Sprüche zu klopfen, kann das Ego eines Rivalen mit einer einzigen Bemerkung oder bedeutungsvollen Geste regelrecht zerstören. Dein Held erhält eine freie Wiederholung für Provozierenproben."
],
"p": 50,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Erzürnen",
"k": "Sozial",
"r": 0,
"v": "Provozieren W6+",
"w": 0,
"b": [
"Clevere Charaktere können ihre Feinde manipulieren und ihre Aufmerksamkeit auf sich lenken, um ihre Freunde zu unterstützen. Einmal pro Zug kann dein Held, wenn er eine Provozieren-Herausforderung verwendet und eine Steigerung erzielt (siehe Herausfordern, Seite 104), einen Feind „erzürnen“. Neben den üblichen Effekten eines Erfolgs mit Steigerung erleidet der Gegner einen Abzug von –2, wenn er Ziele außer dem Charakter, der ihn erzürnt hat, beeinflussen will. Dies gilt zusätzlich zu Abgelenkt, kann aber nicht mit weiteren Anwendungen von Erzürnen kombiniert werden.",
"Erzürnen hält an, bis ein Joker gezogen wird, jemand anderes Erzürnen gegen das Ziel verwendet, oder die Begegnung endet. Erzürnen kann mehrere Ziele beeinflussen indem es mit Aufwiegler kombiniert wird."
],
"p": 50,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Gassenwissen",
"k": "Sozial",
"r": 0,
"v": "Verstand W6+",
"w": 0,
"b": [
"Charaktere, die dieses Talent besitzen, wissen, wie sie den örtlichen Schwarzmarkt finden, gestohlene Güter verhökern, den örtlichen Gesetzeshütern (oder den Verbrechern!) ausweichen können, sich bedeckt halten, wenn es brenzlig wird, illegale Waffen erwerben oder herausfinden können, welcher „Boss“ Schläger anheuert und so weiter.",
"Charaktere mit diesem Talent addieren +2 auf Proben mit Einschüchtern oder Überreden zur Informationsbeschaffung (siehe Seite 120), sofern diese zwielichtige oder kriminelle Elemente involvieren. Sie addieren außerdem +2 auf Allgemeinwissenproben, die mit den oben aufgeführten kriminellen Aktivitäten zu tun haben."
],
"p": 50,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Konter",
"k": "Sozial",
"r": 0,
"v": "Provozieren W6+",
"w": 0,
"b": [
"Wer sich mit diesem spitzzüngigen Sprücheklopfer anlegt, bekommt seine dummen Sprüche direkt selbst wieder um die Ohren gehauen.",
"Wenn ein Charakter mit Konter eine Steigerung erzielt, wenn er einer Einschüchtern - oder Provozieren - Herausforderung widersteht, wird sein Gegner Abgelenkt."
],
"p": 50,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Rampensau",
"k": "Sozial",
"r": 0,
"v": "Willenskraft W8+",
"w": 0,
"b": [
"Die Worte deines Helden inspirieren nicht nur jene, an die sie gerichtet sind, sondern oft auch Leute in der Umgebung. Du kannst Rampensau als begrenzte Aktion verwenden, um einen zusätzlichen Fertigkeitswürfel zu werfen, wenn du mit Darbietung oder Überreden unterstützt.",
"Der zusätzliche Würfel Unterstützt einen weiteren Verbündeten bei einer beliebigen Eigenschaftsprobe. Es muss nicht bei beiden Verbündeten die selbe Eigenschaft sein, die Unterstützt wird."
],
"p": 51,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Echte Rampensau",
"k": "Sozial",
"r": 1,
"v": "Rampensau",
"w": 0,
"b": [
"Wie Rampensau, aber der Held fügt jetzt einen dritten Fertigkeitswürfel zu seinem Unterstützungswurf in diesem Zug hinzu und unterstützt noch einen zusätzlichen Verbündeten."
],
"p": 51,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Selbstlos",
"k": "Sozial",
"r": 0,
"v": "Willenskraft W8+",
"w": 1,
"b": [
"Selbstlose Helden und entschlossene Anführer wissen, dass ihre größte Stärke oft von ihren Gefährten kommt, und sind bereit, einen Teil ihres Glücks oder Schicksals mit ihnen zu teilen.",
"Ein Charakter mit diesem Talent kann seine Bennys jedem anderen Charakter geben, mit dem er kommunizieren kann. Der Spieler sollte erklären, wie das genau aussieht: Von einem kurzen ermunternden Ausruf bis hin zu einem freundlichen Schulterklopfen ist so einiges möglich."
],
"p": 51,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Starker Wille",
"k": "Sozial",
"r": 0,
"v": "Willenskraft W8+",
"w": 0,
"b": [
"Selbstvertrauen ist eine starke Rüstung gegen jene, die diese Person kleinreden wollen. Sie addiert +2 auf ihr Gesamtergebnis, wenn sie Herausfordern mit Verstand oder Willenskraft widersteht."
],
"p": 51,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Eiserner Wille",
"k": "Sozial",
"r": 0,
"v": "Starker Wille",
"w": 0,
"b": [
"Wenige Dinge bringen diesen Charakter aus dem Gleichgewicht. Der Starker Wille-Bonus gilt nun für Verstand- und"
],
"p": 51,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Verlässlich",
"k": "Sozial",
"r": 0,
"v": "Willenskraft W8+",
"w": 0,
"b": [
"Die Leute wissen, dass sie sich auf deinen Helden verlassen können, wenn sie Hilfe brauchen. Er erhält eine freie Wiederholung bei allen Unterstützen-Würfen, die er ablegt."
],
"p": 51,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Auserwählter",
"k": "Übersinnlich",
"r": 0,
"v": "Willenskraft W8+, Kämpfen W6+",
"w": 0,
"b": [
"Auserwählte sind heilige (oder unheilige) Männer und Frauen, die auserkoren wurden, für eine Gottheit oder Religion zu kämpfen. Die meisten sind fromme Seelen und bereit, ihr Leben für eine größere Sache zu opfern, doch einige wurden vielleicht in die Rolle hineingeboren und folgen ihrem Pfad eher zögerlich.",
"Auserwählte bekämpfen die Mächte der Dunkelheit (oder des Lichts). Sie addieren +2 Schaden, wenn sie übernatürlich böse (oder gute, wenn sie böse sind) Kreaturen angreifen. Der Bonus gilt auf Flächenschaden, Fernkampfangriffe, Mächte etc.",
"Die SL muss entscheiden, auf welche Feinde dieser Bonus gilt, doch grundsätzlich sind es alle bösen (oder guten!) Kreaturen, die aus Magie entstanden sind oder übernatürliche Fähigkeiten haben."
],
"p": 51,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Chi",
"k": "Übersinnlich",
"r": 2,
"v": "Kampfkunstmeister",
"w": 0,
"b": [
"Die Kampfkunstausbildung deines Helden geht über die Norm hinaus und fällt in den Bereich des Mystischen. Zu Beginn einer jeden Kampfbegegnung erhält er einen Chi-Punkt, den er ausgeben kann, um eines der folgenden Dinge zu tun:",
"• Er kann einen misslungenen Angriff (sogar einen Kritischen Fehlschlag) neu würfeln. • Er kann seinen Gegner einen Angriff gegen sich neu würfeln lassen. • Er kann +W6 auf den Schaden eines erfolgreichen Kämpfen-Angriffs addieren, den er mit seinen Händen, Füßen, Klauen oder anderen natürlichen Waffen ausgeführt hat.",
"Nicht verbrauchtes Chi geht am Ende der Kampfbegegnung verloren."
],
"p": 52,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Heiler",
"k": "Übersinnlich",
"r": 0,
"v": "Willenskraft W8+",
"w": 0,
"b": [
"Ein Held mit diesem Talent addiert +2 auf alle Heilenproben, egal ob sie natürlicher oder magischer Natur sind."
],
"p": 52,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Mut in Flaschen",
"k": "Übersinnlich",
"r": 0,
"v": "Konstitution W8+",
"w": 0,
"b": [
"Dieser gesellige Charakter verarbeitet Alkohol ganz anders als die meisten. In der ersten Runde, nachdem er sich einen hinter die Binde gekippt hat (ungefähr 200 ml starker Schnaps oder etwas entsprechendes) steigt seine Konstitution um einen Würfeltyp (was auch seine Robustheit erhöht). Der Trinker kann außerdem eine Stufe Wundabzüge ignorieren (was mit anderen Fähigkeiten, die diesen Effekt haben, kumulativ ist).",
"Verstand, Geschicklichkeit und alle verknüpften Fertigkeiten erleiden aber für die Wirkungsdauer einen Abzug von –1.",
"Der Effekt hält eine Stunde lang an, dann erleidet der Trinker für die nächsten vier Stunden eine Stufe Erschöpfung."
],
"p": 52,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Sammler",
"k": "Übersinnlich",
"r": 0,
"v": "Glück",
"w": 0,
"b": [
"Einmal pro Begegnung kann der Held ein Ausrüstungsteil, eine Handvoll Munition oder einen anderen nützlichen Gegenstand finden, beziehungsweise „erinnert er sich“, dass er ihn die ganze Zeit schon dabei hatte.",
"Die Spielleiterin entscheidet, was als Begegnung zählt, und hat das letzte Wort darüber, was „entdeckt“ werden kann und was nicht."
],
"p": 52,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Sechster Sinn",
"k": "Übersinnlich",
"r": 0,
"v": "",
"w": 0,
"b": [
"Dein Held kann spüren, wenn Gefahr droht. Wenn er auf Überraschung (Seite 107) würfelt, addiert er +2 auf seine Wahrnehmungsprobe, die entscheidet, ob er in der ersten Runde handeln darf. Bei einer Steigerung beginnt er die Begegnung mit einem aufgesparten Zug.",
"In anderen Situationen, die nicht von den Überraschungsregeln abgewickelt werden (ein Heckenschütze, eine Grubenfalle, ein vergiftetes Getränk und so weiter) erlaubt Sechster Sinn eine Wahrnehmungsprobe mit –2 (oder +2, wenn normalerweise auch eine Wahrnehmungsprobe erlaubt wäre), um die Gefahr zu entdecken und entsprechend zu handeln. Wenn es sich um einen Angriff gehandelt hat, und der Held seine Wahrnehmungsprobe schafft, erhält der Feind keinen Überraschungsangriff."
],
"p": 52,
"s": [
"GRW",
"HOR"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Tierempathie",
"k": "Übersinnlich",
"r": 0,
"v": "",
"w": 0,
"b": [
"Manche haben eine starke Bindung zu ihren Tiergefährten. Diese Charaktere können ihre eigenen Bennys für Tiere unter ihrer Kontrolle ausgeben. Dazu gehören Reittiere, Haustiere, Vertraute und so weiter."
],
"p": 52,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Tiermeister",
"k": "Übersinnlich",
"r": 0,
"v": "Willenskraft W8+",
"w": 0,
"b": [
"Tiere freunden sich schnell und mühelos mit deinem Helden an. Sie greifen ihn nicht an, wenn er sie nicht zuerst angreift oder sie aus irgendeinem Grund aufgebracht sind.",
"Die tierische Anziehungskraft des Tiermeisters ist so groß, dass ihm außerdem ein loyales Tier folgt. Es ist normalerweise ein Tier von Größe 0 oder kleiner, nach Zustimmung der Spielleiterin.",
"Das Tier ist ein Statist und erhält keine Aufstiege. Wenn das Haustier weggeschickt oder getötet wird, findet der Held innerhalb von 1W4 Tagen einen Ersatz.",
"Mächtigere Gefährten: Tiermeister kann mehr als einmal gewählt werden. Wähle jedes Mal einen der folgenden Effekte aus.",
"• Du erhältst ein zusätzliches Haustier. • Erhöhe eine Eigenschaft des Tiers um einen Würfeltyp (nur eine Eigenschaft pro Tier). • Erhöhe die maximale Größe, die dein Tier haben kann, um +1, auf ein Maximum von 3. • Mach ein Tier zur Wildcard. (Der Held muss mindestens Heroisch sein)."
],
"p": 52,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Gefolgsleute",
"k": "Legendär",
"r": 4,
"v": "",
"w": 1,
"b": [
"Jedes Mal wenn dieses Talent gewählt wird, erhält der Charakter fünf Gefolgsleute die an seiner Seite kämpfen. Wenn er welche verliert, nehmen andere irgendwann ihren Platz ein (wie lange das dauert, hängt von der SL und den Umständen ab). Die Gefolgsleute müssen versorgt werden, und sie wollen einen Anteil an der Beute, den Schätzen oder anderen Belohnungen, die der Held erhält. Ansonsten widmen sie sich voll und ganz ihrer Aufgabe. Sie werfen ihr Leben nicht weg, sind aber bereit, es wieder und wieder im Dienst des Helden aufs Spiel zu setzen.",
"Verwende die Spielwerte für Soldaten auf Seite 189 für die Gefolgsleute. Ein Held kann seine Verbündeten ausrüsten, wie er möchte. Gefolgsleute durchlaufen Aufstiege genau wie Spielercharaktere (siehe Seite 54).",
"Verwende die Regeln für Verbündete auf Seite 133, um ihnen eine eigene Persönlichkeit zu geben."
],
"p": 53,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Handlanger",
"k": "Legendär",
"r": 4,
"v": "",
"w": 1,
"b": [
"Ein Charakter, der wieder und wieder über das Böse triumphiert, wird eine Inspiration für andere. Dies könnte dazu führen, dass sich ein junger Streiter dem Helden auf seinen epischen Questen anschließen will.",
"Der Held erhält einen Handlanger mit dem Rang Anfänger. Der Handlanger ist eine Wildcard, beginnt jede Spielsitzung mit zwei Bennys, kann Aufstiege erhalten und hat Fähigkeiten, die die seines Mentors ergänzen. Der Spielercharakter kontrolliert den Handlanger wie jeden anderen Verbündeten, doch kann er manchmal Schwierigkeiten machen, weil er entführt wird, sich in Gefahr begibt, wenn er es nicht soll und so weiter. Der Spieler sollte sich darauf einstellen, dass dieses Talent manchmal ein Handicap werden kann!",
"Wenn der Handlanger stirbt, wird er erst ersetzt, wenn der Held dieses Talent noch einmal wählt. Glücklicherweise können Helden Bennys für ihre Handlanger ausgeben, als hätten sie das Talent Selbstlos. Handlanger müssen dieses Talent wählen, um dasselbe für ihren Mentor zu tun."
],
"p": 53,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Profi",
"k": "Legendär",
"r": 4,
"v": "maximaler möglicher Würfeltyp für die betroffene Eigenschaft",
"w": 0,
"b": [
"Der Charakter ist ein Experte in einer bestimmten Fertigkeit oder einem Attribut (seine Wahl). Dies erhöht die Eigenschaft und ihre Obergrenze um einen Schritt (zum Beispiel wird W12+1 zu W12+2). Dieses Talent kann einmal pro Eigenschaft ausgewählt werden."
],
"p": 53,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Experte",
"k": "Legendär",
"r": 4,
"v": "Profi in der betroffenen Eigenschaft",
"w": 0,
"b": [
"Wie das Talent Profi steigert dieses Talent die Eigenschaft und das Maximum um einen weiteren Schritt."
],
"p": 53,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Meister",
"k": "Legendär",
"r": 4,
"v": "Experte in der betroffenen Eigenschaft",
"w": 1,
"b": [
"Der Wildcard-Würfel des Charakters steigt auf einen W10, wenn er auf die betroffene Eigenschaft würfelt."
],
"p": 53,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Waffenmeister",
"k": "Legendär",
"r": 4,
"v": "Kämpfen W12+",
"w": 0,
"b": [
"Der Krieger erhöht seine Parade um +1, und der Bonusschadenswürfel bei Kämpfen-Proben ist ein W8 anstelle eines W6 (siehe Bonusschaden, Seite 94). Er muss bewaffnet sein, um diesen Vorteil zu erhalten, doch umfasst dies das Talent Kampfkünstler, Klauen oder andere Fähigkeiten, die als Waffen zählen."
],
"p": 53,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Meister aller Waffen",
"k": "Legendär",
"r": 4,
"v": "Waffenmeister",
"w": 0,
"b": [
"Erhöhe die Parade des Helden noch einmal um +1, und sein Kämpfen-Bonusschadenswürfel ist jetzt ein W10."
],
"p": 53,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Zäh wie Leder",
"k": "Legendär",
"r": 4,
"v": "Konstitution W8+",
"w": 0,
"b": [
"Dein Charakter macht weiter, wenn andere fallen. Er kann vier Wunden einstecken, ehe er Ausgeschaltet ist (sein maximaler Wundabzug bleibt weiterhin –3)."
],
"p": 53,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Zäher als Leder",
"k": "Legendär",
"r": 4,
"v": "Zäh wie Leder, Konstitution W12+",
"w": 0,
"b": [
"Der Held kann bis zu fünf Wunden einstecken, ehe er Ausgeschaltet ist! Sein maximaler Wundabzug bleibt bei –3."
],
"p": 53,
"s": [
"GRW"
],
"bk": "sw_de",
"o": 1
},
{
"n": "Auserwählter der Prophezeiung",
"k": "Hintergrund",
"r": 0,
"v": "",
"w": 1,
"b": [
"Prophezeiungen künden von einem Wesen, das zu Großem bestimmt ist – eines, das mit Hilfe treuer Gefährten große Taten vollbringen wird. Gibt der Auserwählte Überzeugung aus, hält sie bis zum Ende der Begegnung an, ohne dass sie mit Bennys aufrechterhalten werden muss!",
"Ein solches Geschenk hat jedoch einen hohen Preis. Der Auserwählte hat das Handicap Feind (Schwer) – irgendein mächtiges Wesen stellt sich immer gegen seine Queste! Schlimmer noch: Er trägt ein Mal, das sich nicht entfernen lässt, so sehr er es auch versucht. Das kann ein Tattoo, ein Muttermal, ein sechster Finger, katzenhafte Pupillen oder eine andere sichtbare Besonderheit sein, doch wer weiß, wonach er suchen muss, erkennt es. Mit welchen erzählerischen Mitteln auch immer scheint das Mal gelegentlich durch, egal wie sehr er versucht, es mit Kleidung, Bandagen oder sogar Illusionen zu verbergen. Dadurch sind der Feind des Helden und seine Schergen ihm stets auf den Fersen."
],
"p": 32,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Feenblut",
"k": "Hintergrund",
"r": 0,
"v": "",
"w": 0,
"b": [
"Elfen, Halbelfen und bestimmte Feen sind oft widerstandsfähig gegen feindliche Magie. Wer genug davon im Blut hat, erhält eine kostenlose Wiederholung beim Widerstehen feindlicher Mächte und zauberähnlicher Effekte."
],
"p": 32,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Bevorzugter Feind",
"k": "Hintergrund",
"r": 0,
"v": "Athletik, Kämpfen oder Schießen W6+",
"w": 0,
"b": [
"Dein Held bekämpft seit vielen Jahren eine bestimmte Art von Gegnern. Er weiß, wie man sie am besten angreift und sich gegen sie verteidigt und wo ihre Schwachstellen liegen.",
"Wähle eine Art von Feind, die in der Heimat oder Vorgeschichte deines Charakters heimisch ist, etwa Untote, Feen, Dämonen, Konstrukte, Riesen, Tiere oder ein bestimmtes Volk wie Elfen oder Zwerge.",
"Dein Held erhält eine kostenlose Wiederholung beim Spurenlesen (Überleben) oder beim Angriff (Athletik (Werfen), Kämpfen, Schießen) auf Wesen dieser Art.",
"Du kannst dieses Talent mehrfach wählen, um Erfahrung mit mehreren Feindarten abzubilden."
],
"p": 32,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Bevorzugtes Gelände",
"k": "Hintergrund",
"r": 0,
"v": "Überleben W6+",
"w": 0,
"b": [
"Waldläufer, Druiden und alle, die viel Zeit in der Wildnis verbringen, wissen sie zu ihrem Vorteil zu nutzen.",
"Wähle einen Geländetyp (Arktis, Wasser, Wüste, Wald, Hügel/Gebirge, Dschungel, Ebene, Sumpf, Stadt oder Untergrund). In seinem Bevorzugten Gelände erhält dein Charakter eine kostenlose Wiederholung auf Überleben- und Wahrnehmungsproben. Zudem zieht er dort bei der Initiative eine zusätzliche Aktionskarte und wählt dann wie gewohnt aus allen möglichen Karten.",
"Bevorzugtes Gelände kann mehrfach gewählt werden und fügt jedes Mal ein neues Gelände hinzu."
],
"p": 32,
"s": [
"FAN",
"SF"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Erbstück",
"k": "Hintergrund",
"r": 0,
"v": "",
"w": 0,
"b": [
"Gelegentlich gelangen mächtige magische Gegenstände in die Hände relativ unerfahrener Abenteurer. Dieses Talent gewährt deinem Helden bei jeder Wahl einen magischen Gegenstand (oder ein zusammengehöriges Set, Entscheidung der SL) aus den Listen in Kapitel Fünf mit einem Gesamtwert von 10.000 Goldstücken.",
"Der Vorteil gilt nur einmalig – wird der Gegenstand zerstört oder ist er verbrauchbar (wie ein Trank), wird er nicht ersetzt. Geht er verloren, muss er in einem Abenteuer wiedererlangt werden!"
],
"p": 32,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Ansturm",
"k": "Kampf",
"r": 1,
"v": "Kämpfen W8+",
"w": 0,
"b": [
"Ein kurzer Spurt verleiht dem Nahkampfschaden dieses Helden erheblichen Nachdruck. Läuft er mindestens 5\" (10 Yards), addiert er +2 auf den Schaden seines ersten Kämpfen-Angriffs in diesem Zug. Das lässt sich mit einem Rücksichtslosen Angriff kombinieren."
],
"p": 33,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Nahkampfgewandtheit",
"k": "Kampf",
"r": 0,
"v": "Geschicklichkeit W8+, Kämpfen W8+",
"w": 0,
"b": [
"Geübte Messerkämpfer nutzen die größere Reichweite eines Gegners aus, indem sie in dessen Deckung schlüpfen und mit tödlicher Präzision zuschlagen.",
"Ein Nahkämpfer mit einem Messer oder einer ähnlich kleinen Waffe (Entscheidung der SL) kann in jedem Zug als freie Aktion ein einzelnes angrenzendes Ziel wählen. Seine Angriffe und seine Parade gegen diesen Gegner (nur diesen) steigen um dessen Reichweite +1.",
"Es gibt keinen Bonus, wenn der Gegner unbewaffnet ist oder ebenfalls eine kleine Waffe wie ein Messer führt."
],
"p": 33,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Verbesserte Nahkampfgewandtheit",
"k": "Kampf",
"r": 2,
"v": "Nahkampfgewandtheit",
"w": 0,
"b": [
"Der Bonus des Nahkämpfers steigt auf die Reichweite seines Ziels +2."
],
"p": 33,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Verteidiger",
"k": "Kampf",
"r": 1,
"v": "Kämpfen W6+",
"w": 0,
"b": [
"Du kannst die Parade und den Deckungsbonus deines Schildes als freie Aktion mit einem angrenzenden Verbündeten teilen. Schildboni sind nicht kumulativ – bei mehreren Schilden zählt nur der höchste."
],
"p": 33,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Schmutziger Kämpfer",
"k": "Kampf",
"r": 1,
"v": "",
"w": 0,
"b": [
"Wer dieses Talent besitzt, tut alles, um einen Kampf zu gewinnen. Der hinterhältige Kerl ist besonders gut in Tricks. Er addiert +2 auf Würfe, wenn er mit Kämpfen herausfordert."
],
"p": 33,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Wirklich schmutziger Kämpfer",
"k": "Kampf",
"r": 1,
"v": "Schmutziger Kämpfer",
"w": 0,
"b": [
"Dein Charakter ist äußerst geschickt in taktischer Täuschung. Erzielt er bei einer Herausforderung eine Steigerung, erhält er gegen diesen Gegner einen Überraschungsvorteil (Drop), bis dieser nicht mehr Angeschlagen ist."
],
"p": 33,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Doppelschuss mit Bogen",
"k": "Kampf",
"r": 1,
"v": "Athletik W8+ (Wurfwaffen) oder Schießen W8+ (Bögen)",
"w": 0,
"b": [
"Dieses Talent erlaubt es einem Schützen, mit einem normalen Bogen zwei Pfeile in einem Angriff abzufeuern oder zwei Wurfwaffen in einem einzigen Angriff zu schleudern.",
"Als begrenzte Aktion würfelt der Charakter zwei Schießen- oder Athletik-Würfel (Werfen) statt einem (das erhöht nicht die Feuerrate, verursacht keinen Rückstoß und verbraucht zwei Projektile). Jeder Würfel trifft und verursacht separat Schaden. (Der Wildcard-Würfel darf nach Wahl einen der beiden Schüsse ersetzen.)",
"Der Angreifer braucht einen griffbereiten Vorrat an Geschossen (Köcher, Messer an einer Bandoliere usw.)."
],
"p": 33,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Verbesserter Doppelschuss mit Bogen",
"k": "Kampf",
"r": 3,
"v": "Doppelschuss mit Bogen, Athletik W10+ (Wurfwaffen) oder Schießen W10+ (Bögen)",
"w": 0,
"b": [
"Der Angreifer kann sein Talent Doppelschuss mit Bogen zweimal pro Zug einsetzen."
],
"p": 34,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Formationskämpfer",
"k": "Kampf",
"r": 0,
"v": "Kämpfen W8+",
"w": 0,
"b": [
"Der Krieger hat gelernt, an der Seite anderer zu kämpfen und den gemeinsamen Feind mit abgestimmten Schlägen zu überwältigen.",
"Er erhöht den Überzahlbonus für sich und seine Verbündeten um zusätzlich +1. Der maximale Überzahlbonus bleibt +4, egal wie viele Formationskämpfer zusammenstehen."
],
"p": 34,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Schildwall",
"k": "Kampf",
"r": 0,
"v": "Formationskämpfer, Kämpfen W8+",
"w": 0,
"b": [
"Ausgebildete Soldaten können mit Disziplin, Training und einem stabilen Schild überwältigender Übermacht und wütenden Horden standhalten.",
"Charaktere mit dem Talent Schildwall (und mindestens einem mittleren Schild) addieren +1 auf ihre Parade, wenn sie neben einem Verbündeten stehen, der ebenfalls Schildwall besitzt, und +2, wenn zwei solche Verbündete angrenzen (das Maximum)."
],
"p": 34,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Kampfvielfalt",
"k": "Kampf",
"r": 1,
"v": "Kämpfen W8+",
"w": 0,
"b": [
"Einmal pro Begegnung kann der Kämpfer als freie Aktion die Vorteile eines einzelnen Kampftalents erhalten. Er muss alle Voraussetzungen des Talents erfüllen, und die Vorteile enden nach fünf Runden."
],
"p": 34,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Geschosse abwehren",
"k": "Kampf",
"r": 3,
"v": "Kämpfen W10+",
"w": 0,
"b": [
"Die Waffenkunst des Helden im Nahkampf ist unübertroffen. Solange er eine Nahkampfwaffe in der Hand hat (oder das Talent Kampfkünstler besitzt), verwenden körperliche Fernangriffe (Pfeile, Äxte, Mächte mit körperlicher Ausprägung usw.) gegen ihn – sofern er den Angriff kommen sieht – seine Parade als Grundzielwert."
],
"p": 34,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Opportunist",
"k": "Kampf",
"r": 2,
"v": "",
"w": 0,
"b": [
"Gelegenheiten ergeben sich, wenn man sie nutzt. Erhält ein Charakter mit diesem Talent einen Joker, addiert er +4 statt +2 auf seine Eigenschafts- und Schadenswürfe."
],
"p": 34,
"s": [
"FAN",
"SF"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Brüllen",
"k": "Kampf",
"r": 1,
"v": "Willenskraft W8+",
"w": 0,
"b": [
"Kräftige Lungen, magische Begabung oder große Körpergröße erlauben dem Wesen ein gewaltiges, knochenerschütterndes Brüllen! Als begrenzte Aktion kann der Charakter in einer Kegelschablone eine Einschüchtern-Herausforderung durchführen. Alle Ziele darin sind betroffen und müssen einzeln widerstehen."
],
"p": 34,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Brutalität",
"k": "Kampf",
"r": 0,
"v": "Kämpfen W6+",
"w": 0,
"b": [
"Für manche ist Gewalt eine Lebensart. Wer dieses Talent besitzt, schlägt seine Feinde so hart, dass sie oft nicht dazu kommen, es ihm heimzuzahlen. Ein Charakter mit diesem Talent verursacht bei einem Rücksichtslosen Angriff +4 Schaden statt +2."
],
"p": 34,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Versengen",
"k": "Kampf",
"r": 1,
"v": "Konstitution W8+, Odemwaffe",
"w": 0,
"b": [
"Dieses Talent verbessert den Schaden einer Odemwaffe um einen Würfeltyp. Ein Odemangriff mit 2W6 Schaden verursacht nach diesem Talent beispielsweise 2W8. Außerdem kann der Feuerspeier nach Belieben die Kegel- oder die Strahlschablone verwenden."
],
"p": 34,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Hinterhältiger Angriff",
"k": "Kampf",
"r": 1,
"v": "Assassine",
"w": 0,
"b": [
"Der +2-Bonus des Talents Assassine wird durch einen W6 ersetzt, der wie üblich explodieren darf. Das gilt für Angriffe mit Athletik (Werfen), Kämpfen oder Schießen."
],
"p": 34,
"s": [
"FAN",
"SF"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Verbesserter Hinterhältiger Angriff",
"k": "Kampf",
"r": 2,
"v": "Hinterhältiger Angriff",
"w": 0,
"b": [
"Der Bonus für Hinterhältiger Angriff gilt jetzt auch, wenn der Gegner Abgelenkt ist."
],
"p": 34,
"s": [
"FAN",
"SF"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Betäubender Schlag",
"k": "Kampf",
"r": 1,
"v": "Stärke W8+",
"w": 0,
"b": [
"Die Schläge des Charakters sind kraftvoll oder präzise genug, um seine Gegner zu betäuben. Trifft er einen Gegner mit einer stumpfen Waffe (Hammer, Streitkolben, Faust usw.) und verursacht mindestens ein Angeschlagen- oder Wunde-Ergebnis, wird zuerst der Schaden samt eventuellem Wegstecken aufgelöst. Dann muss das Opfer eine Konstitutionsprobe schaffen, sonst ist es Betäubt."
],
"p": 35,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Zertrümmern",
"k": "Kampf",
"r": 0,
"v": "Stärke W8+",
"w": 0,
"b": [
"Wer sein Leben mit Stein und anderen natürlichen Materialien verbringt, weiß nicht nur, wie man daraus Werkzeuge fertigt – sondern auch, wie man sie bricht.",
"Schlägt der Charakter zu, um einen Gegenstand zu zerstören, addiert er +W6 auf seinen Schaden. Schadenswürfel dürfen allerdings weiterhin nicht explodieren (siehe Dinge zerbrechen im Grundregelwerk)."
],
"p": 35,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Den Treffer einstecken",
"k": "Kampf",
"r": 1,
"v": "Eisenkiefer, Konstitution W10+",
"w": 0,
"b": [
"Kämpfer, Barbaren, Gladiatoren und ihresgleichen müssen ein Leben voller gnadenloser Brutalität ertragen. Ein Charakter mit diesem Talent hat gelernt, selbst unter härtesten Bedingungen zu überleben. Er erhält eine kostenlose Wiederholung auf Würfe zum Wegstecken von Wunden und auf Konstitutionsproben gegen K.O.-Schläge."
],
"p": 35,
"s": [
"FAN",
"SUP"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Trickschuss",
"k": "Kampf",
"r": 1,
"v": "Athletik W8+ oder Schießen W8+",
"w": 0,
"b": [
"Bei einer Herausforderung mit Athletik oder Schießen kann der Schütze wählen, dass der Gegner statt mit Geschicklichkeit mit Verstand widersteht."
],
"p": 35,
"s": [
"FAN",
"SF"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Unheimliche Reflexe",
"k": "Kampf",
"r": 2,
"v": "Geschicklichkeit W8+, Athletik W8+",
"w": 0,
"b": [
"Der Charakter besitzt ein unheimliches Talent, Flächenangriffen und -effekten auszuweichen. Er ignoriert den üblichen Abzug von –2 auf Geschicklichkeit bei Ausweichversuchen. Außerdem erhält er einen regulären Ausweichversuch gegen Flächenangriffe."
],
"p": 35,
"s": [
"FAN",
"SF"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Flügelstoß",
"k": "Kampf",
"r": 1,
"v": "Flügel",
"w": 0,
"b": [
"Die Flügel des Charakters sind kräftig genug, um andere der gleichen oder einer geringeren Größe niederzuschlagen. Der Stoß ist eine begrenzte Aktion, die eine Athletikprobe erfordert. Bei einem Kritischen Fehlschlag überanstrengt sich der Flieger und erleidet eine Stufe Erschöpfung. Bei einem Erfolg müssen Charaktere in einer Kegelschablone, die vom Helden ausgeht, eine Konstitutionsprobe schaffen, sonst sind sie Angeschlagen (bei einer Steigerung mit –2). Ist die Aktionskarte des Helden ein Joker oder steht er unter der Wirkung von Überzeugung, sind die Betroffenen stattdessen Betäubt!"
],
"p": 35,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Artefaktschmied",
"k": "Macht",
"r": 1,
"v": "Arkaner Hintergrund (beliebig)",
"w": 0,
"b": [
"Wer sich mit übernatürlichen Kräften einlässt, findet manchmal Wege, Mächte in Gegenstände zu legen. Er kann eine gewöhnliche Klinge in ein magisches Schwert verwandeln, seinen Freunden mächtige Tränke schenken oder sogar heilige Reliquien mit göttlicher Gnade segnen.",
"Artefaktschmiede können zeitweilige Arkane Geräte herstellen und dauerhaftere magische Gegenstände fertigen. Siehe Arkane Geräte auf S. 109."
],
"p": 36,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Meisterlicher Artefaktschmied",
"k": "Macht",
"r": 3,
"v": "Artefaktschmied, Okkultismus W10+",
"w": 0,
"b": [
"Der Artefaktschmied erhält für jeden Erfolg und jede Steigerung bei seiner Okkultismus-Probe 1000 GM Fortschritt (statt auf 2000 GM Gesamtfortschritt pro Wurf begrenzt zu sein)."
],
"p": 36,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Schlachtmagie",
"k": "Macht",
"r": 2,
"v": "Arkaner Hintergrund (beliebig), arkane Fertigkeit W10+",
"w": 0,
"b": [
"Dieses Talent erlaubt es dem Anwender, seine Zauber auf große Einheiten von Statisten wie Soldaten, Handlanger oder Wachen zu wirken. Details stehen unter Schlachtmagie auf S. 110."
],
"p": 36,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Blutmagie",
"k": "Macht",
"r": 0,
"v": "Arkaner Hintergrund (beliebig), böse Gesinnung",
"w": 0,
"b": [
"Der Charakter lenkt seine arkane Kraft durch eine böse oder bösartige Quelle oder hat gelernt, Kraft aus dem Schmerz und Elend anderer zu ziehen.",
"In jedem Zug, in dem der Magier einem bei Bewusstsein befindlichen, intelligenten Wesen eine Wunde zufügt (die nicht weggesteckt wird), erhält er W6 Machtpunkte zurück. Der Zauberer muss den Schaden direkt verursachen – durch seine Mächte, mit bloßen Händen, Waffen und so weiter. Indirekter Schaden, etwa durch einen gelenkten Feind, Verbündeten, Zombie, ein Haustier oder einen Diener, bringt keinen Vorteil.",
"Wer verdächtigt wird, solch verderbte Magie zu praktizieren, wird oft von den örtlichen Behörden gejagt. Wird er gefasst, ist die Strafe fast immer langsam, schmerzhaft und tödlich."
],
"p": 36,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Epische Meisterschaft",
"k": "Macht",
"r": 2,
"v": "Arkaner Hintergrund (beliebig), arkane Fertigkeit W6+",
"w": 0,
"b": [
"Der Zauberwirker beherrscht sein arkanes oder göttliches Handwerk so gut, dass er neue Wege gefunden hat, seine Mächte zu manipulieren. Er erhält Zugang zu den Epischen Machtmodifikatoren für alle seine Mächte.",
"Epische Meisterschaft gilt für alle Arkanen Hintergründe eines Helden, wenn er mehrere hat, doch er muss die Voraussetzung der arkanen Fertigkeit für jeden erfüllen, bevor er Epische Machtmodifikatoren mit den Mächten dieses Hintergrunds nutzen kann.",
"Eine vollständige Liste der Epischen Machtmodifikatoren steht in Kapitel Vier."
],
"p": 36,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Vertrauter",
"k": "Macht",
"r": 0,
"v": "Arkaner Hintergrund (Teufelsbeschwörer, Druide, Elementarist, Nekromant, Schamane, Zauberer, Hexenmeister/Hexe, Magier)",
"w": 0,
"b": [
"„Vertraute“ sind kleine Kreaturen (Größe –2 oder –3), die dem Magier als treues Haustier und magischer Gefährte dienen. Sie sind ihrem Herrn ergeben, aber keine Sklaven. Sie sind sehr kluge Versionen ihrer Art und lassen sich gelegentlich von ihren eigenen Instinkten ablenken. Eine Katze könnte ihre Aufgabe unterbrechen, um einer Maus nachzujagen oder kurz ein Nickerchen zu halten, und ein Hund wird mit ziemlicher Sicherheit bellen, wenn sich ein Fremder nähert.",
"Ein Vertrauter ist in Bezug auf Wunden eine Wildcard und würfelt bei Eigenschaftsproben einen Wildcard-Würfel. Er erhält keine Bennys, aber der Magier kann seine eigenen für ihn ausgeben.",
"Der Vertraute versteht die Sprache seines Herrn und umgekehrt (andere hören nur die natürlichen Laute des Tieres), wobei die Konzepte auf das beschränkt sind, was ein Mitglied seiner Art verstehen kann.",
"Der Vertraute hat 5 eigene Machtpunkte. Er kann keine Zauber wirken, aber der Magier kann auf sie zugreifen, als wären es seine eigenen. Sie laden sich separat und in der gleichen Geschwindigkeit wie die des Magiers auf.",
"Die Bindung zwischen Vertrautem und Magier macht ihn immun gegen die Macht Tierfreund anderer Zauberwirker.",
"Vertraute steigen nicht auf, sondern erhalten für jeden Rang ihres Herrn (auch Anfänger) und für jeden vierten Aufstieg, den der Held nach Legendär erhält, einen der folgenden Vorteile:",
"ZWEITES GESICHT: Der Besitzer kann die Sinne des Vertrauten nutzen, als wären es seine eigenen, mit einer Höchstreichweite von 10 Meilen. Währenddessen ist er Abgelenkt und Verwundbar.",
"TRAINING: Der Magier kann eine Eigenschaft des Vertrauten um einen Würfeltyp steigern (höchstens einmal pro Eigenschaft).",
"VERBESSERUNG: Der Vertraute erhält ein Talent. Es muss zur Art des Vertrauten passen (Entscheidung der SL) und die Voraussetzungen wie üblich erfüllen.",
"Stirbt ein Vertrauter, ist der Held automatisch Betäubt (egal wie weit er entfernt ist). Er kann nach 10 Tagen einen neuen herbeirufen und die Art auf Wunsch wechseln."
],
"p": 36,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Bevorzugte Macht",
"k": "Macht",
"r": 1,
"v": "Arkaner Hintergrund (beliebig), arkane Fertigkeit W8+",
"w": 0,
"b": [
"Der Zauberwirker hat seine Zeit der Meisterung eines bestimmten Zaubers, Wunders oder Geräts der Verrückten Wissenschaft gewidmet.",
"Wähle eine der Mächte deines Charakters. Er kann beim Aktivieren dieser Macht bis zu zwei Punkte Abzüge (Mehrfachaktion, Wunden, Erschöpfung usw.) ignorieren."
],
"p": 37,
"s": [
"FAN",
"HOR",
"SF"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Mystische Mächte",
"k": "Macht",
"r": 1,
"v": "weitere Voraussetzungen je nach Paket",
"w": 0,
"b": [
"In Welten, in denen Magie relativ verbreitet ist, lernen disziplinierte Abenteurer vielleicht ein paar einfache Mächte, die ihnen auf ihren Questen helfen. Wähle eines der Pakete im Companion. Der Charakter hat 10 eigene Machtpunkte, die sich normal aufladen. Als begrenzte freie Aktion aktiviert der Held die Macht automatisch mit Erfolg für die regulären Kosten oder mit einer Steigerung für zusätzliche 2 Machtpunkte.",
"Er kann gegebenenfalls Machtmodifikatoren nutzen (zu den üblichen Kosten). Mystische Mächte gewährt keinen Zugang zu Talenten, die einen Arkanen Hintergrund voraussetzen, doch er darf die Talente Machtpunkte oder Seelenentzug wählen. Hat der Held zusätzlich einen Arkanen Hintergrund, können dessen Talente und Fähigkeiten nicht mit Mystischen Mächten genutzt werden und umgekehrt.",
"Fähigkeiten mit der Angabe „Nur Selbst“ erhalten keinen zusätzlichen Vorteil durch diese Einschränkung.",
"BARBAR (Stärke W8+): Eigenschaft erhöhen (nur Kämpfen, Stärke, Willenskraft oder Konstitution), Kriegersegen und Geschwindigkeit. Alle haben die Einschränkung Persönlich.",
"KÄMPFER (Kämpfen W8+): Eigenschaft erhöhen (nur Kämpfen, Schießen, Stärke und Konstitution), Schutz und Kriegersegen. Alle haben die Einschränkung Persönlich.",
"MÖNCH (Athletik W8+): Eigenschaft erhöhen (nur Geschicklichkeit, Athletik, Kämpfen und Willenskraft), Ablenkung und Kriegersegen. Alle haben die Einschränkung Persönlich.",
"PALADIN (Willenskraft W8+): Eigenschaft erhöhen (nur Kämpfen und Willenskraft), Heilung, Schutz, Zuflucht und Kriegersegen. Alle außer Heilung haben die Einschränkung Persönlich.",
"WALDLÄUFER (Überleben W8+): Tierfreund, Eigenschaft erhöhen (nur Athletik, Schießen und Überleben), Verstricken und Fernsicht. Alle außer Verstricken und Tierfreund haben die Einschränkung Persönlich.",
"SCHURKE (Diebeskunst W8+): Eigenschaft erhöhen (nur Athletik, Heimlichkeit und Diebeskunst), Dunkelsicht, Öffnen/Schließen und Wandkrabbler. Alle außer Öffnen/Schließen haben die Einschränkung Persönlich."
],
"p": 37,
"s": [
"FAN",
"SF"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Stiller Zauberer",
"k": "Macht",
"r": 0,
"v": "Arkaner Hintergrund (beliebig außer Barde), Okkultismus W8+",
"w": 0,
"b": [
"Der Charakter hat gelernt, Zauber zu wirken oder Wunder zu bewirken, ohne zu sprechen. Er kann unter Wasser, im Vakuum, geknebelt, innerhalb eines Stille-Zaubers usw. zaubern."
],
"p": 37,
"s": [
"FAN",
"HOR"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Übertragung",
"k": "Macht",
"r": 0,
"v": "Arkaner Hintergrund (beliebig)",
"w": 0,
"b": [
"Der Magier, Priester oder sonstige Anwender arkaner Künste kann seine magische Energie an andere weitergeben. Als begrenzte freie Aktion kann der Charakter bis zu fünf seiner Machtpunkte an jemanden in Sichtweite übertragen."
],
"p": 38,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Im Sattel geboren",
"k": "Experten",
"r": 0,
"v": "Geschicklichkeit W8+, Reiten W6+",
"w": 0,
"b": [
"Es gibt keinen Ort, an dem dieser Krieger lieber wäre als auf dem Rücken eines schnellen Pferdes oder eines anderen, exotischeren Reittiers.",
"Ein Held mit diesem Talent erhält eine kostenlose Wiederholung auf alle Reiten-Proben und erhöht die Bewegungsweite seines Reittiers um 2 sowie dessen Sprintwürfel um einen Schritt."
],
"p": 38,
"s": [
"FAN",
"DL"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Entdecker",
"k": "Experten",
"r": 0,
"v": "Überleben W8+",
"w": 0,
"b": [
"Die Welt ist weit, und dieser Wanderer fühlt sich berufen, ihre unerforschten Winkel zu entdecken.",
"Bei den Reiseregeln (siehe Grundregelwerk) kann der Entdecker eine Überleben-Probe ablegen, um eine zusätzliche Karte aus dem Aktionsdeck zu ziehen (oder zwei mit einer Steigerung) und zu wählen, welche er verwendet.",
"Außerdem verkürzen der Entdecker und seine Gruppe die Reisezeiten um 10 Prozent."
],
"p": 38,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Ritter",
"k": "Experten",
"r": 0,
"v": "Willenskraft W6+, Stärke W8+, Konstitution W8+, Kämpfen W8+, Reiten W6+, Verpflichtung (Schwer – dem Lehnsherrn dienen)",
"w": 0,
"b": [
"Ritter schwören ihrem Lehnsherrn die Treue und dienen als Vollstrecker und vor allem als Krieger für jede Sache, die ihr Herr verlangt. Sie haben die Befehlsgewalt über das einfache Volk seines Reiches, die ihr Lehnsherr ihnen verleiht. Meist beschränkt sie sich auf Nahrung, Unterkunft und grundlegende Dienste, die zur Erfüllung ihrer Pflichten nötig sind, kann mit ausdrücklicher Genehmigung aber auch das Aufstellen von Milizen, das Schlichten von Streitigkeiten und das Sprechen von Recht umfassen.",
"Sie vertreten ihren Herrn und addieren daher +1 auf Einschüchtern- oder Überreden-Proben gegenüber Personen, die Autorität respektieren oder fürchten.",
"Wird das Talent bei der Charaktererschaffung oder mit Zustimmung der SL danach gewählt, erbt oder erhält der Held ein Streitross, eine Lanze, ein Langschwert, eine vollständige schwere Rüstung (oder mittlere, wenn gewünscht) und einen mittleren Schild."
],
"p": 38,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Reittier",
"k": "Experten",
"r": 0,
"v": "Reiten W6+",
"w": 0,
"b": [
"Der Held besitzt ein Reittier, das zäher und klüger ist als die meisten anderen und seinem Herrn völlig ergeben (auch wenn es mürrisch oder sonst schwierig ist).",
"Helden normaler Größe dürfen ein Reitpferd, Streitross oder (mit Erlaubnis der SL) Elfenpferd haben. Kleinere Helden können stattdessen einen Eber, eine Großkatze, einen Schreckenswolf oder einen Wolf wählen. Weitere Reittiere sind verfügbar, wenn sie zum Charakter und zum Setting passen.",
"Was auch immer das Tier ist: Sein Verstand liegt einen Würfeltyp höher als normal, und es ist Widerstandsfähig.",
"Für jeden aktuellen Rang deines Charakters und jedes Mal, wenn er einen neuen Rang erreicht, erhält das Reittier einen der folgenden Effekte: Eine Eigenschaft um einen Würfeltyp steigern (höchstens einmal pro Eigenschaft); oder ein Talent oder eine Monströse Fähigkeit, die zu seiner Art passt (Entscheidung der SL). Die Voraussetzungen müssen wie üblich erfüllt sein.",
"Tod: Stirbt das Reittier, tritt irgendwann ein anderes an seine Stelle, vielleicht nach einer erzählerischen Begegnung oder dem Besuch eines Ortes, an dem man solche Kreaturen zähmen oder kaufen kann.",
"GROSSES REITTIER: Im Heldenrang kannst du wählen, dein Reittier zu behalten und normal aufsteigen zu lassen oder es gegen ein „Großes Reittier“ einzutauschen. (Oder du nimmst ein Großes Reittier, wenn du das Talent vorher nicht hattest.) Helden normaler Größe können einen Bären, einen Dinosaurier (riesiger Pflanzenfresser oder Flugsaurier), einen Elefanten, ein Riesentier (Vogel, Hundertfüßer, Skorpion, Kröte), einen Greif, einen Hippogryph, einen Pegasus, einen Säbelzahntiger, ein Einhorn oder eine Wyverne wählen. Kleine Helden können zusätzlich einen Dinosaurier (Velociraptor), ein Riesentier (Ameise, Krabbe, Echse), einen Löwen oder einen Peryton wählen. Der Verstand eines Großen Reittiers liegt einen Würfeltyp höher als normal, es ist Sehr Widerstandsfähig und erhält einen Aufstieg für jeden Rang seines Herrn wie oben beschrieben.",
"LEGENDÄRES REITTIER: Im Legendären Rang kannst du wählen, dein Reittier zu behalten und normal aufsteigen zu lassen oder es gegen ein „Legendäres Reittier“ einzutauschen. (Oder du nimmst ein Legendäres Reittier, wenn du das Talent vorher nicht hattest.) Helden normaler Größe können einen Dinosaurier (Tyrannosaurus rex), einen (jungen) Drachen (der Spieler wählt Drachenart und Odemwaffe), einen Drachling, ein Mammut, einen Roc oder ein (junges) Baumvolk wählen. Kleine Helden haben drei zusätzliche Wahlmöglichkeiten: Basilisk-Hahn (Cockatrice), Drache (Jungtier), Höllenhund oder kleiner Elementar. Der Verstand eines Legendären Reittiers liegt einen Würfeltyp höher als normal, es ist eine Wildcard und erhält einen Aufstieg für jeden Rang seines Herrn wie oben beschrieben.",
"Normale Reittiere können gekauft oder im Spiel erworben werden, sind ihrem Herrn aber nicht ergeben, werden nicht ersetzt und steigen nicht auf wie solche, die mit dem Talent Reittier gewählt wurden. Wie diese besonderen Tiere ins Spiel kommen, sollte gut überlegt und erzählerisch begleitet werden: ein Lohn für einen Dienst, die Gabe einer dankbaren Gottheit, im Kampf bezwungen oder vor einem schlimmen Schicksal gerettet. SL und Spieler sollten gemeinsam beschreiben, wie das Tier gefunden und gezähmt wurde. Es sollte einen Namen und eine eigene Persönlichkeit mit kleinen Charakterzügen erhalten, die es von anderen seiner Art abheben."
],
"p": 38,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Giftmischer",
"k": "Experten",
"r": 0,
"v": "Alchemie, Heilen oder Überleben W6+",
"w": 0,
"b": [
"Der Charakter ist ein Experte für Gifte. Er stellt Gifte in der halben Zeit her. Außerdem halten seine Kontaktgifte 12 statt vier Stunden."
],
"p": 39,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Kundschafter",
"k": "Experten",
"r": 1,
"v": "Überleben W6+",
"w": 0,
"b": [
"Kundschafter sind Meister darin, sich in den mystischen Ländern ihrer fantastischen Welten zurechtzufinden. Zieht die SL während einer Reise der Gruppe eine Bildkarte (siehe Begegnungsregeln unter Reisen im Grundregelwerk), darf der Kundschafter eine Wahrnehmungsprobe mit –2 ablegen, um die Gefahr, die Kreatur oder das Ereignis als Erster zu bemerken.",
"Kundschafter gelten bei Wahrnehmungsproben gegen Heimlichkeit stets als wachsam und addieren +2 auf Allgemeinwissen-Proben, um Informationen über Städte, Außenposten, Landmarken oder Verstecke entlang einer Route abzurufen, die sie schon einmal bereist haben (Entscheidung von Spieler und SL)."
],
"p": 39,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Steinkenner",
"k": "Experten",
"r": 0,
"v": "Reparieren W6+",
"w": 0,
"b": [
"Wer sein Leben in der Nähe bearbeiteten Steins verbringt, bemerkt schnell Unregelmäßigkeiten oder Veränderungen in dessen Aufbau. Sofern er die Arbeit sehen oder fühlen kann, erhält er eine kostenlose Wahrnehmungsprobe mit +2, um Fallen, versteckte Türen oder Kammern im Mauerwerk innerhalb von 10 Fuß zu entdecken. Ein Erfolg bedeutet, dass er weiß, dass etwas verändert wurde; eine Steigerung gibt ihm Einblick in den ungefähren Zweck."
],
"p": 40,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Fallensinn",
"k": "Experten",
"r": 1,
"v": "Reparieren W6+",
"w": 0,
"b": [
"Viele Abenteurer werden geschickt darin, alle bis auf die raffiniertesten Schlingen und Fallen zu entdecken und zu überwinden. Sie erhalten eine Wahrnehmungsprobe, sobald eine entdeckbare Falle innerhalb von 5\" (10 Yards) ausgelöst werden soll. Sie brauchen Sichtlinie zur Falle und dürfen nicht Angeschlagen oder Betäubt sein. Das funktioniert im Prinzip wie Gefahrensinn, gilt aber nur für mechanische und magische Fallen (siehe Fallen auf S. 71).",
"Wird die Falle entdeckt und kann ihr ausgewichen werden, ignorieren der Schurke und jeder von ihm Gewarnte dafür 2 Punkte Ausweichabzüge. Kann der Falle normalerweise nicht ausgewichen werden, darf jeder Gewarnte mit dem üblichen Abzug von –2 ausweichen.",
"Fallen entschärfen: Ein Charakter mit Fallensinn ignoriert beim Entschärfen von Fallen bis zu 2 Punkte Abzüge auf Diebeskunst."
],
"p": 40,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Schatzjäger",
"k": "Experten",
"r": 0,
"v": "Wahrnehmung W8+, Okkultismus W8+",
"w": 0,
"b": [
"Grabräuber und Schatzjäger wissen, worauf sie achten müssen, wenn sie Haufen von Gold und Waren durchwühlen. Sie dürfen auf Verstand würfeln, um den Wert von Waren oder Schätzen einzuschätzen oder eine grobe Vorstellung von den Fähigkeiten eines magischen Gegenstands zu gewinnen. Wer etwa einen Sprengstein (S. 160) findet, weiß vielleicht, dass er wegen seiner explosiven Wirkung geworfen wird, kennt aber Reichweiten und Schaden erst, wenn er ihn benutzt.",
"Würfelt die SL schließlich auf magische Gegenstände (siehe Kapitel Fünf: Schätze), kann ein Schatzjäger einen Benny ausgeben, um erneut zu würfeln."
],
"p": 40,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Troubadour",
"k": "Experten",
"r": 1,
"v": "Allgemeinwissen W6+, Darbietung W8+",
"w": 0,
"b": [
"Troubadoure reisen durch die Welt und lernen Kultur, Etikette, Geschichte und vor allem Legenden kennen.",
"Sie addieren +2 auf die meisten Allgemeinwissen-Proben (Entscheidung der SL) und dürfen Darbietung anstelle von Kriegskunst für Anführertalente oder Talente verwenden, die Kriegskunst voraussetzen."
],
"p": 40,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Täuscher",
"k": "Sozial",
"r": 1,
"v": "Verstand W8+",
"w": 0,
"b": [
"Lügen, Täuschung und Irreführung sind das tägliche Brot dieses Schurken. Bei einer Herausforderung mit Verstand- oder Willenskraft-gebundenen Fertigkeiten kann er wählen, ob das Ziel mit Verstand oder Willenskraft widersteht."
],
"p": 40,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Aura des Mutes",
"k": "Übersinnlich",
"r": 0,
"v": "Willenskraft W8+",
"w": 0,
"b": [
"Ein Feld heiliger Energie umgibt dieses edle Wesen. Verbündete innerhalb von 10\" (20 Yards) addieren +1 auf Furchtproben und ziehen 1 von Ergebnissen auf der Furchttabelle ab."
],
"p": 40,
"s": [
"FAN",
"HOR"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Tiersprecher",
"k": "Übersinnlich",
"r": 0,
"v": "",
"w": 0,
"b": [
"Der Charakter kann mit einer allgemeinen Tierklasse sprechen und sie verstehen: Vögel, Meerestiere (Fische, Krebstiere usw.), Insekten, Säugetiere, Reptilien usw.",
"Er kontrolliert sie nicht, kann aber versuchen, sie zu überzeugen, zu helfen oder jede Information zu geben, die Kreaturen ihrer Art verstehen können. Die SL sollte angemessene Modifikatoren ansetzen, wenn er sich mit Haustieren, feindseligen oder scheuen Tieren, Raubtieren oder gejagten Tieren unterhält.",
"Wortschatz, Erinnerung und Verständnis solcher Kreaturen sind durch ihre Art begrenzt – ein Hund weiß und versteht weit mehr als ein Fisch. Auch die Natur der Welt kann bestimmen, wie viel ihre Tiere verstehen."
],
"p": 40,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Schneller Wandel",
"k": "Übersinnlich",
"r": 0,
"v": "Lykanthropie",
"w": 0,
"b": [
"Dieses Talent steht jedem Charakter offen, der sich mit Lykanthropie angesteckt hat (siehe S. 218). Die Verwandlung dauert normalerweise schmerzhafte und groteske 10 Minuten, doch wer dieses Talent besitzt, hat gelernt, den arkanen Aspekt des Fluchs anzunehmen, und kann seine Gestalt als begrenzte Aktion wechseln."
],
"p": 41,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Heimatgrund",
"k": "Legendär",
"r": 4,
"v": "Willenskraft W8+, Arkaner Hintergrund (beliebig)",
"w": 1,
"b": [
"Es gibt wenig Gefährlicheres als einen Druiden in seinem Heimatwald, einen Magier in seinem Unterschlupf oder einen Nekromanten in der zerstörten Stadt, die seine Untotenhorde für ihn errichtet hat.",
"Bestimme gemeinsam mit der SL ein Gebiet als „Heimat“ deines Helden. Das kann für einen Druiden ein ganzer Wald, eine Bucht, eine Küste oder ein See samt Umgebung sein, für einen Kleriker eine Kirche und die kleine Stadt, die sie versorgt, für einen Magier oder Elementaristen ein Turm samt Umgebung, für einen Alchemisten oder Tüftler eine Burg voller Apparate und Chemikalien.",
"Einmal pro Begegnung kann der Charakter innerhalb dieses Gebiets einen Benny ausgeben, um alle seine Machtpunkte zurückzuerhalten. Der Magier spürt zudem seine Heimat, egal wie weit entfernt er ist. Er kann sich zehn Minuten lang konzentrieren (eine Minute auf seinem Heimatgrund), um drei Fragen über den aktuellen, beobachtbaren Zustand seiner Heimat zu stellen, die ihm durch Hellsehen, Visionen oder einen anderen Sinn für das Übernatürliche offenbart werden."
],
"p": 41,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Reliquie",
"k": "Legendär",
"r": 4,
"v": "",
"w": 1,
"b": [
"Mächtige magische Gegenstände sollten normalerweise nur durch epische Queste, gefährliche Wanderungen durch riesige Verliese oder den Tausch gegen große Mengen Gold und anderer Schätze gefunden werden.",
"Bieten sich solche Gelegenheiten nicht, kann ein Held dieses Talent wählen, um einen beliebigen magischen Gegenstand aus dem Companion zu bekommen. Die SL muss die Wahl wie üblich genehmigen und entscheiden, ob es so etwas in ihrer Welt überhaupt gibt. Wenn ja, stößt der Held irgendwie darauf – vielleicht durch ein Erbe, am Ende der nächsten Queste oder als Geschenk derer, denen er geholfen hat.",
"Geht der Gegenstand verloren, findet oder ersetzt er ihn schließlich wieder, muss aber vielleicht eine Sitzung oder zwei ohne ihn auskommen."
],
"p": 41,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Unaufhaltsam",
"k": "Legendär",
"r": 4,
"v": "Konstitution W10+, Eisenkiefer, Nerven aus Stahl",
"w": 1,
"b": [
"Der Held ist eine unwiderstehliche Naturgewalt, unerschrocken angesichts von Entbehrungen und standhaft vor den scheinbar unüberwindlichsten Hindernissen. Er besitzt die Monströse Fähigkeit Unaufhaltsam."
],
"p": 41,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Kriegsschar",
"k": "Legendär",
"r": 4,
"v": "Befehlsgewalt und mindestens zwei weitere Anführertalente, Gefolgsleute",
"w": 1,
"b": [
"Legendäre Anführer ziehen hingebungsvolle Kämpfer an ihre Seite. Jedes Mal, wenn dieses Talent gewählt wird, erhalten fünf Gefolgsleute des Champions die Monströse Fähigkeit Widerstandsfähig."
],
"p": 41,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Chemiker",
"k": "Arkane Hintergründe",
"r": 0,
"v": "Arkaner Hintergrund (Alchemist), Alchemie W8+",
"w": 0,
"b": [
"Die Gebräue des Alchemisten halten eine Woche statt 48 Stunden, wenn sie an andere gegeben werden. Mehr dazu unter dem Arkanen Hintergrund Alchemist auf S. 90."
],
"p": 91,
"s": [
"FAN",
"HOR"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Meisteralchemist",
"k": "Arkane Hintergründe",
"r": 1,
"v": "Arkaner Hintergrund (Alchemist), Alchemie W10+",
"w": 0,
"b": [
"Alchemisten stellen dauerhafte Tränke wie alle anderen her (siehe Herstellung auf S. 169). Manche sind darin besonders geschickt und können auch unterwegs mit alternativen Zutaten potente Getränke brauen.",
"Meisteralchemist erlaubt es dem Wissenschaftler, Tränke zum halben üblichen Preis und so herzustellen, als hätte er Zugang zu einer Einfachen Werkstatt – solange er seine Alchemistentasche oder behelfsmäßige Vorräte hat, die nach Ansicht der SL die nötigen Zutaten oder vernünftigen Ersatz enthalten."
],
"p": 91,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Klagelied",
"k": "Arkane Hintergründe",
"r": 3,
"v": "Arkaner Hintergrund (Barde)",
"w": 0,
"b": [
"Diese unheilvolle Darbietung weckt Furcht bei den Feinden des Barden. Nach Wahl des Barden zieht jeder Feind innerhalb von 10\" (20 Yards) und in Sichtlinie, der einen Benny ausgibt, um Schaden wegzustecken oder einen Eigenschafts- oder Schadenswurf zu wiederholen, 2 vom Ergebnis ab.",
"Der Barde muss sprechen, singen oder sein Instrument spielen können, um diese Fähigkeit zu nutzen."
],
"p": 92,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Heldentaten inspirieren",
"k": "Arkane Hintergründe",
"r": 1,
"v": "Arkaner Hintergrund (Barde), Darbietung W8+",
"w": 0,
"b": [
"Barden inspirieren ihre Gefährten mit epischen Geschichten von Tapferkeit und Mut. Einmal pro Kampfbegegnung (Entscheidung der SL) kann der Barde einen Benny ausgeben, um fünf Inspirationsmarken zu erhalten. Das ist eine begrenzte freie Aktion.",
"Für den Rest der Begegnung kann der Barde diese Marken an jeden innerhalb einer Reichweite von Verstand geben, nur nicht an sich selbst. Das ist jederzeit möglich (solange der Barde bei Bewusstsein ist). Der Empfänger muss die Marke sofort einsetzen – sie kann nicht aufgespart werden.",
"Jede Inspirationsmarke erlaubt es einem Charakter, einen Eigenschafts- oder Schadenswurf zu wiederholen. Ein Wurf kann nur von einer einzigen Inspirationsmarke profitieren, auch wenn mehrere Barden anwesend sind. Weitere Wiederholungen erfordern einen Benny oder eine Sonderfähigkeit."
],
"p": 92,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Instrument",
"k": "Arkane Hintergründe",
"r": 0,
"v": "Arkaner Hintergrund (Barde)",
"w": 0,
"b": [
"Singende Barden nutzen oft Musikinstrumente, um ihre Balladen zu untermalen, mit Akkorden oder hohen Tönen an besonders inspirierenden Stellen ihrer Lieder. Tanzende Barden nehmen vielleicht Bänder oder Schwerter als Instrument, Redner aufwendige Requisiten oder Masken.",
"Ein Barde, der beim Zaubern ein Instrument verwendet, addiert +1 auf seine Darbietung-Probe. Der Bonus gilt nur, wenn Darbietung als arkane Fertigkeit eingesetzt wird. Das Instrument braucht natürlich eine oder mehrere Hände zum Spielen."
],
"p": 93,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Untote vernichten",
"k": "Arkane Hintergründe",
"r": 1,
"v": "Arkaner Hintergrund (Kleriker)",
"w": 0,
"b": [
"Die Untoten sind für gute Kleriker Gräuel. Die Toten haben ihren gerechten Lohn empfangen und sollten nicht ins Land der Lebenden zurückkehren. Kein Wunder, dass diese heiligen Männer und Frauen so oft gerufen werden, sich den tobenden Horden der Untoten entgegenzustellen.",
"Auch böse Kleriker können jene Untoten vernichten, die ihnen im Weg stehen. Vielleicht liegt es an ihrer Verwandtschaft mit Unnatürlichem, vielleicht gewährt ihre Gottheit einfach die Kraft, den Weg ihrer Diener zu noch größerem Unheil freizuräumen.",
"Als begrenzte Aktion gibt der Champion einen Machtpunkt aus, um positive Energie in einer Großen Explosionsschablone zu bündeln, die auf ihn selbst zentriert ist. Jede Untote Kreatur in der Schablone erleidet automatisch 2W6 Schaden (oder 3W6 für zwei Machtpunkte)."
],
"p": 93,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Gnade",
"k": "Arkane Hintergründe",
"r": 0,
"v": "Arkaner Hintergrund (Kleriker), Glaube W8+",
"w": 0,
"b": [
"Als Aktion kann der Kleriker 1 Machtpunkt ausgeben und einem Charakter innerhalb einer Reichweite gleich seiner Willenskraft „Gnade“ gewähren. Dadurch wird automatisch einer der folgenden Zustände beendet: Abgelenkt, Verwundbar oder Angeschlagen."
],
"p": 93,
"s": [
"FAN",
"HOR"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Zorn der Hölle",
"k": "Arkane Hintergründe",
"r": 1,
"v": "Arkaner Hintergrund (Teufelsbeschwörer)",
"w": 0,
"b": [
"Teufelsbeschwörer lenken feurige, höllische Kraft, die Fleisch kochen und Knochen schmelzen kann. Mit diesem Talent verursachen die Mächte Bolzen, Explosion und Flächenschlag des Teufelsbeschwörers +2 Schaden."
],
"p": 94,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Infernalische Rüstung",
"k": "Arkane Hintergründe",
"r": 0,
"v": "Arkaner Hintergrund (Teufelsbeschwörer)",
"w": 0,
"b": [
"Als Aktion kann ein Teufelsbeschwörer seine Kleidung (oder Rüstung, falls er eine trägt) mit einem höllischen Glühen umgeben, das ihm +2 Panzerung gewährt. Das hält so lange an, wie er es wünscht, kennzeichnet ihn aber als Kanalisierer dunkler Magie und macht Heimlichkeit praktisch unmöglich."
],
"p": 94,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Kernholzstab",
"k": "Arkane Hintergründe",
"r": 0,
"v": "Arkaner Hintergrund (Druide)",
"w": 0,
"b": [
"Manche Druiden bündeln ihre Kräfte durch einen Stab aus seltenem Holz, etwa dem Herzen einer mächtigen Eiche oder der letzten Palme einer sterbenden Wüstenoase.",
"Geht ein solcher Stab verloren oder zerbricht, muss der Druide mindestens acht Stunden in einem alten Wald mit einigen hundertjährigen oder älteren Bäumen verbringen. Dort kann er einmal pro Tag eine Glaubensprobe mit –2 ablegen, um einen neuen zu fertigen. Dabei wird der Baum geopfert, aus dem er stammt.",
"KERNHOLZSTAB: Str+W8, Min. Str W6, Gewicht 6 Pfd., Parade +1, Reichweite 1, zweihändig. Nachdem der Druide mit dem Stab getroffen hat, kann er einen Machtpunkt ausgeben, um zusätzlich W6 Schaden zu verursachen. Dieser Würfel darf explodieren."
],
"p": 95,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Wahre Gestalt",
"k": "Arkane Hintergründe",
"r": 1,
"v": "Arkaner Hintergrund (Druide)",
"w": 0,
"b": [
"Während der Gestaltwandlung kann der Druide mit einem Abzug von –2 sprechen und Mächte wirken, auch in einer Form, die das normalerweise nicht erlaubt."
],
"p": 95,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Elementare Absorption",
"k": "Arkane Hintergründe",
"r": 0,
"v": "Arkaner Hintergrund (Elementarist)",
"w": 0,
"b": [
"Die Elemente erfüllen und nähren dich. Deine Robustheit steigt um +2, solange du elementare Synergie erlebst (siehe Arkaner Hintergrund Elementarist)."
],
"p": 96,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Elementarmeister",
"k": "Arkane Hintergründe",
"r": 1,
"v": "Arkaner Hintergrund (Elementarist)",
"w": 0,
"b": [
"Elementaristen müssen sich bei ihrer Entstehung als Magier für einen elementaren Ursprung entscheiden: Erde, Feuer, Wasser oder Luft. Dieses Talent gibt ihnen Gewalt über eine weitere Elementarkraft. Sie können die Ausprägungen ihrer Mächte nach Belieben zwischen den gemeisterten Elementen wechseln.",
"Elementarmeister kann mehrfach gewählt werden, um alle vier Elemente zu erhalten (oder mehr, falls es in der Welt der SL welche gibt)."
],
"p": 96,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Tödliche Illusion",
"k": "Arkane Hintergründe",
"r": 1,
"v": "Arkaner Hintergrund (Illusionist), Zaubern W10+",
"w": 0,
"b": [
"Der Zauberwirker kann den Machtmodifikator Tödlich für seine Illusionen ohne zusätzliche Machtpunktkosten nehmen."
],
"p": 97,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Meister der Illusion",
"k": "Arkane Hintergründe",
"r": 0,
"v": "Arkaner Hintergrund (Illusionist), Zaubern W8+",
"w": 0,
"b": [
"Die Illusionen des Zauberwirkers besitzen die Machtmodifikatoren Beweglichkeit und Ton ohne zusätzliche Machtpunktkosten."
],
"p": 97,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Seelenkrug",
"k": "Arkane Hintergründe",
"r": 4,
"v": "Arkaner Hintergrund (Nekromant), Okkultismus W10+",
"w": 0,
"b": [
"Die Meisterschaft des Nekromanten über die dunklen Künste hat es ihm schließlich erlaubt, den Tod zu überlisten, indem er seine Seele versteckt.",
"Dadurch wird der Nekromant Untot, auch wenn er für die Dauer seiner natürlichen Lebensspanne lebendig und gesund aussehen kann. Irgendwann fordert die Zeit jedoch ihren Tribut, und der wahre Zustand des Nekromanten wird sichtbar.",
"Wähle ein kleines bis mittelgroßes Gefäß: einen Edelstein, eine Statuette, einen Schädel, eine Vase, ein Schwert usw., das als Behälter der Seele dient. Wird der Nekromant getötet, bezieht die Seele 2W6 Tage später einen neuen Leichnam. Wird das Gefäß zerstört, wird auch die Seele zerstört, weshalb die meisten Nekromanten ihre Seelenkrüge in einem Tresor oder an einem anderen sicheren Ort verstecken."
],
"p": 98,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Untoter Vertrauter",
"k": "Arkane Hintergründe",
"r": 1,
"v": "Arkaner Hintergrund (Nekromant)",
"w": 0,
"b": [
"Der Nekromant erhält ein untotes Tier als Gefährten, das ihm als Vertrauter dient. Das funktioniert genau wie das Talent Vertrauter (S. 36), nur dass die Kreatur die Fähigkeit Untot erhält: +2 Robustheit; +2 auf das Erholen von Angeschlagen; kein zusätzlicher Schaden durch Gezielte Angriffe; ignoriert 1 Punkt Wundabzüge; atmet nicht; immun gegen Krankheit und Gift."
],
"p": 98,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Urmagie",
"k": "Arkane Hintergründe",
"r": 1,
"v": "Arkaner Hintergrund (Schamane)",
"w": 0,
"b": [
"Urmagie addiert +2 auf den Schaden jeder Macht, die Schaden verursacht, wie Bolzen, Explosion, Flächenschlag oder Schadensfeld.",
"Würfelt der Zauberwirker jedoch einen Kritischen Fehlschlag, fluten urzeitliche Energien die Welt und Betäuben alle in einer Großen Explosionsschablone um den Zauberwirker (ihn selbst eingeschlossen!)."
],
"p": 99,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Heiliger Fetisch",
"k": "Arkane Hintergründe",
"r": 0,
"v": "Arkaner Hintergrund (Schamane), Glaube W8+",
"w": 0,
"b": [
"Fetische sind Gegenstände, die einem Schamanen helfen, seine Kräfte zu bündeln. Ein Heiliger Fetisch wurde auf irgendeine Weise gesegnet oder geweiht. Solange sie den Fetisch in der Hand hält oder sichtbar am Körper trägt, erhält sie eine kostenlose Wiederholung, wenn eine Glaubensprobe misslingt.",
"Geht ein Heiliger Fetisch verloren oder wird er zerstört, kann der Schamane ihn ersetzen, indem er seinen Stamm um einen Gegenstand von ideellem Wert bittet oder ein neues Gerät schafft, das das Wesen seines Volkes einfängt."
],
"p": 99,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Große Macht",
"k": "Arkane Hintergründe",
"r": 2,
"v": "Arkaner Hintergrund (Zauberer)",
"w": 0,
"b": [
"Der Zauberer kann einen Benny ausgeben, um eine einzelne Macht mit bis zu 20 Machtpunkten mit einem Abzug von –2 auf seine Zaubern-Probe zu wirken. Übrige Punkte werden nicht aufgespart. Misslingt die Macht, verliert der Zauberer dauerhaft einen Würfeltyp bei einer Eigenschaft seiner Wahl."
],
"p": 100,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Phänomenale Macht",
"k": "Arkane Hintergründe",
"r": 3,
"v": "Arkaner Hintergrund (Zauberer), Große Macht",
"w": 0,
"b": [
"Das funktioniert genau wie Große Macht, erlaubt es dem Zauberer aber, Überzeugung auszugeben, um jeden im Setting verfügbaren Zauber zu wirken. (Er addiert dennoch zusätzlich seinen Überzeugungsbonus auf den Wurf.)"
],
"p": 100,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Arkane Pferderüstung",
"k": "Arkane Hintergründe",
"r": 1,
"v": "Arkaner Hintergrund (Beschwörer), Beschwöre Tier",
"w": 0,
"b": [
"Die Tiere des Zauberwirkers erscheinen in arkane Rüstung gehüllt, geschmiedet aus magischer Energie. Das erhöht ihre Robustheit um +2 und kann nicht gebannt werden."
],
"p": 101,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Wilde Beschwörung",
"k": "Arkane Hintergründe",
"r": 1,
"v": "Arkaner Hintergrund (Beschwörer), Beschwöre Monster",
"w": 0,
"b": [
"Ein Beschwörer mit diesem Talent hat gelernt, mit der Macht Beschwöre Monster wildere, erfahrenere Bestien herbeizurufen. Er kann ihnen ein beliebiges Kampftalent seines Ranges oder darunter gewähren."
],
"p": 101,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Große Beschwörung",
"k": "Arkane Hintergründe",
"r": 3,
"v": "Arkaner Hintergrund (Beschwörer), Beschwöre Tier, Beschwöre Monster",
"w": 0,
"b": [
"Der Magier kann Bestien herbeirufen, die die meisten anderen nicht beschwören können, darunter einen Barghest für 5 Punkte, ein Mammut für 7 Punkte, ein Frostmammut für 8 Punkte, einen Tyrannosaurus rex für 8 Punkte oder einen jungen Drachen für 11 Punkte."
],
"p": 101,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Konstrukt-Vertrauter",
"k": "Arkane Hintergründe",
"r": 0,
"v": "Arkaner Hintergrund (Tüftler)",
"w": 0,
"b": [
"Der Tüftler erhält einen magisch belebten tierischen Gefährten aus Metall, Uhrwerkzahnrädern oder anderer Maschinerie. Das funktioniert genau wie das Talent Vertrauter (S. 36), nur dass die Kreatur die Fähigkeit Konstrukt erhält: Konstrukte addieren +2 auf das Erholen von Angeschlagen, ignorieren 1 Punkt Wundabzüge, atmen und essen nicht, sind immun gegen Krankheit und Gift, verbluten nicht, und Wunden werden mit Reparieren statt Heilen entfernt, ohne „Goldene Stunde“."
],
"p": 102,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Rüstung des Tüftlers",
"k": "Arkane Hintergründe",
"r": 1,
"v": "Arkaner Hintergrund (Tüftler)",
"w": 0,
"b": [
"Der Tüftler hat seine Rüstung mit geschickt platzierten Federn, elastischen Riemen und verstärkten Armschienen verändert.",
"Solange der Tüftler mindestens Lederrüstung trägt und vier Stunden sowie etwas Material für die nötigen Anpassungen hat, kann er die Mindeststärke von Lederrüstung (+2) oder besser um einen Würfeltyp senken. Mit einer Minute Arbeit und einer Reparieren-Probe kann er einen der folgenden Effekte anwenden (und später einen anderen wählen):",
"ARME: Der Tüftler addiert +2 auf seinen Nahkampfschaden und erhält eine kostenlose Wiederholung bei Stärkeproben (nicht bei Schadenswürfen).",
"RUMPF: Erhöhe den Panzerungswert von Brust und Rücken um +2.",
"BEINE: Der Tüftler kann doppelt so weit springen und addiert +4 auf seine Bewegungsweite.",
"Ausfall: Erleidet der Träger eine Wunde, würfle einen Würfel. Bei ungerader Zahl fällt der Zusatzeffekt der Rüstung auseinander und erfordert vier Stunden Arbeit und eine Reparieren-Probe, um die entsprechenden Mechanismen zu ersetzen."
],
"p": 102,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Der böse Blick",
"k": "Arkane Hintergründe",
"r": 1,
"v": "Arkaner Hintergrund (Hexenmeister/Hexe)",
"w": 0,
"b": [
"Mächtige Hexen und Hexenmeister sind für ihren unheilvollen Blick bekannt. Die Einheimischen nennen das den „bösen Blick“, auch wenn der Magier eigentlich reinen Herzens ist.",
"Einmal pro Begegnung kann die Hexe als freie Aktion ein intelligentes Wesen innerhalb von 6\" (12 Yards) anvisieren. Für den Rest der Begegnung muss das Ziel eine Willenskraftprobe mit –2 schaffen, um einen Benny auszugeben. Misslingt sie, geht der Benny ohne Wirkung verloren."
],
"p": 103,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Die Geisterstunde",
"k": "Arkane Hintergründe",
"r": 1,
"v": "Arkaner Hintergrund (Hexenmeister/Hexe)",
"w": 0,
"b": [
"Hexen und Hexenmeister sind zwischen Mitternacht und 1 Uhr (oder einer anderen passenden Zeit in deiner Kampagnenwelt) mächtiger. In dieser Stunde kann eine Hexe oder ein Hexenmeister keinen Kritischen Fehlschlag würfeln (es ist nur ein normaler Fehlschlag) und erhält jedes Mal, wenn sie eine Wunde erleidet, einen kostenlosen Wurf zum Wegstecken!"
],
"p": 103,
"s": [
"FAN",
"HOR"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Arkane Eingebung",
"k": "Arkane Hintergründe",
"r": 3,
"v": "Arkaner Hintergrund (Magier)",
"w": 0,
"b": [
"Große Magier sammeln esoterisches Wissen und halten es in Schriftrollen, Handbüchern und Wälzern fest, die zusammen Zauberbücher genannt werden. Solange ein Magier Zugriff auf seine Zauberbücher hat, kann er einen Benny ausgeben, um jede Macht seines Ranges oder darunter zu wirken. Die Macht kann normal aufrechterhalten werden, wird danach aber vergessen (der Magier fügt sie nicht seiner Mächteliste hinzu).",
"Ein Magier kann diese Fähigkeit nicht nutzen, wenn ihm sein Zauberbuch genommen wird."
],
"p": 104,
"s": [
"FAN",
"HOR"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Zauberbücher",
"k": "Arkane Hintergründe",
"r": 0,
"v": "Arkaner Hintergrund (Magier)",
"w": 0,
"b": [
"Die Zauberbücher eines Magiers enthalten umfangreiche Notizen zu magischen Vorgängen, arkanen Beobachtungen und thaumaturgischen Erkenntnissen. Wann immer er das Talent Neue Mächte wählt, erhält er drei neue Mächte statt zwei. Außerdem erhält er beim Wählen dieses Talents sofort eine Macht seines Ranges oder darunter."
],
"p": 104,
"s": [
"FAN"
],
"bk": "sw_fan",
"o": 2
},
{
"n": "Galgenhumor",
"k": "Hintergrund",
"r": 0,
"v": "Provozieren W6+",
"w": 0,
"b": [
"Manche Menschen begegnen grauenhaften Umständen mit Humor, oder sie sind einfach so hart im Nehmen, dass sie dem Sensenmann ins Gesicht lachen können.",
"Ein Charakter mit Galgenhumor darf bei einer Furchtprobe Provozieren statt Willenskraft verwenden (alle üblichen Modifikatoren gelten normal). Erzielt sie eine Steigerung, verspottet sie die Bedrohung so wirkungsvoll, dass es für alle Verbündeten, die dieselbe Furchtprobe ablegen, als +1 Unterstützung zählt."
],
"p": 8,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Unerbittlich",
"k": "Hintergrund",
"r": 0,
"v": "Willenskraft W8+",
"w": 0,
"b": [
"Dein Jäger ist wirklich getrieben, das Böse zu besiegen. Er muss es überall aufspüren, wo er es vermutet, und duldet keine Einmischung von denen, die er für Hindernisse hält.",
"Im Gegenzug für diese hartnäckige Entschlossenheit und unerschütterliche Hingabe an die Jagd dürfen Unerbittliche Charaktere, die Angeschlagen sind, dennoch eine einzelne Aktion mit einem Abzug von –2 ausführen."
],
"p": 8,
"s": [
"HOR",
"DL"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Veteran der dunklen Welt",
"k": "Hintergrund",
"r": 0,
"v": "Verstand W8+",
"w": 0,
"b": [
"Dein Held ist ein wenig länger dabei als der Rest der Gruppe. Vielleicht ist sie älter, vielleicht hat sie schon mehr als ihren Anteil an Abscheulichkeiten bekämpft.",
"Veteranen der dunklen Welt beginnen das Spiel im Rang Fortgeschritten (oder einen Rang höher als die anderen Jäger deiner Kampagne) und erhalten bei der Charaktererschaffung sofort vier Aufstiege. Der Preis für diese Erfahrung ist ein Wurf auf die untenstehende Tabelle Veteran der dunklen Welt, um zu sehen, welche Unglücke in der Vergangenheit deines Helden liegen.",
"W20 – 1–6 Hohes Handicap: Das Wesen erhält ein zusätzliches Schweres Handicap ihrer Wahl.",
"7–8 Verhext: Der Veteran ist verflucht oder geriet an etwas, das ihn für immer verhext hat. Er erhält das Handicap Pechvogel.",
"9–10 Nachtschrecken: Die Träume des Charakters werden von den vielen schrecklichen Dingen heimgesucht, die sie gesehen hat. Sie erhält das Handicap Nachtschrecken (S. 7). Hat sie es bereits, zieht sie 2 statt 1 von Willenskraftwürfen ab.",
"11–12 Rückblenden: Die Gedanken des Überlebenden wandern oft zu längst vergangenen Zeiten und lange toten Freunden. Immer wenn ihre Aktionskarte im Kampf ein Kreuz ist, ist sie Abgelenkt.",
"13 Verlassen: Der Veteran beginnt zu glauben, dass er seinen langen, schrecklichen Kampf nicht gewinnen wird. Er zieht 2 von allen Willenskraftwürfen ab.",
"14–15 Verstümmelt: Die Begegnung mit einer übernatürlichen Kreatur hat eines der Glieder des Charakters verstümmelt oder ganz genommen. Würfle einen W6. Bei 1–3 ist er Langsam (Gering); bei 4–6 hat er seine Hand ohne Waffe verloren und erhält das Handicap Einarmig.",
"16–17 Gejagt: Das Wesen hat mächtige oder zahlreiche Feinde, die seinen Tod wollen. Meist haben sie recht – er hat ihnen, ihrer Familie oder ihrer Art vor langer Zeit Unrecht getan, und sie wollen Rache. Er erhält das Handicap Feind (Schwer).",
"18–19 Leichtsinnig: Der Charakter hat schon alles gesehen. Sie erhält das Handicap Impulsiv.",
"20 Zum Tode gezeichnet: Der Veteran hat sich in ferner Vergangenheit mit einer mächtigen übernatürlichen Kraft angelegt, die ihn tot sehen will. Er erhält das Handicap Dem Tode geweiht."
],
"p": 8,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Mut",
"k": "Anführer",
"r": 1,
"v": "Befehlsgewalt, Überreden W8+",
"w": 0,
"b": [
"Ein ruhiger, standhafter Held inspiriert die Menschen um sich, selbst angesichts überwältigenden Grauens. Jeder Verbündete im Befehlsradius erhält eine kostenlose Wiederholung einer misslungenen Furchtprobe."
],
"p": 9,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Monsterjäger",
"k": "Experten",
"r": 1,
"v": "Willenskraft W6+",
"w": 0,
"b": [
"Der Charakter ist völlig immun gegen Furchtproben durch eine allgemeine Art von Kreaturen, etwa Geister, Werwölfe, Vampire, Zombies oder Konstrukte (Entscheidung der SL). Furchtproben durch die Macht Furcht werden dadurch nicht aufgehoben.",
"Das Talent kann mehrfach gewählt werden und gilt jeweils für eine andere Kreaturenart."
],
"p": 9,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Schreikönigin/Schreikönig",
"k": "Experten",
"r": 2,
"v": "",
"w": 0,
"b": [
"Dein Held hat allem getrotzt, was die Dunkelheit aufbieten konnte, und überlebt. Sie hat Monster, Wahnsinn, Chaos und vielleicht am wichtigsten die Furcht überwunden. Muss die Schreikönigin oder der Schreikönig auf der Tabelle Furchteffekte würfeln, darf sie das erste Ergebnis wiederholen, muss aber das zweite akzeptieren!"
],
"p": 9,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Letztes Mädchen/Letzter Junge",
"k": "Sozial",
"r": 0,
"v": "ein im Verhältnis zum Setting im Allgemeinen „tugendhafter“ Mensch",
"w": 0,
"b": [
"Dein Charakter frönt selten Lastern. Sie glaubt an die Kraft des Guten und an wahre Liebe. Andere necken sie vielleicht als „Musterschülerin“, doch insgeheim bewundern sie ihren inneren Frieden und ihre Charakterstärke.",
"Einmal pro Kampfbegegnung (Entscheidung der SL) kann ein Letztes Mädchen einen Benny ausgeben, um fünf Inspirationsmarken zu erhalten. Das ist eine begrenzte freie Aktion. Für den Rest der Begegnung kann die Heldin diese Marken an jeden innerhalb einer Reichweite von Verstand geben, nur nicht an sich selbst. Das ist jederzeit möglich, solange sie bei Bewusstsein ist, doch der Empfänger muss die Marke sofort einsetzen – sie kann nicht aufgespart werden.",
"Jede Inspirationsmarke erlaubt es einem Charakter, einen Eigenschafts- oder Schadenswurf zu wiederholen. Der Wurf kann nur von einer einzigen Inspirationsmarke profitieren, auch wenn mehrere „Letzte“ Mädchen anwesend sind. Weitere Wiederholungen erfordern einen normalen Benny oder eine Sonderfähigkeit.",
"Inspirationsmarken sind keine Bennys, lösen keine Talente aus, die Bennys nutzen (wie Elan), und können nicht anderweitig als solche verwendet werden, etwa zum Ziehen neuer Aktionskarten oder zum Wegstecken von Wunden."
],
"p": 9,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Visionen",
"k": "Übersinnlich",
"r": 0,
"v": "",
"w": 0,
"b": [
"Dunkle Träume oder aufblitzende Bilder von Untergang und Grauen erfüllen die Gedanken dieser Person. Die Visionen sind oft beunruhigend, aber auch nützlich.",
"Einmal pro Spielsitzung erhält der Charakter eine Vision. Das kann ein plötzliches Aufblitzen zu jeder Zeit sein, ein Albtraum, der nur im Schlaf auftritt, oder ein aktiver Vorgang wie das Lesen von Teeblättern oder Tarotkarten.",
"Tritt das ein, verwende das System Zeichen und Omen von S. 46."
],
"p": 9,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Kennerschaft",
"k": "Arkane Hintergründe",
"r": 2,
"v": "Arkaner Hintergrund (Alchemist), Alchemie W10+",
"w": 0,
"b": [
"Ein kennerhafter Alchemist weiß, welche Zutaten für seine Gebräue die besten sind, und verwirft minderwertige oder weniger reine Reagenzien zugunsten der hochwertigsten.",
"Diese Sorgfalt erhöht die Haltbarkeit der Wirkung eines Tranks. Jede Macht mit Dauer 5 hat jetzt Dauer 8, wenn sie sie in ihre Gebräue legt."
],
"p": 58,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Vorwarnung",
"k": "Arkane Hintergründe",
"r": 1,
"v": "Arkaner Hintergrund (Wahrsagerin)",
"w": 0,
"b": [
"Die Wahrsagerin verändert das Gewebe des Schicksals, um ihren Feinden in die Quere zu kommen. Hat ein Feind (oder eine Gruppe von Feinden mit derselben Aktionskarte) seine Aktionskarte gewählt und alle Talente, Handicaps und Fähigkeiten berücksichtigt, die Aktionskarten betreffen, kann sie einen Benny ausgeben, um diesen Feind zu zwingen, seine Aktionskarte abzuwerfen und neu zu ziehen. Der Feind kann danach Bennys ausgeben, um neue Aktionskarten zu ziehen, wenn er will.",
"Die Wahrsagerin kann einen Feind nie zwingen, einen Joker abzuwerfen."
],
"p": 61,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Geisterfreund",
"k": "Arkane Hintergründe",
"r": 0,
"v": "Arkaner Hintergrund (Medium)",
"w": 0,
"b": [
"Irgendwann hat das Medium einen freundlichen Geist getroffen und sich mit ihm angefreundet. Das Wesen verhält sich genau wie der Vertraute einer Hexe (siehe S. 72), besitzt aber volle menschliche Intelligenz und die Sonderfähigkeit Ätherisch."
],
"p": 62,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "In diesem Haus ist es sauber",
"k": "Arkane Hintergründe",
"r": 1,
"v": "Arkaner Hintergrund (Medium)",
"w": 0,
"b": [
"Die Erfahrung eines Mediums im Vertreiben von Geistern gewährt ihr einen Bonus von +2 auf ihre Wurf der arkanen Fertigkeit beim Wirken von Verbannen."
],
"p": 62,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Universeller Schutzzauber",
"k": "Arkane Hintergründe",
"r": 1,
"v": "Arkaner Hintergrund (Okkultist)",
"w": 0,
"b": [
"Okkultisten blicken in die dunkelsten Dimensionen, lesen die profansten Geheimnisse und erforschen die schwärzesten Künste. Wer dieses Talent besitzt, hat ein eigenes persönliches Schutzsymbol geschaffen, das gegen alle übernatürlichen Kreaturen wirkt – gute wie böse! Informationen zu Schutzzeichen stehen auf S. 48.",
"Der Schutz wird meist als Halskette, Ring oder Armband getragen – etwas, das sich leicht vorzeigen lässt, um sich gegen die Kreaturen der Nacht zu schützen."
],
"p": 63,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Spüren",
"k": "Arkane Hintergründe",
"r": 0,
"v": "Arkaner Hintergrund (Psychischer Ermittler), Psionik W8+",
"w": 0,
"b": [
"Der Ermittler kann alle denkenden Verstände innerhalb von 10\" (20 Yards) wahrnehmen, ob sie ihn sehen kann oder nicht. Er kann diese Gedanken nicht lesen, erkennt aber Richtung und Entfernung zu jedem und besonders starke Gefühle – Wut, Furcht, Freude usw.",
"Das kann ein praktisches Hilfsmittel sein, um einen versteckten Feind zu erkennen, den Aufenthaltsort eines gefesselten oder hilflosen Opfers zu bestimmen, den Anführer eines Mobs auszumachen oder schnell den besten Weg durch eine Menge zu finden. Spüren erfordert Konzentration, ist also eine begrenzte Aktion, und der Psioniker ist Abgelenkt, solange es aktiv ist."
],
"p": 65,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Turm des Willens",
"k": "Arkane Hintergründe",
"r": 1,
"v": "Arkaner Hintergrund (Psychischer Ermittler), Verstand W8+",
"w": 0,
"b": [
"Der Ermittler hat seinen Geist trainiert, geistigen Eingriffen zu widerstehen. Er addiert +4 auf jeden Wurf, um geistigen Eingriffen wie Gedankenlesen, Gedankenleere, Marionette oder ähnlichen monströsen Fähigkeiten zu widerstehen, sie abzuwehren oder sich davon zu erholen.",
"Das ist mit allen anderen Boni und Abzügen auf den Widerstand gegen solche Effekte kumulativ."
],
"p": 65,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Am Scheideweg gewesen",
"k": "Arkane Hintergründe",
"r": 0,
"v": "Willenskraft W8+, Arkaner Hintergrund (Voodoo-Priester), Glaube W8+",
"w": 0,
"b": [
"Der Voodoo-Priester wäre irgendwann beinahe gestorben, kehrte aber zurück. Er hat den Scheideweg zwischen den Welten gesehen, und die Geister hören seinen Ruf besser als die meisten. Dieses Talent kann nur nach der Charaktererschaffung gewählt werden. Der Charakter muss infolge einer Nahtoderfahrung Kampfunfähig gewesen sein (Entscheidung der SL). Überlebt der Voodoo-Priester irgendwie, erhält er eine kostenlose Wiederholung auf Glaubensproben."
],
"p": 67,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Erwählter",
"k": "Arkane Hintergründe",
"r": 1,
"v": "Willenskraft W8+, Arkaner Hintergrund (Voodoo-Priester), Glaube W8+",
"w": 0,
"b": [
"Dieses Talent kann nur einmal gewählt werden und kennzeichnet eine besondere Beziehung zwischen einer Mambo oder einem Houngan und einem bestimmten Loa. Es nützt nur Zaubern, die den Aspekt des Rada-Loa oder den Zorn des Petro-Loa betreffen.",
"Der Held muss seine oder ihre Treue zum gewählten Loa deutlich sichtbar kennzeichnen – vielleicht indem er eine Haustierschlange als „Vermählung“ der Mambo mit Damballa trägt, schwarze „Trauerkleidung“ zu Ehren von Baron Samedi anlegt und so weiter.",
"Solange diese Huldigung sichtbar ist, kostet jede der beiden Mächte 3 Machtpunkte statt 5."
],
"p": 67,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Gefährte der Mächte",
"k": "Arkane Hintergründe",
"r": 2,
"v": "Arkaner Hintergrund (Hexenmeister/Hexe)",
"w": 0,
"b": [
"Okkultisten durchsuchen Zauberbücher, um Zauber außerhalb ihres üblichen Fachgebiets zu wirken (über das Talent Arkane Eingebung). Hexen verkehren zu diesem Wissen mit ursprünglichen oder dunklen Mächten.",
"Eine Hexe kann einen Benny ausgeben, um jeden in der Kampagne verfügbaren (und von der SL genehmigten) Zauber zu wirken und dabei alle Voraussetzungen zu ignorieren, auch den Rang! Der Zauber muss als Ritual gewirkt werden (S. 72) und kann nach dem Wirken normal mit ihren eigenen Machtpunkten aufrechterhalten werden."
],
"p": 69,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Erschwerter Schaden",
"k": "Monsterhelden",
"r": 1,
"v": "",
"w": 0,
"b": [
"Angriffe mit den eigenen Klauen, dem eigenen Biss oder angeborenen Kräften wie heiligem Licht oder Höllenfeuer können jedes andere übernatürliche Wesen verletzen, unabhängig von dessen Unverwundbarkeiten oder Schwächen. Gegner mit Regeneration (Langsam oder Schnell) regenerieren diese Wunden mit –4."
],
"p": 11,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Gesteigerte Furcht",
"k": "Monsterhelden",
"r": 0,
"v": "Willenskraft W8+",
"w": 0,
"b": [
"Alle in diesem Kapitel aufgeführten Monster lösen bei Sterblichen beim ersten Anblick Furcht aus – es sei denn, solche Kreaturen sind im Setting alltäglich. Mit diesem Talent werden diese Furchtproben mit –2 abgelegt."
],
"p": 11,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Alt",
"k": "Monsterhelden",
"r": 0,
"v": "",
"w": 0,
"b": [
"Manche monströsen Wesen haben vielleicht Rom brennen sehen, Mark Twain sprechen hören oder waren sogar dabei, als Luzifer fiel. Sie hatten wohl zahlreiche Leben, mehrere Liebhaber oder Familien und lebten in vielen Teilen der Welt. Ihre angesammelte Erfahrung gibt ihnen +2 auf alle Verstand- und Allgemeinwissen-Würfe.",
"Offensichtlich sind die übrigen Fertigkeiten, Talente und Fähigkeiten, die solch langlebige Wesen haben müssten, mit den üblichen Regeln der Charaktererschaffung nicht möglich. Der Spieler sollte daher mit der Spielleitung klären, warum diese Fähigkeiten fehlen. Vielleicht wurden sie gelöscht oder aus irgendeinem Grund verdrängt, kehren aber zurück, wenn die Kreatur neue Aufstiege erhält und ihr jetziges Leben neu beginnt."
],
"p": 11,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Wildheit",
"k": "Monsterhelden",
"r": 1,
"v": "Stärke W10+",
"w": 0,
"b": [
"Das Monster kann in verzweifelten Zeiten seine bestialische Wildheit, scharfe Klauen oder rohe Wut heraufbeschwören. Die Wilden Angriffe der Kreatur verursachen +4 Schaden statt +2."
],
"p": 11,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Mystische Kräfte (Engel)",
"k": "Monsterhelden",
"r": 1,
"v": "Engel",
"w": 0,
"b": [
"Manche Engel haben einen vollständigen Arkanen Hintergrund, andere sind von ihrem Schöpfer mit einem begrenzten, aber verlässlicheren Satz an Fähigkeiten gesegnet. Wähle eines der folgenden Pakete; weitere Einzelheiten stehen in der Seitenleiste Mystische Kräfte auf S. 11.",
"TOD: Eigenschaft stärken (nur selbst), Ablenkung, Schutz (nur selbst), Niederstrecken.",
"HEROLD: Eigenschaft stärken/senken, Wahrsagen, Heilung, Weitblick."
],
"p": 13,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Übernatürliches spüren (Engel)",
"k": "Monsterhelden",
"r": 0,
"v": "Engel",
"w": 0,
"b": [
"Der Engel kann übernatürliche Wesen und magische Effekte im Umkreis von 10\" (20 Yards) spüren. Die Fähigkeit lokalisiert oder verfolgt solche Wesen nicht, sondern zeigt nur, dass sie anwesend sind, und grob ihre Zahl (wenige oder viele)."
],
"p": 13,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Geschwindigkeit (Engel)",
"k": "Monsterhelden",
"r": 1,
"v": "Engel",
"w": 0,
"b": [
"Der Flugschritt des Engels steigt auf 24. Das Talent kann ein zweites Mal gewählt werden, um den Schritt auf 48 zu erhöhen."
],
"p": 13,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Sprachen (Engel)",
"k": "Monsterhelden",
"r": 1,
"v": "Engel",
"w": 0,
"b": [
"Der Engel kann alle der Menschheit bekannten Sprachen lesen, schreiben und sprechen. Fremde Sprachen oder verschlüsselte Nachrichten versteht sie jedoch nicht."
],
"p": 13,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Widerstand (Engel)",
"k": "Monsterhelden",
"r": 1,
"v": "Engel",
"w": 0,
"b": [
"Der Engel ist von einer unsichtbaren Aura göttlicher Gunst geschützt, die ihm +2 Widerstand gewährt."
],
"p": 13,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Göttlicher Widerstand (Engel)",
"k": "Monsterhelden",
"r": 1,
"v": "Widerstand (Engel)",
"w": 0,
"b": [
"Der Engel ist von einer unsichtbaren Aura göttlicher Gunst geschützt, die ihm weitere 2 Punkte Widerstand gewährt (insgesamt +4)."
],
"p": 13,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Flügelschlag (Engel)",
"k": "Monsterhelden",
"r": 1,
"v": "Engel",
"w": 0,
"b": [
"Die Flügel des Engels werden zu Waffen. Er kann damit mit Str+W8 und Reichweite 2 zuschlagen und sie mit dem Talent Rundumschlag einsetzen.",
"Fliegt der Engel mindestens 5\" (10 Yards) in einigermaßen gerader Linie, verursacht der erste Flügelschlag in einem Zug +4 Schaden.",
"Die Flügel werden außerdem widerstandsfähiger, sodass der Engel sich in sie hüllen kann. Solange die Flügel ausgebreitet sind, erhält er +2 Widerstand – das lässt sich mit einem Gezielten Schuss mit –2 umgehen."
],
"p": 13,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Göttliche Klinge (Engel)",
"k": "Monsterhelden",
"r": 2,
"v": "Engel",
"w": 0,
"b": [
"Der Engel besitzt eine magische Waffe, die andere Unsterbliche töten kann. Sie ignoriert das Talent Unsterblichkeit und addiert +W6 Schaden zu ihrem Grundtyp. Ein göttliches Langschwert verursacht zum Beispiel Str+W8+W6 Schaden."
],
"p": 12,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Heiliges Licht (Engel)",
"k": "Monsterhelden",
"r": 0,
"v": "Engel",
"w": 0,
"b": [
"Der Engel kann schwaches oder helles Licht in einer einzelnen Großen Explosionsschablone an beliebiger Stelle innerhalb von 12\" (24 Yards) erzeugen und sie jede Runde als begrenzte freie Aktion bewegen.",
"Als begrenzte Aktion kann der Engel das heilige Licht auch zu einer sengenden Kegelschablone (oder Strahl) bündeln. Der Angriff nutzt Glaube und verursacht 2W4 Schaden, dem ausgewichen werden kann (mit –2 bei einer Steigerung auf dem Angriffswurf). Ein Kritischer Fehlschlag erschöpft den Engel."
],
"p": 12,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Sengender Strahl (Engel)",
"k": "Monsterhelden",
"r": 2,
"v": "Heiliges Licht (Engel)",
"w": 0,
"b": [
"Der Schaden des Heiligen Lichts des Engels steigt auf 2W6."
],
"p": 12,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Unsterblichkeit (Engel)",
"k": "Monsterhelden",
"r": 3,
"v": "Engel",
"w": 0,
"b": [
"Der Engel hat eine ewige Seele, die auch dann nicht zerstört wird, wenn sein Körper „getötet“ wird. Wird er erschlagen, kehrt er für W4 Tage in den „Himmel“ zurück, aus dem er stammt, und kommt dann in einem neuen Körper mit denselben Werten zurück. Dauerhaft erschlagen werden kann er nur mit einer in der Hölle geschmiedeten Waffe oder anderen von der SL ersonnenen Methoden."
],
"p": 12,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Gepanzerte Haut (Dämon)",
"k": "Monsterhelden",
"r": 1,
"v": "Dämon",
"w": 0,
"b": [
"Die Haut des Dämons ist dick und schuppig und gibt ihm +4 Panzerung am ganzen Körper."
],
"p": 14,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Biss (Dämon)",
"k": "Monsterhelden",
"r": 0,
"v": "Dämon",
"w": 0,
"b": [
"Der Dämon hat Reißzähne, die Str+W6 Schaden verursachen und gegen gepackte Gegner eingesetzt werden können (siehe Ringen im Grundregelwerk). Das Talent kann ein zweites Mal gewählt werden, um den Schaden auf Str+W6, DB 2 zu erhöhen."
],
"p": 14,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Klauen (Dämon)",
"k": "Monsterhelden",
"r": 0,
"v": "Dämon",
"w": 0,
"b": [
"Der Dämon hat einziehbare Klauen, die Str+W4 Schaden verursachen und +2 auf Athletik-Würfe (Klettern) geben. Das Talent kann ein zweites Mal gewählt werden, um den Schaden auf Str+W6, DB 2 zu erhöhen."
],
"p": 14,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Dämonische Unsterblichkeit (Dämon)",
"k": "Monsterhelden",
"r": 2,
"v": "Dämon",
"w": 0,
"b": [
"Der Dämon hat eine ewige Seele, die auch zurückkehrt, wenn sein Körper zerstört wird. Wird er erschlagen, geht er für W4 Tage in die „Hölle“, aus der er stammt, und kehrt dann in einem neuen Körper mit denselben Werten zurück. Dauerhaft erschlagen werden kann er nur mit einer im Himmel oder in der Hölle geschmiedeten Waffe oder anderen von der SL ersonnenen Methoden."
],
"p": 14,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Höllenfeuer (Dämon)",
"k": "Monsterhelden",
"r": 1,
"v": "Dämon",
"w": 0,
"b": [
"Der Dämon kann ein kleines Feuer (1W6 Schaden) in einer einzelnen Kleinen Explosionsschablone an beliebiger Stelle innerhalb von 12\" (24 Yards) erzeugen und es jede Runde als begrenzte freie Aktion bewegen.",
"Als begrenzte Aktion kann der Dämon seine Höllenflamme auch zu einer lodernden Kegelschablone bündeln. Der Angriff nutzt Athletik und verursacht 2W4 Schaden, dem ausgewichen werden kann (mit –2 bei einer Steigerung auf dem Angriffswurf). Ein Kritischer Fehlschlag erschöpft den Dämon."
],
"p": 14,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Versengen (Dämon)",
"k": "Monsterhelden",
"r": 2,
"v": "Höllenfeuer (Dämon)",
"w": 0,
"b": [
"Der Höllenfeuer-Schaden des Dämons steigt auf 2W6. Außerdem darf der Feuerspeier die Kegelschablone (oder den Strahl) nach Belieben einsetzen."
],
"p": 15,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Unkörperlich (Dämon)",
"k": "Monsterhelden",
"r": 0,
"v": "Dämon",
"w": 0,
"b": [
"Der Dämon ist ein Geist aus dunkler Energie und Bosheit ohne materielle Form. Er kann Hindernisse durchdringen und wird von physischen Waffen und nichtmagischen Energien wie Feuer, Kälte oder Elektrizität nicht beeinflusst. Magische oder gesegnete Waffen oder Energie wirken normal auf ihn.",
"Der Dämon kann für eine Runde körperlich werden, indem er als begrenzte freie Aktion eine Willenskraftprobe schafft. Solange er körperlich ist, kann er die physische Welt beeinflussen, aber auch von normalen Waffen und Energien verletzt werden."
],
"p": 15,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Mystische Kräfte (Dämon)",
"k": "Monsterhelden",
"r": 1,
"v": "Dämon",
"w": 0,
"b": [
"Dämonen sind magische Wesen und verstärken ihre natürlichen Fähigkeiten manchmal mit verschiedenen Kräften. Wähle eines der folgenden Pakete; weitere Einzelheiten stehen in der Seitenleiste Mystische Kräfte auf S. 11.",
"BESITZERGREIFER: Eigenschaft stärken/senken, Fluch, Albträume, Marionette.",
"BESCHWÖRER: Schutz, Verbündeten beschwören, Dämon beschwören, Zombie.",
"VERSUCHER: Eigenschaft stärken/senken, Verkleidung, Empathie, Gedanken lesen.",
"TRICKSER: Ablenkung (nur selbst), Verkleidung, Furcht, Schreckensbilder."
],
"p": 15,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Übernatürliches spüren (Dämon)",
"k": "Monsterhelden",
"r": 0,
"v": "Dämon",
"w": 0,
"b": [
"Der Dämon kann übernatürliche Wesen und magische Effekte im Umkreis von 10\" (20 Yards) spüren. Die Fähigkeit lokalisiert oder verfolgt solche Wesen nicht, sondern zeigt nur, dass sie anwesend sind, und grob ihre Zahl (wenige oder viele)."
],
"p": 15,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Wahrer Dämon (Dämon)",
"k": "Monsterhelden",
"r": 2,
"v": "Dämon",
"w": 0,
"b": [
"Der Dämon erlangt den Segen der Hölle zurück. Er erleidet nur halben Schaden (aufgerundet) durch nichtmagische Angriffe, außer durch kaltes Eisen."
],
"p": 15,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Flügel (Dämon)",
"k": "Monsterhelden",
"r": 0,
"v": "Dämon",
"w": 0,
"b": [
"Der Dämon hat einziehbare Flügel und kann mit Schritt 12 fliegen. Das Talent kann ein zweites Mal gewählt werden, um den Schritt auf 24 zu erhöhen, und ein drittes Mal für Schritt 48."
],
"p": 15,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Graben (Mumie)",
"k": "Monsterhelden",
"r": 1,
"v": "Mumie",
"w": 0,
"b": [
"Die Mumie kann sich mit halbem Schritt durch alles außer massivem Stein graben."
],
"p": 16,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Mumienfäule (Mumie)",
"k": "Monsterhelden",
"r": 2,
"v": "Mumie",
"w": 0,
"b": [
"Jeder, den die Mumie berührt – ob verletzt oder nicht –, muss eine Konstitutionsprobe ablegen. Bei einem Misslingen hat der Charakter „Mumienfäule“ und erleidet sofort eine Wunde. Opfer, die an der „Mumienfäule“ sterben, können durch die Macht Zombie als Mumien zurückgebracht werden."
],
"p": 16,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Mystische Kräfte (Mumie)",
"k": "Monsterhelden",
"r": 1,
"v": "Mumie",
"w": 0,
"b": [
"Manche Mumien können auf mystische oder göttliche Quellen für magische Kräfte zurückgreifen. Wähle eines der folgenden Pakete; weitere Einzelheiten stehen in der Seitenleiste Mystische Kräfte auf S. 11.",
"BAUMEISTER: Barriere, Arkanes entdecken/verbergen, Schließen/Öffnen, Telekinese.",
"KÖNIGLICH: Explosion, Salve, Spott."
],
"p": 16,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Regeneration (Langsam) (Mumie)",
"k": "Monsterhelden",
"r": 1,
"v": "Mumie",
"w": 0,
"b": [
"Mumien mit diesem Talent können jeden Tag einen Konstitutionswurf ablegen, um Wunden zu regenerieren, die nicht durch Feuer verursacht wurden (diese müssen normal heilen)."
],
"p": 16,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Regeneration (Schnell) (Mumie)",
"k": "Monsterhelden",
"r": 4,
"v": "Regeneration (Langsam) (Mumie)",
"w": 0,
"b": [
"Mumien mit diesem Talent können jede Runde einen Konstitutionswurf ablegen, um Wunden zu regenerieren, die nicht durch Feuer oder Weihwasser verursacht wurden (diese müssen normal heilen)."
],
"p": 16,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Sturm beschwören (Mumie)",
"k": "Monsterhelden",
"r": 1,
"v": "Mumie",
"w": 0,
"b": [
"Diese Fähigkeit wird typischerweise mit ägyptischen Mumien verbunden, aber solche aus anderen Regionen nutzen ähnliche Fähigkeiten mit anderen Trappings. Einmal pro Spielwoche kann die Mumie einen gewaltigen Sandsturm von mehreren Meilen Durchmesser beschwören. Der Sturm fegt alles vor sich her, verursacht Dunkelheit und verlangt jede Minute ohne Schutz Konstitutionswürfe. Wer scheitert, ist Erschöpft, was zum Tod durch Ersticken führen kann."
],
"p": 16,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Schwarm beschwören (Mumie)",
"k": "Monsterhelden",
"r": 1,
"v": "Mumie",
"w": 0,
"b": [
"Einmal pro Tag kann eine Mumie mit diesem Talent einen Schwarm aus Insekten, Ungeziefer oder anderen Plagegeistern beschwören. Das ist ein Mittlerer Schwarm, der sich nicht aufteilt und allgemeine mentale Anweisungen wie „bewache die Tür“ oder „töte diese Eindringlinge“ erhalten kann."
],
"p": 16,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Großen Schwarm beschwören (Mumie)",
"k": "Monsterhelden",
"r": 3,
"v": "Schwarm beschwören (Mumie)",
"w": 0,
"b": [
"Der Schwarm der Mumie ist Groß und verwandelt sich, wenn er erschlagen wird, in zwei Mittlere Schwärme."
],
"p": 16,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Abnehmbare Teile (Flickenmonster)",
"k": "Monsterhelden",
"r": 1,
"v": "Flickenmonster",
"w": 0,
"b": [
"Das Grauen kann verschiedene Teile seines Körpers ablösen und aus der Ferne steuern! Die maximale Entfernung, in der ein Teil wirken kann, beträgt eine Meile. Wird das Teil zerstört, kann das Flickenmonster es nachwachsen lassen, indem es ein identisches Körperteil verspeist. Das Nachwachsen dauert etwa eine Stunde. Es kann beliebig viele der folgenden Teile ablösen und per Aktion zwischen ihnen wechseln:",
"OHR: Das Ohr kann sich nicht bewegen, hört aber wie ein normales Ohr. Monster können es hinterlassen, wo sie wollen, um Gespräche zu belauschen!",
"AUGE: Das Auge kann mit Schritt 3 herumrollen und sieht wie ein normales Auge.",
"HAND: Die Hand bewegt sich mit Schritt 5 und hat eine Stärke, die zwei Würfeltypen unter der ihres Besitzers liegt. Die Hand ist Winzig, ob sie menschengroße Ziele angreifen kann, liegt daher im Ermessen der SL und den Umständen."
],
"p": 17,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Entladung (Flickenmonster)",
"k": "Monsterhelden",
"r": 2,
"v": "Flickenmonster",
"w": 0,
"b": [
"Blitz und Elektrizität gaben dieser Schöpfung LEBEN – und damit lässt sich Leben nehmen! Die Kreatur speichert Energie in ihrem Körper. Als begrenzte Aktion kann sie eine Stufe Erschöpfung hinnehmen, um einen sengenden Stromstoß in einer Großen Explosionsschablone auszusenden, die auf sie zentriert ist. Jedes Wesen darin erleidet 4W6 Elektroschaden. Ein Kampfunfähiges Monster wird ohnmächtig, stirbt aber nicht."
],
"p": 17,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Rückblenden (Flickenmonster)",
"k": "Monsterhelden",
"r": 0,
"v": "Flickenmonster",
"w": 0,
"b": [
"Das Monster erhält gelegentlich Erinnerungs- und Wissensfetzen aus den vielen Körperteilen, aus denen es zusammengesetzt wurde. Einmal pro Begegnung kann es eine beliebige Fertigkeit um einen Würfeltyp erhöhen, solange sie die verknüpfte Eigenschaft nicht übersteigt. Hat es die Fertigkeit nicht, erhält es sie mit W4 und ignoriert den üblichen Abzug von –2."
],
"p": 17,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Zäh (Flickenmonster)",
"k": "Monsterhelden",
"r": 1,
"v": "Flickenmonster",
"w": 0,
"b": [
"Flickenmonster mit diesem Talent erleiden keine Wunden, wenn sie zweimal Angeschlagen werden."
],
"p": 17,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Gebrüll (Flickenmonster)",
"k": "Monsterhelden",
"r": 1,
"v": "Flickenmonster",
"w": 0,
"b": [
"Das Monster stößt ein unirdisches Stöhnen aus, das alle Hörer in Angst versetzt. Als begrenzte Aktion kann der Charakter in einer Kegelschablone ein Einschüchtern-Kräftemessen durchführen. Alle Ziele darin sind betroffen und müssen einzeln widerstehen."
],
"p": 17,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Eisige Berührung (Phantom)",
"k": "Monsterhelden",
"r": 1,
"v": "Phantom, Willenskraft W8+",
"w": 0,
"b": [
"Die Berührung eines Phantoms lässt einem lebenden Ziel die Knochen bis ins Mark gefrieren. Ein erfolgreicher Berührungsangriff (in körperlicher Gestalt) gegen ein lebendes Wesen verursacht Str+W4 Schaden, der alles außer magischer Panzerung ignoriert."
],
"p": 18,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Übergang (Phantom)",
"k": "Monsterhelden",
"r": 1,
"v": "Phantom",
"w": 0,
"b": [
"Phantome sind eine besondere Art Geist, die in der physischen Welt weilen. Mit Konzentration können sie jedoch für kurze Zeit aus unserer Wirklichkeit verblassen und in die Geisterwelt zurückkehren, um mit anderen geistigen Wesen zu sprechen. Das funktioniert wie Vernetzung (siehe Grundregelwerk) mit allen Geistern, verlorenen Seelen, Gespenstern und anderen Wesen der Leere. Der Geist kann Überreden oder Einschüchtern nutzen, aber keine Gefallen gewähren („Geld regiert“ oder „Köpfe einschlagen“), sofern das Setting dies nicht erlaubt."
],
"p": 19,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Unsichtbarkeit (Phantom)",
"k": "Monsterhelden",
"r": 1,
"v": "Phantom, Willenskraft W8+",
"w": 0,
"b": [
"Das Gespenst kann im ätherischen Zustand unsichtbar werden. Es kann nicht gesehen werden, doch wer den ungefähren Aufenthaltsort des Geistes kennt, kann ihn mit –4 angreifen. Zauber können nicht auf ihn gewirkt werden, es sei denn, der Zauberwirker kann ihn über Arkanes entdecken oder auf andere Weise sehen."
],
"p": 19,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Mystische Kräfte (Phantom)",
"k": "Monsterhelden",
"r": 1,
"v": "Phantom",
"w": 0,
"b": [
"Das Phantom kann geistige Energie manipulieren, um Zauber zu wirken. Wähle eines der folgenden Pakete; weitere Einzelheiten stehen in der Seitenleiste Mystische Kräfte auf S. 11.",
"POLTERGEIST: Chaos, Schreckensbilder, Geräusch/Stille, Telekinese.",
"SCHATTEN: Verwirrung, Elementare Manipulation, Furcht, Marionette.",
"WRAITH: Blenden, Licht/Dunkelheit, Trägheit, Betäubung."
],
"p": 19,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Gebrüll (Phantom)",
"k": "Monsterhelden",
"r": 1,
"v": "Phantom",
"w": 0,
"b": [
"Der Geist stößt ein gespenstisches Heulen oder einen Banshee-Schrei aus, der allen Hörern das Mark gefrieren lässt. Als begrenzte Aktion kann der Charakter in einer Kegelschablone ein Einschüchtern-Kräftemessen durchführen. Alle Ziele darin sind betroffen und müssen einzeln widerstehen."
],
"p": 19,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Todesberührung (Wiedergänger)",
"k": "Monsterhelden",
"r": 3,
"v": "Wiedergänger",
"w": 0,
"b": [
"Die gefürchtetste Kraft des Wiedergängers ist seine tödliche Berührung, die gegen Lebende Str+W4 Schaden verursacht (Panzerung schützt normal). Gegen die, an denen er Rache geschworen hat (das Ziel seines Schwurs), verursacht sie stattdessen Str+2W6 Schaden."
],
"p": 19,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Abnehmbare Teile (Wiedergänger)",
"k": "Monsterhelden",
"r": 1,
"v": "Wiedergänger",
"w": 0,
"b": [
"Das Grauen kann verschiedene Teile seines Körpers ablösen und aus der Ferne steuern! Die maximale Entfernung, in der ein Teil wirken kann, beträgt eine Meile. Wird das Teil zerstört, kann der Zombie es nachwachsen lassen, indem er ein identisches Körperteil verspeist. Das Nachwachsen dauert etwa eine Stunde. Er kann beliebig viele der folgenden Teile ablösen und per Aktion zwischen ihnen wechseln:",
"OHR: Das Ohr kann sich nicht bewegen, hört aber wie ein normales Ohr.",
"AUGE: Das Auge kann mit Schritt 3 herumrollen und sieht wie ein normales Auge.",
"HAND: Die Hand bewegt sich mit Schritt 5 und hat eine Stärke, die zwei Würfeltypen unter der ihres Besitzers liegt. Die Hand ist Winzig, ob sie menschengroße Ziele angreifen kann, liegt daher im Ermessen der SL und den Umständen."
],
"p": 19,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Unerbittlicher Fährtensucher (Wiedergänger)",
"k": "Monsterhelden",
"r": 2,
"v": "Wiedergänger",
"w": 0,
"b": [
"Wiedergänger sind rachsüchtige Kreaturen, die ihrer Beute unerbittlich nachstellen. Ein Wiedergänger mit diesem Talent addiert +2 auf Überleben-Würfe (Spurenlesen), (kumulativ mit allen anderen Spurenlese-Boni), solange er jemanden verfolgt, der ihm in irgendeiner Weise Unrecht getan hat (Entscheidung der SL). Das ist ein magischer Sinn, der durch physische Beweise für das Vorbeikommen der Beute nur verstärkt wird; selbst wenn die Spur verloren geht, findet der Wiedergänger sie innerhalb von 2W6 Stunden wieder (oder wann immer die SL es für möglich hält).",
"Der Wiedergänger kann seine Sinne immer nur auf ein einzelnes Individuum einstellen, und einmal aufgegeben, kann er sie nicht erneut auf dasselbe Ziel richten (er kann es aber normal verfolgen)."
],
"p": 20,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Gestank (Wiedergänger)",
"k": "Monsterhelden",
"r": 0,
"v": "Wiedergänger",
"w": 0,
"b": [
"Das Fleisch des Wiedergängers verrottet und stinkt und stößt lebende Wesen ab, die ihm zu nahe kommen. Jeder mit Geruchssinn, der sich neben den Charakter bewegt, ist Abgelenkt. Das hält an, bis er sich entfernt und sein Zug endet."
],
"p": 20,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Gedankenfresser (Wiedergänger)",
"k": "Monsterhelden",
"r": 1,
"v": "Wiedergänger",
"w": 0,
"b": [
"Verspeist der Wiedergänger mit diesem Talent das relativ frische oder konservierte Gehirn eines denkenden Wesens, erhält sie verstreute Erinnerungsfetzen davon. Was genau der Zombie erfährt, entscheidet die Spielleitung, doch meist handelt es sich um traumatische Ereignisse, vor allem rund um den Tod des Wesens."
],
"p": 20,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Zombiemeister (Wiedergänger)",
"k": "Monsterhelden",
"r": 0,
"v": "Wiedergänger",
"w": 0,
"b": [
"Der Wiedergänger kann versuchen, jeden hirnlosen Zombie oder jedes Skelett mit einem erfolgreichen Einschüchtern-Wurf zu kontrollieren, vergleichend gegen die Willenskraft der Kreatur. Das ist eine Aktion, und die Kontrolle hält bis zum Ende der Begegnung an. Auf andere Untote hat das Talent typischerweise keine Wirkung (Entscheidung der SL)."
],
"p": 20,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Tiergestalt (Vampir)",
"k": "Monsterhelden",
"r": 0,
"v": "Vampir",
"w": 0,
"b": [
"Als begrenzte Aktion kann sich der Vampir mit einer Verstandsprobe mit –2 in einen Wolf oder eine Fledermaus verwandeln oder zurück in seine Vampirgestalt. In Wolfs- oder Fledermausgestalt kann der Vampir nicht sprechen."
],
"p": 21,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Bann (Vampir)",
"k": "Monsterhelden",
"r": 0,
"v": "Vampir",
"w": 0,
"b": [
"Ein Vampir kann die Macht Marionette wirken, indem er einen Benny ausgibt und einen Überreden-Wurf als arkane Fertigkeit ablegt. Das Ziel darf nicht Feindselig, Unfreundlich oder Unkooperativ sein, also lohnt es sich, zuerst das Vertrauen möglicher Opfer zu gewinnen.",
"Der Unhold darf mit dieser natürlichen Version der Macht keine Machtmodifikatoren nutzen, doch bei Erfolg beträgt die Dauer 24 Stunden statt fünf Runden, kann nicht aufrechterhalten werden, und Opfer, die erliegen, wehren sich nicht dagegen, dass ihnen das Blut ausgesaugt wird."
],
"p": 21,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Kinder der Nacht (Vampir)",
"k": "Monsterhelden",
"r": 0,
"v": "Vampir",
"w": 0,
"b": [
"Der Vampir kann Fledermäuse, Ratten oder Wölfe herbeirufen und kontrollieren. Einmal pro Nacht kann er in einer geeigneten Umgebung, in der solche Tiere leben (Entscheidung der SL), automatisch einen einzelnen Schreckenswolf, 1W4+1 Wölfe oder einen Mittleren Schwarm aus Fledermäusen oder Ratten herbeirufen. Letztere teilen sich beim Zerstreuen in zwei Kleine Schwärme."
],
"p": 21,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Klauen (Vampir)",
"k": "Monsterhelden",
"r": 0,
"v": "Vampir",
"w": 0,
"b": [
"Der Vampir hat einziehbare Klauen, die Str+W6 Schaden verursachen und +2 auf Athletik-Würfe (Klettern) geben."
],
"p": 22,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Tagwandler (Vampir)",
"k": "Monsterhelden",
"r": 0,
"v": "Vampir",
"w": 0,
"b": [
"Der Vampir ist ein „Dhampir“ und wird von Sonnenlicht nicht geschädigt."
],
"p": 22,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Verschlingen (Vampir)",
"k": "Monsterhelden",
"r": 0,
"v": "Vampir",
"w": 0,
"b": [
"Höchstens einmal pro Tag erhöht ein Vampir, der einen normal großen Menschen bis zum Tod aussaugt, Stärke und Konstitution für die nächste Stunde um einen Würfeltyp."
],
"p": 22,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Nebelgestalt (Vampir)",
"k": "Monsterhelden",
"r": 0,
"v": "Vampir",
"w": 0,
"b": [
"Einmal pro Nacht kann sich der Vampir in Nebelgestalt verwandeln. Das erfordert eine Aktion und eine Verstandsprobe mit –2. Misslingt sie, erleidet der Vampir Erschöpfung, kann es aber erneut versuchen. Bei einem Kritischen Fehlschlag erleidet er Erschöpfung und kann es diese Nacht nicht mehr versuchen.",
"Vampire in Nebelgestalt sind sichtbar, fliegen mit Schritt 6 und können jede Barriere durchdringen, die nicht luftdicht ist. Sie können die physische Welt nicht beeinflussen und keine anderen Kräfte nutzen. Als begrenzte Aktion (ohne Wurf) können sie in die normale Gestalt zurückkehren."
],
"p": 22,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Regeneration (Schnell) (Vampir)",
"k": "Monsterhelden",
"r": 4,
"v": "Vampir",
"w": 0,
"b": [
"Der Vampir regeneriert, indem er als begrenzte freie Aktion einen Konstitutionswurf ablegt. Ein Erfolg heilt eine Wunde oder beendet die Kampfunfähigkeit, eine Steigerung heilt zwei Wunden. Der Vampir kann keine Wunden regenerieren, die durch Enthauptung, Weihwasser oder geweihte Waffen, Sonnenlicht oder einen Pfahl durchs Herz verursacht wurden."
],
"p": 22,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Zeugen (Vampir)",
"k": "Monsterhelden",
"r": 0,
"v": "Vampir",
"w": 0,
"b": [
"Der Vampir kann einen weiteren Vampir „zeugen“, indem er einen Sterblichen von seinem Blut trinken lässt. Die Verwandlung dauert W4 Stunden, in denen die Person durch den Modifikator Krankheit neutralisieren der Macht Heilung vom Fluch gereinigt werden kann.",
"Ein neues „Kind“ ist nicht unbedingt dankbar für die Veränderung. Es hat einen eigenen freien Willen und sinnt vielleicht auf Rache, wenn es den Fluch verabscheut!"
],
"p": 23,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Diener (Vampir)",
"k": "Monsterhelden",
"r": 1,
"v": "Vampir",
"w": 0,
"b": [
"Bestimmte Sterbliche sonnen sich im Miasma der Untoten, entweder angezogen von deren mächtigem Magnetismus oder in der Hoffnung, eines Tages selbst ewige Unholde zu werden.",
"Ein Vampir mit diesem Talent erhält einen sterblichen Diener, der seinem „Meister“ völlig ergeben ist. Der Diener ist ein Statist einen Rang unter seinem Erzeuger und steigt danach jedes Mal auf, wenn dieser aufsteigt.",
"Der Diener behält seinen freien Willen, will dem Vampir aber aus welchen Gründen auch immer dienen und stirbt lieber, als ihn zu verraten.",
"Ein Vampir kann dieses Talent bis zu fünfmal wählen. Wird ein Diener erschlagen, kann der Meister Ersatz heranziehen, wenn es die Lage erlaubt."
],
"p": 23,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Wandläufer (Vampir)",
"k": "Monsterhelden",
"r": 0,
"v": "Vampir",
"w": 0,
"b": [
"Der Vampir kann mit halbem Schritt an senkrechten und umgekehrten Flächen entlangkriechen und rennen."
],
"p": 23,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Alpha (Werwolf)",
"k": "Monsterhelden",
"r": 0,
"v": "Werwolf",
"w": 0,
"b": [
"Der Werwolf kann versuchen, jeden Hundeartigen mit einem erfolgreichen Einschüchtern-Wurf zu kontrollieren, vergleichend gegen die Willenskraft der Kreatur. Das ist eine Aktion, und bei Erfolg hält die Kontrolle bis zum Ende der Begegnung an. Ist das Ziel der Alpha, folgt das übrige Rudel seiner Führung.",
"Die Bestien befolgen einfache Befehle, die ihrer Intelligenz entsprechen. Alpha wirkt nur bei natürlichen Kreaturen, nicht bei Höllenhunden, dämonischen Hunden oder anderen übernatürlichen Bestien."
],
"p": 23,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Biss & Klauen (Werwolf)",
"k": "Monsterhelden",
"r": 1,
"v": "Werwolf",
"w": 0,
"b": [
"Die Biss- und Klauenangriffe des Werwolfs steigen auf Str+W8, DB 4."
],
"p": 24,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Regeneration (Schnell) (Werwolf)",
"k": "Monsterhelden",
"r": 4,
"v": "Werwolf",
"w": 0,
"b": [
"Der Lykanthrop regeneriert, indem er als begrenzte freie Aktion einen Konstitutionswurf ablegt. Ein Erfolg heilt eine Wunde oder beendet die Kampfunfähigkeit, eine Steigerung heilt zwei Wunden. Der Werwolf kann keine durch Silber verursachten Wunden regenerieren."
],
"p": 24,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Gebrüll (Werwolf)",
"k": "Monsterhelden",
"r": 1,
"v": "Werwolf",
"w": 0,
"b": [
"Der Werwolf heult aus voller bestialischer Lunge und versetzt alle Hörer in Schrecken. Als begrenzte Aktion kann der Charakter in einer Kegelschablone ein Einschüchtern-Kräftemessen durchführen. Alle Ziele darin sind betroffen und müssen einzeln widerstehen."
],
"p": 24,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Sprache (Werwolf)",
"k": "Monsterhelden",
"r": 1,
"v": "Werwolf",
"w": 0,
"b": [
"Das Monster lernt, in Werwolfgestalt in abgehackten Sätzen zu sprechen. Es zieht 2 von jedem Eigenschaftswurf ab, der klare Sprache erfordert, etwa Würfe auf arkane Fertigkeiten und die meisten Überreden- und Spotten-Würfe."
],
"p": 24,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Zäh (Werwolf)",
"k": "Monsterhelden",
"r": 1,
"v": "Werwolf",
"w": 0,
"b": [
"Das dicke Fell, die zähe Haut oder die rohen Muskeln des Werwolfs gewähren ihm +2 Widerstand."
],
"p": 24,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Wandläufer (Werwolf)",
"k": "Monsterhelden",
"r": 0,
"v": "Werwolf",
"w": 0,
"b": [
"Der Werwolf kann mit halbem Schritt an senkrechten und umgekehrten Flächen entlangkriechen und rennen."
],
"p": 24,
"s": [
"HOR"
],
"bk": "sw_hor",
"o": 2
},
{
"n": "Kapitän",
"k": "Hintergrund",
"r": 0,
"v": "Befehlsgewalt, Pilot W8+",
"w": 0,
"b": [
"Dein Raumfahrer besitzt ein eigenes leichtes Frachtschiff oder einen Aufklärer. Vielleicht hat sie es geerbt, gestohlen oder sogar legal gekauft. Sie ist für Wartung und Treibstoffkosten verantwortlich, heuert Besatzung an, sichert Charteraufträge und trägt alle anderen Pflichten, die der Besitz eines eigenen Raumschiffs mit sich bringt.",
"Dieses Talent lässt dich die Kampagne mit einem Raumschiff beginnen, das groß genug für deine Gruppe ist, meist ein Mehrzwecktransporter (S. 155). Sprich das mit der SL ab, denn sie hat vielleicht andere Pläne."
],
"p": 24,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Ausgerüstet",
"k": "Hintergrund",
"r": 0,
"v": "",
"w": 0,
"b": [
"Dieses Talent kann nur bei der Charaktererschaffung gewählt werden. Dein Raumfahrer beginnt mit dem Zehnfachen des üblichen Startkapitals in Besitztümern (meist 10.000 $ – überschüssiges Geld verfällt). Wird es für Cyberware oder Robotermodifikationen verwendet, sind diese bereits sicher eingebaut. Das ist ein einmaliger Vorteil – gehen die Besitztümer verloren oder kaputt, werden sie nicht ersetzt."
],
"p": 24,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Schwer-/Sehr-schwer-Weltler",
"k": "Hintergrund",
"r": 0,
"v": "",
"w": 0,
"b": [
"Der Charakter stammt von einer dichten Welt mit hoher oder sehr hoher Schwerkraft. Er behandelt seine Stärke bei der Belastung und bei der Mindeststärke für Rüstung, Waffen und Ausrüstung ohne Abzug als einen Würfeltyp höher und verdoppelt die normale Sprungweite."
],
"p": 25,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Munitionszähler",
"k": "Kampf",
"r": 0,
"v": "",
"w": 0,
"b": [
"Die Zahl der Kugeln, die eine Waffe pro Feuerrate verbraucht, steht im Grundregelwerk unter Fernkampfangriffe und in der Tabelle Kugeln pro Feuerrate. Sie bildet die riesige Munitionsmenge ab, die die meisten Schützen bei hoher Feuerrate verschießen.",
"Ein Schütze mit diesem Talent drückt präziser ab und verringert die Zahl der abgefeuerten Kugeln um die Hälfte (aufgerundet). Eine Waffe mit Feuerrate 2 feuert dann zum Beispiel drei statt fünf Schüsse pro Angriff; Feuerrate 3 verbraucht fünf statt 10."
],
"p": 25,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Schnellziehen",
"k": "Kampf",
"r": 0,
"v": "Geschicklichkeit W8+",
"w": 0,
"b": [
"Du ziehst zwei Karten, wenn du zu Rundenbeginn einen Benny für eine zusätzliche Aktionskarte ausgibst. Du darfst deine endgültige Aktionskarte aus allen verfügbaren Möglichkeiten wählen, auch aus zusätzlichen Zügen durch Kühler Kopf, Schnell usw.",
"Außerdem addierst du +2 auf Athletik-Proben, um die Aktionen anderer zu unterbrechen (auch bei Abwarten und beim Widerstehen gegen Unterbrechung)."
],
"p": 25,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Teamleiter",
"k": "Anführer",
"r": 1,
"v": "Befehlsgewalt, Gemeinsames Band, Geborener Anführer",
"w": 0,
"b": [
"Teamleiter sind hervorragend darin, Menschen dazu zu bringen, wie ein sprichwörtlich gut geöltes Räderwerk zusammenzuarbeiten. Mit diesem Talent dürfen alle Verbündeten im Befehlsradius des Helden (siehe Anführertalente im Grundregelwerk) Bennys tauschen, als hätten alle das Talent Gemeinsames Band."
],
"p": 25,
"s": [
"SF",
"SUP"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Atmosphärische Akklimatisierung",
"k": "Experten",
"r": 0,
"v": "",
"w": 0,
"b": [
"Reisende, die viel Zeit mit dem Erkunden fremder Welten verbracht haben, lernen, ihre Atmung in verschiedenen Atmosphären zu regeln. Sie würfeln nie auf Konstitution, um den Auswirkungen Dünner Atmosphäre (siehe S. 82) oder Hohem und Niedrigem Druck (siehe S. 83) zu entgehen."
],
"p": 26,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Klebeband und Kaugummi",
"k": "Experten",
"r": 1,
"v": "Reparieren W8+",
"w": 0,
"b": [
"Dieser Mechaniker weiß, wie man Energie umleitet, Klebeband anbringt und ein Fahrzeug unter Druck am Laufen hält. Als begrenzte Aktion kann er eine Reparieren-Probe ablegen, um den Zustand Abgelenkt oder Verwundbar eines Fahrzeugs zu entfernen. Mit einer Steigerung kann er beide entfernen."
],
"p": 26,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Ausweichmanöver",
"k": "Experten",
"r": 2,
"v": "Ass",
"w": 0,
"b": [
"Dieser Fahrzeug-Champion fliegt seinen Gegnern Kreise um die Ohren. Das Talent kann nur eingesetzt werden, solange der Charakter ein Fahrzeug steuert. Zu Rundenbeginn, nachdem alle Aktionskarten erhalten haben und alle Talente, Bennys und anderen Fähigkeiten (außer Mächten) berücksichtigt wurden, kann der Charakter einen Benny ausgeben, um seine Aktionskarte mit der eines beliebigen gegnerischen Fahrzeugs der Begegnung zu tauschen (oder der Gruppe, falls mehrere Fahrzeuge auf einer Karte handeln)."
],
"p": 26,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Exo-Wissenschaftler",
"k": "Experten",
"r": 0,
"v": "Naturwissenschaften W8+",
"w": 0,
"b": [
"Dieser Eierkopf hat exotische wissenschaftliche Prinzipien eingehend studiert und kommt leicht damit zurecht. Er ignoriert bis zu 2 Punkte Abzüge, weil Ausrüstung im Vergleich zur Standardtechnologie des Settings zu fortschrittlich, zu fremdartig oder zu primitiv ist."
],
"p": 26,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Gravitationsakklimatisierung",
"k": "Experten",
"r": 0,
"v": "Geschicklichkeit W6+",
"w": 0,
"b": [
"Der Raumfahrer weiß, wie man sich in verschiedenen Schwerkräften bewegt. Er ignoriert den Abzug von –2 auf Geschicklichkeit und Geschicklichkeits-basierte Fertigkeiten, wenn er in einer anderen als seiner eigenen Schwerkraft handelt (siehe Schwerkraft auf S. 83)."
],
"p": 26,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Energie-Hacker",
"k": "Experten",
"r": 0,
"v": "Hacken W8+",
"w": 0,
"b": [
"Der Hacker ist es gewohnt, unter hohem Druck zu programmieren und sich mit den sichersten Systemen auseinanderzusetzen. Er erhält eine kostenlose Wiederholung bei einem misslungenen Hacken-Wurf. Außerdem kann sie den Rat aus dem Grundregelwerk zu wiederholten Unterstützen- oder Herausforderungswürfen ignorieren, wenn sie Hacken einsetzt, um die lokale Umgebung zu steuern (und sich mit ihr verbinden kann)."
],
"p": 26,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Raketenjockey",
"k": "Experten",
"r": 1,
"v": "Ass",
"w": 0,
"b": [
"Der Raumfahrer ignoriert den Mehrfachaktionsabzug, wenn er einen Seefahrt-, Fahren- oder Pilot-Wurf ablegt und in derselben Runde eine weitere Aktion ausführt. Das ist entscheidend für Einsitzer-Kampfpiloten, die manövrieren und im selben Zug angreifen müssen."
],
"p": 26,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Sanfte Hand",
"k": "Experten",
"r": 0,
"v": "Seefahrt W4+ oder Fahren W4+ oder Pilot W4+",
"w": 0,
"b": [
"Manche Piloten haben gelernt, aus klobigen Frachtern und plumpen Transportern mehr Leistung herauszuholen. Sie ignorieren bis zu 2 Punkte Handhabungsabzüge."
],
"p": 27,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Wundertäter",
"k": "Legendär",
"r": 4,
"v": "Mr. Fix It",
"w": 0,
"b": [
"Dieser hochqualifizierte Ingenieur kann gelegentlich Wunder mit Maschinen und Geräten vollbringen. Einmal pro Sitzung kann er eine Reparieren-Probe (oder Elektronik, je nach Fall) mit –2 ablegen, die normalerweise Stunden oder Tage dauern würde, als einzelne begrenzte Aktion.",
"Das kann zur Reparatur eines Fahrzeugs, Läufers oder jedes anderen Geräts genutzt werden, das sich reparieren lässt, auch wenn dafür normalerweise eine Werkstatt, ein Trockendock usw. nötig wäre."
],
"p": 27,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Unsterblich",
"k": "Legendär",
"r": 4,
"v": "",
"w": 0,
"b": [
"Durch Wissenschaft, Mutation oder Quantenphänomene, die er selbst nicht versteht, ist der Charakter unsterblich geworden. Er altert nicht mehr, und wird er getötet, erholt er sich irgendwann, solange sein Körper einigermaßen intakt ist (Entscheidung der SL; fehlende Körperteile wachsen nicht nach)."
],
"p": 27,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Retter des Universums",
"k": "Legendär",
"r": 4,
"v": "",
"w": 0,
"b": [
"Einige wenige edle Seelen scheinen vom Universum auserwählt zu sein. Ob Messias, Retter oder Auserwählter – etwas an ihnen strahlt Macht und Potenzial aus.",
"Der Held kann zwei Bennys in einen Punkt Überzeugung umwandeln. Er kann das jederzeit tun und seine Überzeugung auf Wunsch an andere weitergeben."
],
"p": 27,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Cyber-verträglich",
"k": "Hintergrund",
"r": 0,
"v": "",
"w": 0,
"b": [
"Der Körper des Individuums verkraftet Cyberware besser als die meisten. Es erhöht sein Belastungslimit und dessen Maximum um +2."
],
"p": 113,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Cyber-Samurai",
"k": "Hintergrund",
"r": 0,
"v": "Cyber-verträglich",
"w": 0,
"b": [
"Der Charakter wurde dafür gebaut, verchromt zu werden. Er erhöht sein Belastungslimit und dessen Maximum um weitere 2 Punkte auf +4."
],
"p": 113,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Cyborg",
"k": "Hintergrund",
"r": 0,
"v": "",
"w": 0,
"b": [
"Cyborgs sind Menschen (oder andere organische Arten), die stark mit mechanischen Teilen erweitert wurden – oder Konstrukte mit hinzugefügten biologischen Komponenten! Manchmal geschieht das freiwillig, manchmal ist es die einzige Möglichkeit, ein schwer verwundetes, aber wertvolles Individuum zu retten.",
"Belastungslimit und Maximum des Cyborgs steigen um +4 (kumulativ mit den Talenten Cyber-verträglich und Cyber-Samurai), und sie erhält Implantate im Wert von 20.000 $.",
"Der Held würfelt nicht mehr auf natürliche Heilung, kann aber weiterhin verbluten, und Wunden werden mit dem niedrigeren Wert von Heilen oder Reparieren des Behandelnden behoben.",
"Der Preis für eine solche Umwandlung ist jedoch hoch. Sie muss entweder ein zusätzliches Schweres Handicap wählen, das keine Cyberware ist, oder ein dauerhaftes Ergebnis auf der Tabelle Cyberware-Nebenwirkungen würfeln (Ergebnisse für Innere Blutungen werden neu gewürfelt)."
],
"p": 113,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Litanei des Zorns",
"k": "Arkane Hintergründe",
"r": 0,
"v": "Arkaner Hintergrund (Kaplan)",
"w": 0,
"b": [
"Der Kaplan rezitiert uralte Groll, schreckliches Unrecht oder inspirierende Taten, die mit seiner Einheit zu tun haben. Solange er mit denen in seinem Befehlsradius (siehe Grundregelwerk) kommunizieren kann, addieren sie +2 auf ihren Schaden."
],
"p": 196,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Zurechtweisung",
"k": "Arkane Hintergründe",
"r": 1,
"v": "Willenskraft W8+, Arkaner Hintergrund (Kaplan), Einschüchtern W8+",
"w": 0,
"b": [
"Kaplane mit diesem Talent sind strenge Zuchtmeister, die absolute Unterordnung von denen verlangen, die in ihrer Obhut stehen.",
"Der Kaplan kann 2 Machtpunkte ausgeben, um einem anderen Charakter oder einer Gruppe innerhalb von 12\" (24 Yards) eine Wiederholung zu gewähren, als hätten sie einen Benny ausgegeben. Das geschieht im Zug des Zielcharakters oder der Zielgruppe, auch wenn der Kaplan in dieser Runde bereits gehandelt hat."
],
"p": 196,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Vorahnung",
"k": "Arkane Hintergründe",
"r": 0,
"v": "Arkaner Hintergrund (Chronomant)",
"w": 0,
"b": [
"Die Chronomantin sieht die unmittelbaren Gefahren, die ihr und ihren Verbündeten drohen. Sie kann 2 Machtpunkte (oder 3 Machtpunkte für +2) ausgeben, um nach dem Wurf +1 auf ihren Ausweich- oder Wegsteck-Wurf zu addieren. Sie kann auch Verbündete beeinflussen, solange sie sich innerhalb einer Reichweite ihres Verstandswürfels befinden."
],
"p": 198,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Zeit neu ordnen",
"k": "Arkane Hintergründe",
"r": 1,
"v": "Arkaner Hintergrund (Chronomant)",
"w": 0,
"b": [
"Die Chronomantin verzerrt den Zeitstrom und kann so die Initiative ihrer Feinde im Kampf beeinflussen.",
"Der Chronomant kann ein Ziel nicht beeinflussen, wenn dessen Aktionskarte ein Joker ist, und ist die neue Karte ein Joker, behält das Ziel sie."
],
"p": 198,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Zeitherr",
"k": "Arkane Hintergründe",
"r": 3,
"v": "Arkaner Hintergrund (Chronomant)",
"w": 0,
"b": [
"Nachdem sie zu Beginn eines Zuges ihre reguläre Aktionskarte erhalten hat, kann die Chronomantin einen Benny für eine zusätzliche Aktionskarte ausgeben – und auf beiden handeln!",
"Die Bonus-Aktionskarte wird ausgeteilt, nachdem ihre erste Aktionskarte ausgeteilt und festgelegt wurde (etwa durch Schnell, Kühler Kopf, Mächte, das Ausgeben eines Bennys zum Ersetzen usw.), und kann von keiner anderen Fähigkeit beeinflusst werden. Die Bonuskarte gilt, wie sie gezogen wurde, und nichts kann sie ändern."
],
"p": 198,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Schwerkraftmeister",
"k": "Arkane Hintergründe",
"r": 0,
"v": "Arkaner Hintergrund (Gravlock)",
"w": 0,
"b": [
"Gravlocks sind Meister der Schwerkraft und können ihr persönliches Schwerkraftfeld um eine Stufe nach oben oder unten gegenüber ihrer aktuellen Umgebung einstellen. Details siehe Schwerkraft auf S. 83."
],
"p": 199,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Lifter",
"k": "Arkane Hintergründe",
"r": 1,
"v": "Arkaner Hintergrund (Gravlock)",
"w": 0,
"b": [
"Die Stärke der Macht Telekinese des Gravlocks steigt auf W12+2 oder W12+4 mit einer Steigerung. Damit kann sie Gewichte bis 250 Pfd. (1000 mit einer Steigerung) heben.",
"Außerdem erhält sie die folgenden Modifikatoren für die Macht Telekinese:",
"MODIFIKATOREN",
"WIRKUNGSBEREICH (+2/+3): Für +2 Punkte betrifft die Macht alles in einer Mittleren Explosionsschablone (denkende Ziele widerstehen einzeln). Für +3 Punkte wird der Wirkungsbereich auf eine Große Explosionsschablone erhöht.",
"KRAFT (+2/Stufe): Der Gravlock kann die Stärke seiner Telekinese für je 2 hineingesteckte Machtpunkte um einen weiteren Würfeltyp erhöhen. Das erfordert intensive Konzentration und verringert die Feinmotorik stark, daher erhält er einen Abzug von –2 auf alle anderen Aktionen, solange die Macht aktiv ist. Beendet er die Macht, muss er eine Konstitutionsprobe mit –2 ablegen. Bei Misslingen ist er Erschöpft, bei Erfolg Ermüdet (Fatigued), und mit einer Steigerung gibt es keine weiteren Nachwirkungen."
],
"p": 199,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Hardware-Upgrade",
"k": "Arkane Hintergründe",
"r": 3,
"v": "Arkaner Hintergrund (Hartlicht-Kontrolleur)",
"w": 0,
"b": [
"Der Anwender verbessert ihren Hartlicht-Kontrolleur. Sie addiert +1 auf ihre Naturwissenschaften-Würfe beim Aktivieren von Mächten und verliert bei einem Kritischen Fehlschlag nur W6 Machtpunkte statt aller."
],
"p": 200,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Durchdrungen",
"k": "Arkane Hintergründe",
"r": 0,
"v": "Arkaner Hintergrund (Hartlicht-Kontrolleur)",
"w": 0,
"b": [
"Für einen zusätzlichen Machtpunkt wird jede schadenverursachende Schöpfung oder Macht mit Energie durchdrungen und addiert +2 auf ihre Schadenssumme (das schließt jeden Schaden durch beschworene Verbündete ein)."
],
"p": 200,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Eingestimmt",
"k": "Arkane Hintergründe",
"r": 1,
"v": "Arkaner Hintergrund (Mystiker)",
"w": 0,
"b": [
"Der Mystiker ist stärker auf die Bewegungen der Himmelssphären eingestimmt als die meisten. Befindet er sich in Harmonischer Resonanz (siehe oben), addiert er +W6 auf den Wurf statt +2. Das ist mit Überzeugung kumulativ!"
],
"p": 201,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Himmlische Symphonie",
"k": "Arkane Hintergründe",
"r": 0,
"v": "Arkaner Hintergrund (Mystiker)",
"w": 0,
"b": [
"Der Mystiker ist eins mit dem Universum und kann eine der folgenden Gaben wählen. Er kann das Talent bis zu viermal nehmen und jedes Mal eine andere Gabe wählen.",
"MOND: Nachdem der Mystiker eine Karte gezogen hat, um zu sehen, ob er in Resonanz ist, kann er einen Machtpunkt ausgeben, um eine weitere Karte zu ziehen, die die erste ersetzt.",
"SONNE: Der Mystiker erhält die Mächte Bolzen, Explosion und Flächenschlag mit der Ausprägung Stern und Feuer.",
"STERNE: Der Mystiker muss zuerst die Gabe Sonne haben. Wird Bolzen, Explosion oder Flächenschlag mit einer Steigerung gewirkt, beträgt der Bonusschaden +2W6 statt +1W6.",
"PLANETEN: Die Robustheit des Mystikers steigt dauerhaft um +2."
],
"p": 201,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Allein gegen die Wölfe",
"k": "Arkane Hintergründe",
"r": 1,
"v": "Willenskraft W8+, Arkaner Hintergrund (Hirte)",
"w": 0,
"b": [
"Hirten müssen sich oft allein ihren Feinden stellen, umgeben von bösartigen Xenos, wilden Bestien oder unterdrückenden Gegnern.",
"Die Robustheit des Hirten steigt um jeden Überzahlbonus, der gegen sie angewendet wird. Umzingeln sie drei wütende Xenos für einen Überzahlbonus von +2, steigt zum Beispiel auch ihre Robustheit um +2."
],
"p": 203,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Gallertartig",
"k": "Arkane Hintergründe",
"r": 1,
"v": "Arkaner Hintergrund (Gestaltwandler)",
"w": 0,
"b": [
"Gestaltwandler mit diesem Talent haben gelernt, ihren Körper in eine gallertartige Form zu bringen. Sie haben keine lebenswichtigen Organe, erleiden nur halben Schaden durch Stürze oder Kollisionen, und Gezielte Angriffe verursachen gegen sie keinen Zusatzschaden.",
"Gallertartige Gestaltwandler können als Aktion eine Athletikprobe ablegen, um durch Gitter oder große Öffnungen zu sickern, als wären es Schwieriges Gelände. Kleine Ritzen und Ähnliches brauchen W6 Runden zum Durchsickern, wobei der Charakter Verwundbar bleibt, bis er sich zurückformt."
],
"p": 204,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Morphen",
"k": "Arkane Hintergründe",
"r": 0,
"v": "Arkaner Hintergrund (Gestaltwandler)",
"w": 0,
"b": [
"Das Wesen kann bestimmte Fähigkeiten zeigen, die aus den genetischen Merkmalen anderer Arten stammen. Als begrenzte Aktion kann sie einen Teil ihrer Gestalt verändern, um eine der folgenden Fähigkeiten zu zeigen. Die Veränderung hält an, bis sie Kampfunfähig ist oder einen anderen Vorteil wählt:",
"TARNUNG: +2 auf Heimlichkeit, +4 bei völliger Regungslosigkeit.",
"KLAUEN: Str+W4 Schaden.",
"FLINKE FÜSSE: +2 Bewegungsweite, Sprintwürfel um einen Würfeltyp erhöht.",
"ZÄH: Ein zweites Angeschlagen-Ergebnis verursacht keine Wunde.",
"REICHWEITE 1: Die Arme des Charakters werden länger oder können sich dehnen."
],
"p": 204,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Laserparade",
"k": "Arkane Hintergründe",
"r": 0,
"v": "Arkaner Hintergrund (Sternenritter)",
"w": 0,
"b": [
"Sternenritter sind berühmt dafür, Projektilangriffe mit ihren charakteristischen Laserwaffen zu parieren.",
"Solange der Ritter einen Angriff bemerkt und mit einer Energie-Nahkampfwaffe bewaffnet ist, ziehen Angreifer 2 von ihren Schießen-Würfen ab, um ihn zu treffen. Wählt der Ritter die Option Verteidigen, ziehen Angreifer stattdessen 4 ab. Das ist nicht kumulativ mit Deckung – es gilt nur der höchste Abzug.",
"Dieses Talent ist mit Ausweichen kumulativ."
],
"p": 205,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Laserreflexion",
"k": "Arkane Hintergründe",
"r": 1,
"v": "Laserparade",
"w": 0,
"b": [
"Die Technik des Sternenritters hat sich so weit verbessert, dass er die Schüsse, die er pariert, lenken kann.",
"Wählt der Ritter die Option Verteidigen, kann er pro Runde versuchen, einen Fernkampfangriff, der ihn verfehlt, umzulenken. Er wählt ein neues Ziel (meist, aber nicht zwingend den ursprünglichen Angreifer) und legt eine Kämpfen-Probe ab. Die Reichweite beträgt immer 6/12/24, vom Ritter aus gezählt. Bei Misslingen wird der Schuss wie zuvor harmlos abgelenkt. Bei Erfolg erleidet das neue Ziel den Schaden der Waffe, einschließlich Bonusschaden bei einer Steigerung."
],
"p": 206,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Verbesserte Laserreflexion",
"k": "Arkane Hintergründe",
"r": 2,
"v": "Laserreflexion",
"w": 0,
"b": [
"Der Sternenritter kann pro Runde versuchen, bis zu drei Fernkampfangriffe, die ihn verfehlen, umzulenken."
],
"p": 206,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Sternenschurke",
"k": "Arkane Hintergründe",
"r": 2,
"v": "Arkaner Hintergrund (Sternenritter), darf nicht das Talent Sternenmagier haben",
"w": 0,
"b": [
"Nicht alle Ritter widmen sich Gerechtigkeit und Gnade. Manche sind wahrhaft verderbte Individuen, die dennoch Sorgfalt und Ausdauer besitzen, diese arkanen Künste zu meistern. Andere mögen edle, aber fehlgeleitete Seelen sein, die"
],
"p": 206,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Sternenmagier",
"k": "Arkane Hintergründe",
"r": 2,
"v": "Arkaner Hintergrund (Sternenritter), darf nicht das Talent Sternenschurke haben",
"w": 0,
"b": [
"Während die meisten Sternenritter sich auf ihre kriegerische Stärke konzentrieren, erforschen manche die mystischeren Aspekte der Galaxis und erweitern die Mächte, die sie wählen können.",
"Sternenmagier fügen ihren verfügbaren Mächten die folgenden hinzu und erhalten sofort eine davon: Blenden, Dunkelsicht, Verkleiden, Aufheben, Furcht, Fliegen, Heilung, Illusion, Licht/Dunkelheit, Linderung, Trägheit/Beschleunigung, Geräusch/Stille."
],
"p": 206,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Sternenaufstieg",
"k": "Arkane Hintergründe",
"r": 4,
"v": "Sternenmagier",
"w": 0,
"b": [
"Die größten Sternenritter sterben nicht, sie steigen auf, um in höherer Form gegen das Böse zu kämpfen. Stirbt der Ritter schließlich, erhebt er sich stattdessen mit Energieform (siehe S. 7) und der Sonderfähigkeit Ätherisch (siehe Grundregelwerk). Er kann die Welt nicht mehr körperlich beeinflussen, aber weiterhin Mächte nutzen. Mächte wirken auch auf ihn, und wird er erneut getötet, ist er dauerhaft zerstreut."
],
"p": 206,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Brecher",
"k": "Arkane Hintergründe",
"r": 1,
"v": "Arkaner Hintergrund (Technomant)",
"w": 0,
"b": [
"Wer weiß, wie man Hightech-Geräte baut, weiß auch, wie man sie zerstört. Schaden gegen ein Objekt mit Härte-Wert kann normalerweise nicht explodieren, doch für einen Technomanten tut er es bei jeder schadenverursachenden Macht. Objekte mit Schwerer Panzerung erfordern weiterhin den Machtmodifikator Schwere Waffe, um betroffen zu sein."
],
"p": 207,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Drohnen",
"k": "Arkane Hintergründe",
"r": 0,
"v": "Arkaner Hintergrund (Technomant)",
"w": 0,
"b": [
"Der Technomant besitzt eine oder mehrere Drohnen, die als Erweiterung ihres eigenen Körpers handeln. Sie kann durch sie hindurchsehen, ihre Mächte durch sie aktivieren, als wäre sie selbst dort, und jeder von ihnen eines der unten aufgeführten Upgrades geben.",
"Die Drohne hat Robustheit 5 (2), ist Klein und fliegt mit Bewegungsweite 12. Das Talent kann bis zu viermal gewählt werden, um zusätzliche Drohnen zu erhalten.",
"Wird eine Drohne zerstört, explodiert sie in einer Mittleren Explosionsschablone mit 2W6 Schaden. Der Technomant kann mit Ersatzteilen (Entscheidung der SL) und einer Stunde Arbeit Ersatzdrohnen erschaffen (oder reparieren).",
"FEUERPLATTFORM: Die Drohne ist mit einem kleinen Blaster und der Fertigkeit Schießen W6 ausgestattet. Der Blaster hat Reichweite 5/10/20, Schaden 2W6, Feuerrate 3 und ignoriert Rückstoß. Er hat 50 Schuss, bevor er eine Stunde lang aufgeladen werden muss.",
"BETÄUBUNGSWAFFE: Die Drohne enthält eine Betäubungswaffe mit Reichweite 5/10/20 und Schießen W6, und jeder, der von der Waffe getroffen wird, muss eine Konstitutionsprobe (mit –2 bei einer Steigerung) schaffen oder ist Betäubt. Sie hat 10 Schuss, bevor sie eine Stunde lang aufgeladen werden muss."
],
"p": 207,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Den Warp kanalisieren",
"k": "Arkane Hintergründe",
"r": 0,
"v": "Arkaner Hintergrund (Warper)",
"w": 0,
"b": [
"Der Warper öffnet einen Kanal in den Hyperraum und zieht Kraft daraus. Gibt sie einen Benny aus, um Machtpunkte zurückzugewinnen, kann sie eine Fokus-Probe ablegen. Bei Erfolg erhält sie wie üblich 5 Machtpunkte zurück. Mit einer Steigerung erhält sie 10. Bei Misslingen erhält sie nur 3 Machtpunkte, und bei einem Kritischen Fehlschlag erhält sie keine und wird behandelt, als hätte sie einen Kritischen Fehlschlag bei einer arkanen Fertigkeit gewürfelt (siehe oben)."
],
"p": 208,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Warp-Welle",
"k": "Arkane Hintergründe",
"r": 1,
"v": "Arkaner Hintergrund (Warper)",
"w": 0,
"b": [
"Der Warper bringt etwas von der Energie des Warps mit, wenn sie ihre Macht Teleportation oder Hyperraum-Fähigkeit einsetzt. Bei der Ankunft verursacht sie 2W6 Schaden in einer Kleinen Explosionsschablone, die auf sie zentriert ist (der Warper selbst wird nicht verletzt)."
],
"p": 208,
"s": [
"SF"
],
"bk": "sw_sf",
"o": 2
},
{
"n": "Superkräfte",
"k": "Hintergrund",
"r": 0,
"v": "",
"w": 0,
"b": [
"Dieses Talent gewährt Charakteren eine Anzahl „Superkraftpunkte“, mit denen sie die in Kapitel Vier aufgeführten Superkräfte kaufen können. Wie viele Superkraftpunkte Spielercharaktere zu Beginn haben, hängt von der Kampagnen-Machtstufe ab (siehe Tabelle) und wird von der Spielleitung gewählt. Will sie eine Kampagne mit gritty Pulp-Helden oder heranwachsenden Teen-Supers spielen, wählt sie vielleicht Machtstufe I. Will sie eine kosmische Kampagne, geht sie vielleicht bis Machtstufe V. Details stehen in der Seitenleiste Machtstufen.",
"Das Talent Superkräfte sollte in den meisten Superhelden-Kampagnen kostenlos sein.",
"Hinweis: Superkraftpunkte sind nicht dieselben wie die für Arkane Hintergründe, und Talente, die Machtpunkte betreffen, wirken nicht auf Superkraftpunkte, sofern das Talent es nicht ausdrücklich sagt.",
"Machtlimits: Spielercharaktere dürfen höchstens das Machtlimit der Kampagne für eine einzelne Kraft ausgeben. Das bewahrt den besonderen Charakter eines Settings, damit Nachbarschaftshelden nicht mit Lichtgeschwindigkeit herumrennen. Es zählen die Gesamtkosten der Kraft nach allen Modifikatoren. Ein Held der Stufe II mit 30 Superkraftpunkten und Machtlimit 10 könnte zum Beispiel Schallgeschwindigkeit für 13 Punkte kaufen, wenn er ihre Kosten durch negative Modifikatoren wie Unhandlich (–2) und ein handgehaltenes Gerät (–2) um 3 senkt. Machtlimits ändern sich nie, auch wenn die Charaktere anderweitig zusätzliche Punkte erhalten.",
"Aufstrebende Sterne: Manche Helden wachsen mit der Reife (Aufstieg), lernen ihre besonderen Fähigkeiten zu meistern oder erhalten mehr Macht durch einen Mentor oder seltsame kosmische Geräte. Will die SL diese Art Kampagne spielen, starten Spielercharaktere mit einem oder zwei Dritteln der Superkraftpunkte der Machtstufe (Wahl der SL) und erhalten zusätzliche Punkte, wenn sie Hindernisse überwinden und Erfahrung sammeln. Wann genau das geschieht, entscheidet die SL, doch irgendwann sollten sie alle Superkraftpunkte der Machtstufe bekommen. Machtlimits gelten wie üblich weiter."
],
"p": 10,
"s": [
"SUP"
],
"bk": "sw_sup",
"o": 2
},
{
"n": "Der Beste",
"k": "Hintergrund",
"r": 0,
"v": "",
"w": 0,
"b": [
"Der Held besitzt eine sehr potente Kraft. Sein Machtlimit beträgt die Hälfte seiner maximalen Superkraftpunkte (abgerundet) statt einem Drittel (laut Tabelle Kampagnen-Machtstufe).",
"Helden in einer Kampagne der Stufe II haben zum Beispiel 30 Superkraftpunkte und können höchstens 10 Punkte in eine einzelne Kraft stecken. Mit diesem Talent könnte ein Held bis zu 15 Punkte in eine einzelne Kraft stecken."
],
"p": 10,
"s": [
"SUP"
],
"bk": "sw_sup",
"o": 2
},
{
"n": "Dynamisches Duo",
"k": "Sozial",
"r": 0,
"v": "Willenskraft W8+",
"w": 0,
"b": [
"Der Held wählt einen anderen bestimmten Charakter. Wenn er diesem Partner bei einem erfolgreichen Kombinierten Angriff hilft, addiert er sowohl den Fertigkeitsbonus auf den Treffer durch Unterstützen als auch den Zusatzschaden für Kombinierte Angriffe (siehe S. 29). Das Talent kann mehrfach gewählt werden, um für weitere Verbündete zu gelten.",
"Sollte der Partner sterben oder die Kampagne verlassen, darf der Held mit Zustimmung der SL ein neues Teammitglied als Ersatz wählen. Das sollte meist geschehen, nachdem beide für ein oder zwei Kämpfe gemeinsam trainiert oder gekämpft haben."
],
"p": 11,
"s": [
"SUP"
],
"bk": "sw_sup",
"o": 2
},
{
"n": "Gehilfe (Superhelden)",
"k": "Sozial",
"r": 2,
"v": "",
"w": 1,
"b": [
"In einem Superhelden-Setting kann das Talent Gehilfe (siehe Grundregelwerk) gewählt werden, wenn ein Superheld den Rang Veteran erreicht.",
"Es gelten die üblichen Regeln, nur dass der Gehilfe so viele Superkraftpunkte hat wie das Machtlimit seines Mentors (selbst aber kein Limit hat)."
],
"p": 11,
"s": [
"SUP"
],
"bk": "sw_sup",
"o": 2
},
{
"n": "Arkaner Hintergrund (Blessed)",
"k": "Arkane Hintergründe",
"r": 0,
"v": "Willenskraft W6+, Glaube W4+",
"w": 0,
"b": [
"Manche Charaktere können die Macht ihrer Gottheit oder Götter um Hilfe anrufen. Im Weird West nennt man diese frommen Seelen die Blessed. Blessed sind Nonnen, Priester oder irgendwelche durchschnittlichen, aber (relativ) reinherzigen Leute, die von einem göttlichen Wesen berührt wurden. Obwohl im Weird West selten, laufen auch Imame, buddhistische Mönche und andere Gläubige herum, deren heiligen Hintern höhere Mächte decken. Wenn diese Leute sich benehmen, können sie Wunder wirken, um gegen das Böse des Weird West zu kämpfen. Blessed nutzen Glaube als arkane Fertigkeit. Siehe S. 55."
],
"p": 17,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Arkaner Hintergrund (Chi Master)",
"k": "Arkane Hintergründe",
"r": 0,
"v": "Geschicklichkeit W6+, Willenskraft W6+, Kampfkünstler, Fokus W4+",
"w": 0,
"b": [
"Einige Leute im Weird West haben die alten asiatischen Kampfkünste studiert. Ganz wenige dieser überragenden Kämpfer haben die geistige Disziplin erreicht, die nötig ist, um übernatürliche Kraft – Chi genannt – durch den eigenen Körper zu leiten. Diese erleuchteten Kämpfer nutzen das Talent Arkaner Hintergrund (Chi Master), um ihre erstaunlichen Fähigkeiten abzubilden. Chi Masters nutzen Fokus als arkane Fertigkeit. Siehe S. 57."
],
"p": 17,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Arkaner Hintergrund (Huckster)",
"k": "Arkane Hintergründe",
"r": 0,
"v": "Glücksspiel W6+, Zaubern W4+",
"w": 0,
"b": [
"Magie im Weird West ist nichts, was man auf die leichte Schulter nehmen sollte. Wer Zauberei betreibt, muss seine Kräfte oft dunklen Geistern abringen, die selten freiwillig nachgeben. Hucksters stellen sich diese Willensduelle als Kartenspiele vor, und die Besten vollbringen erstaunliche Dinge. Andere beschreiten angeblich noch dunklere Pfade und nutzen Blutmagie. Hucksters nutzen Zaubern als arkane Fertigkeit. Siehe S. 64."
],
"p": 18,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Arkaner Hintergrund (Mad Scientist)",
"k": "Arkane Hintergründe",
"r": 0,
"v": "Verstand W8+, Naturwissenschaften W6+, Verrückte Wissenschaft W4+",
"w": 0,
"b": [
"Anhänger der Prinzipien der Neuen Wissenschaft (von den meisten Mad Scientists genannt) bauen seltsame und wunderbare Geräte, Maschinen, die oft die Gesetze der Wirklichkeit zu verhöhnen scheinen. Fast jeder solche Erfinder – zumindest die erfolgreichen – verlässt sich in irgendeiner Form auf Ghost Rock, um seine Erfindungen anzutreiben. Mad Scientists nutzen Verrückte Wissenschaft als arkane Fertigkeit. Siehe S. 68."
],
"p": 18,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Arkaner Hintergrund (Shaman)",
"k": "Arkane Hintergründe",
"r": 0,
"v": "Willenskraft W8+, Glaube W4+",
"w": 0,
"b": [
"Shamanen sind indianische heilige Männer und Frauen und Hüter der Stammesmedizin. Ihre Kraft stammt aus Abmachungen mit den fordernden Geistern der Natur. Ehren diese Medizinmänner und -frauen die Naturgeister, vollbringen sie erstaunliche Taten, bei denen selbst der größte Zweifler zittert. Shamanen nutzen Glaube als arkane Fertigkeit. Siehe S. 71."
],
"p": 18,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Veteran o' the Weird West",
"k": "Hintergrund",
"r": 0,
"v": "Willenskraft W6+, Okkultismus W6+",
"w": 1,
"b": [
"Du willst also ein Held werden, was? Ein großer, harter, erfahrener Held? Alles klar. Lass nur deinen Verstand an der Tür zurück, denn wer schon ein paarmal ums Kaktusbeet herumgegangen ist, hat Dinge gesehen, die den meisten Männern das Herz stillstehen ließen. Deshalb sind sie nicht mehr die, die sie mal waren!",
"Veteranen o' the Weird West beginnen das Spiel im Rang Fortgeschritten (oder einen Rang höher als die übrigen Cowboys deiner Kampagne), das heißt, sie erhalten sofort vier Aufstiege. Leg ruhig gleich los.",
"Es gibt aber einen Preis. Wenn du dieses Talent wählst, ziehe eine einzelne Karte aus dem Aktionsdeck. Zeig sie dem Marshal, und sie schaut in der Tabelle auf S. 91 nach, in welches Pech dein Kerl auf dem Weg zum Prachtkerl geraten ist. Vorsicht – die Ergebnisse reichen von Verstümmelung bis Wahnsinn. Dein Marshal kennt alle Einzelheiten. Du bist gewarnt, Tex!"
],
"p": 18,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Weck ihn bloß nicht auf!",
"k": "Kampf",
"r": 0,
"v": "",
"w": 0,
"b": [
"Der Held mit diesem Talent kann ein richtiger Wüterich werden, wenn man ihn zurichtet. Verursacht er Nahkampfschaden, addiert er seine Wundstufen auf den Wurf.",
"Ein Held mit drei Wunden addiert zum Beispiel +3 auf seine Nahkampfschadenswürfe!"
],
"p": 19,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Duellant",
"k": "Kampf",
"r": 0,
"v": "Schießen W6+",
"w": 0,
"b": [
"Dein Kerl ist ein tödlicher Revolverheld, und jeder, der töricht genug ist, ihm zum High Noon gegenüberzutreten, landet bis zum Sonnenuntergang wahrscheinlich im Leichenhaus. In einem Duell erhält dieser Held zu Beginn des Showdowns zwei zusätzliche Hole Cards. Die Duellregeln stehen auf S. 47."
],
"p": 19,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Fan the Hammer",
"k": "Kampf",
"r": 1,
"v": "Geschicklichkeit W8+, Schießen W8+",
"w": 0,
"b": [
"Die meisten haben schon Mühe genug, ein Ziel anzuvisieren und mit einem einzelnen Schuss zu treffen. Der überragend geschickte Schütze mit diesem Talent kann ein Ziel treffen, während er seine Waffe schneller bedient als ein Blitz mit gebrochenem Kettenglied.",
"Ein Revolverheld, der „den Hahn fächern“ will, hält den Abzug einer Single-Action-Pistole gedrückt und schlägt mit der anderen Hand wiederholt auf den Hahn. Ist sein Sechsschüsser voll geladen, kann er in einer einzigen Aktion bis zu sechs Schüsse abfeuern. Jeder Schuss ist ein Schießen-Würfel mit einem Abzug von –4 auf Schießen, dazu der Wildcard-Würfel, wenn der Schütze eine Wildcard ist.",
"Ein Spielercharakter, der alle sechs Schüsse abfeuert, würfelt zum Beispiel sechs Schießen-Würfel und einen Wildcard-Würfel. Was du an Treffsicherheit verlierst, machst du (hoffentlich) durch Blei in der Luft wett!",
"Pass auf, wer in der Nähe ist, wenn du den Hahn fächerst, Partner. Zeigt ein Schießen-Würfel eine 1 oder 2, besteht die Chance, dass du einen Unbeteiligten triffst (siehe Grundregelwerk)."
],
"p": 19,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Verbessertes Fan the Hammer",
"k": "Kampf",
"r": 3,
"v": "Geschicklichkeit W10+, Fan the Hammer, Schießen W10+",
"w": 0,
"b": [
"Wie Fan the Hammer oben, doch jeder Schuss erleidet nur einen Abzug von –2 auf Schießen."
],
"p": 19,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Agent",
"k": "Experten",
"r": 0,
"v": "Verstand W8+, Kämpfen W6+, Okkultismus W6+, Schießen W6+",
"w": 0,
"b": [
"Die schattenhafte Agency ist dafür zuständig, Aufruhr, Verrat, Spionage, Korruption und illegale Machenschaften auszuräuchern, die das Land in einen weiteren Bürgerkrieg stürzen könnten.",
"Agenten sind ein verschwiegener Haufen, der Informationen nicht außerhalb der eigenen Reihen weitergibt, wenn es sich vermeiden lässt – nicht einmal an die örtliche Polizei. Sie sollen ihre Dienstausweise verbergen, außer in extremen und verzweifelten Lagen. Die streng geheimen Einzelheiten stehen auf S. 52."
],
"p": 20,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Falschspieler",
"k": "Experten",
"r": 0,
"v": "Glücksspiel W6+",
"w": 0,
"b": [
"Dein Held hat ein Händchen für Wahrscheinlichkeiten, Wetten und dafür, wann man einen Bluff aufdeckt. Nie fühlt er sich mehr zu Hause, als wenn er Karten mischt, Würfel wirft oder die Chancen einer Wette berechnet.",
"Dein Charakter erhält eine kostenlose Wiederholung bei einem Glücksspiel-Wurf. Das gilt auch für Hucksters, die einen Pakt mit dem Teufel schließen (siehe S. 65)!"
],
"p": 20,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Mumm",
"k": "Kampf",
"r": 0,
"v": "Willenskraft W6+",
"w": 0,
"b": [
"Ein Held mit diesem Talent hat gelernt, sich gegen die Schrecken zu wappnen, die im Weird West lauern. Er erhält eine kostenlose Wiederholung bei Furchtproben."
],
"p": 20,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Kundschafter (Weird West)",
"k": "Experten",
"r": 1,
"v": "Waldläufer",
"w": 0,
"b": [
"Kundschafter sind Meister darin, sich in der weiten Wildnis des Westens zurechtzufinden. Zieht der Marshal eine Bildkarte, während die Posse unterwegs ist – das Zeichen für eine Begegnung –, kann der Kundschafter eine Wahrnehmungsprobe mit –2 ablegen, um die Gefahr, das Vieh oder das Ereignis als Erster zu bemerken. Kundschafter gelten bei Wahrnehmungsproben gegen Heimlichkeit stets als wachsam, ignorieren bis zu 2 Punkte Abzüge auf Überleben-Proben zum Spurenlesen und erhalten mit einer Steigerung genauere Informationen darüber, was sie verfolgen. Außerdem addieren sie +2 auf Allgemeinwissen-Proben, um Informationen über Städte, Außenposten, Landmarken, Wasserstellen, Leute oder Stämme entlang einer Route abzurufen, die sie schon bereist haben."
],
"p": 20,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Soldat (Weird West)",
"k": "Experten",
"r": 0,
"v": "Stärke W6+, Konstitution W6+",
"w": 0,
"b": [
"Dieses Talent funktioniert wie im Grundregelwerk beschrieben und bedeutet, dass der Charakter beim Militär gedient hat.",
"Dient der Held noch beim Militär, ist er ein Gefreiter, erhält das Handicap Verpflichtung (Gering) und wird monatlich bezahlt (wenn er rankommt!). Von ihm wird erwartet, dass er tut, was man ihm sagt, und das Leben anderer vor sein eigenes stellt. Nicht alle Soldaten halten sich an dieses Prinzip, aber sie leisten den Eid, wenn sie die Uniform anziehen.",
"Soldaten können herabgestuft werden, wenn sie schlecht abschneiden, ihren Posten verlassen, vor dem Feind Feigheit zeigen, Befehle missachten oder sich sonst dem militärischen Verhaltenskodex entziehen. Herabstufungen liegen ganz im Ermessen des Marshals.",
"Rang: Ein Held kann als Sergeant oder Zweiter Leutnant beginnen, doch seine Verpflichtung wird Schwer, und von ihm wird erwartet, schwierigere Aufgaben zu erfüllen, vor denen niedrigere Ränge zurückschrecken könnten. Offiziere besuchen eine von mehreren Militärakademien und müssen Geisteswissenschaften und Kriegskunst auf W6+ haben. Das Talent Befehlsgewalt ist für beide keine Voraussetzung, aber sehr empfohlen.",
"In Deadlands werden Soldaten der Posse zugeteilt, um zusätzliche Feuerkraft, Führung oder Fachwissen beizusteuern. Sie sollen ihre Truppen nicht mitbringen, doch in Zeiten äußerster Dringlichkeit kann der Marshal erlauben, solche Mittel bei ihren Vorgesetzten anzufordern.",
"Beförderung: Unabhängig vom Startrang kann ein Charakter im aktiven Dienst mit dem Talent Soldat einen Aufstieg für eine Beförderung in den nächsten Rang ausgeben. Das geht höchstens dreimal und höchstens einmal pro Charakterrang (nicht militärischer Rang). Höhere Ränge sind möglich, liegen aber im Allgemeinen außerhalb des normalen Spiels."
],
"p": 20,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Geschichtenerzähler",
"k": "Sozial",
"r": 0,
"v": "Darbietung oder Überreden W8+",
"w": 0,
"b": [
"Ein guter Geschichtenerzähler unterhält nicht nur, er schenkt auch Hoffnung und Trost. Im Weird West sind Geschichtenerzähler entscheidend, um die Welt zu retten!",
"Wie bitte? Die Welt muss gerettet werden? Und wie! Die Geschichten von den Heldentaten deiner Posse zu verbreiten ist im großen Ganzen weit wichtiger, als irgendein mürrisches Ungeziefer zu erledigen. Wenn du also etwas Erstaunliches tust, Kumpel, erzähl es den Leuten!",
"Der Marshal kennt alle Einzelheiten auf S. 84, doch dieses Talent gibt dir zwei Vorteile. Erstens addiert dein Held +2 auf seine Summe, wenn er einen Überreden- oder Darbietung-Wurf ablegt, um die örtliche Furchtstufe zu senken. Zweitens erhalten der Geschichtenerzähler und jeder, der ihn Unterstützt, Überzeugung (siehe Grundregelwerk), wenn du die örtliche Furchtstufe erfolgreich senkst und beim Überreden- oder Darbietung-Wurf eine Steigerung erzielst."
],
"p": 21,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Territorial Ranger",
"k": "Experten",
"r": 0,
"v": "Konstitution W6+, Kämpfen W6+, Einschüchtern W6+, Reiten W6+, Schießen W6+, Überleben W4+",
"w": 0,
"b": [
"Die United States Marshals sorgen in den Bundesstaaten für Recht und Ordnung. Die Rangers sind für die acht Territorien zuständig – Arizona, Kalifornien, Idaho, Montana, New Mexico, Washington, Wyoming und den Distrikt Alaska – und für einen Staat, Texas, angesichts der langen Geschichte dieser Organisation dort.",
"Diese Gesetzeshunde jagen Diebe, Banditen, Deserteure und andere Flüchtige vor der Justiz in den Territorien. Der Tombstone Epitaph behauptet, sie jagten oft seltsamere Beute – aber nur Spinner glauben solche Gutenachtgeschichten, oder? Mehr über diese harten Burschen steht auf S. 73."
],
"p": 21,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Ruf",
"k": "Sozial",
"r": 2,
"v": "",
"w": 0,
"b": [
"Ob als Held oder Schurke gebrandmarkt: Dieser Charakter hat sich im Weird West einen Ruf erworben. Entscheide, ob der Ruf deines Helden gut oder schlecht ist. Mit gutem Ruf erhält der Prominente eine kostenlose Wiederholung bei Überreden-Würfen gegenüber allen, die Geschichten über ihn gehört haben. Ist der Ruf eines Outlaws schlecht, addiert er +2 auf Einschüchtern-Würfe bei Eingeweihten."
],
"p": 22,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Grit",
"k": "Übersinnlich",
"r": 2,
"v": "Willenskraft W8+, Mumm",
"w": 0,
"b": [
"Durch Ausdauer und vielleicht ein bisschen Wahnsinn verringert dieser Hartgesottene Abzüge auf Furchtproben um 2. Das ist mit Tapfer kumulativ."
],
"p": 22,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Harrowed",
"k": "Übersinnlich",
"r": 0,
"v": "Willenskraft W6+",
"w": 1,
"b": [
"Manche Revolvermänner sind einfach zu zäh, um sich hinzulegen und tot zu bleiben, nachdem sie getötet wurden. Der Preis, den sie zahlen, ist ein ewiger Kampf um ihre eigene Seele. Wenn du dieses Talent wählst, wurde dein Charakter ins Unleben zurückgeboren; die grausigen Einzelheiten stehen auf S. 59.",
"Das Talent Harrowed kann nur bei der Charaktererschaffung gewählt werden. Später Harrowed zu werden erfordert, die sterbliche Hülle abzulegen und eine ganze Menge Glück (der Marshal kennt Möglichkeiten, wie das geschehen könnte), oder das Talent Damned im Legendären Rang.",
"Hinweis: Sprich mit deinem Marshal, bevor du dieses Talent nimmst, denn es wird manchmal zu einem unfreiwilligen Handicap für alle anderen in der Posse!"
],
"p": 22,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Knack",
"k": "Übersinnlich",
"r": 0,
"v": "",
"w": 0,
"b": [
"Dieses Talent sollte nur bei der Charaktererschaffung gewählt werden, außer es gibt einen guten Grund, dass der Held seine latenten Kräfte später „entdeckt“.",
"Der Weird West ist ein abergläubischer Ort, an dem Gerüchte und Ammenmärchen blühen. Gelegentlich enthalten diese Volksmärchen einen Kern Wahrheit. Ein Knack ist genau das – Folklore, die wahr geworden ist.",
"Nun darfst du eines der besonderen Ereignisse wählen, die mit der Geburt deines Charakters zusammenfielen.",
"UNEHELICH: Nun, das ist dein Held. Nicht die gemeine, mürrische Sorte, sondern die vaterlose. Ein außerehelich geborenes Kind soll das Unsichtbare sehen können. Gib einen Benny aus, um fünf Runden lang automatisch unsichtbare und versteckte Viecher zu sehen oder solche, die sich übernatürlich in ihre Umgebung einfügen.",
"GEBOREN AN ALLERHEILIGEN: Man sagt, wer an diesem Tag geboren wird, habe eine stärkere Verbindung zur Geisterwelt. Gelegentlich erhält er Warnungen, wenn seine Taten katastrophale Folgen haben könnten. Ein Held, der an Allerheiligen geboren wurde, kann Überzeugung ausgeben, um einen Kritischen Fehlschlag zu wiederholen.",
"GEBOREN AN WEIHNACHTEN: Ein an Weihnachten geborenes Kind ist besonders widerstandsfähig gegen arkane Effekte, die von bösen Geistern gespeist werden. Nur Helden mit dem Arkanen Hintergrund Blessed oder Shaman können diesen Knack wählen. Wenn du einen anderen Arkanen Hintergrund nehmen wolltest, ist das nicht der richtige Knack für dich. Wird ein Held mit diesem Knack von einer Macht eines anderen Arkanen Hintergrunds anvisiert, kann er einen Benny ausgeben, um den Effekt aufzuheben und den Zauberwirker zu zwingen, eine Willenskraftprobe (–4) zu schaffen oder Angeschlagen zu sein.",
"STEISSGEBURT: Ein mit dem Hintern voran geborenes Baby soll die unheimliche Fähigkeit haben, Verletzungen zu heilen. Dein Held ist genau so jemand und kann einen Benny ausgeben, um die Macht Heilung zu nutzen. Er muss nicht würfeln und erhält automatisch einen einzelnen Erfolg (heilt also eine Wunde).",
"SIEBTER SOHN: Dein Held ist zu Großem bestimmt; seine Legende wird im Weird West groß dastehen. Dieser Kerl kann das Schicksal lenken. Immer wenn in seiner Anwesenheit ein Benny ausgegeben wird, kann er einen eigenen Benny ausgeben, um dessen Wirkung aufzuheben.",
"STERNSCHNUPPE: Als dein Held geboren wurde, erhellte eine Sternschnuppe oder ein Komet den Himmel, und viele glauben, dies habe sein Geschick als großer Anführer vorhergesagt. Zu Beginn jedes Kampfes kannst du einen Benny ausgeben, um den Befehlsradius des Charakters zu verdoppeln. Dieser vergrößerte Radius hält bis zum Ende der Begegnung an.",
"STURMGEBOREN: Dein Charakter wurde mitten in einem gewaltigen Sturm geboren. Unter ihrem Volk heißt es, Furcht habe keine Macht über sie. Gibst du einen Benny aus, um eine Furchtprobe zu wiederholen, ignorierst du alle Furchtabzüge, sowohl des Viehs als auch der örtlichen Furchtstufe."
],
"p": 22,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Seht, ein fahles Pferd …",
"k": "Legendär",
"r": 4,
"v": "",
"w": 0,
"b": [
"Der Lone Ranger hatte Silver, Zorro hatte Toronado, und das Ross deines Caballeros ist nicht weniger beeindruckend. Ob es ein neuer Hengst ist oder derselbe treue Gaul, den dein Held schon seit seiner Jugend hat – an diesem Pferd ist etwas Besonderes. Es hat Charakter.",
"Das treue Tier verwendet die Werte eines Streitrosses (siehe Grundregelwerk), erhält aber die Sonderfähigkeit Furchtlos und das Talent Gefahrensinn. Außerdem ist das Pferd eine Wildcard und beginnt jede Sitzung mit zwei eigenen Bennys.",
"Stirbt das treue Ross, kann dein Kerl mit dem Training eines neuen beginnen, was meist einige Wochen Spielzeit dauert (Entscheidung der SL)."
],
"p": 23,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Damned",
"k": "Legendär",
"r": 4,
"v": "Willenskraft W6+, Ruf",
"w": 1,
"b": [
"Alte Revolverhelden sterben nicht, sie …",
"Okay, sie sterben. Meist auf unschöne und peinliche Weise. Aber wenn dein ergrauter Veteran des Weird West zu Boden geht, kommt er definitiv zurück. Dieses Talent zu nehmen ist eine Versicherung dagegen, dass deine Pläne für diesen alten Hasen vorzeitig enden.",
"Wird dein Held getötet, kehrt er automatisch als Harrowed aus dem Grab zurück (Einzelheiten auf S. 60). Wie lange das dauert, hängt von der Laune des Marshals und der Geschichte ab. Es kann nahezu sofort geschehen oder erst, nachdem deine Partner dich in eine Kiste gelegt und den 23. Psalm gelesen haben.",
"Sobald du als Harrowed zurückkehrst, kannst du dieses Talent gegen ein zusätzliches Harrowed-Talent eintauschen."
],
"p": 23,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Schnell wie der Blitz",
"k": "Legendär",
"r": 4,
"v": "Geschicklichkeit W10+, Schnell",
"w": 0,
"b": [
"Greift dein Held nach seinen Schießeisen, haben die Leute kaum Zeit zu blinzeln, geschweige denn ihn zu ziehen. Manche sagen, er sei der schnellste Colt im Westen.",
"Dein Held erhält eine vierte Aktion. Das erhöht den maximalen Mehrfachaktionsabzug auf –6 (der durch Talente oder Fähigkeiten verringert werden kann, die das tun, etwa Beidhändig oder Two-Gun Kid)."
],
"p": 23,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Rechte Hand des Teufels",
"k": "Legendär",
"r": 4,
"v": "Markenwaffe, Schießen, Kämpfen oder Athletik W10+",
"w": 0,
"b": [
"Dein Held ist schnell am Abzug und weit und breit als übler Bursche bekannt. Die Leute nennen ihn die Rechte Hand des Teufels (oder die Linke, wenn dein Cowboy eher zur sinistren als zur dexteren Sorte gehört).",
"Die Waffe, die dein Revolvermann üblicherweise in seiner bevorzugten Hand führt, wurde mit einem Teil des mythischen Status durchtränkt, den man ihm zuschreibt, und so in ein mächtiges Relikt verwandelt. Eine Relikt-Waffe verursacht einen zusätzlichen Schadenswürfel desselben Typs wie der höchste Schadenswürfel der Waffe. Ein Relikt-Colt-Repetiergewehr würde also furchterregende 3W8 Schaden verursachen. Ein Held schmückt sie meist ein wenig aus, mit Silberfiligran, Perlmuttgriffen und dergleichen. Das ist keine Pflicht, aber die meisten Legenden mögen solchen Zierrat.",
"Das Talent bleibt an der Waffe, verliert dein Revolvermann sie, verliert er also auch das Talent – zumindest, bis er sie zurückhat. Und ja, wer sie in der Zwischenzeit findet, erhält ihre Vorteile!"
],
"p": 23,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "True Grit",
"k": "Legendär",
"r": 4,
"v": "Willenskraft W10+, Grit",
"w": 0,
"b": [
"Dieser ergraute Veteran hat Dinge gesehen, bei denen anderen die Augen herausquellen, als hätten sie gerade eine Klapperschlange im Schlafsack gesehen. Er ignoriert alle Abzüge bei Furchtproben und erhält bei einem Misslingen auf Wunsch eine kostenlose Wiederholung auf der Tabelle Furchteffekte."
],
"p": 23,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Katzenaugen",
"k": "Harrowed",
"r": 0,
"v": "Harrowed",
"w": 0,
"b": [
"Die Augen des Deaders glühen im Dunkeln leicht, verstärken das Licht und heben alle Abzüge für Dämmerung und Dunkelheit auf."
],
"p": 62,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Verbesserte Katzenaugen",
"k": "Harrowed",
"r": 1,
"v": "Katzenaugen, Harrowed",
"w": 0,
"b": [
"Der Held sieht im Dunkeln perfekt und ignoriert alle Abzüge durch Beleuchtung."
],
"p": 62,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Chill o' the Grave",
"k": "Harrowed",
"r": 1,
"v": "Harrowed",
"w": 0,
"b": [
"Der Harrowed strahlt die eisige Kälte des Todes in einer Großen Explosionsschablone aus, die auf ihn selbst zentriert ist. Das kostet einen Benny und eine Aktion. Lebende Wesen in der Schablone, die nicht durch Kälteschutzkleidung oder Ähnliches geschützt sind, sind automatisch Verwundbar."
],
"p": 62,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Klauen",
"k": "Harrowed",
"r": 0,
"v": "Harrowed",
"w": 0,
"b": [
"Der Held erhält scharfe Klauen, die im Kampf Str+W6 Schaden verursachen. Der Harrowed kann die Klauen als freie Aktion ausfahren oder einziehen."
],
"p": 62,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Verbesserte Klauen",
"k": "Harrowed",
"r": 2,
"v": "Klauen, Harrowed",
"w": 0,
"b": [
"Die Klauen verursachen jetzt Str+W8 Schaden, DB 2."
],
"p": 62,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Ghost",
"k": "Harrowed",
"r": 3,
"v": "Harrowed",
"w": 0,
"b": [
"Der Harrowed kann nach Belieben unkörperlich werden. In Geisterform ist er ungreifbar, aber weiter sichtbar, und magische Angriffe wirken normal auf ihn.",
"Der Deader entscheidet zu Beginn seines Zuges, ob er körperlich oder unkörperlich ist. Das ist eine freie Aktion, doch er muss bis zu seinem nächsten Zug in diesem Zustand bleiben.",
"Der Deader ist Abgelenkt, solange er in Geisterform bleibt, kann aber beliebig lange so bleiben. Ist er unkörperlich Angeschlagen, Betäubt oder verwundet, muss er eine Willenskraftprobe schaffen oder wird sofort körperlich."
],
"p": 62,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Hellfire",
"k": "Harrowed",
"r": 3,
"v": "Harrowed",
"w": 0,
"b": [
"Rohes, loderndes Feuer aus den Tiefen der Hölle schießt direkt aus den Fingern des Harrowed. Das ist eine Aktion, kann aber nur einmal pro Zug eingesetzt werden. Der Angriff nutzt die Fertigkeit Athletik und die Kegelschablone und verursacht 3W6 bei den Unglücklichen, die in die Schablone geraten. Hellfire kann ausgewichen werden."
],
"p": 62,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Infest",
"k": "Harrowed",
"r": 0,
"v": "Harrowed",
"w": 0,
"b": [
"Wie viele Aspekte der Natur haben auch Insekten geistige Gegenstücke in den Hunting Grounds. Manitous haben ein Händchen dafür, Krabbeltiere zu kontrollieren, und manche geben das an ihre Wirte weiter. Ein Charakter mit dieser ekligen Fähigkeit kann Schwärme beißender oder stechender Insekten kontrollieren.",
"Infest verleiht dem Harrowed nicht die Fähigkeit, tatsächlich Insekten zu erschaffen oder aus großer Ferne herbeizurufen. Sie müssen bereits in der unmittelbaren Umgebung sein (Entscheidung des Marshals), aber der Schwarm des Deaders muss nicht aus einer einzigen Art bestehen. Um den Schwarm herbeizurufen, nutzt sie eine Aktion und gibt einen Benny aus, um eine Masse aus Spinnen, Kakerlaken und Tausendfüßlern zu einer wimmelnden, beißenden, unheiligen Horde zu vereinen.",
"Der Harrowed kontrolliert den Schwarm, bis er sich auflöst – wenn er zerstört wird oder nach etwa fünf Minuten. Die Werte und Sonderfähigkeiten dieser Viecher stehen unter Schwarm im Grundregelwerk."
],
"p": 63,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Soul Eater",
"k": "Harrowed",
"r": 2,
"v": "Harrowed",
"w": 0,
"b": [
"An den Harrowed ist nichts angenehm. Wenn sie nicht gerade das Fleisch von irgendwas fressen, am liebsten roh und zappelnd, verlangt der Dämon in ihnen oft stattdessen nach roher Lebenskraft.",
"Verursacht der Harrowed mit einem erfolgreichen unbewaffneten Kämpfen-Angriff (auch mit Klauen, falls er sie hat) eine Wunde oder mehr, kann er unmittelbar danach als freie Aktion eine Willenskraftprobe mit –2 ablegen. Bei Erfolg kann er eine eigene Wunde heilen (oder eine Stufe Erschöpfung, nach seiner Wahl). Mehrere verursachte Wunden haben keinen zusätzlichen Effekt."
],
"p": 63,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Spook",
"k": "Harrowed",
"r": 0,
"v": "Harrowed",
"w": 0,
"b": [
"Hin und wieder erhascht eine unglückliche Seele einen Blick auf das, was in einem Harrowed lebt. Manche rennen schreiend in die Berge. Andere geben vielleicht nur ein kleines Wimmern von sich. Aber jeder ist davon betroffen, selbst die standhafteste Seele.",
"Als Aktion kann ein Harrowed ein einzelnes Ziel zwingen, eine Furchtprobe mit –2 abzulegen. Das Opfer muss einigermaßen nahe sein oder den Deader sehen können (Entscheidung der SL), und die Macht kann nicht mehr als einmal in derselben allgemeinen Begegnung gegen dasselbe Ziel eingesetzt werden. Der Harrowed kann wählen, eine Stufe Erschöpfung zu erleiden, um stattdessen alle Ziele innerhalb von 12\" zu beeinflussen."
],
"p": 63,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Stitchin’",
"k": "Harrowed",
"r": 0,
"v": "Harrowed",
"w": 0,
"b": [
"Ein toter Mann mit Stitchin' regeneriert sich viel schneller als normal – er kann jeden Tag einen Wurf auf natürliche Heilung ablegen, sofern er pro Versuch ein Pfund Fleisch verzehrt."
],
"p": 63,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Verbessertes Stitchin’",
"k": "Harrowed",
"r": 2,
"v": "Harrowed, Stitchin’",
"w": 0,
"b": [
"Wie oben, doch der Deader würfelt jede Stunde."
],
"p": 63,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Übernatürliches Attribut",
"k": "Harrowed",
"r": 0,
"v": "Harrowed",
"w": 0,
"b": [
"Übernatürliches Attribut verbessert sofort eine beliebige Eigenschaft um zwei Würfeltypen (z. B. wird aus W12 ein W12+2). Das Talent kann bis zu fünfmal gewählt werden, einmal pro Eigenschaft. Dadurch steigt das Limit für diese Eigenschaft (und verknüpfte Fertigkeiten) um denselben Betrag."
],
"p": 63,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Wither",
"k": "Harrowed",
"r": 0,
"v": "Harrowed",
"w": 0,
"b": [
"Dieses grauenhafte Talent lässt einen Deader sein Opfer unnatürlich altern. Als Aktion muss der Harrowed sein Ziel berühren und eine vergleichende Willenskraftprobe ablegen. Gewinnt der Untote, verwelken und verfallen Fleisch und Knochen des Opfers, wodurch seine Stärke eine Stunde lang um einen Würfeltyp sinkt (mindestens W4). Mit einer Steigerung sinken Stärke und Konstitution um je einen Würfeltyp. Mehrfache Anwendungen von Wither auf dasselbe Ziel sind nicht kumulativ, aber der Harrowed kann weitere Versuche unternehmen, um den Effekt der Steigerung zu erreichen."
],
"p": 63,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "High Roller",
"k": "Arkane Hintergründe",
"r": 1,
"v": "Willenskraft W8+, Arkaner Hintergrund (Huckster), Zaubern W6+",
"w": 0,
"b": [
"Go high or go home. Dein Held zieht eine zusätzliche Karte, wann immer er einen Pakt mit dem Teufel schließt (siehe S. 65)."
],
"p": 67,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Verbesserter High Roller",
"k": "Arkane Hintergründe",
"r": 2,
"v": "High Roller",
"w": 0,
"b": [
"Dein eingefleischter Spieler zieht beim Pakt mit dem Teufel insgesamt zwei zusätzliche Karten."
],
"p": 67,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Old Hand",
"k": "Arkane Hintergründe",
"r": 3,
"v": "Arkaner Hintergrund (Huckster), Zaubern W10+",
"w": 0,
"b": [
"Mit Wissen kommt Macht, und dieser Huckster weiß, wann es genug ist. Nachdem du beim Pakt mit dem Teufel ein Fünf-Karten-Pokerblatt gebildet hast, kannst du bis zu drei Karten ablegen und neu ziehen!"
],
"p": 67,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
},
{
"n": "Whateley-Blut",
"k": "Arkane Hintergründe",
"r": 0,
"v": "Arkaner Hintergrund (Huckster)",
"w": 0,
"b": [
"Irgendwo in deinem Stammbaum gibt es einen krummen Ast namens Whateleys. Diese verdrehte, inzestuöse Familie von Hexen und Hexenmeistern ist unter Arkanen als mächtig – und extrem verrückt – bekannt. Hucksters mit Whateley-Geist in den Adern haben „Blutmagie“ gelernt.",
"Viele Whateleys sind missgestaltet, wobei dein Held es nicht sein muss (wähle das passende Handicap, falls doch). Alle tragen ein verräterisches Mal – blasse Haut, tiefschwarzes Haar, lange Fingernägel, fahle Haut und so weiter – und alle haben grüne Augen.",
"Welches Mal du auch wählst: Etwas an ihrem verdorbenen Blut stößt die Leute ab. Dieses ungute Gefühl verringert die Überreden-Würfe des Hucksters um 1, auch wenn viele es mit anderen, separat gewählten Talenten ausgleichen (Attraktiv, Charismatisch usw.).",
"Nun zum Kern des Talents. Ein Huckster mit Whateley-Blut kann freiwillig eine Stufe Erschöpfung für 5 Machtpunkte oder eine Wunde für 10 erleiden. Das geschieht genau so, wie du denkst – durch Schneiden, Ritzen oder anderweitiges Verstümmeln (als freie Aktion, was ziemlich schmutzig ist!). Whateleys sind ein schlüpfriger Haufen, also vollendet der Zauberwirker, wenn ihn das Kampfunfähig macht, seinen Zug, bevor er zu einem Erdnickerchen umkippt."
],
"p": 67,
"s": [
"DL"
],
"bk": "sw_dl",
"o": 2
}
];
