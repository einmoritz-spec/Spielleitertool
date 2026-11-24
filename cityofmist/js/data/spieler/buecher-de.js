/* Deutsche Fassung der Shadows-&-Showdowns-Themenbücher: ersetzt englische Fragen, Beispiel-Tags und Begriffe. */
(function(){
var NAMES={sb_conjuration:["Beschwörung","Beschwörung (Mythos)"],sb_destiny:["Schicksal","Schicksal (Mythos)"],sb_enclave:["Enklave","Enklave (Mythos)"],b2_familiar:["Vertrauter","Vertrauter"],b2_struggle:["Bürde","Bürde"],b2_turf:["Revier","Revier"]};
/* Q = Fragen mit Beispielen: "Frage|Beispiel, Beispiel" je Zeile */
var D={
sb_conjuration:{
pq:["Was kannst du ins Dasein beschwören?|Rumpelstilzchen, der Vater der olympischen Götter, meine Kartensoldaten, Albträume materialisieren, Steampunk-Fortbewegungsmittel",
"Wer oder was ist deine liebste oder nützlichste Beschwörung?|eine wütende Fee, Athene – Göttin der Weisheit, Herz-Ass, der schlimmste Albtraum eines Menschen, die Weltraumkanone (Kanone, die eine Kapsel abfeuert)",
"Welche andere Beschwörung kannst du hervorrufen?|ein Spinnrad, das Stroh zu Gold spinnt, Ares – Gott des Krieges, das Jabberwocky, Kopien geliebter Menschen, die Nautilus (U-Boot)",
"Wie kämpft deine Beschwörung für dich oder deine Sache?|Geld spielt keine Rolle, Waffen des Hephaistos, Pik und Kreuz, Erstickung verursachen, montierte Geschütze",
"Welche gewöhnliche oder arkane Fertigkeit oder welches Wissen besitzt deine Beschwörung oder verleiht sie dir?|legendärer Dealmaker, göttliche Voraussicht, Schildkrötenformation, Reiten, Maschinenbau",
"Wie beschützt dich deine Beschwörung?|teuflisch täuschend, göttliche Unverwundbarkeit, wachsame Privatwache, Schleier der Dunkelheit, klobige Metallpanzerung",
"Welche Bedingungen sind für dein Beschwören günstig?|Zeiten großer Not, eine Angelegenheit, die einen bestimmten Gott betrifft, Kopf ab!, Kreaturen der Nacht und der Schatten, Aufbruch ins Unbekannte",
"Was macht deine Beschwörungen schwerer abzuwehren oder zu verbannen?|Abmachungen unter dem Schutz des Feenrechts, göttliche Präsenz, es gibt immer noch eine Karte, bei Tageslicht unsichtbar, beinahe exakte Wissenschaft",
"Welchen nützlichen Gegenstand im Zusammenhang mit deiner Beschwörung kannst du hervorbringen?|eine schneidige Garderobe, ein goldener Schild, ein Eimer rote Farbe, ein Gegenstand, von dem das Opfer träumte, ein Werkzeugkasten",
"Wie kontrollierst du deine Beschwörungen?|ich kenne seinen wahren Namen, strenge Liebe, königlicher Erlass, ein magisches Zaumzeug, ausgezeichneter Pilot"],
wq:["Was oder wer könnte dein Beschwören behindern?|geweihter Boden, Familienfehde, Alice!, ruhige und vernünftige Köpfe, nicht genug Platz",
"Auf welche Weise geraten deine Beschwörungen außer Kontrolle?|spielen mir Streiche, die Kinder stellen meine Autorität infrage, befolgen Befehle zu wörtlich, nähren sich von meinen eigenen Albträumen, riesige und laute Maschinen",
"Was oder wer kann deine Beschwörungen binden, verbannen, kontrollieren oder zerstören?|muss seinem wahren Namen gehorchen, die Titanen, zerreißen sie wie Papier, Diener dunkler Zauberei, unerwartete Komplikationen auf der Reise",
"Was ist der größte Makel deiner Beschwörungen?|wütend, wenn er nicht bekommt, was er will, unterschätzen Sterbliche, ohne mich verfallen sie ins Chaos, brauchen Furcht als Beute, in den meisten Fällen übertrieben"],
my:["(Rumpelstilzchen) „Was werde ich für Macht opfern?“","(Zeus) „Wie können meine Kinder zusammenarbeiten?“","(Herzkönigin) „Bin ich wirklich eine Königin, wenn mein Königreich nur in meinem Kopf existiert?“"],
ti:["(Rumpelstilzchen) Handel mit dem Kobold","(Zeus) Vater der Olympier","(Herzkönigin) Kartenhaus"],
th:{name:"Handel mit dem Kobold",id:"Mysterium: „Was werde ich für Macht opfern?“ (Beispielkarte: Rumpelstilzchen)",power:["A Rumpelstilzchen","C ein Spinnrad, das Stroh zu Gold spinnt","E legendärer Dealmaker"],weak:["D wütend, wenn er nicht bekommt, was er will"]},
imp:{"No Conjurer of Cheap Tricks":"Kein Beschwörer billiger Tricks","Banish Resistance":"Verbannungsresistenz","Form Serves Purpose":"Form dient dem Zweck","Mask of the Mundane":"Maske des Gewöhnlichen","Ruptured Rift":"Gebrochener Riss"}},
sb_destiny:{
pq:["Was ist das Nützlichste an deinem Schicksal?|noch keine Seele, um die man sich sorgen müsste, zum Herrschen bestimmt, Gespür für drohende Gefahr, bester Bogenschütze der Welt, zu stolz, um Angst zu haben, ansteckendes Pech",
"Wer oder was war dein Mythos, bevor sich sein Schicksal manifestierte?|unbeschwerte Meerjungfrau, das Königreich einen, Wächter der Götter, rachsüchtiger Kriegsherr, Labyrinthläufer, berühmter Grabräuber",
"Welche Eigenschaft oder welches Gefühl führte zu deinem Schicksal oder ging daraus hervor?|aufrichtiger Wunsch, Gutes zu tun, Suchender nach Gerechtigkeit, scharfes Sehen und Hören, Mitgefühl, rebellisch und empört, wissenschaftliche Neugier",
"Welche Immunität oder welchen Schutz verleiht dir dein Schicksal?|ans Leben im Wasser angepasst, unbestrittene Monarchie, kann nur von Loki getötet werden, drückt sich nie vor der Pflicht, bleibt nie unter seinen Möglichkeiten, immun gegen andere Flüche",
"Wie hast du gelernt, mit deinem Schicksal zu leben?|tanzen, wie noch kein Mensch getanzt hat, mein Königreich zum Blühen bringen, Metttrinker – immun gegen Rausch, unerschütterliche Hingabe, kann einen Sturz wegstecken, Apotheker",
"Wer oder was hat dir geholfen, dein Schicksal zu manifestieren?|die Meerhexe, Merlin, die Regenbogenbrücke Bifröst, Lord Krishna, Dädalus, der legendäre Handwerker, Horus in Gestalt eines Falken",
"Welchen mit deinem Schicksal verbundenen Gegenstand besitzt du?|Verwandlungstrank, Excalibur, das dröhnende Horn Gjallarhorn, der mächtige Bogen Gandiva, ein Satz künstlicher Flügel, das verfluchte Brecheisen",
"Wie kannst du dein Schicksal oder einen Teil davon auf jemand anderen lenken?|jemanden in Meeresschaum verwandeln, einen neuen Ritter schlagen, das wahre Sehen verleihen, jemanden an den Eid des Kriegers binden, sie abstürzen und verbrennen lassen, gefräßige Mumien beschwören",
"Wie kannst du dein Schicksal beschleunigen oder ihm entkommen?|die Liebe eines Schläfers, eine öffentliche Machtdemonstration, den Feind zum Freund machen, Emotionen überwinden, mit einem Knall abtreten, böse Mächte bannen",
"Welche Fähigkeit oder Kraft hast du offenbart, als sich dein Schicksal entfaltete?|Tochter der Lüfte, ein großer Anführer, Bezwinger von Tricksern, Amoklauf, Höhenflug, Schatz der Pharaonen"],
wq:["Welches Verderben oder welchen Untergang hält das Schicksal für dich bereit?|zu Meeresschaum werden, überall Verrat, in den Händen eines Tricksers sterben, die eigene Sippe töten, abstürzen und verbrennen, von einer unnatürlichen Krankheit verzehrt",
"Welcher Charakterfehler führte zu deinem Schicksal?|will, was sie nicht haben kann, falsch platziertes Vertrauen, verklemmter Gutmensch, von Selbstzweifeln zerfressen, Hybris, hört nicht auf Warnungen",
"Wie wirkt sich dein bevorstehendes Schicksal negativ auf dein Leben aus?|„Ich bin kein echter Mensch“, hohe Erwartungen, alles ist düster und hoffnungslos, von meinen Liebsten gemieden, dauerhaft am Boden, löse Fallen und Alarme aus",
"Welches Übel wird wegen deines Schicksals von dir angezogen?|Kreaturen, die sich von Seelen nähren, eine Schwäche für Morgan le Fay, von Tricksern gehasst, vergöttlichte Krieger, Gremlins (verursachen Fehlfunktionen in der Luftfahrt), die Untoten"],
my:["(Die kleine Meerjungfrau) „Was bedeutet es, eine Seele zu haben?“","(Ikarus) „Wie hoch kann ich steigen?“","(Fluch der Pharaonen) „Ich frage mich, was da drin ist?“"],
ti:["(Die kleine Meerjungfrau) Wunsch nach einer ewigen Seele","(Ikarus) Der Himmel ist die Grenze","(Fluch der Pharaonen) Fluch der Pharaonen"],
th:{name:"Der Himmel ist die Grenze",id:"Mysterium: „Wie hoch kann ich steigen?“ (Beispielkarte: Ikarus)",power:["A zu stolz, um Angst zu haben","E kann einen Sturz wegstecken","G ein Satz künstlicher Flügel"],weak:["A abstürzen und verbrennen"]},
imp:{"Destiny Manifest":"Das Schicksal manifestiert sich","S%#t’s Getting Real":"Jetzt wird’s ernst","What You’re Meant to Be":"Wozu du bestimmt bist","Delay Fate":"Das Schicksal aufschieben","Weave the Starry Web of Fortune":"Das Sternennetz des Glücks weben"}},
sb_enclave:{
pq:["Was oder wo ist deine Enklave?|ein Wald voller Geschöpfe, Ali Babas Schatzhöhle, der Jadepalast, Baba Jagas Hütte, Nachtclub des Verderbens, ein Spukhaus",
"Was ist an deiner Enklave am nützlichsten?|eine Schar tierischer Gefährten, unvorstellbarer Reichtum, jenseits von Bösem und Tod, ein Hexen- und Tranklabor, ich ziehe Energie aus den Gästen, eine unsichtbare Spiegelwelt",
"Wie kannst du schnell, unauffällig usw. in deine Enklave gelangen?|durch jeden Baum oder jedes Grün hindurchgehen, gesicherte Tresortür, auf eine vorbeiziehende Wolke steigen, läuft auf Hühnerbeinen, private Hintertür, zum Poltergeist werden",
"Was beschützt deine Enklave?|der Wolf von Gubbio, vierzig Räuber, Wächterlöwen, panischer Hühnertritt, gespickt mit uralten Todesfallen, mit Möbeln und Haushaltsgegenständen werfen",
"Welche magischen oder übernatürlichen Eigenschaften hat deine Enklave?|reinigt Körper und Seele, passwortgeschützt, das Mandat des Himmels, ich muss das Gehen erlauben, Blut gegen dunkle Kräfte tauschen, die Wahrnehmung manipulieren",
"Welche Tätigkeit unterstützt deine Enklave am besten?|die Armen und Müden nähren, einem gierigen Feind auflauern, ausruhen und erholen, einen Gefangenen quälen, Altar für Menschenopfer, eine koloniale Umkleidekabine",
"Wer wohnt in deiner Enklave?|der Heilige Geist, mein treuer Berater Morgiana, Audienz beim Jadekaiser, meine Dienerin Wassilissa, DJ Hohepriester, Geister einer viktorianischen Familie",
"Was kannst du in deiner Enklave lernen?|alles, was Vögel sehen und hören, wie man mit Räubern spricht, Xianxia-Kultivierung der unsterblichen Seele, Flüstern von Helden auf einer Queste, Informationen gegen Erlösung tauschen, Flüstern der Toten",
"Welche Atmosphäre oder Emotion durchdringt deine Enklave?|Frieden und Gelassenheit, Appell an die Gier, höchste Autorität, harte Arbeit zahlt sich aus, dämonische Ekstase, Furcht und Schrecken",
"Welchen Gegenstand, welche Fähigkeit oder Eigenschaft behältst du, wenn du die Enklave verlässt?|mit Tieren sprechen, Sack voller Edelsteine und Gold, Pfirsiche der Unsterblichkeit, ein magischer Holzofen, schädelverzierter Speer, ein Andenken"],
wq:["Was ist der größte Makel deiner Enklave?|kann die Ungläubigen nicht schützen, Lauschangriff, abgehoben von irdischen Angelegenheiten, beengter Raum, hungrig nach mehr Opfern, verdrängte Gefühle",
"Was geschieht, wenn du zu lange in deiner Enklave warst?|Abneigung gegen das moderne Leben, am Verhungern, Gefühl der Überlegenheit, verwandle mich in eine zerzauste Hexe, Lichtempfindlichkeit, unfreiwillige Körperlosigkeit",
"Wer versucht, in deine Enklave zu gelangen, sie zu zerstören oder ihr zu entkommen?|der Teufel, mein Bruder Cassim, Riss des Affenkönigs, jugendliche Helden, Konkurrenz im Nachtleben, Immobilienmakler",
"Was könnte dich daran hindern, deine Enklave zu erreichen oder zu nutzen?|Verschmutzung, Kleinkrämerei, des Himmelspalasts unwürdig, rebellische und scheue Hühnerbeine, Polizeikontrolle, Exorzismus"],
my:["(Wald des heiligen Franziskus) „Wie kann die Menschheit in Gemeinschaft mit der Natur leben?“","(Ali Babas Höhle) „Wer will mein Gold stehlen?“","(Der Jadepalast) „Wie kann ich Unsterblichkeit erlangen?“"],
ti:["(Wald des heiligen Franziskus) Wald der Gemeinschaft","(Ali Babas Höhle) Sesam, öffne dich","(Der Jadepalast) Die Schlüssel zum Himmel"],
th:{name:"Wald der Gemeinschaft",id:"Mysterium: „Wie kann die Menschheit in Gemeinschaft mit der Natur leben?“ (Beispielkarte: Wald des heiligen Franziskus)",power:["A ein Wald voller Geschöpfe","E reinigt Körper und Seele","I Frieden und Gelassenheit"],weak:["D Verschmutzung"]},
imp:{"Legendary Headquarters":"Legendäres Hauptquartier","Bastion of Mythos":"Bastion des Mythos","Private Lab":"Privates Labor","Maw of Conjurations":"Schlund der Beschwörungen","Base of Operations":"Operationsbasis"}},
b2_familiar:{
pqt:["schneller Flug, gerissener Manipulator, langsam und stetig gewinnt das Rennen, der ultimative Beschützer, Weisheit verleihen, bösartiges Monster",
"ein kräftiger Schnabel, giftiger Biss, Schildkrötenpanzer, scharfe Krallen, glitschige Schuppen, ein Skorpionschwanz",
"Lichtbringer, Rache an der Menschheit nehmen, will seinen Wert beweisen, Sachmets Segen, führt mich aus der Not, ein saftiges Steak",
"gewaltige goldene Schwingen, schlängelt sich aus dem Nichts, schneller, wenn man nicht hinsieht, katzenhafte Anmut, gegen den Strom schwimmen, Alleingang-Stampede",
"Schlangentöter, Sterbliche in Versuchung führen, Selbstzufriedenheit hervorrufen, Wunden heilen, nach dem Verspeistwerden wiedergeboren, mehrere Köpfe",
"Teleskopblick, verborgene Wünsche spüren, kennt den Weg, unheimliche Sinne, das Schicksal eines Menschen lesen, die Schwäche eines Feindes finden",
"ein Schwarm Krähen, der Apfel vom Baum der Erkenntnis, der Hase – das schnellste Tier von allen!, den Wüstenwind rufen, die Fianna-Waldläufer herbeirufen, einen Vulkanausbruch auslösen",
"offener Himmel, Sündenpfuhle, Gartengemüse als Power-up, auf einem Aussichtspunkt thronen, wirkt besser mit Daumen im Mund, Ruinen und Verwüstung",
"Vorbeiflug-Angriff!, Verführungstaktiken, für Ablenkung sorgen, sie rettet mich vor Schaden, ihnen das Goldfischglas überziehen, der Bestie Befehle erteilen",
"Sieg über die Dunkelheit, Verderbnis der Menschheit, Beharrlichkeit, der göttliche Krieger, das gesamte Wissen der Welt, Unheilsbringer"],
wqt:["überall Federn, eigene böse Agenda, provoziert überlegene Feinde, läuft mir ständig zwischen die Füße, Besserwisser-Kommentare, verscheucht die Leute",
"glänzende Dinge, freiliegende Knöchel, wenn er erst ein Ziel anvisiert hat …, Katzenminze ist ein Problem, miserables Kurzzeitgedächtnis, potenzielle Beute",
"zu eng zum Fliegen, am Schwanz gepackt, auf den Rücken gedreht, Herausforderer aus dem eigenen Rudel, ein Fisch auf dem Trockenen, ungeschützte Hälse",
"Abneigung gegen Reptilien, nie den direkten Weg nehmen, wenn ich erst ein Ziel anvisiert habe …, hochnäsig und distanziert, dazu bestimmt, gefangen zu werden, ein Hang zur Zerstörung"],
my:["(Garuda) „Was führen die bösen Nagas diesmal im Schilde?“","(Schlange von Eden) „Wann ist es richtig, die Regeln zu brechen?“","(Schildkröte) „Wer hat dieses Rennen manipuliert?“"],
ti:["(Garuda) Vishnus fliegendes Reittier","(Schlange von Eden) Kriechende Sünde","(Schildkröte) Schnellste Schildkröte aller Zeiten"],
th:{name:"Vishnus fliegendes Reittier",id:"Mysterium: „Was führen die bösen Nagas diesmal im Schilde?“",power:["A schneller Flug","F Teleskopblick","I Vorbeiflug-Angriff!"],weak:["B glänzende Dinge"]},
extra0:"„Was führen die bösen Nagas diesmal im Schilde?“ – Beispiel-Thema: Vertrauter „Vishnus fliegendes Reittier“ (Garuda)",
imp:{"Natural Affinity":"Natürliche Affinität","Friends Are There":"Freunde sind da","Back-to-Back":"Rücken an Rücken","True Form":"Wahre Gestalt","The Mythos Within":"Der Mythos in mir"}},
b2_struggle:{
pqt:["scharfsinnige Menschenbeobachtung, Solidarität unter den Unterdrückten, irgendwer streckt immer die Hand aus, gewitzt und straßenschlau, keine Angst vor dem Tod, mein kleiner Hydra-Freund",
"ein Gespräch anfangen, unbeugsame Hoffnung, negativen Gedanken widerstehen, meinen Stolz lasse ich mir nicht nehmen, hohe Schmerzgrenze, beschützend wie eine Hydra-Mama",
"erdachte Interviews mit toten Opfern, unbemerkt vorbeihuschen, Energielevel im Blick behalten, fleißig, ständig auf Schmerzmitteln, jonglieren",
"Rustys Bar, Musikbesessenheit, tägliches Training, Eis gegen Stress, Mythen und Legenden lesen, das kleine Monster in den Schlaf wiegen",
"die Polizeipsychologin, Mitstreiter im Freiheitskampf, auf meine Familie kann ich mich immer verlassen, meine große Jazzband, das Mitgefühl völlig Fremder gewinnen, Mütterclub zur Monsteraufzucht",
"erwarte, dass Leute enttäuschen, leicht zu unterschätzen, Grundkenntnisse in Pharmakologie, mich gegen Schläger behaupten, Atemmeditation, Notlügen erzählen",
"Kamera, Visitenkarte der Kanzlei Shepherd Hoyt & Deva, eine Geige, Pfefferspray, Gehstock aus Titanlegierung, Tupperdose mit rohem Fleisch",
"soziale Verbindungen eines Menschen nachzeichnen, Einblick in die Politik, Anzeichen psychischer Erkrankungen, wer die Straßen beherrscht, erkennen, was jemandem am wichtigsten ist, Spuren monströser Kreaturen",
"bissige Bemerkungen, körperliche Konfrontation, einen Wutanfall bekommen, Reservepistole im Strumpfband, einen Herzinfarkt vortäuschen, die Hydra von der Leine lassen",
"ermutigt, wenn mich jemand mag, einen wahren Verbündeten erkennen, ein Tag ohne Traurigkeit, belastende Beweise, modernste Behandlung, mein Baby wächst"],
wqt:["kann keine Freunde finden, wird ungerecht behandelt, von Verzweiflung überwältigt, nagende Geldsorgen, Angstattacken, es hat immer Hunger",
"nicht liebenswert, platzt vor Wut, funktionsunfähig, ein totaler Versager, ein Mensch ohne Zukunft, elterliche Erschöpfung",
"plötzliche Angst, allein zu sterben, das System wendet sich gegen dich, Suizidgedanken, quälende chronische Schmerzen, Inkassoeintreiber, mein Baby hat die Babysitterin gefressen",
"umgeben von sozial Gewandten, halbherzige Verbündete, alles ist gut und ich fühle mich trotzdem schlecht, Ärger am Arbeitsplatz, das Glück währt nicht, verlockendes Fleisch"],
my:["(Einsamer Detektiv) „Niemand mag mich, und ich kann es ihnen nicht verdenken.“","(Mitglied einer verfolgten Minderheit) „Hoffentlich sehen sie mich nicht.“","(Pflegemutter einer Baby-Hydra) „Mein Baby muss genährt, sicher und versteckt sein.“"],
ti:["(Einsamer Detektiv) Patience spielen","(Mitglied einer verfolgten Minderheit) Die unsichtbaren Fesseln","(Pflegemutter einer Baby-Hydra) Neun Mäuler zu stopfen"],
th:{name:"Patience spielen",id:"Identität: „Niemand mag mich, und ich kann es ihnen nicht verdenken.“",power:["A scharfsinnige Menschenbeobachtung","C erdachte Interviews mit toten Opfern","F erwarte, dass Leute enttäuschen"],weak:["A kann keine Freunde finden"]},
imp:{"Evolution Through Hardship":"Entwicklung durch Härte","Driven by Compassion":"Von Mitgefühl getrieben","Going Through the Motions":"Routine abspulen","Touchy Subject":"Heikles Thema","You Can’t Break Me":"Mich bricht ihr nicht"}},
b2_turf:{
pqt:["Cross End, Forschungseinrichtung von Helix Labs, die Docks, die Modebranche, der Cyberspace, die Kanalisation",
"echter Biss, Haifisch-Mentalität der Konzerne, Rückhalt der Gewerkschaft, hypnotischer Glamour, geniale Programmierkünste, Orientierungssinn",
"vertraute Gesichter, Forschung & Entwicklung, Hafenwasserwege, wer ist wer, Server-Hintertüren, kennt jedes Rohr",
"Rattenpack-Gang, die Laborkittel, Gewerkschaftsarbeiter, Möchtegern-Models, eine Armee von Bots, die Ratten",
"Bandenkrieg, illegale Experimente, Schwarzhandel, Öffentlichkeitsarbeit, soziale Medien, Schmugglerparadies",
"Menschen, die nichts zu verlieren haben, Hightech-Spielereien, Diebesgut, Garderobe und Make-up, Geheiminformationen, menschlicher Abfall",
"Ridley Street, „In mein Büro – sofort!“, Gewerkschaftshaus, Visage-Magazin, mein krasses Gefährt, Pumpenraum 43",
"Schüsse aus dem fahrenden Auto, Verbindungen zum Vorstandschef, Brandstifter, jemanden in einen Skandal verwickeln, Deathstroke-Virus, Flutfalle",
"wohlgesinnte Bevölkerung, ich bin klüger, hohe Alkoholtoleranz, Medienpräsenz, Software auf Regierungsniveau, ans Dunkle gewöhnt",
"überall Informanten, Zugriff auf die Gebäudeüberwachung, Diamond vom Straßenstrich, Klatschkönigin, Keylogger, sensibel für Rattenverhalten"],
wqt:["Polizeirazzien, Experiment ging fürchterlich schief, niedrige Löhne, alle sind Dramaqueens, lahme Internetverbindung, Schwaden unerträglichen Gestanks",
"Drogensucht, muss prüfen, prüfen, nochmal prüfen, endloses Feilschen, eifersüchtig, kann keinen Blickkontakt halten, Lebensmittelvergiftung",
"rivalisierende Gangs, „verdammte Wissenschaftler halten sich für allwissend“, Widerstand von innen, schlechter Haartag, schlecht geschriebener Code, Beamte der Stadtwerke",
"außerhalb des Viertels, geheime Informationen von Helix Labs, leg dich nicht mit der Regierung an, Leute ohne Ruf, den man beschädigen könnte, die physische Welt, die Oberwelt"],
my:["(Mafioso aus Cross End) „In Cross End ist mein Wort das letzte Wort.“","(Leiter der Forschungseinrichtung von Helix Labs) „Wir sind hier, um Wissenschaft zu betreiben, bahnbrechende Wissenschaft.“","(Top-Fashionista) „Darling, wenn du nicht auf dem Cover der Visage bist, existierst du nicht.“"],
ti:["(Mafioso aus Cross End) Cross End gehört mir!","(Leiter der Forschungseinrichtung von Helix Labs) Forschungslabor 54D","(Top-Fashionista) Trendsetterin"],
th:{name:"Cross End gehört mir!",id:"Identität: „In Cross End ist mein Wort das letzte Wort.“",power:["A Cross End","D Rattenpack-Gang","J überall Informanten"],weak:["A Polizeirazzien"]},
imp:{"Feel the Pulse":"Den Puls spüren","The Turf Provides":"Das Revier versorgt","King of My Castle":"König meiner Burg","(No) Loyalty Knows No Limits":"(Keine) Loyalität kennt Grenzen","You’re in My Turf Now":"Du bist jetzt in meinem Revier"}}
};
/* Begriffe (Reihenfolge wichtig) */
var R=[[/-Themebooks/g,"-Themenbuchs"],[/Power-Fragen/g,"Stärke-Fragen"],[/Power von/g,"Stärke von"],[/(?:einen|diesen|Jeder) Core Move/g,function(m){return m.indexOf("einen")===0?"eine Grundlegende Aktion":m.indexOf("diesen")===0?"diese Grundlegende Aktion":"Jede Grundlegende Aktion";}],[/ihn mit Tags/g,"sie mit Tags"],[/ist er Dynamite/g,"ist sie Mega"],[/ist er Mega/g,"ist sie Mega"],
[/einer Danger stellst \(Face a Danger\)/g,"einer Bedrohung stellst (Sich der Gefahr stellen)"],[/Danger-Moves/g,"Bedrohungsaktionen"],[/Danger-Aktionen/g,"Bedrohungsaktionen"],[/Danger/g,"Bedrohung"],[/Hard Moves/g,"Harte Aktionen"],[/Hard Aktionen/g,"Harte Aktionen"],
[/Queen of Hearts/g,"Herzkönigin"],[/Night Mares/g,"Nachtmahre"],[/Age of Wonder/g,"Zeitalter der Wunder"],[/Borderliner-Enclave/g,"Grenzgänger-Enklave"],[/Borderliner-Enklave/g,"Grenzgänger-Enklave"],[/Looking Beyond the Mist/g,"Jenseits des Mist blicken"],[/Looking Glass/g,"Spiegelwelt"],[/Legendary Enclave/g,"Legendäre Enklave"],[/Legendary Enklave/g,"Legendäre Enklave"],[/Awareness-Grad/g,"Bewusstseins-Grad"],[/\bTouched\b/g,"Berührt"],[/True-Form-Tag/g,"Wahre-Gestalt-Tag"],[/permanentes Stärke/g,"permanente Stärke"],[/Power-up/g,"Kraftschub"],[/deine Power\b/g,"deine Stärke"],[/Tag-Fragen/g,"Fragen"],[/Beschwörung-Stärken/g,"Beschwörungs-Stärken"],[/Crew Relationships/g,"Beziehungen innerhalb des Teams"],[/Crew-Beziehungen/g,"Beziehungen innerhalb des Teams"],[/Crew-Mitglieder/g,"Teammitglieder"],[/innerhalb deiner Crew/g,"innerhalb deines Teams"],[/\bCrew\b/g,"Team"],[/Power-Tag-Fragen/g,"Fragen zu den Stärken"],[/Weakness-Tag-Fragen/g,"Fragen zu den Schwächen"],
[/Power Tag Questions/g,"Fragen zu den Stärken"],[/Weakness Tag Questions/g,"Fragen zu den Schwächen"],
[/POWER TAGS/g,"STÄRKEN"],[/WEAKNESS TAGS/g,"SCHWÄCHEN"],[/Power[- ]Tags/g,"Stärken"],[/Power[- ]Tag/g,"Stärke"],[/Weakness[- ]Tags/g,"Schwächen"],[/Weakness[- ]Tag/g,"Schwäche"],
[/Help-Punkt/g,"Freundpunkt"],[/Hurt-Punkt/g,"Feindpunkt"],[/Help- oder Hurt-Punkt/g,"Freund- oder Feindpunkt"],[/Help- oder Feindpunkt/g,"Freund- oder Feindpunkt"],
[/Core Moves/g,"Grundlegende Aktionen"],[/Core Move/g,"Grundlegende Aktion"],[/Dynamite!/g,"Mega!"],[/Dynamite/g,"Mega"],
[/Change the Game/g,"Das Blatt wenden"],[/Sneak Around/g,"Heimlichkeit"],[/Face Danger/g,"Sich der Gefahr stellen"],[/Go Toe to Toe/g,"Direkte Konfrontation"],[/Hit with All You[’']ve Got/g,"Mit aller Gewalt"],[/Take the Risk/g,"Ein Risiko eingehen"],[/Investigate/g,"Nachforschungen"],[/Convince/g,"Überzeugen"],
[/Make a Hard Choice/g,"Eine schwere Entscheidung treffen"],[/End of the Road/g,"Ende der Straße"],
[/Theme-Improvements/g,"Themen-Verbesserungen"],[/Theme Improvements/g,"Themen-Verbesserungen"],[/Theme-Improvement/g,"Themen-Verbesserung"],[/Improvements/g,"Verbesserungen"],[/Improvement/g,"Verbesserung"],
[/Theme-Karte/g,"Themenkarte"],[/in anderen Themebooks/g,"in anderen Themenbüchern"],[/Themebooks/g,"Themenbücher"],[/Themebook/g,"Themenbuch"],[/\bThemes\b/g,"Themen"],[/\bTheme\b/g,"Thema"],
[/Mystery/g,"Mysterium"],[/\bIdentity\b/g,"Identität"],[/\bFade\b/g,"Verblassen"],[/\bCrack\b/g,"Bruch"],[/\bAttention\b/g,"Aufmerksamkeit"],[/Montage \(Downtime\)/g,"Montage (Drehpause)"],[/Downtime/g,"Drehpause"],
[/Story Tags/g,"Story-Tags"],[/Story Tag/g,"Story-Tag"],[/[Dd]as Rift/g,function(m){return m[0]==="D"?"Der Riss":"der Riss";}],[/\bRifts\b/g,"Risse"],[/\bRift\b/g,"Riss"],[/Sleepers/g,"Schläfer"],[/Sleeper/g,"Schläfer"],
[/burnen/g,"verbrennen"],[/burnst/g,"verbrennst"],[/\bburne\b/g,"verbrenne"],[/\bburn\b/g,"verbrennen"],[/roll\+Mythos/g,"Wurf+Mythos"],[/roll\+Power/g,"Wurf+Stärke"],[/roll\+Logos/g,"Wurf+Logos"],
[/\bMove\b/g,"Aktion"],[/Moves/g,"Aktionen"],[/\bHit\b/g,"Treffer"],[/\bMiss\b/g,"Fehlschlag"],
[/Enclaves/g,"Enklaven"],[/Enclave/g,"Enklave"],[/Conjurations/g,"Beschwörungen"],[/Conjuration/g,"Beschwörung"],[/(deinen|deinem|dem|den|einen|einem|deines|des|diesen|seinem|seinen|ihrem|deiner)((?: [A-Za-zäöüÄÖÜ-]+)?) Familiars?/g,"$1$2 Vertrauten"],[/Familiars/g,"Vertraute"],[/Familiar/g,"Vertrauter"],[/Destiny/g,"Schicksal"],[/Struggle/g,"Bürde"],[/Turf/g,"Revier"],
[/\bExtra Tags\b/g,"Zusätzliche Stärken und Schwächen"],[/\bTitle\b/g,"Name"],[/(DEINEN|DEINEM|DEM|DEN|DEINES|DES) FAMILIARS?/g,"$1 VERTRAUTEN"],[/FAMILIAR/g,"VERTRAUTER"],[/DEINES STRUGGLES/g,"DEINER BÜRDE"],[/DEINEM STRUGGLE/g,"DEINER BÜRDE"],[/DEINEN STRUGGLE/g,"DEINE BÜRDE"],[/DEIN STRUGGLE/g,"DEINE BÜRDE"],[/STRUGGLE/g,"BÜRDE"],[/DEINES TURFS/g,"DEINES REVIERS"],[/DEINEM TURF/g,"DEINEM REVIER"],[/DEINEN TURF/g,"DEIN REVIER"],[/DEIN TURF/g,"DEIN REVIER"],[/TURF/g,"REVIER"],[/wird ein Stärke/g,"wird eine Stärke"],[/wird ein Schwäche/g,"wird eine Schwäche"],[/Schreibe es auf deine Themenkarte unter (STÄRKEN|SCHWÄCHEN)/g,"Schreibe sie auf deine Themenkarte unter $1"],[/ein Verbesserung/g,"eine Verbesserung"],[/Beschwörung-Stärken/g,"Beschwörungs-Stärken"],[/Grundlegende Aktion, der am besten/g,"Grundlegende Aktion, die am besten"],[/Grundlegende Aktion, der /g,"Grundlegende Aktion, die "],[/(dein|deinem|deinen|deines|diesem|diesen|dieses|ein|einem|einen|eines|sein|seinem|ihr|ihrem) Bürde/g,function(m,a){var M={dein:"deine",deinem:"deiner",deinen:"deine",deines:"deiner",diesem:"dieser",diesen:"diese",dieses:"dieser",ein:"eine",einem:"einer",einen:"eine",eines:"einer",sein:"seine",seinem:"seiner",ihr:"ihre",ihrem:"ihrer"};return M[a]+" Bürde";}],[/Crewmitglied/g,"Teammitglied"],[/Build-Up/g,"Entwicklung"],[/Session/g,"Sitzung"]];
function tr(s,imp){ if(typeof s!=="string") return s; Object.keys(imp).forEach(function(k){ s=s.split(k).join(imp[k]); }); R.forEach(function(r){ s=s.replace(r[0],r[1]); }); return s; }
function walk(v,imp){ if(typeof v==="string") return tr(v,imp); if(Array.isArray(v)) return v.map(function(x){return walk(x,imp);}); if(v&&typeof v==="object"){ var o={}; Object.keys(v).forEach(function(k){ o[k]=walk(v[k],imp); }); return o; } return v; }
var UPQ=function(s){return s.toUpperCase();};
(CM_ORTE.sp_buecher||[]).forEach(function(b,bi){
  var d=D[b.id]; if(!d) return; var L=b.listen;
  var typ=b.tb||"Mythos";
  /* Fragen neu aufbauen */
  var q=function(l,lines,tags){ l.items=lines.map(function(t,i){ var a,txt; if(tags){ a=l.items[i].match(/^\*\*([A-J]) – (.+?)\*\*/); txt=tr(a[2],d.imp); return "**"+a[1]+" – "+UPQ(txt)+"** "+tags[i]; } var p=t.split("|"); return "**"+"ABCDEFGHIJ"[i]+" – "+UPQ(p[0])+"** "+p[1]; }); };
  if(d.pq) { q(L[0],d.pq); q(L[1],d.wq); }
  else { q(L[0],d.pqt,d.pqt); q(L[1],d.wqt,d.wqt); }
  var my=L[3].items; for(var i=0;i<3;i++) my[i]=d.my[i];
  for(i=0;i<3;i++) L[4].items[i]=d.ti[i];
  /* übrige Texte: Begriffe ersetzen */
  b.listen=walk(L,d.imp); var TT=["Fragen zu den Stärken (Beispiele)","Fragen zu den Schwächen (Beispiele)","Zusätzliche Stärken und Schwächen",null,"Name","Beziehungen innerhalb des Teams","Verbesserungen"]; TT.forEach(function(t,i){ if(t&&b.listen[i]) b.listen[i].t=t; }); 
  ["name","teaser","pre"].forEach(function(k){ if(b[k]) b[k]=tr(b[k],d.imp); });
  b.name=NAMES[b.id][0];
  b.text=walk(b.text,d.imp);
  if(b.extra) b.extra=d.extra0?[d.extra0].concat(b.extra.slice(1)):walk(b.extra,d.imp);
  var t=b.themen&&b.themen[0]; if(t){ t.name=d.th.name; t.typ=NAMES[b.id][1]; t.identity=d.th.id; t.power=d.th.power; t.weak=d.th.weak; t.imp=walk(t.imp,d.imp); }
  b.dangers=walk(b.dangers,d.imp);
});
})();
