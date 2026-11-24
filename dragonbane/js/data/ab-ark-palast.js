/* Der Palast der Verjüngung (Arkand S. 78–81) – deutsche Fassung. §…§ = Fertigkeit in Kapitälchen. Modell: plan/dragonbane/ABENTEUER_PLAN.md §2 */
window.DB_AB = window.DB_AB || {};
var _PAL_TINK = [
   ["Vivianas Fokus","5 Silber","Ungewöhnlich","Heilt sofort den Zustand Benommen. Ist der Anwender nicht Benommen, erhält er W10 Runden lang Vorteil auf alle auf GEW basierenden Fertigkeitswürfe. Lässt die Wirkung nach, wird der Anwender Benommen."],
   ["Rosenharmonie","5 Silber","Ungewöhnlich","Heilt sofort den Zustand Wütend. Ist der Anwender nicht Wütend, erhält er W10 Runden lang Vorteil auf alle auf INT basierenden Fertigkeitswürfe."],
   ["Flüssiger Mut","2 Gold","Selten","Verleiht Immunität gegen Furcht für ein Viertel. Lässt die Wirkung nach, erleidet der Anwender einen Zustand seiner Wahl."],
   ["Glimmertropfen","1 Gold","Ungewöhnlich","Verleiht Nachtsicht, gleichwertig mit Fackellicht, für ein Viertel. Für jede weitere Dosis, die ohne mindestens eine Kurze Rast dazwischen eingenommen wird, erleidet der Anwender einen Zustand seiner Wahl."],
   ["Krabbenlunge","2 Silber","Ungewöhnlich","Verleiht Vorteil auf KON-Würfe, um den Atem anzuhalten, für ein Viertel."],
   ["Drachensengen","2 Gold","Ungewöhnlich","Ein Pulver, das einen gewaltigen brennenden Schmerz verursacht, wie ihn Drachenfeuer hervorruft. Das Ziel muss in jeder Runde einen WIL-Wurf mit Nachteil schaffen (keine Aktion), um etwas anderes zu tun, als sich zu kratzen. Die Wirkung hält ein Viertel an."],
   ["Vivianas Verjüngung","10 Gold","Selten","Das Pulver zählt als gelungener Todeswurf, wenn es einer Person mit 0 TP ins Gesicht gestreut wird."],
   ["Wolke der Leichtgläubigkeit","3 Silber","Ungewöhnlich","Der Anwender wird allen Umstehenden gegenüber freundlich. Ein Viertel lang werden alle Versuche, §Täuschen§, §Feilschen§ oder §Überzeugen§ gegen ihn einzusetzen, mit Vorteil gewürfelt."]
  ];
var _PAL_EINGR = [
   ["Schwere Verletzung behandeln","Variiert","Heilt eine schwere Verletzung aus der Tabelle auf S. 51 des Regelbuchs (außer Albträume, Veränderte Persönlichkeit und Amnesie). Die SL bestimmt den Preis nach der Art der Verletzung."],
   ["Tätowierung entfernen","3 Gold","Entfernt eine Tätowierung, hinterlässt aber eine deutliche Narbe. Ovilius spendet die Haut an Kontar bei der Seelentinte."],
   ["Aussehensveränderung","30 Gold","Verändert das Aussehen der Person bis zur Unkenntlichkeit, wenn auch nicht immer so, wie sie es sich erhofft hat."],
   ["Stachelhaut","10 Gold","Metallplatten werden unter die Haut eingepflanzt und erhöhen den Rüstungswert um 1."],
   ["Furchteinflößendes Aussehen","10 Gold","Das Aussehen des Kunden wird durch tiefe Narben, ein verzerrtes Grinsen, unnatürliche Augenfarben und andere furchterregende Merkmale verstärkt. Verleiht Vorteil auf CHA basierende Fertigkeitswürfe, wenn man versucht, jemanden einzuschüchtern."],
   ["Transplantation","50 Gold","Ein verlorenes Körperglied (Hand, Arm, Fuß oder Bein), das seit weniger als 24 Stunden abgetrennt ist, wird wieder angebracht. Es kann auch durch ein Glied einer anderen Person derselben Volkszugehörigkeit ersetzt werden."]
  ];
DB_AB["ark-palast"] = {
 id:"ark-palast", mul:1, t:"Der Palast der Verjüngung", band:"ark-dung", buch:"db_ark", p:78, img:"abenteuer/ark-palast-titel", kurz:"6 Orte",
 lage:[
  "Für alle, die Glück und Wunder in einer Flasche suchen oder einen Leistungsschub brauchen, für Menschen mit hartnäckigen Leiden oder etwas so Alltäglichem wie einem gebrochenen Bein oder einer tiefen Schwertwunde im Arm ist der Palast der Verjüngung das perfekte Ziel. Zumindest, wenn man bei den Erdbrüdern an der Akademie nicht willkommen ist. Oder wenn man knapp bei Kasse ist. Oder beides.",
  {h:"Die Lage", p:78},
  "Im Palast der Verjüngung haben die Eheleute Viviana und Ovilius ihre Leidenschaften und Fertigkeiten vereint. Viviana braut wundersame Tränke, Absude und Elixiere, die selbst den mürrischsten Zwerg zu einem fröhlichen Helden machen und Gifte und Krankheiten aus den Leidenden vertreiben können. Diese Mittel stellt sie in ihrem Tinkturarium (Ort 3) her.",
  "Ovilius geht körperliche Verletzungen eher handfest an und führt kleine Operationen und Körperkorrekturen durch – vom Schienen gebrochener Knochen und Nähen von Wunden bis zu Eingriffen, die das Aussehen verändern, für Menschen, die verschwinden wollen. Seine Arbeit verrichtet er in seiner Fleischwerkstatt (Ort 5).",
  "Den eigenen Betrieb einen „Palast“ zu nennen, ist natürlich übertrieben, auch wenn das Paar ihn liebt, als wäre er einer. In Wirklichkeit ist er eine bunte, aber ziemlich baufällige Bruchbude im Herzen des Dungs, wohin nie ein Sonnenstrahl dringt. Das ist äußerst praktisch, denn die beiden Eheleute sind zufällig Vampire*.",
  "*Vampire sind im Dragonbane-Bestiarium ausführlich beschrieben. Wenn du dieses Buch nicht besitzt, behandle die beiden als Menschen und ignoriere die Ruhekammer (Ort 6).",
  {stein:{h:"Abenteueraufhänger", b:[{ul:[
   "*Das Wundermittel:* Eine oder mehrere Spielercharaktere haben eine schwere Verletzung erlitten. Während sie an einem öffentlichen Ort ihr Los beklagen, beugt sich jemand zu ihnen und flüstert ihnen das Gerücht über den Palast der Verjüngung zu und empfiehlt einige der dort angebotenen Dienste.",
   "*Es ist für einen Freund:* Die Spielercharaktere werden gebeten, eine Lieferung aus dem Palast der Verjüngung abzuholen. Die Bestellung steht auf einem Zettel in einem mit schwarzem Wachs versiegelten Umschlag. Wer der Auftraggeber ist, was abgeholt wird und wozu es dienen soll, entscheidest du als SL.",
   "*Es hat mich gebissen!* Ein Schrei aus einem Fenster im Obergeschoss lenkt die Aufmerksamkeit der Spielercharaktere auf sich. Die Stimme gehört Borghir, einem erfolgreichen und unglaublich muskulösen Söldner, den Viviana sich als Beute ausgesucht hat. Plötzlich fliegen die Fensterläden auf, und ein riesiger Schwarm Fledermäuse strömt hinaus. Gelingt es den Charakteren, den Fledermäusen zu folgen, sehen sie sie unter den Palast der Verjüngung tauchen und spurlos verschwinden. Sprechen sie mit Borghir, ist das einzig Ungewöhnliche, was er in den letzten Tagen getan hat, einen Termin im Palast der Verjüngung für eine Stachelhaut zu vereinbaren. Außerdem hat er es geschafft, Viviana eine Strähne ihres feuerorangen Haars auszureißen."
  ]}]}}
 ],
 bereiche:[
  {id:"palast", t:"Der Palast", karte:{img:"abenteuer/ark-palast-karte", p:79}, orte:[
   {n:"1", t:"Fassade", p:78, pin:[61.7,20.9], wesen:[],
    vl:"Am Rand des schmalen Kais lehnt sich ein Haus gefährlich weit über den Kanal. Mit seiner dunkelroten Fassade und der orangefarbenen Tür erhellt es den Dung wie eine Mitternachtssonne. Ein protziges Schild schwankt an der Front mit der Aufschrift „Der Palast der Verjüngung“. Und darunter in feinerer Schrift: „Tinkturarium & Fleischwerkstatt.“ Ein einladendes Gesicht aus bemaltem Holz lächelt von oberhalb der Tür auf euch herab.",
    st:[
     {k:"Süden", x:"Tür zum Wartezimmer (Ort 2). Unverschlossen, solange der Palast geöffnet ist; sonst von innen verschlossen und verriegelt. Die Tür ist mit einer Falle versehen, die auslöst, wenn jemand versucht, sie im verschlossenen Zustand zu öffnen. Wird sie ausgelöst, wird aus dem Mund über der Tür eine große Dosis Drachensengen (siehe Tabelle Vivianas Tinkturen) ausgestoßen, die jeden trifft, der sich im Umkreis von zwei Metern direkt vor dem Eingang befindet. Es sind genug Ladungen für vier Dosen vorhanden."},
     {k:"Unten", r:1, x:"An der Unterseite des Gebäudes, die über das Wasser erreichbar ist, befindet sich eine verschlossene Falltür, die zum Genesungszimmer (Ort 4D) führt. Sie zu finden erfordert einen gelungenen §Entdecken§-Wurf. Die Tür öffnet sich nur für jemanden, der sowohl das geheime Klopfzeichen (kurz-lang-kurz-lang-lang-kurz) als auch das Passwort kennt: „Lebe das Leben in vollen Zügen.“"}
    ]},
   {n:"2", t:"Wartezimmer", p:79, pin:[61.6,33.5], wesen:["ark-palast-viviana"],
    b:[{h:"Vivianas Tinkturen", p:80},{tbl:{head:["Tinktur","Preis","Angebot","Wirkung"],rows:_PAL_TINK}}],
    vl:"Regale voller Flaschen in allen Farben, seltsam geformter Gläser und merkwürdiger Behälter säumen die Wände hinter einem Tresen, der die ganze Wand einnimmt. Glänzende Vorhänge hängen von der Decke und erwecken den Eindruck, man stünde unter der Oberfläche eines roten Meeres.",
    st:[
     {k:"Waren", x:"Viviana verkauft hinter dem Tresen eine große Vielfalt an Salben, Elixieren, Pulvern und anderen Heilmitteln. Es gibt kein Leiden, für das sie nicht ein Heilmittel zu haben behauptet – von Magenkrämpfen und Zwergenallergien bis zu Eifersucht und Schlaflosigkeit. Einige ihrer Waren stehen in der Tabelle Vivianas Tinkturen; du und deine Spieler dürft aber auch selbst bestimmen, was hier sonst verkauft wird. Alles aus der Tabelle Medizin (außer chirurgischen Instrumenten) auf S. 79 des Regelbuchs kann hier natürlich ebenfalls gekauft werden."},
     {k:"Viviana", x:"Kommen die Charaktere her, während der Palast geöffnet ist, begrüßt Viviana sie und fragt fröhlich, wie sie ihnen helfen kann, selbst wenn ihr Zustand es offensichtlich macht. Wollen sie eine ihrer Tinkturen kaufen, ist sie überglücklich. Sie fragt auch, ob die Charaktere vielleicht daran interessiert wären, ihr beim Sammeln seltener Zutaten zu helfen (zum Beispiel Seeschlangenschuppen, Riesenspinnenseide, Karkionschnurrhaare oder Drachenzähne). Verlangen sie stattdessen Ovilius’ Dienste, ist sie etwas beleidigt, ruft aber ihren Mann."},
     {k:"Türfalle", r:1, x:"Wer ein scharfes Auge hat (§Entdecken§), bemerkt vielleicht den Mechanismus, der die mit der Fassade (Ort 1) verbundene Falle steuert. Mit §Fingerfertigkeit§ kann man die Falle auslösen oder entschärfen oder W4 Dosen Drachensengen entnehmen."},
     {k:"Süden", x:"Tür zum Tinkturarium (Ort 3). Verschlossen, wenn der Palast geschlossen ist."},
     {k:"Norden", x:"Tür zur Fassade (Ort 1)."}
    ]},
   {n:"3", t:"Tinkturarium", p:80, pin:[52.6,58.2], wesen:[],
    vl:"Eine Werkbank voller Mörser und Stößel, Kessel und Töpfe steht an einer der Wände. In der Mitte des Raumes brennen drei Feuer in einer kreisrunden Feuerstelle. Aus einem Topf ragen Hasenohren, während Frösche in einem Netz über einem anderen lebendig gedämpft werden, ihre langen Beine zucken. An den Wänden hängen Siebe, Messer, Hämmer, Scheren und Schöpflöffel.",
    st:[
     {k:"Werkzeuge", x:"Im Lauf der Jahre hat Viviana eine große Sammlung seltsamer Werkzeuge und Gerätschaften angelegt, die ihr bei der Zubereitung ihrer Tinkturen helfen. Mit einem gelungenen §Entdecken§-Wurf können die Spielercharaktere ein bestimmtes Werkzeug finden, nach dem sie suchen."},
     {k:"Zutaten", x:"Überall im Raum befinden sich Zutaten, die in Vivianas Tinkturen verwendet werden. Lass die Charaktere mit gelungenen §Entdecken§-Würfen finden, wonach sie suchen (in vernünftigem Rahmen), mit Nachteil bei Zutaten, die du für selten hältst. Pro gewünschter Zutat ist nur ein Versuch erlaubt."},
     {k:"Süden", x:"Tür zur Fleischwerkstatt (Ort 5)."},
     {k:"Westen", x:"Tür zu den Genesungszimmern (Ort 4)."},
     {k:"Norden", x:"Tür zum Wartezimmer (Ort 2)."}
    ]},
   {n:"4", t:"Genesungszimmer 4A–D", p:80, pin:[[25.9,33.5],[25.8,45.6],[25.8,58.2],[27.6,71.6]], wesen:[],
    vl:"Diese kleinen Räume sind beruhigend eingerichtet, mit hellen Stoffen an den Wänden und bunten Teppichen auf dem Boden. In einer Ecke jedes Raumes steht ein schmales Bett mit einer dicken Strohmatratze, daneben ein Krug und ein Becher.",
    st:[
     {k:"Genesung", x:"Für Eingriffe, die lange Erholung und Beaufsichtigung erfordern, lässt Ovilius Patienten einen oder manchmal mehrere Tage hier bleiben."},
     {k:"Osten", x:"Tür zum Wartezimmer (Ort 2)."},
     {k:"Süden", x:"Tür zur Fleischwerkstatt (Ort 5)."},
     {k:"Unten", r:1, x:"Unter dem Teppich in Raum 4D befindet sich eine verschlossene Falltür, durch die Ovilius diskretere Kunden empfängt. Sie lässt sich entdecken, indem man genau an der richtigen Stelle sucht oder mit einem gelungenen §Entdecken§-Wurf."}
    ]},
   {n:"5", t:"Fleischwerkstatt", p:80, pin:[30.5,82.4], wesen:["ark-palast-ovilius"],
    b:[{h:"Eingriffe der Fleischwerkstatt", p:81},{tbl:{head:["Eingriff","Preis","Beschreibung"],rows:_PAL_EINGR}}],
    vl:"Ein robuster Stuhl, mit dicken Eisenbändern verstärkt, steht neben einem menschenlangen Tisch aus dunklem Holz. Am Fuß des Tisches steht ein abgenutzter Metalleimer. An einer Wand werden Werkzeuge über einem Bett aus glühender Kohle erhitzt. Einen Augenblick lang fragst du dich, ob du in eine Schmiede geraten bist.",
    st:[
     {k:"Fleischwerkzeuge", x:"Ovilius behandelt alle Arten sichtbarer körperlicher Verletzungen mit einer breiten Auswahl an Werkzeugen. Diese gelten als chirurgische Instrumente (siehe Tabelle auf S. 79 des Regelbuchs)."},
     {k:"Osten", r:1, x:"Wer aktiv an der Westwand sucht oder mit §Entdecken§ Erfolg hat, bemerkt den Geruch nach feuchter Erde und etwas breitere Spalten zwischen einigen Baumstämmen der Wand. Die Wand kann durchbrochen werden (12 TP, Rüstungswert 6), wodurch eine Öffnung in die Ruhekammer (Ort 6) entsteht."},
     {k:"Norden", x:"Tür zum Tinkturarium (Ort 3)."},
     {k:"Norden", x:"Tür zu den Genesungszimmern (Ort 4)."}
    ]},
   {n:"6", t:"Ruhekammer", p:81, pin:[79.9,85.5], wesen:["ark-palast-viviana","ark-palast-ovilius"],
    vl:"Der Geruch von Staub und feuchter Erde sticht euch in die Nasen. Ihr hört das leise Plätschern von Wasser, und in der Mitte des Raumes seht ihr etwas, das wie zwei lange Kisten aus grob behauenen Stämmen aus dunklem, glänzendem Holz mit goldgelber Maserung aussieht.",
    st:[
     {k:"Die Särge", x:"Viviana und Ovilius brachten ihre Särge aus ihrer Heimat mit, als sie vor Verfolgung und Unwissenheit flohen und in Arkand Zuflucht suchten. Hier ruhen sie in den Morgenstunden und kehren zurück, um ihre Wunden zu heilen. In den Särgen regenerieren sie W6 TP pro Runde. Um Aktionen auszuführen, wenn ein Sarg geöffnet ist, muss ein Vampir mindestens die Hälfte seiner maximalen TP zurückgewonnen haben. Die Särge können nicht zerstört werden."},
     {k:"Westen", x:"Schmale Spalten in der Wand, die zur Fleischwerkstatt (Ort 5) führen. Die Spalten sind gerade breit genug, dass die Vampire in Nebelgestalt hindurchpassen."},
     {k:"Unten", x:"Risse im Boden, die zur Fassade (Ort 1) führen."}
    ]}
  ]}
 ],
 figuren:{
  "ark-palast-viviana":{typ:"nsc", t:"Viviana", p:79,
   werte:[["Bewegung","12"],["Schadensbonus GEW","+W4"],["TP","12"],["WP","15"]], tp:12,
   zl:[["Rüstung","–"],["Fertigkeiten","Akrobatik 16, Feilschen 15, Täuschen 13, Raufen 15, Handwerk 16, Heilkunde 16, Fremdsprachen 13"],["Talente","Katzenhaft, Adlerauge"],["Waffen","Dolch (Fertigkeitswert 14, Schaden W8)"]],
   text:["Viviana ist eine energiegeladene Frau mittleren Alters mit explosivem Temperament, das so feurig ist wie ihr leuchtend oranges Haar. Schon die leiseste Andeutung, ihre Absude seien von schlechter Qualität oder ihren Preis nicht wert, treibt sie in rasende Wut (misslungene §Feilschen§- oder §Überzeugen§-Würfe zählen als gewürfelter Dämon). Über ihre Herkunft will sie nicht sprechen, doch Gerüchten zufolge stammt sie von jenseits des Meeres. Viviana fühlt sich besonders zu starker, robuster Beute hingezogen und findet Spielercharaktere mit KON 17 oder höher so verlockend, dass sie der Gruppe zu folgen beginnt und auf den richtigen Augenblick wartet, ihr Blut zu kosten.",
         "Denn Viviana ist ein Vampir. Wird sie in ihrem Heim zur Rede gestellt, offenbart sie ihre wahre Gestalt nur, wenn es unbedingt nötig ist. Erst dann beginnt sie, ihre Monsterangriffe einzusetzen, wobei sie frei zwischen diesen und ihrer Waffe wechseln kann. Vampire sind im Dragonbane-Bestiarium ausführlich beschrieben. Wenn du dieses Buch nicht besitzt, behandle Viviana als Mensch und verwende die Werte unten."]},
  "ark-palast-ovilius":{typ:"nsc", t:"Ovilius", p:81,
   werte:[["Bewegung","12"],["Schadensbonus STÄ","+W4"],["TP","14"],["WP","15"]], tp:14,
   zl:[["Rüstung","–"],["Fertigkeiten","Akrobatik 17, Raufen 17, Handwerk 15, Heilkunde 16, Fremdsprachen 10"],["Talente","Furchtlos, Eiserner Griff, Blitzschnell"],["Waffen","Breitschwert (Fertigkeitswert 15, Schaden 2W8)"]],
   text:["Ovilius floh zusammen mit Viviana aus seiner Heimat und entkam den engstirnigen Sonnenbewohnern auf der Suche nach einem Ort, an dem jeder willkommen ist – auch wenn die beiden ihre wahre Natur als Vampire noch nicht offenbart haben. Er ist zutiefst vom Körper und seinen Funktionen fasziniert und verbringt oft seine Nächte damit, Patienten bis ins kleinste Detail zu studieren und sie Experimenten zu unterziehen, die nicht immer unbedingt nötig sind – darunter die Entnahme von etwas Blut. Die Bissspuren verbirgt er unter sorgfältig gesetzten Schnitten und Nähten. Ovilius ist stolz auf sein Handwerk als Künstler des Fleisches und auf die Zufriedenheit seiner Kunden.",
         "Vampire sind im Dragonbane-Bestiarium ausführlich beschrieben. Wenn du dieses Buch nicht besitzt, behandle Ovilius als Mensch und verwende die Werte unten."]}
 },
 kaesten:{},
 tabellen:[]
};
