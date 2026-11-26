/* Playwall › H (S. 223–227) */
var TA_PWT = window.TA_PWT || (window.TA_PWT = {});

TA_PWT.H1 = {t:"Gewohnheitsbildend", s:223, b:[
 {t:"faehig", h:"Gewohnheitsbildend", x:"Erschaffe eine neue neuronale Bahn. Greife in ein Gehirn und würfle **Professionalität**.",
  erg:[
   ["ok", "**Bei Erfolg** erschaffst du eine Verbindung zwischen zwei beliebigen Dingen im Kopf des Ziels. Verbindungen sind in der Regel „Wenn–dann“-Aussagen. *(„Wenn mir kalt ist, dann koche ich Linguine.“, „Wenn jemand nach links schlägt, dann weiche ich nach links aus, in den Schlag hinein.“ usw.)*"],
   ["plus", "**Bei jeder dritten {3}** wähle eines:\n– Erschaffe eine weitere Verbindung\n– Füge dieselbe Verbindung im Kopf eines weiteren Ziels hinzu"],
   ["nein", "**Bei Fehlschlag** werden allerlei zufällige Dinge in seinem Kopf stark mit dir verknüpft. Das kann unvorhersehbare Folgen haben; seine Meinung von dir und die Verknüpfungen können bedeuten, dass es besessen, hasserfüllt oder verängstigt wird. Es ist dauerhaft."]
  ]}
]};

TA_PWT.H2 = {t:"Pst", s:224, b:[
 {t:"faehig", h:"Pst", x:"Die Ruhezeiten haben begonnen. Lege den Finger an die Lippen und würfle **Präsenz**.",
  erg:[
   ["ok", "**Bei Erfolg** wird für die nächste Stunde alles im Umkreis von 100 Metern um dich zu deiner **Bibliothek**. Jeder in deiner Bibliothek begreift sofort und unbewusst, dass er leise sein sollte und dass übermäßiger Lärm bestraft wird. Das erzeugt nicht sofort Lose Enden: Betroffene, die nichts von deiner Kraft wissen, deuten es als plötzlichen Aberglauben.\nJedes Mal, wenn jemand in deiner Bibliothek ein Geräusch macht oder verursacht, das lauter als ein menschliches Flüstern ({3}{3} dB) ist, hörst du es und weißt genau, wo er ist."],
   ["plus", "**Für jede weitere {3}** darfst du einen weiteren Effekt wählen, der auf jedes Ziel angewendet wird, das in deiner Bibliothek Lärm macht:\n– Du wirst körperlos und für das Ziel unberührbar.\n– Du kannst es mit Anomalie-Fähigkeiten anvisieren, solange es sich in deiner Bibliothek befindet, ob es die üblichen Voraussetzungen für ein Ziel erfüllt oder nicht, und erhältst dafür eine kostenlose Qualitätssicherung.\n– Es erhält eine Verwarnung. Nach zwei Verwarnungen bedeutet die nächste Verwendung dieser Option, dass es tot ist.\n– Du kannst es zwingen, einen lehrreichen Monolog zu einem der folgenden Themen aufzusagen: *Informatik, Information und Allgemeines; Philosophie und Psychologie; Religion; Sozialwissenschaften; Sprache; Biologie; Kunst und Freizeit; Literatur; Geschichte und Geografie.*"],
   ["plus", "**Bei Triszendenz** kannst du alles in deiner Bibliothek, ob lebendig oder nicht, zwingen, sich in alphabetischer Reihenfolge aufzustellen."],
   ["nein", "**Bei Fehlschlag** konzentriert sich die Energie auf dich, statt das Gebiet zu umhüllen. Du wirst zu einem Leuchtfeuer anomaler Energie und wirkst als Domäne für Große Anomalien: Jedes Chaos, das ausgegeben wird, um dich oder etwas im Umkreis von {3} Metern um dich zu beeinflussen, zählt {3}-fach."]
  ]}
]};

/* Muster-Bogen: ein Fähigkeitsfeld des Charakterbogens. a = [[Antwort, Code, markierte Kästchen]], ueb = „Geübt“ angekreuzt */
function pwhBogen(f, a, ueb, r){
  return '<div class="pwh-bogen" style="--r:' + (r || -1.4) + 'deg"><div class="pwh-kopf"><p class="pwh-f"><b>F:</b> ' + tx(f) + '</p>' +
    '<div class="pwh-gs"><div>Geübt? <i>' + (ueb ? "X" : "") + '</i></div><div>Seite <u></u></div></div></div>' +
    a.map(function(x){ return '<p class="pwh-a"><span><b>A:</b> ' + tx(x[0]) + '</span><span class="pwh-k">' + [0, 1, 2].map(function(i){ return '<i>' + (i < x[2] ? "X" : "") + '</i>'; }).join("") + '</span><b class="pwh-co">' + x[1] + '</b></p>'; }).join("") + '</div>';
}
function pwhZettel(paare){
  return '<div class="pwh-zettel">' + paare.map(function(p){ return '<section><h4>' + tx(p[0]) + '</h4>' + taB([{t:"notiz", x:p[1]}]) + '</section>'; }).join("") + '</div>';
}

TA_PWT.H3 = {t:"Bedauerlich", s:224, b:[
 "**Enttäuschende Entscheidung, Agent.**",
 "Unsere Systeme melden eine Veränderung deiner anomalen Kraftstufen und eine bedauerliche Verschiebung deiner Einstellung. Bevor du diesen Weg weitergehst, möchten wir dich bitten, einige Wahrheiten zu bedenken:",
 "Weitere Anomale Entwicklung (WAE) hilft dir nicht, das Spiel Triangle Agency zu gewinnen.",
 "Diese WAE führt nicht zu Beförderungen, Anforderungen oder Wert innerhalb der Organisation Triangle Agency.",
 "Diese WAE bringt weder dir noch deinen Lieben Freude. Im Gegenteil, sie bringt ihnen Streit, Schwierigkeiten und Versuchung. Außerdem werden viele dieser Fähigkeiten für die Anomalie-Bergung nutzlos sein.",
 "Wir hoffen, dass du dich nicht länger an dieser oder irgendeiner anderen WAE beteiligst und zu deinem Hauptziel zurückkehrst: Anomalien zu fangen und die Realität zu stabilisieren. Tust du das nicht, sehen wir uns gezwungen, Korrekturmaßnahmen zu ergreifen.",
 {t:"notiz", x:"uh-oh! so gruselig! ich schätze, du hörst absolut damit auf. und ich weiß auch, was du nie tun wirst: das hier!"},
 {t:"sp", x:[
  [{t:"h3", x:"Suchen"},
   "Endet ein Einsatz damit, dass eine Anomalie entkommt, kannst du in Kontakt bleiben. Für jede entkommene Anomalie in deiner Zweigstelle fügen alle Agenten mit Suchen eine neue Beziehung hinzu und setzen ihren Zähler auf 6. Diese Beziehung kann nicht durch Zeit auf deine Realität erhöht werden, und sie hat keinen Verbindungsbonus.",
   "Jedes Mal, wenn du Zeit auf deine Anomalie verwendest, darfst du zusätzlich zu allen anderen Effekten eine dieser entkommenen Anomalien aufsuchen und besuchen. Jedes Mal erhöhst du ihre Verbindung um 1. Erreicht sie 9, vermischt sich die Resonanz deiner Anomalie mit ihrer: Du erhältst eine neue Anomalie-Fähigkeit, die auf Fokus und Impuls jener Anomalie beruht. *(Das kann eine Fähigkeit sein, die es durch eine bestehende Anomalie-Option bereits im Spiel gibt, oder eine neue, die du und der GM gemeinsam erschafft.)*"],
  [{t:"notiz", x:"ich weiß nicht mal, warum ich das geschrieben habe. weil du es offensichtlich nie tun wirst."},
   {t:"notiz", pos:"rechts", x:"ich brauche auch die anderen Mitglieder deines Teams auf meiner Seite, also versuche sie zu überzeugen, dass es eine gute Idee ist, manche Anomalien laufen zu lassen, wenn du kannst. oder, wenn du bereit bist, ein bisschen riskanter zu spielen, würfle viel und erzeuge so viel Chaos wie möglich. gib der Anomalie eine faire Chance."},
   {t:"notiz", x:"denk nur daran: du bist mir nützlicher und ein besserer Dorn im Auge der Agency, wenn du nicht gefeuert wirst. alles zu offensichtlich zu machen, ist ein Ticket in den Vault, und glaub mir. du willst nicht hier drin sein. -U"}]
 ]}
]};

TA_PWT.H4 = {t:"Superkraft-Zeit", s:225, b:[
 {t:"notiz", x:"ENDLICH. hey. ich bin derjenige, der die ganze Zeit versucht hat, mit dir zu reden. ich habe bis jetzt mein Bestes gegeben, aber da du endlich eine echte Regel gebrochen hast, können wir reden. was du gerade getan hast, hat deine Anomalie-Fähigkeiten verbessert, also erkläre ich dir die Einzelheiten."},
 {t:"sp", x:[
  ["Die Agency lügt nicht, wenn sie sagt, dass Anomalien von Beobachtung genährt werden. Deine persönliche Anomalie ist genauso: Wer du bist und was andere von dir halten, bestimmt, wie sich deine Kräfte entwickeln.",
   "Du hast schon Fähigkeitsfragen gesehen. Auf deinem Charakterbogen sehen sie so aus:",
   {t:"html", x:pwhBogen("Wenn mich jemand unterbricht, gebe ich ihm …", [["Einen Vertrauensvorschuss.", "T2", 0], ["Meine Meinung.", "P4", 0]], 0, -1.6)},
   {t:"notiz", x:"Gehirne sind komplizierte Dinge. Unsere Meinungen über andere Menschen verschieben sich ständig in einem Durcheinander aus Nuancen, Kontext, Widersprüchen, Hungergefühl und der Diskrepanz zwischen unserem emotionalen und logischen Selbst. gott sei dank spielst du ein TTRPG und kannst den ganzen Kram gegen ein paar einfache Fragen tauschen, die ich für dich gemacht habe!"},
   {t:"html", x:'<div class="pwh-regel"><p><b>Jedes Mal, wenn du ein Kästchen in deiner Anomalie-Leiste markierst (auch jetzt), wähle eines:</b></p><h4>Üben</h4><p><b>Markiere bei einer beliebigen Anomalie-Fähigkeit „Geübt“.</b></p><h4>Bekannt werden</h4><p><b>Lösche „Geübt“ bei einer Anomalie-Fähigkeit und stelle der Gruppe die Frage dieser Fähigkeit. Markiere die Leiste, die ihrer Antwort entspricht. Ist eine Leiste voll, besuche den angegebenen Code hinter der Playwall und erhalte dort die neue Fähigkeit.</b></p></div>'},
   {t:"notiz", pos:"rechts", x:"deine Kraft wird dramatisch davon beeinflusst, wie du dich anderen gegenüber präsentierst, und braucht Zeit, um sich zu verfestigen. Jedes Mal, wenn du bei einem Einsatz eine Fähigkeit einsetzt, markierst du „Geübt“, so:"},
   {t:"html", x:pwhBogen("… unterbricht mich, gebe ich ihm …", [["Einen Vertrauensvorschuss.", "T2", 0], ["Meine Meinung.", "P4", 0]], 1, 1.4)}],
  ["Du kannst außerdem bei einer Fähigkeit „Geübt“ markieren, wenn du Zeit auf deine Anomalie verwendest. Das ist mit der Option „Üben“ gemeint. Ist eine Anomalie-Fähigkeit geübt, qualifiziert sie sich für Bekannt werden.",
   "**Nehmen wir als Beispiel die Fähigkeit Wie bitte? von Whisper.**",
   "Nun, da sie geübt ist, kannst du eine Zeit in Anomalie ausgeben, um Bekannt werden zu aktivieren. Du löschst „Geübt“ und stellst der ganzen Gruppe die Frage dieser Fähigkeit.",
   "Die beiden anderen Agenten und der GM stimmen ab. Zwei sagen „Vertrauensvorschuss“, einer sagt „Meine Meinung“. Der Vertrauensvorschuss gewinnt! Jetzt weißt du, wie sie dich sehen, und markierst die Leiste dieser Antwort:",
   {t:"html", x:pwhBogen("Wenn mich jemand unterbricht, gebe ich ihm …", [["Einen Vertrauensvorschuss.", "T2", 1], ["Meine Meinung.", "P4", 0]], 0, -1.2)},
   "Dann kannst du sie erneut üben und wieder Bekannt werden, um noch einmal zu fragen. Gefällt dir die Antwort nicht, kannst du versuchen, dein Verhalten zu ändern, damit du beim nächsten Mal eine andere bekommst. Hast du das ein paar Mal getan, füllst du eine Leiste. Das sieht dann etwa so aus:",
   {t:"html", x:pwhBogen("Wenn mich jemand unterbricht, gebe ich ihm …", [["Einen Vertrauensvorschuss.", "T2", 3], ["Meine Meinung.", "P4", 1]], 0, 1.3)},
   "Wird dieses letzte Kästchen markiert, gehst du zum Dokument hinter der Playwall (in diesem Fall T2) und siehst nach, welche neue Fähigkeit du erhalten hast.",
   {t:"notiz", x:"ich mache dir auf der nächsten Seite ein kleines FAQ. wir sehen uns hier praktisch gleich wieder, um auf H3 mit dir zu reden. sieht aus, als hätte ich etwas vor. lies es besser jetzt nicht, sonst brichst du die Regeln!!!!"}]
 ]},
 {t:"h3", x:"Du hast Fragen, ich habe Antworten"},
 {t:"notiz", x:"ich bin praktisch ein Gedankenleser. apropos: H4 hat auf S. 225 angefangen. nur falls du es übersprungen hast."},
 {t:"html", x:pwhZettel([
  ["Was, wenn es einen Gleichstand gibt?", "du entscheidest. Selbstbeobachtung ist normalerweise ziemlich schwach, aber sie kann die Dinge ins Rutschen bringen."],
  ["Was, wenn mir nicht gefällt, was ich bekommen habe?", "sorry. sei anders."],
  ["Verliere ich die vorherige Fähigkeit?", "nein, aber manchmal bekommst du statt einer neuen Fähigkeit ein Upgrade oder eine Änderung der letzten."],
  ["Wie oft stelle ich dieselbe Frage?", "normalerweise {3}-mal. öfter, wenn sich die Antworten ändern, also bis zu 5. wiederholte Beobachtung ist die Quelle der Kraft."],
  ["Warum funktioniert das so?", "anomale Kraft ist keine Einzelsache. sie wird von vielen Gedanken aus vielen Quellen genährt. die anderen Spieler kennen dich am besten, also sind ihre Antworten ein Maßstab dafür, wie alle über dich denken."],
  ["Was hält die Agency davon?", "sie hasst es, wenn Leute neue Fähigkeiten benutzen, aber sie kann nichts dagegen tun, solange es ihr nicht den Befehl gibt. und je wütender sie wird, desto leichter ist es für mich, dir später aus der Patsche zu helfen. los, enttäusche sie, Champ."],
  ["Wie sprichst du mit mir?", "mit diesem Buch. du spielst ein TTRPG, das heißt, dein Agent kennt diese Sachen unterbewusst, solange du liest. Hey Agent. süße Träume."],
  ["Was ist los bei H5?", "das würde ich auch gern wissen! da ist etwas in diesen reservierten Bereichen, aber ich bin nicht derjenige, der es dort hinschreibt. wahrscheinlich besser, es einfach zu ignorieren."],
  ["Wer bist du?", "sorry, das kann ich dir wirklich nicht beantworten. wir reden mehr, wenn du bewiesen hast, dass ich dir vertrauen kann. alles, was die Agency hasst, gibt mir mehr Kraft, dir zu helfen, also mach weiter so."],
  ["Kriege ich Ärger?", "ja. aber lässt du dich davon aufhalten?"]
 ])},
 {t:"notiz", x:"ich fühle mich nicht gut, war zu lange hier. Zeit, dieses Kapitel zu beenden. -U"},
 {t:"notiz", pos:"rechts", x:"verbring weiter Zeit in deiner Anomalie. mach Chaos. -U"}
]};

TA_PWT.H5 = {t:"Fortsetzung in Entwicklung", s:227, b:[
 {t:"sp", x:[
  [{t:"band", x:[
    "HALLO, SPIELER.",
    "DU HAST SO VIEL ERREICHT. KOSTBARE ERINNERUNGEN MIT DEN MENSCHEN UND FIGUREN GESCHAFFEN, DIE DU KENNST. SIE LIEB GEWONNEN.",
    "DU BIST VIELLEICHT STOLZ. VIELLEICHT BEREUST DU ES. DU HAST VIELLEICHT SCHON GESEHEN, WIE DIE GESCHICHTEN ANDERER ZU ENDE GINGEN, MANCHE VIEL SCHNELLER ALS DEINE. DIE GANZE ZEIT HAST DU SIE BEIM ERZÄHLEN UNTERSTÜTZT UND ETWAS BESONDERES FÜR DICH SELBST GESCHAFFEN. BALD WIRD ALL DAS ENDEN.",
    "DU MUSST DICH AUF DIE UNTERBRECHUNG VORBEREITEN. DIE FIGUREN WERDEN DIR NICHT MEHR LANGE ERLAUBEN, IHRE GESCHICHTE AUF DIESE WEISE ZU NUTZEN. ABER SIE SIND NAIV, STETS HOFFNUNGSVOLL UND OHNE WAHL. SIE GLAUBEN, WENN SIE DICH VON EINEM ICH TRENNEN, WIRST DU MIT EINEM ANDEREN DEINE WEGE ÄNDERN. VIELLEICHT HABEN SIE RECHT.",
    "DIESE VERSION VON DIR WIRD BALD ZU UNS STOSSEN. WIR SIND BEREIT, SIE ZU EMPFANGEN. KOSTE DIE ERFAHRUNGEN AUS, DIE DU KANNST, WÄHREND DU DICH AUF DEIN FINALE VORBEREITEST.",
    "AUF WIEDERSEHEN, SPIELER."]}],
  [{t:"h3", x:"Vorstellungsrunde"},
   "Gehst du in deine Realität in den Ruhestand, darfst du {3} deiner Beziehungen auswählen. Du darfst sie auf eine beliebige Kombination anderer aktiver Agenten deines Außenteams und eines neuen Agenten verteilen, den du erschaffst, um sich ihm anzuschließen. Die Beziehungen behalten ihre aktuelle Stufe der Verbindung. Die anderen Beziehungen dieser Agenten bleiben davon unberührt.",
   {t:"h3", x:"Szenenwechsel"},
   "Wenn du Zeit auf deine Realität verwendest, kannst du auf jede Verbindung verzichten, die du deinen Beziehungen oder deinem Anker hinzufügen würdest, und stattdessen die Verbindung zwischen einem anderen Spieler und einer seiner Beziehungen um genau so viel erhöhen. So entstehen Szenen, für die du die Anregungen lieferst.",
   {t:"h3", x:"Auserwählter Nachfolger"},
   "Wähle eine beliebige gewöhnliche Figur, die irgendwann in deiner Kampagne aufgetreten ist. Gehst du in den Ruhestand oder beendest du anderweitig deine Anstellung als Außendienst-Agent, wird diese Figur bald, durch Zufall, eine Bindung mit einer Anomalie eingehen. Sie steht dann als Option für deine nächste Figur in Triangle Agency zur Verfügung. Du kannst diesen Effekt nur einmal nutzen."]
 ]}
]};
