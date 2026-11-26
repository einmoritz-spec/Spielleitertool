/* Jolly Roger – Staffel 2, Folge 6 „Die Abrechnung“ (Buch S. 208–217, Kontext „Der Fluch von El Dorado“ S. 210–211), Buch-ID bc_a1 */
BC_EP["jr6"] = {
  id: "jr6", t: "Die Abrechnung", lab: "Staffel 2 · Folge 6", c: "#6e1414",
  b: "bc_a1", s: 208,
  intro: [
    {t: "prose", p: [
      "In Folge 6 „Die Abrechnung“ wollen die Abenteurer gerade nach dem Schatz greifen, als der Rivale herbeistürmt, ihnen den Schatz unter der Nase wegschnappt und flieht, wobei er sie in einem Tempel zum Verrotten zurücklässt. Die einzige Hoffnung der Abenteurer ist, allen Herausforderungen des Wilden Orts zu trotzen, um den Rivalen zu verfolgen.",
      "Um diese Folge zu spielen, musst du Folgendes wissen:"
    ]},
    {t: "cards", cols: 3, items: [
      {h: "Epoche", p: "Wann die Geschichte spielt."},
      {h: "Rivale", p: "Eine zwielichtige Gestalt, die den Schatz aus den schlimmstmöglichen Gründen finden will. Sie hat die Mittel und den Willen, den Abenteurern Steine in den Weg zu legen."},
      {h: "Großes Fahrzeug", p: "Ein Schiff, ein Zug, ein Konvoi oder ein anderes großes Fahrzeug."},
      {h: "Schatz", p: "Das A und O des Abenteuers. Alle Abenteurer sind hinter ihm her, und auch wenn sie ihn in dieser Folge nicht finden werden, ist es gut zu wissen, wonach sie suchen."},
      {h: "Tempel", p: "Ein großes Gebäude aus ferner Vergangenheit. Wer es erbaut hat, hat an jeder Ecke Fallen und Rätsel verteilt, um Eindringlinge am Betreten zu hindern, oder daran, lebend wieder herauszukommen."},
      {h: "Freies Volk", p: "Eine Gruppe von Menschen, die denselben Kult, Glauben oder dasselbe Ideal teilen. Sie halten sich nicht an gewöhnliche Obrigkeiten und beugen sich ihrer Macht nicht."},
      {h: "Wilder Ort", p: "Das Herz des Amazonas-Regenwalds, die verschneiten Gipfel Nepals, die Sahara. Jeder schwer erreichbare und schwer zu erkundende Ort voller Gefahren ist gut genug!"},
      {h: "Fahrzeug des Rivalen", p: "Ein großes Fahrzeug im Besitz des Rivalen. Es ist voller grimmiger Feinde und schwerer Artillerie."},
      {h: "Dramatischer Schauplatz", p: "Der Rand einer Schlucht, das Dach eines brennenden Gebäudes, der Umgang um einen Leuchtturm während eines Sturms. Jeder hinreichend unsichere und eindrucksvolle Ort, der einen epischen Hintergrund für ein Duell abgäbe."},
      {h: "Gerechter Lohn", p: "Gold, Edelsteine, Bargeld. Alles von beträchtlichem Wert, wenn auch nur wirtschaftlich, kann als gerechter Lohn gelten."}
    ]},
    {h: "Diese Folge innerhalb einer Staffel spielen", s: 209},
    {t: "box", h: "Es ist 12 Uhr", p: [
      "Die Folge beginnt damit, dass die Abenteurer vom Rivalen überrascht werden, der ihnen gefolgt ist. Sie sind offenbar zu spät dran, auch wenn die Weltuntergangsuhr noch nicht 12 geschlagen hat. Sie müssen sich damit abfinden, dass ihnen jemand zuvorgekommen ist.",
      "**Erreichen die Abenteurer das große Fahrzeug jedoch, bevor die Uhr 12 schlägt, macht sich der Vorsprung bemerkbar, den sie in den vorherigen Tagen gewonnen haben.** Um an sie heranzukommen, hat der Rivale schwere Verluste erlitten, und eines seiner besten Fahrzeuge wurde mit kaum oder gar keiner Besatzung zurückgelassen.",
      "Ist das der Fall, ist das Fahrzeug, das die Abenteurer „borgen“, ein Schnelles Fahrzeug."
    ]},
    {t: "prose", p: [
      "Wenn du Folge 6 innerhalb einer Staffel spielst, denk daran, dass dies das Staffelfinale ist. Vor dem Spielen haben die Abenteurer das Recht, ihre Fertigkeiten und Expertisen angemessen wachsen zu lassen. Da dies ein Staffelfinale ist, solltest du dir außerdem Zeit nehmen, es in vollen Zügen zu erleben; je nach den Umständen musst du es vielleicht in zwei Teile aufteilen.",
      "Wie üblich kann ein Abenteurer, der in früheren Folgen dem Sicheren Tod ins Auge gesehen hat, in einem Staffelfinale zurückkehren. Wurde er zum Beispiel vom Rivalen gefangen genommen, gelingt ihm schließlich die Flucht, oder er hat eine Uniform gestohlen, um sich unter die übrigen Schergen des Rivalen zu mischen, in der Hoffnung, wieder zum Team zu stoßen.",
      "Alternativ hat das Freie Volk sie vielleicht gerettet, sodass sie nun schon miteinander bekannt sind und die Abenteurer ihren gefallenen Gefährten vor dem Tempel an der Seite des Freien Volks kämpfend finden."
    ]}
  ],
  ctx: [
    {k: "epoche", l: "Epoche", v: "Jolly Roger"},
    {k: "rivale", l: "Rivale", v: "Kapitänin Liv Kline"},
    {k: "grosses_fahrzeug", l: "Großes Fahrzeug", v: "Ein Schiff"},
    {k: "schatz", l: "Schatz", v: "El Dorado"},
    {k: "tempel", l: "Tempel", v: "Der Goldene Tempel"},
    {k: "freies_volk", l: "Freies Volk", v: "Eine Gemeinschaft von Ureinwohnern Südamerikas"},
    {k: "wilder_ort", l: "Wilder Ort", v: "Eine tropische Insel"},
    {k: "fahrzeug_rivale", l: "Fahrzeug des Rivalen", v: "Die Lionheart oder ein ähnliches Kriegsschiff"},
    {k: "schauplatz", l: "Dramatischer Schauplatz", v: "Der Hauptmast eines brennenden Schiffs"},
    {k: "lohn", l: "Gerechter Lohn", v: "Eine Truhe voller goldener Dublonen"}
  ],
  scenes: [
    {t: "Tempel", short: "Tempel", ort: "INNEN/TAG", s: 212, blocks: [
      {t: "n", p: [
        "Die Abenteurer erreichen den hintersten Raum des Tempels ({P:tempel}), der tief im Wilden Ort ({P:wilder_ort}) liegt. Nach einem langen und gefährlichen Abenteuer ist der Schatz ({P:schatz}) endlich in Reichweite, nur wenige Schritte vor ihnen.",
        "Doch bevor sie ihn ergreifen können, lässt ein Geräusch hinter ihnen sie herumfahren.",
        "Der Rivale ({P:rivale}) tritt auf, zusammen mit einer großen Truppe bis an die Zähne bewaffneter Schergen {K:F|Unmöglicher Feind}, die die Abenteurer umzingeln und ihre Waffen auf sie richten.",
        "Nachdem er den Abenteurern dafür gedankt hat, die Schwerarbeit an seiner Stelle erledigt zu haben, geht der Rivale langsam nach vorn, um nach dem Schatz zu greifen. Dann wendet er sich spöttisch über die Schulter an die Abenteurer und sagt, sie würden nicht getötet, denn es stünden Schlimmeres für sie bereit. Mit einem Nicken zu seinen Schergen verlässt der Rivale den Raum. Die Schergen versiegeln beim Hinausgehen den Eingang und sperren die Abenteurer im Tempel ein.",
        "Allein gelassen, müssen die Abenteurer einen Weg hinaus finden. Die vom Rivalen versiegelte Tür lässt sich nicht wieder öffnen, und es gibt keine anderen sichtbaren Ausgänge.",
        "Als alle Hoffnung verloren scheint, krabbelt dem ersten Abenteurer, der sich hinsetzt, um innezuhalten und nachzudenken oder aufzugeben, ein riesiges Insekt über die Hand, und er hat Mühe, seine Kaltblütigkeit zu bewahren {K:H|Kritische Herausforderung: Kaltblütigkeit} und nicht laut aufzuschreien, was ihn BESCHÄMT fühlen lässt.",
        "Mit ihrer Beobachtungsgabe {K:H|Einfache Herausforderung} können die Abenteurer bemerken, dass das Insekt durch einen Riss in der Wand in den Raum gekommen ist. Vielleicht können sie versuchen, den Riss weiter zu öffnen, um sich einen Weg nach draußen zu bahnen?",
        "Um einen Gegenstand zu finden oder herzustellen, den man in den Riss klemmen kann, um ihn aufzustemmen, brauchen die Abenteurer gutes Überlebensgeschick {K:H|Kritische Herausforderung}. Für je 2 Abenteurer, die bei der Suche helfen, erhält die Gruppe einen Vorteil.",
        "Gelingt es, öffnet sich der Riss weit genug, dass die Abenteurer hindurchkriechen können. Misslingt es, wenden sie zu viel Kraft auf, und die ganze Wand stürzt auf sie ein {K:G|Kritische Gefahr}.",
        "So oder so haben die Abenteurer endlich einen Weg hinaus gefunden."
      ]}
    ]},
    {t: "Unter Wasser", short: "Unter Wasser", ort: "INNEN/TAG", s: 213, blocks: [
      {t: "n", p: [
        "Nachdem sie durch den Durchgang gekrochen sind, gelangen die Abenteurer in eine natürliche Höhle, die teilweise unter Wasser steht. Zunächst ist das Wasser nur knietief, aber je weiter sie gehen, desto tiefer fällt der Boden ab, bis sie den Grund des Beckens gerade noch mit den Zehenspitzen berühren können. Hoch oben lässt ein Riss in der Kuppeldecke der Höhle einen Sonnenstrahl in den Raum, sodass die Abenteurer sehen können, dass der einzige Weg nach vorn am Boden des Beckens liegt. Sie müssen in den unterirdischen Fluss tauchen und der Strömung zum Meer folgen.",
        "Nachdem sie tief Luft geholt haben, tauchen die Abenteurer unter und setzen ihr Spähen ein, um in die richtige Richtung zu schwimmen {K:H|Kritische Herausforderung}.",
        "Flussabwärts ist das Licht schwach, kaum genug, damit sich die Abenteurer orientieren können, sodass sie sich auf ihren Tastsinn verlassen müssen, um die Richtung der Strömung zu erkennen. An einer Stelle rücken die Wände zusammen und bilden einen Engpass, umgeben von zackigen Felsen. Die Abenteurer müssen sich mit Schleichen vorarbeiten, um sich nicht zu verletzen {K:H|Kritische Herausforderung}.",
        "Nach dem Engpass nimmt die Strömung zu. Der Ausgang ist nah! Ein Sonnenstrahl durchdringt das Wasser nicht weit voraus. Doch ein letztes Hindernis liegt zwischen den Abenteurern und der Oberfläche: eine Gruppe Wasserraubtiere {K:F|3 einfache Feinde}.",
        "Nachdem sie die Tiere besiegt oder ihnen ausgewichen sind, erreichen die Abenteurer schließlich eine schmale Öffnung. Sie ist viel zu eng, als dass sie hindurchpassen würden, aber wenn sie zäh genug sind, können sie Steine und anderes Geröll aus dem Weg räumen {K:H|Kritische Herausforderung}.",
        "Nachdem sie den Durchgang geöffnet haben, können die Abenteurer endlich aus dem Wasser steigen. Als sie sich umsehen, erkennen sie, dass sie sich in einer Bucht nicht weit vom Tempel befinden. Zurück im Wilden Ort, von der Vegetation verborgen, können sie endlich eine Pause einlegen.",
        "Ein fernes Echo erregt ihre Aufmerksamkeit. Als sie in Richtung des Geräuschs blicken, erhaschen die Abenteurer einen Blick auf den Rivalen, der den Schatz trägt: Er hat das Fahrzeug des Rivalen ({P:fahrzeug_rivale}) fast erreicht."
      ]}
    ]},
    {t: "Wilder Ort", short: "Wilder Ort", ort: "AUSSEN/TAG", s: 214, blocks: [
      {t: "n", p: [
        "Um den Rivalen einzuholen, müssen die Abenteurer den Tempel verlassen. Doch schon nach wenigen Schritten hören sie weit entfernt jemanden rufen. Eine Gruppe des Freien Volks ({P:freies_volk}) taucht mit gezückten Waffen aus dem Laub auf, bereit, die Abenteurer zu bekämpfen. Aber die Rufe kommen von weiter weg.",
        "Beim Absuchen des Horizonts sehen die Abenteurer die Schergen des Rivalen in der Ferne, die den Wilden Ort niederbrennen und viele Angehörige des Freien Volks töten. Ein Abenteurer mit starkem Anführen oder Charme {K:H|Kritische Herausforderung} kann versuchen, dem Freien Volk die Lage zu erklären und ihm zu sagen, dass die Abenteurer nicht für den Rivalen arbeiten. Ganz im Gegenteil: Der Rivale hat auch versucht, sie zu töten, und jetzt flieht er mit dem Schatz!",
        "Gelingt es, sehen sich die Angehörigen des Freien Volks an und senken ihre Waffen, entscheiden sich dafür, den Abenteurern zu vertrauen, und helfen ihnen, den Rivalen aufzuhalten, im Austausch für etwas. Der Schatz hat große Bedeutung für sie, und sie verlangen, dass die Abenteurer ihn zurückbringen. Wollen die Abenteurer die Hilfe des Freien Volks, müssen sie versprechen, den Schatz zurückzubringen.",
        "Die Abenteurer können ehrlich zustimmen, im Wissen, dass sie dann nie bekommen werden, weswegen sie hergekommen sind und ihr Leben riskiert haben, oder sie können versuchen zu lügen, mit der Absicht, ihr Versprechen zu brechen. Wollen sie das Freie Volk jedoch täuschen, müssen sie sehr überzeugend sein. Nur ein Abenteurer mit unleugbarem Anführen oder unleugbarer Redekunst {K:H|Extreme Herausforderung} kann falsch genug sein.",
        "Unabhängig vom Ergebnis rennt eine große Gruppe von Schergen des Rivalen mit gezückten Waffen auf sie zu {K:F|Extremer Feind}. Haben die Abenteurer das Freie Volk überzeugt, an ihrer Seite zu kämpfen, ist der Kampf ausgeglichener, und es wird viel leichter, die Gegner zu besiegen {K:F|2 kritische Feinde}. Nach dem Kampf trifft sofort die nächste Gruppe von Gegnern ein. Die Abenteurer können dort nicht weiterkämpfen, ohne Gefahr zu laufen, den Rivalen nicht rechtzeitig zu erreichen.",
        "Kämpft das Freie Volk auf der Seite der Abenteurer, stellt es sich den anrückenden Feinden entgegen und opfert sich, um den Abenteurern die Gelegenheit zu geben, das Fahrzeug des Rivalen zu erreichen. Andernfalls hält nichts die Gegner davon ab, das Feuer auf die Abenteurer zu eröffnen {K:G|Kritische Gefahr}."
      ]},
      {t: "n", p: [
        "Bevor sie das Schlachtfeld verlassen, packt einer der Angehörigen des Freien Volks, tödlich verwundet, einen Abenteurer und fleht ihn mit seinem letzten Atemzug an."
      ]},
      {t: "d", n: "FREIER MENSCH", p: "Versprich mir, dass du den Schatz zu meinem Volk zurückbringst. Versprich es! Unser Leben hängt davon ab …"},
      {t: "n", p: [
        "Weigert sich der Abenteurer, dies zu versprechen, fühlt er sich GESCHOCKT und erhält eine Narbe, wenn der Freie Mensch in seinen Armen stirbt.",
        "Nach dem Verlassen des Tempels müssen die Abenteurer durch den Wilden Ort rennen und dabei den gelegentlichen Kugeln der Schergen des Rivalen auf ihrem Weg ausweichen {K:G|3 einfache Gefahren}. Als wäre das nicht genug, ist der Wilde Ort noch immer mit den Fallen des Freien Volks übersät, und die Abenteurer rennen direkt auf sie zu. Ist der Abenteurer, der die Gruppe anführt, wachsam genug {K:H|Kritische Herausforderung}, um die Fallen zu bemerken und sie gegen die nachsetzenden Schergen einzusetzen, darf er sich mit Fug und Recht KRAFTVOLL fühlen. Außerdem erhält er einen Vorteil auf diese Probe, wenn er sich an die Fallen erinnert und versucht, sie zu benutzen. Scheitert er jedoch, bemerkt der Abenteurer an der Spitze der Gruppe eine Falle nicht, und alle hinter ihm müssen ausweichen {K:G|Einfache Gefahr}.",
        "Nach der Falle erreichen die Abenteurer endlich den Ort, an dem das Fahrzeug des Rivalen zuletzt gesehen wurde. Der Rivale hat noch immer den Schatz und gewinnt bereits an Abstand, aber seine Schergen haben einige andere Fahrzeuge zurückgelassen. Die Abenteurer können versuchen, ein Großes Fahrzeug ({P:grosses_fahrzeug}) unter ihre Kontrolle zu bringen, müssen sich dafür aber an den Wachen vorbeischleichen {K:H|Einfache Herausforderung}. Misslingt einem Abenteurer die Probe, werden sie von den Wachen angegriffen {K:F|2 einfache Feinde}. Nachdem sie an Bord des Großen Fahrzeugs gelangt sind, können die Abenteurer endlich eine Pause einlegen."
      ]}
    ]},
    {t: "Abrechnung", short: "Abrechnung", ort: "AUSSEN/TAG", s: 216, blocks: [
      {t: "n", p: [
        "Aber sie dürfen sich nicht lange ausruhen. Der Rivale entkommt mit dem Schatz an Bord des Fahrzeugs des Rivalen, und die Abenteurer müssen eine halsbrecherische Verfolgungsjagd beginnen.",
        "Ist die Verfolgungsjagd erfolgreich, gelingt es den Abenteurern, den Rivalen zu erreichen und nah genug heranzukommen, dass sie zwei Möglichkeiten haben: Sie können das Fahrzeug des Rivalen in einem Seegefecht angreifen, oder sie können noch näher herankommen und versuchen, das Fahrzeug des Rivalen zu entern.",
        "Misslingt die Verfolgungsjagd, kommen die Abenteurer nicht nah genug heran, aber der Rivale bemerkt sie dennoch und gibt den Befehl, das von den Abenteurern gesteuerte Große Fahrzeug anzugreifen. Während das Fahrzeug des Rivalen eine bessere Position gewinnt, eröffnet seine Mannschaft das Feuer auf die Abenteurer, die Ausweichmanöver fahren müssen {K:G|Kritische Gefahr}. Selbst wenn sie Erfolg haben, lässt sich dem vollen Ansturm kaum entgehen, und das Große Fahrzeug verliert durch den Schaden 1 Glückspunkt. Nach der ersten Salve verwickelt das Fahrzeug des Rivalen die Abenteurer in ein Seegefecht.",
        "Gelingt es den Abenteurern, das Fahrzeug des Rivalen zu entern, ohne es vorher im Seegefecht besiegt zu haben, werden sie von einer Gruppe Gegner empfangen {K:F|Kritischer Feind}, auf die kurz nach deren Niederlage eine weitere folgt {K:F|3 einfache Feinde}. Von da an scheint der Kampf aussichtslos: Jedes Mal, wenn eine Gruppe Feinde besiegt ist, rücken weitere nach. Einfache Feinde mischen sich in jeder Runde in den Kampf, nachdem ein anderer besiegt wurde, und es sind immer 3 einfache Feinde kampfbereit. Das geht so lange, bis die Abenteurer insgesamt 10 einfache Feinde besiegt haben.",
        "Entern die Abenteurer das Fahrzeug des Rivalen dagegen, nachdem sie es im Seegefecht besiegt haben, sind viele Gegner schon fort. Das macht den Kampf wesentlich kürzer, und sie müssen sich insgesamt nur 6 einfachen Feinden stellen."
      ]},
      {t: "n", p: [
        "Erschwert wird die Lage durch den prekären Zustand des Fahrzeugs des Rivalen. Wenn die Abenteurer endlich den letzten der Besatzung besiegt haben, stürzt ein Stück Bauholz auf sie herab {K:G|Kritische Gefahr}.",
        "Während die Gruppe der Abenteurer mit diesen Gegnern beschäftigt ist, muss mindestens einer von ihnen die anderen zurücklassen, um dem Rivalen zu folgen, der versuchen wird, mit dem Schatz zu entkommen. Als er sieht, dass seine Truppen nach dem Angriff der Abenteurer versagen und sein Fahrzeug in Stücke geht, nutzt der Rivale das Chaos und versucht in einer letzten verzweifelten Anstrengung, das Fahrzeug zu verlassen. Den Schatz fest in den Händen, rennt der Rivale zum Dramatischen Schauplatz ({P:schauplatz}).",
        "Ein Abenteurer kann versuchen, ihn zu verfolgen, muss dafür aber ein guter Späher sein, um seine Spuren zu verfolgen {K:H|Kritische Herausforderung}. Misslingt es, erreicht er den Dramatischen Schauplatz dennoch, verliert aber unterwegs seine Waffe.",
        "Nachdem er den Dramatischen Schauplatz erreicht hat, kann der Abenteurer vor der Abrechnung noch eine letzte Pause einlegen. Der einzige Weg, den Schatz zurückzuholen, ist, sich dem Rivalen in einem Duell bis zum bitteren Ende zu stellen {K:F|Extremer Feind}.",
        "Nachdem sie den Rivalen ein für alle Mal besiegt haben, stehen die Abenteurer vor einer wichtigen Entscheidung.",
        "Sie können den Schatz für sich behalten und den Wilden Ort verlassen, oder sie können umkehren, um den Schatz dem Freien Volk zurückzugeben.",
        "Entscheiden sie sich zur Rückkehr, werden sie von den überlebenden Angehörigen des Freien Volks als Helden empfangen. Und am Ende wird den Abenteurern für ihre Redlichkeit gedankt und dafür, dass sie den Schatz an seinen rechtmäßigen Platz zurückgebracht haben, mit einem Gerechten Lohn ({P:lohn}).",
        "Ende der Folge."
      ]}
    ]}
  ],
  outro: [
    {h: "Kontext zu „Die Abrechnung“ – Der Fluch von El Dorado", s: 210},
    {t: "table", cols: ["Platzhalter", "Vorgabe"], first: true, rows: [
      ["Großes Fahrzeug", "Ein Schiff"],
      ["Tempel", "Der Goldene Tempel"],
      ["Freies Volk", "Eine Gemeinschaft von Ureinwohnern Südamerikas"],
      ["Wilder Ort", "Eine tropische Insel"],
      ["Fahrzeug des Rivalen", "Die Lionheart oder ein ähnliches Kriegsschiff"],
      ["Dramatischer Schauplatz", "Der Hauptmast eines brennenden Schiffs"],
      ["Gerechter Lohn", "Eine Truhe voller goldener Dublonen"]
    ]},
    {t: "prose", p: [
      "In einer prächtigen Höhle voller verstreuter tropischer Blumen fällt ein Blitz weißen Lichts auf einen kleinen Jungen, dessen Haut mit Goldstaub bedeckt ist. Als El Dorado aufsteht, um sich den Abenteurern zu nähern, begreifen sie endlich, dass der legendäre Schatz keine Statue ist, sondern ein lebendiger, atmender Mensch. El Dorado spricht nur seine Muttersprache, ist aber eindeutig freundlich und harmlos. Er ist kaum mehr als ein Kind und zeigt keine Furcht vor den Abenteurern, als er sie scheinbar in sein Zuhause einlädt.",
      "Die traumhafte Begegnung wird plötzlich von Liv Kline unterbrochen, die, eskortiert von ihren Schergen, aus einem verborgenen Durchgang tritt. Sie sind durch denselben geheimen Gang gekommen, den die Eingeborenen benutzen, um dem goldenen Kind Essen und Gaben zu bringen.",
      "Schon bald sind die Abenteurer von den Säbeln und Gewehren von mehr als fünfzig Rotröcken der Royal Navy umringt. Unter schussbereiten Waffen sind sie hilflos, während sie Kline zuhören, die ihnen mit unheimlicher Gleichgültigkeit die Wahrheit erklärt. El Dorado ist ein eingeborener König, ein als Gott verehrter Junge, dem sein Volk blind folgt. Dieser Schatz könnte niemals Nahrung und Waffen kaufen, damit Nassau zur Republik der Piraten werden kann. Er kann der britischen Krone jedoch Macht über die Ureinwohner der Karibik und ihren Reichtum verschaffen.",
      "Nachdem sie die Lage erhellt hat, nimmt Kline El Dorado als politischen Gefangenen fest und führt ihn durch denselben Durchgang hinaus, durch den sie gekommen ist.",
      "Bevor sie die Höhle verlassen, legen die Soldaten Sprengladungen sowohl im Gang als auch an der Steintür, durch die die Abenteurer hereingekommen sind, und lassen unsere Helden im Tempel verrotten.",
      "Die Abenteurer entkommen durch eine Unterwasserhöhle und kämpfen, nachdem sie sich mit ein paar hungrigen Haien herumgeschlagen haben, Seite an Seite mit den Eingeborenen gegen die britischen Soldaten. Aber es bleibt keine Zeit zu verlieren, denn Kline ist schon auf dem Weg zur Lionheart, einem Kriegsschiff, das sowohl Kraftvoll als auch Robust ist. Die Abenteurer nehmen die Verfolgung auf, müssen aber auch entscheiden, was sie mit El Dorado anfangen. Werden sie ihn auch gefangen nehmen und versuchen, ihn an den Meistbietenden zu verkaufen? Oder werden sie ihn zu seinem Volk zurückbringen?",
      "Nachdem sie sich mit Fallen und Soldaten herumgeschlagen haben, erreichen die Abenteurer schließlich den Strand, wo sie eines der vielen Schiffe finden, das extrem leer und leicht zu stehlen ist. Hat die Weltuntergangsuhr noch nicht 12 geschlagen, wenn sie es erreichen, ist dieses Schiff ein Schnelles Fahrzeug. Es könnte sogar die Devil’s Cry sein, Klines ehemaliges Flaggschiff. Einmal an Bord, müssen die Abenteurer nur die Lionheart verfolgen und sie entweder in ein Seegefecht verwickeln oder ein dreistes Enterungsmanöver versuchen.",
      "Während die Soldaten kämpfen, um die Lionheart gegen die wachsenden Flammen zu verteidigen, die sie und ihre Angreifer zu verschlingen beginnen, versucht Kline, der Flotte ein Signal zu geben. Um noch mehr Zeit zu gewinnen, zieht sie den jungen El Dorado mit sich, als sie mit einem Entermesser zwischen den Zähnen auf den Hauptmast klettert. Als ein Abenteurer sie erreicht, schleudert sie den Jungen zur Seite und schickt ihn zum Glück auf ein Segel zu, an dem er sich festhalten kann. Dann beginnt ein atemberaubendes Duell, balancierend auf einer Rah über einem brennenden Schiff.",
      "In dieser Szene kann ein Abenteurer, der die wahre Motivation hinter Klines Handeln und die Geschichte ihres Bruders kennt, den Hinweis nutzen, um einen kostbaren Vorteil zu gewinnen, muss dafür aber seine Karten gut ausspielen.",
      "Nachdem Kline besiegt ist, können die Abenteurer den Jungen nach Hause bringen und erhalten seinen Segen, so lange als Gäste zu bleiben, wie sie brauchen, um sich zu erholen. Als die Abenteurer schließlich im Begriff sind, die Segel zu setzen, tauchen die Eingeborenen mit einer letzten Überraschung auf: einer Truhe voller Dublonen, die von einem der Schiffe Mortons geborgen wurde. Sie wollen niemandes Gold, und dieses kleine Vermögen könnte der erste Schritt zur Unabhängigkeit Nassaus sein."
    ]}
  ]
};
