/* Discworld – Bereich „Spielleitung“, Teil B: Magie und Mechanik (S. 41–43), Unterwegs und der Tod (S. 44–47) */
DW.nsc([
{id:"tod", name:"Der Tod", pron:"Er/Ihm", p:47, img:"leit-tod-spaziergang",
 voll:"Der Bezwinger der Reiche, der Verschlinger der Ozeane, der Dieb der Jahre, das Grab aller Hoffnung, die Letzte Wirklichkeit, der Schnitter der Menschheit, der Assassine, gegen den kein Schloss hält, der einzige Freund der Armen und der beste Arzt für die tödlich Verwundeten. Außerdem ganz kurz Bill Tür und noch kürzer der Schneevater.",
 spezies:"Anthropomorphe Personifikation", nische:"Tod",
 merkmale:["Versucht, das Menschsein zu verstehen", "Es gibt keine Gerechtigkeit, es gibt nur mich", "Ein Experte für vorindustrielles landwirtschaftliches Gerät"],
 eigenart:"Ragt auf, statt zu stehen. Schreitet, statt zu gehen. {TOD}SPRICHT SO",
 b:["Der Tod ist nicht grausam, er mordet nicht, und er posiert nie. Er ist allerdings sehr gut in seinem Beruf. Es gibt viele Redensarten über den Tod, und alle stimmen. Er ist immer jemandes ständiger Begleiter, er streift durch die Straßen, und er lässt sich nicht betrügen.",
  "Im Lauf der Jahrtausende hat er entwickelt, was die Revisoren der Wirklichkeit verächtlich eine Persönlichkeit nennen. Er hat eine Schwäche für Katzen, die zu den wenigen Geschöpfen gehören, die ihn sehen können, und eine Faszination für Spiele, auch wenn er sich sehr anstrengen muss, um zu verlieren. Vor allem aber faszinieren ihn die Menschen."],
 aufhaenger:"Der Tod ist eine sehr beschäftigte anthropomorphe Personifikation. Hier ein paar Gründe, warum er nicht stehen bleiben und plaudern kann:",
 extra:[{t:"wt", id:"wttod", h:"Ausrede", w:"W6", rows:[["1","Eine Epidemie der Dummheit, die über Pseudopolis hinwegfegt."],["2","Ein Schiffbruch vor der Küste von Klatsch."],["3","Er hat einen Termin beim Abt – schon wieder."],["4","Er wird mit dem Ritus von AshkEnte beschworen."],["5","Er glaubt, er hat vielleicht den Kessel angelassen."],["6","Er will einem Curry den Garaus machen.*"]]},
  {t:"fn", x:"* So die Götter wollen, nicht Tim."}]}
]);

DW.reg("leitung", [

{id:"magie-mechanik", g:2, t:"Über Magie und Mechanik", p:41, img:"leit-zauberer", b:[
 {t:"q", x:"Überhaupt keine Magie zu wirken war die Hauptaufgabe der Zauberer – nicht „keine Magie wirken“, weil sie es nicht konnten, sondern keine Magie wirken, obwohl sie es konnten, und es lassen. Jeder unwissende Narr kann daran scheitern, jemand anderen in einen Frosch zu verwandeln. Man muss klug sein, um es zu unterlassen, wenn man weiß, wie leicht es ist.", wer:"Ab die Post"},
 "Schauen wir uns die Magie an und wie sie funktioniert.* Magie ist wie der Rest des Spiels ein Gespräch zwischen euch und den Spieler:innen. Manchmal lassen sich Spieler:innen von der Idee mitreißen, Magie zu wirken, ohne ein echtes Ziel vor Augen zu haben; ihr müsst also dafür sorgen, dass sie klar sagen, was sie erreichen wollen. Etwas wie „Ich will diese Bücher finden“ hilft nicht besonders, fragt also nach Einzelheiten. Fragt immer, was sie zu tun versuchen und wie, denn davon hängt ab, wie viel Glück der Zauber kostet.",
 "Wie bei anderen Proben muss die Spieler:in begründen, warum sie in dem Zauber gut sein sollte, wenn sie einen größeren Ergebniswürfel will. Und wie bei anderen Proben habt ihr das letzte Wort, ob sie das, was sie versucht, überhaupt kann. Bei der magischen Probe ist dieser Teil allerdings gewichtiger als bei anderen. Was immer ihr entscheidet, das Spieler:innen mit Magie tun können (oder nicht), wirkt sich direkt auf das Abenteuer aus.",
 "Die zwei Hauptunterschiede zwischen magischen und allen anderen Proben sind:",
 {t:"ol", x:["Magie kostet immer Glück;", "Magische Folgen sind das Gegenteil normaler Proben."]},
 "Denkt daran, dass fast alle Zauber einen Fall von *Thlabber* auslösen. Das ist der Augenblick, in dem alles gedehnt und dann plötzlich nicht mehr gedehnt wird. Das ist kein Grund zur Sorge und wirkt sich ganz sicher in keiner Weise auf die Welt aus.",
 {t:"h", x:"Wirkung und Glück"},
 "Wie viel Glück ein Zauber kostet, hängt davon ab, wie stark er die aktuelle Szene und die Geschichte insgesamt beeinflusst. Das kann von 0 bis zu so viel reichen, wie ihr wollt, auch wenn alles über 10 wahrscheinlich mehr ist, als die meisten Spieler:innen zu zahlen bereit sind.",
 "Magie, die keinen Einfluss auf Szene oder Geschichte hat, kostet kein Glück. Das kann so einfach sein wie in einem Buch blättern, ohne es zu berühren, oder so aufwendig wie den Ritus von AshkEnte vollziehen, um den Tod auf ein Schwätzchen herbeizurufen. Hat es keinen Einfluss auf Szene oder Geschichte, kostet es kein Glück.",
 "Jede Magie, die die Geschichte beeinflusst oder einer Figur erlaubt, eine Probe zu umgehen, kostet Glück. Am einfachsten stellt ihr fest, ob ein Zauber die Geschichte beeinflusst, indem ihr euch fragt: „Würde diese Handlung eine Probe erfordern?“ Lautet die Antwort ja, sollte der Zauber so viel Glück kosten, wie seine Wirkung bedeutsam ist.",
 "Figuren ein kleines Hemmnis oder Hindernis umgehen zu lassen, kostet sehr wenig Glück, vielleicht 1 oder 2. Das einzigartige Zwergen-Gerät aufzuspüren, das am Grund eines Brunnens am Empirischen Halbmond vergraben liegt, kostet – wenn es tatsächlich euer Ziel war, es zu finden – deutlich mehr. Wahrscheinlich um die 4, vielleicht sogar bis zu 6 Glück, je nachdem, wie wichtig dieses Gerät für eure Geschichte ist.",
 "Ein Zauber, den eine einzelne Figur bewältigen kann, darf nicht mehr als 4 Glück kosten. Alles darüber hinaus erfordert mehrere Figuren. Das sind die wirklich großen, die am Gewebe der Wirklichkeit herumfummeln und das Wesen der Welt – und damit eurer Geschichte – verändern. Solche Zauber sollte man nicht leichtfertig angehen; sie sind wahrscheinlich außergewöhnlich riskant und äußerst mächtig. Es sind die Zauber, bei denen man, wenn sie schiefgehen, nicht die Schuld bekommt, weil keiner von euch mehr übrig ist, um sie zu übernehmen – oder womöglich niemand mehr, um sie zuzuweisen.",
 "Könnt ihr das nötige Glück nicht ausgeben, um den Zauber zu versuchen, könnt ihr ihn nicht einmal versuchen.",
 {t:"h", x:"Was kann Magie?"},
 "Magie hat auf der Scheibenwelt viele Verwendungen, aber sie dienen vor allem der Geschichte, die erzählt wird. Wir wissen, dass der Dekan ein ganzes Einkaufszentrum zerstören kann – wir sehen ihn das in *Alles Sense!* tun –, aber wir sehen ihn keinen dieser Zauber je wieder benutzen.",
 "Wenn ihr entscheidet, ob eure Spieler:innen etwas mit Magie tun können sollten, überlegt, ob es eine interessantere Geschichte ergibt. Nutzt Folgen und Glück, damit Spieler:innen wissen, dass sie einen Preis zahlen müssen, wenn sie etwas wirklich Spielveränderndes versuchen. Magie kann alles, aber sollte sie es diesmal? Das ist die Hauptfrage, die ihr euch bei jedem Zauber stellen solltet, den eure Spieler:innen ausgeheckt haben.",
 {t:"fn", x:"* Zumindest was die Spielmechanik angeht. Ponder Stibbons hat Jahrzehnte seines Lebens damit verbracht, bleicher und unterernährter zu werden, während er herauszufinden versuchte, wie Magie funktioniert, und das Ergebnis ist, dass er sich ziemlich sicher ist, dass sie es tut."}
]},

{id:"magische-folgen", g:2, t:"Magische Folgen", p:42, img:"spiel-kerkerdimensionen", b:[
 {t:"q", x:"Oh, man konnte alles mit Magie erledigen, das konnte man sicher. Man konnte einen Zauberstab schwenken und funkelnde Sterne und einen frisch gebackenen Laib bekommen. Man konnte Fische fertig gekocht aus dem Meer springen lassen. Und dann, irgendwo, irgendwie, präsentierte die Magie ihre Rechnung, und die war immer höher, als man sich leisten konnte.", wer:"Ab die Post"},
 "Magische Folgen sind das Gegenstück zu denen einer normalen Probe. Normalerweise gibt es Folgen nur bei einer misslungenen Probe. Magische Folgen dagegen gibt es nur, wenn eine magische Probe gelingt. Ein verpuffender Zauber ist für alle wahrscheinlich das sicherste Ergebnis, aber wenn Figuren anfangen, erfolgreich Löcher in das Gewebe der Wirklichkeit zu stechen, wird es seltsam.",
 "Fangt klein an und steigert euch. Ihr wollt nicht, dass Leute beim ersten Zauber gleich in die Kerkerdimensionen reißen, aber macht die Folgen mit jedem gelungenen Zauber schwerer, bis es erzählerisch passt, dass die Dinge völlig wahoonieförmig werden.",
 "Wie alle Folgen können sie sofort offensichtlich sein und sogar zu neuen Merkmalen führen. Sie müssen aber nicht sofort wirken. Es kann viel befriedigender sein, sie langsam im Hintergrund anwachsen zu lassen, während die Figuren glauben, ihren Zauber ohne Nachwirkungen durchgezogen zu haben.",
 "Denkt daran: Da Zauber Glück kosten, lassen sich magische Folgen nicht wie normale Folgen vermeiden. Merkmale, die durch sie entstehen, sollten eher zum ungewöhnlichen Ende des Folgen-Spektrums neigen.",
 "In extremen Fällen ist die Folge ein magisches Missgeschick oder sogar eine magische Missgestalt. Wie eine Nahtoderfahrung kann das dazu führen, dass der SC (oder die SC) aus der Geschichte genommen werden. Wie bei allen Folgen und Merkmalen könnt ihr das gern für den Tisch öffnen und sehen, welche Vorschläge eure Spieler:innen haben, wie die Magie die weitere Erzählung beeinflussen könnte.",
 {t:"wt", id:"wtmagie", h:"Magische Missgeschicke", w:"W8", rows:[
  ["1","Die Revisoren der Wirklichkeit betrachten euren Spott über die Naturgesetze und beschließen, dass ihr es wert seid, beobachtet zu werden. Jeder weitere Versuch, Magie zu wirken, führt dazu, dass ihr kurzerhand aus dem Dasein geblinzelt werdet. Erhaltet das Merkmal **Auf Bewährung**."],
  ["2","Euer magischer Brennpunkt ist auf einen Gegenstand in der Nähe übergegangen, etwa euren Hut, der jetzt spricht. Legt seine Persönlichkeit nach dem gewirkten Zauber fest."],
  ["3","Die Naturgesetze in eurer unmittelbaren Umgebung lockern sich beträchtlich. In der nächsten Stunde schweben Gegenstände, Türen öffnen sich in andere Räume, und die Schwerkraft kehrt sich gelegentlich um."],
  ["4","Der Zauber wirkt, aber viel zu gut. Der kleine Lichtzauber, den ihr gewirkt habt, erleuchtet zum Beispiel jetzt den ganzen Bezirk, und in den nächsten 24 Stunden wird es nicht Nacht."],
  ["5","Ihr verpasst euch eine magische Missgestalt. Werft einen W100 und schlagt das nächstgelegene Buch, das nichts mit Rollenspiel zu tun hat, auf der gewürfelten Seite auf. Ihr wurdet in das erste Substantiv verwandelt, das ihr auf dieser Seite seht. Ändert euren Charakterbogen entsprechend."],
  ["6","Ihr habt versehentlich ein Loch in die Kerkerdimensionen gestochen. Ein Geschöpf mit einer gottlosen* Zahl von Tentakeln beginnt, sich ins Dasein zu winden. Darum solltet ihr euch eine Weile vorrangig kümmern."],
  ["7","Der Zauber verursacht in einem Umkreis von 10 Metern zufällige Wetterlagen. Es könnte Frösche regnen, mitten im Sommer schneien, oder ihr seid von einem ständigen Windstoß umgeben."],
  ["8","Ihr beginnt nach oben zu schweben. Falls euch jemand zu packen bekommt, solltet ihr in schwere Stiefel investieren. Erhaltet das Merkmal **Leichter als Luft**."]]},
 {t:"fn", x:"* Jedenfalls ganz sicher keine der besseren Götterklasse."}
]},

{id:"magie-beispiel", g:2, t:"Beispiel: Magie im Spiel", p:43, b:[
 {t:"bsp", h:"Beispiel: Magie im Spiel", b:[
  "Eleri und ihre Gruppe sind Zauberer in einer kniffligen Lage. Jemand hat einen Haufen Bücher aus der Bibliothek gelassen, und jetzt haben sie sich überall in der UU versteckt. Der Bibliothekar tut, was er kann, hat aber nur zwei Paar Hände (na gut, vier, wenn man die Füße mitzählt), also hat er diese Zauberer angeworben, um die übrigen Bücher aufzuspüren.",
  {t:"dlg", x:[
   ["Eleri", "„Wir sind Zauberer, benehmen wir uns auch so. Wir müssen dieses Problem doch mit Magie lösen können. Wenn wir wissen, welche Bücher wir suchen, könnten wir einen Zauber versuchen, um sie zu finden.“"],
   ["SL", "„Okay, ihr habt vom Bibliothekar eine Liste der fehlenden Bücher. Was wollt ihr zuerst finden?“"],
   ["Eleri", "„Fehlen Bücher über Dämonen?“"],
   ["SL", "„Ja, ein paar. Und einige über esoterisches Gärtnern und eins über den unausweichlichen Wärmetod des Universums, auch wenn das letzte als leichte Lektüre vermerkt ist.“"],
   ["Eleri", "„Gut, okay, was, wenn wir versuchen, einen Kobold zu beschwören, der uns hilft, die Dämonenbücher zu finden, so eine Art kleiner Geigerzähler? Kobolde müssen doch auf dämonische Magie reagieren, oder? Weil sie Dämonen sind.“"],
   ["SL", "„Ja, es gibt Kobolde für so ziemlich alles, also sehe ich nicht, warum es keinen Spürkobold geben sollte. Welches Merkmal hilft dir hier?“"],
   ["Eleri", "„Ich habe **Arbeitet nebenher als Idiot im Dis-Organizer-Laden**, also verstehe ich wohl ein bisschen was von Kobolden.“"],
   ["SL", "„Ja, absolut. Klingt nach W10 und 2 Glück. Wie willst du den Zauber nennen?“"],
   ["Eleri", "„Äh … Kobold-Unmöglicher Buchsucher?“"]
  ]},
  "Eleri gibt 2 Glück aus und wirft ihren Ergebniswürfel gegen den Narrativiumwürfel: eine 6 auf dem Ergebniswürfel gegen eine 5 auf dem Narrativiumwürfel.",
  {t:"dlg", x:[
   ["SL", "„Okay, du bekommst den Zauber hin. Er fällt dir relativ leicht. Als Teilzeit-Idiot hast du schon reichlich Kobolde beschworen. Ihren Zweck richtig hinzubekommen kann knifflig sein, aber du bist dir ziemlich sicher, dass du diesen hier als Spürkobold hinbekommen hast. Nach der Beschwörungsformel, dem vorgeschriebenen Armewedeln und den mystischen Symbolen gibt es einen lauten Knall und eine Rauchwolke. Welche Farbe hat der Kobold, den du beschworen hast?“"],
   ["Eleri", "„So eine Art Lila.“"],
   ["SL", "„Schön, mitten im Kreis steht ein lila Kobold. Er schaut dich eine Sekunde lang an und rennt dann den Flur hinunter.“"],
   ["Eleri", "„Ach, ihr Götter, hinter dem kleinen Mistkerl her!“"]
  ]},
  "Die Gruppe jagt den Kobold in der Hoffnung, dass er sie zu den gesuchten Büchern führt. Nach ein paar Augenblicken gibt es einen weiteren Knall, dann noch einen, während im unbeaufsichtigten Beschwörungskreis immer mehr Kobolde ins Dasein ploppen."
 ]}
]},

{id:"unterwegs", g:3, t:"Unterwegs", p:44, img:"leit-flussgaenger", b:[
 "Ankh-Morpork ist eine riesige Stadt voller belebter Hauptstraßen und geschichtsträchtiger Gassen (auch wenn es unter dem Dreck schwer sein kann, das eine vom anderen zu unterscheiden). Als Spielleitung seid ihr dafür verantwortlich zu beschreiben, wie eure Spieler:innen von einem Ort zum anderen kommen. Das kann so einfach sein, wie ihr wollt.",
 "Für manche Gruppen liegt die Freude darin, die Stadt zu erkunden und euren Beschreibungen der dreckbedeckten Straßen und klapprigen Gebäude zu lauschen, an denen sie vorbeikommen.",
 "Für andere zählt die Handlung, und sie wollen den ganzen Beschreibungskram überspringen und direkt dorthin, wo sie hinwollen. Keine dieser Spielweisen ist besser als die andere, und ihr werdet wahrscheinlich irgendwo in der Mitte landen. Breitet aus, wo ihr wollt, und kürzt ab, wo nicht.",
 "Wann immer ihr den Weg zwischen zwei Orten beleben wollt, könnt ihr auf der folgenden Tabelle würfeln, um ein Ereignis als Anregung zu erzeugen.",
 {t:"wt", id:"wtreise", h:"Unterwegs-Ereignisse", w:"W20", rows:[
  ["1","**T.M.S.I.D.R. Schnapper:** Treibe-mich-selbst-in-den-Ruin Schnapper (S. 144) versucht, euch eine echte, völlig ungefährliche Wurst-im-Brötchen zu verkaufen."],
  ["2","**Käsestechen:** Eine kleine Menge feuert einen Käsestech-Wettbewerb an. An beiden Enden der Straße werden Käselaibe aufgereiht und mit hoher Geschwindigkeit aufeinander zugerollt. Gewonnen hat der letzte Käse, der noch steht."],
  ["3","**Kartoffelbrei:** Ein Karren voller Kartoffeln rumpelt die Straße hinunter, verfolgt von einem panischen Gemüsehändler, der „Haltet die Knollen!“ ruft."],
  ["4","**Stau:** Etwa ein Dutzend Karren blockieren die Straße, und ihre Pferde sind gereizt genug, um jeden zu treten, der zu nahe kommt. Würde nur einer von ihnen ein paar Zentimeter zurücksetzen, ließe sich der Stau auflösen."],
  ["5","**Amtlicher Raubüberfall:** Ein paar Diebe erleichtern die Gruppe gewaltsam um ihre Wertsachen … es sei denn natürlich, sie haben eine Versicherungspolice bei der Gilde."],
  ["6","**Jungs auf Sauftour:** Ein Fass Whisky wackelt die Straße hinunter, getragen von einem Schwarm winziger, blauer Männer in Kilts, die „Hoi, is’ ’n ganz Dicker!“ rufen."],
  ["7","**Kampagne für gleiche Höhen:** Eine Gruppe mit Schildern wie „Tritt nicht auf mich“, „Kleinere Arbeiter, nicht kleinere Ansprüche“ und „Schreibtische sind zu hoch“ versperrt den Weg. Fast die ganze Gruppe besteht aus Menschen."],
  ["8","**Erdloch:** Das Kopfsteinpflaster bricht hier gefährlich ein und gibt den Blick auf ein Stück der Unterstadt frei. Dieser geheime Eingang ließe sich nutzen, um unter benachbarten Geschäften hindurch und um sie herum zu gehen."],
  ["9","**Straßentheater:** Wählt einen beliebigen Scheibenwelt-Roman. Das Stück ist eine Dramatisierung seiner Ereignisse."],
  ["10","**Finde die Dame:** Ein charmanter Mann mischt drei Karten und lädt einen SC ein, die Dame zu finden. Lässt er sich darauf ein, leert ihm eine Frau von hinten die Taschen."],
  ["11","**Nicht ihre Sternstunde:** Ein paar Wächter versuchen verzweifelt, eine entlaufene Gans zu fangen. Die Gans scheint die Oberhand zu haben."],
  ["12","**Schandmaul:** Ein klatschianischer Händler verkauft „Echte klatschianische Krummsäbel“, aber der Papagei auf seiner Schulter verrät den SC ihre wahre Qualität."],
  ["13","**Omnianische Prediger:** Ein schlicht gekleideter Mann steht an der Straßenecke und brüllt aus vollem Hals, dass man sich Om unterwerfen solle, sonst werde man es gewisslich bereuen."],
  ["14","**Pantomime:** Ein verstohlener Pantomime übt seine Kunst aus. Das ist höchst gefährlich und verboten, aber er weigert sich, sich von der Obrigkeit zum Schweigen bringen zu lassen. Im übertragenen Sinn, versteht sich."],
  ["15","**Zwergenbäcker:** An einem Stand wird frisches Zwergenbrot verkauft, noch heiß aus der Schmiede und hart wie Stahl."],
  ["16","**Der Schwarm:** Eine Gruppe rüpelhafter Tauben beginnt, die Gruppe einzukreisen. Werden sie gefüttert, ziehen sie ab, sonst werden es während der nächsten Szene immer mehr, bis die Gruppe von Hunderten leicht bedrohlicher Vögel umringt ist."],
  ["17","**Vom Karren gefallen:** Ein einäugiger Mann im langen Mantel verkauft Ikonographen, persönliche Dis-Organizer und teure Uhren. Die Kobolde in diesen Geräten protestieren, dass sie gestohlen sind."],
  ["18","**Times-Verkäufer:** Ein Bettler schlurft heran und bietet einen Stapel der *Times* an, Ankh-Morporks erster Zeitung am Platz."],
  ["19","**Brücke zu verkaufen:** Ein schmuddelig aussehender Mann behauptet, die Urkunde für die Messingbrücke samt Nilpferden zu besitzen, zu einem Schnäppchenpreis."],
  ["20","**Doppelvorstellung:** Würfelt zweimal auf dieser Tabelle und handelt beide Begegnungen ab."]]}
]},

{id:"wieder-tod", g:3, t:"Wieder der Tod", p:46, img:"leit-tod-katze", b:[
 "Der Tod tritt in vielerlei Gestalt auf. Seine häufigste ist die eines über zwei Meter großen, in eine Robe gehüllten Skeletts mit Sense, aber alle seine Erscheinungsformen sind berobt, besenst und entfleischt. Einige bemerkenswerte Erscheinungsformen haben seit den Ereignissen von *Alles Sense!* ein vom Tod selbst getrenntes Dasein angenommen, nämlich der Tod der Ratten und der Tod der Flöhe.* Alle Erscheinungsformen des Todes haben eines gemeinsam: Sie {TOD}REDEN SO. Das heißt, wie das Zuschlagen eines bleiernen Sargdeckels oder wie zwei Granitplatten, die aufeinanderkrachen. Auch der Grimme Quieker hat eine Stimme, bei der selbst die größten Nagetiere erzittern.",
 "Trotz seines Beinamens hat der Tod der Scheibenwelt wenig Grimmiges an sich. Er ist ein neugieriges Wesen, fasziniert von den Millionen Arten, auf die Sterbliche sich die wenige Zeit kompliziert machen, die sie haben. Er mag körperlich herzlos sein, aber er ist nicht grausam, sondern sich nur seiner Pflicht sehr bewusst – Der Pflicht. Worauf kann die Ernte hoffen, wenn nicht auf die Sorgfalt des Schnitters?",
 {t:"h", x:"Arten des Todes"},
 "Es gibt drei grobe Arten von Tod, die ein SC erleben kann; die häufigste davon ist der körperliche Tod. Es gibt aber auch die Möglichkeit eines gesellschaftlichen oder sogar eines magischen Todes.",
 {t:"karten", x:[
  {h:"Körperlicher Tod", b:["Das ist euer – in Ermangelung eines besseren Wortes – gewöhnlicher Tod. Ein SC hat etwas versucht und ist gescheitert. Jetzt steht er da, blickt auf seinen eigenen Körper hinab und begreift langsam, dass die Dinge viel schlimmer stehen, als er dachte. Zum Begreifen gesellt sich das Klicken knochiger Füße."]},
  {h:"Gesellschaftlicher Tod", b:["Hier hat sich ein SC so gründlich von denen abgesondert, auf die er sich verlassen zu können glaubte – seiner Gilde, seiner Organisation oder sogar den anderen SC –, dass ihn seine Taten eingeholt haben. Das können Schuldeneintreiber sein, die eine riesige Schuld einfordern, oder die Leute des Patriziers, die nachts kommen, um den SC festzusetzen. Was immer er getan hat, der Tod erscheint, um ihn aus der Geschichte zu geleiten."]},
  {h:"Magischer Tod", b:["Magische Tode geschehen, wenn ein SC von Magie zerlegt wird, sei es als Ziel eines fiesen Zaubers oder durch magische Folgen. Magische Folgen sind auf S. 42 beschrieben."]}
 ]},
 {t:"h", x:"Ein Spiel mit dem Tod"},
 "Aus Sicht der Spielleitung ist der Tod in *Abenteuer in Ankh-Morpork* mehr als ein Schwert (oder eine Sense), das über den Köpfen der Spielercharaktere hängt. Er ist die anthropomorphe Personifikation vom Ende aller Dinge, des Unausweichlichen. Er ist aber auch ein großartiger Anlass für vergnügliche Begegnungen mit Figuren. Zum Tod aus Sicht der Spieler:innen siehe Charaktertod, S. 21.",
 "Scheitert eine Spieler:in an einer Probe, bei der der Tod eine echte Möglichkeit ist, und hat sie kein Glück mehr oder entscheidet sich, keins auszugeben**, erlebt sie eine Nahtoderfahrung. Welche Erscheinungsform des Todes sie erlebt, hängt von der Lage ab, in der sie sich befindet. Alles, was eine Figur aus der Geschichte nehmen kann, gilt als Tod.",
 "Lasst die übrigen SC zu verschwommenen grauen Gestalten verblassen, während ihr die Erzählung einfriert. Nehmt die Spieler:in, deren Zeit gekommen ist, beiseite und entscheidet mit ihr, was als Nächstes passiert.",
 "Es gibt zwei Möglichkeiten:",
 {t:"ul", x:["Der SC fügt sich in sein Schicksal, nimmt den Tod bei der Hand und geht an jenen Ort, wo der Sand silbern ist, der Himmel dunkel und die Wüste sich in alle Richtungen erstreckt.", "*– oder –*", "Der SC kehrt, verändert durch seine Nahtoderfahrung, in die Erzählung zurück. Beides führt zu einem Gespräch mit dem Tod, aber entscheidet sich die Spieler:in für Letzteres, erhält sie ein neues Merkmal oder ändert ein bestehendes, um ihre Nahtoderfahrung widerzuspiegeln."]},
 "Entscheidet die Spieler:in, dass die Zeit ihres SC gekommen ist, gibt es mehrere Möglichkeiten. Am einfachsten erschafft die Spieler:in eine neue Figur. Das kann sie im Hintergrund tun, während der Rest der Gruppe weiterspielt, oder zwischen den Sitzungen, um beim nächsten Mal mit einer brandneuen Figur zurückzukehren. Manche Spieler:innen wollen vielleicht auch schon bei der Charaktererschaffung eine oder zwei Figuren vorbereiten, damit sie eine weitere bereithaben, falls ihre Hauptfigur stirbt.",
 "Die andere Möglichkeit: Die Spieler:in erschafft von nun an in jeder Szene einen neuen NSC und führt ihn ein, zumindest bis zum Ende der Sitzung. Anleitung zum Erschaffen von NSC findet ihr auf S. 100.",
 "Welche Möglichkeit die Spieler:in wählt, hängt vor allem von ihr ab und davon, wie viel Sitzung oder Geschichte noch übrig ist. Solange es die Wahl der Spieler:in ist und sie mit dem Ergebnis zufrieden ist, gewinnen alle. Na ja, außer dem jetzt toten SC.",
 {t:"nsc", id:"tod"},
 {t:"fn", x:"* Wie man einen berobten, besensten und vor allem skelettierten Floh haben kann, weiß niemand. Am besten denkt man nicht zu genau darüber nach."},
 {t:"fn", x:"** Das passiert öfter, als man denkt. Manche Leute wollen sich einfach hinsetzen und etwas Zeit mit der anthropomorphen Personifikation vom Ende aller Dinge verbringen. Er spielt gern Schach, auch wenn er sich nur schwer merken kann, wie die Pferde ziehen."}
]}

]);
