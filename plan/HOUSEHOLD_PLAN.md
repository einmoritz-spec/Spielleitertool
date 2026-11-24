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

**Bestand (Stand 24. Nov., Filter am Bild geprüft):** Grundbuch ~125 Illustrationen, Guide ~85, Garten (Vol. II) ~145, Fragile Peace ~65, Long Winter ~90 – zusammen rund 510 (von über 8.000 eingebetteten Bildern). Aussortiert sind Papiertexturen, Muster-Banner, Textfeld-Rahmen, Medaillen-Masken (schwarz-weiße Silhouetten), geprägte Symbole und Text-Platzhalter. Sepia-Skizzen auf Weiß sind **echte Illustrationen** und bleiben. Einzelne Bilder sind aus Teilstücken zusammengesetzt (z. B. Teetasse Grundbuch S. 98) – beim Einbau aus dem Seitenbild rendern.

**Technik:** `pdfimages -all -p` extrahiert alle Rohbilder in ~2 Minuten pro Buch (PNG-Ausgabe ist 10× langsamer, nicht nutzen). Figuren, Tiere und Gegenstände liegen **schon freigestellt** als Bild + Maske (smask) vor → zu RGBA zusammensetzen, nicht neu ausschneiden. Doppelseiten sind meist ein eigenes großes Bild. Wo eine Illustration aus mehreren Stücken besteht oder Text darüberliegt, die Stelle aus dem Seitenbild rendern. Dekoration erkennt man an wiederkehrenden Größen (Banner 2564×1287, Papier 862×…/980×…, Rahmen 644×…), einfarbiger Mitte und fehlender Seitenzuordnung.

**Vorgehen:**
0. **Stand 24. Nov.:** Spalte `zuordnung` ist auf **Abschnittsebene** (Kapitel/Figur/Abenteuer laut Inhaltsverzeichnis, nur nach Buchseite) vorbelegt – noch **nicht** am Bild geprüft; Figur/Gegner/Gegenstand je Bild folgt beim Bau des jeweiligen Kapitels. Saga Long Winter: Abenteuer-Ebene noch nicht aufgeteilt.
1. Pro Buch Kontaktbogen der Kandidaten prüfen (Filter ist nur eine Schätzung), Ausschuss löschen, **Liste `plan/household/bilder-<kürzel>.tsv` mit Spalte `zuordnung` füllen** (Figur/Ort/Raum/Abenteuer/Gegner/Kapitel-Eröffnung).
2. Dateien sofort eindeutig benennen: `<kürzel>-<kapitel>-<motiv>.webp` (z. B. `core-haus-esszimmer.webp`, `fp-figur-jemma-reed.webp`).
3. Nur zuordnen, was im Buch **direkt** dazugehört (Figur ↔ Porträt, Gegner ↔ Bild, Ort ↔ Ortsbild, Raum ↔ Raumbild); sonst weglassen.
4. Einbau nach Seitenverhältnis: Hochformat hochkant, Breitbilder ganzspaltig/Header, quadratisch im Text; Gegner klein in der Karte; Figuren-Porträts in den Saga-Figurenkarten; Haus/Atlas/Garten mit großen Bildern; Doppelseiten ungeteilt.
5. Galerie pro Buch (Kachelraster, Großansicht mit Pfeiltasten); Schlüssel eintragen.
6. Vor jedem Push per Screenshot prüfen (Lücken, schiefe/abgeschnittene Bilder, weiße Ränder).

## 7. Bauschritte (Vorschlag, auf Moritz’ „Ja“ je Schritt)
0. Bildlisten (Abschnitt 6, Schritt 1) fertig; Entscheidungen stehen oben
1. **Design + Mockups (Opus):** Startseite, Welt/Haus/Atlas, Regeln, Spielleitung, Garten, Saga-Übersicht, Abenteuer-Leitstand, Charakter – erst nach Moritz’ Startschuss
2. Gerüst, Logo, Dropdown, Kopfzeile, Tastenkürzel, Buch-Auswahl (PDF-Upload), Galerie-Gerüst
3. Grundbuch: Völker, Berufe, Regeln, Verträge, Ausrüstung, Geschichte
4. Grundbuch: Das Haus (Räume), Gegner, Anhang
5. Practical Guide: Nationen, Mysterien, Atlas, neue Charaktere
6. Garten (Vol. II): Welt, Regeln, Reise & Jahreszeiten, Karte, Gegner/Colossi
7. Saga Fragile Peace: Figuren + Abenteuer + Leitstand
8. Saga Long Winter: Figuren + Abenteuer + Leitstand
9. Suche, i-Knopf, Karte („m“), Charakterbogen (ausfüllbares PDF)
