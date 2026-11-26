/* LuckTales – Folge 3 „Im Bauch der Insel“ (Buch S. 105–113), Buch-ID bc_z1 */
BC_EP["lt3"] = {
  id: "lt3", t: "Im Bauch der Insel", lab: "LuckTales · Folge 3", c: "#7a1b2a",
  b: "bc_z1", s: 104, img: "lt/lt3-hoehle",
  intro: [
    {t: "box", h: "Zum Spielen dieser Folge brauchst du", p: ["{P:insel} · {P:schluesselfragment} · {P:legendaere_zivilisation} · {P:rivale}"]},
    {t: "box", h: "Enthaltener Kontext", p: ["**Auf der Suche nach Atlantis, Teil 1** (siehe Ende der Folge, S. 112)"]}
  ],
  ctx: [
    {k: "epoche", l: "Epoche", v: "1999"},
    {k: "insel", l: "Insel", v: "Vulkaninsel Santorin"},
    {k: "schluesselfragment", l: "Schlüsselfragment", v: "Splitter eines sechseckigen Gegenstands aus Smaragd und Orichalkum"},
    {k: "legendaere_zivilisation", l: "Legendäre Zivilisation", v: "Die verlorene Zivilisation von Atlantis"},
    {k: "schatz", l: "Schatz", v: "Unwiderlegbarer Beweis für die Existenz von Atlantis"},
    {k: "rivale", l: "Rivale", v: ""}
  ],
  scenes: [
    {t: "{P:insel}", short: "Insel", ort: "AUSSEN/TAG", s: 106, blocks: [
      {t: "n", p: [
        "Das Meer ist ruhig, und eine leichte Brise weht. Das Boot der Abenteurer hält geradewegs auf eine kleine Bucht der {P:insel} zu, weit entfernt von der nächsten Siedlung. Eine ihrer Quellen hat sie auf den Eingang zu einer der Unterwasser-Calderen des Vulkans hingewiesen, der der Ruheort des {P:schluesselfragment} sein könnte, um Licht auf die {P:legendaere_zivilisation} zu werfen."
      ]},
      {t: "cut"},
      {t: "n", p: [
        "Als sie die Bucht erreichen, sehen die Abenteurer zwei weitere vertäute Boote und zwei Wachen, die am Ufer warten. Ihr {P:rivale} ist ihnen zuvorgekommen.",
        "Wie kommen sie an den beiden vorbei? Die Abenteurer können versuchen, jede Wache lautlos auszuschalten {K:H|Kritische Herausforderung}, oder sich entscheiden, sie frontal zu bekämpfen {K:F|Einfacher Feind}. Bemerken die Wachen die Abenteurer jedoch und kämpfen gemeinsam, sind sie gewaltige Gegner {K:F|3 einfache Feinde}.",
        "Nachdem sie die Wachen erledigt haben, können die Abenteurer entscheiden, wie sie mit den feindlichen Booten verfahren: Sie können deren Motoren mit einer Technikprobe sabotieren {K:H|Kritische Herausforderung}, sie einfach kurzerhand versenken oder aufs Meer hinausfahren (oder in eine andere Bucht), um dem Feind die Flucht abzuschneiden. Wählen sie Letzteres, kostet es sie einige Zeit {K:X|Füllt eine Stunde auf der Weltuntergangsuhr aus, falls ihr sie benutzt}.",
        "Als sie in die Höhle vordringen, sehen sie als Erstes drei Tunnel, die jeweils in eine andere Richtung führen. Am Eingang jedes Tunnels steht ein Standbild einer Gottheit: Erfahrene Abenteurer erkennen {K:H|Kritische Herausforderung} die drei Gottheiten als Zwietracht, die Beschützerin und das Glück.",
        "Auf dem Boden der Höhle ist ein Satz in fremdartigen Schriftzeichen eingemeißelt, vor langer Zeit. Mit einer leicht genug zu lösenden Aufgabe {K:H|Einfache Herausforderung} können die Abenteurer ihn lesen:"
      ]},
      {t: "clue", k: "Inschrift", p: "Oft hält sie das Gute unter ihren Füßen, / das Ehrlose auf ihrer Handfläche. / Und hat sie je etwas versprochen, / hält sie es doch niemals."},
      {t: "n", p: [
        "Die Lösung des Rätsels lautet „Glück“, und es ist ein Hinweis {K:Hw|Hinweis}, der den Abenteurern bei der Wahl des richtigen Tunnels hilft. Außerdem können die Gebildeteren unter den Abenteurern nach der Lösung des Rätsels erkennen {K:H|Kritische Herausforderung}, dass es nachträglich zu einer früheren Gravur hinzugefügt wurde, auch wenn das wenig Sinn ergibt.",
        "Welchen Tunnel die Abenteurer auch nehmen, sie müssen gegen kleinere Gruppen der Handlanger des {P:rivale} kämpfen {K:F|Kritischer Feind}. Wählen sie jedoch den Tunnel der Beschützerin oder den der Zwietracht, müssen sie sich zuerst im Kampf mit tödlichen Fallen auseinandersetzen {K:G|+2 kritische Gefahren} und laufen später in eine Sackgasse."
      ]}
    ]},
    {t: "Im Inneren der Insel", short: "Im Inneren", ort: "INNEN/TAG", s: 107, blocks: [
      {t: "n", p: [
        "Offenbar suchten die Handlanger des {P:rivale} nach einem Weg an einem Hindernis vorbei, denn der Tunnel endet plötzlich an einem tiefen Wasserbecken, und sie haben keine Ausrüstung für Erkundungen unter Wasser. Nachdem sie ihre Feinde besiegt haben, können die Abenteurer ins Wasser tauchen und schwimmend weiterkommen.",
        "Haben sie auch keine Taucherausrüstung, müssen die Abenteurer die Luft anhalten, während sie von einer Lufttasche zur nächsten schwimmen, ohne zu ertrinken {K:G|Kritische Gefahr}. Während sie sich unter Wasser vorankämpfen, bemerken die aufmerksameren Abenteurer {K:H|Kritische Herausforderung} einige Relikte vergangener Zeitalter. Es sind in Wahrheit Waffen und Rüstungen aus dem vergangenen Jahrhundert, die aber älter wirken, als sie sind. Ein wahrhaft seltsames Phänomen.",
        "Jeder Abenteurer, der sich die Zeit nimmt, die Gegenstände auf dem Meeresgrund zu untersuchen, ohne die Herausforderung zu bestehen, hat es schwer, die nächste Lufttasche zu erreichen {K:G|+1 kritische Gefahr}. Beim nächsten Tauchgang fallen die Abenteurer einem Strudel zum Opfer, der sie mit Wucht gegen die Felswand schleudert {K:G|+1 einfache Gefahr. Bei einem Scheitern fühlt sich ein Abenteurer BLUTEND}. Schließlich erreichen sie eine Höhle, die genau dort zu liegen scheint, wo einst das alte Vulkanbecken war."
      ]}
    ]},
    {t: "Im Vulkan", short: "Im Vulkan", ort: "INNEN/NACHT", s: 108, blocks: [
      {t: "n", p: [
        "In der Höhle finden die Abenteurer eine Statue aus einem seltsamen Metall, die den Historiker darstellt: einen Mann in einer Toga, der ein Stück Pergament in der Hand hält und in die Ferne starrt.",
        "Auf den ersten Blick mag das wie eine natürliche Höhle wirken, doch jeder sorgfältige Abenteurer {K:H|Einfache Herausforderung} erkennt, dass sie offensichtlich vollkommen künstlich ist. Vor allem fällt auf, dass die Akustik perfekt ist, fast als wäre sie für eine Theateraufführung gebaut worden. Spricht irgendjemand irgendwann in der Höhle, hören alle anderen in der „Halle“ seine Worte glasklar.",
        "An den Wänden sind viele Worte eingemeißelt, dieselbe Geschichte in mehreren verschiedenen Sprachen. Mit einer Kulturprobe {K:H|Kritische Herausforderung} können die Abenteurer die Geschichte entziffern. Sie erzählt von einer {P:legendaere_zivilisation}, die allen aus der Geschichte bekannten voranging, und davon, wie sie hoch und unberührt vom Lauf der Zeit dastand.",
        "Der zweite Teil der Geschichte ist eine Bitte, die alle Abenteurer scheinbar automatisch in ihrer Muttersprache lesen:"
      ]},
      {t: "clue", k: "Inschrift", p: "An alle, die vor dem Historiker stehen, ergeht eine Bitte. Nehmt an einem musikalischen Wettstreit teil, und dem Sieger wird ein Fragment der {P:legendaere_zivilisation} und das Wissen gewährt."},
      {t: "n", p: [
        "Jeder der Abenteurer muss sich also in einer Kunst seiner Wahl darbieten {K:H|Einfache Herausforderung}. Für jeden Abenteurer, dem die Aufgabe gelingt, sehen alle an den Rändern der Halle die Gestalten von Menschen erscheinen, wie Zuschauer des Wettstreits, durch Zeit und Raum dorthin projiziert. Der Abenteurer, der mit der gewählten Fertigkeit den höchsten Erfolg erzielt, wird mit stehenden Ovationen aus den Schatten belohnt, die lautlos bleiben, und fühlt sich SELBSTSICHER.",
        "Am Ende des Wettstreits gibt die Statue des Historikers ein schrilles Geräusch von sich, und an ihrem Sockel öffnet sich ein kleines Fach. Darin finden die Abenteurer zwei Artefakte: ein Bruchstück eines größeren, komplexen Gegenstands, nämlich das {P:schluesselfragment}, und eine kleine dunkle Stele mit Worten in vielen Sprachen, alten und modernen aus der ganzen Welt, darunter auch der der {P:legendaere_zivilisation}.",
        "Es sieht aus, als stünde jede Sprache, die es je gab oder geben wird, auf der Stele und wiederholte denselben Satz:"
      ]},
      {t: "clue", k: "Hinweis", p: "Auf der Karawanenstraße zur Küstenstadt sah der Reisende den Vulkan: Die Münder riefen ihn, und einer von ihnen spie kein Feuer, sondern Wasser. Regen lief bergauf, als sammle der Himmel Wasser. Als wollte der Vater aller Dinge ihnen nach so langer Reise sagen, dass sie endlich gefunden hatten, was sie suchten."},
      {t: "n", p: [
        "Außer diesem Hinweis gibt es nichts in der Höhle, und nachdem sie ihn entziffert haben, wissen die Abenteurer, wohin sie als Nächstes gehen müssen, um ihre Nachforschungen fortzusetzen. Vorerst müssen sie sich mit vielen neuen Fragen und keinen Antworten zufriedengeben.",
        "Wie konnten Waffen aus dem letzten Jahrhundert in den Gewässern unter der {P:insel} zurückbleiben, und warum wirken sie so viel älter, als sie sind? Wer ist der Mann, den die Statue darstellt, und warum wird er „Historiker“ genannt? Wer ist der Reisende aus dem Hinweis? Welche Karawanenstraße ist gemeint?",
        "Alles Fragen ohne Antwort, vorerst.",
        "Die Abenteurer haben nun nur ein {P:schluesselfragment}, und das Erste, was sie tun müssen, ist, den Weg nach draußen zu finden, bevor der Rivale sie erreicht.",
        "Zu allem Überfluss zerspringt die Stele in tausend Stücke, als sie sich von der Statue entfernen, mit einem Knall, der von allen Wänden widerhallt. Wer sich nicht auf den Donner gefasst machen und ihn wegstecken kann {K:H|Kritische Herausforderung: Zähigkeit}, fühlt sich BENOMMEN.",
        "Als das Echo verhallt, beginnt die ganze Höhle, vielleicht die ganze {P:insel}, zu beben, und Staub und Trümmer regnen durch die Luft."
      ]}
    ]},
    {t: "{P:insel}", short: "Insel (Flucht)", ort: "AUSSEN/TAG", s: 110, blocks: [
      {t: "n", p: [
        "Beim Erkunden des Raums ist die Zeit verflogen, und nun müssen die Abenteurer einen Weg hinaus finden. Sie können entweder denselben Weg zurücknehmen, in den Tunnel tauchen und gegen die Strömungen anschwimmen, oder nach einem anderen Ausgang suchen.",
        "Wählen sie die erste Möglichkeit, müssen sie erneut in die Gewässer unter der {P:insel} tauchen {K:G|1 kritische + 1 einfache Gefahr. Bei einem Scheitern fühlt sich ein Abenteurer BLUTEND}. Auf diesem Weg erreichen sie leicht den Ort, wo sie ihr Boot zurückgelassen haben, doch dort wartet eine große Gruppe Handlanger ihres {P:rivale} auf sie {K:F|3 kritische Feinde}.",
        "Suchen sie dagegen nach einem anderen Ausweg, finden die Abenteurer auf der gegenüberliegenden Seite der Höhle einen Ausgang. Von dort können sie versuchen, sich die Felswand hinaufzuklettern, mit natürlichen Haltepunkten und aller Ausrüstung, die sie haben.",
        "Es wird jedoch eine harte Kletterpartie {K:H|Kritische Herausforderung}. Jeder Abenteurer, der scheitert, greift nach einem vorstehenden Felsen, der ihm unter den Fingern zu Staub zerfällt und den Weg für einen Strom aus geschmolzener Lava freigibt {K:G|Kritische Gefahr}.",
        "Oben angekommen, sind die Abenteurer im Freien und sehen den Morgen dämmern. Sie befinden sich in einer der Calderen über dem Meer, nicht weit vom Hauptvulkan der {P:insel}. In der Ferne sehen sie ihr Boot, umringt von den Handlangern des {P:rivale}. Noch weiter entfernt scheint ein viel größeres, luxuriöseres Schiff Kurs auf die Bucht genommen zu haben, als wolle es sehen, was auf der Insel vor sich geht. Wer könnte der Kapitän eines so protzigen Schiffs sein?",
        "Sobald die Abenteurer auf die eine oder andere Weise hinausgelangt sind und den Morgen über der {P:insel} dämmern gesehen haben, spüren sie ein Grollen unter den Füßen, als die Vulkane auszubrechen beginnen und Feuer vom Himmel regnen lassen {K:G|Extreme Gefahr}.",
        "Sie können den schnellsten Weg zum Meer nehmen und versuchen, ihr Boot zu erreichen, ohne von den Feinden bemerkt zu werden {K:H|Kritische Herausforderung}. Gelingt es allen, können sie hinunterkommen und ungehindert aufs Meer hinausfahren. Scheitert einer der Abenteurer, fällt er ins Meer und erhält sowohl das negative Gefühl GEBROCHEN als auch die Aufmerksamkeit der Feinde. Geschieht das, oder wenn die Abenteurer sich offen den Handlangern des {P:rivale} stellen wollen, müssen sie wie oben kämpfen, um ihr Boot zu erreichen.",
        "Haben sie das Boot erreicht, bleiben den Abenteurern nur noch zwei Möglichkeiten: den {P:rivale} und seine Handlanger auf See bekämpfen {K:F|3 kritische Feinde} oder den Motor abstellen und versuchen, den Rauch und Dampf auszunutzen, den das Magma beim Auftreffen auf Wasser erzeugt, um unbemerkt zu entkommen {K:H|Kritische Herausforderung}.",
        "Selbst wenn sie die letzte Herausforderung nicht bestehen, können die Abenteurer immer noch wählen, ob sie den {P:rivale} und seine Handlanger auf See bekämpfen {K:F|3 kritische Feinde} oder versuchen, durch das raue Wasser zu entkommen {K:G|1 kritische Gefahr + 1 einfache Gefahr für den Piloten, der Gefahr läuft, die Kontrolle über das Boot zu verlieren. Diese Gefahren wiederholen sich 2 Runden lang, bevor sich die Abenteurer sicher fühlen können}.",
        "Entkommen die Abenteurer jedoch unentdeckt, erfahren sie nie von der kleinen List, die auf ihrem Schiff versteckt ist und es ihrem Rivalen ermöglicht, jede Bewegung ihres Bootes zu verfolgen.",
        "Nichts bindet die Abenteurer nun noch an die {P:insel}: Sie haben ein {P:schluesselfragment} und einen Hinweis, der sie zu ihrem nächsten Halt führt, wo sie hoffen, den Rest des Schlüssels sowie tatsächlich nützliche Informationen zu finden, um die {P:legendaere_zivilisation} endgültig wieder ans Licht zu bringen."
      ]}
    ]}
  ],
  outro: [
    {h: "Auf der Suche nach Atlantis, Teil 1", s: 112},
    {t: "prose", p: ["**Kontext zu „Im Bauch der Insel“**"]},
    {t: "table", cols: ["Platzhalter", "Vorgabe"], first: true, rows: [
      ["Epoche", "1999"],
      ["Insel", "Santorin"],
      ["Schlüsselfragment", "Ein Splitter eines sechseckigen Gegenstands aus Smaragd und Orichalkum"],
      ["Legendäre Zivilisation", "Die verlorene Zivilisation von Atlantis"],
      ["Schatz", "Unwiderlegbarer Beweis für die Existenz von Atlantis"],
      ["Rivale", "Unbekannt"]
    ]},
    {t: "prose", p: [
      "Die Abenteurer steuern ihr Motorboot auf die Küste von Santorin zu. Sie suchen nach einer Tafel aus Orichalkum, die ein in der Zeit verlorenes Geheimnis enthüllen wird.",
      "Als sie die beiden anderen Motorboote in der Bucht sehen, wissen sie sofort, dass noch jemand gekommen ist, um das zu suchen, was auch sie suchen.",
      "In der Höhle, als sie tiefer unter die Insel vordringen, finden sie einen in Keilschrift geschriebenen Satz sowie die Statuen von drei Göttinnen: Eris (Zwietracht), Hestia (Beschützerin) und Tyche (Glück).",
      "Das auf den Boden gemeißelte Rätsel scheint ein Zitat von Niccolò Machiavelli zu sein. Auf dem Boden des Unterwassertunnels finden die Abenteurer Waffen und Rüstungen aus dem Amerikanischen Unabhängigkeitskrieg, die ein paar Jahrhunderte mehr gealtert sind, als zu erwarten wäre. Schließlich erreichen die Abenteurer eine Höhle in dem, was das Magmabecken des Santorin-Vulkans hätte sein sollen, und finden dort eine Statue aus Orichalkum.",
      "Die Schrift, in vielen Sprachen verfasst (Keilschrift, Phönizisch, Altgriechisch …), erzählt eine Geschichte über Atlantis vor der Sintflut und darüber, wie stolz und zeitlos es durch die Jahrhunderte stand.",
      "Als die Statue des Historikers plötzlich ein Geräusch von sich gibt und ein verborgenes Fach öffnet, finden die Abenteurer, was wie ein Splitter eines sechseckigen Gegenstands aus Smaragd und Orichalkum aussieht, sowie eine Tafel ähnlich dem „Stein von Rosette“, beschrieben in vielen Sprachen, von Atlantisch über Griechisch und Norwegisch bis Esperanto, von traditionellem Chinesisch bis modernem Japanisch. Jede existierende Sprache erscheint auf der Tafel, und die Inschrift erzählt von einer Karawanenstraße nach Mokka im Jemen und vom Vulkan Jabal Yar in Saudi-Arabien. Das ist das nächste Ziel der Abenteurer.",
      "Als sie sich zurück an die Oberfläche durchgeschlagen haben, sehen sie eine große, protzige Jacht auf die Küste zukommen. Sehr wahrscheinlich ist es das Schiff ihres Rivalen. Eines Rivalen, den sie noch nicht kennen und der nachsehen will, ob seine Handlanger den Splitter aus Smaragd und Orichalkum erfolgreich geborgen haben.",
      "Fliehen sie, ohne die Handlanger zu alarmieren, bemerken die Abenteurer eine Wanze an ihrem Motorboot nicht, mit der der Rivale ihnen folgen kann, solange sie das Fahrzeug nicht wechseln. Kehren sie an diesem Punkt nach Santorin zurück, werden sie aus der Ferne von den Handlangern des Rivalen verfolgt. Die Handlanger beobachten jeden ihrer Schritte und erledigen so die Arbeit für ihren Rivalen.",
      "Wenn die Abenteurer also nach Saudi-Arabien und in den Jemen aufbrechen, weiß ihr Rivale, dass er einige seiner Handlanger den Protagonisten hinterherschicken muss, während andere auf die Kanarischen Inseln gehen. Auf diesem spanischen Archipel haben private Quellen des Rivalen ein weiteres Schlüsselelement bei der Suche nach Atlantis gefunden."
    ]}
  ]
};
