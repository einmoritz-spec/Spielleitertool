/* Regeln › Charakter (Grundbuch S. 41–47): Der Charakterbogen. Deutsche Übersetzung. Das Balladengedicht S. 48 ist nicht übernommen. */
(function(){
var K = "haus/regeln/charakter", L = (HH_TEXT[K] = HH_TEXT[K] || []);
L.push(
{id: "bogen", t: "Der Charakterbogen", p: 42, b: [
 "Ich kenne dich eigentlich nicht, aber wenn du es bis hierher geschafft hast, wissen wir wenigstens, dass wir etwas gemeinsam haben: den Wunsch, eine Geschichte zu erzählen. Besser noch: Geschichte zu erzählen! In diesem Buch habe ich das Leben und die Taten vieler Figuren zusammengetragen, die unglaubliche Abenteuer erlebt haben. Aber wer weiß, wie viele ich ausgelassen habe. Hier kommst du ins Spiel.",
 "Kennst du, persönlich oder vom Hörensagen, einen Littling, dessen Taten es verdienen, in Erinnerung zu bleiben, kannst du ihn zu deiner Figur machen. Gemeinsam mit der Spielleitung und den anderen Spieler:innen ist es dann deine Aufgabe, sein Leben nachzuerleben und seine Geschichte nachzuerzählen, Kapitel für Kapitel.",
 {t: "h", x: "Der Charakterbogen"},
 "Der Charakterbogen auf der nächsten Seite ist ein historisches Dokument von höchster Bedeutung, ein Weg, alles festzuhalten, was du über deine Figur weißt. Ihr Name, ihr Volk, ihre Herkunftsnation und ihr Beruf. All das findet auf diesem Bogen Platz, ebenso ihre Skills, Traits, Contracts und andere wertvolle Informationen.",
 "Da ein Bild mehr sagt als tausend Worte, findest du auf dem Bogen auch einen großen Rahmen, in dem du ein schönes Porträt deiner Figur anfertigen kannst. Es muss kein großes Meisterwerk sein. Du musst nur dein Bestes geben und dem Littling gerecht werden, den du darstellst. So geht er in die Geschichte ein!",
 "Wenn du möchtest, kannst du den Bogen auch von jemand anderem illustrieren lassen, aber ich möchte zur Vorsicht raten. Ich habe es bei diesem Band selbst so gehalten und mich an Mr. Bilibinski gewandt, der trotz seines großen Talents als Künstler oft Freiheiten bei den historischen Tatsachen zu nehmen scheint. Er malt mich oft mit rundem Bauch, was, ehrlich gesagt, einfach übertrieben ist!",
 "Um den Bogen deiner Figur auszufüllen, musst du jedenfalls nur diese einfachen Schritte befolgen:",
 {t: "ul", x: [
  "Wähle einen Namen.",
  "Wähle ein Volk.",
  "Notiere deinen Hereditary Contract.",
  "Wähle eine Herkunftsnation.",
  "Wähle einen Beruf und eine Berufung.",
  "Notiere deine Field- und Skill-Punkte.",
  "Verteile 4 Skill-Punkte nach Belieben.",
  "Wähle deine Traits und Moves.",
  "Notiere die Aces up your Sleeve.",
  "Notiere deinen Wealth und deine Ausrüstung.",
  "Notiere dein Decorum.",
  "Schreibe deinen Prolog.",
  "Wähle eine Memory.",
  "Wähle, welche Sprachen du kennst."]},

 {t: "h", x: "Volk & Nation"},
 "Wähle zuerst das Volk, zu dem deine Figur gehört, aus dieser Liste:",
 {t: "ul", x: ["Faeries", "Boggart", "Sprites", "Sluagh"]},
 "Ist deine Figur ein Sprite, wähle auch die Elementargruppe, der sie angehört: Salamander, Sylph oder Undine. Je nach Volk erhältst du Zugang zu einem einzigartigen Hereditary Contract.",
 "Die Herkunftsnation deiner Figur legt fest, wo sie geboren wurde oder ihre Kindheit verbracht hat oder wohin sie gezogen ist. Die Nationen des House sind:",
 {t: "ul", x: [
  "**Der Realm:** in der Dining Hall",
  "**Der Hearth:** im Living Room",
  "**Die Free Dominions:** im Upper Floor",
  "**Die Horde:** im Basement"]},

 {t: "h", x: "Beruf & Berufung"},
 "Wähle den Beruf deiner Figur unter diesen:",
 {t: "ul", x: ["Soldier", "Scholar", "Hunter", "Criminal", "Duelist", "Animal Handler"]},
 "Der Beruf eines Littlings sagt uns vieles über sein Leben und seine Spezialgebiete, sodass er vielleicht die wichtigste Entscheidung ist, die du triffst. Zunächst verleiht dir dein Beruf einen völlig einzigartigen berufsspezifischen Trait. Etwa den Trait Animal Companion des Animal Handlers, der dir einen treuen pelzigen, schuppigen oder chitingepanzerten Freund gibt. Außerdem gibt dir dein Beruf Zugang zu einem Move deiner Wahl aus einer Liste.",
 "Hast du einen Beruf gewählt, wählst du als Nächstes eine seiner 6 Berufungen. Bist du zum Beispiel Soldier, kannst du aus der Liste der Berufungen Gendarme oder Scissor for Hire wählen. Bist du dagegen Scholar, kannst du Diplomat oder Detective wählen. Und so weiter. Deine Berufung gibt dir außerdem Zugang zu einem zusätzlichen Trait, den du aus einer Liste wählst. Vor allem aber bestimmen Beruf und Berufung deine Punkte in jedem Field und Skill.",

 {t: "h", x: "Skills & Fields"},
 "Auf deinen Abenteuern kannst du dich auf 20 Skills verlassen, die das Können deiner Figur in verschiedenen Dingen darstellen. Diese Skills sind in 4 Fields gegliedert, die den Zusammenhang darstellen, in dem sie am häufigsten ins Spiel kommen. In der Tabelle zu jedem Beruf und jeder Berufung findest du eine Liste mit einem Field und 10 Skills, in denen du einen Punkt erhältst, insgesamt also 2 Field-Punkte und 20 Skill-Punkte. Nachdem du diese Punkte notiert hast, kannst du außerdem 4 zusätzliche Punkte nach Belieben auf deine Skills verteilen. Bedenke, dass du an diesem Punkt nicht mehr als 3 Punkte im selben Skill haben darfst.",
 "Stellst du dich einer Herausforderung, würfelst du so viele Würfel, wie die Summe deiner Punkte im verwendeten Skill und Field ergibt. Mehr zu Fields und Skills und wie man sie benutzt, findest du in Abschnitt IIII „Wie man spielt“.",
 {t: "karten", x: [
  {t: "box", h: "War", b: ["Du bist im Field War, wenn du dich auf deine Muskeln verlassen musst, wenn du kämpfst oder dich anderen gegenüber durchsetzen willst.", "**Athletics:** rennen, springen, klettern, schwimmen oder reiten.", "**Authority:** befehlen, inspirieren, einschüchtern.", "**Fight:** im Nahkampf kämpfen, an einer Rangelei teilnehmen.", "**Strength:** schieben, ziehen, heben oder etwas zerbrechen.", "**Will:** Stress oder körperlichen Schmerz aushalten, Versuchungen widerstehen."]},
  {t: "box", h: "Street", b: ["Du bist im Field Street, wenn du verstohlen handeln oder einer feindlichen Umgebung begegnen willst, etwa dem zwielichtigsten Viertel einer Stadt oder einem undurchdringlichen Pilzwald.", "**Caution:** wachsam sein, Gefahren vorhersehen oder meiden.", "**Dexterity:** Fingerfertigkeit, Schlösser knacken, Taschendiebstahl.", "**Elusion:** sich verstohlen bewegen, verstecken, ausweichen, entkommen.", "**Exploration:** durch wilde Landstriche ziehen, sich orientieren, die Natur kennen.", "**Shoot:** Fernkampf- oder Wurfwaffen benutzen."]},
  {t: "box", h: "Society", b: ["Du bist im Field Society, wenn du mit anderen sprichst, um sie zu überzeugen, zu manipulieren oder zu täuschen.", "**Art:** auftreten, Kunst schaffen oder beurteilen.", "**Charm:** jemanden verführen oder einen guten Eindruck machen.", "**Eloquence:** sprechen, überzeugen oder täuschen.", "**Etiquette:** gute Manieren kennen und zeigen, mit der feinen Gesellschaft umgehen.", "**Grace:** sich anmutig bewegen oder handeln, balancieren oder akrobatische Kunststücke vollführen."]},
  {t: "box", h: "Academia", b: ["Du bist im Field Academia, wenn du dich auf praktisches oder theoretisches Wissen verlässt, das du durch Studium oder Erfahrung erworben hast.", "**Care:** sich um verletzte, kranke oder schockierte Littlings kümmern.", "**Craft:** etwas bauen, benutzen oder reparieren.", "**Culture:** Allgemeinwissen und Bildungsstand.", "**Insight:** die Lage verstehen, in der du dich befindest, oder Lügen erkennen.", "**Investigation:** Hinweise oder versteckte Gegenstände finden, einen Ort durchsuchen, Informationen sammeln."]}]},

 {t: "h", x: "Aces up your Sleeve"},
 "Aces sind wertvolle Ressourcen, die du ausspielen kannst, um große Vorteile zu erhalten. Es gibt vier Aces, einen für jede Kartenfarbe, dazu einen Joker. Du kannst einen Ace spielen, um vor einem Wurf einen zusätzlichen Würfel zu erhalten, um einen Zustand von deiner Figur zu entfernen, um einen Move erneut zu nutzen und sogar, um zu versuchen, einen Misserfolg ins Gegenteil zu verkehren. Mehr zu Aces, wie man sie am besten einsetzt und wie man sie verdient, findest du in einem eigenen Abschnitt in Abschnitt IIII „Wie man spielt“. Du beginnst das Spiel mit 2 Aces in den Farben, die zu den Haupt-Fields deiner Figur gehören (also den Fields, in denen du 2 Punkte hast).",

 {t: "h", x: "Traits und Moves"},
 "Traits und Moves sind besondere Talente und Fähigkeiten, auf die du dich auf deinen Abenteuern verlassen kannst. Ein Trait kann dir in bestimmten Situationen einen zusätzlichen Würfel (+1) oder einen Free Re-roll geben. Er kann dir auch Zugang zu exklusiven Informationen verschaffen. Ein Beispiel:",
 {t: "box", h: "Big and Strong", b: ["Erhalte +1, um etwas zu heben, zu tragen oder zu zerbrechen."]},
 "Ein Move ist eine besondere Fähigkeit, die du normalerweise nur einmal pro Sitzung nutzen kannst. Willst du einen Move erneut nutzen, den du in dieser Sitzung schon eingesetzt hast, kannst du einen Ace einer passenden Farbe spielen. Ein Beispiel:",
 {t: "box", h: "Fast Reload", b: ["Lade eine Fernkampfwaffe oder Feuerwaffe nach."]},
 "Eine vollständige Liste der Traits und Moves findest du in Abschnitt III „Berufe“.",

 {t: "h", x: "Ausrüstung & Wealth"},
 "Große Besteckteile und Duellnadeln, Enterhaken mit Seil, Kleidung aus kostbarer Spinnenseide und Tapeten-Tarnumhänge: Auf deinem Abenteuer kannst du nützliche Gegenstände finden, die dir Vorteile bieten und dich für fast alles rüsten. In diesem Teil deines Bogens kannst du deine Ausrüstung, deinen Wealth und die dir zur Verfügung stehenden Coins notieren.",
 "In der Regel beginnst du das Spiel als Middle Class mit 5 Coins, die du auch ausgeben kannst, um deine Startausrüstung zu kaufen. Eine schöne Liste von Gegenständen sowie alles, was du über Wealth wissen musst und wie du eine Figur erschaffst, die arm, wohlhabend oder reich beginnt, findest du in Abschnitt VI „Ausrüstung & Wealth“.",

 {t: "h", x: "Stress & Zustände"},
 "Stress ist ein Maß für deinen aktuellen körperlichen und seelischen Zustand. Er steht für all die kleinen Wunden, die Erschöpfung, die Anspannung und die Angst, die du auf deinem Abenteuer ansammeln kannst. Du kannst höchstens 12 Stress haben. Überschreitest du diese Grenze, wirst du Überlastet und riskierst sogar, Bow Out zu müssen.",
 "Zustände stehen dagegen für schwere Verletzungen, brennende Demütigungen, Krankheiten und andere bemerkenswerte Verfassungen. Hast du zu viele Zustände, wirst du Gebrochen und kannst nicht mehr allen angesammelten Stress abbauen. Du beginnst das Spiel ohne Stress und ohne Zustände. Zusätzliche Informationen, wie du Stress und Zustände erleiden oder entfernen kannst, findest du in den eigenen Abschnitten in Abschnitt IIII „Wie man spielt“.",

 {t: "h", x: "Decorum"},
 "Decorum ist ein Maß für deine Eleganz und Körperpflege. Ein höheres Decorum macht es leichter, das Wohlwollen von Adligen und der sogenannten feinen Gesellschaft zu gewinnen. Ein niedrigeres Decorum hilft, in zwielichtigen Kreisen und in der Unterwelt ernst genommen zu werden.",
 "Dein Start-Decorum ergibt sich aus der Summe deiner Punkte in Society plus Academia. Hast du 2 Punkte, bist du Schäbig, hast du 3 Punkte, bist du Ordentlich. Hast du schließlich 4 Punkte, kannst du sogar Elegant sein, sofern du auch elegante Kleidung hast. Vor Kapitel I kannst du außerdem 1 Coin zahlen, um dein Decorum um eine Stufe zu erhöhen. Alternativ kannst du dein Decorum um eine Stufe senken und dafür 1 Coin erhalten. Alles, was du über Decorum wissen musst, findest du gegen Ende von Abschnitt IIII „Wie man spielt“.",

 {t: "h", x: "Contracts"},
 "Wählst du dein Heimatvolk, erhältst du sofort einen Hereditary Contract. Das ist eine außergewöhnliche, fast übernatürliche Kraft, die aus einem uralten Handel stammt, den deine Vorfahren mit einer der Household Forces geschlossen haben. Die Hereditary Contracts sind:",
 {t: "ul", x: [
  "**Fairy:** Starchild",
  "**Boggart:** Dear to the Hearth",
  "**Salamander:** Out of the Spark",
  "**Sylph:** Out of the Draft",
  "**Undine:** Out of the Drain",
  "**Sluagh:** Revenant from Farbeyond"]},
 "Eine ausführliche Beschreibung der Contracts und ihrer geheimnisvollen Kräfte findest du in Abschnitt V „Contracts“.",

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
 "Deine Figur kennt mindestens 2 dieser Sprachen: Housian und die Sprache ihrer Heimatnation. Hast du 2 Punkte in Academia, erhältst du außerdem eine dritte Sprache deiner Wahl. Um eine Sprache zu verstehen, die du nicht kennst, musst du einen passenden Wurf auf Culture ablegen. Auf deinen Abenteuern kannst du auch neue Sprachen lernen, indem du den Trait Polyglot wählst."
]}
);
})();
