/* Legend in the Mist – Fassung von „Argos Tagebuch“ (Saga vom Brüchigen Frieden, Kapitel I, Saga-Band S.70–77)
   Aufbau wie bei Wake of the Oldways: Überblick, Szenen, Vignetten, Challenges. Status/Tags als {name-stufe}. */
(function(){
var L = window.HH_LITM = window.HH_LITM || {};
L["fp/k1/argo"] = {
 titel: "Argos Tagebuch", en: "Argo’s Diary", bild: "fp-s071-i-argos-diary", quelle: "Saga vom Brüchigen Frieden · Kapitel I", seiten: "S. 70–77",
 kurz: "Vier Boggarts reisen von Wallford nach Chesterfield by-the-fire, und mit ihnen eine Seite aus Argos Tagebuch. Ein vornehmes Fae-Paar reist mit, doch die beiden sind Spione der Tristarred.",
 helden: [
  {id: "gwen", name: "Gwen Summers", rolle: "Bibliothekarin, Boggart", themen: [
   {art: "Herkunft", name: "Gelehrte von Wallford", tags: ["Bibliothekarin", "unfehlbares Gedächtnis", "Handschriften entziffern", "Archivwissen"], schw: "besessen von Argos Rätsel", quest: "Das Geheimnis von Argos Tagebuch lüften"},
   {art: "Abenteuer", name: "Forscherdrang", tags: ["Karten und Codes lesen", "Contracts-Kenntnis", "Fae sprechen"], schw: "reiseunerfahren", quest: "Die Seite heil nach Chesterfield by-the-fire bringen"},
   {art: "Größe", name: "Hüterin der Seite", tags: ["Wachsseite behüten", "zäher Wille", "Argos Geheimnis"], schw: "vertraut zu schnell Fremden mit Wissen", quest: "Alle Seiten des Tagebuchs finden"}]},
  {id: "humphrey", name: "Humphrey Lockwood", rolle: "Jäger und Führer, Boggart", themen: [
   {art: "Herkunft", name: "Einzelgänger-Jäger", tags: ["Fährtenleser", "Büchse", "Mäusegespann", "Wetterkunde"], schw: "scheut Gesellschaft", quest: "Die Beute dieser Jagd gut verkaufen"},
   {art: "Abenteuer", name: "Pfadfinder", tags: ["Lager aufschlagen", "Fallen erkennen", "Wache halten"], schw: "ungeduldig mit Gelehrten", quest: "Seine Reisenden sicher nach Chesterfield by-the-fire führen"},
   {art: "Größe", name: "Ehrenwort", tags: ["hält Versprechen", "Beschützer", "unerschütterlich"], schw: "an sein Wort gebunden", quest: "Das Versprechen an Gwen einlösen"}]},
  {id: "earnest", name: "Earnest Gilmore", rolle: "Ehrenmann und Fechter, Boggart", themen: [
   {art: "Herkunft", name: "Ehrenmann", tags: ["gute Manieren", "höfliche Rede", "Gesellschaft kennen", "Schneid"], schw: "kann Unrecht nicht dulden", quest: "Zu Samuels Abschlussfeier rechtzeitig ankommen"},
   {art: "Abenteuer", name: "Degenfechter", tags: ["Degen", "Parade", "kühler Kopf"], schw: "scheut unnötige Risiken", quest: "Sienna aus dem Ärger heraushalten"},
   {art: "Größe", name: "Jugendfreund", tags: ["kennt Siennas Tricks", "geduldig", "loyal"], schw: "belügt sich selbst über Sienna", quest: "Sienna auf den rechten Weg führen"}]},
  {id: "sienna", name: "Sienna Blackwell", rolle: "Gaunerin, Boggart", themen: [
   {art: "Herkunft", name: "Straßenkind von Wallford", tags: ["Taschendiebin", "Schlösser", "Verstecke kennen", "flinke Zunge"], schw: "abgelaufene Papiere", quest: "Wallfords Banden hinter sich lassen"},
   {art: "Abenteuer", name: "Schlitzohr", tags: ["Streiche", "Lügen mit Charme", "Ablenkungsmanöver"], schw: "kann nicht stillhalten", quest: "Chesterfield by-the-fire erleben"},
   {art: "Größe", name: "Glückskind", tags: ["fällt auf die Füße", "sieht die Chance", "Neugier"], schw: "zieht Ärger an", quest: "Aus allem etwas Gutes herausholen"}]}
 ],
 szenen: [
 {key: "wallford", t: "Die Tore von Wallford", en: "The Gates of Wallford",
  vor: ["Der Morgen in Wallford riecht nach Rauch und frischem Brot. Im Hof der Taverne belädt ein Jäger seine kleine Kutsche, vor die eine braune Maus gespannt ist. Zwei vornehm gekleidete Feen warten daneben und lächeln, als hätte ihnen die ganze Stadt eine Bühne gebaut."],
  ablauf: ["Die Gefährten treffen sich vor der Taverne. **Humphrey** lädt die Kutsche, **Gwen**, **Earnest** und **Sienna** teilen sich die Kosten. Zwei weitere Reisende wollen mit: das frisch vermählte Paar **Gustav** und **Juliette**. Die Reise nach Chesterfield by-the-fire führt durch das Living Room. Zuerst muss die Kutsche aber durch die Kontrolle am Stadttor.",
   "Lass die Spieler:innen kurz vorstellen, wie ihre Figuren zueinander stehen, und frage sie, was sie in der Kutsche verbergen. Gwen trägt die Wachsseite aus Argos Tagebuch. Sienna hat abgelaufene Papiere und Earnest eine nicht eingetragene Waffe.",
   "{Gustav} bittet Humphrey gegen eine großzügige Münze, seine Halbschere vor den Soldaten zu verstecken. Er habe die Papiere dafür unterwegs verloren."],
  vign: [
   {t: "Die Kutsche beladen", sub: "Gustav und Juliette stellen sich vor.", l: ["Gustavs goldene Uhr ist ein echtes Offiziersstück. Wer genau hinsieht, erkennt sie (Tag: {Offiziersuhr}).", "Juliettes Juwelen sind Fälschungen von höchster Qualität. Nur wer sehr genau prüft, bemerkt es.", "Beide sprechen mit starkem Noble-Fae-Akzent und finden alles „exquisit malerisch“."]},
   {t: "Waffen und Papiere verstecken", sub: "Wer etwas Verbotenes dabeihat, muss es vor der Kontrolle verbergen.", l: ["Humphrey kann Gustavs Halbschere unter der Kutsche verstecken (Konsequenz bei Misserfolg: {nervös-1}).", "Sienna verkriecht sich zwischen den Koffern. Misslingt es, wird sie als Betrügerin erkannt ({entlarvt-2}).", "Nicht gut versteckte Waffen werden beschlagnahmt (streicht ein Item-Tag)."]},
   {t: "Die Kontrolle am Stadttor", sub: "Zwei Boggart-Soldaten öffnen die Kutschentüren und prüfen Papiere und Waffen.", l: ["Ein „Trinkgeld“ und ein Lächeln können abgelaufene Papiere übersehen lassen. Bestechen ist leichter, verlangt aber Fingerspitzengefühl.", "Gelingt nichts davon: Strafe, Beschlagnahme oder Ärger mit der Wache ({gestresst-2}).", "Misslingt es gründlich, wird eine Waffe konfisziert und die Reise beginnt mit schlechter Laune ({angespannt-1})."]}
  ],
  figuren: [
   {n: "Gustav", x: "Stattlicher junger Fae mit blondem Haar, gewachstem Schnurrbart und eleganter Kleidung. Ein Soldat, der sich als Edelmann ausgibt."},
   {n: "Juliette (Jujù)", x: "Fröhlich, in ausladendem Kleid und mit Hut aus Bienenfell. Mehr Offizierin, als ihr Auftreten verrät."}],
  ch: [], lohn: []},

 {key: "lager", t: "Das Lager", en: "The Camp",
  vor: ["Das Licht des Fireplace taucht das Living Room in kalten Sonnenuntergang. Die Kutsche hält, und die Maus schnaubt dankbar. Irgendwo knackt es zwischen den Fasern des Carpet."],
  ablauf: ["Nach einem langen Tag auf der Straße schlagen die Gefährten das Lager auf. Das Paar Gustav und Juliette hat sich in Wahrheit vorgenommen, Gwen in dieser Nacht die Seite zu stehlen.",
   "Lass die Helden festlegen, **wo** sie lagern und **wer wann** Wache hält (vier Schichten). Gustav möchte nicht die erste Wache übernehmen, Juliette hält sich ganz heraus.",
   "Ein günstiger Lagerplatz unter einem hohen Pilz schützt Feuer und Zelte vor dem Nachtwind. Wer gründlich hinsieht, bemerkt, dass der Hutrand mit feuchtem Schimmel bedeckt ist, der in der Nacht gefrieren wird."],
  vign: [
   {t: "Das Lager aufschlagen", sub: "Der Pilz sieht nach Schutz aus.", l: ["Wer den Schimmel bemerkt, sucht einen besseren Platz (kein Nachteil).", "Wer nicht, lagert unter dem Pilz: In der Nacht friert er und löscht das Feuer während der zweiten Wache. Das lockt Schaben an (Neue Challenge: Schabenrudel).", "Das Aufschlagen selbst kostet nichts, aber wer es hastig tut, erhält {müde-1}."]},
   {t: "Die Wache", sub: "Wach bleiben und aufmerksam bleiben.", l: ["Wer wacht, muss wach bleiben und sich nicht ablenken lassen (Misserfolg: {schläfrig-2}).", "Schläft jemand ein oder lässt sich ablenken, nutzen Gustav und Juliette die Gelegenheit: Sie stehlen die Seite und verschwinden (Gwen verliert den Tag {Wachsseite}).", "Dasselbe geschieht, wenn Gustav eine Wache übernimmt oder die beiden den Schabenangriff zur Flucht nutzen können."]},
   {t: "Der Überfall", sub: "Passiert nichts davon, greifen die beiden an.", l: ["Vor Tagesanbruch fallen Gustav und Juliette über die Gruppe her, um die Seite zu holen (Neue Challenge: Gustav und Juliette).", "Beginne den Kampf mit einer Reaktionsrunde der Helden."]}
  ],
  figuren: [], ch: ["schaben", "paar"], lohn: []},

 {key: "spur", t: "Der Spur folgen", en: "Following the Trail",
  vor: ["Der Morgen riecht nach Tau und Pilzen. Im feuchten Floor zeichnen sich die Abdrücke kleiner Stiefel ab, ein paar Dutzend winzige Meter weit, dann biegen sie vom Weg ab."],
  ablauf: ["Diese Szene gilt nur, wenn die Seite gestohlen wurde. Die Helden folgen den Spuren der Diebe. Die Spuren führen weder nach Wallford noch nach Chesterfield by-the-fire. Die Diebe müssen also in der Nähe lagern, in einem Pilzhain oder in einem Inbetween unter dem Floor.",
   "Wer die Gegend und die von der Hearth Army patrouillierten Wege bedenkt, kann das schließen. Folgen die Helden der Spur weiter, erreichen sie den Rand eines Hains brauner Pilze. Nur ein hervorragender Spurenleser bemerkt, dass Juliettes kleinere Fußspuren sich in die Gegenrichtung abspalten, zu einer Lichtung im Carpet."],
  vign: [
   {t: "Der Pilzhain", sub: "Etwa zwanzig winzige Meter im Hain verlieren sich alle Spuren in einem Fleck schleimigen Mooses.", l: ["Die hohen Hüte lassen kaum Licht durch. Weiße Sporen treiben wie stinkender Nebel durch die Luft.", "Wer sich Stoff vor Mund und Nase bindet, bleibt gesund. Alle anderen erhalten {krank-2}.", "Nur wer sehr aufmerksam ist, bemerkt rechtzeitig die Falle: Auf einem Pilzhut lauert eine Spinne (Neue Challenge: Gemeine Spinne)."]},
   {t: "Lauft!", sub: "Eine gewöhnliche Spinne ist für Figuren am Anfang ihrer Reise sehr gefährlich.", l: ["Erinnere die Spieler:innen: Es ist keine Schande, wegzulaufen. Wer wegläuft, kann ein andermal weiterkämpfen.", "Wenden die Helden sich zur Flucht, jagt die Spinne hinter ihnen her. Die Flucht ist ein Wettlauf (Limit „Entkommen“ 3 auf der Challenge).", "Die Spinne schleudert zwei Spinnwebbündel vor sich her."]},
   {t: "Die Spinnwebbündel", sub: "Eines aufzuheben erfordert Kraft.", l: ["In einem Bündel liegt ein armer Boggart in fortgeschrittener Verwesung, im anderen offensichtlich Gustav.", "Gustavs Uhr und Münzen lassen sich noch nehmen. Die Geldscheine sind von der Spinnengalle ruiniert.", "In Gustavs Innentaschen: ein metallenes Zigarettenetui mit Schlüssel und eine einfache Karte auf Fae, die zur Mitte einer Lichtung weist. (Gebe den Helden die Tags {Falltürschlüssel} und {Karte zur Lichtung}.)"]}
  ],
  figuren: [], ch: ["spinne"], lohn: []},

 {key: "inbetween", t: "Die Lichtung und die Inbetweens", en: "The Clearing and the Inbetweens",
  vor: ["Zwischen den Carpet Tufts liegt eine Falltür im Floor, schwer und halb vom Moos verdeckt. Unter ihr fällt eine Leiter in die Dunkelheit, zehn winzige Meter tief."],
  ablauf: ["Folgen die Helden Juliettes Spuren oder Gustavs Karte, erreichen sie eine Lichtung. Dort entdeckt jeder motivierte Held eine verborgene Falltür. Zum Öffnen braucht man Gustavs Schlüssel oder eine geschickte Hand.",
   "Unter der Falltür liegt ein Labyrinth staubiger Tunnel, die Littlings erweitert haben. Nur das schwache grüne Licht leuchtender Schimmelflecken erhellt sie. Die Tunnel sind lang und still und führen in mehrere Richtungen."],
  vign: [
   {t: "Die Tunnel", sub: "Tunnelwächter patrouillieren paarweise in alten Uniformen.", l: ["Die Wachen sprechen nur Fae und tragen alte Uniformen aus dem Household War.", "Nur wer sich lautlos bewegt, bleibt unbemerkt. Misserfolg: Die Wachen entdecken die Helden (Neue Challenge: Tristarred-Wachen).", "Wer den falschen Weg nimmt, verirrt sich in den Tunneln und wird unweigerlich entdeckt."]},
   {t: "Der Hinweis auf der Uniform", sub: "Wer eine Wache besiegt und ihre Uniform untersucht, findet etwas.", l: ["Auf der linken Schulter fehlen zwei der fünf Sterne: Sie wurden abgeschnitten.", "Besonnene Helden erkennen die hypernationalistischen Rebellen, die als **Tristarred** bekannt sind (siehe „Das Edikt der Brüder“, Abschnitt VII „Household-Geschichte“ im Grundbuch).", "Warum sie sich im Hearth verstecken und nach Argos Tagebuch suchen, bleibt ein Rätsel."]}
  ],
  figuren: [], ch: ["wachen"], lohn: []},

 {key: "studierzimmer", t: "Das unterirdische Studierzimmer", en: "The Underground Study",
  vor: ["Am Ende des Tunnels öffnet sich ein riesiger runder Raum mit Gewölbedecke. Hölzerne Gerüste, Schaufeln, Spitzhacken. Weiter hinten brennen Lampen über drei großen Schreibtischen voller Karten."],
  ablauf: ["Sechs Feen arbeiten auf einem Gerüst an der linken Wand und erweitern den Raum. Keine von ihnen will kämpfen. Zwei Soldaten dagegen überwachen sie, mit Schilden, Speeren und Kürassen.",
   "Etwa zwanzig winzige Meter hinter der Tür stehen drei große Schreibtische mit Karten des Hearth, Büchern über Contracts und Argos Geschichte (alle Gwen vertraut) und einem in Code verfassten Befehlsschreiben.",
   "**Juliette** steht mit dem Rücken zum Eingang an einem Schreibtisch, in alter Offiziersuniform der Great Imperial Army, und kopiert die Seite aus Argos Tagebuch."],
  vign: [
   {t: "Die Wachen überwinden", sub: "Lautlos nähern oder aus dem dunklen Tunnel schießen.", l: ["Wer sich langsam hinter Schutthaufen nähert, überrumpelt die Soldaten.", "Wer aus dem Tunnel schießt, hat zehn winzige Meter Abstand.", "Wurde Alarm geschlagen, lauern die Soldaten beiderseits der Tür und überfallen die Helden beim Eintreten (Reaktionsrunde der Gegner). Das vermeidet nur, wer als Erster vorsichtig eintritt oder die besorgten Mienen der Arbeiter liest."]},
   {t: "Juliette stellen", sub: "Sie stirbt eher, als ihre Sache zu verraten.", l: ["Entwaffnet man sie nicht zuerst, richtet sie die Pistole gegen sich selbst.", "Die Seite lässt sich ihr nicht unbemerkt entwenden. Es braucht Gewalt oder Drohung.", "Mit dem Rücken zur Wand verrät sie: Die Tristarred sammeln ihre Kräfte und wollen mit den Geheimnissen aus Argos Tagebuch Zarin Arcadia Oberonovna stürzen und das alte Fae-Reich im House wiederherstellen.", "Dieselbe Information steht im Brief auf dem Schreibtisch, sobald man den Code knackt."]}
  ],
  figuren: [{n: "Die Arbeiter", x: "Sechs Feen. Sie wollen nicht kämpfen, aber einer von ihnen nutzt die erste Gelegenheit, den Einsturz auszulösen."}],
  ch: ["kuerassiere", "juliette"], lohn: []},

 {key: "einsturz", t: "Der Einsturz", en: "The Collapse",
  vor: ["Ein Knall, und der Staub steigt aus der Wand wie Rauch. Dann kommen die Beine: schwarz, glänzend, endlos."],
  ablauf: ["Erschießt sich Juliette, schießt jemand auf die Arbeiter oder verfehlt sein Ziel, dringt eine Querschläger-Kugel in einen Riss in der Wand und löst eine Kettenreaktion aus. Sonst nutzt einer der Arbeiter die erste Gelegenheit, eine schwache Stelle zu treffen.",
   "Aus dem Riss kriecht ein riesiger **Sporn-Hundertfüßer** ins Studierzimmer. Er verschlingt Juliette (falls sie noch lebt) oder einen Wächter. Der Anblick ist furchterregend ({verängstigt-2} für jeden, der nicht widersteht).",
   "In der kurzen Kaupause kann man Seite und Brief mühelos vom Schreibtisch nehmen. Dann beginnt die Flucht zur Falltür."],
  vign: [
   {t: "Die Flucht", sub: "Zurück durch die Tunnel zur Leiter.", l: ["Die Flucht ist ein Wettlauf gegen den Hundertfüßer (Limit „Falltür erreichen“ 4).", "Gelingt sie, bleibt der Hundertfüßer im senkrechten Tunnel mit der Leiter stecken, schüttelt sich wütend und begräbt schließlich sich selbst und die unterirdische Basis für immer.", "Wer zurückbleibt, wird verschüttet ({verschüttet-3}) oder von Spornen getroffen ({vergiftet-3})."]}
  ],
  figuren: [], ch: ["hundertfuesser"], lohn: []},

 {key: "schluss", t: "Schluss", en: "Aftermath",
  vor: ["Draußen ist es ruhig. Über dem Carpet geht die Sonne auf, als wäre nichts geschehen."],
  ablauf: ["Nachdem sie die Seite aus Argos Tagebuch zurückgeholt und den Plan der Tristarred aufgedeckt haben, kehren die Helden zum Lager zurück, gönnen sich ein Mahl und reisen nach Chesterfield by-the-fire weiter.",
   "**Earnest** hat es nicht geschafft, Sienna aus dem Ärger zu halten. **Sienna** hat auf eigene Weise etwas Gutes aus der Erfahrung gezogen. **Humphrey** wollte all das hinter sich lassen und zu seinem Leben als Jäger zurückkehren.",
   "Die Seite des Tagebuchs hat auf der Reise eine Ecke verloren. Gwen stellt scharfsinnig fest, dass Humphrey sein Versprechen gebrochen hat, sie und ihr Gepäck unversehrt nach Chesterfield by-the-fire zu bringen. Er ist deshalb weiter verpflichtet, sie zu begleiten, zumindest so lange, bis sie findet, er habe für seinen Fehler gebüßt."],
  vign: [], figuren: [], ch: [],
  lohn: ["Die Wachsseite aus Argos Tagebuch (Item-Tag {Seite aus Argos Tagebuch}, Gwen).", "Der Befehlsbrief der Tristarred (Tag {Beweis gegen die Tristarred}).", "Fortschritt auf Gwens Quest „Das Geheimnis von Argos Tagebuch lüften“ und auf Humphreys Quest „Das Versprechen an Gwen einlösen“.", "Ein Hinweis auf die Tristarred: Spielt ihr die Saga weiter, treten sie bald wieder auf."]}
 ],
 challenges: {
  paar: {name: "GUSTAV UND JULIETTE", dif: 2, typ: "Quarry, Sapper", desc: "Als frisch vermähltes Edelpaar getarnte Agenten der Tristarred. Sie sind höflich, charmant und bereit, für die Seite zu sterben.", limits: [["UNMASK (Entlarven)", 3], ["CAPTURE (Festsetzen)", 3]], tags: ["falsche Adelsfassade", "gestohlene Offiziersuhr", "Schmuckfälschungen", "fanatisch ergeben"],
   threats: [{n: "LIE (Lügen)", f: "Tischt den Helden eine glaubhafte Geschichte auf", o: ["Die Helden glauben ihnen (Complication)", "Streut Zweifel zwischen die Helden ({misstrauisch-2})"]},
    {n: "STEAL (Stehlen)", f: "Nutzt jede Unachtsamkeit", o: ["Stiehlt die Seite (streicht Gwens Tag {Wachsseite})", "Stiehlt einen Gegenstand (streicht ein Item-Tag)"]},
    {n: "FLEE (Fliehen)", f: "Verschwindet in der Dunkelheit", o: ["Setzt sich ab (das Limit „Festsetzen“ lässt sich erst wieder angreifen, wenn die Helden die Verfolgung aufnehmen)", "Lenkt mit einem Schabenangriff ab"]}],
   quelle: "Szenen „Das Lager“ und „Der Spur folgen“."},
  schaben: {name: "SCHABENRUDEL", dif: 1, typ: "Aggressor", desc: "Eine kleine Gruppe nachtaktiver Schaben, vom erloschenen Feuer und vom Essen angelockt.", limits: [["DRIVE OFF (Verscheuchen)", 2], ["KILL (Töten)", 2]], tags: ["nachtaktiv", "zahlreich", "vom Essen angelockt"],
   threats: [{n: "SWARM (Schwärmen)", f: "Krabbelt über Zelte und Schlafende", o: ["Ekelhaft ({angewidert-2})", "Beißt zu ({verwundet-1})"]}, {n: "GNAW (Annagen)", f: "Frisst Vorräte", o: ["Streicht {Vorräte} oder einen Item-Tag"]}],
   quelle: "Szene „Das Lager“, bei erloschenem Feuer."},
  spinne: {name: "GEMEINE SPINNE", dif: 3, typ: "Aggressor, Quarry", desc: "Eine lauernde Jägerin auf einem Pilzhut, mit Spinnweben und gelähmten Beutebündeln.", limits: [["KILL (Töten)", 4], ["DRIVE OFF (Vertreiben)", 3], ["ESCAPE (Entkommen)", 3]], tags: ["Lauerjägerin", "klebrige Netze", "giftige Beißzangen", "springt vom Pilz"],
   threats: [{n: "WEB (Netz)", f: "Schleudert Fäden aus dem Hinterhalt", o: ["Verstrickt einen Helden ({verstrickt-3})", "Hindert die Flucht (Hindernis in der Umgebung)"]}, {n: "BITE (Biss)", f: "Packt zu und injiziert Gift", o: ["{vergiftet-3}", "{geschwächt-2} und {verwundet-2}"]}, {n: "POUNCE (Sprung)", f: "Stürzt vom Pilzhut auf die Gruppe", o: ["{umgeworfen-2}", "Reißt jemanden von der Gruppe weg ({abgeschnitten-2})"]}],
   quelle: "Szene „Der Spur folgen“."},
  wachen: {name: "TRISTARRED-WACHEN", dif: 2, typ: "Guardian, Aggressor", desc: "Paarweise patrouillierende Fae-Soldaten in alten Uniformen des Household War, mit zwei abgeschnittenen Sternen auf der Schulter.", limits: [["OUTSMART (Überlisten)", 3], ["DEFEAT (Besiegen)", 3], ["STOP ALARM (Alarm verhindern)", 2]], tags: ["nur Fae sprechend", "alte Uniformen", "Bajonett", "patrouillieren paarweise"],
   threats: [{n: "ALARM (Alarm)", f: "Ruft die Kameraden herbei", o: ["Neue Challenge: Wachtrupp", "Alle Helden erhalten {gejagt-2}"]}, {n: "STRIKE (Hieb)", f: "Schlägt zu mit Bajonett oder Gewehrkolben", o: ["{verwundet-2}", "Drängt einen Helden gegen die Wand ({festgesetzt-2})"]}, {n: "SURROUND (Umzingeln)", f: "Schneidet den Rückweg ab", o: ["Verschließt einen Tunnel (Hindernis)"]}],
   quelle: "Szene „Die Lichtung und die Inbetweens“."},
  kuerassiere: {name: "KÜRASSIERE", dif: 3, typ: "Guardian", desc: "Zwei Soldaten mit Schild, Speer und Kürasse, die die Arbeiter im Studierzimmer überwachen.", limits: [["DEFEAT (Besiegen)", 3], ["DISARM (Entwaffnen)", 3], ["PIERCE ARMOR (Rüstung durchdringen)", 3]], tags: ["Kürassen", "Schilde", "Speere", "diszipliniert"],
   threats: [{n: "SHIELD WALL (Schildwall)", f: "Hält den Eingang", o: ["Blockiert den Zugang ({blockiert})", "Schmettert einen Helden zurück ({umgeworfen-2})"]}, {n: "SPEAR (Speer)", f: "Sticht über die Schilde", o: ["{verwundet-3}", "Zwingt zum Rückzug"]}, {n: "AMBUSH (Hinterhalt)", f: "Lauert beiderseits der Tür, wenn Alarm geschlagen wurde", o: ["Reaktionsrunde der Gegner", "{überrascht-2}"]}],
   quelle: "Szene „Das unterirdische Studierzimmer“."},
  juliette: {name: "JULIETTE", dif: 2, typ: "Quarry", desc: "Offizierin der Great Imperial Army in einem Tristarred-Versteck, bereit zu sterben statt zu verraten.", limits: [["DISARM (Entwaffnen)", 2], ["INTERROGATE (Zum Reden bringen)", 4]], tags: ["fanatisch loyal", "Pistole", "Offiziersuniform", "Rücken zur Wand"],
   threats: [{n: "SELF-DESTRUCT (Selbstmord)", f: "Richtet die Pistole gegen sich selbst", o: ["Verhör nicht mehr möglich", "Löst den Einsturz aus"]}, {n: "SHOOT (Schießen)", f: "Schießt auf die Gegner", o: ["{verwundet-2}", "Querschläger trifft die Wand"]}],
   quelle: "Szene „Das unterirdische Studierzimmer“."},
  hundertfuesser: {name: "RIESIGER SPORN-HUNDERTFÜSSER", dif: 4, typ: "Aggressor, Hazard", desc: "Ein riesiges Wesen aus der Wand, das ein Studierzimmer zum Einsturz bringt.", limits: [["ENTOMB (Begraben)", 4], ["ESCAPE (Entkommen)", 4], ["DRIVE OFF (Vertreiben)", 5]], tags: ["gigantisch", "Spornen voller Gift", "Wandbrecher", "schnell"],
   threats: [{n: "CRUSH (Zermalmen)", f: "Wirft sich auf alles in Reichweite", o: ["{verwundet-3}", "{verschüttet-3}"]}, {n: "SPUR (Sporn)", f: "Sticht mit giftigen Spornen", o: ["{vergiftet-3}", "{gelähmt-2}"]}, {n: "COLLAPSE (Einsturz)", f: "Bringt die Decke zum Einsturz", o: ["Versperrt einen Weg (Hindernis)", "Alle Helden: {Flucht dringend-2}"]}],
   quelle: "Szene „Der Einsturz“."}
 }
};
})();
