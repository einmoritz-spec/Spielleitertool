# TALES FROM THE LOOP – Spielleiter-Tafel (Bauplan)

Stand: 22. Nov. 2026. Planung der **Oberfläche** (Aufbau, Navigation, Design). **Inhalte kommen später** – dieser Plan legt fest, wo sie hinkommen.
Heute ist `tftl/` nur eine Bücher-Startseite (`shared/sysstart.js` + `tftl/sys.js`, Header-Bild `tftl/img/hero.webp`, Logo `assets/logos/tales-from-the-loop.webp`).

Entwürfe (Screenshots 1440×900) liegen in `plan/tftl/mockups/` – **die Umsetzung muss diesen Entwürfen genau entsprechen**. HTML/CSS-Quellen in `plan/tftl/mockups/src/` (`tftl.css` = Farb-/Schrift-System, darf Ausgangspunkt für `tftl/style.css` sein). Blaue Kästen mit roter Nummer sind nur Erklärungen im Entwurf. Texte in den Entwürfen sind Platzhalter – im Tool steht immer der vollständige, übersetzte Buchtext.

| Nr. | Datei | Ansicht |
|---|---|---|
| 1 | `m1-start-vorbereitung.jpg` | Startseite = Vorbereitung (Welt, Spiel) + Block „Mysterien“ + Schalter „Unser Loop“ |
| 2 | `m2-mysterien-uebersicht.jpg` | Mysterien-Übersicht: ein Block je Buch, Kampagnen mit Jahreszeit-Fähnchen |
| 3 | `m3-mysterium-leitstand.jpg` | Mysterium-Leitstand (Beispiel „Sommerferien und Killervögel“ › Lösung › Ort 2) |
| 4 | `m4-kids.jpg` | Kids der Gruppe (anklickbare Bögen) + Beziehungen, Versteck, Würfelprobe |
| 5 | `m5-nachschlagen-typen.jpg` | Nachschlagen › Kids › Typen (Kachelraster mit den S/W-Figuren) |
| 6 | `m6-karte.jpg` | Loop-Karte (Original-Karte, Pins, Ortskarte rechts, Loop-Schalter) |
| 7 | `m7-flood-dropdown.jpg` | Untersetting „Things from the Flood“ (eigenes Farbthema) + Setting-Dropdown |

---

## 1. Quellen

PDFs (von Moritz hochgeladen, nicht im Repo). Kürzel = Präfix der Bilddateien.

| Kürzel | Buch | Sprache | PDF-Seiten | Bookviewer-Id (sys.js) |
|---|---|---|---|---|
| `core` | Tales from the Loop – Corebook | EN | 197 | `tftl_core` |
| `flood` | Things from the Flood – Core Rulebook | EN | 217 | `tftl_flood` |
| `es` | The Electric State RPG | EN | 236 | `tftl_es` |
| `a_friends` | Our Friends the Machines and Other Mysteries | EN | 105 | `tftl_a1` |
| `a_grow` | They Grow Up So Fast | EN | 92 | `tftl_a2` |
| `a_snow` | Snow Day Mystery | EN | 19 | `tftl_a3` |
| `a_outoftime` | Out of Time | EN | 133 | `tftl_a4` |
| `z_de80` | Deutschland in den 80ern | **DE** | 121 | `tftl_z1` |
| Material | Character Sheet (+ PF = ausfüllbar), Flood Character Sheet, Player Aid (2 S.), Handouts „The Recycled Boy“ | EN | je 1–2 | neu anlegen |

- **Bilder:** alle Illustrationen sind extrahiert (Doppelseiten bereits zusammengesetzt, Texturen aussortiert) und liegen als ZIPs in `quellen/bilder-zips/TftL_*.zip` (Core, Things_from_the_Flood, Electric_State, Our_Friends_the_Machines, They_Grow_Up_So_Fast, Out_of_Time, Snow_Day, Deutschland_80er, Material). Inventar mit allen 2211 Bildern: `plan/tftl/bilder-inventar.tsv` (Spalte `art`: `doppelseite`, `querseite`, `maske`, `textur` = Papier/Masken, nicht verwenden). Skript: `plan/tftl/extract_images.py`.
- **Doppelseiten:** Die Kapitel-/Mysterium-Eröffnungsbilder sind im PDF auf zwei Seiten verteilt (linke Hälfte ragt über den rechten Rand von Seite N, rechte beginnt am linken Rand von N+1). Das Skript setzt sie zu **einem** Bild `…_S<N>-<N+1>_<nr>_dbl_….webp` zusammen und schneidet den Beschnitt an der Naht ab. Die Naht sieht aus wie im gedruckten Buch (Bund) – so lassen. Querformat-Seiten (Core S. 3 = Inselkarte, ES S. 2–3 = Karte von Pacifica) sind im PDF schon eine Doppelseite.
- **Karten und Grundrisse** sind im PDF **geschichtet** (Rasterbild + Vektor-Beschriftung + Papiertextur) oder ganz Vektor (Grundrisse auf Millimeterpapier, z. B. Core S. 120 „Mats Tingblad's House“, Ablaufdiagramme mit Pfeilen). Diese **nicht aus den Einzelbildern** bauen, sondern den Seitenausschnitt rendern: `page.get_pixmap(dpi=200, clip=Rect(...))` – das gelbe Kapitelband am Seitenrand (x > ~550 pt bei rechten Seiten, x < ~60 pt bei linken) **nicht** mit ausschneiden. Beispiele in `plan/tftl/mockups/src/img/karte-*.webp`.
- **Seitenzählung** (PDF-Seite = Buchseite + Versatz, aus den Fußzeilen-Seitenzahlen gemessen): `core` **+3** (Kap. 4 „The Kids“ PDF 51 = S. 48) · `flood` +1 · `a_friends` +1 · `a_grow` +1 · `a_snow` +1 · `a_outoftime` **+5** · `z_de80` **+5** · `es` **+4**. Im Bookviewer als `off` eintragen. Alle „S.“-Angaben im Tool sind Buchseiten.
- **Logos** (von Moritz geliefert, 22. Nov. 2026, freigestellt in `assets/logos/`): `tales-from-the-loop.webp` (orange) · `things-from-the-flood.webp` (waagerecht, schwarz auf transparent – für Kopfzeile und Dropdown per Maske/Filter einfärben, auf Weinrot weiß) · `things-from-the-flood-stack.webp` (dreizeilig, weiß, klein – nur für Kacheln/i-Pop-up) · `electric-state.webp` (dreizeilig, weiß, **ohne** „Roleplaying Game“-Zeile = Kopfzeile/Dropdown) · `electric-state-rpg.webp` (mit Zeile, für Cover-/Startkacheln).

---

## 2. Grundregeln (Moritz’ Vorgaben)

1. Nur Buchtext, vollständig ins Deutsche übersetzt; nichts erfinden (keine eigenen Tipps/Kurzüberblicke). Ausnahme: Bedienelemente (Leisten, Zustände, Würfelprobe, Countdown-Abhaken). `z_de80` ist schon deutsch → wörtlich übernehmen.
2. Daten in viele Dateien (eine Datei je Mysterium, je Kapitel, je Typ-Block; lange Kapitel `-a/-b`).
3. Bilder nur dort, wo sie im Buch zu genau diesem Inhalt gehören; nicht beschneiden (Hochformat bleibt hochkant), breite Eröffnungsbilder als Kopfband/Kachelbild, Buchbilder ohne Bildunterschrift.
4. Kopfzeile: links nur das Logo (weiß auf Orange `#f08a1c`) mit Setting-Dropdown, rechts i-Knopf, Buch-Symbol (Auswahlmenü, weil mehrere PDFs), Burger. Keine Untertitel/Emojis.
5. Erst Vorbereitungsseite, Mysterien erst per Klick (Entwurf 1). Tab-Leiste oben nur fürs laufende Spiel: **Vorbereitung · Mysterien · Kids · Karte**. Nachschlage-Seiten im Burger-Menü.
6. Keine Breadcrumb-Zeile; Tabs/Unterkapitel oben über volle Breite, Seitenleiste darunter, einklappbar (‹ und Taste `b`), sticky; Taste `h` blendet die Kopfzeile aus; Seitenleiste nur bei Bereichen mit mehreren Abschnitten; lange Titel in der Seitenleiste nur bis zum Doppelpunkt.
7. Keine Spaltenflüsse, keine leeren Spalten, Breite nutzen (Raster, zeilenweise, zugeklappte Karten). Lesetexte breit und gut lesbar.
8. Klick-zum-Erledigen (Countdown-Schritte, Hinweise, Ablauf-Knoten, Orte): Klick irgendwo = erledigt, grau, **ohne Kästchen, ohne Durchstreichen**.
9. Notizen nur als Stift-Symbol rechts in der Tab-Zeile des Mysteriums. Seitenangaben „S. 12“ klein hinter dem Namen. Vorlesekästen ohne Beschriftung.
10. Viewport 1280 auf dem Handy. Jede Änderung per Screenshot prüfen (1440×900 und 1280×800, auch mit eingeklappter Seitenleiste).
11. Commits ohne „Co-Authored-By“/„Claude-Session“. Neue Dateien in `sw.js`, `VERSION` erhöhen.
12. Neue Bedienelemente, die nicht in den Entwürfen stehen, zuerst als Screenshot-Entwurf zeigen.

---

## 3. Design (aus dem Corebook gemessen)

- **Farben:** Kopfzeile `#f08a1c` (wie bisher); Überschriften-Orange `#ee7113` (AvantGarde Bold im Buch); Kapitelband gelb-orange `#fbba1c` (senkrechtes Band „CHAPTER 0X“ am Seitenrand → im Tool als 6-px-Rand links an Kacheln/Kids-Karten und als Jahreszeit-Fähnchen); Text `#1d1d1b`; Seiten weiß, Fläche `#f7f4ee`; dunkle Blöcke `#1f2a33` (Abendhimmel der Stålenhag-Bilder).
- **Schriften** (Buch → Ersatz, freie Fonts in `plan/tftl/mockups/src/`, nach `assets/fonts/` kopieren):
  - AvantGarde Bold (Überschriften, VERSALIEN) → **Jost 700/500** (liegt schon im Repo)
  - Sabon (Fließtext) → **EB Garamond 400/600 + Italic**
  - Trixie / DaisyWheel (Schreibmaschine auf Karteikarten: Countdown, Inspiration, Zeitleisten) → **Special Elite**
  - LemonTuesday (Handschrift) → **Caveat**
- **Bausteine:**
  - **Karteikarte** (Schreibmaschinenschrift auf Papier, leichter Schatten) für alles, was im Buch eine getippte Karte ist: Countdown, „Inspiration for Mysteries“, Zeitleisten, Mixtape-Kurz-Mysterien. Papier: `img/papier.webp` (aus Core S. 12).
  - **Ärger-Karte**: weiß, orange Oberkante, Fertigkeit (Attribut) + Schwierigkeit als Marken, Erfolg/Misserfolg-Text.
  - **Hinweis-Karte**: gelber Rand links, Klick = gefunden (grau).
  - **NSC-Namen orange** im Fließtext (im Buch fett-orange), anklickbar → kleine NSC-Karte.
  - **Loop-Kästen**: Im Buch stehen schwedische und US-Fassungen nebeneinander („Summer on the Mälaren Islands“ / „Summer in Boulder City“, Namen als „Mona [Mary]“). Im Tool: nur die Fassung des gewählten Loops offen, die andere als gestrichelte Zeile „Boulder City-Fassung ▸“. Namen in eckigen Klammern je nach Loop austauschen.
  - Riksenergi-/Kongsstrom-Emblem nur als kleines Schmuckelement (z. B. im i-Pop-up), nicht in der Kopfzeile.

---

## 4. Struktur (Navigation)

```
#start                      Vorbereitung (Entwurf 1) – erste Seite beim Öffnen
#mysterien                  Mysterien-Übersicht (Entwurf 2)
#m/<id>/<phase>[/<abschn>]  Mysterium-Leitstand (Entwurf 3)
#kids                       Kids der Gruppe (Entwurf 4)
#karte[/<loop>]             Loop-Karte (Entwurf 6)
#nach/<bereich>[/<abschn>]  Nachschlagen (Entwurf 5): welt | loops | kids | aerger | mysterium | landschaft | schirm
#bogen                      interaktiver Charakterbogen (ausfüllbares PDF, s. Abschnitt 8)
#galerie                    alle Buchbilder
```

**Burger-Menü:** Nachschlagen (Welt, Loops, Kids, Ärger, Mysterium, Mystery-Landschaft), Spielleiterschirm, Charakterbogen, Würfel, Galerie, Einstellungen. **Buch-Symbol:** Auswahl aller PDFs des aktiven Settings (Core, Abenteuerbände, Zusatzband, Material). **i-Knopf:** kurzes Pop-up „Worum geht’s“ (Setting + Spielprinzip, aus Kap. 1 „Principles of the Loop“).

### 4.1 Startseite = Vorbereitung (Entwurf 1)
- Kopfband `tftl/img/hero.webp` (170 px), unten rechts der Schalter **„Unser Loop“: Mälarinseln · Boulder City · Taunus** (gespeichert in localStorage; steuert Karte, Loop-Kästen, Namen in Klammern). „Norfolk Broads“ erscheint nur, wenn „They Grow Up So Fast“ gespielt wird (als vierter Knopf auf der Karte, Entwurf 6).
- „Die Welt“: Willkommen im Loop (Kap. 1), Der schwedische Loop (Kap. 2), Der US-Loop (Kap. 3), Deutschland in den 80ern (Zusatzband Kap. 1–2).
- „Das Spiel“: Die Kids (Kap. 4), Ärger (Kap. 5), Das Mysterium (Kap. 6), Mystery-Landschaft (Kap. 7). Kachelbild = Kapitel-Eröffnungsbild (Doppelseite).
- Chips: Charakterbogen · Spielleiterschirm · Würfel · Loop-Karte · Galerie.
- Rechts dunkler Block „Mysterien“: „Weiterspielen“ (zuletzt geöffnetes Mysterium + Abschnitt), Bildstreifen, Kampagnen-Liste, Knopf **Mysterium starten** → `#mysterien`.

### 4.2 Mysterien-Übersicht (Entwurf 2)
Ein Block je Buch, 7er-Raster, Karte = Eröffnungsbild + Titel (Jost, Versalien) + „Kap./S.“. Kampagnen in Spielreihenfolge mit Fähnchen (Jahreszeit bzw. 1–3). Werkzeug-/Kurzkapitel als Karteikarten (Schreibmaschine). Zuletzt gespielt = orange Rahmen; abgeschlossen (Knopf im Tab „Nachspiel“) = grau mit ✓.

| Block | Einträge (Reihenfolge) |
|---|---|
| Die vier Jahreszeiten des verrückten Wissenschaftlers (Core Kap. 8–12) | Hintergrund der Kampagne · Sommer: Sommerferien und Killervögel · Herbst: Erwachsenen-Anziehung · Winter: Kreaturen aus der Kreidezeit · Frühling: Ich, Wagner · Winter (Alternative): **Snow Day** (Einzelheft, ursprünglich als Alternative zur Kreidezeit geschrieben) |
| Our Friends the Machines | Unsere Freunde, die Maschinen · Horrorfilm-Chaos · Die Mumie im Nebel · *Mixtape der Mysterien* · *Maschinen-Baupläne* · *Heimatstadt-Hack* |
| They Grow Up So Fast (Kampagne, Norfolk Broads) | Hintergrund (Broads, Kreatur, Regis & Maff, Kids erschaffen) · Ostereiersuche · Das Beste von dem, was sein könnte · Das letzte, schönste Lächeln des Jahres · Man kann nie genug … |
| Out of Time (Trilogie) | Out of Time (Trilogie, Zeitparadoxon) · 1 Die Arche der Tiere · 2 Sommerlager (1969) · 3 Der Sturm im Stundenglas · *Geheime Orte* · *Die Mystery-Maschine* · *Mix-CD der Mysterien* |
| Deutschland in den 80ern | Neue Deutsche Welle · Im Bann der Bärchis · Der Riss im Schleier · Wenn die Sirene schweigt |

Titel-Übersetzungen sind Vorschläge → im Glossar festlegen. Deutsche Titel aus `z_de80` unverändert.

### 4.3 Mysterium-Leitstand (Entwurf 3) – Schablone für alle Mysterien
Alle Mysterien im Buch folgen demselben Aufbau (Kap. 6: sechs Phasen). Darum **eine** Schablone, Inhalt je Mysterium in eigener Datei.

- **Tab-Leiste** (volle Breite): kleines Eröffnungsbild + Name in Orange, dann die Phasen-Tabs **Wahrheit · Kids einführen · Mysterium einführen · Lösung · Showdown · Nachspiel · NSC**, Stift-Symbol rechts. Zuordnung der Buchüberschriften: The Truth of the Mystery (+ Jahreszeit auf den Inseln / in Boulder City, Hintergrund, Teens/Dinosaurier usw.) → Wahrheit; Introducing the Kids → Kids einführen; Introducing the Mystery → Mysterium einführen; Solving the Mystery + Location 1…n + Events + The Tilt → Lösung; Showdown/Confrontation + After the Showdown → Showdown; Aftermath + Change → Nachspiel; NPCs and Creatures → NSC.
- **Seitenleiste** (nur in Phasen mit mehreren Abschnitten, v. a. „Lösung“): Überblick · Ort 1 … Ort n · Ereignisse; darunter „Immer zur Hand“: Countdown · Hinweise (Zähler) · Handouts. Besuchte Orte grau.
- **Lösung › Überblick / Kopf jedes Orts:** Reihe aus **Mystery-Karte** (Seitenausschnitt aus dem Buch, Pins je Ort, anklickbar), **Ablauf** (das Pfeil-Diagramm aus dem Buch, z. B. Core S. 120, **sauber neu gesetzt**, nicht die Buchgrafik: Raster aus Knoten – oben „Mysterium einführen“, Mitte die Orte als Kästen mit derselben Nummer wie der Karten-Pin, unten „Showdown“ in Vollorange; Verbindungen als rechtwinklige SVG-Linien mit runden Ecken und Pfeilspitzen, in echten Pixel-Koordinaten (nicht gestreckt). Zustände: erledigt = grau, aktuell = orange Rahmen auf hellem Orange, bereits gegangener Weg orange. Abzweigungen/Querverbindungen aus dem Buch-Diagramm (z. B. Taubennest → Bibliothek) als zusätzliche Knotenzeile, nie als schräge Linien) und **Countdown** (Karteikarte, Schritte anklickbar). Auf schmalen Bildschirmen wird die Reihe zur wischbaren Zeile.
- **Ort:** Überschrift orange + „S.“, Loop-Kasten-Zeile, Buchtext flach über die Breite; rechts schmale Spalte mit Ärger-Karten und Hinweis-Karten, die zu diesem Ort gehören (wenn der Text länger ist als die Spalte, fließt er darunter über die volle Breite – keine leere Spalte). Grundrisse/Ortspläne als Bild neben dem Text, Klick = groß.
- **NSC-Tab:** Raster aus NSC-/Kreaturen-/Maschinen-Karten (Bild nur, wenn im Buch eins zur Figur gehört), Werte bei Kreaturen/Maschinen als Karte im Buch-Stil.
- **Nachspiel:** Text + Knopf „Mysterium abgeschlossen“ (→ grau in der Übersicht) + Erfahrungsfragen.
- **Kampagnen-Hintergründe** (z. B. „Die vier Jahreszeiten“, „Out of Time“, „Norfolk Broads“) nutzen dieselbe Seite ohne Phasen-Tabs: Tabs = Kapitelabschnitte des Buchs.
- **Werkzeug-Kapitel:** *Mixtape/Mix-CD der Mysterien* = Raster aus Karteikarten (je Kurz-Mysterium eine Karte, Klick → offen); *Mystery-Maschine* = Zufallstabellen mit Würfelknopf; *Geheime Orte* = Ortskarten-Raster; *Maschinen-Baupläne* = Maschinenkarten; *Heimatstadt-Hack* = Lesekapitel.

### 4.4 Kids (Entwurf 4)
- Je Kid eine Karte (4er-Raster): Typ-Figur (S/W-Zeichnung des Typs), Name, Typ · Alter, Lieblingslied; Attribute Körper/Technik/Herz/Verstand; **Glück** (Punkte anklickbar, Höchstwert = 15 − Alter); **Zustände** Verärgert · Verängstigt · Erschöpft · Verletzt · Gebrochen (anklickbar, „Gebrochen“ gestrichelt); **Stolz** frei/eingesetzt; Problem · Antrieb · Anker; Gegenstand. Klick auf den Namen → interaktiver Bogen (#bogen).
- Darunter: Beziehungen (kleiner Graph, Beschriftung in Caveat), Versteck + Erfahrung, Würfelprobe (Pool wird aus Kid + Fertigkeit berechnet; Regeln nach Kap. 5 – genaue Formel beim Bau aus dem Buch übernehmen).
- Knöpfe: + Kid · Bogen einlesen (PDF) · Leerer Bogen. Spielstand in localStorage (`tftl_kids_v1`).

### 4.5 Karte (Entwurf 6)
Original-Karte des gewählten Loops (Mälarinseln: Core S. 2–3 Querseite; Boulder City: Core S. 43; Taunus: Zusatzband, Karte suchen; Norfolk Broads: They Grow Up So Fast), zoombar. Pins in drei Farben: Mystery-Landschaft (Kap. 7), Orte aus Kap. 2/3, Orte aus Mysterien. Rechts Ortskarte (Bild nur, wenn im Buch dazugehörig) + Liste aller Orte.

### 4.6 Nachschlagen (Entwurf 5)
Tab-Leiste: **Welt · Loops · Kids · Ärger · Mysterium · Mystery-Landschaft · Spielleiterschirm**. Seiten mit Kachelraster (Typen, Mystery-Landschaft) ohne Seitenleiste, Lesekapitel mit Baum links (Kapitel → Unterkapitel aus den PDF-Lesezeichen), Inhalt flach und offen. Alles, was im Buch ein Kasten ist (Beispiel-Dialoge, Karteikarten, Tabellen, Fertigkeiten), als echte Karte.

| Tab | Inhalt (Core, Buchseiten) |
|---|---|
| Welt | Kap. 1 Willkommen im Loop (S. 6–13: Geschichten, Wie funktioniert Rollenspiel, Würfeln, Prinzipien des Loop) |
| Loops | Kap. 2 Der schwedische Loop (S. 14–33: 80er, Mälarinseln, Svartsjölandet, Munsö, Adelsö, Riksenergi, Der Loop, zivile/militärische Technik, Magnetrin-Flug) · Kap. 3 Der US-Loop (S. 34–47) · Zusatzband „Deutschland in den 80ern“ Kap. 1–2 (Ein gespaltenes Land, Der Taunus-Loop) · Norfolk Broads (They Grow Up So Fast Kap. 2) |
| Kids | Kap. 4 (S. 48–63): Typen (Kachelraster, 8 Typen mit Figur, Schlüsselfertigkeiten, Gegenstand-/Problem-/Antrieb-/Stolz-/Beziehungs-/Anker-Vorschlägen, Namen) + Alter, Attribute, Glück, Fertigkeiten, Gegenstände, Problem, Antrieb, Stolz, Beziehungen, Anker, Zustände, Erfahrung, Name, Beschreibung, Lieblingslied, Versteck, Fragen |
| Ärger | Kap. 5 (S. 64–75): Zustände, Würfelprobe, Gegenstände und Stolz, Glück, Fast Unmögliches, Fragen beantworten, Effekte kaufen, NSC, Misserfolge, Probe forcieren, Einander helfen, Kid gegen Kid, Erweiterter Ärger, Die Fertigkeiten (12 Karten) |
| Mysterium | Kap. 6 (S. 76–97): Wahrheit, Mysterium und Alltag, Einzel- vs. Gruppenszenen, die sechs Phasen, Stimmung, NSC, Gegenstände, größere Mysterien und Kampagnen |
| Mystery-Landschaft | Kap. 7 (S. 98–111): Schulbibliothek, Traumladen, Naturschutzclub, Kühltürme, Polizeiwache Stenhamra, NAAB – als Ortskarten (dieselben wie auf der Karte) |
| Spielleiterschirm | Player Aid (2 Querseiten) nachgebaut: Kernprinzipien, Ärger, Erweiterter Ärger, Zustände, Erfahrung |

---

## 5. Untersettings: Things from the Flood und The Electric State

- **Setting-Dropdown** (`toolmenu.js`, Gruppe „Year Zero Engine“): „Tales from the Loop“ wird Übersetting mit Untermenü (`sub2`, erst nach 1,5 s Hover bzw. langem Druck sichtbar, Animation) – Einträge **Tales from the Loop · Things from the Flood · The Electric State** (Entwurf 7). Logos statt Schrift, sobald vorhanden.
- **Things from the Flood** (`tftl/#flood/…` oder eigener Ordner `flood/` – beim Bau entscheiden, Daten in `tftl/js/data/flood/`): **gleiche Oberfläche** wie TftL, eigenes Farbthema aus dem Buch: Weinrot `#8f2c48` (Überschriften/Band), Blaugrau-Fläche, dunkle Blöcke. Teens statt Kids (Bogen zusätzlich mit Scham und Narben; Fertigkeiten-Liste prüfen). Vorbereitung: Leben nach der Flut, Der Loop in einer neuen Zeit (Schweden 90er, Krafta), Die Hoover-Damm-Katastrophe (US), Die Teens, Ärger, Das Mysterium (inkl. SL-Techniken, Horror), Mystery-Landschaft (Piratenschiff der Radiopiraten, Sunshine Farm, Little Doe Trailerpark, Wissenschaft der Liebe, Serbischer Schachclub), Die Propheten von Pandora. Mysterien: Aus Fleisch und Stahl · Die Hässlichkeit · Reisender (als Kampagne „Die Propheten von Pandora“).
- **The Electric State** – anderes Spiel (Reise statt Mysterien). Eigene Tab-Leiste: **Vorbereitung · Reise · Reisende · Karte**. Reise-Leitstand für „Into the Dust“ (Kap. 7: Ziel & Route, persönliche Ziele & Bedrohungen, Begegnungen, drei Halte: Der Engel in der Maschine, Mord am Straßenrand, Drohnenschiff-Friedhof) mit Routenleiste über die Karte von Pacifica (Querseite S. 2–3). Nachschlagen: Pacifica, Reisende & Archetypen, Kampf & Neuronik, Die Reise, Bedrohungen. Farbthema am PDF ablesen (Graublau/Teal). Der Solo-Teil „The Lone Traveler“ (Kap. 8) **weglassen** (Solo-Regeln raus). **Vor dem Bau eigene Entwürfe zeigen.**
- „The Electric State – Alpha, zweite Fassung“ (`tftl_esa` in `sys.js`) ist nicht hochgeladen → Eintrag bleibt nur im Buch-Menü.

---

## 6. Dateien (Vorschlag)

```
tftl/index.html            App-Hülle (ersetzt die reine Bücher-Startseite)
tftl/style.css             aus plan/tftl/mockups/src/tftl.css
tftl/js/app.js             Router, Kopfzeile, Tabs, Seitenleiste, Tasten b/h
tftl/js/start.js           Vorbereitung (Entwurf 1)
tftl/js/mysterien.js       Übersicht (Entwurf 2)
tftl/js/leitstand.js       Mysterium-Schablone (Entwurf 3)
tftl/js/kids.js            Kids + Bogen (Entwurf 4)
tftl/js/karte.js           Karte (Entwurf 6)
tftl/js/nach.js            Nachschlagen (Entwurf 5)
tftl/js/data/buecher.js    PDFs, Seitenversatz
tftl/js/data/glossar.js    EN → DE
tftl/js/data/mysterien.js  Liste für die Übersicht (Blöcke, Reihenfolge, Bilder)
tftl/js/data/m/<id>.js     je Mysterium: phasen, orte, countdown, ablauf, hinweise, aerger, nsc, loopKaesten
tftl/js/data/k/<kap>.js    je Nachschlage-Kapitel
tftl/js/data/typen.js      8 Typen
tftl/js/data/orte.js       Karten-Pins je Loop
tftl/js/data/flood/…       dasselbe für Things from the Flood
tftl/img/…                 Bilder nach Bereich benannt (z. B. m-killerbirds.webp, typ-bookworm.webp, karte-maelaren.webp)
```

Bilder sofort sprechend benennen (Bereich/Mysterium), wie in `plan/tftl/mockups/src/img/`.

---

## 7. Bauschritte

1. Grundgerüst: `tftl/index.html`, `style.css`, `app.js` mit Kopfzeile, Tabs, Routen, leeren Seiten; Bookviewer-Einträge + Seitenversatz; Dropdown-Untermenü (Flood, Electric State). Screenshot-Abgleich mit den Entwürfen.
2. Startseite (Entwurf 1) inkl. „Unser Loop“, i-Pop-up, Burger, Galerie (alle Bilder aus den ZIPs).
3. Mysterien-Übersicht (Entwurf 2) mit Bildern und Spielstand.
4. Leitstand-Schablone (Entwurf 3) mit **einem** vollständig eingebauten Mysterium (Vorschlag: Sommerferien und Killervögel) – Moritz prüft, dann die übrigen.
5. Kids + interaktiver Bogen + PDF-Ein-/Ausgabe (Entwurf 4, Abschnitt 8).
6. Karte (Entwurf 6) für Mälarinseln und Boulder City, danach Taunus/Broads.
7. Nachschlagen (Entwurf 5), Kapitel für Kapitel.
8. Restliche Mysterien (je Buch ein Durchgang).
9. Things from the Flood.
10. The Electric State (vorher Entwürfe).

## 8. Charakterbogen
Klick auf „Charakterbogen“ öffnet eine interaktive, ausfüllbare Ansicht, so nah wie möglich am Original-Bogen (`Character Sheet PF` ist bereits ein ausfüllbares PDF – dessen Feldnamen für Ausgabe **und** Einlesen nutzen, `shared/fillpdf.js`). Export als ausfüllbares PDF (bleibt bearbeitbar), Einlesen eines ausgefüllten Bogens legt das Kid an. Flood: eigener Bogen (`Things from the Flood Character Sheet`).

## 9. Entscheidungen (Moritz, 22. Nov. 2026)
- Alle Entwürfe freigegeben; Ablauf-Diagramm in Entwurf 3 neu gesetzt (sauber, rechtwinklig).
- **The Electric State bleibt Untersetting** von Tales from the Loop (neben Things from the Flood).
- **Snow Day** steht in der Kampagne „Die vier Jahreszeiten“ als **Winter (Alternative)** zur „Kreidezeit“.
- Logos geliefert (s. Abschnitt 1).
