/* SLUGBLASTER – Gelegenheiten und Herausforderungen (Regelbuch S. 26–27) */
var SB_GELEGENHEITEN = {
 p:26, t:"Gelegenheiten",
 wurf:"Spieler würfeln 1W6 und addieren optional …",
 mods:["+1, wenn *freundlich* oder besser mit fünf oder mehr Fraktionen","+1, wenn *verbündet* mit einer oder mehr Fraktionen","+1 für Stufe *Aufsteiger* oder höher","+1 für Stufe *Aufsteigende Stars* oder höher"],
 z:[
  ["1",["Hotspot","Eine zufällige Welt zahlt in diesem Run +5 Crew-Style aus. Kommt ihr da überhaupt hin? Es muss doch einen Weg geben, oder?"],["Ironie, vielleicht?","Wider alle Erwartung ist Hillview kurzzeitig zum Hotspot geworden, und Teenager-Pilger von überall starren mild interessiert."]],
  ["2",["Solo-Angebot","Eine Fraktion will mit einem von euch zusammenarbeiten. Lehnt ihr ab, verärgert ihr sie. Nehmt ihr an, gibt es Legacy oder 3 Bauteile, aber auch 1 Bruch."],["Tide Pods","Ein Online-Trend lockt die gesamte Jugend. Verdient einen Mega-Run-Bonus, aber nur, wenn ihr postet, bevor der Trend kippt, andernfalls *verliert* ihr Style. Startet eine Gefahrenleiste."]],
  ["3",["Wettbewerb","Ein Video-Jam, ein Live-Turnier, ein Hackathon oder ein anderer exklusiver Wettbewerb. +1 Bite, aber eine Chance auf einen Mega-Preis."],["Namentlich erwähnt","Jemand Wichtiges spricht über euch. +5 Crew-Style. Das heißt nicht, dass man euch mag, aber dass man weiß, dass es euch gibt."]],
  ["4",["Kollabo","Eine andere Crew lädt euch zu einem krassen Run mit Mega-Preis ein, dazu die Chance, ihre Fans und Bekannten zu beeindrucken."],["Zweckbündnis","Für euch und einen *Rivalen* oder *Feind* ergibt sich eine für beide vorteilhafte Gelegenheit. Der Beginn eines unsicheren Waffenstillstands? Oder einer gegenseitig giftigen Freundfeindschaft?"]],
  ["5",["Hammerparty","Ihr werdet zu einem Festival, einem Geheimclub oder einer anderen exklusiven Party mit Extras und Preisen eingeladen."],["Wer wen kennt","Jemand bietet an, euch einem wichtigen Freund vorzustellen. Bekommt Mega-Gunst bei einer Fraktion, aber nur, wenn ihr es nicht vermasselt."]],
  ["6",["Live und direkt","Ein besonderer Run mit hoher Einschaltquote, vollem Publikum oder einem hilflosen Team eifriger Dokumentarfilmer. +3 Bite, aber alle Tricks bringen +1 Style."],["Viral","Erhaltet 1W6 Crew-Style, dann dürft ihr, wenn ihr wollt, weiterwürfeln. Würfelt ihr irgendwann eine 6, platzt es, löst einen Backlash aus, verärgert drei Fraktionen und bringt nur 5 Crew-Style."]],
  ["7",["Traum-Run","Die Chance, als Erste an einem neuen Spot zu sein, irgendwo Legendäres einzuschleichen oder einen anderen Run mit Mega-Preis zu machen."],["Swag","Ein Sponsor beschenkt euch mit Mustern, Testgeräten und anderen Gratisprodukten. Je +3 Bauteile."]],
  ["8",["One Shot","Ein entscheidender Run mit einem riesigen Mega-Preis, der alles verändert, aber auch +5 Bite."],["VIP-Zugang","Eine Fraktion zeigt euch ein geheimes Zwei-Wege-Tor zwischen zwei beliebigen Welten. Wo ist der Haken?"]],
  ["9+",["Big in Japan","Ihr seid bei einer unerwarteten Zielgruppe überraschend beliebt geworden (+3). Warum?"],["Planare Finsternis","Ein einmaliges dimensionales Phänomen gewährt euch kurzen Zugang zu einem sonst unzugänglichen Ort."]]
 ]
};
var SB_HERAUSFORDERUNGEN = {
 p:27, t:"Herausforderungen",
 wurf:"Die SL würfelt 1W6 und addiert optional …",
 mods:["+1, wenn *Rivalen* oder schlechter mit fünf oder mehr Fraktionen","+1, wenn *Feinde* mit einer oder mehr Fraktionen","+1 für Stufe *Aufsteiger* oder höher","+1 für Stufe *Aufsteigende Stars* oder höher"],
 z:[
  ["1",["Fraktions-Umbruch","Eine Fraktion richtet sich neu aus, benennt sich um, formiert sich neu oder verändert sich erheblich. Wie verändert das euer Verhältnis zu ihr?"],["Planare Tektonik","Zwei Welten tauschen auf der Karte die Plätze. Wissen wir, warum? Ist das ein Omen? Wie verändert dieses Beben die politische Landschaft?"]],
  ["2",["Liebling der Woche","Einer von euch ist zum Publikumsliebling geworden. Seid bescheiden für 1 Style oder sonnt euch im Rampenlicht für 5 Style und einen Bruch."],["Hush-Hush","Ein Feind einer anderen Fraktion macht euch ein verlockendes Angebot. Es anzunehmen wäre Verrat, aber nur, wenn sie es herausfinden."]],
  ["3",["Missverstanden","Der Ruf oder die Marke eurer Crew wird in Frage gestellt. Wie kam es dazu? Wie könnt ihr es richtigstellen?"],["Kooperation","Eine Fraktion bittet euch um einen schwierigen, riskanten oder sozial peinlichen Gefallen. Nehmt an oder verärgert sie. ::Grimassen-Emoji::"]],
  ["4",["Drohungen","Eine Fraktion fällt über euch her, nimmt euch zum Verhör mit usw. Jeder von euch erleidet einen Slam (*erschüttert, müde* usw.), der einzeln genopet werden kann."],["Zwischen den Fronten","Einige eurer Fans machen Ärger, zwei *Verbündete* streiten sich, euer Sponsor leistet sich einen furchtbaren PR-Patzer usw. Mischt ihr euch ein?"]],
  ["5",["Herausgefordert","Eine Fraktion fordert euch öffentlich zu einem Run mit +3 Bite heraus. Nehmt an oder verärgert zwei Cliquen. Langweilig zu sein ist noch schlimmer, als feige zu sein."],["Gerüchte","Jemand versucht, euch gegeneinander aufzubringen. Jeder Spieler erfindet etwas, das er über einen Teamkameraden gehört hat. Nehmt einen Bruch, bis ihr alles geklärt habt."]],
  ["6",["Hochstapler","Alternative *Ichs* tauchen auf und wollen in euren Betten schlafen und eure Zuckerpops essen. Sie halten *euch* für die Hochstapler. Seid ihr es? Woher wollt ihr das sicher wissen?"],["Klimawandel","Eine der Marken eurer Crew gerät aus der Mode und bringt für die nächsten 1–3 Runs keinen Style-Bonus (heimlich von der SL bestimmt). Rebrandet, haltet durch oder kämpft gegen die wechselnden Gezeiten."]],
  ["7",["Petzen","Eine Obrigkeit spricht mit euren Familien über euer Verhalten und löst automatisch bei allen den nächsten Familien-Beat aus (aber nicht Erlösung)."],["Invasion","Etwas ist euch nach Hause gefolgt. Tut nichts und verärgert Rescue oder Doorways, oder versucht, es zu beheben, und riskiert, euch noch mehr zu belasten."]],
  ["8",["Geghostet","Eine Fraktion wendet sich plötzlich gegen euch. WTF, Alter? Was ist los?"],["Skate-Stopper","Eine Obrigkeit beginnt, Dünnzonen zu schließen."]],
  ["9+",["Gejagt","Jemand oder etwas ist hinter euch her. +3 Bite und kein Preis in diesem Run. Entkommt einfach, überlebt und streamt an einem anderen Tag weiter."],["Schmutzkampagne","Jemand versucht, euren Ruf zu ruinieren. Nehmt −1 bei drei *neutralen*, *unfreundlichen* oder instabilen Fraktionen. Zwei *freundliche* oder *enge* Fraktionen werden instabil."]]
 ]
};
