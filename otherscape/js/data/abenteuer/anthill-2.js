OS_ADV_PART("anthill", [

{ id:"sl-ueberblick", titel:"SL-Überblick: Wege, Risiken, Entscheidungspunkte", gruppe:"Finale", bloecke:[
  {t:"p", x:"Diese Übersicht bündelt alles Verstreute aus den Ortsabschnitten, damit du am Tisch schnell nachschlagen kannst. Die Grundidee des Jobs: Tokoyo ist nicht feindselig, sondern *gleichgültig und einladend*. Gewalt wird mit Aufnahme in den Traum beantwortet, nicht mit Rache."},
  {t:"tabelle", titel:"Wege nach unten und was sie kosten", kopf:["Weg","Voraussetzung","Risiko / Folge"], zeilen:[
    ["Überweisung am Patienteneingang","Ärztliche Referral","Ohne Wachbegleitung in den Outer Ring; Ari-Psychologen werben aktiv"],
    ["Rekrutierungsliste","Akinosuke Recruiter im Nachtclub überzeugen","Jedes Wachteam hat einen Ari-Wächter, der die Liste kennt; Begleitung in den Inner Ring; Gefahr echter Überzeugung"],
    ["Notausgang","Aufklärung (one-way steel door, overgrowth), alarm system ausschalten","Pheromonspuren: Hen'i Ants; Fehlschlag löst Hausalarm aus"],
    ["Zen Garden (Loch im Dach)","Keyed Wristband für die Türen","Ständig beobachtet von Patienten und Personal"],
    ["Aufzug im Sicherheitsbüro","Implantatsignal nicht fälschbar; Schachttüren per Wartungspriorität (Cyberspace) oder Gewalt","Gewalt zieht Aufmerksamkeit an"],
    ["Dreampod Chambers (2. Stock)","Pod-System durchschauen, evtl. Biodaten fälschen","Echtes Einschlafen = deep-sleep-5; Lieferröhren aufbrechen setzt das Untergrundsystem auf Standby"]
  ]},
  {t:"tabelle", titel:"Verbindung zum Traum", kopf:["Methode","Lag","Story Tags / Status","Zusätzliches Risiko"], zeilen:[
    ["Gefangen (enter-the-dreamscape-5)","–","frustrated-4, liking-it-here-4 oder a-bit-rusty-4 (Wahl)","Kann kein torii gate rufen; Körper in einer Pod"],
    ["AR / einfache Bildschirme","lag-3 (nicht reduzierbar)","–","Mitigation gegen digitale Agenten normal möglich"],
    ["Eigenes Harnessing","lag-1","too real (nicht burnbar)","Erschwert Mitigation im Traum"],
    ["Leere Pod","kein Lag","too real, feels right at home (nicht burnbar)","long-term-brain-damage-1 nach ca. 30 Minuten"]
  ]},
  {t:"tabelle", titel:"Wichtige Statuses auf einen Blick", kopf:["Status","Ursache"], zeilen:[
    ["stun-4","Tokoyo-Taser auf Ziele ohne Cyberware"],
    ["enter-the-dreamscape-3","Tokoyo-Taser auf Ziele mit Cyberware; Ameisen im Clinic Cyberspace"],
    ["enter-the-dreamscape-5","Gefangen im Traum"],
    ["deep-sleep-5","Dreampod"],
    ["dissociated-5","Gewaltsames Trennen vom Neurallink oder durchs torii gate stoßen"],
    ["dream-longing-5","Gewaltsam aus dem Paradies gerissen ohne Überzeugung"],
    ["dream-longing-3","Dr. Haraguchi, die freiwillig geht"],
    ["lost-4","Optional: SC erscheinen getrennt im Traum"],
    ["out-of-reach-2","Von Mob ins Dorf gezogener Träumer"]
  ]},
  {t:"h", x:"Tipps zur Leitung"},
  {t:"liste", items:[
    "**Tokoyo reagiert nicht wie ein Gegner:** Solange die erste Decree erfüllt ist (der Hivemind ist geschützt), folgen alle der zweiten (den Hivemind verbessern). Spiele Wachen daher freundlich-entrückt, selbst wenn sie zutasern.",
    "**Über der Erde eskaliert durch Gewalt nichts:** Ersatzkultisten kommen endlos, solange die Crew oben bleibt; erst der Cyberspace-Alarmschalter beendet das. Nutze das als Zeitdruck, nicht als Todesfalle.",
    "**Unter der Erde zählt jeder erkannte Zugriff:** Erster Treffer = Standby (Escalating the Scene), zweiter = Ant-Bot. Zähle das sichtbar mit der Uhr aus dem Sicherheitsabschnitt.",
    "**Cyberspace ist ein Lehrstück:** Sandaiji und Tokoyo sind dort nicht schlagbar. Lass die Crew Infos holen und sich zurückziehen; die Ameisen regenerieren in jedem Establish.",
    "**Die Doktorin ist kein Beutestück:** Sie ist glücklich, stolz und liebt ihre Familie draußen. Rollenspielerisch lässt sie sich über Erinnerung an Beruf und Angehörige (auch den Onkel Haraguchi Ryo) gewinnen, nicht über Argumente über VR.",
    "**Kidnapping ohne Überzeugung ist möglich, aber teuer:** Gewalt = dissociated-5 plus dream-longing-5; Überzeugung = nur dream-longing-3 und Monate Therapie. Zeige die Kosten deutlich.",
    "**Der Ant-Bot jagt nur in der Anthill**, nie auf der Straße. Eine Flucht ins Freie beendet ihn also."
  ]},
  {t:"uhr", name:"Kultisten-Nachschub (über der Erde)", segs:4, x:"Beschreibt, wie lange die Crew oben noch Zeit hat, bevor Tokoyo erhöhten Druck aufbaut, etwa den Kageari. Zähle nach erheblichem Schaden an Ausrüstung oder Personen hoch.", stufen:["Segment 1: Guards (Scale 1) tauchen auf","Segment 2: Nichtkämpfer mit Tasern, harm:1","Segment 3: Ersatzkultisten mit verschiedenen Power Sets","Segment 4: Kageari wird materialisiert"]}
]}

]);
