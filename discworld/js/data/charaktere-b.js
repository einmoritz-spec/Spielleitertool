/* Discworld – Bereich „Charaktere“, Teil B: Charaktere erschaffen (S. 59–71) */
DW.reg("charaktere", [

{id:"erschaffen", g:1, t:"Charaktere erschaffen", p:59, img:"char-schachbrett", b:[
 "Jetzt, wo ihr wisst, wer ihr als Gruppe seid, ist es Zeit zu entscheiden, wer ihr als Einzelne seid. Vielleicht habt ihr schon Ideen, welche Art Figur ihr spielen wollt – aufgrund der Gruppe, die ihr gebildet habt, oder aus euren eigenen Erfahrungen mit dem Scheibenwelt-Universum.",
 "Wie bei der Gruppenerschaffung liefern manche Abenteuer vorgefertigte Charaktere. Spielt ihr eines dieser Abenteuer oder nutzt die Charaktere auf S. 94, wählt einfach eine Figur, und ihr seid startklar!",
 "Jede Spieler:in füllt ihren eigenen Charakterbogen aus und folgt dabei diesen Schritten:",
 {t:"ol", x:["Folgen", "Glück", "Name", "Ikonograph (Bild eurer Figur)", "Organisation", "Hintergrund", "Nische", "Marotten", "Kern"]},
 {t:"box", h:"Klischees umarmen und unterlaufen", b:["Bei der Charaktererschaffung habt ihr eine Geheimwaffe zur Anregung: Klischees! Auf Klischees kann man sich leicht verlassen; alle sehen ein Klischee und wissen genau, wie es funktioniert. Der Barbarenheld, die Jungfrau in Nöten, der weise alte Zauberer. Die sind schön und gut und haben ihren Platz, aber gerade auf der Scheibenwelt empfehlen wir euch, diese gängigen Klischees zu unterlaufen. Der Barbarenheld will vielleicht eigentlich Friseur werden, und die Jungfrau kommt höchstwahrscheinlich bestens allein zurecht, vielen Dank auch.", "Wer diese Klischees aufgreift und unterläuft, verankert die Spieler:innen in der Erzählung und sorgt zugleich für interessante und lustige Rollenspielmomente, wenn der Groschen fällt und sie merken, dass man sie reingelegt hat."]},
 {t:"h", x:"Organisation"},
 "Übertragt die Organisation eurer Gruppe auf euren Charakterbogen. Dieses Merkmal erinnert euch an die Gruppe, Bande oder Gilde, zu der eure Gruppe gehört.",
 {t:"h", x:"Hintergrund"},
 "Alle kommen von irgendwoher, auch wenn manche das nicht besonders gern zugeben. Die hier angebotenen Spezies und Herkünfte sind keineswegs vollständig, decken aber die häufigsten (und ausgesprochen bizarrsten) Spezies ab, die man durch die Straßen von Ankh-Morpork laufen, schlurfen oder sonst wie lustwandeln sieht.",
 "Um herauszufinden, was und woher ihr seid, würfelt auf den Tabellen für Spezies und Herkunft oder wählt daraus. Verbindet je nach Ergebnis beides zu einem Hintergrund, etwa **Troll aus den Schatten** oder **Golem, geschaffen unter einem glücklichen Stern**.",
 {t:"box", h:"Hintergrund als Merkmal", b:["Wie bei allen Merkmalen haben Figuren Zugang zu allem, was mit ihrer Spezies und Herkunft verbunden ist. Trolle sind unglaublich stark, haben Diamantzähne und einen viel höheren IQ bei niedrigeren Temperaturen. Wer aus den Schatten kommt, weiß, wie man im Großstadtdschungel überlebt. „Ich bin ein Troll, also sollte ich gut darin sein, schwere Dinge zu werfen“ oder „Ich komme aus den Schatten, also sollte ich mich hier herausreden können“ sind daher ordentliche Begründungen für eine bestimmte Handlung. Wie gut sie passen, hängt von der Handlung, der Spielleitung und eurer Begründung ab."]},
 {t:"grid", n:2, x:[
  [{t:"wt", id:"wtspezies", h:"Spezies", w:"W20", rows:[["1–15","Die üblichen Verdächtigen (S. 61): Mensch, Zwerg oder Troll"],["16–19","Die ungewöhnlichen Verdächtigen (S. 63): Golem, Wasserspeier, Igor oder Zombie"],["20","Die ausgesprochen bizarren Verdächtigen (S. 65)"]]}],
  [{t:"wt", id:"wtherkunft", h:"Herkunft", w:"W10", rows:[["1","Aus den Schatten"],["2","Aus vornehmem Hause"],["3","Aus einer Familie mit einem bescheidenen Geschäft in Ankh-Morpork"],["4","Geboren unter einem glücklichen Stern"],["5","Aufgezogen von liebevollen, wenn auch unklugen Eltern"],["6","Aufgezogen von einer anderen Spezies"],["7","Kennt sich aus"],["8","Kommt nicht viel raus"],["9","Is’ nich’ von hier"],["10","Probiert mal was Neues"]]}]
 ]},
 {t:"box", h:"Andere Spezies spielen", b:["Es gibt eine Fülle von Spezies, die Ankh-Morpork ihr Zuhause nennen. Die Spezies eines SC ist ein Merkmal, auf das man sich im Spiel berufen kann, um zu begründen, warum er in seinen Handlungen gut sein sollte. Will eine Spieler:in eine der anderen Spezies der Scheibe spielen – etwa Wir-sind-die-Größten, Vampir, Werwolf, Gnoll, Gnom, Kobold oder Ork, um nur einige zu nennen –, besprecht das mit eurer Spielleitung. Könnt ihr euch beide darauf einigen, dass ihr genug über diese Spezies wisst, um sie zu spielen, dann viel Spaß bei eurem verrückten Abenteuer, in dem ihr aus vollem Hals „Crivens!“ brüllt."]}
]},

{id:"schmelztiegel", g:1, t:"Den Schmelztiegel umarmen", p:61, b:[
 "Ankh-Morpork ist so weltoffen, wie eine Stadt sein kann, ohne rosa zu sein und in einem schicken Glas serviert zu werden. Wir ermutigen euch, das Seltsame zu umarmen. Geht darauf ein, dass ein Wasserspeier mit Näherinnen herumhängt. Überlegt, warum er da ist: Ist er selbst Näherin? Ist er mit der Gruppe befreundet? Läuft er mit, weil er auf etwas anderes hofft?",
 "Es gibt viele Arten, eine seltsame Figur in eure Gruppe einzubinden. Diese ungewöhnlichen und bizarren Spezies führen zu seltsamen und wunderbaren Momenten, die sonst einfach nicht passieren würden. Wer das Seltsame umarmt, das Merkwürdige drückt und sich an das Lächerliche kuschelt, öffnet sich für wahrhaft einzigartige Geschichten und Momente, bei denen ihr froh sein werdet, dass ihr sie mitgenommen habt.",
 {t:"box", h:"Nobbs (irgendwie verwandt)", b:["Irgendwo neben dem herkömmlichen Begriff der Evolution findet ihr Nobby Nobbs. Berühmt dafür, wegen Drängelns von der Menschheit disqualifiziert worden zu sein, und nicht Teil des Tierreichs, weil es aufgestanden und davongeschlurft ist, ist Nobby ein … Mann? für sich. Wir wissen, dass er mindestens sieben Beerdigungen seiner Oma besucht hat, dass er einmal ein Kind war und einen Bruder namens Errol hat; es ist also eine sichere – aber erschreckende – Wette, dass weitere Nobbse durch die Straßen von Ankh-Morpork schleichen. Ihr dürft in euren Spielen gern einen Nobbs spielen, wenn ihr wollt. Modiphius Entertainment übernimmt keine Verantwortung für Schäden, die euch oder anderen durch diese Entscheidung entstehen."]}
]},

{id:"uebliche", g:1, t:"Die üblichen Verdächtigen", p:61, img:"char-zwerg", b:[
 "In den Straßen von Ankh-Morpork wimmelt es vor Leben. Wählt aus den häufigsten davon eure Spezies: Mensch, Zwerg oder Troll.",
 "Sie alle haben blühende Gemeinschaften in der Stadt und stellen die Mehrheit der Leute, mit denen eine Gruppe zu tun bekommt.",
 {t:"h", x:"Mensch"},
 "Die häufigste und zahlreichste Spezies der Scheibe. Wo es Land gibt, haben Menschen wahrscheinlich eine Sauerei darauf angerichtet. Von den Hohen Spitzhornbergen bis zum fernen Kontinent XXXX nennen Menschen viele Orte ihr Zuhause. Und sie haben die Angewohnheit, ihr Zuhause mitzubringen, wenn sie unweigerlich ihren Weg nach Ankh-Morpork finden.",
 "Die bemerkenswerte Anpassungsfähigkeit der Menschheit hat dazu geführt, dass es Menschen auf der Scheibe in allen Formen, Größen und Gemütsarten gibt. Man findet alles von den ruhigen und gefassten Geschichtsmönchen bis zu der Sorte Mensch in den Schatten, die „dich für ’nen Kupferling absticht“, und alles dazwischen.",
 {t:"h4", x:"Übliche Menschennamen"},
 "Menschennamen unterscheiden sich stark, je nachdem, woher jemand kommt und was seine Eltern beim Ausfüllen der Formulare gedacht (oder nicht gedacht) haben.",
 "**Überwaldnamen:** Sie folgen meist einem germanischen oder osteuropäischen Muster und enthalten irgendwo mindestens ein „von“, sofern die benannte Person adlig ist. Beispiele: Feucht von Lipwig, Sally von Humpeding oder Angua von Überwald.",
 "**Morporkianische Namen:** Sie fallen meist in eine von drei Kategorien. Erstens eher „gewöhnliche“ Namen wie Sam, Fred, William, Rob, Gerhart, Trevor, Juliette, Betty, Victor oder Rosy. Dann ungewöhnlichere Namen, meist der feinen Gesellschaft vorbehalten, wie Havelock, Mustrum, Horace, Sybil, Sacharissa, Adora oder Ysabel. Und schließlich die seltsamen, aber ausdrucksstarken Namen wie Treibe-mich-selbst-in-den-Ruin, Alter, Hustend oder Ganz-und-gar.",
 "Nachnamen werden meist über Generationen weitergegeben und tun normalerweise nicht viel mehr, als euch von den Hunderten anderen Sams, Freds und Rosies der Welt zu unterscheiden. Ausnahme: Ihr gehört zu einer der alten Familien wie den Selachiis, Rusts oder d’Eaths.",
 {t:"h", x:"Zwerg"},
 {t:"q", x:"Alle Zwerge sind von Natur aus pflichtbewusste, ernste, belesene, gehorsame und nachdenkliche Leute, deren einziger kleiner Fehler die Neigung ist, nach einem Bier mit dem Schrei „Aaaargh!“ auf Feinde loszustürmen und ihnen die Beine an den Knien abzuhacken.", wer:"Wachen! Wachen!"},
 "Die zweitgrößte Volksgruppe in Ankh-Morpork sind die Zwerge. Zwerge sind klein, bärtig und nehmen alles unglaublich wörtlich (Metaphern und Vergleiche gehen ihnen glatt über den Kopf). Selbst der modernste und fortschrittlichste Zwerg ließe sich nicht tot erwischen ohne mehrere Lagen Leder, Kettenhemd, eine wollene Zwergenweste und die obligatorische Axt, und zwar jederzeit.",
 "Traditionell benutzten alle Zwerge „er/ihm“ als Pronomen und galten als männlich. Für sie war das Geschlecht viel weniger wichtig als, sagen wir, Metallkunde oder gute Stollenpflege. Moderne Zwerge beginnen, das Jahrhundert der Sardelle zu umarmen, und zeigen ihr Geschlecht so, wie sie wollen. Das kommt in den konservativeren und unangenehmeren Teilen der Zwergengesellschaft ungefähr so gut an, wie man erwarten würde, aber in Ankh-Morpork gelten nun einmal die morporkianischen Gesetze. Dort gibt es zusätzliche Pronomen. Wer eine Zwergin „Ha’ak“ nennt, sollte hoffen, dass Detritus den Friedensstifter an diesem Tag zu Hause gelassen hat.",
 "Die Wörtlichkeit der Zwerge ist wohlbekannt und hat viele Teile ihrer Kultur geprägt, auch das Backen von Zwergenbrot. Zwergenbrot ist eine Waffe der ersten (und eine Speise der letzten) Wahl. Fallteigfladen und Wurftoast können auf Entfernung tödlich sein, und ein gut platzierter Laib beendet einen Streit im Nu. Bemerkenswert am Zwergenbrot ist aber, dass noch nie jemand gehungert hat, der einen Laib Zwergenbrot zu meiden hatte. Wer es einen Moment lang ansieht, dem fallen sofort Dutzende Dinge ein, die er lieber essen würde. Einen Berg zum Beispiel.",
 "Die meisten Zwerge sprechen Morporkianisch, aber manche der Tiefunten (also unglaublich traditionelle Zwerge) weigern sich noch immer, etwas anderes als gutes altes Zwergisch zu sprechen.",
 {t:"h4", x:"Übliche Zwergennamen"},
 "Unter Zwergen gibt es mehrere Namensgebräuche. Die meisten Zwergennamen gehen auf die Gegend zurück, aus der sie stammen, sei es Kupferkopf, die Spitzhornberge, Überwald oder Llamedos.",
 "Übliche Nachnamen sind: Gimlet, Felsschmetterer, Eisengießerssohn, Starkimarm, Kleinpo, Gutberg, Cuddy, Eisenkruste, Glodssohnssohn, Albrechtson, Snorivetter, Rhyssohn, Schinkenbrecher, Farnschild, Eisenbieger, Ringgießer, Helmklug, Beinstark, Mausehammer, Donnerstoß, Schüchternsohn und Fußstampfer.",
 "Vornamen sind unterschiedlich; manche folgen dem traditionellen Brauch: Fröhlich, Grinsi, Schüchtern und so weiter. Andere hängen wie Nachnamen mit der Herkunftsgegend zusammen, etwa: Gimlet, Grinsi, Hwel, Glod, Karotte, Rhys, Schnabel, Snori, Albrecht, Modo, Björn, Eifrig, Lars, Nils, Pors, Grapschtopf, Setha, Schüchtern, Gunder oder Toin.",
 {t:"h", x:"Troll"},
 "Die Trolle der Scheibe sind Lebensformen auf Siliziumbasis und bestehen aus metamorphorischem Gestein. Deshalb sehen sie aus wie das Gestein ihres Geburtsortes. Trolle wachsen von Kieseln bis zur Größe kleiner Hügel. Je älter ein Troll wird, desto langsamer denkt er, bis er sich eines Tages hinsetzt, nachdenkt und nie wieder aufsteht.",
 "Ihre Gehirne bestehen aus unreinem Silizium und haben Probleme mit der Wärmeableitung. Bei heißem Wetter und hohen Temperaturen sind die Denkvorgänge eines Trolls träge, was ihnen den Ruf eingebracht hat, große und begriffsstutzige wandelnde Felsen zu sein. Bei extremer Hitze schaltet sich ein Trollgehirn ganz ab (daher stammt die Vorstellung, dass Trolle im Tageslicht zu Stein werden). Bei extrem niedrigen Temperaturen dagegen – etwa in den Hohen Spitzhornbergen oder, um ein völlig und ganz und gar zufälliges Beispiel zu nennen, im Schweinefutter-Lagerhaus unten bei den Docks – beschleunigen sich die Denkvorgänge eines Trolls rasant. Ihre Gehirne erreichen die höchste Leistung knapp über der Temperatur, bei der sie erfrieren würden.*",
 "Viele Trolle aus den Hohen Spitzhornbergen sind auf die kluge Idee gekommen, in der großen Stadt etwas aus sich zu machen. Sie ziehen mit Hoffnungen und Träumen hinab, die unterwegs verloren gehen, wenn sie die gemäßigteren Gefilde der Sto-Ebene erreichen – und das üblichere Maß trollischer Intelligenz.",
 {t:"h4", x:"Übliche Trollnamen"},
 "Trolle werden meist nach der Gesteinsart benannt, aus der sie bestehen oder zu bestehen scheinen, auch wenn manche bekanntermaßen neue Namen angenommen haben – etwa Rubin, die nicht aus Rubin besteht, sondern Sängerin in einer Trollkneipe war. Beispiele: Fels, Ziegel, Feuerstein, Rubin, Detritus, Chrysopras, Bauxit, Kohlenwand, Blaujohn, Klinker, Hornstein, Glimmer, Schiefer, Phyllit, Kreidig oder Diamant.",
 {t:"fn", x:"* Bei einer denkwürdigen Gelegenheit führte das dazu, dass ein Troll, der nicht weiter als „viele“ zählen konnte, die Mathematik hinter der Schöpfung begriff."}
]},

{id:"ungewoehnliche", g:1, t:"Die ungewöhnlichen Verdächtigen", p:63, img:"char-wasserspeier", b:[
 "Neben den gewöhnlicheren gibt es eine ganze Reihe verschiedener, vielfältiger und insgesamt seltenerer Spezies, die Ankh-Morpork ihr Zuhause nennen. Die meisten leben schon seit Generationen hier, still und leise, und kümmern sich einfach um die tägliche Aufgabe des Überlebens. Ein paar Beispiele samt kurzer Beschreibung folgen; wählt Golem, Wasserspeier, Igor oder Zombie.",
 {t:"h", x:"Golem"},
 "Golems wurden von Priestern ohne nennenswertes künstlerisches Geschick aus Ton geformt und dann durch die Worte zum Leben erweckt, die diese Priester ihnen in den Kopf legten – ihr „Chem“. Diese Worte, traditionell heilige Schrift oder eine Reihe von Anweisungen, geben den Golems Sinn und Leben. Seit Jahrhunderten wurden keine neuen Golems mehr erschaffen, und die noch vorhandenen sind meist reichlich geflickt und ausgebessert. Traditionell bekamen Golems bei ihrer Erschaffung keinen Mund, deshalb verständigen sie sich mit Tafel und Kreide.",
 "Von vielen eher als Dinge denn als Leute betrachtet, erledigen Golems all die wirklich schmutzigen Arbeiten, die nicht einmal Trolle machen. Da sie weder Schlaf noch Nahrung noch ein Dach brauchen, setzen sie ihre Aufgaben fort, bis sie neue Anweisungen bekommen, und befolgen, was man ihnen gesagt hat, buchstabengetreu. Das hat zu Geschirr geführt, das so dünn gespült wurde, dass man hindurchsehen kann, zu Gräben, die so tief gegraben wurden, dass sie aufs Grundwasser stießen und weitergingen, oder zum Pumpen eines Schwengels alle acht Sekunden, 240 Jahre lang.",
 "Die Golems von Ankh-Morpork haben es satt, wie Werkzeuge behandelt zu werden, und sparen mit Hilfe der Golem-Stiftung darauf, sich selbst freizukaufen. So werden immer mehr Golems in der Stadt frei und unterstützen ihrerseits die Golem-Stiftung, die weitere Golems kauft und sie als Behelfsarbeitskräfte an alle vermietet, die sie brauchen. Schließlich kaufen sich diese Golems zum Selbstkostenpreis von der Stiftung frei, und so gewinnt die gesellschaftlich verantwortungsvollste Revolution der Geschichte still und leise an Fahrt.",
 {t:"h4", x:"Übliche Golemnamen"},
 "Ältere Golems tragen Namen, die man ihnen gegeben hat, etwa Anghammarad und Dorfl. Neue Golems werden nach ihrer Aufgabe benannt, etwa Pumpe 19, oder bekommen von einem freundlichen Besitzer Namen nach ihrer früheren Bezeichnung (was sie unweigerlich eher verwirrt, als dass sie sich als Teil der Familie fühlen).",
 {t:"h", x:"Wasserspeier"},
 "Wasserspeier sind eine in Ankh-Morpork verbreitete Stadtform des Trolls. Sie sind eine symbiotische Beziehung mit Dachrinnen eingegangen: Sie leiten das Regenwasser in ihre Ohren und durch feine Siebe in ihren Mündern, die dauerhaft offen stehen, wieder hinaus. Deshalb muss man bei der Verständigung mit Wasserspeiern genau hinhören und dann die Laute ergänzen, die sie selbst nicht hervorbringen können.",
 "Bei einem zufälligen NSC, der nur in einer Szene vorkommt, macht das Spaß, aber nach einer Weile geht diese Eigenheit der Gruppe womöglich auf die Nerven und verursacht ziemlich wahrscheinlich heftige Kieferschmerzen.* Überlegt euch also am besten einen Kniff, der eurem Wasserspeier-SC normales Sprechen erlaubt – es sei denn, ihr wollt wirklich unbedingt die ganze Sitzung mit dauerhaft offenem Mund verbringen. Dann gut für euch, und wir entschuldigen uns bei allen, die mit euch spielen, für die vielen Konsonanten, die sie in eure Gespräche einfügen müssen. Wasserspeier bewegen sich mit kurzen, ruckartigen Bewegungen fort, wie schlechter Stop-Motion-Trick. Sie sind eine ausgezeichnete Informationsquelle, weil sie die Angewohnheit haben, unverhältnismäßig lange an einer Stelle zu sitzen (sofern es reichlich Tauben gibt).",
 {t:"h4", x:"Übliche Wasserspeiernamen"},
 "Wasserspeier werden meist nach den Straßen benannt, in denen sie gewöhnlich hocken, etwa Gesims-über-dem-Breitweg. Andere werden nach ihrer Aufgabe benannt, etwa Wächter Fallrohr.",
 {t:"h", x:"Igor"},
 "Wer in Überwald etwas auf sich hält, würde nicht im Traum daran denken, einen Diener zu beschäftigen, der nicht Igor heißt. Sie dienen Vampiren, Werwölfen und allem dazwischen. Sie sind lispelnde Buckelige, die nach dem Wahlspruch „Eine helfende Hand, wo sie gebraucht wird“ leben. Als ausgezeichnete Näher mit unübertroffenem Wissen über die Anatomie legen Igors großen Wert auf Selbstverbesserung. Wenn man von einem Igor sagt, er habe die Augen seiner Mutter, ist das keine Metapher.",
 "Jüngere Igors finden ihren Weg nach Ankh-Morpork, wo sie einer neuen Art von Herrschaft dienen. Für manche sind das die Reichen und Mächtigen, für andere ihre Kunst, und sie finden Anstellung in den verschiedenen Krankenhäusern der Stadt. Viele halten noch an den alten Sitten fest, aber manche lispeln inzwischen nur noch gelegentlich, was nach Igor-Maßstäben genügt, um als modern zu gelten.",
 {t:"h4", x:"Übliche Igornamen"},
 "Igors folgen einem sehr einfachen Namensbrauch, der Nicht-Igors zu verwirren scheint. Übliche Igornamen sind: Igor, Igor, Igor, Igor oder Igorina.",
 {t:"h", x:"Zombie"},
 "Die Zombies der Scheibenwelt sind keine gewöhnlichen schlurfenden Leichen, die „Hiiirrrne“ stöhnen. Es sind schlurfende Leichen, die ihre Persönlichkeit aus dem Leben behalten haben und Dinge stöhnen wie „Die Miete bringe ich nächsten Dienstag“ oder „Warum gucken mich alle so komisch an?“",
 "Es sind keine Troll-, Zwergen- oder Tierzombies verzeichnet – nur menschliche.** Sie scheinen durch Störungen der Lebenskraft der Scheibe zu entstehen. Bestimmte Zauber oder die schiere Weigerung, den eigenen Tod hinzunehmen, können einen Menschen nach seinem Tod als Zombie wiederauferstehen lassen. Herr Schräg, das Oberhaupt der Anwaltsgilde, ist ein Paradebeispiel für Letzteres. Er weigerte sich nach seiner Hinrichtung zu sterben, bis er für seine Dienste bei der Vertretung seiner selbst bezahlt worden war. Zombies haben ihren Körper im Tod besser im Griff als im Leben. Unglücklicherweise heißt das, dass sie alles von Hand erledigen müssen. Jede Muskelbewegung muss gründlich gesteuert werden, sonst reißen sie beim Versuch, höflich anzuklopfen, Türen aus den Angeln.",
 {t:"h4", x:"Übliche Zombienamen"},
 "Zombies behalten meist die Namen, die sie im Leben hatten. Wie sich herausstellt, kann man manches doch mitnehmen.",
 {t:"fn", x:"* Ein Gruß an alle, die „der Gruppe auf die Nerven gehen“ gelesen und „Volltreffer!“ gedacht haben. Wir sehen euch."},
 {t:"fn", x:"** Wahrscheinlich wegen Quanten."}
]},

{id:"bizarre", g:1, t:"Die ausgesprochen bizarren Verdächtigen", p:65, img:"char-orang-utan", b:[
 "Manche Dinge begegnen einem nur auf einer Welt, die auf dem Rücken von vier Elefanten ruht, die auf dem Rücken einer riesigen Schildkröte durch den Kosmos schwimmen. Wählt etwas, das eigentlich nicht denken können sollte. Das ist eure Spezies, und ihr könnt tatsächlich denken.* Im Grunde seid ihr irgendetwas, das genug Magie in sich hat, um zu denken: „Moment mal, ich denke ja. Donnerwetter, sieh sich das einer an!“",
 "Wer eine dieser Figuren spielt, muss wahrscheinlich etwas mehr Arbeit hineinstecken und etwas angestrengter nachdenken, als wenn er etwas Gewöhnlicheres spielt. Würfelt ihr diese Möglichkeit und seid euch nicht sicher, ob ihr ihr gerecht werdet, oder habt nichts besonders Interessantes im Sinn, ist es keine Schande, euch für etwas Leichteres zu entscheiden – vor allem, wenn ihr neu im Rollenspiel seid.",
 {t:"wt", id:"wtbizarr", h:"Ausgesprochen bizarre Verdächtige", w:"W6", rows:[["1","Kuh"],["2","Kerzenleuchter"],["3","Ein Schwert ist immer ein Klassiker"],["4","Der linke Arm eines anderen SC"],["5","Märchenbuch"],["6","Bienenschwarm"]]},
 {t:"h4", x:"Übliche Namen vernunftbegabter Geschöpfe und Gegenstände"},
 "Diese ungewöhnlichen Wesen tragen meist entweder die Namen, die sie vor ihrer magischen Vernunftbegabung hatten, etwa Gaspode, oder werden nach ihrer Arbeit oder ihrem Beruf beschrieben, etwa die Truhe oder der Bibliothekar.",
 {t:"h", x:"Beispiele bizarrer Verdächtiger"},
 {t:"karten", x:[
  {h:"Die Truhe", b:["Ein Reiseaccessoire aus vernunftbegabtem Birnbaumholz, das seinem Herrn auf Hunderten kleiner Beinchen hinterherrennt. Sie hat eine unglaublich schlechte Laune und betrachtet Wände als mehr oder weniger optional."]},
  {h:"Der Bibliothekar", b:["Einst ein Zauberer, jetzt ein Orang-Utan nach einem magischen Missgeschick, an dem das Oktavo, Rincewind und der Rand der Welt beteiligt waren."]},
  {h:"Maurice", b:["Ein gewöhnlicher Kater, der eine gewöhnliche Maus gefressen hat, die ihrerseits eine außergewöhnliche Menge magischen Abfalls hinter der Unsichtbaren Universität gefressen hatte."]},
  {h:"Das Oktavo", b:["Das Zauberbuch des Schöpfers selbst, das alle 8 Schöpfungszauber enthält. Sie verfolgen eigene Absichten und haben nichts dagegen, im Kopf eines Zauberers mitzufahren, wenn sie diese dadurch erfüllen können. Das Oktavo befindet sich derzeit irgendwo in den Tiefen der Truhe."]},
  {h:"Gaspode", b:["Ein räudiger Köter mit mehr Hundekrankheiten, als man aufzählen kann. Er wurde durch Holy-Wood-Magie vernunftbegabt und erlangte die Vernunft erneut, weil er zu nahe am Hochenergiemagie-Gebäude der Unsichtbaren Universität schlief."]},
  {h:"Empfindungsfähige Gegenstände", b:["Manchmal erlangt auch der Stab eines Zauberers eine Form von Empfindungsfähigkeit, meist die seines früheren Besitzers. So war es bei Esk und bei Coin, deren Stäbe sie zu ihren eigenen Zielen führten. Ein weiteres Beispiel für einen empfindungsfähig gewordenen Gegenstand ist der Hut des Erzkanzlers, der durch Osmose eine Menge magisches Wissen erlangt hat."]}
 ]},
 {t:"bsp", b:[
  "Paulina, Shannon und Corey stürzen sich alle in die Charaktererschaffung, aber Raphael ist sich etwas unsicherer, also bietet Morgan an, ihm hindurchzuhelfen.",
  {t:"dlg", x:[
   ["Raphael","„Also, zuerst kommt der Hintergrund, oder?“"],
   ["Morgan","„Ja, würfel ruhig auf der Speziestabelle, und wir sehen, wer du bist.“"],
   ["Raphael","„Ähm, eine 20 ist in diesem Spiel gut, oder?“"],
   ["Morgan","„Na ja, ja! Das heißt, du bist ein vernunftbegabtes magisches Ding! Wie die Truhe oder Maurice.“"],
   ["Raphael","„Oh, cool. Kann ich dann eine sprechende Katze sein?“"],
   ["Morgan","„Absolut!“"],
   ["Raphael","„Und auf der Herkunftstabelle habe ich eine 6 gewürfelt, also „aufgezogen von einer anderen Spezies“. Ergibt Sinn, wo ich doch eine Katze bin.“"],
   ["Morgan","„Eine Idee, welche Spezies dich aufgezogen hat, oder willst du das auch auswürfeln?“"],
   ["Raphael","„Nein, ich glaube, ein kleines altes Menschenpaar hat mich aufgezogen. Nicht sicher, ob sie wissen, dass ich sprechen kann.“"],
   ["Morgan","„Das ist in Ordnung, damit können wir im Spiel spielen und sehen, wohin es führt.“"]]}
 ]},
 {t:"fn", x:"* Oder zumindest eure Figur kann es."}
]},

{id:"nische-marotten", g:1, t:"Nische und Marotten", p:67, img:"char-gaukler", b:[
 {t:"h", x:"Nische"},
 "Jedes Gruppenmitglied bringt etwas mit an den Tisch, oder zumindest etwas, von dem alle anderen finden, dass es es hätte mitbringen sollen. Legt eine Nische für eure Figur fest, indem ihr die Seite der Organisation eurer Gruppe aufschlagt (S. 73–90) und auf der passenden Nischentabelle würfelt. Habt ihr eine Idee, was eure Nische sein soll, schreibt wie immer stattdessen die auf euren Charakterbogen! Eine gute Nische ist einzigartig, würfelt also ruhig neu, wenn ein Ergebnis schon von anderen gewürfelt wurde.",
 {t:"h", x:"Marotten"},
 "Als Nächstes erzeugt für jede Figur 3 Marotten: eine anhand ihrer Organisation und zwei mit der Tabelle unten. Das sind die Dinge, die eure Figur einzigartig machen, also ermutigen wir euch, sie so lächerlich ausgefallen wie möglich zu gestalten – schließlich gibt es auf der Scheibe einige Originale mit großem O. Es kann auch Spaß machen, Marotten reihum zu erschaffen und die Vorschläge der anderen aufzugreifen, sodass am Ende einzigartige und miteinander verbundene Figuren stehen.",
 "Für eure erste Marotte würfelt auf der Fragentabelle eurer Organisation (siehe S. 73–90). Denkt euch eine Antwort auf die gewürfelte Frage aus und schreibt sie unter Marotte auf euren Charakterbogen.",
 "Für die zweite und dritte Marotte wiederholt den Vorgang, aber mit der Tabelle unten. Würfelt ihr dieselbe Frage zweimal, würfelt neu – es sei denn, ihr habt eine interessante und abwechslungsreiche Art, sie auf zwei verschiedene Weisen zu beantworten.",
 "Wie bei Nischen und Gruppen gilt: Habt ihr eigene Marotten, die zu eurer Figurenidee passen, besprecht sie mit eurer Spielleitung und entscheidet gemeinsam, ob sie sich fürs Spiel richtig anfühlen.",
 {t:"wt", id:"wtmarotte", h:"Marotten", w:"W20", head:["","Frage","Beispielantworten / Merkmale"], rows:[
  ["1","Was fällt den Leuten als Erstes an euch auf?","Gebaut wie das sprichwörtliche Backsteinhaus; Ich höre mehr zu, als ich rede; Ich strahle Selbstvertrauen aus."],
  ["2","Was hattet ihr schon immer?","Einen ausgezeichneten Sinn für Humor; Mehr Geld als Verstand; Gute Menschenkenntnis."],
  ["3","Was ist euer Geheimnis?","Ich bin nicht, wer ich zu sein behaupte; Ich weiß mehr, als ich zeige; Jemand behält mich genau im Auge."],
  ["4","Was ist euer hervorstechendstes Merkmal?","Ich bin immer tadellos gekleidet, vor allem wenn etwas schiefgeht; Ich habe einen Verstand wie eine Falle; Ich finde mich mit verbundenen Augen in einer mondlosen Nacht durch Ankh-Morpork."],
  ["5","Was wärt ihr lieber nicht?","So ein Feigling – aber es hat mich bisher am Leben gehalten; Teil meiner Familie, wir haben nichts gemeinsam; Spät dran, in jedem Sinn des Wortes."],
  ["6","Was braucht ihr?","Einen ständigen Vorrat an Farben und Pinseln; Welche illegalen und unerlaubten Substanzen ihr auch immer herumliegen habt; Etwas verdammte Ruhe und Frieden."],
  ["7","Was seid ihr nicht mehr?","Jemand, der ALLE Probleme mit Gewalt löst; Jemand, der redet, bevor er denkt; Mitglied einer Gilde."],
  ["8","Wie sehen euch die Leute?","Gar nicht, ihre Blicke gleiten immer an mir ab; Als vorbildliches Beispiel meines Handwerks; Von sehr weit weg, oft durch irgendein Instrument."],
  ["9","Was ist euer Lieblingshobby?","Volkstanz; Ich bin ein großer Förderer der Oper; Kraulen-Herr-Zwiebel."],
  ["10","Womit hattet ihr schon immer zu kämpfen?","Mit anderen Leuten, sie verstehen meine Ideen einfach nicht; Mit der Wahrheit, ich bringe sie einfach nicht über die Lippen; Einen Ort zu finden, an dem ich einfach ich sein kann."],
  ["11","Was macht ihr zum Vergnügen?","Ich liebe Museen und Galerien, es gibt Hunderte, wenn man weiß, wo man suchen muss; Unten in der Trommel trinken – entweder man wird betrunken, gerät in eine Schlägerei oder beides; Ich genieße ein ruhiges Spiel Klonk."],
  ["12","Was ist eure größte Leistung?","Ich habe die angesehenste Auszeichnung meiner Gilde gewonnen; Ich habe mehrere Würstchen von Herrn Schnapper gegessen, ohne krank zu werden; Ich wurde auf Wunsch des Patriziers festgehalten, und wie sich herausstellte, war er tatsächlich recht erfreut."],
  ["13","Was ist euer größtes Versagen?","Ich kann keine Stelle länger als ein paar Wochen halten, ohne dass etwas schiefgeht; Ich habe in Schnappers neuestes Vorhaben investiert; Ich wurde erwischt."],
  ["14","Worauf habt ihr euch immer verlassen, und wofür?","Auf meine Glücksmünze, sie hat mich noch nie in die Irre geführt; Auf mein gewinnendes Lächeln, es hat mich aus so mancher Klemme geholt; Auf die Götter, man kann sich darauf verlassen, dass sie sich verziehen, wenn man sie braucht."],
  ["15","Worin seid ihr gut?","Ich habe ein Ohr für Sprachen; Ich kann eine Katze niederstarren; Zu wissen, wann man aussteigen sollte."],
  ["16","Worin seid ihr schlecht?","Zu wissen, wann man aussteigen sollte; Mein Bier zu vertragen; Lesen, Bücher sind mir ein Buch mit sieben Siegeln."],
  ["17","Was habt ihr kürzlich erworben, und wie?","Nix, die Uhren hab ich schon seit Jahren, ehrlich, Chef; Das Interesse einiger einflussreicher Leute, sie glauben, ich kann ihnen irgendwie helfen; Die Einsicht in meine Fehler, ein Engel hat mir gesagt, ich soll es besser machen."],
  ["18","Was habt ihr kürzlich verloren, und wie?","Meinen letzten Dollar an einen Hochstapler auf dem Sator-Platz; Meinen Stolz, diese blutsaugerischen Gilden nehmen alles, was sie kriegen können; Meine Geduld, aber er hat es herausgefordert."],
  ["19","Was ist eure größte Schwäche?","Meine Sturheit, ich weiß einfach nicht, wann ich nachgeben sollte; Ich sehe in den Leuten unweigerlich das Beste; Mein Bedürfnis nach dem Rausch, wenn das Spiel beginnt, er ist berauschend."],
  ["20","Was ist eure größte Stärke?","Mein Instinkt, ich überlebe seit Jahren damit; Meine große Kraft und das Wissen, wann ich sie einsetze; Mein Verstand ist so scharf, dass ich mich manchmal daran schneide."]]},
 {t:"bsp", b:[
  "Raphael und Morgan schlagen die Organisationstabellen der Times auf S. 84 auf und bauen Raphaels sprechenden Kater weiter aus.",
  {t:"dlg", x:[
   ["Raphael","„Also zuerst meine Nische? Ich glaube, keines der Beispiele passt, aber wenn ich ein Kater bin, wäre ich doch der Informant – so wie der verdeckte Reporter, oder? Niemand verdächtigt eine Katze.“"],
   ["Morgan","„Ja, das klingt großartig. Schreib das auf. Als Nächstes deine Marotten: Die erste kommt von dieser Seite, dann geht’s für die anderen beiden zurück zur Marottentabelle.“"],
   ["Raphael","„Eine 3, das ist „Wie lange seid ihr schon Reporter?“ Na ja, wenn wir seit den Ereignissen von *Die volle Wahrheit* zusammen sind, ziemlich lange, schätze ich – besonders für eine Katze.“"],
   ["Morgan","„Ergibt für mich Sinn, schreiben wir das auf. Jetzt würfel deine anderen Marotten.“"],
   ["Raphael","„Eine 13 und eine 2, also „Was ist euer größtes Versagen?“ und „Was hattet ihr schon immer?“ Die zweite ist einfach: Ich bin eine Katze, also hatte ich wohl schon immer ein Händchen für Leute.“"],
   ["Morgan","„Ja, das ergibt Sinn. Und dein größtes Versagen?“"],
   ["Raphael","„Ich glaube, dass ich nicht weiß, warum ich vernunftbegabt bin. Ich habe versucht, es herauszufinden, aber nie Antworten bekommen.“"],
   ["Morgan","„Großartig, unbedingt aufschreiben!“"]]}
 ]}
]},

{id:"antworten-merkmale", g:1, t:"Aus Antworten werden Merkmale", p:69, b:[
 "Geht eure Antworten durch, denn manche können ohne Änderung zu Merkmalen werden. Andere müssen vielleicht etwas angepasst werden, damit sie im Spiel nutzbar sind. Versucht, Merkmale auf ein paar Wörter oder einen kurzen Satz zu beschränken. Die sind ausdrucksstärker als Ein-Wort-Antworten und lassen sich leichter zurechtbiegen als längere Sätze.",
 "Manchmal passt eine Antwort aus dem Zusammenhang gerissen nicht recht als Merkmal. Seid ihr unsicher, besprecht mögliche Anwendungen mit der Spielleitung. Fragt euch, ob es eine Lage gibt, in der euch das Merkmal hilft – und eine, in der es euch behindert. Könnt ihr beides, besteht das Merkmal die Prüfung und darf auf euren Charakterbogen gekritzelt werden.",
 "Denkt daran, dass aus einer Antwort ein ganz unterschiedliches Merkmal werden kann, je nachdem, wie die Spieler:in sie deutet und welche Figur sie aufbauen will. Hier ein paar Beispiele, wie sich Antworten in verschiedene Merkmale übersetzen lassen.",
 {t:"tbl", head:["Frage","Antwort","Mögliche Merkmale"], rows:[
  ["Was habt ihr kürzlich erworben, und wie?","Nix, die Uhren hab ich schon seit Jahren, ehrlich, Chef.","**Weiß immer, wie spät es ist** / **Ist vom Wagen gefallen** / **Kann besorgen, was ihr braucht**"],
  ["Was ist euer größtes Versagen?","Ich kann keine Stelle länger als ein paar Wochen halten, ohne dass etwas schiefgeht.","**Beeindruckend viel Pech** / **Magnet für Unglück** / **Es ist nie meine Schuld**"],
  ["Was ist eure größte Leistung?","Ich wurde auf Wunsch des Patriziers festgehalten, und wie sich herausstellte, war er tatsächlich recht erfreut.","**Glückspilz** / **Freunde an hohen Stellen** / **Seiner Lordschaft bekannt**"],
  ["Warum wurdet ihr zu Dr. Weißgesicht bestellt?","Ich habe vorgeschlagen, dass wir vielleicht einen Feiertag ohne Tünche und Sahnetorten haben dürften.","**Kein herkömmlicher Denker** / **Mutiger, als ich aussehe** / **Sehnt sich nach etwas anderem**"],
  ["Was wisst ihr über die Kummerkastentanten?","Das sind reizende alte Damen, ich biete ihnen immer eine Tasse Tee an, wenn ich sie unterwegs sehe.","**Lieber einschmeicheln als einstecken** / **In den Schatten immer sicher** / **Weiß, wo es eine gute Tasse Tee gibt**"],
  ["Was ist eure beste Geschichte, die gedruckt wurde?","Ich habe das zeitlose ELFEN STEHLEN MEINEN MANN verfasst … nein, Moment: FRAU BRINGT KOBRA ZUR WELT.","**Interessant ist wichtiger als wahr** / **Durch und durch reißerisch** / **Es ist keine Lüge, wenn die Leute es glauben**"],
  ["Was wäre eure perfekte Beute?","Ein Bratensaft-Sandwich aus Hargas Rippenhaus, mit allen Krusten.","**Denkt immer mit dem Magen** / **Traditioneller Geschmack** / **Kulinarischer Kenner**"],
  ["Welche Lektion werdet ihr nie vergessen?","Es hat keinen Sinn, zuerst zuzuschlagen, wenn man nicht weiß, wohin man schlägt.","**Schnelle Reflexe** / **Eine ruhige Hand, wenn nötig** / **Kenne deinen Feind**"],
  ["Warum Ankh-Morpork?","Wer es hier schafft, schafft es überall!","**Kopf in den Wolken** / **Glaubt, was man mir erzählt hat** / **Will mein Glück machen**"],
  ["Wie habt ihr eure Abschlussprüfung bestanden?","Abschlussprüfung? Zu meiner Zeit hieß das noch „spitze Schuhe eines Toten“!","**Kennt sich aus** / **Ein Überlebender** / **Scheut sich nicht, sich die Hände schmutzig zu machen**"],
  ["Gibt es Polizeiarbeit in eurer Familie?","Jede Menge, mein Onkel sitzt gerade in der Zelle.","**Verbindungen ins Verbrechen** / **Schlägt ein neues Kapitel auf** / **Hier für die Kaution**"],
  ["Warum wurden früher schon Beschwerden gegen euch eingereicht?","Wenn jemand um Hilfe ruft, hilft man! Woher sollte ich wissen, dass es ein Theaterstück war?","**Erst handeln, dann fragen** / **Wörtlich gesinnt** / **Misstraut Schauspielern**"]]}
]},

{id:"glueck-kern-name", g:1, t:"Glück, Kern, Folgen und Name", p:70, b:[
 {t:"karten", x:[
  {h:"Glück", b:["Jeder SC beginnt mit **4 Glück**. Schreibt 4 unter Glück auf euren Charakterbogen. Glück wird auf S. 16 genauer erklärt."]},
  {h:"Kern", b:["Eure Figur beginnt ohne Kern, kann aber im Lauf des Spiels einen erlangen. Lasst das Feld vorerst leer. Mehr über Kerne steht auf S. 17."]},
  {h:"Folgen", b:["Eure Figur beginnt ohne Folgen, sammelt sie aber an, wenn sie Proben nicht schafft oder Zauber wirkt. Mehr über Folgen steht auf S. 37."]}
 ]},
 {t:"h", x:"Name"},
 "Gebt eurer Figur schließlich einen Namen und schreibt ihn auf euren Charakterbogen. Beschreibt eure neue Figur stolz den anderen Spieler:innen und berücksichtigt dabei alles, was ihr aus ihren Merkmalen über sie wisst. Jetzt habt ihr eine spielbereite Figur! Spielt ihr ein Abenteuer, hat die Spielleitung vielleicht eine Eröffnungsszene im Sinn, ansonsten könnt ihr eine auf S. 92 erzeugen.",
 {t:"box", h:"Startausrüstung", b:["Aufmerksamen Lesenden und/oder denen, die schon Rollenspiele gespielt haben, fällt auf, dass bei der Charaktererschaffung etwas fehlt: Ausrüstung, Zeug und Kram. Ihr fragt euch vielleicht, wo diese Dinge sind. Sie stecken in euren Merkmalen.", "Eure Figur hat alles, was man aufgrund ihrer Merkmale von ihr erwarten würde. Mit jedem Merkmal lässt sich begründen, dass eure Figur Zugang zu einem bestimmten Gegenstand oder Ding hat. Ob diese Begründung die Glaubwürdigkeit überstrapaziert, entscheidet die Spielleitung. „Ich bin ein Zauberer, natürlich habe ich den einzigartigen magischen Wälzer, den wir für unser Ziel brauchen!“ ist ein Argument, das bei einer Spielleitung wahrscheinlich wenig Gehör findet, aber „Ich bin eine Näherin, also schaue ich kurz in einem der örtlichen Häuser von ausgezeichnetem Ruf vorbei und leihe mir die Lederwaren, die wir brauchen“ ist ziemlich überzeugend."]},
 {t:"bsp", b:[
  "Morgan und Raphael legen letzte Hand an Raphaels sprechenden Kater.",
  {t:"dlg", x:[
   ["Morgan","„Okay, Nische und Marotten haben wir. Glück fängt bei 4 an, schreib das auf. Den Kern kannst du vorerst lassen, den finden wir im Spiel heraus, und Folgen brauchst du noch keine. Du musst nur noch deine Figur beschreiben und ihr einen Namen geben.“"],
   ["Raphael","„Was hat es damit auf sich, Antworten in Merkmale zu verwandeln?“"],
   ["Morgan","„Gehen wir kurz deine Nische und Marotten durch und sehen, ob wir etwas anpassen müssen.“"],
   ["Raphael","„Okay, meine Nische ist **Verdeckter Reporter**, richtig?“"],
   ["Morgan","„Absolut, die lassen wir. Marotten?“"],
   ["Raphael","„Ich habe **Lange Zeit für eine Katze**, **Hat ein Händchen für Leute** und **Weiß nicht, warum ich sprechen kann**.“"],
   ["Morgan","„Okay. Ich glaube, da können wir etwas feilen. Wie wär’s für die erste mit **Weise über die Jahre hinaus**? Oder **Kennt sich aus**?“"],
   ["Raphael","„Ja, das zweite gefällt mir – mehr Straßenkater-Stimmung.“"],
   ["Morgan","„Cool, eine Idee für die nächste? Was mögen die Leute an dir? Bist du einfach unwiderstehlich flauschig?“"],
   ["Raphael","„Ich hätte es lieber etwas offener. Kann ich einfach ein Händchen für Leute haben?“"],
   ["Morgan","„Möglicherweise, aber ich sehe nicht, wie das je etwas Schlechtes sein könnte.“"],
   ["Raphael","„Wie wär’s mit **Hat ein Händchen für Katzenmenschen**?“"],
   ["Morgan","„Ja, das funktioniert. Gut, die letzte. Die können wir ein bisschen geheimnisvoller machen: wie wär’s mit **Unbekannte Herkunft**?“"],
   ["Raphael","„Ja, gefällt mir.“"],
   ["Morgan","„Großartig! Jetzt nur noch Name und Beschreibung, und du bist fertig.“"],
   ["Raphael","„Ich glaube, er ist ein großer schwarzer Kater namens Narbengesicht, weil er, na ja, eine Narbe hat.“"]]},
  "Die Gruppe kommt wieder zusammen, und alle stellen einander ihre Figuren vor. Jetzt sind sie bereit, ihre Eröffnungsszene aufzubauen."
 ]}
]}

]);
