/* The Spire – Klasse Knight (aus quellen/spire/de/cmf, erzeugt mit plan/spire/build_klassen.py) */
(window.SP_KLASSE = window.SP_KLASSE || []).push({
 "id": "knight",
 "p": 49,
 "zitat": "„Ich schwöre bei Unserer Herrin, dieser Kater könnte einen Himmelswal zu Fall bringen. Haben wir gewonnen?“",
 "intro": [
  "Du bist Mitglied eines uralten Ritterordens, dem das Recht übertragen wurde, die nördlichen Flussdocks der Spire zu überwachen. Im Lauf der Jahrhunderte ist dein Orden zersplittert und immer korrupter geworden, und nun bist du kaum mehr als ein schwer gepanzerter Gangster mit einer Vorliebe für organisierte Kampfturniere."
 ],
 "kern": {
  "wid": "Blut +1, Silber +2, Ruf +1",
  "auff": "Gib dich rücksichtslosem Exzess hin.",
  "fert": "Kämpfen, Überzeugen",
  "dom": "Niedere Gesellschaft, Verbrechen"
 },
 "bind": [
  "Du hast eine Bindung auf Einzelebene zu deinem Knappen – einem jungen Dunkelelfen, der dir dient, um eines Tages selbst Ritter zu werden. Nenne ihn und sag, ob er der ganzen Sache gegenüber idealistisch oder zynisch ist.",
  "Du hast eine Bindung zu einem anderen der SC – ihr beide seid früher zusammen trinken gegangen und tut es gelegentlich noch. Beschreibe das Wildeste, was ihr beide in einer eurer legendären Nächte angestellt habt."
 ],
 "ausr": [
  {
   "k": "pkt",
   "x": "Ritter-Viertelplatte (Rüstung 3, Schwer)"
  },
  {
   "k": "lbl",
   "x": "Und entweder:"
  },
  {
   "k": "pkt",
   "x": "Zweihänder (W8, Ermüdend)"
  },
  {
   "k": "lbl",
   "x": "Oder:"
  },
  {
   "k": "pkt",
   "x": "Schwert (W6) und Grackler-Pistole (W6, Brutal, Fernkampf, Einweg)"
  },
  {
   "k": "lbl",
   "x": "Oder:"
  },
  {
   "k": "pkt",
   "x": "Ritterlanze (W6, Durchschlagend, Überraschend)"
  }
 ],
 "kfae": [
  {
   "t": "KNEIPENTOUR",
   "p": 49,
   "fl": "Du verfügst über enzyklopädisches Wissen darüber, wo man sich betrinken kann.",
   "x": [
    "Einmal pro Spiel nennst du eine nahe gelegene Bar, Kneipe oder Herberge, in der du den Wirt kennst (ob er dich mag oder nicht, entscheidet die Spielleitung)."
   ]
  },
  {
   "t": "STREIT ANFANGEN",
   "p": 49,
   "fl": "Du hast manchen Abend damit verbracht, die anderen Gäste auf der Suche nach einer ordentlichen Schlägerei abzuschätzen.",
   "x": [
    "Einmal pro Situation fragst du die Spielleitung, wer in der Umgebung die beste Person ist, um einen Streit anzufangen, unter einer der folgenden Bedingungen: 1) du willst gewinnen 2) du willst einen guten Eindruck machen 3) du willst eine Ablenkung verursachen."
   ]
  },
  {
   "t": "GESETZ DER DOCKS",
   "p": 49,
   "fl": "Du trägst eine mächtige Waffe.",
   "x": [
    "Als Knight darfst du eine große Klingenwaffe (oder eine Lanze) tragen, ohne Ärger mit der Stadtwache zu bekommen. Sie zu benutzen ist eine andere Sache."
   ]
  }
 ],
 "fort": {
  "niedrig": [
   {
    "t": "ZECHEN",
    "p": 50,
    "fl": "Betrunken findest du die besten Freunde.",
    "x": [
     "+1 Blut. Wenn du dich mit jemandem betrinkst, erhältst du bis zum nächsten Tag eine Bindung auf Einzelebene zu ihm."
    ]
   },
   {
    "t": "TURNIERREITER",
    "p": 50,
    "fl": "Du bist geschickt darin, dich Hals über Kopf in gefährliche Situationen zu stürzen.",
    "x": [
     "Erhalte die Fertigkeit Verfolgen. Du bist erfahren in der Kunst des Kampfes bei hoher Geschwindigkeit; wenn du rücksichtslos angreifst, haben deine Angriffe das Merkmal Brutal."
    ]
   },
   {
    "t": "GROSSSPURIGKEIT",
    "p": 50,
    "fl": "Du bist ein vollendeter Lügner, besonders wenn es darum geht, deine eigenen Fähigkeiten zu übertreiben.",
    "x": [
     "Erhalte die Fertigkeit Täuschen. Einmal pro Sitzung überzeugst du einen NSC automatisch davon, dass du etwas vollbringen kannst (ob du es tatsächlich kannst, ist unerheblich)."
    ]
   },
   {
    "t": "RITTER-ADMIRAL",
    "p": 50,
    "fl": "Du hast einen hohen Rang erreicht und befehligst damit einen Teil der Flotte.",
    "x": [
     "+2 Ruf. Dein Orden verleiht dir ein mächtiges Reittier – ein Ruderboot. Gib ihm einen Namen. Wähle außerdem eins: es ist schnell; es sieht gut aus; es hat ein Drehgeschütz am Bug (W6, Fernkampf, Nachladen); es leckt nicht viel. Bietet sechs Sitzplätze (alle zum Rudern)."
    ]
   },
   {
    "t": "BOLLWERK",
    "p": 50,
    "fl": "Du und deine Rüstung teilt eine besondere Bindung; sie sorgt für dich, du sorgst für sie.",
    "x": [
     "Einmal pro Sitzung löschst du allen auf deiner Rüstung markierten Stress."
    ]
   },
   {
    "t": "RITTER-BESCHÜTZER",
    "p": 50,
    "fl": "Du bist geschickt darin, dich in Schwierigkeiten zu stürzen, um deine Freunde zu retten.",
    "x": [
     "Einmal pro Situation nimmst du, wenn ein Verbündeter in der Nähe durch einen Feindangriff Blutstress nehmen würde, ihn stattdessen selbst."
    ]
   },
   {
    "t": "DIE MENGE TOBT",
    "p": 50,
    "fl": "Du bist es gewohnt, mit der Unterstützung – oder dem Zorn – der Menge im Rücken zu kämpfen.",
    "x": [
     "Wenn dir eine Menge zusieht, haben deine Angriffe das Merkmal Brutal. Außerdem frischst du auf, wenn du einen Kampf vor einer Menge gewinnst."
    ]
   }
  ],
  "mittel": [
   {
    "t": "RÜSTUNGSKENNER",
    "p": 50,
    "fl": "Du weißt, dass deine Rüstung nicht nur zur Schau da ist.",
    "x": [
     "Wenn du Rüstung trägst, erhöhst du ihren Wert um 1 Punkt, bis du sie ablegst. Da du auch genau weißt, wo man Leute trifft, die sich zu schützen versuchen, hat jede Waffe, die du trägst, das Merkmal Durchschlagend."
    ]
   },
   {
    "t": "ERZÄHLER",
    "p": 50,
    "fl": "Du weißt genau, wann eine Runde fällig ist.",
    "x": [
     "Wie ZECHEN, aber es wirkt als Bindung auf Straßenebene, weil du auch mit ihren Kumpels trinkst."
    ]
   },
   {
    "t": "KOMM NUR HER",
    "p": 50,
    "fl": "Du bist es gewohnt, in Kämpfen in der Unterzahl zu sein.",
    "x": [
     "Jede Waffe, die du trägst (einschließlich deiner bloßen Hände) und die nicht das Merkmal Fernkampf besitzt, erhält das Merkmal Streuung W3."
    ]
   },
   {
    "t": "SCHMUTZIGES KÄMPFEN",
    "p": 50,
    "fl": "Du hast eine große Auswahl an schmutzigen Tricks.",
    "x": [
     "Einmal pro Situation senkst du, wenn du einem Feind Schaden zufügst, seine Schwierigkeit auf 0, bis er sich von dir entfernt und wieder zu Atem kommt."
    ]
   },
   {
    "t": "WEISST DU, WER ICH BIN?",
    "p": 50,
    "fl": "Du besitzt einen kugelsicheren Ruf.",
    "x": [
     "Erhalte +1 Ruf. Einmal pro Situation verteilst du, wenn du Stress auf einen anderen Widerstand als Ruf nehmen würdest, ihn auf Ruf."
    ]
   },
   {
    "t": "RICHTIGER ORT, FALSCHE ZEIT",
    "p": 50,
    "fl": "Du hast eine fast übernatürliche Fähigkeit, in Kämpfe zu geraten, die dein Leben interessanter machen, auch wenn sie es zugleich um einiges kürzer machen.",
    "x": [
     "Füge deiner Fähigkeit STREIT ANFANGEN die folgende Bedingung hinzu: 4) du willst dein aktuelles Ziel voranbringen. Du und die Gruppe werdet aus dem Kampf ganz sicher eine Spur oder einen Ansatz gewinnen, aber du musst ihn erst gewinnen (oder vielleicht nur heil herauskommen)."
    ]
   },
   {
    "t": "GESETZ DES LANDES",
    "p": 50,
    "fl": "Du bist, technisch gesehen, ein Gesetzesvertreter.",
    "x": [
     "+1 Silber. Erhalte Zugang zur Domäne Ordnung. Du bist von der Herzogin höchstpersönlich als Beschützer der Docks vereidigt; wenn du versuchst, eine Situation zu deeskalieren, tust du das mit Meisterschaft. Du kannst auch Leute verhaften, wenn dir danach ist."
    ]
   }
  ],
  "hoch": [
   {
    "t": "FESTUNGSPLATTE",
    "p": 51,
    "tag": "Queste",
    "fl": "Du beginnst mit dem Schmieden der berühmten Festungsplatte.",
    "x": [
     "+1 Ruf. Wenn du die Queste annimmst, wirst du von deinem Vorgesetzten im Orden (oder von der Herzogin) beauftragt, bestimmte Heldentaten des Mutes und der Ritterlichkeit zu vollbringen (oder eine Ladung Diamanten zu stehlen, was eben an dem Tag getan werden muss); für jede abgeschlossene kleine Queste wähle eine der folgenden Verbesserungen:",
     {
      "t": "ul",
      "x": [
       "Entferne das Merkmal Schwer von deiner Rüstung",
       "Füge deiner Rüstung das Merkmal Unerbittlich hinzu",
       "Erhöhe den Wert deiner Rüstung um 2",
       "Wenn du Blut-Fallout erhältst, während du deine Rüstung trägst, verursachst du bei allen Feinden, die nahe bei dir stehen, Stress: W3 bei leichtem Blut-Fallout, W6 bei mittlerem und W8 bei schwerem"
      ]
     },
     "Du kannst nicht dieselbe Verbesserung zweimal wählen. Am Ende deiner letzten Queste hast du deine Rüstung zu einer Garnitur feinster Vollplatte aufgewertet, verziert (von dir oder anderen) mit Inschriften und Bildern deiner Ruhmestaten, von denen manche sogar wahr sein mögen."
    ]
   },
   {
    "t": "DAS SCHWERT AUS DEM STEIN ZIEHEN",
    "p": 51,
    "tag": "Queste",
    "fl": "Du reist auf der Suche nach einem legendären Schwert.",
    "x": [
     "Wenn du diese Queste annimmst, erhältst du die Fertigkeit Widerstehen und die Domäne Okkultes, da du rituell mit Symbolen ritterlichen Schutzes gebrandmarkt oder tätowiert wirst. Du musst ins Zentrum der Spire reisen, das Schwert des St. Beneferas finden und es aus den Dielen des Steins (einer Kneipe) ziehen, in die er es vor hunderten von Jahren gestoßen hat.",
     "Wenn du diese Queste abschließt, erhältst du ein magisches Schwert (W6, Brutal); da es magisch ist, kannst du es einsetzen, um ätherische Wesen oder solche anzugreifen, die gegen normale Waffen immun sind. Wähle außerdem zwei der folgenden Verbesserungen für das Schwert:",
     {
      "t": "ul",
      "x": [
       "Verursache W8 Stress",
       "Erhalte das Merkmal Fernkampf",
       "Erhalte das Merkmal Betäubend",
       "Erhalte das Merkmal Defensiv",
       "Erhalte das Merkmal Blutgebunden",
       "Erhalte das Merkmal Verheerend"
      ]
     },
     "Und eine der folgenden „Verbesserungen“:",
     {
      "t": "ul",
      "x": [
       "Dämonen und Geister werden von den mächtigen Energien des Schwerts angezogen",
       "Das Schwert flüstert unheimliche Wahrheiten",
       "Das Schwert leuchtet blau in Gegenwart von ... etwas, du bist nicht sicher, scheint aber wichtig zu sein",
       "Du weißt in deinem Herzen, dass du der wahre Monarch der Spire bist"
      ]
     }
    ]
   },
   {
    "t": "DEN DRACHEN ERSCHLAGEN",
    "p": 51,
    "tag": "Queste",
    "fl": "Du versuchst, den Tod selbst zu erschlagen. Du wirst mit dem legendären Geist des St. Beneferas gesalbt, einem unmöglich starken Schnaps, der von einem blinden Irren im Dienst der Herzogin destilliert wird.",
    "x": [
     "In Verbindung mit den richtigen Andachtsriten veränderst du dich – deine Berührung heilt die Kranken und schließt Wunden. Einmal pro Situation kannst du W3 Verstands- oder Blutstress bei jedem anderen Charakter als dir selbst entfernen.",
     "Du nimmst eine Queste an, ins Herz der Spire vorzudringen, die albtraumhafte Drachen-Kneipe zu finden und den abscheulichen Wächter zu erschlagen, der dort haust. Nach Abschluss hat das Verderben, das der Drache verbreitet, keine Macht mehr über dich. Krankheit und Gift wirken nicht mehr auf dich. Deine bloße Gegenwart bewirkt sogar, dass Seuchen abklingen und Kranke beschleunigt genesen. Zu Beginn jeder Situation entfernst du 1 Blutstress, und: du kannst nicht mehr sterben."
    ]
   },
   {
    "t": "NACH DEM GRAL SUCHEN",
    "p": 51,
    "tag": "Queste",
    "fl": "Die Erinnerung an St. Beneferas ruft dich, und du machst dich auf, sein Nachfolger zu werden.",
    "x": [
     "Du nimmst eine Queste an, den Gral zu finden, eine legendäre Kneipe, die unter dem Schlick der Norddocks liegen soll. Dort wirst du St. Beneferas, den Schutzpatron der Knights, finden und einen Drink mit ihm teilen.",
     "Wenn du die Queste annimmst, wirst du von Damnou, der Dreifaltigkeit der Dunkelelfengöttinnen, Gesehen, und sie/es wird dich beschützen. Einmal pro Sitzung kannst du, wenn du Fallout erleidest, ihn ignorieren.",
     "Nach Abschluss überträgt dir St. Beneferas die Pflicht, die Knights zu führen, und gibt seine Aufgaben endlich weiter. Da er ein heruntergekommener Trunkenbold war, auf ewig unter den Wassern des Flusses gefangen, haben die Norddocks und die Knights dort begonnen, ihn zu verkörpern – entartet und beinahe nutzlos. Nun, da du den Helm des St. Beneferas annimmst, werden die Docks sich verändern, um stattdessen dir zu ähneln – zum Guten wie zum Schlechten. (Dies zählt nicht für sich als Veränderung auf hoher Stufe, sodass du es nicht nutzen kannst, um einen weiteren hohen Fortschritt zu verdienen.)",
     "Erhalte die Stadtbindung NORDDOCKS."
    ]
   }
  ]
 },
 "boxen": [
  {
   "h": "RITTERORDEN",
   "b": [
    "Als Knight bist du einem der folgenden Orden verpflichtet, von denen zufälligerweise jeder mindestens eine nach ihm benannte Kneipe besitzt: *Der Suchende Hahn, Der Ertrunkene Matrose, Die Durstige Jungfrau, Wolf & Hund, Die Krakenglocke, Der Fiendhaut-Foliant.* (Oder: Erfinde deinen eigenen Orden.) Von dir wird erwartet, dass du im Namen deines Ordens Queste ausführst (leichte Erpressung, Gaunerei, Leibwächterdienste), und eine Weigerung kann zu deinem Ausschluss und dem Verlust deines Rechts führen, eine große Klingenwaffe zu tragen."
   ],
   "nach": "mittel"
  }
 ],
 "hinweis": {},
 "fortIntro": {
  "hoch": "Alle hohen Fähigkeiten des Knight drehen sich um eine oder mehrere Queste. Die genaue Natur der Queste sollten Spielleitung und Spieler des Knight untereinander ausarbeiten, aber sie sollten a) schwierig und b) erreichbar sein. Die Queste spiegeln die Natur der Ritter wider, die du in deinem Spiel etabliert hast; sie mögen sich nach Kräften ritterlich geben oder völlig eigennützig sein."
 },
 "t": "Knight"
});
