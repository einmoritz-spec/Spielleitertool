/* Spielleitung › Gegner, Teil A: Übersicht, Regeln, Eigenschaften, Schwachstellen, Von Spinnen (Grundbuch Anhang I, S.276–281, 304) */
(function(){
var H = window.HH_TEXT = window.HH_TEXT || {};
function bild(n, w){ return {t: "bild", s: "grundbuch-" + n, w: w}; }
function K(h, b){ return {t: "box", h: h, b: b}; }
var A = [];

A.push({id: "uebersicht", t: "Gegner", p: 276, b: [
  bild("s277-anhang-i-einleitung", 260),
  "In diesem Anhang stehen die Gegner, denen du bei deinen Abenteuern im House begegnest, von den kleinen, lästigen Schaben bis zur riesigen Jagdspinne, dazu Gendarmen, Ohrwürmer, Soldaten, Hornissen und tollwütige Ratten. Jeder von ihnen kommt mit zusätzlichen Informationen und Tipps für die Spielleitung.",
  {t: "h", x: "Littlings", p: 283},
  {t: "kacheln", x: [
    {n: "Hooligans", id: "g-hooligans", typ: "basic", lv: 1},
    {n: "Gendarmen", id: "g-gendarmen", typ: "basic", lv: 1},
    {n: "Duellanten", id: "g-duellanten", typ: "critical", lv: 2},
    {n: "Späher", id: "g-spaeher", typ: "critical", lv: 2},
    {n: "Soldaten", id: "g-soldaten", typ: "critical", lv: 2, s: "grundbuch-s287-anhang-i-opponents"},
    {n: "Kürassiere", id: "g-kuerassiere", typ: "critical", lv: 3},
    {n: "Ehrengarde", id: "g-ehrengarde", typ: "critical", lv: 4},
    {n: "Meisterduellanten", id: "g-meisterduellanten", typ: "critical", lv: 4},
    {n: "Golden Backs", id: "g-goldenbacks", typ: "critical", lv: 5, s: "grundbuch-s295-anhang-i-opponents"},
    {n: "Janitscharen", id: "g-janitscharen", typ: "critical", lv: 5, s: "grundbuch-s296-anhang-i-opponents"},
    {n: "Cinder Knights", id: "g-cinder", typ: "critical", lv: 5},
    {n: "Porcelain-Infanterie", id: "g-porzellan", typ: "critical", lv: 5}]},
  {t: "h", x: "Tiere", p: 282},
  {t: "kacheln", x: [
    {n: "Schaben", id: "g-schaben", typ: "basic", lv: 1, s: "grundbuch-s282-anhang-i-opponents"},
    {n: "Wespen", id: "g-wespen", typ: "basic", lv: 1, s: "grundbuch-s284-285-anhang-i-opponents-ganz"},
    {n: "Ohrwürmer", id: "g-ohrwuermer", typ: "basic", lv: 1},
    {n: "Hundertfüßer", id: "g-hundertfuesser", typ: "critical", lv: 2},
    {n: "Gemeine Spinne", id: "g-spinne", typ: "critical", lv: 2, s: "grundbuch-s288-anhang-i-opponents"},
    {n: "Hornissen", id: "g-hornissen", typ: "critical", lv: 3},
    {n: "Käfer", id: "g-kaefer", typ: "critical", lv: 3},
    {n: "Eidechse", id: "g-eidechse", typ: "critical", lv: 3},
    {n: "Ratte", id: "g-ratte", typ: "critical", lv: 3},
    {n: "Große Spinne", id: "g-grossespinne", typ: "critical", lv: 4, s: "grundbuch-s292-anhang-i-opponents"},
    {n: "Sporn-Hundertfüßer", id: "g-sporn", typ: "critical", lv: 4, s: "grundbuch-s294-anhang-i-opponents"},
    {n: "Goldseiden-Radnetzspinne", id: "g-orbweaver", typ: "critical", lv: 5, s: "grundbuch-s298-anhang-i-opponents"},
    {n: "Netzwerferspinne", id: "g-netzwerfer", typ: "critical", lv: 5, s: "grundbuch-s299-anhang-i-opponents"},
    {n: "Riesenhundertfüßer", id: "g-riesenhf-schwanz", typ: "critical", lv: 5, s: "grundbuch-s300-301-anhang-i-opponents-ganz"},
    {n: "Jagdspinne", id: "g-jagdspinne-beine", typ: "critical", lv: 5, s: "grundbuch-s302-anhang-i-opponents"}]}
]});

A.push({id: "regeln", t: "Regeln für Gegner", p: 276, b: [
  {t: "h", x: "Littlings und Tiere", p: 276},
  "Gegner, die Littlings sind, können sich auf ihre Erbverträge stützen, wie beim Trait Littling erklärt. Gegner, die Tiere sind, können dagegen Large, Huge oder Giant sein. Denk daran, dass manche Moves nur gegen bestimmte Arten von Gegnern eingesetzt werden können. Viele Moves der Duellanten haben zum Beispiel keine Wirkung auf Tiere, es sei denn, der Duellant benutzt einen Ratador-Umhang.",
  {t: "h", x: "Double Trouble, Triple Threat", p: 276},
  "Manche Gegner verfügen über die Traits Double Trouble oder Triple Threat, die für äußerst heftige Kämpfe sorgen. Wenn du dich gegen einen Gegner mit Double Trouble oder Triple Threat verteidigst, haben deine Reaktionswürfe mehrfache Schwierigkeiten in Höhe des Doppelten oder Dreifachen der Schwierigkeit des Gegners.",
  "Wenn du zum Beispiel einem einfachen Gegner mit Triple Threat gegenüberstehst, brauchst du in den Reaktionszügen 3 einfache Erfolge, um dich zu verteidigen. Erzielst du weniger als 3 einfache Erfolge, ist der Wurf misslungen, aber du kannst alle gewürfelten Erfolge weiterhin für die Schadensbegrenzung nutzen. Bedenke, dass diese Traits die Schwierigkeit deiner Aktionswürfe nicht ändern, sondern nur Reaktionswürfe beeinflussen.",
  {t: "h", x: "Gegner anpassen", p: 276},
  "Viele Gegner haben Optionale Traits, die die Spielleitung verwenden kann, um den Gegner noch wilder zu machen oder das Spielerlebnis anzupassen. Die Zahl der Optionalen Traits eines Gegners ist nicht begrenzt. Double Trouble und Triple Threat können besonders nützlich sein, wenn die Spielleitung die Bedrohung eines Gegners erhöhen und den Kampf in späteren Kapiteln herausfordernd halten will.",
  {t: "h", x: "Gefahrenstufe", p: 277},
  "Jeder Gegner hat eine Gefahrenstufe, dargestellt durch eine Reihe kleiner Spinnen neben seinem Namen. Sie reicht von 1 bis 5, je nachdem, wie gefährlich er ist. Gegner der Stufe 1 sind sehr leicht zu bekämpfen und sollten selbst weniger vorbereitete Figuren nicht zu sehr fordern. Gegner der Stufen 2, 3 und 4 sind zunehmend gefährlich und fordern euch dank ihrer Optionalen Traits die gesamte Saga hindurch. Gegner der höchsten Stufe sind eher einzigartig als selten. Es sind Littlings, die durch viele Schlachten gehärtet wurden, oder gewaltige Bestien direkt aus Legenden. Sie stellen immer eine große Herausforderung dar, selbst für die tapfersten und bestvorbereiteten Gruppen.",
  "Die Gefahrenstufe kann der Spielleitung sehr helfen, das Spielerlebnis auszubalancieren. Als Faustregel gilt: In Kapitel I sollten die Figuren Gegnern der Stufe 1 oder 2 begegnen, in Kapitel II Gegnern der Stufe 2 oder 3 und so weiter. Natürlich berücksichtigt die Gefahrenstufe die Optionalen Traits eines Gegners nicht, überlege also gut, wann du sie einsetzt.",
  {t: "h", x: "Aktionen der Gegner", p: 277},
  "Jeder Gegner kommt mit einer Liste von 6 Aktionen, die er in seinen Zügen ausführen kann. Die Spielleitung darf jede Aktion der Liste frei wählen, kann sich aber auch auf den Wurf eines unparteiischen Zahlenwürfels verlassen, um das Verhalten des Gegners zufällig zu bestimmen. Wenn sie eine bestimmte Situation beschreiben oder eine Kampfszene weiter zuschneiden will, kann sie sich auch ganz neue Aktionen ausdenken. Normalerweise legen alle Spieler:innen denselben Reaktionswurf ab, um sich gegen den Angriff des Gegners zu verteidigen. So bleibt die Kampfszene einfach und fließend. In außergewöhnlich denkwürdigen Situationen kann die Spielleitung aber entscheiden, dass jede Figur von einem anderen Angriff getroffen wird, und jede:n Spieler:in bitten, den Reaktionswurf mit einer anderen Fertigkeit abzulegen."
]});

A.push({id: "traits", t: "Eigenschaften der Gegner", p: 278, b: [
  {t: "karten", cls: "oben", x: [
    K("Armed", ["Unbewaffnete Figuren erhalten −1 auf alle Aktions- und Reaktionswürfe gegen einen bewaffneten Gegner."]),
    K("Armored", ["Der Gegner trägt schwere Rüstung. Figuren, die mit etwas anderem als einer Feuerwaffe, einer spitzen Waffe oder einer Fernkampfwaffe angreifen, erhalten −1 auf ihre Aktionswürfe."]),
    K("Barrage", ["Der Gegner hat zwei abwechselnde Schützenlinien: Während die erste Linie schießt, lädt die andere nach. Figuren erleiden beim Angriff mit Nahkampfwaffen stets 1 Stress.", "Figuren mit Schild oder breiter Waffe dürfen diesen Trait ignorieren."]),
    K("Beast", ["Der Gegner ist ein Tier oder eine Gruppe von Tieren."]),
    K("Cobweb", ["Der Gegner schießt Spinnweben mit großer Geschwindigkeit. In ihrem Reaktionszug müssen Figuren außerhalb des Kampfes Reaktionswürfe mit Elusion + War ablegen. Misslingen sie, werden sie in klebrigen Spinnweben gefangen, die jede ihrer Bewegungen behindern.", "In ihrem Zug können sich Figuren mit einem kritischen Aktionswurf auf Strength + War aus den Spinnweben befreien. Solange sie gefangen sind, misslingen ihnen alle Reaktionswürfe, ohne dass gewürfelt wird.", "Figuren mit einer geschärften Waffe können ihre Aktion nutzen, um einen Freund ohne Wurf zu befreien. Boggarts, die zum Juggernaut werden, brechen sofort aus den Spinnweben aus, ohne eine Aktion zu verbrauchen."]),
    K("Counter-attack", ["Figuren, denen ihr Wurf zum Angriff auf den Gegner misslingt, erleiden sofort 1 Stress."]),
    K("Crawling", ["Figuren, die den Kampf verlassen wollen, erhalten −1 auf ihren Wurf, es sei denn, sie haben eine geschärfte Waffe."]),
    K("Double Trouble", ["Die Schwierigkeit von Reaktionswürfen gegen den Gegner ist doppelt so hoch wie die Schwierigkeit des Gegners.", "Wenn du etwa einem kritischen Gegner mit dem Trait Double Trouble gegenüberstehst, haben alle Reaktionswürfe gegen ihn die Schwierigkeitsstufe 2 Kritisch."]),
    K("Filthy", ["Der Gegner ist ekelhaft dreckig und trägt allerlei Krankheiten. Figuren, denen in ihrem Reaktionszug nicht mindestens ein einfacher Erfolg gelingt, erleiden sofort den Zustand Krank."]),
    K("Flying", ["Der Gegner kann fliegen. Er kann daher nur von Feuerwaffen, Wurf- oder Fernkampfwaffen, von Nahkampfwaffen mit dem Trait Reach oder von fliegenden Faeries getroffen werden."]),
    K("Giant", ["Der Gegner ist ein gigantisches Tier, so hoch wie zehn Littlings. Giant-Gegner erhalten alle Vorteile der Traits Huge und Heavily Armored.", "Außerdem sind sie so groß, dass sie 2 Gegnerbögen brauchen und in ebenso vielen Phasen bekämpft werden müssen. Nach dem Besiegen eines Teils geht es mit dem nächsten weiter."]),
    K("Golden Cobweb", ["Siehe Cobweb. Spinnweben, die von Goldseiden-Radnetzspinnen gesponnen wurden, sind extrem widerstandsfähig. Wer sich daraus befreien will, erhält −1. Außerdem können gefangene Boggarts nicht zum Juggernaut werden."]),
    K("Hard to Kill", ["Erreicht der Gegner ein Crucial Box, löst er seinen Move wie üblich aus, erleidet aber keinen zusätzlichen Stress durch den Angriff.", "Soll der Gegner zum Beispiel 3 Stress durch den Angriff einer Figur erleiden, füllt die Spielleitung nur die Stresskästchen bis zum Crucial Box und ignoriert allen weiteren Stress."]),
    K("Hardened Shell", ["Der Gegner ist durch natürliche Panzerung geschützt. Figuren, die mit etwas anderem als einer Feuerwaffe, einer schweren Waffe oder einer Fernkampfwaffe angreifen, erhalten −1 auf ihre Aktionswürfe."]),
    K("Heavily Armored", ["Der Gegner trägt eine einzigartige schwere Rüstung, etwa einen Porzellanküraß oder eine Cinder-Rüstung. Er kann nie mehr als 1 Stress pro Angriff erleiden.", "Zur Klarheit: Figuren, die einen unmöglichen Erfolg gegen einen Heavily-Armored-Gegner erzielen, richten nur 1 Stress an."]),
    K("Huge", ["Der Gegner ist entweder ein Tier, das doppelt so groß ist wie ein Littling, oder eine kleine Gruppe von Tieren, die größer sind als ein Littling. Alle Huge-Gegner haben die Traits Hard to Kill und Armed. Figuren außerhalb des Kampfes können Huge-Tiere ohne Erschwernis durch ihre Gefährten im Nahkampf beschießen.", "Figuren erhalten −1 auf alle Würfe, um den Kampf gegen einen Huge-Gegner zu verlassen. Außerdem erhalten sie −1 auf alle Würfe, um vor einem Huge-Gegner wegzulaufen, es sei denn, sie haben ein Reittier."]),
    K("Large", ["Der Gegner ist entweder ein einzelnes Tier, das größer ist als ein Littling, oder eine kleine Gruppe von Tieren, die so groß sind wie ein Littling. Alle Large-Gegner haben die Traits Hard to Kill und Armed."]),
    K("Littling", ["Der Gegner ist ein Littling oder eine Gruppe von Littlings. Die Spielleitung kann diese Gegner anpassen, indem sie ihnen je nach Folk zusätzliche Traits gibt.", "Fairy-Gegner können fliegen, als hätten sie den Trait Flying. Figuren, die auf fliegende Faeries schießen, erhalten stets +1 auf ihren Wurf.", "Boggart-Gegner können zum Juggernaut werden, wenn sie ihr letztes Crucial Box erreichen. Dabei erhalten sie sofort die Traits Large und Hardened Shell.", "Sluagh- und Undine-Gegner können einen einzigen erfolgreichen Angriff ignorieren."]),
    K("Nimble", ["Die Bewegungen des Gegners sind außergewöhnlich schnell und flink. Figuren, die mit zweihändigen Waffen, Feuerwaffen, Fernkampf- oder Wurfwaffen angreifen, erhalten −1 auf ihre Aktionswürfe."]),
    K("Rust", ["Janitscharen schließen einen Vertrag mit Rust. Ihre Waffen und sogar ihre Körper sind von rosigem Rost überzogen, der sie mehr als giftig macht. Figuren, denen in ihrem Reaktionszug nicht mindestens ein einfacher Erfolg gelingt, erleiden sofort die Zustände Vergiftet und Krank."]),
    K("Shield", ["Der Gegner hat einen Knopf, eine Münze oder einen natürlichen Schild. Figuren, die mit Feuerwaffen, Fernkampf- oder Wurfwaffen angreifen, erhalten −1 auf ihre Aktionswürfe."]),
    K("Shooters", ["Der Gegner hat einen oder mehrere Schützen. In ihrem Reaktionszug müssen Figuren außerhalb des Kampfes Reaktionswürfe mit Elusion + War ablegen."]),
    K("Triple Threat", ["Die Schwierigkeit von Reaktionswürfen gegen den Gegner ist dreimal so hoch wie die Schwierigkeit des Gegners. Du kannst einem Gegner diesen Trait geben, um Situationen zu handhaben, in denen die Figuren stark in der Unterzahl sind.", "Wenn du etwa einem einfachen Gegner mit dem Trait Triple Threat gegenüberstehst, haben alle Reaktionswürfe gegen ihn die Schwierigkeitsstufe 3 Einfach."]),
    K("Unreachable", ["Der Gegner hat lange, widerstandsfähige Beine oder kriecht an den Wänden entlang und hält dabei sicheren Abstand. Er kann daher nur von Waffen mit Reichweite oder Nahkampfwaffen mit Reach getroffen werden, als hätte er den Trait Flying."]),
    K("Venomous", ["Der Gegner sondert eine hochgiftige Substanz ab. Figuren, denen in ihrem Reaktionszug nicht mindestens ein einfacher Erfolg gelingt, erleiden sofort den Zustand Vergiftet."])
  ]}
]});

A.push({id: "schwach", t: "Schwachstellen", p: 280, b: [
  bild("s280-anhang-i-weak-spots grundbuch-s281-anhang-i-weak-spots", 440),
  "Alle Gegner wirken mächtig und furchteinflößend, aber auch sie haben Schwachstellen, die du nutzen kannst, um die Oberhand zu gewinnen. Vielleicht sind deine Feinde verwirrt oder verängstigt, vielleicht gibt es in der Nähe etwas, womit du ihnen einen Knüppel zwischen die Beine werfen kannst. Im Krieg ist alles erlaubt!",
  {t: "h", x: "Eine Schwachstelle finden", p: 280},
  "Um die Schwachstelle eines Gegners zu finden, kannst du:",
  {t: "ul", x: [
    "einen Aktionswurf auf Investigation + War ablegen, mit einer Schwierigkeit in Höhe der Schwierigkeit des Gegners.",
    "einen passenden Move nutzen, etwa den Duellanten-Move Cunning Tactics oder den Jäger-Move Sharp Eye, mit denen du die Schwachstelle des Gegners ohne Wurf und ohne Verbrauch deiner Aktion findest."]},
  "Denk immer daran, dass jeder Gegner nur eine Schwachstelle haben kann und dieser Vorteil nur einmal genutzt werden kann.",
  {t: "h", x: "Eine Schwachstelle erzeugen", p: 280},
  "Hast du die Schwachstelle des Gegners gefunden, würfelt die Spielleitung mit einem Zahlenwürfel, um die Schwachstellen-Tabelle zufällig zu bestimmen. Dann würfelt sie erneut, um eine der 6 Schwachstellen dieser Tabelle zu wählen, und teilt das Ergebnis dem:der Spieler:in mit, der:die die Schwachstelle gefunden hat.",
  "Jede Schwachstelle gibt +1 auf einen einzelnen Wurf oder die Gelegenheit zu einem spektakulären Manöver zu deinem Vorteil. Der:die Spieler:in, der:die die Schwachstelle entdeckt, entscheidet frei, ob er:sie die nächste Aktion nutzt, um sie auszunutzen, oder die Information an einen Freund weitergibt und ihm die Ehre überlässt. So oder so kann nur eine Figur die Schwachstelle ausnutzen, und nur einmal.",
  {t: "q", x: "Ich kann nicht euch alle besiegen, aber drei oder vier schaffe ich. Wer ist der Erste?", wer: "Lazarus Malachiorre"},
  {t: "h", x: "Schwachstellen I–II", p: 281},
  {t: "tbl", head: ["", "Schwachstelle"], rows: [
    ["I", "Der Stand des Gegners ist unsicher. Du kannst mit Strength +1 angreifen."],
    ["II", "Der Gegner ist verwundet. Du erhältst +1 beim Angriff mit geschärften Waffen."],
    ["III", "Du kannst mit einem Wurf auf Culture + Street einen Einsturz oder eine Kettenreaktion auslösen. Gelingt er, füllt der Gegner 2 Stresskästchen."],
    ["IIII", "Du kannst den Gegner in einen Engpass locken. Der Gegner kann seinen nächsten Move nicht ausführen."],
    ["V", "Die Flanke des Gegners ist ungeschützt. Du kannst mit Dexterity +1 angreifen."],
    ["VI", "In der Nähe steht eine instabile Konstruktion, die du mit einem Wurf auf Craft + War umstoßen kannst. Gelingt er, füllt der Gegner 2 Stresskästchen."]]},
  {t: "h", x: "Schwachstellen III–IIII", p: 281},
  {t: "tbl", head: ["", "Schwachstelle"], rows: [
    ["I", "Der Gegner steckt fest oder seine Bewegung ist behindert. Alle erhalten +1 auf ihren nächsten Reaktionswurf."],
    ["II", "Der Gegner ist verängstigt oder aufgeregt. Du kannst mit Will +1 angreifen."],
    ["III", "Der Gegner ist verwirrt. Du erhältst +1 auf alle Würfe, um den Kampf zu verlassen."],
    ["IIII", "Der Gegner hat einen toten Winkel. Du kannst mit Elusion +1 angreifen."],
    ["V", "Du kannst mit einem Wurf auf Shoot + War etwas auf den Gegner fallen lassen. Gelingt er, füllt der Gegner 2 Stresskästchen."],
    ["VI", "Der Gegner steht mit dem Rücken zur Wand. Eine Figur kann ihre Aktion nutzen, um ohne Wurf 1 Stress zuzufügen."]]},
  {t: "h", x: "Schwachstellen V–VI", p: 281},
  {t: "tbl", head: ["", "Schwachstelle"], rows: [
    ["I", "Die Position des Gegners ist ungeschützt. Du kannst mit Shoot +1 angreifen."],
    ["II", "Es gibt Littlings oder kleinere Tiere, die du mit einem Wurf auf Authority + Society auf den Gegner hetzen kannst. Gelingt er, füllt der Gegner 2 Stresskästchen."],
    ["III", "Der Gegner ist nicht gerade hell. Du kannst mit Insight +1 angreifen."],
    ["IIII", "Du kannst den Gegner mit einem Wurf auf Investigation + Street in eine Falle locken. Gelingt er, kann deine Gruppe den nächsten Reaktionszug überspringen."],
    ["V", "Es gibt einen Vorsprung, an dem du dich schwingen und springen kannst. Du kannst mit Grace +1 angreifen."],
    ["VI", "Du hast den Gegner perfekt durchschaut. Du erhältst einen Joker."]]}
]});

A.push({id: "spinnen", t: "Von Spinnen", p: 304, b: [
  "Von allen Geschöpfen des Household und des Outhold konnten nur wenige denselben Respekt für sich beanspruchen wie die Spinnen. Um ganz klar zu sein: Es ist die abstoßende Art von Respekt, die man den ekelhaftesten und schrecklichsten Kreaturen vorbehält. Spinnen lebten in den Gutenachtgeschichten für unartige Kinder, sie suchten die Albträume derer heim, die ihren Weg kreuzten, und standen allgemein für den Maßstab alles Hässlichen, Unangenehmen und Bösen. So entstanden Redewendungen wie „Spinnensohn“ und „hässlich wie Spinnen“ und andere Ausdrücke, die sich hier nicht wiederholen lassen.",
  "Man kann sagen, dass niemand, wirklich niemand, Spinnen mochte, mit Ausnahme jener Sluagh, die die richtige Haltung gelernt hatten, um sie wegen ihrer Milch, ihres Gifts, ihres Fleisches und in seltenen Fällen als Reittiere aufzuziehen. Unter diesen „Arachnights“ erinnern wir uns an Mortimer Arluino, der aus dem Sattel geworfen und von seinem Reittier gefressen wurde, an Agatone, den Seidenritter, dessen mumifizierter, halb verdauter Körper noch stolz auf seiner Spinne sitzt, an Collerio „Zweieinhalbzahn“, von seinem wilden Ross vergiftet, an Ethereus Horatius Snowsong, der geheimnisvoll verschwand, nachdem er seiner Spinnenstute bei der Geburt geholfen hatte, und andere.",
  "Obwohl man im Allgemeinen vermeidet, so lange über Spinnen zu sprechen, dass man sie nach Namen oder Arten unterscheidet, weiß jeder Littling, dass es drei gefürchtetste Spinnen im House gibt und nur zwei Personen sie angeblich alle gesehen haben: Kubalai Khan und Capitano Rodomonte.",
  "Die berüchtigtste aller Spinnen war zweifellos **Reginella**, die ewig schwangere Mutter der Spinnen und Hüterin aller Arten von Verträgen, die mit den Mächten des Household geschlossen wurden. Manche sagen, sie sei einst eine winzige Spinne gewesen, kleiner als ein Staubkorn, als sie ins House kam, und der Khan selbst habe sie aus den verlorenen Regionen des Farbeyond mitgebracht. Wie auch immer: Man beschloss, dass ihre Tötung der Spinnenplage ein Ende setzen würde, und im Lauf der Jahre forderten viele Golden Backs sie heraus. Das ist wohl der Grund, warum ihre Brutstätte auch die Goldene Hölle heißt.",
  "Die größte und klügste Spinne war ohne Zweifel **Longleg**, die von Rodomonte im Zweikampf besiegt und verstümmelt wurde. Jeder weiß, dass der Capitano das Bein der Spinne nahm und zu einem tödlichen Speer machte, wie das Household ihn selten gesehen hat. Longlegs Longleg durchbohrte und vertrieb später den White Dragon in der Schlacht von Quillwaters, doch das ist eine andere Geschichte.",
  "Schließlich gab es die größte und stärkste aller Spinnen, die aus recht offensichtlichen Gründen **Ratchomper** hieß. Niemand kannte den Ort ihrer Brutstätte, und wenige wollten ihn überhaupt wissen. Man war sich einig, dass sie vermutlich lange Zeit schlief und nur erwachte, um zu fressen, zweifellos reichlich, alle sechs oder sieben Jahre, doch man begegnete ihr noch seltener. Zur Zeit des Fragilen Friedens glaubten viele, sie habe nie existiert, doch sie sollten bald eines Besseren belehrt werden.",
  "Wenn man bedenkt, dass Longleg am Ende Kubalai Khan enthauptete, gewiss auf Befehl des Capitanos, kann man mit ungefährer Sicherheit sagen, dass Rodomonte der einzige Littling in der Geschichte und im Household war, der die drei großen Spinnen gesehen und überlebt hat. Deshalb nannten ihn viele „Spinnenherr“, „Stodgy“, „Halbspinne“ und, leiser gesagt, „die nächste Mahlzeit“."
]});

H["haus/sl/gegner"] = (H["haus/sl/gegner"] || []).concat(A);
})();
