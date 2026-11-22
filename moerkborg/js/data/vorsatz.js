/* Vorsatz-Tabellen (Corebook, Vorsatzseiten PDF 2–3 und 95–96, ohne Seitenzahl) – Anzeige unter „Tabellen“ in Bauschritt 7 */
var MB_VORSATZ = {
 namen:{t:"Name", w:"W8 × W6", u:"Mann? Frau? Allesamt verlorene Seelen.", spalten:[
  ["Aerg-Tval","Agn","Arvant","Belsum","Belum","Brint","Börda","Daeru"],
  ["Eldar","Felban","Gotven","Graft","Grin","Grittr","Haerü","Hargha"],
  ["Harmug","Jotna","Karg","Karva","Katla","Keftar","Klort","Kratar"],
  ["Kutz","Kvetin","Lygan","Margar","Merkari","Nagl","Niduk","Nifehl"],
  ["Prügl","Qillnach","Risten","Svind","Theras","Therg","Torvul","Törn"],
  ["Urm","Urvarg","Vagal","Vatan","Von","Vrakh","Vresi","Wemut"]]},
 schaetze:{t:"Okkulte Schätze", w:"W10", rows:[
  "**Aschgrauer Ring,** fingerbreit. Alles, was hindurchgeht, wird ausgelöscht.",
  "Die klagende Musik dieser kleinen, **üblen Flöte** belebt einen fötusgroßen Fleischgolem in einer nahen Leiche. **TP** 5 **Moral** – **Keine Rüstung** **Biss** W4, immun gegen Mächte.",
  "Ein Zettel erklärt: Ein Bissen von diesem **Hungerlöffel** bedeutet den Tod durch langsames Verhungern.",
  "Das Bild eines Wesens in diesem bösartig-genauen **Spiegel** zeigt nur die beschämende Wahrheit seiner Seele.",
  "**Vampirische Phurba.** Heilt dich, während sie dein Ziel verletzt (W3), aber Vorsicht: Nach insgesamt 6 gestohlenen TP lege eine Präsenzprobe SG14 ab oder werde süchtig – du musst dann täglich eine Präsenzprobe SG12 ablegen. Scheitert sie, musst du vor dem nächsten Sonnenaufgang jemanden mit dem Messer erstechen. Oder zu Asche verwelken und sterben, wenn die Sonne aufgeht.",
  "Eine schwarze **Perle.** In der Dunkelheit fallen gelassen, rollt sie zum nächsten Ausgang ins Tageslicht.",
  "Diese **Fackel** brennt eine unsterbliche Stunde lang. Halte sie und lebe. Du kannst Gliedmaßen verlieren und in negative TP geraten, stirbst aber nicht, es sei denn, du lässt die Fackel fallen oder sie brennt aus.",
  "Ein silberner **Vogelkäfig** tötet alles, was hinter seine Stäbe gesetzt wird, langsam, über eine lange Nacht. Das Getötete erhebt sich doppelt so stark wieder, als wütender, unkontrollierbarer Untoter.",
  "**Schwarze Krone des Verkrüppelten Königs.** Sie zu tragen krümmt deinen Körper, während dir bewusst wird, dass du und jede Kreatur im Umkreis von 100 Yards +10 auf eure Würfe erhaltet, aber deine maximalen TP halbiert werden. Auf über 20 modifizierte Würfe zählen als Krits. Die getragene Krone kann nur im fahlen Licht eines Vollmonds abgenommen werden.",
  "Wer diese uralte **Augenbinde** trägt, wird für jene unsichtbar, die atmen, doch die Untoten greifen ihn besessen an, und nahe Leichen erwachen in stöhnendem, unheiligem Zorn."]},
 wetter:{t:"Wetter", w:"W12", rows:["Leblos grau","Hämmernder Regen","Durchdringender Wind","Ohrenbetäubender Sturm","Schwarz wie die Nacht","Totenstille","Wolkenbruch","Suppendicker Nebel","Knisternder Frost","Lästiger Nieselregen","Donnergrollen","Grabeskälte"]},
 fallen:{t:"Fallen und Teufelei", w:"W12", rows:["Gut gekleidete Leiche, mit Sprengfalle","Wandlöcher schießen Giftpfeile","Glocken und Murmeln auf dem Boden","Korb voller Skorpione, kurz vor dem Herabfallen","Fischhaken hängen auf Augenhöhe","Truhe mit Sprengrunen markiert","Schloss mit Fläschchen Giftgas präpariert","Das Entfernen eines Juwels führt zum Deckeneinsturz","Schräger Boden, durchscheinendes Öl, Grube","Schlangenkäfige auf einstürzenden Deckenplatten","Böse Urnen setzen kalte Geister frei","Münzen, mit Dreck und Gift überzogen"]},
 leichen:{t:"Leichenfledderei", w:"W66", rows:[
  ["11–16","Die Überreste von etwas Wertlosem zerbröseln in deinen Händen."],
  ["21","Topf mit extrem starker Juckkreme."],["22","Halskette aus Menschenzähnen."],["23","Beutel mit wütenden, giftigen Motten. Zähigkeitsprobe SG6 oder Tod."],
  ["24","Tasche voller Glasscherben, SC nimmt W2 Schaden."],["25","Irres Manifest. Wenn gelesen, Präsenzprobe SG12 oder dauerhaft 1 Präsenz durch Verwirrung verlieren."],["26","Schlüssel zu einer nahen verschlossenen Tür. Gestohlen."],
  ["31","Karte zum Haus einer schwachen, aber wohlhabenden Familie."],["32","Eine hoffnungslose Menge Spinnen."],["33","Metallzylinder mit Schießpulver und Zündschnur. Würfle W6. Bei 1–2 verlierst du eine Hand. Bei 3–6 3W10 Schaden, wo immer er landet."],
  ["34","Gesicht eines bekannten und beliebten/verhassten Hexenjägers. Abgezogen."],["35","Zettel mit den Namen der SC. Einer ist durchgestrichen."],["36","Gequälte Elfe mit abgerissenen Flügeln und ausgestochenen Augen."],
  ["41","Karte zu einem Ort, der unmöglich existieren kann."],["42","Unbeschriftete Flasche mit einer Flüssigkeit, die zwischen Rot und Grün wechselt."],["43","Schuldschein. Ein örtlicher Potentat schuldet dem Inhaber eine beträchtliche Summe."],
  ["44","Totenmaske eines der SC."],["45","Das „Wasser des Lebens“. Heilt W8. Zähigkeitsprobe SG10 oder erblinde. Stark alkoholisch."],["46","Mit diesem stimmte etwas ganz und gar nicht. Hände bedeckt mit etwas Lauwarmem, Braunem und Ätzendem. Nimm W2+1 Schaden und stinke W4 Tage furchtbar."],
  ["51","Schwarzer Kergüs-Dolch. 2W4 Schaden."],["52","Beschriftete Giftflasche. Zähigkeitsprobe SG12 oder senke eine zufällige Fähigkeit um W4. Die Fähigkeit kann erhöht werden, wenn dein Charakter verbessert wird."],["53","Kopfhaut mit langem schwarzem Haar."],
  ["54","Goldene Kugel mit unsichtbarer Naht, lässt sich aufdrehen."],["55","Blutbefleckter Schlagring."],["56","Zwei präparierte Würfel."],
  ["61–66","Das Ergebnis in Silber."]]}
};
