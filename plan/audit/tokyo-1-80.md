# Inhaltsabgleich Tokyo Setting Book, S. 1–80 gegen Repo

Stand: 2026-11-12. Nur Lesezugriff, keine Änderungen am Repo, kein git.

Quellen:
- PDF: /mnt/user-data/uploads/Otherscape___Setting___Settingbook_Tokyo__EN_.pdf, S. 1–80 (Text per pdftotext -layout, Textextrakt: /home/claude/work/audit/tokyo-1-80.txt)
- Repo: /home/claude/spielleitertool/otherscape/js/data/ (inkl. abenteuer/) und /home/claude/spielleitertool/otherscape/img/

Umfang der Seiten 1–80: Kapitel 1 (//Tokyo Megacity, S. 6–39: Überblick, Orte, Bezirke, Fraktionen, Glossar) und den Anfang von Kapitel 2 (//Bushi/Life, S. 40–80: neue Charaktertropes, Themen-Kits). Abenteuer beginnen erst ab S. 240, daher gibt es auf diesen Seiten keine Abenteuer.

---

## Fehlende Inhalte

Die Themen-Kits und Tropes aus Kapitel 2 sind die größte Lücke. Die Datei kits.js enthält nur 12 Kits (Cyberspace und Drohnen, aus dem Metro-Grundbuch S. 247–251). Für Tropes gibt es keine Datendatei. Kits und Tropes werden in den Abenteuerdateien höchstens als Name erwähnt.

### A. Charakter-Tropes (S. 43–53), keine Kartendaten vorhanden
- S. 43 Ghostly Kami Burglar, Assassins & Spies: keine Treffer im Repo
- S. 44 Creator of Cyberlife (Cybernetics Junkie): keine Treffer
- S. 45 Solar-Powered Technician (Cutting-edge Techies): nur 1 Erwähnung in fraktion-taiyo.js, keine Trope-Karte
- S. 46 Unwitting Nanotech Wielder (Everyday Survivors): keine Treffer
- S. 47 Oni Motorcycle Courier (Hired Guns): nur Erwähnung in fraktion-oni-gangs.js
- S. 48 Enlightened Child (Mystics & Occultists): nur Erwähnungen in Abenteuern, keine Trope-Karte
- S. 48/52 Hanko Enthusiast (Subculture Exemplars): nur Erwähnungen in pages.js und fraktion-viral.js
- S. 49 Onmyōji Inspector (Noir Antiheroes): Inhalt steckt teils in fraktion-bureau.js, aber nicht als Trope
- S. 50 Clerk of the Demon Court (Power Players): nur Erwähnung in fraktion-king-enma.js
- S. 51 Meido Yamabushi (Scavengers & Outlanders): keine Treffer
- S. 53 Digitized Kami (Transhumans): keine Treffer

### B. Self-Theme-Kits (S. 54–59), keine Kit-Daten vorhanden
Budō Practitioner, Bushi Aspirant, Horizon Self (Claim Birthright, Cleanse the Past), Harmonious Leader, Kenjutsu Expertise, Nanite Veteran, Neo-Samurai Armor, Otaku, Precocious Youth, Yakuza Membership, Yōkai Slayer.
- Nur Erwähnungen gefunden: Cleanse the Past (setting-ueberblick.js), Neo-Samurai Armor, Kenjutsu, Otaku.
- Keine Treffer: Budō Practitioner, Bushi Aspirant, Claim Birthright, Harmonious Leader, Nanite Veteran, Precocious Youth, Yōkai Slayer.

### C. Mythos-Theme-Kits (S. 60–65), keine Kit-Daten vorhanden
Figurine of Corruption (S. 60), Hanko Seal Magic, Helpful Ghost (S. 61), Karmic Decree (S. 61), Kitsune Charm of Trickery (S. 62), Legendary Weaponsmith (S. 62), Oni Mask (S. 63), Onmyōdō (S. 63), Shikigami (S. 64), Spirit Form (S. 64), Tezuma Magic (S. 65), Zenlike Peace (S. 65).
- Nur Erwähnungen gefunden: Figurine of Corruption (setting-ueberblick.js), Oni Mask (fraktion-oni-gangs.js), Shikigami (fraktion-bureau.js, setting-ueberblick.js), Zenlike Peace (setting-ueberblick.js), Tezuma (setting-ueberblick.js), Hanko-Magie.
- Keine Kit-Karten für: Helpful Ghost, Legendary Weaponsmith, Spirit Form, Karmic Decree (nur Erwähnung), Kitsune Charm (nur Erwähnung in Kitsune-Abschnitt).

### D. Noise-Theme-Kits (S. 66–70), keine Kit-Daten vorhanden
Anti-Nanite Gear (S. 66), AR Gamer (S. 66), Briefcase Weapon (S. 67), Enhanced Clone (S. 67), Eye-Catching Projections (S. 68), Giant Combat Mecha (S. 68), Holographic Companion (S. 69), Kumo Pilot (S. 69), Laser-Edged Katana (S. 70).
- Im Repo fehlen alle neun Kits als Karten. kits.js hat nur Cyberspace und Drohnen aus dem Grundbuch.
- Nur Erwähnungen: Kumo Racing (fraktion-viral.js), Briefcase (bridge-too-far-2.js), Eye-Catching (fraktion-tokoyo.js).
- Super-Spreader-Special (S. 68) fehlt ebenfalls, nur Begriffe wie "Noise" sind vorhanden.

### E. Teilweise oder nur verwiesen (Kapitel 1)
- S. 8–9 Eingangsszenen (Salaryman am Dōsojin-Schrein, Onmyōji-Inspektorin mit Shikigami): setting-ueberblick.js enthält S. 8 nur als vorlesen_ref und eine Kurzfassung der drei Szenen. Der Wortlaut von S. 9 ist nicht als Vorlesetext übernommen. Nicht vollständig Wort für Wort geprüft.
- S. 38–39 Glossar: Abschnitt "Glossar" in setting-ueberblick.js ist vorhanden. Vollständigkeit der Einträge nicht geprüft.

Kapitel 1 ist sonst abgedeckt: Bezirke S. 31–34 (alle 12 Bezirke als Titel in setting-bezirke.js), Orte S. 35–37 (13 Szenenorte in setting-orte.js), Überblick, Konzerne, Fraktionen, Source- und Kami-Typen in setting-ueberblick.js.

---

## Nutzbare Bilder, noch ungenutzt

Extrahiert nach /home/claude/work/audit/img/tokyo-1-80/. Alle Dateien haben 1229x1589 px. Die Dateinamen tragen die Objektnummer aus pdfimages, nicht die Seitenzahl. Umrechnung: Datei p-NNN steht auf Seite NNN-2 (für NNN ab 6). p-000 = S. 1, p-001 = S. 2, p-002 = S. 3. Die Icons p-003 bis p-005 (139x289 px) sind ausgeschlossen.

Die meisten Seiten haben nur Hintergrund oder leere Kartenrahmen. Deshalb sind sie hier nicht gelistet: p-001, p-002, p-006, p-007, p-010, p-012, p-013, p-015, p-017, p-018 usw. (Rahmen oder Hintergrund), und p-056 bis p-073 (leere Kit-Kartenrahmen in Lila, Pink, Blau).

### Direkt verwendbar (ohne Text im Bild)
| Datei | S. | Kontext | Empfehlung |
|---|---|---|---|
| img/tokyo-1-80/p-009.png | 7 | Megacity-Skyline mit zwei Gestalten auf einem Dach, Kapitel-1-Einstieg | Als Setting-Überblick nutzen, Bild ohne Zuschnitt verwendbar |
| img/tokyo-1-80/p-011.png | 9 | Kriegerin mit Katana, Onmyōji-Einstieg | Für Bureau of Onmyō (fraktion-bureau.js) oder Einleitung |
| img/tokyo-1-80/p-021.png | 19 | Grünlich leuchtende Gestalt mit Geisterschar, Shikigami-Abschnitt | Für Shikigami/Yūrei in setting-ueberblick.js |
| img/tokyo-1-80/p-029.png | 27 | Kahlköpfige Gestalt mit Katana, rote Hose, Yakuza/Oni-Abschnitt | Für Yakuza (fraktion-yakuza.js) |
| img/tokyo-1-80/p-032.png | 30 | Mädchen in Uniform mit Flammen und Schwingen, Abschnitt Locals | Für Locals oder Mythos |
| img/tokyo-1-80/p-034.png | 32 | Maschinen-Cluster, Drohnen/Panzer | Eher für Fünf-Ringe- oder Assembly-Lines-Bezirk (S. 31) |
| img/tokyo-1-80/p-043.png | 41 | Figuren vor goldener Scheibe in einer Bar-Szene, Kapitel-2-Einstieg | Als Kapitel-2-Illustration |
| img/tokyo-1-80/p-075.png | 73 | Bewaffnete Figur mit Yin-Yang-Schaltkreis | Zuordnung zu einem Kit unsicher, nur im Kontext prüfen |
| img/tokyo-1-80/p-077.png | 75 | Maskierte Gestalt in Kampfszene | Zuordnung unsicher, nur im Kontext prüfen |

### Nur mit Zuschnitt verwendbar
| Datei | S. | Kontext | Empfehlung |
|---|---|---|---|
| img/tokyo-1-80/p-000.png | 1 | Cover "Tokyo :Otherscape, Japan Setting Book" | Titeltext oben und unten entfernen, dann als reine Illustration nutzen (Regel: ohne Titel-/Untertext, ohne weißen Rand). Sonst nicht verwenden. |
| img/tokyo-1-80/p-008.png | 6 | Kapitel-1-Opener, Skyline | Schriftzug "TOKYO MEGACITY" unten links abschneiden |
| img/tokyo-1-80/p-042.png | 40 | Kapitel-2-Opener, Figur an Konsole | Schriftzug "//BUSHI/LIFE" unten entfernen |
| img/tokyo-1-80/p-016.png | 14 | Neonstraße mit Kanji-Schild "他の世界" | Kanji-Schild bleibt im Bild; nur verwenden, wenn der Schriftzug stört nicht |
| img/tokyo-1-80/p-024.png | 22 | Kapuzengestalt mit rotem Lichtball, grüner Mantel | Ortsbezogen (Tempel/Yamabushi), Zuordnung nur als Vermutung |
| img/tokyo-1-80/p-036.png | 34 | Torii vor Stadtsilhouette | Zu Kami-Inseln/Thin Places passend (S. 33), Seitenzuordnung prüfen |
| img/tokyo-1-80/p-041.png | 39 | Monströses Yōkai im Wasser | Für Yōkai-Gegner als kleines Bild in der Challenge-Karte |
| img/tokyo-1-80/p-080.png | 78 | Pfeile und Patronen auf grünem Feld | Für Munition; Zuschnitt auf das Objekt nötig |
| img/tokyo-1-80/p-081.png | 79 | Klinge mit Kanji "改造" (kaizō) | Zuschnitt auf das Objekt; Kanji stören sonst |
| img/tokyo-1-80/p-082.png | 80 | Samurai-Helm auf grünem Feld | Zu Neo-Samurai Armor (S. 57) passend, Zuschnitt auf den Helm |

### Trope-Figuren (Karten mit Rahmen, Figur ausschneiden)
Die Figuren stehen in Trope-Kartenrahmen. Die Rahmen sind Layout und sollten entfernt werden. Der Figurenbereich eignet sich als kleine Illustration in der Karte, wie es die Regel für Challenges verlangt.

| Datei | S. | Figur | Mögliche Trope |
|---|---|---|---|
| p-045.png | 43 | Kahlköpfiger Mann mit Katana, Teal-Rahmen | Ghostly Kami Burglar / Assassins & Spies |
| p-046.png | 44 | Frau mit weißem Haar, leuchtende Strähnen | Creator of Cyberlife |
| p-047.png | 45 | Frau mit Gerät im Sessel | Solar-Powered Technician / Cutting-edge Techie |
| p-048.png | 46 | Mann im Anzug mit rotem Krawatte | Unwitting Nanotech Wielder / Everyday Survivor |
| p-049.png | 47 | Gestalt mit Hut und rotem Lichtball | Oni Motorcycle Courier (Vermutung) |
| p-050.png | 48 | Frau in Weiß/Rot mit Katana | Enlightened Child / Mystic (Vermutung) |
| p-051.png | 49 | Zwei Figuren mit Flammen | Onmyōji Inspector (Noir) |
| p-052.png | 50 | Frau mit Flammen und Fächer | Clerk of the Demon Court (Vermutung) |
| p-053.png | 51 | Bärtige Figur mit Schwert, gelber Mantel | Meido Yamabushi |
| p-054.png | 52 | Frau mit magischen Kugeln | Hanko Enthusiast (Vermutung) |
| p-055.png | 53 | Weißhaarige Figur im grünen Licht | Digitized Kami |

Empfehlung: Ich habe die Figuren nur grob angesehen. Die Zuordnung zu einem Trope-Namen ist aus den Bildern allein nicht sicher, sie folgt den Seitenzahlen und Kontexten im PDF. Vor der Verwendung im Repo am Kartentext prüfen.

### Bereits im Repo genutzt
Keines der extrahierten Tokyo-Bilder wird im Repo verwendet. Im Repo gibt es img/ mit anthill-, biting-bullet-, bridge-too-far-, kenko-ruins-, lost-flooded-, steam-punks-, strings-attached-Bildern, hero/, katalog/ und logo.webp. bilder.js enthält keinen Tokyo-Eintrag (OS_ART kennt nur die Abenteuer).

Vergleich: Ein Average-Hash-Vergleich (16x16) aller Tokyo-Bilder mit den webp-Dateien im Repo ergab keine Übereinstimmung. Der beste Abstand lag bei den künstlerischen Motiven bei 17 von 256 Bit oder mehr. Die Leerseiten nähern sich Repo-Hintergründen an, sind aber keine Duplikate. Diese Prüfung ist grob, die Sichtprüfung der Kontaktbögen bestätigt sie.

---

## Bereits vorhanden
- Bezirke (S. 31–34): alle zwölf Bezirke als Titel in setting-bezirke.js, mit Hooks als knappe Anregungen. Einige Bezirksnamen mit Nebeneffekt (Kumo Racing) sind nur verweisend erwähnt.
- Szenenorte (S. 35–37): alle 13 Orte in setting-orte.js (Bike Parkade bis Ryōkan), mit Ortsbeschreibungen.
- Überblick, Setting, Zen gegen Noise, Technik, Merc-Rangordnung, Kami und Yōkai (S. 13–30): setting-ueberblick.js mit den Kami-/Yōkai-Typen, neuer Source-Typ Emotion, Praktizierende Gruppen, Konzerne, Zaibatsu, Yakuza/Oni, Archetypen und Glossar.
- Fraktionen in Bezug auf Kapitel 1: Bureau of Onmyō, Yakuza, Oni-Gangs und Neo-Samurai sind als eigene Abenteuer-Fraktionen vorhanden.
- Konkreter Inhalt zu S. 1–7 (Cover, Credits, Inhaltsverzeichnis, Einleitung) ist nicht übernommen, das ist aber Front-Matter und nicht Teil des Spielinhalts.
