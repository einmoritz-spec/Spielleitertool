/* Die Nebelinsel (Abenteuerband S. 102–116) – Teil a: Lage, Insel, Höhlen. Teil b ergänzt Labyrinth, Figuren, Abschluss. §…§ = Fertigkeit. */
window.DB_AB = window.DB_AB || {};
DB_AB.nebelinsel = {
 id:"nebelinsel", t:"Die Nebelinsel", band:"dk", buch:"db_adv", p:102, img:"abenteuer/nebelinsel-titel", kurz:"20 Orte",
 lage:[
  "Die nebelverhangene Insel mitten im Spiegelsee ist der Eingang zu dem unterirdischen Labyrinth, in dem Azrahel Koth die neuesten Nachrichten über das Schwert Um-Durman erwartet. Der uralte Dämonenzauberer kann seine Gruft ohne das Schwert in seiner Hand nicht verlassen. Sich in den Nebel und hinab in die Dunkelheit zu wagen, ist der einzige Weg, seine Pläne zu stoppen und zu verhindern, dass sich Sathmogs dämonischer Einfluss über das Nebeltal ausbreitet.",
  {"h":"Die Lage","p":102},
  "Die Spielercharaktere können in Außenposten (S. 17 und die Abenteuerkarten) oder anderswo von der Nebelinsel hören. Alfilia Shadowleaf, der Mystiker Dranath und Maladûks Orks kennen den Ort alle. Sie erfahren auch von dem tödlichen Nebel, der die Insel umgibt – ohne das Schwert Um-Durman werden die Spielercharaktere einen Besuch wahrscheinlich nicht überleben.",
  "Das Höhlensystem unter der Nebelinsel wurde ursprünglich zur Zeit von Sathmogs Dämonenreich (S. 6) als Schatzkammer erbaut. Unter dem natürlichen Höhlensystem, das bereits auf der Insel bestand, wurden Katakomben gegraben.",
  "Nachdem Sathmog aus der Welt verbannt worden war, nutzte der Drachenkaiser Eledain die Nebelinsel als Gefängnis für den unsterblichen Herold des Dämons, Azrahel Koth.",
  "Eledains Magier verliehen einer Schar Krieger ewigen Untod, damit sie Azrahel Koth bis ans Ende der Zeit bewachten. Dann wurde die ganze Insel in einen ätzenden, immerwährenden Nebel gehüllt. Achthundert Jahre lang konnte kein einziger Eindringling die Abwehr der Nebelinsel durchbrechen – stattdessen kam die Bedrohung von innen. Gestärkt durch Sathmogs wachsenden Zorn außerhalb der Welt erwachte Azrahel Koth schließlich aus seinem verfluchten Schlaf.",
  "Noch immer wegen des ätzenden Nebels in der Gruft gefangen, versklavte er die untoten Krieger, die ihn hätten bewachen sollen, sowie die Fledermäuse, die in den Höhlen lebten. So wurde die Nebelinsel zu Azrahel Koths Festung, von der aus sich sein dämonischer Einfluss über das Nebeltal ausbreitete. Er beschwor auch mehrere Dämonen, um die Verteidigung der Insel weiter zu stärken.",
  "Sobald die Spielercharaktere Um-Durman gefunden haben (S. 27), erfährt Azrahel Koth bald durch seine Spione davon. Der Dämonenzauberer weiß, dass das Schwert die einzige Waffe in dieser Welt ist, die ihn töten kann – aber auch der Schlüssel zu seiner Freiheit. Es erfüllt ihn daher sowohl mit Furcht als auch mit Freude. Azrahel Koth spürt, dass die Spielercharaktere unterwegs sind, und freut sich auf den letzten Kampf.",
  {"h":"Die Überfahrt","p":102},
  "Die Reise über den Spiegelsee verläuft ereignislos und ist besonders leicht, wenn die Spielercharaktere ein Boot oder ein Floß besitzen. Ein Floß zu bauen dauert einen Tagesabschnitt und erfordert einen Wurf auf §Handwerk§. Ohne Boot oder Floß müssen sie hinüberschwimmen (§Schwimmen§, Regelbuch S. 53).",
  "Die Insel ist in gelblichen Nebel gehüllt, doch gelegentlich ist am südlichen Ende der Insel die Silhouette eines düsteren Turms zu erkennen, der in den Himmel greift, wenn man durch den Dunst späht (Ort 1). Die Spielercharaktere bemerken außerdem einen Schwarm Fledermäuse hinter einer Klippe am nördlichen Ende.",
  "Als die Spielercharaktere am felsigen Strand an Land gehen, finden sie den Ort frei von Leben vor – weder Pflanzen noch Tiere noch intelligente Wesen sind zu sehen. Die entstellten Überreste von Maladûks Orks liegen zwischen den Felsen verstreut, vom dämonischen Nebel ausgelöscht.",
  "Die Nebelinsel ist äußerst karg und unwirtlich. Abgesehen vom Turm (Ort 1) und den vielen toten Orks ist das einzig Auffällige ein Teich in der Mitte der Insel. Er ist der Eingang zu den Höhlen (Ort 2).",
  "**Fledermäuse:** An der Nordspitze der Insel liegt ein Massiv mit einer Reihe schmaler, natürlicher Tunnel, die bis zu Azrahel Koths Mausoleum (Ort 20) führen. Durch sie schickt Azrahel Koth seine dämonischen Fledermäuse über das Nebeltal. Die Spielercharaktere können die Gänge mit einem Wurf auf §Entdecken§ finden, aber nur jemand mit dem Heroischen Talent Schlangenmensch kann sie durchqueren.",
  {"h":"Orte","p":104},
  "Die Anlage auf der Nebelinsel besteht aus zwei Ebenen. Die erste Ebene besteht hauptsächlich aus natürlichen Höhlen (Ort 2–8). Sofern die Raumbeschreibung nichts anderes sagt, ist es hier unten stockfinster. Das Labyrinth auf der unteren Ebene (Ort 9–20) wurde von den Dämonenanbetern vergangener Zeiten erschaffen und dient nun als Azrahel Koths Hauptquartier. Hier sind die Räume durch Fackeln an den Wänden beleuchtet, sofern nichts anderes angegeben ist."
 ],
 bereiche:[
  {id:"insel", t:"Die Insel", karte:{img:"abenteuer/nebelinsel-karte-insel", p:103}, orte:[
   {n:"1", t:"Der Opferturm", p:104, pin:[30.6,86.0], wesen:["nebel","verlassen","verkon"],
    vl:"Auf einem Hügel steht eine Säule aus weißem Marmor, so hoch, dass sie über den gelblichen Nebel hinausragt. Eine schmale Treppe windet sich die Säule hinauf. Fünf Arme tragen oben auf dem Turm eine breite Steinplatte.",
    st:[
     {k:"Altar",x:"Oben auf dem Turm steht ein Altar mit seltsamen Inschriften. Fesseln auf dem Altar deuten darauf hin, dass hier Opfer dargebracht wurden, ebenso ein verbranntes Skelett auf der versengten Oberfläche."},
     {k:"Medaillon",x:"Der Leichnam trägt ein Medaillon mit dem schwarzen Zeichen Sathmogs (S. 7). Wer das Medaillon berührt, beschwört den Geist eines Dämonenanbeters namens Verkon, der sofort angreift. Das Medaillon ist mit 20 WP aufgeladen, die der Träger nutzen kann."}
    ]},
   {n:"2", t:"Eingang", p:104, pin:[32.8,66.3], wesen:["nebel","verlassen"],
    vl:"In einer Senke, umgeben von kargen Hügeln, liegt ein Teich. An seinem Rand liegt der Leichnam eines Orks, der offenbar durch Säure verbrannt wurde. Das Wasser ist klar und völlig frei von Leben. Auf dem Grund ist eine Treppe zu sehen, die hinauf in den Berg führt.",
    st:[
     {k:"Fußspuren",r:1,x:"*Wer den Boden rund um den Teich untersucht und einen Wurf auf* §Entdecken§ *schafft, sieht Fußspuren, die sowohl ins Wasser hinein- als auch herausführen. Sie stammen von Azrahel Koths untoten Wachen (S. 108).*"},
     {k:"Tauchen",x:"Um die Höhlen zu erreichen, müssen die Spielercharaktere in den Teich tauchen und einen Wurf auf §Schwimmen§ schaffen. Wer scheitert, beginnt zu ertrinken (Regelbuch S. 53). Die Treppe in den Berg führt aufwärts, zur oberen Ebene, die über dem Wasserspiegel liegt."},
     {k:"Nasse Fackeln",x:"In der Höhle ist es stockfinster. Eine Fackel, die unter Wasser war, wieder zu entzünden, erfordert einen Wurf auf §Wildniskunde§. Pro Viertel ist nur ein Versuch erlaubt."},
     {k:"Zufallsereignis",x:"Würfle für jedes volle Viertel, das die Spielercharaktere in der Höhle verbringen, mit dem W8 auf der Tabelle auf S. 103."},
     {k:"Osten",x:"Niedriger Gang zum Dreierraum (Ort 5)."},
     {k:"Westen",x:"Gang mit rauem Boden zur Dämonenkammer (Ort 3) und zum Geisterraum (Ort 4)."}
    ]}
  ]},
  {id:"hoehlen", t:"Die Höhlen", karte:{img:"abenteuer/nebelinsel-karte-hoehlen", p:106}, orte:[
   {n:"3", t:"Die Dämonenkammer", p:105, pin:[43.0,43.4], wesen:["akrae"],
    vl:"Eine natürliche Höhle, in der schwerer Nebel über blauschwarzem Wasser schwebt. Ein leises Tropfen hallt durch die Höhle, die nach nassem Fels und Verwesung riecht. Steine im Wasser bilden einen Pfad hindurch.",
    st:[
     {k:"Die Steine",x:"sind glitschig. In jeder Runde (keine Aktion) sind Würfe auf §Akrobatik§ nötig, um nicht ins Wasser zu fallen, was eine Fackel löschen würde. Außerdem ist das Wasser in der Höhle eiskalt – wer hineinfällt, muss einen Wurf auf §Wildniskunde§ machen, um der Kälte zu widerstehen (Regelbuch S. 54)."},
     {k:"Der Dämon Akrae",r:1,x:"*Auf einem großen Felsen in der Mitte der Höhle, von Nebel verhüllt, steht der Dämon Akrae. Aus der Ferne ist er nicht zu sehen. Akrae greift jeden an, der den Felsen betritt, der mit einem Pentagramm bedeckt ist.*"},
     {k:"Der Nebel",x:"Wegen des dichten Nebels müssen die Spielercharaktere am Ende jeder Runde würfeln, ob ihre Fackeln erlöschen (Regelbuch S. 52)."},
     {k:"Norden",x:"Dunkler Gang zum Eingang (Ort 2)."},
     {k:"Osten",x:"Feuchter Gang zum Dreierraum (Ort 5)."},
     {k:"Süden",x:"Breiter Gang zum Abstieg (Ort 8)."},
     {k:"Westen",x:"Schmaler Gang zum Geisterraum (Ort 4)."}
    ]},
   {n:"4", t:"Geisterraum", p:106, pin:[10.9,32.5], wesen:["cadal"],
    vl:"Eine enge Höhle, triefend vor Wasser und mit Algen an den Wänden. Ein Skelett in rostiger Kettenrüstung liegt auf dem Boden.",
    st:[
     {k:"Skelett",x:"Das Skelett trägt ein altes Breitschwert, das noch in gutem Zustand ist, und einen Ring an einem seiner Finger. Wird der Ring abgenommen, erwacht Cadals Geist (siehe nebenstehenden Kasten)."},
     {k:"Cadals Ring",x:"Der Ring an Cadals Finger verleiht die Fähigkeit, im Dunkeln zu sehen (der Träger kann alle Effekte auf S. 52 im Regelbuch ignorieren) und schützt vor dem bösen Nebel der Insel, sofern der Träger zuvor Eledains Segen erhält. Cadal kann sie segnen, aber nur, wenn die Spielercharaktere seine Bitte annehmen."},
     {k:"Zufallsereignis",x:"Würfle mit dem W8 auf der Tabelle auf S. 103, wenn die Spielercharaktere hier eintreffen, und erneut nach jedem vollen Viertel, das sie hier verbringen."},
     {k:"Norden",x:"Gang mit rauem Boden zur Dämonenkammer (Ort 3) und zum Eingang (Ort 2)."},
     {k:"Süden",x:"Schmaler Gang zur Dämonenkammer (Ort 3)."}
    ]},
   {n:"5", t:"Dreierraum", p:106, pin:[72.3,29.2], wesen:[],
    vl:"Drei Höhlengänge treffen sich in einer natürlichen Höhle. Schwache Echos sind zu hören, doch es ist unklar, von was oder woher.",
    st:[
     {k:"Warnung",r:1,x:"*Mit einem gelungenen Wurf auf* §Entdecken§ *finden die Spielercharaktere eine mit Holzkohle an die Wand geschriebene Warnung: „TROLL“, gefolgt von einem Pfeil nach Osten.*"},
     {k:"Zufallsereignis",x:"Würfle mit dem W8 auf der Tabelle auf S. 103, wenn die Spielercharaktere hier eintreffen, und erneut nach jedem vollen Viertel, das sie hier verbringen."},
     {k:"Osten",x:"Pilzbewachsener Gang zum Felssturz (Ort 6) und zu Okvids Höhle (Ort 7)."},
     {k:"Süden",x:"Nebliger Gang zur Dämonenkammer (Ort 3)."},
     {k:"Westen",x:"Niedriger Gang zum Eingang (Ort 2)."}
    ]},
   {n:"6", t:"Felssturz", p:107, pin:[69.9,62.5], wesen:[],
    vl:"Der Gang endet an einem Felssturz.",
    st:[
     {k:"Felsen",x:"Einem Spielercharakter, dem ein Wurf auf §Handwerk§ gelingt, wird klar, dass der Felssturz absichtlich ausgelöst wurde. Herabgestürzte Felsen versperren den Eingang und bilden eine Sackgasse. Azrahel Koth hat den Felssturz verursacht, damit Eindringlinge an Akrae in Ort 3 vorbei müssen."},
     {k:"Graben",x:"Sich durch den Schutt zu graben ist möglich, erfordert aber zehn gelungene Würfe auf §Handwerk§. Jeder Spielercharakter darf einmal pro Tagesabschnitt würfeln. Die Grabungsarbeiten ziehen unweigerlich die Aufmerksamkeit des Trolls Okvid in Ort 7 auf sich."},
     {k:"Süden",x:"Graben sich die Spielercharaktere durch den Schutt, führt die Öffnung zum Abstieg (Ort 8)."}
    ]},
   {n:"7", t:"Okvids Höhle", p:107, pin:[89.8,38.7], wesen:["okvid"],
    vl:"Der Gestank der Verwesung kündigt den Anblick des Raums an – eine natürliche Höhle mit Tierfellen an Wänden und Boden. Kisten, Säcke, Waffen und allerlei Plunder sind ordentlich an der Wand aufgereiht.",
    st:[
     {k:"Der Troll Okvid",x:"Okvid hält sich hier auf, wenn er nicht im Höhlensystem unterwegs ist."},
     {k:"Verrottendes Essen",x:"Die Kisten und Säcke enthalten Essen in verschiedenen Stadien der Verwesung. Okvid mag es so, da es sich leichter kauen lässt. Die Spielercharaktere können das Essen verzehren, setzen sich dann aber einer Krankheit mit Virulenz 9 aus."},
     {k:"Schätze",x:"Unter den Dingen, die Okvid gesammelt hat, befinden sich W6 Fackeln und Wertsachen im Wert von drei Schatzkarten."},
     {k:"Westen",x:"Pilzbewachsener Gang zum Dreierraum (Ort 5)."}
    ]},
   {n:"8", t:"Der Abstieg", p:108, pin:[46.0,84.6], wesen:["wachen"],
    vl:"Eine aus dem Fels gehauene Steintreppe führt hinab zu einem schwer vernarbten Kupfertor. In die Tür ist ein dämonisches Symbol eingelassen, darunter eine kurze Textzeile. Das Symbol glänzt hell im Fackellicht, als wäre es eben erst eingemeißelt worden.",
    st:[
     {k:"Symbol",x:"Das Symbol auf der Tür ist das schwarze Zeichen Sathmogs (siehe das Bild auf S. 7). Der Text darunter ist uralt und lässt sich nur mit einem gelungenen Wurf auf §Fremdsprachen§ verstehen: „Alle Macht Sathmog, unserem dreizüngigen Befreier.“"},
     {k:"Türfalle",r:1,x:"*Die Tür ist unverschlossen, doch wer versucht, sie aufzudrücken, wird von einem* §Blitzstrahl§ *(Kraftstufe 1) getroffen. Jeder Versuch, die Tür zu öffnen, löst einen weiteren* §Blitzstrahl§ *aus, bis die Ladung der Falle von 20 WP erschöpft ist (jeder* §Blitzstrahl§ *verbraucht 4 WP, da er in einem Innenraum stattfindet). Um die Tür gefahrlos zu öffnen, muss ein Spielercharakter zuerst mit dem Finger am Symbol auf der Tür entlangfahren und die darunter stehenden Worte sprechen. Wer die Tür untersucht und einen Wurf auf* §Entdecken§ *schafft, erkennt, dass das Symbol von vielen Fingern, die seine Rillen entlanggefahren sind, glatt poliert wurde.*"},
     {k:"Zufallsereignis",x:"Würfle für jedes volle Viertel, das die Spielercharaktere hier verbringen, mit dem W8 auf der Tabelle auf S. 103."},
     {k:"Norden",x:"Breiter Gang zur Dämonenkammer (Ort 3) mit einem abzweigenden Tunnel zum Felssturz (Ort 6)."},
     {k:"Süden",x:"Kupfertür zum Vierwegeraum (Ort 9) auf der unteren Ebene."}
    ]}
  ]}
 ],
 figuren:{
  "nebelinsel-fledermaeuse":{"typ":"monster","t":"Vampirfledermäuse","p":103,"be":"fledermaeuse"},
  "nebelinsel-skelette":{"typ":"monster","t":"Skelettkrieger","p":111,"be":"skelett"},
  verkon:{"typ":"monster","t":"Verkons Geist","p":105,"img":"abenteuer/nebelinsel-verkon","be":"geist","text":["Der Dämonenanbeter Verkon diente Sathmog, als dieser über das Nebeltal herrschte (S. 6), verlor aber sein Leben bei einem schiefgegangenen Ritual. Sein ruheloser Geist greift jeden an, der das Medaillon von seinen sterblichen Überresten nimmt. Er ist ein schimmernder blauer Schatten seines lebenden Selbst, in eine Robe gehüllt, mit starrenden Augen und dem schwarzen Zeichen Sathmogs auf die Stirn gebrannt.","Verkon zischt den Spielercharakteren „Alle Macht Sathmog, unserem dreizüngigen Befreier“ zu, doch es ist ein gelungener Wurf auf §Fremdsprachen§ nötig, um zu verstehen, was er sagt. Er ist ein Geist mit Werten nach S. 96 im Regelbuch. Verkon lässt die Spielercharaktere in Ruhe, wenn sie sein Medaillon fallen lassen."]},
  akrae:{"typ":"monster","t":"Der Dämon Akrae","p":105,"img":"abenteuer/nebelinsel-akrae","tp":48,"werte":[["Grimmigkeit","Anzahl SC −1 (min. 1)"],["Größe","Groß"],["Bewegung","12"],["Rüstung","6"],["TP","48"]],"text":["Akrae sieht aus wie ein Mensch, hat aber Kopf und Scheren einer Krabbe. Er stößt ein gurgelndes Geräusch aus und stinkt nach faulendem Seetang. Akrae ist an den Stein mit dem Pentagramm gebunden und kann ihn nicht verlassen."],"angriffe":{"h":"Monsterangriffe","w":"W6","rows":["**Scherengriff!** Der Dämon packt einen Spielercharakter mit seiner Schere und quetscht ihn, was 2W8 hauenden Schaden verursacht. Dann schleudert Akrae das Opfer W6 Meter ins Wasser.","**Salzspeien!** Ein Spielercharakter innerhalb von 4 Metern, der in der Runde noch nicht gehandelt hat, wird von einem Strahl stinkenden Schleims getroffen und verliert seinen Zug in der Runde.","**Eisiges Gebrüll!** Ein dämonisches Brüllen zwingt alle im Umkreis von 10 Metern, einen WIL-Wurf zu schaffen, sonst erleiden sie einen Furchtangriff (Regelbuch S. 52).","**Armzwicken!** Der Dämon kneift einem Spielercharakter mit seiner Schere fast den Arm ab. Der Angriff verursacht 2W8 hauenden Schaden, kann aber pariert werden. Verwendest du die Regeln für Schwere Verletzungen (Regelbuch S. 51), erleidet das Opfer außerdem einen Armbruch, wenn es mindestens einen Punkt Schaden erleidet.","**Kaskade!** Der Dämon peitscht eine magische Wasserhose auf, die alle Spielercharaktere im Umkreis von 6 Metern trifft und sie ins eiskalte Wasser schleudert (sofern sie dem Angriff nicht ausweichen).","**Kopfbiss!** Der Dämon beißt einen Spielercharakter in den Kopf und verursacht 3W8 hauenden Schaden. Der Angriff kann pariert werden."]}},
  cadal:{"typ":"nsc","t":"Cadals Geist","p":107,"img":"abenteuer/nebelinsel-cadal","text":["Der Geist eines gutaussehenden jungen Mannes erhebt sich über dem Skelett und spricht zu den Spielercharakteren: *„Mein Name war Cadal von den Hütern der Makellosen Flamme. Ich kam, um meine geliebte Tuviel zu befreien und den bösen Zauberer Azrahel Koth zu besiegen. Doch hier in diesen Höhlen traf ich mein Verderben, den übel riechenden Seedämon Akrae. Der Dämon muss sterben, damit ich Frieden finde. Gebt meinen Ring eurem besten Kämpfer und erschlagt den Dämon.*","*Das ist mein letzter Wunsch.“* Nehmen die Spielercharaktere seine Bitte an, segnet er sie im Namen Eledains, wodurch sie seinen magischen Ring benutzen können. Lehnen sie ab, sinkt der Geist zurück ins Skelett."]},
  okvid:{"typ":"monster","t":"Der Troll Okvid","p":107,"img":"abenteuer/nebelinsel-okvid","be":"troll","text":["Okvid ist ein mürrischer alter Troll, der aufgrund einer Vereinbarung mit Azrahel Koth als Verwalter der Höhlen dient. Als Bezahlung darf er alle Schätze behalten, die er gefallenen Abenteurern abnimmt. Okvids Regenerationsfähigkeit erlaubt es ihm, im ätzenden Nebel zu leben. Seine Stimme grollt wie ein Felssturz, und sein Gestank treibt einem die Tränen in die Augen. Okvid hat Werte wie ein Troll auf S. 97 im Regelbuch, mit einer Ergänzung:","**Zahnschmerzen:** Wem ein Wurf auf §Heilkunde§ gelingt, erkennt, dass der Troll unter furchtbaren Zahnschmerzen leidet. Es ist ein gelungener Wurf auf §Überzeugen§ oder §Täuschen§ nötig, damit der Troll einer Operation zustimmt. Den schmerzenden Zahn zu ziehen erfordert einen weiteren Wurf auf §Heilkunde§ – bei einem Fehlschlag greift der Troll an. Gelingt die Operation, lässt Okvid den Spielercharakter passieren. Er bietet ihnen auch etwas verrottetes Essen an."]}
 },
 kaesten:{
  nebel:{"k":"Ätzender Nebel","p":103,"b":["Die Einheimischen meiden die Nebelinsel, da der dicke magische Nebel, der sie bedeckt, alles Lebende zerfrisst. Er ist äußerst schmerzhaft, und wer die Oberfläche der Insel durchquert, erleidet W6 Schaden pro Viertel – nur Untote sind immun. Natürliche Heilung ist hier nicht möglich.","Der Nebel wurde erschaffen, um Azrahel Koth festzuhalten, der ihm gegenüber besonders verwundbar ist – er erleidet W6 Schaden pro Runde, wenn er ihn ohne Um-Durman betritt.","Weder Rüstung noch Zauber schützen vor dem Nebel. Das Schwert Um-Durman oder Cadals Ring (Ort 4) halten den Nebel jedoch auf 10 Meter Abstand und schaffen so eine Blase, in der sich der Träger unversehrt auf der Insel bewegen kann.","Der Nebel existiert nur an der Oberfläche der Insel, nicht im Höhlensystem darunter. Er reicht auch nicht bis zur Klippe mit den Fledermaustunneln."]},
  verlassen:{"k":"Die Nebelinsel verlassen?","p":103,"b":["Auf der Nebelinsel gibt es keinen Ort, an dem die Spielercharaktere eine Lange Rast einlegen können. Verlassen die Spielercharaktere die Insel, um sich auszuruhen, würfle pro Tagesabschnitt mit dem W6 auf der Tabelle auf S. 107 im Regelbuch."]}
 },
 tabellen:[
  {"id":"ereig","h":"Zufallsereignisse","strip":"Zufallsereignisse · W10","p":103,"einl":"Für jedes volle Viertel, das die Spielercharaktere an bestimmten Orten verbringen – etwa um einen Raum zu durchsuchen oder eine Kurze Rast einzulegen –, kannst du auf der folgenden Tabelle würfeln oder ein passendes Ereignis auswählen. Die Ortsbeschreibungen geben an, wo Zufallsereignisse auftreten können und mit welchem Würfel du würfeln sollst.","cols":["Wurf","Ereignis"],"rows":[["1","**Vampirfledermäuse:** Die Spielercharaktere werden von einem Schwarm dämonischer Fledermäuse angegriffen (Werte nach S. 99 im Regelbuch)."],["2","**Der Troll Okvid:** Die Spielercharaktere begegnen dem Troll Okvid (siehe Ort 7). Würfle neu, wenn sie Okvid schon begegnet sind."],["3","**Die Stimme Azrahel Koths:** Eine heisere, drängende Stimme hallt durch das Labyrinth. Die Spielercharaktere müssen einen WIL-Wurf machen, um der Furcht zu widerstehen, aber nur beim ersten Mal, dass dieses Ereignis eintritt. Die Worte zu verstehen erfordert einen gelungenen Wurf auf §Fremdsprachen§: *„Alle Macht Sathmog, unserem dreizüngigen Befreier.“*"],["4–7","**Nichts passiert.**"],["8–9","**Untote Wachen.** Die Spielercharaktere begegnen einer Patrouille untoter Wachen (S. 108), so viele wie sie selbst. Lass die Spielercharaktere einen Wurf auf §Wahrnehmung§ machen – gelingt er, können sie versuchen, sich zu verstecken (Wurf auf §Heimlichkeit§) oder den Wachen sogar zu folgen."],["10","**Azrahel Koth greift an:** Der Dämonenzauberer selbst taucht auf und greift die Spielercharaktere an, um ihre Stärke zu prüfen. Sobald er Schaden erleidet, teleportiert er sich sofort zurück in sein Mausoleum (Ort 20)."]]}
 ]
};
