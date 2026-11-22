/* The Spire – Ausrüstung (The City Must Fall, S. 19–22). Die Tag-Karten kommen aus tags.js. */
window.SP_AUSR = {
  t:"Ausrüstung", p:19,
  abschnitte:[
    {id:"ausruestung", t:"Ausrüstung", p:19, bild:"kapitel/ausruestung-S020", b:[
      "Ausrüstung ermöglicht dir zumeist, eine Aufgabe zu erledigen. Ein Dietrich lässt dich Schlösser knacken; Kletterausrüstung lässt dich eine Mauer erklimmen; Parfüm lässt dich wie eine feine Kurtisane riechen. Der Großteil der Ausrüstung, die du benutzt, fällt unter diese Kategorie und hat keine mechanische Wirkung im Spiel. (Der Versuch, eine Aufgabe ohne die passende Ausrüstung zu erledigen, kann die Schwierigkeit der Handlung erhöhen oder sie sogar unmöglich machen.)",
      "Erwirbst du jedoch einen Gegenstand, der dir wichtig ist, legst du zwei Dinge an ihm fest, die ihn besonders machen und von den vielen ähnlichen abheben. Notiere einen negativen und einen positiven Aspekt, zum Beispiel:",
      {t:"ul", x:[
        "Ein ramponierter alter Karren mit versteckten Behältern zum Schmuggeln",
        "Ein kratziges Seil, gefertigt von den Meister-Seilern von Perch",
        "Eine Flasche Gutrot-Schnaps, die fürchterlich schmeckt, aber alte Münzen auf Hochglanz bringt",
        "Ein fabelhafter Umhang, der kaum bis gar keinen Schutz vor den Elementen bietet",
        "Ein stabiler Sonnenschirm in grellen, unmodischen Farben"]},
      "Nutzt du den positiven Aspekt des Gegenstands aus, wirfst du bei Proben, bei denen du ihn einsetzt, mit Meisterschaft. Wirst du in eine Situation gezwungen, in der du dich auf den negativen Aspekt des Gegenstands verlassen musst, steigt die Schwierigkeit der Handlung um 1.",
      "Waffen und Rüstungen folgen etwas komplexeren Regeln, die unten (auf S. 21) beschrieben sind. (Wenn ihr den Kampf aber nicht zu detailliert spielen wollt, könnt ihr die obigen Regeln statt der Tags durchaus auch für Waffen verwenden; das liegt bei eurer Gruppe.)"]},
    {id:"kaufen", t:"Kaufen und Verkaufen", p:19, b:[
      {t:"schwarz", h:"Kaufen und Verkaufen", b:[
        "Wir wollten die Spielenden nicht jeden Sten und jede Queen in ihren Taschen zählen lassen, daher haben wir die Vorstellung von Geld (und Ressourcen, Gefälligkeiten und Einfluss) im Widerstand Silber abstrahiert. Man kann davon ausgehen, dass es einer Figur umso besser geht, je mehr zusätzliche Widerstandsplätze sie in Silber hat – aber die Spielerfiguren in Spire werden nie wohlhabend sein, jedenfalls nicht nach den Maßstäben derer, die sie unterdrücken.",
        "Um Gegenstände zu kaufen, legt die Spielleitung die Kosten fest: W3 für kleine Anschaffungen, W6 für mittlere und W8 für wirklich teure oder exotische Materialien. Manche Gegenstände lassen sich schlicht nicht kaufen, ohne viel Mühe aufzuwenden, einen Verkäufer zu finden und zu tun, was auch immer dieser dafür verlangt (das ist mehr wert als Geld). Dann würfelt die spielende Person; meist Überzeugen+Handel, aber Täuschen+Handel könnte funktionieren, wenn sie versucht, jemanden übers Ohr zu hauen.",
        "Würfelt sie mit ihrem höchsten Würfel eine 8 oder mehr, hat ihre Figur den Gegenstand gekauft, ohne dass es große Auswirkungen auf ihre Finanzen hat; es kostet Geld, aber sie kann es sich leisten. Bei 6 oder 7 erleidet sie den vollen gewürfelten Stress, bekommt aber den Gegenstand. Gewöhnlich wird dieser Stress auf Silber angerechnet. Aber was passiert bei einer 5 oder weniger? Sie markiert trotzdem Stress, bekommt den Gegenstand aber nicht. Vielleicht musste sie Schmiergeld zahlen, um ein Treffen zu vereinbaren (Silber), oder sie hat ihren Ruf gefährdet, indem sie einen Kauf organisierte, nur um bei einem zu hohen Preis kehrtzumachen (Ruf). Vielleicht bekommt die Stadtwache Wind davon, dass jemand ungewöhnliche Waren kaufen will, und beginnt zu schnüffeln (Schatten).",
        "Zum Verkaufen: Würfle, um einen Käufer zu finden, und entferne dann W3, W6 oder W8 Stress aus Silber (oder Ruf), je nachdem, wie wertvoll der Gegenstand war.",
        "Spielende sollten nicht für alles würfeln müssen, was sie im Alltag benutzen; wie bei allem anderen sollte die Spielleitung nur dann eine Probe verlangen, wenn etwas auf dem Spiel steht und ein Scheitern interessant sein könnte."]}]},
    {id:"waffen", t:"Waffen", p:21, b:[
      "Waffen fügen Zielen je nach Typ Stress zu. Die meisten Waffen haben ihre Stresswürfel in Klammern hinter dem Namen, aber als grobe Richtschnur gilt:",
      {t:"dl", x:[["1 Stress", "Unbewaffneter Schaden"], ["W3 Stress", "Zivile oder improvisierte Waffen – Messer, Knüppel usw."], ["W6 Stress", "Militärische oder professionelle Waffen – Schwerter, Schusswaffen, Armbrüste usw."], ["W8 Stress", "Schwere oder exotische Waffen – Großschwerter, Kanonen usw."]]}]},
    {id:"reichweite", t:"Reichweite", p:21, b:[
      "Wir nehmen an, dass Waffen nur im Nahbereich eingesetzt werden können, sofern sie nicht den Tag Fernkampf oder Extreme Reichweite haben. Um Nahkampfwaffen gegen einen Gegner in der Entfernung einzusetzen, der von deiner Anwesenheit weiß und eine Fernkampfwaffe hat, würfle (wahrscheinlich Schleichen oder Verfolgen), um in Reichweite zu gelangen, ohne Schaden zu nehmen.",
      "Übertriffst du deine Gegner in der Reichweite – etwa weil du Waffen mit dem Tag Fernkampf benutzt und sie nicht, oder weil du Waffen mit dem Tag Extreme Reichweite benutzt und ihre nur Fernkampf haben –, erleidest du höchstens 1 Stress pro Wurf, bis sie nah genug sind, um ihre Waffen wirksam einzusetzen. Mehr zur Reichweite findest du im Kapitel Kampf auf S. 79."]},
    {id:"munition", t:"Munition", p:21, b:[
      "Hat eine Figur eine Waffe, die Munition benötigt (Bolzen, Kugeln, Pfeile usw.), nehmen wir an, dass sie einen ausreichenden Vorrat davon hat – es ist nicht nötig, jedes einzelne Stück zu verfolgen."]},
    {id:"tags", t:"Tags", p:21, tags:"waffen", b:[
      "Waffen können außerdem Tags haben, die die Art ihrer Verwendung mechanisch beeinflussen. Die meisten Tags wirken nur, wenn eine Spielerfigur die Waffe benutzt; als grobe Richtschnur gilt: Wenn ein Tag vom Würfeln spricht, können NSC ihn nicht nutzen. (Tags wie Durchschlagend können hingegen sowohl von Spieler- als auch von Nichtspielerfiguren genutzt werden.)"]},
    {id:"ruestung", t:"Rüstung", p:22, tags:"ruestung", b:[
      "Rüstung gibt einer Figur, die sie trägt oder bei sich führt, zusätzliche Widerstandsplätze in Blut, sodass sie mehr Treffer einstecken kann, bevor sie ihren Wunden erliegt. Rüstung hat Tags auf dieselbe Weise wie Waffen:"]},
    {id:"eigene", t:"Eigene Waffen und Rüstungen erstellen", k:"Eigene Waffen und Rüstungen", p:22, tabellen:true, b:[
      "Spielleitung, es liegt an dir, die passenden Waffen für deine Geschichte zu erschaffen. Wir haben im ganzen Buch viele Beispiele aufgeführt, sowohl als Teil der Startausrüstung der Figuren als auch in NSC-Beschreibungen, aber wir wollten dich die benötigten Waffen selbst gestalten lassen, statt eine erschöpfende Liste jedes möglichen Ausrüstungsstücks des Spiels zu schreiben.",
      "Um eine Waffe oder ein Rüstungsstück zu erzeugen, wähle einen Stresswürfel dafür und hänge beliebig viele Tags an (mehr als vier verlangsamen das Spiel allerdings). Erfinde gern auch eigene Tags, besonders wenn sie keine mechanische Rückmeldung haben: Stilvoll, Furchteinflößend, Protzig und so weiter. Wir haben unten ein paar Ausrüstungsstücke erzeugt, um dir den Einstieg zu erleichtern."]}
  ],
  waffenTabelle:{head:["Waffe", "Stress", "Tags"], rows:[
    ["Donnerbüchse", "W3", "Streuung W3, Fernkampf, Kernschuss, Einweg"],
    ["Giftklinge", "W3", "Anhaltend W6, Verbergbar"],
    ["Breithacke", "W3", "Brutal, Durchschlagend"],
    ["Aelfir-Langbogen", "W6", "Meisterstück, Ermüdend, Extreme Reichweite"],
    ["Neunschwänzige Katze", "W3", "Vernarbend, Betäubend"],
    ["Gnollischer Kriegshammer", "W6", "Brutal"],
    ["Yssianische Parierklinge", "W3", "Parierend"],
    ["Spireblack-Bombe", "W6", "Streuung W6, Gefährlich, Fernkampf, Einweg"],
    ["Nachgebaute galvanische Arkebuse", "W8", "Extreme Reichweite, Gefährlich, Unzuverlässig"],
    ["Blendgranate der Sonnenwache", "1", "Streuung W6, Betäubend – W6 Stress gegen Drow"],
    ["Würgerpistole", "W6", "Durchschlagend, Fernkampf, Doppelläufig"]]},
  ruestungTabelle:{head:["Rüstung", "Widerstand", "Tags"], rows:[
    ["Eisenspinnengewebe", "2", "Getarnt (Die Werke)"],
    ["Krawallausrüstung der Stadtwache", "4", "Schwer"],
    ["Gebet des Ministers", "1", "Verbergbar"],
    ["Kesselblech", "2", ""],
    ["Der Mantel des Herzogs, möglicherweise verzaubert", "2", "Unerbittlich"]]}
};
