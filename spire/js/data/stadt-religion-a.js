/* The Spire – Stadt: Domäne Religion, Teil 1 (Core S. 155–162): Kathedrale, Ministerium, Karmesinrote Wacht. */
window.SP_STADT = window.SP_STADT || {};
SP_STADT.religion = SP_STADT.religion || {t:"Religion", p:155};
SP_STADT.religion.distrikte = (SP_STADT.religion.distrikte || []).concat([
 {
  "id": "kathedrale",
  "t": "Die Kathedrale unserer Glorreichen Herrin",
  "en": "The Cathedral of Our Glorious Lady",
  "kurz": "Kathedrale",
  "p": 155,
  "bild": "kapitel/religion-S156",
  "verweise": [
   {
    "t": "Klasse: Lajhan",
    "p": 53,
    "ziel": "nach/klassen/lajhan"
   },
   {
    "t": "Das Ministerium unserer Verborgenen Herrin",
    "ziel": "stadt/religion/ministerium"
   }
  ],
  "abschnitte": [
   {
    "id": "einleitung",
    "t": null,
    "p": 155,
    "b": [
     "Richtig verehrt – wie in den meisten Drow-Gebieten – ist die Mondgöttin ein Wesen aus drei Teilen, das Damnou genannt wird. Die Facetten, die ihr Ganzes ausmachen, sind Limyé, das Licht, Lombre, das Dunkel, und Lekolé, der Schatten oder Blutmond. Diese drei Gottheiten umfassen die sogenannten sechs Dunkelelfen-Tugenden, und nach diesen Grundsätzen leben viele Dunkelelfen ihr Leben und bilden sie die Grundlage ihrer Moral.",
     "Doch die Anbetung Damnous ist in Spire auf Anordnung der herrschenden Aelfir verboten, und den Drow ist es nur gestattet, Limyé, Unserer Glorreichen Herrin, der hellen Seite des Mondes, die die Tugenden Zähigkeit und Gemeinschaft vertritt, Respekt zu zollen. Die anderen beiden Facetten anzubeten heißt, sich ein Todesurteil aufzuladen – und so bildet, da die alten Tempel für Lombre und Lekolé längst niedergerissen sind, die zerfallende, riesige Kathedrale unserer Glorreichen Herrin das Herz der Dunkelelfen-Nation in Spire."
    ]
   },
   {
    "id": "die-kathedrale",
    "t": "Die Kathedrale",
    "p": 155,
    "b": [
     "Die Kathedrale selbst erstreckt sich über viele Stadtblocks, und es gibt keinen klaren Anfang oder Ende der Struktur; wo sie einst stolz in der Mitte eines großen, von brennenden Feuerbecken erleuchteten Platzes stand, haben Generationen von Umbauten und Zweckentfremdungen die Ränder des Bauwerks verwischt. Schlafsäle gehen in Lagerräume über, Eierbrutstätten besiedeln Kirchenschiffe, und Armenhaus-Suppenküchen dampfen unter der verblassten Pracht gesprungener Buntglasfenster.",
     {
      "t": "schwarz",
      "h": "Die sechs Dunkelelfen-Tugenden",
      "b": [
       "Damnou ist die bekannteste der Dunkelelfen-Gottheiten, und es ist selten, eine Drow-Gemeinschaft zu finden, die ihr nicht zumindest Lippenbekenntnisse zollt – selbst die tierhaften Anhänger von Charnel in ihren heimgesuchten Nekropolen, weit entfernt von den Heimatnationen Ys und tatsächlich im Krieg mit dem Herzogtum Aliquam, unterhalten Schreine für sie neben ihren grob behauenen Altären aus rissigen und zernagten Knochen. Obwohl sie auf viele verschiedene Weisen angebetet wird, neigen die meisten Glaubensformen zu den sechs Tugenden der Dunkelelfen, von denen sie glauben, dass sie, wenn man sie verkörpert, ein gutes und frommes Leben ermöglichen.",
       {
        "t": "ul",
        "x": [
         "**Zähigkeit.** Halte durch, selbst wenn sich die Ereignisse und deine Feinde gegen dich verschwören.",
         "**Gemeinschaft.** Hilf anderen, die es brauchen, und heiße sie in deinem Heim willkommen.",
         "**Anmut.** Handle mit Präzision und enthülle nur, was du enthüllen willst.",
         "**Wachsamkeit.** Bleibe aufmerksam und informiert.",
         "**Weisheit.** Lerne aus den Lehren derer, die vor dir kamen, aber komm zu deinen eigenen Schlüssen.",
         "**Zorn.** Wenn du dich dem Blutvergießen verschreibst, tu es völlig und ohne Furcht."
        ]
       }
      ]
     },
     "In den Tiefen des Tempels, auf knarrenden Dielen und unter tropfenden Decken, liegt eine der gründlichsten Geschichtsdarstellungen der Dunkelelfen außerhalb der Heimatnationen oder Aliquams – Ries um Ries Papier, die Familienlinien verzeichnen, Wandteppiche von Ruhm und Tragödien und Karten der Länder der großen Herrscher der Heimatnationen, mit peinlicher Sorgfalt auf bröckelnden Putz gemalt. Die Dunkelelfen sind ein bedrohtes Volk, und die Anhänger von Limyé glauben, dass sie durch Zusammenhalt und Erinnerung überdauern werden.",
     "Zeremonien und Predigten werden ad hoc abgehalten, wann immer genügend Priester und/oder Gemeindemitglieder am selben Ort sind, aber der Großteil der Verehrung Unserer Glorreichen Herrin geschieht durch gute Werke – die Armen speisen, die Wehrlosen verteidigen und die Drow von Spire beschützen. Zu feine Kleider zu haben (oder, in manchen Sekten, mehr als einen Satz Kleider zu besitzen) gilt als Verschwendung, wenn so viele Drow hungern. Viele Priester wetteifern darum, das möglichst kargste Dasein zu führen, bevorzugen schlichten Zinn- und Holzschmuck, grob gewebte Roben und tätowieren sich ihre heiligen Texte auf die Haut, um nie fürchten zu müssen, sie zu verlieren."
    ]
   },
   {
    "id": "die-erhalter",
    "t": "Die Erhalter",
    "p": 157,
    "b": [
     "Die Kathedrale intakt zu halten war nicht leicht, besonders da die Aelfir versuchen, die Kirche still an Unbeliebtheit sterben zu lassen, damit sie vollständig durch das Sonnenpantheon ihrer Heimatländer ersetzt werden kann – und die Kirche hat schlicht nicht die Mittel, eine ordentliche Restaurierung zu finanzieren. Stattdessen befreien Banden von Priestern und Gemeindemitgliedern unter dem Namen Erhalter Baumaterial von Baustellen, aus Lagerhäusern und (wenn nötig) aus bestehenden Bauwerken, bewegen sich schnell und leise, während andere schlafen, und räumen über Nacht riesige Vorräte an Ziegeln und Zement leer.",
     "Jedes Bauwerk, das nicht die ikonischen Spinnen der Kirche von Limyé trägt, kann rasch abgebaut und tiefer auf dem Gelände der Kathedrale wieder zusammengesetzt werden: Die derzeitigen Büros der Maji-Lalin, der Aufseherin des Tempels, bestehen aus den Überresten eines Theaters, das es gewagt hatte, an den Grenzen zu eröffnen; die Betten im Hospital der L’od Nansan sind aus einer Pension in Ivory Row umfunktioniert; die verstärkten Tunnel, die zwischen den inneren Heiligtümern der Kirche verlaufen, sind Vermissian-Zugwaggons, auseinandergerissen und neu zusammengebaut, bis aufs blanke Metall abgezogen.",
     "Nahegelegene Baustoffhändler haben als Antwort auf die Diebstähle ihre Sicherheit aufgestockt, sodass sie und die Kirche in so etwas wie ein Wettrüsten eingetreten sind."
    ]
   },
   {
    "id": "hallows",
    "t": "Hallows",
    "p": 157,
    "b": [
     "Die Kirche von Limyé fördert die Verehrung von Hallows, oder Heiligen – sterblichen Individuen, die die Tugenden Unserer Glorreichen Herrin verkörpert haben, oft mit der Folge ihres vorzeitigen Todes durch die Hand der Obrigkeit. Angesichts der antiautoritären Natur mancher Hallows ist die offizielle Haltung der Aelfir, ihre Anbetung zu verbieten und alle Hallow-Schreine, die sie finden, abzubauen, aber die Anhänger von Limyé bauen sie trotzdem immer wieder – verstecken sie in Schränken, unter Dielen, auf Dachböden und hinter Möbeln."
    ]
   },
   {
    "id": "gegen-das-ministerium",
    "t": "Gegen das Ministerium",
    "p": 157,
    "b": [
     "Es gibt eine wachsende Bewegung innerhalb der Kathedrale, die meint, das Ministerium richte mehr Schaden als Nutzen an, indem es sich der Herrschaft der Aelfir widersetzt. Vielleicht, so ihre Überlegung, ist es besser, sich der Herrschaft der Hochelfen anzupassen und in ihre Gesellschaft einzutreten, mit Blick darauf, eines Tages als Gleiche angesehen zu werden.",
     "Das Ministerium betrachtet dies bestenfalls als Feigheit und schlimmstenfalls als Ketzerei; aber es ist eine beliebte Ansicht, besonders unter den ärmeren, verletzlicheren Mitgliedern der Gemeinde, die sich mehr darum sorgen, woher ihre nächste Mahlzeit kommt, als um die glorreiche Wiederauferstehung der Dunkelelfen-Rasse in ihrer verlorenen Hauptstadt. Es ist nicht ungewöhnlich, dass Angehörige der Kirche, statt Ministeriumsmitglieder vor den Behörden zu verstecken, sie als Schurken und Terroristen verraten, die die Zukunft der wenigen Gemeinschaft gefährden, die den Drow noch bleibt."
    ]
   }
  ]
 },
 {
  "id": "ministerium",
  "t": "Das Ministerium unserer Verborgenen Herrin",
  "en": "The Ministry of Our Hidden Mistress",
  "kurz": "Ministerium",
  "p": 157,
  "verweise": [
   {
    "t": "Dem Ministerium beitreten",
    "p": 73,
    "ziel": "nach/extra/minister"
   },
   {
    "t": "Die Kathedrale unserer Glorreichen Herrin",
    "ziel": "stadt/religion/kathedrale"
   }
  ],
  "abschnitte": [
   {
    "id": "einleitung",
    "t": null,
    "p": 157,
    "b": [
     "Die Drow werden sich nicht weiter von den Aelfir demütigen lassen; sie werden ränkeschmieden und intrigieren und den Willen der Aelfir unterwandern, bis sie wieder die Herrscher von Spire sind. Dies ist der Leitsatz des Ministeriums Unserer Verborgenen Herrin. Sie beten die verbotene Göttin Lombre an, die dunkle Seite des Mondes, und haben eine weitreichende Geheimgesellschaft gebildet, die sich der Aufgabe verschrieben hat, Spire ein für alle Mal von den grausamen Aelfir zu befreien. Sie haben sich tief unter dem bröckelnden Mauerwerk der Kathedrale unserer Glorreichen Herrin verborgen und halten seltsame, dunkle Zeremonien in vergessenen Kellern und modrigen Krypten ab. Jede Stufe der Einweihung im Ministerium bringt frische Offenbarungen und furchtbare, furchtbare Bürden mit sich.",
     "Minister, wie die Mitglieder dieser Sekte genannt werden, werden von ihren Vorgesetzten in Zellen angeworben, nach langer Beobachtung und einer zunehmend schwierigen und gefährlichen Reihe von Prüfungen. Niemand tritt dem Ministerium bei, ohne dafür etwas aufzugeben, oft auf Geheiß seiner Meister innerhalb der Organisation – die Zellenleiter im Ministerium müssen absolutes Vertrauen in ihre Schützlinge haben und darauf bauen, dass sie zum Wohl der Organisation handeln, wenn nicht für sich selbst, selbst unter immensem Druck.",
     "Minister, oder zumindest jene, die lange genug gelebt haben, um ein paar Jahre Erfahrung zu sammeln, begegnen ihrer Pflicht mit grimmiger Entschlossenheit. Ihr Kampf ist kein glorreicher, und viele ihrer Freunde und Bekannten würden sie bereitwillig für das Versprechen von Münzen, einer Bleibe oder besseren Berufsaussichten an die Aelfir verkaufen. Allein durch ihre Existenz gefährden sie das Leben aller um sich herum, und es ist schwer, einen Drow zu finden, der nicht unter einigen der brutalen Vergeltungsmaßnahmen gelitten hat, die die Aelfir an Ministern oder ihren Bekannten verüben, sobald ihre wahren Beweggründe aufgedeckt sind.",
     "Aber sie haben das Opfer ihres eigenen Lebens gebracht, und vielleicht des Lebens ihrer Freunde, um hoffentlich die Zukunft eines von Drow geführten Spire zu sichern – nicht durch militärische Macht oder Sanktionen, wie sie es einst taten, damals, bevor ihre Rasse zersplittert war und an den Nähten zerbröckelte, sondern durch Heimlichkeit, Anmut, Unterwanderung und Desinformation.",
     "Ein dunkler Mond geht auf, und mit ihm das Ministerium Unserer Verborgenen Herrin; und die Aelfir sollten zu allen Göttern beten, die ihnen teuer sind, um Vergebung, denn sie werden keine von der Hand der Drow finden.",
     "Weitere Einzelheiten zu den Fortschritten, die die Anbetung Unserer Verborgenen Herrin gewährt, findest du auf S. 73. Es wird davon ausgegangen, dass alle Charaktere in einem normalen Spire-Spiel Zugang zu diesen Fortschritten haben, da sie ihr Leben dem Dienst am Ministerium gewidmet haben.",
     {
      "t": "schwarz",
      "h": "Bemerkenswerte Hallows unserer Glorreichen Herrin",
      "b": [
       "Alle unten genannten Fortschritte sind mittlere Fortschritte und stehen der Klasse Lajhan oder jedem Charakter zur Verfügung, der sein Leben anderweitig dem Dienst an Limyé und ihren auserwählten Heiligen widmet.",
       "**Hallow Herzens-Atem-Stocken:** [[Hearts-Breath-Halting]] Ungewöhnlicherweise war dieser bekannte Hallow eine Aelfir, die ihr Lebenswerk der Aufrechterhaltung der Anbetung der traditionellen Dunkelelfen-Religion in Spire widmete. Es ist ihren Bemühungen (und ihrem Vermögen) zu verdanken, dass die Kathedrale überhaupt noch existiert, und der Jahrestag ihres Todes – sie wurde auf einem Scheiterhaufen oben auf Neuer Himmel verbrannt, nachdem sie wegen Aufruhr und Ketzerei vor Gericht gestanden hatte – ist ein Trauertag für die Gläubigen von Limyé.",
       "**Der Segen von Herzens-Atem-Stocken:** Markiere W3 Stress und verbringe zehn Minuten betend an einem Schrein für Herzens-Atem-Stocken. Wenn du für den folgenden Tag gegen einen Feind deiner Religion handelst, würfle mit Meisterschaft.",
       "**Hallow Dee:** ein Drow-Volksheld aus lange vergangener Zeit, die einen frommen und verwundeten Hauptmann zum Schrein von Bachoux im schattigen Aliquam trug, um eine Rede zu halten, die die Nation vor der Niederlage durch die Aelfir bewahrte. Die Verehrung von Dee ist verboten und beinhaltet, als Tribut an ihr Opfer lange Zeit ohne Ruhe oder Nahrung auszukommen.",
       "**Der Segen von Dee:** Einmal pro Tag, solange du an diesem Tag nicht gegessen oder Trost genommen hast, lösche allen markierten Stress in Blut.",
       "**Hallow Ambra:** eine Schreiberin, die das Deyès-Liv schrieb, den zentralen religiösen Text für Damnou-Anbeter; ein Drittel des Buches befindet sich noch in der Kathedrale, die anderen beiden sind verloren. Die Verehrung von Ambra erfolgt durch rituelle Kalligraphie, indem man geheiligte Abschriften dessen anfertigt, was vom Deyès-Liv übrig ist.",
       "**Der Segen von Ambra:** Markiere beim Erwachen 1 Stress in Silber und fertige bei Sonnenaufgang eine Seite wunderschönen Textes an, kopiert aus dem Deyès-Liv. Diese Textseite kann als Waffe (W8, Fernkampf, Einweg) gegen Wesen benutzt werden, die von dunklen Geistern besessen oder mit unheiliger Macht erfüllt sind.",
       "**Hallow Merik:** eine Sklavin im Dienst eines der bösartigen Herrscher der Stadtstaaten von Ys, die es wagte, sich gegen ihre Herren zur Wehr zu setzen, und nach Jahren des Missbrauchs nicht weniger als viermal ins Leben zurückkehrte, um ihre Gemeinschaft weiter zu unterstützen und ihren Mitsklaven eine Inspiration zu sein.",
       "**Der Segen von Merik:** Markiere W3 Stress in Verstand und bete vor einem Altar für Merik. Wenn du vor dem nächsten Sonnenaufgang sterben würdest, stirbst du nicht, sondern klammerst dich ans Leben und überdauerst deine Verletzungen."
      ]
     }
    ]
   },
   {
    "id": "zellenstruktur",
    "t": "Zellenstruktur",
    "p": 159,
    "b": [
     "Um Sicherheitslecks einzudämmen, besonders angesichts der geschickten Folterer der Hochelfen, haben die Drow das Ministerium als eine Reihe von Zellen aufgebaut, die einander möglicherweise nicht kennen. Jede Zelle berichtet an einen Magister, der für bis zu fünf oder sechs aktive Zellen (und die doppelte Zahl an Schläfern oder potenziellen Rekruten) zuständig sein wird, die in benachbarten Distrikten operieren. Der Magister wiederum berichtet an seine Vorgesetzten, die an ihre berichten, und schickt Informationen in einer Reihe sich immer enger ziehender Sicherheitskreise spiralförmig davon. Magister erhalten nicht gern schlechte Nachrichten und verweigern ihren Schützlingen oft die Mittel, sie außerhalb der regulären Berichte in sicherem Gebiet zu kontaktieren, damit sie nicht ihre Feinde direkt zu ihnen führen.",
     "Wenn ein Minister – denn so nennt die Bevölkerung die Feldagenten des Ministeriums – besonderes Geschick zeigt, wird er angesprochen und ihm wird die Chance angeboten, selbst Magister zu werden, eine Rolle, die wiederum mit einer Reihe zermürbender Prüfungen und Opfer einhergeht. Hat er Erfolg, wird er andere anwerben, so wie er einst angeworben wurde, und den Einfluss der Drow in ganz Spire ausbreiten.",
     "Zellen erhalten von ihren Meistern nicht viel Unterstützung, außer Informationen und Spuren, denen sie nachgehen können; Ausrüstung und Mittel sind schwer zu bekommen, und es wird allgemein angenommen, dass, wer auch immer die Anfrage gestellt hat, jemand Wichtigeres weiter oben in der Befehlskette sie dringender braucht als sie. Agenten werden ermutigt, Material aus eigener Initiative zu beschaffen, und müssen unter Umständen monatelang oder sogar jahrelang ohne direkten Kontakt zu einem Vorgesetzten operieren.",
     "Es ist nicht ganz klar, wer das Ministerium leitet, aber es gibt Gerüchte: ein abtrünniger Aelfir, der das Ganze aufgebaut hat, um gegen seine Feinde zuzuschlagen; eine Schar sich ständig wandelnder und verschiebender Meister, ein dunkler Gegensatz zum Rat, der Spire regiert; ein unsterblicher Drow, der gefallene König von Destera, der versucht, sein verlorenes Imperium aus Jahrhunderten vergangener Zeit wiederzuerrichten; oder Lombre selbst, in tausend Gesichter gekleidet, die die Drow in eine neue und wunderbare Zukunft führt."
    ]
   },
   {
    "id": "anwerbung",
    "t": "Anwerbung",
    "p": 159,
    "b": [
     "Die erste Voraussetzung für den Beitritt zum Ministerium ist schlicht, zu wissen, dass es existiert. Da die Aelfir die Anbetung Lombres unterdrücken und jeden Minister, den sie finden, als „Verräter“, „Ketzer“ oder „Betrüger“ brandmarken, während sie jede Erwähnung der Geheimgesellschaft selbst vermeiden, haben viele Drow – besonders solche, die neu in der Stadt sind oder aus etwas bequemeren Lebensverhältnissen als üblich stammen – noch nie vom Ministerium gehört oder halten es für eine Reihe von Märchen, die idealistische Idioten verbreiten.",
     "Selbst dann gibt es keine Haustür, an die man klopfen könnte, keinen Regionalvertreter in einem gemütlichen Büro, mit dem man plaudern könnte – und das Ministerium, das seine Agenten lieber eigenständig und initiativ sieht, wartet darauf, dass jemand es aufspürt, statt aktiv Fühler auszustrecken, um Agenten anzuwerben.",
     "Normalerweise läuft es so ab: Der potenzielle Rekrut, eine neugierige Seele, beginnt, seltsame Dinge um sich herum zu bemerken – geheime Handschläge, zwielichtige Blicke, verschwindende Vorräte oder Personen –, und er stochert in der Sache herum, oft unter großem Risiko für sich oder seine Bekannten. Die traurige Wahrheit ist, dass die meisten potenziellen Rekruten in das Chaos geraten, das den Aktionen des Ministeriums folgt, und verhaftet oder tot oder beides enden, eins nach dem anderen; oder aber sie melden die Minister selbst den Behörden und müssen zum Schweigen gebracht werden, bevor sie zu viele Informationen verbreiten.",
     "Doch eine Handvoll ist gut genug, die anfängliche Anwerbung zu überleben, hat die richtigen Absichten im Herzen, nimmt Kontakt zum Ministerium auf und erlangt die Aufmerksamkeit eines Magisters, der die zweite Stufe der Einweihung beginnt, die viele von ihnen wünschen lässt, sie hätten nie begonnen, in der Welt der Schatten herumzustochern.",
     {
      "t": "schwarz",
      "h": "Anmut",
      "b": [
       "Die Tugend der Anmut ist ein grundlegender Aspekt der Dunkelelfen-Gesellschaft und -Moral. Abgesehen von der Verehrung körperlicher und gesellschaftlicher Präzision ist das weitere Konzept der Anmut, nur das darzustellen, was andere sehen sollen, und im Einklang mit einer Vielzahl schwieriger Etikette-Kodizes zu handeln. Lügen, wie Menschen es kennen, kann als etwas Gutes angesehen werden – indem man den Kunstgriff der „Notlüge“, der harmlosen Unwahrheit, die Komplikationen glättet, auf ganze Beziehungen und Facetten der eigenen Persönlichkeit ausdehnt. Wahrheit ist etwas Fragmentarisches und Disparates, unmöglich streng zu definieren, und wird stattdessen durch ein Netz widersprüchlicher Standpunkte ersetzt, das ein tugendhafter Drow mühelos aufrechterhalten kann. Dies ist, mehr als alles andere, die reinste Form der Anmut.",
       "Es ist die Anmut, die von Unserer Verborgenen Herrin vertreten wird, oder Lombre, die sich in der Welt als die dunkle Seite des Mondes zeigt, der am Nachthimmel hängt. Wenn sie in der Kunst dargestellt wird oder ihre Anbeter in Träumen besucht, ist sie ein schlankgliedriger Drow mit vielen Gesichtern, jedes anders, die um ihren schattenhaften Umhang wechseln; sie spricht mit vollkommener Präzision und Voraussicht, nie ein Wort verschwendet, und sie ist unmöglich zu täuschen oder zu verderben."
      ]
     }
    ]
   },
   {
    "id": "einweihung",
    "t": "Einweihung",
    "p": 160,
    "b": [
     "So wie es sechs Tugenden gibt, die von den Drow von Spire als heilig betrachtet werden, gibt es sechs Herausforderungen, die jedem neuen Rekruten gestellt werden. Sie unterscheiden sich je nach Magister und sind in keiner Weise offiziell, aber die meisten Einweihungsriten ähneln zumindest grob den hier umrissenen.",
     "**Der Ritus der Zähigkeit:** Der Initiand wird tief unter den Tempel Unserer Verborgenen Herrin gebracht, der selbst unter der Kathedrale unserer Glorreichen Herrin liegt, und muss drei Tage ohne Vorräte oder Hilfe in den labyrinthischen Katakomben überleben, in denen der Gestank von Tod und alten Knochen schwer hängt.",
     "*Welcher Gedanke hielt dich am Leben, dort unten unter den Toten?*",
     "**Der Ritus des Zorns:** Dem Initianden wird gesagt, er solle handeln, wie sein Blut es bestimmt, und Rache für erlittenes Unrecht mit Gewalt nehmen; die Furcht vor den Drow verbreiten und seinen ungerechten Herren zeigen, dass der Blutmond noch scheint. Viele Magister ersetzen diesen Ritus durch einen Cocktail aus bewusstseinsverändernden Drogen, etwa dem berüchtigt schmutzigen Stimulans namens Dolch, um den Initianden dazu zu bringen, im Einklang mit seinen wahren Gefühlen zu handeln, was zu einer brutalen Nacht der Vergeltung führt, die – ganz zufällig – das Subjekt von seinem früheren Leben abschneiden kann.",
     "*Wen hast du verletzt, als du deinen Zorn gezeigt hast?*",
     "**Der Ritus der Anmut:** Der Initiand erhält Namen und Aufenthaltsort eines Ziels, das er über die Zeit studieren und schließlich werden muss. Während der Magister im Allgemeinen ein Ziel auswählt, das dem Initianden wenigstens flüchtig ähnelt, muss man sich um die engen Freunde und die Familie kümmern, und so beginnt eine ausgedehnte Phase der Heimlichkeit, die damit endet, dass das Ziel von seiner Gemeinschaft ausgestoßen wird und der Initiand es völlig ersetzen kann. (Und natürlich muss mit dem Ziel selbst verfahren werden: Viele Initianden scheuen den Gedanken, einen Unschuldigen zu töten, und so wählen gütige Magister ein Ziel aus, das sie des Todes für würdig halten.)",
     "*Wessen Leben hast du gestohlen?*",
     "**Der Ritus der Wachsamkeit:** Der Initiand wird angewiesen, einen Magister – nie seinen eigenen – tief im erdrückenden Lärm der Werke zu treffen. Hier wird ihm ein Trank verabreicht, der ihn bewusstlos macht, und ihm gesagt, er solle, sobald er erwacht, den Magister vor dem nächsten Sonnenaufgang aufspüren. Die schiere Menge an Menschen, die sich durch die Werke bewegen, genügt, um die meisten Verfolgungsversuche abzuschütteln, und geschickte Magister streuen falsche Informationen aus, um die Initianden aus dem Gleichgewicht zu halten.",
     "*Welchen Fehler machte der Magister, der dir half, ihn aufzuspüren?*",
     "**Der Ritus der Gemeinschaft:** Dem Initianden wird gesagt, er solle sich einer Gruppe von Drow nähern, mit der ihn eine bittere Feindschaft verbindet, und ihnen einen vollen Mondmonat lang selbstlos helfen. Das kann in jeder vom Initianden gewünschten Form geschehen, solange es sichtbare Belege für die Hilfe gibt – während manche sich offen nähern und um Vergebung bitten, agieren andere als schattenhafte Wohltäter, die Übeltäter aufspüren und bestrafen oder Geld und Ressourcen an ihre einstigen Feinde spenden. (Hat der betreffende Initiand keine bittere Feindschaft, wird ihm eine zur Verfügung gestellt.)",
     "*Wem hast du geholfen?*",
     "**Der Ritus der Weisheit:** Der Initiand wird einem Agenten des Ministeriums übergeben, der auf die fremderen Elemente der Stadt und der Drow-Rasse spezialisiert ist – eine spinnenblütige Matriarchin-Hebamme, ein dimensionsscherender Vermissian-Weiser, eines der Zoetrop-Schreckgespenster, die Krankheit aus dem Herzen bringen und als Blood-Witches bekannt sind, tiefe Imker, die Schutzgebete zu heiligen Schwärmen blinder Bienen flüstern, und so weiter – und angewiesen, einen Mondmonat lang bei ihm zu lernen. Das Ministerium sorgt dafür, dass dem Initianden die Augen für die Wirklichkeit von Spire geöffnet werden, und nur wenige überleben mit vollständig erhaltenem Verstand und Gleichgewicht.",
     "*Bei wem hast du gelernt, und was hast du gelernt?*",
     {
      "t": "schwarz",
      "h": "Rangordnung im Ministerium unserer Verborgenen Herrin",
      "b": [
       "Dies sind die Ränge des Ministeriums, von niedrig nach hoch:",
       "**Neonat:** Kein volles Mitglied – jemand, der Prüfungen vor seiner vollen Einweihung durchläuft.",
       "**Ruhender:** Ein ausgeschiedenes oder inaktives Mitglied, das derzeit in keiner Zelle dient. Ältere Minister werden oft zum Ruhenden herabgestuft, können aber jederzeit reaktiviert werden.",
       "**Minister:** Ein Mitglied, das aktiv in einer Zelle arbeitet, Befehle von oben erhält, aber im Allgemeinen aus eigener Initiative handelt.",
       "**Magister:** Zuständig für die Aufsicht über eine Anzahl von Zellen und die Koordination der Aktionen, so gut er kann. Oft trifft er seine Schützlinge nur bei Einweisung und Nachbesprechung, und nur wenige mögen es, kontaktiert zu werden.",
       "**Exarch:** Ein hochrangiger Agent, der für mehrere Magister zuständig ist. Jeder Exarch hat einen erblichen Titel, der seinen wahren Namen ersetzt, wenn er die Position übernimmt.",
       "**Orakel:** Ein Sprecher der Weber, umhüllt von Weihrauch und dunkler Magie, nur lose mit der Wirklichkeit verbunden.",
       "**Weber:** Jene, die die Netze des Schicksals weben und die Revolution erschaffen. Es gibt immer nur drei Weber, und sie sind wahrscheinlich nicht mehr sterblich.",
       "**Die Herrin:** Niemand außer den Webern trifft die Herrin, und sie haben nie gesagt, wer sie ist."
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "karmesin",
  "t": "Die Sekte unserer Karmesinroten Wacht",
  "en": "The Sect of Our Crimson Vigil",
  "kurz": "Karmesinrote Wacht",
  "p": 161,
  "bild": "kapitel/religion-S162",
  "verweise": [
   {
    "t": "Der Wacht beitreten",
    "p": 75,
    "ziel": "nach/extra/vigilit"
   },
   {
    "t": "Klasse: Firebrand",
    "p": 41,
    "ziel": "nach/klassen/firebrand"
   },
   {
    "t": "Das Ministerium unserer Verborgenen Herrin",
    "ziel": "stadt/religion/ministerium"
   }
  ],
  "abschnitte": [
   {
    "id": "einleitung",
    "t": null,
    "p": 161,
    "b": [
     "Der Blutmond, oder Jägermond, hängt einmal im Monat am Himmel und wirft ein mattes, karmesinrotes Licht über die Welt. Diese Facette des Mondes nennen die Dunkelelfen Lekolé, oder Unsere Herrin der Rache, und ihre Gestalt ist furchtbar anzusehen: Sie ist ein vielarmiges, hoch aufragendes Gespenst der Zerstörung, ein feueräugiges Wesen von der Farbe des Blutes, und sie predigt Reinheit durch Vernichtung.",
     "Keine Sünde ist zu schwer für ihre Anhänger (gemeinhin als Vigiliten oder Karmesinrote bekannt), um sie im Dienst ihrer Herrlichkeit zu begehen: Sie töten Brütlinge und Kinder ohne einen zweiten Gedanken; sie legen Gebäude oder ganze Stadtblocks in Schutt und Asche; sie verdammen hundert Drow zu qualvollen Toden, um einen Aelfir aufzuspüren und zu töten, den sie als Feind des Volkes betrachten. Oder: Das sagen zumindest die Zeitungen.",
     "(Es war nicht immer so, und tatsächlich ist es noch immer nicht so in Aliquam und Ys und den anderen Nationen der Drow, in denen Damnou angebetet wird. In ihrer richtigen Gestalt als Dreiheit wird die Herrin der Rache durch die Güte der Glorreichen Herrin und die Anmut der Verborgenen Herrin gemäßigt. Aber in Spire, seit ihre Anbetung in den Untergrund getrieben wurde, hat sich die Sekte zersplittert und ist zu gewalttätigem Extremismus verkommen.)",
     "Sie verstecken sich in Widerstandsorganisationen und agieren als Brandstifter und Saboteure, die die subtilen Bemühungen des Ministeriums (und mehrerer anderer revolutionärer Kader, etwa der Arbeiterrechtspartei, der Drow-Befreiungsfront und mehrerer Häuser der Hebammen) immer näher an offene Kriegsführung drängen. Auch sie unterhalten Zellen von Agenten, wie das Ministerium, aber noch dezentraler, und mehr als einmal in jüngerer Erinnerung sind die beiden Organisationen aneinandergeraten, wie eine Situation richtig zu handhaben sei.",
     "Aber für die Karmesinroten geht es nicht darum, den Krieg zu gewinnen – es geht darum, die Schlacht zu schlagen. Jede geschleuderte Brandbombe ist ein Gebet; jeder ausgelöschte Zauberer ein großes Opfer; jeder Zug am Abzug ein Akt der Anbetung. Jedes Jahr schließen sich mehr und mehr zornige junge Drow dem Kult an, und es ist nur eine Frage der Zeit, bis die Kampagne der Aelfir gegen sie von Propaganda und Schauprozessen zu gezielter, umfassender Ausrottung übergeht.",
     "Weitere Einzelheiten zum Beitritt zur Karmesinroten Wacht und zu den Fortschritten, die ein solcher Schritt bietet, findest du auf S. 75. Die Mitgliedschaft in der Wacht ist im Ministerium recht verbreitet, wenngleich die meisten Vigiliten sie geheim halten."
    ]
   },
   {
    "id": "bemerkenswerte-abspaltungen-der-karmesinroten-wacht",
    "t": "Bemerkenswerte Abspaltungen der Karmesinroten Wacht",
    "p": 161,
    "b": [
     "Die Wacht operiert in einer dezentralen Zellenstruktur, wobei viele Zellen aus einem einzelnen Mitglied bestehen, das sich als Teil einer größeren Organisation versteckt, aber es gibt mehrere Ableger und Bewegungen innerhalb des Kults, die Erwähnung verdienen:",
     "Da sind die Ertränker der Götterstraßen-Station, die sich tief im Vermissian verbergen und vorschlagen, dass alle okkulte Magie Ketzerei gegen ihre Göttin sei, und die Leben von Praktizierenden in den überfluteten Tiefen des kerzenübersäten Fahrkartenschalters auslöschen. Fast gegensätzlich zu ihnen ist die namenlose Sekte, die die dämonologische Implantattechnologie der Aelfir unterwandern und kontrollieren will, um einen albtraumhaften Sturm der Unwirklichkeit auf Spire loszulassen, und daneben die Resurrektionisten, die glauben, der einzig wahre Weg zur Erlösung sei die Zerstörung von Spire durch die Detonation von Hunderten, wenn nicht Tausenden von Hohlladungen, die an den Fundamenten angebracht werden. Die Sekte des Heiligen Hypakis, von dem es heißt, er sei inmitten großer Schlachten unberührt von einem einzigen Pfeil oder einer Klinge gewandelt, predigt Bekehrung und Erpressung als Werkzeug, um ihren Einfluss in die oberen Regionen von Spire auszudehnen. Der Wahre Orden des Blutes, eine Perversion der Sekte Unserer Glorreichen Herrin, betreibt eine paramilitärische Widerstandstruppe in ganz Derelictus und den Werken und ist spezialisiert auf Hinrichtungen von Autoritätspersonen und Wachpatrouillen mit ihren typischen abgesägten Gewehren.",
     "Es gibt kein Ende der Splittergruppen innerhalb der breiteren Organisation der Karmesinroten Wacht, und der wahre Schrecken ist, dass viele von ihnen aus Menschen bestehen, die du kennst, mit denen du lebst, mit denen du verheiratet bist, und so weiter. Sie haben jeden Aspekt und jede Ebene der Drow-Gesellschaft unterwandert, und obwohl ihre Ziele denen des Ministeriums nicht unähnlich sind, sind ihre Mittel weit, weit anders.",
     {
      "t": "gegner",
      "id": "vigiliten"
     },
     {
      "t": "gegner",
      "id": "vigiliten-brandstifter"
     }
    ],
    "k": "Abspaltungen der Wacht"
   }
  ]
 }
]);
