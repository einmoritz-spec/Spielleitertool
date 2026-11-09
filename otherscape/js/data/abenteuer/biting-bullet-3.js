OS_ADV_PART("biting-bullet", [
  {id:"tisch-ablauf", gruppe:"Tischhilfen", titel:"Tischhilfe: Ablauf beider Varianten", bloecke:[
    {t:"p", x:"Diese Sektionen fassen den Abenteuerinhalt als Arbeitsübersicht zusammen, damit du am Tisch nicht blättern musst. Sie enthalten nichts, was nicht aus den Kapiteln davor folgt, nur anders sortiert."},
    {t:"tabelle", titel:"Beide Varianten im Vergleich", kopf:["","Crew verteidigt","Crew greift an"], zeilen:[
      ["Auftraggeber","Chrysanthemum (Sicherheitsberater, halber Lohn im Voraus, Rest bei Ankunft aller Stücke)","Rivalisierende Firma (zahlt pro gestohlenem Gemälde, ggf. verdeckt mit Fälschungen) oder eigene Motive der Crew"],
      ["Nightclouders sind","Entlassene Maboroshi-Mitarbeiter, die Baku verehren und die Daten zurückholen wollen","Aktive Maboroshi-Sicherheit (künftig Chrysanthemum-Angestellte), die die Daten fanatisch bewachen"],
      ["Wissen der Crew","Volle Einweisung (Layout, Abwehr, Fähigkeiten); Vista Wrap Generator gesperrt","Teilwissen: einige Vista Wraps, Waggoninhalte, Rollen von Attendants und Nightclouders, grober Fahrplan; Storage-Waggon am leichtesten"],
      ["Vorbereitung","Create-Probe für Chrysanthemum-Ausrüstung (Tags bleiben nach dem Job, Weakness legt Chrysanthemum fest)","Prep Sequence oder Start in medias res mit Rückblenden (Metro S. 125); Fluchtstrategie planen"],
      ["Station Maboroshi","Crew beaufsichtigt Verladung der neun Gemälde","Nur Zwischenszene oder Live-Feed (Domain zu stark geschützt)"],
      ["First Leg","Kraken-Ablenkung, drei Späher infiltrieren","Zusteigen, Hülle durchbrechen, zur Galerie vorrücken; Timer arrive:5"],
      ["Dangan Central","Wartung, zweiter Infiltrator (Hacker), Uhr servicing-complete:3","Verstecken oder von der Station aus einbrechen (infiltrate:5, intrusion-countermeasures-3); Gemälde sind nicht stehlbar"],
      ["Second Leg","Hauptangriff der Nightclouders mit Schattenbestien, Vormarsch-Stufen","Zweiter Anlauf oder erste Chance; Timer arrive:5 neu, am Ende Chrysanthemum Station"],
      ["Baku-Auftritt","Wenn die Nightclouders Gemälde von den Gestellen bewegen","Wenn die PCs Gemälde in den Händen halten, vor dem Abladen"],
      ["Besonderheit","Option: trusted-3 für die Crew als Verrat-Chance","Wird die Crew entdeckt: alle Verteidiger kommen (Nightclouders Scale 2, Attendants Scale 2)"]
    ]},
    {t:"tabelle", titel:"Scale-Übersicht", kopf:["Objekt","Scale"], zeilen:[
      ["Waggon","1"],["Ganzer Zug","2"],["Zug samt Vista Wraps","3"],
      ["Attendants im Passagierwagen","1"],["Attendants in Dangan Central","1"],["Nightclouder-Wachen im Passagierwagen (Angriffsszenario)","1 (drei Stück)"],
      ["Nightclouders in Dangan Central (Angriffsszenario)","2"],["Nightclouder-Vorhut (Verteidiger-Variante, First Leg)","1 (drei Agenten)"],
      ["Nightclouders Hauptgruppe im Second Leg","2"],["Nightclouder-Reittiere zum Auffangen der Gemälde","1"],
      ["Datastream Kraken / jedes Tentakel / alle Tentakel","2 / 1 / 2"],["Erste Hybriden beim Auftritt","1"],
      ["Alarm im Angriffsszenario: Nightclouders und Attendants","je 2"],["Chrysanthemum-Firewall bei Aussperrung (firewalled-5)","4"]
    ]}
  ]},
  {id:"tisch-limits", titel:"Tischhilfe: Limits, Uhren und Statuses auf einen Blick", bloecke:[
    {t:"tabelle", titel:"Alle Zähler und Limits", kopf:["Name","Wert","Zweck"], zeilen:[
      ["take-over","5","Vista Wrap Generator hacken und Superuser-Rechte erlangen"],
      ["security-scan","4","Versteckte Nightclouder-Späher im Generator-Waggon aufspüren"],
      ["servicing-complete","3","Zeit für den Halt in Dangan Central (Verteidiger-Variante)"],
      ["arrive","5","Zeit bis zur Ankunft (Dangan Central im First Leg, Chrysanthemum im Second Leg)"],
      ["derail","4","Zug entgleist nach schweren Schäden"],
      ["infiltrate","5","Einbruch über die Station Dangan Central (Vereinfachung)"],
      ["intrusion-countermeasures","3","Gegenmaßnahmen der Station (Vereinfachung)"],
      ["expose","–","Hacker enttarnen (Alternative zum Quick Outcome)"],
      ["destroy-tentacle","4","Je Tentakel des Datastream Kraken"]
    ]},
    {t:"tabelle", titel:"Wichtige Statuses und Tags im Abenteuer", kopf:["Status/Tag","Wo"], zeilen:[
      ["densely-tangled-1 bis -4","Hülle je Waggon"],
      ["encryption-2","Waggontüren (jede Öffnung braucht Quick Outcome)"],
      ["alert-2","Nightclouders und Dangansen-IC nach einem früheren, gescheiterten Angriff"],
      ["stealthy-3","Nightclouder-Späher (Consequence-Vorgabe)"],
      ["trusted-3","Belohnung für erfolgreiche Verteidigung bis Dangan Central"],
      ["unstable-2","Consequence beim Heranfahren neben den Zug"],
      ["firewalled-5 (Scale 4)","Chrysanthemum-Domain bei aktiver Bedrohung"],
      ["Sōhei IC, Naginata 2L8 Special","Chrysanthemum- oder Nightclouder-Hilfe (Metro S. 129)"],
      ["Intrusion Countermeasure AI","Konduktor-Attendant, Metro S. 308"]
    ]}
  ]},
  {id:"tisch-waggons", titel:"Tischhilfe: Waggons und Orte kompakt", bloecke:[
    {t:"tabelle", titel:"Waggons", kopf:["Waggon","Inhalt","Wer hier ist","Besonderheit"], zeilen:[
      ["Lok","Automatisiert, optional Harnessed-Ingenieur (derzeit keiner)","Niemand","Scale des ganzen Zugs: 2"],
      ["1: Karakuri Attendant Storage","Zwei Reihen verhüllter, inaktiver Attendants an der Decke, Wartungs-Workstations links","Aktive Attendants nur bei Bedrohung","Keine Außentüren, kleines Fenster; Verstecke und Attendant-Code; Neuer Attendant: Threat Surren, Consequence Present a New Challenge"],
      ["2: Passagiersitze","Erste Klasse für sechs Passagiere, Gepäckfächer, Environment Controller, Privacy Module je Sitz","Angriff: drei Nightclouders (Scale 1); beide Varianten: einige Attendants (Scale 1)","Attendants behandeln Verteidiger wie Gäste; Module sind aus, aber aktivierbar"],
      ["3: Vista Wrap Generator","Maschinen, Kontrollstationen, Bildschirme, Regler, enger Gang","Attendants kommen oft vorbei; Späher (Verteidiger-Variante) in den Schränken","take-over:5 für Kontrolle; Zugang verboten; behindert Bewegung; Drachengeister außen"],
      ["4: Art Gallery","Neun Gemälde links, Panoramafenster rechts, offener Holzboden","Wartende Attendants (Dangan Central)","Nachtigallenboden erschwert Schleichen; Gemälde-Verschlüsselung zerfällt; Ort des Baku-Auftritts"]
    ]},
    {t:"hinweis", titel:"Nachtigallenboden", x:"Jeder Schritt auf den losen Brettern ist hörbar. Lass Schleich-Versuche in der Galerie nicht ohne Gegenmaßnahme gelingen (Konsequenz: Alarm, Stealth-Status senken oder Wachen anlocken)."},
    {t:"hinweis", titel:"Maschinen als Deckung im Generator-Waggon", x:"Die Maschinen bieten viele Nischen als Versteck, behindern aber Bewegung und Kampf. Nutze beides: Verstecken ist leicht, Durchkommen schwer."}
  ]},
  {id:"tisch-vista", titel:"Tischhilfe: Vista Wraps einsetzen", bloecke:[
    {t:"p", x:"Pro Vista gilt: Sie ist gerichtet gegen einen Angreifertyp, hat zwei Tags (die als Hindernis oder Bonus wirken) und eine oder mehrere Consequences. Wähle passend zur Crew-Taktik, damit die Wrap wirklich konterkariert."},
    {t:"tabelle", titel:"Zuordnung Angreifertyp zu Vista", kopf:["Crew-Taktik","Passende Vista","Typische Consequence"], zeilen:[
      ["Schnell und wendig, kurze Schnitte","Arctic Winter","Eis auf allen Flächen: slippery-3, frostbite-3 oder ice-encased-3"],
      ["VR-Konstrukte, Avatare, Programme","Entropy Storm","glitched-4"],
      ["Fliegen, landen auf dem Zug oder hängen unter oder über ihm","Jungle","distracted-3 oder unstable-3 durch Insekten; wrecked-3 bei Fahrzeugen"],
      ["Rohe Gewalt, Brute Force","Lava Fields","severe-burns-3 oder zwei Waffen- und Rüstungs-Tags verbrennen"],
      ["Heimlichkeit, falsche Berechtigungen","Wild West","gunshot-wound-2 durch Reiter; ein Tag verbrennen (falsche Zugangsdaten)"]
    ]},
    {t:"liste", items:[
      "**Ablauf:** Der Zug erkennt eine Gefahr, die Vista flackert (Threat). Wird nicht eingegriffen, wechselt sie zur passenden Gegen-Vista (Consequence).",
      "**Verhindern:** nur durch vorheriges Hacken des Generators im dritten Waggon (take-over:5).",
      "**Wer die Kontrolle hat,** kann Effekte gezielt auf Orte außerhalb des Zugs richten: Späher, Dangansen-Sicherheit oder die Crew.",
      "**Innen ist man sicher,** auch bei Löchern in Dach oder Wand. Im Bahnhof sind die Wraps aus.",
      "**Tipp:** Wenn die Crew eine ungewöhnliche Mischtaktik fährt, wechsle zur Vista, die den Teil trifft, der sich am meisten exponiert."
    ]}
  ]},
  {id:"tisch-attacken", titel:"Tischhilfe: Angriffs- und Verteidigungsabläufe", bloecke:[
    {t:"h", x:"Verteidiger: Schritt für Schritt"},
    {t:"liste", items:[
      "**1. Vorbereitung:** Create-Probe für Chrysanthemum-Ausrüstung, Dangansen-Hologramm nur auf Nachfrage.",
      "**2. Maboroshi Station:** Verladung der neun Gemälde beaufsichtigen, Zug und Eleganz beschreiben.",
      "**3. First Leg:** Datastream Kraken als Ablenkung, drei Späher landen aufs Dach und infiltrieren den Generator-Waggon. Hinweise auf die Späher: schneller Sieg, Scannen, Blick nach draußen, Dachschaden.",
      "**4. Dangan Central:** Maler-Attendant verstärkt die Kompression; zweiter Infiltrator (Hacker) an Bord; servicing-complete:3 läuft; Crew kann Späher suchen (security-scan:4), Hacker jagen, Verteidigung aufbauen oder die Galerie studieren.",
      "**5. Second Leg:** Hauptangriff mit fliegenden Schattenbestien; neun Vormarsch-Stufen; Hacker und Späher kehren zurück; Attendants helfen \"helfend\"; ggf. derail:4.",
      "**6. Baku-Auftritt:** Wenn Gemälde bewegt werden, erscheinen ein paar Hybriden (Scale 1) und greifen sofort an.",
      "**7. Ankunft:** Bei verbliebenen Hybriden oder Infiltratoren sperrt Chrysanthemum die Türen (firewalled-5, Scale 4)."
    ]},
    {t:"h", x:"Angreifer: Schritt für Schritt"},
    {t:"liste", items:[
      "**1. Vorbereitung:** Teilwissen auswerten, Fluchtweg planen (Fahrzeug, Waggon abkoppeln oder Gemälde markieren und über Bord werfen), Timing wählen (First Leg oder Dangan Central; Station ist stärker geschützt).",
      "**2. Boarding:** Pilot Quick Outcome (unstable-2 als Consequence), jeder springt (Quick Outcome oder skaliert für alle).",
      "**3. Hülle:** Quick Outcome zum Durchbrechen, Weaken senkt den tangle-Status, Ranken verstricken, Drachengeister (Waggon 3 und 4) beißen.",
      "**4. Im Zug:** Türen öffnen (Quick Outcome, encryption-2), Wachen im Passagierwagen (drei Nightclouders), Attendants, Nachtigallenboden.",
      "**5. Timer:** arrive:5 mit arriving-1 bei Warten oder Rückzug; bei vollem Limit Halt in Dangan Central (Verstecken, 1 bis 2 Runden Entdeckungsgefahr).",
      "**6. Galerie:** Gemälde greifen; Baku-Auftritt und Generalalarm; Abladen und Flucht.",
      "**7. Second Leg:** Wiederholung mit zurückgesetztem arrive; Chrysanthemum Station als Falle (Sōhei-IC-Kollektiv, Naginata 2L8).",
      "**Alarm:** Entkommt ein Wächter, kommen alle Verteidiger (Nightclouders Scale 2, Attendants Scale 2)."
    ]}
  ]},
  {id:"tisch-consequences", titel:"Tischhilfe: Consequence-Vorschläge und Szenenwürze", bloecke:[
    {t:"p", x:"Alle Vorschläge unten ergeben sich aus den Threats und Consequences der Profile oder den Prozeduren des Buchs, nur nach Situation gruppiert."},
    {t:"tabelle", titel:"Nach Situation", kopf:["Situation","Consequence-Ideen"], zeilen:[
      ["Heimliches Eindringen","Entdeckung durch Attendant-Suchlauf: zwei Tiers Stealth oder Hiding abziehen; Nightclouder bemerkt Störung; Escalate the Situation; Nachtigallenboden verrät die Position"],
      ["Kampf gegen Attendants","gunshot-wound-2, bleeding-2, spring-bound-3, crash-5 durch Hinauswurf, Scale +1 durch Glockenläuten"],
      ["Kampf gegen Nightclouders","slashed-3, gunshot-wound-3, pinned-down-2, terrified-2 vor Aktionen im Nahbereich, terrified-3, bruised-2 durch Schwerkraftwechsel, awkward angles, Waggon abgeriegelt"],
      ["Hacking und Wartung","glitched-2, tagged-2, distracted-2, verdeckte Tag-Sabotage, which-one-is-it-3 beim Hacker"],
      ["Hülle und Außenseite","densely-tangled auf den Einbrecher, wounded durch Drachengeister, Vista-Wechsel, unstable-2 beim Anfahren"],
      ["Krakenangriff","restrained-1 und bruised-1 pro verbleibendem Tentakel, disoriented-2 für alle im Zug, glitching-1 für den Zug"],
      ["Baku Hybrids","cornered-3, injured-3, hallucinating-3, drowsy-3, Burn eines Hoffnungs- oder Mythos-Tags, neue Hybriden oder Scale +1, Power-Wechsel"]
    ]},
    {t:"hinweis", titel:"Wenn die Crew zu leicht gewinnt", x:"Verteidiger-Variante: Hacker zurückkehren lassen, Späher aus unerwarteter Richtung angreifen lassen, Attendants \"helfen\" lassen, Hybriden zum schlechtesten Zeitpunkt erscheinen lassen, derail:4 setzen. Angreifer-Variante: Sōhei IC einsetzen, Generalalarm auslösen, Hybriden einführen."},
    {t:"hinweis", titel:"Wenn die Crew zu schnell scheitert", x:"Die Nightclouders sind in beiden Varianten nicht auf Töten aus, sondern auf Erreichen der Galerie (Verteidiger-Variante) beziehungsweise auf Verteidigen (Angreifer-Variante). Lass sie Rückzugsoptionen offen, die Hybriden das Chaos nutzen oder die Crew sich mit den Nightclouders gegen die Bestien verbünden."}
  ]},
  {id:"tisch-baku-npc", titel:"Tischhilfe: Gegnerrollen und Motive", bloecke:[
    {t:"tabelle", titel:"Was jede Partei will", kopf:["Partei","Ziel","Verhalten"], zeilen:[
      ["Karakuri Attendants","Service und Sicherheit im Sinne des Zugs","Freundlich zu Verteidigern und überzeugend Getarnten, behindern aber mit Höflichkeit; bei Bedrohung töten sie präzise"],
      ["Nightclouders (Verteidiger-Variante)","Baku-Daten stehlen, Mythos verwirklichen","Hauptangriff mit Reittieren, Späher und Hacker als Vorbereitung; weichen nicht zurück"],
      ["Nightclouders (Angreifer-Variante)","Daten beschützen, nahe an der Source bleiben","Wachen im Passagierwagen und in Dangan Central; Alarm, Rückzug, Gegenangriff; bei Bedarf Sōhei IC"],
      ["Failed Baku Hybrids","Fressen: Hoffnungen, Träume, Fleisch","Greifen wahllos an; wechseln Köpfe und Körper (Powers)"],
      ["Chrysanthemum","Daten sicher geliefert","Sperrt bei Bedrohung die Station; zahlt zweite Hälfte nur bei Erfolg; nutzt Fehlschläge aus"],
      ["Dangansen Group","Ruf und Autonomie der Attendants","Dulden keinen Zutritt zum Generator-Waggon; begrenzen Außenzugang der Verteidiger"]
    ]},
    {t:"hinweis", titel:"Späher und Hacker im Zusammenspiel", x:"Späher im Generator-Waggon bereiten die Übernahme der Vista Wraps vor. Der Hacker schwächt die Crew vorab. Beide sind bewusst auf Verborgenheit und Flucht ausgelegt: lieber Unsafe Disconnect als Gefangenschaft."},
    {t:"hinweis", titel:"Schreibweise im Original uneinheitlich", x:"\"Maboroshi\" (auch \"Maraboshi\"), \"Chrysanthemum\" (auch \"Chrysantehemum\"), \"Dangan Central\" (zeitweise \"Dangan Station\"), \"Third Car\" (im Original \"Third Card\") und \"Sōhei IC\". Hier einheitlich Maboroshi, Chrysanthemum, Dangan Central, Third Car, Sōhei IC."}
  ]}
]);
