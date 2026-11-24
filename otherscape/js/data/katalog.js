/* Straßenkatalog (Metro-Grundbuch S. 252–270): eigene deutsche Formulierungen; en = Originalbegriffe der Tags */
var OS_KAT = {
 "intro": [
  "Bevor die Figuren zu einem gefährlichen Job aufbrechen, rüsten sie sich aus. Der Straßenkatalog sammelt gängige Ausrüstung der Megastadt – für die Spielerfiguren ebenso wie für ihre Gegner, sofern die SL nichts anderes sagt. Er ergänzt dein Loadout-Theme (siehe S. 114). Neue Otherscape-Bände wie Tokyo:Otherscape bringen eigene lokale Kataloge mit."
 ],
 "how": [
  [
   "Allgemeine Items",
   "Beschreiben typische Tags der Kategorie in groben Zügen, samt Vorschlägen für Features und Flaws zum Kombinieren. Jedes Item (ein Tag oder ein Tag-Set) kann einen Schwächen-Tag bekommen – von der SL oder vom Spieler."
  ],
  [
   "Spezifische Items",
   "Einzelne Produkte oder Dienste mit Name, Beschreibung, 3–4 Loadout-Tags und einem Schwächen-Tag. Der erste Tag ist der Name des Items und immer anwendbar, wenn es nützt; der zweite und dritte beschreiben Zusatzfunktionen, die nur in bestimmten Situationen zählen; der vierte steht für einen ganz anderen Aspekt oder eine Eigenheit – etwa eine ungewöhnliche Art der Nutzung oder ein Gefühl, das das Item auslöst."
  ]
 ],
 "specials": [
  {
   "n": "Anpassbar bis ins Detail (Deeply Customizable)",
   "d": "Wähle ein Item deines Loadout-Themes. Einmal pro Downtime darfst du ihm einen Loadout-Tag hinzufügen, der ein Merkmal oder Zubehör dieses Items darstellt und nur unter bestimmten Bedingungen oder für einen bestimmten Zweck nutzbar ist."
  },
  {
   "n": "Voll ausgestattet (Fully Decked)",
   "d": "Wähle eine Katalog-Kategorie. Du hast nun alle ihre Tags in deinem Loadout-Theme und kannst jeden davon beim Loading Up aktivieren. Mehrfach wählbar, für jeweils andere Kategorien."
  },
  {
   "n": "Hast du ein Ersatzteil? (Got A Spare?)",
   "d": "Einmal pro Sitzung darfst du einen geladenen Loadout-Tag, der ein nicht einzigartiges Item darstellt, duplizieren und die Kopie einem Crewmitglied oder Verbündeten geben, während du deinen behältst."
  },
  {
   "n": "Aufgemotzt (Modded Out)",
   "d": "Einmal pro Sitzung darfst du, wenn du mit drei oder mehr positiven Loadout-Tags aus demselben Set würfelst, einen Fehlschlag (6-) in einen Teilerfolg (7–9) oder einen Teilerfolg in einen starken Erfolg (10+) verwandeln."
  },
  {
   "n": "Umwidmen (Repurpose)",
   "d": "Einmal zwischen Loading Up und Loading Off darfst du einen geladenen Loadout-Tag umschreiben. Er bleibt von da an in der neuen Fassung."
  },
  {
   "n": "Rückgaberecht (Return Policy)",
   "d": "Einmal pro Downtime darfst du einen der Loadout-Tags deines Themes durch einen anderen ersetzen."
  },
  {
   "n": "Großzügig teilen (Spread the Wealth)",
   "d": "Deine Crewmitglieder dürfen deine Power-Tags nutzen, wenn sie handeln, um neue Items für ihr Loadout-Theme zu beschaffen (sofern deine Tags passen). Du und andere dürft denselben Tag nicht in gleichzeitigen Beschaffungsaktionen verwenden."
  },
  {
   "n": "Synergie-Ausrüstung (Synergetic Gear)",
   "d": "Einmal pro Sitzung darfst du, wenn du mit drei oder mehr positiven Loadout-Tags würfelst, die verschiedene Items darstellen, einen Fehlschlag (6-) in einen Teilerfolg (7–9) oder einen Teilerfolg in einen starken Erfolg (10+) verwandeln."
  }
 ],
 "stim": [
  {
   "src": "img/katalog/stimmung-strasse.webp",
   "cap": "Straßenszene",
   "p": 253
  },
  {
   "src": "img/katalog/stimmung-schlafkapseln.webp",
   "cap": "Schlafkapseln",
   "p": 260
  }
 ],
 "cats": [
  {
   "id": "zugaenge",
   "titel": "Zugänge & Vergünstigungen",
   "en": "Access & Perks",
   "p": 254,
   "img": "img/katalog/zugaenge.webp",
   "intro": [
    "Kurzlebige Zugänge und Privilegien, die oft nur für einen bestimmten Job taugen: der Bauplan des Epis-Bunkers, Erpressungsmaterial gegen einen Hacker und Ähnliches.",
    "Einen passenden Lieferanten zu finden, ist hier oft schwerer als bei anderer Ausrüstung, weil man etwas sehr Spezifisches braucht. Die SL kann das über einen Status auf der Beschaffungsaktion abbilden. Lockere Runden nutzen Perks dagegen gern als Joker-Loadout-Tags – etwa wenn man beim Einbruch plötzlich den „vorbereiteten“ digitalen Hintereingang zückt.",
    "Zugangs-Tags helfen vor allem bei Quick Outcomes, um irgendwo hineinzukommen. Tags für Hilfe und Unterstützung passen zu Create oder Enhance, um der Szene etwas Neues hinzuzufügen, oder zu Restore für eine sichere Erholung.",
    "Typische Konsequenz: Der Perk geht verloren (Tags verbrennen)."
   ],
   "allg": [
    {
     "items": [
      "Erpressungsmaterial",
      "Bestochener Türsteher",
      "Gebäudepläne",
      "VIP-Zugang"
     ],
     "features": [
      "Gruppenpass",
      "Schwer rückverfolgbare Quelle",
      "Statussymbol"
     ],
     "flaws": [
      "Auffällig",
      "Wiederkehrende Gebühren",
      "Ungeprüft"
     ]
    }
   ],
   "items": [
    {
     "n": "Certified corp ID",
     "d": "Ein echter Konzernausweis für gesperrte Systeme. Er gehört dir nicht – hoffentlich vermisst ihn niemand.",
     "t": [
      "Echter Konzernausweis",
      "Zugang zu geschützten Systemen",
      "Zugang zum Konzerngelände"
     ],
     "en": [
      "certified corp ID",
      "access to proprietary systems",
      "access to corporate grounds"
     ],
     "w": "Volle Freigabe verlangt zusätzlich eine PIN",
     "enw": "full authentication also requires PIN"
    },
    {
     "n": "Digital backdoor access",
     "d": "Ein Einmal-Code in einen gesicherten Bereich einer Domäne.",
     "t": [
      "Digitale Hintertür",
      "Lautloser Zutritt",
      "Hinterlässt keine Spur",
      "Administratorrechte"
     ],
     "en": [
      "digital backdoor access",
      "silent entry",
      "leaves no trace",
      "administrative privileges"
     ],
     "w": "Nur ein kurzes Zeitfenster",
     "enw": "short window of opportunity"
    },
    {
     "n": "Emergency treatment call",
     "d": "Ein medizinisches Soforteinsatzteam steht auf Abruf für dich bereit.",
     "t": [
      "Notfall-Behandlungsruf",
      "Von fehlender Gliedmaße bis Strahlenvergiftung",
      "Evakuierungshilfe",
      "Die Lage ist unter Kontrolle"
     ],
     "en": [
      "emergency treatment call",
      "from missing limb to radiation poisoning",
      "evacuation support",
      "the situation is under control"
     ],
     "w": "Zögert, Sperrgebiete zu betreten",
     "enw": "hesitant to enter restricted areas"
    },
    {
     "n": "Hacker on call",
     "d": "Ein Hacker schuldet dir einen Gefallen – oder du hast seine Zeit bezahlt.",
     "t": [
      "Hacker auf Abruf",
      "In ein System eindringen",
      "Unterstützt beim Harnessing",
      "Neuigkeiten aus dem Cyberspace"
     ],
     "en": [
      "hacker on call",
      "infiltrate a system",
      "provide Harnessing assistance",
      "cyberspace news"
     ],
     "w": "„Lass mich meinen Job machen“",
     "enw": "“Let me do my job”"
    },
    {
     "n": "Private VR Domain",
     "d": "Ein privater VR-Treffpunkt mit wechselnder Verschlüsselung – nur mit Einladung zugänglich.",
     "t": [
      "Private VR-Domäne",
      "Im Cyberspace versteckt",
      "Schneller Zugang",
      "Maßgeschneiderter Avatar"
     ],
     "en": [
      "private VR domain",
      "hidden in cyberspace",
      "quick access",
      "bespoke avatar"
     ],
     "w": "Nur kurzfristig gemietet",
     "enw": "short-term lease"
    },
    {
     "n": "Safehouse",
     "d": "Ein privates Versteck ohne Papierspur für den Fall, dass alles schiefgeht und du untertauchen musst.",
     "t": [
      "Safehouse",
      "Ort ohne Papierspur",
      "Notvorrat"
     ],
     "en": [
      "safehouse",
      "off-the-books location",
      "emergency supply stash"
     ],
     "w": "Ein Stück zu weit weg",
     "enw": "a bit too far"
    },
    {
     "n": "Smart car service",
     "d": "Ein Abo für fahrerlose Wagen. Nicht die schickste Karre der Megastadt, aber bequem.",
     "t": [
      "Smart-Car-Dienst",
      "Zurücklehnen und entspannen",
      "Nimmt eigene Routen an"
     ],
     "en": [
      "smart car service",
      "sit back and relax",
      "accepts custom routes"
     ],
     "w": "Nur für den Alltag geeignet",
     "enw": "mundane use only"
    }
   ]
  },
  {
   "id": "munition",
   "titel": "Munition",
   "en": "Ammo",
   "p": 255,
   "img": "img/katalog/munition.webp",
   "intro": [
    "Spezialmunition ist in einer Welt voller verschiedener Gegner Gold wert. Mythische Munition gibt es zwar auch (z. B. Weapon Witching, S. 231), sie ist aber eine Seltenheit.",
    "Der Einfachheit halber passt jede Munition zur Waffe, die die Figur üblicherweise trägt. Munitions-Tags verstärken Angriffe mit dieser Waffe, helfen beim Nachladen (Quick Outcome) oder mildern Konsequenzen, wenn der Vorrat knapp wird (siehe „Supply Issues“ in der Action Database).",
    "Munition lässt sich als Verbrauchs-Tag behandeln (Consumable Story Tags, S. 113): Wird sie in einer Aktion ganz aufgebraucht, verbrennt man den Tag für Power (S. 122). Alternativ nutzt man ihn normal für 1 Power pro Tag und rationiert den Vorrat.",
    "Typische Konsequenz: Die Munition geht aus (Tags verbrennen)."
   ],
   "allg": [
    {
     "items": [
      "Klebegeschosse",
      "Panzerbrechende Munition",
      "Sprengpatronen",
      "Zusatzmagazin",
      "Munition mit hoher Stoppwirkung",
      "Hohlspitzgeschosse",
      "Nicht tödliche Geschosse",
      "Schnelllader",
      "Leuchtspurmunition"
     ],
     "flaws": [
      "Blindgänger",
      "Leicht verlegt",
      "Schwer",
      "Hochexplosiv",
      "Langsam nachzuladen"
     ]
    }
   ],
   "items": [
    {
     "n": "Fenix Corp Anti-Mechanoid Rounds",
     "d": "Spezialgeschosse, die auch Menschen verletzen, aber dank eingebautem EMP, leitendem Mantel und Panzerbrechung vor allem Drohnen und Cyberware zusetzen.",
     "t": [
      "Anti-Mechanoid-Munition",
      "Örtlicher elektromagnetischer Impuls",
      "Panzerbrechend",
      "Stört die Netzverbindung"
     ],
     "en": [
      "anti-mechanoid rounds",
      "localized electromagnetic pulse",
      "armor-piercing",
      "disrupt network connection"
     ],
     "w": "Schwach gegen Menschen",
     "enw": "weak against humans"
    },
    {
     "n": "Fenix Corp Tagger Rounds",
     "d": "Diese Geschosse verletzen niemanden, sondern haften am Ziel und senden ein verschlüsseltes GPS-Signal, damit man es verfolgen kann.",
     "t": [
      "Peilmunition",
      "Verschlüsseltes Signal",
      "Winzig und lautlos"
     ],
     "en": [
      "tracking rounds",
      "encoded signal",
      "tiny and silent"
     ],
     "w": "Schwaches Signal",
     "enw": "weak signal"
    },
    {
     "n": "Kojima Security Tech M7 Electrostun rounds",
     "d": "Nicht tödliche Munition: die Wucht von Gummigeschossen kombiniert mit der lähmenden Wirkung eines Tasers – und anders als jene wirkt sie auch durch Panzerung.",
     "t": [
      "Elektroschock-Munition",
      "Nasse Ziele",
      "Ignoriert normale Panzerung",
      "Grelle, laute Einschläge"
     ],
     "en": [
      "electrostun rounds",
      "wet targets",
      "ignores standard armor",
      "flashy and loud impacts"
     ],
     "w": "Geerdetes Ziel",
     "enw": "grounded target"
    },
    {
     "n": "Kojima Security Tech M8 Armor Piercing Bullets",
     "d": "Lange Geschosse mit extrem dichtem Kern. Man findet sie in Militärbeständen in ganz Asien – und über den Schwarzmarkt auch bei Gangs.",
     "t": [
      "Panzerbrechende Geschosse",
      "Durchschlägt Beton",
      "Trifft mehrere Ziele in einer Reihe"
     ],
     "en": [
      "armor piercing bullets",
      "break through concrete",
      "pierce through lined up targets"
     ],
     "w": "Auf große Entfernung wirkungslos",
     "enw": "ineffective at long range"
    }
   ]
  },
  {
   "id": "apps",
   "titel": "Apps, Chips & Datenbanken",
   "en": "Apps, Chips & Databases",
   "p": 256,
   "img": "img/katalog/apps.webp",
   "intro": [
    "Eine App ist jede Software auf dem Gerät oder Neuro-Rechner. „Chips“ sind daumengroße Module, die der Cyberware beim Einstecken neue Fähigkeiten geben. KOCMOC (S. 49) verkauft Hunderte davon – vom Tanztrend-Chip bis zum Abwaschen. Datenbanken sind mehr als Tabellen: Index und Suchoberfläche gehören dazu und sollten ins HUD (Visier oder neural) eingebunden sein.",
    "App-Tags können andere Tätigkeiten verstärken oder neue Funktionen liefern. Chips erlauben sogar Würfe, die man sonst nicht machen könnte, etwa in einer unbekannten Sprache zu sprechen. Datenbanken helfen, Antworten zu finden oder eine Lage zu analysieren.",
    "Typische Konsequenzen: Software hat Fehler (Glitch); bei Chips kommt es zu unbeabsichtigten Ergebnissen – selbst Militärchips können nicht jede Lage abdecken."
   ],
   "allg": [
    {
     "items": [
      "Billige Harnessing-App",
      "Epis-Büro-Tools",
      "KOCMOC-[Alltagsfertigkeit]-Chip",
      "Fahndungsdatenbank"
     ],
     "features": [
      "Adaptives Design",
      "Insta-Loader",
      "Speichersparer",
      "Intelligente Suche"
     ],
     "flaws": [
      "Nervige Benachrichtigungen",
      "Verträgt sich schlecht mit anderen",
      "Fehlerhaft",
      "Speicherfresser"
     ]
    }
   ],
   "items": [
    {
     "n": "Drone operator HUD",
     "d": "Ein Head-up-Display mit detaillierten Daten zu Leistung und Reaktion einer Drohne; von vielen Herstellern für viele Geräte erhältlich.",
     "t": [
      "Drohnenpiloten-HUD",
      "Drohnen-Sicherheitsprotokolle",
      "Autopilot-Programmierung",
      "Zugriff auf Sensordaten"
     ],
     "en": [
      "drone operator HUD",
      "drone safety protocols",
      "auto-pilot programming",
      "access sensory data"
     ],
     "w": "Geteilte Aufmerksamkeit",
     "enw": "divided attention"
    },
    {
     "n": "Emotive damper",
     "d": "Eine Software für Neuroimplantate, die die Emotionszentren des Gehirns kurzzeitig abschaltet. Du fühlst alles weiter, aber dein Gesicht bleibt leer.",
     "t": [
      "Emotionsdämpfer",
      "Pokerface",
      "Gewünschte Emotion zeigen"
     ],
     "en": [
      "emotive damper",
      "poker face",
      "display desired emotion"
     ],
     "w": "Starke Gefühle sind schwer zu unterdrücken",
     "enw": "strong emotions are hard to surpass"
    },
    {
     "n": "Gorts & Jasper Integrated Weapons Link",
     "d": "Waffenzubehör plus HUD (für Visier oder Augenimplantat): berechnet optimale Schusswinkel und zeigt Munitionsstand und Zielpunkte.",
     "t": [
      "Waffenverbindung",
      "Präzise Schüsse auf kleine Ziele",
      "Kunstschüsse",
      "Bewegungsverfolgung"
     ],
     "en": [
      "weapons link",
      "precise aim at small targets",
      "trick shots",
      "movement tracking"
     ],
     "w": "Visuelle Datenflut",
     "enw": "visual data overload"
    },
    {
     "n": "MentalMap Geographic Database Subscription",
     "d": "Detaillierte Kartensoftware, fest im Hirnimplantat oder AR-Display verdrahtet, inklusive GPS.",
     "t": [
      "Geografische Datenbank",
      "GPS-Führung in Echtzeit",
      "Verschiedene Infoebenen",
      "Bewertungen und Empfehlungen"
     ],
     "en": [
      "geographic database",
      "realtime GPS guidance",
      "various info layers",
      "reviewer recommendations"
     ],
     "w": "Alles Private ist zensiert",
     "enw": "everything private is censored"
    },
    {
     "n": "MentalMap Language and Culture Assistant",
     "d": "In der vielsprachigen Megastadt hilft diese KI leise dabei, nicht die falsche Person zu beleidigen.",
     "t": [
      "Sprach- und Kulturassistent",
      "Kulturelle Ratschläge",
      "Klingt wie ein Muttersprachler"
     ],
     "en": [
      "language and culture assistant",
      "cultural advice",
      "sound like a native speaker"
     ],
     "w": "Komplexe Gedanken vermitteln",
     "enw": "communicate complex concepts"
    },
    {
     "n": "Nu-Phase Body Snatcher",
     "d": "Angeblich ohne richtige Tests auf den Markt gebracht: Ein Chip-Bündel, das zwei Nutzer ihre Sichtfelder und Sinneseindrücke verknüpfen und Apps teilen lässt.",
     "t": [
      "Neuronale Sinnes- und App-Verknüpfung",
      "Zugriff auf die Apps des anderen",
      "Koordinierte Bewegung",
      "Haptische Verbindung"
     ],
     "en": [
      "neural sensory and app linking",
      "access each other’s apps",
      "coordinated movement",
      "haptic linking"
     ],
     "w": "Desorientierende Verzögerung",
     "enw": "disorienting lag"
    },
    {
     "n": "Santos-Krupp Medical Database IV",
     "d": "Eine komplette medizinische Datenbank mit Sinnesunterstützung und HUD-Anzeigen.",
     "t": [
      "Medizinische Datenbank",
      "Diagnose anhand von Körperwerten",
      "Erste-Hilfe-Unterstützung",
      "Verzeihung, ich bin Arzt"
     ],
     "en": [
      "medical database",
      "diagnose according to physical metrics",
      "first aid support",
      "excuse me I’m a doctor"
     ],
     "w": "Kennt keine Mythoi",
     "enw": "doesn’t know Mythoi"
    }
   ]
  },
  {
   "id": "ruestung",
   "titel": "Rüstung",
   "en": "Armor",
   "p": 257,
   "img": "img/katalog/ruestung.webp",
   "intro": [
    "Rüstung reicht von der unauffälligen Weste bis zum vollwertigen Kampfanzug. Manche Stücke lassen sich schnell an- und ablegen, andere nicht.",
    "Rüstungs-Tags greifen vor allem in bestimmten Situationen, manche bieten zusätzliche Funktionen.",
    "Typische Konsequenz: Die Rüstung geht kaputt (Tags verbrennen)."
   ],
   "allg": [
    {
     "items": [
      "Arktis-Überlebensanzug",
      "Kugelsichere Weste",
      "Konzern-Panzeranzug",
      "Staubmantel",
      "Feuerfester Anzug",
      "Verstärkter Helm",
      "Riot-Schild",
      "Bedrohungsscanner"
     ],
     "features": [
      "Panzerhandschuhe",
      "Ballistische Einlagen",
      "Verborgene Tasche",
      "Unauffällig"
     ],
     "flaws": [
      "Ablativ (nutzt sich ab)",
      "Schwer",
      "Anfällig gegen [Angriffsart]"
     ]
    }
   ],
   "items": [
    {
     "n": "Fenix Corp Electronic Warfare Suit",
     "d": "Von einem Hobby-Entwickler und Straßenmerc populär gemacht: eine Schutzjacke mit Zusatzanschlüssen und Störsendern.",
     "t": [
      "Elektronik-Kampfanzug",
      "Wehrt Cyberangriffe ab",
      "Anschlüsse für Zusatzgeräte",
      "Material einer Splitterschutzjacke"
     ],
     "en": [
      "electronic warfare suit",
      "disrupt cyber attacks",
      "peripheral plug-in ports",
      "flak jacket material"
     ],
     "w": "Akku leert sich schnell",
     "enw": "battery drains quickly"
    },
    {
     "n": "Lexington Arachnis Camouflage Suit",
     "d": "Ein Ganzkörperanzug mit aktivem Tarngewebe, das chamäleonhafte Unsichtbarkeit verleiht und den Träger mit der Umgebung verschmelzen lässt.",
     "t": [
      "Tarnanzug",
      "Am besten bei Stillstand",
      "Kevlar-Schutz",
      "Dünn und leicht"
     ],
     "en": [
      "camouflage suit",
      "best when standing still",
      "Kevlar protection",
      "thin and light"
     ],
     "w": "Langsame Anpassung",
     "enw": "slow adaptation"
    },
    {
     "n": "Lexington Sherwood Tactical Vest",
     "d": "Flexible, verstärkte Karbon-Nanofaser-Weste gegen Klingen und Kugeln. Sie lässt sich falten und ist überraschend leicht – eine der meistgetragenen Schutzwesten.",
     "t": [
      "Taktische Weste",
      "Klingenschutz",
      "Kugelschutz",
      "Faltbar und leicht"
     ],
     "en": [
      "tactical vest",
      "blade resistance",
      "ballistic resistance",
      "foldable and lightweight"
     ],
     "w": "Deckt nur die Brust",
     "enw": "only covers the chest"
    },
    {
     "n": "UrbanWar Riot Armor",
     "d": "Rüstung mit Helm aus Polycarbonat-Platten, den Schutzanzügen nachempfunden, die weltweit bei der Polizei im Alltag üblich sind.",
     "t": [
      "Riot-Rüstung",
      "Robust",
      "Helmdisplay",
      "Zur Seite, ich regle das"
     ],
     "en": [
      "riot armor",
      "sturdy",
      "helmet-mounted display",
      "stand aside I’ll handle this"
     ],
     "w": "Sperrig",
     "enw": "bulky"
    },
    {
     "n": "UrbanWar “Urban Assault” Lightweight Base Jumping Armor",
     "d": "Aus Smart-Materialien mit „Superseide“ verstärkt; zwischen Armen und Beinen lässt sich eine Flughaut spannen, mit der man im Höchsttempo durch die Megastadt gleitet.",
     "t": [
      "Base-Jumping-Rüstung",
      "Ausklappbarer Fallschirm",
      "Flughäute",
      "Draufgänger"
     ],
     "en": [
      "base jumping armor",
      "retractable parachute",
      "webbings",
      "daredevil"
     ],
     "w": "Starker Wind",
     "enw": "high winds"
    }
   ]
  },
  {
   "id": "cyberware",
   "titel": "Cyberware & Körperaufsätze",
   "en": "Body Attachments & Cybernetics",
   "p": 258,
   "img": "img/katalog/cyberware.webp",
   "intro": [
    "Dauerhafte Cyberware wird über Loadout-Tags abgebildet. Verbrannte Tags stehen für Wartung, Aufladen oder Feinabstimmung, bis das Implantat wieder voll nützlich ist.",
    "Manche Implantate sind Dauerthema der Figur, andere nur Nebensache, die bei einem Job gar nicht auffällt. Cyberware-Tags verstärken aktives Handeln (etwa scharfe Sicht), ermöglichen völlig neue Tätigkeiten (z. B. Funkverkehr) oder schützen, etwa als Dermalpanzerung.",
    "Typische Konsequenz: Die Cyberware überhitzt, glitcht oder verletzt sogar ihren Träger."
   ],
   "allg": [
    {
     "items": [
      "Ästhetisches Körperteil",
      "Blut-Toxinfilter",
      "Verstärktes Nervensystem",
      "Hirnbeschleuniger",
      "Eingebaute Harnessing-Konsole",
      "Comm-Implantat",
      "Cyberohren",
      "Cyberaugen",
      "Cyberbeine",
      "Cyberschwanz",
      "Cyberflügel",
      "Cyberarm",
      "Exoskelett",
      "Zusätzliche Gliedmaßen",
      "Gesichtsverändernde Maske",
      "Hand-Augen-Verbindung",
      "Interner Scanner-Array",
      "Neurale Verbindung",
      "Neuro-Visier"
     ],
     "features": [
      "Wirkt organisch",
      "Langlebige Materialien",
      "EMP-Abschirmung",
      "Firmware-Updates",
      "Hochwertige Software",
      "Beeindruckend",
      "Interne Firewall",
      "Lange Akkulaufzeit",
      "Starke Servomotoren",
      "Zuverlässig",
      "Einziehbar [Waffe oder Gerät]"
     ],
     "flaws": [
      "Erregt Aufsehen",
      "Fehlerhaft",
      "Schwer",
      "Neuronales Rauschen",
      "Narbengewebe",
      "Unhandlich"
     ]
    }
   ],
   "items": [
    {
     "n": "Apex CN62-s Power Legs",
     "d": "Ein dünnes, leichtes Exoskelett für die Beine, das Laufen, Springen, Treten und Schwimmen verbessert.",
     "t": [
      "Powerbeine",
      "Verbesserter Sprung",
      "Dauerleistung",
      "Selbstsicherer Gang"
     ],
     "en": [
      "power legs",
      "enhanced jump",
      "continuous effort",
      "confident gait"
     ],
     "w": "Schmerzen und Beschwerden",
     "enw": "aches and pains"
    },
    {
     "n": "Apex VI-80 “Halcón” Wings",
     "d": "Auffällige Flügel, die aus Schulterfächern ausklappen – leichte Metallrahmen mit „Federn“ aus Karbonfaser. Beliebt bei Nervenkitzel-Suchern.",
     "t": [
      "Tragbare Flügel",
      "Langsames Gleiten",
      "Kompaktes Design",
      "Nervenkitzel-Sucher"
     ],
     "en": [
      "wearable wings",
      "slow gliding",
      "compact design",
      "thrill seeker"
     ],
     "w": "Den Winden ausgeliefert",
     "enw": "at the whim of winds"
    },
    {
     "n": "Elysian Blades Retractable Quick-Blade",
     "d": "Eine flache Unterarmschiene mit einrastender Klinge, die per Muskelkontrolle ausfährt und wieder einfährt.",
     "t": [
      "Einziehbare Schnellklinge",
      "Schneller Stich",
      "In der Schiene verborgen",
      "Überraschungsmoment"
     ],
     "en": [
      "retractable quick-blade",
      "quick stabbing motion",
      "hidden in bracer",
      "surprise factor"
     ],
     "w": "Zerbrechliche Klinge",
     "enw": "fragile blade"
    },
    {
     "n": "Epis Cranius Headcomms",
     "d": "Ein winziges Kommunikationsgerät im Ohr, das sich mit Visieren und Implantaten für Audio- und Videonachrichten verbindet. Mit Subvokal-Mikro für sehr leise Antworten.",
     "t": [
      "Kopf-Comm",
      "Privates Netzwerk",
      "Reichweitenverstärker",
      "Leises Gespräch"
     ],
     "en": [
      "head comms",
      "private network",
      "range booster",
      "quiet discussion"
     ],
     "w": "Zu viel Gequatsche",
     "enw": "too much chatter"
    },
    {
     "n": "Fenix Corp Carbon Dermal Plating",
     "d": "Eng anliegender Karbonfaser-Schutz, der mit der Haut verbunden wird und Waffen, Kugeln und raue Umgebungen abwehren kann.",
     "t": [
      "Dermalpanzerung",
      "Wehrt Nahkampfwaffen ab",
      "Geschützte Vitalorgane"
     ],
     "en": [
      "dermal plating",
      "deflect melee weapons",
      "shielded vitals"
     ],
     "w": "Anfällig für stumpfe Traumata",
     "enw": "weak to bludgeon trauma"
    },
    {
     "n": "Navachar Electronics “Nazar” Multispectral Lens",
     "d": "Der neue Industriestandard: Die Kontaktlinse zeigt sichtbares Licht, Wärme, UV und weitere Spektren – samt Zoom und Mikroskopsicht.",
     "t": [
      "Multispektrallinse",
      "Zoom und Mikroskopsicht",
      "Videoaufzeichnung"
     ],
     "en": [
      "multispectral lens",
      "zoom and microscopic vision",
      "video recording"
     ],
     "w": "Visuelle Überlastung",
     "enw": "visual overload"
    },
    {
     "n": "Osprey Enhanced Carbon Fiber Muscles",
     "d": "Dichte, halbsynthetische Muskeln, für jeden Träger auf Karbonfasergeflecht gezüchtet und in einer einstündigen Operation angesetzt. Sie steigern die Kraft enorm, verrotten aber nach etwa einem Tag und fallen ab.",
     "t": [
      "Karbonfaser-Muskeln",
      "Mehr Ausdauer",
      "An die Grenzen gehen",
      "Leg dich nicht mit mir an"
     ],
     "en": [
      "carbon fiber muscles",
      "enhanced stamina",
      "push to the limits",
      "don’t mess with me"
     ],
     "w": "Überanstrengung, die dich selbst verletzt",
     "enw": "overreach and harm yourself"
    },
    {
     "n": "Shielded thoracic cover",
     "d": "Beliebt bei Schmugglern und anderen halblegalen Berufen: ein synthetisches Hautfach, das auf der Haut klebt und einen kleinen Gegenstand vor Scannern verbirgt.",
     "t": [
      "Abgeschirmte Brustabdeckung",
      "Entgeht den meisten Scans",
      "Stoßdämpfender Memoryschaum"
     ],
     "en": [
      "shielded thoracic cover",
      "avoids most scans",
      "shock-absorbing memory foam"
     ],
     "w": "Schmerzschübe",
     "enw": "bouts of pain"
    },
    {
     "n": "Talonwerks XR-11 High Capacity Nerve Overcharger",
     "d": "Talonwerks setzt seit Langem den Standard bei Nervenbeschleunigern. Das knopfgroße Gerät sitzt im Nacken und verbessert die Reaktionszeit.",
     "t": [
      "Nerven-Überlader",
      "Präzise Bewegung",
      "Superschnelle Reflexe",
      "Programmierbare Bewegung"
     ],
     "en": [
      "nerve overcharger",
      "precision movement",
      "super quick reflexes",
      "programmable movement"
     ],
     "w": "Muskelkrämpfe",
     "enw": "muscle spasms"
    }
   ]
  },
  {
   "id": "cyberspace",
   "titel": "Cyberspace",
   "en": "Cyberspace",
   "p": 260,
   "img": "img/katalog/cyberspace.webp",
   "intro": [
    "Alles, was mit dem Überbrücken ins Netz zu tun hat – meist, um Schaden anzurichten. Dazu zählen Hacking-Software, Geräte für elektronische Kriegsführung und Dienste, die beim Angreifen, Verteidigen oder bloßen Existieren im Netz helfen.",
    "Manche Tags funktionieren nur im Cyberspace, um sich in digitalen Konstrukten zu bewegen und sie oder die Umgebung zu verändern. Da der Cyberspace auf der Fleischwelt aufbaut, taugen Tags der elektronischen Kriegsführung auch in der realen Welt, etwa beim Orten oder Stören von Gegnern. Siehe auch das Supplement Otherscape Action Database.",
    "Typische Konsequenzen bei Hacking-Software: Sie glitcht, löst Systemalarm aus oder markiert die Figur."
   ],
   "allg": [
    {
     "l": "Software",
     "items": [
      "Brute-Force-App-Crasher",
      "Code-Analysierer",
      "Comm-Abhörer",
      "Zugangsdaten-Fälscher",
      "Entschlüssler-App",
      "Deepfake-App",
      "Firewall",
      "Firewall-Brecher",
      "Hacker-Hirnbrutzler",
      "Schadcode-Entferner",
      "Proxy-Dienst",
      "Sicherheitsdeaktivierender Virus",
      "Quellen-Tracer und -Ortung"
     ],
     "features": [
      "Schnelles Laden",
      "Unauffällige Signatur",
      "Geringe Anforderungen",
      "Robuster Code"
     ],
     "flaws": [
      "Verbraucht Ressourcen",
      "Leicht zurückverfolgbar",
      "Fehlerhaft",
      "Illegal",
      "Signaturcode",
      "Braucht einen Moment zum Laden"
     ]
    },
    {
     "l": "VR-Modelle",
     "items": [
      "[Objekt]-förmiges VR-Konstrukt",
      "[Persona]-förmiger Avatar",
      "Umgebungseditor",
      "VR-Klonwerkzeug",
      "VR-Unsichtbarkeits-App",
      "VR-Schild",
      "VR-Waffe"
     ]
    },
    {
     "l": "Hardware",
     "items": [
      "„Überall“-Satlink",
      "Comm-Implantat",
      "Rechengerät",
      "Kristalline Datenplatte",
      "Maßgefertigtes Carryall",
      "Datapad",
      "Elektronik-Werkbank",
      "Harnessing-Konsole",
      "Neuronales Netz",
      "Signalstörer",
      "Überspannungsschutz",
      "VR-Brille"
     ],
     "features": [
      "Wegwerfgerät (burner)",
      "EMP-Abschirmung",
      "Kühlkörper-Rig",
      "Integrierte Firewall",
      "Viel RAM"
     ],
     "flaws": [
      "Überhitzt leicht",
      "Ruckelige Grafik",
      "Eine Generation hinterher",
      "Phantomsignale",
      "Schwacher Akku"
     ]
    }
   ],
   "items": [
    {
     "n": "Astra-10 Electronic Blanket",
     "d": "Ein kleines Gerät, das Signale in einem kleinen Radius abschirmt, sodass alle digitale Aktivität darin von außen nicht zu erkennen ist.",
     "t": [
      "Störsender-Decke",
      "Blockt eingehende Signale",
      "Liefert falsche Sensordaten"
     ],
     "en": [
      "electronic blanket emitter",
      "disable incoming signals",
      "provide false sensory reading"
     ],
     "w": "Stark von Metall beeinflusst",
     "enw": "highly affected by metal"
    },
    {
     "n": "Astra-10 Personal Security Field Spammer",
     "d": "Astra-10 bewirbt ihn als Schutz gegen feindliche Drohnen, doch meist dient er für fiese Denial-of-Service-Angriffe.",
     "t": [
      "EM-Feld-Spammer",
      "Denial-of-Service-Angriff",
      "Legt Drohnen lahm",
      "Legt AR lahm"
     ],
     "en": [
      "EM field spammer",
      "denial of service attack",
      "disable drones",
      "disable AR"
     ],
     "w": "Überhitzung",
     "enw": "overheating"
    },
    {
     "n": "Gordian Exploiter",
     "d": "Ein beliebtes Entschlüsselungsprogramm, das methodisch und unauffällig vorgeht.",
     "t": [
      "Krypto-Knacker-Software",
      "Feine Hand",
      "Über Nacht einwirken lassen"
     ],
     "en": [
      "crypto-breaker software",
      "subtle touch",
      "leave to soak all night"
     ],
     "w": "Braucht Zeit zur Einrichtung",
     "enw": "takes time to set up"
    },
    {
     "n": "Harness overclocking mods",
     "d": "Open-Source-Mods, die Harness-Software über ihre Auslegung hinaus treiben. Coder nutzen sie beim Bauen oder Anpassen von Avataren.",
     "t": [
      "Harness-Übertaktungs-Mods",
      "Avatarkörper mit Höchstleistung erschaffen",
      "Übermächtige Fähigkeit gewähren"
     ],
     "en": [
      "Harness overclocking mods",
      "create peak performance avatar body",
      "grant OP ability"
     ],
     "w": "Nur vorgefertigte Vorlagen wählbar",
     "enw": "must pick from pre-designed templates"
    },
    {
     "n": "Nu-Phase Kicker Console",
     "d": "Für alle, die es mit digitaler Sicherheit ernst meinen: eine Top-Sicherheitskonsole der rätselhaften Ingenieure von Nu-Phase – auch für Angriffe nutzbar.",
     "t": [
      "Cybersicherheits-Konsole",
      "Erstklassige Cybersicherheit",
      "Cyberangriff-Modul",
      "Gültige Garantie"
     ],
     "en": [
      "cybersecurity console",
      "top-tier cybersecurity",
      "cyberattack mod",
      "active warranty"
     ],
     "w": "Nicht für den Harness-Einsatz gebaut",
     "enw": "not designed for Harnessed use"
    },
    {
     "n": "Nu-Phase Wireless Sniffer",
     "d": "Ein kleines, unauffälliges Gerät, das Funksignale in der Umgebung aufspürt und ortet.",
     "t": [
      "Funk-Sniffer",
      "Signal analysieren",
      "Unauffällig"
     ],
     "en": [
      "wireless sniffer",
      "analyze signal",
      "discreet"
     ],
     "w": "Von unzähligen anderen Signalen abgelenkt",
     "enw": "distracted by countless other signals"
    },
    {
     "n": "Packaged custom private Domain",
     "d": "Eine vorgefertigte, angepasste private Domäne (mehrere Vorlagen verfügbar), die sich irgendwo im Cyberspace als kleine Taschendimension „freisetzen“ lässt.",
     "t": [
      "Verpackte private Domäne",
      "Verschiedene Annehmlichkeiten",
      "Passt überall hinein",
      "Sicherer Rückzugsort"
     ],
     "en": [
      "custom private Domain",
      "various amenities",
      "fits everywhere",
      "safe refuge"
     ],
     "w": "Kurzlebig",
     "enw": "short-lived"
    },
    {
     "n": "Quicksilver Avatar Mask",
     "d": "Software des Hackerkollektivs Quicksilver, die den Avatar eines anderen Nutzers scannt und kopiert und so Harness-Verkleidungen ermöglicht.",
     "t": [
      "Avatar-Masken-Software",
      "Kopiert Emotes und Ruheanimationen",
      "Verkleidungsbibliothek"
     ],
     "en": [
      "avatar mask software",
      "copy emotes and idle animation",
      "library of disguises"
     ],
     "w": "Braucht viele Details für Genauigkeit",
     "enw": "requires many details to be precise"
    },
    {
     "n": "Shever Brute Force Exploit",
     "d": "Beliebte Einbruchssoftware, die Verschlüsselung sehr schnell knackt – aber laut und offensichtlich ist.",
     "t": [
      "Brute-Force-Exploit-Software",
      "Zerschmettert Abwehrkonstrukte",
      "Kollateralschaden"
     ],
     "en": [
      "brute force exploit software",
      "shatter defensive constructs",
      "collateral damage"
     ],
     "w": "Auffällig",
     "enw": "conspicuous"
    },
    {
     "n": "Smarter Jack Connection Tracer",
     "d": "Sicherheitsbewusste Nutzer verwenden das Programm gegen Betrug, um einzugrenzen, mit wem sie sprechen und wo er sich aufhält.",
     "t": [
      "Verbindungs-Tracer",
      "Physischen Standort ermitteln",
      "Nutzerkonto ermitteln",
      "Unauffälliger Betrieb"
     ],
     "en": [
      "connection tracer",
      "identify physical location",
      "identify user’s account",
      "inconspicuous operation"
     ],
     "w": "„Haltet ihn hin, ich brauche noch 30 Sekunden!“",
     "enw": "“Stall them, I need 30 more seconds!”"
    },
    {
     "n": "Smarter Jack Identity Buffer",
     "d": "Gewaltsame Trennungen sind der Fluch aller, die durch die Spiralen reisen (auch Harness-Mercs). Dieses Tool gibt dem Gehirn ein paar Sekunden mehr, sich auf die Fleischwelt einzustellen – das kann alles entscheiden.",
     "t": [
      "Identitätspuffer",
      "Fassung wiedererlangen und ruhig bleiben",
      "Schnelle, sichere Trennung"
     ],
     "en": [
      "identity buffer",
      "refocus and stay calm",
      "quick and safe disconnection"
     ],
     "w": "Verträgt sich schlecht mit anderen Hirn-Augmentierungen",
     "enw": "doesn’t play well with other brain augs"
    }
   ]
  },
  {
   "id": "drohnen",
   "titel": "Drohnen",
   "en": "Drones",
   "p": 262,
   "img": "img/katalog/drohnen.webp",
   "intro": [
    "Eine Drohne ist jedes aus der Ferne steuerbare, meist bewegliche Gerät. Die Formen sind äußerst vielfältig; die meisten lassen sich per Sprache oder über ein verbundenes Gerät steuern.",
    "Fast alle Drohnen laufen mit Standardprogrammen, die sie halbautonom machen – ohne passenden Tag aber eher simpel. Ein Wurf ist nur nötig, wenn sie etwas tun soll, das ihre Programmierung nicht abdeckt.",
    "Drohnen sind Nebenfiguren unter Kontrolle der Spielerfigur. Ihre Tags können eine Aktion unterstützen, wenn die Drohne vor Ort hilft; manchmal muss die Figur nicht einmal in der Szene sein. Gerät die Drohne unter Beschuss, kann die SL ihr ein Wrecked-Limit geben – bei einem Loadout-Item ist es meist sinnvoller, einen Tag zu verbrennen. Siehe „Operating a Drone“ in der Action Database.",
    "Typische Konsequenz: Die Drohne handelt gegen den Willen ihres Nutzers."
   ],
   "allg": [
    {
     "items": [
      "Android-Assistent",
      "Transportdrohne",
      "Überwachungsdrohne"
     ],
     "features": [
      "Menschenähnlich (anthroform)",
      "Auto-Stabilisierung",
      "Lange Akkulaufzeit"
     ],
     "flaws": [
      "Leicht beschädigt",
      "Hartcodiert",
      "Starre Steuerung"
     ]
    }
   ],
   "items": [
    {
     "n": "Acciaio Clandestine “Chirurga V” Military Strike Drone",
     "d": "Eine schnittige, getarnte Drohne, die trotz Rucksackgröße erstaunlich schwere Waffen trägt. Die häufigste Attentäter-Drohne am Markt.",
     "t": [
      "Angriffsdrohne",
      "Getarnter Flug",
      "Montierte Bewaffnung",
      "Schnittig"
     ],
     "en": [
      "strike drone",
      "stealthy flight",
      "mounted weaponry",
      "sleek"
     ],
     "w": "Mittelmäßige Rückstoßdämpfung",
     "enw": "mediocre recoil stabilizers"
    },
    {
     "n": "Apex TB-X Swarm-Linked Microdrones",
     "d": "Zwanzig 3-cm-Drohnen, die als koordinierter Schwarm oder einzeln arbeiten können.",
     "t": [
      "Schwarmvernetzte Mikrodrohnen",
      "Autarker Flug",
      "Koordinierte Überwachung"
     ],
     "en": [
      "swarm-linked microdrones",
      "self-sustained flight",
      "coordinated surveillance"
     ],
     "w": "Empfindlich",
     "enw": "delicate"
    },
    {
     "n": "Epis Canine Companion Drone “Rex”",
     "d": "Eine hundeförmige Drohne als Begleiter und Unterstützung für paramilitärische Gruppen – oft zur Kampfdrohne umgerüstet.",
     "t": [
      "Hunde-Drohne",
      "Angriffsprotokoll",
      "Unterstützungsprotokoll",
      "Elektronische Geruchsdetektoren"
     ],
     "en": [
      "canine drone",
      "attack protocol",
      "support protocol",
      "electronic scent detectors"
     ],
     "w": "Langsame Reaktion",
     "enw": "slow reaction time"
    },
    {
     "n": "NM3 Industrial Mechanoid Loader Mark II",
     "d": "In Industrieanlagen ein vertrauter Anblick: riesige, robuste Drohnen, die manchmal für Arenakämpfe oder als hochragende Waffen zweckentfremdet werden.",
     "t": [
      "Industrieller Lade-Mechanoid",
      "Sehr stark",
      "Aufragende Bedrohung"
     ],
     "en": [
      "industrial mechanoid loader",
      "very strong",
      "towering threat"
     ],
     "w": "Schwerfällig",
     "enw": "lumbering"
    },
    {
     "n": "NM3 Unfolding “Backpack” Arachnid III",
     "d": "Zusammengeklappt wirkt sie wie ein harter Rucksack; entfaltet wird sie zu einer wendigen, spinnenartigen Drohne von der Größe eines großen Hundes – viel genutzt bei Urban Exploration und Rettungseinsätzen.",
     "t": [
      "Rucksack-Spinnendrohne",
      "Wandklettern",
      "Enge Räume betreten",
      "Robust"
     ],
     "en": [
      "backpack arachnid drone",
      "wall crawling",
      "enter tight spaces",
      "durable"
     ],
     "w": "Langsam",
     "enw": "slow-moving"
    }
   ]
  },
  {
   "id": "enhancer",
   "titel": "Enhancer",
   "en": "Enhancers",
   "p": 263,
   "img": "img/katalog/enhancer.webp",
   "intro": [
    "Wer einen biologischen Körper hat, kann ihn per „Biohacking“ zu verrückten Dingen bringen. Die Drogen der Megastadt – reguliert wie frei verkäuflich – heben den Stoffwechsel für kurze Zeit auf ein anderes Niveau.",
    "Enhancer-Tags erzeugen oft vorteilhafte Status für verstärkte Körperfunktionen: Wer Nitro nimmt, kann sich per Enhance etwa einen Status „Nitro-Reflexe“ geben. Bei minderwertigen Drogen wie Nitro wird dieser Status nach dem Entfernen durch „verkatert“ derselben Stufe ersetzt. Siehe auch Performance Enhancement in der Action Database.",
    "Viele Drogen sind süchtig machend – besonders billige. Das lässt sich als Bedrohung mit der Konsequenz „abhängig werden“ darstellen (Abschwächung nach SL-Ermessen). Der Status lässt sich durch weitere Einnahme zeitweise ignorieren, wird aber relevant, sobald die Wirkung nachlässt.",
    "Enhancer können als Verbrauchs-Tags behandelt werden (S. 113): Wird die Substanz ganz aufgebraucht, verbrennt man den Tag für Power (S. 122); alternativ gibt es normal 1 Power pro Tag bei rationiertem Gebrauch."
   ],
   "allg": [
    {
     "items": [
      "Downer",
      "Fokussierer",
      "Aufputscher"
     ],
     "features": [
      "Gesteigerte Reflexe",
      "Betäubung",
      "Nicht nachweisbar"
     ],
     "flaws": [
      "Macht süchtig",
      "Illegal",
      "Trippig"
     ]
    }
   ],
   "items": [
    {
     "n": "Anchor",
     "d": "Ein verschreibungspflichtiges Medikament gegen das Cyberspace-Delirium, das viele nach einem zu schnellen Verlassen der VR befällt.",
     "t": [
      "Anchor",
      "Im Hier und Jetzt sein",
      "Hebt Cyberspace-Delirium auf",
      "Durchschaut Illusionen"
     ],
     "en": [
      "Anchor",
      "be here and now",
      "negate cyberspace delirium",
      "see through illusions"
     ],
     "w": "Macht süchtig",
     "enw": "addictive"
    },
    {
     "n": "Nitro",
     "d": "Eine gängige Straßendroge in neongelben Dosen. Gibt dir den Schub, wenn du ihn brauchst: schneller, stärker, aufgedreht.",
     "t": [
      "Nitro",
      "Müdigkeit abschütteln",
      "Schmerz ignorieren",
      "Künstlich aufgeputscht"
     ],
     "en": [
      "Nitro",
      "shake off tiredness",
      "ignore pain",
      "artificially excited"
     ],
     "w": "Macht süchtig",
     "enw": "addictive"
    },
    {
     "n": "Rapid healing nanobots",
     "d": "Mehrere Firmen stellen Spritzen oder Pasten mit Nanobots her, die die natürliche Heilung beschleunigen.",
     "t": [
      "Schnellheilende Nanobots",
      "Schmerzlinderung",
      "Gifte herausfiltern",
      "Gesunder Glanz"
     ],
     "en": [
      "rapid healing nanobots",
      "pain relief",
      "toxin filtering",
      "healthy glow"
     ],
     "w": "Kommt mit dem Mythischen nicht klar",
     "enw": "can’t handle the Mythic"
    },
    {
     "n": "Santos-Krupp X-2031 (“Mindsharp”)",
     "d": "Eine Militärdroge, die es auf die Straße geschafft hat: Mindsharp richtet deine Sinne auf eine Aufgabe aus oder lässt dich Mikroausdrücke von Verhörten lesen.",
     "t": [
      "Mindsharp",
      "Auf eine Aufgabe konzentrieren",
      "Scharfe Sinne",
      "Mikroausdrücke lesen"
     ],
     "en": [
      "Mindsharp",
      "focus on a task",
      "sharp senses",
      "read microexpressions"
     ],
     "w": "Von hinten überrascht",
     "enw": "blindsided"
    },
    {
     "n": "Sunspot",
     "d": "Ursprünglich eine Rave-Droge; eine veränderte Variante dieses Hyperstimulanz nutzen Straßenmercs, um in höchste Alarmbereitschaft zu kommen.",
     "t": [
      "Sunspot",
      "Müdigkeit abschütteln",
      "Lange drogengetriebene Wachheit",
      "Gebündelte Aufmerksamkeit"
     ],
     "en": [
      "Sunspot",
      "shake off tiredness",
      "long term drug-fueled wakefulness",
      "focused attention"
     ],
     "w": "Erschöpfung beim Abklingen",
     "enw": "rebound fatigue"
    }
   ]
  },
  {
   "id": "mode",
   "titel": "Mode & Kleidung",
   "en": "Garments & Fashion",
   "p": 264,
   "img": "img/katalog/mode.webp",
   "intro": [
    "Kleider machen Mercs – man sollte sie nur nicht mit in ein Feuergefecht nehmen. Manche Outfits taugen als Rüstung, gedacht sind sie in der Regel nicht für den Einsatz.",
    "Mode-Tags eignen sich für Quick Outcomes, um Eindruck zu machen, oder für Influencing, damit andere von dir geblendet sind. Manches Zubehör hat Zusatzfunktionen oder mildert Bedrohungen wie Scannen und Identifizieren. Attraktive Mode beeindruckt, kann aber auch Neid wecken. Kleidung, die eine Fraktion zeigt, verschafft Unterstützung – oder macht dich zur Zielscheibe der Gegner.",
    "Typische Konsequenz bei komplizierter Smart-Kleidung: eine Garderoben-Panne."
   ],
   "allg": [
    {
     "items": [
      "[Konzern]-Uniform",
      "[Subkultur]-Kleidung",
      "Elektrisierender Umhang",
      "Modisches Outfit",
      "Gang-Jacke",
      "Hoverstiefel",
      "Nachtleben-Garderobe",
      "Sicherheitsuniform",
      "Teleskop-Brille",
      "Video-Rig-Halskette"
     ],
     "features": [
      "Authentisch",
      "Geht in der Menge unter",
      "Zieht Blicke auf sich",
      "Versteckte Taschen",
      "Integrierter Scanner",
      "Luxuriös",
      "Wetterfest"
     ],
     "flaws": [
      "Teuer",
      "Fadenscheinig",
      "Eingeschränkte Bewegung",
      "Muss aufgeladen werden"
     ]
    }
   ],
   "items": [
    {
     "n": "Biometric masking formalwear",
     "d": "Maßgeschneiderte Festkleidung für feine Anlässe, mit Technik gegen Identifizierung bei Scans und möglichst falschen Messwerten.",
     "t": [
      "Biometrie-verschleiernde Festkleidung",
      "Edel",
      "Falsche Messwerte liefern"
     ],
     "en": [
      "biometric masking formalwear",
      "fancy",
      "give false readings"
     ],
     "w": "Stört Cyberware",
     "enw": "interfere with cyberware"
    },
    {
     "n": "Data crystal jewelry",
     "d": "Mode trifft Praxis: Der prächtige Schmuck enthält im Kristallgitter einen großen Datenspeicher.",
     "t": [
      "Datenkristall-Schmuck",
      "Verschlüsselung",
      "Mit Geotag",
      "Atemberaubender Schmuck"
     ],
     "en": [
      "data crystal jewelry",
      "encryption",
      "geotagged",
      "stunning jewelry"
     ],
     "w": "Braucht einen eigenen Anschluss zum Auslesen",
     "enw": "requires a unique port to access"
    },
    {
     "n": "Privacy hood",
     "d": "In Zeiten ständiger Überwachung stört diese Kapuze digitale Aufnahmen, verwischt dein Gesicht und verschleiert dein Profil.",
     "t": [
      "Privatsphäre-Kapuze",
      "Zugriffsversuche auf meine Ausrüstung stören",
      "Mein Profil verschleiern"
     ],
     "en": [
      "privacy hood",
      "disrupt attempts to access my gear",
      "mask my profile"
     ],
     "w": "Dämpft auch nützliche Netzverbindungen",
     "enw": "also dampens useful network connections"
    },
    {
     "n": "Smart fabric formalwear",
     "d": "Festkleidung aus neuester Smart-Fabric-Technik: schimmernde Muster, wechselnde Passform, Reaktion auf andere Smart-Fabric-Outfits.",
     "t": [
      "Smart-Fabric-Festkleidung",
      "Holografische Emitter",
      "Garderobendatenbank",
      "Schicker Auftritt"
     ],
     "en": [
      "smart fabric formalwear",
      "holographic emitters",
      "wardrobe database",
      "sharp dresser"
     ],
     "w": "Verschleiß",
     "enw": "wear and tear"
    }
   ]
  },
  {
   "id": "merc",
   "titel": "Merc-Ausrüstung",
   "en": "Merc Gear",
   "p": 265,
   "img": "img/katalog/merc.webp",
   "intro": [
    "Jeder Job braucht andere Werkzeuge. Diese Tags decken eine breite Palette an Geräten, Gadgets und Ausrüstung ab, die Mercs bei ihrer Arbeit brauchen können.",
    "Typische Konsequenz: Das Gerät geht kaputt (Tag verbrennen)."
   ],
   "allg": [
    {
     "items": [
      "Armeemesser",
      "Verdecktes Holster",
      "Säurekanister",
      "Erste-Hilfe-Set",
      "Gasmaske",
      "Holo-Projektor",
      "Kitbag",
      "Polymerseil",
      "Rebreather",
      "Reparaturset",
      "Gesicherter Datenstick",
      "Struktur-Scanner"
     ],
     "features": [
      "Langlebig",
      "Leicht zu verbergen",
      "Zusatzvorräte",
      "Leicht"
     ],
     "flaws": [
      "Geht leicht kaputt",
      "Sperrig",
      "Anstrengend",
      "Schlechte Qualität",
      "Braucht Einrichtung",
      "Geht schnell aus",
      "Langsame Bedienung",
      "Unhandlich"
     ]
    }
   ],
   "items": [
    {
     "n": "Astra-10 Autocracker and Sequencer",
     "d": "Ein automatisches Dietrichgerät, das bei jedem Schloss funktioniert, mechanisch wie elektronisch.",
     "t": [
      "Autoknacker",
      "Alarmauslöser erkennen",
      "Tresorknacker-Aufsätze"
     ],
     "en": [
      "autocracker",
      "detect alarm triggers",
      "safecracking tool attachments"
     ],
     "w": "Verrostete oder kaputte Schlösser",
     "enw": "rusted or broken locks"
    },
    {
     "n": "Astra-10 Biometric Replicator",
     "d": "Ein professionelles Fälschergerät, das Kontakte, Fingerkuppen und Atemkapseln druckt, um biometrische Scanner zu täuschen.",
     "t": [
      "Biometrie-Replikator",
      "Probe duplizieren",
      "Kleine Bauform"
     ],
     "en": [
      "biometric replicator",
      "duplicate sample",
      "small sized"
     ],
     "w": "Durch Kartuschengröße begrenzt",
     "enw": "limited by cartridge size"
    },
    {
     "n": "Astra-10 Encrypted Wrist Comm",
     "d": "Ein Handgelenk-Kommunikationsgerät mit Bild und Ton, das über den Cyberspace mit bis zu einem Dutzend weiterer verbunden ist.",
     "t": [
      "Handgelenk-Comm",
      "Video aufnehmen und teilen",
      "Reaktive Verschlüsselungsalgorithmen"
     ],
     "en": [
      "wrist comm",
      "capture and share video",
      "reactive encryption algorithms"
     ],
     "w": "Signalstörungen",
     "enw": "signal interference"
    },
    {
     "n": "Epis Personal Assistant AI “Leigh”",
     "d": "Die führende Begleit-KI am Markt: Sie verfolgt Gewohnheiten, um den Alltag besser zu bewältigen. Wird oft für weniger legale Operationen geknackt.",
     "t": [
      "Persönliche KI",
      "Operationen organisieren",
      "Statistische Einblicke",
      "Neue Gewohnheiten erleichtern"
     ],
     "en": [
      "personal AI",
      "organize operations",
      "provide statistical insights",
      "ease into new habits"
     ],
     "w": "Missverständnisse",
     "enw": "misunderstandings"
    },
    {
     "n": "Epis Portable Cybernetics Scanner",
     "d": "Ein schneller Scanner (Handgerät oder stehend), der jedes Implantat erkennt. Offiziell für Sicherheitskontrollen an öffentlichen Orten – ebenso oft für Straßensicherheit.",
     "t": [
      "Cybernetik-Scanner",
      "Implantate erkennen",
      "Implantat-Analyse",
      "Schnell"
     ],
     "en": [
      "cybernetics scanner",
      "detect implants",
      "implant analysis",
      "fast"
     ],
     "w": "Sehr geringe Reichweite",
     "enw": "very limited range"
    },
    {
     "n": "KOCMOC Medkit",
     "d": "Der Standard-Erste-Hilfe-Kasten: Smart-Verbände, einfache Schmerzmittel, Kunsthautsprays und andere schnelle Lösungen.",
     "t": [
      "Medkit",
      "Bringt dich wieder auf die Beine",
      "Defibrillator",
      "Ich bin hier, um zu helfen"
     ],
     "en": [
      "medkit",
      "get you back on your legs",
      "defibrillator",
      "here to help"
     ],
     "w": "Begrenzte Vorräte",
     "enw": "limited supplies"
    },
    {
     "n": "Nanoware disguise kit",
     "d": "Ein illegal umgebauter 3D-Drucker, der Gesichtsmasken aus Latex herstellt, die Gesichtserkennung täuschen können.",
     "t": [
      "Nanoware-Verkleidungsset",
      "Probe kopieren",
      "Notreparatur der Maske"
     ],
     "en": [
      "nanoware disguise kit",
      "copy sample",
      "emergency mask repair"
     ],
     "w": "Überfordert von nichtmenschlichen Merkmalen",
     "enw": "confused by non-human features"
    },
    {
     "n": "Navachar Electronics “Essence” 3D Scanner",
     "d": "Ein stabförmiges Gerät, das dreidimensionale Scans eines Objekts macht – für 3D-Druck oder zum Einbau in eine VR.",
     "t": [
      "3D-Scanner",
      "Maße und Details",
      "Multispektrum-Scan",
      "Schnelle Verarbeitung"
     ],
     "en": [
      "3D scanner",
      "measurements and details",
      "multispectrum scan",
      "quick processing"
     ],
     "w": "Objekte aus mehreren Teilen",
     "enw": "objects with multiple parts"
    },
    {
     "n": "NM3 Machinist’s Helm",
     "d": "Headset mit Visier, das Maschinen und Geräte röntgt, innere Schaltpläne anzeigt und mit der eigenen Datenbank abgleicht.",
     "t": [
      "Mechaniker-HUD",
      "Verborgene Funktionen verstehen",
      "Große Konstruktionsdatenbank",
      "Schmutzige Hände machen"
     ],
     "en": [
      "machinist’s HUD",
      "understand hidden features",
      "large design database",
      "get your hands dirty"
     ],
     "w": "Metallabschirmung",
     "enw": "metal shielding"
    },
    {
     "n": "Osprey Adaptive Climbing Gear",
     "d": "Handschuhe und Stiefel mit Mikro-Haftflächen zum Klettern.",
     "t": [
      "Adaptive Kletterausrüstung",
      "Reserve für die Enterhakenpistole",
      "Polymerseil"
     ],
     "en": [
      "adaptive climbing gear",
      "grappling gun backup",
      "polymer rope"
     ],
     "w": "Feuchtigkeit",
     "enw": "moisture"
    },
    {
     "n": "Osprey Artificial Gill Breathers",
     "d": "Ein Gerät, das du dir über den Mund schnallst oder zwischen die Zähne nimmst; es wandelt Wasser rasch in Sauerstoff um, damit du unter Wasser atmen kannst.",
     "t": [
      "Künstliche Kiemen",
      "Tauchcomputer",
      "Zu Hause im Wasser"
     ],
     "en": [
      "artificial gill breathers",
      "dive computer",
      "at home in water"
     ],
     "w": "Schmutziges Wasser",
     "enw": "dirty water"
    },
    {
     "n": "UrbanWar Grappling Hook",
     "d": "Fast jeder Bezirk der Megastadt bietet genug Hochhäuser, Türme und Masten, um einen Enterhaken taktisch zu rechtfertigen.",
     "t": [
      "Enterhaken",
      "Griffiges Kletterseil",
      "Magnethaken",
      "Zwischen Gebäuden schwingen"
     ],
     "en": [
      "grappling hook",
      "grippy climbing rope",
      "magnetic hook",
      "swing between buildings"
     ],
     "w": "Bröckelnder Anker",
     "enw": "crumbling anchoring"
    }
   ]
  },
  {
   "id": "quellen",
   "titel": "Quellenberührt",
   "en": "Source-Touched",
   "p": 266,
   "img": "img/katalog/quellen.webp",
   "intro": [
    "Loadout-Items, die selbst Kräfte besitzen oder von einer Quelle berührt wurden: etwa aus einem Ort der Macht stammende Fläschchen, Talismane, Kleidung mit altem Wissen oder legendäre Drogen. Die folgenden Tags sind generisch und passen zu vielen Mythoi.",
    "Solche Items sind in der Merc-Welt recht verbreitet und daher ebenso oft in den Händen der Gegner. Wird eine Quelle zum ersten Mal untersucht, ist ihr wahres Wesen womöglich unklar – die SL kann einen Wurf verlangen (siehe „Identifying a Source“ in der Action Database).",
    "Quellen-Tags können Erstaunliches bewirken: meist ein „weltliches“ Ergebnis, das auch ohne Magie erreichbar wäre, manchmal aber einen ganz und gar magischen Effekt. Sie können sich mit Tags aus anderen Quellen verbinden und dem Mythos der Figur helfen, eine sonst nicht abwendbare Gefahr abzuschwächen. Tränke u. Ä. behandelt man als Verbrauchs-Tags (S. 113; Burning a Tag for Power, S. 122).",
    "Typische Konsequenz: Die Quelle handelt nach ihrem eigenen Willen – etwa indem sie die Figur verflucht oder verzaubert."
   ],
   "allg": [
    {
     "items": [
      "Gesegnetes Wasser",
      "Flugverleihende Feder",
      "Geisterbesänftigender Gesang",
      "Gürtel der Riesenstärke",
      "Glücksbringer",
      "Unsichtbarkeitsring",
      "Eisenhaut-Salbe",
      "Ortungszauber",
      "Einschläfernde Lyra",
      "Magiebann-Dolch",
      "Monstertöter-Salbe",
      "Lautlos-Töten-Wetzstein",
      "Spinnenkletter-Amulett",
      "Geisterbindendes Salz",
      "Anzug der Verführung",
      "Flammenarmband",
      "Wyvernblut-Verjüngungsspritze"
     ],
     "features": [
      "Diskret",
      "Langanhaltend",
      "Stärker [zu einer Zeit / an einem Ort / bei einer Bedingung]",
      "Stärker gegen [Wesen]",
      "Stärker gegen Mundanes",
      "Stärker gegen Technik"
     ],
     "flaws": [
      "Wird durch Blut aktiviert",
      "Zieht [Wesen] an",
      "Leicht gebannt",
      "Muss aufgeladen werden",
      "Auffällig",
      "Wirkt nur [zu einer Zeit / an einem Ort / bei einer Bedingung]"
     ]
    }
   ],
   "items": [
    {
     "n": "Aegis",
     "d": "Eine Nachbildung des Schildes der griechischen Götter, das gegen fast jeden Schlag schützt.",
     "t": [
      "Magischer Schild",
      "Angriffe abwehren",
      "Furchterregender Anblick",
      "Standhaft bleiben"
     ],
     "en": [
      "magical shield",
      "deflect attack",
      "awful to behold",
      "stand your ground"
     ],
     "w": "Unhandlich",
     "enw": "cumbersome"
    },
    {
     "n": "Demonic pendant",
     "d": "Ein Halsband mit bösem Zeichen: Es steht für schlechte Omen, aber auch für eine dunkle, mächtige Kraft.",
     "t": [
      "Dämonischer Anhänger",
      "Pech bringen",
      "Böse Geister befehligen"
     ],
     "en": [
      "demonic pendant",
      "inflict bad luck",
      "command malicious spirits"
     ],
     "w": "Bei Tageslicht schwächer",
     "enw": "weaker in daylight"
    },
    {
     "n": "Glass of True Vision",
     "d": "Wer durch diese runde Seeglas-Scherbe blickt, sieht durch Illusionen und erkennt die wahre Gestalt von Gestaltwandlern.",
     "t": [
      "Glas der wahren Sicht",
      "Illusionen durchschauen",
      "Durchdringender Blick"
     ],
     "en": [
      "glass of true vision",
      "see through illusions",
      "penetrating stare"
     ],
     "w": "Das Bild braucht einen Moment, um klar zu werden",
     "enw": "takes a moment for the vision to clear"
    },
    {
     "n": "Healing potion",
     "d": "Ein magisches Allheilmittel – hervorragend, aber teuer, gegen offene Wunden und gebrochene Knochen.",
     "t": [
      "Heiltrank",
      "Wunden schließen",
      "Knochen heilen"
     ],
     "en": [
      "healing potion",
      "close wounds",
      "mend bones"
     ],
     "w": "Cyberware",
     "enw": "cyberware"
    },
    {
     "n": "Leyline map",
     "d": "Eine uralte Karte, die die Knotenpunkte verschiedener mystischer Kräfte zeigt.",
     "t": [
      "Leylinien-Karte",
      "Hilfreiche Orientierung",
      "Erdenergien anzapfen"
     ],
     "en": [
      "leyline map",
      "helpful navigation",
      "tap earth energies"
     ],
     "w": "Veraltet",
     "enw": "outdated"
    },
    {
     "n": "Otherworldly contract",
     "d": "Ein sorgfältig formulierter Vertrag mit einem Teufel, einer Fee oder einem Geist über eine Dienstleistung.",
     "t": [
      "Jenseitiger Vertrag",
      "Hilfreichen Vertrauten herbeirufen",
      "Übernatürlicher Rat",
      "Sorgfältige Wortwahl"
     ],
     "en": [
      "otherworldly contract",
      "summon helpful familiar",
      "preternatural advice",
      "careful articulation"
     ],
     "w": "Kleingedrucktes und Schlupflöcher",
     "enw": "small print and loopholes"
    },
    {
     "n": "Prayer beads",
     "d": "Gewöhnlich zum Zählen der gesprochenen Gebete – diese Quellen-Kette wurde gesegnet oder anderweitig geweiht.",
     "t": [
      "Gebetskette",
      "Schutz vor Dämonen",
      "Gesegnete Führung"
     ],
     "en": [
      "prayer beads",
      "protection from demons",
      "blessed guidance"
     ],
     "w": "Sarkastischer Nutzer",
     "enw": "sarcastic user"
    },
    {
     "n": "Prayer beads, explosive",
     "d": "Dämonische Perlen voller negativer Energie, wurfbereit. Man sieht schwarze Dämpfe und hört Gekicher.",
     "t": [
      "Explosive Gebetskette",
      "Dämonenfeuer",
      "Explosionsradius",
      "Stört Magie"
     ],
     "en": [
      "explosive prayer beads",
      "demonic fire",
      "blast radius",
      "disrupts magic"
     ],
     "w": "Wahlloser Schaden",
     "enw": "indiscriminate damage"
    },
    {
     "n": "Somber markings",
     "d": "Schminke aus Menschenasche, aufs Gesicht gemalt, schützt vor Geistern und schenkt gelegentlich Blicke in die Länder der Toten.",
     "t": [
      "Düstere Zeichen",
      "Geister besänftigen",
      "In die Unterwelt blicken"
     ],
     "en": [
      "somber markings",
      "ghost placation",
      "see into the underworld"
     ],
     "w": "Unheimlich",
     "enw": "creepy"
    },
    {
     "n": "Trapped spirit",
     "d": "In dieser Glaskugel steckt ein bösartiger Geist. Zerbricht das Glas, entlädt sich sein Zorn – hoffentlich auf deine Feinde.",
     "t": [
      "Gefangener Geist",
      "Telekinetischer Angriff",
      "Hektisches Kreischen"
     ],
     "en": [
      "trapped spirit",
      "telekinetic assault",
      "hectic scream"
     ],
     "w": "Wahllose Ziele",
     "enw": "indiscriminate targets"
    }
   ]
  },
  {
   "id": "fahrzeuge",
   "titel": "Fahrzeuge",
   "en": "Vehicles",
   "p": 268,
   "img": "img/katalog/fahrzeuge.webp",
   "intro": [
    "Man hat sich vielleicht einen riesigen Truck gekauft – aber ohne Wartung und Treibstoff (per Loading Up) steht er nur herum. Fahrzeuge lassen sich auch mieten, stehlen oder leihen („Ich bringe ihn genauso zurück, versprochen!“).",
    "Fahrzeug-Tags kommen vor allem bei Verfolgungsjagden und Feuergefechten oder auf Reisen durch Landschaften zum Einsatz. Normales Fahren oder Fliegen braucht keinen Wurf – man erzählt es parallel zu einer anderen Aktion (siehe Narration, S. 85). Gewürfelt wird nur, wenn das Steuern schwierig oder gefährlich ist: unter Beschuss, in engen Gassen, bei Orientierungslosigkeit, schwieriger Landung oder Straßenhindernissen.",
    "Bei Bedarf kann die SL dem Fahrzeug ein Wrecked-Limit geben; es lässt sich später mit passenden Fertigkeiten und Werkzeugen restaurieren. Typische Konsequenz: kurzzeitig die Kontrolle oder das Tempo verlieren."
   ],
   "allg": [
    {
     "items": [
      "Chopper",
      "Gyro-Cycle",
      "Drachenflieger",
      "Hover-Auto",
      "Hoverboard",
      "Jetski",
      "Fallschirm",
      "Privatflugzeug",
      "Rostiger Bodenwagen"
     ],
     "features": [
      "Gepanzert",
      "Firewall-gesichert",
      "Düsentreibstoff-Einspritzung",
      "Neurale Steuerung"
     ],
     "flaws": [
      "Unfallträchtig",
      "Spritfresser",
      "Schlechte Handhabung",
      "Gestohlen"
     ]
    }
   ],
   "items": [
    {
     "n": "Gyeong Motors V-260 Sports Car",
     "d": "Schnell und wendig; dieses Modell bringt viele nützliche integrierte Geräte mit.",
     "t": [
      "Sportwagen",
      "Überlegene Straßenlage",
      "Integrierte Geräte",
      "Statussymbol"
     ],
     "en": [
      "sports car",
      "superior handling",
      "integrated devices",
      "symbol of wealth"
     ],
     "w": "Kaum Sicherheitsausstattung",
     "enw": "minimal safety features"
    },
    {
     "n": "NM3 Armored Utility Car Mark V",
     "d": "Ein sicheres Transportmittel mit mehrschichtigen Panzerplatten und aktiven Bedrohungssensoren.",
     "t": [
      "Gepanzerter Wagen",
      "Niedriger Schwerpunkt",
      "Aktive Bedrohungssensoren",
      "Versuch's gar nicht erst"
     ],
     "en": [
      "armored car",
      "low center of gravity",
      "active threat sensors",
      "don’t even try me"
     ],
     "w": "Langsam, aber stetig",
     "enw": "slow and steady"
    },
    {
     "n": "NM3 Hawk-2 VTOL flier",
     "d": "Marktführer bei paramilitärischen Gruppen: Dem Senkrechtstarter (VTOL) vertraut man bei fast jedem Einsatz.",
     "t": [
      "VTOL-Flieger",
      "Dicke Panzerung",
      "Lange Flüge",
      "EMP-gehärtet"
     ],
     "en": [
      "VTOL flier",
      "thick armor",
      "long flights",
      "reinforced against EMP"
     ],
     "w": "Starker Wind",
     "enw": "strong winds"
    },
    {
     "n": "Qhaos Pro-Level Hoverboard",
     "d": "Ein bekannter Name bei Vektorschub-Hoverboards. Es schwebt mehrere Meter über dem Boden – Mutige fliegen noch höher.",
     "t": [
      "Hoverboard",
      "Waghalsige Tricks",
      "Coolness-Faktor"
     ],
     "en": [
      "hoverboard",
      "daredevil tricks",
      "cool factor"
     ],
     "w": "Scharfe Kurven",
     "enw": "sharp turns"
    },
    {
     "n": "Taipan E5X “Venom” Motorbike",
     "d": "Ein Liebling der Straßenkämpfer wegen der eingebauten Waffenhalterungen.",
     "t": [
      "Gepanzertes Motorrad",
      "Schnell auf den Straßen",
      "Waffenhalterungen",
      "Fahren und schießen"
     ],
     "en": [
      "armored motorbike",
      "fast in the streets",
      "weapon mounts",
      "drive and shoot"
     ],
     "w": "Schwaches Chassis",
     "enw": "weak chassis"
    }
   ]
  },
  {
   "id": "waffen",
   "titel": "Waffen",
   "en": "Weapons",
   "p": 269,
   "img": "img/katalog/waffen.webp",
   "intro": [
    "Es muss eine physische Grenze geben, wie viele Schusswaffen eine einzelne Person tragen kann – ihr werdet sie sicher herausfinden wollen.",
    "Waffen sind nur selten unauffällig. In vielen Teilen der Megastadt trägt man aber ganz offen eine Seitenwaffe, und Passanten stören sich nicht daran, solange die Person respektabel wirkt und die Waffe nicht zu groß ist.",
    "Waffen-Tags kommen fast nur beim Angreifen zum Einsatz. Typische Konsequenz: Ladehemmung (Tag verbrennen)."
   ],
   "allg": [
    {
     "l": "Schusswaffen",
     "items": [
      "Sturmgewehr",
      "Schwere Pistole",
      "Jagdgewehr",
      "Automatikpistole",
      "Minigun",
      "Taschenpistole",
      "Railgun",
      "Revolver",
      "Schrotflinte",
      "Scharfschützengewehr",
      "Maschinenpistole",
      "Taktisches Gewehr",
      "Taser"
     ]
    },
    {
     "l": "Nahkampfwaffen",
     "items": [
      "Armeemesser",
      "Schlagstock",
      "Bajonett",
      "Breitschwert",
      "Zeremoniendolch",
      "Verbundbogen",
      "Armbrust",
      "Garrotte",
      "Katana",
      "Schlagring",
      "Morgenstern",
      "Rettungsaxt",
      "Shuriken",
      "Speer",
      "Stab",
      "Peitsche"
     ]
    },
    {
     "l": "Sprengstoffe & Eigenschaften",
     "items": [
      "[Splitter-/Blend-/Rauch-/Schlafgas-]Granaten",
      "Luftschlag-Laserpointer",
      "Antipersonenmine",
      "Granatwerfer",
      "Raketenwerfer"
     ],
     "features": [
      "Maßgefertigt",
      "Defensiv",
      "Leicht zu verbergen",
      "Extreme Reichweite",
      "Vollautomatik",
      "Feinabzug",
      "Großkalibrige Kugel",
      "Einschüchternd",
      "IR-Visier",
      "Großes Magazin",
      "Monomolekulare Schneide",
      "Schnelles Nachladen",
      "Intelligente Zielerfassung",
      "Zielfernrohr",
      "Gegen ungepanzerte Ziele",
      "Nicht rückverfolgbar",
      "Breite Streuung"
     ],
     "flaws": [
      "Billige Machart",
      "Unhandlich",
      "Ungenau",
      "Klemmt oft",
      "Neigt zum Rosten",
      "Sperrig"
     ]
    }
   ],
   "items": [
    {
     "n": "Acciaio Clandestine “Pop Out” Articulated Sidearm and Brace",
     "d": "Eine Metallschiene am Unterarm, die auf eine Geste hin eine Flechette-Pistole in deine Handfläche klappt.",
     "t": [
      "Gelenk-Seitenwaffe mit Schiene",
      "Flechette-Munition",
      "Schnelles Ziehen",
      "Überraschungsmoment"
     ],
     "en": [
      "sidearm and brace",
      "flechette ammo",
      "quick draw",
      "surprise factor"
     ],
     "w": "Dicke Ärmel oder Handschuhe",
     "enw": "thick sleeves or gloves"
    },
    {
     "n": "Acciaio Clandestine “Riservato II” Silenced Pistol",
     "d": "Mit eingebauten Gasabsorbern und reibungslosem Lauf verursacht die Pistole beim Schuss kaum messbaren Lärm.",
     "t": [
      "Schalldämpfer-Pistole",
      "Schuss aus nächster Nähe",
      "Gut zu verbergen"
     ],
     "en": [
      "silenced pistol",
      "point blank shot",
      "concealable"
     ],
     "w": "Ungenau auf große Distanz",
     "enw": "inaccurate at long distance"
    },
    {
     "n": "Elysian Blades Monofilament Longsword",
     "d": "Die Schneide dieser Stahllegierungsklinge ist mit einem synthetischen Draht von wenigen Molekülen Breite besetzt – die schärfste Kante, die Maschinen herstellen können.",
     "t": [
      "Monofilament-Langschwert",
      "Schneidet durch Panzerung",
      "Maßgefertigte Scheide"
     ],
     "en": [
      "monofilament longsword",
      "cut through armor",
      "custom scabbard"
     ],
     "w": "Muss sehr vorsichtig geführt werden",
     "enw": "must be handled very carefully"
    },
    {
     "n": "Gorts & Jasper 81-V Shotgun",
     "d": "Auf „altmodisches“ Gefühl getrimmt, aber aus modernen Materialien: Diese kurzläufige Schrotflinte ist enorm beliebt.",
     "t": [
      "Schrotflinte",
      "Breite Streuung",
      "Enterhaken unter dem Lauf",
      "Altmodisch"
     ],
     "en": [
      "shotgun",
      "wide spread",
      "underbarrel grappling hook",
      "old-fashioned"
     ],
     "w": "Rückstoß",
     "enw": "recoil"
    },
    {
     "n": "Gorts & Jasper KS-125 “Kiss Kiss” High-Precision Rifle",
     "d": "Ein Fernkampfgewehr, bekannt für Zuverlässigkeit und modularen Aufbau.",
     "t": [
      "Hochpräzisionsgewehr",
      "Große Reichweite",
      "Thermisches Zielfernrohr",
      "Zuverlässig"
     ],
     "en": [
      "high precision rifle",
      "long range",
      "telescopic thermal sight",
      "reliable"
     ],
     "w": "Schwer zu verbergen",
     "enw": "hard to conceal"
    },
    {
     "n": "Happy Hunting! P-23 Disposable Sidearm",
     "d": "Eine billige Plastikpistole aus dem Automaten, die kurz nach dem Schuss zerfallen soll.",
     "t": [
      "Wegwerf-Pistole",
      "Leicht zu verbergen",
      "Leicht zu entsorgen",
      "Neon-Punk-Look"
     ],
     "en": [
      "disposable pistol",
      "easily concealed",
      "easily disposable",
      "neon punk look"
     ],
     "w": "Billige Fertigung",
     "enw": "cheap make"
    },
    {
     "n": "Kikuchi Corp DS “Deep Clean” Minigun",
     "d": "Eine große, tragbare Montagewaffe mit Trommelmagazin, die tausende Schuss pro Minute abfeuert.",
     "t": [
      "Minigun",
      "Deckung durchschlagen",
      "Panzerbrechend",
      "Furchteinflößend groß"
     ],
     "en": [
      "minigun",
      "break through cover",
      "armor piercing",
      "scary big"
     ],
     "w": "Nicht „gezielt“, eher „in die Richtung gehalten“",
     "enw": "not exactly “aimed”, more like “pointed toward”"
    },
    {
     "n": "Kikuchi Corp DX “Bleach” Flamethrower",
     "d": "Ein kompakter Flammenwerfer mit metallumwickeltem Schlauch und leichtem Rucksack voller Brennstoffzellen.",
     "t": [
      "Flammenwerfer",
      "Brennbares entzünden",
      "Hitze kontrollieren"
     ],
     "en": [
      "flamethrower",
      "ignite flammable material",
      "control the heat"
     ],
     "w": "Gefahr einer Treibstoffexplosion",
     "enw": "fuel explosion risk"
    },
    {
     "n": "UrbanWar Paralyzing Taser",
     "d": "Eine kleine, kompakte Elektroschockwaffe, die gepaarte hochgeladene Widerhaken verschießt – für nicht tödliche Festnahmen und elektrisches Chaos.",
     "t": [
      "Taser",
      "Cybernetik durcheinanderbringen",
      "Kontakt halten für mehr Ladung"
     ],
     "en": [
      "taser",
      "cybernetics scrambling",
      "maintain contact for extra charge"
     ],
     "w": "Geerdete Ziele",
     "enw": "grounded targets"
    },
    {
     "n": "UrbanWar Retractable Staff",
     "d": "Ein 1,5 m langer Karbonfaser-Stab, der sich auf Taschenlänge zusammenschieben lässt.",
     "t": [
      "Ausziehbarer Stab",
      "Hebelwirkung",
      "Karbonfaser-Bauweise",
      "Überraschungsmoment"
     ],
     "en": [
      "retractable staff",
      "mechanical leverage",
      "carbon fiber construction",
      "surprise factor"
     ],
     "w": "Braucht Platz zum Schwingen",
     "enw": "needs room to swing"
    }
   ]
  }
 ]
};
