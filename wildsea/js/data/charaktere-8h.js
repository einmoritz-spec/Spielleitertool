/* Charaktere · Posten Surgeon, Tempest (Corebook S. 156–159) */
(function(L){ var H = WSH, K = "Posten", A = H.asp;
L.push({id:"surgeon", k:K, t:"Surgeon", p:156, b:[
 {a:"Experten für zersplitterte Knochen und gespaltene Pflanzenmasse; nur wenige lehnen ihre Dienste draußen auf den Wellen ab.\nDer Surgeon vereint die Fähigkeiten eines traditionellen Hafenarztes, eines Therapeuten, eines Forschungsgelehrten und eines Metzgers in einem schrecklichen Paket. Als Experte im Flicken gebrochener Teile und im Heilen von Krankheiten sorgt der Posten des Surgeons an Bord eines Schiffs dafür, dass du überall willkommen bist, wo du landest – niemand will den beleidigen, der ihm in Zukunft das Leben retten könnte.\nHafen-Surgeons trainieren lange Jahre in dem, was in der nachverdanten Welt als Hallen der Akademie durchgeht … aber Surgeons auf Schiffsposten müssen im Dienst lernen."},
 {c:"Es wird nicht schön", x:"Die Wildsea ist eine Welt aus Schmerzen und Narben, unvollkommener Heilung und alten Brüchen. Surgeons tun, was sie können, um die Flut vergossenen Bluts und gebrochener Knochen einzudämmen, aber oft müssen sie mit ungenauen Materialien und unter schwierigen Umständen arbeiten. Wenn du auf See eine schwere Verletzung erleidest, ist die Chance groß, dass sie eine Narbe hinterlässt.\nZum Glück für die durchschnittliche Crew hat der bleibende Anblick vergangener Traumata wenig mit der Qualität der erhaltenen Versorgung zu tun. Wer mit Narben lebt, konzentriert sich eher auf das „Leben“ als auf die „Narbe“, und dieses Erste verdankt sich fast immer der Behandlung eines überarbeiteten Surgeons."},
 {c:"Medizinische Materialien", x:"Für manche Leiden braucht es wenig mehr als eine kräftige Schüssel heißes Essen und einen Tag Ruhe, aber die Wildnis ist nichts, wenn nicht erfinderisch – seltsamere Verletzungen verlangen seltsamere Heilmittel. Viele Surgeons halten ihre Krankenstationen mit Schienen, Verbänden, heilenden Moosen und gerinnungsfördernden Blättern, Kräutern, um einen Geist zur Wachheit zu schocken, und Blutegeln, um crezzer-getränktes Blut auszuleiten, gut bestückt. Viele der Standardbehandlungen des Surgeons beruhen auf Proben, die aus den Wellen selbst gesammelt werden, sodass viele recht geschickt darin werden, solche Dinge auf ihren Reisen aufzuspüren."},
 H.fragen("des Surgeons",["Was ist die schlimmste Verletzung, die du behandelt hast, und hat dein Patient überlebt?","Warst du je gezwungen, dich selbst zu operieren, mit oder ohne Betäubung oder Hilfe von Crewkameraden? Wenn ja, was geschah?","Bist du der Typ, der mögliche Leiden studiert und erforscht, um vorbeugende Medizin zu entwickeln, oder reagierst du nur auf die Probleme direkt vor dir?"]),
 {c:"Alternative Darstellungen", x:"Die vielleicht schrecklichste Darstellung des Surgeons ist die als letzter Ausweg, der begeisterte Amateur, der das Beste ist, was du bekommst, solange du von einem freundlichen Hafen fern bist. Für eine weniger beunruhigende Auffassung wären ein Apotheker der Wildnis oder ein Biologieforscher eine gute Wahl."}
 ].concat(H.aspHead(),[
 A("Erste Hilfe",3,"Eigenschaft","Wenn ein naher Verbündeter Schaden nimmt, reiße den Fokus an dich, um sofort einen Punkt dieses Schadens zu heilen (einmal pro Szene)."),
 A("Sich entwickelnde Techniken",3,"Eigenschaft","Erhöhe die Wucht beim Heilen anderer in sicherer, stabiler Umgebung."),
 A("Die Grenzen der Crew",4,"Eigenschaft","Markiere, damit ein Crewkamerad für die Dauer einer Szene von einer voll markierten Eigenschaft oder einem voll markierten Gefährten profitiert."),
 A("Biologischer Maestro",3,"Eigenschaft","Wähle eine Blutlinie. Beim Heilen eines Mitglieds dieser Blutlinie behandle Konflikt-Ergebnisse als Triumphe."),
 A("In Ermangelung von Journalen",3,"Eigenschaft","Du erhältst ein Flüstern, wann immer sich ein Crewkamerad vollständig von einer Verletzung erholt."),
 A("Theoretiker der Wildnis",4,"Eigenschaft","Verbrauche ein Flüstern, um die Eigenschaften einer rätselhaften Krankheit oder Verletzung zu erkennen."),
 A("Wachsamkeit",2,"Eigenschaft","Du schrubbst, reinigst und entsporst Oberflächen regelmäßig. Wann immer du oder jemand aus deiner Crew eine Verletzung erleidet, verringere die Verletzungsleiste um ein Kästchen."),
 A("Unablässiges Pflegen",3,"Eigenschaft","Du kannst eine Aufgabe nutzen, um an der Heilung von bis zu drei Eigenschaften, Verletzungen oder Gefährten gleichzeitig zu arbeiten."),
 A("Leviathanblut-Infusion",3,"Ausrüstung","Schwer zu bekommen, aber furchterregend wirksam. Brenne, um dir oder einem Crewkameraden für die Dauer einer Szene Widerstand gegen allen Schaden oder für die Dauer einer Szene erhöhte Wucht bei allen Angriffen zu geben."),
 A("Kräuter-Siegelwachs",3,"Ausrüstung","Eine seltsam riechende Salbe zum Verstreichen an den Türöffnungen eines Schiffs, selbstverständlich großzügig verteilt. Erhöhe die Dichtung deines Schiffs um eins, solange du an Bord bist."),
 A("Gewürznasen-Maske",2,"Ausrüstung","Du bist immun gegen Krankheiten und widerstehst den Wirkungen schlechter Luft und Sporen in der Luft."),
 A("Treue Arzttasche",2,"Ausrüstung","Markiere, um eine von drei Ressourcen zu erhalten: Hungrige Blutegel, Schlaftrunk oder Heilkräuter."),
 A("Chirurgenbrille",3,"Ausrüstung","Markiere, um eine Schwachstelle oder Schwäche eines Ziels zu erkennen."),
 A("Knochensäge",4,"Ausrüstung","Funktioniert bei Feinden ebenso gut wie bei Patienten. Verursacht NK-Säge-Schaden."),
 A("Flüsterspuck-Blutegel",2,"Gefährte","Markiere Morast, um die Unwahrheit aus einer Aussage zu saugen und die Wahrheit dahinter zu hören. Du erhältst ein Flüstern, das auf den herausgezogenen Lügen beruht.")
 ],H.kit("Surgeon als Posten",[
  ["Stärke (wähle 1)","Eisen, Schärfe, Gezeiten"],
  ["Fertigkeiten & Sprachen (wähle 5) – Fertigkeiten","Zusammenbrauen, Hacken, Ernten, Rasseln, Studieren, Beeinflussen, Pflegen"],
  ["Fertigkeiten & Sprachen – Sprachen","Chthonisch, Gaudimm, Saprekk, Knock"],
  ["Ressourcen (wähle 2) – Bergegut","Makellose Verbände, Eiserne Beinschiene"],
  ["Ressourcen – Proben","Heilkräuter, Franzbranntwein"],
  ["Ressourcen – Flüstern","Wie Knochen heilen, Eine Narbe, die nie verblasst"],
  ["Ressourcen – Seekarten","Wegbeschreibung zu einer Praxis"],
  ["Antrieb (wähle 1)","Das Heilmittel für ein bislang unheilbares Leiden ergründen · Ein Verfahren nach dir benannt bekommen"],
  ["Morast (wähle 1)","Deine Hände zittern unter Druck · Alkohol ruft dich in deinen dunkleren Momenten"]]),
 [H.q("Ob ich Spezialist bin? Nun, sagen wir so: Nur ein Crewmitglied außer mir hat Blut, eins ist aus Holz und eins aus Spinnen. Was meinst du?","Betse Lora, Ardent-Surgeon")])});
L.push({id:"tempest", k:K, t:"Tempest", p:158, b:[
 {a:"Dein Blut knistert vor Funken, dein Herz schlägt Donner.\nDie wilde Kraft eines Sturms zu verinnerlichen ist keine kleine Leistung, aber nicht unmöglich – entweder durch technische Anwendung oder obskure arkonautische Methoden haben Tempests es geschafft, die Essenz des Blitzes in sich einzubetten.\nSolch rohe Kraft zu halten ist selbst für die Disziplinierten schwer, und viele finden sich als Opfer wilder Stimmungen und schlafloser Nächte wieder, während Donner durch ihren Geist streift. Nur die hingebungsvollsten Tempests schaffen es, die gefährliche, tödliche Ruhe von sich am Horizont ballenden Gewitterwolken zu verkörpern."},
 {c:"Ein Fragment Sturm", x:"Der häufigste Weg, ein Tempest zu werden, ist, einen lebenden Sturm aufzuspüren und etwas von seinem Blitz für sich zu fangen, aber es ist bei weitem nicht der einzige. Manche Tempests durchbohren sich mit den Stacheln eines Eisenkiefer-Rochens, züchten Kolonien voltaischen Mooses entlang ihrer Arme oder freunden sich mit einem stark elektrischen Wildsea-Geschöpf an, um sich seine Kraft zu leihen. Welche Methode es auch genau ist, eine Tatsache gilt in allen Fällen – der eigene Körper des Tempests ist der Wirt seiner Kraft."},
 {c:"Blitz ohne Donner", x:"… Nun, fast in allen Fällen. Es ist äußerst selten, aber es gibt Tempests auf den Wellen, deren Beherrschung der Elektrizität rein aus technischen Mitteln stammt (als Folge von Unfall, Bemühung oder Selbstexperiment). Diese künstlichen Tempests ähneln in ihrem Ansatz zur Kunst oft eher Rattlehands und behandeln Spannung als Ressource zum Fertigen und Reparieren statt als Quelle von Kampfkraft, doch sind sie nicht weniger mächtig als ihre sturmgebluteten Verwandten."},
 H.fragen("des Tempests",["Wie hast du die Kraft der Stürme erlangt? Durch Diebstahl, Alchemie, Verletzung oder eine andere Wildsea-Seltsamkeit?","In welchem Maß hast du den Blitz in dir unter Kontrolle? Auf welche Weisen, wenn überhaupt, hast du ihn unbeabsichtigt freigesetzt?","Schwingst du mit der Welt um dich mit, und wenn ja, wie äußert sich das? Kriechende Funken, fehlzündende Motoren, sich weit oben zusammenziehende Wolkenstreifen?"]),
 {c:"Alternative Darstellungen", x:"Die einfachste nicht standardmäßige Auslegung des Tempests ist die eines Elementar-Magiers, eines Magier-Typs mit Macht über Blitze, allein aus Training gezogen. Alternativ können die Tempest-Aspekte mechanisch an andere Wildsea-Schadensarten angepasst werden – etwa ein arkonautischer Frost-Anwender oder sogar (und das ist definitiv nicht zu empfehlen) Flamme."}
 ].concat(H.aspHead(),[
 A("Sturmschritt",4,"Eigenschaft","Markiere, um kurzzeitig zu schweben, während Elektrizität um dich knistert."),
 A("Der Puls",3,"Eigenschaft","Du kannst nahe elektrische Felder spüren, etwa die von lebenden Organismen erzeugten."),
 A("Blitzwechsel",3,"Eigenschaft","Markiere, um sofort den Platz mit einem willigen Crewkameraden in Sichtweite zu tauschen, oder brenne, um mit ihm zu tauschen und gleichzeitig den Fokus an dich zu reißen."),
 A("Alter Pakt",3,"Eigenschaft","Nutze eine Aufgabe und markiere, um einen Sturm zu beruhigen oder zu vertreiben, oder nutze eine Aufgabe und brenne, um einen zu beschwören."),
 A("Die Himmel stimmen zu",4,"Eigenschaft","Erhöhe die Wucht beim Verursachen von Strom- oder Explosions-Schaden bei einem elektrischen Sturm oder Starkregen."),
 A("Donnerton",3,"Eigenschaft","Du kannst deine Stimme zu einem ohrenbetäubenden Schrei erheben, der NK-Explosions-Schaden verursacht und über weite Entfernungen leicht zu hören ist."),
 A("Ruf des Blitzes",3,"Eigenschaft","Du kannst Stöße voltaischer Energie durch deine Handflächen oder Finger lenken und FK-Strom-Schaden verursachen."),
 A("Ground-Zero-Überlastung",1,"Eigenschaft","Markiere, um allen nahen Feinden Strom-Schaden zuzufügen, oder brenne, um ihn zu massivem Strom-Schaden zu steigern."),
 A("Eisenkiefer-Siebensaiter",5,"Ausrüstung","Ein gitarrenartiges Instrument, geschnitzt aus den Knochen eines Eisenkiefer-Rochens. Erzeugt beim Spielen einen harten, summenden Ton, der bei manchen den Geist der Rebellion zu wecken scheint."),
 A("Maschenrelais",3,"Ausrüstung","Verursache Strom-Schaden an jedem Geschöpf, das dich im Nahkampf mit dem eigenen Körper angreift (etwa mit Schwanz- oder Bissangriffen)."),
 A("Voltomotive Schnittstelle",3,"Ausrüstung","Du kannst als zusätzlicher (oder Haupt-)Motor deines Schiffs fungieren und seinen Biss allein durch deine Anwesenheit antreiben. Erhöhe das Tempo deines Schiffs um eins, solange du an Bord bist."),
 A("Voltaische Laterne",3,"Ausrüstung","Eine einfache Lichtquelle, die von deiner eigenen inneren Ladung läuft. Markiere, um eine nahe Elektrizitätsquelle zu entleeren und in die Laterne aufzunehmen, für ein helleres Leuchten."),
 A("Versengter Mantel",3,"Ausrüstung","Du bist widerstandsfähig gegen drei Schadensarten, gewählt aus dieser Liste: Frost, Flamme, Salz, Explosion, Strom."),
 A("Innere Batterie",4,"Ausrüstung","Markiere, um eine Maschine anzuwerfen, eine entladene Energiequelle aufzuladen oder die Leistung eines Motors vorübergehend zu steigern."),
 A("Sturmkätzchen",2,"Gefährte","Eine kleine, verspielte Katze aus brodelnden Sturmwolken. Gibt deiner gesamten Crew Widerstand gegen Strom-Schaden."),
 A("Funken-Aal",4,"Gefährte","Windet sich um Glieder und unter Kleidung, immer in Bewegung. Markiere, um die nächste Quelle mächtiger Elektrizität zu erkennen, egal wie weit entfernt.")
 ],H.kit("Tempest als Posten",[
  ["Stärke (wähle 1)","Anmut, Schärfe, Zähne"],
  ["Fertigkeiten & Sprachen (wähle 5) – Fertigkeiten","Zerschlagen, Glänzen, Überlisten, Rasseln, Bergen, Spüren, Springen"],
  ["Fertigkeiten & Sprachen – Sprachen","Alte Hand, Signalgebung"],
  ["Ressourcen (wähle 2) – Bergegut","Keramikbatterie"],
  ["Ressourcen – Proben","Phosphoreszierender Käfer"],
  ["Ressourcen – Flüstern","Die Ruhe davor, Im Blut"],
  ["Ressourcen – Seekarten","Ein skizzierter Blitzeinschlag"],
  ["Antrieb (wähle 1)","Mit einem lebenden Sturm auf Augenhöhe kommunizieren · Eine Katastrophe abwenden, indem man eine andere verursacht"],
  ["Morast (wähle 1)","Funken sprühen wie Feuerräder von dir, wenn du dich bewegst · Deine Stimme ist Donner, unmöglich unter ein Schreien zu senken"]]),
 [H.q("Man sollte so eine Kraft nicht auf die leichte Schulter nehmen. Sie verändert dich auf Weisen, auf die du nicht vorbereitet bist. Ich war es jedenfalls nicht.","Ropperly, Ketra-Tempest")])});
})(WS_NACH.charaktere);
