/* The Vault – Murder at Gruntley Manor (Buch S. 162–178, Seitenzahlen = PDF-Seiten SNNN). Übersetzung aus dem Englischen. */
window.TA_VAULT = window.TA_VAULT || {};
TA_VAULT["gruntley-manor"] = {
 cw: "Gedankenkontrolle",
 chaosP: 170,
 chaos: [
  {k:1, n:"Verzerren", en:"Distort", x:"Es tauchen Beweise auf, die einen Partygast belasten, auf den noch kein Verdacht gefallen ist."},
  {k:2, n:"Verderben", en:"Corrupt", x:"Türen öffnen sich zu falschen Räumen und führen die Agenten dorthin zurück, wo die Anomalie sie haben will."},
  {k:4, n:"Verstrickung", en:"Entanglement", neu:1, x:"Die Anomalie spinnt ein kunstvolles Netz um die Betroffenen. Wer dieser Kraft ausgesetzt ist, muss eine überraschende Verbindung zu einer der anderen in der Szene anwesenden Figuren offenbaren oder erfinden."},
  {k:4, n:"Enthüllung", en:"Revelation", neu:1, x:"Die Anomalie bringt Menschen dazu, schmutzige Wäsche zu waschen. Ein von dieser Kraft betroffenes Ziel muss sofort ein verborgenes Gefühl gegenüber jemandem Anwesenden offenbaren, ein Geheimnis herausplatzen lassen oder sich offensichtlich verdächtig verhalten."},
  {k:10, n:"Töten", en:"Kill", x:"Der verdächtigste Partygast (oder die Person, die fast schon für schuldig befunden wurde) wird getötet, was das Rätsel verkompliziert."}
 ],
 ziele: [
  {art:"bel", n:3, x:"fürs Erben des Edbert-Vermögens"},
  {art:"bel", n:1, x:"fürs Aussprechen eines Detektiv-Schlagworts (höchstens 3-mal pro Agent)"},
  {art:"ver", n:1, x:"für jeden unterbrochenen Monolog"}
 ],
 sonder: [
  {t:"gm-sonder", h:"Sonderregeln", vor:"Fast der gesamte Einsatz findet in der Domäne der Anomalie statt. Zur Erinnerung: Chaos-Effekte, die 3 oder weniger kosten, sind kostenlos, und jedes Chaos wird zum dreifachen Wert ausgegeben.", x:[
   {k:2, n:"Seht, was ich gefunden habe", s:"von Spielern aktiviert", x:"Ein Partygast legt ein belastendes Beweisstück gegen einen anderen Gast oder einen Agenten offen. Ähnlich wie bei Anträgen auf Realitätsanpassung ist der enthüllte Beweis echt, und die Umstände, die ihn erzeugt haben, werden rückwirkend wahr."},
   {plus:30, n:"Niemals Schuld eingestehen", s:"Sonderregel · je Agent", x:"Gesteht ein Partygast oder ein Agent den Mord an Joachim Edbert, werden dem Pool sofort 30 Chaos für jeden Agenten des Einsatzes hinzugefügt."}
  ], nach:"Wird „Niemals Schuld eingestehen“ aktiviert, ist Garamond so wütend, dass das Rätsel vorzeitig beendet wurde, dass dey Überwältigen auf jeden Agenten einsetzt, den dey erreichen kann, und flieht."}
 ],
 reiter: {
  profil: [
   {t:"Fundstück", p:163, b:[
    {t:"bild", seite:162, x:"Titelseite: Umschlag mit Wachssiegel „J.E.“ und rosa Einladungskarte in einer Blutlache, Titelschriftzug „Murder at Gruntley Manor“, Autor J.R. Zambrano"},
    {t:"gm-einladung", h:"Einladung zum Geburtstag von Joachim Edbert", x:[
     "**Lieber Freund,**",
     "du bist herzlich zum todesmutigen, schicksalsherausfordernden Geburtstag von Joachim Edbert, Venture Capitalist, eingeladen. Schätze dich glücklich, ich lade nicht einfach irgendjemanden ein.",
     "Du, mein treuer Visionär, darfst den neuesten und größten Paradigmenwechsel ZUERST sehen – während wir ein weiteres glorreiches Jahr von mir feiern.",
     "Die Party steigt im historischen Gruntley Manor, wo die Reichen und Berühmten hingehen, um ermordet zu werden. Ich hoffe sehr, dass mir das nicht passiert! Besonders, da ich all meine engsten und am wenigsten skrupulösen Frenemies eingeladen habe. Und um ganz sicherzugehen – ich habe den größten Detektiv unserer Zeit eingeladen.",
     "Émile Garamond wird anwesend sein, Freunde. Also kommt bloß nicht auf komische Ideen.",
     "*J.E.*"
    ]}
   ]},
   {t:"Überblick", p:164, b:[
    {t:"profil",
     lead:"Ternion City ist ein Knotenpunkt für komplizierte und interessante Verbrechen – sogar für solche, die nichts mit Agenten zu tun haben. In den letzten Jahren wurden die verworrensten und überraschendsten allesamt vom selben Detektiv gelöst: Émile Garamond (dey/dem). Wann immer die wohlhabende Elite der Stadt in eine tödliche Verschwörung verwickelt wird, ist Garamond kurz darauf zur Stelle, sammelt die Hinweise ein und enthüllt den wahren Täter.",
     fokus:"Das Verlangen der Menschheit nach befriedigenden Antworten auf komplizierte Fragen.",
     domaene:"Das alte Gruntley Manor – ein weitläufiges, modernes, städtisches Anwesen, das zu einer Eventlocation umgebaut wurde.",
     impuls:"Komplizierte, unlösbare Mordfälle zu erschaffen. Und sie dann auf dramatische Weise zu lösen, sodass alle Beteiligten ziemlich zufrieden sind. Aufgrund ihrer Erfahrungen mit Menschen hat Garamond beschlossen, als Opfer stets jemanden zu wählen, der sein Leben auf dem Rücken anderer geführt hat – die Reichen, Selbstsüchtigen und Grausamen."},
    "Der superreiche Joachim Edbert (er/ihm) kann einer Show nicht widerstehen und hat eine Geburtstagsparty mit all denen organisiert, die ihn am ehesten tot sehen wollen, und zwar am dramatischsten Ort überhaupt – und Émile Garamond eingeladen, damit niemand etwas versucht. Schließlich werden Verbrechen immer gelöst, wenn Garamond in der Nähe ist – wer würde also einen Mord begehen, wenn Garamond direkt daneben sitzt?",
    "Joachim weiß die Wahrheit nicht: Émile Garamond ist eine Anomalie und erschafft genau die Verbrechen, die dey untersucht. Diese Fälle werden nicht gelöst, weil sie kompliziert sind; sie werden kompliziert gemacht, um gelöst zu werden. Joachim Edbert ist dem Untergang geweiht, und nur die Agenten können die Wahrheit aufdecken.",
    {t:"h", x:"Geschichte"},
    "Die glanzvolle Karriere – und Existenz – von Émile Garamond begann mit einem Fall, der für die meisten anderen Detektive der Höhepunkt wäre: der Aufklärung des Mordes an Alphonse Gruntley. Alle wissen, dass der Butler es war, aber nur wenige wissen, dass der Butler der Sohn von Gruntleys Halbbruder war und hoffte, Gruntleys junge, naive Tochter Justine für den Mord zu beschuldigen, um sie um die Gruntley-Millionen zu bringen. Justines Verzweiflung, ihren Namen reinzuwaschen und Antworten zu finden, erschuf eine Anomalie in Gestalt des perfekten Detektivs: Émile Garamond. Dieser charmante Ermittler stürmte scheinbar aus dem Nichts herbei und rettete den Tag. Seitdem ist Garamond die Person, die man anruft, wenn man einen unlösbaren Fall knacken will.",
    "Der Mord an Neil Sabell, Ternions mit Michelin-Stern ausgezeichnetem „Bad Boy der Hühnchen-Sandwiches“ (alle dachten, es sei sein Rivale gewesen, aber es war sein Neffe)? Garamond. Die Morde um den verfluchten Smaragd, die die Polizei ratlos zurückließen und sie eine meme-würdige Pressekonferenz abhalten ließen, auf der sie verkündete, Magie sei real? Garamond. Die Liste geht weiter. Garamond ist durch ganz Ternion City und die umliegende Region gereist und hat Morde gelöst – aber mindestens die Hälfte der Fälle wurde in Gruntley Manor gelöst.",
    "Nach dem Tod von Alphonse Gruntley wurde sein Anwesen in einen mietbaren Urlaubs- und Eventort für die Reichen umgewandelt. Die tödliche Geschichte verleiht den renovierten Gärten, Pools und Suiten einen verlockenden Reiz – aber es ist auch Garamonds Domäne.",
    "Wenn Garamond keinen Fall findet, der ihren Fokus erfüllt und Anerkennung für gelöste Morde einbringt, lässt dey einen geschehen. Garamonds Kräfte können Menschen zu emotionalen Extremen und unlogischen Entscheidungen treiben und so einen Fall erschaffen, der so kompliziert und absurd ist, dass ihn nur der perfekte Detektiv lösen kann. Infolgedessen sterben Ternion Citys Eliten in großer Zahl, und die Agency hat begonnen, anomale Aktivität zu vermuten. Ihre einzige Spur ist das häufige Wiederkehren von Gruntley Manor, weshalb sie vermutet, dass das Gebäude selbst die Anomalie ist. Sie glaubt, die Anomalie hänge irgendwie mit der Abneigung der Menschheit gegen die Reichen zusammen und Garamond habe das Glück gehabt, in ihrem Gefolge Karriere zu machen.",
    {t:"h", x:"Erscheinung"},
    "Émile Garamond sieht eher aus wie ein romantischer Dichter als wie ein geniales Detektiv. Dey hat zerzaustes Haar und trägt meist dunkelviolette Anzüge und gepflegte cremefarbene Hemden für eine anachronistisch-schicke Ästhetik.",
    {t:"h", x:"Aktuelle Lage"},
    "Zum ersten Mal hat die Agency einen Hinweis auf einen offensichtlich bevorstehenden Mord. Joachim Edbert hat mit dem Ruf des Anwesens geprahlt und eine Geburtstagsparty geschmissen, zu der diejenigen kommen, die ihn am ehesten töten würden. Die Agency glaubt, dass sie die Anomalie, die diese Todesfälle verursacht, während der Party fassen kann."
   ]}
  ],
  vor: [
   {t:"Kalter Einstieg", p:165, b:[
    "Bevor sie als ihre Agenten spielen, werden die Spieler in den Speisesaal von Gruntley Manor eingeführt, noch vor der Ankunft von Joachim Edbert. Ein altmodischer Herrenhaus-Speisesaal mit vier langen Holztischen, an denen rund hundert Gäste Platz finden. Der Raum wird schwach von flackernden Glühbirnen erhellt, die in alten Glasleuchten an der Wand Flammen nachahmen.",
    "Acht Personen sind hier, am mittleren Tisch. Die Tische sind nicht voll – sie sind die Ersten, die Platz nehmen, als Joachims Ehrengäste. Jeder Spieler bekommt 1–3 der folgenden Figuren zum Spielen, bis alle verteilt sind und jeder mindestens eine hat. Gib die Angaben zu jeder Figur auf der folgenden Seite aus. Sie dürfen die Informationen im Rollenspiel weitergeben, aber nicht direkt.",
    "Unten sind die Rollen in empfohlene Zweiergruppen geordnet. Bei 2 Spielern geh so vor: Gilchrest geht an den Spieler mit dem linken Paar, Nathaniel an den mit dem rechten.",
    {t:"gm-paare", x:[["Peach Emoji","Covalence Vault"],["Gilchrest Taylor","Nathaniel Gunwhale"],["Underscore","Vivian Gotterdammerung"]]},
    {t:"gm-verd", x:[
     {h:"Peach Emoji", s:"sie/dey", b:[
      "Peach Emoji, nicht verwandt, ist Edberts größte Rivalin. Eine Influencer-Kapitalistin mit mehr Followern und größerer Reichweite auf allen Plattformen. Ihr Grindset-Lifestyle-Brandsperience finanziert ihre eigenen Unternehmungen, von denen sie die meisten nur auswählt, um Edbert auszustechen.",
      {t:"h3", x:"Typische Sätze"},
      {t:"liste", x:["„Das hier ist nicht annähernd so gut wie die letzte Party, auf der ich war, aber der Typ wurde zwei Tage später ermordet, also ¯\\_(ツ)_/¯.“","„Ich liebe dieses Gespräch. Machen wir ein Video draus.“","„Sorry, ich muss da kurz rangehen. Jemand, der zählt.“"]},
      {t:"h3", x:"Ziele"},
      {t:"liste", x:["Mit Pinifred, Edberts Assistentin, rumknutschen, die sie extrem attraktiv findet.","Vivian Gotterdammerung blamieren.","Joachim Edbert ermorden, weil er sie vor ihren Followern gedemütigt und dann in die Zeitung gesetzt hat, sie sei wütend geworden, obwohl sie gar nicht wütend war."]}
     ]},
     {h:"Covalence Vault", s:"dey/dem", b:[
      "Ein moralisch bankrotter Händler heißer Daten. Covalence glaubt, Privatsphäre sei tot und ihr Leichnam lasse sich für unglaublich viel Geld an Werbetreibende ernten und verkaufen. Dey hat schon früher mit Edbert zusammengearbeitet und ihm unverzichtbare Informationen geliefert, um seine neuesten Interessenten illegal zu analysieren und der richtigen Zielgruppe zuzuordnen.",
      {t:"h3", x:"Typische Sätze"},
      {t:"liste", x:["„Informationen wollen frei sein. Geheimnisse, private Gespräche, unausgesprochene Gedanken – sie schaden uns allen.“","„Ich wusste, dass du das tust. Steht in deinen demografischen Daten.“","„Ich bin ein Menschenfreund! Ich bin im Geschäft, den Leuten genau das zu geben, was sie wollen.“"]},
      {t:"h3", x:"Ziele"},
      {t:"liste", x:["Von Nathaniel Gunwhale rechtlich adoptiert werden.","Underscores Autogramm bekommen – dey ist so cool.","Joachim Edbert ermorden, weil er dafür bezahlt wird, das Gesicht einer politischen Initiative für ein sichereres Internet zu sein."]}
     ]},
     {h:"Gilchrest Taylor", s:"er/dey", b:[
      "Bemerkenswert gutaussehender Kryptowährungs-Spekulant. Gilchrest Taylor hat 2009 sein Taschengeld gespart und Bitcoin im Wert von siebenhundert Dollar gekauft. Obwohl er extrem wohlhabend ist, hat er absolut keine Macht. Hat auf die harte Tour gelernt, dass man sich keinen Selbstrespekt kaufen kann. Versucht erfolglos, sich den Respekt anderer zu erkaufen, weil er darauf beharrt, dass Krypto kein Betrug ist.",
      {t:"h3", x:"Typische Sätze"},
      {t:"liste", x:["„Ich bin eigentlich gar nicht eingeladen, ich crashe diese Party total wie ein Bad Boy. Gefährlich und sexy.“","„Ich wette, wir haben alle schon schlimme Sachen gemacht, was? Und ihr so?“","„Ja, Krypto ist eigentlich kein Betrug, die Blockchain funktioniert wirklich …“"]},
      {t:"h3", x:"Ziele"},
      {t:"liste", x:["Covalence Vault dazu bringen, über digitale Verbrechen zu sprechen (er wurde gezwungen, für die Regierung ein Abhörgerät zu tragen).","Mit Vivian Gotterdammerung anbandeln.","Joachim Edbert ermorden, weil er seine Plattform genutzt hat, um dafür zu sorgen, dass Gilchrests „Gilcoin“-Unternehmen nie abgehoben ist."]}
     ]},
     {h:"Vivian Gotterdammerung", s:"sie/ihr", b:[
      "Altes Geld umweht Vivian Gotterdammerung wie ein edles Parfüm. Ihr Familienvermögen hat eine lange Geschichte, die sich durch die Jahrhunderte zurückwindet. Sie versucht sich zum Spaß an Politik, Marktspekulation und feindlichen Übernahmen. Niemand weiß, warum sie hier ist.",
      {t:"h3", x:"Typische Sätze"},
      {t:"liste", x:["„Ich vergesse immer, wie es ist, unter armen Leuten zu sein. Wie putzig.“","„Vielleicht passiert hier ja mal etwas Interessantes. Zur Abwechslung.“","„Nein, ich bin nicht müde. Ich gähne, weil ich mich langweile.“"]},
      {t:"h3", x:"Ziele"},
      {t:"liste", x:["Gilchrest Taylor wie einen Welpen/ein Spielzeug behandeln und ihm alles verweigern, was er sich zu wünschen scheint.","Nathaniel Gunwhale überzeugen, mit den Videospielen aufzuhören und zum „lustigen Zeug“ zurückzukehren.","Joachim Edbert ermorden, weil sie etwas fühlen will und ohnehin keinen Ärger bekommt."]}
     ]},
     {h:"Underscore", s:"dey/dem", b:[
      "Berüchtigte Hackerperson und angehender Vandale in einem Daft-Punk-artigen Emoji-Helm. Neunzehn, versucht aber, älter zu wirken. Underscore hat mehr Server zum Absturz gebracht als Windows ME. Underscore tritt kaum je öffentlich auf, aber Joachim Edbert, Venture Capitalist, und seine Geburtstagsparty sind die perfekte Gelegenheit für Underscores neuesten Versuch, der Banksy der Hacker zu werden. Verzweifelt darauf aus, bekannt zu sein und cool zu wirken.",
      {t:"h3", x:"Typische Sätze"},
      {t:"liste", x:["„Ja, ich bin ziemlich cool. Aber es ist mir egal, ob du das auch findest. Meine Arbeit ist für die Menschen.“","„Ich finde dich großartig, und das, was du sagst, ist überhaupt nicht komplett beschissen.“","„[Meme-Referenz, die sonst niemand versteht]“"]},
      {t:"h3", x:"Ziele"},
      {t:"liste", x:["Peach Emojis Handy in die Finger bekommen und ihre Social-Media-Konten hacken.","Den ersten Kuss bekommen, mit irgendwem. (Nimmt den Helm aber erst ab, wenn dey sicher ist, dass es klappt.)","Joachim Edbert ermorden, weil er Underscores geheime Identität herausgefunden hat."]}
     ]},
     {h:"Nathaniel Gunwhale", s:"er/ihm", b:[
      "Ein berüchtigter Waffenhändler, der ins Videospielgeschäft gewechselt ist, um die nächste Generation von Drohnen und ihren Piloten auszubilden. Gunwhale war mit Edberts Vater befreundet und leiht dem jungen VC häufig Geld für interessante Projekte. Sehr väterlich und herzlich zu allen, die er für höflich hält, aber von Gerede über den Tod überhaupt nicht gestört.",
      {t:"h3", x:"Typische Sätze"},
      {t:"liste", x:["„Oh, ich hab immer noch den Zeh im Waffengeschäft. Ich habe eine brandneue Kampfdrohne zur Party mitgebracht, falls jemand sie in Aktion sehen will!“","„Trau nie jemandem, der für seinen Lebensunterhalt arbeiten muss. Der hat nichts zu verlieren.“","„Bis zu diesem Jahr haben meine Kreationen etwa 72.000 Ziele getötet. Ich hoffe, das zu verdoppeln, bevor ich sterbe.“"]},
      {t:"h3", x:"Ziele"},
      {t:"liste", x:["Mit Covalence Vault einen Deal schließen, um vor Ende der Party illegal beschaffte persönliche Daten über Bürger für sein Geschäft zu kaufen.","Underscores Vaterfigur werden und gute Ratschläge geben.","Joachim Edbert ermorden, weil er zu seinem eigenen Vater grausam war, indem er dessen Beerdigung eher wie eine Party zu Joachims Aufmunterung behandelt hat."]}
     ]}
    ]}
   ]},
   {t:"Gespräch vor dem Dinner", p:168, b:[
    "Wenn alle mit ihren Figuren vertraut sind, werden sie von zwei Personen angesprochen (gespielt vom GM):",
    "**Pinifred Griselda (Sie/Dey):** Edberts leidgeprüfte Assistentin. Steckt gerade im sechsten Jahr eines vierjährigen Studienplans; Pinifred hofft, dass dieses unbezahlte Praktikum ihr die letzten paar Credits bringt, die sie zum Abschluss braucht, um dann ihre Studienkredite abzubezahlen. Als Edberts Assistentin ist dey dafür zuständig, die Gäste in Ordnung zu halten.",
    "**Émile Garamond (Dey/Dem):** Berühmter Detektiv und außerdem geheime Anomalie. Hat Fälle gelöst, die ihr nicht glauben würdet – außer ihr tut es doch, weil dey sie durch das Brechen der Realität hat geschehen lassen. Kleidet sich anachronistisch-schick in Violett und Creme. Mag: lange Spaziergänge am Strand (oder an jedem anderen Gewässer, das ist sehr beruhigend), Hinweise finden, Morde lösen. Hasst: Mörder, Ungerechtigkeit, billiges Essen. Behandelt Unschuldige wie kleine verwundete Vögel, die Mitgefühl und Fürsorge brauchen. Behandelt Mordverdächtige, wie eine Katze einen kleinen verwundeten Vogel behandelt.",
    "Pinifred stellt Émile vor als „den großartigen Detektiv Émile Garamond, den Joachim Edbert engagiert hat, damit niemand versucht, ihn zu töten! Obwohl keiner von euch das natürlich je tun würde.“",
    "Nach den Vorstellungen setzen sie sich an den Tisch und dürfen sich beliebig unterhalten. Während sie reden, strömen weitere Leute in den Speisesaal.",
    {t:"h3", x:"Wenn es eine Gesprächspause gibt, greift Pinifred zu einem unbeholfenen Gesprächseinstieg."},
    {t:"liste", x:["„Was ist euer liebster Vine? Ich vermisse Vine.“","„Ich bin überrascht, dass ihr alle die Einladung angenommen habt! Was hat euch zugesagt?“","„Was war euer liebster Moment im letzten Jahr?“","„Wie wäre es mit zwei Wahrheiten und einer Lüge?“"]},
    {t:"h3", x:"Wenn eine bestimmte Figur nicht viel spricht, stellt Émile ihr direkt eine Frage."},
    {t:"liste", x:["„Peach Emoji, ich habe neulich etwas Interessantes über dich in der Zeitung gesehen! Magst du die Geschichte erzählen?“","„Vivian, bist du schon mal Fallschirm gesprungen? Ein echter Nervenkitzel, hört man.“","„Eine Schande, was mit Gilcoin passiert ist, Gilchrest.“","„Ich habe gehört, Mr. Edberts Vater ist vor ein paar Monaten gestorben. Die Beerdigung war … nun ja, sie war interessant, nicht wahr, Nathaniel?“","„Covalence, es scheint, als würde deine Arbeit bald viel schwieriger werden, bei der interessanten Arbeit, die Mr. Edbert in letzter Zeit macht.“","„Underscore, es tut mir leid, ich habe noch nie von dir gehört. Was ist die Geschichte hinter deinem Helm?“"]},
    "**Irgendwann gegen Ende des Gesprächs** treffen auch die Agenten ein und werden in der Nähe platziert – sie werden aber nur durch Beschreibung erwähnt und nicht gespielt.",
    "**Nachdem alle sechs Figuren die Gelegenheit hatten, sich bekannt zu machen,** oder wenn das Gespräch an einem besonders angespannten Punkt angelangt ist, an dem ein Konflikt überzukochen droht, erscheint der Mann der Stunde: Joachim Edbert betritt den Raum und steht auf, um eine Rede zu halten.",
    "*„Vielen Dank, dass ihr alle gekommen seid. Ich bin Joachim Edbert, und wie ihr wisst –“*",
    "Er wird unterbrochen, als alle Lichter gleichzeitig ausgehen. Der Raum ist stockfinster. Jemand stößt einen hohen Schrei aus.",
    "Und dann spult sich alles ein paar Stunden zurück, auf früher am selben Tag."
   ]},
   {t:"Morgenbesprechung", p:169, b:[
    {t:"morgen", x:[
     "Die Beziehung eines Agenten steht auf der Gästeliste zur Geburtstagsparty von Joachim Edbert, Venture Capitalist. Die Party findet im alten Gruntley Manor statt und wird das ‚grammabelste Event des Monats. Das lässt sich die Beziehung auf keinen Fall entgehen, und vielleicht kann sie den Agenten einschleusen, sobald sie ein paar ausgewählte Fotos hat.",
     "Beim Frühstück erzählt die Beziehung eines Agenten von der neuen Krimiserie, die sie schaut, und fragt, ob der Agent sie gesehen hat. Vielleicht kann er der Beziehung helfen herauszufinden, wer es wirklich war; diese Serien haben immer einen Twist, den die Beziehung nie kommen sieht.",
     "Das Mittagessen eines Agenten ist das jüngste Opfer einer Welle von Lunchdiebstählen, die durch die Agency-Teeküche fegt, seit die Regel zur „nicht standardmäßigen Kühlschranklagerung“ gelockert wurde.",
     "In Good Morning Ternion City porträtieren die Moderatoren Salaman Skiplock (er/ihm) und Granatha Sham (sie/ihr) den beliebtesten Detektiv der Region, Émile Garamond, der eine Reihe aufsehenerregender und bizarrer Mordfälle gelöst hat.",
     "Die Beziehung eines Agenten hat kürzlich den Job bei einem Startup verloren, weil ihr CEO wegen des Mordes an Giles Finchley verhaftet wurde, dem CEO eines konkurrierenden Startups, dessen TechCrunch-Pitch dem Unternehmen, bei dem die Beziehung arbeitete, den Rang ablief."
    ]}
   ]},
   {t:"Einsatzbesprechung", p:169, b:[
    {t:"vorlesen", b:[
     "Die Agency glaubt, dass eine Anomalie wohlhabende Bürger von Ternion City ermordet. Die Opfer scheinen nur durch ihre Kompliziertheit verbunden:",
     "**1.** Der ursprüngliche Fall Alphonse Gruntley, bei dem der wahre Täter in Wahrheit als Butler verkleidet war.",
     "**2.** Der Tod von Giles Finchley, eines Startup-CEOs, der von seinem Rivalen in einer aufwendigen, öffentlichen Inszenierung ermordet wurde, die wie ein Unfall bei einem TechCrunch-Disrupt-Pitch aussehen sollte.",
     "**3.** Der Mord an drei verschiedenen Mitgliedern der Ternion Amalgamated Money Launderer’s Association, eines augenzwinkernd benannten Yachtclubs. (Nur zwei hängen tatsächlich zusammen, der dritte waren einfach nur Orcas.)"
    ]},
    "Joachim Edbert, ein Venture Capitalist, liefert dafür die perfekte Kulisse. Die Agency weiß nicht, ob die Anomalie erscheinen wird, hält es aber für möglich. Der Text auf den Einladungen ist öffentlich (der Einleitungstext kann den Agenten gezeigt werden), aber die Agency hat keine Möglichkeit, Agenten auf die Gästeliste zu bekommen. Sie müssen sich selbst einen Weg hinein suchen.",
    "Joachim hat außerdem Émile Garamond eingeladen, einen bekannten Detektiv, vermutlich um die Gefahr eines tatsächlichen Mordes zu verringern. Dey dürfte ein besonders schwer abzuschüttelndes Loses Ende sein und wird auf verdächtiges Verhalten der Agenten achten. Werden Agenten erwischt und des Mordes beschuldigt, kann die Agency kaum etwas für sie tun."
   ]}
  ],
  erm: [
   {t:"Gruntley Manor", p:170, b:[
    "Gruntley Manor liegt in der Stadt und ist leicht zu finden. Die Hauptherausforderung der Agenten besteht darin, auf die Liste zu kommen und sich eine befriedigende Tarnidentität oder Geschichte auszudenken, warum sie eingeladen worden sein könnten.",
    "Während dieser Ermittlung spielen die Spieler sowohl ihre Agenten als auch die ihnen zugewiesenen Gäste. Diese bleiben jedoch mit dem GM geteilte Figuren und können wie Beziehungen angestupst oder mit Vorschlägen versehen werden.",
    {t:"h", x:"Ankunft im Anwesen"},
    "Das Anwesen selbst ist eine weitläufige moderne Hommage an bzw. Kopie dessen, was vor fünf Jahren im Silicon Valley angesagt war. Ternion City ist kaum auf der Landkarte, und Trends brauchen hier bekanntlich ihre Zeit. Deshalb denken andere Agenten immer noch, den Griddy zu hitten habe etwas mit diesem sozialistischen Eishockey-Monster zu tun, das alle lieben.",
    "Bevor die Agenten Zutritt bekommen, müssen sie an Edberts Security vorbei. Die Türsteher Biz und Juneaux Bruno (beide er/ihm) sind zwei Himbos, die aussehen, als wären sie als QR-Codes verkleidet, und die darüber todunglücklich sind. Gäste haben den ganzen Tag versucht, sie zu scannen, um zu sehen, ob sie mit dem Code EdbertsBDay bei Skald VPN sparen oder ein geheimes ARG freischalten können oder was auch immer.",
    "Sobald die Agenten drin sind, ragt Gruntley Manor bedrohlich aus der Mitte des Geländes vor ihnen auf. Es ist ein altmodisches Anwesen, das trotz aller Renovierungs- und Modernisierungsversuche an seinem antiquierten Flair festhält, was ganz im Widerspruch zu den Laserlichtern und Drohnenkameras steht, die zwischen den Möchtegern-Influencern umherschwirren."
   ]},
   {t:"Edbert treffen", p:171, b:[
    "Sobald sie drinnen sind, werden sie in den berüchtigten Mordspeisesaal geführt. In diesem Raum wurde vor Jahren Alphonse Gruntley tot aufgefunden. Und jetzt sitzen dort bereits die anderen Gäste. (Und wiederholen vielleicht einiges von dem, was sie beim kalten Einstieg gesagt haben.)",
    "**Sobald die Agenten Platz genommen haben,** holt die Zeit den kalten Einstieg ein: Joachim Edbert, Venture Capitalist, kommt, um seine große Jungs-Businessrede zu halten.",
    "*„Vielen Dank, dass ihr alle gekommen seid. Ich bin Joachim Edbert, und wie ihr wisst –“*",
    "Er wird unterbrochen, als alle Lichter gleichzeitig ausgehen. Der Raum ist stockfinster. Jemand stößt einen hohen Schrei aus.",
    "Und dann gehen die Lichter wieder an. Eine rein weiße Schaufensterpuppe mit einem Einschussloch im Kopf liegt ausgestreckt vor Joaquim auf dem Boden, bedeckt mit frischem, falschem Blut.",
    "Joaquim japst theatralisch. *„Oh nein, es gab einen Mord!“* Dann lacht er. *„War nur Spaß. Es ist mein Geburtstag, und ich bin hier, um ein bisschen Spaß zu haben. Wir sind hier, um mich zu feiern, sowohl als Mann als auch als Geschäftsmann. An diese sogenannten ‚Disruptoren‘ da draußen: Lasst mich hinzufügen: Disruption ist inzwischen zweitausendspäter, als ‚zweitausendspät‘ zu sagen. Heute Abend enthülle ich ein fergaliciöses neues Paradigma, das die Art verändern wird, wie die Branche disruptet. Genau. Ich werde … Disruption disrupten. Pause für Applaus, das nicht laut sagen.“*",
    "Er macht eine Pause für Applaus, und die Party kehrt zum Normalzustand zurück.",
    "Edbert mag der Typ sein, der sich für ein Genie hält, aber das heißt nicht, dass er leichtgläubig ist. Und sofern sie nicht genau wie jemand aussehen, den Edbert für cool hält, steuert der Venture Capitalist schnurstracks auf die Agenten zu und will wissen: *„Wer hat euch Loser reingelassen?“*",
    {t:"h", x:"Joachim Edbert, Venture Capitalist"},
    "Ein schmieriger Wurm von einem Mann. Joachim Edbert behauptet, sein Erfolg sei ganz allein seinem Geschäftssinn zu verdanken und seiner Gabe, an der Spitze trendwärtiger Verschiebungen und viraler EvoLutionen zu bleiben, *„eine Kombi aus Evolution und Solution, glaubt mir, ich hab’s erfunden.“* In Wahrheit verdankt er seinen Erfolg unsauberen Geschäftspraktiken, Verbrechen, Erpressung und ein bisschen Papas Geld. Er spürt die Unverwundbarkeit, die nur Geld verleihen kann, und fordert das Schicksal unverblümt heraus, indem er Dinge sagt wie *„Ich hoffe echt, dass mich auf meiner eigenen Geburtstagsparty niemand ermorden will!“*, um zu zeigen, dass er den Ruf von Gruntley Manor nicht fürchtet.",
    {t:"hinweis", art:"gew", h:"Von Joachim erfahren Agenten:", x:[
     "Er glaubt, er habe es in der Geschäftswelt geschafft, weil er keine „engen Freunde“ hat. Nur Leute, die er nah genug herankommen ließ, um sie zu verraten, auszunutzen und anderweitig zu benutzen. Er ist stolz darauf, alle wichtigsten Gäste der Party verraten zu haben: *„Ich ramme jedem, der mir nahekommt, ein Messer in den Rücken, aber sie lieben es alle, sonst wären sie nicht hier.“*",
     "Er steht kurz davor, Uber, aber für Hunde zu enthüllen. Spielt ständig darauf an, mit Formulierungen wie *„Alle werden an meinem Geschäftsbaum BELLEN“* oder *„Es ist definitiv *NICHT* Uber, aber für Hunde, zwinker“*.",
     "Nicht lange danach kommt seine Assistentin Pinifred Griselda und flüstert ihm etwas sehr Dringendes zu, und er entschuldigt sich für ein wichtiges privates Treffen. Joachim schlägt umständlich vor, dass Pinifred sie unterhalten soll, solange er weg ist."
    ]}
   ]},
   {t:"Pinifreds Vorstellungsrunde", p:172, b:[
    "Pinifreds Arbeit als Edberts Assistentin und ihr „letztes“ Studienjahr (diesmal wirklich, hoffentlich) haben sie zu einer ausgehöhlten Hülle gemacht, deren einzige Freude daher kommt, sich an die Vines zu erinnern, die früher Freude brachten, und die sie den Agenten in schmerzhaftem Detail zu beschreiben versucht, wenn das Gespräch eine Pause hat.",
    {t:"hinweis", art:"gew", h:"Pinifred kennt alle wichtigsten Gäste der Party und stellt sie den Agenten nach einer kurzen Beschreibung vor:", x:[
     "Nathaniel Gunwhale, Waffenhändler/Videospiel-Publisher; „Ich glaube, die machen zusammen Geldkram?“",
     "Peach Emoji, „macht das ganze Brandfluencer-Ding“; Edbert hasst sie einfach so sehr.",
     "Covalence Vault, Big Data, noch größere Geheimnisse; „wie ein lebendes Pop-up, das alles über dich weiß, auf eklige Art.“",
     "Underscore, „will wie Banksy sein, aber, na ja, mit Hacken“; Edbert hat etwas herausgefunden, das „definitiv will, dass sie mich, Joachim Edbert, ermorden.“",
     "Gilchrest Taylor, Krypto irgendwas, Würggeräusche; Edbert hat eines seiner JPEGs runtergeladen, aber „so richtig.“",
     "Vivian Gotterdammerung, „genau wie eine echte reiche Person“; „sie taucht immer bei so was auf.“",
     "Émile Garamond, berühmter Detektiv; Edbert hat dey eingeladen, weil, Zitat, „Moment, was, wenn jemand wirklich versucht, mich zu ermorden? Das würde meine Party ruinieren!“"
    ]},
    {t:"hinweis", art:"gew", h:"Über Pinifred erfahren Agenten während dieses Gesprächs:", x:[
     "Sie wurde in Wahrheit Edberts Assistentin, um herauszufinden, ob Edbert das Geschäft ihrer Familie in den Bankrott getrieben hat (hat er).",
     "Edbert hält sich für unverwundbar, weil er zu reich zum Sterben ist."
    ]},
    "Die anderen Gäste dürfen jederzeit herein- und hinausgehen, sich einmischen und plaudern. (Besonders, während Pinifred sie vorstellt.)",
    "**Wenn sie fertig ist,** erhält Pinifred von Joachim eine Nachricht, dass sie gebraucht wird. Es ist ein Notfall.",
    {t:"h", x:"Garamond treffen"},
    "Émile Garamond kommt hinzu, als sie gerade geht: *„Ich habe auch eine Frage … wisst ihr, warum ich zu diesem Nest aus Schlangen und Kapitalisten eingeladen wurde?“* Garamond ist, wie die Agenten, neugierig auf die anderen Gäste: *„Ihr glaubt doch nicht wirklich, dass er denkt, jemand würde versuchen, ihn zu ermorden, oder?“*",
    "Die anderen Gäste wollen nirgendwo in Garamonds Nähe sein und verlassen schnell den Raum. Garamond bleibt unbesorgt und plaudert gern mit den Agenten.",
    {t:"hinweis", art:"gew", h:"Agenten erfahren Folgendes, wenn sie Garamond Informationen über sich selbst geben:", x:[
     "Der letzte Fall hatte tatsächlich mit Spionage zu tun, ob ihr’s glaubt oder nicht.",
     "Es scheint in letzter Zeit tatsächlich viele Morde zu geben, aber das liegt nur daran, dass Garamond da ist, um sie zu lösen, sodass die Fälle in die Nachrichten kommen.",
     "Alle nennen dey Detektiv, aber dey arbeitet gar nicht für die Polizei, *„aber wenn man so gut ist, nehmen es einfach alle an.“*",
     "Garamond liebt die verschlungenen, komplexen Fälle. *„Ohne ein Wollknäuel zum Entwirren, ohne ein Labyrinth, in dem man sich verirren kann, neigt der Geist dazu zu verrotten.“*",
     "Konzentriert sich auf Fälle mit Wohlhabenden und Eliten, nicht wegen des Ruhms, sondern weil *„sie glauben, dass man sich mit Geld alles kaufen kann, sogar die Wahrheit; ich versuche dafür zu sorgen, dass die Wahrheit unbezahlbar bleibt.“*"
    ]}
   ]},
   {t:"Der Dolch im Rücken", p:173, b:[
    "**Wenn sich die Gelegenheit bietet,** wird Garamond die relative Ruhe nutzen und die Agenten fragen, was sie bisher von den anderen Gästen halten. Dey ist neugierig, ob den Agenten etwas Verdächtiges aufgefallen ist.",
    "**Während die Agenten spekulieren,** was passieren könnte – oder wenn sie versuchen, den Raum zu verlassen – gehen alle Lichter in Gruntley Manor und auf dem umliegenden Gelände aus. Mehrere Leute schreien.",
    "Kurz darauf springt die Notstromversorgung an. Bisexuelle Notbeleuchtung erfüllt das Anwesen, und die Menge ist erleichtert. Bis ein einzelner, blutgerinnender Schrei über allen anderen widerhallt. Etwas stimmt eindeutig nicht.",
    "Als der durchdringende Schrei verhallt, stürmen alle im Anwesen zu seiner Quelle: Edberts Privatbüro. Die Tür steht weit offen. Edbert ist tot in den blutbedeckten Armen einer schreienden Pinifred Griselda zusammengebrochen, deren Hände sich fest um ein Messer in seinem Rücken klammern. Jemand ruft *„Sie haben ihn getötet!“*, während Pinifred beteuert, sie habe versucht, ihn zu retten. Garamond bittet die Leute, zurückzutreten, und bestätigt dann durch Fühlen des Pulses, dass er tatsächlich tot ist.",
    "Die Gäste zerstreuen sich, um zu fliehen – aber Garamond bittet Pinifred, dem Sicherheitsdienst zu sagen, er solle das Gelände abriegeln, und sie tut es. *„Niemand kommt hier rein oder raus, bis dieser Mord gelöst ist.“* Sicherheitsdienst und Polizei umstellen das Anwesen.",
    "Garamond hat das Gefühl, dass die Agenten es nicht waren. Dey bittet sie um Hilfe bei der Untersuchung des Tatorts.",
    {t:"h", x:"Den Mord untersuchen"},
    "Die Spieler behalten die Kontrolle über die Partygäste. Teile ihnen mit, dass der wahre Mörder ein Rätsel bleibt, aber dass die oberste Priorität jedes Gastes ist, den Verdacht auf jemand anderen abzulenken.",
    "Zu diesem Zweck erhalten die Spieler die Möglichkeit, Chaos aus dem Pool auszugeben, indem sie als die Gäste handeln, sowie eine einzigartige Sonderregel.",
    {t:"gm-sonder", x:[
     {k:2, n:"Seht, was ich gefunden habe", s:"von Spielern aktiviert", x:"Ein Partygast legt ein belastendes Beweisstück gegen einen anderen Gast oder einen Agenten offen. Ähnlich wie bei Anträgen auf Realitätsanpassung ist der enthüllte Beweis echt, und die Umstände, die ihn erzeugt haben, werden rückwirkend wahr."},
     {plus:30, n:"Niemals Schuld eingestehen", s:"Sonderregel · je Agent", x:"Gesteht ein Partygast oder ein Agent den Mord an Joachim Edbert, werden dem Pool sofort 30 Chaos für jeden Agenten des Einsatzes hinzugefügt."}
    ], nach:"Wird „Niemals Schuld eingestehen“ aktiviert, ist Garamond so wütend, dass das Rätsel vorzeitig beendet wurde, dass dey Überwältigen auf jeden Agenten einsetzt, den dey erreichen kann, und flieht."}
   ]},
   {t:"Die Anomalie untersuchen", p:174, b:[
    "Die Agenten werden sehr schnell feststellen, dass nicht die Aufdeckung des Mörders die Priorität ist, sondern das Finden der Anomalie. Versuche, sich darauf zu konzentrieren, werden jedoch auf Hindernisse stoßen.",
    "Die Anomalie – Garamond – will, dass sie sich in das Drama verstricken. Wenn die Agenten das Rätsel ignorieren oder offensichtlich darauf konzentriert wirken, die Anomalie zu finden, sehen sie sich einem endlosen Strom Schädlicher Kleiner Anomalien in Form schwebender klassischer Mordwaffen gegenüber (Kerzenleuchter, Revolver, Seil, Schraubenschlüssel). Da der gesamte Einsatz in ihrer Domäne stattfindet, können diese einzeln und kostenlos erschaffen werden.",
    "Das soll lästig und zugleich ein Hinweis sein: Solange sie in Garamonds Augen am Rätsel interessiert wirken, passiert das nicht.",
    "**Wenn die Agenten beginnen, Garamond direkt zu verdächtigen,** gibt die Anomalie Chaos aus, um sie abzulenken (mit Töten, damit andere Partygäste einander umbringen) oder, falls genug vorhanden, Überwältigen gegen die Agenten einzusetzen. Die Agenten können das verhindern, indem sie „Seht, was ich gefunden habe“ nutzen.",
    {t:"h", x:"Die wahren Verdächtigen"},
    "Es gibt drei wahrscheinliche Verdächtige dafür, was die Anomalie sein könnte, da die Spieler die Partygäste kontrollieren. Wollen sie diese untersuchen, können sie die folgenden Orte aufsuchen:",
    {t:"karten", x:[
     {h:"Pinifred Griselda", b:["Derzeit am Infinity Pool auf dem Gelände."]},
     {h:"Joachim Edbert oder das Anwesen selbst", b:["Tatort","A/V-Raum"]},
     {h:"Detektiv Garamond (richtig)", b:["Folgt den Agenten, so gut es geht, immer verfügbar"]}
    ]},
    "Andere Gäste können sich jederzeit überall auf dem Gelände oder im Anwesen aufhalten. Das Anwesen hat viele weitere Räume, aber nur wenige davon sind für die Ermittlung direkt von Bedeutung.",
    "**Wenn die Agenten Garamond mit dem Verdacht, die Anomalie zu sein, konfrontieren, einen Mörder benennen oder aufgeben,** beginnt die Begegnung."
   ]},
   {t:"Tatort", p:175, b:[
    "Edberts Büro ist ein Chaos aus Blut und verstreuten Papieren zu halbgaren Apps und Anlagebetrügereien. Seine Leiche liegt mitten im Raum, ein Messer im Rücken.",
    "Garamond ist fasziniert. Der Tod sieht einfach aus, aber dey ist sich nicht so sicher. *„Eine Hand hielt das Messer, aber eine ganz andere Hand … oder vielleicht viele Hände … ziehen die Fäden in diesem Netz des Todes.“*",
    "**Bei passender Gelegenheit,** oder wenn sie mit der Untersuchung des Raumes fertig sind, bittet Garamond sie um Hilfe. Alle würden in seiner Gegenwart auf der Hut sein, sagt er, aber sie könnten vielleicht zusätzliche Informationen darüber herausfinden, wer der Mörder ist. Ob sie zustimmen oder nicht: Er wird versuchen, hinter ihnen herzugehen und zu beobachten, und Hilfe oder Rat anbieten, wann immer sie ihn zu brauchen scheinen.",
    {t:"hinweis", art:"gew", h:"Agenten erfahren Folgendes mühelos beim Untersuchen des Raumes:", x:[
     "Edbert wurde überraschend getötet – es gab kaum einen Kampf.",
     "Es gibt nur eine Tür in den Raum bzw. aus dem Raum, aber es gibt einen Lüftungsschacht mit einem losen Gitter und ein geschlossenes, unverschlossenes Fenster.",
     "Eine Tube sehr teurer Lippenstift in Vivian Gotterdammerungs Farbe in Edberts rechter Hand. Damit hat er das Wort „SAFE“ geschrieben.",
     "Eine zerbrochene GUNWHALE-INDUSTRIES-Drohne auf dem Boden, mit Klebeband daran, das sie früher an etwas befestigt hat.",
     "Peach Emojis Handy, zersprungen auf dem Boden. Der letzte Anruf war mit Edbert.",
     "Ein Bitcoin-Kurstracker mit Gürtelclip, der fröhlich zwitschert, wenn er in die Nähe von Gilchrest Taylors Handy gebracht wird.",
     "Ein USB-Stick, auf dessen Seite ein einzelner Unterstrich gedruckt ist."
    ]},
    {t:"hinweis", art:"anom", h:"Agenten erfahren Folgendes durch anomale Methoden:", x:[
     "Kurz vor seinem Tod rief Edbert nach Pinifred, weil sein Eiskaffee zu kalt geworden war. Er ging zur Tür, um sie zu schließen – überlegte es sich aber im letzten Moment anders. Er griff nach etwas in seiner Tasche – entschied sich aber dagegen.",
     "Falls sichtbar (etwa durch die Fähigkeit Negatives), ist die Gestalt, die Edbert erstochen hat, nicht festgelegt – sie sieht aus wie Pinifred, dann wie Peach Emoji, Vivian, Gilchrest, Nathaniel, Covalence und Underscore. Dies ist in Wahrheit eine täuschende Kleine Anomalie, die Garamond erschaffen hat.",
     "Keines der übrigen Details – Lippenstift, Drohne, Handy usw. – existiert bis zu genau dem Moment, in dem die Lichter wieder angehen."
    ]}
   ]},
   {t:"Der Infinity Pool", p:176, b:[
    "Agenten, die mit einer verzweifelten Pinifred Griselda sprechen wollen, finden sie am Infinity Pool, einer extravaganten Ergänzung des Geländes, die halb drinnen und halb draußen liegt. Falls verfügbar, ist Peach Emoji wahrscheinlich ebenfalls hier und kümmert sich um sie.",
    {t:"hinweis", art:"gew", h:"Agenten erfahren Folgendes, wenn sie einer aufgewühlten Pinifred zuhören:", x:[
     "Das ist Pinifred jetzt fünfmal passiert. Sie hatte fünf reiche Chefs, die alle ermordet wurden, während sie dabei war. Garamond hat 3 davon gelöst – die anderen zwei waren offensichtlich und wurden sofort gelöst.",
     "Sie hat keine Ahnung, wer das getan haben könnte, weil sie denkt, dass jeder es getan haben könnte. Joachim hat sie genau deshalb eingeladen! Ihr Haupttipp ist Vivian Gotterdammerung, weil sie eine „unheimliche Energie“ hat.",
     "Sobald sie sich beruhigt hat, plant sie, den A/V-Raum zu überprüfen, um zu sehen, ob etwas auf Film festgehalten wurde."
    ]}
   ]},
   {t:"In einem A/V-Raum passiert nie etwas Gutes", p:176, b:[
    "A/V-Raum ist ein Sammelbegriff für das Sicherheitsbüro und den bordeigenen Serverraum von Gruntley Manor. Hier kann das Sicherheitsvideo ausgewertet werden.",
    "Wenn die Agenten ankommen, ist Covalence Vault bereits hier (oder kommt mit ihnen an). Dey ist die einzige Person, die versteht, wie das System zu bedienen ist, das archaisch und für alle außer den technisch versiertesten Agenten unverständlich ist.",
    {t:"hinweis", art:"gew", h:"Agenten sehen Folgendes auf dem verfügbaren Kameramaterial ab wenigen Augenblicken vor dem Stromausfall:", x:[
     "Pinifred vor Edberts Büro, ein riesiges Messer haltend.",
     "Nathaniel Gunwhale, wütend den Flur entlangstapfend, ein riesiges Messer haltend.",
     "Peach Emoji, sichtbar auf der Hofterrasse, ein riesiges Messer haltend.",
     "Covalence Vault ebenfalls dort, ebenfalls ein riesiges Messer haltend.",
     "Vivian Gotterdammerung, die Gilchrest Taylor im Speisesaal als menschlichen Fußschemel benutzt, beide mit je einem eigenen riesigen Messer.",
     "Während des Stromausfalls sind auf einigen Kameras noch schwache Bewegungen zu erkennen.",
     "Für ein einziges Bild, nachdem die Lichter wieder angehen, starrt jeder Gast direkt in die Kamera, hält ununterbrochenen Blickkontakt mit der Person, die auf den Bildschirm schaut, und formt mit den Lippen etwas Unverständliches."
    ]}
   ]},
   {t:"Covalence Vault ist verloren", p:177, b:[
    "Der Spieler, der Covalence Vault spielt, verliert die Kontrolle über dey, und der GM übernimmt.",
    "Nachdem sie das Material gesehen haben, oder kurz nachdem die Agenten es gesehen haben, geht es Covalence nicht gut. Der Tod hat dey nervös gemacht, und dey ächzt unter dem Einfluss der Anomalie. Dey murmelt ständig Dinge wie *„Das ist nicht, was die Daten nahelegen.“* Oder *„So sollte das alles nicht laufen.“* Oder *„War das … ich? Nein. Ich war es nicht.“*",
    "Natürlich nutzt Garamond das als Gelegenheit, den Einsatz noch höher zu treiben.",
    {t:"hinweis", art:"gew", h:"Agenten erfahren Folgendes, wenn sie Covalence Vaults Zusammenbruch unterbrechen und Fragen stellen:", x:[
     "Niemand verhält sich entsprechend seinen ultra-invasiven, überraschend detaillierten Datenprofilen. Covalence Vault vermutet, dass sie alle von jemandem oder etwas manipuliert werden.",
     "Covalence hat vor der Party alle hier sehr sorgfältig studiert, und einiges passt nicht zusammen. Dey nennt Einsätze von Chaos-Effekten, die die Realität verändert haben, falls es welche gab, und erklärt, dass diese Dinge vor dem Mord nicht wahr waren."
    ]},
    "**Bei nächstmöglicher Gelegenheit** setzt Garamond den Chaos-Effekt Töten ein, um eine andere Person auf der Party zum Mord an Covalence Vault zu treiben. Hat dey genug Chaos, tut dey es, indem dey das Licht flackernd ausgehen lässt, während die Agenten mit Covalence sprechen."
   ]}
  ],
  beg: [
   {t:"Der Salon", p:177, b:[
    "Detektiv Garamond verlässt den Raum durch eine nahe Tür. Wenn die Agenten ihm nachsetzen, treten sie nicht in den erwarteten Raum, sondern direkt in den Salon, wo die anderen Partygäste unerklärlicherweise versammelt sind und kurz verwirrt wirken.",
    "*„Ich nehme an, ihr fragt euch, warum ich euch hier versammelt habe. Die Zeit ist gekommen, dass die Wahrheit ans Licht tritt und uns von sechs weiteren Wochen des Winters der Täuschung befreit.“*",
    "**Wenn Garamond von den Agenten bedroht oder möglicherweise entlarvt wurde,** beginnt dey sofort zu erklären, warum die Agenten die Mörder sind. Dey erklärt, dass etwas Seltsames im Gange sei, und weist auf anomale Fähigkeiten hin, die die Agenten eingesetzt haben – sogar auf solche, bei denen Garamond nicht dabei war oder die dey gar nicht hätte bemerken dürfen.",
    "**Wenn Garamond nicht verdächtigt wurde,** nutzt dey alle Informationen, die dey aus jedem Chaos-Effekt ziehen kann, um ein Bild des Mordes zu zeichnen und aus den Partygästen einen endgültigen Täter zu benennen.",
    "So oder so glauben alle außer den Agenten sofort Garamond, egal wie unlogisch, unsinnig oder unvollständig die Erklärung klingt. Wurden die Agenten benannt, verlieren die Spieler die Kontrolle über alle verbliebenen Partygäste, und jeder wendet sich ihnen zu, zieht ein riesiges Messer und rückt auf die Agenten vor, um sich zu „verteidigen“."
   ]},
   {t:"Garamond beruhigen", p:178, b:[
    "Sind alle Partygäste überwältigt und hat Garamond kein Chaos mehr, versucht der Detektiv, sich zu erklären, und fleht die Agenten an, weitermachen zu dürfen.",
    "Äußern die Agenten zu irgendeinem Zeitpunkt Verständnis oder Mitgefühl für Garamonds Mission, beruhigt sich dey und ist bereit, direkt über die Mission zu sprechen.",
    {t:"h", x:"Garamond ausschalten"},
    "Garamond auszuschalten ist leicht: Die Ripple Gun oder jede andere Methode, die 3 oder mehr Schaden verursacht, kann dey töten. Dey ist zerbrechlich. Allerdings glauben dann alle bei der Veranstaltung, die Agenten hätten den berühmtesten Detektiv der Welt getötet.",
    {t:"h", x:"Garamond fangen"},
    "Wollen die Agenten dey nach Garamonds Erklärung immer noch fangen, geht Garamond freiwillig in den Aktenkoffer.",
    {t:"h", x:"Garamonds Erklärung"},
    "Anfangs wollte dey echte Morde lösen und Menschen helfen – aber die meisten Morde sind leicht zu lösen und schwer zu verhindern, weil sie systemisch sind. Garamond hat einen Umweg zur Gerechtigkeit genommen, indem dey Menschen tötet und belastet, die an der Aufrechterhaltung dieser systemischen Probleme beteiligt sind: die Reichen, die Grausamen und die Mächtigen.",
    "Garamonds Kräfte sorgen dafür, dass gewöhnliche Menschen dey immer glauben, sogar die Täter, weil sie alle diese Morde begehen würden. Garamonds Kräfte werden von der Komplexität, dem Drama und der Intrige der Situation gespeist. Und weil dey wie ein Genie wirkt, lieben die Leute dey.",
    "Wird dey sich selbst überlassen, macht dey weiter wie immer: schreckliche Menschen töten und andere schreckliche Menschen dafür verantwortlich machen."
   ]}
  ],
  nach: [
   {t:"Ausgänge", p:178, b:[
    {t:"h", x:"Lose Enden"},
    "Alle überlebenden Partygäste können hartnäckige Lose Enden sein. Garamond hat ihren Verstand manipuliert und sie dazu gebracht, aufeinander loszugehen und Morde zu planen, die nur ein kleines bisschen schlechtere Ideen waren, als sie es von sich aus gehabt hätten. Manche lassen sich vielleicht leicht abbringen, wenn sich die Lage beruhigt, aber manche verfolgen womöglich weiter ein Interesse daran, Anomalien zu erforschen – und zu vermarkten und als Waffe zu nutzen.",
    {t:"h", x:"Eine Welt ohne Garamond"},
    "Wenn die Sterberate beim Dasein als wohlhabender Sozialitäts- und Geschäftsmensch abnimmt, kommt es zu einem Boom von Menschen, die öffentlich und stolz reich sind. Genau: Die Wohlhabenden von Ternion City waren wegen der Angst vor komplizierten und ironisch passenden Mordszenarien weniger aktiv. Ternion wird einen Boom schamloser Zurschaustellung von Reichtum und kleinlicher Macht erleben, besonders von Partygästen, die eine vage Ahnung davon haben, was los war.",
    {t:"h", x:"Garamonds Stern geht auf"},
    "Darf Garamond ein anomaler Detektiv bleiben, wird dey bei den Agenten, die Zeit mit dey verbringen, Orientierung suchen: Soll dey weiter den Tod der Reichen organisieren oder sich bedeckt halten und echte Verbrechen lösen? Wie dey gelenkt wird, verändert dey Wirkung auf Ternion City."
   ]},
   {t:"Vault-Anforderung", p:179, b:[
    {t:"anforderung", h:"Adworth Bumbleton Scapegoat III Gum", en:"Adworth Bumbleton Scapegoat III Gum", preis:18, b:[
     "Diese Pillendose enthält drei zuckerüberzogene Kapseln, die du im Mund anfeuchten und auf eine Oberfläche spucken kannst. Tust du das, dehnt sich die Kapsel rasch aus und nimmt die Gestalt eines unwiderstehlich verdächtigen Mannes an. Hat er seine volle Größe erreicht, ist er fest anzufassen und zu einfachen Bewegungen fähig.",
     "Sein Standardverhalten ist, seine Umgebung abzusuchen und Leute anzustarren, bis sie seinen Blick erwidern, woraufhin er den Kopf ruckartig herumreißt, um eine andere Person anzustarren. Die ganze Zeit hantiert er auffällig mit einer Taschenuhr in der Innentasche seines Jacketts herum. Er zieht die Schuld für alle Verbrechen oder schlechtes Verhalten auf sich, die in der unmittelbaren Umgebung auftreten.",
     "Er kann nicht sprechen, aber er versteht Sprache und antwortet mit einfachen Gesten.",
     "Nach fünfzehn Minuten trocknet er vollständig aus, dieser Effekt endet, und er löst sich auf. Wird in seiner Gegenwart Wet Mouth Brand Chewing Gum and Dietary Supplement erwähnt, explodiert er."
    ]}
   ]},
   {t:"Anomalie-Fähigkeit", p:179, b:[
    {t:"faehig", h:"Perfektes Verbrechen", en:"Perfect Crime",
     x:"Niemand wird je etwas merken. Nachdem du dabei beobachtet wurdest, etwas zu zerbrechen oder zu stehlen, sieh dich im Raum um und würfle auf **Subtilität**.",
     erg:[
      ["ok","**Bei Erfolg** hat dich niemand dabei gesehen, wegen einer Ablenkung: Die Lichter flackerten im genau richtigen Moment, ein lautes Geräusch lenkte alle ab, ein kleines Tier am anderen Ende des Raumes tat etwas Niedliches."],
      ["plus","**Bei jeder dritten {3}** darfst du eine der folgenden Möglichkeiten wählen, die nach der Ablenkung wahr ist (du darfst eine Möglichkeit mehrfach wählen):\n– Eine andere Person in der Nähe befindet sich nach der Ablenkung näher am zerbrochenen oder gestohlenen Gegenstand als du.\n– Du bist sichtbar mit einer unabhängigen Tätigkeit beschäftigt, abseits des zerbrochenen oder gestohlenen Gegenstands.\n– Die Ablenkung wiederholt sich ein weiteres Mal."],
      ["nein","**Bei Fehlschlag** stellt sich heraus, dass jemand nach dem zerbrochenen oder gestohlenen Gegenstand gesucht hat. Jemand Wichtiges und Mächtiges, der gerade erst angekommen ist."]
     ]}
   ]}
  ]
 }
};
/* GESTALTUNG: Seitenzahlen p = PDF-Seitennummer (Dateien SNNN); die gedruckte Buchzahl ist jeweils um 1 höher (Einsatz endet auf S178 = gedruckt 179). S162: Titelseite mit Einladungsbrief (Handout „brief“, vollständig übersetzt, Umschlag mit Siegel und Blutlache). S164 (PDF): sechs Figurenkarten (Peach Emoji, Covalence Vault, Gilchrest Taylor, Vivian Gotterdammerung, Underscore, Nathaniel Gunwhale) als `karten` mit Typischen Sätzen und Zielen; zuvor die Dreier-Kartenreihe der Spielerpaare als `sp` (Peach/Covalence · Gilchrest/Nathaniel · Underscore/Vivian), im Buch rosa schiefe Karten. S167: zwei Listen mit Sprechblasen-/Fragezeichen-Symbol (Pinifreds Gesprächsstarter, Émiles Fragen) als h3 + liste. S168: Einsatzbesprechung – nur die Einleitung und die drei Fälle im Vorlesetext, die GM-Absätze danach als normaler Text. S169: Chaos-Effekte mit zwei neuen (▲) Effekten Verstrickung und Enthüllung; Hinweis zu Domäne (Chaos bis 3 kostenlos, alles dreifach). S172: Sonderregel-Tabelle (Seht, was ich gefunden habe / Niemals Schuld eingestehen) sowohl in `sonder` als auch im Abschnitt „Der Dolch im Rücken“ als `tab`. S173: Karten der drei Verdächtigen (im Buch schiefe rosa Karten). S174: Tatort mit gew- und anom-Hinweisliste nebeneinander. S175: zwei Spalten (Infinity Pool / A/V-Raum) als eigene Abschnitte. Reiter Begegnung: im Buch kein eigenes „Garamond beruhigen“-Kapitel, sondern Unterüberschriften auf S177 (Calming/Eliminating/Capturing, rechts Garamonds Erklärung). Nachspiel hat keine Ausgangs-Spalten (Anomalie gefangen/entkommen), nur Lose Enden, Eine Welt ohne Garamond, Garamonds Stern geht auf. Vault-Anforderung Preis 18. Anomalie-Fähigkeit „Perfektes Verbrechen“ (Subtilität) mit ok/plus/nein. Kein Bild-Block außer Titelseite; Buchillustrationen im Einsatz: keine weiteren erkennbar. Reiter heißen wie im Gerüst. */
