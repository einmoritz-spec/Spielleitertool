BC_EP["lt5"] = {
  id:"lt5", t:"Der Zugraub", lab:"LuckTales · Folge 5", c:"#7a1b2a",
  b:"bc_z1", s:125, img:"lt/lt5-zug",
  intro:[
    {t:"box", h:"Zum Spielen dieser Folge brauchst du", p:["Stock · Anhänger · Professor · Rivale · Handlanger · Zirkusfreak"]},
    {t:"box", h:"Enthaltener Kontext", p:["Das Auge des Ra (siehe Ende der Folge)"]},
    {t:"n", p:["**THEMA – PALAST DES RIVALEN – INNEN/TAG**","Das gleichmäßige Geräusch schwerer Stiefel auf einem Korridor wird von der roten Tapete gedämpft. Ein {P:handlanger} bleibt vor einer Holztür stehen und zögert, bevor er sie öffnet. Dahinter liegt ein geräumiges Büro, dessen Wände mit kostbaren Kunstwerken bedeckt sind, eingerichtet mit leichten, bequemen Holzmöbeln. Ein Schreibtisch liegt hell im Licht, das durch ein Fenster fällt, und der {P:rivale} lehnt lässig daran, während er zu den Abenteurern spricht. Neben ihm liegt auf dem Schreibtisch ein {P:stock}."]},
    {t:"d", n:"RIVALE", p:"Danke, dass ihr mir so einen wertvollen Gegenstand gebracht habt. Schade, dass solche Dinge uns teuer zu stehen kommen. Ich mochte den {P:professor} schließlich sehr gern ..."}
  ],
  ctx:[
    {k:"epoche", l:"Epoche", v:"1999"},
    {k:"stock", l:"Stock", v:"Gehstock"},
    {k:"anhaenger", l:"Anhänger", v:"Anhänger"},
    {k:"professor", l:"Professor", v:"Professor Helsmore"},
    {k:"schatz", l:"Schatz", v:"Portal"},
    {k:"rivale", l:"Rivale", v:"Mr. Vordue"},
    {k:"handlanger", l:"Handlanger", v:"Sibirier"},
    {k:"zirkusfreak", l:"Zirkusfreak", v:"Zirkusfreak"}
  ],
  scenes:[
    {t:"Im Zug", short:"Im Zug", ort:"INNEN/NACHT", s:126, blocks:[
      {t:"n", p:["*Zwölf Stunden früher*","Der Güterwaggon ist voller Kisten, die allesamt sanft schaukeln, während die Schienen rattern. Der Boden ist mit Sägespänen und Stroh bedeckt.","Die Abenteurer sitzen um eine Kiste, alle Köpfe dem {P:professor} zugewandt, der sich wegen eines kranken Beins auf einen {P:stock} stützt. In der Hand hält er einen {P:anhaenger}."]},
      {t:"d", n:"PROFESSOR", p:"Im Museum der Hauptstadt finden wir die Karte. Dann haben wir endlich alles, was wir brauchen, um den {P:schatz} zu finden, liebe Freunde."},
      {t:"n", p:["Der {P:professor} legt den {P:anhaenger} zurück in eine Kiste, die mit mehreren dunkleren Flecken markiert ist, den Brandzeichen all ihrer Besitzer. Die frischeste Farbe zeigt die Initialen des {P:rivale}."]},
      {t:"d", n:"PROFESSOR", p:"Ich hoffe, dieser Gauner von {P:rivale} versteht, dass dies eine persönliche Sache ist."},
      {t:"n", p:["Vom Kopf des Zuges her gellt ein lauter Pfiff durch die Luft."]},
      {t:"d", n:"PROFESSOR", p:"Wir sind gleich in der Stadt! Hoffentlich wartet unsere Fahrgelegenheit in die Hauptstadt schon."},
      {t:"n", p:["Kaum ist der Satz zu Ende, ertönen vom Dach eine Reihe lauter Schläge, das Geräusch eines Hammers. Dann öffnet sich eine Luke. Der {P:zirkusfreak}, ein Mensch von erstaunlicher Gewandtheit, stürzt sich über die Kiste und versucht, sie an einem Seil in der Hand festzubinden."]},
      {t:"d", n:"PROFESSOR", p:"Haltet sie auf! Lasst nicht zu, dass sie sie mitnehmen!"},
      {t:"n", p:["Doch es ist zu spät: Der {P:zirkusfreak} hat das Seil bereits an der Kiste festgebunden, und sie wird durch das Dach hochgezogen. Aus der Luke regnet Benzin herab. Jeder Versuch, sie aufzuhalten {K:H|Kritische Herausforderung}, kostet nur etwas Zeit, und jeder Abenteurer, der dabei scheitert, fühlt sich BESCHÄMT.","Als die Kiste halb oben ist, fliegen ein paar Schüsse durch die Luke auf das Benzin und das Stroh am Boden {K:G|Kritische Gefahr: Abenteurer, die die vorherige Herausforderung geschafft haben, haben einen Vorteil auf den Wurf}.","Einer der Schüsse trifft den {P:professor} an der Schulter, nahe dem Hals."]},
      {t:"d", n:"PROFESSOR", p:"Los! Holt den {P:anhaenger}! Kümmert euch nicht um mich! Ihr müsst ihn zum Professor bringen ..."},
      {t:"n", p:["Der Waggon steht in Flammen, und den Abenteurern bleibt die Luft weg. Der {P:professor} liegt auf einer Kiste, kurz davor, das Bewusstsein zu verlieren, und versucht mit einer Hand, seinen {P:stock} zu erreichen.","Die Abenteurer müssen die gestohlene Kiste erreichen, doch zuvor müssen sie entscheiden, ob sie den {P:professor} retten. Er hat einen sehr gefährlichen Treffer erlitten, und obendrein beginnt der Waggon schnell zu brennen. Um den {P:professor} bewegen zu können, müssen die Abenteurer zuerst irgendwie die Blutung stoppen {K:H|Kritische Herausforderung}. Dann müssen sie den Waggon verlassen, bevor die Flammen sie erreichen {K:G|Kritische Gefahr + 1 kritische Gefahr für die zwei Abenteurer, die den Professor tragen}.","Nachdem sie sich hinausgekämpft haben, können die Abenteurer den {P:professor} in einem sicheren Waggon zurücklassen und die Verfolgung des {P:zirkusfreak} aufnehmen."]}
    ]},
    {t:"Außerhalb des Zuges", short:"Außerhalb", ort:"AUSSEN/NACHT", s:128, blocks:[
      {t:"n", p:["Einundzwanzig Güterwaggons rollen durch ein halbwüstenartiges Tal, auf einer Schienenstrecke zu einer kleinen Stadt. Die Scheinwerfer dreier Autos nähern sich dem Zug. Der Zug ist wie eine lange Schlange mit leicht gekrümmtem Rücken. Und auf diesem Rücken jagen und bekämpfen sich kleine Gestalten. Der orangefarbene Schein von Flammen beginnt aus einem der Waggons zu dringen."]},
      {t:"d", n:"HANDLANGER", p:"Lauf, {P:zirkusfreak}, oder ich peitsche dich eigenhändig aus, wenn wir zurück in der Basis sind!"},
      {t:"n", p:["Sieben Gestalten rennen über den Rücken der Schlange zum Kopf hin. Der {P:handlanger} führt die Reihe an und brüllt Befehle. Hinter ihm tragen zwei Leute eine Kiste mit den Initialen des {P:rivale}, und vier weitere halten wie Schilde um sie herum Wache. Die kleinste Gestalt, der {P:zirkusfreak}, fällt zurück.","Die Abenteurer sind der Gruppe auf den Fersen und können das Feuer eröffnen und ein Feuergefecht beginnen {K:F|2 kritische Feinde}. Die Autos flankieren den Zug und fahren neben die sieben Gestalten, die der {P:handlanger} anführt."]},
      {t:"d", n:"HANDLANGER", p:"Los, los, du {P:zirkusfreak}!", r:"zu den anderen"},
      {t:"d", n:"HANDLANGER", p:"Ihr da, werft die Kiste auf das Auto! Ich habe mir nicht die ganze Mühe gemacht, nur um sie unter dem Zug zerquetscht zu sehen!"},
      {t:"n", p:["Die zwei Leute mit der Kiste nehmen sie und springen vom Zug. Einem gelingt es, mit der Kiste auf der Ladefläche des Autos zu landen, doch der andere stolpert beim Sprung und landet zwischen Auto und Zug."]},
      {t:"d", n:"HANDLANGER", p:"Du Trottel! Ihr vier, kümmert euch um diese Plagegeister, bis der {P:zirkusfreak} da ist."},
      {t:"n", p:["Der {P:handlanger} bleibt auf dem Zug und wartet auf die anderen, bevor er auf das zweite dunkle Auto springt.","Währenddessen nähert sich das dritte Auto weit entfernt vom Geschehen dem Ende des Zuges, und es sieht aus, als wäre jemand zugestiegen.","Der {P:zirkusfreak} ist noch weit von den anderen entfernt, näher bei den Abenteurern.","Da nur der {P:handlanger} und der {P:zirkusfreak} wissen, wohin die Kiste gebracht wird, müssen die Abenteurer sich von nun an entscheiden, wen sie fassen wollen. Sie müssen ihn verhören, um zu erfahren, wer hinter dem ganzen Komplott steckt.","Die scheinbar einfachere Möglichkeit ist, den {P:zirkusfreak} zu fassen, der näher und auf den ersten Blick weniger einschüchternd ist {K:H|Kritische Herausforderung}. Sobald der {P:zirkusfreak} jedoch in Gefahr ist, gefasst zu werden, tritt der {P:handlanger} vor, um ihn zu verteidigen und die Abenteurer zu bekämpfen."]},
      {t:"d", n:"HANDLANGER", p:"Du {P:zirkusfreak}, sieh nur, was ich tun muss, um deinen knochigen Hintern zu retten!"},
      {t:"n", p:["Dank der Ablenkung hat der {P:zirkusfreak} die Gelegenheit, auf eines der Autos zu springen, während der {P:handlanger} für ihn kämpft {K:F|3 kritische Feinde}. Die Dinge enden offenkundig genauso, wenn die Abenteurer sich auf den {P:handlanger} konzentrieren und den {P:zirkusfreak} ignorieren."]},
      {t:"d", n:"HANDLANGER", p:"Geh, ich komme nach, sobald ich mit denen fertig bin."},
      {t:"n", p:["Zwei Männer kommen hinter den Abenteurern heran: Sie sind vom dritten Auto aus auf den Zug gestiegen, und einer von ihnen hat den {P:stock} an sich genommen.","Nach seiner Niederlage ergibt sich der {P:handlanger} und bietet an, die Abenteurer zum Anwesen des {P:rivale} zu bringen oder ihnen wenigstens den Weg zu beschreiben.","Nach einer Pause sollten die Abenteurer den Anweisungen ihres Gegners folgen und so tun, als wären sie Gefangene, wenn sie eine Chance haben wollen, die Kiste und den {P:anhaenger} darin zu bekommen. Der {P:handlanger} verlangt von den Abenteurern, ihre Waffen abzugeben, doch die Vorsichtigeren unter ihnen {K:H|Kritische Herausforderung} erkennen leicht, dass dies eine Falle sein könnte, und sorgen dafür, dass mindestens einer von ihnen eine versteckte Pistole bei sich trägt.","Verlieren die Abenteurer den Kampf, bringt der {P:handlanger} sie unbewaffnet und gefesselt zum {P:rivale}."]}
    ]},
    {t:"Palast des Rivalen", short:"Palast", ort:"AUSSEN/TAG", s:130, blocks:[
      {t:"n", p:["Ein Stieglitz fliegt über das Gelände des Anwesens und gewährt einen Blick aus der Vogelperspektive auf die dunklen Autos, die vor den Gebäuden parken, und die uniformierten Leute, die in der Nähe rauchen und plaudern. Dann setzt sich der Stieglitz auf den Sims eines Fensters im ersten Stock.","Durch die Glasscheiben sieht man das geräumige Büro mit den Wänden voller kostbarer Kunstwerke und den leichten, bequemen Holzmöbeln. Ein Schreibtisch liegt hell im Licht, das durch ein Fenster fällt, und der perfekt gekleidete {P:rivale} lehnt lässig daran, während er zu den unbewaffneten Abenteurern spricht, die gerade hereingeführt wurden. Neben dem {P:rivale} liegt auf dem Schreibtisch ein {P:stock}."]},
      {t:"d", n:"RIVALE", p:"Danke, dass ihr mir so einen wertvollen Gegenstand gebracht habt.", r:"Er blickt zum Stock hinüber."},
      {t:"d", n:"RIVALE", p:"Schade, dass solche Dinge uns teuer zu stehen kommen. Ich mochte den {P:professor} schließlich sehr gern ..."},
      {t:"n", p:["Die Schläger verlassen den Raum und lassen den {P:rivale} mit den Abenteurern allein.","Der {P:rivale} geht zu der Kiste, die auf einen kleinen Tisch gestellt wurde. Er öffnet sie und nimmt den {P:anhaenger} heraus. Dann dreht er sich um und zeigt ihn den Abenteurern."]},
      {t:"d", n:"RIVALE", p:"Der {P:professor} hat euch dafür angeheuert.", r:"Er zeigt auf den Anhänger."},
      {t:"d", n:"RIVALE", p:"Wo ist die Karte? Im Museum der Hauptstadt, richtig? Dorthin wolltet ihr."},
      {t:"n", p:["Er wartet einen Augenblick, bevor er zur Tür geht."]},
      {t:"d", n:"RIVALE", p:"Lebt wohl, Abenteurer. Jemand wird sich gleich um euch kümmern. Ich werde meinen Ruhm einfordern."},
      {t:"n", p:["Er geht, und eine Gruppe von Schlägern mit Eisenstangen tritt an seiner Stelle ein {K:F|2 kritische Feinde}.","Nun müssen die Abenteurer das Anwesen des {P:rivale} verlassen und versuchen, zum Museum in der Hauptstadt zu gelangen, um die Karte als Erste zu bekommen.","Das Gebäude hat zwei Stockwerke, verbunden durch eine breite Treppe in der Mitte. Die Abenteurer befinden sich nun im ersten Stock, im Arbeitszimmer des {P:rivale}. Die Schläger haben den Befehl, die Abenteurer auf dem Anwesen festzuhalten, aber ohne sie zu töten. Dennoch ist klar, dass sie nicht kampflos aufgeben werden. Wenn nötig, setzen sie sich ohne mit der Wimper zu zucken über ihre Befehle hinweg. Jede Wachgruppe steht in regelmäßigem Funkkontakt mit den anderen, und wenn eine von ihnen bedroht wird, ruft sie Verstärkung von den anderen Schlägern, die schnell an ihrer Position zusammenlaufen.","Eine Gruppe von Schlägern patrouilliert regelmäßig in jedem Stockwerk des Anwesens {K:F|2 kritische Feinde}. An ihnen vorbeizuschleichen erfordert sowohl das richtige Timing als auch Heimlichkeit {K:H|1 kritische Herausforderung je Stockwerk}. Eine andere Möglichkeit ist, dass die Abenteurer direkt aus einem der Fenster zum Hof des Anwesens hinunterklettern {K:G|Kritische Gefahr}.","Draußen gibt es weitere Wachen, die in Paaren bewaffnet das Gelände abgehen {K:F|Kritischer Feind}. Fühlen sie sich bedroht, rufen die Schläger auf dem Gelände Verstärkung von den Leuten bei den Autos {K:F|+2 kritische Feinde}. Verlassen die Abenteurer das Haus durch das Erdgeschoss, können sie leicht an den Außenpatrouillen vorbeischleichen {K:H|Einfache Herausforderung}, springen sie jedoch aus dem ersten Stock, werden sie leichter gesehen {K:H|Kritische Herausforderung}.","Haben sie das Gelände verlassen, deckt der Wald mit seinem Unterholz ihre Flucht zu Fuß, aber die Abenteurer könnten auch beschließen, ein Auto zu stehlen, indem sie die Schläger ablenken oder sich ihnen offen stellen.","Ende der Folge."]}
    ]}
  ],
  outro:[
    {h:"Das Auge des Ra – Kontext zu „Der Zugraub“", s:132},
    {t:"cards", cols:2, items:[
      {k:"Epoche", h:"1999"},
      {k:"Stock", h:"Gehstock", p:"Ein Spazierstock mit Silbergriff. Er ist der Schlüssel, um ein Portal zu öffnen, das von einer uralten Zivilisation geschaffen wurde."},
      {k:"Anhänger", h:"Anhänger mit dem Auge des Ra", p:"Ein Anhänger mit dem eingravierten Auge des Ra, der in Wirklichkeit ein Kompass ist, der den Ort des Portals anzeigt. Er muss zur Sommersonnenwende ins direkte Sonnenlicht gelegt werden."},
      {k:"Professor", h:"Dr. Helsmore", p:"Ein sechzigjähriger Mann mit kraftvoller Statur, abgesehen von seinem kranken Bein. Er geht mit Hilfe eines Spazierstocks mit Silbergriff."},
      {k:"Schatz", h:"Das Portal", p:"Das Portal, geschaffen von einer uralten Zivilisation mit Verbindungen zum alten Ägypten. Einigen Quellen zufolge liegen jenseits des Portals unendliche Reichtümer."},
      {k:"Rivale", h:"Mr. Vordue"},
      {k:"Handlanger", h:"Der Sibirier", p:"Ein riesiger Schläger, der Befehle von Mr. Vordue entgegennimmt."},
      {k:"Zirkusfreak", h:"Zirkusfreak", p:"Ein winziger, geschmeidiger Zirkusartist, dessen Behändigkeit und Geschicklichkeit die menschlichen Grenzen zu überschreiten scheinen."}
    ]},
    {t:"prose", p:[
      "Nachdem es den Abenteurern mit Hilfe von Dr. Helsmore gelungen ist, Mr. Vordue die Kiste mit dem Anhänger des Auges des Ra zu stehlen, müssen sie nur noch das Museum in Capital City erreichen, die Karte finden, und dann haben sie alles, was sie brauchen, um das Portal zu erreichen. Jenseits davon, so sagen die Legenden, liegen alle Reichtümer der Welt.",
      "Gerade als sie sich sicher fühlen, greifen Vordues Schläger den Zug an, in dem sie reisen. Dr. Helsmore wird schwer verletzt, und die Schläger erbeuten nicht nur den Anhänger, sondern auch den Spazierstock des Professors, ein Schlüsselelement bei der Suche nach dem Schatz.",
      "Trotz ihrer Versuche und obwohl die Abenteurer den Sibirier erfolgreich besiegt haben, gelingt es den Dieben, mit ihrer Beute zum Greenscale-Palast zu entkommen, Mr. Vordues prunkvollem Herrenhaus.",
      "Nachdem sie vom besiegten Sibirier den Weg zum Anwesen erfahren haben, werden die Abenteurer gefangen genommen und in Mr. Vordues Büro geführt. Der Rivale beschließt, sie in seinem Büro festzuhalten, während er selbst zum Museum in Capital City fährt, um die Karte persönlich zu holen.",
      "Diese Karte wird den Ort verraten, an dem man den Anhänger zur Mittsommer-Mittagssonne platzieren muss, um den Weg zum Portal zu offenbaren. Der Ausbruch aus dem Gebäude ist nicht leicht, doch das Schlimmste für die Abenteurer wird die Erkenntnis sein, dass sie nun einen Schritt – und eine ganze Tagesreise – hinter ihrem Rivalen zurückliegen.",
      "Der einzige Trost ist, dass Dr. Helsmore seine Verletzungen vielleicht überlebt hat. Die Abenteurer müssen sich nun mit ihm treffen und den nächsten Schritt planen, um den Abstand zu ihrem Rivalen im Rennen um den Schatz zu verkleinern.",
      "Aber das ist das Thema einer anderen Folge."
    ]}
  ]
};
