# THE SPIRE – Spielleiter-Tafel (Bauplan)

Stand: 22. Nov. 2026. Arbeitsanweisung für die Umsetzung (gedacht für Sonnet, in mehreren Sitzungen).
Nichts aus diesem Plan ist bisher gebaut. Heute ist `spire/` nur eine Bücher-Startseite (`shared/sysstart.js` + `spire/sys.js`, Titelbild `spire/img/hero.webp`, Cover in `spire/img/cover/`, Logo `assets/logos/the-spire.webp`, weiß).
Ziel: ein vollständiges Setting wie **Pico** (`pico/`) bzw. **The Wildsea** (`wildsea/`) – eigene Shell, eigenes Design nach dem PDF, alle Inhalte der drei Bücher auf Deutsch.

**Wichtig zum Verständnis:** Das Grundregelwerk *The City Must Fall* enthält **kein fertiges Abenteuer**. Die spielbaren Inhalte sind:
1. **Die Stadt** – 8 Domänen mit 29 Distrikten/Fraktionen (S. 81–172) = Sandbox mit Orten, Figuren, Gegner-Werteblöcken.
2. **Snuff Out the Sun** – das Abenteuer aus dem **Quickstart** (QS S. 18–24) + 6 vorgefertigte Figuren (QS S. 25–36).
3. Die Spielleitungs-Werkzeuge: **Stress & Fallout der Zelle** (die Spielleitung führt laut Buch S. 12 den Stress der Spielerfiguren!), Gegner mit Widerstand, Würfel, W10-Zufallstabellen, Revolution (3 Stufen, S. 175 ff.), Freiheit/Unterschlupf/Erwerbungen/Beats aus dem *Magister's Guide*.

Weitere Bücher (Sourcebooks, *Kings of Silver*, *Eidolon Sky*, *Blood and Dust*, *Book of Masks* …, siehe `spire/sys.js`) liegen in Moritz' Drive und kommen später – die Struktur muss sie aufnehmen können (Abschnitt 9).

Entwürfe (Screenshots 1440×900) liegen in `plan/spire/mockups/` – **die Umsetzung muss diesen Entwürfen genau entsprechen**. HTML/CSS-Quellen in `plan/spire/mockups/src/` (`spire.css` = fertiges Farb-/Schrift-System, darf Ausgangspunkt für `spire/style.css` sein). Blaue Kästen mit roter Nummer sind nur Erklärungen.

| Nr. | Datei | Ansicht |
|---|---|---|
| 1 | `m1-start.jpg` | Startseite = Vorbereitung (Nachschlage-Bereiche) + Block „Losschlagen“ (Zelle, Stadt, Gegner, Zufall, Abenteuer, Revolutions-Stufe) |
| 2 | `m2-stadt.jpg` | Stadt: Stadtkarte (S. 0) mit Klickflächen + 8 Domänen mit ihren Distrikten |
| 3 | `m3-distrikt.jpg` | Distrikt-Seite (Religion › Karmesinrote Wacht): Distrikt-Reiter, Baum, Buchtext, Bild schwebt rechts, Gegner-Karten |
| 4 | `m4-zelle.jpg` | Zelle: Stress/Freiplätze je Widerstand, Gesamtstress, Fallout-Wurf mit Buch-Liste, Bindungen, Auffrischen |
| 5 | `m5-gegner.jpg` | Gegner-Browser: Begegnungsleiste, kompakte Karten, Detail-Werteblock rechts |
| 6 | `m6-abenteuer.jpg` | Abenteuer „Snuff Out the Sun“ · Tab „Der Aufstieg“ (Countdown, Tagesphasen, Figuren der Phase) |
| 7 | `m7-klassen.jpg` | Klassen-Übersicht: 10 Klassen mit ganzseitiger Illustration + 5 Klassen aus dem Magister's Guide |
| 8 | `m8-klasse.jpg` | Klassenseite (Azurite): Bild, Kernmerkmale, Bindungen, Ausrüstung, Kernfähigkeiten, Fortschritte als Kartenraster |
| 9 | `m9-zufall-wuerfel.jpg` | Zufall: W10-Tabellen aus Anhang 2 + Würfel-Panel (Pool, Schwierigkeit, Ergebnis, Stresswürfel) |

Die Texte in den Entwürfen sind teils gekürzt (…), bei manchen Gegnern stehen Platzhalter „·“ – im Tool steht immer der **vollständige** Buchtext und echte Werte.

---

## 1. Quellen

| Was | Wo |
|---|---|
| *The City Must Fall* (Grundregelwerk, EN, 226 PDF-Seiten, US-Letter) | Moritz lädt hoch: `The_Spire___Regeln___The_City_Must_Fall_EN.pdf` → Buch-ID `sp_cmf` |
| *Magister's Guide* (GM Guide, EN, 56 S., A4) | `The_Spire___Regeln___GM_Guide_EN.pdf` → `sp_gm` |
| *Spire Quickstart* (EN, 37 S., A4) | `The_Spire___Regeln___Quickstart_EN.pdf` → `sp_qs` |
| Text je Kapitel als Markdown (mit Seitenmarken) | `quellen/spire/text/cmf/*.md`, `…/gm/*.md`, `…/qs/*.md` |
| Bild-Inventar (97 Illustrationen) | `plan/spire/bilder-inventar.tsv` |
| Gegner-Werteblöcke (43, mit Seite, Schwierigkeit, Widerstand roh) | `plan/spire/gegner-liste.tsv` |
| Skripte | `plan/spire/extract_text.py`, `extract_images.py`, `build_fonts.py` |
| Fertige Web-Schriften (aus den PDFs gebaut) | `plan/spire/mockups/src/fonts/` → nach `assets/fonts/` kopieren |
| Deko aus dem PDF (Riss-Band, Fingerabdruck-Wirbel, schwarzer Reißkasten) | `plan/spire/mockups/src/img/riss-kopf.webp`, `wirbel.webp`, `kasten-schwarz.png` |
| Stadtkarte (S. 0, ganzseitig) | `plan/spire/mockups/src/img/karte.webp` (150 dpi) |

**Seitenzählung – WICHTIG (Seitenangaben im Tool sind immer gedruckte Buchseiten):**
- *The City Must Fall*: **PDF-Seite = Buchseite + 5** → Bookviewer `off:5`. Die Stadtkarte ist „S. 0“ (PDF 5).
- *Magister's Guide*: **PDF-Seite = Buchseite** → `off:0`. Im Tool als „MG S. 12“.
- *Quickstart*: **PDF-Seite = Buchseite + 1** → `off:1`. Im Tool als „QS S. 20“.
- Die Marken `<!-- S. n (PDF m) -->` in den Markdown-Dateien sind bereits Buchseiten (PDF-Seite steht dahinter). Seitenbild zum Prüfen: `pdftoppm -r 80 -f <PDF> -l <PDF> -png`.

**Markdown lesen:**
- Überschriften (Schrift Geared Slab) → `#`/`##`/`###`/`####` nach Größe; `{farbe=#194d71}` = blau (Kapitel/Bereich), `{farbe=#981a3f}` = weinrot (Abschnitt), `#3c3b57` = Schiefer (MG/QS).
- Zeilen mit `> ` = **weißer Text auf schwarzem Kasten** (Core) bzw. violettem Kasten (MG/QS) → als Kasten übernehmen (`schwarz` bzw. `violett`).
- Kursiv `*…*` = Flavour-Satz einer Fähigkeit (nach dem Namen) oder Beispiel; fett `**…**` = Feldname/Fähigkeitsname.
- **Kopfzeilen ignorieren:** `## Magister's Guide {farbe=#3c0052}`, `## New Systems: …`, `## Additional material`, `## Essays …`, `## Spire Quickstart {farbe=#84444e}`, `## Snuff Out the Sun {farbe=#84444e}` und einzelne Seitenzahl-Zeilen sind Seitenköpfe.
- Zweispaltiger Satz: Die Lesereihenfolge kann springen, **Tabellen in Anhang 2 (W10-Tabellen) sind blockweise vertauscht** (erst alle Überschriften einer Seite, dann alle Einträge) → Zuordnung immer am Seitenbild prüfen. Ebenso die Vorgefertigten Figuren (QS S. 25–36: Kästchen der Freiplätze/Fertigkeiten sind Wingdings-Zeichen → am Seitenbild ablesen).
- Silbentrennungen am Zeilenende („Reli-\ngion“) beim Übersetzen zusammenziehen.

---

## 2. Grundregeln (Moritz' Vorgaben – unbedingt einhalten)

1. **Nur Buchtext, vollständig ins Deutsche übersetzt.** Nichts weglassen, nichts zusammenfassen, nichts erfinden (keine eigenen Tipps, Kurzüberblicke, Untertitel). Ausnahme: Bedienelemente (Zelle, Würfel, Begegnung, Countdown, Zufallswürfel), die das Spielen erleichtern. Kurztexte auf Kacheln = **Anfang des ersten Buchsatzes** mit „…“.
2. **Weglassen:** Inhaltsverzeichnisse, Index (S. 213–214, die Suche ersetzt ihn), „Thanks to“ (S. 215), Impressum/Credits, Kickstarter-Listen, Werbeseiten (MG S. 56: Strata/Shadow Operations/Heart). Alle Solo-/Oracle-/Koop-Hinweise (falls vorhanden). Der leere Charakterbogen (S. 212) wird nicht nachgebaut, sondern als Knopf „Charakterbogen“ (öffnet PDF-Seite) – der interaktive Bogen kommt als allerletzter Schritt (Abschnitt 9).
3. **Daten in viele Dateien** (eine Datei pro Distrikt-Domäne, pro Klasse, pro Kapitel; lange Kapitel auf `-a/-b/-c`).
4. **Bilder:** nur dort, wo sie im Buch zu genau diesem Eintrag gehören; nicht beschneiden (`object-fit:contain`, Hochformat bleibt hochkant). Kachelköpfe dürfen einen Ausschnitt zeigen, die Großansicht ist immer ungeschnitten. Gegner-Bilder klein in die Gegner-Karte. Doppelseiten als **ein** Bild. Klick aufs Bild = Großansicht.
5. Kopfzeile: links nur das Logo (weiß auf `--nacht`), rechts i-Knopf, Buch-Symbol (Auswahl der 3 Bücher), Burger. Keine Untertitel, keine Emojis. Kopfzeile/Leisten nie durchsichtig.
6. Vorlesekästen/Zitate ohne Beschriftung. Seitenangaben „S. 12“ / „MG S. 12“ / „QS S. 12“, klein und grau hinter dem Namen, Klick öffnet die Buchseite. Notizen nur als Stift-Symbol rechts in der Tab-Zeile. Tabs nur mit Namen, ohne Zahlen. Keine Erklärtexte.
7. **Keine Spaltenflüsse**, keine leeren Spalten, Breite nutzen (Raster, zeilenweise). Seitenleiste/Baum links nur bei Bereichen mit mehreren Abschnitten, einklappbar (‹-Knopf, Taste `b`), sticky (nur rechts scrollt), lange Titel nur bis zum Doppelpunkt. Taste `h` blendet die Kopfzeile aus. Haupt-Tabs oben über die volle Breite, Seitenleiste beginnt darunter. Seiten, die mit einem Kachelraster beginnen (Klassen, Götter, Domänen), haben keine Seitenleiste. Layout auch bei eingeklappter Leiste prüfen.
8. **Klick-zum-Erledigen** (Countdown-Tage, Tagesphasen, Hinweise): Klick irgendwo = erledigt/grau, kein Kästchen, keine Linie.
9. **Handy:** Viewport 1280 (wie überall), Baum wird zu wischbarer Zeile oben.
10. **Jede sichtbare Änderung selbst per Screenshot prüfen** (Playwright + `/usr/bin/google-chrome`, Start mit `--allow-file-access-from-files`, sonst greifen CSS-Masken bei `file://` nicht), Viewport 1440×900 **und** 1280×800, Lücken/Überlauf/schiefe Bilder beheben, Screenshots an Moritz schicken.
11. **Commits ohne** „Co-Authored-By“- und „Claude-Session“-Zeilen. Push mit `git -c push.negotiate=true push`.
12. Neue Dateien in `sw.js` eintragen, `VERSION` erhöhen.
13. Neue Bedienelemente, die nicht in den Entwürfen stehen, **zuerst als Screenshot-Entwurf zeigen**.
14. Alles auf Deutsch – auch Tabellen, Namen-Listen nur wo beschreibend (siehe Namensregel).

### Namensregel
- **Bleiben englisch:** Klassennamen (Azurite, Bound, Carrion-Priest, Firebrand, Idol, Knight, Lajhan, Masked, Midwife, Vermissian Sage, Blood-Witch, Gutter Cleric, Inksmith, Mortician Executioner, Shadow Agent), Eigennamen von Personen (Sansel, Derwent Cooper, Brother Hellion …), Eigennamen von Orten ohne beschreibenden Sinn (Spire, Amaranth, Derelictus, Perch, Red Row, Ivory Row → „Ivory Row“, Aliquam, Ys, Destera, Charnel, Damnou, Limyé, Lombre, Lekolé, Azur), Völker als Lehnwort: **Aelfir, Drow, Gnolle**, das **Vermissian**, „Fallout“, „Spireblack“. Abenteuertitel „Snuff Out the Sun“ bleibt.
- **Werden übersetzt:** beschreibende Namen (The Cathedral of Our Glorious Lady → Die Kathedrale unserer Glorreichen Herrin, The Ministry of Our Hidden Mistress → Das Ministerium unserer Verborgenen Herrin, The Sect of Our Crimson Vigil → Die Sekte unserer Karmesinroten Wacht, Pilgrim's Walk → Pilgerweg, The Solar Basilica → Die Sonnenbasilika, New Heaven → Neuer Himmel, The North Docks → Die Norddocks, Sky Docks → Himmelsdocks, Blue Port → Der Blaue Hafen, Silver Quarter → Silberviertel, Garden District → Gartendistrikt, The Works → Die Werke, The Heart → Das Herz, Guild of Morticians → Gilde der Leichenbestatter, The Necropolis → Die Nekropole, City Guard → Stadtwache, Allied Defence HQ → Hauptquartier der Alliierten Verteidigung, The Council → Der Rat, Plaza of a Thousand Sunrises → Platz der Tausend Sonnenaufgänge, The Sun's Dominion → Die Sonnenherrschaft).
- **Drow- und Aelfir-Satznamen** (Crimson-Clouds-The-Sunrise, Dreams-Spill-Outward, Wisdom-Grace-The-Unwise, Strides-Across-Dawn) werden **übersetzt** (Karmesinwolken-der-Sonnenaufgang …), beim ersten Vorkommen in einer Ansicht steht der Originalname klein grau dahinter – im Buch sind es sprechende Namen.
- Einmal gewählte Übersetzungen ins Glossar eintragen.

### Glossar (verbindlich, in `spire/js/data/glossar.js` führen)
| EN | DE |
|---|---|
| GM / Magister | Spielleitung / Magister (Titel des Ministeriums-Vorgesetzten) |
| cell / the Ministry | Zelle / das Ministerium |
| durance | Dienstzeit |
| refresh | Auffrischen |
| resistance: Blood, Mind, Silver, Shadow, Reputation, Armour | Widerstand: Blut, Verstand, Silber, Schatten, Ruf, Rüstung |
| stress / total stress / free slots / additional resistance slots | Stress / Gesamtstress / Freiplätze / zusätzliche Widerstandsplätze |
| fallout: minor / moderate / severe | Fallout: leicht / mittel / schwer |
| bond (individual / street / city / organisation level) / bond fallout | Bindung (Einzel- / Straßen- / Stadt- / Organisationsebene) / Bindungs-Fallout |
| skills: Compel, Deceive, Fight, Fix, Investigate, Pursue, Resist, Sneak, Steal | Überzeugen, Täuschen, Kämpfen, Reparieren/Heilen („Fix“ → **Flicken**), Ermitteln, Verfolgen, Widerstehen, Schleichen, Stehlen |
| domains: Academia, Commerce, Crime, High Society, Low Society, Occult, Order, Religion, Technology | Akademie, Handel, Verbrechen, Hohe Gesellschaft, Niedere Gesellschaft, Okkultes, Ordnung, Religion, Technik |
| knack / mastery | Kniff / Meisterschaft |
| core traits / core abilities / advances (low / medium / high) / extra advances | Kernmerkmale / Kernfähigkeiten / Fortschritte (niedrig / mittel / hoch) / Extra-Fortschritte |
| [Divine] / [Occult] / [Quest] | [Göttlich] / [Okkult] / [Queste] |
| once per session / situation | einmal pro Sitzung / Situation |
| core mechanic: critical failure, failure, success at a cost, success, critical success | Kritischer Fehlschlag, Fehlschlag, Erfolg mit Preis, Erfolg, Kritischer Erfolg |
| difficulty / dice pool / partial stress | Schwierigkeit / Würfelpool / Teilstress |
| NPC: Names, Descriptors, Difficulty, Resistance, Special, Equipment | NSC: Namen, Beschreibung, Schwierigkeit, Widerstand, Besonderes, Ausrüstung |
| weapon tags: Accurate, Assault, Bloodbound, Bound, Brutal, Camouflaged, Concealable, Conduit, Dangerous, Defensive, Devastating, Double-barrelled, Extreme Range, Heavy, Implacable, Masterpiece, One-shot, Ongoing Dx, Parrying, Piercing, Point-blank, Ranged, Reload, Scarring, Spread Dx, Stunning, Surprising, Tiring, Unreliable | Präzise, Sturm, Blutgebunden, Gebunden, Brutal, Getarnt, Verbergbar, Leiter, Gefährlich, Defensiv, Verheerend, Doppelläufig, Extreme Reichweite, Schwer, Unerbittlich, Meisterstück, Einweg, Anhaltend Wx, Parierend, Durchschlagend, Kernschuss, Fernkampf, Nachladen, Vernarbend, Streuung Wx, Betäubend, Überraschend, Ermüdend, Unzuverlässig |
| D3/D6/D8/D10 | W3/W6/W8/W10 |
| the Revolution: Gathering Storm / Strike / Aftermath | Die Revolution: Aufziehender Sturm / Der Schlag / Die Folgen |
| Liberty / Advancement Beats / Acquisitions / Safehouse (upgrades, fallout) | Freiheit / Fortschritts-Beats / Erwerbungen / Unterschlupf (Ausbauten, Fallout) |
| Useful Elements / Adversaries (MG) | Nützliche Elemente / Gegenspieler |
| props / antagonists (QS) | Requisiten / Antagonisten |
| hatchling, aelfir, drow, gnoll, gutterkin, spireblack, sten | Brütling, Aelfir, Drow, Gnoll, Gutterkin (bleibt), Spireblack (bleibt), Sten (Währung, bleibt) |

Unbekannte Begriffe sinngemäß übersetzen und ins Glossar eintragen.

---

## 3. Design (aus dem PDF gemessen)

**Grundlook = Grundregelwerk:** kühles, blassblaues Papier mit weißem Pinselrand, großer blauer Fingerabdruck-Wirbel im Hintergrund, Kapitelanfänge mit dunkelblauem „Riss“-Band oben (geborstene Decke), schwarze Kästen mit **gerissenen Rändern** und weißer Schrift, Abschnittsüberschriften weinrot mit einer feinen weinroten Linie, die bis an den linken Rand läuft. Illustrationen: flächige Duotone-Grafiken (Petrol, Orange, Rot, Neon-Grün). *Magister's Guide* und *Quickstart* (2. Auflage) sind heller mit violetten Kästen – deren Inhalte bekommen im Tool die **violette Kastenfarbe als Akzent** (Entwurf 8, „MG-Zusatz“), sonst gleiches Design.

**Schriften (Original aus den PDFs, mit `plan/spire/build_fonts.py` zu Web-Schriften gebaut, fehlende deutsche Zeichen ergänzt):**
- Titel: **Geared Slab Bold** → `spire-geared-700.woff2` (Teilsets aus allen drei PDFs zusammengelegt; Ä Ö Ü, –, —, ' und ! ergänzt). Immer `text-transform:uppercase` (ß wird zu SS). Fehlt ein Zeichen (z. B. `&`), springt **Oswald 600** (`assets/fonts/oswald-latin-600-normal.woff2`) ein – in Titeln besser „und“ schreiben.
- Fließtext: **Plantin** Regular / Italic / Bold → `spire-plantin-400.woff2`, `-400i`, `-700` (Umlaute in Kursiv/Fett zusammengesetzt). Ersatz: Source Serif 4 (`assets/fonts/`).
- Größen wie im Buch: Fließtext 16–17 px, Abschnittstitel 25 px, Bereichstitel 46–58 px.

**Farben** (exakt aus dem PDF): `--papier #dbe3ef` · `--papier2 #e8edf5` (Karten) · `--wirbel #c6d4e6` · `--blau #194d71` (Kapitel/Bereich) · `--wein #981a3f` (Abschnitt, Stress) · `--nacht #0d1a27` (Kopfzeile, Riss-Band, dunkle Blöcke) · `--tinte #12120c` · `--grau #5d6878` · `--schiefer #3c3b57` und `--violett #3c0052` (MG/QS) · `--gold #d9a521` (Treffer/Auswahl).

**Bausteine** (alle in `mockups/src/spire.css`):
- `h1.titel` (Geared, blau, groß) · `h2.ab` (weinrot + Linie nach links) · `h3.un` (blau, klein).
- `.schwarz` = schwarzer Kasten mit Reißrand (CSS-Maske `kasten-schwarz.png`), weiße Schrift – für alle `> `-Kästen des Core.
- `.violett` = MG/QS-Kasten („Nützliche Elemente“, „Default Stats“ …).
- `.karte` / `.f` = helle Karte (Fähigkeit, Eintrag, Ort) · `.gegner` = Werteblock mit schwarzem Kopf.
- `.zw` = Widerstands-/Stress-Kästchen (leer weiß, markiert weinrot) · `.chip` = Tag/Verweis (blau), `.chip.w` = Schadenswürfel (weinrot), `.chip.s` = dunkel.
- Hintergrund: Papierfarbe + `wirbel.webp` (absolut, rechts, ohne Klickfläche), auf Kapitelanfängen im Nachschlagen das Riss-Band `riss-kopf.webp` oben.
- Kopfzeile `--nacht`, Logo weiß 40 px hoch.

---

## 4. Struktur des Tools (Navigation)

```
#start                         Vorbereitung + Losschlagen (Entwurf 1) – erste Seite beim Öffnen
#stadt                         Stadtkarte + 8 Domänen (Entwurf 2)
#stadt/<domaene>/<distrikt>[/<anker>]   Distrikt-Seite (Entwurf 3)
#zelle                         Zelle: Spielerfiguren, gemeinsame Widerstände (Entwurf 4)
#gegner[/<id>]                 Gegner-Browser + Begegnung (Entwurf 5)
#zufall[/<gruppe>]             W10-Tabellen (Entwurf 9)
#abenteuer/snuff/<tab>         Snuff Out the Sun (Entwurf 6)
#nach/<bereich>[/<id>]         Nachschlagen: welt | regeln | klassen | extra | fertigkeiten | ausruestung | bindungen | spielleitung | mg | goetter | anhang | kurz
#schirm                        Spielleiterschirm (Regeln S. 9–16 + Fallout-Liste, Overlay)
#galerie                       alle Buchbilder
```

**Haupt-Tabs (nur fürs laufende Spiel):** Stadt · Zelle · Gegner · Zufall – auf allen Spielseiten gleich. Im Abenteuer ersetzt die Abenteuer-Tab-Leiste diese (Auftrag · Figuren · Orte · Der Aufstieg · Gegner · Spielerfiguren). Nachschlagen-Bereiche haben eigene Tab-Leisten (Entwurf 7/8: Klassen · Extra-Fortschritte · Fertigkeiten · Ausrüstung · Bindungen). Alles Nachschlagen ist zusätzlich im **Burger-Menü**.

**Burger-Menü:** Vorbereitung (Startseite) · Spire in Kürze · Die Welt · Regeln · Klassen · Spielleitung · Magister's Guide · Neue Götter · Anhänge · — · Spielleiterschirm (`s`) · Würfel (`w`) · Suche (`/`) · Galerie · Charakterbogen · Bücher.

**Buch-Knopf** (nur Symbol): Auswahl *The City Must Fall* / *Magister's Guide* / *Quickstart* (grauer Zusatz klein darunter: „Grundregelwerk“, „Spielleiterbuch“, „Schnellstart“). **i-Knopf:** `shared/info/spire.js` anlegen (Setting + wie das Spiel funktioniert, nur Buchinhalt, kurz) und `spire` in `MAP` von `shared/sysinfo.js` ergänzen.

### Startseite (Entwurf 1)
Kopfband `spire/img/hero.webp` (250 px, Ausschnitt `center 38%`), Titel „Spire“, darunter der erste Satz aus „Die Welt von Spire“ (S. 3). Links „Vorbereitung“ mit 8 Kacheln (Buchbild im Kachelkopf, Titel, Unterkapitel, Seite): Die Welt (S. 1–8) · Regeln (S. 9–16, Kampf S. 77–80) · Klassen (S. 25–76) · Fertigkeiten und Ausrüstung (S. 17–24) · Spire in Kürze (QS S. 1–17) · Spielleitung (S. 173–182) · Magister's Guide (MG S. 4–55) · Anhänge (S. 183–211). Darunter Chips: Charakterbogen · Spielleiterschirm · Würfel · Fallout-Liste · Galerie. Rechts der dunkle Block **„Losschlagen“**: Zelle · Stadt · Gegner · Zufall (zuletzt geöffnet gold umrandet), Abenteuer-Kachel „Snuff Out the Sun“ (Bild QS S. 18, erster Satz des Auftrags), Platzhalter weiterer Abenteuer (grau gestrichelt, nur Titel aus `sys.js`, sobald Bücher da sind → echte Kacheln), **Revolutions-Stufe** (3 Schalter, gespeichert; Klick auf den Titel öffnet „Die Revolution“ S. 175).

### Stadt (Entwurf 2)
- Links die **Stadtkarte S. 0 ungeschnitten** mit unsichtbaren Klickflächen (SVG-Polygone in Bildkoordinaten 1275×1650) je Kartenbezirk; Hover zeigt Fläche + Pop-up mit deutschem Namen, Domäne, Seite und dem **Kartentext** (z. B. „Götterstraße. Schreine. Sekten. Vulgata. Paladine.“). Kartenbezirke ohne eigenes Kapitel (Middle City, Algae Farms, Leech Canals, Wild Zones, Saint Perdita's Circle, Undercity) zeigen nur den übersetzten Kartentext; wo die Karte Orte aus einem Kapitel nennt (Undercity: Red Row, Derelictus; Saint Perdita's Circle: Norddocks), werden diese als Chips verlinkt.
- Rechts 8 Domänen-Karten (Bild, Name, Seite, Distrikt-Liste). Hover auf einen Distrikt hebt ihn auf der Karte hervor.

| Domäne | S. | Distrikte / Fraktionen (Buchseite) | Datei |
|---|---|---|---|
| Akademie | 81 | Wohlwollender Orden der Weisheit und Entdeckung 81 · Brazacott Technisches Institut 83 · Hochelfische Universität der Göttlichen Magie 85 · Akademie von Gywnn-Enforr 87 | `stadt-akademie.js` |
| Handel | 89 | Die Norddocks 89 · Die Himmelsdocks 93 · Der Blaue Hafen 97 | `stadt-handel.js` |
| Verbrechen | 101 | Red Row 101 | `stadt-verbrechen.js` |
| Hohe Gesellschaft | 107 | Amaranth 107 · Ivory Row 110 · Das Silberviertel 113 | `stadt-hoch.js` |
| Niedere Gesellschaft | 117 | Derelictus 117 · Perch 119 · Der Gartendistrikt 121 · Die Werke 124 | `stadt-nieder.js` |
| Okkultes | 129 | Das Vermissian 129 · Das Herz 133 · Gilde der Leichenbestatter 137 · Die Nekropole 140 · Die Hebammen 144 | `stadt-okkult-a.js`, `-b.js` |
| Ordnung | 147 | Die Stadtwache 147 · Hauptquartier der Alliierten Verteidigung 149 · Der Rat 151 | `stadt-ordnung.js` |
| Religion | 155 | Kathedrale 155 · Ministerium 157 · Karmesinrote Wacht 161 · Pilgerweg 163 · Sonnenbasilika 165 · Neuer Himmel 169 | `stadt-religion-a.js`, `-b.js` |

### Distrikt-Seite (Entwurf 3)
Haupt-Tab „Stadt“ aktiv; darunter schmale **zweite Reiterzeile** mit den Distrikten der Domäne (Domänenname grau vorneweg, Klick darauf → Domänen-Einleitung). Links Baum: Abschnitte des Distrikts (die blauen `##`-Überschriften), Gruppe „Gegner“ (Werteblöcke), Gruppe „Verweise“ (Querverweise aus dem Text wie „siehe S. 75“, Klassen, andere Distrikte). Rechts: Titel + Seite, Buchtext über die volle Breite, die zugehörige **ganzseitige Illustration schwebt rechts** (330 px, ungeschnitten), `> `-Kästen als `.schwarz`, Werteblöcke als `.gegner`-Karten im 2er-Raster (Widerstand anklickbar, Varianten wie „3 / 5“ als Umschalter, Tags als Chips mit Tooltip = Tag-Regel aus S. 20–21, Knopf „+ Begegnung“).

### Zelle (Entwurf 4) – Herzstück
- **Spielerfiguren** als Karten im Raster (4 je Zeile, bei 5–6 Figuren zweite Zeile): Kopf mit Porträt (vorgefertigte Figur → Bild aus dem QS, sonst Klassenbild, sonst Initialen), Name, Klasse, Dienstzeit. Tabelle wie im Bogen (S. 212): je Widerstand **5 Freiplätze** (aktivierte grau umrandet; markierte zählen **nicht** zum Gesamtstress, S. 12) + **10 Stresskästchen** (Klick markiert/löscht), Zeile Rüstung (Freiplätze für Blut). **Gesamtstress** groß; Knopf **„Fallout?“** würfelt W10 – liegt der Wurf unter dem Gesamtstress, öffnet rechts das Fallout-Panel: Stufe nach Schwellen (2–4 leicht, 5–8 mittel, 9+ schwer, S. 12), Widerstand mit dem meisten Stress vorausgewählt, Liste der passenden Fallouts **mit Buchtext** (S. 13–15), Option „2 × eine Stufe niedriger“, „Übernehmen“ setzt Chip und zieht 3/5/7 Stress ab. Schalter **„Weniger tödlich“** (Optionalregel S. 13, je Widerstand einzeln). Fallout-Chips anklickbar (Text) und per Rechtsklick entfernbar.
- Bindungen je Figur mit Stress-Kästchen nach Ebene; Knopf **„Sitzungsende: Bindungen prüfen“** würfelt Bindungs-Fallout für alle Bindungen mit Stress in dieser Sitzung (S. 15 und S. 24 / QS S. 10).
- Auffrischen (Text) unten auf der Karte. Klick auf den Namen → Figur bearbeiten (Klasse aus Liste → übernimmt Widerstands-Boni, Fertigkeiten, Domänen, Kernfähigkeiten; Fortschritte ankreuzen).
- **„Vorgefertigte Figur übernehmen“**: die 6 QS-Figuren als fertige Datensätze.
- Unter den Figuren: **Gemeinsames** – Freiheit (MG S. 5, gemeinsamer Widerstand der Gruppe, gleiche Kästchen + Fallout-Wurf mit Freiheits-Fallout), Unterschlupf (MG S. 13: Ausbauten ankreuzen, Unterschlupf-Fallout), Fortschritts-Beats (MG S. 8, Liste je Figur abhakbar). Diese drei sind **optional** (Schalter, Standard aus) – Entwurf dafür zuerst zeigen (Regel 13).

### Gegner (Entwurf 5)
Begegnungsleiste oben (dunkel): Gegner der laufenden Szene mit Widerstands-Kästchen, Gruppen „×3“, „+ Gegner“. Links Baum: nach Domäne / Magister's Guide (Gegenspieler der Klassen) / Snuff Out the Sun / Regeln (Standardwerte für NSC QS S. 22, Tags S. 20, Kampf S. 77). Mitte: kompakte Karten im 2er-Raster (Name, Schwierigkeit, Widerstand, Waffen-Tags, Fundort); rechts sticky der vollständige Werteblock (Entwurf 3-Stil) mit Bild nur, wenn im Buch genau dieser Gegner abgebildet ist. Quelle aller Werteblöcke: `plan/spire/gegner-liste.tsv` (43 Zeilen; „TAGS“ S. 21 ist ein Fehltreffer, „THE-SUNRISE“ = Schwester Karmesinwolken mit Werten). Benannte NSC mit Werten gehören ebenfalls hinein.

### Zufall (Entwurf 9)
Alle W10-Tabellen aus Anhang 2 (S. 200–204, ~20 Tabellen) als Karten im 2er-Raster, gruppiert im Baum (Gruppen nach Buchseiten). Würfelknopf im Kopf, Treffer gold, „Alle würfeln“. Dazu Anhang 4 (Ziegen), Anhang 5 (Arkologien) und weitere Listen, wenn sie im Buch würfelbar sind.

### Würfel (Overlay, Taste `w`)
Pool = 1 + Fertigkeit + Domäne + Meisterschaft − Schwierigkeit (0–2); bei Pool ≤ 0 ein Würfel und Abstufung je fehlendem Würfel (S. 10); höchster Würfel zählt, jede 10 = +1 Stress beim Gegner; Schalter „nur Schaden abwehren“ (Teilstress S. 9: bei 6–7 eine Würfelgröße weniger); Ergebnistabelle S. 9 mit Treffer; Stresswürfel W3/W6/W8/W10.

### Abenteuer: Snuff Out the Sun (Entwurf 6)
Tabs **Auftrag** (Running…, Missionsparameter als Vorlesekasten, Die Sonnenherrschaft) · **Figuren** (Philydia, Erzbischof, Bischof Feierlich-erhebt-die-Gefallenen, Schwester Karmesinwolken – als Figurenkarten mit Porträt nur wo im Buch, sonst Initialen; Werte als Gegner-Karte) · **Orte** (Platz der Tausend Sonnenaufgänge, Basilika-Büros, Jubelhaus-Wohnungen, Katakomben, Caliastro-Boulevard – je Ort Text, **Requisiten** als Liste, **Antagonisten** als Gegner-Karte) · **Der Aufstieg** (Countdown „in fünf Tagen“ aus dem Auftrag, Tagesphasen-Leiste Vor der Dämmerung → Nachmittag/Abend, voller Phasentext, Figuren der Phase rechts, Kasten „Das Ende“ + „Das Spiel fortsetzen“) · **Gegner** (die 3 Antagonisten-Blöcke + Standardwerte QS S. 22) · **Spielerfiguren** (6 vorgefertigte Figuren im Bogenlayout mit Porträt, Knopf „In die Zelle übernehmen“). Stift-Symbol für Notizen je Tab.

### Nachschlagen
| Bereich | Inhalt (Buchseiten) | Darstellung |
|---|---|---|
| Spire in Kürze | QS S. 1–17 (Was ist Spire, Begriffe, Kernmechanik, Stress, Fallout, Fertigkeiten, Domänen, Ausrüstung, Tags, Bindungen, Tipps) | Baum + Text, Kästen violett |
| Die Welt | S. 1–8 (Willkommen, Konventionen, Was ist Spire, Spielleitung, Spielen; Die Welt von Spire, Das Land Destera, Völker, Ministerium …) | Baum + Text, Kapitelbilder |
| Regeln | S. 9–16 (Kernmechanik bis Bindungs-Fallout), S. 77–80 Kampf | Baum; Fallout-Einträge als Karten im 3er-Raster (Name, [Widerstand], Text), gefiltert nach Stufe |
| Fertigkeiten | S. 17–18 (9 Fertigkeiten, 9 Domänen, Kniffe + Beispiel-Kniffe) | Karten |
| Ausrüstung | S. 19–22 (Ausrüstung, Kaufen/Verkaufen, Waffen- und Rüstungstabelle, alle Tags) | Tabellen + Tag-Karten |
| Bindungen | S. 23–24 | Text |
| Klassen | S. 25–28 (Charaktere, Dienstzeit, Fortschritt, Mehrklassen) + 10 Klassen S. 29–68 + MG-Zusatz je Klasse (MG S. 17–48) | Übersicht = Entwurf 7, Klasse = Entwurf 8 (2. Reiterzeile: Klasse · MG-Zusatz). Die 5 MG-Klassen (Blood-Witch, Gutter Cleric, Inksmith, Mortician Executioner, Shadow Agent) haben im MG **nur Zusatzmaterial** (neue Fähigkeiten, Ausrüstung, Gegenspieler, Fallout) – Seite trotzdem anlegen, Grundklasse folgt mit den Sourcebooks |
| Extra-Fortschritte | S. 69–76 (11 Wege: Stadtwache, Erwählte der Hungrigen Tiefe, Rekrutiert, Die Gläubigen von König Zähne, Greymanor-Ermittler, Hellionit, Glückspriester des Stolz, Minister, Sonnenanhänger, Vigilit, Die Vyskant) | wie Klassen-Fortschritte: je Weg Text + Kartenraster niedrig/mittel/hoch |
| Spielleitung | S. 173–182 (Grundlagen, Allgemeine Tipps, Thema und Ton, **Die Revolution** in 3 Stufen (S. 175), Schwierigkeit, Ein guter Schurke + Beispielschurke, Andere Fraktionen, Die Stadt zu eurer machen, Magie, Das Ministerium, Schurkerei) | Baum + Text; „Schwierigkeitsstufen“ als Tabelle |
| Magister's Guide | MG S. 4–16 (Einleitung, Freiheit, Fortschritts-Beats, Erwerbungen, Unterschlupf), MG S. 49–55 (Essays: Nur das Nötigste, Vorbereitung 0/20/60/120 Min., One-Shot, Wann würfeln, Kreative Fertigkeiten) | Baum + Text, violette Kästen; Unterschlupf-Ausbauten als Karten |
| Neue Götter | S. 183–199 (Anhang 1: Einleitung + 8 Götter – Ishtuk, Luxulyan, Apash, Carabys, The Many, Miah, Garrack, The Masked God – je mit Text und Fortschritten/Fallout; je Gott ein ganzseitiges Bild S184–S198, Zuordnung prüfen) | Übersicht als Kachelraster (Name in Geared, Domäne/erster Satz), Klick → Gott mit Text + Fortschritte als Karten |
| Anhänge | S. 205 Drow-Glossar (Tabelle), S. 207 Ziegen, S. 208 Arkologien, S. 210 Antagonisten, S. 211 Medien | Text/Tabellen |
| Spielleiterschirm | Kernmechanik, Schwierigkeit, Stress-Höhe (W3/W6/W8 nach Risiko, S. 10), Fallout-Schwellen, alle Fallout-Namen kompakt, Tags, Standard-NSC | Overlay mit Reitern (Taste `s`) |

---

## 5. Architektur und Datenformat

**Vorlage ist `pico/`** (jüngstes Setting mit eigener Shell: `index.html`, `style.css`, `js/app.js` mit Routing, Blöcken, Kacheln, Modal, W6-Tabellen, Suche). Vorgehen: Pico-Shell nach `spire/` übernehmen, Präfixe umbenennen (`PI_` → `SP_`, `pi_state_v1` → `sp_state_v1`, `pi_core` → `sp_cmf`), Pico-Inhalte entfernen, Design durch `plan/spire/mockups/src/spire.css` ersetzen, W6-Tabellen → W10. `spire/sys.js` + `sysstart` danach nicht mehr verwenden; die Bücherliste (alle Einträge aus `sys.js`, mit Covern) wandert nach `spire/js/data/buecher.js` und erscheint im Burger unter „Bücher“. `toolmenu.js`: Untertitel „Drow-Rebellion“ beim Spire-Eintrag entfernen.

```
spire/index.html              Shell: Kopfzeile (Logo, i, Buch, Burger), #app, Skripte, toolmenu.js, gm_tool_mode_v1="spire"
spire/style.css               Design (Abschnitt 3)
spire/js/app.js               Routing, Startseite, Blöcke, Seitenleiste, Tasten, Modal, Galerie-Anbindung
spire/js/stadt.js             Stadtkarte, Domänen, Distrikt-Seite
spire/js/zelle.js             Zelle, Fallout-Panel, Bindungen, Freiheit/Unterschlupf/Beats
spire/js/gegner.js            Gegner-Browser, Begegnungsleiste, Gegner-Karte (auch in Distrikten/Abenteuer benutzt)
spire/js/zufall.js            W10-Tabellen
spire/js/wuerfel.js           Würfel-Overlay
spire/js/abenteuer.js         Abenteuer-Leitstand (allgemein, Snuff ist das erste)
spire/js/nach.js              Nachschlagen (Kapitel, Klassen, Götter, Extra-Fortschritte)
spire/js/schirm.js, suche.js
spire/js/data/buecher.js, glossar.js, tags.js (Tag-Regeln für Tooltips), fallout.js (alle Fallouts S. 13–15 + Bindungs-Fallout)
spire/js/data/stadt-*.js (siehe Tabelle Abschnitt 4), stadt-karte.js (Klickflächen + Kartentexte)
spire/js/data/klasse-azurite.js … klasse-vermissian-sage.js (10), mg-klasse-*.js (15 Zusätze), extra-fortschritte-a.js/-b.js
spire/js/data/welt.js, regeln.js, kurz-a.js/-b.js (QS), fertigkeiten.js, ausruestung.js, bindungen.js, kampf.js,
             spielleitung-a.js/-b.js, mg-systeme.js, mg-essays.js, goetter-a.js/-b.js, anhang.js, zufall-a.js/-b.js
spire/js/data/abenteuer-snuff.js, vorgefertigt.js (6 Figuren), galerie.js
spire/img/klasse/, distrikt/, kapitel/, gott/, abenteuer/, figur/, deko/ (riss-kopf, wirbel, kasten-schwarz), karte.webp
assets/fonts/spire-geared-700.woff2, spire-plantin-400.woff2, spire-plantin-400i.woff2, spire-plantin-700.woff2
```

### Text-Blöcke (wie Pico)
`"Absatz"` oder `{t:"p",x}`, `{t:"h",x,p}`, `{t:"ul",x:[…]}`, `{t:"dl",x:[[feld,text],…]}`, `{t:"schwarz",h,b}` (Core-Kasten), `{t:"violett",h,b}` (MG/QS-Kasten), `{t:"vl",x,wer}` (Zitat/Vorlesen), `{t:"bsp",x}` (Beispiel kursiv eingerückt), `{t:"tbl",head,rows}`, `{t:"w10",h,id,rows:[…×10]}`, `{t:"img",src}`, `{t:"gegner",id}` (bindet Gegner-Karte ein), `{t:"karten",x:[{t,f,x,tag}]}` (Fähigkeits-/Eintragskarten).

### Distrikt
```js
window.SP_STADT = window.SP_STADT || {};
SP_STADT.religion = { t:"Religion", p:155, bild:"distrikt/religion", intro:[Blöcke],
  distrikte:[ { id:"karmesin", t:"Die Sekte unserer Karmesinroten Wacht", en:"The Sect of Our Crimson Vigil", p:161,
      bild:"distrikt/karmesin" /* nur wenn Buchbild dazugehört */,
      abschnitte:[ {id:"sekte", t:"Die Sekte", p:161, b:[Blöcke]}, {id:"splitter", t:"Bemerkenswerte Splittergruppen der Wacht", p:162, b:[…]} ],
      gegner:["vigiliten","vigiliten-brandstifter"], verweise:[{t:"Der Wacht beitreten", p:75, ziel:"nach/extra/karmesin"}] } ] };
```

### Gegner
```js
window.SP_GEGNER = window.SP_GEGNER || [];
SP_GEGNER.push({ id:"paladin", t:"Paladin", en:"Paladin", buch:"cmf", p:167, ort:"stadt/religion/basilika",
  namen:["Schreitet-über-die-Morgenröte","Hase-der-zum-Jäger-flitzt","Zehntausend-Lieben"],
  beschr:["Trägt viele Reliquien","Rotes Haar, zurückgebunden","Liest laut aus dem Dritten Buch der Ernte vor"],
  schw:{wert:2, x:"Die Paladine gehören zu den besten Kämpfern …"}, wid:{werte:[7], x:"7"},
  bes:null, ausr:[{x:"Paladin-Dienstplatte", tags:["Rüstung 4"]}, {x:"Legrand-Militärgewehre", dmg:"W6", tags:["Fernkampf","Durchschlagend"]}, …],
  img:null });
```
`wid.werte` mit mehreren Zahlen (z. B. `[3,5]`) → Umschalter in der Karte.

### Klasse
```js
SP_KLASSE.push({ id:"azurite", t:"Azurite", p:29, bild:"klasse/azurite", zitat:"Jeder hat seinen Preis. Sogar Ihr, mein Herr.",
  intro:[Blöcke], wid:{silber:2, ruf:2}, auffrischen:"…", fert:["Überzeugen","Täuschen"], dom:"Handel und entweder …",
  bindungen:["…","…"], ausruestung:[{x:[…]}, {oder:true, x:[…], nach:"…"}],
  kern:[{t:"Ein Geschäft machen", fl:"Du kennst jeden, der wer ist …", x:"…"}],
  fort:{niedrig:[{t:"Goldene Zunge", g:"Göttlich", fl:"…", x:"…"}], mittel:[…], hoch:[…]}, mg:"azurite" });
```

### Spielstand
`localStorage["sp_state_v1"]` = `{ last:"zelle", rev:1, figuren:[{id, n, klasse, dienst, frei:{blut:1,schatten:3,ruest:2}, freiX:{…}, stress:{blut:2,verstand:0,…}, fallout:[{id:"geruecht", w:"schatten"}], bind:[{n, ebene, s:1}], fort:[…], notiz}], weniger_toedlich:false, freiheit:{s:0, fallout:[]}, unterschlupf:{ausbau:[], fallout:[]}, begegnung:[{id:"paladin", n:1, s:3}], zufall:{}, snuff:{tage:5, phase:2, erledigt:{}}, notes:{} }`. Alle Zugriffe in `try/catch`.

---

## 6. Arbeitsschritte (jeweils eine Sitzung: Screenshots, Commit, Push)

Übersetzungsumfang: ≈ 1,25 Mio. Zeichen Englisch (Core ≈ 800 000, MG ≈ 180 000, QS ≈ 100 000). **Spielbare Teile zuerst.**

0. ✅ **(erledigt 22.11.2026)** **Gerüst, Design, Bilder.** Pico-Shell übernehmen (Abschnitt 5), Schriften nach `assets/fonts/`, `spire.css` → `spire/style.css`, Deko nach `spire/img/deko/`. `extract_images.py` für alle drei PDFs laufen lassen (nach `/tmp`), Bilder nach Abschnitt 7 benennen und einsortieren, `galerie.js`. Startseite (Entwurf 1) mit Platzhalter-Zielen, Bücher/Bookviewer (`off:5/0/1`), Burger, Tasten, i-Info, SW. **Würfel** komplett (kleiner Umfang, sofort nützlich).
1. **Zelle** (Entwurf 4) + `fallout.js` (S. 12–15 vollständig, Bindungs-Fallout S. 15/24) + Fallout-Panel + Bindungs-Fallout + **6 vorgefertigte Figuren** (`vorgefertigt.js`, QS S. 25–36, Werte am Seitenbild ablesen).
2. **Snuff Out the Sun** komplett (Entwurf 6) + Gegner-Karte-Baustein + Begegnungsleiste (vorerst nur mit den QS-Antagonisten).
3. **Stadt I:** Karte + Klickflächen + Domänen (Entwurf 2), Distrikt-Seite (Entwurf 3), Domänen **Religion** und **Ordnung** komplett (S. 147–172) – Schablone.
4. **Stadt II:** Akademie, Handel, Verbrechen (S. 81–106).
5. **Stadt III:** Hohe und Niedere Gesellschaft (S. 107–128).
6. ✅ **(erledigt 22.11.2026)** **Stadt IV:** Okkultes (S. 129–146) + **Gegner-Browser** komplett (Entwurf 5, alle Core-Werteblöcke).
7. ✅ **(erledigt 22.11.2026)** **Zufall** (Anhang 2, 4, 5; Entwurf 9) + **Regeln** S. 9–24, Kampf S. 77–80, Spielleiterschirm, `tags.js` (Tooltips).
8. **Klassen I:** Übersicht (Entwurf 7) + Azurite bis Knight (S. 25–52), Entwurf 8.
9. **Klassen II:** Lajhan bis Vermissian Sage (S. 53–68) + Extra-Fortschritte (S. 69–76).
10. **Magister's Guide I:** Klassen-Zusätze (MG S. 17–48) für alle 15 Klassen + MG-Gegenspieler in den Gegner-Browser.
11. **Magister's Guide II:** Freiheit, Beats, Erwerbungen, Unterschlupf (Nachschlagen + optionale Zellen-Elemente, Entwurf zuerst zeigen) + Essays.
12. **Welt, Spire in Kürze, Spielleitung** (S. 1–8, QS S. 1–17, S. 173–182) + Revolution-Anbindung der Startseite.
13. **Neue Götter + Anhänge** (S. 183–211), Suche über alles, Gesamtcheck (Handy 1280, eingeklappte Leiste, keine JS-Fehler, keine Lücken) → diesen Plan als „erledigt“ markieren.

Für jede Sitzung bittet Sonnet Moritz, die passende PDF hochzuladen (für Bilder und Seitenbilder). Der Text liegt schon im Repo.

---

## 7. Bilder

Inventar: `plan/spire/bilder-inventar.tsv` (Name `<buch>_S<BUCHSEITE>_<nr>_<b>x<h>`, PDF-Seite, Buchseite, Rahmen in pt, „ganzseitig“). Das Skript rendert den Bildausschnitt der Seite (die Illustrationen sind im PDF aus maskierten Teilen zusammengesetzt) und überspringt Seitenhintergründe und Textkästen. Die schmalen Bänder `935x211/212` und `935x546/547` sind **Riss-Bänder der Kapitelanfänge** (mit Kapiteltitel) – nicht als Bild verwenden, das Riss-Band kommt aus `deko/riss-kopf.webp`.

| Bereich | Quelle | Ziel |
|---|---|---|
| Stadtkarte | `cmf_S000` (ganzseitig) – höher auflösen: `pdftoppm -r 200 -f 5 -l 5` | `img/karte.webp` |
| Klassenbilder (ganzseitig, jeweils die Seite **vor** der Klasse) | Azurite S028 · Bound S032 · Carrion-Priest S036 · Firebrand S040 · Idol S044 · Knight S048 · Lajhan S052 · Masked S056 · Midwife S060 · Vermissian Sage S064 (bestätigt: die QS-Porträts von Sansel/Bound, Derwent/Sage, Diyell/Knight, Mallory/Lajhan, Bonchance/Midwife sind dieselben Bilder) | `img/klasse/<id>` |
| Gutter Cleric | `qs_S027` (Alabast Defoy) – einzige MG-Klasse mit Bild | `img/klasse/gutter-cleric` |
| Vorgefertigte Figuren | `qs_S025` Sansel · `S027` Alabast · `S029` Derwent · `S031` Diyell · `S033` Mallory · `S035` Bonchance | `img/figur/<name>` |
| Abenteuer | `qs_S018` (Titelbild Snuff Out the Sun) · `qs_S021` (Philydia, gehört zu ihr) · `qs_S000` (QS-Cover) | `img/abenteuer/…`, `img/figur/philydia` |
| Kapitel-/Distriktbilder (ganzseitig) | S004, S006, S012, S020 (Waffen, → Ausrüstung), S068, S078 (Kampf), S084, S090, S094, S098, S100, S108, S112, S116, S120, S122, S126, S130, S132, S146, S152, S154, S156, S162, S164, S168, S172, S180, S184, S186, S188, S190, S192, S194, S196, S198 | **Zuordnung am Seitenbild prüfen**: Ein ganzseitiges Bild steht im Buch mitten im Kapitel, zu dem es gehört (z. B. S162 in der Karmesinroten Wacht, S168 in der Sonnenbasilika, S184–S198 in den Neuen Göttern → je Gott). Im Zweifel nur in die Galerie, nicht in einen Distrikt |
| Magister's Guide | `gm_S001` (Cover) · `gm_S016` (Unterschlupf-Illustration) · `gm_S048` | `img/kapitel/…` |
| Nicht verwenden | `gm_S006/S010/S011/S012/S014/S015`, `qs_S006/S012/S013/S014/S017/S022` = Text-Kästen (als `violett`-Block nachbauen); `gm_S056_*` = Werbung | – |

Regeln: sofort sprechend benennen; Großansicht immer ungeschnitten; nie ein Bild einer falschen Figur/eines falschen Distrikts zuordnen – im Zweifel weglassen. Alle Bilder in die Galerie (`spire/js/data/galerie.js`, Gruppen nach Bereich).

---

### Stand nach Schritt 0 (für die folgenden Sitzungen)
- Neue Ansichten melden sich in `SP_VIEW[<route>] = function(teile){ return html; }` an (`spire/js/app.js`); Nachschlage-Bereiche über `SP_NACH_VIEW[<id>]`. Ohne Anmeldung zeigt jede Route einen Platzhalter (Titel + Seitenlink).
- Bereiche, Startkacheln, Spielbereiche, Abenteuer-Kacheln: `spire/js/data/bereiche.js`. Suche: `SP_SUCHE.push(function(add){…})`.
- Seitenangaben immer mit `pgl(seite, "cmf"|"gm"|"qs")` (als `<a class="pg">`, damit der Bookviewer-Autolinker sie nicht auf das falsche Buch umbiegt); Container mit Text eines anderen Buchs bekommen `data-pgbook="sp_qs"` usw.
- Ganzseitige Bilder, die im Buch genau an einer Kapitelgrenze stehen, heißen `img/kapitel/zwischen-…-S<nr>` (S068, S100, S116, S146, S154, S172) und stehen nur in der Galerie – Zuordnung erst, wenn der Buchtext sie eindeutig macht.
- Die QS-Porträts (`img/figur/`) sind dieselben Bilder wie die Klassenbilder; in der Galerie nur einmal.

### Stand nach Schritt 4/5
- **Schritt 4 erledigt:** Akademie, Handel, Verbrechen (S. 81–106) in `stadt-akademie/-handel/-verbrechen.js` + `gegner-*.js`.
- **Schritt 5 erledigt:** Hohe Gesellschaft (`stadt-hoch.js`, `gegner-hoch.js`: Amaranth, Ivory Row, Silberviertel) und Niedere Gesellschaft (`stadt-nieder.js`, `gegner-nieder.js`: Derelictus, Perch, Gartendistrikt, Werke); Domänen-IDs im Index: `hoch`, `nieder`. Die Core-Schwarze-Garde heißt `schwarze-garde-cmf` (QS-Version bleibt `schwarze-garde`).
- Bilder: Amaranth S108, Ivory Row S112 (steht im Buch mitten im Distrikt), Perch S120, Gartendistrikt S122, Werke S126; S116 nur Galerie.
- Karte: Algenfarmen/Blutegelkanäle -> Gartendistrikt; Polygone mit `dom` und `chips` öffnen eine Auswahl (Sonnenbasilika: Himmelsdocks, Universität; Ivory Row: Perch); `hv` hebt Flächen für Distrikte ohne eigenes Polygon hervor (Norddocks, Blauer Hafen, Himmelsdocks, Universität, Red Row, Derelictus).
- Für Schritt 9 anzulegende Extra-Fortschritt-IDs (Verweise): `stolz`, `king-teeth`, `hungrige-tiefe`, `greymanor`. Verweis `stadt/okkult/herz` (Die Höhle, S. 135) für Schritt 6.
- Textkorrekturen: Ewigfrost (Glossar), Retroingenieure, „Verloren“ im Buch = Vorloren Standard.

### Stand nach Schritt 6
- **Okkultes komplett** (S. 129–146): `stadt-okkult-a.js` (Das Vermissian, Das Herz, Gilde der Leichenbestatter) und `stadt-okkult-b.js` (Die Nekropole, Die Hebammen), Domänen-ID `okkult` (Distrikte `vermissian`, `herz`, `leichenbestatter`, `nekropole`, `hebammen`). Bild nur beim Vermissian (S130, Bahnhof-Szene); S132 bleibt in der Galerie (Zuordnung unklar, ev. Candlegate-Kerzen).
- Kästen, die im Buch mitten im Text einer anderen Seite stehen, sind ans Ende des thematisch passenden Abschnitts gesetzt: „Vyskant-Wirt werden“ -> Die Höhle, „Mit den Toten sprechen“ -> Obsidian-Orrery, „Methoden der Wahrsagerei“ -> Choke. „Unsterbliche/Unsterblichen-Chirurgie“ einheitlich „Unsterblichen-Chirurgie“.
- **6 Gegner** in `gegner-okkult.js` (Blood-Witch, Geister, Executioner, Geisterheer, Wachen der Leichenbestatter, Hebamme). Damit sind alle 24 Core-Werteblöcke + 5 QS-Blöcke im Gegner-Browser (29).
- **Gegner-Browser (`#gegner`, Entwurf 5)** in `gegner.js`: Baum links (Alle · Nach Domäne · Magister's Guide [erscheint automatisch, sobald Gegner mit `buch:"gm"` angelegt sind] · Snuff Out the Sun · Regeln mit Standardwerte, Tags S. 20, Kampf S. 77), Suche + Filter (Schwierigkeit 0 / 1 / 2+ / Mit Fernkampf), kompakte Karten, Werteblock rechts sticky, Begegnungsleiste. Gruppe eines Gegners ergibt sich aus `ziel` (`stadt/<domäne>/…`) bzw. `buch`; neue Gegner brauchen nur den Eintrag in `SP_GEGNER`. Das Snuff-Tab „Gegner“ nutzt weiter `gegnerBrowser(L)`.
- Domänenseite mit 5 Distrikten nutzt Raster `r5d` (3 + 2 ohne Lücke). Verweis aus Derelictus/Gartendistrikt -> `stadt/okkult/herz/die-hoehle` gelöst.
- Offene Verweisziele für Schritt 8/9: `nach/klassen/carrion-priest`, `vermissian-sage`, `midwife`; `nach/extra/vyskant` (Titel im Buch „Der Vyskant“, S. 76).

### Stand nach Schritt 7
- **Zufall** (`zufall.js`, Daten `zufall-a.js` = Anhang 2 mit 17 Tabellen in 5 Gruppen, `zufall-b.js` = Ziegen S. 207 und Arkologien S. 208 als Listen mit Zufallswahl): Route `#zufall[/<gruppe>|ziegen|arkologien]`, Baum links, Tabellen als Karten (2er-Raster, bei 3 Tabellen 3er-Raster), Würfelknopf je Tabelle (W10, bei den zwei 12er-Tabellen W12), „Alle würfeln“ je Gruppe, Treffer gold, Würfe in `ST.zufall`. Das Drow-Glossar (Anhang 3, S. 205) bleibt für Schritt 13.
- **Nachschlagen** in `nach.js` (ersetzt `regeln-fallout.js`): `#nach/regeln` (S. 9–16; Kernmechanik bis Zusätzliche Widerstandsplätze aus `regeln.js`, danach alle Fallout-Abschnitte aus `fallout.js`, Route `#nach/regeln/fallout[/<abschnitt>]` springt dorthin), `#nach/kampf` (S. 77–80, `kampf.js`, Beispielkampf als Dialog-Block `{t:"dialog", x:[[Sprecher, Text], …]}`), `#nach/fertigkeiten` (S. 17–18), `#nach/ausruestung` (S. 19–22 mit Waffen-/Rüstungsbeispielen), `#nach/bindungen` (S. 23–24). Alle Seiten: Baum links, `data-j`-Scroll-Spy, Sprung per `#nach/<bereich>/<abschnitt-id>`.
- **Tags**: `data/tags.js` (25 Waffen- und 5 Rüstungs-Tags). Chips mit Tag-Namen in den Gegner-Karten (`gChip`, `gKurzChips`) bekommen per `tagAttr()` einen Tooltip mit der Regel (Hover oder Tippen). Gegner-Baum: „Tags“ (S. 21) und „Kampf“ (S. 77) führen auf die neuen Seiten.
- **Spielleiterschirm** (`schirm.js`, Taste `s`, Burger, Chip auf der Startseite; `#schirm` öffnet ihn über der Startseite): Reiter Würfeln · Stress · Fallout (Schwellen, alle Namen als Chips mit Tooltip, Bindungs-Fallout) · Tags · Gegner (Standardwerte QS S. 22).
- **Fallout-Namen** in allen neuen Texten nach `fallout.js` (Müde, Panisch, Ausrasten, Kompromittiert, Bewusstlos, Gedächtnislücken, Gedemütigt, Kriminell, Erwählt, Abtrünnig, Verachtet; Bindungs-Fallout Ausgelaugt); die Varianten der Quelle (Erschöpft, In Panik, Bloßgestellt, KO geschlagen …) kommen nirgends mehr vor.
- **Seitenkorrektur** gegenüber Schritt 1: „Den Überblick behalten“, „Zusätzliche Widerstandsplätze“ und „Fallout“ stehen im Buch auf **S. 11** (S. 12 ist die ganzseitige Illustration, `kapitel/regeln-S012`, jetzt im Abschnitt Fallout); `fallout.js`, Zelle (Schwellen) und die Zellen-Kachel angepasst. Tags beginnen im Buch auf S. 21 (S. 20 ist nur das Waffenbild, jetzt im Abschnitt Ausrüstung).
- Quelltext-Fehler korrigiert: der Verweis „Bindungs-Fallout … auf S. 11“ im Kapitel Bindungen steht so im Buch (Fallout-Abschnitt beginnt auf S. 11) und wurde übernommen; „abtauchen“ im Buch = „untertauchen“ (Glossar); Seitenköpfe/Spaltenreihenfolge in k02 neu geordnet (Beispiel „Stress entfernen“ zusammengesetzt).
- Offen für Schritt 8 ff.: `nach/klassen`, `nach/extra` zeigen weiter den Platzhalter; Verweise der Klassen auf Tags/Regeln können `nach/ausruestung/tags` bzw. `nach/regeln/<abschnitt>` nutzen.

### Stand nach Buch der Masken
- **Buch der Masken** (Zusatzbuch, Bookviewer `sp_z1`, PDF = Buchseite) als eigene Ansicht `#masken[/<maske>|fortschritte|ausruestung]`, erreichbar nur über das Burger-Menü („Nachschlagen › Buch der Masken“), keine Kachel auf der Startseite. Code: `spire/js/masken.js` (`SP_VIEW.masken`), Design `spire/masken.css` (nur bei `body[data-view="masken"]`), Daten `spire/js/data/masken-index.js` (Kopf, Einleitung S. 3, Vorwort S. 4, Seitenverhältnisse der Bilder), `masken-neuerscheinung.js` (S. 5–8), `-klassiker.js` (S. 9–12), `-diener.js` (S. 13–19), `-amaranth.js` (S. 20–23). Seitenangaben „S. n“ (`mkPg`, Buch `z1`). Suche ist angebunden.
- Reiter: **Katalog** (Kopf mit Titelbild, Übersichtsraster aller 22 Masken, Vorwort, vier Abschnitte; Baum links einklappbar, auf schmalen Fenstern wischbare Zeile) · **Fortschritte** (alle 8: Nackte Frechheit, Totenmaske, Das Antlitz Gottes, Zugedröhnt, Zweigesichtig, Ediktmaske, Personenschutz, Spinnling – als Karten) · **Ausrüstung** (10 Ausrüstungsstücke + Szene Todesmaskerade als Karten). Regelkarten haben Beschriftung wie im Buch (Ausrüstung / Niedriger Fortschritt / Mittlerer Masked-Fortschritt / Szene); Waffenwerte des Donnerhelms (W3, Kernschuss, Einweg) und „Rüstung 2“ der Kokonmaske sind Chips mit Tag-Tooltip (`tagAttr`), Spinnling verweist auf Fallout.
- Bilder: 23 Masken in `spire/img/masken/` (Himmelsmasken je einzeln beim jeweiligen Text; `titel` = Cover, `todesmaskerade` zeigt im Buch dasselbe Motiv), Dekor in `img/masken/deko/` (Pergament, Kasten für „Das könnte Sie auch interessieren“, vier gedrehte Seitenrand-Silhouetten `blatt-1..4` als Masken für die gerissenen Pergamentblätter). Schriften `spire/fonts/` (Rye = Titel, Pinyon Script = Namen/Initialen, IM Fell English SC = Beschriftungen).
- Layout: Bild neben Text (wechselt die Seite je Eintrag), Regelkarte unter dem Text bzw. – wenn der Text lang ist – unter dem Bild (`mkRegelLinks` schätzt die Höhen), ab Containerbreite 1220 px dreispaltig. Bildspalte ist sticky. **Achtung:** Klasse `.rev` ist auf der Startseite (Revolution) belegt – in der Masken-Ansicht heißt „gespiegelt“ deshalb `.mr`.
- Textentscheidungen: Abschnittstitel „Masken für Sie / Diener“ (Quelle) als „Masken für Eure Diener“; „Undying-Operation“ als „Unsterblichen-Chirurgie“ (Glossar); „Staatsselfen“ → „Staatselfen“. Keine Verknüpfung mit Zelle/Klassen, da der Buchtext keine hergibt (Masked-Klassenseite existiert noch nicht).

## 8. Startauftrag für jede Sonnet-Sitzung (zum Kopieren)

> Lies `plan/SPIRE_PLAN.md` im Repo einmoritz-spec/Spielleitertool und setze **Schritt N** um. Halte dich an Abschnitt 2 (Grundregeln, Namensregel, Glossar) und Abschnitt 3 (Design) und baue genau nach den Entwürfen in `plan/spire/mockups/`. Der englische Buchtext liegt in `quellen/spire/text/` (Seitenmarken = Buchseiten; PDF-Seite = Buchseite + 5 beim Grundregelwerk, + 0 beim Magister's Guide, + 1 beim Quickstart), die PDF hänge ich an. Übersetze vollständig ins Deutsche, nichts weglassen, nichts erfinden. Prüfe jede Ansicht per Screenshot (1440×900 und 1280×800), behebe Lücken/Überlauf, schick mir die Screenshots, committe ohne Co-Authored-By/Claude-Session-Zeilen und pushe.

---

## 9. Später (nicht Teil dieses Plans)

- **Weitere Bücher** aus dem Drive (Liste in `spire/sys.js`): Sourcebooks *Sin*, *Strata* (enthält u. a. die Grundklassen Blood-Witch/Gutter Cleric/Inksmith …), *Blood and Dust*, *Codex of the Deep Spire*, *Shadow Operations*, *Black Magic*, *Secrets Kept from the Sun*, *Book of Masks*, Abenteuer *The Kings of Silver* (Kampagnenrahmen), *Eidolon Sky*, *Maps*. Neue Abenteuer nutzen `abenteuer.js` (Tabs je nach Buchstruktur), neue Distrikte hängen sich an die Domänen, neue Klassen an die Klassen-Übersicht. Jedes Buch: eigene Bookviewer-ID + Seitenversatz, Bilder ins Inventar.
- **Interaktiver Charakterbogen** (Klick auf „Charakterbogen“ öffnet eine ausfüllbare Ansicht des Bogens S. 212, perfekt passend als PDF druckbar) – **allerletzter Schritt**, wie bei Pico.

### Stand Startseite (22. Nov. 2026)
Vorbereitung = 3-spaltiges Kachelraster mit 9 Kacheln (Welt mit Stadtkarte, Regeln, Klassen, Fertigkeiten/Ausrüstung, Spire in Kürze, Spielleitung, Magister's Guide, Götter/Anhänge, Buch der Masken); Bereiche ohne Inhalt tragen ein kleines „folgt“. Werkzeug-Chips entfernt (nur Burger/Kopfzeile). Daten: `SP_KACHELN` in `spire/js/data/bereiche.js`.

### Stand nach Klassen (Schritt 8/9, 22. Nov. 2026)
- **Klassen** (`spire/js/klassen.js`): `#nach/klassen` = Übersicht (Entwurf 7, 5 Spalten, 10 Kacheln) + Abschnitte Charaktere/Dienstzeit (S. 25–27, `klassen-charaktere.js`); `#nach/klassen/<id>` = Klassenseite (Entwurf 8) mit Reiterzeile zum Wechseln der Klasse; `#nach/extra[/<weg>]` = Extra-Fortschritte (11 Wege, Baum links). Daten je Klasse `klasse-<id>.js`, `extra-a/-b.js`; alle per `plan/spire/build_klassen.py` aus `quellen/spire/de/cmf/k06–k08` erzeugt (bei Textkorrekturen: Markdown ändern, Skript neu laufen lassen).
- Fortschrittskarten: Flex-Raster (4/3 je Zeile, lange Karten doppelt breit), Stufen-Etikett links sticky (`.main:has(.kp){overflow:clip}` nötig). Waffenwerte in der Ausrüstung als Chips mit Tag-Tooltip.
- Offen (Schritt 10): Magister's-Guide-Zusatz je Klasse + die 5 MG-Klassen (Kachelreihe lila, 5 Spalten passen); das Reiterzeilen-Feld „Magister's Guide: Zusatz“ kommt dann neben die Klassenreiter. Das MG-PDF enthält keine eigenen Klassenbilder (nur Hintergrund-Silhouetten); Gutter Cleric hat sein Bild aus dem Quickstart.
