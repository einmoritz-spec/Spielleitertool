/* Totaugenhöhle (Abenteuerband S. 74–78) – deutsche Fassung. §…§ = Fertigkeit in Kapitälchen. Modell: plan/dragonbane/ABENTEUER_PLAN.md §2 */
window.DB_AB = window.DB_AB || {};
DB_AB["totaugen"] = {
 id:"totaugen", t:"Totaugenhöhle", band:"dk", buch:"db_adv", p:74, img:"abenteuer/totaugen-titel", kurz:"6 Orte",
 lage:[
  {"h":"Die Lage","p":74},
  "Auf einer einsamen Klippe im östlichen Kummergebirge liegt die Totaugenhöhle. Alle meiden diesen Ort, an dem nichts wächst und von dem kein sehendes Wesen je zurückkehrt, denn ein Basilisk hat ihn zu seinem Bau erkoren. Der Basilisk hat kürzlich einen Hof angegriffen und könnte eine ernste Bedrohung für Außenposten darstellen.",
  "Der Basilisk hat Hildis Hof südöstlich von Außenposten überfallen und fast alle dort getötet – bis auf Hildi selbst und ihre Nichte Gunhill. Die Spielercharaktere können in Außenposten davon hören (siehe die Gerüchtetabelle auf S. 17 und die Abenteuerkarten). Danach zog sich der Basilisk in seinen Bau auf dem Berg Oculus zurück.",
  "Der Berg heißt so, weil er einem Auge ähnelt.",
  "Wegen des Atems des Basilisken wächst in seiner Umgebung fast nichts. Der Basilisk ruht am Grund der Höhle, kann sich aber durch eine Reihe enger Schächte und Spalten hinauswinden. Gunhill, Hildis Nichte, ist in die Höhle gegangen, um die Bestie zu töten.",
  "Kultisten im Dienst von Azrahel Koth haben ebenfalls den Weg zur Höhle gefunden, auf der Suche nach Teilen der Drachenstatuette (oder nach anderen Schätzen, wenn ihr nicht *Das Geheimnis des Drachenkaisers* spielt). Wurde hier ein Teil der Statuette platziert, findet er sich im Bau des Basilisken (Ort 6).",
  {"stein":{"h":"Begegnung mit Hildi","b":[
   "Auf dem Weg zum Berg Oculus, etwa eine Stunde Fußmarsch von der Höhle entfernt, kommen die Spielercharaktere an Hildis Hof vorbei. Hildi ist die Einzige auf dem Hof, die den Angriff der Bestie überlebt hat, und auf dem nahen Feld sind mehrere frische Gräber zu sehen. Hildi ist blind, beschreibt aber, was sie gehört und gerochen hat. Menschen und Tiere schrien, während ein entsetzlicher Gestank die Luft erfüllte. Sie versuchte zu fliehen, wurde aber von der Bestie aufgehalten und war sicher, dass sie sterben würde, doch das Wesen ließ sie und den Hühnerstall in Ruhe. Sie hörte es in Richtung des Berges davonkriechen und glaubt, dass es aus der Höhle auf dem Gipfel kam. Hildi sagt auch, dass ihre Nichte Gunhill, die zum Zeitpunkt des Angriffs auf der Jagd war, nun zur Höhle gegangen ist, um die Bestie zu töten. Hildi fleht die Spielercharaktere an, nach Gunhill zu suchen."]}},
  {"stein":{"h":"Die Höhle verlassen?","b":["Verlassen die Spielercharaktere die Höhle, um eine Lange Rast einzulegen, würfelt W6 pro Tagesabschnitt auf der Tabelle auf S. 107 im Regelbuch."]}}
 ],
 bereiche:[
  {id:"hoehle", t:"Die Höhle", karte:{img:"abenteuer/totaugen-karte", p:77}, orte:[
   {n:"1", t:"Vor der Höhle", p:75, pin:[48.0,89.9], wesen:[],
    vl:"Dichter Nebel bedeckt den Gipfel des Berges Oculus. In der Mitte der Felsformation, der der Berg seinen Namen verdankt, dort, wo die Pupille wäre, liegt der Höhleneingang. Drinnen ist es stockfinster, und aus der Öffnung dringt ein modriger Geruch.",
    st:[
     {"k":"Kadaver","x":"Der Boden ist übersät mit den blutigen, zerfetzten Überresten von Beute, die von Hildis Hof hierhergeschleppt wurde. Sie scheinen großen Tieren gehört zu haben. Ein Spielercharakter, dem ein §Tierkunde§-Wurf gelingt, erkennt sie als Kadaver von Schafen und Pferden."},
     {"k":"Norden","x":"Pfad zum Höhleneingang (Ort 2)."}
    ]},
   {n:"2", t:"Höhleneingang", p:75, pin:[48.0,76.4], wesen:[],
    vl:"Im Inneren ist die Höhle dunkel und kühl. Der Nebel von draußen bedeckt den Boden, und der modrige Geruch ist noch stärker. Die Wände bestehen aus rauem, moosigem Stein.",
    st:[
     {"k":"Toter Kultist","x":"Gleich hinter dem Höhleneingang liegt ein toter Sathmog-Kultist in schwarzer Kleidung. Seine Augen sind herausgerissen, und sein Körper ist völlig steif. Spielercharaktere, die die Leiche untersuchen, finden auf seinem Unterarm das Zeichen Sathmogs und zwei große Bissspuren am Hals."},
     {"k":"Spur am Boden","r":1,"x":"Ein Spielercharakter, der die Höhle untersucht und einen §Entdecken§-Wurf schafft oder gezielt nach Spuren sucht, findet die Spur von etwas Großem, das von hier aus nach Norden (in Richtung Ort 3) geschleift wurde."},
     {"k":"Zufallsereignis","x":"Würfelt W8 auf der Tabelle (Tabellen-Tab) für jedes volle Viertel, das die Spielercharaktere hier verbringen."},
     {"k":"Norden","x":"Feuchter, dunkler Tunnel zur Schlangengrube (Ort 3)."},
     {"k":"Süden","x":"Durchgang aus der Höhle (Ort 1)."},
     {"k":"Westen","x":"Tunnel zum Kultistenlager (Ort 4). Von dort ist der flackernde Schein eines Feuers zu sehen."}
    ]},
   {n:"3", t:"Schlangengrube", p:75, pin:[51.7,51.0], wesen:["viper"],
    vl:"Der modrige Geruch wird in dieser Höhle zu einem beißenden Gestank. Der Boden fällt zu einer Grube ab, deren Grund sich schlängelnd zu bewegen scheint. Jetzt begreift ihr: Der gesamte Boden ist von Schlangen bedeckt. Der einzige Weg nach Norden führt über einen schmalen Sims an der Felswand entlang.",
    st:[
     {"k":"Schlangen","x":"Um an der Schlangengrube vorbeizuklettern, ist ein §Akrobatik§-Wurf nötig. Bei einem Fehlschlag stürzt der Spielercharakter hinein und muss einen WIL-Wurf machen, um der Furcht zu widerstehen. Das Opfer erleidet sofort W6 Stichschaden durch Schlangenbisse und in jeder weiteren Runde W6 Schaden. Rüstung hilft nicht. Um aus der Grube herauszuklettern, ist ein weiterer §Akrobatik§-Wurf nötig."},
     {"k":"Viper","r":1,"x":"In einer Felsspalte an der Nordseite der Schlangengrube befindet sich ein Nest mit einer Viper, die aus ihrem Schlummer erwacht und jeden vorbeikommenden Spielercharakter angreift."},
     {"k":"Zufallsereignis","x":"Würfelt W8 auf der Tabelle für jedes volle Viertel, das die Spielercharaktere hier verbringen."},
     {"k":"Norden","x":"Ein dunkler Tunnel auf der anderen Seite der Schlangengrube führt zu Gunhills Lager (Ort 5)."},
     {"k":"Westen","x":"Tunnel zum Kultistenlager (Ort 4). Von dort ist der flackernde Schein eines Feuers zu sehen."},
     {"k":"Süden","x":"Feuchter Tunnel zum Höhleneingang (Ort 2)."}
    ]},
   {n:"4", t:"Kultistenlager", p:76, pin:[24.6,59.0], wesen:["kultisten"],
    vl:"In der Mitte dieser Höhle brennt ein Lagerfeuer, dessen Rauch durch Risse in der Decke abzieht. Der Feuerschein fällt auf Schädel und Knochen, die überall auf dem Boden verstreut liegen, und auf eine Gruppe schwarz gekleideter Menschen am Feuer, die alle Augenbinden tragen. Neben ihnen steht auf dem Boden ein Käfig mit etwas, das wie Hühner aussieht.",
    st:[
     {"k":"Die Kultisten","x":"sind so viele wie die Spielercharaktere. Da sie Augenbinden tragen, erhalten die Spielercharaktere einen Vorteil auf §Heimlichkeit§, um an ihnen vorbeizuschleichen. Werden die Spielercharaktere entdeckt, greifen die Kultisten sofort an."},
     {"k":"Hühner","x":"Die Kultisten haben zwei Hühner in einem Käfig mitgebracht, weil Basilisken sich vor diesen Vögeln fürchten (S. 78)."},
     {"k":"Das Schwert","r":1,"x":"Wer zwischen den Knochen sucht, kann mit einem §Entdecken§-Wurf ein meisterhaft gefertigtes Breitschwert finden."},
     {"k":"Zufallsereignis","x":"Würfelt W8 auf der Tabelle auf S. 75 für jedes volle Viertel, das die Spielercharaktere hier verbringen."},
     {"k":"Osten","x":"Durchgang zur Schlangengrube (Ort 3)."},
     {"k":"Süden","x":"Feuchter Tunnel zum Höhleneingang (Ort 2)."}
    ]},
   {n:"5", t:"Gunhills Lager", p:76, pin:[53.5,34.9], wesen:["gunhill"],
    vl:"Eine Höhlenkammer mit mehreren großen Felsbrocken. Der Boden ist mit losen Steinen bedeckt, und die Nordwand besteht aus einem großen Haufen herabgefallener Felsen. An der Ostwand liegen eine Decke und etwas, das wie ein Rucksack aussieht.",
    st:[
     {"k":"Bärenfalle","r":1,"x":"Am Eingang ist eine Bärenfalle aufgestellt. Der Spielercharakter, der als Erster eintritt, löst die Falle aus, die W8 Hiebschaden verursacht, sofern das Opfer keinen §Ausweichen§-Wurf schafft. Die Spielercharaktere können die Falle rechtzeitig bemerken, wenn sie sich sehr vorsichtig in den Raum bewegen und einen §Entdecken§-Wurf schaffen."},
     {"k":"Gunhill","r":1,"x":"Hildis Nichte hat hier ihr Lager aufgeschlagen und versteckt sich hinter einem Felsbrocken, während sich die Spielercharaktere nähern. Sobald jemand die Bärenfalle auslöst, springt sie mit gezogenem Schwert und angelegter Augenbinde hervor. Gunhill ist misstrauisch – sie hat die Kultisten gehört und hält die Spielercharaktere für einen Teil ihrer Gruppe, kann aber mit einem §Überzeugen§-Wurf beruhigt werden."},
     {"k":"Zufallsereignis","x":"Würfelt W8 auf der Tabelle auf S. 75 für jedes volle Viertel, das die Spielercharaktere hier verbringen."},
     {"k":"Norden","x":"Hinter dem Haufen herabgefallener Felsen liegt der Bau des Basilisken (Ort 6). Die Felsen wegzuräumen dauert ein Viertel und erfordert einen gelungenen STÄ-Wurf (mehrere Versuche sind erlaubt), doch der Basilisk auf der anderen Seite bemerkt es. Durch die Felsen führt ein verborgener Durchgang, der mit einem §Akrobatik§-Wurf erreicht werden kann; Gunhill kennt ihn. Der verborgene Durchgang kann auch mit einem §Entdecken§-Wurf gefunden werden."},
     {"k":"Süden","x":"Dunkler Tunnel zur Schlangengrube (Ort 3)."}
    ]},
   {n:"6", t:"Der Bau des Basilisken", p:78, pin:[60.7,18.7], wesen:["basilisk","verbunden"],
    vl:"Eine große, dunkle Höhle, erfüllt von einem so starken Gestank, dass er in der Nase brennt. Der Boden ist von Skelettresten und verrottenden, herausgerissenen Augen bedeckt. In der Mitte des Raums sitzt eine schreckliche Kreatur, eine Mischung aus Schlange und Hahn von unmäßiger Größe.",
    st:[
     {"k":"Der Basilisk","x":"Dies ist das Nest der Bestie, und sie greift an, sobald sie die Spielercharaktere bemerkt. Das geschieht automatisch, wenn sie durch die Felsen kommen; Charaktere, die den verborgenen Durchgang benutzen, können einen §Heimlichkeit§-Wurf machen, um unentdeckt zu bleiben."},
     {"k":"Schätze","x":"Verstreut zwischen den Knochen auf dem Boden hinter dem Basilisken liegen Wertgegenstände im Wert von drei Schatzkarten. Wurde in diesem Abenteuer ein Teil der Drachenstatuette platziert, liegt er ebenfalls hier."},
     {"k":"Süden","x":"Öffnung zu Gunhills Lager (Ort 5)."}
    ]}
  ]}
 ],
 figuren:{
  "hildi":{"typ":"nsc","t":"Hildi","p":74,"img":"abenteuer/totaugen-hildi"},
  "viper":{"typ":"monster","t":"Viper","p":76,"werte":[["Bewegung","8"],["Schadensbonus","–"],["TP","16"]],"tp":16,
   "zl":[["Fertigkeiten","Ausweichen 15"],["Angriff","Biss (Fertigkeitswert 14, Schaden W6 + tödliches Gift mit Wirkstärke 15)"]],
   "text":["Eine dicke, fast zwei Meter lange Viper, zusammengerollt in einem Nest in der Felswand. Sie hat ein schwarzes Muster, leuchtend gelbe Augen und Giftzähne, von denen das Gift tropft. Regeltechnisch wird die Schlange als Tier behandelt (Regelbuch S. 99), nicht als Monster."]},
  "kultisten":{"typ":"nsc","t":"Dämonenkultisten","p":76,"img":"abenteuer/totaugen-kultisten","tp":12,
   "werte":[["Bewegung","10"],["Schadensbonus","–"],["TP","12"]],
   "zl":[["Rüstung","–"],["Fertigkeiten","Wahrnehmung 10, Ausweichen 10"],["Waffe","Krummsäbel (Fertigkeitswert 14, Schaden 2W6)"]],
   "text":["Um sich vor dem Basilisken zu schützen, haben sich die Kultisten die Augen verbunden. Folglich handeln sie wie in völliger Dunkelheit (Regelbuch S. 52) und müssen vor jedem Angriff auf §Wahrnehmung§ würfeln. Sie haben bereits ein Mitglied ihrer Gruppe verloren und haben große Angst, wagen aber nicht zu fliehen – ein Scheitern ihrer Aufgabe würde den Zorn Azrahel Koths nach sich ziehen, den sie noch mehr fürchten als die Bestie. Sie überlegen nun, was sie als Nächstes tun. Sie wissen, dass sie es mit einem tödlichen Basilisken zu tun haben, und verraten dies den Spielercharakteren womöglich, wenn man sie bedrängt. Sie tragen alle schwarze Roben."]},
  "gunhill":{"typ":"nsc","t":"Gunhill","p":77,"img":"abenteuer/totaugen-gunhill","tp":12,
   "werte":[["Bewegung","12"],["Schadensbonus GEW","+W4"],["TP","12"]],
   "zl":[["Rüstung","Leder (1)"],["Fertigkeiten","Wahrnehmung 12, Ausweichen 14"],["Waffen","Kurzschwert (Fertigkeitswert 12, Schaden W10), Kurzbogen (Fertigkeitswert 13, Schaden W10)"]],
   "text":["Hildis Nichte ist in der Hoffnung hierhergekommen, das Ungeheuer aufzuhalten. Ihr langes Haar ist von übelriechendem Schmutz durchzogen, und ihr Körper ist zerkratzt. Sie ist stur, dürstet nach Rache und wird alles tun, um den Basilisken zu töten. Sie trägt eine Augenbinde und flüstert beim Sprechen.","Gunhill hat den Basilisken gesehen und kann ihn beschreiben, wenn die Spielercharaktere ihr Vertrauen gewinnen. Sie trägt die Augenbinde, weil sie gesehen hat, wie der Kultist in Raum 2 tot umfiel, nachdem er der Kreatur in die Augen gestarrt hatte. Sie hat auch gesehen, wie ein anderer Kultist die Bestie mit einem Huhn verscheuchte. Nach dem Gespräch mit Gunhill können die Spielercharaktere mit einem §Tierkunde§-Wurf darauf kommen, dass die Bestie ein Basilisk ist. Gunhill kann ihnen auch den verborgenen Durchgang durch die Felsen zeigen."]},
  "basilisk":{"typ":"monster","t":"Der Basilisk","p":78,"tp":48,
   "werte":[["Grimmigkeit","Anzahl SC − 1 (min. 1)"],["Größe","Groß"],["Bewegung","16"],["Rüstung","6"],["TP","48"]],
   "text":["Der Basilisk in der Totaugenhöhle ist ungewöhnlich groß – eine furchterregende Bestie mit Reptilienkörper, Hahnenkopf und riesigen, mörderischen Klauen.","**Angst vor Hühnern:** Basilisken fürchten sich zu Tode vor Hühnern. Ihre Grimmigkeit sinkt um eins (bis auf mindestens 1), wenn ein solcher Vogel innerhalb von 10 Metern zu sehen ist, und sie wagen es nicht, eine Person anzugreifen, die eine Henne oder einen Hahn trägt. Ein Spielercharakter kann sich mit einem gelungenen §Tierkunde§-Wurf an diese Schwäche erinnern."],
   "angriffe":{"h":"Monsterangriffe","w":"W6","rows":[
    "**Hiebangriff!** Der Basilisk schlägt mit seinen schrecklichen Klauen nach zwei Spielercharakteren. Jeder Angriff verursacht 2W8 Hiebschaden.",
    "**Picken!** Die Bestie stößt ihren abscheulichen Vogelkopf vor und pickt mit dem messerscharfen Schnabel nach einem Spielercharakter. Der Angriff verursacht 3W8 Stichschaden.",
    "**Kikeriki!** Der Basilisk stößt ein misstönendes Krähen aus, das die Spielercharaktere durchdringt und ihnen die Ohren bluten lässt. Alle innerhalb von 10 Metern müssen einen KON-Wurf machen (keine Aktion). Bei einem Fehlschlag fällt das Opfer zu Boden, wird Benommen und verliert seinen nächsten Zug.",
    "**Peitschenangriff!** Der Basilisk benutzt seinen schlangenartigen Schwanz in einem weiten Hieb als Peitsche, der alle Abenteurer innerhalb von 4 Metern trifft. Jeder Angriff verursacht W10 Wuchtschaden, und jeder Getroffene wird zu Boden geworfen.",
    "**Giftwolke!** Der Basilisk speit eine grünlich-gelbe Wolke aus, die nach Gift und ätzender Magensäure stinkt. Alle Spielercharaktere innerhalb von 10 Metern sind von einem tödlichen Gift mit Wirkstärke 15 betroffen.",
    "**Versteinernder Blick!** Ein blaues Leuchten flammt in den Augen des Basilisken auf, während er seinen bösartigen Vogelkopf dem Spielercharakter zuwendet, der gerade die meisten TP hat. Kann das Opfer sehen (ist also weder blind noch hat es die Augen verbunden), muss es einen WIL-Wurf machen (keine Aktion). Bei einem Fehlschlag verwandelt sich sein Körper in Stein, und das Opfer kann sich nicht mehr bewegen und überhaupt keine Aktionen mehr ausführen, kann aber auch keinen Schaden nehmen. Ein versteinertes Opfer stirbt nach 2W6 Runden, doch die Versteinerung kann mit einem gelungenen WIL-Wurf rückgängig gemacht werden. Solange es noch lebt, darf das Opfer einmal pro Zug würfeln. Auch der Zauber §Bannen§ (Kraftstufe 1) kann die Versteinerung aufheben, aber nur, solange das Opfer noch lebt."]}}
 },
 kaesten:{
  "verbunden":{"k":"Mit verbundenen Augen","p":78,"b":["Verbinden sich die Spielercharaktere die Augen (wie Gunhill und die Kultisten), sind sie gegen den Blick des Basilisken (Monsterangriff 6) immun, handeln aber auch wie in völliger Dunkelheit (Regelbuch S. 52)."]}
 },
 tabellen:[
  {"id":"ereig","h":"Zufallsereignisse","p":75,"strip":"Zufallsereignisse · W8","einl":"Für jedes volle Viertel, das die Spielercharaktere in bestimmten Räumen verbringen – etwa um nach etwas zu suchen oder eine Kurze Rast einzulegen –, könnt ihr auf der folgenden Tabelle würfeln oder ein passendes Ereignis auswählen. Die Raumbeschreibungen geben an, wo Zufallsereignisse eintreten können.","cols":["W8","Ereignis"],"rows":[
   ["1–4","**Nichts passiert.**"],
   ["5","**Steinschlag.** Der Basilisk bewegt sich durch einen der vielen Schächte der Höhle, und die Spielercharaktere sehen irgendwo hoch oben etwas Schuppiges entlangkriechen. Felsbrocken stürzen herab, und jeder im Raum muss einen §Ausweichen§-Wurf schaffen oder erleidet W4 Wuchtschaden."],
   ["6","**Verirrte Kultisten.** Zwei Kultisten sind auf der Suche nach ihren Gefährten in die Höhle gewandert und haben sich verirrt. Sie erschrecken, als sie die Spielercharaktere sehen, und greifen sofort an. Werte siehe S. 76. Diese Kultisten tragen keine Augenbinden."],
   ["7","**Übler Atem.** Der Basilisk zieht in einem Schacht an den Spielercharakteren vorbei, und sie riechen seinen üblen Atem. Die Spielercharaktere müssen einen KON-Wurf machen und werden bei einem Fehlschlag Benommen."],
   ["8","**Vision.** Ein Spielercharakter hat das Gefühl, beobachtet zu werden, und sieht vor seinem inneren Auge zwei starrende, eisblaue Augen, die ihn in Angst versetzen. Das Opfer muss einen WIL-Wurf machen, um der Furcht zu widerstehen."]
  ]}
 ]
};
