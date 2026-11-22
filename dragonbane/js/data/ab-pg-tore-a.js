/* Pfad des Ruhms, Teil 2: Tore der Macht (Buch S. 54–92) – deutsche Fassung, Teil a: Lage, Ankunftshallen, Ratshallen. Figuren/Kästen/Tabellen/übrige Bereiche: ab-pg-tore-b.js. §…§ = Fertigkeit. */
window.DB_AB = window.DB_AB || {};
DB_AB["pg-tore"] = {
 id:"pg-tore", t:"Tore der Macht", band:"pg", buch:"db_pg", p:54, img:"abenteuer/pg-tore-titel", kurz:"56 Orte",
 vl:"„Endlich steht ihr vor den Toren der Macht, die drei Schlüssel in den Händen, bereit, in die Dunkelheit einzutreten – wenn ihr nur herausfindet, wie man sie benutzt. Die beiden riesigen Torflügel ragen vor euch in der Felswand auf. Zu beiden Seiten stehen turmhohe Einhörner mit gesenkten Köpfen und gekreuzten Hörnern, und die Tore sind mit Reliefs von vier ausgestreckten, gekreuzten Händen unterschiedlicher Form und Größe verziert, die sich in der Mitte der Türen treffen.“",
 lage:[
  {"h":"Einstieg","p":55},
  "*Tore der Macht* ist das zweite Abenteuer der Trilogie *Pfad des Ruhms* und setzt genau dort an, wo *Der tote Wald* aufgehört hat. Das Abenteuer beschreibt ein unterirdisches Zwergenreich, das seit vielen Jahrhunderten verlassen war und erst kürzlich von einer Bande Orks und Untoter im Dienst des Nekromanten Dakoth entdeckt wurde. Hier warten große Schätze, aber vielleicht noch größere Gefahren – von denen sich viele mit List und Vorsicht vermeiden lassen.",
  "Der Text beschreibt zuerst den Einstieg ins Abenteuer, danach eine Zusammenfassung des Hintergrunds, einige wichtige Charaktere und Kreaturen sowie allgemeine Hinweise zum Spielen des Abenteuers. Anschließend werden die fünf Bereiche des Höhlensystems Raum für Raum ausführlich beschrieben. Einen Überblick über die Handlung findest du auf S. 8 der Kampagneneinführung.",
  "Das Abenteuer beginnt, als die Spielercharaktere vor den Toren der Macht stehen, bereit, die Türen zum uralten Zwergenreich zu öffnen. Sie haben die drei Schlüssel gefunden und wahrscheinlich auch das Gedicht, das beschreibt, wie man sie benutzt. Lies oder umschreibe Folgendes:",
  {"zit":["Ein gelungener §Entdecken§-Wurf zeigt, dass die Augen der Einhörner leere Löcher für die Perlen sind, und ein Wurf auf §Mythen & Legenden§ legt nahe, dass die vier Hände die eines Elfen, eines Zwergs, eines Orks und eines Halblings sind."]},
  {"zit":["„Ihr setzt die Perlen in die Augenhöhlen der Statuen. Es klickt – sie passen genau, und der Mutigste von euch hebt sofort das Muschelhorn und lässt vier laute Stöße an der Felswand widerhallen. Alles verstummt. Dann spürt ihr, kaum hörbar, wie tief im Berg ein verborgener Mechanismus anläuft und die Tore vor euch langsam öffnet. Drinnen ist es dunkel, doch irgendwo voraus erahnt ihr einen schwachen goldenen Schein. Staub wirbelt in der Luft, vielleicht seit Jahrhunderten unberührt. Ihr werft euch Blicke zu, bevor ihr die frische Luft hinter euch lasst und hinabsteigt in die Welt darunter. Was werdet ihr hier finden? Schätze, Gefahren, Wege in unbekannte Länder?“","„Die Waffen und Rucksäcke fest im Griff, tut ihr die ersten Schritte in die Dunkelheit.“"]},
  {"h":"Tefalas erscheint","p":56},
  "Während die Spielercharaktere noch überlegen, wie sie weiter vorgehen, tritt plötzlich in kurzer Entfernung von den Toren eine Gestalt aus dem Gebüsch, gekleidet in eine burgunderrote Robe mit dem Drachenzeichen Eledains. Die Charaktere sind ihm wahrscheinlich schon begegnet – es ist der Mönch Tefalas. Er beginnt zu sprechen:",
  {"zit":["„Wir begegnen uns wieder, Abenteurer. Ich hatte das Gefühl, dass ihr früher oder später euren Weg hierher findet. Ich habe euch etwas Wichtiges zu sagen, bevor ihr die Tore der Macht betretet. Hinter diesen Türen hausen Schrecken jenseits eurer schlimmsten Albträume. Aber ich kann euch helfen – wenn ihr mir im Gegenzug helft.“"]},
  "Lass die Charaktere reagieren, bevor Tefalas fortfährt.",
  {"zit":["„Auf der anderen Seite dieser Berge liegen die Ostlande, ein Reich, das seit Jahrhunderten zwischen dem reinigenden Feuer Eledains und der verderbenden Finsternis des Dämons Sathmog schwebt. Doch nun hat ein neuer Feind dieses Gleichgewicht erschüttert. Ein böser Nekromant namens Dakoth plündert und brandschatzt mit seinen untoten Heerscharen die Dörfer und wird bald die gesamten Ostlande unter seine Herrschaft bringen. Dakoth hat seinen größten Diener, den Todeswiedergänger Mogdath, ausgesandt, um das Herz Sathmogs zu holen, das der Legende nach hinter den Toren der Macht verborgen liegt. Mit einem so mächtigen Artefakt wie dem Herz der Finsternis würde Dakoth unbesiegbar.","Mein Meister Godvindel hat mich hierhergeschickt, um Mogdath zu vernichten und die Ostlande zu retten. Und mein Meister sagte mir, dass das Herz der Finsternis den Fluch über dem Toten Wald aufheben kann. Wir müssen Mogdath aufhalten und das Herz der Finsternis vor Dakoth finden. Aber allein kann ich das nicht. Wenn ihr mir helft, dürft ihr alle Schätze behalten, die ihr in diesem Zwergenreich findet. Und die sollen beträchtlich sein.“"]},
  "Tefalas lässt das einen Moment wirken, bevor er fortfährt:",
  {"zit":["„Mein Meister Godvindel gab mir diesen Dolch, durchtränkt von mächtiger Magie, die es ihm erlaubt, einen Untoten zu bannen. Wird Mogdath von seiner Klinge getroffen, wird sein böser Geist darin gefangen. Wir müssen den Dolch dann zu Godvindel nach Otag bringen, der Festung unseres Ordens, wo mein Meister den Dolch und Mogdath mit ihm zerstören kann. Es ist die einzige Möglichkeit, Mogdath endgültig zu besiegen.","Es gibt einen unterirdischen Weg in die Ostlande – einen Fluss tief im Berg. Wir müssen ihn finden. Aber ich bin kein Krieger, und so überlasse ich es gern einem anderen fähigen und gutherzigen Kämpfer, den Dolch im Kampf zu führen.“"]},
  "Zögern die Spielercharaktere angesichts des Auftrags, bittet Tefalas dennoch darum, mit ihnen durch die Tore der Macht gehen zu dürfen, um Mogdath selbst zu vernichten.",
  {"h":"Zeit zu öffnen …"},
  "Das Gedicht im Anhänger, den die Spielercharaktere wahrscheinlich vom Einsiedler im Tiefmoor erhalten haben, verrät, wie die drei Schlüssel zu benutzen sind:",
  {"zit":["Auf der Herzseite, Mondenschein,\nglatter Ebenholz, Augenschmaus,\nAus der Muschel, die jede Jahreszeit ruft,\nöffnet die Zwergenhallen."]},
  "Setzen die Charaktere die weiße Perle („den Mond“) in das Auge des linken Einhorns („Herzseite“) und die schwarze Perle („Ebenholz“) in das Auge des rechten und blasen viermal ins Muschelhorn („jede Jahreszeit“), öffnen sich die Tore der Macht mit einem Grollen und gewähren Zugang zur Eingangshalle (Raum 1 auf S. 66).",
  {"stein":{"h":"Tefalas’ Dolch","b":[
   "Der Dolch, den Tefalas von seinem Meister Godvindel erhalten hat, ist magisch und meisterhaft gefertigt. Er gewährt einen Vorteil auf alle Angriffe gegen Untote und macht seinen Träger immun gegen Furchtangriffe und magische Angriffe von Untoten.",
   "Trifft ein Angriff mit dem Dolch zum ersten Mal einen Todeswiedergänger und verursacht mindestens 1 TP Schaden, werden die magischen Fesseln, die den Wiedergänger an die Welt binden, durchtrennt, und sein Geist wird in die Klinge des Dolchs gesaugt. Mit dem Dolch kann nur ein einziger Todeswiedergänger einmal gefangen werden.",
   "Den untoten Geist im Dolch gefangen zu halten, erfordert geistige Kraft. Der Träger verliert W6 WP, wenn der Wiedergänger gefangen wird – hat er nicht genug WP, wird der Geist nicht gefangen –, und danach jede Nacht weitere 1 WP. Während dieser Zeit kann der Charakter WP überhaupt nicht regenerieren, außer durch Magie.",
   "Verliert der Träger, während er den Dolch trägt, alle WP, wird sein Geist in den Dolch gesaugt, und der gefangene Todeswiedergänger übernimmt die Kontrolle über den Körper des Trägers. Der Träger spürt dies, wenn er noch 5 WP übrig hat. Der Charakter fühlt sich schwach und wird von Träumen geplagt, in denen eine Schattengestalt aus dem Dolch kriecht und seinen Arm hinaufsickert, der sich nicht mehr wie ein Teil des eigenen Körpers anfühlt.",
   "Lässt der Träger den Dolch los, endet der Effekt, und WP können normal regeneriert werden, doch der Wiedergänger befreit sich nach einem Tagesabschnitt. Die Charaktere können den Dolch jedoch abwechselnd tragen. Ein neuer Charakter, der den Dolch nimmt, verliert sofort W6 WP und verliert weiter WP wie oben beschrieben.",
   "Der Dolch kann mit keinem den Spielercharakteren zur Verfügung stehenden Mittel zerstört werden. Mehr über die wahre Funktion und den Zweck des Dolchs steht auf S. 123 in *Herz der Finsternis*."]}},
  {"h":"Die aktuelle Lage","p":57},
  "Achthundert Jahre lang standen die Tore der Macht verschlossen. Nachdem der Bürgerkrieg zwischen Königin Gwinna und ihrem Bruder Kalin (S. 5) beendet war und die letzten Zwerge gegangen waren, herrschte lange die Stille des Todes im Reich.",
  "Vor Kurzem hat sich das jedoch geändert. Die Hallen im Inneren sind nicht mehr leer.",
  "Der Nekromant Dakoth hat von Osten her einen Weg hinein gefunden, über einen unterirdischen Fluss, der in die Ostlande mündet. Er hat seinen größten Diener, den Todeswiedergänger Mogdath, entsandt, um eine Expedition aus untoten Skeletten, versklavten Orks und Ogern, ein paar Mantikoren, dem Nachtwarg Sharch und den beiden Schattenschemen Daz und Gozar anzuführen.",
  "Ihr Auftrag ist es, das Zwergenreich zu plündern und seine Minen und Schmieden wieder in Betrieb zu nehmen, um Waffen für den laufenden Krieg herzustellen. Sie suchen außerdem das Herz der Finsternis, ohne zu wissen, dass das Artefakt in Wahrheit in den Ostlanden verborgen liegt (S. 145).",
  {"h":"Fallen und Einstürze"},
  "Nach dem Eintreffen begann Mogdath, die Zwergenhallen zu kartieren. Bald wurde klar, dass das Reich dem inneren Zwist zum Opfer gefallen war und ein großer Teil der Stadt durch Fallen zerstört worden war, die in den letzten Kriegstagen ausgelöst wurden.",
  "Es zeigte sich aber auch, dass einige Fallen noch aktiv waren und ungeschickte Orks auf der Suche nach Schätzen mehrere davon auslösten. Zahlreiche Hallen und Gänge stürzten ein, und die letzten Zugänge in die tieferen Teile des Reichs wurden für immer versperrt. Viele Orks fanden bei den Einstürzen den Tod.",
  "Um künftige Unfälle zu vermeiden, haben die Wiedergänger den Orks und Ogern nun den Zutritt zu den oberen Ebenen des Reichs verboten. Am Eingang wurden Skelette postiert, sowohl um Eindringlinge abzuwehren als auch um die Orks fernzuhalten. Einige von ihnen patrouillieren auch durch die leeren Gänge. Die Mantikoren bewachen die letzten Schätze.",
  {"h":"Bergbau"},
  "Die Oger bauen nun das reiche Eisenerz des Bergs ab, das dann von den Orks in der alten Zwergenschmiede verarbeitet wird. Doch nach all den Einstürzen sind Mogdaths Diener zu wenige, um die Schmiede mit voller Kraft zu betreiben. Dakoth hat Nachricht geschickt, dass er zur Mondwende kommen wird, um die Schmiede zu inspizieren und über ihren künftigen Betrieb zu entscheiden. Er erwartet außerdem, dass Mogdath bis dahin das Herz der Finsternis oder zumindest Hinweise auf dessen Verbleib gefunden hat.",
  "Das setzt Mogdath stark unter Druck, Ergebnisse zu liefern, und er treibt seine Untergebenen hart an. Er wandert ziellos durch die unterirdischen Gänge und Korridore und prüft gelegentlich mit Magie, ob alles in Ordnung ist, aber er kann nicht überall zugleich sein, und er vertraut kaum jemandem, nicht einmal seinen engsten Untergebenen, den Schattenschemen Daz und Gozar.",
  {"stein":{"h":"Die Tore schließen?","b":[
   "Einmal geöffnet, bleiben die Tore der Macht offen und lassen sich mit keinem den Spielercharakteren zur Verfügung stehenden Mittel wieder schließen. Das bedeutet, dass auch andere Menschen aus dem Toten Wald das Zwergenreich betreten können, etwa Sturmhand oder Doriath. Nach einem Tagesabschnitt bemerken patrouillierende Skelettwächter oder einer der Wiedergänger, dass die Tore offen stehen, und melden Mogdath, dass Eindringlinge ins alte Reich gekommen sind."]}},
  {"stein":{"h":"Sturmhand & Doriath","b":[
   "Haben Sturmhand und Doriath *Der tote Wald* überlebt, spielen sie vielleicht auch in *Tore der Macht* eine Rolle. Sie können die Spielercharaktere sogar hierher begleiten. Beide suchen das Herz der Finsternis jedoch zu ihrem eigenen Vorteil und werden die Charaktere verraten, sobald es ihnen nützt."]}},
  {"h":"Die wichtigsten Gegner","p":58},
  "Dieser Abschnitt beschreibt die Untoten, die im Abenteuer eine wichtige Rolle spielen und an verschiedenen Orten angetroffen werden können: den Todeswiedergänger Mogdath, die Schattenschemen Daz und Gozar und den Nachtwarg Sharch (siehe Figuren). Weitere Monster, Kreaturen und Personen werden dort beschrieben, wo sie im Abenteuer auftauchen.",
  {"h":"Mogdath"},
  "Mogdath war einst ein Ritter Eledains. Machthungrig und jähzornig, strebte er unablässig danach, seine magische Macht zu mehren. Schließlich zogen ihn dunkle Geheimnisse an, die von den Lehren Eledains verboten sind, und er nahm Kontakt zum Nekromanten Dakoth auf.",
  "Mogdath wurde in seiner Burg von seinem eigenen Orden erschlagen, und obwohl Dakoth den sterbenden Mogdath bald fand, konnte er nichts tun, als Mogdaths Geist aus der Unterwelt zurückzurufen. So erstand ein neuer Mogdath als eiskalter Todeswiedergänger. Er ergriff sein uraltes Schwert und schwor Dakoth ewige Treue.",
  "Ein Todeswiedergänger ist eine sehr mächtige Art von Untoten, die in einer Gestalt erscheint, die der zu Lebzeiten ähnelt, aber völlig schwarz ist mit glühenden roten Augen. Der Körper des Todeswiedergängers besteht aus verdichteter Dunkelheit und ist vollständig stofflich.",
  "Anders als normale Wiedergänger (Regelbuch S. 87) sind Todeswiedergänger nicht an einen bestimmten Ort gebunden, sondern folgen dem Befehl ihres Meisters, wohin er sie auch führt.",
  {"stein":{"h":"Mogdaths Reaktionen","b":[
   "Wenn die Spielercharaktere an den Toren der Macht ankommen, sitzt Mogdath auf dem Thron in der Ratskammer (Raum 17). Erfährt er von ihrem Eindringen (siehe den Kasten „Alarm schlagen“ auf S. 64), ruft er sofort Daz und Gozar durch gellende Schreie herbei, die im ganzen Reich widerhallen. Mit diesen Schreien kannst du die Spieler verunsichern.",
   "Nach einem Viertel treffen die Schattenschemen ein und erhalten ihre Befehle von Mogdath. Er schickt sie aus, die Eindringlinge auszukundschaften und, wenn möglich, zu beseitigen, und lässt den Nachtwarg frei durch die Gänge streifen. Das wird über die Zufallsereignis-Tabellen der verschiedenen Ebenen abgewickelt. Mogdath selbst ist ein Feigling und hat panische Angst vor Feuer – er greift am liebsten aus dem Hinterhalt an und zieht sich dann rasch zurück.",
   "Wenn du möchtest, kannst du auf die Zufallsereignis-Tabellen verzichten, besonders in den Ratshallen. Wichtiger ist es, für die Spieler eine Atmosphäre schleichenden Grauens aufzubauen. Du kannst Begegnungen mit den Schattenschemen überall einbauen, wo es dramaturgisch passend erscheint.",
   "Besiegen die Charaktere die Schattenschemen, zieht sich Mogdath tiefer in den Berg zurück, in die Stadt, wo er versucht, sie in einen Kampf mit den Mantikoren zu locken (S. 83). Überleben die Charaktere, flieht Mogdath in die Schmiede und die Mine, wo er Orks und Oger gegen die Eindringlinge aufhetzt. Erst wenn auch das zu scheitern scheint oder die Orks sich gegen ihn wenden, stellt sich Mogdath den Charakteren direkt. Er erkennt sofort die Bedrohung durch Tefalas’ Dolch (S. 56) und versucht, jeden Angriff damit zu parieren.",
   "Fällt Mogdath, solange die Schattenschemen noch da sind, übernehmen sie das Kommando – zuerst Daz, dann Gozar. Erst wenn alle drei vernichtet sind, bricht der Widerstand zusammen – alle Skelette zerfallen, der Nachtwarg Sharch läuft davon, und die Orks begreifen, dass niemand mehr die Peitsche schwingt."]}},
  {"h":"Überblick","p":63},
  "Die Zwergenfestung, bekannt als die Tore der Macht, besteht aus fünf Bereichen auf vier Ebenen, die durch verschiedene Treppen und Öffnungen verbunden sind (siehe den Querschnitt unten).",
  "**Die Ankunftshallen (Ebene 0):** Die Tore vom Toten Wald öffnen sich in die Ankunftshallen. Sie werden von untoten Skelettwächtern bevölkert. Es gibt einen Zwergentempel, in dem der Geist der letzten Herrscherin des Reichs, Königin Gwinna, haust, der wertvolle Informationen und einen sicheren Rastplatz bieten kann. Eine versteckte Treppe und zwei Wendeltreppen (verschlossen) führen hinab zur Schmiede. Eine große Prunktreppe führt hinauf zu den Ratshallen.",
  "**Die Ratshallen (Ebene +1):** Dies ist Mogdaths Stützpunkt, bis er vom Eindringen der Spielercharaktere erfährt. Der Bereich ist größtenteils unbevölkert, birgt aber einen möglichen Verbündeten der Charaktere: den kleinen Branntweindrachen. Von hier führt die große Osttreppe hinab in die Stadt und die Westtreppe zu den Ankunftshallen.",
  "**Die Stadt (Ebene 0):** Dieser Bereich wurde vor der Aufgabe des Reichs größtenteils durch Kämpfe zerstört und später durch die von den Orks ausgelösten Fallen. Heute leben hier die Orks, die in der Schmiede arbeiten und von ihrem Anführer Schwarzzahn herumkommandiert werden, der wiederum Mogdath und die Schattenschemen fürchtet. Ein paar Mantikoren bewachen die verbliebenen Schätze. Der Bereich ist nur durch die Osttreppe mit den Ratshallen und durch eine weitere große Treppe mit der Schmiede verbunden. Obwohl die Stadt und die Ankunftshallen auf derselben Ebene liegen, gibt es keinen direkten Weg zwischen ihnen. Eine große Treppe führt hinab zur Schmiede.",
  "**Die Schmiede (Ebene −1):** Hier schmieden Orks und Oger Waffen. Von hier führen eine versteckte Treppe und zwei Wendeltreppen hinauf zu den Ankunftshallen und eine weitere Treppe zur Stadt. Die Mine darunter ist über Treppen und einen Erzkübel erreichbar. Außerdem gibt es einen Anleger am unterirdischen Fluss, der aus dem Zwergenreich in die Ostlande führt.",
  "**Die Mine (Ebene −2)** ist größtenteils eine Sackgasse. Hier arbeiten und leben die Oger. Die Mine ist durch einen Erzkübel und eine Treppe mit der Schmiede verbunden.",
  {"bild":{"img":"abenteuer/pg-tore-querschnitt","t":"Die Tore der Macht"}},
  {"h":"Tipps für die SL","p":64},
  "*Tore der Macht* ist ein ortsbezogenes Abenteuer ohne vorgegebene Handlung. Die Spielercharaktere betreten das Zwergenreich und wollen auf Tefalas’ Bitte hin vermutlich Mogdaths Geist im magischen Dolch fangen und außerdem einen anderen Ausweg finden, aber wie sie diese Ziele erreichen, liegt bei den Spielern.",
  "Als SL wirst du vor allem die Beschreibung des Höhlensystems und seiner Bewohner sowie die Zufallsereignis-Tabellen verwenden. Es steht dir auch frei, die Hauptgegner Mogdath und seine Gehilfen nach eigenem Ermessen einzusetzen. Nutze den Kasten „Mogdaths Reaktionen“ (S. 61) und passe die Ereignisse an die Handlungen der Spielercharaktere an.",
  "Der Ausgang der folgenden Ereignisse ist besonders wichtig:",
  {"ul":[
   "Schaffen es die ersten Skelettwächter in den Ankunftshallen, Mogdath zu alarmieren? Verhindern die Charaktere das, haben sie mehr Zeit, die Zwergenfestung zu erkunden. Sobald Mogdath vom Eindringen erfährt, steigt die Gefahr, den Schattenschemen zu begegnen.",
   "Finden die Charaktere den Weg zum Tempel (Raum 13) und zur Kapelle (Raum 47) und sprechen sie mit den Geistern von Königin Gwinna und dem Priester Kaldur? Dort können sie Lange Rasten einlegen und wertvolle Informationen über das Zwergenreich erhalten. Vom Priester können sie erfahren, dass das Herz der Finsternis nicht mehr hier ist, sondern wahrscheinlich in den Ostlanden. Das ist eine Schlüsselinformation – versuche sicherzustellen, dass die Charaktere sie bekommen.",
   "Können die Charaktere ein Bündnis mit den Orks gegen Mogdath und die Schattenschemen schmieden? Das erledigt viele Gegner des Abenteuers, erfordert aber viel Diplomatie (S. 81)."
  ]},
  {"h":"Zufallsereignisse"},
  "Die Beschreibungen der verschiedenen Bereiche des Zwergenreichs enthalten Tabellen für Zufallsereignisse (Tabellen-Tab). Ein Ereignis kann mehrmals eintreten, sofern nicht anders angegeben.",
  "Würfle in jedem Viertel auf Zufallsereignisse, außer in der Stadt. Sobald Mogdath vom Eindringen der Charaktere erfährt, werden gefährliche Ereignisse wahrscheinlicher.",
  "Denke daran, dass die Tabellen nur ein Hilfsmittel für dich als SL sind – du kannst selbst entscheiden, ob ein Ereignis eintritt oder nicht, und Ereignisse wählen, statt zu würfeln.",
  "**Eskalierende Ereignisse:** Manche Zufallsereignisse eskalieren jedes Mal, wenn sie eintreten. Das wird durch die Buchstaben A, B und C angezeigt – Ereignis A tritt beim ersten Mal ein, B beim zweiten und C beim dritten Mal.",
  {"stein":{"h":"Alarm schlagen","p":64,"b":[
   "Es gibt drei Wege, wie Mogdath vom Eindringen der Spielercharaktere erfahren kann:",
   {"ul":["Ein Skelett in den Ankunftshallen schlägt Alarm.","Die Charaktere begegnen Mogdath, Daz oder Gozar in einem Zufallsereignis.","Ein Tagesabschnitt vergeht, nachdem die Charaktere die Tore der Macht geöffnet und nicht wieder geschlossen haben."]},
   "Der Alarm beeinflusst Mogdaths Handlungen (S. 61) und die Zufallsereignisse."]}},
  {"h":"Zeit"},
  "Während die Spielercharaktere das Höhlensystem erkunden, solltest du die Viertel zählen, um die Zeit im Blick zu behalten. In der Regel braucht die Erkundung eines Raums ein Viertel. Nach jedem Viertel würfelst du, ob ihre Fackeln erlöschen, sowie für Zufallsereignisse, falls sie in dem Bereich, in dem sich die Charaktere aufhalten, eintreten können.",
  "Auf der nächsten Seite (und als Download auf der Webseite von Free League) findest du einen Bogen, mit dem du die Zeit festhalten kannst. In das Feld jedes Tagesabschnitts kannst du jedes vergangene Viertel abhaken. Nach 24 Vierteln beginnt ein neuer Tagesabschnitt.",
  "**Die Untoten erstehen neu:** Zu Beginn jedes Tagesabschnitts kehren alle besiegten Skelette im Höhlenkomplex wieder „ins Leben“ zurück – ebenso Mogdath, sofern er nicht in Tefalas’ Dolch gefangen ist.",
  {"h":"Rasten"},
  "Das Zwergenreich ist riesig, und die Charaktere werden wahrscheinlich lange darin verbringen, also brauchen sie Gelegenheiten, sich zu erholen. Die Regeln zum Rasten stehen im Regelbuch auf S. 52. Beachte, dass Verschnaufen und Kurze Rast kombiniert werden und gleichzeitig stattfinden können. Beides ist nur einmal pro Tagesabschnitt möglich.",
  "**Lange Rast:** Mehrere Orte im Höhlensystem sind so sicher, dass die Charaktere dort je nach ihrem Verhalten eine Lange Rast einlegen können – siehe den Kasten daneben. Sobald an einem Ort eine Lange Rast eingelegt wurde, ist er „verbraucht“ und steht nicht mehr für eine Lange Rast zur Verfügung. Bedenke, dass eine Lange Rast bedeutet, dass alle besiegten Skelette wieder aufstehen und Mogdath die Gelegenheit bekommt, sich neu zu formieren und seinen nächsten Zug zu planen.",
  {"stein":{"h":"Orte für Lange Rasten","b":[
   {"ul":["Der Tempel in den Ankunftshallen (Raum 13)","Die Brauhalle in den Ratshallen (Raum 33)","Das kleine Speisezimmer in den Ratshallen (Raum 40)","Die Seitenkapelle in der Stadt (Raum 47)"]}]}},
  {"stein":{"h":"Verbarrikadieren","b":[
   "Auch an Orten, an denen die Spielercharaktere keine Lange Rast einlegen können, wollen sie sich vielleicht verbarrikadieren, um auf einen neuen Tagesabschnitt zu warten und so ein weiteres Viertel (und eine weitere Runde) Rast zu bekommen. In diesem Fall musst du nicht in jedem Viertel auf Zufallsereignisse würfeln. Entscheide stattdessen, ob du den Charakteren eine Gelegenheit zur Erholung gibst oder der Feind versucht, sie anzugreifen und die Barrikaden einzureißen.",
   "Bedenke, dass besiegte Skelette zu Beginn jedes Tagesabschnitts wieder aufstehen."]}},
  {"h":"Der Weg hinaus","p":65},
  "Abgesehen von den Toren der Macht selbst gibt es nur einen weiteren Weg aus dem Zwergenreich, da der Großteil der Stadt zerstört ist: einen unterirdischen Fluss, der über den Anleger in der Schmiede, eine Ebene unter der Eingangsebene, erreichbar ist. Informationen darüber können die Charaktere vom Geist von Königin Gwinna im Tempel (Raum 13) erhalten."
 ],
 schluss:[
  {"h":"Abschluss","p":91},
  "Das Abenteuer endet wahrscheinlich, wenn Mogdath besiegt ist, am besten gefangen in Tefalas’ Dolch, und die Spielercharaktere die Tore der Macht über den unterirdischen Fluss in Richtung der Ostlande verlassen haben.",
  "Es sind jedoch auch andere Ausgänge möglich. Mogdath könnte entkommen und im letzten Abenteuer, *Herz der Finsternis*, wieder auftauchen. Dasselbe gilt für Doriath, Sturmhand und Tefalas, falls einer von ihnen noch lebt.",
  "Damit ist *Tore der Macht* abgeschlossen, und jeder Spielercharakter wird mit einem Heroischen Talent seiner Wahl belohnt (Kapitel 3 im Regelbuch). Ihre Abenteuer werden in *Herz der Finsternis* fortgesetzt."
 ],
 bereiche:[
  {id:"ankunft", t:"Die Ankunftshallen", karte:{img:"abenteuer/pg-tore-karte-ankunft", p:69}, einl:"Ebene 0 – Die Ebene ist schwach erleuchtet von einem goldenen Licht aus Bernsteinkristallen, die in regelmäßigen Abständen in die Wände eingelassen sind. Manche Fassungen der Kristalle zeigen Beschädigungen – Mogdath hat versucht, sie zu zerstören, aber es ist ihm nicht gelungen. Die Deckenhöhe beträgt drei Meter, sofern nicht anders angegeben.", orte:[
   {n:"1", t:"Eingangshalle", p:66, pin:[42.2,61.3], wesen:["tore-skelettbogen","tore-skelettkrieger","tore-schicksal"],
    vl:"Kühle, abgestandene Luft schlägt euch hinter den gewaltigen Toren entgegen. Ihr blickt in eine große Halle, schwach erhellt von einem goldenen Licht, das sich auf den polierten Steinwänden spiegelt. Eure Füße wirbeln Staub und Schmutz auf, während ihr durch die Türen geht. Die Staubschicht scheint ein Stück weiter vorn dünner zu sein, und am anderen Ende der Halle seht ihr eine Treppe, die in der Dunkelheit verschwindet, flankiert von zwei großen Statuen. Eine Grabesstille herrscht.",
    b:[{"bild":{"img":"abenteuer/pg-tore-eingangshalle","t":"Eingangshalle"}}],
    st:[
     {"k":"Hinterhalt","r":1,"x":"Auf der anderen Seite der Südwand, im Wachraum (Raum 5), halten Skelettschützen (so viele wie Spielercharaktere) durch schmale Schlitze Wache. Sie schießen mit ihren Armbrüsten, wenn die Charaktere halb in den Raum gelangt sind. Das zählt als Hinterhalt (Regelbuch S. 43), und da die Angreifer gut vorbereitet sind, erhalten die Charaktere einen Nachteil auf ihren §Wahrnehmung§-Wurf. Die Bogenschützen können durch die Schlitze nur mit stechenden Waffen und mit Nachteil angegriffen werden. Sehen die Bogenschützen keine Lebewesen mehr in der Eingangshalle, ziehen sie ihre Dolche und gehen hinaus, um etwaige Überlebende zu töten. Charaktere, die sich an die Südwand drücken, können von den Skeletten nicht mehr gesehen werden. Der einzige Weg, dem Hinterhalt völlig zu entgehen, ist, sich sofort an die Südwand zu drücken, unter den Schlitzen hindurchzukriechen und einen §Heimlichkeit§-Wurf zu schaffen."},
     {"k":"Krieger","x":"Zu Beginn des Hinterhalts marschieren Skelettkrieger (ebenfalls so viele wie Spielercharaktere) aus dem Wachraum (Raum 5) in Richtung Eingangshalle, um die Eindringlinge im Nahkampf zu stellen. Sie treffen nach zwei Runden ein."},
     {"k":"Alarm schlagen","x":"Ein Skelett versucht Alarm zu schlagen, sobald mindestens zwei andere besiegt sind. Es läuft zur Geheimtreppe (Raum 7) und weiter durch die Schmiede und die Stadt, um Mogdath in den Ratshallen zu warnen. Wird es nicht aufgehalten, alarmiert das Skelett seinen Meister (S. 64). Es geht nicht die Prunktreppe hinauf, da Mogdath keine Verfolger direkt zur Ratskammer führen will."},
     {"k":"Die Statuen","x":"Neben der Prunktreppe stehen zwei große Zwergenstatuen, ein Krieger und ein Schreiber, die fast bis zur Decke reichen. Der Schreiber hält in der rechten Hand eine Steinscheibe. Auf dem Sockel der Statue steht eine Inschrift auf Zwergisch, Elfisch, Orkisch und in der Sprache der Halblinge. Gehört kein Spielercharakter zu diesen Völkern, braucht es einen §Fremdsprachen§-Wurf, um den Text zu lesen: „Seid gegrüßt! Ich kann ein Licht für euren Weg sein.“ Sagt ein Zwerg, Elf, Ork oder Halbling „Hilf mir“ zur Statue, beginnt ihre Steinscheibe zu leuchten. Sie zeigt eine Karte der Ankunftshallen – zeige den Spielern Handout A (am Ende dieses Buchs und als Download auf der Webseite von Free League)."},
     {"k":"Die Karte kopieren","x":"Verbringen die Charaktere ein Viertel damit, die Karte abzuzeichnen, und haben sie die nötigen Werkzeuge dazu, dürfen die Spieler sie behalten, andernfalls müssen sie sie beim Verlassen des Raums zurücklassen."},
     {"k":"Osten","x":"Breite Öffnung zur Prunktreppe (Raum 2)."},
     {"k":"Osten","x":"Öffnung zum Südostkorridor (Raum 3)."},
     {"k":"Westen","x":"Die Tore der Macht führen hinaus in den Toten Wald."},
     {"k":"Norden","x":"Öffnung zu einem kurzen Korridor, der zum Springbrunnen (Raum 8) führt."}
    ]},
   {n:"2", t:"Prunktreppe", p:68, pin:[61.4,61.3], wesen:["tore-skelettbogen","tore-skelettkrieger"],
    vl:"Eine breite Treppe führt nach oben und verschwindet in völliger Dunkelheit. Das Licht eurer Fackeln spiegelt sich in den polierten Steinwänden, enthüllt aber nicht, was oben an der Treppe wartet.",
    st:[{"k":"Die Treppe","x":"führt zur Westtreppe in den Ratshallen (Raum 15)."}]},
   {n:"3", t:"Der Südostkorridor", p:68, pin:[63.9,74.7], wesen:["tore-skelettbogen","tore-skelettkrieger"],
    vl:"Ein langer Korridor mit Wänden aus poliertem grauem Stein mit eingelegten Verzierungen aus tiefgrünem Metall.",
    b:[{"bild":{"img":"abenteuer/pg-tore-skelett","kl":1}}],
    st:[
     {"k":"Die Wandverzierungen","x":"zeigen drei Helden – einen großen mit spitzen Ohren, einen gebückten mit Fangzähnen und einen sehr kleinen –, die von geschlossenen Toren in einer Felswand fortgehen. Der Kleine trägt eine kleine weiße Kugel, der Gebückte eine kleine schwarze Kugel, und der Große ein Horn in Form einer Muschel."},
     {"k":"Beengtes Gelände","x":"Der Korridor ist beengt (Regelbuch S. 44), was bedeutet, dass alle Nahkampfwaffen außer stechenden und *unauffälligen* einen Nachteil auf alle Würfe erhalten."},
     {"k":"Eisentür","x":"Der Korridor wird durch eine schwere, aber unverschlossene Eisentür in einen westlichen und einen östlichen Abschnitt geteilt."}
    ]},
   {n:"4", t:"Der Südkorridor", p:69, pin:[49.4,86.5], wesen:[],
    vl:"Ein geschwungener Korridor mit Wänden aus poliertem grauem Stein. Tiefblaue Metalleinlagen zeigen stilisierte Zwergenkrieger mit langen Äxten in den Händen.",
    st:[
     {"k":"Beengtes Gelände","x":"Der Korridor ist beengt (Regelbuch S. 44), was bedeutet, dass alle Nahkampfwaffen außer stechenden und *unauffälligen* einen Nachteil auf alle Würfe erhalten."},
     {"k":"Norden","x":"Niedrige, breite Metalltür zur Waffenkammer (Raum 6). Sie ist verschlossen, kann aber geknackt oder aufgebrochen werden (30 TP, Rüstungswert 12). Ein Skelett aus dem Wachraum (Raum 5) hat den Schlüssel."}
    ]},
   {n:"5", t:"Wachraum", p:69, pin:[41,75.1], wesen:["tore-skelettbogen","tore-skelettkrieger"],
    vl:"Ein kleiner Raum mit Bänken an der Westwand, die aus grobem Fels besteht. In der Nordwand befinden sich auf Augenhöhe Schlitze zur Eingangshalle, aus dieser Richtung gut sichtbar.",
    st:[
     {"k":"Wachen","x":"Bis die Charaktere diesen Raum erreichen, sind alle Skelette, die hier waren, wahrscheinlich schon fort. Hat der Hinterhalt in Raum 1 nicht stattgefunden, sind hier so viele Skelettschützen wie Spielercharaktere und ebenso viele Krieger."},
     {"k":"Osten","x":"Öffnung zum Südostkorridor (Raum 3)."},
     {"k":"Osten","x":"Niedrige, breite Metalltür zur Waffenkammer (Raum 6). Sie ist verschlossen, kann aber geknackt oder aufgebrochen werden (30 TP, Rüstungswert 12). Ein Skelett aus dem Wachraum (Raum 5) hat den Schlüssel."},
     {"k":"Süden","x":"Öffnung zum Südkorridor (Raum 4)."}
    ]},
   {n:"6", t:"Waffenkammer", p:70, pin:[51.9,80], wesen:[],
    vl:"Der Raum hat eine niedrige Decke und polierte Steinwände und ist voller Kurzschwerter, Äxte, Speere und Pfeile auf verschiedenen Gestellen und Regalen. Es gibt nicht viel Platz zum Bewegen, aber ein Mensch mittlerer Größe kann sich durch das Gerümpel zwängen.",
    st:[
     {"k":"Waffen","x":"Es gibt mehr Waffen (der oben genannten Arten), als die Charaktere je brauchen könnten. Sie sind jedoch uralt und zerbrechlich, was bedeutet, dass ihre Haltbarkeit halbiert ist."},
     {"k":"Osten","x":"Eine Schiebetür zur versteckten Treppe (Raum 7), verborgen hinter einem Gestell mit verrosteten Langspeeren. Sie kann mit einem gelungenen §Entdecken§-Wurf gefunden werden, wenn die Charaktere die Wand untersuchen. Ein Charakter, der einem fliehenden Skelettwächter nachschleicht, entdeckt die Tür automatisch."},
     {"k":"Süden","x":"Tür zum Südkorridor (Raum 4). Sie ist verschlossen, kann aber geknackt oder aufgebrochen werden (30 TP, Rüstungswert 12). Ein Skelett aus dem Wachraum (Raum 5) hat den Schlüssel."},
     {"k":"Westen","x":"Tür zum Wachraum (Raum 5). Sie ist verschlossen, kann aber geknackt oder aufgebrochen werden (30 TP, Rüstungswert 12). Ein Skelett aus dem Wachraum (Raum 5) hat den Schlüssel."}
    ]},
   {n:"7", t:"Versteckte Treppe", p:70, pin:[56.8,82], wesen:[],
    vl:"Eine schmale Wendeltreppe mit niedriger Decke führt abwärts. Die Wände sind grob behauen, und die Luft ist heiß und stickig. Aus der Tiefe sind leise Hammerschläge zu hören.",
    st:[
     {"k":"Westen","x":"Geheimtür zur Waffenkammer (Raum 6), aus dieser Richtung vollständig sichtbar."},
     {"k":"Hinunter","x":"Die Treppe führt zur Schmiede (Raum 52)."}
    ]},
   {n:"8", t:"Springbrunnen", p:70, pin:[53.5,39.5], wesen:[],
    vl:"Ein rautenförmiger Raum mit Wänden aus poliertem hellem Stein. Leuchtende Kristalle entlang der Oberkante der Wände erzeugen ein stärkeres Licht als im Rest dieser Ebene. In der Mitte des Raums fällt Wasser aus einem Loch in der Decke in eine meterbreite Steinschale und durch eine Rinne im Boden zu einer Öffnung in der Wand. Das sanfte Murmeln des Wassers verleiht dem Raum ein Gefühl der Ruhe.",
    st:[
     {"k":"Der Springbrunnen","x":"Das Wasser ist frisch und schmackhaft. Es zu trinken stellt W6 WP wieder her, einmal pro Tagesabschnitt."},
     {"k":"Osten","x":"Öffnung zum Nordkorridor (Raum 9)."},
     {"k":"Süden","x":"Öffnung zu einem kurzen Korridor zur Eingangshalle (Raum 1)."},
     {"k":"Westen","x":"Öffnung zum Tempeleingang (Raum 12)."}
    ]},
   {n:"9", t:"Der Nordkorridor", p:70, pin:[62.6,40.4], wesen:[],
    vl:"Ein kurzer, breiter Korridor aus poliertem grauem Stein. In die Wände sind Buchstaben aus blutrotem Stein eingelegt. In der Mitte des Korridors liegt ein toter Körper.",
    st:[
     {"k":"Der Text","x":"Ein §Fremdsprachen§-Wurf zeigt, dass der Text an den Wänden auf Elfisch, Altzwergisch, Orkisch und Halblingisch „Passt, Freunde“ lautet. Ein Spielercharakter, der Zwerg, Elf, Halbling oder Ork ist, erhält einen Vorteil auf den Wurf."},
     {"k":"Toter Ork","x":"Der Körper in der Mitte des Korridors ist ein toter Ork mit abgetrenntem Kopf. Er starb in der Falle, und Mogdath hat ihn als Warnung für die anderen hier liegen lassen. Orks ist der Zutritt zu den Ankunftshallen nicht mehr gestattet."},
     {"k":"Falle","r":1,"x":"Sagt jemand „Ich bin ein Freund“ (oder etwas Ähnliches) auf Zwergisch, Elfisch, Orkisch oder in der Sprache der Halblinge, kann er den Korridor gefahrlos durchqueren. Andernfalls wird in seiner Mitte eine Falle ausgelöst – zwei Axtklingen schnellen aus Spalten in den Wänden und schwingen auf Kopfhöhe eines Menschen durch die Mitte des Korridors (Zwerge und Halblinge sind sicher). Die Falle kann mit einem §Entdecken§-Wurf bemerkt werden, wenn ein Charakter gezielt die Wände untersucht. Wird die Falle ausgelöst, ist ein §Ausweichen§-Wurf nötig, um nicht getroffen zu werden und 2W10 hauenden Schaden zu erleiden."}
    ]},
   {n:"10", t:"Der Ostkorridor", p:70, pin:[67.6,57.5], wesen:[],
    vl:"Ein langer, breiter Korridor mit Wänden aus poliertem grauem Stein. Muster aus goldenem Metall an den Wänden zeigen Bergleute und Schmiede bei der Arbeit. Eine der Wände ist mit Säulen gesäumt.",
    st:[{"k":"Osten","x":"Zwei dicke, verschlossene Eisentüren, schwer zu knacken (Nachteil auf den §Fingerfertigkeit§-Wurf) und sehr schwer aufzubrechen (40 TP, Rüstungswert 12). Mogdath hat die Schlüssel. Die Türen führen zu den Wendeltreppen (Raum 11)."}]},
   {n:"11", t:"Wendeltreppen", p:70, pin:[79.5,47.5], wesen:[],
    vl:"Runde Räume mit Wendeltreppen, die nach unten führen. Sie sind durch einen kurzen Korridor verbunden, dessen Wände mit abstrakten geometrischen Mustern aus Kupfer verziert sind. Auf dem Boden und den Stufen liegt viel grober Kies.",
    st:[
     {"k":"Karte","x":"Bei näherer Betrachtung entpuppen sich die Muster an den Wänden als abstrahierte Karte eines Höhlensystems. Es ist eine Karte der Schmiede – zeige den Spielern Handout B (am Ende dieses Buchs und als Download auf der Webseite von Free League). Es dauert ein Viertel, die Karte auf Papier zu kopieren."},
     {"k":"Westen","x":"Verschlossene Eisentüren zum Ostkorridor (Raum 10); können geknackt (mit Nachteil) oder aufgebrochen werden (40 TP, Rüstungswert 12). Mogdath hat die Schlüssel."},
     {"k":"Hinunter","x":"Die Treppen führen zur Schmiede (Raum 52)."}
    ]},
   {n:"12", t:"Tempeleingang", p:71, pin:[36.6,41.3], wesen:[],
    vl:"Der Korridor hat polierte Wände aus blaugrauem Stein mit eingelegten Mustern von Bergkämmen aus einer anderen, tiefblauen Steinart. Er erweitert sich zu einem kleinen Raum, in dessen Mitte eine große Säule vom Boden bis zur Decke reicht. Dahinter befindet sich eine Öffnung zu einem größeren Raum. Vor der Säule liegt ein regloser Körper.",
    st:[
     {"k":"Toter Ork","x":"Der Körper ist ein Ork in leichter Rüstung mit einem Krummsäbel neben sich. Sie scheint an schweren Verbrennungen gestorben zu sein."},
     {"k":"Säulenfalle","r":1,"x":"Die Säule besteht aus einer anderen, rötlichen Steinart und ist mit unverständlichen Schriftzeichen bedeckt. Ein Charakter, der Zwerg ist oder einen §Fremdsprachen§-Wurf schafft, erkennt, dass es sich um zwergische religiöse Symbole handelt, die das „Reisegebet“ für sichere Heimkehr bilden. Wer an der Säule vorbeigeht, ohne das Gebet laut zu sprechen, löst einen BLITZSCHLAG der Kraftstufe 3 aus, der von der Säule ausgeht und 4W8 Schaden verursacht (Rüstung hat keine Wirkung). Der Blitz kann auf weitere Ziele überspringen, wie im Regelbuch auf S. 64 beschrieben."},
     {"k":"Osten","x":"Öffnung zum Springbrunnen (Raum 8)."},
     {"k":"Norden","x":"Öffnung zur Tempelhalle (Raum 13)."}
    ]},
   {n:"13", t:"Tempelhalle", p:71, pin:[38.7,32.5], wesen:["tore-gwinna"],
    vl:"Eine große Halle mit Reihen niedriger Steinbänke und einem großen Steintisch am hinteren Ende. Sie ist eine Oase des Friedens und der Ruhe, im scharfen Gegensatz zu dem Gefühl drohender Gefahr in den vorherigen Räumen. Die Wände sind mit farbenfrohen Gemälden bedeckt, die Szenen aus zwergischen Mythen und Legenden zeigen. Die Wand hinter dem Steintisch ist rot bemalt mit einem großen goldenen Quadrat. Leuchtende Kristalle in der Decke strahlen ein rötlich-gelbes Licht aus, wärmer und heller als in dem anderen Raum dieser Ebene.",
    st:[
     {"k":"Altar","x":"Der Steintisch ist ein Altar aus Marmor und Silber. Auf dem Altar stehen drei kräftige Kerzenständer mit je einer dicken Kerze. Sobald sich jemand dem Altar nähert, erscheint die schimmernde grüne Gestalt eines Zwergs in kunstvollen Gewändern, die davor schwebt."},
     {"k":"Der Geist","x":"Die Gestalt ist der Geist von Königin Gwinna, der letzten Herrscherin der Tore der Macht (S. 5). Sie ist an den Tempel gebunden und kann ihn nie verlassen. Anfangs steht sie Menschen vage feindselig gegenüber, ist Elfen und Halblingen gegenüber leicht hilfsbereit und zu zwergischen Spielercharakteren sehr freundlich. Überzeugen die Charaktere sie davon, dass sie Feinde Mogdaths und seiner Gefolgsleute sind, ist sie bereit zu helfen. Würfle auf §Überzeugen§, mit einem Vorteil für Zwerge. Bei einem Misserfolg kann Gwinna angreifen. Werte siehe Regelbuch S. 96."},
     {"k":"Gwinnas Geschichte","x":"Gwinnas Geist kann die Geschichte des Bürgerkriegs und des Falls ihres Reichs erzählen (S. 5). Sie weiß jedoch nicht, dass Kalin die Tore der Macht mit dem Herz der Finsternis verlassen hat. Sie kann das Zwergenreich grob beschreiben, weiß aber nichts von dem, was seit ihrem Tod geschehen ist, etwa vom Branntweindrachen in der Brauhalle (Raum 33) oder von den von den Orks verursachten Einstürzen in der Stadt. Sie erklärt, dass der einzige Ausgang außer den Toren der Macht über den Anleger in der Schmiede führt. Gwinna ist sich nun des Einfalls der Untoten ins Reich bewusst und möchte, dass die Charaktere Mogdath vernichten."},
     {"k":"Rastplatz","x":"Stehen die Spielercharaktere mit Gwinnas Geist auf freundschaftlichem Fuß, ist dies ein sicherer Ort für eine Lange Rast, da Mogdath und seine Diener den Tempel wegen der Blitzfalle am Eingang meiden. Greifen die Charaktere den Geist an und besiegen ihn, verliert der Ort seinen Frieden, und sie können hier nicht mehr rasten."},
     {"k":"Süden","x":"Öffnung zum Tempeleingang (Raum 12)."},
     {"k":"Norden","x":"Niedrige, unverschlossene Holztür zum Studierzimmer des Priesters (Raum 14)."}
    ]},
   {n:"14", t:"Das Studierzimmer des Priesters", p:71, pin:[33.1,21.8], wesen:[],
    vl:"Ein kleiner Raum mit einem niedrigen Eichentisch, einigen Hockern, einem Bett, einer Truhe und ein paar Regalen. Ein paar Stofffetzen sind alles, was von einem Wandteppich übrig ist.",
    st:[{"k":"Die Truhe","r":1,"x":"Die unverschlossene Truhe enthält Wertgegenstände im Wert einer Schatzkarte."}]}
  ]},
  {id:"rat", t:"Die Ratshallen", karte:{img:"abenteuer/pg-tore-karte-rat", p:72}, einl:"Ebene +1 – Diese Ebene liegt in völliger Dunkelheit. Es gibt in regelmäßigen Abständen Fackelhalter und Lampen, aber Mogdath hat alle Lichtquellen entfernt. Die Luft ist meist schwer und abgestanden. Die Stimmung ist angespannt. An vielen Stellen sind Fußspuren im Staub zu sehen. Die Deckenhöhe beträgt gut zwei Meter, sofern nicht anders angegeben.", orte:[
   {n:"15", t:"Die Westtreppe", p:73, pin:[6.8,56.2], wesen:[],
    vl:"Eine breite Marmortreppe, deren unterer Teil von einem schwachen goldenen Licht erhellt wird.",
    st:[
     {"k":"Osten","x":"Die Treppe führt zur Westhalle (Raum 16)."},
     {"k":"Hinunter","x":"Die Treppe führt zu den Ankunftshallen (Raum 2)."}
    ]},
   {n:"16", t:"Die Westhalle", p:73, pin:[18.7,56.2], wesen:["tore-skelettkrieger"],
    vl:"Ein großer, quadratischer Raum mit massiven, grob behauenen, kantigen Säulen entlang der Wände, die ansonsten aus poliertem schwarzem Stein bestehen. Irgendwo im Raum ist ein Kratzen zu hören.",
    st:[
     {"k":"Wachen","x":"An der Ostwand stehen einige Skelettkrieger, doppelt so viele wie Spielercharaktere (Werte wie auf S. 68, aber mit kurzen Speeren statt Schwertern). Das Geräusch, das ihr hört, kommt davon, dass die Skelette ihre Position wechseln. Sie greifen jedes Lebewesen an, das die Treppe heraufkommt, verlassen aber diese Ebene nicht."},
     {"k":"Karte","x":"Die Ostwand hinter den Skeletten ist von einer großen Karte dieser Ebene bedeckt. Gib den Spielern Handout C (am Ende dieses Buchs und als Download auf der Webseite von Free League). Verbringen die Charaktere einen Tagesabschnitt damit, die Karte abzuzeichnen, und haben sie die nötigen Werkzeuge dazu, dürfen die Spieler die Karte behalten – andernfalls müssen sie sie beim Verlassen des Raums zurücklassen."},
     {"k":"Osten","x":"Kurze Korridore, die in stabilen, eisenbeschlagenen Eichentüren zur Ratskammer (Raum 17) enden. Die Türen sind verschlossen, können aber geknackt oder aufgebrochen werden (30 TP, Rüstungswert 12). Die Skelettwächter haben die Schlüssel, ebenso Mogdath."},
     {"k":"Süden","x":"Unverschlossene Eichentür zu einem kurzen Korridor, der zum Zimmer des Obersten Bergmanns (Raum 19) führt."},
     {"k":"Westen","x":"Öffnung zur Westtreppe (Raum 15)."},
     {"k":"Norden","x":"Kurzer Korridor zum Küchenkorridor (Raum 31)."}
    ]},
   {n:"17", t:"Die Ratskammer", p:74, pin:[44.6,56.2], wesen:[],
    vl:"Eine riesige Halle, so weitläufig, dass Fackeln sie unmöglich ganz erhellen können. Die Deckenhöhe beträgt fünf Meter. Die Seiten sind von Kolonnaden gesäumt, und die Mitte nimmt ein U-förmiger Tisch ein. An einem Ende der Halle steht ein weißer Marmorthron, flankiert von Statuen zwergischer Krieger.",
    b:[{"bild":{"img":"abenteuer/pg-tore-ratssaal","t":"Die Ratskammer"}}],
    st:[
     {"k":"Mogdath","x":"Wurde Mogdath nicht über das Eindringen der Charaktere alarmiert (siehe den Kasten „Alarm schlagen“ auf S. 64), kannst du mit einem W6 bestimmen, ob er hier ist – bei 1–2 ist er es. Er sitzt gern auf dem Thron und grübelt über seinen nächsten Zug nach. Ist er unterwegs, um die Korridore und Hallen zu patrouillieren oder die Arbeit der Orks in der Schmiede zu überwachen, kannst du stattdessen Mogdaths Geistergestalt auf dem Thron erscheinen lassen. In diesem Fall verblasst sie, sobald sie die Spielercharaktere entdeckt hat und diese sie gesehen haben."},
     {"k":"Der Thron","x":"Ein Thron aus weißem Marmor mit goldenen Adern auf einem Podest aus schwarzem Stein. Auf der Rückenlehne sitzt eine Reihe von sieben in Gold gefassten Rubinen. Sie lassen sich mit geeignetem Werkzeug entfernen, einer pro Viertel und §Handwerk§-Wurf. Mit nur einem Dolch dauert es doppelt so lang. Sie sind je 20 Goldmünzen wert."},
     {"k":"Der Tisch","x":"besteht aus massivem Kirschholz und war ein Geschenk der Elfen."},
     {"k":"Osten","x":"Öffnung zur Osttreppe (Raum 18)."},
     {"k":"Osten","x":"Kunstvolle, eisenbeschlagene Eichentür zum Ostkorridor (Raum 28). Sie ist unverschlossen."},
     {"k":"Westen","x":"Eisenbeschlagene Eichentüren zur Westhalle (Raum 16). Sie sind verschlossen, können aber geknackt oder aufgebrochen werden (30 TP, Rüstungswert 12). Die Skelettwächter haben die Schlüssel, ebenso Mogdath."},
     {"k":"Norden","x":"Dünne Holztür zum Vorbereitungsraum (Raum 38)."},
     {"k":"Norden","x":"Unverschlossene Doppeltür zum großen Speisezimmer (Raum 39)."}
    ]},
   {n:"18", t:"Die Osttreppe", p:74, pin:[66.3,56.2], wesen:[],
    vl:"Eine breite Treppe, die hinab in die Dunkelheit führt. Die Stufen sind mit grobem Kies übersät, der unter den Füßen knirscht.",
    st:[
     {"k":"Westen","x":"Die Treppe beginnt in der Ratskammer (Raum 17)."},
     {"k":"Hinunter","x":"Die Treppe führt hinab in die Stadt (Raum 41)."}
    ]},
   {n:"19", t:"Das Zimmer des Obersten Bergmanns", p:74, pin:[17.7,70.6], wesen:[],
    vl:"Die Wände bestehen aus grob behauenem Stein, verziert mit Reliefs von Bergbauwerkzeugen. Niedrige Steinschreibtische und -stühle stehen im Raum verstreut. In einer Ecke liegen einige große Felsbrocken.",
    st:[
     {"k":"Felsbrocken","x":"Dies war der Arbeitsraum des Obersten Bergmanns des Reichs. Die Felsbrocken sind Kunstwerke, wirken aber für das ungeübte Auge wie grob behauene Steine. Ein Zwerg (oder jemand mit einem gelungenen Wurf auf §Mythen & Legenden§) kann darauf hinweisen."},
     {"k":"Osten","x":"Beeindruckende Metalltür zum Südkorridor (Raum 20)."},
     {"k":"Norden","x":"Kurzer Korridor, der in einer unverschlossenen Eichentür zur Westhalle (Raum 16) endet."}
    ]},
   {n:"20", t:"Der Südkorridor", p:75, pin:[26.6,73.3], wesen:[],
    vl:"Der Korridor ist schmal und seine Decke niedrig, sodass er beengt wirkt. In einer der Wände befinden sich kleine, gleichmäßig verteilte Nischen. Die Wände sind mit Ruß befleckt, als hätten hier einst Fackeln gebrannt.",
    st:[
     {"k":"Die Nischen","x":"sind fünf an der Zahl und enthalten jeweils eine pummelige Statuette aus schwarzem Feuerstein. Sie sind sich alle sehr ähnlich und stellen eine hässliche froschartige Kreatur in sitzender Haltung dar. Ein Kenner zwergischer Handwerkskunst würde für jede 50 Goldmünzen zahlen, für alle anderen sind sie wertlos. Jede Statuette wiegt so viel wie vier normale Gegenstände."},
     {"k":"Beengtes Gelände","x":"Der Korridor ist beengt (Regelbuch S. 44), was bedeutet, dass alle Nahkampfwaffen außer stechenden und *unauffälligen* einen Nachteil auf alle Würfe erhalten."},
     {"k":"Osten","x":"Große, eisenbeschlagene Eichentür zum Ostsalon (Raum 26), leicht angelehnt."},
     {"k":"Süden","x":"Schwere Eichentür zum Empfangsraum (Raum 21)."},
     {"k":"Süden","x":"Niedrige Metalltür zum Zimmer des Feuermeisters (Raum 24)."},
     {"k":"Süden","x":"Niedrige Metalltür zum Meeresraum (Raum 25), halb offen."},
     {"k":"Westen","x":"Beeindruckende Metalltür zum Zimmer des Obersten Bergmanns (Raum 19)."}
    ]},
   {n:"21", t:"Empfangsraum", p:75, pin:[27.7,77.9], wesen:[],
    vl:"Ein großer Raum mit niedriger Decke. Die Wände bestehen aus poliertem grauem Stein mit großen eingelegten Platten aus Eisen und dunklem Stahl. Entlang der Wände stehen niedrige Bänke und Hocker und zwei kleine Steinschreibtische. Auf dem Boden liegen verstreut Skelettteile.",
    st:[
     {"k":"Skelettteile","x":"Die Überreste von sieben toten Zwergen mit Rüstung und Waffen liegen überall verstreut. Manche umklammern noch zerbrochene Äxte, Hämmer und Speere. Die Skelette sind stark beschädigt, mehrere davon zerquetscht oder zerstückelt. Zwei scheinen sich gegenseitig getötet zu haben und halten Waffen, die im Körper des jeweils anderen stecken. Es sind Überreste des zwergischen Bürgerkriegs."},
     {"k":"Süden","x":"Schwere Eichentür zu einem eingestürzten Korridor (Raum 22)."},
     {"k":"Norden","x":"Schwere Eichentür zum Südkorridor (Raum 20)."}
    ]},
   {n:"22", t:"Eingestürzter Korridor", p:75, pin:[29.5,83.9], wesen:[],
    vl:"Ein breiter Korridor, der abrupt in einer Masse aus Geröll endet. Die Wände sind mit Mustern aus sich überlappenden Kreisen aus hellem Stein verziert. Kies und große Felsen bedecken den Boden.",
    st:[
     {"k":"Der Einsturz","x":"Wer das Geröll untersucht, kann einen passiven §Handwerk§-Wurf machen. Bei Erfolg erkennt der Charakter, dass das Geröll instabil ist und nicht berührt werden sollte. Bei einem Misserfolg stürzen mehrere Felsbrocken herab, und alle im Raum müssen einen §Ausweichen§-Wurf schaffen oder 2W6 wuchtigen Schaden erleiden. Dies ist eine Sackgasse."},
     {"k":"Skelettteile","x":"Hier und da zwischen den Felsen sind Skelettteile zu erspähen. Es sind die Überreste zwergischer Krieger, die im Bürgerkrieg beim Einsturz begraben wurden."},
     {"k":"Keine Ereignisse","x":"Da der Korridor nicht von den Schemen und Skeletten patrouilliert wird, können hier keine Zufallsereignisse eintreten."},
     {"k":"Osten","x":"Eisentür zum unberührten Schlafzimmer (Raum 23)."},
     {"k":"Norden","x":"Schwere Eichentür zum Empfangsraum (Raum 21)."}
    ]},
   {n:"23", t:"Unberührtes Schlafzimmer", p:75, pin:[37.6,82.1], wesen:[],
    vl:"Die Wände aus dunkelblauem Stein sind auf Hochglanz poliert. In der Mitte des Raums steht ein niedriges, breites Steinbett, das am Boden befestigt ist. An einer Wand stehen ein paar Holzschränke. Der Raum wirkt unberührter als die meisten anderen, mit tiefen Staubschichten auf dem Boden. Die Luft ist stickig und trocken und hallt von der Zeit wider.",
    st:[
     {"k":"Die Schränke","r":1,"x":"Wer die Schränke durchsucht und einen §Entdecken§-Wurf schafft, findet ein verstecktes Fach mit einem silbernen Ring mit Rubin, 20 Goldmünzen wert."},
     {"k":"Keine Ereignisse","x":"Da der Raum nicht von den Schemen und Skeletten patrouilliert wird, können hier keine Zufallsereignisse eintreten."}
    ]},
   {n:"24", t:"Das Zimmer des Feuermeisters", p:75, pin:[39.5,77.9], wesen:[],
    vl:"Die Wände bestehen aus hellem, poliertem Stein und sind mit großen Wandbildern stilisierter Flammen geschmückt, die nach den Jahrhunderten kaum noch zu erkennen sind. Große Teile der Wände sind ungleichmäßig mit Ruß bedeckt, an einer Stelle mit der vagen Silhouette einer kleinen Person. Die verkohlten Reste eines hölzernen Schreibtischs und Schranks stehen an den Wänden, daneben drei Steinhocker. In einer Ecke liegt ein verbranntes Skelett.",
    st:[
     {"k":"Das Skelett","x":"Dies sind die verbrannten Überreste eines zwergischen Kriegers, zu stark beschädigt, um von Mogdath wiedererweckt zu werden. Der Raum war die Wohnstätte eines der größten Elementaristen des Reichs, der auf Feuermagie spezialisiert war."},
     {"k":"Verkohltes Holz","x":"Das könnte für den Branntweindrachen in der Brauhalle (Raum 33) von Interesse sein."},
     {"k":"Die Wandbilder","r":1,"x":"Wer die Wandbilder untersucht und einen §Entdecken§-Wurf schafft, findet ein verstecktes Fach mit einer kleinen Eisentafel, die mit zwergischen Symbolen beschriftet ist. Sie funktioniert als Grimoire mit dem Zauber FEUERSTOß."}
    ]},
   {n:"25", t:"Der Meeresraum", p:76, pin:[55.5,77.8], wesen:[],
    vl:"Die Wände bestehen aus abwechselnd hellem und dunklem Stein in mäandernden Mustern. Die Ostwand wird von einem Relief einer schäumenden Meereswelle aus blauem Stein dominiert. An der Westwand steht eine niedrige Steinbank.",
    st:[{"k":"Erfrischende Welle","x":"Ein Bereich im unteren Teil des Reliefs ist abgenutzt und glänzend. Ein Charakter, der ihn berührt, wird von einem Gefühl der Ruhe ergriffen und stellt 2W6 WP wieder her. Das funktioniert einmal pro Tagesabschnitt und Person."}]},
   {n:"26", t:"Der Ostsalon", p:76, pin:[69.3,79.9], wesen:["tore-knochengolem"],
    vl:"Der Raum ist riesig und hat eine hohe Decke, wirkt aber dennoch recht klein wegen der vielen groben Säulen, die ein kunstvolles System aus Kreuzgewölben tragen. Alles ist aus tiefgrünem Stein gehauen. In der Mitte des Raums, in einem von Säulen umgebenen runden Bereich, liegt ein großer Haufen aus Knochen und zerbrochenen Waffen. Etwas dort scheint den Glanz von blassem Gold zurückzuwerfen.",
    st:[
     {"k":"Kolonnaden","x":"Man kann sich im Raum zwischen den verschiedenen Türen bewegen, indem man den Wänden außerhalb der Säulen folgt, ohne in die Nähe des Knochenhaufens zu kommen."},
     {"k":"Der Knochenhaufen","r":1,"x":"Die Knochen sind die Überreste zahlreicher zwergischer Krieger, die Mogdath hier gesammelt und dann als Knochengolem wiedererweckt hat (siehe den Kasten daneben). Der Zauber wird ausgelöst, wenn sich ein Lebewesen dem Haufen auf weniger als 2 Meter nähert."},
     {"k":"Osten","x":"Hölzerne Doppeltür zur Bibliothek (Raum 27)."},
     {"k":"Westen","x":"Große, eisenbeschlagene Eichentür zum Südkorridor (Raum 20), leicht angelehnt."},
     {"k":"Norden","x":"Kunstvolle Eisentür zum Ostkorridor (Raum 28)."},
     {"k":"Norden","x":"Schwere Eisentür zu einem kurzen Korridor, der zur Kammer des Lordratsherrn (Raum 29) führt."}
    ]},
   {n:"27", t:"Bibliothek", p:76, pin:[85.2,81.9], wesen:[],
    vl:"Ein großer Raum mit vier kräftigen sechseckigen Säulen, die eine relativ niedrige Decke tragen. Reihen steinerner Bücherregale säumen die Wände. Beschädigte Bücher liegen verstreut auf dem Boden. In der Mitte des Raums stehen acht menschengroße Steintafeln.",
    st:[
     {"k":"Bücherregale","x":"Viele Bücher fehlen, da die fliehenden Zwerge sie mitnahmen. Andere wurden bei den Kämpfen beschädigt. Dennoch sind noch recht viele übrig, und Charaktere, die die Regale sorgfältig durchsuchen (dauert ein Viertel), können W6 Bücher zu Themen wie Geologie, Metallurgie und Schmiedekunst finden (gewähren einen Vorteil auf Fertigkeitswürfe in passenden Situationen) sowie ein Grimoire mit W4 Zaubern des Rangs 2 aus einer Magieschule, zu der die Charaktere Zugang haben (falls vorhanden, andernfalls Elementarismus)."},
     {"k":"Die Steintafeln","x":"Eine Person, die Zwergisch lesen kann (ein Zwerg oder jemand mit gelungenem §Fremdsprachen§-Wurf), kann sich in einem Viertel einen Überblick über die Geschichte des Reichs verschaffen (S. 5)."}
    ]},
   {n:"28", t:"Der Ostkorridor", p:77, pin:[67.8,50.1], wesen:[],
    vl:"Ein langer, schmaler Korridor, dessen hinteres Ende in Dunkelheit verschwindet, wo euer Licht nicht hinreicht. Ihr glaubt, einen leichten Luftzug zu spüren, aber es könnten auch nur eure Nerven sein. Die Wände bestehen aus poliertem dunklem Stein mit eingelegten Sternen aus hellem Marmor.",
    st:[
     {"k":"Beengtes Gelände","x":"Der Korridor ist beengt (Regelbuch S. 44), was bedeutet, dass alle Nahkampfwaffen außer stechenden und *unauffälligen* einen Nachteil auf alle Würfe erhalten."},
     {"k":"Süden","x":"Kunstvolle Eisentür zum Ostsalon (Raum 26)."},
     {"k":"Westen","x":"Verzierte, eisenbeschlagene Eichentür zur Ratskammer (Raum 17)."},
     {"k":"Westen","x":"Eisentür zum großen Speisezimmer (Raum 39)."},
     {"k":"Norden","x":"Schmale Metalltür zum kleinen Speisezimmer (Raum 40)."}
    ]},
   {n:"29", t:"Die Kammer des Lordratsherrn", p:77, pin:[83,55.2], wesen:[],
    vl:"Ein großer Raum mit sehr hoher Decke von mindestens acht Metern. Seine Wände aus grob behauenem Stein treffen sich hoch oben in einem kunstvollen Gewölbe. Ein riesiges, niedriges Steinbett dominiert die Mitte des Raums. Im Raum verteilt stehen ein großer Tisch, mehrere Steinstühle und drei Metalltruhen.",
    st:[
     {"k":"Die Truhen","r":1,"x":"Zwei sind leer und unverschlossen. Die dritte ist verschlossen, kann aber mit Nachteil geknackt oder aufgebrochen werden (40 TP, Rüstungswert 12). Mogdath hat den Schlüssel zur Truhe, die Schätze enthält, die er im Geröll der Zwergenstadt gefunden hat:"},
     {"k":"Heiltränke","r":1,"x":"Mehrere Glasflaschen mit einem rosafarbenen, milchigen Getränk, eine weniger als Spielercharaktere (mindestens eine). Sie sind mit Korken und Wachs versiegelt. Der Geruch ist scharf und würzig, aber nicht unangenehm. Ein Wurf auf §Heilkunde§ erkennt das Getränk als Heiltrank. Wer eine Flasche trinkt, stellt 3W6 TP und ebenso viele WP wieder her."},
     {"k":"Stirnband","r":1,"x":"aus Weißgold mit Saphiren (Kleinkram). Enthält FERNSICHT (Kraftstufe 2) mit MAGISCHES SIEGEL und BESTÄNDIGKEIT. Eine Inschrift in altem Hochzwergisch (mit einem §Fremdsprachen§-Wurf lesbar) entlang der Oberkante des Stirnbands enthüllt die darin verborgene Magie."},
     {"k":"Silberstab","r":1,"x":"Ein halben Meter langer Silberstab, der den Zauber GNOM (Kraftstufe 3) mit MAGISCHES SIEGEL und BESTÄNDIGKEIT enthält. Auch hier windet sich eine Inschrift in verschnörkelten Runen entlang des Stabs und enthüllt bei einem gelungenen §Fremdsprachen§-Wurf seine Magie."},
     {"k":"Rubin","r":1,"x":"im Wert von 50 Gold."},
     {"k":"Süden","x":"Aufwendige Metalltür zu einem kurzen Korridor, der zum Ostsalon (Raum 26) führt."},
     {"k":"Norden","x":"Schmale Metalltür mit einem Zinnemblem in Form eines Bierkrugs, die zum Nordkorridor (Raum 30) führt."}
    ]},
   {n:"30", t:"Der Nordkorridor", p:77, pin:[76.7,36.7], wesen:[],
    vl:"Ein schmaler Korridor mit ungewöhnlich hoher Decke, der ein Stück weiter vorn eine Biegung macht. Die Atmosphäre ist stickig und bedrückend, und Staub liegt dick auf dem Boden. Es fühlt sich an, als könnte jeden Augenblick etwas um die Ecke kommen.",
    st:[
     {"k":"Keine Zufallsereignisse","x":"Würfle hier nicht auf Zufallsereignisse, aber lass ruhig etwas aus einem nahen Raum den Charakteren folgen und sie hierher verfolgen, wenn möglich."},
     {"k":"Beengtes Gelände","x":"Der Korridor ist beengt (Regelbuch S. 44), was bedeutet, dass alle Nahkampfwaffen außer stechenden und *unauffälligen* einen Nachteil auf alle Würfe erhalten."},
     {"k":"Falle","r":1,"x":"Im nördlichen Teil des Korridors, dem Abschnitt, der von Ost nach West verläuft, haben Mogdaths Orks eine primitive Falle aufgestellt. Sie besteht aus einigen zerbrochenen Tischen mit daran befestigten abgebrochenen Schwertern und Speerspitzen, die an die Decke gezogen und über ein Gegengewicht mit einer Stolperschnur nahe dem Boden verbunden sind. Die Charaktere können die Falle mit einem §Wahrnehmung§-Wurf entdecken. Haben sie eine bessere Lichtquelle als eine Fackel (z. B. mehrere Fackeln oder eine helle Laterne), erhalten sie einen Vorteil auf den Wurf. Andernfalls löst der Erste in der Reihenfolge die Falle aus und erleidet 3W6 stechenden Schaden (abzüglich Rüstung). Die nächste Person in der Reihenfolge kann §Ausweichen§ würfeln, um nicht getroffen zu werden. Die Falle wird nur einmal ausgelöst."},
     {"k":"Süden","x":"Schmale Metalltür, die zur Kammer des Lordratsherrn (Raum 29) führt."},
     {"k":"Westen","x":"Kleine Metalltür zum kleinen Speisezimmer (Raum 40)."}
    ]},
   {n:"31", t:"Küchenkorridor", p:77, pin:[19.6,44.9], wesen:[],
    vl:"Ein breiter Korridor mit niedriger Decke. Die Wände bestehen aus dunklem Stein, ohne Verzierungen.",
    st:[
     {"k":"Osten","x":"Breite Tür zur Küche (Raum 37), halb angelehnt."},
     {"k":"Westen","x":"Schmale Holztür zu den Quartieren der Köche (Raum 32)."},
     {"k":"Norden","x":"Niedrige Doppeltür zur Brauhalle (Raum 33)."}
    ]},
   {n:"32", t:"Die Quartiere der Köche", p:78, pin:[9.8,38.7], wesen:[],
    vl:"Ein Raum mit Wänden aus poliertem schwarzem Stein. Mehrere niedrige Holzbetten stehen in einer Reihe, die meisten davon zerbrochen. An einer Wand steht ein größeres niedriges Steinbett.",
    st:[{"k":"Keine Ereignisse","x":"Würfle hier nicht auf Zufallsereignisse."}]},
   {n:"33", t:"Brauhalle", p:78, pin:[22.7,14.2], wesen:["tore-branntweindrache"],
    vl:"Eine riesige Halle mit hoher Gewölbedecke. An der Nordwand befinden sich drei große Kamine, verbunden mit Bottichen, Tanks und Rohren, die im ganzen Raum verteilt sind. Neben einem der Kamine liegt völlig reglos eine große, schwarz beschuppte Echsenkreatur. In einer rußigen Ecke liegen ein paar Stücke Kohle.",
    b:[{"bild":{"img":"abenteuer/pg-tore-brandydrache","kl":1}}],
    st:[
     {"k":"Keine Ereignisse","x":"Würfle hier nicht auf Zufallsereignisse. Mogdath hält seine Streitkräfte fern, da er den Branntweindrachen nicht unnötig wecken will."},
     {"k":"Brauerei","x":"Ein Spielercharakter mit dem Heroischen Talent Meisterkoch erkennt, dass die Ausrüstung die Überreste einer Brauerei und Brennerei ist."},
     {"k":"Der Branntweindrache","x":"Die Kreatur ist ein kleiner Drache, der als Jungtier durch den Rauchabzug eines Kamins hereingekommen ist. Als er größer wurde, konnte er nicht mehr auf demselben Weg hinaus, falls er das aus irgendeinem Grund überhaupt wollte. Es gefällt ihm hier, aber er langweilt sich ziemlich und verbringt die meiste Zeit mit Schlafen. Wer sich in der Brauhalle bewegt, muss einen §Heimlichkeit§-Wurf schaffen, um den Drachen nicht zu wecken. Der Drache greift Orks oder Untote auf Sicht an, weshalb die Schemen und ihre Diener die Brauerei meiden. Auch gegenüber anderen Eindringlingen ist er misstrauisch, lässt die Charaktere aber passieren, wenn sie einen Wurf auf §Überzeugen§ oder §Täuschen§ schaffen. Wer eine Fackel trägt, erhält einen Vorteil auf den Wurf, da der Drache eine Schwäche für Feuer hat. Der Drache schleckt gelegentlich etwas Branntwein aus den Fässern im Getränkelager und ist recht zufrieden, wünscht sich aber, dass die Kamine entzündet würden. Im Raum gibt es kein Brennmaterial, aber zerbrochene Möbel aus den angrenzenden Räumen lassen sich in einem Viertel sammeln und brennen lange genug, damit der Drache einen Tagesabschnitt lang wach und glücklich bleibt, sodass die Charaktere eine Lange Rast sicher einlegen können. Sie können die Feuer noch länger am Brennen halten, indem sie Kohle aus der Schmiede holen. Der Drache hat nicht vor, die Brauerei zu verlassen."},
     {"k":"Rastplatz","x":"Zünden die Spielercharaktere die Feuer für den Drachen an, kann er Mogdaths Horden fernhalten, während die Charaktere eine Lange Rast einlegen. Das ist nur einmal möglich – die Gastfreundschaft des Branntweindrachen hat ihre Grenzen!"},
     {"k":"Osten","x":"Einfache Eisentür zum Zimmer des Braumeisters (Raum 34)."},
     {"k":"Süden","x":"Niedrige Doppeltür zum Küchenkorridor (Raum 31)."},
     {"k":"Süden","x":"Zerbrochene Holztür zum Getränkelager (Raum 35)."}
    ]},
   {n:"34", t:"Das Zimmer des Braumeisters", p:79, pin:[39.4,18.1], wesen:[],
    vl:"Ein Raum mit grob behauenen Steinwänden, einem niedrigen Steinbett an einer Wand, ein paar Schubladen und einem Hocker. An der Wand hängt ein großes Relief eines schäumenden Bierkrugs.",
    st:[
     {"k":"Keine Ereignisse","x":"Würfle hier nicht auf Zufallsereignisse."},
     {"k":"Schatz","r":1,"x":"Eine der Schubladen enthält Wertgegenstände im Wert einer Schatzkarte."}
    ]},
   {n:"35", t:"Getränkelager", p:79, pin:[23.7,28.5], wesen:[],
    vl:"Ein Raum mit niedriger Decke und abgenutzter Holzvertäfelung an den Wänden, dominiert von einer Handvoll großer Steingutfässer mit Zapfhähnen.",
    st:[
     {"k":"Keine Ereignisse","x":"Würfle hier nicht auf Zufallsereignisse."},
     {"k":"Branntwein","x":"Zwei der Fässer sind halb voll mit edlem Branntwein, einmal geräuchert und einmal mit Pilzen gewürzt. Wer den Branntwein trinkt, heilt einen Zustand seiner Wahl, außer Benommen, muss aber auch einen KON-Wurf machen. Bei einem Misserfolg wird der Charakter Benommen. Wer mehr als eine Dosis pro Tagesabschnitt trinkt, wird automatisch Benommen und erhält keinen weiteren positiven Effekt."},
     {"k":"Osten","x":"Hinter einem der leeren Fässer befindet sich eine Wandplatte, die zur Seite geschoben werden kann. Sie wird von denjenigen entdeckt, die an der richtigen Stelle suchen oder bei der Untersuchung des Raums einen §Entdecken§-Wurf schaffen. Die Geheimtür führt zu einem kurzen Gang zum Vorratsraum (Raum 36)."},
     {"k":"Norden","x":"Zerbrochene Holztür zur Brauhalle (Raum 33)."}
    ]},
   {n:"36", t:"Vorratsraum", p:79, pin:[35.6,24.4], wesen:[],
    vl:"Ein großer Lagerraum, so vollgestopft mit Regalen, Schränken und Truhen, dass man kaum einen Überblick bekommt. Alle hier einst gelagerten Lebensmittel sind jedoch längst verrottet.",
    st:[
     {"k":"Süden","x":"Schmale Holztür zur Küche (Raum 37)."},
     {"k":"Westen","x":"Hinter einem Vorhang befindet sich eine Öffnung zu einem kurzen, niedrigen Gang zum Getränkelager (Raum 35)."}
    ]},
   {n:"37", t:"Küche", p:79, pin:[23.8,35.5], wesen:[],
    vl:"Ein sehr großer Raum mit niedriger Decke, dominiert von zwei riesigen Kaminen mit Öfen und Herden in der Mitte des Raums. Ihre Rauchfänge weiten sich zur Decke hin. Es ist ein leises Rieseln zu hören, und eine Wand glänzt vor Wasser.",
    st:[
     {"k":"Wasser","x":"Wasser läuft an der Südwand herab in eine Rinne im Boden und verschwindet durch ein Gitter. Das Wasser ist frisch und kalt, wenn auch mit einem leichten mineralischen Nachgeschmack. Besonders Zwerge schätzen diesen Geschmack. Wer das Wasser trinkt, stellt W6 WP wieder her (W6+2 bei einem Zwerg), einmal pro Tagesabschnitt."},
     {"k":"Osten","x":"Metall-Doppeltür zum Vorbereitungsraum (Raum 38)."},
     {"k":"Westen","x":"Breite Tür zum Küchenkorridor (Raum 31), halb angelehnt."},
     {"k":"Norden","x":"Schmale Holztür zum Vorratsraum (Raum 36)."}
    ]},
   {n:"38", t:"Vorbereitungsraum", p:79, pin:[42.7,29.7], wesen:[],
    vl:"Ein länglicher Raum mit Regalen entlang der Wände und ein paar steinernen Tischen in der Mitte.",
    st:[
     {"k":"Osten","x":"Breite Holztür zum großen Speisezimmer (Raum 39)."},
     {"k":"Süden","x":"Dünne Holztür zur Ratskammer (Raum 17)."},
     {"k":"Westen","x":"Metall-Doppeltür zur Küche (Raum 37)."},
     {"k":"Norden","x":"Ein kurzer Korridor mit Gewölbedecke führt zu einer Metalltür zum kleinen Speisezimmer (Raum 40)."}
    ]},
   {n:"39", t:"Großes Speisezimmer", p:79, pin:[58.4,35.6], wesen:[],
    vl:"Ein riesiger Raum mit niedriger Decke, dominiert von Reihen fest eingebauter Steintische und zerbrochener Holzbänke. Die Nordwand ist mit einem langen Relief realistisch dargestellter Berge geschmückt.",
    st:[
     {"k":"Die Landschaft","x":"Ein Charakter, der das Relief untersucht, erkennt die Landschaft des Toten Waldes, nur dass die Mitte des Waldes üppig und grün aussieht."},
     {"k":"Osten","x":"Metalltür zum Ostkorridor (Raum 28)."},
     {"k":"Süden","x":"Doppeltür zur Ratskammer (Raum 17)."},
     {"k":"Westen","x":"Breite Holztür zum Vorbereitungsraum (Raum 38)."}
    ]},
   {n:"40", t:"Kleines Speisezimmer", p:79, pin:[54.6,21.5], wesen:[],
    vl:"Ein großer Raum mit einer fünf Meter hohen Decke und polierten Wänden aus dunklem Stein. In der Mitte des Raums steht ein riesiger Tisch für zwanzig Personen. Der Tisch wird von einer Säule vom Boden bis zur Decke durchstoßen, die auf Augenhöhe in halbdurchsichtigen, gelblichen, mit Runen verzierten Kristall übergeht.",
    st:[
     {"k":"Die Lampe","x":"Die Säule ist eine magische Lampe. Die Lampe wird aktiviert, indem man die Säule berührt und 3 WP aufwendet, wie die Runen erklären (zum Lesen ist ein §Fremdsprachen§-Wurf nötig). Dann leuchtet der gelbliche Kristall auf und erfüllt den Raum einen Tagesabschnitt lang mit einem warmen, beruhigenden Schein, in den sich die Schemen und anderen Untoten nicht hineinwagen. Das ist für die Charaktere eine Gelegenheit, eine Lange Rast einzulegen. Die Lampe ist jedoch vom Lauf der Zeit abgenutzt und kann nur einmal verwendet werden."},
     {"k":"Westen","x":"Metalltür zu einem kurzen Korridor mit Gewölbedecke, der zum Vorbereitungsraum (Raum 38) führt."},
     {"k":"Süden","x":"Metalltür zum Ostkorridor (Raum 28)."},
     {"k":"Osten","x":"Kleine Metalltür zum Nordkorridor (Raum 30)."}
    ]}
  ]}
 ]
};
