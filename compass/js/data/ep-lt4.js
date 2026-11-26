/* LuckTales – Folge 4 „Der Vertrag“ (Buch S. 115–123), Buch-ID bc_z1 */
BC_EP["lt4"] = {
  id: "lt4", t: "Der Vertrag", lab: "LuckTales · Folge 4", c: "#7a1b2a",
  b: "bc_z1", s: 114, img: "lt/lt4-abenteurerin",
  intro: [
    {t: "box", h: "Zum Spielen dieser Folge brauchst du", p: ["{P:wilderort} · {P:schluessel} · {P:ruinen} · {P:informant} · {P:rivale} · {P:kriminelle}"]},
    {t: "box", h: "Enthaltener Kontext", p: ["**Yaoqins himmlische Wellen** (siehe Ende der Folge, S. 122)"]}
  ],
  ctx: [
    {k: "epoche", l: "Epoche", v: "1999"},
    {k: "wilderort", l: "Wilder Ort", v: "Shouchun, Südchina"},
    {k: "schluessel", l: "Schlüssel", v: "Goldener Würfel mit der Gravur von Fuxi beim Yaoqin-Spiel"},
    {k: "ruinen", l: "Antike Ruinen", v: "Alter chinesischer Fuxi-Tempel östlich von Shouchun"},
    {k: "schatz", l: "Schatz", v: "Fuxis uraltes himmlisches Instrument, die Yaoqin"},
    {k: "informant", l: "Informant", v: "Yao Tsu, Oberster Verteidiger des Fuxi-Tempels"},
    {k: "rivale", l: "Rivale", v: "Chao Ren, ehemaliger Mönch, der seinen Gelübden entsagt hat und amerikanischer Tycoon wurde"},
    {k: "kriminelle", l: "Kriminelle", v: "Chinesische Söldnerfirma, die die Yaoqin in die Hände bekommen will"}
  ],
  scenes: [
    {t: "Mystifikation", short: "Mystifikation", ort: "VORGESCHICHTE", s: 116, blocks: [
      {t: "n", p: [
        "Nehmt euch einen Moment Zeit, um die Szene für eure Abenteurer aufzubauen. Die Kamera öffnet auf den Eingang der {P:ruinen}. Eine kleine Maus nagt in der Nähe an Überresten. Plötzlich sind hinter ihr hastige Schritte zu hören, und die Kamera richtet sich auf die Beine eures {P:rivale}. Er rennt davon.",
        "Hinter dem {P:rivale} sind die bedrohlichen Geräusche von Schüssen zu hören: {P:kriminelle} jagen ihn. Die Kugeln prallen von den Steinen der {P:ruinen} ab, und der {P:rivale} ist ängstlich, sein Atem wird immer schwerer.",
        "In einem verzweifelten Versuch, sich zu retten, springt der {P:rivale} von einer Klippe. Im letzten Bild sieht man den {P:rivale} fallen und den {P:schluessel} aus seiner Tasche rutschen, unwiederbringlich verloren."
      ]}
    ]},
    {t: "Gesellschaft", short: "Gesellschaft", ort: "INNEN/NACHT", s: 116, blocks: [
      {t: "n", p: [
        "Die Abenteurer sind alle zu einer großen Gala im Herrenhaus des {P:rivale} eingeladen. Sie kennen den Gastgeber nicht, aber eine solche Einladung abzulehnen, wäre unhöflich, und so haben sie sich am Ende entschieden, an der Gala teilzunehmen. Bald werden sie merken, dass dies viel mehr ist als eine einfache Party, nämlich ein echtes Geschäftstreffen.",
        "Die Szene beginnt mit einem schnellen Schwenk über alle Gäste und eine Gruppe von Musikanten, die den Saal unterhalten. Die Hintergrundmusik ist an sich nicht unangenehm, doch die exotischen Instrumente und fremden Klänge können für ungeübte Ohren schrill und ablenkend sein.",
        "Die Abenteurer können die Gala nach Belieben genießen, der Musik lauschen oder Informationen über das Herrenhaus und ihren Gastgeber sammeln {K:H|Einfache Herausforderung}, und gerade als die Musik jemandem auf die Nerven zu gehen beginnt, tritt der {P:rivale} an die Abenteurer heran und lädt sie ein, in einen anderen Raum zu kommen, um ihren Ohren eine Pause zu gönnen.",
        "Stimmen die Abenteurer zu, blendet die Kamera ins Schwarz ab und fokussiert neu auf das Büro."
      ]}
    ]},
    {t: "Büro des Rivalen", short: "Büro", ort: "INNEN/NACHT", s: 117, blocks: [
      {t: "n", p: [
        "Der {P:rivale} führt die Abenteurer in sein privates Büro. Hinter einer Flügeltür erwartet sie eine feine Sammlung von Gegenständen, die mit dem {P:rivale} zu tun haben."
      ]},
      {t: "d", n: "RIVALE", p: "Ich weiß, dass die Musik dort draußen vielleicht nicht nach eurem Geschmack ist, aber ich bitte euch um die Geduld, noch ein weiteres Stück zu hören, etwas ganz Besonderes."},
      {t: "n", p: [
        "Das Stück, von dem er spricht, hängt mit dem {P:schatz} zusammen, und während das Grammophon die ersten Töne von sich gibt, zeigt der {P:rivale} den Abenteurern ein Bild des {P:schatz} selbst.",
        "Der Wert des {P:schatz} wird den Abenteurern sofort klar, die in ihm sowohl einen Karrieresprung als auch ein überaus wichtiges Relikt sehen."
      ]},
      {t: "d", n: "RIVALE", p: "Wie es scheint, habe ich eure Aufmerksamkeit. Ich werde euch tatsächlich gleich bitten, diesen {P:schatz} zu suchen. Natürlich bin ich bereit, euch mehr als fair zu entlohnen. Das beste Kopfgeld, das ihr je in eurer Laufbahn gesehen habt. Ich warne euch, ihr werdet nicht die Einzigen sein, die nach diesem {P:schatz} suchen: Andere, viel einflussreichere Leute haben ein Auge darauf geworfen. Aber sie haben nicht meinen {P:informant} am {P:wilderort}. Ich habe bereits ein Flugzeug bereitgestellt, das euch dorthin bringt."},
      {t: "n", p: [
        "Nehmen die Abenteurer den Auftrag an, endet die Szene mit einer Einstellung auf den Schreibtisch, als der {P:rivale} die Tickets vor den Abenteurern auf die Platte wirft."
      ]}
    ]},
    {t: "{P:wilderort}", short: "Wilder Ort", ort: "AUSSEN/TAG", s: 118, blocks: [
      {t: "n", p: [
        "Nach dem Verlassen des Flugzeugs gehen die Abenteurer zum Flughafenausgang, wo sie einen Mann mit einem Schild mit dem Namen des {P:rivale} finden. Angesprochen antwortet der {P:informant} mit dickem Akzent des {P:wilderort}:"
      ]},
      {t: "d", n: "INFORMANT", p: "Willkommen in {P:wilderort}, ich hoffe, ihr genießt euren Aufenthalt. {P:rivale} hat mich gebeten, euch zu den {P:ruinen} zu führen, wo wir den {P:schatz} vermuten. Bitte folgt mir. Ich nehme eure Taschen."},
      {t: "n", p: [
        "Der {P:informant} verhält sich etwas seltsam, und es fällt den Abenteurern nicht schwer {K:H|Einfache Herausforderung}, zu verstehen, dass er etwas verbirgt. Aber alles in allem macht er dennoch einen guten Eindruck und scheint nichts gegen die Abenteurer im Schilde zu führen. Nachdem das Gepäck im Auto verstaut ist, sind der {P:informant} und die Abenteurer bereit, zu den {P:ruinen} aufzubrechen.",
        "Unterwegs plaudert der {P:informant} mit den Abenteurern, erzählt ihnen von den {P:ruinen} und beantwortet ihre Fragen. Irgendwann während seiner Erzählungen wird er ernst und sagt:"
      ]},
      {t: "d", n: "INFORMANT", p: "Die alten Texte des {P:wilderort} sagen, dass der {P:schatz} mit dem natürlichen Gleichgewicht dieses Ortes verbunden ist und …"},
      {t: "n", p: [
        "Während der {P:informant} weiter ausführt, bemerken die Abenteurer einige weiße Wagen, die ihnen schon seit einiger Zeit folgen. Als sie ihren Verdacht äußern wollen, lehnen sich die {P:kriminelle} aus den Autofenstern und eröffnen das Feuer auf die Abenteurer {K:F|Extremer Feind}.",
        "Während der Verfolgungsjagd nimmt einer der {P:kriminelle} einen Raketenwerfer, zielt und trifft den Wagen des {P:informant}, der über eine Klippe fliegt.",
        "Letzte Einstellung: Die weißen Wagen kommen quietschend oben an der Klippe zum Stehen, die {P:kriminelle} spähen reumütig über den Rand und sehen zerknirscht aus."
      ]}
    ]},
    {t: "Der Fluss", short: "Fluss", ort: "AUSSEN/TAG", s: 119, blocks: [
      {t: "n", p: [
        "Die Kamera öffnet über dem ruhigen Fluss, der durch den {P:wilderort} fließt, auf einer Seite das Wrack des Wagens des {P:informant}. Die Abenteurer ziehen sich aus dem Totalschaden und richten den Blick auf die {P:ruinen} auf dem Gipfel eines nahen Hügels. Das Auto ist nicht mehr zu gebrauchen, aber ein Pfad schlängelt sich durch die Vegetation, die am Flussufer wuchert."
      ]},
      {t: "d", n: "INFORMANT", p: "Wir haben geahnt, dass sie uns folgen. Sie suchen den {P:schatz}, genau wie wir. Seid da draußen besser vorsichtig."},
      {t: "n", p: [
        "Wie recht der {P:informant} hat, merken die Abenteurer bald, als sie mehrere {P:kriminelle} finden, die den Pfad zu den {P:ruinen} bewachen. Die Abenteurer müssen einen Weg finden, ohne entdeckt zu werden {K:H|Einfache Herausforderung}.",
        "Nach der ersten Patrouille der {P:kriminelle} kommen die Abenteurer den {P:ruinen} näher. Sie gelangen zu einem Wasserfall, der über Felsen stürzt. In diesem ruhigen Moment, nach der Verfolgung und Flucht, können sie sich einen Augenblick Zeit nehmen, die Schönheit der Natur zu würdigen, doch etwas, das neben ihnen auf dem Boden liegt, erregt ihre Aufmerksamkeit. Es ist der {P:schluessel}. Als sie hinaufblicken, woher er gefallen sein könnte, sehen die Abenteurer die Spitze der {P:ruinen}. Nehmen sie den {P:schluessel} nicht an sich, steckt der {P:informant} ihn ein.",
        "Von dieser Stelle aus die {P:ruinen} zu erreichen, ist nicht einfach {K:H|Kritische Herausforderung}. Die Abenteurer müssen entweder hinaufklettern oder einen geheimen Durchgang finden. Sie können auch den langen Weg nehmen und versuchen, die Hauptstraße zu erreichen, riskieren dort aber, den {P:kriminelle} zu begegnen. Welchen Weg sie auch nehmen: Wenn die Abenteurer den {P:ruinen} gegenüberstehen, beginnt die nächste Szene."
      ]}
    ]},
    {t: "{P:ruinen}", short: "Ruinen", ort: "INNEN/TAG", s: 120, blocks: [
      {t: "n", p: [
        "Nachdem sie die {P:ruinen} erreicht haben, merken die Abenteurer, dass sie völlig allein sind. Jemand scheint vor Kurzem über diese Böden gegangen zu sein, doch die Heiligkeit und Stille des Ortes sind unversehrt.",
        "Ihr Weg durch die Ruinen wird von vielem behindert. Allem voran vom Alter und der Zerbrechlichkeit der Gebäude, aber auch von heimtückischen Fallen an jeder Ecke. Gerade als einer der Abenteurer den ersten Schritt in den inneren Bereich der Ruinen setzt, wird eine Falle ausgelöst.",
        "Sie betreten einen Raum von etwa 10 mal 30 Fuß, und die Decke beginnt sich bedrohlich zu senken, sodass sie hindurchrennen müssen {K:G|Kritische Gefahr}. Nach der ersten Falle erwartet die Abenteurer eine Wasserwand, die sie gegen die Steinwand drückt {K:G|+1 kritische Gefahr}, und nachdem sie den Aufprall überstanden haben, müssen sie sich mit von der Decke fallenden Schlangen auseinandersetzen {K:G|+1 kritische Gefahr}. Reicht das Gift der Schlangen nicht, um die Abenteurer zu entmutigen, müssen sie sich über eine einstürzende Steinbrücke hinwegrollen und sich dabei nur auf einige Ranken verlassen {K:G|Extreme Gefahr}.",
        "Nachdem ihr euch durch alle Fallen gekämpft habt, dreht ihr euch um und seht euren {P:informant} völlig ehrfürchtig vor dem steinernen Eingang stehen, der vor euch aufragt. Und wirklich, wenn euch ein solcher Anblick nicht rührt, solltet ihr einen Berufswechsel erwägen! Während ihr alle in der architektonischen Pracht der Ruinen schwelgt, hört ihr ein tiefes, dumpfes Grollen von jenseits der Türen. Wenn ihr in die Dunkelheit späht, seht ihr eine aufragende, dunkle Steinapsis.",
        "Es ist klar, dass der {P:schluessel} nun auf dieses Geräusch reagiert. Er zittert in eurer Tasche und hallt mit wachsender Lautstärke das Geräusch wider, das aus der Dunkelheit kommt. Als ihr glaubt, dass eure Trommelfelle nicht mehr aushalten, zerspringt die Steinapsis vor euch und öffnet den Weg zur Schatzkammer."
      ]}
    ]},
    {t: "Schatzkammer", short: "Schatzkammer", ort: "INNEN/TAG", s: 121, blocks: [
      {t: "n", p: [
        "Der Fokus liegt auf dem {P:schatz}, und das Bild weitet sich mehr und mehr, bis es den ganzen Raum erfasst. Die Wände sind vom Boden bis zur Decke mit Blumen bedeckt, ein betörender Duft liegt in der Luft, und ein schwaches Licht scheint auf den {P:schatz} und lockt einen Schwarm Schmetterlinge an, die um ihn flattern.",
        "Ein langsamer, rhythmischer Applaus begrüßt die Abenteurer."
      ]},
      {t: "d", n: "RIVALE", p: "Absolut großartig, perfekte Arbeit. Ich hätte nie erwartet, dass ihr es so weit schafft. Ich muss mich aufrichtig bei euch bedanken, ohne euch wäre ich nie an diesen Ort gelangt. Und doch habt ihr es geschafft, ihr und ein einfacher Führer."},
      {t: "n", p: [
        "Mit diesen Worten tritt der {P:rivale} aus den Schatten der Tür hinter den Abenteurern."
      ]},
      {t: "d", n: "INFORMANT", p: "Nicht nur ein einfacher Führer."},
      {t: "n", p: [
        "Der {P:informant} antwortet mit düsterer Stimme, und alle hören das deutliche Klicken einer Waffe, die entsichert wird."
      ]},
      {t: "d", n: "INFORMANT", p: "Habt ihr wirklich geglaubt, ich würde euch ohne Gegenwehr hierherführen?"},
      {t: "n", p: [
        "Der {P:rivale} zieht schnell seine Pistole, und sofort wird die Atmosphäre dieses idyllischen Ortes angespannt. Die beiden wenden sich an die Abenteurer, beide suchen deren Hilfe."
      ]},
      {t: "d", n: "INFORMANT", p: "{P:rivale} hat euch benutzt, um den {P:schatz} aus den {P:ruinen} zu stehlen, ohne Rücksicht auf dessen Bedeutung für das Gleichgewicht des {P:wilderort}. Abenteurer, helft mir."},
      {t: "d", n: "RIVALE", p: "Hört nicht auf diesen alten Narren! Er steckt mit den {P:kriminelle} unter einer Decke. Tötet sie und holt das Relikt."},
      {t: "n", p: [
        "Die Abenteurer müssen sich schnell entscheiden, auf welche Seite sie sich stellen: Nach einer Runde eröffnen der {P:rivale} und der {P:informant} das Feuer aufeinander."
      ]}
    ]}
  ],
  outro: [
    {h: "Yaoqins himmlische Wellen", s: 122},
    {t: "prose", p: ["**Kontext zu „Der Vertrag“**"]},
    {t: "table", cols: ["Platzhalter", "Vorgabe"], first: true, rows: [
      ["Epoche", "1999"],
      ["Wilder Ort", "Shouchun, Südchina"],
      ["Schlüssel", "Ein goldener Würfel mit einer Gravur, die Fuxi beim Spielen der Yaoqin zeigt. Der Würfel hat ein rundes Loch, das an den Klangkörper eines Saiteninstruments erinnert."],
      ["Antike Ruinen", "Alter chinesischer Tempel für Fuxi, östlich von Shouchun gelegen"],
      ["Schatz", "Fuxis uraltes himmlisches Instrument, die Yaoqin"],
      ["Informant", "Yao Tsu, Oberster Verteidiger des Fuxi-Tempels"],
      ["Rivale", "Chao Ren, ehemaliger Mönch, der seinen Gelübden entsagt hat und amerikanischer Tycoon wurde"],
      ["Kriminelle", "Chinesische Söldnerfirma, die die Yaoqin in die Hände bekommen will"]
    ]},
    {t: "prose", p: [
      "Nachdem er aus dem Tempel von Shouchun geflohen ist, wo er die Yaoqin hatte suchen wollen, kehrt Chao Ren besiegt in seine amerikanische Residenz zurück. Entschlossen, nicht aufzugeben, lädt er die Abenteurer zu einer Party ein, auf der er versucht, sie zu überzeugen, für ihn zu arbeiten.",
      "Er bietet ihnen die Chance ihres Lebens: die Gelegenheit, eines der ältesten Musikinstrumente der chinesischen Legenden zu bergen.",
      "Es heißt, der Gegenstand sei von Fuxi selbst gefertigt worden, dem Sohn des Donnergottes.",
      "Die Rolle der Yaoqin in der Legende ist reich an Symbolik. Sie misst vier Zoll im Durchmesser, was für die vier Jahreszeiten steht, und ist zwei Zoll dick, als Sinnbild der gegensätzlichen Kräfte von Yin und Yang. Fuxi brachte zwölf Tasten darauf an, eine für jeden Monat, und bespannte sie mit fünf Saiten, als Sinnbild der fünf Elemente.",
      "Das Instrument ist in einem Tempel tief in den Wäldern um Shouchun verborgen.",
      "Auf der anderen Seite der Welt wartet auf die Abenteurer die einzige Person, der Chao Ren vertraut. Was er aber nicht weiß: Wer die Abenteurer bei ihrer Ankunft in China tatsächlich begrüßt, ist der Oberste Verteidiger des Fuxi-Tempels, Yao Tsu.",
      "Er gibt sich als Chao Rens Informant aus und führt die Abenteurer auf ihrer Reise in der Hoffnung, den ehemaligen Mönch hervorzulocken. Doch die Söldnergruppe, die Chao Ren jagt und ihn zur Flucht aus dem Tempel zwang, ist nun hinter den Abenteurern und dem Schlüssel her.",
      "Die Söldner werden alles in ihrer Macht Stehende tun, um die Abenteurer und Yao Tsu daran zu hindern, die antiken Ruinen zu erreichen, während sie den Wald durchkämmen, um den Schlüssel zu finden, den Chao Ren bei seiner Flucht aus dem Tempel verloren hat.",
      "Der Schlüssel ist ein Klangkörper, der mit den Schwingungen mitschwingen kann, die die Yaoqin unablässig aussendet. Diese Schwingungen sind die Quelle von Gleichgewicht und Harmonie in den Ländern um Shouchun. Würde man das Instrument aus dem Tempel entfernen, geriete dieses empfindliche Gleichgewicht in Gefahr und löste Naturkatastrophen aus.",
      "In dem Raum, in dem die Yaoqin aufbewahrt wird, müssen die Abenteurer ihre endgültige Entscheidung treffen. Wenn Chao Ren erscheint und seine Absicht offenbart, das Instrument von diesem Ort zu stehlen, legt auch Yao Tsu seine Karten offen und verrät den Abenteurern seine wahre Identität und die Bedeutung der Yaoqin.",
      "Werden sie das Instrument in seinem heiligen Schrein lassen und das natürliche Gleichgewicht der Dinge verteidigen? Werden sie sich entscheiden, es aus dem Tempel zu entfernen und die ganze Provinz den Kräften der Natur zu überlassen, um ihr Kopfgeld zu erhalten?",
      "Der Abstand, der in Südchina Frieden von Tragödie trennt, ist die Länge einer Kugel."
    ]}
  ]
};
