# The Wildsea – Erweiterungen: Fertige Charaktere, Ship-Gardens, Storm and Root

Planung: Opus (21.11.2026). Umsetzung: Sonnet-Agents nach den Arbeitspaketen unten.
Baut auf `plan/WILDSEA_PLAN.md` auf (Grundregeln, Glossar, Bildregeln gelten unverändert).

---

## 1. Quellen

| Buch | Datei (Upload) | Seiten | Bookviewer-ID | Text im Repo |
|---|---|---|---|---|
| Characters (9 fertige Charaktere) | `The_Wildsea___Material___Characters__EN_.pdf` | 18 (je Charakter eine Doppelseite: links Charakterbogen, rechts Beschreibung + Porträt) | `ws_m1` | **keiner** – das PDF besteht nur aus Seitenbildern (300 dpi). Text per Bild lesen (s. AP 1). |
| Ship-Gardens | `…Zusatz___Ship_Gardens_EN.pdf` | 40 | `ws_z2` | `quellen/wildsea/text/sg-ship-gardens.md` (Marken `<!-- S. N -->`) |
| Storm and Root | `…Zusatz___Expansion_Storm_and_Root__EN_.pdf` | 306 | `ws_z1` | `quellen/wildsea/text/sr-storm-and-root.md` |

Gedruckte Seite = PDF-Seite (bei beiden Erweiterungen geprüft). Beim Characters-PDF stehen im Bild andere Seitenzahlen (197, 201 …) – **immer die PDF-Seite** verwenden, Link öffnet `ws_m1`.
Die PDFs liegen nur während einer Sitzung unter `/mnt/user-data/uploads/`; für Bilder bittet Sonnet Moritz um erneuten Upload.

**Weglassen:** S&R Index (S. 292–293), Kickstarter Backers (296–299), The Team (300–301), Inhaltsverzeichnis (4–5), Impressum/Rückseite. Alles andere wird vollständig übersetzt – **inklusive** der Randvignetten (Erzähltexte am Seitenrand, z. B. S&R S. 32, 64, 116; Ship-Gardens S. 3–4) als `{erz}`.

---

## 2. Grundsatzentscheidungen (von Moritz bestätigt, 21.11.2026)

1. **Einsortieren statt eigener Bereich.** Die Erweiterungen erweitern dieselbe Welt. Ihre Inhalte kommen in die vorhandenen Bereiche (Regeln, Charaktere, Schiffe, Die Wildsee, Leitfaden, Am Tisch, Gefahren, Reiche) – dort, wo die Spielleitung sie im Spiel sucht. Jeder Abschnitt/Eintrag trägt ein kleines **Quellen-Etikett** („Storm and Root“, „Schiffsgärten“, „Fertige Charaktere“), und der S.-Link öffnet das richtige Buch.
2. **Fertige Charaktere** bekommen eine eigene Gruppe ganz oben in der Charaktere-Übersicht (große Porträtkarten wie die Blutlinien) und eine eigene Detailseite im Stil eines schönen Charakterbogens (s. 4.2). Zusätzlich ein Chip „Fertige Charaktere“ auf der Startseite.
3. **Neue Reiche** (Nadir, Rao Ze, Zentinel’s Rise, Fjandango, Duzakh’s Vent, The Myconica) laufen im vorhandenen Reich-Leitstand (`reich.js`) mit allen Tabs, in der Reiche-Übersicht als zweite Reihe „Storm and Root“. Die kleinen Bausteine (Proto-Territorien, Freihäfen, Abtrünnige Fraktionen, S. 186–201) werden ein eigener Pseudo-Reich-Eintrag „Weitere Orte & Fraktionen“ (gleicher Viewer, nur Territorien/Häfen/Fraktionen).
4. **Ohne Erfindungen:** Nur Buchtext. Werkzeuge (Leisten, Würfel) sind erlaubt, weil sie keine Inhalte erfinden – siehe optionale Welle 4.

---

## 3. Glossar für die Erweiterungen (verbindlich für alle Agents)

Ergänzt das Glossar in `WILDSEA_PLAN.md` / `/tmp/agent_brief.md`. Eigennamen (Blutlinien, Herkünfte, Posten, Reiche, Orte, Personen, Schiffe) bleiben **englisch**.

**Storm and Root – Welt & Regeln**

| Englisch | Deutsch |
|---|---|
| The Wild Blue | Das Wilde Blau |
| The Crushing Depths | Die erdrückenden Tiefen |
| Underthrash | Unter-Gestrüpp |
| Airship / Aeronaut | Luftschiff / Aeronaut |
| Submersible / Delving (Tätigkeit) | Tauchboot / Abtauchen |
| Floating Islands · Crags, Spires & Tallshanks · Highports · Satellite Cities · Lowports | Schwebende Inseln · Klippen, Türme & Tallshanks · Hochhäfen · Satellitenstädte · Tiefhäfen |
| Flight · Takeoff Styles · Flight Styles · Aerial Stunts · Landings | Flug · Startarten · Flugstile · Flugmanöver · Landungen |
| Atmospheric and Environmental Conditions | Wetter- und Umgebungslagen |
| Drifting · Altitude · Looking for Trouble | Treiben · Höhe · Ärger suchen |
| Scrutiny · Watchers · Watchful Eyes | Aufmerksamkeit · Beobachter · Wachsame Augen |
| Pressure · Pressure Gauge · Pressure Track · Pressure Effects | Druck · Druckanzeige · Druck-Leiste · Druckfolgen |
| Snaps | Risse (Begriff im Abschnitt S. 64–65 prüfen; bei anderer Bedeutung melden) |
| Crezzer Corruption | Crezzer-Verderbnis |
| Bad Air · Drifting Spores · Insect Incursions · Wandering Spirits | Schlechte Luft · Treibende Sporen · Insekteneinfälle · Wandernde Geister |
| Nautilization · Amberglass | Nautilisierung · Bernsteinglas |
| Complex Aspects · Extra Aspects | Komplexe Aspekte · Zusätzliche Aspekte |
| Lift Systems · Auxiliary Lift Systems · Bafflers | Auftriebssysteme · Hilfs-Auftriebssysteme · Bafflers → „Prallbleche“ (prüfen, Bedeutung S. 116–117) |
| Rising Designs / Fittings / Undercrew | Steig-Entwürfe / Steig-Ausstattung / Steig-Unterbesatzung |
| Pressure Shells · Scrubbers · Torpedoes | Druckhüllen · Luftwäscher · Torpedos |
| Delving Designs / Fittings / Undercrew | Tauch-Entwürfe / Tauch-Ausstattung / Tauch-Unterbesatzung |
| Prototerritories · Freeports · Rogue Factions | Proto-Territorien · Freihäfen · Abtrünnige Fraktionen |
| Fortune Rolls · Delayed Hijacks | Schicksalswürfe · Verzögertes An-sich-Reißen |
| Crezzerbloom | Crezzerblüte |
| Rules Breakdown | Regelübersicht |

**Ship-Gardens**

| Englisch | Deutsch |
|---|---|
| Ship-Garden · Garden Sheet · Garden Goals | Schiffsgarten · Gartenbogen · Gartenziele |
| Plot · Medium · Quarter | Beet · Nährboden · Viertel |
| Seeds · Seed Types · Sowing · Growing · Harvesting | Saatgut · Saatarten · Aussaat · Wachstum · Ernte |
| Hybridization | Kreuzung |
| Fruits, Vegetables, Nuts, Legumes, Grasses & Wheats, Berries, Mushrooms, Herbs, Spices, Narcotics, Flowers, Succulents, Predatory Plants, …Stones | Früchte, Gemüse, Nüsse, Hülsenfrüchte, Gräser & Getreide, Beeren, Pilze, Kräuter, Gewürze, Rauschpflanzen, Blumen, Sukkulenten, Raubpflanzen, …Steine |
| Garden Hazards | Gartengefahren |

Pflanzen-, Gegner- und Gegenstandsnamen: beschreibende Namen übersetzen (wie im Corebook), Wortspiele sinngemäß (z. B. slaughtermelons → „Schlachtmelonen“), unübersetzbare Fantasienamen englisch lassen. **Jeder Agent meldet neu festgelegte Begriffe im Bericht**; der Integrations-Schritt vereinheitlicht sie.

---

## 4. Technik

### 4.1 Gemeinsame Erweiterungen (Welle 1, ein Agent, vor allen anderen)

- **Quelle je Abschnitt/Eintrag:** neues optionales Feld `q` (`"sr"`, `"sg"`, `"m1"`; fehlt = Corebook) und `buch` (Bookviewer-ID). Fehlt `buch`, wird es aus `q` abgeleitet (`sr→ws_z1`, `sg→ws_z2`, `m1→ws_m1`, sonst `ws_core`). Auch für die Szenarien nachziehen (`ws_a1`, `ws_a2`), damit dort die S.-Links funktionieren.
- **Anzeige:** `nach.js` (Kopf: kleines Etikett hinter der Seitenzahl, Seitenleiste: winziger Punkt in Quellenfarbe), `gefahr.js` (Karte + Detail; im Gefahren-Browser zusätzlicher Filter „Quelle“), `reich.js` (Kopf), Charaktere-Übersicht (Etikett auf der Porträtkarte). Farben: Storm and Root = Himmelblau, Schiffsgärten = Grün, Fertige Charaktere = Ocker. Etikett klein, unaufdringlich (Teko, 11–12 px, abgerundet).
- **Seitenlinks:** `openBook(buch, p)` statt fest `ws_core` – in nach.js, gefahr.js, reich.js, schirm.js, suche.js.
- **Suche/Galerie:** Quelle im Treffer anzeigen („Storm and Root · S. 74“); Galerie-Filter um die Quellen ergänzen.
- **Neuer Blocktyp `{pc:{…}}`** für fertige Charaktere (Renderer in `nach.js`, Format 4.2).
- Prüfen per Screenshot, Commit, Push. Danach starten die Inhaltsagents.

### 4.2 Fertige Charaktere – Format und Design

Datei `wildsea/js/data/pregens-a.js`, `pregens-b.js` (je 4–5 Charaktere), Bereich `WS_NACH.charaktere`, Gruppe `k:"Fertige Charaktere"`, ganz vorn eingereiht (`unshift`), `q:"m1"`, `p` = PDF-Seite des Bogens.

```js
{id:"pc-aramin-su-chu", k:"Fertige Charaktere", t:"Aramin Su-Chu", p:1, q:"m1", b:[
 {pc:{
   posten:"Dredger", blut:"Ardent", herkunft:"Spit-Born",        // vom Bogen (Background)
   bild:"pregen/aramin-su-chu.webp", bogen:"pregen/aramin-su-chu-bogen.webp",
   staerken:[["Anmut",0],["Eisen",0],["Instinkt",0],["Schärfe",1],["Zähne",0],["Gezeiten",0],["Schleier",1]],
   fert:[["Schürfen",2],["Rasseln",1], …],          // nur Ränge > 0, Reihenfolge wie Bogen
   spr:[["Low Sour",3],["Brasstongue",1], …],
   asp:[["Gedankenkatalog",4,"Eigenschaft","Markiere, um …"], …],   // Name, Leiste, Art, Text (deutsche Aspektnamen wie in charaktere-8*.js!)
   res:{bergegut:[…], proben:[…], fluester:[…], seekarten:[…]},
   antriebe:[…], morast:[…], meilensteine:{gross:[…], klein:[…]},
   leisten:[…]                                        // „Temporary Tracks“, falls ausgefüllt
 }},
 {a:"Einleitung (rechte Seite)"}, {h:"Aramins Rolle"}, {a:"…"}, {h:"Den Charakter spielen"}, {a:"…"}, {l:["…","…"]}
]}
```

**Design der Detailseite** (Renderer `{pc}`):
- Links das **Porträt** groß und ungeschnitten (Hochformat, ca. 520 px hoch, schwebend), daneben Name, Unterzeile „Dredger · Ardent · Spit-Born“.
- Rechts davon bzw. darunter der **Bogen als Kartenraster** im Wildsea-Stil: Stärken (7 Kreise, gefüllt = Rang), Fertigkeiten und Sprachen (Punkte 0–3), Aspekte als Karten mit Leiste aus Kästchen (□ × Länge) + Art-Etikett, Ressourcen (4 kleine Spalten), Antriebe, Morast, Meilensteine.
- Darunter der Beschreibungstext (Einleitung, Rolle, Spielhinweise als Liste).
- Knopf „Originalbogen“ öffnet das Bogenbild als Zoom; S.-Link öffnet `ws_m1`.
- Übersicht: Gruppe „Fertige Charaktere“ mit großen Porträtkarten (Name + „Posten · Blutlinie“ statt S.).

**Lesen der Bögen:** Das PDF hat keinen Text. Seiten mit `pdfimages -png -f N -l N` (300 dpi, Vollbild je Seite) ziehen, Abschnitte (Stärken, Fertigkeiten, Aspekte …) zuschneiden und **mit dem Read-Werkzeug ansehen**; gefüllte Punkte zählen. Tesseract nur als Hilfe für Fließtext (rechte Seite), immer gegen das Bild prüfen. Aspekttexte, die im Corebook stehen, aus `charaktere-6*/7*/8*.js` übernehmen (gleiche Übersetzung); nur Abweichungen neu übersetzen.
**Bilder:** Porträt aus der rechten Seite rechteckig zuschneiden (Figur + etwas Rand, Aquarell-Hintergrund darf bleiben, nichts von der Figur abschneiden, keine Schrift im Ausschnitt), `img/pregen/<id>.webp` ≤ 1400 px. Bogen = linke Seite komplett, `img/pregen/<id>-bogen.webp` (≤ 1800 px breit).

### 4.3 Weitere Datenformate (wie bisher)

- Nachschlage-Abschnitte: `WS_NACH.<bereich>`-Sektionen wie in `regeln-*.js`, plus `q`. Erweiterungs-Abschnitte stehen **nach** den Corebook-Abschnitten ihrer Gruppe bzw. in eigenen Gruppen mit sprechendem `k` (z. B. `k:"Das Wilde Blau"`).
- Blutlinien/Herkünfte/Posten: Format wie `charaktere-8a.js` mit Helfer `WSH` (asp, aspHead, fragen, kit, q), `k:"Blutlinien"` / `"Herkünfte"` / `"Posten"`, `q:"sr"`/`"sg"`. Bilder in `bilder-*.js` (WS_NIMG) → erscheinen automatisch als Porträtkarte.
- Gefahren: Format wie `gefahren-bestien-1.js` (`WS_GEFAHR.push`), Kategorien wie Corebook, plus `q`. Bilder `img/gefahr/<id>.webp` + `t/<id>.webp` (Thumb 440 px) + Eintrag in `GIMG`. Sonderkästen (Schlechte Luft, Treibende Sporen, Insekteneinfälle, Wandernde Geister, S&R S. 139/152/155/169) als Nachschlage-Abschnitte in Regeln-Gruppe „Die erdrückenden Tiefen“ verlinken oder als `extra` in der Gefahren-Kategorie – Agent entscheidet nach Viewer, meldet es.
- Reiche: Format wie `reich-foxloft.js` (`WS_REICH.<id>`, Index 0 der Wache-Listen = Ergebnis 6), dazu Eintrag in `WS_REICHE` (Datei `reiche.js`) mit `q:"sr"`. Reich-Eröffnungsbild `img/reich/<id>.webp`, Figuren `img/figur/<id>_<name>.webp`, Feld `bild` wie bei den Corebook-Reichen.

### 4.4 Dateien und Registrierung

Agents schreiben **nur ihre eigenen Dateien** und fassen `index.html`, `sw.js`, `nach.js`, `app.js`, `reich.js`, `gefahr.js` nicht an (Ausnahme: Agent der Welle 1). Die Integration trägt Skripte in `index.html` ein (Reihenfolge: Corebook-Daten → Erweiterungsdaten → bilder-*.js → hero.js → suche.js → app.js), ergänzt den Precache in `sw.js` (alle neuen js/webp) und erhöht `VERSION`.

---

## 5. Arbeitspakete

### Welle 1 – Grundlage (1 Agent, seriell)
**AP 0 · Quellen-Etiketten, Buchlinks, `{pc}`-Renderer** (4.1, 4.2). Testdaten: ein Charakter (Aramin Su-Chu, PDF S. 1–2) komplett, damit das Design abgenommen werden kann → Screenshot an Moritz.

### Welle 2 – Inhalte (parallel, je 1 Sonnet-Agent)

| AP | Inhalt | Seiten | Ziel | Dateien |
|---|---|---|---|---|
| 1a | Fertige Charaktere 2–5 | Characters S. 3–10 | Charaktere › Fertige Charaktere | `pregens-a.js` (inkl. Aramin aus AP 0) |
| 1b | Fertige Charaktere 6–9 | Characters S. 11–18 | dito | `pregens-b.js` |
| 2 | Ship-Gardens komplett | SG S. 1–38 | Schiffe › Gruppen „Schiffsgärten“, „Gartenpflanzen“ (jede Pflanze als Karte), „Kreuzung“; Agronaut → Charaktere › Posten; Laughing Longnecks → Gefahren; Gartenbogen S. 38 → Chip/Link | `schiffe-sg-*.js`, `charaktere-sg.js`, `gefahren-sg.js`, `bilder-sg.js` |
| 3a | Das Wilde Blau | S&R S. 6–39 | Welt (S. 6–17) → Die Wildsee, Gruppe „Das Wilde Blau“; Regeln (18–39) → Regeln, Gruppe „Das Wilde Blau“ | `wildsee-sr-a.js`, `regeln-sr-a.js`, `bilder-sr-blau.js` |
| 3b | Die erdrückenden Tiefen | S&R S. 40–65 | Welt (40–51) → Die Wildsee; Regeln (52–65) → Regeln, Gruppe „Die erdrückenden Tiefen“ | `wildsee-sr-b.js`, `regeln-sr-b.js`, `bilder-sr-tiefe.js` |
| 4a | Charakteroptionen I | S&R S. 66–85 | Komplexe/Zusätzliche Aspekte → Charaktere Kap.-Gruppe „Storm and Root“; Itzenko → Blutlinien; Kosmer, Heartskavo, Stowaway, Submerged, Windward → Herkünfte | `charaktere-sr-a.js`, `bilder-sr-char-a.js` |
| 4b | Charakteroptionen II | S&R S. 86–109 | 12 Posten (Augur … Zealot) → Posten | `charaktere-sr-b.js`, `charaktere-sr-c.js`, `bilder-sr-char-b.js` |
| 5 | Erweiterter Schiffsbau | S&R S. 110–133 | Schiffe › Gruppen „Luftschiffe“, „Tauchboote“ | `schiffe-sr-*.js`, `bilder-sr-schiffe.js` |
| 6a | Gefahren I | S&R S. 134–159 | Gefahren (Naturgewalten, Bestien, Insekten, Pflanzen) | `gefahren-sr-a.js` |
| 6b | Gefahren II | S&R S. 160–185 | Konstrukte, Plünderer, Krankheiten, Leviathane | `gefahren-sr-b.js` |
| 7a | Bausteine + Nadir | S&R S. 186–211 | Pseudo-Reich „Weitere Orte & Fraktionen“ (`sr-bausteine`) + Reich Nadir | `reich-sr-bausteine.js`, `reich-nadir.js` |
| 7b | Rao Ze + Zentinel’s Rise | S&R S. 212–235 | Reiche | `reich-raoze.js`, `reich-zentinel.js` |
| 7c | Fjandango + Duzakh’s Vent | S&R S. 236–257 | Reiche | `reich-fjandango.js`, `reich-duzakh.js` |
| 7d | The Myconica | S&R S. 258–269 | Reich | `reich-myconica.js` |
| 8 | Ratschläge, Glossar, Regelübersicht | S&R S. 270–291, 294–295 | Kap. 7 → Leitfaden, Gruppe „Storm and Root“; Glossar → Am Tisch (eigene Abschnitte „Glossar Storm and Root“); Regelübersicht → zusätzliche Gruppen im Spielleiterschirm (`schirm-sr.js`, Format wie `data/schirm.js`) | `leitfaden-sr.js`, `tisch-sr.js`, `schirm-sr.js` |

Bilder macht jedes AP für seinen Bereich selbst (Regeln in `/tmp/img_brief.md`): Illustrationen ja, Aquarellränder/Streifen/Logos nein, Doppelseiten als ein Bild, Hochformat bleibt hoch, Porträts ungeschnitten, im Zweifel weglassen. Gefahren-Bilder klein in der Gefahrenkarte. Kapitel-Eröffnungsbilder (S&R S. 6, 40, 66, 110, 134, 186, 270, 288; SG S. 1/3) als Hero-Einträge **melden** (Pfad, Maße), nicht selbst in `hero.js` schreiben.

### Welle 3 – Integration & Prüfung (Hauptsitzung)
1. Alle Dateien registrieren (index.html, sw.js-Precache, VERSION).
2. Hero-Banner der Erweiterungskapitel in `hero.js` (Kicker „Storm and Root · Kapitel N“ / „Schiffsgärten“).
3. Reiche-Übersicht: zweite Reihe „Storm and Root“ (6 Reiche + „Weitere Orte & Fraktionen“), Startseite-Chip „Fertige Charaktere“.
4. Begriffe aus den Agent-Berichten vereinheitlichen (Suchen/Ersetzen), Glossar oben ergänzen.
5. Doppelte IDs prüfen (Node-Ladetest aller WS_NACH-Bereiche, WS_GEFAHR, WS_REICH), keine JS-Fehler.
6. Screenshots 1440×900 **und** 1280×800 von: Charaktere-Übersicht, jeder fertige Charakter, 2 S&R-Posten, Itzenko, Luftschiffe, Gartenpflanzen, Gefahren-Browser mit Quellenfilter, jedes neue Reich (Übersicht + Auf See), Spielleiterschirm. Lücken/Überlauf beheben.
7. Commit ohne Co-Authored-By/Claude-Session, Push, Screenshots an Moritz.

### Welle 4 – Werkzeuge (von Moritz gewünscht, nach Welle 3)
- **Gartenbogen als Werkzeug:** Beete mit vier Vierteln, Pflanze wählen (aus den Buchpflanzen), Wachstums- und Ernte-Leisten anklicken, gespeichert im Spielstand.
- **Auf See im Himmel/in der Tiefe:** Im Reich-Leitstand Umschalter „Wellen / Wildes Blau / Tiefe“ – nutzt die Wache-Ergebnisse von S&R S. 28 bzw. 56 und zeigt Höhe/Aufmerksamkeit bzw. Druck-Leiste.

---

## 6. Startauftrag je Agent (zum Kopieren)

> Lies `plan/WILDSEA_ERWEITERUNGEN_PLAN.md` (Abschnitte 1–4) und `plan/WILDSEA_PLAN.md` Abschnitt 2 im Repo `/home/claude/spielleitertool` sowie `/tmp/agent_brief.md` und `/tmp/img_brief.md`. Setze **AP X** um. Englischer Text: `quellen/wildsea/text/…` (Seitenmarken), Bilder aus dem PDF unter `/mnt/user-data/uploads/…`. Übersetze vollständig ins Deutsche (Glossar Abschnitt 3), nichts weglassen, nichts erfinden, Randvignetten als `{erz}`. Nur eigene Dateien anlegen, `node --check` jede Datei, kein git, index.html/sw.js nicht anfassen. Bericht: Dateien in Ladereihenfolge, Abschnitt-/Eintragsanzahl, Bilder (Pfad, Maße, Zuordnung), Hero-Kandidaten, neue Begriffe, Unsicherheiten.

Agents mit `model: "sonnet"` starten; Welle 2 in zwei Schüben zu je ~7 Agents.

## 7. Umfang (Schätzung)

~290 Buchseiten Text, ~120–180 brauchbare Illustrationen, 9 fertige Charaktere. 17 Agent-Aufträge + Integration.
