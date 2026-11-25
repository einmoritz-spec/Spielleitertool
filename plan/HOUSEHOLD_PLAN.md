# HOUSEHOLD – Spielleiter-Tafel (Bauplan)

Stand: 24. Nov. 2026. **Phase 0 (Bestandsaufnahme + Plan) – noch nichts gebaut, keine Mockups.**
Heute ist `household/` nur ein Gerüst (`index.html`, `sys.js` mit grünen Platzhalter-Farben, `img/hero.webp`, `js/suche.js`). Das Hero-Bild ist **nicht endgültig**; erst wenn das Design steht, wird entschieden, welches Bild genutzt wird. Dropdown-Eintrag und Logo (`assets/logos/household.webp`) sind schon da.

Ziel: ein **System „Household“** mit **Untersetting „Der Garten“** (Vol. II) und zwei **Saga-Bereichen** (Abenteuer), alles auf Deutsch, im Design der Buch-PDFs. Ablauf wie in `plan/SYSTEM_EINBAU.md` (zuerst Opus: Design + Mockups, nach Freigabe Umsetzung mit Sonnet).

**Moritz' Vorgabe für dieses System: Bilder müssen wahnsinnig gut eingebaut werden.** Siehe Abschnitt 6 – der Bildplan kommt **vor** den Mockups.

## 0. Entscheidungen (von Moritz, 24. Nov. 2026)
- Ein System mit Untersetting, Aufbau wie unten (Welt/Regeln/Spielleitung + Garten + zwei Sagas).
- **Kein** D&D-Bogen („Adventures in the Household“, `AitH_Character_Sheet`) – weglassen.
- Hero-Bild vorläufig, wird nach dem Design neu entschieden.
- Noch **keine Mockups**, bis er es sagt.
- Der **Garten-Quickstart** (*Introduction to the Garden*, 33 S.) ist nur die kostenlose Vorschau auf Vol. II → **nur als Buch** in der Bücherliste behalten, keine eigenen Inhalte.

### Weitere Entscheidungen (24. Nov. 2026, alle drei Vorschläge von Moritz bestätigt)
1. **Spielbegriffe:** Fließtext deutsch; Eigennamen und Spielbegriffe, die im Buch Eigennamen sind (Household, Little Folk/Littlings, Faeries, Boggarts, Hearth, Realm, Sprites, Sluagh, Horde, Free Dominions, Terrible Terrible Things, Decorum, Aces Up Your Sleeve, Paragraph, Chapter, Saga …), bleiben englisch. Vor dem Bau eine Begriffsliste zeigen.
2. **Abenteuer-Titel** werden übersetzt (z. B. „Die Blaue Ratte“); Personen- und Ortsnamen bleiben.
3. **Karte:** die Taste „m“ öffnet die jeweils passende Karte (Haus, Atlas oder Garten).
4. **Charakterbogen:** nur der normale Household-Bogen, deutscher Nachbau + ausfüllbares PDF, ganz zum Schluss.

### Regeltext-Begriffe (beim Übersetzen, 25. Nov. 2026)
Goal → Ziel, Approach → Vorgehen, Difficulty → Schwierigkeit (Stufen Basic/Critical/Extreme/Impossible englisch), Success → Erfolg (Basic/Critical/Extreme/Impossible Success und Jackpot! englisch), Failure → Misserfolg, Consequences → Konsequenzen, Modifiers → Modifikatoren, Re-roll/Free Re-roll/All In englisch, Raising the Stakes → Einsatz erhöhen, Extra Actions → Zusatzaktionen, Giving Away a Success → Erfolg abgeben, Dice Pool englisch. Regeln-Etappen: 1 ✅ S.83–92 (`regeln-spielen-a.js`), 2 ✅ S.93–105 (`regeln-spielen-b.js`: Reaction, Stress, Fields & Skills, Moves; Overstressed → „Überlastet“, Bow Out/Return on the Scene/Damage Control/Joker englisch), 3 ✅ S.106–127 (`regeln-spielen-c.js`, `-d.js`: Hilfe, Konflikte+Extended Rolls, Kampf, Schießen/Rangelei/Duell, Zustände, Decorum; neue Zustände: Betrunken, Geblendet, Lächerlich, Schuldig; Decorum-Stufen: Ungehobelt, Schäbig, Ordentlich, Elegant, Pompös; Reichweiten: Angrenzend, Kurze Distanz, In Reichweite, Große Distanz, Außer Reichweite), 4 ✅ S.41–82 (`regeln-charakter.js`, `regeln-berufe.js`; Beruf/Berufung, Professions, Vocations, Moves und Traits englisch; Ballade S.48 und Dialog S.82 nicht übernommen), 5 ✅ S.129–150 (`regeln-vertraege.js`: Hereditary + Starchild/Dear to the Hearth/Out of the Spark, Drain & Draft/Revenant/Mächte, Personal + Wallstrider/Goldthirst/Neverheard/Vainglory, TTT + Regeln/Tabelle, Welcoming + Kindled Welcome/Domain; Bilder S.133, 135, 137, 139, 142; Argo-Verse nicht übernommen), 6 ✅ S.151–166 (`regeln-ausruestung.js`: Wealth, Startwealth, Coins, Equipment-Tabelle, Gadgets, Melee/Ranged/Dueling/Armor-Tabellen, Keyskets, Weapon Traits als Raster; Bilder S.152–165; Item- und Waffennamen englisch). Textdaten: `HH_TEXT["haus/regeln/spielen"]` (`js/blocks.js`).
- Bilder Regeln S.42–126 eingebaut (`regeln-bilder.js`, Block `fig`); Bilder ab Etappe 5 direkt mit dem Text einbauen.

### Begriffsliste (Entscheidung Moritz, 24. Nov. 2026)
- **Spielbegriffe englisch:** Stress, Action Roll, Reaction Roll, Basic Success, Critical Success, Moves, Traits, Hindrance, Decorum, Wealth, Coins, Contracts, Aces, Field Point, Skill Points, Weak Spot, Crucial Box, Double Trouble, Triple Threat, Animal Companion; Fertigkeitsfelder Society, Academia, War, Street und alle Fertigkeiten (Athletics, Authority, Caution, Charm, Craft, Dexterity, Elusion, Eloquence, Etiquette, Exploration, Fight, Grace, Insight, Investigation, Strength, Will, Shoot).
- **Eigennamen englisch** (Völker, Orte, Personen, Organisationen, im Garten-Buch auch The Outhold, Colossi, Seelie Court, Seasons): Boggarts, Faeries/Fairy, Sluagh, Sprites, Undines, Salamanders, Littlings, House, Household, Hearth, Inbetweens, Realm, Basement, Upper Floor, Living Room usw.
- **Deutsch:** Narrator → Spielleitung, Player → Spieler:in, Opponent → Gegner, Chapter → Kapitel, Roll → Wurf, Condition → Zustand, Folk → Volk, React → Reagieren; Abenteuertitel werden übersetzt.
- **Zustände deutsch, einheitlich** (Vorschlag, beim Übersetzen gegen das Buch prüfen): Hurt → Verletzt, Tired → Erschöpft, Broken → Gebrochen, Overstressed → Überlastet, Scared → Verängstigt, Frightened → Erschrocken, Embarrassed → Beschämt, Sick → Krank, Poisoned → Vergiftet, Drunk → Betrunken, Confused → Verwirrt, Blinded → Geblendet, Soaked → Durchnässt, Frozen → Durchgefroren, Sweaty → Verschwitzt, Snuffly → Verschnupft.

## 1. Quellen (liegen bei Moritz im Drive „Pen and Paper/Household“, Upload in den Chat)

| Kürzel | Datei | Seiten | Versatz (PDF = Buch + n) | Rolle |
|---|---|---|---|---|
| `core` | `Household___Regeln___1_Household__EN__2.pdf` | 322 | **2** (PDF 6 = S. 4 Vorwort) | Grundbuch Vol. I |
| `guide` | `…Regeln___2_A_Practical_Guide_to_Living_Inside_the_House…pdf` | 210 | **2** | Weltband (Nationen, Alltag, Mysterien, Atlas) |
| `vol2` | `HH2_Volume2_ENG_1_0.pdf` | 322 | **2** | **Garten** (Vol. II, Vollbuch) |
| `fp` | `…Abenteuer___3_A_Saga_of_the_Fragile_Peace…pdf` | 210 | **2** | Saga: Kapitel I–V, ~60 Abenteuer |
| `lw` | `…Abenteuer___A_Saga_of_the_Long_Winter…pdf` | 202 | **2** | Saga: Kapitel VI–VII + Epilog, ~50 Abenteuer |
| `quick` | `…Zusatz___Introduction_to_the_Garden…pdf` | 33 | 0 | Nur Buch (Vorschau auf Vol. II) |
| – | `…Material___Character_Sheet_EN.pdf` | 1 (A4 quer) | – | Charakterbogen (keine Formularfelder → Nachbau) |

Alle PDFs sind englisch, Text ist durchsuchbar (kein Scan), **über 100 MB** → nicht ins Repo (GitHub-Limit). Moritz lädt sie im Tool lokal hoch (PDF-Upload, `S.`-Links öffnen das Original).
Nur `lw` und `vol2` haben PDF-Lesezeichen; bei den anderen stammt die Struktur aus dem gedruckten Inhaltsverzeichnis. Seitenzahlen unten = **Buchseiten**.
Bild-Inventare (Roh-Schätzung, noch ohne Zuordnung): `plan/household/bilder-<kürzel>.tsv`.

## 2. Inhalt der Bücher

### 2a. `core` – Household Vol. I (Buchseiten)
Preface 4 · **I. Folk & Nations** 13: Faeries 16 (Realm 19 · Boggarts 22 · Hearth 25) · Sprites 28 · Free Dominions 31 · Sluagh 34 · Horde 37 — **II. Your Character** 41: Character Sheet 42 — **III. Professions** 49: Soldiers 50, Scholars 54, Hunters 58, Criminals 62, Duelists 66, Animal Handlers 70, Beetle 74, Bumblebee 75, Gecko 76, Mouse 77, Traits 78 — **IIII. How to Play** 83: Action Rolls 86, Reaction Rolls 93, Stress 97, Fields & Skills 100, Moves 104 (Aces Up Your Sleeve 104), Help & Hindrance 106, Conflicts 110, Combat 112, Shooting 118, Conditions & Decorum 122 — **V. Contracts** 129: Hereditary 131, Personal 143, Terrible Terrible Things 146, Welcoming 148 — **VI. Equipment & Wealth** 151: Wealth 152, Equipment 155, Gadgets 156, Weapons 158 — **VII. Household History** 167: Master’s Disappearance 168, Wild Hunt 171, First Household War 172, Battle of Quillwaters 175, High Council 180 — **VIII. Saga** 183: Few or Many Players 189, Historical Events 191, Advancement 196 — **IX. The House** 201: Entry Hall 206, Inbetweens 209, Wheel of the Year 210, Dining Hall 214, Living Room 232, Upper Floor 246, Basement 260 — **Appendix I** 275: Opponent Traits 278, Weak Spots 280, Opponents 282 — **Appendix II** 305: Pride & Prejudice & Centipedes 306.
Weglassen: Inhaltsverzeichnis, Credits/Danksagungen, Backer-Listen (am Buchende prüfen). Hinweis: Vorwort „Readers beware“ (Herasmo) ist Erzähltext des Buchs und bleibt.

### 2b. `guide` – A Practical Guide to Living Inside the House
Foreword 4 · The Porch 6 — **I. Realm** 10: Realm Politics 14, Mystery *Zlad of Wall-lachia* 20, Armed Forces 24, Mystery *The House of Cards* 34, Life 36, Institutions 44, The Kitchen 50 — **II. Hearth** 54: Politics 58, Armed Forces 64, Mystery *The Flame of Love* 70, The Church of Safekeeping 72, Mystery *A Cold Heart* 78, Life 80, Institutions 84, Mystery *The City Inbetween* 94 — **III. Free Dominions** 96: Politics 100, Armed Forces 105, Mystery *Bathlantis* 112, Institutions 114, Mystery *The Mechanical Wonder* 126, Life 128, Argo’s Legacy 132, Mystery *Through the Looking Glass* 134, The Smaller Bedroom 136 — **IIII. Horde** 140: Politics 144, Idol Worship 150, Life 154, Mystery *The Forgotten One* 160, Armed Forces 164, Institutions 170, Mystery *The Spider Convent* 178 — **Appendix I – New Options** 181: New Game Options 182, Snail 184 — **Appendix II – New Characters** 185: Achilles 186, Barron Hargrave 188, Mey Sòng 190, Alexandrine Regret 192, Vega Vankhade 194, Petrolio 196 — **Appendix III – Household Atlas** 199: Highlight Astraviya 200, Lowlight Astraviya 201, Wallford 202, Chesterfield by-the-fire 203, Beddingham 204, Tuberdam 205, Al Sehir 206, Viletia 207.
„Mystery“ = Spielleiter-Abenteuer-Anreißer innerhalb des Weltbands → wie Mysterien in anderen Settings als Karten/Mini-Leitstand behandeln.

### 2c. `vol2` – Household Vol. II: Der Garten (Untersetting)
Introduction 4: F.A.Q. 5 — **I. Folk & Nations of the Garden** 13: Barghests 16 (The Brambles 18) · Gnomes 20 (The Citadel 22) · Fae 24 (The Seelie Court 26) · Shinigami 28 (The Shogunate 30) · Inside Folk 32 — **II. Professions of the Garden** 35: Soldiers 38, Scholars 42, Hunters 46, Criminals 50, Duelists 54, Wayfarers 58, Animal Handlers 62, Frog 66, Ladybug 67, Moth 68, Mole 69, Traits 70 — **III. Contracts of the Garden** 73: Terrible Terrible Things 74, Hereditary 76, Personal 84, Welcoming 89, Favors 90 — **IIII. Equipment** 95: Coins & Barter 96, Goods & Services 97, Weapons 98, Natural Concoctions 108, Mounts 112 — **V. History** 117: A Crack in the Throne 121, The Long Winter 122, A Cold War 124, The Starless Night 127, The Rebirth of Dèndronaos 129, The Brambles Rebellion 130, The Standing Stone 131, The Silver Blade 132 — **VI. Saga** 135: Characters 137, Advancement 138, Historical Events 140 — **VII. The Garden** 151: The Frontier 154, The Underground 157, The Front Yard 160, The Brambles 162, The Woodlands 172, The Barrens 188, The Grasslands 196, The Backyard 210, The Rushes 212, Four Oaks 234 — **VIII. Travel & Seasons** 237: Travel 238, Darkness 254, Severe Stress 256, Seasons 258 (Winter 260, Spring 264, Summer 268, Autumn 272) — **Appendix – Opponents of the Garden** 277: Opponent Traits 279, Opponents 280, Colossi 298.
Der Garten hat eine **eigene Reise-/Jahreszeiten-Mechanik** und **Colossi** (riesige Gegner) – eigene Ansichten nötig.

### 2d. `fp` – Saga of the Fragile Peace
The Historian’s Club 8 · Historical Time-line 10 · **Noteworthy Characters** 13 (24 Figuren, je 2 S.): Dimitri Sokov 14, Ira Poole 16, Jemma Reed 18, Tubo 20, Aidan Mackenna 22, Gwen Summers 24, Malaika Kumari 26, Pierre Delacroyance 28, Humphrey Lockwood 30, Icarus König 32, Litha Flammel 34, Qamar Halabi 36, Gunther Lichtmann 38, Jocelyne Bonheur 40, Micah Doyle 42, Sienna Blackwell 44, Earnest Gilmore 46, Santiago Vilar 48, Siobhan Adhair 50, Yuliya Dragomirov 52, Floyd Hansen 54, Hannah Blaum 56, Priscilla Urbina 58, Zehra Ören 60 · **Adventures in the Saga** 63 (Anleitung)
- **Chapter I** 69: Argo’s Diary 70, The Epidemic 78, The Case of the Missing Bumblebee 86, The Stolen Shipment 94, The Wax Trap 102, The Blue Rat 110
- **II Paragraph I** 121: Tragedy on the Banister 122, On Argo’s Trail 123, Red-Handed 124, The Great Climb 125, The Umbral Frontier 126, Traveling with Protopopolov Part I 127 · **II Paragraph II** 129: The Long Hallway 130, Traveling with Protopopolov Part II 131, Argo’s Tomb 132, A Bitter Pill 133, The Queen and the Boggart 134, Qamar’s Revenge Part I 135
- **III Paragraph I** 137: Breakout at Deepdown 138, By Candlelight 139, Traveling with Protopopolov Part III 140, Murder in Bookshire 141, The Zoological Garden 142, Hunt in Greenwood 143 · **III Paragraph II** 145: Duncan Rox’s Gang 146, Argo’s Code 147, Wanted! 148, Traveling with Protopopolov Epilogue 149, Ira Poole Must Die 150, Qamar’s Revenge Part II 151
- **IIII Paragraph I** 153: The Centennial Celebration 154, Santiago Vilar’s Last Duel 155, Diplomatic Incident 156, Jemma’s Sentence 157, The Spider Cult Part I 158, The Heist of the Century Part I 159 · **IIII Paragraph II** 161: The Spider Cult Part II 162, Petty Protopopolovs 163, The Heist of the Century Part II 164, The Way of Rust 165, The Medjay Order 166, The Tuberdam Monster Part I 167 · **IIII Paragraph III** 169: The Sunset Devil 170, The Tuberdam Monster Part II 171, The Snake’s Tomb 172, Slumming it 173, Doing the Right Thing 174, The Caliph’s Shoes 175
- **V Paragraph I** 177: The Great Yule Ball 178, Hunting the Tristarred 179, The Centennial Rodeo 180, The Stolen Pages 181, Zehra’s Wedding 182, Undercover 183 · **V Paragraph II** 185: Protect and Conquer 186, The Viletia Tournament 187, The Tournoire Uprising 188, Mouse Trap 189, The Hard Life of a Criminal 190, The Cursed Inbetweens 191 · **V Paragraph III** 193: Nothing Ventured… 194, Stone Wings 195, Time to Die 196, Ashes to Ashes 197, The Domain Contract 198, Attack on the Table 199
- **Epilogue** 201: The Fall of Faeriyev 204

### 2e. `lw` – Saga of the Long Winter (Seiten = Buchseiten, PDF-Lesezeichen minus 2)
Introduction 8 (Welcome 8) · **Noteworthy Characters** 11–72 (30 Figuren, je 2 S.): Jemma Reed 12, Kaelan Oakstone 14, Nadja Vokos 16, Soya 18, Chaska Agatanai 20, Gwen Summers 22, Sasaki Naoko 24, Pierre Delacroyance 26, Fandango 28, Humphrey Lockwood 30, Icarus König 32, John Sawyer 34, Koko Sandoval 36, Gunther Lichtmann 38, Jiroku Sensei 40, Pascal 42, Sienna Blackwell 44, Rubio Adhair 46, Santiago Vilar 48, Shiro 50, Yuliya Dragomirov 52, Ajax 54, Lachlan V. Galloway 56, Monika Zee 58, Ronja Rami 60, Cora Idalia 62, Elsie 64, Fiona McInnis 66, Kurai 68, Sakari Redland 70 · **Adventures in the Saga** 73
- **VI Winter** 79: Terrible Terrible Things 80, The Yule Presents 88, Lost in the Snow 94, Return of the Ninja 100, Attack on the Caravan 106, Dirty War 112 · **VI Spring** 119: Stone to Stone 120, Wanted: Dead 121, Lady Origami 122, The Broken Branch 123, Spark of War 124, 33 Ronin 125 · **VI Summer** 127: The Enemy of My Enemy 128, Twigbridge Shindig 129, Arcadia, the Butterfly 130, The Rose and The Thorn 131, Old Friend 132, The Tea Ceremony 133 · **VI Autumn** 135: The Avenging Fury 136, Full of Hate 137, The Shrine of the Pale Coils 138, Day of Reckoning 139, A Lens for a Lens 140, The Masked Thief 141
- **VII Winter** 143: The White Out 144, The Last Owl 145, The Honorable Dinner 146, The Moon Door 147, Is it You, Duncan Rox? 148, The Viscount and the Frog 149 · **VII Spring** 151: From Faraway 152, Fins 153, The Moon Tournament 154, Yojimbo’s Trials 155, What You Need 156, The Bloodied Contract 157 · **VII Summer** 159: Once a Redcap… 160, Salt and Pepper 161, Evander’s Legacy 162, The Tomb of Barleduc 163, Mount Karasu 164, Overboard 165 · **VII Autumn** 167: The Brambles Fire 168, Return to Faeriyev 169, The Staff of the Covenant 170, Oberon’s Revenge 171, The Concert 172, The Ghost of the Blooming Meadow 173
- **Epilogue – Winter** 175: The Last Ship 178, The Duel of the Hundred Crows 180, The Broken Spiral 182, The Battle of Frostwing 184
- **Appendix – Historical Time-line** 191: Household History 192, Analytical Index 194, Ronja’s Letters 196

Hinweis: Die Sagas folgen **Jahreszeiten** (Winter → Frühling → Sommer → Herbst) mit je 6 Abenteuern; die Buchseiten oben entsprechen dem gedruckten Inhaltsverzeichnis.

## 3. Vorgeschlagene Struktur im Tool

**Dropdown:** *Household* ▸ Untersetting **Der Garten** (eingeklappt, 1,5 s Hover, wie City of Mist). Die Sagas sind **Abenteuer-Übersichten auf der Startseite** (nicht als eigener Reiter), je mit eigener Leiste.

**Kopfzeile Household (Reiter):** **Welt** · **Regeln** · **Spielleitung**
- **Welt** (Unterleiste): Völker & Nationen (Grundbuch I + Guide) · Geschichte (Kap. VII + Time-line) · Das Haus (Kap. IX, Räume als Unterpunkte) · Atlas/Karte (Guide App. III) · Nationen im Alltag (Guide: Realm, Hearth, Free Dominions, Horde – Politik, Armee, Institutionen, Leben)
- **Regeln:** Charakter · Berufe · Wie man spielt (Proben, Stress, Fertigkeiten, Moves, Konflikte, Kampf, Zustände & Decorum) · Verträge · Ausrüstung
- **Spielleitung:** Saga · Gegner (Anhang I) · Mysterien (Guide) · Pride & Prejudice & Centipedes · Neue Optionen/Charaktere (Guide Anhang)

**Der Garten (eigene Kopfzeile, eigenes Farbschema):** Welt (Völker, Geschichte, **Karte des Gartens** mit allen Gebieten) · Regeln (Berufe, Verträge, Ausrüstung, **Reise & Jahreszeiten**) · Spielleitung (Saga, Gegner, **Colossi**)

**Abenteuer-Bereiche (Startseite):** *Saga of the Fragile Peace* (Kapitel I–V) und *Saga of the Long Winter* (Kapitel VI–VII) – je Figuren-Galerie + Kapitel/Paragraph-Übersicht + Abenteuer-Karten, **Leitstand je Abenteuer** nach Vaesen/Spire-Schablone (siehe `/areas/vaesen-leitstand`-Vorgehen: Tabs, Hinweiskarten zum Abhaken, Notizen-Stift, Handouts).

Alles, was im Buch Kasten/Karte ist (Gegner, Gegenstände, Verträge, Mysterien, Figuren), als echte Einzelkarte; D66-/Tabellen als Raster; Charakter-Werte der Saga-Figuren als Mini-Bögen.

## 4. Gerüst-Dateien (nach `SYSTEM_EINBAU.md`)
`household/` mit `index.html`, `style.css`, `sys.js`, `js/app.js`, `js/data/…` (eine Datei pro Kapitel/Abenteuer); Garten als `household/garten/` bzw. gleiche Struktur mit eigener `sys.js`-Variante; Galerie-Dateien `js/data/galerie-<kürzel>.js` (`Galerie.reg("household", {...})`); Schlüssel in `GALKEY` (`toolmenu.js`) eintragen; `sw.js` `FILES` + `VERSION` bei jedem Push.

## 5. Charakterbogen
`Character_Sheet_EN.pdf` (A4 quer, **keine Formularfelder**): Society ♥ (Art, Charm, Eloquence, Etiquette, Grace) · Academia ♦ (Care, Craft, Culture, Insight, Investigation) · War ♣ (Athletics, Authority, Fight, Strength, Will) · Street ♠ (Caution, Dexterity, Elusion, Exploration, Shoot) · Aces up the Sleeve · Decorum-Leiste · Stress · Conditions · Moves · Contracts · TTT-Leiste · Traits · Equipment & Wealth · Memories/Experiences · Porträtfeld. Wird deutsch nachgebaut (`shared/charsheet.js`, `shared/fillpdf.js`). **Ganz zum Schluss.**

## 6. Bilder (Priorität 1)

**Regel (Moritz): Ganzseitige Bilder nie ausschließen.** Nur identische, auf vielen Seiten wiederkehrende Papier-/Musterseiten sind Hintergrund und fliegen raus. Ganzseitige Illustrationen, Kapitel-Eröffnungen, **Karten und Pläne** gehören immer in die Bildliste.

**Bestand (Stand 24. Nov., alle Kontaktbögen am Bild geprüft):** Grundbuch 185, Guide 127, Garten (Vol. II) 175, Fragile Peace 96, Long Winter 96 – zusammen rund **680** Bilder (von über 8.000 eingebetteten Dateien). Spalte `art`: leer = Einzelbild/Freisteller, `ganzseitig`, `Karte`, `…Doppelseite? (zusammensetzen prüfen)`.
- **Karten gefunden:** Guide: **8 Stadtkarten** im Atlas (Highlight Astraviya, Lowlight Astraviya, Wallford, Chesterfield by-the-fire, Beddingham, Tuberdam, Al Sehir, Viletia; S. 200–207, quer 3309×2555) und **Hauspläne** (Erdgeschoss S. 12/13 und 56/57, Obergeschoss S. 98/99, Keller S. 142/143 – **Doppelseiten, in zwei Hälften gespeichert → zusammensetzen**); Grundbuch: Hausplan-Übersicht S. 205; Garten: **Karte des Gartens** („The Outhold“) S. 153 und **Reisekarte** S. 241. Beschriftungen der Karten sind im Bild eingebrannt (englisch) – für die deutsche Fassung ggf. überlagern (Entscheidung mit Moritz).
- Nicht übernommen (nur Hintergrund): Damast-/Streifen-/Farbflächen, leere Papier- und Rahmenseiten, graue Vorstufen (Sepia-Fassung bleibt), Medaillen-Masken, geprägte Symbole, Text-Platzhalter, verblasste Ornamentreste.
- **Doppelseiten** (z. B. Grundbuch S. 6/7, Guide S. 102/103) liegen als zwei Hälften vor und werden zu einem Bild verbunden.
- Einzelne Bilder sind aus Teilstücken zusammengesetzt (z. B. Teetasse Grundbuch S. 98) – beim Einbau aus dem Seitenbild rendern.

**Technik:** `pdfimages -all -p` extrahiert alle Rohbilder in ~2 Minuten pro Buch (PNG-Ausgabe ist 10× langsamer, nicht nutzen). Figuren, Tiere und Gegenstände liegen **schon freigestellt** als Bild + Maske (smask) vor → zu RGBA zusammensetzen, nicht neu ausschneiden. Doppelseiten sind meist ein eigenes großes Bild. Wo eine Illustration aus mehreren Stücken besteht oder Text darüberliegt, die Stelle aus dem Seitenbild rendern. Dekoration erkennt man an wiederkehrenden Größen/identischen Dateien (Banner 2564×1287, Papier 862×…/980×…, Rahmen 644×…) und einfarbiger Mitte – **nie** an der Bildgröße allein.

**Vorgehen:**
0. **Stand 24. Nov.:** Spalte `zuordnung` ist auf **Abschnittsebene** (Kapitel/Figur/Abenteuer laut Inhaltsverzeichnis, nur nach Buchseite) vorbelegt – noch **nicht** am Bild geprüft; Figur/Gegner/Gegenstand je Bild folgt beim Bau des jeweiligen Kapitels. Saga Long Winter: Abenteuer-Ebene noch nicht aufgeteilt.
1. Pro Buch Kontaktbogen der Kandidaten prüfen (Filter ist nur eine Schätzung), Ausschuss löschen, **Liste `plan/household/bilder-<kürzel>.tsv` mit Spalte `zuordnung` füllen** (Figur/Ort/Raum/Abenteuer/Gegner/Kapitel-Eröffnung).
2. Dateien sofort eindeutig benennen: `<kürzel>-<kapitel>-<motiv>.webp` (z. B. `core-haus-esszimmer.webp`, `fp-figur-jemma-reed.webp`).
3. Nur zuordnen, was im Buch **direkt** dazugehört (Figur ↔ Porträt, Gegner ↔ Bild, Ort ↔ Ortsbild, Raum ↔ Raumbild); sonst weglassen.
4. Einbau nach Seitenverhältnis: Hochformat hochkant, Breitbilder ganzspaltig/Header, quadratisch im Text; Gegner klein in der Karte; Figuren-Porträts in den Saga-Figurenkarten; Haus/Atlas/Garten mit großen Bildern; Doppelseiten ungeteilt.
5. Galerie pro Buch (Kachelraster, Großansicht mit Pfeiltasten); Schlüssel eintragen.
6. Vor jedem Push per Screenshot prüfen (Lücken, schiefe/abgeschnittene Bilder, weiße Ränder).

### 6a. Fertige Bilder (Stand 24. Nov. 2026)
- Liegen unter `household/img/<kz>/{full,thumb}/` (kz = grundbuch, guide, garten, fp, lw), 579 Dateien, ca. 147 MB. Namen `<kz>-s<seite>[-<seite2>]-<slug>[-ganz].webp`. Full: lange Kante max. 1600 px, Doppelseiten 1900 px, Karten/Atlas/Hauspläne 2200 px; Thumb 360 px. Englische Beschriftung in den Karten bleibt (Entscheidung Moritz).
- Bilder, die über den Falz laufen, sind aus den PDF-Seiten selbst zusammengesetzt (Seiten ohne Text, Hintergrund und andere Bilder rendern, an der Seitenkante abschneiden, nebeneinanderlegen). Eine Platzierung nach Bildrahmen ist falsch, weil die Bilder im PDF leicht gedreht sind. Endung `-ganz`.
- Tapeten, Papier und Banner sind Seitendeko und kommen nie in die Sammlung.
- Hundertfüßer Grundbuch S.300/301: zwei einzelne Gegner („Giant Centipede's Tail“ S.300, „Giant Centipede“ S.301); im Tool beide schön zusammen auf einer Seite anzeigen, Doppelseiten-Bild bleibt das gemeinsame Bild.
- Offen: feinere Zuordnung Bild → Figur/Gegner/Raum (TSV `zuordnung` nur auf Kapitelebene); Bilder aus mehreren übereinanderliegenden Ebenen nur von Hand (z. B. Garten S.308).

## 6b. Mockups (Runde 2, 24. Nov. 2026)
Unter `plan/household/mockups/` (je mit `-erklaert`-Fassung), Quellen in `src/` (Screenshots mit `python3 shot.py <name>`).
**Moritz' Entscheidungen Runde 1:** Startseite A (Haus im Schnitt) gewählt, B verworfen. Keine Trennlinie zwischen Kopfzeile und Unterleiste (gilt überall). Karten nicht abschneiden; Markierung schöner als Rahmen/Oval. Gegner und Saga-Figuren bekommen eine Übersicht als freie Kachelansicht ohne Kästen (bei Gegnern „Übersicht“ ganz oben in der Seitenleiste).
- **m1-start-haus** – Startseite: Hero (Platzhalter), Haus im Schnitt (Obergeschoss Free Dominions, Erdgeschoss Realm | Hearth, Keller Horde, rechts Garten), Bereichs-Karten mit Tapetenstreifen der Fraktion und Titel-Schild wie im Buch, Sagas als Hover-Bildstreifen.
- **m3-welt-haus** – Welt › Das Haus: Hausplan ungeschnitten neben dem Einleitungstext, Bereich hervorgehoben durch Abdunkeln des Rests, feine Goldlinie und Namensschild; Orte/Persönlichkeiten als Bildkarten (nur belegte Bilder).
- **m4b-gegner-uebersicht** – Gegner-Übersicht: alle Gegner mit eigenem Buchbild frei auf dem Papier (Name, Stufe grau), Riesenhundertfüßer breit als Abschluss; Gegner ohne Bild als ruhige Liste darunter. Bildzuordnung geprüft (Bild steht im Buch über dem Gegner auf derselben Seite).
- **m4-gegner** – Gegner-Detail: Doppelseiten-Bild, Gegner im Buchstil; Hundertfüßer als zwei Gegner mit Pfeil.
- **m5b-saga-figuren** – Saga-Figuren-Übersicht (Long Winter, 30 Figuren) frei in einem Raster, Beruf als feine Linie über der Gruppe, darunter Volk · Nation.
- **m5-saga** – Saga-Leitstand mit Jahreszeiten-Umschalter.
- **m6-garten** – Garten: Outhold-Karte ohne Rahmen, größer, gleiche Markierung wie beim Haus.
- **m7-saga-start-fp / m8-saga-start-lw** – Saga-Startseite („Überblick“ als erster Reiter der Saga-Leiste, eine Vorlage `m7-saga-start.html#fp|#lw`): Hero, Einleitung aus dem Buch, Fakten (Zeitraum, Schauplatz, Figuren, ausgearbeitet/skizziert, Epilog, Gruppe), Wege in die Saga, Empfehlung mit Porträts, Gruppengröße bzw. Epilog/Figuren-Merkmale, Saga-Plan wie in der Buchübersicht (FP S.66/67, LW S.78): jede Zeile ein Paragraph bzw. eine Jahreszeit mit Zeitraum, jedes Abenteuer mit 2×2-Porträts der Protagonisten und Farblinie der Nation (FP, aus dem Buch ausgelesen) bzw. Jahreszeit (LW). Daten in `src/sagadaten.js` (Protagonisten aus dem Text; Buchfehler LW „Yojimbo’s Trials“: „Kurai Shiro“ = Kurai, Shiro).
- Dining-Hall-Markierung: Nach dem Guide besteht das Realm aus Dining Hall **und** Kitchen; die grüne Fläche im Plan ist das ganze Realm. Die Kitchen ist der obere Raum (Herd, Spüle), Glasburg/Cupboard steht am Durchgang. Markiert wird nur der untere Raum.
- **Hauspläne:** Guide hat je Stockwerk einen ausführlichen Plan (Erdgeschoss S.12/13 mit Realm, S.56/57 mit Hearth, Obergeschoss S.98/99, Keller S.142/143), Grundbuch S.205 alle Stockwerke klein. Neu zusammengesetzt: `guide-s012-057-hausplan-erdgeschoss-komplett` (beide Erdgeschoss-Pläne liegen pixelgenau übereinander; links Realm, rechts Hearth inkl. der blauen Fläche neben der Großen Treppe; Wappen halb/halb). Das ist der Erdgeschoss-Plan fürs Tool.
- **Outhold-Karte freigestellt:** `garten-s153-karte-des-gartens-the-outhold-frei` – Karte samt Dornenrahmen, Wappen und Tieren vom Holzhintergrund getrennt (Transparenz, keine rechteckige Beschneidung). Im Tool groß links, Markierung per Maske auf die Kartenform begrenzt.
- **Saga-Leiste:** kein eigener Reiter „Überblick“ – der Saga-Name ist der Reiter für die Saga-Startseite.
Schriften im Entwurf: IM Fell English SC (Überschriften) und EB Garamond (Text) als Ersatz für Sydonia/Minion; die Buchschriften sind nur als Teilsätze eingebettet und müssten wie bei Heart zusammengesetzt werden.
Deko aus dem Grundbuch in `src/deko/`: Seitenpapier, Tapeten-Banner (grün Realm, blau Hearth, rot Free Dominions, gold Horde, lila Regeln), Fraktions-Medaillen mit Band.
Aufräumen beim Bau: Tapetenstücke hinter den Saga-Figuren (z. B. fp-s018-…, lw-s024-…, lw-s050-shiro-b) und Banner (garten-s152, garten-s157, lw-s075) aus der Bildsammlung entfernen; Medaillen mit Band in die Sammlung aufnehmen.

## 7. Bauschritte (Vorschlag, auf Moritz’ „Ja“ je Schritt)
0. Bildlisten (Abschnitt 6, Schritt 1) fertig; Entscheidungen stehen oben
1. **Design + Mockups (Opus):** Startseite, Welt/Haus/Atlas, Regeln, Spielleitung, Garten, Saga-Übersicht, Abenteuer-Leitstand, Charakter – erst nach Moritz’ Startschuss
2. ✅ **Gerüst gebaut (25. Nov. 2026):** `household/` mit `index.html`, `style.css`, `sys.js` (Bücherliste), `js/app.js` (Router `#<reiter>/<unter>/<umschalter>/<eintrag>`, `#g/…` Garten, `#fp|#lw` Sagas), `js/data/nav.js` (Reiter → Unterleiste → Seitenleiste), Dropdown-Eintrag „Der Garten“ in `toolmenu.js`, Tastenkürzel, Buch-Knopf/PDF-Upload; Inhalte kommen über `HH_INH["<modus>/<reiter>/<unter>[/<umschalter>]"] = function(P){…}`, bis dahin Platzhalter. Galerie-Gerüst und Startseite A folgen
3. Grundbuch: Völker, Berufe, Regeln, Verträge, Ausrüstung, Geschichte
4. Grundbuch: Das Haus (Räume), Gegner, Anhang
5. Practical Guide: Nationen, Mysterien, Atlas, neue Charaktere
   - ✅ **Alltag der Nationen › Realm (25. Nov. 2026)**, Guide S.10–53 (`welt-alltag-realm-a/-b/-c.js`, Router `welt-alltag.js`): Politik, Mysterium *Zlad of Wall-lachia*, Streitkräfte (inkl. Tristarred, Golden Circle), Mysterium *The House of Cards*, Leben, Institutionen, The Kitchen. Ballade „Roach-Stink Morten“ (S.42–43) nicht übernommen. Mysterien stehen vorerst im Realm-Text, später unter Spielleitung › Mysterien verlinken. Ränge bleiben englisch (Captain, Colonel …), Royal Gendarmerie/Golden Backs/Sentries englisch. Nächste Etappen: Hearth (S.54–95), Free Dominions (S.96–139), Horde (S.140–180), je als `welt-alltag-<nation>-<teil>.js`.
   - ✅ **Alltag der Nationen › Hearth (25. Nov. 2026)**, Guide S.54–95 (`welt-alltag-hearth-a/-b/-c/-d.js`): Politik, Streitkräfte, Mysterium *The Flame of Love*, Church of Safekeeping, Cinder Order, Mysterium *A Cold Heart*, Leben, Institutionen (Fechten, Dens, Union, Rox-Bande), Mysterium *The City Inbetween*. Sprechchor S.58, Vers im Lesser-Ashen-Kasten S.77 und Inschrift „Big Ben’s Tomb“ S.82 nicht übernommen. Nächste Etappen: Free Dominions (S.96–139), Horde (S.140–180).
   - ✅ **Alltag der Nationen › Free Dominions (25. Nov. 2026)**, Guide S.96–139 (`welt-alltag-free-a/-b/-c.js`): Politik (Symposium als Karten), Streitkräfte, Mysterium *Bathlantis*, Institutionen (Universitäten, Dens, Fechten, Thimble/Blackwater), Mysterium *The Mechanical Wonder*, Leben, Argos Vermächtnis, Mysterium *Through the Looking Glass*, Smaller Bedroom. Nächste Etappe: Horde (S.140–180).
   - ✅ **Alltag der Nationen › Horde (25. Nov. 2026)**, Guide S.140–180 (`welt-alltag-horde-a/-b/-c/-d.js`): Politik (Provinzen, Slugan-Adel, 27 Skullrider), Götzenverehrung, Leben (Zeremonien, Mode, Rodomontes Jacke), Mysterium *The Forgotten One* (Badfaith, Skorpion-Blöcke), Streitkräfte (Miliz, Armee, Viletische Garde, Scraps/Mamluken, Black Legion, Janitscharen), Institutionen (Mirandola-Akademie, Dens, Assassinen, Medjay), Mysterium *The Spider Convent*. Verse S.145, S.153, S.171 und das Zitat S.173 nicht übernommen. Alltag der Nationen damit komplett; Mysterien noch nicht unter Spielleitung › Mysterien verlinkt.
   - ✅ **Spielleitung › Gegner (25. Nov. 2026)**, Grundbuch Anhang I S.276–304 (`sl-gegner-a/-b/-c.js`, neuer Block `gegner` + `kacheln` in `blocks.js`): Übersicht (Kacheln mit Buchbild, Rest als Liste), Regeln, Eigenschaften (Traits als Karten), Schwachstellen (3 Tabellen), Littlings (12) und Tiere (17 Karten inkl. Riesenhundertfüßer/Jagdspinne in je zwei Phasen), Von Spinnen. Gefahrenstufe, Stress-Kästchen und Crucial Boxes aus den PDF-Zeichnungen ausgelesen. Bilder nur dort zugeordnet, wo das Buch sie auf derselben Seite über dem Gegner zeigt. Zustand „Tired“ = Erschöpft, „Embarrassed“ = Beschämt.
   - ✅ **Spielleitung › Pride & Prejudice & Centipedes (25. Nov. 2026)**, Grundbuch Anhang II S.306–313 (`sl-pride.js`): drei Gruppen Einstieg / Die Spur / Finale mit 10 Abschnitten; Bilder D’Arcy (s307), Elizabeth (s308), Austin (s312); Links zu den Hundertfüßer-Karten über neue Link-Syntax `[[Text|route]]` in `md()`. Nicht übernommen: Stichwortverzeichnis S.314 und Charakterbögen S.315–316 (liegen schon unter Regeln › Charakter).
   - ✅ **Spielleitung › Neue Optionen / Neue Figuren (25. Nov. 2026)**, Practical Guide Anhang I+II S.182–197 (`sl-figuren.js`, neuer Block `figur`; `kacheln` mit `r`/`u` verallgemeinert): 5 Berufungen (Warrior, Adept, Blue Flame, Bandit, Medjay), Snail (Merkmale + Manöver mit Kartenfarben), 6 Figuren (Achilles, Barron Hargrave, Mey Sòng, Alexandrine Regret, Vega Vankhade, Petrolio) als Kurzbogen mit Prolog. Nicht übernommen: Seitenbild S.198 (Petrolio-Szene). Außerdem Gegner und Pride auf deutsche Fertigkeits-/Feldnamen und „Anstand“ vereinheitlicht (Übersetzungsregel).
6. Garten (Vol. II): Welt, Regeln, Reise & Jahreszeiten, Karte, Gegner/Colossi
7. Saga Fragile Peace: Figuren + Abenteuer + Leitstand
8. Saga Long Winter: Figuren + Abenteuer + Leitstand
9. Suche, i-Knopf, Karte („m“), Charakterbogen (ausfüllbares PDF)

## Übersetzungsregel (von Moritz freigegeben, gilt rückwirkend)
Nur echte Eigenbegriffe bleiben englisch: Namen von Folk, Nationen, Orten, Personen, Verträgen, Moves und Traits sowie Wortschöpfungen (Cogpesh, Keysket …). Alles andere ist deutsch: Spielbegriffe, Gegenstände, Waffen, Überschriften, Seitentitel. Gedichte und Liedtexte werden nie wiedergegeben, auch nicht übersetzt; sie bleiben komplett weg, ohne Platzhalter.
