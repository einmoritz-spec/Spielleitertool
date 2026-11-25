/* Regeln › Charakter (Grundbuch S. 41–47): Der Charakterbogen. Deutsche Übersetzung. Das Balladengedicht S. 48 ist nicht übernommen. */
(function(){
var K = "haus/regeln/charakter", L = (HH_TEXT[K] = HH_TEXT[K] || []);
L.push(
{id: "bogen", t: "Der Charakterbogen", p: 42, b: [
 "Ich kenne dich eigentlich nicht, aber wenn du es bis hierher geschafft hast, wissen wir wenigstens, dass wir etwas gemeinsam haben: den Wunsch, eine Geschichte zu erzählen. Besser noch: Geschichte zu erzählen! In diesem Buch habe ich das Leben und die Taten vieler Figuren zusammengetragen, die unglaubliche Abenteuer erlebt haben. Aber wer weiß, wie viele ich ausgelassen habe. Hier kommst du ins Spiel.",
 "Kennst du, persönlich oder vom Hörensagen, einen Littling, dessen Taten es verdienen, in Erinnerung zu bleiben, kannst du ihn zu deiner Figur machen. Gemeinsam mit der Spielleitung und den anderen Spieler:innen ist es dann deine Aufgabe, sein Leben nachzuerleben und seine Geschichte nachzuerzählen, Kapitel für Kapitel.",
 {t: "h", x: "Der Charakterbogen"},
 "Der Charakterbogen auf der nächsten Seite ist ein historisches Dokument von höchster Bedeutung, ein Weg, alles festzuhalten, was du über deine Figur weißt. Ihr Name, ihr Volk, ihre Herkunftsnation und ihr Beruf. All das findet auf diesem Bogen Platz, ebenso ihre Fertigkeiten, Merkmale, Verträge und andere wertvolle Informationen.",
 "Da ein Bild mehr sagt als tausend Worte, findest du auf dem Bogen auch einen großen Rahmen, in dem du ein schönes Porträt deiner Figur anfertigen kannst. Es muss kein großes Meisterwerk sein. Du musst nur dein Bestes geben und dem Littling gerecht werden, den du darstellst. So geht er in die Geschichte ein!",
 "Wenn du möchtest, kannst du den Bogen auch von jemand anderem illustrieren lassen, aber ich möchte zur Vorsicht raten. Ich habe es bei diesem Band selbst so gehalten und mich an Mr. Bilibinski gewandt, der trotz seines großen Talents als Künstler oft Freiheiten bei den historischen Tatsachen zu nehmen scheint. Er malt mich oft mit rundem Bauch, was, ehrlich gesagt, einfach übertrieben ist!",
 "Um den Bogen deiner Figur auszufüllen, musst du jedenfalls nur diese einfachen Schritte befolgen:",
 {t: "ul", x: [
  "Wähle einen Namen.",
  "Wähle ein Volk.",
  "Notiere deinen Erbvertrag.",
  "Wähle eine Herkunftsnation.",
  "Wähle einen Beruf und eine Berufung.",
  "Notiere deine Feld- und Fertigkeit-Punkte.",
  "Verteile 4 Fertigkeit-Punkte nach Belieben.",
  "Wähle deine Merkmale und Manöver.",
  "Notiere die Trümpfe im Ärmel.",
  "Notiere deinen Wohlstand und deine Ausrüstung.",
  "Notiere dein Anstand.",
  "Schreibe deinen Prolog.",
  "Wähle eine Memory.",
  "Wähle, welche Sprachen du kennst."]},

 {t: "h", x: "Volk & Nation"},
 "Wähle zuerst das Volk, zu dem deine Figur gehört, aus dieser Liste:",
 {t: "ul", x: ["Faeries", "Boggart", "Sprites", "Sluagh"]},
 "Ist deine Figur ein Sprite, wähle auch die Elementargruppe, der sie angehört: Salamander, Sylph oder Undine. Je nach Volk erhältst du Zugang zu einem einzigartigen Erbvertrag.",
 "Die Herkunftsnation deiner Figur legt fest, wo sie geboren wurde oder ihre Kindheit verbracht hat oder wohin sie gezogen ist. Die Nationen des House sind:",
 {t: "ul", x: [
  "**Der Realm:** in der Dining Hall",
  "**Der Hearth:** im Living Room",
  "**Die Free Dominions:** im Upper Floor",
  "**Die Horde:** im Basement"]},

 {t: "h", x: "Beruf & Berufung"},
 "Wähle den Beruf deiner Figur unter diesen:",
 {t: "ul", x: ["Soldat", "Gelehrter", "Jäger", "Verbrecher", "Duellant", "Tierführer"]},
 "Der Beruf eines Littlings sagt uns vieles über sein Leben und seine Spezialgebiete, sodass er vielleicht die wichtigste Entscheidung ist, die du triffst. Zunächst verleiht dir dein Beruf einen völlig einzigartigen berufsspezifischen Merkmal. Etwa das Merkmal Animal Companion des Tierführer, der dir einen treuen pelzigen, schuppigen oder chitingepanzerten Freund gibt. Außerdem gibt dir dein Beruf Zugang zu einem Manöver deiner Wahl aus einer Liste.",
 "Hast du einen Beruf gewählt, wählst du als Nächstes eine seiner 6 Berufungen. Bist du zum Beispiel Soldat, kannst du aus der Liste der Berufungen Gendarme oder Scissor for Hire wählen. Bist du dagegen Gelehrter, kannst du Diplomat oder Detective wählen. Und so weiter. Deine Berufung gibt dir außerdem Zugang zu einem zusätzlichen Merkmal, den du aus einer Liste wählst. Vor allem aber bestimmen Beruf und Berufung deine Punkte in jedem Feld und Fertigkeit.",

 {t: "h", x: "Fertigkeiten & Felder"},
 "Auf deinen Abenteuern kannst du dich auf 20 Fertigkeiten verlassen, die das Können deiner Figur in verschiedenen Dingen darstellen. Diese Fertigkeiten sind in 4 Felder gegliedert, die den Zusammenhang darstellen, in dem sie am häufigsten ins Spiel kommen. In der Tabelle zu jedem Beruf und jeder Berufung findest du eine Liste mit einem Feld und 10 Fertigkeiten, in denen du einen Punkt erhältst, insgesamt also 2 Feld-Punkte und 20 Fertigkeit-Punkte. Nachdem du diese Punkte notiert hast, kannst du außerdem 4 zusätzliche Punkte nach Belieben auf deine Fertigkeiten verteilen. Bedenke, dass du an diesem Punkt nicht mehr als 3 Punkte im selben Fertigkeit haben darfst.",
 "Stellst du dich einer Herausforderung, würfelst du so viele Würfel, wie die Summe deiner Punkte im verwendeten Fertigkeit und Feld ergibt. Mehr zu Felder und Fertigkeiten und wie man sie benutzt, findest du in Abschnitt IIII „Wie man spielt“.",
 {t: "karten", x: [
  {t: "box", h: "Krieg", b: ["Du bist im Feld Krieg, wenn du dich auf deine Muskeln verlassen musst, wenn du kämpfst oder dich anderen gegenüber durchsetzen willst.", "**Athletik:** rennen, springen, klettern, schwimmen oder reiten.", "**Autorität:** befehlen, inspirieren, einschüchtern.", "**Kampf:** im Nahkampf kämpfen, an einer Rangelei teilnehmen.", "**Stärke:** schieben, ziehen, heben oder etwas zerbrechen.", "**Wille:** Stress oder körperlichen Schmerz aushalten, Versuchungen widerstehen."]},
  {t: "box", h: "Straße", b: ["Du bist im Feld Straße, wenn du verstohlen handeln oder einer feindlichen Umgebung begegnen willst, etwa dem zwielichtigsten Viertel einer Stadt oder einem undurchdringlichen Pilzwald.", "**Vorsicht:** wachsam sein, Gefahren vorhersehen oder meiden.", "**Geschick:** Fingerfertigkeit, Schlösser knacken, Taschendiebstahl.", "**Ausweichen:** sich verstohlen bewegen, verstecken, ausweichen, entkommen.", "**Erkundung:** durch wilde Landstriche ziehen, sich orientieren, die Natur kennen.", "**Schießen:** Fernkampf- oder Wurfwaffen benutzen."]},
  {t: "box", h: "Gesellschaft", b: ["Du bist im Feld Gesellschaft, wenn du mit anderen sprichst, um sie zu überzeugen, zu manipulieren oder zu täuschen.", "**Art:** auftreten, Kunst schaffen oder beurteilen.", "**Charme:** jemanden verführen oder einen guten Eindruck machen.", "**Redegewandtheit:** sprechen, überzeugen oder täuschen.", "**Etikette:** gute Manieren kennen und zeigen, mit der feinen Gesellschaft umgehen.", "**Anmut:** sich anmutig bewegen oder handeln, balancieren oder akrobatische Kunststücke vollführen."]},
  {t: "box", h: "Wissenschaft", b: ["Du bist im Feld Wissenschaft, wenn du dich auf praktisches oder theoretisches Wissen verlässt, das du durch Studium oder Erfahrung erworben hast.", "**Fürsorge:** sich um verletzte, kranke oder schockierte Littlings kümmern.", "**Handwerk:** etwas bauen, benutzen oder reparieren.", "**Kultur:** Allgemeinwissen und Bildungsstand.", "**Einsicht:** die Lage verstehen, in der du dich befindest, oder Lügen erkennen.", "**Ermittlung:** Hinweise oder versteckte Gegenstände finden, einen Ort durchsuchen, Informationen sammeln."]}]},

 {t: "h", x: "Trümpfe im Ärmel"},
 "Asse sind wertvolle Ressourcen, die du ausspielen kannst, um große Vorteile zu erhalten. Es gibt vier Asse, einen für jede Kartenfarbe, dazu einen Joker. Du kannst ein Ass spielen, um vor einem Wurf einen zusätzlichen Würfel zu erhalten, um einen Zustand von deiner Figur zu entfernen, um ein Manöver erneut zu nutzen und sogar, um zu versuchen, einen Misserfolg ins Gegenteil zu verkehren. Mehr zu Asse, wie man sie am besten einsetzt und wie man sie verdient, findest du in einem eigenen Abschnitt in Abschnitt IIII „Wie man spielt“. Du beginnst das Spiel mit 2 Asse in den Farben, die zu den Hauptfeldern deiner Figur gehören (also das Felder, in denen du 2 Punkte hast).",

 {t: "h", x: "Merkmale und Manöver"},
 "Merkmale und Manöver sind besondere Talente und Fähigkeiten, auf die du dich auf deinen Abenteuern verlassen kannst. Ein Merkmal kann dir in bestimmten Situationen einen zusätzlichen Würfel (+1) oder einen Freien Neuwurf geben. Er kann dir auch Zugang zu exklusiven Informationen verschaffen. Ein Beispiel:",
 {t: "box", h: "Big and Strong", b: ["Erhalte +1, um etwas zu heben, zu tragen oder zu zerbrechen."]},
 "Ein Manöver ist eine besondere Fähigkeit, die du normalerweise nur einmal pro Sitzung nutzen kannst. Willst du ein Manöver erneut nutzen, den du in dieser Sitzung schon eingesetzt hast, kannst du ein Ass einer passenden Farbe spielen. Ein Beispiel:",
 {t: "box", h: "Fast Reload", b: ["Lade eine Fernkampfwaffe oder Feuerwaffe nach."]},
 "Eine vollständige Liste der Merkmale und Manöver findest du in Abschnitt III „Berufe“.",

 {t: "h", x: "Ausrüstung & Wohlstand"},
 "Große Besteckteile und Duellnadeln, Enterhaken mit Seil, Kleidung aus kostbarer Spinnenseide und Tapeten-Tarnumhänge: Auf deinem Abenteuer kannst du nützliche Gegenstände finden, die dir Vorteile bieten und dich für fast alles rüsten. In diesem Teil deines Bogens kannst du deine Ausrüstung, deinen Wohlstand und die dir zur Verfügung stehenden Münzen notieren.",
 "In der Regel beginnst du das Spiel als Middle Class mit 5 Münzen, die du auch ausgeben kannst, um deine Startausrüstung zu kaufen. Eine schöne Liste von Gegenständen sowie alles, was du über Wohlstand wissen musst und wie du eine Figur erschaffst, die arm, wohlhabend oder reich beginnt, findest du in Abschnitt VI „Ausrüstung & Wohlstand“.",

 {t: "h", x: "Stress & Zustände"},
 "Stress ist ein Maß für deinen aktuellen körperlichen und seelischen Zustand. Er steht für all die kleinen Wunden, die Erschöpfung, die Anspannung und die Angst, die du auf deinem Abenteuer ansammeln kannst. Du kannst höchstens 12 Stress haben. Überschreitest du diese Grenze, wirst du Überlastet und riskierst sogar, Aussteigen zu müssen.",
 "Zustände stehen dagegen für schwere Verletzungen, brennende Demütigungen, Krankheiten und andere bemerkenswerte Verfassungen. Hast du zu viele Zustände, wirst du Gebrochen und kannst nicht mehr allen angesammelten Stress abbauen. Du beginnst das Spiel ohne Stress und ohne Zustände. Zusätzliche Informationen, wie du Stress und Zustände erleiden oder entfernen kannst, findest du in den eigenen Abschnitten in Abschnitt IIII „Wie man spielt“.",

 {t: "h", x: "Anstand"},
 "Anstand ist ein Maß für deine Eleganz und Körperpflege. Ein höheres Anstand macht es leichter, das Wohlwollen von Adligen und der sogenannten feinen Gesellschaft zu gewinnen. Ein niedrigeres Anstand hilft, in zwielichtigen Kreisen und in der Unterwelt ernst genommen zu werden.",
 "Dein Start-Anstand ergibt sich aus der Summe deiner Punkte in Gesellschaft plus Wissenschaft. Hast du 2 Punkte, bist du Schäbig, hast du 3 Punkte, bist du Ordentlich. Hast du schließlich 4 Punkte, kannst du sogar Elegant sein, sofern du auch elegante Kleidung hast. Vor Kapitel I kannst du außerdem 1 Münze zahlen, um dein Anstand um eine Stufe zu erhöhen. Alternativ kannst du dein Anstand um eine Stufe senken und dafür 1 Münze erhalten. Alles, was du über Anstand wissen musst, findest du gegen Ende von Abschnitt IIII „Wie man spielt“.",

 {t: "h", x: "Verträge"},
 "Wählst du dein Heimatvolk, erhältst du sofort einen Erbvertrag. Das ist eine außergewöhnliche, fast übernatürliche Kraft, die aus einem uralten Handel stammt, den deine Vorfahren mit einer der Household Forces geschlossen haben. Die Erbverträge sind:",
 {t: "ul", x: [
  "**Fairy:** Starchild",
  "**Boggart:** Dear to the Hearth",
  "**Salamander:** Out of the Spark",
  "**Sylph:** Out of the Draft",
  "**Undine:** Out of the Drain",
  "**Sluagh:** Revenant from Farbeyond"]},
 "Eine ausführliche Beschreibung der Verträge und ihrer geheimnisvollen Kräfte findest du in Abschnitt V „Verträge“.",

 {t: "h", x: "Prolog"},
 "Der Prolog einer Figur ist eine kurze Zusammenfassung der wichtigsten Ereignisse ihres Lebens vor Beginn der Geschichte. Ein Beispiel:",
 {t: "box", h: "Santiagos Prolog", b: ["Santiago wurde im Basement geboren und war der uneheliche Sohn eines berühmten Duellanten der Horde. Nachdem das Erbe seiner Familie von der Great Imperial Army beschlagnahmt wurde, beschloss er, sich auf eine Reise zu begeben, um sich einen Ruf und ein Vermögen zu erwerben, die seines Vaters würdig wären."]},
 "Du musst den Prolog nicht auf dem Bogen niederschreiben, aber er hilft dir, deine erste Memory zu bestimmen.",

 {t: "h", x: "Experiences & Memories"},
 "Immer wenn im Lauf deiner Geschichte etwas wirklich Wichtiges geschieht, kannst du es im Bereich „Experiences“ deines Bogens notieren. Dein Ruf, deine großen Leistungen, die körperlichen und im übertragenen Sinn zugefügten Narben und die Bindungen, die du knüpfst: All das wird zu Experience, die sich als hilfreich oder hinderlich erweisen kann. Du beginnst das Spiel ohne Experiences, aber mit einer wichtigen Memory aus deinem Prolog.",
 "Eine Memory ist eine Experience, die in deiner Figur Wurzeln geschlagen hat. Sie ist einer der erzählerischen Bausteine ihrer Geschichte. Schreibe, ausgehend von deinem Prolog, einen kurzen Satz, der einen entscheidenden Moment im Leben deiner Figur zusammenfasst. Im Lauf der Geschichte, wenn du von einem Kapitel zum nächsten gehst, sammelst du neue Memories, die dich ihrerseits auf deinen Abenteuern begleiten.",
 {t: "box", h: "Santiagos Prolog-Memory", b: ["Ich bin der Sohn des großen Don Ramiro."]},
 "Hier einige Beispiele für Prolog-Memories:",
 {t: "ul", x: [
  "Auf Earnest kann ich mich immer verlassen.",
  "Ich bin ein angesehener Universitätsprofessor.",
  "Ich habe auf einer Bumblebee-Farm gearbeitet.",
  "Mein Herz wurde gebrochen.",
  "Ich bin unsterblich in Yuliya verliebt.",
  "Ich habe im Household War gekämpft.",
  "Ich habe für eine Verbrecherbande gearbeitet.",
  "Ich vertraue niemandem.",
  "Ich habe einem reichen Adligen das Leben gerettet.",
  "Mein letzter gelöster Fall steht in den Zeitungen."]},
 "Mehr zu Experiences und Memories und dazu, wie sie auf deinen Abenteuern ins Spiel kommen, findest du direkt im eigenen Abschnitt in Abschnitt VIII „Saga“.",
 {t: "box", h: "Der erweiterte Charakterbogen", b: ["Am Ende dieses Bandes findest du außerdem einen erweiterten Charakterbogen auf zwei Seiten. Er sieht ein wenig aus wie die Reisedokumente, die Littlings mit sich führen, und sollte wie ein vornehmer Pass in der Mitte gefaltet werden. Der erweiterte Bogen ist aber viel geräumiger und erlaubt dir, nicht nur den Prolog festzuhalten, sondern auch alle Kapitel, die du spielst, sowie alle bezaubernden Littlings, denen du unterwegs begegnest."]},

 {t: "h", x: "Sprachen"},
 "Im House werden 5 Sprachen gesprochen, jede von den anderen verschieden:",
 {t: "ul", x: [
  "**Housian:** die Lingua franca des House, in jedem Room gesprochen.",
  "**Fae:** die Sprache des Realm.",
  "**Hearthish:** die Sprache des Hearth.",
  "**Sprigaelic:** die Sprache der Free Dominions.",
  "**Slugan:** die Sprache der Horde."]},
 "Deine Figur kennt mindestens 2 dieser Sprachen: Housian und die Sprache ihrer Heimatnation. Hast du 2 Punkte in Wissenschaft, erhältst du außerdem eine dritte Sprache deiner Wahl. Um eine Sprache zu verstehen, die du nicht kennst, musst du einen passenden Wurf auf Kultur ablegen. Auf deinen Abenteuern kannst du auch neue Sprachen lernen, indem du das Merkmal Polyglot wählst."
]}
);
})();
