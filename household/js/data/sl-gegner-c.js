/* Spielleitung › Gegner, Teil C: Tiere (Grundbuch Anhang I, S.282–303) */
(function(){
var H = window.HH_TEXT = window.HH_TEXT || {};
var A = [];
function G(id, t, p, g, extra){ g.t = "gegner"; A.push({id: id, t: t, p: p, b: [g].concat(extra || [])}); }
function K(h, b){ return {t: "box", h: h, b: b}; }
var PILE = ["Pile On", "Das Tier konzentriert sich auf die schwächste Beute in Sicht. Die Figur mit dem höchsten Stress erleidet sofort 1 Stress. Wird sie dadurch Überstresst oder zum Aussteigen gezwungen, wird der Move wiederholt."];
var WEB = "Figuren, die keinen kritischen Reaktionswurf auf Ausweichen + Krieg bestehen, sind gefangen. Siehe den Trait Cobweb.";
var SLAM = "Figuren, die keinen kritischen Reaktionswurf auf Athletik + Krieg bestehen, werden Verletzt. Sind sie bereits Verletzt, werden sie Erschöpft. Sind sie bereits Erschöpft, werden sie Gebrochen.";
var FALL = "Figuren, die keinen kritischen Reaktionswurf auf Anmut + Krieg bestehen, fallen zu Boden. Gefallene Figuren müssen ihre Aktion nutzen, um wieder aufzustehen. Bis dahin erhalten sie −1 auf alle Würfe.";
var SERIOUS = "Den Figuren ist es gelungen, das Tier so weit zu verwunden, dass es wütend wird. Es stürzt sich auf sie, bereit, mit voller Kraft zu kämpfen. Figuren, die keinen extremen Reaktionswurf auf Wille + Krieg bestehen, werden Verängstigt und erhalten −1 auf ihren nächsten Wurf.";

G("g-schaben", "Schaben", 282, {typ: "basic", lv: 1, st: 6, cr: [6],
  mv: "They Just Keep Coming!", tr: "Beast, Nimble", ot: "Double Trouble, Triple Threat, Filthy",
  bild: ["grundbuch-s282-anhang-i-opponents", 220],
  ak: ["Die Schaben kommen beißend und kratzend auf dich zu. Reagiere mit Kampf.",
    "Die Flügel der Schaben flattern auf höchst widerliche Weise. Reagiere mit Wille.",
    "Die Schaben springen auf dich, um dich umzustoßen. Reagiere mit Stärke.",
    "Die Schaben klammern sich an deine Kleidung oder Waffen. Reagiere mit Geschick.",
    "Die Schaben mustern dich, bereit, beim ersten Zug zuzuspringen. Reagiere mit Vorsicht.",
    "Die Schaben starren dich mit leeren Knopfaugen an. **Sie greifen nicht an.**"],
  tx: ["Schaben sind kleine, lästige Insekten, die meist in großer Zahl angreifen. Sie leben vor allem in der Nähe der Inbetweens und in den dunkelsten Winkeln des House.", "Schaben pirschen sich meist an ihre Beute heran und nutzen ihre schnellen Bewegungen, um den Feind unvorbereitet zu erwischen und zu überschwärmen. Sie fressen Pilze und Schimmel, aber auch die Kadaver größerer Tiere und Insekten. Littlings greifen sie nur an, wenn sie ihre Jagdgründe bedroht sehen."],
  zg: [["They Just Keep Coming!", "Wirf einen Zahlenwürfel. Ungerade: Die Schaben sind besiegt oder vertrieben. Gerade: Eine neue Gruppe Schaben kommt, und der Kampf beginnt von vorn."]]});

G("g-wespen", "Wespen", 284, {typ: "basic", lv: 1, st: 6, cr: [4],
  mv: "War Buzz", tr: "Beast, Double Trouble, Flying", ot: "Venomous",
  bild: ["grundbuch-s284-285-anhang-i-opponents-ganz", 260],
  ak: ["Die Wespen greifen dich mit ihren Stacheln an. Reagiere mit Ausweichen.",
    "Die Wespen packen dich und versuchen, dich in die Luft zu ziehen. Reagiere mit Stärke.",
    "Die Wespen summen laut, um dich zu verwirren. Reagiere mit Einsicht.",
    "Die Wespen kommen auf dich zu und versuchen, dich zu beißen. Reagiere mit Kampf.",
    "Die Wespen stürzen herab und versuchen, in dich hineinzukrachen. Reagiere mit Athletik.",
    "Die Wespen umkreisen dich und studieren deine Bewegungen. **Sie greifen nicht an.**"],
  tx: ["Wespen sind gewalttätige, territoriale Geschöpfe. Sie hängen um Bienenstöcke herum, jagen Bienen und versuchen, ihren Honig zu stehlen. Wespen greifen jeden sofort an, der zu viel Lärm macht oder bedrohlich wirkt, und sind besonders zäh. Ihre Stacheln sind scharf wie Nadeln.", "Im Flug geben Wespen ein lautes Summen von sich, das sie leicht auffindbar macht. Deshalb versuchen sie meist, sich von oben an ihre Beute heranzuschleichen, indem sie über Pilze oder andere erhöhte Flächen huschen."],
  zg: [["War Buzz", "Die Wespen entfesseln ein kräftiges, ohrenbetäubendes Summen, das schon das Denken schwer macht. Bis zum Ende des Kampfes kannst du aus keinem Grund mehr Asse ausspielen."]]});

G("g-ohrwuermer", "Ohrwürmer", 285, {typ: "basic", lv: 1, st: 12, cr: [4, 6, 8, 10, 12],
  mv: "Pinch, dann Pile On, dann Pile On, dann Pile On, dann Pile On", tr: "Beast, Triple Threat, Large", ot: "Nimble, Filthy",
  ak: ["Die Ohrwürmer greifen dich wiederholt mit ihren Schwänzen an. Reagiere mit Ausweichen.",
    "Die Ohrwürmer schütteln ihre Schwänze, beißen dann aber nach dir. Reagiere mit Einsicht.",
    "Die Ohrwürmer greifen dich mit Zähnen und Zangen an. Reagiere mit Kampf.",
    "Die Ohrwürmer fegen mit ihren Schwänzen nach deinen Füßen. Reagiere mit Athletik.",
    "Die Ohrwürmer schlagen wiederholt mit den Schwänzen auf den Boden. Reagiere mit Anmut.",
    "Die Ohrwürmer springen auf dich, um dich zu beißen. Reagiere mit Stärke."],
  tx: ["Ohrwürmer sind große Insekten, fast so hoch wie ein Littling. Ihr Schwanz sieht aus wie ein Zangenpaar, mit dem sie ihre Beute packen. Sie greifen meist in kleinen Gruppen an und sind sehr aggressiv, wagen sich aber selten weit aus ihrem Bau, es sei denn, sie haben keine andere Wahl. Außerdem können sie mühelos an jeder senkrechten Fläche laufen."],
  zg: [["Pinch", "Die Ohrwürmer klappern mit ihren Schwänzen. Reagiere mit Anmut + Krieg. Figuren, denen das misslingt, werden Verletzt."], PILE]});

G("g-hundertfuesser", "Hundertfüßer", 285, {typ: "critical", lv: 2, st: 8, cr: [4],
  mv: "Encircle", tr: "Beast, Large, Venomous, Crawling", ot: "Double Trouble, Hardened Shell",
  ak: ["Der Hundertfüßer rammt dich mit voller Wucht. Reagiere mit Stärke.",
    "Der Hundertfüßer sticht mit einer Unzahl spitzer Beine nach dir. Reagiere mit Kampf.",
    "Der Hundertfüßer schlängelt sich schnell zwischen euch hindurch. Reagiere mit Athletik.",
    "Der Hundertfüßer wütet herum und löst ein kleines Erdbeben aus. Reagiere mit Anmut.",
    "Der Hundertfüßer kreist um dich und springt plötzlich zu. Reagiere mit Vorsicht.",
    "Der Hundertfüßer stößt einen schrecklichen, ohrenbetäubenden Schrei aus. Reagiere mit Wille."],
  tx: ["Hundertfüßer gehören zu den gefährlichsten Geschöpfen des House. Sie haben Dutzende um Dutzende bekrallter, giftiger Beine. Zum Glück leben sie meist in den Inbetweens oder neben den Walls. Trotz ihrer Größe können sie Wände entlanglaufen und sich lautlos über jede Fläche bewegen, um ihrer Beute aufzulauern. Leider stehen auf der extrem langen Liste ihrer Beutetiere auch Littlings."],
  zg: [["Encircle", "Der Hundertfüßer kriecht in einem Wirbel um die Gruppe. Alle Figuren erhalten −1 auf ihren nächsten Reaktionswurf."]]});

G("g-spinne", "Gemeine Spinne", 288, {typ: "critical", lv: 2, st: 9, cr: [3, 6],
  mv: "Cobweb Volley, dann Cobweb Volley", tr: "Beast, Large, Cobweb", ot: "Double Trouble, Nimble, Venomous, Unreachable",
  bild: ["grundbuch-s288-anhang-i-opponents", 200],
  ak: ["Die Spinne löst ein Beben oder einen kleinen Einsturz aus. Reagiere mit Anmut.",
    "Die Spinne greift von oben mit ihren Beinen an. Reagiere mit Ausweichen.",
    "Die Spinne prescht vor und greift plötzlich an. Reagiere mit Einsicht.",
    "Die Spinne kreist um dich und versucht, euch mit dem Rücken zur Wand zu drängen. Reagiere mit Vorsicht.",
    "Die Spinne starrt dich mit ihren zu vielen Augen und klickenden Kieferklauen an. Reagiere mit Wille.",
    "Die Spinne greift dich mit ihren Vorderbeinen an. Reagiere mit Kampf."],
  tx: ["Acht Beine, die sich über jede Fläche bewegen können, die Fähigkeit, klebrige Spinnweben zu schießen, und eine unbestimmte Zahl von Augen. Das ist das Rezept für das furchterregendste und meistgefürchtete Tier des House.", "Es gibt mehrere Arten gemeiner Spinnen, jede mit anderer Form und Färbung, aber alle haben die Fähigkeit gemeinsam, sich mit unglaublicher Heimlichkeit zu bewegen, die Neigung, gefährliche Hinterhalte zu legen, und die unselige Vorliebe für Mahlzeiten aus Littlings."],
  zg: [["Cobweb Volley", "In rascher Folge nimmt die Spinne alle Figuren mit ihrem Spinnweb ins Visier. " + WEB]]});

G("g-hornissen", "Hornissen", 289, {typ: "critical", lv: 3, st: 7, cr: [3, 5],
  mv: "War Buzz, dann Dust Cloud", tr: "Beast, Large, Flying, Venomous", ot: "Double Trouble, Counter-attack",
  ak: ["Die Hornissen nehmen dich mit ihren Stacheln ins Visier. Reagiere mit Ausweichen.",
    "Die Hornissen packen dich und versuchen, dich in die Luft zu ziehen. Reagiere mit Stärke.",
    "Die Hornissen gehen in Formation und greifen dich mit Raffinesse an. Reagiere mit Einsicht.",
    "Die Hornissen stürzen herab und versuchen, in dich hineinzukrachen. Reagiere mit Athletik.",
    "Die Hornissen summen laut, um dich zu verwirren. Reagiere mit Vorsicht.",
    "Die Hornissen klammern sich an dich und versuchen zuzustechen. Reagiere mit Geschick."],
  tx: ["Wespen sehen schon aus wie das geflügelte Böse, und doch gibt es noch schlimmere, hinterhältigere Tiere. Hornissen verhalten sich ähnlich wie ihre „kleinen Cousinen“, sind aber viel größer, viel reizbarer und viel gefährlicher im Kampf. Dennoch sind sie eine geschützte Art."],
  zg: [["War Buzz", "Die Hornissen entfesseln ein kräftiges, ohrenbetäubendes Summen, das schon das Denken schwer macht. Bis zum Ende des Kampfes kannst du aus keinem Grund mehr Asse ausspielen."],
    ["Dust Cloud", "Die Hornissen fliegen um die Figuren herum und wirbeln eine Staubwolke auf. Die Spielleitung würfelt für jede Figur mit einem Zahlenwürfel. Gerade: Diese Figur wird Geblendet."]]});

G("g-kaefer", "Käfer", 289, {typ: "critical", lv: 3, st: 12, cr: [5, 10],
  mv: "Impact, dann Impact", tr: "Beast, Large, Double Trouble, Hardened Shell", ot: "Triple Threat, Huge, Shield",
  ak: ["Der Käfer versucht, dich mit seinem Horn zu treffen. Reagiere mit Ausweichen.",
    "Der Käfer kracht in dich hinein. Reagiere mit Stärke.",
    "Der Käfer greift dich mit Kiefern oder Hörnern an. Reagiere mit Kampf.",
    "Der Käfer stürmt auf dich zu. Reagiere mit Athletik.",
    "Der Käfer gerät in Raserei, du musst Deckung suchen. Reagiere mit Ermittlung.",
    "Der Käfer schnaubt und flattert mit den Flügeln. Reagiere mit Wille."],
  tx: ["Im House gibt es unzählige Käferarten. Die größeren, wie der Hirschkäfer oder der Nashornkäfer aus Dasewer, dienen seit alters als Wachtiere und Reittiere. Es gibt aber auch wilde Käfer, die Littlings gegenüber sehr aggressiv sein können. Das gilt besonders für Doodlebugs: riesige, aggressive Käfer, die einhellig als Wildtiere gelten, denen man nie begegnen will."],
  zg: [["Impact", "Der Käfer stürmt vor und kracht in dich hinein. Figuren, die keinen extremen Reaktionswurf auf Athletik + Krieg bestehen, werden Verletzt. Sind sie bereits Verletzt, werden sie Gebrochen."]]});

G("g-eidechse", "Eidechse", 290, {typ: "critical", lv: 3, st: 6, cr: [3, 5],
  mv: "Tail Whip, dann Getaway", tr: "Beast, Large, Double Trouble, Nimble", ot: "Triple Threat, Huge, Filthy, Counter-attack",
  ak: ["Die Eidechse schlägt mit der Zunge nach dir oder schleudert mit dem Schwanz Schutt. Reagiere mit Ausweichen.",
    "Die Eidechse wartet aufmerksam auf deinen nächsten Zug und schlägt dann zu. Reagiere mit Einsicht.",
    "Die Eidechse springt auf dich. Reagiere mit Athletik.",
    "Die Eidechse zwingt dich, ihrem Schwanz auszuweichen. Reagiere mit Anmut.",
    "Die Eidechse schüttelt den Schwanz und wirbelt eine Staubwolke auf, dann springt sie plötzlich zu. Reagiere mit Vorsicht.",
    "Die Eidechse versucht, deine Arme zu zerfleischen. Reagiere mit Geschick."],
  tx: ["Obwohl sie große Reptilien sind, sind Eidechsen unglaublich flink und können mit größter Leichtigkeit Wände entlanglaufen. Sie stammen aus der Kashab-Wüste, wo manche sie sogar als Reittiere nutzen, kommen aber im ganzen House vor."],
  zg: [["Tail Whip", "Ein schneller Schwanzhieb. " + FALL],
    ["Getaway", "Die Eidechse wirft ihren Schwanz ab und rennt davon. Eine Figur, die noch nicht an der Reihe war, darf einen Reaktionswurf auf Ermittlung + Straße ablegen, um den Trick zu bemerken. Gelingt er, kann sie wählen, ob sie den Kampf wieder aufnimmt oder die Eidechse entkommen lässt. Misslingt er, werden alle Verwirrt, und die Eidechse entkommt."]]});

G("g-ratte", "Ratte", 291, {typ: "critical", lv: 3, st: 9, cr: [3, 6],
  mv: "Tail Whip, dann Rage", tr: "Beast, Huge, Double Trouble, Filthy", ot: "Triple Threat, Counter-attack",
  ak: ["Die Ratte greift dich mit Reißzähnen und Klauen an. Reagiere mit Kampf.",
    "Die Ratte schmettert dich gegen den Boden oder die Wand. Reagiere mit Stärke.",
    "Die Ratte versucht wütend, dich zu zerbeißen. Reagiere mit Geschick.",
    "Die Ratte peitscht mit Schwanz und Klauen durch die Luft, du musst Deckung suchen. Reagiere mit Ermittlung.",
    "Die Ratte fletscht die Zähne und schlägt dann mit dem Schwanz zu. Reagiere mit Einsicht.",
    "Die Ratte stößt furchterregendes Knurren und Quieken aus. Reagiere mit Wille."],
  tx: ["Ratten sehen aus wie riesig überwucherte Mäuse mit langen, muskulösen Schwänzen, haben aber sehr wenig mit ihren edlen Cousins gemein. Anders als Mäuse jagen Ratten Littlings und lassen sich nicht abrichten, mit Ausnahme einiger zahmerer Rassen. Diese Tiere sind eine echte Plage für Jäger, denn sie bedrohen das natürliche Gleichgewicht jedes Jagdreviers, das sie erreichen. Man weiß, dass sie auf der Suche nach Nahrung manchmal sogar in Städte vordringen."],
  zg: [["Tail Whip", "Ein schneller Schwanzhieb droht die Figuren umzuwerfen. " + FALL],
    ["Rage", "Das Fell auf dem Rücken der Ratte sträubt sich, während sie faucht. Von nun an erhalten Figuren −1 auf alle Aktionswürfe zum Angriff."]]});

G("g-grossespinne", "Große Spinne", 292, {typ: "critical", lv: 4, st: 9, cr: [2, 5, 7, 9],
  mv: "Cobweb Volley (oder Slam), dann Pile On, dann Cobweb Volley (oder Slam), dann Pile On", tr: "Beast, Huge, Double Trouble", ot: "Triple Threat, Hardened Shell, Cobweb, Venomous, Filthy, Counter-attack, Unreachable",
  bild: ["grundbuch-s292-anhang-i-opponents", 260],
  ak: ["Die große Spinne greift von oben mit ihren Beinen an. Reagiere mit Ausweichen.",
    "Die große Spinne wütet herum und löst einen Einsturz aus, du musst Deckung suchen. Reagiere mit Ermittlung.",
    "Die große Spinne greift dich mit ihren Vorderbeinen an. Reagiere mit Kampf.",
    "Die große Spinne löst ein Beben oder einen kleinen Einsturz aus. Reagiere mit Anmut.",
    "Die große Spinne kreist um dich und versucht, euch mit dem Rücken zur Wand zu drängen. Reagiere mit Vorsicht.",
    "Die große Spinne starrt dich mit ihren zu vielen Augen und klickenden Kieferklauen an. Reagiere mit Wille."],
  tx: ["Als wären gemeine Spinnen nicht genug, beherbergt das House auch zu viele große Spinnen, die sich in ihren Bauen in den Inbetweens verstecken.", "Tarantel (Cobweb, Venomous) sind riesige, haarige Spinnentiere, die durch die Lande der Horde streifen und sich mit den rostigen Wänden des Basement tarnen. Wolfsspinnen (Hardened Shell, Counter-attack) sind dagegen ungewöhnlich starke Tiere. Zum Glück spinnen sie wenigstens keine Netze. Sie leben nur in Pinewood und in Pilzwäldern, wo sie gern tödliche Hinterhalte legen."],
  zg: [["Cobweb Volley", "In rascher Folge nimmt die Spinne alle Figuren mit ihrem Spinnweb ins Visier. " + WEB],
    ["Slam", "Die Spinne rammt die Figuren mit ihrem riesigen Körper. " + SLAM], PILE]});

G("g-sporn", "Sporn-Hundertfüßer", 294, {typ: "critical", lv: 4, st: 9, cr: [3, 6, 8],
  mv: "Encircle, dann Slam, dann Spiral", tr: "Beast, Huge, Double Trouble, Shield, Venomous, Crawling", ot: "Triple Threat, Hardened Shell, Counter-attack, Unreachable",
  bild: ["grundbuch-s294-anhang-i-opponents", 200],
  ak: ["Der Sporn-Hundertfüßer schlängelt sich um dich und versucht, dich zu umschlingen. Reagiere mit Ausweichen.",
    "Der Sporn-Hundertfüßer sticht mit einer Unzahl spitzer Beine nach dir. Reagiere mit Kampf.",
    "Der Sporn-Hundertfüßer wütet herum und löst ein kleines Erdbeben aus. Reagiere mit Anmut.",
    "Der Sporn-Hundertfüßer kreist um dich und springt plötzlich zu. Reagiere mit Vorsicht.",
    "Der Sporn-Hundertfüßer stößt einen schrecklichen, ohrenbetäubenden Schrei aus. Reagiere mit Wille.",
    "Der Sporn-Hundertfüßer löst einen Einsturz aus, du musst Deckung suchen. Reagiere mit Ermittlung."],
  tx: ["Der Sporn-Hundertfüßer ist eine besonders große Hundertfüßer-Art, gekennzeichnet durch schwarze, undurchsichtige Farbe und harte Sporne an den Beinen. Diese riesigen Tiere sind zum Glück schwer zu finden, denn sie bauen ihre Nester nur in den Tiefen der Inbetweens und an einigen der gefährlichsten Orte des House."],
  zg: [["Encircle", "Der Hundertfüßer kriecht in einem Wirbel um die Gruppe. Alle Figuren erhalten −1 auf ihren nächsten Reaktionswurf."],
    ["Slam", "Der Hundertfüßer rammt die Figuren mit voller Wucht. " + SLAM],
    ["Spiral", "Der Hundertfüßer rollt sich zu einer Spirale zusammen. Alle Figuren erhalten −1 auf ihren nächsten Aktionswurf."]]});

G("g-orbweaver", "Goldseiden-Radnetzspinne", 298, {typ: "critical", lv: 5, st: 13, cr: [2, 4, 6, 8, 11],
  mv: "Cobweb Volley, dann Cobweb Volley, dann Lash, dann Cobweb Volley, dann Lash", tr: "Beast, Huge, Triple Threat, Golden Cobweb, Unreachable, Venomous",
  bild: ["grundbuch-s298-anhang-i-opponents", 150],
  ak: ["Die Spinne huscht die Wand entlang und lässt ihr Netz beben. Reagiere mit Anmut.",
    "Die Spinne schlägt schnell mit ihren Beinen nach dir. Reagiere mit Geschick.",
    "Die Spinne verschwindet für ein paar Sekunden … und springt dann aus dem Nichts hervor. Reagiere mit Vorsicht.",
    "Die Spinne springt auf dich. Reagiere mit Athletik.",
    "Die Spinne huscht um dich herum. Dann greift sie an. Reagiere mit Einsicht.",
    "Die Spinne schleudert ein Spinnwebgeschoss auf dich. Reagiere mit Ausweichen −1."],
  tx: ["Die Goldseiden-Radnetzspinne ist ein exotisches Tier, das am Tag von Samhain den Sluagh aus dem Farbeyond ins House gefolgt ist. Ihren Namen verdankt sie ihrer Fähigkeit, ein extrem hartes Netz zu spinnen, das wie ein goldenes Netz aussieht. Diese äußerst seltenen Spinnen bleiben gern verborgen und greifen Littlings aus der Ferne an, während sie sich an ihren Netzen festhalten. Die berühmteste Radnetzspinne des House ist Mammon, eine Spinne, die den Goldthirst-Vertrag anbieten kann."],
  zg: [["Cobweb Volley", "In rascher Folge nimmt die Spinne alle Figuren mit ihrem Spinnweb ins Visier. Figuren, die keinen kritischen Reaktionswurf auf Ausweichen + Krieg bestehen, sind gefangen. Siehe den Trait Golden Cobweb."],
    ["Lash", "Die Spinne schüttelt ihr Netz. " + FALL]]},
  [K("Goldseidenweste", ["Wer eine Goldseiden-Radnetzspinne besiegt, kann aus ihrem kostbaren Netz eine glänzende, widerstandsfähige Weste fertigen lassen.", "Doch nicht alles, was glänzt, ist Gold, und nur die Goldseide, die noch nicht gewebt wurde, hat Wert, jene, die man direkt aus dem Tier gewinnt. Den glänzenden Sack mit dieser kostbaren Seide zu entfernen, braucht Zeit, und sein Transport erfordert äußerste Vorsicht, denn schon der kleinste Riss könnte ihn ruinieren.", "Ein fähiger Schneider verlangt 10 Münzen und einen Monat, um die glänzenden Fäden in eine maßgeschneiderte Duellweste zu verwandeln. Dieses Kleidungsstück, bestickt wie Spinnweben, glänzt wie Gold.", "Die Goldseidenweste gewährt die Vorteile von Partial Cover, ohne dessen Erschwernisse."])]);

G("g-netzwerfer", "Netzwerferspinne", 299, {typ: "critical", lv: 5, st: 15, cr: [5, 10, 15],
  mv: "Cobweb Trap, dann Cobweb Trap, dann Pile On", tr: "Beast, Huge, Triple Threat, Cobweb, Venomous, Nimble, Counter-attack",
  bild: ["grundbuch-s299-anhang-i-opponents", 220],
  ak: ["Die Spinne kracht in dich hinein und versucht, dich zu Boden zu drücken. Reagiere mit Stärke.",
    "Die Spinne greift mit ihren langen Beinen an. Reagiere mit Kampf.",
    "Die Spinne verschwindet in der Dunkelheit und stürzt sich dann auf dich. Reagiere mit Vorsicht −1.",
    "Die Spinne rennt auf dich zu und springt dann auf dich. Reagiere mit Athletik.",
    "Die Spinne schlägt im Vorrücken wiederholt zu. Reagiere mit Geschick.",
    "Die Spinne schleudert Spinnwebgeschosse auf dich. Reagiere mit Ausweichen."],
  tx: ["Die Netzwerferspinne ist schlank und lautlos. Sie hat die schreckliche Angewohnheit, aufwendige, auf Littlings zugeschnittene Fallen zu legen. Diese Tiere sind die Ursache vieler rätselhafter Verschwinden in den entlegensten Winkeln des House. Sie können Netze weben, die wie Fangnetze aussehen, und halten sie in den Vorderbeinen, um ihre Beute plötzlich einzuhüllen. Die berühmteste Spinne dieser Art ist der Fog Giant aus Pinewood, ein Geschöpf, so leise, dass es sogar einen Neverheard-Vertrag gewähren kann."],
  zg: [["Cobweb Trap", "Die Spinne webt ein Spinnennetz und fängt damit die Figuren. Figuren, die keinen extremen Reaktionswurf auf Vorsicht + Krieg bestehen, sind gefangen. Siehe den Trait Cobweb."], PILE]});

G("g-riesenhf-schwanz", "Riesenhundertfüßer: Der Schwanz", 300, {typ: "critical", lv: 5, st: 12, cr: [2, 4, 6, 8, 10, 12],
  mv: "Encircle, dann Slam, dann Slap, dann Slam, dann Slap, dann Things Get Serious", tr: "Beast, Giant, Double Trouble, Crawling, Counter-attack, Venomous",
  bild: ["grundbuch-s300-301-anhang-i-opponents-ganz", 420],
  ak: ["Der Hundertfüßer löst mit seinem Schwanz einen Einsturz aus, du musst Deckung suchen. Reagiere mit Ermittlung.",
    "Der Hundertfüßer schwingt seinen Schwanz hin und her. Reagiere mit Vorsicht.",
    "Der Hundertfüßer schüttelt seinen Schwanz und löst ein Erdbeben aus. Reagiere mit Anmut.",
    "Der Hundertfüßer holt mit seinem Schwanz nach dir aus. Reagiere mit Athletik −1.",
    "Der Hundertfüßer schüttelt seinen Schwanz, der mit giftigen Beinen besetzt ist. Reagiere mit Wille.",
    "Der Hundertfüßer schlängelt sich um dich und versucht, dich mit seinem Schwanz zu umschlingen. Reagiere mit Ausweichen."],
  zg: [["Encircle", "Der Riesenhundertfüßer kriecht in einem Wirbel um die Gruppe. Alle Figuren erhalten −1 auf ihren nächsten Reaktionswurf."],
    ["Slam", "Der Riesenhundertfüßer rammt seinen Schwanz mit Wucht gegen die Figuren. " + SLAM],
    ["Slap", "Ein kräftiger Schwanzhieb schleudert die Figuren fort. Figuren, die keinen kritischen Reaktionswurf auf Vorsicht + Krieg bestehen, werden entwaffnet und aus dem Kampf geworfen. Sie brauchen einen ganzen Zug, um in den Nahkampf zurückzukehren."],
    ["Things Get Serious", "Den Figuren ist es gelungen, den Riesenhundertfüßer so weit zu verwunden, dass er wütend wird. Der Riesenhundertfüßer stürzt sich auf sie, bereit, mit voller Kraft zu kämpfen. Figuren, die keinen extremen Reaktionswurf auf Wille + Krieg bestehen, werden Verängstigt und erhalten −1 auf ihren nächsten Wurf. Dann weiter zum Riesenhundertfüßer."]]});

G("g-riesenhf", "Riesenhundertfüßer", 301, {typ: "extreme", lv: 0, st: 4, cr: [3],
  mv: "Grand Slam", tr: "Beast, Giant, Crawling, Venomous",
  ak: ["Der Hundertfüßer umschlingt dich mit seinen Windungen. Reagiere mit Stärke.",
    "Der Hundertfüßer greift dich mit seinen vielen Hakenbeinen an. Reagiere mit Kampf.",
    "Der Hundertfüßer packt dich mit seinen vielen Beinen an Armen und Beinen. Reagiere mit Geschick −1.",
    "Der Hundertfüßer wütet herum, sodass Schutt und Staub herabfallen. Reagiere mit Vorsicht.",
    "Der Hundertfüßer sieht dich mit leerem Blick an und stürzt sich dann auf dich. Reagiere mit Einsicht.",
    "Der Hundertfüßer versucht, dich mit seinen Windungen einzukreisen. Reagiere mit Ausweichen."],
  tx: ["Der Riesenhundertfüßer hat seinen Namen zu Recht, denn er ist eines der größten Geschöpfe im ganzen House. Er bewohnt normalerweise die feuchten Tiefen der Inbetweens, doch es gab Sichtungen von Riesenhundertfüßern in Dreadwood und in der Kashab-Wüste, eine alarmierende Nachricht, die viele Gelehrte zusammenbrachte, um nach einer Lösung zu suchen. Bisher wurde keine gefunden. Sich diesem Hundertfüßer zu stellen ist ein irrsinniges Unterfangen, das nur Jäger reizt, die starke Gefühle oder das Gefühl, zerkaut zu werden, wirklich lieben. Riesenhundertfüßer haben mehr Beine, als irgendjemand zählen kann, wahrscheinlich mehr, als ein Lebewesen vernünftigerweise am Körper haben sollte, und sie benutzen sie alle, um bösartig anzugreifen. Falls du dich fragst: Jedes dieser Beine tropft natürlich vor Gift.", "Der berühmteste Riesenhundertfüßer des House ist der „kleine“ Bismilla, der aus dem Zoologischen Garten von Viscount Protopopolov entkam. Dieses Tier ist so eingebildet, dass es die Macht hat, den Vainglory-Vertrag zu gewähren."],
  zg: [["Grand Slam", "Der Riesenhundertfüßer stürmt mit seinem riesigen Körper gewaltsam gegen die Figuren. Figuren, die keinen extremen Reaktionswurf auf Athletik + Krieg bestehen, werden Verletzt. Sind sie bereits Verletzt, werden sie Gebrochen."]]});

G("g-jagdspinne-beine", "Jagdspinne: Die Beine", 302, {typ: "critical", lv: 0, st: 12, cr: [3, 6, 9, 12],
  mv: "Stomp, dann Stomp, dann Stomp, dann Things Get Serious", tr: "Beast, Giant, Double Trouble, Cobweb, Venomous, Shield",
  bild: ["grundbuch-s302-anhang-i-opponents", 240],
  ak: ["Die Spinne stampft mit den Beinen und löst ein Beben oder einen Einsturz aus. Reagiere mit Anmut.",
    "Die Beine der Spinne schlagen wild um sich und lösen einen Einsturz aus, du musst Deckung suchen. Reagiere mit Ermittlung −1.",
    "Die Spinne trifft dich mit ihren Beinen und versucht, dich zu Boden zu drücken. Reagiere mit Stärke.",
    "Die Spinne greift mit ihren langen Beinen an. Reagiere mit Kampf.",
    "Die Spinne tritt dich mit ihren Beinen fort. Reagiere mit Athletik.",
    "Die Spinne versucht, dich durch schnelle Bewegungen ihrer Beine zu zerquetschen. Reagiere mit Ausweichen."],
  zg: [["Stomp", "Eines der riesigen Beine der Jagdspinne fällt auf die Figuren. " + FALL],
    ["Things Get Serious", "Den Figuren ist es gelungen, die Jagdspinne so weit zu verwunden, dass sie wütend wird. Die Jagdspinne stürzt sich auf sie, bereit, mit voller Kraft zu kämpfen. Figuren, die keinen extremen Reaktionswurf auf Wille + Krieg bestehen, werden Verängstigt und erhalten −1 auf ihren nächsten Wurf. Dann weiter zur Jagdspinne."]]});

G("g-jagdspinne", "Jagdspinne", 303, {typ: "extreme", lv: 5, st: 4, cr: [3],
  mv: "Cobweb Storm", tr: "Beast, Giant, Venomous, Filthy, Counter-attack",
  ak: ["Die Spinne starrt dich von oben mit ihren tausend Knopfaugen an. Reagiere mit Wille.",
    "Die Spinne greift dich mit allen Beinen an. Reagiere mit Kampf −1.",
    "Die Spinne schleudert Spinnwebgeschosse auf dich. Reagiere mit Ausweichen.",
    "Die Spinne schlägt im Vorrücken wiederholt zu. Reagiere mit Geschick.",
    "Die Spinne wirft sich mit ihrem ganzen Gewicht auf dich. Reagiere mit Stärke.",
    "Die Spinne versucht, dich zwischen ihren Beinen einzufangen. Reagiere mit Vorsicht."],
  tx: ["Schon der Name „Jagdspinne“ macht eines klar: Nichts jagt diese Geschöpfe. Falls du dennoch Zweifel hattest: Sie sind Dutzende und Aberdutzende winzige Meter hoch, und ihre Beine sind so lang, dass sie mühelos über Häuser steigen, als wären es nichts.", "In den Landen der Horde und der Free Dominions musst du, wenn du sicher nie Beute dieser Spinnen werden willst, besonders darauf achten, dich nie in die feuchteren Winkel der Inbetweens oder zwischen hohe Pilze zu wagen. Schließlich weiß jeder, dass diese Spinnen die Angewohnheit haben, völlig reglos zu stehen, mit ihren langen Beinen als Pilzstiele getarnt, nur um ihren Griff um die unglücklichen Geschöpfe zu schließen, die zwischen sie treten.", "Die grausamste und gewalttätigste aller Jagdspinnen und möglicherweise das skrupelloseste Geschöpf des House ist Xerxes, auch Sunset Devil genannt. Dieses legendäre Monster hat seine Brutstätte in den Tiefen der Kashab-Wüste und ist mächtig genug, einen Wallstrider-Vertrag zu gewähren."],
  zg: [["Cobweb Storm", "Die Jagdspinne webt ein riesiges Netz, das alles bedeckt. Figuren, die keinen extremen Reaktionswurf auf Ermittlung + Krieg bestehen, finden nicht rechtzeitig Deckung und sind gefangen. Siehe den Trait Cobweb."]]},
  [K("Black-Husk-Rüstung", ["Littlings, die tapfer genug sind, eine Jagdspinne zu erlegen, können aus ihrem kostbaren Panzer eine einzigartige schwere Rüstung schmieden lassen.", "Den Panzer aus dem Kadaver des Tieres zu lösen, ist eine komplizierte Operation, die mehrere Stunden und ruhige Hände erfordert. Ist er einmal entfernt, ist er so groß und schwer, dass man einen Karren oder eine Kutsche braucht, um ihn zu bewegen. Bringst du den Panzer zu einem Rüstungsschmied, verlangt er 10 Münzen und einen Monat Zeit, um ein einzelnes maßgefertigtes Rüstungsset herzustellen.", "Die Black-Husk-Rüstung gewährt alle Vorteile schwerer Rüstung, ohne deren Erschwernisse."])]);

H["haus/sl/gegner"] = (H["haus/sl/gegner"] || []).concat(A);
})();
