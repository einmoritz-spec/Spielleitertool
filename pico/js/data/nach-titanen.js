/* Pico – Kapitel 8: Picotitanen (Buch S. 170–189), deutsche Fassung */
window.PI_NACH = window.PI_NACH || {};
PI_NACH.titanen = PI_NACH.titanen || {t:"Picotitanen", c:"#969f31", kapitel:[]};

/* kleine Helfer für die Titanen-Karten */
(function(){
var GUNST = function(l){ return {t:"h4",x:"Gunst gewinnen"}; };
function T(t,p,c,img,txt,gunst,giga3,giga2,aura,vorteil){
  return {t:t, p:p, c:c, img:img, b:[
    txt,
    {t:"h4",x:"Gunst gewinnen"},
    {t:"ul",x:gunst},
    {t:"h4",x:"Gigafertigkeiten"},
    {t:"ul",x:["Rang 3: "+giga3,"Rang 2: "+giga2]},
    {t:"h4",x:"Aura"},
    aura,
    {t:"h4",x:"Besondere Vorteile"},
    {t:"dl",x:[vorteil]}
  ]};
}

PI_NACH.titanen.kapitel.push(

{id:"was", t:"Was sind Picotitanen?", p:171, b:[
 "Das Huhn mit der Bäckerei auf dem Rücken, das gleich vor Craniopolis im Dreck scharrt? Die Munchkin-Katze mit Schutzbrille und Rennstreifen, die den Gartenweg entlangflitzt? Der goldpelzige Fuchs mit einem Ausguck auf dem Schwanz und einer Gondel unter dem Kinn, dessen Fell von begeisterten Fahrgästen gebürstet wird?",
 "Das sind alles Picotitanen – riesige Tiere, die langlebige Bindungen mit Käfern eingehen und als Helfer, Fahrzeug und rollendes Zuhause dienen.",
 "Sie sind eine ziemlich große Sache.",
 {t:"h",x:"Größe & Training"},
 "Picotitanen sind viel größer als Käfer.",
 "Das scheint sich von selbst zu verstehen, aber das Konzept der relativen Größe ist hier wichtig – sie sind größer als Käfer, aber *kleiner als andere Titanen*. Auf der offiziellen Größentabelle auf S. 12 und 13 liegen sie irgendwo zwischen Riesig und Titan.",
 "Das liegt daran, dass Picotitanen meistens die Kümmerlinge eines Titanenwurfs sind, die als Junge aus dem Nest gestoßen oder am Waldrand zurückgelassen wurden. Käfer sind im Großen und Ganzen vielleicht freundlich, aber die Natur ist grausam – das kommt öfter vor, als man denkt.",
 "Unternehmungslustige Titanentrainer:innen suchen diese ausgesetzten Tiere (meist nicht allzu schwer, bei dem Lärm, den sie machen können), retten sie und ziehen sie auf. Die meiste Mühe fließt dabei in den Versuch, einem jungen Picotitan die eine wichtige Idee beizubringen: dass Käfer Freunde sind, denen man *vertrauen* kann, und keine Freunde, die man *fressen* kann.",
 "Und soweit bekannt, haben Titanentrainer:innen dabei eine Erfolgsquote von 100 %. Von denen, bei denen es misslungen ist, hört man jedenfalls nie wieder.",
 {t:"h",x:"Titanenbauten"},
 "So spaßig es klingen mag: Sich am Fell oder Gefieder eines Titanen festzuklammern, während er über die Landschaft rast, ist nicht die bequemste Art zu reisen. Deshalb bauen Käferbanden oft einen Titanenbau auf ihrem Picotitan – eine gemütliche rucksackartige Siedlung mit ein paar nützlichen Annehmlichkeiten und einem Lagerplatz für die Lieblingsleckereien des Tiers. *Mehr darüber, wie man einen Titanenbau für den eigenen Picotitan errichtet, steht auf S. 184.*"
]},

{id:"bogen", t:"Der Streifzugbogen", p:172, b:[
 {t:"vl",x:"„Alles an seinem richtigen Platz.“"},
 "Hier siehst du eine kurze Aufschlüsselung des Streifzugbogens, zumindest der Teile, die sich auf Picotitanen beziehen.",
 {t:"tbl",head:["Nr.","Feld","Bedeutung"],rows:[
  ["1","NAME","Manche Picotitanen werden von ihren Käfern benannt, andere benennen sich selbst, aber alle haben einen Namen!"],
  ["2","TIER","Ein Grundtier, das deinen Picotitan am besten darstellt (Auswahl auf S. 180 bis S. 183)."],
  ["3","GUNST","Ein Zahlenwert für das Vertrauen deines Picotitans, der ausgegeben wird, um Picotitan-Aktionen auszulösen."],
  ["4","GUNST GEWINNEN","Möglichkeiten, wie Käfer ihre Aufgaben dafür verwenden können, die Gunst ihres Picotitans zu verbessern."],
  ["5","AURA","Damit können Käfer in der Nähe des Picotitans den Härte-Abzug bei Aktionen mit bestimmten Fertigkeiten verringern."],
  ["6","GIGAFERTIGKEITEN","Eine Darstellung der angeborenen Fertigkeiten deines Picotitans, die durch das Ausgeben von Gunst genutzt werden können."],
  ["7","BESONDERE VORTEILE","Ein besonderer Vorteil, der nur deiner Tierart eigen ist."],
  ["8","TITANENBAU","Ein Bereich, um mithilfe von Brocken Bauten auf dem Rücken deines Picotitans hinzuzufügen."],
  ["9","BRÖCKCHEN, KRIMSKRAMS, BROCKEN & NOTIZEN","Ein Platz, um alles festzuhalten, was dein Picotitan aufsammelt oder lagert."],
  ["10","WAHRHEITEN","Bekannte Wahrheiten über die Welt, die durch große Entdeckungen enthüllt werden."]]}
]},

{id:"erhalten", t:"Einen Picotitan erhalten", p:173, b:[
 "Manche Käferbanden haben vielleicht das Glück, ihr Abenteuer mit einem Picotitan als Teil der Gruppe zu beginnen. Ist das bei euch der Fall, könnt ihr direkt auf die nächste Seite springen und lernen, was ein Picotitan eigentlich *tut*. Andere Gruppen (besonders solche, die PICO eher als längere Kampagne statt als Einzelabend spielen) müssen sich erst einen Picotitan besorgen – der erste Schritt zu ihrem mobilen Zuhause fern der Heimat.",
 "Aber wie kommen Käfer zu einem Freund, der zwanzigmal so groß ist wie sie? Es gibt ein paar Möglichkeiten …",
 {t:"h",x:"Handeln"},
 "Wenn ihr zu den wohlhabenden Sorten gehört, könnt ihr einen Picotitan-Trainer suchen (manchmal in der Wildnis zu finden, häufiger aber in Picotitan-Ställen größerer Siedlungen). Was kostet ein ausgebildeter Picotitan? Eigentlich unbezahlbar, aber Trainer lassen einen wohl für einen riesigen Hort an Bröckchen und Krimskrams gehen.",
 "Wie viele Bröckchen und Krimskrams machen einen Hort? Hui, das ist schwierig … Es ist schwer, eine Zahl zu nennen, aber sagen wir … Zwanzig? Fünfzig? So dreißig? *Das liegt ganz beim Weber, sollte aber von der Seltenheit der gelieferten Bröckchen und Krimskrams abhängen – ein Trainer nimmt vielleicht 10 Relikte aus der Zeit vor der Mysteriokalypse, 30 leckere Bröckchen oder 5 Krimskrams mit einer Feder …*",
 {t:"h",x:"Verdienen"},
 "Besitz ist toll, aber harte Arbeit ist besser. Trainer sind wie alle anderen – oft müssen Dinge erledigt werden, auf die sie selbst keine Lust haben. Ein Trainer schenkt einen Picotitan vielleicht der ersten Käferbande, die ein paar Froglin-Rowdys aus einem Teich vertreibt, das geheimnisvoll tickende Amulett vom Uhrmacherhügel holt oder mitten in der Nacht ins Haus des schnauzbärtigen Bürgermeisters schleicht und ihm als Streich den Bart abrasiert.",
 "Ein beeindruckendes Abenteuer bringt ein beeindruckendes Wesen ein! *Einen Picotitan zu verdienen fügt sich meist mühelos in eine laufende Kampagne oder ein laufendes Abenteuer ein, kann aber sogar der Anstoß dafür sein!*",
 {t:"h",x:"Aufziehen"},
 "Wenn ihr den harten Weg gehen wollt, hindert euch nichts daran, selbst einen Titanen-Kümmerling zu finden und ihn mit der Zeit zu einem treuen Freund aufzuziehen.",
 "… Das würden wir sagen, wenn es so einfach wäre. Ist es definitiv nicht. Aber wenn euch das trotzdem reizt, ist es als Option da!",
 "*Wollen Käfer einen Picotitan aufziehen, müssen sie zuerst ein geeignetes Wesen finden und sich dann langsam sein Vertrauen verdienen, vermutlich indem sie eine vom Weber festgelegte Fortschrittsleiste über einen längeren Zeitraum füllen (die Regeln für Fortschrittsleisten stehen auf S. 32). Erwartet nach einem einzigen Besuch keinen festen Freund – beim Training spielt man das lange Spiel.*",
 {t:"h",x:"Erben"},
 "Fast so einfach, wie das Spiel gleich mit einem eigenen Picotitan zu beginnen!",
 "Picotitanen leben meist länger als die Käfer, die auf ihnen reiten, und können hervorragende langjährige Freunde der Familie sein. Ein Picotitan, der von mehreren Generationen derselben Käfer geritten wird, ist in der Regel der glücklichste – sowohl geliebt und umsorgt wie ein Haustier als auch verehrt wie ein weiser alter Onkel.",
 "*Die Reise, einen Picotitan von einem Familienmitglied an einem fernen Ort zu erben, ist ein ausgezeichneter Start für eine PICO-Kampagne, ein Abenteuer mit einem greifbaren, aufregenden Ziel.*",
 {t:"h",x:"Stehlen"},
 "Die Fragen „*Kann* man einen Picotitan stehlen?“ und „*Sollte* man einen Picotitan stehlen?“ haben sehr unterschiedliche Antworten.",
 "Ihr könntet es sicherlich *versuchen* – oft werden sie in Ställen vor Siedlungen gelassen, ruhen im Schatten unter Bäumen oder an den Eingängen von Bauen und Höhlen, die zu klein für sie sind. Und Picotitanen sind standardmäßig darauf trainiert, keine Käfer zu fressen und fast jedem Konflikt aus dem Weg zu gehen.",
 "Aber … na ja, ihr wisst schon …",
 "Die Ethik und Moral dieser Lage überlassen wir euch und eurer Gruppe, aber als Faustregel raten wir davon ab, eine Picotitan-Freundschaft mit Diebstahl oder Entführung zu beginnen. Die Folgen verfolgen einen tendenziell."
]},

{id:"koennen", t:"Was können Picotitanen?", p:174, b:[
 {t:"vl",x:"„Die Anmaßung mancher Käfer besteht darin zu glauben, die Picotitanen stünden unter ihrer Kontrolle und nicht umgekehrt.“"},
 "Sobald eine Käferbande einen Picotitan ihr Eigen nennt, wäre es der Gipfel der Albernheit, seine besten Eigenschaften nicht hin und wieder ins Rampenlicht zu stellen. Aber was kann ein Picotitan während einer Partie PICO eigentlich tun, und inwieweit stehen sie unter der Kontrolle der Spieler:innen? Steigen wir direkt ein und beantworten ein paar Fragen mit praktischen Infokästen!",
 {t:"h",x:"Selbstständig handeln"},
 "Egal wie stark deine Bindung zu einem Picotitan ist, er ist ein Wesen mit freiem Willen und eigenen Wünschen; Picotitanen werden vom Weber gesteuert, nicht direkt von anderen Spieler:innen am Tisch.",
 "Das heißt aber nicht, dass du die Handlungen oder das Verhalten eines Picotitans nicht beeinflussen oder ihn nicht um Hilfe bitten kannst. Erzählerisch kannst du ihn dabei wie einen NSC behandeln, aber es gibt auch ein mechanisches Element: Gunst. Das ist eine Ressource, die man durch Füttern, Spielen mit und Pflegen des übergroßen Gefährten verdient und die für verschiedene nützliche Fähigkeiten ausgegeben werden kann (etwa um dir bei einem Aktionswurf in einer verzwickten Lage zu helfen). *Die Regeln zum Gewinnen und Ausgeben von Gunst findest du auf S. 176.*",
 {t:"h",x:"Helfen!"},
 "Die Anwesenheit eines Picotitans kann einer Käferbande auf viele Arten nützen, mechanisch wie erzählerisch. Erstens umgibt jeden Picotitan eine Aura der Kompetenz, die leichtere Würfe bestimmter Fertigkeiten ermöglicht. Zweitens kann Gunst je nach Art der aktuellen Szene für eine Vielzahl von Vorteilen ausgegeben werden – und da sind die eigenen Besonderen Vorteile des Picotitans noch gar nicht erwähnt, besondere Dinge, die jede Picotitan-Art kann und die die Spielregeln verändern. Sie haben sogar ihre eigenen angeborenen Gigafertigkeiten!",
 "So nützlich das alles ist: Auf einem Picotitan zu reiten bringt auf der Reise von Ort zu Ort einen weiteren wichtigen Vorteil – Geschwindigkeit. Die Schritte, die eine Reiseaktion zurücklegt, sind verdoppelt, wenn man auf einem Picotitan reitet. Längere Beine kommen weiter!",
 "Und mechanische Vorteile sind schön, aber es gibt auch den grundlegenden erzählerischen Nutzen eines freundlichen Goliaths an der eigenen Seite!",
 {t:"h",x:"Einen Titanenbau tragen"},
 "Eine der nützlichsten Eigenschaften eines Picotitans ist, dass er mühelos käfergroße Bauten herumschleppen kann. Diese Titanenbauten liegen irgendwo zwischen Baumhaus, Fahrerkabine und Sänfte und werden von den Käfern oft über viele Reisen hinweg nach und nach auf- und ausgebaut.",
 "Einen Titanenbau zu errichten ist allerdings nicht einfach; man braucht dafür eine besondere Art von Ressource, Brocken (erklärt auf S. 160), und einen erheblichen Zeitaufwand. Es lohnt sich aber, besonders wenn man viel unterwegs ist. *Die Regeln zum Errichten eines Titanenbaus findest du auf S. 184.*",
 {t:"h",x:"Anwesend sein … so halb"},
 "Wenn in jedem Moment des Spiels deine Käferbande mit einem riesigen, wohlmeinenden Freund im Schlepptau herumspazieren würde, würde es schnell kompliziert. Als Faustregel gilt: Picotitanen betreten keine Siedlungen – sie können draußen warten oder, an feineren Orten, für die Dauer des Besuchs in einem Stall untergebracht werden.",
 "Außerhalb von Siedlungen hängt die Beteiligung eines Picotitans stark von der Lage ab. Normalerweise machen sie bei Rauferein nicht mit, da sie ausdrücklich darauf trainiert sind, in fast allen Situationen keinen Schaden anzurichten, aber sie stöbern vielleicht im Hintergrund einer Szene oder Montage herum, während ihr Kleineren charakterliche Dinge tut, und können oft schon helfen, indem sie einfach eine große, solide, beruhigende Präsenz sind.",
 "Dagegen *glänzen* Picotitanen auf Reisen. Auch dort steht er unter der Kontrolle des Weber, aber erwartet, dass ein Picotitan auf einer Reise ohne großes Aufheben ziemlich genau das tut, was ihr braucht (es sei denn, euer Tisch ist sich einig, dass ein eigenwilligerer Gefährte euch reizt). *Die Regeln zur Nutzung von Picotitanen auf Reisen findest du auf S. 87.*",
 {t:"h",x:"… und was können sie nicht?",p:175},
 "Einschränkungen sind wichtig! Sie setzen Grenzen und Erwartungen und sorgen dafür, dass alle auf demselben Stand sind. Picotitanen sind im Vergleich zum Durchschnittskäfer ziemlich mächtig, und dürften sie ungehindert durch die Welt von PICO toben, würden wir in vielen Situationen ein ganz anderes Spiel spielen. Deshalb gibt es eine Regel zu Picotitanen, die alle anderen übertrumpft …",
 {t:"box",h:"PICOTITANEN KÖNNEN NICHT ALLE EURE PROBLEME ZU JEDER ZEIT LÖSEN",c:"#969f31",b:["… Aber *einige* eurer Probleme *manchmal* zu lösen liegt definitiv in ihrem Zuständigkeitsbereich."]},
 {t:"h4",x:"Der Tisch setzt die Grenzen"},
 "Letztlich entscheidet eure eigene Gruppe auf Grundlage der Regeln und Vorschläge in diesem Kapitel, wie mit Picotitanen und der Macht, die sie bieten, umgegangen wird. Darüber lohnt es sich in einer Sitzung Null zu sprechen (wenn ihr mit einem Picotitan startet) oder mitten in einer Kampagne (wenn es so aussieht, als bekäme eine Käferbande einen). *Vorschläge für eine Sitzung Null findest du auf S. 192.*"
]},

{id:"gunst", t:"Gunst", p:176, b:[
 {t:"vl",x:"„Gewaltig, polyphemhaft und bezaubernd.“"},
 "Das ist ein Maß dafür, was ein Picotitan für die Käferbande auf seinem Rücken empfindet, und ein guter Hinweis auf seine allgemeine Stimmung. Je höher die Gunst eines Picotitans, desto hilfsbereiter ist er.",
 {t:"h",x:"Gunst verdienen"},
 "Jeder Picotitan hat in seinem Werteblock mehrere Möglichkeiten, seine Gunst zu verdienen – Wege, ihn glücklich zu machen (etwa Füttern oder Pflegen). Diese werden als Aufgaben ausgeführt, die beste Zeit dafür ist also eine Montage, aber Vorsicht: Die Gunst eines Picotitans kann nur einmal pro Szene erhöht werden.",
 "Manche dieser Aufgaben haben zusätzliche Kosten, etwa die richtige Art von Futter zu finden oder Schaden zu nehmen, aber keine Sorge: Diese Methoden, Gunst zu verdienen, stellen alle Leckerbissen dar, Wege, darüber hinauszugehen. Es wird davon ausgegangen, dass ein Picotitan genug Nahrung und Wasser zum Überleben findet oder dass deine Käfer ihm „außerhalb der Kamera“ ein ausreichend angenehmes Dasein bieten.",
 {t:"tint",h:"Beispiel:",x:"Borku ist ein Hunde-Picotitan, ein kläffender Typ mit einer gut ausgestatteten Küche, die gefährlich wackelig auf seinem Rücken balanciert. Die Käfer, die er trägt, füttern ihn meistens mit Bröckchen, die es nicht in den Topf schaffen, um Gunst zu gewinnen, aber hin und wieder nutzen sie seine Gunst-Option „Luxus-Füttern“ und geben ihm als besondere Belohnung eine fertig zubereitete Mahlzeit. Sie pflegen ihn auch, was zwei Aufgaben statt der üblichen einen braucht (normalerweise arbeiten dafür einfach zwei Käfer der Bande zusammen), aber dabei müssen keine Bröckchen oder Krimskrams verbraucht werden."},
 {t:"h",x:"Zusätzliche Gunst"},
 "Der Weber kann die übliche Regel „eine Gunst pro Szene“ brechen, indem er Gunst für erzählerische Entwicklungen vergibt, die einen Picotitan erfreuen. Er kann aber auch einen Punkt Gunst entfernen, wenn die Käfer etwas tun, das ihren Picotitan in eine ungewöhnlich gefährliche oder beängstigende Lage bringt – es geht in beide Richtungen!",
 {t:"tint",h:"Beispiel:",x:"Die Käferbande, die auf Borku reitet, schlägt sich durch einen verlassenen Spielplatz aus der Zeit vor der M, voller rostiger Klettergerüste und verblasster Plastikteile. Aber was ragt da drüben aus dem Dreck? Könnte das … ein Gummiknochen sein? Borku ist überglücklich, und der Weber lässt sie wissen, dass er sich kaum zurückhalten kann. Die Käfer steigen ab und lassen ihren Hundefreund eine Weile mit seinem neuen Spielzeug spielen, opfern dafür etwas Zeit auf ihrer Reise, werden aber mit gleich mehreren Punkten Gunst belohnt – Borku ist ein glücklicher Welpe!"},
 {t:"h",x:"Gunst ausgeben"},
 "Sobald ein Picotitan mindestens einen Punkt Gunst hat, können die Käfer ihn für Picotitan-Aktionen aus dem Kasten unten ausgeben. Jede Picotitan-Aktion kostet einen einzelnen Punkt Gunst, und manche Picotitanen haben besondere Aktionen, die nur ihnen eigen sind.",
 {t:"tint",h:"Beispiel:",x:"Die Käfer auf Borku geben auf der Reise einen Punkt Gunst für die Aktion Titanausguck aus, sodass ihr treuer Hund in der Nähe einen Schatz an Beute erschnüffelt, ohne dass in der Ausguckphase gewürfelt werden muss."},
 {t:"h",x:"Picotitan-Aktionen"},
 {t:"dl",x:[
  ["Titanenhilfe","In Szenen eingesetzt: Ein Picotitan kann kurz herbeieilen und einem Käfer bei einer Aktion helfen. Erfordert das einen Wurf, würfle ihn wie gewohnt, ersetze aber die übliche Fertigkeit des Käfers durch eine der angeborenen Gigafertigkeiten des Picotitans."],
  ["Titanoaufgabe","In einer Montage eingesetzt: Der Picotitan kann eine einzelne Aufgabe unabhängig von den Käfern ausführen (solange sie zu einer seiner Gigafertigkeiten passt). Ist diese Aufgabe besonders ungestüm, kann sie Käfer beeinträchtigen, die Teile des Titanenbaus für eigene Aufgaben nutzen wollen."],
  ["Titanausguck","Auf einer Reise eingesetzt, genau bei Ausguckwürfen: Der Titan kann etwas bemerken, das die Käfer von allein nicht bemerken würden. Gunst für diese Aktion auszugeben ersetzt keinen der üblichen Ausguckwürfe der Käfer und erfordert auch keinen eigenen Wurf; stattdessen wählt ihr einfach als Gruppe ein Ausguckergebnis aus, ganz ohne Zufall."],
  ["Titanotempo","Auf Reisen für ein einfaches, aber wirksames Ergebnis eingesetzt: Während das Reiten auf einem Picotitan die Schritte einer Reiseaktion verdoppelt, verdreifacht das Ausgeben eines Punkts Gunst diese Länge stattdessen für eine einzelne Aktion."]]},
 {t:"h",x:"Die Grenzen der Gunst",p:177},
 "Gute Gefühle bringen einen nur ein Stück weit. Die folgenden Regeln legen fest, wie sich Picotitanen in einer PICO-Partie verhalten sollten und wie nicht, egal wie viel Gunst angehäuft oder ausgegeben wird.",
 {t:"h4",x:"Auszeit, jederzeit"},
 "Da ein Picotitan vom Weber gesteuert wird, verbringt er nicht seine gesamte Zeit außerhalb von Reisen damit, Käfern zu helfen. Was, wenn da ein aufregender Geruch ist, dem man folgen muss, oder ein toller Zweig zum Spielen? Wie soll man erwarten, dass er die ganze Zeit im Dienst ist? Das wäre einfach unvernünftig.",
 "Am Ende des Tages *sind* Picotitanen *keine Käfer*. Sie sehen die Welt nicht auf dieselbe Weise und haben nicht dieselben Prioritäten.",
 {t:"tint",h:"Beispiel:",x:"Borkus käferige Freunde mühen sich ab, ein Rohrstück an der Seite eines alten Bauernhauses zu ersetzen, im Wettlauf gegen ein herannahendes Unwetter, das eine an einen Abfluss geschmiegte Siedlung überfluten würde. Borku verbringt den Großteil dieser Szene abseits damit, mit einem Stück des alten Rohrs zu spielen. Es ist nicht so, dass er nicht helfen würde – tatsächlich gibt einer der Käfer einen Punkt Gunst für Titanenhilfe aus, damit Borku herbeischlendert und das Rohr mit seiner bestialischen Kraft eine Weile festhält. Es ist nur so, dass er ohne direkte Befehle durch ausgegebene Gunst die Dringlichkeit der Lage nicht versteht, auch nicht, was die Käfer erreichen wollen oder warum. Hunde sind schließlich nicht für ihre Meisterschaft in Klempnerarbeiten bekannt."},
 "Stattdessen tun Picotitanen meist ihr eigenes Ding, solange sie nicht direkt in die Geschichte eingebunden sind. Bestimmte Szenen können den Weber dazu bringen, einen Picotitan eine aktive Rolle übernehmen zu lassen, sogar ohne dass Gunst ausgegeben wird, aber das sollte nur dann geschehen, wenn es erzählerisch angemessen ist, nicht bloß, wenn es hilfreich wäre.",
 {t:"h4",x:"Die bravsten Titanen"},
 "Ein großer Teil beim Aufziehen und Trainieren eines Picotitans ist, ihm einen allgemeinen Pazifismus einzuimpfen, der den meisten Bestien fehlt. Picotitanen haben keine Herzleisten, da sie nicht als aktive Teilnehmer an langwierigen Begegnungen beteiligt sein sollten – sie werden als Freunde aufgezogen, nicht als Kämpfer. Wird Gunst ausgegeben, stürzen sie sich bei Titanenhilfe für einen Angriffs- oder Abwehrwurf in ein Handgemenge, aber nicht, wenn das direkten Schaden für Käfer bedeuten würde (auch für feindliche Käfer). Andere Dinge, die nicht das Schlüsselwort „käferig“ haben? Die sind Freiwild.",
 "*Wenn ein Picotitan in einer Rauferei ein paar Treffer einstecken können soll, könnt ihr seine Gunst jedes Mal um eins senken, wenn er getroffen wird, statt Schaden zu verursachen – besprecht diese alternative Regel aber vorher mit eurem Tisch, damit sie zum Ton eures Spiels passt.*",
 {t:"bsp",h:"– BEISPIEL: GUNST EINES PICOTITANS –",b:[
  ["Weber","Die Cluckatrice im Hof gehört noch nicht „euch“, wobei Picotitan-Besitz in Wahrheit eine Fehlbezeichnung ist."],
  ["Swift","Es ist eher eine Partnerschaft, oder?"],
  ["Weber","Genau. Jedenfalls ist sie noch nicht Teil eurer kleinen Bande, aber ihr habt deutlich gemacht, dass ihr darauf hinarbeitet, dass sie sich euch anschließt, also könnt ihr jetzt schon Gunst bei ihr aufbauen, wenn ihr wollt – das hilft bei der Freundschaftsleiste, die ich für euch festgelegt habe, und wenn ihr sie füllt, startet ihr von Anfang an mit etwas Gunst."],
  ["Swift","Schön, das klingt gut. Und zum selben Thema: Ich glaube, wir haben etwas, das genau nach dem Geschmack dieses gefiederten Freundes sein könnte …"],
  ["Layla","Oh, stimmt! Ich habe ein paar Bröckchen gesammelt, die sie vielleicht mag, ich habe drei Maiskolben-Hülsen in meinem Rucksack aufgespart."],
  ["Weber","Na dann, gleiten wir in eine Montage. Einfaches Füttern kostet bei einer Cluckatrice zwei Bröckchen und gibt einen Punkt Gunst – ich markiere dafür auch die Freundschaftsleiste einmal, damit ihr einen Schritt näher an einem eigenen riesigen Freund seid! Layla, streich diese Bröckchen von deinem Bogen, während die Cluckatrice daran pickt."]]}
]},

{id:"aura", t:"Aura & Gigafertigkeiten", p:178, b:[
 {t:"h",x:"Aura"},
 "Der vielleicht einfachste Vorteil eines Picotitans in der Nähe ist seine Aura, ein allgemeiner Schub an Moral und Fähigkeit für alle Käfer, die das Glück haben, einen riesigen Freund an ihrer Seite zu haben.",
 "Alle Picotitanen haben eine von vier Auren, die jeweils eine andere Fertigkeitskategorie betreffen …",
 {t:"ul",x:[
  "**Freundlich:** Verringert den Härte-Abzug um eins bei jeder Aktion mit einer der Anfreunden-Fertigkeiten.",
  "**Hüpfend:** Verringert den Härte-Abzug um eins bei jeder Aktion mit einer der Bewegen-Fertigkeiten.",
  "**Kämpferisch:** Verringert den Härte-Abzug um eins bei jeder Aktion mit einer der Raufen-Fertigkeiten.",
  "**Neugierig:** Verringert den Härte-Abzug um eins bei jeder Aktion mit einer der Finden-Fertigkeiten."]},
 "… Und es ist wirklich so einfach! In der Nähe deines Picotitans zu sein (also vermutlich nah genug, dass ihr einander seht) verschafft dir eine einfache Möglichkeit, den Härte-Abzug bei deinen Würfen zu verringern, ohne Gunst ausgeben oder andere besondere Voraussetzungen erfüllen zu müssen.",
 {t:"tint",h:"Beispiel:",x:"Curtis versucht, mit einem Händler auf der Straße zu verhandeln. Der Händler feilscht hart, und der Weber fügt dem Wurf einen Härte-Abzug von 2 hinzu, aber Borko ist in der Nähe – dieser Härte-Abzug wird durch die Aura des freundlichen Welpen auf eins gesenkt."},
 {t:"h",x:"Gigafertigkeiten"},
 "Auch wenn es für einen Käfer oft viel Mühe oder Teamarbeit braucht, um Giga-Wucht zu erreichen, sind Picotitanen einfach *anders gebaut* – mit der Größe auf ihrer Seite fallen ihnen Heldentaten an Stärke und Geschick leicht.",
 "Ein Käfer kann Gunst ausgeben, um „Titanenhilfe“ zu nutzen, wodurch er für eine einzelne Aktion die Gigafertigkeit eines Picotitans verwenden kann, indem er die Würfel ersetzt, die er sonst für seine eigenen Fertigkeitsränge hinzufügen würde. Die daraus folgende Aktion hat standardmäßig Giga-Wucht und beinhaltet erzählerisch, dass der Picotitan selbst eingreift und körperlich hilft.",
 "Alle Picotitanen beginnen mit zwei Gigafertigkeiten auf Rang 3 und zwei Gigafertigkeiten auf Rang 2.",
 {t:"h4",x:"Mögliche Grenzen"},
 "Für manche Tische kann es sinnvoll sein, die Anzahl der Einsätze der Gigafertigkeiten eines Picotitans pro Szene zu begrenzen (zusätzlich zu den üblichen Grenzen, die die Gunst setzt). Wir empfehlen, das in der Sitzung Null zu besprechen, wenn es für euren Tisch nützlich scheint.",
 {t:"tint",h:"Beispiel:",x:"Kylliant, ein brillant chitiniger Alchemist, sucht für ein pilzbasiertes Gebräu, das er zusammenmischt, unterirdische Bröckchen. Der Boden ist hart und steinig, und er ist nicht gerade ein Experte im Graben, selbst unter den besten Umständen … Aber Borko ist es! Ein ausgegebener Punkt Gunst später fliegen Steine und Erde durch die Luft und legen eine Myzel-Fülle von genau der richtigen Sorte frei."}
]},

{id:"vorteile", t:"Besondere Vorteile", p:179, b:[
 "Jeder Picotitan bringt mindestens einen angeborenen Vorteil mit, der zur Tierart passt, die der Picotitan darstellt. Manche können Schaden verursachen, andere fügen bestimmten gefundenen Bröckchen positive Etiketten hinzu … Es gibt so viele Besondere Vorteile, wie es Titanenarten gibt!",
 {t:"tint",h:"Beispiel:",x:"Oskari, ein Tausendfüßer-Abenteurer, reitet schon auf Borko, solange er denken kann. Obwohl er von Natur aus mürrisch ist, erlaubt Borkos Besonderer Vorteil Käfern, die ihn pflegen, dabei ihre eigene Stimmung zu heben; Oskaris Spieler nutzt das so oft wie möglich, um seine positive Stimmung zu erreichen und Borkos Gunst für den Rest seiner Bande aufgefüllt zu halten."},
 "Einen Besonderen Vorteil zu nutzen kostet keine Gunst, es sei denn, der Text des Vorteils verlangt es ausdrücklich (die Fähigkeit Mülltonnenknacker des Foxfriends etwa erfordert, einen Punkt Gunst auszugeben, aber der Raubtierinstinkt des Catlings löst jedes Mal aus, wenn ihr eine Montage ohne zugehörige Ausgabe verbringt). Die einzige zusätzliche Regel hier: Sofern nicht anders angegeben, müsst ihr euch (wie bei Auren) in der Nähe eures Picotitans befinden, um Besondere Vorteile zu nutzen.",
 {t:"bsp",h:"– BEISPIEL: BESONDERE VORTEILE EINES PICOTITANS –",b:[
  ["Weber","Percival legt den Kopf schief und betrachtet euch vier, wie ihr da unten im verschneiten Boden zittert. Es gibt einen langen, gefährlichen Moment, in dem sein Vogelhirn mögliche Szenarien durchgeht."],
  ["Layla","Können wir ihn unauffällig daran erinnern, dass wir ihm letzte Woche all das Saatgut gegeben haben?"],
  ["Weber","Hühner sind meines Wissens nicht für ihre Unauffälligkeit bekannt …"],
  ["Layla","Guter Punkt. Ich nehme eines meiner Samenkörner heraus, wedle damit herum und rufe: „Komm schon, Mann, da gibt es noch mehr davon!“"],
  ["Weber","Seltsamerweise scheint das tatsächlich zu funktionieren. Mit dem Versprechen einer saatreicheren Zukunft plustert das titanische Huhn sein Gefieder auf, bevor es die Schwanzfedern bis zum Boden herabsenkt. Es lädt euch an Bord ein."],
  ["Dunf","Tja, es hat viel Arbeit gekostet, bis hierher zu kommen, aber ich glaube, das heißt, wir haben einen eigenen Picotitan. Zumindest solange wir ihn füttern."],
  ["Weber","So scheint es! Klettert ihr hinauf?"],
  ["Bicco","Auf jeden Fall!"],
  ["Weber","Dann ist es Zeit für eure erste Belohnung – oben zwischen Percivals Federn scheinen euch die Winterwinde bei Weitem nicht so sehr zu durchdringen. Solange ihr euren neuen Picotitan reitet, bedeutet sein Vorteil Brüten, dass ihr durch kaltes Wetter keine Negativen erleidet."],
  ["Dunf","Keine gefrorenen Fühler mehr? Den Gewinn nehme ich!"]]},
 {t:"h",x:"Vorteile des Titanenbaus"},
 "Käfer, die sich die Zeit nehmen, einen Titanenbau zu errichten, können viele weitere Besondere Vorteile nutzen, jeweils passend zur Art der errichteten Bauten. Abgesehen von den zusätzlichen Kosten an Zeit und Material für den Bau dieser Strukturen funktionieren die Vorteile des Titanenbaus genau wie alle anderen Vorteile, die ein Picotitan bieten kann. *Die Regeln zum Errichten eines eigenen Titanenbaus findest du auf S. 184.*",
 {t:"tint",h:"Beispiel:",x:"Kylliants Experimente haben die Angewohnheit, ihm ins Gesicht zu explodieren, also beschlossen er und seine Gruppe, dem Titanenbau auf Borkos Rücken einen Schlafsaal hinzuzufügen. Der Startvorteil des Schlafsaals, Ein Platz, um das Haupt zu betten, erlaubt es ihm, in einer Montage Gunst auszugeben, um ganze Aspekte auf einmal zu heilen – nützlich für die Art Käfer, die sich immer mitten in einer Explosion wiederfindet!"},
 {t:"h",x:"Brocken tragen"},
 "Zusätzlich zu all dem Guten, das ein Picotitan aus seinen Besonderen Vorteilen und seinem Titanenbau ziehen kann, kann jeder Picotitan immer einen einzelnen Brocken halten (im Maul, in den Pfoten oder vielleicht auf dem Schwanz balanciert). Da Brocken groß genug sind, dass die meisten Käfer sie nicht bewegen, geschweige denn tragen können, ist dieser zusätzliche angeborene Vorteil fast unerlässlich für den Bau und Ausbau von Titanenbau-Strukturen.",
 {t:"tint",h:"Beispiel:",x:"Als die Käfer auf Borko auf eine ganze Schachtel Streichhölzer aus der Zeit vor der Mysteriokalypse stoßen, könnten sie sie unter den Mitgliedern der Bande aufteilen und wie gewohnt weitermachen. Aber sie haben eine Küche im Sinn, und die Streichhölzer liefern eine nützliche Brennstoffquelle – also lassen sie Borko die gesamte Schachtel als Brocken ins Maul nehmen und für ein späteres Bauprojekt aufbewahren."}
]},

{id:"auswahl", t:"Einen Picotitan wählen", p:180, b:[
 {t:"vl",x:"„Die Farbe des Fells ist unvergleichlich. Niemand fand Worte, sie zu beschreiben, wenn auch einer sagte, sie erinnere an die tiefste Tinte …“"},
 "Den richtigen Picotitan zu wählen ist eine große Sache – man muss nicht nur an die Ästhetik denken, sondern auch an die Mechanik! Wie auf S. 172 gezeigt, bringen alle Picotitanen einige mechanische Vorteile mit, die Käfer zu ihrem Nutzen einsetzen können und die mit der Zeit durch den Bau einer Plattform aus nützlichen Räumen und Ausrüstung für eure Käferbande erweitert werden. Jeder Picotitan-Eintrag unten enthält einen Namen und eine Beschreibung sowie Angaben dazu, wie man die Gunst des Titanen gewinnt, welche Gigafertigkeiten er nutzen kann, welche Aura er ausstrahlt, welchen Geschwindigkeitsbonus er auf Reisen bietet und welchen Besonderen Vorteil er allen freundlichen Käfern in seiner Nähe verleiht.",
 "*Die Wahl eines Picotitans sollte eine Gruppenentscheidung sein – wenn ihr das Ding auf absehbare Zeit reiten und versorgen werdet, könnt ihr genauso gut eines wählen, das alle am Tisch glücklich macht!*",
 {t:"cards", x:[
  T("Catling",180,"#9f2320",null,
    "Eine kleiner als durchschnittliche Katze mit nur einem Hauch der göttlichen Präsenz, die die meisten größeren Katzen besitzen, so an Käfer gewöhnt, dass ihre bösen Krallen eingefahren bleiben … Größtenteils. *Kann einen Brocken tragen.*",
    ["Pflegen: 2 Aufgaben","Spielerische Jagd: 1 Aufgabe, verursacht eine Markierung Schlitzen-Schaden","Einfaches Füttern: 3 fleischbasierte Bröckchen","Luxus-Füttern: 1 fleischbasierte Mahlzeit"],
    "Gigaschleichen, Gigajagen","Gigaschlitzen, Gigatanzen",
    "Kämpferisch: Verringere den Härte-Abzug um 1 bei Raufen-Aktionen",
    ["Raubtierinstinkt","Egal wie niedlich ein Catling aussieht, im Herzen ist er ein Gelegenheitsjäger. Deine Bande erhält jedes Mal ein kostenloses Bröckchen, wenn ihr eine Montage macht, entweder „Fleischiges Geschenk“ oder „Verdächtiger Knochen“."]),
  T("Cluckatrice",180,"#eba400",null,
    "Es gibt viele Legenden über Hühner – dass sie einen Käfer mit ihrem Blick zu Stein verwandeln können, dass ihre Eier Gefängnisse sind, dass ihre Federn Glück bringen, wenn sie sich an einem Dienstag lösen. Zum Glück wissen alle, die einmal Zeit in der Nähe solch pickender Plagegeister verbracht haben, dass all diese Legenden falsch sind. *Kann einen Brocken tragen.*",
    ["Pflegen: 3 Aufgaben","Den Morgen begrüßen: Einmal pro Tag bei Sonnenaufgang, kostenlos","Einfaches Füttern: 2 Bröckchen"],
    "Gigafliegen, Gigaquasseln","Gigaprahlen, Gigazähmen",
    "Neugierig: Verringere den Härte-Abzug um 1 bei Finden-Aktionen",
    ["Brüten","Auf einem Huhn zu reiten erlaubt dir, alle negativen Wettereffekte zu ignorieren, die von kälteren Temperaturen herrühren."]),
  T("Axolittle",180,"#008a99","titan/axolittle",
    "Paradox benannt, denn sie sind eigentlich ziemlich groß im Vergleich zu manchen Amphibien, die man an Pfützen und Teichen findet. Extrem, schmerzhaft niedlich. *Kann einen Brocken tragen.*",
    ["Pflegen: 2 Aufgaben","Herumplanschen: Einmal pro Szene, erfordert ein nahes Gewässer","Einfaches Füttern: 3 schleimige Bröckchen"],
    "Gigaschwimmen, Gigakümmern","Gigabrutzeln, Gigablenden",
    "Hüpfend: Verringere den Härte-Abzug um 1 bei Bewegen-Aktionen",
    ["Amphibisch","Der Axolittle trägt in seiner Halskrause genug Luft, um Käfer unbegrenzt unter Wasser atmen zu lassen, solange sie einigermaßen nah bleiben."]),
  T("Disastergoose",181,"#008a99",null,
    "Ein eleganter Ball kaum verhohlenen Hasses auf alles auf der Welt, was nicht gänsisch ist; dieser Picotitan duldet die Käfer, die sich auf seinem Rücken ein Zuhause gemacht haben, nur ganz vage … Zumindest erweckt er in der Öffentlichkeit gern diesen Eindruck. *Kann einen Brocken tragen.*",
    ["Pflegen: 3 Aufgaben","Zur Beute werden: Einmal pro Tag einen Schritt auf einer Reise ohne den Geschwindigkeitsbonus der Gans machen","Einfaches Füttern: 1 Bröckchen, 1 Krimskrams, und verursacht eine Markierung Erschrecken-Schaden"],
    "Gigafliegen, Gigahauen","Gigaflitzen, Gigaerschrecken",
    "Kämpferisch: Verringere den Härte-Abzug um 1 bei Raufen-Aktionen",
    ["Schwanengesang","Gib zwei Punkte Gunst aus, damit die Disastergoose ein scheußliches Gehupe von sich gibt, das allen Gefahren in der Nähe unausweichlichen Gigaerschrecken-Schaden zufügt … und allen freundlichen Käfern, die zufällig in Reichweite sind."]),
  T("Foxfriend",181,"#b44c25",null,
    "Ein rötlicher Blitz zwischen den Waldblättern? Das Scheppern eines Mülltonnendeckels? Das ist ein Foxfriend, die unbestrittenen Könige des Stöberns. *Kann zwei Brocken tragen.*",
    ["Pflegen: 2 Aufgaben","Schnüffeln & Kläffen: 1 Aufgabe, erfordert einen stark duftenden Interessanten Punkt","Einfaches Füttern: 4 Bröckchen"],
    "Gigaschleichen, Gigastöbern","Gigadenken, Gigagraben",
    "Neugierig: Verringere den Härte-Abzug um 1 bei Finden-Aktionen",
    ["Mülltonnenknacker","Von Müll zu Schatz, jedes Mal. Du kannst einen Punkt Gunst des Foxfriends ausgeben, um ein negatives Etikett von einem gefundenen Bröckchen oder Krimskrams zu entfernen und durch ein positives Etikett zu ersetzen (vom Weber geliefert)."]),
  T("Otterkip",182,"#9f2320",null,
    "Selbst für einen Picotitan klein; Otter werden wegen ihrer Schnelligkeit, Wendigkeit und Fähigkeit gewählt, auch unter den gefährlichsten Bedingungen zu schwimmen. *Kann einen Brocken tragen.*",
    ["Pflegen: 2 Aufgaben","Schnurrhaar-Putzen: 1 Aufgabe, nur in Dunkelheit","Einfaches Füttern: 4 Bröckchen","Luxus-Füttern: 1 fischbasierte Mahlzeit"],
    "Gigaschwimmen, Gigaflitzen","Gigabeißen, Gigablenden",
    "Hüpfend: Verringere den Härte-Abzug um 1 bei Bewegen-Aktionen",
    ["Wasserschneider","Wenn ihr auf eine Reise durch eine nasse Umgebung geht oder während eines Sturms, erhöhe die Anzahl der Schritte, die jede Reiseaktion bietet, um 1."]),
  T("Puppo",182,"#6d2420",null,
    "Die grenzenlose Energie des Hunde-Picotitans ist eine Pracht – es ist fast unmöglich, mehr positive Einstellung in ein einzelnes Tier zu packen. Dieser wedelnde Schwanz kann auch einen höllischen versehentlichen Schlag austeilen. *Kann einen Brocken tragen.*",
    ["Pflegen: 2 Aufgaben","Apportieren: 1 Aufgabe, 1 hüpfender oder aerodynamischer Krimskrams","Einfaches Füttern: 3 fleischbasierte Bröckchen","Luxus-Füttern: 1 fleischbasierte Mahlzeit"],
    "Gigaquasseln, Gigahauen","Gigagraben, Gigakartieren",
    "Freundlich: Verringere den Härte-Abzug um 1 bei Anfreunden-Aktionen",
    ["Den Hund streicheln","Jeder Käfer, der die Pflegen-Aufgabe in einer Montage nutzt, kann seine Stimmung ins Positive ziehen."]),
  T("Hoglet",182,"#9f2320",null,
    "Diese Hauer, dieser Schwanz, dieser Schwung im Schritt – Hoglets sind von Natur aus fröhlich und unkompliziert, besonders wenn sie aus der trüffelbesessenen Hierarchie herausgenommen sind, in die die Natur sie gern presst. *Kann einen Brocken tragen.*",
    ["Pflegen: 2 Aufgaben","Stöbern: 1 Aufgabe, verursacht eine Markierung Kümmern-Schaden","Einfaches Füttern: 3 Bröckchen","Luxus-Füttern: 1 pilzbasierte Mahlzeit"],
    "Gigakartieren, Gigaschlitzen","Gigaschützen, Gigajagen",
    "Hüpfend: Verringere den Härte-Abzug um 1 bei Bewegen-Aktionen",
    ["Alte Gewohnheiten sterben langsam","Immer wenn ein Käfer ein Pilz- oder Schwammerl-Bröckchen erhält, füge ihm ein positives Etikett hinzu (vom Weber gewählt), und dieser Käfer leert eine Markierung Schaden von einer beliebigen seiner Leisten."]),
  T("Lambkin",182,"#008a99",null,
    "Was könnte weicher sein als das? Es ist, als würde man auf einer flauschigen weißen Wolke durch die Welt schweben (besonders, wenn man mit dem Fehlen eines Geruchssinns gesegnet ist). *Kann einen Brocken tragen.*",
    ["Pflegen: 2 Aufgaben","Scheren: 1 Aufgabe, erhalte einen Krimskrams, „Weiche Wolle“, und nimm eine Markierung Schlitzen-Schaden","Einfaches Füttern: 4 Bröckchen"],
    "Gigakümmern, Gigaspüren","Gigatanzen, Gigawerkeln",
    "Freundlich: Verringere den Härte-Abzug um 1 bei Anfreunden-Aktionen",
    ["Schäfchenzählen","Eine Aufgabe zum Ausruhen in der Nähe eines Lambkins zu nutzen erlaubt einem Käfer, seine Stimmung ins Positive zu ziehen und ein Verbrennen in eine Markierung umzuwandeln (anstelle der üblichen Vorteile)."]),
  T("Shellcrawler",183,"#eba400",null,
    "Ah, die Schildkröte – prachtvollstes aller gepanzerten Wesen, jede Bewegung ein Schritt in einem Tanz, jede Regung ein sorgfältig geplanter Ausdruck von Anmut. Man kommt vielleicht nicht mit großer Geschwindigkeit ans Ziel, aber man ist auf jeden Fall vorbereitet, wenn man dort ankommt. *Kann zwei Brocken tragen.*",
    ["Pflegen: 2 Aufgaben","Spucken & Polieren: 1 Aufgabe, einmal pro Tag","Einfaches Füttern: 3 Bröckchen"],
    "Gigaschützen, Gigadenken","Gigazähmen, Gigaspüren",
    "Freundlich: Verringere den Härte-Abzug um 1 bei Anfreunden-Aktionen",
    ["Langsam & stetig","Anders als andere Picotitanen gibt die Schildkröte keinen Geschwindigkeitsbonus auf Reisen. Stattdessen erhalten alle Käfer, immer wenn ihr während einer Reise eine Montage macht, eine zusätzliche Aufgabe."]),
  T("Raccoonie",183,"#008a99",null,
    "Greifende Hände, überall greifende Hände! Waschbären sind bekannte Hamster und Experten darin, Müllhaufen zu durchwühlen und mit Bröckchen und Krimskrams in Hülle und Fülle davonzukommen. Ob irgendetwas davon nützlich ist, ist eine ganz andere Frage. *Kann zwei Brocken tragen.*",
    ["Pflegen: 2 Aufgaben","Ein kleines Geschenk: 3 Krimskrams, und alle Käfer ziehen ihre Stimmung ins Positive","Einfaches Füttern: 1 Bröckchen und 1 Krimskrams"],
    "Gigastöbern, Gigaprahlen","Gigaklettern, Gigawerkeln",
    "Neugierig: Verringere den Härte-Abzug um 1 bei Finden-Aktionen",
    ["Greifhand","Während einer Montage kann ein Käfer eine Aufgabe nutzen, um mit Hilfe des Waschbären zu Organisieren. Tut er das, nennt drei Dinge, die ihr finden möchtet, statt des üblichen einen, und nutzt die Ergebnisse eines einzelnen Organisieren-Wurfs."]),
  T("Serpent",183,"#9f2320",null,
    "Mit schimmernden Schuppen und langer gespaltener Zunge ist die Schlange eine seltene, aber wirksame Wahl für einen käferigen Freund. Viele Besucher werdet ihr aber wahrscheinlich nicht bekommen. *Kann einen Brocken tragen.*",
    ["Pflegen: 2 Aufgaben","Gift melken: 2 Aufgaben, verursacht eine Markierung Brutzeln-Schaden, und jeder Käfer erhält ein Bröckchen, „Schlangenmilch“","Einfaches Füttern: 3 fleischbasierte Bröckchen","Luxus-Füttern: 1 fleischbasierte Mahlzeit"],
    "Gigabrutzeln, Gigaerschrecken","Gigabeißen, Gigaklettern",
    "Kämpferisch: Verringere den Härte-Abzug um 1 bei Raufen-Aktionen",
    ["Gegengift","Haar der Schlange, so sagt man. Immer wenn ein Mitglied der Käferbande Brutzeln-Schaden nehmen würde, kann es einen Punkt Gunst der Schlange ausgeben, um ihn vollständig zu vermeiden (egal in welcher Höhe)."])
 ]}
]},

{id:"bau", t:"Einen Titanenbau anlegen", p:184, b:[
 {t:"vl",x:"„Baut ihr es, werden sie kommen. Und sie ziehen auch die Schuhe aus, wenn sie wissen, was gut für sie ist.“"},
 "Sobald ihr einen Picotitan habt, der freundlich genug ist, euch auf sich reiten zu lassen, ist es Zeit, euren Titanenbau zu errichten! Ein Titanenbau ist eine Sammlung von Krimskrams und Kram, angepasst an die Bedürfnisse reisender Käfer, Schrott und Schätze zu gleichen Teilen verwandelt in Räume, Quartiere und nützliche Ausrüstung – Merkmale. Ein Picotitan trägt vielleicht eine voll funktionsfähige Küche neben einem luxuriösen Schlafquartier, ein anderer eine vollgestellte Werkstatt, flankiert von einer Bar und einer Schmiede. Die Möglichkeiten sind nicht endlos … Aber es sind einige davon im Umlauf.",
 {t:"h",x:"Materialbedarf & Improvisation"},
 "Alle Merkmale eines Titanenbaus erfordern Brocken, eine viel größere Version der Bröckchen und Krimskrams, die Käfer herumzuschleppen gewohnt sind. Eine Küche etwa braucht eine Blechdose und eine Streichholzschachtel, die erste als feuerfester Raum und die zweite als Wärmequelle zum Kochen.",
 "Aber … was, wenn ihr keine Blechdose oder keine Streichholzschachtel finden könnt?",
 "*Improvisiert.*",
 "Die im Eintrag eines Merkmals aufgeführten Brocken sind eine Art „Bestfall“-Szenario, das die typische Erscheinung eines bestimmten Merkmals beschreibt. Habt ihr keine Blechdose, aber eine zerbrochene Milchflasche gefunden, tut es die vermutlich auch. Keine Streichholzschachtel, aber ein paar Feuerwerkslunten? Steckt sie stattdessen hinein! Andere als die vorgeschlagenen Brocken zu verwenden macht euren Titanenbau ein kleines bisschen einzigartiger, und wir raten dringend dazu, wann immer ihr könnt.",
 {t:"h",x:"Ein Merkmal einrichten"},
 "Sobald ihr die nötigen Brocken habt (oder etwas, das nahe genug herankommt), ist es Zeit zu bauen! Wenn ihr eurem Picotitan ein neues Merkmal hinzufügt, müsst ihr …",
 {t:"ul",x:["eine Montage beginnen","die benötigten Brocken (oder Ersatz) verbrauchen","eine Aufgabe nutzen, um das Merkmal zu errichten","einen Punkt aus der Gunst-Reserve eures Picotitans ausgeben"]},
 "… Und das war's, ihr seid fertig! Fügt das Merkmal samt allen besonderen Vorteilen, die es gibt, eurem Streifzugbogen hinzu, und ihr seid im Geschäft!",
 {t:"h",x:"Ein Merkmal ausbauen"},
 "Sobald ein Merkmal steht, könnt ihr es weiter ausbauen, indem ihr zusätzliche Brocken ausgebt. Jedes Merkmal hat eine Reihe möglicher Ausbauten und eine Liste der für jeden nötigen Brocken. Ein Merkmal auszubauen funktioniert genau wie das Einrichten – Montage beginnen, Brocken verbrauchen, Aufgabe nutzen, Gunst ausgeben – und die Brocken sind genauso wandelbar, wenn ihr clevere Ideen für Ersatz habt.",
 "*Achtet darauf, dass alle mit einem Merkmal zufrieden sind, bevor ihr es hinzufügt – viele Merkmale bieten Teamvorteile, aber einige sind um Fertigkeiten oder Tätigkeiten herum aufgebaut, die spezieller sind.*",
 {t:"bsp",h:"– BEISPIEL: BROCKEN –",b:[
  ["Weber","Die Maulwürfe ziehen sich zurück und werfen kneifende Blicke zurück in eure Richtung (oder zumindest dorthin, wo sie euch vermutlich vermuten). Es ist eine Atempause, aber ihr glaubt nicht, dass sie lange anhält."],
  ["Swift","Vielleicht Zeit, hier abzuhauen?"],
  ["Layla","Keine schlechte Idee – sollten wir vorher etwas mitnehmen?"],
  ["Dunf","Na ja, ich dachte … an diese riesige Laterne, die die Maulwürfe angebetet haben. Jetzt, wo sie weg sind, hindert uns etwas daran, sie, du weißt schon … mitzunehmen?"],
  ["Swift","Mitzunehmen?"],
  ["Dunf","Ja! Ich wette, unser Picotitan könnte sie tragen – würde sie als Brocken zählen, Weber?"],
  ["Weber","Das würde sie in der Tat."],
  ["Dunf","Und wir haben schon nach einer Taschenlampe gesucht, um den Ausguck auf Percivals Rücken auszubauen, aber ich glaube, das hier würde sich gut als Ersatz machen."],
  ["Layla","Dunf, das ist brillant! Ich glaube, das würde klappen!"],
  ["Dunf","Dann Zeit, unsere Cluckatrice zu rufen. Und danach sollten wir definitiv losrennen!"]]}
]},

{id:"merkmale", t:"Titanenbau-Merkmale", p:185, b:[
 {t:"cards", c:"#969f31", x:[
  {t:"Küche",p:185,c:"#008a99",b:[
   {t:"h4",x:"Benötigte Brocken"},{t:"ul",x:["Blechdose","Streichholzschachtel"]},
   "Was gäbe es Schöneres als eine selbstgekochte Mahlzeit unterwegs? Lagerfeuer sind ja nett, aber eine vollständige Küche mit den Vorteilen sauberer Arbeitsflächen und eines eingebauten Ofens? UND einem Dach, das den Regen abhält? Das ist ein kleines Stück kulinarischer Himmel. *Eine Küche bringt folgende Vorteile …*",
   {t:"dl",x:[
    ["Hausmannskost","Mahlzeiten, die in einer Küche zubereitet wurden, leeren beim Verzehr eine Markierung Schaden von einer beliebigen Teile-Leiste."],
    ["Kaltes Blechdach","Ignoriere alle Abzüge bei Kochwürfen in einer Küche, die normalerweise durch das Wetter verhängt würden."]]},
   {t:"h4",x:"Küchen-Ausbauten"},
   {t:"dl",x:[
    ["Schornstein (Metallstrohhalm)","Gib bei nahem Picotitan 1 Gunst aus, um deine aktuelle Umgebung mit Rauch zu fluten. Der nächste Angriff eines freundlichen Käfers zählt sowohl Käfer als auch Ziel als in Dunkelheit und überrascht sein Ziel."],
    ["Resteeimer (Fingerhut)","Wenn du beim Zubereiten einer Mahlzeit in einer Küche eine Wendung würfelst, behalte eines der Bröckchen, die normalerweise verbraucht worden wären, und füge ihm das Etikett „Reste“ hinzu (zusätzlich zu den üblichen Effekten)."],
    ["Vorratskammer (5 leckere Bröckchen)","Wenn du eine Aufgabe nutzt, um in der Küche zu kochen, brauchst du nur ein Bröckchen für deinen Wurf (statt der üblichen Mindestanforderung von zwei)."],
    ["Fütterungsrutsche (Schuhlöffel)","Wenn du beim Kochen einer Mahlzeit in der Küche einen Triumph würfelst, erhalte einen Punkt Gunst bei deinem Picotitan (einmal pro Szene)."]]}]},
  {t:"Werkstatt",p:185,c:"#b44c25",b:[
   {t:"h4",x:"Benötigte Brocken"},{t:"ul",x:["Metallkäfig","Eckiger Fels"]},
   "Jeder gute Erfinder braucht eine eigene Werkstatt, einen sicheren und halbwegs explosionssicheren Ort, um an Technik herumzutüfteln und Mechanismen zu bestaunen. Die einfache Werkstatt ist etwas karg an Ersatzteilen, bietet aber trotzdem einen hervorragenden Einstieg auf dem Weg zu kluger Schöpfung. *Eine Werkstatt bringt folgende Vorteile …*",
   {t:"dl",x:[
    ["Sicherer Stand","Prototypen, die in einer Werkstatt gebaut werden, halten eine zusätzliche Szene, wenn du einen Triumph würfelst, oder eine zusätzliche Aktion, wenn du einen Konflikt würfelst."],
    ["Ein Ort des Studiums","Ignoriere alle Abzüge bei Herstellen-Würfen in einer Werkstatt, die normalerweise durch Wetter oder Zeitdruck verhängt würden."]]},
   {t:"h4",x:"Werkstatt-Ausbauten"},
   {t:"dl",x:[
    ["Amboss (Sardinendose)","Behandle Ergebnisse von 4, 5 oder 6 als dieselbe Zahl, wenn du beim Herstellen in deiner Werkstatt auf Paschs prüfst."],
    ["Beschrifteter Schrotthaufen (Papierfetzen)","Wenn du beim Bau eines Prototyps in der Werkstatt eine Wendung würfelst, behalte einen der Krimskrams, die normalerweise verbraucht worden wären, und füge ihm das Etikett „Verschrottet“ hinzu (zusätzlich zu den üblichen Effekten)."],
    ["Überfüllte Regale (5 mechanische Krimskrams)","Wenn du eine Aufgabe nutzt, um in der Werkstatt herzustellen, brauchst du nur einen Krimskrams für deinen Wurf (statt der üblichen Mindestanforderung von zwei)."],
    ["Chemiebaukasten (Marmeladenglas)","Gib bei nahem Picotitan 1 Gunst aus, um einer beliebigen Gefahr Gigabrutzeln-Schaden zuzufügen (einmal pro Szene)."]]}]},
  {t:"Ausguck",p:186,c:"#af8fc2",b:[
   {t:"h4",x:"Benötigte Brocken"},{t:"ul",x:["Besenstiel","Taschenlampe"]},
   "Viel einfacher, als durchs Unterholz zu spähen oder die Landschaft zu erklimmen, um einen besseren Überblick zu bekommen: Ein Ausguck lässt Käfer auf Reisen weiter und klarer sehen als sonst. *Ein Ausguck bringt folgende Vorteile …*",
   {t:"dl",x:[
    ["Scheinwerfer","Solange der Picotitan nah ist, kann ein bestimmter Käfer oder eine bestimmte Gefahr (und die Umgebung um sie) als im Licht gelten, selbst wenn die Umgebung sonst in Dunkelheit getaucht ist."],
    ["Beherrschende Position","Immer wenn Ausguckwürfe gemacht werden, kann ein Käfer seine übliche 2W6 auf 4W6 aufwerten (und wählen, welche zwei Würfel er für sein Ausguckergebnis behält)."]]},
   {t:"h4",x:"Ausguck-Ausbauten"},
   {t:"dl",x:[
    ["Ein Funkeln im Auge (Antike Brille)","Wenn Ausguckwürfe gemacht werden, würfelt auch der Picotitan selbst 2W6."],
    ["Rundum-Alarm (Schnur)","Gib einen Punkt Gunst aus, um einen Alarm zu stellen; jede Gefahr, die sich beim Lagern in die Nähe verirrt, ist überrascht, wenn eine Begegnung beginnt!"],
    ["Zinnen (Eierkarton)","Einmal pro Szene darfst du einen Punkt Gunst ausgeben, damit ein Käfer in der Nähe des Picotitans einen Schadensfall vollständig ignoriert."]]}]},
  {t:"Bar",p:187,c:"#405435",b:[
   {t:"h4",x:"Benötigte Brocken"},{t:"ul",x:["Flasche Alkohol","Zerbrochenes Plastik, Steingut, Porzellan oder Glas"]},
   "Nur wenige Dinge stillen den Durst eines Käfers so gut wie ein Schluck gewürzter Pollenwein nach einem harten Abenteuertag, und Picotitan-Bars sind der perfekte Ort, nicht nur um beim Hereinbrechen der Nacht abzuschalten, sondern auch um Besucher zu bewirten und zu beeindrucken. *Eine Bar bringt folgende Vorteile …*",
   {t:"dl",x:[
    ["In den Bechern","Solange du an Bord des Picotitans bist, erlaubt dir eine Aufgabe, deine Sorgen zu ertränken (oder darin zu suhlen) und deine Stimmung entweder ins Positive oder ins Negative zu ziehen."],
    ["VIP-Bereich","Behandle Konflikte als Triumphe, wenn du versuchst, Besucher der Bar deines Picotitans zu beeindrucken oder mit ihnen zu verhandeln."]]},
   {t:"h4",x:"Bar-Ausbauten"},
   {t:"dl",x:[
    ["Der harte Stoff (Faules Obst)","Wenn du eine Aufgabe nutzt, um deine Stimmung mit der Bar zu beeinflussen, ziehst du sie zwei Schritte ins Positive oder Negative statt des üblichen einen."],
    ["Picoball-Tisch (Lederbörse)","Ein beliebtes Spiel unter Käfern; Picoball ähnelt vage einer Partie Billard, bei der die Hälfte der Regeln spontan erfunden wurde. Eine Aufgabe zum Picoball-Spielen setzt deine Stimmung auf „ok“, egal wo sie vorher stand."]]}]},
  {t:"Schlafsaal",p:187,c:"#9f2320",b:[
   {t:"h4",x:"Benötigte Brocken"},{t:"ul",x:["Schuhkarton","Nähset"]},
   "Schlaf ist was für die Schwachen? Nein, Schlaf ist was für die *Vorbereiteten*. *Ein Schlafsaal bringt folgende Vorteile …*",
   {t:"dl",x:[["Ein Platz, um das Haupt zu betten","Gib in einer Montage eine Aufgabe und einen Punkt Gunst aus, um alle Markierungen einer einzelnen Aspekt-Leiste vollständig zu leeren."]]},
   {t:"h4",x:"Schlafsaal-Ausbauten"},
   {t:"dl",x:[
    ["Luxusdecken (Ballen Seide)","Wenn du eine Aufgabe nutzt, um dich an Bord deines Picotitans durch natürliche Heilung zu erholen, verdoppelt sich die Zahl der Markierungen, die du leerst."],
    ["Spiegel (Schminkset)","Verbringe eine Aufgabe vor dem Spiegel, um dein Selbstvertrauen aufzubauen. Die erste Aktion, die du in der nächsten Szene ausführst, erhält verstärkte Wucht."],
    ["Verdunkelungsvorhänge (Müllsack)","Im Schlafsaal giltst du als in Dunkelheit, egal wie hell es sonst ist."]]}]},
  {t:"Lager",p:187,c:"#6f4118",b:[
   {t:"h4",x:"Benötigte Brocken"},{t:"ul",x:["Holzkiste"]},
   "Bröckchen und Krimskrams neigen dazu, von einem Picotitan zu rollen, wenn er sich bewegt, egal wie gut man sie balanciert hat. Zwar kann man meist anhalten und sie wieder aufsammeln, aber wer will schon sein großes Abenteuer damit verbringen, ständig die vergangene Straße im Auge zu behalten? Lager sind im Vergleich zu vielen der „cooleren“ Titanenbau-Ausbauten ziemlich praktisch, haben aber einige einzigartig nützliche Eigenschaften für Sammler von Bröckchen und Krimskrams. *Ein Lager bringt folgende Vorteile …*",
   {t:"dl",x:[["Massenhaft Platz","An Bord deines Picotitans kannst du Bröckchen und Krimskrams von deinen eigenen Tragplätzen ins Lager verlagern. Nutze die leere Rückseite des Bogens des Picotitans, um sie festzuhalten – der Platz ist unbegrenzt."]]},
   {t:"h4",x:"Lager-Ausbauten"},
   {t:"dl",x:[
    ["Schatzkammer (Vorhängeschloss)","Bröckchen und Krimskrams können nicht aus deinem Lager gestohlen werden."],
    ["Brockengurte (Ledergürtel)","Dein Picotitan kann zwei zusätzliche Brocken tragen."]]}]},
  {t:"Garten",p:188,c:"#979f32",b:[
   {t:"h4",x:"Benötigte Brocken"},{t:"ul",x:["Holztablett","Kompostsäcke"]},
   "Das Landleben übt einen Reiz aus, der Arten und Kulturen überschreitet, ein Bedürfnis (bei manchen), zu säen und zu ernten und am Ende des Tages mit Stolz über ein kleines Stück fruchtbares Land zu blicken. Und, mit etwas Glück, über ein oder zwei riesige Gemüse darin. *Ein Garten bringt folgende Vorteile …*",
   {t:"dl",x:[["Gratis-Essen","Am Ende einer Reise erhält ein Käfer der Bande ein kostenloses pflanzenbasiertes Bröckchen aus dem Garten (vom Weber geliefert, aber vermutlich auf Grundlage der Beschreibungen der Gruppe, was sie dort anzubauen versuchen)."]]},
   {t:"h4",x:"Garten-Ausbauten"},
   {t:"dl",x:[
    ["Unkrautvertilger (Flasche gefährlicher Chemikalien)","Erhöhe am Ende einer Reise die Zahl der kostenlosen Bröckchen, die der Garten erzeugt, um eins."],
    ["Blumengesteck (Samentüte)","Ein Käfer kann an Bord des Picotitans eine Aufgabe nutzen, um ein kostenloses blumenbasiertes Bröckchen zu erhalten."],
    ["Hängematte (Taschentuch)","Wenn du eine Aufgabe nutzt, um dich an Bord deines Picotitans durch natürliche Heilung zu erholen, leere eine zusätzliche Markierung Schaden von einer deiner Aspekt-Leisten."],
    ["Springbrunnen (Kleine Gießkanne)","Immer wenn ein Regensturm beginnt, erhält der Picotitan einen Punkt Gunst."]]}]},
  {t:"Lazarett",p:188,c:"#f3a477",b:[
   {t:"h4",x:"Benötigte Brocken"},{t:"ul",x:["Alte Spritze","Wattebäusche"]},
   "Ein Ort zum Ausruhen, Essen oder Entspannen kann einen Käfer ein wenig gesünder, ein bisschen widerstandsfähiger machen. Aber die Welt ist groß und voller Gefahren, und ab und zu wird ein Käfer so übel zugerichtet, dass eine kurze Rast nicht mehr reicht. Dafür gibt es das Lazarett, wenn unterwegs ernsthafte Heilung nötig ist. *Ein Lazarett bringt folgende Vorteile …*",
   {t:"dl",x:[["Ein Ort für RICHTIGES Heilen","Gib in einer Montage eine Aufgabe und einen Punkt Gunst aus, um alle Verbrennungen einer einzelnen Teile- oder Kumpel-Leiste vollständig zu leeren."]]},
   {t:"h4",x:"Lazarett-Ausbauten"},
   {t:"dl",x:[
    ["Arztvorrat (Flasche unidentifizierter Pillen)","Wenn du im Lazarett würfelst, um zu heilen, musst du nie ein eigenes Bröckchen oder Krimskrams verbrauchen (erhältst aber trotzdem 1W6 Vorteil, als hättest du es getan)."],
    ["Schabewerkzeuge (Rostiges Skalpell)","Behandle Ergebnisse von 4, 5 oder 6 als dieselbe Zahl, wenn du beim Heilen in deinem Lazarett auf Paschs prüfst."],
    ["Verdünnter Nektarspender (Zapfhahn)","In deinem Lazarett kannst du einen Punkt Gunst ausgeben, um sofort 1W6 Markierungen auf einem deiner Teile oder Kumpel zu heilen, aber dieser Ausbau kann nur einmal pro Szene genutzt werden."],
    ["Vorbeugende Medizin (Pflaster / Verband)","Du kannst eine Aufgabe und einen Punkt Gunst ausgeben, um auf einem deiner Aspekte ein einzigartiges temporäres Augment zu erhalten, „Gedämmt“, das dem Ende der Aspekt-Leiste einen Bruch und zwei Herzen hinzufügt. *Wenn die zusätzlichen Herzen markiert oder verbrannt werden, werden sie vollständig entfernt, und du verlierst das temporäre Augment. Du kannst dieses temporäre Augment immer nur auf einem deiner Aspekte haben, und es kann die Zahl der Herzen eines Aspekts nicht über 15 heben.*"]]},
   {t:"vl",x:"„So, bitte sehr, du bist wie neu! Na ja, nicht wirklich wie neu – ich würde auf dieses kleine Bein ein paar Tage lang kein Gewicht legen, du wirst eine Weile Kopfschmerzen haben, und wenn du in den nächsten Stunden müde wirst, würde ich nicht empfehlen, die Augen zu schließen, nur für den Fall. Aber, bildlich gesprochen, bist du wie neu!“",wer:"Stan Sabrehand, selbsternannter Skorpion-Doktor"}]},
  {t:"Bibliothek",p:189,c:"#5a3582",b:[
   {t:"h4",x:"Benötigte Brocken"},{t:"ul",x:["Ledergebundenes Buch","Alte Zeitung"]},
   "Käfer sind nicht für ihre Lesefertigkeiten bekannt, und sie schreiben sehr selten etwas auf, aber eine Titanenbau-Bibliothek vermittelt trotzdem eine Aura gemütlicher literarischer Geborgenheit. Und für Käfer, die geschriebene Worte *mögen*, gibt es so viele Geheimnisse zu entdecken! *Eine Bibliothek bringt folgende Vorteile …*",
   {t:"dl",x:[
    ["Uraltes Wissen","Gib an Bord deines Picotitans einen Punkt Gunst aus, um sofort eine kleine Entdeckung auf Grundlage der Geschichte der Welt zu machen."],
    ["Feste Ledereinbände","Ignoriere alle Abzüge bei Würfen zum Aushecken oder Planen in einer Bibliothek, die normalerweise durch Wetter verhängt würden."]]},
   {t:"h4",x:"Bibliothek-Ausbauten"},
   {t:"dl",x:[
    ["Gemütlicher Kamin (Streichholzschachtel)","Ignoriere die negativen Effekte eines Kälteeinbruchs, solange du an Bord deines Picotitans bist."],
    ["Skandalös! (Glanzmagazin)","Nutze an Bord deines Picotitans eine Aufgabe, um einen papierenen Krimskrams zu erhalten, „Fetzen alten Welt-Klatsches“."],
    ["Geheimgang (Toilettenpapierrolle)","Was wäre eine Bibliothek ohne einen Geheimgang hinter einem Bücherregal? An Bord des Picotitans kann ein Käfer einen Punkt Gunst ausgeben, um für kurze Zeit für eine feindliche Macht völlig unauffindbar zu werden (durch Geruch, Geräusch und Anblick)."]]}]}
 ]}
]}

);
})();
