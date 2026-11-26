/* LuckTales – Folge 2 „Das gehört in ein Museum!“ (Buch S. 95–103), Buch-ID bc_z1 */
BC_EP["lt2"] = {
  id: "lt2", t: "Das gehört in ein Museum!", lab: "LuckTales · Folge 2", c: "#7a1b2a",
  b: "bc_z1", s: 94, img: "lt/lt2-ruinen",
  intro: [
    {t: "box", h: "Zum Spielen dieser Folge brauchst du", p: ["{P:museum} · {P:wilderort} · {P:ruinen} · {P:spezialfahrzeug} · {P:schluessel} · {P:direktor} · {P:rivale}"]},
    {t: "box", h: "Enthaltener Kontext", p: ["**Das Vermächtnis des Herkules** (siehe Ende der Folge, S. 102)"]}
  ],
  ctx: [
    {k: "epoche", l: "Epoche", v: "Golden Age"},
    {k: "museum", l: "Museum", v: "Britisches Museum, London"},
    {k: "wilderort", l: "Wilder Ort", v: "Ägyptische Küste"},
    {k: "ruinen", l: "Antike Ruinen", v: "Verlorene Stadt Herakleion"},
    {k: "spezialfahrzeug", l: "Spezialfahrzeug", v: "U-Boot-Tauchkugel"},
    {k: "schluessel", l: "Schlüssel", v: "Apfel der Hesperiden"},
    {k: "schatz", l: "Schatz", v: "Das Grab des Herkules"},
    {k: "direktor", l: "Direktor", v: "Hartwig Atkinson"},
    {k: "rivale", l: "Rivale", v: "Irina Aleksovna"}
  ],
  scenes: [
    {t: "{P:museum}, Stadt", short: "Museum", ort: "INNEN/NACHT", s: 96, blocks: [
      {t: "n", p: [
        "Die Abenteurer haben von ihrer letzten Expedition einen {P:schluessel} mitgebracht, der zum Hauptstück im {P:museum} geworden ist und bei einer großen Gala enthüllt werden soll. Der {P:direktor} hat herausgefunden, dass es einen Code gibt, mit dem sich die Inschriften auf dem {P:schluessel} entziffern lassen. Der Code findet sich an einem Ort, der für sich genommen schon eine große Entdeckung wäre: den {P:ruinen}.",
        "Der {P:direktor} bittet die Abenteurer in sein Arbeitszimmer."
      ]},
      {t: "d", n: "DIREKTOR", p: "Ich bin überzeugt, unser nächstes Ziel gefunden zu haben! Diesmal finden wir den {P:schatz} ganz sicher. Aber zuerst … müssen wir Geld für unsere Expedition auftreiben! Glaubt mir, das wird die Entdeckung des Jahrhunderts!"},
      {t: "n", p: [
        "Die Abenteurer müssen also auf der Gala erscheinen, und alle Augen werden auf ihnen ruhen. Sie sind unbewaffnet, von Bewunderern umringt und damit beschäftigt, Hände zu schütteln. Sie müssen die wohlhabenden Gäste umgarnen und dazu ihren Charme und ihre Redekunst einsetzen {K:H|Kritische Herausforderung}, um einen Sponsor zu finden. Gelingt es ihnen, jemanden zur Unterstützung zu überreden, ist ihre Expedition gut finanziert {K:X|+1 Reichtumspunkt oder ein Bonusgegenstand für jeden Abenteurer}.",
        "Versteckt in der Menge ist auch der {P:rivale} unter denen, die sich mit den Abenteurern unterhalten. Er wirkt wie ein Gast unter vielen und zeigt großes Interesse an den Abenteurern und ihrer Expedition. Mit beneidenswertem Charme und einem endlosen Strom von Komplimenten lobt er die früheren Heldentaten, die den {P:schluessel} ins {P:museum} gebracht haben, und schweift dabei in zahlreiche Fakten und Kuriositäten über den {P:schluessel} ab. Er gibt sich als begeisterter Sammler oder Geschichtsfan, der sich kaum zurückhalten kann. Doch ehe die Abenteurer Verdacht schöpfen können, verabschiedet sich der {P:rivale} und verschwindet in der Menge.",
        "Während sie sich unters Volk mischen, bemerken die Aufmerksamsten unter den Abenteurern {K:H|Kritische Herausforderung} verdächtiges Verhalten beim Personal: sehr eindringliche Blicke und Gesten, Geflüster in einer fremden Sprache. Die Abenteurer arbeiten schon lange mit dem {P:museum} zusammen und wissen, dass das meiste Personal äußerst vertrauenswürdig ist … Aber keinen der Arbeiter von heute Abend kennen sie.",
        "Wo Rauch ist, ist auch Feuer. Und wenn sie nicht schnell eingreifen, hat das alle Anzeichen einer Brandstiftung.",
        "Will jemand den {P:direktor} warnen, zeigt eine kurze Fragerunde, dass er nirgends zu finden ist. Entscheiden sie sich, die Verdächtigen direkt zur Rede zu stellen, ist das der Moment, in dem der Großteil des Personals seine versteckten Waffen zieht {K:F|2 kritische Feinde}.",
        "Während die Kugeln zu fliegen beginnen, rennen die Gäste um ihr Leben, und unbezahlbare Relikte drohen ins Kreuzfeuer zu geraten {K:G|+1 einfache Gefahr: Gäste und Relikte schützen}. Nachdem die Schläger besiegt sind oder nach 3 Kampfrunden, wird eine Granate mitten in den Saal geworfen {K:G|Extreme Gefahr}. Nach der Explosion, während noch Staub und Trümmer durch die Luft wirbeln, hören die Abenteurer Glas zersplittern und die panischen Schreie des {P:direktor}, als jemand aus einem Fenster springt. Und ja, falls ihr euch das gefragt habt: Der {P:schluessel} ist nirgends zu finden.",
        "Dem Tumult nachlaufend, sehen die Abenteurer den {P:rivale} und seine Handlanger in ihre Fahrzeuge steigen und durch den Verkehr davonrasen."
      ]},
      {t: "d", n: "RIVALE", p: "Entschuldigt die Umstände, es ist schade, so früh von einer so schönen Feier aufzubrechen, aber wir haben einen Schatz zu finden!"},
      {t: "n", p: [
        "Keine Zeit zu verlieren! Nach einer kurzen Pause, um den Schaden zu begutachten und ihre Glückspunkte aufzufüllen, müssen die Abenteurer dem {P:rivale} nachsetzen und springen dazu ins erstbeste Fahrzeug."
      ]}
    ]},
    {t: "Straßen der Stadt", short: "Straßen", ort: "AUSSEN/NACHT", s: 98, blocks: [
      {t: "n", p: [
        "Die Entführer jagen in ihren robusten Luxuswagen durch die Straßen der Stadt, stiften Chaos im Verkehr, ignorieren Fußgänger und Tempolimits und eröffnen das Feuer auf die Abenteurer, die sie verfolgen {K:F|2 kritische Feinde}. Es mögen Feinde sein, aber man muss zugeben: Sie können fahren! Während die Kugeln an ihnen vorbeipfeifen, hören die Abenteurer deutlich ihren Freund, den {P:direktor}, schreien, woran sie erkennen, in welchem Wagen er sitzt.",
        "Natürlich sitzt er im selben Wagen wie der {P:rivale}. Dem schnellsten, am weitesten vorn fahrenden und am besten geschützten des Pulks.",
        "Die Verfolgungsjagd wird immer riskanter: Der Verkehr ist hier dichter, die Schranke an einem Bahnübergang senkt sich und kündigt einen nahenden Zug an, eine alte Dame überquert im Schneckentempo die Straße … Ihr wisst schon, das Übliche {K:G|+1 kritische Gefahr für den Fahrer}.",
        "Der unglückliche Besitzer des Fahrzeugs bekommt wahrscheinlich einen ganzen Stapel Bußgeldbescheide. Für jede Runde, die die Abenteurer damit verbringen, sich um die Feinde zu kümmern, die sie vom Wagen des {P:rivale} fernhalten, mischt sich ein weiteres Fahrzeug ins Getümmel und erhöht den Einsatz gegen sie {K:F|+1 kritischer Feind, bis höchstens 1 extremer Feind}.",
        "Erst wenn sie dem Fahrzeug des {P:rivale} endlich nahekommen (das heißt, nachdem sie alle Schläger besiegt und ein paar Zusammenstöße erfolgreich vermieden haben), können die Abenteurer den {P:direktor} heldenhaft retten und müssen zusehen, wie der {P:rivale} auf einem Motorrad in die Seitengassen davonbrettert.",
        "Die Aufmerksamsten der Gruppe erkennen {K:H|Einfache Herausforderung}, dass der {P:rivale} zu einem nahe gelegenen Flughafen unterwegs ist."
      ]},
      {t: "d", n: "DIREKTOR", p: "Nein! Sie entkommen mit dem {P:schluessel}! Vergesst mich! Ich meine, helft mir, aber lasst sie nicht entkommen! Ich wurde gezwungen, den Standort der {P:ruinen} zu verraten … Wir dürfen nicht zulassen, dass sie sie als Erste entwei… ich meine, entdecken!"},
      {t: "n", p: [
        "Alles scheint verloren: Der {P:rivale} ist den Abenteurern buchstäblich vor der Nase entkommen. Den Flughafen rechtzeitig zu erreichen, ist inzwischen unmöglich.",
        "Sie müssen zur Basis zurück, die Koffer packen, ihre Lieblingshüte schnappen und die Pässe einstecken. Es geht zum {P:wilderort}!"
      ]}
    ]},
    {t: "{P:wilderort}", short: "Wilder Ort", ort: "AUSSEN/TAG", s: 99, blocks: [
      {t: "n", p: [
        "Das Flugzeug verlässt die Stadt und fliegt über Land und Meer, in einer stilisierten Kartenverfolgung, die eine rote Linie hinter sich herzieht, bis es … tja, ihr habt das Bild vor Augen.",
        "Schließlich steigen die Abenteurer aus dem Flugzeug, die Jacken staubbedeckt, die Ausrüstung bereit, und blicken von einem Grat hinab auf die {P:ruinen}, zu denen der {P:direktor} sie geschickt hat. Deutlich sehen sie das Lager des {P:rivale}, bequem vor der Stätte eingerichtet. Beobachten sie die Lage, sehen sie womöglich {K:H|Einfache Herausforderung}, wie der {P:rivale} den {P:schluessel} im Zelt zurücklässt, ehe er geht. Es versteht sich von selbst, dass das Zelt des {P:rivale} im Zentrum des feindlichen Lagers steht, umgeben von den kräftigsten Soldaten mit den größten Gewehren.",
        "Einige Handlanger sind damit beschäftigt, ein {P:spezialfahrzeug} vorzubereiten, die einzige Möglichkeit des {P:rivale}, zu den {P:ruinen} zu gelangen. Mit den Informationen des {P:direktor} können die Abenteurer die genaue Lage des {P:schatz} bestimmen, sobald sie den {P:schluessel} in den Händen halten.",
        "Sich ins Lager zu schleichen {K:H|Kritische Herausforderung} ist nicht einfach, aber immer noch leichter, als sich der ganzen Miliz samt ihren Gewehren zu stellen {K:F|2 extreme Feinde}. Haben sie den {P:schluessel} in die Finger bekommen, müssen die Abenteurer ihre Kultur einsetzen {K:H|Kritische Herausforderung}, um die geheimnisvollen Glyphen zu entziffern und die Symbole zu erkennen, die den geheimen Durchgang zu einer verborgenen Kammer in den {P:ruinen} zeigen. Misslingt das, bemerkt eine Wache ihre Anwesenheit genau dann, wenn sie mit dem Übersetzen des {P:schluessel} beschäftigt sind, und schlägt Alarm.",
        "Um zu den {P:ruinen} zu gelangen, brauchen die Abenteurer zusätzliche Ausrüstung: Entweder stehlen sie das {P:spezialfahrzeug} den Feinden direkt unter der Nase weg {K:H|Kritische Herausforderung}, oder sie nehmen es mit Gewalt und weichen dabei den Kugeln aus {K:G|Extreme Gefahr}. Wählen sie den zweiten Weg, alarmieren sie das ganze Lager."
      ]}
    ]},
    {t: "{P:ruinen}", short: "Ruinen", ort: "INNEN/TAG", s: 100, blocks: [
      {t: "n", p: [
        "Mit dem {P:spezialfahrzeug} und den Koordinaten, die sie auf dem {P:schluessel} gefunden haben, können die Abenteurer die {P:ruinen} erreichen. Das Bauwerk ist offensichtlich jahrtausendelang unberührt geblieben. Es ist in einem so verfallenen Zustand, dass es sich anfühlt, als könnte ein Niesen es zum Einsturz bringen.",
        "Die Wände im ersten Raum sind mit Fresken von Kriegsszenen zwischen zwei Heeren geschmückt. Manche der abgebildeten Krieger scheinen tödliche Hiebe ihrer Feinde auf wundersame Weise zu überleben. Ihr Anführer hält einen Gegenstand, der bei näherem Hinsehen {K:H|Kritische Herausforderung} dem {P:schluessel} sehr ähnlich sieht.",
        "Im ersten Raum scheint es weder Tür noch Treppe oder sonst einen Ausgang zu geben, aber es stehen drei Statuen da, jede mit einem Loch in Form des {P:schluessel}. Die Statuen stellen ein Kind, eine schwangere Frau und einen alten Mann dar. Auf einer Steintafel sind Worte in einer uralten Sprache eingeritzt {K:H|Einfache Herausforderung}: „Der Weg zur Ewigkeit führt vom Leben hinab zum Tod.“ Der {P:schluessel} muss in der Reihenfolge Kind – Mutter – alter Mann in jedes Loch gesteckt werden. Die falsche Reihenfolge lässt das ganze Gebäude erzittern, versteckte Mechanismen brechen, und Trümmer fallen auf die Abenteurer. Die richtige Reihenfolge öffnet vor dem Altar eine Falltür, durch die die Abenteurer mehrere Fuß tief hinunterrutschen. Der {P:schluessel} erreicht sie nach einigen Sekunden am Ende der Rutsche.",
        "Das untere Geschoss besteht aus einem einzigen, in Schatten getauchten Gang, der zu einem runden Raum führt. In der Mitte des Bodens steht eine Inschrift: „Um der Ewigkeit würdig zu sein, nutze den Augenblick.“ Auf der anderen Seite führt eine Tür in einen weiteren Gang. Die Aufmerksamsten unter den Abenteurern bemerken {K:H|Einfache Herausforderung}, dass es eine kleine Rille gibt, Platz für einen Mechanismus, der den Raum von dem trennt, was hinter der Tür liegt. Zusätzliche Schleifspuren an den Wänden machen den Scharfäugigen {K:H|Kritische Herausforderung} klar, dass der Raum so gebaut ist, dass er sich irgendwie um sich selbst dreht.",
        "Sobald jemand die Mitte des Raums betritt, löst etwas aus, und der ganze Raum, bis auf einen kleinen Kreis in der Mitte, beginnt sich mit irrer Geschwindigkeit zu drehen, sodass der Ausgang nur für wenige Sekunden auf einmal offen ist. Die Abenteurer müssen sich schnell bewegen, mit großer Gewandtheit und noch größerer Waghalsigkeit, um durch die Tür zu kommen, ohne in zwei Abenteurerhälften zu enden {K:G|2 kritische Gefahren + 1 einfache Gefahr für alle, die riskieren, den Schlüssel oder den Hut zu verlieren}.",
        "Ob sie den Feinden vorher entkommen sind oder erst gerade entdeckt wurden: Die Abenteurer hören jetzt hinter sich eine Reihe von Explosionen. Der {P:rivale} und seine Handlanger kommen rasch näher.",
        "Inzwischen haben die Abenteurer den letzten Raum erreicht. An der Wand sehen sie ein als Relief gearbeitetes monströses Gesicht. Statt eines Mundes gibt es ein Loch, groß genug für den {P:schluessel} … und einen Arm. Eine weitere, verstaubte Inschrift unter dem monströsen Gesicht lautet: „Wer das Opfer fürchtet, ist des ewigen Lebens unwürdig.“ Und dann, mit einer Symphonie aus Explosionen, machen der {P:rivale} und seine Handlanger ihren Auftritt."
      ]},
      {t: "d", n: "RIVALE", p: "Ich nehme an, ihr wärt dumm genug, euch ohnehin zu opfern. Aber falls ihr eine Ermunterung braucht …"},
      {t: "n", p: [
        "Auf eine Geste des {P:rivale} richten die Handlanger ihre Waffen auf die Abenteurer und befehlen ihnen, den {P:schluessel} in die Wand zu stecken. Wer mutig genug ist, es zu tun, muss kaltblütig bleiben {K:H|Kritische Herausforderung}, sonst ist er VERÄNGSTIGT, wenn etwas plötzlich seine Hand packt und nach vorn zieht … Nur einen Zoll. Mehr passiert nicht! Die Alten hatten einen merkwürdigen Humor.",
        "Der {P:schluessel} rollt ins Loch, und zwei Steinplatten bewegen sich und enthüllen schließlich den {P:schatz}."
      ]},
      {t: "d", n: "RIVALE", p: "Gar nicht schlecht, das muss ich euch lassen. Und nun, wenn es euch nichts ausmacht: Bitte sterbt ohne viel Aufhebens. Es ist nichts Persönliches."},
      {t: "n", p: [
        "Der Kampf gegen die Handlanger ist unvermeidlich {K:F|2 kritische Feinde}, während sich der {P:rivale} auf den {P:schatz} stürzt {K:H|Extreme Herausforderung, ihn vor dem Rivalen an sich zu nehmen}. Nach 2 Runden und mehreren Explosionen fordert das Chaos des Kampfes seinen Tribut von der Bausubstanz der {P:ruinen} {K:G|+1 kritische Gefahr}. Mit oder ohne den {P:schatz} verschwindet der {P:rivale}, sobald klar ist, dass seine Handlanger verlieren, durch das Loch, das sie für ihren Auftritt gesprengt haben, und nimmt vielleicht einen Abenteurer als Geisel mit.",
        "**Das ist nicht das Ende!**"
      ]}
    ]}
  ],
  outro: [
    {h: "Das Vermächtnis des Herkules", s: 102},
    {t: "prose", p: ["**Kontext zu „Das gehört in ein Museum!“**"]},
    {t: "table", cols: ["Platzhalter", "Vorgabe"], first: true, rows: [
      ["Epoche", "Golden Age"],
      ["Museum", "Britisches Museum, London"],
      ["Wilder Ort", "Ägyptische Küste"],
      ["Antike Ruinen", "Verlorene Stadt Herakleion"],
      ["Spezialfahrzeug", "U-Boot-Tauchkugel"],
      ["Schlüssel", "Apfel der Hesperiden"],
      ["Schatz", "Das Grab des Herkules"],
      ["Direktor", "Hartwig Atkinson"],
      ["Rivale", "Irina Aleksovna, in Ungnade gefallene russische Adlige, gesucht wegen Diebstahls und Massenmords"]
    ]},
    {t: "prose", p: [
      "Die Plakate am Eingang des Britischen Museums kündigen das mit größter Spannung erwartete Ereignis des Jahres an. Die Abenteurer sind vor wenigen Tagen von ihrer Expedition an der türkischen Küste zurückgekehrt und haben die Früchte ihrer Arbeit einem begeisterten, rundlichen Mann mit dünn über die Glatze gekämmtem Haar übergeben: Direktor Hartwig Atkinson. Sie brachten eine goldene Kugel in Form eines Apfels mit, bedeckt mit altgriechischen Buchstaben, ein Artefakt mit dem passenden Namen Apfel der Hesperiden. Das Stück gleicht genau dem, das im Mythos von den zwölf Arbeiten des Herkules beschrieben wird.",
      "Während sich reiche Gäste und neugierige Besucher auf der Treppe zu den Sälen der Abteilung für griechische und römische Geschichte versammeln, ruft Mr. Atkinson die Abenteurer in sein Büro, um ihnen etwas Außergewöhnliches zu eröffnen. Er hat erfahren, dass der Apfel die Karte sein könnte, die sie zu einem noch größeren Schatz führt: dem Grab des Herkules. Das Grab war in der verlorenen Stadt Herakleion verborgen, einem antiken griechischen Handelsplatz (Empórion) an der Küste Ägyptens, der später durch eine rätselhafte Katastrophe überflutet wurde. Der Direktor braucht noch ein paar Tage, um den genauen Ort des Grabes herauszufinden, das seiner Meinung nach das Geheimnis der legendären Stärke des Halbgotts enthält. Mythos oder Wahrheit? Das heißt, die Abenteurer müssen einen Gönner für etwas finden, das buchstäblich „die Entdeckung des Jahrhunderts, vielleicht sogar des Jahrtausends!“ sein könnte.",
      "Auf der Feier werden viele elegant gekleidete Gäste sein, wohlhabende Unternehmer und juwelenbehängte, alternde Gräfinnen, die alle darauf warten, überzeugt zu werden, ihr Vermögen für eine so historische Expedition auszugeben. Leider wurden alle Aufseher und das gesamte Servicepersonal der Gala durch Söldner der russischen Herzogin Irina Aleksovna ersetzt, die im schlimmsten möglichen Moment eine Schießerei beginnen. Die Abenteurer müssen versuchen, die Lage mit so wenigen Opfern wie möglich und ohne ihre Waffen zu bereinigen.",
      "Eine Splittergranate deckt den Rückzug der Herzogin, die auch Mr. Atkinson als Geisel genommen hat und als menschlichen Schutzschild benutzt. Sie entkommt in einem Militär-Geländewagen, auf dessen Heck ein Motorrad bereitsteht, gefolgt von ihren Kosakenwachen in deren Autos. Und da Unglück selten allein kommt, macht sie sich auch noch mit dem Apfel davon.",
      "Die anschließende Verfolgungsjagd durch die Straßen Londons, voller Taxis, Doppeldeckerbusse und Touristen, endet damit, dass die Herzogin endgültig entkommt. Mr. Atkinson ist in Sicherheit, aber Irina hat den Apfel noch. Und sie ist bereits abgeflogen.",
      "Einige Tage später spionieren die Abenteurer in Ägypten das feindliche Lager aus, an der Küste vor ein paar Statuenstümpfen und anderen Bauwerken aus hellenistischer Zeit errichtet. An einem improvisierten Anlegesteg liegt eine Tauchkugel (Bathysphäre) vertäut, bereit zum Tauchgang auf der Suche nach dem Eingang zum Grab. Die Abenteurer müssen tauchen, um ihn zu finden.",
      "Nachdem sie sich unbemerkt durch das feindliche Lager geschlichen haben, sind die Abenteurer die ersten Menschen, die die jahrtausendelang trocken versiegelten Räume betreten. Die Basreliefs an den Wänden erzählen von einem Heer unsterblicher, unbesiegbarer Soldaten unter der Führung des Herkules.",
      "Die Grabkammer birgt einen riesigen Sarkophag, verziert mit Szenen der zwölf Arbeiten. Dann hören sie die Explosionen, und die Räume beginnen zu fluten: Aleksovna und ihre Kosaken sind eingetroffen und werden alles tun, um die Abenteurer daran zu hindern, das Vermächtnis des Herkules an sich zu nehmen!"
    ]}
  ]
};
