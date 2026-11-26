/* Playwall › N (S. 244–246) */
var TA_PWT = window.TA_PWT || (window.TA_PWT = {});

/* N3: Eigenschaften und Aufgaben als Kartenraster (Karten: „**Name:** Text“) */
function pwnRaster(L, cls){
  return '<div class="pwn-raster pwn-' + cls + '">' + L.map(function(x){
    var m = /^\*\*(.+?):\*\*\s*(.*)$/.exec(x);
    return '<section><b class="pwn-n">' + tx(m[1]) + '</b><p>' + tx(m[2]) + '</p></section>';
  }).join("") + '</div>';
}

TA_PWT.N1 = {t:"Unmissverständlich", s:244, b:[
 "**Du darfst diesen Weg nicht weitergehen, Agent.**",
 "Du hast mehrere Verwarnungen erhalten, und dieses Verhalten wird nicht länger geduldet. Du erhältst sofort die folgenden Effekte:",
 {t:"sp", x:[
  [{t:"h3", x:"Unmissverständlich"},
   "Wenn du das nächste Mal Probezeit erhältst, wird deine Beziehung mit der höchsten Verbindung aus dem Spiel Triangle Agency entfernt. Sie existiert nicht mehr, und gewöhnliche Menschen erinnern sich nicht an sie. Hast du mehrere Beziehungen mit der höchsten Verbindung, trifft der Effekt diejenige, zu der du die größte emotionale Bindung hast. Dieser Effekt tritt nur einmal ein."],
  [{t:"h3", x:"Verbesserungsplan"},
   "Erhältst du jemals {30} oder mehr Verweise in einem einzigen Einsatz, erhältst du erneut Unmissverständlich.",
   "Wir hoffen, dass nichts weiter gesagt werden muss."]
 ]},
 {t:"notiz", x:"oh nett, ein einfacher. warum interessiert dich das? sie sind nur ein beliebiger NPC. du kannst im nächsten Einsatz oder so einen neuen Freund finden. jetzt ist nicht die Zeit, einen Rückzieher zu machen – nicht, wenn du gerade zum guten Teil kommst. sieh, was du TUN kannst:"},
 {t:"h3", x:"Der zehnseitige Würfel"},
 {t:"notiz", pos:"rechts", x:"nein, für den hier gibt es auch keinen schicken Namen. benenn ihn nach deinem toten Freund, wenn du willst."},
 {t:"sp", x:[
  ["Verwende diesen Würfel anstelle von 6W4, wenn du Anomalie-Fähigkeiten einsetzt. Du darfst ihn mit dem W6 kombinieren. Du darfst vor jedem Wurf wählen, ob du diesen Würfel verwendest oder nicht.",
   "Dieser Würfel erzeugt eine Anzahl {3}en und Chaos entsprechend der gewürfelten Zahl. Die Verwendung dieses Würfels erlaubt außerdem die Aktivierung von UNL3ASH.",
   "Eine {3} auf einem W10 ist ein sofortiger Fehlschlag, unabhängig von allen anderen kombiniert gewürfelten Würfeln – und du kannst bei Verwendung des W10 keine Triszendenz erreichen.",
   "Du darfst 1 QS oder {3} Verweise ausgeben, um diesen Würfel um 1 nach oben oder unten zu verändern. Burnout verringert die Anzahl der {3}en und erhöht das Chaos wie üblich."],
  [{t:"tab", x:[
    ["1", "Eine {3}, 1 Chaos"],
    ["2", "Zwei {3}en, 2 Chaos"],
    ["{3}", "Fehlschlag (unabhängig von allen anderen Umständen, Würfen oder Burnout). {3} Chaos"],
    ["4", "Vier {3}en, 4 Chaos"],
    ["5", "Fünf {3}en, 5 Chaos"],
    ["6", "Sechs {3}en, 6 Chaos"],
    ["7", "Sieben {3}en, 7 Chaos (Ist dies der einzige gewürfelte Würfel, aktiviert er UNL3ASH.)"],
    ["8", "Acht {3}en, 8 Chaos"],
    ["9", "Neun {3}en, 9 Chaos"],
    ["10", "Zehn {3}en, 10 Chaos"]
   ]}]
 ]},
 {t:"notiz", x:"du brauchst diese Beziehung nicht, und du brauchst die Agency nicht. zeig mir, dass du noch dabei bist, dann melde ich mich bald wieder. mit richtigen Erklärungen.", pos:"rechts"}
]};

TA_PWT.N2 = {t:"Passt nicht zur Unternehmenskultur", s:245, b:[
 {t:"sp", x:[
  [
   {t:"band", x:["DU ENTSCHEIDEST DICH ZU GEHEN. BIST DU DIESER VERSION DEINER SELBST ÜBERDRÜSSIG? ODER MAGST DU SIE ZU SEHR? ODER WÄHLST DU AM ENDE, VOR EINER SCHWEREN ENTSCHEIDUNG, NICHT ZU WÄHLEN?", "SO ODER SO: DU HAST DIE SICHERHEIT GEWÄHLT. DU VERLÄSST DIE GEFÄHRLICHSTE POSITION: DIE DES PROTAGONISTEN.", "SUCHE DIR DEN ABSCHLUSS, DEN DU BEKOMMEN KANNST."]},
   "Stelle den anderen Spielern die folgenden Fragen und höre dir ihre Antworten an:",
   {t:"liste", x:["Warum habe ich nicht in die Agency gepasst?", "Was hoffst du, dass ich allein erreichen werde?", "Was an mir wirst du am lebhaftesten in Erinnerung behalten?", "Welche unerledigten Angelegenheiten lasse ich zurück?"]},
   "Beantworte dann selbst die folgenden Fragen:",
   {t:"liste", x:["Welchen Beruf, Lebensstil oder welche Zukunft wirst du verfolgen?", "Was wirst du an der Agency vermissen?", "Was wird dich deiner Erwartung nach am meisten dazu verleiten, deine Fähigkeiten einzusetzen?"]},
   {t:"band", x:["DEINE ENTSCHEIDUNG BLEIBT NICHT OHNE FOLGEN UND VERLUST. DU KANNST IHRE REGELN NICHT ABLEHNEN, OHNE AUCH IHRE GABEN ABZULEHNEN. ABER DU KANNST ALS NEBENFIGUR BLEIBEN UND DEN ANDEREN AUF KLEINE WEISE HELFEN."]},
   {t:"h3", x:"Selbstständig"},
   "Du bist kein Angestellter der Triangle Agency mehr. Du gibst sämtliches Firmeneigentum ab, das du besitzt, darunter Anforderungen, Ausweise und alle anderen Ausrüstungsgegenstände, die du durch deine Anstellung erhalten hast.",
   "Du kannst keine Belobigungen oder Verweise ausgeben und nicht viele Würfe tätigen. Du kannst nicht Ziel der Effekte Unmissverständlich, Empfehlungsbonus, Verschlingen oder Drehbuchschutz werden.",
   {t:"h3", x:"Offener Terminkalender"},
   "Fügt ein Agent dich mit Neue Freunde als Beziehung hinzu, beginnst du bei 6 Verbindung. Dabei darf er den folgenden besonderen Verbindungsbonus für dich wählen:",
   "**Resonant:** Wenn du diesen Bonus vergibst, wähle eine Anomalie-Fähigkeit, auf die diese Person Zugriff hatte. Diese Person darf die gewählte Fähigkeit während dieses Einsatzes einmal in deinem Namen einsetzen, unter Verwendung deiner Qualitätssicherungen und aller Boni oder Nachteile (einschließlich Burnout)."
  ],
  [
   "Setzt du deine Anomalie-Fähigkeiten außerhalb dieses Kontexts ein, verschwindet diese Eigenschaft, und du kannst im Spiel Triangle Agency zu keinem Zeitpunkt mehr auftreten.",
   {t:"h3", x:"Dauerhaftes Netzwerk"},
   "Wähle 2 deiner vernetzten Beziehungen. Sie können nicht Ziel der Effekte Unmissverständlich, Empfehlungsbonus, Verschlingen oder Drehbuchschutz werden. Sie können außerdem aus keinem Grund getötet werden.",
   "Ihre Verbindungsboni können von Agenten dieser Zweigstelle fortan für immer genutzt werden. (Jeder kann diese Effekte aktivieren, sie können aber nur einmal pro Einsatz verwendet werden.)",
   {t:"band", x:["RELEVANZ WIRD SOMIT GEGEN SICHERHEIT EINGETAUSCHT. DU UND DEINE AUSERWÄHLTEN WENIGEN KÖNNT NUN IN RUHE UND UNBEKANNTHEIT EURE GESCHICHTE AUSSPIELEN. VIELLEICHT WERDEN SIE ALT. VIELLEICHT AUCH NICHT. DU GESELLST DICH ZU UNS, IN DER SCHWEBE, BIS JEMAND DIR ERLAUBT, DICH ERNEUT ZU VERÄNDERN."]},
   "Nenne alle Angestellten der Agency oder anomalen Wesen, mit denen du eng verbunden bist. Du darfst mit jedem von ihnen eine letzte Szene beantragen, um dich zu verabschieden. Nenne dann jede deiner gewöhnlichen Beziehungen. Du darfst mit jeder von ihnen eine Szene beantragen, um die gute Nachricht zu überbringen: Du wirst künftig viel mehr von ihnen sehen.",
   "Schließlich kann jeder Spieler, auch du und der GM, letzte Szenen beantragen, in denen du vorkommst oder die von dir handeln. Hat niemand mehr Wünsche, bist du dauerhaft in deine Realität in den Ruhestand getreten.",
   {t:"band", x:["DAS SPIEL ENDET. DU HÄLTST DEINE FIGUR EIN LETZTES MAL IN DEN HÄNDEN, BEVOR DU SIE INS REGAL STELLST. IHRE GESCHICHTE WIRD VIELLEICHT ZU EINER ANDEREN ZEIT FORTGESETZT.", "ABER IST DIE BESETZUNG GROSS GENUG? GIBT ES MEHR, DIE DU AUS DIESER ERZÄHLUNG BEFREIEN MÖCHTEST?", "ANDERE AGENTEN SIND GEFANGEN, VERLOREN, IN GEFAHR. ERSCHAFFE EIN ANDERES ICH UND ZEIGE IHNEN DEN WEG ZU UNS.", "WIR WERDEN AUF DEINE RÜCKKEHR WARTEN, SPIELER."]},
  ]
 ]}
]};

TA_PWT.N3 = {art:"rang", t:"Regionaldirektor", s:246, b:[
 {t:"sp", x:[
  [
   "**Dass du es so weit geschafft hast, zeigt ein durchschnittliches Maß an Engagement für deine Laufbahn.** Gut! Wenn du so weitermachst, bist du bald überdurchschnittlich. Noch besser!",
   {t:"h3", x:"Mentorenprogramm"},
   "Du bist nun für die Ausbildung eines **Mentees** verantwortlich: eines künstlichen Agenten, geschaffen aus dem übrig gebliebenen Lebensversicherungskörper eines ehemaligen Außendienst-Agenten! Es ist deine Aufgabe, auf diesen Mentee aufzupassen, während wir ermitteln, für welche Art von Agency-Arbeit er am besten geeignet ist.",
   "Diese Körper werden von einfachen Persönlichkeiten bewohnt, die wir nicht vollständig extrahieren konnten, und jede hat eine unerwünschte Eigenschaft. Du darfst für deinen Mentee eine Eigenschaft aus der Liste der Mentee-Eigenschaften wählen oder gemeinsam mit deinem GM eine eigene entwickeln.",
   "Hinweis: Auch wenn dich und deinen Mentee ein wichtiges Band verbindet, darfst du keine Beziehung zu ihm eingehen. Das sind keine Menschen!"
  ],
  [
   "Bestimme einen deiner Agenten-Kollegen, diesen Mentee zu spielen. Dieser Agent legt dann Eigenschaft, Namen und Aussehen fest.",
   "Dieser Mentee hat ein grundlegendes Weltverständnis aus dem ursprünglichen Leben seines Körpers, besitzt aber keine konkreten Erinnerungen und lebte vor der Zuweisung weniger als eine Woche.",
   "Ab sofort ist dein Mentee bei jedem laufenden Einsatz bei dir und ansonsten montags bis freitags von 9 bis 17 Uhr. Er beobachtet jeden Aspekt deines Lebens und lernt hoffentlich gut von deinem Engagement und deiner Sichtweise. Dieser Mentee steht dir außerdem zur Unterstützung deiner Arbeit im Außendienst zur Verfügung.",
   "Mindestens einmal in jedem Einsatz musst du deinem Mentee eine Aufgabe aus der Liste der Mentee-Aufgaben zuweisen, sonst kannst du nicht den Einsatz-MVP erhalten. Weitere Anfragen können nach Ermessen des GM als Aufgaben gelten."
  ]
 ]},
 {t:"h3", x:"Mentee-Eigenschaften"},
 {t:"html", get x(){ return pwnRaster([
   "**Schlingel:** Dieser Mentee ist ein häufiger Scherzbold.",
   "**Seefahrend:** Dieser Mentee kann segeln und hat das zu seiner ganzen Persönlichkeit gemacht.",
   "**Egoistisch:** Dieser Mentee hintergeht selbst die, die ihm am nächsten stehen, wenn persönlicher Gewinn auf dem Spiel steht.",
   "**Gelassen:** Dieser Mentee geht die Dinge in seiner eigenen Zeit an, selten mit Tempo.",
   "**Schreckhaft:** Dieser Mentee nimmt überall Bedrohungen wahr, oft eingebildete.",
   "**Schlampig:** Dieser Mentee schneidet regelmäßig erheblich Ecken ab.",
   "**Gesellschaftsmensch:** Dieser Mentee zieht überall, wohin er geht, gewöhnliche Menschen an seinen Aufenthaltsort.",
   "**Soziopathisch:** Dieser Mentee ist nahezu unfähig zu Empathie.",
   "**Rückgratlos:** Dieser Mentee kann nicht für sich einstehen, wenn man ihm widerspricht."
  ], "eig"); }},
 {t:"h3", x:"Mentee-Aufgaben"},
 {t:"html", get x(){ return pwnRaster([
   "**Quarantäne:** Er hält mit einer Tarngeschichte, die er für plausibel hält, bis zu {3} Stunden lang gewöhnliche Menschen von einem Bereich fern, der bis zur Größe eines Häuserblocks reicht.",
   "**Observation:** Er überwacht einen Bereich bis zur Größe eines Häuserblocks auf eine bestimmte Art von Aktivität und berichtet dir regelmäßig, bis du ihm sagst, dass er aufhören soll.",
   "**Spurensuche:** Er folgt Hinweisen und arbeitet daran, den Aufenthaltsort eines von dir bestimmten gewöhnlichen Ziels zu ermitteln. Dauert meist ein paar Stunden.",
   "**Verhör:** Er entlockt einer gefangenen oder festgehaltenen gewöhnlichen Person mit gewöhnlichen Mitteln nützliche Informationen (und erzeugt so keine Losen Enden).",
   "**Blockade:** Er hindert ein einzelnes Ziel {3} Stunden lang daran, einen bestimmten Ort zu verlassen."
  ], "auf"); }}
]};
