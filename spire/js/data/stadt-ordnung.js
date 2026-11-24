/* The Spire – Stadt: Domäne Ordnung (Core S. 147–153): Stadtwache, Hauptquartier der Alliierten Verteidigung, Der Rat. Format: plan/SPIRE_PLAN.md, Abschnitt 5. Textblöcke: Strings = Absatz, [[…]] = Originalname klein grau. */
window.SP_STADT = window.SP_STADT || {};
SP_STADT.ordnung = SP_STADT.ordnung || {t:"Ordnung", p:147};
SP_STADT.ordnung.distrikte = (SP_STADT.ordnung.distrikte || []).concat([
 {
  "id": "wache",
  "t": "Die Stadtwache",
  "en": "The City Guard",
  "kurz": "Stadtwache",
  "p": 147,
  "verweise": [
   {
    "t": "Der Stadtwache beitreten",
    "p": 69,
    "ziel": "nach/extra/stadtwache"
   }
  ],
  "abschnitte": [
   {
    "id": "einleitung",
    "t": null,
    "p": 147,
    "b": [
     "Irgendwer muss ja den Frieden wahren. In Red Row fällt diese Aufgabe mehreren rivalisierenden Schlägerbanden zu; in den Kammern des Rates halten die schwarzen Wachen der Aelfir stille Wacht, bewaffnet und gerüstet mit dem Besten, was die Stadt zu bieten hat; in Perch bestrafen die Bound, ein Gerechtigkeitskult, Übeltäter, indem sie sie von der Flanke des Spire selbst treten. Aber für den Großteil der Stadt übernimmt die tägliche Rechtsdurchsetzung die Stadtwache.",
     "Es ist ein undankbarer Job. Auf der einen Seite behandeln ihre Aelfir-Zahlmeister die Wachen wie ihr persönliches Gesinde, und jemanden zu verhaften, der Verbindungen nach oben im Spire haben könnte, wird zu einem albtraumhaften Netz aus Etikette, mit dem sich die meisten Wachen gar nicht erst abgeben. (Natürlich: Aelfir stehen über dem Gesetz, und sie halten es für einen Firlefanz, den die niederen Völker einführen müssen, damit sie sich nicht gegenseitig umbringen. Keine Drow-Wache könnte je hoffen, einen Aelfir zu verhaften, es sei denn, dieser Aelfir wäre *ungeheuer* unbeliebt und die betreffende Wache brächte eine Menge Freunde mit.)",
     "Auf der anderen Seite versucht die ganze Stadt, das Gesetz zu brechen. Und die durchschnittliche Wache ist kein hartgesottener, eisenharter Mistkerl – es sind Leute aus der Gegend, die sich Mühe geben, ihren Lohn zu verdienen, und viele von ihnen versuchen ehrlich, Spire zu einem besseren Ort zum Leben zu machen. Die Chancen stehen gut, dass du den Namen einer Wache kennst, die durch deine Nachbarschaft geht – oder den Namen ihrer Schwester, oder dass ihre Mutter die Bar die Straße runter führt, und so weiter.",
     "Die offiziellen Gesetze von Spire sind in achtzehn Bänden niedergelegt, die allesamt im Wettstreit von einem Kriegerdichter und einem Kalligraphen-Anwalt aktualisiert werden, die einst verheiratet waren und die Rechtsurkunde der Stadt als Schlachtfeld für ihre alten Streitigkeiten benutzen.",
     "Das bedeutet natürlich, dass es viele seltsame Gesetze gibt, die niemand befolgt – kein Schwein tragen am Sonntag in den Norddocks, jeder arbeitsfähige Mensch in den Werken muss pro Woche fünf Pfeile anfertigen und dem Militärhauptquartier übergeben, ein Rauchverbot im ganzen Spire usw. –, aber auch, dass die Gewässer des Gesetzes so beeindruckend getrübt sind, dass *jeder* in der Stadt jederzeit verhaftbar ist und es eine Frage davon ist, wie rachsüchtig die Wachen an dem Tag gestimmt sind, ob sie ihn verhaften wollen oder nicht.",
     "(Zum Beispiel: Malak, ein mildes Beruhigungsmittel, das von den Drow als Tinktur eingenommen wird und in den Heimatnationen so beliebt ist wie Tee oder Kaffee, wurde in Spire für illegal erklärt. Nicht weil es gefährlich wäre, oder weil die Aelfir sich um die Nebenwirkungen für die Konsumenten sorgten, sondern weil es der Wache einen gültigen Vorwand lieferte, Drow auf der Straße zu durchsuchen und ihre Häuser nach Beweisen zu filzen.)",
     "Das Hauptgeschäft der Wachen ist das Patrouillieren und der Versuch, offenen Rechtsbruch an öffentlichen Orten zu unterbinden, sowie Schlägereien aufzulösen, die in ernsthaften Sachschaden oder Mord auszuarten drohen.",
     "Weitere Informationen zum Beitritt zur Stadtwache und zu den Fortschritten, die er bietet, findest du auf S. 69.",
     {
      "t": "gegner",
      "id": "stadtwache-cmf"
     }
    ]
   },
   {
    "id": "bemerkenswerte-orte",
    "t": "Bemerkenswerte Orte",
    "p": 148,
    "b": [
     "Ein Außenposten fasst etwa 10–15 Wachen; eine Garnison kann leicht mehr als doppelt so viele unterhalten. Diese Stützpunkte sind in erster Linie als Verteidigungsanlagen gebaut und geben den Behörden und den Aelfir einen Rückzugsort in Zeiten des Aufstands, stellen aber auch Waffen und Rüstungen für die Wache und begrenzte Haftmöglichkeiten für Kriminelle bereit.",
     "**Vorloren Standard:** Benannt nach dem alten Lagerhaus, in dem er untergebracht ist, gilt dies weithin als der schlechteste Posten in ganz Spire, da er an das gesetzlose Red Row grenzt. Die gesamte Belegschaft besteht aus blutrünstigen Irren, Emporkömmlingen, die den falschen Wachhauptmann verärgert haben, und so ziemlich jedem, der versucht, Korruption in den oberen Rängen der Organisation zu untersuchen.",
     "**Greenway:** Hauptgrenzkontrolle im Garten, die die riesigen Lieferungen halluzinogener Pilze abfangen soll, die nach unten im Spire zur Drogenhauptstadt der Unterstadt unterwegs sind: dem Threadneedle Square.",
     "**Blackwater Link:** Einziger Wachposten in den von Rittern kontrollierten Norddocks, der die Sorte aktenpedantischer Paragrafenreiter anzieht, die es satthaben, dass die Ritter ihre Autorität zur Schau stellen, ohne jede ordentliche Aufsicht. Ihre Mitteilungsschreiben sind legendär, und sie scheinen sich zum Ziel gesetzt zu haben, so viele Bars der Gegend wie möglich wegen Verstößen gegen Gesundheits- und Sicherheitsvorschriften zu schließen.",
     "**Revier Highmoon:** Verteidiger des südlichen Abschnitts der Werke, die mit über drei Schusswaffen pro Beamtem prahlen und, offen gesagt, mit einem übereifrigen Wunsch, sie zu benutzen.",
     "**Unserer-Herrin-Tor:** Ein Revier aus einheimischen Jungs und Mädels, die die Kathedrale unserer Glorreichen Herrin im mittleren Spire beschützen. Berühmt für ihre Drow-Freundlichkeit, wenn auch nicht so sehr, dass sie sich offen gegen die Aelfir stellen könnten."
    ]
   },
   {
    "id": "die-geheimpolizei",
    "t": "Die Geheimpolizei",
    "p": 148,
    "b": [
     "Der durchschnittliche Angehörige der Wache hält nicht viel vom Ermitteln – und tatsächlich wird tiefes Graben in Problemen von ihren Vorgesetzten im Hauptquartier abgeraten –, also muss jeder von ihnen, der sich die Hände schmutzig machen und herausfinden will, wer Verbrechen begangen hat und warum und möglicherweise, wie sich *künftige* Verbrechen verhindern lassen, das in der Regel ziemlich leise und noch dazu in seiner Freizeit tun.",
     "Dennoch gibt es eine kleine Gruppe solcher Einzelner in den Reihen der Wache – etwa eine pro Garnison, und mehr auf unliebsamen Posten –, die glauben, dass Verbrechensbekämpfung mehr ist, als Schlägereien in Bars aufzulösen und dafür zu sorgen, dass nichts von dem, was nach hohen Gästen geworfen wird, die Schildwand durchdringt. Diese Einzelnen kommen zusammen (meist bei einer Flasche Fusel nach der Tagschicht oder starkem Kaffee nach der Nachtschicht) und tauschen Informationen aus, in der Absicht, das Verbrechen zu verfolgen, während es sich über Spire ausbreitet, und es zu stoppen, bevor es schlimmer wird.",
     {
      "t": "schwarz",
      "h": "Einschlägige Gesetze",
      "b": [
       "Jedes Verbrechen gegen einen Aelfir ist automatisch schlimmer als dasselbe Verbrechen gegen einen Nicht-Aelfir, was die Strafe, das Bußgeld und die anschließenden Ermittlungen angeht (in Spielbegriffen: Erhöhe die Stresswürfel um eine Stufe, wenn die Spieler versuchen, ihre Spuren zu verwischen oder der Justiz zu entgehen).",
       "Allgemein gesprochen ist jede Waffe, die W6 Stress oder mehr verursacht, in Spire zu tragen und zu besitzen illegal. Wenn Wachen solche Waffen finden, beschlagnahmen sie sie und verhängen ein Bußgeld über den Besitzer (oder verhaften ihn).",
       "Ritter der Norddocks dürfen jede beliebige Klingenwaffe tragen sowie Lanzen. Das verärgert die Stadtwache ungemein.",
       "Schusswaffenbesitz ist verboten, und jede Waffe in Spire ist offiziell Eigentum der Stadt, aber Tausende verschwinden oder wechseln jeden Monat den Besitzer.",
       "Das Praktizieren dämonologischer Magie ist streng verboten, aber das liegt über der Gehaltsstufe der durchschnittlichen Stadtwache, die das Problem wahrscheinlich an höhere Offiziere weiterreicht. Andere okkulte Magie wird von den meisten der allgemeinen Bevölkerung, einschließlich der Wache, missbilligt.",
       "Es gibt neun verbotene Glaubensrichtungen, wie vom Rat festgelegt, und die Strafe für die Mitgliedschaft ist Hinrichtung, Verbannung, Schuldknechtschaft, „verlängertes Verhör“ usw. Die zwei bedeutsamsten davon sind die Anbetung von Lombre (Unserer Verborgenen Herrin) und Lekolé (Unserer Karmesinroten Wacht) – die Namen von drei der übrigen fünf Glaubensrichtungen dürfen in Spire bei Todesstrafe nicht laut ausgesprochen werden und sind tatsächlich aus allen außer den geheimsten Aufzeichnungen getilgt, sodass fast niemand weiß, welche es sind.",
       "Das Tragen von Masken ist in Aelfir-Distrikten vorgeschrieben (früher galt es im ganzen Spire, aber es setzte sich nicht durch) – nämlich in Amaranth, im Elfenviertel in den Blauen Docks und in den Kammern des Rates und der Umgebung. Wer ohne Maske erwischt wird, wird verprügelt und aus dem Gebiet vertrieben oder für ein paar Tage ins Gefängnis gesteckt, um über seine Taten nachzudenken."
      ]
     },
     "Die Mehrheit von ihnen wird nicht weit kommen und ist verflucht, ein Leben lang Zeitungsausschnitte mit rotem Faden an den Wänden ihrer Einzimmerwohnungen miteinander zu verbinden, aber einige von ihnen haben ein Gespür fürs Ermitteln und haben interessante Dinge aufgedeckt. Meistens führen diese zurück zu Aelfir-Interessen (und müssen daher stillschweigend ignoriert werden), aber sie sind nahe daran, etwas Licht auf das Ministerium zu werfen, und es ist eine Frage der Zeit, bis sie angeworben, diskreditiert oder getötet werden."
    ]
   },
   {
    "id": "der-bienenstock",
    "t": "Der Bienenstock",
    "p": 149,
    "b": [
     "Tief in der zentralen Struktur des Spire, im ursprünglichen Knochenfels, liegt der Bienenstock. Dies ist das Hauptgefängnis und -hauptquartier der Wache, ein brutalistischer grauer Klotz von einem Gebäude mit einer sechseckigen Wabenstruktur. Hier treffen sich die Wachkorps mit Würdenträgern aus dem oberen Spire, um sie über die Lage der Bevölkerung zu unterrichten, und halten einige ihrer gefährlichsten Verbrecher fest.",
     "Längere Haft ist eine seltene Strafe für ein Verbrechen in der Stadt, und die Wache greift häufiger zu Verbannung und Einziehung von Eigentum, uneinbringlichen Bußgeldern, die zu langen Zeiten der Schuldknechtschaft führen, oder inoffizieller Hinrichtung, um mit schweren Verbrechern fertigzuwerden. Aber manche Gesetzesbrecher sind lebendig mehr wert als tot, und für sie hat der Bienenstock mit Abstand die sichersten Zellen in Spire und vielleicht in der bekannten Welt.",
     "Hier festgehalten, oft auf unbestimmte Zeit, werden politische oder religiöse Gefangene, die zu beliebt sind, um zu riskieren, sie zu Märtyrern für eine Sache zu machen (die vorherigen drei Anführer der Karmesinroten Wacht sollen drinnen sein und eine Flucht planen); geschätzte Krieger, die sich unter der Bevölkerung von Spire nicht kontrollieren lassen; seltsame genetische Abweichler, die für die Universitäten der Naturwissenschaften im oberen Spire von besonderem Interesse sind; Gnolle, die zur Befragung über die Kriege im Süden gesucht werden; und eine Unzahl von „Experimenten“ oder „Haustieren“ (im Besitz hochrangiger Aelfir, die diese seltsamen und mächtigen Individuen nicht in ihrer eigenen Domäne unterbringen können), gemeinsam bekannt als die Menagerie.",
     "(Die Zellen selbst sind so präpariert, dass sie sich vom Hauptgebäude lösen und abfallen können, falls die Wache es wünscht, und den Insassen samt den Wänden seines Gefängnisses in die Tiefen des Spire stürzen und ihn völlig zermalmen.)",
     "Höchst interessant ist, dass der Bienenstock auch einige der fortschrittlichsten praktischen Psychologien der Stadt hervorgebracht hat, im Bemühen, die Köpfe der dort Eingesperrten zu verstehen – aus Sicht der Verbrechensbekämpfung im Fall der Wache und aus rein ästhetischer Faszination im Fall der Aelfir-Dichter-Verhörer, die ihre Musen besuchen und künstlerische Inspiration aus deren zerrütteten Geistern schöpfen."
    ]
   }
  ]
 },
 {
  "id": "verteidigung",
  "t": "Das Hauptquartier der Alliierten Verteidigung",
  "en": "Allied Defence HQ",
  "kurz": "Hauptquartier",
  "p": 149,
  "verweise": [
   {
    "t": "Den Eingezogenen beitreten",
    "p": 70,
    "ziel": "nach/extra/eingezogene"
   }
  ],
  "abschnitte": [
   {
    "id": "einleitung",
    "t": null,
    "p": 149,
    "b": [
     "Am Fuß des Spire, im Osten zwischen den Norddocks und dem Blauen Hafen, liegt das Hauptquartier der Alliierten Verteidigung – oder die Kaserne, wie es gemeinhin genannt wird –, von dem aus die Aelfir ihren andauernden Krieg gegen die Gnolle in den Südlanden von Far Nujab führen.",
     "Es ist ein geschäftiger Knotenpunkt voller Soldaten und Tross – Händler, Tänzer, Waffenhändler, Kinder, Köche und Sexarbeiter –, dessen Sicherheit zunimmt, je näher man dem Zentrum kommt. Hier nimmt ein Lazarett, besetzt mit Lajhan-Priesterinnen mit blutverschmierten Armen bis zu den Ellbogen, die gehfähigen Verwundeten von Grenzscharmützeln auf; dort führt ein Priester von Bruder Ernte eine Gruppe Soldaten im Gebet an, bevor sie durch das große Osttor ausrücken; ein Aelfir-Kriegerdichter steht oben auf der Struktur des Spire und führt eine Einheit elitärer Hochelfen in Schwertübungen und Liedvorträgen an; Himmelswale, außerhalb der Stadt angedockt und von barfüßigen Windpriestern bemannt, nehmen Truppen auf, die von vernarbten Megakorviden hochgeflogen wurden; menschliche Jaeger-Söldner, vom Krieg reich geworden, verwöhnen ihre Liebhaber mit Wein und Gesang."
    ]
   },
   {
    "id": "general-schnee-auf-stein",
    "t": "General Schnee-auf-Stein",
    "p": 149,
    "b": [
     "Die Armee – allgemein als Alliierte Verteidigungsstreitkraft bezeichnet, obwohl sie seit einem Jahrhundert nichts Nennenswertes mehr verteidigt hat – wird von General Schnee-auf-Stein [[Snow-on-Stone]] befehligt, einem Riesen von einem Aelfir. Schnee-auf-Stein hat mit der Tradition gebrochen, indem die militärische Führung nicht mit einem entsprechenden Maß an künstlerischer Meisterschaft gepaart wurde; stattdessen entschied sich der General, in der Jugend ins Ausland zu reisen und von den Wanderkönigen der Menschen, den Hohen Zauberern der Gnolle, den Lords der Karmesinroten Wacht der Drow und vielen anderen Zivilisationen zu lernen.",
     "(Niemand weiß so recht, wie lange Schnee-auf-Stein schon lebt, oder ob der General überhaupt noch lebt oder sich einer Unsterblichkeitsoperation unterzogen hat. Der gewirkte Plattenpanzer, den der General in der Öffentlichkeit nie ablegt, trotzt allen Versuchen der Hellsicht. Vielleicht gibt es mehr als einen General. Vielleicht ist es eine wunderschöne Maschine, ein Uhrwerk-Elf, gefertigt mit fast vergessenen Schmiedekünsten in den gefrorenen Einöden des hohen Nordens.",
     "Vielleicht, so flüstern manche, steckt unter der Maske ein Mensch – oder ein Drow.)",
     "Der General verfügt also über das breiteste Militärwissen der bekannten Welt, und gepaart mit dem berühmten stoischen Pragmatismus hat der General die Heere von Spire zum Sieg über die verstreuten Gnollstämme im Süden geführt. An der Spitze des Heeres, in der typischen eckigen Steinmaske, zwei exquisite Schrotkanonen menschlicher Fertigung in den gepanzerten Fäusten, ist der General ein imposanter Anblick – besonders flankiert von der Ehrengarde, einer Schar hochqualifizierter Aelfir-Soldaten, die alle die nüchterne Haltung des Generals teilen.",
     "Der General hat sich in den Kopf gesetzt, die Gnollhauptstadt einzunehmen. Nach seiner Überzeugung ist es nur eine Frage der Zeit, bis das geschieht."
    ]
   },
   {
    "id": "die-eingezogenen",
    "t": "Die Eingezogenen",
    "p": 150,
    "b": [
     "Die Drow stellen den Großteil der Alliierten Verteidigungsstreitkraft, und die meisten in der Armee sind entweder als Teil ihrer Dienstzeit eingezogen (und werden daher Eingezogene genannt) oder sind nach Ende ihrer Zeit als Schuldknechte nicht in der Lage, anderswo anständige Arbeit zu finden, und entscheiden sich, in der Armee zu bleiben.",
     "Die Haut der Drow ist sehr empfindlich gegen Sonnenlicht, und die meisten Schlachten, die diese Drow erleben, finden in den heißen, trockenen Bergen im Süden statt, sodass sie dazu neigen, Lagen lockeren, hautbedeckenden Stoffs zu tragen, die sie vor der Sonne schützen und sie zugleich zwischen Fels und Erde des Landes tarnen, in dem sie kämpfen.",
     "Während die meisten Drow ihr Soldatenleben mit sehr geringer militärischer Ausbildung beginnen, werden diejenigen, die die frühen Schlachten überleben, rasch zu fähigen Kämpfern – nützlich für die Zeit ihrer Dienstzeit, aber ein ernstes Problem, wenn sie entlassen werden und auf eigene Faust durch die Stadt streifen. Die Schläger von Red Row (und die Beinbrecher des Silberviertels) sind fast alle ehemalige Soldaten und mehr als ein Gegner für alle außer die abgebrühtesten Stadtwachen. Das Ministerium ist verständlicherweise darauf aus, dieses Problem gegen die Aelfir auszunutzen, stellt aber fest, dass vielen der Ex-Soldaten die Fähigkeit zur Heimlichkeit fehlt, die man braucht, um als Untergrundrevolutionär zu überleben. Denen, die sie haben, wird jede Hilfe zuteil, um sie auf die eigene Seite zu ziehen.",
     "Weitere Einzelheiten zu den Fortschritten, die der Beitritt zu den Eingezogenen gewährt, findest du auf S. 70."
    ]
   },
   {
    "id": "skaldeneinheiten",
    "t": "Skaldeneinheiten",
    "p": 150,
    "b": [
     "Bevor ein Aelfir Kriegerdichter wird – falls er je diese erhabene Ehre erreicht –, schließt er sich den Skalden an. Eine unberechenbare Mischung aus Schriftstellern, Mördern, Künstlern, Trinkern, Glimmersüchtigen und Berserkern: Die Skalden kämpfen mit den Waffen, die sie wollen, und tragen die Rüstung, auf die sie Lust haben, und wären sie nicht allesamt geübte Kämpfer, wären sie tot, noch ehe die Schlacht richtig begonnen hat.",
     "Auf Streitwagen, gezogen von Pferden (hochtrainierten und gezügelten Pferden, da Tiere Elfen tendenziell misstrauen), in die Schlacht reitend oder vom Rücken tieffliegender Himmelswale springend, stürzen sich die Skalden wie ein Sturm auf das Gefecht. Sie führen die besten Waffen, die sie sich leisten können (es sei denn, sie wollen sich mit einem normalen Standardschwert durchschlagen), und werden von einer breiten Palette an Schutzriten, seltsamem Okkultismus und Hit-and-Run-Taktiken unterstützt, die den Feind taumeln lassen.",
     "Es gibt Erzählungen von Skalden, die im Freien erwischt und vom feindlichen Feuer zerrissen wurden, aber weit mehr Erzählungen davon, wie sie sich verschanzten feindlichen Stellungen nähern, johlend und singend, und die Gegner zerlegen, als wären es Schweine; von Mysterienkulten, dem Vater Sommer geweiht, die Wunden schneller zusammennähen, als das Auge folgen kann; von Schwertern, die in weißglühendem Licht aufblitzen und Feinde zu Asche verbrennen; und von glücklosen Gnollen, die sich die eigenen Augen ausreißen und gebrochen und blutig durch die Schlacht stolpern, weil sie die ungezügelte Schönheit des Skalden bezeugt haben und den Anblick von nichts anderem mehr ertragen konnten."
    ]
   },
   {
    "id": "korps-fuer-sondertaktik",
    "t": "Korps für Sondertaktik",
    "p": 150,
    "b": [
     "Wie die meisten Eingezogenen sie kennen, ist das Korps für Sondertaktik eine kleine, eng verschworene Gruppe von Eliteeinheiten, die exotische Waffen tragen (Elfen-Liedbögen mit Pfeilen, die dem Opfer den letzten Atemzug wie eine Flöte aus der Brust zupfen; Gnoll-Arkanotechnik-Geräte, die Feuchtigkeit mit explosiver Rate verdampfen; instabile galvanische Waffen aus Gywnn-Enforr, die Bündel von Metallstäben abschießen, die glatt durch ein Gebäude schlagen können), unterstützt von einem Konklave wildäugiger Magier und Spezialisten.",
     "Ihre Einsätze werden mit den einfachen Truppen nie besprochen, aber natürlich gibt es Gerüchte, dass sie feindliche Kommandeure ermorden, Nachschublager in die Luft jagen, Himmelswale kapern und so weiter. Diese Gerüchte sind größtenteils wahr. Das Korps für Sondertaktik wirbt die klügsten und besten verfügbaren Soldaten an, um sein blutiges Werk zu verrichten.",
     "Aber: Die Korps sind Magier, die sich an den dunklen Künsten des Okkulten versuchen – und der Dämonologie im Besonderen. Verboten auf dem Gelände von Spire (und tatsächlich offiziell auch im Krieg verboten seit dem Abkommen vom Schlangenzahn), gewinnt diese albtraumhafte Zauberei die Kriege der Aelfir im ganzen Süden.",
     "Mithilfe eines Netzwerks von Leitern – Agenten, denen ohne ihr Wissen resonante Magnetsteine eingepflanzt wurden, die dämonische Magie leiten, oder denen von eigens geschulten Kriegerdichtern der Dämonengesang in den Kopf geflüstert wurde – beginnen die Magier des Korps ihre Magie zu weben, murmeln Beschwörungen in längst toten Sprachen und bringen die Jenseitswelt zu einem brodelnden, eiternden, geschwollenen Geschwür gegen ihre Wirklichkeit. Da Dämonologie fast immer den Zaubernden tötet, werden diese Leiter als Stellvertreter benutzt, um den Zauber zu kanalisieren – und sie werden in anderen Einheiten versteckt, oder als Spione, oder sogar in den Reihen der Gnolle selbst, wenn das Korps das Glück hat, ein geeignetes Subjekt lebend zu fassen.",
     "Wenn die Zeit gekommen ist, drückt der Zaubernde gegen die inzwischen papierdünne Haut zwischen den Welten, und der betreffende Leiter bricht in einer Feuersbrunst der Unwirklichkeit aus, die niemanden unberührt lässt; jene, die unglücklich genug sind, die Erfahrung zu überleben, sind unweigerlich wahnsinnig, unfähig, selbst die einfachsten Reize zu verarbeiten, ihr Verstand durch die Wucht des Zaubers völlig fortgesprengt.",
     "Je nach Umfang des Gefechts, der Macht des Zaubers und der Verfügbarkeit geeigneter Leiter können die Aelfir eine ganze Stadt in das wahnsinnig machende Reich der Dämonen stürzen und keine Überlebenden hinterlassen, sondern nur die Gebäude und Ressourcen unversehrt. Es ist nur eine Frage der Zeit, bis sie die Mittel und das Können haben, es mit einer ganzen Großstadt aufzunehmen."
    ]
   }
  ]
 },
 {
  "id": "rat",
  "t": "Der Rat",
  "en": "The Council",
  "kurz": "Rat",
  "p": 151,
  "bild": "kapitel/ordnung-S152",
  "verweise": [
   {
    "t": "Der Vyskant",
    "p": 76,
    "ziel": "nach/extra/vyskant"
   }
  ],
  "abschnitte": [
   {
    "id": "einleitung",
    "t": null,
    "p": 151,
    "b": [
     "Der Rat regiert Spire. Er arbeitet als Arm der Hochelfen-Nation mit sehr wenig Aufsicht, und diese sieben Personen sind die letzten Entscheider in allen Angelegenheiten der Stadt und können über jede Sache abstimmen, über die sie sich nicht sofort einigen können.",
     "Sie treffen diese Entscheidungen einmal alle vierzehn Tage in einem der bestverteidigten Räume der Stadt, einer Kammer tief im ursprünglichen Knochenfels des Spire, flankiert von Legionen schwarzgepanzerter Wachen. Die Ratskammer ist bemerkenswert karg, mit mehr Schutzzeichen übersät als das Versteck der paranoidesten Blood-Witch der Unterstadt, und aus schlichtem weißem Stein gehauen, der Jahr für Jahr mit eigenem Willen wächst und sich verändert.",
     "Der Rat muss laut den Stadtgesetzen immer aus sieben Mitgliedern bestehen (und nicht mehr als sieben), wobei verstorbene oder ausgeschiedene Mitglieder durch allgemeine Übereinkunft der übrigen Mitglieder ersetzt werden.",
     "Derzeit sind es:",
     "**Erzdiakon Viele-der-Setzlinge** [[Archdeacon Many-The-Seedlings]], ein frommer Anhänger des Sonnenpantheons, der eine wichtige Stellung in der Kirche innehat (obwohl er sich selten herablässt, Predigten außerhalb kleiner, reiner Aelfir-Gemeinden zu halten). Er macht keinen Hehl aus seiner Hingabe an den Kult, verbirgt aber seine Blutschwüre an den Kult von Bruder Ernte und seine fanatischen Ansichten zur ethnischen Säuberung – selbst innerhalb seiner eigenen Rasse. Er ist unaussprechlich schön (und trägt eine Maske, die viel von seinem Gesicht zeigt, um dies zu betonen, in flagrantem Bruch mit der Tradition), und es wird gemunkelt, er bewahre sein Aussehen durch die dunklen Riten von Schwester Frühling.",
     "**Ratsherr Drynn,** das einzige menschliche Ratsmitglied, der (heimlich) der wichtigste Kommunikationsknoten des Prokatakos-Implantatkults ist, der gemeinsam als Die Intelligenz bekannt ist. Das Spionagenetz unter seiner Kontrolle erstreckt sich durch ganz Spire und in die Menschenlande jenseits davon, und er war bekanntermaßen bösartig pro-Aelfir, wenn es hart auf hart kommt. Drynn ist berühmt gut informiert, vermutlich dank des faustgroßen Klumpens ätherisch resonanten Kristalls, der ihm heimlich ins Gehirn implantiert wurde, aber in letzter Zeit scheint er ihn mit starkem Alkohol zu übertönen.",
     "**Lord Errin Frohlockend-der-Ergebene** [[Jubilant-the-Devoted]], ein Aelfir aus einer stolzen, noblen (und ungeheuer reichen) Abstammungslinie, der seit zwanzig Jahren tot ist, nach einer erfolgreichen Unsterblichkeitsoperation an seinem 75. Geburtstag. Trotz seines Vorgebens, ein guter und frommer Bürger zu sein (bis hin zum Tragen einer Vollgesichtsmaske, wie es sich gehört), wurde sein wandelnder Leichnam von dem Blutgesang-Parasiten befallen, der als der Vyskant bekannt ist, und er hat das letzte Jahrzehnt damit verbracht, still alles für eine vollständige interdimensionale Invasion vorzubereiten, in der Spire in eine glorreiche Fleischmutter verwandelt wird, die die Ankunft der Vyskant-Rasse ankündigt.",
     "**Madame Fey-Aranyen** ist das einzige Drow-Mitglied des Rates, eine Alibigeste gegenüber den Dunkelelfen, um den Eindruck zu erwecken, sie hätten etwas Mitspracherecht bei der Regierung der Stadt. Sie ist eine Hebamme von einigem Können, aber Jahre in Kammersitzungen haben ihre Fertigkeiten eingerostet, und sie wird fast völlig von den anderen regierenden Mitgliedern gelenkt. Über bedeutungslose, leere Gesten hinaus kann sie nicht offen zur Unterstützung der Drow handeln.",
     "**Lady Grendelmyn Sterne-leuchten-sanft** [[Stars-Softly-Shine]] ist Anhängerin des Aufsteigenden Spire, eines halbgeheimen Kults, der glaubt, dass der Spire ein göttliches Wesen ist, das durch uralte Riten erweckt werden muss. Sie ist eine gerechte und billige Herrscherin, soweit Aelfir das sind (das heißt nicht besonders gerecht oder billig), aber sie ist bereit, alles und jeden zu opfern, um die Stadt als Gott auferstehen zu sehen.",
     "**Lord Veq Licht-durch-Splitterglas** [[Light-Through-Splintered-Glass]], ebenfalls ein Unsterblicher wie Frohlockend-der-Ergebene, ist ein Geschäftsmann der alten Schule, der sich seine Wahl in den Rat durch ein verflochtenes Netz aus Bündnissen, Gefallen und Erpressung gesichert hat. Er hat riesige Geschäftsinteressen in der Unterstadt, vor allem in Red Row, aber auch auf dem Hemlock Fruit Market, und ist besessen davon, das organisierte Verbrechen in Spire unter seiner Kontrolle zu halten. Veq pflegt seine Leutnants gegen ihren Willen für die Unsterblichkeitsoperation einzutragen, und seine Gemächer sind gesäumt mit den Herzen seiner Untergebenen, bereit, beim ersten Anzeichen von Ungehorsam zerstört zu werden.",
     "**Kapitän Wander-der-Verlorene** [[Wander-the-Lost]] ist ein Kriegerdichter, einer der höchsten Ränge, die ein Aelfir in ihrer eigentümlichen militärischen und künstlerischen Gesellschaftsstruktur erreichen kann. Trotz (oder vielleicht wegen) seiner vielen Errungenschaften auf dem Gebiet der Kriegsführung und Dichtkunst ist er in Überdruss verfallen, und um dem entgegenzuwirken, ist er hoffnungslos süchtig nach Blau geworden – einer von Menschen gemachten Droge, die den normalerweise grausamen und gedankenlosen Hochelfen erlaubt, Traurigkeit zu empfinden. Während dies seine Werke ungemein verbessert hat, neigt er zu Anfällen tiefer Depression, und es wird gemunkelt, er trete in der Öffentlichkeit nur über ein Netz von Doppelgängern auf.",
     {
      "t": "schwarz",
      "h": "Der ursprüngliche Spire",
      "b": [
       "Der Spire wächst. Er heilt Schnitzereien zu, er reckt sich weiter dem Himmel entgegen, er öffnet und schließt neue Gänge. Das geschieht langsam – geologisch langsam, in einem Menschenleben kaum merklich – und könnte leicht als Setzen des Gebäudes oder als Reaktion auf tektonische Verschiebungen im Untergrund abgetan werden, aber: Er wächst. Wenn er lebt, folgt natürlich, dass er etwas als Brennstoff zum Wachsen benutzen muss, aber niemand kann herausfinden, was das ist. Menschen vielleicht? Blut, heiß vergossen auf den knochenweißen Fliesen, die aus den ursprünglichen Böden wachsen? Sonnenlicht, als wäre er ein großer steinerner Baum?",
       "Außerdem: Spireblack, die klebrige Substanz, die sich um die Werke sammelt, findet sich nirgendwo sonst in der bekannten Welt, und es scheint sich aus dünner Luft dort zu sammeln, wo Rauch und Industrie zu finden sind. Vielleicht atmet der Spire, und Spireblack ist etwas Ähnliches wie Schleim oder Katarrh; je mehr die Werke wachsen, und das tun sie jedes Jahr, desto reicher fällt die brennbare Ernte für die Gutterkin aus, die das Spireblack von den Wänden kratzen."
      ]
     }
    ]
   }
  ]
 }
]);
