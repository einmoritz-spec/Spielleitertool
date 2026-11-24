/* Paket C4 – Kapitel 3: Deine Reisenden (gedr. S. 49–65, ohne Archetypen S. 66–75) */
window.NACHDATA_ES = window.NACHDATA_ES || {};
(function(){
  var songs = [
    "Last Goodbye (Jeff Buckley)","Black Hole Sun (Soundgarden)","Something in the Way (Nirvana)","Karma Police (Radiohead)","Wicked Game (Chris Isaak)","Enjoy the Silence (Depeche Mode)",
    "Dead Souls (Nine Inch Nails)","If It Makes You Happy (Sheryl Crow)","Rooster (Alice In Chains)","Big Empty (Stone Temple Pilots)","Killing in the Name (Rage Against The Machine)","Tonight, Tonight (The Smashing Pumpkins)",
    "Torn (Natalie Imbruglia)","Sabotage (Beastie Boys)","Bittersweet Symphony (The Verve)","Satellite (Dave Matthews Band)","Glastonbury Song (The Waterboys)","Angels of the Silences (Counting Crows)",
    "Dammit (Blink-182)","Lovefool (The Cardigans)","Loser (Beck)","Wannabe (Spice Girls)","Alive (Pearl Jam)","Old School (2Pac)",
    "Wonderwall (Oasis)","Song 2 (Blur)","Just a Girl (No Doubt)","Gangsta’s Paradise (Coolio)","Zombie (The Cranberries)","Kiss From a Rose (Seal)",
    "Breathe (The Prodigy)","Buddy Holly (Weezer)","When I Come Around (Green Day)","Barbie Girl (Aqua)","Cats in the Cradle (Ugly Kid Joe)","Burn (The Cure)"
  ];
  var songTab = [];
  for(var a = 1; a <= 6; a++){ for(var b = 1; b <= 6; b++){ songTab.push([String(a * 10 + b), songs[(a - 1) * 6 + (b - 1)]]); } }

  window.NACHDATA_ES.k3 = {
    kap: "Kapitel 3", titel: "Deine Reisenden", s: 49,
    abschnitte: [
      {id: "einleitung", titel: "Einleitung", s: 50, bloecke: [
        ["zit", "Ich habe in Mojave eine Menge erledigt bekommen. Ich habe meine Kleider gewaschen, Essen gekauft, das Auto vollgetankt und gewaschen und sogar ein paar Comics und Kid-Kosmo-Actionfiguren für Skip aufgetrieben. Die Stadt leerte sich. Überall standen schwer beladene Autos. Betten, Sofas und große Fernseher wurden hinausgetragen und auf Anhängern und Autodächern festgezurrt. Die Supermärkte waren chaotisch und überfüllt, und die Regale waren größtenteils leer. Die langen Schlangen der Kunden zitterten vor Angst und Beklommenheit. Die Leute sahen einander an, als warteten sie darauf, dass die Plünderungen losgehen."],
        ["p", "DEINE REISENDE ODER DEIN REISENDER ist ein Mensch, der sich auf eine Reise durch den Electric State begibt. Du bist ein Mensch oder eine Drohne, die jemand mit einem Neurocaster steuert."],
        ["p", "Spiele deine Reisenden mit ganzem Herzen. Lass dich auf alles ein, was an den Halten geschieht und in den Beziehungen zu den anderen Reisenden. Folge deinen Träumen, erkunde deine Schwächen und überwinde sie. Bring deine Reisenden in gefährliche, schwierige und interessante Situationen. Spiele, um herauszufinden, was geschieht."],
        ["p", "Dieses Kapitel beschreibt, wie du deine Reisenden erschaffst und wie sie sich im Spiel entwickeln können. Vielleicht möchtest du deine Reisenden gemeinsam mit den anderen Spielenden erschaffen, damit ihr interessante Beziehungen knüpfen könnt."],
        ["p", "Am Ende dieses Buches findest du vier vorgefertigte Reisende, die du spielen oder als Inspiration für deine eigenen Reisenden nutzen kannst."],
        ["kasten", "Reisende erschaffen", [
          "1. Wähle deinen Archetyp (S. 66–75).",
          "2. Würfle deine Attribute aus und verteile die Werte (S. 52).",
          "3. Berechne deine Start-Gesundheit und deine Start-Hoffnung (S. 54).",
          "4. Würfle oder wähle dein Start-Talent (S. 56).",
          "5. Wenn die Summe deiner Attribute 15 oder weniger beträgt, würfle oder wähle ein zusätzliches Talent.",
          "6. Würfle oder wähle deinen Traum (S. 59).",
          "7. Würfle oder wähle deine Schwäche (S. 59).",
          "8. Würfle oder wähle deinen Lieblingssong der 90er (S. 60).",
          "9. Beschreibe deine Reisenden.",
          "10. Wähle den Namen.",
          "11. Würfle oder wähle ein Neurocaster-Modell (S. 61).",
          "12. Würfle oder wähle einen persönlichen Gegenstand (S. 61).",
          "13. Würfle dein Startbargeld aus (S. 61).",
          "14. Lass die Spielleitung deine Reise vorstellen oder plant sie gemeinsam in der Gruppe (S. 112).",
          "15. Notiere dein Ziel sowie dein persönliches Ziel und deine persönliche Bedrohung.",
          "16. Lege dein Fahrzeug und etwaige gemeinsame Gegenstände darin fest (S. 62).",
          "17. Stelle dich der Gruppe vor und legt mit den anderen Reisenden die Spannungsstufen fest (S. 64)."
        ]],
        ["kasten", "Reisende & Reisen", [
          "Zwei Dinge müssen erledigt sein, bevor das Spiel beginnt: Reisende erschaffen und die Reise planen. Letzteres übernimmt hauptsächlich die Spielleitung oder man nutzt eine vorgefertigte Reise.",
          "Meist ist es sinnvoll, wenn die Spielleitung zuerst den Reiseverlauf liest oder entwirft und die Spielenden darüber informiert, damit sie Reisende erschaffen können, die darauf aufbauen. Die Gruppe kann aber auch zuerst die Reisenden erschaffen, und die Spielleitung denkt sich dann eine passende Reise aus.",
          "Die Kapitel 5 und 6 dieses Buches enthalten Werkzeuge für die Spielleitung, um Reisen und Halte zu entwerfen. Kapitel 7 enthält eine komplette vorgefertigte Reise namens Into the Dust mit drei vollständigen Halten zum Spielen."
        ]]
      ]},
      {id: "archetyp", titel: "Archetyp", s: 52, bloecke: [
        ["p", "WER BIST DU in dieser zusammenbrechenden Welt? Wer wärst du lieber? Welche Hoffnung, wie schwach sie im Dunkel von Pacifica auch sein mag, hält dich am Laufen? Diese und weitere Überlegungen sind die Grundlage deiner Reisenden. Der Archetyp, den du wählst, legt eine Reihe von Entscheidungen oder Zufallswürfen fest, die du treffen musst."],
        ["p", "Dein Archetyp sagt etwas darüber aus, wer du bist und worin du gut bist. Er sagt auch etwas darüber aus, als wen du dich jetzt siehst und vielleicht, wer du am Ende deiner Reise sein möchtest."],
        ["p", "Es stehen zehn Archetypen zur Auswahl, alle am Ende dieses Kapitels beschrieben. Es sollte in der Gruppe nicht mehr als einen Reisenden desselben Archetyps geben. Außerdem ist es ratsam, Archetypen mit unterschiedlichen Schlüsselattributen zu wählen."]
      ]},
      {id: "attribute", titel: "Attribute", s: 52, bloecke: [
        ["p", "VIER ATTRIBUTE BESTIMMEN deine Reisenden. Sie zeigen deine Kernstärken und -schwächen. Wir bewerten sie numerisch von 2 bis 6. Um deine Start-Attribute zu bestimmen, wirf vier Würfel. Würfle Einsen neu, bis alle Würfel 2 oder höher zeigen. Verteile die Werte auf die Attribute Stärke, Geschick, Verstand und Empathie. Höher ist besser."],
        ["p", "Das Schlüsselattribut deines Archetyps zeigt an, welches Attribut für dich am wichtigsten sein dürfte."],
        ["p", "Wenn die Summe deiner Start-Attribute 15 oder weniger beträgt, erhältst du ein zusätzliches Start-Talent (S. 56). Attribute können im Spiel gesteigert werden."],
        ["kasten", "Alternative Methode", [
          "Wenn du möchtest, kannst du stattdessen 16 Punkte auf deine vier Attribute verteilen, statt Zufallswerte zu würfeln. Kein Attributwert darf niedriger als 2 oder höher als 6 sein. Im Durchschnitt führt diese Methode zum selben Ergebnis wie das Würfeln, aber du nimmst das Element des Zufalls heraus."
        ]],
        ["h", "Stärke"],
        ["p", "Ein Maß dafür, wie zäh du bist. Es ist die Fähigkeit, einzustecken und auszuteilen. Sie bestimmt Dinge wie, wie lange du ohne Essen oder Ruhe auskommst und wie leicht du eine verklemmte Tür aufstemmst. Kannst du genauso gut austeilen, wie du einsteckst?"],
        ["h", "Geschick"],
        ["p", "Ein Maß für deine Koordination und Motorik. Wenn du dich zum Beispiel von etwas Gefährlichem wegschleichst, nutzt du Geschick. Wenn du versuchst, auf einem Dach das Gleichgewicht zu halten, oder wenn du eine Schusswaffe abfeuerst, ist Geschick das Attribut, auf das du dich verlässt. Gewandt und schnell zu sein ist in einer Welt, die auseinanderfällt, ein echter Vorteil."],
        ["h", "Verstand"],
        ["p", "Deine intellektuelle Fähigkeit und Aufmerksamkeit. Er spiegelt auch deine bisherige Bildung wider. Verstand gibt einen Eindruck davon, wie deine Reisenden die Welt begreifen und wie tief dieses Wissen reicht. Man sagt, wer zu viel Verstand hatte, hat uns hierher gebracht; vielleicht kann jemand mit genug Verstand uns wieder hinausführen."],
        ["h", "Empathie"],
        ["p", "Steht für deine Fähigkeit, andere Menschen zu verstehen und sie zu überzeugen, zu becircen oder zu täuschen. Der Welt, wenn man sich umsieht, scheint es an Empathie zu mangeln. Aber Empathie ist wertvoll. Sie ist wichtig. Sie ist alles, was uns davon trennt, selbst nur noch Drohnen zu sein."],
        ["zit", "Merkwürdigerweise hat es mein Leben besser gemacht, dass ich meiner Pflegemutter die Nase gebrochen habe. Ich kam nach Summerglade, wo ich Amanda traf. Sie war in meiner Klasse in Riverside gewesen und hatte sich ihren Platz in Summerglade verdient, indem sie ihre Chemielehrerin mit einem Elektroschocker angegriffen hatte."]
      ]},
      {id: "wuerfeln", titel: "Würfeln & Forcieren", s: 53, bloecke: [
        ["p", "UM ETWAS SCHWIERIGES oder GEFÄHRLICHES zu versuchen, würfle so viele sechsseitige Basiswürfel, wie dein Attributwert beträgt, der am besten zur anstehenden Herausforderung passt. Um Erfolg zu haben, musst du mindestens eine 6 würfeln (das Symbol 6 auf den eigenen Würfeln dieses Spiels)."],
        ["kasten", "Eigene Würfel", [
          "Das eigene Würfelset für das The-Electric-State-Rollenspiel, separat erhältlich, enthält sechs rote Basiswürfel und vier schwarze Ausrüstungswürfel. Beide Würfelarten tragen auf der 6-Seite das eingravierte Sentre-Logo, das einen Erfolg anzeigt. Die Basiswürfel tragen auf der 1-Seite das Symbol für verlorene Hoffnung, während die Ausrüstungswürfel auf der 1-Seite das Symbol für Schaden an der Ausrüstung tragen. Beim Forcieren eines Wurfs darfst du Würfel, die diese Symbole oder die 6 zeigen, niemals neu würfeln. Sie müssen auf dem Tisch liegen bleiben."
        ]],
        ["h", "Wann würfeln"],
        ["p", "Im Allgemeinen geben dieses Regelbuch oder der Text des Halts an, wann gewürfelt wird und auf welches Attribut. Die Spielleitung kann aber jederzeit einen Wurf verlangen, wenn sie die Situation für angemessen hält. Wir raten jedoch von übermäßigem Würfeln ab und empfehlen, Würfe für dramatische und angespannte Situationen aufzusparen, in denen wirklich etwas auf dem Spiel steht."],
        ["h", "Modifikatoren"],
        ["p", "Die Regeln oder die Spielleitung können deine Chancen verändern, indem sie Würfel hinzufügen oder wegnehmen. Das heißt dann +1 Würfel, +2 Würfel usw. und umgekehrt –1 Würfel, –2 Würfel usw. Du kannst nie unter einen Würfel fallen."],
        ["h", "Forcieren"],
        ["p", "Wenn dir ein Wurf misslingt oder du einfach mehr 6en willst, kannst du den Wurf forcieren. Nimm alle Würfel, die weder eine 1 noch eine 6 zeigen, und würfle sie erneut. Nach dem erneuten Würfeln zählen alle Würfel, auch die, die nicht neu gewürfelt wurden. Für jede 1 (das Symbol auf den eigenen Basiswürfeln), die nach dem Forcieren gewürfelt wird, sinkt deine aktuelle Hoffnung um eins."],
        ["kasten", "NSC & Forcieren", [
          "Die Spielleitung würfelt für NSC auf die gleiche Weise wie die Spielenden für ihre Reisenden, mit dem wesentlichen Unterschied, dass NSC Würfe niemals forcieren."
        ]],
        ["h", "Ausrüstung"],
        ["p", "Waffen und andere Ausrüstung können dir zusätzliche Würfel zum Würfeln geben. 6en auf Ausrüstungswürfeln wirken genauso wie die von anderen Würfeln, aber wenn du einen Wurf forcierst, senken 1en auf Ausrüstungswürfeln (das Symbol auf den eigenen Ausrüstungswürfeln) nicht deine Hoffnung – stattdessen sinkt der Bonus der Ausrüstung um eins. Erreicht der Ausrüstungsbonus null, ist das Ausrüstungsstück kaputt und muss repariert werden (S. 108). Würfel von Ausrüstung sollten eine andere Farbe haben, damit man sie von Würfeln aus Attributen oder Modifikatoren unterscheiden kann."],
        ["h", "Mehrere Erfolge"],
        ["p", "Je mehr 6en du würfelst, desto besser das Ergebnis. Im Kampf (S. 80) bedeutet das mehr Schaden. In anderen Situationen kann es alles Mögliche bedeuten – zum Beispiel:"],
        ["liste", ["Du gibst an.", "Du erledigst es schnell.", "Du erledigst es leise.", "Du erzielst einen unerwarteten zusätzlichen Effekt."]],
        ["p", "Die Spielleitung hat das letzte Wort darüber, wofür zusätzliche 6en eingesetzt werden können."],
        ["h", "Helfen"],
        ["p", "Bis zu drei weitere Reisende und NSC können dir bei einem Wurf helfen. Jede helfende Person gibt dir +1 Würfel, muss aber tatsächlich in der Lage sein, deine Handlung konkret zu unterstützen. Die Spielleitung hat das letzte Wort. Im Kampf (S. 80) verbraucht das Helfen deinen Zug in der Runde."],
        ["h", "Vergleichende Würfe"],
        ["p", "Wenn du aktivem Widerstand gegenüberstehst, musst du gegen deinen Gegner würfeln. Beispiele sind der Versuch, jemanden zu überzeugen, der aktiv anderer Meinung ist (würfle Empathie gegen Verstand), oder der Versuch, an einer aufmerksamen Wache vorbeizuschleichen (würfle Geschick gegen Verstand). Vergleichende Würfe werden auch im Kampf verwendet (S. 80)."],
        ["p", "Bei einem vergleichenden Wurf musst du mehr 6en würfeln als dein Gegner, um Erfolg zu haben. Nur du – der aktive Part – darfst den Wurf forcieren."],
        ["h", "Spannung"],
        ["p", "Bei einem vergleichenden Wurf zwischen dir und einer anderen Reisenden oder einem anderen Reisenden erhaltet ihr beide Bonuswürfel in Höhe eurer Spannungsstufe gegenüber der anderen Person."],
        ["h", "Offene vergleichende Würfe"],
        ["p", "In einer Situation, in der beide Gegner gleich aktiv sind, dürfen beide den Wurf forcieren. Bei Gleichstand gibt es im Konflikt keinen klaren Sieger – es muss ein Kompromiss gefunden werden. Wo das nicht möglich ist, würfelt neu, um den Gleichstand aufzulösen (nach dem Forcieren)."],
        ["bsp", [
          ["Fernando (Reisender 1):", "Während sie in der Küche die Kaninchen abziehen, nehme ich die Tasche mit den Vanadium-Redox-Batterien, öffne das Fenster und schleiche mich hinaus."],
          ["Valeria (Reisende 2):", "Nein, tust du nicht. Wie gesagt, ich beobachte dich."],
          ["Spielleitung:", "Ihr müsst einen vergleichenden Wurf machen, um zu sehen, ob du dich wegschleichen kannst: Geschick gegen Verstand."],
          ["Valeria:", "Ich habe zwei 6en. Yeah!"],
          ["Fernando:", "Tja, ich auch."],
          ["Spielleitung:", "Dann gibt es einen Kompromiss. Wie wäre es, wenn du ungesehen hinauskommst, aber Valeria dich durch ein Fenster entdeckt und dir folgen kann?"]
        ]],
        ["zit", "Wir verbrachten zwei Nächte damit, aus der Sperrzone herauszufahren. Ich wollte nicht gesehen werden, wenn wir an den Straßensperren vorbeikamen, deshalb wartete ich bis mitten in die Nacht, bevor ich den Rest der Strecke nach Barstow fuhr. Ich hatte gehofft, dort für Benzin und Essen anzuhalten, bevor wir auf die 395 nach Norden abbogen, aber die Dürre hatte sich in den letzten Jahren nach Westen ausgebreitet und Barstow vollständig verschluckt. Der Staub und der Sand waren weit in die Stadt gewandert. Abgesehen von ein paar Landstreichern, die ihre Karren durch die Dünen zogen, war die Stadt völlig verlassen."]
      ]},
      {id: "gesundheit", titel: "Gesundheit & Hoffnung", s: 54, bloecke: [
        ["p", "SIEH DICH UM in dem, was einmal Amerika war, und du siehst Verfall, Qual, Menschen, die aufgeben. Das Land stirbt. Es hat seine Gesundheit und seine Hoffnung verloren. Gesundheit und Hoffnung bestimmen auch die Menschen. Das Land sackt ein, wie die Menschen einsacken. Es scheitert, und wir geben die Vorstellung auf, dass ein Land auf nichts weiter als einer Idee und einem Streben gegründet sein kann. Wie das Land halten auch deine Reisenden ihre Gesundheit und ihre Hoffnung nach."],
        ["h", "Gesundheit"],
        ["p", "Gesundheit sinkt durch erlittenen Schaden. Wenn deine Gesundheit auf null sinkt, bist du kampfunfähig und könntest sterben – mehr dazu in Kapitel 4. Deine maximale Start-Gesundheit entspricht deinem Stärke- plus deinem Geschickwert, geteilt durch zwei (Brüche werden aufgerundet), kann aber durch das Talent Zäh erhöht werden."],
        ["h", "Hoffnung"],
        ["p", "Hoffnung sinkt durch das Forcieren von Würfen und durch traumatische Ereignisse. Wenn die Hoffnung auf null sinkt, hast du einen Zusammenbruch und erleidest womöglich ein seelisches Trauma (S. 87). Dein maximaler Start-Hoffnungswert entspricht deinem Verstand- plus deinem Empathiewert, geteilt durch zwei (Brüche werden aufgerundet), kann aber durch das Talent Träumer erhöht werden."],
        ["h", "Neuronik & Rausch"],
        ["p", "Neurocaster zu benutzen, um in den Electric State einzutreten, kann sehr nützlich, manchmal sogar unerlässlich sein, um Hindernisse zu überwinden und dorthin zu gelangen, wo du hinmusst. Die Nutzung von Neuronik macht jedoch stark süchtig und lässt dich Punkte von Rausch ansammeln. Wenn dein Rauschwert jemals deine aktuelle Hoffnung erreicht oder übersteigt, kannst du den Electric State nicht mehr aus eigener Kraft verlassen, und du erleidest ein seelisches Trauma, wenn jemand anderes dich herauszwingt. Mehr zu Neuronik und Rausch findest du in Kapitel 4."]
      ]},
      {id: "talente", titel: "Talente", s: 56, bloecke: [
        ["p", "TALENTE SIND BESONDERE FÄHIGKEITEN, Eigenschaften und Begabungen, die dir in verschiedenen Situationen nützen können. Sie geben dir Bonuswürfel in bestimmten Situationen oder erlauben dir, besondere Kunststücke zu vollbringen oder auf Ressourcen zuzugreifen, die anderen nicht zur Verfügung stehen. Jedes Talent kannst du nur einmal erlernen."],
        ["h", "Start-Talent"],
        ["p", "Du beginnst das Spiel mit einem Talent (oder zwei, wenn du beim Auswürfeln der Attribute Pech hattest, siehe S. 52). Du darfst jedes beliebige Talent wählen. Dein Archetyp gibt drei Vorschläge, und du kannst sogar einen davon zufällig auswählen. Neue Talente kannst du im Lauf des Spiels erlernen (S. 65)."],
        ["tabelle", ["Talent", "Wirkung"], [
          ["Athlet", "Du erhältst +2 Würfel auf Geschickwürfe für Springen, Klettern, Rennen und ähnliche Handlungen."],
          ["Meuchler", "Du erhältst +2 Würfel auf Geschickwürfe, um einen Hinterhalt vorzubereiten (S. 81)."],
          ["Biker", "Du erhältst +2 Würfel auf Geschickwürfe zum Fahren jedes zweirädrigen Fahrzeugs."],
          ["Messerkämpfer", "Du erhältst +2 Würfel auf Nahkampfwürfe, wenn du mit einer scharfen Nahkampfwaffe kämpfst."],
          ["Bootsfahrer", "Du erhältst +2 Würfel auf Geschickwürfe zum Manövrieren jeder Art von Boot."],
          ["Bomber", "Du erhältst +2 Würfel beim Einsatz von Sprengwaffen, einschließlich Handgranaten und improvisierter Sprengsätze."],
          ["Bogenschütze", "Du erhältst +2 Würfel beim Abfeuern eines Bogens oder einer Armbrust."],
          ["Charmeur", "Du erhältst +2 Würfel, wenn du auf Empathie würfelst, damit ein NSC dich mag."],
          ["Keulenkämpfer", "Du erhältst +2 Würfel auf Nahkampfwürfe, wenn du mit einer stumpfen Nahkampfwaffe jeder Art kämpfst."],
          ["Trickbetrüger", "Du erhältst +2 Würfel, wenn du auf Empathie würfelst, um einen NSC zu täuschen oder anzulügen."],
          ["Datenschürfer", "Du erhältst +2 Würfel, wenn du einen Neurocaster benutzt, um Informationen zu finden (S. 94)."],
          ["Schmutziger Kämpfer", "Deine unbewaffneten Nahkampfangriffe haben einen Grundschaden von 2."],
          ["Dramaqueen", "Bei vergleichenden Würfen gegen andere Reisende wird dein Bonus aus der Spannung (S. 64) verdoppelt."],
          ["Träumer", "Dein maximaler Hoffnungswert steigt um 2."],
          ["Fahrer", "Du erhältst +2 Würfel auf Geschickwürfe zum Fahren eines Bodenfahrzeugs, Autos oder Lastwagens."],
          ["Drohnenoperateur", "Du erhältst +2 Würfel auf alle Würfe, wenn du eine Drohne steuerst (S. 98)."],
          ["Elektronik", "Du erhältst +2 Würfel auf Verstandwürfe zum Bedienen und Reparieren elektronischer Geräte, einschließlich Neurocaster."],
          ["Ausweichend", "Du erhältst +2 Würfel auf Geschickwürfe, um Fernangriffen auszuweichen (S. 80)."],
          ["Gamer", "Du erhältst +2 Würfel, wenn du einen Neurocaster benutzt, um in einer Neurolandschaft mit anderen Avataren zu interagieren (S. 97)."],
          ["Hacker", "Du erhältst +2 Würfel, wenn du einen Neurocaster benutzt, um in ein System einzudringen (S. 94)."],
          ["Abgehärtet", "Du erhältst +2 Würfel auf Verstand- oder Empathiewürfe, wenn du traumatischen Ereignissen widerstehst (S. 85)."],
          ["Intuition", "Einmal pro Sitzung darfst du die Spielleitung bitten, dir eine nützliche Information zu geben."],
          ["Anführer", "Du erhältst +2 Würfel, wenn du auf Empathie würfelst, um eine kampfunfähige Person (S. 82) oder jemanden, der einen Zusammenbruch erlitten hat (S. 85), aufzurichten."],
          ["Einzelgänger", "Du kannst Spannung (S. 65) allein abbauen, ohne dass eine andere Reisende oder ein anderer Reisender anwesend ist."],
          ["Maschinengewehrschütze", "Du erhältst +2 Würfel bei vollautomatischem Feuer (S. 81)."],
          ["Kampfsportler", "Du erhältst +2 Würfel auf Nahkampfwürfe, wenn du unbewaffnet kämpfst."],
          ["Mechaniker", "Du erhältst +2 Würfel auf Verstandwürfe zum Reparieren von Fahrzeugen und anderen mechanischen Geräten."],
          ["Sanitäter", "Als Handlung kannst du auf Verstand würfeln, um eine kampfunfähige Person zu stabilisieren (S. 82). Ein Erste-Hilfe-Set gibt dir Bonuswürfel (S. 109)."],
          ["Bedrohlich", "Du kannst auf Stärke statt auf Empathie würfeln, wenn du jemanden bedrohst, und du erhältst +2 Würfel."],
          ["Musiker", "Wenn du ein Musikinstrument für eine Zeitspanne einsetzt, erhältst du +2 auf Empathiewürfe gegenüber deinem Publikum."],
          ["Neuroresistent", "Du hast bessere Chancen als andere, dem Rausch des Neurocastens zu widerstehen. Mehr dazu auf S. 93."],
          ["Neun Leben", "Du erhältst +2 Würfel bei Todeswürfen (S. 82), also sechs statt vier Würfel."],
          ["Krankenpfleger", "Wenn du eine Schicht damit verbringst, dich um eine Patientin oder einen Patienten zu kümmern, heilt diese Person 2 Schadenspunkte pro Schicht statt 1, sofern sie sich ausruht. Du kannst dich um so viele Patienten kümmern, wie dein Verstandwert beträgt."],
          ["Pilot", "Du erhältst +2 Würfel auf Geschickwürfe zum Steuern jeder Art von Luftfahrzeug."],
          ["Pistolenschütze", "Du erhältst +2 Würfel beim Abfeuern einer Pistole oder eines Revolvers."],
          ["Widerstandsfähig", "Du erhältst +2 Würfel auf Stärkewürfe, um Hunger und Krankheit zu widerstehen."],
          ["Reiter", "Du erhältst +2 Würfel auf Geschickwürfe zum Reiten eines Pferdes oder eines anderen Reittiers."],
          ["Späher", "Du erhältst +2 Würfel auf Verstandwürfe, um sich nähernde Bedrohungen zu entdecken."],
          ["Spürnase", "Du erhältst +2 Würfel auf Verstandwürfe, wenn du einen Bereich nach Hinweisen absuchst."],
          ["Scharfschütze", "Du erhältst +2 Würfel beim Abfeuern eines Gewehrs auf weite Entfernung oder mehr, außer bei vollautomatischem Feuer."],
          ["Redner", "Du erhältst +2 Würfel, wenn du auf Empathie würfelst, um zu einer Gruppe von NSC zu sprechen und sie umzustimmen oder zu überzeugen."],
          ["Heimlich", "Du erhältst +2 Würfel auf Geschickwürfe, um unentdeckt zu bleiben. Kann nicht für Hinterhalte genutzt werden."],
          ["Chirurg", "Manche schweren Verletzungen (S. 84) erfordern eine Operation, damit die Heilung beginnt. Eine Operation erfordert einen Verstandwurf. Mehr dazu auf S. 84."],
          ["Technogeschwafler", "Du darfst auf Verstand statt auf Empathie würfeln, wenn du jemanden von etwas überzeugen willst, das komplexe technische Fragen betrifft, wie etwa das Neurocasten."],
          ["Dieb", "Du erhältst +2 Würfel auf alle Würfe zum Knacken von Schlössern oder Kurzschließen von Autos."],
          ["Zäh", "Dein maximaler Gesundheitswert steigt um 2."]
        ]],
        ["kasten", "Weitere Talente", [
          "Die hier aufgeführte Liste der Talente ist nicht abschließend. Du kannst für deine Kampagne unter Aufsicht der Spielleitung neue Talente erschaffen, solange sie sich nicht mit bestehenden Talenten überschneiden."
        ]],
        ["zit", "Es war nicht leicht herauszufinden, wo wir waren, aber ich vermutete, dass es irgendwo westlich der Staatsgrenze von Pacifica war, wahrscheinlich in der Gegend der Interstate 15. Die meisten Straßen im Südosten von Pacifica waren heutzutage wegen des Staubs vermutlich unpassierbar, aber ich wollte die großen Städte und die dicht besiedelten Gebiete im Westen so lange wie möglich meiden."]
      ]},
      {id: "persoenliches", titel: "Persönliches", s: 59, bloecke: [
        ["p", "ALS NÄCHSTES MUSST DU deinen Reisenden einen Traum, eine Schwäche, einen Lieblingssong der 90er, eine Beschreibung und einen Namen geben."],
        ["h", "Traum"],
        ["p", "Wir alle haben Beweggründe. Manche sind Beweggründe, auf etwas zuzugehen. Andere sind Beweggründe, etwas zu vermeiden. Aber damals, in der Kindheit, hatten wir Träume. Träume davon, was wir wollten. So echt, dass wir sie sehen konnten. Die Schärfe und Klarheit dieser Träume verblasst oft mit dem Alter, bis sie schließlich ganz verschwunden sind."],
        ["p", "Aber du bist ein Reisender oder eine Reisende. Du trägst einen Rest eines Traums in dir, und wenn du ihn entfachen kannst, kann er dich weit tragen. Doch der allzu leichte Traum, den ein Neurocaster bietet, nimmt zu viele gefangen. Kannst du widerstehen und dieses eine Ding finden, dieses eine echte Ding, das dir Hoffnung gibt?"],
        ["p", "Wähle einen Traum, den dein Archetyp vorschlägt, würfle ihn zufällig aus oder denke dir selbst einen aus. Träume sollten allgemein formuliert sein und müssen sich nicht direkt mit der Reise verbinden – stattdessen solltest du dich von deinem Traum leiten lassen, wenn du deine Reisenden im Spiel darstellst. Deinem Traum zu folgen ist wichtig, denn so können sich deine Reisenden nach jeder Spielsitzung weiterentwickeln (S. 65)."],
        ["h", "Schwäche"],
        ["p", "Als Yin zum Yang deines Traums hast du auch eine Schwäche – einen Wesenszug im Kern, der dir im Weg steht und zu deinem Untergang führen kann, wenn du ihn nicht überwindest."],
        ["p", "Wähle eine Schwäche, die für deinen Archetyp vorgeschlagen wird, würfle sie zufällig aus oder denke dir selbst eine aus. Genau wie dein Traum hilft dir deine Schwäche dabei, deine Reisenden darzustellen. Das ist wichtig, denn so können sich deine Reisenden nach jeder Spielsitzung weiterentwickeln (S. 65)."],
        ["p", "Irgendwann während der Reise kannst du deine Schwäche überwinden und das volle Potenzial deiner Reisenden verwirklichen. Mehr dazu auf S. 65."],
        ["h", "Lieblingssong"],
        ["p", "Nenne einen Song, den deine Reisenden im Auto spielen, wenn sie die Gelegenheit dazu bekommen. Du kannst jeden echten Song aus den 90ern wählen, einen Titel und eine Künstlerin oder einen Künstler erfinden, die nur im Spiel existieren, oder auf der folgenden Tabelle würfeln. Deine Songwahl hilft dir, dir ein Bild davon zu machen, wer deine Reisenden sind, hat aber keine mechanische Wirkung."],
        ["p", "Die 90er waren ein Jahrzehnt der Gegenkultur. Während wir konsumierten, wie es uns die Werbung vorgab, wehrten wir uns auch. Punk, Goth, Independent-Filme, Zines und eine ganze Reihe anderer kultureller Randerscheinungen standen für weit mehr. Vielleicht ist die Bedeutung heute den meisten verloren gegangen, aber es gibt Bruchstücke des Pop, die für dich noch eine Bedeutung haben."],
        ["w", "Lieblingssong der 90er", "D66", songTab, 60],
        ["h", "Beschreibung"],
        ["p", "Stelle deine Reisenden vor dem Spiel den anderen mit einer kurzen Beschreibung vor. Beschreibe dich so gut du kannst und versuche, dir interessante Details auszudenken. Du und die anderen werdet mehr über deine Reisenden erfahren, wenn ihr zu eurer Reise aufbrecht."],
        ["p", "Sieh dir an, wie sich die Leute in den 90ern kleideten. Nicht nur die aus Sitcoms oder Katalogen, sondern die Jüngeren, die versuchten, gegen so viel Konzernabfall etwas Persönliches auszudrücken. Natürlich wurde dieser persönliche Ausdruck stets von eben diesen Konzernen vereinnahmt, aber das vergessen wir jetzt einmal."],
        ["h", "Name"],
        ["p", "Wähle einen Namen, der zu deiner Vorstellung von deinen Reisenden passt. Denk daran, dass wir uns in den 1990ern befinden, also bleib bei einem Namen, der in dieser Zeit tatsächlich verwendet worden wäre."]
      ]},
      {id: "ausruestung", titel: "Ausrüstung & Neurocaster", s: 61, bloecke: [
        ["p", "DEINE REISENDEN BEGINNEN DAS SPIEL mit einem Neurocaster und einem weiteren persönlichen Gegenstand, entweder frei gewählt oder zufällig aus einer von deinem Archetyp bestimmten Liste ausgewählt. Ausrüstung gibt dir einen Bonus auf Würfelwürfe, und Neurocaster werden benötigt, um in Neurolandschaften einzutreten. Das Neurocasten und die Neurocaster-Modelle werden auf S. 92 beschrieben."],
        ["h", "Bargeld"],
        ["p", "Du beginnst das Spiel mit einer Summe Bargeld, üblicherweise in US-Dollar. Würfle die Summe entsprechend deinem Archetyp aus."],
        ["h", "Sonstiges"],
        ["p", "Deine Reisenden dürfen eine Auswahl weiterer vernünftiger persönlicher Besitztümer haben, solange sie rein der Charakterisierung dienen und keine mechanische Wirkung haben. Zu solchen Besitztümern können Kleidung, Toilettenartikel, Kosmetik, persönliche Andenken usw. gehören. Die Spielleitung hat das letzte Wort darüber, was erlaubt ist."],
        ["kasten", "Traglast", [
          "Das The-Electric-State-Rollenspiel ist kein Spiel darüber, Beute anzuhäufen, und daher musst du nicht genau festhalten, wie viel du tragen kannst. Wenn die Spielleitung findet, dass du viel trägst, kann sie einen Stärkewurf verlangen oder dir einfach sagen, dass es zu schwer ist."
        ]]
      ]},
      {id: "reise", titel: "Die Reise", s: 62, bloecke: [
        ["p", "EINE KAMPAGNE im The-Electric-State-Rollenspiel heißt Reise und umfasst ein Ziel, eine Anzahl von Halten auf dem Weg sowie persönliche Ziele und Bedrohungen für jede Reisende und jeden Reisenden. Die Reise zu planen ist hauptsächlich Aufgabe der Spielleitung, und es gibt dafür Werkzeuge und Richtlinien in Kapitel 5 und 6 dieses Buches. In Kapitel 7 gibt es außerdem eine komplette vorgefertigte Reise mit drei Halten."],
        ["h", "Persönliches Ziel"],
        ["p", "Der Reiseplan enthält ein persönliches Ziel für jede Reisende und jeden Reisenden. Es wird in der Regel von der Spielleitung bei der Planung der Reise festgelegt, kann aber auch gemeinsam zwischen dir und der Spielleitung entstehen. Das Ziel muss nicht weltverändernd sein, aber es sollte die Welt der Reisenden verändern. Pacifica ist ein gefährlicher Ort, und die meisten Menschen sind viel zu selbstzufrieden, um weit zu gehen. Die Welt fällt auseinander. Was könnte irgendjemanden dazu bewegen, eine Reise anzutreten, sowohl äußerlich als auch innerlich? Das ist dein Ziel."],
        ["p", "Dein Ziel hängt oft in irgendeiner Weise mit dem Ziel der Reise zusammen, kann sich aber auch auf eine andere Reisende oder einen anderen Reisenden oder einen NSC beziehen. Dein Ziel sollte vorzugsweise deinen Traum widerspiegeln. Während der Traum allgemein ist, sollte dein Ziel sehr konkret sein."],
        ["p", "Aber vergiss nicht – der Zweck des Spiels ist die Reise, nicht das Ziel, also beeile dich nicht zu sehr, dorthin zu gelangen."],
        ["h", "Persönliche Bedrohung"],
        ["p", "Zusätzlich zu deinem Ziel hast du auf der Reise eine persönliche Bedrohung – etwas oder jemanden, das oder der versuchen wird, dir zu schaden oder dich daran zu hindern, dein Ziel zu erreichen."],
        ["p", "Genau wie dein Ziel wird deine Bedrohung in der Regel von der Spielleitung bei der Planung der Reise festgelegt, kann aber auch gemeinsam zwischen dir und der Spielleitung entstehen."]
      ]},
      {id: "fahrzeug", titel: "Euer Fahrzeug", s: 62, bloecke: [
        ["p", "DIE REISENDEN HABEN EIN FAHRZEUG, höchstwahrscheinlich ein Auto irgendeiner Art, wenn ihre Reise beginnt. Es muss ein Bodenfahrzeug sein, es sei denn, die geplante Reise erlaubt ausdrücklich andere Fortbewegungsmittel. Zu Beginn der Reise habt ihr einen halben Tank Treibstoff, sofern die Spielleitung nichts anderes sagt."],
        ["p", "Sofern der Reiseplan der Spielleitung nicht festlegt, um welches Fahrzeug es sich handelt, beschreibt ihr es gemeinsam. Die Spielleitung hilft euch, indem sie Fragen stellt. Auf S. 101 in Kapitel 4 findest du eine Liste gängiger Fahrzeuge zur Auswahl. Außerdem solltet ihr ein oder zwei Eigenschaften für das Fahrzeug auswürfeln (S. 102)."],
        ["kliste", "Fragen zum Fahrzeug", [
          "Um was für ein Fahrzeug handelt es sich?",
          "Welche Marke und welches Modell?",
          "Welche Eigenschaft(en) hat es?",
          "Wie sieht es aus?",
          "Wie riecht es darin?",
          "Wer fährt?"
        ]],
        ["h", "Gemeinsame Gegenstände"],
        ["p", "Die Reisenden beginnen das Spiel jeweils mit einem Neurocaster und einem persönlichen Gegenstand (S. 61). Zusätzlich dazu hat die Gruppe drei Gegenstände im Fahrzeug verstaut, die von allen gemeinsam genutzt werden. In der Geschichte können sie einer oder einem der Reisenden gehören, aber im Spiel sind sie dafür gedacht, von allen benutzt zu werden. Die Spielenden können gemeinsam drei Gegenstände auswählen oder dreimal auf der nebenstehenden Tabelle würfeln."],
        ["w", "Tabelle: Gemeinsame Gegenstände", "D66", [
          ["11", "Werkzeug, allgemein: Kann für alle Reparaturen verwendet werden (S. 108)."],
          ["12", "Werkzeug, Fahrzeug: Kann zum Reparieren von Fahrzeugen verwendet werden."],
          ["13", "Werkzeug, Waffen: Kann zum Reparieren von Waffen verwendet werden."],
          ["14", "Werkzeug, Neurocaster: Kann zum Reparieren von Neurocastern verwendet werden."],
          ["15", "Erste-Hilfe-Set: Dient dazu, eine kampfunfähige Person zu stabilisieren, erfordert aber das Talent Sanitäter."],
          ["16", "Chirurgische Instrumente: Geben einen Ausrüstungsbonus beim Durchführen von Operationen (S. 84)."],
          ["21", "Flasche Hochprozentiges: Kann einmal pro Schicht verwendet werden, um 1 Punkt Hoffnung zurückzugewinnen, senkt aber auch die Gesundheit um 1. Drei Anwendungen."],
          ["22", "Fernglas: Wird für Verstandwürfe verwendet, um etwas in der Ferne zu entdecken."],
          ["23", "Dosenessen: 2D6 Dosen. Jede deckt den täglichen Nahrungsbedarf einer Person (S. 89)."],
          ["24", "Kleidung, Outdoor: Hält eine Person warm. Ohne angemessene Kleidung erleidest du die Auswirkungen von Kälte (S. 88)."],
          ["25", "Musikinstrument: Gibt einen Bonus auf Empathiewürfe, erfordert aber eine Zeitspanne und das Talent Musiker."],
          ["26", "Hund, Haustier: Einmal pro Tag kannst du eine Zeitspanne mit dem Hund verbringen, um 1 Hoffnung zurückzugewinnen."],
          ["31", "Hund, Wachhund: Greift auf dein Kommando an (Handlung). Hat Stärke 5, Geschick 4, Gesundheit 9 und beißt mit Grundschaden 2."],
          ["32", "Buch, Belletristik: Einmal pro Tag kannst du eine Zeitspanne mit Lesen verbringen, um 1 Hoffnung zurückzugewinnen."],
          ["33", "Buch, religiös: Einmal pro Tag kannst du eine Zeitspanne mit Lesen verbringen, um 1 Hoffnung zurückzugewinnen."],
          ["34", "Buch, medizinisch: Gibt einen Bonus auf Würfe beim Durchführen von Operationen (S. 84)."],
          ["35", "Buch, Sachbuch: Gibt einen Bonus auf Verstandwürfe, wenn das Thema relevant ist."],
          ["36", "Zeitung: Gibt einen Bonus auf einen Verstandwurf zu allem, was mit aktuellen Ereignissen zu tun hat."],
          ["41", "Walkman: Einmal pro Tag kannst du eine Zeitspanne mit Musikhören verbringen, um 1 Hoffnung zurückzugewinnen."],
          ["42", "Schmerzmittel: Heilt einmal pro Tag 1 Punkt Gesundheit, sofern nicht kampfunfähig. Zehn Anwendungen."],
          ["43", "Brecheisen: Gibt einen Bonus auf Stärke, wenn du etwas aufbrichst. Kann auch als Waffe verwendet werden (Werte wie ein Brecheisen)."],
          ["44", "Schlafsack: Erlaubt einer Person, im Freien bequem zu schlafen, und verhindert Schlafentzug (S. 89)."],
          ["45", "Zelt: Erlaubt vier Personen, im Freien bequem zu schlafen, und verhindert Schlafentzug (S. 89)."],
          ["46", "Walkie-Talkies: Ermöglichen Verständigung auf bis zu etwa eine Meile."],
          ["51", "Benzinkanister: Enthält 5 Gallonen Benzin."],
          ["52", "Vanadium-Redox-Batterie: Versorgt Drohnen, Neurocaster und andere elektronische Geräte mit Strom."],
          ["53", "Messer: Waffe, siehe S. 81."],
          ["54", "Baseballschläger: Waffe, siehe S. 81."],
          ["55", "Taser: Waffe, siehe S. 81."],
          ["56", "Handfeuerwaffe: Waffe, siehe S. 81."],
          ["61", "Magnum-Revolver: Waffe, siehe S. 81."],
          ["62", "Armbrust: Waffe, siehe S. 81."],
          ["63", "Jagdgewehr: Waffe, siehe S. 81."],
          ["64", "Schrotflinte: Waffe, siehe S. 81."],
          ["65", "Kinderdrohne „Kid Kosmo“: Verbraucherdrohne, siehe S. 99."],
          ["66", "Klassische Spieldrohne „Wally Wayne“: Verbraucherdrohne, siehe S. 99."]
        ], 63]
      ]},
      {id: "spannung", titel: "Spannung", s: 64, bloecke: [
        ["p", "SPANNUNG LIEGT IM HERZEN jeder Erzählung. Denk an ein beliebiges Buch, einen Film oder eine Fernsehserie, die du magst, und du wirst feststellen, dass die Erzählung von Spannung vorangetrieben wird, die zwischen den Figuren zum Konflikt führt. Dieses Spiel ist da nicht anders – anders als bei manchen Rollenspielen, in denen die Geschichte am besten ist, wenn die Figuren sich vertragen."],
        ["p", "Die Reisenden haben Beziehungen zueinander, ob sie sich gerade erst kennengelernt haben oder gut kennen. Diese Beziehungen werden sich durch das verändern, was unterwegs geschieht und was ihr übereinander und über eure Schwächen lernt. Gegenüber jeder anderen Reisenden und jedem anderen Reisenden hast du einen Spannungswert von 0 bis 2."],
        ["liste", [
          "0: Keine Spannung, keine Fragezeichen oder unausgesprochenen Gedanken oder Gefühle.",
          "1: Unterdrückte oder zurückgehaltene Gereiztheit, Liebe, Interesse oder andere Gefühle und Gedanken.",
          "2: Ungebändigte starke Gefühle, wie Wut, Liebe oder sogar Angst."
        ]],
        ["p", "Spannungswerte sind asymmetrisch – deine Beziehung zu einer anderen Reisenden oder einem anderen Reisenden könnte für dich angespannt sein, für die andere Person aber nicht. Wenn du zum Beispiel Spannung 1 gegenüber einer anderen Reisenden oder einem anderen Reisenden hast und diese Person Spannung 0 gegenüber dir, könnte das bedeuten, dass du sie heimlich bewunderst oder hasst, sie es aber nicht weiß."],
        ["h", "Auswirkungen von Spannung"],
        ["p", "Spannung lässt dich mehr Anstrengung aufbringen, wenn du mit der anderen Reisenden oder dem anderen Reisenden im Konflikt bist. Bei allen vergleichenden Würfen (S. 54) gegen eine andere Reisende oder einen anderen Reisenden erhältst du, ganz gleich wofür der Wurf ist, eine Anzahl Bonuswürfel in Höhe deiner Spannungsstufe. Du kannst außerdem verlorene Hoffnung zurückgewinnen, indem du Spannung abbaust (siehe unten)."],
        ["h", "Start-Spannung"],
        ["p", "Zu Spielbeginn hast du Spannung 1 gegenüber einer oder zwei anderen Reisenden und 0 gegenüber den übrigen. Bevor ihr zu spielen beginnt, sollte die ganze Gruppe die Spannungen zwischen den Reisenden besprechen – wofür stehen die Zahlen? Beispiele findest du im untenstehenden Kasten. Eure Schwächen sind nützliche Quellen für Spannung."],
        ["bsp", [
          ["Valeria (Reisende 2):", "Ich habe Spannung 1 gegenüber dir, und ich dachte mir, dass Valeria sich für etwas Besseres hält, und obwohl wir uns gerade erst kennengelernt haben, schaut sie vielleicht schon auf dich herab. Wäre das okay?"],
          ["Ethan (Reisender 3):", "Auf jeden Fall. Dann habe ich auch Spannung 1 gegenüber dir. Ich denke mir, dass Ethan deine herablassenden Blicke bemerkt hat. Ich werde es lieben, dich von deinem hohen Ross fallen zu sehen."]
        ]],
        ["kliste", "Beispiele für Spannung", [
          "Eine Kind-Eltern-Beziehung, in der einer auf den anderen eifersüchtig ist.",
          "Ein Streit um die Rangordnung.",
          "Verborgene Verachtung, die sich seit Ewigkeiten aufgestaut hat.",
          "Stolz, der eine Reisende oder einen Reisenden glänzen lässt, während sich die anderen in ihrem Schatten fühlen.",
          "Anziehung, heimlich und tief. Sie färbt jede Interaktion mit dem Objekt deiner Anziehung.",
          "Misstrauen. Etwas, das eine andere Reisende oder ein anderer Reisender tut, kränkt dich zutiefst. Du kannst dich kaum zurückhalten, sie oder ihn jedes Mal deswegen anzuschreien.",
          "Wirtschaftliche Unterschiede.",
          "Eine gemeinsame, ungelöste traumatische Erfahrung. Solange nicht alle Beteiligten das Trauma anerkennen und verarbeiten, ist es zwischen euch bestenfalls unbehaglich.",
          "Religiöse oder politische Differenzen. Nicht umsonst sagen die Amerikaner, man solle nie über Religion oder Politik sprechen.",
          "Neugier. Sie hat mehr getötet als nur die Katze.",
          "Ein Geheimnis. Etwas, das du niemanden wissen lassen kannst. Vielleicht persönlich. Vielleicht illegal. Vielleicht hast du es dir in deinem Kopf aufgebaut. Aber es verfolgt dich jeden Tag.",
          "Schuld.",
          "Angst."
        ]],
        ["h", "Spannung abbauen"],
        ["p", "Wenn du und eine andere Reisende oder ein anderer Reisender in einer Situation ohne unmittelbare Bedrohung miteinander redet oder streitet, könnt ihr Spannung abbauen. Ihr beide senkt eure Spannung gegenüber der anderen Person um 1, bis höchstens auf 0. Wenn du Spannung abbaust, gewinnst du außerdem einen Punkt Hoffnung zurück. Mehr dazu auf S. 86."],
        ["h", "Spannung verändern"],
        ["p", "Abgesehen vom Abbau von Spannung können die Spannungswerte jederzeit erhöht oder gesenkt werden, je nachdem, was im Spiel geschieht. Du kannst Spannung sogar zwischen den Sitzungen ändern, wenn du entscheidest, dass deine Reisenden begonnen haben, anders über jemanden zu denken, oder etwas abseits der Bühne geschehen ist. Die Spielleitung hat bei allen Änderungen der Spannung das letzte Wort."],
        ["p", "Änderungen der Spannung müssen sich in dem widerspiegeln, was im Spiel geschieht. Wenn du eine Beziehung mit Spannung 0 zu jemandem hast und plötzlich einen großen Streit anfängst, ist es in Ordnung, die Spannung sofort auf 2 zu erhöhen. Umgekehrt kann die Spielleitung, wenn es in deinen Interaktionen mit einer anderen Reisenden oder einem anderen Reisenden keine Spannung gibt, deine Spannung auf null ändern."],
        ["bsp", [
          ["Ethan (Reisender 3):", "Hey, bevor wir anfangen, wollte ich meine Spannung gegenüber dir ändern. In Ethans Vorstellung hast du ihn beim letzten Mal richtig enttäuscht, als du weggelaufen bist. Also ändere ich sie von 0 auf 1. Ich bin noch nicht bereit, danach zu handeln. Ist das okay?"],
          ["Fernando (Reisender 1):", "Auf jeden Fall. Ich denke, ich lasse meine Spannung gegenüber dir bei 0, denn ich glaube, Behrang hat die Situation nicht auf dieselbe Weise gedeutet. Er denkt, wir halten uns immer noch gegenseitig den Rücken frei. Das könnte interessant werden."]
        ]],
        ["kasten", "Spannungsdreiecke", [
          "Eine komplexere, aber lohnendere Möglichkeit, Beziehungen zu beschreiben, besteht darin, Spannungsdreiecke zu erschaffen. Das bedeutet, dass eine Reisende oder ein Reisender Spannung mit zwei anderen hat, und zwar so, dass sie Konflikte oder Verwirrung zwischen den beiden anderen auslösen.",
          "Mit Spannungsdreiecken wirkt sich alles, was in einer Szene mit Schwerpunkt auf Beziehungen geschieht, in irgendeiner Weise auf alle anderen Reisenden aus. Das macht das Spiel noch interessanter für Spielende, deren Reisende in der aktuellen Szene nicht anwesend sind."
        ]]
      ]},
      {id: "entwickeln", titel: "Reisende entwickeln", s: 65, bloecke: [
        ["p", "NACH JEDER SPIELSITZUNG findet in der Gruppe eine Nachbesprechung statt. Wenn dafür keine Zeit ist, beginnt stattdessen die nächste Sitzung mit der Nachbesprechung – sie dient dann als Zusammenfassung der vorherigen Sitzung. Bei der Nachbesprechung erzählt jede spielende Person der Reihe nach der Gruppe, wie ihre Reisenden während der Sitzung mindestens einmal nach ihrem Traum oder ihrer Schwäche (oder beidem) gehandelt haben. Lasst die anderen Spielenden und die Spielleitung darüber diskutieren und Kommentare abgeben."],
        ["h", "Steigerungswurf"],
        ["p", "Wenn der Tisch zustimmt, dass du deinem Traum oder deiner Schwäche gefolgt bist (die Spielleitung hat das letzte Wort, wenn sich der Tisch nicht einigen kann, und sollte großzügig sein), wählst du eines der vier Attribute, das am besten widerspiegelt, was du in der Sitzung gelernt hast – über dich selbst, eine andere Reisende oder einen anderen Reisenden oder die Welt."],
        ["p", "Würfle dann einen Würfel – ist das Ergebnis höher als dein aktueller Wert, steigt das Attribut um eine Stufe. Die Steigerung des Attributs kann auch deine maximale Gesundheit oder Hoffnung erhöhen (bei gleichzeitiger gleichgroßer Erhöhung der aktuellen Gesundheit oder Hoffnung). Ist das Ergebnis gleich oder niedriger als der Attributwert, erhältst du stattdessen ein neues Talent. Du kannst jedes auf S. 56 aufgeführte Talent wählen oder sogar ein neues erschaffen, musst aber begründen, wie du es aufgrund von etwas, das im Spiel geschehen ist, gelernt hast."],
        ["h", "Die Schwäche überwinden"],
        ["p", "Irgendwann während der Reise kannst du deine Schwäche überwinden – indem du dich ihr auf eine so grundlegende Weise stellst, dass es deine Reisenden für immer verändert. Du erklärst das einfach bei der Nachbesprechung nach der Sitzung. Wenn der Tisch zustimmt (auch hier hat die Spielleitung das letzte Wort), darfst du sofort drei Steigerungswürfe wie oben machen. Deine Schwäche wird dann gestrichen."],
        ["p", "Nachdem du deine Schwäche überwunden hast, kannst du deine Reisenden nicht weiter verbessern. Deshalb solltest du damit warten, deine Schwäche zu überwinden, bis die Reise schon ziemlich weit fortgeschritten ist – aber nicht zu spät, denn dann hast du von den letzten Verbesserungen nicht mehr viel. Nach dem Überwinden deiner Schwäche sollten noch mindestens ein oder zwei Spielsitzungen der Reise übrig sein. Frage die Spielleitung, wenn du unsicher bist."],
        ["h", "Weitere Reisen"],
        ["p", "Die meisten Reisenden werden nur in einer einzigen Reise gespielt. Im seltenen Fall, dass du dieselben Reisenden in einer neuen Reise spielst, wähle zu Beginn eine neue Schwäche, die widerspiegelt, wer die Reisenden jetzt sind."]
      ]}
    ]
  };
})();
