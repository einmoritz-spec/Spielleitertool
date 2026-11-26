BC_EP["lt10"] = {
  id:"lt10", t:"Die richtigen Leute für den Job", lab:"LuckTales · Folge 10 · Auf Abruf", c:"#7a1b2a",
  b:"bc_z1", s:183, img:"lt/lt10-kopf",
  intro:[
    {t:"box", h:"Zum Spielen dieser Folge brauchst du", p:["Milliardär · Organisation · Boss · Wilder Ort · Verfallenes Gebäude · Führer · Kult · Patriarch · Kreaturen · Spezielle Waffen"]},
    {t:"box", h:"Enthaltener Kontext", p:["Mission: Unsterbliche Beute (siehe Ende der Folge)"]}
  ],
  ctx:[
    {k:"milliardaer", l:"Milliardär", v:""},
    {k:"organisation", l:"Organisation", v:""},
    {k:"chef", l:"Boss", v:""},
    {k:"wilderort", l:"Wilder Ort", v:""},
    {k:"gebaeude", l:"Verfallenes Gebäude", v:""},
    {k:"fuehrer", l:"Führer", v:""},
    {k:"kult", l:"Kult", v:""},
    {k:"patriarch", l:"Patriarch", v:""},
    {k:"kreaturen", l:"Kreaturen", v:""},
    {k:"waffen", l:"Spezielle Waffen", v:""},
    {k:"schatz", l:"Schatz", v:""}
  ],
  scenes:[
    {t:"Büro der Organisation", short:"Büro", ort:"INNEN/TAG", s:184, blocks:[
      {t:"n", p:[
        "Der alte, aber noch immer sehr mächtige {P:milliardaer} hat die {P:organisation} beauftragt, einen {P:schatz} von unermesslichem Wert zu bergen.",
        "Die Abenteurer müssen die langen und langweiligen Verhandlungen zwischen ihrem unterwürfigen {P:chef} – der eifrig versucht, einen beträchtlichen Preis für die Expedition auszuhandeln – und dem {P:milliardaer} über sich ergehen lassen, den der Preis nicht wirklich kümmert, der aber den Fähigkeiten der Abenteurer nicht traut.",
        "Um ehrlich zu sein, haben die Abenteurer offensichtlich einen Kater von der Gala am Vorabend, die zu Ehren des {P:milliardaer} gegeben wurde. Ein gutes Stichwort für die RÜCKBLENDE."
      ]}
    ]},
    {t:"Empfangshalle", short:"Empfangshalle", ort:"INNEN/NACHT", s:184, blocks:[
      {t:"n", p:[
        "Eine prunkvolle Gala wurde ausgerichtet, um zu entscheiden, welche Organisation die Mission zur Bergung des {P:schatz} leiten soll. Alle Besten sind da, aber die Abenteurer haben einen ganz bestimmten Auftrag. Sie müssen sich bei den Konsuln beliebt machen und so viele Informationen wie möglich über den {P:wilderort} sammeln, dazu jeden anderen Hinweis, der für die Expedition nützlich sein könnte.",
        "Gehen die Abenteurer mit den richtigen Worten auf die Konsuln zu {K:H|Einfache Herausforderung}, erfahren sie, dass das {P:gebaeude}, in dem der {P:schatz} vermutet wird, von wilden Tieren verseucht ist, die nur Feuer fürchten {K:Hw|Hinweis}. Und es kommt noch mehr: Sind die Abenteurer wirklich überzeugend {K:H|Kritische Herausforderung}, erfahren sie außerdem, dass der Legende nach zwei {P:kreaturen} den {P:schatz} bewachen, und dieselben Legenden empfehlen, {P:waffen} einzusetzen, um sie zu bannen {K:Hw|Hinweis}.",
        "Leider ist es ziemlich schwierig, in Ruhe mit den Konsuln zu plaudern und dabei den Verstand zu behalten, Hinweise zu sammeln. Die Party ist in vollem Gange, und das Servicepersonal huscht mit absurden Mengen an Alkohol auf den Tabletts hin und her. Und als wäre das nicht genug, sind die Konsuln selbst große Trinker und wären beleidigt, wenn die Abenteurer sich weigerten, mit ihnen zu trinken.",
        "Nach jedem Hinweis, den sie erhalten, müssen die Abenteurer eine Probe auf Zäh bestehen {K:H|Kritische Herausforderung}, um sich nicht BETRUNKEN zu fühlen {K:X|Negatives Gefühl, das allen Proben in den Feldern Wissen und Gesellschaft bis zum Ende der Szene einen Nachteil gibt}."
      ]}
    ]},
    {t:"Flughafen", short:"Flughafen", ort:"AUSSEN/TAG", s:185, blocks:[
      {t:"n", p:[
        "Am nächsten Tag treffen die Abenteurer ihre zwei {P:fuehrer} am Flughafen. Die {P:fuehrer} sind Einheimische, die das Konsulat beauftragt hat, im {P:wilderort} ein Grabungsteam zu finden. Der Flug verläuft ohne Zwischenfälle, und die Abenteurer können die Zeit nutzen, die {P:fuehrer} nach den örtlichen Überlieferungen und Legenden rund um den {P:schatz} zu fragen.",
        "Plötzlich versuchen zwei Flugzeugentführer, die in der ersten Klasse saßen, die Kontrolle über das Flugzeug zu übernehmen. Sie sind seltsam gekleidet, und ein aufmerksamer Abenteurer {K:H|Einfache Herausforderung} erkennt das Symbol auf ihrer Brust als das des {P:kult}.",
        "Leider reisen die Abenteurer in der Economy Class (vielen Dank an die Budgetkürzungen) und müssen sich zu den Entführern durchschlagen, nachdem sie den Lärm gehört haben. Die Lage scheint völlig außer Kontrolle: Die Entführer sind eindeutig ausgebildete Soldaten und haben es irgendwie geschafft, Waffen an Bord zu schmuggeln, während die Abenteurer ihre gesamte Ausrüstung im aufgegebenen Gepäck verstauen mussten. Den Verbrechern gegenüberzutreten, wird nun nicht leicht {K:F|2 kritische Feinde}. Schaffen es die Abenteurer nicht, an ein paar improvisierte Waffen zu kommen, haben sie in einer Prügelei mit Sicherheit einen Nachteil. Und als wäre das nicht genug, müssen sie auch sehr darauf achten, dass andere Passagiere im Kampf nicht verletzt oder Schlimmeres werden {K:G|+1 einfache Gefahr}.",
        "Zu allem Überfluss erzittert das ganze Flugzeug und ruckt nach vorn, was das Schlimmste befürchten lässt. Als die Abenteurer das Cockpit erreichen, finden sie beide Piloten tot und den Autopiloten außer Betrieb. Zum Glück springen die {P:fuehrer} in den Kampf, wenn die Abenteurer nach 2 Runden noch nicht alle Feinde ausgeschaltet haben, und zwar mit improvisierten Rauchbomben, die sie aus zusammengerollten Zeitungen und zufällig gefundenen Chemikalien gebastelt haben. Dieses prompte Eingreifen gibt den Abenteurern die Chance, zu reagieren und ihre Gegner auszuschalten.",
        "Das Flugzeug ist jedoch noch immer beschädigt und die Piloten sind weiterhin tot, also müssen sie die Steuerung selbst übernehmen und eine Notlandung versuchen {K:H|Einfache Herausforderung}. Zum Glück sind sie nicht allzu weit von ihrem Ziel entfernt, und mit der begeisterten Hilfe der {P:fuehrer} bemerken sie ein großes Gehöft, in dem noch Licht brennt. Es ist wahrscheinlich eine Fischergemeinde am Ufer desselben Sees, an dem das {P:gebaeude} liegen soll."
      ]}
    ]},
    {t:"Wilder Ort", short:"Wilder Ort", ort:"AUSSEN/TAG", s:186, blocks:[
      {t:"n", p:[
        "Haben sie die Herausforderung der Landung des Flugzeugs erfolgreich gemeistert, können die Abenteurer ihre Ausrüstung mitnehmen, bevor sie zum Gehöft laufen; andernfalls müssen sie versuchen, mit den Fischern um neue Ausrüstung zu feilschen {K:H|Kritische Herausforderung}.",
        "In der Fischergemeinde angekommen, können die Abenteurer eine Pause einlegen, bevor sie den {P:patriarch} kennenlernen, den Anführer der Gemeinschaft. Mit Hilfe der {P:fuehrer}, die als Dolmetscher fungieren, müssen sie ihn überzeugen, der Gruppe zwei kleine Boote zu geben, damit sie die Insel erreichen können, sowie eine kleine Gruppe von Leuten, die bei der Grabung helfen {K:H|Einfache Herausforderung}. Dann können sie sich zum {P:gebaeude} auf einer Insel im See aufmachen.",
        "Am Ort angekommen, erfahren sie, dass die Insel eher ein Felsen ist und das {P:gebaeude} nur an dessen Seite hockt, umgeben von einem Dickicht aus Bäumen. Die gesamte Fläche der Insel beträgt wenig mehr als ein Viertel einer Quadratmeile. Das Gebäude ist nicht allzu klein, aber fast völlig verfallen. Dahinter steht ein kleiner Turm, ebenfalls in Ruinen, der wahrscheinlich zum selben Bauwerk gehörte.",
        "Nachdem sie das Gelände erkundet haben {K:H|Einfache Herausforderung}, entdecken die Abenteurer, dass das {P:gebaeude} einen Keller hat, der vollständig mit Erde und Schutt bedeckt ist, die wohl bei einer Reihe von Überschwemmungen vom See hereingetragen wurden. Darin zu graben wäre sehr riskant {K:H|Kritische Herausforderung}, denn das Gebäude ist einen Nieser davon entfernt, ihnen auf den Kopf zu stürzen; die Wände werden nur von einer Schicht getrockneten Schlamms zusammengehalten, die jeden Augenblick nachgeben könnte {K:G|Kritische Gefahr}.",
        "Beunruhigenderweise hören sie die Geräusche wilder Tiere aus dem Wald, die sich eindeutig bereit machen, die Grabungsstätte jeden Moment anzugreifen. Die einzige Möglichkeit, einen Hinterhalt zu vermeiden, ist, Wache zu halten {K:H|Kritische Herausforderung}, doch das Rudel greift die Abenteurer trotzdem an {K:F|2 kritische Feinde}. Hat die Gruppe auf den ersten Hinweis gehört und Feuer mitgebracht, flieht die Hälfte des Rudels, und sie haben weniger Bestien zu bekämpfen {K:F|1 kritischer Feind}.",
        "Nachdem sie die Tiere besiegt haben, können die Abenteurer sich frei zum Keller des {P:gebaeude} durchgraben."
      ]}
    ]},
    {t:"Verfallenes Gebäude, Keller", short:"Keller", ort:"INNEN/NACHT", s:187, blocks:[
      {t:"n", p:[
        "Das Innere des Kellers ist unversehrt, anders als der Rest des Gebäudes. Die Grabung musste die Wände aus massivem Stein durchbrechen, um einen Weg in eine verschwenderisch geschmückte Halle zu öffnen. Vier große Säulen tragen die Decke, und alles im Raum, vom Boden bis zur Gewölbedecke, einschließlich der Wände und Säulen selbst, ist fein mit religiösen Motiven in satten Rot- und Goldtönen freskiert. Der Weg nach vorn wird durch einen langen roten Teppich gewiesen, und in der Mitte des Raumes steht ein Grab mit makellosem Deckel.",
        "Dahinter ist die Treppe, die einst ins Erdgeschoss führte, vollständig mit Schlamm gefüllt. Öffnen die Abenteurer das Grab, bleibt ihnen kaum genug Zeit, den {P:schatz} darin zu sehen, bevor die Wände aufbrechen und enthüllen, dass sie nur eine dünne Putzschicht waren, die die zwei {P:kreaturen} aus den Legenden verbarg, von denen die Abenteurer zuvor gehört haben. Die beiden übernatürlichen Feinde greifen die Gruppe sofort an. Ihre übermenschlichen Eigenschaften machen diese {P:kreaturen} sehr schwer zu bekämpfen {K:F|Extremer übernatürlicher Feind}, doch haben die Abenteurer die {P:waffen} dabei, haben sie im Kampf zumindest einen Vorteil.",
        "Nach dem Kampf haben die Abenteurer kaum Zeit, den {P:schatz} an sich zu nehmen, bevor eine ganze Gruppe Fischer, bis an die Zähne bewaffnet, in das Grab platzt. Unter ihren offenen Hemden sind deutlich Kleidungsstücke zu sehen, die mit dem Symbol des {P:kult} verziert sind. Die Abenteurer erkennen es sofort, wenn sie es bei den Flugzeugentführern auf der Kleidung bemerkt haben.",
        "Die Fischer befehlen allen, sich zu ergeben und ihnen zu folgen, und vorerst scheint es, als hätten die Abenteurer, hoffnungslos in der Unterzahl, keine andere Wahl, als zu gehorchen {K:F|Unmöglicher Feind}. Nachdem man ihnen Handschellen angelegt und sie auf Fischerbooten ans Ufer gebracht hat, werden die Abenteurer erneut zum {P:patriarch} geführt. Nun vollständig in die Kleidung des {P:kult} gewandet, ist er eindeutig der Anführer."
      ]}
    ]},
    {t:"Wilder Ort, Gehöft", short:"Gehöft", ort:"INNEN/NACHT", s:188, blocks:[
      {t:"n", p:[
        "Der {P:patriarch} lobt die Abenteurer, wie gut sie die Bergung des {P:schatz} gemeistert und mit den furchterregenden {P:kreaturen}, die ihn bewachten, fertiggeworden sind. Dann befiehlt er, die Abenteurer und ihre {P:fuehrer} in eine Zelle unter dem Gehöft zu werfen.",
        "Aus ihrem Gefängnis zu entkommen ist nicht unmöglich, aber die zwei bewaffneten Wachen an der Tür machen die Sache sicherlich kompliziert. Die {P:fuehrer} bieten an, die Wachen abzulenken, während die Abenteurer versuchen, mit allem, was sie zur Hand haben, das Schloss zu knacken {K:H|Kritische Herausforderung}. Zum Glück hat der {P:kult} nur daran gedacht, den Abenteurern die Waffen abzunehmen, nicht die Ausrüstung. Nach dem Ausbruch können die Abenteurer sich um die Wachen kümmern {K:H|Kritische Herausforderung} und sich durch das Dorf schleichen, um den {P:schatz} zu finden, der noch im Büro des {P:patriarch} im zweiten Stock des Gehöfts liegt.",
        "Handlanger des {P:kult} sind überall {K:F|Kritischer Feind}, bewaffnet und bereit, jeden Abenteurer zu bekämpfen, der sich durch den kleinsten Fehltritt verrät {K:H|Einfache Herausforderung}. Andererseits können die Abenteurer ihnen nach ihrer Niederlage mühelos die Waffen abnehmen.",
        "Der zweite Stock des Gehöfts besteht aus einem langen Korridor am Ende der Treppe, mit einer Tür zu einem kleinen Archiv, das bis obenhin mit Buchhaltungsunterlagen der Fischergemeinde vollgestopft ist, und einer zweiten Tür, die ins Büro des {P:patriarch} führt.",
        "Sobald die Abenteurer ins Büro platzen, finden sie den {P:patriarch} in einem Gespräch in einer unbekannten Sprache mit einer Person, die mit dem Rücken zur Tür sitzt. Die Abenteurer können ihr Gesicht nicht sehen, aber sie erkennen die Stimme.",
        "Bevor sie richtig begreifen, was geschieht, hören die Abenteurer hinter sich das Geräusch schwerer Waffen und drehen sich um: Die {P:fuehrer} zielen auf sie und befehlen ihnen, die Hände zu heben.",
        "Der Stuhl mit der geheimnisvollen Gestalt dreht sich herum, und die Abenteurer können endlich den {P:milliardaer} selbst sehen."
      ]},
      {t:"d", n:"MILLIARDÄR", p:"Ihr fragt euch sicher, was das alles soll. Ihr wisst, dass ich sehr, sehr alt bin ... Meine Zeit läuft ab. Aber das darf NICHT geschehen."},
      {t:"d", n:"MILLIARDÄR", p:"Der {P:kult} hat mir geholfen, die Kräfte des {P:schatz} zu verstehen. Aber sie konnten das Grab nicht schänden und nicht gegen die {P:kreaturen} kämpfen. Ich brauchte für diese Arbeit hochqualifizierte Profis."},
      {t:"d", n:"MILLIARDÄR", p:"Die Flugzeugentführung war mein letzter Test: Hättet ihr es nicht geschafft, sie auszuschalten, oder wärt ihr dabei gestorben, wäre das der Beweis gewesen, dass ihr nicht würdig seid, und ich hätte weiter Bewerber für den Job befragt."},
      {t:"d", n:"MILLIARDÄR", p:"Es tut mir leid um die Täuschung, aber ihr versteht, ich musste sicherstellen, dass der {P:schatz} hier bleibt. Ich wollte nicht, dass ihr Hitzköpfe ihn weit außerhalb der Reichweite des {P:kult} bringt."},
      {t:"d", n:"MILLIARDÄR", p:"NIEMAND darf erfahren, wofür man den {P:schatz} verwenden kann. Deshalb ... findet ihr in diesem Koffer die Bezahlung für den Job, wie mit der {P:organisation} vereinbart."},
      {t:"d", n:"MILLIARDÄR", p:"Und ... im zweiten findet ihr genau dieselbe Summe für euch. Damit ihr den Mund haltet. Ihr könnt sie nehmen ... oder hier und jetzt sterben."},
      {t:"n", p:[
        "Es ist klar, dass die Abenteurer wirklich keine Wahl haben, als die Bezahlung anzunehmen und zu ihrem {P:chef} zurückzukehren.",
        "Ob sie das Geheimnis wahren werden oder nicht ... nun, das ist eine völlig andere Frage, die unzählige Folgen haben wird, die ihr in der nächsten Folge erkunden könnt."
      ]}
    ]}
  ],
  outro:[
    {h:"Kontext zu „Die richtigen Leute für den Job“: Mission: Unsterbliche Beute", s:190},
    {t:"list", cols:1, items:[
      "**Epoche:** Golden Age",
      "**Milliardär:** John Davison Rockefeller",
      "**Organisation:** Ein privater amerikanischer Nachrichtendienst, auch bekannt als C.R.O.W.",
      "**Boss:** Walter Mallory, Chef von C.R.O.W.",
      "**Schatz:** Die sterblichen Überreste von Vlad Tepes, auch bekannt als Dracula",
      "**Wilder Ort:** Rumänisches Hinterland",
      "**Verfallenes Gebäude:** Kloster Snagov, 35 km/22 Meilen nördlich von Bukarest",
      "**Führer:** Vasile und Mihai, rumänische Angestellte von Rockefeller. Sie sind „Führer“ (Extras, 1999)",
      "**Kult:** Die Drachensekte, gegründet von den Nachkommen von Vlad Tepes",
      "**Patriarch:** Alexandru, der Anführer der Drachensekte",
      "**Kreaturen:** Zwei Ghule, Diener von Dracula",
      "**Spezielle Waffen:** Eschenholzpfähle"
    ]},
    {t:"prose", p:[
      "Die Prohibition ist in vollem Gange. Der alte, aber noch immer sehr mächtige John Davison Rockefeller hat C.R.O.W. beauftragt, ein Relikt von großem Wert zu bergen: den Leichnam von Vlad Tepes. Die finstere Aura um den Woiwoden der Walachei hat seit dreißig Jahren öffentliche Berühmtheit erlangt, seit Bram Stokers Roman Vlads Beinamen in die Geschichte eingeschrieben hat: Dracula.",
      "Nachdem sie den Milliardär von ihren Fähigkeiten überzeugt haben, erreichen die Abenteurer den Flughafen, wo sie Vasile und Mihai treffen, zwei Angestellte, die das rumänische Konsulat angeheuert hat, um bei der Expedition zu helfen.",
      "Die typische Kleidung der Drachensekte, die sie bei den Flugzeugentführern sehen können, trägt ein kreisförmiges Symbol, ganz ähnlich einem Ouroboros, in dem ein Drache den Platz der Schlange einnimmt, die sich in den Schwanz beißt.",
      "Auf dem Gehöft werden die Abenteurer von den Fischern fröhlich begrüßt, die sie in ein kleines Büro im zweiten Stock führen. Dort werden sie Alexandru vorgestellt, dem Patriarchen der Gemeinschaft, der ihnen sofort wohlgesonnen ist.",
      "Das Kloster Snagov ist eine mittelgroße Kirche auf einer kleinen Insel im See. Die Besonderheit des Gebäudes sind die drei Glockentürme, die in einer geraden Linie errichtet wurden. Das Gebäude ist fast völlig verfallen, und dahinter steht ein quadratischer zweistöckiger Turm, ebenfalls in Trümmern. Er war einst Wohn- und Arbeitsstätte der Mönche. Im Turm deutet nichts auf einen Keller hin, und so muss die Gruppe im Kloster graben, um die Katakombe zu erreichen.",
      "Bevor sie die Grabkammer unter der Kirche erreichen, müssen die Abenteurer sich mit einem Rudel tollwütiger Wölfe auseinandersetzen, die erbitterten Widerstand leisten.",
      "Das Grab von Vlad in der reich geschmückten Grabkammer enthält tatsächlich den Leichnam des Woiwoden: eine perfekt erhaltene Mumie, gekleidet in feine rote und schwarze Gewänder und mit der einzigartigen Kopfbedeckung, die für den Woiwoden der Walachei typisch ist. Er sieht genau so aus wie damals, als er zu Lebzeiten für das berühmte Porträt posierte, das auf Schloss Ambras in Österreich erhalten ist. Sofort und beunruhigend sichtbar auf seinem mumifizierten Gesicht sind zwei riesige, spitze Reißzähne, die aus seinem geöffneten Mund ragen. Der Anblick jagt den Abenteurern einen Schauer über den Rücken, kurz bevor sie von den Dienern des Vampirs angegriffen werden: zwei Ghule, grauenvoll verdorrt von der Zeit und von der Verderbtheit ihrer Seelen.",
      "Nachdem sie erneut vor Alexandru geführt wurden, sehen sie den Patriarchen in Gewändern, die denen des Woiwoden der Walachei sehr ähnlich sehen. Der Grund dafür wird später von Rockefeller enthüllt, als er sich von den Abenteurern trennt. Er verrät, dass die Mitglieder der Drachensekte allesamt sterbliche Nachkommen von Vlad Tepes sind, die aufgrund ihrer Verwandtschaft das Grab nicht schänden und sich den Dienern ihres Vorfahren nicht stellen konnten.",
      "Der alte Milliardär will den Leichnam des Vampirs nutzen, um Dracula zu erwecken, und hofft, dass der Woiwode seinen Dienst vergelten wird, indem er sowohl ihn als auch die Mitglieder der Drachensekte in Unsterbliche verwandelt. Es ist der letzte, verzweifelte Plan eines Mannes, der Angst vor dem Tod hat.",
      "**HISTORISCHE KURIOSITÄT:** Als Archäologen 1933 die Kirche von Snagov ausgruben, war das Grab, das sie unter dem Schiefer fanden, völlig leer."
    ]}
  ]
};
