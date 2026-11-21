/* Charaktere · Posten Corsair, Crash (Corebook S. 132–135) */
(function(L){ var H = WSH, K = "Posten", A = H.asp;
L.push({id:"corsair", k:K, t:"Corsair", p:132, b:[
 {a:"Kämpfer, beauftragt, ihre Schiffe vor den zahllosen Gefahren der See zu schützen.\nVon jedem Wildsegler wird erwartet, in einer Krise zu den Waffen greifen zu können, doch der Corsair erhebt den Kampf zur Kunstform. Beauftragt, ihr Schiff im Nahkampf zu schützen, konzentrieren sie ihr Training oft auf Klingen, Hämmer und Äxte.\nDie meisten Corsairs folgen der uralten Weisheit, dass die beste Verteidigung ein starker und strafender Angriff ist. Es ist nicht ungewöhnlich, dass sie mitten im Kampf zwischen einer Mischung esoterischer Kampfstile und akrobatischer Kunststücke wechseln, um ihre Feinde aus dem Gleichgewicht und unter Druck zu halten."},
 {c:"Pragmatische Eleganz", x:"Ob über peitschende Äste, bröckelnde Ruinen oder das rollende Deck eines Schiffs mitten im Kampf: Die meisten Corsairs sind ständig in Bewegung. Zwar gibt es solche, die sich mit bergegut-gehämmerter Rüstung und schwereren Waffen beschweren, doch sie sind eine extreme Minderheit – die ständige Gefahr eines unerwarteten Sturzes in die Wellen ist ein starker Antrieb, wendig zu bleiben."},
 {c:"Das Handwerkszeug", x:"Da Corsairs ihren Platz in einer Crew meist durch die Bereitschaft und Fähigkeit zu Gewalt verdienen, sind die Waffen, die sie tragen, von höchster Bedeutung. Ergebene, verlässliche Waffenschmiede sind über die Wellen hinweg selten, daher ist für viele Corsairs ihr erster „Initiationsritus“ die Herstellung eines Werkzeugs, das ihren Zwecken entspricht, oder eines ganzen Arsenals.\nSäbel und Entermesser sind bei Klingen die offensichtliche Wahl, gewählt wegen leichter Handhabung und (manchmal) eines Gefühls, die alten Salzsee-Vermächtnisse fortzuführen, von denen die ältesten Ektus munkeln. Hämmer und Äxte sind eine weitere gute Wahl, nützlich zum Durchbrechen von Türen und Verteidigungen. Speere werden selten genutzt, eher als Jägerwaffe gesehen, und Dolche (obwohl nützlich bei einer Kneipenschlägerei) haben nur begrenzte Wirkung auf viele der wilderen Geschöpfe der See."},
 H.fragen("des Corsairs",["Woher stammen deine Waffen? Handel, Erbe oder lange Stunden Mühe?","Was tust du in deiner Freizeit, um scharf zu bleiben oder den Rest deiner Crewkameraden zu lehren, sich wirksamer zu verteidigen?","Welche Feinde hast du dir bei Zusammenstößen mit anderen Schiffen gemacht – erinnern sie sich an dich, und wenn ja, woran?"]),
 {c:"Alternative Darstellungen", x:"Angesichts der wechselhaften Natur von Wildsea-Allianzen und -Schicksalen könnte ein Corsair ebenso gut ein geläuterter Pirat oder Marodeur sein wie jemand, der darin ausgebildet wurde, sich gegen sie zu verteidigen. Für eine klassischere Fantasy-Version könnte die Verbindung der Fähigkeiten des Corsairs mit einer Dosis schwererer Rüstung zu einem effektiven Ritter- oder Paladin-Charakter führen."}
 ].concat(H.aspHead(),[
 A("Stahlschritt-Tanz",5,"Eigenschaft","Der Schlüssel zum Überleben ist Beweglichkeit. Sie können dir nicht wehtun, wenn sie dich nicht treffen können."),
 A("Stampf-Samba",5,"Eigenschaft","Der Schlüssel zum Überleben ist Standfestigkeit. Du kannst alles einstecken, was sie dir zuwerfen, und stehen bleiben."),
 A("Schmutziger Kämpfer",3,"Eigenschaft","Konflikte zählen als Triumphe, wenn du versuchst, Gegner zu Fall zu bringen, niederzuschlagen, zu blenden oder zu betäuben."),
 A("Chirurgischer Schlag",3,"Eigenschaft","Du kannst Angriffe präzise anvisieren (etwa beim Zielen auf eine Schwachstelle), ohne Abzug für Schwierigkeit."),
 A("Können",4,"Eigenschaft","Markiere, um die Wucht bei Nahkampf-Angriffen zu erhöhen."),
 A("Gefahrensinn",4,"Eigenschaft","Markiere, um den Fokus von einer Falle oder einem Hinterhalt zu reißen, wenn sie ausgelöst wird."),
 A("Kettenangriff",4,"Eigenschaft","Du kannst mit einem erfolgreichen NK-Angriff mehreren nahen Gegnern Schaden zufügen."),
 A("Narben, die Geschichten erzählen",4,"Eigenschaft","Markiere, um ein Flüstern zu erhalten, das auf Schaden oder einer Verletzung beruht, die du gerade genommen hast, geliefert vom Glühwürmchen."),
 A("Schützendes Leuchtfeuer",5,"Ausrüstung","Konflikte zählen als Triumphe, wenn du versuchst zu verhindern, dass einem Mitglied der Unterbesatzung Schaden zugefügt wird."),
 A("Berserker",4,"Eigenschaft","Du bist im Kampf immun gegen Morast oder jeden Morast, der durch das Miterleben von Gewalt verursacht würde."),
 A("Blitzpulver-Beutel",4,"Ausrüstung","Schüttle sanft, um vorübergehendes Fackellicht zu erzeugen, oder markiere, um einen blendenden Blitz zu erzeugen."),
 A("Säbel des Corsairs",4,"Ausrüstung","Eine klassische Wildsea-Klinge. Verursacht NK-Scharf-Schaden."),
 A("Enteraxt",2,"Ausrüstung","Eine wilde Waffe zum Durchhacken von Feinden. Verursacht NK-Hieb-Schaden. Erhöhe die Wucht beim Angreifen von Schiffen, Objekten und Bauwerken."),
 A("Schleuderhammer",3,"Ausrüstung","Ein vielseitiger Gewichtshammer mit Stoffleine. Verursacht Stumpf-Schaden im NK oder FK."),
 A("Wurfmesser",3,"Ausrüstung","Perfekt ausgewogen. Verursacht FK-Scharf- oder Stich-Schaden."),
 A("Libellenmantel",3,"Ausrüstung","Du bist widerstandsfähig gegen drei Schadensarten, gewählt aus dieser Liste: Stumpf, Scharf, Stich, Hieb, Explosion."),
 A("Kapuzenkrähe",3,"Gefährte","Ein treuer Vogel, abgerichtet, Gegner im Nahkampf abzulenken. Markiere, um den Fokus von einem nahen Feind zu reißen, wenn er einen Angriff versucht, einmal pro Szene.")
 ],H.kit("Corsair als Posten",[
  ["Stärke (wähle 1)","Anmut, Eisen, Zähne"],
  ["Fertigkeiten & Sprachen (wähle 5) – Fertigkeiten","Abfangen, Zerschlagen, Hacken, Jagen, Pflegen, Springen, Wellenlauf"],
  ["Fertigkeiten & Sprachen – Sprachen","Alte Hand, Signalgebung"],
  ["Ressourcen (wähle 2) – Bergegut","Rüstungssplitter, Schwarzpulver-Beutel"],
  ["Ressourcen – Proben","Verdächtiger Finger, Bestienknochen"],
  ["Ressourcen – Flüstern","Ein schluchzendes Mawship"],
  ["Ressourcen – Seekarten","Eine gestohlene Sternkarte"],
  ["Antrieb (wähle 1)","Die Crew vor schrecklichen Wesen schützen · Sich einen Namen unter Banditen und Plünderern machen"],
  ["Morast (wähle 1)","Du verursachst mehr Schmerz als nötig · Deine Waffen stumpfen und rosten, selbst wenn sie gepflegt werden"]]),
 [H.q("Nächstes Mal gib mir eine Herausforderung.","Sumak Tzul, Ketra-Corsair")])});
L.push({id:"crash", k:K, t:"Crash", p:134, b:[
 {a:"Manchmal müssen Dinge einfach zerbrochen werden.\nWährend manche Leute die Güter schätzen, die man ausbaggern kann, kümmert das den Crash nicht. Sie sind Spezialisten, wenn etwas weggeräumt, abgerissen oder schlicht zu Schutt gemacht werden muss.\nDer Crash mag sich auf sorgfältig berechnete Explosionen verlassen, um eine Wand einzureißen, oder sich einfach mit rücksichtsloser Hingabe dagegenwerfen. Was immer seine Methoden sind, ein Crash ist an der Staubfahne zu erkennen, die ihm folgt."},
 {c:"Was ist mit Vorverdanten Artefakten?", x:"Für viele liegt der Gedanke, vorverdante Relikte zu zerstören, irgendwo zwischen unschön und frevelhaft; solche Raritäten sind wertvoll und sollten bewahrt oder zumindest umgenutzt werden. Der Crash mag diesen Leuten zustimmen oder nicht, aber er weiß auch, dass manchmal das Alte weggeräumt werden muss, um Platz für das Neue zu schaffen. Das ist keine mutwillige Zerstörung – das ist Pragmatismus."},
 {c:"Von manchen misstraut", x:"Viele Menschen verstehen den Wert, den ein guter Crash für eine Gemeinschaft bringen kann. Angesichts der zerstörerischen Natur ihrer Arbeit gibt es dennoch einige, die den Crash mit Beklommenheit betrachten. Für viele ist bei Explosionen auch Feuer präsent. Dennoch hat der Crash selten Mühe, eine Nische für seine einzigartigen Fähigkeiten zu finden."},
 H.fragen("des Crashs",["Wo bist du aufgewachsen, und wie hat das dein Handwerk gefärbt?","Was ist der größte Kollateralschaden, den du verursacht hast? Was geschah, und wer war betroffen?","Bist du jemandem begegnet, der dein Handwerk hasste? Was war das Ergebnis des Zusammenstoßes?"]),
 {c:"Alternative Darstellungen", x:"Der Crash kann jemand sein, der sich grundlegend ebenso sehr fürs Erschaffen wie für Zerstören interessiert. Wie ein Bildhauer könnte sein Fokus darin liegen, alle Teile zu entfernen, die nicht in ein Kunstwerk oder einen Entwurf gehören. Und mit einem eher architektonischen Dreh brauchen Gemeinschaften auf Graten immer jemanden, der Wohnraum in Bergen, Ruinen und Felswänden schafft."}
 ].concat(H.aspHead(),[
 A("Dicke Haut",5,"Eigenschaft","Eine Geschichte, bei der du dich beim Zerbrechen anderer Dinge selbst gebrochen hast, hat dich abgehärtet."),
 A("Nulltage",3,"Eigenschaft","Einmal pro Szene, ignoriere jeden Schaden an dir selbst, der durch deine eigenen zerstörerischen Handlungen entsteht."),
 A("Die Fugen tragen Geheimnisse",4,"Eigenschaft","Uralte Gebäude erinnern sich. Erhalte ein Flüstern, wenn du ein uraltes Bauwerk zerstörst."),
 A("Tragende Wand",4,"Eigenschaft","Nutze eine Aufgabe, um verborgene Elemente zu erkennen, die für die Integrität eines Bauwerks wesentlich sind."),
 A("Kanonenkugel-Träume",3,"Eigenschaft","Du springst kopfüber in die Zerstörung. Buchstäblich. Du kannst deinen eigenen Körper als Geschoss nutzen, das FK-Stumpf-Schaden verursacht. Du landest, wo du landest."),
 A("Gepolsterter Kesselanzug",3,"Eigenschaft","Du bist widerstandsfähig gegen drei Schadensarten, gewählt aus dieser Liste: Stumpf, Stich, Hieb, Explosion, Strom."),
 A("Bruchpunkte",4,"Eigenschaft","Erhöhe die Wucht, wenn du etwas als Zeichen von Stärke oder zur Einschüchterung zerbrichst."),
 A("Grobes Werkzeug",3,"Eigenschaft","Deine Lösungen sind vielleicht nicht klug, aber sie funktionieren. Du darfst die Fertigkeit Zerschlagen nutzen, um einfache Werkzeuge zu bauen."),
 A("Canis-Box-Zünder",4,"Ausrüstung","Ein einfacher Zünder, um Sprengstoffe aus einer (vermutlich) sicheren Entfernung zu zünden."),
 A("Crash-Maske",2,"Ausrüstung","Eine Maske, bevorzugt von denen, die in staubigen Umgebungen arbeiten. Du kannst klar durch Staub und Rauch sehen und widerstehst den Wirkungen von Sporen und schlechter Luft."),
 A("Babybomben",2,"Ausrüstung","Handgehaltene Sprengstoffe, die darauf warten, geworfen zu werden. Verursachen mehreren nahen Zielen gleichzeitig FK-Explosions-Schaden."),
 A("Abrissbirne",2,"Ausrüstung","Eine überdimensionierte Waffe, meist ein Hammer oder eine Spitzhacke. Verursacht NK-Stumpf- oder Stich-Schaden. Erhöhe die Wucht beim Zerstören von Architektur."),
 A("Wrackerkugel",3,"Ausrüstung","Eine große, schwere Kugel am Ende einer Kette. Verursacht NK-Stumpf-Schaden. Nützlich, um Feinde zurückzuschlagen."),
 A("Torteaver",4,"Gefährte","Ein kleines Geschöpf mit hartem Panzer, bekannt dafür, sich durch Holz und Stein zu nagen."),
 A("Grabhüftkolonie",4,"Gefährte","Eine kleine Kolonie grabender Insekten. Markiere, um ein Bauwerk zu schwächen, ohne es zu zerstören."),
 A("Blitzeros",3,"Gefährte","Ein Vierbeiner, groß genug zum Reiten. Neigt dazu, Barrieren niederzureißen, indem er mit dem Horn voran hineinstürmt.")
 ],H.kit("Crash als Posten",[
  ["Stärke (wähle 1)","Instinkt, Zähne, Schärfe"],
  ["Fertigkeiten & Sprachen (wähle 5) – Fertigkeiten","Abfangen, Zerschlagen, Zusammenbrauen, Schürfen, Überlisten, Bergen, Studieren"],
  ["Fertigkeiten & Sprachen – Sprachen","Knock, Raka Spit"],
  ["Ressourcen (wähle 2) – Bergegut","Feines rotes Pulver, Mauerwerksplatte"],
  ["Ressourcen – Proben","Fackelkäfer-Horn, Zinnoberkräuter"],
  ["Ressourcen – Flüstern","Eine kriechende Fuge"],
  ["Ressourcen – Seekarten","Eine verwitterte Seekarte"],
  ["Antrieb (wähle 1)","Bewohnbaren Raum aus einer Landzunge schlagen · Ein Monument für etwas zerstören, das du hasst"],
  ["Morast (wähle 1)","Deine Verbrennungen, Blutergüsse und Narben machen andere misstrauisch · Dinge um dich zerbrechen bei der leisesten Berührung"]]),
 [H.q("Nichts währt ewig. Dafür sorge ich.","Renwick Quislino, Ardent-Crash")])});
})(WS_NACH.charaktere);
