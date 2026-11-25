/* Garten › Spielleitung › Gegner, Teil A: Übersicht, Eigenschaften, Littlings (Anhang I, S.277–291) */
(function(){
var K0 = "garten/sl/gegner", L = (window.HH_TEXT[K0] = window.HH_TEXT[K0] || []);
function bild(n, w){ return {t: "bild", s: "garten-" + n, w: w}; }
function K(h, b){ return {t: "box", h: h, b: b}; }
function G(id, t, p, g){ g.t = "gegner"; if(g.bild) g.bild[0] = "garten-" + g.bild[0]; L.push({id: id, t: t, p: p, b: [g]}); }

L.push({id: "uebersicht", t: "Gegner des Gartens", p: 277, b: [
  "Im House hast du es mit Rattenrudeln zu tun, die Vorratskammern plündern und alles auf ihrem Weg zerstören, und mit dickbäuchigen Spinnen, die ihre Fallen in den dunkelsten Ecken weben. Doch der Garten beherbergt weit, weit schlimmere Kreaturen.",
  "Zunächst einmal findest du jedes Tier, das im House haust, auch draußen, und dort ist es garantiert genauso unfreundlich. Zweitens ist der Outhold die Heimat schrecklich giftiger Geschöpfe wie der hinterlistigen Einsiedlerspinne oder der unmöglich hohen Gottesanbeterinnen mit Sensen als Armen und Stelzen als Beinen. Dazu kommt eine ganze Liste von Banditen, Halsabschneidern und abtrünnigen Schwertkämpfern.",
  "Als wäre das nicht genug, findest du im Outhold auch riesige und aufdringliche Eichhörnchen, der Hauptgrund, warum es den Littlings nie gelang, den Garten zu besiedeln, sowie Spatzen, Krähen und kleine Bussarde, die wie die schmuddelige Hand eines Kindes in der Keksdose vom Himmel herabstoßen. Und nahe den Rushes und dem Fountain gibt es massenhaft dicke, quakende Kröten, die mit ihren langen, klebrigen Zungen alles packen und verschlingen, was in Reichweite kommt. Ganz zu schweigen von den Ameisen und den blinden Maulwürfen, die den Underground nach jeder Beute durchstreifen, die sich in der Dunkelheit verirrt. Schon der Gedanke lässt mich frösteln!",
  {t: "h", x: "Kolossale Bestien"},
  "Draußen im Garten gibt es unverhältnismäßig große und wahnsinnig wilde Bestien, die den Garten zu ihrem Jagdgrund machen. Diese kolossalen Bestien, auch „Colossi“ genannt, sind so unfassbar groß, dass sie Littlings kaum als Bedrohung wahrnehmen. In ihren Augen ist ein ausgewachsener Boggart nicht mehr als ein kleiner Happen, kaum genug zum Kauen. Mehr über Colossi und wie du dich ihnen stellst, steht im Kapitel „Colossi“ am Ende dieses Abschnitts.",
  "Kurz gesagt: Der Garten ist nicht nur Sonnenschein und Regenbogen, ganz im Gegenteil! Er ist eine endlose Weite, bewohnt von hungrigen Kreaturen, die wenig Lust haben, ihre Jagdgründe mit euch zu teilen. Wer im Outhold überleben will, muss sich mit Vorsicht, Geduld und Witz wappnen. Und mit Waffen, ganz wörtlich.",
  {t: "h", x: "Gefahrenstufe"},
  "Wie im ersten Household-Band sind auch die Gegner dieses Buchs nach Gefahrenstufe von 1 bis 5 geordnet. Kolossale Bestien haben dagegen eine eigene, höhere Gefahrenstufe: Sie sind völlig überdimensioniert, und es ist keineswegs sicher, dass eine Gruppe Littlings sie bezwingt, wenn sie nicht gut vorbereitet ist.",
  {t: "h", x: "Littlings", p: 278},
  {t: "kacheln", x: [
    {n: "Banditen", id: "gg-banditen", typ: "basic", lv: 1},
    {n: "Gesetzlose", id: "gg-gesetzlose", typ: "critical", lv: 2},
    {n: "Samurai", id: "gg-samurai", typ: "critical", lv: 3},
    {n: "Ninja", id: "gg-ninja", typ: "critical", lv: 3, s: "garten-s283-anhang-opponents"},
    {n: "Samurai-Meister", id: "gg-samuraimeister", typ: "critical", lv: 4},
    {n: "Tarnished Samurai", id: "gg-tarnished", typ: "critical", lv: 5},
    {n: "Redcaps", id: "gg-redcaps", typ: "critical", lv: 5},
    {n: "Furien", id: "gg-furien", typ: "critical", lv: 5},
    {n: "Thornguards", id: "gg-thornguards", typ: "critical", lv: 5, s: "garten-s291-anhang-opponents"}]},
  {t: "h", x: "Tiere", p: 278},
  {t: "kacheln", x: [
    {n: "Ameisen", id: "gg-ameisen", typ: "basic", lv: 1, s: "garten-s280-281-anhang-opponents-ganz"},
    {n: "Grillen", id: "gg-grillen", typ: "basic", lv: 1},
    {n: "Ameisenlöwe", id: "gg-ameisenloewe", typ: "critical", lv: 2, s: "garten-s284-anhang-opponents"},
    {n: "Maulwurf", id: "gg-maulwurf", typ: "critical", lv: 3},
    {n: "Einsiedlerspinne", id: "gg-einsiedlerspinne", typ: "critical", lv: 3},
    {n: "Kröte", id: "gg-kroete", typ: "critical", lv: 4},
    {n: "Gottesanbeterin", id: "gg-mantis", typ: "critical", lv: 4, s: "garten-s287-anhang-opponents"},
    {n: "Vogel", id: "gg-vogel", typ: "critical", lv: 4, s: "garten-s288-anhang-opponents"},
    {n: "Windungen der Schlange", id: "gg-coils", typ: "critical", lv: 5},
    {n: "Schlange", id: "gg-schlange", typ: "critical", lv: 5, s: "garten-s293-anhang-opponents"},
    {n: "Eichhörnchen", id: "gg-eichhoernchen", typ: "critical", lv: 5, s: "garten-s294-anhang-opponents"},
    {n: "Zerzaustes Eichhörnchen", id: "gg-zerzaust", typ: "critical", lv: 5},
    {n: "Teufelsblumen-Gottesanbeterin", id: "gg-teufelsmantis", typ: "critical", lv: 5, s: "garten-s296-297-anhang-opponents-ganz"},
    {n: "Majestätische Gottesanbeterin", id: "gg-majestaetisch", typ: "extreme", lv: 5}]}
]});

L.push({id: "traits", t: "Eigenschaften der Gegner", p: 279, b: [
  "Hier folgen neue Eigenschaften für Gegner. Die Traits „Beast“ und „Littling“, die schon im ersten Household-Band standen, wurden im Licht der neuen Regeln erweitert.",
  {t: "karten", cls: "oben", x: [
    K("Beast", ["Der Gegner ist ein Tier oder eine Gruppe von Tieren. Tiere können Dunkelheit und extremes Wetter stets ignorieren."]),
    K("Colossal", ["Der Gegner ist ein einzelnes Tier, so hoch wie zehn Littlings, eine Kreatur so gewaltig, dass sie mühelos eine ganze Siedlung zerstören könnte, ohne ins Schwitzen zu geraten.", "Kolossale Bestien sind anders als alle anderen Gegner und können nie nach den normalen Kampfregeln bekämpft werden. Mehr über den Kampf gegen Colossi steht unter „Colossi“ am Ende dieses Abschnitts."]),
    K("Devastating", ["Der Gegner ist besonders groß oder tödlich und weiß, wie man mit verheerender Kraft und Präzision zuschlägt.", "Figuren, denen in ihrem Reaktionszug nicht mindestens ein einfacher Erfolg gelingt, erleiden sofort zusätzlich 1 Schweren Stress.", "Erzielt ein Littling etwa keinen einzigen Erfolg bei der Verteidigung gegen einen kritischen Gegner mit dem Trait Devastating, muss er 3 Stresskästchen füllen und dann das linke Stresskästchen einkreisen, um den Schweren Stress darzustellen.", "Mehr dazu unter „Schwerer Stress“ in Regeln › Reise & Jahreszeiten."]),
    K("Freezing Venom", ["Der Gegner sondert ein Gift ab, das das Blut in den Adern gefrieren lässt und die Bewegungen verlangsamt.", "Figuren, denen in ihrem Reaktionszug nicht mindestens ein einfacher Erfolg gelingt, erleiden sofort für 3 Züge den Zustand Gefroren."]),
    K("Littling", ["Der Gegner ist ein Littling oder eine Gruppe von Littlings. Die Spielleitung kann diese Gegner anpassen, indem sie ihnen je nach Folk zusätzliche Traits gibt.", "Faeries können fliegen, als hätten sie den Trait Flying.", "Shinigami und Gnomes dürfen einen einzelnen erfolgreichen Angriff ignorieren.", "Barghests können wild werden, wenn sie ihr letztes Crucial Box erreichen. Dann erhalten sie sofort die Traits Armed und Large."]),
    K("Master", ["Der Gegner hat hart trainiert, um eine Nahkampfwaffe wie das Katana oder die Knochensense zu meistern.", "In einem Aktionszug können Figuren, die diesen Gegner im Nahkampf angreifen, nie einen Freien Neuwurf nutzen, es sei denn, sie geben ein Kreuz-Ass aus."]),
    K("Slippery", ["Der Gegner kann sich extrem schnell bewegen oder mit einem flinken Sprung entwischen.", "Misslingt einer Figur ihr Angriff, kann sich der Gegner in Reichweite zurückziehen."]),
    K("Spirited", ["Der Gegner ist ein ungemein kräftiger und fitter Littling oder ein mächtiges Tier. Die Spielleitung fügt links an der Stressleiste des Gegners 3 Stresskästchen hinzu.", "Du kannst diesen Trait auch nutzen, um eine besonders zahlreiche Gruppe von Gegnern darzustellen."])]},
  K("Weniger Schaden", ["Willst du eine Kampfszene verlängern oder weniger tödlich machen, tausche den Gegner-Trait „Double Trouble“ gegen „Spirited“.", "Das macht den Gegner schwerer zu besiegen, aber in Reaktionszügen weniger gefährlich."])
]});

/* ---------- Littlings ---------- */
G("gg-banditen", "Banditen", 281, {typ: "basic", lv: 1, st: 12, cr: [4, 8],
  mv: "All the Way, Boys!, dann Retaliate", tr: "Littling, Shooters", ot: "Barrage, Double Trouble, Spirited",
  ak: ["Die Banditen legen einen Hinterhalt und greifen dich ohne Vorwarnung an. Reagiere mit Vorsicht.",
    "Die Banditen richten ihre Waffen auf dich und zwingen dich zum Rückzug. Reagiere mit Wille.",
    "Die Banditen gehen in Deckung und greifen dich aus der Ferne an. Reagiere mit Ausweichen.",
    "Die Banditen versuchen, dich zu Boden oder aus dem Sattel zu stoßen. Reagiere mit Athletik.",
    "Die Banditen treffen dich mit Nagelspitzen und Bolzen. Reagiere mit Kampf.",
    "Die Banditen haben ihren Vorteil verloren und müssen sich neu sammeln. **Sie greifen nicht an.**"],
  tx: ["Ob sie sich im hohen Gras des Backyard verstecken oder in den feuchten Tunneln des Underground: Banditen sind Littlings, die am Rand der Gesellschaft leben. Sie kämpfen nicht für Ehre oder Ruhm, sondern aus Not und Gier. Als Wegelagerer und Karawanenräuber sind sie für ihre blitzschnellen Hinterhalte bekannt und dafür, immer als Erste zuzuschlagen."],
  zg: [["All the Way, Boys!", "Die Banditen rufen Verstärkung oder feuern sich gegenseitig an. Von nun an erleiden alle Figuren, die in ihrem Reaktionszug Stress erleiden, 1 zusätzlichen Stress."],
    ["Retaliate", "Die Banditen werden noch verbissener und erhalten den Trait Counter-attack."]]});

G("gg-gesetzlose", "Gesetzlose", 282, {typ: "critical", lv: 2, st: 9, cr: [5],
  mv: "Hail of Bullets", tr: "Armed, Double Trouble, Littling, Shooters", ot: "Counter-attack, Double Trouble, Hard to Kill",
  ak: ["Die Gesetzlosen versuchen, dich einzukreisen. Reagiere mit Vorsicht.",
    "Die Gesetzlosen greifen plötzlich an oder spielen unfair. Reagiere mit Einsicht.",
    "Die Gesetzlosen schießen auf dich. Reagiere mit Ausweichen −1.",
    "Die Gesetzlosen greifen dich wiederholt an. Reagiere mit Geschick.",
    "Die Gesetzlosen greifen dich als Gruppe an. Reagiere mit Kampf.",
    "Die Gesetzlosen packen und zerren an dir. Reagiere mit Stärke."],
  tx: ["Überall im Garten triffst du auf Revolverhelden mit eiskalten Augen und zuckenden Fingern, skrupellose Wilderer, Mäusediebe und Kopfgeldjäger, die alles tun würden, um ein Kopfgeld zu kassieren."],
  zg: [["Hail of Bullets", "Die Gesetzlosen eröffnen wild das Feuer. Jede Figur, die sich nicht auf einen Schild oder eine breite Waffe stützen kann, muss einen kritischen Reaktionswurf auf Ermittlung + Straße ablegen, um Deckung zu finden. Wem er misslingt, erleidet 3 Stress."]]});

G("gg-samurai", "Samurai", 282, {typ: "critical", lv: 3, st: 8, cr: [3, 6],
  mv: "Frog Stance oder Beetle Stance oder Snake Stance", tr: "Armed, Counter-attack, Littling, Nimble", ot: "Armored, Double Trouble, Hard to Kill, Spirited",
  ak: ["Die Samurai greifen dich mit präzisen, tödlichen Hieben an. Reagiere mit Ausweichen.",
    "Die Samurai wechseln die Haltung, um dich zu verwirren. Reagiere mit Einsicht.",
    "Die Samurai versuchen, dich aus dem Gleichgewicht zu bringen, und zielen auf deine Beine. Reagiere mit Anmut.",
    "Die Samurai greifen dich mit schnellen Schnitten an. Reagiere mit Kampf.",
    "Die Samurai warten auf den perfekten Moment zum Zuschlagen. Reagiere mit Vorsicht.",
    "Die Samurai kreuzen ihre Katanas mit deinen Waffen. Reagiere mit Geschick."],
  tx: ["Ob treue Beschützer des Shogunate oder unberechenbare Wanderer auf den Straßen der Rushes: Samurai sind ehrenhafte, äußerst geschickte Krieger. Sie schlagen nie blind zu und lassen sich nie von Wut leiten; jede Bewegung ist bemessen, jeder Schnitt ein Kunstwerk. Immer wenn sie ihr Crucial Box erreichen, kann die Spielleitung frei oder zufällig wählen, welchen Move sie einsetzen."],
  zg: [["Frog Stance", "Die Samurai beugen die Knie, senken die Schwerter und bereiten sich auf eine Parade vor. Sie ignorieren den nächsten erfolgreichen Angriff gegen sie."],
    ["Beetle Stance", "Die Samurai heben die Schwerter. Alle Figuren erhalten −1 auf ihren nächsten Reaktionswurf."],
    ["Snake Stance", "Die Samurai konzentrieren sich auf die Figur, die sie für am gefährlichsten halten. Vor ihrem nächsten Angriff muss diese Figur einen kritischen Reaktionswurf auf Geschick + Krieg ablegen. Misslingt er, kann sie gar nicht angreifen."]]});

G("gg-ninja", "Ninja", 283, {typ: "critical", lv: 3, st: 7, cr: [2, 3, 4, 5, 6],
  bild: ["s283-anhang-opponents", 200],
  mv: "Ninja Tricks", tr: "Counter-attack, Littling, Nimble, Slippery", ot: "Cobweb, Double Trouble, Freezing Venom, Spirited, Unreachable",
  ak: ["Die Ninja bedrängen dich ohne Pause. Reagiere mit Anmut.",
    "Die Ninja wirbeln ihre Kunai herum. Reagiere mit Geschick −1.",
    "Die Ninja rutschen zwischen deinen Beinen hindurch und wollen dich zu Fall bringen. Reagiere mit Athletik.",
    "Die Ninja werfen ihre Kunai nach dir. Reagiere mit Ausweichen.",
    "Die Ninja greifen dich nach mehreren Finten an. Reagiere mit Einsicht.",
    "Die Ninja lösen sich vom Kampf und greifen dich von hinten an. Reagiere mit Vorsicht."],
  tx: ["Vor langer Zeit waren Ninja die Spione und Vollstrecker der Shogun und ihres Volkes. Heute sind nur noch wenige in den Rushes verstreut, doch alle sind unberechenbare Gegner, die mit fliegenden Dolchen, Rauchbomben und explodierenden Spinnweben jeden Kampf für sich entscheiden."],
  zg: [["Ninja Tricks", "Jedes Mal, wenn die Spielleitung ein Crucial Box füllt, kann sie einen der folgenden Tricks auslösen. Erleiden die Ninja durch einen einzigen Angriff mehr als 1 Stress, können sie nur einen Trick auslösen."],
    ["Smoke Bomb", "Bis zum Ende des Zuges sind die Ninja gegen Fernangriffe immun."],
    ["Getaway", "Die Ninja fliehen aus dem Kampf und verstecken sich in der Nähe."],
    ["Cobweb Bomb", "Die Figur, die die Ninja angegriffen hat, muss einen kritischen Reaktionswurf auf Ausweichen + Krieg ablegen. Misslingt er, wird sie gefangen. Siehe Trait Cobweb (Household, Band I)."],
    ["Jump", "Die Ninja springen von einer Figur in Reichweite weg oder auf sie zu."],
    ["Dust", "Die Ninja werfen einer Figur Staub in die Augen und machen sie für 2 Züge Geblendet."]]});

G("gg-samuraimeister", "Samurai-Meister", 285, {typ: "critical", lv: 4, st: 12, cr: [3, 6, 9],
  mv: "Frog Stance oder Beetle Stance oder Snake Stance oder Mantis Stance", tr: "Armed, Counter-attack, Double Trouble, Littling, Master, Nimble", ot: "Armored, Hard to Kill, Spirited",
  ak: ["Die Samurai-Meister greifen dich mit präzisen, tödlichen Hieben an. Reagiere mit Ausweichen.",
    "Die Samurai-Meister wechseln die Haltung, um dich zu verwirren. Reagiere mit Einsicht.",
    "Die Samurai-Meister versuchen, dich aus dem Gleichgewicht zu bringen, und zielen auf deine Beine. Reagiere mit Anmut.",
    "Die Samurai-Meister greifen dich mit schnellen Schnitten an. Reagiere mit Kampf.",
    "Die Samurai-Meister warten auf den perfekten Moment zum Zuschlagen. Reagiere mit Vorsicht.",
    "Die Samurai-Meister kreuzen ihre Katanas mit deinen Waffen. Reagiere mit Geschick −1."],
  tx: ["Es braucht Jahre des Trainings und reichlich Kampferfahrung, bis ein Samurai das Recht erwirbt, sich Meister zu nennen. Immer wenn sie ihr Crucial Box erreichen, kann die Spielleitung frei oder zufällig wählen, welchen Move sie einsetzen."],
  zg: [["Frog Stance", "Die Samurai-Meister beugen die Knie, senken die Schwerter und bereiten sich auf eine Parade vor. Sie ignorieren den nächsten erfolgreichen Angriff gegen sie."],
    ["Beetle Stance", "Die Samurai-Meister heben die Schwerter. Alle Figuren erhalten −1 auf ihren nächsten Reaktionswurf."],
    ["Snake Stance", "Die Samurai-Meister konzentrieren sich auf die Figur, die sie für am gefährlichsten halten. Vor ihrem nächsten Angriff muss diese Figur einen kritischen Reaktionswurf auf Geschick + Krieg ablegen. Misslingt er, kann sie gar nicht angreifen."],
    ["Mantis Stance", "Die Samurai-Meister drehen den Griff ihrer Schwerter um. Figuren, die von einem Gegenangriff getroffen werden, erleiden 3 Stress statt 1. Dieser Effekt hält an, bis die Gegner die Haltung wechseln."]]});

G("gg-tarnished", "Tarnished Samurai", 289, {typ: "critical", lv: 5, st: 15, cr: [3, 6, 9, 12],
  mv: "Regeneration, Frog Stance oder Beetle Stance oder Snake Stance oder Mantis Stance oder Moon Stance", tr: "Armed, Devastating, Double Trouble, Freezing Venom, Heavily Armored, Littling, Master",
  ak: ["Die Tarnished Samurai greifen dich mit präzisen, tödlichen Hieben an. Reagiere mit Ausweichen.",
    "Die Tarnished Samurai greifen dich mit voller Wucht an. Reagiere mit Stärke.",
    "Die Tarnished Samurai versuchen, dich aus dem Gleichgewicht zu bringen, und zielen auf deine Beine. Reagiere mit Anmut.",
    "Die Tarnished Samurai greifen dich mit schnellen Schnitten an. Reagiere mit Kampf.",
    "Die Tarnished Samurai rücken bedrohlich vor und lenken deine Hiebe ab. Reagiere mit Vorsicht.",
    "Die Tarnished Samurai kreuzen ihre Katanas mit deinen Waffen. Reagiere mit Geschick −1."],
  tx: ["Fällt ein Shinigami-Samurai im Kampf und kehrt von den Toten zurück, schickt die Daimyo Val Tarnish einen Boten an seine Schwelle. Der Bote, in Grün gekleidet und bis zum Gesicht in Bandagen gehüllt, fordert den Samurai zu einem freundschaftlichen Duell heraus und macht sich nach dem Kampf sofort auf den Weg zurück zur Tarnished Fortress.", "Meist führt dieses Ritual zu nichts, doch manchmal ruft Val Tarnish den Samurai zu sich und bietet ihm den geheimnisvollen Tarnished-Vertrag und einen Platz unter ihrem Kommando an.", "Wer den Vertrag der Daimyo annimmt, wird vom Tarnish verdorben: Die Haut färbt sich grün und wird hart wie Metall, das der Witterung ausgesetzt ist. So entstehen die Tarnished Samurai, die stillen und tödlichen Beschützer der Präfektur Mizuken, die die persönliche Garde der Shogun bilden.", "Tarnished Samurai sind nie redselig und fallen selten starken Gefühlen zum Opfer. Nach dem Vertragsschluss werden sie mit der Zeit immer stiller und ausdrucksloser. Sie wollen nur dem Shogunate dienen, und ihre Ehre und Treue sind absolut.", "Diese furchterregenden Krieger haben nur eine Schwäche: Der Tarnished-Vertrag macht sie schwer wie Felsen, sodass sie weder schwimmen noch treiben können.", "Immer wenn sie ihr Crucial Box erreichen, kann die Spielleitung frei oder zufällig wählen, welchen Move sie einsetzen."],
  zg: [["Regeneration", "Die Tarnished Samurai heilen ihre Wunden und erholen 3 Stress. Dieser Move kann nur einmal ausgelöst werden."],
    ["Frog Stance", "Die Tarnished Samurai beugen die Knie, senken die Schwerter und bereiten sich auf eine Parade vor. Sie ignorieren den nächsten erfolgreichen Angriff gegen sie."],
    ["Beetle Stance", "Die Tarnished Samurai heben die Schwerter. Alle Figuren erhalten −1 auf ihren nächsten Reaktionswurf."],
    ["Snake Stance", "Die Tarnished Samurai konzentrieren sich auf die Figur, die sie für am gefährlichsten halten. Vor ihrem nächsten Angriff muss diese Figur einen kritischen Reaktionswurf auf Geschick + Krieg ablegen. Misslingt er, kann sie gar nicht angreifen."],
    ["Mantis Stance", "Die Tarnished Samurai drehen den Griff ihrer Schwerter um. Figuren, die von einem Gegenangriff getroffen werden, erleiden 3 Stress statt 1. Dieser Effekt hält an, bis der Gegner die Haltung wechselt."],
    ["Moon Stance", "Die Tarnished Samurai führen ihre Schwerter hinter den Rücken, die Spitzen zum Himmel. Die erste Figur, die in einem Aktionszug angreift, muss zuerst einen kritischen Aktionswurf auf Wille + Krieg ablegen. Misslingt er, kann sie nicht angreifen, erleidet 1 Stress und wird Verängstigt. Dieser Effekt hält an, bis der Gegner die Haltung wechselt."]]});

G("gg-redcaps", "Redcaps", 290, {typ: "critical", lv: 5, st: 12, cr: [3, 7, 10],
  mv: "Calcification oder Frontal Assault oder Head-butt", tr: "Armed, Devastating, Double Trouble, Littling",
  ak: ["Die Redcaps heben ihre Äxte und treffen dich mit mächtigen Hieben. Reagiere mit Kampf.",
    "Die Redcaps rücken in dichter Formation vor und decken einander mit den Schilden. Reagiere mit Wille.",
    "Die Redcaps versuchen, deine Verteidigung zu durchbrechen. Reagiere mit Athletik −1.",
    "Die Redcaps zielen mit ihren Boomstones und schießen in einer Linie. Reagiere mit Ausweichen.",
    "Die Redcaps greifen dich an und nutzen ihre Umgebung. Reagiere mit Erkundung.",
    "Die Redcaps zerstreuen sich und greifen aus allen Richtungen an. Reagiere mit Vorsicht."],
  tx: ["Die Redcaps sind allesamt hochgewachsene, drahtige Gnomes, die mit einfachen Steinäxten oder Boomstones kämpfen. Immer wenn sie ihr Crucial Box erreichen, kann die Spielleitung frei oder zufällig wählen, welchen Move sie einsetzen. Sie dürfen denselben Move nicht zweimal hintereinander einsetzen."],
  zg: [["Calcification", "Wenn eine Figur die Redcaps das nächste Mal trifft, erstarren sie zu Stein und erleiden gar keinen Stress. Figuren, die noch nicht angegriffen haben, verlieren ihren Zug, und der Kampf geht in einen Reaktionszug über."],
    ["Frontal Assault", "Wenn eine Figur die Redcaps das nächste Mal im Nahkampf angreift, muss sie zuerst einen kritischen Reaktionswurf auf Stärke + Krieg −1 ablegen. Misslingt er, kann sie nicht angreifen."],
    ["Head-butt", "Ein Redcap packt eine Figur und trifft sie mit einem kräftigen Kopfstoß. Misslingt der Figur ein extremer Reaktionswurf auf Stärke + Krieg, erleidet sie 1 Stress und wird Verwirrt. Erzielt die Figur mehr als einen extremen Erfolg, erleiden die Redcaps 1 Stress."]]});

G("gg-furien", "Furien", 290, {typ: "critical", lv: 5, st: 12, cr: [4, 9],
  mv: "Wild Flight, dann Seelie Scythes", tr: "Armed, Counter-attack, Double Trouble, Flying, Hard to Kill, Littling, Master, Nimble",
  ak: ["Die Furien tanzen in einem Wirbel aus Klingen um dich herum. Reagiere mit Vorsicht.",
    "Die Furien fliegen tief über dem Boden und zielen auf deine Beine. Reagiere mit Anmut −1.",
    "Die Furien greifen dich ohne Zögern mit ihren Knochensensen an. Reagiere mit Kampf.",
    "Die Furien stürzen von oben auf dich und schlagen wiederholt zu. Reagiere mit Athletik.",
    "Die Furien schweben über dir und stoßen herab. Reagiere mit Ausweichen.",
    "Die Furien umschwirren dich und schlagen so schnell zu, dass du entwaffnet wirst. Reagiere mit Geschick."],
  tx: ["Die Furien werden von Commander Morgana Astralta unter den besten Fae-Kriegern ausgewählt und durchlaufen dann drei Jahre harten Trainings, bevor sie den begehrten Vogelschädelhelm und die kostbaren Knochensensen erhalten. Sie beschützen den Stump of Dèndronaos und Caer Siddi und entfernen sich nie weit davon, es sei denn, sie erhalten einen direkten Befehl der Commander oder der Heiligen Kaiserin Titania Lightheart."],
  zg: [["Wild Flight", "Die Furien beginnen, ihre Ziele zu umkreisen. Figuren, denen ein extremer Reaktionswurf auf Vorsicht + Straße misslingt, erhalten −1 auf ihren nächsten Aktions- oder Reaktionswurf."],
    ["Seelie Scythes", "Die Furien landen und kreuzen herausfordernd ihre Knochensensen. Von nun an verlieren sie den Trait Flying, erhalten aber den Trait Triple Threat."]]});

G("gg-thornguards", "Thornguards", 291, {typ: "critical", lv: 5, st: 10, cr: [4, 7],
  bild: ["s291-anhang-opponents", 190],
  mv: "Lash, dann Feral", tr: "Armed, Armored, Counter-attack, Double Trouble, Hard to Kill, Littling",
  ak: ["Die Thornguards täuschen an und greifen dann an. Reagiere mit Einsicht.",
    "Die Thornguards greifen dich aus der Ferne mit ihren Dornenpeitschen an. Reagiere mit Ausweichen.",
    "Die Thornguards treffen dich mit schnellen Peitschenhieben. Reagiere mit Kampf.",
    "Die Thornguards heben dich hoch und schmettern dich zu Boden. Reagiere mit Stärke −1.",
    "Die Thornguards stürmen mit gesenktem Kopf auf dich zu. Reagiere mit Athletik.",
    "Die Thornguards bewegen sich schnell und nutzen ihre Peitschen wie Enterhaken. Reagiere mit Vorsicht."],
  tx: ["Der legendäre Knight of Thorns scharte eine kleine Gruppe wilder Barghest-Krieger um sich, in Rüstungen aus Eisen mit Dornenbesatz und mit Peitschen aus dornigen Ranken. Als Geißel des Sheriffs von Nettlegham und der Great Imperial Army zögern die Krieger der Thornguard nie, unbedachte Littlings anzugreifen, die ihr Gebiet betreten."],
  zg: [["Lash", "Die Krieger der Thornguard schnalzen mit ihren Dornenpeitschen nach einer Figur. Misslingt ihr ein extremer Reaktionswurf auf Vorsicht + Krieg, erleidet sie 1 Stress und wird gefangen. Solange sie gefangen ist, wird die Schwierigkeit ihres nächsten Reaktionswurfs im Kampf extrem."],
    ["Feral", "Die Krieger der Thornguard werden wild und zerstören ihre Rüstungen. Von nun an verlieren sie die Traits Double Trouble und Armored, erhalten aber die Traits Large und Master und werden zu einem Extremen Gegner."]]});

})();
