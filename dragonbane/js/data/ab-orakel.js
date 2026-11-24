/* Orakelhöhle (Abenteuerband S. 60–66) – deutsche Fassung. §…§ = Fertigkeit in Kapitälchen. Modell: plan/dragonbane/ABENTEUER_PLAN.md §2 */
window.DB_AB = window.DB_AB || {};
DB_AB.orakel = {
 id:"orakel", t:"Orakelhöhle", band:"dk", buch:"db_adv", p:60, img:"abenteuer/orakel-titel",
 lage:[
  "Ein Kind wurde aus Außenposten entführt, und die Spur führt zur Orakelhöhle, einem verschlungenen Höhlensystem unter dem Eisenwald. Nur wenige wagen sich dorthin, denn es heißt, in der Tiefe hause ein uraltes Grauen – ein Wesen aus einer Zeit vor der Ankunft der Menschen im Nebeltal, dem verborgenes Wissen nachgesagt wird. Die Leute nennen den Ort die Orakelhöhle.",
  {"h":"Die Lage","p":60},
  "Die Spielercharaktere können durch Gerüchte in Außenposten (S. 17 und die Abenteuerkarten) vom Verschwinden des kleinen Roric und von der Orakelhöhle erfahren. Der Ort ist ein möglicher Fundort für eines der vier Teile der Drachenstatuette (S. 8), das in diesem Fall im Bau der Riesenspinne (Raum 10) liegt.",
  "Roric ist ein kleiner Junge von sechs Jahren, der aus Außenposten entführt wurde. Er spielte vor dem Hof seiner Familie, als er von Banditen verschleppt und in den Eisenwald gebracht wurde.",
  "Dort wurden sie von Riesenspinnen überfallen, die die Banditen und den Jungen gefangen nahmen und zur alten Spinnenmutter Saak’shal brachten – derjenigen, die die Leute im Nebeltal das Orakel nennen.",
  "Wenn die Spielercharaktere bei der Orakelhöhle ankommen, sollten sie noch nicht herausgefunden haben, dass Riesenspinnen beteiligt sind. Idealerweise wird das erst klar, wenn sie unten in den Höhlen Spinnweben finden. Dies ist ein tiefes Höhlensystem, und die Spielercharaktere brauchen in jedem Raum eine Lichtquelle, wenn sie sich nicht durch völlige Finsternis tasten wollen."
 ],
 bereiche:[
  {id:"hoehle", t:"Die Höhle", karte:{img:"abenteuer/orakel-karte", p:62}, orte:[
   {n:"1", t:"Eingang", p:60, pin:[18.5,83.4], wesen:[],
    vl:"Ein dunkles Loch, breit genug, dass mehrere Personen nebeneinander gehen können, klafft senkrecht in die Erde. Die Kälte der Tiefe strömt aus der Öffnung.",
    st:[
     {"k":"Primitiver Altar","x":"Kleine Holzschalen mit Früchten und Stücken von Dörrfleisch sind auf einem Felsen direkt hinter dem Eingang aufgereiht – kleine Gaben der Einheimischen, um das Orakel zu besänftigen. Gelegentlich taucht die Spinnenmutter Saak’shal aus ihrem Bau auf und beantwortet im Gegenzug Fragen."},
     {"k":"Blutspuren","r":1,"x":"Untersuchen die Spielercharaktere den Boden oder wirft jemand in der Höhle auf §Entdecken§, finden sie im Tunnel mehrere Blutspuren – von Tieren wie von Humanoiden."},
     {"k":"Norden","x":"Eine natürliche Öffnung in der Felswand führt zum Höhlentunnel (Ort 2)."}
    ]},
   {n:"2", t:"Höhlentunnel", p:61, pin:[23.1,67.4], wesen:["orakel-verlassen"],
    vl:"Der Tunnel führt tief in den Fels und fällt steil ab. Es ist kalt, feucht und stockfinster. Die Höhlenwände triefen vor Nässe, und es riecht modrig nach Algen.",
    st:[
     {"k":"Zufallsereignis","x":"Würfelt für jedes volle Viertel, das die Spielercharaktere in einem Tunnel verbringen, mit dem W10 auf der Tabelle oben."},
     {"k":"Norden, Süden","x":"Enge Öffnungen zum schmalen Durchgang (Ort 3)."}
    ]},
   {n:"3", t:"Schmaler Durchgang", p:61, pin:[[42.0,77.5],[18.8,44.6],[72.5,44.8]], wesen:[],
    vl:"Dieser Durchgang ist so schmal, dass man kriechen und klettern muss, um hindurchzukommen. Der Tunnel scheint endlos in die Dunkelheit zu führen.",
    st:[
     {"k":"Enge Stelle","x":"Eine enge Stelle zu durchqueren erfordert einen §Akrobatik§-Wurf. Wer seine gesamte Ausrüstung zurücklässt (Waffen in den Händen nicht eingerechnet), erhält einen Vorteil auf den Wurf. Bei einem Fehlschlag bleibt der Charakter stecken und erleidet einen Zustand seiner Wahl. In jedem Viertel kann ein weiterer §Akrobatik§-Wurf gemacht werden. Andere können helfen."},
     {"k":"Zufallsereignis","x":"Würfelt für jedes volle Viertel, das die Spielercharaktere in einem schmalen Tunnel verbringen, mit dem W10 auf der Tabelle oben."}
    ]},
   {n:"4", t:"Die Gabelung", p:61, pin:[43.1,65.8], wesen:[],
    vl:"Der Tunnel öffnet sich in einen größeren Raum mit zwei Wegen voraus. Auf dem Boden liegt eine dunkle Gestalt.",
    st:[
     {"k":"Toter Ork","x":"Die Gestalt ist die Leiche eines abgeschlachteten Orks, der von der Brut Saak’shals verschlungen wurde. Seine Arme und Beine sind abgerissen, und an manchen Stellen sind die Knochen blank genagt."},
     {"k":"Das Zeichen Maladûks","r":1,"x":"Durchsuchen die Spielercharaktere die Leiche oder wirft jemand auf §Entdecken§, finden sie Wertsachen im Gegenwert einer Schatzkarte und Rüstungsfetzen mit dem Brandzeichen Maladûks (S. 8)."},
     {"k":"Zufallsereignis","x":"Würfelt für jedes volle Viertel, das die Spielercharaktere hier verbringen, mit dem W10 auf der Tabelle oben."},
     {"k":"Norden, Osten","x":"Tunnel zum unterirdischen Fluss (Ort 5). Ein Rauschen ist zu hören."},
     {"k":"Westen","x":"Öffnung zum Höhlentunnel (Ort 2)."}
    ]},
   {n:"5", t:"Unterirdischer Fluss", p:62, pin:[[42.3,56.1],[53.1,61.0]], wesen:[],
    vl:"Der Tunnel wird von reißendem schwarzem Wasser durchquert, das im Osten in der Dunkelheit verschwindet. Der Durchgang setzt sich auf der anderen Seite des Flusses fort, der etwa vier Meter breit ist.",
    st:[
     {"k":"Tückische Überquerung","x":"Die Strömung des Flusses ist stark und sein Wasser eiskalt (§Wildniskunde§-Wurf, um der Kälte zu widerstehen). Das Durchschwimmen erfordert einen §Schwimmen§-Wurf mit Nachteil. Wer scheitert, wird zum unterirdischen See (Ort 6) mitgerissen und muss einen weiteren §Schwimmen§-Wurf machen, um nicht zu ertrinken. Die Spielercharaktere können versuchen, über den Fluss zu springen (Regelbuch S. 43), Magie einzusetzen oder anders hinüberzukommen. Belohnt einfallsreiche Spieler."}
    ]},
   {n:"6", t:"Unterirdischer See", p:63, pin:[63.0,60.8], wesen:["orakel-aalungeheuer"],
    vl:"Ein unterirdischer See breitet sich aus wie ein kalter, schwarzer Spiegel. In der Dunkelheit ist schwer zu erkennen, wo die Höhle endet und der See beginnt.",
    st:[
     {"k":"Das Aalungeheuer","r":1,"x":"Unter der Oberfläche lauert etwas. Eine hungrige Seeschlange lebt im See und greift jeden an, der ins Wasser steigt. Wer den See eine Weile beobachtet, kann auf §Wahrnehmung§ würfeln, um etwas im Wasser zu bemerken."},
     {"k":"Glitschige Felsen","x":"Die Ränder des Sees sind dunkel und glitschig. Wer den See überqueren will, ohne nass zu werden, muss auf §Akrobatik§ würfeln (keine Aktion), um nicht hineinzufallen. Dasselbe gilt für Charaktere, die aus dem Wasser herauskommen wollen. Pro Runde ist ein Versuch erlaubt."}
    ]},
   {n:"7", t:"Die Reliquienhöhle", p:63, pin:[64.9,49.5], wesen:[],
    vl:"An den Wänden der Höhle liegen alte Schwerter und Rüstungen, bedeckt mit Staub und Schmutz. Hier und da sind vergilbte Knochen und leer starrende Schädel zu sehen.",
    st:[
     {"k":"Die Waffen","x":"Der Großteil der Ausrüstung ist nicht mehr zu retten, doch die Spielercharaktere finden ein Breitschwert, einen Flegel, ein Kettenhemd und einen offenen Helm, die noch brauchbar sind. Ein gelungener §Mythen & Legenden§-Wurf zeigt, dass es sich um uralte Relikte handelt, wahrscheinlich aus dem Drachenreich von Eledain."},
     {"k":"Schätze","r":1,"x":"Durchsuchen die Spielercharaktere die Höhle und gelingt ihnen ein §Entdecken§-Wurf, finden sie im Dreck auf dem Boden Wertsachen im Gegenwert einer Schatzkarte."},
     {"k":"Zufallsereignis","x":"Würfelt für jedes volle Viertel, das die Spielercharaktere hier verbringen, mit dem W10 auf der Tabelle auf S. 61."},
     {"k":"Osten","x":"Schmaler Durchgang (Ort 3), der direkt zur Feste (Ort 12) führt."},
     {"k":"Süden","x":"Tunnel zum unterirdischen See (Ort 6)."},
     {"k":"Westen","x":"Tunnel zum Bau der Spinnlinge (Ort 8)."}
    ]},
   {n:"8", t:"Der Bau der Spinnlinge", p:63, pin:[41.2,47.1], wesen:["orakel-spinnlinge"],
    vl:"Der Tunnel öffnet sich in eine enge Höhlenkammer, deren Wände, Boden und Decke von dichten weißen Netzen überzogen sind. Plötzlich bricht aus jeder Ritze des Raums ein Schwarm von Spinnen hervor – die kleinsten so groß wie eine Faust, die größten wie wohlgenährte Katzen.",
    st:[
     {"k":"Die Brut Saak’shals","x":"In diesem Bau leben die jüngsten Nachkommen der alten Spinnenmutter Saak’shal – ein Schwarm Spinnlinge (Werte siehe S. 64). Sie greifen sofort an."},
     {"k":"Relikte","r":1,"x":"Durchsuchen die Spielercharaktere die Höhle und gelingt ihnen ein §Entdecken§-Wurf, finden sie im Dreck auf dem Boden Wertsachen im Gegenwert einer Schatzkarte."},
     {"k":"Zufallsereignis","x":"Würfelt für jedes volle Viertel, das die Spielercharaktere hier verbringen, mit dem W10 auf der Tabelle auf S. 61."},
     {"k":"Norden","x":"Tunnel zum Bau des Nachwuchses (Ort 9)."},
     {"k":"Osten","x":"Tunnel zur Reliquienhöhle (Ort 7)."},
     {"k":"Süden","x":"Tunnel zum unterirdischen Fluss (Ort 5). Ein Rauschen ist zu hören."},
     {"k":"Westen","x":"Öffnung zu einem schmalen Durchgang (Ort 3)."}
    ]},
   {n:"9", t:"Der Bau des Nachwuchses", p:64, pin:[43.2,33.4], wesen:["orakel-riesenspinnen"],
    vl:"An der feuchten Höhlendecke hängen ein halbes Dutzend weißer Kokons aus Spinnweben, jeder so groß wie ein ausgewachsener Mensch.",
    st:[
     {"k":"Der Nachwuchs der Spinnenmutter","x":"In diesem Bau leben die älteren Nachkommen des uralten Weibchens – Riesenspinnen mit den Werten nach S. 89 im Regelbuch. Es sind halb so viele wie Spielercharaktere, aufgerundet. In dunklen Spalten lauernd warten sie, bis die Spielercharaktere beginnen, den Raum zu erkunden, bevor sie angreifen. Der Angriff zählt als Hinterhalt (Regelbuch S. 43), und die Spielercharaktere erhalten einen Nachteil auf ihre §Wahrnehmung§-Würfe."},
     {"k":"Kokons","x":"Die Nachkommen der Spinnenmutter haben tote Menschen und Orks in dicken Netzkokons gesammelt, um sie später zu fressen. Die Körper haben keine sichtbaren Verletzungen, da sie durch Spinnengift getötet wurden, was ein gelungener §Heilkunde§-Wurf zeigen kann. Spielercharaktere, die die Leichen untersuchen, finden Wertsachen im Gegenwert einer Schatzkarte."},
     {"k":"Der überlebende Bandit","x":"Plötzlich erwacht der Körper in einem der Kokons und schreit vor Entsetzen auf. Alle Spielercharaktere müssen einen WIL-Wurf machen, um der Furcht zu widerstehen. Doch die „Leiche“ lebt – es ist einer der Banditen, die Roric entführt haben. Er fleht die Spielercharaktere an, ihn loszuschneiden. *„Bitte, bevor sie zurückkommen! Ich tu alles! Lasst mich nicht hier!“* Wird der Bandit befreit, bricht er alle Versprechen und flieht bei der ersten Gelegenheit. Wird er bedrängt, gibt er zu, an Rorics Entführung beteiligt gewesen zu sein, behauptet aber, es sei nicht seine Idee gewesen."},
     {"k":"Süden","x":"Tunnel zum Bau der Spinnlinge (Ort 8)."},
     {"k":"Westen","x":"Tunnel zum Bau der Spinnenmutter (Ort 10)."}
    ]},
   {n:"10", t:"Der Bau der Spinnenmutter", p:64, pin:[15.6,23.5], wesen:["orakel-saakshal","orakel-roric"],
    vl:"Das schwache Licht erhellt kaum, was eine riesige Höhlenkammer zu sein scheint. Die Rückwand ist mit Spinnweben bedeckt, an denen ein kleiner Kokon baumelt. Ihr seht die Umrisse von etwas sehr Großem, das sich in den Schatten bewegt, und dann spricht eine leise Stimme in euren Köpfen, als flüstere sie in beide Ohren zugleich. *„Kleine Geschöpfe … Warum seid ihr in unser Heim eingedrungen?“* Aus dem Abgrund klettert eine entsetzlich große Spinne, dick wie zwei fette Pferde und mit ebenso vielen Beinen. Die Spinne stemmt sich gegen die Wände, während sie sich über euch auftürmt.",
    st:[
     {"k":"Saak’shal","x":"Die uralte Spinnenmutter bewohnt die Höhlen unter dem Eisenwald schon lange, bevor die ersten Menschen ins Nebeltal kamen. Da sie erkennt, dass die Spielercharaktere fähig sein müssen, um es bis hierher geschafft zu haben, will sie wissen, wer sie sind und was sie hier tun. Saak’shal kann ihre Gedanken lesen und faucht sie an, wenn sie lügen. Sie will eigentlich nicht kämpfen, verteidigt sich aber wild, wenn sie angegriffen wird."},
     {"k":"Roric","x":"Das verängstigte Kind hängt in dem Spinnwebkokon hinter der Spinnenmutter, aufgehoben für später als besonders köstlicher Leckerbissen. Man kann sich zu ihm hinüberschleichen, wenn Saak’shal abgelenkt ist, doch sie reagiert mit gewaltiger Wut, wenn sie es bemerkt."},
     {"k":"Verhandlung","x":"Erklären die Spielercharaktere, dass sie den kleinen Roric und/oder ein Teil von Eledains Drachenstatuette suchen, bietet Saak’shal ihnen einen Handel an – sie bekommen, was sie wollen, wenn sie zuerst eine Gruppe Orks töten, die sich in einem anderen Teil der Höhle niedergelassen hat (Ort 12, die Feste). Sie hält ihr Versprechen, wenn sie den Auftrag erfüllen."},
     {"k":"Das Teil der Statuette","x":"Wenn du ein Teil der Statuette von Kaiser Eledain (S. 8) hier platzieren willst, offenbart Saak’shal, dass sie es besitzt. Selbst wenn es kein Teil der Statuette gibt, kann die alte Spinnenmutter den Spielercharakteren sagen, wo sie eines finden – im Austausch dafür, dass sie ihren Auftrag erfüllen."},
     {"k":"Legenden","x":"Saak’shal weiß alles, was es über das Nebeltal zu wissen gibt, und kann die Legende von Um-Durman (S. 9) sowie die Gerüchte über die anderen Abenteuerorte (S. 17) weitergeben."},
     {"k":"Der Schatz der Spinnenmutter","x":"Am Grund der Höhle liegen unzählige Schätze, die Saak’shal im Lauf der Jahre angehäuft hat. Der gesamte Schatz entspricht sechs Schatzkarten, kann aber nicht erreicht werden, ohne die uralte Spinne zu töten."},
     {"k":"Osten","x":"Tunnel zur Spinnwebbrücke (Ort 11)."},
     {"k":"Süden","x":"Tunnel zum Bau des Nachwuchses (Ort 9)."}
    ]},
   {n:"11", t:"Spinnwebbrücke", p:66, pin:[62.8,37.4], wesen:[],
    vl:"Der Tunnel öffnet sich in einen scheinbar bodenlosen Schacht. Ein dunkler Abgrund klafft vor euch. Dicke Spinnweben bilden eine Brücke zur anderen Seite, wo ein Gang in den Berg weiterführt.",
    st:[
     {"k":"Die Spinnwebbrücke","x":"Die Brücke aus Spinnweben schwankt unter dem Gewicht des Spielercharakters. Beschreibt, wie das dicke, klebrige Netz das Einzige ist, was ihn von dem Abgrund darunter trennt. Das Netz ist stark und gibt nicht nach, doch das Klettern über die Brücke ist schwierig und erfordert einen gelungenen §Akrobatik§-Wurf. Bei einem Fehlschlag rutscht das Opfer zum Abgrund hin, kann sich aber mit §Ausweichen§ retten. Jeder der anderen Spielercharaktere auf der Brücke hat ebenfalls einen Versuch, die fallende Person mit §Akrobatik§ aufzufangen. Misslingen alle Versuche, stürzt das Opfer 12 Meter tief in einen unterirdischen See und erleidet 3W6 Sturzschaden."},
     {"k":"Osten","x":"Gang zur Feste (Ort 12)."},
     {"k":"Westen","x":"Gang zum Bau der Spinnenmutter (Ort 10)."}
    ]},
   {n:"12", t:"Die Feste", p:66, pin:[88.8,22.6], wesen:["orakel-agra","orakel-orks"],
    vl:"Der Gang geht in eine steile Treppe in einem schmalen, gehauenen Tunnel über, der steil nach oben führt. Nach einem anstrengenden Aufstieg von einigen Minuten öffnet sich der Tunnel zu einer kleinen Feste mit weitem Blick über den Eisenwald. Von dem Ausguck auf der anderen Seite einer Mauer sind orkische Grunzlaute zu hören.",
    st:[
     {"k":"Die Feste","x":"Der Außenposten stammt aus dem alten Drachenreich, was ein gelungener §Mythen & Legenden§-Wurf offenbaren kann."},
     {"k":"Agra und die Orks","x":"Die Orkkriegerin Agra und ihre Orkpatrouille (so viele wie Spielercharaktere) sind seit ein paar Tagen im Eisenwald und suchen für ihren Häuptling Maladûk nach Teilen von Eledains Statuette. Sie sind aus dem Wald zur Feste gekommen und haben einige Späher in die Höhle geschickt, doch keiner ist zurückgekehrt. Nun beraten sie ihr weiteres Vorgehen. Agra reagiert gewalttätig, wenn sie die Spielercharaktere entdeckt, lässt aber mit sich reden (§Überzeugen§ oder §Täuschen§). Sind die Spielercharaktere mit Maladûk verbündet und überzeugen sie Agra davon, ist sie zur Zusammenarbeit bereit."},
     {"k":"Keine Kampagne?","x":"Spielst du *Die Orakelhöhle* einzeln, ohne Verbindung zur Kampagne *Das Geheimnis des Drachenkaisers*, ist Agra nur hier, um die verborgenen Schätze der Höhle zu finden."},
     {"k":"Süden","x":"Treppe hinunter zum Eisenwald."},
     {"k":"Westen","x":"Tunnel zur Spinnwebbrücke (Ort 11)."}
    ]}
  ]}
 ],
 figuren:{
  "orakel-aalungeheuer":{"typ":"monster","t":"Das Aalungeheuer","p":63,"tp":32,"werte":[["Grimmigkeit","2"],["Größe","Normal"],["Bewegung","18 (im Wasser)"],["Rüstung","–"],["TP","32"]],"text":["Die Seeschlange im See sieht aus wie ein großer, blasser Aal. Ihr glänzender Körper ist schnell und kräftig, und am liebsten würde sie sich um die Beine der Spielercharaktere schlingen und sie in die Tiefe ziehen."],"angriffe":{"h":"Monsterangriffe","w":"W4","rows":["**Schwanzhieb!** Die Seeschlange schlägt mit ihrem Schwanz nach einem Spielercharakter innerhalb von 10 Metern. Der Angriff verursacht 2W6 Wuchtschaden und wirft das Opfer zu Boden.","**Grässlicher Biss!** Die Seeschlange beißt einen Spielercharakter mit ihren rasiermesserscharfen Zähnen. Der Angriff verursacht 2W8 hauenden Schaden.","**Ertränken!** Die Seeschlange zieht einen Spielercharakter in die Tiefe, und das Opfer beginnt sofort zu ertrinken, wie im Regelbuch auf S. 53 beschrieben. Der Spielercharakter kann sich nicht bewegen und keine Aktionen ausführen, die Körperbewegung erfordern, außer dem Versuch, sich zu befreien, was einen STÄ-Wurf mit Nachteil erfordert. Andere können helfen.","**Umschlingen!** Das Aalungeheuer schlingt seinen Schwanz um einen Spielercharakter und versucht, ihm das Leben aus dem Leib zu pressen. Der Angriff verursacht 2W4 Wuchtschaden und zusätzlich 2W4 jedes Mal, wenn das Opfer an der Reihe ist. Das Opfer kann sich nicht bewegen und keine Aktionen ausführen, die Körperbewegung erfordern, außer dem Versuch, sich zu befreien, was einen STÄ-Wurf mit Nachteil erfordert. Andere können helfen."]}},
  "orakel-spinnlinge":{"typ":"monster","t":"Spinnlinge","p":64,"tp":24,"werte":[["Grimmigkeit","Anzahl SC −1 (mind. 1)"],["Größe","Schwarm"],["Bewegung","18"],["Rüstung","–"],["TP","24"]],"zl":[["Widerstand","Die Spinnlinge greifen als Schwarm an und werden als ein einziges Wesen behandelt. Der Schwarm erleidet halben Schaden (aufgerundet) durch Angriffe mit körperlichen Waffen, auch magischen. Feuer wirkt normal."]],"text":[],"angriffe":{"h":"Monsterangriffe","w":"W4","rows":["**Kletternder Schrecken!** Die Spinnlinge strömen auf die Spielercharaktere zu und klettern über deren ganze Körper. Alle im Umkreis von 10 Metern erleiden einen Furchtangriff.","**Im Netz gefangen!** Der Spinnenschwarm nimmt ein unglückliches Opfer ins Visier, das völlig mit klebrigen Netzen bedeckt wird und sich nicht bewegen oder Aktionen ausführen kann, die Körperbewegung erfordern. Sich zu befreien erfordert einen gelungenen STÄ-Wurf (eine Aktion). Andere können helfen.","**Gemeinsamer Angriff!** Die Spinnlinge greifen gemeinsam den Spielercharakter mit der niedrigsten KON an. Der Angriff verursacht 2W4 hauenden Schaden, und das Opfer erleidet einen Furchtangriff. Rüstung wirkt nicht.","**Massenangriff!** Der Spinnenschwarm breitet sich aus und greift alle Spielercharaktere im Umkreis von 10 Metern an. Jedes Opfer erleidet W6 stechenden Schaden. Rüstung wirkt nicht."]}},
  "orakel-riesenspinnen":{"typ":"monster","t":"Riesenspinnen","p":64,"be":"riesenspinne","text":["Halb so viele wie Spielercharaktere, aufgerundet. Werte nach S. 89 im Regelbuch."]},
  "orakel-saakshal":{"typ":"monster","t":"Saak’shal","p":65,"img":"abenteuer/orakel-saakshal","tp":84,"be":"riesenspinne","werte":[["Grimmigkeit","Anzahl SC −1 (mind. 1)"],["Größe","Groß"],["Bewegung","18"],["Rüstung","–"],["TP","84"]],"text":["Saak’shal ist eine uralte Spinne mit trüben grauen Augen, deren Ränder von Krusten aus altem Eiter und Schmutz überzogen sind (man kann sich an ihr vorbeischleichen). Sie bewegt sich ruckartig, aber schnell und ist fast doppelt so groß wie normale Riesenspinnen. Sie führt dieselben Monsterangriffe aus wie diese (S. 89 im Regelbuch), jedoch mit einem zusätzlichen Schadenswürfel."]},
  "orakel-roric":{"typ":"nsc","t":"Roric","p":65,"img":"abenteuer/orakel-roric","text":["Ein kleiner Junge von sechs Jahren, der aus Außenposten entführt wurde."]},
  "orakel-agra":{"typ":"nsc","t":"Agra","p":66,"img":"abenteuer/orakel-agra","tp":16,"werte":[["Bewegung","10"],["Schadensbonus STÄ","+W6"],["TP","16"]],"zl":[["Rüstung","Kettenhemd (4)"],["Fertigkeiten","Wahrnehmung 12, Raufen 14, Ausweichen 10"],["Waffe","Krummsäbel (Fertigkeitswert 14, Schaden 2W6)"]],"text":["Agra ist eine große, muskulöse und narbige Orkin.","Sie hat den Großteil ihres Lebens im Kampf verbracht und ist Maladûk fanatisch ergeben. Sie hofft, ihre Tüchtigkeit und Überzeugung zu beweisen, indem sie die Statuette des Drachenkaisers findet."]},
  "orakel-orks":{"typ":"nsc","t":"Orkkrieger","p":66,"tp":12,"werte":[["Bewegung","10"],["Schadensbonus STÄ","+W4"],["TP","12"]],"zl":[["Rüstung","Beschlagenes Leder (2)"],["Fertigkeiten","Wahrnehmung 10, Ausweichen 8"],["Waffe","Krummsäbel (Fertigkeitswert 12, Schaden 2W6)"]],"text":[]}
 },
 kaesten:{
  "orakel-verlassen":{"k":"Die Höhle verlassen?","p":61,"b":["Verlassen die Spielercharaktere die Höhle, um eine Lange Rast einzulegen, würfelt pro Tagesabschnitt mit dem W6 auf der Tabelle auf S. 107 im Regelbuch."]}
 },
 tabellen:[
  {"id":"ereig","h":"Zufallsereignisse","strip":"Zufallsereignisse · W10","p":61,"einl":"Für jedes volle Viertel, das die Spielercharaktere in bestimmten Räumen verbringen – etwa um etwas zu suchen oder eine Kurze Rast einzulegen –, kannst du auf der folgenden Tabelle würfeln oder ein passendes Ereignis auswählen. Die Raumbeschreibungen geben an, wo Zufallsereignisse eintreten können.","cols":["W10","Ereignis"],"rows":[["1–5","**Nichts passiert.**"],["6","**Kratzgeräusch.** Die Spielercharaktere hören ein schabendes, kratzendes Geräusch, das durch die Tunnel hallt. Versuchen sie, dem Geräusch nachzugehen, stellen sie fest, dass es aus kleinen Durchgängen und Hohlräumen kommt, in die sie selbst nicht hineinpassen."],["7","**Steinschlag.** Steine und Erde stürzen von der Decke. Ein Spielercharakter muss auf §Ausweichen§ würfeln und erleidet bei einem Fehlschlag 2W6 Wuchtschaden."],["8","**Seltsamer Pilz.** Ein dunkler, übel riechender Schimmel an der Höhlenwand stößt giftige Sporen aus. Ein Spielercharakter wird einem tödlichen Gift mit Wirkstärke 14 ausgesetzt."],["9","**Verwundeter Bandit.** Plötzlich stürzt eine dunkle Gestalt auf die Spielercharaktere zu und schreit von „den Bestien in der Dunkelheit“. Alle Spielercharaktere müssen einen WIL-Wurf machen, um der Furcht zu widerstehen. Es ist jedoch kein Monster, sondern einer der Banditen, die Roric entführt haben. Er ist den Spinnen entkommen, aber von Sinnen und greift die Spielercharaktere an. Er ist kreidebleich und starrt sie mit irren Augen an. Ein gelungener §Überzeugen§-Wurf beruhigt ihn; dann erzählt er ihnen vom Überfall der Spinnen und dass Roric tiefer in der Höhle zu finden ist. Der Mann hat die Werte eines Banditen nach der Tabelle auf S. 105 im Regelbuch, hat aber nur noch 2 TP."],["10","**Spinnlinge.** Ein Schwarm Spinnen, von der Größe einer geballten Faust bis zu einer großen Katze, huscht aus jeder Nische und Ritze hervor und greift die Spielercharaktere sofort an. Es ist die Brut der alten Spinnenmutter, Werte siehe S. 64. Die Spinnen verschwinden nach einer Kampfrunde."]]}
 ]
};
