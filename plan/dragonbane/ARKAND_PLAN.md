# Arkand – Stadt der Wellen und Flammen (Untersetting von Dragonbane)

Quelle: `/mnt/user-data/uploads/642e3c75-Dragonbane___Setting___Arkand_City_of_Waves_and_Flames_EN_OEF_2025.pdf` (87 S., **Buchseite = PDF-Seite − 4**, Bookviewer-Id `db_ark`, `off=4`; PDF-Seitenformat 612×791 pt).
Zuerst lesen: `plan/dragonbane/ABENTEUER_PLAN.md` (Regeln §1, Modell §2, Namen §6) und `ABENTEUER_PHASE_B.md` (Motor, Felder, „Fertig heißt“) – gelten 1:1. Vorlage im Datenformat: `dragonbane/js/data/ab-burg.js`, `ab-pg-herz-a.js`; Band-Einführung mit Abschnitten: `abenteuer-baende-pg.js`.

## Aufbau (steht schon)
- Dropdown „Arkand“ unter Dragonbane (`dragonbane/#arkand`), Übersicht `js/arkand.js` mit zusammengesetzter Stadtkarte `img/abenteuer/ark-karte.webp` und Orts-Pins (ARK_ORTE).
- Drei Bände in `DB_BAENDE` (`abenteuer-baende.js`, `setting:1`): **ark** (Die Stadt; ab: `ark-lied`), **ark-hafen** (ab: `ark-tempel`, `ark-tiefe`, `ark-feder`, `ark-feder4`, `ark-gilde`), **ark-dung** (ab: `ark-einhorn`, `ark-perle`, `ark-tinte`, `ark-palast`). Band-Seite `#k/<band>`: Tabs Karte · Einführung (Abschnitte mit Seitenleiste) · Abenteuer.
- Einführungs-Dateien (Platzhalter, **füllen**): `js/data/ark-einf-stadt-a.js`, `-stadt-b.js` (beide → `DB_BAND.ark.einf`), `ark-einf-hafen.js` (→ `DB_BAND["ark-hafen"].einf`), `ark-einf-dung.js` (→ `DB_BAND["ark-dung"].einf`). Schreibweise: `DB_BAND["ark"].einf = (DB_BAND["ark"].einf || []).concat([ {id,t,p,b:[…]}, … ]);` (Abschnitte `{id, t, p, b:[Blöcke]}`; Blöcke wie DB_NACH: Strings, `{h}`, `{ul}`, `{ol}`, `{tbl:{head,rows}}`, `{karte}`, `{stein}`, `{zit}`, `{bild:{img,t?,p?,kl?}}`).
- Abenteuer-Dateien (Platzhalter mit `stub:1`, **komplett ersetzen**): `js/data/ab-ark-<id>.js` → `DB_AB["ark-<id>"] = {id, t, band, buch:"db_ark", p, img, bereiche, figuren, kaesten, tabellen, …}`. Jeder Ort mit Grundriss/Plan (nummerierte Räume) = eigene `karte` mit Pins (Prozentwerte aus den Vektor-Wörtern der PDF-Seite berechnen, nicht schätzen).
- Bilder: `dragonbane/img/abenteuer/ark-<abenteuer-oder-band>-<was>.webp`; `python3 -I plan/dragonbane/extract_images.py "<pdf>" dragonbane/img/abenteuer … off=4` (xref/clip/spread/trim). Titelbild je Abenteuer `ark-<id>-titel` (Kapitel-Eröffnungsbild), Band-Titel `ark-hafen-titel` (PDF 24), `ark-dung-titel` (PDF 62) – nur Illustration, ohne Titeltext/Rand (Standing-Regel).
- Seitenangaben „S. n“ = Buchseite (PDF − 4).
- Namen: neue Festlegungen EN→DE in `plan/dragonbane/namen-ark-<paket>.md`. Bereits gesetzt: Arkand, Hafen („The Harbor“), Dung („The Dung“), „Das Lied des Mantikors“, „Der Tempel des Endlosen Meeres“, „Der Tod in der Tiefe“, „Das Handelshaus Weiße Feder“, „Die Weiße Feder IV“, „Die Gilde der Wellen“, „Das Witzlose Einhorn“, „Die Gesprungene Perle“, „Die Seelentinte“, „Der Palast der Verjüngung“ (falls ein Titel im Text besser anders übersetzt werden muss: Datei `ark-…` unverändert lassen, Titel nur in `t` ändern und in der Meldung nennen). **Vor dem Festlegen eines Namens die anderen `namen-ark-*.md` und `namen-b*.md` lesen** (Einheitlichkeit).
- Gegner: `be:"<DB_MON-id>"` wenn es das Bestiarium-Monster gibt; sonst eigene Figur-Karte mit Werten.

## Pakete
| Paket | PDF-Seiten | Ergebnis |
|---|---|---|
| K1 | 8–15 | `ark-einf-stadt-a.js` (Vorwort/Benutzung, Legende, Geschichte, Arkand heute …) |
| K2 | 16–23 | `ab-ark-lied.js` (Lied des Mantikors, S. 12), `ark-einf-stadt-b.js` (Abenteuer in Arkand, Besetzung, NSC-Tabellen) |
| K3 | 24–28, 39–44 | `ark-einf-hafen.js` (+ `ark-hafen-titel`), `ab-ark-tiefe.js` |
| K4 | 29–38 | `ab-ark-tempel.js` |
| K5 | 45–53 | `ab-ark-feder.js` |
| K6 | 54–61 | `ab-ark-feder4.js`, `ab-ark-gilde.js` |
| K7 | 62–73 | `ark-einf-dung.js` (+ `ark-dung-titel`), `ab-ark-einhorn.js` |
| K8 | 74–81 | `ab-ark-perle.js`, `ab-ark-tinte.js` |
| K9 | 82–85 | `ab-ark-palast.js` |
