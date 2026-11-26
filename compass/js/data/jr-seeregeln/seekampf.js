BC_PART["jr-seeregeln/seekampf"] = {id: "seekampf", t: "Seekampf", sub: "Seegefecht · Wagemutige Aktion", s: 104, blocks: [
  {h: "Seegefecht", s: 104},
  {t: "prose", cap: true, p: [
    "Neben Schiffsherausforderungen und Schiffsgefahren gibt es natürlich auch Schiffsfeinde: Das sind Schiffe, die von Feinden gesteuert werden, denen ihr und eure Mannschaft euch mit Rammstößen und Breitseiten stellen müsst.",
    "Gegnerische Schiffe treffen im Seegefecht aufeinander und greifen sich gegenseitig an, eine Mannschaftsaktion nach der anderen. In vielem ähnelt das Seegefecht einer Schießerei: Beide Konflikte zeichnen sich durch abwechselnde Runden aus, in denen du sie angreifst und dann sie dich. Wie bei Schießereien übernimmt der, der zuerst angreift, die erste Runde, und wenn du im Zweifel bist, kannst du eine Münze werfen."
  ]},
  {h: "Du greifst an", s: 104},
  {t: "prose", img: {src: "jr/seeregeln-seeschlacht", pos: "50% 50%", side: "r"}, p: [
    "Wenn du und die Mannschaft euch entscheidet, ein feindliches Schiff anzugreifen, solltet ihr erklären, wie ihr es tun wollt – zum Beispiel indem ihr es rammt oder auf es schießt – und die passenden Mannschaftsaktionen unternehmen, wie bei einer Schiffsherausforderung.",
    "Die Schlüsselaktion könnte in den Händen des Kapitäns liegen, der den Feuerbefehl gibt, in denen des Stückmeisters, der ihn ausführt, oder in denen des Quartiermeisters, der die Matrosen koordiniert. Wie immer ist dein Abenteuer das, was du daraus machst.",
    "Gelingt die Schlüsselaktion, erleidet der Schiffsfeind einen Treffer, und sobald du den Schiffsfeind 3-mal getroffen hast, hast du ihn besiegt. Nachdem du und die Mannschaft einen Schiffsfeind besiegt habt, könnt ihr wählen, ob ihr ihn versenken oder entern wollt. Die gegnerische Mannschaft kann dann wählen, ob sie sich ergibt oder gegen eure Enterung kämpft."
  ]},
  {h: "Sie greifen an", s: 104},
  {t: "prose", p: [
    "Greift das gegnerische Schiff zuerst an, sollte der Schicksalsmeister erklären, wie es das tut, und festlegen, welche Schlüsselaktion ihr braucht, um dem Angriff auszuweichen.",
    "Als Faustregel gilt: Wenn der Feind auf euch schießt oder versucht, euer Schiff zu rammen, könnte die Schlüsselaktion an den Steuermann gehen, der rechtzeitig wenden muss, an den Navigator, der Richtungen angeben muss, oder an den Quartiermeister oder Kapitän, der den Matrosen den Befehl zum Ducken gibt. Auch hier sind alle weiteren passenden Ideen, die dir einfallen, erlaubt.",
    "Gelingt die Schlüsselaktion, weicht ihr dem Angriff aus. Andernfalls verlieren das Schiff und die Mannschaft (alle Abenteurer und Extras an Bord) einen Glückspunkt. Wie andere Fahrzeuge haben Schiffe 3 Glückspunkte und – sollten sie den vierten Glückspunkt verlieren – gehen auch sie außer Gefecht. Sobald euer Schiff außer Gefecht ist, kann der Feind wählen, ob er euch versenken oder entern will, und ihr könnt wählen, ob ihr euch ergebt oder kämpft."
  ]},
  {h: "Klar zum Entern!", s: 105},
  {t: "prose", p: [
    "Sobald der Feind besiegt ist, könnt ihr ihn entern, indem ihr Haken und Taue auf sein Schiff werft und Planken benutzt, damit du und deine Mannschaft sein Deck stürmen können. Diese Handlung ist eine Selbstverständlichkeit, aber von da an gelten alle üblichen Regeln für Herausforderungen, Gefahren und Feinde.",
    "Wenn ihr aber ein Schiff entern wollt, das ihr noch nicht besiegt habt, könnt ihr das mit einer Mannschaftsaktion anstelle eines Angriffs tun. Habt ihr Erfolg, wird das Seegefecht unterbrochen, und du und deine Freunde könnt den Kampf auf die gute alte Art beginnen: mit Pistolen und Schwertern. Scheitert ihr, könnte der Schicksalsmeister entscheiden, dass die Enterung misslungen ist oder so ungeschickt war, dass es schiefgeht. Das könnte bedeuten, dass eure Mannschaft es zwar an Bord des feindlichen Schiffes geschafft hat, ihr aber alle bei eurer nächsten Aktion einen Nachteil habt.",
    "Bedenke: Wenn ihr versucht, ein feindliches Schiff zu entern, könnte der Schicksalsmeister auch entscheiden, dass die gegnerische Mannschaft auf einen Kampf brennt und ihr nicht einmal eine Mannschaftsaktion braucht, um an Bord zu kommen."
  ]},
  {t: "script", h: "Szene 2 – Seegefecht: Du greifst an", s: 106, lines: [
    {n: "Schicksalsmeister", p: "Die feindliche Fregatte ist viel zu nah. Der Quartiermeister befiehlt euch, euch zu ergeben, oder sie eröffnen das Feuer."},
    {n: "Jiji", p: "„Ich kenne diese Hunde: Wenn wir uns ergeben, ist es um uns geschehen. Ich sage, wir greifen zuerst an und gehen kämpfend unter.“"},
    {r: "Die Abenteurer beraten sich und beschließen, das Seegefecht mit einem ersten Schuss zu beginnen. Jiji übernimmt die Schlüsselaktion, indem er den Befehl gibt. Er nimmt mit anderen Matrosen bei den Kanonen Position."},
    {n: "Laroche", p: "Als meine Unterstützungsaktion will ich dem feindlichen Schiff signalisieren, dass wir uns ergeben werden. So sollten sie ihre Deckung fallen lassen, und wir haben das Überraschungsmoment für den Angriff."},
    {r: "Würfelt eine REDEKUNST-Probe und erzielt 1 KRITISCHEN Erfolg."},
    {n: "Schicksalsmeister", p: "Der Quartiermeister auf dem feindlichen Schiff signalisiert, dass er verstanden hat, und die ganze Mannschaft wirkt erleichtert, einem Kampf zu entgehen. Mit einer Breitseite rechnen sie jetzt sicher nicht. Das verschafft Jiji einen Vorteil bei der Schlüsselaktion."},
    {n: "Jackie", p: "Ich nehme das Fernrohr und sehe mir das andere Schiff an. Meine Unterstützungsaktion besteht darin, Jiji Richtungen zu Entfernung und eventuellen Schwachstellen zuzurufen."},
    {r: "Würfelt eine BEOBACHTUNGS-Probe und erzielt nur 1 EINFACHEN Erfolg. Entscheidet sich für ein Risiko, verliert aber auch den."},
    {n: "Jackie", p: "„Zielt tiefer, sie sind viel näher als das!“"},
    {n: "Schicksalsmeister", p: "Deine falschen Richtungsangaben widersprechen dem, was Jiji sagte, verwirren die Kanoniere und verursachen einen Nachteil bei der Schlüsselaktion."},
    {n: "Guy", p: "Ich halte das Steuer und weiß, dass der Feind erwartet, dass wir näher kommen, damit er uns entern kann. Also nutze ich als meine Unterstützungsaktion das Manöver, um das Schiff zu stabilisieren und die Schusslinie für Jiji freizumachen."},
    {r: "Würfelt eine FAHREN-Probe, erzielt aber nicht einmal einen EINFACHEN Erfolg."},
    {n: "Schicksalsmeister", p: "Die Wende ist zu scharf, und das Schiff rollt, was das Zielen noch schwerer macht. Jiji muss den Befehl jetzt mit einem Vorteil und 2 Nachteilen geben. Eine heikle Sache."},
    {n: "Jiji", p: "Nun, auch wenn meine Kameraden mir das Leben schwer machen, werde ich die Lunte entzünden, sobald wir nah genug am feindlichen Schiff sind, und den Befehl geben: „Feuer!“"},
    {r: "Würfelt eine SCHIESSEN-Probe und erzielt nur 1 KRITISCHEN Erfolg. Entscheidet sich für ein Risiko, kann aber nichts Besseres erreichen."},
    {n: "Schicksalsmeister", p: "Weder Jackies schlechte Richtungsangaben noch Guys ungeschickte Wende lassen sich leicht ausgleichen, und die meisten eurer Kanonenkugeln landen im Wasser, während die wenigen, die die Fregatte treffen, kaum eine Delle im Rumpf hinterlassen. Eure Mannschaftsaktion war ein Fehlschlag, und als wäre das nicht genug, ist der Feind jetzt bereit zurückzuschlagen."},
    {n: "Jiji", p: "„Können wir sie bitte ruhig halten, wenn ich schieße?!“"}
  ]},
  {t: "script", h: "Szene 3 – Seegefecht: Sie greifen an", s: 108, lines: [
    {n: "Schicksalsmeister", p: "Der Quartiermeister brüllt „Feuer!“, und eine mächtige Breitseite zielt auf euer armes Schiff. Jetzt müsst ihr euch verteidigen, indem ihr eine Mannschaftsaktion versucht. Eure Schlüsselaktion ist eine ANFÜHREN-Probe, um die Mannschaft zu überzeugen, ihre Posten zu halten. Nach dieser kleinen Vorstellung schielen die meisten eurer Matrosen hoffnungsvoll auf die weiße Flagge."},
    {r: "Die Abenteurer beraten sich und beschließen, die Schlüsselaktion Pater Laroche zu überlassen, er weiß, wie man zu seiner Herde spricht."},
    {n: "Jiji", p: "Ich halte Ausschau, und als meine Unterstützungsaktion warte ich auf den richtigen Moment, die Mannschaft zum Ducken zu warnen, damit wir nicht ein paar Köpfe verlieren."},
    {r: "Würfelt eine WACHSAM-Probe und erzielt den KRITISCHEN Erfolg, den er brauchte."},
    {n: "Jiji", p: "„Duckt euch! Breitseite im Anflug!“"},
    {n: "Guy", p: "Ich sage, das Beste, was wir tun können, ist von hier zu verschwinden. Als meine Unterstützungsaktion drehe ich das Steuer, um zu versuchen, dass die Breitseite unser Heck trifft, eine Art Schadensbegrenzung."},
    {r: "Würfelt eine FAHREN-Probe und erzielt 1 EXTREMEN Erfolg."},
    {n: "Jackie", p: "Meine Unterstützungsaktion wird sein, die Segel zu setzen, damit das Schiff an Fahrt gewinnt. Da die Mannschaft beschäftigt ist, laufe ich zum Großmast, packe ein Tau und schneide es mit meinem Messer durch, sodass die Segel mit mir als Gegengewicht herabfallen."},
    {r: "Würfelt eine STUNT-Probe und erzielt 1 KRITISCHEN Erfolg."},
    {n: "Schicksalsmeister", p: "Jackie entrollt die Segel und schießt am Tau nach oben. Als sie die obere Rah erreicht, können die Segel mehr Wind fangen, und das Schiff nimmt Fahrt auf. Guys Wende war erfolgreich und Jijis Befehle präzise, also bekommt Laroche 3 Vorteile für seine Schlüsselaktion."},
    {n: "Laroche", p: "Als die Breitseite das Schiff trifft, wende ich mich an die Mannschaft: „Sie glauben, sie könnten uns einschüchtern! Sie haben keine Ahnung, mit wem sie es zu tun haben. Jetzt alle Mann: Haltet eure Posten, zeigen wir dem Feind, dass wir nicht der Typ sind, der sich ergibt!“"},
    {r: "Würfelt eine ANFÜHREN-Probe und erzielt 2 KRITISCHE Erfolge."},
    {n: "Schicksalsmeister", p: "Eure Schlüsselaktion gelingt, und als die feindliche Breitseite euer Schiff trifft und Holzsplitter und Salzwasser um euch herum regnen, geben Pater Laroches Worte der Mannschaft Mut, die vor Freude jubelt, nachdem sie das Unheil abgewendet hat. Sie sind bereit, weiterzukämpfen."}
  ]},
  {h: "Wagemutige Aktion", s: 110},
  {t: "prose", p: [
    "Da rede ich und rede über Unterstützungsaktionen und Schlüsselaktionen, aber ich merke, dass du seit dem ersten Mal, als ich sie erwähnt habe, darauf brennst, von Wagemutigen Aktionen zu hören. Offensichtlich interessierst du dich weit mehr fürs Abenteuern als fürs Überleben, und genau deshalb respektiere ich dich!",
    "Wenn du und die Mannschaft die Rollen für eine Mannschaftsaktion verteilt, müsst ihr normalerweise entscheiden, wer welche Schlüsselaktion übernimmt, aber ihr könnt auch beschließen, eine Wagemutige Aktion zu versuchen. Diese Alternative zur Schlüsselaktion erhöht den Einsatz um ein Vielfaches.",
    "Ein gutes Beispiel für eine Wagemutige Aktion wäre, wenn ein Matrose den Anker wirft, während das Schiff noch mit voller Fahrt segelt, um auf der Stelle zu wenden und den Feind mit einer Breitseite direkt in den Bug zu überraschen. Ein weiteres wäre, wenn ein Navigator das Schiff mit vollen Segeln geradewegs auf einen am Horizont aufziehenden Sturm zusteuert, um einem feindlichen Angriff zu entkommen.",
    "Wie bei Schlüsselaktionen ist nur ein Abenteurer der Mannschaft für die Wagemutige Aktion verantwortlich. Auch die Wagemutige Aktion muss als Erste angesagt und als Letzte ausgeführt werden, wobei Würfel für Vorteile und Nachteile aus den Unterstützungsaktionen addiert oder abgezogen werden.",
    "Der Unterschied ist, dass eine Wagemutige Aktion immer 3 kritische Erfolge erfordert, um wie geplant durchgeführt zu werden, und wenn sie gelingt, löst sie jede Situation, der ihr gerade gegenübersteht. Außerdem können Abenteurer, die eine Wagemutige Aktion unternehmen, sich nicht auf ihre Glücksmünze verlassen, um automatisch einen Erfolg zu bekommen. Auch das Glück hat seine Grenzen.",
    "Eine erfolgreiche Wagemutige Aktion erlaubt euch sofort, jede Art von Verfolgungsjagd zu gewinnen, jedem Sturm zu entkommen und jedes feindliche Schiff mit einem Streich zu besiegen.",
    "Andererseits führt das Scheitern einer Wagemutigen Aktion dazu, dass sowohl das Schiff als auch die Mannschaft (alle Abenteurer und Extras an Bord) einen Glückspunkt verlieren. Das heißt: Versucht eure Mannschaft eine Wagemutige Aktion, um einer Schiffsgefahr zu entkommen, und ihr scheitert, verlieren Schiff und Mannschaft 2 Glückspunkte: einen für die Gefahr, einen für das Scheitern. Wer nichts wagt, der nicht gewinnt!",
    "Bedenke, dass Abenteurer, die bei einer Wagemutigen Aktion Erfolg haben, mit ziemlicher Sicherheit ein Gutes Gefühl bekommen und je nach Umständen sogar eine Erfahrung auf ihren Bogen schreiben können. Ebenso bekommen Abenteurer, die bei einer Wagemutigen Aktion scheitern, ein Schlechtes Gefühl und, wenn ihr Fehler zur Niederlage ihres Schiffes führt, wahrscheinlich auch eine neue Narbe."
  ]},
  {t: "script", h: "Szene 4 – Wagemutige Aktion", s: 112, lines: [
    {n: "Schicksalsmeister", p: "Nachdem ihr der feindlichen Breitseite ausgewichen seid, liegt es an euch zu entscheiden, ob ihr angreift oder flieht."},
    {n: "Jackie", p: "„Einen Kampf halten wir nicht lange durch, wir brauchen einen Plan!“"},
    {r: "Die Abenteurer beraten sich und beschließen, dass Jackie eine Wagemutige Aktion versuchen muss, um den Feind mit einem Streich zu besiegen."},
    {n: "Jackie", p: "Von meiner Position auf der Rah renne ich zum Ausguck im Krähennest. Dort liegt immer ein geladenes Gewehr, für alle Fälle. Ich schnappe es mir und gehe in Stellung. „Haltet sie ruhig, ich habe eine Idee!“"},
    {n: "Guy", p: "Ich stoppe die Wende und halte das Steuer ruhig. Mit meiner Unterstützungsaktion will ich versuchen, das Schiff still zu halten."},
    {r: "Würfelt eine FAHREN-Probe und erzielt 1 KRITISCHEN Erfolg."},
    {n: "Jiji", p: "„Halt! Nicht schießen!“ Ich nutze meine Unterstützungsaktion, um das Feuer einzustellen. Ein verirrter Kanonenschuss könnte das Boot ins Schwanken bringen und Jackies Plan zunichtemachen."},
    {r: "Würfelt eine ANFÜHREN-Probe und erzielt 3 EINFACHE Erfolge, die sich zu 1 KRITISCHEN Erfolg summieren."},
    {n: "Laroche", p: "Ich nehme ein paar Leute aus der Mannschaft und führe sie als meine Unterstützungsaktion zu den Masten, damit wir die Segel einholen und das Schiff abbremsen können. Wir sind nur wenige, aber wir müssen schnell handeln."},
    {r: "Würfelt eine ZÄH-Probe und erzielt 2 EINFACHE Erfolge. Riskiert und verliert einen davon."},
    {n: "Schicksalsmeister", p: "Die Mannschaft wendet sich an Jiji. Jemand bittet um Erlaubnis, zuerst zu schießen, bevor der Feind es tut, aber sie gehorchen dem Befehl. Währenddessen schafft es Guy, das Schiff abzubremsen und ruhig zu halten. Beide Aktionen verschaffen Jackie einen Vorteil. Aber Pater Laroche und die wenigen Leute bei ihm schaffen es nicht, die Segel rechtzeitig einzuholen, sodass sie nicht viel helfen. Jackie, jetzt liegt es an dir. Führe deine Wagemutige Aktion aus, Auf Gedeih und Verderb."},
    {n: "Jackie", p: "Ich lege das Gewehr an und ziele. Als meine Wagemutige Aktion will ich auf das feindliche Steuer schießen. Wenn mir das gelingt, kommt ihr Schiff vom Kurs ab, und alle werden von dem Ruck umgeworfen. Dann müssen wir nur noch direkt auf ihren Bug feuern, um sie zu erledigen."},
    {r: "Würfelt eine SCHIESSEN-Probe mit 2 Vorteilen und erzielt 1 EXTREMEN Erfolg."},
    {n: "Schicksalsmeister", p: "Du hältst eine Sekunde den Atem an und gibst deinen Schuss ab. Die Kugel pfeift durch den Wind und trifft den feindlichen Steuermann voll. Als er stürzt, reißt er das Steuer zur Seite, und es beginnt wild zu kreiseln. Die feindliche Mannschaft wird zur Seite geschleudert, schlägt auf Deck und Reling auf, und niemand erreicht das Steuer rechtzeitig. In wenigen Sekunden zeigt der Bug des feindlichen Schiffes direkt auf euch. Ein leichtes Ziel für einen verheerenden Schlag."},
    {n: "Jackie", p: "„FEUER!“"},
    {n: "Schicksalsmeister", p: "Eure Breitseite trifft das feindliche Schiff hart, zerstört einen Teil des Bugs und bringt sogar den Großmast zu Fall. Nun liegt es an euch zu entscheiden, ob ihr davonsegeln, versenken oder entern wollt. Was ihr auch wählt, ihr habt dieses Seegefecht gewonnen."}
  ]}
]};
