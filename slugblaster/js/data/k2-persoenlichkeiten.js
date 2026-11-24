/* SLUGBLASTER – Persönlichkeiten (Kern für Folge-Tafel; Schritt 5 ergänzt Text, Eigenschaften, Vibes, Randnotizen)
   haltung: b = Boost-Würfel, k = Kick-Blitze (laut Attitude-Kasten im Buch); b:"inf" = +1W6 auf alle Aktionen (The Chill) */
var SB_PERS = [
 {id:"grit", t:"The Grit", p:42, farbe:"#2fb996", haltung:{b:3, k:1}, styleBonus:"+1 Style nach Runs, in denen du Zähigkeit oder Fokus zeigst.",
  moment:{t:"Schuften", k:[2,"style"], x:"Eine Szene, in der du hart arbeitest, sorgfältig vorbereitest, geduldig wartest, hinfällst und wieder aufstehst usw. +1 Eigenschaft."},
  bogen:{t:"Grit-Bogen", x:[
   {t:"Ein Ziel", k:[1,"style"], x:"Eine Montage, in der du auf ein Ziel hinarbeitest. Einen unmöglichen Trick in der Einfahrt üben, etwas bauen, an das niemand glaubt, Kleingeld im Glas sparen usw. +1 Slam (*müde, voller Blasen* usw.)"},
   {t:"Rückschläge", k:[2,"style"], x:"Die Arbeit wird härter, der Fortschritt langsamer, und jetzt regnet es auch noch. Dein Ziel fühlt sich weiter weg an als am Anfang, aber du machst weiter. +1 Slam. Was denkt die Crew?"},
   {t:"Aufgeben", k:[4,"trouble"], x:"Der Moment, in dem du endgültig aufgibst. Warum? Was hat dich gebrochen? Wen hast du enttäuscht, außer dich selbst? +1 Doom, +1 Bruch."},
   {t:"Durchhalten", k:[3,"style"], x:"Du stehst wieder auf und machst weiter. Das tust du immer. Wer hat an dich geglaubt? −1 Doom, −1 Bruch, +2 Legacy, +1 Eigenschaft."}]}},
 {id:"guts", t:"The Guts", p:44, farbe:"#f175ad", haltung:{b:1, k:3}, styleBonus:"+1 Style nach Runs, in denen du Mut oder Risikobereitschaft zeigst.",
  moment:{t:"Großspurig", k:[2,"style"], x:"Eine Szene, in der du einen Rivalen anpöbelst, deinen eigenen Rekord brichst, deine eigenen Videos kommentierst, zu spät auftauchst oder einfach schnell und laut lebst. +1 Eigenschaft."},
  bogen:{t:"Guts-Bogen", x:[
   {t:"Rampenlicht", k:[3,"style"], x:"Du wirst von einem Sponsor entdeckt, zum Publikumsliebling oder für eine Auszeichnung ausgewählt. Du bist dabei nicht bescheiden. +1 Legacy, +1 Bruch."},
   {t:"Star-Power", k:[2,"style"], x:"Mehr Aufmerksamkeit, mehr Angebote. Es steigt dir zu Kopf. Wie behandelst du deine Entourage-Crew? +1 Legacy, +1 Bruch."},
   {t:"Alleingang", k:[4,"trouble"], x:"Du hast einen großen Streit mit deiner Crew und entscheidest dich für dich statt für sie. Es nagt an dir. +1 Bruch. +1 Doom. +1 Slam (*Schuld, Wut* usw.)"},
   {t:"Das I in Team", k:[1,"style"], x:"Du lehnst ein riesiges Angebot ab, stellst etwas richtig oder tauchst im letzten Moment auf, um zu helfen, und opferst dafür dein eigenes Legacy. −1 Legacy, −1 Doom, −2 Brüche, +7 Style für deine Crew und +1 Eigenschaft."}]}},
 {id:"smarts", t:"The Smarts", p:46, farbe:"#866baf", haltung:{b:2, k:1}, styleBonus:"+1 Style nach Runs, in denen du Neugier oder Kreativität zeigst.",
  moment:{t:"Forschung", k:[2,"style"], x:"Eine Szene, in der du erkundest, liest, ein Video analysierst, kreativ bist, etwas Neues ausprobierst, Portalrouten planst usw. +1 Eigenschaft."},
  bogen:{t:"Smarts-Bogen", x:[
   {t:"Inspiration", k:[1,"style"], x:"Eine große Idee trifft dich, nagt an dir und flutet dich mit Adrenalin. Wissen wir schon, welche? Du lässt alles stehen und liegen, um daran zu arbeiten. Wähle einen Teamkameraden, der dabei war."},
   {t:"Ergebnisse", k:[2,"style"], x:"Die Idee zeigt Potenzial. Ist es ein Gerät, ein neuer Trick, ein Portal-Durchbruch oder was? +1 Legacy. Wähle einen Teamkameraden, der dabei ist, wenn du es testest."},
   {t:"Unbeabsichtigte Folgen", k:[4,"trouble"], x:"Die Idee geht schief, löst eine Kettenreaktion aus oder gerät in falsche Hände. Was denkt die Crew? +1 Doom oder +1 Bruch."},
   {t:"Volle Erkenntnis", k:[3,"style"], x:"Und plötzlich fügt sich alles zusammen. Wer oder was hat dir geholfen, das fehlende Teil zu sehen? −1 Doom oder −1 Bruch, +1 Legacy, +1 Eigenschaft."}]}},
 {id:"heart", t:"The Heart", p:48, farbe:"#ec008c", haltung:{b:1, k:2}, styleBonus:"+1 Style nach Runs, in denen du Leidenschaft oder Empathie zeigst.",
  moment:{t:"Hingabe", k:[2,"style"], x:"Sieh dir die Fotos deiner Crew an, träume von Portalen, spüre den Wind im Gesicht beim Skaten. Zeig uns, was dir wichtig ist und wie sehr. +1 Eigenschaft."},
  bogen:{t:"Heart-Bogen", x:[
   {t:"Techtelmechtel", k:[2,"style"], x:"Du beginnst eine besondere Beziehung mit jemandem aus einer anderen Fraktion, einem Teamkameraden oder jemand anderem. +1 Legacy."},
   {t:"Gefühle bekommen", k:[1,"style"], x:"Die Beziehung blüht auf, aber es wird auch komplizierter. Was steht auf dem Spiel? Welcher Teamkamerad missbilligt es? +1 Legacy, +1 Bruch."},
   {t:"Wir oder sie", k:[4,"trouble"], x:"Ein Missverständnis, ein Interessenkonflikt, ein Verrat oder eine chaotische Trennung verletzt dich und deine Crew. +1 Doom, −1 Legacy, +1 Bruch."},
   {t:"Liebe überwindet alles", k:[3,"style"], x:"Du machst es wieder gut, beweist deine Loyalität, sagst die Wahrheit und tust das Mutige. Eure Bindungen sind stärker als je zuvor. −1 Doom, −2 Brüche, +1 Legacy, +1 Eigenschaft."}]}},
 {id:"chill", t:"The Chill", p:50, farbe:"#008496", haltung:{b:"inf", k:0}, styleBonus:"+1 Style nach Runs, in denen du Leichtigkeit oder Flow zeigst.",
  moment:{t:"Einfach chillen", k:[2,"style"], x:"Du bist einfach du. Videospiele spielen, schlafen, Chips essen, Schmetterlinge jagen, was auch immer. Zeig uns, wie sorglos du bist. +1 Eigenschaft."},
  bogen:{t:"Chill-Bogen", x:[
   {t:"In einen Plot geraten", k:[1,"style"], x:"Du belauschst etwas, wirst verwechselt, in die falsche Schlange geschoben usw."},
   {t:"Glücksfügung", k:[2,"style"], x:"Dein Moment des dummen Glücks zahlt sich weiter aus, wird aber auch komplexer. Was denkt die Crew? +1 Legacy."},
   {t:"Zu tief drin", k:[4,"trouble"], x:"Du fliegst auf, wirst in die Ecke gedrängt, wirst bei einer Veranstaltung panisch Mrs.-Doubtfire-mäßig erwischt und steckst einfach viel zu tief drin. +1 Doom. Wähle einen Teamkameraden, dem es auffällt."},
   {t:"Läuft irgendwie", k:[3,"style"], x:"Und trotzdem landest du wie üblich auf den Füßen. Das Foto wird zum Meme, das Geld war doch noch im Rucksack, dem CEO gefiel deine Initiative usw. −1 Doom, +1 Legacy, +1 Eigenschaft."}]}}
];
function sbPers(id){ for(var i=0;i<SB_PERS.length;i++) if(SB_PERS[i].id===id) return SB_PERS[i]; return SB_PERS[0]; }
