window.HT_GEGNER = window.HT_GEGNER || [];
window.HT_GEGNER_INFO = window.HT_GEGNER_INFO || {};

HT_GEGNER_INFO.einleitung = [
  "Nachfolgend findest du eine kurze Liste typischer (und weniger typischer) Gegner, denen Spielercharaktere im Heart begegnen können. Alle von ihnen wollen etwas, und meistens ist das nicht ein Kampf auf Leben und Tod; die Spieler sollten ermutigt werden, mit Gegnern zu verhandeln, ihnen auszuweichen oder sie anderweitig zu überwinden, ohne zu kämpfen. Denk daran: Ein einziger Leichter Fallout kann leicht einen Angriff auslösen – lass die Spieler also ihre eigenen Fehler machen."
];

HT_GEGNER_INFO.stat = [
  "Jeder Gegner ist nach seiner Hauptbeschreibung in eine Reihe von Werten und Anmerkungen aufgeschlüsselt.",
  {t:"p", k:"Namen", x:"sind eine Handvoll Beispielnamen, die der Gegner tragen könnte. Besonders nützlich, wenn zwei oder drei von ihnen gleichzeitig auf die Spieler treffen, damit du sie leicht auseinanderhalten kannst."},
  {t:"p", k:"Beschreibungen", x:"(Descriptors) sind Dinge, die der Gegner tut, wenn er entdeckt wird, oder körperliche Eigenheiten, die beim Rollenspiel helfen."},
  {t:"p", k:"Motivation", x:"eines Gegners ist eine grobe Vermutung, was er gerade tun will. Die meisten Gegner lassen sich ausnutzen, indem man ihre Motivation als Druckmittel verwendet."},
  {t:"p", k:"Schwierigkeit", x:"eines Gegners ist entweder Standard (würfle normal), Riskant (entferne nach dem Wurf den höchsten Würfel) oder Gefährlich (entferne nach dem Wurf die zwei höchsten Würfel)."},
  {t:"p", k:"Resistenz", x:"– je höher sie ist, desto zäher ist der Gegner. Wenn Spielercharaktere einem Gegner Stress zufügen, wird er von dessen Resistenz abgezogen. Bei 0 ist der Gegner dir auf Gedeih und Verderb ausgeliefert."},
  {t:"p", k:"Schutz", x:"(Protection) wird von jedem eingehenden Stress abgezogen."},
  {t:"p", k:"Ressourcen", x:"sind etwas Wertvolles, das der Gegner bei sich tragen oder bewachen könnte."},
  {t:"p", k:"Ausrüstung", x:"zeigt, wie viel Schaden der Gegner anrichtet, wenn er einen Spielercharakter verletzt. Manche Ausrüstung (Waffen, Werkzeuge usw.) können Spielercharaktere an sich nehmen und benutzen, andere (Klauen, Zähne) nicht."},
  {t:"p", k:"Besonderes", x:"(Special) umfasst alle einzigartigen Regeln oder Absonderlichkeiten des Gegners."},
  {t:"p", k:"Domains", x:"sind jene, die am engsten mit dem Gegner verbunden sind, aber sie sind keine strikte Festlegung, wo er angetroffen werden kann."},
  {t:"p", k:"Fallout", x:"führt Fallout-Ergebnisse auf, die für diesen Gegnertyp besonders sind. Der SL kann sie anstelle der Standardergebnisse verwenden, wenn ein Spieler während einer Begegnung Fallout erleidet."}
];

HT_GEGNER_INFO.eigene = [
  {t:"h", x:"Eigene Gegner erschaffen"},
  "Die Gegner in diesem Kapitel sind keineswegs ein vollständiges Bestiarium der Menschen und Kreaturen der Stadt Darunter. Du bist ausdrücklich eingeladen, nach Belieben eigene Gegner zu erschaffen, um deine Spielergruppe zu jagen und zu quälen. Ein schneller Weg: Such dir einen bestehenden Gegner aus, der dir gefällt, und ändere die Beschreibung.",
  "Alternativ solltest du, sobald du ein paar Einträge dieses Kapitels gelesen hast, Werte für ganz eigene Schöpfungen festlegen können. Dafür gibt es keine besonderen Regeln – such einfach aus, was sich richtig anfühlt, wirf es den Spielern vor und passe Dinge spontan an, wenn es nicht funktioniert."
];

HT_GEGNER_INFO.mobs = [
  {t:"kasten", h:"Optionale Regel: Mobs", b:[
    "Stehen viele Gegner den Spielercharakteren gegenüber und du willst nicht mehrere verschiedene Resistenzen verfolgen, multipliziere einfach die Basisresistenz eines Gegners mit der ungefähren Anzahl der Gegner in der Gruppe. Wenn die Spieler gemeinsam Stress in Höhe der Basisresistenz zufügen, wird einer der Gegner außer Gefecht gesetzt.",
    "Willst du ein actionlastigeres Heart-Spiel, halbiere einfach die Resistenzen und den Schutz jeder Kreatur und stecke sie in Mobs von etwa fünf."
  ]}
];

HT_GEGNER.push({
  id:"engel", t:"Engel", q:"core", p:176, legendaer:false,
  text:[
    "Sie sind rot und furchtbar und mächtig. Sie bringen Wachträume von Chaos und Auslöschung mit sich, ein kreischendes, schabendes Lied aus Rost und Asche. Die Engel des Heart, wie die Bewohner des Ortes sie nennen, sind glücklicherweise selten.",
    "Wenn die kosmische Intelligenz im Zentrum der Stadt Darunter etwas schnell und ohne Feingefühl erledigt haben will, erschafft sie einen und schickt ihn mit einem bestimmten Auftrag aus: die Zerstörung eines Haven, der sich wertvollen Ressourcen in den Weg stellt, die Rache für den Tod eines geliebten Geschöpfs, die Rückholung von etwas, das ihr genommen wurde, und so weiter.",
    "Wenn sie einen Bereich betreten, verwandelt er sich in eine unwirkliche Landschaft. Wände pulsieren und sondern Zwischengewebsflüssigkeit ab, das Geräusch knirschender Zähne übertönt jeden vernünftigen Gedanken, und auf jeder verfügbaren Oberfläche erblühen Augen."
  ],
  namen:"Crimsonian, Vulperine, Theolosian (jeder, der einen Engel erblickt, kennt seinen Namen instinktiv; er kann ihn sogar nicht vergessen)",
  besch:"Ein Geräusch wie reißendes Fleisch und kreischender Knorpel; Nasse rote Bänder, die sich zu einer langgezogenen menschlichen Gestalt zusammenballen und umeinanderwirbeln; Eine regungslose Statue aus Knochen mit schwebenden Masken, die schimmern und sich neu formen, während sie spricht.",
  motiv:"Jeder Engel wird für ein bestimmtes Ziel erschaffen und kann nichts begreifen, was nicht sein Ziel ist. Manchmal können sie ihren Auftrag nicht erfüllen und ihre Programmierung bricht zusammen, was sie noch unergründlicher macht.",
  schw:"Gefährlich",
  res:"20",
  schutz:"Gleich der Tiefe, auf der sie angetroffen werden. PIERCING-Waffen überwinden das nicht.",
  resX:"Wird die Resistenz eines Engels auf 0 reduziert, kann er sich nicht mehr bewegen oder handeln; während sein Fleisch rasch verwest, wird er in irgendeinem fernen steinernen Schoß neu geboren.",
  ressourcen:"Glückshaube (Caul) (W12, Occult; wenn du sie trägst, behandeln dich Heartsblood-Kreaturen wie Verwandte)",
  ausr:"Auslöschende Hände (Schaden W10, Piercing)",
  besonders:"Wenn du einen bestimmten Engel zum ersten Mal siehst, würfle Endure+Cursed und markiere bei einem Misserfolg W10 Stress auf Mind.",
  dom:["Cursed","Occult"],
  domx:"Engel können aber in jeder Domain gefunden werden, wenn ihre Mission sie dorthin führt, und wenig kann sie aufhalten.",
  fallout:[]
});

HT_GEGNER.push({
  id:"lastenautomat", t:"Lastenautomat", q:"core", p:176, legendaer:false,
  text:[
    "Obwohl diese mechanischen Kreaturen in vielen Varianten vorkommen, ist die häufigste Bauart ein kopfloses vierbeiniges Packtier. Aus Material, das in den zerbrochenen alternativen Realitäten des Vermissian aufgelesen wurde (und aus noch seltsameren Maschinen, die tiefer unter der Erde vergraben sind), können die Erschaffer dieser Geräte ihnen durch okkulte Rituale grundlegende Intelligenz einhauchen. Manche tragen den Geist eines Pferdes oder Ochsen in sich, aber solche Tiere sind im Heart schwer zu bekommen. Stattdessen müssen sich die Konstrukteure mit Ersatz behelfen: den vereinten Intelligenzen von zwanzig Tauben vielleicht oder einem der Aasschweine, die die Siedlungen der Stadt Darunter plagen.",
    "Diese Automaten folgen ihren Besitzern und tragen deren Habe, deshalb sind sie bei den Reclaimern beliebt, die sich auf der Suche nach Schätzen oder verkäuflichem Schrott in die Tiefen des Vermissian graben. Meist sieht man sie über eine Kette oder ein Seil an ihren Herrn gebunden, doch manche erkennen in den Boden gestempelte Sigillen: Indem ein Reclaimer ein einzigartiges Symbol in das untere Ende seines Stabs ritzt, kann er beim Gehen einen Pfad für seinen Automaten markieren. Einige ältere Händler reiten auf ihnen, im Schneidersitz auf dem Rücken, umgeben von schwarzen Kerzen, und klopfen mit einem Stock vor dem Tier, damit es dem Geräusch folgen kann.",
    "Gelegentlich irren Automaten von ihrem Besitzer fort oder ihr Besitzer stirbt und lässt sie herrenlos zurück. Diese sind hochbegehrte Schätze, und Gerüchte über klapprige Konstrukte, die beladen mit verlorenen Reichtümern durch die Stadt rumpeln, sind in Tavernen und Drogenhöhlen im ganzen Heart beliebt."
  ],
  namen:"Bessie, Vyssos 3-X, Wrench",
  besch:"Dreimal repariert, mit Beinen unterschiedlicher Länge und Holzverkleidung; Beherbergt einen tragbaren Schrein des Mondes Darunter und zieht Weihrauch hinter sich her; Von elenden Pitchkin gestohlen und für Spritztouren missbraucht.",
  motiv:"Ihrem Herrn so zu folgen, wie sie programmiert wurden, und Schaden zu vermeiden.",
  schw:"Standard",
  res:"10",
  schutz:"0*",
  resX:null,
  ressourcen:"Panische Tierintelligenz (W6, Occult); Ersatzteile (W8, Technology).",
  ausr:"Staksige Beine (Kill W4)",
  besonders:"* Schutz 0, es sei denn, ihr Besitzer hat sie auf 1 oder 2 verstärkt. Wenn du einen Lastenautomaten erwirbst, funktioniert er als (Delve W6)-Gegenstand.",
  dom:["Technology"],
  fallout:[]
});

HT_GEGNER.push({
  id:"die-verderbten", t:"Die Verderbten", q:"core", p:178, legendaer:false,
  text:[
    "Es gibt einen Parasiten, der Bäumen die Gabe des Erwachens schenkt und sie dem Wahnsinn verflucht. Er gräbt und eitert tief im Holz und verändert die Biologie des Baumes, sodass er sich auf knarrenden, erdverkrusteten Beinen aus Wurzel und Rinde bewegen kann. Sie können so schnell denken wie die kurzlebigen Geschöpfe, die in den Wäldern ihrer Heimat um sie herumschwirren.",
    "Aber der Parasit ist hungrig und frisst das Holz des Baumes, in dem er lebt. Exemplare haben Risse in der Rinde, gesäumt von sich windenden fleischigen Wucherungen, wo er sie zerfressen hat. Der Baum spürt das zunächst als Reizung, doch wenn der Parasit an Macht und Masse zunimmt, steigert sie sich zu einem überwältigenden, unkratzbaren Juckreiz, der den Baum in den Wahnsinn treibt.",
    "Der einzige Weg, den Juckreiz zu stoppen, ist, dem Parasiten etwas anderes zu fressen zu geben, und selbst das ist nur vorübergehend. Pflanzenmaterial wirkt nicht schnell genug, und die Bäume wollen keine weitere Infektion riskieren; also jagen und töten sie andere Kreaturen und pressen die Leichen gegen ihre eiternden Wunden, um das rasende Gefühl ein wenig zu beruhigen. Jene, die am längsten infiziert sind, schlurfen mit ihren aufgespießten Beutetieren in den oberen Ästen durch die Wälder, halten gelegentlich inne, reißen sich ein verrottendes Glied ab und halten es gegen sich, während sie sich sichtbar entspannen.",
    "Wenn die Bäume ihre Beute nicht sofort verzehren, erlangen sie durch den Parasiten ein gewisses Maß an Kontrolle über das Fleisch. Hände können greifen und hantieren; grauenhafterweise können Gesichter mit den Stimmen ihrer ursprünglichen Besitzer sprechen. Ein Verderbter, der es geschafft hat, durch einen gestohlenen Mund sprechen zu lernen, ist selten und fungiert als Betreuer für andere, weniger glückliche infizierte Bäume.",
    "Wären die Verderbten nicht alle wahnsinnig, könnten sie vielleicht eine Kultur bilden und irgendwie mit den anderen Bewohnern des Heart kommunizieren; in den Momenten, in denen sich ihr Geist genug beruhigt, erkennen sie manchmal das Grauen dessen, was sie tun. Doch die Klarheit hält nicht lange an, und sie bringt eine Schuld mit sich, die so schlimm ist wie der Juckreiz selbst."
  ],
  namen:"Sie haben keine und verstehen auch nicht wirklich, was Namen sind. Dinge werden nach ihrem geografischen Ort bezeichnet statt mit einem eigenen Namen; wo du bist, das bist du.",
  besch:"Trägt ein zuckendes Reh in den oberen Ästen und lässt das Blut über seine Wunden laufen; Versucht verzweifelt, still zu stehen, inmitten eines Wäldchens im Hinterhalt; Wiegt eine Leiche an seiner „Brust“, während der Parasit sie verzehrt.",
  motiv:"Den Juckreiz zum Aufhören zu bringen.",
  schw:"Standard",
  res:"10",
  schutz:"4*",
  resX:null,
  ressourcen:"Parasitenproben (W8, Cursed, Dangerous); Verschiedene Ausrüstung und Knochen seiner Opfer (W6, Haven, Wild).",
  ausr:"Aufspießende Äste (W8)",
  besonders:"* Schutz 4 gegen Waffen, die keine Bäume fällen können. Feuer fügt den Verderbten doppelten Stress zu.",
  dom:["Wild"],
  fallout:[]
});

HT_GEGNER.push({
  id:"die-blutgeweihten", t:"Die Blutgeweihten", q:"core", p:179, legendaer:false,
  text:[
    "Das Heart verändert Menschen geistig und körperlich. Die verschwimmende Welt der Stadt Darunter verschmiert Körper und Seelen der Bewohner zu seltsamen Mustern. Es kriecht in ihr Blut und gibt seinen Einfluss an ihre Nachkommen weiter, und Kinder, die mehrere Generationen tief geboren werden, können sehr sonderbar sein.",
    "Manche haben neue Sinnesorgane entwickelt: schwarze, kugelartige Augen, die die Berührung des Heart wahrnehmen können, oder borstige Haare, die den Wind schmecken und sich auf ihren Unterarmen aufstellen. Manche werden mit Muttermalen geboren, die sich im Laufe ihres Lebens zu Schrift verformen und wandeln; manche haben Fingernägel aus organischem Glas oder spiralförmige Hörner aus Knochen, die sich von der Stirn winden.",
    "Noch seltsamer: Das Heart verwischt die Grenzen zwischen Fleisch und Nicht-Fleisch, zwischen dem Individuum und dem Ort, und chirurgische Implantation ist auf Weisen möglich, die man in der Welt an der Oberfläche nie für denkbar hielte. Körperteile wie Finger, Augen und gelegentlich ganze Gliedmaßen können auf einen Spender gepfropft werden und behalten ihre Funktion (die Annahmerate ist überraschend hoch). Auch tierische Körperteile lassen sich verwenden, und je nach Heartsblood-Gehalt der Person können sogar anorganische Materialien wie Stein, umfunktionierte Maschinerie oder Kristall in einen Körper eingearbeitet und mit Empfindungsvermögen, wenn auch nicht Funktion, versehen werden. Wer mit Implantaten in die Welt an der Oberfläche reist, stellt fest, dass sein Körper sie abzustoßen beginnt, sobald er frei vom Einfluss des Heart ist.",
    "Je tiefer man ins Heart reist, desto mehr Blutgeweihte findet man. Viele von ihnen betrachten Delver als Eindringlinge, die in eine Welt stolpern, auf die sie keinen Anspruch haben, um ihre Geheimnisse zu plündern – und nicht ohne Grund. Es waren die vom Heart Veränderten, die die Hauptlast der ursprünglichen Expedition des 33., des Regiments, das später zu den Hounds werden sollte, trugen."
  ],
  namen:"Ganz normale Namen, vielleicht etwa fünfzig Jahre aus der Mode: Versellian, Xandrix, Sewain, Brimner",
  besch:"Lässt Reihen von Zähnen im Mund wachsen, die das Sprechen erschweren; Lauscht den singenden Kristallen, die in Brust und Schultern implantiert sind; Züchtet Pilze und raucht Nelkenzigaretten, die Reisende heruntergebracht haben.",
  motiv:"Im Heart in Frieden zu leben und nicht getötet zu werden, weil irgendein ahnungsloser Delver die Hölle entfesselt.",
  schw:"Standard",
  res:"6",
  schutz:"0*",
  resX:null,
  ressourcen:"Schmuck, Andenken und Wertsachen (W6). Ihre Körper oder Körperteile lassen sich als medizinische Kuriositäten verkaufen, doch die meisten Havens im Heart missbilligen das.",
  ausr:"Messer, Knüppel oder minderwertiges Schwert (W6); was auch immer an Fernwaffen sie auftreiben konnten (W8, Ranged, One-Shot)",
  besonders:"* Schutz 0 bei den meisten, doch jene, die sich dem Schutz des Heart verschrieben haben und auf einen Kampf vorbereitet sind, haben Schutz 2.",
  dom:["Wild","Cursed"],
  fallout:[]
});

HT_GEGNER.push({
  id:"ausgebrannter-okkultist", t:"Ausgebrannter Okkultist", q:"core", p:179, legendaer:false,
  text:[
    "Der Rausch der Macht kann einen nach mehr gieren lassen; Zauberei ist sicher ein leichter Weg, um zu bekommen, was man will, doch die borstige Berührung anderer Realitäten auf dem Geist kann den Wirker berauschen und verhexen. Von Gier getrieben, wahnsinnig und ohne andere Optionen, bilden diese verzweifelten Magier zänkische Banden und rauben oder töten verwundbare Reisende auf der Suche nach Fetzen magischer Macht – oder nach der Resonanz, die sie dem armen Individuum aus dem Blut pressen können.",
    "Die wahre Gefahr ist, dass einer dieser Elenden ein brauchbares Buch der Dämonologie in die Finger bekommt. Sie sind gerade klug genug, die Zauber zu wirken, und gerade verstrahlt genug, keine der gebotenen Vorsichtsmaßnahmen zu treffen. Mehr als ein Haven wurde in einem schillernden Flimmern ausgelöscht, als ein leichtsinniger Okkultist – willentlich oder nicht – eine Incursion erschuf. Die Hounds haben ein berechtigtes Interesse daran, dass das nicht wieder geschieht."
  ],
  namen:"Griz, Swent, Nox.",
  besch:"Trägt eine rissige Porzellanmaske, das letzte Überbleibsel seines Luxuslebens in der Stadt Darüber; Durchwühlt die Mülltonnen vor einer Kirche auf der Suche nach etwas mit einem vagen Hauch von Macht; Folgt einem Junk Mage mit ausgestreckten Händen und bettelt um Engelsfedern oder Automatenträume.",
  motiv:"Neue Zauber zu lernen; okkulte Ressourcen zu sammeln und zu inhalieren, um Magie zu wirken; high zu werden und seine Sorgen für eine Weile zu vergessen.",
  schw:"Standard",
  res:"6",
  schutz:"0",
  resX:null,
  ressourcen:"Fast nutzlose Fetzen okkulter Energie (W4, Occult)",
  ausr:"Schwarzmarkt-Schwarzmagie (Kill W8, Brutal, Ranged. Das kann dem Ziel Blood- oder Mind-Stress zufügen; der SL wählt.)",
  besonders:"Wenn ein Ausgebrannter Okkultist mit einem einzigen Wurf 7 oder mehr Stress zufügt, wird er durch die magische Rückkopplung außer Gefecht gesetzt.",
  dom:["Occult"],
  fallout:[]
});

HT_GEGNER.push({
  id:"schlaechter", t:"Schlächter", q:"core", p:180, legendaer:false,
  text:[
    "Das waren einst verzweifelte Menschen, die trotz der Warnlieder und Volksmärchen das verbotene Fleisch aßen, das an geheimen Orten wächst, feuchte pulsierende Wände bildet und mit lippenlosen Mündern lockt. Mit der Zeit machte es sie zu grauenhaften Kreaturen aus Verderbnis und Knochen.",
    "Sie sind leicht doppelt so groß wie ein Mensch, mit hageren, bleichen Gliedmaßen, die ihnen enorme Schnelligkeit und Kraft verleihen. Jeder verehrt die Höhle, von der er frisst, und alle sind hoffnungslos süchtig nach dem Heartsflesh. Sie schleppen Beute oder Teile davon zurück, um sie in die Wand zu drücken und zu ersetzen, was sie gegessen haben.",
    "Schlächter sind berüchtigt territorial und töten einander auf Sicht erbarmungslos."
  ],
  namen:"Sie haben keine Namen mehr; wenn sie sich aufeinander beziehen müssen, tun sie das über Position, Geruch und Taten.",
  besch:"Trägt mächtige Geweihe aus verrottendem Holz; Kratzt mit Steinen Symbole in Wände und Bäume; Kauert auf einem Felsen und stößt ein klagendes Heulen als Warnung an andere aus.",
  motiv:"Fleisch (möglichst lebendes) für seine Höhle zu holen.",
  schw:"Riskant",
  res:"10",
  schutz:"3",
  resX:null,
  ressourcen:"Schlächterinnereien (W6, begehrt zur Herstellung von Schutzsigillen); Geweih (W6–W10, je nach Zahl der Enden); Hinterlassenschaften der Opfer, wenn du ihre Höhle findest und mit dem Gestank fertigwirst (W8).",
  ausr:"Albtraumklauen (W10)",
  besonders:null,
  dom:["Wild","Warren","Cursed"],
  fallout:[{t:"Verschleppt", r:"Blood", s:"schwer", x:"Du bist verletzt, kannst dich nicht richtig bewegen und wirst durch die Dunkelheit geschleift, um in die Fleischwand gestoßen zu werden, die der Schlächter als stummen, idiotischen Gott verehrt."}]
});
