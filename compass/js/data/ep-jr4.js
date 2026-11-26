/* Jolly Roger – Staffel 2, Folge 4 „Auf hoher See“ (Buch S. 186–195, Kontext „Der Fluch von El Dorado“ S. 188–189), Buch-ID bc_a1 */
BC_EP["jr4"] = {
  id: "jr4", t: "Auf hoher See", lab: "Staffel 2 · Folge 4", c: "#6e1414",
  b: "bc_a1", s: 186, img: "jr/jr4-kopf",
  intro: [
    {t: "prose", p: [
      "In Folge 4 „Auf hoher See“ werden die Abenteurer vom Rivalen gefangen gehalten, weil sie eine Information besitzen, die sie zu wertvoll macht, um sie zu töten. Ihre Flucht wird noch schwieriger, weil das Schiff, auf dem sie festgehalten werden, von Piraten geentert und von einem Sturm heimgesucht wird.",
      "Um diese Folge zu spielen, musst du Folgendes wissen:"
    ]},
    {t: "cards", cols: 3, items: [
      {h: "Epoche", p: "Wann die Geschichte spielt."},
      {h: "Information", p: "Ein Geheimnis, ein Wissen oder eine Auskunft, die sowohl für die Abenteurer als auch für den Rivalen entscheidend ist."},
      {h: "Rivale", p: "Eine zwielichtige Gestalt, die den Schatz aus den schlimmstmöglichen Gründen finden will. Sie hat die Mittel und den Willen, den Abenteurern Steine in den Weg zu legen."},
      {h: "Schiff", p: "Ein großes Fahrzeug, das zur See fährt. Es hat große Räume, die sich über mehrere Ebenen verteilen. In deinem Abenteuer kann es auch als Fahrzeug angepasst werden, das über Land oder durch die Luft reist."},
      {h: "Schatz", p: "Das A und O des Abenteuers. Alle Abenteurer sind hinter ihm her, und auch wenn sie ihn in dieser Folge nicht finden werden, ist es gut zu wissen, wonach sie suchen."},
      {h: "Piratenschiff", p: "Eine ernste Gefahr, die das Schiff angreifen, entern oder plündern kann."},
      {h: "Piraten", p: "Gesetzlose, die keine Obrigkeit anerkennen und nur zu ihrem eigenen Vorteil handeln. Sie sind sowohl dem Rivalen als auch den Abenteurern feindlich gesinnt."}
    ]},
    {h: "Zeit und Reichtum", s: 187},
    {t: "box", h: "Schiff oder kein Schiff", p: [
      "Diese Folge spielt an Bord eines Schiffs, einem klassischen Abenteuerfahrzeug, das in jeder Epoche und Situation leicht auftauchen kann.",
      "**Wenn du die Idee eines Schiffs in deiner Staffel aber wirklich hasst, kannst du es jederzeit gegen ein großes Flugzeug, ein Luftschiff oder sogar einen Zug austauschen.**",
      "Denk nur daran, ein Fahrzeug zu wählen, das von einem ähnlichen Fahrzeug angegriffen und geentert und später benutzt werden kann, um es zu verfolgen."
    ]},
    {t: "prose", p: [
      "In dieser Folge können die Abenteurer Reichtumspunkte oder Stunden auf der Weltuntergangsuhr verlieren. Spielst du diese Folge als Teil einer Staffel, kannst du das Logbuch benutzen, um diese Werte festzuhalten. Spielst du sie dagegen als eigenständige Folge, kannst du Zeit und Reichtum als Ressource ignorieren.",
      "Bedenke nur, dass die Abenteurer in Szene 4, wenn sie wegen des Sturms über Bord gehen, vom Aufprall auf das Wasser ein Wrack sein werden."
    ]},
    {h: "Diese Folge innerhalb einer Staffel spielen", s: 187},
    {t: "prose", p: [
      "Wenn du dich entscheidest, Folge 4 innerhalb einer Staffel zu spielen, ist die Information, die die Abenteurer haben, der Ort eines Schatzes, den sie in der vorherigen Folge erfahren haben. Hat der Rivale alternativ bereits alles, was er braucht, um den Schatz zu finden, ist er dennoch widerwillig auf die Hilfe der Abenteurer angewiesen, weil er, zu seinem größten Verdruss, die Karte nicht allein entschlüsseln kann."
    ]}
  ],
  ctx: [
    {k: "epoche", l: "Epoche", v: "Jolly Roger"},
    {k: "information", l: "Information", v: "Der Kurs nach El Dorado"},
    {k: "rivale", l: "Rivale", v: "Kapitänin Liv Kline"},
    {k: "schiff", l: "Schiff", v: "Das Kriegsschiff Lionheart"},
    {k: "schatz", l: "Schatz", v: "El Dorado"},
    {k: "piratenschiff", l: "Piratenschiff", v: "Die Scorpion, eine Korvette"},
    {k: "piraten", l: "Piraten", v: "Die Mannschaft von Barron Row"}
  ],
  scenes: [
    {t: "Gefängnisdeck", short: "Gefängnisdeck", ort: "INNEN/TAG", s: 190, blocks: [
      {t: "n", p: [
        "Die Abenteurer befinden sich an Bord eines Schiffs ({P:schiff}) und werden vom Rivalen ({P:rivale}) gefangen gehalten, der von ihnen die Information ({P:information}) will, die zum Schatz ({P:schatz}) führen könnte.",
        "Jeder der Abenteurer sitzt in einer eigenen Zelle, ohne jede Bewegungsfreiheit. Dicke Handschellen ketten ihre Handgelenke an schwere Eisenringe an den Wänden. Abenteurer mit großer Fingerfertigkeit können versuchen, das Schloss der Handschellen zu knacken und die Hände freizubekommen {K:H|Extreme Herausforderung}. Sind sie außerdem wachsam genug {K:H|Kritische Herausforderung}, hören sie, wie der Wind auffrischt und fernes Donnergrollen näher kommt. Ein Sturm zieht eindeutig auf.",
        "Nachdem ein Abenteurer versucht hat, die Hände freizubekommen, wird die Tür zum Gefängnisdeck aufgestoßen, und der Rivale tritt mit seinen Wachen ein."
      ]},
      {t: "d", n: "RIVALE", p: "Hört gut zu! Nur deshalb seid ihr noch am Leben, weil ihr etwas habt, das ich will: die Information! Also spuckt sie aus, und ich lasse euch gehen …"},
      {t: "n", p: [
        "Gibt einer der Abenteurer nach diesem Angebot eine freche oder aggressive Antwort, zögert der Rivale nicht, ihm ins Bein zu schießen, sodass er sich BLUTEND fühlt.",
        "Meldet sich niemand zu Wort, befiehlt der Rivale seinen Gaunern, ein Gewehr auf den Kopf eines der Abenteurer zu richten, und droht den anderen: Wenn sie die Information nicht preisgeben, stirbt ihr Freund.",
        "Abenteurer, die die Information kennen, können beschließen zu schweigen, müssen sich dann aber sehr anstrengen, die Ruhe zu bewahren {K:H|Unmögliche Herausforderung}, und sich auf die Zunge beißen, während einer ihrer Freunde dem Sicheren Tod ins Auge sieht.",
        "Ob freiwillig oder gezwungen: Ein Abenteurer, der am Ende spricht, kann entscheiden, ob er die Wahrheit sagt oder lügt. Um glaubwürdig zu lügen, muss er aber sehr redegewandt sein {K:H|Kritische Herausforderung}. Gelingt es ihm, scheint der Rivale ihm zu glauben; andernfalls befiehlt er einer Wache, ihm mit dem Gewehrkolben eins überzuziehen, sodass er sich GEBROCHEN fühlt. Dann stellt er die Frage ein weiteres Mal. Wieder kann der Abenteurer entscheiden, ob er die Wahrheit sagt oder weiterlügt.",
        "So oder so traut der Rivale ihnen nicht und erklärt mit misstrauischer Stimme, er werde die Information überprüfen, bevor er entscheidet, was er mit ihnen anfängt."
      ]},
      {t: "n", p: [
        "Nachdem der Rivale gegangen ist, bleiben nur noch zwei Wachen im Dienst bei den Abenteurern. Man kann sich leicht vorstellen, dass der Rivale nicht lange brauchen wird, um die Information zu überprüfen und zurückzukommen, um sie entweder zu foltern oder zu töten. Doch solange er fort ist, haben die Abenteurer eine Chance zur Flucht.",
        "Wenn es einem der Abenteurer vorher gelungen ist, die Hände freizubekommen, kann er die Initiative ergreifen. Die Wachen gehen im engen Gang zwischen den Zellen auf und ab. Der Abenteurer kann versuchen, eine von ihnen mit einer Kämpfen-Probe im Feld Verbrechen anzuspringen {K:H|Kritische Herausforderung}. Gelingt das, packt der Abenteurer den Arm der Wache und nimmt ihr rasch die Waffe ab, wobei er auch die andere Wache aufhält. Hat er die Lage nun unter Kontrolle, braucht es nur einen Hauch Anführen {K:H|Einfache Herausforderung}, um die Wachen zu überreden, die Tür zu öffnen.",
        "Alternativ kann ein Abenteurer, der die Hände freibekommen hat, auf den besten Moment warten und mit Fingerfertigkeit die Schlüssel aus der Tasche der Wache ziehen, wenn sie an der Zelle vorbeigeht {K:H|Kritische Herausforderung}. Gelingt das, muss er nur ein paar Minuten warten, bis sich die Wachen entfernen, und hat dann Zeit, die Zellen aufzuschließen. Scheitert er aber, bemerkt der Wärter, was vor sich geht, und starrt den Abenteurer eiskalt an, sodass dieser sich VERÄNGSTIGT fühlt. Dann beginnt er, mit dem Abenteurer zu sprechen, und fragt ihn, ob sie sich schon einmal begegnet seien. Doch nach ein paar Sätzen hin und her verliert er das Interesse.",
        "Sind schließlich noch alle Abenteurer in Handschellen, können sie versuchen, eine der Wachen in die Zelle zu locken, indem sie eine Krankheit vortäuschen oder sich eine andere Lüge ausdenken. Dafür brauchen sie aber eine gute Portion Anführen, Redekunst oder Charme, um sie hinters Licht zu führen {K:H|Kritische Herausforderung}. Gelingt es, können die Abenteurer, nachdem die Wachen in die Zelle gekommen sind, versuchen, sie im Kampf auszuschalten {K:H|Kritische Herausforderung}, haben dabei wegen ihrer Handschellen aber einen Nachteil. Scheitern sie, haben beide Wachen Zeit zu reagieren {K:F|Kritischer Feind}.",
        "Haben die Abenteurer die Wachen auf jeden Fall besiegt, können sie deren Waffen an sich nehmen und sich mit deren Kleidung verkleiden."
      ]}
    ]},
    {t: "Hauptdeck", short: "Hauptdeck", ort: "INNEN/TAG", s: 192, blocks: [
      {t: "n", p: [
        "Eine steile Treppe hinauf gelangen die Abenteurer unter das Hauptdeck. Der Raum ist voller Fässer und Kisten. Draußen hören sie die Truppen des Rivalen einander Befehle zurufen. Das Schiff ({P:schiff}) wimmelt von Feinden, und es mit allen aufzunehmen, um die Kontrolle zu übernehmen, scheint eindeutig ein Selbstmordkommando zu sein {K:F|Unmöglicher Feind}.",
        "Die einzige Hoffnung der Abenteurer ist, in ein Rettungsboot zu klettern und unbemerkt zu entkommen. Dafür müssen sie jedoch das Schiff durchqueren, zu einer weiteren Treppe am Bug gelangen und zum Hauptdeck hinaufsteigen. Dort, inmitten einer Menge uniformierter Feinde und Kanonen, könnten sie ein Rettungsboot erreichen.",
        "Um von den Truppen des Rivalen nicht entdeckt zu werden, brauchen die Abenteurer eine gute Portion Schleichen {K:H|Kritische Herausforderung}. Ist alternativ mindestens einer von ihnen wie eine Wache gekleidet, kann er die anderen ohne Argwohn zu erregen hindurchführen. Doch kaum haben sie einen Schritt von der Treppe weg getan, taucht eine weitere neugierige Wache mit lästigen Fragen auf. Um sie loszuwerden, muss der verkleidete Abenteurer auf seine Redekunst oder sein Anführen zurückgreifen {K:H|Kritische Herausforderung}. Er kann sogar einen Vorteil gewinnen, indem er den Namen des Rivalen ({P:rivale}) fallen lässt. Mit einem Erfolg und einem Seufzer der Erleichterung können die Abenteurer das Hauptdeck erreichen. Scheitert er aber, wird die Wache misstrauisch und beginnt einen Kampf {K:F|Kritischer Feind}. Zum Glück liegt der kleine Raum vor der Treppe ziemlich abseits, und die Abenteurer können den Feind loswerden, ohne Verdacht zu erregen.",
        "Nachdem sie sich zum Hauptdeck des Schiffs durchgeschlagen haben, sehen die Abenteurer endlich das Licht der Sonne und erkennen, blinzelnd, um sich daran zu gewöhnen, die Rettungsboote, nach denen sie gesucht haben. Um die Rettungsboote zu erreichen, ohne gesehen zu werden, müssen sie wachsam sein {K:H|Kritische Herausforderung}. Misslingt einem Abenteurer die Probe, wird er von einem feindlichen Offizier entdeckt, der rasch eine Gruppe Soldaten zusammenholt und auf sie zumarschiert. Angesichts der Gefahr, in die Zelle zurückzumüssen, können sie nicht anders, als sich VERÄNGSTIGT zu fühlen.",
        "Etwa auf halbem Weg zu den Rettungsbooten, nur einen Augenblick bevor die Soldaten des Rivalen sie erreichen, lässt ein lauter Lärm sowohl die Abenteurer als auch die Feinde innehalten. Es ist ein Alarm, der laut und deutlich über das ganze Schiff schallt."
      ]}
    ]},
    {t: "Der Angriff", short: "Angriff", ort: "AUSSEN/TAG", s: 193, blocks: [
      {t: "n", p: [
        "Ein Ausguck brüllt aus voller Kehle: Piraten! Die Abenteurer wenden sofort die Blicke in die Richtung, in die der Ausguck zeigt. Dort sehen sie ein Piratenschiff ({P:piratenschiff}), das näher kommt.",
        "Die Soldaten des Rivalen laufen zur Backbordseite, um hinauszuschauen. Es ist die perfekte Gelegenheit, in einem Rettungsboot zu entkommen. Doch ein ohrenbetäubender Knall übertönt sofort die Stimmen der Matrosen. Das Piratenschiff hat mit seinen Kanonen das Feuer eröffnet.",
        "Während die Abenteurer zu den Rettungsbooten rennen, schlagen die Kanonenkugeln im Schiff ein. Der Aufprall lässt das ganze Fahrzeug ruckeln, und die Abenteurer müssen einen Stunt hinlegen, um nicht über Bord zu fliegen {K:G|Kritische Gefahr}. Danach können sie weiterlaufen, doch ihr Plan kommt abrupt zum Erliegen, als sie feststellen, dass die Kanonenkugeln die Rettungsboote zerstört haben. Ihre einzige Überlebenschance ist, eines der Schiffe unter ihre Kontrolle zu bringen. Währenddessen steht schon eine zweite Breitseite bevor {K:G|2 kritische Gefahren}.",
        "Aber der zweite Angriff lässt sich glatt umgehen, wenn die Abenteurer im allgemeinen Durcheinander das Steuerrad zu fassen bekommen und versuchen, das Schiff aus der Schusslinie zu bringen {K:G|Schiffsgefahr}.",
        "Haben die Abenteurer das Schiff in ihrer Gewalt, können sie das Piratenschiff in ein Seegefecht verwickeln. Andernfalls können sie die Piraten ({P:piraten}) näher kommen lassen, damit sie mit dem Entern des Schiffs beginnen und die Truppen des Rivalen von den Abenteurern ablenken.",
        "Ein Abenteurer mit der Expertise Schiffe oder jeder, dem eine Fahren-Probe im Feld Wissen gelingt {K:H|Einfache Herausforderung}, weiß sofort, dass das Piratenschiff weitaus kleiner ist als das des Rivalen, sodass es sich selbst mit einer kleinen Mannschaft erfolgreich segeln lässt. Versuchen die Abenteurer, das Schiff des Rivalen unter ihre Kontrolle zu bringen und in einer Verfolgungsjagd oder einem Sturm zu segeln, hätten sie bei allen Mannschaftsaktionen einen Nachteil.",
        "Haben die Abenteurer das Steuerrad des Schiffs nicht ergriffen, wird die zweite Breitseite ein Volltreffer. Über dem Krachen der Kanonenkugeln hören sie bald die Stimmen der Piraten. Es ist ein Enterangriff. Einige Piraten landen direkt vor den Abenteurern, bereit zu kämpfen {K:F|2 kritische Feinde}.",
        "Nachdem sie sie besiegt haben, bemerken die Abenteurer, dass das Piratenschiff fast leer ist. Indem sie Kämpfen und Kugeln ausweichen {K:G|Kritische Gefahr}, können sie versuchen, hinüberzuspringen und es zu erobern. An Bord müssen die Abenteurer die wenigen Piraten besiegen, die das andere Schiff nicht geentert haben {K:F|3 einfache Feinde}. Dann haben sie endlich das Piratenschiff unter Kontrolle, können davonsegeln und den Rivalen und die Piraten ihren Kampf untereinander austragen lassen."
      ]}
    ]},
    {t: "Der Sturm", short: "Sturm", ort: "AUSSEN/NACHT", s: 194, blocks: [
      {t: "n", p: [
        "Haben sie ein Schiff unter ihre Kontrolle gebracht, können die Abenteurer in Richtung des Schatzes davonsegeln und sich eine wohlverdiente Pause gönnen.",
        "Befinden sich die Abenteurer auf dem Piratenschiff und ist das Schiff des Rivalen weder zerstört noch außer Betrieb gesetzt, hören sie bald, wie die Kriegsschreie hinter ihnen in Wut umschlagen, weil sich der Rivale und die Piraten verbünden und die Abenteurer zu jagen beginnen.",
        "Um endgültig außer Gefahr zu sein, müssen sie ihre Gegner in einer Verfolgungsjagd abhängen. Scheitern sie, lässt sich ein Seegefecht mit den Feinden nicht vermeiden.",
        "Sobald sie die Verfolgungsjagd gewonnen oder den ersten Ansturm des feindlichen Schiffs abgewehrt haben, setzt ein katastrophales Ereignis allen Feindseligkeiten ein jähes Ende."
      ]},
      {t: "n", p: [
        "Wolken ziehen sich zusammen und verdunkeln sich, der Wind beginnt zu heulen und tobt gegen das Schiff, auf dem sich die Abenteurer befinden. Regen prasselt ihnen ins Gesicht, und der ferne Donner ist nicht mehr weit entfernt. Ein plötzlicher Blitz blendet für einen Schreckensmoment fast alle.",
        "Die Abenteurer befinden sich mitten in einem echten Sturm, der mit der wütenden Kraft des Himmels auf ihr Schiff einprügelt. Der einzige Lichtblick dabei: Sowohl die Piraten als auch der Rivale haben mit demselben Wetter zu kämpfen und haben keine Zeit mehr, die Abenteurer weiter zu behelligen.",
        "Der Sturm wütet 5 Runden in Folge auf ihr Schiff ein, und die Abenteurer müssen hart arbeiten, um seine Wut zu überleben. Setzt der Sturm ihr Schiff außer Betrieb, werden die Abenteurer in das eiskalte Wasser des Ozeans geschleudert. Dadurch verlieren sie alle ihre Gegenstände und alle ihre Reichtumspunkte, und obendrein müssen sie 1 Stunde auf der Weltuntergangsuhr ausfüllen.",
        "Außerdem werden die Abenteurer so plötzlich unter Wasser geworfen, dass sie keine Zeit haben, Luft zu holen, und sie müssen sich sehr zäh erweisen {K:H|Kritische Herausforderung}, um nicht 3 Luftpunkte zu verlieren.",
        "Als wäre das nicht genug, wird die See mit dem Sturm immer rauer, und riesige Wellen drücken die Abenteurer unablässig unter Wasser. Sie müssen all ihr Überlebenstalent aufbieten {K:H|Kritische Herausforderung}, um nicht von den Wellen überwältigt zu werden, die Orientierung zu verlieren und am Ende den Weg zur Oberfläche aus den Augen zu verlieren.",
        "Nachdem sie sich zurechtgefunden haben, stellen die Abenteurer fest, dass die Oberfläche weit über ihnen liegt und sie schnell schwimmen müssen, wenn sie nicht ertrinken wollen. Dafür müssen sie die Zähne zusammenbeißen und auf ihr Spähen zurückgreifen {K:H|Kritische Herausforderung}.",
        "Als die Abenteurer endlich nur noch wenige Fuß unter der bewegten Wasseroberfläche sind, schwinden ihre Kräfte. Ein letzter Stoß, ein letzter Beinschlag: Sie müssen zäh sein, um diese letzten Züge durchzuhalten, die Oberfläche zu durchbrechen und süße Luft zu atmen {K:H|Kritische Herausforderung}.",
        "Aber das war offenbar wirklich die letzte Anstrengung. Nachdem sie diese letzte Herausforderung gemeistert haben, scheint das Wetter aufzuklaren."
      ]},
      {t: "n", p: [
        "Ganz gleich, ob die Abenteurer unter Wasser geraten sind und den Wellen die Stirn geboten haben oder ob sie es geschafft haben, dem Sturm zu trotzen und mit ihrem Schiff, mehr oder weniger heil, auf die andere Seite zu gelangen: Die Natur scheint zufrieden.",
        "Der Wind legt sich, langsam, der Regen wird zum Nieselregen, die See wird immer ruhiger, und die Wolken lichten sich und geben einen klaren Himmel frei, mit dem Mond, der auf den Wellen schimmert, und … etwas anderem dort in der Ferne. Es ist Land! Und mehr noch: Wenn sie genauer hinsehen, ist es nach den Informationen, die sie haben, genau der Ort, den sie erreichen wollten: Der Schatz ({P:schatz}) ist hier.",
        "Ende der Folge."
      ]}
    ]}
  ],
  outro: [
    {h: "Kontext zu „Auf hoher See“ – Der Fluch von El Dorado", s: 188},
    {t: "table", cols: ["Platzhalter", "Vorgabe"], first: true, rows: [
      ["Information", "Der Kurs nach El Dorado"],
      ["Schiff", "Das Kriegsschiff Lionheart"],
      ["Piratenschiff", "Die Scorpion, eine Korvette"],
      ["Piraten", "Die Mannschaft von Barron Row"]
    ]},
    {t: "prose", p: [
      "Entweder haben die Abenteurer den Kurs nach El Dorado endlich zusammengesetzt, oder sie sind die Einzigen, die es können. Deshalb hält Kapitänin Kline sie im Bauch der Lionheart gefangen, eines riesigen Kriegsschiffs der Royal Navy.",
      "Während Kline ihre ehemaligen Gefährten verhört, wirkt sie ganz anders. Sie trägt dunkle, elegante Kleidung, wie sie zu ihrem neuen Beruf als Kaperin passt, doch auf ihren Schultern sitzen auch Rangabzeichen, die zeigen, dass sie nach Mortons Tod die Rolle des Commodore übernommen hat. Es ist ziemlich klar, dass die Matrosen keine gute Meinung von ihr haben, aber sie haben viel zu viel Angst, etwas zu sagen.",
      "Nachdem die Abenteurer das Hauptdeck der Lionheart erreicht haben, werden sie vom Ausguck abgelenkt, der wegen eines drohenden Piratenangriffs Alarm schlägt. Bevor sie von der ersten Breitseite getroffen werden, entdecken sie vielleicht eine große rote Flagge mit einem grinsenden Totenkopf, links davon ein Blutstropfen und rechts davon ein Entermesser.",
      "Das britische Kriegsschiff wird von der Scorpion angegriffen, einer schnellen, dunklen Korvette unter dem Kommando des berüchtigten Piratenkapitäns Barron Row.",
      "Row ist ein dunkelhäutiger Mann aus Jamaika, der beim Gehen von einer Seite zur anderen schwankt. Mit weit über sechs Fuß Größe ist er mit einem schweren Entermesser mit abgebrochener Spitze bewaffnet, dessen breite Klinge fast an ein Hackbeil erinnert.",
      "Jeder, der von ihm gehört hat, weiß, dass er gefährlich ist und sehr leicht aufbraust. Schließlich käme kein ruhiger und vernünftiger Mensch auf den Plan, ein Seeungeheuer wie die Lionheart mit nichts als einer Mannschaft von Gaunern und dem Überraschungsmoment anzugreifen.",
      "Sobald sie ein Schiff übernommen und einen Ausweg gefunden haben, werden die Abenteurer von einem riesigen tropischen Sturm überrascht, der sie erschöpft, aber endlich in sicherem Abstand von ihren Verfolgern zurücklässt. Ob in Sicherheit oder gestrandet: Wenn die Abenteurer auf der anderen Seite des Sturms ankommen, befinden sie sich genau vor dem Archipel, der auf der Karte abgebildet ist. Eine dieser Inseln birgt El Dorado."
    ]},
    {h: "Lionheart", s: 189},
    {t: "prose", p: [
      "Das Kriegsschiff Lionheart ist sowohl Robust als auch Kraftvoll.",
      "Seine große Galionsfigur stellt einen geflügelten Löwen dar, und die Seiten sind reich mit kunstvollen Schnitzereien verziert. Die Kajüten sind mit allem Komfort ausgestattet, ein Geschenk der Familie Morton anlässlich der Beförderung ihres Sohnes zum Commodore. Und nun gehört alles der Kaperin Kline.",
      "Als Stolz und Flaggschiff der Royal Navy hat die Lionheart im Kampf keine Rivalen, erfordert aber eine Besatzung von mehreren Dutzend gut ausgebildeter Soldaten, um richtig bemannt zu werden. Damit ist sie ein ebenso majestätisches wie fürchterlich kostspieliges Fahrzeug.",
      "Geht die Lionheart während des Sturms außer Betrieb, verlieren die Abenteurer die Kontrolle über sie und fliegen über Bord, aber das Schiff wird nicht sinken. Stattdessen wird es von seiner Besatzung gefunden und geborgen.",
      "Wie ein Rivale kann Klines Schiff nicht wirklich zerstört werden, es sei denn, es geschieht in einem Staffelfinale."
    ], img: {src: "jr/jr4-lionheart", pos: "50% 50%", side: "r", h: 400}},
    {t: "cards", cols: 1, items: [
      {k: "Schiff", h: "Lionheart", p: ["Modell: Kriegsschiff", "Glück: 3 Glückspunkte"], items: ["Schnell ◇", "Kraftvoll ◆", "Robust ◆"]}
    ]}
  ]
};
