# MÖRK BORG – Spielleiter-Tafel (Bauplan)

Stand: 22. Nov. 2026. Arbeitsanweisung für die Umsetzung (gedacht für Sonnet, in mehreren Sitzungen).
Nichts aus diesem Plan ist bisher gebaut. Heute ist `moerkborg/` nur eine Bücher-Startseite (`shared/sysstart.js` + `moerkborg/sys.js`, Platzhalter-Farben/Schriften Archivo/Merriweather, die **nicht** zum Buch passen und ersetzt werden).
Ziel: ein vollständiges Setting wie **Pico** (`pico/`) bzw. **Slugblaster** (`slugblaster/`) – alle Inhalte des Corebooks und der **Rules Apocrypha** auf Deutsch, im Design der Buch-PDFs, mit einem Spieltisch für die laufende Runde.

**Wichtig zum Verständnis:** Mörk Borg ist ein Regelbuch mit **einem** Abenteuer (Rotblack Sludge, S. 73–87), einer Weltbeschreibung (Die sterbende Welt, S. 2–15), Kalender der Heimsuchungen (Misery, S. 16–17) und vielen Zufallstabellen. Die Apokryphen ergänzen Kreaturen, Verliese, Etablissements, Auftragstafeln, Krankheiten, Sternzeichen und Beschwörungen. Weitere Abenteuer, Kulte, Hacks (Cy_Borg …) liegen im Drive-Ordner und kommen **später** (Abschnitt 8, „Später“).

Entwürfe (Screenshots 1440×900) liegen in `plan/moerkborg/mockups/` – **die Umsetzung muss diesen Entwürfen genau entsprechen**. Je Entwurf gibt es eine saubere Fassung (`m2-spieltisch.jpg`) und eine mit Erklärungen (`m2-spieltisch-erklaert.jpg`). HTML/CSS-Quellen in `plan/moerkborg/mockups/src/` (`mb.css` = fertiges Farb-/Schrift-System, Ausgangspunkt für `moerkborg/style.css`; `fonts/` = fertige Schriften; `img/` = Beispielbilder). Nummerierte Kästen im „erklärt“-Entwurf sind nur Erklärungen, nicht Teil der Oberfläche. Texte in den Entwürfen sind teils gekürzt – im Tool steht immer der **vollständige** Buchtext. Das Design-Konzept steht in `plan/moerkborg/DESIGN_KONZEPT.md`.

| Nr. | Datei | Ansicht |
|---|---|---|
| 1 | `m1-start.jpg` | Startseite „Register“ = Vorbereitung (4 Teile) + „Zum Spieltisch“ |
| 2 | `m2-spieltisch.jpg` | Spieltisch: Kalender, Gruppe, Gewalt, Regelspiegel |
| 3 | `m3-abenteuer.jpg` | Abenteuer Rotblack Sludge: Karte, Raumleiste, Räume, Zufallsbegegnungen |
| 4 | `m4-kreaturen.jpg` | Kreaturen-Raster (Goblin aufgeklappt) |
| 5 | `m5-regeln.jpg` | Nachschlagen · Die Regeln · Gewalt (gelb) |
| 6 | `m6-tabellen.jpg` | Tabellen · Unterwegs (Wetter, Fallen, Okkulte Schätze, Namen) |
| 7 | `m7-welt.jpg` | Nachschlagen · Die sterbende Welt mit Weltkarte |
| 8 | `m8-bogen.jpg` | Charakterbogen (**vorläufig**, bis das Original-PDF vorliegt) |

---

## 0. Entscheidungen (von Moritz am 22. Nov. 2026 freigegeben – verbindlich)

1. **Spielbegriffe DEUTSCH** (anders als Slugblaster): TP (Trefferpunkte), SG (Schwierigkeitsgrad), Moral, Omen, Mächte, Proben, Krit, Patzer, Gebrochen usw. – Glossar in Abschnitt 2.
2. **Misery → „Heimsuchung“** (z. B. „Die siebte Heimsuchung ist immer 7:7“, „Kalender des Nechrubel“).
3. **Namen:** Eigennamen bleiben englisch (Seth, Galgenbeck, Rotblack Sludge, Nechrubel, Sarkash). Beschreibende Namen werden übersetzt (Endloses Meer, Tal der Unglücklichen Untoten, Dochtkopf). Auf der Weltkarte bleiben die englischen Beschriftungen **im Bild** stehen.
4. **Rules Apocrypha** werden **in die passenden Bereiche integriert** (kein Untersetting): Kreaturen, Tabellen, Verliese/Etablissements/Auftragstafeln unter „Unterwegs“, Krankheiten/Sternzeichen unter „Die Verdammten“/Tabellen, Beschwörungen unter „Mächte“. Im Bereich „Die Apokryphen“ stehen die Einleitungsseiten.
5. **Weitere Bücher im Drive** (Abenteuer, Kulte, Book of Misery, Hacks): später. Abenteuer kommen in den Reiter „Abenteuer“, Hacks (Cy_Borg …) werden **Untersettings im Dropdown** (Mörk Borg › Cy_Borg), nach dem Muster City of Mist.
6. **Charakterbogen:** Entwurf 8 ist vorläufig. Für den Bau lädt Moritz das PDF „Character Sheet“ (Drive, 05 Material) hoch; dann deutscher, ausfüllbarer Nachbau + PDF-Export mit `shared/fillpdf.js`.
7. **Troll:** Der Eigenname auf S. 64 (Bild-Schriftzug, im PDF nur angeschnitten) wird beim Bau am Seitenbild geklärt. Bis dahin „Troll“.
8. Repo-Schreibrechte: in der Phase-1-Sitzung nachträglich freigeschaltet, Push funktioniert.

**Bauchronik:** Schritt 0 (Gerüst, Schriften, Register-Startseite, i-Knopf, Menü, sw.js) gebaut am 22. Nov. 2026. **Schritt 1** (Spieltisch + Kalender: `spieltisch.js`, `blocks.js`, `kalender.js`, `kalender-psalmen.js`, `regelspiegel.js`, `regeln-a.js` = c04 S. 26–31) gebaut am 22. Nov. 2026; **Schritt 2** (Die sterbende Welt: `nach.js`, `welt-a/b/c.js`, `weltkarte.js`, Bilder `img/welt/`) gebaut am 22. Nov. 2026 (Kalender-Eintrag der Ortsleiste öffnet die Verse, Teile II–IV der gelben Leiste folgen); offen für Schritt 3: c04 S. 28 (TP-Seite, nur Überschriften im Text) und S. 33 „Besser werden“ am Seitenbild prüfen.

---

## 1. Quellen

| Was | Wo |
|---|---|
| Corebook (EN, 96 PDF-Seiten, A5 419×595 pt) | von Moritz hochladen lassen (Drive-Ordner `1o7TIkT9zzuIFacPziLbGN9XHFkUHgmO8`) |
| Rules Apocrypha (EN, 67 Seiten, 429×613 pt) | ebenso |
| Character Sheet (EN) | Drive 05 Material – **fehlt noch als Datei** |
| Buchtext je Kapitel als Markdown | `quellen/moerkborg/text/c00…c12` (Corebook), `a01…a10` (Apokryphen) |
| Bild-Inventar | `plan/moerkborg/bilder-inventar-core.tsv` (142 Bilder), `-apo.tsv` (65) |
| Skripte | `plan/moerkborg/extract_text.py`, `extract_images.py`, `shot.py` |
| Logo | `assets/logos/moerk-borg.webp` (schwarz, freigestellt, 1006×700) → als CSS-Maske in Gelb/Schwarz/Weiß |

**Seitenzählung:**
- **Corebook:** Buchseite = PDF − 4 (`off:4`). Vorsatzseiten (PDF 2–3 und 95–96) tragen keine Seitennummer → Seitenlink „Vorsatz“ (öffnet die PDF-Seite).
- **Apokryphen:** Buchseite = PDF (`off:0`).
- Seitenbild prüfen: `pdftoppm -r 80 -f <PDF-Seite> -l <PDF-Seite> -png <pdf> /tmp/s`.

| Textdatei | Buchseiten | Inhalt |
|---|---|---|
| c00 | Vorsatz | Tabellen auf den Vorsatzseiten |
| c01 | S. 2–15 | Die sterbende Welt |
| c02 | S. 16–17 | Kalender des Nechrubel |
| c03 | S. 18–25 | Charaktererschaffung, Ausrüstung |
| c04 | S. 26–33 | Die Regeln |
| c05 | S. 34–37 | Mächte, Schriftrollen |
| c06 | S. 38–45 | Optionale Regeln |
| c07 | S. 46–57 | Klassen |
| c08 | S. 58–69 | Kreaturen |
| c09 | S. 70–71 | Ausgestoßene |
| c10 | S. 73–87 | Rotblack Sludge (Abenteuer) |
| c11 | S. 88–89 | Noch mehr Gründe |
| c12 | S. 90 | Regelübersicht |
| a01–a10 | Apokryphen S. 4–67 | Unheilige Wiederkehr, Sternzeichen, Apokryphen, Krankheiten & Heilmittel, Verliese, Monströse Völker, Etablissements, Auftragstafeln, Monster, d86 Jenseitige Beschwörungen |

**Text-Markdown lesen** (erzeugt mit `extract_text.py`):
- `<!-- S. n · PDF m -->` = Seitenmarker · `## …` = Überschrift · `[P]` = pinker Text (Spielwerte) · `[W]` = weiß auf Schwarz · `[G]` = gelb.
- **Die Lesereihenfolge im freien Layout stimmt nicht immer** (Kästen, Tabellen, schräge Texte): **immer am Seitenbild prüfen** und beim Übersetzen korrigieren.
- Weglassen: Inhaltsverzeichnis, Credits, Index, Solo-/Orakel-/Koop-Regeln (falls vorhanden).

---

## 2. Grundregeln (Moritz’ Vorgaben – unbedingt einhalten)

1. **Nur Buchtext, vollständig ins Deutsche übersetzt.** Nichts weglassen, nichts zusammenfassen, nichts erfinden (keine eigenen Tipps, keine Kurzüberblicke). Ausnahme: Bedienelemente (Spieltisch, TP-Kästchen, Moral-Auslöser, Kalender-Zähler, Bogen), die das Spielen erleichtern.
2. **Weglassen:** Inhaltsverzeichnis, Credits, Index, Solo-/Orakel-/Koop-Regeln.
3. **Daten in viele Dateien** (eine Datei je Kapitel-Abschnitt, je Kreaturengruppe, je Klasse, je Tabellengruppe; lange Kapitel auf `-a/-b/-c`). Anzeige für alle Bildschirme angleichen.
4. **Bilder:** nur wo sie im Buch zu genau diesem Eintrag gehören; nicht beschneiden (Hochformat bleibt hochkant, `object-fit:contain`); reine Illustration ohne Titeltext und ohne weißen Rand; **Doppelseiten als ein Bild**; Kreaturenbilder **klein in der Kreaturenkarte**; im Zweifel kein Bild; Dateinamen sprechend (Kapitel-Gegenstand, z. B. `kreatur-goblin.webp`, `rotblack-karte.webp`).
5. **Kopfzeile:** links nur das Logo (Maske, Gelb auf Schwarz bzw. Schwarz auf Gelb; kein Untertitel), rechts i-Knopf, Buch-Symbol, Burger. Keine Emojis. Setting-Auswahl **nur** im Dropdown am Logo, Untersettings (später Cy_Borg …) als eingeklapptes Untermenü, das nach 1,5 s Hover aufgeht.
6. **Werkzeuge nie als Kachel auf der Startseite**, nur in Kopfzeile/Burger. **Vorbereitungsseite zuerst** (Startseite = Register), das Abenteuer erst nach Klick.
7. Reiter nur mit dem, was im laufenden Spiel gebraucht wird (**Spieltisch · Abenteuer · Kreaturen · Tabellen**, rechts der Stift für Notizen); Nachschlage-Seiten im Burger-Menü. Reiter nur mit Namen, keine Zahlen, **keine Breadcrumb-Zeile**.
8. Vorlesekästen/Zitate **ohne** Beschriftung. Seitenangaben „S. 12“ unscheinbar direkt hinter dem Namen. Notizen nur als Stift-Symbol. Keine Erklärtexte („zum Vergrößern antippen“ usw.).
9. **Breite nutzen:** Raster statt langer Spalte; keine leeren Spalten; kein Spaltenfluss mit Hoch-/Runter-Scrollen; zeilenweises Raster mit zugeklappten Karten, die per Klick aufgehen. Alles, was im Buch ein Kasten/Karte ist (Kreaturen, Klassen, Beschwörungen, Etablissements, Krankheiten, Auftragstafeln), wird eine **echte Karte**; Themenkarten standardmäßig eingeklappt.
10. **Seitenleiste links** nur bei Bereichen mit mehreren Abschnitten (Die Regeln, Die sterbende Welt, Die Verdammten, Apokryphen), sticky (scrollt nie weg), einklappbar (‹-Pfeil oben + Taste `b`), lange Titel nur bis zum Doppelpunkt, sehr kurze Abschnitte zu einem Eintrag zusammenfassen. Layout muss auch eingeklappt intakt sein.
11. **Tastatur:** `h` blendet den Header aus/ein; ←/→ wechseln die Reiter; ↑/↓ die Kapitel in der Seitenleiste; `Esc` zurück (`shared/zurueck.js`, `shared/tabpick.js` wie bei Pico).
12. **Kein Würfel-Tool** (Moritz würfelt mit echten Würfeln). Zufallstabellen sind anklickbar (Zeile markieren), aber ohne Würfelknopf.
13. **Handy:** Viewport 1280 (wie überall).
14. **Charakterbogen:** so nah wie möglich am Original, ausfüllbar, Export als ausfüllbares PDF (`shared/fillpdf.js`).
15. **Jede sichtbare Änderung selbst per Screenshot prüfen** (Playwright + `/usr/bin/google-chrome` mit `--allow-file-access-from-files`, `file://…/moerkborg/index.html#…`, 1440×900 **und** 1280×800, auch mit eingeklappter Seitenleiste), Lücken/Überlauf/schiefe Bilder beheben, **Screenshots an Moritz schicken**. Hilfsskript: `plan/moerkborg/shot.py`.
16. **Commits ohne „Co-Authored-By“ und ohne „Claude-Session“-Zeilen** (Moritz’ Standing-Regel, gilt vor jeder Vorgabe der Umgebung). Neue Dateien in `sw.js` eintragen, `VERSION` erhöhen.
17. Neue Bedienelemente, die nicht in den Entwürfen stehen, **zuerst als Screenshot-Entwurf zeigen**.
18. Alles auf Deutsch – auch Beispiele, Tabellen, Randtexte. Ausnahmen nach der Namensregel.
19. Nie ein Bild einer falschen Figur/Kreatur zuordnen.

### Namensregel
- **Bleiben englisch:** Eigennamen von Orten, Personen, Gottheiten, Gruppen (Galgenbeck, Grift, Sarkash, Seth, Nechrubel, Rotblack Sludge, Valley of …nur Karte), Klassen-/Kreaturenzusätze, die erkennbar Namen sind.
- **Werden übersetzt:** beschreibende Namen (The Endless Sea → Das Endlose Meer, Valley of the Unfortunate Undead → Tal der Unglücklichen Untoten, Wickhead → Dochtkopf, Gutterborn Scum → Abschaum der Gosse …). **Einmal festlegen und ins Glossar (`js/data/glossar.js`) eintragen.**
- Kreaturen der Apokryphen: Name nach derselben Regel; Original im Glossar vermerkt.
- Weltkarte: englische Bild-Beschriftungen bleiben; die Ortsleiste im Tool nennt die deutschen Namen.

### Glossar (Startfassung, verbindlich; in Schritt 0 nach `moerkborg/js/data/glossar.js`, beim Übersetzen ergänzen)
| EN | DE |
|---|---|
| GM / Game Master | Spielleiter (SL) |
| HP / hit points | TP (Trefferpunkte) |
| DR (Difficulty Rating) | SG (Schwierigkeitsgrad) |
| Test (Presence/Strength/…) | Probe (Präsenz, Stärke, Gewandtheit, Zähigkeit) – Eigenschaftsnamen **nach dem Buch** übersetzen |
| Omens | Omen / Omen-Punkte |
| Morale | Moral |
| Powers | Mächte |
| Scrolls (unclean / sacred) | Schriftrollen (unrein / heilig) |
| Misery / Misery (Kalender) | Heimsuchung(en) |
| Calendar of Nechrubel | Kalender des Nechrubel |
| Critical hit / Fumble | Krit / Patzer |
| Broken | Gebrochen |
| Wretched / Corpse-Eater … Klassen | Klassennamen **nach dem Buch** festlegen (Fanged Deserter, Gutterborn Scum, Esoteric Hermit, Heretical Priest, Occult Herbmaster, Wretched Royalty, Cursed Skinwalker …): Beschreibende Teile übersetzen, in Schritt 5 einmal festlegen |
| Rotblack Sludge | bleibt |
| Encounter / Reaction | Begegnung / Reaktion |
| Armor tiers | Rüstungsstufen (Stufe 1–3) |
| Silver / Shillings | Silber |
| Cult / Dungeon / Establishment / Job board | Kult / Verlies / Etablissement / Auftragstafel |

Unbekannte Begriffe: sinngemäß übersetzen und ins Glossar eintragen, damit alle Dateien gleich übersetzen.

---

## 3. Design (aus den PDFs gemessen – Details in `DESIGN_KONZEPT.md`)

**Farben (CSS-Variablen in `mb.css`):** Gelb `#ffe800` · Schwarz `#12120d` / `#020200` · Pink `#ff41b4` (nur Spielwerte) · Silber `#bfc1c1` · Creme `#fffae5` · Grau `#7b7d7c`. Apokryphen-Akzente: Gelb `#ffdd00`, Magenta `#ec008c`, Rot `#df0024`, Tinte `#231f20` (nur wo ein Eintrag aus den Apokryphen kommt, sonst Hauptpalette).

**Schriften** (alle frei, Umlaute geprüft, Dateien in `plan/moerkborg/mockups/src/fonts/` → `assets/fonts/mb-*.woff2`):
UnifrakturCook 700 (Titel, Reiter, Raumtitel) · Courier Prime 400/700 (Werte, Tabellen, Kreaturentext) · Alegreya 400/400i/700/800 (Lesetext Welt/Abenteuer) · Jost 400/500/700 (Regeltext, Etiketten) · Anton (große Wörter, Kreaturennamen).

**Grundidee: drei Papiere, ein Signal.**
1. **Schwarz = Spiel** (Spieltisch, Tabellen, Welt-Lesetext). Reiter schwarz, aktiver Reiter gelber Block.
2. **Gelb = Nachschlagen** (Reiterleiste und Seitenleiste gelb, aktiver Reiter schwarz – Umkehrung).
3. **Weiß = Papier** für Abenteuer, Kreaturen, Regel-Inhalt, Charakterbogen.
4. **Pink nur für Spielwerte** (TP, Moral, SG, Schaden, Würfel). Keine andere Akzentfarbe.
5. Harte Kanten, keine Rundungen, keine Schatten. 2–3 px schwarze Linie oben an Kästen; schwarze Etikett-Schilder statt Rahmen.
6. Raster: Seitenrand 24 px, Spaltenabstand 24–36 px, Abstände nur 4·8·12·16·24·32·48. Höchstens drei Inhaltsspalten.

**Bausteine** (Klassen in `mb.css`): `.kopf` (Kopfzeile), `.reiter` / `.reiter.gelb`, `.etikett`, `.s` („S. n“), Würfel-Leiste, Karte (schwarze Linie oben, Eigenname groß, Werte pink), gestrichelter Hinweiskasten, Raumtext (Fraktur-Titel, kursive Stimmung, fette Stichworte, Himmelsrichtungen in Versalien).

---

## 4. Struktur des Tools (Navigation)

```
#start                        Register (Entwurf 1) – erste Seite beim Öffnen
#spiel                        Spieltisch (Entwurf 2): Kalender, Gruppe, Gewalt, Regelspiegel
#abenteuer                    Rotblack Sludge (Entwurf 3) · #abenteuer/<raum>
#kreaturen  ·  #kreaturen/<id>  Kreaturen-Raster (Entwurf 4), Grundbuch + Apokryphen
#tabellen[/<gruppe>]          Tabellen (Entwurf 6): unterwegs | schaetze | namen | …
#nach/<teil>/<abschnitt>      Nachschlagen: welt | regeln | verdammte | apokryphen
#bogen[/<id>]                 Charakterbogen (interaktiv, PDF-Export)
#galerie                      alle Buchbilder
```
**Reiter (oben):** Spieltisch · Abenteuer · Kreaturen · Tabellen · Stift (Notizen).
**Burger:** Register (Start), Die sterbende Welt, Die Regeln, Die Verdammten, Die Apokryphen, Charakterbogen, Suche, Galerie, Bücher/PDF hochladen.

**Die vier Teile des Registers** (römisch I–IV, wie im Buch-Register):
- I **Die sterbende Welt** (c01 S. 2–15 · Kalender c02 S. 16–17)
- II **Die Regeln** (c04 S. 26–33, c06 Optionale Regeln S. 38–45, c12 Regelübersicht S. 90, c05 Mächte/Schriftrollen S. 34–37, a10 Beschwörungen)
- III **Die Verdammten** (c03 Charaktererschaffung/Ausrüstung S. 18–25, c07 Klassen S. 46–57, c09 Ausgestoßene S. 70–71, a02 Sternzeichen, a04 Krankheiten & Heilmittel)
- IV **Die Apokryphen** (a01, a03 Einleitungen; Verliese a05, Monströse Völker a06, Etablissements a07, Auftragstafeln a08 → zusätzlich als Karten unter Tabellen/Unterwegs verlinkt)

---

## 5. Ansichten im Detail

### 5.1 Startseite (Entwurf 1)
Links Cover-Skelett freigestellt in voller Höhe auf Gelb (kein Titeltext im Bild), rechts vier römisch nummerierte Teile mit Fraktur-Titeln und Stichworten (**keine Kacheln**); die Zeile kehrt sich bei Hover auf Gelb um. Unten gelber Balken „Zum Spieltisch“ mit Kalender-Stand (7:7-Siegelstreifen). Klick auf einen Teil öffnet den Nachschlagen-Bereich mit Seitenleiste.

### 5.2 Spieltisch (Entwurf 2) – das Herzstück
- **Kalender-Band oben:** Würfel-Leiste W100…W2 (Buch S. 16), alle 36 Heimsuchungen als W66-Netz + 7:7, Tag-Zähler („Tag n“, + / −). Klick auf eine Heimsuchung markiert sie als eingetreten (grau).
- **Gruppe:** Namen, TP-Kästchen, Omen, Silber (Bedienelement, Zustand im Spielstand `mb_state_v1`).
- **Gewalt:** Kreaturen auf dem Tisch (aus „Auf den Spieltisch“ in der Kreaturenkarte), TP-Kästchen, Moral-Auslöser (Buch: Moral-Probe bei halber TP / erstem Verlust …, exakt nach c04/c08).
- **Regelspiegel (gelb):** die vier Kästen der Regelübersicht S. 90 (Initiative, Nahkampf, Fernkampf, … wie im Buch).

### 5.3 Abenteuer Rotblack Sludge (Entwurf 3)
Buchkarte (`rotblack-karte.webp`) ungeschnitten als Navigation: unsichtbare Klickflächen auf den Räumen (Koordinaten in `js/data/rotblack-karte.js`); darunter **Raumleiste 1–15** (gestrichelt = Räume mit Zufallsbegegnung); Räume zweispaltig zeilenweise wie eine Doppelseite; Tabelle der Zufallsbegegnungen (W4) als Karten. Gesamter Text aus c10.

### 5.4 Kreaturen (Entwurf 4)
Raster ohne Rahmen (schwarze Linie oben), Eigenname groß (Anton), Werte pink (Courier), Bild klein; Klick klappt auf: Bild, Werte, Text, Beute, **„Auf den Spieltisch“** (setzt die Kreatur mit TP-Kästchen in die Gewalt-Spalte). Gruppen: Grundbuch (c08, 12 Kreaturen mit Bild) · Apokryphen (a09 Monster, a06 Monströse Völker) · Ausgestoßene (c09).

### 5.5 Nachschlagen (Entwürfe 5 + 7)
Gelbe Reiterleiste (aktiver Reiter schwarz) + gelbe Seitenleiste; Inhalt weiß. **Die Regeln** (Entwurf 5): Abschnitte aus c04/c06 in Kästen, Gewalt-Seite mit Tabellen. **Die sterbende Welt** (Entwurf 7): Weltkarte ungeschnitten in voller Höhe als Navigation (Hotspots), Ortsleiste nach Land gruppiert (Galgenbeck, Sarkash …), Buchseiten-Nachbarn nebeneinander; Basilisken-Kasten usw. als Karte.

### 5.6 Tabellen (Entwurf 6)
Gruppen als Reiter-Leiste darunter: Unterwegs (Wetter, Fallen und Teufelei, Okkulte Schätze, …), Namen (W8×W6-Gitter), Verliese/Etablissements/Auftragstafeln (a05/a07/a08 als Karten), Krankheiten (a04), d86 Beschwörungen (a10). Zeile mit Zusatztext klappt beim Klick auf.

### 5.7 Charakterbogen (Entwurf 8, vorläufig)
Nach Upload des Original-PDFs: deutscher, ausfüllbarer Nachbau mit Feldern wie im Original, Klassenwahl aus c07, Würfelwerte/Ausrüstung aus c03; Export mit `shared/fillpdf.js`. Bis dahin Felder nach dem Text des Character Sheets (siehe `plan/moerkborg/mockups/src/m8-bogen.html`).

### 5.8 Werkzeuge
Spielstand (Export/Import), Suche über alles (Namen, Tabellen, Kreaturen), Galerie, Bücher (Bookviewer, Seitenlinks öffnen das hochgeladene Original, `off:4` Corebook, `off:0` Apokryphen), Notizen (Stift).

---

## 6. Architektur und Datenformat

**Vorlage ist `pico/`** (bzw. `slugblaster/` nach dessen Fertigstellung): `index.html`, `style.css`, `js/app.js`, `nach.js`, `suche.js`, `bogen.js` nach `moerkborg/` kopieren, Präfixe umbenennen (`PI_` → `MB_`, `pi_state_v1` → `mb_state_v1`, `pi_core` → `mb_core`), Pico-Inhalte entfernen, Design durch `mb.css` ersetzen. `moerkborg/sys.js` + `sysstart` danach nicht mehr verwenden (Bücherliste → `moerkborg/js/data/buecher.js`).

```
moerkborg/index.html            Shell – Kopfzeile, #app, Burger, Suche, Skripte, toolmenu.js, gm_tool_mode_v1="moerkborg"
moerkborg/style.css             Design nach Abschnitt 3 (aus mb.css)
moerkborg/js/app.js             Routing, Start, Reiter, Seitenleiste, Blöcke, Tasten
moerkborg/js/spieltisch.js      Kalender, Gruppe, Gewalt, Regelspiegel
moerkborg/js/abenteuer.js       Rotblack Sludge (Karte, Raumleiste, Räume)
moerkborg/js/kreaturen.js       Raster + Auf den Spieltisch
moerkborg/js/tabellen.js        Tabellen-Seiten
moerkborg/js/nach.js            Nachschlagen (Welt, Regeln, Verdammte, Apokryphen)
moerkborg/js/bogen.js           Charakterbogen + PDF
moerkborg/js/suche.js
moerkborg/js/data/buecher.js, glossar.js, galerie.js
moerkborg/js/data/welt-a.js … welt-c.js (c01), kalender.js (c02 inkl. 36 Heimsuchungen)
                  charakter-a.js/-b.js (c03), regeln-a.js/-b.js (c04), maechte.js (c05), optional-a.js/-b.js (c06),
                  klassen-a.js … -c.js (c07), kreaturen-grund.js (c08), ausgestossene.js (c09),
                  rotblack-a.js … -c.js (c10), gruende.js (c11), regelspiegel.js (c12), vorsatz.js (c00),
                  apo-einleitung.js, sternzeichen.js, krankheiten.js, verliese.js, voelker.js,
                  etablissements-a.js/-b.js, auftragstafeln.js, apo-monster-a.js/-b.js, beschwoerungen-a.js/-b.js,
                  rotblack-karte.js, weltkarte.js (Hotspots)
moerkborg/img/start/, welt/, kreaturen/, abenteuer/, klassen/, apo/
assets/fonts/mb-unifrakturcook.woff2, mb-courierprime-{400,700}.woff2, mb-alegreya-{400,400i,700,800}.woff2, mb-jost-{400,500,700}.woff2, mb-anton.woff2
```

### Text-Blöcke (wie Pico)
`{t:"p",x}`, `{t:"h",x,p}`, `{t:"ul",x:[…]}`, `{t:"box",h,c:"gelb|schwarz|pink|weiss",x|b}`, `{t:"etikett",h,b}`, `{t:"tab",h,cols,rows}` (W-Tabelle, anklickbar), `{t:"vorlese",x}` (ohne Beschriftung), `{t:"cards",x:[…]}`, `{t:"img",src}`, `{t:"grid",n,x:[[Blöcke],…]}`.

### Kreatur
```js
MB_KREATUR.push({ id:"goblin", t:"Goblin", p:60, quelle:"core", tp:"W4+2", moral:7, sg:"…", angriff:"…", schaden:"W6", text:[Blöcke],
  beute:"…", img:"kreaturen/goblin", gruppe:"grundbuch" });
```
### Klasse
```js
MB_KLASSE.push({ id:"…", t:"…", p:46, text:[Blöcke], faehigkeiten:[{t:"…", x:"…"}], start:{…}, tabellen:[{t:"…", rows:[…]}] });
```
### Heimsuchung
```js
MB_HEIMSUCHUNG.push({ id:"1-1", w:"11", t:"…", x:"…" });   // 36 + 7:7
```
### Raum (Rotblack Sludge)
```js
MB_RAUM.push({ id:"6", t:"…", p:78, stimmung:"…", text:[Blöcke], begegnung:{w:4, id:"…"}, himmelsrichtungen:{N:"…", S:"…"} });
```
### Tabelle
```js
MB_TAB.push({ id:"wetter", gruppe:"unterwegs", t:"Wetter", p:…, w:"W12", rows:[["1","…"], …] });
```

---

## 7. Bilder

Skript: `python3 -I plan/moerkborg/extract_images.py <pdf> /tmp/mb <befehl>` – `inventar`, `xref` (Rohbild mit Transparenz), `clip` (Seitenausschnitt in pt), `spread` (Doppelseite als ein Bild), `page`. Inventar: `plan/moerkborg/bilder-inventar-core.tsv` / `-apo.tsv`. Ausgabe `.webp`, sprechend benannt. **Fertige Beispiele:** `plan/moerkborg/mockups/src/img/`.

| Bereich | Quelle | Ziel / Hinweis |
|---|---|---|
| Cover-Skelett | Cover (freigestellt) | `img/start/cover-skelett` – ohne Titeltext |
| Kreaturen Grundbuch | S. 58–69 (je Kreatur ein Bild: Goblin, Abschaum, Berserker, Gespenst, Blutskelett, Nekromant, Troll, Zombie, Puppe, Fratze, Dochtkopf, Lindwurm) | `img/kreaturen/<id>` – klein in der Karte |
| Rotblack-Karte | Abenteuer-Karte S. 73 ff. | `img/abenteuer/rotblack-karte` ungeschnitten, Hotspots für Räume |
| Weltkarte | S. 8 (Seitenzahl wegretuschiert) | `img/welt/weltkarte`, Beschriftungen bleiben englisch |
| Landschaften/Orte | S. 2–15 (z. B. Sarkash-Wald) | `img/welt/<ort>` nur bei eindeutiger Zuordnung |
| Klassen | S. 46–57 | `img/klassen/<id>` nur bei eindeutiger Zuordnung (kleine Titelbilder) |
| Apokryphen-Kreaturen/Monster | S. 42–59 | `img/apo/<id>` nur wenn eindeutig |
| Doppelseiten (Kapitel-Eröffnungen, Landschaften) | `spread` | als **ein** Bild, nur Galerie/Köpfe |

**Fehlende Bilder:** Wenn Einträge kein Buchbild haben (Apokryphen-Monster, Klassen), stehen sie ohne Bild da (Grundregel „im Zweifel kein Bild“). Auf Wunsch schreibt Sonnet fertige **Gemini-Prompts** mit Buchbild-Referenz nach `plan/moerkborg/gemini/` (nur auf Moritz’ Anforderung). Fotos realer Personen nur in die Galerie.
Alle Bilder auch in die Galerie (`js/data/galerie.js`).

---

## 8. Arbeitsschritte (jeweils eine Sitzung: Screenshots, Commit, Push)

0. **Gerüst, Design, Schriften.** Pico-Code nach `moerkborg/` (Abschnitt 6), Schriften → `assets/fonts/`, `mb.css` → `style.css`, Startseite „Register“ (Entwurf 1) mit Cover, Bücher/Bookviewer (`off:4` Core, `off:0` Apokryphen, Vorsatz-Links), Dropdown/Burger/Tasten, `sw.js`, `toolmenu.js` (Untertitel weg), i-Knopf, Glossar-Gerüst.
1. **Spieltisch + Kalender** (Entwurf 2): `spieltisch.js`, Kalender mit 36 Heimsuchungen (c02), Gruppe/Gewalt-Zustand, Regelspiegel (c12), Regeln-Daten c04 (Grundlage Gewalt/Moral).
2. **Die sterbende Welt** (c01, Entwurf 7): Weltkarte mit Hotspots, Ortsleiste, alle Abschnitte/Karten.
3. **Die Regeln** (c04, c05, c06, Entwurf 5) + Mächte/Schriftrollen, Optionale Regeln, Vorsatz-Tabellen (c00).
4. **Kreaturen** (c08, c09, a09, a06; Entwurf 4) mit „Auf den Spieltisch“ + Troll-Name klären.
5. **Die Verdammten:** Charaktererschaffung/Ausrüstung (c03), 9 Klassen (c07) – Klassennamen im Glossar festlegen, Sternzeichen (a02), Krankheiten (a04).
6. **Abenteuer Rotblack Sludge** (c10, c11; Entwurf 3): Karte + Hotspots, 15 Räume, Zufallsbegegnungen.
7. **Tabellen** (Entwurf 6) und Apokryphen-Bereiche: Verliese (a05), Etablissements (a07), Auftragstafeln (a08), d86 Beschwörungen (a10), Unheilige Wiederkehr/Einleitungen (a01, a03).
8. **Charakterbogen** mit PDF-Export (nach Upload des Character-Sheet-PDFs), **Suche über alles**, Galerie, Gesamtcheck (1280-Viewport, keine JS-Fehler, keine Lücken, eingeklappte Seitenleiste) → Plan als „erledigt“ markieren.
9. **Abschlusskontrolle:** alle Seiten per Screenshot, Übersetzungs-Stichproben gegen die Seitenbilder, Glossar-Einheitlichkeit, `sw.js`/`VERSION`, Push.

**Später (eigene Pläne):** weitere Drive-Bücher (Abenteuer → Reiter „Abenteuer“; Kulte, Book of Misery), Hacks (Cy_Borg …) als Untersettings im Dropdown.

Für jede Sitzung bittet Sonnet Moritz, das Corebook-/Apokryphen-PDF (und für Schritt 8 das Character-Sheet-PDF) hochzuladen. Der englische Text liegt schon im Repo.

---

## 9. Startauftrag für jede Sonnet-Sitzung (zum Kopieren)

> Lies `plan/MOERKBORG_PLAN.md` und `plan/moerkborg/DESIGN_KONZEPT.md` im Repo einmoritz-spec/Spielleitertool und setze **Schritt N** um. Halte dich an Abschnitt 2 (Grundregeln, Namensregel, Glossar) und Abschnitt 3 (Design) und baue genau nach den Entwürfen in `plan/moerkborg/mockups/`. Der englische Buchtext liegt in `quellen/moerkborg/text/` (Corebook: Buchseite = PDF − 4; Apokryphen: Buchseite = PDF), das PDF hänge ich an. Prüfe die Lesereihenfolge am Seitenbild, übersetze vollständig ins Deutsche, nichts weglassen, nichts erfinden. Prüfe jede Ansicht per Screenshot (1440×900 und 1280×800, auch mit eingeklappter Seitenleiste), behebe Lücken/Überlauf, schick mir die Screenshots, committe ohne Co-Authored-By/Claude-Session-Zeilen und pushe.
