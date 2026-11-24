# Ein System neu anlegen oder ausbauen

Ziel: Moritz schickt nur das PDF (oder mehrere) und sagt „leg System X an“ bzw. „bau System X aus“. Alles Weitere steht hier.

Vorbilder im Repo: **Heart** (`heart/`) und **Tales from the Loop** (`tftl/`, mit Flood und Electric State) für Navigation und Startseite, **Pico** (`pico/`) für ein kleineres System mit gleichem Muster.

---

## 0. Vorbereitung
1. PDF nach `quellen/<system>/` legen (wird nicht veröffentlicht).
2. Text seitenweise extrahieren (`pdftotext -layout`), Inhaltsverzeichnis und Kapitelstruktur erfassen. Seitenzahlen = **Buchseiten**, nicht PDF-Seiten (Versatz einmal bestimmen).
3. Bei englischen Büchern: alles ins Deutsche übersetzen, nirgends englische Begriffe stehen lassen.
4. Einzelplan `plan/<SYSTEM>_PLAN.md` anlegen: Bereiche, Kapitel, Bilder, Sonderfälle. Bei Ausbau eines bestehenden Systems den vorhandenen Plan fortschreiben.
5. Bei großem Umfang (viele Kapitel, Abenteuer, Bilder): kurz die Aufteilung nennen und in Etappen pushen, damit Moritz früh sieht, wohin es geht.

## 1. Gerüst
- Ordner `<system>/` mit `index.html`, `style.css`, `sys.js` (Name, Logo, Farben, Schriften), `js/app.js` (Router per `location.hash`), `js/data/…`.
- Daten **aufteilen**: eine Datei pro Kapitel/Abenteuer/Bereich, keine Riesendateien.
- Gemeinsame Bausteine einbinden (siehe Abschnitt 7): `../toolmenu.js`, `../shared/galerie.js`, `../shared/gsuche.js`, `../shared/seitenleiste.js`, `../bookviewer/…`.
- System im Setting-Dropdown registrieren: Liste oben in `toolmenu.js` (Zeile mit `["id","Name","",…,{m:"assets/logos/…"}]`), echtes Logo nach `assets/logos/<system>.webp` (freigestellt, ohne Rand). Untersettings wie bei City of Mist als Untermenü.
- Viewport auf 1280 px (Desktop-Ansicht auch am Handy), Zoomen erlaubt.

## 2. Kopfzeile und Navigation (wie Heart / Tales from the Loop)
- **Kopfzeile:** links nur das Logo (führt zur Startseite), daneben **nur die inhaltlichen Bereiche als Reiter** (z. B. *Die Welt | Regeln | Spielleitung*). Keine Reiter wie „Vorbereitung“, „Spiel“, „Buch“. Keine Trennlinien zwischen Reitern. Auf der Startseite stehen keine Reiter.
- **Rechts:** i-Knopf, Buch-Knopf (PDF), Such-Knopf, Galerie-Knopf, Burger-Menü – nur Symbole, ohne Umrandung.
- **Unterleiste:** direkt unter der Kopfzeile, gleiche Schrift wie die Kopfzeile; der aktive Reiter geht optisch nahtlos in sie über (gleiche Farbe). Bereiche mit nur einem Unterpunkt haben keine Unterleiste.
- Karte gehört zu „Welt“. Unterbereiche wie Loops/Regionen als Umschalter in der Unterleiste.
- Spielwerkzeuge (Charakterbögen, Leitstand eines Abenteuers) liegen in der passenden Unterleiste oder im Burger-Menü, nie als Kachel auf der Startseite.
- Abenteuer/Mysterien: eigene Leiste **unter** der Kopfzeile (wie `body.lt` bei Tales from the Loop), nie in die Kopfzeile quetschen.
- Code-Vorlagen: `heart/js/app.js` (`kopfTabs`), `heart/js/nach.js` (`regelnUnter`), `tftl/js/nach.js` (`TX_G`, `TX_TABS`, `TX_ITEMS`), `pico/js/nach.js` (`piAreas`, `piNav`).

## 3. Seitenleiste
- Nur wo es mehrere Abschnitte gibt; Seiten, die mit einem Kachel-Raster beginnen, haben keine.
- Eine Ebene, minimalistisch: feine Trennlinie, aktiver Eintrag farbig mit schmalem Strich links, keine Kästen.
- **Zusammenfassen:** kurze Abschnitte (~ein Absatz) bilden mit den folgenden einen Eintrag; rechts stehen sie untereinander mit eigenen Überschriften. Der aktive Eintrag zeigt seine Unterabschnitte klein und grau darunter (Klick springt hin). Nummerierte Reihen (Phase 1–6, Teil 1…) **nie** zusammenlegen. Vorlage: `gruppen()` in `tftl/js/nach.js`, `nLen`/`packs` in `pico/js/nach.js`.
- Titel nur bis zum Doppelpunkt. Titel mit Gedankenstrich werden automatisch zweiteilig (macht `toolmenu.js`). Zweizeilig ist ok, aber kleine Schrift.
- Beginnt ganz oben; Einklapp-Pfeil **‹ rechts neben dem ersten Eintrag**; bleibt beim Scrollen stehen (sticky). Layout auch eingeklappt prüfen.
- Keine Seitenzahlen im Seitenmenü nötig; keine „Weiter ›“-Knöpfe unter den Seiten.

## 4. Startseite
- Im Stil des Buch-PDFs: großes Titelbild (Ausschnitt so, dass Schriftzug/Motiv mittig sitzt), Farben und Schriften des Buchs.
- Darunter **Einstiege in die Bereiche**, die danach als Reiter in der Kopfzeile stehen: je Bereich eine Bildkarte mit Titel und den Unterpunkten als ruhige Liste (Vorlagen: `VS.bereiche` in `tftl/js/start.js`, `viewStart` in `pico/js/app.js`).
- Abenteuer/Mysterien als Bildkarten (z. B. Cover-Raster, Klick klappt den Hover-Bildstreifen auf); sortiert (Kampagnen, Trilogien, Sammlungen).
- **Keine Seitenzahlen, keine Kapitelangaben, keine Erklärtexte** auf der Startseite (`toolmenu.js` entfernt „S. …“ zusätzlich automatisch).

## 5. Inhalte
- Nur Text aus dem PDF, nichts erfinden; Solo-/Oracle-/Koop-Regeln weglassen.
- Lesetext breit und gut lesbar; nie lange Einzelspalten – Raster nutzen, Seitenelemente schweben begrenzt breit.
- Alles, was im Buch ein Kasten ist (Gegner, Gegenstände, Zauber, Rezepte …), als **echte Karte**. Themenkarten eingeklappt. D66-Tabellen mit kurzen Einträgen als 6×6-Raster (Vorlage `wuerfelTab` in `tftl/js/nach.js`).
- Vorlesetext-Kästen ohne Beschriftung „Vorlesen“.
- Seitenangaben immer „S. 12“, als Link, der das hochgeladene PDF an der Stelle öffnet; nur in Detailansichten.
- Notizen nur als Stift-Symbol.
- Szenen mit Unterszenen: schmale Liste links, rechts alles flach untereinander.
- Charakterbogen so nah wie möglich am Original, als ausfüllbares PDF (`shared/charsheet.js`, `shared/fillpdf.js`).

## 6. Bilder und Galerie
- Bilder aus dem PDF extrahieren, Doppelseiten als ein Bild, sofort eindeutig benennen (`<kapitel>-<motiv>.webp`).
- Freistellen: meist viereckig zuschneiden (gerade Kanten, keine Reste); nur Figuren detailliert ausschneiden. Transparenz beim Umwandeln nie schwarz werden lassen.
- Ungeschnitten nach Seitenverhältnis einbauen; Gegnerbilder klein in die Karte; nur Bilder, die im Buch wirklich dazugehören.
- Galerie: `js/data/galerie-<buch>.js` mit `Galerie.reg("<system>", {key, name, dir, items:[[datei, breite, höhe, seite]]})`, Dateien unter `<dir>full/` und `<dir>thumb/` als WebP. Schlüssel in `GALKEY` in `toolmenu.js` eintragen.

## 7. Gemeinsame Bausteine (nicht neu bauen, einbinden)
| Datei | Zweck |
|---|---|
| `toolmenu.js` | Setting-Dropdown, Kopfzeilen-Knöpfe, Pfeiltasten (←/→ Unterleiste, ↑/↓ Seitenleiste, Strg+←/→ Kopfzeile), keine Seitenzahlen auf Startseiten, zweiteilige Seitenleisten-Titel |
| `shared/gsuche.js` | Volltextsuche mit „f“: `GSuche.add(function(add){ add(titel, bereich, hash, daten); })`, `window.sucheOpen = GSuche.open` |
| `shared/galerie.js` | Galerie-Overlay |
| `shared/seitenleiste.js` | Taste „<“ klappt die Seitenleiste ein |
| `shared/zurueck.js`, `shared/ux.js` | Esc zurück, „h“ blendet die Kopfzeile aus |
| `bookviewer/` | PDF lokal hochladen und an Seite öffnen |
| `shared/charsheet.js`, `shared/fillpdf.js` | Charakterbögen, ausfüllbares PDF |
| `shared/notes.js` | Notizen (Stift) |

## 8. Tastenkürzel (müssen funktionieren)
←/→ Unterleiste · ↑/↓ Seitenleiste · Strg+←/→ Kopfzeilen-Reiter · Esc zurück · h Kopfzeile aus/ein · f Suche · m Karte · < Seitenleiste einklappen.

## 9. Prüfen und Abschluss
1. Playwright mit `/usr/bin/google-chrome`, `--allow-file-access-from-files`, Viewport 1280×800; jede Route einmal laden.
2. Startseite, jeder Reiter, jede Unterleiste, Seitenleiste offen und eingeklappt, eine Detailseite mit Karte, Galerie, Suche, Tastenkürzel. Auf JS-Fehler achten (`page.on("pageerror")`).
3. Screenshots ansehen und Lücken, Überlappungen, abgeschnittene Bilder beheben, bevor gepusht wird.
4. `sw.js`-Version erhöhen, neue Dateien in `FILES`, `git fetch && git rebase origin/main`, committen (ohne Attribution), pushen.
5. Moritz kurz berichten, was neu ist, mit Screenshots; offene Punkte ehrlich nennen.

## Checkliste (Kurzform)
- [ ] PDF in `quellen/`, Einzelplan in `plan/`
- [ ] Logo, Dropdown-Eintrag, `sys.js`
- [ ] Startseite im Buchstil mit Bereichs-Einstiegen, ohne Seitenzahlen
- [ ] Bereiche als Reiter in der Kopfzeile, Unterleiste darunter
- [ ] Seitenleiste minimalistisch, zusammengefasst, ‹ am ersten Eintrag
- [ ] Kästen als Karten, D66 als Raster, Seitenlinks „S.“
- [ ] Galerie, Suche („f“), Karte („m“), PDF-Upload
- [ ] Tastenkürzel getestet
- [ ] Charakterbogen als ausfüllbares PDF (falls vorhanden)
- [ ] Screenshots geprüft, auch eingeklappt
- [ ] `sw.js`-Version, Rebase, Push
