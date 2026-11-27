/* Discworld – Bereich „Charaktere“, Teil A: Das Spiel aufsetzen und die Gruppe erschaffen (S. 49–56) */
DW.reg("charaktere", [

{id:"aufsetzen", g:0, t:"Das Spiel aufsetzen", p:49, img:"anl-nachtwache", sub:"Darin lernen wir Gruppenmenschen kennen – organisieren uns – umarmen den Schmelztiegel – begegnen den üblichen Verdächtigen – finden unsere Nische – werden schrullig – suchen unser Zeug – und nehmen den längeren Blick", b:[
 "Ihr seid also bereit, in eine Runde Scheibenwelt einzutauchen. Vielleicht habt ihr schon eine Idee, was für eine Geschichte ihr erzählen wollt. Vielleicht seid ihr erst bis „irgendwas in Ankh-Morpork“ gekommen. So oder so: Atmet tief durch und denkt daran – eine Runde *Abenteuer in Ankh-Morpork* zu leiten ist leichter, als ihr denkt!",
 "Folgt den Schritten unten, und ihr spielt im Handumdrehen.",
 {t:"karten", x:[
  {h:"Schritt 1: Lest die Regeln", b:["Auf S. 9 besprechen wir die allgemeinen Spielregeln. Ihr braucht kein lexikalisches Wissen darüber, wie das Spiel funktioniert, aber es ist gut, die Grundlagen des Gesprächs (S. 10), den Ablauf einer Probe (S. 11) und die Merkmale (S. 12) zu kennen."]},
  {h:"Schritt 2: Welche Art Abenteuer?", b:["Es gibt zwei Arten, *Abenteuer in Ankh-Morpork* zu spielen: ein veröffentlichtes Abenteuer (etwa *Grundlagen der Unsichtbaren Akademie* auf S. 197) oder eine eigene Geschichte. Veröffentlichte Abenteuer geben allen am Tisch einen Rahmen und eignen sich hervorragend für neue Spieler:innen und Spielleitungen. Eigene Geschichten am Tisch zu erschaffen verlangt etwas mehr Spontaneität, ist aber ein phänomenaler Weg, ins Spiel einzutauchen und die Kreativität der Gruppe für eine unvergessliche Erzählung zu nutzen.", "Leitet ihr ein veröffentlichtes Abenteuer, ist jetzt ein guter Zeitpunkt für die Spielleitung, es durchzulesen. Sie muss nicht alles wissen, sollte aber die Themen kennen und vor allem alle Änderungen, die das Abenteuer an der Gruppen- oder Charaktererschaffung vornimmt. Manche Abenteuer liefern vorgefertigte Charaktere, manche schlagen bestimmte Gruppen vor, und manche lassen sich mit jeder Gruppe spielen!"]},
  {h:"Schritt 3: Material sammeln", b:[{t:"ul", x:["Einen Gruppenbogen (S. 218)", "Einen Charakterbogen pro Spieler:in (S. 218)", "Würfel (S. 7)", "Schmierpapier", "Bleistifte und Radiergummis", "Einen kreativen Kopf"]}]},
  {h:"Schritt 4: Die Gruppe erschaffen", b:["Eine Gruppe wird vor allem durch die Organisation bestimmt, der eure Figuren angehören, etwa die Stadtwache oder die Unsichtbare Universität. Folgt mit euren Spieler:innen der Anleitung unten, um eure Gruppe zu erschaffen.", "Das ist der erste Schritt, bei dem die anderen Spieler:innen am Tisch sitzen müssen. Hört also auf, still mit einer schönen Tasse Tee dazusitzen, und versammelt die Gleichgesinnten, denen ihr seit Monaten immer weniger dezente Hinweise schickt."]},
  {h:"Schritt 5: Die Charaktere erschaffen", b:["Als Nächstes erschafft jede Spieler:in einen Spielercharakter (kurz SC). Die Regeln dafür stehen auf S. 59; am Ende hat jede Spieler:in einen ausgefüllten Charakterbogen."]},
  {h:"Schritt 6: Das Spiel beginnen", b:["Erzeugt eine Anregung für eure erste Szene auf S. 92 oder rennt einfach mit einer Idee los, die bei der Charaktererschaffung aufkam. Ab jetzt spielt ihr. Viel Spaß, lasst euch nicht festnehmen, und esst nichts, was T.M.S.I.D.R. Schnapper euch verkauft."]}
 ]},
 {t:"box", h:"Was ist eine Figur?", b:["Im Kern ist eine Figur ein personenförmiger Haufen Merkmale. Manche davon teilen alle Figuren der Gruppe; sie stehen auf dem Gruppenbogen. Die meisten gehören aber zu einzelnen Figuren und stehen deshalb auf dem Charakterbogen jedes SC. Merkmale werden auf S. 10 ausführlicher erklärt, aber vorerst genügt es zu wissen, dass es kurze, beschreibende Aussagen über eure Figur sind."]}
]},

{id:"gruppe", g:0, t:"Eine Gruppe erschaffen", p:50, b:[
 "Um eure Gruppe zu erschaffen, füllt folgende Angaben auf eurem Gruppenbogen aus:",
 {t:"ul", x:["**Gruppenname**", "**Organisation**", "**Gruppenziel**", "**Gruppenvergangenheit**", "**Gruppengegenwart**"]},
 {t:"h", x:"Organisation"},
 "In Ankh-Morpork gibt es viele verschiedene Völker, und sie neigen dazu, sich zusammenzudrängen wie aufgeschreckte Flussvögel, die darauf warten, dass etwas Größeres vorbeikommt und sie frisst. Deshalb haben die Gruppen, die ihr spielen könnt, eines gemeinsam: ihre Organisation. Schließlich kümmern sich Zauberer ums Zaubern und Wächter ums Wachen.",
 "Viele veröffentlichte Abenteuer sind für eine bestimmte Organisation gedacht. In dem Fall tragt die im Abenteuer genannte Organisation ein. Oder geht zu S. 94, wählt eine vorgefertigte Gruppe, überspringt die ganze Charaktererschaffung und stürzt euch direkt in euer Abenteuer.",
 "Ansonsten stellt euren Spieler:innen die folgenden Organisationen vor. Entscheidet gemeinsam, welcher ihr alle angehört, und schreibt ihren Namen auf den Gruppenbogen. Die Organisationen werden auf den folgenden Seiten genauer erklärt, aber die Tabelle unten vermittelt ein Gefühl dafür, welche Handlungsköder bei jeder Organisation wahrscheinlich auftauchen. Lest sie am besten laut vor und spürt, worauf sich eure Spieler:innen freuen, damit ihr diese Elemente in euer Spiel einweben könnt.",
 {t:"wt", id:"wtorg", h:"Organisation", w:"W10", head:["","Organisation","Wählt sie, wenn euer Abenteuer Folgendes enthalten soll …"], rows:[
  ["1","Die Stadtwache","Rätsel lösen, moralische Entscheidungen und andere beschützen. S. 72"],
  ["2","Unsichtbare Universität","Magischer Wahnsinn und die Metaphysik der Scheibenwelt erkunden. S. 74"],
  ["3","Schüler der Assassinengilde","Buchstäbliche Dolchstöße, feine Gesellschaft und politische Verstrickungen. S. 76"],
  ["4","Besorgte Bürgerschaft","Kleine Rätsel, Gezänk untereinander und mäandernder Unsinn. S. 78"],
  ["5","Diebesgilde","Raubzüge planen und NSC überlisten. S. 80"],
  ["6","Bettlergilde","Selbstironischer Humor und NSC gegen sich aufbringen. S. 82"],
  ["7","Die Times","Der Wahrheit auf die Spur kommen und Rätsel aufdecken. S. 84"],
  ["8","Näherinnengilde","Zweideutigkeiten und sanfte Macht ausüben. S. 86"],
  ["9","Narrengilde","Komik und gegenseitiges Aufgreifen von Pointen. S. 88"],
  ["10","Besucher in Ankh-Morpork","Die Stadt erkunden und Figuren aus den Scheibenwelt-Romanen begegnen. S. 90"]]},
 {t:"h", x:"Gemischte Gruppen"},
 "Die Gruppenerschaffung zieht der Gruppe eine Grenze. Sie soll den Spieler:innen helfen, Figuren innerhalb eines gemeinsamen Themas zu erschaffen und so am Ende eine stimmige Gruppe zu haben. Manche Geschichten profitieren aber von einer bunteren Zusammenstellung, einem Mischmasch verschiedener Leute, die zusammengewürfelt werden, um die Arbeit zu erledigen und unterwegs Freunde zu finden.*",
 "Für eine gemischte Gruppe würfelt oder wählt jede Spieler:in ihre Organisation einzeln auf der Tabelle oben statt als Gruppe (auch wenn es völlig in Ordnung ist, wenn zwei Spieler:innen dieselbe Organisation wollen). Der Schwerpunkt der restlichen Gruppenerschaffung sollte darauf liegen, diese ungleichen Figuren miteinander zu verbinden. Sehr selten findet man auf der Scheibenwelt Assassinenschüler und die Diebesgilde bei der Zusammenarbeit, also müsst ihr begründen, wie diese seltsame Lage zustande gekommen ist. Wählt ihr diesen Weg, sollte sich die Nische (S. 67) aller darauf beziehen, wer sie sind, statt auf die Gruppe als Ganzes – denkt aber daran, dass ihre Nische das ist, was sie speziell in diese Gruppe einbringen.",
 {t:"box", h:"Organisation als Merkmal", b:["Eure Gruppe selbst ist ein Merkmal, das ihr nutzen könnt, und wie bei allen Merkmalen könnt ihr davon ausgehen, dass ihr die dazugehörigen Gegenstände habt. Zauberer haben Roben und einen Stab mit Knauf an den Enden, Reporter Notizbücher und Ikonographen und Diebe ihre Gildenlizenz und das passende Werkzeug ihres langfingrigen Gewerbes."]},
 {t:"bsp", b:[
  "Morgan und ihre Freunde Raphael, Paulina, Shannon und Corey brechen zu einem Abenteuer in Ankh-Morpork auf. Sie haben schon ein veröffentlichtes Abenteuer gespielt und beschließen, sich diesmal eine eigene Geschichte auszudenken. Morgan legt den Gruppenbogen für ihre gemeinsamen Kritzeleien bereit.",
  {t:"dlg", x:[["Morgan","„Gut. Das Wichtigste zuerst: Welche Organisation wollt ihr – oder sollen wir würfeln?“"],["Raphael","„Lass uns würfeln, soll die Herrin entscheiden.“"]]},
  "Die Gruppe würfelt eine 7.",
  {t:"dlg", x:[["Morgan","„Na gut, dann also die Times!“"]]}
 ]},
 {t:"fn", x:"* Solche Abenteuer beginnen aus irgendeinem Grund immer in einer Taverne."}
]},

{id:"ziel", g:0, t:"Ziel", p:53, b:[
 "Eure Gruppe hat sich mit einem Ziel vor Augen zusammengefunden, sei es eine grobe Richtung oder ein bestimmtes Vorhaben. Im Spiel hält euer Ziel die Gruppe zusammen und verringert die Gefahr, dass sie gegeneinander arbeitet – auch wenn es nie verhindert, dass sie mit gegensätzlichen Methoden arbeitet.",
 "Um ein Ziel zu erschaffen, würfelt entweder auf der Zieltabelle auf der Seite eurer Organisation (S. 73–90) oder legt gemeinsam ein Ziel fest. Erschafft ihr ein Ziel von Grund auf, bedenkt Folgendes:",
 {t:"ul", x:["Ist es theoretisch erreichbar?", "Bezieht es sich auf ein Gebiet, eine Person oder eine bestimmte Gruppe?", "Hängt es mit eurer Organisation zusammen?", "Werdet ihr wissen, wann ihr es erreicht habt?", "Steht euch mindestens ein klares Hindernis im Weg?", "Geht es über euren normalen Alltag hinaus?", "Klingt es so, als würde seine Lösung zu einer interessanten Geschichte führen?"]},
 "Je mehr dieser Fragen ihr mit „Ja“ beantworten könnt, desto besser ist das Ziel eurer Gruppe. Habt ihr euch auf ein Ziel geeinigt, schreibt es auf euren Gruppenbogen.",
 {t:"box", h:"Bestimmte Ziele", b:["Beim Formulieren eines Ziels ist bestimmt und dringlich besser als allgemein und passiv. „Die Gesetze und Verordnungen der Städte Ankh und Morpork wahren“ wäre etwas zu allgemein und verlangt von der Spielleitung, Probleme einzuführen, die die SC überwinden müssen. „Rätselhafte Verschwinden in den Schatten untersuchen“ dagegen ist ein Ziel, das zum Handeln auffordert und schon dadurch eine Geschichte erzeugt, dass man versucht, die Antworten im Spiel zu erweitern."]},
 {t:"bsp", b:[
  {t:"dlg", x:[["Morgan","„Okay, wir wissen, wer wir sind. Was machen wir?“"],["Paulina","„Bei den Beispielzielen gefällt mir die Idee mit der vermissten Person, also wie wär’s mit Nummer drei? William de Worde wird vermisst, und wir müssen ihn finden.“"]]},
  "Alle am Tisch finden, dass das nach einem lustigen Ziel klingt, und die Gruppenerschaffung geht weiter."
 ]}
]},

{id:"vergangenheit", g:0, t:"Gruppenvergangenheit", p:54, b:[
 "Nur Überraschungspartys tauchen aus dem Nichts auf. Eure Gruppe kennt sich höchstwahrscheinlich, sei es von einem kürzlichen Treffen oder aus langjährigen Beziehungen, beruflichen wie persönlichen. Das meiste dieser Vergangenheit lässt sich im Spiel erkunden, aber würfelt vorerst auf der Tabelle unten und denkt euch als Gruppe eine Antwort aus. Schreibt die Antwort unter Gruppenvergangenheit auf euren Gruppenbogen. Denkt daran: Auch sie zählt als gemeinsames Merkmal der Gruppenmitglieder.",
 {t:"wt", id:"wtvergangen", h:"Gruppenvergangenheit", w:"W10", head:["","Frage","Beispielantworten / Merkmale"], rows:[
  ["1","Wie lange arbeitet ihr schon zusammen?","Seit der Drache kam; Seit Dienstag vor einer Woche; Lange genug, um einander satt zu haben."],
  ["2","Was war ungewöhnlich an eurem ersten Treffen?","Wir litten alle am Unterkater unseres Feiertrunks; Es schneite im Sommer; Wir waren alle zur falschen Zeit am falschen Ort."],
  ["3","Über welchen „Vorfall“ spricht die Gruppe nicht?","Die Sache mit der Alchimistengilde; Der Auftrag, den wir königlich versemmelt haben; Das Mal, als wir ein Gruppenmitglied beim Kartenspiel verloren und es durch immer speziellere und lächerlichere Herausforderungen zurückgewinnen mussten."],
  ["4","Was hat die Gruppe ursprünglich zusammengebracht?","Wir haben die Gruppe von unseren Eltern geerbt; Wir wurden alle für einen Auftrag abgeworben; Wir haben getrunken und fanden es eine gute Idee."],
  ["5","Welchen „Vorfall“ erwähnt die Gruppe ständig?","Das Mal, als wir in der Jauchegrube landeten; Als wir unsere Rivalen vorgeführt haben; Als wir einen Auftrag mit Sekunden Vorsprung erledigt haben."],
  ["6","Seid ihr die ursprünglichen Mitglieder eurer Gruppe?","Nein, wir haben von unseren Eltern geerbt; Manche von uns waren nicht die erste Wahl; Ja, aber ursprünglich waren wir mehr."],
  ["7","Welcher Vorfall hätte die Gruppe beinahe gesprengt?","Der Suspensorium-Vorfall; Eric – er weiß, was er getan hat; Als man uns fälschlich beschuldigte."],
  ["8","Wann hat die Gruppe reibungslos zusammengearbeitet?","Noch nie; Immer wenn wir jemand anderen vorführen; Wenn wir vergessen, was wir eigentlich tun sollen, und abschweifen."],
  ["9","Wie lange hat es gedauert, bis ihr euch miteinander wohlgefühlt habt?","Ach, wir sind alte Freunde; Haben wir nicht, wir dulden einander; Es hat eine Weile gedauert, aber inzwischen kennen wir uns gut genug."],
  ["10","Wer ist oder war euer Gönner, und wie habt ihr seine Gunst gewonnen oder verloren?","Der Patrizier – er hat uns einbestellt und uns kaum eine Wahl gelassen; Königin Molly, aber sie hat herausgefunden, dass wir bezahlte Arbeit haben, und uns fallen gelassen; Ein geheimnisvoller Wohltäter, und wir wissen es nicht."]]}
]},

{id:"gegenwart", g:0, t:"Gruppengegenwart", p:55, b:[
 "Eure Gruppe wird vom Leim der Umstände zusammengehalten, aus dem eines Tages Freundschaft werden kann. Um ein verbindendes Element eurer Gruppe zu erzeugen, würfelt auf der Tabelle unten und denkt euch als Gruppe eine Antwort auf die Frage aus. Schreibt sie unter Gruppengegenwart auf euren Gruppenbogen. Denkt wieder daran, dass eure Gruppengegenwart ebenfalls als gemeinsames Merkmal aller Figuren der Gruppe zählt.",
 {t:"wt", id:"wtgegenwart", h:"Gruppengegenwart", w:"W10", head:["","Frage","Beispielantworten / Merkmale"], rows:[
  ["1","Bei wem steht ihr in der Schuld, und was schuldet ihr?","Wir schulden Chrysopras dem Troll einen Arm und ein Bein; Wir haben ein überfälliges Bibliotheksbuch und keine Ahnung, wo es ist; Wir sind bei unserer Gilde nicht gerade „auf dem Laufenden“."],
  ["2","Wen kennt ihr? Nennt drei NSC oder Gruppen: einen Freund, einen Rivalen und einen Bekannten. Beschreibt sie in einem kurzen Satz.","Horace der Troll, der wunderschöne Skulpturen macht; Beatrice, eine Bettlerin, die etwas weiß, das sie besser nicht wüsste; Jane von Naseweis, eine Vampirin, die uns etwas schuldet."],
  ["3","Wofür seid ihr stolz, bekannt zu sein?","Unsere Schnelligkeit und Tüchtigkeit; Unsere ganz eigene Art, Probleme zu lösen; Bei uns ist Verschwiegenheit garantiert."],
  ["4","Wofür wärt ihr lieber nicht bekannt?","Dafür, Dinge zu verpfuschen; Das „billig“ in „schnell, gut oder billig“ zu sein; Die letzte Rettung zu sein."],
  ["5","Wie würde jemand eure Gruppe beschreiben?","Ein unfähiger Haufen Unruhestifter; Man kann sie nur deshalb nicht Verbrecher nennen, weil sie sich nicht einmal richtig erwischen lassen; Eine erlesene Sammlung von Anthropoiden."],
  ["6","Mit wem weigert ihr euch zu arbeiten, und warum?","Zauberer – sie sind aufgeblasen und wissen nicht, was harte Arbeit ist; Schnapper – wir hatten ihn einmal als Caterer und haben mehrere Gruppenmitglieder verloren; Die Wache – wer bewacht die Wächter, hm?"],
  ["7","Wie lautet der Wahlspruch eurer Gruppe?","Wir tun es, weil ihr keine Lust habt; Eine so erlesene Sammlung von Leuten, wie man sie für Geld bekommt; Wir bringen das „gut“ in „gut genug“."],
  ["8","Beschreibt, wo ihr euch meist herumtreibt, wie es dort ist und warum ihr es gewählt habt.","Die Hintergasse hinter dem Traubenhaufen – sie ist dreckig, also gut geeignet, um Pläne zu schmieden; Hinter einem schrecklichen Portal in der Bitwasch-Straße jeden zweiten Dienstag, weil die Moriskentänzer es in der anderen Woche haben; Die vierschmierigste Kneipe von Ankh-Morpork, weil wir noch nicht bereit für eine höhere Stufe der Schmierigkeit sind."],
  ["9","Auf wen könnt ihr euch immer verlassen, und wofür?","Einen Wirt in der Nähe – ein Freibier fördert die Treue; Dave – er widerspricht immer allem, was wir sagen; Die Götter – sie sind nie da, wenn man sie braucht."],
  ["10","Warum haltet ihr zusammen?","Wir vertrauen einander und kommen gut miteinander aus; Es ist leichter, als getrennte Wege zu gehen; Wir wissen zu viel übereinander, um jemanden gehen zu lassen."]]}
]},

{id:"gruppenname", g:0, t:"Gruppenname", p:56, b:[
 "Schließlich braucht eure Gruppe einen Namen. Wie heißt sie, wie ist sie bekannt, oder wie nennt sie sich selbst (aber sonst niemand wirklich)?",
 "Gruppen kommen auf die unterschiedlichsten Weisen zu ihren Namen. Denkt über die Gruppe nach, die ihr erschaffen habt. Sind es weltgewandte Möchtegern-Assassinen, ein Haufen Zauberstudenten, ein lockerer Klüngel oder eine eingeschworene Truppe? All das beeinflusst, unter welchem Namen eure Gruppe bekannt ist.",
 "Wenn ihr Anregungen braucht, findet ihr ein paar in den Scheibenwelt-Romanen; fast alle sind Wortspiele:",
 {t:"ul", x:["Das Rauchende Gnu", "Die Kummerkastentanten", "Die Verdammten Narren", "Die Prima Kumpels", "Die Unaussprechlichen", "Die Neue Firma", "Der Dünne Braune Schmier", "Die Ins und Outs", "Die Käsehändler", "Die Erleuchteten Brüder der Ebenholzschwarzen Nacht", "Die Ninja-Moriskentänzer von Neu-Ankh", "Die Gesellschaft der Kunstfreunde, hüstel", "Verein Junger-Männer-Reformierter-Kultisten-des-Ichor-Gottes-Bel-Shamharoth (VJMRK)"]},
 "Jetzt habt ihr euren Gruppenbogen ausgefüllt und wisst, wer ihr als Gruppe seid, was euer Ziel ist und ein wenig über eure Vergangenheit und Gegenwart. An diesem Punkt lohnt sich eine kurze Pause, damit die Spielleitung einen Anfang für das Abenteuer skizzieren kann, in das ihr gleich unabsichtlich hineinstolpert. Ein paar Tipps dazu stehen auf S. 92.",
 {t:"bsp", b:[
  {t:"dlg", x:[["Morgan","„Gut, Zeit für ein bisschen Hintergrund zu euch. Vergangenheit und Gegenwart – wählen oder würfeln?“"],["Shannon","„Lass uns würfeln und sehen, was rauskommt.“"]]},
  "Die Gruppe würfelt eine 1.",
  {t:"dlg", x:[
   ["Morgan","„Also: „Wie lange arbeitet ihr schon zusammen?“ Hat jemand eine Idee?“"],
   ["Corey","„Wenn wir hinter de Worde her sind, ergibt es Sinn, dass wir vertrauenswürdige Mitarbeiter sind. Ich würde sagen, „Seit vor dem Feuer“ wäre gut – ihr wisst schon, das Feuer am Ende von *Die volle Wahrheit*?“"],
   ["Morgan","„Sind alle damit zufrieden? Als Nächstes die Gruppengegenwart. Corey, würfelst du die?“"]]},
  "Corey würfelt eine 7.",
  {t:"dlg", x:[
   ["Morgan","„Wie lautet der Wahlspruch eurer Gruppe? Ich hätte einen, wenn ihr seit *Die volle Wahrheit* dabei seid. Wie wär’s mit **Namen verkaufen Zeitungen**?“"],
   ["Gruppe","„Ja, das passt.“"],
   ["Morgan","„Noch eine letzte Sache: Wie heißt ihr alle?“"],
   ["Corey","„„Papiermädels“?“"],
   ["Raphael","„Wie wär’s mit „Bleistiftschieber“?“"],
   ["Paulina","„Warum nicht beides kombinieren: „Papierschieber“?“"]]},
  "Die Gruppe diskutiert länger hin und her, als man für einen einzigen Namen für nötig halten würde, entscheidet sich aber schließlich für die „Papierschieber“.",
  {t:"dlg", x:[["Morgan","„Gut! Damit haben wir unsere Gruppe. Und jetzt finden wir heraus, wer diese Papierschieber sind!“"]]}
 ]}
]}

]);
