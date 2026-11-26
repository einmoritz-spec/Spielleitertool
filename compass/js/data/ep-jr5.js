/* Jolly Roger – Staffel 2, Folge 5 „Schatzinsel“ (Buch S. 196–207, Kontext „Der Fluch von El Dorado“ S. 198–201), Buch-ID bc_a1 */
BC_EP["jr5"] = {
  id: "jr5", t: "Schatzinsel", lab: "Staffel 2 · Folge 5", c: "#6e1414",
  b: "bc_a1", s: 196, img: "jr/jr5-el-dorado",
  intro: [
    {t: "prose", p: [
      "In Folge 5 „Schatzinsel“ sind die Abenteurer an einem wilden Ort gestrandet, nur einen Steinwurf von ihrem begehrten Schatz entfernt. Nachdem sie gegen das freie Volk und seine Fallen gekämpft haben, erreichen die Abenteurer schließlich einen uralten Tempel, das Versteck eines schrecklichen Geheimnisses.",
      "Um diese Folge zu spielen, musst du Folgendes wissen:"
    ]},
    {t: "cards", cols: 3, items: [
      {h: "Epoche", p: "Wann die Geschichte spielt."},
      {h: "Wilder Ort", p: "Das Herz des Amazonas-Regenwalds, die verschneiten Gipfel Nepals, die Sahara. Jeder schwer erreichbare und schwer zu erkundende Ort voller Gefahren ist gut genug!"},
      {h: "Freies Volk", p: "Eine Gruppe von Menschen, die denselben Kult, Glauben oder dasselbe Ideal teilen. Sie halten sich nicht an gewöhnliche Obrigkeiten und beugen sich ihrer Macht nicht."},
      {h: "Goldene Waffe", p: "Ein rituelles oder traditionelles Artefakt, das in Form einer Waffe gearbeitet und vollständig aus Gold gefertigt ist."},
      {h: "Schreckliches Geheimnis", p: "Eine erschütternde Entdeckung über den Schatz oder seine Natur, die die Abenteurer ihr Vorgehen und ihre Ziele überdenken lässt."},
      {h: "Schatz", p: "Das A und O des Abenteuers. Alle Abenteurer sind hinter ihm her, und auch wenn sie ihn in dieser Folge nicht finden werden, ist es gut zu wissen, wonach sie suchen."},
      {h: "Tempel", p: "Ein großes Gebäude aus ferner Vergangenheit. Wer es erbaut hat, hat an jeder Ecke Fallen und Rätsel verteilt, um Eindringlinge am Betreten zu hindern, oder daran, lebend wieder herauszukommen."},
      {h: "Rätsel", p: "Ein Rätsel, das die Abenteurer lösen müssen, um eine Tür zu öffnen, einer Falle zu entgehen oder mit ihrem Abenteuer weiterzukommen."},
      {h: "Wächter", p: "Eine Person oder ein Wesen, natürlich oder übernatürlich, das geschworen hat, einen Ort oder einen Gegenstand zu beschützen."}
    ]},
    {h: "Zeit", s: 197},
    {t: "box", h: "Das Rätsel", p: [
      "**Um Zutritt zum Tempel zu erhalten, müssen die Abenteurer ein Rätsel lösen, das du im Skript dieser Folge nicht finden wirst. Du musst dir je nach Kontext selbst eines ausdenken.**",
      "Wenn dir die Ideen ausgehen, kannst du dich von dem inspirieren lassen, das du weiter hinten im Kontext von „Der Fluch von El Dorado“ lesen kannst. Alternativ könntest du auch eine Kritische Herausforderung: Zäh einbauen, um die Tür einzuschlagen, oder eine Kritische Herausforderung: Fingerfertigkeit, um das Schloss zu knacken."
    ]},
    {t: "prose", p: [
      "In dieser Folge können die Abenteurer eine Stunde auf der Weltuntergangsuhr verlieren. Spielst du diese Folge als Teil einer Staffel, kannst du das Logbuch benutzen, um diesen Wert festzuhalten. Spielst du sie dagegen als eigenständige Folge, kannst du Zeit als Ressource ignorieren."
    ]},
    {h: "Diese Folge innerhalb einer Staffel spielen", s: 197},
    {t: "prose", p: [
      "Wenn du dich entscheidest, Folge 5 innerhalb einer Staffel zu spielen, musst du vielleicht die erste Szene anpassen, um sie mit der vorherigen Folge zu verknüpfen. Die Abenteurer haben vielleicht noch ihre gesamte Ausrüstung bei sich, oder sie müssen sich an einem Sicheren Ort ausruhen, bevor es weitergeht.",
      "Gib den Abenteurern die Zeit, die sie brauchen, um zu essen und die Lage einzuschätzen, bevor der letzte Akt beginnt. Wenn nötig, teile diese Folge gern auf zwei Sitzungen auf."
    ]}
  ],
  ctx: [
    {k: "epoche", l: "Epoche", v: "Jolly Roger"},
    {k: "wilder_ort", l: "Wilder Ort", v: "Eine tropische Insel"},
    {k: "freies_volk", l: "Freies Volk", v: "Eine Gemeinschaft von Ureinwohnern Südamerikas"},
    {k: "goldene_waffe", l: "Goldene Waffe", v: "Goldener Macuahuitl"},
    {k: "geheimnis", l: "Schreckliches Geheimnis", v: "El Dorado ist ein Kind"},
    {k: "schatz", l: "Schatz", v: "El Dorado"},
    {k: "tempel", l: "Tempel", v: "Der Goldene Tempel"},
    {k: "raetsel", l: "Rätsel", v: "Der Wunsch des Königs"},
    {k: "waechter", l: "Wächter", v: "Ein riesiges Krokodil"},
    {k: "fahrzeug", l: "Fahrzeug", v: "Das Schiff der Abenteurer"}
  ],
  scenes: [
    {t: "Ankunft am Wilden Ort", short: "Ankunft", ort: "AUSSEN/TAG", s: 202, blocks: [
      {t: "n", p: [
        "Als die Abenteurer die Augen öffnen, sind sie an einem Wilden Ort ({P:wilder_ort}) verloren, von den anderen getrennt. Ihre Kleidung und Ausrüstung sind in ziemlich schlechtem Zustand, eine körperliche Erinnerung an die Wut des Sturms, der sie hierhergeführt hat, verschollen oder gestrandet. In der Ferne ist die Silhouette ihres Fahrzeugs ({P:fahrzeug}) zu sehen: Es ist eindeutig zerstört und außer Betrieb.",
        "Die gute Nachricht ist, dass tiefer im Wilden Ort das Versteck ihres begehrten Schatzes ({P:schatz}) liegt.",
        "Der einfachste Weg, die anderen zu finden, ist, zum Wrack des Fahrzeugs zu gehen, da es ein deutlich sichtbarer Orientierungspunkt ist. Unterwegs können Abenteurer mit guten Beobachtungsfähigkeiten {K:H|Kritische Herausforderung} zwischen den Trümmern einen nützlichen Gegenstand finden. Außerdem können Abenteurer mit guter Überlebensausbildung {K:H|Kritische Herausforderung} Teile des Fahrzeugs und etwas anderes, das sie in der Natur finden, benutzen, um eine primitive Waffe zu bauen. Scheitert eine dieser Proben, bleibt der Abenteurer zurück, kommt vom sicheren Weg ab oder bewegt etwas, das man besser in Ruhe gelassen hätte, und erregt die Aufmerksamkeit hungriger Bestien {K:F|2 einfache Feinde}.",
        "Haben alle Abenteurer den Weg zum Fahrzeug gefunden oder die Tiere besiegt, können sie sich endlich wieder versammeln und einander umarmen, bevor sie sich auf den Weg zum Schatz machen. Ihr Abenteuer geht dem Ende entgegen."
      ]}
    ]},
    {t: "Wilder Ort", short: "Wilder Ort", ort: "AUSSEN/TAG", s: 203, blocks: [
      {t: "n", p: [
        "Nachdem sie in den Wilden Ort aufgebrochen sind, müssen sich die Abenteurer ihren Weg durch die üppige Vegetation bahnen. Die Blätter sind dick und groß, die Sicht ist schlecht, aber der Weg scheint sicher genug, und vor allem scheint es sehr still. Die Schritte der Abenteurer sind das einzige Geräusch und hallen fast in der unheimlichen Stille wider.",
        "Das erweist sich als nützlich, als der erste Abenteurer in der Reihe auf den Auslöser einer primitiven Falle tritt und sie plötzlich auslöst. Mit Dornen gespickte Holzbretter sausen auf die Abenteurer zu, die sich mit einem Stunt aus dem Weg werfen müssen {K:G|Kritische Gefahr}.",
        "Ist der zweite Abenteurer, hinter dem, der auf den Auslöser getreten ist, mit offenen Augen unterwegs und wachsam {K:H|Kritische Herausforderung}, kann er das Klicken des Auslösers bemerken und die anderen vor der Gefahr warnen, sodass er selbst und alle hinter ihm einen Vorteil erhalten.",
        "Diese Falle macht die Abenteurer auf neue Gefahren aufmerksam und flößt ihnen neue Vorsicht ein. Was könnte als Nächstes kommen? Wenn man jedoch darüber nachdenkt, bedeutet sie auch, dass sie auf dem richtigen Weg sind. Nur jemand, der den Schatz ({P:schatz}) beschützen will, käme auf die Idee, hier Fallen zu bauen. Abenteurer, die technisch versiert genug sind {K:H|Kritische Herausforderung}, können die Falle untersuchen und erkennen, dass sie noch nicht lange her gebaut wurde. Das heißt, dass der Wilde Ort bewohnt ist und wahrscheinlich weitere Fallen vor ihnen liegen.",
        "Die Abenteurer müssen dann mit Schleichen und Vorsicht weitergehen {K:H|Einfache Herausforderung}, um sie nicht auszulösen. Misslingt es einem von ihnen, tritt er an die falsche Stelle, und alle Mitglieder der Gruppe müssen einer Reihe von Stacheln ausweichen {K:G|Kritische Gefahr}."
      ]}
    ]},
    {t: "Das Freie Volk", short: "Freies Volk", ort: "AUSSEN/TAG", s: 204, blocks: [
      {t: "n", p: [
        "Nachdem sie den Landstrich mit den verstreuten Fallen hinter sich gelassen haben, gelangen die Abenteurer endlich in einen Bereich des Wilden Orts, in dem die Vegetation weniger dicht ist. Die Stille bleibt ungebrochen, aber Abenteurer mit guten Beobachtungsfähigkeiten {K:H|Kritische Herausforderung} können erkennen, dass das Gras vor ihnen vor nicht allzu langer Zeit niedergetreten wurde. Aus dem Augenwinkel sehen sie etwas bedrohlich zwischen der Vegetation aufblitzen. Nicht weit entfernt lauert eine Gruppe bewaffneter Angehöriger des Freien Volks ({P:freies_volk}), um die Abenteurer in einen Hinterhalt zu locken {K:F|3 kritische Feinde}.",
        "Hat ein Abenteurer sie rechtzeitig bemerkt, erhält seine Gruppe einen Vorteil auf die nächste Aktion. Andernfalls scheint das Freie Volk aus dem Nichts zu erscheinen, und alle Abenteurer erleiden einen Nachteil.",
        "Das Freie Volk spricht eine fremde Sprache, aber seine Haltung macht deutlich, dass die Anwesenheit der Abenteurer es beunruhigt. Nachdem sie die Abenteurer umzingelt haben, richten sie ihre Waffen auf sie.",
        "Versuchen die Abenteurer, mit dem Freien Volk zu sprechen, vorausgesetzt, sie sprechen seine Sprache, merken sie schnell, dass es nichts nützt. Egal, wie sehr die Abenteurer zu erklären versuchen, dass sie keine bösen Absichten haben: Das Freie Volk glaubt ihnen nicht und weigert sich zu reden, und es hält seine Waffen so lange erhoben, wie die Abenteurer ihre nicht senken.",
        "Hier können die Abenteurer entscheiden, ob sie kämpfen oder sich ergeben. Ergeben sie sich, nimmt das Freie Volk ihnen die Waffen ab und fesselt ihre Hände mit Seilen. Nachdem sie gefangen genommen wurden, werden die Abenteurer einen langen, holprigen Pfad entlang zu einer tiefen, breiten Grube geführt. Aus der Grube dringt schreckliches Gebrüll. Als sie nah genug sind, um hineinzuspähen, sehen die Abenteurer ein großes, wütendes und hungriges Raubtier, das gefüttert werden will.",
        "Das Freie Volk wirft die Abenteurer in die Grube und geht davon, sie ihrem Schicksal überlassend. Nach dem Sturz in die Grube werden die Abenteurer sofort angegriffen {K:F|2 kritische Feinde; wer nicht mindestens einen kritischen Erfolg würfelt, fühlt sich BLUTEND}. Um die Lage noch schlimmer zu machen, haben die Abenteurer einen Nachteil, weil ihre Hände gefesselt sind.",
        "Entscheidet sich ein Abenteurer, das Raubtier allein in einem Duell zu bekämpfen {K:F|Kritischer Feind}, kann er es von den anderen ablenken, die versuchen können, aus der Grube zu klettern. Dazu müssen die Abenteurer ihr Spähen einsetzen, um die besten Griffe an den Wänden zu finden {K:H|Einfache Herausforderung}.",
        "Nachdem sie das Freie Volk besiegt oder der Grube entkommen sind, haben die Abenteurer Zeit zu fliehen, bevor weitere Feinde kommen."
      ]},
      {t: "n", p: [
        "Auf der Flucht durch die Vegetation vor ihren Verfolgern finden sie einen Pfad, der sie zu einem großen Tor führt. Sie haben den majestätischen Eingang eines uralten Tempels ({P:tempel}) erreicht. Es bleibt keine Zeit zum Nachdenken: Ob der Schatz hinter dieser Tür liegt oder nicht, die wütenden Rufe weiterer Angehöriger des Freien Volks kommen näher, und das Tor ist das Einzige, was sie retten kann.",
        "Auf der Suche nach einer Möglichkeit, das Tor zu öffnen, stellen die Abenteurer fest, dass es weder Griffe noch Schlüssellöcher gibt. Halb von Blättern verdeckt, ist das Einzige auf der Tür offenbar eine Inschrift. Es ist ein Rätsel ({P:raetsel}), und seine Lösung öffnet das Tor zum Tempel.",
        "Scheitern die Abenteurer daran, das Rätsel zu lösen, erreicht sie eine kleine Gruppe des Freien Volks, und sie müssen kämpfen {K:F|Kritischer Feind}. Nachdem sie ihre Verfolger besiegt haben, können die Abenteurer es erneut versuchen."
      ]}
    ]},
    {t: "Der Tempel", short: "Tempel", ort: "INNEN/TAG", s: 206, blocks: [
      {t: "n", p: [
        "Das Innere des Tempels ist dunkel und beklemmend, aber die schwere Tür hält die Feinde fern, und die Abenteurer können endlich eine Pause einlegen. Vor ihnen liegt ein langer Gang. Weiter vorn erreichen die Abenteurer eine kleine Halle mit einem Sockel in der Mitte. Darauf liegt eine Goldene Waffe ({P:goldene_waffe}). Auf dem Sockel steht die Inschrift eines Hinweises, aber nur Abenteurer, die sich mit Kultur auskennen {K:H|Kritische Herausforderung}, können sie richtig übersetzen."
      ]},
      {t: "clue", k: "Hinweis", p: "Beweise, dass du des Schatzes würdig bist / Nimm diese Waffe, die einst einem Helden gehörte / Der Gleichgewicht durch Frieden brachte / Der über das Licht hinausblickte, um die Dunkelheit zu besiegen / Der sich dem größten Feind nicht ergab"},
      {t: "n", p: [
        "Im Fall eines Scheiterns missversteht ein Abenteurer die letzte Zeile und übersetzt sie als „Der sich dem größten Feind ergab“.",
        "Nimmt ein Abenteurer die Goldene Waffe an sich, öffnet sich eine zweite Tür zu einem weiteren Gang.",
        "Am Ende der Gänge gelangen sie in eine runde, dämmrige Halle mit hoher Decke. In der Mitte des Raums steht eine goldene Waage, die sich zu einer Seite neigt. Die höhere Schale scheint leer zu sein, auf der tieferen sind Goldbarren mit der Schale verschmolzen.",
        "Legt ein Abenteurer die Goldene Waffe auf die höhere Schale, macht er einen Fehler. Die Waage wackelt, aber die Schalen bleiben aus dem Gleichgewicht, und das löst eine Falle aus. Feuer schießt aus den Wänden, und die Abenteurer laufen Gefahr, sich zu verbrennen {K:G|Kritische Gefahr}.",
        "Um weiterzukommen, müssen die Abenteurer den Hinweis richtig deuten und Gleichgewicht durch Frieden bringen. Das heißt, sie müssen die Goldene Waffe zuerst in die Scheide stecken und erst dann auf die Waage legen. Die Scheide der Goldenen Waffe befindet sich direkt vor ihnen, in der Mittelsäule der Waage, aber nur wer danach sucht oder sich die Waage genauer ansieht, kann sie bemerken, und das nur mit genügend Beobachtungsfähigkeiten {K:H|Kritische Herausforderung}. Dann müssen die Abenteurer behutsam sein und Fingerfertigkeit einsetzen {K:H|Kritische Herausforderung}, um die Scheide zu nehmen, ohne die Falle auszulösen.",
        "Nachdem sie die Goldene Waffe als Symbol des Friedens auf die Waage gelegt haben, wird das Gleichgewicht wiederhergestellt, und eine Tür öffnet sich, die tiefer in den Tempel führt. Die Abenteurer können die Goldene Waffe nehmen und weitergehen."
      ]},
      {t: "n", p: [
        "Der nächste Raum ist vollkommen finster. So dunkel, dass die Abenteurer einander nicht sehen können. In der Decke ist nur ein kleines, rundes Loch, das einen Strahl weißen Lichts in die Dunkelheit lässt. Dünn wie ein Grashalm fällt er bis zum Boden. Nachdem sie eingetreten sind, schließt sich die Tür hinter den Abenteurern.",
        "Wenn ein Abenteurer die Goldene Waffe benutzt, um das Licht zu brechen, oder irgendeine andere Lichtquelle nimmt, bemerkt er, dass die Wände mit Spiegeln und Kristallen bedeckt sind, die das Licht hin und her werfen und es zu unerträglicher Helligkeit bündeln {K:G|Kritische Gefahr; wer nicht mindestens einen einfachen Erfolg würfelt, fühlt sich GEBLENDET}. Alle Edelsteine und Spiegel zu zerschlagen ist nutzlos, und wenn die Abenteurer diesen Weg versuchen, verlieren sie eine Stunde, ohne etwas zu gewinnen.",
        "Nur wenn sie den Hinweis verstehen und über das Licht hinausblicken, begreifen die Abenteurer, dass sie die Goldene Waffe benutzen können, um das Licht zu reflektieren, oder dass sie in ihrer polierten Oberfläche den Raum im Spiegelbild betrachten können. Wenn ein Abenteurer die Goldene Waffe als Spiegel benutzt und sich darauf konzentriert, kann er verhindern, von dem gebrochenen Licht geblendet zu werden, und so den Raum in ihrem Spiegelbild betrachten.",
        "So bemerken sie vielleicht einen nachtschwarzen Stein über einem großen Tor und können, indem sie das gebrochene Licht darauf richten, mit dem Licht die Dunkelheit besiegen. Tun sie das, zerbricht der dunkle Stein und öffnet den Weg hinaus.",
        "Nach der zweiten Prüfung gelangen die Abenteurer endlich in einen kleinen Raum, dessen Boden mit Schlamm oder Asche bedeckt ist. Am anderen Ende liegt ein Raum, der eindeutig mit einem Schlüssel verschlossen ist. Als sie hinter sich Bewegung spüren, drehen sich die Abenteurer um und finden den Wächter ({P:waechter}) {K:F|Extremer Feind}, der den Schlüssel um den Hals trägt. Um die letzte Tür zu öffnen, müssen die Abenteurer den Wächter besiegen oder mit großer Fingerfertigkeit den Schlüssel an sich bringen {K:G|Extreme Gefahr}. Hat ein Abenteurer den Hinweis falsch gedeutet und schlägt den anderen vor, die Waffen niederzulegen, zeigt der Wächter keine Gnade, und die Abenteurer erleiden in der ersten Runde der Prügelei einen Nachteil.",
        "Nachdem sie die letzte Tür geöffnet haben, erreichen die Abenteurer das Herz des Tempels. Der Schatz ({P:schatz}) liegt in greifbarer Nähe vor ihnen. Auf ihrem Weg gibt es keine weiteren Fallen, aber noch eine letzte Überraschung … der Schatz birgt ein Schreckliches Geheimnis ({P:geheimnis}).",
        "Ende der Folge."
      ]}
    ]}
  ],
  outro: [
    {h: "Kontext zu „Auf hoher See“ – Der Fluch von El Dorado", s: 198},
    {t: "table", cols: ["Platzhalter", "Vorgabe"], first: true, rows: [
      ["Wilder Ort", "Eine tropische Insel"],
      ["Freies Volk", "Eine Gemeinschaft von Ureinwohnern Südamerikas"],
      ["Goldene Waffe", "Goldener Macuahuitl"],
      ["Schreckliches Geheimnis", "El Dorado ist ein Kind"],
      ["Tempel", "Der Goldene Tempel"],
      ["Rätsel", "Der Wunsch des Königs"],
      ["Wächter", "Ein riesiges Krokodil"]
    ]},
    {t: "prose", p: [
      "Nachdem sie den Sturm, der sie von der Kaperin Kline und Kapitän Row fortgerissen hat, nur knapp überlebt haben, erwachen die Abenteurer mit dem Gesicht im weißen Sand eines tropischen Strandes. Sie sind noch immer durchnässt und zerschlagen. Voneinander getrennt, können alle ein Schiffswrack an der Küste sehen: ein leicht erkennbarer Orientierungspunkt, an dem sich alle treffen können.",
      "An diesem Paradiesstrand im Licht des Sonnenaufgangs rollen sanfte Wellen mit einem Murmeln an Land und spülen Planken und Trümmer eines Schiffs heran. Ohne diesen handfesten Beweis wäre es schwer, die jetzige Landschaft mit dem höllischen Sturm in Einklang zu bringen, der ihnen in der Nacht fast das Leben gekostet hat.",
      "Einen Steinwurf vom Wasser entfernt versperrt eine Wand aus tropischen Bäumen die Sicht. Von dort an ist die Vegetation so dicht, dass sich die Abenteurer hinter riesigen grünen Blättern leicht aus den Augen verlieren könnten.",
      "Der Kurs nach El Dorado hat sie genau zu dieser Insel geführt, und von nun an müssen die Abenteurer hart arbeiten, um den Schatz zu finden, bevor Kline sie findet.",
      "Nachdem sie ein paar Stunden in der Vegetation verloren waren, umgeben von Stille und einem unveränderlichen Hintergrund, stolpern die Abenteurer in eine offenbar handgefertigte, aber gut gebaute Falle. Es ist ein einfaches, straff gespanntes Seil, im Laub versteckt. Ziehen die Abenteurer daran, beginnt ein mit Dornen besetzter Baumstamm, der am Baum über ihnen festgebunden ist, hin und her zu schwingen. Wie er nur Zoll vor den Gesichtern der Abenteurer vorbeisaust, bringt diese tödliche Falle gute und schlechte Nachrichten: Sie sind auf dem Weg zum Schatz, aber jemand versucht eindeutig, sie davon abzuhalten, ihn zu erreichen.",
      "Nachdem sie einen von Fallen übersäten Wald durchquert haben, beginnen die Abenteurer, in die höheren Teile der Insel aufzusteigen. Hier lichtet sich die Vegetation und macht blassem, zerklüftetem Fels Platz. Plötzlich werden die Abenteurer von einer Gruppe Eingeborener mit Speeren überfallen.",
      "Das sind die Menschen, die damit betraut sind, El Dorado zu bewachen. Ihr Haar ist entweder lang oder rasiert, ihre Gesichter sind mit weißen oder roten Stammesmarkierungen bedeckt. Sie wirken hager und von Natur und Sonne gestählt, und alle unbedeckte Haut ist mit weißem Kalk bedeckt, der perfekten Tarnung für ihre Umgebung.",
      "Wenn die Eingeborenen nach dem Kampf besiegt sind, rennen sie zurück, um Alarm zu schlagen, und zwingen die Abenteurer zur Flucht. Alternativ werden die besiegten Abenteurer zu einer Grube geführt und zu einem hungrigen Jaguar hineingeworfen.",
      "Sobald sie den goldenen Tempel erreichen, stehen die Abenteurer vor einer schweren Steintür ohne Angeln und Schlüssel. Links befindet sich eine Art Griff, ein kleiner Hebel, der die Tür vielleicht öffnen könnte, im Moment aber nicht zu funktionieren scheint.",
      "In die Steintür eingelassen steht eine grobe Statue eines Mannes mit einer Krone auf dem Kopf und mit den gewölbten Händen den Abenteurern entgegengestreckt, als erwarte er ein Geschenk: Das ist eindeutig El Dorado.",
      "Die Statue hält in ihren gewölbten Händen eine schwere Kugel aus schwarzem Stein. Daneben steht eine Inschrift, die lautet: „Erfülle den Wunsch des Königs“.",
      "Rings um die Tür finden die Abenteurer mehrere Steinobjekte: eine Krone, einen Stab, ein Schwert, einen Schild, eine Sonne und ein Herz. Um den goldenen Tempel zu betreten, müssen die Abenteurer den richtigen Gegenstand in El Dorados Hände legen und dann den Hebel ziehen. Aber sie müssen schnell sein, wenn sie nicht gefunden werden wollen.",
      "Die Lösung des Rätsels ist, dass El Dorado sich nichts wünscht; deshalb müssen die gewölbten Hände geleert werden, bevor die Abenteurer den Hebel ziehen. Dann schwingt die Steintür ruckartig auf, führt die Abenteurer in den Tempel und schließt sich zwischen ihnen und ihren Verfolgern.",
      "Haben die Abenteurer den Hinweis in Folge 3 gefunden, können sie sich erinnern, dass „El Dorado alles hat, was er sich wünscht“, und diese Information nutzen, um das Rätsel zu lösen.",
    ]},
    {t: "prose", p: [
      "Im Inneren des Tempels empfängt die Abenteurer ohrenbetäubende Stille, der Eingang führt in eine düstere Halle, die kaum von den herunterbrennenden Flammen von Fackeln erhellt wird. In der Mitte des Raums steht ein Steinaltar mit einer Inschrift an der Seite. Darauf, von einem einfachen Eisenständer gehalten, ruht ein wunderschöner Macuahuitl aus massivem Gold, ein zeremonielles Schwert mit gezackter Klinge.",
      "Sobald ein Abenteurer die Waffe aufnimmt, schnellt der Eisenständer nach oben, und an der gegenüberliegenden Wand öffnet sich eine Tür. Dahinter nur eine feuchte Halle.",
      "In der zweiten Halle des Tempels steht eine große goldene Waage, die sich zu einer Seite neigt. In der Mittelsäule der Waage steckt eine breite Scheide, gemacht, um die seltsame Klinge des Macuahuitl aufzunehmen. Ihre goldenen Seiten sind so poliert, dass sie als Spiegel dienen könnten.",
    ], img: {src: "jr/jr5-macuahuitl", pos: "50% 50%", side: "r", h: 560}},
    {t: "prose", p: [
      "Nachdem sie die zweite Halle durchquert haben, betreten die Abenteurer einen dritten Raum.",
      "Dieser sieht weniger wie eine Tempelhalle aus und mehr wie eine natürliche, kuppelförmige Höhle, völlig dunkel bis auf einen einzigen Sonnenstrahl, der von der Decke einfällt. Ringsum sind die Wände mit kleinen, harten Edelsteinen besetzt, die das Licht brechen und vervielfachen. Im Dunkeln verborgen liegt eine Tür, über der ein schwarzer Mond aus einem dunklen, amethystähnlichen Edelstein geschnitzt ist. Wird das Licht darauf gerichtet, zerspringt der Mondstein und die Tür öffnet sich.",
      "Die letzte Prüfung für die Abenteurer liegt in einer düsteren, überfluteten Höhle, deren Boden mit Flecken dunkler Asche, Schlamm und Flüssigkeit bedeckt ist. Der einzige Ausgang ist eine Tür, über der ein Sonnensymbol prangt. Der Schlüssel zu dieser Tür ist eine kunstvoll in Gold gearbeitete Sonne, und sie hängt am Hals eines großen, fetten Krokodils mit nachtschwarzen Schuppen, die mit feinem Goldstaub bedeckt sind. Das Biest ist ein Ungeheuer, würdig der schlimmsten Albträume, und greift jeden an, der ihm zu nahe kommt.",
      "Die letzte Halle im Tempel ist eine friedliche Höhle. Ein Dämmerort voller Blumen, deren Blütenblätter sowohl den Boden als auch die Oberfläche eines unterirdischen Sees mit Tupfen in Blau, Gelb und Rosa bedecken.",
    ]},
    {t: "prose", p: [
      "Im hinteren Teil des Raums sitzt El Dorado, ein goldener Mann, in ein weißes Leuchten getaucht, das eine traumhafte Atmosphäre schafft.",
      "Doch als El Dorado die Augen öffnet und mit honigsüßer Stimme zu den Abenteurern Worte in einer Sprache spricht, die sie nicht verstehen … da beginnen sie zu begreifen, dass der Schatz, für den sie so hart gearbeitet haben, keine Statue ist, sondern ein echtes Kind aus Fleisch und Blut."
    ], img: {src: "jr/jr5-el-dorado", pos: "50% 30%", side: "l", h: 540}}
  ]
};
