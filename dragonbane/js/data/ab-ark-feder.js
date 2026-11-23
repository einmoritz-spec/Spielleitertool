/* Das Handelshaus Weiße Feder (Arkand S. 41–49) – deutsche Fassung. §…§ = Fertigkeit in Kapitälchen. Modell: plan/dragonbane/ABENTEUER_PLAN.md §2 */
window.DB_AB = window.DB_AB || {};
DB_AB["ark-feder"] = {
 id:"ark-feder", mul:1, t:"Das Handelshaus Weiße Feder", band:"ark-hafen", buch:"db_ark", p:41, img:"abenteuer/ark-feder-titel", kurz:"21 Orte",
 lage:[
  "Nur einen Steinwurf von der Gilde der Wellen entfernt, auf der anderen Seite des Hafens, liegt das Handelshaus Weiße Feder, ein bedeutender Handelsplatz in Arkand. Vor Jahrhunderten wurde es vom legendären Entdecker und Händler Hynchos Breitschnabel gegründet – einem engen Freund von Arkands erstem Souverän, Avador Northing. Heute wird das Handelshaus von seiner Ururururenkelin Plathyra Breitschnabel geführt.",
  {"h":"Die Lage","p":41},
  "Tagsüber leitet Plathyra Breitschnabel von ihrem Kontor im Handelshaus Weiße Feder aus ein weitverzweigtes Handelsgeschäft. Wie ihre Vorfahren hat sie eine Schwäche für exotische Waren und ist dafür bekannt, für lange Zeit auf Expeditionen zu verschwinden.",
  "Die Wahrheit ist: Plathyra Breitschnabel ist auch die gefürchtete Piratenkönigin Kapitänin Blutschnabel, Anführerin der berüchtigten Stockenten-Piraten, der Blutschnabel-Piraten, die die Gewässer rund um Arkand für jeden unsicher machen, der kostbare Fracht befördert. Sie hegt unverhohlene Ambitionen, Souverän Elrita Blutauge zu stürzen, angefeuert vom Geist des legendären Schwarzschnabel, der in den zerfallenen Überresten seiner sagenumwobenen Grotte tief unter dem Handelshaus spukt.",
  "Die Spielercharaktere können viele Gründe haben, das Handelshaus Weiße Feder aufzusuchen. Vielleicht verfolgen sie die Spur der Blutschnabel-Piraten, werden von Plathyra zu einem Gespräch über einen wichtigen Auftrag eingeladen oder wollen einfach ein paar exotische Waren verkaufen, die sie auf ihren Reisen aufgesammelt haben.",
  {"karte":{"h":"Abenteuer-Ideen","p":42,"b":[{"ul":[
   "**Verhandler und Beschaffer:** Alles beginnt mit der Zufallsbegegnung *Durchgehende Kutsche auf dem Markt*. Beweisen sich die Spielercharaktere bei den Verhandlungen mit Plathyra Breitschnabel als fähig, ist sie beeindruckt. Nach dem Treffen schickt sie Dominus Skaup oder Valineria zu ihnen und bietet ihnen eine Stelle als ihre Augen und Ohren in der Stadt an.",
   "**Hafenwachen:** Brigador heuert die Spielercharaktere an, um die Sicherheit rund um das neu eingetroffene Handelsschiff Aestusia unauffällig zu verstärken. Gelingt ihnen das, ohne Aufmerksamkeit zu erregen, versucht eine Gruppe Blutschnabel-Piraten (so viele wie Spielercharaktere + W3), das Schiff zu überfallen. Leisten die Charaktere starken und kompetenten Widerstand, ziehen sich die Blutschnabel-Piraten zurück, versuchen ihre Verfolger abzuschütteln und kehren zum unterirdischen Anleger (Ort 18) zurück. Ihnen zu folgen könnte der perfekte Weg sein, ihn zu entdecken.",
   "**Adriatikas Verrat:** Brigador hegt schon lange den Verdacht, dass jemand innerhalb der Gilde der Wellen Informationen an die Diebe weitergibt, die Schiffe im Hafen plündern. Er bittet die Spielercharaktere, alle hochrangigen Mitglieder der Gilde im Auge zu behalten. Folgen sie Adriatika (S. 56) zu dem Ort, an dem sie ihre Informationen für die Blutschnabel-Piraten hinterlegt, können sie der Stockente, die sie abholt, bis zurück zum Handelshaus Weiße Feder folgen."
  ]}]}}
 ],
 bereiche:[
  {id:"erdgeschoss", t:"Erdgeschoss", karte:{img:"abenteuer/ark-feder-erdgeschoss", p:43}, orte:[
   {n:"1", t:"Fassade", p:42, pin:[5.6,23.9], wesen:["skaup","valineria"],
    vl:"Ein weiß getünchtes Gebäude steht allein auf seinem eigenen Pier. Über der prächtigen, verzierten Doppeltür, deren Rahmen mit kunstvollen Mustern beschnitzt sind, hängt eine dicke Flagge, die auf grünem Grund einen goldenen Schnabel über gekreuzten weißen Federn zeigt. Beide Türflügel haben blank polierte Messingklopfer in Form von Entenfüßen. Ihr riecht das Salz des Meeres und hört die heiseren Schreie der Drachenfalken über euch.",
    st:[
     {"k":"Eingangstür","x":"Die Tür brachte Hynchos von einer seiner vielen Reisen mit. Mit einem gelungenen §Fremdsprachen§-Wurf erkennen die Spielercharaktere einige der Zeichen als Buchstaben einer längst toten Sprache, aber welcher, bleibt unklar. Die Tür ist immer verschlossen. Versuche, das Schloss zu knacken, werden mit einem Nachteil gewürfelt."},
     {"k":"Anklopfen","x":"Anklopfen ist ebenfalls möglich. Ist die Dame des Hauses zu Hause, öffnet Dominus Skaup die Tür, andernfalls Valineria. Öffnet Skaup, ist ein gelungener §Überzeugen§- oder §Täuschen§-Wurf nötig, damit die Charaktere eingelassen werden und ihn treffen. Ein zweiter gelungener Wurf ist nötig, um eine Audienz bei Plathyra zu bekommen."},
     {"k":"Die Flagge","x":"Mit einem gelungenen §Mythen & Legenden§-Wurf erkennen die Spielercharaktere in der Flagge mit dem Schnabel das Familienwappen der Breitschnabels. Mit einem zweiten gelungenen Wurf erinnern sie sich an das Gerücht um Hynchos Breitschnabel."},
     {"k":"Tür zum Lagerhaus","x":"Die breite Doppeltür lässt sich nur von innen öffnen. Es gibt jedoch eine kleinere Seitentür, deren Schloss mit §Fingerfertigkeit§ geknackt werden kann."},
     {"k":"Der Kamin","r":1,"x":"*Ein Spielercharakter mit dem Heldentalent Schlangenmensch kann womöglich durch den Kamin hineingelangen. Natürlich ist es heiß, wenn im Zielraum ein Feuer brennt. Mit einem §Entdecken§-Wurf lässt sich bestimmen, welcher Kamin wohin führt.*"},
     {"k":"Das Zeichen des Hudin","r":1,"x":"*Am Fuß des Gebäudes, knapp über dem Boden nahe dem Haupteingang, ist ein geschnitztes Bild einer geballten Faust über einem Amboss zu sehen. Es ist das Zeichen des Zwergen-Baumeisters Hudin, der das Handelshaus Weiße Feder einst für Hynchos Breitschnabel errichtete.*"},
     {"k":"Osten","x":"Tür zur Eingangshalle (Ort 2)."},
     {"k":"Osten","x":"Breite Doppeltüren zum Lagerhaus (Ort 9), mit einer Pforte samt verschiebbarem Spähschlitz."},
     {"k":"Unten","x":"Kamin zum Kontor (Ort 5), Salon (Ort 6), zur Küche (Ort 8), zu Plathyras Privatsalon (Ort 15) und Plathyras Gemach (Ort 16)."}
    ]},
   {n:"2", t:"Eingangshalle", p:42, pin:[32.9,23.9], wesen:[],
    vl:"Die Wände sind mit Gemälden bedeckt, die eine große Stockente mit einem Schnabel zeigen, der weit breiter ist als ihr Gesicht. Sie posiert auf dem Deck eines sturmgepeitschten Schiffes, inmitten von Ruinen im Sonnenuntergang und mit den Füßen auf erlegten Tieren in exotischen Landschaften. Eine breite Treppe aus dunklem, poliertem Holz führt in das Obergeschoss.",
    st:[
     {"k":"Die Gemälde","x":"Mit einem gelungenen §Mythen & Legenden§-Wurf erkennen die Spielercharaktere, dass die Stockente auf den Porträts niemand anderes ist als Hynchos Breitschnabel. Weitere §Mythen & Legenden§-Würfe können es ihnen ermöglichen, Episoden aus seinem Leben sowie die dargestellten Orte zu erkennen. Einen Ort zu erkennen erfordert einen gelungenen Wurf mit Nachteil. Pro Viertel ist ein Versuch erlaubt. Zu den Orten und den dazugehörigen Gerüchten, die die Charaktere erkennen können, gehören das Drachenreich Immer-Drak jenseits des Traummeeres, Markoths Graben, das Nebeltal und das Kummergebirge (sowie alle anderen Orte, die für deine Kampagne von Bedeutung sind). In der Halle hängen zehn Gemälde, jedes für den richtigen Käufer 75 Gold wert. Haben die Charaktere bereits einen dargestellten Ort erkannt, erkennen sie ihn möglicherweise auch auf anderen Gemälden im Haus."},
     {"k":"Osten","x":"Doppeltüren mit dem Familienwappen der Breitschnabels führen zum Salon (Ort 6)."},
     {"k":"Osten","x":"Breite Treppe hinauf zur Galerie (Ort 11)."},
     {"k":"Norden","x":"Tür zum Warte- und Waffenraum (Ort 3)."},
     {"k":"Süden","x":"Dunkle Holztür zum Vorzimmer (Ort 4)."}
    ]},
   {n:"3", t:"Warte- und Waffenraum", p:43, pin:[26.1,7.8], wesen:[],
    vl:"Zwei Stühle mit hoher Lehne stehen schräg zu einem Tisch in der hinteren Ecke des Raums. Die untere Hälfte der Wände ist mit Holzpaneelen verkleidet, in die Reliefs von Schnäbeln und Federn geschnitzt sind. Die obere Hälfte schmücken kleinere Gemälde dramatischer Landschaften. Gleich hinter der Tür steht ein stabiler Schrank mit einem schweren Schloss.",
    st:[
     {"k":"Gemälde","x":"Die Gemälde sind für den richtigen Käufer je 25 Gold wert. Es sind zehn im Raum. §Mythen & Legenden§-Würfe haben dieselbe Wirkung wie in der Eingangshalle (Ort 2)."},
     {"k":"Waffenschrank","x":"Von Gästen wird erwartet, ihre Waffen für die Dauer des Besuchs im Waffenschrank zu lassen, der abgeschlossen wird. Dominus Skaup hat den Schlüssel."},
     {"k":"Warten","x":"Wurde den Spielercharakteren Einlass gewährt und warten sie auf eine Audienz bei Plathyra, müssen sie hier ein Viertel lang warten, bevor sie in einen passenderen Raum geführt werden."},
     {"k":"Osten","r":1,"x":"*Hinter einer der Wandtafeln befindet sich eine versteckte Tür zur Bibliothek (Ort 7). Sie kann mit §Entdecken§ gefunden werden. Sie zu öffnen erfordert einen §Fingerfertigkeit§-Wurf, da sie dafür gemacht ist, von der anderen Seite geöffnet zu werden.*"},
     {"k":"Süden","x":"Tür zur Eingangshalle (Ort 2)."}
    ]},
   {n:"4", t:"Vorzimmer", p:43, pin:[26.1,46.7], wesen:[],
    vl:"Dunkle Holzpaneele, in die Motive von Federn und Schnäbeln geschnitzt sind, zieren die Wände. Gemälde ferner Küsten hängen neben ausgestopften Vögeln mit farbenprächtigem Gefieder. Zu beiden Seiten der breiten Doppeltür, die die Ostwand des Raums beherrscht, stehen zwei Stühle und ein runder Tisch.",
    st:[
     {"k":"Gemälde","x":"Die Gemälde sind für den richtigen Käufer je 5 Gold wert. Es sind zehn im Raum. §Mythen & Legenden§-Würfe haben dieselbe Wirkung wie oben."},
     {"k":"Vögel","x":"Die Vögel wurden auf den Reisen von Hynchos und Plathyra gesammelt, die beide ein tiefes Interesse an ihrer eigenen Herkunft hatten und das Sammeln von Vögeln als eine Möglichkeit ansahen, sie zu erforschen. Mit einem gelungenen §Tierkunde§-Wurf erkennen die Spielercharaktere, dass die Vögel aus fernen Ländern stammen."},
     {"k":"Osten","x":"Doppeltüren mit dem Familienwappen der Breitschnabels führen zum Kontor (Ort 5)."}
    ]},
   {n:"5", t:"Kontor", p:43, pin:[40.0,52.9], wesen:["plathyra"],
    vl:"Ein aus geborgenen Schiffsteilen gebauter Schreibtisch nimmt den größten Teil des Raums ein. Bücherregale, schwer von Wälzern und Schriftrollen, säumen die Wände. Hinter dem Schreibtisch hängen zwei gekreuzte breitklingige Speere über einem Schild aus gefleckter Tierhaut. Im offenen Kamin knistert angenehm ein Feuer.",
    st:[
     {"k":"Aufzeichnungen und Briefwechsel","x":"Die Wälzer und Schriftrollen sind voller sorgfältiger Aufzeichnungen über Ein- und Verkäufe des Handelshauses. Unter ihnen finden aufmerksame Spielercharaktere eine Reihe von Briefen zwischen Plathyra und der Gilde der Wellen, in denen darüber gestritten wird, wem die sogenannten Geschenke von Hynchos Breitschnabel, die derzeit in der Gilde verwahrt werden, wirklich gehören. Der Ton wird im Verlauf des Briefwechsels zunehmend feindselig."},
     {"k":"Kassentruhe","x":"Hinter dem Schreibtisch steht eine am Boden verschraubte Truhe. Sie enthält die Kasse des Handelshauses für kleine Ausgaben. Die Summe schwankt im Laufe der Zeit (2W20 Gold und 2W100 Silber). Die Truhe loszubrechen erfordert einen §Handwerk§-Wurf mit Nachteil und ein geeignetes Werkzeug."},
     {"k":"Osten","r":1,"x":"*Eine Geheimtür hinter einem der Bücherregale (gefunden mit §Entdecken§, geöffnet mit §Fingerfertigkeit§) verbirgt eine schmale Treppe hinauf zu Plathyras Gemach (Ort 16).*"},
     {"k":"Westen","x":"Doppeltüren zum Vorzimmer (Ort 4)."},
     {"k":"Oben","x":"Kamin hinauf zu Plathyras Gemach (Ort 16) und zur Fassade (Ort 1)."}
    ]},
   {n:"6", t:"Salon", p:44, pin:[55.7,18.1], wesen:[],
    vl:"Ein eindrucksvoller achtarmiger Kronleuchter in Form eines Kraken hängt von der Decke über einem massiven Holztisch mit Platz für mindestens ein Dutzend Gäste. Der Tisch ist für ein Festmahl gedeckt, mit blanken Tellern und Bechern, einer bunten Tischdecke und kunstvollen Gestecken aus getrockneten Blumen. Die Wände zieren nautische Dekorationen wie Ruderpinnen, rußgeschwärzte Segeltuchfetzen, Taue und Flaschenzüge.",
    st:[
     {"k":"Tischgedeck","x":"Habgierige Charaktere können sich zwölf Garnituren aus Zinntellern, Bechern und Besteck einstecken. Jede Garnitur ist 10 Gold wert. Alle Stücke sind elegant mit dem Familienwappen der Breitschnabels geprägt, weshalb sie sich in Arkand nur schwer verkaufen lassen."},
     {"k":"Süden","x":"Tür zur Küche (Ort 8)."},
     {"k":"Westen","x":"Doppeltüren mit dem Familienwappen der Breitschnabels führen zur Eingangshalle (Ort 2)."},
     {"k":"Westen","x":"Tür zur Bibliothek (Ort 7)."},
     {"k":"Oben","x":"Kamin hinauf zur Fassade (Ort 1)."}
    ]},
   {n:"7", t:"Bibliothek", p:44, pin:[40.8,6.8], wesen:[],
    vl:"Zwei riesige rote Sofas, überquellend von Federkissen, beherrschen den Raum. An den Wänden stehen Bücherregale voller Schriftrollen, Wälzer und Kuriositäten. Auf einem niedrigen Tisch aus hellem Holz liegt eine große Sammlung von Pfeifen, daneben fünf kunstvoll bemalte Krüge.",
    st:[
     {"k":"Pfeifen und Krüge","x":"Plathyra ist eine leidenschaftliche Pfeifenraucherin. Jedem wichtigen Geschäftsabschluss geht eine Rauchsitzung in der Bibliothek voraus. Ein gelungener KON-Wurf ist nötig, um einen Hustenanfall zu vermeiden (erfahrene Raucher erhalten einen Vorteil auf den Wurf). Jeder Charakter, der während der Rauchzeremonie hustet, verliert Plathyras Respekt und erleidet bei allen künftigen CHA-basierten Fertigkeitswürfen, mit denen er sie beeinflussen will, einen Nachteil."},
     {"k":"Osten","x":"Tür zum Salon (Ort 6)."},
     {"k":"Westen","r":1,"x":"*Hinter einem der Bücherregale befindet sich eine Geheimtür zum Warte- und Waffenraum (Ort 3).*"}
    ]},
   {n:"8", t:"Küche", p:44, pin:[55.6,46.7], wesen:[],
    vl:"Der Geruch von verbranntem, im Holzofen gebackenem Brot schlägt euch entgegen, kaum dass ihr den Raum betretet. Ein angenehmes Glühen geht vom offenen Herd aus, auf dem ein großer Kessel brodelt. Teller, Schüsseln und Humpen sind ordentlich auf offenen Regalen gestapelt. Am kurzen Ende eines grob gezimmerten, fettverschmierten Esstisches aus hellem Holz steht ein Weinfass. Langsam tropft Wein aus dem Hahn und bildet auf dem Boden eine blutrote Pfütze.",
    st:[
     {"k":"Essen und Trinken","x":"Die Matrosen kochen ihre Mahlzeiten abwechselnd selbst und essen in der Küche. Im Hafen bekommen sie morgens und abends eine Mahlzeit. Fast immer köchelt etwas im Topf. Wenn Plathyra feinere Gesellschaften gibt, engagiert sie Köche aus den besseren Tavernen der Stadt."},
     {"k":"Rationen","x":"Die Spielercharaktere können pro Runde W4 Rationen Nahrung zusammensuchen."},
     {"k":"Matrosen","x":"Zu den Mahlzeiten sind hier immer W4+4 Matrosen. Zu anderen Zeiten findet man hier W4–1 Matrosen."},
     {"k":"Süden","x":"Tür zum Lagerhaus (Ort 9)."},
     {"k":"Norden","x":"Tür zum Salon (Ort 6)."},
     {"k":"Oben","x":"Kamin hinauf zur Fassade (Ort 1)."}
    ]},
   {n:"9", t:"Lagerhaus", p:44, pin:[37.6,64.0], wesen:[],
    vl:"Der Raum reicht über die gesamte Höhe des Hauses bis hinauf zu den geteerten Dachsparren. Vom Boden bis zur Decke stehen Regale aus Balken, voll mit großen Kisten, Ballen, Säcken und Fässern. Lange Leitern lehnen an den Regalen wie Belagerungsleitern an Stadtmauern, bereit zum Sturm. An Schienen entlang der Sparren hängen Taue mit großen Eisenhaken.",
    st:[
     {"k":"Die Waren","x":"Das Lagerhaus enthält alle Waren, die das Handelshaus Weiße Feder offiziell handelt, darunter Stoffe, Metalle, Gewürze und mehr. Hier finden die Spielercharaktere jeden Häufigen oder Ungewöhnlichen Gegenstand aus den Tabellen für Handelswaren, Lichtquellen, Behälter und Jagen & Fischen im Regelbuch – und vieles mehr. Lass die Charaktere sagen, wonach sie suchen, und erlaube pro Viertel einen §Entdecken§-Wurf. Bei Erfolg finden sie, was sie suchen. Ein Dämon beim Wurf lässt sie von einer Leiter fallen; sie erleiden Fallschaden aus einer Höhe von W8 Metern und ziehen die Aufmerksamkeit von W4 Matrosen auf sich."},
     {"k":"Regale und Leitern","x":"Die vielen hoch aufragenden Regale machen diesen Ort zu einem idealen Schauplatz für dramatische Kämpfe und Verfolgungsjagden. Lass die Spielercharaktere und die Stockenten hinauf und hinunter, vor und zurück springen! Behandle die Umgebung im Kampf als die improvisierte Waffe Kronleuchter im Regelbuch, aber beliebig oft verwendbar."},
     {"k":"Matrosen","x":"Tagsüber laden W4 Matrosen Fracht ein und aus. Gelingt den Charakteren ein §Überzeugen§-Wurf mit Nachteil, lassen die Matrosen sie einen Blick ins Lagerhaus werfen."},
     {"k":"Osten","x":"Eine einfache Holztür zum Schlafsaal der Matrosen (Ort 10)."},
     {"k":"Osten","r":1,"x":"*In einer Ecke des Lagerhauses befindet sich eine versteckte Tür. Wer gleichzeitig kräftig auf die beiden dunkelsten Planken drückt (gefunden mit §Entdecken§ mit Nachteil; geöffnet mit §Fingerfertigkeit§), löst einen Verriegelungsmechanismus aus. Damit lässt sich der untere Teil der Wand nach innen und nach rechts schieben und gibt eine feuchte Steintreppe frei, die hinunter zum Versteckten Lager (Ort 17) führt.*"},
     {"k":"Westen","x":"Doppeltüren zur Fassade (Ort 1), mit einem massiven Balken verriegelt. Die westliche Tür hat eine Pforte mit verschiebbarem Spähschlitz."},
     {"k":"Süden","x":"Doppeltüren zur Fassade (Ort 1) zur Wasserseite hin, über die Fracht von und zur Karavelle Weiße Feder IV ein- und ausgeladen wird."}
    ]},
   {n:"10", t:"Schlafsaal der Matrosen", p:45, pin:[64.9,71.6], wesen:[],
    vl:"Hängematten, Hängematten, Hängematten – kreuz und quer in jeder Höhe und jedem Winkel. Bunte Federn in allen Farben bedecken den Boden. Aus einer der Hängematten baumelt ein einzelner Entenfuß.",
    st:[
     {"k":"Matrosen","x":"Hier schlafen immer W4 Matrosen, ganz gleich zu welcher Tageszeit."},
     {"k":"Bündel","x":"In jeder Hängematte liegt das persönliche Bündel eines Matrosen mit seinen wertvollsten Habseligkeiten. Zieht für jedes Viertel, das die Spielercharaktere mit Suchen verbringen, eine Schatzkarte, ignoriert aber übermäßig wertvolle Gegenstände. Das kostbarste Stück ist ein goldenes Medaillon in Form eines Kraken, das Domidia Treibholz gehört (siehe den Abenteuerort *Der Tod in der Tiefe*)."},
     {"k":"Westen","x":"Einfache Holztür zum Lagerhaus (Ort 9)."}
    ]}
  ]},
  {id:"obergeschoss", t:"Obergeschoss", karte:{img:"abenteuer/ark-feder-obergeschoss", p:46}, orte:[
   {n:"11", t:"Galerie", p:45, pin:[46.6,24.2], wesen:["skaup"],
    vl:"Eine schöne hölzerne Balustrade trennt das obere Stockwerk von der Halle darunter. Türen, die tiefer ins Haus führen, wechseln sich mit großen Gemälden einer hochgewachsenen Stockente mit breitem Schnabel in eindrucksvollen Szenen ab – am Bug eines Schiffes im Sturm oder auf einer hohen Klippe über einer goldenen Landschaft.",
    st:[
     {"k":"Gemälde","x":"Siehe Eingangshalle (Ort 2). Hier hängen fünf Gemälde, jedes für den richtigen Käufer bis zu 75 Gold wert."},
     {"k":"Balustrade","x":"Ein gelenkiger Charakter kann mit §Akrobatik§ über die Balustrade springen und in der Eingangshalle landen."},
     {"k":"Osten","x":"Doppeltüren zu Hynchos' Galerie (Ort 14)."},
     {"k":"Süden","x":"Breite Treppe hinunter zur Eingangshalle (Ort 2)."},
     {"k":"Süden","x":"Verschlossene Doppeltüren zu Plathyras Privatsalon (Ort 15)."},
     {"k":"Norden","x":"Tür zu Dominus Skaups Zimmer (Ort 12)."},
     {"k":"Norden","x":"Tür zu Valinerias Kammer (Ort 13)."},
     {"k":"Nordosten","x":"Doppeltüren zu Hynchos' Galerie (Ort 14)."}
    ]},
   {n:"12", t:"Dominus Skaups Zimmer", p:45, pin:[14.0,8.3], wesen:["skaup"],
    vl:"Ein schlichter Raum mit einem breiten Bett, einem Nachttisch und einer großen Truhe.",
    st:[
     {"k":"Nachttisch","x":"Auf dem Nachttisch liegt eine goldbraune Feder. Sie gehörte einst der berühmten Sängerin Clypteata, was Mallardus III bestätigen kann (siehe den Abenteuerort *Akademie von Arkand*)."},
     {"k":"Die Truhe","x":"Diese verschlossene Truhe enthält Dominus' Trophäen von den gefährlichsten Gegnern, die er auf seinen Kaperfahrten mit den Blutschnabel-Piraten besiegt hat. Darin liegen Wolfsmenschen-Schnauzen, Stockentenschnäbel und Zwergennasen. Am bemerkenswertesten ist die getrocknete Nase von Domidia Treibholz."},
     {"k":"Dominus","x":"Dominus verbringt sehr wenig Zeit in seinem Zimmer. Er kommt nur zum Schlafen hierher."},
     {"k":"Süden","x":"Tür zur Galerie (Ort 11)."}
    ]},
   {n:"13", t:"Valinerias Kammer", p:46, pin:[30.2,8.3], wesen:["valineria"],
    vl:"Der Duft frischer Tinte erfüllt diesen gemütlich eingerichteten Raum. Ein kleiner Schreibtisch, übersät mit Schreibzeug und Stapeln von Pergament, steht vor einem Bücherregal. In einer niedrigen Glasvitrine liegen einige offenbar frisch beschriebene Seiten zum Trocknen.",
    st:[
     {"k":"Schreibzeug","x":"Auf dem Schreibtisch liegt eine feine Sammlung kunstvoll gefertigter Federkiele und Tintenfässer."},
     {"k":"Die Seiten","x":"Die zum Trocknen ausgelegten Seiten enthalten frisch geschriebene Gedichte von eher mäßiger Qualität, von denen Valineria hofft, dass der Satyr Constadine Crookhorn sie eines Tages vertonen wird."},
     {"k":"Bücherregal","x":"Das Bücherregal enthält eine Vielzahl von Büchern über die Geschichte der bekannten Welt, darunter eine Chronik des Lebens von Plathyra Breitschnabel, an der Valineria derzeit arbeitet. Es gibt auch mehrere Theaterstücke, darunter eines über die Piratenkönigin Kapitänin Blutschnabel (*Königin des Meeres*)."},
     {"k":"Die verborgene Chronik","r":1,"x":"*Unter einigen losen Dielen unter dem Schreibtisch liegt Valinerias geheimes Werk in Arbeit: eine Chronik von Blutschnabels Eroberungen und Abenteuern, einschließlich Notizen aus ihren Gesprächen mit Plathyra.*"},
     {"k":"Süden","x":"Tür zur Galerie (Ort 11)."}
    ]},
   {n:"14", t:"Hynchos' Galerie", p:46, pin:[62.9,13.4], wesen:[],
    vl:"Der vollgestopfte, L-förmige Raum ist bis zum Bersten gefüllt mit seltsamen Statuen, uralten Skulpturen, bunten Gemälden, exotischen Waffen, ungewöhnlichen Rüstungsteilen, Vorhängen und Wandteppichen. In der Mitte steht ein langer Tisch voller zarter Glaskuppeln, unter denen leuchtend bunte Schmetterlinge sitzen.",
    st:[
     {"k":"Hynchos' Schätze","x":"In dieser Galerie bewahrte Hynchos Breitschnabel seine liebsten Schätze von seinen vielen Abenteuern auf. Plathyra verbringt gern Zeit hier und denkt an vergangene Tage. Kommen die Spielercharaktere in friedlicher Absicht, bietet sie ihnen vielleicht eine Führung durch die Galerie an."},
     {"k":"Süden","r":1,"x":"*In der Westwand, hinter einem großen Wandteppich, der eine Prozession schwarz gewandeter Gestalten in glatten roten Masken zeigt, befindet sich eine versteckte Tür zu Plathyras Privatsalon (Ort 15).*"},
     {"k":"Südwesten","x":"Tür zur Galerie (Ort 11)."}
    ]},
   {n:"15", t:"Plathyras Privatsalon", p:46, pin:[57.3,49.5], wesen:["plathyra"],
    vl:"Schwere rote Vorhänge säumen die Wände. Eine mit langen, bunten Federn bedeckte Chaiselongue steht vor einem knisternden Kamin. Auf einem niedrigen Tisch stehen eine gläserne Karaffe mit roter Flüssigkeit und zwei goldene Becher. Doppeltüren nach Norden und Westen führen aus dem Raum hinaus.",
    st:[
     {"k":"Die Becher","x":"Die beiden Becher sind mit dem Familienwappen der Breitschnabels graviert, weshalb sie sich in Arkand unmöglich verkaufen lassen. Das Metall ist 25 Goldmünzen pro Becher wert."},
     {"k":"Westen","x":"Doppeltüren zu Plathyras Gemach (Ort 16)."},
     {"k":"Norden","x":"Doppeltüren zur Galerie (Ort 11)."},
     {"k":"Norden","r":1,"x":"*Hinter einem der roten Vorhänge befindet sich eine Geheimtür zu Hynchos' Galerie (Ort 14).*"},
     {"k":"Oben","x":"Kamin hinauf zur Fassade (Ort 1)."}
    ]},
   {n:"16", t:"Plathyras Gemach", p:47, pin:[24.9,49.5], wesen:["plathyra"],
    vl:"Ein Himmelbett mit purpurnen Behängen steht der Tür direkt gegenüber. Daneben trägt ein kleiner Tisch einen großen Spiegel, der von Rand zu Rand gesprungen ist. An den Wänden hängen Wandteppiche mit seltsamen geometrischen Mustern mit scharfen Winkeln. Das Feuer im Kamin wirft tanzende Schatten an die Wände, sodass es aussieht, als bewegten sich winzige Gestalten durch die Labyrinthe der Wandteppiche.",
    st:[
     {"k":"Hynchos' Tagebücher","r":1,"x":"*In einer kleinen Truhe unter dem Bett bewahrt Plathyra etwas auf, von dem sonst niemand weiß, dass es existiert: die Tagebücher von Hynchos Breitschnabel. Mit einem gelungenen §Mythen & Legenden§-Wurf finden die Spielercharaktere die Passagen, die seine Suche nach Schwarzschnabels Schatz, den Bau des Tunnels unter dem Gebäude und Gespräche mit Schwarzschnabels Geist beschreiben, der Hynchos drängte, Avador Northing um den Titel des Souveräns herauszufordern. Den Schlüssel zur Truhe trägt Plathyra an einem Band um den Hals.*"},
     {"k":"Plathyras Schwarzes Buch","r":1,"x":"*In derselben Truhe liegt eine peinlich genaue Liste von Personen, von denen Plathyra glaubt, dass sie sie als nächste Souveränin unterstützen würden. Einige Namen sind deutlich zur Beseitigung markiert, darunter Brigador, Vanador, Odelion und Elrita Blutauge.*"},
     {"k":"Federn im Bett","r":1,"x":"*Mit einem gelungenen §Entdecken§-Wurf finden die Charaktere im Bett einige von Plathyras Federn.*"},
     {"k":"Osten","x":"Doppeltüren zu Plathyras Privatsalon (Ort 15)."},
     {"k":"Osten","r":1,"x":"*Hinter einem der Wandteppiche in der südöstlichen Ecke befindet sich eine versteckte Tür zu einer schmalen Treppe, die hinunter zum Kontor (Ort 5) führt.*"}
    ]}
  ]},
  {id:"untergrund", t:"Untergrund", karte:{img:"abenteuer/ark-feder-keller", p:48}, orte:[
   {n:"17", t:"Verstecktes Lager", p:48, pin:[11.7,21.2], wesen:[],
    vl:"Die Luft ist kühl und feucht und trägt den schwachen Geruch von Salz und Seetang. Ein paar Holzkisten stehen neben einer Eichentruhe mit gewölbtem Deckel und schwarz gestrichenen Eisenbeschlägen.",
    st:[
     {"k":"Diebesgut","x":"Hier lagert Plathyra die gesamte Beute der Blutschnabel-Piraten, bevor sie rasch an Arkands weniger skrupellose Händler verteilt und umverpackt wird, um nicht die Aufmerksamkeit der Stadtwache oder der Gilde der Wellen zu erregen. Für jedes Viertel, das die Spielercharaktere mit Suchen verbringen, finden sie zwei Schatzkarten. Zum Diebesgut gehören Domidia Treibholz' Ladung Eisenbarren aus dem Kummergebirge (mit dem Siegel des Kummergebirges gekennzeichnet) sowie Marimas und Edionas Lieferung exotischer Gewürze, noch in den Originalbehältern mit dem Siegel ihres Handelshauses – einem Porträt ihrer Eltern."},
     {"k":"Osten","x":"Steintreppe hinunter zum Unterirdischen Anleger (Ort 18)."},
     {"k":"Westen","x":"Steintreppe hinauf zu einer versteckten Tür zum Lagerhaus (Ort 9)."}
    ]},
   {n:"18", t:"Unterirdischer Anleger", p:48, pin:[19.4,59.9], wesen:[],
    vl:"Das Erste, was ihr seht, ist ein Kai aus rauem Stein, direkt aus dem Fels gehauen. Einige niedrige, schmale, seltsam geformte Boote sind an Land gezogen und lehnen an den Wänden. Es riecht stark nach Tang, Salz und Meer, und das sanfte Plätschern der Wellen gegen den Stein hallt von der Decke wider, sodass man sich wie unter Wasser fühlt.",
    st:[
     {"k":"Die falschen Fische","x":"Auf den Felsen gezogen und an die Höhlenwände gelehnt stehen mehrere Wasserfahrzeuge in Form der Rücken verschiedener Meerestiere, die im Hafen und auf offener See vorkommen. Jedes Boot fasst einen oder mehrere Passagiere und ist mit Luftlöchern ausgestattet, die ihnen ein bequemes Atmen ermöglichen."},
     {"k":"Die Blutschnäbel","x":"An einem Gestell an der Westseite des Tunnels zum Versteckten Lager (Ort 17) hängen die Schnäbel aus geschärftem Stahl, die die Piraten im Kampf benutzen (W10 hauender Schaden, für Angriffe auf §Raufen§ würfeln). Ein Stockenten-Spielercharakter kann mit einem gelungenen §Entdecken§-Wurf einen finden, der passt."},
     {"k":"Süden","x":"Zwei Fallgitter (100 TP, Rüstungswert 25) versperren den Wasserweg unter Arkands Hafen. Zum Schutz vor Eindringlingen ließ Hynchos Breitschnabel sie früh mit Hilfe einiger Zwergenhandwerker einbauen, die leider nie dazu kamen, jemandem von ihrer Arbeit zu erzählen, nachdem sie fertig war. Sie werden mit einer Winde gehoben und gesenkt, die von einer kleinen Plattform drei Meter hinter dem inneren Fallgitter aus erreichbar ist. Ist ein Blutschnabel-Pirat auf einer Mission unterwegs, ist hier mindestens ein Matrose postiert, der die Fallgitter bedient."},
     {"k":"Osten","r":1,"x":"*Eine von Hynchos' Konstruktionen war die Geheimtür zum Unterirdischen Kanal (Ort 19). Sie ist gut versteckt, und sie zu finden erfordert einen gelungenen §Entdecken§-Wurf mit Nachteil. Haben die Charaktere Hynchos' Tagebücher gelesen, erhalten sie stattdessen einen Vorteil auf den Wurf.*"},
     {"k":"Norden","x":"Lange, schmale Treppe hinauf zum Versteckten Lager (Ort 17)."}
    ]},
   {n:"19", t:"Unterirdischer Kanal", p:49, pin:[30.5,57.8], wesen:[],
    vl:"Ein schmaler unterirdischer Kanal führt tief unter die Stadt. Hier und da seht ihr Reste gemauerter Wände, doch bald weicht das Mauerwerk feuchtem, kahlem Fels. Das dunkle Wasser liegt still um euch, und das einzige Geräusch ist das Echo von Wasser, das von der Decke tropft.",
    st:[
     {"k":"Osten","x":"Kanal zu Schwarzschnabels Grotte (Ort 20). Er wurde von den Zwergen gegraben, die Hynchos für den Bau des Handelshauses Weiße Feder angeheuert hatte."},
     {"k":"Westen","x":"Versteckte Tür zum Unterirdischen Anleger (Ort 18)."}
    ]},
   {n:"20", t:"Schwarzschnabels Grotte", p:49, pin:[64.3,49.0], wesen:["schwarzschnabel","geisterpiraten"],
    vl:"Der schmale Kanal öffnet sich in einen riesigen unterirdischen See, umgeben von steilen Felswänden. Gewaltige Felsbrocken sind ins Wasser gestürzt. Massive Stalaktiten hängen von der Decke wie riesige Einhornhörner. Ein Mast mit Krähennest und einer weißen Flagge mit einem schwarzen Schnabel ragt aus der Wasseroberfläche des Sees.",
    st:[
     {"k":"Das Wrack","x":"Auf dem Grund des Sees ruhen die traurigen Überreste von Schwarzschnabels einst so stolzem Schiff, zerschmettert von herabstürzenden Felsen, als Arkand von der Großen Welle getroffen wurde. Der Hauptmast ist alles, was unversehrt geblieben ist. Blau leuchtende Gestalten bewegen sich auf dem Wrack hin und her, als gingen sie noch immer ihren Pflichten nach."},
     {"k":"Geisterpiraten","x":"Die vier von Schwarzschnabels Piraten, denen der Tod am schwersten fiel, haben sich an die Welt der Lebenden geklammert und arbeiten unermüdlich (aber vergeblich) daran, das gesunkene Schiff wieder seetüchtig zu machen. Werden sie gestört oder von Schwarzschnabels Geist herbeigerufen, greifen sie als Gruppe an. Da sie nicht sehr stark sind, zählt die ganze Gruppe als ein einziger Geist (Regelbuch S. 87)."},
     {"k":"Schwarzschnabels Geist","x":"Sobald sich jemand tiefer in die Grotte wagt, offenbart sich der Geist von Schwarzschnabel. Er trennt sich von seiner Mannschaft, steigt aus dem Wasser auf und schwebt über der Oberfläche. Schwarzschnabels Geist hat im Jenseits nur ein Ziel – Arkand wieder zu einem von einer würdigen Stockente regierten Piratenhafen zu machen – und versucht, die Spielercharaktere zu überreden, ihm dabei zu helfen. Er gibt offen zu, dass Hynchos Breitschnabel eine gewisse Enttäuschung war, denn obwohl er ungeheuren Reichtum angehäuft hatte, forderte er Avador Northing nie um die Führung heraus. Aber auf Plathyra setzt er große Hoffnungen. Schwarzschnabels Geist wird erst Frieden finden, wenn Arkand wieder von einer Stockente regiert wird. Dann wird er den Ort seines vergrabenen Schatzes verraten und unter dem Fels verschwinden, unter dem sein Skelett ruht. Werte: siehe Regelbuch S. 87."},
     {"k":"Stockenten-Skelette","r":1,"x":"*Wer die Grotte durchsucht, findet zahlreiche Skelette von Stockenten – einige von herabgefallenen Felsen zerquetscht, andere im unterirdischen See ertrunken.*"},
     {"k":"Zwergen-Skelette","r":1,"x":"*Die Knochen der fünf Zwerge, die das Handelshaus Weiße Feder gebaut haben (§Tierkunde§), sind ebenfalls auf dem Grund des Sees zu finden. Schwarzschnabels Geist war so freundlich, sie zu Tode zu erschrecken, kaum dass sie in die Grotte stolperten. Ihr Werkzeug und ihre Ausrüstung sind weggerostet, aber ihr Siegel ist noch sichtbar: eine geballte Faust, die auf einen Amboss schlägt.*"},
     {"k":"Schwarzschnabels Skelett","r":1,"x":"*Unter einem Geröllhaufen im nordwestlichen Teil der Grotte liegt Schwarzschnabels Skelett, das noch immer seinen magischen Krummsäbel umklammert (§Waffe verzaubern§, Kraftstufe 3, §Beständigkeit§). Ein paar Federn kleben noch an dem Schädel mit seinem legendären schwarzen Schnabel.*"},
     {"k":"Westen","x":"Durchgang zum Unterirdischen Kanal (Ort 19)."},
     {"k":"Nordwesten","r":1,"x":"*Das Geröll im nordwestlichen Teil der Grotte verbirgt den Eingang zu Schwarzschnabels Schatzkammer (Ort 21). Das Geröll zu räumen erfordert geeignetes Werkzeug und insgesamt drei Tagesabschnitte Arbeit mit gelungenen §Handwerk§-Würfen. Höchstens drei Personen können gleichzeitig arbeiten.*"}
    ]},
   {n:"21", t:"Schwarzschnabels Schatzkammer", p:49, pin:[49.8,5.4], wesen:[],
    vl:"Ein unvorstellbarer Hort von Schätzen schimmert, glitzert, funkelt und gleißt rings um euch. Wohin ihr auch blickt, liegen Haufen von Goldmünzen und Stapel von Truhen, die überquellen von glitzernden Halsketten, goldenen Bechern, Perlen und Edelsteinen. Nicht einmal die uralten Drachen könnten sich solcher Reichtümer rühmen.",
    st:[
     {"k":"Schwarzschnabels Schatz","x":"Der Schatz ist unerschöpflich. Die Spielercharaktere können für jede Runde des Suchens eine Schatzkarte ziehen. Mit einem gelungenen §Entdecken§-Wurf dürfen sie zwei Schatzkarten ziehen und die ihnen genehmere behalten."},
     {"k":"Der letzte Einsturz!","r":1,"x":"*Sobald die Charaktere die Schatzkammer betreten, beginnt der Boden bedrohlich zu beben, und die Erschütterungen werden mit jeder Runde stärker. Das lässt sich mit einem §Wahrnehmung§-Wurf bemerken. Der Wurf erfolgt in der ersten Runde mit Nachteil und in der dritten mit Vorteil. In der vierten Runde beginnt der Boden einzustürzen. Ein gelungener §Ausweichen§-Wurf ist nötig, um zu entkommen (mit Vorteil, wenn man sich im Umkreis von 4 Metern um den Ausgang befindet). In der fünften Runde gibt der Boden vollständig nach, und alle Charaktere, die sich noch im Raum befinden, stürzen mitsamt dem Schatz, der für immer in der Tiefe verloren ist, in den Tod!*"},
     {"k":"Südosten","x":"Geröll/Eingang zu Schwarzschnabels Grotte (Ort 20)."}
    ]}
  ]}
 ],
 figuren:{
  "skaup":{"typ":"nsc","t":"Dominus Skaup","p":45,"img":"abenteuer/ark-feder-skaup","tp":26,"werte":[["Bewegung","12"],["Schadensbonus STÄ","+W4"],["TP","26"],["WP","12"]],
   "zl":[["Rüstung","Beschlagenes Leder (2)"],["Fertigkeiten","Feilschen 17, Täuschen 15, Fremdsprachen 16, Seefahrt 17, Schwimmen 18"],["Waffen","Stahlbeschlagener, geschärfter Bootshaken (Fertigkeitswert 17, Schaden 2W8), stahlverkleideter Schnabel (Fertigkeitswert 15, Schaden W10)"],["Talente","Defensiv, Beschützer (nur zum Schutz von Plathyra), Robust × 5, Seebeine, Veteran"],["Ausrüstung","Schlüssel zur Trophäentruhe"]],
   "text":["Dominus Skaup ist ein beeindruckender Anblick und unter den Stockenten ziemlich einzigartig. Er hat den Umfang eines großen Weinfasses, tiefschwarzes Gefieder mit blauem Schimmer und Augen in der Farbe geschmiedeten Stahls. Seit vielen Jahren ist er Plathyras rechte Hand, sowohl bei Verhandlungen als auch auf See, und Kapitän der Königin der Anker. Außerdem ist er tief in die Sängerin Clypteata verliebt, was er zugibt, wenn man ihn mit §Überzeugen§ dazu bringt."]},
  "valineria":{"typ":"nsc","t":"Valineria","p":46,"tp":10,"werte":[["Bewegung","12"],["Schadensbonus","–"],["TP","10"]],
   "zl":[["Rüstung","–"],["Fertigkeiten","Feilschen 17, Fremdsprachen 16, Mythen & Legenden 14, Seefahrt 10, Entdecken 12, Schwimmen 17"],["Waffen","Dolch (Fertigkeitswert 10, Schaden W8)"]],
   "text":["Valineria ist an ihrem rotbraunen Kopf und dem auffallend langen, schmalen Schnabel leicht zu erkennen und Plathyras treue Schreiberin und Chronistin. Sie widmet sich der Aufgabe, die offizielle Biografie ihrer Herrin zu verfassen und ihr den verdienten Platz in der Stockentengeschichte zu sichern – als diejenige, die Arkand zu seinem früheren Glanz zurückführte. Valineria arbeitet eng mit Mallardus III zusammen, um Adriana dazu zu bringen, ihre Theaterstücke über bedeutende Stockenten aufzuführen – zuletzt *Königin des Meeres*, ein Stück über Kapitänin Blutschnabel."]},
  "plathyra":{"typ":"nsc","t":"Plathyra Breitschnabel","p":47,"img":"abenteuer/ark-feder-plathyra","tp":22,"werte":[["Bewegung","12"],["Schadensbonus GEW","+W4"],["TP","22"],["WP","15"]],
   "zl":[["Rüstung","Seeschlangenschuppen (4)"],["Fertigkeiten","Feilschen 17, Täuschen 15, Ausweichen 14, Fremdsprachen 16, Seefahrt 17, Schwimmen 17"],["Talente","Defensiv, Doppelhieb, Beidhändig, Einsicht, Blitzschnell, Robust × 4, Seebeine"],["Waffen","Zwei gezackte Krummsäbel (Fertigkeitswert 15, Schaden 2W8), Handarmbrust (Fertigkeitswert 16, Schaden 2W6)"]],
   "text":["Plathyra Breitschnabel ist eine unerbittlich ehrgeizige Geschäftsfrau, die ihr Handelshaus tadellos führt. Jeder, der mit ihr Geschäfte gemacht hat, geht mit dem Gefühl davon, einen fantastischen Handel abgeschlossen zu haben, obwohl er höchstwahrscheinlich gründlich übers Ohr gehauen wurde. Doch Plathyra ist nicht nur die vollendete Kauffrau. Sie ist auch eine berüchtigte Kaperin, die unter dem Decknamen Kapitänin Blutschnabel operiert, weil sie ihren Schnabel in Stahl gefasst hat, was ihn zu einer bösartigen Waffe macht. Außerdem trägt sie eine rote Maske, um ihre wahre Identität zu verbergen.","Plathyra träumt davon, Elrita Blutauge als Souverän abzulösen und Arkand zu seinem früheren Glanz als Piratenhafen zurückzuführen, um ihren Vorfahren Schwarzschnabel zu ehren, dessen Geist sie täglich in den Ruinen seiner Grotte besucht. Auf ihrem Weg zur nächsten Souveränin hat sie drei Auftragsmörder der geheimnisvollen Sekte Ank-Tar angeheuert. Unglücklicherweise wurde einer von ihnen bei einem gescheiterten Einschleichversuch in die Zitadelle der Zerbrochenen Flügel gefangen genommen – eine beunruhigende Entwicklung für Plathyra, die gerade erst darüber nachzudenken begonnen hat, wie sie dieses Problem zusammen mit all ihren anderen lösen soll."]},
  "schwarzschnabel":{"typ":"monster","t":"Schwarzschnabel","p":49,"be":"geist","text":["Der Geist des legendären Piraten Schwarzschnabel."]},
  "geisterpiraten":{"typ":"monster","t":"Geisterpiraten","p":49,"be":"geist","text":["Die vier Geisterpiraten greifen als Gruppe an und zählen als ein einziger Geist (Regelbuch S. 87)."]}
 },
 kaesten:{},
 tabellen:[]
};
