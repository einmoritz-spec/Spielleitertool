BC_PART["jr-seeregeln/spiel"] = {id: "spiel", t: "Spiel & Rum", sub: "Glücksspiel · Betrunken", s: 130, blocks: [
  {h: "Glücksspiel", s: 130},
  {t: "prose", cap: true, p: [
    "Wenn weder Diplomatie, Schwerter noch Pistolen dein Problem lösen können, bleibt noch eine Lösung: Wette darum! Hier ist das beliebteste Spiel Liar’s Dice, ein freundschaftlicher Wettstreit unter Seeleuten, die einander mit Glück und Würfeln herausfordern und nur meistens in einer Schlägerei enden.",
    "Wenn du auf der Suche nach einer Alternative zu Duellen bist, bei der Köpfchen und Glück mehr wert sind als Geschick und Mut, ist Glücksspiel genau das Richtige für dich."
  ]},
  {h: "Zwei Spieler zugleich", s: 130},
  {t: "prose", p: [
    "Es gibt mehrere Varianten von Liar’s Dice, und du findest reichlich, wenn du danach suchst. Hier erkläre ich dir die Regeln für zwei Spieler, damit Abenteurer miteinander spielen können oder ein Abenteurer gegen einen Rivalen oder vom Schicksalsmeister gesteuerte Extras wetten kann.",
    "Ich habe die Zahl der Spieler begrenzt, um die Dinge zu straffen: Da draußen gibt es Schätze zu holen und Schiffe zu entern, und wir haben keine Zeit, den ganzen Abend mit Würfeln zu verbringen. Bedenke auch, dass es sehr unwahrscheinlich ist, dass alle Abenteurer einer Gruppe an einem Tisch willkommen geheißen werden, da die Leute hier misstrauisch sind und niemand sich um einen Gewinn betrügen lassen will."
  ]},
  {h: "Eine Wette abschließen", s: 131},
  {t: "prose", p: [
    "Vor jedem Spiel Liar’s Dice müsst ihr eine Wette abschließen und den Einsatz bestimmen. Zuallererst müssen du und dein Gegner euch auf die Folgen eures Sieges oder eurer Niederlage einigen. Zum Beispiel könntet ihr um Geld (1 Reichtumspunkt), einen Gegenstand oder um Informationen spielen.",
    "Nachdem beide Parteien der Wette zugestimmt haben, erhält jeder Spieler 3 Chips. Keine Sorge, wenn du keine echten Chips zur Hand hast: Du kannst Würfel oder beliebige andere Gegenstände benutzen. Ehrlich gesagt macht es keinen Unterschied. Hat ein Spieler alle 6 Chips, gewinnt er das Spiel. Hat er keine Chips mehr, verliert er.",
    "In manchen Situationen kannst du sogar ein K.-o.-Spiel wählen, mit nur einem Chip pro Spieler. Das ist besonders empfehlenswert, wenn du keine Zeit zu verlieren hast oder wenn der Einsatz hoch ist und du die Spannung für die Abenteurer steigern musst. Die einzige Frage ist: Fühlst du dich glücklich?"
  ]},
  {t: "box", h: "Schummeln", p: [
    "Wenn du Liar’s Dice spielst und dein Gegner „Lüge!“ ruft, kannst du versuchen zu schummeln, bevor du deine Hand zeigst. Würfle dazu eine Fingerfertigkeits-Probe im Feld Verbrechen. Jeder kritische Erfolg erlaubt dir, einen Würfel auf die Seite zu drehen, die du bevorzugst. Würfelst du keinen kritischen Erfolg, habe ich schlechte Nachrichten für dich: Du bist erwischt worden!",
    "Entscheidest du dich, im selben Spiel noch einmal zu schummeln, musst du besonders vorsichtig sein und zusätzlich zur Fingerfertigkeits-Probe eine kritische Kaltblütigkeits-Herausforderung im Feld Verbrechen würfeln. Die Nerven spielen dir üble Streiche, wenn die Spannung hoch ist. Wissen auch deine Kameraden, dass du schummelst, müssen auch sie die Kaltblütigkeits-Herausforderung bestehen, also gib dein Bestes."
  ]},
  {h: "Liar’s Dice spielen", s: 132},
  {t: "prose", p: [
    "Im Grunde haben die beiden Personen, die Liar’s Dice spielen, je 5 Würfel, die sie abwechselnd werfen. Ein Spieler würfelt, ohne dem Gegner die Würfel zu zeigen, und sagt ein Ergebnis an. Er kann wählen, die Wahrheit zu sagen oder zu lügen. Der Gegner muss dann entscheiden, ob er ihm glauben will, und ruft „Lüge!“, wenn er es nicht tut.",
    "Nun werden die Würfel aufgedeckt, wer recht hatte, bekommt einen Chip, und das Spiel beginnt von vorn."
  ]},
  {h: "Wer beginnt?", s: 132},
  {t: "prose", p: [
    "Nachdem der Einsatz bestimmt wurde, würfeln die Gegner je einen Würfel. Wer höher würfelt, gewinnt. Alternativ kannst du eine Münze werfen."
  ]},
  {h: "Die Würfel werfen", s: 132},
  {t: "prose", p: [
    "Sagen wir, du würfelst zuerst. Du nimmst 5 Würfel und würfelst, wobei du darauf achtest, sie vor deinem Gegner verborgen zu halten. Dazu kannst du auch einen Würfelbecher oder einen Krug benutzen. Der Einzige, der das Ergebnis in diesem Moment sehen kann, bist du – und deine Kameraden, wenn du ihnen vertraust."
  ]},
  {h: "Die Hand ansagen", s: 132},
  {t: "prose", p: [
    "Nachdem du die Würfel gesehen hast, solltest du dich zu deinem Gegner wenden und deine Hand ansagen, indem du sagst, was dein Ergebnis ist, etwa „Drilling“, „Zwei Paare“ oder „Kleine Straße“. In dieser Phase hast du das Recht zu lügen und eine andere Hand anzusagen als die, die du tatsächlich gewürfelt hast.",
    "Es gibt 8 Arten von Händen (von der höchsten zur niedrigsten):"
  ]},
  {t: "table", first: true, cols: ["Hand", "Beispiel"], rows: [
    ["Fünfling", "{w:1,1,1,1,1}"],
    ["Vierling", "{w:2,2,2,2,6}"],
    ["Full House (ein Paar plus Drilling)", "–"],
    ["Große Straße", "{w:2,3,4,5,6}"],
    ["Kleine Straße", "{w:1,2,3,4,5}"],
    ["Drilling", "{w:4,4,4,1,5}"],
    ["Zwei Paare", "–"],
    ["Paar", "{w:6,6,2,3,5}"],
    ["Trumpfwürfel (eine 6)", "{w:6}"]
  ]},
  {h: "Die Hand anzweifeln", s: 133},
  {t: "prose", p: [
    "Nachdem er gehört hat, was du ansagst, muss dein Gegner entscheiden, ob er „Lüge!“ ruft oder nicht.",
    "Ruft er „Lüge!“, werden die Würfel aufgedeckt, und wer recht hat, gewinnt einen Chip. Genau gesagt hat derjenige, der „Lüge!“ gerufen hat, recht, wenn die Hand, die du zeigst, niedriger ist, als du angesagt hast. Er liegt falsch, wenn die Hand gleich hoch oder höher ist als angesagt.",
    "Nachdem der Verlierer einen Chip abgegeben hat, gehen die Würfel an deinen Gegner, und das Spiel beginnt von vorn."
  ]},
  {h: "Die Hand nicht anzweifeln", s: 133},
  {t: "prose", p: [
    "Nachdem er gehört hat, was du ansagst, kann dein Gegner auch beschließen, nicht „Lüge!“ zu rufen. In diesem Fall solltest du ihm die Würfel zuschieben und darauf achten, das Ergebnis nicht zu verändern.",
    "Nachdem ihr beide sie gesehen habt, muss dein Gegner ansagen, wie viele er neu würfeln will, und dabei zumindest ehrlich sein. Das bedeutet: Sagt er, er würfelt 2 neu, muss er 3 davon so lassen, wie sie sind, und den Rest neu würfeln, ohne sie dir zu zeigen.",
    "Jetzt ist er an der Reihe, die Würfel zu werfen und die Hand anzusagen. Auch er kann wieder lügen, aber er muss eine höhere Hand ansagen als du zuvor. Hast du zum Beispiel „Zwei Paare“ angesagt und dein Gegner hat nicht „Lüge!“ gerufen, muss er jetzt mindestens „Drilling“ ansagen.",
    "Nachdem er angesagt hat, liegt es an dir zu wählen, ob du „Lüge!“ rufen oder das Spiel weiterlaufen lassen willst."
  ]},
  {h: "Spielende", s: 133},
  {t: "prose", p: ["Das Spiel endet, wenn du oder dein Gegner keine Chips mehr hat."]},
  {h: "Und eine Flasche Rum!", s: 134},
  {t: "prose", cap: true, img: {src: "jr/seeregeln-statue", pos: "50% 30%", side: "r"}, p: [
    "Das Leben eines Seemanns besteht zu gleichen Teilen aus Meer und Rum, das ist eine feststehende Tatsache. Alle Schiffe, die diesen Namen verdienen, besonders Piratenschiffe, haben irgendwo in der Kombüse eine Kiste Rum, die man hervorholt, wenn die Nacht einen Schluck zur Aufheiterung braucht. Ja, es gibt degenerierte Kapitäne, die Alkohol an Bord verbieten, aber selbst die haben selten die Macht, dieses Verbot durchzusetzen!",
    "Das Problem mit Rum ist, dass ein Schluck hin und wieder niemandem schadet, aber wenn du einen Tropfen zu viel nimmst, bekommst du die Folgen zu spüren."
  ]},
  {h: "Neues Gefühl: Betrunken", s: 134},
  {t: "prose", p: [
    "Wenn du eine Flasche Rum in den Händen hältst – oder einen anderen Donnerschlag –, kannst du beschließen, sie in einem Zug hinunterzukippen und das Gefühl Betrunken zu bekommen. Andernfalls, wenn du dich in der Fröhlichkeit ein bisschen mitreißen lässt, kann der Schicksalsmeister sagen, dass du genug getrunken hast, um dich Betrunken zu fühlen, oder dich bitten, eine kritische Zäh-Herausforderung zu bestehen, um zu sehen, wie du deinen Schnaps verträgst.",
    "Das Gefühl Betrunken ist insofern einzigartig, als es entweder ein Gutes oder ein Schlechtes Gefühl sein kann, je nachdem, wie dein Körper auf den Alkohol reagiert. Du kannst vorher nicht wissen, ob dich das Sich-schön-Betrinken stark und wild wie einen Löwen machen oder mürrisch und kaum stehfähig zurücklassen wird. Das gehört alles zum Spaß, was?",
    "Wenn du dich Betrunken fühlst, wirf eine Münze und hoffe aufs Beste. Landet sie auf Zahl, bedeutet das, dass der Geist deinen Geist tatsächlich gehoben hat, und du kannst „Betrunken“ zu deinen Guten Gefühlen hinzufügen. Landet sie auf Kopf, musst du „Betrunken“ zu deiner Liste von Schlechten Gefühlen hinzufügen und dich auf einen höllischen Kater gefasst machen.",
    "Wenn du kein Risiko eingehen willst, kannst du einfach eine Glücksmünze an den Schicksalsmeister übergeben und den Münzwurf überspringen, um das Recht zu bekommen zu wählen, ob du „Betrunken“ als Gutes oder Schlechtes Gefühl aufschreibst."
  ]},
  {h: "Ich fühle mich gut", s: 135},
  {t: "prose", p: [
    "Wenn du das Gute Gefühl Betrunken bekommst, kannst du dich bei allen Aufgaben in Wildnis und Aktion auf einen Vorteil verlassen. Das liegt daran, dass der Alkohol ein Feuer in dir entzündet hat, das dich stark und furchtlos macht, als könntest du die Welt allein mit einem Schwert erobern oder einen Hai mit bloßen Händen aufnehmen. Ja, du taumelst vielleicht ein wenig, und deine Sprache ist womöglich etwas verwaschen, aber du hast dich nie besser gefühlt!",
    "Das Gute Gefühl Betrunken verlierst du nach einer Nacht Schlaf oder wenn du ein Schlechtes Gefühl erleidest, wie bei allen anderen Guten Gefühlen."
  ]},
  {h: "Ich fühle mich schlecht", s: 135},
  {t: "prose", p: [
    "Wenn du das Schlechte Gefühl Betrunken bekommst, erleidest du bei allen Aufgaben in Aktion, Wissen und Gesellschaft einen Nachteil. Ich fürchte, der Rum ist dir zu Kopf gestiegen. Du kannst kaum geradestehen und weißt nicht mehr, an welchem Ende man ein Schwert hält, ganz zu schweigen vom Hämmern in deinem Kopf und den obszönen Grimassen, die du beim Verführungsversuch schneidest. Geh nach Hause, du bist betrunken!",
    "Sobald du das Schlechte Gefühl Betrunken hast, kannst du nicht weitertrinken, in der Hoffnung, das Gute Gefühl Betrunken zu bekommen. Versuch es gar nicht erst, Deckmatrose!",
    "Das Schlechte Gefühl Betrunken verlierst du nach einer guten Nacht Schlaf an einem Sicheren Ort."
  ]}
]};
