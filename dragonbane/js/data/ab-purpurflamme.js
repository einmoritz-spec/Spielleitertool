/* Tempel der Purpurflamme (Abenteuerband S. 47–54) – deutsche Fassung. §…§ = Fertigkeit/Zauber in Kapitälchen. Modell: plan/dragonbane/ABENTEUER_PLAN.md §2 */
window.DB_AB = window.DB_AB || {};
DB_AB["purpurflamme"] = {
 id:"purpurflamme", t:"Tempel der Purpurflamme", band:"dk", buch:"db_adv", p:47, img:"abenteuer/purpurflamme-titel",
 lage:[
  "Der Tempel der Purpurflamme ist ein dämonischer Tempel aus der Zeit von Sathmogs Herrschaft (S. 6) und hieß in der alten Sprache Korash-Bal. Seit Jahrhunderten liegt er überwuchert und verlassen im Magnawald. Doch ein Portal in Sathmogs Welt steht noch immer einen Spalt offen, und die Dämonenkultisten sind nicht die Einzigen, die nach seinen Geheimnissen suchen.",
  {"h":"Die Lage","p":47},
  "Die Spielercharaktere können in Außenposten vom Tempel der Purpurflamme hören. Der Name ist wegen der Wandbilder an der Außenseite des Gebäudes weithin bekannt, doch kaum jemand hat sich je durch die Tore gewagt. Der Tempel soll unermessliche Schätze und verbotenes Wissen bergen, aber auch von einem uralten Bösen bewacht werden. Hier befindet sich möglicherweise eines der vier Teile der Drachenstatuette (S. 8), das in diesem Fall im Dämonenreich (Ort 12) zu finden ist.",
  "Sathmog hat kürzlich eine Gruppe Kultisten ausgesandt, um den Tempel zu erkunden. Spielst du *Das Geheimnis des Drachenkaisers*, ist ihr Ziel, eines der Statuettenteile zu finden. Andernfalls suchen sie nur allgemein nach verlorenem Wissen.",
  "Drei der Kultisten gingen durch das Portal in den Tiefen des Tempels, während die anderen von Furcht gepackt draußen warteten. Als zwei von ihnen entsetzlich verdreht aus dem Dämonenreich zurückkehrten, ergriffen die anderen die Flucht, während die beiden in der innersten Kammer des Tempels zurückblieben. Die Spielercharaktere können den fliehenden Kultisten in verschiedenen Teilen des Tempels begegnen.",
  "Außerdem hat der dämonische Einfluss der anderen Welt eine unnatürliche und chaotische Zunahme von Tieren und Pflanzen in und um den Tempel verursacht. Die Türen stehen offen, doch wenn die Charaktere die Umgebung des Tempels untersuchen, ist es auch möglich, über die Mauer in den Kräutergarten (Ort 4) zu klettern.",
  {"stein":{"h":"Den Tempel verlassen?","b":["Verlassen die Spielercharaktere den Tempel, um eine Lange Rast einzulegen, würfelt für jeden Tagesabschnitt W6 auf der Tabelle auf Regelbuch S. 107."]}}
 ],
 bereiche:[
  {id:"tempel", t:"Der Tempel", karte:{img:"abenteuer/purpurflamme-karte-tempel", p:51}, orte:[
   {n:"1", t:"Vor dem Tempel", p:48, pin:[65.5,85], wesen:["purpurflamme-kultisten"],
    vl:"Ein großer und eindrucksvoller, aber schwer verfallener Steintempel. Seine Türme und Spitzen sind eingestürzt, und ein Großteil des Gebäudes ist von üppigem Bewuchs bedeckt, den riesige Dornenranken mit gewaltigen Dornen beherrschen. Das Steintor steht einen Spalt offen. Die Reste von Wandbildern mit einem Muster aus violetten Flammen sind an den Wänden neben dem Tor zu sehen.",
    st:[
     {"k":"Norden","x":"Offene Türen zur Vorhalle (Ort 2)."},
     {"k":"Nordwesten","x":"Eine eingestürzte Mauer, überwuchert von enormen Dornenranken. Dahinter sind Bäume zu erahnen. Die Mauer zu erklettern erfordert einen Wurf auf §Akrobatik§ mit einem Vorteil, doch die Ranken sind lebendig und greifen die Spielercharaktere an. Siehe Mörderische Dornenranken. Auf der anderen Seite der Mauer liegt der Kräutergarten (Ort 4)."}
    ]},
   {n:"2", t:"Vorhalle", p:49, pin:[65.7,70.7], wesen:[],
    vl:"Diese große Vorhalle hat eine hohe Decke und wird von schweren, sechseckigen Steinpfeilern beherrscht. Das schwache Licht von draußen fällt auf abblätternde Wandbilder dämonischer Ungeheuer, die besiegte Drachen in einer von einer violetten Sonne beleuchteten Landschaft in Stücke reißen.",
    st:[
     {"k":"Zufallsereignis","x":"Würfelt für jedes volle Viertel, das die Spielercharaktere hier verbringen, W12 auf der Tabelle auf S. 48."},
     {"k":"Norden","x":"Steinerne Doppeltür zum Altarraum (Ort 5), einen Spalt offen."},
     {"k":"Westen","x":"Ein kurzer Korridor zum Innenhof (Ort 3), durch den Sonnenlicht hereinfällt."},
     {"k":"Süden","x":"Offene Steintüren ins Freie vor dem Tempel."}
    ]},
   {n:"3", t:"Innenhof", p:49, pin:[46.2,50.8], wesen:["purpurflamme-ranken"],
    vl:"Ein großer, offener Garten ohne Dach. Er ist überwuchert von riesigen Dornenranken, blühenden Zierbäumen und ungepflegtem Gras entlang der Wege. Der Duft der Blumen ist beruhigend.",
    st:[
     {"k":"Riesige Heidelbeeren","x":"Kniehohe Heidelbeersträucher hängen schwer von 4W6 Beeren in der Größe von Augäpfeln. Jede Beere ist Kleinkram, zählt aber als volle Mahlzeit – wer sie isst, wird jedoch ein wenig benommen und erleidet den Zustand Benommen."},
     {"k":"Zufallsereignis","x":"Würfelt für jedes volle Viertel, das die Spielercharaktere hier verbringen, W12 auf der Tabelle auf S. 48."},
     {"k":"Westen","r":1,"x":"*Öffnung zum Kräutergarten (Ort 4), verborgen hinter einigen mit Ranken bewachsenen Spalieren. Kann entdeckt werden, wenn die Spielercharaktere genau an der richtigen Stelle suchen oder auf* §Entdecken§ *würfeln.*"},
     {"k":"Nordosten","x":"Halb zerbrochene hölzerne Doppeltür zum Altarraum (Ort 5)."},
     {"k":"Südosten","x":"Kurzer Korridor zur Vorhalle (Ort 2)."},
     {"k":"Norden","r":1,"x":"*Öffnung zu einem kurzen Korridor, der zum Wachraum (Ort 6) führt, verborgen hinter Dornenranken entlang der Wand. Kann entdeckt werden, wenn die Spielercharaktere genau an der richtigen Stelle suchen oder auf* §Entdecken§ *würfeln.*"}
    ]},
   {n:"4", t:"Kräutergarten", p:50, pin:[28.2,42.3], wesen:["purpurflamme-hafarmal"],
    vl:"Ein kleinerer Teil des Gartens, verborgen hinter niedrigen Mauern und überwucherten Spalieren. Üppige Pflanzen, Kräuter und Gewürze beherrschen ihn. Hummeln summen. Eine Person in naturfarbener Kleidung jätet Unkraut.",
    st:[
     {"k":"Hafarmal","x":"Die Person ist Hafarmal, ein alter Elf, der in den Garten gekommen ist, um die wachstumsfördernde Kraft zu nutzen, die aus dem Portal sickert. Der Tabak, den er anbaut, ist besonders kräftig."},
     {"k":"Südwesten","x":"Die Mauer ist beschädigt und mit kletterbaren Ranken überwuchert und führt aus dem Tempel hinaus."},
     {"k":"Osten","x":"Überwucherter Durchgang zum Innenhof (Ort 3)."}
    ]},
   {n:"5", t:"Altarraum", p:50, pin:[65.7,39.4], wesen:[],
    vl:"Ein Durchgang öffnet sich in einen großen, geräumigen Raum unter einer Kuppeldecke. Im nördlichen Teil des Raums steht ein Hochaltar. Die Luft riecht trocken und staubig. Licht fällt durch eine Öffnung in der Mitte der Kuppel herab, wo Kletterranken durchgebrochen sind.",
    st:[
     {"k":"Falltür","r":1,"x":"*Im südlichen Durchgang befindet sich eine Falltür, die einen Spalt offen steht. Die Spielercharaktere bemerken sie, wenn sie ausdrücklich den Boden untersuchen oder sich vorsichtig bewegen und einen Wurf auf* §Entdecken§ *schaffen. Wer durch die Falltür fällt, erleidet 3W6 wuchtigen Schaden und landet in der Opfergrube (Ort 7).*"},
     {"k":"Der Altar","x":"ist aus einem Block grünlich-schwarzen Steins gehauen. Reliefs auf jeder Seite zeigen Dämonen im Kampf gegen Drachen unter einer violetten Sonne."},
     {"k":"Die Knochenmaske","r":1,"x":"*Werden die vier Sonnen auf dem Altar, eine auf jeder Seite, gleichzeitig gedrückt, öffnet sich eine Klappe im Altar. Die Spielercharaktere bemerken, dass sich die Sonnen drücken lassen, wenn sie es versuchen oder den Altar untersuchen und einen Wurf auf* §Entdecken§ *schaffen. Im Fach hinter der Klappe liegt eine furchterregend aussehende Maske aus vergilbtem Knochen. Die Maske schützt ihren Träger mit* §Schutzzeichen§ *(Kraftstufe 2) und* §Beständigkeit§*. Sie entzieht ihrem Träger WP, und er muss außerdem einen WIL-Wurf schaffen, um sie abzunehmen. Pro Tagesabschnitt ist ein Versuch erlaubt.*"},
     {"k":"Gong","x":"An der Westwand hängt ein Gong aus patiniertem Messing. Ihn zu schlagen kann Kultisten oder umherziehende Monster anlocken – würfelt auf der Tabelle der Zufallsereignisse."},
     {"k":"Zufallsereignis","x":"Würfelt für jedes volle Viertel, das die Spielercharaktere hier verbringen, W12 auf der Tabelle auf S. 48."},
     {"k":"Süden","x":"Halb offenes Steintor zur Vorhalle (Ort 2)."},
     {"k":"Osten","x":"Schmale Tür zu einer ausgetretenen Wendeltreppe, die hinab zur Gewölbehalle (Ort 8) führt."},
     {"k":"Südwesten","x":"Halb zerbrochene hölzerne Doppeltür zum Innenhof (Ort 3)."},
     {"k":"Westen","x":"Eisentür zum Wachraum (Ort 6)."}
    ]},
   {n:"6", t:"Wachraum", p:51, pin:[38.9,26.5], wesen:[],
    vl:"Ein dunkler, geschlossener Raum mit hoher Decke. Es riecht stark nach Eisen und Rost. Ranken sind durch Risse in der Wand hereingekrochen.",
    st:[
     {"k":"Skelett","x":"Die Überreste eines großen sechsbeinigen Tiers sind in Fesseln gelegt und mit dicken Ketten an der Wand befestigt. Ein gelungener Wurf auf §Tierkunde§ lässt vermuten, dass das Skelett von keinem natürlichen Tier der bekannten Welt stammt. Die Spielercharaktere haben noch nie etwas Vergleichbares gesehen."},
     {"k":"Zufallsereignis","x":"Würfelt für jedes volle Viertel, das die Spielercharaktere hier verbringen, W12 auf der Tabelle auf S. 48."},
     {"k":"Öllampe","x":"Eine Öllampe ist auf den Boden gekippt, aber noch halb voll und kann angezündet werden."},
     {"k":"Osten","x":"Eisentür zum Altarraum (Ort 5)."},
     {"k":"Süden","x":"Kurzer Korridor zum Innenhof (Ort 3)."},
     {"k":"Westen","x":"Eine verschlossene Tür zu einer schmalen Wendeltreppe, die hinab zur Kreuzung (Ort 9) führt. Die Tür kann geknackt oder aufgebrochen werden (Rüstungswert 10, 30 TP). Einer der Kultisten hat den Schlüssel."}
    ]}
  ]},
  {id:"gruft", t:"Die Gruft", karte:{img:"abenteuer/purpurflamme-karte-gruft", p:52}, orte:[
   {n:"7", t:"Opfergrube", p:52, pin:[65.9,76.2], wesen:["purpurflamme-skelette"],
    vl:"Eine dunkle Grube mit grob behauenen Steinwänden. Mehrere menschenähnliche Skelette in unterschiedlichen Stadien des Verfalls liegen verstreut auf dem Boden, doch sie bewegen sich. Eine kürzlich verstorbene Leiche liegt mitten im Raum. Die Luft stinkt nach Tod.",
    st:[
     {"k":"Skelette","x":"Die Skelette wurden durch die Wiederöffnung des Portals erweckt. Sie sind die Überreste von Menschenopfern, die die uralten Dämonenkultisten nach den Zeremonien am Altar in die Grube warfen. Wenn die Toten zu ihnen sprechen, müssen die Spielercharaktere einen WIL-Wurf machen, um der Furcht zu widerstehen. Die Skelette sind bei Bewusstsein, elend und rachsüchtig – sie wollen, dass der Tempel zerstört und/oder das Portal geschlossen wird, damit sie in Frieden ruhen können, hegen aber keinen Groll gegen die Spielercharaktere. Sie wissen, wie man die Knochenmaske vom Altar erhält."},
     {"k":"Leiche","x":"Der frische Körper ist ein Kultist, der durch die Falltür in den Tod stürzte. Der Körper ist nicht wieder zum Leben erwacht. Er hat ein Kurzschwert, einen Dolch und einen Rucksack mit einem Seil und zwei Fackeln."},
     {"k":"Schätze","r":1,"x":"*Zwischen dem Gerümpel auf dem Boden finden sich Schätze im Wert von einer Schatzkarte.*"},
     {"k":"Oben","x":"Eine Falltür, die einen Spalt offen steht. Hinaufzuklettern erfordert ein Seil."},
     {"k":"Norden","x":"Eine niedrige Eisentür zur Gewölbehalle (Ort 8). Sie ist festgerostet und muss aufgestemmt werden, was viel Lärm macht. Die Tür hat Rüstungswert 6 und 30 TP."}
    ]},
   {n:"8", t:"Gewölbehalle", p:53, pin:[65.8,52], wesen:["purpurflamme-mantikor"],
    vl:"Eine riesige, dunkle Halle. Pfeiler und niedrige Bögen machen es schwer, selbst mit einer Lichtquelle etwas zu erkennen. Wasser tropft von der Decke und bildet Pfützen entlang der unebenen Bodenfliesen. Ein Kratzen ist weiter hinten in der Halle zu hören. Es riecht nach wilden Tieren und Kot.",
    st:[
     {"k":"Mantikor","x":"Ein Mantikor streift durch den Raum. Von den Energien der Dämonenwelt vergrößert und verdreht, ist er zu groß, um durch einen der Ausgänge des Raums zu entkommen."},
     {"k":"Osten","x":"Eine schmale Tür zu einer ausgetretenen Wendeltreppe, die hinauf zum Altarraum (Ort 5) führt."},
     {"k":"Süden","x":"Niedrige Eisentür zur Opfergrube (Ort 7). Sie ist festgerostet und muss aufgestemmt werden, was viel Lärm macht. Die Tür hat Rüstungswert 6 und 30 TP."},
     {"k":"Westen","x":"Eine halb offene Eisentür führt zur Kreuzung (Ort 9)."},
     {"k":"Nordwesten","x":"Ein großes Eisentor mit einem Relief einer violetten Flamme führt zum Portal (Ort 11)."}
    ]},
   {n:"9", t:"Kreuzung", p:53, pin:[38.9,45.6], wesen:[],
    vl:"Auf dem Boden liegen Ketten, die an der Wand befestigt sind. Ihr riecht einen moschusartigen Geruch wie von wilden Tieren. Ranken sind durch Risse im Stein entlang der Südwand hereingekrochen.",
    st:[
     {"k":"Die Ketten","x":"sind größtenteils zerbrochen, nur eine Fessel ist noch intakt. Der Schlüssel liegt daneben."},
     {"k":"Zufallsereignis","x":"Würfelt für jedes volle Viertel, das die Spielercharaktere hier verbringen, W12 auf der Tabelle auf S. 48."},
     {"k":"Osten","x":"Halb offene Eisentür zur Gewölbehalle (Ort 8)."},
     {"k":"Westen","x":"Eine schmale Wendeltreppe führt hinauf zum Wachraum (Ort 6)."},
     {"k":"Norden","r":1,"x":"*Hinter der Halterung der Ketten befindet sich eine verborgene Tür zum Portal (Ort 11). Die Spielercharaktere finden sie, wenn sie genau an dieser Stelle suchen oder wenn sie den Raum durchsuchen und einen Wurf auf* §Entdecken§ *schaffen.*"},
     {"k":"Süden","r":1,"x":"*Hinter den Ranken verborgen liegt eine Geheimtür zur Schatzkammer (Ort 10).*"}
    ]},
   {n:"10", t:"Schatzkammer", p:53, pin:[37.2,61.3], wesen:[],
    vl:"Eine Kammer mit niedriger Decke. Ein Teil der Decke ist eingestürzt, und der Boden ist mit Steinen und Geröll bedeckt.",
    st:[
     {"k":"Schatz","r":1,"x":"*Zwischen den Steinen auf dem Boden können die Spielercharaktere Schätze im Wert von drei Schatzkarten und ein altes, abgenutztes Zauberbuch finden, das* §Herbeiholen§*,* §Schnippen§*,* §Bannen§*,* §Magischer Schild§*,* §Entzünden§*,* §Wärme/Kälte§*,* §Windstoß§*,* §Feuerstoß§*,* §Flutwelle§ *und* §Salamander§ *enthält.*"},
     {"k":"Norden","x":"Tür zur Kreuzung (Ort 9)."}
    ]},
   {n:"11", t:"Das Portal", p:53, pin:[35.5,23.6], wesen:["purpurflamme-skelette","purpurflamme-verdrehte"],
    vl:"Eine verzierte Kammer mit Wandbildern und prunkvoll geschmückten Säulen entlang der Wände. Der Fels wirkt halb geschmolzen, halborganisch, wie das Innere eines versteinerten Ungeheuers. Auf einem Marmoraltar brennt ein violettes Feuer. Zwei hochgewachsene Gestalten mit Äxten stehen am Altar. Die Nordwand hinter dem Altar vibriert wie ein Wasserspiegel.",
    st:[
     {"k":"Das Feuer","x":"brennt ohne Brennstoff. Das Licht, das es abgibt, ist nicht sehr hell, doch wer die Flammen berührt, erleidet W6 Schaden. Das Feuer kann mit §Bannen§ (Kraftstufe 3) gelöscht werden, was wiederum das Portal schließt. Kennen die Spielercharaktere diesen Zauber nicht, kann Hafarmal überzeugt werden, ihnen zu helfen. Andernfalls bleibt das Portal vorerst offen."},
     {"k":"Kultisten","x":"Die Leute am Altar sind die beiden Kultisten, die durch das Portal gingen und zurückkehrten. Mit rauen Stimmen fragen sie, ob Sathmog die Spielercharaktere ebenfalls gerufen hat, und bieten ihnen die Gelegenheit, durch das Portal zu gehen, um Teil seines Reichs zu werden."},
     {"k":"Das Portal","x":"Hinter dem Altar, umgeben von Ornamenten, die die Wirbelsäule eines unbekannten Ungeheuers sein könnten, öffnet sich der Blick auf eine halborganische Stadt unter einem purpurnen Himmel, der sich mit dem Betrachter bewegt und in schiefen Winkeln projiziert wird. Es ist möglich, durch das Portal ins Dämonenreich (Ort 12) zu gehen."},
     {"k":"Wandbilder","x":"Die Gemälde an den Wänden zeigen dämonische Bestien und Priester mit dunklen Auren, die gefesselte Drachen unter einer violetten Sonne opfern."},
     {"k":"Südosten","x":"Eisentür zur Gewölbehalle (Ort 8)."},
     {"k":"Süden","x":"Schmale Tür zur Kreuzung (Ort 9)."},
     {"k":"Norden","x":"Portal zum Dämonenreich (Ort 12)."}
    ]},
   {n:"12", t:"Das Dämonenreich", p:54, wesen:[],
    vl:"Ein öliges schwarzes Labyrinth aus halborganischen Formen. Violette und purpurne Sonnen scheinen an einem orangefarbenen Himmel und werfen ihr Licht auf hoch aufragende Bauwerke ohne Außenwände. Zu viele Dimensionen, zu viele Winkel und Ecken. Ein Stimmengewirr, zu schwach, um zu verstehen, was gesagt wird. Der beißende Geruch von Blut und Verwesung.",
    st:[
     {"k":"Sathmogs Reich","x":"Von der Stadt des Dämonenfürsten gibt es keine Karte, da ihre Geometrie von Geschöpfen unserer Welt nicht verstanden werden kann. Sobald ein Spielercharakter die Dämonenstadt betreten hat, braucht es eine Anzahl von WIL-Würfen, um den Weg wieder hinauszufinden, und misslungene Würfe haben negative Folgen. Selbst wenn mehrere Charaktere gleichzeitig durch das Portal gehen, müssen sie die Dämonenstadt allein durchwandern. Der Träger der Knochenmaske aus dem Altarraum (Ort 5) erhält einen Vorteil auf seine Würfe. Siehe die Tabellen. Die Zeit vergeht in der Dämonenstadt anders, sodass in der wirklichen Welt viel Zeit vergangen sein kann, wenn ein Spielercharakter zurückkehrt. Misslingen zu viele Würfe, kann der Charakter hier für immer festsitzen. Ein Charakter, der die Dämonenstadt besucht hat, kann dauerhafte dämonische Veränderungen erleiden."}
    ],
    b:[
     {"h":"Erfolgreiche WIL-Würfe"},
     {"tbl":{"id":"purpur_erfolg","head":["Wurf","Ergebnis"],"rows":[
      ["Erster","Der Spielercharakter findet etwas Wertvolles. Hast du dich entschieden, ein Teil der Drachenstatuette hier zu platzieren, wird es vom ersten Charakter gefunden, dem ein WIL-Wurf gelingt. Falls nicht, ziehe eine Schatzkarte."],
      ["Zweiter","Der Spielercharakter findet das Portal wieder und kehrt zu Ort 11 zurück."]]}},
     {"h":"Misslungene WIL-Würfe"},
     {"tbl":{"id":"purpur_fehl","head":["Wurf","Ergebnis"],"rows":[
      ["Erster","Der Spielercharakter verirrt sich. In der wirklichen Welt vergeht ein Tagesabschnitt."],
      ["Zweiter","Der Spielercharakter wandert tiefer ins Labyrinth. In der wirklichen Welt vergeht ein Tag, und der Spielercharakter muss W6 auf der Tabelle der dämonischen Veränderungen würfeln."],
      ["Dritter","Der Spielercharakter ist im Begriff, sich im Reich des Dämonenfürsten zu verlieren. In der wirklichen Welt vergeht eine Woche, und der Spielercharakter muss W10 auf der Tabelle der dämonischen Veränderungen würfeln."],
      ["Vierter","Der Spielercharakter begegnet dem Dämonenfürsten Sathmog selbst und wird für immer Teil seines Reichs."]]}},
     {"h":"Dämonische Veränderungen"},
     {"tbl":{"id":"purpur_veraend","head":["W6/W10","Dämonische Veränderung"],"rows":[
      ["1–4","Nichts geschieht."],
      ["5–6","Die Augen des Spielercharakters werden vollständig schwarz. Das gibt ihm dauerhaft WIL +1 (max. 18), aber −1 auf alle CHA-basierten Fertigkeiten (min. 3)."],
      ["7–8","Der Körper des Spielercharakters wächst und wird unnatürlich in die Länge gezogen. Das gibt ihm dauerhaft STÄ +1 (max. 18), aber −1 auf alle CHA-basierten Fertigkeiten (min. 3)."],
      ["9–10","Der Spielercharakter verschmilzt mit seiner Rüstung oder Kleidung. Das verleiht einen natürlichen Schutz mit Rüstungswert in Höhe der Rüstung (min. 2) und erhöht die maximalen TP um denselben Betrag, aber −2 auf alle CHA-basierten Fertigkeiten (min. 3)."]]}}
    ]}
  ]}
 ],
 figuren:{
  "purpurflamme-kultisten":{"typ":"nsc","t":"Dämonenkultisten","p":48,"img":"abenteuer/purpurflamme-kultisten","werte":[["Bewegung","10"],["Schadensbonus","–"],["TP","12"]],"zl":[["Rüstung","–"],["Fertigkeiten","Ausweichen 10, Wahrnehmung 10"],["Waffen","Handaxt (Fertigkeitswert 14, Schaden 2W6), Schleuder (Fertigkeitswert 14, Schaden W8)"]],"text":["Eine Gruppe Kultisten, so viele wie Spielercharaktere, ist auf dem Weg aus dem Tempel hinaus.","Es waren einmal fünf mehr von ihnen – einer starb in der Falltür im Altarraum (Ort 5), drei gingen durch das Portal (Ort 11), von denen einer nie zurückkehrte und zwei verändert zurückkamen, und einer starb im Konflikt mit ihnen, bevor die anderen fliehen konnten. Die überlebenden Kultisten sind verwundet, verängstigt und verzweifelt. Sie haben mehrere Fackeln und Essensrationen verloren und wollen nur noch aus dem Tempel heraus. Sie alle tragen schwarze Roben.","Ein Kultist hat einen Schlüssel zur Tür der Treppe im Wachraum (Ort 6). Sie wissen, dass es irgendwo im Tempel eine Knochenmaske geben soll, die ihren Träger vor dämonischem Einfluss schützt. Sie sehen sie als heilige Reliquie, haben sie aber nicht finden können. Sie sind den Spielercharakteren nicht unbedingt feindlich gesinnt, besonders wenn die Charaktere freundlich und hilfsbereit sind. Ihre Treue zu Sathmog und zum Kult hat im Verlauf der Mission ein wenig nachgelassen. Sie verraten vielleicht, dass Annabella in Außenposten Mitglied ihres Kults ist."]},
  "purpurflamme-ranken":{"typ":"monster","t":"Mörderische Dornenranken","p":49,"tp":26,"werte":[["Grimmigkeit","2"],["Größe","Groß"],["Bewegung","–"],["Rüstung","–"],["TP","26"]],"zl":[["Brennbar","Erleiden doppelten Schaden durch Feuerangriffe."],["Widerstand","Erleiden halben Schaden durch stechende und wuchtige Waffen."]],"text":["Die dämonischen Energien, die aus dem Portal austreten, haben die Dornenranken rund um den Tempel riesig wachsen und einen Appetit auf frisches Fleisch entwickeln lassen. Wer ihnen zu nahe kommt, riskiert einen Angriff. Den Ranken fehlt es an Bewusstsein, und sie handeln allein aus Instinkt."],"angriffe":{"h":"Monsterangriffe","w":"W6","rows":[
   ["1","**Sporenwolke!** Die Ranken versprühen eine Wolke purpurner Sporen, die einen schrecklichen Juckreiz verursachen. Die Wirkung entspricht einem lähmenden Gift der Wirkstärke 14 gegen alle Spielercharaktere innerhalb von 10 Metern."],
   ["2","**Scharfe Dornen!** Die scharfen Dornen der Ranken zerreißen die Haut des Opfers. Der Angriff verursacht 2W8 stechenden Schaden."],
   ["3","**Würgende Äste!** Dünne Äste schlingen sich um alle Abenteurer innerhalb von 6 Metern. Die Opfer erleiden W8 wuchtigen Schaden und werden festgehalten. Sich zu befreien erfordert einen gelungenen STÄ-Wurf (zählt als Aktion, andere können helfen) oder einen Angriff, der den Ranken mindestens 6 Schadenspunkte zufügt. Ein festgehaltener Charakter kann keine Aktion ausführen, die Körperbewegung erfordert."],
   ["4","**Peitschenhieb!** Ein dicker Ast schlägt mit enormer Kraft nach einem Spielercharakter innerhalb von 10 Metern. Der Angriff verursacht 2W6 wuchtigen Schaden und wirft das Opfer zu Boden."],
   ["5","**Tödliche Umarmung!** Ein Gewirr von Ästen versucht, einem Spielercharakter innerhalb von 10 Metern das Leben auszupressen. Das Opfer erleidet 2W8 wuchtigen Schaden und wird festgehalten. Sich zu befreien erfordert einen gelungenen STÄ-Wurf mit einem Nachteil (andere können helfen) oder einen Angriff, der den Ranken mindestens 6 Schadenspunkte zufügt."],
   ["6","**Gesichtsangriff!** Ein unglücklicher Spielercharakter innerhalb von 10 Metern wird von einem Ast angegriffen, der seinen Weg in Mund und Nase des Opfers findet. Der Angriff verursacht W12 Schadenspunkte, und das Opfer muss einen WIL-Wurf machen, um der Furcht zu widerstehen."]
  ]}},
  "purpurflamme-hafarmal":{"typ":"nsc","t":"Hafarmal","p":50,"img":"abenteuer/purpurflamme-hafarmal","tp":12,"werte":[["Bewegung","10"],["Schadensbonus","–"],["TP","12"],["WP","15"]],"zl":[["Rüstung","–"],["Fertigkeiten","Animismus 13, Mentalismus 16, Mythen & Legenden 14, Wildniskunde 15"],["Zauber","§Schnippen§, §Magie spüren§, §Vogelgesang§, §Sanfter Fall§, §Bannen§, §Wunde versorgen§, §Tierflüsterer§, §Fernsicht§, §Kraftfaust§, §Schweben§, §Telepathie§."],["Waffe","Stab (Fertigkeitswert 12, Schaden W8)"]],"text":["Gekleidet in naturfarbene Kleidung, darunter Robe und Umhang. Hat eine heisere Stimme und raucht ständig Pfeife. Ohne es selbst zu wissen, wurden seine Augen durch die Nähe zum Portal vollständig schwarz. Hafarmal kann verletzte Spielercharaktere heilen und kennt den Geheimgang in der Nordwand des Innenhofs (Ort 3).","Hafarmal ist den Kultisten begegnet und mag es nicht, dass sie den Frieden stören. Er kennt das Portal im Keller (Ort 11) und weiß, wie man es schließt, will aber, dass es offen bleibt. Er kann mit §Überzeugen§ dazu gebracht werden, seine Meinung zu ändern."]},
  "purpurflamme-skelette":{"typ":"monster","t":"Skelette","p":53,"be":"skelett","werte":[],"zl":[],"text":["Wie die Skelette im Regelbuch, aber bei Bewusstsein.","Sie sind unbewaffnet."]},
  "purpurflamme-mantikor":{"typ":"monster","t":"Mantikor","p":53,"be":"mantikor","werte":[],"zl":[],"text":["Der Mantikor hat die Werte aus dem Regelbuch, aber 56 TP und eine Grimmigkeit in Höhe der Anzahl der Spielercharaktere minus eins (mindestens 1)."]},
  "purpurflamme-verdrehte":{"typ":"monster","t":"Verdrehte Kultisten","p":54,"img":"abenteuer/purpurflamme-verdrehte","werte":[["Bewegung","12"],["Schadensbonus STÄ","+W4/W6"],["TP","24"]],"zl":[["Rüstung","4"],["Fertigkeiten","Wahrnehmung 10, Raufen 12, Ausweichen 12"],["Waffe","Streitaxt (Fertigkeitswert 13, Schaden 2W8)"],["Dämonische Zähigkeit","Erreicht ein verdrehter Kultist zum ersten Mal null TP, erhebt er sich in seinem nächsten Zug wieder, nun mit W6 TP und einem dämonischen Zorn, der seinen Schadensbonus auf +W6 erhöht."]],"text":["Die verdrehten Kultisten sind über zwei Meter groß und unnatürlich dünn, und ihre Eisenrüstungen sind mit ihren Körpern verschmolzen. Ihre Augen sind vollständig schwarz, und sie sind von einer purpurnen Aura umgeben."]},
  "purpurflamme-spinne":{"typ":"monster","t":"Riesenspinne","p":48,"be":"riesenspinne","werte":[],"zl":[],"text":["Werte siehe Regelbuch S. 89."]}
 },
 kaesten:{},
 tabellen:[
  {"id":"ereig","h":"Zufallsereignisse","strip":"Zufallsereignisse · W12","p":48,"einl":"Für jedes Viertel, das die Spielercharaktere in einem Raum verbringen, vielleicht auf der Suche nach etwas oder bei einer Kurzen Rast, kannst du auf der folgenden Tabelle würfeln oder ein passendes Ereignis wählen. Die Raumbeschreibungen geben an, wo Zufallsereignisse eintreten können.","cols":["W12","Ereignis"],"rows":[
   ["1–6","**Nichts geschieht.**"],
   ["7","**Umherziehende Kultisten.** Die Kultisten sind auf dem Weg aus dem Tempel, als sie plötzlich auf die Spielercharaktere treffen. Das Risiko eines Kampfes ist hoch, doch man kann mit ihnen reden."],
   ["8","**Kämpfende Kultisten.** Die Spielercharaktere hören Kampflärm aus einem angrenzenden Raum. Es sind die Kultisten, die gegen eine Riesenspinne oder Mörderische Dornenranken kämpfen (S. 49)."],
   ["9","**Kultisten greifen an.** Die Kultisten haben die Spielercharaktere entdeckt und beschlossen anzugreifen, am liebsten mit einem Überraschungs- oder Hinterhaltsangriff."],
   ["10","**Schreckliches Brüllen.** Die Spielercharaktere hören das Brüllen eines schrecklichen Ungeheuers. Es kommt vom Mantikor in der Gewölbehalle (Ort 8). Alle Spielercharaktere müssen einen WIL-Wurf machen, um der Furcht zu widerstehen."],
   ["11","**Riesenspinne.** Die Spielercharaktere werden von einer Riesenspinne angegriffen, die von den Energien des Dämonenreichs vergrößert wurde. Werte siehe Regelbuch S. 89."],
   ["12","**Mörderische Dornenranken.** Die Wände des Raums sind mit riesigen Dornenranken bedeckt, die zum Leben erwachen und einen Spielercharakter angreifen, der ihnen zu nahe kommt. Siehe S. 49."]
  ]}
 ]
};
