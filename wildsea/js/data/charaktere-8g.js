/* Charaktere · Posten Slinger, Steep (Corebook S. 152–155) */
(function(L){ var H = WSH, K = "Posten", A = H.asp;
L.push({id:"slinger", k:K, t:"Slinger", p:152, b:[
 {a:"Fernkämpfer, die sich mit einer Kakofonie von Schüssen ankündigen.\nMeist auf den höchsten Aussichtspunkten ihrer Schiffe zu finden, wo sie das Meer beobachten, sind Slinger die erste Verteidigungslinie gegen Angriffe von Piraten und wilden Bestien. Leicht gepanzert und mit schwerer Feuerkraft ausgestattet, ist ihr Ziel meist, ihre Ziele fallen zu lassen, bevor sie nah genug zum Kämpfen kommen.\nObwohl die meisten Slinger Hammerpin und Schwarzpulver nutzen, um ihre Spuren in der Welt zu hinterlassen, gibt es Traditionalisten – Bögen, Armbrüste und sogar Schleudern können in den richtigen Händen ebenso tödlich sein."},
 {c:"Sperrige Munition", x:"Da großflächige maschinelle Fertigung eine nahezu undenkbare Seltenheit ist, gibt es keine Standardgröße oder kein Standardkaliber für Munition in Wildsea-Waffen. Feuerwaffen werden so großzügig wie möglich gebaut, was sie laden und abfeuern, doch Ladehemmungen sind trotzdem häufig und Wartung ist ein Muss. Viele Slinger fertigen (oder verändern zumindest) ihre Waffen und Munition in ihrer Freizeit selbst oder halten Ersatzwaffen bereit, falls ihr bevorzugtes Werkzeug klemmt oder fehlzündet."},
 {c:"Gesetzesbringer", x:"In vielen der grenznaheren Siedlungen werden Slinger oft als kurzfristige Gesetzesbringer verpflichtet, Außenstehende, die sich wenig um lokale Konflikte kümmern, aber viel um die Chance, etwas Geld zu verdienen. Diese Praxis hat vielen Slingern Respekt an Orten eingebracht, wo sie ihn nicht erwartet hätten … und Zorn an Orten, wo sie ihn erwartet hätten."},
 H.fragen("des Slingers",["Was ist die verzweifeltste Lage, aus der du dich mit cleverem Schießen und gut getimten Tricks befreit hast?","Hast du je Gesetzesbringer-Arbeit für eine der kleineren Landzungen oder Siedlungen übernommen, und wenn ja, gab es langfristige Folgen?","Bist du der Typ, der Büchsenmacher aufspürt und maßlose Summen für maßgefertigte Stücke und passende Munition zahlt, oder der Typ, der in seiner Freizeit Waffen zusammenbastelt und sie mit allem lädt, was zur Hand ist?"]),
 {c:"Alternative Darstellungen", x:"Slinger passen bereits gut in den Waldläufer-Archetyp, können aber auch eher in Richtung traditioneller Cowboy oder Revolverheld gefärbt werden. Alternativ kann das Umfärben einiger Aspekte einen mönchsartigen Kämpfer mit Fokus auf Fernkampf-Energiestöße ergeben, wenn dir nach einem vollen Fantasy-Ansatz ist."}
 ].concat(H.aspHead(),[
 A("Revolverhelden-Haltung",5,"Eigenschaft","Du bist schwer aus der Ruhe zu bringen, was auch immer auf dich zukommt."),
 A("Abzugsdisziplin",3,"Eigenschaft","Markiere beim Angriff auf Fernkampfdistanz, um ein Konflikt-Ergebnis als Triumph zu zählen."),
 A("Volltreffer",3,"Eigenschaft","Du kannst Angriffe präzise ausrichten (etwa auf eine Schwachstelle), ohne Abzug für Schwierigkeit."),
 A("Von hoch oben",4,"Eigenschaft","Ein wahrer Adlerblick. Erhöhe die Wucht beim Angriff aus erhöhter Position."),
 A("Donner",4,"Eigenschaft","Markiere, um die Wucht beim Angriff auf Fernkampfdistanz zu erhöhen."),
 A("Trickschuss",5,"Eigenschaft","Brenne, um ein Ziel anzugreifen, das du nicht sehen kannst oder zu dem du keine Sichtlinie hast."),
 A("Amateur-Büchsenmacher",4,"Eigenschaft","Verlängere die Leiste jeder temporären FK-Waffe, die du für dich fertigst, um zwei Kästchen."),
 A("Auge in Auge",4,"Eigenschaft","Du kannst FK-Waffen im Nahkampf und in engen Gefechten ohne Abzug für Schwierigkeit nutzen."),
 A("Essenzmühle",2,"Ausrüstung","Verbrauche eine Probe, um einer deiner bestehenden FK-Waffen eine thematisch passende Schadensart hinzuzufügen. Diese zusätzliche Schadensart bleibt, bis du die Essenzmühle erneut nutzt."),
 A("Präzisionsverweigerung",4,"Ausrüstung","Einmal pro Szene kannst du sofort den Fokus an dich reißen, wenn du das Ziel eines Fernkampfangriffs bist."),
 A("Sperrfeuer",4,"Eigenschaft","Du kannst mit einem erfolgreichen FK-Angriff mehreren entfernten Gegnern Schaden zufügen."),
 A("Rauchbomben",4,"Ausrüstung","Markiere, um eine Rauchwolke zu erzeugen, die die Sicht in deinem Bereich für andere verdeckt, nicht aber für dich."),
 A("Hammerpin-Revolver",3,"Ausrüstung","Ein schwerer Revolver mit drehbarer Trommel. Verursacht FK-Stumpf- oder Explosions-Schaden."),
 A("Repetierbüchse",2,"Ausrüstung","Eine langläufige Büchse mit bernsteinfarbenem Zielfernrohr. Verursacht FK-Explosions-Schaden. Erhöhe die Wucht beim Angriff aus verborgener Position."),
 A("Kupfer-Abgesägte",3,"Ausrüstung","Eine abgesägte Schrotflinte, ladbar mit Schrapnell- oder Salzpatronen. Verursacht FK-Explosions- oder Salz-Schaden.")
 ],H.kit("Slinger als Posten",[
  ["Stärke (wähle 1)","Anmut, Eisen, Schärfe"],
  ["Fertigkeiten & Sprachen (wähle 5) – Fertigkeiten","Zerschlagen, Glänzen, Hacken, Jagen, Überlisten, Rasseln, Springen"],
  ["Fertigkeiten & Sprachen – Sprachen","Saprekk, Brasstongue, Lyre-Bite"],
  ["Ressourcen (wähle 2) – Bergegut","Patronenhülsen, Schwarzpulverbeutel"],
  ["Ressourcen – Proben","Wurmapfel-Kerne"],
  ["Ressourcen – Flüstern","Ferner Donner"],
  ["Ressourcen – Seekarten","Das Logbuch eines alten Trunkenbolds"],
  ["Antrieb (wähle 1)","Die Crew vor Enterern und Piraten beschützen · Eine legendäre vorverdante Waffe finden und wiederherstellen"],
  ["Morast (wähle 1)","Deine Waffen klemmen und zünden zu ungünstigen Zeiten fehl · Deine Fernsicht verschwimmt und wird dunstig"]]),
 [H.q("Ich hätte mich einer Plünderer-Crew anschließen können, aber wo bleibt da der Spaß? Hier ist die Moral besser. Das Essen auch.","Lace DeCastin, Ardent-Slinger")])});
L.push({id:"steep", k:K, t:"Steep", p:154, b:[
 {a:"Getränkemeister, die dich mit nur einem Schluck mit den tieferen Geheimnissen der Wildsea verbinden.\nNahrung und Wasser nähren den Körper; Gebräue nähren den Geist. Ein Steep ist die Hand, die Gebräue mischt. Steeps bieten einer Gruppe von Wildseglern alle Arten von Lösungen, ihre Neugier und Fantasie begrenzt nur durch ihre Zutaten.\nSo wie Getränke in vielen Formen kommen, so auch Steeps. Ob heiß oder kalt, stark oder mild, von einem Steep gemachte Getränke lassen dich ein wenig mehr fühlen. Ob mutiger, entspannter, wärmer, größer, scharfsinniger, wahrnehmender – wie dein „Mehr“ schmeckt, hängt ganz vom Steep ab. Alle Steeps lassen dich in der einen oder anderen Weise mehr sein, weil sie tiefer verstehen, wie sich der Schleier mit jedem Schluck teilt. Ihrem oder deinem."},
 {c:"Die Wärmen im Inneren", x:"Die ersten organisierten Zusammenkünfte vor und nach der Verdanz drehten sich um Getränke. Wasser ist mehr als eine Notwendigkeit. Es ist eine Zutat im Rezept der Gemeinschaft. Wärme, Trost und Staunen werden um einen Steep eingeflößt, während sie destillieren. Wie bei allen Rezepten variieren sie von Fall zu Fall. Unveränderlich sind sie unteilbar, bedenkt man die Verbindungen, die sie schmieden.\nSteeps gab es nicht immer, aber es gab immer Steeps. Ein Steep besteht überall, wo Gefährten sind, ob ihre Anwesenheit gegenwärtig ist oder nur ihre Gaben. Crewkameraden teilen Geschichten bei Ale, doch wenn ein Steep in das Erzählen einstimmt, wird der Brunnen, aus dem sie alle schöpfen, tiefer. Perspektiven können im Würztrank verschmelzen, ob beim Denken oder beim Trinken."},
 H.fragen("des Steeps",["Was ist dein Signaturgetränk, nicht unbedingt eines, das du erfunden hast, aber eines, das du perfektioniert hast? Gibt es jemanden, dem es nicht schmeckt, oder jemanden, der nicht genug bekommen kann?","Welche persönlichen Rituale umgeben deine Gebräue, was tust du vor, während und nach dem Brauen? Für wen änderst du sie, für wen machst du Zugeständnisse (ob durch Hinzufügen oder Weglassen von Zutaten oder etwas anderes)?","Welche Geheimnisse haben deine Getränke offenbart? Wie sinnst du darüber nach, und mit wem?"]),
 {c:"Alternative Darstellungen", x:"Der Steep passt bereits recht gut in die Rolle des Moraloffiziers eines Schiffs, aber das ist keineswegs eine Grenze. Wer sich auf die spirituellen Aspekte und Färbungen des Steeps stützt, erhält einen brauchbaren Wildsea-Seher."}
 ].concat(H.aspHead(),[
 A("Anima-Präsenz",2,"Eigenschaft","Geister können dich immer sehen und hören, und du kannst sie immer sehen und hören."),
 A("Ritus der Blüte",3,"Eigenschaft","Alte Aromen platzen auf neue Weise auf. Verbrauche ein Flüstern, wenn ein Verbündeter eines deiner Gebräue trinkt, und profitiere von einem Aspekt von ihm, bis das Gebräu nachgelassen hat."),
 A("Trank der Jugend",5,"Eigenschaft","Dein Körper sieht nicht danach aus, aber du bist weit älter, als du scheinst. Du hast viele Tricks gelernt, es so zu halten."),
 A("Wirklichkeit ziehen lassen",3,"Eigenschaft","Greifbare Dinge ziehen und verströmen ihre Essenz durch die Körperliche Sphäre. Markiere, um die Vergangenheit eines Objekts zu kennen."),
 A("Kein Tropfen verschwendet",4,"Eigenschaft","Ein Steep verschüttet nie. Einmal pro Reise kann ein Crewkamerad dein Desaster erleiden, um einem von dir gebrauten Vorteil ein Kästchen und ein Wort hinzuzufügen. Gab es keine Wendung, dürft ihr beide ein Wort in einem Flüstern ändern."),
 A("Die Reste lesen",3,"Eigenschaft","Ob Blätter, Satz, Treber oder Knochen, alle Gebräue hinterlassen Überreste. Verbrauche eine Probe, um eine Frage zu stellen und in deinen Resten ein Omen zu lesen."),
 A("Windiger Rührlöffel",2,"Ausrüstung","Die kühlenden Brisen dieses langen Rührlöffels erreichen immer den Boden des Topfs. Er trägt auch dich, stockend. Markiere, um für die Dauer der Szene schlecht darauf zu fliegen."),
 A("Zirkel-Teppich",4,"Ausrüstung","Ein Gedeck aus gewebten Verflechtungen. Verbündete dürfen einen Aspekt markieren, um von einem deiner Gebräue zu profitieren (mit verringerter Wucht)."),
 A("Das Siegerwunschbein",3,"Ausrüstung","Mit der richtigen Zeit und Ausrüstung kann ein Steep mit diesem armlangen Gabelbeinstück eine kräftige Brühe kochen. Triumphe bei Würfen zum Brauen heilen für alle Crewkameraden, die am Ergebnis teilhaben, eine Markierung Schaden."),
 A("Crezzagreanischer Kantharos",2,"Ausrüstung","Ein Gefäß, schon in der Vorverdanz uralt, genutzt, um einem Würztrank mehr als nur Geschmack einzuflößen. Beim Brauen mit diesem Gefäß: Nimm 1 Abzug, um dem gewährten Vorteil 1 Rang einer Fertigkeit oder Sprache, die du kennst, als zusätzliche Gabe hinzuzufügen."),
 A("Ossein-Kessel",2,"Ausrüstung","Dieses ewig alte Erbstück dient dazu, Getränke herzustellen, die mehr als deinen Körper wärmen. Triumphe bei Zusammenbrauen-Würfen gewähren ein Flüstern."),
 A("Salamini",3,"Gefährte","Wie ein Salamax, nur kleiner. Ihre kochende Spucke hat genau die perfekte Temperatur für einen Würztrank. Ihr heißer Speichel verursacht NK-Flammen-Schaden."),
 A("Dampf-Vertrauter",4,"Gefährte","Wärme, Staunen und Feuchtigkeit sind einem Steep vertraut, und manchmal bleiben die Geister, die sie rufen, zurück, um andere zu trösten. Markiere, um die Wirkungen schlechter Luft, Sporen oder Kälte zu neutralisieren.")
 ],H.kit("Steep als Posten",[
  ["Stärke (wähle 1)","Schleier, Gezeiten, Instinkt"],
  ["Fertigkeiten & Sprachen (wähle 5) – Fertigkeiten","Zusammenbrauen, Kochen, Glänzen, Ernten, Überlisten, Spüren, Beeinflussen"],
  ["Fertigkeiten & Sprachen – Sprachen","Alte Hand, Lyre-Bite, Raka Spit"],
  ["Ressourcen (wähle 2) – Bergegut","Ahnen-Porzellan, Geschwärzter Brautopf"],
  ["Ressourcen – Proben","Hightower-Teeblätter, Tropfkristall"],
  ["Ressourcen – Flüstern","Freundeskreis, Wahrheit im Dampf"],
  ["Ressourcen – Seekarten","Eine teebefleckte Karte"],
  ["Antrieb (wähle 1)","Anderen inmitten von Turbulenzen Ruhe bringen · Mit Blättern aus den entlegensten Regionen brauen"],
  ["Morast (wähle 1)","Deine Ausrüstung ist brühend heiß, zu heiß zum Anfassen · Paranoia überkommt dich – hat sich etwas eingenistet?"]]),
 [H.q("Setz dich. Entspann dich. Es ist zur rechten Zeit fertig. Lass uns deinen Geist wärmen, zusammen mit deinem Körper.","Batrava Botay, Mothryn-Steep")])});
})(WS_NACH.charaktere);
