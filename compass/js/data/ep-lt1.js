/* LuckTales – Folge 1 „Der Schatz im See“ (Buch S. 81–92), Buch-ID bc_z1 */
BC_EP["lt1"] = {
  id: "lt1", t: "Der Schatz im See", lab: "LuckTales · Folge 1", c: "#7a1b2a",
  b: "bc_z1", s: 81, img: "lt/lt1-wasserflugzeug",
  intro: [
    {t: "box", h: "Das brauchst du für diese Folge", p: [
      "{P:geheimnissee} · {P:dorf} · {P:supermacht} · {P:militaerbasis} · {P:fragment} · {P:schluessel} · {P:mysterioeser_schatz} · {P:fernes_volk} · {P:rivale} · {P:handlanger}",
      "Enthaltener Kontext: **Letzte Fahrt nach Toplitz** (siehe Ende der Folge, S. 92)"
    ]}
  ],
  ctx: [
    {k: "epoche", l: "Epoche", v: "1999"},
    {k: "geheimnissee", l: "Geheimnisvoller See", v: "Toplitzsee"},
    {k: "dorf", l: "Dorf", v: "Bad Aussee, Österreich"},
    {k: "supermacht", l: "Supermacht", v: "Nazi-Deutschland"},
    {k: "militaerbasis", l: "Militärbasis", v: "Unterirdische Basis der Thule-Gesellschaft"},
    {k: "fragment", l: "Fragment", v: "Bronzezahnrad, nicht weit vom See geborgen"},
    {k: "schluessel", l: "Schlüssel", v: "Die Kombination aus dem Bronzezahnrad der Abenteurer und dem geätzten Stück, das Hauptmann Vondertoff, der Rivale, gefunden hat"},
    {k: "mysterioeser_schatz", l: "Mysteriöser Schatz", v: "Der antike mechanische Kalender, der angeblich die Zukunft vorhersagt; er ähnelt dem weitaus berühmteren Mechanismus von Antikythera stark"},
    {k: "fernes_volk", l: "Fernes Volk", v: "Die hellenische Zivilisation"},
    {k: "rivale", l: "Rivale", v: "Hanz Vondertoff, Enkel des ersten Kommandanten und Mitglied der Thule-Gesellschaft"},
    {k: "handlanger", l: "Handlanger", v: "Die Dorfbewohner von Bad Aussee"},
    {k: "schatz", l: "Schatz im See", v: "Riesige Menge gefälschter Pfund Sterling, die die Nazis im See versenkt haben"}
  ],
  scenes: [
    {t: "Wasserflugzeug", ort: "INNEN/TAG", s: 82, blocks: [
      {t: "n", p: [
        "Das Licht, das durch die hinteren Fenster des Wasserflugzeugs der Abenteurer fällt, ist blendend und dringt in jede Ecke des Cockpits. Die Gruppe bespricht die Informationen, die sie hat, und das {P:fragment}, das sie dazu gebracht hat, zu einem neuen Abenteuer aufzubrechen, nahe dem abgelegenen {P:dorf} am Ufer des {P:geheimnissee}.",
        "Es heißt, dass genau auf dem Grund des {P:geheimnissee} ein {P:schatz} liegt, zurückgelassen von den Truppen einer {P:supermacht} unter mysteriösen Umständen. Manche sagen, dort unten lägen Berge von Münzen, vielleicht auch wertvolle Kunstwerke. Bei all den Gerüchten scheint jedoch niemand etwas über das {P:fragment} zu wissen, das unter den Unterlagen der Abenteurer aufgetaucht ist. Man kann nur vermuten, dass es Teil von etwas Größerem ist."
      ]},
      {t: "d", n: "SELTSAMER PILOT", p: "Der alte Apollo hier ist launisch, die Motoren spielen verrückt. Wir müssen auf dem See landen. Haltet euch fest!"},
      {t: "n", p: [
        "Der Seltsame Pilot packt den Steuerknüppel und leitet entschlossen das Landemanöver ein. In diesem Moment rutscht sein Ärmel ein Stück hoch, und die Abenteurer erhaschen einen Blick auf ein merkwürdiges Tattoo {K:H|Einfache Herausforderung}. Es sieht aus wie ein Gewirr aus Zahnrädern und Rädchen, das sich um sein linkes Handgelenk bis auf die Hand windet und dort in einem stilisierten Pfeil endet. Über dem Pfeil steht ein einziges Wort: NORD {K:Hw|Hinweis}. Allen Fragen der Abenteurer dazu weicht der Pilot aus und sieht ihnen nur nach, als sie sein Flugzeug verlassen.",
        "Das Wasserflugzeug landet mitten auf dem {P:geheimnissee} und lässt Wasserfontänen von einem Dutzend Fuß Höhe aufschießen. Ein kleines Boot nähert sich dem Flugzeug, um die Abenteurer ans Ufer zu bringen."
      ]}
    ]},
    {t: "Dorf", ort: "AUSSEN/TAG", s: 83, blocks: [
      {t: "n", p: [
        "Als sie das {P:dorf} erreichen, werden die Abenteurer von den Einheimischen sehr kühl empfangen. Nicht so, wie man eine Gruppe Touristen erwarten würde. Es gibt viele falsche Lächeln, aber sie sind zu durchsichtig, um die abweisenden Blicke zu verbergen, die die Neuankömmlinge ernten.",
        "Obwohl sie offensichtlich nicht willkommen sind, werden die Abenteurer dennoch von Einheimischen begrüßt: Das Café bietet regionale Speisen an, die Kassiererin im Souvenirladen fegt vor dem Eingang und wirft ihnen hin und wieder einen Blick zu, und einige Leute schlendern ruhig durch die Straßen des {P:dorf}. Alles in allem unterscheidet es sich kaum von anderen Touristenorten, aber den Abenteurern fällt ein unheimliches Detail auf {K:H|Einfache Herausforderung}: Alle Einheimischen sehen sich auffallend ähnlich. Irgendetwas stimmt hier nicht.",
        "Am Steg sitzt ein Einsamer Bootsmann. Er ist ein Mann weniger Worte, der sich entschieden hat, außerhalb der Gemeinschaft zu leben. Freunden sich die Abenteurer mit einem der Einheimischen an {K:H|Kritische Herausforderung}, erfahren sie, dass der See sehr gefährlich ist. Das Licht dringt kaum 10 Meter tief unter die Oberfläche, und um den Grund zu erreichen, braucht man einen Taucheranzug oder Pressluftflaschen.",
        "An den Wänden hängen noch immer vereinzelte Plakate, die zeigen, dass das {P:dorf} vor nicht allzu langer Zeit einen neuen Bürgermeister gewählt hat. Das lächelnde Gesicht des siegreichen Kandidaten gehört dem künftigen {P:rivale}."
      ]}
    ]},
    {t: "Steg am {P:geheimnissee}", short: "Steg", ort: "AUSSEN/TAG", s: 83, blocks: [
      {t: "n", p: [
        "Zum Erkunden des Sees bleibt nicht viel Zeit, denn die Sonne geht bereits unter und die Dorfbewohner verschwinden in der Ferne. Die Abenteurer können beim Einsamen Bootsmann ein Boot mieten.",
        "Der bullige Mann mit dichtem Bart und tiefen Augen sitzt auf einem Baumstamm am Steg vor seinem Schuppen und starrt zur Mitte des {P:geheimnissee}. Als die Abenteurer näher kommen, zuckt er zusammen, als hätten sie ihn gerade aufgeweckt."
      ]},
      {t: "d", n: "EINSAMER BOOTSMANN", p: "Hallo, furchtlose Leute! Ähm … ich muss wirklich aufhören, diese Begrüßung zu benutzen. Ihr sucht ein Boot, um den See zu erkunden, richtig? Das klingt vielleicht seltsam, aber ihr habt euch einen guten Tag dafür ausgesucht. Das Wasser riecht nach … Entdeckung."},
      {t: "n", p: [
        "Seltsamerweise trägt der Mann am Arm ein Tattoo, das dem des Piloten sehr ähnlich ist. Bei genauerem Hinsehen {K:H|Einfache Herausforderung} ist es sogar völlig identisch. Der einzige Unterschied: Es befindet sich auf seinem rechten Arm, und das Wort über dem Pfeil am Ende lautet OST {K:Hw|Hinweis}."
      ]},
      {t: "cut"},
      {t: "n", p: [
        "Das Boot legt vom Steg ab und lässt sanfte Wellen über die Seeoberfläche laufen. Der Bootsmann kehrt zu seinem Baumstamm zurück und sieht den davonfahrenden Abenteurern nach."
      ]}
    ]},
    {t: "{P:geheimnissee}", short: "See", ort: "AUSSEN/TAG", s: 84, blocks: [
      {t: "n", p: [
        "Die Abenteurer bereiten sich auf den Tauchgang vor: An Bord gibt es nur Ausrüstung für zwei und Sauerstoff für ein paar Stunden. Die Abenteurer müssen entscheiden, wer taucht und wer als Unterstützung im Boot bleibt. Ringsum ist der See völlig still. Zum Ufer hin erkennen die Abenteurer nur einige Fischerboote und ein paar Touristen.",
        "Tauchen die gewählten Abenteurer tiefer als 10 Meter unter die Oberfläche, sehen sie sofort, warum der Ort als gefährlich gilt: Der Sauerstoffgehalt sinkt rapide, es gibt kaum genug Licht zum Sehen, und das kalte Wasser erschwert jede Bewegung. Wer nicht zäh genug ist {K:H|Kritische Herausforderung}, ist FRIEREND.",
        "Nach etwa zwei Stunden erfolgloser Suche verfängt sich ein Abenteurer in einem Gewirr aus Wasserpflanzen. Es wird schwer, sich zu befreien {K:H|Einfache Herausforderung}, aber wenn es gelingt, die Pflanzen vollständig abzureißen {K:H|Kritische Herausforderung}, legt er einen Tunnel frei, der noch tiefer unter den See führt."
      ]},
      {t: "cut"},
      {t: "n", p: [
        "Möglichst unauffällig umzingeln die Fischerboote langsam die an Bord gebliebenen Abenteurer.",
        "Die angespannte Zweideutigkeit der Lage zerplatzt, als vier Taucher aus dem Wasser springen und Harpunen auf die Abenteurer richten. Dreißig {P:handlanger} in Militäruniformen tauchen auf den Fischerbooten auf, jeder bis an die Zähne bewaffnet {K:F|Extremer Feind}. Soldaten? Was machen die hier? Der einzige Ausweg führt durch das Wasser des {P:geheimnissee}."
      ]},
      {t: "cut"},
      {t: "n", p: [
        "Unter Wasser geht den tauchenden Abenteurern fast der Sauerstoff in den Flaschen aus, aber zum Glück müssen sie sich nicht mehr mit Wasserpflanzen herumschlagen.",
        "Doch als sie zur Oberfläche schwimmen, erleben sie ein böses Erwachen. Eine Stahlstange trifft die Sauerstoffflaschen, und drei Taucher erreichen sie mit alles anderem als freundlichen Absichten {K:F|Kritischer Feind}.",
        "Als der Kampf seinen Höhepunkt erreicht, beginnt das {P:fragment} zu vibrieren und ein hohes Geräusch auszusenden. Der Abenteurer, der es bei sich trägt, kann nur hilflos zusehen, wie es ihm aus der Tasche gleitet und in die trüben Tiefen sinkt.",
        "Das {P:fragment} sinkt langsam an den noch unter Wasser befindlichen Abenteurern vorbei. Es schwingt offensichtlich im Gleichklang mit etwas, das auf dem Grund des {P:geheimnissee} liegt, und verschwindet bald durch den soeben entdeckten Tunnel."
      ]}
    ]},
    {t: "Höhlen", ort: "INNEN/TAG", s: 85, blocks: [
      {t: "n", p: [
        "Dem {P:fragment} folgend, durchqueren die Abenteurer den Tunnel am Grund des {P:geheimnissee}. Als sie näher kommen, erfasst sie eine seltsame Strömung in einem Strudel und zieht sie gewaltsam nach unten.",
        "Die Abenteurer werden mitgerissen und gegen die felsigen Wände des Unterwassertunnels geschleudert {K:G|2 einfache Gefahren + 1 einfache Gefahr, um die Ausrüstung nicht zu verlieren}. Der Strudel wirft sie gewaltsam über einige Felsen und lässt sie von Gestein, Dunkelheit und Feuchtigkeit umgeben zurück. In dieser natürlichen unterirdischen Höhle können sie endlich eine Pause einlegen und durchatmen, im übertragenen wie im wörtlichen Sinn, denn endlich gibt es wieder Luft.",
        "Sobald sie eine Lichtquelle finden, sehen sie, dass in den Höhlen überall menschliche Skelette, abgenutzte Gerätschaften, Tierknochen, Waffen und Rüstungen aus längst vergangenen Zeiten verstreut liegen. Ein wahrhaft Knochen erschütternder Anblick.",
        "Alles Überreste einer Zivilisation, die aus der Zeit gefallen ist und nicht zur Siedlung am {P:geheimnissee} passt, und die die Abenteurer neugierig und bestürzt zurücklässt. Aber das ist nicht die letzte Überraschung des Tages.",
        "Am Ende der Höhle befindet sich ein uraltes Portal, direkt in den Stein geschlagen, darüber die Schnitzerei zweier menschlicher Gestalten. Kundige Leute {K:H|Einfache Herausforderung} erkennen die Artefakte und das Portal als Schöpfungen des {P:fernes_volk}. Die beiden Gestalten sehen einander sehr ähnlich, und auf ihren steinernen Armen sind seltsame Zeichen angebracht: bei der einen links, bei der anderen rechts. Über ihren Köpfen steht ein Satz in einer uralten Sprache {K:H|Kritische Herausforderung}."
      ]},
      {t: "clue", k: "Portalhinweis", p: "Der Wächter des Wassers und der Wächter der Luft weisen den Weg zum Wissen. Der Schlüsselträger muss ihrem Pfad folgen, ehe er hindurchschreitet."},
      {t: "n", p: [
        "In der Mitte des Portals befindet sich ein kleiner Schlitz im Stein. Moment … die Symbole auf den Gestalten sehen den Tattoos des Seltsamen Piloten und des Einsamen Bootsmanns sehr ähnlich!",
        "Weit seitlich dringen Geräusche aus einer anderen, größeren Öffnung in der Felswand. In der Ferne sind Stimmen zu hören, und hin und wieder blinkt ein Licht. Als sie durch die Öffnung kriechen {K:H|Einfache Herausforderung}, finden sich die Abenteurer in einem völlig anderen Raum wieder.",
        "Es ist eine künstliche Umgebung unter der Erde, offensichtlich frisch gebaut und verstärkt. Der Raum scheint ein kleines Lager zu sein, gefüllt mit Konservendosen, Militärkleidung und einigen Feuerwaffen. Jeder Technikkundige erkennt leicht, dass die Waffen alt und nicht mehr schussfähig sind {K:H|Kritische Herausforderung}.",
        "Eine größere Tür führt in einen Gang, der Teil einer großen {P:militaerbasis} zu sein scheint.",
        "Die Kurbel zum Öffnen der Tür ist festgerostet, doch durch die kleine Scheibe in der Tür sehen die Abenteurer Schatten durch die Gänge huschen."
      ]}
    ]},
    {t: "{P:militaerbasis}", short: "Militärbasis", ort: "INNEN/TAG", s: 87, blocks: [
      {t: "n", p: [
        "Die {P:militaerbasis} ist ein Labyrinth aus Gängen. Überall kleben die Symbole einer untergegangenen {P:supermacht}.",
        "Von allen Seiten sind Stimmen zu hören, {P:handlanger}, die in ihrer Muttersprache reden. Kurze, knappe Sätze. Sie suchen die Abenteurer. Sie haben den Befehl, sie lebend zu fangen und ihrem Anführer zu bringen.",
        "Die Abenteurer können versuchen, die {P:militaerbasis} heimlich zu erkunden {K:H|Einfache Herausforderung}, aber wenn sie die {P:handlanger} alarmieren, müssen sie um ihre Freiheit kämpfen {K:F|3 kritische Feinde}.",
        "Mehrere Räume in der {P:militaerbasis} könnten die Abenteurer interessieren.",
        "Die **Waffenkammer** ist mit funktionstüchtigen Waffen, Bomben und Rauchbomben ausgestattet. Eine sorgfältige Durchsuchung des Raums {K:H|Kritische Herausforderung} fördert Uniformen und Gasmasken zutage.",
        "Das **Lagerhaus** ist randvoll mit Kisten, die allerlei Vorräte enthalten. Mit einem guten Wurf auf Beobachtung finden die Abenteurer fast alles, was sie suchen.",
        "Das **Büro des ersten Kommandanten** scheint seit Jahren verschlossen zu sein und birgt wichtige Hinweise. Es ist tapeziert mit Notizen, Zeichnungen und alten Büchern. All diese Dokumente kreisen zwanghaft um Formen, die dem Goldenen Schnitt sehr ähnlich sind. Wer auch immer diese absurde Forschung leitete, war überzeugt, dass die berühmte geometrische Form in Wahrheit der Schlüssel zu irgendeinem Geheimnis sei {K:Hw|Hinweis}.",
        "Beim Lesen der Notizen erfahren die Abenteurer, dass die {P:supermacht} nach einem {P:mysterioeser_schatz} suchte, der sich stark von dem unterscheidet, was angeblich auf dem Grund des Sees liegt. Etwas, das die Welt für immer verändern würde.",
        "Auf dem Schreibtisch steht ein Foto des ersten Kommandanten, der die {P:militaerbasis} erbaut hat. Der Kommandant trägt seine Militäruniform, lächelt und hält ein Kind im Arm. An seiner Jacke ist deutlich ein länglicher Gegenstand zu erkennen, der aus demselben Material besteht wie das {P:fragment}. Könnte das ein Teil des Schlüssels sein?",
        "Die Ähnlichkeit des Kommandanten mit dem {P:rivale} ist kaum zu übersehen. Die beiden sind offensichtlich irgendwie verwandt."
      ]},
      {t: "cut"},
      {t: "n", p: [
        "Der {P:rivale} biegt in einen Gang der {P:militaerbasis} ein; er ist wütend und von atemlosen Soldaten umgeben."
      ]},
      {t: "d", n: "RIVALE", p: "Habt ihr sie erwischt? Weiß irgendjemand, wo sie sind? Ich will Antworten, ihr Idioten!"},
      {t: "n", p: [
        "Die Anwesenheit des {P:rivale} wird über alle Funkgeräte durchgesagt, gleich gefolgt vom Befehl an das gesamte Personal, sich im Lagerhaus zu versammeln. Das könnte die Chance der Abenteurer sein, Licht in den Wahnsinn zu bringen, der hier vor sich geht."
      ]},
      {t: "cut"},
      {t: "n", p: [
        "Das Lagerhaus ist voller {P:handlanger}, die flüsternd auf den {P:rivale} warten. In der Menge erkennen die Abenteurer viele Gesichter aus dem {P:dorf} wieder. Nur der Einsame Bootsmann und der Seltsame Pilot scheinen zu fehlen. Als der {P:rivale} das Lagerhaus betritt, zieht er seine Jacke aus und lässt eine dröhnende Faust auf eine Munitionskiste niedersausen. Aus der Jackentasche sehen die Abenteurer den länglichen Gegenstand, den sie eben auf dem Foto im Büro gesehen haben. Wieder beginnt das {P:fragment} zu vibrieren."
      ]},
      {t: "d", n: "RIVALE", p: "Ruhe! Mir ist klar, dass ihr alle wegen der aktuellen Lage besorgt seid, aber wir haben schon Schlimmeres überstanden und sind immer noch hier. Die jüngste Gruppe von Grabräubern ist einfach hartnäckiger als die anderen. Einige von euch behaupten, sie hätten ein {P:fragment} unter ihren Sachen gesehen. Ihr müsst diese Ratten fangen und zu mir bringen. Ich will sie lebend, ist das klar? Ich will sie persönlich verhören."},
      {t: "n", p: [
        "Als Nächstes müssen die Abenteurer das Artefakt des {P:rivale} in ihre Hände bekommen. Es ihm direkt aus der Tasche zu ziehen, ist wahrscheinlich die beste Wahl {K:H|Kritische Herausforderung}, und wenn die Abenteurer sowohl Uniformen als auch Gasmasken gefunden haben, haben sie bei dem Versuch einen Vorteil. Doch der Preis des Scheiterns ist hoch, denn wenn sie entdeckt werden, müssen sie kämpfen oder vor einer großen Zahl Soldaten fliehen {K:F|Extremer Feind}.",
        "Kommen das {P:fragment} und der geheimnisvolle Gegenstand in der Tasche des {P:rivale} einander nahe, schnappen sie wie zwei sehr starke Magnete zusammen und bilden ein Stück. Der {P:schluessel} ist nun in den Händen der Abenteurer, und sie können zum steinernen Portal zurückkehren."
      ]}
    ]},
    {t: "Höhlen", ort: "INNEN/NACHT", s: 89, blocks: [
      {t: "n", p: [
        "Wenn der {P:rivale} die Abenteurer nicht verfolgt, ist es nur eine Frage der Zeit, bis er merkt, dass er bestohlen wurde. Der letzte Kampf lässt sich nicht lange vermeiden.",
        "Um das uralte Portal zu öffnen, müssen die Abenteurer die Hinweise der Inschrift deuten und den {P:schluessel} in die Richtungen drehen, die auf den Tattoos des Bootsmanns und des Piloten stehen. Eine Drehung nach OST und dann eine nach NORD. Das Schloss klickt, und das Portal öffnet sich.",
        "Nach einigen Schritten durch einen dunklen, staubigen Tunnel öffnet sich ein Ort, der jeder Wirklichkeit spottet. Ein steinerner Gang hängt über dem Abgrund einer Höhle. Boden und Decke sind kaum zu erkennen. Der ganze Ort scheint in grünliches Licht getaucht zu sein. Die Atmosphäre ist unheimlich, und den Abenteurern stockt das Herz, als sie einen gewaltigen Felsgipfel am Ende der Höhle erreichen. Ungläubig folgen ihre Blicke ihm nach oben vor dem leeren Hintergrund.",
        "Der steinerne Gang führt zum Gipfel und verzweigt sich, sobald sie nahe herankommen, in mehrere Treppen und Pfade, die nach oben führen. Den Weg zu wählen ist die letzte Herausforderung, der sich die Abenteurer stellen müssen, um den {P:mysterioeser_schatz} zu erreichen.",
        "Der einzige sichere Weg ist der, der sich spiralförmig nach oben windet. Nur ein Abenteurer, der sich richtig an den Hinweis aus dem Büro des ersten Kommandanten erinnert, oder einer mit sehr scharfem Blick {K:H|Kritische Herausforderung} erkennt, dass er exakt dem Goldenen Schnitt folgt.",
        "Liegt die Intuition der Abenteurer falsch und wählen sie einen anderen Pfad, bricht der Boden unter ihren Füßen weg, und sie stoßen auf tödliche Fallen und unpassierbare Abschnitte {K:G|3 kritische Gefahren}."
      ]},
      {t: "cut"},
      {t: "n", p: [
        "Auf dem Gipfel ist die Spitze seltsam flach und weit. In der Mitte erkennen die Abenteurer einen Gegenstand, der schwer zu bestimmen ist. Der {P:mysterioeser_schatz}.",
        "Das Artefakt ist etwa so groß wie eine Schreibmaschine und scheint etwas zwischen einer uralten Reliquie und einer technisch hochentwickelten Apparatur zu sein. Auf seinen Zahnrädern steht eine Inschrift."
      ]},
      {t: "clue", k: "Rätsel auf der Apparatur", p: "Die heilige Folge enthüllt das Schicksal vieler."},
      {t: "n", p: [
        "Die Apparatur hat eine Reihe behelfsmäßiger Tasten, die, der Reihe nach gedrückt, eine Zahlenfolge darstellen. Die richtige Antwort, um den {P:mysterioeser_schatz} zu aktivieren, ist wiederum der Goldene Schnitt.",
        "Gerade als die Abenteurer die Folge vollenden wollen, erscheint der {P:rivale} an der Spitze einer Gruppe {P:handlanger}. Ihre Waffen sind auf die Abenteurer gerichtet. {K:F|Unmöglicher Feind}"
      ]},
      {t: "d", n: "RIVALE", p: "Waffen weg! Hände hoch und weg vom {P:mysterioeser_schatz}! Keine Mätzchen, wer sich als Erster rührt, ist tot."},
      {t: "n", p: [
        "Der {P:rivale} tritt vor und versucht, den {P:mysterioeser_schatz} an sich zu nehmen, doch eine zweite dramatische Wendung stellt die Lage erneut auf den Kopf.",
        "Der Bootsmann und der Pilot greifen die {P:handlanger} des {P:rivale} an und geben den Abenteurern die Chance, auf die sie gewartet haben, um die Oberhand zu gewinnen."
      ]},
      {t: "d", n: "BOOTSMANN UND PILOT", p: "Der {P:mysterioeser_schatz} hat euch auserwählt! Schafft ihn hier raus! Den Müll beseitigen wir!"},
      {t: "n", p: [
        "Die Abenteurer können kämpfen {K:F|3 kritische Feinde} oder mit dem {P:mysterioeser_schatz} fliehen {K:G|Kritische Gefahr}."
      ]},
      {t: "cut"},
      {t: "n", p: [
        "Einige Tage später, an einem sicheren Ort weit vom {P:geheimnissee} entfernt, erhalten die Abenteurer endlich Antworten aus der wissenschaftlichen Analyse des {P:mysterioeser_schatz}. Er gehört tatsächlich zum {P:fernes_volk} und wurde vor zweitausend Jahren gebaut. Mehr noch: Die Apparatur wurde aktiviert, und die verschlüsselte Botschaft, die sie ausgesandt hat, wurde umgehend übersetzt."
      ]},
      {t: "clue", k: "Botschaft des mysteriösen Schatzes", p: "Die Welt, die Menschheit und die Götter schreiten alle ihrem Ende entgegen. Das Unvermeidliche wird in der Hauptstadt in 803047 Tagen geschehen, zur Wintersonnenwende."},
      {t: "n", p: [
        "Eine kurze Rechnung offenbart die erschreckende und aufregende Wahrheit: Das Datum, das der {P:mysterioeser_schatz} soeben genannt hat, liegt vier Tage entfernt."
      ]}
    ]}
  ],
  outro: [
    {h: "Letzte Fahrt nach Toplitz", s: 92},
    {t: "prose", p: ["**Kontext zu „Der Schatz im See“**"]},
    {t: "table", cols: ["Platzhalter", "Vorgabe"], first: true, rows: [
      ["Epoche", "1999"],
      ["Geheimnisvoller See", "Toplitzsee"],
      ["Dorf", "Bad Aussee, Österreich"],
      ["Supermacht", "Nazi-Deutschland"],
      ["Militärbasis", "Unterirdische Basis der Thule-Gesellschaft"],
      ["Schatz", "Riesige Menge gefälschter Pfund Sterling, die die Nazis im See versenkt haben. Sie wurden geschaffen, um die britische Wirtschaft unter der Last einer ausufernden Inflation in die Knie zu zwingen."],
      ["Fragment", "Bronzezahnrad, nicht weit vom See geborgen"],
      ["Schlüssel", "Die Kombination aus dem Bronzezahnrad, das die Abenteurer gefunden haben, und dem geätzten Stück, das Hauptmann Vondertoff, der Rivale, gefunden hat"],
      ["Mysteriöser Schatz", "Der antike mechanische Kalender, der angeblich die Zukunft vorhersagt. Dieses Artefakt scheint dem weitaus berühmteren Mechanismus von Antikythera sehr ähnlich zu sein."],
      ["Fernes Volk", "Hellenische Zivilisation"],
      ["Rivale", "Hanz Vondertoff, Enkel des ersten Kommandanten und Mitglied der Thule-Gesellschaft. Ein gieriger Mann auf der Suche nach Geld, Macht und allem, was der Sache der Nazis weiterhelfen kann."],
      ["Handlanger", "Die Dorfbewohner von Bad Aussee, die sowohl die Rolle gewöhnlicher Bürger als auch die von Soldaten unter dem Befehl Vondertoffs spielen"]
    ]},
    {t: "prose", p: [
      "Die Abenteurer beginnen die Folge an Bord eines Wasserflugzeugs, das durch die Berge Österreichs fliegt. Zuvor haben sie ein antikes Bronzezahnrad mit einer Reihe von Zahlen gefunden, die keinem erkennbaren Muster folgen.",
      "Sie reisen zum Toplitzsee, wo, so das Gerücht, die Nazis am Ende des Zweiten Weltkriegs einen großen Schatz versteckt haben.",
      "Unter dem See finden sie ein Steinportal eindeutig hellenischen Ursprungs und betreten eine alte unterirdische Nazi-Basis.",
      "Das Gebiet wimmelt von Soldaten, und ihr Anführer scheint sich sehr für das Zahnrad zu interessieren. Die Basis ist ein Labyrinth aus Gängen mit vielen Räumen. Der mit Abstand wichtigste ist das Büro des ersten Kommandanten, Rudolf Vondertoff.",
      "Der Kommandant war ein bedeutendes Mitglied der Thule-Gesellschaft und erforschte nahe dem Toplitzsee ein Artefakt mit hellseherischen Eigenschaften.",
      "Die Forschung fand vor dem Untergang des Dritten Reichs statt; Kommandant Vondertoff überzeugte den Führer, Tausende für die Operation Bernhard hergestellte Pfund Sterling in den See zu werfen. Während der Operationen erfuhr der erste Kommandant von der örtlichen Legende eines mechanischen Kalenders der hellenischen Zivilisation, einem Gegenstand von unschätzbarem Wert. Also beschloss er, in dieser Gegend eine Basis zu errichten, in der Hoffnung, dass er oder seine Erben diesen verlorenen Schatz eines Tages finden könnten. Das Fragment, das die Abenteurer gefunden haben, ist das fehlende Stück eines Schlüssels, den der Kommandant nie vervollständigen konnte.",
      "Die Suche nach dem legendären Kalender wurde für den Kommandanten zur Besessenheit, so sehr, dass sein Büro voller Notizen und Hinweise ist, die er über die Jahre gesammelt hat.",
      "Das Dorf wird ausschließlich von Soldaten bewohnt. Zunächst glauben sie, die Abenteurer seien gekommen, um die im See versteckten Nazi-Pfund zu suchen. Dieses Geld wurde vor langer Zeit geborgen und begründete das Vermögen von Bad Aussee. Heute sind alle Dorfbewohner an der Tarnung der kleinen Armee beteiligt, um die Interessen ihres Kommandanten zu wahren und jeden zu töten, der der Wahrheit zu nahe kommt. Der Einzige, der die ganze Wahrheit über den Schatz und seine Fähigkeit, die Zukunft vorherzusagen, kennt, ist Hanz Vondertoff, Bürgermeister des Ortes, Enkel des ersten Kommandanten und Erbe seiner Besessenheit.",
      "Der Seltsame Pilot und der Einsame Bootsmann stammen aus einer Familie, die seit Jahrhunderten in Bad Aussee lebt und offenbar Abstand zu allen Legenden um den Schatz im See hält. Ihre Wurzeln reichen in längst vergangene Zeiten zurück, und sie verbergen eine enge Bindung zum mechanischen Kalender. Die beiden Wächter warten darauf, dass sich der Schlüssel wieder zusammensetzt und die Auserwählten den Schatz erreichen, und so sein Geheimnis wieder ans Licht bringen.",
      "Als die im Kalender verborgene Botschaft schließlich entschlüsselt wird, Tage nach seiner Entdeckung, lastet die Prophezeiung schwer auf den Herzen derer, die sie hören: Sie kündet vom Ende der Welt. Und das Datum, an dem es geschehen soll, ist nur vier Tage entfernt. Schauplatz des letzten Akts ist Athen."
    ]}
  ]
};
