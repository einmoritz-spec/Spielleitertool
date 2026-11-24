/* Bothilds Ader (Abenteuerband S. 39–46) – deutsche Fassung. §…§ = Fertigkeit in Kapitälchen. Modell: plan/dragonbane/ABENTEUER_PLAN.md §2 */
window.DB_AB = window.DB_AB || {};
DB_AB["bothild"] = {
 id:"bothild", t:"Bothilds Ader", band:"dk", buch:"db_adv", p:39, img:"abenteuer/bothild-titel",
 lage:[
  "Am Ende einer tiefen Schlucht am Rand des nebelverhangenen Kummergebirges liegt Bothilds Ader, eine verlassene und überflutete Zwergenmine, in der vor zweihundert Jahren die Gier einer einzigen Zwergin einen unterirdischen Schrecken entfesselte und das Schicksal von Hunderten ihrer Sippe besiegelte.",
  {"h":"Die Lage","p":39},
  "Die Geschichte von Bothilds verzweifelter Suche nach Reichtümern in der Mine, die ihren Namen trägt, ist weithin bekannt. Bothild trieb ihre Arbeiter an, immer tiefer zu graben, bis sie schließlich in eine riesige unterirdische Wassermasse durchbrachen. Die Mine wurde überflutet, und ein schreckliches Ungeheuer wurde freigelassen. Manche sagen, Bothild habe an die Tore der Unterwelt geklopft.",
  "Die Spielercharaktere können über Gerüchte (S. 17 und die Abenteuerkarten) von Bothilds Ader erfahren.",
  "Der Ort ist ein möglicher Fundort für eines der vier Teile der Statuette (S. 8), das in diesem Fall im Sarkophag in Raum 10 liegt.",
  "Darüber hinaus hat der Orkhäuptling Maladûk Bothilds Ader im eskalierenden Konflikt mit Azrahel Koth zu ihrer unwahrscheinlichen Festung gemacht – etwas, das die Spielercharaktere herausfinden können, wenn sie Goblins oder Orks ihres Clans auf ihren Reisen durch das Nebeltal befragen (siehe Zufallsbegegnungen in Kapitel 4). Die Spielercharaktere brauchen diese Information jedoch nicht, um Bothilds Ader zu spielen.",
  "Wenn die Spielercharaktere ankommen, hält Maladûk gerade einen Kriegsrat mit ihren Untergebenen ab. Eine Begegnung mit den Spielercharakteren kann je nach den Handlungen der Spieler unterschiedlich enden.",
  "In der Zwischenzeit gleitet der Weiße Tod, die monströse Seeschlange, die durch Bothilds Torheit hereingelassen wurde, durch die überfluteten Tunnel der Mine. Lass ihn von Zeit zu Zeit auftauchen – im Wasser planschen, auf jemanden losstürzen und wieder verschwinden –, um die Spielercharaktere ständig auf Trab zu halten.",
  "Dazu kommt die ständige Gegenwart der vielen Zwergengeister, deren stärkster Bothilds Geist ist, der auch wissen kann, wo sich ein Teil von Eledains Statuette befindet. Im Austausch für diese Information verlangt sie jedoch, dass die Spielercharaktere zuerst den Weißen Tod beseitigen.",
  {"stein":{"h":"Die Mine verlassen?","b":["Verlassen die Spielercharaktere die Mine, um eine Lange Rast einzulegen, würfelt für jeden Tagesabschnitt W6 auf der Tabelle auf Regelbuch S. 107."]}}
 ],
 bereiche:[
  {id:"tor", t:"Der Torbereich", karte:{img:"abenteuer/bothild-karte-tor", p:42}, orte:[
   {n:"1", t:"Die Tore von Bothild", p:40, pin:[8.5,47.2], wesen:[],
    vl:"Die Schlucht endet an einer Felswand, an der ein steinernes Tor, das zu seiner Zeit zweifellos prächtig war, müde an gebrochenen Angeln hängt. Ein schwaches Licht sickert durch das Tor, dessen schöne Runen von Vandalen zerstört wurden.",
    st:[
     {"k":"Das Tor","x":"Als das Tor zu Bothilds Ader versiegelt wurde, wurden auch seine Inschriften entfernt. Das Wort „Ader“ wurde ausgelöscht und durch „Torheit“ ersetzt. Weitere Beleidigungen, die zwergische Vandalen eingeritzt haben, können mit einem gelungenen Wurf auf §Fremdsprachen§ gelesen werden: „Triumph des Weißen Tods“, „Preis der Gier“, „Glitzergräbers Torheit“."},
     {"k":"Späher","r":1,"x":"*Das Tor wird von Goblins aus den Ausguckposten der Garnison (Ort 6) beobachtet. Die Spielercharaktere können einen Wurf auf* §Heimlichkeit§ *machen, wenn sie sich dem Tor vorsichtig nähern. Gelingt er allen, schlüpfen sie unbemerkt hinein. Werden sie entdeckt, schlagen die Goblins Alarm – mehr dazu unter Ort 2.*"},
     {"k":"Osten","x":"Das Steintor führt zur Eingangshalle (Ort 2)."}
    ]},
   {n:"2", t:"Eingangshalle", p:41, pin:[27.9,47], wesen:[],
    vl:"Tiefe Radspuren zeichnen den Steinboden des sanft abfallenden Korridors, entstanden durch Jahrhunderte schwerer und kostbarer Fracht. Direkt hinter dem zerbrochenen Steintor steckt ein Fallgitter, halb geöffnet verkeilt. Am Ende des Korridors liegt ein Tor, über dem die Decke wie ein Sternenhimmel glitzert.",
    st:[
     {"k":"Äußeres Tor","x":"Hinter dem Tor ist leicht zu erkennen, dass beide Torflügel aus den Angeln gerissen und der Mechanismus, der sie einst steuerte, zerstört wurde. Das Tor lässt sich nicht schließen."},
     {"k":"Reliefs","x":"Die Wände sind mit teils zerstörten Reliefs von Bothilds Heldentaten und der Arbeit der Zwerge in der Mine geschmückt."},
     {"k":"Inneres Tor","x":"Haben die Späher Alarm geschlagen (siehe Ort 1), ist das innere Tor geschlossen, wenn die Spielercharaktere dort ankommen. Das Tor klemmt, lässt sich aber mit einem gelungenen STÄ-Wurf mit einem Nachteil aufdrücken (andere können helfen). Die Spielercharaktere können auch die Goblins auf Bothilds Platz (Ort 3) mit §Überzeugen§ dazu bringen, sie hereinzulassen (ebenfalls mit einem Nachteil). Wurde kein Alarm geschlagen, steht das innere Tor einen Spalt offen."},
     {"k":"Hinterhalt","r":1,"x":"*Bothild ließ die Decke mit Kristallen schmücken, um die Illusion eines Sternenhimmels zu erzeugen, der die Schießscharten der Garnison (Ort 6) verbirgt. Wurde Alarm geschlagen oder machen die Spielercharaktere viel Lärm, greifen die Wachen in der Garnison an. Es sind so viele wie Spielercharaktere, und sie greifen mit Überraschung an. Lass Spielercharaktere, die aktiv die Decke beobachten, auf* §Wahrnehmung§ *würfeln, um die Löcher in der Decke zu sehen und Bewegung dort oben zu bemerken. Die erste Wache schüttet einen Kessel mit kochendem, stinkendem Goblin-Eintopf durch das Loch. Jeder Spielercharakter im Raum, der nicht ausdrücklich gesagt hat, dass er sich an den Wänden hält, wird getroffen und erleidet W10 Schaden. Dem Angriff kann ausgewichen, er kann aber nicht pariert werden. Dann feuern die anderen Wachen ihre Kurzbögen ab. Sie greifen mit einem Vorteil an, während die Spielercharaktere einen Nachteil auf Angriffe gegen sie erhalten. Nur Fernkampf ist möglich. Die Spielercharaktere können dem Hinterhalt entkommen, indem sie das Tor zu Ort 3 aufdrücken oder die Goblins mit* §Überzeugen§ *dazu bringen, sie hereinzulassen.*"},
     {"k":"Osten","x":"Steintor zu Bothilds Platz (Ort 3)."},
     {"k":"Westen","x":"Zerbrochenes Steintor, das aus der Mine hinausführt (Ort 1)."}
    ]},
   {n:"3", t:"Bothilds Platz", p:42, pin:[56.3,47.4], wesen:["bothild-goblins"],
    vl:"Der Nachthimmel erstreckt sich und verschwindet in der Höhe, als der Korridor in einen großen offenen Raum übergeht. Eine große kopflose Statue mit einer doppelköpfigen Axt, die zur Decke erhoben ist, beherrscht ihn. Die Luft ist kalt und feucht, und ein verträumter Dunst liegt über dem Raum.",
    st:[
     {"k":"Goblins","x":"Hier ist eine Gruppe Goblins, doppelt so viele wie Spielercharaktere. Haben die Spielercharaktere sie mit §Überzeugen§ dazu gebracht, sie hereinzulassen, führen die Goblins sie zu Maladûk in der Schmiede (Ort 11). Bricht ein Kampf aus und die Spielercharaktere gewinnen die Oberhand, ziehen sich die Goblins in die Ställe (Ort 5) und dann in die Garnison (Ort 6) zurück."},
     {"k":"Statue","x":"Die Statue, die Bothild von sich selbst errichten ließ, wurde zerstört, als das Tor zu Bothilds Ader nach der Katastrophe versiegelt wurde. Der Kopf ist längst fort. Ein aufmerksamer Beobachter bemerkt vier lange, dünne Zöpfe über der Brust."},
     {"k":"Reliefs","x":"Siehe Eingangshalle (Ort 2)."},
     {"k":"Norden","x":"Tür zu den Karrenständen (Ort 4)."},
     {"k":"Osten","x":"Zerbrochene Steintür zu den Minentunneln (Ort 7). Über der Tür steht auf Zwergisch „Bothilds Reich“ (§Fremdsprachen§ für Nicht-Zwerge)."},
     {"k":"Süden","x":"Öffnung zu den Ställen (Ort 5)."},
     {"k":"Westen","x":"Öffnung zur Eingangshalle (Ort 2)."}
    ]},
   {n:"4", t:"Karrenstände", p:42, pin:[62.8,17.6], wesen:[],
    vl:"Breite Stände, durch meterhohe Steinmauern getrennt, säumen die Nordwand des Raums. Zerstörte Reliefs von Zwergen, die Karren mit glänzenden Silberbarren beladen, sind an den Wänden zu sehen. Ein verglimmendes Feuer aus zerbrochenen Karrenteilen schwelt in der Mitte des Raums.",
    st:[
     {"k":"Reliefs","x":"Die Silberbarren sind echt, aber dünn, und wurden aus irgendeinem Grund von den Goblins in Ruhe gelassen. Sie können leise mit §Fingerfertigkeit§ (eine Aktion) oder laut entfernt werden, indem man 10 Schadenspunkte verursacht (Rüstungswert 5). Würfelt man einen Dämon, löst das Zufallsereignis 9 aus. Es gibt insgesamt sieben Barren, und sie sind je 50 Silber wert."},
     {"k":"Karren","x":"Eine Anzahl zerbrochener Karren ist hier gelagert. Teile davon lassen sich als Flöße nutzen, um die tieferen Gewässer der Mine zu überqueren."},
     {"k":"Zufallsereignis","x":"Würfelt für jedes volle Viertel, das die Spielercharaktere hier verbringen, W4+4 auf der Tabelle auf S. 40 (nur die Zufallsereignisse 7 und 8 können eintreten)."},
     {"k":"Westen","x":"Gewundene Steintreppe hinauf zur Garnison (Ort 6)."},
     {"k":"Süden","x":"Öffnung zu Bothilds Platz (Ort 3)."}
    ]},
   {n:"5", t:"Ställe", p:43, pin:[62.7,77.1], wesen:["bothild-warge"],
    vl:"Es riecht durchdringend nach nassem Fell und Mist. Die Wände sind mit verschmutzten Bildern von Zwergen geschmückt, die pferdegezogene Karren durch dramatische Landschaften führen. Etwas glitzert in der Dunkelheit der alten Ställe, und ein tiefes Knurren ist zu hören.",
    st:[
     {"k":"Warge","x":"In den Ställen leben jetzt die Warge der Goblins. Es sind halb so viele wie Spielercharaktere (aufgerundet). Die Warge greifen nur an, wenn sie provoziert werden, beschützen aber die Goblins (wenn diese sich zurückziehen) sowie die Wargwelpen (siehe unten)."},
     {"k":"Wargwelpen","r":1,"x":"*In einer der Boxen liegen drei Wargwelpen. Die Spielercharaktere können sie mit einem gelungenen Wurf auf* §Entdecken§ *finden oder indem sie gezielt in den Boxen nachsehen.*"},
     {"k":"Reliefs","x":"Ein gelungener Wurf auf §Mythen & Legenden§ erlaubt den Spielercharakteren, in den Mosaiken einen der Abenteuerorte des Nebeltals zu erkennen. Das Mosaik gewährt einen Vorteil auf den Wurf auf §Wildniskunde§, um den Weg zu diesem Ort zu finden."},
     {"k":"Westen","x":"Gewundene Steintreppe hinauf zur Garnison (Ort 6)."},
     {"k":"Norden","x":"Tür zu Bothilds Platz (Ort 3)."}
    ]},
   {n:"6", t:"Die Garnison", p:43, pin:[28,40.9], wesen:["bothild-goblins"],
    vl:"Dieser große Raum wird von zwei Reihen halbmondförmiger, kniehoher Sockel unterteilt. Gleichmäßig verteilte Löcher sind im Steinboden, dazu ein breiter Kanal, der zu einem großen, brodelnden Kessel führt, der an der Ostwand über einer Feuerstelle hängt. Der Raum stinkt nach Schwefel und ranzigem Fleisch.",
    st:[
     {"k":"Goblins","x":"Die Goblins in der Garnison sind so viele wie Spielercharaktere. Gelingt es den Spielercharakteren, sie mit §Überzeugen§ zu überreden, können die Goblins ihre Waffen niederlegen und sie zu Maladûk bringen."},
     {"k":"Das Himmelsfeuer","x":"Der Kessel über der Feuerstelle enthält einen stinkenden, kochend heißen Goblin-Eintopf, der durch Löcher im Boden auf Eindringlinge in der Eingangshalle gegossen werden kann. Mehr dazu unter Ort 2."},
     {"k":"Die Tore","x":"Die Überreste der mechanischen Wunderwerke, mit denen die Zwerge das innere und äußere Tor sowie die Fallgitter öffnen und schließen konnten, sind noch hier, doch nichts funktioniert mehr."},
     {"k":"Zufallsereignis","x":"Würfelt für jedes volle Viertel, das die Spielercharaktere hier verbringen, W4+4 auf der Tabelle auf S. 40 (nur die Zufallsereignisse 7 und 8 können eintreten)."},
     {"k":"Norden","x":"Gewundene Steintreppe hinunter zu den Karrenständen (Ort 4)."},
     {"k":"Süden","x":"Gewundene Steintreppe hinunter zu den Ställen (Ort 5)."}
    ]}
  ]},
  {id:"mine", t:"Die Mine", karte:{img:"abenteuer/bothild-karte-mine", p:45}, orte:[
   {n:"7", t:"Minentunnel", p:44, pin:[49.4,58.1], wesen:["wasser","bothild-weisser-tod"],
    vl:"Der Tunnel ist kalt, feucht und riecht muffig. Die Decke ist hoch, und winzige Wassertröpfchen bilden einen gespenstischen Dunst, der es schwer macht, weiter als ein paar Meter zu sehen. Zwergische Kunstwerke an den Wänden zeugen von der einstigen Pracht dieses Ortes.",
    st:[
     {"k":"Zufallsereignis","x":"Würfelt für jedes volle Viertel, das die Spielercharaktere hier verbringen, W12 auf der Tabelle auf S. 40."}
    ]},
   {n:"8", t:"Der Glimmerschacht", p:44, pin:[15.3,42.2], wesen:["bothild-geist"],
    vl:"Der Tunnel endet in einem gewölbten Torbogen. Dahinter liegt ein überfluteter Schacht. Eine riesige Kette verläuft von der Decke ins Wasser darunter. Uralte Runen glitzern über dem Torbogen, und über dem Wasser schwebt eine blasse, verschwommene Gestalt, fast als wäre sie Teil des unterirdischen Nebels.",
    st:[
     {"k":"Bothilds Geist","x":"Der Geist langweilt sich furchtbar und beklagt sich bei den Spielercharakteren. Sie sagt auch, dass die Mine verborgene Schätze und ein Teil der Statuette des Drachenkaisers birgt (falls dem so ist), verrät aber nicht, wo, es sei denn, sie rächen zuerst ihren Tod. Haben die Spielercharaktere den Weißen Tod besiegt (und können es beweisen, indem sie eine Trophäe oder Bothilds Axt zurückbringen), verrät sie, wie die Tür zu Bothilds Ruhestätte (Ort 10) geöffnet werden kann (sofern sie sie nicht beleidigt haben). Die Fallen im Mausoleum erwähnt sie jedoch nicht. Bothilds Geist greift die Spielercharaktere an, wenn sie sie zu sehr reizen, verlässt diesen Ort aber nicht."},
     {"k":"Die Runen","x":"Die Runen (§Fremdsprachen§) bilden das Wort „Glimmerschacht“, die reiche Silberader, die viel zu schnell erschöpft war und so indirekt zur Katastrophe führte."},
     {"k":"Süden","x":"Öffnung zu den Minentunneln (Ort 7)."}
    ]},
   {n:"9", t:"Vorkammer", p:44, pin:[77.3,58.1], wesen:[],
    vl:"Die halb überflutete Felskammer wird vom Glitzern der im Wasser gespiegelten Sterne erhellt. Ein stilisiertes Porträt einer Zwergin mit erhobener Axt und einem silbernen Apfel in den Händen ziert eine Steintür, deren Bogen mit glitzernden Runen beschriftet ist. Drei abgetrennte Hände liegen vor der Tür auf dem Boden.",
    st:[
     {"k":"Tür zu Bothilds Ruhestätte","x":"Die Schrift um die Tür lautet „Ehre, Reichtum, Mutter“, was mit §Fremdsprachen§ übersetzt werden kann. Die Axt, der silberne Apfel und Bothild auf dem Porträt sind Druckplatten, die gedrückt werden können, was die Spielercharaktere merken, wenn sie genau das tun (und dabei die Axtfalle auslösen, siehe unten) oder einen Wurf auf §Entdecken§ schaffen. Die Tür ist verschlossen und kann geöffnet werden, indem man die drei Wörter in der geschriebenen Reihenfolge spricht und dabei nacheinander die Reliefs der Axt, des silbernen Apfels und Bothilds selbst drückt."},
     {"k":"Abgetrennte Hände","x":"Die drei Hände befinden sich in unterschiedlichen Stadien der Verwesung. Die älteste ist praktisch mumifiziert. Sie scheinen einem Zwerg, einem Menschen und einem Goblin gehört zu haben."},
     {"k":"Axtfalle","r":1,"x":"*Werden die Platten in der falschen Reihenfolge oder ohne die richtigen Worte gedrückt, löst das eine Axtfalle in der Decke aus. Sie verursacht 2W8 hauenden Schaden, kann aber mit einem gelungenen Wurf auf* §Ausweichen§ *vermieden werden. Die Axtfalle kann mehrfach ausgelöst werden.*"},
     {"k":"Öffnung","r":1,"x":"*Teilweise unter Wasser in der Ostecke des Raums (ein Spielercharakter muss genau diese Stelle ansehen oder auf* §Entdecken§ *würfeln) befindet sich ein großer Riss, durch den Wasser gesickert ist. Er führt zu einem anderen Teil der Minentunnel (Ort 7).*"},
     {"k":"Zufallsereignis","x":"Würfelt für jedes volle Viertel, das die Spielercharaktere hier verbringen, W12 auf der Tabelle auf S. 40."},
     {"k":"Westen","x":"Öffnung zu den Minentunneln (Ort 7)."},
     {"k":"Osten","x":"Steintür zu Bothilds Ruhestätte (Ort 10)."}
    ]},
   {n:"10", t:"Bothilds Ruhestätte", p:45, pin:[84.2,58.2], wesen:[],
    vl:"Es riecht nach Feuchtigkeit, Algen und Leere, als die Tür aufgleitet. In der hinteren Ecke des Raums steht ein Sarkophag aufrecht hinter einem Altar aus weißem Stein mit halb fertigen Runen. Die Zwergin von der Tür ist auch auf dem Deckel des Sarkophags zu sehen. Der Boden besteht aus Fliesen mit stilisierten Mündern, Augen, Händen und Füßen und ist mit Maurerwerkzeug übersät.",
    st:[
     {"k":"Fallen","r":1,"x":"*Bothild wollte ungestört ruhen und füllte ihr Mausoleum daher mit einer Reihe von Fallen, doch nur wenige wurden rechtzeitig fertig.*"},
     {"k":"Pfeilfalle","r":1,"x":"*Die Nord- und die Südwand sind mit einem halben Dutzend Porträts von Bothild geschmückt, bei denen Augen oder Mund Löcher für Pfeile sind. Wer die Wand untersucht, kann die Löcher mit* §Entdecken§ *bemerken. Die Falle wird ausgelöst, wenn jemand auf eine Bodenfliese mit einem Mund oder Auge tritt, und verursacht 2W6 Stichschaden. Den Pfeilen kann (mit einem Nachteil) ausgewichen werden, oder sie können mit einem Schild pariert werden.*"},
     {"k":"Speerfalle","r":1,"x":"*Ein Spielercharakter, der den Altar untersucht, ohne ihn zu berühren, kann auf* §Entdecken§ *würfeln, um zu bemerken, dass sein Sockel beweglich zu sein scheint. Der Altar ist auf einer Achse ausbalanciert. Wird er berührt, kippt er zur Seite, während acht scharfe Speere von allen Seiten des Altars herausschießen. Die Speere verursachen 2W8 Stichschaden bei allen innerhalb von 2 Metern. Der Falle kann (mit einem Nachteil) ausgewichen werden.*"},
     {"k":"Sarkophag","x":"Der Sarkophag, der Bothilds letzte Ruhestätte sein sollte, lässt sich leicht öffnen. Er enthält Schätze im Wert von vier Schatzkarten und ein Teil der Drachenstatuette – falls du entschieden hast, dass es hier sein soll."},
     {"k":"Zufallsereignis","x":"Würfelt für jedes volle Viertel, das die Spielercharaktere hier verbringen, W4+4 auf der Tabelle auf S. 40 (nur die Zufallsereignisse 7 und 8 können eintreten)."},
     {"k":"Westen","x":"Eine reich verzierte Steintür führt hinaus zur Vorkammer (Ort 9)."}
    ]},
   {n:"11", t:"Schmiede", p:46, pin:[80.6,20.7], wesen:["bothild-maladuk","bothild-offiziere","bothild-goblins"],
    vl:"Ein Ziegelofen, bedeckt mit glitzernden Runen, reicht vom Boden bis zur Decke und verbreitet sein Licht in der gewaltigen Berghalle. Es riecht nach verbranntem Fleisch und Haar. Mitten im Raum, um eine Lore versammelt, streitet eine Gruppe Orks heftig.",
    st:[
     {"k":"Maladûk","x":"Der Orkhäuptling bespricht gerade mit ihren Offizieren Uth-Kardan und Kothatuk ihren nächsten Schritt. Die drei werden von Goblin-Spähern beschützt, so vielen wie Spielercharakteren."},
     {"k":"Die Wildschweine","x":"Die Orks braten ein Wildschwein im Ofen, und zwei weitere hängen daneben. Die Wildschweine wären ein guter Köder für den Weißen Tod."},
     {"k":"Südwesten","x":"Eine Höhlenöffnung führt hinaus in die Minentunnel (Ort 7)."},
     {"k":"Norden","x":"Eine große Höhlenöffnung führt hinaus zu einer verborgenen Spalte im Kummergebirge. Hier sind Maladûk und ihre Männer eingetreten."}
    ],
    b:[
     {"h":"Maladûk treffen"},
     "Ob die Spielercharaktere allein oder in Begleitung von Goblins erscheinen – Maladûk und ihre Untergebenen reagieren, indem sie ihre Waffen ziehen. Sie wollen wissen, wer die Charaktere sind und was sie hier tun. Maladûk ist sehr misstrauisch, und es braucht einen Wurf auf §Überzeugen§, um sie zu besänftigen.",
     "Gelingt der Wurf, kann man mit Maladûk reden. Suchen die Charaktere die Drachenstatue und erklären das Maladûk, schlägt sie ein Bündnis gegen Azrahel Koth vor.",
     "Der Orkhäuptling kann ihnen von Bothilds Geist in Raum 8 und der Vorkammer (Ort 9) ihres Grabes erzählen, falls die Charaktere noch nicht dort waren, und sie vor dem Weißen Tod warnen. Maladûk kann ihnen auch die Legende von Um-Durman (S. 9) erzählen und Gerüchte über mehrere Abenteuerorte weitergeben, an denen sich Teile der Drachenstatuette befinden könnten. Ein Bündnis mit Maladûk kann sich auch im Endkampf gegen Azrahel Koth als nützlich erweisen – mehr dazu auf S. 115.",
     "Misslingt der Wurf, verlangt Maladûk, dass die Spielercharaktere ihre Waffen ablegen und sich zur weiteren Befragung gefangen nehmen lassen, was sehr wohl in Gewalt enden kann. Lassen sich die Charaktere verhören und antworten wahrheitsgemäß, können sie in jedem Tagesabschnitt einen weiteren Versuch unternehmen, Maladûk mit §Überzeugen§ zu besänftigen. Während des Verhörs dürfen die Spielercharaktere weder ruhen, schlafen noch essen und erleiden in jedem Tagesabschnitt einen Zustand.",
     "Für den unwahrscheinlichen Fall, dass die Spielercharaktere Maladûk töten, haben sie einen wichtigen potenziellen Verbündeten verloren. Die Orks des Nebeltals zersplittern dann in viele kleinere, einander befehdende Clans, von denen viele einen glühenden Hass gegen Maladûks Mörder hegen …",
     {"h":"Keine Kampagne?"},
     "Spielst du *Bothilds Ader* als eigenständiges Abenteuer ohne Verbindung zur Kampagne *Das Geheimnis des Drachenkaisers*, sind Maladûk und ihr Gefolge einfach nach Bothilds Ader gekommen, um ihren verborgenen Schatz zu beanspruchen. Sie sind nicht erpicht darauf, ihn zu teilen."
    ]}
  ]}
 ],
 figuren:{
  "bothild-weisser-tod":{"typ":"monster","t":"Der Weiße Tod","p":41,"tp":56,"werte":[["Grimmigkeit","2"],["Größe","Groß"],["Bewegung","18 (im Wasser)"],["Rüstung","3"],["TP","56"]],"zl":[["Schwanz","Verursacht ein Angriff auf den Schwanz des Weißen Todes (mit einem Nachteil gewürfelt) Blut (verursacht mindestens einen Punkt hauenden oder stechenden Schaden), würfelt W6, sobald die Seeschlange angreifen will. Bei 4–6 trifft das Ungeheuer sich selbst statt eines Spielercharakters. Ein Wurf auf §Tierkunde§ kann den Spielercharakteren diese Schwachstelle von Seeschlangen bewusst machen."]],"text":["Eine totenbleiche, grobschuppige Seeschlange mit dickem, breitem Körper und einem flachen Kopf mit milchigen Augen und drei gekrümmten Hörnern. Das Ungeheuer taucht lautlos aus dem Wasser auf, bevor es ein schreckliches, kehliges Gebrüll ausstößt, das nach Jahrhunderten des Todes stinkt, während es angreift. Der Weiße Tod kann an die Oberfläche gelockt werden, indem man eine geeignete Beute ins Wasser lässt.","In seinem Bauch ruht Bothilds meisterhaft gefertigte Streitaxt, Bothilds Breitaxt (STÄ-Anforderung 10, Haltbarkeit 12), verziert mit Runen, die von den Taten ihrer Besitzerin berichten."],"angriffe":{"h":"Monsterangriffe","w":"W6","rows":[
   ["1","**Schwanzhieb!** Die Seeschlange schlägt mit dem Schwanz nach einem Spielercharakter innerhalb von 10 Metern. Der Angriff verursacht 2W8 wuchtigen Schaden und wirft das Opfer zu Boden."],
   ["2","**Verschlingen!** Das Ungeheuer verschlingt den Spielercharakter mit der höchsten STÄ und verursacht 2W6 Schaden. Der Spielercharakter kann die Seeschlange von innen weiter angreifen, wo sie keinen Rüstungswert hat. Doch für jede Runde im Bauch des Ungeheuers erleidet das Opfer in seinem Zug W6 Schaden (Rüstung wirkt nicht). Das Opfer kommt frei, sobald das Monster tot ist."],
   ["3","**Wilder Biss!** Der Weiße Tod beißt einen Spielercharakter mit seinen rasiermesserscharfen Zähnen. Der Angriff verursacht 3W8 hauenden Schaden."],
   ["4","**Ertränken!** Die Seeschlange zieht einen Spielercharakter in die Tiefe, und das Opfer beginnt sofort zu ertrinken, nach Regelbuch S. 53. Der Spielercharakter kann sich nicht bewegen oder Aktionen ausführen, die Körperbewegung erfordern, außer zu versuchen, sich zu befreien, was einen STÄ-Wurf mit einem Nachteil erfordert. Andere können helfen."],
   ["5","**Vernichtender Schlag!** Das Ungeheuer erhebt sich hoch über das Wasser und lässt seinen schweren Körper auf bis zu zwei Spielercharaktere innerhalb von 10 Metern fallen. Beide Opfer erleiden 2W6 wuchtigen Schaden und werden zu Boden geworfen."],
   ["6","**Umschlingen!** Der Weiße Tod schlingt seinen Schwanz um einen Spielercharakter innerhalb von 10 Metern und versucht, ihm das Leben auszupressen. Der Angriff verursacht 2W6 wuchtigen Schaden und zusätzlich 2W6, wann immer das Opfer an der Reihe ist. Das Opfer kann sich nicht bewegen oder Aktionen ausführen, die Körperbewegung erfordern, außer zu versuchen, sich zu befreien, was einen STÄ-Wurf mit einem Nachteil erfordert. Andere können helfen."]
  ]}},
  "bothild-goblins":{"typ":"monster","t":"Die Goblins","p":43,"werte":[["Bewegung","10"],["Schadensbonus","–"],["TP","9"]],"zl":[["Rüstung","Leder (1)"],["Fertigkeiten","Wahrnehmung 10, Ausweichen 10, Heimlichkeit 12"],["Waffen","Kurzbogen (Fertigkeitswert 12, Schaden W10), Kurzschwert (Fertigkeitswert 10, Schaden W10)"]],"text":["Die Goblin-Späher sind schnatternde, hässliche Kreaturen mit stinkendem Atem und schlecht sitzenden Lederrüstungen. Sie alle tragen Maladûks schwarzes Mal auf der rechten Schulter."]},
  "bothild-warge":{"typ":"monster","t":"Warge","p":43,"werte":[["Grimmigkeit","1"],["Größe","Normal"],["Bewegung","20"],["Rüstung","–"],["TP","18"]],"zl":[],"text":[],"angriffe":{"h":"Monsterangriffe","w":"W6","rows":[
   ["1–2","**Gieriges Heulen!** Der Warg stößt ein gieriges Heulen aus. Alle Spielercharaktere innerhalb von 10 Metern müssen einen WIL-Wurf machen, um der Furcht zu widerstehen."],
   ["3–4","**Sprung!** Der rasende Warg springt einen Spielercharakter an und drückt ihn zu Boden. Der Angriff verursacht 2W8 wuchtigen Schaden."],
   ["5–6","**Wargbiss!** Der Warg packt das Opfer mit seinem geifernden Maul und schleudert es hin und her. Der Angriff verursacht 2W10 stechenden Schaden, und das Opfer wird 2W4 Meter weit geschleudert und landet am Boden liegend."]
  ]}},
  "bothild-geist":{"typ":"monster","t":"Bothilds Geist","p":44,"img":"abenteuer/bothild-geist","be":"geist","werte":[],"zl":[],"text":["Der Geist ist ein verschwommenes Echo des Augenblicks von Bothilds Tod im Rachen des Weißen Todes. Die klaffende Wunde zwischen Hals und Schulter zieht alle Aufmerksamkeit von anderen Einzelheiten ab, etwa dem kurzen, strähnigen Haar, dem rasiermesserscharfen Pony und den rattenschwanzartigen Schläfenzöpfen. Sie hat sich außerdem eine raue, zischende Stimme für dramatische Wirkung zugelegt. Sie hasst Orks und Goblins zu sehr, um jemals ihr Geheimnis mit ihnen zu teilen.","Bothild hat die Werte eines Geistes nach Regelbuch S. 87."]},
  "bothild-maladuk":{"typ":"nsc","t":"Maladûk","p":46,"img":"abenteuer/bothild-maladuk","tp":24,"werte":[["Bewegung","12"],["Schadensbonus STÄ","+W6"],["TP","24"],["WP","15"]],"zl":[["Rüstung","Kettenhemd (4)"],["Fertigkeiten","Wahrnehmung 16, Raufen 14, Ausweichen 14"],["Talente","Defensiv, Robust × 4, Veteran"],["Waffen","Langspeer (Fertigkeitswert 16, Schaden 2W8)"]],"text":["Die breitkiefrige, noch breitschultrigere Maladûk ist mit ihren großen Fangzähnen und den zahlreichen Trophäen besiegter Feinde, die ihren Körper bedecken, ein beeindruckender Anblick. Sie bemalt sich in tiefen Rottönen und spricht mit einer Ruhe, die ihre Entschlossenheit und explosive Brutalität verbirgt."]},
  "bothild-offiziere":{"typ":"nsc","t":"Offiziere","p":46,"werte":[["Bewegung","10"],["Schadensbonus STÄ","+W6"],["TP","16"]],"zl":[["Rüstung","Beschlagenes Leder (2)"],["Fertigkeiten","Wahrnehmung 12, Ausweichen 10"],["Waffen","Krummsäbel (Fertigkeitswert 14, Schaden 2W6)"]],"text":[]}
 },
 kaesten:{
  "wasser":{"k":"Das Wasser in der Mine","p":40,"b":[
   "Große Teile der Mine sind mit Wasser gefüllt, was dem Weißen Tod freie Bewegung erlaubt. Es schränkt auch die Bewegungen der Spielercharaktere ein und schafft taktische Herausforderungen. Da das Wasser eiskalt ist, müssen die Spielercharaktere für jedes Viertel, das sie darin verbringen, einen Wurf auf §Wildniskunde§ machen, um der Kälte zu widerstehen (Regelbuch S. 54). Das Wasser hat drei verschiedene Tiefen, die auf der Karte angegeben sind.",
   {"ul":["**Flaches Wasser:** Hier reicht das kalte Wasser den Spielercharakteren höchstens bis zur Brust. Sprinten ist unmöglich, sonst können sie sich aber normal bewegen.","**Tiefes Wasser:** Die Spielercharaktere müssen schwimmen, um es zu durchqueren. An manchen Stellen können sie den Grund sehen. Siehe die Regeln für Schwimmen und Ertrinken auf Regelbuch S. 53.","**Bodenloses Wasser:** Unter der Oberfläche ist kein Grund zu sehen – nur Dunkelheit. Kann nur schwimmend durchquert werden."]}
  ]}
 },
 tabellen:[
  {"id":"ereig","h":"Zufallsereignisse","strip":"Zufallsereignisse · W12","p":40,"einl":"Für jedes Viertel, das die Spielercharaktere in einem Raum verbringen, ihn durchsuchen oder eine Kurze Rast einlegen, kannst du auf der folgenden Tabelle würfeln. Die Raumbeschreibungen geben an, wo Zufallsereignisse stattfinden können und mit welchem Würfel gewürfelt wird. Du kannst auch einfach ein passendes Ereignis wählen.","cols":["W12","Ereignis"],"rows":[
   ["1–6","**Nichts geschieht.**"],
   ["7","**Klirrendes Kettenhemd.** Das unverkennbare Klirren eines Kettenhemds ertönt plötzlich aus einer dramatisch passenden Richtung. Es sind Echos aus der Zeit, als Zwerge die Höhlen bewohnten. Alle Spielercharaktere müssen einen WIL-Wurf machen, um der Furcht zu widerstehen."],
   ["8","**Zwergengeister.** Die Spielercharaktere spüren einen kalten Hauch im Nacken und hören schwache Stimmen, die kaum hörbar in einem alten zwergischen Dialekt flüstern. Alle Spielercharaktere müssen einen WIL-Wurf machen, um der Furcht zu widerstehen. Wem er gelingt, kann auf §Fremdsprachen§ würfeln, um Satzfetzen wie „hilf mir“, „ich sinke“, „Luft“ und „Weißer Tod“ zu verstehen."],
   ["9","**Kaskade.** Ein Knacken ist in der Felswand zu hören, die Augenblicke später in einer Kaskade aus Stein und Wasser aufbricht, die einen Spielercharakter trifft. Das Opfer muss einen Wurf auf §Ausweichen§ machen – bei einem Fehlschlag erleidet es 2W6 wuchtigen Schaden und muss einen Wurf machen, um der Kälte zu widerstehen (Regelbuch S. 54)."],
   ["10","**Lockruf des Wassers.** Unter der Wasseroberfläche ist ein wunderschönes Licht zu sehen. Alle Spielercharaktere müssen einen WIL-Wurf machen, um sich nicht kopfüber ins Wasser locken zu lassen. Unter Wasser müssen die Opfer die Luft anhalten, um nicht zu ertrinken (Regelbuch S. 53). Der Zauber endet, wenn das Opfer mindestens 1 TP verliert."],
   ["11","**Einsturz.** Ein Teil des Bodens verschwindet unter den Füßen eines Spielercharakters. Es braucht einen gelungenen Wurf auf §Ausweichen§, um nicht vom wirbelnden Wasser fortgerissen zu werden und in einem anderen Raum zu landen – die SL entscheidet, in welchem."],
   ["12","**Der Weiße Tod.** Plötzlich bricht der Weiße Tod aus dem Wasser, führt einen Monsterangriff gegen einen Spielercharakter aus und verschwindet wieder in den Tunneln."]
  ]}
 ]
};
