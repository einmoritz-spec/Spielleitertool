# HEART: THE CITY BENEATH – Spielleiter-Tafel (Bauplan)

Stand: 22. Nov. 2026. Arbeitsanweisung für die Umsetzung (gedacht für Sonnet, in mehreren Sitzungen).
**Phase 1 (Design + Plan) – noch nichts gebaut.** Heute ist `heart/` nur eine Bücher-Startseite (`shared/sysstart.js` + `heart/sys.js`, Logo `assets/logos/heart.webp`, Platzhalter-Farben Lila/Rot, die **nicht** zum Buch passen und ersetzt werden).
Ziel: ein vollständiges Setting wie **Slugblaster** (`slugblaster/`) bzw. **Pico** (`pico/`) – alle Inhalte des Grundbuchs, der Kampagne *Dagger in the Heart* und der vier Quellenbücher auf Deutsch, im Design der Buch-PDFs, mit einer Spielleiter-Tafel für die laufende Runde.

**Wichtig zum Verständnis:** Heart (Grant Howitt & Christopher Taylor, Rowan, Rook & Decard; Resistance-System wie *Spire*) spielt in der **Stadt darunter**, einem lebendigen Albtraum unter der Stadt Spire. Die Delver reisen in **Delves** von **Landmarke** zu Landmarke, immer tiefer (**Tiefe 0–3**, darunter das Herz selbst). Jede Probe kostet **Stress** auf fünf **Resistenzen** (Blood, Mind, Echo, Fortune, Supplies); die SL würfelt W12 gegen den Gesamt-Stress → **Fallout**. Das Spiel ist **vertikal** – daraus ist das ganze Design abgeleitet (Abschnitt 3: Leitidee „Querschnitt“).

Entwürfe (Screenshots 1440×900) liegen in `plan/heart/mockups/` – **die Umsetzung muss diesen Entwürfen genau entsprechen**. Je Entwurf eine saubere Fassung (`m2-expedition.jpg`) und eine mit Erklärungen (`m2-expedition-erklaert.jpg`). HTML/CSS-Quellen in `plan/heart/mockups/src/` (`ht.css` = fertiges Farb-/Schrift-/Baustein-System, Ausgangspunkt für `heart/style.css`; `fonts/` = fertige Schriften; `img/` = Beispielbilder). Blaue Kästen mit roter Nummer sind nur Erklärungen. Texte in den Entwürfen sind teils gekürzt (…) – im Tool steht immer der **vollständige** Buchtext. Neu fotografieren: `python3 plan/heart/shoot.py [m1-start …]`.

| Nr. | Datei | Ansicht |
|---|---|---|
| 1 | `m1-start.jpg` | Startseite = Vorbereitung: Querschnitt-Bild, Gedicht, Inhaltsseite, Klassen-Reihe, „In die Tiefe“ |
| 2 | `m2-expedition.jpg` | **Expedition** (wichtigste Spielansicht): Route · Delver (Mini-Bögen) · Gegner |
| 3 | `m3-landmarken.jpg` | Landmarken nach Tiefe (Bänder 0–4) + Ungebunden/Risse/Acht Himmel |
| 4 | `m4-klasse.jpg` | Nachschlagen · Charaktere · Klassen · Cleaver (Buchrücken-Seitenleiste, Diagonale) |
| 5 | `m5-bogen.jpg` | Charakterbogen (Original-Bogen, deutsch beschriftet, ausfüllbar) |
| 6 | `m6-kampagne.jpg` | Untersetting *Dagger in the Heart*: Kapitel-Treppe, Opposition, Zettel |
| 7 | `m7-kapitel.jpg` | Kampagne · Kapitel 2 · Landmarken: Wegekarte, Delve-Karte, Landmarke |
| 8 | `m8-gegner.jpg` | Gegner-Raster mit aufgeklapptem Statblock |

---

## 0. Entscheidungen

### 0a. Offene Rückfragen an Moritz (mit Vorschlag) – vor Schritt 1 klären
1. **Spielbegriffe englisch** wie bei Slugblaster: Stress, Fallout, Delve, Delver, Haunt, Haven, Beat, Knack, die Resistenz-Namen **Blood, Mind, Echo, Fortune, Supplies**, Skill-Namen (Compel, Delve, Discern, Endure, Evade, Hunt, Kill, Mend, Sneak), Domain-Namen (Cursed, Desolate, Haven, Occult, Religion, Technology, Warren, Wild), Ausrüstungs-Tags (Brutal, Ranged …), Klassen- und Berufungs-Namen. **Deutsch:** Landmarke, Resistenz, Schutz, Fähigkeit, Ressource, Ausrüstung, Abstammung, Berufung, Klasse, Gegner, Ereignisse, Verbindung, Schwierigkeit (Normal/Riskant/Gefährlich), Fallout-Stufen (leicht/schwer/kritisch), Würfel **W4–W12**. *Vorschlag: so (in den Entwürfen umgesetzt).*
2. **„Tier“ → „Tiefe“** (Tiefe 0–4). Passt zur Leitidee und liest sich natürlich („Tiefe 2“). *Vorschlag: Tiefe.*
3. **Namen:** beschreibende Namen übersetzen (The God of Corpses → Der Leichengott, Crowsfoot Pass → Krähenfußpass, Butcher → Schlächter, Heartsblood → Herzblut, Bleeding → Blutend), Eigennamen bleiben (Derelictus, Tollembrood, Spire, Vermissian, Ptolemy Bay, Grip Station …). Kapitelnamen der Kampagne: Trainkill, Eastern Express, The Wormery bleiben (Eigennamen), From Above → Von oben, The Wounded Realm → Das verwundete Reich, Edgelands → Randlande, A Dagger in Your Hand → Ein Dolch in deiner Hand. *Vorschlag: so.*
4. **Untersettings im Dropdown** (eingeklappt, 1,5 s Hover): Heart ▸ **Dagger in the Heart** (Kampagne) · **Vermissian Black Ops** (eigene Spielart: Einsätze, Linienplan) · **Doors to Elsewhere** (eigene Stadt). **Sanctum** (Zufluchten, Engel) und **Burned and Broken** (Minister, Herkünfte, Derelictus-Landmarken) sind Erweiterungen und werden **in die Heart-Bereiche einsortiert** (mit kleinem Herkunfts-Etikett „B&B S. 5“, wie in Entwurf 3). *Vorschlag: so.*
5. **Kampagnen-Landmarken** (Dagger, Anhang 1) erscheinen **nicht** in der freien Landmarken-Übersicht (Spoiler), nur in der Kampagne. *Vorschlag: so.*
6. **Handouts** der Kampagne (Dokumente, Briefe, Karten): deutsch neu gesetzt auf den aus dem PDF gezogenen Papier-Hintergründen, Handschrift in Caveat, mit Vollbild-„Zeigen“ (wie bei Vaesen). *Vorschlag: so.*
7. **Charakterbogen:** deutscher Nachbau auf dem Original-Hintergrund (Entwurf 5) + Export als ausfüllbares PDF; zusätzlich „Original (EN) ausfüllen“ für den Form-Fillable-Bogen. *Vorschlag: so.*
8. **Quickstart v2** und **Dagger High-Res** stehen schon in der Bücherliste (`heart/sys.js`) – nur als Bücher behalten, **keine** eigenen Inhalte (der Quickstart doppelt das Grundbuch). *Vorschlag: so.*

### 0b. Verbindlich (aus Moritz' Standing-Regeln, siehe Abschnitt 2)
Repo-Schreibrechte erteilt – pushen. Commits ohne „Co-Authored-By“/„Claude-Session“.

---

## 1. Quellen

| Was | Wo | Versatz (PDF = Buch + n) |
|---|---|---|
| Grundbuch *Heart: The City Beneath* (226 S., 612×792 pt) | lädt Moritz hoch: `Heart___Regeln___Heart_The_City_Beneath_Corebook_EN.pdf` | **5** (PDF 6 = S. 1) |
| Kampagne *Dagger in the Heart* (143 S.) | `Heart___Abenteuer___Dagger_in_the_Heart_Campaign__EN_.pdf` | **5** |
| *Burned and Broken* (28 S.) | `Heart___Zusatz___Sourcebook_Burned_and_Broken_EN.pdf` | **2** |
| *Doors to Elsewhere* (28 S.) | `…Sourcebook_Doors_to_Elsewhere_EN.pdf` | **2** |
| *Sanctum* (28 S.) | `…Sourcebook_Sanctum_EN.pdf` | **2** |
| *Vermissian Black Ops* (32 S.) | `…Sourcebook_Vermissian_Blackops_EN.pdf` | **3** |
| Charakterbogen (2 S., ausfüllbar) | `Heart___Material___Form-Fillable_Character_Sheet_EN.pdf` | – |
| Buchtext je Kapitel (Markdown) | `quellen/heart/text/<kürzel>-NN-<titel>.md` (57 Dateien; Kürzel core, dagger, bb, doors, sanctum, blackops) | Seitenmarken = Buchseiten |
| Bild-Inventar je Buch | `plan/heart/bilder-<kürzel>.tsv` (PDF-Seite, Buchseite, xref, Größe, Lage, Art) | |
| Skripte | `plan/heart/build_fonts.py` (Schriften), `extract_text.py` (Text), `extract_images.py` (Bilder), `shoot.py` (Entwurfs-Screenshots) | |
| Gemini-Prompts (optional) | `plan/heart/gemini/GEMINI_PROMPTS.md` + Referenzbilder | |
| Logo | `assets/logos/heart.webp` (hell, freigestellt); Kampagne: `plan/heart/mockups/src/img/dagger-logo-zeile-hell.svg` (Vektor aus PDF S. −1 neu gesetzt) | |

**Text-Markdown lesen** (erzeugt mit `extract_text.py`, Reihenfolge = Inhaltsstrom des PDFs):
`<!-- S. n -->` Buchseite · `## Titel` große Überschrift · `### Titel` Zwischenüberschrift · `#### NAME` weißer Bartender-Text auf rotem/teal Balken = Name einer Landmarke, eines Gegners, einer Delve-Karte (rot = Landmarke/Gegner, teal = Delve) – **Achtung:** auch der senkrechte Kapitelname am Seitenrand landet als `#### Landmarks` o. ä. im Text, das ist Rauschen · `**Etikett:**` rote Etiketten (DOMAINS:, TIER: …) · `[K]` weißer Text = **schwarzer Kasten** (Fallout-Kästen, Seitenkästen; auf den dunklen Kapitel-Eröffnungen der Kampagne ist weiß der normale Text) · `[N]` Handschrift (Zettel, „Gar's Note“-Fußnoten, Handouts) · `- ` Aufzählung. Zweispaltige Seiten, Statblöcke, Tabellen **immer am Seitenbild prüfen** (`pdftoppm -r 80 -f <PDF-Seite> -l <PDF-Seite> -png <pdf> /tmp/s`).

---

## 2. Grundregeln (Moritz' Vorgaben – unbedingt einhalten)

1. **Nur Buchtext, vollständig ins Deutsche übersetzt.** Nichts weglassen, nichts zusammenfassen, nichts erfinden (keine eigenen Tipps, keine Kurzüberblicke). Ausnahme: Bedienelemente (Expedition, Leisten, Bögen, Opposition-Pläne), die das Spielen erleichtern.
2. **Weglassen:** Inhaltsverzeichnisse, Credits, „Thanks“/Playtester/Kickstarter-Backer (Grundbuch S. 210–215), **Index** (S. 216–219, Suche ersetzt ihn), die Anhänge-Indizes der Kampagne (Anhang 1–3, S. 135–138 – Suche ersetzt sie), Solo-/Oracle-/Koop-Regeln (Heart hat keine – falls in Zusatzbüchern welche auftauchen: weglassen). „Suggested Media“ (S. 210) weglassen.
3. **Daten in viele Dateien** (je Kapitel-Abschnitt, je Tiefe, je Kampagnen-Kapitel …; lange Kapitel auf `-a/-b/-c` verteilen).
4. **Bilder:** nur dort, wo sie im Buch zu genau diesem Eintrag gehören; nie beschneiden (Hochformat bleibt hochkant, `object-fit:contain`); breite Bilder ganzspaltig; ohne Titeltext/weißen Rand; **Doppelseiten** als **ein** Bild (Kapitel-Eröffnungen der Kampagne S. 33/34 usw.). Gegnerbilder klein in die Karte. **Im Zweifel weglassen** (Zuordnung immer am Seitenbild prüfen, Abschnitt 7).
5. **Kopfzeile:** links nur das Logo (hell auf Schwarz), rechts i-Knopf, Buch-Symbol (Auswahl der Bücher), Burger. Keine Untertitel, keine Emojis. In der Kampagne der Schriftzug „Dagger in the Heart“.
6. Vorlesekästen/Zitate ohne Beschriftung. Seitenangaben „S. 12“ unscheinbar direkt hinter dem Namen in derselben Zeile; bei Zusatzbüchern mit Kürzel („B&B S. 5“, „Sanctum S. 12“). Notizen nur als Stift-Symbol rechts in der Tab-Zeile. Tabs nur mit Namen, ohne Zahlen. Keine Erklärtexte. Keine Breadcrumb-Zeile.
7. **Breite nutzen:** Raster statt einer langen Spalte, keine leeren Spalten, **kein Spaltenfluss** (zeilenweises Raster), zugeklappte Karten, die per Klick aufgehen. Alles, was im Buch ein Kasten/eine Karte ist (Statblock, Delve, Fallout, Haunt, Fähigkeit, Beat-Bogen …), wird eine echte Karte.
8. **Seitenleiste** links nur bei Bereichen mit mehreren Abschnitten (Nachschlagen), sticky, einklappbar (‹-Knopf und Taste `b`); eingeklappt bleibt der schwarze Buchrücken mit dem senkrechten Kapitelnamen. Lange Titel nur bis zum Doppelpunkt, kurze Abschnitte zusammenfassen.
9. **Tastatur:** `h` blendet die Kopfzeile aus, ←/→ wechseln die Tabs, ↑/↓ die Einträge der Seitenleiste, `Esc` zurück (`shared/zurueck.js`, `shared/tabpick.js`), `/` Suche, `s` Regelübersicht.
10. **Klick-zum-Erledigen:** Ereignisse, mögliche Plots, Beats – Klick irgendwo = erledigt, Eintrag inkl. Text grau. Kein Kästchen, keine Linie.
11. **Kein Würfel-Tool.** Würfeltabellen sind anklickbar (Zeile markieren), kein Würfelknopf. Die Fallout-Schwellen (Entwurf 2) sind Regeltext, kein Würfler.
12. **Handy:** Viewport 1280 (wie überall).
13. **Jede sichtbare Änderung selbst per Screenshot prüfen** (Playwright + `/usr/bin/google-chrome`, `file://…/heart/index.html#…`, **1440×900 und 1280×800**, auch mit eingeklappter Seitenleiste), Lücken/Überlauf/schiefe Bilder beheben, Screenshots an Moritz schicken.
14. **Commits ohne** „Co-Authored-By“- und „Claude-Session“-Zeilen. Push mit `git -c push.negotiate=true push`.
15. Neue Dateien in `sw.js` eintragen, `VERSION` erhöhen.
16. Neue Bedienelemente, die nicht in den Entwürfen stehen (z. B. Karte, Fallout-Tab, Gruppe), **zuerst als Screenshot-Entwurf zeigen**.
17. Alles auf Deutsch – auch Beispiele und Tabellen. Ausnahmen nur nach der Namensregel / Abschnitt 0a.

### Namensregel (Vorschlag, siehe 0a.3)
- **Bleiben englisch:** Spielbegriffe aus 0a.1, Eigennamen von Orten/Personen/Gruppen (Spire, Derelictus, Tollembrood, Vermissian, Haven Station, Grip Station, Highrise, Hallow, Briar, Cairnmor, Terminus, Ptolemy Bay, Aramos Brightness-Sears-The-Eye, Insouciance Gryndel …), Gottheiten (Damnou, Incarne, Our Lady of Vengeance → bleibt), Völker (Drow, Aelfir, Gnolls; „Humans“ → Menschen).
- **Werden übersetzt:** beschreibende Namen (Landmarken, Gegner, Fähigkeiten, Fallout, Kapitel); **einmal festlegen** und ins Glossar eintragen (`heart/js/data/glossar.js`).

### Glossar (Start – verbindlich, in `heart/js/data/glossar.js` fortführen)
| EN | DE |
|---|---|
| the Heart / the City Beneath / the City Above / the Heart Itself | das Herz / die Stadt darunter / die Stadt oben / das Herz selbst |
| Spire (city) | Spire |
| delve / delver / landmark / haunt / haven / connection | Delve / Delver / **Landmarke** / Haunt / Haven / **Verbindung** |
| tier 0–4 | **Tiefe** 0–4 |
| resistance (char) / protection | Resistenz / Schutz |
| Blood, Mind, Echo, Fortune, Supplies | Blood, Mind, Echo, Fortune, Supplies |
| stress / fallout (minor, major, critical) / immediate / ongoing | Stress / Fallout (leicht, schwer, kritisch) / sofort / anhaltend |
| skill / domain / knack / mastery | Skill / Domain / Knack / Meisterschaft |
| difficulty: standard / risky / dangerous | Schwierigkeit: normal / riskant / gefährlich |
| critical success / success / success at a cost / failure / critical failure | kritischer Erfolg / Erfolg / Erfolg mit Preis / Fehlschlag / kritischer Fehlschlag |
| ancestry / calling / class | Abstammung / Berufung / Klasse |
| core ability / minor / major / zenith ability | Kernfähigkeit / kleine / große / Zenit-Fähigkeit |
| core traits / advance | Kerneigenschaften / Aufstieg |
| beat (minor, major, zenith) / active beats | Beat (klein, groß, Zenit) / aktive Beats |
| resource / equipment / tags | Ressource / Ausrüstung / Tags (englisch) |
| default stress / special rules / potential plots / events / description | Standard-Stress / besondere Regeln / mögliche Plots / Ereignisse / Beschreibung |
| adversary / stat block / names / descriptors / motivation | Gegner / Statblock / Namen / Beschreibung / Motivation |
| boons and banes | Vorteile und Nachteile |
| bonds | Bindungen |
| rogue / fractures / the Eight Heavens | Ungebunden / Risse / die Acht Himmel |
| D4 … D12 | W4 … W12 |
| GM | SL (Spielleitung) |
| Kampagne: the Opposition / schemes / countermeasures / allies & assets | die Opposition / Pläne / Gegenmaßnahmen / Verbündete & Mittel |
| beat sheet / key questions worksheet / broken futures | Beat-Bogen / Schlüsselfragen-Bogen / Gebrochene Zukünfte |
| overview / staging / documents / handout | Überblick / Inszenierung / Dokumente / Handout |
| Gar's Note | Gars Notiz |

---

## 3. Design (aus den PDFs gemessen)

### Leitidee „Querschnitt“
Heart ist ein **vertikales** Spiel: oben Spire, darunter die Stadt dazwischen, dann Tiefe 1–3, unten das rote Herz. Das Buch zeigt genau das als Bild (PDF-Seite 5: Spire im Nachthimmel, darunter das blutende Herz). Das Tool übersetzt das in eine **Tiefen-Achse**: Wo immer etwas geordnet wird, geht es **von oben (Pergament, hell) nach unten (Blutrot, dunkel)** – die Startseite steht neben dem Querschnitt, Landmarken sind Tiefen-Bänder (Entwurf 3), die Route der Expedition ist ein Abstieg (Entwurf 2), die Kampagnen-Kapitel sind eine Treppe nach unten (Entwurf 6), die Wegekarte zeichnet Tiefe als Höhe (Entwurf 7).

### Materialien (wie im Buch)
1. **Grund** = der schwarze Buchrücken: dunkle Grunge-Textur (`img/tex-dunkel.webp`, Median `#150e06`). Kopfzeile, Tab-Leiste, Seitenleiste und Hintergrund liegen darauf.
2. **Pergamentseite** mit Brandrand: die Papiertextur des Buchs (`img/tex-papier.webp`, 850×1100) als **9-Slice** (`border-image: … 46 fill / 30px stretch`, Klasse `.seite`) – jede Inhaltsfläche ist eine Buchseite. Ersatzfarbe `#f4eee3`.
3. **Blut-Rot** für Überschriften (Letterpress), Etiketten und Namensplatten.
4. **Kampagne** zusätzlich: angeheftete Zettel (grünes Notizpapier, gefaltetes Blatt, Pergamentrolle – aus dem PDF gezogen), Teal-Delve-Platten, Handschrift (Caveat) für „Gars Notiz“.

### Farben (exakt aus den PDFs)
| Variable | Wert | Herkunft / Verwendung |
|---|---|---|
| `--tinte` | `#12120d` | Fließtext Grundbuch |
| `--blut` | `#640000` | Überschriften, Etiketten (Kampagne `#67000c`, Bogen `#67000c`) |
| `--platte` | `#5b0909` | Füllfarbe der Namensplatten (weiße Bartender-Versalien) – auch aktiver Tab |
| `--platte2` | `#690909` | zweite Plattenfarbe im Buch |
| `--hell` | `#b4341d` | Logo-Rot (S. −3) – nur Hover/aktive Markierung |
| `--rose` | `#eee6e6` | Zebra der Werte-Zeilen (Statblock, Kerneigenschaften) |
| `--rose2` | `#e8d6d2` | Werte-Zeilen im Kampagnenband |
| `--teal` | `#7ba09e` | Delve-Platten (Kampagne), Klassenname diagonal (`#7da29f`) |
| `--teal-hell` | `#ecefee` | Fläche der Delve-Karte |
| `--grund` | `#150e06` | Buchrücken-Streifen (Median) |
| `--nacht` | `#08151d` | Cover-Nacht (nur Bild) |
| Tiefen-Bänder | T0 Pergament · T1 `#ebe0cd` · T2 `#d9c6ab` · T3 `#3a1913` · T4 Glut `#d43a24 → #7d0d0b → #2a0806` | abgeleitet: je tiefer, desto dunkler/röter |

### Schriften (fertig in `plan/heart/mockups/src/fonts/` → nach `assets/fonts/` kopieren)
- **Überschriften:** `ht-bartender-pressed.woff2` („HT Pressed“) – Bartender SemiCondensed Serif **Pressed** (die abgenutzte Letterpress-Fassung des Buchs). Aus allen PDFs vereinigt (`build_fonts.py`); fehlende Zeichen aus der voll eingebetteten Bartender Serif ergänzt, **Ä Ö Ü** als Pressed-Buchstabe + Serif-Punkte (geprüft). Nur Versalien (ß → SS ist Absicht der Schrift).
- **Platten, Tabs, Etiketten in Versalien:** `ht-bartender-sans.woff2` („HT Sans“, Bartender SemiCondensed Sans, voll eingebettet, 301 Zeichen, Umlaute ok).
- **Ersatz/Fallback:** `ht-bartender-serif.woff2`; für Black Ops: `ht-bartender-boldsans.woff2`.
- **Fließtext:** **Alegreya** (wie im Buch; frei, `@fontsource/alegreya`: 400/500/700/800 + kursiv). **Etiketten** („Domains:“, „Tiefe:“): **Alegreya SC** 700 in `--blut`.
- **Handschrift** (Kampagne, Bogen „Zur Erinnerung“): **Caveat** (liegt schon in `assets/fonts/`).
- Größen: Fließtext 15–16 px / 1,42; Etiketten 14 px; Platten 15–19 px (Sperrung .06em); Seitentitel 40–44 px; Abschnitt 26–28 px.

### Bausteine (alle in `ht.css`)
- **Kopfzeile** 52 px, `#0d0804`, Logo 30 px hoch, Icons in `#e9dfcf`.
- **Tab-Leiste** 46 px auf Schwarz, Tabs in HT Sans Versalien `#cbbba6`; **aktiver Tab = rote Namensplatte**; darunter 3 px Linie `--platte`. Stift rechts. Unterkapitel als zweite, schmalere Leiste (38 px, `#1a110a`, aktiv mit roter Unterstreichung).
- **Seitenleiste = Buchrücken** (Entwurf 4): 206 px; außen ein 40-px-Streifen mit dem Kapitelnamen **senkrecht** (wie die Kapitelmarke am Buchrand, Leserichtung oben→unten); Einträge HT Sans `#b9a690`, aktiv = rote Platte. Eingeklappt bleibt nur der Streifen.
- **Namensplatte** `.platte`: weiße HT Sans auf `--platte`, für Landmarken, Gegner, Abstammungen; `.platte.teal` für Delves; `.platte.schwarz`.
- **Werte-Zeilen** `.werte`: rote 3-px-Linie links, Zeilen im Wechsel `--rose`, Etikett in Alegreya SC rot – genau wie die Statblöcke.
- **Schwarzer Kasten** `.schwarz`: `#16120d`, weiße Alegreya 500 – Fallout-Kästen, Regel-Kästen.
- **Kästchen-Leisten** `.kk`: rote Rahmen-Kästchen wie auf dem Bogen (Stress 10, Schutz 5, Resistenz eines Delves/Gegners = so viele Kästchen wie der Wert); teal für Delves der Kampagne.
- **Inhaltsseite** (Entwurf 1): schwarze Balken mit Kapitelname + S. rechts, darunter Zeilen mit S. – wie die Contents-Seite des Buchs.
- **Diagonale** (Entwurf 4): Marmor (`tex-dunkel`) oben links, Pergament unten rechts, Figur freigestellt davor, Klassenname schräg in Teal (−50°).
- **Zettel** (Kampagne): `tex-zettel-gruen.webp` (Ringbuch-Notizpapier), `tex-zettel-gefaltet.webp`, `tex-zettel-rolle.webp`, `tex-zettel-pergament.webp` – als `background-size:100% 100%`, leicht gedreht (±1,5°).

### 3a. Gestaltungsregeln – ruhig und durchgestaltet (verbindlich)
1. **Festes Raster:** 6er- bzw. 12er-Grundraster; höchstens **drei Spalten** je Ansicht (Ausnahme: Kachel-/Zeilenraster mit 4 Spalten in Übersichten); Abstände nur 4 · 8 · 12 · 16 · 24 · 32 · 48 px; Seitenrand 16 px auf dem Grund, Innenrand der Pergamentseite 22–30 px (Brandrand).
2. **Eine Akzentfarbe:** Blut-Rot. Teal **nur** für Delves (Kampagne) und den Klassennamen. Schwarz nur als Kasten. Kein weiterer Farbton.
3. **Höchstens ein schwarzer Kasten je Spalte.**
4. **Überschriften-Hierarchie:** Seitentitel HT Pressed 40–44 · Abschnitt HT Pressed 26–28 · Eintrag HT Sans 15–19 (Platte oder rot) · Etikett Alegreya SC. Nie zwei Pressed-Größen nebeneinander.
5. **Tiefe = dunkler:** Wo nach Tiefe geordnet wird, wird der Grund mit der Tiefe dunkler (Entwurf 3). Sonst Pergament.
6. Bilder nie als Deko: nur Buchbilder, die zum Eintrag gehören; freigestellte Figuren dürfen über Kanten ragen (Klassenreihe, Diagonale).
7. Jede Ansicht vor dem Fertigmelden als Screenshot gegen diese Liste prüfen.

### Untersettings – eigenes Gesicht, gleiche Bausteine
| Bereich | Grund | Akzent | Besonderheit |
|---|---|---|---|
| Heart (Grundbuch + B&B + Sanctum) | Grunge-Schwarz + Pergament | Blut-Rot | Querschnitt, Tiefen-Bänder |
| Dagger in the Heart | Grunge-Schwarz, Zettel | Blut-Rot + Teal (Delves) | Kapitel-Treppe, angeheftete Zettel, Handschrift |
| Vermissian Black Ops | Schwarz | Linienfarben des Netzplans (S. 11 Black Ops) | Linienplan als Navigation (Schritt 9 – **erst eigene Entwürfe**) |
| Doors to Elsewhere | Nacht | Cover-Farben (Pink/Türkis) | Tag/Nacht-Umschalter der Stadt (Schritt 9 – **erst eigene Entwürfe**) |

---

## 4. Struktur des Tools (Navigation, Routen)

```
#start                               Vorbereitung (Entwurf 1) – erste Seite beim Öffnen
#exp                                 Expedition (Entwurf 2) – Spielbereich, Stand aus dem Spielstand
#karte                               Karte: Sechseckraster wie S. 208 (Landmarken + Verbindungen eintragen)
#lm  ·  #lm/<id>                     Landmarken nach Tiefe (Entwurf 3) / Landmarke
#gegner  ·  #gegner/<id>             Gegner (Entwurf 8)
#fallout  ·  #fallout/<resistenz>    Fallout nach Resistenz × Stufe
#gruppe  ·  #gruppe/<id>             Delver-Liste / Charakterbogen (Entwurf 5)
#nach/<kapitel>[/<unter>[/<id>]]     Nachschlagen: einfuehrung | spielweise | charaktere/(erstellung|abstammung|berufung|klasse) | regeln | spielleitung | welt | uebersicht
#zuflucht                            Haven-Bogen (Sanctum) – über Gruppe/Burger
#dagger                              Kampagne: Kapitel-Treppe (Entwurf 6)
#dagger/<kap>/<tab>[/<id>]           Kapitel 1–7: ueberblick | inszenierung | landmarken | dokumente (Entwurf 7)
#dagger/opposition | beats | fragen | zukuenfte | einfuehrung
#blackops[/…]  ·  #doors[/…]         Untersettings (Schritt 9)
#galerie                             alle Buchbilder
```

**Haupt-Tabs im Spielbereich:** Expedition · Karte · Landmarken · Gegner · Fallout · Gruppe (+ Stift rechts).
**Nachschlagen-Tabs** (über Startseite und Burger): Einführung · Spielweise · Charaktere · Regeln im Detail · Spielleitung · Die Welt · Regelübersicht. Unterleiste nur bei Charaktere (Charaktererstellung · Abstammungen · Berufungen · Klassen) und Regeln im Detail (Erfolg und Misserfolg · Heilung · Kampf · Fallout · Ressourcen und Ausrüstung · Bindungen · Erkundung). Seitenleiste mit den Einträgen.
**Kampagnen-Tabs:** links Kapitelwahl („Kapitel 2 · Eastern Express ▾“), dann Überblick · Inszenierung · Landmarken · Dokumente (+ Stift).
**Burger-Menü:** Startseite · Nachschlagen (7) · Regelübersicht · Zuflucht (Sanctum) · Charakterbögen · Galerie · Bücher · Spielstand zurücksetzen. **Keine** Setting-Auswahl im Burger.
**Kopfzeile:** Logo (Dropdown aus `toolmenu.js`) · i-Knopf (`shared/info/heart.js`) · Buch-Symbol (Auswahl: Grundbuch, Dagger in the Heart, Burned and Broken, Doors to Elsewhere, Sanctum, Vermissian Black Ops, Bogen) · Burger.

---

## 5. Ansichten im Detail

### 5.1 Startseite (Entwurf 1)
- Links das **Querschnitt-Bild** (PDF-Seite 5, xref 30 → `img/start/querschnitt.webp`) über die volle Höhe, **ungeschnitten** (655×848 bei 1440×900; bei 1280×800 entsprechend kleiner, rechts bleibt die Seite flexibel).
- Unten auf dem Bild, wo das Herz glüht: rote Platte **„In die Tiefe“** → `#exp` mit „Weiter: <Landmarke> → <Delve>“ aus dem Spielstand; darunter schwarze Leiste **„Dagger in the Heart“** (Cover-Miniatur, „Kampagne · Kapitel N: <Name>“) → `#dagger`.
- Rechts eine Pergamentseite: oben das **Gedicht** der Buch-Innenseite (PDF-Seite 2) vollständig in roten Alegreya-Bold-Versalien, zentriert. Darunter die **Inhaltsseite** in drei Spalten (schwarze Balken = Kapitel → Nachschlagen; Zeilen = Unterkapitel mit S.): Einführung (Sicherheitswerkzeuge S. 1, Ton S. 1, Das Spiel spielen S. 2, Wichtige Begriffe S. 2, Die Welt von Heart S. 3) · Spielweise (Resistenzen S. 5, Skills/Domains/Knacks S. 6, Regeln in Kürze S. 8) · Regelübersicht S. 207 | Charaktere S. 9 (Abstammungen S. 12, Berufungen S. 16, Klassen S. 26) · Regeln im Detail S. 71 (Erfolg und Misserfolg S. 71, Heilung S. 76, Kampf S. 78, Fallout S. 80, Ressourcen und Ausrüstung S. 90, Bindungen S. 98, Erkundung S. 99) | Spielleitung S. 104 (Tipps für Heart S. 109, Landmarken und Delves S. 118) · Die Welt von Heart S. 121 (Gesellschaft S. 121, Geographie des Herzens S. 126) · Landmarken S. 130 (Delves erstellen S. 133) → `#lm` · Gegner S. 175 (Legendäre Gegner S. 200) → `#gegner`.
- Unten die **Klassen-Reihe**: neun freigestellte Figuren (122 px hoch, Fußlinie rot), Name in HT Sans → Klassen-Seite.
- Muss bei 1440×900 **und** 1280×800 ohne Scrollen passen.

### 5.2 Expedition (Entwurf 2) – das Herzstück
Drei Pergamentseiten nebeneinander (430 · 580 · 370 px bei 1440; bei 1280 proportional):
- **Route** (Abstieg): Start-Landmarke (Raute, Platte, Tiefe-Etikett schwarz, Domains/Standard-Stress/Haunts) → **aktiver Delve** (hohle Raute; Karte mit Platte, Kursiv-Beschreibung, Werte-Zeilen Domains/Stress, **Resistenz als Kästchen-Leiste** mit großer Zahl „7 / 10“ – Klick zieht Stress ab, Rechtsklick/Langdruck gibt zurück; **Ereignisse** anklickbar → grau; Verbindung) → Ziel-Landmarke (mit Haunts). Oben rechts „Delve N von M“. Knöpfe (klein, unter der Delve-Karte, in HT Sans): „Vorteil −W…“/„Nachteil +W…“ (S. 101: der gewürfelte Wert wird eingetippt, **kein** Würfler), „Delve abbrechen“ (S. 101: neue Resistenz = Hälfte des Abgezogenen, aufgerundet), „Verbindung hergestellt“ (halbiert die Resistenz künftig, S. 102). Delves kommen aus Landmarken („Delve hierhin starten“), aus „Delves erstellen“ (S. 133) oder aus der Kampagne.
- **Die Delver:** oben der **schwarze Kasten** mit der Fallout-Regel aus „Regeln in Kürze“ (S. 8, Wortlaut). Darunter 2×2 **Mini-Bögen**: Name (HT Pressed), Stress-Summe rechts groß, Klasse · Berufung; fünf Zeilen Resistenz mit 10 Stress-Kästchen + 5 Schutz-Kästchen (dieselben Kästchen wie Bogen/Entwurf 5, Schutz = so viele gefüllte wie der Wert); Ausrüstung und Ressource (eine Zeile); Fallout als schwarze Etiketten mit „Resistenz · Stufe · sofort/anhaltend“ (Klick öffnet den Fallout-Text). Mehr als vier Delver: Raster wächst nach unten. Klick auf Namen → Bogen.
- **Gegner:** Statblock-Karte wie im Buch (Platte, Bild klein rechts oben, Schwierigkeit/Schutz, Resistenz als Kästchen-Leiste, Werte-Zeilen, Fallout-Kasten schwarz, „▸ Text, Namen, Beschreibung“ aufklappbar); weitere Gegner zugeklappt (Platte + „Riskant · Resistenz 4 · Schutz 0“); „+ Gegner“ öffnet die Gegner-Auswahl.
- Spielstand: aktueller Ort, Delve-Kette, Resistenz-Stände, Ereignis-Haken, Gegner auf der Tafel.

### 5.3 Karte
Sechseckraster wie die Karte S. 208 (rotes Raster auf Dunkelrot; als SVG neu gesetzt, nicht als Bild). Die SL setzt Landmarken (Auswahl aus `#lm`, als Platten) auf Felder und zieht Verbindungen/Delves (Linien; Delve = Teal-Platte mit Resistenz). Bekannt/unbekannt umschaltbar (S. 103: zweite, leere Karte für die Spieler). Klick auf Landmarke → `#lm/<id>`, auf Delve → Expedition. **Erst Entwurf zeigen** (Regel 16), Baustein der Wegekarte aus Entwurf 7 wiederverwenden.

### 5.4 Landmarken (Entwurf 3)
- **Übersicht:** Tiefen-Bänder 0–3 untereinander (Hintergrund je Tiefe dunkler), links der Tiefen-Kopf (HT Pressed + der erste Satz aus S. 99 kursiv), rechts 4er-Raster der Landmarken (Name HT Sans rot, Standard-Stress + S. rechts, Domains in Alegreya SC unten bündig). Unten Band **Tiefe 4** (Glut-Verlauf, nur Text). Rechts dunkler Streifen: **Ungebunden** (S. 164), **Risse** (S. 165), **Die Acht Himmel** (S. 168, „Die Gesichter des Mondes“ mit ihren drei Teilen). Landmarken aus *Burned and Broken* (Tiefe 0: Kirche der Absolution, Schierlingsfrucht-Markt, Haven Station) mit Teal-Etikett „B&B“.
- **Landmarke (`#lm/<id>`):** Pergamentseite: Titel HT Pressed + S., Werte-Zeile (Domains, Tiefe, Standard-Stress, Haunts), Bild aus dem Buch (nur wenn zugehörig – z. B. Derelictus S. 136), Text links, rechts **Ressourcen**, **mögliche Plots** (Klick = erledigt), **besondere Regeln** (schwarzer Kasten), eingebettete Haunts/Unter-Orte (z. B. die vier Nebentempel beim Tempel des Mondes darunter) als Karten. Knopf „Delve hierhin“ → Expedition.
- Nachschlage-Teile des Kapitels (S. 130–135: Was keine Landmarke ist, Haunts inkl. Aufwerten/Beschädigen, Anstellung, Landmarken nach Tiefe, Benutzung, eigene Landmarken, **Delves erstellen** mit Beispiel, generische Landmarken, Was gehört zu einer Landmarke) als Seite „Über Landmarken“ (erster Eintrag oben links im Tiefen-Kopf „Tiefe 0“ als Link, bzw. im Nachschlagen › Spielleitung).

### 5.5 Gegner (Entwurf 8)
4er-Zeilenraster aller Gegner (S. 175–199) als zugeklappte Zeilen (Name, S., „Schwierigkeit · Resistenz · Schutz“; bedingte Werte mit * und vollem Text im Statblock; Bild klein rechts **nur** bei eindeutiger Zuordnung). Aufgeklappt über **zwei Spalten**: Text links, rechts Bild + Werte-Zeilen + Fallout-Kasten; Knopf „Auf die Expedition“. Darunter dunkles Band **Legendäre Gegner** (S. 200–205: Basilisk, Gorgo, Hydra, Jägerin, Minotaurus) – gleiche Karten, aber Platte schwarz. Gegner aus Zusatzbüchern (B&B: Ghul, Ebony-Row-Pirscher …; Sanctum: vier Engel; Black Ops) mit Herkunfts-Etikett. „Mobs“ (S. 175) als schwarzer Kasten oben.

### 5.6 Fallout
Raster **Resistenz × Stufe** (Spalten Blood · Mind · Echo · Fortune · Supplies; Abschnitte leicht · schwer · kritisch, S. 80–89), jede Fallout-Karte zugeklappt (Name, [sofort/anhaltend], „auch: Supplies“), Klick zeigt den Text, „Zuweisen“ → Delver (erscheint als Etikett in Entwurf 2). Oben die allgemeinen Fallout-Regeln (S. 80) als Kasten. **Erst Entwurf zeigen.**

### 5.7 Gruppe & Charakterbogen (Entwurf 5)
- `#gruppe`: Karten der Delver (Figur der Klasse klein, Name, Klasse · Berufung, Stress-Summe, aktive Beats) + „+ Delver“ (Charaktererstellung S. 9–11 als geführter Ablauf **nur** mit Buchtext und Auswahllisten).
- `#gruppe/<id>`: **Original-Bogen** als Hintergrund (beide Seiten nebeneinander; englischer Text entfernt, Außenweiß transparent – `img/bogen-s1/-s2.webp`), deutsche Beschriftung in HT Sans `#67000c` exakt an der Originalstelle (Positionen in pt in `m5-bogen.html`). Felder tippbar (Alegreya kursiv, Tinte `#1b2a4a`), Kästchen klickbar (Stress 10 + Schutz 5 je Resistenz, Skills/Domains), Knacks-Zeilen, Fähigkeiten (Auswahl aus Klassen-Daten, eingetragen mit S.), Fallout, Ausrüstung, Ressourcen, Geschichte und Beziehungen, Porträt-Feld („Zur Erinnerung: so sehe ich aus“, Bild ablegen), Notizen, Bindungen, Würfelergebnis-Raute (statisch).
- Rechts schmale Spalte: „Als PDF speichern“ (`shared/fillpdf.js`, ausfüllbar), „PDF einlesen“, „Original (EN) ausfüllen“, Delver-Liste.

### 5.8 Nachschlagen (Entwurf 4)
- **Einführung** (S. 1–4), **Spielweise** (S. 5–8: Resistenzen, Skills/Domains/Knacks als Kartenraster, Regeln in Kürze als großes Diagramm mit den Würfel-Zeichnungen S. 8 nachgebaut).
- **Charaktere:** Charaktererstellung (S. 9–11); **Abstammungen** (S. 12–15: Drow, Menschen, Aelfir, Gnolls – Bild im Pinselrahmen aus dem Buch per `clip`, Text, W10-Tabellen „Namen/Fragen“); **Berufungen** (S. 16–25: Adventure, Enlightenment, Forced, Heartsong, Penitent – Bild, Text, Kernfähigkeit, Beats klein/groß/Zenit als Karten); **Klassen** (S. 26–70, Entwurf 4: Diagonale, Einleitung kursiv, Kerneigenschaften-Tabelle, Kernfähigkeiten, kleine/große/Zenit-Fähigkeiten im 3er-Raster). *Burned and Broken*: **Minister** (Berufung, B&B S. 24) unter Berufungen, **Herkünfte** (Origins, B&B S. 10–18, 13 Stück) als eigener Eintrag „Herkünfte (B&B)“ unter Charaktere.
- **Regeln im Detail** (S. 71–103), **Spielleitung** (S. 104–120, inkl. Sicherheit), **Die Welt** (S. 121–129: Gesellschaft, Religion, Kunst, Organisationen, Vermissian, Zeit, das Herz selbst, Geographie nach Domain mit den Sechseck-Bildern S. 128–129), **Regelübersicht** (S. 207, auch als Overlay Taste `s`).
- Sanctum: **Zufluchten** (Haven-Erstellung, Haven-Fallout, Haven-Beats, Beispiel Wyrmpit) unter Spielleitung + eigener Haven-Bogen `#zuflucht`; Engel → Gegner; Gris Hannemans Hinterlassenschaften → Dokumente/Galerie.

### 5.9 Kampagne *Dagger in the Heart* (Entwürfe 6 + 7)
- **Übersicht (Entwurf 6):** Kopfzeile mit Schriftzug „Dagger in the Heart“. Sieben **Kapitel-Karten als Treppe** (je 194 px nach rechts, 66 px nach unten; Kapitelbild ungeschnitten 180×233, darunter schwarze Leiste „Kapitel N · S.“ + Titel). Erledigte Kapitel entsättigt, aktuelles auf roter Platte. Oben rechts der Eröffnungstext von S. 1 (Verse kursiv + erster Absatz). Unten links Zettel **Die Opposition** (S. 5–21: drei Gegenspieler mit **Plan-Leiste** 2 klein → 2 groß → Zenit, Klick setzt Haken; Klick auf Namen → Seite mit Verbündete & Mittel, Pläne, Gegenmaßnahmen, Statblöcken), Zettel **Für die Runde** (Beat-Bogen #1 S. 22, #2 S. 72 – je Delver abhakbar; Schlüsselfragen-Bogen S. 23 – je Delver ausfüllbar; Gebrochene Zukünfte S. 20). Einführung (S. 1–4: Hintergrund, Aufbau, Fractured Futures, Spielercharaktere einbinden) über die Eröffnungs-Verse erreichbar.
- **Kapitel (Entwurf 7):** Tabs **Überblick** (Zettel „Überblick“ wie im Buch + Legenden/Gerüchte als Liste) · **Inszenierung** (Szenen als Karten mit Titel fett, Folgen als Unterliste; „Gars Notiz“-Fußnoten als kleine Zettel mit Nummer) · **Landmarken** (Wegekarte oben: Landmarken als rote Platten, Delves als Teal-Platten auf den Linien, Höhe = Tiefe, Expressroute gestrichelt; darunter links die **Delve-Karte** genau wie im Buch – Teal-Kopf, Fläche `#ecefee`, rote Etiketten, Resistenz-Kästchen teal, Ereignisse 1–6 anklickbar; rechts die **Landmarke** auf Pergament: Werte-Zeile, Text, Ressourcen, mögliche Plots, Statblöcke der Figuren als Gegner-Karten) · **Dokumente** (Handouts, Abschnitt 0a.6, Vollbild „Zeigen“). Kapitel ohne Delves (7: Ein Dolch in deiner Hand) zeigen statt der Wegekarte die Szenenfolge (Letztes Hindernis → Letzte Station → Danach).
- Die Kampagnen-Delves lassen sich per „Auf die Expedition“ in Entwurf 2 übernehmen (gleiche Tafel).

### 5.10 Untersettings Vermissian Black Ops / Doors to Elsewhere (Schritt 9)
Inhalte: Black Ops – Alternative Regeln (S. 2–4), Einsätze/Operationen (S. 5–9), Throne-Division-Ausrüstung, **die Vermissian nach Linien** (Candle, Fathom, Spiral, Loft, Pulse mit Stationen, Netzplan S. 11), Gruppen (Paladine, Ministerium, Spiral Council, Vermissian Collective, Gutterkin). Doors – Leben in der Stadt Elsewhere (Tag/Nacht), Landmarken, Fraktionen, Dimensionstheorie, Beats & kleine Aufstiege, Leitung, Zufallstabellen. **Vor dem Bau eigene Entwürfe** (Linienplan als Navigation bzw. Tag/Nacht-Stadt) zeigen.

### 5.11 Werkzeuge
- **Regelübersicht** (Taste `s`): S. 207 als Overlay, zweispaltig wie im Buch, deutsch.
- **Suche** (Taste `/`), **Galerie** (Gruppen: Kapitel-Eröffnungen, Abstammungen, Berufungen, Klassen, Landmarken, Gegner, Kampagne, Zusatzbücher), **Bücher**, **Buch öffnen**, **i-Knopf** (`shared/info/heart.js`: Setting, Würfelprobe, Stress & Fallout, Delves – kurz, im Heart-Design; in `shared/sysinfo.js` MAP ergänzen).
- `toolmenu.js`: Untertitel „Die Stadt darunter“ beim Heart-Eintrag entfernen; Untersettings `ht_dagger` (Schriftzug-SVG), `ht_blackops`, `ht_doors` (eingeklappt, 1,5 s Hover); `cur()` erkennt `#dagger` / `#blackops` / `#doors`.

### 5.12 Spielstand
`localStorage["ht_state_v1"]` = `{ last:"exp", exp:{ort:"derelictus", kette:[{delve:"krahenfusspass", res:10, x:3, erg:[0]}, …], ziel:"leichengott", gegner:[{id:"schlaechter", x:2}]}, delver:[{id, name, klasse:"cleaver", berufung:"adventure", stress:{blood:3,mind:0,echo:1,fortune:2,supplies:0}, schutz:{blood:1,…}, skills:["hunt","delve"], domains:["cursed"], knacks:{}, faeh:["herzblut","rotes-festmahl","dunkelaugen"], fallout:[{id:"blutend"}], ausr:[…], res:[…], beats:[…], bild:null, notiz:""}], karte:{felder:{"3,4":"derelictus"}, linien:[…]}, dagger:{kap:2, opp:{bay:[1,0,0], aramos:[2,1,0], einer:[0,0,0]}, beats:{}, fragen:{}, erledigt:{}}, erledigt:{"lm/derelictus/plots/0":true}, notiz:{} }`. Alle Zugriffe in `try/catch`.

---

## 6. Architektur und Datenformat

**Vorlage ist `slugblaster/`** (zuletzt gebaut, gleiche Bausteine wie Pico: Shell, Routing, Tab-Leisten, Seitenleiste, Blöcke, Bögen mit FillPDF, Suche, Galerie, Bookviewer). `index.html`, `js/app.js`, `nach.js`, `suche.js`, `bogen.js` nach `heart/` kopieren, Präfixe umbenennen (`SB_` → `HT_`, `sb_state_v1` → `ht_state_v1`, Buch-IDs wie in `heart/sys.js`: `ht_core` off 5, `ht_a1` off 5, `ht_z1` Black Ops off 3, `ht_z2` Doors off 2, `ht_z3` B&B off 2, `ht_z4` Sanctum off 2, `ht_qs`, `ht_a2`, `ht_m1`), Inhalte entfernen, Design durch `ht.css` ersetzen. `heart/sys.js` + `sysstart` danach nicht mehr verwenden (Bücherliste → `heart/js/data/buecher.js`).

```
heart/index.html             Shell – Kopfzeile, #app, Burger, Suche, Skripte, toolmenu.js, gm_tool_mode_v1="heart"
heart/style.css              Design nach Abschnitt 3 (aus ht.css)
heart/js/app.js              Routing, Startseite, Tabs, Seitenleiste, Blöcke, Tasten
heart/js/expedition.js       Expedition (Route, Delve, Delver-Mini-Bögen, Gegner-Spalte)
heart/js/leiste.js           Kästchen-Leisten (Resistenz, Stress, Schutz) – überall derselbe Baustein
heart/js/karte.js            Sechseckkarte + Wegekarte (auch für die Kampagne)
heart/js/landmarken.js, gegner.js, fallout.js, gruppe.js, bogen.js, nach.js, dagger.js, suche.js, regelblatt.js
heart/js/data/buecher.js, glossar.js, galerie.js
heart/js/data/nach-einfuehrung.js, nach-spielweise.js, nach-erstellung.js, abstammungen.js, berufungen.js,
              klassen-a.js (Cleaver–Heretic), klassen-b.js (Hound–Junk Mage), klassen-c.js (Vermissian Knight, Witch),
              regeln-a.js … regeln-c.js, spielleitung-a.js/-b.js, welt.js, regelblatt.js,
              lm-intro.js, lm-t0.js, lm-t1.js, lm-t2.js, lm-t3.js, lm-sonder.js (Ungebunden, Risse, Acht Himmel),
              gegner-a.js (A–G), gegner-b.js (H–W), gegner-legendaer.js, fallout-blood.js … fallout-supplies.js,
              bb-herkuenfte.js, bb-minister.js, bb-derelictus.js, sanctum-zuflucht.js, sanctum-engel.js, sanctum-gris.js,
              dagger-einf.js, dagger-opposition.js, dagger-beats.js, dagger-k1.js … dagger-k7.js (lange Kapitel -a/-b), dagger-doku-k2.js …,
              blackops-*.js, doors-*.js
heart/img/start/, kap/, abst/, beruf/, klasse/, lm/, gegner/, dagger/, zettel/, bogen/, tex/
assets/fonts/ht-bartender-pressed.woff2, ht-bartender-sans.woff2, ht-bartender-serif.woff2, ht-bartender-boldsans.woff2,
             alegreya-latin-{400,500,700,800}-{normal,italic}.woff2, alegreya-sc-latin-{500,700}-normal.woff2
```

### Text-Blöcke (wie Slugblaster/Pico)
`{t:"p",x}`, `{t:"h",x,p}`, `{t:"ul",x:[…]}`, `{t:"kasten",h,x|b}` (schwarzer Kasten), `{t:"werte",z:[[etikett,text],…]}` (Werte-Zeilen), `{t:"w",h,cols,rows}` (Würfeltabelle, anklickbar), `{t:"notiz",nr,x}` (Gars Notiz), `{t:"zitat",x}` (kursiv), `{t:"img",src}`, `{t:"grid",n,x:[[Blöcke],…]}`, `{t:"karten",x:[…]}`.

### Landmarke
```js
HT_LM.push({ id:"derelictus", t:"Derelictus, die Stadt dazwischen", q:"core", p:136, tiefe:0, dom:["Haven"], stress:"W4",
  haunts:[{t:"alle", x:"W10"}], img:"lm/derelictus", text:[Blöcke],
  regeln:"Ein paar Tage in Derelictus entfernen automatisch allen Stress von den Resistenzen eines Charakters.",
  ressourcen:["… (W4, Haven)", …], plots:["Verrex, ein zwielichtiger Retro-Technologe … (W10, Technology)", …],
  unter:[{t:"Sonderwood – der Tempel der Gemeinschaft", …}] });   // q: core | bb | doors | sanctum | dagger
```
### Delve
```js
HT_DELVE.push({ id:"krahenfusspass", t:"Krähenfußpass", q:"core", p:100, tiefe:"1–2", dom:["Desolate","Wild"], stress:"W6", res:10,
  besch:"Eine Reihe von Klippenpfaden …", erg:["Steinschlag","Angriff von Harpyien","Gefährliche Kletterpartie","…"],
  verb:"Säubert die felsigen Höhlen vom Schlächter (S. 180), der den Pass bedroht.", von:"derelictus", nach:null });
// Kampagne: q:"dagger", kap:2, von:"shuntyard", nach:"perfide-kathedrale", erg:[6 Einträge]
```
### Gegner
```js
HT_GEGNER.push({ id:"schlaechter", t:"Schlächter", q:"core", p:180, img:"gegner/schlaechter", legendaer:false,
  text:[Blöcke], namen:"…", besch:"…", motiv:"…", schw:"Riskant", res:10, schutz:3, resX:null /* Text bei bedingten Werten */,
  ressourcen:"…", ausr:"Albtraumklauen (W10)", besonders:null, dom:["Wild","Warren","Cursed"],
  fallout:[{t:"Verschleppt", r:"Blood", s:"schwer", x:"Du bist verletzt, …"}] });
```
### Klasse / Berufung / Abstammung / Fallout
```js
HT_KLASSE.push({ id:"cleaver", t:"Cleaver", p:26, img:"klasse/cleaver", intro:[Absätze],
  kern:{skill:"Hunt", dom:"Cursed", res:{x:"Ein frisch geerntetes Herz, das noch gelegentlich zuckt", w:"W6 Wild"},
        ausr:[{x:"Jagdmesser", w:"Kill W6"}], wahl:[{x:"Hackbeil", w:"Kill W8, Brutal, Tiring"}, …]},
  kernF:[{t:"Herzblut", k:"Du hast eine knochentiefe …", x:"Dein Mindestwert …"}, …],
  klein:[…], gross:[…], zenit:[…] });                        // k = kursiver Einstieg
HT_BERUF.push({ id:"adventure", t:"Adventure", p:16, img:"beruf/adventure", text:[…], fragen:[…], kernF:{…}, beats:{klein:[…], gross:[…], zenit:[…]} });
HT_ABST.push({ id:"drow", t:"Drow oder Dunkelelfen", p:12, img:"abst/drow", text:[…], tabellen:[…] });
HT_FALLOUT.push({ id:"blutend", t:"Blutend", r:"Blood", auch:null, s:"leicht", art:"anhaltend", p:80, x:"Am Ende jeder Situation, in der du diesen Fallout hast, markiere W4 Stress auf Blood." });
```
### Kampagnen-Kapitel
```js
HT_DAGGER_KAP.push({ n:2, id:"eastern-express", t:"Eastern Express", p:35, img:"dagger/kap2",
  ueberblick:[Blöcke], legenden:[…], insz:[{t:"Verloren & allein", x:[Blöcke], folgen:[…]}, …],
  karte:{knoten:[{id:"shuntyard", t:"Shuntyard", tiefe:1, aus:1}, …], kanten:[{von, nach, delve:"shuntyard-kathedrale"}, {von:"perfide-kathedrale", nach:"tollembrood"}]},
  lm:["perfide-kathedrale", …], delves:["shuntyard-kathedrale", …], doku:["handout-1", …], notizen:[{nr:5, x:"…"}] });
```

---

## 7. Bilder

Skript: `python3 -I plan/heart/extract_images.py <pdf> <ziel> xref <xref> <name>` (Rohbild **mit Transparenz**), `clip <PDF-Seite> x0 y0 x1 y1 <name> [dpi]` (für Bilder im Pinselrahmen, Vektor-Schriftzüge), `spread <PDF-Seite links> <name>` (Doppelseite als ein Bild). Inventar: `plan/heart/bilder-<kürzel>.tsv` (Spalte `art` markiert Papier/Streifen/Kapitelbanner = keine Illustration). **Hier immer PDF-Seiten.** Alles als `.webp`, sprechend benannt, Breite höchstens 900 px.

| Bereich | Quelle (PDF-Seite, xref) | Ziel / Hinweis |
|---|---|---|
| Querschnitt (Start) | Grundbuch S. 5, xref 30 | `img/start/querschnitt` – ungeschnitten |
| Schlucht-Rahmen (frei) | Grundbuch S. 2, xref 5 (transparente Mitte) | `img/start/schlucht` – für Galerie / Regelübersicht |
| Cover | Grundbuch xref 3481; Kampagne xref 155 | `img/start/cover-heart`, `img/dagger/cover` |
| Texturen | Papier xref 1518 · Streifen 1510/1513 · Kapitelbanner 1516 · Dunkel (Kampagne) 1677 · Zettel (Kampagne) 1440 (grün), 2827 (gefaltet), 1527 (Rolle), 847 (Pergament) | `img/tex/…` (schon in `mockups/src/img/tex-*`) |
| Abstammungen | Grundbuch S. 17–20 – Bild steckt in einer Pinselrahmen-Maske → **`clip`** der Bildfläche (Rohbild ist dunkel) | `img/abst/drow|mensch|aelfir|gnoll` |
| Berufungen | xref 148 (Adventure S. 21), 165 (Enlightenment S. 23), 182 (Forced S. 25), 197 (Heartsong S. 27), 212 (Penitent S. 29) | `img/beruf/<id>` |
| Klassen | xref 230 Cleaver · 256 Deadwalker · 279 Deep Apiarist · 306 Heretic · 334 Hound · 363 Incarnadine · 389 Junk Mage · 416 Vermissian Knight · 443 Witch (alle freigestellt) | `img/klasse/<id>` (schon in `mockups/src/img/klasse-*`) |
| Landmarken | z. B. Derelictus xref 922 (S. 141); weitere aus `bilder-core.tsv` (S. 135–179) **je am Seitenbild prüfen** – nur Bild, das neben/über **genau dieser** Landmarke steht | `img/lm/<id>` |
| Domains (Welt) | S. 133–134, je Domain ein Sechseck-Bild (xref 841–862 …) | `img/welt/dom-<id>` |
| Gegner (eindeutig) | Schlächter xref 1218 (S. 185, Geweih + Beute = Schlächter-Beschreibung) · Kult der Messer 1238 · Flugunfähiger Eulenstock 1263 · Gnoll-Einsatztrupp 1286 · Spiegelspinnen 1325 · Stellwerk-Kultisten 1342 · Basilisk 1380 · Gorgo 1386 · Jägerin 1410 · Minotaurus 1422 | `img/gegner/<id>` – **unklar und deshalb weglassen** bis am Seitenbild geprüft: 1233 (S. 186), 1246 (S. 188), 1280 (S. 192), 1301 (S. 196), 1311 (S. 197), 1352 (S. 202), 1370 (S. 204), Geist 1271 (dunkle Maske → `clip`) |
| Kapitel-Eröffnungen Kampagne | Bild-xref 1474 (K1, S. 29), 1672 (K2, S. 38), 2310 (K3, S. 57), 2789 (K4, S. 75), 3668 (K5, S. 93), 4024 (K6, S. 121), 4292 (K7, S. 135); als Doppelseite für die Galerie: `spread` 38, 57, 75, 93, 121, 135 | `img/dagger/kap1…7` (schon in `mockups/src/img/dagger-kap*`) |
| Kampagnen-Schriftzug | Vektor S. 4 → SVG (`dagger-logo-zeile-hell.svg`, `dagger-logo.svg`) | `img/dagger/logo-*.svg` |
| Handouts | Kampagne S. 52–56 (Dokumente K2) usw. – Papier-Hintergründe per `xref`, Text deutsch neu gesetzt | `img/dagger/doku-*` |
| Charakterbogen | Bogen-PDF, Text per Redaktion entfernt, Außenweiß per Flutfüllung transparent (Code unten) | `img/bogen/s1`, `s2` (schon in `mockups/src/img/bogen-s*`) |
| Zusatzbücher | Covers (PDF-S. 1), Minister/Herkünfte-Figuren (B&B PDF-S. 12–20, 26), Engel (Sanctum PDF-S. 21–25), Linienplan (Black Ops PDF-S. 14), Elsewhere (Doors) – je am Seitenbild prüfen | `img/bb/…`, `img/sanctum/…`, `img/blackops/…`, `img/doors/…` |
| Fehlende Gegnerbilder (optional) | `plan/heart/gemini/GEMINI_PROMPTS.md` (Harpyien, Gottbestie, Herzblutbestie, Marktleibeigener, Tunnelräuber, Lastenautomat) | `img/gegner/<id>` + Vermerk „neu gezeichnet“, nicht in „Buchbilder“ |

**Weiß freistellen (Bogen, Gemini-Bilder):**
```python
from PIL import Image, ImageDraw; import numpy as np
im=Image.open(src).convert('RGB'); w,h=im.size; m=im.copy()
for s in [(0,0),(w-1,0),(0,h-1),(w-1,h-1),(w//2,0),(w//2,h-1),(0,h//2),(w-1,h//2)]:
    if sum(m.getpixel(s))>740: ImageDraw.floodfill(m,s,(255,0,255),thresh=40)
a=np.array(m); alpha=np.where((a[...,0]==255)&(a[...,1]==0)&(a[...,2]==255),0,255).astype('uint8')
Image.fromarray(np.dstack([np.array(im),alpha]),'RGBA').save(ziel,'WEBP',quality=88)
```
Regeln: Doppelseiten als **ein** Bild; nie ein Bild einer falschen Figur zuordnen – im Zweifel weglassen. Alle Buchbilder auch in die Galerie (`js/data/galerie.js`).

---

## 8. Arbeitsschritte (jeweils eine Sitzung: Screenshots, Commit, Push)

0. **Gerüst, Design, Schriften.** Shell aus `slugblaster/` übernehmen (Abschnitt 6), Schriften nach `assets/fonts/`, `ht.css` → `heart/style.css`, Texturen nach `heart/img/tex/`. **Startseite** (Entwurf 1) mit Querschnitt, Gedicht, Inhaltsseite (Links zunächst auf leere Nachschlage-Seiten), Klassen-Reihe. Bücher/Bookviewer (Versätze aus Abschnitt 1), Burger, Tasten, `sw.js`, `toolmenu.js` (Untertitel weg, Untersetting „Dagger in the Heart“ mit Schriftzug vorbereitet), i-Knopf `shared/info/heart.js`.
1. **Nachschlagen I:** Einführung, Spielweise (inkl. „Regeln in Kürze“ als Diagramm), Charaktererstellung, **Abstammungen**, **Berufungen**, **Klassen** (alle 9, Entwurf 4) + B&B: Herkünfte, Minister.
2. **Nachschlagen II:** Regeln im Detail (S. 71–103), Spielleitung (S. 104–120), Die Welt (S. 121–129), Regelübersicht (S. 207 + Overlay `s`); Sanctum: Zufluchten (Nachschlagen) + Haven-Bogen.
3. **Landmarken** (Entwurf 3 + Landmarken-Seite + „Über Landmarken“, alle Landmarken S. 130–174) + B&B-Derelictus (Landmarken, Delves, Gegner-Kästen).
4. **Gegner** (Entwurf 8, S. 175–205) + Sanctum-Engel + B&B-Gegner; **Fallout-Tab** (S. 80–89) – vorher Entwurf zeigen.
5. **Spielbereich:** **Expedition** (Entwurf 2), **Gruppe**, **Karte** (vorher Entwurf zeigen), Spielstand, Delves erstellen (S. 133).
6. **Charakterbogen** (Entwurf 5) mit PDF-Export (`shared/fillpdf.js`), PDF einlesen, Original (EN) befüllen.
7. **Dagger in the Heart I:** Untersetting im Dropdown, Übersicht (Entwurf 6), Einführung, Opposition (mit Plan-Leisten und Statblöcken), Beat-Bögen, Schlüsselfragen, Gebrochene Zukünfte, **Kapitel 1–3** (Entwurf 7) inkl. Dokumente.
8. **Dagger in the Heart II:** Kapitel 4–7 inkl. Dokumente/Handouts; Kampagnen-Delves auf die Expedition.
9. **Vermissian Black Ops** und **Doors to Elsewhere** (zuerst je 2–3 eigene Entwürfe zeigen, dann bauen), Sanctum-Rest (Gris Hanneman), **Suche** über alles, **Galerie**, Gesamtcheck (1280er-Viewport, keine JS-Fehler, keine Lücken, eingeklappte Seitenleiste) → diesen Plan als „erledigt“ markieren.

Für jede Sitzung bittet Sonnet Moritz, das passende PDF hochzuladen (Grundbuch für 0–6, Kampagne für 7–8, Zusatzbücher für 1–4 und 9). Der englische Text liegt schon im Repo.

---

## 9. Startauftrag für jede Sonnet-Sitzung (zum Kopieren)

> Lies `plan/HEART_PLAN.md` im Repo einmoritz-spec/Spielleitertool und setze **Schritt N** um. Halte dich an Abschnitt 0 (Entscheidungen), Abschnitt 2 (Grundregeln, Namensregel, Glossar) und Abschnitt 3 (Design, Gestaltungsregeln) und baue genau nach den Entwürfen in `plan/heart/mockups/` (Quellen in `mockups/src/`, `ht.css` ist das fertige Design-System). Der englische Buchtext liegt in `quellen/heart/text/` (Seitenmarken = Buchseiten), das PDF hänge ich an. Übersetze vollständig ins Deutsche, nichts weglassen, nichts erfinden. Prüfe jede Ansicht per Screenshot (1440×900 und 1280×800, auch mit eingeklappter Seitenleiste), behebe Lücken/Überlauf, schick mir die Screenshots, trage neue Dateien in `sw.js` ein (VERSION erhöhen), committe ohne Co-Authored-By/Claude-Session-Zeilen und pushe.
