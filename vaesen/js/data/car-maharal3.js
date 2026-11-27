/* Mythic Carpathia – „Das Geheimnis des Maharal“, Teil 3: Konfrontation, Nachspiel, Figuren, Wesen, Handouts (Buch S. 117–126, 134–135). */
(function(){
var M = VAE_MYS.maharal;
function F(n, rolle, zitat, p, img, x, a, f, z, ausr, hier){ return {n:n, rolle:rolle, zitat:zitat, p:p, img:img, x:x, a:a, f:f, z:z, ausr:ausr, hier:hier}; }

M.kf = {p:126,
 einleitung:[
  "Der aktive Anti-Golem ist tagsüber nur in seinem Versteck zu finden. Nachts bewegt er sich durch die Tunnel, die zum Fluss führen, und sucht geeigneten Flussschlick, um seine Masse zu vergrößern und Schäden zu beheben. Dringen die Spielercharaktere in sein Versteck ein, zerstören sie auch seinen Schutzzauber – der Anti-Golem erwacht und beginnt, jeden zu töten, dem er begegnet, bis er gestoppt wird. Der Anti-Golem kann auf mehrere Weisen gestoppt werden:"],
 wege:[
  {t:"Den Zauber ändern", x:[
   "Durch Ändern des Zaubers auf seiner Stirn oder Entfernen der Beschwörung in seinem Mund (siehe den Kasten auf S. 124). Das ist eine volle Aktion und erfordert eine Probe auf BEWEGLICHKEIT, ist aber nur möglich, wenn der Anti-Golem von einer anderen Figur festgehalten wird, die eine Probe auf KRAFT gegen seine Macht bestehen muss, was sehr schwierig sein wird (mehrere Figuren können helfen)."]},
  {t:"Mit Gewalt besiegen", x:[
   "Ihn mit Gewalt zu besiegen, erfordert angesichts seiner hohen Panzerung massive Gewalt oder Sprengstoff."]},
  {t:"Das Versteck niederbrennen", x:[
   "Sein Versteck (und damit die Kirche) niederzubrennen, bringt den Brandstiftern keinen Ruhm. Der Golem hat dann keinen Raum, sich zu regenerieren, und wird jeden Tag schwächer, bis er sich innerhalb von etwa einer Woche auflöst."]}
 ]};

M.ns = {p:126, t:"Nachspiel", x:[
 "Das schnelle Lösen dieses Mysteriums beendet die Morde des Anti-Golems und beruhigt schließlich die Gemeinschaft. Deaktivieren die Spielercharaktere den Anti-Golem und beseitigen seine Überreste, haben ihre Taten keine negativen Folgen.",
 "Entscheiden sie sich für ein gefährlicheres Vorgehen, etwa mit Feuer oder Sprengstoff, machen sie sich womöglich die örtliche katholische Kirche und wahrscheinlich auch die Stadtverwaltung zum Feind. Der Nachweis, dass es nötig war, weitere Gewalt zu verhindern, beruhigt die Lage … ein wenig. Wird alles friedlich gelöst, ist Otto Grabeck den Spielercharakteren dankbar. Auch die jüdische Gemeinde ist womöglich dankbar, je nachdem, wie sie den Fall bewältigt haben.",
 "Schließlich können die Spielercharaktere in ihr Hauptquartier zurückkehren und ihre wohlverdienten Erfahrungspunkte erhalten."
]};

M.figOrder = ["grabeck","ebersbach","soukup","tereza","isaaman","jirasek","antigolem"];
M.figs = {
 grabeck: F("Otto Grabeck","Polizeichef","",117,"maharal/mh_grabeck",
  "Der Chef der Stadtpolizei ist ein Mann mittleren Alters, kahlköpfig mit einem großen Schnurrbart. Er ist von Herkunft Deutscher und aus Überzeugung Atheist. Er glaubt nicht an übernatürliche Erscheinungen, wendet sich aber an die Pravda-Gesellschaft, weil seine „Polizistennase“ ihm sagt, dass der Fall mit Religion und Volkskunde zu tun hat. Er ist nicht bereit, Unterstützung für den Kampf gegen „magische Geschöpfe“ abzustellen.",
  [4,3,4,3],[["Beweglichkeit",3],["Nahkampf",2],["Nachforschung",3]],[2,2],"Schlagstock, Handschellen","Die Städtische Polizeigarnison"),
 ebersbach: F("Bernd Ebersbach","Oberst","",119,"maharal/mh_ebersbach",
  "Der Kommandeur der Stadtgarnison ist Oberst der Kaiserlichen Armee, 48 Jahre alt. Er ist ein brutaler Mann, der seine Pflicht sehr ernst nimmt – er wird vor nichts zurückschrecken, um die Unruhen auf Prags Straßen zu ersticken.",
  [5,3,4,2],[["Nahkampf",3],["Fernkampf",3],["Inspiration",2]],[1,3],"Revolver, Säbel","Die Städtische Polizeigarnison"),
 soukup: F("David Soukup","Stadtarzt","",119,"maharal/mh_soukup",
  "Die Städtische Leichenhalle hat keinen festangestellten Mitarbeiter, der für Sektionen und die Feststellung von Todesursachen zuständig ist. Soukup, ein ausgebildeter Chirurg, übernimmt die Rolle des Stadtarztes, der vor Gericht und in Verwaltungsfällen Gutachten abgibt und die Städtische Leichenhalle leitet, wobei er andere Todesursachen als Erfrieren, Verhungern oder Ertrinken in der Moldau feststellt. Er vergleicht die neuen rätselhaften Opfer mit Opfern schwerer Industrieunfälle – ihre Verletzungen ähneln denen, die entstehen, wenn man von einer mehrere hundert Kilogramm schweren Maschine getroffen wird. Als Wissenschaftler glaubt der Arzt nicht an „übernatürliche“ Kräfte, ist aber bereit, den Spielercharakteren alle Informationen über die Opfer zu geben.",
  [2,5,5,2],[["Heilkunde",3],["Wachsamkeit",2]],[3,2],"Skalpell, nicht mehr ganz weißer Kittel","Die Städtische Leichenhalle"),
 tereza: F("Tereza Faflikova","Sekretärin","",121,"",
  "Tereza arbeitet als Sekretärin in den Büros des Palais Žofín. Sie ist Tschechin, gebildet und steht mit beiden Füßen auf dem Boden.",
  [2,3,5,4],[["Gelehrsamkeit",2],["Wachsamkeit",2],["Beobachtung",3]],[1,1],"Stift, Handtasche","Der neue Tatort"),
 isaaman: F("Gedalya Isaaman","Oberrabbiner","",123,"maharal/mh_isaaman",
  "Dieser sehr alte Mann und orthodoxe Jude kennt die Legende vom Golem gut, bringt die gegenwärtigen Ereignisse aber zunächst nicht mit der Legende von vor drei Jahrhunderten in Verbindung. Ist eine Spielerfigur oder ein NSC in ihrer Begleitung jüdischer Herkunft und mit den Bräuchen der Gemeinde vertraut, ist der Rabbi hilfsbereit. Andernfalls erfordert es ernsthafte Überredung.",
  [1,2,5,4],[["Inspiration",3],["Gelehrsamkeit",5],["Beobachtung",3]],[4,1],"Altes Buch, Füllfederhalter","Die Staronova-Synagoge"),
 jirasek: F("Vojtěch Jirásek","Pfarrer","",125,"maharal/mh_jirasek",
  "Der Priester der Kirche Maria Schnee ist ein älterer Mann und seit fast 40 Jahren römisch-katholischer Priester.",
  [1,2,3,4],[["Inspiration",2],["Beobachtung",3],["Manipulation",2]],[3,1],"Bibel, großes Holzkreuz","Die Kirche Maria Schnee"),
 antigolem: F("Der Anti-Golem","Von Jan Černý erschaffen","",125,"",
  "Der von Jan Černý erschaffene Anti-Golem hat dieselben Eigenschaften wie ein normaler Golem, wie auf S. 45 beschrieben. Er hat einen Wert für Körperkontrolle von 6.",
  null,[],null,"","Die Kirche Maria Schnee")
};
M.figs.antigolem.wesen = true;

M.wesen = {n:"Der Anti-Golem", p:45, img:"car/car_w_golem",
 x:"Der Anti-Golem hat die Werte eines Golems (S. 45) mit Körperkontrolle 6.",
 w:[12,6,4,1,"1/1"],
 kraefte:["Verzauberung","Kann unsichtbar werden.","Beunruhigende Präsenz: Kann Geister herbeirufen und Untote erwecken.","Lehmpanzer: Schutz 12. Die Panzerwirkung entfällt, wenn der Golem mit Wasser übergossen oder durch Feuer brüchig gemacht wird."],
 fluch:[],
 zustaende:["Verwirrt","Beharrlich −1 (verfolgt weiter seine Aufgabe)","Verärgert +1 (greift die an, die ihn ablenken)","Verheerend +2 (zerbricht alles um sich herum)","Beschädigt −2 (setzt alles daran, seine Aufgabe zu erfüllen)","Gebrochen – zerfällt zu Staub, doch ohne ein angemessenes Ritual ruft seine Magie weiter ruhelose Seelen herbei."],
 att:[["Hieb","2","0"]],
 note:"Körperkontrolle 6.",
 ritual:"Um den Anti-Golem zu deaktivieren, muss das lebensspendende Wort Emet (אמת, „Wahrheit“) auf der Stirn des Golems geändert werden, indem man das erste Zeichen auslöscht, sodass es zum Wort Met (מת, „Tod“) wird. Alternativ kann man das Wort „Untot“ nehmen und auf der Stirn des Golems in „Tot“ ändern."};

M.ho = [
 {id:"3a1", cls:"s3a", t:"Handout 3A", u:"Černýs Tagebuch · erste Seite", paper:"maharal/mh_ho_3a1", form:"tagebuch", x:"Die Notizen meines Vorfahren zu finden, war so belebend. Es könnte der Durchbruch sein, nach dem ich gesucht habe. Unsere Nation, wie alle slawischen Nationen, kann davon profitieren. Die Stimme der Unterdrückten wird endlich gehört werden. Ich kann nicht glauben, dass ich diese wunderbare Lösung so viele Jahre ganz nahe hatte. Ich muss sie weiter studieren, um zu verstehen, was für unsere Sache getan werden kann.<br><br>Es ist schwer. Ich kann nicht glauben, dass mein Vorfahr so niederträchtig war, diese Macht für so kleinliche Dinge zu nutzen. Es ist fast unglaublich. Aber meine Arbeit wird das berichtigen. Es wird eine großartige Schöpfung sein, die allen Menschen nützt. Sie wird dem größeren Wohl dienen, nicht nur den Juden oder den Tschechen, sondern allen, die zu lange unter dem Stiefel der Tyrannei lebten. Ich bin begierig, mein Werk zu vollenden.<br><br>Den richtigen Weg zu finden, ist komplizierter, als ich dachte. Ich brauchte"},
 {id:"3a2", cls:"s3a", t:"Handout 3A", u:"Černýs Tagebuch · zweite Seite", paper:"maharal/mh_ho_3a2", form:"tagebuch", x:"Hilfe, und wer wäre besser dafür geeignet als die Juden – die Schöpfer des ursprünglichen Geschöpfs? Ich fragte den neuen Rabbi der Spanischen Synagoge danach, aber er konnte mir nicht helfen. Nun, nicht direkt, aber sie verwiesen mich an Gedalya Isaaman, der an dem Ort wohnt, wo der Schöpfer des ursprünglichen Geschöpfs lebte! Ich ging zum Grab von Rabbi Judah Loew ben Bezalel, um um seinen Segen zu bitten.<br><br>Ich habe irgendwo einige meiner Notizen verloren, aber das ist jetzt nicht wichtig, denn ich stehe kurz vor einem Durchbruch. Ich habe alle Werke zu Rate gezogen und alles zweimal überprüft, und ich werde es heute Nacht zum Leben erwecken. Einige Änderungen waren nötig, damit es seinem Zweck besser entspricht, aber ich bin sicher, dass alles wie geplant funktionieren wird. Ich habe so viele Jahre gewartet. Ich kann nicht länger warten."}
];
})();
