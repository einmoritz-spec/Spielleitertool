window.HT_DAGGER = window.HT_DAGGER || {intro:{}, opp:[], kap:{}, app:{}};
HT_DAGGER.kap["1"] = {
  n: 1, id: "k1", t: "Trainkill", p: 24,
  verse: [
    "In einer Höhle, weit von hier, lebt ein gelehrter Philosoph. Er kennt ein Geheimnis, das ich dir gleich verraten werde. Er kennt noch viele, viele andere Geheimnisse, aber die sind nicht für deine Ohren bestimmt.",
    "Das Geheimnis lautet: Das Heart wird von unseren Wünschen geformt. Nehmen wir an, du bist oben in Spire und hörst das Gerücht von einem illegalen Tempel in irgendeiner Gasse der Stadt. Das Gerücht mag wahr sein, der Tempel mag existieren. Oder er hat einmal existiert, wurde aber von einem eifersüchtigen rivalisierenden Kult zerstört. Oder er hat nie existiert, und der Kerl, von dem du das Gerücht hast, war auf Glimmer völlig neben sich.",
    "Aber hier unten gibt es noch eine andere Möglichkeit: Der Ort existierte nicht, als du das Gerücht hörtest, aber jetzt existiert er, und du wirst ihn finden. Deine Erwartung hat ihn erschaffen. Das Heart hat ihn für dich gemacht.",
    "Denk darüber nach. Lass diesen Gedanken wie eine Zecke in deinem Gehirn haften.",
    "Und solltest du in einer Höhle, weit von hier, einem gelehrten Philosophen begegnen, komm zurück und erzähl es mir."
  ],
  gar: [
    {n: 2, x: "Alternativ – lass Felise weg, und eine der Spielerfiguren erhält als Teil ihrer Vorgeschichte „Du wurdest von Excalibur Carter angeheuert“."},
    {n: 3, x: "In dieser überstrapazierten Metapher sind Agenten der Stadt darüber Möwen; lästige Raubtiere, die auf alles scheißen."}
  ],
  legenden: null,
  ueberblick: [
    "In diesem Kapitel geht es ganz um den Aufbau und darum, die Spielercharaktere zu ködern; es endet damit, dass sie in Kapitel 2 aufbrechen, um den Eastern Express zu suchen. Befindest du dich mitten in einer bestehenden *Heart*-Kampagne, lässt du den Spielern lieber das Geschehen bestimmen oder suhlst dich gern im Seltsamen, dann lass sie zwischen den verschiedenen Landmarken und NPCs in diesem Abschnitt hin- und herspringen, bis sie über eine der Verbindungen stolpern, die zum Eastern Express weisen.",
    "Für einen direkteren Ansatz spiele *Toter Mann mit Knarre* (S. 28), um den Spielern einen Plot-Haken in die Hand zu geben."
  ],
  inszenierung: [
    {
      t: "Von Schatten gejagt", p: 26,
      b: [
        "**Von Schatten gejagt:** Ein Drow flieht durch einen Tunnel, verfolgt von schattenhaften Kopfgeldjägern – und rennt direkt in die Delver hinein. Unglücklicherweise nehmen die Kopfgeldjäger an, die Delver gehörten zu ihrem Ziel, und eröffnen das Feuer.",
        "Der Drow ist **Felise**². Überlebt sie, erklärt sie, dass sie für einen menschlichen Forscher namens Carter (S. 60) arbeitet und von ihm auf der Suche nach dem Eastern Express geschickt wurde. Felise hat keine Ahnung, wer Carter ist, aber besser informierte Delver (**Delve+Haven**) erinnern sich an den Namen eines halblegendären menschlichen Forschers, der vor etwa vierhundert Jahren eine Expedition ins Heart anführte. Angeblich erlangten Carter und seine Gefährten eine Art Unsterblichkeit, sind nun aber für immer an das tiefe Heart gebunden und nie an die Oberfläche zurückgekehrt.",
        "Ihr Auftrag lautet, den mystischen verlorenen Zug zu finden, alle Dokumente und Forschungsmaterialien einzusammeln, die sie dort findet, und sich dann mit Carter beim Chaingod (S. 59) zu treffen. Sie weiß nicht, warum Carter seine Drecksarbeit nicht selbst erledigt, auch wenn es möglicherweise damit zu tun hat, dass er nicht von mysteriösen Kopfgeldjägern erschossen werden will.",
        {t: "p", k: 1, x: "„Übrigens, danke, dass ihr ihr das Leben gerettet habt. Hey, wollt ihr euch mit uns zusammentun und die Bezahlung teilen?“"},
        "Sie wird von Kopfgeldjägern gejagt. Die Kopfgeldjäger arbeiten für Aramos Brightness-Sears-The-Eye, doch auch sie stellen keine Fragen über ihren Auftraggeber. Einer von ihnen hat eine Ratte, in die ein arkanes Sigil eingebrannt ist, das vage wie ein Auge aussieht – diese Ratte ist ein magisches Kommunikationsgerät, das mit Tython (S. 68) verbunden ist, einem Zauberer in Aramos’ Diensten. Die Ratte explodiert kurz nachdem die Kopfgeldjäger getötet wurden.",
        {t: "h", x: "Felise"},
        "Es gibt Wesen, die am Rand des Heart lauern, wie Geschöpfe, die in der Gezeitenzone entlang der Küste leben. Sie überstehen die Wellen des Chaos, die ein- und ausfließen, und tun so, als lebten sie in einer stabilen Region. Manchmal dürfen sie sich an irgendeinem riesigen Kadaver gütlich tun, den die Tiefen angespült haben; manchmal werden sie von einem unvorstellbaren Raubtier gefressen. Es gibt solche wie die Spielercharaktere, die mutig in die unergründlichen Tiefen marschieren, um zu ertrinken. Und dann gibt es Geschöpfe wie Felise, Geschöpfe des Flachwassers. Sie tauchen ein und aus dem Wasser, aber nie zu tief und nie außer Sichtweite des Landes³.",
        "Sie floh aus der Stadt darüber, um der Schuldknechtschaft zu entgehen. Sie ist wie eine Straßenkatze: misstrauisch, räudig, ein wenig erbärmlich und scharfkrallig. Vor allem aber ist Felise eine Überlebende; welche Wünsche sie auch haben mag, sie mauert sie ein, damit sie sie nicht tiefer ins Heart locken können.",
        {t: "h", x: "Kopfgeldjäger"}
      ],
      figuren: [
        {
          id: "kopfgeldjaeger", t: "Kopfgeldjäger", p: 27, text: [],
          namen: "Hrack, Big Kettle, Little Kettle, Skinner",
          besch: "Ein lässig bedrohliches Auftreten, das auf eine entspannte Haltung zu Gewalt schließen lässt; Unauffällige, leicht wegwerfbare Ponchos; Schmutzige Kleidung, aber gut gepflegte Waffen; Tötungskerben in einem Gewehrlauf; Roter Faden als Zeichen einer unbezahlten Schuld.",
          motiv: "Geld; Der unbewusste Drang, sich gegen das vordringende Heart zur Wehr zu setzen, bevor es sie verschlingt, ausgedrückt in eifriger Gewalt; Aber hauptsächlich Geld.",
          schw: "Standard", res: "6", schutz: "2*",
          ressourcen: "Sie wurden nicht im Voraus bezahlt – kratze lose Münzen, Ersatzausrüstung, intakte Organe und andere halbwegs wertvolle Dinge zusammen, für insgesamt (W6 Haven)",
          ausr: "Jagdgewehr (Kill W6, Ranged, Reload); Abgesägte Schrotflinte (Kill W6, Point-Blank, Reload); Knüppel, Messer und Andere Gewalttätige Gerätschaften (Kill W6, Brutal)",
          besonders: "Schutz 2 gegen Kill.",
          dom: ["Haven", "Warren"],
          fallout: [
            {t: "Ausgeraubt", r: "Blood/Fortune", s: "leicht", x: "Du bist benommen, und dein Körper wird von den Halunken geplündert; verliere einen Gegenstand oder eine Ressource, die die SL bestimmt. [Sofort]"},
            {t: "Entführt", r: "Blood/Fortune", s: "schwer", x: "Wie **Ausgeraubt**, aber du bist für eine kurze Weile aus dem Spiel, während derer du … nun ja, du hast nur vage, von Drogen vernebelte Erinnerungen an dein Verhör. Wenn du zurückkehrst, tausche dies gegen **Beaten but not Broken** oder **You Gave In**. [Anhaltend]"},
            {t: "Beaten But Not Broken", r: "Blood", s: "schwer", x: "Du wurdest bis kurz vor den Tod verprügelt. Bis du geheilt bist, würfelst du bei Proben W8 statt W10. [Anhaltend]"},
            {t: "You Gave In", r: "Fortune", s: "leicht", x: "Du hast deinem Verhörer etwas erzählt, aber du weißt nicht, was. Irgendwann in der Zukunft wird die ganze Gruppe wegen dem, was du ausgeplaudert hast, einen Rückschlag oder zusätzliche Gefahr erleiden. Aber hey, deine Fingernägel durftest du behalten. [Anhaltend]"}
          ]
        }
      ]
    },
    {
      t: "Toter Mann mit Knarre", p: 28,
      b: [
        "**Toter Mann mit Knarre:** Wähle eine der Spielerfiguren – idealerweise die netteste und mildeste, falls diese Beschreibungen auf irgendeine zutreffen. Während diese Figur ihren netten, milden, harmlosen Geschäften nachgeht, taucht ein halb wahnsinniger Dunkelelf aus den Schatten auf und hält ihr eine Waffe ins Gesicht. Dieser Möchtegern-Attentäter ist **Helskir**. Er ist den ganzen Weg aus der Amyrran Zone (S. 57) gekommen, so tief im Heart, dass die Zeit dort seltsam verläuft. Er hat viele Schrecken gesehen – aber keinen so furchtbar wie das Ding, das die Spielerfigur in einer möglichen Zukunft tun *könnte*. Also will Helskir den ahnungslosen Urheber dieses Albtraums präventiv ermorden.",
        "Helskir kennt den Namen der Spielerfigur und eine Menge über sie (oder, genauer gesagt, über die Amyrran-Version von ihr), aber er ist so erschöpft und traumatisiert, dass sein Gestammel kaum Sinn ergibt. Im Moment muss der Spieler nur wissen: 1) dieser Elf glaubt, sie hätten etwas Furchtbares getan, 2) da ist eine Waffe in ihrem Gesicht.",
        "Keine halben Sachen bei Helskir: Er kämpft bis zum Tod. Wird er auf Resistenz 0 gebracht, kommt er weiter, bis eine der Spielerfiguren ihn niederstreckt.",
        {t: "ul", x: [
          "Eine Durchsuchung der Leiche des Elfen fördert einen merkwürdigen Talisman mit einem arkanen Sigil zutage. Jeder mit Discern oder **Occult** vermutet, dass es das Sigil einer menschlichen Zaubererseekte ist, was für einen Dunkelelfen ein seltsamer Besitz ist. Eine erfolgreiche **Discern+Occult**-Probe identifiziert es als das Sigil der aufgelösten Gwynn-Ardasi-Kabale, einer Gruppe von Retro-Ingenieuren, die sich vor etwa einem Jahrhundert spaltete. Die Überlebenden gründeten die angesehene Akademie von Gywnn-Enforr in der Stadt darüber.",
          "Wer an einem Ort wie Coinpit (S. 30) nach der Gwynn-Ardasi-Kabale fragt, wird auf die Legende vom Eastern Express (S. 44) hingewiesen.",
          "Die Waffe könnte das zeitverschobene Duplikat einer Lieblingswaffe einer der anderen Spielerfiguren sein (siehe **Seltsam vertraut**)."
        ]}
      ],
      figuren: [
        {
          id: "helskir", t: "Helskir", p: 28, text: [],
          namen: null,
          besch: "Riecht nach Ziege; Nervöse, zuckende Blicke auf Dinge, die du nicht sehen kannst; Spricht seinen ständigen inneren Monolog laut aus.",
          motiv: "Das Schreckliche abwenden, das Schreckliche, du hast es getan, du wirst es tun, es ist eine Gnade, wirklich eine Gnade, das zu tun, um jenes nicht zu tun, er hat gesehen, er hat gesehen, du hast den Dolch gesehen, und die Wunde wird niemals aufhören zu bluten, nicht, solange sie nicht gestoppt wird, nie geschehen, das Schreckliche, er muss das Schreckliche abwenden …",
          schw: "Standard", res: "8", schutz: "1",
          ressourcen: "Zerlumpte Wurmhaut-Rüstung (W6 Wild); Eine Tasche voll winziger Zahnräder und Getriebeteile (W8 Technology); Farbbefleckte Finger (W8 Occult, Taboo)",
          ausr: "Die Waffe (Kill W8, Brutal, Point-Blank, One-Shot); Messer und Zähne und Verzweiflung (Kill W6)",
          besonders: null,
          dom: ["Cursed", "Warren"],
          fallout: []
        }
      ]
    },
    {
      t: "Seltsam vertraut", p: 28,
      b: [
        "**Seltsam vertraut:** Beim Stöbern auf einem Trödelmarkt, beim Durchsehen der Beute nach einem blutigen Kampf oder beim Betrachten der Antiquitäten eines exzentrischen Sammlers entdeckt eine der Spielerfiguren einen Gegenstand, der seltsam vertraut wirkt. Er sieht genau aus wie ein persönlicher Gegenstand von ihr (eine Waffe, ein Werkzeug, ein kostbarer Edelstein, der zweitbeste Dolch ihrer Mutter), ist aber angeschlagen und abgenutzt, als hätte er viele Jahre mehr harten Gebrauch hinter sich.",
        "Je länger die Figur den Gegenstand anstarrt, desto unheimlicher erscheint er. Er hat dieselben Kratzer und Markierungen wie der im Besitz der Figur. Er fühlt sich gleich an, sieht gleich aus – aber er ist *älter*. Dieser ältere Gegenstand stammt aus der Coinpit (S. 30)."
      ]
    },
    {
      t: "Von der Universität angeheuert", p: 29,
      b: [
        "**Von der Universität angeheuert:** Gemeinwohlorientierte Delver könnten von der Tower Division angeheuert werden, um nach der vermissten Expedition unter Egrin Weselsmith (S. 110) zu suchen. Die Expedition ist schon so lange verschollen, dass man sie für tot hält – doch die Ermittler finden auf dem Markt in Coinpit (S. 30) ein Stück Expeditionsausrüstung."
      ]
    },
    {
      t: "Ptolemy Bay überrollt ein Haven", p: 29,
      b: [
        "**Ptolemy Bay überrollt ein Haven:** Während die Spielercharaktere in einem Haven sind, tauchen Ptolemy Bay treu ergebene Kräfte auf. Ihr Ziel könnte sein, Hinweise zu sichern, die zum Eastern Express weisen, oder einfach, das Haven in eine von Bays vorübergehenden Waffenfertigungs-Werkstätten zu verwandeln. So oder so erscheint ein Haufen schwer bewaffneter Bastarde (S. 112) und schlägt gleichzeitig an allen bekannten Ausgängen zu. Ein Rattern von Gewehrfeuer, dann ein Ultimatum: ergeben, oder sie fluten den Ort mit Gas. Bays Unternehmen ist gut geölt – sie wählen Havens ohne starke Beschützer wie Vermissian Knights und bestechen potenzielle Hindernisse. Die Anwesenheit von Spielercharakteren ist eine unerwartete Wendung.",
        "Läuft alles nach Plan, wird das Haven in eine vorübergehende Fabrik verwandelt, ein bewaffnetes Lager zur Verarbeitung und Destillation von Substanzen, die tiefer im Heart (etwa in den Red-Litten Caves, S. 95) oder hoch in Spire gesammelt wurden. Weitere Karawanen voller Bays Diener rollen in die Stadt und führen zerlegte Industrieanlagen mit sich. Zunächst herrscht eine Art Jahrmarktstimmung, während seltsame Maschinen aus dem Boden schießen und über dem Haven aufragen. Dann kommt das Rohmaterial, und die Arbeit beginnt. Kessel mit gekochtem Spireblack, Bottiche mit Protomaterie, Heartsblood-Brennapparate, Grabeserde von den Begräbnisstätten von Hexen, die Innereien von Godbeasts und die Knochen von Angels, gerührt und geröstet und zu Staub zermahlen. Giftige Dämpfe, alchemistische Abwässer und Alraunenflüche ergießen sich ins Haven und verderben die zur Arbeit verpflichtete Belegschaft und ihre Heimat für immer.",
        "Bay rekrutiert neue Soldaten aus den gesündesten Überlebenden. Sie haben ja sonst nirgendwo hin."
      ]
    }
  ],
  lm: [
    {
      id: "tooth-alley", t: "Zahngasse", p: 29, tiefe: 0,
      dom: ["Haven", "Desolate"], stress: "W4",
      haunts: ["‚Doktor‘ Varakins präventive Zahnmedizin (W8 Blood/Echo)", "Eine ruhige Einzimmerwohnung in einem oberen Stockwerk (W6 Mind)"],
      text: [
        "Die Zahngasse liegt direkt am blutenden Rand des Heart. Sie ist ein Teil der Stadt darüber – vorerst jedenfalls. Tag für Tag, nach und nach – Zahn für Zahn – wird sie nach unten gezogen. Sie heißt Zahngasse, nun ja, wegen der Zähne. Es ist nicht so, dass *alles* in der Zahngasse Zähne hat, nur dass Zähne an Dingen wachsen, die keine haben sollten. Türknäufe, Fensterrahmen, Bücher, Teetassen. Schnecken und Spinnen, Finger und Augäpfel und Kniekehlen, Müll im Wind oder gerahmte Bilder deiner Großmutter. Zähne. Deine Großmutter, ebenfalls Zähne. Die Einheimischen versuchen, die wachsende Fülle abartiger Bezahnung zu ignorieren, denn abgesehen von den Zähnen ist es ein sicheres Viertel, und es ist ja nicht so, dass schon irgendwelche *Leute* gefressen worden wären."
      ],
      ressourcen: [
        "Krempel von unten, den die Leute nicht haben wollen und billig hergeben (W4 Any), denn das hier ist kein Teil des Heart, verdammt noch mal. Das hier ist ein normaler Ort. (Enthält möglicherweise eine Verbindung, die zur Black Casern weist, S. 42, oder einen Gegenstand, der mit einer alternativen Version einer SC verbunden ist.)",
        "Jede Menge unerwünschter Zähne (W6 Wild)."
      ],
      plots: [
        "Marjea, die örtliche Priesterin der Mondgöttin, glaubt, dass die Zähne Omen sind, die das Nahen einer schrecklichen Bestie ankündigen. Erschlage die Bestie, bevor sie die Zahngasse beißt, und der Fluch endet. (W8 Religion)",
        "Eines der verlassenen Häuser in der Zahngasse ist kein Haus mehr. Statt Zimmern hat es Mägen, und unter dem bröckelnden Putz liegt rotes Fleisch. Warum also hat jemand angefangen, an diese Adresse zu schreiben? (W6 Occult – wenn du die Briefe liest)",
        "Ptolemy Bay überrollt ein Haven, S. 29."
      ],
      figuren: [], unter: [], regeln: null
    },
    {
      id: "mandrake-gardens", t: "Alraunengärten", p: 30, tiefe: 1, tiefeText: "1 oder 2",
      dom: ["Desolate", "Cursed"], stress: "W6",
      haunts: ["Lagerplatz der bitteren Gemüse (W6 Echo)"],
      text: [
        "Die Alraunengärten waren einst ein sicherer Ort am Rand des Heart. Vielleicht ein Fragment eines Traums, Wirklichkeit geworden, oder die Erinnerung eines Menschen, der sein geliebtes Zuhause verlassen und nach Spire kommen musste: ein grünes Tal, umsäumt von Wald, der sich um dich herum verdichtete und verdunkelte, bis du unmerklich nicht mehr eine baumgesäumte Gasse entlangginst, sondern einen steinernen Korridor. Im Tal lag ein kleines Dorf, in Nebel gehüllt. Es war – ist noch immer – ein Inbegriff von Ruhe und Gelassenheit. In manchen Kreisen sagt man noch heute „er ist in die Alraunengärten gegangen“ als Euphemismus für einen sanften, unhastigen Tod.",
        "Hier zu leben war wie Einschlafen. Dann kam Ptolemy Bay (S. 6). Das Haven wurde dem Erdboden gleichgemacht und in eine Waffenfabrik umgewandelt, die Einwohner zur Arbeit in den Gießereien und Verarbeitungsanlagen gezwungen. Als das Gebiet unbewohnbar wurde, gaben sie die Fabrik auf und zogen zu einem anderen unglücklichen Teil des Heart weiter.",
        "Was bleibt, ist ein verseuchtes Tal, umgeben von einem toten Wald. Es ist noch immer in Nebel gehüllt, aber der Nebel hat den gelblichen Stich von Giftgas. Es gibt noch immer ein Dorf, aber es besteht nur aus leeren Hütten und den skelettartigen Überresten verfallener Industrieanlagen.",
        "Und es ist noch immer bewohnt. Unter den vom Heart hervorgebrachten Schrecken, an denen Bay hier experimentierte, war eine Form von Wild-ausgerichteter Gemüseessenz, und ihre Rückstände vermischten sich mit den bitteren Geistern derer, die hier lebten. Unheimliche Alraunengeschöpfe – menschlich in Gestalt und Größe, aber aus verschlungenen Wurzeln – kriechen aus der Erde und schlurfen umher. Sie haben keinen Mund, aber mit ihren Astlochaugen flehen sie um Rache."
      ],
      ressourcen: [
        "Übrig gebliebene Waffenüberreste, giftig und/oder flüchtig (W6 Technology)",
        "Tiernachahmende Gemüseessenzen (W6 Wild)"
      ],
      plots: [
        "Die Alraunengeschöpfe bieten an, einen verwundeten Delver zu heilen (bis zu W10 Blood-, Mind- oder Echo-Stress), doch als Teil des Heilungsritus muss der Delver eine vergiftete Frucht verzehren, die aus ihrem Pflanzenfleisch wuchs. Die Frucht zu essen bedeutet, dass der Delver die Erinnerung an den Überfall durch Ptolemy Bay teilt und vom Wunsch nach Rache verzehrt wird …",
        "Rachsüchtige Alraunengeschöpfe schleichen sich aus den Alraunengärten auf der Suche nach Ptolemy Bay, die Embleme der Waffenschmiede umklammernd. Unfähig, lange außerhalb ihres Heimatbodens zu überleben, gehen sie ein und verrotten und hinterlassen rätselhafte Überreste, die die Delver finden können (und fruchtbaren Boden, auf dem Fruit-of-the-Rot-Monster, S. 13, entstehen können)."
      ],
      figuren: [], unter: [], regeln: null
    },
    {
      id: "coinpit", t: "Coinpit", p: 30, tiefe: 1, tiefeText: "1, nahe dem Grund 2",
      dom: ["Occult", "Technology"], stress: "W4",
      haunts: [
        "Granny Grimgroths Wohnzimmer (W6 Mind oder Body, W10 Supplies – aber wenn du nicht jedes Mal, wenn du hierher zurückkehrst, Handelsware im Wert von mindestens W6 Supplies mitbringst, bricht Granny dir die Kniescheiben)",
        "Der Schiefe Turm der Truesquare-Geomagier (W6 Echo)"
      ],
      text: [
        "Früher war Coinpit eine ganz normale Straße – ziemlich normal jedenfalls. Sie war immer ein Tummelplatz für Hinterhof-Zauberer, experimentelle Retro-Technologen, deviante Kulte, Händler mit Antiquitäten und Relikten fragwürdiger Herkunft und andere zwielichtige Sonderlinge. Vor einigen Jahren erlangte ein menschlicher Junk Mage namens Heresh Spellfule eine geheimnisvolle Mappe mit Papieren aus den Tiefen des Heart. Welche Formel dort auch verschlüsselt war, sie war Hereshs Verhängnis – sein Laden verschwand über Nacht in einem schreienden, anscheinend bodenlosen Abgrund, umringt von Höllenfeuer. Seine Nachbarn zuckten mit den Schultern, stellten einen Holzzaun um die heulende Leere (das Schild „ABGRUND – BETRETEN VERBOTEN“ kam erst später dazu, nach Beschwerden) und widmeten sich wieder dem Ausnehmen von Idioten, die auf der Suche nach arkaner Macht kamen.",
        "In den Jahren seither hat der Abgrund Coinpit verformt. Die ganze Straße kippt in das Loch. Es geschah langsam genug, dass die Leute sich anpassen konnten, aber jetzt ist Coinpit eine nahezu senkrechte Grube, gesäumt von Leitern und Seilstegen, die über dem heulenden Abgrund gespannt sind. (Der Holzzaun mit dem höflichen Schild steht noch immer da, halb begraben unter der Geröllhalde aus Krempel, die herabgefallen ist und sich dort verkeilt hat.) Die Bewohner sind seltsam stolz auf ihre Vertikalität – sie verstärkt die okkulte Mystik, und manche von ihnen haben den Abgrund für arkane Kraft angezapft."
      ],
      ressourcen: [
        "Coinpit ist ein großartiger Ort, um okkulte Nippes, Kuriositäten und zufällige Fundstücke aufzutreiben (W4, W6 oder W8, je nachdem, wie tief du gehst – aber es besteht immer die Chance, etwas zu finden, das fälschlich als Krempel einsortiert wurde)"
      ],
      plots: [
        "Niemand weiß so recht, wohin dieser Abgrund führt. Jedenfalls ist noch niemand zurückgekommen. Warum lasst ihr euch nicht hinab und stochert ein wenig darin herum? (Möglicherweise ein kurzer, hochintensiver Delve zu einer anderen Landmarke – wie Tollembrood, S. 39, oder dem Aetherstorm, S. 100.)"
      ],
      figuren: [], unter: [],
      regeln: [
        {t: "kasten", h: "Fallout: Lieblingsschal vom Seilsteg fallen lassen [Fortune, leicht]", b: ["Alle Handlungen, die nicht direkt damit zu tun haben, deinen Lieblingsschal zurückzubekommen, sind **Riskant**, es sei denn, sie wären stattdessen **Gefährlich**. [Anhaltend]"]},
        {t: "kasten", h: "Fallout: Vom Seilsteg gestürzt [Fortune, schwer]", b: ["Du fällst also in einen angeblich bodenlosen Abgrund. Denk schnell nach und opfere ein Stück Ausrüstung, um deinen Sturz zu stoppen. Hast du keine geeignete Ausrüstung, wird dies zu **Den Grund gefunden**. [Sofort]"]},
        {t: "kasten", h: "Fallout: Den Grund gefunden [Fortune, kritisch]", b: ["**Die gute Nachricht:** Der Abgrund ist nicht bodenlos.", "**Die schlechte Nachricht:** Du hast gerade den Boden gefunden."]}
      ]
    },
    {
      id: "shuntyard", t: "Shuntyard", p: 31, tiefe: 1,
      dom: ["Desolate", "Technology"], stress: "W6",
      haunts: ["Verlassene Vermissian-Kantine und Lagerschuppen (W8 Supplies)"],
      text: [
        "Ein Friedhof aus Eisenbahnwaggons. Stapel von Eisenbahnschwellen wie rätselhafte Monumente. Rostende Maschinen, in Backsteinschuppen gelagert. Regen, der in öligen Pfützen plätschert, das einzige Licht die ferne, schaukelnde Laterne eines Nachtwächters.",
        "Nach dem Scheitern des Vermissian-Projekts wurden die verschiedenen Stationen versiegelt und aufgegeben.",
        "Alle Züge sollten zum Shuntyard gebracht werden, einer Lageranlage an der Pulse-Linie, zur Außerdienststellung, Lagerung und schließlichen Verschrottung. Weniger als die Hälfte der Züge kam tatsächlich hier an, der Rest wurde gestohlen, blieb stecken oder ging auf den Linien verloren.",
        "Heutzutage sind hier nur noch die Waggons gelagert; die eigentlichen Lokomotiven wurden anderswohin gebracht, auch wenn es immer möglich ist, dass sich eine oder zwei zwischen den Waggons verirrt haben. Dennoch ist es ein reicher Humus aus Ersatzteilen und Altmaterial, mit seinen endlosen Reihen leerer Waggons – den billigen Personenwagen für die Fathom-Linie, den bunten Farben und abblätternden Plakaten der Candle-Linie, den unheimlichen Luxuswagen und Privatwaggons der Loft.",
        "Der Shuntyard wurde auch zur De-facto-Operationsbasis jener unglücklichen Drow-Arbeiter, die angeheuert wurden, um die Vermissian-Linie tatsächlich zu versiegeln (das Office of Closure and Mitigation, auch OCM). Stapel von Ziegeln, markiert mit Sigils der Abwehr und Eindämmung, skizzierte Karten der adergleichen Ausläufer der Pulse-Linie und Notizen zu Stationen, die auf keiner Karte auftauchen (wie White Station, S. 66)."
      ],
      ressourcen: [
        "Ausgeschlachtete Zugkomponenten und anderes Altmaterial (W6 Technology, für einen Vermissian Knight mindestens W8 wert)",
        "Geheimnisvolle Papiere und Broschüren, verformt vom ersten Puls der Heart-Energie, der die Linie hinabspülte, mit okkulten Geheimnissen, eingebettet in Fahrpläne und Touristenprospekte (W6 Cursed)"
      ],
      plots: [
        "Der alte Vorarbeiter **Pizaer Lackhope** bittet die Delver, eine Geisterstation zu untersuchen, die auf einigen alten Vermissian-Bauplänen auftaucht, aber auf keiner der offiziellen Karten – die Black Casern (S. 42).",
        "**Kelther**, ein Jugendfreund eines der Delver, bittet sie um Hilfe. Sein aufsässiges Kind treibt sich mit einer Bande von Drow-Rowdys herum; die Bande versuchte, den Shuntyard auszurauben, und wurde von einem Nachtwächter erwischt. Wird das Kind den Behörden der Stadt darüber übergeben, wird es unverhältnismäßig bestraft, als Exempel für andere. Aber wenn die Delver hineinschleichen und den Jungen befreien könnten, bevor die Stadtwache eintrifft, nun, dann stünde er in ihrer Schuld. Und sie dürfen den Krempel behalten, den der Junge gestohlen hat, als Lektion für den Burschen."
      ],
      figuren: [
        {
          id: "vermissian-nachtwaechter", t: "Vermissian Night Watchman", p: 32,
          text: ["Diese Konstrukte entstehen aus Zuglokomotiven, die beim Vermissian-Zwischenfall von Chaosenergie getroffen wurden. Zyklopenlampen-Augen, Maschinengehirne, Gliedmaßen aus verbogenen Schienen – die Nachtwächter klirren und stapfen um die Kadaver ihrer Mitzüge. Sie haben einen gewissen Instinkt, die Wracks des Vermissian zu beschützen – oder zu betrauern, sodass das OCM die Schrecken zur Bewachung von Zugdepots und verlassenen Stationen einsetzt."],
          namen: "Die Lokomotiven sind alle nummeriert, auch wenn der chaotische Einfluss des Heart bedeutet, dass die Nummern nicht immer echt sind. OCM-Wächter geben den Nachtwächtern Spitznamen – Greeneye, Old Biter, Little Stomper, der Sergeant Major, Mr. Grumpy",
          besch: "Der Geruch von Maschinenöl und brennendem Spireblack; Das klagende Heulen von Zugpfeifen; Zähne wie Kolben und zermalmende Zahnräder; Hakenhände aus Zugkupplungen.",
          motiv: "Die Nachtwächter scheinen die verlassenen Züge für die geehrten Toten zu halten und trachten danach, die Überreste ihrer Verwandten vor Grabräubern zu verteidigen.",
          schw: "Standard*", res: "15", schutz: "3",
          ressourcen: "Scheinwerfer-Trophäe (W8 Cursed), Zugeingeweide (W8 Technology)",
          ausr: "Massive Presslufthammer-Fäuste (Kill W10)",
          besonders: "Schwierigkeit Standard (aber siehe Transfixed by the Head-lamp).",
          dom: ["Technology", "Cursed"],
          fallout: [
            {t: "Transfixed by the Head-lamp", r: "Fortune", s: "leicht", x: "Der Nachtwächter richtet sein Licht auf dich! Bis du aus dem Blickfeld bist, steigt die Schwierigkeit des Nachtwächters auf **Gefährlich**. Diese Erhöhung der Schwierigkeit gilt für alle Spielercharaktere, nicht nur für dich. [Anhaltend]"}
          ]
        }
      ],
      unter: [], regeln: null
    }
  ],
  delves: [
    {
      id: "coinpit-shuntyard", t: "Coinpit zum Shuntyard", p: 31,
      von: "coinpit", nach: "shuntyard", tiefe: 1,
      dom: "Technology, Desolate", stress: "W4", res: 12,
      besch: "Betonierte Versorgungstunnel, gesäumt von dicken Kabeln und Rohren, in unwahrscheinlichen Winkeln verdreht; Sump-Tanks aus verklumptem Motoröl und Bremsflüssigkeit; Misthaufen aus Knochen und anderem Unrat, der in die Coinpit gefallen ist; Zugemauerte Durchgänge, versiegelt mit dem Sigil des OCM.",
      erg: [
        "Unrat, der in die Coinpit geworfen wurde – Münzen, Giftmüll, frisch getötete Leichen – landet auf dem Delver.",
        "Plünderer, die mit gestohlener Vermissian-Technik aus dem Shuntyard fliehen, halten die Delver für Wachen.",
        "Zugbeobachter-Geister flehen darum, Lokomotive Nummer 248 sehen zu dürfen, damit sie endlich ruhen können.",
        "Kryptische Graffiti preisen die Hungry Deep; aufgesprühte Sigils strahlen magische Verzweiflung aus.",
        "Ziegenbekämpfungs-Techniker aus der Stadt darüber besprühen die Tunnel mit Giftgas.",
        "Die Coinpit sackt weitere ein paar Fuß ab und löst Einstürze entlang der Linie aus."
      ],
      verb: "Solange die Nachtwächter nicht wissen, dass ihr unbefugt in den Shuntyard eingedrungen seid, ist diese Route stabil.",
      express: false
    }
  ],
  rest: [],
  dok: []
};
