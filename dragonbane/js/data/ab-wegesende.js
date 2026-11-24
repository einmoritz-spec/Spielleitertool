/* Gasthaus Wegesende (Abenteuerband S. 95–101) – deutsche Fassung. §…§ = Fertigkeit. Modell: plan/dragonbane/ABENTEUER_PLAN.md §2 */
window.DB_AB = window.DB_AB || {};
DB_AB.wegesende = {
 id:"wegesende", t:"Gasthaus Wegesende", band:"dk", buch:"db_adv", p:95, img:"abenteuer/wegesende-titel", kurz:"10 Orte",
 vl:"Gerüchte erzählen vom Gasthaus Wegesende, ein Stück östlich von Außenposten. Mehrere seiner Gäste sollen spurlos verschwunden sein, darunter ein kleines Kind und zuletzt eine Schäferin namens Antelia. Ihre Familie ist außer sich vor Sorge.",
 lage:[
  {"h":"Die Lage","p":95},
  "Verantwortlich für die Verschwundenen ist Stare, eine alte Wahrsagerin aus den Spuksümpfen, die fälschlich beschuldigt wurde, ein Kind entführt zu haben. Gemeinsam mit ihren drei Hunden wurde sie von den Eltern des Kindes und der Wirtin in einen Wurzelkeller unter einem Gasthaus gesperrt – in der Hoffnung, Stare würde irgendwann gestehen. Stattdessen starb sie vor Wut und Hunger.",
  "Aus Rache hat Stare das Gasthaus von jenseits des Schleiers aus verflucht, hält seine Gäste gefangen und verwandelt das Gebäude nachts in eine alptraumhafte Version seiner selbst. Die meisten Opfer ahnen nicht, dass sie Gefangene sind.",
  "Die Spielercharaktere können zufällig im Gasthaus Wegesende eintreffen oder weil sie nach der Schäferin Antelia suchen (siehe die Gerüchte in Außenposten, S. 17).",
  "Das Gebäude, dort gelegen, wo die Landstraße endet und die tückischen Pfade der Spuksümpfe beginnen, ist in Nebel gehüllt. Die schlichten Laternen neben der Tür glühen einladend durch den Dunst.",
  "Anders als in den übrigen Abenteuern dieses Bandes ist hier kein Teil der Drachenkaiser-Statuette zu finden."
 ],
 bereiche:[
  {id:"gasthaus", t:"Das Gasthaus", karte:{img:"abenteuer/wegesende-karte-gasthaus", p:98}, orte:[
   {n:"1", t:"Speisesaal", p:96, pin:[49.0,58.2], wesen:["helemi","antelia","stig"],
    vl:"Etwa zwanzig Gäste plaudern, essen und spielen. Hinter dem Tresen steht eine gut gelaunte Halblingfrau. Die Stimmung und der Duft des Fleisches, das im Kamin brät, lassen einen gar nicht anders, als sich willkommen zu fühlen.",
    st:[
     {k:"Die Wirtin",x:"Die Halblingfrau Helemi führt hinter dem Tresen mit einem Lächeln das Regiment. Sie ist hilfsbereit, weicht Fragen nach vermissten Gästen aber aus."},
     {k:"Essen und Trinken",x:"sind gut und günstig – halb so teuer wie im Regelbuch angegeben. Helemi ist besonders stolz auf das Hausbier und den köstlichen Schweinebraten. Gern lässt sie die Spielercharaktere probieren."},
     {k:"Die Gäste",x:"sind Menschen, Halblinge und gelegentlich ein Zwerg. Einige Halblinge laden die Spielercharaktere zu einer Runde Würfelspiel ein (Regelbuch S. 76). Die meisten Gäste sind fröhlich und gesprächig, antworten aber ausweichend auf Fragen nach Vermissten. Werden Werte benötigt, nutze die Tabelle auf S. 105 im Regelbuch."},
     {k:"Antelia",x:"Einer der Gäste ist Antelia, die vermisste Schäferin. Die Spielercharaktere können das erfahren, wenn sie Helemi oder die Gäste fragen. Sie lädt die Spielercharaktere ein, sich zu setzen, und wischt alle Fragen nach ihrem Verschwinden beiseite. *„Vermisst? Ach nein, ich bin nur etwas tiefer in den Großwald gegangen als sonst. Meine Familie macht sich viel zu viele Sorgen, das ist alles.“*"},
     {k:"Grunn und Edda",x:"Nur zwei der Gäste, ein junges Paar, sehen unglücklich aus. Sie sitzen allein an einem Tisch und trinken schweigend. Sie nennen ihre Namen, haben aber sonst keine Antworten auf die Fragen der Spielercharaktere."},
     {k:"Stig Stonehilt",x:"Einer der Gäste, ein beeindruckend aussehender Zwerg, bittet darum, sich zu den Spielercharakteren zu setzen. Er erzählt ihnen vom Bergbau im Kummergebirge und von hässlichen Monstern, die er besiegt hat. Stig ahnt den Fluch teilweise, kann aber nicht darüber sprechen. Er sucht jetzt Kontakt, um später in der Nacht mit den Spielercharakteren zu reden (siehe Ort 2)."},
     {k:"Der Fluch",x:"Den Spielercharakteren fällt plötzlich auf, dass etwas nicht stimmt. Die Wände und die Decke scheinen sich nach innen zusammenzuziehen. Gleich darauf wird alles schwarz. Stares Fluch schickt die Spielercharaktere in den Schlaf – sie können nichts dagegen tun, und dasselbe geschieht in dem Moment, in dem sie versuchen, das Gasthaus zu verlassen. Dann erwachen sie in Ort 2 in der verzerrten Version des Gasthauses."}
    ]}
  ]},
  {id:"verzerrt", t:"Das verzerrte Gasthaus", karte:{img:"abenteuer/wegesende-karte-verzerrt", p:98}, orte:[
   {n:"2", t:"Schlafsaal", p:96, pin:[31.9,86.1], wesen:["stig"],
    vl:"Ihr erwacht in getrennten Betten in einem länglichen Schlafsaal. Es ist kalt, als hätte jemand das Fenster geöffnet und die Nachtluft hereingelassen, während ihr schlieft. Nur das Mondlicht, das durch ein großes Fenster im Westen fällt, erhellt den Raum. An der Ostwand hängt ein großer Wandteppich, und im Norden befindet sich eine Holztür. In einem schwarzen Schaukelstuhl in einer der Ecken sitzt eine Person von kleinem Wuchs.",
    st:[
     {k:"Ausrüstung",x:"Die Ausrüstung jedes Spielercharakters liegt am Fußende seines Bettes."},
     {k:"Wandteppich",x:"An der Ostwand hängt ein großer Wandteppich mit einer alten Frau, die die Spielercharaktere beobachtet, wo immer sie sich im Raum aufhalten. Das ist Stare."},
     {k:"Fenster",x:"Durch das westliche Fenster sieht man krumme Bäume, die gegen Sturmböen ankämpfen. In der Ferne ragt ein hoher Berg auf, auf dessen Gipfel ein Feuer flackert. Ein Spielercharakter, dem ein Wurf auf §Mythen & Legenden§ gelingt, erkennt, dass die Aussicht falsch ist – in dieser Richtung gibt es keine Berge. Das Fenster lässt sich nicht öffnen oder zerbrechen, nicht einmal mit Magie."},
     {k:"Schaukelstuhl",x:"Die Person im Schaukelstuhl ist Stig Stonehilt, der fest schläft. Er kann geweckt werden, ist aber gelähmt und kann nicht aufstehen. Mit müder Stimme erklärt Stig, dass die Spielercharaktere wie er in einer Illusion gefangen sind, die von jemandem erschaffen wurde, den er *„die alte Hexe Stare“* nennt. Stare verstecke sich irgendwo in der Illusion, sagt Stig und bittet die Spielercharaktere, ihn zu befreien."},
     {k:"Norden",x:"Eine schwere, knarrende Eichentür. Eine einzelne Fackel erhellt eine lange Steintreppe, die hinunter zur Vorratskammer (Ort 3) führt. Die Spielercharaktere können die Fackel mitnehmen."}
    ]},
   {n:"3", t:"Vorratskammer", p:97, pin:[32.0,63.0], wesen:[],
    vl:"Die Luft in diesem überfüllten, fensterlosen Raum ist abgestanden. Auf einem Holztisch steht eine Werkzeugkiste, und auf dem staubigen Boden stehen mehrere Truhen, die meisten gewaltsam aufgebrochen. Die Ostwand ziert ein burgunderroter Vorhang mit schimmernden Goldmustern.",
    st:[
     {k:"Truhen",x:"Eine der Truhen enthält Wertsachen im Wert einer Schatzkarte."},
     {k:"Werkzeugkiste",x:"Die Kiste ist verschlossen; um sie zu öffnen, ist ein gelungener Wurf auf §Fingerfertigkeit§ nötig. Man kann die Kiste auch aufbrechen (25 TP, Rüstungswert 6), doch wer zuschlägt, wird von einem Dorn getroffen, der W6 stechenden Schaden verursacht."},
     {k:"Dolch",r:1,x:"*In der Werkzeugkiste liegt ein seltsamer, verzierter Dolch mit stark abgenutzter Spitze. Der Dolch verursacht gegen Stare 2W8 Schaden, wirkt aber gegen alle anderen ganz normal.*"},
     {k:"Zufallsereignis",x:"Würfle für jedes volle Viertel, das die Spielercharaktere hier verbringen, auf der Tabelle auf S. 95."},
     {k:"Norden",x:"Tür zum Chaotischen Mosaik (Ort 5)."},
     {k:"Süden",x:"Lange Steintreppe zum Schlafsaal (Ort 2)."},
     {k:"Osten",x:"Hinter dem Vorhang liegt ein Erdtunnel (Ort 4)."}
    ]},
   {n:"4", t:"Erdtunnel", p:97, pin:[45.7,54.4], wesen:["knochenschlurfer"],
    vl:"Dieser Erdtunnel ist erfüllt von abgestandener Dunkelheit, und ihn zu durchqueren fühlt sich an, als wäre man in einem Sarg gefangen. Eure Schritte quatschen durch einen faulig schwarzen Schlamm aus nasser Erde. Weiter vorn hört ihr ein schlurfendes Geräusch.",
    st:[
     {k:"Spinnweben",r:1,x:"*Auf halber Länge des Tunnels liegen die Überreste einer Riesenspinne auf dem Boden. Ihr Netz ist noch intakt und von Wand zu Wand gesponnen. Der Spielercharakter, der als Erster geht, muss einen Wurf auf* §Wahrnehmung§ *schaffen (mit Nachteil, sofern er keine Lichtquelle trägt), um nicht im Netz hängen zu bleiben. Das lockt so viele Knochenschlurfer an, wie es Spielercharaktere gibt. Wer im Netz hängt, kann sich nicht bewegen oder Aktionen ausführen, die Körperbewegung erfordern. Sich zu befreien erfordert einen gelungenen STÄ-Wurf mit Nachteil (Aktion). Andere können helfen.*"},
     {k:"Zufallsereignis",x:"Würfle für jedes volle Viertel, das die Spielercharaktere hier verbringen, auf der Tabelle auf S. 95."},
     {k:"Norden",x:"Verschlossene Tür, die sich knacken oder aufbrechen lässt (10 TP, Rüstungswert 5) und zum Spielzimmer (Ort 6) führt."},
     {k:"Nordwesten",x:"Seitentür zum Chaotischen Mosaik (Ort 5)."},
     {k:"Südwesten",x:"Hinter einem Vorhang liegt die Vorratskammer (Ort 3)."}
    ]},
   {n:"5", t:"Chaotisches Mosaik", p:97, pin:[27.8,51.4], wesen:[],
    vl:"Das Mosaik auf dem Boden dieses Raums bildet ein chaotisches Muster aus verschiedenen Farben. Die Decke ist mehrere Meter hoch, mit schmalen Fenstern, die ihr nicht erreichen könnt. Von der Decke hängt eine große Öllampe, die den Raum erhellt.",
    st:[
     {k:"Drei Statuen",x:"Entlang der Westwand stehen drei Statuen trauernder Frauen. Eine betet, eine verhüllt ihr Gesicht, und die dritte zeigt auf den Boden, auf die Bodenfalle."},
     {k:"Falle",r:1,x:"*Im Raum befindet sich eine versteckte Falltür mit einem fünf Meter tiefen Sturz. Ein Spielercharakter, der aktiv nach Fallen sucht, kann sie mit einem gelungenen Wurf auf* §Entdecken§ *bemerken. Zwischen den Knochen am Grund der Falle liegt ein goldener Ring. Der Ring sieht edel aus und schimmert schwach – sein Träger wird ihn in der Ritualkammer (Ort 9) gebrauchen können.*"},
     {k:"Zufallsereignis",x:"Würfle für jedes volle Viertel, das die Spielercharaktere hier verbringen, auf der Tabelle auf S. 95."},
     {k:"Norden",x:"Offener Torbogen zum Unterirdischen Teich (Ort 7)."},
     {k:"Süden",x:"Tür zur Vorratskammer (Ort 3)."},
     {k:"Osten",x:"Tür zum Erdtunnel (Ort 4)."}
    ]},
   {n:"6", t:"Spielzimmer", p:99, pin:[44.6,45.6], wesen:[],
    vl:"In der Mitte des Raums steht eine Wiege. Ein paar Holzspielzeuge liegen verstreut auf dem Boden, als hätte ein Kind sie fallen lassen, als es des Spielens müde wurde. An der Wand hängt ein Gemälde. Von der verglimmenden Glut eines Kamins geht Wärme aus.",
    st:[
     {k:"Das Gemälde",x:"zeigt einen Mann und eine Frau mit einem Kleinkind, einem kleinen Jungen, vor einer heruntergekommenen Hütte, hinter der sich ein wilder Wald erstreckt. Fragen die Spieler, ob sie jemanden auf dem Gemälde erkennen, merken sie, dass Mann und Frau das unglückliche Paar im Speisesaal sind, falls sie ihm begegnet sind (Grunn und Edda, siehe Ort 1). Du kannst sie auch einen passiven Wurf auf §Wahrnehmung§ machen lassen, um das zu erkennen."},
     {k:"Puppe",x:"In der Wiege liegt eine Porzellanpuppe, die dem Kind auf dem Gemälde sehr ähnlich sieht. Nehmen die Spielercharaktere die Puppe mit, erwacht sie in der Ritualkammer (Ort 9) zum Leben. Unter der Puppe liegt eine Knochenflöte (Kleinkram). Die Flöte spielt melancholische Weisen, sobald ihr Träger sich einer untoten Kreatur auf 10 Meter nähert."},
     {k:"Zufallsereignis",x:"Würfle für jedes volle Viertel, das die Spielercharaktere hier verbringen, auf der Tabelle auf S. 95."},
     {k:"Süden",x:"Tür mit einem Schlüssel im Schloss, die zum unterirdischen Tunnel (Ort 4) führt."},
     {k:"Westen",x:"Tür zum Unterirdischen Teich (Ort 7)."}
    ]},
   {n:"7", t:"Unterirdischer Teich", p:99, pin:[27.8,42.8], wesen:[],
    vl:"Aus einem Teich sind wunderschöne Plätschergeräusche zu hören. Die Tropfen, die auf die Wasseroberfläche fallen, klingen wie ein trauriges Wesen, das die Harfe spielt. Ein Detail stört die Harmonie – das gelegentliche Quaken, das von den Wänden widerhallt.",
    st:[
     {k:"Teich",x:"Wasser, das aus einem Loch in der Wand strömt, bildet einen kleinen Wasserfall hinab in einen Teich voller Seerosenblätter. Es gibt auch mehrere große Frösche."},
     {k:"Kiste",r:1,x:"*Spielercharaktere, die den Teich untersuchen, bemerken eine versiegelte Kiste etwa vier Meter unter der Oberfläche. Die Kiste enthält Wertsachen im Wert von zwei Schatzkarten.*"},
     {k:"Frösche",x:"Die Frösche sind völlig harmlos, stellen sich aber hartnäckig in den Weg, wenn jemand ins Wasser watet. Es ist ein gelungener Wurf auf §Ausweichen§ nötig, um nicht Wütend zu werden."},
     {k:"Zufallsereignis",x:"Würfle für jedes volle Viertel, das die Spielercharaktere hier verbringen, auf der Tabelle auf S. 95."},
     {k:"Norden",x:"Knarrende Tür zur Galerie (Ort 8)."},
     {k:"Süden",x:"Offener Torbogen zum Chaotischen Mosaik (Ort 5)."},
     {k:"Osten",x:"Tür zum Spielzimmer (Ort 6)."}
    ]},
   {n:"8", t:"Galerie", p:99, pin:[34.1,34.0], wesen:[],
    vl:"Diese große Halle strahlt Ruhe aus. Sie ist leer bis auf die acht Gemälde, die an den Wänden hängen. Mondlicht strömt durch eine Kuppel in der Decke herab.",
    st:[
     {k:"Glaskuppel",x:"Durch die Glaskuppel in der Decke sieht man einen wolkenlosen Nachthimmel, der die ganze Galerie in Mond- und Sternenlicht taucht."},
     {k:"Gemälde",x:"Die Gemälde sind sparsam in Ocker, Grün, Dunkelrot und Schwarz gemalt. Sie zeigen Tempel aus der Zeit des Drachenreichs, was die Spielercharaktere mit einem Wurf auf §Mythen & Legenden§ erkennen können. Jedes Gemälde zählt als normaler Gegenstand und ist 50 Silbermünzen wert. Ein Spielercharakter, der die Gemälde untersucht und einen Wurf auf §Entdecken§ schafft, bemerkt, dass eines der Gemälde im Hintergrund eine Familie zeigt, die in einem großen Außenofen Brot backt. Es sind dieselben Personen, die auf dem Gemälde im Spielzimmer (Ort 6) abgebildet sind."},
     {k:"Gasfalle",r:1,x:"*Werden vier oder mehr Gemälde entfernt, strömt aus winzigen Löchern im Boden tödliches Gas (Wirkstärke 9).*"},
     {k:"Besinnung",x:"Die Spielercharaktere werden von Frieden erfüllt, wenn sie einfach die Kunst genießen. Sie können hier eine zusätzliche Kurze Rast einlegen, zusätzlich zu der, die sie normalerweise je Tagesabschnitt bekommen."},
     {k:"Norden",x:"Kurze Steintreppe hinauf zu einem geschwärzten Portal und zur Ritualkammer (Ort 9). Ein Spielercharakter, der durch das Portal gegangen ist, kann nicht auf demselben Weg zurück."},
     {k:"Süden",x:"Knarrende Tür zum Unterirdischen Teich (Ort 7)."}
    ]},
   {n:"9", t:"Ritualkammer", p:100, pin:[40.5,19.6], wesen:["stare"],
    vl:"In der Dunkelheit rasselt eine Kette. Ihr seht ein Paar glühender Augen und das kränkliche Blinken verfaulender Zähne. Ein pulsierender Schwefelgeruch dringt euch in die Nase, während sich die Gestalt nähert und schließlich mit einem eisigen Kreischen angreift.",
    st:[
     {k:"Dunkelheit",x:"Die Kammer ist stockfinster, und in Stares Gegenwart kann kein Feuer brennen. Fackeln und Laternen erlöschen. Siehe die Regeln zur Dunkelheit auf S. 52 im Regelbuch – vor jedem Angriff muss ein Spielercharakter einen Wurf auf §Wahrnehmung§ schaffen (keine Aktion)."},
     {k:"Der Ring",x:"Stare greift die Spielercharaktere sofort an. Eine Person, die den Ring aus Ort 5 trägt, nimmt sie jedoch nicht ins Visier."},
     {k:"Die Puppe",x:"Haben die Spielercharaktere die Puppe aus dem Spielzimmer (Ort 6) mitgebracht, beginnt sie sich langsam zu bewegen. Sie sagt nichts, blickt aber unentwegt die Hexe an. Die Puppe verursacht keinen Schaden, doch ihr Anblick erregt Stare und erhöht ihre Grimmigkeit um eins. Die Puppe zu zerstören gilt als Aktion."},
     {k:"Stares Kreischen",x:"Im Kampf stößt Stare wilde Schreie aus, die den Spielercharakteren Hinweise geben können, wie sie diese Bedrohung überwinden, etwa *„Befreit mich!“*, *„Meine Hunde, meine Hunde!“*, *„Ich war es nicht, die den Jungen genommen hat!“* und *„Helemi hat mich getötet!“*."},
     {k:"Die Kette",x:"Stare ist an die Wand gekettet. Die Spielercharaktere können sie befreien, indem sie die Kette zerbrechen (20 TP, Rüstungswert 9), doch Stare greift weiter an, bis ihnen das gelingt. Sie können die Kette auch nutzen, um einen Vorteil auf ihre Würfe auf §Wahrnehmung§ zu erhalten, mit denen sie vor jedem Angriff Stare in der Dunkelheit finden, müssen das aber selbst herausfinden."},
     {k:"Wird Stare befreit",x:"Zerbrechen die Spielercharaktere die Kette, schnappt sich Stare die Puppe – notfalls mit Gewalt – und verschwindet durch das geschwärzte Portal. Die Spielercharaktere können ihr nicht folgen. Lichtquellen lassen sich im Raum danach wieder entzünden."},
     {k:"Stirbt Stare",x:"Wird Stare getötet, ist der Fluch aufgehoben, doch die Spielercharaktere müssen immer noch über den Friedhof (Ort 10) den Weg aus der Illusion finden. Ist die Puppe lebendig geworden, kehrt sie nun in ihren ursprünglichen leblosen Zustand zurück."},
     {k:"Süden",x:"Das geschwärzte Portal können die Spielercharaktere nicht mehr betreten, da es zu Stein geworden ist."},
     {k:"Osten",x:"Eine verklemmte, eisenbeschlagene Eichentür führt hinaus zum Friedhof (Ort 10)."}
    ]},
   {n:"10", t:"Friedhof", p:101, pin:[64.1,25.2], wesen:["hexenhund","antelia"],
    vl:"Im Nebel und in der Dunkelheit seht ihr die Grabsteine von Menschen und Tieren, die hier beigesetzt wurden. Drei der Gräber sind offen. Der Friedhof ist von einer niedrigen Mauer umgeben. Kälte und Stille herrschen, als wäre der Ort von allem Leben bereinigt und vergessen worden. Ein Windstoß raschelt plötzlich in den alten Eichen und Kiefern.",
    st:[
     {k:"Steinmauer",x:"Jenseits der Mauer ist nichts als ein dunkler, bodenloser Abgrund. Der einzige Weg hinaus führt durch das Tor."},
     {k:"Stares Fluch",x:"Der Friedhof ist die letzte Erscheinungsform des Fluchs, der für immer aufgehoben wird, wenn die Spielercharaktere durch das Tor gehen."},
     {k:"Knochen",x:"Aus der feuchten Erde ragt ein angespitzter Oberschenkelknochen. Er lässt sich sowohl als Messer als auch als leichte Keule verwenden."},
     {k:"Offene Gräber",x:"In der Nähe der offenen Gräber, die drei Meter tief sind, liegen eine Schaufel und große Erdhaufen. – Im ersten Grab liegt ein gefesselter Zwerg. Einmal befreit, stürmt er in wilder Panik sofort durch das Tor hinaus. – Im nächsten Grab liegt die vermisste Schäferin Antelia. Dankbar, aber verängstigt begleitet sie die Gruppe aus dem Friedhof. – Aus dem dritten Grab steigen Hexenhunde, so viele wie Spielercharaktere, und greifen an. Jede Runde erscheint ein Hexenhund. Man kann sie töten oder aufhalten, indem man das Grab zuschaufelt. Dafür sind insgesamt drei Würfe gegen STÄ nötig (jeder Wurf ist eine Aktion). Die Schaufel gibt einen Vorteil auf den Wurf."},
     {k:"Tor",r:1,x:"*Erst nachdem sie an den drei offenen Gräbern vorbeigekommen sind, bemerken die Spielercharaktere ein Stück weiter ein Tor, das hinter Büschen verborgen ist. Gehen sie hindurch, finden sie sich am Ende einer Straße wieder. In einiger Entfernung sehen sie das Gasthaus in seiner normalen Gestalt. Ein paar Vögel kreischen. Die Sonne ist kurz davor aufzugehen.*"}
    ]}
  ]}
 ],
 figuren:{
  helemi:{"typ":"nsc","t":"Helemi","p":97,"img":"abenteuer/wegesende-helemi","text":["Die Halblingwirtin des Gasthauses."]},
  antelia:{"typ":"nsc","t":"Antelia","p":97,"img":"abenteuer/wegesende-antelia","text":["Die vermisste Schäferin."]},
  stig:{"typ":"nsc","t":"Stig Stonehilt","p":97,"img":"abenteuer/wegesende-stig","text":["Ein beeindruckend aussehender Zwerg."]},
  knochenschlurfer:{"typ":"monster","t":"Knochenschlurfer","p":96,"tp":12,"werte":[["Grimmigkeit","1"],["Größe","Normal"],["Bewegung","10"],["Rüstung","–"],["TP","12"]],"zl":[["Widerstand","Knochenschlurfer erleiden nur halben Schaden durch stechende Waffen."]],"text":["Ein beschädigtes Skelett, das auf gebrochenen Knochen herumschlurft. Diese untote Monstrosität gedeiht in feuchten Ruinen und kann lautlos Wände hinaufklettern und von Decken hängen, wo sie ihren Opfern auflauert."],"angriffe":{"h":"Monsterangriffe","w":"W6","rows":[["1–3", "**Knochenfaust!** Inmitten des Knochengewirrs trifft der Knochenschlurfer sein Opfer mit einem wahren Prachtschlag, der W8 Wuchtschaden verursacht."], ["4–5", "**Biss!** Rissige gelbe Zähne bohren sich in das Bein eines Opfers. Der Biss verursacht 2W6 hauenden Schaden."], ["6", "**Kehliges Gebrüll!** Ein furchtbarer Schrei, der Böden erzittern und Gedanken schaudern lässt. Alle Spielercharaktere im Umkreis von 10 Metern erleiden einen Furchtangriff."]]}},
  stare:{"typ":"monster","t":"Stare","p":100,"img":"abenteuer/wegesende-stare","tp":25,"werte":[["Grimmigkeit","Anzahl SC −1 (min. 1)"],["Größe","Normal"],["Bewegung","14"],["Rüstung","–"],["TP","25"]],"zl":[["Die Puppe","Wurde die Puppe aus dem Spielzimmer (Ort 6) mitgebracht, steigt Stares Grimmigkeit um eins."],["Immunität","Jedes Feuer erlischt in dem Raum, in dem Stare festgehalten wird."]],"text":["Die Spielercharaktere sehen nur Stares tief liegende Augen und das, was man großzügig als Zähne bezeichnen könnte. Sie ist an die Wand gekettet, kann aber jeden Teil der Kammer erreichen."],"angriffe":{"h":"Monsterangriffe","w":"W6","rows":["**Zehenbrechender Tritt!** Stares Tritt ist überraschend kräftig und verursacht W8 Wuchtschaden.","**Blutunterlaufener Blick!** Stare kommt nahe heran, und ihre schrecklichen Augen zwingen das Opfer zu einem WIL-Wurf mit Nachteil, um der Furcht zu widerstehen.","**Kratzende Klauen!** Stare kratzt ein Opfer mit ihren knochenharten Fingernägeln und verursacht 2W6 hauenden Schaden.","**Klagelied!** Stare hat die Zeit in der Kammer damit verbracht, eine furchtbar traurige und schiefe Melodie zu ersinnen, die in den Ohren wirklich schmerzt. Während sie singt, müssen alle Spielercharaktere einen WIL-Wurf machen, um der Furcht zu widerstehen.","**Steine und Kies!** Die Hexe greift eine Handvoll zerbröckelten Mörtels und wirft ihn auf einen Spielercharakter innerhalb von 10 Metern, der in der Runde noch nicht gehandelt hat. Das Opfer verliert seinen nächsten Zug. Der Angriff kann mit einem Schild pariert werden.","**Illusorischer Abgrund!** Alle Spielercharaktere im Umkreis von 10 Metern von Stare glauben, am Rand einer hohen Klippe zu stehen, und sehen unten die zerschmetterten Leichen alter Menschen. Die Spielercharaktere müssen einen WIL-Wurf machen, um die Illusion zu durchschauen. Wer scheitert, stürzt ungewöhnlich hart zu Boden, erleidet W6 Wuchtschaden und verliert seinen nächsten Zug, falls er in der Runde noch nicht gehandelt hat. Dem Angriff kann nicht ausgewichen werden."]}},
  hexenhund:{"typ":"monster","t":"Hexenhund","p":101,"img":"abenteuer/wegesende-hexenhund","tp":14,"werte":[["Grimmigkeit","2"],["Größe","Klein"],["Bewegung","18"],["Rüstung","2"],["TP","14"]],"text":["Diese schäumenden Bestien mit gelben, blutunterlaufenen Augen hören nicht auf, bis ihr Opfer zerfetzt ist. Es sind Stares alte Hunde, ohne die sie auch nach ihrem Tod nicht sein konnte."],"angriffe":{"h":"Monsterangriffe","w":"W6","rows":[["1–2", "**Biss!** Der Hund gräbt seine Zähne in einen Arm oder ein Bein und verursacht 2W10 stechenden Schaden."], ["3–4", "**Klauen!** Mit Klauen, scharf wie Messer, zerfetzt der Hund die Haut des Opfers und verursacht 2W8 stechenden Schaden. Dem Angriff kann nicht ausgewichen werden."], ["5", "**Stoß!** Der Hund springt plötzlich vor. Das Opfer erleidet keinen Schaden, fällt aber zu Boden und lässt seine Waffe fallen."], ["6", "**Rasender Ansturm!** Der Hund führt gegen zwei verschiedene Spielercharaktere sowohl einen Biss- als auch einen Klauenangriff aus. In seiner Raserei verliert die Bestie jedoch ihre nächste Aktion."]]}}
 },
 tabellen:[
  {"id":"ereig","h":"Zufallsereignisse","strip":"Zufallsereignisse · W6","p":95,"einl":"Für jedes volle Viertel, das die Spielercharaktere an bestimmten Orten verbringen – etwa um nach etwas zu suchen oder eine Kurze Rast einzulegen –, kannst du auf der folgenden Tabelle mit dem W6 würfeln oder ein passendes Ereignis auswählen. Die Ortsbeschreibungen geben an, wo Zufallsereignisse auftreten können.","cols":["W6","Ereignis"],"rows":[["1–3","**Nichts passiert.**"],["4","**Knochenschlurfer.** Ein Knochenschlurfer (S. 96) fällt von der Decke und bewegt sich schnell auf die Spielercharaktere zu."],["5","**Bebender Boden.** Der Boden beginnt plötzlich zu beben und reißt auf. Aus den Rissen steigt ein fauliger Gestank auf, und alle Spielercharaktere müssen einen Wurf gegen KON machen, um nicht Kränkelnd zu werden."],["6","**Dichte Stille.** Eine dichte Stille legt sich über den Raum. Der Raum entzieht den Spielercharakteren die Kraft und macht sie hungrig (Regelbuch S. 54)."]]}
 ],
 handouts:[{t:"Das Gemälde im Spielzimmer",img:"abenteuer/wegesende-gemaelde",p:99}],
 schluss:[
  {"h":"Abschluss","p":101},
  {stein:{h:"Nachspiel",b:[
   "Ist der Fluch vom Gasthaus genommen, sind alle Gäste nun frei zu gehen. Spielercharaktere, die dorthin zurückkehren, treffen Stig Stonehilt zusammen mit dem jungen Zwerg aus dem Grab, der sich als sein Sohn entpuppt. Stig dankt den Charakteren aus tiefstem Herzen und gibt ihnen eine Belohnung im Wert von zwei Schatzkarten.",
   "Die Spielercharaktere können auch Helemi, Grunn und Edda zur Rede stellen. Sie brechen schnell zusammen und gestehen, dass sie Stare im Keller eingesperrt haben, weil sie glaubten, sie habe den Sohn des Paares, Kale, entführt. Sie schwören, nie gewollt zu haben, dass Stare stirbt. Wie die Spielercharaktere mit der Situation umgehen, bleibt ihnen überlassen."
  ]}}
 ]
};
