/* Legend in the Mist – Fassung von „Argos Tagebuch“ (Saga vom Brüchigen Frieden, Kapitel I, Saga-Band S.70–77)
   Teil 1: Überblick, Helden, Gefährtenschaft, Challenges. Szenen in litm-argo-a.js und litm-argo-b.js.
   Status/Tags im Text als {name-stufe}. */
(function(){
var L = window.HH_LITM = window.HH_LITM || {};
L["fp/k1/argo"] = {
 titel: "Argos Tagebuch", en: "Argo’s Diary", bild: "fp-s071-i-argos-diary", quelle: "Saga vom Brüchigen Frieden · Kapitel I", seiten: "S. 70–77",
 kurz: "Vier Boggarts reisen von Wallford nach Chesterfield by-the-fire, und mit ihnen eine Seite aus Argos Tagebuch. Ein vornehmes Fae-Paar teilt sich die Kutsche mit ihnen. Doch die beiden Frischvermählten sind Agenten der Tristarred, und die Seite ist der Grund, warum sie mitfahren.",
 eckdaten: [
  "**Ort:** Wallford und das Living Room bis kurz vor Chesterfield by-the-fire (Hearth)",
  "**Zeit:** September VI H.C.",
  "**Helden:** Gwen, Humphrey, Earnest und Sienna (vier Spieler:innen)",
  "**Dauer:** ein bis zwei Spielabende",
  "**Ton:** Reiseabenteuer mit Verrat, Spurensuche und einer Flucht aus der Tiefe",
  "**Ziel:** Mit der Seite aus Argos Tagebuch Chesterfield by-the-fire erreichen"
 ],
 vor: [
  {l: "Zum Auftakt", x: "Wallford erwacht. Über den Dächern hängt noch der Rauch der Herdfeuer, und aus den Bäckereien zieht der Duft von frischem Pilzbrot durch die engen Gassen. Irgendwo hinter den Mauern der Stadt beginnt das Living Room: ein endloses Land aus Carpet-Fasern, Pilzhainen und Wegen, auf denen die Patrouillen der Hearth Army reiten.\n\nFür vier Boggarts beginnt heute eine Reise nach Chesterfield by-the-fire, der Stadt der Gelehrten unter dem Sofa. Jeder von euch hat seine eigenen Gründe, sie anzutreten. Und in einer Tasche, gut verschnürt und in Wachs gehüllt, reist ein Stück Papier mit, nach dem Gelehrte seit hundert Jahren suchen."}
 ],
 hintergrund: [
  "Argo der Bürokrat war ein herausragender Littling, der sein Leben dem Studium der Contracts widmete und versuchte, ihre Macht zu verstehen und zu nutzen. Nach seinem verfrühten Verschwinden ging das Gerücht um, die Ergebnisse seiner Forschung seien in einem legendären Tagebuch versammelt.",
  "Professor Teampall war einer der vielen Littlings, die von den Geheimnissen des Bürokraten besessen waren, ebenso wie Gwen, die Bibliothekarin. Die beiden schrieben einander oft, um Theorien zu besprechen und Hinweise auszutauschen.",
  "Eines Tages traf in der Wallford Piping Station ein geheimnisvolles Paket für Gwen ein. Ein Brief erklärte, Professor Teampall sei an Altersschwäche gestorben und habe ihr etwas Kostbares vermacht: eine Seite aus Argos Tagebuch, eingeschlossen in eine dünne Wachsschicht. Die wenigen lesbaren Zeilen sind in einer unverständlichen Sprache verfasst. Dem Paket lag ein letzter Gruß bei:",
  {box: "Der Brief von Professor Teampall", l: ["„Mein ganzes Leben verbrachte ich mit dem fruchtlosen Versuch, Argos Geheimnis zu lüften. Vielleicht wirst du, meine liebe Gwen, mehr Glück haben. Suche den Rat meines lieben Freundes Prof. Flanagan in Chesterfield by-the-fire.“", "– Prof. H. Teampall"]},
  "Gwen beschließt, die Seite persönlich nach Chesterfield by-the-fire zu bringen, und heuert dafür den Jäger Humphrey als Führer an. Earnest und Sienna schließen sich an, um sich die Kosten zu teilen."
 ],
 wahrheit: [
  "Die Spur der Seite ist nicht unbemerkt geblieben. Die **Tristarred**, hypernationalistische Fae-Rebellen, die die Tsarina stürzen und das alte Fae-Reich wiederherstellen wollen, suchen ebenfalls nach Argos Tagebuch. Sie erhoffen sich von seinen Geheimnissen die Macht, die sie dafür brauchen.",
  "**Gustav** und **Juliette** reisen als frisch vermähltes Paar in den Flitterwochen. In Wahrheit sind sie Soldaten der Tristarred. Gustavs goldene Uhr ist die Standarduhr eines Offiziers der Great Imperial Army, und Juliettes Juwelen sind hervorragende Fälschungen. Ihr Auftrag: die Seite stehlen und in ein verborgenes Versteck der Tristarred bringen, ein unterirdisches Studierzimmer in den Inbetweens unter dem Floor, nur einen halben Tagesmarsch vom ersten Nachtlager entfernt.",
  "In diesem Versteck arbeiten sechs Fae-Arbeiter unter Zwang an der Erweiterung des Raums, bewacht von Soldaten in alten Uniformen des Household War. Hinter der Wand, an der sie graben, lauert ein riesiger Sporn-Hundertfüßer.",
  "Was die Helden am Ende herausfinden können: Die Tristarred sammeln ihre Kräfte und wollen mithilfe von Argos Geheimnissen Zarin Arcadia Oberonovna stürzen. Warum sie sich ausgerechnet im Hearth verstecken, bleibt in diesem Abenteuer ein Rätsel."
 ],
 gef: {name: "Die Kutsche nach Chesterfield", x: "Was die vier Boggarts für diese Reise verbindet", tags: ["geteilte Reisekasse", "Humphreys Mäusekutsche", "wir kennen uns aus Wallford"], schw: "jeder hat etwas zu verbergen", quest: "Gemeinsam und unversehrt in Chesterfield by-the-fire ankommen"},
 einstieg: [
  {h: "Gwen Summers", i: "Die Gelehrte mit der Seite", l: ["Sie hat ihr Leben der Wahrheit über Argo den Bürokraten gewidmet und bekommt endlich die Gelegenheit, das Rätsel zu lösen. Von einem unerwarteten Abenteuergeist getrieben, hat sie Humphrey als Begleitschutz angeheuert.", "Frage die Spielerin: Wo trägt Gwen die Seite, und wem hat sie davon erzählt?", "Gwen trägt eine Waffe ohne Waffenschein bei sich. Das wird am Stadttor wichtig."]},
  {h: "Humphrey Lockwood", i: "Der Jäger mit der Kutsche", l: ["Der Einzelgänger ist nach Wallford zurückgekehrt, um die Beute seiner letzten Jagd zu verkaufen, und will von Chesterfield by-the-fire aus zu einer weiteren Jagd zum Yule Tree aufbrechen. Gegen eine kleine Gebühr führt er die anderen.", "Er hat Gwen sein **Ehrenwort** gegeben, sie und ihr Gepäck heil ans Ziel zu bringen. Dieses Versprechen ist der Kern seiner Geschichte in diesem Abenteuer.", "Frage den Spieler: Warum hat Humphrey überhaupt Ja gesagt, obwohl er Gesellschaft hasst?"]},
  {h: "Earnest Gilmore", i: "Der Ehrenmann auf Familienbesuch", l: ["Er ist auf dem Weg zur Abschlussfeier seines geschätzten Vetters, des Feinschmeckers Samuel Gilmore, und teilt sich die Kosten für den Führer. Begleitschutz braucht er nicht, aber er geht ungern unnötige Risiken ein.", "Vor allem hofft er, Sienna auf dieser Reise aus jedem Ärger herauszuhalten.", "Frage den Spieler: Was hat Sienna Earnest zuletzt versprochen, und hat sie es gehalten?"]},
  {h: "Sienna Blackwell", i: "Die Gaunerin auf der Flucht", l: ["Sie hat Earnest so lange bedrängt, bis er sie mitnahm und ihr Ticket bezahlte. Angeblich will sie Chesterfield by-the-fire sehen und vielleicht ein oder zwei Abschlüsse machen.", "In Wahrheit haben ihre Streiche gegen Wallfords Verbrecherbanden ihr die Hauptstadt verleidet. Außerdem hat sie „vergessen“, ihre Papiere zu erneuern: Sie sind abgelaufen.", "Frage die Spielerin: Welcher Bande ist Sienna zuletzt auf die Füße getreten?"]}
 ],
 regeln: [
  "Household kennt einfache, kritische und extreme Würfe. In Legend in the Mist wird daraus eine Frage, wie viel Macht ein Held aufbringen muss und wie hart die Konsequenzen ausfallen:",
  {h: "Schwierigkeit übertragen", l: ["**Einfacher Wurf:** ganz normaler Wurf. Ein Erfolg genügt, ein Teilerfolg bringt eine kleine Konsequenz.", "**Kritischer Wurf:** Das Ergebnis braucht Macht 2 oder mehr, um zu wirken. Konsequenzen haben Stufe 2.", "**Extremer Wurf:** nur mit einem wirklich passenden Tag möglich, sonst gibt es nur eine Ahnung. Das Ergebnis braucht Macht 3 oder mehr, Konsequenzen haben Stufe 3."]},
  {h: "Zustände werden zu Status", l: ["Household-Zustände werden zu Status mit Stufe: **Krank** wird {krank-2}, **Verängstigt** wird {verängstigt-2}, **Verletzt** wird {verwundet-2}.", "Kämpfe, die „mit einer Reaktionsrunde beginnen“, starten damit, dass die Challenge sofort eine Bedrohung ausspielt, bevor die Helden handeln können.", "Ein erweiterter Wurf auf aufeinanderfolgende Erfolge wird zu einem Limit auf der Challenge (zum Beispiel **ENTKOMMEN 3**), das die Helden mit mehreren Würfen füllen."]},
  {h: "Geld und Gegenstände", l: ["Münzen aus dem Buch werden zu Story-Tags: Gustavs goldene Uhr ist {Offiziersuhr}, eine Geldstrafe streicht einen Tag wie {Reisekasse} oder gibt {knapp bei Kasse-2}.", "Beschlagnahmte Waffen streichen den entsprechenden Tag, bis die Helden sie zurückholen."]}
 ],
 tipps: [
  "Gib Gustav und Juliette in der ersten Szene viel Raum. Je sympathischer und lustiger sie wirken, desto härter trifft der Verrat.",
  "Lass ihre wahre Natur durch Kleinigkeiten durchschimmern: die Offiziersuhr, die gefälschten Juwelen, Gustav, der keine erste Wache will. Aufmerksame Spieler:innen sollen sich hinterher sagen können: Das hätten wir merken können.",
  "Gelingt es den Helden, den Diebstahl im Lager zu verhindern, kämpfen sie dort gegen das Paar. Danach führt Gustavs Karte trotzdem zur Lichtung, und die Szenen ab „Die Lichtung und die Inbetweens“ gelten wie geschrieben.",
  "Die Gemeine Spinne ist für Figuren am Anfang ihrer Reise sehr gefährlich. Sag das deinen Spieler:innen ruhig offen: Weglaufen ist in diesem Abenteuer eine gute Wahl.",
  "Am Ende steht die Frage, ob Humphrey sein Wort gehalten hat. Spiel diesen Moment aus, er verbindet die Gruppe für das nächste Kapitel."
 ],
 helden: [
  {id: "gwen", name: "Gwen Summers", rolle: "Bibliothekarin, Boggart", themen: [
   {art: "Herkunft", name: "Gelehrte von Wallford", tags: ["Bibliothekarin", "unfehlbares Gedächtnis", "Handschriften entziffern", "Archivwissen"], schw: "besessen von Argos Rätsel", quest: "Das Geheimnis von Argos Tagebuch lüften"},
   {art: "Abenteuer", name: "Forscherdrang", tags: ["Karten und Codes lesen", "Kenntnis der Contracts", "spricht Fae"], schw: "reiseunerfahren", quest: "Die Seite heil nach Chesterfield by-the-fire bringen"},
   {art: "Größe", name: "Hüterin der Seite", tags: ["Wachsseite", "zäher Wille", "versteckte Waffe ohne Schein"], schw: "vertraut zu schnell Fremden mit Wissen", quest: "Alle Seiten des Tagebuchs finden"}]},
  {id: "humphrey", name: "Humphrey Lockwood", rolle: "Jäger und Führer, Boggart", themen: [
   {art: "Herkunft", name: "Einzelgänger-Jäger", tags: ["Fährtenleser", "Büchse", "Mäusekutsche", "Wetterkunde"], schw: "scheut Gesellschaft", quest: "Zur nächsten Jagd am Yule Tree aufbrechen"},
   {art: "Abenteuer", name: "Pfadfinder", tags: ["Lager aufschlagen", "Fallen erkennen", "Wache halten"], schw: "ungeduldig mit Gelehrten", quest: "Seine Reisenden sicher nach Chesterfield by-the-fire führen"},
   {art: "Größe", name: "Ehrenwort", tags: ["hält Versprechen", "Beschützer", "unerschütterlich"], schw: "an sein Wort gebunden", quest: "Das Versprechen an Gwen einlösen"}]},
  {id: "earnest", name: "Earnest Gilmore", rolle: "Ehrenmann und Fechter, Boggart", themen: [
   {art: "Herkunft", name: "Ehrenmann", tags: ["gute Manieren", "höfliche Rede", "kennt die feine Gesellschaft", "Schneid"], schw: "kann Unrecht nicht dulden", quest: "Rechtzeitig zu Samuels Abschlussfeier kommen"},
   {art: "Abenteuer", name: "Degenfechter", tags: ["Degen", "Parade", "kühler Kopf"], schw: "scheut unnötige Risiken", quest: "Sienna aus dem Ärger heraushalten"},
   {art: "Größe", name: "Jugendfreund", tags: ["kennt Siennas Tricks", "geduldig", "loyal"], schw: "belügt sich selbst über Sienna", quest: "Sienna auf den rechten Weg führen"}]},
  {id: "sienna", name: "Sienna Blackwell", rolle: "Gaunerin, Boggart", themen: [
   {art: "Herkunft", name: "Straßenkind von Wallford", tags: ["Taschendiebin", "Schlösser knacken", "kennt jedes Versteck", "flinke Zunge"], schw: "abgelaufene Papiere", quest: "Wallfords Banden hinter sich lassen"},
   {art: "Abenteuer", name: "Schlitzohr", tags: ["Streiche", "Lügen mit Charme", "Ablenkungsmanöver"], schw: "kann nicht stillhalten", quest: "Chesterfield by-the-fire erleben"},
   {art: "Größe", name: "Glückskind", tags: ["fällt auf die Füße", "sieht die Chance", "neugierig"], schw: "zieht Ärger an", quest: "Aus allem etwas Gutes herausholen"}]}
 ],
 szenen: [],
 challenges: {
  torwache: {name: "Die Torwache", dif: 1, typ: "Hindernis", desc: "Zwei Boggart-Soldaten der Hearth Army am Stadttor von Wallford. Sie prüfen Papiere und Waffenscheine, gelangweilt, aber nicht dumm.",
   limits: [["DURCHWINKEN", 2], ["ÜBERSEHEN", 2]],
   tags: ["Dienstvorschrift", "gelangweilt", "offen für ein Trinkgeld", "Musketen"],
   threats: [
    {n: "KONTROLLIEREN", f: "Öffnet die Kutschentüren und durchsucht das Gepäck", o: ["Findet eine schlecht versteckte Waffe (streicht den Tag)", "Entdeckt Siennas abgelaufene Papiere ({entlarvt-2})"]},
    {n: "STRAFEN", f: "Verhängt eine Geldbuße", o: ["Streicht {Reisekasse} oder gibt {knapp bei Kasse-2}", "Die Reise beginnt mit schlechter Laune ({verstimmt-1})"]},
    {n: "FESTHALTEN", f: "Wird misstrauisch und holt Verstärkung", o: ["Hält die Kutsche auf ({aufgehalten-2})", "Droht mit Verhaftung"]}
   ], quelle: "Szene „Die Tore von Wallford“. Bestechen kostet ein „Trinkgeld“ (einen Tag wie {Reisekasse} schwächen) und ist leichter als Überreden."},
  paar: {name: "Gustav und Juliette", dif: 2, typ: "Gejagte, Zermürber", desc: "Als frisch vermähltes Edelpaar getarnte Soldaten der Tristarred. Höflich, charmant, und bereit, für die Seite zu sterben. Sie kämpfen als eingespieltes Paar.",
   limits: [["ENTLARVEN", 3], ["BESIEGEN", 3], ["FESTSETZEN", 3]],
   tags: ["falsche Adelsfassade", "Offiziersuhr", "gefälschte Juwelen", "Halbschere", "fanatisch ergeben"],
   threats: [
    {n: "LÜGEN", f: "Tischt eine glaubhafte Geschichte auf", o: ["Die Helden glauben ihnen (eine Spur wird verwischt)", "Sät Misstrauen in der Gruppe ({misstrauisch-2})"]},
    {n: "STEHLEN", f: "Nutzt jede Unachtsamkeit", o: ["Stiehlt die Seite (Gwen verliert den Tag {Wachsseite})", "Stiehlt einen Gegenstand (streicht einen Tag)"]},
    {n: "ZUSTECHEN", f: "Gustav zieht die Halbschere, Juliette die Pistole", o: ["{verwundet-2}", "Hält einen Helden in Schach ({bedroht-2})"]},
    {n: "FLIEHEN", f: "Verschwindet in der Dunkelheit", o: ["Setzt sich ab: Das Limit FESTSETZEN lässt sich erst wieder angreifen, wenn die Helden die Verfolgung aufnehmen", "Nutzt den Schabenangriff zur Flucht"]}
   ], quelle: "Szenen „Das Lager“ und „Der Spur folgen“. Wird ENTLARVEN gefüllt, gestehen sie nichts, verlieren aber ihre Fassade."},
  schaben: {name: "Schabenrudel", dif: 1, typ: "Angreifer", desc: "Eine kleine Gruppe nachtaktiver Schaben, angelockt vom erloschenen Feuer und vom Geruch des Abendessens.",
   limits: [["VERSCHEUCHEN", 2], ["TÖTEN", 3]],
   tags: ["nachtaktiv", "zahlreich", "gierig", "lichtscheu"],
   threats: [
    {n: "SCHWÄRMEN", f: "Krabbelt über Zelte und Schlafende", o: ["{angewidert-2}", "{verwundet-1}"]},
    {n: "ANNAGEN", f: "Frisst Vorräte", o: ["Streicht {Vorräte} oder einen anderen Tag"]},
    {n: "CHAOS", f: "Wirbelt das Lager durcheinander", o: ["Gibt Gustav und Juliette die Gelegenheit zum Diebstahl"]}
   ], quelle: "Szene „Das Lager“, wenn das Feuer im Frost erlischt. Feuer und Licht geben den Helden gute Tags gegen sie."},
  spinne: {name: "Gemeine Spinne", dif: 3, typ: "Angreifer, Gejagte", desc: "Eine lauernde Jägerin auf einem Pilzhut, mit Spinnweben und zwei Beutebündeln. Für junge Helden sehr gefährlich.",
   limits: [["TÖTEN", 4], ["VERTREIBEN", 3], ["ENTKOMMEN", 3]],
   tags: ["Lauerjägerin", "klebrige Netze", "giftige Beißzangen", "springt vom Pilz"],
   threats: [
    {n: "NETZ", f: "Schleudert Fäden aus dem Hinterhalt", o: ["Verstrickt einen Helden ({verstrickt-3})", "Spannt ein Netz über den Fluchtweg (neuer Tag {versperrter Weg})"]},
    {n: "BISS", f: "Packt zu und spritzt Gift", o: ["{vergiftet-3}", "{geschwächt-2} und {verwundet-2}"]},
    {n: "SPRUNG", f: "Stürzt vom Pilzhut auf die Gruppe", o: ["{umgeworfen-2}", "Reißt jemanden von der Gruppe weg ({abgeschnitten-2})"]}
   ], quelle: "Szene „Der Spur folgen“. Wird ENTKOMMEN gefüllt, ist die Gruppe in Sicherheit; die Spinne verfolgt sie nicht weiter."},
  wachen: {name: "Tristarred-Wachen", dif: 2, typ: "Wächter, Angreifer", desc: "Fae-Soldaten, die paarweise durch die Tunnel patrouillieren. Sie tragen alte Uniformen des Household War, auf deren linker Schulter zwei der fünf Sterne abgeschnitten sind.",
   limits: [["ÜBERLISTEN", 3], ["BESIEGEN", 3], ["ALARM VERHINDERN", 2]],
   tags: ["sprechen nur Fae", "alte Uniformen", "Bajonette", "patrouillieren paarweise", "kennen jeden Gang"],
   threats: [
    {n: "ALARM", f: "Ruft die Kameraden herbei", o: ["Die Kürassiere im Studierzimmer legen einen Hinterhalt", "Alle Helden: {gejagt-2}"]},
    {n: "HIEB", f: "Schlägt mit Bajonett oder Kolben zu", o: ["{verwundet-2}", "Drängt einen Helden an die Wand ({in die Enge getrieben-2})"]},
    {n: "UMZINGELN", f: "Schneidet den Rückweg ab", o: ["Versperrt einen Tunnel (neuer Tag {abgeschnittener Rückweg})"]}
   ], quelle: "Szene „Die Lichtung und die Inbetweens“. Wer sich verirrt, wird unweigerlich entdeckt."},
  kuerassiere: {name: "Kürassiere", dif: 3, typ: "Wächter", desc: "Zwei Soldaten mit Schild, Speer und Kürass, die die Arbeiter im Studierzimmer antreiben.",
   limits: [["BESIEGEN", 3], ["ENTWAFFNEN", 3], ["ÜBERRUMPELN", 2]],
   tags: ["Kürasse", "Schilde", "Speere", "diszipliniert"],
   threats: [
    {n: "SCHILDWALL", f: "Hält den Eingang", o: ["Versperrt den Weg in den Raum (neuer Tag {Schildwall})", "Stößt einen Helden zurück ({umgeworfen-2})"]},
    {n: "SPEER", f: "Sticht über die Schilde", o: ["{verwundet-3}", "Zwingt zum Rückzug in den Tunnel"]},
    {n: "HINTERHALT", f: "Lauert beiderseits der Tür, wenn Alarm geschlagen wurde", o: ["Greift sofort an, bevor die Helden handeln", "{überrumpelt-2}"]}
   ], quelle: "Szene „Das unterirdische Studierzimmer“. Wird ÜBERRUMPELN zuerst gefüllt, sind beide Kürassiere {überrascht-3}."},
  juliette: {name: "Juliette", dif: 2, typ: "Gejagte", desc: "Offizierin der Great Imperial Army in alter Uniform, die am Schreibtisch die Seite kopiert. Sie stirbt lieber, als ihre Sache zu verraten.",
   limits: [["ENTWAFFNEN", 2], ["ZUM REDEN BRINGEN", 4]],
   tags: ["fanatisch treu", "Pistole", "Offiziersuniform", "mit dem Rücken zur Wand"],
   threats: [
    {n: "LETZTER AUSWEG", f: "Richtet die Pistole gegen sich selbst", o: ["Das Verhör ist nicht mehr möglich", "Der Schuss löst den Einsturz aus"]},
    {n: "SCHIESSEN", f: "Feuert auf die Angreifer", o: ["{verwundet-2}", "Ein Querschläger trifft die Wand und löst den Einsturz aus"]},
    {n: "VERACHTUNG", f: "Spuckt den Helden ihre Überzeugung entgegen", o: ["{eingeschüchtert-1}", "Verrät dabei mehr, als sie will (ein Hinweis)"]}
   ], quelle: "Szene „Das unterirdische Studierzimmer“. Ohne ENTWAFFNEN spielt die Spielleitung LETZTER AUSWEG, sobald ZUM REDEN BRINGEN 2 erreicht."},
  hundertfuesser: {name: "Riesiger Sporn-Hundertfüßer", dif: 4, typ: "Angreifer, Gefahr", desc: "Ein riesiges Wesen, das aus der eingestürzten Wand bricht. Schwarze, glänzende Beine ohne Ende. Gegen ihn hilft nur Flucht.",
   limits: [["FALLTÜR ERREICHEN", 4], ["AUFHALTEN", 4], ["TÖTEN", 6]],
   tags: ["gigantisch", "giftige Sporne", "bricht durch Wände", "unersättlich"],
   threats: [
    {n: "ZERMALMEN", f: "Wirft sich auf alles in Reichweite", o: ["{verwundet-3}", "{verschüttet-3}"]},
    {n: "SPORN", f: "Sticht mit giftigen Spornen", o: ["{vergiftet-3}", "{gelähmt-2}"]},
    {n: "EINSTURZ", f: "Bringt die Decke zum Einsturz", o: ["Versperrt einen Gang (neuer Tag {Geröll})", "Alle Helden: {in Panik-2}"]},
    {n: "VERSCHLINGEN", f: "Packt das nächste Opfer", o: ["Verschlingt Juliette oder eine Wache", "Packt einen Helden ({gepackt-3})"]}
   ], quelle: "Szene „Der Einsturz“. Wird FALLTÜR ERREICHEN gefüllt, bleibt das Tier im senkrechten Schacht stecken und begräbt das Versteck."}
 }
};
})();
