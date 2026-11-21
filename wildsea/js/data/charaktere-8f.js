/* Charaktere · Posten Rattlehand, Screw (Corebook S. 148–151) */
(function(L){ var H = WSH, K = "Posten", A = H.asp;
L.push({id:"rattlehand", k:K, t:"Rattlehand", p:148, b:[
 {a:"Alles geht irgendwann kaputt, aber das meiste lässt sich reparieren.\nSchiffseisen rostet. Sägezähne werden stumpf. Motoren husten und kämpfen. In einer Welt aus Bergegut und Tauschhandel hält nichts ewig … außer man hat einen guten Rattlehand an seiner Seite.\nEin Rattlehand ist etwas zwischen Ingenieur, Schmied und Künstler und kann den Schrott der Meere nutzen, um zu reparieren, zu verstärken und zu erschaffen. Viele Rattlehands glänzen darin, neue und einzigartige Ausrüstung für ihre Crewkameraden zu fertigen, perfekt auf deren Nöte abgestimmt."},
 {c:"Eine Welt aus zweiter Hand", x:"Das Erste, was fast jeder Rattlehand lernt, ist, das Beste aus einer schlechten Lage zu machen; er verlässt sich auf ungenaue Werkzeuge, verbogenes Bergegut und kaputte Maschinen, um sein Handwerk auszuüben. Das Fehlen von großflächigem Bergbau und Erzverarbeitung macht Metallmangel zu einer unglücklichen Realität, sodass jene, die davor zurückschrecken, dasselbe Wrackgut zum zwanzigsten Mal wiederzuverwerten, oft auf Holz oder Knochen als Ersatz zurückgreifen."},
 {c:"Bergegut oder Proben?", x:"Bergegut ist bei weitem das einfachste Material für einen Rattlehand, bewährte Stücke aus Holz oder Metall, die der Zeit standhielten (zumindest eine Weile). Da die meisten Materialien der Wildsea aus zweiter Hand sind, ist die Verwendung von Fragmenten alter Maschinen und weggeworfenen Schiffsteilen ein natürlicher Teil der Arbeit.\nAber manche Rattlehands mögen eine Herausforderung, besonders jene, die viel Zeit mit den ungewöhnlichen Geschöpfen der weiteren Wellen verbringen. Diese Ingenieure verbinden das kalt Künstliche mit dem unappetitlich Organischen, indem sie Pflanzen- und Tierproben neben traditionelleren Materialien verwenden, um wirksame (aber gelegentlich verstörende) Produkte zu schaffen."},
 H.fragen("des Rattlehands",["Die meisten Rattlehands haben ein bevorzugtes Material zum Arbeiten – was ist deins?","Welches Experiment oder welche Reparatur von dir scheiterte im ungünstigsten Moment spektakulär, und was waren die Folgen?","Was war deine Glanzleistung, technologisch gesehen? Die Entwicklung einer neuen Technik, die Fertigstellung einer großen Maschine oder das Entschlüsseln eines vorverdanten Industriegeheimnisses?"]),
 {c:"Alternative Darstellungen", x:"Alternative Darstellungen des Rattlehands sind so vielfältig wie Rattlehands selbst; du könntest einen Dock-Ingenieur oder Schiffsbauer anstreben, der zu den Wellen gerufen wurde, einen Schmied, der in einer Welt ohne Schmieden kämpft, einen technologieorientierten Wissenschaftler oder sogar einen Künstler oder Bildhauer, der mit Bergegut arbeitet."}
 ].concat(H.aspHead(),[
 A("Meisterhandwerk",2,"Eigenschaft","Wähle Holz, Metall oder Knochen. Erhöhe die Wucht beim Fertigen oder Reparieren mit deinem gewählten Material."),
 A("Für die Ewigkeit gemacht",3,"Eigenschaft","Wenn du etwas fertigst, ist die Leiste der entstandenen Schöpfung um drei Kästchen länger als üblich."),
 A("Multitasker",3,"Eigenschaft","Du kannst eine Aufgabe nutzen, um an der Reparatur von bis zu drei Ausrüstungsstücken oder mechanischen Gefährten gleichzeitig zu arbeiten."),
 A("Zuverlässiger Schmied",3,"Eigenschaft","Zähle Konflikte als Triumphe beim Reparieren von Ausrüstung und mechanischen Gefährten."),
 A("Deck-Ingenieur",3,"Eigenschaft","Winzige, schrittweise Anpassungen, die du ohne nachzudenken vornimmst, halten Rumpf und Aufbauten deines Schiffs in bemerkenswertem Zustand. Erhöhe die Panzerung deines Schiffs um eins, solange du an Bord bist."),
 A("Zerlegungsspezialist",3,"Ausrüstung","Wenn die Leiste eines gefertigten Vorteils voll markiert ist, erhalte ein damit verbundenes Stück Bergegut, bevor du den Vorteil entfernst."),
 A("Tintenstempel-Mechanismus",2,"Ausrüstung","Verbrauche eine Seekarte, um schnell einen Satz Schaltpläne für eine Maschine oder einen Mechanismus zu erstellen, den du sehen kannst (dargestellt durch eine neue Seekarte). Alle Aktionen, die Maschine selbst zu bauen, erhalten erhöhte Wucht, solange du diese neue Seekarte hast."),
 A("Werkzeuggürtel",2,"Ausrüstung","Fertige einmal pro Szene zügig eine Schöpfung mit einer Leiste, ohne würfeln zu müssen."),
 A("Bergegut-Set",3,"Ausrüstung","Enthält zum Fertigen nützliches Bergegut. Markiere, um den Inhalt beim Fertigen anstelle einer Ressource zu verwenden."),
 A("Mehrlinsen-Brille",3,"Ausrüstung","Du erhältst Eisensicht, die Fähigkeit, elektrische und magnetische Felder zu sehen."),
 A("Wolfsfell-Handschuhe",4,"Ausrüstung","Du erleidest nie Abzug für Schwierigkeit, wenn du Proben in dein Fertigen einbeziehst, egal wie grausig oder unappetitlich der Vorgang ist."),
 A("Volt-Schiene",2,"Ausrüstung","Ein isolierter Griff um einen knisternden, primitiven Viehtreiber. Verursacht NK-Strom-Schaden, und du bist selbst immun gegen Strom-Schaden."),
 A("Wirbelkasten",4,"Ausrüstung","Eine konzertinaartige Waffe, die Luft komprimiert und abfeuert. Verursacht FK-Explosions-Schaden."),
 A("Gefahrenanzug",3,"Ausrüstung","Du bist widerstandsfähig gegen drei Schadensarten, gewählt aus dieser Liste: Stich, Säure, Explosion, Strom, Flamme."),
 A("Artillerie-Spinne",3,"Gefährte","Ein selbstgebauter Automat, entworfen, Feuerunterstützung zu bieten. Verursacht FK-Explosions-Schaden."),
 A("Autokriecher",2,"Gefährte","Ein flinkes kleines Bergungskonstrukt. Füge einmal pro Szene jedem Bergegutstück, das du erwirbst, einen positiven Marker deiner Wahl hinzu.")
 ],H.kit("Rattlehand als Posten",[
  ["Stärke (wähle 1)","Eisen, Schärfe, Gezeiten"],
  ["Fertigkeiten & Sprachen (wähle 5) – Fertigkeiten","Abfangen, Zerschlagen, Zusammenbrauen, Schürfen, Rasseln, Bergen, Pflegen"],
  ["Fertigkeiten & Sprachen – Sprachen","Brasstongue, Highvin"],
  ["Ressourcen (wähle 2) – Bergegut","Uralte Verdrahtung, Keramikbatterie"],
  ["Ressourcen – Proben","Zerquetschter Käfer, Riesige Insektenkiefer"],
  ["Ressourcen – Flüstern","Lokomotivkraft"],
  ["Ressourcen – Seekarten","Ein unleserlicher Bauplan"],
  ["Antrieb (wähle 1)","Eine vorverdante Maschine umfunktionieren · Eine Waffe fertigen, die einen Leviathan zu Fall bringen kann"],
  ["Morast (wähle 1)","Die Monomanie des Bergens ergreift dich · Maschinen springen und zünden in deiner Gegenwart fehl"]]),
 [H.q("Kaputt, sagst du? Gib mir eine Rolle Leder, ein paar Schrauben und eine Glühwürmchen-Birne – lange bleibt es nicht kaputt.","Hizero, Mothryn-Rattlehand")])});
L.push({id:"screw", k:K, t:"Screw", p:150, b:[
 {a:"Ein disziplinierter Beherrscher unsichtbarer Kräfte.\nMetall ist ein gewohnter Anblick über den rauschenden Wellen, ausgespuckt oder aus der Dunkelheit der Unter-Eaves hochgebaggert oder in den schattigen Tiefen der letzten verbliebenen Berge gefördert und raffiniert. Für die meisten ist es ein gewichtiges Handelsgut, ein Mittel zur Reparatur oder zum Fertigen.\nAber der Screw sieht Metall auf völlig andere Weise.\nScrews sind Meister einer uralten vorverdanten Technik, eines in der wilden Welt selten gesehenen Zweigs der Arkonautik – Ferrokinese, die unheimliche Kontrolle über Metalle und Magnetismus. Eisen ist meist das Werkzeug der Wahl des Screws, doch die Wirtschaft aus Bergegut und Knappheit über den Wellen hat manche Screws dazu gebracht, ihre Techniken an andere, seltenere Metalle anzupassen."},
 {c:"Eisenhaltig und frei", x:"Die meisten besonderen Fähigkeiten des Screws drehen sich um die Manipulation von Metall, zumindest für den Laien, doch es ist oft eher eine Frage der Manipulation magnetischer Felder. Screws haben meist ernsthafte Schwierigkeiten mit bestimmten Metallen wie Blei und spüren auch, dass ihre Kräfte in Gebieten, die schon voller starker Magnetkräfte sind, weniger kontrollierbar sind."},
 {c:"Haben Maschinen Seelen?", x:"Manche Screws reißen eine Maschine mit Freuden auseinander, wie sie es brauchen, aber andere zögern – selbst in den einfachsten Konstrukten sei Leben, sagen sie, nicht die kalte Intelligenz von Lochkartenfunktionen, sondern etwas paradox Organisches. Eine Maschine für ihre Teile zu zerbrechen … wäre das dann gleichbedeutend mit Mord?"},
 H.fragen("des Screws",["Was ist dein bevorzugtes Material zum Arbeiten? Eisen, Kobalt, vielleicht Nickel? Oder sogar eines der „schwierigeren“ Metalle?","Hast du das Gefühl, die Kraft komme aus dir, oder dass du nur ein Kanal für etwas Tieferes und Größeres bist?","Was ist das größte, schwerste Ding, das du je bewegt hast? Wie fühlte es sich an, diese arkonautischen Muskeln anzuspannen, und hat es bleibende Schäden hinterlassen?"]),
 {c:"Alternative Darstellungen", x:"Die metallbewegenden Aspekte eines Screws könnten als Kräfte eines altmodischen Psi-Typs dargestellt werden, ein Produkt von Geist über Materie statt arkonautischer Anwendung. Du könntest auch die Materialien ändern, mit denen ein Screw arbeitet, um einen Mancer zu schaffen, der sich auf Erde oder Stein konzentriert, oder sogar auf Wasser (wenn du genug davon findest)."}
 ].concat(H.aspHead(),[
 A("Ferrokinese",3,"Eigenschaft","Markiere, um freiliegendes Metall zu steuern oder umzuformen."),
 A("Herz aus Erz",2,"Eigenschaft","Wähle eine einzelne Metallart (etwa Eisen oder Kupfer). Erhöhe die Wucht beim Reparieren, Fertigen oder Nutzen von Arkonautik mit deinem gewählten Metall."),
 A("Eisensicht",3,"Eigenschaft","Du kannst nahe Metalle spüren, magnetische Felder sehen und kennst immer die Richtung des wahren Nordens."),
 A("Kluge Abstoßung",2,"Eigenschaft","Zähle Konflikte als Triumphe beim Ausweichen oder Blocken von Angriffen von Konstrukten oder Metallwaffen."),
 A("Magnetische Levitation",3,"Eigenschaft","Du kannst dein eigenes Magnetfeld manipulieren und so für kurze Zeit fliegen, wenn du dich nahe dichten Metallmassen befindest (etwa dem Rumpf eines Schiffs oder einem kinetischen Anker)."),
 A("Reaktiver Nieter",3,"Eigenschaft","Verursache Stichschaden an jedem Geschöpf, das dich im Nahkampf mit dem eigenen Körper angreift (etwa mit Schwanz- oder Bissangriffen)."),
 A("Feldladung",3,"Eigenschaft","Gib einmal pro Szene jedem Bergegutstück, das du erwirbst, den Marker „Magnetisch“."),
 A("Vorverdanter Barren",4,"Ausrüstung","Als schlichter Schmuck getragen, birgt aber unglaubliches magnetisches Potenzial. Brenne, um kurzzeitig eine gewaltige Metallmenge zu bewegen, bis zur Größe eines Schiffs."),
 A("Dekonstruktor",3,"Ausrüstung","Ignoriere Abzug beim Versuch, eine Maschine oder einen Mechanismus aus Metall zu beschädigen, zu zerbrechen oder zu zerlegen."),
 A("Eisenring-Jacke",3,"Ausrüstung","Du bist widerstandsfähig gegen drei Schadensarten, gewählt aus dieser Liste: Stumpf, Stich, Säge, Gift, Strom."),
 A("Spreu-Beutel",4,"Ausrüstung","Markiere, um eine Wolke aus Metallfragmenten zu erzeugen, die die Sicht um dich verdeckt."),
 A("Kinetischer Anker",3,"Ausrüstung","Eine große Metallmasse, so geformt, dass sie leicht zu tragen ist, oft genutzt, um Ferrokinese an Orten zu ermöglichen, die sonst leer an Metall sind. Verursacht NK-Stumpf-Schaden."),
 A("Nietenschwarm",3,"Gefährte","Eine Wolke schwebender Trümmer, die du mit einem Handgelenkschnippen lenken kannst. Verursacht FK-Stich- oder Scharf-Schaden.")
 ],H.kit("Screw als Posten",[
  ["Stärke (wähle 1)","Eisen, Anmut, Zähne"],
  ["Fertigkeiten & Sprachen (wähle 5) – Fertigkeiten","Abfangen, Zerschlagen, Glänzen, Rasseln, Bergen, Spüren, Springen"],
  ["Fertigkeiten & Sprachen – Sprachen","Brasstongue"],
  ["Ressourcen (wähle 2) – Bergegut","Bündel Nieten, Eisenerz"],
  ["Ressourcen – Proben","Rostkäfer-Chitin"],
  ["Ressourcen – Flüstern","Unbekannte Kräfte, Die schwimmende Festung"],
  ["Ressourcen – Seekarten","Eine Eisenrolle, Ein sonderbarer Kompass"],
  ["Antrieb (wähle 1)","Eine Quelle reinen Metalls entdecken · Einen vorverdanten Panzerkreuzer bergen und instand setzen"],
  ["Morast (wähle 1)","Deine Metalle rosten und korrodieren · Magnetische Kräfte in deiner Umgebung sind unberechenbar"]]),
 [H.q("Es ist ein Tanz, wie es sich bewegt – Stücke, die im Sonnenlicht glitzern, während sie die Gesetze trotzen, die sie an Ort und Stelle halten würden; wie wir diesen Gesetzen gemeinsam trotzen.","Samaen, Ketra-Screw")])});
})(WS_NACH.charaktere);
