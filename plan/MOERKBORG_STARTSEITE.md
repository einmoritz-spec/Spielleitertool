# Mörk Borg – Übergreifende Startseite („Die Bibliothek“)

Ziel: Eine große Startseite, auf der **alles** zu Mörk Borg sichtbar und anklickbar ist – Regelwerke, Abenteuer, Zusatzmaterial, Hacks, Material. Statt des heutigen schlichten Registers. Das Register (Teile I–IV) bleibt als Unterseite „Nachschlagen“ erhalten.

## 1. Bestand (Drive-Ordner, alle EN, 25 PDFs)
| Gruppe | Inhalt |
|---|---|
| 01 Regeln | Corebook ✔ (im Tool), Rules Apocrypha ✔ (im Tool) |
| 03 Abenteuer | Tragic Castle Obsession · Adventures (Sammelband) · NiG Demon Dog |
| 04 Zusatz | Cult Heretic · Cult Feretory · Solitary Depths · Vast Grimm · Porkin the Void · Cy_Borg Gutter PVNKS · Innistrad x Mörk Borg Equipment · Forbidden Psalm v1 · Forbidden Psalm Rotten Bits · Book of Misery · Box of Shadows |
| 05 Material | Cy Map · Character Sheet |
| 06 Hacks | Ronin · Bork Borg · Dukk Borg · Orc Borg · Fisk Borg · Star Borg · Blood Borg · Cy_Borg (2 Fassungen) |
(Ein Ordner „02“ fehlt in der Reihe – klären.)

## 2. Aufbau der Startseite
1. **Kopfband (groß, Titelbild):** Skelett-Titelbild wie jetzt, Schriftzug nur „Mörk Borg“; schrumpft beim Runterscrollen zur schmalen Leiste.
2. **Weiter-Zeile:** „Zuletzt geöffnet“ (bis 4 Karten, aus `ST`) + Knopf „Zum Spieltisch“ (Kalender, Tag, Siegel wie bisher).
3. **Regale (Hauptteil), je Gruppe ein Regal aus Cover-Karten:**
   - **Regelwerke** – Corebook, Apokryphen
   - **Abenteuer** – Rotblack Sludge (im Corebook) + die drei Abenteuer-PDFs
   - **Zusatzmaterial** – 11 Karten
   - **Hacks** – 9 Karten (Ronin, Bork, Dukk, Orc, Fisk, Star, Blood, Cy_Borg …)
   - **Material** – Charakterbogen, Cy Map
   Karten sind hochkant (Cover der PDF, Seite 1), Hover wächst leicht, darunter Name + Art (Abenteuer/Hack/…) + Status-Marke:
   - **Spielbereit** (deutsch im Tool), **Im Bau**, **Nur PDF** (Original öffnen, noch nicht übersetzt).
4. **Filterleiste oben:** Alle · Regeln · Abenteuer · Zusatz · Hacks · Material; dazu ein Suchfeld (nutzt `suche.js`, filtert nur die Karten).
5. **Klick auf eine Karte** öffnet je nach Status:
   - Spielbereit → deutsche Ansicht des Buchs (eigener Bereich, z. B. `#buch/<id>`).
   - Nur PDF → Bookviewer mit dem Original (PDF muss lokal hochgeladen sein, sonst Upload-Dialog).
   Rechts unten an jeder Karte: kleines Buch-Symbol = immer Original-PDF öffnen.
6. **Fuß:** Register (die vier Teile) als einklappbare Leiste „Nachschlagen: Welt · Regeln · Verdammte · Apokryphen“ – damit nichts verloren geht.

## 3. Setting-Dropdown (toolmenu.js)
- „Mörk Borg“ bleibt Übersetting; Untermenü (erst nach 1,5 s Hover aufklappend, Regel gilt überall): **Übersicht · Abenteuer · Zusatz · Hacks**.
- Jeder Eintrag springt auf die Startseite mit gesetztem Filter (`#start/abenteuer` usw.). Einträge nur für Bereiche, die Inhalt haben.
- Einzelne Hacks bekommen **keinen** eigenen Dropdown-Eintrag (zu viele), sie leben als Karten auf der Startseite.

## 4. Datenmodell (neu: `js/data/bibliothek.js`)
```
{id, gruppe:"regeln|abenteuer|zusatz|hack|material", t, sub (Autor/Art), cover:"cover/<id>", buch:"mb_xx" (Bookviewer-Id),
 status:"bereit|bau|pdf", route:"buch/<id>" | null, p (Seitenzahl)}
```
- Jedes neue Buch: eigener Datei-Satz (`js/data/b-<id>-*.js`, wie `abenteuer-a/b.js`), eigene Bilder in `img/<id>/`, Eintrag in `bibliothek.js`, `buecher.js`, `sw.js`.
- Covers: Seite 1 jedes PDFs als webp (~600 px, ohne Rand/Titelschrift-Zusatz), einmalig per Skript aus allen 25 PDFs → `img/cover/`.

## 5. Bauplan (Reihenfolge)
1. **Covers + Katalog:** alle 25 PDFs ins Arbeitsverzeichnis holen (Drive-Download, Größen bis 190 MB), Cover erzeugen, `bibliothek.js` anlegen, `buecher.js` erweitern (PDF-Upload pro Buch). Hinweis: Das Einlesen großer PDFs dauert; Cover-Erzeugung geht trotzdem automatisch.
2. **Startseite:** neues `start.js`-Layout (Kopfband, Weiter-Zeile, Regale, Filter, Suchfeld), altes Register wandert nach `#nach/register`.
3. **Dropdown:** Untermenü in `toolmenu.js` (nur Mörk-Borg-Zweig).
4. **Büchereinzelansicht `#buch/<id>`:** generische Seite (Titelbild, Inhaltsverzeichnis, Abschnitte als Karten), dieselben Bausteine wie `orte.js`/`abenteuer.js`.
5. **Inhalte, Buch für Buch** (je Schritt: lesen → übersetzen → bauen → Screenshot → pushen → fragen): Tragic Castle Obsession → Adventures → NiG Demon Dog → Zusatz (nach deiner Wahl) → Hacks. Charakterbogen zuletzt (PDF ist vorhanden).
6. Abschlusskontrolle: 1280 px, eingeklappte Leiste, keine JS-Fehler, Lücken, Suche über alle neuen Bücher.

## 6. Entscheidungen, die ich von dir brauche
- Reihenfolge der Bücher nach den Abenteuern (z. B. zuerst Cult Heretic / Forbidden Psalm / Book of Misery?).
- Hacks: alle komplett übersetzen oder erstmal nur als „Nur PDF“-Karten mit Original öffnen? (Cy_Borg, Dukk, Ronin … sind riesig.)
- Soll „Nur PDF“ standardmäßig sichtbar sein oder nur „Spielbereit“ (mit Schalter „alle zeigen“)?
