/* Playwall › M (S. 240–244) */
var TA_PWT = window.TA_PWT || (window.TA_PWT = {});

TA_PWT.M1 = {t:"Magische Rüstung", s:240, b:[
 "Lebende Rüstung kann von Zielen nicht mehr entfernt werden, außer von anderen Agenten. Der Effekt „Bei jeder dritten {3}“ von Lebende Rüstung wird zu „Gib zusätzliche {3}en für Folgendes aus:“. Alle ursprünglichen Merkmale kosten eine {3}. Sie erhält diese zusätzlichen Merkmale, die jeweils zwei {3}en zur Aktivierung kosten.",
 {t:"sp", x:[
  [{t:"kette", x:["**Unsichtbar:** Du und das Ziel verschmelzt perfekt mit eurer Umgebung.", "**Marionettenspiel:** Du steuerst die Bewegungen des Ziels.", "**Erstickend:** Du kannst dem Ziel die gesamte Luft abschneiden."]}],
  [{t:"kette", x:["**Geräuschunterdrückend:** Das Ziel kann keine Geräusche machen außer denen, die du erlaubst.", "**Verkleidend:** Du und das Ziel seht genau aus wie eine andere Person oder ein anderes Wesen, das du kennst.", "**Geflügelt:** Du kannst Flügel auf dem Rücken steuern, damit das Ziel fliegen kann."]}]
 ]}
]};

TA_PWT.M2 = {t:"Lass mein Monster wachsen", s:240, b:[
 {t:"faehig", h:"Lass mein Monster wachsen", x:"Du kannst groß werden. Richtig groß. Brülle und würfle **Beharrlichkeit**.",
  erg:[
   ["ok", "**Bei Erfolg** wächst du auf eine Größe, die mit der Zahl der geworfenen {3}en erreichbar ist. Du behältst dieselben Proportionen und dasselbe allgemeine Aussehen, das du in normaler Größe hattest:\n– 1: pferdegroß\n– 2: raumgroß\n– {3}: gebäudegroß\n– 4: häuserblockgroß\n– 5: berggroß"],
   ["plus", "**Bei sechs oder mehr {3}en** kannst du außerdem dein Aussehen beliebig verändern."],
   ["nein", "**Bei Fehlschlag** wird dein Zugriff auf zusätzliche Materie jemand anderem zuteil. Etwas in der Nähe wird groß. Richtig groß."]
  ]}
]};

TA_PWT.M3 = {t:"Mach dich nützlich", s:241, b:[
 {t:"faehig", h:"Mach dich nützlich", x:"Berühre eine gewöhnliche Person oder einen gewöhnlichen Gegenstand und würfle **Dynamik**.",
  erg:[
   ["ok", "**Bei Erfolg** verwandelst du das Ziel in eine Waffe deiner Wahl. Ihre Einzelheiten ergeben sich wie folgt:\n**Bedrohung:** Die Waffe verursacht Schaden entsprechend der Zuneigung, die du für dieses Ziel empfandest, auf einer Skala von 1 (am wenigsten geschätzt) bis 7 (am meisten geschätzt).\n**Anzahl der Verwendungen:** Die Zahl der Verwendungen dieser Waffe richtet sich nach dem Alter des Ziels, auf einer Skala von 5 (niedrigstes Alter) bis 1 (höchstes Alter).\n**Spezialeffekte:** Ist das Ziel ein Mensch oder ein Tier, könnt du und der GM einen besonderen Effekt der Waffe festlegen, der zur Persönlichkeit oder zum Wesen des Ziels passt.\nJeder kann diese Waffe benutzen, wenn du sie ihm gibst (oder wenn er sie dir abnimmt)."],
   ["plus", "**Bei Triszendenz** kann die Waffe entweder dauerhaft werden, oder das Ziel kann nach Verbrauch ihrer Verwendungen in seine ursprüngliche Form zurückkehren (es erinnert sich nicht an seine Zeit als Waffe)."],
   ["nein", "**Bei Fehlschlag** wird das Ziel nicht verwandelt, aber wie oben gestärkt. Es weiß, was du versucht hast."]
  ]}
]};

TA_PWT.M4 = {t:"Gestrandet", s:241, b:[
 {t:"faehig", h:"Gestrandet", x:"Kunst ist ein Gefängnis, und du bist ihr neuester Wärter. Weise jemanden auf ein Kunstwerk hin und würfle **Subtilität**.",
  erg:[
   ["ok", "**Bei Erfolg** schickst du das Ziel in das Kunstwerk, und es wird ein Teil davon: eine zweite Figur in einem Ölporträt, eine neue Rolle in einem Film, ein Sänger auf einem Lied usw.\nDu zwängst es in das Format des Kunstwerks: Es bleibt in seinem Bild reglos, es hält sich im Film an sein Drehbuch, es liefert jedes Mal dieselbe Darbietung. Es erlebt die Zeit in dieser Gefangenschaft normal, altert aber nicht. Dieser Effekt endet, wenn du ihn beendest oder wenn du diese Fähigkeit erneut auf ein anderes Ziel anwendest.\nDie Geschichte des Werks bleibt erhalten: Jeder, der die Kunst kennt, kann erkennen, dass etwas anders ist."],
   ["plus", "**Bei jeder dritten {3}** darfst du ein weiteres Ziel in der Nähe in dasselbe Kunstwerk schicken."],
   ["nein", "**Bei Fehlschlag** wird es für immer in das Kunstwerk verbannt und kann nicht zurückkehren."]
  ],
  f:"Ich glaube, Menschen sollten Kunst schaffen …", a:[["Um sich mit anderen zu verbinden.", "T8"], ["Um ihre eigenen Probleme zu verarbeiten.", "R3"]]}
]};

TA_PWT.M5 = {t:"Maskerade", s:241, b:[
 "Wenn du für Dramaturg würfelst, können deine Masken statt des üblichen Erfolgs eigene Körper erschaffen und den Persönlichkeiten körperliche Gestalt geben, ohne an Schlafende gebunden zu sein. Außerdem kannst du ihnen das Aussehen einer beliebigen Person geben, der du begegnet bist *(Arlecchino sieht aus wie du, die Innamorati sehen aus wie zwei Sicherheitsleute, Capitano sieht aus wie der Präsident usw.)*, und sie bewegen sich durch die Welt und geben sich als diese Person aus. Sie geben ihr Bestes, können aber nicht gegen ihre Persönlichkeiten handeln.",
 "Ihre Masken kehren zu dir zurück, wenn du sie entlässt, wenn du das nächste Mal schläfst oder wenn du Dramaturg erneut einsetzt.",
 {t:"html", x:'<i class="pwm-fuss"></i>'},
 {t:"notiz", pos:"fuss", x:"wenn bei [[L11]] etwas Seltsames los wäre, würdest du es mir doch sagen, oder?"}
]};

TA_PWT.M6 = {t:"Verschmelzung", s:242, b:[
 {t:"faehig", h:"Verschmelzung", x:"Alles Fleisch ist mit deinem kompatibel. Verbinde dich mit einer anderen willigen Person und würfle **Empathie**.\nIst das Ziel ein Resonant, würfelt es ebenfalls auf Empathie und addiert seine {3}en (und sein Chaos) zu deinem Gesamtergebnis. Jede Anzahl von {3}en gilt weiterhin als Erfolg.",
  erg:[
   ["ok", "**Bei Erfolg** verschmelzt ihr beide. Du darfst so viele Gliedmaßen und Merkmale (etwa Augen) haben, wie die verbundenen Personen zusammen besitzen, oder Merkmale zu größeren verbinden. Die Verschmelzung wird durch Verhandlung zwischen den ursprünglichen Spielern der Lebensformen gesteuert, und jeder ernsthafte Dissens beendet den Effekt. Der Effekt kann auch jederzeit enden, wenn eine der beiden Parteien es für richtig hält. Sind beide Lebensformen Resonanten, dürfen sie die QS und Fähigkeiten des anderen frei nutzen."],
   ["plus", "**Bei Triszendenz** kann sich die Verschmelzung mit einem weiteren Ziel zu einer Kombination aus {3} Personen verbinden. Verschmelzen drei Agenten und erleben alle Triszendenz, erhaltet ihr **Perfekte Erzählkontrolle**. Beschreibt, was ihr erreicht, wenn euch nichts mehr zurückhält. Dann endet die Verschmelzung."],
   ["nein", "**Bei Fehlschlag** findet die Verschmelzung statt, aber die Kombination ist untrennbar, und eure individuellen Persönlichkeiten verschwinden in einem neuen Wesen mit unvorhersehbarer Persönlichkeit und unvorhersehbaren Zielen. Ihr gilt beide als tot, doch die Kombination lebt weiter. Der GM steuert sie."],
   ["plus", "**Gib zusätzliche {3}en für die folgenden Änderungen und Effekte aus:**\n**1:** Panoramische Augenverteilung: Nichts kann sich an dich heranschleichen oder dich überraschen.\n**1:** Sehr groß: Du bist sehr groß.\n**2:** Psychische Verbindung: Ihr könnt Erinnerungen, Gefühle und Gedanken verlustfrei miteinander teilen.\n**2:** Doppelfokus: Du kannst zwei Handlungen gleichzeitig ohne Probleme ausführen.\n**{3}:** Exponentielles Muskelwachstum: Ein einfacher Schlag oder Tritt von dir verursacht {3} Schaden.\n**{3}:** Qualitätsverschiebung: Wenn diese Verschmelzung vollständig ist, könnt ihr QS frei zwischen den verbundenen Personen tauschen.\n**{3}:** Normal: Du siehst normal aus. Entweder wie einer von euch oder wie eine Mischung aus euch beiden, die in einer gewöhnlichen Umgebung keine Aufmerksamkeit erregen würde.\n**7:** Fernwaffe: Die Kombination hat aus eurem verbundenen Fleisch oder aus einer übernatürlichen Verbindung eurer Geister eine mächtige Fernwaffe geschaffen. Du kannst allem, was du sehen kannst, {3} Schaden zufügen.\n**7:** Größer als das Leben: Wähle eine Fertigkeit (etwa eine Kunst, Wissenschaft, ein Handwerk oder eine körperliche Begabung), in der ihr zusammen die Besten der Welt seid. Solange eure Verschmelzung andauert, kann euch in dieser Fertigkeit niemand übertreffen.\n**14:** Unschlagbar: Du kannst in einem körperlichen Kampf gegen keinen Gegner und keine Zahl von Gegnern verlieren. Das heißt nicht, dass du immer gewinnen kannst, aber du kannst nicht verlieren."]
  ]},
 "Außerdem erhält Ich deck dich! diesen zusätzlichen Text:",
 {t:"faehig", h:"", x:"",
  erg:[["plus", "**Bei Triszendenz** kannst du die Wirkung „Bei Erfolg“ von Verschmelzung mit drei verfügbaren {3}en vor oder nach der Anwendung von Schaden aktivieren."]]},
 "Außerdem erhält Lebende Rüstung diesen zusätzlichen Text:",
 {t:"faehig", h:"", x:"",
  erg:[["plus", "**Bei sechs oder mehr {3}en** kannst du die Wirkung „Bei Erfolg“ von Verschmelzung mit drei verfügbaren {3}en jederzeit aktivieren, bis dieser Effekt endet."]]}
]};

TA_PWT.M7 = {t:"Imitator", s:242, b:[
 "Deine Beherrschung der eigenen Stimme erstreckt sich auf die Beherrschung aller Stimmen. Wenn du diese Fähigkeit erhältst, notiere dir die folgenden Schlüsselsätze:",
 {t:"sp", x:[
  [{t:"liste", x:["**Da kannst du nicht sitzen**", "**Echt so witzig**", "**Hosentaschen voller Sonnenschein**", "**Da war ich noch nie**", "**Meine Morgenroutine**", "**Archäologie**"]}],
  [{t:"liste", x:["**Beides ist in Ordnung**", "**Ich arbeite hier nicht**", "**Ich beantrage eine Rückerstattung**", "**Ein Haufen Murmeln**", "**Toyotathon**", "**Lustig, dass du fragst**"]}]
 ]},
 "Sobald du irgendein Wesen {3} dieser Schlüsselsätze hast sprechen hören, darfst du dessen Stimme für immer perfekt nachahmen, wenn du sprichst oder deine Anomalie-Fähigkeiten einsetzt.",
 {t:"faehig", h:"Imitator", x:"Hast du es eilig, kannst du, nachdem du jemanden einen einzigen Schlüsselsatz hast sprechen hören, auf **Aufmerksamkeit** würfeln.",
  erg:[
   ["ok", "**Bei Erfolg** darfst du das Ziel wie oben beschrieben nachahmen, aber nur bis zum Ende des laufenden Einsatzes."],
   ["plus", "**Bei Triszendenz** darfst du deiner Liste einen Schlüsselsatz hinzufügen. Er muss mindestens drei Wörter lang sein."],
   ["nein", "**Bei Fehlschlag** liegen sie einfach nicht in deiner Reichweite. Du kannst dieses Ziel niemals imitieren."]
  ]}
]};

TA_PWT.M8 = {t:"Gedächtnispalast", s:243, b:[
 {t:"faehig", h:"Gedächtnispalast", x:"Dein Geist hat sich durch fortgesetztes Umformen dauerhaft verändert. Hast du mindestens zehn Minuten an einem Ort verbracht, über beliebig viele Gespräche hinweg mit jemandem gesprochen oder einen Gegenstand bearbeitet, kannst du ihn bzw. sie perfekt als Teil eines zusammenhängenden Raumes vorstellen, den du gedanklich besuchen kannst. Schließe die Augen und würfle **Doppelzüngigkeit**.",
  erg:[
   ["ok", "**Bei Erfolg** kannst du gefahrlos in deinem Geist auf dieses Objekt, diese Person oder diesen Gegenstand zugreifen und sie nach Belieben manipulieren, befragen oder untersuchen. Sie verhalten sich echt wie sie selbst, kümmern sich aber nicht um ihren Aufenthaltsort oder ihre aktuelle Lage. Sie können nicht berührt oder körperlich beeinflusst werden. In dieser Zeit nimmst du den physischen Raum um deinen Körper nicht wahr."],
   ["plus", "**Bei sechs oder mehr {3}en** kannst du sogar über das hinaus manipulieren, befragen oder untersuchen, was du logischerweise wissen könntest. Die Person, die du dir vorgestellt hast, weiß Dinge, die sie wissen würde und von denen du nie gehört hast. Die verschlossene Kassette lässt sich öffnen und gibt ihren Inhalt preis. Die Türen des Raumes führen an Orte, an denen du nie warst, die du aber sehen kannst."],
   ["nein", "**Bei Fehlschlag** öffnen sich deine Augen nicht. Das ist nicht dein Palast. Das ist nicht dein Geist. Du bist nur ein Besucher. Der Herr des Hauses kehrt zurück, und du musst entkommen oder sterben."]
  ]}
]};

TA_PWT.M9 = {t:"Spiegel", s:243, b:[
 {t:"faehig", h:"Spiegel", x:"Zeichne mit dem Finger eine Form in die Luft und würfle **Doppelzüngigkeit**.",
  erg:[
   ["ok", "**Bei Erfolg** wird das Rechteck zu einem unstofflichen Spiegel. Seine Oberfläche spiegelt alles perfekt, und wer ihn durchschreitet, bewegt sich plötzlich den Weg zurück, den er gekommen ist. Durch die andere Seite des Spiegels kann man hindurchsehen und hindurchgehen, als gäbe es sie nicht."],
   ["plus", "**Für jede weitere {3}** wähle eines der Folgenden. Du darfst dieselbe Option mehrfach wählen:\n– Beide Seiten des Spiegels spiegeln\n– Verdopple die Größe des Spiegels\n– Wähle ein Ziel, das vom Spiegel nicht optisch gespiegelt wird\n– Wähle ein Ziel, das vom Spiegel nicht räumlich gespiegelt wird"],
   ["nein", "**Bei Fehlschlag** erschaffst du eine beständige, schwer zu zerstörende Öffnung zu einer Spiegelrealität, und etwas wird hindurchkommen. Vielleicht vieles."]
  ],
  f:"Ich entscheide, was ich tue …", a:[["Indem ich Trends folge.", "B6"], ["Indem ich alles ausprobiere.", "A8"]]}
]};

TA_PWT.M10 = {t:"Vermisst?", s:243, b:[
 {t:"faehig", h:"Vermisst?", x:"Du bist so unentrinnbar wie ein Schatten. Wenn etwas versucht, dich zu verlassen, dir auszuweichen oder dir zu entkommen, sage „Vermisst?“ und würfle **Beharrlichkeit**.",
  erg:[
   ["ok", "**Bei Erfolg** warst du die ganze Zeit schon an ihrem Ziel. Du wartest dort, wenn sie ankommen."],
   ["plus", "**Für jede weitere {3}** kann ein weiteres williges Ziel in der Nähe mit dir an den neuen Ort versetzt werden."],
   ["nein", "**Bei Fehlschlag** hast du dich in ihrem Ziel geirrt. Du erscheinst woanders. Das Ziel entkommt, und du hast keine Ahnung, wo es – und möglicherweise du – ist."]
  ],
  f:"Ich glaube, der schlimmste Feind jedes Menschen …", a:[["Ist er selbst.", "R1"], ["Bin ich.", "B7"]]}
]};

TA_PWT.M11 = {t:"Muskeldichte", s:243, b:[
 "Du darfst die Wirkung „Bei Erfolg“ von Einen Stern verschlucken ohne Würfeln aktivieren. Während du die Wirkung „Bei Erfolg“ von Einen Stern verschlucken nutzt, ist nichts zu schwer für dich zum Heben oder für die Oberfläche, auf der du stehst, zum Tragen.",
 "Außerdem erhält die Eigenschaft „Für jede weitere {3}“ von Einen Stern verschlucken die folgenden Optionen:",
 {t:"liste", x:[
  "Du darfst mit deiner Schwerkraft eine menschengroße Person oder einen Gegenstand, den du sehen kannst, zu dir ziehen.",
  "Du ziehst alle Luft in der Nähe zu dir; die Luft um dich wird so dicht wie Wasser.",
  "Du darfst alle Projektile, die abgefeuert werden, solange dieser Effekt aktiv ist, von ihrer Bahn ablenken und in einen engen Orbit um dich ziehen."
 ]}
]};

TA_PWT.M12 = {t:"Mein Meisterwerk", s:244, b:[
 "Wenn du Was ist das da drüben? einsetzt, kannst du jeden Gegenstand erschaffen, aus jedem Material und nach allen Vorgaben, die du dir vorstellen kannst, auch abstrakten *(„eine undurchdringliche Wand“ oder „das beste Eis“ usw.)* oder solchen, die auf Informationen beruhen, die du nicht hast *(ein Französisch-Englisch-Wörterbuch, ein Bauplan des Louvre, eine frisch gemalte Mona Lisa usw.)*. Auf diese Weise erschaffene Gegenstände sind auf eine Größe begrenzt, die du mühelos in beiden Händen halten kannst.",
 "Auf diese Weise eingesetzt, kann Was ist das da drüben? nur einen Gegenstand erschaffen und erhält den folgenden Text:",
 {t:"faehig", h:"", x:"",
  erg:[
   ["plus", "**Für jede weitere {3}** steigt die Größenbeschränkung:\n**1:** menschengroß\n**2:** pferdegroß\n**{3}:** raumgroß\n**4:** gebäudegroß\n**5+:** mehr. Verhandelbar je nach Zahl."],
   ["nein", "**Bei Fehlschlag** erschaffst du den Gegenstand, als wärst du erfolgreich gewesen. Diese Schöpfung ruft jedoch Abscheu und Protest hervor. Jeder, der sie sieht, wird sich dazu äußern müssen, und sie gelangt wahrscheinlich in den Nachrichtenzyklus als seltener Moment kultureller Einheit, in dem Menschen in ihrer Abneigung dagegen eine gemeinsame Basis finden. Das erzeugt eine große Menge Loser Enden. Außerdem leidest du unter Burnout, bis du erfolgreich etwas mit einer anderen Anomalie-Fähigkeit erschaffst."]
  ]}
]};
