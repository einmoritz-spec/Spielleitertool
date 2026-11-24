/* Schiffe, Kap. 8 – Schritt 2: Ausstattung, Bewaffnung und Vorreiter (Corebook S. 178–181) */
window.WS_NACH = window.WS_NACH || {}; WS_NACH.schiffe = WS_NACH.schiffe || [];
(function(L){ var K = "Schritt 2 · Ausstattung";
function E(n){ return n === 0 ? "Gratis" : n === 1 ? "1 Einsatz" : n + " Einsätze"; }
function I(n, k, x, l){ var c = {c:n + " · " + E(k)}; if(x) c.x = x; if(l) c.l = l; return c; }
L.push({id:"bewaffnung", k:K, t:"Bewaffnung [Optional]", p:178, b:[
 {a:"Die letzte Gruppe von Ausstattungsoptionen für dein Schiff, aber keineswegs die unwichtigste. Bewaffnung sind Deckwaffen, die enorme Schadensmengen austeilen, ausgelegt für Schiff-gegen-Schiff-Kämpfe oder Kämpfe gegen große Raubtiere (vielleicht sogar Leviathane, wenn eine Crew ihr Glück herausfordern will).\nWenn du Einsätze für eine Bewaffnung ausgibst, notiere sie auf deinem Schiffsbogen, ebenso die Schadensart, die sie verursacht."},
 {h:"Massiver Schaden gegen massive Ziele"},
 {a:"Deckwaffen verursachen selbstverständlich massiven Schaden, die Art Schaden, die bei Beschuss von etwas Personengroßem nicht nur Kästchen markiert, sondern ganze Leisten. Doch Schiffsbewaffnung auf personengroße Ziele abzufeuern käme nicht nur grausam, sondern auch recht verschwenderisch vor – besonders, wo es auf den rauschenden Wellen so viele einladendere größere Ziele gibt.\nWenn ein Schiff oder Leviathan massiven Schaden erleidet, behandelt es ihn aufgrund seiner Größe meist als normalen Wuchtschaden."},
 {h:"Munition und Nachladen"},
 {a:"So wie wir nicht empfehlen, Treibstoff für eure Antriebe nachzuhalten, liegt auch das Nachhalten von Munition für Deckwaffen wahrscheinlich außerhalb des Rahmens des Regelwerks der Wilden Worte. Wenn ihr besondere Munition erschaffen habt, lohnt sich das Nachhalten vielleicht, oder wenn dein Schiff als Teil seines Abenteuers eine Art Ressourcenkrise durchmacht, doch normalerweise musst du keine Schüsse zählen.\nWorum du dich eventuell kümmern musst, ist das Nachladen. Als große Waffen haben Bewaffnungen entsprechend große Munition. Das Wichtigste dabei: Nachladen sollte nie der Hauptfokus deiner Aufmerksamkeit sein – es mag nötig sein, aber es ist nicht aufregend. Wenn du mitten in einer erbitterten Schlacht mit einem anderen Schiff steckst, kann es ein großartiger dramatischer Moment sein, über das Deck zu schlittern, um eine weitere Granate zu packen und zu laden, aber nur, wenn du sie einen Moment später auch abfeuern darfst."},
 {erz:"Es ist fast unmöglich, das Gefühl zu beschreiben, wenn direkt neben dir eine Schrapnellkanone losgeht. Teils, weil es eine Sisyphusarbeit wäre, die Komplexität einer plötzlichen Lärmexplosion, die hektische Dynamik fliegender Schrauben und Glassplitter, den Druckwechsel und das Rauschen der Luft genau einzufangen. Aber hauptsächlich, weil du in der Art Situation, in der Schrapnellkanonen feuern, vermutlich andere Sorgen hast."},
 {a:"Die Crew um dich herum kann hier eine große Hilfe sein – bitte Crewkameraden, eine Bewaffnung zwischen deinen Schüssen nachzuladen, oder rufe einen NSC-Passagier oder ein Mitglied der Unterbesatzung zu Hilfe (mehr zu ihnen im nächsten Abschnitt)."}
]});
L.push({id:"waffen", k:K, t:"Waffen", p:179, b:[
 {h:"Deckwaffen"},
 {a:"Die Wildsea, heißt es oft, ist ein gefährlicher Ort. Eine dieser Waffen an dein Deck geschraubt zu haben, macht sie im Allgemeinen nicht weniger gefährlich, aber vielleicht für dich im Besonderen ein wenig weniger. Deckwaffen können unabhängig vom Schiff ausgerichtet werden, was das leichte Verfolgen bewegter Ziele erlaubt. Sie haben außerdem als gegeben einen Begrenzer, der verhindert, dass du sie weit genug drehst, um beim Feuern dein eigenes Schiff zu treffen."},
 I("Trebuchet",2,"Schleudert Steine, Holzbrocken oder Bergegut-Klumpen.",["Verursacht massiven FK-Stumpf-Schaden"]),
 I("Harpunenturm",2,"Feuert Widerhakenspeere ab, um Schiffsrümpfe und die Häute größerer Kreaturen zu durchbohren.",["Verursacht massiven FK-Stich-Schaden"]),
 I("Schrapnellkanone",2,"Feuert Wolken reißenden Metalls ab, meist einfach Armvoll Schrottabfälle, die in den Lauf geworfen werden.",["Verursacht massiven FK-Säge-Schaden"]),
 I("Viperzahn",2,"Eine instabile Waffe, die ätzende Flüssigkeit verschießt.",["Verursacht massiven FK-Säure-Schaden"]),
 I("Große Sprengarmbrust",2,"Eine armbrustartige Lafette, die Sprengbolzen verschießt.",["Verursacht massiven FK-Explosion-Schaden"]),
 I("Sturmschiene",2,"Zwei riesige Messingstäbe, umwickelt mit schlecht abgeschirmten Kabeln, angeschlossen an einen Voltaik-Generator.",["Verursacht massiven FK-Strom-Schaden"]),
 {h:"Rumpfwaffen"},
 {a:"Diese Waffen sind am Rumpf des Schiffs befestigt (oder Teil von ihm oder ragen durch ihn hindurch). Rumpfwaffen sind in Einsätzen billiger als Deckwaffen, erfordern aber möglicherweise sorgfältigeres Manövrieren, um in einer Situation mit hohem Einsatz wirksam zu sein."},
 I("Windenklauen",1,"Eine Reihe kurzreichweitiger Enterklauen an den Seiten deines Schiffs, mit denen feindliche Gefährte zum Entern herangezogen werden.",["Ein Hilfsmittel für Begegnungen auf kurze Distanz statt eine Waffe aus eigenem Recht"]),
 I("Breitseitenkanonen",1,"Ein Knall aus der halbvergessenen Vergangenheit; diese Kanonenbänke können nur auf Ziele zu beiden Seiten von dir feuern.",["Verursacht massiven FK-Stumpf- oder Explosion-Schaden"]),
 I("Rammbug",1,"Erlaubt es dir, Kreaturen (und Schiffe) ohne Gefahr für deinen eigenen Rumpf zu rammen.",["Verursacht massiven NK-Stumpf-Schaden"]),
 I("Speerbug",1,"Ein Satz verstärkter Stacheln, die aus der Front deines Schiffs ragen, um andere ohne Gefahr für deinen eigenen Rumpf zu rammen.",["Verursacht massiven NK-Stich-Schaden"]),
 I("Klingenbug",1,"Eine keilartige Schneide, um feindliche Schiffe ohne Gefahr für deinen eigenen Rumpf aufzuschlitzen.",["Verursacht massiven NK-Hieb-Schaden"]),
 I("Reißsägenbug",1,"Eine gezackte Vorderkante, um feindliche Schiffe ohne Gefahr für deinen eigenen Rumpf zu zerschneiden.",["Verursacht massiven NK-Säge-Schaden"]),
 {h:"Enterausrüstung"},
 {a:"Handgemenge auf einem Schiff kann eine plötzliche und brutale Angelegenheit sein, doch diese Optionen geben selbst kampfungewohnten Charakteren einen kleinen Vorteil, wenn sie ihn brauchen. Diese Waffen werden als in einer Krise griffbereit angenommen, doch deine Feinde können sie ebenfalls nutzen."},
 I("Begrenztes Waffenregal",2,"Ein Regal mit einfachen Waffen.",["Beim Verlassen oder Verteidigen des Schiffs können Crewmitglieder ein vorübergehendes Stück Ausrüstung mit dem Merkmal FK oder NK und einer einzelnen Schadensart (Stumpf, Scharf oder Stich) mitnehmen. Diese vorübergehende Waffe kommt mit einer 2-Leiste und kann nicht repariert werden."]),
 I("Waffenregal des Wrackjägers",2,"Ein Regal mit weniger geradlinigen Waffen.",["Beim Verlassen oder Verteidigen des Schiffs können Crewmitglieder ein vorübergehendes Stück Ausrüstung mit dem Merkmal FK oder NK und einer einzelnen Schadensart (Hieb, Säge oder Explosion) mitnehmen. Diese vorübergehende Waffe kommt mit einer 2-Leiste und kann nicht repariert werden."])
]});
L.push({id:"vorreiter", k:K, t:"Vorreiter [Optional]", p:180, b:[
 {a:"Das sind Einsitzer-Gefährte, gebaut, um über kurze Strecken über die Wellen zu schneiden, meist von einem größeren Schiff oder einem Wachturm mitten in der Wildnis aus eingesetzt. Sie haben begrenzte Reichweite und bieten wenig Schutz, sind aber je nach Bauweise perfekt für bestimmte Spezialaufgaben und Nischentätigkeiten.\nVorreiter werden wie normale Schiffe mit Einsätzen maßgefertigt, nach den Regeln auf der nächsten Seite.\nWenn du Einsätze für einen Vorreiter ausgibst, notiere ihn auf deinem Schiffsbogen, ebenso alle Sonderregeln, denen er folgt."},
 {h:"Einen Vorreiter bauen"},
 {a:"Der Bau eines Vorreiters ähnelt dem Bau eines größeren Schiffs, ist aber viel schneller und einfacher. Vorreiter bestehen aus zwei Komponenten …"},
 {l:["Einem Chassis, das das Grundaussehen und die Fähigkeiten des Gefährts bestimmt","Und Ausstattungen, kleinen Zusätzen, die Leistung oder Nutzen eines Vorreiters verbessern"]},
 {a:"Ein Vorreiter kann nur ein Chassis haben, aber mehrere Ausstattungen können hinzugefügt werden. Andere Elemente des Gefährts (etwa welche Art Biss er nutzt oder was den Antrieb speist) werden erzählerisch gehandhabt, um die Komplexität so niedrig wie möglich zu halten."},
 {h:"Begrenzter Treibstoff"},
 {a:"Einer der Hauptunterschiede zwischen einem Vorreiter und dem kleinsten Schiff ist, dass sie keine wirkliche Möglichkeit haben, große Treibstoffmengen zu lagern. Ein Vorreiter funktioniert für etwa eine Szene harter Nutzung, bevor er zum Auftanken zurückkehren muss."},
 {h:"Opfer für die Einfachheit"},
 {a:"Vorreiter sind darauf ausgelegt, so einfach und schnell wie möglich zusammengebaut zu werden. Wenn du mehr Komplexität suchst, kaufe ein Schiff in Nano-Größe nach dem normalen Schiffserschaffungsprozess und behandle es als Vorreiter – es hat fast dieselbe Größe, und du hast viel mehr Flexibilität bei deinen Entscheidungen!"},
 {h:"Alternativer Ansatz: Vorreiter-Banden"},
 {a:"Vorreiter sind meist kleine Gefährte für vorübergehende Nutzung, Späher oder Begleiter eines größeren Schiffs. Doch was, wenn es kein größeres Schiff gäbe, kein gemeinsames Gefährt, das die Crew ihr Zuhause nennt? Dann hättet ihr einfach eine Gruppe Wildsegler, von denen jeder auf sein eigenes persönliches Transportmittel angewiesen ist, um durch die rauschenden Wellen zu schneiden. Entsetzlich gefährlich natürlich … aber für manche eine reizvolle Aussicht.\nWenn ihr es als Vorreiter-Bande versuchen wollt, empfehlen wir, die meisten auf dem Rest dieser Seite vorgestellten Optionen zu ignorieren. Behaltet stattdessen diese Vorschläge im Kopf …"},
 {l:["Bei der Schiffserschaffung erhält jeder Spieler sechs Einsätze für ein persönliches Gefährt in Nano-Größe.","Diese Schiffe folgen den meisten üblichen Regeln für größere Gefährte, außer dass Platz ein Thema ist – wenn ihr einem Stück Fracht gegenübersteht, überlegt, ob euer Schiff es überhaupt tragen könnte.","Steigert die Wucht bei allen persönlichen Reparaturarbeiten an diesen Schiffen – jeder Fahrer kennt die Macken seines Gefährts.","Ersetzt auf Reisen „am Steuer“ durch „vorneweg“, um zu bestimmen, welches Schiff die Flotte anführt. Wache-Würfe werden normal gemacht, und das Ankerwerfen ist meist eine Entscheidung der gesamten Gruppe, anzuhalten.","Wird das Schiff eines Charakters zu stark beschädigt, um zu fahren, kann es von einem anderen Schiff der Gruppe abgeschleppt werden, um den Preis, nicht mehr Vorwärtspreschen zu können."]}
]});
L.push({id:"vorreiter-start", k:K, t:"Start und Andocken", p:180, b:[
 {a:"Es gibt mehrere Methoden, einen Vorreiter von einem größeren Schiff aus zu lagern und einzusetzen – eine zu wählen wird empfohlen. Einen Vorreiter ohne Startmethode zu kaufen ist möglich, aber … nicht besonders nützlich. Diese Optionen können auch genutzt werden, um andere Schiffe in Nano-Größe zu starten und anzudocken, wenn dein Hauptschiff groß genug ist."},
 I("Schleppleine",0,"Für die Crew mit knappem Budget bleibt manchmal keine andere Möglichkeit, als einen Vorreiter hinter dem Hauptschiff herzuschleppen und zu hoffen, dass er dabei nicht zu stark beschädigt wird. Schleppleinen bestehen meist aus dick gewundenen Seilen oder Ketten."),
 I("Dockkran",1,"Eine Methode zum Starten von Vorreitern, meist vom Deck eines Schiffs aus. Kann Vorreiter auch direkt aus den Wellen bergen."),
 I("Wildbucht-Tore",1,"Ein Satz in den Rumpf eingebauter Ladetore, die sich vom Schiffsinneren direkt zu den Wellen öffnen und Vorreitern erlauben, selbstständig zu starten und anzudocken oder vom Mutterschiff während der Fahrt „aufgeschöpft“ zu werden."),
 I("Rumpfklammern",1,"Ein Satz Dockklammern an der Schiffsaußenseite, die einen Vorreiter an Ort und Stelle halten, meist genutzt für Rettungsflöße und kleine Transportskipper."),
 I("Katapultschiene",1,"Ein federgespannter Deckabschnitt, um Vorreiter mit Schwung auf die Wellen zu katapultieren. Großartig, um gegnerische Schiffe zu überraschen, aber die Logistik, einen Vorreiter für einen weiteren Start wieder in Position zu bringen, ist … heikel.")
]});
L.push({id:"vorreiter-chassis", k:K, t:"Vorreiter-Chassis und -Ausstattung", p:181, b:[
 {h:"Vorreiter-Chassis"},
 {a:"Der Hauptkörper deines kleinen Schiffs. Mechanisch bestimmt dies die Basiswerte des Vorreiters – du kannst nur ein einziges Chassis pro Gefährt kaufen."},
 I("Arbeitspferd",1,"Die meisten Bewohner der Wildsea haben nie ein Pferd gesehen, aber das Wort lebt fort als Beschreibung für Einsatz und gleichbleibende Verlässlichkeit.",["Basiswerte: Panzerung 2, Dichtung 1, Tempo 2, Sägen 1, Tarnung 1, Neigung 1","Erhalte zwei Vorreiter-Ausstattungen kostenlos"]),
 I("Skipper",2,"Schnittig und kompakt; Skipper sind vor allem auf Tempo und Tarnung ausgelegt.",["Basiswerte: Panzerung 1, Dichtung 1, Tempo 3, Sägen 2, Tarnung 3, Neigung 2"]),
 I("Chopper",2,"Brutal und laut; Chopper sind darauf ausgelegt, sich ihren Weg durch die zäheste Wildsea-Vegetation zu schneiden.",["Basiswerte: Panzerung 3, Dichtung 1, Tempo 2, Sägen 3, Tarnung 1, Neigung 2"]),
 I("Seitenwinder",2,"Beweglich und widerstandsfähig, aber ohne Tempo.",["Basiswerte: Panzerung 2, Dichtung 3, Tempo 1, Sägen 2, Tarnung 1, Neigung 3"]),
 {h:"Vorreiter-Ausstattung"},
 {a:"An dein Vorreiter-Chassis angeschraubte Zusätze. Sie erhöhen Basiswerte oder verleihen besondere Vorteile."},
 I("Windglas",1,"Eine Schale aus gehärtetem Bernstein oder uraltem Glas, an der Steuersäule eines Vorreiters befestigt.",["Panzerung +1, Dichtung +1"]),
 I("Überbrenner",1,"Eine chemische Batterie, die den Antrieben zusätzliche Kraft verleiht. Zu benutzen, hoffentlich, mit großer Vorsicht.",["Tempo +1, Sägen +1"]),
 I("Schleimfilm",1,"Eine schleimige Klebebeschichtung am unteren Rumpf, die Antriebslärm dämpft und dem Schiff erlaubt, scharfe Kurven besser zu meistern.",["Tarnung +1, Neigung +1"]),
 I("Persönlicher Umbau",1,"Was genau hast du mit dem Ding angestellt? Hafeningenieure würden weinen.",["Steigere beliebige drei Werte um 1","Senke einen beliebigen Wert um 1"]),
 I("Waffenlafette",1,"Eine Halterung für eine größere Deckwaffe, deren Feuerkontrollen an die Steuersäule des Vorreiters angeschlossen sind.",["Verursacht massiven FK-Stumpf-, Scharf-, Stich- oder Explosion-Schaden (gewählt, wenn du diese Ausstattung nimmst)"]),
 I("Ladefläche",1,"Ein lastwagenartiger hinterer Teil, der eine holprige Fahrt bietet.",["Erlaubt dir, eine kleine Zahl Crewmitglieder oder Frachtstücke zu befördern"]),
 I("Tarnanstrich",1,"Eine Kombination aus Farbe und geschickter Nutzung von Vegetation macht den Vorreiter in Ruhe fast unmöglich zu entdecken.",["Tarnung +3, wenn still oder vor Anker"])
]});
})(WS_NACH.schiffe);
