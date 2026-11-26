/* Playwall › J (S. 230–233). Das Dokument „Job Desk“ auf S. 230 trägt im Buch den Code „J?“. */
var TA_PWT = window.TA_PWT || (window.TA_PWT = {});

TA_PWT.J1 = {t:"Genau das, was du wolltest", s:230, b:[
 {t:"faehig", h:"Genau das, was du wolltest", x:"Greife mit der Hand eines anderen nach etwas auf dem Requisitentisch der Realität. Bitte jemanden, die Augen zu schließen und die Hand auszustrecken. Würfle **Empathie**.",
  erg:[
   ["ok", "**Bei Erfolg** holt das Ziel den einzigen Gegenstand, den es gerade am meisten will. Ist das Ziel ein Resonant oder eine Anomalie, zieht seine Resonanz dabei eine feindselige Kleine Anomalie an (vom GM erschaffen). Es gibt keine Einschränkungen bei Größe oder Besonderheit des Gegenstands, außer dass das Ziel ihn wirklich mehr wollen muss als alles andere auf der Welt. Diese Fähigkeit kann keine Lebewesen holen, wohl aber deren Erzeugnisse wie Obst oder Eier."],
   ["plus", "**Bei jeder dritten {3}** holt es einen weiteren Gegenstand, der mit seinen Wünschen zu tun hat."],
   ["nein", "**Bei Fehlschlag** holt es den Gegenstand, der ihm am ehesten schadet, und es sieht ihn, bevor er versteckt werden kann."]
  ],
  f:"Was ich brauche, finde ich heraus …", a:[["Indem ich alles ausprobiere und sehe, was hängen bleibt.", "S7"], ["Durch tiefes Nachdenken.", "I3"]]}
]};

TA_PWT["J?"] = {t:"Jobschreibtisch", s:230, b:[
 {t:"sp", x:[
  [{t:"notiz", x:"großes Autsch! ab dem Moment, in dem wir deinen Verstand eingesaugt haben wie eine Quetschtüte, wussten wir, dass du ein Trottel sein würdest."},
   {t:"notiz", x:"Als Verlierer hast du nicht gezögert, den Sabber auf den Boden, den Stiefel auf die Zunge und die Nase in den Dreck zu legen. Du hast dich verantwortungsvoll blamiert, und alle, die dachten, du könntest cooler sein, für die Mächte des Bösen. es steht außer Frage, dass jeder hinter deinem Rücken so etwas sagt wie „bist du sicher?“ und „hast du gehört, was die gewählt haben?“."}],
  [{t:"notiz", x:"An deinem letzten Tag im Außendienst kann keiner aus deinem Außenteam kommen. sorry, Kumpel, aber alle haben andere Pläne. Erlebe ein letztes Fremdschämen mit deinem GM und den anderen Agenten, in dem du Zeit hast, über das nachzudenken, was du getan hast."},
   {t:"notiz", x:"wenn du wirklich auf dieser Seite wegen dieser Ruhestandsoption bist, sei nächstes Mal BITTE cooler"}]
 ]}
]};

TA_PWT.J2 = {t:"Schreibtischjob", s:231, b:[
 {t:"sp", x:[
  ["**Großer Gewinn!**",
   "Von dem Moment an, in dem du eingestellt wurdest, wussten wir, dass du eines Tages ein unersetzlicher Teil unserer Arbeitsfamilie sein würdest. Welch ein Glück für uns: Dieser Tag ist endlich gekommen!",
   "Als Außendienst-Agent hast du nicht gezögert, Stift aufs Papier, Stiefel auf die Straße und Nase an den Schleifstein zu legen. Du hast deine Kraft und die Macht unserer Agency verantwortungsvoll für die Mächte des Guten eingesetzt. Es steht außer Frage, dass Teile der Realität selbst wegen deiner heldenhaften Taten gerettet wurden. Als Vollzeitmitarbeiter wirst du uns sicherlich helfen, noch größere Höhen zu erreichen.",
   "Versammle die anderen Spieler und stelle ihnen die folgenden Fragen. Höre dir ihre Antworten an:",
   {t:"liste", x:["Was war meine größte Leistung im Außendienst?", "Stell dir vor, ich sitze hinter einem Schreibtisch. Welche Art von Papieren bearbeite ich, oder welche Programme nutze ich?", "Werde ich zusätzliche psychologische Betreuung benötigen, wenn ich lange Zeit fern von anderen Menschen verbringen muss? Keine Sorge, werde ich nicht, das ist nur eine Frage, die ich stellen muss, Entschuldigung, falls sie schlimm klingt. Ich bin sicher, wir sehen uns oft."]},
   "Beantworte dann selbst die folgenden Fragen:",
   {t:"liste", x:["Würdest du lieber in deiner Kompetenz bleiben oder eine neue Abteilung oder bestimmte Rolle innerhalb der Agency finden?", "Was beschützt du in der Realität am liebsten?", "Wie wünschst du dir die Zukunft der Realität?", "Wie nimmst du deinen Kaffee von nun an?"]},
   "Bevor du gehst, hast du die Gelegenheit, deinem Außenteam einen verbindlichen Rat zu hinterlassen. Nach all der Zeit hast du sicherlich eine Meinung dazu, wie es sich verhalten sollte.",
   {t:"h3", x:"Richtlinienänderung"},
   "Du darfst deinem Außenteam ein neues Optionales Ziel vorgeben, das dauerhaft für Einsätze aller Agenten deiner Zweigstelle zur Verfügung steht. Agenten dürfen durch das Erfüllen dieses Optionalen Ziels pro Einsatz nicht mehr als 6 Belobigungen oder Verweise sammeln."],
  ["Dein bevorstehender Arbeitsplan wird sehr voll sein, und wir stellen fest, dass Mitarbeiter nach den Freuden wirklich sinnvoller Arbeit gar nicht mehr von ihren Schreibtischen weg wollen! Es ist nützlich, sich jetzt zu verabschieden und spätere Verwirrung zu vermeiden.",
   {t:"h3", x:"Abschiedstournee"},
   "Nenne alle deine gewöhnlichen Beziehungen. Du darfst für jede von ihnen eine letzte Szene erbitten, um dich zu verabschieden. Wenn du möchtest, darfst du bis zu {3} Beziehungen die Wahrheit über deinen Beruf sagen und sie einladen, sich dir in der Agency anzuschließen. Sie dürfen die Einladung annehmen oder ablehnen. (Bei Ablehnung melden wir uns, um sicherzustellen, dass keine Losen Enden entstehen.)",
   {t:"h3", x:"Ruhestandsfeier"},
   "Erlebe eine letzte Szene mit deinem GM und deinen Agenten-Kollegen, in der du frei und offen über eure gemeinsamen Heldentaten im Außendienst sprechen darfst. Ein Kuchen in Keksform und eine Grundauswahl kohlensäurehaltiger Getränke werden gestellt. Wir wollen die Überraschung nicht verderben, aber bei dieser Feier wird dir überreicht …",
   {t:"h3", x:"Eine goldene Uhr"},
   "Du erhältst eine mit 24 Karat Gold überzogene Uhr. Trage sie mit Stolz!",
   "Du hast nun ein paar Augenblicke, um deine alte Wohnung von deinen Habseligkeiten zu räumen und deine Angelegenheiten zu regeln. Jeder Spieler, auch der GM und du selbst, kann letzte Szenen erbitten, in denen du und eine beliebige andere Figur vorkommen oder um die es geht. Erlebe so viele, wie du möchtest. Wenn niemand weitere Wünsche hat, bist du in deine Kompetenz in den Ruhestand getreten.",
   "Eine Kleinigkeit noch: Bitte markiere ein Kästchen in der Leiste, die im Dokument hinter der Playwall [[Q3]] eingeführt wird. Wenn du diese Leiste nicht kennst, bitte deinen GM, das heimlich zu tun. Versiegle, zerstöre oder mache dann deine Agentenunterlagen anderweitig unbrauchbar.",
   "Wenn du fertig bist, melde dich bei deinem Vorgesetzten für deine neue Zuweisung.",
   "**Du**, Tisch-Ich, hast es sehr gut gemacht. Wir hoffen, dass du künftig weitere Agenten in ähnliche Positionen geleiten wirst.",
   "Die Agency dankt dir für deine Dienste. Bis morgen!"]
 ]}
]};

TA_PWT.J3 = {art:"rang", t:"Direktor", s:232, b:[
 {t:"sp", x:[
  ["**Ein fast durchschnittlicher Mitarbeiter verdient ein angemessenes Kompliment: Gut gemacht!**",
   "Mittlerweile wirst du dir des wahren Ausmaßes der entsetzlichen Mächte bewusst, die das fragile Gleichgewicht der Realität vollständig umzustürzen drohen. Wisse, dass der Weg, den du gehst, nicht einfacher werden wird, und dass die vor dir liegenden Prüfungen die äußersten Grenzen deiner Fähigkeiten erproben werden, sowohl aufzusteigen als auch dich durchzubeißen.",
   "Als Direktor darfst du nun wissen, dass Anomalien nicht die größte Gefahr sind, der wir gegenüberstehen – das wahre Grauen ist das, wozu Anomalien werden. Bitte genieße die folgenden vertraulichen Informationen.",
   {t:"h3", x:"Hollows: Das Endstadium"},
   "Wird der Fokus einer Anomalie entfernt, zerstört oder vergessen, wird sie zu einem **Hollow**. Sie kann nicht in die Lobby zurückkehren und sich ohne Fokus nicht am Leben halten und ist verloren. Sie reagiert unvorhersehbar auf diese Tatsache.",
   "Denkende Köpfe beschäftigen sich notwendigerweise stets mit sich selbst, was sie zu stabilen Ankern in der Realität macht. Der erste Schritt vieler Hollows ist der Versuch, sich mit einem solchen zu verbinden. Die so verbundenen Menschen werden, wie du, zu Resonanten: Wirten für eine parasitäre Anomalie, die sonst sterben würde. Finden sie keinen geeigneten Wirt, oder hat der Verlust ihres Fokus besondere Verzweiflung ausgelöst, versuchen sie oft, der Realität eine aggressive Marke aufzudrücken, bevor sie ausbrennen und verschwinden.",
   "Wenn wir Resonanten einstellen, ergänzen wir sie um zusätzliche Stabilität. Gern geschehen! Täten wir das nicht, würde die Anomalie dich irgendwann zerstören und deine Persönlichkeit nutzen, um einen neuen Fokus zu erschaffen. Ihr Leben würde sich verlängern, bis sie diesen Fokus verlöre und einen neuen Wirt bräuchte. Ein tödlicher Kreislauf.",
   "Denke an deine Interessen: deine Lieben, deine Lieblings-Sportmannschaft, deine Hobbys, deine Sammlung von Spaß-T-Shirts. Versuche dich zu erinnern, ob etwas davon schon dir gehörte, bevor du ein Resonant wurdest. Wenn nicht, hast du wahrscheinlich die übrig gebliebenen Gedanken eines früheren menschlichen Wirts geerbt!",
   "Zum Glück haben wir ihre Tragödie nutzbar gemacht: Unsere Studien haben ergeben, dass sich Hollows im Moment größter Verzweiflung vor ihrem Tod miteinander verbinden können – und so ihre Lebensspanne kurzzeitig verlängern, indem sie ihre zerbrochenen Foki zu einem einfachen, umsetzbaren Impuls verschmelzen. Wenn du dich auf einen Einsatz vorbereitest, darfst du beliebig viele Belobigungen ausgeben, um konservierte Hollows zu beziehen, die wir in Behältern namens **Hemisphären** lagern."],
  ["Um die Hemisphären zu benutzen, lege beide auf einen Gegenstand in der Nähe (Schreibtischstuhl, Telefonmast, leblosen Körper usw.) und drehe. Der Inhalt der Hemisphären strömt in den Gegenstand, der sich oft ausdehnt und sein Aussehen verändert, während er zu einem **Beschworenen Hollow** wird.",
   "Ein Beschworener Hollow ist ein Wesen, das so mächtig ist wie die meisten Ziel-Anomalien. Er handelt gemäß dem Impuls, den die beiden in seinen Hemisphären kombinierten Begriffe beschreiben, und löst sich dann nach etwa einer Minute auf. Seine anfängliche Aufmerksamkeit lässt sich in eine bestimmte Richtung lenken, doch beachte, dass Beschworene Hollows, genau wie ihre wilden Gegenstücke, flüchtig und unberechenbar sind.",
   "Hemisphären sind einmalige Anforderungen, und ihre Wörter müssen beim Kauf gewählt werden. Weitere Wörter sind in deiner Zweigstelle womöglich verfügbar: Sprich mit deinem General Manager, wenn du besondere Wünsche hast.",
   "Es gibt in der Regel einen Überschuss. Vault-Anomalien, die keine Produkte oder neuen Erkenntnisse mehr liefern, finden oft ein zweites Leben als Hemisphären!",
   {t:"html", x:'<table class="tab pwj-hemi"><tr><th>Aktions-Hemisphären<span>6' + zimg("symbol-belobigung") + '</span></th><th>Subjekt-Hemisphären<span><b class="drei">3</b>' + zimg("symbol-belobigung") + '</span></th></tr>' +
    [["Beschützen", "Ein Fluchtweg"], ["Verfolgen", "Ein Freund"], ["Spalten", "Ein unersetzliches Ding"], ["Verschlingen", "Das schnellste Ding"], ["Befreien", "Das mächtigste Ding"], ["Vereiteln", "Das schwächste Ding"], ["Verstehen", "Das nächstgelegene Ding"], ["Untergraben", "Eine Katastrophe"], ["", "Ein Geheimnis"]].map(function(r){ return "<tr><td>" + r[0] + "</td><td>" + r[1] + "</td></tr>"; }).join("") + '</table>'},
   {t:"bild", src:"playwall-s232-fische", pos:"mitte", w:440}]
 ]}
]};

TA_PWT.J4 = {t:"Das Ende", s:233, b:[
 {t:"klein", x:"*Das Ende ist ein besonderer Einsatz, der von Agenten freigeschaltet wird, die Endbringer führen.*"},
 {t:"klein", x:"*Es ist wahrscheinlich, dass ihr im Laufe der Laufbahn des Growth-Agenten gemeinsam eine Vorstellung davon entwickelt habt, was Das Ende bedeutet. In diesem Fall seid ihr eingeladen, alle Vorzeichen, Hinweise und Kenntnisse, die ihr gemeinsam aufgebaut habt, in das einzubauen, was während dieses Einsatzes geschieht – oder euren eigenen zu erschaffen und das hier gegebene Material als Inspiration zu nutzen.*"},
 {t:"klein", x:"**Enthält:** Drastische Gewalt, erzwungenes Verschlingen, Gedankenkontrolle, Massensterben, Zusammenbruch der Gesellschaft"},
 {t:"sp", x:[
  [{t:"h3", x:"Einleitung"},
   "Tief in der Stille des Weltraums: Sterne brennen, Planeten kollidieren, und ein endloser Hunger sieht eifersüchtig dabei zu.",
   "Dann, Veränderung! Jemand hat etwas Neues erschaffen. Etwas Dichtes. Etwas so Scharfes, dass es über Lichtjahre hinweg geschnitten hat, um eine Essensglocke zu läuten.",
   "Siebenmal läutet die Glocke. Siebenmal folgt die Dunkelheit dem Klang.",
   "Nun hat es die kleine blaue Kugel gefunden, die seinen Preis verbirgt.",
   "Das Ende ist angekommen.",
   {t:"h3", x:"Beschreibung"},
   "Das Ende ist der leibhaftige Hunger. Es ist ein transdimensionales Wesen, am besten beschrieben als „Maulmeteor“. Sein Hauptkörper tritt in die Umlaufbahn um euren Planeten ein und verfinstert die Sonne.",
   "Es ist kosmisch: Fähig, die Leere des Weltraums sicher zu durchqueren, schickt es Mäuler auf jahrtausendelange Reisen durch den Kosmos.",
   "Es ist grenzenlos: Jedes Maul teilt ein Bewusstsein mit jedem anderen Maul und warnt die anderen, wenn neue Mahlzeiten gefunden werden.",
   "Es ist grauenhaft: Landen Mäuler auf einer Masse, werden sie zu Parasiten, übernehmen die Kontrolle über jede Person oder jeden Gegenstand, auf dem sie landen, und zwingen ihre neuen Wirte, Materie zu verzehren und den unersättlichen Hunger des Endes zu stillen.",
   "Es kommt: Die ersten Mäuler sind gerade in eurer Region gelandet.",
   "Frisst es Endbringer erfolgreich, explodiert es und zerstört euren Planeten. Wird es besiegt oder gefangen, kann Endbringer von eurem Agenten und von jedem, der ihn danach aufhebt, ohne weitere Unterbrechung benutzt werden.",
   {t:"h3", x:"Fokus"},
   "Das Ende will die Realität Verschlingen, um seinen allumfassenden Hunger zu stillen. Die unbegrenzte Energie, die in Endbringer gebunden ist, ist der ultimative Preis: eine Mahlzeit, die vielleicht groß genug ist, seinen Hunger endlich zu stillen."],
  [{t:"h3", x:"Domäne"},
   "Das Ende ist am mächtigsten im Raum um seine Beute, Endbringer. Befindet es sich im Umkreis eines halben Kilometers um Endbringer, ist es gestärkt, als agierte es in seiner eigenen Domäne.",
   {t:"h3", x:"Besondere Regeln"},
   "*Grenzenlos:* Das Ende ist ein verteiltes Bewusstsein und kann nicht von Fähigkeiten oder Kräften anvisiert werden, die auf einzelne Ziele wirken (einschließlich der Ripple Gun und Eliminieren). Seine einzelnen Mäuler können jedoch normal anvisiert werden.",
   "*Endlinge:* Das Ende kann die Chaos-Effekte Manifestieren, Verdoppeln oder Verdreifachen nutzen, um Mäuler mit Kreaturen oder Gegenständen zu verschmelzen und so Endlinge zu erschaffen. Endlinge sind grauenhafte, zombieartige Verschmelzungen aus Maul und Wirt, getrieben von unstillbarem Hunger. Sie richten ihre Energie darauf, so viel Materie wie möglich zu verzehren, und werden besonders von Resonanz angezogen. Fünfunddreißig sind in eurer Region aktiv, wenn dieser Einsatz beginnt.",
   "*Apokalypse:* Das Ende nähert sich aus jedem Winkel der Leere des Weltraums. Ständig treffen neue Mäuler auf der Suche nach Endbringer ein. Starte zu Beginn des Einsatzes einen Timer: Nach jeweils {3} Minuten Echtzeit fügst du dem Chaos-Pool 1 Chaos hinzu.",
   {t:"h3", x:"Begegnung"},
   "Einzelne Mäuler zu besiegen ist wichtig, um eure Region zu schützen, fügt Endbringer aber keinen Schaden zu. Soll es mit Gewalt besiegt werden, muss man sich ihm direkt nähern. Eure Agenten müssen in die Umlaufbahn gelangen. Dort müssen sie {3}0 Schaden verursachen. Endbringer erzeugt 14 Chaos, wenn er gegen Das Ende eingesetzt wird.",
   "Wird Endbringer so geopfert, dass Das Ende von eurem Planeten weggelockt wird (etwa indem man ihn in einer Rakete startet), verschlingt Das Ende ihn und explodiert anderswo, entweder harmlos oder in der Nähe eines anderen Planeten.",
   "Die Agency hat eine besondere Verwahrungseinheit für Das Ende: Du kennst sie als „den Mond“. Zum Zeitpunkt des Einsatzes liegt er auf der dem Ende gegenüberliegenden Seite des Planeten. Lassen sie sich zur Kollision bringen, wird es gefangen."]
 ]}
]};
