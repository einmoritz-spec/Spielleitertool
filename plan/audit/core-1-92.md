# Inhaltsabgleich: Metro-Corebook S. 1–92 gegen Repo (nur Lesen)

Quelle: /mnt/user-data/uploads/Otherscape___Regeln___Corebook_Metro__EN_.pdf, Seiten 1–92 (PDF-Seite = Buchseite).
Repo: /home/claude/spielleitertool/otherscape/js/data/ und img/.
Stand: 2026-11-12. Keine Änderungen am Repo, kein git.

## 1. Was im PDF steckt (S. 1–92)

- S. 2–7: Impressum, Inhaltsverzeichnis, Vorspann-Fiktion
- S. 8–13: Kapitel 0 "Signal in the Noise": Kurzüberblick, Ablauf, Actions, Challenges, Upgrades, Loadout
- S. 14–63: Kapitel 1 "Imagine": Welt, Technik, Megacity, Cyberspace, Gesichter (Archetypen), Jobs, Orte, Quellen, Akteure, Story-Hooks, Glossar
- S. 64–92: Kapitel 2 "Play": Rollen, Charaktere, Tags, Themes, Crew, Szenen, Spotlight, Interjections, Handeln, Wurf, Quick Outcomes, Tag-Regeln, Effects, "Under the Hood"

## 2. Fehlende oder unvollständige Inhalte im Repo

### 2a. Regeln (Kapitel 0 und 2)

Vorhanden in js/data/regelwerk.js: Szenenablauf (S. 76), Wurf und Power (S. 87–88, verkürzt), Effects-Tabelle (S. 91, korrekt). Dazu kommen Teile aus rules.js und app.js.

Fehlt komplett (nur in Abenteuerdateien oder gar nicht):
- S. 8–13: Überblick "Was ist das Spiel", "Was tust du", Challenges, Evolution, Persönliche Story-Bögen, Power-Optionen-Überblick
- S. 66–67: Rollen (MC, NPC, Serie/Session/Szene), "Dies ist ein Gespräch", Lernweg
- S. 69–71: Charakter und Crew, Tag-Beispiele, Quality/Gear/Assets/Ability/Skill/Connections/Scene/Statuses
- S. 72: Charakterkarte (Character Card)
- S. 73: Tag-Dauer, Tags verbrennen, "Nicht alles braucht einen Tag", Power-Tags vs. Schwächen-Tags
- S. 74–75: Themes, Theme-Typen, Motivationen und Decay-Track, Upgrade-Track, Crew-Theme, Theme-Specials, Crew-Beziehungen (nur in Abenteuer-Daten als Begriff, keine Regel)
- S. 77–78: Beispiele für Szenen, PCs, Challenges, neutrale NPCs, Threats und Consequences, Scene-Flow
- S. 79–81: MC-Rolle, Szene etablieren, Challenge-Typen, Pace und Schwierigkeit (Hard/Open)
- S. 82–83: Spotlight, Spotlight halten, vorher handeln, Interjections (nur als Wort in Abenteuern)
- S. 84–86: Handlung erzählen, "Was ist dramatisch, was sicher", Erzählbeispiele, komplexe Aktionen zerlegen
- S. 87: "Nur direkt relevante Tags zählen", Irrelevanz (Repo nennt nur "relevante Tags")
- S. 87: Power kann unter 0 fallen (fehlt im Repo)
- S. 88: Schlangenaugen (1+1) immer Miss, Boxcars (6+6) immer 10+ (fehlt im Repo)
- S. 88: Quick-Outcomes-Beispiel (Tür-Hack) nur grob als "ein Treffer überwindet die Challenge" vereinfacht
- S. 89: Optionalregel "Power Tag Cap" (fehlt)
- S. 89: Tag-Kombinationen und Broad vs. Narrow Tags (nur "Doppelnutzung" übernommen)
- S. 89–90: Größerer Erfolg bei 10+ kostet 2 Power (eine für das Minimum, eine für die Consequences). regelwerk.js nennt nur "+1 Power", die Kosten fehlen
- S. 92: "Unter der Haube": nur drei Kern-Effects (Status-Tier +/- 1 Power, Story-Tag +/- 2 Power, Detail 1 Power). Fehlt im Repo.

Abweichungen zum PDF (nicht fehlend, aber ungenau):
- regelwerk.js "Minimum eins" steht im Wurf-Block, im PDF ist es die "Rule of Minimum One" (S. 90, nicht S. 87). Inhaltlich korrekt, Seitenangabe falsch.
- regelwerk.js "Tracked: ... bis das Limit erreicht ist": das Limit steht im PDF erst bei Challenges (S. 81–82), nicht im Wurf-Kontext. Sinngemäß richtig.

### 2b. Setting (Kapitel 1, S. 14–63)

Vorhanden in js/data/metro.js (Kurzfassungen): S. 18, 20, 22, 24, 27, 30 (Welt, Mythos, Technik, Megacity, Cyberspace, Gesichter), S. 47–60 (Akteure), S. 60 (Philosophie und Religion).

Fehlt oder nur als Stichwort:
- S. 19: Städte in Trümmern, Transhumanismus, Tech Noir, Gangs und Kulte
- S. 21: Esoterik (Source-Touched, Relikte, Thin Places, Avatare, rituelle Kosten)
- S. 23: Unmenschliche KI, Neo-Materialien, Transit, Tötungsgeräte
- S. 25: Verschmutzung, globale Katastrophen, Hyperinflation und Krypto, Nachbarschaft
- S. 26–29: The Spirals, The Tangle, Nearspace, AR-Alternates, Infospace
- S. 30–33: Mercs und Privateers, Konzern-Kräfte, Gangster, Dämonen/Geister/Götter, Cyborgs und Synths, Cyber-Entitäten, Crossovers
- S. 34–38: Archetypen (Gesichtswandler-Infiltrator, Seelen-Theurg, Drohnenpilot, Chromed-up, Gottgeehrter Krieger, Eiskalter Handler, Technischer Artisan, Schamane, Schrotthändler, Fixer, Gemeinschaftsschutz, Elite-Spezialisten, Quellenkabale, Quellenjäger, Straßengang), Crew-Hooks "Found Family" und "Wanted"
- S. 39–40: Jobs (Entführung, Akquise, Diebstahl, Angriff, Spionage, Ritual, Erkundung, Transport, Quellenjagd)
- S. 41–43: Ortstypen (Kern, Gewerbe, Konzernenklave, Industrie, mythisches Gebiet, Slums, Unterstadt, Randzone, Marktplatz, Treffpunkt, Nachtclub, gesicherter Ort, Kampfzone, Werkstatt)
- S. 44–45: Quellen-Beispiele (Camazotz, Durendal, The Forge of Ilmarinen, Feathers of Ma'at, Manticore, Talos, Raskovnik, Nagaloka, Ophanim, Moving Sands; Namen aus dem PDF, Übersetzung nicht geprüft)
- S. 47–59: Story-Hooks zu allen Akteuren (Epis, NMM, KOCMOC, Bhangers, Santa Lucia, Gordian, Stratosphere, CryoCharm, Chimaerics, Viral Movements) fehlen. Im Repo ist nur die Kurzbeschreibung.
- S. 57–59: Bouda-Scribblings, Numbing, Holografische Geister, Otherscape-Fundamentalismus, Konvergenz-Dämonen, AR-Todesrennen (fehlt außer AR-Todesrennen als Stichwort)
- S. 61: Interpen, Materialismus, Simulationismus, Otherscapismus (Suche in js/ ohne Treffer: fehlt)
- S. 62–63: Glossar (Anthroform, Enklave, Esoterik, Rogue AI, Quelle usw.). Im Repo nur Anthroform in katalog.js, Enklave gar nicht.

### 2c. Kits, Katalog, Overviews

kits.js (S. 247 ff.), katalog.js (S. 252 ff.), overviews.js und pages.js (Tokyo-Abschnitte) liegen außerhalb des Prüfbereichs S. 1–92 und wurden nicht im Detail abgeglichen.

## 3. Bilder (pdfimages, S. 1–92)

Gesamt: 105 eingebettete Bilder. Nach dem Filter (eine Seite unter 300 px ausgeschlossen) bleiben 101 Dateien in /home/claude/work/audit/img/core-1-92/ (Namen p-NNN.jpg, Nummer = pdfimages-Index).

Grundsätzlich: Die meisten Rasterbilder sind ganzseitige Hintergründe, Karten-Rahmen und Textur-Flächen (1229×1589). Die Illustrationen sind darin eingebettet, mit Text oder Karten teils darüber. Ein direkter Export ist also meistens nicht nutzbar, Zuschnitt nötig.

Nicht nutzbar (Text ist eingebaut): p-000 (S. 1, Cover mit Titel), p-078 (S. 71, Uxagi-Charakterkarte mit Text), p-071 (S. 64, "PLAY"-Überschrift im Bild), p-057 (S. 52, "The Gordian" als Banner), p-015 und p-016 (S. 12, Textbanner).

### Empfohlene Kandidaten (Sichtprüfung grob, ohne Hash-Abgleich)

| Datei | S. | Größe | Inhalt grob | Kontext im Buch | Empfehlung im Repo |
|---|---|---|---|---|---|
| p-017.jpg | 13 | 1229×1589 | Fünf Figuren mit Waffen, Mythos-Figur in der Mitte, oberes Drittel leer | "Was steht im Corebook" | Oben zuschneiden, für Setting-Übersicht oder als Kopfbild Welt. Keine Textteile im Bild |
| p-060.jpg | 53 | 1229×1589 | Figur mit rotem Band, grüner Hintergrund | The Gordian, Unseen Grimoire | Akteur-Karte "The Gordian" (metro.js, S. 52). Quadrat mit Kopf und Oberkörper, klein |
| p-054.jpg | 50 | 1229×1589 | Figur mit Ball vor Stadtbild | Veera Bhangers | Akteur-Karte "Veera Bhangers" (metro.js, S. 50). Quadrat zuschneiden |
| p-034.jpg | 30 | 1229×1589 | Schütze mit Gewehr, Karten auf der Seite | Mercs und Privateers | Kachel "Mercs" oder Gesichter-im-Spiegel (metro.js, S. 30). Karte herausschneiden |
| p-036.jpg | 32 | 1229×1589 | Zwei Karten: blaue Cyber-Figur, geflügelte Gestalt | Dämonen, Geister, Götter | Mythos-Kachel (S. 32). Karten-Rahmen beim Zuschnitt entfernen |
| p-037.jpg | 33 | 1229×1589 | Zwei Karten: Cyborg, Brute mit Drohnen | Cyborgs und Synths, Cyber-Entitäten | Cyber-Entitäten (S. 33) |
| p-030.jpg | 26 | 1229×1589 | Stadt bei Sonnenuntergang mit Glitch-Spiralen | The Spirals | Landschaftsbild für "Spiralen und Tangle" (S. 26) |
| p-032.jpg | 28 | 1229×1589 | Silberne Cyber-Frau vor dunklem Grund | Cyberspace, The Tangle | metro.js "Cyberspace" (S. 27) |
| p-019.jpg | 15 | 1229×1589 | Frau in Gasse, Leuchtreklame "EPIS" im Bild | Epis, Setting-Öffnung | Epis-Karte (S. 47). Reklame-Text vorher wegschneiden |
| p-021.jpg | 17 | 1229×1589 | Pinke Figur mit Katana | Technik und Noise | Kachel "Technik und Noise" (S. 22) |
| p-024.jpg | 20 | 1229×1589 | Goldene Mythos-Figur vor dunklem Grund | Mythos als Waffe | Kachel "Mythos als Waffe" (S. 20) |
| p-028.jpg | 24 | 1229×1589 | Neonstraße mit Laterne und Figur | Leben in der Megacity | Kachel "Leben in der Megacity" (S. 24) |
| p-018.jpg | 14 | 1229×1589 | Straßenszene bei Nacht, "IMAGINE"-Schriftzug links oben | Kapitel-1-Öffnung | Nur nach Zuschnitt (Schriftzug entfernen) |

Hinweise:
- p-096 (S. 83) zeigt laut Sichtprüfung eine Buddha-Statue vor einer Stadt. Die Seitenzuordnung ist unsicher (Kapitel 2 passt nicht zum Motiv); vor einer Nutzung nachsehen.
- p-072 (S. 65) zeigt eine rote Sigil-Gestalt. Gehört zu Kapitel 2, im Repo ohne Bezug.
- Nicht sicher zugeordnet: die übrigen ganzseitigen Hintergründe. Sie sind für das Repo nicht sinnvoll.

### Nutzung im Repo

- /home/claude/spielleitertool/otherscape/img/ enthält keine Bilder aus dem Corebook S. 1–92. Die Dateien sind Tokyo-Titelbilder (*-titel.webp, *-s*.webp), Katalogbilder (katalog/*.webp), Hero-Bilder (hero/*.webp) und logo.webp.
- bilder.js verweist nur auf Tokyo-Abenteuer-Illustrationen (S. 240–342).
- index.html referenziert nur logo.webp.
- Der Abgleich per Dateihash wurde nicht durchgeführt. Eine Dublette ist aber unwahrscheinlich, weil die Dateinamen keinen Bezug zum Metro-Corebook haben.

## 4. Bereits vorhanden (Kurzliste)

- Szenenablauf S. 76 (regelwerk.js): inhaltlich korrekt
- Wurf: 2W6 + Power, 10+/7–9/6- (regelwerk.js, S. 87–88): korrekt, mit den Lücken aus 2a
- Effects-Tabelle (regelwerk.js, S. 91): alle zwölf Effects mit korrekten Kosten geprüft
- Keine Doppelnutzung (S. 89): korrekt
- Rule of Minimum One: korrekt, Seitenangabe falsch (siehe 2a)
- Akteure (metro.js, S. 47–60): elf Einträge mit Kurzfassung, Stichprobe korrekt. Nicht jeder Satz vollständig geprüft
- Welt und Megacity (metro.js, S. 18–30): sechs Einträge

## 5. Hinweise für Entscheidungen

- Priorität Regeln: Kapitel 2 (S. 66–86) komplett nachtragen, insbesondere Charakterkarte, Themes, Tag-Dauer, Spotlight, Interjections und Challenge-Typen. Das sind die Bausteine, die Spieler:innen am häufigsten brauchen.
- Priorität Setting: Archetypen (S. 34–38), Ortstypen (S. 41–43), Story-Hooks (S. 47–59) und Glossar (S. 62–63) fehlen vollständig.
- Die Abenteuer-Dateien (Tokyo) enthalten bereits Begriffe wie Interjektion, Decay und Motivation. Dort ist der Regelbezug aber nicht erklärt.
- Die Repo-Texte sind eigene Kurzfassungen. Eine wörtliche Übernahme ist nicht vorgesehen. Der Abgleich bezieht sich auf Inhalte, nicht auf Wortlaut.
