/* Charaktere · Blutlinien Gau, Ironbound, Ketra (Corebook S. 106–111) */
(function(L){ var H = WSH, K = "Blutlinien", A = H.asp;
L.push({id:"gau", k:K, t:"Gau", p:106, b:[
 {a:"Pilzforscher, denen die rauschenden Wellen Freiheit schenkten.\nDie Verdanz war für viele Kulturen ein Todesstoß, für die Gau aber ein Aufblühen – eine Gelegenheit, die warme, sichere Dunkelheit ihrer Mycosanctums zu verlassen und eine neue Welt aus Fäule und Wachstum zu erkunden.\nDie meisten Gau haben biegsame Glieder und gesprenkeltes Pilzfleisch, aber die Unterschiede zwischen den Familien sind riesig. Manchen fehlen Augen, anderen haben viele, einige sprießen Ranken, andere Sporensäcke, wieder andere sind bemerkenswert nah an ein elfenhaftes Abbild verlorener Menschlichkeit geformt."},
 {c:"Mycosanctums", x:"Irgendwo zwischen Schiff, Laichgrund und Festung ist ein Mycosanctum ein lebendes Bauwerk aus schützendem Pilz (manchmal meilenweit groß). In vorverdanten Zeiten lagen sie meist in schattigen Sümpfen und Berghöhlen, doch wie ihre Bewohner haben sie viel mehr Beweglichkeit gewonnen, seit der Weltwald kam.\nLängere Zeit als jede andere Blutlinie als die Gau in einem Mycosanctum zu leben ist oft eine wenig angenehme Erfahrung. Wer es versucht, findet Kleidung und Haare dick von Sporen, die Nase (falls vorhanden) verstopft oder laufend je nach den chemischen Brisen des Tages, und das Essen … Nun, besser nicht vom Essen reden."},
 {c:"Sehnsüchtiges Wachstum", x:"Die Biologie der Gau ist selbst für die gelehrtesten Gelehrten und Chirurgen ein Rätsel. Während jede Familie bestimmte Merkmale hat, die über Generationen weitergegeben werden, scheint sich ein einzelner Gau auch in beeindruckendem Tempo seiner Umgebung anzupassen. In einer Welt mutativen Crezzerins mag das oberflächlich nicht ungewöhnlich wirken, aber es ist der Vorgang, der es einzigartig macht – ein Ironbound mag seinen eigenen Körper bauen, ein Tzelicrae seine bevorzugte Haut fertigen, aber die Pilzgestalt eines Gau passt sich an das an, was das Individuum sein will, ohne Training oder bewusste Anstrengung."},
 H.fragen("der Gau",["Wie viele deiner Familienmerkmale zeigen sich in deiner Gestalt, und wie viel von dir ist eine Antwort auf das sehnsüchtige Wachstum?","Bist du innerhalb der Grenzen eines Mycosanctums aufgewachsen, und wenn ja, was aus der Außenwelt zog dich hinaus?","Wie viel Verwandtschaft fühlst du mit anderen Gau auf den Wellen, besonders mit denen, deren Leben sich stark von deinem unterscheidet?"]),
 {c:"Alternative Darstellungen", x:"Die Physiologie der Gau ist schon äußerst flexibel. Eine Gau-Kolonie oder ein Gau-Charakter könnte nicht so sehr auf Pilzen basieren, sondern auf Schimmel, Flechten oder sogar etwas weit weniger Gewöhnlichem in der Wildsea wie Seetang oder Korallen."}
 ].concat(H.aspHead(),[
 A("Leuchtflecken",4,"Eigenschaft","Du kannst nach Belieben Licht abgeben."),
 A("Sich entfaltender Flare",4,"Eigenschaft","Ein sich spreizender Mantel aus myconischem Fleisch, der sich entfaltet, um deine körperliche Größe zu vermehren. Konflikte zählen als Triumphe, wenn du kleinere Ziele einschüchterst."),
 A("Tarnsprenkel",3,"Eigenschaft","Erhöhe die Wucht bei Heimlichkeit in einer natürlichen oder städtischen Umgebung (wähle die Umgebung, wenn du diese Eigenschaft nimmst)."),
 A("Pilzranke",3,"Eigenschaft","Du hast eine zusätzliche rankenartige Gliedmaße, mit der du mehr Gegenstände als üblich halten und handhaben kannst."),
 A("Mykofiltration",2,"Eigenschaft","Du kannst in Sporenwolken perfekt sehen und widerstehst den Wirkungen schlechter Luft und Sporen in der Luft."),
 A("Sporensäcke",4,"Eigenschaft","Markiere, um deinen aktuellen Bereich mit einer dichten, sichtblockierenden Sporenwolke zu verhüllen, die bleibt, bis der Wind sie davonträgt."),
 A("Natürlich halluzinogen",3,"Eigenschaft","Deine Abwürfe haben leichte psychotrope Eigenschaften. Markiere, um eine seltene Ressource zu erschaffen: Halluzinogene Sporen."),
 A("Pilzfestung",3,"Eigenschaft","Du bist widerstandsfähig gegen drei Schadensarten, gewählt aus dieser Liste: Scharf, Hieb, Gift, Säure, Frost."),
 A("Wucherung",3,"Eigenschaft","Brenne, um einem Verbündeten eine Kopie eines deiner Aspekte (außer diesem) als temporären Vorteil zu geben. Die Leiste des Vorteils ist so lang wie die des ursprünglichen Aspekts."),
 A("Medizinbeutel",3,"Ausrüstung","Andere fragen selten, wo die Medizin gesammelt wird. Nutze eine Aufgabe, um eine seltene Ressource zu erschaffen: Heilkräuter."),
 A("Nährendes Pechglas",2,"Ausrüstung","Ein geschwärztes Glasgefäß mit einer eifrigen Kolonie Eisenwurzel-Schimmel. Nutze eine Aufgabe, um eine Proben-Kopie eines beliebigen Stücks Bergegut zu erschaffen, das du besitzt, mit dem Marker „Pilzig“."),
 A("Zackenpeitsche",4,"Ausrüstung","Eine Lederschnur, besetzt mit Zähnen oder geborgenem Metall. Verursacht NK-Säge-Schaden."),
 A("Sporenschleuder",3,"Ausrüstung","Eine schleuderartige Vorrichtung zum Werfen von Sporenbomben, die FK-Gift- oder Explosionsschaden verursachen."),
 A("Pangopilz",4,"Gefährte","Ein langsamer, aber gut gepanzerter Pilzgefährte, der nichts lieber will, als dich zu beschützen."),
 A("Sporenhund",3,"Gefährte","Ein treuer Gefährte, der NK-Gift-Schaden verursacht."),
 A("Cordysekt",3,"Gefährte","Ein langsam fliegender Käfer, durchsetzt mit Pilzwuchs. Markiere, um einen Schwall dichter Sinnesinformationen aus seiner Umgebung zu erhalten, der Absonderlichkeiten und Geheimnisse enthüllt.")
 ],H.kit("Gau als Blutlinie",[
  ["Stärke (wähle 1)","Anmut, Instinkt, Schleier"],
  ["Fertigkeiten & Sprachen (wähle 5) – Fertigkeiten","Zusammenbrauen, Glänzen, Ernten, Überlisten, Pflegen, Wellenlauf, Springen"],
  ["Fertigkeiten & Sprachen – Sprachen","Gaudimm, Raka Spit, Alte Hand"],
  ["Ressourcen (wähle 2) – Bergegut","Geriffelter Stein, Versteinerter Pilz"],
  ["Ressourcen – Proben","Fettleibiger Käfer, Sauerrebenextrakt"],
  ["Ressourcen – Flüstern","Mycosanctum-Grollen"],
  ["Ressourcen – Seekarten","Eine Seekarte vieler Farben"],
  ["Antrieb (wähle 1)","Probleme in Gau-Siedlungen lösen · Anderen Gau helfen, die weiteren Wellen zu erkunden"],
  ["Morast (wähle 1)","Dein Fleisch wird spröde und erschwert das Bewegen · Du hinterlässt beim Bewegen eine Sporenspur"]]),
 [H.q("Die Wellen sind eine Freiheit, die viele von uns nie zu haben glaubten. Zu wachsen, zu erkunden … mehr zu sein, als wir in der Dunkelheit waren.","Elgos, Gau-Horizoneer")])});
L.push({id:"ironbound", k:K, t:"Ironbound", p:108, b:[
 {a:"Seefahrende Automaten, schiffsgeborene Geister auf Abwegen.\nJeder kennt die Legende der Mawships, der Schiffe, die verwilderten, nachdem sie zu lange auf den crezzerin-getränkten Wellen waren. Weit weniger wissen, was mit ihren Crews geschieht, und noch weniger haben je über das Schicksal der treuen Konstrukte nachgedacht, die einst an ihrer Seite dienten.\nEin Ironbound wandelt auf der Grenze zwischen Geist und Maschine, eine belebte Präsenz in einer Hülle aus Schiffsmaterial. Ohne eine Kindheit, von der man sprechen könnte, entwickelt sich die Persönlichkeit eines Ironbound ab dem Moment seines Erwachens mit der Zeit. Viele ziehen allein los und definieren ihr neues Leben durch ihre Taten, doch die meisten finden sich schließlich auf irgendeine Weise zurück zu den rauschenden Wellen gezogen."},
 {c:"Von Zahnrädern und Geistern", x:"Es gibt zwei Haupttypen von Ironbound – jene, die aus einem Konstrukt oder Simulacrum geboren wurden, und jene, die sich aus dem Abfall von Schiffswracks und Ruinen selbst zusammensetzen. Die ersten neigen dazu, sich ein wenig zu erweitern, behalten aber meist die Grundform, in der sie gefertigt wurden. Die zweiten sind im Aussehen weit vielfältiger, kombinieren oft ungewöhnliche Materialien und nutzen, was an nützlichem Bergegut zur Hand ist."},
 {c:"Persönlichkeit", x:"Wer die Ironbound nicht kennt, ist oft überrascht von der Komplexität ihrer Gedanken, da er die logische Schlichtheit eines Golems oder einer Maschine erwartet, doch die Ironbound werden nicht von Befehlen angetrieben. Ihre Seelen und Geister gehören ihnen selbst und wachsen mit ihren Erfahrungen und Bedürfnissen. Die Persönlichkeiten der Ironbound entwickeln sich wie die jeder anderen Blutlinie und sind ebenso eigen."},
 H.fragen("der Ironbound",["Bist du ein gerettetes Konstrukt oder eine selbstorganisierte Sammlung von Wrackteilen? Oder vielleicht etwas dazwischen?","Bist du in erster Linie eine Seele, ein Geist in einer Hülle, oder ist dein Körper ebenso Teil von dir wie deine Seele?","Wie viel von deiner früheren Existenz erinnerst du? Deine Reisen, deine Erfahrungen, das Lachen und Geplauder der Crew, mit der du dientest?"]),
 {c:"Alternative Darstellungen", x:"Ein Ironbound kann gut als belebte Ruine funktionieren, die wenig mit Schiffen und Reisen zu tun hat – ein Stück Stadtstraße, eine zum Leben erwachte und selbstorganisierte Schmiede, all das könnte leicht mit dem Ironbound als Grundlage existieren. Du könntest auch den Weg des traditionellen Golems oder eines komplexen Uhrwerk-Automaten gehen."}
 ].concat(H.aspHead(),[
 A("Titanisch",5,"Eigenschaft","Du bist eine imposante Präsenz, ein Gewicht auf der Welt."),
 A("Geisterherz",3,"Eigenschaft","Du giltst als fließend, wenn du mit Geistern, Spirits und anderen Ironbound kommunizierst, unabhängig von den benutzten Sprachen."),
 A("Denkmal des Reisens",4,"Eigenschaft","Wann immer du eine Seekarte erhältst, markiere, um zusätzlich ein dazu passendes Flüstern zu erhalten."),
 A("Fruchttragende Gliedmaße",3,"Eigenschaft","Nutze eine Aufgabe, um eine Ressource zu erschaffen: Kielfrucht."),
 A("Verdünnen",2,"Eigenschaft","Dein belebender Funke kann deinen Körper für kurze Zeit verlassen, geisterhaft und unkörperlich werden, aber weiter beweglich bleiben."),
 A("Strukturelle Integration",3,"Eigenschaft","Einmal pro Reise kannst du eine Markierung Schaden an deinem Schiff ohne Wurf reparieren."),
 A("Stimmliche Erholung",3,"Eigenschaft","Du kannst die Stimmen längst verlorener Seeleute heraufbeschwören und Tonhöhe, Klang und Akzent nach Laune ändern. Brenne, um die Wahrheit eines verlorenen Seemanns zu sprechen."),
 A("Scheinwerferlaterne",4,"Ausrüstung","Flammenlos, aber trotzdem schrecklich hell. Verbrauche eine Ressource als Brennstoff, damit deine ganze Crew in Dunkelheit, Sporenwolken und allgemeinem Dunst perfekt sehen kann."),
 A("Uralte Teer-Siegel",2,"Ausrüstung","Du bist immun gegen die Wirkungen von Crezzerin."),
 A("Lebende Werkstatt",4,"Ausrüstung","Dein eigener, aus Wrackteilen geborgener Körper enthält eine Reihe nützlicher Werkzeuge – alle Crewkameraden erhalten in deiner Gegenwart automatisch 2W6 Vorteil bei Würfen zum Herstellen temporärer Ausrüstung und Maschinen."),
 A("Bughammer",4,"Ausrüstung","Ein umgearbeiteter Schiffsbug, zu einer riesigen Schlagwaffe geformt. Verursacht NK-Stumpf-Schaden."),
 A("Prunkkanone",2,"Ausrüstung","Eine riesige Schiffskanone, geladen mit Sprenggranaten. Verursacht FK-Explosionsschaden. Erhöhe die Wucht beim Zielen auf eine Horde oder einen Schwarm von Zielen."),
 A("Breitholz-Panzer",3,"Ausrüstung","Du bist widerstandsfähig gegen drei Schadensarten, gewählt aus dieser Liste: Stumpf, Scharf, Säge, Säure, Strom."),
 A("Riffeisen-Beplankung",3,"Ausrüstung","Du bist widerstandsfähig gegen drei Schadensarten, gewählt aus dieser Liste: Stich, Hieb, Säge, Frost, Flamme."),
 A("Schiffsseitiger Symbiont",3,"Gefährte","Wenn dein Schiff an einem seiner Werte Schaden nähme, kannst du stattdessen so viele Kästchen auf diesem Gefährten markieren, wie der Schaden beträgt."),
 A("Segelgeist",4,"Gefährte","Eine Masse lebender Leinwand, die fliegen kann. Markiere, damit sie sich um ein Ziel wickelt und dessen Bewegung einschränkt.")
 ],H.kit("Ironbound als Blutlinie",[
  ["Stärke (wähle 1)","Eisen, Zähne, Gezeiten"],
  ["Fertigkeiten & Sprachen (wähle 5) – Fertigkeiten","Abfangen, Zerschlagen, Schürfen, Hacken, Rasseln, Bergen, Wellenlauf"],
  ["Fertigkeiten & Sprachen – Sprachen","Alte Hand, Signalgebung, Raka Spit"],
  ["Ressourcen (wähle 2) – Bergegut","Sägebug-Zähne, Entschärfte Granaten"],
  ["Ressourcen – Proben","Crezzerin-getränkte Blätter, Wurzelnder Pilz"],
  ["Ressourcen – Flüstern","Zum Denken erwacht"],
  ["Ressourcen – Seekarten","Ein alter Handelsweg"],
  ["Antrieb (wähle 1)","Ein verlassenes Schiff retten · Ein gefesseltes Schiffskonstrukt befreien"],
  ["Morast (wähle 1)","Die Welt abseits der Wellen ist still und fern · Dein Körper reißt und spaltet sich, Schwäche breitet sich aus"]]),
 [H.q("Meine verlorene Crew steht auch jetzt noch an meiner Seite gegen die Wellen, so wie ich bei ihnen stand, solange ihre hellen Lichter schienen.","Tar On Tar, Ironbound-Mesmer")])});
L.push({id:"ketra", k:K, t:"Ketra", p:110, b:[
 {a:"Verzerrte Menschheit, die aus den Tiefen aufsteigt.\nJahrhundertelang nach der Verdanz nahm man an, alles unterhalb der Kronenlinie sei verloren, von den wachsenden Wildnissen zerkaut und als Brennstoff verbraucht. Das jüngste Auftauchen der Ketra räumte diese Annahme aus und kündigte ein neues Interesse an, tiefer in die rauschenden Wellen vorzudringen.\nDie Ketra sind die Nachfahren jener Bruchstücke der uralten Menschheit, die in Tunneln und robusten Tempelkomplexen, Minenschächten und Bergadern gefangen waren. Wie die Ardent haben sie sich der nachverdanten Welt angepasst, aber mit einer weit dramatischeren biologischen Veränderung – tentakelartige Mäntel, durchscheinendes Fleisch und wirbelnde, ständig bewegte Tintenklecks-Muster sind häufig. Viele Ketra verstärken ihre formbare Gestalt mit selbstgemachten Skeletten aus geborgenem Treibholz oder umfunktioniertem Schrottmetall."},
 {c:"Aus der Dunkelheit", x:"Ketra-„Siedlungen“ waren historisch eher wie Gefängnisse, abgeschlossene Bereiche unter der Baumlinie, in denen sie ihr Dasein fristeten, während Crezzerin seine mutative Bösartigkeit an ihnen wirkte. Rau, zweckmäßig und fast immer stockdunkel – es gibt kaum Geschichten über die brutalen Entscheidungen, die die Gefangenen treffen mussten, bevor sie sich anpassten."},
 {c:"Selbstgemachte Skelette", x:"Der Vorgang, einen Knochen im Skelett eines Ketra zu ersetzen, ist nicht gerade schmerzlos, aber ihr formbares Fleisch und ihre anpassungsfähige Muskulatur machen es viel leichter, als es für einen Ardent wäre. Der traditionellste Knochenersatz ist Treibholz oder Metall, aber manche nutzen Tierknochen, Stein oder andere, seltsamere Materialien als inneren Halt. Von Ketra-Wildseglern ist auch bekannt, dass sie ihre Knochen durch funktionale Werkzeuge ersetzen, etwa Enterhaken oder verborgene Waffen, um auf den Wellen einen unerwarteten Vorteil zu haben."},
 H.fragen("der Ketra",["Hast du Zeit an den „angestammten“ Ketra-Orten verbracht, und wenn ja, wie fandest du ihre dunklen, beengten Räume?","Wie ursprünglich ist dein Skelett, und wenn du Teile selbst ersetzt hast, auf welche neuen Materialien stützt du dich?","Wurden dir Geschichten von den alten menschlichen Tagen deiner Familie überliefert, oder ist deine vorverdante Abstammung der Geschichte verloren?"]),
 {c:"Alternative Darstellungen", x:"Eine interessante alternative Deutung der Ketra könnte entstehen, indem man eine ihrer beiden thematischen Hauptkomponenten extrem betont – sie als lichartiges Skelett, gesteuert von einem organischen, schneckenartigen Kern, oder als völlig gallertartige Masse mit nur der geringsten Andeutung einer Skelettstruktur (oder gar keiner)."}
 ].concat(H.aspHead(),[
 A("Gallertform",5,"Eigenschaft","Du hast eine angeborene Schwäche gegen Salzschaden, kannst aber deinen Körper genug quetschen und verdichten, um dich durch viel kleinere Räume als erwartet zu bewegen."),
 A("Sinnesstiele",4,"Eigenschaft","Eine seltene Mutation, die dein Sehen schärft. Du kannst ohne Licht klar sehen."),
 A("Kriechendes Muster",4,"Eigenschaft","Die leuchtenden Flecken auf deinem Fleisch kriechen auf dein Geheiß, sogar auf andere in der Nähe. Markiere diese Leiste, um ein schwaches, aber anhaltendes Licht auf dir oder einem nahen Ziel zu erschaffen."),
 A("Tunnelkundig",3,"Eigenschaft","Konflikte zählen als Triumphe, wenn du durch geschlossene Bereiche navigierst oder dich darin bewegst."),
 A("Flüstern in der Dunkelheit",3,"Eigenschaft","Markiere in einem schwach oder unbeleuchteten Bereich, um ein Geheimnis aus der Dunkelheit zu erfahren (einmal pro Szene)."),
 A("Schrott-Enzyme",3,"Eigenschaft","Du kannst Bergegut als Bestandteil beim Zusammenbrauen eines Tranks oder einer chemischen Mischung nutzen, egal in welcher Form."),
 A("Voltaischer Mantel",4,"Eigenschaft","Die Tentakel deines Mantels knistern vor Blitzen, wenn sie zuschlagen, und verursachen NK-Strom-Schaden."),
 A("Treibholzkern",3,"Ausrüstung","Du bist widerstandsfähig gegen drei Schadensarten, gewählt aus dieser Liste: Stumpf, Stich, Gift, Frost, Strom."),
 A("Atemmaske",3,"Ausrüstung","Du hast einen kurzen Vorrat sauberer Luft, den du bei Bedarf anzapfen kannst, und widerstehst außerdem den Wirkungen schlechter Luft und Sporen in der Luft."),
 A("Kletterhaken",4,"Ausrüstung","An einem Geschirr befestigt oder in dein gallertartiges Fleisch eingebettet. Ignoriere Abzug beim Klettern, solange du dich vorsichtig bewegst."),
 A("Treibkette",3,"Ausrüstung","Eine verrostete Kette einer längst toten Maschine, nun als Waffe geführt, die im NK oder FK Stumpf-Schaden verursacht."),
 A("Schrottmetall-Skelett",3,"Ausrüstung","Die inneren Strukturen, die du gesammelt hast, können biovoltaische Energie speichern. Nutze eine Aufgabe, um eine Ressource zu erschaffen: Schrottknochen-Batterie."),
 A("Alte Erz-Piercings",1,"Ausrüstung","Du bist immun gegen die üblichen Wirkungen von Crezzerin. Konzentrierte Crezzerin-Quellen heilen dich, statt dir zu schaden."),
 A("Ölgelee",4,"Gefährte","Ein glitschiges, symbiotisches schleimartiges Geschöpf, das mit deinem Körper verbunden ist."),
 A("Drohnen-Betreuer",3,"Gefährte","Ein einfaches lochkartengesteuertes Reparaturkonstrukt. Erhöhe die Wucht beim Reparieren oder Basteln an anderen Maschinen.")
 ],H.kit("Ketra als Blutlinie",[
  ["Stärke (wähle 1)","Eisen, Schärfe, Schleier"],
  ["Fertigkeiten & Sprachen (wähle 5) – Fertigkeiten","Zusammenbrauen, Schürfen, Überlisten, Bergen, Spüren, Beeinflussen, Springen"],
  ["Fertigkeiten & Sprachen – Sprachen","Chthonisch, Raka Spit, Signalgebung"],
  ["Ressourcen (wähle 2) – Bergegut","Zeremonialdynamit, Altes Treibholz"],
  ["Ressourcen – Proben","Leuchtender Knochen, Eingerollter Hundertfüßer"],
  ["Ressourcen – Flüstern","Die tröstende Dunkelheit, Alle Tunnel enden"],
  ["Ressourcen – Seekarten","Ein verblasster Schaltplan"],
  ["Antrieb (wähle 1)","Ein vorverdantes Bauwerk erheben · Schätze der weiteren Wellen horten"],
  ["Morast (wähle 1)","Funken und Zuckungen durchfahren deine Gliedmaßen · Deine Tintenklecks-Muster wirbeln schwindelerregend"]]),
 [H.q("Die Tunnel sind ein Trost, aber auch ein Fluch. Dort oben wartet eine neue Welt, und ich habe vor, so viel von ihr zu sehen, wie ich nur kann.","Jask, Ketra-Rootless")])});
})(WS_NACH.charaktere);
